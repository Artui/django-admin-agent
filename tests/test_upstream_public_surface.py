"""Every django-ag-ui import comes from the top-level package.

``django_ag_ui/__init__.py`` is the surface django-ag-ui documents and keeps;
everything under it is that package's private arrangement, free to move in a
minor release. This package declares no upper bound on django-ag-ui -- the
deliberate policy recorded in ``CLAUDE.md`` -- so a submodule that moves does
not resolve to an older version, it just stops importing.

The failure is worse than it sounds because it happens at import time. The
sidebar's context builder is reached by ``{% django_admin_agent_sidebar %}`` and
by ``SidebarAdminSite.each_context``, so a renamed submodule does not degrade the
chat panel -- it raises ``ImportError`` and every admin page answers 500. And
since nothing about it is a behaviour change upstream, django-ag-ui has no way
to know it broke a consumer.
"""

from __future__ import annotations

import re
from pathlib import Path

import pytest

import django_admin_agent

_PACKAGE = Path(django_admin_agent.__file__).parent
_SUBMODULE_IMPORT = re.compile(r"^\s*(?:from|import)\s+django_ag_ui\.(\S+)", re.MULTILINE)


@pytest.mark.parametrize(
    "module", sorted(_PACKAGE.rglob("*.py")), ids=lambda p: str(p.relative_to(_PACKAGE))
)
def test_no_module_imports_past_the_django_ag_ui_package_root(module: Path) -> None:
    reached = _SUBMODULE_IMPORT.findall(module.read_text())
    assert reached == [], (
        f"{module.name} imports django_ag_ui.{reached[0] if reached else ''}, which "
        f"django_ag_ui/__init__.py does not re-export. Import the symbol from "
        f"``django_ag_ui`` itself, or ask upstream to export it."
    )
