from __future__ import annotations

from typing import Any

from django_admin_agent.conf import get_settings


def build_skills() -> list[dict[str, Any]]:
    """The sidebar's embedded skill catalog: the ``SKILLS`` setting, else the four built-ins."""
    skills = get_settings().skills
    if skills is not None:
        return skills
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
