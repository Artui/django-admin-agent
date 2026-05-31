# django-admin-agent

[![CI](https://github.com/Artui/django-admin-agent/workflows/tests/badge.svg)](https://github.com/Artui/django-admin-agent/actions/workflows/tests.yml)
[![PyPI](https://img.shields.io/pypi/v/django-admin-agent.svg)](https://pypi.org/project/django-admin-agent/)
[![Python versions](https://img.shields.io/pypi/pyversions/django-admin-agent.svg)](https://pypi.org/project/django-admin-agent/)
[![Django versions](https://img.shields.io/pypi/djversions/django-admin-agent.svg)](https://pypi.org/project/django-admin-agent/)
[![Ruff](https://img.shields.io/endpoint?url=https://raw.githubusercontent.com/astral-sh/ruff/main/assets/badge/v2.json)](https://github.com/astral-sh/ruff)
[![License](https://img.shields.io/pypi/l/django-admin-agent.svg)](https://github.com/Artui/django-admin-agent/blob/main/LICENSE)

An always-present chat-agent sidebar in the Django admin. The agent reads your
data through typed tools and drives the admin UI — filling forms, applying
filters, navigating — with visible animations and confirmation on destructive
actions.

Built on [`django-ag-ui`](https://github.com/Artui/django-ag-ui) (the Django ↔
Pydantic-AI ↔ AG-UI bridge) and the
[`@artooi/ag-ui-web-component`](https://github.com/Artui/ag-ui-web-component)
chat element. Works with vanilla Django admin and [Django
Unfold](https://github.com/unfoldadmin/django-unfold).

```bash
pip install django-admin-agent
```

See the [docs](https://artui.github.io/django-admin-agent/) for setup.
