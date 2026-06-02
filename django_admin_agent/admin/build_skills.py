from __future__ import annotations

from typing import Any

# Default admin skill catalog — pre-defined prompts surfaced in the sidebar's
# `/`-command palette. Plain dicts (the client `Skill` shape, camelCase keys);
# embedded into the page via `data-skills`, so this needs no django-ag-ui 0.2
# server API. Prompts are placeholder-free so they work without a skill context;
# a project can override the whole catalog via DJANGO_ADMIN_AGENT["SKILLS"].


def build_skills() -> list[dict[str, Any]]:
    """The built-in admin skill catalog (client `Skill` dicts)."""
    return [
        {
            "name": "summarize-page",
            "title": "Summarize this page",
            "description": "Recap what's currently shown.",
            "prompt": "Summarize what's shown on the current admin page.",
        },
        {
            "name": "summarize-changelist",
            "title": "Summarize this changelist",
            "description": "Group and count the visible rows.",
            "prompt": "Summarize the rows currently shown in this changelist, grouped sensibly.",
        },
        {
            "name": "draft-description",
            "title": "Draft a description",
            "description": "For the selected item(s).",
            "prompt": "Draft a clear description for the selected item(s).",
        },
        {
            "name": "explain-model",
            "title": "Explain this model",
            "description": "What it's for and its key fields.",
            "prompt": "Explain what this model represents and what its key fields are for.",
        },
    ]


__all__ = ["build_skills"]
