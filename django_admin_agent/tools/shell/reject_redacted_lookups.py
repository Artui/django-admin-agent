from __future__ import annotations

from typing import Any

from django_admin_agent.tools.shell.redaction_pattern import redaction_pattern


def reject_redacted_lookups(
    filter: dict[str, Any] | None = None,
    exclude: dict[str, Any] | None = None,
    order_by: list[str] | None = None,
) -> None:
    """Refuse an ORM lookup that reads a field redaction is meant to hide.

    Masking a value on the way out only closes the direct route. A free-form
    ``filter`` re-opens it: ``password__startswith="pbkdf2_sha256$1"`` answers
    yes or no, and because a ``CharField`` also supports ``__gt`` / ``__lt``, the
    answers binary-search a hash out roughly six calls per character. The count
    or the row list is the oracle; nothing needs to print the value. Ordering by
    such a field leaks the same information more slowly.

    So every lookup path a caller controls is checked against the same pattern
    the output path uses, segment by segment, which also covers a relation walk
    like ``owner__password__gt``. A match is refused with an explanation rather
    than silently dropped, so the agent can say what happened and move on.

    Raises:
        ValueError: naming the offending lookup.
    """
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
