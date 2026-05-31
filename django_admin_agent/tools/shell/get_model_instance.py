from __future__ import annotations

from typing import Any

from django_admin_agent.tools.utils import resolve_model, to_json_safe


def get_model_instance(
    app_label: str,
    model: str,
    pk: Any,
    select_related: list[str] | None = None,
    fields: list[str] | None = None,
) -> dict[str, Any] | None:
    """Fetch a single row by primary key. Returns ``None`` when not found."""
    model_cls = resolve_model(app_label, model)
    qs = model_cls._default_manager.all()
    if select_related:
        qs = qs.select_related(*select_related)
    if fields:
        projection = qs.values(*fields)
    else:
        all_fields = [f.name for f in model_cls._meta.concrete_fields]
        projection = qs.values(*all_fields)
    row = projection.filter(pk=pk).first()
    if row is None:
        return None
    return to_json_safe(row)


__all__ = ["get_model_instance"]
