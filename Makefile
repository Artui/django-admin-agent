.PHONY: help init test test-e2e lint lint-fix format format-check type-check deps-bump docs-serve docs-build vendor-bundle vendor-bundle-release vendor-bundle-verify release-bump release-publish release-publish-prepare release-publish-finalize

help:
	@echo "Available targets:"
	@echo "  init             Sync deps (all groups) and install pre-commit hooks"
	@echo "  test             Run pytest with coverage (100% required)"
	@echo "  test-e2e         Run the Playwright browser suite against a live admin"
	@echo "  lint             Run ruff check + ty check"
	@echo "  lint-fix         Auto-fix lint issues with ruff"
	@echo "  format           Format with ruff"
	@echo "  format-check     Verify formatting"
	@echo "  type-check       Run ty over the package"
	@echo "  deps-bump        Upgrade pinned dependencies"
	@echo "  docs-serve       Live-reload docs at http://localhost:8000 (needs mkdocs.yml)"
	@echo "  docs-build       Build docs into ./site (strict — fails on broken links)"
	@echo "  vendor-bundle    Copy the web-component bundle from the sibling checkout (dev)"
	@echo "  vendor-bundle-release  Vendor the PINNED published web-component bundle (adoption; commit it)"
	@echo "  vendor-bundle-verify   Assert the committed bundle IS the pinned published one"
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
# below is the single source of truth, and the COMMITTED file is the artefact:
# a release verifies that the two agree and refuses to publish otherwise, so a
# published wheel ships exactly the bytes that were reviewed, tested and driven
# in a browser here.
WEB_COMPONENT_PKG := @artooi/ag-ui-web-component
WEB_COMPONENT_VERSION := 0.30.0
BUNDLE_DEST := django_admin_agent/static/django_admin_agent/ag-ui-web-component.bundle.js

# Fetch the pinned published component into a tmpdir and normalise its bundle
# to `$$tmp/pinned.js`, exactly as both vendor paths below want it: the
# sourcemap comment is stripped because the map is not published beside it.
# Shared so "what we vendor" and "what we verify against" cannot drift into two
# different definitions -- the whole point of the verify step.
define fetch_pinned_bundle
	tmp="$$(mktemp -d)"; \
	( cd "$$tmp" && npm pack "$(WEB_COMPONENT_PKG)@$(WEB_COMPONENT_VERSION)" >/dev/null ); \
	tar -xzf "$$tmp"/*.tgz -C "$$tmp"; \
	sed -e '/sourceMappingURL/d' "$$tmp/package/dist/ag-ui-web-component.bundle.js" > "$$tmp/pinned.js"
endef

# Dev: copy the locally-built bundle from the sibling checkout (run
# `make build` in ../ag-ui-web-component first). Convenient, may drift — the
# release re-vendor is the authoritative refresh.
vendor-bundle:
	cp ../ag-ui-web-component/dist/ag-ui-web-component.bundle.js $(BUNDLE_DEST)
	sed -e '/sourceMappingURL/d' "$(BUNDLE_DEST)" > "$(BUNDLE_DEST).tmp" && mv "$(BUNDLE_DEST).tmp" "$(BUNDLE_DEST)"
	@echo "Vendored ag-ui-web-component.bundle.js from the sibling checkout (dev)."

# Adoption: fetch the PINNED published version and write it into the tree. Run
# by a human bumping WEB_COMPONENT_VERSION above, and the result is COMMITTED.
# Not run by the release -- see vendor-bundle-verify for why.
vendor-bundle-release:
	@set -e; $(fetch_pinned_bundle); \
	cp "$$tmp/pinned.js" "$(BUNDLE_DEST)"; \
	rm -rf "$$tmp"; \
	echo "Vendored $(WEB_COMPONENT_PKG)@$(WEB_COMPONENT_VERSION). Commit it, then run 'make test-e2e'."
	@# Assert the artefact agrees with the pin, so a mis-fetch fails here rather
	@# than landing. tests/test_vendored_bundle.py enforces the same thing on
	@# every CI run, which is what catches drift nobody re-vendored for.
	@grep -q '"$(WEB_COMPONENT_VERSION)"' "$(BUNDLE_DEST)" \
		|| { echo "ERROR: bundle does not carry $(WEB_COMPONENT_VERSION)."; exit 1; }

# Release + per-PR gate: assert the COMMITTED bundle is byte-identical to the
# pinned published one. It verifies rather than overwrites, and that distinction
# is the whole point.
#
# The release used to re-vendor into the release runner immediately before
# building the wheel. That published bytes nobody had committed, diffed or
# executed: the tree a reviewer read and the suite exercised could be a local
# `make vendor-bundle` copy of a sibling checkout, while the wheel carried npm's,
# and no artefact was ever compared with the other. The only guard was a grep for
# the version string, which a locally built tree satisfies because its own source
# says the same version. A divergence shipped silently in either direction.
#
# Now the committed file is the artefact. If it disagrees with the pin the
# release stops and a human runs the adoption target above -- so whatever ships
# is what `bundle` in tests.yml checked, `tests/e2e` drove in a real browser, and
# a reviewer could read in the diff.
vendor-bundle-verify:
	@set -e; $(fetch_pinned_bundle); \
	if ! diff -q "$$tmp/pinned.js" "$(BUNDLE_DEST)" >/dev/null 2>&1; then \
		echo "ERROR: the committed bundle is NOT $(WEB_COMPONENT_PKG)@$(WEB_COMPONENT_VERSION)."; \
		echo "Run 'make vendor-bundle-release' and commit the result."; \
		diff "$$tmp/pinned.js" "$(BUNDLE_DEST)" | head -5 || true; \
		rm -rf "$$tmp"; \
		exit 1; \
	fi; \
	rm -rf "$$tmp"; \
	echo "The committed bundle is byte-identical to $(WEB_COMPONENT_PKG)@$(WEB_COMPONENT_VERSION)."

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

release-publish: vendor-bundle-verify
	@PACKAGE_NAME='$(RELEASE_PACKAGE_NAME)' \
	VERSION_FILES="$$(printf '$(RELEASE_VERSION_FILES)')" \
		bash scripts/release-publish.sh all

# Verify the committed bundle against the pin BEFORE the script builds the
# wheel, so the published artefact carries the reviewed bytes -- and refuses
# to publish rather than substituting bytes of its own.
release-publish-prepare: vendor-bundle-verify
	@PACKAGE_NAME='$(RELEASE_PACKAGE_NAME)' \
	VERSION_FILES="$$(printf '$(RELEASE_VERSION_FILES)')" \
		bash scripts/release-publish.sh prepare

release-publish-finalize:
	@PACKAGE_NAME='$(RELEASE_PACKAGE_NAME)' \
	VERSION_FILES="$$(printf '$(RELEASE_VERSION_FILES)')" \
		bash scripts/release-publish.sh finalize
