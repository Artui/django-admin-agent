"""Shared fixtures for driving the tools as a particular admin user.

Every tool that reads a model answers as the staff user whose request is bound
for the call, so a test that wants rows back has to say who is asking. These
build the three interesting kinds of asker: a superuser, a staff user holding
named permissions, and a staff user holding none — the last being the one the
authorization tests are written around.
"""

from __future__ import annotations

from collections.abc import Callable, Iterator
from contextlib import contextmanager
from typing import Any

import pytest
from django.contrib.auth.models import Permission
from django.test import RequestFactory

from django_admin_agent.tools.bind_acting_request import bind_acting_request
from django_admin_agent.tools.utils import ACTING_REQUEST


@pytest.fixture(autouse=True)
def _no_acting_request_leaks() -> Iterator[None]:
    """Start and end every test with nothing bound.

    A test that binds without unbinding would otherwise hand the next test a
    stale user, and the tests that assert an unbound call is refused would pass
    or fail on ordering.
    """
    token = ACTING_REQUEST.set(None)
    try:
        yield
    finally:
        ACTING_REQUEST.reset(token)


def request_for(user: Any) -> Any:
    """A POST to the agent endpoint, acting as ``user``."""
    request = RequestFactory().post("/admin-agent/")
    request.user = user
    return request


@contextmanager
def acting_as(user: Any) -> Iterator[Any]:
    """Run the block with ``user``'s request bound, as the endpoint would."""
    with bind_acting_request(request_for(user)):
        yield user


@pytest.fixture
def make_staff_user(django_user_model: Any) -> Callable[..., Any]:
    """Build a staff user holding exactly the permissions named, and no others.

    ``perms`` entries are ``"app_label.codename"``, e.g. ``"testapp.view_author"``.
    """

    def _make(username: str, *, perms: tuple[str, ...] = ()) -> Any:
        user = django_user_model.objects.create_user(username, password="pw", is_staff=True)
        for entry in perms:
            app_label, codename = entry.split(".")
            user.user_permissions.add(
                Permission.objects.get(content_type__app_label=app_label, codename=codename),
            )
        return django_user_model.objects.get(pk=user.pk)

    return _make


@pytest.fixture
def superuser(django_user_model: Any) -> Any:
    return django_user_model.objects.create_superuser("root", "root@example.com", "pw")


@pytest.fixture
def as_superuser(superuser: Any) -> Iterator[Any]:
    """Bind a superuser's request for the whole test."""
    with acting_as(superuser) as user:
        yield user
