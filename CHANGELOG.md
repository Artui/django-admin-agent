# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

## [0.23.0] — 2026-08-13

### Fixed

- **A sidebar conversation abandoned its next multi-step task once it had
  answered anything.** The vendored web component restored stored history by
  iterating an assistant turn's `toolCalls` behind an `!== undefined` check, and
  `django-ag-ui` serialises that field as `null` for a turn that called no tool.
  Iterating the `null` threw inside the replay, so the replay stopped at the first
  plain answer.

  In a single-page host that costs a short transcript. In the admin it costs the
  run: every navigating tool (`open_changelist`, `submit_form`, `apply_filter`)
  reloads the page, and the loop continues only because the component rehydrates
  and completes the pending call from the page it lands on. With the replay
  throwing, a thread that had answered once stopped silently at its first
  navigation — the agent would open a change form and never type into it.
  Reproduced and then re-verified across two reloads: find a row, open its form,
  fill a field, save.

  Fixed upstream in `@artooi/ag-ui-web-component` 0.23.1 and vendored here. It
  only ever affected a mount with a `conversation_store` configured, which is the
  setup [Configuration](https://artui.github.io/django-admin-agent/configuration/)
  recommends: without one there is no server-backed history to restore.

### Changed

- **The vendored bundle moves 0.21.0 → 0.23.1, three releases at once**, so the
  sidebar's chrome changes along with the fix above. From 0.22.0: the composer is
  one surface rather than four boxes, collapsing goes to a round floating launcher
  with an unread badge, the history and checkpoint panels slide instead of
  appearing, the chrome's glyphs are inline SVG, and there are new motion and
  launcher CSS tokens. From 0.23.0: attachment-chip fixes, including a filename
  that was invisible on the stock light theme. Nothing in this package's own API
  changes; a project that themes the sidebar through `--ag-ui-*` variables should
  look at it once after upgrading.

  Note that the pin had drifted two minors before this, and the guard that exists
  could not have caught it: `tests/test_vendored_bundle.py` asserts the **pin and the
  bundle agree with each other**, which a stale-but-consistent pair does. Nothing
  compares either against what is published.

### Fixed

- **The reST literal-block marker no longer reaches the page.** Sphinx reads a
  trailing `::` as "an indented literal block follows" and prints one colon;
  Markdown has no such rule, so the second colon rendered verbatim. The indented
  block was already coming out as a code block either way, so this drops the
  stray character and nothing else.

### Fixed

- **Docstring cross-references now render as links instead of raw markup.** The
  docstrings carried Sphinx roles — ``:class:`~django_admin_agent.AdminAgentServer` ``
  — but the docs build is mkdocstrings, which renders docstring bodies as
  Markdown and has no such syntax, so each one reached the published page
  verbatim, `:class:` prefix and Sphinx's abbreviating `~` included. They are now
  mkdocstrings autorefs links. References to `django-ag-ui`'s `AGUIServer` became
  plain code spans: no inventory for sibling packages is configured, so a link
  there could not resolve.

### Added

- **A weekly `upstream-drift.yml` — the newest-end measurement 0.22.0 shipped
  without.** It ignores `uv.lock`, resolves the newest versions
  `pyproject.toml` admits, installs every group *and every extra*, and runs the
  suite on the newest supported Python; a failure opens (or comments on) an
  issue labelled `upstream-drift`, and the `git diff --stat uv.lock` step in
  that run names what moved. The sibling repos have run this job for a while;
  this one did not, which is exactly what the 0.22.0 note flagged when the
  ceilings came off. ⇒ *The two measurements that replace a ceiling are now
  both in place: `floor` resolves lowest-direct per PR (the oldest end), and
  this resolves unpinned weekly (the newest end).*

  A ceiling is a guess about which future versions will break; these are a
  measurement of which ones do. Until now this repo had only the oldest end, so
  a breaking upstream minor was caught here only when a human happened to sync
  — which is a schedule, not a control.

  **The first run is not hypothetical.** Resolving unpinned today already
  moves both open windows past the bounds that were removed —
  `django-ag-ui` 0.39.0 → 0.40.0 and `djangorestframework-mcp-server`
  0.30.0 → 0.31.0, on Django 6.1 — and the suite passes against all three. That
  is the newest end being measured rather than assumed, on day one.

  Two local notes for whoever edits this job. `--all-extras` is load-bearing
  rather than tidy: `djangorestframework-mcp-server` is reachable only through
  the `[mcp]` extra, so a base install would leave half of the open windows
  unmeasured. And the default `addopts` already carry `--ignore=tests/e2e`, so
  this measures the unit suite and needs no browser install — the e2e-only
  dependencies are outside it.

### Fixed

- **The installation docs advertised a `django-ag-ui` window that had not
  existed for two releases.** The "Compatibility floor" admonition still read
  `>=0.17,<0.19` while the package declares `>=0.39` with no upper bound —
  wrong at *both* ends. It could not break an install, because `pyproject.toml`
  is what a resolver reads; what it could do is answer the question the page
  exists to answer, wrongly and in the discouraging direction. Someone holding
  `django-ag-ui` 0.40 and checking whether this package works with it read a
  documented ceiling of `<0.19` and had every reason to conclude it does not.

  The same admonition omitted Django 6.1, which the matrix has been testing,
  and never mentioned the `[mcp]` extra's `djangorestframework-mcp-server>=0.30`
  at all, though the extra is installed a few lines above it.

  **The claim lived in two places with nothing tying them.** `CLAUDE.md`
  carried its own copy and was right about `django-ag-ui`: the release that
  moved the pin updated the table a contributor reads and not the page a user
  reads, which is why the drift ran two releases without being noticed. Both
  now cover the same five components, and `CLAUDE.md` says outright that the
  two are one claim to two audiences and move together. ⇒ *Nothing here changes
  what resolves — only what the docs say resolves.*

## [0.22.0] — 2026-08-11

### Changed

- **The upper bound came off both sibling windows: `django-ag-ui>=0.39` and the
  `[mcp]` extra's `djangorestframework-mcp-server>=0.30`.** Both were one-minor
  windows over a package we ship ourselves, which is not a compatibility
  statement but a *schedule*: every upstream release made this package
  unresolvable until someone re-cut it, whether or not anything broke. This repo
  sat at the end of the chain and paid for it most often — a large share of its
  recent releases were pin refreshes carrying no behaviour. Against that there
  is no recorded case of a ceiling here catching a real incompatibility, while
  they caused four incidents in this ecosystem, including a **Security** release
  published-and-unreachable, and two disjoint windows that resolved
  *successfully* by silently downgrading a consumer past every fix. ⇒ *A project
  can now install this package alongside the current `django-ag-ui` on the day
  it ships, instead of waiting for a release here that exists only to move a
  number.*

  Both siblings are ours, so the external-0.x risk that applies upstream does
  not apply to this pair directly — but it reaches here transitively, since
  `django-ag-ui` now admits any `ag-ui-protocol` and `pydantic-ai-harness` 0.x
  minor. The floors themselves are unchanged; nothing older resolves than did
  before.

### Added

- **A `floor` job in `tests.yml`, wired into the `tests` aggregate gate.** It
  resolves every *declared* dependency at `--resolution lowest-direct` and runs
  the suite, then installs the package **alone** — no extras, no dev group — and
  imports it plus a few public symbols, with `django.contrib.admin` and the two
  apps it needs to register its models configured first. An all-extras install
  cannot check a floor on its own, because one extra can hold a shared
  dependency above the floor being claimed.

  **This repo has the oldest-end measurement but not yet the newest-end one.**
  The sibling repos also run a weekly `upstream-drift.yml` that ignores the lock
  and resolves the newest versions `pyproject.toml` admits; this repo has no
  such job, so a breaking upstream minor is currently caught here only when a
  human syncs. ⇒ *Worth adding before the open windows are relied on heavily.*

## [0.21.0] — 2026-08-11

### Fixed

- **`placement="side"` is full-height again.** The vendored bundle was pinned
  to web component 0.20.0, which shipped with a regression: a dragged size is
  written as a custom property on the host, and an inline custom property
  outranks the `:host([placement="side"])` rule setting the same property — so
  one resize collapsed the docked panel's height, and the size persists per tab,
  so it stayed collapsed on every later visit. Fixed upstream in 0.20.1 and
  carried here by this re-vendor.

  **It has been live in 0.20.0 for the whole of the host-integration wave**, a
  deliberate trade to re-vendor once at the end rather than twice — recorded
  rather than discovered.

### Changed

- **Vendored web component 0.20.0 → 0.21.0**, which brings the whole
  host-integration wave to the admin sidebar: CSS custom properties now work
  from an ancestor, the flash ring is an `outline` that an `overflow: hidden`
  ancestor cannot clip and lasts long enough to be seen, `getHeaders` and
  `credentials` reach every request rather than only the agent run,
  `openThreads()` / `openCheckpoints()` / `reload()` are callable from a host's
  own chrome, and the resize grip sits on the corner that actually moves.

- **Upstream windows moved to `django-ag-ui>=0.39,<0.40` and
  `djangorestframework-mcp-server>=0.30,<0.31`** — the releases where a
  `FilterSet`'s `OrderingFilter` owns ordering end to end, and where
  `AGUIServer(service_specs=...)` is typed for the shapes it accepts.

### Added

- **A test that the vendored bundle carries the version the Makefile pins.**
  The bundle is a build artefact with no other check: the tests are Python, the
  bundle is JavaScript, and `vendor-bundle-release` is a *release-time* action
  nobody re-runs when reviewing a change.

  **That gap is not hypothetical** — the pin sat four minors behind the
  published component before anyone noticed, and a `make vendor-bundle` run
  against a sibling checkout leaves a bundle that looks fine and is whatever
  happened to be built locally. The release target now asserts the same thing
  before it builds a wheel, so a mis-fetch fails there rather than shipping.

## [0.20.0] — 2026-08-11

### Changed

- **Ecosystem refresh: `django-ag-ui>=0.38,<0.39`, `[mcp]` to
  `djangorestframework-mcp-server>=0.29,<0.30`, and the vendored web-component
  bundle re-cut from `@artooi/ag-ui-web-component@0.20.0`** (was 0.18.0).

  **Everything from the chat-surface wave reaches the admin sidebar only
  here.** Until this release the pins excluded all of it: a restored transcript
  still lost every tool call and tool result on reload (the server was serving
  `tool_calls` to a client reading `toolCalls`), a failing tool still ended the
  whole run, and a paginated MCP tool still advertised a `limit.maximum` five
  times its own dispatch default.

  What the new bundle brings to the sidebar: tool cards that separate
  **Arguments** from **Result** with a display mode that applies live, a
  confirmation card that sits inside the turn and leaves once answered while the
  tool card keeps the decision, a resizable panel, per-control header icon
  slots, and skills that can send a `/name` token instead of publishing their
  prompt to the browser.

  **This package is why the wave needed a ninth release.** Refreshing it
  resolved `pydantic-ai-slim` **2.9.1** — the oldest end of a range every
  upstream repo only ever tested at its newest — and `django-pydantic-agent`
  0.12.0 could not import there at all. Fixed upstream in 0.12.1; the floor is
  now `>=2.16`. A downstream consumer resolving from scratch is the only thing
  in this stack that exercises that end of the range.

## [0.19.0] — 2026-08-10

### Changed

- **`django-ag-ui` floor raised to `>=0.35,<0.36`, `[mcp]` to
  `djangorestframework-mcp-server>=0.28,<0.29`, and the vendored web-component
  bundle to `0.18.0`** (was ag-ui `>=0.30,<0.31`, drf-mcp `>=0.27,<0.28`, bundle
  `0.15.0`).

  **Two published fixes were unreachable from here, and one of them is the
  sidebar's own front door.**

  **The agent endpoint's authentication default flipped closed in ag-ui
  0.31.0** — every route now refuses anonymous callers — and this package's
  `<0.31` ceiling excluded it. The sidebar was never *open*, because
  `AdminAgentServer` has always passed `require_authenticated=True`,
  `csrf_exempt=False` and a staff predicate of its own. But a project mounting
  its own `AGUIServer` alongside kept the old open default, and the sub-views
  the flip also covers — the thread drawer, the attachment routes, the tool
  catalog — were reachable without it.

  **drf-mcp 0.28.0 refuses an authenticated caller with no `pk`** instead of
  collapsing every such caller onto the shared `"anonymous"` principal, where
  any two of them can present each other's sessions. The `<0.28` ceiling
  excluded that too. It reaches the bridge, not only the MCP endpoint:
  `DRFMCPToolset` runs the same principal resolution.

  **The bundle jump is three web-component releases in one step** (0.16.0 →
  0.18.0): the stale-page guard on frontend tool calls and the
  run-interrupted-by-navigation notice, then `sendMessage` / `attachFile` and
  the attachment event, the connect-time-config warning, checkpoint-panel
  theming and focus management, styled markdown tables, the code-block copy
  button, and the send-time notice for uploads still in flight. Verified in a
  real browser by the Playwright suite, which drives the vendored bundle rather
  than a build of it.

### Added

- **A test asserting `AdminAgentServer` still forwards every `AGUIServer`
  option.** It re-declares four arguments deliberately — the ones this package
  overrides to secure defaults — and passes the rest through `**kwargs`.

  **A wrapper that re-declares a wrapped constructor is a second place every
  new option has to be added, and nothing in lint, types or coverage can see the
  omission** — the wrapper compiles, the suite passes, the option is simply
  absent. That has already happened once in this ecosystem, where nine keywords
  added to `SpecToolset` reached `SpecCapability` not at all, including the one
  escape hatch its own upgrade notes pointed people at. This is the last of the
  three wrappers to get a guard.

  The class docstring stopped enumerating what it forwards, for the same reason.

## [0.18.0] — 2026-08-10

### Changed

- **`django-ag-ui>=0.30`** (was `>=0.29,<0.30`). Pins only; nothing here uses
  `service_specs=`, so 0.30's pre-built-toolset support does not reach the
  sidebar. Full suite green against it.

  **Released promptly on purpose, though nothing is broken.** An exclusive
  ceiling stops being correct the moment the dependency's minor moves, and a
  release that is *published but unreachable* is the quieter half of shipping —
  the announcement reads as completion while every consumer still resolves the
  old version. Tracking that gap costs less than rediscovering it.

  **Structurally, every `django-ag-ui` minor obsoletes this pin by
  construction.** That is scheduled, not accidental, so the follow-up release is
  part of the cost of an ag-ui minor rather than a surprise.

## [0.17.0] — 2026-08-10

### Changed

- **Floors raised: `django-ag-ui>=0.29`, and the `[mcp]` extra to
  `djangorestframework-mcp-server>=0.27`.** Pins only — no source change, full
  suite green against both.

  **The `[mcp]` move is what keeps this package co-installable.** drf-mcp
  0.26 required `djangorestframework-services>=0.34.0,<0.35` while
  `djangorestframework-pydantic-ai` 0.13 requires `>=0.35,<0.36`. Disjoint — so
  `django-admin-agent[mcp]` installed **alongside**
  `django-ag-ui[spec-tools]` could not resolve at all, even though this package
  on its own resolved fine. *A conflict that only appears in combination is
  invisible to any per-package check*, which is why the floor moves here rather
  than waiting for someone to hit it.

### Upgrading

- **If you pass `service_specs=` to an `AGUIServer` of your own**, django-ag-ui
  0.29 refuses a spec with no `permission_classes` at construction rather than
  exposing an ungated tool — `permission_classes=None` means *inherit* over
  HTTP, and off HTTP there is nothing to inherit from. Nothing in this package
  uses `service_specs=`, so the sidebar itself is unaffected; see django-ag-ui's
  0.29.0 notes for the migration path.

## [0.16.2] — 2026-08-10

### Security

- **The `[mcp]` extra now requires `djangorestframework-mcp-server>=0.26`**
  (was `>=0.25,<0.26`), which closes a fail-open authentication defect.

  **Take this one promptly if you serve the admin tools over MCP.** An
  `async def authenticate` on a backend mounted under `server.urls` returned an
  un-awaited coroutine, which is truthy — so the `token is None` check that
  produces the `401` passed and every caller was served as authenticated. The
  upstream release refuses the configuration instead, and sweeps the same shape
  across four more hooks (permissions, list-time visibility, rate limiters, and
  the sync transport's session store) where an `async def` was likewise read as
  a yes. See its [0.26.0 notes][drf-mcp-0.26.0] for the full table.

  Nothing in this package supplies any of those hooks, so the upgrade needs no
  code change here — the exposure was only ever in a project's own backend or
  permission classes. The ceiling was excluding the fix, which is the whole
  reason for this release.

[drf-mcp-0.26.0]: https://github.com/Artui/djangorestframework-mcp-server/blob/main/CHANGELOG.md

## [0.16.1] — 2026-08-08

### Security

- **Re-vendored `@artooi/ag-ui-web-component` 0.14.0 → 0.15.0**, which raises
  the **DOMPurify bundled into the shipped chat asset from 3.4.7 to 3.4.13** and
  closes the five advisories the old exact pin was holding open (three LOW, two
  MEDIUM).

  **DOMPurify ships *inside* the bundle**, not as a peer dependency — so
  until now every install of `django-admin-agent` served 3.4.7 to the browser
  regardless of anything in this repo. Only a re-vendor moves it.

  **The pin it lifts was never the protection it looked like.** It was
  holding 3.4.7 because 3.4.8+ appeared not to sanitise — a symptom that turned
  out to be happy-dom's DOM emulation, reproducible only in that test
  environment. Verified in real Chromium: 3.4.13 sanitises correctly, so
  consumers of this package were never exposed, and the upstream component now
  runs its sanitisation tests in a real browser on every CI run.

## [0.16.0] — 2026-08-07

### Changed

- **Floors raised**: `django-ag-ui>=0.28`, and the `[mcp]` extra to
  `djangorestframework-mcp-server>=0.25`.

  **Floors rather than widened ceilings.** drf-mcp 0.25 changes behaviour
  rather than adding surface — an unguarded tool now *raises* at registration
  instead of warning, and a request with no `Mcp-Session-Id` returns `400`
  rather than `404`. Admitting 0.24 beside 0.25 is a pairing that resolves
  cleanly and behaves differently, which no resolver can see.

- **Tested against Django 6.1**, with the lock moved to
  `djangorestframework>=3.18`. Django 6.1 removed
  `django.utils.cache.cc_delim_re`, which DRF 3.17.x imports at module level, so
  that pairing fails at `import rest_framework` rather than at runtime.

### Security

- **`pymdown-extensions` → 11.0.1**, closing the repo's one open advisory
  (MEDIUM — path traversal in the `b64` extension). Docs-only, so it never
  reached the served surface.

## [0.15.2] — 2026-08-02

### Changed

- **`[mcp]` extra floor raised to `djangorestframework-mcp-server>=0.24.1`.**

  These are **floor** moves, not ceiling widenings — the previous ranges already
  admitted the patched releases, so nothing was unresolvable. What they did not
  do is *guarantee* them, and the versions below the new floor carry an
  authorization bypass in their transitive `djangorestframework-services`
  dependency: nested target resolution built its kwarg pool without stripping the
  reserved dispatcher seeds, so a caller-supplied `user` key outranked the
  authenticated one in the pool that decides which row gets mutated and which set
  gets bulk-deleted. Fixed in drf-services 0.33.0.

  A version pair that resolves cleanly and leaves the bypass live is exactly
  what a resolver cannot see, which is why the floor moves rather than the
  ceiling. Installing this extra now gets the fix, rather than merely permitting
  it.

  No source changes; the full suite passes against the updated chain untouched.

## [0.15.1] — 2026-07-31

### Changed

- **Re-vendored `@artooi/ag-ui-web-component` 0.12.0 → 0.14.0**
  (`WEB_COMPONENT_VERSION`), closing the last stale pin in the stack. The
  sidebar picks up 0.13's shared-state surface (`registerPageState`) and 0.14's
  skill chip and compaction observer.

  **A refresh, not an adoption.** Unlike previous re-vendors, no Python or
  template change rides along: this package wires none of the new capabilities,
  and every attribute `sidebar.html` sets on `<ag-ui-chat>` — `endpoint`,
  `title-text`, `data-auto-confirm`, `data-tool-display`, `data-slash-commands`,
  `theme`, `density`, `placement`, `data-side` — is handled by the new bundle
  exactly as by the old one.

  **The new surfaces are not inert, though.** With django-ag-ui 0.27 behind
  it, an agent that loads a deferred capability will now show a skill chip that
  0.12.0 did not render. Nothing needs configuring for that to appear.

## [0.15.0] — 2026-07-31

### Changed

- **`django-ag-ui` moves to `>=0.27,<0.28`** (was `>=0.23,<0.24`), and the
  `[mcp]` extra gains a ceiling: **`djangorestframework-mcp-server>=0.17,<0.25`**
  (was an unbounded `>=0.6.1`).

  This closes out a stack-wide bump — drf-services 0.32, drf-mcp 0.24,
  djangorestframework-pydantic-ai 0.11, django-pydantic-agent 0.5, django-ag-ui
  0.27 — that started from a genuine conflict further upstream (drf-mcp 0.24 and
  PAI `<0.11` required disjoint drf-services ranges). This package was never
  part of that conflict; its own pin was simply four minors behind, which meant
  installing it quietly held the whole stack at old releases.

  **No adaptation was needed.** The roadmap expected an adoption pass across
  ag-ui 0.24/0.25/0.26 — 0.24 made `AgentSession`'s `deps` keyword-only and
  required, and 0.25 moved the harness floor. Neither reaches here: this package
  touches `AGUIServer`, `ToolRegistry`, `ToolCategory`, `tool` and one
  `get_setting`, and never constructs an `AgentSession` itself. Full suite green
  against the new versions with no source change.

  **The unbounded `[mcp]` floor was a latent version of the bug this wave was
  about.** A floor with no ceiling silently admits any future major of a package
  whose wire behaviour has changed under it — which is exactly how a resolvable
  install ends up behaving wrongly. It now matches every other extra in the
  stack.

### Upgrading

- **Run `migrate`.** `django-pydantic-agent` 0.4.0 added a `state` column and
  migration `0002` to `DefaultStepStore`, and this release crosses that version.
  Only relevant if you use step persistence; harmless otherwise.

## [0.14.0] — 2026-07-27

### Added

- **Continue a run from the sidebar.** With a `step_store` configured,
  `AdminAgentServer` mounts django-ag-ui's run index and the sidebar passes it to
  the Web Component as `data-runs-url`, giving the header a ⭯ *Continue a run*
  panel: a run that stopped part-way resumes from its last server-side
  checkpoint, or forks without touching the original. Self-gating — no step
  store, no attribute, no panel — the same rule the thread / upload / mic URLs
  follow.

### Changed

- **Re-vendored `@artooi/ag-ui-web-component` 0.11.0 → 0.12.0** (the checkpoint
  panel).
- **`django-ag-ui` pin `>=0.19,<0.20` → `>=0.23,<0.24`**, adopting four releases
  at once: durable step persistence (0.20), the agent-host substrate extraction
  (0.21), spec-registry support (0.22) and the run index (0.23). No code change
  was needed — every symbol this package imports is permanently re-exported by
  django-ag-ui after the 0.21 extraction.

### Fixed

- **The configuration docs told readers to set settings keys that now refuse to
  start.** `CONVERSATION_STORE`, `ATTACHMENT_STORE` and friends were removed in
  django-ag-ui 0.19 — the release this package already depended on — and
  `check_removed_settings` raises `ImproperlyConfigured` at URL-conf import if
  one is still present, deliberately, so a silently-dropped collaborator can't
  go unnoticed. A project following the old guidance would fail to boot. The
  docs now show the constructor arguments that replaced them, with a migration
  note naming all ten removed keys.
- **They also pointed at a module that moved.** `django_ag_ui.contrib.store`
  became `django_pydantic_agent.contrib.store` in the 0.21 extraction, so the
  `INSTALLED_APPS` and store-path instructions raised `ModuleNotFoundError`.
  Repointed, along with `DjangoSessionConversationStore`'s import path.


## [0.13.0] — 2026-07-17

Adopts **django-ag-ui 0.19**, whose configuration is now per-endpoint, and
retires `URL_NAMESPACE` — the last piece of this package that assumed exactly
one mounted sidebar.

**Breaking** only if you set `DJANGO_ADMIN_AGENT["URL_NAMESPACE"]`. Everything
else in `DJANGO_ADMIN_AGENT` is unchanged: it is presentation config for a
singleton sidebar, consumed by a template tag, and stays exactly where it is.

### Changed

- **Requires `django-ag-ui>=0.19,<0.20`** (was `>=0.17,<0.19`), picking up
  per-endpoint configuration, collaborators-as-objects, and
  `ScopedConversationStore`. `AdminAgentServer` passes every extra keyword
  through to `AGUIServer`, so its new arguments (`toolsets=`, `capabilities=`,
  `drf_mcp_server=`, `config=`, …) are available on the admin sidebar too.

  If your project set any of the ten dotted-path settings ag-ui removed
  (`TOOLSETS`, `CONVERSATION_STORE`, `AUDIT_LOGGER`, …), they now raise
  `ImproperlyConfigured` naming the replacement. See
  [django-ag-ui 0.19.0](https://github.com/Artui/django-ag-ui/blob/main/CHANGELOG.md).

- The composer's upload-cap hint reads `DJANGO_AG_UI["ATTACHMENT_MAX_BYTES"]` /
  `["ATTACHMENT_ALLOWED_TYPES"]` directly (ag-ui's `get_settings` is gone). It is
  a **hint**: those are per-endpoint in 0.19, so a server built with an explicit
  `config=` could hold different values. Cosmetic only — `AttachmentsView`
  enforces its own config server-side and still rejects the upload.

### Removed

- **`DJANGO_ADMIN_AGENT["URL_NAMESPACE"]`.** The namespace is now an argument:

  ```django
  {# before: the setting named the one server #}
  {% django_admin_agent_sidebar %}

  {# after: name the server this sidebar belongs to #}
  {% django_admin_agent_sidebar namespace="internal-agent" %}
  ```

  A single-sidebar project passes nothing — the tag defaults to the same
  `"admin_agent"` the server does. `SidebarAdminSite` gains a matching
  `sidebar_namespace` class attribute.

  The setting duplicated state the server already held (you stated it twice and
  kept the two in step) and, being one global, could name only **one** server —
  though this package has always intended to support more than one sidebar. The
  installation docs even claimed you could "set it *and* `namespace=` together to
  mount two sidebars", which one global value cannot do.

### Added

- Docs: [Two sidebars in one project](https://artui.github.io/django-admin-agent/installation/#two-sidebars-in-one-project).

## [0.12.0] — 2026-07-14

### Changed

- **Adopted `django-ag-ui` 0.17+ — the human-in-the-loop tool-approval gate is
  now live in the admin.** The pin moves from `>=0.12,<0.13` to `>=0.17,<0.19`,
  bringing the server-side `TOOL_GUARD` gate (0.17) and the CodeMode `[harness]`
  extra (0.18). A project can now set `DJANGO_AG_UI["TOOL_GUARD"] = {"ENABLED":
  True}` so destructive admin tools defer for approval — the re-vendored sidebar
  (below) renders the approve/deny card and resumes the run. Off by default. No
  admin code change; the intervening `django-ag-ui` releases (0.13–0.16 —
  namespaced `.urls`, the capability-based audit / session split, and
  `SpecCapability`) are additive to the admin's usage, so the existing suite
  passes unchanged against both 0.17 and 0.18.
- **Re-vendored the 0.11.0 web-component bundle** (`WEB_COMPONENT_VERSION`),
  bringing the human-in-the-loop client UI and a customization pass to the admin
  sidebar:
  - **Server-side tool-approval card** — when the agent gates a destructive tool,
    the sidebar renders an inline approve/deny card and resumes the run with the
    decision (the AG-UI interrupt/resume loop). Now active end-to-end with the
    `django-ag-ui` bump above.
  - **`ask_user`** — an opt-in built-in typed-question tool (`chat.askUser`).
  - **Full `::part()` customization** of every widget (approval / question cards,
    attachment chips, skills UI, drawer rows) plus `approvalRenderer` /
    `askUserRenderer` hooks. No admin code change — the bundle is a drop-in.

## [0.11.0] — 2026-07-08

### Added

- **`AdminAgentServer` — the sidebar's mount object.** A
  `django_ag_ui.AGUIServer` subclass pre-configured for the admin (the default
  admin tool registry + the fail-closed staff gate). Construct it once and mount
  its namespaced `.urls` the `admin.site.urls` way:

  ```python
  from django_admin_agent import AdminAgentServer

  urlpatterns = [
      path("admin/", admin.site.urls),
      path("admin-agent/", AdminAgentServer().urls),
  ]
  ```

  Extra keyword arguments (`model`, `conversation_store`, `attachment_store`,
  `transcription_backend`, `authorize`, …) pass through to `AGUIServer`. Requires
  `django-ag-ui>=0.12`.

### Removed (breaking)

- **`get_urls` is removed** in favour of `AdminAgentServer` (upstream dropped its
  own `get_urls` in 0.12). Migrate the root URLconf from
  `*get_urls(model=...)` to `path("admin-agent/", AdminAgentServer(model=...).urls)`.
  `staff_required` is still exported (now from `django_admin_agent` directly, not
  `django_admin_agent.urls`).
- **Endpoint URL names are now namespaced.** The flat global names
  (`django_admin_agent_endpoint` / `_tools` / `_threads` / …) are replaced by the
  `admin_agent` namespace — `reverse("admin_agent:endpoint")`, `"admin_agent:tools"`,
  …. The `ENDPOINT_URL_NAME` setting is replaced by **`URL_NAMESPACE`** (default
  `"admin_agent"`); set it if you mount the server with a non-default `namespace=`.
  The agent endpoint also moves from `<prefix>agent/` to `<prefix>` (the sidebar
  reverses by name, so this is transparent).

### Changed (breaking)

- **The thread / upload / transcription sub-views mount only when their store is
  configured** (the `AGUIServer` conditional-mounting contract), instead of always
  mounting `Null`-backed endpoints. With no `CONVERSATION_STORE` / `ATTACHMENT_STORE`
  / `TRANSCRIPTION_BACKEND`, those `data-*-url` attributes are absent and the
  sidebar shows no upload / mic affordance (the history drawer falls back to the
  client's per-tab threads, as before).
- Bumped the `django-ag-ui` floor to `>=0.12,<0.13`.

## [0.10.1] — 2026-07-03

### Changed

- **The admin sidebar now forwards the configured upload guards to the browser.**
  When uploads are mounted, `build_sidebar_context()` mirrors django-ag-ui's
  server-side `ATTACHMENT_MAX_BYTES` / `ATTACHMENT_ALLOWED_TYPES` onto the
  `<ag-ui-chat>` element as `data-attachment-max-bytes` / `data-attachment-accept`,
  so the composer can reject oversized or wrong-type files before upload. The
  server stays authoritative; this is instant client-side feedback only.
- **Documentation:** documented the sidebar customization settings the code
  already reads (`STRINGS`, `ICON_URL`, `SIDE`, `THEME_TOGGLE`) and the
  `sidebar` placement value; refreshed the admin-wiring context table; and
  corrected the stale `django-ag-ui` version floor in the README and docs to the
  current `>=0.10,<0.12` pin.
- **Vendored bundle:** stripped the trailing `sourceMappingURL` pointer from the
  vendored web-component bundle (the `.map` is not shipped), so admin pages no
  longer 404 for a missing source map; the `Makefile` re-vendor targets strip it
  on every refresh.
- **Dependency:** widened the `django-ag-ui` pin to `>=0.10,<0.12` to allow the
  published 0.11.x line (CI-validated against 0.11.x).

## [0.10.0] — 2026-07-02

### Changed

- **Re-vendored the 0.10.0 web-component bundle** (`WEB_COMPONENT_VERSION`),
  adopting its client-lifecycle hardening — no new admin settings and no
  `django-ag-ui` pin change. The sidebar now: ignores Enter while a run is
  streaming (no second concurrent run); on teardown (sidebar removed / route
  swapped) cancels the run, aborts in-flight uploads, and releases the mic;
  presents the chat-history drawer as a focus-trapped, Escape-closable modal
  dialog; scopes its stored collapsed/theme/thread state per instance so two
  sidebars on one origin no longer clobber each other (existing state migrates
  automatically); and hardens history replay against a thread-switch race, a
  malformed thread response, unparseable timestamps, and corrupt attachment
  refs.

## [0.9.0] — 2026-07-02

### Security

- **The mounted routes are now fail-closed (breaking: anonymous access
  removed).** `get_urls` previously mounted the agent endpoint and its
  companions (tool catalog, thread index, uploads, transcription) **open** — an
  unauthenticated visitor could drive the agent and, via `shell.query_model`,
  stream model rows including `auth.User` password hashes back over SSE. Every
  route now defaults to `require_authenticated=True` (401 for anonymous) **and**
  `authorize=staff_required` (403 for a non-staff user), returning JSON rather
  than an HTML login redirect (so `admin_view()` is not used), and the agent
  endpoint defaults to `csrf_exempt=False` (the sidebar bootstrap already sends
  the token). Relax deliberately via `get_urls(require_authenticated=..., authorize=..., csrf_exempt=...)`.
  Pins `django-ag-ui>=0.10,<0.11` (the release that added the `authorize=` seam).
- **Sensitive fields are redacted from the shell tools.** `shell.query_model` /
  `shell.get_model_instance` now redact any field whose name matches
  `DJANGO_ADMIN_AGENT["SHELL_FIELD_REDACTION"]` (default
  `password|token|secret|key|hash`, case-insensitive) before the row reaches the
  model — even a legitimate staff query shouldn't ship a password hash to a
  third-party LLM. Set `False` to disable, or a regex `str` to override the
  denylist. New export: `django_admin_agent.urls.staff_required`.

## [0.8.0] — 2026-06-30

### Added

- **Re-vendored the 0.9.0 web-component bundle** (`WEB_COMPONENT_VERSION`) and
  bumped the `django-ag-ui` pin to `>=0.8,<0.9`, adopting the rich-turn UI:
  the per-turn answer well, inline tool-display mode + themeable status icons, and
  — for a reasoning model — a collapsible streamed **thoughts** region (no admin
  wiring needed; it appears whenever `DJANGO_AG_UI["MODEL_SETTINGS"]` enables
  thinking).
- **Voice input.** `get_urls` now also mounts a transcription endpoint at
  `<prefix>agent/transcribe/` (named `django_admin_agent_transcribe`) and the
  sidebar passes its URL as `data-transcribe-url`, so the composer gains a mic
  button. Voice is off until `DJANGO_AG_UI["TRANSCRIPTION_BACKEND"]` is set (or a
  backend is passed via `get_urls(transcription_backend=...)`); django-ag-ui's
  opt-in `OpenAITranscriptionBackend` is the batteries-included option.
- **`THEME_TOGGLE` setting** → `data-theme-toggle`: opt into the web component's
  built-in light⇄dark header toggle (off by default).

## [0.7.0] — 2026-06-26

### Changed
- **Re-vendored the `@artooi/ag-ui-web-component` bundle to 0.7.0**
  (`WEB_COMPONENT_VERSION`), activating its UI-customization, localization, and
  page-action features in the admin sidebar, plus the mid-run "connection lost"
  reliability fix.

### Added
- **Localized sidebar strings.** `DJANGO_ADMIN_AGENT["STRINGS"]` is passed
  through to the Web Component as its `data-strings` table (a partial override of
  the English defaults). Wrap values in `gettext_lazy` and the sidebar follows
  the admin's active language.
- **Sidebar branding & docking.** `ICON_URL` surfaces a header/launcher icon
  (`data-icon-url`); `SIDE` (`"left"` / `"right"`) sets the dock edge
  (`data-side`) for the new `PLACEMENT = "sidebar"` (a full-height docked panel
  that collapses to an icon rail).

## [0.6.0] — 2026-06-25

### Added
- **File uploads in the sidebar.** `get_urls` now mounts django-ag-ui's
  `AttachmentsView` at `<prefix>agent/attachments/[<id>/]` (named
  `django_admin_agent_attachments` / `django_admin_agent_attachment`), and
  `build_sidebar_context` passes its URL to the Web Component as
  `data-attachments-url` — so an admin can attach files to a message (+
  drag-and-drop) and the agent reads them via the `read_attachment` tool.
  Owner-scoped to the admin user; CSRF rides the bootstrap's existing
  `el.headers`. Uploads are disabled by default (a `NullAttachmentStore` → `410`)
  until `DJANGO_AG_UI["ATTACHMENT_STORE"]` is set (e.g. the opt-in
  `DefaultAttachmentStore`), or an `attachment_store=` is passed to `get_urls`.

### Changed
- **Bumped the `django-ag-ui` pin to `>=0.7,<0.8`** (for `AttachmentStore` /
  `AttachmentsView` / `read_attachment`) and re-vendored the
  `@artooi/ag-ui-web-component@0.6.0` bundle (the upload tray + `uploadHandler`).

## [0.5.0] — 2026-06-24

### Added
- **Chat-history drawer in the sidebar.** The chat header gains a history toggle
  (☰) that opens a slide-over listing past conversations (title · relative time ·
  preview) with select · new chat · inline rename · delete-with-confirm. Riding
  the vendored web-component 0.5.0, it is wired to the server thread index below,
  so an admin user sees their durable history and can switch between threads.
- **Server-side thread index for the chat-history drawer.** `get_urls` now mounts
  the owner-scoped thread endpoints at `<prefix>agent/threads/` (list) and
  `<prefix>agent/threads/<id>/` (load / rename / delete), and the sidebar passes
  their URL to the Web Component as `data-threads-url`. They use the same
  `CONVERSATION_STORE` the agent endpoint persists to (override with the new
  `get_urls(conversation_store=...)` argument). To get **durable, cross-device,
  per-admin-user history**, set `DJANGO_AG_UI["CONVERSATION_STORE"]` to
  django-ag-ui's reference store (`django_ag_ui.contrib.store`); without one, the
  drawer falls back to the client's per-tab threads.

### Changed
- Vendored bundle → **`@artooi/ag-ui-web-component` 0.5.0** (the chat-history
  drawer, `RemoteConversationStore`, and the `data-threads-url` wiring).
- Bumped the `django-ag-ui` pin to `>=0.6,<0.7` (for the thread-index API).

## [0.4.0] — 2026-06-14

### Added
- **Stop a run from the sidebar.** While the agent is working, the composer's
  Send button becomes a **Stop** button (or press <kbd>Escape</kbd>); starting a
  new chat also stops an in-flight run. Stopping aborts the streaming request,
  dismisses any open destructive-confirmation modal, and keeps the partial reply
  under a muted "⏹ Stopped" note. This rides the vendored web-component 0.4.0.

### Changed
- Vendored bundle → **`@artooi/ag-ui-web-component` 0.4.0** (cancel / Stop
  control, `onCancelled`, Escape-to-stop, confirmation dismissal).
- Pins **`django-ag-ui>=0.4,<0.5`** (was `>=0.3`): its guarded stream guarantees
  the Pydantic-AI / model-provider request is torn down when a run is stopped —
  no orphaned generation or runaway token spend — persists the partial
  conversation when a conversation store is configured, and records a run-level
  cancellation audit event.

## [0.3.0] — 2026-06-03

### Added
- **Server-tool card labels via the catalog endpoint.** `get_urls()` now also
  mounts django-ag-ui's tool catalog at `<prefix>agent/tools/` (named
  `django_admin_agent_tools`), and the sidebar passes it to the Web Component as
  `data-tools-url`. The labels live on each tool's `@tool(summary=…)` (e.g.
  `query_model` → "Query records", `inspect_modeladmin` → "Inspect admin") — a
  single server-side source, fetched by the component.

### Changed
- Vendored bundle → **`@artooi/ag-ui-web-component` 0.3.0** (`data-tools-url`
  catalog fetch). Pins `django-ag-ui>=0.3` (the catalog endpoint / `ToolsView`)
  and `djangorestframework-mcp-server>=0.6.1`.

### Removed
- The static `DJANGO_ADMIN_AGENT["TOOL_SUMMARIES"]` setting + `build_tool_summaries`
  map + the embedded `tool-summaries` `json_script` — superseded by the fetched
  catalog (no per-tool client duplication). Labels now live on `@tool(summary=…)`.

## [0.2.0] — 2026-06-02

### Added
- `DJANGO_ADMIN_AGENT["TOOL_DISPLAY"]` setting (default `"compact"`), passed to
  the Web Component as `data-tool-display` to control how much tool-call detail
  the sidebar shows.
- Dynamic per-model **change route** in the navigable route map
  (`/admin/<app>/<model>/:pk/change/`), filled by the agent via
  `navigate_to_route` params.
- `x-confirm` confirmation prompts on the destructive `submit_form` and
  `run_admin_action` tools.
- **Skills** — a built-in catalog of pre-defined prompts (e.g. "Summarize this
  changelist"), embedded via `build_sidebar_context` and surfaced in the
  sidebar's `/`-command palette (enabled by default). Override the catalog with
  `DJANGO_ADMIN_AGENT["SKILLS"]`; the bootstrap also wires a page-derived
  `skillContext` for `{placeholder}` prompts.
- **Styling settings** — `THEME` (light/dark/auto/code), `DENSITY`
  (comfortable/compact), `PLACEMENT` (bottom-left/side/full/embedded), and
  `TEXT_ANIMATION` (none/fade/word), each passed through to the Web Component as
  an attribute when set.
- `x-summary` labels on the destructive `submit_form` ("Submit form") and
  `run_admin_action` ("Run bulk action") tools.
- **Friendly card labels for the server-side tools** (`shell.*` / `introspect.*`),
  whose schema never reaches the browser: a built-in name → label map is embedded
  and set as the Web Component's `toolSummaries` (e.g. `query_model` → "Query
  records"). Override the whole map with `DJANGO_ADMIN_AGENT["TOOL_SUMMARIES"]`.

### Changed
- Vendored the `@artooi/ag-ui-web-component` bundle at **0.2.2** (markdown/HTML
  rendering, pending indicator, new-chat + collapse, inline confirmation card,
  tool-display modes, richer animations, dynamic routes, skills; 0.2.1's
  server-side tool results in the card + tool activity surviving a page refresh +
  the pending-indicator fix; and 0.2.2's friendlier tool-call labels, the
  "No result returned." honesty fix, and the text-animation double-fire fixes).
  Requires `django-ag-ui>=0.2`, so it also picks up the drf-mcp full-schema +
  in-process-execution fixes and `build_model` provider resolution.
- Admin DOM tools now use the Web Component's animated primitives:
  `select_option` / `toggle_checkbox` animate the control, and buttons
  (`click_button`, `submit_form`, `run_admin_action`) use the "press" animation.

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

[Unreleased]: https://github.com/Artui/django-admin-agent/compare/v0.23.0...HEAD
[0.23.0]: https://github.com/Artui/django-admin-agent/compare/v0.22.0...v0.23.0
[0.22.0]: https://github.com/Artui/django-admin-agent/compare/v0.21.0...v0.22.0
[0.21.0]: https://github.com/Artui/django-admin-agent/compare/v0.20.0...v0.21.0
[0.20.0]: https://github.com/Artui/django-admin-agent/compare/v0.19.0...v0.20.0
[0.19.0]: https://github.com/Artui/django-admin-agent/compare/v0.18.0...v0.19.0
[0.18.0]: https://github.com/Artui/django-admin-agent/compare/v0.17.0...v0.18.0
[0.17.0]: https://github.com/Artui/django-admin-agent/compare/v0.16.2...v0.17.0
[0.16.2]: https://github.com/Artui/django-admin-agent/compare/v0.16.1...v0.16.2
[0.16.1]: https://github.com/Artui/django-admin-agent/compare/v0.16.0...v0.16.1
[0.16.0]: https://github.com/Artui/django-admin-agent/compare/v0.15.2...v0.16.0
[0.15.2]: https://github.com/Artui/django-admin-agent/compare/v0.15.1...v0.15.2
[0.15.1]: https://github.com/Artui/django-admin-agent/compare/v0.15.0...v0.15.1
[0.15.0]: https://github.com/Artui/django-admin-agent/compare/v0.14.0...v0.15.0
[0.14.0]: https://github.com/Artui/django-admin-agent/compare/v0.13.0...v0.14.0
[0.13.0]: https://github.com/Artui/django-admin-agent/compare/v0.12.0...v0.13.0
[0.12.0]: https://github.com/Artui/django-admin-agent/compare/v0.11.0...v0.12.0
[0.11.0]: https://github.com/Artui/django-admin-agent/compare/v0.10.1...v0.11.0
[0.10.1]: https://github.com/Artui/django-admin-agent/compare/v0.10.0...v0.10.1
[0.10.0]: https://github.com/Artui/django-admin-agent/compare/v0.9.0...v0.10.0
[0.9.0]: https://github.com/Artui/django-admin-agent/compare/v0.8.0...v0.9.0
[0.8.0]: https://github.com/Artui/django-admin-agent/compare/v0.7.0...v0.8.0
[0.7.0]: https://github.com/Artui/django-admin-agent/compare/v0.6.0...v0.7.0
[0.6.0]: https://github.com/Artui/django-admin-agent/compare/v0.5.0...v0.6.0
[0.5.0]: https://github.com/Artui/django-admin-agent/compare/v0.4.0...v0.5.0
[0.4.0]: https://github.com/Artui/django-admin-agent/compare/v0.3.0...v0.4.0
[0.3.0]: https://github.com/Artui/django-admin-agent/compare/v0.2.0...v0.3.0
[0.2.0]: https://github.com/Artui/django-admin-agent/compare/v0.1.0...v0.2.0
[0.1.0]: https://github.com/Artui/django-admin-agent/releases/tag/v0.1.0
