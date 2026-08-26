"""Every stated dependency floor is the one ``pyproject.toml`` declares.

A floor is a claim made to four audiences at once -- the resolver, a reader of
the docs, a maintainer reading the drift workflow's reasoning, and whoever picks
up ``CLAUDE.md`` -- and only the first of them fails loudly when it goes stale.
``CLAUDE.md`` already says "change both or neither" about two of the copies; this
is what makes that a gate rather than an intention.

It has drifted repeatedly. ``docs/installation.md`` and the drift workflow both
sat at ``>=0.39`` across two floor raises, and the README was nine minors behind
*and* still advertising a ceiling this package deliberately dropped. A reader
pinning their own stack from any of those gets a resolution error, or -- worse --
holds a version below a floor that exists for a specific defect and is told that
defect is optional.

``CHANGELOG.md`` is deliberately not scanned: its floor statements are a record
of what was true at each release, and rewriting them would be the actual error.
"""

from __future__ import annotations

import re
from pathlib import Path

import pytest

_ROOT = Path(__file__).resolve().parent.parent
_PYPROJECT = _ROOT / "pyproject.toml"
_PACKAGES = ["django-ag-ui", "djangorestframework-mcp-server"]

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
    """Both sibling windows are open at the top on purpose, and the `floor` and
    `upstream-drift` jobs are what replaced the guesswork a ceiling encodes. A
    document still printing one tells a reader to pin against a window that does
    not exist."""
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
