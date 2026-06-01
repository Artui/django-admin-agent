.PHONY: help init test lint lint-fix format format-check type-check deps-bump docs-serve docs-build vendor-bundle vendor-bundle-release release-bump release-publish release-publish-prepare release-publish-finalize

help:
	@echo "Available targets:"
	@echo "  init             Sync deps (all groups) and install pre-commit hooks"
	@echo "  test             Run pytest with coverage (100% required)"
	@echo "  lint             Run ruff check + ty check"
	@echo "  lint-fix         Auto-fix lint issues with ruff"
	@echo "  format           Format with ruff"
	@echo "  format-check     Verify formatting"
	@echo "  type-check       Run ty over the package"
	@echo "  deps-bump        Upgrade pinned dependencies"
	@echo "  docs-serve       Live-reload docs at http://localhost:8000 (needs mkdocs.yml)"
	@echo "  docs-build       Build docs into ./site (strict — fails on broken links)"
	@echo "  vendor-bundle    Copy the web-component bundle from the sibling checkout (dev)"
	@echo "  vendor-bundle-release  Vendor the PINNED published web-component bundle (release)"
	@echo "  release-bump     Bump version files + CHANGELOG. Usage: make release-bump VERSION=X.Y.Z"
	@echo "  release-publish  prepare → uv publish → finalize (workstation release)"
	@echo "  release-publish-prepare   Run by release.yml on push to main (no-op unless bumped)"
	@echo "  release-publish-finalize  Tag vX.Y.Z + create GitHub Release after PyPI publish"

init:
	uv sync --all-groups
	uv run pre-commit install

test:
	uv run pytest

# Browser end-to-end suite: Playwright drives a live admin through the sidebar.
# Separate settings + no coverage gate (it exercises JS + the server over HTTP).
test-e2e:
	DJANGO_ALLOW_ASYNC_UNSAFE=1 uv run pytest tests/e2e --ds=tests.e2e.settings -o addopts="" -p no:cacheprovider

lint:
	uv run ruff check .
	uv run ty check django_admin_agent

lint-fix:
	uv run ruff check --fix .

format:
	uv run ruff format .

format-check:
	uv run ruff format --check --diff .

type-check:
	uv run ty check django_admin_agent

deps-bump:
	uvx uv-upx upgrade run --profile with_pinned

docs-serve:
	uv run --group docs mkdocs serve

docs-build:
	uv run --group docs mkdocs build --strict

# The web-component bundle is a vendored build artefact. The PINNED version
# below is the single source of truth: a release re-vendors exactly this
# version (see release-publish-prepare), so a published wheel never depends on
# the live web-component source and ongoing component changes cannot
# retroactively affect a released django-admin-agent.
WEB_COMPONENT_PKG := @artooi/ag-ui-web-component
WEB_COMPONENT_VERSION := 0.1.1
BUNDLE_DEST := django_admin_agent/static/django_admin_agent/ag-ui-web-component.bundle.js

# Dev: copy the locally-built bundle from the sibling checkout (run
# `make build` in ../ag-ui-web-component first). Convenient, may drift — the
# release re-vendor is the authoritative refresh.
vendor-bundle:
	cp ../ag-ui-web-component/dist/ag-ui-web-component.bundle.js $(BUNDLE_DEST)
	@echo "Vendored ag-ui-web-component.bundle.js from the sibling checkout (dev)."

# Release: fetch the PINNED published version and vendor its built bundle. Run
# automatically by release-publish-prepare so every wheel ships exactly
# $(WEB_COMPONENT_PKG)@$(WEB_COMPONENT_VERSION). Fails loudly if the pinned
# version cannot be fetched — better than shipping a stale bundle.
vendor-bundle-release:
	@set -e; tmp="$$(mktemp -d)"; \
	( cd "$$tmp" && npm pack "$(WEB_COMPONENT_PKG)@$(WEB_COMPONENT_VERSION)" >/dev/null ); \
	tar -xzf "$$tmp"/*.tgz -C "$$tmp"; \
	cp "$$tmp/package/dist/ag-ui-web-component.bundle.js" "$(BUNDLE_DEST)"; \
	rm -rf "$$tmp"; \
	echo "Vendored $(WEB_COMPONENT_PKG)@$(WEB_COMPONENT_VERSION) bundle (release)."

release-bump:
	@if [ -z "$(VERSION)" ]; then \
		echo "Usage: make release-bump VERSION=X.Y.Z"; exit 1; \
	fi
	uvx bump-my-version bump --new-version "$(VERSION)" patch
	@echo ""
	@echo "Bumped to $(VERSION). Edit CHANGELOG.md to fill the new section,"
	@echo "review with 'git diff', then run 'make release-publish'."

# Release pipeline. Version lives in django_admin_agent/version.py
# (pyproject pulls it in via [tool.hatch.version] dynamic).
RELEASE_PACKAGE_NAME := django-admin-agent
RELEASE_VERSION_FILES := django_admin_agent/version.py|^__version__[^=]*= *

release-publish: vendor-bundle-release
	@PACKAGE_NAME='$(RELEASE_PACKAGE_NAME)' \
	VERSION_FILES="$$(printf '$(RELEASE_VERSION_FILES)')" \
		bash scripts/release-publish.sh all

# Re-vendor the pinned bundle BEFORE the script builds the wheel, so the
# published artefact always carries a fresh, version-pinned bundle.
release-publish-prepare: vendor-bundle-release
	@PACKAGE_NAME='$(RELEASE_PACKAGE_NAME)' \
	VERSION_FILES="$$(printf '$(RELEASE_VERSION_FILES)')" \
		bash scripts/release-publish.sh prepare

release-publish-finalize:
	@PACKAGE_NAME='$(RELEASE_PACKAGE_NAME)' \
	VERSION_FILES="$$(printf '$(RELEASE_VERSION_FILES)')" \
		bash scripts/release-publish.sh finalize
