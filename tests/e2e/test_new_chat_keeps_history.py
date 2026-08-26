"""Starting a new chat must not destroy the conversation it left.

A host-visible guarantee, not a version assertion: whatever the sidebar vendors,
pressing the header's new-chat button is how a user starts a second
conversation, and it must not be how they lose the first one.

The sidebar is squarely in the blast radius of getting this wrong. The template
sets ``data-threads-url`` whenever a conversation store is mounted, and against a
component that cleared the active thread on its way to the next id, that
attribute turned the press into a ``DELETE`` -- the conversation was gone from
the history drawer *and* from the server, by the same affordance a user reaches
for to keep it.
"""

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
