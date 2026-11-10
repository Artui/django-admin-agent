from __future__ import annotations

from django.urls import path
from django_ag_ui import DjangoAGUIView, ToolRegistry

# A minimal namespaced mount exposing only ``admin_agent:endpoint`` — the
# (patterns, app_name, namespace) triple ``path()`` accepts, no catalog view.
_endpoint_only = [path("", DjangoAGUIView(ToolRegistry(), csrf_exempt=False), name="endpoint")]

urlpatterns = [
    path("admin-agent/", (_endpoint_only, "admin_agent", "admin_agent")),
]
