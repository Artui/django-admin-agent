from __future__ import annotations

import json
from typing import Any

from django.templatetags.static import static
from django.urls import NoReverseMatch, reverse
from django_ag_ui import get_settings as get_ag_ui_settings

from django_admin_agent.admin.build_route_map import build_route_map
from django_admin_agent.admin.build_skills import build_skills
from django_admin_agent.conf import AdminAgentSettings, get_settings

_BUNDLE_PATH = "django_admin_agent/admin_agent.js"


def build_sidebar_context() -> dict[str, Any]:
    """Build the context the sidebar template needs.

    Reverses the AG-UI endpoint URL, resolves the bootstrap module's static
    URL, reads the title / auto-confirm flag from settings, and resolves the
    admin index URL so the frontend ``nav.*`` tools can build changelist /
    changeform URLs without reversing named routes in the browser. Shared by
    the ``{% django_admin_agent_sidebar %}`` template tag and the
    :class:`~django_admin_agent.admin.sidebar_admin_site.SidebarAdminSite`
    ``each_context`` hook.
    """
    config = get_settings()
    namespace = config.url_namespace
    attachments_url = _attachments_url(namespace)
    attachment_max_bytes, attachment_accept = _attachment_limits(attachments_url)
    return {
        "endpoint": reverse(f"{namespace}:endpoint"),
        "title": config.title,
        "auto_confirm": config.auto_confirm,
        "tool_display": config.tool_display,
        "skills": config.skills if config.skills is not None else build_skills(),
        "tools_url": _tools_url(namespace),
        "threads_url": _threads_url(namespace),
        "attachments_url": attachments_url,
        "attachment_max_bytes": attachment_max_bytes,
        "attachment_accept": attachment_accept,
        "transcribe_url": _transcribe_url(namespace),
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
    }


def _attachment_limits(attachments_url: str | None) -> tuple[int | None, str | None]:
    """Mirror django-ag-ui's server-side upload guards for the client composer.

    When uploads are mounted (``attachments_url`` is set), read the
    server-authoritative limits from ``DJANGO_AG_UI`` so the Web Component can
    reject oversized or wrong-type files *before* upload (the server stays the
    authority). Returns ``(max_bytes, accept)`` where each is ``None`` when the
    corresponding limit is unset (no cap / any type) or uploads are off.

    ``accept`` is an HTML ``accept``-style comma-joined string built from
    ``ATTACHMENT_ALLOWED_TYPES``.
    """
    if attachments_url is None:
        return None, None
    ag_ui = get_ag_ui_settings()
    max_bytes = ag_ui.attachment_max_bytes or None
    allowed_types = ag_ui.attachment_allowed_types
    accept = ",".join(allowed_types) if allowed_types else None
    return max_bytes, accept


def _strings_json(config: AdminAgentSettings) -> str | None:
    """Serialize the localized UI-string overrides for the ``data-strings``
    attribute, or ``None`` when unset. ``default=str`` resolves ``gettext_lazy``
    proxies against the active language at render time."""
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
    """Resolve the server-tool catalog URL the Web Component fetches, or ``None``
    when the agent server wasn't mounted."""
    try:
        return reverse(f"{namespace}:tools")
    except NoReverseMatch:
        return None


def _threads_url(namespace: str) -> str | None:
    """Resolve the thread-index URL the Web Component's history drawer fetches, or
    ``None`` when no conversation store is configured (so the sub-view is unmounted)."""
    try:
        return reverse(f"{namespace}:threads")
    except NoReverseMatch:
        return None


def _attachments_url(namespace: str) -> str | None:
    """Resolve the file-upload URL the Web Component's composer posts to, or
    ``None`` when no attachment store is configured (so the sub-view is unmounted)."""
    try:
        return reverse(f"{namespace}:attachments")
    except NoReverseMatch:
        return None


def _transcribe_url(namespace: str) -> str | None:
    """Resolve the voice-transcription URL the Web Component's mic posts to, or
    ``None`` when no transcription backend is configured (so the sub-view is unmounted)."""
    try:
        return reverse(f"{namespace}:transcribe")
    except NoReverseMatch:
        return None


__all__ = ["build_sidebar_context"]
