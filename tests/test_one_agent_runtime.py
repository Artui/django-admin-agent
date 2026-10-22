"""The ``django-ag-ui`` floor, held where it is resolved.

This package builds django-spec-agents' ``AgentDeps`` and hands it to
django-ag-ui, so the two must run on one agent runtime. Below the floor
django-ag-ui runs on django-pydantic-agent, a resolve installs both runtimes
side by side, and every other test here still passes, because nothing
type-checks what crosses between them. The lowest-declared-versions job is the
resolve that would install it.
"""

from __future__ import annotations

import importlib.util

import pytest


@pytest.mark.parametrize("replaced", ["django_pydantic_agent", "rest_framework_pydantic_ai"])
def test_no_replaced_runtime_is_installed(replaced: str) -> None:
    assert importlib.util.find_spec(replaced) is None
