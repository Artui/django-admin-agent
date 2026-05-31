from __future__ import annotations

from datetime import date
from decimal import Decimal

import pytest

from django_admin_agent.tools.utils import resolve_model, to_json_safe


def test_resolve_model_found() -> None:
    assert resolve_model("testapp", "Author")._meta.object_name == "Author"


def test_resolve_model_missing() -> None:
    with pytest.raises(LookupError, match="missing.NoSuch"):
        resolve_model("missing", "NoSuch")


def test_to_json_safe_routes_through_django_encoder() -> None:
    out = to_json_safe({"d": date(2026, 5, 22), "amount": Decimal("1.50")})
    assert out["d"] == "2026-05-22"
    assert out["amount"] == "1.50"
