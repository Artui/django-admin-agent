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

    endpoint_url_name: str
    """URL name to reverse for the AG-UI endpoint. Mount it with
    :func:`django_admin_agent.get_urls` (which names it
    ``django_admin_agent_endpoint``)."""

    tool_display: str
    """How much detail tool-call cards show: ``"minimal"``, ``"compact"``, or
    ``"full"``. Passed to the Web Component as the ``data-tool-display``
    attribute; defaults to ``"compact"`` for a dense admin sidebar."""

    skills: list[dict[str, Any]] | None
    """Optional override for the skill catalog (client ``Skill`` dicts). ``None``
    uses the built-in admin catalog (:func:`build_skills`)."""

    theme: str | None
    """Web Component theme: ``"light"`` / ``"dark"`` / ``"auto"`` / ``"code"``.
    ``None`` leaves the component default (light)."""

    density: str | None
    """``"comfortable"`` / ``"compact"``. ``None`` leaves the default."""

    placement: str | None
    """``"bottom-left"`` / ``"side"`` / ``"sidebar"`` / ``"full"`` / ``"embedded"``
    (or unset for the default floating bottom-right). ``"sidebar"`` is a
    full-height docked panel that collapses to an icon rail; pair it with
    :attr:`side`."""

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
    """When ``True``, show the Web Component's built-in light⇄dark header toggle
    (``data-theme-toggle``), which flips :attr:`theme` and persists per tab.
    Defaults to ``False`` — the admin's own theme usually governs."""


def get_settings() -> AdminAgentSettings:
    """Read the active ``DJANGO_ADMIN_AGENT`` settings dict."""
    raw: dict[str, Any] = getattr(settings, _SETTING_NAME, {}) or {}
    return AdminAgentSettings(
        title=raw.get("TITLE", "Admin Copilot"),
        auto_confirm=bool(raw.get("AUTO_CONFIRM", False)),
        endpoint_url_name=raw.get("ENDPOINT_URL_NAME", "django_admin_agent_endpoint"),
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
    )


__all__ = ["AdminAgentSettings", "get_settings"]
