from __future__ import annotations

from django.test import override_settings

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


@override_settings(
    DJANGO_ADMIN_AGENT={"SKILLS": [{"name": "only", "title": "Only", "prompt": "p"}]}
)
def test_the_skills_setting_replaces_the_built_in_catalog() -> None:
    assert build_skills() == [{"name": "only", "title": "Only", "prompt": "p"}]


@override_settings(DJANGO_ADMIN_AGENT={"SKILLS": []})
def test_an_empty_skills_setting_ships_no_skills() -> None:
    assert build_skills() == []
