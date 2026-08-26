from __future__ import annotations

from django.contrib import admin
from django.urls import path
from django_ag_ui import ToolCategory, ToolRegistry, tool

from django_admin_agent import AdminAgentServer, build_default_registry
from tests.e2e.chart_tool import chart_authors
from tests.e2e.scripted_model import scripted_model


def _registry() -> ToolRegistry:
    """The default admin tools, plus one that pushes a chart to the browser."""
    registry = build_default_registry()
    tool(registry, category=ToolCategory.INTROSPECT, summary="Chart authors")(chart_authors)
    return registry


urlpatterns = [
    path("admin/", admin.site.urls),
    path("admin-agent/", AdminAgentServer(_registry(), model=scripted_model).urls),
]
