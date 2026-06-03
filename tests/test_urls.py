from __future__ import annotations

from django.urls import URLPattern
from django_ag_ui import DjangoAGUIView, ToolRegistry

from django_admin_agent.urls import get_urls


def test_default_prefix_and_name() -> None:
    patterns = get_urls()
    assert [p.name for p in patterns] == [
        "django_admin_agent_endpoint",
        "django_admin_agent_tools",
    ]
    endpoint = patterns[0]
    assert isinstance(endpoint, URLPattern)
    assert str(endpoint.pattern) == "admin-agent/agent/"
    assert isinstance(endpoint.callback, DjangoAGUIView)
    # The tool catalog is mounted alongside, for the sidebar's data-tools-url.
    assert str(patterns[1].pattern) == "admin-agent/agent/tools/"


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
