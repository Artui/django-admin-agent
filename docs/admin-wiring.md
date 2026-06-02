# Admin wiring

This page covers how the sidebar is built and attached to the admin: the
context the template needs, the route map and page map the agent uses to
navigate, and the two attachment paths.

## The sidebar context

`build_sidebar_context()` assembles everything the sidebar template renders:

| Key | Source | Used for |
| --- | --- | --- |
| `endpoint` | `reverse(ENDPOINT_URL_NAME)` | The AG-UI endpoint the chat POSTs to. |
| `title` | `DJANGO_ADMIN_AGENT["TITLE"]` | The chat panel header. |
| `auto_confirm` | `DJANGO_ADMIN_AGENT["AUTO_CONFIRM"]` | Surfaced to the component as `autoConfirm`. |
| `tool_display` | `DJANGO_ADMIN_AGENT["TOOL_DISPLAY"]` | The `data-tool-display` attribute (`minimal` / `compact` / `full`). |
| `theme`, `density`, `placement`, `text_animation` | the matching `DJANGO_ADMIN_AGENT` keys | Themeable presentation attributes (`theme` / `density` / `placement` / `data-text-animation`), rendered only when set. See [Configuration → Presentation](configuration.md#presentation). |
| `skills` | `DJANGO_ADMIN_AGENT["SKILLS"]` or `build_skills()` | The skill catalog (chips + `/`-command palette), embedded as a `json_script`. See [Configuration → Skills](configuration.md#skills). |
| `bootstrap_url` | `static("django_admin_agent/admin_agent.js")` | The ES-module entry point. |
| `admin_base_url` | `reverse("admin:index")` (or `/`) | Lets the frontend `nav.*` tools build changelist / changeform URLs without reversing named routes in the browser. |
| `route_map` | `build_route_map()` | The navigable-route manifest (see below). |

The same helper backs both attachment paths, so the rendered sidebar is
identical whichever you choose.

## The sidebar template

`templates/django_admin_agent/sidebar.html` renders the `<ag-ui-chat>` custom
element with the endpoint, title, auto-confirm, tool-display, and admin-base
data attributes (plus `data-slash-commands="true"`, and the optional `theme` /
`density` / `placement` / `data-text-animation` attributes when their settings
are set); embeds the route map and the skill catalog as two `json_script`
blocks; and loads the bootstrap module. The bootstrap
(`static/django_admin_agent/admin_agent.js`) then:

1. Defines the `<ag-ui-chat>` custom element from the vendored bundle.
2. Attaches the CSRF token as an `X-CSRFToken` header so the endpoint accepts
   POSTs under the logged-in admin session.
3. Reads the auto-confirm flag and the route map off the element / page.
4. Reads the embedded skill catalog and calls `el.setSkills(...)`, and sets
   `el.skillContext` to a provider that derives `{path}` / `{selected_ids}`
   placeholder values from the current page.
5. Calls `registerAdminTools(el)` to register the
   [frontend tools](tools.md#frontend-tools).

The themeable attributes (`theme` / `density` / `placement` /
`data-text-animation`) and `data-tool-display` are read by the Web Component
itself; this template is the seam where the `DJANGO_ADMIN_AGENT` settings become
element attributes.

## The route map

`build_route_map()` walks `admin.site._registry` and emits, per registered
model, a changelist route, an add route (when available), and a **dynamic
change route**, each shaped for the Web Component's `routeMap`:

```json
{ "id": "app.model.changelist", "path": "/admin/app/model/",
  "title": "Models", "group": "app" }
```

The change route's `path` is a **`:pk` template**, e.g.
`/admin/app/model/:pk/change/` — `build_route_map` reverses the change URL with
a sentinel pk and swaps it for the `:pk` placeholder. When the agent calls
`navigate_to_route`, the Web Component substitutes the `:pk` segment from the
call's `params`, so the agent can edit a specific record by intent.

The agent calls the component's `list_routes` to discover destinations and
`navigate_to_route` to jump to one, instead of guessing admin URL shapes. URLs
are reverse-resolved (`admin:<app>_<model>_changelist` / `_add` / `_change`), so
models without a resolvable route are simply skipped.

## The page map

`registerAdminTools` also wires `el.getPageMap` — a per-run provider that
returns a **compact** snapshot of the current page (field names/types/labels and
button labels/handles, *no values*). The Web Component auto-injects it into each
run's context, so the agent knows the page's surface without first calling
`get_form_state` / `get_visible_buttons`. Exact live values are still fetched on
demand via the `ui_read.*` tools.

## Attaching the sidebar

### Template tag

```python
@register.inclusion_tag("django_admin_agent/sidebar.html")
def django_admin_agent_sidebar() -> dict[str, Any]: ...
```

`{% load django_admin_agent %}` then `{% django_admin_agent_sidebar %}` in your
`admin/base_site.html` renders the sidebar. It is self-contained — it computes
its own context via `build_sidebar_context()`, so the admin site does not need
swapping. This is the common path.

### `SidebarAdminSite`

`SidebarAdminSite` is a drop-in `AdminSite` whose `each_context` adds the
sidebar context under the `django_admin_agent` key, so a base template can
render the chat from `{{ django_admin_agent }}` without the tag. It calls
`super().each_context()` first, so all standard admin context keys pass through
unchanged. Use this when you already swap the admin site; otherwise prefer the
template tag.

## Unfold compatibility shim

The frontend tool handlers work against Django Unfold unchanged because Unfold
preserves Django's structural DOM contracts. Two Unfold-only quirks are smoothed
by `static/django_admin_agent/unfold_shim.js`, which no-ops on vanilla admin —
see [Unfold & vanilla support](unfold.md). There is **no** Python Unfold
dependency: Unfold is detected at runtime in the browser, never imported at
module load.
