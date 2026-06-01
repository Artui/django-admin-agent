// Admin-aware frontend tool handlers for the <ag-ui-chat> sidebar.
//
// Registers the per-page `ui_read.*`, `ui_write.*`, `ui_generic.*` and `nav.*`
// tools on the element (via element.registerTool) so the agent can read and
// drive the admin UI from the browser. Handlers are built on the Web
// Component's generic, framework-free primitives (fillField, clickElement,
// setControlValue, …) plus Django admin's structural DOM contracts:
//
//   - form inputs live at  #id_<field_name>
//   - submit-row buttons use name="_save" / "_continue" / "_addanother"
//   - changelist rows carry name="_selected_action" checkboxes valued by pk
//   - bulk actions use a <select name="action"> + a name="index" Go button
//   - filter links live under #changelist-filter
//
// The same handlers work against vanilla admin and Django Unfold; the two
// Unfold-only quirks (Alpine tabs, the x-show Go button) are smoothed by
// ./unfold_shim.js, which no-ops on vanilla admin.
//
// All state (the button-handle map) is closure-local per element — no module
// globals — so a page may mount more than one sidebar safely.

import {
  X_DESTRUCTIVE_KEY,
  X_NAVIGATES_KEY,
  clickElement,
  fillField,
  setControlValue,
} from "./ag-ui-web-component.bundle.js";
import { activateTabForField, revealActionButton } from "./unfold_shim.js";

const SUBMIT_NAMES = {
  save: "_save",
  save_and_continue: "_continue",
  save_and_add_another: "_addanother",
};

/** Build a JSON-Schema for a tool's parameters, tagging destructive/navigating. */
function schema(properties, required = [], destructive = false, navigates = false) {
  const params = { type: "object", properties, required };
  if (destructive) {
    params[X_DESTRUCTIVE_KEY] = true;
  }
  if (navigates) {
    // Tells <ag-ui-chat> to checkpoint + resume across the page reload this
    // tool triggers, so the agent's turn survives the navigation.
    params[X_NAVIGATES_KEY] = true;
  }
  return params;
}

/**
 * The result a navigating tool resumes with after the reload, read off the
 * page we landed on: the URL, title, and any Django validation errors (e.g.
 * after a failed submit_form the change form re-renders with `.errorlist`).
 */
function landedPage() {
  return {
    navigated: true,
    url: window.location.href,
    title: document.title,
    errors: [...document.querySelectorAll(".errorlist li")].map((li) =>
      (li.textContent ?? "").trim(),
    ),
  };
}

const str = { type: "string" };

/** Resolve a change-form field by name, or throw a self-correcting error. */
function requireField(name) {
  const el = document.getElementById(`id_${name}`);
  if (el === null) {
    throw new Error(`no form field named "${name}" (looked for #id_${name})`);
  }
  return el;
}

/** Human label for a control: its <label>, aria-label, or the field name. */
function labelFor(el) {
  const explicit = el.id ? document.querySelector(`label[for="${el.id}"]`) : null;
  const text = explicit?.textContent?.trim();
  return text || el.getAttribute("aria-label") || el.name || el.id || "";
}

function controlType(el) {
  if (el.tagName === "SELECT") {
    return "select";
  }
  if (el.tagName === "TEXTAREA") {
    return "textarea";
  }
  return el.type || "text";
}

function isCheckbox(el) {
  return el.tagName === "INPUT" && el.type === "checkbox";
}

/** Type into / set a control depending on its kind, animating text inputs. */
async function writeControl(el, value) {
  activateTabForField(el);
  if (el.tagName === "SELECT" || isCheckbox(el)) {
    setControlValue(el, value);
    return;
  }
  await fillField(el, String(value));
}

/** Resolve an element by CSS selector first, else by visible label/text. */
function resolveElement(selectorOrLabel) {
  let el = null;
  try {
    el = document.querySelector(selectorOrLabel);
  } catch {
    el = null; // not a valid selector — fall through to label matching
  }
  if (el !== null) {
    return el;
  }
  const needle = selectorOrLabel.trim().toLowerCase();
  const label = [...document.querySelectorAll("label")].find(
    (node) => (node.textContent ?? "").trim().toLowerCase() === needle,
  );
  if (label?.htmlFor) {
    return document.getElementById(label.htmlFor);
  }
  const labelled = document.querySelector(`[aria-label="${selectorOrLabel}"]`);
  if (labelled !== null) {
    return labelled;
  }
  throw new Error(`no element matched selector or label "${selectorOrLabel}"`);
}

/** Trim + normalise a model name into its admin URL segment. */
function adminPath(base, appLabel, model) {
  const prefix = base.endsWith("/") ? base : `${base}/`;
  return `${prefix}${appLabel}/${model.toLowerCase()}/`;
}

function queryString(params) {
  if (!params) {
    return "";
  }
  const usp = new URLSearchParams();
  for (const [key, value] of Object.entries(params)) {
    usp.set(key, String(value));
  }
  const encoded = usp.toString();
  return encoded ? `?${encoded}` : "";
}

/** List actionable buttons/links, assigning each a fresh opaque handle. */
function readButtons(buttonHandles) {
  buttonHandles.clear();
  const nodes = document.querySelectorAll(
    "button, input[type=submit], a.button, .submit-row [type=submit]",
  );
  return [...nodes].map((node, index) => {
    const handle = `btn-${index}`;
    buttonHandles.set(handle, node);
    const label =
      (node.textContent ?? "").trim() ||
      node.value ||
      node.getAttribute("aria-label") ||
      node.name ||
      "";
    return { handle, label, tag: node.tagName.toLowerCase() };
  });
}

/** A compact snapshot of the current page's fields + buttons (no values). */
function compactPageMap(buttonHandles) {
  const fields = [
    ...document.querySelectorAll('form [id^="id_"]:is(input, select, textarea)'),
  ].map((node) => ({
    name: node.name || node.id.replace(/^id_/, ""),
    type: controlType(node),
    label: labelFor(node),
  }));
  const buttons = readButtons(buttonHandles).map(({ handle, label }) => ({ handle, label }));
  return { path: window.location.pathname, fields, buttons };
}

/**
 * Register every admin frontend tool on `el`.
 *
 * @param {HTMLElement & {registerTool: (tool: object) => void}} el
 */
export function registerAdminTools(el) {
  const buttonHandles = new Map();
  const adminBase = el.getAttribute("data-admin-base") || "/";

  const tools = [
    // ---- ui_read.* — page introspection (read-only) -------------------
    {
      name: "get_form_state",
      description:
        "Read the current change-form's fields: name, value, type and label.",
      parameters: schema({}),
      handler: () => {
        const controls = document.querySelectorAll(
          'form [id^="id_"]:is(input, select, textarea)',
        );
        return [...controls].map((node) => ({
          name: node.name || node.id.replace(/^id_/, ""),
          value: isCheckbox(node) ? node.checked : node.value,
          type: controlType(node),
          label: labelFor(node),
        }));
      },
    },
    {
      name: "get_changelist_state",
      description:
        "Read the changelist: visible rows, active filters, and selected rows.",
      parameters: schema({}),
      handler: () => {
        const rows = [...document.querySelectorAll("#result_list tbody tr")].map(
          (row) => ({
            pk: row.querySelector('input[name="_selected_action"]')?.value ?? null,
            text: (row.textContent ?? "").trim().replace(/\s+/g, " "),
          }),
        );
        const selected = [
          ...document.querySelectorAll('input[name="_selected_action"]:checked'),
        ].map((box) => box.value);
        return {
          rows,
          row_count: rows.length,
          filters: Object.fromEntries(
            new URLSearchParams(window.location.search).entries(),
          ),
          selected,
        };
      },
    },
    {
      name: "get_visible_buttons",
      description:
        "List actionable buttons/links, each with an opaque handle for click_button.",
      parameters: schema({}),
      handler: () => readButtons(buttonHandles),
    },
    {
      name: "get_page_snapshot",
      description: "A generic structured snapshot of the current admin page.",
      parameters: schema({}),
      handler: () => ({
        url: window.location.href,
        path: window.location.pathname,
        title: document.title,
        has_change_form: document.querySelector(".change-form, #content-main form") !== null,
        has_changelist: document.querySelector("#result_list") !== null,
        headings: [...document.querySelectorAll("h1, h2")].map((h) =>
          (h.textContent ?? "").trim(),
        ),
      }),
    },

    // ---- ui_write.* — DOM driving (destructive, animated) -------------
    {
      name: "fill_field",
      description: "Type a value into a change-form text field (animated).",
      parameters: schema({ field_name: str, value: str }, ["field_name", "value"], true),
      handler: async ({ field_name, value }) => {
        await writeControl(requireField(field_name), value);
        return { ok: true, field: field_name, value };
      },
    },
    {
      name: "select_option",
      description: "Choose an option in a <select> by its value or visible text.",
      parameters: schema({ field_name: str, value: str }, ["field_name", "value"], true),
      handler: ({ field_name, value }) => {
        const el = requireField(field_name);
        activateTabForField(el);
        const option = [...el.options].find(
          (opt) => opt.value === value || (opt.textContent ?? "").trim() === value,
        );
        setControlValue(el, option ? option.value : value);
        return { ok: true, field: field_name, value };
      },
    },
    {
      name: "toggle_checkbox",
      description: "Set a checkbox field checked or unchecked.",
      parameters: schema(
        { field_name: str, checked: { type: "boolean" } },
        ["field_name", "checked"],
        true,
      ),
      handler: ({ field_name, checked }) => {
        const el = requireField(field_name);
        activateTabForField(el);
        setControlValue(el, Boolean(checked));
        return { ok: true, field: field_name, checked: Boolean(checked) };
      },
    },
    {
      name: "click_button",
      description: "Click a button by the opaque handle from get_visible_buttons.",
      parameters: schema({ handle: str }, ["handle"], true),
      handler: async ({ handle }) => {
        const node = buttonHandles.get(handle);
        if (node === undefined) {
          throw new Error(`unknown button handle "${handle}" — call get_visible_buttons first`);
        }
        await clickElement(node);
        return { ok: true, handle };
      },
    },
    {
      name: "submit_form",
      description:
        'Submit the change form: action is "save", "save_and_continue" or "save_and_add_another".',
      parameters: schema(
        { action: { type: "string", enum: Object.keys(SUBMIT_NAMES) } },
        [],
        true,
        true,
      ),
      handler: async ({ action = "save" }) => {
        const name = SUBMIT_NAMES[action];
        if (name === undefined) {
          throw new Error(`unknown submit action "${action}"`);
        }
        const button = document.querySelector(`.submit-row [name="${name}"], [name="${name}"]`);
        if (button === null) {
          throw new Error(`no submit button named "${name}" on this form`);
        }
        await clickElement(button);
        return { ok: true, action };
      },
    },
    {
      name: "apply_filter",
      description: "Apply a changelist sidebar filter; navigates with the filter applied.",
      parameters: schema({ filter_name: str, value: str }, ["filter_name", "value"], true, true),
      handler: ({ filter_name, value }) => {
        const link = [...document.querySelectorAll("#changelist-filter a")].find(
          (anchor) => (anchor.textContent ?? "").trim().toLowerCase() === value.toLowerCase(),
        );
        const url = new URL(window.location.href);
        if (link) {
          url.href = new URL(link.getAttribute("href"), window.location.href).href;
        } else {
          url.searchParams.set(filter_name, value);
        }
        window.location.assign(url.href);
        return { ok: true, filter: filter_name, value };
      },
    },
    {
      name: "select_changelist_rows",
      description: "Tick the changelist row checkboxes for the given primary keys.",
      parameters: schema(
        { row_ids: { type: "array", items: str } },
        ["row_ids"],
        true,
      ),
      handler: ({ row_ids }) => {
        const wanted = new Set(row_ids.map(String));
        let matched = 0;
        for (const box of document.querySelectorAll('input[name="_selected_action"]')) {
          if (wanted.has(box.value)) {
            setControlValue(box, true);
            matched += 1;
          }
        }
        return { ok: true, selected: matched };
      },
    },
    {
      name: "run_admin_action",
      description: "Run the changelist's bulk action by name (selects it, then clicks Go).",
      parameters: schema({ action_name: str }, ["action_name"], true, true),
      handler: async ({ action_name }) => {
        const select = document.querySelector('select[name="action"]');
        if (select === null) {
          throw new Error("no bulk-action <select> on this changelist");
        }
        setControlValue(select, action_name);
        revealActionButton(select);
        const go = document.querySelector('[name="index"], .actions button[type="submit"]');
        if (go === null) {
          throw new Error('no action "Go" button on this changelist');
        }
        await clickElement(go);
        return { ok: true, action: action_name };
      },
    },

    // ---- ui_generic.* — fallback for custom widgets -------------------
    {
      name: "fill_dom_element",
      description: "Fill an element found by CSS selector or visible label (fallback).",
      parameters: schema({ selector_or_label: str, value: str }, ["selector_or_label", "value"], true),
      handler: async ({ selector_or_label, value }) => {
        await writeControl(resolveElement(selector_or_label), value);
        return { ok: true, target: selector_or_label, value };
      },
    },
    {
      name: "click_dom_element",
      description: "Click an element found by CSS selector or visible label (fallback).",
      parameters: schema({ selector_or_label: str }, ["selector_or_label"], true),
      handler: async ({ selector_or_label }) => {
        await clickElement(resolveElement(selector_or_label));
        return { ok: true, target: selector_or_label };
      },
    },
    {
      name: "read_dom_element",
      description: "Read an element's text/value found by CSS selector or label (read-only).",
      parameters: schema({ selector_or_label: str }, ["selector_or_label"]),
      handler: ({ selector_or_label }) => {
        const el = resolveElement(selector_or_label);
        return {
          target: selector_or_label,
          text: (el.textContent ?? "").trim(),
          value: "value" in el ? el.value : null,
        };
      },
    },

    // ---- nav.* — browser navigation (read-only) -----------------------
    {
      name: "open_changelist",
      description: "Navigate to a model's admin changelist, with optional filters.",
      parameters: schema(
        { app_label: str, model: str, filters: { type: "object" } },
        ["app_label", "model"],
        false,
        true,
      ),
      handler: ({ app_label, model, filters }) => {
        const url = adminPath(adminBase, app_label, model) + queryString(filters);
        window.location.assign(url);
        return { ok: true, url };
      },
    },
    {
      name: "open_changeform",
      description: "Open a model's add form (pk omitted) or edit form for a pk.",
      parameters: schema(
        { app_label: str, model: str, pk: { type: ["string", "number", "null"] } },
        ["app_label", "model"],
        false,
        true,
      ),
      handler: ({ app_label, model, pk }) => {
        const base = adminPath(adminBase, app_label, model);
        const url = pk === undefined || pk === null ? `${base}add/` : `${base}${pk}/change/`;
        window.location.assign(url);
        return { ok: true, url };
      },
    },
    {
      name: "navigate_to",
      description: "Navigate the browser to an arbitrary URL (fallback).",
      parameters: schema({ url: str }, ["url"], false, true),
      handler: ({ url }) => {
        window.location.assign(url);
        return { ok: true, url };
      },
    },
  ];

  for (const tool of tools) {
    el.registerTool(tool);
  }

  // After a navigating tool reloads the page, the resumed run completes that
  // tool's call with a snapshot of the page we landed on (URL + validation
  // errors), so the agent can react to where it ended up.
  el.navigationResult = landedPage;

  // Auto-inject a compact map of the current page (fields + buttons, no
  // values) into every run's context, so the agent knows the page's surface
  // without first calling get_form_state / get_visible_buttons.
  el.getPageMap = () => compactPageMap(buttonHandles);
}
