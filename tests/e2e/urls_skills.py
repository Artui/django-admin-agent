from __future__ import annotations

from django.contrib import admin
from django.urls import path

from django_admin_agent import AdminAgentServer
from tests.e2e.scripted_model import scripted_model
from tests.testapp.models import Skill

urlpatterns = [
    path("admin/", admin.site.urls),
    path(
        "admin-agent/",
        AdminAgentServer(
            model=scripted_model, skill_policy=Skill.skill_policy(), skill_editor=True
        ).urls,
    ),
]
