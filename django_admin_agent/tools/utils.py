from __future__ import annotations

import json
from typing import Any

from django.apps import apps
from django.core.serializers.json import DjangoJSONEncoder
from django.db.models import Model


def resolve_model(app_label: str, model: str) -> type[Model]:
    """Look up a model class by ``app_label`` + ``model``.

    Raises:
        LookupError: when the model is not installed; the message names
            both parts so the agent can self-correct.
    """
    try:
        return apps.get_model(app_label, model)
    except LookupError as e:
        raise LookupError(f"model {app_label}.{model} is not installed") from e


def to_json_safe(value: Any) -> Any:
    """Coerce a Python value into something ``json.dumps`` accepts.

    Routes through ``DjangoJSONEncoder`` so dates, UUIDs, Decimals,
    durations, and lazy translations flatten to canonical string forms.
    """
    return json.loads(json.dumps(value, cls=DjangoJSONEncoder))


__all__ = ["resolve_model", "to_json_safe"]
