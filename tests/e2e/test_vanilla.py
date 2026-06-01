from __future__ import annotations

import pytest
from playwright.sync_api import expect

from tests.e2e.conftest import send_message

pytestmark = [pytest.mark.e2e, pytest.mark.django_db(transaction=True)]


def test_sidebar_renders_on_admin_pages(admin_page, live_server):  # noqa: ANN001, ANN201
    admin_page.goto(f"{live_server.url}/admin/")
    expect(admin_page.locator("ag-ui-chat#django-admin-agent")).to_be_attached()
    # The vendored bundle defined the custom element and the chat shell rendered.
    expect(admin_page.locator("ag-ui-chat .input")).to_be_visible()


def test_agent_answers_with_a_server_tool_without_navigating(admin_page, live_server):  # noqa: ANN001, ANN201
    admin_page.goto(f"{live_server.url}/admin/testapp/author/")
    url_before = admin_page.url

    send_message(admin_page, "how many authors are there?")

    expect(
        admin_page.locator("ag-ui-chat .message--assistant", has_text="Counted the authors."),
    ).to_be_visible(timeout=15000)
    assert admin_page.url == url_before  # server tool → no navigation


def test_navigating_tool_reloads_and_the_run_resumes(admin_page, live_server):  # noqa: ANN001, ANN201
    admin_page.goto(f"{live_server.url}/admin/")

    send_message(admin_page, "open the authors list")

    # The navigating tool reloaded the browser to the changelist...
    admin_page.wait_for_url("**/admin/testapp/author/", timeout=15000)
    # ...and the resumable loop completed the call on the new page: the
    # rehydrated chat shows the final assistant message.
    expect(
        admin_page.locator("ag-ui-chat .message--assistant", has_text="Opened the authors list."),
    ).to_be_visible(timeout=15000)
