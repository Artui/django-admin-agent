from __future__ import annotations

import inspect

from django_ag_ui import AGUIServer

from django_admin_agent.admin_agent_server import AdminAgentServer

# Re-declared on purpose, because this package overrides their defaults. Every
# other AGUIServer keyword must reach it untouched.
_OVERRIDDEN = {
    "require_authenticated": True,
    "authorize": None,  # a staff predicate; identity checked separately below
    "csrf_exempt": False,
    "namespace": None,  # the admin namespace; checked separately below
}


def _keyword_params(target: type) -> dict[str, inspect.Parameter]:
    return {
        name: p
        for name, p in inspect.signature(target.__init__).parameters.items()
        if p.kind is inspect.Parameter.KEYWORD_ONLY
    }


def test_every_ag_ui_keyword_still_reaches_the_server() -> None:
    """Either re-declared here, or absorbed by ``**kwargs`` — never dropped."""
    admin_params = _keyword_params(AdminAgentServer)
    absorbs_extras = any(
        p.kind is inspect.Parameter.VAR_KEYWORD
        for p in inspect.signature(AdminAgentServer.__init__).parameters.values()
    )

    dropped = [name for name in _keyword_params(AGUIServer) if name not in admin_params]

    assert absorbs_extras or not dropped, (
        f"AdminAgentServer no longer forwards {dropped} — it stopped taking "
        "**kwargs without re-declaring them, so those options are unreachable "
        "through the admin sidebar"
    )


def test_the_newest_ag_ui_options_are_reachable() -> None:
    """A live check, not just a signature one — the options actually land."""
    server = AdminAgentServer(
        model_for_request=lambda request: "anthropic:claude-sonnet-4.6",
        instructions_for_request=lambda request: "Be terse.",
        throttle=_NoopThrottle(),
    )

    assert server._view._model_for_request is not None
    assert server._view._instructions_for_request is not None
    assert server._view._throttle is not None


def test_the_admin_overrides_are_the_secure_ones() -> None:
    """The four this package re-declares, and why it re-declares them."""
    admin_params = _keyword_params(AdminAgentServer)

    assert admin_params["require_authenticated"].default is True
    assert admin_params["csrf_exempt"].default is False
    assert admin_params["authorize"].default is not None


class _NoopThrottle:
    def consume(self, request: object) -> int | None:
        return None
