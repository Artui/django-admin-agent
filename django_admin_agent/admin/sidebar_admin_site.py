from __future__ import annotations

from typing import Any

from django.contrib.admin import AdminSite
from django.http import HttpRequest

from django_admin_agent.admin.build_sidebar_context import build_sidebar_context
from django_admin_agent.admin_agent_server import DEFAULT_URL_NAMESPACE


class SidebarAdminSite(AdminSite):
    """A drop-in ``AdminSite`` that exposes the sidebar config to every page.

    Adds ``django_admin_agent`` (the sidebar context) to ``each_context`` so
    a base template can render the chat without the template tag. Using the
    ``{% django_admin_agent_sidebar %}`` tag in ``admin/base_site.html`` is
    the more common path and does not require swapping the admin site.

    ``sidebar_namespace`` names the mounted
    [`AdminAgentServer`][django_admin_agent.admin_agent_server.AdminAgentServer]
    to reverse against, matching the ``namespace=`` it was built with — the
    class attribute mirrors the tag's argument, so a project running two admin
    sites can point each at its own server:

        class InternalAdminSite(SidebarAdminSite):
            sidebar_namespace = "internal-agent"
    """

    # An immutable str, so no shared-mutable hazard; subclasses override it.
    sidebar_namespace: str = DEFAULT_URL_NAMESPACE

    def each_context(self, request: HttpRequest) -> dict[str, Any]:
        """Add the sidebar context, and an **empty** one for a signed-out visitor.

        ``each_context`` runs for the admin's login page too, so this key is
        built for visitors who are not signed in. The template tag renders
        nothing for them; this path cannot, because what gets rendered is the
        host's own markup and that decision is genuinely theirs.

        What it can do is stop handing them anything to render. An anonymous
        request gets ``{}`` rather than a populated context, which matters for a
        reason beyond the dead launcher: ``build_route_map()`` takes no user and
        walks ``admin.site._registry`` unfiltered, so a populated context carries
        an inventory of every registered model, its label and its admin URL. A
        host that renders unconditionally was publishing that on its login page.

        Two states rather than the template tag's three: ``AdminSite.each_context``
        reads ``request.user`` before this override runs, so "no user to judge"
        raises upstream and cannot be reached here.

        ``{}`` rather than omitting the key, deliberately. It is falsy, so
        ``{% if django_admin_agent %}`` works as the natural guard and a host
        that already wrote one is unaffected. And ``{{ django_admin_agent.endpoint }}``
        resolves to the empty string either way, so a host that renders
        unconditionally is no worse off than before -- their launcher was already
        inert for an anonymous visitor, since the endpoint refuses anyone who is
        not active staff. They lose only the manifest they should not have had.
        """
        # Two states here, not the tag's three. The tag also handles "no user to
        # judge" -- a context rendered outside a request cycle -- but that case
        # cannot arise on this path: ``AdminSite.each_context`` reads
        # ``request.user`` itself and raises before this line if it is absent. So
        # there is no ``user is not None`` conjunct, because no test could ever
        # hold one.
        context = super().each_context(request)
        user = request.user
        if not user.is_authenticated:
            context["django_admin_agent"] = {}
            return context
        context["django_admin_agent"] = build_sidebar_context(self.sidebar_namespace, user=user)
        return context


__all__ = ["SidebarAdminSite"]
