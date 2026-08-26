"""A server-side tool that pushes a chart to the browser.

Registered only by the browser suite's own mount. It is the shape
`django-ag-ui`'s chart documentation describes -- a tool whose ``ToolReturn``
carries a chart activity as metadata -- so the test drives the route a project
would actually use rather than a fixture invented for it.
"""

from __future__ import annotations

from django_ag_ui import ChartSeries, ChartSpec, chart_activity
from pydantic_ai.messages import ToolReturn

CHART_TITLE = "Authors by decade"
CHART_REPLY = "Authors chart shown."


def chart_authors() -> ToolReturn:
    """Show a bar chart of how many authors were published per decade."""
    spec = ChartSpec(
        kind="bar",
        title=CHART_TITLE,
        labels=("1990s", "2000s", "2010s"),
        series=(ChartSeries("published", (3.0, 7.0, 5.0)),),
    )
    return ToolReturn(
        # What the model reads, and then repeats to the user -- which is exactly
        # why the chart has to be on screen. A discarded activity settles this
        # call successfully all the same.
        return_value=CHART_REPLY,
        metadata=chart_activity(spec),
    )


__all__ = ["CHART_REPLY", "CHART_TITLE", "chart_authors"]
