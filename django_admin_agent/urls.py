from __future__ import annotations

from typing import Any

from django.urls import URLPattern, path
from django_ag_ui import (
    AttachmentStore,
    AttachmentsView,
    ConversationStore,
    DjangoAGUIView,
    ThreadsView,
    ToolRegistry,
    ToolsView,
    TranscribeView,
    TranscriptionBackend,
    resolve_attachment_store,
    resolve_conversation_store,
    resolve_transcription_backend,
)
from django_ag_ui import get_settings as get_ag_ui_settings

from django_admin_agent.tools.register import build_default_registry


def get_urls(
    prefix: str = "admin-agent/",
    *,
    registry: ToolRegistry | None = None,
    conversation_store: ConversationStore | None = None,
    attachment_store: AttachmentStore | None = None,
    transcription_backend: TranscriptionBackend | None = None,
    **view_kwargs: Any,
) -> list[URLPattern]:
    """Return URL patterns mounting the admin agent's AG-UI endpoint.

    Builds a :class:`~django_ag_ui.DjangoAGUIView` over the default
    server-side admin tool registry (or a registry you pass) and mounts it
    at ``<prefix>agent/`` named ``django_admin_agent_endpoint`` — the name
    the sidebar reverses. Also mounts:

    - the server-tool label catalog at ``<prefix>agent/tools/`` (named
      ``django_admin_agent_tools``), passed to the Web Component as
      ``data-tools-url``;
    - the **thread index** for the chat-history drawer at ``<prefix>agent/threads/``
      and ``<prefix>agent/threads/<id>/`` (named ``django_admin_agent_threads`` /
      ``django_admin_agent_thread``), passed as ``data-threads-url``. It uses the
      same store the agent endpoint persists to — the one configured by
      ``DJANGO_AG_UI["CONVERSATION_STORE"]`` (a ``NullConversationStore`` until you
      set one, in which case the drawer falls back to the client's per-tab
      threads) — or the ``conversation_store`` you pass here.
    - the **file-upload endpoint** for the composer at ``<prefix>agent/attachments/``
      and ``<prefix>agent/attachments/<id>/`` (named ``django_admin_agent_attachments``
      / ``django_admin_agent_attachment``), passed as ``data-attachments-url``. It
      uses the store configured by ``DJANGO_AG_UI["ATTACHMENT_STORE"]`` (a
      ``NullAttachmentStore`` — uploads disabled, ``410`` — until you set one, e.g.
      the opt-in ``DefaultAttachmentStore``) — or the ``attachment_store`` you pass
      here. Owner-scoped to the admin user, so an admin only sees their own files.
    - the **voice-transcription endpoint** for the composer's mic at
      ``<prefix>agent/transcribe/`` (named ``django_admin_agent_transcribe``),
      passed as ``data-transcribe-url``. It uses the backend configured by
      ``DJANGO_AG_UI["TRANSCRIPTION_BACKEND"]`` (a ``NullTranscriptionBackend`` —
      voice disabled, ``410`` — until you set one, e.g. the opt-in
      ``OpenAITranscriptionBackend``) — or the ``transcription_backend`` you pass
      here.

    Extra keyword arguments (``model``, ``instructions``, ``audit_logger``,
    ``csrf_exempt``) pass through to the view.

    Include the result from your project's root URLconf::

        urlpatterns = [
            path("admin/", admin.site.urls),
            *get_urls(),
        ]
    """
    registry = registry if registry is not None else build_default_registry()
    view = DjangoAGUIView(registry, **view_kwargs)
    store = (
        conversation_store
        if conversation_store is not None
        else resolve_conversation_store(get_ag_ui_settings().conversation_store)
    )
    threads_view = ThreadsView(store)
    attachments = (
        attachment_store
        if attachment_store is not None
        else resolve_attachment_store(get_ag_ui_settings().attachment_store)
    )
    attachments_view = AttachmentsView(attachments)
    transcribe = (
        transcription_backend
        if transcription_backend is not None
        else resolve_transcription_backend(get_ag_ui_settings().transcription_backend)
    )
    return [
        path(f"{prefix}agent/", view, name="django_admin_agent_endpoint"),
        path(f"{prefix}agent/tools/", ToolsView(registry), name="django_admin_agent_tools"),
        path(f"{prefix}agent/threads/", threads_view, name="django_admin_agent_threads"),
        path(
            f"{prefix}agent/threads/<str:thread_id>/",
            threads_view,
            name="django_admin_agent_thread",
        ),
        path(
            f"{prefix}agent/attachments/",
            attachments_view,
            name="django_admin_agent_attachments",
        ),
        path(
            f"{prefix}agent/attachments/<str:attachment_id>/",
            attachments_view,
            name="django_admin_agent_attachment",
        ),
        path(
            f"{prefix}agent/transcribe/",
            TranscribeView(transcribe),
            name="django_admin_agent_transcribe",
        ),
    ]


__all__ = ["get_urls"]
