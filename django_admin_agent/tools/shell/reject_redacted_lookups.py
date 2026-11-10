from __future__ import annotations

from typing import Any

from django_admin_agent.tools.shell.redaction_pattern import redaction_pattern


def reject_redacted_lookups(
    filter: dict[str, Any] | None = None,
    exclude: dict[str, Any] | None = None,
    order_by: list[str] | None = None,
) -> None:
    """Refuse an ORM lookup that reads a field redaction is meant to hide."""
    pattern = redaction_pattern()
    if pattern is None:
        return
    lookups = [
        *(filter or {}),
        *(exclude or {}),
        *(term.lstrip("-+") for term in (order_by or [])),
    ]
    for lookup in lookups:
        for segment in lookup.split("__"):
            if pattern.search(segment):
                raise ValueError(
                    f"lookup {lookup!r} reads {segment!r}, a redacted field. Its value "
                    f"is withheld from query results, so filtering or ordering on it "
                    f"is refused too — otherwise the answers would spell the value "
                    f"out. Query on a field that is not redacted."
                )


__all__ = ["reject_redacted_lookups"]
