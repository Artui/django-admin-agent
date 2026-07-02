from __future__ import annotations

from collections.abc import Callable
from typing import Any

from django.http import HttpRequest
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


def staff_required(request: HttpRequest) -> bool:
    """The default authorization gate: an active, staff user.

    The mounted routes are JSON / SSE endpoints, so this returns a bool the
    views turn into a ``403`` — unlike ``admin_view()``, whose HTML login
    redirect would corrupt an SSE stream or a JSON fetch.
    """
    user = getattr(request, "user", None)
    return bool(getattr(user, "is_active", False) and getattr(user, "is_staff", False))


def get_urls(
    prefix: str = "admin-agent/",
    *,
    registry: ToolRegistry | None = None,
    conversation_store: ConversationStore | None = None,
    attachment_store: AttachmentStore | None = None,
    transcription_backend: TranscriptionBackend | None = None,
    require_authenticated: bool = True,
    authorize: Callable[[HttpRequest], bool] | None = staff_required,
    csrf_exempt: bool = False,
    **view_kwargs: Any,
) -> list[URLPattern]:
    """Return URL patterns mounting the admin agent's AG-UI endpoint.

    **Fail-closed by default.** Every mounted route requires an authenticated,
    active **staff** user: ``require_authenticated=True`` gives ``401`` for an
    anonymous request and ``authorize=staff_required`` gives ``403`` for a
    non-staff one (JSON, not an HTML login redirect), and the agent endpoint is
    CSRF-protected (``csrf_exempt=False`` — the sidebar bootstrap already sends
    the token). Without this an unauthenticated visitor could drive the agent and
    stream model data (e.g. ``auth.User`` rows) back over SSE. Relax it
    deliberately — e.g. ``authorize=lambda r: r.user.is_superuser`` to tighten,
    or ``require_authenticated=False`` to open it — but the default is locked.

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
    ``get_user``) pass through to the agent view. ``require_authenticated`` /
    ``authorize`` / ``csrf_exempt`` are applied to the mounted routes as above.

    Include the result from your project's root URLconf::

        urlpatterns = [
            path("admin/", admin.site.urls),
            *get_urls(),
        ]
    """
    registry = registry if registry is not None else build_default_registry()
    # The shared auth gate applied to every mounted route.
    auth: dict[str, Any] = {"require_authenticated": require_authenticated, "authorize": authorize}
    view = DjangoAGUIView(registry, csrf_exempt=csrf_exempt, **auth, **view_kwargs)
    store = (
        conversation_store
        if conversation_store is not None
        else resolve_conversation_store(get_ag_ui_settings().conversation_store)
    )
    threads_view = ThreadsView(store, **auth)
    attachments = (
        attachment_store
        if attachment_store is not None
        else resolve_attachment_store(get_ag_ui_settings().attachment_store)
    )
    attachments_view = AttachmentsView(attachments, **auth)
    transcribe = (
        transcription_backend
        if transcription_backend is not None
        else resolve_transcription_backend(get_ag_ui_settings().transcription_backend)
    )
    return [
        path(f"{prefix}agent/", view, name="django_admin_agent_endpoint"),
        path(
            f"{prefix}agent/tools/",
            ToolsView(registry, **auth),
            name="django_admin_agent_tools",
        ),
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
            TranscribeView(transcribe, **auth),
            name="django_admin_agent_transcribe",
        ),
    ]


__all__ = ["get_urls", "staff_required"]
