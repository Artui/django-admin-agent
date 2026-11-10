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
    # django-ag-ui's default carries the request here for the spec toolset.
    assert deps.call_context == {"request": request}


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
    """Through the transport's own dispatch, not our factory called directly."""
    Author.objects.create(name="Bea")
    request = request_for(superuser)

    deps = _view(AdminAgentServer())._build_deps(request)

    assert deps.user is superuser
    assert deps.call_context["request"] is request
    assert count_model("testapp", "Author") == 1


def test_a_staff_user_without_permissions_gets_nothing_through_the_endpoint(
    make_staff_user: Any,
) -> None:
    """The finding's scenario, driven the way a request drives it."""
    Author.objects.create(name="Bea")
    user = make_staff_user("support")

    _view(AdminAgentServer())._build_deps(request_for(user))

    with pytest.raises(PermissionDenied, match="not readable by this user"):
        count_model("testapp", "Author")
