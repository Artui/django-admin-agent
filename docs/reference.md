# API reference

The public Python surface re-exported from `django_admin_agent`.

## Package entry points

::: django_admin_agent.urls.get_urls

::: django_admin_agent.tools.register.build_default_registry

::: django_admin_agent.tools.register.register_admin_tools

::: django_admin_agent.tools.shell.register.register_shell_tools

::: django_admin_agent.tools.introspect.register.register_introspect_tools

## Settings

::: django_admin_agent.conf.AdminAgentSettings

::: django_admin_agent.conf.get_settings

## Admin wiring

::: django_admin_agent.admin.build_sidebar_context.build_sidebar_context

::: django_admin_agent.admin.build_route_map.build_route_map

::: django_admin_agent.admin.sidebar_admin_site.SidebarAdminSite

## Server-side tools

### `shell.*`

::: django_admin_agent.tools.shell.query_model.query_model

::: django_admin_agent.tools.shell.get_model_instance.get_model_instance

::: django_admin_agent.tools.shell.count_model.count_model

::: django_admin_agent.tools.shell.inspect_model_schema.inspect_model_schema

### `introspect.*`

::: django_admin_agent.tools.introspect.list_installed_apps.list_installed_apps

::: django_admin_agent.tools.introspect.list_models.list_models

::: django_admin_agent.tools.introspect.list_urls.list_urls

::: django_admin_agent.tools.introspect.list_signals.list_signals

::: django_admin_agent.tools.introspect.get_settings_summary.get_settings_summary

::: django_admin_agent.tools.introspect.list_admin_models.list_admin_models

::: django_admin_agent.tools.introspect.inspect_modeladmin.inspect_modeladmin
