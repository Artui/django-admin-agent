"""The shared admin-URL helper, and the rule that there is only one of it."""

from __future__ import annotations

import inspect
from pathlib import Path
from typing import Any

import pytest
from django.contrib import admin

from django_admin_agent.admin.build_route_map import build_route_map
from django_admin_agent.admin.utils import admin_url
from django_admin_agent.tools.introspect.list_admin_models import list_admin_models
from tests.conftest import acting_as

_ADMIN_PACKAGE = Path(inspect.getfile(build_route_map)).parent


def test_admin_url_reverses_a_registered_action() -> None:
    author = next(m for m in admin.site._registry if m._meta.model_name == "author")
    assert admin_url(author._meta, "changelist") == "/admin/testapp/author/"
    assert admin_url(author._meta, "add") == "/admin/testapp/author/add/"


def test_admin_url_returns_none_when_the_action_has_no_route() -> None:
    """``NoReverseMatch`` is the ordinary answer, not an error: the caller drops
    the entry rather than emitting a route the agent cannot navigate to."""
    author = next(m for m in admin.site._registry if m._meta.model_name == "author")
    assert admin_url(author._meta, "teleport") is None


def test_the_admin_package_defines_the_helper_once() -> None:
    """A cross-file helper lives in ``utils.py`` -- the repo's structural rule 3,
    and the reason for it is right here: two copies of an admin-URL reverser
    drift, and then two tools the agent uses interchangeably report different
    URLs for the same action with nothing to notice.
    """
    package_root = _ADMIN_PACKAGE.parent
    copies = [
        str(path.relative_to(package_root))
        for path in package_root.rglob("*.py")
        if path.name != "utils.py" and "def _admin_url(" in path.read_text()
    ]
    assert copies == [], (
        f"these define their own admin-URL helper instead of importing it: {copies}"
    )


@pytest.mark.django_db
def test_both_url_producers_agree_for_every_registered_model(superuser: Any) -> None:
    """The divergence the shared helper exists to prevent, asserted end to end.

    ``build_route_map`` and ``list_admin_models`` are two answers to "where does
    this model live in the admin", and the agent navigates by whichever it
    happened to ask. They have to give the same answer.

    Acting as a superuser because ``list_admin_models`` now answers as the
    request's user: the comparison is about URL shape, and a superuser is the one
    principal for whom the listing is the full registry, so nothing is filtered
    out of the comparison by permissions.
    """
    routes = {r["id"]: r["path"] for r in build_route_map()}
    with acting_as(superuser):
        entries = list(list_admin_models())
    for entry in entries:
        key = f"{entry['app_label']}.{entry['model'].lower()}"
        assert routes.get(f"{key}.changelist") == entry["changelist_url"]
        assert routes.get(f"{key}.add") == entry["add_url"]
