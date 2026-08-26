from __future__ import annotations

from collections.abc import Callable
from typing import Any

from django.http import HttpRequest

# ``AgentDeps`` is the transport's own per-run deps record. django-ag-ui takes it
# and hands it back but does not re-export it, so the one place that has to
# *construct* the default reaches the package that owns it. Nothing else here
# does: every other import in this package comes off django-ag-ui's public
# surface, as the conventions require.
from django_pydantic_agent import AgentDeps

from django_admin_agent.tools.utils import ACTING_REQUEST


def build_admin_deps(
    request: HttpRequest,
    factory: Callable[[HttpRequest], Any] | None = None,
) -> Any:
    """Bind the acting admin request for this run, then build its deps.

    Mounted as the endpoint's ``deps_factory``, which is the hook called once
    per request, with the live request, on the run's own context. Binding here
    is what lets a plain server-side tool — handed only the arguments the model
    chose, and nothing about who asked — answer as the staff user actually
    driving the sidebar.

    ``factory`` is the project's own ``deps_factory`` when it passed one. It
    still decides what the deps are; the binding happens either way, so
    replacing the deps cannot quietly unbind the acting user and leave the
    model-reading tools with nobody to answer as.
    """
    ACTING_REQUEST.set(request)
    if factory is not None:
        return factory(request)
    return AgentDeps(
        user=getattr(request, "user", None),
        ip_address=request.META.get("REMOTE_ADDR"),
    )


__all__ = ["build_admin_deps"]
