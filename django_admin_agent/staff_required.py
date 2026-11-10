from __future__ import annotations

from django.http import HttpRequest


def staff_required(request: HttpRequest) -> bool:
    """The default authorization gate: an active, staff user."""
    user = getattr(request, "user", None)
    return bool(getattr(user, "is_active", False) and getattr(user, "is_staff", False))


__all__ = ["staff_required"]
