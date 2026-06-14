# django-admin-agent

An always-present chat-agent sidebar embedded in the Django admin. The agent
reads your data through typed, read-only tools and drives the admin UI itself —
filling forms, applying filters, running bulk actions, and navigating between
pages — with visible animations and a confirmation modal on destructive actions.

It is the admin-facing consumer in a three-package stack:

- **[`django-ag-ui`](https://github.com/Artui/django-ag-ui)** — the Django ↔
  Pydantic-AI ↔ [AG-UI](https://docs.ag-ui.com) bridge. Provides the
  `ToolRegistry`, the `@tool` decorator, `ToolCategory`, the async
  `DjangoAGUIView`, `get_urls`, and the audit-logger machinery. This package
  *builds on* those; it does not reimplement the transport or the agent loop.
- **`@artooi/ag-ui-web-component`** — the framework-free `<ag-ui-chat>` Web
  Component. Its built bundle is vendored into
  `django_admin_agent/static/django_admin_agent/` and loaded from the admin
  templates. It owns the chat UI, the DOM-driver primitives, the
  destructive-action confirmation modal, the **Stop** control for cancelling a
  run mid-stream, and the resumable run loop that survives admin page reloads.
- **`django-admin-agent`** (this package) — contributes the admin-specific
  server-side tools (`shell.*` / `introspect.*`), the admin-aware frontend tool
  handlers (`ui_read.*` / `ui_write.*` / `ui_generic.*` / `nav.*`), the
  `SidebarAdminSite` / `each_context` / template-tag plumbing, the navigable
  route map, and an Unfold compatibility shim.

## What it does

1. **Answers questions about your data** via read-only ORM and introspection
   tools — "how many authors are there?", "what fields does this model have?" —
   without you navigating anywhere.
2. **Drives the admin UI** with visible animations: fills change-form fields,
   selects options, toggles checkboxes, clicks buttons, applies changelist
   filters, selects rows, and runs bulk actions. Destructive steps pause for
   explicit confirmation (unless [auto-confirm](configuration.md) is on).
3. **Navigates the admin** by intent — opening a model's changelist or
   change/add form — using a server-built route map rather than guessing URLs.
4. **Survives page reloads.** The Django admin is a multi-page application:
   every save, filter, and navigation is a full reload. A navigating tool
   checkpoints the run, reloads the page, and the Web Component resumes the
   agent's turn on the page it landed on. See
   [Tool surface → the resumable loop](tools.md#navigating-tools-and-the-resumable-loop).
5. **Works on vanilla Django admin and [Django Unfold](https://github.com/unfoldadmin/django-unfold)**
   through one shared DOM driver plus a tiny runtime-detected
   [Unfold shim](unfold.md).
6. **Themeable, with skills.** The panel's theme (light / dark / auto / code),
   density, placement, text animation, and tool-call display mode are all
   configurable from settings, and a catalog of one-click **skills** appears as
   composer chips and a `/`-command palette. See
   [Configuration](configuration.md).
7. **Stops on demand.** While the agent is working, the composer's Send button
   becomes a **Stop** button — click it or press <kbd>Escape</kbd> (or start a
   new chat) to cancel the run mid-stream. Stopping aborts the streaming
   request, dismisses any open confirmation, and keeps the partial reply under a
   muted "⏹ Stopped" note. The bundled `django-ag-ui` (≥ 0.4) tears the
   model-provider request down server-side, so a stopped run doesn't keep
   generating in the background.

## Get started

- [Installation & setup](installation.md) — add to `INSTALLED_APPS`, mount
  `get_urls()`, inject the sidebar, ASGI requirement, the vendored bundle.
- [Configuration](configuration.md) — the `DJANGO_ADMIN_AGENT` settings and the
  inherited `DJANGO_AG_UI` ones.
- [Tool surface](tools.md) — every server-side and frontend tool, the
  destructive-confirmation flow, and the resumable navigation loop.
- [Admin wiring](admin-wiring.md) — the route map, page map, `SidebarAdminSite`,
  and template tag.
- [Unfold & vanilla support](unfold.md) — how one driver covers both, and the
  end-to-end suite.
- [API reference](reference.md) — the public Python surface.

```bash
pip install django-admin-agent
```
