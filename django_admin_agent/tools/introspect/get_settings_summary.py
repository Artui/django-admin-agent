from __future__ import annotations

from typing import Any

from django.conf import settings

# Curated allowlist. SECRET_KEY, API tokens, and DB passwords are
# deliberately omitted; database settings are surfaced with credentials
# redacted.
_SAFE_KEYS: tuple[str, ...] = (
    "DEBUG",
    "INSTALLED_APPS",
    "MIDDLEWARE",
    "ROOT_URLCONF",
    "LANGUAGE_CODE",
    "TIME_ZONE",
    "USE_I18N",
    "USE_TZ",
    "DEFAULT_AUTO_FIELD",
    "AUTH_USER_MODEL",
    "ALLOWED_HOSTS",
    "STATIC_URL",
    "MEDIA_URL",
    "WSGI_APPLICATION",
    "ASGI_APPLICATION",
)

_REDACTED_DB_KEYS: frozenset[str] = frozenset({"PASSWORD", "OPTIONS"})


def get_settings_summary() -> dict[str, Any]:
    """Return a curated, JSON-safe subset of Django settings.

    Sensitive keys (``SECRET_KEY``, DB passwords, raw ``OPTIONS``) are
    excluded or redacted, so the result is safe to surface to an agent.
    """
    out: dict[str, Any] = {}
    for key in _SAFE_KEYS:
        if hasattr(settings, key):
            out[key] = _coerce(getattr(settings, key))
    out["DATABASES"] = _summarise_databases(getattr(settings, "DATABASES", {}))
    out["CACHES"] = _summarise_caches(getattr(settings, "CACHES", {}))
    return out


def _coerce(value: Any) -> Any:
    if isinstance(value, list | tuple):
        return [_coerce(item) for item in value]
    if isinstance(value, dict):
        return {str(k): _coerce(v) for k, v in value.items()}
    if isinstance(value, str | int | float | bool) or value is None:
        return value
    return repr(value)


def _summarise_databases(databases: dict[str, Any]) -> dict[str, Any]:
    out: dict[str, Any] = {}
    for alias, config in databases.items():
        out[alias] = {
            key: ("<redacted>" if key in _REDACTED_DB_KEYS else _coerce(value))
            for key, value in config.items()
        }
    return out


def _summarise_caches(caches: dict[str, Any]) -> dict[str, Any]:
    return {alias: {"BACKEND": config.get("BACKEND")} for alias, config in caches.items()}


__all__ = ["get_settings_summary"]
