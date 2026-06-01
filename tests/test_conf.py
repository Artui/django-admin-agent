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


@override_settings(
    DJANGO_ADMIN_AGENT={
        "TITLE": "Helper",
        "AUTO_CONFIRM": True,
        "ENDPOINT_URL_NAME": "custom_endpoint",
    },
)
def test_reads_overrides() -> None:
    config = get_settings()
    assert config.title == "Helper"
    assert config.auto_confirm is True
    assert config.endpoint_url_name == "custom_endpoint"


@override_settings(DJANGO_ADMIN_AGENT={"AUTO_CONFIRM": 1})
def test_auto_confirm_coerced_to_bool() -> None:
    assert get_settings().auto_confirm is True
