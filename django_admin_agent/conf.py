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

    chat_surface_tools: bool
    """Whether the agent may move, minimise and restore its own panel.

    On by default, which is a departure from how this package treats a new
    agent capability -- ``enableCharts(["tool"])`` is left to the project
    because it widens what the agent can do. The difference is what the widened
    surface reaches: these four tools can move the sidebar and nothing else.
    They read no model, change no row and touch no data, so the only cost is
    four tool definitions in each request, and the thing they buy is the one
    problem a chat pinned to its own tab never has -- this one sits on top of
    the changelist it is being asked about.

    ``False`` registers none of them. Worth turning off for a placement that
    owns its own position and has no collapsed state, since there the tools can
    only ever answer that they did nothing."""

    start_open: bool
    """Whether a corner placement opens on a first visit, rather than resting
    at its launcher.

    ``False`` is the component's own behaviour from 0.35.0 and the default
    here: an admin page arrives with the chat as a bubble in the corner, not
    with a panel over the changelist somebody came to read. Before that the
    panel opened itself, so a site that wants the old behaviour back sets this
    to ``True``.

    Only the corner placements have a collapsed state to rest in, so this does
    nothing under ``"sidebar"``, ``"embedded"`` or ``"page"``. A choice the
    user makes by collapsing or expanding outlives this: it is the *first*
    visit this decides, and the stored preference wins afterwards."""

    launcher_drag: bool
    """When ``False``, the sidebar stays where your CSS puts it: the collapsed
    bubble cannot be dragged around the screen and the open panel cannot be
    moved by its header (``data-launcher-drag="false"``).

    Defaults to ``True``, which is the component's own default. Reach for
    ``False`` when the sidebar's position is part of a designed admin layout
    rather than something each user should arrange -- and note that a docked
    ``placement`` already fixes the position on its own, so this is for the
    floating one."""

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
        chat_surface_tools=bool(raw.get("CHAT_SURFACE_TOOLS", True)),
        start_open=bool(raw.get("START_OPEN", False)),
        launcher_drag=bool(raw.get("LAUNCHER_DRAG", True)),
        theme_toggle=bool(raw.get("THEME_TOGGLE", False)),
        shell_field_redaction=raw.get("SHELL_FIELD_REDACTION", True),
        model_scope=raw.get("MODEL_SCOPE"),
    )


__all__ = ["AdminAgentSettings", "get_settings"]
