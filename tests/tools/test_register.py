from __future__ import annotations

from django_ag_ui import ToolCategory, ToolRegistry

from django_admin_agent.tools.introspect.register import register_introspect_tools
from django_admin_agent.tools.register import build_default_registry, register_admin_tools
from django_admin_agent.tools.shell.register import register_shell_tools


def _names(registry: ToolRegistry) -> set[str]:
    return {binding.spec.name for binding in registry}


def test_register_shell_tools_with_category() -> None:
    reg = ToolRegistry()
    register_shell_tools(reg)
    assert _names(reg) == {
        "query_model",
        "get_model_instance",
        "count_model",
        "inspect_model_schema",
    }
    for binding in reg:
        assert binding.spec.category is ToolCategory.SHELL
        assert binding.spec.destructive is False
    # Friendly labels live on the tool (served by the catalog endpoint).
    assert reg.get("query_model").spec.summary == "Query records"


def test_register_introspect_tools_with_category() -> None:
    reg = ToolRegistry()
    register_introspect_tools(reg)
    assert _names(reg) == {
        "list_installed_apps",
        "list_models",
        "list_urls",
        "list_signals",
        "get_settings_summary",
        "list_admin_models",
        "inspect_modeladmin",
    }
    for binding in reg:
        assert binding.spec.category is ToolCategory.INTROSPECT
    assert reg.get("inspect_modeladmin").spec.summary == "Inspect admin"


def test_build_default_registry_has_all_eleven() -> None:
    reg = build_default_registry()
    assert len(reg) == 11


def test_register_admin_tools_on_existing_registry() -> None:
    reg = ToolRegistry()
    register_admin_tools(reg)
    assert "query_model" in reg
    assert "list_admin_models" in reg
