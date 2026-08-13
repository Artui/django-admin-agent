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
    """Sensitive-field redaction for the ``shell.query_model`` /
    ``shell.get_model_instance`` tools. ``True`` (default) redacts any field
    whose name matches the built-in denylist pattern
    (``password|token|secret|key|hash``, case-insensitive) before the row
    reaches the LLM — even legitimate staff use shouldn't stream ``auth.User``
    password hashes to a third-party model. ``False`` disables redaction; a
    regex ``str`` replaces the built-in pattern with your own."""


def get_settings() -> AdminAgentSettings:
    """Read the active ``DJANGO_ADMIN_AGENT`` settings dict."""
    raw: dict[str, Any] = getattr(settings, _SETTING_NAME, {}) or {}
    return AdminAgentSettings(
        title=raw.get("TITLE", "Admin Copilot"),
        auto_confirm=bool(raw.get("AUTO_CONFIRM", False)),
        tool_display=raw.get("TOOL_DISPLAY", "compact"),
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
    )


__all__ = ["AdminAgentSettings", "get_settings"]
