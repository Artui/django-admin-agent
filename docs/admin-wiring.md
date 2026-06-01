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
| `bootstrap_url` | `static("django_admin_agent/admin_agent.js")` | The ES-module entry point. |
| `admin_base_url` | `reverse("admin:index")` (or `/`) | Lets the frontend `nav.*` tools build changelist / changeform URLs without reversing named routes in the browser. |
| `route_map` | `build_route_map()` | The navigable-route manifest (see below). |

The same helper backs both attachment paths, so the rendered sidebar is
identical whichever you choose.

## The sidebar template

`templates/django_admin_agent/sidebar.html` renders the `<ag-ui-chat>` custom
element with the endpoint, title, auto-confirm, and admin-base data attributes;
embeds the route map as a `json_script`; and loads the bootstrap module. The
bootstrap (`static/django_admin_agent/admin_agent.js`) then:

1. Defines the `<ag-ui-chat>` custom element from the vendored bundle.
2. Attaches the CSRF token as an `X-CSRFToken` header so the endpoint accepts
   POSTs under the logged-in admin session.
3. Reads the auto-confirm flag and the route map off the element / page.
4. Calls `registerAdminTools(el)` to register the
   [frontend tools](tools.md#frontend-tools).

## The route map

`build_route_map()` walks `admin.site._registry` and emits one changelist route
(and one add route, when available) per registered model, shaped for the Web
Component's `routeMap`:

```json
{ "id": "app.model.changelist", "path": "/admin/app/model/",
  "title": "Models", "group": "app" }
```

The agent calls the component's `list_routes` to discover destinations and
`navigate_to_route` to jump to one, instead of guessing admin URL shapes. URLs
are reverse-resolved (`admin:<app>_<model>_changelist` / `_add`), so models
without a resolvable route are simply skipped.

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
