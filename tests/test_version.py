from __future__ import annotations

import django_admin_agent


def test_version_is_exposed() -> None:
    assert isinstance(django_admin_agent.__version__, str)
    assert django_admin_agent.__version__.count(".") == 2
