from __future__ import annotations

from typing import Any

from django_admin_agent.tools.utils import resolve_model, to_json_safe


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

    ``filter`` and ``exclude`` accept ORM lookup kwargs (e.g.
    ``{"email__icontains": "@foo"}``). ``fields`` projects via
    ``.values()``; if omitted, every concrete field is returned.
    ``limit`` is hard-capped at 1000 to keep responses bounded.
    """
    model_cls = resolve_model(app_label, model)
    qs = model_cls._default_manager.all()
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
        all_fields = [f.name for f in model_cls._meta.concrete_fields]
        values = sliced.values(*all_fields)
    return [to_json_safe(row) for row in values]


__all__ = ["query_model"]
