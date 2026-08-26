from __future__ import annotations

from typing import Any

from django.urls import NoReverseMatch, reverse


def admin_url(meta: Any, action: str) -> str | None:
    """Reverse a model's admin URL for ``action``, or ``None`` when it has none.

    The admin registers ``admin:<app_label>_<model_name>_<action>`` per
    registered model, and an action a ``ModelAdmin`` withholds (``add`` under
    ``has_add_permission = False``, anything at all for an unregistered model)
    simply has no route -- so ``NoReverseMatch`` is the ordinary answer here
    rather than an error, and the caller drops the entry.

    Shared rather than local because more than one producer of admin URLs has to
    agree with the others: the agent navigates by whichever one it happened to
    ask, so two copies drifting apart means two tools reporting different URLs
    for the same action.

    Args:
        meta: A model's ``_meta``. ``Any`` because Django's ``Options`` is an
            admin/ORM boundary the type stubs do not describe usefully.
        action: The admin action name, e.g. ``changelist``, ``add``, ``change``.
    """
    try:
        return reverse(f"admin:{meta.app_label}_{meta.model_name}_{action}")
    except NoReverseMatch:
        return None


__all__ = ["admin_url"]
