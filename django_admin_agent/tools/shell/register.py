from __future__ import annotations

from django_ag_ui import ToolCategory, ToolRegistry, tool

from django_admin_agent.tools.shell.count_model import count_model
from django_admin_agent.tools.shell.get_model_instance import get_model_instance
from django_admin_agent.tools.shell.inspect_model_schema import inspect_model_schema
from django_admin_agent.tools.shell.query_model import query_model


def register_shell_tools(registry: ToolRegistry) -> None:
    """Register the read-only ORM tool set on ``registry``.

    **"Shell" here means the ORM, not a shell.** The four tools build and read
    QuerySets and nothing else — no ``eval``, no ``exec``, no subprocess, no
    arbitrary code of any kind — and the name follows
    ``ToolCategory.SHELL``, the upstream vocabulary a tool card and the tool
    catalog display. The category is advisory metadata: it labels a tool, it
    does not grant it anything. What these four can actually reach is decided
    per call by
    [`admin_queryset`][django_admin_agent.tools.admin_queryset.admin_queryset],
    against the acting user's admin permissions.

    This function itself only populates ``registry``; it executes no tool.
    """
    tool(registry, category=ToolCategory.SHELL, summary="Query records")(query_model)
    tool(registry, category=ToolCategory.SHELL, summary="Fetch a record")(get_model_instance)
    tool(registry, category=ToolCategory.SHELL, summary="Count records")(count_model)
    tool(registry, category=ToolCategory.SHELL, summary="Inspect model schema")(
        inspect_model_schema
    )


__all__ = ["register_shell_tools"]
