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


def test_the_denylist_covers_the_names_that_used_to_slip_through() -> None:
    """Names the audit-shaped miss list called out, minus the ambiguous ones.

    ``otp`` and ``pin`` are deliberately absent: they ride inside ordinary words
    (``shipping``, ``spinner``), and a match no longer only masks a value — it
    also refuses a filter on it, so a false positive now costs a query.
    """
    row = {
        "passwd": "x",
        "passphrase": "x",
        "credential": "x",
        "salt": "x",
        "signature": "x",
        "ssn": "x",
        "session_data": "x",
        # Not matched, and that is the point of the honesty note below.
        "pw": "x",
        "shipping": "x",
    }

    out = redact_sensitive_fields(row)

    assert [key for key, value in out.items() if value == REDACTED] == [
        "passwd",
        "passphrase",
        "credential",
        "salt",
        "signature",
        "ssn",
        "session_data",
    ]


def test_the_docstring_no_longer_promises_what_the_pass_cannot_deliver() -> None:
    """It used to say a password hash "never streams to a third-party model".

    It did not: a ``filter`` read the value back through the row count, and a
    name denylist cannot see a secret it is not named after. The guarantee is
    gone and what replaced it says which of the two jobs this actually does.
    """
    doc = redact_sensitive_fields.__doc__ or ""

    assert "never streams to a third-party model" not in doc
    assert "not authorization" in doc
    assert "incomplete by construction" in doc
