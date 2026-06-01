from __future__ import annotations

import pytest


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


def send_message(page, text):  # noqa: ANN001, ANN201
    """Type a message into the sidebar and click Send (pierces shadow DOM)."""
    chat = page.locator("ag-ui-chat#django-admin-agent")
    chat.locator(".input").fill(text)
    chat.locator(".send").click()
