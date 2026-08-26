from __future__ import annotations

from typing import Any

from django_admin_agent.tools.admin_queryset import admin_queryset
from django_admin_agent.tools.shell.redact_sensitive_fields import redact_sensitive_fields
from django_admin_agent.tools.utils import to_json_safe


def get_model_instance(
    app_label: str,
    model: str,
    pk: Any,
    select_related: list[str] | None = None,
    fields: list[str] | None = None,
) -> dict[str, Any] | None:
    """Fetch a single row by primary key. Returns ``None`` when not found.

    Looks only in the rows the acting staff user's own admin would show, so a
    row that user's ``ModelAdmin.get_queryset(request)`` filters out reads as
    "not found" here too. Sensitive fields (name matching the
    ``SHELL_FIELD_REDACTION`` denylist) are redacted before the row is returned.
    """
    qs = admin_queryset(app_label, model)
    if select_related:
        qs = qs.select_related(*select_related)
    if fields:
        projection = qs.values(*fields)
    else:
        all_fields = [f.name for f in qs.model._meta.concrete_fields]
        projection = qs.values(*all_fields)
    row = projection.filter(pk=pk).first()
    if row is None:
        return None
    return redact_sensitive_fields(to_json_safe(row))


__all__ = ["get_model_instance"]
