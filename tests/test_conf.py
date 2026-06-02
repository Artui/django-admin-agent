from __future__ import annotations

from django.test import override_settings

from django_admin_agent.conf import AdminAgentSettings, get_settings


def test_defaults_when_setting_absent() -> None:
    with override_settings(DJANGO_ADMIN_AGENT=None):
        config = get_settings()
    assert isinstance(config, AdminAgentSettings)
    assert config.title == "Admin Copilot"
    assert config.auto_confirm is False
    assert config.endpoint_url_name == "django_admin_agent_endpoint"
    assert config.tool_display == "compact"
    assert config.skills is None
    assert config.tool_summaries is None
    assert config.theme is None
    assert config.density is None
    assert config.placement is None
    assert config.text_animation is None


@override_settings(
    DJANGO_ADMIN_AGENT={
        "TITLE": "Helper",
        "AUTO_CONFIRM": True,
        "ENDPOINT_URL_NAME": "custom_endpoint",
        "TOOL_DISPLAY": "full",
        "SKILLS": [{"name": "x", "title": "X", "prompt": "p"}],
        "TOOL_SUMMARIES": {"query_model": "Run a query"},
        "THEME": "dark",
        "DENSITY": "compact",
        "PLACEMENT": "side",
        "TEXT_ANIMATION": "fade",
    },
)
def test_reads_overrides() -> None:
    config = get_settings()
    assert config.title == "Helper"
    assert config.auto_confirm is True
    assert config.endpoint_url_name == "custom_endpoint"
    assert config.tool_display == "full"
    assert config.skills == [{"name": "x", "title": "X", "prompt": "p"}]
    assert config.tool_summaries == {"query_model": "Run a query"}
    assert config.theme == "dark"
    assert config.density == "compact"
    assert config.placement == "side"
    assert config.text_animation == "fade"


@override_settings(DJANGO_ADMIN_AGENT={"AUTO_CONFIRM": 1})
def test_auto_confirm_coerced_to_bool() -> None:
    assert get_settings().auto_confirm is True
