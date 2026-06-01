from __future__ import annotations

from django.test import override_settings

from django_admin_agent.admin.build_sidebar_context import build_sidebar_context


def test_context_keys_and_values() -> None:
    context = build_sidebar_context()
    assert context["endpoint"] == "/admin-agent/agent/"
    assert context["title"] == "Admin Copilot"
    assert context["auto_confirm"] is False
    assert context["bootstrap_url"].endswith("django_admin_agent/admin_agent.js")
    assert context["admin_base_url"] == "/admin/"
    route_ids = {r["id"] for r in context["route_map"]}
    assert "testapp.author.changelist" in route_ids


@override_settings(DJANGO_ADMIN_AGENT={"TITLE": "Helper", "AUTO_CONFIRM": True})
def test_context_reflects_settings() -> None:
    context = build_sidebar_context()
    assert context["title"] == "Helper"
    assert context["auto_confirm"] is True


@override_settings(ROOT_URLCONF="tests.admin.urls_no_admin")
def test_admin_base_url_falls_back_without_admin() -> None:
    assert build_sidebar_context()["admin_base_url"] == "/"
