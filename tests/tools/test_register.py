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


def test_the_shell_name_is_disambiguated_where_a_reader_first_lands() -> None:
    """The word "shell" names the ORM here; the enum member is upstream vocabulary.

    Renaming it would be a breaking change to a label that is accurate enough —
    ``manage.py shell`` is where a Django developer does exactly this — for a
    cost that is a reader's time, once. What that reader needs is for the first
    file they open to say plainly that no code executes, rather than sending
    them through four tool bodies and a sibling repo to find out.
    """
    doc = register_shell_tools.__doc__ or ""

    assert "means the ORM, not a shell" in doc
    assert "no ``eval``" in doc
    assert "it never runs them" in doc or "executes no tool" in doc


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
