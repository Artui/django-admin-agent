from __future__ import annotations

from typing import Any

from django.contrib import admin

from django_admin_agent.tools.utils import resolve_model

# Attributes read off the ModelAdmin. Standard Django options plus a few
# additive ones common to subclasses (e.g. Unfold's tabs / list_fullwidth);
# every read is defensive so missing attributes simply report null.
_ATTRS: tuple[str, ...] = (
    "list_display",
    "list_filter",
    "list_editable",
    "search_fields",
    "ordering",
    "readonly_fields",
    "raw_id_fields",
    "autocomplete_fields",
    "filter_horizontal",
    "filter_vertical",
    "date_hierarchy",
    "list_per_page",
    "save_as",
    "save_on_top",
    # Additive (Unfold and friends); harmless when absent.
    "tabs",
    "list_fullwidth",
    "list_filter_submit",
    "compressed_fields",
    "warn_unsaved_form",
)


def inspect_modeladmin(app_label: str, model: str) -> dict[str, Any]:
    """Describe the ``ModelAdmin`` registered for a model.

    Reads options via ``getattr`` so it transparently surfaces both
    standard Django options and the additive attributes that subclasses
    (Unfold) add. Raises ``LookupError`` if the model is not registered.
    """
    model_cls = resolve_model(app_label, model)
    model_admin = admin.site._registry.get(model_cls)
    if model_admin is None:
        raise LookupError(f"{app_label}.{model} is not registered in the admin")

    options: dict[str, Any] = {}
    for attr in _ATTRS:
        if hasattr(model_admin, attr):
            options[attr] = _coerce(getattr(model_admin, attr))

    return {
        "app_label": app_label,
        "model": model_cls._meta.object_name,
        "admin_class": type(model_admin).__name__,
        "fieldsets": _coerce(getattr(model_admin, "fieldsets", None)),
        "inlines": [
            getattr(inline, "__name__", type(inline).__name__)
            for inline in getattr(model_admin, "inlines", ())
        ],
        "actions": [_action_name(a) for a in (getattr(model_admin, "actions", None) or ())],
        "options": options,
    }


def _action_name(action: Any) -> str:
    return getattr(action, "__name__", str(action))


def _coerce(value: Any) -> Any:
    if value is None:
        return None
    if isinstance(value, list | tuple):
        return [_coerce(item) for item in value]
    if isinstance(value, dict):
        return {str(k): _coerce(v) for k, v in value.items()}
    if isinstance(value, str | int | float | bool):
        return value
    return str(value)


__all__ = ["inspect_modeladmin"]
