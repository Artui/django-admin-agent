from __future__ import annotations

import pytest
from django.test import override_settings

pytestmark = [pytest.mark.e2e, pytest.mark.django_db(transaction=True)]

_SAME_ORIGIN = "/static/django_admin_agent/sandbox-proxy.html"
_CROSS_ORIGIN = "http://127.0.0.2:9/sandbox-proxy.html"
_ATTRS = """
() => {
  const el = document.querySelector('ag-ui-chat#django-admin-agent');
  return [el.getAttribute('data-mcp-apps-url'), el.getAttribute('data-mcp-apps-proxy-url')];
}
"""


def _load(page, live_server):  # noqa: ANN001, ANN202
    seen: list[str] = []
    page.on("console", lambda message: seen.append(message.text))
    page.goto(f"{live_server.url}/admin/")
    page.wait_for_load_state("networkidle")
    page.wait_for_function("customElements.get('ag-ui-chat') !== undefined")
    return page.evaluate(_ATTRS), [text for text in seen if "MCP Apps views stay off" in text]


def test_without_a_proxy_nothing_is_registered(admin_page, live_server) -> None:  # noqa: ANN001
    assert _load(admin_page, live_server) == ([None, None], [])


@override_settings(DJANGO_ADMIN_AGENT={"MCP_APPS_SANDBOX_PROXY_URL": _SAME_ORIGIN})
def test_a_same_origin_proxy_is_refused_with_one_warning(admin_page, live_server) -> None:  # noqa: ANN001
    attrs, warned = _load(admin_page, live_server)
    assert attrs == ["/admin-agent/mcp-apps/", _SAME_ORIGIN]
    assert len(warned) == 1, warned


@override_settings(DJANGO_ADMIN_AGENT={"MCP_APPS_SANDBOX_PROXY_URL": _CROSS_ORIGIN})
def test_a_cross_origin_proxy_registers_quietly(admin_page, live_server) -> None:  # noqa: ANN001
    assert _load(admin_page, live_server) == (["/admin-agent/mcp-apps/", _CROSS_ORIGIN], [])
