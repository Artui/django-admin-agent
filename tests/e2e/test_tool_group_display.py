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
