from __future__ import annotations

from typing import Any

from django.db.models import Field

from django_admin_agent.tools.utils import resolve_model


def inspect_model_schema(app_label: str, model: str) -> dict[str, Any]:
    """Return a JSON-safe description of a model's schema.

    Includes concrete fields with types, nullability, relations, indexes,
    db_table, and Meta ordering — a good first step before writing
    queries.
    """
    model_cls = resolve_model(app_label, model)
    meta = model_cls._meta
    fields_info: list[dict[str, Any]] = []
    for field in meta.get_fields():
        if not isinstance(field, Field):
            continue
        fields_info.append(_field_info(field))
    return {
        "app_label": meta.app_label,
        "model": meta.object_name,
        "db_table": meta.db_table,
        "verbose_name": str(meta.verbose_name),
        "verbose_name_plural": str(meta.verbose_name_plural),
        "ordering": list(meta.ordering or []),
        "fields": fields_info,
        "indexes": [{"name": idx.name, "fields": list(idx.fields)} for idx in meta.indexes],
        "unique_together": [list(combo) for combo in meta.unique_together],
    }


def _field_info(field: Field) -> dict[str, Any]:
    info: dict[str, Any] = {
        "name": field.name,
        "type": field.get_internal_type(),
        "null": field.null,
        "primary_key": field.primary_key,
        "unique": field.unique,
        "blank": field.blank,
        "editable": field.editable,
        "verbose_name": str(field.verbose_name),
    }
    if field.max_length is not None:
        info["max_length"] = field.max_length
    if field.is_relation and isinstance(field.related_model, type):
        related_meta = field.related_model._meta
        info["related_to"] = f"{related_meta.app_label}.{related_meta.object_name}"
    return info


__all__ = ["inspect_model_schema"]
