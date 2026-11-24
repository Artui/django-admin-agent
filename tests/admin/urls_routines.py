from __future__ import annotations

from django.urls import path
from django_ag_ui import DjangoAGUIView, ToolRegistry

_view = DjangoAGUIView(ToolRegistry(), csrf_exempt=False)
_with_routines = [
    path("", _view, name="endpoint"),
    path("routines/", _view, name="routines"),
]

urlpatterns = [
    path("admin-agent/", (_with_routines, "admin_agent", "admin_agent")),
]
