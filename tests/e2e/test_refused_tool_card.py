"""A tool call the server refused reads as refused in the sidebar.

The vendored component settles a tool card from an ``outcome`` the server
stamps on ``TOOL_CALL_RESULT``. Nothing else on the page distinguishes the two:
the failure policy hands a raising tool back to the model as an ordinary tool
return carrying the error, so the run finishes cleanly either way and the
assistant's reply is whatever the model makes of it.

That leaves the card as the only place a staff user learns an action did not
happen, and it is carried by a field the bundle and the server have to agree
on. Since the component moved onto the AG-UI 1.0 client they agree only from
django-ag-ui 0.63: the client deletes any field its schema does not declare, so
an ``outcome`` written anywhere but ``metadata`` is gone before the card reads
it, and the card settles to done. The unit suite cannot see that -- it never
loads the bundle -- so this is the test that holds the pin and the floor
together.

Run with ``make test-e2e``.
"""

from __future__ import annotations

import pytest
from playwright.sync_api import expect

from tests.e2e.conftest import open_sidebar, send_message

pytestmark = [pytest.mark.e2e, pytest.mark.django_db(transaction=True)]


def test_a_refused_tool_call_settles_its_card_as_an_error(admin_page, live_server):  # noqa: ANN001, ANN201
    admin_page.goto(f"{live_server.url}/admin/")

    send_message(admin_page, "how many widgets are there?")

    # The run completing is not evidence of anything here: a refused call and a
    # successful one both finish. Wait on the reply, then read the card.
    expect(
        admin_page.locator("ag-ui-chat .message--assistant", has_text="not installed here"),
    ).to_be_visible(timeout=15000)

    card = admin_page.locator("ag-ui-chat .tool-call")
    expect(card).to_have_count(1)
    expect(card).to_have_attribute("data-status", "error")


def test_a_refused_tool_call_still_reads_as_refused_after_a_reload(admin_page, live_server):  # noqa: ANN001, ANN201
    """The stored copy says what the live stream said.

    With a conversation store mounted, a reload replays the server's copy of the
    thread rather than the tab's, so the card is settled a second time from
    whatever the store kept. Before django-ag-ui 0.64 that was pydantic-ai's
    dump, which drops the outcome, and a call the page had just shown as refused
    came back from the reload as done.
    """
    admin_page.goto(f"{live_server.url}/admin/")
    send_message(admin_page, "how many widgets are there?")
    reply = admin_page.locator("ag-ui-chat .message--assistant", has_text="not installed here")
    expect(reply).to_be_visible(timeout=15000)
    expect(admin_page.locator("ag-ui-chat .tool-call")).to_have_attribute("data-status", "error")

    admin_page.reload()
    open_sidebar(admin_page)

    # The reply is what shows the thread was replayed at all; only then is the
    # card's status a statement about the stored copy.
    expect(reply).to_be_visible(timeout=15000)
    card = admin_page.locator("ag-ui-chat .tool-call")
    expect(card).to_have_count(1)
    expect(card).to_have_attribute("data-status", "error")
