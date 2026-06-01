# Installation & setup

## Install

```bash
pip install django-admin-agent
```

This pulls in `django-ag-ui` and ships the vendored `<ag-ui-chat>` Web
Component bundle as static files — there is no separate npm install for the
admin sidebar.

To also expose the server-side admin tools as an MCP server over HTTP (via the
`djangorestframework-mcp-server` stack), install the extra:

```bash
pip install django-admin-agent[mcp]
```

!!! info "Compatibility floor"
    Python 3.10+ (tested 3.10–3.14), Django 4.2 LTS+ (tested 4.2, 5.0, 5.1,
    5.2, 6.0), `django-ag-ui>=0.1`, and — optionally — Django Unfold 0.40+.

## 1. Add to `INSTALLED_APPS`

```python
INSTALLED_APPS = [
    # ...
    "django.contrib.admin",
    "django_admin_agent",
]
```

This makes the vendored static bundle, the `django_admin_agent` template-tag
library, and the sidebar template discoverable.

## 2. Mount the agent endpoint

`django_admin_agent.get_urls()` returns URL patterns that mount a
[`DjangoAGUIView`](https://github.com/Artui/django-ag-ui) over the default
server-side admin tool registry. The endpoint is named
`django_admin_agent_endpoint` — the name the sidebar reverses to find it.

```python title="urls.py"
from django.contrib import admin
from django.urls import path

from django_admin_agent import get_urls

urlpatterns = [
    path("admin/", admin.site.urls),
    *get_urls(model="anthropic:claude-sonnet-4.6"),
]
```

`get_urls()` accepts:

- `prefix` (default `"admin-agent/"`) — the URL prefix; the endpoint is mounted
  at `<prefix>agent/`.
- `registry` — a custom `django_ag_ui.ToolRegistry`. Omit it to use
  [`build_default_registry()`](reference.md) (the full `shell.*` + `introspect.*`
  tool set).
- Any extra keyword arguments (`model`, `instructions`, `audit_logger`,
  `csrf_exempt`, …) pass straight through to the underlying `DjangoAGUIView`.

!!! tip "Where the model is configured"
    The agent model can be supplied per-mount as a `get_urls(model=...)` keyword
    *or* globally via `DJANGO_AG_UI["MODEL"]`. See
    [Configuration](configuration.md).

## 3. Inject the sidebar

The sidebar is rendered into the admin chrome. There are two ways to do it;
the template tag is the more common path and needs no admin-site swap.

### Option A — the template tag (recommended)

Override `admin/base_site.html` in a template directory that wins over the admin
app's copy, and drop the inclusion tag into the branding block:

```django title="templates/admin/base_site.html"
{% extends "admin/base.html" %}
{% load django_admin_agent %}

{% block branding %}
  <h1 id="site-name"><a href="{% url 'admin:index' %}">My admin</a></h1>
  {% django_admin_agent_sidebar %}
{% endblock %}
```

The tag is self-contained: it computes its own context (endpoint URL, title,
auto-confirm flag, bootstrap module URL, admin base URL, and route map), so the
admin site does not need swapping.

### Option B — `SidebarAdminSite`

If you prefer to swap the admin site, subclass (or instantiate)
`SidebarAdminSite`. It adds the sidebar context to `each_context` under the
`django_admin_agent` key, so a base template can render the chat from that
context without the template tag.

```python
from django_admin_agent.admin.sidebar_admin_site import SidebarAdminSite

admin_site = SidebarAdminSite(name="myadmin")
```

Both paths render the same sidebar from the same
[`build_sidebar_context()`](admin-wiring.md) helper.

## 4. Serve over ASGI

**ASGI is required.** The agent endpoint streams AG-UI events over
Server-Sent Events, which needs an event loop the synchronous WSGI worker will
not provide. Deploy the admin under an ASGI server such as
[Daphne](https://github.com/django/daphne) or
[Uvicorn](https://www.uvicorn.org/):

```bash
uvicorn myproject.asgi:application
```

## The vendored web-component bundle

`django_admin_agent/static/django_admin_agent/ag-ui-web-component.bundle.js` is
a **build artefact** — esbuild's minified output from
`@artooi/ag-ui-web-component`, with `@ag-ui/*` inlined. It is *not* hand-written
and should not be edited.

The bundle version is pinned in the `Makefile` (`WEB_COMPONENT_VERSION`); a
release re-vendors exactly that pinned published version, so a released wheel
always ships a known, fixed bundle. The committed copy is a convenience so
`git clone` + `runserver` works out of the box; the bootstrap module
(`admin_agent.js`) imports it by relative path and registers the
`<ag-ui-chat>` custom element.

With `INSTALLED_APPS` set and `collectstatic` (or the static-files app in
development) serving `django_admin_agent/`, no further static wiring is needed.
