# Configuration

The sidebar reads two settings dicts: its own `DJANGO_ADMIN_AGENT` (admin
sidebar presentation + endpoint wiring) and the inherited `DJANGO_AG_UI` from
[`django-ag-ui`](https://github.com/Artui/django-ag-ui) (the agent model, the
conversation store, the optional MCP bridge, …). Both are read fresh on every
access, so test overrides and runtime changes take effect immediately.

## `DJANGO_ADMIN_AGENT`

Read by `django_admin_agent.conf.get_settings()` into a frozen
`AdminAgentSettings` snapshot. All keys are optional.

| Key | Default | Purpose |
| --- | --- | --- |
| `TITLE` | `"Admin Copilot"` | Header text shown on the sidebar chat panel. |
| `AUTO_CONFIRM` | `False` | When `True`, destructive frontend tools run without the confirmation modal. Passed to the Web Component as `autoConfirm`. |
| `URL_NAMESPACE` | `"admin_agent"` | The URL namespace the mounted [`AdminAgentServer`](#access-control) uses; the sidebar reverses `<namespace>:endpoint`, `<namespace>:tools`, … within it. Override only if you mount the server with a non-default `namespace=`. |
| `TOOL_DISPLAY` | `"compact"` | How much detail tool-call cards show: `"minimal"`, `"compact"`, or `"full"`. Rendered as the `data-tool-display` attribute. |
| `THEME` | _unset_ | Web Component theme: `"light"`, `"dark"`, `"auto"`, or `"code"`. Rendered as the `theme` attribute; left off (component default, light) when unset. |
| `DENSITY` | _unset_ | Layout density: `"comfortable"` or `"compact"`. Rendered as the `density` attribute; left off when unset. |
| `PLACEMENT` | _unset_ | Where the panel sits: `"bottom-left"`, `"side"`, `"sidebar"`, `"full"`, or `"embedded"`. Rendered as the `placement` attribute; left off for the default floating bottom-right. `"sidebar"` is a full-height docked panel that collapses to an icon rail (pair it with `SIDE`). |
| `TEXT_ANIMATION` | _unset_ | Incoming-text animation: `"none"`, `"fade"`, or `"word"`. Rendered as the `data-text-animation` attribute; left off (default `none`) when unset. |
| `SIDE` | _unset_ | For `PLACEMENT="sidebar"`: which edge it docks to — `"left"` or `"right"`. Rendered as the `data-side` attribute; left off (component default, right) when unset. |
| `THEME_TOGGLE` | `False` | Show the Web Component's built-in light⇄dark header toggle (it flips `theme` and persists per tab). Rendered as the `data-theme-toggle` attribute. Off by default, since the admin's own theme usually governs. |
| `ICON_URL` | _unset_ | URL of a header/launcher icon image. Rendered as the `data-icon-url` attribute; left off (icon-less) when unset. |
| `STRINGS` | _unset_ | Localized UI-string overrides for the Web Component (a partial dict merged over its English defaults). Rendered as the `data-strings` attribute (serialized JSON). Wrap values in `gettext_lazy` so the sidebar follows the admin's active language; left off when unset. |
| `SKILLS` | _unset_ | Override for the slash-command / chip catalog (a list of `Skill` dicts). Leave unset to use the built-in admin catalog. See [Skills](#skills). |
| `SHELL_FIELD_REDACTION` | `True` | Redact sensitive fields in `shell.query_model` / `shell.get_model_instance` output. `True` uses the built-in denylist (`password\|token\|secret\|key\|hash`); `False` disables it; a regex `str` overrides the pattern. See [Access control](#access-control). |

```python title="settings.py"
DJANGO_ADMIN_AGENT = {
    "TITLE": "Acme Copilot",
    "AUTO_CONFIRM": False,
    "TOOL_DISPLAY": "compact",
    "THEME": "auto",
    "DENSITY": "compact",
}
```

!!! warning "AUTO_CONFIRM is the autopilot toggle"
    With `AUTO_CONFIRM = True`, the agent can fill and submit forms, run bulk
    actions, and apply filters without pausing for a confirmation click. Leave
    it `False` (the default) unless you trust the agent to act unattended.

### Presentation

`TOOL_DISPLAY`, `THEME`, `DENSITY`, `PLACEMENT`, and `TEXT_ANIMATION` all flow
straight through `build_sidebar_context()` onto the `<ag-ui-chat>` element as
attributes; the Web Component reads them. Their accepted values mirror the
component's own attribute values:

| Setting | Attribute | Values | Default |
| --- | --- | --- | --- |
| `TOOL_DISPLAY` | `data-tool-display` | `minimal` · `compact` · `full` | `compact` |
| `THEME` | `theme` | `light` · `dark` · `auto` · `code` | _component default (light)_ |
| `DENSITY` | `density` | `comfortable` · `compact` | _component default_ |
| `PLACEMENT` | `placement` | `bottom-left` · `side` · `sidebar` · `full` · `embedded` | _floating bottom-right_ |
| `TEXT_ANIMATION` | `data-text-animation` | `none` · `fade` · `word` | `none` |
| `THEME_TOGGLE` | `data-theme-toggle` | `True` · `False` | `False` |

`THEME_TOGGLE` adds the Web Component's built-in light⇄dark header toggle (it
flips `theme` and persists per tab) — off by default, since the admin's own theme
usually governs. `TOOL_DISPLAY` always renders (it defaults to `"compact"`); the other four are
rendered only when set, so leaving them unset keeps the component's own
defaults. `data-slash-commands="true"` is always emitted, enabling the skill
palette.

### Skills

The sidebar ships a small catalog of pre-defined prompts surfaced as **chips**
above the composer and in the `/`-command **palette**. They are embedded into
the page as a `json_script` block (`#django-admin-agent-skills`) and read by the
bootstrap module, which calls `el.setSkills(...)`. This needs no server-side
Skills endpoint — the catalog is purely client-side.

Each skill is a plain dict in the client `Skill` shape (camelCase-free here —
the keys are `name`, `title`, `description`, `prompt`):

```python
{
    "name": "summarize-page",
    "title": "Summarize this page",
    "description": "Recap what's currently shown.",
    "prompt": "Summarize what's shown on the current admin page.",
}
```

The built-in catalog (`django_admin_agent.admin.build_skills.build_skills()`)
ships four placeholder-free skills: **Summarize this page**, **Summarize this
changelist**, **Draft a description**, and **Explain this model**.

A skill `prompt` may contain `{placeholder}` tokens. The bootstrap module
supplies a `skillContext` provider derived from the current admin page —
`{path}` (the current pathname) and `{selected_ids}` (the comma-joined pks of
ticked changelist rows) — which the Web Component substitutes before sending.
The built-in skills are placeholder-free so they work on any page.

Override the whole catalog with the `SKILLS` setting:

```python title="settings.py"
DJANGO_ADMIN_AGENT = {
    "SKILLS": [
        {
            "name": "triage-orders",
            "title": "Triage open orders",
            "description": "Group the visible orders by status.",
            "prompt": "On {path}, group the visible orders by status and flag any stuck ones.",
        },
    ],
}
```

Setting `SKILLS` to an empty list (`[]`) ships no skills; leaving it unset uses
the built-in catalog.

## Access control

[`AdminAgentServer`](reference.md) is **fail-closed by default**: every mounted
route (the agent endpoint, the tool catalog, and — when configured — the thread
index, uploads, and transcription) requires an authenticated, active **staff**
user, and the agent endpoint is CSRF-protected.

- `require_authenticated=True` (default) → an anonymous request gets **401**.
- `authorize=staff_required` (default) → a non-staff user gets **403**. Both are
  JSON, not an HTML login redirect (which would corrupt an SSE stream or a JSON
  fetch), so `admin_view()` is deliberately *not* used.
- `csrf_exempt=False` (default) → the agent POST is CSRF-checked; the sidebar
  bootstrap already sends the token.

```python
from django_admin_agent import AdminAgentServer

urlpatterns = [
    path("admin/", admin.site.urls),
    # Locked to staff by default; tighten or relax deliberately:
    path("admin-agent/", AdminAgentServer(authorize=lambda r: r.user.is_superuser).urls),  # superusers only
    # path("admin-agent/", AdminAgentServer(require_authenticated=False, authorize=None).urls),  # fully open (not advised)
]
```

The default `authorize` gate is [`staff_required`](reference.md), importable from
`django_admin_agent` if you want to compose it.

Without this an unauthenticated visitor could drive the agent and, via the
`shell.query_model` tool, stream model rows — including `auth.User` password
hashes — back over SSE.

### Sensitive-field redaction

Independently of who is calling, the `shell.query_model` and
`shell.get_model_instance` tools **redact** any field whose name matches
`SHELL_FIELD_REDACTION` (default `password|token|secret|key|hash`,
case-insensitive) before the row reaches the model — even a legitimate staff
query shouldn't ship a password hash to a third-party LLM. Set it to `False` to
disable, or to a regex `str` to use your own denylist.

## Inherited `DJANGO_AG_UI`

The agent model, persistence, and toolset composition are configured on
`django-ag-ui`'s settings dict. The sidebar inherits all of it. The keys most
relevant to the admin sidebar:

| Key | Default | Purpose |
| --- | --- | --- |
| `MODEL` | _unset_ | Pydantic-AI model string, e.g. `"anthropic:claude-sonnet-4.6"`. Can instead be passed per-mount as `AdminAgentServer(model=...)`. |
| `AUTO_CONFIRM` | `False` | The `django-ag-ui`-level destructive-confirmation flag surfaced to the frontend. |
| `CONVERSATION_STORE` | `None` (stateless) | Dotted path to a `ConversationStore` for server-side conversation persistence. See below. |
| `ATTACHMENT_STORE` | `None` (uploads off) | Dotted path to an `AttachmentStore` for file uploads. See below. |
| `ATTACHMENT_MAX_BYTES` / `ATTACHMENT_ALLOWED_TYPES` | 10 MiB / any | Server-side upload size cap and content-type allowlist (enforced by `AttachmentsView`). |
| `DRF_MCP_SERVER` | `None` | Dotted path to a `djangorestframework-mcp-server` `MCPServer` instance whose tools are exposed to the agent in-process (requires the `[mcp]` extra). |
| `AUDIT_LOGGER` | _package default_ | Dotted path to an `AuditLogger` implementation. |
| `MODEL_SETTINGS`, `RETRIES`, `AGENT_FACTORY`, `TOOLSETS`, `CAPABILITIES` | — | Advanced Pydantic-AI configuration; see the `django-ag-ui` docs. |

```python title="settings.py"
DJANGO_AG_UI = {
    "MODEL": "anthropic:claude-sonnet-4.6",
    # Persist conversations server-side, per admin user, across tabs and reloads:
    "CONVERSATION_STORE": "django_ag_ui.persistence.django_session_conversation_store.DjangoSessionConversationStore",
}
```

### `CONVERSATION_STORE` and the reload model

Because the Django admin reloads the whole page on every save, filter, and
navigation, the agent's run loop must survive reloads. The Web Component's
client-side store (per-tab `sessionStorage`) keeps the conversation continuous
out of the box. Setting `CONVERSATION_STORE` adds **server-side** persistence on
top — keyed by AG-UI `thread_id`, owner-scoped per user — so a conversation
durably survives across tabs and devices, and the resume checkpoint becomes
derivable from the stored history.

For admin deployments — where [`AdminAgentServer`](#access-control) requires an
authenticated staff user, so sessions always exist —
`DjangoSessionConversationStore` is the natural choice (no migration, per-user
durability). Leaving `CONVERSATION_STORE` unset keeps the server stateless; the
client store still provides single-tab continuity.

For **durable, cross-device** history, opt into django-ag-ui's reference store
instead: add `"django_ag_ui.contrib.store"` to `INSTALLED_APPS`, run `migrate`,
and set `CONVERSATION_STORE` to
`django_ag_ui.contrib.store.default_conversation_store.DefaultConversationStore`.

### The chat-history drawer

When a conversation store is configured, `AdminAgentServer` mounts an
owner-scoped **thread index** at `<prefix>threads/` (list) and
`<prefix>threads/<id>/` (load / rename / delete), and the sidebar passes its URL
to the Web Component as `data-threads-url` — the data behind a chat-history drawer
of the admin user's past conversations. The index uses whatever
`CONVERSATION_STORE` resolves to (pass an explicit store with
`AdminAgentServer(conversation_store=...)` to override). **Without a store the
sub-view isn't mounted** and the drawer falls back to the client's per-tab
`sessionStorage` threads; configure a durable store to list server-backed threads.

### File uploads

When an attachment store is configured, `AdminAgentServer` mounts an owner-scoped
**upload endpoint** at `<prefix>attachments/` (`POST` upload) and
`<prefix>attachments/<id>/` (`GET` download, `DELETE`), and the sidebar passes its
URL to the Web Component as `data-attachments-url` — so the composer gains a 📎
picker + drag-and-drop. Files upload out-of-band and travel as lightweight refs;
the agent reads their contents server-side via the built-in `read_attachment` tool
(the AG-UI message stream stays free of file bytes).

Uploads are **off by default** — with no `ATTACHMENT_STORE` the sub-view isn't
mounted (no 📎 affordance). Turn them on by pointing `ATTACHMENT_STORE` at a store
— for **durable, per-admin-user**
files, opt into django-ag-ui's reference store: add `"django_ag_ui.contrib.store"`
to `INSTALLED_APPS`, run `migrate`, and set

```python title="settings.py"
DJANGO_AG_UI = {
    "ATTACHMENT_STORE": "django_ag_ui.contrib.store.default_attachment_store.DefaultAttachmentStore",
    # Optional server-side guards. When uploads are mounted the admin sidebar
    # forwards these to the composer (data-attachment-max-bytes /
    # data-attachment-accept) so oversized or wrong-type files are rejected
    # before upload — the server stays authoritative:
    "ATTACHMENT_MAX_BYTES": 10 * 1024 * 1024,
    "ATTACHMENT_ALLOWED_TYPES": ["image/png", "image/jpeg", "application/pdf", "text/plain"],
}
```

The reference store keeps bytes in Django `Storage` (filesystem by default; point
`STORAGES`/`DEFAULT_FILE_STORAGE` at S3/GCS for production) and metadata in a row,
scoped to the admin user — one admin never sees another's files. Pass an explicit
store with `AdminAgentServer(attachment_store=...)` to override. Validation is
server-authoritative: oversize → `413`, disallowed type → `415`, and downloads
stream through the owner-checked `GET` (never a guessable public URL).

### Voice input

When a transcription backend is configured, `AdminAgentServer` mounts a
**transcription endpoint** at `<prefix>transcribe/` (`POST` an audio clip →
`{"text": ...}`), and the sidebar passes its URL as `data-transcribe-url` — so the
composer gains a 🎤 mic button (record, then drop the transcript into the input).
Voice is **off by default** — with no `TRANSCRIPTION_BACKEND` the sub-view isn't
mounted (no mic affordance); enable it by pointing
`DJANGO_AG_UI["TRANSCRIPTION_BACKEND"]` at a backend — django-ag-ui ships an opt-in
`OpenAITranscriptionBackend` over any OpenAI-compatible endpoint (the `[openai]`
extra):

```python title="settings.py"
DJANGO_AG_UI = {
    "TRANSCRIPTION_BACKEND": (
        "django_ag_ui.contrib.transcription.openai_transcription_backend"
        ".OpenAITranscriptionBackend"
    ),
}
```

Pass an explicit backend with `AdminAgentServer(transcription_backend=...)` to override.
Model **reasoning** needs no admin wiring: when `DJANGO_AG_UI["MODEL_SETTINGS"]`
enables a thinking budget, the sidebar renders the streamed chain-of-thought in a
collapsible "thoughts" region automatically.

### `DRF_MCP_SERVER` and the `[mcp]` extra

Installing `django-admin-agent[mcp]` and pointing `DRF_MCP_SERVER` at a
`djangorestframework-mcp-server` `MCPServer` instance exposes that server's
tools to the agent in-process — no network MCP hop — alongside the built-in
`shell.*` / `introspect.*` tools. The bridge is imported lazily by
`django-ag-ui`; the dependency is never loaded unless the setting is configured.
