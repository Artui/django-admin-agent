"""The in-page quote offer, driven in a real browser.

The component's transcript-side quoting needs no opt-in from this package.
``offerQuoteInPage`` does, and a vendored bundle carrying the method proves
nothing about whether anything called it -- which is the failure mode a bundle
bump has here: the capability lands, the host never opts in, and the notes say a
feature shipped that is not on screen.

Driven with a real pointer rather than asserted off the DOM, because the whole
gesture is a selection settled by a ``mouseup``, and neither of those is
something a static render has.
"""

from __future__ import annotations

import pytest
from playwright.sync_api import expect

pytestmark = [pytest.mark.e2e, pytest.mark.django_db(transaction=True)]

OFFER = ".ag-ui-quote-offer"


def _drag_across(page, selector):  # noqa: ANN001, ANN202
    """Select the text of ``selector`` the way a person would.

    A synthetic ``Range`` plus a dispatched event is the tempting shortcut and it
    tests the wrong thing: the offer hangs off the *pointer's* coordinates, so a
    selection with no pointer behind it exercises neither the placement nor the
    ``mouseup`` the listener is bound to.
    """
    box = page.locator(selector).first.bounding_box()
    assert box is not None, selector
    y = box["y"] + box["height"] / 2
    page.mouse.move(box["x"] + 2, y)
    page.mouse.down()
    page.mouse.move(box["x"] + box["width"] - 2, y, steps=8)
    page.mouse.up()


def test_selecting_in_the_admin_page_offers_a_quote(admin_page, live_server):  # noqa: ANN001, ANN201
    """The opt-in this package makes, over a changelist the agent sits beside."""
    admin_page.goto(f"{live_server.url}/admin/testapp/author/")
    expect(admin_page.locator("ag-ui-chat#django-admin-agent")).to_be_attached()

    _drag_across(admin_page, "#content h1")

    expect(admin_page.locator(OFFER)).to_be_visible(timeout=5000)


def test_taking_the_offer_puts_the_selection_in_the_composer(admin_page, live_server):  # noqa: ANN001, ANN201
    """A markdown blockquote, and nothing sent -- the question still has to be written."""
    admin_page.goto(f"{live_server.url}/admin/testapp/author/")
    expect(admin_page.locator("ag-ui-chat#django-admin-agent")).to_be_attached()

    _drag_across(admin_page, "#content h1")
    admin_page.locator(OFFER).click()

    quoted = admin_page.evaluate(
        "document.querySelector('ag-ui-chat#django-admin-agent')"
        ".shadowRoot.querySelector('textarea').value"
    )
    assert quoted.lstrip().startswith(">"), quoted
    # Nothing was sent: a quotation narrows a question, it is not one.
    expect(admin_page.locator("ag-ui-chat .message--user")).to_have_count(0)


def test_the_offer_is_scoped_to_the_admin_content(admin_page, live_server):  # noqa: ANN001, ANN201
    """Chrome nobody asks questions about gets no offer.

    The scope is a decision rather than tidiness: unscoped, every drag made to
    read the breadcrumbs or the user-tools bar becomes an offer, and the listener
    is bound to the region rather than filtered afterwards -- so this is the
    assertion that the region is the right one.
    """
    admin_page.goto(f"{live_server.url}/admin/testapp/author/")
    expect(admin_page.locator("ag-ui-chat#django-admin-agent")).to_be_attached()

    _drag_across(admin_page, "#header")

    expect(admin_page.locator(OFFER)).to_be_hidden()
