from __future__ import annotations

from django.contrib import admin
from django.urls import path

from django_admin_agent import AdminAgentServer

urlpatterns = [
    path("admin/", admin.site.urls),
    path("internal-agent/", AdminAgentServer(namespace="internal-agent").urls),
    path("public-agent/", AdminAgentServer(namespace="public-agent").urls),
]
