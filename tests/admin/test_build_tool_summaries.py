from __future__ import annotations

from django_admin_agent.admin.build_tool_summaries import build_tool_summaries


def test_build_tool_summaries_maps_server_tool_names_to_labels() -> None:
    summaries = build_tool_summaries()
    # Plain str → str map of server-tool name → friendly card label.
    assert all(
        isinstance(name, str) and isinstance(label, str) for name, label in summaries.items()
    )
    # Covers the read-only ORM (shell.*) and introspection (introspect.*) tools.
    assert summaries["query_model"] == "Query records"
    assert summaries["inspect_modeladmin"] == "Inspect admin"
