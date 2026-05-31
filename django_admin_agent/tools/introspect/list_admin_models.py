from __future__ import annotations

from typing import Any

from django.contrib import admin
from django.urls import NoReverseMatch, reverse


def list_admin_models() -> list[dict[str, Any]]:
    """List every model registered with the default admin site.

    Each entry carries the model's admin metadata (``list_display``,
    ``list_filter``, ``search_fields``) and the reverse-resolved admin
    URLs (changelist + add) so the agent can navigate without guessing
    URL shapes. Works for both vanilla ``ModelAdmin`` and subclasses
    (Unfold) because every attribute is read defensively.
    """
    out: list[dict[str, Any]] = []
    for model_cls, model_admin in admin.site._registry.items():
        meta = model_cls._meta
        out.append(
            {
                "app_label": meta.app_label,
                "model": meta.object_name,
                "verbose_name": str(meta.verbose_name),
                "verbose_name_plural": str(meta.verbose_name_plural),
                "list_display": list(getattr(model_admin, "list_display", ())),
                "list_filter": list(getattr(model_admin, "list_filter", ())),
                "search_fields": list(getattr(model_admin, "search_fields", ())),
                "changelist_url": _admin_url(meta, "changelist"),
                "add_url": _admin_url(meta, "add"),
            },
        )
    return out


def _admin_url(meta: Any, action: str) -> str | None:
    try:
        return reverse(f"admin:{meta.app_label}_{meta.model_name}_{action}")
    except NoReverseMatch:
        return None


__all__ = ["list_admin_models"]
