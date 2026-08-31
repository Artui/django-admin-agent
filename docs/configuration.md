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
| `TOOL_DISPLAY` | `"compact"` | How much detail tool-call cards show: `"minimal"`, `"compact"`, or `"full"`. Rendered as the `data-tool-display` attribute. |
| `MESSAGE_ACTIONS` | `"copy,retry"` | Which per-message actions the sidebar offers, from `copy` / `retry` / `feedback`. Rendered as `data-message-actions`. Matches the component's own default from 0.31.0. The rating buttons fire an `ag-ui-feedback` event and store nothing by design, and nothing here listens for it. **Set `"copy,retry,feedback"` once you have wired your own listener on the sidebar element** — that is what this setting is for. |
| `THEME` | _unset_ | Web Component theme: `"light"`, `"dark"`, `"auto"`, or `"code"`. Rendered as the `theme` attribute; left off (component default, light) when unset. |
| `DENSITY` | _unset_ | Layout density: `"comfortable"` or `"compact"`. Rendered as the `density` attribute; left off when unset. |
| `PLACEMENT` | _unset_ | Where the panel sits: `"bottom-left"`, `"side"`, `"sidebar"`, `"full"`, or `"embedded"`. Rendered as the `placement` attribute; left off for the default floating bottom-right. `"sidebar"` is a full-height docked panel that collapses to an icon rail (pair it with `SIDE`). |
| `TEXT_ANIMATION` | _unset_ | Incoming-text animation: `"none"`, `"fade"`, or `"word"`. Rendered as the `data-text-animation` attribute; left off (default `none`) when unset. |
| `SIDE` | _unset_ | For `PLACEMENT="sidebar"`: which edge it docks to — `"left"` or `"right"`. Rendered as the `data-side` attribute; left off (component default, right) when unset. |
| `THEME_TOGGLE` | `False` | Show the Web Component's built-in light⇄dark header toggle (it flips `theme` and persists per tab). Rendered as the `data-theme-toggle` attribute. Off by default, since the admin's own theme usually governs. |
| `ICON_URL` | _unset_ | URL of a header/launcher icon image. Rendered as the `data-icon-url` attribute; left off (icon-less) when unset. |
| `STRINGS` | _unset_ | Localized UI-string overrides for the Web Component (a partial dict merged over its English defaults). Rendered as the `data-strings` attribute (serialized JSON). Wrap values in `gettext_lazy` so the sidebar follows the admin's active language; left off when unset. |
| `SKILLS` | _unset_ | Override for the slash-command / chip catalog (a list of `Skill` dicts). Leave unset to use the built-in admin catalog. See [Skills](#skills). |
| `SHELL_FIELD_REDACTION` | `True` | Mask sensitive-*named* fields in `shell.*` output, and refuse to filter or order on them. `True` uses the built-in denylist; `False` disables both halves; a regex `str` replaces the pattern. See [Sensitive-field redaction](#sensitive-field-redaction). |
| `MODEL_SCOPE` | _unset_ | Narrow which models the tools may touch, below what the admin already allows. A list of `"app_label"` / `"app_label.ModelName"` entries. Unset means the admin registry is the scope. See [Access control](#access-control). |

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

    It removes the card from the two fallback tools as well —
    `ui_generic.fill_dom_element` and `ui_generic.click_dom_element` — and those
    two reach anything a CSS selector matches, rather than the opaque handles
    their `ui_write.*` siblings hand out. An agent steered by injected row
    content can use one to press "Yes, I'm sure" on Django's own delete
    interstitial, which is the step the confirmation card otherwise stands in
    front of.

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

There are **two gates**, and they answer different questions. The endpoint gate
decides who may talk to the agent at all. The permission gate decides what the
agent may then read on their behalf. Neither one substitutes for the other.

### The endpoint gate: who may drive the sidebar

Every mounted route (the agent endpoint, the tool catalog, and — when
configured — the thread index, uploads, and transcription) requires an
authenticated, active **staff** user, and the agent endpoint is CSRF-protected.

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
    path(
        "admin-agent/", AdminAgentServer(authorize=lambda r: r.user.is_superuser).urls
    ),  # superusers only
    # path("admin-agent/", AdminAgentServer(require_authenticated=False, authorize=None).urls),  # fully open (not advised)
]
```

The default `authorize` gate is [`staff_required`](reference.md), importable from
`django_admin_agent` if you want to compose it. Without it an unauthenticated
visitor could drive the agent and stream model rows back over SSE.

!!! note "`is_staff` is a door, not a permission"
    Django documents `is_staff` as "designates whether the user can log into
    this admin site" — it conveys no rights over any model. A site that hands
    `is_staff` to thirty support agents and then scopes each of them with
    per-model permissions has, at this gate, thirty users who all pass. What
    separates them is the second gate.

### The permission gate: what the agent may read

Every tool that reads a model asks the acting user's **own admin** and takes its
answer. For `shell.query_model`, `shell.get_model_instance`, `shell.count_model`,
`shell.inspect_model_schema`, `introspect.inspect_modeladmin`,
`introspect.list_models` and `introspect.list_admin_models`, a model is readable
only when all three hold:

1. it is **registered with the admin site** — a model no `ModelAdmin` covers is
   one no staff user can open in the admin, so the agent does not open it
   either (`django.contrib.sessions.Session` and most third-party tables land
   here);
2. `MODEL_SCOPE` admits it, if you set one;
3. the registered `ModelAdmin` grants this user **view permission** —
   `has_view_permission(request)`, which is Django's `view_` / `change_`
   `has_perm` check plus whatever your `ModelAdmin` overrode.

Rows then come from that **`ModelAdmin.get_queryset(request)`**, not the model's
default manager. Per-tenant, per-owner and per-region scoping is written as a
`get_queryset` override, so reading through it is what keeps the agent's answers
and the changelist's rows the same set.

The net effect is the rule to hold in your head:

> **The agent is exactly as capable as the staff user it is acting for.** Not
> more, not less.

Establishing *who* that is happens on the endpoint's per-run hook: the mounted
`AdminAgentServer` binds the acting request for the run before the agent starts.
Passing your own `deps_factory` cannot switch that off — yours still decides
what the deps are, and the binding happens either way. If you drive the tools
from somewhere other than the endpoint (a management command, a bespoke agent
loop, a test), bind it yourself, because a tool with no acting request refuses
rather than guessing:

```python
from django_admin_agent import bind_acting_request
from django_admin_agent.tools.shell.query_model import query_model

with bind_acting_request(request):
    rows = query_model("shop", "Order", limit=10)
```

### `MODEL_SCOPE`

The admin registry is the default scope, which suits a site whose admin *is* the
surface you want the sidebar to have. When the admin is broader than that,
`MODEL_SCOPE` narrows it — and only narrows it; it can never grant a user a
model their permissions deny:

```python title="settings.py"
DJANGO_ADMIN_AGENT = {
    # Everything in the shop app, plus auth.User, and nothing else.
    "MODEL_SCOPE": ["shop", "auth.User"],
}
```

### Sensitive-field redaction

Redaction is **data minimisation, not access control**. What a user may read at
all is settled by the permission gate above; this then keeps values they *are*
entitled to see from being shipped to a third-party model for no good reason —
an `auth.User` password hash is readable by anyone with change permission on
users, and the sidebar still should not stream it.

With `SHELL_FIELD_REDACTION` on (the default), any field whose **name** matches
the built-in denylist is masked in `shell.*` output, and a `filter`, `exclude`
or `order_by` that reads such a field is **refused**. The refusal is the other
half of the same protection: masking a value only closes the direct route, while
`filter={"password__startswith": "pbkdf2_sha256$1"}` reads it back through the
row count instead, roughly six calls per character with `__gt` / `__lt`.

Set it to `False` to turn off both halves, or to a regex `str` to use your own
pattern.

!!! warning "A name denylist is a heuristic, and it is incomplete by design"
    It matches field *names*, so it cannot see what it is not named after: a
    secret in a column called `pw`, a token inside a JSON field called
    `profile`, or a field declared `name="pw"` over `db_column="password"`. Nor
    can it read a value to decide.

    Treat it as a courtesy, not a boundary. For anything that must never leave
    the database, the control is **reach**: leave the model out of the admin, or
    out of `MODEL_SCOPE`, so the sidebar cannot query it at all.

### Prompt injection is part of the threat model

The agent reads rows, and rows are written by people — a ticket body, a product
review, a username. Text in a row that the agent reads can try to steer it, so
treat every tool the agent can call as callable by whoever wrote the data it
just read. Three things follow:

- The confirmation card on destructive frontend tools is the human checkpoint;
  `AUTO_CONFIRM = True` removes it (see the warning above).
- `nav.navigate_to` will only open **http(s) pages on the admin's own origin**.
  A `javascript:` URL handed to `location.assign` runs in the admin's origin
  under the staff session, and an off-origin URL carries whatever the agent put
  in its query string somewhere else; both are refused.
- The permission gate bounds the blast radius: injected instructions cannot read
  a model the acting user could not have read themselves.

!!! note "Where a refusal's reason goes — it depends which refusal"
    **A permission refusal ends the run.** From django-pydantic-agent 0.18 a
    `PermissionDenied` is re-raised rather than converted into a tool failure.
    Converting it was the problem: a denied call came back to the model as a
    generic failure that spends no retry budget and does not end the run, which
    a model can sweep ids with to learn which rows exist.

    So it never travels the `TOOL_FAILURE` path. It travels `RUN_ERROR`, which
    django-ag-ui 0.49 redacts under the **same** `INCLUDE_DETAIL` setting — so
    the answer is unchanged even though the route is not: with detail off the
    user is told the run failed and the reason stays in your log and audit
    trail. What differs from before is that the run **ends** rather than the
    agent carrying on around a failed tool.

    !!! danger "Both floors have to move together"
        On django-ag-ui **0.48** nothing redacted the `RUN_ERROR` path, so with
        django-pydantic-agent 0.18 the gate's message reached the browser
        verbatim with `INCLUDE_DETAIL` off. This package floors at
        `django-ag-ui>=0.53` for exactly that reason. A project pinning the
        transport lower while taking the newer substrate re-opens it.

    **Every other refusal still reaches the model as a failure**, and by default
    the *reason* is not part of it — `TOOL_FAILURE.INCLUDE_DETAIL` is `False`,
    on the grounds that an exception message is written for an operator. A
    redacted-field lookup is the one you are most likely to meet: it raises
    `ValueError`, so the full explanation goes to your log and audit trail and
    the user sees only that the tool failed. If you would rather the agent could
    say *"that filter reads a redacted field"*, turn it on:

    ```python title="settings.py"
    DJANGO_AG_UI = {"TOOL_FAILURE": {"INCLUDE_DETAIL": True}}
    ```

## Inherited `DJANGO_AG_UI`

The agent model, persistence, and toolset composition are configured on
`django-ag-ui`'s settings dict. The sidebar inherits all of it. The keys most
relevant to the admin sidebar:

| Key | Default | Purpose |
| --- | --- | --- |
| `MODEL` | _unset_ | Pydantic-AI model string, e.g. `"anthropic:claude-sonnet-4.6"`. Can instead be passed per-mount as `AdminAgentServer(model=...)`. |
| `AUTO_CONFIRM` | `False` | The `django-ag-ui`-level destructive-confirmation flag surfaced to the frontend. |
| `ATTACHMENT_MAX_BYTES` / `ATTACHMENT_ALLOWED_TYPES` | 10 MiB / any | Server-side upload size cap and content-type allowlist (enforced by `AttachmentsView`). |
| `MODEL_SETTINGS`, `RETRIES` | — | Advanced Pydantic-AI configuration; see the `django-ag-ui` docs. |

```python title="settings.py"
DJANGO_AG_UI = {
    "MODEL": "anthropic:claude-sonnet-4.6",
}
```

!!! warning "Collaborators are constructor arguments, not settings"
    Stores, backends, loggers, toolsets and the MCP server are **passed to
    `AdminAgentServer(...)` in `urls.py`** — a settings dict can't hold a live
    object, and `urls.py` can. django-ag-ui 0.19 removed the dotted-path keys
    that used to name them, and **raises `ImproperlyConfigured` if one is still
    present** rather than silently ignoring it: `CONVERSATION_STORE`,
    `ATTACHMENT_STORE`, `TRANSCRIPTION_BACKEND`, `AUDIT_LOGGER`,
    `DRF_MCP_SERVER`, `SERVICE_SPECS`, `AGENT_FACTORY`, `TOOLSETS`,
    `CAPABILITIES`, `PROVIDER`. If an older guide had you set any of these,
    move them to the constructor:

    ```python title="urls.py"
    AdminAgentServer(conversation_store=DjangoSessionConversationStore())
    ```

### Conversation persistence and the reload model

Because the Django admin reloads the whole page on every save, filter, and
navigation, the agent's run loop must survive reloads. The Web Component's
client-side store (per-tab `sessionStorage`) keeps the conversation continuous
out of the box. Passing a `conversation_store` adds **server-side** persistence on
top — keyed by AG-UI `thread_id`, owner-scoped per user — so a conversation
durably survives across tabs and devices, and the resume checkpoint becomes
derivable from the stored history.

The client store is scoped to the signed-in principal from 0.30.0. `sessionStorage`
is scoped to the *tab*, not to the session, so it survives the navigation a logout
is — and on a shared admin workstation that meant the next person to sign in
landed on the previous one's transcript. The sidebar now renders the acting
user's primary key as `user-key`, and the component purges the transcript, the
history-drawer index and any navigation checkpoint whenever that value changes.
Nothing to configure, and nothing changes for a single-user deployment.

For admin deployments — where [`AdminAgentServer`](#access-control) requires an
authenticated staff user, so sessions always exist —
`DjangoSessionConversationStore` is the natural choice (no migration, per-user
durability). Passing no store keeps the server stateless; the client store still
provides single-tab continuity.

```python title="urls.py"
from django_pydantic_agent import DjangoSessionConversationStore

AdminAgentServer(conversation_store=DjangoSessionConversationStore())
```

For **durable, cross-device** history, opt into the reference store instead: add
`"django_pydantic_agent.contrib.store"` to `INSTALLED_APPS`, run `migrate`, and
pass `DefaultConversationStore`.

### The chat-history drawer

When a conversation store is configured, `AdminAgentServer` mounts an
owner-scoped **thread index** at `<prefix>threads/` (list) and
`<prefix>threads/<id>/` (load / rename / delete), and the sidebar passes its URL
to the Web Component as `data-threads-url` — the data behind a chat-history drawer
of the admin user's past conversations. The index uses whatever
the store passed to `AdminAgentServer(conversation_store=...)`. **Without a store the
sub-view isn't mounted** and the drawer falls back to the client's per-tab
`sessionStorage` threads; configure a durable store to list server-backed threads.

### Continuing a run

When a **step store** is configured, `AdminAgentServer` also mounts an
owner-scoped run index at `<prefix>runs/` beside `resume/<run_id>/` and
`fork/<run_id>/`, and the sidebar passes its URL to the Web Component as
`data-runs-url` — so the sidebar header gains a ⭯ *Continue a run* panel.

A run that stopped part-way (a crash, a closed tab) can then be picked up from
its last server-side checkpoint rather than restarted: type the next turn, then
**Resume** to carry on or **Fork** to branch without touching the original. Only
runs the server marks continuable are offered — one that never reached a
provider-valid boundary has no snapshot to seed from.

```python title="urls.py"
from django_pydantic_agent.contrib.store.default_step_store import DefaultStepStore

AdminAgentServer(step_store=DefaultStepStore)
```

`DefaultStepStore`'s constructor *is* the `request -> StepStore` factory the
capability needs, so pass the class itself. Requires django-ag-ui's `[harness]`
extra. **Without a step store the sub-views aren't mounted** and no panel
appears.

### File uploads

When an attachment store is configured, `AdminAgentServer` mounts an owner-scoped
**upload endpoint** at `<prefix>attachments/` (`POST` upload) and
`<prefix>attachments/<id>/` (`GET` download, `DELETE`), and the sidebar passes its
URL to the Web Component as `data-attachments-url` — so the composer gains a
picker + drag-and-drop. Files upload out-of-band and travel as lightweight refs;
the agent reads their contents server-side via the built-in `read_attachment` tool
(the AG-UI message stream stays free of file bytes).

Uploads are **off by default** — with no attachment store the sub-view isn't
mounted (no affordance). Turn them on by passing one. For **durable,
per-admin-user** files, opt into the reference store: add
`"django_pydantic_agent.contrib.store"` to `INSTALLED_APPS`, run `migrate`, then

```python title="urls.py"
from django_pydantic_agent.contrib.store.default_attachment_store import (
    DefaultAttachmentStore,
)

AdminAgentServer(attachment_store=DefaultAttachmentStore())
```

```python title="settings.py"
DJANGO_AG_UI = {
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
composer gains a mic button (record, then drop the transcript into the input).
Voice is **off by default** — with no `TRANSCRIPTION_BACKEND` the sub-view isn't
mounted (no mic affordance); enable it by pointing
`DJANGO_AG_UI["TRANSCRIPTION_BACKEND"]` at a backend — django-ag-ui ships an opt-in
`OpenAITranscriptionBackend` over any OpenAI-compatible endpoint (the `[openai]`
extra):

```python title="settings.py"
DJANGO_AG_UI = {
    "TRANSCRIPTION_BACKEND": (
        "django_ag_ui.contrib.transcription.openai_transcription_backend.OpenAITranscriptionBackend"
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
