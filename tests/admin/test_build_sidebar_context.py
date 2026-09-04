from __future__ import annotations

import json

from django.test import override_settings
from django.utils.translation import gettext_lazy

from django_admin_agent.admin.build_sidebar_context import build_sidebar_context


def test_context_keys_and_values() -> None:
    context = build_sidebar_context()
    # AdminAgentServer mounts at "admin-agent/"; the endpoint sits at the root.
    assert context["endpoint"] == "/admin-agent/"
    assert context["title"] == "Admin Copilot"
    assert context["auto_confirm"] is False
    assert context["tool_display"] == "compact"
    assert context["message_actions"] == "copy,retry"
    assert {s["name"] for s in context["skills"]} >= {"summarize-changelist"}
    # The server-tool catalog URL the Web Component fetches (data-tools-url).
    assert context["tools_url"] == "/admin-agent/tools/"
    # No stores are configured in the test settings, so the persistence
    # sub-views are unmounted and their URLs fall back to None (the drawer then
    # uses the client's local per-tab threads; no upload / mic affordances).
    assert context["threads_url"] is None
    # No step store either, so the checkpoint panel has nothing to index.
    assert context["runs_url"] is None
    assert context["attachments_url"] is None
    assert context["attachment_max_bytes"] is None
    assert context["attachment_accept"] is None
    assert context["transcribe_url"] is None
    # The built-in theme toggle is off unless opted in.
    assert context["theme_toggle"] is False
    # Dragging is on unless a project turns it off, matching the component.
    assert context["launcher_drag"] is True
    assert context["start_open"] is False
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
        "THEME_TOGGLE": True,
    },
)
def test_context_surfaces_customization_seams() -> None:
    context = build_sidebar_context()
    assert context["placement"] == "sidebar"
    assert context["side"] == "left"
    assert context["icon_url"] == "/static/logo.png"
    # data-strings is serialized JSON the Web Component parses.
    assert json.loads(context["strings_json"]) == {"send": "Senden"}
    assert context["theme_toggle"] is True


@override_settings(DJANGO_ADMIN_AGENT={"STRINGS": {"send": gettext_lazy("Send")}})
def test_strings_json_resolves_lazy_translations() -> None:
    # gettext_lazy proxies serialize via default=str (the active language).
    assert json.loads(build_sidebar_context()["strings_json"]) == {"send": "Send"}


@override_settings(ROOT_URLCONF="tests.admin.urls_no_admin")
def test_admin_base_url_falls_back_without_admin() -> None:
    assert build_sidebar_context()["admin_base_url"] == "/"


@override_settings(ROOT_URLCONF="tests.admin.urls_full")
def test_store_backed_urls_resolve_when_the_sub_views_are_mounted() -> None:
    # A fully-configured AdminAgentServer mounts the thread / upload / mic
    # sub-views, so their URLs resolve for the Web Component's data-* attributes.
    context = build_sidebar_context()
    assert context["threads_url"] == "/admin-agent/threads/"
    assert context["attachments_url"] == "/admin-agent/attachments/"
    assert context["transcribe_url"] == "/admin-agent/transcribe/"


@override_settings(ROOT_URLCONF="tests.admin.urls_steps")
def test_runs_url_resolves_when_a_step_store_is_configured() -> None:
    # A step store mounts resume/fork *and* the run index, so the Web
    # Component's checkpoint panel gets its data-runs-url.
    assert build_sidebar_context()["runs_url"] == "/admin-agent/runs/"


@override_settings(ROOT_URLCONF="tests.admin.urls_endpoint_only")
def test_tools_url_is_none_when_the_catalog_is_not_mounted() -> None:
    # Only the endpoint mounted by hand (not via AdminAgentServer) → no catalog
    # route to reverse.
    assert build_sidebar_context()["tools_url"] is None


@override_settings(ROOT_URLCONF="tests.admin.urls_endpoint_only")
def test_threads_url_is_none_when_not_mounted() -> None:
    # Endpoint mounted by hand → no thread-index route to reverse.
    assert build_sidebar_context()["threads_url"] is None


@override_settings(ROOT_URLCONF="tests.admin.urls_endpoint_only")
def test_attachments_url_is_none_when_not_mounted() -> None:
    # Endpoint mounted by hand → no upload route to reverse.
    assert build_sidebar_context()["attachments_url"] is None


@override_settings(ROOT_URLCONF="tests.admin.urls_endpoint_only")
def test_attachment_limits_absent_when_uploads_are_not_mounted() -> None:
    # No upload route → no client guards to mirror.
    context = build_sidebar_context()
    assert context["attachment_max_bytes"] is None
    assert context["attachment_accept"] is None


@override_settings(
    ROOT_URLCONF="tests.admin.urls_full",
    DJANGO_AG_UI={
        "ATTACHMENT_MAX_BYTES": 2 * 1024 * 1024,
        "ATTACHMENT_ALLOWED_TYPES": ["image/png", "application/pdf"],
    },
)
def test_attachment_limits_mirror_the_server_side_guards() -> None:
    # With uploads mounted, the server-authoritative cap and type allowlist
    # surface for the composer to enforce before upload.
    context = build_sidebar_context()
    assert context["attachment_max_bytes"] == 2 * 1024 * 1024
    assert context["attachment_accept"] == "image/png,application/pdf"


@override_settings(
    ROOT_URLCONF="tests.admin.urls_full",
    DJANGO_AG_UI={"ATTACHMENT_MAX_BYTES": 0, "ATTACHMENT_ALLOWED_TYPES": []},
)
def test_attachment_limits_are_none_when_unset() -> None:
    # An unset cap (0) and an empty allowlist mean no client-side guard at all.
    context = build_sidebar_context()
    assert context["attachment_max_bytes"] is None
    assert context["attachment_accept"] is None


@override_settings(ROOT_URLCONF="tests.admin.urls_endpoint_only")
def test_transcribe_url_is_none_when_not_mounted() -> None:
    # Endpoint mounted by hand → no transcription route to reverse.
    assert build_sidebar_context()["transcribe_url"] is None


@override_settings(ROOT_URLCONF="tests.testapp.two_sidebars_urls")
def test_each_sidebar_reverses_against_its_own_server() -> None:
    """The namespace is an argument, so two mounts each get their own URLs.

    A single ``URL_NAMESPACE`` setting could only ever name one of them.
    """
    internal = build_sidebar_context("internal-agent")
    public = build_sidebar_context("public-agent")

    assert internal["endpoint"] == "/internal-agent/"
    assert public["endpoint"] == "/public-agent/"
    assert internal["tools_url"] == "/internal-agent/tools/"
    assert public["tools_url"] == "/public-agent/tools/"


@override_settings(ROOT_URLCONF="tests.testapp.two_sidebars_urls")
def test_an_unmounted_namespace_degrades_rather_than_raising() -> None:
    """A namespace that doesn't resolve leaves the optional URLs None rather
    than exploding the admin page it renders into."""
    context = build_sidebar_context("internal-agent")
    assert context["threads_url"] is None
