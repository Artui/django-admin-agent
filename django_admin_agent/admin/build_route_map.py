from __future__ import annotations

from typing import Any

from django.contrib import admin
from django.urls import NoReverseMatch, reverse


def build_route_map() -> list[dict[str, Any]]:
    """Build the agent's navigable-route manifest from the admin registry.

    One changelist route (and one add route, when available) per registered
    model, shaped for the Web Component's ``routeMap`` — ``{id, path, title,
    group}``. The agent calls ``list_routes`` to discover destinations and
    ``navigate_to_route`` to jump to one, instead of guessing admin URLs.
    """
    routes: list[dict[str, Any]] = []
    for model_cls in admin.site._registry:
        meta = model_cls._meta
        changelist = _admin_url(meta, "changelist")
        if changelist is not None:
            routes.append(
                {
                    "id": f"{meta.app_label}.{meta.model_name}.changelist",
                    "path": changelist,
                    "title": str(meta.verbose_name_plural),
                    "group": meta.app_label,
                },
            )
        add = _admin_url(meta, "add")
        if add is not None:
            routes.append(
                {
                    "id": f"{meta.app_label}.{meta.model_name}.add",
                    "path": add,
                    "title": f"Add {meta.verbose_name}",
                    "group": meta.app_label,
                },
            )
        change = _admin_change_template(meta)
        if change is not None:
            routes.append(
                {
                    # A dynamic route: `:pk` is filled by navigate_to_route's
                    # `params` (the Web Component substitutes path segments).
                    "id": f"{meta.app_label}.{meta.model_name}.change",
                    "path": change,
                    "title": f"Edit {meta.verbose_name}",
                    "group": meta.app_label,
                },
            )
    return routes


def _admin_url(meta: Any, action: str) -> str | None:
    try:
        return reverse(f"admin:{meta.app_label}_{meta.model_name}_{action}")
    except NoReverseMatch:
        return None


# A pk sentinel unlikely to collide with the rest of an admin URL; reversed and
# then swapped for the Web Component's `:pk` placeholder.
_PK_SENTINEL = "0000pk0000"


def _admin_change_template(meta: Any) -> str | None:
    """The change URL as a `:pk` template, e.g. ``/admin/app/model/:pk/change/``."""
    try:
        url = reverse(
            f"admin:{meta.app_label}_{meta.model_name}_change",
            args=[_PK_SENTINEL],
        )
    except NoReverseMatch:
        return None
    return url.replace(_PK_SENTINEL, ":pk")


__all__ = ["build_route_map"]
