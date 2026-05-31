from __future__ import annotations

import pytest

from django_admin_agent.tools.shell.count_model import count_model
from django_admin_agent.tools.shell.get_model_instance import get_model_instance
from django_admin_agent.tools.shell.inspect_model_schema import inspect_model_schema
from django_admin_agent.tools.shell.query_model import query_model
from tests.testapp.models import Author, Book


@pytest.mark.django_db
def test_query_model_all_fields_filter_exclude_order_project() -> None:
    Author.objects.create(name="Bea", email="bea@example.com")
    Author.objects.create(name="Cal", email="cal@example.com")
    Author.objects.create(name="Don", email=None)

    rows = query_model(
        "testapp",
        "Author",
        filter={"email__icontains": "@example.com"},
        exclude={"name": "Cal"},
        order_by=["-name"],
        fields=["name"],
        limit=2,
    )
    assert [r["name"] for r in rows] == ["Bea"]


@pytest.mark.django_db
def test_query_model_default_fields_and_related_and_offset() -> None:
    author = Author.objects.create(name="Eli")
    Book.objects.create(title="A", author=author)
    Book.objects.create(title="B", author=author)
    rows = query_model(
        "testapp",
        "Book",
        select_related=["author"],
        prefetch_related=["author__books"],
        order_by=["title"],
        offset=1,
        limit=10_000,
    )
    assert [r["title"] for r in rows] == ["B"]


@pytest.mark.django_db
def test_get_model_instance_found_missing_and_projection() -> None:
    author = Author.objects.create(name="Ada", email="ada@example.com")
    assert get_model_instance("testapp", "Author", pk=author.pk)["name"] == "Ada"
    assert get_model_instance("testapp", "Author", pk=999) is None
    projected = get_model_instance(
        "testapp", "Author", pk=author.pk, fields=["name"], select_related=[]
    )
    assert projected == {"name": "Ada"}


@pytest.mark.django_db
def test_get_model_instance_select_related_branch() -> None:
    author = Author.objects.create(name="Ada")
    book = Book.objects.create(title="A", author=author)
    row = get_model_instance("testapp", "Book", pk=book.pk, select_related=["author"])
    assert row is not None and row["title"] == "A"


@pytest.mark.django_db
def test_query_model_without_order_by() -> None:
    Author.objects.create(name="Solo")
    assert query_model("testapp", "Author", fields=["name"]) == [{"name": "Solo"}]


@pytest.mark.django_db
def test_count_model_filter_exclude() -> None:
    Author.objects.create(name="A", email="a@example.com")
    Author.objects.create(name="B", email="b@example.com")
    Author.objects.create(name="C", email=None)
    assert count_model("testapp", "Author") == 3
    assert count_model("testapp", "Author", filter={"email__isnull": False}) == 2
    assert count_model("testapp", "Author", exclude={"name": "A"}) == 2


@pytest.mark.django_db
def test_inspect_model_schema() -> None:
    schema = inspect_model_schema("testapp", "Book")
    assert schema["model"] == "Book"
    names = [f["name"] for f in schema["fields"]]
    assert "title" in names and "author" in names
    author_field = next(f for f in schema["fields"] if f["name"] == "author")
    assert author_field["related_to"] == "testapp.Author"
    title_field = next(f for f in schema["fields"] if f["name"] == "title")
    assert title_field["max_length"] == 200
    assert any(idx["name"] == "book_title_idx" for idx in schema["indexes"])
    assert schema["unique_together"] == [["title", "author"]]
    # Author has Meta.ordering; Book does not — exercise both ``ordering`` paths.
    assert inspect_model_schema("testapp", "Author")["ordering"] == ["name"]
