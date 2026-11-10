from __future__ import annotations

from typing import Any

from django.contrib.admin import AdminSite
from django.http import HttpRequest

from django_admin_agent.admin.build_sidebar_context import build_sidebar_context
from django_admin_agent.admin_agent_server import DEFAULT_URL_NAMESPACE


class SidebarAdminSite(AdminSite):
    """A drop-in ``AdminSite`` that exposes the sidebar config to every page."""

    # An immutable str, so no shared-mutable hazard; subclasses override it.
    sidebar_namespace: str = DEFAULT_URL_NAMESPACE

    def each_context(self, request: HttpRequest) -> dict[str, Any]:
        """Add the sidebar context, and an **empty** one for a signed-out visitor."""
        context = super().each_context(request)
        user = request.user
        if not user.is_authenticated:
            context["django_admin_agent"] = {}
            return context
        context["django_admin_agent"] = build_sidebar_context(self.sidebar_namespace, user=user)
        return context


__all__ = ["SidebarAdminSite"]
