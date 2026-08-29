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
  // Quoting a selection made in the *admin page*, not just in the transcript.
  //
  // The transcript half needs no opt-in and is already on. This half is the one
  // that matters here: this sidebar's whole premise is a chat sitting beside a
  // changelist or a changeform, so the text worth asking about is almost always
  // on the page rather than in the conversation. Selecting a cell, a validation
  // error or a paragraph of a long text field and quoting it is how a question
  // narrows to one row without anybody retyping a primary key.
  //
  // Scoped to `#content` rather than the document, which is a decision and not a
  // tidiness: unscoped, the offer follows a selection made in the breadcrumbs,
  // the module list, the user-tools bar -- chrome nobody asks questions about --
  // and every drag made to *read* becomes an offer. The component already
  // declines to offer inside its own transcript and inside a focused input, so
  // this narrows what is left rather than duplicating those guards.
  //
  // `#content` is Django's own admin container and has been since the template
  // was written; a project whose base_site.html renames it simply gets the
  // transcript-only behaviour, which is why this is a null check rather than a
  // fallback to the document.
  const content = document.getElementById("content");
  if (content !== null) {
    el.offerQuoteInPage(content);
  }
  registerAdminTools(el);
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", bootstrap);
} else {
  bootstrap();
}
