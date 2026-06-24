from __future__ import annotations

from django.urls import URLPattern
from django_ag_ui import DjangoAGUIView, NullConversationStore, ThreadsView, ToolRegistry

from django_admin_agent.urls import get_urls


def test_default_prefix_and_name() -> None:
    patterns = get_urls()
    assert [p.name for p in patterns] == [
        "django_admin_agent_endpoint",
        "django_admin_agent_tools",
        "django_admin_agent_threads",
        "django_admin_agent_thread",
    ]
    endpoint = patterns[0]
    assert isinstance(endpoint, URLPattern)
    assert str(endpoint.pattern) == "admin-agent/agent/"
    assert isinstance(endpoint.callback, DjangoAGUIView)
    # The tool catalog is mounted alongside, for the sidebar's data-tools-url.
    assert str(patterns[1].pattern) == "admin-agent/agent/tools/"
    # The thread index (list + <id>) for the sidebar's data-threads-url.
    assert str(patterns[2].pattern) == "admin-agent/agent/threads/"
    assert str(patterns[3].pattern) == "admin-agent/agent/threads/<str:thread_id>/"
    assert isinstance(patterns[2].callback, ThreadsView)
    # Both thread routes share one view instance.
    assert patterns[2].callback is patterns[3].callback


def test_conversation_store_override_is_used() -> None:
    store = NullConversationStore()
    threads_view = get_urls(conversation_store=store)[2].callback
    assert isinstance(threads_view, ThreadsView)
    assert threads_view._store is store


def test_custom_prefix() -> None:
    pattern = get_urls(prefix="ai/")[0]
    assert str(pattern.pattern) == "ai/agent/"


def test_supplied_registry_is_used() -> None:
    registry = ToolRegistry()
    view = get_urls(registry=registry)[0].callback
    assert isinstance(view, DjangoAGUIView)
    assert view._registry is registry


def test_view_kwargs_pass_through() -> None:
    view = get_urls(csrf_exempt=False)[0].callback
    assert view.csrf_exempt is False
