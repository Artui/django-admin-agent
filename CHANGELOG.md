# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

## [0.14.0] — 2026-07-27

### Added

- **Continue a run from the sidebar.** With a `step_store` configured,
  `AdminAgentServer` mounts django-ag-ui's run index and the sidebar passes it to
  the Web Component as `data-runs-url`, giving the header a ⭯ *Continue a run*
  panel: a run that stopped part-way resumes from its last server-side
  checkpoint, or forks without touching the original. Self-gating — no step
  store, no attribute, no panel — the same rule the thread / upload / mic URLs
  follow.

### Changed

- **Re-vendored `@artooi/ag-ui-web-component` 0.11.0 → 0.12.0** (the checkpoint
  panel).
- **`django-ag-ui` pin `>=0.19,<0.20` → `>=0.23,<0.24`**, adopting four releases
  at once: durable step persistence (0.20), the agent-host substrate extraction
  (0.21), spec-registry support (0.22) and the run index (0.23). No code change
  was needed — every symbol this package imports is permanently re-exported by
  django-ag-ui after the 0.21 extraction.

### Fixed

- **The configuration docs told readers to set settings keys that now refuse to
  start.** `CONVERSATION_STORE`, `ATTACHMENT_STORE` and friends were removed in
  django-ag-ui 0.19 — the release this package already depended on — and
  `check_removed_settings` raises `ImproperlyConfigured` at URL-conf import if
  one is still present, deliberately, so a silently-dropped collaborator can't
  go unnoticed. A project following the old guidance would fail to boot. The
  docs now show the constructor arguments that replaced them, with a migration
  note naming all ten removed keys.
- **They also pointed at a module that moved.** `django_ag_ui.contrib.store`
  became `django_pydantic_agent.contrib.store` in the 0.21 extraction, so the
  `INSTALLED_APPS` and store-path instructions raised `ModuleNotFoundError`.
  Repointed, along with `DjangoSessionConversationStore`'s import path.


## [0.13.0] — 2026-07-17

Adopts **django-ag-ui 0.19**, whose configuration is now per-endpoint, and
retires `URL_NAMESPACE` — the last piece of this package that assumed exactly
one mounted sidebar.

**Breaking** only if you set `DJANGO_ADMIN_AGENT["URL_NAMESPACE"]`. Everything
else in `DJANGO_ADMIN_AGENT` is unchanged: it is presentation config for a
singleton sidebar, consumed by a template tag, and stays exactly where it is.

### Changed

- **Requires `django-ag-ui>=0.19,<0.20`** (was `>=0.17,<0.19`), picking up
  per-endpoint configuration, collaborators-as-objects, and
  `ScopedConversationStore`. `AdminAgentServer` passes every extra keyword
  through to `AGUIServer`, so its new arguments (`toolsets=`, `capabilities=`,
  `drf_mcp_server=`, `config=`, …) are available on the admin sidebar too.

  If your project set any of the ten dotted-path settings ag-ui removed
  (`TOOLSETS`, `CONVERSATION_STORE`, `AUDIT_LOGGER`, …), they now raise
  `ImproperlyConfigured` naming the replacement. See
  [django-ag-ui 0.19.0](https://github.com/Artui/django-ag-ui/blob/main/CHANGELOG.md).

- The composer's upload-cap hint reads `DJANGO_AG_UI["ATTACHMENT_MAX_BYTES"]` /
  `["ATTACHMENT_ALLOWED_TYPES"]` directly (ag-ui's `get_settings` is gone). It is
  a **hint**: those are per-endpoint in 0.19, so a server built with an explicit
  `config=` could hold different values. Cosmetic only — `AttachmentsView`
  enforces its own config server-side and still rejects the upload.

### Removed

- **`DJANGO_ADMIN_AGENT["URL_NAMESPACE"]`.** The namespace is now an argument:

  ```django
  {# before: the setting named the one server #}
  {% django_admin_agent_sidebar %}

  {# after: name the server this sidebar belongs to #}
  {% django_admin_agent_sidebar namespace="internal-agent" %}
  ```

  A single-sidebar project passes nothing — the tag defaults to the same
  `"admin_agent"` the server does. `SidebarAdminSite` gains a matching
  `sidebar_namespace` class attribute.

  The setting duplicated state the server already held (you stated it twice and
  kept the two in step) and, being one global, could name only **one** server —
  though this package has always intended to support more than one sidebar. The
  installation docs even claimed you could "set it *and* `namespace=` together to
  mount two sidebars", which one global value cannot do.

### Added

- Docs: [Two sidebars in one project](https://artui.github.io/django-admin-agent/installation/#two-sidebars-in-one-project).

## [0.12.0] — 2026-07-14

### Changed

- **Adopted `django-ag-ui` 0.17+ — the human-in-the-loop tool-approval gate is
  now live in the admin.** The pin moves from `>=0.12,<0.13` to `>=0.17,<0.19`,
  bringing the server-side `TOOL_GUARD` gate (0.17) and the CodeMode `[harness]`
  extra (0.18). A project can now set `DJANGO_AG_UI["TOOL_GUARD"] = {"ENABLED":
  True}` so destructive admin tools defer for approval — the re-vendored sidebar
  (below) renders the approve/deny card and resumes the run. Off by default. No
  admin code change; the intervening `django-ag-ui` releases (0.13–0.16 —
  namespaced `.urls`, the capability-based audit / session split, and
  `SpecCapability`) are additive to the admin's usage, so the existing suite
  passes unchanged against both 0.17 and 0.18.
- **Re-vendored the 0.11.0 web-component bundle** (`WEB_COMPONENT_VERSION`),
  bringing the human-in-the-loop client UI and a customization pass to the admin
  sidebar:
  - **Server-side tool-approval card** — when the agent gates a destructive tool,
    the sidebar renders an inline approve/deny card and resumes the run with the
    decision (the AG-UI interrupt/resume loop). Now active end-to-end with the
    `django-ag-ui` bump above.
  - **`ask_user`** — an opt-in built-in typed-question tool (`chat.askUser`).
  - **Full `::part()` customization** of every widget (approval / question cards,
    attachment chips, skills UI, drawer rows) plus `approvalRenderer` /
    `askUserRenderer` hooks. No admin code change — the bundle is a drop-in.

## [0.11.0] — 2026-07-08

### Added

- **`AdminAgentServer` — the sidebar's mount object.** A
  `django_ag_ui.AGUIServer` subclass pre-configured for the admin (the default
  admin tool registry + the fail-closed staff gate). Construct it once and mount
  its namespaced `.urls` the `admin.site.urls` way:

  ```python
  from django_admin_agent import AdminAgentServer
  urlpatterns = [
      path("admin/", admin.site.urls),
      path("admin-agent/", AdminAgentServer().urls),
  ]
  ```

  Extra keyword arguments (`model`, `conversation_store`, `attachment_store`,
  `transcription_backend`, `authorize`, …) pass through to `AGUIServer`. Requires
  `django-ag-ui>=0.12`.

### Removed (breaking)

- **`get_urls` is removed** in favour of `AdminAgentServer` (upstream dropped its
  own `get_urls` in 0.12). Migrate the root URLconf from
  `*get_urls(model=...)` to `path("admin-agent/", AdminAgentServer(model=...).urls)`.
  `staff_required` is still exported (now from `django_admin_agent` directly, not
  `django_admin_agent.urls`).
- **Endpoint URL names are now namespaced.** The flat global names
  (`django_admin_agent_endpoint` / `_tools` / `_threads` / …) are replaced by the
  `admin_agent` namespace — `reverse("admin_agent:endpoint")`, `"admin_agent:tools"`,
  …. The `ENDPOINT_URL_NAME` setting is replaced by **`URL_NAMESPACE`** (default
  `"admin_agent"`); set it if you mount the server with a non-default `namespace=`.
  The agent endpoint also moves from `<prefix>agent/` to `<prefix>` (the sidebar
  reverses by name, so this is transparent).

### Changed (breaking)

- **The thread / upload / transcription sub-views mount only when their store is
  configured** (the `AGUIServer` conditional-mounting contract), instead of always
  mounting `Null`-backed endpoints. With no `CONVERSATION_STORE` / `ATTACHMENT_STORE`
  / `TRANSCRIPTION_BACKEND`, those `data-*-url` attributes are absent and the
  sidebar shows no upload / mic affordance (the history drawer falls back to the
  client's per-tab threads, as before).
- Bumped the `django-ag-ui` floor to `>=0.12,<0.13`.

## [0.10.1] — 2026-07-03

### Changed

- **The admin sidebar now forwards the configured upload guards to the browser.**
  When uploads are mounted, `build_sidebar_context()` mirrors django-ag-ui's
  server-side `ATTACHMENT_MAX_BYTES` / `ATTACHMENT_ALLOWED_TYPES` onto the
  `<ag-ui-chat>` element as `data-attachment-max-bytes` / `data-attachment-accept`,
  so the composer can reject oversized or wrong-type files before upload. The
  server stays authoritative; this is instant client-side feedback only.
- **Documentation:** documented the sidebar customization settings the code
  already reads (`STRINGS`, `ICON_URL`, `SIDE`, `THEME_TOGGLE`) and the
  `sidebar` placement value; refreshed the admin-wiring context table; and
  corrected the stale `django-ag-ui` version floor in the README and docs to the
  current `>=0.10,<0.12` pin.
- **Vendored bundle:** stripped the trailing `sourceMappingURL` pointer from the
  vendored web-component bundle (the `.map` is not shipped), so admin pages no
  longer 404 for a missing source map; the `Makefile` re-vendor targets strip it
  on every refresh.
- **Dependency:** widened the `django-ag-ui` pin to `>=0.10,<0.12` to allow the
  published 0.11.x line (CI-validated against 0.11.x).

## [0.10.0] — 2026-07-02

### Changed

- **Re-vendored the 0.10.0 web-component bundle** (`WEB_COMPONENT_VERSION`),
  adopting its client-lifecycle hardening — no new admin settings and no
  `django-ag-ui` pin change. The sidebar now: ignores Enter while a run is
  streaming (no second concurrent run); on teardown (sidebar removed / route
  swapped) cancels the run, aborts in-flight uploads, and releases the mic;
  presents the chat-history drawer as a focus-trapped, Escape-closable modal
  dialog; scopes its stored collapsed/theme/thread state per instance so two
  sidebars on one origin no longer clobber each other (existing state migrates
  automatically); and hardens history replay against a thread-switch race, a
  malformed thread response, unparseable timestamps, and corrupt attachment
  refs.

## [0.9.0] — 2026-07-02

### Security

- **The mounted routes are now fail-closed (breaking: anonymous access
  removed).** `get_urls` previously mounted the agent endpoint and its
  companions (tool catalog, thread index, uploads, transcription) **open** — an
  unauthenticated visitor could drive the agent and, via `shell.query_model`,
  stream model rows including `auth.User` password hashes back over SSE. Every
  route now defaults to `require_authenticated=True` (401 for anonymous) **and**
  `authorize=staff_required` (403 for a non-staff user), returning JSON rather
  than an HTML login redirect (so `admin_view()` is not used), and the agent
  endpoint defaults to `csrf_exempt=False` (the sidebar bootstrap already sends
  the token). Relax deliberately via `get_urls(require_authenticated=..., authorize=..., csrf_exempt=...)`.
  Pins `django-ag-ui>=0.10,<0.11` (the release that added the `authorize=` seam).
- **Sensitive fields are redacted from the shell tools.** `shell.query_model` /
  `shell.get_model_instance` now redact any field whose name matches
  `DJANGO_ADMIN_AGENT["SHELL_FIELD_REDACTION"]` (default
  `password|token|secret|key|hash`, case-insensitive) before the row reaches the
  model — even a legitimate staff query shouldn't ship a password hash to a
  third-party LLM. Set `False` to disable, or a regex `str` to override the
  denylist. New export: `django_admin_agent.urls.staff_required`.

## [0.8.0] — 2026-06-30

### Added

- **Re-vendored the 0.9.0 web-component bundle** (`WEB_COMPONENT_VERSION`) and
  bumped the `django-ag-ui` pin to `>=0.8,<0.9`, adopting the rich-turn UI:
  the per-turn answer well, inline tool-display mode + themeable status icons, and
  — for a reasoning model — a collapsible streamed **thoughts** region (no admin
  wiring needed; it appears whenever `DJANGO_AG_UI["MODEL_SETTINGS"]` enables
  thinking).
- **Voice input.** `get_urls` now also mounts a transcription endpoint at
  `<prefix>agent/transcribe/` (named `django_admin_agent_transcribe`) and the
  sidebar passes its URL as `data-transcribe-url`, so the composer gains a 🎤 mic
  button. Voice is off until `DJANGO_AG_UI["TRANSCRIPTION_BACKEND"]` is set (or a
  backend is passed via `get_urls(transcription_backend=...)`); django-ag-ui's
  opt-in `OpenAITranscriptionBackend` is the batteries-included option.
- **`THEME_TOGGLE` setting** → `data-theme-toggle`: opt into the web component's
  built-in light⇄dark header toggle (off by default).

## [0.7.0] — 2026-06-26

### Changed
- **Re-vendored the `@artooi/ag-ui-web-component` bundle to 0.7.0**
  (`WEB_COMPONENT_VERSION`), activating its UI-customization, localization, and
  page-action features in the admin sidebar, plus the mid-run "connection lost"
  reliability fix.

### Added
- **Localized sidebar strings.** `DJANGO_ADMIN_AGENT["STRINGS"]` is passed
  through to the Web Component as its `data-strings` table (a partial override of
  the English defaults). Wrap values in `gettext_lazy` and the sidebar follows
  the admin's active language.
- **Sidebar branding & docking.** `ICON_URL` surfaces a header/launcher icon
  (`data-icon-url`); `SIDE` (`"left"` / `"right"`) sets the dock edge
  (`data-side`) for the new `PLACEMENT = "sidebar"` (a full-height docked panel
  that collapses to an icon rail).

## [0.6.0] — 2026-06-25

### Added
- **File uploads in the sidebar.** `get_urls` now mounts django-ag-ui's
  `AttachmentsView` at `<prefix>agent/attachments/[<id>/]` (named
  `django_admin_agent_attachments` / `django_admin_agent_attachment`), and
  `build_sidebar_context` passes its URL to the Web Component as
  `data-attachments-url` — so an admin can attach files to a message (📎 +
  drag-and-drop) and the agent reads them via the `read_attachment` tool.
  Owner-scoped to the admin user; CSRF rides the bootstrap's existing
  `el.headers`. Uploads are disabled by default (a `NullAttachmentStore` → `410`)
  until `DJANGO_AG_UI["ATTACHMENT_STORE"]` is set (e.g. the opt-in
  `DefaultAttachmentStore`), or an `attachment_store=` is passed to `get_urls`.

### Changed
- **Bumped the `django-ag-ui` pin to `>=0.7,<0.8`** (for `AttachmentStore` /
  `AttachmentsView` / `read_attachment`) and re-vendored the
  `@artooi/ag-ui-web-component@0.6.0` bundle (the upload tray + `uploadHandler`).

## [0.5.0] — 2026-06-24

### Added
- **Chat-history drawer in the sidebar.** The chat header gains a history toggle
  (☰) that opens a slide-over listing past conversations (title · relative time ·
  preview) with select · new chat · inline rename · delete-with-confirm. Riding
  the vendored web-component 0.5.0, it is wired to the server thread index below,
  so an admin user sees their durable history and can switch between threads.
- **Server-side thread index for the chat-history drawer.** `get_urls` now mounts
  the owner-scoped thread endpoints at `<prefix>agent/threads/` (list) and
  `<prefix>agent/threads/<id>/` (load / rename / delete), and the sidebar passes
  their URL to the Web Component as `data-threads-url`. They use the same
  `CONVERSATION_STORE` the agent endpoint persists to (override with the new
  `get_urls(conversation_store=...)` argument). To get **durable, cross-device,
  per-admin-user history**, set `DJANGO_AG_UI["CONVERSATION_STORE"]` to
  django-ag-ui's reference store (`django_ag_ui.contrib.store`); without one, the
  drawer falls back to the client's per-tab threads.

### Changed
- Vendored bundle → **`@artooi/ag-ui-web-component` 0.5.0** (the chat-history
  drawer, `RemoteConversationStore`, and the `data-threads-url` wiring).
- Bumped the `django-ag-ui` pin to `>=0.6,<0.7` (for the thread-index API).

## [0.4.0] — 2026-06-14

### Added
- **Stop a run from the sidebar.** While the agent is working, the composer's
  Send button becomes a **Stop** button (or press <kbd>Escape</kbd>); starting a
  new chat also stops an in-flight run. Stopping aborts the streaming request,
  dismisses any open destructive-confirmation modal, and keeps the partial reply
  under a muted "⏹ Stopped" note. This rides the vendored web-component 0.4.0.

### Changed
- Vendored bundle → **`@artooi/ag-ui-web-component` 0.4.0** (cancel / Stop
  control, `onCancelled`, Escape-to-stop, confirmation dismissal).
- Pins **`django-ag-ui>=0.4,<0.5`** (was `>=0.3`): its guarded stream guarantees
  the Pydantic-AI / model-provider request is torn down when a run is stopped —
  no orphaned generation or runaway token spend — persists the partial
  conversation when a conversation store is configured, and records a run-level
  cancellation audit event.

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

[Unreleased]: https://github.com/Artui/django-admin-agent/compare/v0.14.0...HEAD
[0.14.0]: https://github.com/Artui/django-admin-agent/compare/v0.13.0...v0.14.0
[0.13.0]: https://github.com/Artui/django-admin-agent/compare/v0.12.0...v0.13.0
[0.12.0]: https://github.com/Artui/django-admin-agent/compare/v0.11.0...v0.12.0
[0.11.0]: https://github.com/Artui/django-admin-agent/compare/v0.10.1...v0.11.0
[0.10.1]: https://github.com/Artui/django-admin-agent/compare/v0.10.0...v0.10.1
[0.10.0]: https://github.com/Artui/django-admin-agent/compare/v0.9.0...v0.10.0
[0.9.0]: https://github.com/Artui/django-admin-agent/compare/v0.8.0...v0.9.0
[0.8.0]: https://github.com/Artui/django-admin-agent/compare/v0.7.0...v0.8.0
[0.7.0]: https://github.com/Artui/django-admin-agent/compare/v0.6.0...v0.7.0
[0.6.0]: https://github.com/Artui/django-admin-agent/compare/v0.5.0...v0.6.0
[0.5.0]: https://github.com/Artui/django-admin-agent/compare/v0.4.0...v0.5.0
[0.4.0]: https://github.com/Artui/django-admin-agent/compare/v0.3.0...v0.4.0
[0.3.0]: https://github.com/Artui/django-admin-agent/compare/v0.2.0...v0.3.0
[0.2.0]: https://github.com/Artui/django-admin-agent/compare/v0.1.0...v0.2.0
[0.1.0]: https://github.com/Artui/django-admin-agent/releases/tag/v0.1.0
