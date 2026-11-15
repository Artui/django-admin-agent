from __future__ import annotations

import json

import pytest
from django.test import override_settings
from playwright.sync_api import expect

from tests.e2e.conftest import send_message
from tests.testapp.models import Author

pytestmark = [pytest.mark.e2e, pytest.mark.django_db(transaction=True)]

CHAT = "ag-ui-chat#django-admin-agent"

# Django before 6.0 draws its breadcrumbs as one div with text separators, not a list.
_OLD_CRUMBS = """() => {
  const nav = document.querySelector(".breadcrumbs");
  const old = document.createElement("div");
  old.className = "breadcrumbs";
  old.innerHTML = '<a href="/admin/">Home</a> &rsaquo; <a href="/admin/testapp/">Testapp</a>'
    + ' &rsaquo; <a href="/admin/testapp/author/">Authors</a> &rsaquo; Ada Lovelace';
  nav.replaceWith(old);
  document.querySelector("ag-ui-chat#django-admin-agent").refreshPlace();
}"""


# A page drawn without breadcrumbs, as a custom template or another admin skin may be.
_NO_CRUMBS = """new MutationObserver((records) => {
  for (const node of document.querySelectorAll(".breadcrumbs")) node.remove();
}).observe(document, { childList: true, subtree: true });"""

_MATCHING_ROUTE = """() => {
  const el = document.querySelector("ag-ui-chat#django-admin-agent");
  return el.routeMap.find((r) => new RegExp(
    "^" + r.path.replace(/:[A-Za-z_]\\w*/g, "[^/]+") + "$").test(location.pathname));
}"""


def _chip(page):  # noqa: ANN001, ANN202
    chat = page.locator(CHAT)
    return chat.locator('[part="place-label"]').first, chat.locator('[part="place-detail"]').first


def _sent_place(page):  # noqa: ANN001, ANN202
    """The ``place`` entry of the next run POST's context."""
    with page.expect_request(
        lambda r: r.method == "POST" and '"context"' in (r.post_data or "")
    ) as request:
        send_message(page, "where am I?")
    context = json.loads(request.value.post_data)["context"]
    entries = [entry for entry in context if entry["description"] == "place"]
    assert len(entries) == 1, context
    return json.loads(entries[0]["value"])


def test_a_change_form_names_the_object_and_its_model(admin_page, live_server):  # noqa: ANN001, ANN201
    author = Author.objects.create(name="Ada Lovelace")
    path = f"/admin/testapp/author/{author.pk}/change/"
    admin_page.goto(f"{live_server.url}{path}")
    label, detail = _chip(admin_page)

    expect(label).to_have_text(str(author))
    expect(detail).to_have_text("Authors")
    place = _sent_place(admin_page)
    assert place["label"] == str(author), place
    assert place["detail"] == "Authors", place
    assert place["href"] == path, place


def test_a_changelist_names_the_model(admin_page, live_server):  # noqa: ANN001, ANN201
    admin_page.goto(f"{live_server.url}/admin/testapp/author/")
    label, _ = _chip(admin_page)

    expect(label).to_have_text("Authors")
    assert _sent_place(admin_page)["label"] == "Authors"


def test_the_index_names_the_site(admin_page, live_server):  # noqa: ANN001, ANN201
    admin_page.goto(f"{live_server.url}/admin/")
    site = admin_page.locator("#site-name").inner_text().strip()
    label, _ = _chip(admin_page)

    expect(label).to_have_text(site)
    assert _sent_place(admin_page)["label"] == site


def test_the_older_breadcrumb_markup_reads_the_same(admin_page, live_server):  # noqa: ANN001, ANN201
    author = Author.objects.create(name="Ada Lovelace")
    admin_page.goto(f"{live_server.url}/admin/testapp/author/{author.pk}/change/")
    expect(admin_page.locator(CHAT)).to_be_attached()

    admin_page.evaluate(_OLD_CRUMBS)

    label, detail = _chip(admin_page)
    expect(label).to_have_text("Ada Lovelace")
    expect(detail).to_have_text("Authors")


def test_a_page_with_no_breadcrumbs_falls_back_to_the_route_map(admin_page, live_server):  # noqa: ANN001, ANN201
    admin_page.add_init_script(_NO_CRUMBS)
    admin_page.goto(f"{live_server.url}/admin/testapp/author/")
    expect(admin_page.locator(CHAT)).to_be_attached()
    assert admin_page.locator(".breadcrumbs").count() == 0
    route = admin_page.evaluate(_MATCHING_ROUTE)
    assert route is not None

    label, _ = _chip(admin_page)
    expect(label).to_have_text(route.get("title") or route["id"])


@override_settings(DJANGO_ADMIN_AGENT={"COLLAPSE_TO": "bar"})
def test_the_collapsed_bar_names_the_object_before_any_expand(admin_page, live_server):  # noqa: ANN001, ANN201
    author = Author.objects.create(name="Ada Lovelace")
    admin_page.goto(f"{live_server.url}/admin/testapp/author/{author.pk}/change/")
    chat = admin_page.locator(CHAT)
    expect(chat).to_have_attribute("collapsed", "")

    expect(chat.locator('[part="bar-place"] [part="place-label"]')).to_have_text(str(author))
