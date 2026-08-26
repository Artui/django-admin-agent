from __future__ import annotations

import functools
from collections.abc import Callable
from typing import Any

from django.http import HttpRequest
from django_ag_ui import AGUIServer, ToolRegistry

from django_admin_agent.staff_required import staff_required
from django_admin_agent.tools.build_admin_deps import build_admin_deps
from django_admin_agent.tools.register import build_default_registry

DEFAULT_URL_NAMESPACE = "admin_agent"


class AdminAgentServer(AGUIServer):
    """The admin sidebar's mount object — a ``django_ag_ui.AGUIServer``
    pre-configured for the Django admin.

    Construct it once and mount its namespaced ``urls`` the ``admin.site.urls``
    way, alongside the admin:

        from django.contrib import admin
        from django.urls import path
        from django_admin_agent import AdminAgentServer

        urlpatterns = [
            path("admin/", admin.site.urls),
            path("admin-agent/", AdminAgentServer().urls),
        ]
        # reverse("admin_agent:endpoint") · "admin_agent:tools" · "admin_agent:threads" · …

    It mounts the agent endpoint and its tool catalog, plus the thread /
    attachment / transcription sub-views when their stores are passed (the same
    conditional mounting as ``AGUIServer``).

    **Two gates, and they answer different questions.** Every mounted route
    requires an authenticated, active **staff** user — without that an
    unauthenticated visitor could drive the agent and stream model data back
    over SSE. But ``is_staff`` is Django's flag for *may enter the admin*, not a
    permission over anything inside it, so it is only the door. Past it, every
    tool that reads a model consults the acting user's own admin permissions and
    the registered ``ModelAdmin.get_queryset(request)``, which is what keeps the
    agent exactly as capable as the person driving it: a staff user with no
    permission on a model gets nothing for it here, just as in the admin.

    That second gate needs to know who is asking, which is what this class's
    ``deps_factory`` default
    ([`build_admin_deps`][django_admin_agent.tools.build_admin_deps.build_admin_deps])
    is for. It binds the acting request for the run and then defers to any
    ``deps_factory`` you pass, so supplying your own cannot switch the gate off.

    **Every keyword below this class's own passes straight through** to
    ``django_ag_ui.AGUIServer`` via ``**kwargs`` — the model, the stores,
    the toolsets and capabilities, the drf-mcp bridge, the per-request model and
    instructions hooks, the throttle, and anything added there later. They are
    deliberately not enumerated here; the ones below are re-declared only because
    this package overrides their defaults, and a test asserts the rest keep
    flowing through.

    Args:
        registry: The server-side tool registry. ``None`` uses the built-in admin
            tools
            ([`build_default_registry`][django_admin_agent.tools.register.build_default_registry]).
        require_authenticated: Answer ``401`` to an anonymous request.
        authorize: Per-request gate answering ``403`` when it returns ``False``,
            as JSON rather than an HTML login redirect. The default admits active
            staff; pass ``lambda r: r.user.is_superuser`` to tighten.
        csrf_exempt: Drop CSRF protection from the agent endpoint. Left off — the
            sidebar bootstrap already sends the token.
        deps_factory: Per-run ``request -> AgentDeps`` hook. Re-declared only so
            the acting request is bound whether or not you pass one; yours still
            decides what the deps are.
        namespace: The URL namespace the mounted routes live under, which the
            sidebar reverses against. Pass the same value to the template tag
            when it is not the default:

                {% django_admin_agent_sidebar namespace="internal-agent" %}
    """

    def __init__(
        self,
        registry: ToolRegistry | None = None,
        *,
        require_authenticated: bool = True,
        authorize: Callable[[HttpRequest], bool] | None = staff_required,
        csrf_exempt: bool = False,
        namespace: str = DEFAULT_URL_NAMESPACE,
        deps_factory: Callable[[HttpRequest], Any] | None = None,
        **kwargs: Any,
    ) -> None:
        super().__init__(
            registry if registry is not None else build_default_registry(),
            require_authenticated=require_authenticated,
            authorize=authorize,
            csrf_exempt=csrf_exempt,
            namespace=namespace,
            deps_factory=functools.partial(build_admin_deps, factory=deps_factory),
            **kwargs,
        )


__all__ = ["DEFAULT_URL_NAMESPACE", "AdminAgentServer"]
