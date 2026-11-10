from __future__ import annotations

from django.contrib import admin
from django.urls import path
from django_ag_ui import DjangoSessionConversationStore

from django_admin_agent import AdminAgentServer


class _DummyAttachmentStore:
    """A minimal non-``Null`` attachment store — only its type matters here."""


class _DummyBackend:
    """A minimal non-``Null`` transcription backend — only its type matters here."""


urlpatterns = [
    path("admin/", admin.site.urls),
    path(
        "admin-agent/",
        AdminAgentServer(
            conversation_store=DjangoSessionConversationStore(),
            attachment_store=_DummyAttachmentStore(),
            transcription_backend=_DummyBackend(),
        ).urls,
    ),
]
