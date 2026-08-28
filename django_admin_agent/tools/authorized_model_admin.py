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

    The message names all three causes and commits to none of them, on purpose:
    *which* one held is the fact worth withholding, since "never registered" and
    "no view permission" separate a model that does not exist from one this user
    may not read.

    That ambiguity is what makes the message safe to show -- which matters,
    because from django-pydantic-agent 0.18 it **is** shown. A
    ``PermissionDenied`` now ends the run instead of being converted into a tool
    failure, so it never travels the ``TOOL_FAILURE`` path and
    ``INCLUDE_DETAIL`` does not govern it. Converting it was the problem: a
    denied call came back to the model as a generic, retryable failure that
    spends no retry budget, which is an existence oracle a model can sweep ids
    with. Refusing to run is the answer to a denied call.

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
