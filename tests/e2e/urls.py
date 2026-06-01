from __future__ import annotations

from django.contrib import admin
from django.urls import path

from django_admin_agent import get_urls
from tests.e2e.scripted_model import scripted_model

urlpatterns = [
    path("admin/", admin.site.urls),
    *get_urls(model=scripted_model),
]
