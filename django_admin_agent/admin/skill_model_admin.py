from __future__ import annotations

from typing import Any

from django import forms
from django.contrib import admin
from django.core.exceptions import ImproperlyConfigured
from django.db import router, transaction
from django.db.models import Model
from django.http import HttpRequest
from django_spec_agents.skills import (
    InvalidSkillError,
    SkillDraft,
    SkillPolicy,
    SkillWriteRefusedError,
    create_skill,
    disable_skill,
    enable_skill,
    update_skill,
)

_DRAFT_FIELDS = ("name", "description", "body", "user_invocable", "model_invocable")


class _SkillAdminForm(forms.ModelForm):
    request: HttpRequest
    policy: SkillPolicy[Any]

    def full_clean(self) -> None:
        # Validation writes the form onto the stored row, which the rename and write checks need.
        stored = {name: getattr(self.instance, name) for name in (*_DRAFT_FIELDS, "enabled")}
        super().full_clean()
        if not self.is_bound or self.errors:
            return
        for name, value in stored.items():
            setattr(self.instance, name, value)
        draft = SkillDraft(*(self.cleaned_data[name] for name in _DRAFT_FIELDS))
        try:
            with transaction.atomic(using=router.db_for_write(type(self.instance))):
                skill = self._write(draft, self.cleaned_data["enabled"])
        except InvalidSkillError as error:
            self.add_error(error.field if error.field in self.fields else None, str(error))
        except SkillWriteRefusedError as error:
            self.add_error(None, str(error))
        else:
            self.instance = skill

    def _write(self, draft: SkillDraft, enabled: bool) -> Model:
        """Create or update through the policy, then turn the skill on or off as the form says."""
        if self.instance.pk is None:
            skill = create_skill(self.policy, self.request, draft)
        else:
            skill = update_skill(self.policy, self.request, self.instance, draft)
        if enabled != skill.enabled:
            skill = (enable_skill if enabled else disable_skill)(self.policy, self.request, skill)
        return skill


class SkillModelAdmin(admin.ModelAdmin):
    """The admin for a consumer's ``AbstractSkill`` model; every write goes through its policy.

    An add takes its scope from ``policy.new_skill``; a row ``can_write`` refuses is read-only."""

    form = _SkillAdminForm
    fields = (*_DRAFT_FIELDS, "enabled")
    list_display = ("name", "description", "enabled", "user_invocable", "model_invocable")
    list_filter = ("enabled", "user_invocable", "model_invocable")
    search_fields = ("name", "description")

    def skill_policy(self) -> SkillPolicy[Any]:
        """The model's ``skill_policy()``; ``ImproperlyConfigured`` when it returns ``None``."""
        policy = self.model.skill_policy()
        if policy is None:
            raise ImproperlyConfigured(f"{self.model.__name__}.skill_policy() returned None.")
        return policy

    def get_form(
        self, request: HttpRequest, obj: Any = None, change: bool = False, **kwargs: Any
    ) -> type[forms.ModelForm]:
        form = super().get_form(request, obj, change=change, **kwargs)
        return type(form.__name__, (form,), {"request": request, "policy": self.skill_policy()})

    def save_model(self, request: HttpRequest, obj: Any, form: Any, change: bool) -> None:
        """Nothing to save: the form wrote the skill through the policy while it validated."""

    def has_change_permission(self, request: HttpRequest, obj: Any = None) -> bool:
        allowed = super().has_change_permission(request, obj)
        return allowed and (obj is None or self.skill_policy().can_write(request, obj))

    def has_delete_permission(self, request: HttpRequest, obj: Any = None) -> bool:
        allowed = super().has_delete_permission(request, obj)
        return allowed and (obj is None or self.skill_policy().can_write(request, obj))


__all__ = ["SkillModelAdmin"]
