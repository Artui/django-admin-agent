// Bootstrap for the Django-admin chat sidebar. Loaded as an ES module from
// the same static directory as the vendored web-component bundle, so it can
// import the component by relative path.
//
// Responsibilities:
//   - register the <ag-ui-chat> custom element
//   - attach the CSRF header so the AG-UI endpoint accepts POSTs under the
//     logged-in admin session
//   - read the auto-confirm flag from the element's data attribute
//   - register the admin-aware frontend tools (DOM driving) — see
//     ./admin_tools.js
import { defineAgUiChat } from "./ag-ui-web-component.bundle.js";
import { registerAdminTools } from "./admin_tools.js";

function readCsrfToken() {
  const match = document.cookie.match(/(?:^|;\s*)csrftoken=([^;]+)/);
  return match ? decodeURIComponent(match[1]) : "";
}

// The navigable route manifest the server embedded (admin changelists/add
// pages), driving the component's list_routes / navigate_to_route tools.
function readRouteMap() {
  const node = document.getElementById("django-admin-agent-routes");
  if (node === null) {
    return [];
  }
  try {
    return JSON.parse(node.textContent);
  } catch {
    return [];
  }
}

// The pre-defined skill catalog the server embedded (palette + chips).
function readSkills() {
  const node = document.getElementById("django-admin-agent-skills");
  if (node === null) {
    return [];
  }
  try {
    return JSON.parse(node.textContent);
  } catch {
    return [];
  }
}

// Values for a skill prompt's {placeholders}, derived from the current admin
// page. The built-in skills are placeholder-free, but a project's custom
// skills can reference e.g. {path} or {selected_ids}.
function skillContext() {
  const selected = [
    ...document.querySelectorAll('input[name="_selected_action"]:checked'),
  ].map((box) => box.value);
  return {
    path: window.location.pathname,
    selected_ids: selected.join(","),
  };
}

function bootstrap() {
  defineAgUiChat();
  const el = document.querySelector("ag-ui-chat#django-admin-agent");
  if (el === null) {
    return;
  }
  el.headers = { "X-CSRFToken": readCsrfToken() };
  el.autoConfirm = el.getAttribute("data-auto-confirm") === "true";
  el.routeMap = readRouteMap();
  el.setSkills(readSkills());
  el.skillContext = skillContext;
  registerAdminTools(el);
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", bootstrap);
} else {
  bootstrap();
}
