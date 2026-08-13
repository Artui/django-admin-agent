from __future__ import annotations

from typing import Any

from django import template

from django_admin_agent.admin.build_sidebar_context import build_sidebar_context
from django_admin_agent.admin_agent_server import DEFAULT_URL_NAMESPACE

register = template.Library()


@register.inclusion_tag("django_admin_agent/sidebar.html")
def django_admin_agent_sidebar(namespace: str = DEFAULT_URL_NAMESPACE) -> dict[str, Any]:
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
    """
    return build_sidebar_context(namespace)


__all__ = ["register"]
