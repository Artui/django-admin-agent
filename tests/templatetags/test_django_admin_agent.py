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
    # Dragging is the component's default, so the attribute that turns it off
    # is absent rather than spelled out as "true": an attribute nobody set is
    # what leaves the decision where it belongs.
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


@pytest.mark.django_db
def test_the_greeting_names_the_user_the_way_the_admin_header_does() -> None:
    """``get_short_name()`` first, as ``admin/base.html``'s welcome line does.

    Sized so the username cannot answer for it: the two differ, so a builder
    reading ``get_username()`` first fails here rather than passing.
    """
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
    """A custom model on ``AbstractBaseUser`` need not define ``get_short_name``.

    The admin's header tolerates that, so the sidebar must not raise on it.
    """

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
    """The authentication check, held on its own.

    ``AnonymousUser`` cannot hold it: its username is empty, so it would come
    back nameless with the check deleted. This one has a name to leak.
    """

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
    """One attribute governs both drags from web component 0.34.0.

    Before it, the same attribute stopped only the collapsed bubble being moved;
    it now stops the open panel being dragged by its header as well. That is the
    whole reason this setting exists -- an admin layout that places the sidebar
    deliberately had no way to say so.
    """
    rendered = _render()

    assert 'data-launcher-drag="false"' in rendered


@override_settings(DJANGO_ADMIN_AGENT={"START_OPEN": True})
def test_tag_opens_the_sidebar_on_a_first_visit_when_asked() -> None:
    """The way back to the behaviour web component 0.35.0 changed.

    Before it, a corner placement opened itself on a first visit; from it, the
    panel rests at its launcher instead and the user opens it. That is the
    better default for an admin page -- nobody arrives at a changelist wanting
    it covered -- but a site that had the old behaviour had no way to keep it,
    because the attribute that restores it was never rendered.
    """
    assert "data-start-open" in _render()


def test_the_sidebar_rests_at_its_launcher_by_default() -> None:
    # The negative half, and the one that would rot silently: an attribute that
    # is always emitted makes the setting above look like it works.
    assert "data-start-open" not in _render()


@override_settings(DJANGO_ADMIN_AGENT={"CHAT_SURFACE_TOOLS": False})
def test_tag_turns_the_panel_tools_off_when_asked() -> None:
    """The attribute is the off switch, so it is only rendered to turn them off.

    On by default and absent by default: the bootstrap registers the tools
    unless it reads "false" here, so an always-emitted attribute would make
    this setting look like it works while the tools stayed registered.
    """
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
    """The configured engine plus an ``admin/base_site.html`` carrying the tag.

    ``DIRS`` is searched before ``APP_DIRS``, so this override is the template
    the admin renders through -- the wiring ``docs/installation.md`` recommends,
    exercised against the real admin views rather than a bare ``Template``.
    """
    return [
        {
            **settings.TEMPLATES[0],
            "DIRS": [str(Path(__file__).resolve().parents[1] / "templates")],
        }
    ]


@pytest.mark.django_db
def test_the_admin_login_page_carries_no_launcher() -> None:
    """The reported symptom, at the level it was reported.

    A visitor who has not signed in yet reaches exactly one admin page, and it
    is rendered through the same ``base_site.html`` every other page uses.
    """
    with override_settings(TEMPLATES=_templates_with_the_tag_in_base_site()):
        body = Client().get("/admin/login/").content.decode()

    # Sized so the negative assertion cannot pass vacuously: without the
    # override in play the admin's own base_site.html renders, which carries no
    # tag at all and would satisfy "no launcher here" for the wrong reason.
    assert "Test admin" in body
    assert "<ag-ui-chat" not in body
    assert "admin_agent.js" not in body


def test_a_signed_out_visitor_gets_no_sidebar() -> None:
    """The guard: an anonymous user renders nothing whatsoever.

    Not merely a launcher with no ``user-key``: the bootstrap module, the route
    manifest and the skill catalog are all page weight spent on a chat that
    cannot open.
    """
    rendered = _render_for(_request_from(AnonymousUser()))

    assert rendered.strip() == ""
    assert "<ag-ui-chat" not in rendered
    assert "admin_agent.js" not in rendered
    assert "django-admin-agent-routes" not in rendered


@pytest.mark.django_db
def test_a_signed_in_principal_still_gets_the_sidebar() -> None:
    """The arm the guard must not touch, stated on its own.

    Every other rendering test here builds its context without a request, so
    this is the only one that would fail if the guard read the request wrongly
    and suppressed the sidebar for everybody.
    """
    user = User.objects.create_user(username="ada", is_staff=True)

    rendered = _render_for(_request_from(user))

    assert "<ag-ui-chat" in rendered
    assert f'user-key="{user.pk}"' in rendered


def test_a_context_without_a_request_still_renders_the_sidebar() -> None:
    """A deliberate non-change, pinned so it is not tidied into the guard.

    The tag documents that a context with no ``request`` degrades to the
    previous behaviour rather than raising, because a missing user is a valid
    answer there -- a template rendered outside a request cycle has nobody to
    refuse. Suppressing the sidebar for that case would be a behaviour change
    for hosts rendering the admin chrome offline, and it is not the reported
    defect: the login page has a request and an ``AnonymousUser`` on it.
    """
    assert "<ag-ui-chat" in _render()


def test_a_request_without_a_user_still_renders_the_sidebar() -> None:
    """The other conjunct of the guard, which no other test holds.

    A request that never passed ``AuthenticationMiddleware`` carries no ``user``
    at all, which is "we cannot tell" rather than "anonymous" -- the same answer
    the paragraph above gives for a missing request. Delete ``user is not None``
    from the guard and this is the test that fails.
    """
    request = RequestFactory().get("/admin/")

    assert not hasattr(request, "user")
    assert "<ag-ui-chat" in _render_for(request)
