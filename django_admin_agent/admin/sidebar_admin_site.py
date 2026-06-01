from __future__ import annotations

from typing import Any

from django.contrib.admin import AdminSite
from django.http import HttpRequest

from django_admin_agent.admin.build_sidebar_context import build_sidebar_context


class SidebarAdminSite(AdminSite):
    """A drop-in ``AdminSite`` that exposes the sidebar config to every page.

    Adds ``django_admin_agent`` (the sidebar context) to ``each_context`` so
    a base template can render the chat without the template tag. Using the
    ``{% django_admin_agent_sidebar %}`` tag in ``admin/base_site.html`` is
    the more common path and does not require swapping the admin site.
    """

    def each_context(self, request: HttpRequest) -> dict[str, Any]:
        context = super().each_context(request)
        context["django_admin_agent"] = build_sidebar_context()
        return context


__all__ = ["SidebarAdminSite"]
