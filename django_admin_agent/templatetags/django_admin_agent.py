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

    Takes the template context to read the signed-in principal off the request:
    it scopes the stored conversation to them, and it decides whether there is a
    sidebar to render at all. Django's admin installs the ``request`` context
    processor, so this is present on any page that can render the tag; a context
    without it degrades to the previous behaviour rather than raising, since a
    missing user is a valid answer here.

    **A signed-out visitor gets nothing.** The tag is installed in
    ``admin/base_site.html``, and the admin's *login* page renders that
    template's branding block -- so the one page reached with nobody signed in
    is a page the sidebar would otherwise appear on. The endpoint behind it
    refuses anyone who is not active staff, so a launcher there could only ever
    answer 401: it is dead UI rather than a host's styling choice, and rendering
    nothing is the honest answer. The decision has to be made here rather than
    in the template, because an inclusion tag renders against
    ``Context.new(...)`` -- only the dict returned below reaches
    ``sidebar.html``, so no ``{% if user.is_authenticated %}`` there could see a
    user at all.
    """
    request = context.get("request") if hasattr(context, "get") else None
    user = getattr(request, "user", None)
    # Two conditions in one ``and``-chain, which a 100% branch gate cannot see
    # inside -- so each is named by the test that holds it, measured by deleting
    # it. Drop ``user is not None`` and
    # test_a_request_without_a_user_still_renders_the_sidebar fails, along with
    # test_a_context_without_a_request_still_renders_the_sidebar and every other
    # test here that renders without a request: a request that never met
    # AuthenticationMiddleware, and a context with no request at all, are "we
    # cannot tell" rather than "anonymous", which is the degradation the
    # paragraph above documents. Drop the authentication check and the
    # signed-out tests still pass while
    # test_a_signed_in_principal_still_gets_the_sidebar fails, because the
    # sidebar would then be suppressed for everybody.
    if user is not None and not getattr(user, "is_authenticated", False):
        return {"anonymous_visitor": True}
    return build_sidebar_context(namespace, user=user)


__all__ = ["register"]
