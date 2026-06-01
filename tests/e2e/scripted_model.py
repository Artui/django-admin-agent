"""A deterministic Pydantic-AI model that scripts tool calls for e2e flows.

It inspects the conversation (the latest user prompt + which tools have already
returned) and emits the next action, so a browser test drives a real agent run
without a network LLM. Stateless — it derives the step from message history,
which makes it work across the separate runs of a navigating-tool round-trip.
The AG-UI adapter streams, so a ``stream_function`` is provided too.
"""

from __future__ import annotations

import json
from collections.abc import AsyncIterator, Sequence

from pydantic_ai.messages import (
    ModelMessage,
    ModelRequest,
    ModelResponse,
    TextPart,
    ToolCallPart,
    ToolReturnPart,
    UserPromptPart,
)
from pydantic_ai.models.function import (
    AgentInfo,
    DeltaToolCall,
    DeltaToolCalls,
    FunctionModel,
)

_AUTHOR_ARGS = '{"app_label": "testapp", "model": "Author"}'


def _latest_user_text(messages: Sequence[ModelMessage]) -> str:
    for message in reversed(messages):
        if isinstance(message, ModelRequest):
            for part in message.parts:
                if isinstance(part, UserPromptPart) and isinstance(part.content, str):
                    return part.content.lower()
    return ""


def _returned_tools(messages: Sequence[ModelMessage]) -> set[str]:
    names: set[str] = set()
    for message in messages:
        for part in getattr(message, "parts", []):
            if isinstance(part, ToolReturnPart):
                names.add(part.tool_name)
    return names


def _decision(messages: Sequence[ModelMessage]) -> tuple[str, str, str]:
    """Return the next step as ``(kind, name_or_text, json_args)``."""
    text = _latest_user_text(messages)
    returned = _returned_tools(messages)
    if "how many" in text or "count" in text:
        if "count_model" not in returned:
            return ("tool", "count_model", _AUTHOR_ARGS)
        return ("text", "Counted the authors.", "")
    if "open" in text and "author" in text:
        if "open_changelist" not in returned:
            return ("tool", "open_changelist", _AUTHOR_ARGS)
        return ("text", "Opened the authors list.", "")
    return ("text", "I can count authors or open the authors list.", "")


def _script(messages: list[ModelMessage], info: AgentInfo) -> ModelResponse:  # noqa: ARG001
    kind, name_or_text, json_args = _decision(messages)
    if kind == "tool":
        return ModelResponse(
            parts=[ToolCallPart(tool_name=name_or_text, args=json.loads(json_args))]
        )
    return ModelResponse(parts=[TextPart(content=name_or_text)])


async def _script_stream(
    messages: list[ModelMessage],
    info: AgentInfo,  # noqa: ARG001
) -> AsyncIterator[str | DeltaToolCalls]:
    kind, name_or_text, json_args = _decision(messages)
    if kind == "tool":
        yield {0: DeltaToolCall(name=name_or_text, json_args=json_args)}
    else:
        yield name_or_text


scripted_model = FunctionModel(_script, stream_function=_script_stream)
