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
