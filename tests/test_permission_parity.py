"""The endpoint's half of permission parity: who the tools answer as.

A server-side tool is a plain callable — pydantic-ai hands it the arguments the
model chose and nothing about who asked — so the acting request has to arrive
by another route. These pin that route: the endpoint's own per-run hook binds
it, a project's ``deps_factory`` cannot displace the binding, and the tools
downstream then answer as that user and no other.
"""

from __future__ import annotations

from typing import Any

import pytest
from django.core.exceptions import PermissionDenied

from django_admin_agent import AdminAgentServer
from django_admin_agent.tools.build_admin_deps import build_admin_deps
from django_admin_agent.tools.shell.count_model import count_model
from django_admin_agent.tools.utils import ACTING_REQUEST
from tests.conftest import request_for
from tests.testapp.models import Author

pytestmark = pytest.mark.django_db


def _view(server: AdminAgentServer) -> Any:
    patterns, _, _ = server.urls
    return patterns[0].callback


def test_the_run_hook_binds_the_acting_request_and_builds_the_default_deps(
    superuser: Any,
) -> None:
    request = request_for(superuser)

    deps = build_admin_deps(request)

    assert ACTING_REQUEST.get() is request
    assert deps.user is superuser
    assert deps.ip_address == request.META.get("REMOTE_ADDR")


def test_a_projects_own_deps_factory_still_gets_the_binding(superuser: Any) -> None:
    """Otherwise passing ``deps_factory=`` would quietly switch the gate off."""
    sentinel = object()
    request = request_for(superuser)

    deps = build_admin_deps(request, factory=lambda _request: sentinel)

    assert deps is sentinel
    assert ACTING_REQUEST.get() is request


def test_the_mounted_endpoint_binds_the_request_the_transport_hands_it(
    superuser: Any,
) -> None:
    """Through the transport's own dispatch, not our factory called directly.

    ``DjangoAGUIView._build_deps`` is what runs per request; this asserts the
    factory is installed where that dispatch will find it, and that a tool
    called afterwards answers as the bound user.
    """
    Author.objects.create(name="Bea")
    request = request_for(superuser)

    deps = _view(AdminAgentServer())._build_deps(request)

    assert deps.user is superuser
    assert count_model("testapp", "Author") == 1


def test_a_staff_user_without_permissions_gets_nothing_through_the_endpoint(
    make_staff_user: Any,
) -> None:
    """The finding's scenario, driven the way a request drives it.

    Support staff hold ``is_staff`` and no model permissions; before this, the
    same sidebar answered "every user" with every row of every table.
    """
    Author.objects.create(name="Bea")
    user = make_staff_user("support")

    _view(AdminAgentServer())._build_deps(request_for(user))

    with pytest.raises(PermissionDenied, match="not readable by this user"):
        count_model("testapp", "Author")
