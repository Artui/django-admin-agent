from __future__ import annotations

from django.urls import path

from django_admin_agent import AdminAgentServer

urlpatterns = [path("admin-agent/", AdminAgentServer().urls)]
