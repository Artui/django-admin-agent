from __future__ import annotations

from dataclasses import dataclass
from typing import Any

from django.conf import settings

_SETTING_NAME = "DJANGO_ADMIN_AGENT"


@dataclass(frozen=True)
class AdminAgentSettings:
    """Snapshot of the user-configurable ``DJANGO_ADMIN_AGENT`` settings.

    Built fresh on every read so test overrides take effect immediately.
    The agent model itself is configured separately via ``django-ag-ui``'s
    ``DJANGO_AG_UI["MODEL"]``.
    """

    title: str
    """Header text shown on the sidebar chat panel."""

    auto_confirm: bool
    """When ``True``, destructive UI tools run without a confirmation modal.
    Passed to the Web Component as ``autoConfirm``."""

    tool_display: str
    """How much detail tool-call cards show: ``"minimal"``, ``"compact"``, or
    ``"full"``. Passed to the Web Component as the ``data-tool-display``
    attribute; defaults to ``"compact"`` for a dense admin sidebar."""

    message_actions: str
    """Which per-message actions the sidebar offers, as a comma-separated list of
    ``copy`` / ``retry`` / ``feedback``. Passed through as
    ``data-message-actions``.

    Defaults to ``"copy,retry"``, which is also the component's own default from
    0.31.0 -- this states it rather than subtracting from it. The rating buttons
    fire an ``ag-ui-feedback`` event and store nothing by design, because a
    rating belongs to whatever a project already uses for product signal, and
    nothing here listens for it.

    **The setting exists for the other direction.** A project that wires its own
    listener on the sidebar element sets ``"copy,retry,feedback"`` and gets the
    thumbs back; without this it would have no way to ask. Setting it explicitly
    also means the admin's row does not move if the component's default does."""

    skills: list[dict[str, Any]] | None
    """Optional override for the skill catalog (client ``Skill`` dicts). ``None``
    uses the built-in admin catalog
    ([`build_skills`][django_admin_agent.admin.build_skills.build_skills])."""

    theme: str | None
    """Web Component theme: ``"light"`` / ``"dark"`` / ``"auto"`` / ``"code"``.
    ``None`` leaves the component default (light)."""

    density: str | None
    """``"comfortable"`` / ``"compact"``. ``None`` leaves the default."""

    placement: str | None
    """``"bottom-left"`` / ``"side"`` / ``"sidebar"`` / ``"full"`` / ``"embedded"``
    (or unset for the default floating bottom-right). ``"sidebar"`` is a
    full-height docked panel that collapses to an icon rail; pair it with
    [`side`][django_admin_agent.conf.AdminAgentSettings.side]."""

    text_animation: str | None
    """Incoming-text animation: ``"none"`` / ``"fade"`` / ``"word"``. ``None``
    leaves the default (none)."""

    strings: dict[str, Any] | None
    """Localized UI strings for the Web Component, passed through as its
    ``data-strings`` table (a partial override merged over the English defaults).
    Wrap values in ``gettext_lazy`` so the sidebar follows the admin's active
    language. ``None`` leaves the component's English defaults."""

    icon_url: str | None
    """URL of a header/launcher icon image, passed through as ``data-icon-url``.
    ``None`` leaves the sidebar icon-less."""

    side: str | None
    """For ``placement="sidebar"``: which edge it docks to — ``"left"`` /
    ``"right"`` (``data-side``). ``None`` leaves the component default (right)."""

    theme_toggle: bool
    """When ``True``, show the Web Component's built-in light/dark header toggle
    (``data-theme-toggle``), which flips
    [`theme`][django_admin_agent.conf.AdminAgentSettings.theme] and persists per
    tab. Defaults to ``False`` — the admin's own theme usually governs."""

    shell_field_redaction: bool | str
    """Sensitive-field redaction for the ``shell.*`` tools. ``True`` (default)
    redacts any field whose name matches the built-in denylist pattern before
    the row reaches the LLM, and refuses to filter or order on such a field —
    even legitimate staff use shouldn't stream ``auth.User`` password hashes to
    a third-party model. ``False`` disables both; a regex ``str`` replaces the
    built-in pattern with your own. This is data minimisation, not access
    control: what the acting user may read at all is decided by their admin
    permissions."""

    model_scope: list[str] | None
    """Optional narrowing of which models the sidebar's tools may touch at all.

    ``None`` (default) means the admin site's own registry is the scope: the
    tools reach a model when it is registered with the admin and the acting user
    has view permission for it. A list narrows that further and can only ever
    narrow — an entry is an ``"app_label"`` or an ``"app_label.ModelName"``,
    matched case-insensitively:

        DJANGO_ADMIN_AGENT = {"MODEL_SCOPE": ["shop", "auth.User"]}

    Reach for it when the admin is broad but the sidebar should not be."""


def get_settings() -> AdminAgentSettings:
    """Read the active ``DJANGO_ADMIN_AGENT`` settings dict."""
    raw: dict[str, Any] = getattr(settings, _SETTING_NAME, {}) or {}
    return AdminAgentSettings(
        title=raw.get("TITLE", "Admin Copilot"),
        auto_confirm=bool(raw.get("AUTO_CONFIRM", False)),
        tool_display=raw.get("TOOL_DISPLAY", "compact"),
        message_actions=raw.get("MESSAGE_ACTIONS", "copy,retry"),
        skills=raw.get("SKILLS"),
        theme=raw.get("THEME"),
        density=raw.get("DENSITY"),
        placement=raw.get("PLACEMENT"),
        text_animation=raw.get("TEXT_ANIMATION"),
        strings=raw.get("STRINGS"),
        icon_url=raw.get("ICON_URL"),
        side=raw.get("SIDE"),
        theme_toggle=bool(raw.get("THEME_TOGGLE", False)),
        shell_field_redaction=raw.get("SHELL_FIELD_REDACTION", True),
        model_scope=raw.get("MODEL_SCOPE"),
    )


__all__ = ["AdminAgentSettings", "get_settings"]
