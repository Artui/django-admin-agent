from __future__ import annotations

from typing import Any

import pytest
from django.contrib.auth.models import User
from django.core.exceptions import PermissionDenied
from django.test import override_settings

from django_admin_agent.tools.shell.count_model import count_model
from django_admin_agent.tools.shell.get_model_instance import get_model_instance
from django_admin_agent.tools.shell.inspect_model_schema import inspect_model_schema
from django_admin_agent.tools.shell.query_model import query_model
from django_admin_agent.tools.shell.redact_sensitive_fields import REDACTED
from tests.conftest import acting_as
from tests.testapp.admin import BookAdmin
from tests.testapp.models import Author, Book

pytestmark = pytest.mark.django_db


def test_query_model_all_fields_filter_exclude_order_project(as_superuser: Any) -> None:
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


def test_query_model_default_fields_and_related_and_offset(as_superuser: Any) -> None:
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


def test_get_model_instance_found_missing_and_projection(as_superuser: Any) -> None:
    author = Author.objects.create(name="Ada", email="ada@example.com")
    assert get_model_instance("testapp", "Author", pk=author.pk)["name"] == "Ada"
    assert get_model_instance("testapp", "Author", pk=999) is None
    projected = get_model_instance(
        "testapp", "Author", pk=author.pk, fields=["name"], select_related=[]
    )
    assert projected == {"name": "Ada"}


def test_get_model_instance_select_related_branch(as_superuser: Any) -> None:
    author = Author.objects.create(name="Ada")
    book = Book.objects.create(title="A", author=author)
    row = get_model_instance("testapp", "Book", pk=book.pk, select_related=["author"])
    assert row is not None and row["title"] == "A"


def test_query_model_without_order_by(as_superuser: Any) -> None:
    Author.objects.create(name="Solo")
    assert query_model("testapp", "Author", fields=["name"]) == [{"name": "Solo"}]


def test_query_model_redacts_sensitive_fields(as_superuser: Any) -> None:
    # The blast-radius scenario: a User row must never ship its password hash.
    User.objects.create_user(username="staffer", password="s3cret")
    rows = query_model("auth", "User", filter={"username": "staffer"})
    assert rows[0]["username"] == "staffer"
    assert rows[0]["password"] == REDACTED


def test_get_model_instance_redacts_sensitive_fields(as_superuser: Any) -> None:
    user = User.objects.create_user(username="staffer2", password="s3cret")
    row = get_model_instance("auth", "User", pk=user.pk)
    assert row is not None
    assert row["password"] == REDACTED


def test_count_model_filter_exclude(as_superuser: Any) -> None:
    Author.objects.create(name="A", email="a@example.com")
    Author.objects.create(name="B", email="b@example.com")
    Author.objects.create(name="C", email=None)
    assert count_model("testapp", "Author") == 3
    assert count_model("testapp", "Author", filter={"email__isnull": False}) == 2
    assert count_model("testapp", "Author", exclude={"name": "A"}) == 2


def test_inspect_model_schema(as_superuser: Any) -> None:
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


# ---------------------------------------------------------------------------
# Permission parity. ``is_staff`` is Django's flag for "may enter the admin",
# not a permission over anything inside it, and these pin that the tools no
# longer treat it as one.
# ---------------------------------------------------------------------------


@pytest.mark.parametrize(
    ("call", "kwargs"),
    [
        (query_model, {}),
        (count_model, {}),
        (get_model_instance, {"pk": 1}),
        (inspect_model_schema, {}),
    ],
)
def test_staff_without_model_permission_gets_nothing(
    make_staff_user: Any,
    call: Any,
    kwargs: dict[str, Any],
) -> None:
    """The finding's own scenario: staff, no model permissions, full DB read.

    Every one of the four is refused for a model this user cannot open in the
    admin — including the schema, which is a map of where the rows are.
    """
    Author.objects.create(name="Secret")
    user = make_staff_user("support")

    with acting_as(user), pytest.raises(PermissionDenied, match="not readable by this user"):
        call("testapp", "Author", **kwargs)


def test_view_permission_is_what_unlocks_a_model(make_staff_user: Any) -> None:
    """And it unlocks exactly that model, not the app around it."""
    author = Author.objects.create(name="Bea")
    Book.objects.create(title="A", author=author)
    user = make_staff_user("reader", perms=("testapp.view_author",))

    with acting_as(user):
        assert [r["name"] for r in query_model("testapp", "Author", fields=["name"])] == ["Bea"]
        with pytest.raises(PermissionDenied):
            count_model("testapp", "Book")


def test_rows_come_from_the_model_admin_queryset(
    as_superuser: Any,
    monkeypatch: pytest.MonkeyPatch,
) -> None:
    """A project narrowing a changelist narrows the agent by the same act.

    Per-tenant and per-owner scoping is written as a ``get_queryset`` override,
    so reading through the default manager instead is how the sidebar ends up
    with rows the admin would never show.
    """
    author = Author.objects.create(name="Eli")
    Book.objects.create(title="mine", author=author)
    Book.objects.create(title="theirs", author=author)
    monkeypatch.setattr(
        BookAdmin,
        "get_queryset",
        lambda self, request: Book.objects.filter(title="mine"),
    )

    assert [r["title"] for r in query_model("testapp", "Book", fields=["title"])] == ["mine"]
    assert count_model("testapp", "Book") == 1
    hidden = Book.objects.get(title="theirs")
    assert get_model_instance("testapp", "Book", pk=hidden.pk) is None


def test_a_model_outside_the_admin_is_unreachable_even_for_a_superuser(as_superuser: Any) -> None:
    """``sessions.Session`` is nobody's changelist, so it is nobody's query.

    The admin registry is the scope: a model the project never registered is
    one no staff user can open in the admin, whatever their permissions.
    """
    with pytest.raises(PermissionDenied, match="not readable by this user"):
        query_model("sessions", "Session")


def test_an_uninstalled_model_still_reports_as_uninstalled(as_superuser: Any) -> None:
    # Distinguishable from "you may not read it", because the agent relays both.
    with pytest.raises(LookupError, match="nosuchapp.Nope"):
        query_model("nosuchapp", "Nope")


@override_settings(DJANGO_ADMIN_AGENT={"MODEL_SCOPE": ["testapp.Author"]})
def test_model_scope_narrows_below_the_admin(as_superuser: Any) -> None:
    Author.objects.create(name="Bea")
    assert count_model("testapp", "Author") == 1
    with pytest.raises(PermissionDenied):
        count_model("testapp", "Book")


@override_settings(DJANGO_ADMIN_AGENT={"MODEL_SCOPE": ["testapp"]})
def test_model_scope_accepts_a_bare_app_label(as_superuser: Any) -> None:
    Author.objects.create(name="Bea")
    assert count_model("testapp", "Author") == 1
    with pytest.raises(PermissionDenied):
        count_model("auth", "User")


def test_an_unbound_call_is_refused_rather_than_run_unauthorized() -> None:
    """No request bound means no user to answer as, so there is no answer."""
    with pytest.raises(PermissionDenied, match="no admin request is bound"):
        count_model("testapp", "Author")


# ---------------------------------------------------------------------------
# The redaction oracle: a masked value must not be readable one bit at a time.
# ---------------------------------------------------------------------------


@pytest.mark.parametrize(
    "kwargs",
    [
        {"filter": {"password__startswith": "pbkdf2_sha256$1"}},
        {"exclude": {"password__lt": "m"}},
        {"filter": {"password__gt": "m"}},
    ],
)
def test_count_model_refuses_a_lookup_on_a_redacted_field(
    as_superuser: Any,
    kwargs: dict[str, Any],
) -> None:
    """``__gt`` / ``__lt`` on a CharField binary-search a hash out of a count."""
    User.objects.create_user(username="target", password="s3cret")
    with pytest.raises(ValueError, match="redacted field"):
        count_model("auth", "User", **kwargs)


def test_query_model_refuses_the_same_lookups_and_a_redacted_ordering(as_superuser: Any) -> None:
    User.objects.create_user(username="target2", password="s3cret")
    with pytest.raises(ValueError, match="redacted field"):
        query_model("auth", "User", filter={"password__startswith": "p"})
    with pytest.raises(ValueError, match="redacted field"):
        query_model("auth", "User", exclude={"password": "x"})
    with pytest.raises(ValueError, match="redacted field"):
        query_model("auth", "User", order_by=["-password"])


def test_a_relation_walk_onto_a_redacted_field_is_refused_too(as_superuser: Any) -> None:
    author = Author.objects.create(name="Eli")
    Book.objects.create(title="A", author=author)
    with pytest.raises(ValueError, match="redacted field"):
        # Not a real field here; what is pinned is that the walk is inspected
        # segment by segment rather than only at the head of the lookup.
        query_model("testapp", "Book", filter={"author__api_token__startswith": "t"})


@override_settings(DJANGO_ADMIN_AGENT={"SHELL_FIELD_REDACTION": False})
def test_turning_redaction_off_turns_the_lookup_guard_off_with_it(as_superuser: Any) -> None:
    """One switch, both halves — a guard on a field nothing masks is theatre."""
    User.objects.create_user(username="target3", password="s3cret")
    matched = count_model(
        "auth", "User", filter={"username": "target3", "password__startswith": "pbkdf2"}
    )
    assert matched == 1
