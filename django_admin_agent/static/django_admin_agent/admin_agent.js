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
//   - opt the surface in to server-pushed charts
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
  // Charts are off in the component until a host asks for them, and a chart
  // nobody asked for is discarded in silence: the tool call still settles
  // successfully, so the model reports a visual that is not on screen.
  //
  // Only the "activity" route, which draws an ACTIVITY_SNAPSHOT the project's
  // own server-side code pushed (django_ag_ui.chart_activity). The numbers never
  // enter the model's context and nothing new becomes callable, so adopting it
  // widens no surface the agent can reach — a project's server decides, per
  // response, whether there is a chart at all.
  //
  // The other route, "tool", registers a render_chart tool the *agent* may call.
  // That is a new agent capability rather than a fix, so it is left to the
  // project: `document.querySelector("ag-ui-chat#django-admin-agent")
  // .enableCharts(["tool"])` adds it, and calling it late is supported.
  el.enableCharts(["activity"]);
  registerAdminTools(el);
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", bootstrap);
} else {
  bootstrap();
}
