# Unfold & vanilla support

The sidebar works against **vanilla Django admin** and **[Django
Unfold](https://github.com/unfoldadmin/django-unfold)** through a single shared
DOM driver. There is no Python dependency on Unfold: the package never imports
it at module load, and the only Unfold-specific code is a runtime-detected
JavaScript shim in the browser.

## Why one driver covers both

Unfold preserves Django's structural DOM contracts, which is exactly what the
frontend tool handlers target:

- form inputs live at `#id_<field_name>`
- submit-row buttons use `name="_save"` / `_continue` / `_addanother`
- changelist rows carry `name="_selected_action"` checkboxes valued by pk
- bulk actions use a `<select name="action">` plus a `name="index"` Go button
- filter links live under `#changelist-filter`

Because these hold on both, the same `ui_read.*` / `ui_write.*` / `nav.*`
handlers drive both admins with no behavioural change to the agent.

## The two quirks the shim smooths

`static/django_admin_agent/unfold_shim.js` is guarded behind an `isUnfold()`
check (`window.Alpine` present **and** `body.unfold` class), so on vanilla admin
every function is a no-op and `admin_tools.js` can call them unconditionally.

1. **Alpine.js tabs.** Unfold change-form fields can live inside `x-show`-hidden
   Alpine tab panels. `activateTabForField(el)` finds the enclosing
   `[x-show*="activeTab"]` panel, parses its tab slug, and sets `activeTab` on
   the Alpine data root so the panel becomes visible before the driver types
   into the field.
2. **The `x-show` Go button.** Unfold's changelist "Go" button is hidden until
   the action `<select>` actually changes. `revealActionButton(selectEl)`
   dispatches a real `change` event so the button appears before
   `run_admin_action` clicks it. Harmless on vanilla admin, where the button is
   always visible.

## The end-to-end suite

Behaviour against a live admin is verified by a browser end-to-end suite under
`tests/e2e/`, driven by Playwright against a live server. It is **separate** from
the unit suite (which `make test` runs with the 100% coverage gate) and is **not**
part of the default test run — it exercises the JS bundle and the server over
HTTP, so it has its own settings and no coverage gate.

Run it with:

```bash
make test-e2e
```

The suite logs into the live admin as a superuser, then asserts that:

- the `<ag-ui-chat>` sidebar renders and its chat shell is visible on admin
  pages;
- a server-side tool answers a question (e.g. "how many authors are there?")
  **without** navigating;
- a navigating tool reloads the browser to the target changelist and the
  resumable loop completes the run on the new page (the rehydrated chat shows
  the final assistant message).

The e2e settings install `django-unfold` (via the `e2e` dependency group), so
the shim can be exercised alongside vanilla admin. `make test-e2e` requires a
browser (Playwright) and is excluded from the default `make test`.
