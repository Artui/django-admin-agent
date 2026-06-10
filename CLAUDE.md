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

The AG-UI stack design doc (`django-ag-ui-plan.md`) lives in the private ecosystem planning workspace, outside this repo.

## Local development

`django-ag-ui` is resolved from PyPI via the plain `django-ag-ui>=0.2` pin in
`pyproject.toml` (so CI, which has no sibling checkout, syncs cleanly). To
develop both packages together against a local checkout, add a `[tool.uv.sources]`
override *locally* (do not commit it) and `uv sync`:

```toml
[tool.uv.sources]
django-ag-ui = { path = "../django-ag-ui", editable = true }
```

### The vendored web-component bundle

`django_admin_agent/static/django_admin_agent/ag-ui-web-component.bundle.js` is
a **build artefact**, not hand-written — it is esbuild's minified output from
`@artooi/ag-ui-web-component` (TypeScript source), with `@ag-ui/*` inlined.

The bundle is **version-pinned** in the `Makefile` (`WEB_COMPONENT_VERSION`).
That pin is the source of truth:

- **Release** re-vendors the pinned published version. `make
  release-publish-prepare` runs `make vendor-bundle-release` (which `npm pack`s
  `@artooi/ag-ui-web-component@$(WEB_COMPONENT_VERSION)` and copies its built
  bundle) *before* building the wheel. So a released wheel always ships exactly
  the pinned bundle — ongoing web-component changes can never retroactively
  break a released `django-admin-agent`, and bumping the bundle is a deliberate
  `WEB_COMPONENT_VERSION` change + release.
- **Dev** uses `make vendor-bundle` to copy from the sibling
  `../ag-ui-web-component/dist/` checkout. The committed copy is a convenience
  (so `git clone` + `runserver` works) and may drift; the release re-vendor is
  the authoritative refresh.

To adopt a new web-component version: bump `WEB_COMPONENT_VERSION`, run `make
vendor-bundle-release` (or `vendor-bundle` in dev), commit, release.

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
| django-ag-ui | 0.2 | from PyPI (`>=0.2`) |
| Django Unfold (supported, optional) | 0.40 | latest in matrix |

## Branching & releases

Branch-first for every feature/bump; never commit to `main` locally. Releases
are merge-to-main triggered via `.github/workflows/release.yml` →
`scripts/release-publish.sh` (version source: `django_admin_agent/version.py`).
OIDC trusted publishing to PyPI; `mkdocs gh-deploy` to gh-pages. Cut a release
with `make release-bump VERSION=X.Y.Z`, edit CHANGELOG, PR, merge.
