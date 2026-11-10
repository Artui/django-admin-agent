from __future__ import annotations

import json
from typing import Any

from django.templatetags.static import static
from django.urls import NoReverseMatch, reverse
from django_ag_ui import build_ag_ui_config

from django_admin_agent.admin.build_route_map import build_route_map
from django_admin_agent.admin.build_skills import build_skills
from django_admin_agent.admin_agent_server import DEFAULT_URL_NAMESPACE
from django_admin_agent.conf import AdminAgentSettings, get_settings

_BUNDLE_PATH = "django_admin_agent/admin_agent.js"


def build_sidebar_context(
    namespace: str = DEFAULT_URL_NAMESPACE, *, user: Any = None
) -> dict[str, Any]:
    """Build the context the sidebar template needs."""
    config = get_settings()
    attachments_url = _attachments_url(namespace)
    attachment_max_bytes, attachment_accept = _attachment_limits(attachments_url)
    return {
        "endpoint": reverse(f"{namespace}:endpoint"),
        "title": config.title,
        "auto_confirm": config.auto_confirm,
        "tool_display": config.tool_display,
        "tool_group_display": config.tool_group_display,
        "message_actions": config.message_actions,
        "skills": config.skills if config.skills is not None else build_skills(),
        "tools_url": _tools_url(namespace),
        "threads_url": _threads_url(namespace),
        "runs_url": _runs_url(namespace),
        "attachments_url": attachments_url,
        "attachment_max_bytes": attachment_max_bytes,
        "attachment_accept": attachment_accept,
        "transcribe_url": _transcribe_url(namespace),
        "chat_surface_tools": config.chat_surface_tools,
        "start_open": config.start_open,
        "collapse_to": config.collapse_to,
        "launcher_drag": config.launcher_drag,
        "theme_toggle": config.theme_toggle,
        "theme": config.theme,
        "density": config.density,
        "placement": config.placement,
        "text_animation": config.text_animation,
        "strings_json": _strings_json(config),
        "icon_url": config.icon_url,
        "side": config.side,
        "bootstrap_url": static(_BUNDLE_PATH),
        "admin_base_url": _admin_base_url(),
        "route_map": build_route_map(),
        "user_key": _user_key(user),
        "user_name": _user_name(user),
    }


def _user_key(user: Any) -> str | None:
    """A stable identifier for the signed-in principal, or ``None``."""
    pk = getattr(user, "pk", None)
    if pk is None or not getattr(user, "is_authenticated", False):
        return None
    return str(pk)


def _user_name(user: Any) -> str | None:
    """The name the component greets the signed-in principal by, or ``None``."""
    if not getattr(user, "is_authenticated", False):
        return None
    for method_name in ("get_short_name", "get_username"):
        method = getattr(user, method_name, None)
        name = method() if callable(method) else ""
        if name:
            return str(name)
    return None


def _attachment_limits(attachments_url: str | None) -> tuple[int | None, str | None]:
    """Mirror django-ag-ui's server-side upload guards for the client composer."""
    if attachments_url is None:
        return None, None
    ag_ui = build_ag_ui_config()
    return ag_ui.attachment_max_bytes or None, ",".join(ag_ui.attachment_allowed_types) or None


def _strings_json(config: AdminAgentSettings) -> str | None:
    """Serialize the UI-string overrides for ``data-strings``, or ``None`` when unset."""
    if config.strings is None:
        return None
    return json.dumps(config.strings, default=str)


def _admin_base_url() -> str:
    """Resolve the admin index URL (e.g. ``/admin/``), or ``/`` if unmounted."""
    try:
        return reverse("admin:index")
    except NoReverseMatch:
        return "/"


def _tools_url(namespace: str) -> str | None:
    """Resolve the tool-catalog URL the Web Component fetches, or ``None`` when unmounted."""
    try:
        return reverse(f"{namespace}:tools")
    except NoReverseMatch:
        return None


def _threads_url(namespace: str) -> str | None:
    """Resolve the thread-index URL the history drawer fetches, or ``None`` without a store."""
    try:
        return reverse(f"{namespace}:threads")
    except NoReverseMatch:
        return None


def _runs_url(namespace: str) -> str | None:
    """Resolve the run-index URL the checkpoint panel fetches, or ``None`` without a store."""
    try:
        return reverse(f"{namespace}:runs")
    except NoReverseMatch:
        return None


def _attachments_url(namespace: str) -> str | None:
    """Resolve the upload URL the composer posts to, or ``None`` without an attachment store."""
    try:
        return reverse(f"{namespace}:attachments")
    except NoReverseMatch:
        return None


def _transcribe_url(namespace: str) -> str | None:
    """Resolve the transcription URL the mic posts to, or ``None`` without a backend."""
    try:
        return reverse(f"{namespace}:transcribe")
    except NoReverseMatch:
        return None


__all__ = ["build_sidebar_context"]
