# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

## [0.3.0] — 2026-06-03

### Added
- **Server-tool card labels via the catalog endpoint.** `get_urls()` now also
  mounts django-ag-ui's tool catalog at `<prefix>agent/tools/` (named
  `django_admin_agent_tools`), and the sidebar passes it to the Web Component as
  `data-tools-url`. The labels live on each tool's `@tool(summary=…)` (e.g.
  `query_model` → "Query records", `inspect_modeladmin` → "Inspect admin") — a
  single server-side source, fetched by the component.

### Changed
- Vendored bundle → **`@artooi/ag-ui-web-component` 0.3.0** (`data-tools-url`
  catalog fetch). Pins `django-ag-ui>=0.3` (the catalog endpoint / `ToolsView`)
  and `djangorestframework-mcp-server>=0.6.1`.

### Removed
- The static `DJANGO_ADMIN_AGENT["TOOL_SUMMARIES"]` setting + `build_tool_summaries`
  map + the embedded `tool-summaries` `json_script` — superseded by the fetched
  catalog (no per-tool client duplication). Labels now live on `@tool(summary=…)`.

## [0.2.0] — 2026-06-02

### Added
- `DJANGO_ADMIN_AGENT["TOOL_DISPLAY"]` setting (default `"compact"`), passed to
  the Web Component as `data-tool-display` to control how much tool-call detail
  the sidebar shows.
- Dynamic per-model **change route** in the navigable route map
  (`/admin/<app>/<model>/:pk/change/`), filled by the agent via
  `navigate_to_route` params.
- `x-confirm` confirmation prompts on the destructive `submit_form` and
  `run_admin_action` tools.
- **Skills** — a built-in catalog of pre-defined prompts (e.g. "Summarize this
  changelist"), embedded via `build_sidebar_context` and surfaced in the
  sidebar's `/`-command palette (enabled by default). Override the catalog with
  `DJANGO_ADMIN_AGENT["SKILLS"]`; the bootstrap also wires a page-derived
  `skillContext` for `{placeholder}` prompts.
- **Styling settings** — `THEME` (light/dark/auto/code), `DENSITY`
  (comfortable/compact), `PLACEMENT` (bottom-left/side/full/embedded), and
  `TEXT_ANIMATION` (none/fade/word), each passed through to the Web Component as
  an attribute when set.
- `x-summary` labels on the destructive `submit_form` ("Submit form") and
  `run_admin_action` ("Run bulk action") tools.
- **Friendly card labels for the server-side tools** (`shell.*` / `introspect.*`),
  whose schema never reaches the browser: a built-in name → label map is embedded
  and set as the Web Component's `toolSummaries` (e.g. `query_model` → "Query
  records"). Override the whole map with `DJANGO_ADMIN_AGENT["TOOL_SUMMARIES"]`.

### Changed
- Vendored the `@artooi/ag-ui-web-component` bundle at **0.2.2** (markdown/HTML
  rendering, pending indicator, new-chat + collapse, inline confirmation card,
  tool-display modes, richer animations, dynamic routes, skills; 0.2.1's
  server-side tool results in the card + tool activity surviving a page refresh +
  the pending-indicator fix; and 0.2.2's friendlier tool-call labels, the
  "No result returned." honesty fix, and the text-animation double-fire fixes).
  Requires `django-ag-ui>=0.2`, so it also picks up the drf-mcp full-schema +
  in-process-execution fixes and `build_model` provider resolution.
- Admin DOM tools now use the Web Component's animated primitives:
  `select_option` / `toggle_checkbox` animate the control, and buttons
  (`click_button`, `submit_form`, `run_admin_action`) use the "press" animation.

## [0.1.0] — 2026-06-01

### Added
- Chat-agent sidebar for the Django admin, built on `django-ag-ui` and the
  vendored `@artooi/ag-ui-web-component` `<ag-ui-chat>` bundle.
- Default server-side tool registry (`build_default_registry`) of read-only
  `shell.*` (query / count / fetch / inspect-schema) and `introspect.*`
  (model + admin registration) tools, plus `register_*_tools` builders and
  `get_urls()` to mount the agent endpoint.
- Frontend admin tool layer: `nav.*` navigation and DOM-driving handlers
  (fill field, click, apply changelist filter) with visible animations, and a
  confirmation modal gating `x-destructive` tools.
- Sidebar wiring: the `{% django_admin_agent_sidebar %}` template tag and a
  `SidebarAdminSite` (`each_context`) path, with an admin route + page map.
- Django Unfold compatibility shim (runtime JS; lazy, guarded Python).
- Optional `[mcp]` extra exposing the admin tools as an HTTP MCP server via
  `djangorestframework-mcp-server`.

[Unreleased]: https://github.com/Artui/django-admin-agent/compare/v0.3.0...HEAD
[0.3.0]: https://github.com/Artui/django-admin-agent/compare/v0.2.0...v0.3.0
[0.2.0]: https://github.com/Artui/django-admin-agent/compare/v0.1.0...v0.2.0
[0.1.0]: https://github.com/Artui/django-admin-agent/releases/tag/v0.1.0
