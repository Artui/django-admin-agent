from __future__ import annotations

from django.contrib import admin
from django.urls import path

from django_admin_agent import AdminAgentServer
from tests.testapp.models import Skill

urlpatterns = [
    path("admin/", admin.site.urls),
    path(
        "admin-agent/",
        AdminAgentServer(skill_policy=Skill.skill_policy(), skill_editor=True).urls,
    ),
]
