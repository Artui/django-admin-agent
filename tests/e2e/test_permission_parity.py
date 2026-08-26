"""Permission parity, driven the way a person drives it.

The Python suite pins the tools and the endpoint's per-run hook separately.
This asserts they meet: a real browser, a real login, a real agent run over
HTTP, and the tool answering as whoever is logged in. It is the only place the
whole chain — session cookie, authorize gate, deps hook, context binding,
tool — runs at once.

Run with ``make test-e2e``.
"""

from __future__ import annotations

import pytest
from playwright.sync_api import expect

from tests.e2e.conftest import send_message

pytestmark = [pytest.mark.e2e, pytest.mark.django_db(transaction=True)]


def test_a_superuser_gets_the_count(admin_page, live_server):  # noqa: ANN001, ANN201
    from tests.testapp.models import Author

    Author.objects.create(name="Bea")
    admin_page.goto(f"{live_server.url}/admin/")

    send_message(admin_page, "how many authors are there?")

    expect(
        admin_page.locator("ag-ui-chat .message--assistant", has_text="Counted the authors. 1"),
    ).to_be_visible(timeout=15000)


def test_staff_without_model_permissions_gets_nothing(limited_page, live_server):  # noqa: ANN001, ANN201
    """``is_staff`` opened the sidebar; it does not open the table.

    Before this, the same question answered with a row count over every author
    in the database, because the tool read the default manager and never asked
    whether this user could open the changelist.
    """
    from tests.testapp.models import Author

    Author.objects.create(name="Bea")
    limited_page.goto(f"{live_server.url}/admin/")

    send_message(limited_page, "how many authors are there?")

    reply = limited_page.locator("ag-ui-chat .message--assistant")
    expect(reply.first).to_be_visible(timeout=15000)

    # The tool refused, so the reply carries the failure rather than a count.
    # The reason itself stays server-side by default (it goes to the audit
    # trail and the log); DJANGO_AG_UI["TOOL_FAILURE"]["INCLUDE_DETAIL"] is
    # what puts it in front of the user.
    text = reply.first.text_content() or ""
    assert "count_model tool failed" in text
    assert "Counted the authors. 1" not in text
