# Tool surface

The agent reaches its goals through two families of tools:

- **Server-side tools** run in-process inside the `DjangoAGUIView`. They are
  read-only and registered on the `ToolRegistry` that `get_urls()` mounts. This
  package contributes the `shell.*` (ORM) and `introspect.*` (Django/admin
  introspection) categories.
- **Frontend tools** are declared by the `<ag-ui-chat>` Web Component on every
  run, so the catalog reflects what's actually on the current page. This
  package registers the admin-aware handlers — `ui_read.*`, `ui_write.*`,
  `ui_generic.*`, and `nav.*` — in
  `static/django_admin_agent/admin_tools.js`. They execute in the browser and
  drive the DOM.

## Server-side tools

### `shell.*` — ORM queries (read-only)

Registered by `register_shell_tools()`. Every tool resolves the model by
`app_label` + `model` and returns JSON-safe dicts (dates, UUIDs, Decimals, lazy
translations flattened via `DjangoJSONEncoder`).

| Tool | Signature | Returns |
| --- | --- | --- |
| `query_model` | `(app_label, model, filter=None, exclude=None, order_by=None, select_related=None, prefetch_related=None, fields=None, limit=50, offset=0)` | List of row dicts. `limit` is hard-capped at 1000. |
| `get_model_instance` | `(app_label, model, pk, select_related=None, fields=None)` | One row dict, or `None` when not found. |
| `count_model` | `(app_label, model, filter=None, exclude=None)` | Row count. |
| `inspect_model_schema` | `(app_label, model)` | Field types, nullability, relations, indexes, `db_table`, Meta ordering. |

`filter` and `exclude` accept ORM lookup kwargs, e.g.
`{"email__icontains": "@foo"}`. When `fields` is omitted, every concrete field
is projected.

### `introspect.*` — Django & admin introspection (read-only)

Registered by `register_introspect_tools()`.

| Tool | Signature | Returns |
| --- | --- | --- |
| `list_installed_apps` | `()` | Configured apps: labels, names, module, path, model count. |
| `list_models` | `(app_label=None)` | Installed models with table + Meta flags. |
| `list_urls` | `(prefix=None)` | Every registered route (pattern, name, view), optionally filtered by pattern substring. |
| `list_signals` | `()` | Django's built-in signals and their connected receivers. |
| `get_settings_summary` | `()` | A **curated, redacted** subset of settings. |
| `list_admin_models` | `()` | Every model registered with `admin.site`, with `list_display` / `list_filter` / `search_fields` and reverse-resolved changelist + add URLs. |
| `inspect_modeladmin` | `(app_label, model)` | The registered `ModelAdmin`'s options. |

!!! note "Settings are redacted"
    `get_settings_summary` returns only an allowlist of safe keys. `SECRET_KEY`,
    API tokens, and database passwords are never included; `DATABASES` is
    surfaced with `PASSWORD` and raw `OPTIONS` redacted.

!!! note "Unfold-aware introspection"
    `inspect_modeladmin` and `list_admin_models` read every attribute
    defensively via `getattr`, so they transparently surface both standard
    Django options and additive ones that subclasses add (e.g. Unfold's `tabs`,
    `list_fullwidth`, `list_filter_submit`, `compressed_fields`) through a single
    code path.

These categories are bundled by `register_admin_tools(registry)`, and
`build_default_registry()` returns a fresh registry with both registered — the
default `get_urls()` uses it.

## Frontend tools

Declared per-run by the Web Component and executed in the browser against
Django admin's structural DOM contracts (`#id_<field>` inputs,
`_save`/`_continue`/`_addanother` submit names, `name="_selected_action"` row
checkboxes, a `name="action"` bulk-action `<select>` plus a `name="index"` Go
button, the `#changelist-filter` sidebar). All per-element state (the
button-handle map) is closure-local, so a page may safely mount more than one
sidebar.

### `ui_read.*` — page introspection (read-only)

| Tool | Reads |
| --- | --- |
| `get_form_state` | The change-form's fields with name, current value, type, and label. |
| `get_changelist_state` | Visible rows (pk + text), active filters, and selected rows. |
| `get_visible_buttons` | Actionable buttons/links, each tagged with an opaque handle for `click_button`. |
| `get_page_snapshot` | A generic structured snapshot (URL, title, whether a change form / changelist is present, headings). |

### `ui_write.*` — DOM driving (destructive, animated)

Each carries the `x-destructive` flag (see [confirmation](#destructive-confirmation)).

| Tool | Action |
| --- | --- |
| `fill_field` | Type a value into a change-form text field (animated). |
| `select_option` | Choose a `<select>` option by value or visible text. |
| `toggle_checkbox` | Set a checkbox checked/unchecked. |
| `click_button` | Click a button by the opaque handle from `get_visible_buttons`. |
| `submit_form` | Submit the change form (`save` / `save_and_continue` / `save_and_add_another`). **Navigates.** |
| `apply_filter` | Apply a changelist sidebar filter. **Navigates.** |
| `select_changelist_rows` | Tick row checkboxes for the given primary keys. |
| `run_admin_action` | Select a bulk action and click Go. **Navigates.** |

### `ui_generic.*` — fallback for custom widgets

| Tool | Action |
| --- | --- |
| `fill_dom_element` | Fill an element by CSS selector or visible label (destructive). |
| `click_dom_element` | Click an element by CSS selector or visible label (destructive). |
| `read_dom_element` | Read an element's text/value by selector or label (read-only). |

Prefer the typed `ui_write.*` tools; reach for `ui_generic.*` only when no typed
tool covers the element.

### `nav.*` — browser navigation

| Tool | Action |
| --- | --- |
| `open_changelist` | Navigate to a model's changelist, with optional filters. **Navigates.** |
| `open_changeform` | Open a model's add form (no `pk`) or edit form for a `pk`. **Navigates.** |
| `navigate_to` | Navigate to an arbitrary URL (fallback). **Navigates.** |

`nav.*` builds admin URLs from the `data-admin-base` attribute the server
injects, so the browser never has to reverse named routes.

## Destructive confirmation

AG-UI has no built-in risk flag, so destructive tools carry an `x-destructive`
JSON-Schema extension. The Web Component reads it client-side and shows a
confirmation modal **before** dispatching to the local handler. Accepting runs
the handler with its animation; rejecting posts a "user declined" tool result
so the agent acknowledges it on its next turn. Setting
[`AUTO_CONFIRM`](configuration.md) to `True` skips the modal — the autopilot
toggle.

## Navigating tools and the resumable loop

The Django admin is a multi-page application: a save, filter, or navigation is a
full page reload. An agent turn is a *client-side loop* whose message history
and pending tool calls live only in browser memory — so a naive reload mid-turn
would orphan the run.

Tools that trigger a reload carry an `x-navigates` flag (above, marked
**Navigates**). The Web Component handles them as first-class checkpoints:

1. The handler records the pending tool call, then triggers the reload (a real
   navigation, a filter link, or a form submit).
2. On the page it lands on, the resumer completes that tool's result using the
   **landed page as the payload** — the new URL and title, plus any Django
   validation errors rendered as `.errorlist` (e.g. after a failed save). This
   package supplies that payload via the element's `navigationResult` hook in
   `admin_tools.js`.
3. The loop continues from the appended result, so multi-step tasks that
   navigate complete cleanly across reloads.

The resumable-loop machinery itself lives in the Web Component; this package's
contribution is classifying which admin tools navigate and providing the
landed-page result shape.
