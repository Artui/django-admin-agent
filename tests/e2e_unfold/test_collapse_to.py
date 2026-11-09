"""``COLLAPSE_TO="bar"`` under Django Unfold, whose foot is not Django's.

Unfold pins its save row, its pagination row and its bulk actions to the foot of
the window, so a margin on the page lifts none of them: without their own offset
the bar lies over the Save button at any scroll. Its nav's inner box is a window
tall too, with the user menu at its foot.
"""

from __future__ import annotations

import pytest
from django.test import override_settings

from tests.testapp.models import Author

pytestmark = [pytest.mark.e2e, pytest.mark.django_db(transaction=True)]

CHAT = "ag-ui-chat#django-admin-agent"
SETTINGS = {"COLLAPSE_TO": "bar"}
PAGINATION = '[class~="lg:sticky"]:not(#submit-row)'
BULK_ACTIONS = '[class~="fixed"][class~="lg:bottom-0"]'

_CLEAR = """([selector, row]) => {
  const chat = document.querySelector(selector);
  const bar = chat.shadowRoot.querySelector('[part~="bar"]').getBoundingClientRect();
  const box = document.querySelector(row).getBoundingClientRect();
  const hit = document.elementFromPoint(box.left + box.width / 2, box.top + box.height / 2);
  return { barTop: bar.top, rowBottom: box.bottom, covered: hit === chat, drawn: box.height > 0 };
}"""


def _open(page, live_server, path, width=1500):  # noqa: ANN001, ANN202
    page.set_viewport_size({"width": width, "height": 700})
    page.goto(f"{live_server.url}{path}")
    page.wait_for_function(
        """(selector) => {
          const chat = document.querySelector(selector);
          return chat && chat.barHeight > 0 && document.documentElement.style
            .getPropertyValue("--django-admin-agent-bar-height") === `${chat.barHeight}px`;
        }""",
        arg=CHAT,
    )


def _assert_clear(page, row):  # noqa: ANN001, ANN202
    state = page.evaluate(_CLEAR, [CHAT, row])
    assert state["drawn"] is True, state
    assert state["rowBottom"] <= state["barTop"], state
    assert state["covered"] is False, state


def _authors(count=120):  # noqa: ANN001, ANN202
    Author.objects.bulk_create(
        [Author(name=f"Author {n}", email=f"a{n}@example.com") for n in range(count)]
    )


@override_settings(DJANGO_ADMIN_AGENT=SETTINGS)
def test_the_save_button_comes_clear_of_the_bar(admin_page, live_server):  # noqa: ANN001, ANN201
    _authors(1)
    _open(admin_page, live_server, f"/admin/testapp/author/{Author.objects.get().pk}/change/")

    _assert_clear(admin_page, "#submit-row")
    _assert_clear(admin_page, "#submit-row button[name=_save]")


@override_settings(DJANGO_ADMIN_AGENT=SETTINGS)
@pytest.mark.parametrize("scroll", ["0", "400", "document.documentElement.scrollHeight"])
def test_the_pagination_row_comes_clear_of_the_bar_at_any_scroll(admin_page, live_server, scroll):  # noqa: ANN001, ANN201
    _authors()
    _open(admin_page, live_server, "/admin/testapp/author/")

    admin_page.evaluate(f"window.scrollTo(0, {scroll})")

    _assert_clear(admin_page, PAGINATION)


@override_settings(DJANGO_ADMIN_AGENT=SETTINGS)
def test_the_bulk_actions_come_clear_of_the_bar(admin_page, live_server):  # noqa: ANN001, ANN201
    _authors(3)
    _open(admin_page, live_server, "/admin/testapp/author/")

    admin_page.locator("input.action-select").first.check(force=True)
    admin_page.locator("#changelist-actions-wrapper").wait_for(state="visible")

    _assert_clear(admin_page, BULK_ACTIONS)


@override_settings(DJANGO_ADMIN_AGENT=SETTINGS)
def test_the_nav_user_menu_comes_clear_of_the_bar(admin_page, live_server):  # noqa: ANN001, ANN201
    _open(admin_page, live_server, "/admin/testapp/author/")

    state = admin_page.evaluate(
        """(selector) => {
          const chat = document.querySelector(selector);
          const bar = chat.shadowRoot.querySelector('[part~="bar"]').getBoundingClientRect();
          const inner = document.getElementById("nav-sidebar-inner").getBoundingClientRect();
          return { barTop: bar.top, navFoot: inner.bottom };
        }""",
        CHAT,
    )
    assert state["navFoot"] <= state["barTop"], state


@override_settings(DJANGO_ADMIN_AGENT=SETTINGS)
def test_below_the_breakpoint_a_row_in_the_flow_stays_where_the_flow_puts_it(
    admin_page, live_server
):  # noqa: ANN001, ANN201
    """Below ``lg`` the save row is ``position: relative``, where an offset would shift it."""
    _authors(1)
    _open(
        admin_page,
        live_server,
        f"/admin/testapp/author/{Author.objects.get().pk}/change/",
        width=800,
    )

    bottom = admin_page.evaluate("getComputedStyle(document.getElementById('submit-row')).bottom")

    assert bottom == "auto" or bottom == "0px", bottom


def test_without_the_bar_unfolds_rows_keep_their_own_foot(admin_page, live_server):  # noqa: ANN001, ANN201
    _authors(1)
    admin_page.set_viewport_size({"width": 1500, "height": 700})
    admin_page.goto(f"{live_server.url}/admin/testapp/author/{Author.objects.get().pk}/change/")
    admin_page.locator(CHAT).locator(".launcher").wait_for(state="visible")

    state = admin_page.evaluate(
        """() => ({
          stamped: document.documentElement.hasAttribute("data-django-admin-agent-bar"),
          bottom: getComputedStyle(document.getElementById("submit-row")).bottom,
          margin: getComputedStyle(document.getElementById("content")).marginBottom,
        })"""
    )
    assert state == {"stamped": False, "bottom": "0px", "margin": "0px"}
