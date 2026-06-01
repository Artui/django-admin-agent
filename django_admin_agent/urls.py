from __future__ import annotations

from typing import Any

from django.urls import URLPattern, path
from django_ag_ui import DjangoAGUIView, ToolRegistry

from django_admin_agent.tools.register import build_default_registry


def get_urls(
    prefix: str = "admin-agent/",
    *,
    registry: ToolRegistry | None = None,
    **view_kwargs: Any,
) -> list[URLPattern]:
    """Return URL patterns mounting the admin agent's AG-UI endpoint.

    Builds a :class:`~django_ag_ui.DjangoAGUIView` over the default
    server-side admin tool registry (or a registry you pass) and mounts it
    at ``<prefix>agent/`` named ``django_admin_agent_endpoint`` — the name
    the sidebar reverses. Extra keyword arguments (``model``,
    ``instructions``, ``audit_logger``, ``csrf_exempt``) pass through to the
    view.

    Include the result from your project's root URLconf::

        urlpatterns = [
            path("admin/", admin.site.urls),
            *get_urls(),
        ]
    """
    registry = registry if registry is not None else build_default_registry()
    view = DjangoAGUIView(registry, **view_kwargs)
    return [path(f"{prefix}agent/", view, name="django_admin_agent_endpoint")]


__all__ = ["get_urls"]
