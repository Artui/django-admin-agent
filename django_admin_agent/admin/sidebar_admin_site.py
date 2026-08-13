from __future__ import annotations

from typing import Any

from django.contrib.admin import AdminSite
from django.http import HttpRequest

from django_admin_agent.admin.build_sidebar_context import build_sidebar_context
from django_admin_agent.admin_agent_server import DEFAULT_URL_NAMESPACE


class SidebarAdminSite(AdminSite):
    """A drop-in ``AdminSite`` that exposes the sidebar config to every page.

    Adds ``django_admin_agent`` (the sidebar context) to ``each_context`` so
    a base template can render the chat without the template tag. Using the
    ``{% django_admin_agent_sidebar %}`` tag in ``admin/base_site.html`` is
    the more common path and does not require swapping the admin site.

    ``sidebar_namespace`` names the mounted
    [`AdminAgentServer`][django_admin_agent.admin_agent_server.AdminAgentServer]
    to reverse against, matching the ``namespace=`` it was built with — the
    class attribute mirrors the tag's argument, so a project running two admin
    sites can point each at its own server:

        class InternalAdminSite(SidebarAdminSite):
            sidebar_namespace = "internal-agent"
    """

    # An immutable str, so no shared-mutable hazard; subclasses override it.
    sidebar_namespace: str = DEFAULT_URL_NAMESPACE

    def each_context(self, request: HttpRequest) -> dict[str, Any]:
        context = super().each_context(request)
        context["django_admin_agent"] = build_sidebar_context(self.sidebar_namespace)
        return context


__all__ = ["SidebarAdminSite"]
