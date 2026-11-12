from __future__ import annotations

from django.http import HttpRequest


def staff_required(request: HttpRequest) -> bool:
    """The default authorization gate: an active, staff user.

    The mounted routes are JSON / SSE endpoints, so this returns a bool the
    views turn into a ``403`` — unlike ``admin_view()``, whose HTML login
    redirect would corrupt an SSE stream or a JSON fetch.
    """
    user = getattr(request, "user", None)
    return bool(getattr(user, "is_active", False) and getattr(user, "is_staff", False))


__all__ = ["staff_required"]
