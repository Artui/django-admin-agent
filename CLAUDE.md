# Repo conventions for `django-admin-agent`

Single source of truth for how to write code here. Rules are non-negotiable
unless flagged as a heuristic.

## What this package is

An always-present chat-agent sidebar embedded in the Django admin. It depends
on two sibling packages:
- **`django-ag-ui`** — the Django ↔ Pydantic-AI ↔ AG-UI bridge. Provides
  `ToolRegistry`, the `@tool` decorator, `DjangoAGUIView`, `get_urls`, the
  audit logger. This package *builds on* those; it does not reimplement them.
- **`@artooi/ag-ui-web-component`** — the `<ag-ui-chat>` Web Component. We
  vendor its built bundle into `django_admin_agent/static/django_admin_agent/`
  and load it from the admin templates.

This package adds: server-side admin tools (`shell.*` / `introspect.*` /
`nav.*`), the admin-specific frontend tool handlers (DOM driving), the
`SidebarAdminSite` / `each_context` / template-tag plumbing, and an Unfold
compatibility shim.

The design is at `/Users/arturveres/code/opensource/docs/plans/django-ag-ui-plan.md`.

## Local development

`django-ag-ui` is resolved from the sibling checkout `../django-ag-ui` via
`[tool.uv.sources]` in `pyproject.toml` (editable). Released wheels keep the
plain `django-ag-ui>=0.1` pin. After changing the sibling, `make init` (or
`uv sync`) picks it up.

The vendored web-component bundle in `static/` is a built artefact copied from
`../ag-ui-web-component/dist/ag-ui-web-component.bundle.js`. Re-vendor it
(`make vendor-bundle`, once that target exists) when the component changes.

## Commands

| Target | What it does |
| --- | --- |
| `make init` | `uv sync --all-groups` + install pre-commit hooks |
| `make test` | pytest with 100% line+branch coverage gate |
| `make lint` | `ruff check .` + `ty check django_admin_agent` |
| `make format` | `ruff format .` |
| `make docs-build` | `mkdocs build --strict` |
| `make release-bump VERSION=X.Y.Z` | rewrite `version.py` + promote CHANGELOG |

## Structural rules

1. **One exported class or function per file.** File name = `snake_case` of the
   symbol. `constants.py` is the only multi-export file (enums + constants).
2. **Private one-file helpers** stay local with a leading `_`.
3. **Cross-file non-exported helpers** go in a sibling `utils.py`.
4. **Top-level imports only.** Optional deps (`unfold`, `rest_framework_mcp`)
   import lazily inside function bodies with a clear `ImportError` message.
5. **Full type annotations** on every signature. `Any` only at Django ORM /
   admin boundaries where the type genuinely is `Any`.
6. **`__init__.py` is the only re-export point.** Internal modules import from
   leaf paths, never from the package `__init__`.
7. **Always `from __future__ import annotations`.** Python 3.10+, no PEP 695
   `type` statements, no `match`.
8. **Absolute imports only**, ordered stdlib → third-party → first-party
   (`django_admin_agent`). Never relative.
9. **Types and functionality in separate sub-packages** (`types/` siblings).

## Reuse, don't reimplement

The agent loop, tool registry, AG-UI transport, and audit logger live in
`django-ag-ui`. Import them:
- `django_ag_ui.ToolRegistry`, `django_ag_ui.tool` (the `@tool` decorator),
  `django_ag_ui.ToolCategory`
- `django_ag_ui.DjangoAGUIView`, `django_ag_ui.get_urls`
- `django_ag_ui.AuditLogger` and friends

This package contributes *tools* and *admin wiring*, not transport.

## No module-level or class-level mutable state

State lives on instances. No module-level mutable singletons or class-body
mutables; initialise in `__init__`. A project may mount more than one sidebar.

## Tests

- `make test` runs pytest with `--cov=django_admin_agent --cov-fail-under=100`
  (line + branch). Restructure rather than `# pragma: no cover`.
- Layout mirrors the source tree under `tests/`.
- `tests/conftest_settings.py` is the Django settings module (admin + auth +
  sessions installed). Fixture admin apps live under `tests/`.
- Async tests: `async def test_...` (pytest-asyncio auto mode). DB tests:
  `@pytest.mark.django_db`.

## Lint and types

- `make lint` runs `ruff check .` + `ty check django_admin_agent`. CI fails on
  either. `ruff format` is the layout source of truth.
- Pre-commit runs `make lint-fix`, `make format`, `make type-check`. Never
  `--no-verify`.

## Boundaries

- Core imports `django.contrib.admin`; that is expected here (unlike
  `django-ag-ui`, which must stay admin-free).
- `unfold` is never imported at module load — the shim is JS, runtime-detected
  in the browser; any Python Unfold introspection is lazy + guarded.
- The `[mcp]` extra plugs into `djangorestframework-mcp-server`; import it
  lazily.

## Compatibility floor

| Component | Floor | Tested |
| --- | --- | --- |
| Python | 3.10 | 3.10–3.14 |
| Django | 4.2 LTS | 4.2, 5.0, 5.1, 5.2, 6.0 |
| django-ag-ui | 0.1 | sibling checkout in dev |
| Django Unfold (supported, optional) | 0.40 | latest in matrix |

## Branching & releases

Branch-first for every feature/bump; never commit to `main` locally. Releases
are merge-to-main triggered via `.github/workflows/release.yml` →
`scripts/release-publish.sh` (version source: `django_admin_agent/version.py`).
OIDC trusted publishing to PyPI; `mkdocs gh-deploy` to gh-pages. Cut a release
with `make release-bump VERSION=X.Y.Z`, edit CHANGELOG, PR, merge.
