from __future__ import annotations

import pytest
from django.test import override_settings

from django_admin_agent.conf import AdminAgentSettings, get_settings


def test_defaults_when_setting_absent() -> None:
    with override_settings(DJANGO_ADMIN_AGENT=None):
        config = get_settings()
    assert isinstance(config, AdminAgentSettings)
    assert config.title == "Admin Copilot"
    assert config.auto_confirm is False
    assert config.tool_display == "grouped"
    # Compact, not the component's own full: an opened group is one row a call.
    assert config.tool_group_display == "compact"
    assert config.collapse_to is None
    assert config.message_actions == "copy,retry"
    assert "feedback" not in config.message_actions
    assert config.skills is None
    assert config.theme is None
    assert config.density is None
    assert config.placement is None
    assert config.text_animation is None
    assert config.strings is None
    assert config.icon_url is None
    assert config.side is None
    assert config.launcher_drag is True
    assert config.start_open is False
    assert config.chat_surface_tools is True
    assert config.theme_toggle is False
    assert config.shell_field_redaction is True
    assert config.model_scope is None


@override_settings(
    DJANGO_ADMIN_AGENT={
        "TITLE": "Helper",
        "AUTO_CONFIRM": True,
        "TOOL_DISPLAY": "full",
        "TOOL_GROUP_DISPLAY": "minimal",
        "COLLAPSE_TO": "bar",
        "SKILLS": [{"name": "x", "title": "X", "prompt": "p"}],
        "THEME": "dark",
        "DENSITY": "compact",
        "PLACEMENT": "sidebar",
        "TEXT_ANIMATION": "fade",
        "STRINGS": {"send": "Senden"},
        "ICON_URL": "/static/logo.png",
        "SIDE": "left",
        "LAUNCHER_DRAG": False,
        "START_OPEN": True,
        "CHAT_SURFACE_TOOLS": False,
        "THEME_TOGGLE": True,
        "SHELL_FIELD_REDACTION": r"^email$",
        "MODEL_SCOPE": ["shop", "auth.User"],
    },
)
def test_reads_overrides() -> None:
    config = get_settings()
    assert config.title == "Helper"
    assert config.auto_confirm is True
    assert config.tool_display == "full"
    assert config.tool_group_display == "minimal"
    assert config.collapse_to == "bar"
    assert config.skills == [{"name": "x", "title": "X", "prompt": "p"}]
    assert config.theme == "dark"
    assert config.density == "compact"
    assert config.placement == "sidebar"
    assert config.text_animation == "fade"
    assert config.strings == {"send": "Senden"}
    assert config.icon_url == "/static/logo.png"
    assert config.side == "left"
    assert config.launcher_drag is False
    assert config.start_open is True
    assert config.chat_surface_tools is False
    assert config.theme_toggle is True
    assert config.shell_field_redaction == r"^email$"
    assert config.model_scope == ["shop", "auth.User"]


@override_settings(DJANGO_ADMIN_AGENT={"AUTO_CONFIRM": 1})
def test_auto_confirm_coerced_to_bool() -> None:
    assert get_settings().auto_confirm is True


@override_settings(DJANGO_ADMIN_AGENT={"LAUNCHER_DRAG": 0})
def test_launcher_drag_coerced_to_bool() -> None:
    assert get_settings().launcher_drag is False


@override_settings(DJANGO_ADMIN_AGENT={"START_OPEN": 1})
def test_start_open_coerced_to_bool() -> None:
    assert get_settings().start_open is True


@override_settings(DJANGO_ADMIN_AGENT={"CHAT_SURFACE_TOOLS": 0})
def test_chat_surface_tools_coerced_to_bool() -> None:
    assert get_settings().chat_surface_tools is False


@pytest.mark.parametrize("value", ["none", "auto", "BAR", "", True, None])
def test_collapse_to_treats_anything_but_bar_as_unset(value: object) -> None:
    """Nothing here raises on a bad setting, and a bad value reads as the default."""
    with override_settings(DJANGO_ADMIN_AGENT={"COLLAPSE_TO": value}):
        assert get_settings().collapse_to is None
