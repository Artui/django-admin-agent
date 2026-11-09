# Unfold & vanilla support

The sidebar works against **vanilla Django admin** and **[Django
Unfold](https://github.com/unfoldadmin/django-unfold)** through a single shared
DOM driver. There is no Python dependency on Unfold: the package never imports
it at module load. The Unfold-specific code is a runtime-detected JavaScript shim
in the browser and, under `COLLAPSE_TO = "bar"`, a few rules in the sidebar's
stylesheet.

## Mounting the sidebar

The installation guide's mount puts the tag in the `branding` block. Under Unfold
that block sits in a container hidden below its `xl` breakpoint, so the sidebar
would be mounted and invisible at a window of 1280px and shown at 1500px. Mount it
in the `base` block instead:

```django title="templates/admin/base_site.html"
{% extends "admin/base.html" %}
{% load django_admin_agent %}

{% block branding %}
{% include "unfold/helpers/site_branding.html" %}
{% endblock %}

{% block base %}
{{ block.super }}
{% django_admin_agent_sidebar %}
{% endblock %}
```

Unfold's dashboard, `admin/index.html`, extends `admin/base.html` rather than
`base_site.html`, so with this mount the dashboard has no sidebar. Unfold's change
list and change form override the `footer` block, so that block does not reach
them either. Measured on Unfold 0.110.1. The include's path is that version's;
0.40.0 has no such template.

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

## Colours under Unfold

The sidebar's stylesheet maps its accent, highlight ring and font onto Django
admin's `--primary`, `--link-fg` and `--font-family-primary`. Unfold defines none
of the three, so under Unfold the panel keeps the component's own Quiet colours
and font. To give it Unfold's, set the tokens on the element in your own CSS; see
[Configuration → Colours](configuration.md#colours).

## The bottom bar under Unfold

`COLLAPSE_TO = "bar"` works under Unfold, and the sidebar makes room for the bar as
it does on Django's admin ([Configuration → The bottom bar](configuration.md#the-bottom-bar)).
**How much it clears depends on the version**: every row on 0.110.1, less below it,
and on 0.40.0 not the Save button. [The table below](#what-each-version-did) says what
was measured.

A margin on the page is not enough here. From its `lg` breakpoint, 64rem, Unfold pins
its save row, its pagination row and its bulk actions to the foot of the window, where
no margin lifts them. Below it the save and pagination rows sit in the flow after
`#content`, at the end of a page that can be exactly a window tall, so the page's
margin pushes them down rather than clearing them, and a short form would have its
Save button under the bar with nothing to scroll. So under the bar the stylesheet also
sets offsets and margins on elements it finds **by Unfold's Tailwind class names**, and
gives `#nav-sidebar-inner` a shorter minimum height:

| Selector | What it lifts | How | When |
| --- | --- | --- | --- |
| `[class~="fixed"][class~="lg:bottom-0"]` | The bulk actions | `bottom` | Always |
| `[class~="lg:sticky"][class~="lg:bottom-0"]` | The save row, the pagination row | `bottom` | From 64rem wide |
| `[class~="lg:sticky"][class~="lg:bottom-0"]` | The save row, the pagination row | `margin-bottom` | Below 64rem wide |

These reach further than a page margin and depend on names Unfold can change in any
release. If it renames one, the row it named goes back under the bar, and nothing
else breaks. They have no specificity, so they rely on Unfold's stylesheet being in
cascade layers, which any unlayered rule beats. The sidebar's other rules have no
specificity either, and any unlayered rule of your own beats all of them, unless it is
wrapped in `:where()` too. A rule in a cascade layer loses to them, and an Unfold
project's Tailwind utilities are layered, so a utility class on a row will not move it.

### What each version did

**Only Chromium was measured, at widths from 390px to 1500px.**

| Unfold | Django | How it was run | From 64rem wide | Below 64rem wide |
| --- | --- | --- | --- | --- |
| 0.110.1 | 6.1 | `tests/e2e_unfold` from Python 3.12 | Every row clear of the bar, at any scroll. | The save and pagination rows clear of the bar at the foot of the page, which is where they are, and the bulk actions always. |
| 0.91.0 | 5.2 | `tests/e2e_unfold` on Python 3.11 | The save and pagination rows and the nav are clear. The bulk actions use `lg:bottom-[64px]`, which no selector reads: they stay clear of the bar, but lie over the lifted pagination row while rows are selected. | The save and pagination rows are clear. **The bar covers the bulk actions**, whose `bottom-0` no selector reads, at `[790,832]` against the bar's top at 803 in a window of 800x844. |
| 0.81.0 | 5.2 | By hand, once | As 0.91.0. | As 0.91.0. |
| 0.40.0 | 5.2 | By hand, once | Its stylesheet has no layers, and the margin and the nav's padding still apply, so a page's last row comes clear. **Its save row is pinned under class names no selector reads, so the bar covers the Save button**, at `[646,684]` against the bar's top at 659 on a short form that does not scroll. | **The bar covers the Save button** here too, at `[790,828]` against 803 in a window of 800x844. |

Do not use the bar on 0.40.0 without lifting its save row yourself. Versions in
between, Firefox and Safari have not been run. Below 0.110.1, expect the page's margin
to hold, and check every row your version pins to the foot, the Save button first. A
project on another version can lift such a row itself with
`--django-admin-agent-bar-height`, which is unset without the bar.

## The end-to-end suite

Behaviour against a live admin is verified by two browser end-to-end suites, driven
by Playwright against a live server: `tests/e2e/` on Django's admin, and
`tests/e2e_unfold/` with Unfold in front of it, since one process holds one settings
module. They are **separate** from
the unit suite (which `make test` runs with the 100% coverage gate) and are **not**
part of the default test run: they exercise the JS bundle and the server over
HTTP, so they have their own settings and no coverage gate.

Run both with:

```bash
make test-e2e
```

`tests/e2e/` logs into the live admin as a superuser, then asserts, among other
things, that:

- the `<ag-ui-chat>` sidebar renders and its chat shell is visible on admin
  pages;
- a server-side tool answers a question (e.g. "how many authors are there?")
  **without** navigating;
- a navigating tool reloads the browser to the target changelist and the
  resumable loop completes the run on the new page (the rehydrated chat shows
  the final assistant message);
- the sidebar's accent, highlight ring and font resolve to the admin's own
  `--primary`, `--link-fg` and `--font-family-primary`, in the light and dark
  schemes and under the admin's theme toggle.

`tests/e2e_unfold/` runs the Unfold version `uv.lock` resolves from the `e2e`
dependency group, which is 0.110.1 from Python 3.12 and 0.91.0 on Python 3.11, and
covers the bottom bar only. No browser test exercises the shim's tab
activation or its Go button. `make test-e2e` requires a browser (Playwright) and is
excluded from the default `make test`.
