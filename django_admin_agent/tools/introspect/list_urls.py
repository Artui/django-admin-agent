from __future__ import annotations

from typing import Any

from django.urls import URLPattern, URLResolver, get_resolver


def list_urls(prefix: str | None = None) -> list[dict[str, Any]]:
    """Walk the root URL configuration and return every registered route.

    Each entry includes the rendered pattern, view identifier, and URL
    name. ``prefix`` filters by string-containment against the pattern.
    """
    resolver = get_resolver()
    rows: list[dict[str, Any]] = []
    _walk(resolver, "", rows)
    if prefix is not None:
        rows = [row for row in rows if prefix in row["pattern"]]
    return rows


def _walk(node: URLResolver | URLPattern, base: str, out: list[dict[str, Any]]) -> None:
    if isinstance(node, URLResolver):
        local = base + str(node.pattern)
        for entry in node.url_patterns:
            _walk(entry, local, out)
        return
    pattern = base + str(node.pattern)
    callback = node.callback
    module = getattr(callback, "__module__", "?")
    qualname = getattr(
        callback,
        "__qualname__",
        getattr(callback, "__name__", repr(callback)),
    )
    out.append({"pattern": pattern, "name": node.name, "view": f"{module}.{qualname}"})


__all__ = ["list_urls"]
