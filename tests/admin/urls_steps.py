"""URLconf mounting an :class:`~django_admin_agent.AdminAgentServer` with a step store.

Exercises ``build_sidebar_context`` when durable step persistence is on, so the
run index (``runs``) mounts and ``runs_url`` resolves instead of ``None``.

The factory is a stand-in rather than the reference ``DefaultStepStore``: URL
mounting only tests that a step store was *configured*, and the real store
needs the ``[harness]`` extra this package doesn't install — the same reasoning
as the dummy attachment store in ``urls_full``.
"""

from __future__ import annotations

from typing import Any

from django.contrib import admin
from django.http import HttpRequest
from django.urls import path

from django_admin_agent import AdminAgentServer


def _step_store(request: HttpRequest) -> Any:
    """A minimal ``request -> StepStore`` factory — only its presence matters."""
    return object()


urlpatterns = [
    path("admin/", admin.site.urls),
    path("admin-agent/", AdminAgentServer(step_store=_step_store).urls),
]
