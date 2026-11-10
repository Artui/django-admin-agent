from __future__ import annotations

import re
from pathlib import Path

import pytest

_ROOT = Path(__file__).resolve().parent.parent
_PYPROJECT = _ROOT / "pyproject.toml"
_PACKAGES = [
    "django-ag-ui",
    "django-ag-ui[mcp]",
    "django-spec-agents",
]

_CLAIM_FILES = sorted(
    {
        _ROOT / "README.md",
        _ROOT / "CLAUDE.md",
        *(_ROOT / "docs").rglob("*.md"),
        *(_ROOT / ".github" / "workflows").glob("*.yml"),
    }
)


def _declared_floor(package: str) -> str:
    match = re.search(rf'"{re.escape(package)}>=([0-9.]+)"', _PYPROJECT.read_text())
    assert match is not None, f"pyproject.toml no longer declares a floor for {package}"
    return match.group(1)


@pytest.mark.parametrize("package", _PACKAGES)
@pytest.mark.parametrize("path", _CLAIM_FILES, ids=lambda p: p.name)
def test_a_stated_floor_matches_the_declared_one(package: str, path: Path) -> None:
    declared = _declared_floor(package)
    stated = re.findall(rf"{re.escape(package)}>=([0-9.]+)", path.read_text())
    wrong = sorted({value for value in stated if value != declared})
    assert wrong == [], (
        f"{path.name} says {package}>={wrong[0] if wrong else ''} where pyproject.toml "
        f"declares >={declared}."
    )


@pytest.mark.parametrize("package", _PACKAGES)
@pytest.mark.parametrize("path", _CLAIM_FILES, ids=lambda p: p.name)
def test_no_document_advertises_a_ceiling(package: str, path: Path) -> None:
    """Both sibling windows are open at the top on purpose."""
    ceilings = re.findall(rf"{re.escape(package)}>=[0-9.]+,<([0-9.]+)", path.read_text())
    assert ceilings == [], f"{path.name} advertises a {package} ceiling of <{ceilings[0]}"


@pytest.mark.parametrize("package", _PACKAGES)
def test_the_compatibility_table_matches_the_declared_floor(package: str) -> None:
    """``CLAUDE.md``'s table states the same claim to a second audience."""
    row = re.search(
        rf"^\| {re.escape(package)}[^|]*\| ([0-9.]+) \|", (_ROOT / "CLAUDE.md").read_text(), re.M
    )
    assert row is not None, f"CLAUDE.md's compatibility table no longer lists {package}"
    assert row.group(1) == _declared_floor(package)


@pytest.mark.parametrize("package", _PACKAGES)
def test_the_compatibility_row_agrees_with_itself(package: str) -> None:
    """The row states the floor twice -- a version column and a parenthetical."""
    row = re.search(
        rf"^\| {re.escape(package)}[^|]*\| ([0-9.]+) \|([^|]*)\|",
        (_ROOT / "CLAUDE.md").read_text(),
        re.M,
    )
    assert row is not None, f"CLAUDE.md's compatibility table no longer lists {package}"
    restated = re.findall(r">=([0-9.]+)", row.group(2))
    assert restated == [row.group(1)], (
        f"CLAUDE.md's {package} row says {restated} beside a column of {row.group(1)}"
    )
