from __future__ import annotations

from django_ag_ui import ToolCategory, ToolRegistry, tool

from django_admin_agent.tools.introspect.get_settings_summary import get_settings_summary
from django_admin_agent.tools.introspect.inspect_modeladmin import inspect_modeladmin
from django_admin_agent.tools.introspect.list_admin_models import list_admin_models
from django_admin_agent.tools.introspect.list_installed_apps import list_installed_apps
from django_admin_agent.tools.introspect.list_models import list_models
from django_admin_agent.tools.introspect.list_signals import list_signals
from django_admin_agent.tools.introspect.list_urls import list_urls


def register_introspect_tools(registry: ToolRegistry) -> None:
    """Register the read-only Django-introspection tool set on ``registry``."""
    tool(registry, category=ToolCategory.INTROSPECT, summary="List apps")(list_installed_apps)
    tool(registry, category=ToolCategory.INTROSPECT, summary="List models")(list_models)
    tool(registry, category=ToolCategory.INTROSPECT, summary="List URLs")(list_urls)
    tool(registry, category=ToolCategory.INTROSPECT, summary="List signals")(list_signals)
    tool(registry, category=ToolCategory.INTROSPECT, summary="Read settings")(get_settings_summary)
    tool(registry, category=ToolCategory.INTROSPECT, summary="List admin models")(list_admin_models)
    tool(registry, category=ToolCategory.INTROSPECT, summary="Inspect admin")(inspect_modeladmin)


__all__ = ["register_introspect_tools"]
