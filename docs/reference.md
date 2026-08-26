# API reference

The public Python surface re-exported from `django_admin_agent`.

## Package entry points

::: django_admin_agent.admin_agent_server.AdminAgentServer

::: django_admin_agent.staff_required.staff_required

::: django_admin_agent.tools.register.build_default_registry

::: django_admin_agent.tools.register.register_admin_tools

::: django_admin_agent.tools.shell.register.register_shell_tools

::: django_admin_agent.tools.introspect.register.register_introspect_tools

## Permission parity

The tools answer as the staff user driving the sidebar. These are the pieces
that establish who that is and what they may read — see
[Access control](configuration.md#access-control) for the rules they enforce.

::: django_admin_agent.tools.build_admin_deps.build_admin_deps

::: django_admin_agent.tools.bind_acting_request.bind_acting_request

::: django_admin_agent.tools.authorized_model_admin.authorized_model_admin

::: django_admin_agent.tools.admin_queryset.admin_queryset

::: django_admin_agent.tools.utils.visible_model_admin

::: django_admin_agent.tools.utils.require_acting_request

::: django_admin_agent.tools.utils.model_in_scope

::: django_admin_agent.tools.utils.resolve_model

## Settings

::: django_admin_agent.conf.AdminAgentSettings

::: django_admin_agent.conf.get_settings

## Admin wiring

::: django_admin_agent.admin.build_sidebar_context.build_sidebar_context

::: django_admin_agent.admin.build_route_map.build_route_map

::: django_admin_agent.admin.build_skills.build_skills

::: django_admin_agent.admin.sidebar_admin_site.SidebarAdminSite

## Server-side tools

### `shell.*`

::: django_admin_agent.tools.shell.query_model.query_model

::: django_admin_agent.tools.shell.get_model_instance.get_model_instance

::: django_admin_agent.tools.shell.count_model.count_model

::: django_admin_agent.tools.shell.inspect_model_schema.inspect_model_schema

::: django_admin_agent.tools.shell.redact_sensitive_fields.redact_sensitive_fields

::: django_admin_agent.tools.shell.reject_redacted_lookups.reject_redacted_lookups

::: django_admin_agent.tools.shell.redaction_pattern.redaction_pattern

### `introspect.*`

::: django_admin_agent.tools.introspect.list_installed_apps.list_installed_apps

::: django_admin_agent.tools.introspect.list_models.list_models

::: django_admin_agent.tools.introspect.list_urls.list_urls

::: django_admin_agent.tools.introspect.list_signals.list_signals

::: django_admin_agent.tools.introspect.get_settings_summary.get_settings_summary

::: django_admin_agent.tools.introspect.list_admin_models.list_admin_models

::: django_admin_agent.tools.introspect.inspect_modeladmin.inspect_modeladmin
