from __future__ import annotations

from typing import Any

from django.apps import apps


def list_installed_apps() -> list[dict[str, Any]]:
    """Return the configured Django apps with labels, names, and model counts."""
    return [
        {
            "label": config.label,
            "name": config.name,
            "verbose_name": str(config.verbose_name),
            "module": config.module.__name__ if config.module is not None else None,
            "path": config.path,
            "model_count": sum(1 for _ in config.get_models()),
        }
        for config in apps.get_app_configs()
    ]


__all__ = ["list_installed_apps"]
