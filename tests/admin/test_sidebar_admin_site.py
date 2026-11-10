from __future__ import annotations

import pytest
from django.contrib.auth.models import AnonymousUser
from django.test import RequestFactory

from django_admin_agent.admin.sidebar_admin_site import SidebarAdminSite


def test_each_context_injects_sidebar_and_preserves_super() -> None:
    site = SidebarAdminSite()
    request = RequestFactory().get("/admin/")
    request.user = _StaffUser()

    context = site.each_context(request)

    # Our key is present and well-formed...
    sidebar = context["django_admin_agent"]
    assert sidebar["endpoint"] == "/admin-agent/"
    assert sidebar["admin_base_url"] == "/admin/"
    assert "site_title" in context


def test_each_context_hands_a_signed_out_visitor_nothing_to_render() -> None:
    """The login page goes through ``each_context`` like every other admin page."""
    site = SidebarAdminSite()
    request = RequestFactory().get("/admin/login/")
    request.user = AnonymousUser()

    context = site.each_context(request)

    assert context["django_admin_agent"] == {}
    assert not context["django_admin_agent"]
    assert "site_title" in context, "the base AdminSite context still passes through"


def test_each_context_cannot_be_reached_without_a_user_at_all() -> None:
    """Why this override has two states where the template tag has three."""
    site = SidebarAdminSite()
    request = RequestFactory().get("/admin/")

    with pytest.raises(AttributeError, match="user"):
        site.each_context(request)


class _StaffUser:
    """Stand-in for a signed-in staff user; ``is_authenticated`` is the load-bearing one."""

    is_active = True
    is_staff = True
    is_authenticated = True

    def has_perm(self, perm: str, obj: object | None = None) -> bool:  # noqa: ARG002
        return True
