from __future__ import annotations

from typing import Any

from django_admin_agent.tools.utils import resolve_model


def count_model(
    app_label: str,
    model: str,
    filter: dict[str, Any] | None = None,
    exclude: dict[str, Any] | None = None,
) -> int:
    """Return the row count for a model, optionally filtered."""
    model_cls = resolve_model(app_label, model)
    qs = model_cls._default_manager.all()
    if filter:
        qs = qs.filter(**filter)
    if exclude:
        qs = qs.exclude(**exclude)
    return qs.count()


__all__ = ["count_model"]
