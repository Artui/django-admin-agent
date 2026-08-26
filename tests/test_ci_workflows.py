"""CI runs the two gates that can see the vendored bundle.

Every other job in ``tests.yml`` is Python, and the bundle is JavaScript. So a
bundle that fails to mount -- truncated past the size floor, an ESM export
renamed under the sidebar's import, a capability quietly dropped -- leaves the
unit suite, the version grep, the size check and the element-marker check all
green, and the sidebar is dead on every admin page until a human runs
``make test-e2e`` or a user reports it.

That is not a hypothetical: the vendored component sat two minors behind with
every pushed chart discarded in silence, and because the discard settles the
tool call successfully, the model told users a chart was on screen. No gate here
could have known. These assert the two that now can, and that both are required
rather than advisory -- a job nobody blocks on is a job that goes red and stays
red.
"""

from __future__ import annotations

from pathlib import Path

import pytest
import yaml

_WORKFLOW = Path(__file__).resolve().parent.parent / ".github" / "workflows" / "tests.yml"
_JOBS = yaml.safe_load(_WORKFLOW.read_text())["jobs"]
_GATE = "tests-passed"


def _runs(job: str, command: str) -> bool:
    return any(command in str(step.get("run", "")) for step in _JOBS[job]["steps"])


@pytest.mark.parametrize(
    ("job", "command"),
    [("e2e", "make test-e2e"), ("bundle", "make vendor-bundle-verify")],
)
def test_the_workflow_defines_the_job(job: str, command: str) -> None:
    assert job in _JOBS, f"tests.yml no longer defines a {job} job"
    assert _runs(job, command), f"the {job} job no longer runs `{command}`"


@pytest.mark.parametrize("job", ["e2e", "bundle"])
def test_the_job_blocks_the_merge_gate(job: str) -> None:
    assert job in _JOBS[_GATE]["needs"]


def test_the_browser_job_installs_a_browser() -> None:
    """Playwright's browsers are not pip-installable, so ``uv sync`` gets the
    library and none of what it drives. Without this step the job fails on a
    missing executable, which is a red build for the wrong reason -- and the
    fastest way to end up deleting the job that was about to find something."""
    assert _runs("e2e", "playwright install")
