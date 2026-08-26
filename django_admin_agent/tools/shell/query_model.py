from __future__ import annotations

from typing import Any

from django_admin_agent.tools.admin_queryset import admin_queryset
from django_admin_agent.tools.shell.redact_sensitive_fields import redact_sensitive_fields
from django_admin_agent.tools.shell.reject_redacted_lookups import reject_redacted_lookups
from django_admin_agent.tools.utils import to_json_safe


def query_model(
    app_label: str,
    model: str,
    filter: dict[str, Any] | None = None,
    exclude: dict[str, Any] | None = None,
    order_by: list[str] | None = None,
    select_related: list[str] | None = None,
    prefetch_related: list[str] | None = None,
    fields: list[str] | None = None,
    limit: int = 50,
    offset: int = 0,
) -> list[dict[str, Any]]:
    """Query a Django model and return matching rows as JSON-safe dicts.

    Reads exactly what the acting staff user's own admin changelist would: the
    model has to be registered with the admin site, in ``MODEL_SCOPE``, and one
    this user has view permission for, and the rows come from that
    ``ModelAdmin.get_queryset(request)`` rather than the model's default
    manager.

    ``filter`` and ``exclude`` accept ORM lookup kwargs (e.g.
    ``{"email__icontains": "@foo"}``), but not on a redacted field. ``fields``
    projects via ``.values()``; if omitted, every concrete field is returned.
    ``limit`` is hard-capped at 1000 to keep responses bounded. Sensitive fields
    (name matching the ``SHELL_FIELD_REDACTION`` denylist) are redacted.
    """
    reject_redacted_lookups(filter, exclude, order_by)
    qs = admin_queryset(app_label, model)
    if select_related:
        qs = qs.select_related(*select_related)
    if prefetch_related:
        qs = qs.prefetch_related(*prefetch_related)
    if filter:
        qs = qs.filter(**filter)
    if exclude:
        qs = qs.exclude(**exclude)
    if order_by:
        qs = qs.order_by(*order_by)
    capped_limit = max(0, min(limit, 1000))
    sliced = qs[offset : offset + capped_limit]
    if fields:
        values = sliced.values(*fields)
    else:
        all_fields = [f.name for f in qs.model._meta.concrete_fields]
        values = sliced.values(*all_fields)
    return [redact_sensitive_fields(to_json_safe(row)) for row in values]


__all__ = ["query_model"]
