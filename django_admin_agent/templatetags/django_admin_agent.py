from __future__ import annotations

from typing import Any

from django import template

from django_admin_agent.admin.build_sidebar_context import build_sidebar_context

register = template.Library()


@register.inclusion_tag("django_admin_agent/sidebar.html")
def django_admin_agent_sidebar() -> dict[str, Any]:
    """Render the chat sidebar.

    Add ``{% load django_admin_agent %}`` then
    ``{% django_admin_agent_sidebar %}`` to your ``admin/base_site.html``
    (typically just before the closing ``{% block %}``). Self-contained: it
    computes its own context, so the admin site does not need swapping.
    """
    return build_sidebar_context()


__all__ = ["register"]
