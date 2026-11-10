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
