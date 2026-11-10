from __future__ import annotations

import importlib.util

import pytest


@pytest.mark.parametrize("replaced", ["django_pydantic_agent", "rest_framework_pydantic_ai"])
def test_no_replaced_runtime_is_installed(replaced: str) -> None:
    assert importlib.util.find_spec(replaced) is None
