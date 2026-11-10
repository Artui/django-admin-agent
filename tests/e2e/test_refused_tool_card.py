from __future__ import annotations

import pytest
from playwright.sync_api import expect

from tests.e2e.conftest import open_sidebar, send_message

pytestmark = [pytest.mark.e2e, pytest.mark.django_db(transaction=True)]


def _expect_folded_into_a_failed_group(page) -> None:  # noqa: ANN001
    """The card sits in the step group the grouped default folds it into."""
    group = page.locator("ag-ui-chat .tool-group")
    expect(group).to_have_count(1)
    expect(group.locator(".tool-call")).to_have_count(1)
    expect(group).to_have_attribute("data-state", "error")
    expect(group.locator(".tool-group-head")).to_contain_text("1 failed")


def test_a_refused_tool_call_settles_its_card_as_an_error(admin_page, live_server):  # noqa: ANN001, ANN201
    admin_page.goto(f"{live_server.url}/admin/")

    send_message(admin_page, "how many widgets are there?")

    # The run completing is not evidence of anything here.
    expect(
        admin_page.locator("ag-ui-chat .message--assistant", has_text="not installed here"),
    ).to_be_visible(timeout=15000)

    card = admin_page.locator("ag-ui-chat .tool-call")
    expect(card).to_have_count(1)
    expect(card).to_have_attribute("data-status", "error")
    _expect_folded_into_a_failed_group(admin_page)


def test_a_refused_tool_call_still_reads_as_refused_after_a_reload(admin_page, live_server):  # noqa: ANN001, ANN201
    """The stored copy says what the live stream said."""
    admin_page.goto(f"{live_server.url}/admin/")
    send_message(admin_page, "how many widgets are there?")
    reply = admin_page.locator("ag-ui-chat .message--assistant", has_text="not installed here")
    expect(reply).to_be_visible(timeout=15000)
    expect(admin_page.locator("ag-ui-chat .tool-call")).to_have_attribute("data-status", "error")

    admin_page.reload()
    open_sidebar(admin_page)

    expect(reply).to_be_visible(timeout=15000)
    card = admin_page.locator("ag-ui-chat .tool-call")
    expect(card).to_have_count(1)
    expect(card).to_have_attribute("data-status", "error")
    _expect_folded_into_a_failed_group(admin_page)
