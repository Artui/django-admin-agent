from __future__ import annotations

from types import SimpleNamespace

from django.test import RequestFactory

from django_admin_agent import staff_required


def test_staff_required_allows_active_staff_only() -> None:
    request = RequestFactory().post("/admin-agent/")
    request.user = SimpleNamespace(is_active=True, is_staff=True)  # type: ignore[attr-defined]
    assert staff_required(request) is True

    request.user = SimpleNamespace(is_active=True, is_staff=False)  # type: ignore[attr-defined]
    assert staff_required(request) is False

    request.user = SimpleNamespace(is_active=False, is_staff=True)  # type: ignore[attr-defined]
    assert staff_required(request) is False


def test_staff_required_denies_anonymous() -> None:
    # No ``user`` attribute at all (unauthenticated / no middleware).
    assert staff_required(RequestFactory().post("/admin-agent/")) is False
