from __future__ import annotations

from django_admin_agent.admin.build_skills import build_skills


def test_build_skills_returns_client_skill_dicts() -> None:
    skills = build_skills()
    assert len(skills) >= 1
    # Every entry has the required client `Skill` fields.
    for skill in skills:
        assert isinstance(skill["name"], str)
        assert isinstance(skill["title"], str)
        assert isinstance(skill["prompt"], str)
    names = {s["name"] for s in skills}
    assert "summarize-changelist" in names
