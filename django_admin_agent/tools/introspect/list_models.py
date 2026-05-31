from __future__ import annotations

from typing import Any

from django.apps import apps


def list_models(app_label: str | None = None) -> list[dict[str, Any]]:
    """List installed Django models, optionally filtered to one app.

    Each entry carries the app label, model name, DB table, and
    Meta-derived flags. Use ``inspect_model_schema`` for the full
    field-level shape.
    """
    configs = (
        list(apps.get_app_configs()) if app_label is None else [apps.get_app_config(app_label)]
    )
    out: list[dict[str, Any]] = []
    for config in configs:
        for model_cls in config.get_models():
            meta = model_cls._meta
            out.append(
                {
                    "app_label": meta.app_label,
                    "model": meta.object_name,
                    "db_table": meta.db_table,
                    "abstract": meta.abstract,
                    "managed": meta.managed,
                    "proxy": meta.proxy,
                },
            )
    return out


__all__ = ["list_models"]
