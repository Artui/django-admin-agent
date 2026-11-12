from __future__ import annotations

from typing import Any

from django.db.models import QuerySet

from django_admin_agent.tools.authorized_model_admin import authorized_model_admin
from django_admin_agent.tools.utils import require_acting_request


def admin_queryset(app_label: str, model: str) -> QuerySet[Any]:
    """The rows the acting staff user's own admin would show for a model.

    Two things happen here, and the second is the one that is easy to skip:
    [`authorized_model_admin`][django_admin_agent.tools.authorized_model_admin.authorized_model_admin]
    settles *whether* the user may read this model, and then the queryset comes
    from ``ModelAdmin.get_queryset(request)`` rather than the model's default
    manager. A project that scopes a changelist per tenant, per owner, or per
    region does it by overriding that method, so reading through it is what
    makes the agent see the same rows the changelist would and no others.
    """
    model_admin = authorized_model_admin(app_label, model)
    return model_admin.get_queryset(require_acting_request())


__all__ = ["admin_queryset"]
