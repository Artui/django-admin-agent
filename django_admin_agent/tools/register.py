from __future__ import annotations

from django_ag_ui import ToolRegistry

from django_admin_agent.tools.introspect.register import register_introspect_tools
from django_admin_agent.tools.shell.register import register_shell_tools


def register_admin_tools(registry: ToolRegistry) -> None:
    """Register the full server-side admin tool set on ``registry``.

    Combines the read-only ``shell.*`` (ORM) and ``introspect.*``
    (Django + admin introspection) tools.
    """
    register_shell_tools(registry)
    register_introspect_tools(registry)


def build_default_registry() -> ToolRegistry:
    """Build a fresh registry with the default server-side admin tools."""
    registry = ToolRegistry()
    register_admin_tools(registry)
    return registry


__all__ = ["build_default_registry", "register_admin_tools"]
