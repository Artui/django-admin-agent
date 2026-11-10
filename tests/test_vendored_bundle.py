from __future__ import annotations

import re
from pathlib import Path

import pytest

_ROOT = Path(__file__).resolve().parent.parent
_MAKEFILE = _ROOT / "Makefile"
_BUNDLE = (
    _ROOT / "django_admin_agent" / "static" / "django_admin_agent" / "ag-ui-web-component.bundle.js"
)


def _pinned_version() -> str:
    """The version ``vendor-bundle-release`` is contracted to fetch."""
    match = re.search(r"^WEB_COMPONENT_VERSION := (\S+)$", _MAKEFILE.read_text(), re.MULTILINE)
    assert match is not None, "Makefile no longer declares WEB_COMPONENT_VERSION"
    return match.group(1)


def test_vendored_bundle_matches_the_pinned_version() -> None:
    """The shipped bundle carries the pinned version's own version string."""
    version = _pinned_version()
    bundle = _BUNDLE.read_text()

    assert f'"{version}"' in bundle, (
        f"The vendored bundle does not carry version {version}. It is stale, or was "
        f"vendored from a sibling checkout with `make vendor-bundle` rather than "
        f"`make vendor-bundle-release`. Re-run `make vendor-bundle-release`."
    )


def test_the_bundle_is_actually_present_and_substantial() -> None:
    # A truncated or empty copy would still satisfy a filename check.
    assert _BUNDLE.is_file()
    assert _BUNDLE.stat().st_size > 100_000


@pytest.mark.parametrize("marker", ["ag-ui-chat", "customElements"])
def test_the_bundle_defines_the_element(marker: str) -> None:
    # Guards against vendoring some other artefact; the version string alone would not notice.
    assert marker in _BUNDLE.read_text()


def _prerequisites(target: str) -> list[str]:
    """The names after ``target:`` in the Makefile."""
    match = re.search(rf"^{re.escape(target)}:(.*)$", _MAKEFILE.read_text(), re.MULTILINE)
    assert match is not None, f"the Makefile no longer declares a {target} target"
    return match.group(1).split()


def _recipe(target: str) -> str:
    """The tab-indented body of ``target``."""
    text = _MAKEFILE.read_text()
    match = re.search(rf"^{re.escape(target)}:.*$((?:\n(?:\t.*)?)*)", text, re.MULTILINE)
    assert match is not None, f"the Makefile no longer declares a {target} target"
    return match.group(1)


@pytest.mark.parametrize("target", ["release-publish", "release-publish-prepare"])
def test_the_release_verifies_the_committed_bundle_rather_than_re_vendoring_it(
    target: str,
) -> None:
    """A release must not substitute bundle bytes of its own."""
    prerequisites = _prerequisites(target)
    assert "vendor-bundle-verify" in prerequisites
    assert "vendor-bundle-release" not in prerequisites, (
        f"{target} re-vendors the bundle, which publishes bytes nobody committed, "
        f"diffed or ran in a browser. It should verify the committed one instead."
    )


def test_the_verify_target_compares_bytes_and_writes_nothing() -> None:
    """Verifying and vendoring are different acts, and the difference is the point."""
    recipe = _recipe("vendor-bundle-verify")
    assert "diff" in recipe
    assert "cp " not in recipe, "vendor-bundle-verify writes to the tree; it must only read it"
