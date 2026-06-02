# django-admin-agent

[![CI](https://github.com/Artui/django-admin-agent/workflows/tests/badge.svg)](https://github.com/Artui/django-admin-agent/actions/workflows/tests.yml)
[![PyPI](https://img.shields.io/pypi/v/django-admin-agent.svg)](https://pypi.org/project/django-admin-agent/)
[![Python versions](https://img.shields.io/pypi/pyversions/django-admin-agent.svg)](https://pypi.org/project/django-admin-agent/)
[![Django versions](https://img.shields.io/pypi/djversions/django-admin-agent.svg)](https://pypi.org/project/django-admin-agent/)
[![Docs](https://img.shields.io/badge/docs-artui.github.io-blue.svg)](https://artui.github.io/django-admin-agent/)
[![Coverage](https://img.shields.io/endpoint?url=https://raw.githubusercontent.com/Artui/django-admin-agent/gh-pages/coverage.json)](https://github.com/Artui/django-admin-agent/actions/workflows/tests.yml)
[![Ruff](https://img.shields.io/endpoint?url=https://raw.githubusercontent.com/astral-sh/ruff/main/assets/badge/v2.json)](https://github.com/astral-sh/ruff)
[![License](https://img.shields.io/pypi/l/django-admin-agent.svg)](LICENSE)

An always-present chat-agent sidebar embedded in the Django admin. The agent
reads your data through typed, server-side tools and *drives the admin UI* —
filling forms, applying filters, navigating between pages — with visible
animations and a confirmation modal on anything destructive.

It builds on [`django-ag-ui`](https://github.com/Artui/django-ag-ui) (the
Django ↔ [Pydantic-AI](https://ai.pydantic.dev) ↔ [AG-UI](https://docs.ag-ui.com)
bridge) and ships the [`@artooi/ag-ui-web-component`](https://github.com/Artui/ag-ui-web-component)
`<ag-ui-chat>` element vendored as a static bundle — there's no separate npm
install. Works with the vanilla Django admin and with
[Django Unfold](https://github.com/unfoldadmin/django-unfold).

- **Server-side admin tools** — a default registry of read-only `shell.*`
  (query / count / fetch instances) and `introspect.*` (model schema, admin
  registration) tools, derived from your installed models. Every call is typed
  and audited through `django-ag-ui`'s `AuditLogger`.
- **Frontend tool handlers** — `nav.*` and DOM-driving tools (fill a field,
  click, apply a changelist filter) execute in the browser against the live
  admin page, with animations so the user sees what the agent is doing.
- **Destructive-action gating** — tools flagged `x-destructive` in their JSON
  Schema are intercepted by a confirmation modal before they run.
- **Drop-in sidebar** — a `{% django_admin_agent_sidebar %}` template tag (no
  admin-site swap) or a `SidebarAdminSite` for those who prefer to subclass.
- **Themeable, with skills** — configure the theme (light / dark / auto / code),
  density, placement, text animation, and tool-call display mode from
  `DJANGO_ADMIN_AGENT`, and surface a catalog of one-click skills as composer
  chips and a `/`-command palette. Built on `django-ag-ui>=0.2` and the matching
  `@artooi/ag-ui-web-component`.
- **Unfold-aware** — a runtime JS shim adapts the sidebar to Unfold's chrome;
  any Python Unfold introspection is lazy and guarded, so Unfold stays optional.
- **100% test coverage**, type-checked, Python 3.10–3.14, Django 4.2–6.0.

📖 **Full documentation:** <https://artui.github.io/django-admin-agent/>

```bash
pip install django-admin-agent
# expose the admin tools as an HTTP MCP server too:
pip install "django-admin-agent[mcp]"
```

> **ASGI required.** The agent endpoint streams Server-Sent Events, which the
> sync WSGI worker can't serve — deploy the admin under Daphne / Uvicorn.

---

## Quick start

```python
# settings.py
INSTALLED_APPS = [
    # ...
    "django.contrib.admin",
    "django_admin_agent",
]
```

```python
# urls.py
from django.contrib import admin
from django.urls import path

from django_admin_agent import get_urls

urlpatterns = [
    path("admin/", admin.site.urls),
    # Mounts the agent endpoint over the default shell.* + introspect.* registry.
    *get_urls(model="anthropic:claude-sonnet-4.6"),
]
```

```django
{# templates/admin/base_site.html — override so it wins over the admin app's copy #}
{% extends "admin/base.html" %}
{% load django_admin_agent %}

{% block branding %}
  <h1 id="site-name"><a href="{% url 'admin:index' %}">My admin</a></h1>
  {% django_admin_agent_sidebar %}
{% endblock %}
```

That's the whole wiring: the template tag computes its own context (endpoint
URL, title, auto-confirm flag, bootstrap module, route map), so the admin site
doesn't need swapping. Serve it over ASGI:

```bash
uvicorn myproject.asgi:application
```

The model can be set per-mount (`get_urls(model=...)`) or globally via
`DJANGO_AG_UI["MODEL"]`. See the
[docs](https://artui.github.io/django-admin-agent/) for the full tool surface,
configuration reference, the `SidebarAdminSite` path, Unfold support, and the
`[mcp]` server.

## License

MIT — see [LICENSE](LICENSE).
