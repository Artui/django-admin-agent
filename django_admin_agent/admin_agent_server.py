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
    """The admin sidebar's mount object: an ``AGUIServer`` pre-configured for the Django admin."""

    def __init__(
        self,
        registry: ToolRegistry | None = None,
        *,
        require_authenticated: bool = True,
        authorize: Callable[[HttpRequest], bool] | None = staff_required,
        csrf_exempt: bool = False,
        namespace: str = DEFAULT_URL_NAMESPACE,
        deps_factory: Callable[[HttpRequest], Any] | None = None,
        mcp_server: Any = None,
        **kwargs: Any,
    ) -> None:
        super().__init__(
            registry if registry is not None else build_default_registry(),
            require_authenticated=require_authenticated,
            authorize=authorize,
            csrf_exempt=csrf_exempt,
            namespace=namespace,
            deps_factory=functools.partial(build_admin_deps, factory=deps_factory),
            mcp_server=mcp_server,
            **kwargs,
        )


__all__ = ["DEFAULT_URL_NAMESPACE", "AdminAgentServer"]
