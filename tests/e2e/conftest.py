from __future__ import annotations

import pytest
from playwright.sync_api import expect


@pytest.fixture
def admin_page(live_server, page, django_user_model):  # noqa: ANN001, ANN201
    """A Playwright page logged into the live admin as a superuser."""
    django_user_model.objects.create_superuser("admin", "admin@example.com", "password")
    page.goto(f"{live_server.url}/admin/login/")
    page.fill("#id_username", "admin")
    page.fill("#id_password", "password")
    page.click("input[type=submit]")
    page.wait_for_url("**/admin/")
    return page


def open_sidebar(page):  # noqa: ANN001, ANN201
    """Open the sidebar the way a user does, if it is resting at its launcher.

    From web component 0.35.0 a corner placement arrives collapsed on a first
    visit, and the default placement here is a corner one -- so every page in
    this suite now starts with a bubble rather than a panel. Clicking it is the
    real first step, and doing that here keeps these tests exercising the
    arrival a user actually gets instead of configuring it away with
    ``START_OPEN``.

    Tolerant of an already-open panel, because a test that navigates twice
    keeps the state it chose: the preference is stored, so the second page load
    arrives open.
    """
    chat = page.locator("ag-ui-chat#django-admin-agent")
    if chat.get_attribute("collapsed") is not None:
        chat.locator(".launcher").click()
    expect(chat.locator(".input")).to_be_visible()
    return chat


def send_message(page, text):  # noqa: ANN001, ANN201
    """Type a message into the sidebar and click Send (pierces shadow DOM)."""
    chat = open_sidebar(page)
    chat.locator(".input").fill(text)
    chat.locator(".send").click()


@pytest.fixture
def limited_page(live_server, page, django_user_model):  # noqa: ANN001, ANN201
    """A page logged into the live admin as staff holding no model permissions.

    The shape the finding is written around: support staff who may enter the
    admin and can see nothing inside it.
    """
    django_user_model.objects.create_user(
        "support", "support@example.com", "password", is_staff=True
    )
    page.goto(f"{live_server.url}/admin/login/")
    page.fill("#id_username", "support")
    page.fill("#id_password", "password")
    page.click("input[type=submit]")
    page.wait_for_url("**/admin/")
    return page
