from __future__ import annotations

from typing import Any

from django_admin_agent.tools.admin_queryset import admin_queryset
from django_admin_agent.tools.shell.reject_redacted_lookups import reject_redacted_lookups


def count_model(
    app_label: str,
    model: str,
    filter: dict[str, Any] | None = None,
    exclude: dict[str, Any] | None = None,
) -> int:
    """Return the row count for a model, optionally filtered.

    Counts the same rows the acting staff user's own admin changelist would
    show, and refuses a filter that reads a redacted field — a bare count is
    still an answer about the value it filtered on.
    """
    reject_redacted_lookups(filter, exclude)
    qs = admin_queryset(app_label, model)
    if filter:
        qs = qs.filter(**filter)
    if exclude:
        qs = qs.exclude(**exclude)
    return qs.count()


__all__ = ["count_model"]
