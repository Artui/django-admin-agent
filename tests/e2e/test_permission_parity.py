from __future__ import annotations

import pytest
from playwright.sync_api import expect

from tests.e2e.conftest import send_message

pytestmark = [pytest.mark.e2e, pytest.mark.django_db(transaction=True)]


def test_a_superuser_gets_the_count(admin_page, live_server):  # noqa: ANN001, ANN201
    from tests.testapp.models import Author

    Author.objects.create(name="Bea")
    admin_page.goto(f"{live_server.url}/admin/")

    send_message(admin_page, "how many authors are there?")

    expect(
        admin_page.locator("ag-ui-chat .message--assistant", has_text="Counted the authors. 1"),
    ).to_be_visible(timeout=15000)


def test_staff_without_model_permissions_gets_nothing(limited_page, live_server):  # noqa: ANN001, ANN201
    """``is_staff`` opened the sidebar; it does not open the table."""
    from tests.testapp.models import Author

    Author.objects.create(name="Bea")
    limited_page.goto(f"{live_server.url}/admin/")

    send_message(limited_page, "how many authors are there?")

    reply = limited_page.locator("ag-ui-chat .message--assistant")
    expect(reply.first).to_be_visible(timeout=15000)

    text = reply.first.text_content() or ""
    assert "The run failed" in text
    assert "is not readable by this user" not in text
    assert "Counted the authors. 1" not in text
