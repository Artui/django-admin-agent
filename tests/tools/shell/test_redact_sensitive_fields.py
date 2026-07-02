from __future__ import annotations

from django.test import override_settings

from django_admin_agent.tools.shell.redact_sensitive_fields import REDACTED, redact_sensitive_fields

_ROW = {"name": "Bea", "password": "hash", "api_token": "t", "email": "b@x.com"}


def test_default_redacts_denylisted_field_names() -> None:
    out = redact_sensitive_fields(dict(_ROW))
    assert out["password"] == REDACTED
    assert out["api_token"] == REDACTED  # matches ``token``
    assert out["name"] == "Bea"  # untouched
    assert out["email"] == "b@x.com"


@override_settings(DJANGO_ADMIN_AGENT={"SHELL_FIELD_REDACTION": False})
def test_disabled_returns_row_untouched() -> None:
    assert redact_sensitive_fields(dict(_ROW)) == _ROW


@override_settings(DJANGO_ADMIN_AGENT={"SHELL_FIELD_REDACTION": r"^email$"})
def test_custom_pattern_overrides_the_builtin() -> None:
    out = redact_sensitive_fields(dict(_ROW))
    assert out["email"] == REDACTED
    # The built-in ``password`` / ``token`` denylist no longer applies.
    assert out["password"] == "hash"
    assert out["api_token"] == "t"
