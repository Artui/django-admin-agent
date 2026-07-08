"""URLconf mounting the agent server but no admin site.

Used to exercise :func:`build_sidebar_context`'s fallback when
``reverse("admin:index")`` raises ``NoReverseMatch``.
"""

from __future__ import annotations

from django.urls import path

from django_admin_agent import AdminAgentServer

urlpatterns = [path("admin-agent/", AdminAgentServer().urls)]
