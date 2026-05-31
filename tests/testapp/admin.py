from __future__ import annotations

from django.contrib import admin

from tests.testapp.models import Author, Book


class BookInline(admin.TabularInline):
    model = Book
    extra = 0


@admin.register(Author)
class AuthorAdmin(admin.ModelAdmin):
    list_display = ("name", "email")
    list_filter = ("name",)
    search_fields = ("name", "email")
    inlines = (BookInline,)


@admin.action(description="Mark as featured")
def mark_featured(modeladmin, request, queryset):  # noqa: ANN001, ANN201, ARG001
    return None


@admin.register(Book)
class BookAdmin(admin.ModelAdmin):
    list_display = ("title", "author", "published")
    list_filter = ("published",)
    search_fields = ("title",)
    autocomplete_fields = ("author",)
    readonly_fields = ("published",)
    actions = (mark_featured,)
    fieldsets = (
        (None, {"fields": ("title", "author")}),
        ("Publishing", {"fields": ("published",)}),
    )
