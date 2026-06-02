from __future__ import annotations

# Friendly card labels for the server-side admin tools, keyed by tool name.
# Server tools (the django-ag-ui `@tool` registry — `shell.*` / `introspect.*`)
# execute server-side, so their schema never reaches the browser and the Web
# Component can't read an `x-summary` off it. This map is embedded into the page
# (`data-tool-summaries` via `json_script`) and set as the element's
# `toolSummaries`, so the tool-call cards read friendly instead of code-like.
# Client tools (admin DOM tools, and the built-in route / read-page tools) carry
# their own `x-summary` and don't need an entry here. Override the whole map via
# DJANGO_ADMIN_AGENT["TOOL_SUMMARIES"].


def build_tool_summaries() -> dict[str, str]:
    """The built-in name → label map for the admin's server-side tools."""
    return {
        # shell.* — read-only ORM
        "query_model": "Query records",
        "get_model_instance": "Fetch a record",
        "count_model": "Count records",
        "inspect_model_schema": "Inspect model schema",
        # introspect.* — Django introspection
        "list_installed_apps": "List apps",
        "list_models": "List models",
        "list_urls": "List URLs",
        "list_signals": "List signals",
        "get_settings_summary": "Read settings",
        "list_admin_models": "List admin models",
        "inspect_modeladmin": "Inspect admin",
    }


__all__ = ["build_tool_summaries"]
