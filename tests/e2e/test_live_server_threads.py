"""The live server's threads must not share one database connection.

The sidebar's page load fires the tool list and the thread list at the same
moment, and the live server answers each on its own thread. On an in-memory
sqlite database Django hands every server thread the *same* connection (a second
one would open a different, empty database), and two threads driving one sqlite
connection corrupt each other's reads: a session lookup comes back empty (the
request looks anonymous and answers 401) or raises
``sqlite3.InterfaceError`` (500). That made the browser suite fail
intermittently in CI, in whichever test loaded a page at the wrong moment.

These two tests pin the cause and the symptom separately, so a settings change
that reintroduces the shared connection fails here, with its reason, instead of
as a flake in whichever browser test happened to load a page at that moment.
"""

from __future__ import annotations

import urllib.error
import urllib.request
from concurrent.futures import ThreadPoolExecutor

import pytest

pytestmark = [pytest.mark.e2e]

# A page load is two or three requests at once; this is several times that,
# repeatedly, so the collision that is a coin flip in the browser is a certainty
# here. Fewer workers than the live server's accept backlog (Django's
# ``ThreadedWSGIServer.request_queue_size`` is 10): more than that and the
# client sees refused connections, which is not what this test is about.
_ROUNDS = 80
_WORKERS = 4
_PATHS = ("/admin-agent/tools/", "/admin-agent/threads/", "/admin/")


def test_server_threads_do_not_share_a_connection(live_server):  # noqa: ANN001, ANN201
    # The cause, stated directly. ``connections_override`` is what pytest-django
    # fills for an in-memory sqlite database and only for that, so it is empty
    # exactly when each server thread opens its own connection. Without this
    # the test below could only fail by timing.
    assert live_server.thread.connections_override == {}


def test_concurrent_requests_all_see_the_signed_in_user(live_server, client, django_user_model):  # noqa: ANN001, ANN201
    user = django_user_model.objects.create_superuser("admin", "admin@example.com", "password")
    client.force_login(user)
    cookie = f"sessionid={client.cookies['sessionid'].value}"

    def status(path: str) -> int:
        request = urllib.request.Request(live_server.url + path, headers={"Cookie": cookie})
        try:
            with urllib.request.urlopen(request, timeout=30) as response:
                return response.status
        except urllib.error.HTTPError as error:
            return error.code

    with ThreadPoolExecutor(max_workers=_WORKERS) as pool:
        statuses = list(pool.map(status, _PATHS * _ROUNDS))

    # 401 is a session read that came back empty; 500 is the sqlite error.
    assert [s for s in statuses if s != 200] == []
