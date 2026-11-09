"""A ``service_specs=`` spec behind the sidebar reads the request it ran on.

The sidebar's deps replace django-ag-ui's default, and the spec toolset reads
the request from ``AgentDeps.call_context``. The deps record holding it is
asserted in ``test_permission_parity``; this drives a whole run, so it also
fails if the toolset stops reading the key the deps are built with.
"""

from __future__ import annotations

import json
from dataclasses import dataclass
from typing import Any

import django_service_specs as kernel
import pytest
from django.test import RequestFactory
from pydantic_ai.models.test import TestModel

from django_admin_agent import AdminAgentServer

pytestmark = [
    pytest.mark.django_db(transaction=True),
    # A RequestFactory request is WSGI, and the endpoint says so once per run;
    # buffering the stream is what this test wants anyway.
    pytest.mark.filterwarnings("ignore:django-ag-ui. the AG-UI endpoint streams"),
]


def _run_input(content: str) -> bytes:
    return json.dumps(
        {
            "threadId": "t1",
            "runId": "r1",
            "state": {},
            "messages": [{"id": "u1", "role": "user", "content": content}],
            "tools": [],
            "context": [],
            "forwardedProps": {},
        }
    ).encode()


async def test_a_spec_callable_behind_the_sidebar_reads_the_run_s_request(
    superuser: Any,
) -> None:
    seen: list[Any] = []

    def record(request: Any) -> dict[str, bool]:
        """Record the request."""
        seen.append(request)
        return {"ok": True}

    server = AdminAgentServer(
        model=TestModel(call_tools=["record"]),
        service_specs={
            "record": kernel.ServiceSpec(
                service=record, atomic=False, permissions=[kernel.Unrestricted()]
            )
        },
    )
    patterns, _, _ = server.urls
    request = RequestFactory().post(
        "/admin-agent/",
        data=_run_input("record the request"),
        content_type="application/json",
    )
    request.user = superuser

    response = await patterns[0].callback(request)
    body = "".join(
        [
            chunk if isinstance(chunk, str) else chunk.decode()
            async for chunk in response.streaming_content
        ]
    )

    assert "RUN_FINISHED" in body
    # Without the request in the admin's deps the seed is ``None``, and a
    # callable reading ``request.user`` fails mid-run.
    assert seen == [request]


@dataclass
class _Arguments:
    note: str = ""


async def test_a_validator_guarding_the_request_is_handed_it_at_the_call(
    superuser: Any,
) -> None:
    seen: list[Any] = []

    class Guarded(kernel.DataclassValidator):
        def parameters(self, *, call_context: dict[str, Any] | None = None) -> kernel.Parameters:
            if call_context is not None and call_context.get("request") is not None:
                seen.append(call_context["request"])
            return super().parameters()

    def record(note: str = "") -> dict[str, bool]:
        """Record nothing."""
        return {"ok": True}

    server = AdminAgentServer(
        model=TestModel(call_tools=["record"]),
        service_specs={
            "record": kernel.ServiceSpec(
                service=record,
                validator=Guarded(_Arguments),
                atomic=False,
                permissions=[kernel.Unrestricted()],
            )
        },
    )
    patterns, _, _ = server.urls
    request = RequestFactory().post(
        "/admin-agent/",
        data=_run_input("record the request"),
        content_type="application/json",
    )
    request.user = superuser

    response = await patterns[0].callback(request)
    body = "".join(
        [
            chunk if isinstance(chunk, str) else chunk.decode()
            async for chunk in response.streaming_content
        ]
    )

    assert "RUN_FINISHED" in body
    assert seen
    assert all(each is request for each in seen)
