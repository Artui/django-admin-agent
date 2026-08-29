from __future__ import annotations

import pytest
from django.contrib.auth.models import AnonymousUser, User
from django.template import Context, Template
from django.test import RequestFactory, override_settings

from django_admin_agent.admin.build_sidebar_context import build_sidebar_context
from django_admin_agent.templatetags.django_admin_agent import (
    django_admin_agent_sidebar,
)


def _render() -> str:
    return Template(
        "{% load django_admin_agent %}{% django_admin_agent_sidebar %}",
    ).render(Context())


def test_tag_returns_sidebar_context() -> None:
    context = django_admin_agent_sidebar(Context())
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
    assert django_admin_agent_sidebar(Context(), "internal-agent")["endpoint"] == "/internal-agent/"
    assert django_admin_agent_sidebar(Context(), "public-agent")["endpoint"] == "/public-agent/"


@pytest.mark.django_db
def test_the_sidebar_is_scoped_to_the_signed_in_principal() -> None:
    """Two principals in one tab must not reach each other's transcript.

    The component keeps a conversation in ``sessionStorage``, which is scoped to
    the tab rather than to the session -- so it survives the navigation a logout
    is. Naming the principal is the only signal there is, and a shared admin
    workstation is exactly where that matters.
    """
    user = User.objects.create_user(username="ada", is_staff=True)
    request = RequestFactory().get("/admin/")
    request.user = user

    rendered = Template(
        "{% load django_admin_agent %}{% django_admin_agent_sidebar %}",
    ).render(Context({"request": request}))

    assert f'user-key="{user.pk}"' in rendered


@pytest.mark.django_db
def test_the_key_is_the_pk_rather_than_the_username() -> None:
    """A renamed account is the same principal, so a rename must not purge it."""
    user = User.objects.create_user(username="ada", is_staff=True)

    assert build_sidebar_context(user=user)["user_key"] == str(user.pk)
    user.username = "ada.lovelace"
    assert build_sidebar_context(user=user)["user_key"] == str(user.pk)


def test_no_user_leaves_the_attribute_off_entirely() -> None:
    """Rather than inventing a shared bucket every anonymous reader lands in.

    A context with no ``request`` is the case: the admin refuses anonymous
    callers, so this arm is about a template rendered outside that gate, and the
    honest answer there is the behaviour that shipped before the attribute
    existed.
    """
    assert build_sidebar_context()["user_key"] is None
    assert "user-key=" not in _render()


@pytest.mark.django_db
def test_an_anonymous_user_is_not_a_principal() -> None:
    assert build_sidebar_context(user=AnonymousUser())["user_key"] is None
