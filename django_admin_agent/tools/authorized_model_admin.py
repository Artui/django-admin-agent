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

    Where the message ends up is the transport's call, not this function's, and
    it now takes a different route than it used to. From django-pydantic-agent
    0.18 a ``PermissionDenied`` **ends the run** rather than being converted
    into a tool failure -- converting it was the problem, since a denied call
    came back to the model as a generic, retryable failure that spends no retry
    budget, which is an existence oracle a model can sweep ids with.

    So it never travels the ``TOOL_FAILURE`` path, and
    ``TOOL_FAILURE["INCLUDE_DETAIL"]`` no longer governs it. It travels
    ``RUN_ERROR`` instead, which django-ag-ui 0.49 redacts under the *same*
    setting: with detail off the browser is told the run failed, and this
    message reaches the audit record and the operator's log only. The two
    floors have to move together -- on django-ag-ui 0.48 nothing redacted that
    path, so this text reached the transcript verbatim.

    The ambiguity is the belt to that braces: even shown, the message does not
    separate a model that does not exist from one this user may not read.

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
