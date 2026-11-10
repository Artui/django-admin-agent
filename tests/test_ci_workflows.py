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
    """Playwright's browsers are not pip-installable."""
    assert _runs("e2e", "playwright install")
