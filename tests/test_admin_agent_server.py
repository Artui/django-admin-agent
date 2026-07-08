from __future__ import annotations

from django.urls import URLPattern
from django_ag_ui import (
    AttachmentsView,
    DjangoAGUIView,
    ThreadsView,
    ToolRegistry,
    ToolsView,
    TranscribeView,
)

from django_admin_agent import AdminAgentServer, staff_required
from django_admin_agent.admin_agent_server import DEFAULT_URL_NAMESPACE


def _patterns(server: AdminAgentServer) -> list[URLPattern]:
    patterns, _, _ = server.urls
    return patterns


def _names(server: AdminAgentServer) -> list[str]:
    return [p.name for p in _patterns(server)]


def test_urls_is_the_namespaced_triple() -> None:
    patterns, app_name, namespace = AdminAgentServer().urls
    assert app_name == namespace == DEFAULT_URL_NAMESPACE == "admin_agent"
    assert isinstance(patterns, list)


def test_default_mount_is_endpoint_and_tools_only() -> None:
    # No stores configured (settings default to Null), so only the agent
    # endpoint + tool catalog mount — the persistence sub-views stay off.
    patterns = _patterns(AdminAgentServer())
    assert [p.name for p in patterns] == ["endpoint", "tools"]
    endpoint, tools = patterns
    assert isinstance(endpoint, URLPattern)
    assert str(endpoint.pattern) == ""
    assert isinstance(endpoint.callback, DjangoAGUIView)
    assert str(tools.pattern) == "tools/"
    assert isinstance(tools.callback, ToolsView)


def test_default_registry_is_used() -> None:
    # The built-in admin registry is wired when none is passed.
    view = _patterns(AdminAgentServer())[0].callback
    assert len(list(view._registry)) > 0


def test_thread_endpoints_mount_for_a_configured_store() -> None:
    patterns = _patterns(AdminAgentServer(conversation_store=_DummyStore()))
    threads = next(p for p in patterns if p.name == "threads")
    detail = next(p for p in patterns if p.name == "thread")
    assert str(threads.pattern) == "threads/"
    assert str(detail.pattern) == "threads/<str:thread_id>/"
    assert isinstance(threads.callback, ThreadsView)
    assert threads.callback is detail.callback


def test_attachment_endpoints_mount_for_a_configured_store() -> None:
    patterns = _patterns(AdminAgentServer(attachment_store=_DummyAttachmentStore()))
    attachments = next(p for p in patterns if p.name == "attachments")
    detail = next(p for p in patterns if p.name == "attachment")
    assert str(attachments.pattern) == "attachments/"
    assert str(detail.pattern) == "attachments/<str:attachment_id>/"
    assert isinstance(attachments.callback, AttachmentsView)
    assert attachments.callback is detail.callback


def test_transcribe_endpoint_mounts_for_a_configured_backend() -> None:
    patterns = _patterns(AdminAgentServer(transcription_backend=_DummyBackend()))
    transcribe = next(p for p in patterns if p.name == "transcribe")
    assert str(transcribe.pattern) == "transcribe/"
    assert isinstance(transcribe.callback, TranscribeView)


def test_namespace_is_overridable() -> None:
    _, app_name, namespace = AdminAgentServer(namespace="copilot").urls
    assert app_name == namespace == "copilot"


def test_supplied_registry_is_used() -> None:
    registry = ToolRegistry()
    view = _patterns(AdminAgentServer(registry))[0].callback
    assert view._registry is registry


def test_model_passes_through_to_the_view() -> None:
    sentinel = object()
    view = _patterns(AdminAgentServer(model=sentinel))[0].callback
    assert view._model is sentinel


def test_mounted_routes_are_staff_gated_and_csrf_protected_by_default() -> None:
    server = AdminAgentServer(
        conversation_store=_DummyStore(),
        attachment_store=_DummyAttachmentStore(),
        transcription_backend=_DummyBackend(),
    )
    for pattern in _patterns(server):
        view = pattern.callback
        assert view._require_authenticated is True
        assert view._authorize_predicate is staff_required
    # The agent endpoint is CSRF-protected by default.
    assert _patterns(server)[0].callback.csrf_exempt is False


def test_auth_can_be_relaxed_deliberately() -> None:
    view = _patterns(AdminAgentServer(require_authenticated=False, authorize=None))[0].callback
    assert view._require_authenticated is False
    assert view._authorize_predicate is None


class _DummyStore:
    """A minimal non-``Null`` conversation store — only its type matters here."""


class _DummyAttachmentStore:
    """A minimal non-``Null`` attachment store — only its type matters here."""


class _DummyBackend:
    """A minimal non-``Null`` transcription backend — only its type matters here."""
