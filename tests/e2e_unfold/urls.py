from __future__ import annotations

from django.contrib import admin
from django.urls import path
from django_spec_agents.contrib.store.default_conversation_store import (
    DefaultConversationStore,
)
from unfold.admin import ModelAdmin

from django_admin_agent import AdminAgentServer
from tests.e2e.scripted_model import scripted_model
from tests.testapp.models import Author

if Author in admin.site._registry:
    admin.site.unregister(Author)


@admin.register(Author)
class AuthorAdmin(ModelAdmin):
    list_display = ("name", "email")
    # Few enough per page that the list has a pagination row to stick.
    list_per_page = 50


urlpatterns = [
    path("admin/", admin.site.urls),
    path(
        "admin-agent/",
        AdminAgentServer(model=scripted_model, conversation_store=DefaultConversationStore()).urls,
    ),
]
