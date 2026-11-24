from __future__ import annotations

from django.conf import settings
from django.db import models
from django_spec_agents.skills import AbstractSkill, SkillPolicy


class Author(models.Model):
    name = models.CharField(max_length=200)
    email = models.EmailField(unique=True, null=True, blank=True)

    class Meta:
        app_label = "testapp"
        ordering = ("name",)
        verbose_name = "author"
        verbose_name_plural = "authors"


class Book(models.Model):
    title = models.CharField(max_length=200)
    author = models.ForeignKey(Author, on_delete=models.CASCADE, related_name="books")
    published = models.DateField(null=True, blank=True)

    class Meta:
        app_label = "testapp"
        indexes = [models.Index(fields=["title"], name="book_title_idx")]
        unique_together = (("title", "author"),)


class Skill(AbstractSkill):
    owner = models.ForeignKey(
        settings.AUTH_USER_MODEL, null=True, blank=True, on_delete=models.CASCADE, related_name="+"
    )
    locked = models.BooleanField(default=False)

    class Meta:
        app_label = "testapp"

    @classmethod
    def skill_policy(cls) -> SkillPolicy[Skill]:
        from tests.testapp.skill_policy import TestSkillPolicy

        return TestSkillPolicy()
