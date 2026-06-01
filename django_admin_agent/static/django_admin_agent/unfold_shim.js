// Runtime-detected compatibility shim for Django Unfold.
//
// Unfold preserves Django's structural DOM contracts (`#id_<field>` inputs,
// `_save`/`_continue` submit names, `name="action"` changelist actions, …), so
// the admin FE tool handlers in ./admin_tools.js work against it unchanged —
// with two exceptions that this shim smooths over:
//
//   1. Change-form fields can live in Alpine.js tabs that are `x-show`-hidden
//      until their tab is active. Filling a field in a non-active tab must
//      activate the tab first, or the driver types into an invisible input.
//   2. The changelist "Go" button is `x-show="action"` — hidden until the
//      action `<select>` actually changes. A real `change` event reveals it.
//
// Everything is guarded behind isUnfold(); on vanilla admin these are no-ops,
// so admin_tools.js can call them unconditionally.

/** True when the page is running Django Unfold with Alpine.js loaded. */
export function isUnfold() {
  return Boolean(window.Alpine) && document.body.classList.contains("unfold");
}

const TAB_SLUG_RE = /activeTab\s*===?\s*['"]([^'"]+)['"]/;

/**
 * If `el` lives inside an Alpine-gated Unfold tab panel, activate that tab so
 * the panel becomes visible before the driver interacts with `el`.
 */
export function activateTabForField(el) {
  if (!isUnfold()) {
    return;
  }
  const panel = el.closest('[x-show*="activeTab"]');
  if (panel === null) {
    return;
  }
  const match = TAB_SLUG_RE.exec(panel.getAttribute("x-show") ?? "");
  const root = panel.closest("[x-data]");
  if (match === null || root === null) {
    return;
  }
  const data = window.Alpine.$data(root);
  if (data && "activeTab" in data) {
    data.activeTab = match[1];
  }
}

/**
 * Dispatch a real `change` event on the changelist action `<select>` so
 * Unfold's `x-show="action"` reveals the Go button before it is clicked.
 * Harmless on vanilla admin (the button is always visible there).
 */
export function revealActionButton(selectEl) {
  if (!isUnfold()) {
    return;
  }
  selectEl.dispatchEvent(new Event("change", { bubbles: true }));
}
