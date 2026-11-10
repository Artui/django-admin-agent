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
        return_value=CHART_REPLY,
        metadata=chart_activity(spec),
    )


__all__ = ["CHART_REPLY", "CHART_TITLE", "chart_authors"]
