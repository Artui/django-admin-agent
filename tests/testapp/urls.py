from __future__ import annotations

from django.contrib import admin
from django.urls import path

from django_admin_agent import AdminAgentServer

urlpatterns = [
    path("admin/", admin.site.urls),
    path("admin-agent/", AdminAgentServer().urls),
]
