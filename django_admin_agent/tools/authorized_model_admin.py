from __future__ import annotations

from typing import Any

from django.core.exceptions import PermissionDenied

from django_admin_agent.tools.utils import resolve_model, visible_model_admin


def authorized_model_admin(app_label: str, model: str) -> Any:
    """The ``ModelAdmin`` the acting staff user may read this model through."""
    model_cls = resolve_model(app_label, model)
    model_admin = visible_model_admin(model_cls)
    if model_admin is None:
        raise PermissionDenied(
            f"{app_label}.{model} is not readable by this user: it is either not "
            f"registered with the admin site, outside the sidebar's MODEL_SCOPE, "
            f"or one this user has no view permission for."
        )
    return model_admin


__all__ = ["authorized_model_admin"]
