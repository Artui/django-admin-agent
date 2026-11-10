from __future__ import annotations

import pytest
from playwright.sync_api import expect

from tests.e2e.conftest import send_message

pytestmark = [pytest.mark.e2e, pytest.mark.django_db(transaction=True)]

_FIRST_MESSAGE = "how many authors are there?"


def test_new_chat_leaves_the_previous_conversation_in_the_drawer(admin_page, live_server):  # noqa: ANN001, ANN201
    admin_page.goto(f"{live_server.url}/admin/testapp/author/")
    chat = admin_page.locator("ag-ui-chat#django-admin-agent")

    send_message(admin_page, _FIRST_MESSAGE)
    expect(
        chat.locator(".message--assistant", has_text="Counted the authors."),
    ).to_be_visible(timeout=15000)

    chat.locator(".header-btn--new").click()
    # The transcript is cleared, which is what the button is for.
    expect(chat.locator(".message--assistant")).to_have_count(0)

    chat.locator(".header-btn--history").click()
    expect(chat.locator(".drawer-empty")).to_have_count(0)
    expect(chat.locator(".drawer-row", has_text=_FIRST_MESSAGE)).to_have_count(1)
