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
| `ENDPOINT_URL_NAME` | `"django_admin_agent_endpoint"` | URL name the sidebar reverses to find the AG-UI endpoint. Override only if you mount the endpoint under a different name. |
| `TOOL_DISPLAY` | `"compact"` | How much detail tool-call cards show: `"minimal"`, `"compact"`, or `"full"`. Rendered as the `data-tool-display` attribute. |
| `THEME` | _unset_ | Web Component theme: `"light"`, `"dark"`, `"auto"`, or `"code"`. Rendered as the `theme` attribute; left off (component default, light) when unset. |
| `DENSITY` | _unset_ | Layout density: `"comfortable"` or `"compact"`. Rendered as the `density` attribute; left off when unset. |
| `PLACEMENT` | _unset_ | Where the panel sits: `"bottom-left"`, `"side"`, `"full"`, or `"embedded"`. Rendered as the `placement` attribute; left off for the default floating bottom-right. |
| `TEXT_ANIMATION` | _unset_ | Incoming-text animation: `"none"`, `"fade"`, or `"word"`. Rendered as the `data-text-animation` attribute; left off (default `none`) when unset. |
| `SKILLS` | _unset_ | Override for the slash-command / chip catalog (a list of `Skill` dicts). Leave unset to use the built-in admin catalog. See [Skills](#skills). |

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
| `PLACEMENT` | `placement` | `bottom-left` · `side` · `full` · `embedded` | _floating bottom-right_ |
| `TEXT_ANIMATION` | `data-text-animation` | `none` · `fade` · `word` | `none` |

`TOOL_DISPLAY` always renders (it defaults to `"compact"`); the other four are
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

## Inherited `DJANGO_AG_UI`

The agent model, persistence, and toolset composition are configured on
`django-ag-ui`'s settings dict. The sidebar inherits all of it. The keys most
relevant to the admin sidebar:

| Key | Default | Purpose |
| --- | --- | --- |
| `MODEL` | _unset_ | Pydantic-AI model string, e.g. `"anthropic:claude-sonnet-4.6"`. Can instead be passed per-mount as `get_urls(model=...)`. |
| `AUTO_CONFIRM` | `False` | The `django-ag-ui`-level destructive-confirmation flag surfaced to the frontend. |
| `CONVERSATION_STORE` | `None` (stateless) | Dotted path to a `ConversationStore` for server-side conversation persistence. See below. |
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

For admin deployments, where users are always authenticated and sessions exist,
`DjangoSessionConversationStore` is the natural choice (no migration, per-user
durability). Leaving `CONVERSATION_STORE` unset keeps the server stateless; the
client store still provides single-tab continuity.

### `DRF_MCP_SERVER` and the `[mcp]` extra

Installing `django-admin-agent[mcp]` and pointing `DRF_MCP_SERVER` at a
`djangorestframework-mcp-server` `MCPServer` instance exposes that server's
tools to the agent in-process — no network MCP hop — alongside the built-in
`shell.*` / `introspect.*` tools. The bridge is imported lazily by
`django-ag-ui`; the dependency is never loaded unless the setting is configured.
