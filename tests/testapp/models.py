from __future__ import annotations

from django.db import models


class Author(models.Model):
    name = models.CharField(max_length=200)
    email = models.EmailField(unique=True, null=True, blank=True)

    class Meta:
        app_label = "testapp"
        ordering = ("name",)
        verbose_name = "author"
        verbose_name_plural = "authors"


class Book(models.Model):
    title = models.CharField(max_length=200)
    author = models.ForeignKey(Author, on_delete=models.CASCADE, related_name="books")
    published = models.DateField(null=True, blank=True)

    class Meta:
        app_label = "testapp"
        indexes = [models.Index(fields=["title"], name="book_title_idx")]
        unique_together = (("title", "author"),)
