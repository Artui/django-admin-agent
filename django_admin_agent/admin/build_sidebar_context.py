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
    """Build the context the sidebar template needs.

    Reverses the AG-UI endpoint URL, resolves the bootstrap module's static URL,
    reads the title / auto-confirm flag from settings, and resolves the admin
    index URL so the frontend ``nav.*`` tools can build changelist / changeform
    URLs without reversing named routes in the browser. Shared by the
    ``{% django_admin_agent_sidebar %}`` template tag and the
    [`SidebarAdminSite`][django_admin_agent.admin.sidebar_admin_site.SidebarAdminSite]
    ``each_context`` hook.

    Args:
        namespace: The mounted
            [`AdminAgentServer`][django_admin_agent.admin_agent_server.AdminAgentServer]
            to reverse against — the one it was constructed with. An argument
            rather than a setting, because a project may mount more than one
            sidebar.
        user: The signed-in principal, used only to scope the stored
            conversation to them. Optional, and ``None`` reproduces the previous
            behaviour exactly.
    """
    config = get_settings()
    attachments_url = _attachments_url(namespace)
    attachment_max_bytes, attachment_accept = _attachment_limits(attachments_url)
    return {
        "endpoint": reverse(f"{namespace}:endpoint"),
        "title": config.title,
        "auto_confirm": config.auto_confirm,
        "tool_display": config.tool_display,
        "message_actions": config.message_actions,
        "skills": config.skills if config.skills is not None else build_skills(),
        "tools_url": _tools_url(namespace),
        "threads_url": _threads_url(namespace),
        "runs_url": _runs_url(namespace),
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
        "user_key": _user_key(user),
    }


def _user_key(user: Any) -> str | None:
    """A stable identifier for the signed-in principal, or ``None``.

    The component keeps a conversation in ``sessionStorage``, which is scoped to
    the *tab* and not to the session — so it survives the navigation a logout is,
    and the next principal to sign in at the same desk lands on the previous
    one's transcript. Naming the principal is the only signal there is; the
    component purges everything the previous one left behind when this changes.

    ``pk`` rather than ``username``: it is what does not move when somebody
    renames an account, and a renamed account is the same principal. It is the
    reader's own primary key rendered into the page they are already
    authenticated for, so it discloses nothing to them they could not read off
    their own change form.

    ``None`` for an anonymous or absent user, which leaves the attribute off the
    element entirely and restores the previous behaviour rather than inventing a
    shared ``"anonymous"`` bucket — the admin refuses anonymous callers anyway,
    so this arm is about a template rendered outside that gate.
    """
    pk = getattr(user, "pk", None)
    if pk is None or not getattr(user, "is_authenticated", False):
        return None
    return str(pk)


def _attachment_limits(attachments_url: str | None) -> tuple[int | None, str | None]:
    """Mirror django-ag-ui's server-side upload guards for the client composer.

    When uploads are mounted (``attachments_url`` is set), read the limits from
    the ``DJANGO_AG_UI`` scalars so the Web Component can reject oversized or
    wrong-type files *before* upload. Returns ``(max_bytes, accept)`` where each
    is ``None`` when the corresponding limit is unset (no cap / any type) or
    uploads are off.

    **A hint, not the gate.** These limits are per-endpoint upstream, so a server
    built with an explicit ``config=`` may hold different values than the settings
    read here and the hint goes stale. That is cosmetic — ``AttachmentsView``
    enforces its own config server-side and still rejects the upload — and it
    keeps the sidebar, a presentation layer, out of reaching into another
    server's config.

    Read through ``build_ag_ui_config``, which is django-ag-ui's public way to
    resolve ``DJANGO_AG_UI`` and the same call ``AGUIServer`` makes in its own
    ``__init__``. The defaults, the coercions and the meaning of an unset value
    therefore live upstream in one place instead of being restated here — and
    the sidebar stops depending on ``django_ag_ui.conf``, a module the package
    does not re-export and the docs never mention, whose disappearance in a
    minor release would take every admin page with it.

    ``accept`` is an HTML ``accept``-style comma-joined string built from
    ``ATTACHMENT_ALLOWED_TYPES``.
    """
    if attachments_url is None:
        return None, None
    ag_ui = build_ag_ui_config()
    return ag_ui.attachment_max_bytes or None, ",".join(ag_ui.attachment_allowed_types) or None


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


def _runs_url(namespace: str) -> str | None:
    """Resolve the run-index URL the Web Component's checkpoint panel fetches, or
    ``None`` when no step store is configured (so the sub-view is unmounted).

    Self-gating: ``runs`` mounts only alongside ``resume`` / ``fork``, so a
    project without durable step persistence gets no attribute and no panel —
    the same rule the thread / attachment / transcribe URLs follow."""
    try:
        return reverse(f"{namespace}:runs")
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
