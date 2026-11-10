from __future__ import annotations

from collections.abc import Generator
from contextlib import contextmanager

from django.http import HttpRequest

from django_admin_agent.tools.utils import ACTING_REQUEST


@contextmanager
def bind_acting_request(request: HttpRequest) -> Generator[None]:
    """Run a block with ``request`` as the admin request the tools act for."""
    token = ACTING_REQUEST.set(request)
    try:
        yield
    finally:
        ACTING_REQUEST.reset(token)


__all__ = ["bind_acting_request"]
