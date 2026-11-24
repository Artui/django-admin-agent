from __future__ import annotations

import pytest
from django.test import override_settings
from playwright.sync_api import expect

from tests.e2e.conftest import open_sidebar
from tests.testapp.models import Skill

pytestmark = [
    pytest.mark.e2e,
    pytest.mark.django_db(transaction=True),
    pytest.mark.urls("tests.e2e.urls_skills"),
]

CHAT = "ag-ui-chat#django-admin-agent"

_SAVE = """async ([selector, sendThroughChat]) => {
  await customElements.whenDefined("ag-ui-chat");
  const chat = document.querySelector(selector);
  const url = chat.getAttribute("data-skill-editor-url");
  const init = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ name: "triage-orders", description: "Group.", body: "Group them." }),
  };
  const response = sendThroughChat ? await chat.request(url, init) : await fetch(url, init);
  return response.status;
}"""


@override_settings(DJANGO_ADMIN_AGENT={"SKILL_EDITOR": True})
def test_an_editor_write_through_the_sidebar_passes_the_csrf_check(admin_page, live_server) -> None:  # noqa: ANN001
    admin_page.goto(f"{live_server.url}/admin/")
    chat = admin_page.locator(CHAT)
    expect(chat).to_have_attribute("data-skill-editor-url", "/admin-agent/skills/editor/")
    assert admin_page.evaluate(_SAVE, [CHAT, False]) == 403
    assert admin_page.evaluate(_SAVE, [CHAT, True]) == 201
    assert Skill.objects.filter(name="triage-orders").exists()


def test_the_palette_lists_a_stored_skill_beside_the_built_ins(admin_page, live_server) -> None:  # noqa: ANN001
    Skill.objects.create(name="triage-orders", description="Group the orders.", body="Group.")
    admin_page.goto(f"{live_server.url}/admin/")
    chat = open_sidebar(admin_page)
    chat.locator(".input").fill("/")
    expect(chat.get_by_text("triage-orders")).to_be_visible()
    expect(chat.get_by_text("Summarize this page")).to_be_visible()
