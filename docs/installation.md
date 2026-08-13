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
    5.2, 6.0, 6.1), `django-ag-ui>=0.39`, and — with the `[mcp]` extra above —
    `djangorestframework-mcp-server>=0.30`. Django Unfold 0.40+ is optional.

    Neither sibling window has an upper bound, so this package installs
    alongside the current `django-ag-ui` on the day that ships rather than
    waiting for a release here. The floors are what is tested; nothing above
    them is excluded.

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

## 2. Mount the agent server

[`AdminAgentServer`](reference.md) is a
[`django_ag_ui.AGUIServer`](https://github.com/Artui/django-ag-ui) pre-configured
for the admin (the default admin tool registry + a fail-closed staff gate). Mount
its namespaced `.urls` the `admin.site.urls` way. The endpoints live under the
`admin_agent` namespace — the sidebar reverses `admin_agent:endpoint` to find the
agent endpoint.

```python title="urls.py"
from django.contrib import admin
from django.urls import path

from django_admin_agent import AdminAgentServer

urlpatterns = [
    path("admin/", admin.site.urls),
    path("admin-agent/", AdminAgentServer(model="anthropic:claude-sonnet-4.6").urls),
]
```

`AdminAgentServer(...)` accepts:

- `registry` (first positional) — a custom `django_ag_ui.ToolRegistry`. Omit it to
  use [`build_default_registry()`](reference.md) (the full `shell.*` +
  `introspect.*` tool set).
- `namespace` (default `"admin_agent"`) — the URL namespace `.urls` mounts under.
  Pass the same value to the template tag so the sidebar reverses against *this*
  server: `{% django_admin_agent_sidebar namespace="internal-agent" %}`.
- Any extra keyword arguments (`model`, `instructions`, `audit_logger`,
  `conversation_store`, `attachment_store`, `transcription_backend`, …) pass
  straight through to the underlying `AGUIServer`.

!!! tip "Where the model is configured"
    The agent model can be supplied per-mount as `AdminAgentServer(model=...)`
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
auto-confirm flag, presentation settings, skill catalog, bootstrap module URL,
admin base URL, and route map), so the admin site does not need swapping. See
[Configuration](configuration.md) for the theming, tool-display, and skills
settings.

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

### In development, ASGI is not enough on its own

`runserver` serves your static files and **cannot stream** — the SSE response
buffers, so the sidebar sits there waiting. A bare `uvicorn` streams and **serves
no static files at all**. The sidebar's bootstrap module *is* a static file, so
following only the paragraph above gives you `GET
/static/django_admin_agent/admin_agent.js → 404`, an unstyled admin, and **no
agent** — with nothing on screen to say why.

Pick one of these for local work:

**Add the static-files URLs under `DEBUG`.** No new dependency, and it is what
this project's own example uses:

```python
# urls.py
from django.contrib.staticfiles.urls import staticfiles_urlpatterns

if settings.DEBUG:
    urlpatterns += staticfiles_urlpatterns()
```

**Or use [WhiteNoise](https://whitenoise.readthedocs.io/),** which serves them
under any server and is closest to how production will behave.

**Or put `daphne` first in `INSTALLED_APPS`,** which replaces `runserver` with an
ASGI one that also serves static files:

```python
INSTALLED_APPS = ["daphne", ..., "django_admin_agent"]
```

In production, `collectstatic` behind your web server (or WhiteNoise) covers it,
which is why this only bites in development — the environment where the first
person to install this package meets it.

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

With `INSTALLED_APPS` set and `collectstatic` serving `django_admin_agent/`,
production needs no further static wiring. **Development does** — see
[In development, ASGI is not enough on its own](#in-development-asgi-is-not-enough-on-its-own),
because the server that streams and the server that serves static files are not
the same one.
