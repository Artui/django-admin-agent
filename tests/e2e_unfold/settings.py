from __future__ import annotations

from pathlib import Path

from tests.e2e.settings import *  # noqa: F403
from tests.e2e.settings import INSTALLED_APPS, TEMPLATES

# Before the admin, so Unfold's templates win, as its own guide has it.
INSTALLED_APPS = ["unfold", *INSTALLED_APPS]

ROOT_URLCONF = "tests.e2e_unfold.urls"

TEMPLATES = [{**TEMPLATES[0], "DIRS": [Path(__file__).resolve().parent / "templates"]}]
