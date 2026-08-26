from __future__ import annotations

from typing import Any

from django.core.exceptions import PermissionDenied

from django_admin_agent.tools.utils import resolve_model, visible_model_admin


def authorized_model_admin(app_label: str, model: str) -> Any:
    """The ``ModelAdmin`` the acting staff user may read this model through.

    The single gate in front of every tool that reads a model's rows or its
    field-level shape. It refuses with ``PermissionDenied`` in exactly the cases
    the admin itself would show the user nothing: a model the project never
    registered, a model ``MODEL_SCOPE`` excludes, and a model whose
    ``ModelAdmin`` denies the acting user view permission.

    The message names which of the three it was. Where that message ends up is
    the transport's call, not this function's: by default the model is told the
    tool failed and the reason goes to the operator's log and audit trail only.
    Set ``DJANGO_AG_UI["TOOL_FAILURE"]["INCLUDE_DETAIL"] = True`` to let the
    agent explain the refusal to the user instead.

    Raises:
        LookupError: when the model is not installed at all.
        PermissionDenied: when it is installed but not readable by this user.
    """
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
