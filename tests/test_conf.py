from __future__ import annotations

from django.test import override_settings

from django_admin_agent.conf import AdminAgentSettings, get_settings


def test_defaults_when_setting_absent() -> None:
    with override_settings(DJANGO_ADMIN_AGENT=None):
        config = get_settings()
    assert isinstance(config, AdminAgentSettings)
    assert config.title == "Admin Copilot"
    assert config.auto_confirm is False
    assert config.tool_display == "compact"
    assert config.skills is None
    assert config.theme is None
    assert config.density is None
    assert config.placement is None
    assert config.text_animation is None
    assert config.strings is None
    assert config.icon_url is None
    assert config.side is None
    assert config.theme_toggle is False
    assert config.shell_field_redaction is True
    assert config.model_scope is None


@override_settings(
    DJANGO_ADMIN_AGENT={
        "TITLE": "Helper",
        "AUTO_CONFIRM": True,
        "TOOL_DISPLAY": "full",
        "SKILLS": [{"name": "x", "title": "X", "prompt": "p"}],
        "THEME": "dark",
        "DENSITY": "compact",
        "PLACEMENT": "sidebar",
        "TEXT_ANIMATION": "fade",
        "STRINGS": {"send": "Senden"},
        "ICON_URL": "/static/logo.png",
        "SIDE": "left",
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
    assert config.skills == [{"name": "x", "title": "X", "prompt": "p"}]
    assert config.theme == "dark"
    assert config.density == "compact"
    assert config.placement == "sidebar"
    assert config.text_animation == "fade"
    assert config.strings == {"send": "Senden"}
    assert config.icon_url == "/static/logo.png"
    assert config.side == "left"
    assert config.theme_toggle is True
    assert config.shell_field_redaction == r"^email$"
    assert config.model_scope == ["shop", "auth.User"]


@override_settings(DJANGO_ADMIN_AGENT={"AUTO_CONFIRM": 1})
def test_auto_confirm_coerced_to_bool() -> None:
    assert get_settings().auto_confirm is True
