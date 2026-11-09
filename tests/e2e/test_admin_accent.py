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
from django.test import override_settings
from playwright.sync_api import expect

from tests.e2e.conftest import open_sidebar, send_message

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


# The ring a tool draws in the page, read off the drawn outline. The custom
# property on the element is the same on every bundle; only a bundle that reads
# the chat's ring token (web component 0.47.0 and later) draws it, and an older
# one draws the package indigo. ``clickElement`` is what ``admin_tools.js``
# calls for ``click_element``, and it rings the target before the click.
_DRAWN_RING = """async () => {
  const src = document.querySelector('script[type=module][src*="admin_agent"]').src;
  const bundle = await import(new URL("ag-ui-web-component.bundle.js", src).href);
  const target = document.createElement("button");
  target.type = "button";
  target.textContent = "ring";
  document.querySelector("#content").appendChild(target);
  const pending = bundle.clickElement(target, { highlightMs: 1500 });
  for (let i = 0; i < 200 && target.style.outline === ""; i++) {
    await new Promise((resolve) => requestAnimationFrame(resolve));
  }
  const outline = getComputedStyle(target).outlineColor;
  await pending;
  // The page's tokens resolved to the same rgb() form as the outline.
  const probe = document.createElement("span");
  document.body.appendChild(probe);
  const resolve = (name) => {
    probe.style.color = getComputedStyle(document.documentElement).getPropertyValue(name).trim();
    return getComputedStyle(probe).color;
  };
  const linkFg = resolve("--link-fg");
  const primary = resolve("--primary");
  probe.remove();
  return { outline, linkFg, primary };
}"""


@pytest.mark.parametrize("scheme", ["light", "dark"])
def test_the_ring_drawn_in_the_page_is_the_admin_link_colour(admin_page, live_server, scheme):  # noqa: ANN001, ANN201
    page = _open_admin(admin_page, live_server)
    page.emulate_media(color_scheme=scheme)

    drawn = page.evaluate(_DRAWN_RING)

    # The two differ, so a ring left on the accent cannot pass.
    assert drawn["linkFg"] != drawn["primary"], drawn
    assert drawn["outline"] == drawn["linkFg"], drawn


# The keyboard focus outline on the folded tool-call row, against the panel it
# sits on, both flattened to one sRGB pixel so an alpha outline is measured as
# it is drawn. The sidebar sets no ring of its own: web component 0.47.0 drew
# the admin's light primary at 1.58:1 here, and 0.48.0 holds 3:1 for any
# accent, so this is what keeps the sidebar off a bundle that does not.
_FOCUS_ACTIVE = """(selector) => {
  const active = document.querySelector(selector).shadowRoot.activeElement;
  return active ? active.className : null;
}"""

_FOCUS_PIXELS = """(selector) => {
  const head = document.querySelector(selector).shadowRoot.activeElement;
  const style = getComputedStyle(head);
  let node = head;
  let background = "rgba(0, 0, 0, 0)";
  while (node) {
    if (node.nodeType === 1) {
      const colour = getComputedStyle(node).backgroundColor;
      if (colour !== "rgba(0, 0, 0, 0)" && colour !== "transparent") {
        background = colour;
        break;
      }
    }
    node = node.parentNode || node.host;
  }
  const canvas = document.createElement("canvas");
  canvas.width = canvas.height = 1;
  const context = canvas.getContext("2d", { colorSpace: "srgb" });
  const pixel = (...colours) => {
    context.clearRect(0, 0, 1, 1);
    for (const colour of colours) {
      context.fillStyle = colour;
      context.fillRect(0, 0, 1, 1);
    }
    return Array.from(context.getImageData(0, 0, 1, 1).data.slice(0, 3));
  };
  return {
    outlineStyle: style.outlineStyle,
    outline: pixel(background, style.outlineColor),
    panel: pixel(background),
  };
}"""


def _contrast(first, second):  # noqa: ANN001, ANN202
    def luminance(rgb):  # noqa: ANN001, ANN202
        def channel(value):  # noqa: ANN001, ANN202
            value /= 255
            return value / 12.92 if value <= 0.04045 else ((value + 0.055) / 1.055) ** 2.4

        red, green, blue = (channel(value) for value in rgb)
        return 0.2126 * red + 0.7152 * green + 0.0722 * blue

    lighter, darker = sorted((luminance(first), luminance(second)), reverse=True)
    return (lighter + 0.05) / (darker + 0.05)


@pytest.mark.parametrize("theme", [None, "light", "dark"])
@pytest.mark.parametrize("scheme", ["light", "dark"])
def test_the_folded_row_focus_outline_holds_three_to_one(admin_page, live_server, theme, scheme):  # noqa: ANN001, ANN201
    settings = {} if theme is None else {"THEME": theme}
    with override_settings(DJANGO_ADMIN_AGENT=settings):
        admin_page.emulate_media(color_scheme=scheme)
        admin_page.goto(f"{live_server.url}/admin/")
        send_message(admin_page, "how many widgets are there?")
        expect(admin_page.locator(f"{CHAT} .tool-group-head")).to_be_attached(timeout=15000)
        expect(
            admin_page.locator(f"{CHAT} .message--assistant", has_text="not installed here")
        ).to_be_visible(timeout=15000)
        admin_page.locator(f"{CHAT} .input").focus()
        for _ in range(40):
            if admin_page.evaluate(_FOCUS_ACTIVE, CHAT) == "tool-group-head":
                break
            admin_page.keyboard.press("Shift+Tab")
        assert admin_page.evaluate(_FOCUS_ACTIVE, CHAT) == "tool-group-head"

        drawn = admin_page.evaluate(_FOCUS_PIXELS, CHAT)

    assert drawn["outlineStyle"] != "none", drawn
    assert _contrast(drawn["outline"], drawn["panel"]) >= 3, drawn


def _open_under_csp(page, live_server, policy):  # noqa: ANN001, ANN202
    """The changelist served with ``policy`` as its Content-Security-Policy.

    Only the document gets the header, as Django's own CSP middleware would
    send it; the static files it links are fetched untouched.
    """
    url = f"{live_server.url}/admin/testapp/author/"

    def with_policy(route):  # noqa: ANN001, ANN202
        response = route.fetch()
        route.fulfill(
            response=response,
            headers={**response.headers, "content-security-policy": policy},
        )

    page.route(url, with_policy)
    page.emulate_media(color_scheme="light")
    page.goto(url)
    expect(page.locator(CHAT)).to_be_attached()
    return _tokens(page)


def test_the_sheet_loads_under_a_style_src_that_admits_the_admin_static_files(  # noqa: ANN201
    admin_page,  # noqa: ANN001
    live_server,  # noqa: ANN001
):
    """A linked sheet is what a strict ``style-src`` admits; an inline one is not.

    ``'self'`` is the policy a project serving its admin's static files from
    its own origin writes, and under it the accent still arrives. ``'none'`` is
    the control: it refuses the sheet too, so an accent that survived it would
    mean the header never reached the page and the first half proved nothing.
    """
    admitted = _open_under_csp(admin_page, live_server, "style-src 'self'")
    assert admitted["primary"], admitted
    assert admitted["accent"] == admitted["primary"], admitted

    refused = _open_under_csp(admin_page, live_server, "style-src 'none'")
    assert refused["accent"] == "", refused


# The panel's own background, flattened to one sRGB pixel, beside the page's
# primary resolved to the same form. Walked up from the composer to the first
# element that paints a background, as the focus measurement above does.
_PANEL = """(selector) => {
  const chat = document.querySelector(selector);
  let node = chat.shadowRoot.querySelector(".input");
  let background = "rgba(0, 0, 0, 0)";
  while (node) {
    if (node.nodeType === 1) {
      const colour = getComputedStyle(node).backgroundColor;
      if (colour !== "rgba(0, 0, 0, 0)" && colour !== "transparent") {
        background = colour;
        break;
      }
    }
    node = node.parentNode || node.host;
  }
  const canvas = document.createElement("canvas");
  canvas.width = canvas.height = 1;
  const context = canvas.getContext("2d", { colorSpace: "srgb" });
  context.fillStyle = background;
  context.fillRect(0, 0, 1, 1);
  return Array.from(context.getImageData(0, 0, 1, 1).data.slice(0, 3));
}"""


def _panel_is_dark(page):  # noqa: ANN001, ANN202
    rgb = page.evaluate(_PANEL, CHAT)
    # Quiet's two backgrounds are #ffffff and #161618; the midpoint of the
    # luminance scale separates them with room for any theme's tint.
    return _contrast(rgb, (0, 0, 0)) < _contrast(rgb, (255, 255, 255))


def _open_panel(page, live_server, scheme, theme=None, toggle=False):  # noqa: ANN001, ANN202
    """The changelist under ``scheme``, with the sidebar open, and THEME set."""
    settings = {} if theme is None else {"THEME": theme}
    if toggle:
        settings["THEME_TOGGLE"] = True
    page.emulate_media(color_scheme=scheme)
    with override_settings(DJANGO_ADMIN_AGENT=settings):
        _open_admin(page, live_server)
    open_sidebar(page)
    return page


@pytest.mark.parametrize("theme", [None, "soft", "auto"])
@pytest.mark.parametrize("scheme", ["light", "dark"])
def test_the_panel_follows_the_admin_scheme(admin_page, live_server, theme, scheme):  # noqa: ANN001, ANN201
    """THEME unset, a theme name alone, or "auto": the panel is the admin's scheme.

    "auto" is in the list because the component reads it as the operating
    system's preference, which is the admin's only while its toggle is on auto.
    """
    page = _open_panel(admin_page, live_server, scheme, theme)

    _assert_follows_the_page(_tokens(page))
    assert _panel_is_dark(page) is (scheme == "dark")


@pytest.mark.parametrize("theme", [None, "auto"])
def test_the_panel_follows_the_admin_toggle(admin_page, live_server, theme):  # noqa: ANN001, ANN201
    """Django's toggle is a different rule from the media query, both ways.

    Dark under a light system is the case a panel following only
    prefers-color-scheme gets wrong; light under a dark system is the one the
    component's own "auto" gets wrong.
    """
    page = _open_panel(admin_page, live_server, "light", theme)
    page.evaluate("document.documentElement.dataset.theme = 'dark'")
    assert _panel_is_dark(page)

    page.emulate_media(color_scheme="dark")
    page.evaluate("document.documentElement.dataset.theme = 'light'")
    assert not _panel_is_dark(page)


def test_an_admin_without_its_theme_script_keeps_a_light_panel(admin_page, live_server):  # noqa: ANN001, ANN201
    """No ``data-theme`` on html is an admin whose dark-mode-vars block is empty.

    Django's theme script writes the attribute on every page, so its absence
    means the project took dark mode out; the panel then stays light even under
    a dark system preference, rather than turning dark on an always-light admin.
    """
    page = _open_panel(admin_page, live_server, "dark")
    assert _panel_is_dark(page)

    page.evaluate("delete document.documentElement.dataset.theme")
    assert not _panel_is_dark(page)


@pytest.mark.parametrize(
    ("theme", "dark"),
    [("light", False), ("soft light", False), ("dark", True), ("code", True)],
)
def test_a_scheme_word_in_theme_pins_the_panel(admin_page, live_server, theme, dark):  # noqa: ANN001, ANN201
    """THEME="light" on a dark admin stays light, and the other way round.

    The accent still follows the admin while the panel's scheme is pinned.
    "code" is a theme with no light half, so it counts as a pin. Its own tokens
    paint a dark background whatever the scheme, so for it the background
    cannot tell; the host's resolved color-scheme can, and it is what every
    light-dark() token still reads.
    """
    admin_scheme = "light" if dark else "dark"
    page = _open_panel(admin_page, live_server, admin_scheme, theme)
    assert _panel_is_dark(page) is dark
    resolved = page.evaluate("(s) => getComputedStyle(document.querySelector(s)).colorScheme", CHAT)
    assert resolved == ("dark" if dark else "light"), resolved

    toggled = "light" if dark else "dark"
    page.evaluate(f"document.documentElement.dataset.theme = '{toggled}'")
    assert _panel_is_dark(page) is dark
    _assert_follows_the_page(_tokens(page))


@pytest.mark.parametrize(
    ("scheme", "data_theme", "word", "dark"),
    [
        ("light", None, "dark", True),
        ("dark", None, "light", False),
        ("light", "dark", "light", False),
    ],
)
def test_a_project_rule_on_the_element_beats_the_scheme_rules(  # noqa: ANN201
    admin_page,  # noqa: ANN001
    live_server,  # noqa: ANN001
    scheme,  # noqa: ANN001
    data_theme,  # noqa: ANN001
    word,  # noqa: ANN001
    dark,  # noqa: ANN001
):
    """The three rules have no specificity, so naming the element is enough."""
    page = _open_panel(admin_page, live_server, scheme)
    if data_theme is not None:
        page.evaluate("(word) => { document.documentElement.dataset.theme = word; }", data_theme)
    page.add_style_tag(content=f"ag-ui-chat {{ color-scheme: {word}; }}")
    assert _panel_is_dark(page) is dark


def test_the_header_toggle_pins_until_flipped_back(admin_page, live_server):  # noqa: ANN001, ANN201
    """The toggle saves a scheme word, and a saved word pins as THEME's does."""
    page = _open_panel(admin_page, live_server, "light", toggle=True)
    chat = page.locator(CHAT)
    toggle = chat.locator(".header-btn--theme")
    assert not _panel_is_dark(page)

    toggle.click()
    assert _panel_is_dark(page)
    page.evaluate("document.documentElement.dataset.theme = 'light'")
    assert _panel_is_dark(page)

    toggle.click()
    assert not _panel_is_dark(page)
    page.evaluate("document.documentElement.dataset.theme = 'dark'")
    assert not _panel_is_dark(page)

    # The saved word outlives the page: a reload still pins.
    with override_settings(DJANGO_ADMIN_AGENT={"THEME_TOGGLE": True}):
        page.reload()
        expect(chat).to_be_attached()
    open_sidebar(page)
    assert "light" in (chat.get_attribute("theme") or "").split()
    assert not _panel_is_dark(page)


def test_with_theme_light_the_panel_stays_light_on_a_dark_admin(admin_page, live_server):  # noqa: ANN001, ANN201
    """The accent follows the admin into the dark; a pinned scheme does not.

    Until 0.61.0 this held with THEME unset. The panel now follows the admin
    by default, so the claim belongs to the explicit pin, which is the way
    back to the old behaviour.
    """
    page = _open_panel(admin_page, live_server, "dark", "light")
    tokens = _tokens(page)

    _assert_follows_the_page(tokens)
    assert not _panel_is_dark(page)


def test_the_header_toggle_first_press_flips_a_followed_dark_panel(admin_page, live_server):  # noqa: ANN001, ANN201
    """On a dark admin with no word saved, one press gives a light panel."""
    page = _open_panel(admin_page, live_server, "dark", toggle=True)
    assert _panel_is_dark(page)

    page.locator(CHAT).locator(".header-btn--theme").click()
    assert not _panel_is_dark(page)
