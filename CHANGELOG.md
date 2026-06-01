# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

## [0.1.0] — 2026-06-01

### Added
- Chat-agent sidebar for the Django admin, built on `django-ag-ui` and the
  vendored `@artooi/ag-ui-web-component` `<ag-ui-chat>` bundle.
- Default server-side tool registry (`build_default_registry`) of read-only
  `shell.*` (query / count / fetch / inspect-schema) and `introspect.*`
  (model + admin registration) tools, plus `register_*_tools` builders and
  `get_urls()` to mount the agent endpoint.
- Frontend admin tool layer: `nav.*` navigation and DOM-driving handlers
  (fill field, click, apply changelist filter) with visible animations, and a
  confirmation modal gating `x-destructive` tools.
- Sidebar wiring: the `{% django_admin_agent_sidebar %}` template tag and a
  `SidebarAdminSite` (`each_context`) path, with an admin route + page map.
- Django Unfold compatibility shim (runtime JS; lazy, guarded Python).
- Optional `[mcp]` extra exposing the admin tools as an HTTP MCP server via
  `djangorestframework-mcp-server`.

[Unreleased]: https://github.com/Artui/django-admin-agent/compare/v0.1.0...HEAD
[0.1.0]: https://github.com/Artui/django-admin-agent/releases/tag/v0.1.0
