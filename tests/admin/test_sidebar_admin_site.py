from __future__ import annotations

import pytest
from django.contrib.auth.models import AnonymousUser
from django.test import RequestFactory

from django_admin_agent.admin.sidebar_admin_site import SidebarAdminSite


def test_each_context_injects_sidebar_and_preserves_super() -> None:
    site = SidebarAdminSite()
    request = RequestFactory().get("/admin/")
    request.user = _StaffUser()

    context = site.each_context(request)

    # Our key is present and well-formed...
    sidebar = context["django_admin_agent"]
    assert sidebar["endpoint"] == "/admin-agent/"
    assert sidebar["admin_base_url"] == "/admin/"
    # ...and the base AdminSite context still passes through.
    assert "site_title" in context


def test_each_context_hands_a_signed_out_visitor_nothing_to_render() -> None:
    """The login page goes through ``each_context`` like every other admin page.

    This path cannot render nothing the way the template tag does -- the markup
    is the host's -- so it withholds the *content* instead. The assertion that
    matters is the second one: ``build_route_map()`` takes no user and walks the
    whole admin registry, so a populated context here is an inventory of every
    model and its admin URL, and a host rendering unconditionally was publishing
    that to anyone who could reach the login page.
    """
    site = SidebarAdminSite()
    request = RequestFactory().get("/admin/login/")
    request.user = AnonymousUser()

    context = site.each_context(request)

    assert context["django_admin_agent"] == {}
    # Falsy, so ``{% if django_admin_agent %}`` is the natural guard and a host
    # that already wrote one keeps working unchanged.
    assert not context["django_admin_agent"]
    assert "site_title" in context, "the base AdminSite context still passes through"


def test_each_context_cannot_be_reached_without_a_user_at_all() -> None:
    """Why this override has two states where the template tag has three.

    The tag handles a context with no request -- rendered outside a request
    cycle, or behind no ``AuthenticationMiddleware`` -- by rendering anyway,
    because "nobody to refuse" is not the answer "refused". That state is
    unreachable here: ``AdminSite.each_context`` reads ``request.user`` itself
    and raises first. Pinned so nobody adds a ``user is not None`` conjunct that
    no test could hold.
    """
    site = SidebarAdminSite()
    request = RequestFactory().get("/admin/")

    with pytest.raises(AttributeError, match="user"):
        site.each_context(request)


class _StaffUser:
    """Minimal stand-in for a signed-in staff user.

    ``is_authenticated`` is the load-bearing attribute and was missing while
    nothing read it -- a double that had quietly stopped resembling the thing it
    stands for, which is how it came to be named for the opposite of what it is.
    """

    is_active = True
    is_staff = True
    is_authenticated = True

    def has_perm(self, perm: str, obj: object | None = None) -> bool:  # noqa: ARG002
        return True
