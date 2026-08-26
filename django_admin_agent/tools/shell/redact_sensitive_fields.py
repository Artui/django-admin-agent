from __future__ import annotations

from typing import Any

from django_admin_agent.tools.shell.redaction_pattern import redaction_pattern

REDACTED = "***redacted***"


def redact_sensitive_fields(row: dict[str, Any]) -> dict[str, Any]:
    """Replace values of sensitive-*named* fields with a redaction marker.

    **This is data minimisation, not authorization.** What the acting user may
    read at all is settled before a row exists, by the admin's own permissions
    and ``ModelAdmin.get_queryset``
    ([`admin_queryset`][django_admin_agent.tools.admin_queryset.admin_queryset]).
    This pass then keeps values the user *is* entitled to see from being shipped
    to a third-party model when there is no good reason to: an ``auth.User``
    password hash is readable by anyone with change permission on users, and the
    sidebar still should not stream it.

    It matches the field's **name** against
    [`redaction_pattern`][django_admin_agent.tools.shell.redaction_pattern.redaction_pattern],
    which makes it a heuristic and incomplete by construction. A secret in a
    column named ``pw``, or inside a JSON blob named ``profile``, is not matched;
    neither is a field declared ``name="pw"`` over ``db_column="password"``.
    Widen it with your own regex via ``SHELL_FIELD_REDACTION``, and treat
    "the sidebar cannot reach this model at all" — leaving it out of the admin,
    or out of ``MODEL_SCOPE`` — as the control for anything that must never
    leave the database.

    Applied to every row the shell tools emit. The tools that emit no rows close
    the same gap from the other side:
    [`reject_redacted_lookups`][django_admin_agent.tools.shell.reject_redacted_lookups.reject_redacted_lookups]
    stops a matched field being read back one bit at a time through a filter.
    """
    pattern = redaction_pattern()
    if pattern is None:
        return row
    return {key: (REDACTED if pattern.search(key) else value) for key, value in row.items()}


__all__ = ["redact_sensitive_fields"]
