"""URLconf mounting the agent endpoint but no admin site.

Used to exercise :func:`build_sidebar_context`'s fallback when
``reverse("admin:index")`` raises ``NoReverseMatch``.
"""

from __future__ import annotations

from django_admin_agent import get_urls

urlpatterns = [*get_urls()]
