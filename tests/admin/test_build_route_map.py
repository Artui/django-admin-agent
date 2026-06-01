from __future__ import annotations

from django.test import override_settings

from django_admin_agent.admin.build_route_map import build_route_map


def test_route_map_has_changelist_and_add_per_model() -> None:
    by_id = {r["id"]: r for r in build_route_map()}

    changelist = by_id["testapp.author.changelist"]
    assert changelist["path"] == "/admin/testapp/author/"
    assert changelist["title"] == "authors"
    assert changelist["group"] == "testapp"

    add = by_id["testapp.author.add"]
    assert add["path"] == "/admin/testapp/author/add/"
    assert add["title"] == "Add author"


@override_settings(ROOT_URLCONF="tests.admin.urls_no_admin")
def test_route_map_is_empty_when_admin_urls_are_unmounted() -> None:
    # Models are still registered, but their admin URLs don't reverse, so every
    # route is skipped.
    assert build_route_map() == []
