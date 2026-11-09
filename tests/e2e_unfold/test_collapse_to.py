"""``COLLAPSE_TO="bar"`` under Django Unfold, whose foot is not Django's.

From its ``lg`` breakpoint Unfold pins its save row, its pagination row and its
bulk actions to the foot of the window, so a margin on the page lifts none of them:
without their own offset the bar lies over the Save button at any scroll. Below it
the two rows are in the flow at the end of ``#main``, after ``#content``, where they
need a margin of their own. Its nav's inner box is a window tall too, with the user
menu at its foot.

``uv.lock`` resolves two Unfolds, 0.110.1 from Python 3.12 and 0.91.0 below it, so
these hold on both. ``docs/unfold.md`` says where the two differ.
"""

from __future__ import annotations

import pytest
from django.contrib.admin.models import CHANGE, LogEntry
from django.contrib.contenttypes.models import ContentType
from django.test import override_settings

from tests.testapp.models import Author

pytestmark = [pytest.mark.e2e, pytest.mark.django_db(transaction=True)]

CHAT = "ag-ui-chat#django-admin-agent"
SETTINGS = {"COLLAPSE_TO": "bar"}
PAGINATION = '[class~="lg:sticky"]:not(#submit-row)'
# By structure, not by the class names the sheet reads, which differ by version.
BULK_ACTIONS = ":has(> #changelist-actions-wrapper)"

_CLEAR = """([selector, row]) => {
  const chat = document.querySelector(selector);
  const bar = chat.shadowRoot.querySelector('[part~="bar"]').getBoundingClientRect();
  const box = document.querySelector(row).getBoundingClientRect();
  const hit = document.elementFromPoint(box.left + box.width / 2, box.top + box.height / 2);
  return { barTop: bar.top, rowBottom: box.bottom, covered: hit === chat, drawn: box.height > 0 };
}"""


# Every rule the sheet adds under the bar, on a page where each has a row to reach,
# at a width where each applies. Both project-rule tests read this table.
_RULES = [
    pytest.param("#content", "margin-bottom", 1500, id="page-margin"),
    pytest.param("#nav-sidebar", "padding-bottom", 1500, id="nav-padding"),
    pytest.param("#nav-sidebar-inner", "min-height", 1500, id="nav-inner-height"),
    pytest.param(BULK_ACTIONS, "bottom", 1500, id="bulk-actions-offset"),
    pytest.param(PAGINATION, "bottom", 1500, id="sticky-row-offset"),
    pytest.param(PAGINATION, "margin-bottom", 800, id="row-in-the-flow-margin"),
]

_COMPUTED = """([row, property]) =>
  getComputedStyle(document.querySelector(row)).getPropertyValue(property)"""


def _open(page, live_server, path, width=1500, height=700):  # noqa: ANN001, ANN202
    page.set_viewport_size({"width": width, "height": height})
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
def test_a_page_with_no_pinned_row_ends_clear_of_the_bar(admin_page, live_server, admin_user_pk):  # noqa: ANN001, ANN201
    """An object's history pins nothing to the foot, so only the page's margin lifts it."""
    _authors(1)
    author = Author.objects.get()
    LogEntry.objects.bulk_create(
        [
            LogEntry(
                user_id=admin_user_pk,
                content_type=ContentType.objects.get_for_model(Author),
                object_id=str(author.pk),
                object_repr=str(author),
                action_flag=CHANGE,
                change_message=f"Change {n}",
            )
            for n in range(40)
        ]
    )
    _open(admin_page, live_server, f"/admin/testapp/author/{author.pk}/history/")

    state = admin_page.evaluate(
        """(selector) => {
          window.scrollTo(0, document.documentElement.scrollHeight);
          const chat = document.querySelector(selector);
          const bar = chat.shadowRoot.querySelector('[part~="bar"]').getBoundingClientRect();
          const drawn = [...document.querySelectorAll("#content *")].filter(
            (el) => el.children.length === 0 && el.textContent.trim() !== ""
              && el.getBoundingClientRect().height > 0,
          );
          const last = drawn[drawn.length - 1];
          return {
            barTop: bar.top,
            last: last.textContent.trim(),
            lastBottom: last.getBoundingClientRect().bottom,
            contentBottom: document.getElementById("content").getBoundingClientRect().bottom,
            scrolled: document.documentElement.scrollHeight > innerHeight,
          };
        }""",
        CHAT,
    )

    assert state["scrolled"] is True, state
    assert state["lastBottom"] <= state["barTop"], state
    assert state["contentBottom"] <= state["barTop"], state


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
@pytest.mark.parametrize(
    ("page_kind", "row", "width", "height"),
    [
        pytest.param("form", "#submit-row button[name=_save]", 390, 844, id="save-on-a-phone"),
        pytest.param("form", "#submit-row button[name=_save]", 390, 420, id="save-scrolled"),
        pytest.param("form", "#submit-row button[name=_save]", 768, 1024, id="save-on-a-tablet"),
        pytest.param("form", "#submit-row button[name=_save]", 1023, 768, id="save-at-the-edge"),
        pytest.param("list", PAGINATION, 800, 700, id="pagination-at-800"),
        pytest.param("list", PAGINATION, 390, 844, id="pagination-on-a-phone"),
    ],
)
def test_below_the_breakpoint_a_row_in_the_flow_comes_clear_of_the_bar(  # noqa: ANN201
    admin_page,  # noqa: ANN001
    live_server,  # noqa: ANN001
    page_kind,  # noqa: ANN001
    row,  # noqa: ANN001
    width,  # noqa: ANN001
    height,  # noqa: ANN001
):
    """Below ``lg`` the row follows ``#content``, so its margin is what lifts it.

    The offset stays gated: on ``position: relative`` it would shift the row over the
    one above and leave the room where it was. On a form short enough not to scroll,
    the room is what brings a Save button under the bar back into reach.
    """
    _authors()
    path = (
        "/admin/testapp/author/"
        if page_kind == "list"
        else f"/admin/testapp/author/{Author.objects.first().pk}/change/"
    )
    _open(admin_page, live_server, path, width=width, height=height)

    admin_page.evaluate("window.scrollTo(0, document.documentElement.scrollHeight)")

    _assert_clear(admin_page, row)
    bottom = admin_page.evaluate(
        _COMPUTED, ["#submit-row" if page_kind == "form" else row, "bottom"]
    )
    assert bottom == "auto" or bottom == "0px", bottom


@override_settings(DJANGO_ADMIN_AGENT=SETTINGS)
def test_from_the_breakpoint_the_row_takes_the_offset_and_not_the_margin_too(  # noqa: ANN201
    admin_page,  # noqa: ANN001
    live_server,  # noqa: ANN001
):
    """A margin on a sticky row at its window's foot would lift it a second time."""
    _authors()
    _open(admin_page, live_server, "/admin/testapp/author/", width=1024, height=768)

    admin_page.evaluate("window.scrollTo(0, 0)")

    assert admin_page.evaluate(_COMPUTED, [PAGINATION, "margin-bottom"]) == "0px"
    state = admin_page.evaluate(_CLEAR, [CHAT, PAGINATION])
    assert state["rowBottom"] == state["barTop"], state


@override_settings(DJANGO_ADMIN_AGENT=SETTINGS)
@pytest.mark.parametrize("width", [800, 390])
def test_below_the_breakpoint_the_bulk_actions_are_where_the_guide_says(  # noqa: ANN201
    admin_page,  # noqa: ANN001
    live_server,  # noqa: ANN001
    width,  # noqa: ANN001
):
    """Clear where the row carries the class the sheet reads, and under the bar where not.

    0.91.0 and 0.81.0 use ``lg:bottom-[64px]``, which no selector reads.
    """
    _authors(3)
    _open(admin_page, live_server, "/admin/testapp/author/", width=width, height=844)

    admin_page.locator("input.action-select").first.check(force=True)
    admin_page.locator("#changelist-actions-wrapper").wait_for(state="visible")

    if admin_page.evaluate(
        "(row) => document.querySelector(row).classList.contains('lg:bottom-0')", BULK_ACTIONS
    ):
        _assert_clear(admin_page, BULK_ACTIONS)
    else:
        state = admin_page.evaluate(_CLEAR, [CHAT, BULK_ACTIONS])
        assert state["rowBottom"] > state["barTop"], state


@override_settings(DJANGO_ADMIN_AGENT=SETTINGS)
def test_the_offset_leaves_unfolds_other_fixed_boxes_alone(admin_page, live_server):  # noqa: ANN001, ANN201
    """The nav is ``fixed`` too, with ``bottom-0``: the selector has to want more than that."""
    _open(admin_page, live_server, "/admin/testapp/author/")

    assert admin_page.evaluate(_COMPUTED, ["#nav-sidebar", "bottom"]) == "0px"


@override_settings(DJANGO_ADMIN_AGENT=SETTINGS)
@pytest.mark.parametrize(("row", "property_name", "width"), _RULES)
def test_an_unlayered_project_rule_beats_each_rule_the_sheet_adds(  # noqa: ANN201
    admin_page,  # noqa: ANN001
    live_server,  # noqa: ANN001
    row,  # noqa: ANN001
    property_name,  # noqa: ANN001
    width,  # noqa: ANN001
):
    """The least weight a rule can have, one type selector, wins against none.

    The sheet is linked from the body, after anything in the head, so a rule of no
    weight at all would lose on order. Dropping ``:where()`` from the sheet's rule
    gives it more than this one has.
    """
    _authors()
    _open(admin_page, live_server, "/admin/testapp/author/", width=width)

    admin_page.add_style_tag(content=f"html :where({row}) {{ {property_name}: 7px; }}")

    assert admin_page.evaluate(_COMPUTED, [row, property_name]) == "7px"


@pytest.mark.parametrize(("row", "property_name", "width"), _RULES)
def test_without_the_bar_a_layered_project_rule_keeps_its_value(  # noqa: ANN201
    admin_page,  # noqa: ANN001
    live_server,  # noqa: ANN001
    row,  # noqa: ANN001
    property_name,  # noqa: ANN001
    width,  # noqa: ANN001
):
    """A rule of the sheet's out of its scope would compute to nothing and still win.

    An unlayered rule beats any layered one, and an Unfold project's Tailwind is layered.
    """
    _authors()
    admin_page.set_viewport_size({"width": width, "height": 700})
    admin_page.goto(f"{live_server.url}/admin/testapp/author/")
    admin_page.locator(CHAT).locator(".launcher").wait_for(state="visible")

    admin_page.add_style_tag(content=f"@layer mine {{ :where({row}) {{ {property_name}: 9px; }} }}")

    assert admin_page.evaluate(_COMPUTED, [row, property_name]) == "9px"


def test_without_the_bar_selecting_a_row_leaves_the_bulk_actions_on_their_own_foot(  # noqa: ANN201
    admin_page,  # noqa: ANN001
    live_server,  # noqa: ANN001
):
    """``0px`` on 0.110.1, and on 0.91.0 the ``64px`` above its pagination row."""
    _authors(3)
    admin_page.set_viewport_size({"width": 1500, "height": 700})
    admin_page.goto(f"{live_server.url}/admin/testapp/author/")
    admin_page.locator(CHAT).locator(".launcher").wait_for(state="visible")

    admin_page.locator("input.action-select").first.check(force=True)
    admin_page.locator("#changelist-actions-wrapper").wait_for(state="visible")

    assert admin_page.evaluate(_COMPUTED, [BULK_ACTIONS, "bottom"]) in ("0px", "64px")


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
