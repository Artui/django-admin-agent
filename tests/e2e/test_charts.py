from __future__ import annotations

import pytest
from playwright.sync_api import expect

from tests.e2e.chart_tool import CHART_REPLY, CHART_TITLE
from tests.e2e.conftest import send_message

pytestmark = [pytest.mark.e2e, pytest.mark.django_db(transaction=True)]


def test_a_pushed_chart_activity_is_drawn_in_the_transcript(admin_page, live_server):  # noqa: ANN001, ANN201
    admin_page.goto(f"{live_server.url}/admin/")

    send_message(admin_page, "chart the authors")

    chart = admin_page.locator("ag-ui-chat .chart-block")
    expect(chart).to_be_visible(timeout=15000)
    expect(chart.locator(".chart-title")).to_have_text(CHART_TITLE)
    # Drawn as SVG the component built itself.
    expect(chart.locator("svg")).to_have_count(1)
    expect(chart).to_contain_text("1990s")
    expect(chart).to_contain_text("2010s")


def test_the_assistant_claim_and_the_screen_agree(admin_page, live_server):  # noqa: ANN001, ANN201
    """The failure this guards is not a missing chart."""
    admin_page.goto(f"{live_server.url}/admin/")

    send_message(admin_page, "chart the authors")

    expect(
        admin_page.locator("ag-ui-chat .message--assistant", has_text=CHART_REPLY),
    ).to_be_visible(timeout=15000)
    expect(admin_page.locator("ag-ui-chat .chart-block")).to_be_visible()
