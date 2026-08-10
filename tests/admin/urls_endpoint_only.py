"""URLconf mounting only the agent endpoint (namespaced) — NOT the tool catalog.

Exercises ``build_sidebar_context``'s ``tools_url`` fallback (``None``) for an
endpoint mounted by hand rather than via :class:`~django_admin_agent.AdminAgentServer`
(which also mounts the catalog). The endpoint name must still resolve —
``build_sidebar_context`` reverses ``<namespace>:endpoint`` unconditionally.
"""

from __future__ import annotations

from django.urls import path
from django_ag_ui import DjangoAGUIView, ToolRegistry

# A minimal namespaced mount exposing only ``admin_agent:endpoint`` — the
# (patterns, app_name, namespace) triple ``path()`` accepts, no catalog view.
_endpoint_only = [path("", DjangoAGUIView(ToolRegistry(), csrf_exempt=False), name="endpoint")]

urlpatterns = [
    path("admin-agent/", (_endpoint_only, "admin_agent", "admin_agent")),
]
