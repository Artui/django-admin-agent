from __future__ import annotations

import pytest
from django.db.models.signals import post_save
from django.test import override_settings

from django_admin_agent.tools.introspect.get_settings_summary import get_settings_summary
from django_admin_agent.tools.introspect.inspect_modeladmin import inspect_modeladmin
from django_admin_agent.tools.introspect.list_admin_models import list_admin_models
from django_admin_agent.tools.introspect.list_installed_apps import list_installed_apps
from django_admin_agent.tools.introspect.list_models import list_models
from django_admin_agent.tools.introspect.list_signals import _describe_receiver, list_signals
from django_admin_agent.tools.introspect.list_urls import list_urls
from tests.testapp.models import Author


def test_list_installed_apps() -> None:
    apps = list_installed_apps()
    testapp = next(a for a in apps if a["label"] == "testapp")
    assert testapp["model_count"] >= 2
    assert testapp["name"] == "tests.testapp"


def test_list_models_all_and_filtered() -> None:
    assert any(r["model"] == "Author" for r in list_models())
    assert {r["model"] for r in list_models(app_label="testapp")} == {"Author", "Book"}


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
def test_list_admin_models_includes_urls_and_metadata() -> None:
    rows = list_admin_models()
    book = next(r for r in rows if r["model"] == "Book")
    assert book["list_display"] == ["title", "author", "published"]
    assert book["search_fields"] == ["title"]
    assert book["changelist_url"] == "/admin/testapp/book/"
    assert book["add_url"] == "/admin/testapp/book/add/"


@pytest.mark.django_db
def test_inspect_modeladmin_reads_options_fieldsets_inlines_actions() -> None:
    info = inspect_modeladmin("testapp", "Book")
    assert info["admin_class"] == "BookAdmin"
    assert info["options"]["autocomplete_fields"] == ["author"]
    assert info["options"]["readonly_fields"] == ["published"]
    assert info["fieldsets"] is not None
    assert info["actions"] == ["mark_featured"]
    # Author admin has an inline.
    author_info = inspect_modeladmin("testapp", "Author")
    assert "BookInline" in author_info["inlines"]


def test_inspect_modeladmin_unregistered_model_raises() -> None:
    from django.contrib import admin

    from tests.testapp.models import Author as AuthorModel

    admin.site.unregister(AuthorModel)
    try:
        with pytest.raises(LookupError, match="not registered"):
            inspect_modeladmin("testapp", "Author")
    finally:
        from tests.testapp.admin import AuthorAdmin

        admin.site.register(AuthorModel, AuthorAdmin)


def test_inspect_modeladmin_coerce_handles_non_primitive() -> None:
    from django_admin_agent.tools.introspect.inspect_modeladmin import _coerce

    assert _coerce(None) is None
    assert _coerce(["a", 1, True]) == ["a", 1, True]
    assert _coerce({"k": "v"}) == {"k": "v"}
    # A non-primitive, non-container value falls back to str().
    assert _coerce({1, 2}) in ("{1, 2}", "{2, 1}")


def test_list_admin_models_url_helper_handles_no_reverse_match() -> None:
    from types import SimpleNamespace

    from django_admin_agent.tools.introspect.list_admin_models import _admin_url

    fake_meta = SimpleNamespace(app_label="nope", model_name="missing")
    assert _admin_url(fake_meta, "changelist") is None
