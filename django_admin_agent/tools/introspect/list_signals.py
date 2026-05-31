from __future__ import annotations

import weakref
from typing import Any

from django.core.signals import (
    got_request_exception,
    request_finished,
    request_started,
    setting_changed,
)
from django.db.models.signals import (
    class_prepared,
    m2m_changed,
    post_delete,
    post_init,
    post_migrate,
    post_save,
    pre_delete,
    pre_init,
    pre_migrate,
    pre_save,
)
from django.dispatch import Signal

_KNOWN: dict[str, Signal] = {
    "django.core.signals.request_started": request_started,
    "django.core.signals.request_finished": request_finished,
    "django.core.signals.got_request_exception": got_request_exception,
    "django.core.signals.setting_changed": setting_changed,
    "django.db.models.signals.pre_init": pre_init,
    "django.db.models.signals.post_init": post_init,
    "django.db.models.signals.pre_save": pre_save,
    "django.db.models.signals.post_save": post_save,
    "django.db.models.signals.pre_delete": pre_delete,
    "django.db.models.signals.post_delete": post_delete,
    "django.db.models.signals.m2m_changed": m2m_changed,
    "django.db.models.signals.class_prepared": class_prepared,
    "django.db.models.signals.pre_migrate": pre_migrate,
    "django.db.models.signals.post_migrate": post_migrate,
}


def list_signals() -> list[dict[str, Any]]:
    """Enumerate Django's built-in signals and their connected receivers.

    Returns one row per signal with the count and identifier of each
    connected receiver. Custom third-party signals are not enumerated —
    there is no central registry for them.
    """
    out: list[dict[str, Any]] = []
    for name, signal in _KNOWN.items():
        # ``Signal.receivers`` rows put the receiver (weak or strong) at
        # index 1; later elements differ across Django versions.
        receivers = [_describe_receiver(entry[1]) for entry in signal.receivers]
        out.append(
            {"signal": name, "receiver_count": len(receivers), "receivers": receivers},
        )
    return out


def _describe_receiver(ref: Any) -> str:
    target = ref() if isinstance(ref, weakref.ReferenceType) else ref
    if target is None:
        return "<dead weakref>"
    module = getattr(target, "__module__", "?")
    name = getattr(target, "__qualname__", getattr(target, "__name__", repr(target)))
    return f"{module}.{name}"


__all__ = ["list_signals"]
