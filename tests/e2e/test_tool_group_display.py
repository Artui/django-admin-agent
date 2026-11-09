"""What an opened step group draws its calls as.

``data-tool-group-display`` is read by the component's stylesheet, so the markup
proves only that it was written. A section hidden or shown in a real browser is
what a staff user meets when they open "Worked through 1 step".
"""

from __future__ import annotations

import pytest
from django.test import override_settings
from playwright.sync_api import expect

from tests.e2e.conftest import send_message

pytestmark = [pytest.mark.e2e, pytest.mark.django_db(transaction=True)]

GROUP = "ag-ui-chat .tool-group"


def _open_the_group(page, live_server):  # noqa: ANN001, ANN202
    page.goto(f"{live_server.url}/admin/testapp/author/")
    send_message(page, "how many authors are there?")
    expect(
        page.locator("ag-ui-chat .message--assistant", has_text="Counted the authors."),
    ).to_be_visible(timeout=15000)
    page.locator(f"{GROUP} .tool-group-head").click()
    call = page.locator(f"{GROUP} .tool-call")
    expect(call).to_have_count(1)
    expect(call).to_be_visible()
    return call


def test_an_opened_group_draws_a_row_per_call_by_default(admin_page, live_server):  # noqa: ANN001, ANN201
    call = _open_the_group(admin_page, live_server)

    # One row: the arguments and the result are behind the row's own toggle.
    expect(call.locator(".tool-call-section").first).to_be_hidden()
    expect(call.locator(".tool-call-toggle")).to_be_visible()


@override_settings(DJANGO_ADMIN_AGENT={"TOOL_GROUP_DISPLAY": "full"})
def test_full_draws_the_cards_an_opened_group_drew_before(admin_page, live_server):  # noqa: ANN001, ANN201
    call = _open_the_group(admin_page, live_server)

    expect(call.locator(".tool-call-section").first).to_be_visible()


def test_a_refused_call_still_says_why_from_its_row_by_default(admin_page, live_server):  # noqa: ANN001, ANN201
    """The row is where a staff user learns an action did not happen.

    A compact row is one line, 27px where a full card is 137px, so the refusal has
    to read on that line and its reason has to be one click further down.
    """
    admin_page.goto(f"{live_server.url}/admin/")
    send_message(admin_page, "how many widgets are there?")
    expect(
        admin_page.locator("ag-ui-chat .message--assistant", has_text="not installed here"),
    ).to_be_visible(timeout=15000)

    admin_page.locator(f"{GROUP} .tool-group-head").click()
    row = admin_page.locator(f"{GROUP} .tool-call")
    expect(row).to_be_visible()
    expect(row).to_have_attribute("data-status", "error")
    expect(row.get_by_text("error", exact=False).first).to_be_visible()
    reason = row.locator(".tool-call-section").last
    expect(reason).to_be_hidden()

    row.locator(".tool-call-toggle").click()

    expect(reason).to_be_visible()
    expect(reason).to_contain_text("count_model tool failed")


def test_a_confirmation_keeps_its_arguments_and_buttons_on_screen_by_default(  # noqa: ANN201
    admin_page,  # noqa: ANN001
    live_server,  # noqa: ANN001
):
    """A compact row folds a call's arguments, which a confirmation is asking about.

    A frontend tool's confirmation is a card of its own that ends the step group,
    so the inner mode has to leave it alone.
    """
    admin_page.goto(f"{live_server.url}/admin/")
    send_message(admin_page, "press the button")

    asking = admin_page.get_by_role("group", name="Confirm action")
    expect(asking).to_be_visible(timeout=15000)
    expect(asking.get_by_text("#nothing-here")).to_be_visible()
    expect(asking.get_by_role("button", name="Confirm")).to_be_visible()
    cancel = asking.get_by_role("button", name="Cancel")
    expect(cancel).to_be_visible()

    cancel.click()

    expect(
        admin_page.locator("ag-ui-chat .message--assistant", has_text="Left the page alone."),
    ).to_be_visible(timeout=15000)
