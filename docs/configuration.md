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

```python title="settings.py"
DJANGO_ADMIN_AGENT = {
    "TITLE": "Acme Copilot",
    "AUTO_CONFIRM": False,
}
```

!!! warning "AUTO_CONFIRM is the autopilot toggle"
    With `AUTO_CONFIRM = True`, the agent can fill and submit forms, run bulk
    actions, and apply filters without pausing for a confirmation click. Leave
    it `False` (the default) unless you trust the agent to act unattended.

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
