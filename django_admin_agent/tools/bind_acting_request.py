from __future__ import annotations

from collections.abc import Iterator
from contextlib import contextmanager

from django.http import HttpRequest

from django_admin_agent.tools.utils import ACTING_REQUEST


@contextmanager
def bind_acting_request(request: HttpRequest) -> Iterator[None]:
    """Run a block with ``request`` as the admin request the tools act for.

    The mounted endpoint binds this for you on every run, so a project mounting
    [`AdminAgentServer`][django_admin_agent.admin_agent_server.AdminAgentServer]
    never calls it. Reach for it when something *other* than the endpoint drives
    the tools — a management command, a test, a bespoke agent loop — because the
    model-reading tools answer as the request's user and refuse to answer at all
    without one.

    The binding is reset on exit, so it cannot outlive the block and be read by
    a later call on the same thread:

        with bind_acting_request(request):
            rows = query_model("shop", "Order", limit=10)
    """
    token = ACTING_REQUEST.set(request)
    try:
        yield
    finally:
        ACTING_REQUEST.reset(token)


__all__ = ["bind_acting_request"]
