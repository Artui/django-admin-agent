from __future__ import annotations

from typing import Any

from django import template

from django_admin_agent.admin.build_sidebar_context import build_sidebar_context
from django_admin_agent.admin_agent_server import DEFAULT_URL_NAMESPACE

register = template.Library()


@register.inclusion_tag("django_admin_agent/sidebar.html", takes_context=True)
def django_admin_agent_sidebar(
    context: Any, namespace: str = DEFAULT_URL_NAMESPACE
) -> dict[str, Any]:
    """Render the chat sidebar."""
    request = context.get("request") if hasattr(context, "get") else None
    user = getattr(request, "user", None)
    if user is not None and not getattr(user, "is_authenticated", False):
        return {"anonymous_visitor": True}
    return build_sidebar_context(namespace, user=user)


__all__ = ["register"]
