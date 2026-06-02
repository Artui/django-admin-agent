from __future__ import annotations

from typing import Any

from django.templatetags.static import static
from django.urls import NoReverseMatch, reverse

from django_admin_agent.admin.build_route_map import build_route_map
from django_admin_agent.admin.build_skills import build_skills
from django_admin_agent.admin.build_tool_summaries import build_tool_summaries
from django_admin_agent.conf import get_settings

_BUNDLE_PATH = "django_admin_agent/admin_agent.js"


def build_sidebar_context() -> dict[str, Any]:
    """Build the context the sidebar template needs.

    Reverses the AG-UI endpoint URL, resolves the bootstrap module's static
    URL, reads the title / auto-confirm flag from settings, and resolves the
    admin index URL so the frontend ``nav.*`` tools can build changelist /
    changeform URLs without reversing named routes in the browser. Shared by
    the ``{% django_admin_agent_sidebar %}`` template tag and the
    :class:`~django_admin_agent.admin.sidebar_admin_site.SidebarAdminSite`
    ``each_context`` hook.
    """
    config = get_settings()
    return {
        "endpoint": reverse(config.endpoint_url_name),
        "title": config.title,
        "auto_confirm": config.auto_confirm,
        "tool_display": config.tool_display,
        "skills": config.skills if config.skills is not None else build_skills(),
        "tool_summaries": (
            config.tool_summaries if config.tool_summaries is not None else build_tool_summaries()
        ),
        "theme": config.theme,
        "density": config.density,
        "placement": config.placement,
        "text_animation": config.text_animation,
        "bootstrap_url": static(_BUNDLE_PATH),
        "admin_base_url": _admin_base_url(),
        "route_map": build_route_map(),
    }


def _admin_base_url() -> str:
    """Resolve the admin index URL (e.g. ``/admin/``), or ``/`` if unmounted."""
    try:
        return reverse("admin:index")
    except NoReverseMatch:
        return "/"


__all__ = ["build_sidebar_context"]
