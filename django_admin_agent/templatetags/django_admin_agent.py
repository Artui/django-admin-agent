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
    """Render the chat sidebar.

    Add ``{% load django_admin_agent %}`` then
    ``{% django_admin_agent_sidebar %}`` to your ``admin/base_site.html``
    (typically just before the closing ``{% block %}``). Self-contained: it
    computes its own context, so the admin site does not need swapping.

    ``namespace`` names the mounted
    [`AdminAgentServer`][django_admin_agent.admin_agent_server.AdminAgentServer]
    to reverse against, matching the ``namespace=`` it was built with. The
    default matches the server's own default, so a single-sidebar project passes
    nothing. A project mounting two sidebars names each:

        {% django_admin_agent_sidebar namespace="internal-agent" %}

    Takes the template context only to read the signed-in principal off the
    request, which scopes the stored conversation to them. Django's admin
    installs the ``request`` context processor, so this is present on any page
    that can render the tag; a context without it degrades to the previous
    behaviour rather than raising, since a missing user is a valid answer here.
    """
    request = context.get("request") if hasattr(context, "get") else None
    return build_sidebar_context(namespace, user=getattr(request, "user", None))


__all__ = ["register"]
