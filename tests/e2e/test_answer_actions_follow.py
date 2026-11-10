from __future__ import annotations

import pytest
from playwright.sync_api import expect

from tests.e2e.conftest import send_message

pytestmark = [pytest.mark.e2e, pytest.mark.django_db(transaction=True)]

# The slack the component's own follower uses to call a list "at its foot".
SLACK_PX = 4

_FILL_THE_TRANSCRIPT = """
() => {
  const el = document.querySelector('ag-ui-chat#django-admin-agent');
  for (let i = 0; i < 30; i += 1) {
    el.appendMessage('assistant', 'earlier message ' + i);
  }
  const list = el.shadowRoot.querySelector('.messages');
  return list.scrollHeight > list.clientHeight * 2;
}
"""

_MEASURE = """
() => {
  const root = document.querySelector('ag-ui-chat#django-admin-agent').shadowRoot;
  const list = root.querySelector('.messages');
  const rows = root.querySelectorAll('.message-actions');
  const row = rows[rows.length - 1].getBoundingClientRect();
  const box = list.getBoundingClientRect();
  return {
    gap: list.scrollHeight - list.scrollTop - list.clientHeight,
    rowHeight: row.height,
    rowTop: row.top,
    rowBottom: row.bottom,
    listTop: box.top,
    listBottom: box.bottom,
  };
}
"""


def test_the_last_answers_action_row_is_inside_the_transcript_when_a_run_ends(  # noqa: ANN201
    admin_page,  # noqa: ANN001
    live_server,  # noqa: ANN001
):
    """Retry and Copy are reachable without scrolling, and the foot is at most 4px away."""
    admin_page.goto(f"{live_server.url}/admin/testapp/author/")
    send_message(admin_page, "how many authors are there?")
    final = admin_page.locator(
        "ag-ui-chat .message--assistant:not(.message--restored)",
        has_text="Counted the authors.",
    )
    expect(final).to_be_visible(timeout=15000)

    assert admin_page.evaluate(_FILL_THE_TRANSCRIPT) is True
    send_message(admin_page, "how many authors are there now?")
    expect(
        admin_page.locator("ag-ui-chat .message-actions"),
    ).to_have_count(2, timeout=15000)
    expect(admin_page.locator("ag-ui-chat .message--assistant").last).to_contain_text(
        "Counted the authors.",
    )
    admin_page.wait_for_timeout(300)

    measured = admin_page.evaluate(_MEASURE)

    assert measured["rowHeight"] > 0
    assert measured["rowTop"] >= measured["listTop"]
    assert measured["rowBottom"] <= measured["listBottom"], measured
    assert measured["gap"] <= SLACK_PX, measured
