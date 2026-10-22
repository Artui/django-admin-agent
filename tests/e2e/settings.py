"""Django settings for the browser e2e suite (live admin + sidebar)."""

from __future__ import annotations

import os
import tempfile
from pathlib import Path

SECRET_KEY = "e2e"
DEBUG = True
ALLOWED_HOSTS = ["*"]
USE_TZ = True

INSTALLED_APPS = [
    "django.contrib.contenttypes",
    "django.contrib.auth",
    "django.contrib.admin",
    "django.contrib.messages",
    "django.contrib.sessions",
    "django.contrib.staticfiles",
    "django_admin_agent",
    # The conversation store `urls.py` mounts, so the sidebar gets a thread
    # index and a reload replays the server's copy of the conversation.
    "django_spec_agents.contrib.store",
    "tests.testapp",
]

ROOT_URLCONF = "tests.e2e.urls"

# A file, not ``:memory:``. The live server answers each request on its own
# thread, and Django (and pytest-django's ``live_server``) hands a sqlite
# in-memory database to those threads as ONE shared connection, because a second
# connection would open a different empty database. The sidebar's page load
# fires the tool list and the thread list at once, so two threads then drive one
# sqlite connection concurrently: a session read came back empty (the request
# looked anonymous: 401 on ``/admin-agent/tools/``) or raised
# ``sqlite3.InterfaceError`` (500), and a ``get()`` saw another thread's rows.
# That was an intermittent failure in CI that no test change could explain.
# Against a file each thread opens its own connection, as it does in any
# deployment. ``tests/e2e/test_live_server_threads.py`` fails on ``:memory:``.
#
# The name carries the pid so two suites on one machine do not clobber each
# other; Django deletes the file when the session ends. ``NAME`` is the line
# that matters: the session-scoped ``live_server`` is built before the test
# database is set up, so pytest-django judges "in memory" from ``NAME``.
# ``TEST["NAME"]`` keeps the result the same if a ``db`` test happens to run
# first.
_DB_FILE = str(Path(tempfile.gettempdir()) / f"django_admin_agent_e2e_{os.getpid()}.sqlite3")

DATABASES = {
    "default": {
        "ENGINE": "django.db.backends.sqlite3",
        "NAME": _DB_FILE,
        "TEST": {"NAME": _DB_FILE},
    }
}

MIDDLEWARE = [
    "django.contrib.sessions.middleware.SessionMiddleware",
    "django.middleware.common.CommonMiddleware",
    "django.middleware.csrf.CsrfViewMiddleware",
    "django.contrib.auth.middleware.AuthenticationMiddleware",
    "django.contrib.messages.middleware.MessageMiddleware",
]

TEMPLATES = [
    {
        "BACKEND": "django.template.backends.django.DjangoTemplates",
        # Our admin/base_site.html override (which injects the sidebar) wins
        # over the admin app's via DIRS precedence.
        "DIRS": [Path(__file__).resolve().parent / "templates"],
        "APP_DIRS": True,
        "OPTIONS": {
            "context_processors": [
                "django.contrib.auth.context_processors.auth",
                "django.contrib.messages.context_processors.messages",
                "django.template.context_processors.request",
            ],
        },
    },
]

STATIC_URL = "static/"
DEFAULT_AUTO_FIELD = "django.db.models.AutoField"

# The agent model is supplied per-mount via get_urls(model=...) in urls.py.
DJANGO_AG_UI: dict[str, object] = {}
