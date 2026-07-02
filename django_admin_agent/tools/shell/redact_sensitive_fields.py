from __future__ import annotations

import re
from typing import Any

from django_admin_agent.conf import get_settings

# The built-in denylist: any field whose name contains one of these (case
# insensitive) is redacted before a shell-tool row reaches the LLM.
_DEFAULT_PATTERN = re.compile(r"password|token|secret|key|hash", re.IGNORECASE)

REDACTED = "***redacted***"


def _pattern() -> re.Pattern[str] | None:
    """The active redaction pattern, or ``None`` when redaction is disabled."""
    setting: bool | str = get_settings().shell_field_redaction
    if setting is False:
        return None
    if setting is True:
        return _DEFAULT_PATTERN
    return re.compile(setting, re.IGNORECASE)


def redact_sensitive_fields(row: dict[str, Any]) -> dict[str, Any]:
    """Replace values of sensitive-named fields with a redaction marker.

    Applies to every ``shell.query_model`` / ``shell.get_model_instance`` row so
    a field like ``auth.User.password`` never streams to a third-party model,
    even when a staff user (or the LLM) asks for it explicitly. Governed by
    ``DJANGO_ADMIN_AGENT["SHELL_FIELD_REDACTION"]`` — ``True`` (default) uses the
    built-in pattern, ``False`` disables it, a regex ``str`` overrides it.
    """
    pattern = _pattern()
    if pattern is None:
        return row
    return {key: (REDACTED if pattern.search(key) else value) for key, value in row.items()}


__all__ = ["redact_sensitive_fields"]
