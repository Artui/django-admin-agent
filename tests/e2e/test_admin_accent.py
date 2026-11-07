"""The sidebar takes Django admin's own colours, in both of the admin's schemes.

Read off the computed style in a real browser because the claim is about the
cascade: ``var(--primary)`` has to resolve *at the element*, so that Django's
``prefers-color-scheme`` styles and its ``html[data-theme]`` toggle reach the
panel without this package watching either. A rendered template proves only
that a ``<link>`` was written.

The expected values are read from the page rather than written here, so the
test follows whatever the installed Django ships; the light and dark values are
asserted to differ so that a token stuck on one scheme cannot pass.
"""

from __future__ import annotations

import re

import pytest
from playwright.sync_api import expect

pytestmark = [pytest.mark.e2e, pytest.mark.django_db(transaction=True)]

CHAT = "ag-ui-chat#django-admin-agent"


def _tokens(page):  # noqa: ANN001, ANN202
    """The page's own tokens beside the ones the sidebar's element computes."""
    return page.evaluate(
        """(selector) => {
            const root = getComputedStyle(document.documentElement);
            const chat = getComputedStyle(document.querySelector(selector));
            const read = (style, name) => style.getPropertyValue(name).trim();
            return {
                primary: read(root, "--primary"),
                linkFg: read(root, "--link-fg"),
                font: read(root, "--font-family-primary"),
                accent: read(chat, "--ag-ui-accent"),
                ring: read(chat, "--ag-ui-highlight-ring-color"),
                chatFont: read(chat, "--ag-ui-font"),
            };
        }""",
        CHAT,
    )


def _squash(value):  # noqa: ANN001, ANN202
    """A font list compared without the line breaks Django writes it with."""
    return re.sub(r"\s+", " ", value)


def _open_admin(admin_page, live_server):  # noqa: ANN001, ANN202
    admin_page.goto(f"{live_server.url}/admin/testapp/author/")
    expect(admin_page.locator(CHAT)).to_be_attached()
    return admin_page


def _assert_follows_the_page(tokens):  # noqa: ANN001, ANN202
    # Non-empty first: two unset properties compare equal.
    assert tokens["primary"], tokens
    assert tokens["linkFg"], tokens
    assert tokens["font"], tokens
    assert tokens["accent"] == tokens["primary"], tokens
    assert tokens["ring"] == tokens["linkFg"], tokens
    assert _squash(tokens["chatFont"]) == _squash(tokens["font"]), tokens


def test_the_accent_ring_and_font_follow_the_admin_in_each_scheme(admin_page, live_server):  # noqa: ANN001, ANN201
    page = _open_admin(admin_page, live_server)

    page.emulate_media(color_scheme="light")
    light = _tokens(page)
    _assert_follows_the_page(light)

    page.emulate_media(color_scheme="dark")
    dark = _tokens(page)
    _assert_follows_the_page(dark)

    # What makes the two checks above mean something: Django's schemes differ.
    assert light["primary"] != dark["primary"]
    assert light["linkFg"] != dark["linkFg"]


def test_the_admin_theme_toggle_reaches_the_sidebar(admin_page, live_server):  # noqa: ANN001, ANN201
    """The admin's own toggle, under a light system scheme.

    ``html[data-theme="dark"]`` is the selector Django's toggle writes, and it
    is a different rule from the media query: a sidebar that only followed
    ``prefers-color-scheme`` would stay light here.
    """
    page = _open_admin(admin_page, live_server)
    page.emulate_media(color_scheme="light")
    light = _tokens(page)

    page.evaluate("document.documentElement.dataset.theme = 'dark'")
    toggled = _tokens(page)

    _assert_follows_the_page(toggled)
    assert toggled["primary"] != light["primary"]
    assert toggled["accent"] != light["accent"]


def test_a_project_rule_on_the_element_wins(admin_page, live_server):  # noqa: ANN001, ANN201
    """The sidebar's rule has no specificity, so the plainest override wins.

    A bare ``ag-ui-chat`` selector is the least a project would write, and it
    is written where Django's ``extrastyle`` block puts a project's CSS: in the
    head, ahead of the sidebar's link in the body. Placed there, source order
    is on the sidebar's side, so the project's rule wins only by specificity:
    it loses to the id selector the shipped rule would be without ``:where()``,
    and to a bare ``ag-ui-chat`` one.
    """
    page = _open_admin(admin_page, live_server)
    page.evaluate(
        """() => {
            const style = document.createElement("style");
            style.textContent = "ag-ui-chat { --ag-ui-accent: #123456; }";
            document.head.prepend(style);
        }"""
    )

    assert _tokens(page)["accent"] == "#123456"
