from __future__ import annotations

import json
from typing import Any

import pytest
from django.test import RequestFactory
from django_service_specs import (
    ActionUnavailable,
    Parameter,
    Parameters,
    PermissionCheck,
    ServiceSpec,
    Unrestricted,
)
from django_spec_mcp import MCPServer
from pydantic_ai.models.test import TestModel

from django_admin_agent import AdminAgentServer

pytestmark = [
    pytest.mark.django_db(transaction=True),
    # A RequestFactory request is WSGI, and the endpoint says so once per run;
    # buffering the stream is what this test wants anyway.
    pytest.mark.filterwarnings("ignore:django-ag-ui. the AG-UI endpoint streams"),
]

_TWO_NUMBERS = Parameters.of(
    Parameter("a", "integer", required=True), Parameter("b", "integer", required=True)
)


def add_numbers(*, a: int, b: int) -> dict[str, Any]:
    """Add two numbers."""
    return {"result": a + b, "served_by": "spec-mcp"}


def close_the_books(*, a: int, b: int) -> dict[str, Any]:
    """Refuse for a reason with a name."""
    raise ActionUnavailable("The books are closed.", code="books_closed")


class _Nobody(PermissionCheck):
    def has_permission(self, principal: Any, spec: Any) -> bool:
        return False


class _Exhausted:
    """A rate limit already spent: every call is told to come back in a minute."""

    def consume(self, request: Any, token: Any) -> int | None:
        return 60


def _server(
    service: Any, permission: PermissionCheck, rate_limits: list[Any] | None = None
) -> MCPServer:
    server = MCPServer(name="test")
    server.register_tool(
        ServiceSpec(service=service, reads=_TWO_NUMBERS, permissions=[permission], atomic=False),
        name="add",
        description="Add two numbers.",
        rate_limits=rate_limits,
    )
    return server


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


async def _events(server: MCPServer, user: Any) -> list[dict[str, Any]]:
    patterns, _, _ = AdminAgentServer(model=TestModel(call_tools=["add"]), mcp_server=server).urls
    request = RequestFactory().post(
        "/admin-agent/", data=_run_input("add two numbers"), content_type="application/json"
    )
    request.user = user
    response = await patterns[0].callback(request)
    body = "".join(
        [
            chunk if isinstance(chunk, str) else chunk.decode()
            async for chunk in response.streaming_content
        ]
    )
    return [
        json.loads(line.removeprefix("data: "))
        for line in body.splitlines()
        if line.startswith("data: ")
    ]


def _results(events: list[dict[str, Any]]) -> list[dict[str, Any]]:
    return [event for event in events if event["type"] == "TOOL_CALL_RESULT"]


async def test_a_spec_mcp_tool_behind_the_sidebar_answers_the_model(superuser: Any) -> None:
    events = await _events(_server(add_numbers, Unrestricted()), superuser)

    results = _results(events)
    assert len(results) == 1
    # The server's own answer, read off the wire: a bridge that reached no server.
    assert json.loads(results[0]["content"])["served_by"] == "spec-mcp"
    assert events[-1]["type"] == "RUN_FINISHED"


async def test_a_refusal_the_service_raises_carries_the_server_s_sentence(
    superuser: Any,
) -> None:
    events = await _events(_server(close_the_books, Unrestricted()), superuser)

    [result] = _results(events)
    assert result["outcome"] == "failed"
    # Unredacted with ``INCLUDE_DETAIL`` off: the server's answer.
    assert result["content"] == "The books are closed. (code: books_closed)"


async def test_a_permission_refusal_ends_the_run(superuser: Any) -> None:
    events = await _events(_server(add_numbers, _Nobody()), superuser)

    # The bridge raises ``PermissionDenied``, which the tool-failure policy passes through.
    assert events[-1]["type"] == "RUN_ERROR"
    assert [e for e in events if e["type"] == "RUN_FINISHED"] == []
    assert "Insufficient permission" not in events[-1]["message"]
    [result] = _results(events)
    assert result["outcome"] == "failed"
    assert "Insufficient permission" not in result["content"]


async def test_any_other_protocol_refusal_is_a_redacted_failed_call(superuser: Any) -> None:
    events = await _events(_server(add_numbers, Unrestricted(), [_Exhausted()]), superuser)

    # Only a permission refusal ends the run.
    [result] = _results(events)
    assert result["outcome"] == "failed"
    assert "Rate limit exceeded" not in result["content"]
    assert events[-1]["type"] == "RUN_FINISHED"
    assert [e for e in events if e["type"] == "RUN_ERROR"] == []
