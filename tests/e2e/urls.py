from __future__ import annotations

from django.contrib import admin
from django.urls import path
from django_ag_ui import ToolCategory, ToolRegistry, tool
from django_pydantic_agent.contrib.store.default_conversation_store import (
    DefaultConversationStore,
)

from django_admin_agent import AdminAgentServer, build_default_registry
from tests.e2e.chart_tool import chart_authors
from tests.e2e.scripted_model import scripted_model


def _registry() -> ToolRegistry:
    """The default admin tools, plus one that pushes a chart to the browser."""
    registry = build_default_registry()
    tool(registry, category=ToolCategory.INTROSPECT, summary="Chart authors")(chart_authors)
    return registry


# A conversation store, because it is what a deployed admin runs with and it
# changes what a reload shows: with one mounted the sidebar is given a thread
# index and replays the server's copy of the conversation, not the tab's own.
# Without it the suite could not see a card the server stores wrongly.
urlpatterns = [
    path("admin/", admin.site.urls),
    path(
        "admin-agent/",
        AdminAgentServer(
            _registry(),
            model=scripted_model,
            conversation_store=DefaultConversationStore(),
        ).urls,
    ),
]
