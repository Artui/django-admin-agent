"""What the re-vendored web component actually gives an admin, in a real browser.

A re-vendor is not an adoption. The bundle is a build artefact from another
repository, and swapping it changes what every admin using this package sees
without a line of Python moving -- so the question worth answering here is not
"did the file change" (``tests/test_vendored_bundle.py`` covers that) but "did
the capability reach the sidebar".

These are deliberately about *this* package's configuration rather than the
component's own behaviour, which its suite already covers. The sidebar leaves
``placement`` unset unless a project sets ``PLACEMENT``, so the default admin
gets the floating panel -- and that is the placement the resize grips and the
draggable launcher apply to. A project that docks the sidebar gets neither, by
the component's own rules, which is why the placement is asserted first.

Run with ``make test-e2e``.
"""

from __future__ import annotations

import pytest
from playwright.sync_api import expect

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

    # Unset, not "floating": the template omits the attribute entirely when no
    # PLACEMENT is configured, and the component's default is the floating
    # panel. Asserting the absence is what would catch a template that started
    # emitting a docked default.
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

    chat.locator(".header-btn--collapse").click()
    launcher = chat.locator(".launcher")
    expect(launcher).to_be_visible()
    # The collapse animates, and a box read mid-transition is a scaled one.
    admin_page.wait_for_timeout(500)

    start = admin_page.evaluate(_LAUNCHER_BOX)
    # Real mouse input rather than synthesised events: the drag threshold, the
    # click the browser fires at the end of it, and the pointer capture are all
    # things only the browser produces.
    admin_page.mouse.move(start["x"] + start["size"] / 2, start["y"] + start["size"] / 2)
    admin_page.mouse.down()
    admin_page.mouse.move(160, 160, steps=8)
    admin_page.mouse.up()
    admin_page.wait_for_timeout(200)

    moved = admin_page.evaluate(_LAUNCHER_BOX)
    assert moved["x"] < start["x"], "the launcher did not follow the drag"
    # Dropped near the top left, so the room is down and to the right.
    expect(chat).to_have_attribute("data-expand-corner", "top-left")

    # And the drag's own click must not have counted as a press on the button.
    expect(launcher).to_be_visible()
    launcher.click()
    expect(chat.locator(".chat")).to_be_visible()
    panel = chat.bounding_box()
    assert panel is not None
    # The panel opens from the launcher's own corner, running down and right.
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
    '<th>Status</th><th>Amount requested</th><th>Amount approved</th><th>Inspector</th></tr></thead>' +
    '<tbody><tr><td>Foundation waterproofing</td><td>DR-2026-0184</td><td>Pending lien waiver</td>' +
    '<td>Awaiting inspection</td><td>$184,500.00</td><td>$172,300.00</td><td>M. Okonkwo</td></tr></tbody></table>';
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
    """The vendored stylesheet's table rule, exercised where admins meet it.

    The component's own suite covers this, but the bundle is a build artefact
    from another repository: what this asserts is that the *vendored* bytes carry
    the fix, which is the only question this package can answer. Before it, a
    seven-column header rendered one letter per line at 162px tall and the
    table's own `overflow-x: auto` had nothing to scroll.
    """
    admin_page.goto(f"{live_server.url}/admin/testapp/author/")

    measured = admin_page.evaluate(_MEASURE_TABLE)

    assert measured["scrolls"], "the table absorbed the width instead of scrolling"
    # One letter per line took this past 160px; a line of text is well under 60.
    assert measured["headerHeight"] < 60
    # The declaration that caused it, as the cell computes it. `break-word` here
    # is the legacy "break anywhere", and min-content follows it.
    assert measured["cellWordBreak"] == "normal"
