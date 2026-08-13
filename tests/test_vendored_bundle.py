"""The vendored web-component bundle is a build artefact with no other guard.

Nothing else in this suite can tell a current bundle from a stale one: the
tests are Python, the bundle is JavaScript, and ``vendor-bundle-release``
fetching the pinned version is a *release-time* action that nobody re-runs when
reviewing a change. That gap is not hypothetical — the pin sat four minors
behind the published component before anyone noticed, and a `make vendor-bundle`
run against a sibling checkout leaves a bundle that looks fine and is whatever
happened to be built locally.

So this asserts the two artefacts agree: the version pinned in the Makefile is
the version baked into the bundle.

**It cannot tell you the pin is old**, and that is the other half of the same
problem: a stale pin and a stale bundle agree with each other perfectly. Nothing
in a Python test can ask npm what the current release is, so the `bundle-pin` job
in `.github/workflows/upstream-drift.yml` does that weekly and opens an issue when
this repo is behind. Two guards, two questions: *are these two files consistent*
(here) and *is the version they agree on still the current one* (there).
"""

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
    """The shipped bundle carries the pinned version's own version string.

    The component exports ``VERSION`` from its source, so the string survives
    bundling and is a direct claim by the artefact about which release it is —
    rather than a claim by the filename, the pin, or whoever last ran the
    vendor target.
    """
    version = _pinned_version()
    bundle = _BUNDLE.read_text()

    assert f'"{version}"' in bundle, (
        f"The vendored bundle does not carry version {version}. It is stale, or was "
        f"vendored from a sibling checkout with `make vendor-bundle` rather than "
        f"`make vendor-bundle-release`. Re-run `make vendor-bundle-release`."
    )


def test_the_bundle_is_actually_present_and_substantial() -> None:
    # A truncated or empty copy would still satisfy a filename check, and the
    # admin sidebar would simply never mount.
    assert _BUNDLE.is_file()
    assert _BUNDLE.stat().st_size > 100_000


@pytest.mark.parametrize("marker", ["ag-ui-chat", "customElements"])
def test_the_bundle_defines_the_element(marker: str) -> None:
    # Guards against vendoring some *other* artefact from the package — the
    # version string alone would not notice.
    assert marker in _BUNDLE.read_text()
