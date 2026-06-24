from __future__ import annotations

from typing import Any

from django.urls import URLPattern, path
from django_ag_ui import (
    ConversationStore,
    DjangoAGUIView,
    ThreadsView,
    ToolRegistry,
    ToolsView,
    resolve_conversation_store,
)
from django_ag_ui import get_settings as get_ag_ui_settings

from django_admin_agent.tools.register import build_default_registry


def get_urls(
    prefix: str = "admin-agent/",
    *,
    registry: ToolRegistry | None = None,
    conversation_store: ConversationStore | None = None,
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
    return [
        path(f"{prefix}agent/", view, name="django_admin_agent_endpoint"),
        path(f"{prefix}agent/tools/", ToolsView(registry), name="django_admin_agent_tools"),
        path(f"{prefix}agent/threads/", threads_view, name="django_admin_agent_threads"),
        path(
            f"{prefix}agent/threads/<str:thread_id>/",
            threads_view,
            name="django_admin_agent_thread",
        ),
    ]


__all__ = ["get_urls"]
