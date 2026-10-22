"""The ``[mcp]`` extra's floor, held where it is resolved.

``AdminAgentServer(drf_mcp_server=...)`` hands the server to django-spec-agents'
bridge untouched, so what the bridge does with a call is what the sidebar shows.
At the floor a list selector raising ``Http404``, typically a missing parent, is
a failed call reading not found; below it the bridge returned a successful empty
list, and the sidebar settled the card as a success for a call naming nothing.

Skipped unless drf-mcp is installed, which only the lowest-declared-versions job
does (``--all-extras``), and that is the job that would see the floor lowered.
"""

from __future__ import annotations

import pytest

pytest.importorskip("rest_framework_mcp")

from django.contrib.auth.models import User  # noqa: E402
from django.db.models import QuerySet  # noqa: E402
from django.http import Http404  # noqa: E402
from django.test import RequestFactory  # noqa: E402
from django_service_specs import SelectorKind  # noqa: E402
from django_spec_agents.integrations.drf_mcp import DRFMCPToolset  # noqa: E402
from pydantic_ai import ToolFailed  # noqa: E402
from rest_framework import serializers  # noqa: E402
from rest_framework.permissions import AllowAny  # noqa: E402
from rest_framework_mcp import MCPServer  # noqa: E402
from rest_framework_services.types.selector_spec import SelectorSpec  # noqa: E402

from tests.testapp.models import Author  # noqa: E402


class _AuthorOut(serializers.Serializer):
    name = serializers.CharField()


def _missing_parent() -> QuerySet[Author]:
    raise Http404("no parent")


@pytest.mark.django_db(transaction=True)
async def test_a_bridged_list_selector_raising_http404_fails_as_not_found() -> None:
    server = MCPServer(name="t")
    server.register_selector_tool(
        name="authors.list",
        spec=SelectorSpec(
            kind=SelectorKind.LIST,
            selector=_missing_parent,
            output_serializer=_AuthorOut,
            permission_classes=(AllowAny,),
        ),
    )
    request = RequestFactory().post("/")
    request.user = User(username="ada", is_staff=True)
    with pytest.raises(ToolFailed, match="authors.list: not found"):
        await DRFMCPToolset(server, request).call_tool("authors.list", {}, None, None)
