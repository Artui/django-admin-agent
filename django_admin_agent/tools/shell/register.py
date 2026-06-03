from __future__ import annotations

from django_ag_ui import ToolCategory, ToolRegistry, tool

from django_admin_agent.tools.shell.count_model import count_model
from django_admin_agent.tools.shell.get_model_instance import get_model_instance
from django_admin_agent.tools.shell.inspect_model_schema import inspect_model_schema
from django_admin_agent.tools.shell.query_model import query_model


def register_shell_tools(registry: ToolRegistry) -> None:
    """Register the read-only ORM/shell tool set on ``registry``."""
    tool(registry, category=ToolCategory.SHELL, summary="Query records")(query_model)
    tool(registry, category=ToolCategory.SHELL, summary="Fetch a record")(get_model_instance)
    tool(registry, category=ToolCategory.SHELL, summary="Count records")(count_model)
    tool(registry, category=ToolCategory.SHELL, summary="Inspect model schema")(
        inspect_model_schema
    )


__all__ = ["register_shell_tools"]
