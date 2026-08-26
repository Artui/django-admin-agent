from __future__ import annotations

from typing import Any

import pytest
from django.core.exceptions import PermissionDenied
from django.db.models.signals import post_save
from django.test import override_settings

from django_admin_agent.tools.introspect.get_settings_summary import get_settings_summary
from django_admin_agent.tools.introspect.inspect_modeladmin import inspect_modeladmin
from django_admin_agent.tools.introspect.list_admin_models import list_admin_models
from django_admin_agent.tools.introspect.list_installed_apps import list_installed_apps
from django_admin_agent.tools.introspect.list_models import list_models
from django_admin_agent.tools.introspect.list_signals import _describe_receiver, list_signals
from django_admin_agent.tools.introspect.list_urls import list_urls
from tests.conftest import acting_as
from tests.testapp.models import Author


def test_list_installed_apps() -> None:
    apps = list_installed_apps()
    testapp = next(a for a in apps if a["label"] == "testapp")
    assert testapp["model_count"] >= 2
    assert testapp["name"] == "tests.testapp"


@pytest.mark.django_db
def test_list_models_all_and_filtered(as_superuser: Any) -> None:
    assert any(r["model"] == "Author" for r in list_models())
    assert {r["model"] for r in list_models(app_label="testapp")} == {"Author", "Book"}


@pytest.mark.django_db
def test_list_models_shows_only_what_the_user_could_open(make_staff_user: Any) -> None:
    """The admin index's own answer, not the app registry's.

    ``list_models`` used to enumerate every installed model, which handed a
    prompt-injected agent the whole schema as a target list regardless of who
    was driving.
    """
    user = make_staff_user("reader", perms=("testapp.view_author",))
    with acting_as(user):
        assert {r["model"] for r in list_models(app_label="testapp")} == {"Author"}
        assert list_models(app_label="sessions") == []


def test_list_urls_lists_admin_routes_and_prefix() -> None:
    rows = list_urls()
    assert any("admin" in row["pattern"] for row in rows)
    assert all("admin" in row["pattern"] for row in list_urls(prefix="admin"))


def test_get_settings_summary_curated_and_redacted() -> None:
    summary = get_settings_summary()
    assert "SECRET_KEY" not in summary
    assert "INSTALLED_APPS" in summary
    assert summary["DATABASES"]["default"]["PASSWORD"] == "<redacted>"


@override_settings(ALLOWED_HOSTS=("a", "b"))
def test_get_settings_summary_coerces_tuple() -> None:
    assert get_settings_summary()["ALLOWED_HOSTS"] == ["a", "b"]


@override_settings(DEFAULT_AUTO_FIELD=object())
def test_get_settings_summary_repr_non_primitive() -> None:
    assert get_settings_summary()["DEFAULT_AUTO_FIELD"].startswith("<object")


@override_settings(CACHES={})
def test_get_settings_summary_empty_caches() -> None:
    assert get_settings_summary()["CACHES"] == {}


def test_list_signals_enumerates_and_lists_receivers() -> None:
    received: list[object] = []

    def handler(sender, **kwargs):  # noqa: ANN001, ANN202
        received.append(sender)

    post_save.connect(handler, sender=Author)
    try:
        rows = list_signals()
        row = next(r for r in rows if r["signal"].endswith("post_save"))
        assert row["receiver_count"] >= 1
        assert any("handler" in name for name in row["receivers"])
    finally:
        post_save.disconnect(handler, sender=Author)


def test_describe_receiver_strong_and_dead_weakref() -> None:
    import weakref

    def fn() -> None: ...

    assert "fn" in _describe_receiver(fn)

    class _Holder:
        def method(self) -> None: ...

    holder = _Holder()
    ref = weakref.WeakMethod(holder.method)
    del holder
    assert _describe_receiver(ref) == "<dead weakref>"


@pytest.mark.django_db
def test_list_admin_models_includes_urls_and_metadata(as_superuser: Any) -> None:
    rows = list_admin_models()
    book = next(r for r in rows if r["model"] == "Book")
    assert book["list_display"] == ["title", "author", "published"]
    assert book["search_fields"] == ["title"]
    assert book["changelist_url"] == "/admin/testapp/book/"
    assert book["add_url"] == "/admin/testapp/book/add/"


@pytest.mark.django_db
def test_list_admin_models_hides_a_model_the_user_may_not_view(make_staff_user: Any) -> None:
    user = make_staff_user("reader2", perms=("testapp.view_book",))
    with acting_as(user):
        assert {r["model"] for r in list_admin_models()} == {"Book"}


@pytest.mark.django_db
def test_inspect_modeladmin_reads_options_fieldsets_inlines_actions(as_superuser: Any) -> None:
    info = inspect_modeladmin("testapp", "Book")
    assert info["admin_class"] == "BookAdmin"
    assert info["options"]["autocomplete_fields"] == ["author"]
    assert info["options"]["readonly_fields"] == ["published"]
    assert info["fieldsets"] is not None
    assert info["actions"] == ["mark_featured"]
    # Author admin has an inline.
    author_info = inspect_modeladmin("testapp", "Author")
    assert "BookInline" in author_info["inlines"]


@pytest.mark.django_db
def test_inspect_modeladmin_unregistered_model_is_refused(as_superuser: Any) -> None:
    from django.contrib import admin

    from tests.testapp.models import Author as AuthorModel

    admin.site.unregister(AuthorModel)
    try:
        with pytest.raises(PermissionDenied, match="not readable by this user"):
            inspect_modeladmin("testapp", "Author")
    finally:
        from tests.testapp.admin import AuthorAdmin

        admin.site.register(AuthorModel, AuthorAdmin)


@pytest.mark.django_db
def test_inspect_modeladmin_is_refused_without_view_permission(make_staff_user: Any) -> None:
    user = make_staff_user("support2")
    with acting_as(user), pytest.raises(PermissionDenied):
        inspect_modeladmin("testapp", "Book")


def test_inspect_modeladmin_coerce_handles_non_primitive() -> None:
    from django_admin_agent.tools.introspect.inspect_modeladmin import _coerce

    assert _coerce(None) is None
    assert _coerce(["a", 1, True]) == ["a", 1, True]
    assert _coerce({"k": "v"}) == {"k": "v"}
    # A non-primitive, non-container value falls back to str().
    assert _coerce({1, 2}) in ("{1, 2}", "{2, 1}")
