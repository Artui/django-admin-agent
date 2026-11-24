from __future__ import annotations

from collections.abc import Collection, Iterable
from dataclasses import dataclass

from django.http import HttpRequest

from django_admin_agent.admin.build_skills import build_skills
from tests.testapp.models import Skill


@dataclass(frozen=True)
class _Scan:
    flagged: bool

    def summary(self) -> str:
        return "prompt injection"


class _Scanner:
    def scan(self, text: str, *, source: str) -> _Scan:
        return _Scan("ignore previous instructions" in text.lower())


class TestSkillPolicy:
    """Unlocked skills not named forbidden-* are writable; the built-in names are reserved."""

    scanner = _Scanner()

    def visible(self, request: HttpRequest) -> Iterable[Skill]:
        return Skill.objects.all()

    def can_write(self, request: HttpRequest, skill: Skill) -> bool:
        return not skill.locked and not skill.name.startswith("forbidden-")

    def new_skill(self, request: HttpRequest) -> Skill:
        return Skill(owner=request.user)

    def reserved_names(self, request: HttpRequest) -> Collection[str]:
        return {skill["name"] for skill in build_skills()}
