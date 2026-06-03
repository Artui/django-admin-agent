"""URLconf mounting the agent endpoint by name but NOT the tool catalog.

Exercises ``build_sidebar_context``'s ``tools_url`` fallback (``None``) for an
endpoint mounted by hand rather than via ``get_urls`` (which also mounts the
catalog). The endpoint name must still resolve — ``build_sidebar_context``
reverses it unconditionally.
"""

from __future__ import annotations

from django.urls import path
from django_ag_ui import DjangoAGUIView, ToolRegistry

urlpatterns = [
    path(
        "admin-agent/agent/",
        DjangoAGUIView(ToolRegistry()),
        name="django_admin_agent_endpoint",
    ),
]
