from __future__ import annotations

from django.template import Context, Template
from django.test import override_settings

from django_admin_agent.templatetags.django_admin_agent import (
    django_admin_agent_sidebar,
)


def _render() -> str:
    return Template(
        "{% load django_admin_agent %}{% django_admin_agent_sidebar %}",
    ).render(Context())


def test_tag_returns_sidebar_context() -> None:
    context = django_admin_agent_sidebar()
    assert context["endpoint"] == "/admin-agent/"
    assert context["title"] == "Admin Copilot"
    assert context["admin_base_url"] == "/admin/"


@override_settings(ROOT_URLCONF="tests.admin.urls_full")
def test_tag_renders_web_component_markup() -> None:
    rendered = Template(
        "{% load django_admin_agent %}{% django_admin_agent_sidebar %}",
    ).render(Context())
    assert "<ag-ui-chat" in rendered
    assert 'id="django-admin-agent"' in rendered
    assert 'endpoint="/admin-agent/"' in rendered
    assert 'data-admin-base="/admin/"' in rendered
    # The composer's upload endpoint reaches the Web Component as data-attachments-url
    # (the fully-configured mount exposes it).
    assert 'data-attachments-url="/admin-agent/attachments/"' in rendered
    assert "admin_agent.js" in rendered
    # The route manifest is embedded as a safe JSON script the bootstrap reads.
    assert 'id="django-admin-agent-routes"' in rendered
    assert "testapp.author.changelist" in rendered
    # Customization seams are absent unless configured.
    assert "data-strings=" not in rendered
    assert "data-icon-url=" not in rendered
    assert "data-side=" not in rendered


@override_settings(
    DJANGO_ADMIN_AGENT={
        "PLACEMENT": "sidebar",
        "SIDE": "left",
        "ICON_URL": "/static/logo.png",
        "STRINGS": {"send": "Senden"},
    },
)
def test_tag_emits_customization_attributes() -> None:
    rendered = _render()
    assert 'placement="sidebar"' in rendered
    assert 'data-side="left"' in rendered
    assert 'data-icon-url="/static/logo.png"' in rendered
    # data-strings carries the JSON table; Django escapes the quotes in the
    # attribute and the browser decodes them back on read.
    assert "data-strings=" in rendered
    assert "Senden" in rendered


@override_settings(ROOT_URLCONF="tests.testapp.two_sidebars_urls")
def test_the_tag_takes_a_namespace_for_a_second_sidebar() -> None:
    """``{% django_admin_agent_sidebar namespace="internal-agent" %}`` — the
    replacement for URL_NAMESPACE, which could name only one server."""
    assert django_admin_agent_sidebar("internal-agent")["endpoint"] == "/internal-agent/"
    assert django_admin_agent_sidebar("public-agent")["endpoint"] == "/public-agent/"
