"""A django-spec-mcp server behind the sidebar serves the agent's tool call.

``AdminAgentServer(mcp_server=...)`` hands a kernel-spec server to the
transport, which bridges it in process through django-spec-agents'
``MCPToolset``. This drives a whole run through the admin's own mount and reads
the tool result off the stream, so it fails if the keyword stops reaching the
bridge, or the bridge stops answering with the server's result.
"""

from __future__ import annotations

import json
from typing import Any

import pytest
from django.test import RequestFactory
from django_service_specs import Parameter, Parameters, ServiceSpec, Unrestricted
from django_spec_mcp import MCPServer
from pydantic_ai.models.test import TestModel

from django_admin_agent import AdminAgentServer

pytestmark = [
    pytest.mark.django_db(transaction=True),
    # A RequestFactory request is WSGI, and the endpoint says so once per run;
    # buffering the stream is what this test wants anyway.
    pytest.mark.filterwarnings("ignore:django-ag-ui. the AG-UI endpoint streams"),
]


def add_numbers(*, a: int, b: int) -> dict[str, Any]:
    """Add two numbers."""
    return {"result": a + b, "served_by": "spec-mcp"}


def _server() -> MCPServer:
    server = MCPServer(name="test")
    server.register_tool(
        ServiceSpec(
            service=add_numbers,
            reads=Parameters.of(
                Parameter("a", "integer", required=True), Parameter("b", "integer", required=True)
            ),
            permissions=[Unrestricted()],
            atomic=False,
        ),
        name="add",
        description="Add two numbers.",
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


async def test_a_spec_mcp_tool_behind_the_sidebar_answers_the_model(superuser: Any) -> None:
    server = AdminAgentServer(model=TestModel(call_tools=["add"]), mcp_server=_server())
    patterns, _, _ = server.urls
    request = RequestFactory().post(
        "/admin-agent/", data=_run_input("add two numbers"), content_type="application/json"
    )
    request.user = superuser

    response = await patterns[0].callback(request)
    body = "".join(
        [
            chunk if isinstance(chunk, str) else chunk.decode()
            async for chunk in response.streaming_content
        ]
    )

    events = [
        json.loads(line.removeprefix("data: "))
        for line in body.splitlines()
        if line.startswith("data: ")
    ]
    results = [event for event in events if event["type"] == "TOOL_CALL_RESULT"]
    assert len(results) == 1
    # The server's own answer, read off the wire: a bridge that reached no
    # server, or a run that finished without calling it, carries no such field.
    assert json.loads(results[0]["content"])["served_by"] == "spec-mcp"
    assert events[-1]["type"] == "RUN_FINISHED"
