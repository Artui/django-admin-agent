from __future__ import annotations

from collections.abc import Callable
from typing import Any

from django.http import HttpRequest
from django_ag_ui import AGUIServer, ToolRegistry

from django_admin_agent.staff_required import staff_required
from django_admin_agent.tools.register import build_default_registry

DEFAULT_URL_NAMESPACE = "admin_agent"


class AdminAgentServer(AGUIServer):
    """The admin sidebar's mount object — a :class:`~django_ag_ui.AGUIServer`
    pre-configured for the Django admin.

    Construct it once and mount its namespaced :attr:`~django_ag_ui.AGUIServer.urls`
    the ``admin.site.urls`` way, alongside the admin::

        from django.contrib import admin
        from django.urls import path
        from django_admin_agent import AdminAgentServer

        urlpatterns = [
            path("admin/", admin.site.urls),
            path("admin-agent/", AdminAgentServer().urls),
        ]
        # reverse("admin_agent:endpoint") · "admin_agent:tools" · "admin_agent:threads" · …

    It mounts the agent endpoint and its tool catalog, plus the thread /
    attachment / transcription sub-views when their stores are configured (the
    same conditional mounting as ``AGUIServer``). The web-component sidebar
    reverses these names via ``DJANGO_ADMIN_AGENT["URL_NAMESPACE"]`` (default
    ``"admin_agent"``) — set it if you pass a non-default ``namespace``.

    **Fail-closed by default.** Every mounted route requires an authenticated,
    active **staff** user: ``require_authenticated=True`` gives ``401`` for an
    anonymous request and ``authorize=staff_required`` gives ``403`` for a
    non-staff one (JSON, not an HTML login redirect), and the agent endpoint is
    CSRF-protected (``csrf_exempt=False`` — the sidebar bootstrap already sends
    the token). Without this an unauthenticated visitor could drive the agent and
    stream model data (e.g. ``auth.User`` rows) back over SSE. Relax it
    deliberately — e.g. ``authorize=lambda r: r.user.is_superuser`` to tighten,
    or ``require_authenticated=False`` to open it — but the default is locked.

    Defaults the registry to the built-in admin tool registry
    (:func:`~django_admin_agent.build_default_registry`). Extra keyword arguments
    (``model``, ``instructions``, ``audit_logger``, ``get_user``,
    ``conversation_store``, ``attachment_store``, ``transcription_backend``) pass
    straight through to :class:`~django_ag_ui.AGUIServer`.
    """

    def __init__(
        self,
        registry: ToolRegistry | None = None,
        *,
        require_authenticated: bool = True,
        authorize: Callable[[HttpRequest], bool] | None = staff_required,
        csrf_exempt: bool = False,
        namespace: str = DEFAULT_URL_NAMESPACE,
        **kwargs: Any,
    ) -> None:
        super().__init__(
            registry if registry is not None else build_default_registry(),
            require_authenticated=require_authenticated,
            authorize=authorize,
            csrf_exempt=csrf_exempt,
            namespace=namespace,
            **kwargs,
        )


__all__ = ["DEFAULT_URL_NAMESPACE", "AdminAgentServer"]
