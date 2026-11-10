from __future__ import annotations

import pytest
from django.test import override_settings
from playwright.sync_api import expect

from tests.e2e.conftest import open_sidebar, send_message

pytestmark = [pytest.mark.e2e, pytest.mark.django_db(transaction=True)]

# The launcher's box with its transform divided out.
#
# It is scaled in four states -- the collapse animation, hover, press, and the
# resting scale behind an open panel -- and getBoundingClientRect reports every
# one of them, so a box read straight off it is a couple of pixels adrift.
# Reading it that way is what made the first version of this test fail by 1.7px
# with nothing wrong. A centred scale cannot move the centre, and offsetWidth is
# a layout metric no transform reaches, so the two together give the real box.
_LAUNCHER_BOX = """
() => {
  const el = document.querySelector('ag-ui-chat#django-admin-agent');
  const l = el.shadowRoot.querySelector('.launcher');
  const r = l.getBoundingClientRect();
  return {
    x: r.left + r.width / 2 - l.offsetWidth / 2,
    y: r.top + r.height / 2 - l.offsetHeight / 2,
    size: l.offsetWidth,
  };
}
"""

# Every edge and corner the panel can be dragged by.
_GRIPS = (
    "top",
    "bottom",
    "left",
    "right",
    "top-left",
    "top-right",
    "bottom-left",
    "bottom-right",
)


def test_the_sidebar_defaults_to_the_placement_these_affordances_need(admin_page, live_server):  # noqa: ANN001, ANN201
    admin_page.goto(f"{live_server.url}/admin/testapp/author/")
    chat = admin_page.locator("ag-ui-chat#django-admin-agent")

    # Unset, not "floating": the template omits the attribute when no PLACEMENT is set.
    expect(chat).not_to_have_attribute("placement", "sidebar")
    assert chat.get_attribute("placement") is None


def test_the_panel_offers_a_grip_on_every_edge_and_corner(admin_page, live_server):  # noqa: ANN001, ANN201
    admin_page.goto(f"{live_server.url}/admin/testapp/author/")
    chat = admin_page.locator("ag-ui-chat#django-admin-agent")

    for grip in _GRIPS:
        expect(chat.locator(f".resize-handle--{grip}")).to_have_count(1)


def test_the_collapsed_launcher_can_be_moved_and_the_panel_opens_where_it_lands(  # noqa: ANN201
    admin_page,  # noqa: ANN001
    live_server,  # noqa: ANN001
):
    admin_page.goto(f"{live_server.url}/admin/testapp/author/")
    chat = admin_page.locator("ag-ui-chat#django-admin-agent")

    # No collapse step: a corner placement arrives at its launcher from web component 0.35.0.
    launcher = chat.locator(".launcher")
    expect(launcher).to_be_visible()
    admin_page.wait_for_timeout(500)

    start = admin_page.evaluate(_LAUNCHER_BOX)
    admin_page.mouse.move(start["x"] + start["size"] / 2, start["y"] + start["size"] / 2)
    admin_page.mouse.down()
    admin_page.mouse.move(160, 160, steps=8)
    admin_page.mouse.up()
    admin_page.wait_for_timeout(200)

    moved = admin_page.evaluate(_LAUNCHER_BOX)
    assert moved["x"] < start["x"], "the launcher did not follow the drag"
    expect(chat).to_have_attribute("data-expand-corner", "top-left")

    expect(launcher).to_be_visible()
    launcher.click()
    expect(chat.locator(".chat")).to_be_visible()
    panel = chat.bounding_box()
    assert panel is not None
    assert panel["x"] == pytest.approx(moved["x"], abs=1)
    assert panel["y"] == pytest.approx(moved["y"], abs=1)
    assert panel["x"] + panel["width"] > moved["x"] + moved["size"]
    assert panel["y"] + panel["height"] > moved["y"] + moved["size"]


# Build a wide markdown-style table inside an assistant bubble, where the
# component puts one, and report what the browser laid out.
_MEASURE_TABLE = """
() => {
  const el = document.querySelector('ag-ui-chat#django-admin-agent');
  const root = el.shadowRoot;
  const messages = root.querySelector('.messages');
  messages.replaceChildren();
  const group = document.createElement('div');
  group.className = 'answer';
  const bubble = document.createElement('div');
  bubble.className = 'message message--assistant';
  bubble.innerHTML =
    '<table><thead><tr><th>Line item</th><th>Draw request</th><th>Condition</th>' +
    '<th>Status</th><th>Amount requested</th><th>Amount approved</th>' +
    '<th>Inspector</th></tr></thead>' +
    '<tbody><tr><td>Foundation waterproofing</td><td>DR-2026-0184</td>' +
    '<td>Pending lien waiver</td>' +
    '<td>Awaiting inspection</td><td>$184,500.00</td><td>$172,300.00</td>' +
    '<td>M. Okonkwo</td></tr></tbody></table>';
  group.appendChild(bubble);
  messages.appendChild(group);
  const table = bubble.querySelector('table');
  const header = bubble.querySelector('th');
  return {
    scrolls: table.scrollWidth > table.clientWidth,
    headerHeight: header.getBoundingClientRect().height,
    cellWordBreak: getComputedStyle(header).wordBreak,
  };
}
"""


def test_a_wide_table_scrolls_in_the_sidebar(admin_page, live_server):  # noqa: ANN001, ANN201
    """The vendored stylesheet's table rule, exercised where admins meet it."""
    admin_page.goto(f"{live_server.url}/admin/testapp/author/")

    measured = admin_page.evaluate(_MEASURE_TABLE)

    assert measured["scrolls"], "the table absorbed the width instead of scrolling"
    assert measured["headerHeight"] < 60
    assert measured["cellWordBreak"] == "normal"


# Drag the panel by its header and report what moved. Real mouse input, because
# the drag threshold and the pointer capture are things only the browser makes.
_HEADER_BOX = """
() => {
  const el = document.querySelector('ag-ui-chat#django-admin-agent');
  const header = el.shadowRoot.querySelector('.header');
  const r = header.getBoundingClientRect();
  return { x: r.left + r.width / 2, y: r.top + r.height / 2 };
}
"""


def test_the_open_panel_can_be_moved_by_its_header(admin_page, live_server):  # noqa: ANN001, ANN201
    """A chat sitting over the changelist it is being asked about can be moved."""
    admin_page.goto(f"{live_server.url}/admin/testapp/author/")
    chat = open_sidebar(admin_page)
    before = chat.bounding_box()
    assert before is not None

    grab = admin_page.evaluate(_HEADER_BOX)
    admin_page.mouse.move(grab["x"], grab["y"])
    admin_page.mouse.down()
    admin_page.mouse.move(grab["x"] - 200, grab["y"] - 80, steps=8)
    admin_page.mouse.up()
    admin_page.wait_for_timeout(200)

    after = chat.bounding_box()
    assert after is not None
    assert after["x"] - before["x"] == pytest.approx(-200, abs=1)
    assert after["y"] - before["y"] == pytest.approx(-80, abs=1)
    assert after["width"] == pytest.approx(before["width"], abs=1)
    assert after["height"] == pytest.approx(before["height"], abs=1)


@override_settings(DJANGO_ADMIN_AGENT={"LAUNCHER_DRAG": False})
def test_a_project_can_pin_the_sidebar_where_its_layout_puts_it(admin_page, live_server):  # noqa: ANN001, ANN201
    """`LAUNCHER_DRAG=False` stops both gestures, not one."""
    admin_page.goto(f"{live_server.url}/admin/testapp/author/")
    chat = admin_page.locator("ag-ui-chat#django-admin-agent")
    expect(chat).to_have_attribute("data-launcher-drag", "false")
    before = chat.bounding_box()
    assert before is not None

    grab = admin_page.evaluate(_HEADER_BOX)
    admin_page.mouse.move(grab["x"], grab["y"])
    admin_page.mouse.down()
    admin_page.mouse.move(grab["x"] - 200, grab["y"] - 80, steps=8)
    admin_page.mouse.up()
    admin_page.wait_for_timeout(200)

    after = chat.bounding_box()
    assert after is not None
    assert after["x"] == pytest.approx(before["x"], abs=1)
    assert after["y"] == pytest.approx(before["y"], abs=1)


def test_the_launcher_travels_with_a_panel_moved_by_its_header(admin_page, live_server):  # noqa: ANN001, ANN201
    """The bubble the sidebar collapses into goes exactly as far as the panel."""
    admin_page.goto(f"{live_server.url}/admin/testapp/author/")
    open_sidebar(admin_page)
    before = admin_page.evaluate(_LAUNCHER_BOX)

    grab = admin_page.evaluate(_HEADER_BOX)
    admin_page.mouse.move(grab["x"], grab["y"])
    admin_page.mouse.down()
    admin_page.mouse.move(grab["x"] - 200, grab["y"] - 80, steps=8)
    admin_page.mouse.up()
    admin_page.wait_for_timeout(200)

    after = admin_page.evaluate(_LAUNCHER_BOX)
    assert after["x"] - before["x"] == pytest.approx(-200, abs=1)
    assert after["y"] - before["y"] == pytest.approx(-80, abs=1)


# Widen the panel and report what the chart already in it did about it.
_MEASURE_CHART = """
(width) => {
  const el = document.querySelector('ag-ui-chat#django-admin-agent');
  el.style.setProperty('--ag-ui-width', width + 'px');
  return new Promise((resolve) => {
    requestAnimationFrame(() => requestAnimationFrame(() => requestAnimationFrame(() => {
      const svg = el.shadowRoot.querySelector('.chart-block svg');
      const box = svg.getBoundingClientRect();
      const units = Number(svg.getAttribute('viewBox').split(' ')[2]);
      resolve({
        panel: el.getBoundingClientRect().width,
        width: box.width,
        height: box.height,
        scale: box.width / units,
      });
    })));
  });
}
"""


def test_a_chart_stops_at_its_own_width_in_a_widened_sidebar(admin_page, live_server):  # noqa: ANN001, ANN201
    """Widening the sidebar does not resize the chart already in it."""
    admin_page.set_viewport_size({"width": 1400, "height": 900})
    admin_page.goto(f"{live_server.url}/admin/")
    send_message(admin_page, "chart the authors")
    expect(admin_page.locator("ag-ui-chat .chart-block")).to_be_visible(timeout=15000)

    wide = admin_page.evaluate(_MEASURE_CHART, 1100)
    narrow = admin_page.evaluate(_MEASURE_CHART, 420)

    assert wide["panel"] == pytest.approx(1100, abs=2)
    assert wide["width"] == pytest.approx(480, abs=1)
    assert wide["height"] == pytest.approx(220, abs=1)
    assert wide["scale"] == pytest.approx(1, abs=0.05)
    assert narrow["scale"] == pytest.approx(1, abs=0.05)
    assert narrow["width"] < wide["width"]


def test_the_agent_can_move_its_own_panel_off_the_page(admin_page, live_server):  # noqa: ANN001, ANN201
    """The one problem a chat pinned to its own tab never has."""
    admin_page.goto(f"{live_server.url}/admin/testapp/author/")
    open_sidebar(admin_page)
    chat = admin_page.locator("ag-ui-chat#django-admin-agent")
    before = chat.bounding_box()
    assert before is not None

    send_message(admin_page, "move out of the way")

    expect(
        chat.locator(".message--assistant", has_text="Moved the chat."),
    ).to_be_visible(timeout=15000)
    admin_page.wait_for_timeout(400)

    after = chat.bounding_box()
    assert after is not None
    assert after["x"] < before["x"], "the panel did not move"
    assert after["y"] < before["y"], "the panel did not move"
    expect(chat.locator(".run-notice--surface")).to_be_visible()
    expect(chat.locator(".run-notice-undo")).to_be_visible()


@override_settings(DJANGO_ADMIN_AGENT={"CHAT_SURFACE_TOOLS": False})
def test_a_project_can_keep_the_panel_tools_out_of_every_request(admin_page, live_server):  # noqa: ANN001, ANN201
    """Off means not registered, not registered-and-refusing."""
    admin_page.goto(f"{live_server.url}/admin/testapp/author/")
    open_sidebar(admin_page)
    chat = admin_page.locator("ag-ui-chat#django-admin-agent")
    before = chat.bounding_box()
    assert before is not None

    send_message(admin_page, "move out of the way")

    expect(
        chat.locator(".message--assistant", has_text="I can count authors"),
    ).to_be_visible(timeout=15000)
    admin_page.wait_for_timeout(400)

    after = chat.bounding_box()
    assert after is not None
    assert after["x"] == pytest.approx(before["x"], abs=1)
    assert after["y"] == pytest.approx(before["y"], abs=1)


@override_settings(DJANGO_ADMIN_AGENT={"PLACEMENT": "page"})
def test_a_full_page_chat_greets_the_admin_by_the_header_name(live_server, page, django_user_model):  # noqa: ANN001, ANN201
    """The greeting needs a name only the host knows, and the sidebar supplies it."""
    django_user_model.objects.create_superuser(
        "ada.l", "ada@example.com", "password", first_name="Ada"
    )
    page.goto(f"{live_server.url}/admin/login/")
    page.fill("#id_username", "ada.l")
    page.fill("#id_password", "password")
    page.click("input[type=submit]")
    page.wait_for_url("**/admin/")

    chat = page.locator("ag-ui-chat#django-admin-agent")
    expect(chat).to_have_attribute("placement", "page")
    expect(chat).to_have_attribute("user-name", "Ada")
    expect(page.locator("#user-tools strong")).to_have_text("Ada")
    expect(chat.locator(".greeting")).to_be_visible()
    expect(chat.locator(".greeting")).to_have_text("Hello, Ada")
