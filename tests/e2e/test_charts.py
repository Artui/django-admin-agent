"""The vendored bundle draws a chart the server pushed.

This is the assertion nothing else in the repo can make. The bundle is
JavaScript and every other suite is Python, so a bundle whose chart support is
missing satisfies the version-string check, the size floor and the element
markers alike -- and the failure it produces is silent by construction: the
activity is discarded without a warning while the tool call settles
successfully, so the model tells the user about a visual that is not on screen.

It pins a capability rather than a version. A vendor frozen at any release that
draws pushed charts passes; one that does not, fails. Whether the pin is
*current* is a different question, answered weekly by the `bundle-pin` job in
`.github/workflows/upstream-drift.yml` against npm -- not here, because a suite
that asks npm what today's version is stops testing this package.
"""

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
    # Drawn as SVG the component built itself, from numbers that never went
    # through the markdown sanitiser -- the reason a chart is allowed on a
    # surface that keeps images off.
    expect(chart.locator("svg")).to_have_count(1)
    # The axis carries the labels the server pushed, so this is the pushed spec
    # on screen rather than an empty frame that happened to render.
    expect(chart).to_contain_text("1990s")
    expect(chart).to_contain_text("2010s")


def test_the_assistant_claim_and_the_screen_agree(admin_page, live_server):  # noqa: ANN001, ANN201
    """The failure this guards is not a missing chart; it is a missing chart the
    model says is there. So assert both halves in one run."""
    admin_page.goto(f"{live_server.url}/admin/")

    send_message(admin_page, "chart the authors")

    expect(
        admin_page.locator("ag-ui-chat .message--assistant", has_text=CHART_REPLY),
    ).to_be_visible(timeout=15000)
    expect(admin_page.locator("ag-ui-chat .chart-block")).to_be_visible()
