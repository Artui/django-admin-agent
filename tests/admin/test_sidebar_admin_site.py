from __future__ import annotations

from django.test import RequestFactory

from django_admin_agent.admin.sidebar_admin_site import SidebarAdminSite


def test_each_context_injects_sidebar_and_preserves_super() -> None:
    site = SidebarAdminSite()
    request = RequestFactory().get("/admin/")
    request.user = _AnonymousAdminUser()

    context = site.each_context(request)

    # Our key is present and well-formed...
    sidebar = context["django_admin_agent"]
    assert sidebar["endpoint"] == "/admin-agent/agent/"
    assert sidebar["admin_base_url"] == "/admin/"
    # ...and the base AdminSite context still passes through.
    assert "site_title" in context


class _AnonymousAdminUser:
    """Minimal user stand-in for ``AdminSite.each_context``."""

    is_active = True
    is_staff = True

    def has_perm(self, perm: str, obj: object | None = None) -> bool:  # noqa: ARG002
        return True
