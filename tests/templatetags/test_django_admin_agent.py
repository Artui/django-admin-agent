from __future__ import annotations

from django.template import Context, Template

from django_admin_agent.templatetags.django_admin_agent import (
    django_admin_agent_sidebar,
)


def test_tag_returns_sidebar_context() -> None:
    context = django_admin_agent_sidebar()
    assert context["endpoint"] == "/admin-agent/agent/"
    assert context["title"] == "Admin Copilot"
    assert context["admin_base_url"] == "/admin/"


def test_tag_renders_web_component_markup() -> None:
    rendered = Template(
        "{% load django_admin_agent %}{% django_admin_agent_sidebar %}",
    ).render(Context())
    assert "<ag-ui-chat" in rendered
    assert 'id="django-admin-agent"' in rendered
    assert 'endpoint="/admin-agent/agent/"' in rendered
    assert 'data-admin-base="/admin/"' in rendered
    assert "admin_agent.js" in rendered
    # The route manifest is embedded as a safe JSON script the bootstrap reads.
    assert 'id="django-admin-agent-routes"' in rendered
    assert "testapp.author.changelist" in rendered
