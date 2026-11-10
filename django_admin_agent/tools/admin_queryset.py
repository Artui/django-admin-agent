from __future__ import annotations

from typing import Any

from django.db.models import QuerySet

from django_admin_agent.tools.authorized_model_admin import authorized_model_admin
from django_admin_agent.tools.utils import require_acting_request


def admin_queryset(app_label: str, model: str) -> QuerySet[Any]:
    """The rows the acting staff user's own admin would show for a model."""
    model_admin = authorized_model_admin(app_label, model)
    return model_admin.get_queryset(require_acting_request())


__all__ = ["admin_queryset"]
