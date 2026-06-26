from __future__ import annotations

import json

from django.test import override_settings
from django.utils.translation import gettext_lazy

from django_admin_agent.admin.build_sidebar_context import build_sidebar_context


def test_context_keys_and_values() -> None:
    context = build_sidebar_context()
    assert context["endpoint"] == "/admin-agent/agent/"
    assert context["title"] == "Admin Copilot"
    assert context["auto_confirm"] is False
    assert context["tool_display"] == "compact"
    assert {s["name"] for s in context["skills"]} >= {"summarize-changelist"}
    # The server-tool catalog URL the Web Component fetches (data-tools-url).
    assert context["tools_url"] == "/admin-agent/agent/tools/"
    # The thread-index URL the history drawer fetches (data-threads-url).
    assert context["threads_url"] == "/admin-agent/agent/threads/"
    # The file-upload URL the composer posts to (data-attachments-url).
    assert context["attachments_url"] == "/admin-agent/agent/attachments/"
    # Styling knobs default to None (the component default applies).
    assert context["theme"] is None
    assert context["density"] is None
    assert context["placement"] is None
    assert context["text_animation"] is None
    # New customization seams default off too.
    assert context["strings_json"] is None
    assert context["icon_url"] is None
    assert context["side"] is None
    assert context["bootstrap_url"].endswith("django_admin_agent/admin_agent.js")
    assert context["admin_base_url"] == "/admin/"
    route_ids = {r["id"] for r in context["route_map"]}
    assert "testapp.author.changelist" in route_ids


@override_settings(DJANGO_ADMIN_AGENT={"TITLE": "Helper", "AUTO_CONFIRM": True})
def test_context_reflects_settings() -> None:
    context = build_sidebar_context()
    assert context["title"] == "Helper"
    assert context["auto_confirm"] is True


@override_settings(
    DJANGO_ADMIN_AGENT={"SKILLS": [{"name": "only", "title": "Only", "prompt": "p"}]},
)
def test_skills_override_replaces_the_default_catalog() -> None:
    assert build_sidebar_context()["skills"] == [{"name": "only", "title": "Only", "prompt": "p"}]


@override_settings(
    DJANGO_ADMIN_AGENT={
        "PLACEMENT": "sidebar",
        "SIDE": "left",
        "ICON_URL": "/static/logo.png",
        "STRINGS": {"send": "Senden"},
    },
)
def test_context_surfaces_customization_seams() -> None:
    context = build_sidebar_context()
    assert context["placement"] == "sidebar"
    assert context["side"] == "left"
    assert context["icon_url"] == "/static/logo.png"
    # data-strings is serialized JSON the Web Component parses.
    assert json.loads(context["strings_json"]) == {"send": "Senden"}


@override_settings(DJANGO_ADMIN_AGENT={"STRINGS": {"send": gettext_lazy("Send")}})
def test_strings_json_resolves_lazy_translations() -> None:
    # gettext_lazy proxies serialize via default=str (the active language).
    assert json.loads(build_sidebar_context()["strings_json"]) == {"send": "Send"}


@override_settings(ROOT_URLCONF="tests.admin.urls_no_admin")
def test_admin_base_url_falls_back_without_admin() -> None:
    assert build_sidebar_context()["admin_base_url"] == "/"


@override_settings(ROOT_URLCONF="tests.admin.urls_endpoint_only")
def test_tools_url_is_none_when_the_catalog_is_not_mounted() -> None:
    # Endpoint mounted by hand (not via get_urls) → no catalog route to reverse.
    assert build_sidebar_context()["tools_url"] is None


@override_settings(ROOT_URLCONF="tests.admin.urls_endpoint_only")
def test_threads_url_is_none_when_not_mounted() -> None:
    # Endpoint mounted by hand → no thread-index route to reverse.
    assert build_sidebar_context()["threads_url"] is None


@override_settings(ROOT_URLCONF="tests.admin.urls_endpoint_only")
def test_attachments_url_is_none_when_not_mounted() -> None:
    # Endpoint mounted by hand → no upload route to reverse.
    assert build_sidebar_context()["attachments_url"] is None
