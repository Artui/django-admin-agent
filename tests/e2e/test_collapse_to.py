"""``COLLAPSE_TO="bar"``: the bar stands in for the launcher and the page makes room.

The component draws the bar fixed over the page and writes no CSS of the host's,
so everything a test could read off the markup would pass with the admin's last
row under the bar. These measure the page in a browser. The cases that move the
bar's height are here too, since the page has to give the room back: a phone,
where the open panel covers the bar, and a panel a project sizes to fill the
window, where the bar goes.

Unfold's rows are in ``tests/e2e_unfold``, under its own settings.
"""

from __future__ import annotations

import pytest
from django.test import override_settings
from playwright.sync_api import expect

from tests.e2e.conftest import open_sidebar
from tests.testapp.models import Author

pytestmark = [pytest.mark.e2e, pytest.mark.django_db(transaction=True)]

CHAT = "ag-ui-chat#django-admin-agent"
BAR_SETTINGS = {"COLLAPSE_TO": "bar"}

_STATE = """(selector) => {
  const chat = document.querySelector(selector);
  const root = document.documentElement;
  const bar = chat.shadowRoot.querySelector('[part~="bar"]').getBoundingClientRect();
  return {
    barHeight: chat.barHeight,
    barBox: [bar.left, bar.top, bar.right, bar.bottom],
    published: root.style.getPropertyValue("--django-admin-agent-bar-height"),
    stamped: root.hasAttribute("data-django-admin-agent-bar"),
    contentMargin: getComputedStyle(document.getElementById("content")).marginBottom,
    navPadding: getComputedStyle(document.getElementById("nav-sidebar")).paddingBottom,
    rootInset: getComputedStyle(root).getPropertyValue("--ag-ui-viewport-inset-bottom"),
    chatInset: chat.style.getPropertyValue("--ag-ui-viewport-inset-bottom"),
    collapsed: chat.hasAttribute("collapsed"),
    width: innerWidth,
    height: innerHeight,
  };
}"""

# Scrolled to the foot of the page, where the row has to have come clear of the
# bar. The element under the row's centre is the real claim: a row can be clear
# by its box and still sit under something drawn over it.
_ROW_AT_THE_FOOT = """([selector, row]) => {
  window.scrollTo(0, document.documentElement.scrollHeight);
  const chat = document.querySelector(selector);
  const bar = chat.shadowRoot.querySelector('[part~="bar"]').getBoundingClientRect();
  const box = document.querySelector(row).getBoundingClientRect();
  const hit = document.elementFromPoint(box.left + box.width / 2, box.top + box.height / 2);
  return {
    barTop: bar.top,
    rowBottom: box.bottom,
    covered: hit === chat,
    scrolled: document.documentElement.scrollHeight > innerHeight,
  };
}"""

_COMPUTED = """([row, property]) =>
  getComputedStyle(document.querySelector(row)).getPropertyValue(property)"""

_NAV_FOOT = """(selector) => {
  window.scrollTo(0, 400);
  const chat = document.querySelector(selector);
  const nav = document.getElementById("nav-sidebar");
  nav.scrollTop = nav.scrollHeight;
  const rows = [...nav.querySelectorAll("tr")];
  const box = rows[rows.length - 1].getBoundingClientRect();
  const bar = chat.shadowRoot.querySelector('[part~="bar"]').getBoundingClientRect();
  return { barTop: bar.top, rowBottom: box.bottom, navScrolls: nav.scrollHeight > nav.clientHeight };
}"""


def _settle(page, height_is):  # noqa: ANN001, ANN202
    """Wait on the published height: the event lands a frame after the change."""
    page.wait_for_function(
        """([selector, expected]) => {
          const chat = document.querySelector(selector);
          const root = document.documentElement;
          const published = root.style.getPropertyValue("--django-admin-agent-bar-height");
          const measured = expected === "bar" ? chat.barHeight > 0 : chat.barHeight === 0;
          return measured && published === `${chat.barHeight}px`;
        }""",
        arg=[CHAT, height_is],
    )
    return page.evaluate(_STATE, CHAT)


def _open_bar(page, live_server, path="/admin/testapp/author/"):  # noqa: ANN001, ANN202
    page.goto(f"{live_server.url}{path}")
    expect(page.locator(CHAT)).to_be_attached()
    return _settle(page, "bar")


@override_settings(DJANGO_ADMIN_AGENT=BAR_SETTINGS)
def test_the_bar_stands_in_for_the_launcher_along_the_foot_of_the_window(admin_page, live_server):  # noqa: ANN001, ANN201
    admin_page.set_viewport_size({"width": 1280, "height": 700})
    state = _open_bar(admin_page, live_server)

    assert admin_page.locator(CHAT).get_attribute("collapse-to") == "bar"
    assert state["collapsed"] is True
    assert state["barHeight"] > 0
    assert state["barBox"] == [0, 700 - state["barHeight"], 1280, 700], state
    # The published height, and only that. Fed into the component's own inset it
    # can flip the bar it is measuring.
    assert state["published"] == f"{state['barHeight']}px"
    assert state["rootInset"] == ""
    assert state["chatInset"] == ""


@override_settings(DJANGO_ADMIN_AGENT=BAR_SETTINGS)
@pytest.mark.parametrize(
    ("page_kind", "row", "window_height"),
    [("changelist", ".paginator", 700), ("change form", ".submit-row", 400)],
)
def test_the_admins_last_row_comes_clear_of_the_bar(  # noqa: ANN201
    admin_page,  # noqa: ANN001
    live_server,  # noqa: ANN001
    page_kind,  # noqa: ANN001
    row,  # noqa: ANN001
    window_height,  # noqa: ANN001
):
    Author.objects.bulk_create(
        [Author(name=f"Author {n}", email=f"a{n}@example.com") for n in range(120)]
    )
    path = (
        "/admin/testapp/author/"
        if page_kind == "changelist"
        else f"/admin/testapp/author/{Author.objects.first().pk}/change/"
    )
    admin_page.set_viewport_size({"width": 1280, "height": window_height})
    _open_bar(admin_page, live_server, path)

    foot = admin_page.evaluate(_ROW_AT_THE_FOOT, [CHAT, row])

    assert foot["scrolled"] is True, foot
    assert foot["rowBottom"] <= foot["barTop"], foot
    assert foot["covered"] is False, foot


@override_settings(DJANGO_ADMIN_AGENT=BAR_SETTINGS)
def test_the_navs_last_row_scrolls_clear_of_the_bar(admin_page, live_server):  # noqa: ANN001, ANN201
    Author.objects.bulk_create(
        [Author(name=f"Author {n}", email=f"a{n}@example.com") for n in range(60)]
    )
    admin_page.set_viewport_size({"width": 1280, "height": 240})
    _open_bar(admin_page, live_server)

    foot = admin_page.evaluate(_NAV_FOOT, CHAT)

    assert foot["navScrolls"] is True, foot
    assert foot["rowBottom"] <= foot["barTop"], foot


@override_settings(DJANGO_ADMIN_AGENT=BAR_SETTINGS)
def test_a_phone_gets_the_room_back_while_the_open_panel_covers_the_bar(admin_page, live_server):  # noqa: ANN001, ANN201
    admin_page.set_viewport_size({"width": 390, "height": 844})
    collapsed = _open_bar(admin_page, live_server)
    assert collapsed["contentMargin"] == f"{collapsed['barHeight']}px", collapsed

    open_sidebar(admin_page)
    opened = _settle(admin_page, "none")
    assert opened["published"] == "0px", opened
    assert opened["contentMargin"] == "0px", opened

    admin_page.evaluate("(s) => document.querySelector(s).setCollapsed(true)", CHAT)
    back = _settle(admin_page, "bar")
    assert back["contentMargin"] == f"{back['barHeight']}px", back


@override_settings(DJANGO_ADMIN_AGENT=BAR_SETTINGS)
def test_a_panel_filling_the_window_gives_the_room_back_and_its_header_is_the_way_back(  # noqa: ANN201
    admin_page,  # noqa: ANN001
    live_server,  # noqa: ANN001
):
    """A project's own size can fill the window: the bar and the grips go then."""
    admin_page.set_viewport_size({"width": 1280, "height": 700})
    _open_bar(admin_page, live_server)
    open_sidebar(admin_page)
    admin_page.add_style_tag(
        content=f"""{CHAT} {{
          --ag-ui-width: 100vw;
          --ag-ui-height: 100vh;
          --ag-ui-max-width: none;
          --ag-ui-max-height: none;
        }}"""
    )

    filled = _settle(admin_page, "none")
    assert filled["published"] == "0px", filled
    assert filled["contentMargin"] == "0px", filled

    admin_page.evaluate(
        """(s) => document.querySelector(s).shadowRoot
             .querySelector('[part~="collapse-button"]')
             .click()""",
        CHAT,
    )
    back = _settle(admin_page, "bar")
    assert back["collapsed"] is True, back
    assert back["contentMargin"] == f"{back['barHeight']}px", back


@override_settings(DJANGO_ADMIN_AGENT=BAR_SETTINGS)
def test_a_reload_makes_room_again_whichever_state_it_comes_back_in(admin_page, live_server):  # noqa: ANN001, ANN201
    admin_page.set_viewport_size({"width": 1280, "height": 700})
    _open_bar(admin_page, live_server)
    open_sidebar(admin_page)
    opened = _settle(admin_page, "bar")
    # Above a phone's width the bar stays beneath the open panel.
    assert opened["collapsed"] is False, opened

    admin_page.reload()
    reopened = _settle(admin_page, "bar")
    assert reopened["collapsed"] is False, reopened
    assert reopened["contentMargin"] == f"{reopened['barHeight']}px", reopened

    admin_page.evaluate("(s) => document.querySelector(s).setCollapsed(true)", CHAT)
    admin_page.reload()
    collapsed = _settle(admin_page, "bar")
    assert collapsed["collapsed"] is True, collapsed
    assert collapsed["contentMargin"] == f"{collapsed['barHeight']}px", collapsed


@override_settings(DJANGO_ADMIN_AGENT=BAR_SETTINGS)
def test_the_room_is_made_under_a_strict_style_src(admin_page, live_server):  # noqa: ANN001, ANN201
    """A property set through the CSSOM is what ``style-src`` admits, unlike a style attribute.

    ``'none'`` is the control: it refuses the sheet that turns the property into
    room, so a margin that survived it would mean the header never reached the
    page and the first half proved nothing.
    """
    url = f"{live_server.url}/admin/testapp/author/"

    def under(policy):  # noqa: ANN001, ANN202
        def with_policy(route):  # noqa: ANN001, ANN202
            response = route.fetch()
            route.fulfill(
                response=response,
                headers={**response.headers, "content-security-policy": policy},
            )

        admin_page.unroute(url)
        admin_page.route(url, with_policy)
        admin_page.goto(url)
        return _settle(admin_page, "bar")

    admitted = under("style-src 'self'")
    assert admitted["contentMargin"] == f"{admitted['barHeight']}px", admitted

    refused = under("style-src 'none'")
    assert refused["contentMargin"] == "0px", refused


@override_settings(DJANGO_ADMIN_AGENT=BAR_SETTINGS)
@pytest.mark.parametrize(
    ("row", "property_name"),
    [
        ("#content", "margin-bottom"),
        ("#nav-sidebar", "padding-bottom"),
    ],
)
def test_an_unlayered_project_rule_beats_the_room_the_sidebar_makes(  # noqa: ANN201
    admin_page,  # noqa: ANN001
    live_server,  # noqa: ANN001
    row,  # noqa: ANN001
    property_name,  # noqa: ANN001
):
    """The least weight a rule can have, one type selector, wins against none.

    The sheet is linked from the body, after anything in the head, so a rule of no
    weight at all would lose on order. Dropping ``:where()`` from the sheet's rule
    gives it more than this one has.
    """
    _open_bar(admin_page, live_server)

    admin_page.add_style_tag(content=f"html :where({row}) {{ {property_name}: 7px; }}")

    assert admin_page.evaluate(_COMPUTED, [row, property_name]) == "7px"


@override_settings(DJANGO_ADMIN_AGENT=BAR_SETTINGS)
def test_a_layered_project_rule_loses_to_the_room_the_sidebar_makes(admin_page, live_server):  # noqa: ANN001, ANN201
    """The cascade has an unlayered rule beat a layered one whatever the specificity."""
    state = _open_bar(admin_page, live_server)

    admin_page.add_style_tag(content="@layer mine { #content { margin-bottom: 7px; } }")

    assert admin_page.evaluate(_COMPUTED, ["#content", "margin-bottom"]) == (
        f"{state['barHeight']}px"
    )


@pytest.mark.parametrize("settings", [{}, {"COLLAPSE_TO": "none"}, {"COLLAPSE_TO": "auto"}])
def test_without_the_bar_the_page_and_the_launcher_stay_as_they_are(
    admin_page, live_server, settings
):  # noqa: ANN001, ANN201
    """``"none"`` above all: the admin has no control that could reopen the panel."""
    with override_settings(DJANGO_ADMIN_AGENT=settings):
        admin_page.goto(f"{live_server.url}/admin/testapp/author/")
        chat = admin_page.locator(CHAT)
        expect(chat).to_be_attached()
        expect(chat.locator(".launcher")).to_be_visible()

        assert chat.get_attribute("collapse-to") is None
        state = admin_page.evaluate(
            """() => ({
              stamped: document.documentElement.hasAttribute("data-django-admin-agent-bar"),
              published: document.documentElement.style.getPropertyValue(
                "--django-admin-agent-bar-height"
              ),
              margin: getComputedStyle(document.getElementById("content")).marginBottom,
              padding: getComputedStyle(document.getElementById("nav-sidebar")).paddingBottom,
              sizing: getComputedStyle(document.getElementById("nav-sidebar")).boxSizing,
            })"""
        )
        assert state == {
            "stamped": False,
            "published": "",
            "margin": "0px",
            "padding": "0px",
            "sizing": "content-box",
        }

        # A rule of the sheet's out of its scope would compute to nothing and still
        # win, since an unlayered rule beats any layered one. Zero alone cannot tell.
        admin_page.add_style_tag(
            content="""@layer mine {
              #content { margin-bottom: 9px; }
              #nav-sidebar { padding-bottom: 9px; }
            }"""
        )
        assert admin_page.evaluate(_COMPUTED, ["#content", "margin-bottom"]) == "9px"
        assert admin_page.evaluate(_COMPUTED, ["#nav-sidebar", "padding-bottom"]) == "9px"

        open_sidebar(admin_page)


@pytest.mark.parametrize("placement", [None, "bottom-left", "side", "full"])
def test_the_placements_the_launcher_collapses_from_draw_the_bar_and_make_room(  # noqa: ANN201
    admin_page,  # noqa: ANN001
    live_server,  # noqa: ANN001
    placement,  # noqa: ANN001
):
    config = {**BAR_SETTINGS, **({"PLACEMENT": placement} if placement else {})}
    with override_settings(DJANGO_ADMIN_AGENT=config):
        admin_page.set_viewport_size({"width": 1280, "height": 700})
        state = _open_bar(admin_page, live_server)

    assert state["stamped"] is True, state
    assert state["barHeight"] > 0, state
    assert state["contentMargin"] == f"{state['barHeight']}px", state


@pytest.mark.parametrize("placement", ["sidebar", "embedded", "page"])
def test_a_placement_that_never_draws_the_bar_leaves_the_page_untouched(  # noqa: ANN201
    admin_page,  # noqa: ANN001
    live_server,  # noqa: ANN001
    placement,  # noqa: ANN001
):
    """``collapse-to`` is rendered all the same: the component decides it means nothing here."""
    with override_settings(DJANGO_ADMIN_AGENT={**BAR_SETTINGS, "PLACEMENT": placement}):
        admin_page.set_viewport_size({"width": 1280, "height": 700})
        admin_page.goto(f"{live_server.url}/admin/testapp/author/")
        admin_page.wait_for_function(
            "(s) => { const c = document.querySelector(s); return c && c.barHeight !== undefined; }",
            arg=CHAT,
        )

        chat = admin_page.locator(CHAT)
        assert chat.get_attribute("collapse-to") == "bar"
        assert chat.get_attribute("data-collapsed-to") != "bar"
        state = admin_page.evaluate(
            """(selector) => ({
              height: document.querySelector(selector).barHeight,
              stamped: document.documentElement.hasAttribute("data-django-admin-agent-bar"),
              published: document.documentElement.style.getPropertyValue(
                "--django-admin-agent-bar-height"
              ),
              margin: getComputedStyle(document.getElementById("content")).marginBottom,
              padding: getComputedStyle(document.getElementById("nav-sidebar")).paddingBottom,
              sizing: getComputedStyle(document.getElementById("nav-sidebar")).boxSizing,
            })""",
            CHAT,
        )
        assert state == {
            "height": 0,
            "stamped": False,
            "published": "",
            "margin": "0px",
            "padding": "0px",
            "sizing": "content-box",
        }


_PANEL_ENDS = """(selector) => {
  const panel = document.querySelector(selector).getBoundingClientRect();
  return { left: panel.left, right: innerWidth - panel.right };
}"""


@pytest.mark.parametrize(
    ("placement", "width"),
    [(None, 1280), (None, 390), ("bottom-left", 1280), ("bottom-left", 390)],
)
def test_the_title_opens_the_panel_at_the_end_of_the_bar_its_placement_keeps(  # noqa: ANN201
    admin_page,  # noqa: ANN001
    live_server,  # noqa: ANN001
    placement,  # noqa: ANN001
    width,  # noqa: ANN001
):
    config = {**BAR_SETTINGS, **({"PLACEMENT": placement} if placement else {})}
    with override_settings(DJANGO_ADMIN_AGENT=config):
        admin_page.set_viewport_size({"width": width, "height": 700})
        state = _open_bar(admin_page, live_server)
        chat = admin_page.locator(CHAT)

        # The strip itself is not the control: only its title button opens the panel.
        admin_page.mouse.click(width / 2, state["barBox"][1] + state["barHeight"] / 2)
        admin_page.wait_for_timeout(200)
        assert chat.get_attribute("collapsed") is not None

        chat.locator(".launcher").click()
        expect(chat.locator(".input")).to_be_visible()
        admin_page.wait_for_timeout(400)

        ends = admin_page.evaluate(_PANEL_ENDS, CHAT)
        assert ends["left" if placement == "bottom-left" else "right"] <= 24, ends


def _drag_header(page, by_x=-200, by_y=-120):  # noqa: ANN001, ANN202
    panel = page.locator(CHAT)
    header = panel.locator(".header")
    box = header.bounding_box()
    grip_x = box["x"] + 60
    grip_y = box["y"] + box["height"] / 2
    page.mouse.move(grip_x, grip_y)
    page.mouse.down()
    page.mouse.move(grip_x + by_x, grip_y + by_y, steps=8)
    page.mouse.up()
    return header.bounding_box()


@override_settings(DJANGO_ADMIN_AGENT=BAR_SETTINGS)
def test_a_docked_panel_moves_by_its_header_and_remembers_its_spot(admin_page, live_server):  # noqa: ANN001, ANN201
    admin_page.set_viewport_size({"width": 1280, "height": 800})
    _open_bar(admin_page, live_server)
    open_sidebar(admin_page)
    admin_page.wait_for_timeout(400)
    docked = admin_page.locator(f"{CHAT} .header").bounding_box()

    bar = admin_page.locator(f"{CHAT} [part~='bar']").bounding_box()

    moved = _drag_header(admin_page)
    assert moved["x"] < docked["x"] - 100, (docked, moved)
    assert moved["y"] < docked["y"] - 60, (docked, moved)
    # The panel moves over the bar, which stays along the foot of the window.
    assert admin_page.locator(f"{CHAT} [part~='bar']").bounding_box() == bar

    admin_page.reload()
    expect(admin_page.locator(f"{CHAT} .input")).to_be_visible()
    remembered = admin_page.locator(f"{CHAT} .header").bounding_box()
    assert abs(remembered["x"] - moved["x"]) <= 1, (moved, remembered)
    assert abs(remembered["y"] - moved["y"]) <= 1, (moved, remembered)

    admin_page.evaluate("(s) => document.querySelector(s).resetSize()", CHAT)
    admin_page.wait_for_function(
        "([s, x]) => document.querySelector(s).shadowRoot.querySelector('.header')"
        ".getBoundingClientRect().x > x",
        arg=[CHAT, moved["x"] + 100],
    )


@override_settings(DJANGO_ADMIN_AGENT={**BAR_SETTINGS, "LAUNCHER_DRAG": False})
def test_launcher_drag_off_keeps_the_panel_on_its_dock(admin_page, live_server):  # noqa: ANN001, ANN201
    admin_page.set_viewport_size({"width": 1280, "height": 800})
    _open_bar(admin_page, live_server)
    open_sidebar(admin_page)
    admin_page.wait_for_timeout(400)
    docked = admin_page.locator(f"{CHAT} .header").bounding_box()

    moved = _drag_header(admin_page)
    admin_page.wait_for_timeout(200)

    assert moved["x"] == pytest.approx(docked["x"], abs=1)
    assert moved["y"] == pytest.approx(docked["y"], abs=1)
    assert (
        admin_page.evaluate("(s) => document.querySelector(s).describeSurface().movable", CHAT)
        is False
    )
