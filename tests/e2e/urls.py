from __future__ import annotations

from django.contrib import admin
from django.urls import path

from django_admin_agent import AdminAgentServer
from tests.e2e.scripted_model import scripted_model

urlpatterns = [
    path("admin/", admin.site.urls),
    path("admin-agent/", AdminAgentServer(model=scripted_model).urls),
]
