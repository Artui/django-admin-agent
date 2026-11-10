from __future__ import annotations

from typing import Any

from django.urls import NoReverseMatch, reverse


def admin_url(meta: Any, action: str) -> str | None:
    """Reverse a model's admin URL for ``action``, or ``None`` when it has none."""
    try:
        return reverse(f"admin:{meta.app_label}_{meta.model_name}_{action}")
    except NoReverseMatch:
        return None


__all__ = ["admin_url"]
