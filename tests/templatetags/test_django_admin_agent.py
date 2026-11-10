from __future__ import annotations

from pathlib import Path
from typing import Any

import pytest
from django.conf import settings
from django.contrib.auth.models import AnonymousUser, User
from django.template import Context, Template
from django.test import Client, RequestFactory, override_settings

from django_admin_agent.admin.build_sidebar_context import build_sidebar_context
from django_admin_agent.templatetags.django_admin_agent import (
    django_admin_agent_sidebar,
)


def _render() -> str:
    return Template(
        "{% load django_admin_agent %}{% django_admin_agent_sidebar %}",
    ).render(Context())


def _render_for(request: Any) -> str:
    """Render the tag the way an admin page does: with a request in the context."""
    return Template(
        "{% load django_admin_agent %}{% django_admin_agent_sidebar %}",
    ).render(Context({"request": request}))


def _request_from(user: Any) -> Any:
    request = RequestFactory().get("/admin/")
    request.user = user
    return request


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
    assert 'data-attachments-url="/admin-agent/attachments/"' in rendered
    assert "admin_agent.js" in rendered
    assert 'id="django-admin-agent-routes"' in rendered
    assert "testapp.author.changelist" in rendered
    assert "data-strings=" not in rendered
    assert "data-icon-url=" not in rendered
    assert "data-side=" not in rendered
    # Dragging is on by default, so the attribute that turns it off is left absent, not 'true'.
    assert "data-launcher-drag" not in rendered


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
    # data-strings carries the JSON table.
    assert "data-strings=" in rendered
    assert "Senden" in rendered


@override_settings(ROOT_URLCONF="tests.testapp.two_sidebars_urls")
def test_the_tag_takes_a_namespace_for_a_second_sidebar() -> None:
    """The namespace argument points a second sidebar at its own server."""
    assert django_admin_agent_sidebar(Context(), "internal-agent")["endpoint"] == "/internal-agent/"
    assert django_admin_agent_sidebar(Context(), "public-agent")["endpoint"] == "/public-agent/"


@pytest.mark.django_db
def test_the_sidebar_is_scoped_to_the_signed_in_principal() -> None:
    """Two principals in one tab must not reach each other's transcript."""
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
    """Rather than inventing a shared bucket every anonymous reader lands in."""
    assert build_sidebar_context()["user_key"] is None
    assert "user-key=" not in _render()


@pytest.mark.django_db
def test_an_anonymous_user_is_not_a_principal() -> None:
    assert build_sidebar_context(user=AnonymousUser())["user_key"] is None


@pytest.mark.django_db
def test_the_greeting_names_the_user_the_way_the_admin_header_does() -> None:
    """``get_short_name()`` first, as ``admin/base.html``'s welcome line does."""
    user = User.objects.create_user(username="ada.l", first_name="Ada", is_staff=True)

    assert build_sidebar_context(user=user)["user_name"] == "Ada"
    rendered = _render_for(_request_from(user))
    assert 'user-name="Ada"' in rendered
    assert "ada.l" not in rendered


@pytest.mark.django_db
def test_a_user_with_no_short_name_is_greeted_by_username() -> None:
    user = User.objects.create_user(username="ada.l", is_staff=True)

    assert build_sidebar_context(user=user)["user_name"] == "ada.l"


def test_a_user_model_without_get_short_name_is_greeted_by_username() -> None:
    """A custom model on ``AbstractBaseUser`` need not define ``get_short_name``."""

    class _BareUser:
        is_authenticated = True
        pk = 7

        def get_username(self) -> str:
            return "ada.l"

    assert build_sidebar_context(user=_BareUser())["user_name"] == "ada.l"


def test_a_blank_name_leaves_the_greeting_nameless() -> None:
    """An empty string is not a name: the attribute stays off for *Hello there*."""

    class _NamelessUser:
        is_authenticated = True
        pk = 7

        def get_short_name(self) -> str:
            return ""

        def get_username(self) -> str:
            return ""

    assert build_sidebar_context(user=_NamelessUser())["user_name"] is None


@pytest.mark.django_db
def test_the_name_is_escaped_into_the_attribute() -> None:
    """A name is typed by whoever edits the account, so it must not break out."""
    user = User.objects.create_user(username="ada.l", first_name='Ada" onload="x', is_staff=True)

    rendered = _render_for(_request_from(user))

    assert 'user-name="Ada&quot; onload=&quot;x"' in rendered
    assert 'onload="x"' not in rendered


def test_no_user_leaves_the_name_off_entirely() -> None:
    assert build_sidebar_context()["user_name"] is None
    assert build_sidebar_context(user=AnonymousUser())["user_name"] is None
    assert "user-name=" not in _render()


def test_a_named_but_unauthenticated_user_is_not_greeted() -> None:
    """The authentication check, held on its own."""

    class _SignedOutUser:
        is_authenticated = False
        pk = 7

        def get_short_name(self) -> str:
            return "Ada"

        def get_username(self) -> str:
            return "ada.l"

    assert build_sidebar_context(user=_SignedOutUser())["user_name"] is None


@override_settings(DJANGO_ADMIN_AGENT={"LAUNCHER_DRAG": False})
def test_tag_pins_the_sidebar_when_dragging_is_turned_off() -> None:
    """One attribute governs both drags from web component 0.34.0."""
    rendered = _render()

    assert 'data-launcher-drag="false"' in rendered


def test_an_opened_step_group_draws_compact_rows_by_default() -> None:
    assert 'data-tool-group-display="compact"' in _render()


@override_settings(DJANGO_ADMIN_AGENT={"TOOL_GROUP_DISPLAY": "full"})
def test_a_project_can_ask_for_full_cards_in_an_opened_group() -> None:
    rendered = _render()
    assert 'data-tool-group-display="full"' in rendered
    assert 'data-tool-group-display="compact"' not in rendered


@override_settings(DJANGO_ADMIN_AGENT={"COLLAPSE_TO": "bar"})
def test_tag_collapses_the_sidebar_to_the_bar_when_asked() -> None:
    assert 'collapse-to="bar"' in _render()


def test_the_sidebar_renders_no_collapse_to_by_default() -> None:
    # Absent rather than "auto".
    assert "collapse-to" not in _render()


@override_settings(DJANGO_ADMIN_AGENT={"COLLAPSE_TO": "none"})
def test_tag_never_hides_the_panel_it_has_no_control_to_reopen() -> None:
    assert "collapse-to" not in _render()


@override_settings(DJANGO_ADMIN_AGENT={"START_OPEN": True})
def test_tag_opens_the_sidebar_on_a_first_visit_when_asked() -> None:
    """The way back to the behaviour web component 0.35.0 changed."""
    assert "data-start-open" in _render()


def test_the_sidebar_rests_at_its_launcher_by_default() -> None:
    # The negative half, and the one that would rot silently.
    assert "data-start-open" not in _render()


@override_settings(DJANGO_ADMIN_AGENT={"CHAT_SURFACE_TOOLS": False})
def test_tag_turns_the_panel_tools_off_when_asked() -> None:
    """The attribute is the off switch, so it is only rendered to turn them off."""
    assert 'data-chat-surface-tools="false"' in _render()


def test_the_panel_tools_are_on_without_being_asked_for() -> None:
    assert "data-chat-surface-tools" not in _render()


# Who the sidebar is rendered for.
#
# The endpoint the launcher points at refuses anyone who is not active staff
# (tests/test_staff_required.py), so a chat offered to a signed-out visitor
# could only ever answer 401 -- it is dead UI, not a host's styling choice. The
# tag is installed in `admin/base_site.html`, and the admin's *login* page
# renders that template's branding block, so "every admin page" includes the one
# page where nobody is signed in yet.


def _templates_with_the_tag_in_base_site() -> list[dict[str, Any]]:
    """The configured engine plus an ``admin/base_site.html`` carrying the tag."""
    return [
        {
            **settings.TEMPLATES[0],
            "DIRS": [str(Path(__file__).resolve().parents[1] / "templates")],
        }
    ]


@pytest.mark.django_db
def test_the_admin_login_page_carries_no_launcher() -> None:
    """The reported symptom, at the level it was reported."""
    with override_settings(TEMPLATES=_templates_with_the_tag_in_base_site()):
        body = Client().get("/admin/login/").content.decode()

    assert "Test admin" in body
    assert "<ag-ui-chat" not in body
    assert "admin_agent.js" not in body


def test_a_signed_out_visitor_gets_no_sidebar() -> None:
    """The guard: an anonymous user renders nothing whatsoever."""
    rendered = _render_for(_request_from(AnonymousUser()))

    assert rendered.strip() == ""
    assert "<ag-ui-chat" not in rendered
    assert "admin_agent.js" not in rendered
    assert "django-admin-agent-routes" not in rendered


@pytest.mark.django_db
def test_a_signed_in_principal_still_gets_the_sidebar() -> None:
    """The arm the guard must not touch, stated on its own."""
    user = User.objects.create_user(username="ada", is_staff=True)

    rendered = _render_for(_request_from(user))

    assert "<ag-ui-chat" in rendered
    assert f'user-key="{user.pk}"' in rendered


def test_a_context_without_a_request_still_renders_the_sidebar() -> None:
    """A deliberate non-change, pinned so it is not tidied into the guard."""
    assert "<ag-ui-chat" in _render()


def test_a_request_without_a_user_still_renders_the_sidebar() -> None:
    """The other conjunct of the guard, which no other test holds."""
    request = RequestFactory().get("/admin/")

    assert not hasattr(request, "user")
    assert "<ag-ui-chat" in _render_for(request)


_STYLESHEET = '<link rel="stylesheet" href="/static/django_admin_agent/admin_agent.css">'


@pytest.mark.django_db
def test_the_sidebar_links_its_stylesheet_ahead_of_the_element() -> None:
    """The admin's colours arrive as a linked sheet, before the element."""
    user = User.objects.create_user(username="ada", is_staff=True)

    rendered = _render_for(_request_from(user))

    assert _STYLESHEET in rendered
    assert rendered.index(_STYLESHEET) < rendered.index("<ag-ui-chat")
    assert " style=" not in rendered


def test_a_signed_out_visitor_gets_no_stylesheet() -> None:
    """The sheet sits inside the guard, like everything else the tag renders."""
    rendered = _render_for(_request_from(AnonymousUser()))

    assert "admin_agent.css" not in rendered


@override_settings(DJANGO_ADMIN_AGENT={"THEME": "soft dark"})
def test_a_two_word_theme_reaches_the_element_whole() -> None:
    """A theme name and a scheme are one attribute value, passed as written."""
    assert 'theme="soft dark"' in _render()
