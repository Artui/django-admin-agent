from __future__ import annotations

import re

from django_admin_agent.conf import get_settings

# The built-in denylist. Terms are matched as substrings of a field *name*, so
# each one is chosen to be near-unambiguous in that position: "salt", "ssn" and
# "signature" name secrets wherever they appear, while "otp" and "pin" were left
# out on purpose because they ride inside ordinary words and the cost of a false
# positive is now higher than it used to be — a matched name is not merely
# masked on the way out, it also cannot be filtered or ordered on.
_DEFAULT_PATTERN = re.compile(
    r"password|passwd|passphrase|token|secret|credential|salt|signature|key|hash|ssn|session_data",
    re.IGNORECASE,
)


def redaction_pattern() -> re.Pattern[str] | None:
    """The active field-name redaction pattern, or ``None`` when disabled.

    Governed by ``DJANGO_ADMIN_AGENT["SHELL_FIELD_REDACTION"]``: ``True``
    (default) uses the built-in denylist, ``False`` turns redaction off, and a
    regex ``str`` replaces the denylist with your own.
    """
    setting: bool | str = get_settings().shell_field_redaction
    if setting is False:
        return None
    if setting is True:
        return _DEFAULT_PATTERN
    return re.compile(setting, re.IGNORECASE)


__all__ = ["redaction_pattern"]
