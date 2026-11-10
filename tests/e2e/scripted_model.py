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

from tests.e2e.chart_tool import CHART_REPLY

_AUTHOR_ARGS = '{"app_label": "testapp", "model": "Author"}'
_MISSING_MODEL_ARGS = '{"app_label": "testapp", "model": "Widget"}'


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


def _tool_result(messages: Sequence[ModelMessage], tool_name: str) -> str:
    """What ``tool_name`` last returned, verbatim."""
    for message in reversed(messages):
        for part in getattr(message, "parts", []):
            if isinstance(part, ToolReturnPart) and part.tool_name == tool_name:
                return str(part.content)
    return ""


def _offered(info: AgentInfo) -> set[str]:
    """The tool names this run was actually given."""
    return {tool.name for tool in info.function_tools}


def _decision(messages: Sequence[ModelMessage], info: AgentInfo) -> tuple[str, str, str]:
    """Return the next step as ``(kind, name_or_text, json_args)``."""
    text = _latest_user_text(messages)
    returned = _returned_tools(messages)
    offered = _offered(info)
    if "chart" in text:
        if "chart_authors" not in returned:
            return ("tool", "chart_authors", "{}")
        return ("text", CHART_REPLY, "")
    if "widgets" in text:
        if "count_model" not in returned:
            return ("tool", "count_model", _MISSING_MODEL_ARGS)
        return ("text", "That model is not installed here.", "")
    if "how many" in text or "count" in text:
        if "count_model" not in returned:
            return ("tool", "count_model", _AUTHOR_ARGS)
        return ("text", f"Counted the authors. {_tool_result(messages, 'count_model')}", "")
    if "press" in text and "click_dom_element" in offered:
        if "click_dom_element" not in returned:
            return ("tool", "click_dom_element", '{"selector_or_label": "#nothing-here"}')
        return ("text", "Left the page alone.", "")
    if ("move" in text or "out of the way" in text) and "move_chat" in offered:
        if "move_chat" not in returned:
            return ("tool", "move_chat", '{"corner": "top-left"}')
        return ("text", f"Moved the chat. {_tool_result(messages, 'move_chat')}", "")
    if "open" in text and "author" in text:
        if "open_changelist" not in returned:
            return ("tool", "open_changelist", _AUTHOR_ARGS)
        return ("text", "Opened the authors list.", "")
    return (
        "text",
        "I can count authors, chart them, open the authors list, or move out of the way.",
        "",
    )


def _script(messages: list[ModelMessage], info: AgentInfo) -> ModelResponse:
    kind, name_or_text, json_args = _decision(messages, info)
    if kind == "tool":
        return ModelResponse(
            parts=[ToolCallPart(tool_name=name_or_text, args=json.loads(json_args))]
        )
    return ModelResponse(parts=[TextPart(content=name_or_text)])


async def _script_stream(
    messages: list[ModelMessage],
    info: AgentInfo,
) -> AsyncIterator[str | DeltaToolCalls]:
    kind, name_or_text, json_args = _decision(messages, info)
    if kind == "tool":
        yield {0: DeltaToolCall(name=name_or_text, json_args=json_args)}
    else:
        yield name_or_text


scripted_model = FunctionModel(_script, stream_function=_script_stream)
