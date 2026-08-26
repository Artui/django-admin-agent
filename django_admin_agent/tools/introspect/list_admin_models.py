from __future__ import annotations

from typing import Any

from django.contrib import admin

from django_admin_agent.admin.utils import admin_url
from django_admin_agent.tools.utils import visible_model_admin


def list_admin_models() -> list[dict[str, Any]]:
    """List the admin-registered models the acting staff user may view.

    The same list the admin index would show that user, so the agent never
    offers to open a changelist that would answer 403. Each entry carries the
    model's admin metadata (``list_display``, ``list_filter``,
    ``search_fields``) and the reverse-resolved admin URLs (changelist + add)
    so the agent can navigate without guessing URL shapes. Works for both
    vanilla ``ModelAdmin`` and subclasses (Unfold) because every attribute is
    read defensively.
    """
    out: list[dict[str, Any]] = []
    for model_cls, model_admin in admin.site._registry.items():
        if visible_model_admin(model_cls) is None:
            continue
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
                "changelist_url": admin_url(meta, "changelist"),
                "add_url": admin_url(meta, "add"),
            },
        )
    return out


__all__ = ["list_admin_models"]
