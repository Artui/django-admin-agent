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
//   - name the page, object or changelist the user is on (the place chip)
//   - opt the surface in to server-pushed charts
//   - let the agent move its own panel out of the way of the page
//   - under COLLAPSE_TO="bar", make room for the bar in the page
import {
  BAR_HEIGHT_EVENT,
  createChatSurfaceTools,
  defineChat,
} from "./agents-web-components.bundle.js";
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

// The admin's breadcrumbs as text, or null on a page that draws none. Django 6
// draws them as a list; earlier releases as one block with › between crumbs.
function readCrumbs() {
  const node = document.querySelector(".breadcrumbs");
  if (node === null) {
    return null;
  }
  const items = node.querySelectorAll("li");
  const texts =
    items.length > 0
      ? [...items].map((item) => item.textContent)
      : node.textContent.split("\u203a");
  return texts
    .map((text) => text.replace(/\s+/g, " ").trim())
    .filter((text) => text !== "");
}

// Where the user is, for the place chip and the `place` context entry: the last
// crumb (the object, or the changelist's model) with the one before it as the
// detail. The index draws no breadcrumbs, so it names the site.
function readPlace() {
  const href = window.location.pathname;
  const crumbs = readCrumbs() ?? [];
  if (crumbs.length > 0) {
    const label = crumbs[crumbs.length - 1];
    return crumbs.length > 1
      ? { label, detail: crumbs[crumbs.length - 2], href }
      : { label, href };
  }
  const site = document.getElementById("site-name");
  if (document.body.classList.contains("dashboard") && site !== null) {
    return { label: site.textContent.trim(), href };
  }
  return null;
}

// Set only where the page has something to read: the component's route map
// stands in for the place only while `getPlace` is unset, so a page with no
// breadcrumbs (another admin skin, a custom template) keeps that fallback.
function placeSource() {
  const readable =
    document.querySelector(".breadcrumbs") !== null ||
    document.body.classList.contains("dashboard");
  return readable ? readPlace : null;
}

// The bar is fixed over the page and the component writes no CSS of the host's,
// so this hands the height to the sidebar's stylesheet, which clears the page's
// last row. A custom property on the root, because one set on the element would
// inherit down and never reach the page. The attribute is what scopes the
// stylesheet's rules, so that a page with no bar keeps its own margins; unset,
// the property alone would make those rules compute to nothing and win anyway.
//
// Never --ag-ui-viewport-inset-bottom: the component would take the bar's height
// off the room it fills, which can flip the bar it is measuring.
//
// data-collapsed-to, not collapse-to: the component writes it from the placement as
// well, and a placement that keeps its rail, its header or no collapsed state at all
// never draws a bar, so its page has nothing to make room for.
function makeRoomForBar(el) {
  if (el.getAttribute("data-collapsed-to") !== "bar") {
    return;
  }
  const root = document.documentElement;
  const publish = () => {
    root.style.setProperty("--django-admin-agent-bar-height", `${el.barHeight}px`);
  };
  root.setAttribute("data-django-admin-agent-bar", "");
  el.addEventListener(BAR_HEIGHT_EVENT, publish);
  publish();
}

function bootstrap() {
  defineChat();
  const el = document.querySelector("ag-ui-chat#django-admin-agent");
  if (el === null) {
    return;
  }
  el.headers = { "X-CSRFToken": readCsrfToken() };
  el.autoConfirm = el.getAttribute("data-auto-confirm") === "true";
  el.routeMap = readRouteMap();
  el.getPlace = placeSource();
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
  makeRoomForBar(el);
  registerAdminTools(el);
  // Let the agent move the panel it is speaking from.
  //
  // On unless the project says otherwise, which is the opposite of the call
  // made for `enableCharts(["tool"])` a few lines up, and the difference is
  // what the widened surface can reach. A `render_chart` tool draws whatever
  // the agent decides to draw; these four move this sidebar and nothing else
  // -- they read no model, change no row, and every move is written into the
  // transcript with an undo beside it. The cost is four tool definitions per
  // request, which is what the setting is for.
  //
  // The element is the surface the factory wants, so it is handed to itself:
  // `describeSurface`, `moveTo` and `setCollapsed` are the whole port.
  if (el.getAttribute("data-chat-surface-tools") !== "false") {
    for (const tool of createChatSurfaceTools(el)) {
      el.registerTool(tool);
    }
  }
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", bootstrap);
} else {
  bootstrap();
}
