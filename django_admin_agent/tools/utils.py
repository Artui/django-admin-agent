from __future__ import annotations

import json
from contextvars import ContextVar
from typing import Any

from django.apps import apps
from django.contrib import admin
from django.core.exceptions import PermissionDenied
from django.core.serializers.json import DjangoJSONEncoder
from django.db.models import Model
from django.http import HttpRequest

from django_admin_agent.conf import get_settings

# The admin request the agent is currently acting for.
#
# A ContextVar rather than instance state because a server-side tool is a plain
# callable: pydantic-ai hands it the arguments the model chose and nothing else,
# so the acting request cannot travel down the call as a parameter. It is bound
# once per run by
# [`build_admin_deps`][django_admin_agent.tools.build_admin_deps.build_admin_deps]
# (the endpoint's per-request hook) and by
# [`bind_acting_request`][django_admin_agent.tools.bind_acting_request.bind_acting_request]
# for anything driving the tools off-HTTP. Nothing reads it as a default: a call
# with no request bound is refused rather than run unauthorized.
ACTING_REQUEST: ContextVar[HttpRequest | None] = ContextVar(
    "django_admin_agent.acting_request",
    default=None,
)


def resolve_model(app_label: str, model: str) -> type[Model]:
    """Look up a model class by ``app_label`` + ``model``.

    Resolution only. Whether the acting user may *see* that model is a separate
    question, answered by
    [`visible_model_admin`][django_admin_agent.tools.utils.visible_model_admin].

    Raises:
        LookupError: when the model is not installed; the message names
            both parts so the agent can self-correct.
    """
    try:
        return apps.get_model(app_label, model)
    except LookupError as e:
        raise LookupError(f"model {app_label}.{model} is not installed") from e


def require_acting_request() -> HttpRequest:
    """The admin request this tool call is acting for.

    Raises:
        PermissionDenied: when nothing is bound. Every model-reading tool
            answers as the acting staff user's own admin would, so without a
            request there is no user to answer as, and the only safe answer is
            none at all.
    """
    request = ACTING_REQUEST.get()
    if request is None:
        raise PermissionDenied(
            "no admin request is bound to this call, so the acting user's admin "
            "permissions cannot be consulted. Mount the tools through "
            "AdminAgentServer, or wrap an off-HTTP call in bind_acting_request()."
        )
    return request


def model_in_scope(model_cls: type[Model]) -> bool:
    """Whether ``MODEL_SCOPE`` lets the sidebar touch this model at all.

    Unset (the default) means the admin registry is the only scope. A list
    narrows further, and can only ever narrow: an entry is an ``app_label`` or
    an ``app_label.ModelName``, matched case-insensitively.
    """
    scope = get_settings().model_scope
    if scope is None:
        return True
    meta = model_cls._meta
    allowed = {entry.lower() for entry in scope}
    return meta.app_label.lower() in allowed or f"{meta.app_label}.{meta.model_name}" in allowed


def visible_model_admin(model_cls: type[Model]) -> Any | None:
    """The ``ModelAdmin`` the acting user may see ``model_cls`` through, or ``None``.

    This is the whole authorization rule, in one place, and it is the admin's
    own: a model reaches the agent when the project registered it with the admin
    site, ``MODEL_SCOPE`` admits it, and the registered ``ModelAdmin`` grants the
    acting user view permission — which is `has_perm` over ``view_`` / ``change_``
    plus whatever the project overrode. A model absent from the admin is one the
    staff user cannot open in the admin either, so the agent does not open it.
    """
    request = require_acting_request()
    if not model_in_scope(model_cls):
        return None
    model_admin = admin.site._registry.get(model_cls)
    if model_admin is None or not model_admin.has_view_permission(request):
        return None
    return model_admin


def to_json_safe(value: Any) -> Any:
    """Coerce a Python value into something ``json.dumps`` accepts.

    Routes through ``DjangoJSONEncoder`` so dates, UUIDs, Decimals,
    durations, and lazy translations flatten to canonical string forms.
    """
    return json.loads(json.dumps(value, cls=DjangoJSONEncoder))


__all__ = [
    "ACTING_REQUEST",
    "model_in_scope",
    "require_acting_request",
    "resolve_model",
    "to_json_safe",
    "visible_model_admin",
]
