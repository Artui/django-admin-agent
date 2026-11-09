from __future__ import annotations

import pytest


@pytest.fixture
def admin_page(live_server, page, django_user_model):  # noqa: ANN001, ANN201
    """A Playwright page logged into the live Unfold admin as a superuser."""
    django_user_model.objects.create_superuser("admin", "admin@example.com", "password")
    page.goto(f"{live_server.url}/admin/login/?next=/admin/")
    page.fill("#id_username", "admin")
    page.fill("#id_password", "password")
    page.click("button[type=submit]")
    page.wait_for_url("**/admin/")
    return page
