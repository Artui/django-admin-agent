"""An always-present chat-agent sidebar in the Django admin."""

from django_admin_agent.admin_agent_server import AdminAgentServer
from django_admin_agent.staff_required import staff_required
from django_admin_agent.tools.introspect.register import register_introspect_tools
from django_admin_agent.tools.register import (
    build_default_registry,
    register_admin_tools,
)
from django_admin_agent.tools.shell.register import register_shell_tools
from django_admin_agent.version import __version__

__all__ = [
    "AdminAgentServer",
    "__version__",
    "build_default_registry",
    "register_admin_tools",
    "register_introspect_tools",
    "register_shell_tools",
    "staff_required",
]
