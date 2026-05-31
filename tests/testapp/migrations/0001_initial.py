from __future__ import annotations

import django.db.models.deletion
from django.db import migrations, models


class Migration(migrations.Migration):
    initial = True

    dependencies: list[tuple[str, str]] = []

    operations = [
        migrations.CreateModel(
            name="Author",
            fields=[
                (
                    "id",
                    models.AutoField(
                        auto_created=True,
                        primary_key=True,
                        serialize=False,
                        verbose_name="ID",
                    ),
                ),
                ("name", models.CharField(max_length=200)),
                (
                    "email",
                    models.EmailField(blank=True, max_length=254, null=True, unique=True),
                ),
            ],
            options={
                "verbose_name": "author",
                "verbose_name_plural": "authors",
                "ordering": ("name",),
            },
        ),
        migrations.CreateModel(
            name="Book",
            fields=[
                (
                    "id",
                    models.AutoField(
                        auto_created=True,
                        primary_key=True,
                        serialize=False,
                        verbose_name="ID",
                    ),
                ),
                ("title", models.CharField(max_length=200)),
                ("published", models.DateField(blank=True, null=True)),
                (
                    "author",
                    models.ForeignKey(
                        on_delete=django.db.models.deletion.CASCADE,
                        related_name="books",
                        to="testapp.author",
                    ),
                ),
            ],
            options={
                "indexes": [models.Index(fields=["title"], name="book_title_idx")],
                "unique_together": {("title", "author")},
            },
        ),
    ]
