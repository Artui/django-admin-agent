var ow=Object.defineProperty;var Js=(e,t)=>{for(var n in t)ow(e,n,{get:t[n],enumerable:!0})};var Ao="ag-ui-chat",Qs="ag-ui-submit",el="ag-ui-toggle",tl="ag-ui-unread",nl="ag-ui-state",rl="ag-ui-attachments",ol="ag-ui-run-finished",il="ag-ui-custom",al="ag-ui-invalidate",sl="ag-ui-feedback",ll="suggestions",cl="ag_ui.invalidate",Kd="ag_ui.subagent",_n={STARTED:"started",TOOL_CALL:"tool_call",TOOL_RESULT:"tool_result",FINISHED:"finished",FAILED:"failed"},Fe={USER:"user",ASSISTANT:"assistant"},sr="x-destructive",ko="x-confirm",Ie="x-summary",lr="x-navigates",Io="read_page",Tn=10,Ft={COPY:"copy",RETRY:"retry",FEEDBACK:"feedback"},ne={PENDING:"pending",DEFERRED:"deferred",DONE:"done",ERROR:"error",DECLINED:"declined",INTERRUPTED:"interrupted"},Ge={SUCCESS:"success",FAILED:"failed",DENIED:"denied",INTERRUPTED:"interrupted"},We={UPLOADING:"uploading",READY:"ready",ERROR:"error"},ul=10*1024*1024,An={INLINE:"inline",MINIMAL:"minimal",COMPACT:"compact",FULL:"full"},dl="compaction",pl="load_capability",Jd='<svg class="glyph" viewBox="0 0 24 24" aria-hidden="true"><path d="M12 19.5V5m-6.5 6.5L12 5l6.5 6.5"/></svg>',Qd='<svg class="glyph glyph--solid" viewBox="0 0 24 24" aria-hidden="true"><rect x="7" y="7" width="10" height="10" rx="2.5"/></svg>',ep='<svg class="glyph" viewBox="0 0 24 24" aria-hidden="true"><path d="M17 8.5V15a5 5 0 0 1-10 0V7a3 3 0 0 1 6 0v7.5a1 1 0 0 1-2 0V8.5"/></svg>',tp='<svg class="glyph" viewBox="0 0 24 24" aria-hidden="true"><path d="M12 4a3 3 0 0 1 3 3v5a3 3 0 0 1-6 0V7a3 3 0 0 1 3-3z"/><path d="M5 11v1a7 7 0 0 0 14 0v-1"/><path d="M12 19v3"/></svg>',np='<svg class="glyph" viewBox="0 0 24 24" aria-hidden="true"><path d="M20 14.5A8.5 8.5 0 0 1 9.5 4a8.5 8.5 0 1 0 10.5 10.5z"/></svg>',rp='<svg class="glyph" viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"/></svg>',op='<svg class="glyph" viewBox="0 0 24 24" aria-hidden="true"><path d="M4 5.5A2.5 2.5 0 0 1 6.5 3h11A2.5 2.5 0 0 1 20 5.5v8a2.5 2.5 0 0 1-2.5 2.5H9l-5 4z"/></svg>',ip='<svg class="glyph" viewBox="0 0 24 24" aria-hidden="true"><rect x="9" y="9" width="11" height="11" rx="2"/><path d="M5 15V6a2 2 0 0 1 2-2h8"/></svg>',ap='<svg class="glyph" viewBox="0 0 24 24" aria-hidden="true"><path d="M20 12a8 8 0 1 1-2.5-5.8"/><path d="M20 4v4h-4"/></svg>',sp='<svg class="glyph" viewBox="0 0 24 24" aria-hidden="true"><path d="M7 10v10H4V10z"/><path d="M7 10l4.5-7a2 2 0 0 1 3.4 2L13.5 9H19a2 2 0 0 1 2 2.3l-1.1 6.4A2 2 0 0 1 17.9 20H7"/></svg>',lp='<svg class="glyph" viewBox="0 0 24 24" aria-hidden="true"><path d="M17 14V4h3v10z"/><path d="M17 14l-4.5 7a2 2 0 0 1-3.4-2l1.4-4H5a2 2 0 0 1-2-2.3l1.1-6.4A2 2 0 0 1 6.1 4H17"/></svg>',cp='<svg class="glyph" viewBox="0 0 24 24" aria-hidden="true"><path d="M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8z"/><path d="M14 3v5h5"/></svg>',up='<svg class="glyph" viewBox="0 0 24 24" aria-hidden="true"><rect x="3.5" y="4.5" width="17" height="15" rx="2.5"/><circle cx="9" cy="10" r="1.5"/><path d="M4.5 17.5 9 13.5l3.5 3 3-2.5 4.5 4"/></svg>',dp='<svg class="glyph" viewBox="0 0 24 24" aria-hidden="true"><path d="M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8z"/><path d="M14 3v5h5"/><rect class="glyph--solid" x="7.5" y="13.5" width="9" height="4.5" rx="1"/></svg>',pp='<svg class="glyph" viewBox="0 0 24 24" aria-hidden="true"><path d="M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8z"/><path d="M14 3v5h5"/><path d="M8.5 13.5h7M8.5 17h4.5"/></svg>',Ro="chart",Gt=24,hp=150,fp=2147483001,Co=5e3,ot=8;var iw=/\{([a-zA-Z_][a-zA-Z0-9_]*)\}/g;function se(e,t){return e.replace(iw,(n,r)=>Object.hasOwn(t,r)?String(t[r]):n)}var aw=/\{([a-zA-Z_][a-zA-Z0-9_]*)\}/g;function mp(e,t){let n=[];return{text:e.replace(aw,(o,i)=>{let a=t[i];return a==null||a===""?(n.includes(i)||n.push(i),o):String(a)}),missing:n}}function sw(e){if(typeof e!="object"||e===null)return!1;let t=e;return typeof t.name=="string"&&typeof t.title=="string"&&(t.prompt===void 0||typeof t.prompt=="string")}function hl(e){return Array.isArray(e)?e.filter(sw):[]}var No=class{#e;#t=[];#n=[];#o=[];constructor(t){this.#e=t}setClientSkills(t){this.#o=t,this.#i()}init(){this.#e.menu.enableChips(this.#e.flag("data-prompt-chips")),this.#e.menu.enableSlash(this.#e.flag("data-slash-commands")),this.#n=this.#r(),this.#i()}async fetch(){let t=this.#e.element.getAttribute("data-skills-url");if(t!==null)try{let n=await fetch(t,this.#e.fetchInit(t));this.#t=hl(await n.json()),this.#i()}catch{}}apply(t){let{input:n,hint:r}=this.#e;if(t.prompt===void 0){r.hidden=!0,this.#e.send(`/${t.name}`);return}let{text:o,missing:i}=mp(t.prompt,this.#e.context());if(i.length>0){r.textContent=se(this.#e.strings().skillNeeds,{title:t.title,fields:i.join(", ")}),r.hidden=!1,n.value=o,this.#e.autoGrow(),n.focus(),this.#a(o);return}if(r.hidden=!0,n.value=o,this.#e.autoGrow(),t.sendImmediately===!1){n.focus();return}this.#e.submit()}#r(){return hl(this.#e.readJsonAttribute("data-skills"))}#i(){let t=new Map;for(let n of[...this.#t,...this.#n,...this.#o])t.set(n.name,n);this.#e.menu.setSkills([...t.values()])}#a(t){let n=t.indexOf("{");this.#e.input.setSelectionRange(n,t.indexOf("}",n)+1)}};var Oo=["top-left","top-right","bottom-left","bottom-right"];function gp(e){return Oo.includes(e)}function fl(e){return[{name:"read_chat_surface",description:"Describe the chat panel you are speaking from: its placement, whether it is collapsed, whether it can be moved, and the box it occupies. Read this before moving or minimising yourself, since a full-screen panel has nowhere to move to. Read-only.",parameters:{type:"object",properties:{},required:[],[Ie]:"Read the chat's own position"},handler:()=>e.describeSurface()},{name:"move_chat",description:"Move your own panel to a corner, to uncover something the user needs to see. `corner` is top-left, top-right, bottom-left or bottom-right. Answers `moved: false` with a reason when the placement owns its position or the panel fills the screen; check `read_chat_surface` first, and prefer minimise_chat when there is nowhere to move to.",parameters:{type:"object",properties:{corner:{type:"string",enum:[...Oo]}},required:["corner"],[Ie]:"Move the chat out of the way"},handler:t=>{let n=String(t.corner??""),r=e.describeSurface();return gp(n)?r.movable?{moved:e.moveTo(n,{announce:!0}),corner:n}:{moved:!1,reason:r.fullBleed?"the panel fills the screen, so there is nowhere to move it to":r.draggable===!1?"this page has turned off moving the panel":`the "${r.placement??""}" placement owns the panel's position`,suggestion:r.collapsible?"minimise_chat":null}:{moved:!1,reason:`"${n}" is not a corner; use one of ${Oo.join(", ")}`}}},{name:"minimise_chat",description:"Collapse your own panel to its launcher, so the user can see the whole page. The launcher stays visible and reopens it. Answers `minimised: false` when the placement has no collapsed state, which is the case for a full-page chat.",parameters:{type:"object",properties:{},required:[],[Ie]:"Minimise the chat"},handler:()=>e.describeSurface().collapsible?(e.setCollapsed(!0,{announce:!0}),{minimised:!0}):{minimised:!1,reason:"this placement has no collapsed state, so there is no launcher to return to"}},{name:"restore_chat",description:"Open your own panel again after minimising it.",parameters:{type:"object",properties:{},required:[],[Ie]:"Restore the chat"},handler:()=>(e.setCollapsed(!1),{restored:!0})}]}var cr=class{#e=new Map;register(t){this.#e.set(t.name,t)}has(t){return this.#e.has(t)}get(t){let n=this.#e.get(t);if(n===void 0)throw new Error(`tool "${t}" is not registered`);return n}tools(){return[...this.#e.values()].map(t=>({name:t.name,description:t.description,parameters:t.parameters}))}};var lw="#4f46e5";function kn(e,t,n){let r=window.getComputedStyle(e).getPropertyValue(t).trim();return r===""?n:r}var cw=4;function ml(e,t={}){let n=document.createElement("div");n.setAttribute("data-ag-ui-highlight",""),n.setAttribute("aria-hidden","true"),n.style.cssText=["position: fixed","inset: 0","pointer-events: none",`z-index: ${kn(e,"--ag-ui-highlight-z-index",String(fp))}`].join(";");let r=document.createElement("div"),o=document.createElement("div");n.className="ag-ui-highlight",r.className="ag-ui-highlight-scrim",o.className="ag-ui-highlight-ring",t.scrim===!0&&n.append(r),n.append(o);let i=t.ringWidth??Number.parseFloat(kn(e,"--ag-ui-highlight-ring-width","3")),a=t.flowMs??Number.parseFloat(kn(e,"--ag-ui-highlight-flow-ms","2400")),s=()=>{let u=e.getBoundingClientRect(),m=t.padding??cw,f=t.radius??Number.parseFloat(getComputedStyle(e).borderRadius),h=u.left-m,p=u.top-m,E=u.width+m*2,b=u.height+m*2;t.scrim===!0&&(r.style.cssText=["position: absolute","inset: 0",`background: ${kn(e,"--ag-ui-highlight-scrim","rgba(15, 15, 25, 0.45)")}`,`clip-path: path(evenodd, '${pw(h,p,E,b,f+m)}')`].join(";")),o.style.cssText=["position: absolute",`left: ${h}px`,`top: ${p}px`,`width: ${E}px`,`height: ${b}px`,`border-radius: ${f+m}px`,`border: ${i}px solid transparent`,"box-sizing: border-box",dw(e,t)].join(";")};s();let c=null;t.gradient===!0&&!window.matchMedia("(prefers-reduced-motion: reduce)").matches&&(c=o.animate([{backgroundPosition:"100% 0"},{backgroundPosition:"-100% 0"}],{duration:a,iterations:Number.POSITIVE_INFINITY,easing:"linear"}));let l={capture:!0,passive:!0};return window.addEventListener("scroll",s,l),window.addEventListener("resize",s,l),document.body.appendChild(n),()=>{window.removeEventListener("scroll",s,l),window.removeEventListener("resize",s,l),c?.cancel(),n.remove()}}function uw(e){return e===void 0?null:CSS.supports("color",e)?e:null}function dw(e,t){let n=uw(t.color)??kn(e,"--ag-ui-accent",lw);if(t.gradient!==!0)return`border-color: ${n}`;let r=kn(e,"--ag-ui-highlight-gradient",`linear-gradient(115deg, transparent 20%, ${n} 50%, transparent 80%)`),o="linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0)";return[`background-image: ${r}`,"background-origin: border-box","background-size: 300% 100%",`-webkit-mask: ${o}`,`mask: ${o}`,"-webkit-mask-composite: xor","mask-composite: exclude","background-position: 50% 0"].join(";")}function pw(e,t,n,r,o){let i=Math.max(0,Math.min(o,n/2,r/2)),a=e+n,s=t+r,c=`M 0 0 H ${window.innerWidth} V ${window.innerHeight} H 0 Z`,l=[`M ${e+i} ${t}`,`H ${a-i}`,`A ${i} ${i} 0 0 1 ${a} ${t+i}`,`V ${s-i}`,`A ${i} ${i} 0 0 1 ${a-i} ${s}`,`H ${e+i}`,`A ${i} ${i} 0 0 1 ${e} ${s-i}`,`V ${t+i}`,`A ${i} ${i} 0 0 1 ${e+i} ${t}`,"Z"].join(" ");return`${c} ${l}`}function Po(e,t){return Object.getOwnPropertyDescriptor(e,t).set}var hw=Po(HTMLInputElement.prototype,"value"),fw=Po(HTMLTextAreaElement.prototype,"value"),mw=Po(HTMLSelectElement.prototype,"value"),gw=Po(HTMLInputElement.prototype,"checked");function Zt(e,t){e instanceof HTMLTextAreaElement?fw.call(e,t):e instanceof HTMLSelectElement?mw.call(e,t):hw.call(e,t)}function ur(e,t){gw.call(e,t)}var gl="#4f46e5",vw="rgba(79, 70, 229, 0.4)",bw="--ag-ui-accent";function In(e){return new Promise(t=>{setTimeout(t,e)})}function Mo(){return window.matchMedia("(prefers-reduced-motion: reduce)").matches}function vl(e){return e<=0||Mo()?Promise.resolve():In(e)}function zo(e,t){let n=window.getComputedStyle(e).getPropertyValue(bw).trim();return n===""?t:n}function vp(e){return`0 0 0 3px ${zo(e,vw)}`}async function bl(e,t,n={}){let r=n.charDelayMs??35;Zt(e,""),e.dispatchEvent(new Event("input",{bubbles:!0}));for(let o of t)Zt(e,e.value+o),e.dispatchEvent(new Event("input",{bubbles:!0})),r>0&&await In(r);e.dispatchEvent(new Event("change",{bubbles:!0}))}async function yl(e,t={}){let n=t.highlightMs??280,r=e.style.outline,o=e.style.outlineOffset;e.style.outline=`2px solid ${zo(e,gl)}`,e.style.outlineOffset="2px",await In(n),e.style.outline=r,e.style.outlineOffset=o,e.click()}var yw=600,ww=100;function Et(e,t={}){let n=Mo();return e.scrollIntoView({block:"center",inline:"nearest",behavior:n?"auto":"smooth"}),n?Promise.resolve():new Promise(r=>{let o,i=()=>{clearTimeout(o),document.removeEventListener("scroll",a,!0),document.removeEventListener("scrollend",i,!0),r()},a=()=>{document.removeEventListener("scroll",a,!0),clearTimeout(o),o=setTimeout(i,t.settleMs??yw)};o=setTimeout(i,ww),document.addEventListener("scroll",a,!0),document.addEventListener("scrollend",i,!0)})}var Ew=1200,xw=1/3;async function bp(e,t,n){(t.focus??n)&&e.focus({preventScroll:!0});let r=t.flashMs??Ew;if(r<=0)return;if(t.scrim===!0||t.gradient===!0){let l=ml(e,{scrim:t.scrim===!0,gradient:t.gradient===!0,...t.color===void 0?{}:{color:t.color},...t.ringPadding===void 0?{}:{padding:t.ringPadding}});await In(r),l();return}let o=e.style.outline,i=e.style.outlineOffset,a=e.style.transition,s=t.color??zo(e,gl);e.style.outline=`3px solid ${s}`,e.style.outlineOffset="2px";let c=Mo()?0:Math.round(r*xw);await In(r-c),c>0&&(e.style.transition=`outline-color ${c}ms ease-out`,e.style.outline="3px solid transparent",await In(c)),e.style.outline=o,e.style.outlineOffset=i,e.style.transition=a}function Sw(e,t={}){return bp(e,t,!1)}function wl(e,t={}){return bp(e,t,!0)}async function El(e,t={}){let n=t.pressMs??140,r=e.style.transform,o=e.style.transition,i=e.style.boxShadow;e.style.transition="transform 80ms ease",e.style.transform="scale(0.96)",e.style.boxShadow=vp(e),await vl(n),e.style.transform=r,e.style.transition=o,e.style.boxShadow=i,e.click()}function _w(e,t){for(let n of Array.from(e.options))if(n.value===t||n.text===t)return n;return null}async function xl(e,t,n={}){let r=_w(e,t);if(r===null)throw new Error(`no <option> matching "${t}"`);let o=n.highlightMs??220,i=e.style.outline,a=e.style.outlineOffset;e.style.outline=`2px solid ${zo(e,gl)}`,e.style.outlineOffset="2px",await vl(o),Zt(e,r.value),e.dispatchEvent(new Event("input",{bubbles:!0})),e.dispatchEvent(new Event("change",{bubbles:!0})),e.style.outline=i,e.style.outlineOffset=a}async function Sl(e,t,n={}){let r=n.flashMs??200,o=e.style.boxShadow;e.style.boxShadow=vp(e),await vl(r),ur(e,t),e.dispatchEvent(new Event("input",{bubbles:!0})),e.dispatchEvent(new Event("change",{bubbles:!0})),e.style.boxShadow=o}var pr={SCROLL:"scroll",DRAG:"drag",CHAT:"chat"};function _l(e,t){let n=[];return e.has(pr.SCROLL)&&n.push(Tw(t)),e.has(pr.DRAG)&&n.push(Aw(t)),n}function Tw(e){return{name:"scroll_to",description:"Scroll a target into view. `target` is `top`, `bottom`, or a CSS selector / page-map element id. Read-only: it changes nothing on the page.",parameters:{type:"object",properties:{target:{type:"string"}},required:["target"],[Ie]:"Scroll into view"},handler:t=>{let n=String(t.target??"");if(n==="top"||n==="bottom"){let o=n==="top"?0:document.body.scrollHeight;return window.scrollTo({top:o,behavior:"smooth"}),{scrolled:!0,target:n}}let r=e(n);if(r===null)throw new Error(`no element matching "${n}"`);return Et(r),{scrolled:!0,target:n}}}}function Aw(e){return{name:"drag_and_drop",description:"Drag the `from` element onto the `to` element (CSS selectors or page-map element ids), firing the page's native drag-and-drop. Use for reordering sortable lists. The page decides what the drop commits.",parameters:{type:"object",properties:{from:{type:"string"},to:{type:"string"}},required:["from","to"],[Ie]:"Drag and drop"},handler:t=>{let n=String(t.from??""),r=String(t.to??""),o=e(n);if(o===null)throw new Error(`no element matching "${n}"`);let i=e(r);if(i===null)throw new Error(`no element matching "${r}"`);return kw(o,i),{dragged:!0,from:n,to:r}}}}function kw(e,t){let n=new DataTransfer;dr(e,"dragstart",n),dr(t,"dragenter",n),dr(t,"dragover",n),dr(t,"drop",n),dr(e,"dragend",n)}function dr(e,t,n){let r=new Event(t,{bubbles:!0,cancelable:!0});r.dataTransfer=n,e.dispatchEvent(r)}function Tl(e,t){return!t||e===null?[]:[{description:"page_map",value:JSON.stringify(e())}]}function Lo(e){let t=[{name:`read_${e.name}`,description:`Read the "${e.name}" state.`,parameters:{type:"object",properties:{},required:[],[Ie]:`Read ${e.name}`},handler:()=>e.read()}],n=e.write;return n!==void 0&&t.push({name:`set_${e.name}`,description:`Update the "${e.name}" state.`,parameters:{...e.schema??{type:"object"},[sr]:!0,[Ie]:`Update ${e.name}`},handler:r=>n(r)}),t}var Iw=Lo;var yp=/:([A-Za-z_][A-Za-z0-9_]*)/g;function Rw(e){return[...e.matchAll(yp)].map(t=>t[0].slice(1))}function Cw(e,t,n){let r={...n};return{path:t.replace(yp,(i,a)=>{let s=n[a];if(s==null||String(s)==="")throw new Error(`route "${e}" requires path param "${a}"`);return delete r[a],encodeURIComponent(String(s))}),leftover:r}}function Nw(e,t){let n=new URLSearchParams;for(let[o,i]of Object.entries(t))n.set(o,String(i));let r=n.toString();return r===""?e:`${e}?${r}`}function Al(e,t){return[{name:"list_routes",description:"List the routes the app can navigate to. Each route's `pathParams` names the dynamic segments to pass as `params` to `navigate_to_route`.",parameters:{type:"object",properties:{},required:[],[Ie]:"List pages"},handler:()=>e().map(n=>({...n,pathParams:Rw(n.path)}))},{name:"navigate_to_route",description:"Navigate to one of the app's routes by its id, filling any dynamic `:name` path segments (and extra query params) from `params`.",parameters:{type:"object",properties:{route_id:{type:"string"},params:{type:"object"}},required:["route_id"],[lr]:!0,[Ie]:"Navigate"},handler:n=>{let r=n.route_id,o=e().find(u=>u.id===r);if(o===void 0)throw new Error(`unknown route "${String(r)}"`);let i=n.params??{},{path:a,leftover:s}=Cw(o.id,o.path,i),c=Nw(a,s),l=t();return l!==null?l(c):window.location.assign(c),{navigated:!0,path:c}}}]}var Pe=[];for(let e=0;e<256;++e)Pe.push((e+256).toString(16).slice(1));function wp(e,t=0){return(Pe[e[t+0]]+Pe[e[t+1]]+Pe[e[t+2]]+Pe[e[t+3]]+"-"+Pe[e[t+4]]+Pe[e[t+5]]+"-"+Pe[e[t+6]]+Pe[e[t+7]]+"-"+Pe[e[t+8]]+Pe[e[t+9]]+"-"+Pe[e[t+10]]+Pe[e[t+11]]+Pe[e[t+12]]+Pe[e[t+13]]+Pe[e[t+14]]+Pe[e[t+15]]).toLowerCase()}var kl,Ow=new Uint8Array(16);function Il(){if(!kl){if(typeof crypto>"u"||!crypto.getRandomValues)throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");kl=crypto.getRandomValues.bind(crypto)}return kl(Ow)}var Pw=typeof crypto<"u"&&crypto.randomUUID&&crypto.randomUUID.bind(crypto),Rl={randomUUID:Pw};function Mw(e,t,n){if(Rl.randomUUID&&!t&&!e)return Rl.randomUUID();e=e||{};let r=e.random??e.rng?.()??Il();if(r.length<16)throw new Error("Random bytes length must be >= 16");if(r[6]=r[6]&15|64,r[8]=r[8]&63|128,t){if(n=n||0,n<0||n+16>t.length)throw new RangeError(`UUID byte range ${n}:${n+15} is out of buffer bounds`);for(let o=0;o<16;++o)t[n+o]=r[o];return t}return wp(r)}var It=Mw;var v=(function(e){return e.TEXT_MESSAGE_START="TEXT_MESSAGE_START",e.TEXT_MESSAGE_CONTENT="TEXT_MESSAGE_CONTENT",e.TEXT_MESSAGE_END="TEXT_MESSAGE_END",e.TEXT_MESSAGE_CHUNK="TEXT_MESSAGE_CHUNK",e.TOOL_CALL_START="TOOL_CALL_START",e.TOOL_CALL_ARGS="TOOL_CALL_ARGS",e.TOOL_CALL_END="TOOL_CALL_END",e.TOOL_CALL_CHUNK="TOOL_CALL_CHUNK",e.TOOL_CALL_RESULT="TOOL_CALL_RESULT",e.STATE_SNAPSHOT="STATE_SNAPSHOT",e.STATE_DELTA="STATE_DELTA",e.MESSAGES_SNAPSHOT="MESSAGES_SNAPSHOT",e.ACTIVITY_SNAPSHOT="ACTIVITY_SNAPSHOT",e.ACTIVITY_DELTA="ACTIVITY_DELTA",e.RAW="RAW",e.CUSTOM="CUSTOM",e.RUN_STARTED="RUN_STARTED",e.RUN_FINISHED="RUN_FINISHED",e.RUN_ERROR="RUN_ERROR",e.STEP_STARTED="STEP_STARTED",e.STEP_FINISHED="STEP_FINISHED",e.REASONING_START="REASONING_START",e.REASONING_MESSAGE_START="REASONING_MESSAGE_START",e.REASONING_MESSAGE_CONTENT="REASONING_MESSAGE_CONTENT",e.REASONING_MESSAGE_END="REASONING_MESSAGE_END",e.REASONING_MESSAGE_CHUNK="REASONING_MESSAGE_CHUNK",e.REASONING_END="REASONING_END",e.REASONING_ENCRYPTED_VALUE="REASONING_ENCRYPTED_VALUE",e.SUBAGENT_STARTED="SUBAGENT_STARTED",e.SUBAGENT_FINISHED="SUBAGENT_FINISHED",e.SUBAGENT_ERROR="SUBAGENT_ERROR",e})({}),Bt="1.0";var zw={TextMessageStartEvent:{optional:["timestamp","rawEvent","metadata","subagentRunId","role","name"],fields:{}},TextMessageContentEvent:{optional:["timestamp","rawEvent","metadata","subagentRunId"],fields:{}},TextMessageEndEvent:{optional:["timestamp","rawEvent","metadata","subagentRunId"],fields:{}},TextMessageChunkEvent:{optional:["timestamp","rawEvent","metadata","subagentRunId","messageId","role","delta","name"],fields:{}},ToolCallStartEvent:{optional:["timestamp","rawEvent","metadata","subagentRunId","parentMessageId"],fields:{}},ToolCallArgsEvent:{optional:["timestamp","rawEvent","metadata","subagentRunId"],fields:{}},ToolCallEndEvent:{optional:["timestamp","rawEvent","metadata","subagentRunId"],fields:{}},ToolCallChunkEvent:{optional:["timestamp","rawEvent","metadata","subagentRunId","toolCallId","toolCallName","parentMessageId","delta"],fields:{}},TextPart:{optional:["id","metadata"],fields:{}},DataSource:{optional:[],fields:{}},UrlSource:{optional:["mimeType"],fields:{}},FileSource:{optional:["provider","mimeType"],fields:{}},PartSource:{discriminator:"type",variants:{data:"DataSource",url:"UrlSource",file:"FileSource"}},ImagePart:{optional:["id","metadata"],fields:{source:"PartSource"}},AudioPart:{optional:["id","metadata"],fields:{source:"PartSource"}},VideoPart:{optional:["id","metadata"],fields:{source:"PartSource"}},DocumentPart:{optional:["id","metadata"],fields:{source:"PartSource"}},ContentPart:{discriminator:"type",variants:{text:"TextPart",image:"ImagePart",audio:"AudioPart",video:"VideoPart",document:"DocumentPart"}},ToolCallResultEvent:{optional:["timestamp","rawEvent","metadata","subagentRunId","role"],fields:{content:{array:"ContentPart"}}},StateSnapshotEvent:{optional:["timestamp","rawEvent","metadata","subagentRunId"],fields:{}},AddOperation:{optional:[],fields:{}},RemoveOperation:{optional:[],fields:{}},ReplaceOperation:{optional:[],fields:{}},MoveOperation:{optional:[],fields:{}},CopyOperation:{optional:[],fields:{}},TestOperation:{optional:[],fields:{}},JsonPatchOperation:{discriminator:"op",variants:{add:"AddOperation",remove:"RemoveOperation",replace:"ReplaceOperation",move:"MoveOperation",copy:"CopyOperation",test:"TestOperation"}},StateDeltaEvent:{optional:["timestamp","rawEvent","metadata","subagentRunId"],fields:{delta:{array:"JsonPatchOperation"}}},DeveloperMessage:{optional:["subagentRunId","name","encryptedValue","metadata"],fields:{}},SystemMessage:{optional:["subagentRunId","name","encryptedValue","metadata"],fields:{}},FunctionCall:{optional:[],fields:{}},ToolCall:{optional:["encryptedValue","metadata"],fields:{function:"FunctionCall"}},AssistantMessage:{optional:["subagentRunId","name","encryptedValue","metadata","content","toolCalls"],fields:{toolCalls:{array:"ToolCall"}}},UserMessage:{optional:["subagentRunId","name","encryptedValue","metadata"],fields:{content:{array:"ContentPart"}}},ToolMessage:{optional:["subagentRunId","error","encryptedValue","metadata"],fields:{content:{array:"ContentPart"}}},ActivityMessage:{optional:["subagentRunId","metadata"],fields:{}},ReasoningMessage:{optional:["subagentRunId","encryptedValue","metadata"],fields:{}},Message:{discriminator:"role",variants:{developer:"DeveloperMessage",system:"SystemMessage",assistant:"AssistantMessage",user:"UserMessage",tool:"ToolMessage",activity:"ActivityMessage",reasoning:"ReasoningMessage"}},MessagesSnapshotEvent:{optional:["timestamp","rawEvent","metadata"],fields:{messages:{array:"Message"}}},ActivitySnapshotEvent:{optional:["timestamp","rawEvent","metadata","subagentRunId","replace"],fields:{}},ActivityDeltaEvent:{optional:["timestamp","rawEvent","metadata","subagentRunId"],fields:{patch:{array:"JsonPatchOperation"}}},RawEvent:{optional:["timestamp","rawEvent","metadata","subagentRunId","source"],fields:{}},CustomEvent:{optional:["timestamp","rawEvent","metadata","subagentRunId"],fields:{}},Tool:{optional:["parameters","metadata"],fields:{}},Context:{optional:[],fields:{}},ResumeEntry:{optional:["payload","metadata"],fields:{}},RunAgentInput:{optional:["protocolVersion","parentRunId","state","tools","context","forwardedProps","resume"],fields:{messages:{array:"Message"},tools:{array:"Tool"},context:{array:"Context"},resume:{array:"ResumeEntry"}}},RunStartedEvent:{optional:["timestamp","rawEvent","metadata","protocolVersion","parentRunId","input"],fields:{input:"RunAgentInput"}},RunFinishedSuccessOutcome:{optional:["pendingToolCallIds"],fields:{}},Interrupt:{optional:["subagentRunId","message","toolCallId","responseSchema","expiresAt","metadata"],fields:{}},RunFinishedInterruptOutcome:{optional:[],fields:{interrupts:{array:"Interrupt"}}},RunFinishedCancelledOutcome:{optional:[],fields:{}},RunFinishedOutcome:{discriminator:"type",variants:{success:"RunFinishedSuccessOutcome",interrupt:"RunFinishedInterruptOutcome",cancelled:"RunFinishedCancelledOutcome"}},TokenUsage:{optional:["provider","model","inputTokens","outputTokens","totalTokens","reasoningTokens","cachedInputTokens","cacheWriteInputTokens"],fields:{}},RunFinishedEvent:{optional:["timestamp","rawEvent","metadata","result","outcome","usage"],fields:{outcome:"RunFinishedOutcome",usage:{array:"TokenUsage"}}},RunErrorEvent:{optional:["timestamp","rawEvent","metadata","code","usage"],fields:{usage:{array:"TokenUsage"}}},StepStartedEvent:{optional:["timestamp","rawEvent","metadata","subagentRunId"],fields:{}},StepFinishedEvent:{optional:["timestamp","rawEvent","metadata","subagentRunId"],fields:{}},ReasoningStartEvent:{optional:["timestamp","rawEvent","metadata","subagentRunId"],fields:{}},ReasoningMessageStartEvent:{optional:["timestamp","rawEvent","metadata","subagentRunId"],fields:{}},ReasoningMessageContentEvent:{optional:["timestamp","rawEvent","metadata","subagentRunId"],fields:{}},ReasoningMessageEndEvent:{optional:["timestamp","rawEvent","metadata","subagentRunId"],fields:{}},ReasoningMessageChunkEvent:{optional:["timestamp","rawEvent","metadata","subagentRunId","messageId","delta"],fields:{}},ReasoningEndEvent:{optional:["timestamp","rawEvent","metadata","subagentRunId"],fields:{}},ReasoningEncryptedValueEvent:{optional:["timestamp","rawEvent","metadata","subagentRunId"],fields:{}},SubagentStartedEvent:{optional:["timestamp","rawEvent","metadata","description","parentSubagentRunId","parentToolCallId","parentMessageId"],fields:{}},SubagentFinishedSuccessOutcome:{optional:[],fields:{}},SubagentFinishedSuspendedOutcome:{optional:["interruptIds"],fields:{}},SubagentFinishedOutcome:{discriminator:"type",variants:{success:"SubagentFinishedSuccessOutcome",suspended:"SubagentFinishedSuspendedOutcome"}},SubagentFinishedEvent:{optional:["timestamp","rawEvent","metadata","result","outcome"],fields:{outcome:"SubagentFinishedOutcome"}},SubagentErrorEvent:{optional:["timestamp","rawEvent","metadata","code"],fields:{}},Event:{discriminator:"type",variants:{TEXT_MESSAGE_START:"TextMessageStartEvent",TEXT_MESSAGE_CONTENT:"TextMessageContentEvent",TEXT_MESSAGE_END:"TextMessageEndEvent",TEXT_MESSAGE_CHUNK:"TextMessageChunkEvent",TOOL_CALL_START:"ToolCallStartEvent",TOOL_CALL_ARGS:"ToolCallArgsEvent",TOOL_CALL_END:"ToolCallEndEvent",TOOL_CALL_CHUNK:"ToolCallChunkEvent",TOOL_CALL_RESULT:"ToolCallResultEvent",STATE_SNAPSHOT:"StateSnapshotEvent",STATE_DELTA:"StateDeltaEvent",MESSAGES_SNAPSHOT:"MessagesSnapshotEvent",ACTIVITY_SNAPSHOT:"ActivitySnapshotEvent",ACTIVITY_DELTA:"ActivityDeltaEvent",RAW:"RawEvent",CUSTOM:"CustomEvent",RUN_STARTED:"RunStartedEvent",RUN_FINISHED:"RunFinishedEvent",RUN_ERROR:"RunErrorEvent",STEP_STARTED:"StepStartedEvent",STEP_FINISHED:"StepFinishedEvent",REASONING_START:"ReasoningStartEvent",REASONING_MESSAGE_START:"ReasoningMessageStartEvent",REASONING_MESSAGE_CONTENT:"ReasoningMessageContentEvent",REASONING_MESSAGE_END:"ReasoningMessageEndEvent",REASONING_MESSAGE_CHUNK:"ReasoningMessageChunkEvent",REASONING_END:"ReasoningEndEvent",REASONING_ENCRYPTED_VALUE:"ReasoningEncryptedValueEvent",SUBAGENT_STARTED:"SubagentStartedEvent",SUBAGENT_FINISHED:"SubagentFinishedEvent",SUBAGENT_ERROR:"SubagentErrorEvent"}},SubagentInfo:{optional:["description"],fields:{}},IdentityCapabilities:{optional:["name","type","description","version","provider","documentationUrl","metadata"],fields:{}},TransportCapabilities:{optional:["streaming","websocket","httpBinary","pushNotifications","resumable"],fields:{}},ToolsCapabilities:{optional:["supported","items","parallelCalls","clientProvided"],fields:{items:{array:"Tool"}}},OutputCapabilities:{optional:["structuredOutput","supportedMimeTypes"],fields:{}},StateCapabilities:{optional:["snapshots","deltas","memory","persistentState"],fields:{}},MultiAgentCapabilities:{optional:["supported","delegation","handoffs","subagents"],fields:{subagents:{array:"SubagentInfo"}}},ReasoningCapabilities:{optional:["supported","streaming","encrypted"],fields:{}},MultimodalInputCapabilities:{optional:["image","audio","video","pdf","file"],fields:{}},MultimodalOutputCapabilities:{optional:["image","audio"],fields:{}},MultimodalCapabilities:{optional:["input","output"],fields:{input:"MultimodalInputCapabilities",output:"MultimodalOutputCapabilities"}},ExecutionCapabilities:{optional:["codeExecution","sandboxed","maxIterations","maxExecutionTime"],fields:{}},HumanInTheLoopCapabilities:{optional:["supported","approvals","interventions","feedback","interrupts","approveWithEdits"],fields:{}},AgentCapabilities:{optional:["identity","transport","tools","output","state","multiAgent","reasoning","multimodal","execution","humanInTheLoop","custom"],fields:{identity:"IdentityCapabilities",transport:"TransportCapabilities",tools:"ToolsCapabilities",output:"OutputCapabilities",state:"StateCapabilities",multiAgent:"MultiAgentCapabilities",reasoning:"ReasoningCapabilities",multimodal:"MultimodalCapabilities",execution:"ExecutionCapabilities",humanInTheLoop:"HumanInTheLoopCapabilities"}}};function hr(e,t){if(typeof t=="string")return hr(e,zw[t]);if("array"in t){if(!Array.isArray(e))return e;let o=e.map(i=>hr(i,t.array));return o.every((i,a)=>i===e[a])?e:o}if(typeof e!="object"||e===null||Array.isArray(e))return e;let n=e;if("discriminator"in t){let o=n[t.discriminator];return typeof o=="string"&&Object.prototype.hasOwnProperty.call(t.variants,o)?hr(e,t.variants[o]):e}let r=n;for(let o of t.optional)Object.prototype.hasOwnProperty.call(n,o)&&n[o]===null&&(r===n&&(r={...n}),delete r[o]);for(let[o,i]of Object.entries(t.fields)){if(!Object.prototype.hasOwnProperty.call(r,o))continue;let a=hr(r[o],i);a!==r[o]&&(r===n&&(r={...n}),r[o]=a)}return r}function Cl(e,t){return hr(e,t)}var j=class extends Error{constructor(e){super(e)}},Nl=class extends j{constructor(){super("Connect not implemented. This method is not supported by the current agent.")}};function Ep(e,t){return t===void 0?e:e===void 0?{...t}:{...e,...t}}function Rn(e){return e===void 0?"":typeof e=="string"?e:e.filter(t=>t.type==="text").map(t=>t.text).join("")}function xp(e){return Array.isArray(e)&&e.some(t=>t.type!=="text")}var Ol={};Js(Ol,{JsonPatchError:()=>xe,_areEquals:()=>gr,applyOperation:()=>Vt,applyPatch:()=>Zo,applyReducer:()=>Hw,deepClone:()=>$w,getValueByPointer:()=>Fo,validate:()=>_p,validator:()=>Go});var Lw=(function(){var e=function(t,n){return e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(r,o){r.__proto__=o}||function(r,o){for(var i in o)o.hasOwnProperty(i)&&(r[i]=o[i])},e(t,n)};return function(t,n){e(t,n);function r(){this.constructor=t}t.prototype=n===null?Object.create(n):(r.prototype=n.prototype,new r)}})(),Dw=Object.prototype.hasOwnProperty;function $o(e,t){return Dw.call(e,t)}function Uo(e){if(Array.isArray(e)){for(var t=new Array(e.length),n=0;n<t.length;n++)t[n]=""+n;return t}if(Object.keys)return Object.keys(e);var r=[];for(var o in e)$o(e,o)&&r.push(o);return r}function Me(e){switch(typeof e){case"object":return JSON.parse(JSON.stringify(e));case"undefined":return null;default:return e}}function Ho(e){for(var t=0,n=e.length,r;t<n;){if(r=e.charCodeAt(t),r>=48&&r<=57){t++;continue}return!1}return!0}function mt(e){return e.indexOf("/")===-1&&e.indexOf("~")===-1?e:e.replace(/~/g,"~0").replace(/\//g,"~1")}function fr(e){return e.replace(/~1/g,"/").replace(/~0/g,"~")}function Do(e){if(e===void 0)return!0;if(e){if(Array.isArray(e)){for(var t=0,n=e.length;t<n;t++)if(Do(e[t]))return!0}else if(typeof e=="object"){for(var r=Uo(e),o=r.length,i=0;i<o;i++)if(Do(e[r[i]]))return!0}}return!1}function Sp(e,t){var n=[e];for(var r in t){var o=typeof t[r]=="object"?JSON.stringify(t[r],null,2):t[r];typeof o<"u"&&n.push(r+": "+o)}return n.join(`
`)}var mr=(function(e){Lw(t,e);function t(n,r,o,i,a){var s=this.constructor,c=e.call(this,Sp(n,{name:r,index:o,operation:i,tree:a}))||this;return c.name=r,c.index=o,c.operation=i,c.tree=a,Object.setPrototypeOf(c,s.prototype),c.message=Sp(n,{name:r,index:o,operation:i,tree:a}),c}return t})(Error);var xe=mr,$w=Me,Cn={add:function(e,t,n){return e[t]=this.value,{newDocument:n}},remove:function(e,t,n){var r=e[t];return delete e[t],{newDocument:n,removed:r}},replace:function(e,t,n){var r=e[t];return e[t]=this.value,{newDocument:n,removed:r}},move:function(e,t,n){var r=Fo(n,this.path);r&&(r=Me(r));var o=Vt(n,{op:"remove",path:this.from}).removed;return Vt(n,{op:"add",path:this.path,value:o}),{newDocument:n,removed:r}},copy:function(e,t,n){var r=Fo(n,this.from);return Vt(n,{op:"add",path:this.path,value:Me(r)}),{newDocument:n}},test:function(e,t,n){return{newDocument:n,test:gr(e[t],this.value)}},_get:function(e,t,n){return this.value=e[t],{newDocument:n}}},Uw={add:function(e,t,n){return Ho(t)?e.splice(t,0,this.value):e[t]=this.value,{newDocument:n,index:t}},remove:function(e,t,n){var r=e.splice(t,1);return{newDocument:n,removed:r[0]}},replace:function(e,t,n){var r=e[t];return e[t]=this.value,{newDocument:n,removed:r}},move:Cn.move,copy:Cn.copy,test:Cn.test,_get:Cn._get};function Fo(e,t){if(t=="")return e;var n={op:"_get",path:t};return Vt(e,n),n.value}function Vt(e,t,n,r,o,i){if(n===void 0&&(n=!1),r===void 0&&(r=!0),o===void 0&&(o=!0),i===void 0&&(i=0),n&&(typeof n=="function"?n(t,0,e,t.path):Go(t,0)),t.path===""){var a={newDocument:e};if(t.op==="add")return a.newDocument=t.value,a;if(t.op==="replace")return a.newDocument=t.value,a.removed=e,a;if(t.op==="move"||t.op==="copy")return a.newDocument=Fo(e,t.from),t.op==="move"&&(a.removed=e),a;if(t.op==="test"){if(a.test=gr(e,t.value),a.test===!1)throw new xe("Test operation failed","TEST_OPERATION_FAILED",i,t,e);return a.newDocument=e,a}else{if(t.op==="remove")return a.removed=e,a.newDocument=null,a;if(t.op==="_get")return t.value=e,a;if(n)throw new xe("Operation `op` property is not one of operations defined in RFC-6902","OPERATION_OP_INVALID",i,t,e);return a}}else{r||(e=Me(e));var s=t.path||"",c=s.split("/"),l=e,u=1,m=c.length,f=void 0,h=void 0,p=void 0;for(typeof n=="function"?p=n:p=Go;;){if(h=c[u],h&&h.indexOf("~")!=-1&&(h=fr(h)),o&&(h=="__proto__"||h=="prototype"&&u>0&&c[u-1]=="constructor"))throw new TypeError("JSON-Patch: modifying `__proto__` or `constructor/prototype` prop is banned for security reasons, if this was on purpose, please set `banPrototypeModifications` flag false and pass it to this function. More info in fast-json-patch README");if(n&&f===void 0&&(l[h]===void 0?f=c.slice(0,u).join("/"):u==m-1&&(f=t.path),f!==void 0&&p(t,0,e,f)),u++,Array.isArray(l)){if(h==="-")h=l.length;else{if(n&&!Ho(h))throw new xe("Expected an unsigned base-10 integer value, making the new referenced value the array element with the zero-based index","OPERATION_PATH_ILLEGAL_ARRAY_INDEX",i,t,e);Ho(h)&&(h=~~h)}if(u>=m){if(n&&t.op==="add"&&h>l.length)throw new xe("The specified index MUST NOT be greater than the number of elements in the array","OPERATION_VALUE_OUT_OF_BOUNDS",i,t,e);var a=Uw[t.op].call(t,l,h,e);if(a.test===!1)throw new xe("Test operation failed","TEST_OPERATION_FAILED",i,t,e);return a}}else if(u>=m){var a=Cn[t.op].call(t,l,h,e);if(a.test===!1)throw new xe("Test operation failed","TEST_OPERATION_FAILED",i,t,e);return a}if(l=l[h],n&&u<m&&(!l||typeof l!="object"))throw new xe("Cannot perform operation at the desired path","OPERATION_PATH_UNRESOLVABLE",i,t,e)}}}function Zo(e,t,n,r,o){if(r===void 0&&(r=!0),o===void 0&&(o=!0),n&&!Array.isArray(t))throw new xe("Patch sequence must be an array","SEQUENCE_NOT_AN_ARRAY");r||(e=Me(e));for(var i=new Array(t.length),a=0,s=t.length;a<s;a++)i[a]=Vt(e,t[a],n,!0,o,a),e=i[a].newDocument;return i.newDocument=e,i}function Hw(e,t,n){var r=Vt(e,t);if(r.test===!1)throw new xe("Test operation failed","TEST_OPERATION_FAILED",n,t,e);return r.newDocument}function Go(e,t,n,r){if(typeof e!="object"||e===null||Array.isArray(e))throw new xe("Operation is not an object","OPERATION_NOT_AN_OBJECT",t,e,n);if(Cn[e.op]){if(typeof e.path!="string")throw new xe("Operation `path` property is not a string","OPERATION_PATH_INVALID",t,e,n);if(e.path.indexOf("/")!==0&&e.path.length>0)throw new xe('Operation `path` property must start with "/"',"OPERATION_PATH_INVALID",t,e,n);if((e.op==="move"||e.op==="copy")&&typeof e.from!="string")throw new xe("Operation `from` property is not present (applicable in `move` and `copy` operations)","OPERATION_FROM_REQUIRED",t,e,n);if((e.op==="add"||e.op==="replace"||e.op==="test")&&e.value===void 0)throw new xe("Operation `value` property is not present (applicable in `add`, `replace` and `test` operations)","OPERATION_VALUE_REQUIRED",t,e,n);if((e.op==="add"||e.op==="replace"||e.op==="test")&&Do(e.value))throw new xe("Operation `value` property is not present (applicable in `add`, `replace` and `test` operations)","OPERATION_VALUE_CANNOT_CONTAIN_UNDEFINED",t,e,n);if(n){if(e.op=="add"){var o=e.path.split("/").length,i=r.split("/").length;if(o!==i+1&&o!==i)throw new xe("Cannot perform an `add` operation at the desired path","OPERATION_PATH_CANNOT_ADD",t,e,n)}else if(e.op==="replace"||e.op==="remove"||e.op==="_get"){if(e.path!==r)throw new xe("Cannot perform the operation at a path that does not exist","OPERATION_PATH_UNRESOLVABLE",t,e,n)}else if(e.op==="move"||e.op==="copy"){var a={op:"_get",path:e.from,value:void 0},s=_p([a],n);if(s&&s.name==="OPERATION_PATH_UNRESOLVABLE")throw new xe("Cannot perform the operation from a path that does not exist","OPERATION_FROM_UNRESOLVABLE",t,e,n)}}}else throw new xe("Operation `op` property is not one of operations defined in RFC-6902","OPERATION_OP_INVALID",t,e,n)}function _p(e,t,n){try{if(!Array.isArray(e))throw new xe("Patch sequence must be an array","SEQUENCE_NOT_AN_ARRAY");if(t)Zo(Me(t),Me(e),n||!0);else{n=n||Go;for(var r=0;r<e.length;r++)n(e[r],r,t,void 0)}}catch(o){if(o instanceof xe)return o;throw o}}function gr(e,t){if(e===t)return!0;if(e&&t&&typeof e=="object"&&typeof t=="object"){var n=Array.isArray(e),r=Array.isArray(t),o,i,a;if(n&&r){if(i=e.length,i!=t.length)return!1;for(o=i;o--!==0;)if(!gr(e[o],t[o]))return!1;return!0}if(n!=r)return!1;var s=Object.keys(e);if(i=s.length,i!==Object.keys(t).length)return!1;for(o=i;o--!==0;)if(!t.hasOwnProperty(s[o]))return!1;for(o=i;o--!==0;)if(a=s[o],!gr(e[a],t[a]))return!1;return!0}return e!==e&&t!==t}var Ll={};Js(Ll,{compare:()=>qw,generate:()=>Pl,observe:()=>Ww,unobserve:()=>jw});var Ml=new WeakMap,Fw=(function(){function e(t){this.observers=new Map,this.obj=t}return e})(),Gw=(function(){function e(t,n){this.callback=t,this.observer=n}return e})();function Zw(e){return Ml.get(e)}function Bw(e,t){return e.observers.get(t)}function Vw(e,t){e.observers.delete(t.callback)}function jw(e,t){t.unobserve()}function Ww(e,t){var n=[],r,o=Zw(e);if(!o)o=new Fw(e),Ml.set(e,o);else{var i=Bw(o,t);r=i&&i.observer}if(r)return r;if(r={},o.value=Me(e),t){r.callback=t,r.next=null;var a=function(){Pl(r)},s=function(){clearTimeout(r.next),r.next=setTimeout(a)};typeof window<"u"&&(window.addEventListener("mouseup",s),window.addEventListener("keyup",s),window.addEventListener("mousedown",s),window.addEventListener("keydown",s),window.addEventListener("change",s))}return r.patches=n,r.object=e,r.unobserve=function(){Pl(r),clearTimeout(r.next),Vw(o,r),typeof window<"u"&&(window.removeEventListener("mouseup",s),window.removeEventListener("keyup",s),window.removeEventListener("mousedown",s),window.removeEventListener("keydown",s),window.removeEventListener("change",s))},o.observers.set(t,new Gw(t,r)),r}function Pl(e,t){t===void 0&&(t=!1);var n=Ml.get(e.object);zl(n.value,e.object,e.patches,"",t),e.patches.length&&Zo(n.value,e.patches);var r=e.patches;return r.length>0&&(e.patches=[],e.callback&&e.callback(r)),r}function zl(e,t,n,r,o){if(t!==e){typeof t.toJSON=="function"&&(t=t.toJSON());for(var i=Uo(t),a=Uo(e),s=!1,c=!1,l=a.length-1;l>=0;l--){var u=a[l],m=e[u];if($o(t,u)&&!(t[u]===void 0&&m!==void 0&&Array.isArray(t)===!1)){var f=t[u];typeof m=="object"&&m!=null&&typeof f=="object"&&f!=null&&Array.isArray(m)===Array.isArray(f)?zl(m,f,n,r+"/"+mt(u),o):m!==f&&(s=!0,o&&n.push({op:"test",path:r+"/"+mt(u),value:Me(m)}),n.push({op:"replace",path:r+"/"+mt(u),value:Me(f)}))}else Array.isArray(e)===Array.isArray(t)?(o&&n.push({op:"test",path:r+"/"+mt(u),value:Me(m)}),n.push({op:"remove",path:r+"/"+mt(u)}),c=!0):(o&&n.push({op:"test",path:r,value:e}),n.push({op:"replace",path:r,value:t}),s=!0)}if(!(!c&&i.length==a.length))for(var l=0;l<i.length;l++){var u=i[l];!$o(e,u)&&t[u]!==void 0&&n.push({op:"add",path:r+"/"+mt(u),value:Me(t[u])})}}}function qw(e,t,n){n===void 0&&(n=!1);var r=[];return zl(e,t,r,"",n),r}var Bo=Object.assign({},Ol,Ll,{JsonPatchError:mr,deepClone:Me,escapePathComponent:mt,unescapePathComponent:fr});var Dl=function(e,t){return Dl=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(n,r){n.__proto__=r}||function(n,r){for(var o in r)Object.prototype.hasOwnProperty.call(r,o)&&(n[o]=r[o])},Dl(e,t)};function gt(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");Dl(e,t);function n(){this.constructor=e}e.prototype=t===null?Object.create(t):(n.prototype=t.prototype,new n)}function Tp(e,t,n,r){function o(i){return i instanceof n?i:new n(function(a){a(i)})}return new(n||(n=Promise))(function(i,a){function s(u){try{l(r.next(u))}catch(m){a(m)}}function c(u){try{l(r.throw(u))}catch(m){a(m)}}function l(u){u.done?i(u.value):o(u.value).then(s,c)}l((r=r.apply(e,t||[])).next())})}function Vo(e,t){var n={label:0,sent:function(){if(i[0]&1)throw i[1];return i[1]},trys:[],ops:[]},r,o,i,a=Object.create((typeof Iterator=="function"?Iterator:Object).prototype);return a.next=s(0),a.throw=s(1),a.return=s(2),typeof Symbol=="function"&&(a[Symbol.iterator]=function(){return this}),a;function s(l){return function(u){return c([l,u])}}function c(l){if(r)throw new TypeError("Generator is already executing.");for(;a&&(a=0,l[0]&&(n=0)),n;)try{if(r=1,o&&(i=l[0]&2?o.return:l[0]?o.throw||((i=o.return)&&i.call(o),0):o.next)&&!(i=i.call(o,l[1])).done)return i;switch(o=0,i&&(l=[l[0]&2,i.value]),l[0]){case 0:case 1:i=l;break;case 4:return n.label++,{value:l[1],done:!1};case 5:n.label++,o=l[1],l=[0];continue;case 7:l=n.ops.pop(),n.trys.pop();continue;default:if(i=n.trys,!(i=i.length>0&&i[i.length-1])&&(l[0]===6||l[0]===2)){n=0;continue}if(l[0]===3&&(!i||l[1]>i[0]&&l[1]<i[3])){n.label=l[1];break}if(l[0]===6&&n.label<i[1]){n.label=i[1],i=l;break}if(i&&n.label<i[2]){n.label=i[2],n.ops.push(l);break}i[2]&&n.ops.pop(),n.trys.pop();continue}l=t.call(e,n)}catch(u){l=[6,u],o=0}finally{r=i=0}if(l[0]&5)throw l[1];return{value:l[0]?l[1]:void 0,done:!0}}}function xt(e){var t=typeof Symbol=="function"&&Symbol.iterator,n=t&&e[t],r=0;if(n)return n.call(e);if(e&&typeof e.length=="number")return{next:function(){return e&&r>=e.length&&(e=void 0),{value:e&&e[r++],done:!e}}};throw new TypeError(t?"Object is not iterable.":"Symbol.iterator is not defined.")}function Nn(e,t){var n=typeof Symbol=="function"&&e[Symbol.iterator];if(!n)return e;var r=n.call(e),o,i=[],a;try{for(;(t===void 0||t-- >0)&&!(o=r.next()).done;)i.push(o.value)}catch(s){a={error:s}}finally{try{o&&!o.done&&(n=r.return)&&n.call(r)}finally{if(a)throw a.error}}return i}function On(e,t,n){if(n||arguments.length===2)for(var r=0,o=t.length,i;r<o;r++)(i||!(r in t))&&(i||(i=Array.prototype.slice.call(t,0,r)),i[r]=t[r]);return e.concat(i||Array.prototype.slice.call(t))}function jt(e){return this instanceof jt?(this.v=e,this):new jt(e)}function Ap(e,t,n){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var r=n.apply(e,t||[]),o,i=[];return o=Object.create((typeof AsyncIterator=="function"?AsyncIterator:Object).prototype),s("next"),s("throw"),s("return",a),o[Symbol.asyncIterator]=function(){return this},o;function a(h){return function(p){return Promise.resolve(p).then(h,m)}}function s(h,p){r[h]&&(o[h]=function(E){return new Promise(function(b,S){i.push([h,E,b,S])>1||c(h,E)})},p&&(o[h]=p(o[h])))}function c(h,p){try{l(r[h](p))}catch(E){f(i[0][3],E)}}function l(h){h.value instanceof jt?Promise.resolve(h.value.v).then(u,m):f(i[0][2],h)}function u(h){c("next",h)}function m(h){c("throw",h)}function f(h,p){h(p),i.shift(),i.length&&c(i[0][0],i[0][1])}}function kp(e){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var t=e[Symbol.asyncIterator],n;return t?t.call(e):(e=typeof xt=="function"?xt(e):e[Symbol.iterator](),n={},r("next"),r("throw"),r("return"),n[Symbol.asyncIterator]=function(){return this},n);function r(i){n[i]=e[i]&&function(a){return new Promise(function(s,c){a=e[i](a),o(s,c,a.done,a.value)})}}function o(i,a,s,c){Promise.resolve(c).then(function(l){i({value:l,done:s})},a)}}function Y(e){return typeof e=="function"}function Pn(e){var t=function(r){Error.call(r),r.stack=new Error().stack},n=e(t);return n.prototype=Object.create(Error.prototype),n.prototype.constructor=n,n}var jo=Pn(function(e){return function(n){e(this),this.message=n?n.length+` errors occurred during unsubscription:
`+n.map(function(r,o){return o+1+") "+r.toString()}).join(`
  `):"",this.name="UnsubscriptionError",this.errors=n}});function vr(e,t){if(e){var n=e.indexOf(t);0<=n&&e.splice(n,1)}}var Mn=(function(){function e(t){this.initialTeardown=t,this.closed=!1,this._parentage=null,this._finalizers=null}return e.prototype.unsubscribe=function(){var t,n,r,o,i;if(!this.closed){this.closed=!0;var a=this._parentage;if(a)if(this._parentage=null,Array.isArray(a))try{for(var s=xt(a),c=s.next();!c.done;c=s.next()){var l=c.value;l.remove(this)}}catch(E){t={error:E}}finally{try{c&&!c.done&&(n=s.return)&&n.call(s)}finally{if(t)throw t.error}}else a.remove(this);var u=this.initialTeardown;if(Y(u))try{u()}catch(E){i=E instanceof jo?E.errors:[E]}var m=this._finalizers;if(m){this._finalizers=null;try{for(var f=xt(m),h=f.next();!h.done;h=f.next()){var p=h.value;try{Ip(p)}catch(E){i=i??[],E instanceof jo?i=On(On([],Nn(i)),Nn(E.errors)):i.push(E)}}}catch(E){r={error:E}}finally{try{h&&!h.done&&(o=f.return)&&o.call(f)}finally{if(r)throw r.error}}}if(i)throw new jo(i)}},e.prototype.add=function(t){var n;if(t&&t!==this)if(this.closed)Ip(t);else{if(t instanceof e){if(t.closed||t._hasParent(this))return;t._addParent(this)}(this._finalizers=(n=this._finalizers)!==null&&n!==void 0?n:[]).push(t)}},e.prototype._hasParent=function(t){var n=this._parentage;return n===t||Array.isArray(n)&&n.includes(t)},e.prototype._addParent=function(t){var n=this._parentage;this._parentage=Array.isArray(n)?(n.push(t),n):n?[n,t]:t},e.prototype._removeParent=function(t){var n=this._parentage;n===t?this._parentage=null:Array.isArray(n)&&vr(n,t)},e.prototype.remove=function(t){var n=this._finalizers;n&&vr(n,t),t instanceof e&&t._removeParent(this)},e.EMPTY=(function(){var t=new e;return t.closed=!0,t})(),e})();var $l=Mn.EMPTY;function Wo(e){return e instanceof Mn||e&&"closed"in e&&Y(e.remove)&&Y(e.add)&&Y(e.unsubscribe)}function Ip(e){Y(e)?e():e.unsubscribe()}var it={onUnhandledError:null,onStoppedNotification:null,Promise:void 0,useDeprecatedSynchronousErrorHandling:!1,useDeprecatedNextContext:!1};var zn={setTimeout:function(e,t){for(var n=[],r=2;r<arguments.length;r++)n[r-2]=arguments[r];var o=zn.delegate;return o?.setTimeout?o.setTimeout.apply(o,On([e,t],Nn(n))):setTimeout.apply(void 0,On([e,t],Nn(n)))},clearTimeout:function(e){var t=zn.delegate;return(t?.clearTimeout||clearTimeout)(e)},delegate:void 0};function qo(e){zn.setTimeout(function(){var t=it.onUnhandledError;if(t)t(e);else throw e})}function br(){}var Rp=(function(){return Ul("C",void 0,void 0)})();function Cp(e){return Ul("E",void 0,e)}function Np(e){return Ul("N",e,void 0)}function Ul(e,t,n){return{kind:e,value:t,error:n}}var Wt=null;function Ln(e){if(it.useDeprecatedSynchronousErrorHandling){var t=!Wt;if(t&&(Wt={errorThrown:!1,error:null}),e(),t){var n=Wt,r=n.errorThrown,o=n.error;if(Wt=null,r)throw o}}else e()}function Op(e){it.useDeprecatedSynchronousErrorHandling&&Wt&&(Wt.errorThrown=!0,Wt.error=e)}var yr=(function(e){gt(t,e);function t(n){var r=e.call(this)||this;return r.isStopped=!1,n?(r.destination=n,Wo(n)&&n.add(r)):r.destination=Jw,r}return t.create=function(n,r,o){return new Xo(n,r,o)},t.prototype.next=function(n){this.isStopped?Fl(Np(n),this):this._next(n)},t.prototype.error=function(n){this.isStopped?Fl(Cp(n),this):(this.isStopped=!0,this._error(n))},t.prototype.complete=function(){this.isStopped?Fl(Rp,this):(this.isStopped=!0,this._complete())},t.prototype.unsubscribe=function(){this.closed||(this.isStopped=!0,e.prototype.unsubscribe.call(this),this.destination=null)},t.prototype._next=function(n){this.destination.next(n)},t.prototype._error=function(n){try{this.destination.error(n)}finally{this.unsubscribe()}},t.prototype._complete=function(){try{this.destination.complete()}finally{this.unsubscribe()}},t})(Mn);var Yw=Function.prototype.bind;function Hl(e,t){return Yw.call(e,t)}var Xw=(function(){function e(t){this.partialObserver=t}return e.prototype.next=function(t){var n=this.partialObserver;if(n.next)try{n.next(t)}catch(r){Yo(r)}},e.prototype.error=function(t){var n=this.partialObserver;if(n.error)try{n.error(t)}catch(r){Yo(r)}else Yo(t)},e.prototype.complete=function(){var t=this.partialObserver;if(t.complete)try{t.complete()}catch(n){Yo(n)}},e})(),Xo=(function(e){gt(t,e);function t(n,r,o){var i=e.call(this)||this,a;if(Y(n)||!n)a={next:n??void 0,error:r??void 0,complete:o??void 0};else{var s;i&&it.useDeprecatedNextContext?(s=Object.create(n),s.unsubscribe=function(){return i.unsubscribe()},a={next:n.next&&Hl(n.next,s),error:n.error&&Hl(n.error,s),complete:n.complete&&Hl(n.complete,s)}):a=n}return i.destination=new Xw(a),i}return t})(yr);function Yo(e){it.useDeprecatedSynchronousErrorHandling?Op(e):qo(e)}function Kw(e){throw e}function Fl(e,t){var n=it.onStoppedNotification;n&&zn.setTimeout(function(){return n(e,t)})}var Jw={closed:!0,next:br,error:Kw,complete:br};var Dn=(function(){return typeof Symbol=="function"&&Symbol.observable||"@@observable"})();function $n(e){return e}function Ko(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];return Gl(e)}function Gl(e){return e.length===0?$n:e.length===1?e[0]:function(n){return e.reduce(function(r,o){return o(r)},n)}}var he=(function(){function e(t){t&&(this._subscribe=t)}return e.prototype.lift=function(t){var n=new e;return n.source=this,n.operator=t,n},e.prototype.subscribe=function(t,n,r){var o=this,i=eE(t)?t:new Xo(t,n,r);return Ln(function(){var a=o,s=a.operator,c=a.source;i.add(s?s.call(i,c):c?o._subscribe(i):o._trySubscribe(i))}),i},e.prototype._trySubscribe=function(t){try{return this._subscribe(t)}catch(n){t.error(n)}},e.prototype.forEach=function(t,n){var r=this;return n=Pp(n),new n(function(o,i){var a=new Xo({next:function(s){try{t(s)}catch(c){i(c),a.unsubscribe()}},error:i,complete:o});r.subscribe(a)})},e.prototype._subscribe=function(t){var n;return(n=this.source)===null||n===void 0?void 0:n.subscribe(t)},e.prototype[Dn]=function(){return this},e.prototype.pipe=function(){for(var t=[],n=0;n<arguments.length;n++)t[n]=arguments[n];return Gl(t)(this)},e.prototype.toPromise=function(t){var n=this;return t=Pp(t),new t(function(r,o){var i;n.subscribe(function(a){return i=a},function(a){return o(a)},function(){return r(i)})})},e.create=function(t){return new e(t)},e})();function Pp(e){var t;return(t=e??it.Promise)!==null&&t!==void 0?t:Promise}function Qw(e){return e&&Y(e.next)&&Y(e.error)&&Y(e.complete)}function eE(e){return e&&e instanceof yr||Qw(e)&&Wo(e)}function tE(e){return Y(e?.lift)}function Se(e){return function(t){if(tE(t))return t.lift(function(n){try{return e(n,this)}catch(r){this.error(r)}});throw new TypeError("Unable to lift unknown Observable type")}}function Te(e,t,n,r,o){return new nE(e,t,n,r,o)}var nE=(function(e){gt(t,e);function t(n,r,o,i,a,s){var c=e.call(this,n)||this;return c.onFinalize=a,c.shouldUnsubscribe=s,c._next=r?function(l){try{r(l)}catch(u){n.error(u)}}:e.prototype._next,c._error=i?function(l){try{i(l)}catch(u){n.error(u)}finally{this.unsubscribe()}}:e.prototype._error,c._complete=o?function(){try{o()}catch(l){n.error(l)}finally{this.unsubscribe()}}:e.prototype._complete,c}return t.prototype.unsubscribe=function(){var n;if(!this.shouldUnsubscribe||this.shouldUnsubscribe()){var r=this.closed;e.prototype.unsubscribe.call(this),!r&&((n=this.onFinalize)===null||n===void 0||n.call(this))}},t})(yr);var Mp=Pn(function(e){return function(){e(this),this.name="ObjectUnsubscribedError",this.message="object unsubscribed"}});var vt=(function(e){gt(t,e);function t(){var n=e.call(this)||this;return n.closed=!1,n.currentObservers=null,n.observers=[],n.isStopped=!1,n.hasError=!1,n.thrownError=null,n}return t.prototype.lift=function(n){var r=new zp(this,this);return r.operator=n,r},t.prototype._throwIfClosed=function(){if(this.closed)throw new Mp},t.prototype.next=function(n){var r=this;Ln(function(){var o,i;if(r._throwIfClosed(),!r.isStopped){r.currentObservers||(r.currentObservers=Array.from(r.observers));try{for(var a=xt(r.currentObservers),s=a.next();!s.done;s=a.next()){var c=s.value;c.next(n)}}catch(l){o={error:l}}finally{try{s&&!s.done&&(i=a.return)&&i.call(a)}finally{if(o)throw o.error}}}})},t.prototype.error=function(n){var r=this;Ln(function(){if(r._throwIfClosed(),!r.isStopped){r.hasError=r.isStopped=!0,r.thrownError=n;for(var o=r.observers;o.length;)o.shift().error(n)}})},t.prototype.complete=function(){var n=this;Ln(function(){if(n._throwIfClosed(),!n.isStopped){n.isStopped=!0;for(var r=n.observers;r.length;)r.shift().complete()}})},t.prototype.unsubscribe=function(){this.isStopped=this.closed=!0,this.observers=this.currentObservers=null},Object.defineProperty(t.prototype,"observed",{get:function(){var n;return((n=this.observers)===null||n===void 0?void 0:n.length)>0},enumerable:!1,configurable:!0}),t.prototype._trySubscribe=function(n){return this._throwIfClosed(),e.prototype._trySubscribe.call(this,n)},t.prototype._subscribe=function(n){return this._throwIfClosed(),this._checkFinalizedStatuses(n),this._innerSubscribe(n)},t.prototype._innerSubscribe=function(n){var r=this,o=this,i=o.hasError,a=o.isStopped,s=o.observers;return i||a?$l:(this.currentObservers=null,s.push(n),new Mn(function(){r.currentObservers=null,vr(s,n)}))},t.prototype._checkFinalizedStatuses=function(n){var r=this,o=r.hasError,i=r.thrownError,a=r.isStopped;o?n.error(i):a&&n.complete()},t.prototype.asObservable=function(){var n=new he;return n.source=this,n},t.create=function(n,r){return new zp(n,r)},t})(he);var zp=(function(e){gt(t,e);function t(n,r){var o=e.call(this)||this;return o.destination=n,o.source=r,o}return t.prototype.next=function(n){var r,o;(o=(r=this.destination)===null||r===void 0?void 0:r.next)===null||o===void 0||o.call(r,n)},t.prototype.error=function(n){var r,o;(o=(r=this.destination)===null||r===void 0?void 0:r.error)===null||o===void 0||o.call(r,n)},t.prototype.complete=function(){var n,r;(r=(n=this.destination)===null||n===void 0?void 0:n.complete)===null||r===void 0||r.call(n)},t.prototype._subscribe=function(n){var r,o;return(o=(r=this.source)===null||r===void 0?void 0:r.subscribe(n))!==null&&o!==void 0?o:$l},t})(vt);var Zl={now:function(){return(Zl.delegate||Date).now()},delegate:void 0};var Jo=(function(e){gt(t,e);function t(n,r,o){n===void 0&&(n=1/0),r===void 0&&(r=1/0),o===void 0&&(o=Zl);var i=e.call(this)||this;return i._bufferSize=n,i._windowTime=r,i._timestampProvider=o,i._buffer=[],i._infiniteTimeWindow=!0,i._infiniteTimeWindow=r===1/0,i._bufferSize=Math.max(1,n),i._windowTime=Math.max(1,r),i}return t.prototype.next=function(n){var r=this,o=r.isStopped,i=r._buffer,a=r._infiniteTimeWindow,s=r._timestampProvider,c=r._windowTime;o||(i.push(n),!a&&i.push(s.now()+c)),this._trimBuffer(),e.prototype.next.call(this,n)},t.prototype._subscribe=function(n){this._throwIfClosed(),this._trimBuffer();for(var r=this._innerSubscribe(n),o=this,i=o._infiniteTimeWindow,a=o._buffer,s=a.slice(),c=0;c<s.length&&!n.closed;c+=i?1:2)n.next(s[c]);return this._checkFinalizedStatuses(n),r},t.prototype._trimBuffer=function(){var n=this,r=n._bufferSize,o=n._timestampProvider,i=n._buffer,a=n._infiniteTimeWindow,s=(a?1:2)*r;if(r<1/0&&s<i.length&&i.splice(0,i.length-s),!a){for(var c=o.now(),l=0,u=1;u<i.length&&i[u]<=c;u+=2)l=u;l&&i.splice(0,l+1)}},t})(vt);var wr=new he(function(e){return e.complete()});function Lp(e){return e&&Y(e.schedule)}function rE(e){return e[e.length-1]}function Dp(e){return Lp(rE(e))?e.pop():void 0}var Qo=(function(e){return e&&typeof e.length=="number"&&typeof e!="function"});function ei(e){return Y(e?.then)}function ti(e){return Y(e[Dn])}function ni(e){return Symbol.asyncIterator&&Y(e?.[Symbol.asyncIterator])}function ri(e){return new TypeError("You provided "+(e!==null&&typeof e=="object"?"an invalid object":"'"+e+"'")+" where a stream was expected. You can provide an Observable, Promise, ReadableStream, Array, AsyncIterable, or Iterable.")}function oE(){return typeof Symbol!="function"||!Symbol.iterator?"@@iterator":Symbol.iterator}var oi=oE();function ii(e){return Y(e?.[oi])}function ai(e){return Ap(this,arguments,function(){var n,r,o,i;return Vo(this,function(a){switch(a.label){case 0:n=e.getReader(),a.label=1;case 1:a.trys.push([1,,9,10]),a.label=2;case 2:return[4,jt(n.read())];case 3:return r=a.sent(),o=r.value,i=r.done,i?[4,jt(void 0)]:[3,5];case 4:return[2,a.sent()];case 5:return[4,jt(o)];case 6:return[4,a.sent()];case 7:return a.sent(),[3,2];case 8:return[3,10];case 9:return n.releaseLock(),[7];case 10:return[2]}})})}function si(e){return Y(e?.getReader)}function Ce(e){if(e instanceof he)return e;if(e!=null){if(ti(e))return iE(e);if(Qo(e))return aE(e);if(ei(e))return sE(e);if(ni(e))return $p(e);if(ii(e))return lE(e);if(si(e))return cE(e)}throw ri(e)}function iE(e){return new he(function(t){var n=e[Dn]();if(Y(n.subscribe))return n.subscribe(t);throw new TypeError("Provided object does not correctly implement Symbol.observable")})}function aE(e){return new he(function(t){for(var n=0;n<e.length&&!t.closed;n++)t.next(e[n]);t.complete()})}function sE(e){return new he(function(t){e.then(function(n){t.closed||(t.next(n),t.complete())},function(n){return t.error(n)}).then(null,qo)})}function lE(e){return new he(function(t){var n,r;try{for(var o=xt(e),i=o.next();!i.done;i=o.next()){var a=i.value;if(t.next(a),t.closed)return}}catch(s){n={error:s}}finally{try{i&&!i.done&&(r=o.return)&&r.call(o)}finally{if(n)throw n.error}}t.complete()})}function $p(e){return new he(function(t){uE(e,t).catch(function(n){return t.error(n)})})}function cE(e){return $p(ai(e))}function uE(e,t){var n,r,o,i;return Tp(this,void 0,void 0,function(){var a,s;return Vo(this,function(c){switch(c.label){case 0:c.trys.push([0,5,6,11]),n=kp(e),c.label=1;case 1:return[4,n.next()];case 2:if(r=c.sent(),!!r.done)return[3,4];if(a=r.value,t.next(a),t.closed)return[2];c.label=3;case 3:return[3,1];case 4:return[3,11];case 5:return s=c.sent(),o={error:s},[3,11];case 6:return c.trys.push([6,,9,10]),r&&!r.done&&(i=n.return)?[4,i.call(n)]:[3,8];case 7:c.sent(),c.label=8;case 8:return[3,10];case 9:if(o)throw o.error;return[7];case 10:return[7];case 11:return t.complete(),[2]}})})}function tt(e,t,n,r,o){r===void 0&&(r=0),o===void 0&&(o=!1);var i=t.schedule(function(){n(),o?e.add(this.schedule(null,r)):this.unsubscribe()},r);if(e.add(i),!o)return i}function li(e,t){return t===void 0&&(t=0),Se(function(n,r){n.subscribe(Te(r,function(o){return tt(r,e,function(){return r.next(o)},t)},function(){return tt(r,e,function(){return r.complete()},t)},function(o){return tt(r,e,function(){return r.error(o)},t)}))})}function ci(e,t){return t===void 0&&(t=0),Se(function(n,r){r.add(e.schedule(function(){return n.subscribe(r)},t))})}function Up(e,t){return Ce(e).pipe(ci(t),li(t))}function Hp(e,t){return Ce(e).pipe(ci(t),li(t))}function Fp(e,t){return new he(function(n){var r=0;return t.schedule(function(){r===e.length?n.complete():(n.next(e[r++]),n.closed||this.schedule())})})}function Gp(e,t){return new he(function(n){var r;return tt(n,t,function(){r=e[oi](),tt(n,t,function(){var o,i,a;try{o=r.next(),i=o.value,a=o.done}catch(s){n.error(s);return}a?n.complete():n.next(i)},0,!0)}),function(){return Y(r?.return)&&r.return()}})}function ui(e,t){if(!e)throw new Error("Iterable cannot be null");return new he(function(n){tt(n,t,function(){var r=e[Symbol.asyncIterator]();tt(n,t,function(){r.next().then(function(o){o.done?n.complete():n.next(o.value)})},0,!0)})})}function Zp(e,t){return ui(ai(e),t)}function Bp(e,t){if(e!=null){if(ti(e))return Up(e,t);if(Qo(e))return Fp(e,t);if(ei(e))return Hp(e,t);if(ni(e))return ui(e,t);if(ii(e))return Gp(e,t);if(si(e))return Zp(e,t)}throw ri(e)}function qt(e,t){return t?Bp(e,t):Ce(e)}function ae(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];var n=Dp(e);return qt(e,n)}function F(e,t){var n=Y(e)?e:function(){return e},r=function(o){return o.error(n())};return new he(t?function(o){return t.schedule(r,0,o)}:r)}var Vp=Pn(function(e){return function(){e(this),this.name="EmptyError",this.message="no elements in sequence"}});function di(e,t){var n=typeof t=="object";return new Promise(function(r,o){var i=!1,a;e.subscribe({next:function(s){a=s,i=!0},error:o,complete:function(){i?r(a):n?r(t.defaultValue):o(new Vp)}})})}function bt(e,t){return Se(function(n,r){var o=0;n.subscribe(Te(r,function(i){r.next(e.call(t,i,o++))}))})}function jp(e,t,n,r,o,i,a,s){var c=[],l=0,u=0,m=!1,f=function(){m&&!c.length&&!l&&t.complete()},h=function(E){return l<r?p(E):c.push(E)},p=function(E){i&&t.next(E),l++;var b=!1;Ce(n(E,u++)).subscribe(Te(t,function(S){o?.(S),i?h(S):t.next(S)},function(){b=!0},void 0,function(){if(b)try{l--;for(var S=function(){var y=c.shift();a?tt(t,a,function(){return p(y)}):p(y)};c.length&&l<r;)S();f()}catch(y){t.error(y)}}))};return e.subscribe(Te(t,h,function(){m=!0,f()})),function(){s?.()}}function Ze(e,t,n){return n===void 0&&(n=1/0),Y(t)?Ze(function(r,o){return bt(function(i,a){return t(r,i,o,a)})(Ce(e(r,o)))},n):(typeof t=="number"&&(n=t),Se(function(r,o){return jp(r,o,e,n)}))}function Bl(e){return e===void 0&&(e=1/0),Ze($n,e)}function Er(e){return new he(function(t){Ce(e()).subscribe(t)})}function Vl(e,t){return Se(function(n,r){var o=0;n.subscribe(Te(r,function(i){return e.call(t,i,o++)&&r.next(i)}))})}function xr(e){return Se(function(t,n){var r=null,o=!1,i;r=t.subscribe(Te(n,void 0,void 0,function(a){i=Ce(e(a,xr(e)(t))),r?(r.unsubscribe(),r=null,i.subscribe(n)):o=!0})),o&&(r.unsubscribe(),r=null,i.subscribe(n))})}function pi(e,t){return Y(t)?Ze(e,t,1):Ze(e,1)}function jl(e){return Se(function(t,n){var r=!1;t.subscribe(Te(n,function(o){r=!0,n.next(o)},function(){r||n.next(e),n.complete()}))})}function Yt(e){return Se(function(t,n){try{t.subscribe(n)}finally{n.add(e)}})}function Wl(e,t){return Se(function(n,r){var o=null,i=0,a=!1,s=function(){return a&&!o&&r.complete()};n.subscribe(Te(r,function(c){o?.unsubscribe();var l=0,u=i++;Ce(e(c,u)).subscribe(o=Te(r,function(m){return r.next(t?t(c,m,u,l++):m)},function(){o=null,s()}))},function(){a=!0,s()}))})}function hi(e){return Se(function(t,n){Ce(e).subscribe(Te(n,function(){return n.complete()},br)),!n.closed&&t.subscribe(n)})}function fi(e,t,n){var r=Y(e)||t||n?{next:e,error:t,complete:n}:e;return r?Se(function(o,i){var a;(a=r.subscribe)===null||a===void 0||a.call(r);var s=!0;o.subscribe(Te(i,function(c){var l;(l=r.next)===null||l===void 0||l.call(r,c),i.next(c)},function(){var c;s=!1,(c=r.complete)===null||c===void 0||c.call(r),i.complete()},function(c){var l;s=!1,(l=r.error)===null||l===void 0||l.call(r,c),i.error(c)},function(){var c,l;s&&((c=r.unsubscribe)===null||c===void 0||c.call(r)),(l=r.finalize)===null||l===void 0||l.call(r)}))}):$n}function Wp(e){return` \r
	`.indexOf(e)>=0}function mi(e){for(var t=["topLevel"],n=0,r,o,i,a=function(y){return t.push(y)},s=function(y){return t[t.length-1]=y},c=function(y){r==null&&(r=n,o=t.length,i=y)},l=function(y){y===i&&(r=void 0,o=void 0,i=void 0)},u=function(){return t.pop()},m=function(){return n--},f=function(y){if("0"<=y&&y<="9"){a("number");return}switch(y){case'"':a("string");return;case"-":a("numberNeedsDigit");return;case"t":a("true");return;case"f":a("false");return;case"n":a("null");return;case"[":a("arrayNeedsValue");return;case"{":a("objectNeedsKey");return}},h=e.length;n<h;n++){var p=e[n];switch(t[t.length-1]){case"topLevel":f(p);break;case"string":switch(p){case'"':u();break;case"\\":c("stringEscape"),a("stringEscaped");break}break;case"stringEscaped":p==="u"?a("stringUnicode"):(l("stringEscape"),u());break;case"stringUnicode":n-e.lastIndexOf("u",n)===4&&(l("stringEscape"),u());break;case"number":p==="."?s("numberNeedsDigit"):p==="e"||p==="E"?s("numberNeedsExponent"):(p<"0"||p>"9")&&(m(),u());break;case"numberNeedsDigit":s("number");break;case"numberNeedsExponent":s(p==="+"||p==="-"?"numberNeedsDigit":"number");break;case"true":case"false":case"null":(p<"a"||p>"z")&&(m(),u());break;case"arrayNeedsValue":p==="]"?u():Wp(p)||(l("collectionItem"),s("arrayNeedsComma"),f(p));break;case"arrayNeedsComma":p==="]"?u():p===","&&(c("collectionItem"),s("arrayNeedsValue"));break;case"objectNeedsKey":p==="}"?u():p==='"'&&(c("collectionItem"),s("objectNeedsColon"),a("string"));break;case"objectNeedsColon":p===":"&&s("objectNeedsValue");break;case"objectNeedsValue":Wp(p)||(l("collectionItem"),s("objectNeedsComma"),f(p));break;case"objectNeedsComma":p==="}"?u():p===","&&(c("collectionItem"),s("objectNeedsKey"));break}}o!=null&&(t.length=o);for(var E=[r!=null?e.slice(0,r):e],b=function(y){return E.push(y.slice(e.length-e.lastIndexOf(y[0])))},S=t.length-1;S>=0;S--)switch(t[S]){case"string":E.push('"');break;case"numberNeedsDigit":case"numberNeedsExponent":E.push("0");break;case"true":b("true");break;case"false":b("false");break;case"null":b("null");break;case"arrayNeedsValue":case"arrayNeedsComma":E.push("]");break;case"objectNeedsKey":case"objectNeedsColon":case"objectNeedsValue":case"objectNeedsComma":E.push("}");break}return E.join("")}var dE=Object.freeze({status:"aborted"});function k(e,t,n){function r(s,c){var l;Object.defineProperty(s,"_zod",{value:s._zod??{},enumerable:!1}),(l=s._zod).traits??(l.traits=new Set),s._zod.traits.add(e),t(s,c);for(let u in a.prototype)u in s||Object.defineProperty(s,u,{value:a.prototype[u].bind(s)});s._zod.constr=a,s._zod.def=c}let o=n?.Parent??Object;class i extends o{}Object.defineProperty(i,"name",{value:e});function a(s){var c;let l=n?.Parent?new i:this;r(l,s),(c=l._zod).deferred??(c.deferred=[]);for(let u of l._zod.deferred)u();return l}return Object.defineProperty(a,"init",{value:r}),Object.defineProperty(a,Symbol.hasInstance,{value:s=>n?.Parent&&s instanceof n.Parent?!0:s?._zod?.traits?.has(e)}),Object.defineProperty(a,"name",{value:e}),a}var St=class extends Error{constructor(){super("Encountered Promise during synchronous parse. Use .parseAsync() instead.")}},gi={};function ze(e){return e&&Object.assign(gi,e),gi}var ie={};Js(ie,{BIGINT_FORMAT_RANGES:()=>Yp,Class:()=>Yl,NUMBER_FORMAT_RANGES:()=>rc,aborted:()=>Kt,allowsEval:()=>ec,assert:()=>gE,assertEqual:()=>pE,assertIs:()=>fE,assertNever:()=>mE,assertNotEqual:()=>hE,assignProp:()=>Ql,cached:()=>_r,captureStackTrace:()=>bi,cleanEnum:()=>RE,cleanRegex:()=>Ar,clone:()=>at,createTransparentProxy:()=>xE,defineLazy:()=>oe,esc:()=>Xt,escapeRegex:()=>Rt,extend:()=>TE,finalizeIssue:()=>st,floatSafeRemainder:()=>Jl,getElementAtPath:()=>vE,getEnumValues:()=>Xl,getLengthableOrigin:()=>kr,getParsedType:()=>EE,getSizableOrigin:()=>Xp,isObject:()=>Un,isPlainObject:()=>Hn,issue:()=>oc,joinValues:()=>vi,jsonStringifyReplacer:()=>Kl,merge:()=>AE,normalizeParams:()=>G,nullish:()=>Tr,numKeys:()=>wE,omit:()=>_E,optionalKeys:()=>nc,partial:()=>kE,pick:()=>SE,prefixIssues:()=>yt,primitiveTypes:()=>qp,promiseAllObject:()=>bE,propertyKeyTypes:()=>tc,randomString:()=>yE,required:()=>IE,stringifyPrimitive:()=>yi,unwrapMessage:()=>Sr});function pE(e){return e}function hE(e){return e}function fE(e){}function mE(e){throw new Error}function gE(e){}function Xl(e){let t=Object.values(e).filter(r=>typeof r=="number");return Object.entries(e).filter(([r,o])=>t.indexOf(+r)===-1).map(([r,o])=>o)}function vi(e,t="|"){return e.map(n=>yi(n)).join(t)}function Kl(e,t){return typeof t=="bigint"?t.toString():t}function _r(e){return{get value(){{let n=e();return Object.defineProperty(this,"value",{value:n}),n}throw new Error("cached value already set")}}}function Tr(e){return e==null}function Ar(e){let t=e.startsWith("^")?1:0,n=e.endsWith("$")?e.length-1:e.length;return e.slice(t,n)}function Jl(e,t){let n=(e.toString().split(".")[1]||"").length,r=(t.toString().split(".")[1]||"").length,o=n>r?n:r,i=Number.parseInt(e.toFixed(o).replace(".","")),a=Number.parseInt(t.toFixed(o).replace(".",""));return i%a/10**o}function oe(e,t,n){Object.defineProperty(e,t,{get(){{let o=n();return e[t]=o,o}throw new Error("cached value already set")},set(o){Object.defineProperty(e,t,{value:o})},configurable:!0})}function Ql(e,t,n){Object.defineProperty(e,t,{value:n,writable:!0,enumerable:!0,configurable:!0})}function vE(e,t){return t?t.reduce((n,r)=>n?.[r],e):e}function bE(e){let t=Object.keys(e),n=t.map(r=>e[r]);return Promise.all(n).then(r=>{let o={};for(let i=0;i<t.length;i++)o[t[i]]=r[i];return o})}function yE(e=10){let t="abcdefghijklmnopqrstuvwxyz",n="";for(let r=0;r<e;r++)n+=t[Math.floor(Math.random()*t.length)];return n}function Xt(e){return JSON.stringify(e)}var bi=Error.captureStackTrace?Error.captureStackTrace:(...e)=>{};function Un(e){return typeof e=="object"&&e!==null&&!Array.isArray(e)}var ec=_r(()=>{if(typeof navigator<"u"&&navigator?.userAgent?.includes("Cloudflare"))return!1;try{let e=Function;return new e(""),!0}catch{return!1}});function Hn(e){if(Un(e)===!1)return!1;let t=e.constructor;if(t===void 0)return!0;let n=t.prototype;return!(Un(n)===!1||Object.prototype.hasOwnProperty.call(n,"isPrototypeOf")===!1)}function wE(e){let t=0;for(let n in e)Object.prototype.hasOwnProperty.call(e,n)&&t++;return t}var EE=e=>{let t=typeof e;switch(t){case"undefined":return"undefined";case"string":return"string";case"number":return Number.isNaN(e)?"nan":"number";case"boolean":return"boolean";case"function":return"function";case"bigint":return"bigint";case"symbol":return"symbol";case"object":return Array.isArray(e)?"array":e===null?"null":e.then&&typeof e.then=="function"&&e.catch&&typeof e.catch=="function"?"promise":typeof Map<"u"&&e instanceof Map?"map":typeof Set<"u"&&e instanceof Set?"set":typeof Date<"u"&&e instanceof Date?"date":typeof File<"u"&&e instanceof File?"file":"object";default:throw new Error(`Unknown data type: ${t}`)}},tc=new Set(["string","number","symbol"]),qp=new Set(["string","number","bigint","boolean","symbol","undefined"]);function Rt(e){return e.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")}function at(e,t,n){let r=new e._zod.constr(t??e._zod.def);return(!t||n?.parent)&&(r._zod.parent=e),r}function G(e){let t=e;if(!t)return{};if(typeof t=="string")return{error:()=>t};if(t?.message!==void 0){if(t?.error!==void 0)throw new Error("Cannot specify both `message` and `error` params");t.error=t.message}return delete t.message,typeof t.error=="string"?{...t,error:()=>t.error}:t}function xE(e){let t;return new Proxy({},{get(n,r,o){return t??(t=e()),Reflect.get(t,r,o)},set(n,r,o,i){return t??(t=e()),Reflect.set(t,r,o,i)},has(n,r){return t??(t=e()),Reflect.has(t,r)},deleteProperty(n,r){return t??(t=e()),Reflect.deleteProperty(t,r)},ownKeys(n){return t??(t=e()),Reflect.ownKeys(t)},getOwnPropertyDescriptor(n,r){return t??(t=e()),Reflect.getOwnPropertyDescriptor(t,r)},defineProperty(n,r,o){return t??(t=e()),Reflect.defineProperty(t,r,o)}})}function yi(e){return typeof e=="bigint"?e.toString()+"n":typeof e=="string"?`"${e}"`:`${e}`}function nc(e){return Object.keys(e).filter(t=>e[t]._zod.optin==="optional"&&e[t]._zod.optout==="optional")}var rc={safeint:[Number.MIN_SAFE_INTEGER,Number.MAX_SAFE_INTEGER],int32:[-2147483648,2147483647],uint32:[0,4294967295],float32:[-34028234663852886e22,34028234663852886e22],float64:[-Number.MAX_VALUE,Number.MAX_VALUE]},Yp={int64:[BigInt("-9223372036854775808"),BigInt("9223372036854775807")],uint64:[BigInt(0),BigInt("18446744073709551615")]};function SE(e,t){let n={},r=e._zod.def;for(let o in t){if(!(o in r.shape))throw new Error(`Unrecognized key: "${o}"`);t[o]&&(n[o]=r.shape[o])}return at(e,{...e._zod.def,shape:n,checks:[]})}function _E(e,t){let n={...e._zod.def.shape},r=e._zod.def;for(let o in t){if(!(o in r.shape))throw new Error(`Unrecognized key: "${o}"`);t[o]&&delete n[o]}return at(e,{...e._zod.def,shape:n,checks:[]})}function TE(e,t){if(!Hn(t))throw new Error("Invalid input to extend: expected a plain object");let n={...e._zod.def,get shape(){let r={...e._zod.def.shape,...t};return Ql(this,"shape",r),r},checks:[]};return at(e,n)}function AE(e,t){return at(e,{...e._zod.def,get shape(){let n={...e._zod.def.shape,...t._zod.def.shape};return Ql(this,"shape",n),n},catchall:t._zod.def.catchall,checks:[]})}function kE(e,t,n){let r=t._zod.def.shape,o={...r};if(n)for(let i in n){if(!(i in r))throw new Error(`Unrecognized key: "${i}"`);n[i]&&(o[i]=e?new e({type:"optional",innerType:r[i]}):r[i])}else for(let i in r)o[i]=e?new e({type:"optional",innerType:r[i]}):r[i];return at(t,{...t._zod.def,shape:o,checks:[]})}function IE(e,t,n){let r=t._zod.def.shape,o={...r};if(n)for(let i in n){if(!(i in o))throw new Error(`Unrecognized key: "${i}"`);n[i]&&(o[i]=new e({type:"nonoptional",innerType:r[i]}))}else for(let i in r)o[i]=new e({type:"nonoptional",innerType:r[i]});return at(t,{...t._zod.def,shape:o,checks:[]})}function Kt(e,t=0){for(let n=t;n<e.issues.length;n++)if(e.issues[n]?.continue!==!0)return!0;return!1}function yt(e,t){return t.map(n=>{var r;return(r=n).path??(r.path=[]),n.path.unshift(e),n})}function Sr(e){return typeof e=="string"?e:e?.message}function st(e,t,n){let r={...e,path:e.path??[]};if(!e.message){let o=Sr(e.inst?._zod.def?.error?.(e))??Sr(t?.error?.(e))??Sr(n.customError?.(e))??Sr(n.localeError?.(e))??"Invalid input";r.message=o}return delete r.inst,delete r.continue,t?.reportInput||delete r.input,r}function Xp(e){return e instanceof Set?"set":e instanceof Map?"map":e instanceof File?"file":"unknown"}function kr(e){return Array.isArray(e)?"array":typeof e=="string"?"string":"unknown"}function oc(...e){let[t,n,r]=e;return typeof t=="string"?{message:t,code:"custom",input:n,inst:r}:{...t}}function RE(e){return Object.entries(e).filter(([t,n])=>Number.isNaN(Number.parseInt(t,10))).map(t=>t[1])}var Yl=class{constructor(...t){}};var Kp=(e,t)=>{e.name="$ZodError",Object.defineProperty(e,"_zod",{value:e._zod,enumerable:!1}),Object.defineProperty(e,"issues",{value:t,enumerable:!1}),Object.defineProperty(e,"message",{get(){return JSON.stringify(t,Kl,2)},enumerable:!0}),Object.defineProperty(e,"toString",{value:()=>e.message,enumerable:!1})},wi=k("$ZodError",Kp),ic=k("$ZodError",Kp,{Parent:Error});function ac(e,t=n=>n.message){let n={},r=[];for(let o of e.issues)o.path.length>0?(n[o.path[0]]=n[o.path[0]]||[],n[o.path[0]].push(t(o))):r.push(t(o));return{formErrors:r,fieldErrors:n}}function sc(e,t){let n=t||function(i){return i.message},r={_errors:[]},o=i=>{for(let a of i.issues)if(a.code==="invalid_union"&&a.errors.length)a.errors.map(s=>o({issues:s}));else if(a.code==="invalid_key")o({issues:a.issues});else if(a.code==="invalid_element")o({issues:a.issues});else if(a.path.length===0)r._errors.push(n(a));else{let s=r,c=0;for(;c<a.path.length;){let l=a.path[c];c===a.path.length-1?(s[l]=s[l]||{_errors:[]},s[l]._errors.push(n(a))):s[l]=s[l]||{_errors:[]},s=s[l],c++}}};return o(e),r}var Jp=e=>(t,n,r,o)=>{let i=r?Object.assign(r,{async:!1}):{async:!1},a=t._zod.run({value:n,issues:[]},i);if(a instanceof Promise)throw new St;if(a.issues.length){let s=new(o?.Err??e)(a.issues.map(c=>st(c,i,ze())));throw bi(s,o?.callee),s}return a.value};var Qp=e=>async(t,n,r,o)=>{let i=r?Object.assign(r,{async:!0}):{async:!0},a=t._zod.run({value:n,issues:[]},i);if(a instanceof Promise&&(a=await a),a.issues.length){let s=new(o?.Err??e)(a.issues.map(c=>st(c,i,ze())));throw bi(s,o?.callee),s}return a.value};var lc=e=>(t,n,r)=>{let o=r?{...r,async:!1}:{async:!1},i=t._zod.run({value:n,issues:[]},o);if(i instanceof Promise)throw new St;return i.issues.length?{success:!1,error:new(e??wi)(i.issues.map(a=>st(a,o,ze())))}:{success:!0,data:i.value}},eh=lc(ic),cc=e=>async(t,n,r)=>{let o=r?Object.assign(r,{async:!0}):{async:!0},i=t._zod.run({value:n,issues:[]},o);return i instanceof Promise&&(i=await i),i.issues.length?{success:!1,error:new e(i.issues.map(a=>st(a,o,ze())))}:{success:!0,data:i.value}},th=cc(ic);var nh=/^[cC][^\s-]{8,}$/,rh=/^[0-9a-z]+$/,oh=/^[0-9A-HJKMNP-TV-Za-hjkmnp-tv-z]{26}$/,ih=/^[0-9a-vA-V]{20}$/,ah=/^[A-Za-z0-9]{27}$/,sh=/^[a-zA-Z0-9_-]{21}$/,lh=/^P(?:(\d+W)|(?!.*W)(?=\d|T\d)(\d+Y)?(\d+M)?(\d+D)?(T(?=\d)(\d+H)?(\d+M)?(\d+([.,]\d+)?S)?)?)$/;var ch=/^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12})$/,uc=e=>e?new RegExp(`^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-${e}[0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12})$`):/^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[1-8][0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12}|00000000-0000-0000-0000-000000000000)$/;var uh=/^(?!\.)(?!.*\.\.)([A-Za-z0-9_'+\-\.]*)[A-Za-z0-9_+-]@([A-Za-z0-9][A-Za-z0-9\-]*\.)+[A-Za-z]{2,}$/;var NE="^(\\p{Extended_Pictographic}|\\p{Emoji_Component})+$";function dh(){return new RegExp(NE,"u")}var ph=/^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])$/,hh=/^(([0-9a-fA-F]{1,4}:){7}[0-9a-fA-F]{1,4}|::|([0-9a-fA-F]{1,4})?::([0-9a-fA-F]{1,4}:?){0,6})$/,fh=/^((25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\/([0-9]|[1-2][0-9]|3[0-2])$/,mh=/^(([0-9a-fA-F]{1,4}:){7}[0-9a-fA-F]{1,4}|::|([0-9a-fA-F]{1,4})?::([0-9a-fA-F]{1,4}:?){0,6})\/(12[0-8]|1[01][0-9]|[1-9]?[0-9])$/,gh=/^$|^(?:[0-9a-zA-Z+/]{4})*(?:(?:[0-9a-zA-Z+/]{2}==)|(?:[0-9a-zA-Z+/]{3}=))?$/,dc=/^[A-Za-z0-9_-]*$/,vh=/^([a-zA-Z0-9-]+\.)*[a-zA-Z0-9-]+$/;var bh=/^\+(?:[0-9]){6,14}[0-9]$/,yh="(?:(?:\\d\\d[2468][048]|\\d\\d[13579][26]|\\d\\d0[48]|[02468][048]00|[13579][26]00)-02-29|\\d{4}-(?:(?:0[13578]|1[02])-(?:0[1-9]|[12]\\d|3[01])|(?:0[469]|11)-(?:0[1-9]|[12]\\d|30)|(?:02)-(?:0[1-9]|1\\d|2[0-8])))",wh=new RegExp(`^${yh}$`);function Eh(e){let t="(?:[01]\\d|2[0-3]):[0-5]\\d";return typeof e.precision=="number"?e.precision===-1?`${t}`:e.precision===0?`${t}:[0-5]\\d`:`${t}:[0-5]\\d\\.\\d{${e.precision}}`:`${t}(?::[0-5]\\d(?:\\.\\d+)?)?`}function xh(e){return new RegExp(`^${Eh(e)}$`)}function Sh(e){let t=Eh({precision:e.precision}),n=["Z"];e.local&&n.push(""),e.offset&&n.push("([+-]\\d{2}:\\d{2})");let r=`${t}(?:${n.join("|")})`;return new RegExp(`^${yh}T(?:${r})$`)}var _h=e=>{let t=e?`[\\s\\S]{${e?.minimum??0},${e?.maximum??""}}`:"[\\s\\S]*";return new RegExp(`^${t}$`)};var Th=/^\d+$/,Ah=/^-?\d+(?:\.\d+)?/i,kh=/true|false/i;var Ih=/^[^A-Z]*$/,Rh=/^[^a-z]*$/;var De=k("$ZodCheck",(e,t)=>{var n;e._zod??(e._zod={}),e._zod.def=t,(n=e._zod).onattach??(n.onattach=[])}),Ch={number:"number",bigint:"bigint",object:"date"},pc=k("$ZodCheckLessThan",(e,t)=>{De.init(e,t);let n=Ch[typeof t.value];e._zod.onattach.push(r=>{let o=r._zod.bag,i=(t.inclusive?o.maximum:o.exclusiveMaximum)??Number.POSITIVE_INFINITY;t.value<i&&(t.inclusive?o.maximum=t.value:o.exclusiveMaximum=t.value)}),e._zod.check=r=>{(t.inclusive?r.value<=t.value:r.value<t.value)||r.issues.push({origin:n,code:"too_big",maximum:t.value,input:r.value,inclusive:t.inclusive,inst:e,continue:!t.abort})}}),hc=k("$ZodCheckGreaterThan",(e,t)=>{De.init(e,t);let n=Ch[typeof t.value];e._zod.onattach.push(r=>{let o=r._zod.bag,i=(t.inclusive?o.minimum:o.exclusiveMinimum)??Number.NEGATIVE_INFINITY;t.value>i&&(t.inclusive?o.minimum=t.value:o.exclusiveMinimum=t.value)}),e._zod.check=r=>{(t.inclusive?r.value>=t.value:r.value>t.value)||r.issues.push({origin:n,code:"too_small",minimum:t.value,input:r.value,inclusive:t.inclusive,inst:e,continue:!t.abort})}}),Nh=k("$ZodCheckMultipleOf",(e,t)=>{De.init(e,t),e._zod.onattach.push(n=>{var r;(r=n._zod.bag).multipleOf??(r.multipleOf=t.value)}),e._zod.check=n=>{if(typeof n.value!=typeof t.value)throw new Error("Cannot mix number and bigint in multiple_of check.");(typeof n.value=="bigint"?n.value%t.value===BigInt(0):Jl(n.value,t.value)===0)||n.issues.push({origin:typeof n.value,code:"not_multiple_of",divisor:t.value,input:n.value,inst:e,continue:!t.abort})}}),Oh=k("$ZodCheckNumberFormat",(e,t)=>{De.init(e,t),t.format=t.format||"float64";let n=t.format?.includes("int"),r=n?"int":"number",[o,i]=rc[t.format];e._zod.onattach.push(a=>{let s=a._zod.bag;s.format=t.format,s.minimum=o,s.maximum=i,n&&(s.pattern=Th)}),e._zod.check=a=>{let s=a.value;if(n){if(!Number.isInteger(s)){a.issues.push({expected:r,format:t.format,code:"invalid_type",input:s,inst:e});return}if(!Number.isSafeInteger(s)){s>0?a.issues.push({input:s,code:"too_big",maximum:Number.MAX_SAFE_INTEGER,note:"Integers must be within the safe integer range.",inst:e,origin:r,continue:!t.abort}):a.issues.push({input:s,code:"too_small",minimum:Number.MIN_SAFE_INTEGER,note:"Integers must be within the safe integer range.",inst:e,origin:r,continue:!t.abort});return}}s<o&&a.issues.push({origin:"number",input:s,code:"too_small",minimum:o,inclusive:!0,inst:e,continue:!t.abort}),s>i&&a.issues.push({origin:"number",input:s,code:"too_big",maximum:i,inst:e})}});var Ph=k("$ZodCheckMaxLength",(e,t)=>{var n;De.init(e,t),(n=e._zod.def).when??(n.when=r=>{let o=r.value;return!Tr(o)&&o.length!==void 0}),e._zod.onattach.push(r=>{let o=r._zod.bag.maximum??Number.POSITIVE_INFINITY;t.maximum<o&&(r._zod.bag.maximum=t.maximum)}),e._zod.check=r=>{let o=r.value;if(o.length<=t.maximum)return;let a=kr(o);r.issues.push({origin:a,code:"too_big",maximum:t.maximum,inclusive:!0,input:o,inst:e,continue:!t.abort})}}),Mh=k("$ZodCheckMinLength",(e,t)=>{var n;De.init(e,t),(n=e._zod.def).when??(n.when=r=>{let o=r.value;return!Tr(o)&&o.length!==void 0}),e._zod.onattach.push(r=>{let o=r._zod.bag.minimum??Number.NEGATIVE_INFINITY;t.minimum>o&&(r._zod.bag.minimum=t.minimum)}),e._zod.check=r=>{let o=r.value;if(o.length>=t.minimum)return;let a=kr(o);r.issues.push({origin:a,code:"too_small",minimum:t.minimum,inclusive:!0,input:o,inst:e,continue:!t.abort})}}),zh=k("$ZodCheckLengthEquals",(e,t)=>{var n;De.init(e,t),(n=e._zod.def).when??(n.when=r=>{let o=r.value;return!Tr(o)&&o.length!==void 0}),e._zod.onattach.push(r=>{let o=r._zod.bag;o.minimum=t.length,o.maximum=t.length,o.length=t.length}),e._zod.check=r=>{let o=r.value,i=o.length;if(i===t.length)return;let a=kr(o),s=i>t.length;r.issues.push({origin:a,...s?{code:"too_big",maximum:t.length}:{code:"too_small",minimum:t.length},inclusive:!0,exact:!0,input:r.value,inst:e,continue:!t.abort})}}),Ir=k("$ZodCheckStringFormat",(e,t)=>{var n,r;De.init(e,t),e._zod.onattach.push(o=>{let i=o._zod.bag;i.format=t.format,t.pattern&&(i.patterns??(i.patterns=new Set),i.patterns.add(t.pattern))}),t.pattern?(n=e._zod).check??(n.check=o=>{t.pattern.lastIndex=0,!t.pattern.test(o.value)&&o.issues.push({origin:"string",code:"invalid_format",format:t.format,input:o.value,...t.pattern?{pattern:t.pattern.toString()}:{},inst:e,continue:!t.abort})}):(r=e._zod).check??(r.check=()=>{})}),Lh=k("$ZodCheckRegex",(e,t)=>{Ir.init(e,t),e._zod.check=n=>{t.pattern.lastIndex=0,!t.pattern.test(n.value)&&n.issues.push({origin:"string",code:"invalid_format",format:"regex",input:n.value,pattern:t.pattern.toString(),inst:e,continue:!t.abort})}}),Dh=k("$ZodCheckLowerCase",(e,t)=>{t.pattern??(t.pattern=Ih),Ir.init(e,t)}),$h=k("$ZodCheckUpperCase",(e,t)=>{t.pattern??(t.pattern=Rh),Ir.init(e,t)}),Uh=k("$ZodCheckIncludes",(e,t)=>{De.init(e,t);let n=Rt(t.includes),r=new RegExp(typeof t.position=="number"?`^.{${t.position}}${n}`:n);t.pattern=r,e._zod.onattach.push(o=>{let i=o._zod.bag;i.patterns??(i.patterns=new Set),i.patterns.add(r)}),e._zod.check=o=>{o.value.includes(t.includes,t.position)||o.issues.push({origin:"string",code:"invalid_format",format:"includes",includes:t.includes,input:o.value,inst:e,continue:!t.abort})}}),Hh=k("$ZodCheckStartsWith",(e,t)=>{De.init(e,t);let n=new RegExp(`^${Rt(t.prefix)}.*`);t.pattern??(t.pattern=n),e._zod.onattach.push(r=>{let o=r._zod.bag;o.patterns??(o.patterns=new Set),o.patterns.add(n)}),e._zod.check=r=>{r.value.startsWith(t.prefix)||r.issues.push({origin:"string",code:"invalid_format",format:"starts_with",prefix:t.prefix,input:r.value,inst:e,continue:!t.abort})}}),Fh=k("$ZodCheckEndsWith",(e,t)=>{De.init(e,t);let n=new RegExp(`.*${Rt(t.suffix)}$`);t.pattern??(t.pattern=n),e._zod.onattach.push(r=>{let o=r._zod.bag;o.patterns??(o.patterns=new Set),o.patterns.add(n)}),e._zod.check=r=>{r.value.endsWith(t.suffix)||r.issues.push({origin:"string",code:"invalid_format",format:"ends_with",suffix:t.suffix,input:r.value,inst:e,continue:!t.abort})}});var Gh=k("$ZodCheckOverwrite",(e,t)=>{De.init(e,t),e._zod.check=n=>{n.value=t.tx(n.value)}});var xi=class{constructor(t=[]){this.content=[],this.indent=0,this&&(this.args=t)}indented(t){this.indent+=1,t(this),this.indent-=1}write(t){if(typeof t=="function"){t(this,{execution:"sync"}),t(this,{execution:"async"});return}let r=t.split(`
`).filter(a=>a),o=Math.min(...r.map(a=>a.length-a.trimStart().length)),i=r.map(a=>a.slice(o)).map(a=>" ".repeat(this.indent*2)+a);for(let a of i)this.content.push(a)}compile(){let t=Function,n=this?.args,o=[...(this?.content??[""]).map(i=>`  ${i}`)];return new t(...n,o.join(`
`))}};var Bh={major:4,minor:0,patch:0};var le=k("$ZodType",(e,t)=>{var n;e??(e={}),e._zod.def=t,e._zod.bag=e._zod.bag||{},e._zod.version=Bh;let r=[...e._zod.def.checks??[]];e._zod.traits.has("$ZodCheck")&&r.unshift(e);for(let o of r)for(let i of o._zod.onattach)i(e);if(r.length===0)(n=e._zod).deferred??(n.deferred=[]),e._zod.deferred?.push(()=>{e._zod.run=e._zod.parse});else{let o=(i,a,s)=>{let c=Kt(i),l;for(let u of a){if(u._zod.def.when){if(!u._zod.def.when(i))continue}else if(c)continue;let m=i.issues.length,f=u._zod.check(i);if(f instanceof Promise&&s?.async===!1)throw new St;if(l||f instanceof Promise)l=(l??Promise.resolve()).then(async()=>{await f,i.issues.length!==m&&(c||(c=Kt(i,m)))});else{if(i.issues.length===m)continue;c||(c=Kt(i,m))}}return l?l.then(()=>i):i};e._zod.run=(i,a)=>{let s=e._zod.parse(i,a);if(s instanceof Promise){if(a.async===!1)throw new St;return s.then(c=>o(c,r,a))}return o(s,r,a)}}e["~standard"]={validate:o=>{try{let i=eh(e,o);return i.success?{value:i.data}:{issues:i.error?.issues}}catch{return th(e,o).then(a=>a.success?{value:a.data}:{issues:a.error?.issues})}},vendor:"zod",version:1}}),_i=k("$ZodString",(e,t)=>{le.init(e,t),e._zod.pattern=[...e?._zod.bag?.patterns??[]].pop()??_h(e._zod.bag),e._zod.parse=(n,r)=>{if(t.coerce)try{n.value=String(n.value)}catch{}return typeof n.value=="string"||n.issues.push({expected:"string",code:"invalid_type",input:n.value,inst:e}),n}}),fe=k("$ZodStringFormat",(e,t)=>{Ir.init(e,t),_i.init(e,t)}),ef=k("$ZodGUID",(e,t)=>{t.pattern??(t.pattern=ch),fe.init(e,t)}),tf=k("$ZodUUID",(e,t)=>{if(t.version){let r={v1:1,v2:2,v3:3,v4:4,v5:5,v6:6,v7:7,v8:8}[t.version];if(r===void 0)throw new Error(`Invalid UUID version: "${t.version}"`);t.pattern??(t.pattern=uc(r))}else t.pattern??(t.pattern=uc());fe.init(e,t)}),nf=k("$ZodEmail",(e,t)=>{t.pattern??(t.pattern=uh),fe.init(e,t)}),rf=k("$ZodURL",(e,t)=>{fe.init(e,t),e._zod.check=n=>{try{let r=n.value,o=new URL(r),i=o.href;t.hostname&&(t.hostname.lastIndex=0,t.hostname.test(o.hostname)||n.issues.push({code:"invalid_format",format:"url",note:"Invalid hostname",pattern:vh.source,input:n.value,inst:e,continue:!t.abort})),t.protocol&&(t.protocol.lastIndex=0,t.protocol.test(o.protocol.endsWith(":")?o.protocol.slice(0,-1):o.protocol)||n.issues.push({code:"invalid_format",format:"url",note:"Invalid protocol",pattern:t.protocol.source,input:n.value,inst:e,continue:!t.abort})),!r.endsWith("/")&&i.endsWith("/")?n.value=i.slice(0,-1):n.value=i;return}catch{n.issues.push({code:"invalid_format",format:"url",input:n.value,inst:e,continue:!t.abort})}}}),of=k("$ZodEmoji",(e,t)=>{t.pattern??(t.pattern=dh()),fe.init(e,t)}),af=k("$ZodNanoID",(e,t)=>{t.pattern??(t.pattern=sh),fe.init(e,t)}),sf=k("$ZodCUID",(e,t)=>{t.pattern??(t.pattern=nh),fe.init(e,t)}),lf=k("$ZodCUID2",(e,t)=>{t.pattern??(t.pattern=rh),fe.init(e,t)}),cf=k("$ZodULID",(e,t)=>{t.pattern??(t.pattern=oh),fe.init(e,t)}),uf=k("$ZodXID",(e,t)=>{t.pattern??(t.pattern=ih),fe.init(e,t)}),df=k("$ZodKSUID",(e,t)=>{t.pattern??(t.pattern=ah),fe.init(e,t)}),pf=k("$ZodISODateTime",(e,t)=>{t.pattern??(t.pattern=Sh(t)),fe.init(e,t)}),hf=k("$ZodISODate",(e,t)=>{t.pattern??(t.pattern=wh),fe.init(e,t)}),ff=k("$ZodISOTime",(e,t)=>{t.pattern??(t.pattern=xh(t)),fe.init(e,t)}),mf=k("$ZodISODuration",(e,t)=>{t.pattern??(t.pattern=lh),fe.init(e,t)}),gf=k("$ZodIPv4",(e,t)=>{t.pattern??(t.pattern=ph),fe.init(e,t),e._zod.onattach.push(n=>{let r=n._zod.bag;r.format="ipv4"})}),vf=k("$ZodIPv6",(e,t)=>{t.pattern??(t.pattern=hh),fe.init(e,t),e._zod.onattach.push(n=>{let r=n._zod.bag;r.format="ipv6"}),e._zod.check=n=>{try{new URL(`http://[${n.value}]`)}catch{n.issues.push({code:"invalid_format",format:"ipv6",input:n.value,inst:e,continue:!t.abort})}}}),bf=k("$ZodCIDRv4",(e,t)=>{t.pattern??(t.pattern=fh),fe.init(e,t)}),yf=k("$ZodCIDRv6",(e,t)=>{t.pattern??(t.pattern=mh),fe.init(e,t),e._zod.check=n=>{let[r,o]=n.value.split("/");try{if(!o)throw new Error;let i=Number(o);if(`${i}`!==o)throw new Error;if(i<0||i>128)throw new Error;new URL(`http://[${r}]`)}catch{n.issues.push({code:"invalid_format",format:"cidrv6",input:n.value,inst:e,continue:!t.abort})}}});function wf(e){if(e==="")return!0;if(e.length%4!==0)return!1;try{return atob(e),!0}catch{return!1}}var Ef=k("$ZodBase64",(e,t)=>{t.pattern??(t.pattern=gh),fe.init(e,t),e._zod.onattach.push(n=>{n._zod.bag.contentEncoding="base64"}),e._zod.check=n=>{wf(n.value)||n.issues.push({code:"invalid_format",format:"base64",input:n.value,inst:e,continue:!t.abort})}});function OE(e){if(!dc.test(e))return!1;let t=e.replace(/[-_]/g,r=>r==="-"?"+":"/"),n=t.padEnd(Math.ceil(t.length/4)*4,"=");return wf(n)}var xf=k("$ZodBase64URL",(e,t)=>{t.pattern??(t.pattern=dc),fe.init(e,t),e._zod.onattach.push(n=>{n._zod.bag.contentEncoding="base64url"}),e._zod.check=n=>{OE(n.value)||n.issues.push({code:"invalid_format",format:"base64url",input:n.value,inst:e,continue:!t.abort})}}),Sf=k("$ZodE164",(e,t)=>{t.pattern??(t.pattern=bh),fe.init(e,t)});function PE(e,t=null){try{let n=e.split(".");if(n.length!==3)return!1;let[r]=n;if(!r)return!1;let o=JSON.parse(atob(r));return!("typ"in o&&o?.typ!=="JWT"||!o.alg||t&&(!("alg"in o)||o.alg!==t))}catch{return!1}}var _f=k("$ZodJWT",(e,t)=>{fe.init(e,t),e._zod.check=n=>{PE(n.value,t.alg)||n.issues.push({code:"invalid_format",format:"jwt",input:n.value,inst:e,continue:!t.abort})}});var mc=k("$ZodNumber",(e,t)=>{le.init(e,t),e._zod.pattern=e._zod.bag.pattern??Ah,e._zod.parse=(n,r)=>{if(t.coerce)try{n.value=Number(n.value)}catch{}let o=n.value;if(typeof o=="number"&&!Number.isNaN(o)&&Number.isFinite(o))return n;let i=typeof o=="number"?Number.isNaN(o)?"NaN":Number.isFinite(o)?void 0:"Infinity":void 0;return n.issues.push({expected:"number",code:"invalid_type",input:o,inst:e,...i?{received:i}:{}}),n}}),Tf=k("$ZodNumber",(e,t)=>{Oh.init(e,t),mc.init(e,t)}),Af=k("$ZodBoolean",(e,t)=>{le.init(e,t),e._zod.pattern=kh,e._zod.parse=(n,r)=>{if(t.coerce)try{n.value=!!n.value}catch{}let o=n.value;return typeof o=="boolean"||n.issues.push({expected:"boolean",code:"invalid_type",input:o,inst:e}),n}});var kf=k("$ZodAny",(e,t)=>{le.init(e,t),e._zod.parse=n=>n}),If=k("$ZodUnknown",(e,t)=>{le.init(e,t),e._zod.parse=n=>n}),Rf=k("$ZodNever",(e,t)=>{le.init(e,t),e._zod.parse=(n,r)=>(n.issues.push({expected:"never",code:"invalid_type",input:n.value,inst:e}),n)});function Vh(e,t,n){e.issues.length&&t.issues.push(...yt(n,e.issues)),t.value[n]=e.value}var Cf=k("$ZodArray",(e,t)=>{le.init(e,t),e._zod.parse=(n,r)=>{let o=n.value;if(!Array.isArray(o))return n.issues.push({expected:"array",code:"invalid_type",input:o,inst:e}),n;n.value=Array(o.length);let i=[];for(let a=0;a<o.length;a++){let s=o[a],c=t.element._zod.run({value:s,issues:[]},r);c instanceof Promise?i.push(c.then(l=>Vh(l,n,a))):Vh(c,n,a)}return i.length?Promise.all(i).then(()=>n):n}});function Si(e,t,n){e.issues.length&&t.issues.push(...yt(n,e.issues)),t.value[n]=e.value}function jh(e,t,n,r){e.issues.length?r[n]===void 0?n in r?t.value[n]=void 0:t.value[n]=e.value:t.issues.push(...yt(n,e.issues)):e.value===void 0?n in r&&(t.value[n]=void 0):t.value[n]=e.value}var Nf=k("$ZodObject",(e,t)=>{le.init(e,t);let n=_r(()=>{let m=Object.keys(t.shape);for(let h of m)if(!(t.shape[h]instanceof le))throw new Error(`Invalid element at key "${h}": expected a Zod schema`);let f=nc(t.shape);return{shape:t.shape,keys:m,keySet:new Set(m),numKeys:m.length,optionalKeys:new Set(f)}});oe(e._zod,"propValues",()=>{let m=t.shape,f={};for(let h in m){let p=m[h]._zod;if(p.values){f[h]??(f[h]=new Set);for(let E of p.values)f[h].add(E)}}return f});let r=m=>{let f=new xi(["shape","payload","ctx"]),h=n.value,p=y=>{let T=Xt(y);return`shape[${T}]._zod.run({ value: input[${T}], issues: [] }, ctx)`};f.write("const input = payload.value;");let E=Object.create(null),b=0;for(let y of h.keys)E[y]=`key_${b++}`;f.write("const newResult = {}");for(let y of h.keys)if(h.optionalKeys.has(y)){let T=E[y];f.write(`const ${T} = ${p(y)};`);let w=Xt(y);f.write(`
        if (${T}.issues.length) {
          if (input[${w}] === undefined) {
            if (${w} in input) {
              newResult[${w}] = undefined;
            }
          } else {
            payload.issues = payload.issues.concat(
              ${T}.issues.map((iss) => ({
                ...iss,
                path: iss.path ? [${w}, ...iss.path] : [${w}],
              }))
            );
          }
        } else if (${T}.value === undefined) {
          if (${w} in input) newResult[${w}] = undefined;
        } else {
          newResult[${w}] = ${T}.value;
        }
        `)}else{let T=E[y];f.write(`const ${T} = ${p(y)};`),f.write(`
          if (${T}.issues.length) payload.issues = payload.issues.concat(${T}.issues.map(iss => ({
            ...iss,
            path: iss.path ? [${Xt(y)}, ...iss.path] : [${Xt(y)}]
          })));`),f.write(`newResult[${Xt(y)}] = ${T}.value`)}f.write("payload.value = newResult;"),f.write("return payload;");let S=f.compile();return(y,T)=>S(m,y,T)},o,i=Un,a=!gi.jitless,c=a&&ec.value,l=t.catchall,u;e._zod.parse=(m,f)=>{u??(u=n.value);let h=m.value;if(!i(h))return m.issues.push({expected:"object",code:"invalid_type",input:h,inst:e}),m;let p=[];if(a&&c&&f?.async===!1&&f.jitless!==!0)o||(o=r(t.shape)),m=o(m,f);else{m.value={};let T=u.shape;for(let w of u.keys){let _=T[w],g=_._zod.run({value:h[w],issues:[]},f),I=_._zod.optin==="optional"&&_._zod.optout==="optional";g instanceof Promise?p.push(g.then(z=>I?jh(z,m,w,h):Si(z,m,w))):I?jh(g,m,w,h):Si(g,m,w)}}if(!l)return p.length?Promise.all(p).then(()=>m):m;let E=[],b=u.keySet,S=l._zod,y=S.def.type;for(let T of Object.keys(h)){if(b.has(T))continue;if(y==="never"){E.push(T);continue}let w=S.run({value:h[T],issues:[]},f);w instanceof Promise?p.push(w.then(_=>Si(_,m,T))):Si(w,m,T)}return E.length&&m.issues.push({code:"unrecognized_keys",keys:E,input:h,inst:e}),p.length?Promise.all(p).then(()=>m):m}});function Wh(e,t,n,r){for(let o of e)if(o.issues.length===0)return t.value=o.value,t;return t.issues.push({code:"invalid_union",input:t.value,inst:n,errors:e.map(o=>o.issues.map(i=>st(i,r,ze())))}),t}var gc=k("$ZodUnion",(e,t)=>{le.init(e,t),oe(e._zod,"optin",()=>t.options.some(n=>n._zod.optin==="optional")?"optional":void 0),oe(e._zod,"optout",()=>t.options.some(n=>n._zod.optout==="optional")?"optional":void 0),oe(e._zod,"values",()=>{if(t.options.every(n=>n._zod.values))return new Set(t.options.flatMap(n=>Array.from(n._zod.values)))}),oe(e._zod,"pattern",()=>{if(t.options.every(n=>n._zod.pattern)){let n=t.options.map(r=>r._zod.pattern);return new RegExp(`^(${n.map(r=>Ar(r.source)).join("|")})$`)}}),e._zod.parse=(n,r)=>{let o=!1,i=[];for(let a of t.options){let s=a._zod.run({value:n.value,issues:[]},r);if(s instanceof Promise)i.push(s),o=!0;else{if(s.issues.length===0)return s;i.push(s)}}return o?Promise.all(i).then(a=>Wh(a,n,e,r)):Wh(i,n,e,r)}}),Of=k("$ZodDiscriminatedUnion",(e,t)=>{gc.init(e,t);let n=e._zod.parse;oe(e._zod,"propValues",()=>{let o={};for(let i of t.options){let a=i._zod.propValues;if(!a||Object.keys(a).length===0)throw new Error(`Invalid discriminated union option at index "${t.options.indexOf(i)}"`);for(let[s,c]of Object.entries(a)){o[s]||(o[s]=new Set);for(let l of c)o[s].add(l)}}return o});let r=_r(()=>{let o=t.options,i=new Map;for(let a of o){let s=a._zod.propValues[t.discriminator];if(!s||s.size===0)throw new Error(`Invalid discriminated union option at index "${t.options.indexOf(a)}"`);for(let c of s){if(i.has(c))throw new Error(`Duplicate discriminator value "${String(c)}"`);i.set(c,a)}}return i});e._zod.parse=(o,i)=>{let a=o.value;if(!Un(a))return o.issues.push({code:"invalid_type",expected:"object",input:a,inst:e}),o;let s=r.value.get(a?.[t.discriminator]);return s?s._zod.run(o,i):t.unionFallback?n(o,i):(o.issues.push({code:"invalid_union",errors:[],note:"No matching discriminator",input:a,path:[t.discriminator],inst:e}),o)}}),Pf=k("$ZodIntersection",(e,t)=>{le.init(e,t),e._zod.parse=(n,r)=>{let o=n.value,i=t.left._zod.run({value:o,issues:[]},r),a=t.right._zod.run({value:o,issues:[]},r);return i instanceof Promise||a instanceof Promise?Promise.all([i,a]).then(([c,l])=>qh(n,c,l)):qh(n,i,a)}});function fc(e,t){if(e===t)return{valid:!0,data:e};if(e instanceof Date&&t instanceof Date&&+e==+t)return{valid:!0,data:e};if(Hn(e)&&Hn(t)){let n=Object.keys(t),r=Object.keys(e).filter(i=>n.indexOf(i)!==-1),o={...e,...t};for(let i of r){let a=fc(e[i],t[i]);if(!a.valid)return{valid:!1,mergeErrorPath:[i,...a.mergeErrorPath]};o[i]=a.data}return{valid:!0,data:o}}if(Array.isArray(e)&&Array.isArray(t)){if(e.length!==t.length)return{valid:!1,mergeErrorPath:[]};let n=[];for(let r=0;r<e.length;r++){let o=e[r],i=t[r],a=fc(o,i);if(!a.valid)return{valid:!1,mergeErrorPath:[r,...a.mergeErrorPath]};n.push(a.data)}return{valid:!0,data:n}}return{valid:!1,mergeErrorPath:[]}}function qh(e,t,n){if(t.issues.length&&e.issues.push(...t.issues),n.issues.length&&e.issues.push(...n.issues),Kt(e))return e;let r=fc(t.value,n.value);if(!r.valid)throw new Error(`Unmergable intersection. Error path: ${JSON.stringify(r.mergeErrorPath)}`);return e.value=r.data,e}var Mf=k("$ZodRecord",(e,t)=>{le.init(e,t),e._zod.parse=(n,r)=>{let o=n.value;if(!Hn(o))return n.issues.push({expected:"record",code:"invalid_type",input:o,inst:e}),n;let i=[];if(t.keyType._zod.values){let a=t.keyType._zod.values;n.value={};for(let c of a)if(typeof c=="string"||typeof c=="number"||typeof c=="symbol"){let l=t.valueType._zod.run({value:o[c],issues:[]},r);l instanceof Promise?i.push(l.then(u=>{u.issues.length&&n.issues.push(...yt(c,u.issues)),n.value[c]=u.value})):(l.issues.length&&n.issues.push(...yt(c,l.issues)),n.value[c]=l.value)}let s;for(let c in o)a.has(c)||(s=s??[],s.push(c));s&&s.length>0&&n.issues.push({code:"unrecognized_keys",input:o,inst:e,keys:s})}else{n.value={};for(let a of Reflect.ownKeys(o)){if(a==="__proto__")continue;let s=t.keyType._zod.run({value:a,issues:[]},r);if(s instanceof Promise)throw new Error("Async schemas not supported in object keys currently");if(s.issues.length){n.issues.push({origin:"record",code:"invalid_key",issues:s.issues.map(l=>st(l,r,ze())),input:a,path:[a],inst:e}),n.value[s.value]=s.value;continue}let c=t.valueType._zod.run({value:o[a],issues:[]},r);c instanceof Promise?i.push(c.then(l=>{l.issues.length&&n.issues.push(...yt(a,l.issues)),n.value[s.value]=l.value})):(c.issues.length&&n.issues.push(...yt(a,c.issues)),n.value[s.value]=c.value)}}return i.length?Promise.all(i).then(()=>n):n}});var zf=k("$ZodEnum",(e,t)=>{le.init(e,t);let n=Xl(t.entries);e._zod.values=new Set(n),e._zod.pattern=new RegExp(`^(${n.filter(r=>tc.has(typeof r)).map(r=>typeof r=="string"?Rt(r):r.toString()).join("|")})$`),e._zod.parse=(r,o)=>{let i=r.value;return e._zod.values.has(i)||r.issues.push({code:"invalid_value",values:n,input:i,inst:e}),r}}),Lf=k("$ZodLiteral",(e,t)=>{le.init(e,t),e._zod.values=new Set(t.values),e._zod.pattern=new RegExp(`^(${t.values.map(n=>typeof n=="string"?Rt(n):n?n.toString():String(n)).join("|")})$`),e._zod.parse=(n,r)=>{let o=n.value;return e._zod.values.has(o)||n.issues.push({code:"invalid_value",values:t.values,input:o,inst:e}),n}});var Df=k("$ZodTransform",(e,t)=>{le.init(e,t),e._zod.parse=(n,r)=>{let o=t.transform(n.value,n);if(r.async)return(o instanceof Promise?o:Promise.resolve(o)).then(a=>(n.value=a,n));if(o instanceof Promise)throw new St;return n.value=o,n}}),$f=k("$ZodOptional",(e,t)=>{le.init(e,t),e._zod.optin="optional",e._zod.optout="optional",oe(e._zod,"values",()=>t.innerType._zod.values?new Set([...t.innerType._zod.values,void 0]):void 0),oe(e._zod,"pattern",()=>{let n=t.innerType._zod.pattern;return n?new RegExp(`^(${Ar(n.source)})?$`):void 0}),e._zod.parse=(n,r)=>t.innerType._zod.optin==="optional"?t.innerType._zod.run(n,r):n.value===void 0?n:t.innerType._zod.run(n,r)}),Uf=k("$ZodNullable",(e,t)=>{le.init(e,t),oe(e._zod,"optin",()=>t.innerType._zod.optin),oe(e._zod,"optout",()=>t.innerType._zod.optout),oe(e._zod,"pattern",()=>{let n=t.innerType._zod.pattern;return n?new RegExp(`^(${Ar(n.source)}|null)$`):void 0}),oe(e._zod,"values",()=>t.innerType._zod.values?new Set([...t.innerType._zod.values,null]):void 0),e._zod.parse=(n,r)=>n.value===null?n:t.innerType._zod.run(n,r)}),Hf=k("$ZodDefault",(e,t)=>{le.init(e,t),e._zod.optin="optional",oe(e._zod,"values",()=>t.innerType._zod.values),e._zod.parse=(n,r)=>{if(n.value===void 0)return n.value=t.defaultValue,n;let o=t.innerType._zod.run(n,r);return o instanceof Promise?o.then(i=>Yh(i,t)):Yh(o,t)}});function Yh(e,t){return e.value===void 0&&(e.value=t.defaultValue),e}var Ff=k("$ZodPrefault",(e,t)=>{le.init(e,t),e._zod.optin="optional",oe(e._zod,"values",()=>t.innerType._zod.values),e._zod.parse=(n,r)=>(n.value===void 0&&(n.value=t.defaultValue),t.innerType._zod.run(n,r))}),Gf=k("$ZodNonOptional",(e,t)=>{le.init(e,t),oe(e._zod,"values",()=>{let n=t.innerType._zod.values;return n?new Set([...n].filter(r=>r!==void 0)):void 0}),e._zod.parse=(n,r)=>{let o=t.innerType._zod.run(n,r);return o instanceof Promise?o.then(i=>Xh(i,e)):Xh(o,e)}});function Xh(e,t){return!e.issues.length&&e.value===void 0&&e.issues.push({code:"invalid_type",expected:"nonoptional",input:e.value,inst:t}),e}var Zf=k("$ZodCatch",(e,t)=>{le.init(e,t),e._zod.optin="optional",oe(e._zod,"optout",()=>t.innerType._zod.optout),oe(e._zod,"values",()=>t.innerType._zod.values),e._zod.parse=(n,r)=>{let o=t.innerType._zod.run(n,r);return o instanceof Promise?o.then(i=>(n.value=i.value,i.issues.length&&(n.value=t.catchValue({...n,error:{issues:i.issues.map(a=>st(a,r,ze()))},input:n.value}),n.issues=[]),n)):(n.value=o.value,o.issues.length&&(n.value=t.catchValue({...n,error:{issues:o.issues.map(i=>st(i,r,ze()))},input:n.value}),n.issues=[]),n)}});var Bf=k("$ZodPipe",(e,t)=>{le.init(e,t),oe(e._zod,"values",()=>t.in._zod.values),oe(e._zod,"optin",()=>t.in._zod.optin),oe(e._zod,"optout",()=>t.out._zod.optout),e._zod.parse=(n,r)=>{let o=t.in._zod.run(n,r);return o instanceof Promise?o.then(i=>Kh(i,t,r)):Kh(o,t,r)}});function Kh(e,t,n){return Kt(e)?e:t.out._zod.run({value:e.value,issues:e.issues},n)}var Vf=k("$ZodReadonly",(e,t)=>{le.init(e,t),oe(e._zod,"propValues",()=>t.innerType._zod.propValues),oe(e._zod,"values",()=>t.innerType._zod.values),oe(e._zod,"optin",()=>t.innerType._zod.optin),oe(e._zod,"optout",()=>t.innerType._zod.optout),e._zod.parse=(n,r)=>{let o=t.innerType._zod.run(n,r);return o instanceof Promise?o.then(Jh):Jh(o)}});function Jh(e){return e.value=Object.freeze(e.value),e}var jf=k("$ZodLazy",(e,t)=>{le.init(e,t),oe(e._zod,"innerType",()=>t.getter()),oe(e._zod,"pattern",()=>e._zod.innerType._zod.pattern),oe(e._zod,"propValues",()=>e._zod.innerType._zod.propValues),oe(e._zod,"optin",()=>e._zod.innerType._zod.optin),oe(e._zod,"optout",()=>e._zod.innerType._zod.optout),e._zod.parse=(n,r)=>e._zod.innerType._zod.run(n,r)}),Wf=k("$ZodCustom",(e,t)=>{De.init(e,t),le.init(e,t),e._zod.parse=(n,r)=>n,e._zod.check=n=>{let r=n.value,o=t.fn(r);if(o instanceof Promise)return o.then(i=>Qh(i,n,r,e));Qh(o,n,r,e)}});function Qh(e,t,n,r){if(!e){let o={code:"custom",input:n,inst:r,path:[...r._zod.def.path??[]],continue:!r._zod.def.abort};r._zod.def.params&&(o.params=r._zod.def.params),t.issues.push(oc(o))}}var ME=e=>{let t=typeof e;switch(t){case"number":return Number.isNaN(e)?"NaN":"number";case"object":{if(Array.isArray(e))return"array";if(e===null)return"null";if(Object.getPrototypeOf(e)!==Object.prototype&&e.constructor)return e.constructor.name}}return t},zE=()=>{let e={string:{unit:"characters",verb:"to have"},file:{unit:"bytes",verb:"to have"},array:{unit:"items",verb:"to have"},set:{unit:"items",verb:"to have"}};function t(r){return e[r]??null}let n={regex:"input",email:"email address",url:"URL",emoji:"emoji",uuid:"UUID",uuidv4:"UUIDv4",uuidv6:"UUIDv6",nanoid:"nanoid",guid:"GUID",cuid:"cuid",cuid2:"cuid2",ulid:"ULID",xid:"XID",ksuid:"KSUID",datetime:"ISO datetime",date:"ISO date",time:"ISO time",duration:"ISO duration",ipv4:"IPv4 address",ipv6:"IPv6 address",cidrv4:"IPv4 range",cidrv6:"IPv6 range",base64:"base64-encoded string",base64url:"base64url-encoded string",json_string:"JSON string",e164:"E.164 number",jwt:"JWT",template_literal:"input"};return r=>{switch(r.code){case"invalid_type":return`Invalid input: expected ${r.expected}, received ${ME(r.input)}`;case"invalid_value":return r.values.length===1?`Invalid input: expected ${yi(r.values[0])}`:`Invalid option: expected one of ${vi(r.values,"|")}`;case"too_big":{let o=r.inclusive?"<=":"<",i=t(r.origin);return i?`Too big: expected ${r.origin??"value"} to have ${o}${r.maximum.toString()} ${i.unit??"elements"}`:`Too big: expected ${r.origin??"value"} to be ${o}${r.maximum.toString()}`}case"too_small":{let o=r.inclusive?">=":">",i=t(r.origin);return i?`Too small: expected ${r.origin} to have ${o}${r.minimum.toString()} ${i.unit}`:`Too small: expected ${r.origin} to be ${o}${r.minimum.toString()}`}case"invalid_format":{let o=r;return o.format==="starts_with"?`Invalid string: must start with "${o.prefix}"`:o.format==="ends_with"?`Invalid string: must end with "${o.suffix}"`:o.format==="includes"?`Invalid string: must include "${o.includes}"`:o.format==="regex"?`Invalid string: must match pattern ${o.pattern}`:`Invalid ${n[o.format]??r.format}`}case"not_multiple_of":return`Invalid number: must be a multiple of ${r.divisor}`;case"unrecognized_keys":return`Unrecognized key${r.keys.length>1?"s":""}: ${vi(r.keys,", ")}`;case"invalid_key":return`Invalid key in ${r.origin}`;case"invalid_union":return"Invalid input";case"invalid_element":return`Invalid value in ${r.origin}`;default:return"Invalid input"}}};function Fn(){return{localeError:zE()}}var vc=class{constructor(){this._map=new Map,this._idmap=new Map}add(t,...n){let r=n[0];if(this._map.set(t,r),r&&typeof r=="object"&&"id"in r){if(this._idmap.has(r.id))throw new Error(`ID ${r.id} already exists in the registry`);this._idmap.set(r.id,t)}return this}clear(){return this._map=new Map,this._idmap=new Map,this}remove(t){let n=this._map.get(t);return n&&typeof n=="object"&&"id"in n&&this._idmap.delete(n.id),this._map.delete(t),this}get(t){let n=t._zod.parent;if(n){let r={...this.get(n)??{}};return delete r.id,{...r,...this._map.get(t)}}return this._map.get(t)}has(t){return this._map.has(t)}};function qf(){return new vc}var Gn=qf();function Yf(e,t){return new e({type:"string",...G(t)})}function Xf(e,t){return new e({type:"string",format:"email",check:"string_format",abort:!1,...G(t)})}function bc(e,t){return new e({type:"string",format:"guid",check:"string_format",abort:!1,...G(t)})}function Kf(e,t){return new e({type:"string",format:"uuid",check:"string_format",abort:!1,...G(t)})}function Jf(e,t){return new e({type:"string",format:"uuid",check:"string_format",abort:!1,version:"v4",...G(t)})}function Qf(e,t){return new e({type:"string",format:"uuid",check:"string_format",abort:!1,version:"v6",...G(t)})}function em(e,t){return new e({type:"string",format:"uuid",check:"string_format",abort:!1,version:"v7",...G(t)})}function tm(e,t){return new e({type:"string",format:"url",check:"string_format",abort:!1,...G(t)})}function nm(e,t){return new e({type:"string",format:"emoji",check:"string_format",abort:!1,...G(t)})}function rm(e,t){return new e({type:"string",format:"nanoid",check:"string_format",abort:!1,...G(t)})}function om(e,t){return new e({type:"string",format:"cuid",check:"string_format",abort:!1,...G(t)})}function im(e,t){return new e({type:"string",format:"cuid2",check:"string_format",abort:!1,...G(t)})}function am(e,t){return new e({type:"string",format:"ulid",check:"string_format",abort:!1,...G(t)})}function sm(e,t){return new e({type:"string",format:"xid",check:"string_format",abort:!1,...G(t)})}function lm(e,t){return new e({type:"string",format:"ksuid",check:"string_format",abort:!1,...G(t)})}function cm(e,t){return new e({type:"string",format:"ipv4",check:"string_format",abort:!1,...G(t)})}function um(e,t){return new e({type:"string",format:"ipv6",check:"string_format",abort:!1,...G(t)})}function dm(e,t){return new e({type:"string",format:"cidrv4",check:"string_format",abort:!1,...G(t)})}function pm(e,t){return new e({type:"string",format:"cidrv6",check:"string_format",abort:!1,...G(t)})}function hm(e,t){return new e({type:"string",format:"base64",check:"string_format",abort:!1,...G(t)})}function fm(e,t){return new e({type:"string",format:"base64url",check:"string_format",abort:!1,...G(t)})}function mm(e,t){return new e({type:"string",format:"e164",check:"string_format",abort:!1,...G(t)})}function gm(e,t){return new e({type:"string",format:"jwt",check:"string_format",abort:!1,...G(t)})}function vm(e,t){return new e({type:"string",format:"datetime",check:"string_format",offset:!1,local:!1,precision:null,...G(t)})}function bm(e,t){return new e({type:"string",format:"date",check:"string_format",...G(t)})}function ym(e,t){return new e({type:"string",format:"time",check:"string_format",precision:null,...G(t)})}function wm(e,t){return new e({type:"string",format:"duration",check:"string_format",...G(t)})}function Em(e,t){return new e({type:"number",check:"number_format",abort:!1,format:"safeint",...G(t)})}function xm(e,t){return new e({type:"boolean",...G(t)})}function Sm(e){return new e({type:"any"})}function _m(e){return new e({type:"unknown"})}function Tm(e,t){return new e({type:"never",...G(t)})}function Ti(e,t){return new pc({check:"less_than",...G(t),value:e,inclusive:!1})}function Rr(e,t){return new pc({check:"less_than",...G(t),value:e,inclusive:!0})}function Ai(e,t){return new hc({check:"greater_than",...G(t),value:e,inclusive:!1})}function Cr(e,t){return new hc({check:"greater_than",...G(t),value:e,inclusive:!0})}function ki(e,t){return new Nh({check:"multiple_of",...G(t),value:e})}function Ii(e,t){return new Ph({check:"max_length",...G(t),maximum:e})}function Zn(e,t){return new Mh({check:"min_length",...G(t),minimum:e})}function Ri(e,t){return new zh({check:"length_equals",...G(t),length:e})}function yc(e,t){return new Lh({check:"string_format",format:"regex",...G(t),pattern:e})}function wc(e){return new Dh({check:"string_format",format:"lowercase",...G(e)})}function Ec(e){return new $h({check:"string_format",format:"uppercase",...G(e)})}function xc(e,t){return new Uh({check:"string_format",format:"includes",...G(t),includes:e})}function Sc(e,t){return new Hh({check:"string_format",format:"starts_with",...G(t),prefix:e})}function _c(e,t){return new Fh({check:"string_format",format:"ends_with",...G(t),suffix:e})}function Jt(e){return new Gh({check:"overwrite",tx:e})}function Tc(e){return Jt(t=>t.normalize(e))}function Ac(){return Jt(e=>e.trim())}function kc(){return Jt(e=>e.toLowerCase())}function Ic(){return Jt(e=>e.toUpperCase())}function Am(e,t,n){return new e({type:"array",element:t,...G(n)})}function km(e,t,n){let r=G(n);return r.abort??(r.abort=!0),new e({type:"custom",check:"custom",fn:t,...r})}function Im(e,t,n){return new e({type:"custom",check:"custom",fn:t,...G(n)})}var GE=k("ZodISODateTime",(e,t)=>{pf.init(e,t),be.init(e,t)});function Rm(e){return vm(GE,e)}var ZE=k("ZodISODate",(e,t)=>{hf.init(e,t),be.init(e,t)});function Cm(e){return bm(ZE,e)}var BE=k("ZodISOTime",(e,t)=>{ff.init(e,t),be.init(e,t)});function Nm(e){return ym(BE,e)}var VE=k("ZodISODuration",(e,t)=>{mf.init(e,t),be.init(e,t)});function Om(e){return wm(VE,e)}var Mm=(e,t)=>{wi.init(e,t),e.name="ZodError",Object.defineProperties(e,{format:{value:n=>sc(e,n)},flatten:{value:n=>ac(e,n)},addIssue:{value:n=>e.issues.push(n)},addIssues:{value:n=>e.issues.push(...n)},isEmpty:{get(){return e.issues.length===0}}})},L1=k("ZodError",Mm),Or=k("ZodError",Mm,{Parent:Error});var zm=Jp(Or),Lm=Qp(Or),Dm=lc(Or),$m=cc(Or);var ye=k("ZodType",(e,t)=>(le.init(e,t),e.def=t,Object.defineProperty(e,"_def",{value:t}),e.check=(...n)=>e.clone({...t,checks:[...t.checks??[],...n.map(r=>typeof r=="function"?{_zod:{check:r,def:{check:"custom"},onattach:[]}}:r)]}),e.clone=(n,r)=>at(e,n,r),e.brand=()=>e,e.register=((n,r)=>(n.add(e,r),e)),e.parse=(n,r)=>zm(e,n,r,{callee:e.parse}),e.safeParse=(n,r)=>Dm(e,n,r),e.parseAsync=async(n,r)=>Lm(e,n,r,{callee:e.parseAsync}),e.safeParseAsync=async(n,r)=>$m(e,n,r),e.spa=e.safeParseAsync,e.refine=(n,r)=>e.check(Nx(n,r)),e.superRefine=n=>e.check(Ox(n)),e.overwrite=n=>e.check(Jt(n)),e.optional=()=>Hm(e),e.nullable=()=>Fm(e),e.nullish=()=>Hm(Fm(e)),e.nonoptional=n=>kx(e,n),e.array=()=>Ae(e),e.or=n=>Pr([e,n]),e.and=n=>Ex(e,n),e.transform=n=>Gm(e,Sx(n)),e.default=n=>_x(e,n),e.prefault=n=>Ax(e,n),e.catch=n=>Ix(e,n),e.pipe=n=>Gm(e,n),e.readonly=()=>Rx(e),e.describe=n=>{let r=e.clone();return Gn.add(r,{description:n}),r},Object.defineProperty(e,"description",{get(){return Gn.get(e)?.description},configurable:!0}),e.meta=(...n)=>{if(n.length===0)return Gn.get(e);let r=e.clone();return Gn.add(r,n[0]),r},e.isOptional=()=>e.safeParse(void 0).success,e.isNullable=()=>e.safeParse(null).success,e)),Zm=k("_ZodString",(e,t)=>{_i.init(e,t),ye.init(e,t);let n=e._zod.bag;e.format=n.format??null,e.minLength=n.minimum??null,e.maxLength=n.maximum??null,e.regex=(...r)=>e.check(yc(...r)),e.includes=(...r)=>e.check(xc(...r)),e.startsWith=(...r)=>e.check(Sc(...r)),e.endsWith=(...r)=>e.check(_c(...r)),e.min=(...r)=>e.check(Zn(...r)),e.max=(...r)=>e.check(Ii(...r)),e.length=(...r)=>e.check(Ri(...r)),e.nonempty=(...r)=>e.check(Zn(1,...r)),e.lowercase=r=>e.check(wc(r)),e.uppercase=r=>e.check(Ec(r)),e.trim=()=>e.check(Ac()),e.normalize=(...r)=>e.check(Tc(...r)),e.toLowerCase=()=>e.check(kc()),e.toUpperCase=()=>e.check(Ic())}),qE=k("ZodString",(e,t)=>{_i.init(e,t),Zm.init(e,t),e.email=n=>e.check(Xf(YE,n)),e.url=n=>e.check(tm(XE,n)),e.jwt=n=>e.check(gm(dx,n)),e.emoji=n=>e.check(nm(KE,n)),e.guid=n=>e.check(bc(Um,n)),e.uuid=n=>e.check(Kf(Ci,n)),e.uuidv4=n=>e.check(Jf(Ci,n)),e.uuidv6=n=>e.check(Qf(Ci,n)),e.uuidv7=n=>e.check(em(Ci,n)),e.nanoid=n=>e.check(rm(JE,n)),e.guid=n=>e.check(bc(Um,n)),e.cuid=n=>e.check(om(QE,n)),e.cuid2=n=>e.check(im(ex,n)),e.ulid=n=>e.check(am(tx,n)),e.base64=n=>e.check(hm(lx,n)),e.base64url=n=>e.check(fm(cx,n)),e.xid=n=>e.check(sm(nx,n)),e.ksuid=n=>e.check(lm(rx,n)),e.ipv4=n=>e.check(cm(ox,n)),e.ipv6=n=>e.check(um(ix,n)),e.cidrv4=n=>e.check(dm(ax,n)),e.cidrv6=n=>e.check(pm(sx,n)),e.e164=n=>e.check(mm(ux,n)),e.datetime=n=>e.check(Rm(n)),e.date=n=>e.check(Cm(n)),e.time=n=>e.check(Nm(n)),e.duration=n=>e.check(Om(n))});function A(e){return Yf(qE,e)}var be=k("ZodStringFormat",(e,t)=>{fe.init(e,t),Zm.init(e,t)}),YE=k("ZodEmail",(e,t)=>{nf.init(e,t),be.init(e,t)});var Um=k("ZodGUID",(e,t)=>{ef.init(e,t),be.init(e,t)});var Ci=k("ZodUUID",(e,t)=>{tf.init(e,t),be.init(e,t)});var XE=k("ZodURL",(e,t)=>{rf.init(e,t),be.init(e,t)});var KE=k("ZodEmoji",(e,t)=>{of.init(e,t),be.init(e,t)});var JE=k("ZodNanoID",(e,t)=>{af.init(e,t),be.init(e,t)});var QE=k("ZodCUID",(e,t)=>{sf.init(e,t),be.init(e,t)});var ex=k("ZodCUID2",(e,t)=>{lf.init(e,t),be.init(e,t)});var tx=k("ZodULID",(e,t)=>{cf.init(e,t),be.init(e,t)});var nx=k("ZodXID",(e,t)=>{uf.init(e,t),be.init(e,t)});var rx=k("ZodKSUID",(e,t)=>{df.init(e,t),be.init(e,t)});var ox=k("ZodIPv4",(e,t)=>{gf.init(e,t),be.init(e,t)});var ix=k("ZodIPv6",(e,t)=>{vf.init(e,t),be.init(e,t)});var ax=k("ZodCIDRv4",(e,t)=>{bf.init(e,t),be.init(e,t)});var sx=k("ZodCIDRv6",(e,t)=>{yf.init(e,t),be.init(e,t)});var lx=k("ZodBase64",(e,t)=>{Ef.init(e,t),be.init(e,t)});var cx=k("ZodBase64URL",(e,t)=>{xf.init(e,t),be.init(e,t)});var ux=k("ZodE164",(e,t)=>{Sf.init(e,t),be.init(e,t)});var dx=k("ZodJWT",(e,t)=>{_f.init(e,t),be.init(e,t)});var px=k("ZodNumber",(e,t)=>{mc.init(e,t),ye.init(e,t),e.gt=(r,o)=>e.check(Ai(r,o)),e.gte=(r,o)=>e.check(Cr(r,o)),e.min=(r,o)=>e.check(Cr(r,o)),e.lt=(r,o)=>e.check(Ti(r,o)),e.lte=(r,o)=>e.check(Rr(r,o)),e.max=(r,o)=>e.check(Rr(r,o)),e.int=r=>e.check(W(r)),e.safe=r=>e.check(W(r)),e.positive=r=>e.check(Ai(0,r)),e.nonnegative=r=>e.check(Cr(0,r)),e.negative=r=>e.check(Ti(0,r)),e.nonpositive=r=>e.check(Rr(0,r)),e.multipleOf=(r,o)=>e.check(ki(r,o)),e.step=(r,o)=>e.check(ki(r,o)),e.finite=()=>e;let n=e._zod.bag;e.minValue=Math.max(n.minimum??Number.NEGATIVE_INFINITY,n.exclusiveMinimum??Number.NEGATIVE_INFINITY)??null,e.maxValue=Math.min(n.maximum??Number.POSITIVE_INFINITY,n.exclusiveMaximum??Number.POSITIVE_INFINITY)??null,e.isInt=(n.format??"").includes("int")||Number.isSafeInteger(n.multipleOf??.5),e.isFinite=!0,e.format=n.format??null});var hx=k("ZodNumberFormat",(e,t)=>{Tf.init(e,t),px.init(e,t)});function W(e){return Em(hx,e)}var fx=k("ZodBoolean",(e,t)=>{Af.init(e,t),ye.init(e,t)});function J(e){return xm(fx,e)}var mx=k("ZodAny",(e,t)=>{kf.init(e,t),ye.init(e,t)});function Z(){return Sm(mx)}var gx=k("ZodUnknown",(e,t)=>{If.init(e,t),ye.init(e,t)});function Rc(){return _m(gx)}var vx=k("ZodNever",(e,t)=>{Rf.init(e,t),ye.init(e,t)});function bx(e){return Tm(vx,e)}var Ni=k("ZodArray",(e,t)=>{Cf.init(e,t),ye.init(e,t),e.element=t.element,e.min=(n,r)=>e.check(Zn(n,r)),e.nonempty=n=>e.check(Zn(1,n)),e.max=(n,r)=>e.check(Ii(n,r)),e.length=(n,r)=>e.check(Ri(n,r)),e.unwrap=()=>e.element});function Ae(e,t){return Am(Ni,e,t)}var Bn=k("ZodObject",(e,t)=>{Nf.init(e,t),ye.init(e,t),ie.defineLazy(e,"shape",()=>t.shape),e.keyof=()=>Qt(Object.keys(e._zod.def.shape)),e.catchall=n=>e.clone({...e._zod.def,catchall:n}),e.passthrough=()=>e.clone({...e._zod.def,catchall:Rc()}),e.loose=()=>e.clone({...e._zod.def,catchall:Rc()}),e.strict=()=>e.clone({...e._zod.def,catchall:bx()}),e.strip=()=>e.clone({...e._zod.def,catchall:void 0}),e.extend=n=>ie.extend(e,n),e.merge=n=>ie.merge(e,n),e.pick=n=>ie.pick(e,n),e.omit=n=>ie.omit(e,n),e.partial=(...n)=>ie.partial(Pi,e,n[0]),e.required=(...n)=>ie.required(Vm,e,n[0])});function P(e,t){return new Bn({type:"object",get shape(){return ie.assignProp(this,"shape",{...e}),this.shape},catchall:Rc(),...ie.normalizeParams(t)})}var Oi=k("ZodUnion",(e,t)=>{gc.init(e,t),ye.init(e,t),e.options=t.options});function Pr(e,t){return new Oi({type:"union",options:e,...ie.normalizeParams(t)})}var yx=k("ZodDiscriminatedUnion",(e,t)=>{Oi.init(e,t),Of.init(e,t)});function Ct(e,t,n){return new yx({type:"union",options:t,discriminator:e,...ie.normalizeParams(n)})}var wx=k("ZodIntersection",(e,t)=>{Pf.init(e,t),ye.init(e,t)});function Ex(e,t){return new wx({type:"intersection",left:e,right:t})}var Bm=k("ZodRecord",(e,t)=>{Mf.init(e,t),ye.init(e,t),e.keyType=t.keyType,e.valueType=t.valueType});var Cc=k("ZodEnum",(e,t)=>{zf.init(e,t),ye.init(e,t),e.enum=t.entries,e.options=Object.values(t.entries);let n=new Set(Object.keys(t.entries));e.extract=(r,o)=>{let i={};for(let a of r)if(n.has(a))i[a]=t.entries[a];else throw new Error(`Key ${a} not found in enum`);return new Cc({...t,checks:[],...ie.normalizeParams(o),entries:i})},e.exclude=(r,o)=>{let i={...t.entries};for(let a of r)if(n.has(a))delete i[a];else throw new Error(`Key ${a} not found in enum`);return new Cc({...t,checks:[],...ie.normalizeParams(o),entries:i})}});function Qt(e,t){let n=Array.isArray(e)?Object.fromEntries(e.map(r=>[r,r])):e;return new Cc({type:"enum",entries:n,...ie.normalizeParams(t)})}var Nc=k("ZodLiteral",(e,t)=>{Lf.init(e,t),ye.init(e,t),e.values=new Set(t.values),Object.defineProperty(e,"value",{get(){if(t.values.length>1)throw new Error("This schema contains multiple valid literal values. Use `.values` instead.");return t.values[0]}})});function $(e,t){return new Nc({type:"literal",values:Array.isArray(e)?e:[e],...ie.normalizeParams(t)})}var xx=k("ZodTransform",(e,t)=>{Df.init(e,t),ye.init(e,t),e._zod.parse=(n,r)=>{n.addIssue=i=>{if(typeof i=="string")n.issues.push(ie.issue(i,n.value,t));else{let a=i;a.fatal&&(a.continue=!1),a.code??(a.code="custom"),a.input??(a.input=n.value),a.inst??(a.inst=e),a.continue??(a.continue=!0),n.issues.push(ie.issue(a))}};let o=t.transform(n.value,n);return o instanceof Promise?o.then(i=>(n.value=i,n)):(n.value=o,n)}});function Sx(e){return new xx({type:"transform",transform:e})}var Pi=k("ZodOptional",(e,t)=>{$f.init(e,t),ye.init(e,t),e.unwrap=()=>e._zod.def.innerType});function Hm(e){return new Pi({type:"optional",innerType:e})}var Oc=k("ZodNullable",(e,t)=>{Uf.init(e,t),ye.init(e,t),e.unwrap=()=>e._zod.def.innerType});function Fm(e){return new Oc({type:"nullable",innerType:e})}var Pc=k("ZodDefault",(e,t)=>{Hf.init(e,t),ye.init(e,t),e.unwrap=()=>e._zod.def.innerType,e.removeDefault=e.unwrap});function _x(e,t){return new Pc({type:"default",innerType:e,get defaultValue(){return typeof t=="function"?t():t}})}var Tx=k("ZodPrefault",(e,t)=>{Ff.init(e,t),ye.init(e,t),e.unwrap=()=>e._zod.def.innerType});function Ax(e,t){return new Tx({type:"prefault",innerType:e,get defaultValue(){return typeof t=="function"?t():t}})}var Vm=k("ZodNonOptional",(e,t)=>{Gf.init(e,t),ye.init(e,t),e.unwrap=()=>e._zod.def.innerType});function kx(e,t){return new Vm({type:"nonoptional",innerType:e,...ie.normalizeParams(t)})}var Mc=k("ZodCatch",(e,t)=>{Zf.init(e,t),ye.init(e,t),e.unwrap=()=>e._zod.def.innerType,e.removeCatch=e.unwrap});function Ix(e,t){return new Mc({type:"catch",innerType:e,catchValue:typeof t=="function"?t:()=>t})}var zc=k("ZodPipe",(e,t)=>{Bf.init(e,t),ye.init(e,t),e.in=t.in,e.out=t.out});function Gm(e,t){return new zc({type:"pipe",in:e,out:t})}var Lc=k("ZodReadonly",(e,t)=>{Vf.init(e,t),ye.init(e,t)});function Rx(e){return new Lc({type:"readonly",innerType:e})}var jm=k("ZodLazy",(e,t)=>{jf.init(e,t),ye.init(e,t),e.unwrap=()=>e._zod.def.getter()});var Wm=k("ZodCustom",(e,t)=>{Wf.init(e,t),ye.init(e,t)});function Cx(e){let t=new De({check:"custom"});return t._zod.check=e,t}function Vn(e,t){return km(Wm,e??(()=>!0),t)}function Nx(e,t={}){return Im(Wm,e,t)}function Ox(e){let t=Cx(n=>(n.addIssue=r=>{if(typeof r=="string")n.issues.push(ie.issue(r,n.value,t._zod.def));else{let o=r;o.fatal&&(o.continue=!1),o.code??(o.code="custom"),o.input??(o.input=n.value),o.inst??(o.inst=t),o.continue??(o.continue=!t._zod.def.abort),n.issues.push(ie.issue(o))}},e(n.value,n)));return t}ze(Fn());var Mx=Qt(v),V=Vn(e=>typeof e=="object"&&e!==null&&!Array.isArray(e)),X=A(),qm=Qt(["developer","system","assistant","user"]),zx=P({type:$(v.TEXT_MESSAGE_START),timestamp:W().min(-9007199254740991).max(9007199254740991).optional(),rawEvent:Z().refine(e=>e!==null).optional(),metadata:V.optional(),subagentRunId:X.optional(),messageId:A(),role:qm.optional(),name:A().optional()}),Lx=P({type:$(v.TEXT_MESSAGE_CONTENT),timestamp:W().min(-9007199254740991).max(9007199254740991).optional(),rawEvent:Z().refine(e=>e!==null).optional(),metadata:V.optional(),subagentRunId:X.optional(),messageId:A(),delta:A()}),Dx=P({type:$(v.TEXT_MESSAGE_END),timestamp:W().min(-9007199254740991).max(9007199254740991).optional(),rawEvent:Z().refine(e=>e!==null).optional(),metadata:V.optional(),subagentRunId:X.optional(),messageId:A()}),Dc=P({type:$(v.TEXT_MESSAGE_CHUNK),timestamp:W().min(-9007199254740991).max(9007199254740991).optional(),rawEvent:Z().refine(e=>e!==null).optional(),metadata:V.optional(),subagentRunId:X.optional(),messageId:A().optional(),role:qm.optional(),delta:A().optional(),name:A().optional()}),$x=P({type:$(v.TOOL_CALL_START),timestamp:W().min(-9007199254740991).max(9007199254740991).optional(),rawEvent:Z().refine(e=>e!==null).optional(),metadata:V.optional(),subagentRunId:X.optional(),toolCallId:A(),toolCallName:A(),parentMessageId:A().optional()}),Ux=P({type:$(v.TOOL_CALL_ARGS),timestamp:W().min(-9007199254740991).max(9007199254740991).optional(),rawEvent:Z().refine(e=>e!==null).optional(),metadata:V.optional(),subagentRunId:X.optional(),toolCallId:A(),delta:A()}),Hx=P({type:$(v.TOOL_CALL_END),timestamp:W().min(-9007199254740991).max(9007199254740991).optional(),rawEvent:Z().refine(e=>e!==null).optional(),metadata:V.optional(),subagentRunId:X.optional(),toolCallId:A()}),$c=P({type:$(v.TOOL_CALL_CHUNK),timestamp:W().min(-9007199254740991).max(9007199254740991).optional(),rawEvent:Z().refine(e=>e!==null).optional(),metadata:V.optional(),subagentRunId:X.optional(),toolCallId:A().optional(),toolCallName:A().optional(),parentMessageId:A().optional(),delta:A().optional()}),Fx=P({type:$("text"),id:A().optional(),text:A(),metadata:Z().refine(e=>e!==null).optional()}),Gx=P({type:$("data"),value:A(),mimeType:A()}),Zx=P({type:$("url"),value:A(),mimeType:A().optional()}),Bx=P({type:$("file"),value:A(),provider:A().optional(),mimeType:A().optional()}),Mi=Ct("type",[Gx,Zx,Bx]),Vx=P({type:$("image"),id:A().optional(),source:Mi,metadata:Z().refine(e=>e!==null).optional()}),jx=P({type:$("audio"),id:A().optional(),source:Mi,metadata:Z().refine(e=>e!==null).optional()}),Wx=P({type:$("video"),id:A().optional(),source:Mi,metadata:Z().refine(e=>e!==null).optional()}),qx=P({type:$("document"),id:A().optional(),source:Mi,metadata:Z().refine(e=>e!==null).optional()}),Uc=Ct("type",[Fx,Vx,jx,Wx,qx]),Yx=P({type:$(v.TOOL_CALL_RESULT),timestamp:W().min(-9007199254740991).max(9007199254740991).optional(),rawEvent:Z().refine(e=>e!==null).optional(),metadata:V.optional(),subagentRunId:X.optional(),messageId:A(),toolCallId:A(),content:Pr([A(),Ae(Uc)]),role:$("tool").optional()}),Ym=Z(),Xx=P({type:$(v.STATE_SNAPSHOT),timestamp:W().min(-9007199254740991).max(9007199254740991).optional(),rawEvent:Z().refine(e=>e!==null).optional(),metadata:V.optional(),subagentRunId:X.optional(),snapshot:Ym.refine(e=>e!==void 0)}),Nt=A().regex(new RegExp("^(/([^/~]|~[01])*)*$")),Kx=P({op:$("add"),path:Nt,value:Z().refine(e=>e!==void 0)}).meta({specOpen:!0}),Jx=P({op:$("remove"),path:Nt}).meta({specOpen:!0}),Qx=P({op:$("replace"),path:Nt,value:Z().refine(e=>e!==void 0)}).meta({specOpen:!0}),eS=P({op:$("move"),from:Nt,path:Nt}).meta({specOpen:!0}),tS=P({op:$("copy"),from:Nt,path:Nt}).meta({specOpen:!0}),nS=P({op:$("test"),path:Nt,value:Z().refine(e=>e!==void 0)}).meta({specOpen:!0}),rS=Ct("op",[Kx,Jx,Qx,eS,tS,nS]),Xm=Ae(rS),oS=P({type:$(v.STATE_DELTA),timestamp:W().min(-9007199254740991).max(9007199254740991).optional(),rawEvent:Z().refine(e=>e!==null).optional(),metadata:V.optional(),subagentRunId:X.optional(),delta:Xm}),iS=P({subagentRunId:X.optional(),id:A(),role:$("developer"),name:A().optional(),encryptedValue:A().optional(),metadata:V.optional(),content:A()}),aS=P({subagentRunId:X.optional(),id:A(),role:$("system"),name:A().optional(),encryptedValue:A().optional(),metadata:V.optional(),content:A()}),sS=P({name:A(),arguments:A()}),lS=P({id:A(),type:$("function"),function:sS,encryptedValue:A().optional(),metadata:V.optional()}),cS=P({subagentRunId:X.optional(),id:A(),role:$("assistant"),name:A().optional(),encryptedValue:A().optional(),metadata:V.optional(),content:A().optional(),toolCalls:Ae(lS).optional()}),uS=P({subagentRunId:X.optional(),id:A(),role:$("user"),name:A().optional(),encryptedValue:A().optional(),metadata:V.optional(),content:Pr([A(),Ae(Uc)])}),dS=P({subagentRunId:X.optional(),id:A(),role:$("tool"),content:Pr([A(),Ae(Uc)]),toolCallId:A(),error:A().optional(),encryptedValue:A().optional(),metadata:V.optional()}),pS=P({subagentRunId:X.optional(),id:A(),role:$("activity"),activityType:A(),content:Vn(e=>typeof e=="object"&&e!==null&&!Array.isArray(e)),metadata:V.optional()}),hS=P({subagentRunId:X.optional(),id:A(),role:$("reasoning"),content:A(),encryptedValue:A().optional(),metadata:V.optional()}),Km=Ct("role",[iS,aS,cS,uS,dS,pS,hS]),fS=P({type:$(v.MESSAGES_SNAPSHOT),timestamp:W().min(-9007199254740991).max(9007199254740991).optional(),rawEvent:Z().refine(e=>e!==null).optional(),metadata:V.optional(),messages:Ae(Km)}),mS=P({type:$(v.ACTIVITY_SNAPSHOT),timestamp:W().min(-9007199254740991).max(9007199254740991).optional(),rawEvent:Z().refine(e=>e!==null).optional(),metadata:V.optional(),subagentRunId:X.optional(),messageId:A(),activityType:A(),content:Vn(e=>typeof e=="object"&&e!==null&&!Array.isArray(e)),replace:J().optional()}),gS=P({type:$(v.ACTIVITY_DELTA),timestamp:W().min(-9007199254740991).max(9007199254740991).optional(),rawEvent:Z().refine(e=>e!==null).optional(),metadata:V.optional(),subagentRunId:X.optional(),messageId:A(),activityType:A(),patch:Xm}),vS=P({type:$(v.RAW),timestamp:W().min(-9007199254740991).max(9007199254740991).optional(),rawEvent:Z().refine(e=>e!==null).optional(),metadata:V.optional(),subagentRunId:X.optional(),event:Z().refine(e=>e!==void 0),source:A().optional()}),bS=P({type:$(v.CUSTOM),timestamp:W().min(-9007199254740991).max(9007199254740991).optional(),rawEvent:Z().refine(e=>e!==null).optional(),metadata:V.optional(),subagentRunId:X.optional(),name:A(),value:Z().refine(e=>e!==void 0)}),Jm=P({name:A(),description:A(),parameters:Z().refine(e=>e!==null).optional(),metadata:V.optional()}),yS=P({description:A(),value:A()}),wS=P({interruptId:A(),status:Qt(["resolved","cancelled"]),payload:Z().refine(e=>e!==null).optional(),metadata:V.optional()}),zi=P({threadId:A(),runId:A(),protocolVersion:A().optional(),parentRunId:A().optional(),state:Ym.refine(e=>e!==null).nullable().transform(e=>e??void 0).optional(),messages:Ae(Km),tools:Ae(Jm).default(()=>[]),context:Ae(yS).default(()=>[]),forwardedProps:Z().refine(e=>e!==null).optional(),resume:Ae(wS).optional()}),ES=P({type:$(v.RUN_STARTED),timestamp:W().min(-9007199254740991).max(9007199254740991).optional(),rawEvent:Z().refine(e=>e!==null).optional(),metadata:V.optional(),threadId:A(),runId:A(),protocolVersion:A().optional(),parentRunId:A().optional(),input:zi.optional()}),xS=P({type:$("success"),pendingToolCallIds:Ae(A()).optional()}),SS=P({subagentRunId:X.optional(),id:A(),reason:A(),message:A().optional(),toolCallId:A().optional(),responseSchema:Vn(e=>typeof e=="object"&&e!==null&&!Array.isArray(e)).optional(),expiresAt:A().optional(),metadata:V.optional()}),_S=P({type:$("interrupt"),interrupts:Ae(SS).min(1)}),TS=P({type:$("cancelled")}),AS=Ct("type",[xS,_S,TS]),Qm=P({provider:A().optional(),model:A().optional(),inputTokens:W().min(0).max(9007199254740991).optional(),outputTokens:W().min(0).max(9007199254740991).optional(),totalTokens:W().min(0).max(9007199254740991).optional(),reasoningTokens:W().min(0).max(9007199254740991).optional(),cachedInputTokens:W().min(0).max(9007199254740991).optional(),cacheWriteInputTokens:W().min(0).max(9007199254740991).optional()}),kS=P({type:$(v.RUN_FINISHED),timestamp:W().min(-9007199254740991).max(9007199254740991).optional(),rawEvent:Z().refine(e=>e!==null).optional(),metadata:V.optional(),threadId:A(),runId:A(),result:Z().refine(e=>e!==null).optional(),outcome:AS.optional(),usage:Ae(Qm).optional()}),IS=P({type:$(v.RUN_ERROR),timestamp:W().min(-9007199254740991).max(9007199254740991).optional(),rawEvent:Z().refine(e=>e!==null).optional(),metadata:V.optional(),message:A(),code:A().optional(),usage:Ae(Qm).optional()}),RS=P({type:$(v.STEP_STARTED),timestamp:W().min(-9007199254740991).max(9007199254740991).optional(),rawEvent:Z().refine(e=>e!==null).optional(),metadata:V.optional(),subagentRunId:X.optional(),stepName:A()}),CS=P({type:$(v.STEP_FINISHED),timestamp:W().min(-9007199254740991).max(9007199254740991).optional(),rawEvent:Z().refine(e=>e!==null).optional(),metadata:V.optional(),subagentRunId:X.optional(),stepName:A()}),NS=P({type:$(v.REASONING_START),timestamp:W().min(-9007199254740991).max(9007199254740991).optional(),rawEvent:Z().refine(e=>e!==null).optional(),metadata:V.optional(),subagentRunId:X.optional(),messageId:A()}),OS=P({type:$(v.REASONING_MESSAGE_START),timestamp:W().min(-9007199254740991).max(9007199254740991).optional(),rawEvent:Z().refine(e=>e!==null).optional(),metadata:V.optional(),subagentRunId:X.optional(),messageId:A(),role:$("reasoning")}),PS=P({type:$(v.REASONING_MESSAGE_CONTENT),timestamp:W().min(-9007199254740991).max(9007199254740991).optional(),rawEvent:Z().refine(e=>e!==null).optional(),metadata:V.optional(),subagentRunId:X.optional(),messageId:A(),delta:A()}),MS=P({type:$(v.REASONING_MESSAGE_END),timestamp:W().min(-9007199254740991).max(9007199254740991).optional(),rawEvent:Z().refine(e=>e!==null).optional(),metadata:V.optional(),subagentRunId:X.optional(),messageId:A()}),Hc=P({type:$(v.REASONING_MESSAGE_CHUNK),timestamp:W().min(-9007199254740991).max(9007199254740991).optional(),rawEvent:Z().refine(e=>e!==null).optional(),metadata:V.optional(),subagentRunId:X.optional(),messageId:A().optional(),delta:A().optional()}),zS=P({type:$(v.REASONING_END),timestamp:W().min(-9007199254740991).max(9007199254740991).optional(),rawEvent:Z().refine(e=>e!==null).optional(),metadata:V.optional(),subagentRunId:X.optional(),messageId:A()}),LS=Qt(["tool-call","message"]),DS=P({type:$(v.REASONING_ENCRYPTED_VALUE),timestamp:W().min(-9007199254740991).max(9007199254740991).optional(),rawEvent:Z().refine(e=>e!==null).optional(),metadata:V.optional(),subagentRunId:X.optional(),subtype:LS,entityId:A(),encryptedValue:A()}),$S=P({type:$(v.SUBAGENT_STARTED),timestamp:W().min(-9007199254740991).max(9007199254740991).optional(),rawEvent:Z().refine(e=>e!==null).optional(),metadata:V.optional(),subagentRunId:X,name:A(),description:A().optional(),parentSubagentRunId:X.optional(),parentToolCallId:A().optional(),parentMessageId:A().optional()}),US=P({type:$("success")}),HS=P({type:$("suspended"),interruptIds:Ae(A()).optional()}),FS=Ct("type",[US,HS]),GS=P({type:$(v.SUBAGENT_FINISHED),timestamp:W().min(-9007199254740991).max(9007199254740991).optional(),rawEvent:Z().refine(e=>e!==null).optional(),metadata:V.optional(),subagentRunId:X,result:Z().refine(e=>e!==null).optional(),outcome:FS.optional()}),ZS=P({type:$(v.SUBAGENT_ERROR),timestamp:W().min(-9007199254740991).max(9007199254740991).optional(),rawEvent:Z().refine(e=>e!==null).optional(),metadata:V.optional(),subagentRunId:X,message:A(),code:A().optional()}),Fc=Ct("type",[zx,Lx,Dx,Dc,$x,Ux,Hx,$c,Yx,Xx,oS,fS,mS,gS,vS,bS,ES,kS,IS,RS,CS,NS,OS,PS,MS,Hc,zS,DS,$S,GS,ZS]),$P=Qt(["developer","system","assistant","user","tool","activity","reasoning"]),BS=P({name:A(),description:A().optional()}),VS=P({name:A().optional(),type:A().optional(),description:A().optional(),version:A().optional(),provider:A().optional(),documentationUrl:A().optional(),metadata:V.optional()}),jS=P({streaming:J().optional(),websocket:J().optional(),httpBinary:J().optional(),pushNotifications:J().optional(),resumable:J().optional()}),WS=P({supported:J().optional(),items:Ae(Jm).optional(),parallelCalls:J().optional(),clientProvided:J().optional()}),qS=P({structuredOutput:J().optional(),supportedMimeTypes:Ae(A()).optional()}),YS=P({snapshots:J().optional(),deltas:J().optional(),memory:J().optional(),persistentState:J().optional()}),XS=P({supported:J().optional(),delegation:J().optional(),handoffs:J().optional(),subagents:Ae(BS).optional()}),KS=P({supported:J().optional(),streaming:J().optional(),encrypted:J().optional()}),JS=P({image:J().optional(),audio:J().optional(),video:J().optional(),pdf:J().optional(),file:J().optional()}),QS=P({image:J().optional(),audio:J().optional()}),e0=P({input:JS.optional(),output:QS.optional()}),t0=P({codeExecution:J().optional(),sandboxed:J().optional(),maxIterations:W().min(0).max(9007199254740991).optional(),maxExecutionTime:W().min(0).max(9007199254740991).optional()}),n0=P({supported:J().optional(),approvals:J().optional(),interventions:J().optional(),feedback:J().optional(),interrupts:J().optional(),approveWithEdits:J().optional()}),UP=P({identity:VS.optional(),transport:jS.optional(),tools:WS.optional(),output:qS.optional(),state:YS.optional(),multiAgent:XS.optional(),reasoning:KS.optional(),multimodal:e0.optional(),execution:t0.optional(),humanInTheLoop:n0.optional(),custom:Vn(e=>typeof e=="object"&&e!==null&&!Array.isArray(e)).optional()}),HP=P({subagentRunId:X.optional()}),FP=P({type:Mx,timestamp:W().min(-9007199254740991).max(9007199254740991).optional(),rawEvent:Z().refine(e=>e!==null).optional(),metadata:V.optional()}),GP=P({subagentRunId:X.optional(),id:A(),role:A(),name:A().optional(),encryptedValue:A().optional(),metadata:V.optional()}),ZP=V.optional();ze(Fn());function tg(){let e=this.buf,t=this.pos,n=0,r=0;for(let i=0;i<28;i+=7){let a=e[t++];if(n|=(a&127)<<i,(a&128)==0){this.pos=t,this.assertBounds(),this.varint64Lo=n,this.varint64Hi=r;return}}let o=e[t++];if(n|=(o&15)<<28,r=(o&112)>>4,(o&128)==0){this.pos=t,this.assertBounds(),this.varint64Lo=n,this.varint64Hi=r;return}for(let i=3;i<=31;i+=7){let a=e[t++];if(r|=(a&127)<<i,(a&128)==0){this.pos=t,this.assertBounds(),this.varint64Lo=n,this.varint64Hi=r;return}}throw new Error("invalid varint")}var Li=4294967296;function Gc(e){let t=e[0]==="-";t&&(e=e.slice(1));let n=1e6,r=0,o=0;function i(a,s){let c=Number(e.slice(a,s));o*=n,r=r*n+c,r>=Li&&(o=o+(r/Li|0),r=r%Li)}return i(-24,-18),i(-18,-12),i(-12,-6),i(-6),t?rg(r,o):Bc(r,o)}function ng(e,t){let n=Bc(e,t),r=n.hi&2147483648;r&&(n=rg(n.lo,n.hi));let o=Zc(n.lo,n.hi);return r?"-"+o:o}function Zc(e,t){if({lo:e,hi:t}=r0(e,t),t<=2097151)return String(Li*t+e);let n=e&16777215,r=(e>>>24|t<<8)&16777215,o=t>>16&65535,i=n+r*6777216+o*6710656,a=r+o*8147497,s=o*2,c=1e7;return i>=c&&(a+=Math.floor(i/c),i%=c),a>=c&&(s+=Math.floor(a/c),a%=c),s.toString()+eg(a)+eg(i)}function r0(e,t){return{lo:e>>>0,hi:t>>>0}}function Bc(e,t){return{lo:e|0,hi:t|0}}function rg(e,t){return t=~t,e?e=~e+1:t+=1,Bc(e,t)}var eg=e=>{let t=String(e);return"0000000".slice(t.length)+t};function og(){let e=this.buf[this.pos++];if((e&128)===0)return this.assertBounds(),e;let t=e&127;if(e=this.buf[this.pos++],t|=(e&127)<<7,(e&128)===0)return this.assertBounds(),t;if(e=this.buf[this.pos++],t|=(e&127)<<14,(e&128)===0)return this.assertBounds(),t;if(e=this.buf[this.pos++],t|=(e&127)<<21,(e&128)===0)return this.assertBounds(),t;e=this.buf[this.pos++],t|=(e&15)<<28;for(let n=5;(e&128)!==0&&n<10;n++)e=this.buf[this.pos++];if((e&128)!==0)throw new Error("invalid varint");return this.assertBounds(),t>>>0}var lt=o0();function o0(){let e=new DataView(new ArrayBuffer(8));if(typeof BigInt=="function"&&typeof e.getBigInt64=="function"&&typeof e.getBigUint64=="function"&&typeof e.setBigInt64=="function"&&typeof e.setBigUint64=="function"&&(!!globalThis.Deno||!!globalThis.Bun||typeof process!="object"||typeof process.env!="object"||process.env.BUF_BIGINT_DISABLE!=="1")){let n=BigInt("-9223372036854775808"),r=BigInt("9223372036854775807"),o=BigInt("0"),i=BigInt("18446744073709551615");return{zero:BigInt(0),supported:!0,parse(a){let s=typeof a=="bigint"?a:BigInt(a);if(s>r||s<n)throw new Error(`invalid int64: ${a}`);return s},uParse(a){let s=typeof a=="bigint"?a:BigInt(a);if(s>i||s<o)throw new Error(`invalid uint64: ${a}`);return s},enc(a){return e.setBigInt64(0,this.parse(a),!0),{lo:e.getInt32(0,!0),hi:e.getInt32(4,!0)}},uEnc(a){return e.setBigInt64(0,this.uParse(a),!0),{lo:e.getInt32(0,!0),hi:e.getInt32(4,!0)}},dec(a,s){return e.setInt32(0,a,!0),e.setInt32(4,s,!0),e.getBigInt64(0,!0)},uDec(a,s){return e.setInt32(0,a,!0),e.setInt32(4,s,!0),e.getBigUint64(0,!0)}}}return{zero:"0",supported:!1,parse(n){return typeof n!="string"&&(n=n.toString()),ig(n),n},uParse(n){return typeof n!="string"&&(n=n.toString()),ag(n),n},enc(n){return typeof n!="string"&&(n=n.toString()),ig(n),Gc(n)},uEnc(n){return typeof n!="string"&&(n=n.toString()),ag(n),Gc(n)},dec(n,r){return ng(n,r)},uDec(n,r){return Zc(n,r)}}}function ig(e){if(!/^-?[0-9]+$/.test(e))throw new Error("invalid int64: "+e)}function ag(e){if(!/^[0-9]+$/.test(e))throw new Error("invalid uint64: "+e)}var Vc=Symbol.for("@bufbuild/protobuf/text-encoding");function i0(e){var t;globalThis[Vc]=Object.assign(Object.assign({},e),{encodeUtf8Into:(t=e.encodeUtf8Into)!==null&&t!==void 0?t:Wc(e.encodeUtf8.bind(e))})}function jc(){let e=globalThis;if(!e[Vc]){let t=new e.TextEncoder,n=new e.TextDecoder,r,o={encodeUtf8(a){return t.encode(a)},decodeUtf8(a,s){return s?(r||(r=new e.TextDecoder("utf-8",{fatal:!0})),r.decode(a)):n.decode(a)},checkUtf8(a){try{return encodeURIComponent(a),!0}catch{return!1}}};t.encodeInto&&(o.encodeUtf8Into=t.encodeInto.bind(t));let i=String.prototype.isWellFormed;i&&(o.checkUtf8=a=>i.call(a)),i0(o)}return e[Vc]}function Wc(e){return(t,n)=>{let r=e(t);return n.set(r),{written:r.byteLength}}}var Ot;(function(e){e[e.Varint=0]="Varint",e[e.Bit64=1]="Bit64",e[e.LengthDelimited=2]="LengthDelimited",e[e.StartGroup=3]="StartGroup",e[e.EndGroup=4]="EndGroup",e[e.Bit32=5]="Bit32"})(Ot||(Ot={}));var a0=34028234663852886e22,s0=-34028234663852886e22,l0=4294967295,c0=2147483647,u0=-2147483648,U=class{constructor(t){this.stackPos=[],this.encodeUtf8Into=t?Wc(t):jc().encodeUtf8Into,this.buffer=lg,this.viewCache=p0,this.pos=0}ensureCapacity(t){let n=this.pos+t;if(n>this.buffer.length){let r=this.buffer.length||d0;for(;r<n;)r*=2;let o=new Uint8Array(r);this.pos>0&&o.set(this.buffer),this.buffer=o}}view(){let t=this.buffer,n=this.viewCache;if(n.byteLength===t.byteLength)return n;let r=new DataView(t.buffer);return this.viewCache=r,r}finish(){let t=this.buffer.slice(0,this.pos);return this.pos=0,this.stackPos=[],t}fork(){return this.stackPos.push(this.pos),this.ensureCapacity(Mr),this.buffer[this.pos++]=0,this}join(){let t=this.stackPos.pop();if(t===void 0)throw new Error("invalid state, fork stack empty");let n=this.pos-t-Mr,r=qc(n);return r>Mr&&(this.ensureCapacity(r-Mr),this.buffer.copyWithin(t+r,t+Mr,this.pos)),this.pos=t,this.uint32(n),this.pos+=n,this}tag(t,n){return this.uint32((t<<3|n)>>>0)}raw(t){return this.ensureCapacity(t.length),this.buffer.set(t,this.pos),this.pos+=t.length,this}uint32(t){if(sg(t),this.ensureCapacity(5),t<128)return this.buffer[this.pos++]=t,this;for(;t>127;)this.buffer[this.pos++]=t&127|128,t>>>=7;return this.buffer[this.pos++]=t,this}int32(t){if(Yc(t),t>=0)return this.uint32(t);this.ensureCapacity(10);for(let n=0;n<9;n++)this.buffer[this.pos++]=t&127|128,t>>=7;return this.buffer[this.pos++]=1,this}bool(t){return this.ensureCapacity(1),this.buffer[this.pos++]=t?1:0,this}bytes(t){return this.uint32(t.byteLength),this.raw(t)}string(t){typeof t!="string"&&(t=String(t));let n=t.length;if(n<=cg){this.ensureCapacity(n+1);let c=this.buffer,l=this.pos;c[l++]=n;let u=0;for(;u<n;u++){let m=t.charCodeAt(u);if(m>127)break;c[l++]=m}if(u==n)return this.pos=l,this}this.ensureCapacity(n*3+5);let r=qc(n),o=this.buffer,i=this.pos,{written:a}=this.encodeUtf8Into(t,o.subarray(i+r)),s=qc(a);return s!=r&&o.copyWithin(i+s,i+r,i+r+a),this.uint32(a),this.pos+=a,this}float(t){return h0(t),this.ensureCapacity(4),this.view().setFloat32(this.pos,t,!0),this.pos+=4,this}double(t){return this.ensureCapacity(8),this.view().setFloat64(this.pos,t,!0),this.pos+=8,this}fixed32(t){return sg(t),this.ensureCapacity(4),this.view().setUint32(this.pos,t,!0),this.pos+=4,this}sfixed32(t){return Yc(t),this.ensureCapacity(4),this.view().setInt32(this.pos,t,!0),this.pos+=4,this}sint32(t){return Yc(t),this.uint32((t<<1^t>>31)>>>0)}sfixed64(t){let n=lt.enc(t);this.ensureCapacity(8);let r=this.view();return r.setInt32(this.pos,n.lo,!0),r.setInt32(this.pos+4,n.hi,!0),this.pos+=8,this}fixed64(t){let n=lt.uEnc(t);this.ensureCapacity(8);let r=this.view();return r.setInt32(this.pos,n.lo,!0),r.setInt32(this.pos+4,n.hi,!0),this.pos+=8,this}int64(t){let n=lt.enc(t);return this.writeVarint64(n.lo,n.hi)}sint64(t){let n=lt.enc(t),r=n.hi>>31,o=n.lo<<1^r,i=(n.hi<<1|n.lo>>>31)^r;return this.writeVarint64(o,i)}uint64(t){let n=lt.uEnc(t);return this.writeVarint64(n.lo,n.hi)}writeVarint64(t,n){this.ensureCapacity(10);let r=this.buffer,o=this.pos;for(let s=0;s<28;s=s+7){let c=t>>>s,l=!(!(c>>>7)&&n==0);if(r[o++]=(l?c|128:c)&255,!l)return this.pos=o,this}let i=t>>>28&15|(n&7)<<4,a=n>>3!=0;if(r[o++]=(a?i|128:i)&255,!a)return this.pos=o,this;for(let s=3;s<31;s=s+7){let c=n>>>s,l=!!(c>>>7);if(r[o++]=(l?c|128:c)&255,!l)return this.pos=o,this}return r[o++]=n>>>31&1,this.pos=o,this}},d0=128,Mr=1,lg=new Uint8Array(0),p0=new DataView(lg.buffer),cg=32;function qc(e){return e<128?1:e<16384?2:e<2097152?3:e<268435456?4:5}var R=class{constructor(t,n=jc().decodeUtf8){this.decodeUtf8=n,this.varint64Lo=0,this.varint64Hi=0,this.varint64=tg,this.uint32=og,this.buf=t,this.len=t.length,this.pos=0,this.view=new DataView(t.buffer,t.byteOffset,t.byteLength)}tag(){let t=this.pos,n=this.uint32(),r=this.pos-t;if(r>5||r==5&&this.buf[this.pos-1]>15)throw new Error("illegal tag: varint overflows uint32");let o=n>>>3,i=n&7;if(o<=0||i>5)throw new Error("illegal tag: field no "+o+" wire type "+i);return[o,i]}skip(t,n,r=100){let o=this.pos;switch(t){case Ot.Varint:for(;this.buf[this.pos++]&128;);break;case Ot.Bit64:this.pos+=4;case Ot.Bit32:this.pos+=4;break;case Ot.LengthDelimited:let i=this.uint32();this.pos+=i;break;case Ot.StartGroup:if(r<=0)throw new Error("maximum recursion depth reached");for(;;){let[a,s]=this.tag();if(s===Ot.EndGroup){if(n!==void 0&&a!==n)throw new Error("invalid end group tag");break}this.skip(s,a,r-1)}break;default:throw new Error("cant skip wire type "+t)}return this.assertBounds(),this.buf.subarray(o,this.pos)}assertBounds(){if(this.pos>this.len)throw new RangeError("premature EOF")}int32(){return this.uint32()|0}sint32(){let t=this.uint32();return t>>>1^-(t&1)}int64(){return this.varint64(),lt.dec(this.varint64Lo,this.varint64Hi)}uint64(){return this.varint64(),lt.uDec(this.varint64Lo,this.varint64Hi)}sint64(){this.varint64();let t=this.varint64Lo,n=this.varint64Hi,r=-(t&1);return t=(t>>>1|(n&1)<<31)^r,n=n>>>1^r,lt.dec(t,n)}bool(){let t=this.buf[this.pos];return t<128?(this.pos++,t!==0):(this.varint64(),this.varint64Lo!==0||this.varint64Hi!==0)}fixed32(){return this.view.getUint32((this.pos+=4)-4,!0)}sfixed32(){return this.view.getInt32((this.pos+=4)-4,!0)}fixed64(){return lt.uDec(this.sfixed32(),this.sfixed32())}sfixed64(){return lt.dec(this.sfixed32(),this.sfixed32())}float(){return this.view.getFloat32((this.pos+=4)-4,!0)}double(){return this.view.getFloat64((this.pos+=8)-8,!0)}bytes(){let t=this.uint32(),n=this.pos;return this.pos+=t,this.assertBounds(),this.buf.subarray(n,n+t)}string(t){let n=this.bytes(),r=n.length;if(r<=cg){let o=new Array(r);for(let i=0;i<r;i++){let a=n[i];if(a>127)return this.decodeUtf8(n,t);o[i]=a}return String.fromCharCode.apply(String,o)}return this.decodeUtf8(n,t)}};function Yc(e){if(typeof e=="string")e=Number(e);else if(typeof e!="number")throw new Error("invalid int32: "+typeof e);if(!Number.isInteger(e)||e>c0||e<u0)throw new Error("invalid int32: "+e)}function sg(e){if(typeof e=="string")e=Number(e);else if(typeof e!="number")throw new Error("invalid uint32: "+typeof e);if(!Number.isInteger(e)||e>l0||e<0)throw new Error("invalid uint32: "+e)}function h0(e){if(typeof e=="string"){let t=e;if(e=Number(e),Number.isNaN(e)&&t!=="NaN")throw new Error("invalid float32: "+t)}else if(typeof e!="number")throw new Error("invalid float32: "+typeof e);if(Number.isFinite(e)&&(e>a0||e<s0))throw new Error("invalid float32: "+e)}var f0=(function(e){return e[e.NULL_VALUE=0]="NULL_VALUE",e[e.UNRECOGNIZED=-1]="UNRECOGNIZED",e})({});function Xc(){return{fields:{}}}var ee={encode(e,t=new U){return Object.entries(e.fields).forEach(([n,r])=>{r!==void 0&&Qc.encode({key:n,value:r},t.uint32(10).fork()).join()}),t},decode(e,t){let n=e instanceof R?e:new R(e),r=t===void 0?n.len:n.pos+t,o=Xc();for(;n.pos<r;){let i=n.uint32();switch(i>>>3){case 1:{if(i!==10)break;let a=Qc.decode(n,n.uint32());a.value!==void 0&&(o.fields[a.key]=a.value);continue}}if((i&7)===4||i===0)break;n.skip(i&7)}return o},create(e){return ee.fromPartial(e??{})},fromPartial(e){let t=Xc();return t.fields=Object.entries(e.fields??{}).reduce((n,[r,o])=>(o!==void 0&&(n[r]=o),n),{}),t},wrap(e){let t=Xc();if(e!==void 0)for(let n of Object.keys(e))t.fields[n]=e[n];return t},unwrap(e){let t={};if(e.fields)for(let n of Object.keys(e.fields))t[n]=e.fields[n];return t}};function ug(){return{key:"",value:void 0}}var Qc={encode(e,t=new U){return e.key!==""&&t.uint32(10).string(e.key),e.value!==void 0&&M.encode(M.wrap(e.value),t.uint32(18).fork()).join(),t},decode(e,t){let n=e instanceof R?e:new R(e),r=t===void 0?n.len:n.pos+t,o=ug();for(;n.pos<r;){let i=n.uint32();switch(i>>>3){case 1:if(i!==10)break;o.key=n.string();continue;case 2:if(i!==18)break;o.value=M.unwrap(M.decode(n,n.uint32()));continue}if((i&7)===4||i===0)break;n.skip(i&7)}return o},create(e){return Qc.fromPartial(e??{})},fromPartial(e){let t=ug();return t.key=e.key??"",t.value=e.value??void 0,t}};function Kc(){return{nullValue:void 0,numberValue:void 0,stringValue:void 0,boolValue:void 0,structValue:void 0,listValue:void 0}}var M={encode(e,t=new U){return e.nullValue!==void 0&&t.uint32(8).int32(e.nullValue),e.numberValue!==void 0&&t.uint32(17).double(e.numberValue),e.stringValue!==void 0&&t.uint32(26).string(e.stringValue),e.boolValue!==void 0&&t.uint32(32).bool(e.boolValue),e.structValue!==void 0&&ee.encode(ee.wrap(e.structValue),t.uint32(42).fork()).join(),e.listValue!==void 0&&zr.encode(zr.wrap(e.listValue),t.uint32(50).fork()).join(),t},decode(e,t){let n=e instanceof R?e:new R(e),r=t===void 0?n.len:n.pos+t,o=Kc();for(;n.pos<r;){let i=n.uint32();switch(i>>>3){case 1:if(i!==8)break;o.nullValue=n.int32();continue;case 2:if(i!==17)break;o.numberValue=n.double();continue;case 3:if(i!==26)break;o.stringValue=n.string();continue;case 4:if(i!==32)break;o.boolValue=n.bool();continue;case 5:if(i!==42)break;o.structValue=ee.unwrap(ee.decode(n,n.uint32()));continue;case 6:if(i!==50)break;o.listValue=zr.unwrap(zr.decode(n,n.uint32()));continue}if((i&7)===4||i===0)break;n.skip(i&7)}return o},create(e){return M.fromPartial(e??{})},fromPartial(e){let t=Kc();return t.nullValue=e.nullValue??void 0,t.numberValue=e.numberValue??void 0,t.stringValue=e.stringValue??void 0,t.boolValue=e.boolValue??void 0,t.structValue=e.structValue??void 0,t.listValue=e.listValue??void 0,t},wrap(e){let t=Kc();if(e===null)t.nullValue=f0.NULL_VALUE;else if(typeof e=="boolean")t.boolValue=e;else if(typeof e=="number")t.numberValue=e;else if(typeof e=="string")t.stringValue=e;else if(globalThis.Array.isArray(e))t.listValue=e;else if(typeof e=="object")t.structValue=e;else if(typeof e<"u")throw new globalThis.Error("Unsupported any value type: "+typeof e);return t},unwrap(e){if(e.stringValue!==void 0)return e.stringValue;if(e?.numberValue!==void 0)return e.numberValue;if(e?.boolValue!==void 0)return e.boolValue;if(e?.structValue!==void 0)return e.structValue;if(e?.listValue!==void 0)return e.listValue;if(e?.nullValue!==void 0)return null}};function Jc(){return{values:[]}}var zr={encode(e,t=new U){for(let n of e.values)M.encode(M.wrap(n),t.uint32(10).fork()).join();return t},decode(e,t){let n=e instanceof R?e:new R(e),r=t===void 0?n.len:n.pos+t,o=Jc();for(;n.pos<r;){let i=n.uint32();switch(i>>>3){case 1:if(i!==10)break;o.values.push(M.unwrap(M.decode(n,n.uint32())));continue}if((i&7)===4||i===0)break;n.skip(i&7)}return o},create(e){return zr.fromPartial(e??{})},fromPartial(e){let t=Jc();return t.values=e.values?.map(n=>n)||[],t},wrap(e){let t=Jc();return t.values=e??[],t},unwrap(e){return e?.hasOwnProperty("values")&&globalThis.Array.isArray(e.values)?e.values:e}},dg=(function(e){return e[e.ADD=0]="ADD",e[e.REMOVE=1]="REMOVE",e[e.REPLACE=2]="REPLACE",e[e.MOVE=3]="MOVE",e[e.COPY=4]="COPY",e[e.TEST=5]="TEST",e[e.UNRECOGNIZED=-1]="UNRECOGNIZED",e})({});function pg(){return{op:0,path:"",from:void 0,value:void 0}}var nn={encode(e,t=new U){return e.op!==0&&t.uint32(8).int32(e.op),e.path!==""&&t.uint32(18).string(e.path),e.from!==void 0&&t.uint32(26).string(e.from),e.value!==void 0&&M.encode(M.wrap(e.value),t.uint32(34).fork()).join(),t},decode(e,t){let n=e instanceof R?e:new R(e),r=t===void 0?n.len:n.pos+t,o=pg();for(;n.pos<r;){let i=n.uint32();switch(i>>>3){case 1:if(i!==8)break;o.op=n.int32();continue;case 2:if(i!==18)break;o.path=n.string();continue;case 3:if(i!==26)break;o.from=n.string();continue;case 4:if(i!==34)break;o.value=M.unwrap(M.decode(n,n.uint32()));continue}if((i&7)===4||i===0)break;n.skip(i&7)}return o},create(e){return nn.fromPartial(e??{})},fromPartial(e){let t=pg();return t.op=e.op??0,t.path=e.path??"",t.from=e.from??void 0,t.value=e.value??void 0,t}};function hg(){return{text:"",id:void 0,metadata:void 0}}var Di={encode(e,t=new U){return e.text!==""&&t.uint32(10).string(e.text),e.id!==void 0&&t.uint32(18).string(e.id),e.metadata!==void 0&&M.encode(M.wrap(e.metadata),t.uint32(26).fork()).join(),t},decode(e,t){let n=e instanceof R?e:new R(e),r=t===void 0?n.len:n.pos+t,o=hg();for(;n.pos<r;){let i=n.uint32();switch(i>>>3){case 1:if(i!==10)break;o.text=n.string();continue;case 2:if(i!==18)break;o.id=n.string();continue;case 3:if(i!==26)break;o.metadata=M.unwrap(M.decode(n,n.uint32()));continue}if((i&7)===4||i===0)break;n.skip(i&7)}return o},create(e){return Di.fromPartial(e??{})},fromPartial(e){let t=hg();return t.text=e.text??"",t.id=e.id??void 0,t.metadata=e.metadata??void 0,t}};function fg(){return{source:void 0,metadata:void 0,id:void 0}}var $i={encode(e,t=new U){return e.source!==void 0&&qe.encode(e.source,t.uint32(10).fork()).join(),e.metadata!==void 0&&M.encode(M.wrap(e.metadata),t.uint32(18).fork()).join(),e.id!==void 0&&t.uint32(26).string(e.id),t},decode(e,t){let n=e instanceof R?e:new R(e),r=t===void 0?n.len:n.pos+t,o=fg();for(;n.pos<r;){let i=n.uint32();switch(i>>>3){case 1:if(i!==10)break;o.source=qe.decode(n,n.uint32());continue;case 2:if(i!==18)break;o.metadata=M.unwrap(M.decode(n,n.uint32()));continue;case 3:if(i!==26)break;o.id=n.string();continue}if((i&7)===4||i===0)break;n.skip(i&7)}return o},create(e){return $i.fromPartial(e??{})},fromPartial(e){let t=fg();return t.source=e.source!==void 0&&e.source!==null?qe.fromPartial(e.source):void 0,t.metadata=e.metadata??void 0,t.id=e.id??void 0,t}};function mg(){return{value:"",mimeType:""}}var Ui={encode(e,t=new U){return e.value!==""&&t.uint32(10).string(e.value),e.mimeType!==""&&t.uint32(18).string(e.mimeType),t},decode(e,t){let n=e instanceof R?e:new R(e),r=t===void 0?n.len:n.pos+t,o=mg();for(;n.pos<r;){let i=n.uint32();switch(i>>>3){case 1:if(i!==10)break;o.value=n.string();continue;case 2:if(i!==18)break;o.mimeType=n.string();continue}if((i&7)===4||i===0)break;n.skip(i&7)}return o},create(e){return Ui.fromPartial(e??{})},fromPartial(e){let t=mg();return t.value=e.value??"",t.mimeType=e.mimeType??"",t}};function gg(){return{value:"",mimeType:void 0}}var Hi={encode(e,t=new U){return e.value!==""&&t.uint32(10).string(e.value),e.mimeType!==void 0&&t.uint32(18).string(e.mimeType),t},decode(e,t){let n=e instanceof R?e:new R(e),r=t===void 0?n.len:n.pos+t,o=gg();for(;n.pos<r;){let i=n.uint32();switch(i>>>3){case 1:if(i!==10)break;o.value=n.string();continue;case 2:if(i!==18)break;o.mimeType=n.string();continue}if((i&7)===4||i===0)break;n.skip(i&7)}return o},create(e){return Hi.fromPartial(e??{})},fromPartial(e){let t=gg();return t.value=e.value??"",t.mimeType=e.mimeType??void 0,t}};function vg(){return{value:"",provider:void 0,mimeType:void 0}}var Fi={encode(e,t=new U){return e.value!==""&&t.uint32(10).string(e.value),e.provider!==void 0&&t.uint32(18).string(e.provider),e.mimeType!==void 0&&t.uint32(26).string(e.mimeType),t},decode(e,t){let n=e instanceof R?e:new R(e),r=t===void 0?n.len:n.pos+t,o=vg();for(;n.pos<r;){let i=n.uint32();switch(i>>>3){case 1:if(i!==10)break;o.value=n.string();continue;case 2:if(i!==18)break;o.provider=n.string();continue;case 3:if(i!==26)break;o.mimeType=n.string();continue}if((i&7)===4||i===0)break;n.skip(i&7)}return o},create(e){return Fi.fromPartial(e??{})},fromPartial(e){let t=vg();return t.value=e.value??"",t.provider=e.provider??void 0,t.mimeType=e.mimeType??void 0,t}};function bg(){return{data:void 0,url:void 0,file:void 0}}var qe={encode(e,t=new U){return e.data!==void 0&&Ui.encode(e.data,t.uint32(10).fork()).join(),e.url!==void 0&&Hi.encode(e.url,t.uint32(18).fork()).join(),e.file!==void 0&&Fi.encode(e.file,t.uint32(26).fork()).join(),t},decode(e,t){let n=e instanceof R?e:new R(e),r=t===void 0?n.len:n.pos+t,o=bg();for(;n.pos<r;){let i=n.uint32();switch(i>>>3){case 1:if(i!==10)break;o.data=Ui.decode(n,n.uint32());continue;case 2:if(i!==18)break;o.url=Hi.decode(n,n.uint32());continue;case 3:if(i!==26)break;o.file=Fi.decode(n,n.uint32());continue}if((i&7)===4||i===0)break;n.skip(i&7)}return o},create(e){return qe.fromPartial(e??{})},fromPartial(e){let t=bg();return t.data=e.data!==void 0&&e.data!==null?Ui.fromPartial(e.data):void 0,t.url=e.url!==void 0&&e.url!==null?Hi.fromPartial(e.url):void 0,t.file=e.file!==void 0&&e.file!==null?Fi.fromPartial(e.file):void 0,t}};function yg(){return{source:void 0,metadata:void 0,id:void 0}}var Gi={encode(e,t=new U){return e.source!==void 0&&qe.encode(e.source,t.uint32(10).fork()).join(),e.metadata!==void 0&&M.encode(M.wrap(e.metadata),t.uint32(18).fork()).join(),e.id!==void 0&&t.uint32(26).string(e.id),t},decode(e,t){let n=e instanceof R?e:new R(e),r=t===void 0?n.len:n.pos+t,o=yg();for(;n.pos<r;){let i=n.uint32();switch(i>>>3){case 1:if(i!==10)break;o.source=qe.decode(n,n.uint32());continue;case 2:if(i!==18)break;o.metadata=M.unwrap(M.decode(n,n.uint32()));continue;case 3:if(i!==26)break;o.id=n.string();continue}if((i&7)===4||i===0)break;n.skip(i&7)}return o},create(e){return Gi.fromPartial(e??{})},fromPartial(e){let t=yg();return t.source=e.source!==void 0&&e.source!==null?qe.fromPartial(e.source):void 0,t.metadata=e.metadata??void 0,t.id=e.id??void 0,t}};function wg(){return{source:void 0,metadata:void 0,id:void 0}}var Zi={encode(e,t=new U){return e.source!==void 0&&qe.encode(e.source,t.uint32(10).fork()).join(),e.metadata!==void 0&&M.encode(M.wrap(e.metadata),t.uint32(18).fork()).join(),e.id!==void 0&&t.uint32(26).string(e.id),t},decode(e,t){let n=e instanceof R?e:new R(e),r=t===void 0?n.len:n.pos+t,o=wg();for(;n.pos<r;){let i=n.uint32();switch(i>>>3){case 1:if(i!==10)break;o.source=qe.decode(n,n.uint32());continue;case 2:if(i!==18)break;o.metadata=M.unwrap(M.decode(n,n.uint32()));continue;case 3:if(i!==26)break;o.id=n.string();continue}if((i&7)===4||i===0)break;n.skip(i&7)}return o},create(e){return Zi.fromPartial(e??{})},fromPartial(e){let t=wg();return t.source=e.source!==void 0&&e.source!==null?qe.fromPartial(e.source):void 0,t.metadata=e.metadata??void 0,t.id=e.id??void 0,t}};function Eg(){return{source:void 0,metadata:void 0,id:void 0}}var Bi={encode(e,t=new U){return e.source!==void 0&&qe.encode(e.source,t.uint32(10).fork()).join(),e.metadata!==void 0&&M.encode(M.wrap(e.metadata),t.uint32(18).fork()).join(),e.id!==void 0&&t.uint32(26).string(e.id),t},decode(e,t){let n=e instanceof R?e:new R(e),r=t===void 0?n.len:n.pos+t,o=Eg();for(;n.pos<r;){let i=n.uint32();switch(i>>>3){case 1:if(i!==10)break;o.source=qe.decode(n,n.uint32());continue;case 2:if(i!==18)break;o.metadata=M.unwrap(M.decode(n,n.uint32()));continue;case 3:if(i!==26)break;o.id=n.string();continue}if((i&7)===4||i===0)break;n.skip(i&7)}return o},create(e){return Bi.fromPartial(e??{})},fromPartial(e){let t=Eg();return t.source=e.source!==void 0&&e.source!==null?qe.fromPartial(e.source):void 0,t.metadata=e.metadata??void 0,t.id=e.id??void 0,t}};function xg(){return{text:void 0,image:void 0,audio:void 0,video:void 0,document:void 0}}var rn={encode(e,t=new U){return e.text!==void 0&&Di.encode(e.text,t.uint32(10).fork()).join(),e.image!==void 0&&$i.encode(e.image,t.uint32(18).fork()).join(),e.audio!==void 0&&Gi.encode(e.audio,t.uint32(26).fork()).join(),e.video!==void 0&&Zi.encode(e.video,t.uint32(34).fork()).join(),e.document!==void 0&&Bi.encode(e.document,t.uint32(42).fork()).join(),t},decode(e,t){let n=e instanceof R?e:new R(e),r=t===void 0?n.len:n.pos+t,o=xg();for(;n.pos<r;){let i=n.uint32();switch(i>>>3){case 1:if(i!==10)break;o.text=Di.decode(n,n.uint32());continue;case 2:if(i!==18)break;o.image=$i.decode(n,n.uint32());continue;case 3:if(i!==26)break;o.audio=Gi.decode(n,n.uint32());continue;case 4:if(i!==34)break;o.video=Zi.decode(n,n.uint32());continue;case 5:if(i!==42)break;o.document=Bi.decode(n,n.uint32());continue}if((i&7)===4||i===0)break;n.skip(i&7)}return o},create(e){return rn.fromPartial(e??{})},fromPartial(e){let t=xg();return t.text=e.text!==void 0&&e.text!==null?Di.fromPartial(e.text):void 0,t.image=e.image!==void 0&&e.image!==null?$i.fromPartial(e.image):void 0,t.audio=e.audio!==void 0&&e.audio!==null?Gi.fromPartial(e.audio):void 0,t.video=e.video!==void 0&&e.video!==null?Zi.fromPartial(e.video):void 0,t.document=e.document!==void 0&&e.document!==null?Bi.fromPartial(e.document):void 0,t}};function Sg(){return{id:"",type:"",function:void 0,metadata:void 0,encryptedValue:void 0}}var Vi={encode(e,t=new U){return e.id!==""&&t.uint32(10).string(e.id),e.type!==""&&t.uint32(18).string(e.type),e.function!==void 0&&ji.encode(e.function,t.uint32(26).fork()).join(),e.metadata!==void 0&&ee.encode(ee.wrap(e.metadata),t.uint32(34).fork()).join(),e.encryptedValue!==void 0&&t.uint32(42).string(e.encryptedValue),t},decode(e,t){let n=e instanceof R?e:new R(e),r=t===void 0?n.len:n.pos+t,o=Sg();for(;n.pos<r;){let i=n.uint32();switch(i>>>3){case 1:if(i!==10)break;o.id=n.string();continue;case 2:if(i!==18)break;o.type=n.string();continue;case 3:if(i!==26)break;o.function=ji.decode(n,n.uint32());continue;case 4:if(i!==34)break;o.metadata=ee.unwrap(ee.decode(n,n.uint32()));continue;case 5:if(i!==42)break;o.encryptedValue=n.string();continue}if((i&7)===4||i===0)break;n.skip(i&7)}return o},create(e){return Vi.fromPartial(e??{})},fromPartial(e){let t=Sg();return t.id=e.id??"",t.type=e.type??"",t.function=e.function!==void 0&&e.function!==null?ji.fromPartial(e.function):void 0,t.metadata=e.metadata??void 0,t.encryptedValue=e.encryptedValue??void 0,t}};function _g(){return{name:"",arguments:""}}var ji={encode(e,t=new U){return e.name!==""&&t.uint32(10).string(e.name),e.arguments!==""&&t.uint32(18).string(e.arguments),t},decode(e,t){let n=e instanceof R?e:new R(e),r=t===void 0?n.len:n.pos+t,o=_g();for(;n.pos<r;){let i=n.uint32();switch(i>>>3){case 1:if(i!==10)break;o.name=n.string();continue;case 2:if(i!==18)break;o.arguments=n.string();continue}if((i&7)===4||i===0)break;n.skip(i&7)}return o},create(e){return ji.fromPartial(e??{})},fromPartial(e){let t=_g();return t.name=e.name??"",t.arguments=e.arguments??"",t}};function Tg(){return{id:"",role:"",content:void 0,name:void 0,toolCalls:[],toolCallId:void 0,error:void 0,contentParts:[],metadata:void 0,subagentRunId:void 0,encryptedValue:void 0,activityType:void 0,activityContent:void 0}}var on={encode(e,t=new U){e.id!==""&&t.uint32(10).string(e.id),e.role!==""&&t.uint32(18).string(e.role),e.content!==void 0&&t.uint32(26).string(e.content),e.name!==void 0&&t.uint32(34).string(e.name);for(let n of e.toolCalls)Vi.encode(n,t.uint32(42).fork()).join();e.toolCallId!==void 0&&t.uint32(50).string(e.toolCallId),e.error!==void 0&&t.uint32(58).string(e.error);for(let n of e.contentParts)rn.encode(n,t.uint32(66).fork()).join();return e.metadata!==void 0&&ee.encode(ee.wrap(e.metadata),t.uint32(74).fork()).join(),e.subagentRunId!==void 0&&t.uint32(82).string(e.subagentRunId),e.encryptedValue!==void 0&&t.uint32(90).string(e.encryptedValue),e.activityType!==void 0&&t.uint32(98).string(e.activityType),e.activityContent!==void 0&&ee.encode(ee.wrap(e.activityContent),t.uint32(106).fork()).join(),t},decode(e,t){let n=e instanceof R?e:new R(e),r=t===void 0?n.len:n.pos+t,o=Tg();for(;n.pos<r;){let i=n.uint32();switch(i>>>3){case 1:if(i!==10)break;o.id=n.string();continue;case 2:if(i!==18)break;o.role=n.string();continue;case 3:if(i!==26)break;o.content=n.string();continue;case 4:if(i!==34)break;o.name=n.string();continue;case 5:if(i!==42)break;o.toolCalls.push(Vi.decode(n,n.uint32()));continue;case 6:if(i!==50)break;o.toolCallId=n.string();continue;case 7:if(i!==58)break;o.error=n.string();continue;case 8:if(i!==66)break;o.contentParts.push(rn.decode(n,n.uint32()));continue;case 9:if(i!==74)break;o.metadata=ee.unwrap(ee.decode(n,n.uint32()));continue;case 10:if(i!==82)break;o.subagentRunId=n.string();continue;case 11:if(i!==90)break;o.encryptedValue=n.string();continue;case 12:if(i!==98)break;o.activityType=n.string();continue;case 13:if(i!==106)break;o.activityContent=ee.unwrap(ee.decode(n,n.uint32()));continue}if((i&7)===4||i===0)break;n.skip(i&7)}return o},create(e){return on.fromPartial(e??{})},fromPartial(e){let t=Tg();return t.id=e.id??"",t.role=e.role??"",t.content=e.content??void 0,t.name=e.name??void 0,t.toolCalls=e.toolCalls?.map(n=>Vi.fromPartial(n))||[],t.toolCallId=e.toolCallId??void 0,t.error=e.error??void 0,t.contentParts=e.contentParts?.map(n=>rn.fromPartial(n))||[],t.metadata=e.metadata??void 0,t.subagentRunId=e.subagentRunId??void 0,t.encryptedValue=e.encryptedValue??void 0,t.activityType=e.activityType??void 0,t.activityContent=e.activityContent??void 0,t}};function Ag(){return{name:"",description:"",parameters:void 0,metadata:void 0}}var Wi={encode(e,t=new U){return e.name!==""&&t.uint32(10).string(e.name),e.description!==""&&t.uint32(18).string(e.description),e.parameters!==void 0&&M.encode(M.wrap(e.parameters),t.uint32(26).fork()).join(),e.metadata!==void 0&&ee.encode(ee.wrap(e.metadata),t.uint32(34).fork()).join(),t},decode(e,t){let n=e instanceof R?e:new R(e),r=t===void 0?n.len:n.pos+t,o=Ag();for(;n.pos<r;){let i=n.uint32();switch(i>>>3){case 1:if(i!==10)break;o.name=n.string();continue;case 2:if(i!==18)break;o.description=n.string();continue;case 3:if(i!==26)break;o.parameters=M.unwrap(M.decode(n,n.uint32()));continue;case 4:if(i!==34)break;o.metadata=ee.unwrap(ee.decode(n,n.uint32()));continue}if((i&7)===4||i===0)break;n.skip(i&7)}return o},create(e){return Wi.fromPartial(e??{})},fromPartial(e){let t=Ag();return t.name=e.name??"",t.description=e.description??"",t.parameters=e.parameters??void 0,t.metadata=e.metadata??void 0,t}};function kg(){return{description:"",value:""}}var qi={encode(e,t=new U){return e.description!==""&&t.uint32(10).string(e.description),e.value!==""&&t.uint32(18).string(e.value),t},decode(e,t){let n=e instanceof R?e:new R(e),r=t===void 0?n.len:n.pos+t,o=kg();for(;n.pos<r;){let i=n.uint32();switch(i>>>3){case 1:if(i!==10)break;o.description=n.string();continue;case 2:if(i!==18)break;o.value=n.string();continue}if((i&7)===4||i===0)break;n.skip(i&7)}return o},create(e){return qi.fromPartial(e??{})},fromPartial(e){let t=kg();return t.description=e.description??"",t.value=e.value??"",t}};function Ig(){return{interruptId:"",status:"",payload:void 0,metadata:void 0}}var Yi={encode(e,t=new U){return e.interruptId!==""&&t.uint32(10).string(e.interruptId),e.status!==""&&t.uint32(18).string(e.status),e.payload!==void 0&&M.encode(M.wrap(e.payload),t.uint32(26).fork()).join(),e.metadata!==void 0&&ee.encode(ee.wrap(e.metadata),t.uint32(34).fork()).join(),t},decode(e,t){let n=e instanceof R?e:new R(e),r=t===void 0?n.len:n.pos+t,o=Ig();for(;n.pos<r;){let i=n.uint32();switch(i>>>3){case 1:if(i!==10)break;o.interruptId=n.string();continue;case 2:if(i!==18)break;o.status=n.string();continue;case 3:if(i!==26)break;o.payload=M.unwrap(M.decode(n,n.uint32()));continue;case 4:if(i!==34)break;o.metadata=ee.unwrap(ee.decode(n,n.uint32()));continue}if((i&7)===4||i===0)break;n.skip(i&7)}return o},create(e){return Yi.fromPartial(e??{})},fromPartial(e){let t=Ig();return t.interruptId=e.interruptId??"",t.status=e.status??"",t.payload=e.payload??void 0,t.metadata=e.metadata??void 0,t}};function Rg(){return{threadId:"",runId:"",parentRunId:void 0,state:void 0,messages:[],tools:[],context:[],forwardedProps:void 0,resume:[],protocolVersion:void 0}}var Xi={encode(e,t=new U){e.threadId!==""&&t.uint32(10).string(e.threadId),e.runId!==""&&t.uint32(18).string(e.runId),e.parentRunId!==void 0&&t.uint32(26).string(e.parentRunId),e.state!==void 0&&M.encode(M.wrap(e.state),t.uint32(34).fork()).join();for(let n of e.messages)on.encode(n,t.uint32(42).fork()).join();for(let n of e.tools)Wi.encode(n,t.uint32(50).fork()).join();for(let n of e.context)qi.encode(n,t.uint32(58).fork()).join();e.forwardedProps!==void 0&&M.encode(M.wrap(e.forwardedProps),t.uint32(66).fork()).join();for(let n of e.resume)Yi.encode(n,t.uint32(74).fork()).join();return e.protocolVersion!==void 0&&t.uint32(82).string(e.protocolVersion),t},decode(e,t){let n=e instanceof R?e:new R(e),r=t===void 0?n.len:n.pos+t,o=Rg();for(;n.pos<r;){let i=n.uint32();switch(i>>>3){case 1:if(i!==10)break;o.threadId=n.string();continue;case 2:if(i!==18)break;o.runId=n.string();continue;case 3:if(i!==26)break;o.parentRunId=n.string();continue;case 4:if(i!==34)break;o.state=M.unwrap(M.decode(n,n.uint32()));continue;case 5:if(i!==42)break;o.messages.push(on.decode(n,n.uint32()));continue;case 6:if(i!==50)break;o.tools.push(Wi.decode(n,n.uint32()));continue;case 7:if(i!==58)break;o.context.push(qi.decode(n,n.uint32()));continue;case 8:if(i!==66)break;o.forwardedProps=M.unwrap(M.decode(n,n.uint32()));continue;case 9:if(i!==74)break;o.resume.push(Yi.decode(n,n.uint32()));continue;case 10:if(i!==82)break;o.protocolVersion=n.string();continue}if((i&7)===4||i===0)break;n.skip(i&7)}return o},create(e){return Xi.fromPartial(e??{})},fromPartial(e){let t=Rg();return t.threadId=e.threadId??"",t.runId=e.runId??"",t.parentRunId=e.parentRunId??void 0,t.state=e.state??void 0,t.messages=e.messages?.map(n=>on.fromPartial(n))||[],t.tools=e.tools?.map(n=>Wi.fromPartial(n))||[],t.context=e.context?.map(n=>qi.fromPartial(n))||[],t.forwardedProps=e.forwardedProps??void 0,t.resume=e.resume?.map(n=>Yi.fromPartial(n))||[],t.protocolVersion=e.protocolVersion??void 0,t}};function Cg(){return{id:"",reason:"",message:void 0,toolCallId:void 0,responseSchema:void 0,expiresAt:void 0,metadata:void 0,subagentRunId:void 0}}var Ki={encode(e,t=new U){return e.id!==""&&t.uint32(10).string(e.id),e.reason!==""&&t.uint32(18).string(e.reason),e.message!==void 0&&t.uint32(26).string(e.message),e.toolCallId!==void 0&&t.uint32(34).string(e.toolCallId),e.responseSchema!==void 0&&M.encode(M.wrap(e.responseSchema),t.uint32(42).fork()).join(),e.expiresAt!==void 0&&t.uint32(50).string(e.expiresAt),e.metadata!==void 0&&M.encode(M.wrap(e.metadata),t.uint32(58).fork()).join(),e.subagentRunId!==void 0&&t.uint32(66).string(e.subagentRunId),t},decode(e,t){let n=e instanceof R?e:new R(e),r=t===void 0?n.len:n.pos+t,o=Cg();for(;n.pos<r;){let i=n.uint32();switch(i>>>3){case 1:if(i!==10)break;o.id=n.string();continue;case 2:if(i!==18)break;o.reason=n.string();continue;case 3:if(i!==26)break;o.message=n.string();continue;case 4:if(i!==34)break;o.toolCallId=n.string();continue;case 5:if(i!==42)break;o.responseSchema=M.unwrap(M.decode(n,n.uint32()));continue;case 6:if(i!==50)break;o.expiresAt=n.string();continue;case 7:if(i!==58)break;o.metadata=M.unwrap(M.decode(n,n.uint32()));continue;case 8:if(i!==66)break;o.subagentRunId=n.string();continue}if((i&7)===4||i===0)break;n.skip(i&7)}return o},create(e){return Ki.fromPartial(e??{})},fromPartial(e){let t=Cg();return t.id=e.id??"",t.reason=e.reason??"",t.message=e.message??void 0,t.toolCallId=e.toolCallId??void 0,t.responseSchema=e.responseSchema??void 0,t.expiresAt=e.expiresAt??void 0,t.metadata=e.metadata??void 0,t.subagentRunId=e.subagentRunId??void 0,t}},m0=(function(e){return e[e.TEXT_MESSAGE_START=0]="TEXT_MESSAGE_START",e[e.TEXT_MESSAGE_CONTENT=1]="TEXT_MESSAGE_CONTENT",e[e.TEXT_MESSAGE_END=2]="TEXT_MESSAGE_END",e[e.TOOL_CALL_START=3]="TOOL_CALL_START",e[e.TOOL_CALL_ARGS=4]="TOOL_CALL_ARGS",e[e.TOOL_CALL_END=5]="TOOL_CALL_END",e[e.STATE_SNAPSHOT=6]="STATE_SNAPSHOT",e[e.STATE_DELTA=7]="STATE_DELTA",e[e.MESSAGES_SNAPSHOT=8]="MESSAGES_SNAPSHOT",e[e.RAW=9]="RAW",e[e.CUSTOM=10]="CUSTOM",e[e.RUN_STARTED=11]="RUN_STARTED",e[e.RUN_FINISHED=12]="RUN_FINISHED",e[e.RUN_ERROR=13]="RUN_ERROR",e[e.STEP_STARTED=14]="STEP_STARTED",e[e.STEP_FINISHED=15]="STEP_FINISHED",e[e.SUBAGENT_STARTED=16]="SUBAGENT_STARTED",e[e.SUBAGENT_FINISHED=17]="SUBAGENT_FINISHED",e[e.SUBAGENT_ERROR=18]="SUBAGENT_ERROR",e[e.TEXT_MESSAGE_CHUNK=19]="TEXT_MESSAGE_CHUNK",e[e.TOOL_CALL_CHUNK=20]="TOOL_CALL_CHUNK",e[e.TOOL_CALL_RESULT=21]="TOOL_CALL_RESULT",e[e.ACTIVITY_SNAPSHOT=22]="ACTIVITY_SNAPSHOT",e[e.ACTIVITY_DELTA=23]="ACTIVITY_DELTA",e[e.REASONING_START=24]="REASONING_START",e[e.REASONING_MESSAGE_START=25]="REASONING_MESSAGE_START",e[e.REASONING_MESSAGE_CONTENT=26]="REASONING_MESSAGE_CONTENT",e[e.REASONING_MESSAGE_END=27]="REASONING_MESSAGE_END",e[e.REASONING_MESSAGE_CHUNK=28]="REASONING_MESSAGE_CHUNK",e[e.REASONING_END=29]="REASONING_END",e[e.REASONING_ENCRYPTED_VALUE=30]="REASONING_ENCRYPTED_VALUE",e[e.UNRECOGNIZED=-1]="UNRECOGNIZED",e})({});function Ng(){return{type:0,timestamp:void 0,rawEvent:void 0,metadata:void 0}}var N={encode(e,t=new U){return e.type!==0&&t.uint32(8).int32(e.type),e.timestamp!==void 0&&t.uint32(16).int64(e.timestamp),e.rawEvent!==void 0&&M.encode(M.wrap(e.rawEvent),t.uint32(26).fork()).join(),e.metadata!==void 0&&ee.encode(ee.wrap(e.metadata),t.uint32(34).fork()).join(),t},decode(e,t){let n=e instanceof R?e:new R(e),r=t===void 0?n.len:n.pos+t,o=Ng();for(;n.pos<r;){let i=n.uint32();switch(i>>>3){case 1:if(i!==8)break;o.type=n.int32();continue;case 2:if(i!==16)break;o.timestamp=en(n.int64());continue;case 3:if(i!==26)break;o.rawEvent=M.unwrap(M.decode(n,n.uint32()));continue;case 4:if(i!==34)break;o.metadata=ee.unwrap(ee.decode(n,n.uint32()));continue}if((i&7)===4||i===0)break;n.skip(i&7)}return o},create(e){return N.fromPartial(e??{})},fromPartial(e){let t=Ng();return t.type=e.type??0,t.timestamp=e.timestamp??void 0,t.rawEvent=e.rawEvent??void 0,t.metadata=e.metadata??void 0,t}};function Og(){return{baseEvent:void 0,messageId:"",role:void 0,name:void 0,subagentRunId:void 0}}var Ji={encode(e,t=new U){return e.baseEvent!==void 0&&N.encode(e.baseEvent,t.uint32(10).fork()).join(),e.messageId!==""&&t.uint32(18).string(e.messageId),e.role!==void 0&&t.uint32(26).string(e.role),e.name!==void 0&&t.uint32(34).string(e.name),e.subagentRunId!==void 0&&t.uint32(42).string(e.subagentRunId),t},decode(e,t){let n=e instanceof R?e:new R(e),r=t===void 0?n.len:n.pos+t,o=Og();for(;n.pos<r;){let i=n.uint32();switch(i>>>3){case 1:if(i!==10)break;o.baseEvent=N.decode(n,n.uint32());continue;case 2:if(i!==18)break;o.messageId=n.string();continue;case 3:if(i!==26)break;o.role=n.string();continue;case 4:if(i!==34)break;o.name=n.string();continue;case 5:if(i!==42)break;o.subagentRunId=n.string();continue}if((i&7)===4||i===0)break;n.skip(i&7)}return o},create(e){return Ji.fromPartial(e??{})},fromPartial(e){let t=Og();return t.baseEvent=e.baseEvent!==void 0&&e.baseEvent!==null?N.fromPartial(e.baseEvent):void 0,t.messageId=e.messageId??"",t.role=e.role??void 0,t.name=e.name??void 0,t.subagentRunId=e.subagentRunId??void 0,t}};function Pg(){return{baseEvent:void 0,messageId:"",delta:"",subagentRunId:void 0}}var Qi={encode(e,t=new U){return e.baseEvent!==void 0&&N.encode(e.baseEvent,t.uint32(10).fork()).join(),e.messageId!==""&&t.uint32(18).string(e.messageId),e.delta!==""&&t.uint32(26).string(e.delta),e.subagentRunId!==void 0&&t.uint32(34).string(e.subagentRunId),t},decode(e,t){let n=e instanceof R?e:new R(e),r=t===void 0?n.len:n.pos+t,o=Pg();for(;n.pos<r;){let i=n.uint32();switch(i>>>3){case 1:if(i!==10)break;o.baseEvent=N.decode(n,n.uint32());continue;case 2:if(i!==18)break;o.messageId=n.string();continue;case 3:if(i!==26)break;o.delta=n.string();continue;case 4:if(i!==34)break;o.subagentRunId=n.string();continue}if((i&7)===4||i===0)break;n.skip(i&7)}return o},create(e){return Qi.fromPartial(e??{})},fromPartial(e){let t=Pg();return t.baseEvent=e.baseEvent!==void 0&&e.baseEvent!==null?N.fromPartial(e.baseEvent):void 0,t.messageId=e.messageId??"",t.delta=e.delta??"",t.subagentRunId=e.subagentRunId??void 0,t}};function Mg(){return{baseEvent:void 0,messageId:"",subagentRunId:void 0}}var ea={encode(e,t=new U){return e.baseEvent!==void 0&&N.encode(e.baseEvent,t.uint32(10).fork()).join(),e.messageId!==""&&t.uint32(18).string(e.messageId),e.subagentRunId!==void 0&&t.uint32(26).string(e.subagentRunId),t},decode(e,t){let n=e instanceof R?e:new R(e),r=t===void 0?n.len:n.pos+t,o=Mg();for(;n.pos<r;){let i=n.uint32();switch(i>>>3){case 1:if(i!==10)break;o.baseEvent=N.decode(n,n.uint32());continue;case 2:if(i!==18)break;o.messageId=n.string();continue;case 3:if(i!==26)break;o.subagentRunId=n.string();continue}if((i&7)===4||i===0)break;n.skip(i&7)}return o},create(e){return ea.fromPartial(e??{})},fromPartial(e){let t=Mg();return t.baseEvent=e.baseEvent!==void 0&&e.baseEvent!==null?N.fromPartial(e.baseEvent):void 0,t.messageId=e.messageId??"",t.subagentRunId=e.subagentRunId??void 0,t}};function zg(){return{baseEvent:void 0,messageId:void 0,role:void 0,delta:void 0,name:void 0,subagentRunId:void 0}}var ta={encode(e,t=new U){return e.baseEvent!==void 0&&N.encode(e.baseEvent,t.uint32(10).fork()).join(),e.messageId!==void 0&&t.uint32(18).string(e.messageId),e.role!==void 0&&t.uint32(26).string(e.role),e.delta!==void 0&&t.uint32(34).string(e.delta),e.name!==void 0&&t.uint32(42).string(e.name),e.subagentRunId!==void 0&&t.uint32(50).string(e.subagentRunId),t},decode(e,t){let n=e instanceof R?e:new R(e),r=t===void 0?n.len:n.pos+t,o=zg();for(;n.pos<r;){let i=n.uint32();switch(i>>>3){case 1:if(i!==10)break;o.baseEvent=N.decode(n,n.uint32());continue;case 2:if(i!==18)break;o.messageId=n.string();continue;case 3:if(i!==26)break;o.role=n.string();continue;case 4:if(i!==34)break;o.delta=n.string();continue;case 5:if(i!==42)break;o.name=n.string();continue;case 6:if(i!==50)break;o.subagentRunId=n.string();continue}if((i&7)===4||i===0)break;n.skip(i&7)}return o},create(e){return ta.fromPartial(e??{})},fromPartial(e){let t=zg();return t.baseEvent=e.baseEvent!==void 0&&e.baseEvent!==null?N.fromPartial(e.baseEvent):void 0,t.messageId=e.messageId??void 0,t.role=e.role??void 0,t.delta=e.delta??void 0,t.name=e.name??void 0,t.subagentRunId=e.subagentRunId??void 0,t}};function Lg(){return{baseEvent:void 0,toolCallId:"",toolCallName:"",parentMessageId:void 0,subagentRunId:void 0}}var na={encode(e,t=new U){return e.baseEvent!==void 0&&N.encode(e.baseEvent,t.uint32(10).fork()).join(),e.toolCallId!==""&&t.uint32(18).string(e.toolCallId),e.toolCallName!==""&&t.uint32(26).string(e.toolCallName),e.parentMessageId!==void 0&&t.uint32(34).string(e.parentMessageId),e.subagentRunId!==void 0&&t.uint32(42).string(e.subagentRunId),t},decode(e,t){let n=e instanceof R?e:new R(e),r=t===void 0?n.len:n.pos+t,o=Lg();for(;n.pos<r;){let i=n.uint32();switch(i>>>3){case 1:if(i!==10)break;o.baseEvent=N.decode(n,n.uint32());continue;case 2:if(i!==18)break;o.toolCallId=n.string();continue;case 3:if(i!==26)break;o.toolCallName=n.string();continue;case 4:if(i!==34)break;o.parentMessageId=n.string();continue;case 5:if(i!==42)break;o.subagentRunId=n.string();continue}if((i&7)===4||i===0)break;n.skip(i&7)}return o},create(e){return na.fromPartial(e??{})},fromPartial(e){let t=Lg();return t.baseEvent=e.baseEvent!==void 0&&e.baseEvent!==null?N.fromPartial(e.baseEvent):void 0,t.toolCallId=e.toolCallId??"",t.toolCallName=e.toolCallName??"",t.parentMessageId=e.parentMessageId??void 0,t.subagentRunId=e.subagentRunId??void 0,t}};function Dg(){return{baseEvent:void 0,toolCallId:"",delta:"",subagentRunId:void 0}}var ra={encode(e,t=new U){return e.baseEvent!==void 0&&N.encode(e.baseEvent,t.uint32(10).fork()).join(),e.toolCallId!==""&&t.uint32(18).string(e.toolCallId),e.delta!==""&&t.uint32(26).string(e.delta),e.subagentRunId!==void 0&&t.uint32(34).string(e.subagentRunId),t},decode(e,t){let n=e instanceof R?e:new R(e),r=t===void 0?n.len:n.pos+t,o=Dg();for(;n.pos<r;){let i=n.uint32();switch(i>>>3){case 1:if(i!==10)break;o.baseEvent=N.decode(n,n.uint32());continue;case 2:if(i!==18)break;o.toolCallId=n.string();continue;case 3:if(i!==26)break;o.delta=n.string();continue;case 4:if(i!==34)break;o.subagentRunId=n.string();continue}if((i&7)===4||i===0)break;n.skip(i&7)}return o},create(e){return ra.fromPartial(e??{})},fromPartial(e){let t=Dg();return t.baseEvent=e.baseEvent!==void 0&&e.baseEvent!==null?N.fromPartial(e.baseEvent):void 0,t.toolCallId=e.toolCallId??"",t.delta=e.delta??"",t.subagentRunId=e.subagentRunId??void 0,t}};function $g(){return{baseEvent:void 0,toolCallId:"",subagentRunId:void 0}}var oa={encode(e,t=new U){return e.baseEvent!==void 0&&N.encode(e.baseEvent,t.uint32(10).fork()).join(),e.toolCallId!==""&&t.uint32(18).string(e.toolCallId),e.subagentRunId!==void 0&&t.uint32(26).string(e.subagentRunId),t},decode(e,t){let n=e instanceof R?e:new R(e),r=t===void 0?n.len:n.pos+t,o=$g();for(;n.pos<r;){let i=n.uint32();switch(i>>>3){case 1:if(i!==10)break;o.baseEvent=N.decode(n,n.uint32());continue;case 2:if(i!==18)break;o.toolCallId=n.string();continue;case 3:if(i!==26)break;o.subagentRunId=n.string();continue}if((i&7)===4||i===0)break;n.skip(i&7)}return o},create(e){return oa.fromPartial(e??{})},fromPartial(e){let t=$g();return t.baseEvent=e.baseEvent!==void 0&&e.baseEvent!==null?N.fromPartial(e.baseEvent):void 0,t.toolCallId=e.toolCallId??"",t.subagentRunId=e.subagentRunId??void 0,t}};function Ug(){return{baseEvent:void 0,toolCallId:void 0,toolCallName:void 0,parentMessageId:void 0,delta:void 0,subagentRunId:void 0}}var ia={encode(e,t=new U){return e.baseEvent!==void 0&&N.encode(e.baseEvent,t.uint32(10).fork()).join(),e.toolCallId!==void 0&&t.uint32(18).string(e.toolCallId),e.toolCallName!==void 0&&t.uint32(26).string(e.toolCallName),e.parentMessageId!==void 0&&t.uint32(34).string(e.parentMessageId),e.delta!==void 0&&t.uint32(42).string(e.delta),e.subagentRunId!==void 0&&t.uint32(50).string(e.subagentRunId),t},decode(e,t){let n=e instanceof R?e:new R(e),r=t===void 0?n.len:n.pos+t,o=Ug();for(;n.pos<r;){let i=n.uint32();switch(i>>>3){case 1:if(i!==10)break;o.baseEvent=N.decode(n,n.uint32());continue;case 2:if(i!==18)break;o.toolCallId=n.string();continue;case 3:if(i!==26)break;o.toolCallName=n.string();continue;case 4:if(i!==34)break;o.parentMessageId=n.string();continue;case 5:if(i!==42)break;o.delta=n.string();continue;case 6:if(i!==50)break;o.subagentRunId=n.string();continue}if((i&7)===4||i===0)break;n.skip(i&7)}return o},create(e){return ia.fromPartial(e??{})},fromPartial(e){let t=Ug();return t.baseEvent=e.baseEvent!==void 0&&e.baseEvent!==null?N.fromPartial(e.baseEvent):void 0,t.toolCallId=e.toolCallId??void 0,t.toolCallName=e.toolCallName??void 0,t.parentMessageId=e.parentMessageId??void 0,t.delta=e.delta??void 0,t.subagentRunId=e.subagentRunId??void 0,t}};function Hg(){return{baseEvent:void 0,subagentRunId:void 0,messageId:"",toolCallId:"",content:void 0,role:void 0,contentParts:[]}}var aa={encode(e,t=new U){e.baseEvent!==void 0&&N.encode(e.baseEvent,t.uint32(10).fork()).join(),e.subagentRunId!==void 0&&t.uint32(18).string(e.subagentRunId),e.messageId!==""&&t.uint32(26).string(e.messageId),e.toolCallId!==""&&t.uint32(34).string(e.toolCallId),e.content!==void 0&&t.uint32(42).string(e.content),e.role!==void 0&&t.uint32(50).string(e.role);for(let n of e.contentParts)rn.encode(n,t.uint32(58).fork()).join();return t},decode(e,t){let n=e instanceof R?e:new R(e),r=t===void 0?n.len:n.pos+t,o=Hg();for(;n.pos<r;){let i=n.uint32();switch(i>>>3){case 1:if(i!==10)break;o.baseEvent=N.decode(n,n.uint32());continue;case 2:if(i!==18)break;o.subagentRunId=n.string();continue;case 3:if(i!==26)break;o.messageId=n.string();continue;case 4:if(i!==34)break;o.toolCallId=n.string();continue;case 5:if(i!==42)break;o.content=n.string();continue;case 6:if(i!==50)break;o.role=n.string();continue;case 7:if(i!==58)break;o.contentParts.push(rn.decode(n,n.uint32()));continue}if((i&7)===4||i===0)break;n.skip(i&7)}return o},create(e){return aa.fromPartial(e??{})},fromPartial(e){let t=Hg();return t.baseEvent=e.baseEvent!==void 0&&e.baseEvent!==null?N.fromPartial(e.baseEvent):void 0,t.subagentRunId=e.subagentRunId??void 0,t.messageId=e.messageId??"",t.toolCallId=e.toolCallId??"",t.content=e.content??void 0,t.role=e.role??void 0,t.contentParts=e.contentParts?.map(n=>rn.fromPartial(n))||[],t}};function Fg(){return{baseEvent:void 0,snapshot:void 0,subagentRunId:void 0}}var sa={encode(e,t=new U){return e.baseEvent!==void 0&&N.encode(e.baseEvent,t.uint32(10).fork()).join(),e.snapshot!==void 0&&M.encode(M.wrap(e.snapshot),t.uint32(18).fork()).join(),e.subagentRunId!==void 0&&t.uint32(26).string(e.subagentRunId),t},decode(e,t){let n=e instanceof R?e:new R(e),r=t===void 0?n.len:n.pos+t,o=Fg();for(;n.pos<r;){let i=n.uint32();switch(i>>>3){case 1:if(i!==10)break;o.baseEvent=N.decode(n,n.uint32());continue;case 2:if(i!==18)break;o.snapshot=M.unwrap(M.decode(n,n.uint32()));continue;case 3:if(i!==26)break;o.subagentRunId=n.string();continue}if((i&7)===4||i===0)break;n.skip(i&7)}return o},create(e){return sa.fromPartial(e??{})},fromPartial(e){let t=Fg();return t.baseEvent=e.baseEvent!==void 0&&e.baseEvent!==null?N.fromPartial(e.baseEvent):void 0,t.snapshot=e.snapshot??void 0,t.subagentRunId=e.subagentRunId??void 0,t}};function Gg(){return{baseEvent:void 0,delta:[],subagentRunId:void 0}}var la={encode(e,t=new U){e.baseEvent!==void 0&&N.encode(e.baseEvent,t.uint32(10).fork()).join();for(let n of e.delta)nn.encode(n,t.uint32(18).fork()).join();return e.subagentRunId!==void 0&&t.uint32(26).string(e.subagentRunId),t},decode(e,t){let n=e instanceof R?e:new R(e),r=t===void 0?n.len:n.pos+t,o=Gg();for(;n.pos<r;){let i=n.uint32();switch(i>>>3){case 1:if(i!==10)break;o.baseEvent=N.decode(n,n.uint32());continue;case 2:if(i!==18)break;o.delta.push(nn.decode(n,n.uint32()));continue;case 3:if(i!==26)break;o.subagentRunId=n.string();continue}if((i&7)===4||i===0)break;n.skip(i&7)}return o},create(e){return la.fromPartial(e??{})},fromPartial(e){let t=Gg();return t.baseEvent=e.baseEvent!==void 0&&e.baseEvent!==null?N.fromPartial(e.baseEvent):void 0,t.delta=e.delta?.map(n=>nn.fromPartial(n))||[],t.subagentRunId=e.subagentRunId??void 0,t}};function Zg(){return{baseEvent:void 0,messages:[]}}var ca={encode(e,t=new U){e.baseEvent!==void 0&&N.encode(e.baseEvent,t.uint32(10).fork()).join();for(let n of e.messages)on.encode(n,t.uint32(18).fork()).join();return t},decode(e,t){let n=e instanceof R?e:new R(e),r=t===void 0?n.len:n.pos+t,o=Zg();for(;n.pos<r;){let i=n.uint32();switch(i>>>3){case 1:if(i!==10)break;o.baseEvent=N.decode(n,n.uint32());continue;case 2:if(i!==18)break;o.messages.push(on.decode(n,n.uint32()));continue}if((i&7)===4||i===0)break;n.skip(i&7)}return o},create(e){return ca.fromPartial(e??{})},fromPartial(e){let t=Zg();return t.baseEvent=e.baseEvent!==void 0&&e.baseEvent!==null?N.fromPartial(e.baseEvent):void 0,t.messages=e.messages?.map(n=>on.fromPartial(n))||[],t}};function Bg(){return{baseEvent:void 0,subagentRunId:void 0,messageId:"",activityType:"",content:void 0,replace:void 0}}var ua={encode(e,t=new U){return e.baseEvent!==void 0&&N.encode(e.baseEvent,t.uint32(10).fork()).join(),e.subagentRunId!==void 0&&t.uint32(18).string(e.subagentRunId),e.messageId!==""&&t.uint32(26).string(e.messageId),e.activityType!==""&&t.uint32(34).string(e.activityType),e.content!==void 0&&ee.encode(ee.wrap(e.content),t.uint32(42).fork()).join(),e.replace!==void 0&&t.uint32(48).bool(e.replace),t},decode(e,t){let n=e instanceof R?e:new R(e),r=t===void 0?n.len:n.pos+t,o=Bg();for(;n.pos<r;){let i=n.uint32();switch(i>>>3){case 1:if(i!==10)break;o.baseEvent=N.decode(n,n.uint32());continue;case 2:if(i!==18)break;o.subagentRunId=n.string();continue;case 3:if(i!==26)break;o.messageId=n.string();continue;case 4:if(i!==34)break;o.activityType=n.string();continue;case 5:if(i!==42)break;o.content=ee.unwrap(ee.decode(n,n.uint32()));continue;case 6:if(i!==48)break;o.replace=n.bool();continue}if((i&7)===4||i===0)break;n.skip(i&7)}return o},create(e){return ua.fromPartial(e??{})},fromPartial(e){let t=Bg();return t.baseEvent=e.baseEvent!==void 0&&e.baseEvent!==null?N.fromPartial(e.baseEvent):void 0,t.subagentRunId=e.subagentRunId??void 0,t.messageId=e.messageId??"",t.activityType=e.activityType??"",t.content=e.content??void 0,t.replace=e.replace??void 0,t}};function Vg(){return{baseEvent:void 0,subagentRunId:void 0,messageId:"",activityType:"",patch:[]}}var da={encode(e,t=new U){e.baseEvent!==void 0&&N.encode(e.baseEvent,t.uint32(10).fork()).join(),e.subagentRunId!==void 0&&t.uint32(18).string(e.subagentRunId),e.messageId!==""&&t.uint32(26).string(e.messageId),e.activityType!==""&&t.uint32(34).string(e.activityType);for(let n of e.patch)nn.encode(n,t.uint32(42).fork()).join();return t},decode(e,t){let n=e instanceof R?e:new R(e),r=t===void 0?n.len:n.pos+t,o=Vg();for(;n.pos<r;){let i=n.uint32();switch(i>>>3){case 1:if(i!==10)break;o.baseEvent=N.decode(n,n.uint32());continue;case 2:if(i!==18)break;o.subagentRunId=n.string();continue;case 3:if(i!==26)break;o.messageId=n.string();continue;case 4:if(i!==34)break;o.activityType=n.string();continue;case 5:if(i!==42)break;o.patch.push(nn.decode(n,n.uint32()));continue}if((i&7)===4||i===0)break;n.skip(i&7)}return o},create(e){return da.fromPartial(e??{})},fromPartial(e){let t=Vg();return t.baseEvent=e.baseEvent!==void 0&&e.baseEvent!==null?N.fromPartial(e.baseEvent):void 0,t.subagentRunId=e.subagentRunId??void 0,t.messageId=e.messageId??"",t.activityType=e.activityType??"",t.patch=e.patch?.map(n=>nn.fromPartial(n))||[],t}};function jg(){return{baseEvent:void 0,event:void 0,source:void 0,subagentRunId:void 0}}var pa={encode(e,t=new U){return e.baseEvent!==void 0&&N.encode(e.baseEvent,t.uint32(10).fork()).join(),e.event!==void 0&&M.encode(M.wrap(e.event),t.uint32(18).fork()).join(),e.source!==void 0&&t.uint32(26).string(e.source),e.subagentRunId!==void 0&&t.uint32(34).string(e.subagentRunId),t},decode(e,t){let n=e instanceof R?e:new R(e),r=t===void 0?n.len:n.pos+t,o=jg();for(;n.pos<r;){let i=n.uint32();switch(i>>>3){case 1:if(i!==10)break;o.baseEvent=N.decode(n,n.uint32());continue;case 2:if(i!==18)break;o.event=M.unwrap(M.decode(n,n.uint32()));continue;case 3:if(i!==26)break;o.source=n.string();continue;case 4:if(i!==34)break;o.subagentRunId=n.string();continue}if((i&7)===4||i===0)break;n.skip(i&7)}return o},create(e){return pa.fromPartial(e??{})},fromPartial(e){let t=jg();return t.baseEvent=e.baseEvent!==void 0&&e.baseEvent!==null?N.fromPartial(e.baseEvent):void 0,t.event=e.event??void 0,t.source=e.source??void 0,t.subagentRunId=e.subagentRunId??void 0,t}};function Wg(){return{baseEvent:void 0,name:"",value:void 0,subagentRunId:void 0}}var ha={encode(e,t=new U){return e.baseEvent!==void 0&&N.encode(e.baseEvent,t.uint32(10).fork()).join(),e.name!==""&&t.uint32(18).string(e.name),e.value!==void 0&&M.encode(M.wrap(e.value),t.uint32(26).fork()).join(),e.subagentRunId!==void 0&&t.uint32(34).string(e.subagentRunId),t},decode(e,t){let n=e instanceof R?e:new R(e),r=t===void 0?n.len:n.pos+t,o=Wg();for(;n.pos<r;){let i=n.uint32();switch(i>>>3){case 1:if(i!==10)break;o.baseEvent=N.decode(n,n.uint32());continue;case 2:if(i!==18)break;o.name=n.string();continue;case 3:if(i!==26)break;o.value=M.unwrap(M.decode(n,n.uint32()));continue;case 4:if(i!==34)break;o.subagentRunId=n.string();continue}if((i&7)===4||i===0)break;n.skip(i&7)}return o},create(e){return ha.fromPartial(e??{})},fromPartial(e){let t=Wg();return t.baseEvent=e.baseEvent!==void 0&&e.baseEvent!==null?N.fromPartial(e.baseEvent):void 0,t.name=e.name??"",t.value=e.value??void 0,t.subagentRunId=e.subagentRunId??void 0,t}};function qg(){return{baseEvent:void 0,threadId:"",runId:"",parentRunId:void 0,input:void 0,protocolVersion:void 0}}var fa={encode(e,t=new U){return e.baseEvent!==void 0&&N.encode(e.baseEvent,t.uint32(10).fork()).join(),e.threadId!==""&&t.uint32(18).string(e.threadId),e.runId!==""&&t.uint32(26).string(e.runId),e.parentRunId!==void 0&&t.uint32(34).string(e.parentRunId),e.input!==void 0&&Xi.encode(e.input,t.uint32(42).fork()).join(),e.protocolVersion!==void 0&&t.uint32(50).string(e.protocolVersion),t},decode(e,t){let n=e instanceof R?e:new R(e),r=t===void 0?n.len:n.pos+t,o=qg();for(;n.pos<r;){let i=n.uint32();switch(i>>>3){case 1:if(i!==10)break;o.baseEvent=N.decode(n,n.uint32());continue;case 2:if(i!==18)break;o.threadId=n.string();continue;case 3:if(i!==26)break;o.runId=n.string();continue;case 4:if(i!==34)break;o.parentRunId=n.string();continue;case 5:if(i!==42)break;o.input=Xi.decode(n,n.uint32());continue;case 6:if(i!==50)break;o.protocolVersion=n.string();continue}if((i&7)===4||i===0)break;n.skip(i&7)}return o},create(e){return fa.fromPartial(e??{})},fromPartial(e){let t=qg();return t.baseEvent=e.baseEvent!==void 0&&e.baseEvent!==null?N.fromPartial(e.baseEvent):void 0,t.threadId=e.threadId??"",t.runId=e.runId??"",t.parentRunId=e.parentRunId??void 0,t.input=e.input!==void 0&&e.input!==null?Xi.fromPartial(e.input):void 0,t.protocolVersion=e.protocolVersion??void 0,t}};function Yg(){return{baseEvent:void 0,threadId:"",runId:"",result:void 0,outcome:"",interrupts:[],usage:[],pendingToolCallIds:[]}}var ma={encode(e,t=new U){e.baseEvent!==void 0&&N.encode(e.baseEvent,t.uint32(10).fork()).join(),e.threadId!==""&&t.uint32(18).string(e.threadId),e.runId!==""&&t.uint32(26).string(e.runId),e.result!==void 0&&M.encode(M.wrap(e.result),t.uint32(34).fork()).join(),e.outcome!==""&&t.uint32(42).string(e.outcome);for(let n of e.interrupts)Ki.encode(n,t.uint32(50).fork()).join();for(let n of e.usage)an.encode(n,t.uint32(58).fork()).join();for(let n of e.pendingToolCallIds)t.uint32(66).string(n);return t},decode(e,t){let n=e instanceof R?e:new R(e),r=t===void 0?n.len:n.pos+t,o=Yg();for(;n.pos<r;){let i=n.uint32();switch(i>>>3){case 1:if(i!==10)break;o.baseEvent=N.decode(n,n.uint32());continue;case 2:if(i!==18)break;o.threadId=n.string();continue;case 3:if(i!==26)break;o.runId=n.string();continue;case 4:if(i!==34)break;o.result=M.unwrap(M.decode(n,n.uint32()));continue;case 5:if(i!==42)break;o.outcome=n.string();continue;case 6:if(i!==50)break;o.interrupts.push(Ki.decode(n,n.uint32()));continue;case 7:if(i!==58)break;o.usage.push(an.decode(n,n.uint32()));continue;case 8:if(i!==66)break;o.pendingToolCallIds.push(n.string());continue}if((i&7)===4||i===0)break;n.skip(i&7)}return o},create(e){return ma.fromPartial(e??{})},fromPartial(e){let t=Yg();return t.baseEvent=e.baseEvent!==void 0&&e.baseEvent!==null?N.fromPartial(e.baseEvent):void 0,t.threadId=e.threadId??"",t.runId=e.runId??"",t.result=e.result??void 0,t.outcome=e.outcome??"",t.interrupts=e.interrupts?.map(n=>Ki.fromPartial(n))||[],t.usage=e.usage?.map(n=>an.fromPartial(n))||[],t.pendingToolCallIds=e.pendingToolCallIds?.map(n=>n)||[],t}};function Xg(){return{baseEvent:void 0,code:void 0,message:"",usage:[]}}var ga={encode(e,t=new U){e.baseEvent!==void 0&&N.encode(e.baseEvent,t.uint32(10).fork()).join(),e.code!==void 0&&t.uint32(18).string(e.code),e.message!==""&&t.uint32(26).string(e.message);for(let n of e.usage)an.encode(n,t.uint32(34).fork()).join();return t},decode(e,t){let n=e instanceof R?e:new R(e),r=t===void 0?n.len:n.pos+t,o=Xg();for(;n.pos<r;){let i=n.uint32();switch(i>>>3){case 1:if(i!==10)break;o.baseEvent=N.decode(n,n.uint32());continue;case 2:if(i!==18)break;o.code=n.string();continue;case 3:if(i!==26)break;o.message=n.string();continue;case 4:if(i!==34)break;o.usage.push(an.decode(n,n.uint32()));continue}if((i&7)===4||i===0)break;n.skip(i&7)}return o},create(e){return ga.fromPartial(e??{})},fromPartial(e){let t=Xg();return t.baseEvent=e.baseEvent!==void 0&&e.baseEvent!==null?N.fromPartial(e.baseEvent):void 0,t.code=e.code??void 0,t.message=e.message??"",t.usage=e.usage?.map(n=>an.fromPartial(n))||[],t}};function Kg(){return{baseEvent:void 0,stepName:"",subagentRunId:void 0}}var va={encode(e,t=new U){return e.baseEvent!==void 0&&N.encode(e.baseEvent,t.uint32(10).fork()).join(),e.stepName!==""&&t.uint32(18).string(e.stepName),e.subagentRunId!==void 0&&t.uint32(26).string(e.subagentRunId),t},decode(e,t){let n=e instanceof R?e:new R(e),r=t===void 0?n.len:n.pos+t,o=Kg();for(;n.pos<r;){let i=n.uint32();switch(i>>>3){case 1:if(i!==10)break;o.baseEvent=N.decode(n,n.uint32());continue;case 2:if(i!==18)break;o.stepName=n.string();continue;case 3:if(i!==26)break;o.subagentRunId=n.string();continue}if((i&7)===4||i===0)break;n.skip(i&7)}return o},create(e){return va.fromPartial(e??{})},fromPartial(e){let t=Kg();return t.baseEvent=e.baseEvent!==void 0&&e.baseEvent!==null?N.fromPartial(e.baseEvent):void 0,t.stepName=e.stepName??"",t.subagentRunId=e.subagentRunId??void 0,t}};function Jg(){return{baseEvent:void 0,stepName:"",subagentRunId:void 0}}var ba={encode(e,t=new U){return e.baseEvent!==void 0&&N.encode(e.baseEvent,t.uint32(10).fork()).join(),e.stepName!==""&&t.uint32(18).string(e.stepName),e.subagentRunId!==void 0&&t.uint32(26).string(e.subagentRunId),t},decode(e,t){let n=e instanceof R?e:new R(e),r=t===void 0?n.len:n.pos+t,o=Jg();for(;n.pos<r;){let i=n.uint32();switch(i>>>3){case 1:if(i!==10)break;o.baseEvent=N.decode(n,n.uint32());continue;case 2:if(i!==18)break;o.stepName=n.string();continue;case 3:if(i!==26)break;o.subagentRunId=n.string();continue}if((i&7)===4||i===0)break;n.skip(i&7)}return o},create(e){return ba.fromPartial(e??{})},fromPartial(e){let t=Jg();return t.baseEvent=e.baseEvent!==void 0&&e.baseEvent!==null?N.fromPartial(e.baseEvent):void 0,t.stepName=e.stepName??"",t.subagentRunId=e.subagentRunId??void 0,t}};function Qg(){return{baseEvent:void 0,subagentRunId:void 0,messageId:""}}var ya={encode(e,t=new U){return e.baseEvent!==void 0&&N.encode(e.baseEvent,t.uint32(10).fork()).join(),e.subagentRunId!==void 0&&t.uint32(18).string(e.subagentRunId),e.messageId!==""&&t.uint32(26).string(e.messageId),t},decode(e,t){let n=e instanceof R?e:new R(e),r=t===void 0?n.len:n.pos+t,o=Qg();for(;n.pos<r;){let i=n.uint32();switch(i>>>3){case 1:if(i!==10)break;o.baseEvent=N.decode(n,n.uint32());continue;case 2:if(i!==18)break;o.subagentRunId=n.string();continue;case 3:if(i!==26)break;o.messageId=n.string();continue}if((i&7)===4||i===0)break;n.skip(i&7)}return o},create(e){return ya.fromPartial(e??{})},fromPartial(e){let t=Qg();return t.baseEvent=e.baseEvent!==void 0&&e.baseEvent!==null?N.fromPartial(e.baseEvent):void 0,t.subagentRunId=e.subagentRunId??void 0,t.messageId=e.messageId??"",t}};function ev(){return{baseEvent:void 0,subagentRunId:void 0,messageId:"",role:""}}var wa={encode(e,t=new U){return e.baseEvent!==void 0&&N.encode(e.baseEvent,t.uint32(10).fork()).join(),e.subagentRunId!==void 0&&t.uint32(18).string(e.subagentRunId),e.messageId!==""&&t.uint32(26).string(e.messageId),e.role!==""&&t.uint32(34).string(e.role),t},decode(e,t){let n=e instanceof R?e:new R(e),r=t===void 0?n.len:n.pos+t,o=ev();for(;n.pos<r;){let i=n.uint32();switch(i>>>3){case 1:if(i!==10)break;o.baseEvent=N.decode(n,n.uint32());continue;case 2:if(i!==18)break;o.subagentRunId=n.string();continue;case 3:if(i!==26)break;o.messageId=n.string();continue;case 4:if(i!==34)break;o.role=n.string();continue}if((i&7)===4||i===0)break;n.skip(i&7)}return o},create(e){return wa.fromPartial(e??{})},fromPartial(e){let t=ev();return t.baseEvent=e.baseEvent!==void 0&&e.baseEvent!==null?N.fromPartial(e.baseEvent):void 0,t.subagentRunId=e.subagentRunId??void 0,t.messageId=e.messageId??"",t.role=e.role??"",t}};function tv(){return{baseEvent:void 0,subagentRunId:void 0,messageId:"",delta:""}}var Ea={encode(e,t=new U){return e.baseEvent!==void 0&&N.encode(e.baseEvent,t.uint32(10).fork()).join(),e.subagentRunId!==void 0&&t.uint32(18).string(e.subagentRunId),e.messageId!==""&&t.uint32(26).string(e.messageId),e.delta!==""&&t.uint32(34).string(e.delta),t},decode(e,t){let n=e instanceof R?e:new R(e),r=t===void 0?n.len:n.pos+t,o=tv();for(;n.pos<r;){let i=n.uint32();switch(i>>>3){case 1:if(i!==10)break;o.baseEvent=N.decode(n,n.uint32());continue;case 2:if(i!==18)break;o.subagentRunId=n.string();continue;case 3:if(i!==26)break;o.messageId=n.string();continue;case 4:if(i!==34)break;o.delta=n.string();continue}if((i&7)===4||i===0)break;n.skip(i&7)}return o},create(e){return Ea.fromPartial(e??{})},fromPartial(e){let t=tv();return t.baseEvent=e.baseEvent!==void 0&&e.baseEvent!==null?N.fromPartial(e.baseEvent):void 0,t.subagentRunId=e.subagentRunId??void 0,t.messageId=e.messageId??"",t.delta=e.delta??"",t}};function nv(){return{baseEvent:void 0,subagentRunId:void 0,messageId:""}}var xa={encode(e,t=new U){return e.baseEvent!==void 0&&N.encode(e.baseEvent,t.uint32(10).fork()).join(),e.subagentRunId!==void 0&&t.uint32(18).string(e.subagentRunId),e.messageId!==""&&t.uint32(26).string(e.messageId),t},decode(e,t){let n=e instanceof R?e:new R(e),r=t===void 0?n.len:n.pos+t,o=nv();for(;n.pos<r;){let i=n.uint32();switch(i>>>3){case 1:if(i!==10)break;o.baseEvent=N.decode(n,n.uint32());continue;case 2:if(i!==18)break;o.subagentRunId=n.string();continue;case 3:if(i!==26)break;o.messageId=n.string();continue}if((i&7)===4||i===0)break;n.skip(i&7)}return o},create(e){return xa.fromPartial(e??{})},fromPartial(e){let t=nv();return t.baseEvent=e.baseEvent!==void 0&&e.baseEvent!==null?N.fromPartial(e.baseEvent):void 0,t.subagentRunId=e.subagentRunId??void 0,t.messageId=e.messageId??"",t}};function rv(){return{baseEvent:void 0,subagentRunId:void 0,messageId:void 0,delta:void 0}}var Sa={encode(e,t=new U){return e.baseEvent!==void 0&&N.encode(e.baseEvent,t.uint32(10).fork()).join(),e.subagentRunId!==void 0&&t.uint32(18).string(e.subagentRunId),e.messageId!==void 0&&t.uint32(26).string(e.messageId),e.delta!==void 0&&t.uint32(34).string(e.delta),t},decode(e,t){let n=e instanceof R?e:new R(e),r=t===void 0?n.len:n.pos+t,o=rv();for(;n.pos<r;){let i=n.uint32();switch(i>>>3){case 1:if(i!==10)break;o.baseEvent=N.decode(n,n.uint32());continue;case 2:if(i!==18)break;o.subagentRunId=n.string();continue;case 3:if(i!==26)break;o.messageId=n.string();continue;case 4:if(i!==34)break;o.delta=n.string();continue}if((i&7)===4||i===0)break;n.skip(i&7)}return o},create(e){return Sa.fromPartial(e??{})},fromPartial(e){let t=rv();return t.baseEvent=e.baseEvent!==void 0&&e.baseEvent!==null?N.fromPartial(e.baseEvent):void 0,t.subagentRunId=e.subagentRunId??void 0,t.messageId=e.messageId??void 0,t.delta=e.delta??void 0,t}};function ov(){return{baseEvent:void 0,subagentRunId:void 0,messageId:""}}var _a={encode(e,t=new U){return e.baseEvent!==void 0&&N.encode(e.baseEvent,t.uint32(10).fork()).join(),e.subagentRunId!==void 0&&t.uint32(18).string(e.subagentRunId),e.messageId!==""&&t.uint32(26).string(e.messageId),t},decode(e,t){let n=e instanceof R?e:new R(e),r=t===void 0?n.len:n.pos+t,o=ov();for(;n.pos<r;){let i=n.uint32();switch(i>>>3){case 1:if(i!==10)break;o.baseEvent=N.decode(n,n.uint32());continue;case 2:if(i!==18)break;o.subagentRunId=n.string();continue;case 3:if(i!==26)break;o.messageId=n.string();continue}if((i&7)===4||i===0)break;n.skip(i&7)}return o},create(e){return _a.fromPartial(e??{})},fromPartial(e){let t=ov();return t.baseEvent=e.baseEvent!==void 0&&e.baseEvent!==null?N.fromPartial(e.baseEvent):void 0,t.subagentRunId=e.subagentRunId??void 0,t.messageId=e.messageId??"",t}};function iv(){return{baseEvent:void 0,subagentRunId:void 0,subtype:"",entityId:"",encryptedValue:""}}var Ta={encode(e,t=new U){return e.baseEvent!==void 0&&N.encode(e.baseEvent,t.uint32(10).fork()).join(),e.subagentRunId!==void 0&&t.uint32(18).string(e.subagentRunId),e.subtype!==""&&t.uint32(26).string(e.subtype),e.entityId!==""&&t.uint32(34).string(e.entityId),e.encryptedValue!==""&&t.uint32(42).string(e.encryptedValue),t},decode(e,t){let n=e instanceof R?e:new R(e),r=t===void 0?n.len:n.pos+t,o=iv();for(;n.pos<r;){let i=n.uint32();switch(i>>>3){case 1:if(i!==10)break;o.baseEvent=N.decode(n,n.uint32());continue;case 2:if(i!==18)break;o.subagentRunId=n.string();continue;case 3:if(i!==26)break;o.subtype=n.string();continue;case 4:if(i!==34)break;o.entityId=n.string();continue;case 5:if(i!==42)break;o.encryptedValue=n.string();continue}if((i&7)===4||i===0)break;n.skip(i&7)}return o},create(e){return Ta.fromPartial(e??{})},fromPartial(e){let t=iv();return t.baseEvent=e.baseEvent!==void 0&&e.baseEvent!==null?N.fromPartial(e.baseEvent):void 0,t.subagentRunId=e.subagentRunId??void 0,t.subtype=e.subtype??"",t.entityId=e.entityId??"",t.encryptedValue=e.encryptedValue??"",t}};function av(){return{baseEvent:void 0,subagentRunId:"",name:"",description:void 0,parentSubagentRunId:void 0,parentToolCallId:void 0,parentMessageId:void 0}}var Aa={encode(e,t=new U){return e.baseEvent!==void 0&&N.encode(e.baseEvent,t.uint32(10).fork()).join(),e.subagentRunId!==""&&t.uint32(18).string(e.subagentRunId),e.name!==""&&t.uint32(26).string(e.name),e.description!==void 0&&t.uint32(34).string(e.description),e.parentSubagentRunId!==void 0&&t.uint32(42).string(e.parentSubagentRunId),e.parentToolCallId!==void 0&&t.uint32(50).string(e.parentToolCallId),e.parentMessageId!==void 0&&t.uint32(58).string(e.parentMessageId),t},decode(e,t){let n=e instanceof R?e:new R(e),r=t===void 0?n.len:n.pos+t,o=av();for(;n.pos<r;){let i=n.uint32();switch(i>>>3){case 1:if(i!==10)break;o.baseEvent=N.decode(n,n.uint32());continue;case 2:if(i!==18)break;o.subagentRunId=n.string();continue;case 3:if(i!==26)break;o.name=n.string();continue;case 4:if(i!==34)break;o.description=n.string();continue;case 5:if(i!==42)break;o.parentSubagentRunId=n.string();continue;case 6:if(i!==50)break;o.parentToolCallId=n.string();continue;case 7:if(i!==58)break;o.parentMessageId=n.string();continue}if((i&7)===4||i===0)break;n.skip(i&7)}return o},create(e){return Aa.fromPartial(e??{})},fromPartial(e){let t=av();return t.baseEvent=e.baseEvent!==void 0&&e.baseEvent!==null?N.fromPartial(e.baseEvent):void 0,t.subagentRunId=e.subagentRunId??"",t.name=e.name??"",t.description=e.description??void 0,t.parentSubagentRunId=e.parentSubagentRunId??void 0,t.parentToolCallId=e.parentToolCallId??void 0,t.parentMessageId=e.parentMessageId??void 0,t}};function sv(){return{baseEvent:void 0,subagentRunId:"",result:void 0,outcome:"",interruptIds:[]}}var ka={encode(e,t=new U){e.baseEvent!==void 0&&N.encode(e.baseEvent,t.uint32(10).fork()).join(),e.subagentRunId!==""&&t.uint32(18).string(e.subagentRunId),e.result!==void 0&&M.encode(M.wrap(e.result),t.uint32(26).fork()).join(),e.outcome!==""&&t.uint32(34).string(e.outcome);for(let n of e.interruptIds)t.uint32(42).string(n);return t},decode(e,t){let n=e instanceof R?e:new R(e),r=t===void 0?n.len:n.pos+t,o=sv();for(;n.pos<r;){let i=n.uint32();switch(i>>>3){case 1:if(i!==10)break;o.baseEvent=N.decode(n,n.uint32());continue;case 2:if(i!==18)break;o.subagentRunId=n.string();continue;case 3:if(i!==26)break;o.result=M.unwrap(M.decode(n,n.uint32()));continue;case 4:if(i!==34)break;o.outcome=n.string();continue;case 5:if(i!==42)break;o.interruptIds.push(n.string());continue}if((i&7)===4||i===0)break;n.skip(i&7)}return o},create(e){return ka.fromPartial(e??{})},fromPartial(e){let t=sv();return t.baseEvent=e.baseEvent!==void 0&&e.baseEvent!==null?N.fromPartial(e.baseEvent):void 0,t.subagentRunId=e.subagentRunId??"",t.result=e.result??void 0,t.outcome=e.outcome??"",t.interruptIds=e.interruptIds?.map(n=>n)||[],t}};function lv(){return{baseEvent:void 0,subagentRunId:"",message:"",code:void 0}}var Ia={encode(e,t=new U){return e.baseEvent!==void 0&&N.encode(e.baseEvent,t.uint32(10).fork()).join(),e.subagentRunId!==""&&t.uint32(18).string(e.subagentRunId),e.message!==""&&t.uint32(26).string(e.message),e.code!==void 0&&t.uint32(34).string(e.code),t},decode(e,t){let n=e instanceof R?e:new R(e),r=t===void 0?n.len:n.pos+t,o=lv();for(;n.pos<r;){let i=n.uint32();switch(i>>>3){case 1:if(i!==10)break;o.baseEvent=N.decode(n,n.uint32());continue;case 2:if(i!==18)break;o.subagentRunId=n.string();continue;case 3:if(i!==26)break;o.message=n.string();continue;case 4:if(i!==34)break;o.code=n.string();continue}if((i&7)===4||i===0)break;n.skip(i&7)}return o},create(e){return Ia.fromPartial(e??{})},fromPartial(e){let t=lv();return t.baseEvent=e.baseEvent!==void 0&&e.baseEvent!==null?N.fromPartial(e.baseEvent):void 0,t.subagentRunId=e.subagentRunId??"",t.message=e.message??"",t.code=e.code??void 0,t}};function cv(){return{textMessageStart:void 0,textMessageContent:void 0,textMessageEnd:void 0,toolCallStart:void 0,toolCallArgs:void 0,toolCallEnd:void 0,stateSnapshot:void 0,stateDelta:void 0,messagesSnapshot:void 0,raw:void 0,custom:void 0,runStarted:void 0,runFinished:void 0,runError:void 0,stepStarted:void 0,stepFinished:void 0,textMessageChunk:void 0,toolCallChunk:void 0,subagentStarted:void 0,subagentFinished:void 0,subagentError:void 0,toolCallResult:void 0,activitySnapshot:void 0,activityDelta:void 0,reasoningStart:void 0,reasoningMessageStart:void 0,reasoningMessageContent:void 0,reasoningMessageEnd:void 0,reasoningMessageChunk:void 0,reasoningEnd:void 0,reasoningEncryptedValue:void 0}}var pv={encode(e,t=new U){return e.textMessageStart!==void 0&&Ji.encode(e.textMessageStart,t.uint32(10).fork()).join(),e.textMessageContent!==void 0&&Qi.encode(e.textMessageContent,t.uint32(18).fork()).join(),e.textMessageEnd!==void 0&&ea.encode(e.textMessageEnd,t.uint32(26).fork()).join(),e.toolCallStart!==void 0&&na.encode(e.toolCallStart,t.uint32(34).fork()).join(),e.toolCallArgs!==void 0&&ra.encode(e.toolCallArgs,t.uint32(42).fork()).join(),e.toolCallEnd!==void 0&&oa.encode(e.toolCallEnd,t.uint32(50).fork()).join(),e.stateSnapshot!==void 0&&sa.encode(e.stateSnapshot,t.uint32(58).fork()).join(),e.stateDelta!==void 0&&la.encode(e.stateDelta,t.uint32(66).fork()).join(),e.messagesSnapshot!==void 0&&ca.encode(e.messagesSnapshot,t.uint32(74).fork()).join(),e.raw!==void 0&&pa.encode(e.raw,t.uint32(82).fork()).join(),e.custom!==void 0&&ha.encode(e.custom,t.uint32(90).fork()).join(),e.runStarted!==void 0&&fa.encode(e.runStarted,t.uint32(98).fork()).join(),e.runFinished!==void 0&&ma.encode(e.runFinished,t.uint32(106).fork()).join(),e.runError!==void 0&&ga.encode(e.runError,t.uint32(114).fork()).join(),e.stepStarted!==void 0&&va.encode(e.stepStarted,t.uint32(122).fork()).join(),e.stepFinished!==void 0&&ba.encode(e.stepFinished,t.uint32(130).fork()).join(),e.textMessageChunk!==void 0&&ta.encode(e.textMessageChunk,t.uint32(138).fork()).join(),e.toolCallChunk!==void 0&&ia.encode(e.toolCallChunk,t.uint32(146).fork()).join(),e.subagentStarted!==void 0&&Aa.encode(e.subagentStarted,t.uint32(154).fork()).join(),e.subagentFinished!==void 0&&ka.encode(e.subagentFinished,t.uint32(162).fork()).join(),e.subagentError!==void 0&&Ia.encode(e.subagentError,t.uint32(170).fork()).join(),e.toolCallResult!==void 0&&aa.encode(e.toolCallResult,t.uint32(178).fork()).join(),e.activitySnapshot!==void 0&&ua.encode(e.activitySnapshot,t.uint32(186).fork()).join(),e.activityDelta!==void 0&&da.encode(e.activityDelta,t.uint32(194).fork()).join(),e.reasoningStart!==void 0&&ya.encode(e.reasoningStart,t.uint32(202).fork()).join(),e.reasoningMessageStart!==void 0&&wa.encode(e.reasoningMessageStart,t.uint32(210).fork()).join(),e.reasoningMessageContent!==void 0&&Ea.encode(e.reasoningMessageContent,t.uint32(218).fork()).join(),e.reasoningMessageEnd!==void 0&&xa.encode(e.reasoningMessageEnd,t.uint32(226).fork()).join(),e.reasoningMessageChunk!==void 0&&Sa.encode(e.reasoningMessageChunk,t.uint32(234).fork()).join(),e.reasoningEnd!==void 0&&_a.encode(e.reasoningEnd,t.uint32(242).fork()).join(),e.reasoningEncryptedValue!==void 0&&Ta.encode(e.reasoningEncryptedValue,t.uint32(250).fork()).join(),t},decode(e,t){let n=e instanceof R?e:new R(e),r=t===void 0?n.len:n.pos+t,o=cv();for(;n.pos<r;){let i=n.uint32();switch(i>>>3){case 1:if(i!==10)break;o.textMessageStart=Ji.decode(n,n.uint32());continue;case 2:if(i!==18)break;o.textMessageContent=Qi.decode(n,n.uint32());continue;case 3:if(i!==26)break;o.textMessageEnd=ea.decode(n,n.uint32());continue;case 4:if(i!==34)break;o.toolCallStart=na.decode(n,n.uint32());continue;case 5:if(i!==42)break;o.toolCallArgs=ra.decode(n,n.uint32());continue;case 6:if(i!==50)break;o.toolCallEnd=oa.decode(n,n.uint32());continue;case 7:if(i!==58)break;o.stateSnapshot=sa.decode(n,n.uint32());continue;case 8:if(i!==66)break;o.stateDelta=la.decode(n,n.uint32());continue;case 9:if(i!==74)break;o.messagesSnapshot=ca.decode(n,n.uint32());continue;case 10:if(i!==82)break;o.raw=pa.decode(n,n.uint32());continue;case 11:if(i!==90)break;o.custom=ha.decode(n,n.uint32());continue;case 12:if(i!==98)break;o.runStarted=fa.decode(n,n.uint32());continue;case 13:if(i!==106)break;o.runFinished=ma.decode(n,n.uint32());continue;case 14:if(i!==114)break;o.runError=ga.decode(n,n.uint32());continue;case 15:if(i!==122)break;o.stepStarted=va.decode(n,n.uint32());continue;case 16:if(i!==130)break;o.stepFinished=ba.decode(n,n.uint32());continue;case 17:if(i!==138)break;o.textMessageChunk=ta.decode(n,n.uint32());continue;case 18:if(i!==146)break;o.toolCallChunk=ia.decode(n,n.uint32());continue;case 19:if(i!==154)break;o.subagentStarted=Aa.decode(n,n.uint32());continue;case 20:if(i!==162)break;o.subagentFinished=ka.decode(n,n.uint32());continue;case 21:if(i!==170)break;o.subagentError=Ia.decode(n,n.uint32());continue;case 22:if(i!==178)break;o.toolCallResult=aa.decode(n,n.uint32());continue;case 23:if(i!==186)break;o.activitySnapshot=ua.decode(n,n.uint32());continue;case 24:if(i!==194)break;o.activityDelta=da.decode(n,n.uint32());continue;case 25:if(i!==202)break;o.reasoningStart=ya.decode(n,n.uint32());continue;case 26:if(i!==210)break;o.reasoningMessageStart=wa.decode(n,n.uint32());continue;case 27:if(i!==218)break;o.reasoningMessageContent=Ea.decode(n,n.uint32());continue;case 28:if(i!==226)break;o.reasoningMessageEnd=xa.decode(n,n.uint32());continue;case 29:if(i!==234)break;o.reasoningMessageChunk=Sa.decode(n,n.uint32());continue;case 30:if(i!==242)break;o.reasoningEnd=_a.decode(n,n.uint32());continue;case 31:if(i!==250)break;o.reasoningEncryptedValue=Ta.decode(n,n.uint32());continue}if((i&7)===4||i===0)break;n.skip(i&7)}return o},create(e){return pv.fromPartial(e??{})},fromPartial(e){let t=cv();return t.textMessageStart=e.textMessageStart!==void 0&&e.textMessageStart!==null?Ji.fromPartial(e.textMessageStart):void 0,t.textMessageContent=e.textMessageContent!==void 0&&e.textMessageContent!==null?Qi.fromPartial(e.textMessageContent):void 0,t.textMessageEnd=e.textMessageEnd!==void 0&&e.textMessageEnd!==null?ea.fromPartial(e.textMessageEnd):void 0,t.toolCallStart=e.toolCallStart!==void 0&&e.toolCallStart!==null?na.fromPartial(e.toolCallStart):void 0,t.toolCallArgs=e.toolCallArgs!==void 0&&e.toolCallArgs!==null?ra.fromPartial(e.toolCallArgs):void 0,t.toolCallEnd=e.toolCallEnd!==void 0&&e.toolCallEnd!==null?oa.fromPartial(e.toolCallEnd):void 0,t.stateSnapshot=e.stateSnapshot!==void 0&&e.stateSnapshot!==null?sa.fromPartial(e.stateSnapshot):void 0,t.stateDelta=e.stateDelta!==void 0&&e.stateDelta!==null?la.fromPartial(e.stateDelta):void 0,t.messagesSnapshot=e.messagesSnapshot!==void 0&&e.messagesSnapshot!==null?ca.fromPartial(e.messagesSnapshot):void 0,t.raw=e.raw!==void 0&&e.raw!==null?pa.fromPartial(e.raw):void 0,t.custom=e.custom!==void 0&&e.custom!==null?ha.fromPartial(e.custom):void 0,t.runStarted=e.runStarted!==void 0&&e.runStarted!==null?fa.fromPartial(e.runStarted):void 0,t.runFinished=e.runFinished!==void 0&&e.runFinished!==null?ma.fromPartial(e.runFinished):void 0,t.runError=e.runError!==void 0&&e.runError!==null?ga.fromPartial(e.runError):void 0,t.stepStarted=e.stepStarted!==void 0&&e.stepStarted!==null?va.fromPartial(e.stepStarted):void 0,t.stepFinished=e.stepFinished!==void 0&&e.stepFinished!==null?ba.fromPartial(e.stepFinished):void 0,t.textMessageChunk=e.textMessageChunk!==void 0&&e.textMessageChunk!==null?ta.fromPartial(e.textMessageChunk):void 0,t.toolCallChunk=e.toolCallChunk!==void 0&&e.toolCallChunk!==null?ia.fromPartial(e.toolCallChunk):void 0,t.subagentStarted=e.subagentStarted!==void 0&&e.subagentStarted!==null?Aa.fromPartial(e.subagentStarted):void 0,t.subagentFinished=e.subagentFinished!==void 0&&e.subagentFinished!==null?ka.fromPartial(e.subagentFinished):void 0,t.subagentError=e.subagentError!==void 0&&e.subagentError!==null?Ia.fromPartial(e.subagentError):void 0,t.toolCallResult=e.toolCallResult!==void 0&&e.toolCallResult!==null?aa.fromPartial(e.toolCallResult):void 0,t.activitySnapshot=e.activitySnapshot!==void 0&&e.activitySnapshot!==null?ua.fromPartial(e.activitySnapshot):void 0,t.activityDelta=e.activityDelta!==void 0&&e.activityDelta!==null?da.fromPartial(e.activityDelta):void 0,t.reasoningStart=e.reasoningStart!==void 0&&e.reasoningStart!==null?ya.fromPartial(e.reasoningStart):void 0,t.reasoningMessageStart=e.reasoningMessageStart!==void 0&&e.reasoningMessageStart!==null?wa.fromPartial(e.reasoningMessageStart):void 0,t.reasoningMessageContent=e.reasoningMessageContent!==void 0&&e.reasoningMessageContent!==null?Ea.fromPartial(e.reasoningMessageContent):void 0,t.reasoningMessageEnd=e.reasoningMessageEnd!==void 0&&e.reasoningMessageEnd!==null?xa.fromPartial(e.reasoningMessageEnd):void 0,t.reasoningMessageChunk=e.reasoningMessageChunk!==void 0&&e.reasoningMessageChunk!==null?Sa.fromPartial(e.reasoningMessageChunk):void 0,t.reasoningEnd=e.reasoningEnd!==void 0&&e.reasoningEnd!==null?_a.fromPartial(e.reasoningEnd):void 0,t.reasoningEncryptedValue=e.reasoningEncryptedValue!==void 0&&e.reasoningEncryptedValue!==null?Ta.fromPartial(e.reasoningEncryptedValue):void 0,t}};function uv(){return{provider:void 0,model:void 0,inputTokens:void 0,outputTokens:void 0,totalTokens:void 0,reasoningTokens:void 0,cachedInputTokens:void 0,cacheWriteInputTokens:void 0}}var an={encode(e,t=new U){return e.provider!==void 0&&t.uint32(10).string(e.provider),e.model!==void 0&&t.uint32(18).string(e.model),e.inputTokens!==void 0&&t.uint32(24).int64(e.inputTokens),e.outputTokens!==void 0&&t.uint32(32).int64(e.outputTokens),e.totalTokens!==void 0&&t.uint32(40).int64(e.totalTokens),e.reasoningTokens!==void 0&&t.uint32(48).int64(e.reasoningTokens),e.cachedInputTokens!==void 0&&t.uint32(56).int64(e.cachedInputTokens),e.cacheWriteInputTokens!==void 0&&t.uint32(64).int64(e.cacheWriteInputTokens),t},decode(e,t){let n=e instanceof R?e:new R(e),r=t===void 0?n.len:n.pos+t,o=uv();for(;n.pos<r;){let i=n.uint32();switch(i>>>3){case 1:if(i!==10)break;o.provider=n.string();continue;case 2:if(i!==18)break;o.model=n.string();continue;case 3:if(i!==24)break;o.inputTokens=en(n.int64());continue;case 4:if(i!==32)break;o.outputTokens=en(n.int64());continue;case 5:if(i!==40)break;o.totalTokens=en(n.int64());continue;case 6:if(i!==48)break;o.reasoningTokens=en(n.int64());continue;case 7:if(i!==56)break;o.cachedInputTokens=en(n.int64());continue;case 8:if(i!==64)break;o.cacheWriteInputTokens=en(n.int64());continue}if((i&7)===4||i===0)break;n.skip(i&7)}return o},create(e){return an.fromPartial(e??{})},fromPartial(e){let t=uv();return t.provider=e.provider??void 0,t.model=e.model??void 0,t.inputTokens=e.inputTokens??void 0,t.outputTokens=e.outputTokens??void 0,t.totalTokens=e.totalTokens??void 0,t.reasoningTokens=e.reasoningTokens??void 0,t.cachedInputTokens=e.cachedInputTokens??void 0,t.cacheWriteInputTokens=e.cacheWriteInputTokens??void 0,t}};function en(e){let t=globalThis.Number(e.toString());if(t>globalThis.Number.MAX_SAFE_INTEGER)throw new globalThis.Error("Value is larger than Number.MAX_SAFE_INTEGER");if(t<globalThis.Number.MIN_SAFE_INTEGER)throw new globalThis.Error("Value is smaller than Number.MIN_SAFE_INTEGER");return t}var Wn=e=>e&&typeof e=="object"?e:void 0,de=e=>Array.isArray(e)?e:[],g0=()=>typeof process<"u"&&typeof process.env<"u"&&!!process.env.SUPPRESS_TRANSFORMATION_WARNINGS,hv=()=>{g0()||console.warn("[ag-ui][proto] Dropped a content part this build does not know: the protocol has a variant this SDK predates.")};var rM=new Set(Object.values(v)),v0={textMessageStart:"TEXT_MESSAGE_START",textMessageContent:"TEXT_MESSAGE_CONTENT",textMessageEnd:"TEXT_MESSAGE_END",textMessageChunk:"TEXT_MESSAGE_CHUNK",toolCallStart:"TOOL_CALL_START",toolCallArgs:"TOOL_CALL_ARGS",toolCallEnd:"TOOL_CALL_END",toolCallChunk:"TOOL_CALL_CHUNK",toolCallResult:"TOOL_CALL_RESULT",stateSnapshot:"STATE_SNAPSHOT",stateDelta:"STATE_DELTA",messagesSnapshot:"MESSAGES_SNAPSHOT",activitySnapshot:"ACTIVITY_SNAPSHOT",activityDelta:"ACTIVITY_DELTA",raw:"RAW",custom:"CUSTOM",runStarted:"RUN_STARTED",runFinished:"RUN_FINISHED",runError:"RUN_ERROR",stepStarted:"STEP_STARTED",stepFinished:"STEP_FINISHED",reasoningStart:"REASONING_START",reasoningMessageStart:"REASONING_MESSAGE_START",reasoningMessageContent:"REASONING_MESSAGE_CONTENT",reasoningMessageEnd:"REASONING_MESSAGE_END",reasoningMessageChunk:"REASONING_MESSAGE_CHUNK",reasoningEnd:"REASONING_END",reasoningEncryptedValue:"REASONING_ENCRYPTED_VALUE",subagentStarted:"SUBAGENT_STARTED",subagentFinished:"SUBAGENT_FINISHED",subagentError:"SUBAGENT_ERROR"},tn=new Set([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31]);var Pt=e=>{let t=Wn(e);if(t){if([t.data,t.url,t.file].filter(Boolean).length>1)throw new Error("Invalid event: source carries more than one arm");if(t.data){let n=t.data;return{type:"data",value:n.value,mimeType:n.mimeType}}if(t.url){let n=t.url;return{type:"url",value:n.value,mimeType:n.mimeType}}if(t.file){let n=t.file;return{type:"file",value:n.value,provider:n.provider,mimeType:n.mimeType}}}};var fv=e=>{let t=Wn(e);if(t){if([t.text,t.image,t.audio,t.video,t.document].filter(Boolean).length>1)throw new Error("Invalid event: content part carries more than one arm");if(t.text){let n=t.text;return{type:"text",id:n.id,text:n.text,metadata:n.metadata}}if(t.image){let n=t.image;return n.source!==void 0&&Pt(n.source)===void 0?void 0:{type:"image",id:n.id,source:Pt(n.source),metadata:n.metadata}}if(t.audio){let n=t.audio;return n.source!==void 0&&Pt(n.source)===void 0?void 0:{type:"audio",id:n.id,source:Pt(n.source),metadata:n.metadata}}if(t.video){let n=t.video;return n.source!==void 0&&Pt(n.source)===void 0?void 0:{type:"video",id:n.id,source:Pt(n.source),metadata:n.metadata}}if(t.document){let n=t.document;return n.source!==void 0&&Pt(n.source)===void 0?void 0:{type:"document",id:n.id,source:Pt(n.source),metadata:n.metadata}}}},b0=new Set(["activity"]),y0=new Set(["user","tool"]),w0=new Set(["developer","system","assistant","user","tool","activity","reasoning"]);var mv=e=>{let t=Wn(e)??{},n={...t},r=typeof t.role=="string"?t.role:"",o=w0.has(r),i=o?y0.has(r):de(t.contentParts).length>0,a=o?b0.has(r):!i&&t.activityContent!==void 0;if(!o&&(t.content!==void 0?1:0)+(de(t.contentParts).length>0?1:0)+(t.activityContent!==void 0?1:0)>1)throw new Error("Invalid event: message carries more than one content form");if(o){if(!i&&de(t.contentParts).length>0)throw new Error("Invalid event: message carries content parts for a role that has none");if(t.activityContent!==void 0&&!a)throw new Error("Invalid event: message carries activity content for a non-activity role");if(a&&t.content!==void 0)throw new Error("Invalid event: activity content cannot ride with other content forms");if(i&&t.content!==void 0&&de(t.contentParts).length>0)throw new Error("Invalid event: message carries both string content and content parts")}return i&&t.content===void 0&&(n.content=de(t.contentParts).map(s=>{let c=fv(s);return c===void 0&&hv(),c}).filter(s=>s!==void 0)),a&&t.activityContent!==void 0&&(n.content=t.activityContent),delete n.activityContent,delete n.contentParts,de(t.toolCalls).length===0&&delete n.toolCalls,Object.keys(n).forEach(s=>{n[s]===void 0&&delete n[s]}),n},eu=e=>{if(Array.isArray(e)){for(let n of e)eu(n);return}let t=Wn(e);if(t)for(let n of Object.keys(t))t[n]===void 0?delete t[n]:eu(t[n])};var E0=e=>{let t=Wn(e);if(!t)return;let n={};return t.threadId!==void 0&&(n.threadId=t.threadId),t.runId!==void 0&&(n.runId=t.runId),t.protocolVersion!==void 0&&(n.protocolVersion=t.protocolVersion),t.parentRunId!==void 0&&(n.parentRunId=t.parentRunId),t.state!==void 0&&(n.state=t.state),n.messages=de(t.messages).map(mv).filter(r=>r!==void 0),n.tools=de(t.tools),n.context=de(t.context),t.forwardedProps!==void 0&&(n.forwardedProps=t.forwardedProps),n.resume=de(t.resume),n};var tu={TextMessageStartEvent:{singular:new Set([1]),descend:{1:"BaseEvent"}},BaseEvent:{singular:new Set([3,4]),descend:{},google:{3:"google.protobuf.Value",4:"google.protobuf.Struct"}},TextMessageContentEvent:{singular:new Set([1]),descend:{1:"BaseEvent"}},TextMessageEndEvent:{singular:new Set([1]),descend:{1:"BaseEvent"}},ToolCallStartEvent:{singular:new Set([1]),descend:{1:"BaseEvent"}},ToolCallArgsEvent:{singular:new Set([1]),descend:{1:"BaseEvent"}},ToolCallEndEvent:{singular:new Set([1]),descend:{1:"BaseEvent"}},StateSnapshotEvent:{singular:new Set([1,2]),descend:{1:"BaseEvent"},google:{2:"google.protobuf.Value"}},StateDeltaEvent:{singular:new Set([1]),descend:{1:"BaseEvent",2:"JsonPatchOperation"}},JsonPatchOperation:{singular:new Set([4]),descend:{},google:{4:"google.protobuf.Value"}},MessagesSnapshotEvent:{singular:new Set([1]),descend:{1:"BaseEvent",2:"Message"}},Message:{singular:new Set([9,13]),descend:{5:"ToolCall",8:"InputContent"},google:{9:"google.protobuf.Struct",13:"google.protobuf.Struct"}},ToolCall:{singular:new Set([3,4]),descend:{},google:{4:"google.protobuf.Struct"}},InputContent:{singular:new Set([1,2,3,4,5]),descend:{1:"TextInputPart",2:"ImageInputPart",3:"AudioInputPart",4:"VideoInputPart",5:"DocumentInputPart"},arms:new Set([1,2,3,4,5])},TextInputPart:{singular:new Set([3]),descend:{},google:{3:"google.protobuf.Value"}},ImageInputPart:{singular:new Set([1,2]),descend:{1:"InputContentSource"},google:{2:"google.protobuf.Value"}},InputContentSource:{singular:new Set([1,2,3]),descend:{},arms:new Set([1,2,3])},AudioInputPart:{singular:new Set([1,2]),descend:{1:"InputContentSource"},google:{2:"google.protobuf.Value"}},VideoInputPart:{singular:new Set([1,2]),descend:{1:"InputContentSource"},google:{2:"google.protobuf.Value"}},DocumentInputPart:{singular:new Set([1,2]),descend:{1:"InputContentSource"},google:{2:"google.protobuf.Value"}},RawEvent:{singular:new Set([1,2]),descend:{1:"BaseEvent"},google:{2:"google.protobuf.Value"}},CustomEvent:{singular:new Set([1,3]),descend:{1:"BaseEvent"},google:{3:"google.protobuf.Value"}},RunStartedEvent:{singular:new Set([1,5]),descend:{1:"BaseEvent",5:"RunAgentInput"}},RunAgentInput:{singular:new Set([4,8]),descend:{5:"Message",6:"Tool",9:"ResumeEntry"},google:{4:"google.protobuf.Value",8:"google.protobuf.Value"}},Tool:{singular:new Set([3,4]),descend:{},google:{3:"google.protobuf.Value",4:"google.protobuf.Struct"}},ResumeEntry:{singular:new Set([3,4]),descend:{},google:{3:"google.protobuf.Value",4:"google.protobuf.Struct"}},RunFinishedEvent:{singular:new Set([1,4]),descend:{1:"BaseEvent",6:"Interrupt"},google:{4:"google.protobuf.Value"}},Interrupt:{singular:new Set([5,7]),descend:{},google:{5:"google.protobuf.Value",7:"google.protobuf.Value"}},RunErrorEvent:{singular:new Set([1]),descend:{1:"BaseEvent"}},StepStartedEvent:{singular:new Set([1]),descend:{1:"BaseEvent"}},StepFinishedEvent:{singular:new Set([1]),descend:{1:"BaseEvent"}},TextMessageChunkEvent:{singular:new Set([1]),descend:{1:"BaseEvent"}},ToolCallChunkEvent:{singular:new Set([1]),descend:{1:"BaseEvent"}},SubagentStartedEvent:{singular:new Set([1]),descend:{1:"BaseEvent"}},SubagentFinishedEvent:{singular:new Set([1,3]),descend:{1:"BaseEvent"},google:{3:"google.protobuf.Value"}},SubagentErrorEvent:{singular:new Set([1]),descend:{1:"BaseEvent"}},ToolCallResultEvent:{singular:new Set([1]),descend:{1:"BaseEvent",7:"InputContent"}},ActivitySnapshotEvent:{singular:new Set([1,5]),descend:{1:"BaseEvent"},google:{5:"google.protobuf.Struct"}},ActivityDeltaEvent:{singular:new Set([1]),descend:{1:"BaseEvent",5:"JsonPatchOperation"}},ReasoningStartEvent:{singular:new Set([1]),descend:{1:"BaseEvent"}},ReasoningMessageStartEvent:{singular:new Set([1]),descend:{1:"BaseEvent"}},ReasoningMessageContentEvent:{singular:new Set([1]),descend:{1:"BaseEvent"}},ReasoningMessageEndEvent:{singular:new Set([1]),descend:{1:"BaseEvent"}},ReasoningMessageChunkEvent:{singular:new Set([1]),descend:{1:"BaseEvent"}},ReasoningEndEvent:{singular:new Set([1]),descend:{1:"BaseEvent"}},ReasoningEncryptedValueEvent:{singular:new Set([1]),descend:{1:"BaseEvent"}},"google.protobuf.Struct":{singular:new Set,descend:{1:"google.protobuf.Struct.FieldsEntry"}},"google.protobuf.Struct.FieldsEntry":{singular:new Set([2]),descend:{2:"google.protobuf.Value"}},"google.protobuf.Value":{singular:new Set([5,6]),descend:{5:"google.protobuf.Struct",6:"google.protobuf.ListValue"},arms:new Set([1,2,3,4,5,6]),armWireTypes:{1:0,2:1,3:2,4:0,5:2,6:2}},"google.protobuf.ListValue":{singular:new Set,descend:{1:"google.protobuf.Value"}}},gv={1:"TextMessageStartEvent",2:"TextMessageContentEvent",3:"TextMessageEndEvent",4:"ToolCallStartEvent",5:"ToolCallArgsEvent",6:"ToolCallEndEvent",7:"StateSnapshotEvent",8:"StateDeltaEvent",9:"MessagesSnapshotEvent",10:"RawEvent",11:"CustomEvent",12:"RunStartedEvent",13:"RunFinishedEvent",14:"RunErrorEvent",15:"StepStartedEvent",16:"StepFinishedEvent",17:"TextMessageChunkEvent",18:"ToolCallChunkEvent",19:"SubagentStartedEvent",20:"SubagentFinishedEvent",21:"SubagentErrorEvent",22:"ToolCallResultEvent",23:"ActivitySnapshotEvent",24:"ActivityDeltaEvent",25:"ReasoningStartEvent",26:"ReasoningMessageStartEvent",27:"ReasoningMessageContentEvent",28:"ReasoningMessageEndEvent",29:"ReasoningMessageChunkEvent",30:"ReasoningEndEvent",31:"ReasoningEncryptedValueEvent"};function jn(e,t){let n=0,r=0;for(;;){if(t.offset>=e.length)throw new Error("Invalid event");let o=e[t.offset++];if(r<28?n+=(o&127)*2**r:r===28&&(n+=(o&15)*2**28),r+=7,(o&128)===0)return n}}function vv(e,t){let n={offset:0},r=0,o=0;for(;n.offset<e.length;){let i=jn(e,n),a=Math.floor(i/8),s=i%8;if(a===0)throw new Error("Invalid event");if(s===3){r+=1;continue}if(s===4){if(r-=1,r<0)throw new Error("Invalid event");continue}if(s===0)jn(e,n);else if(s===1)n.offset+=8;else if(s===2){let c=jn(e,n);if(n.offset+c>e.length)throw new Error("Invalid event");if(r===0){if(t.arms?.has(a)){if(o!==0&&o!==a)throw new Error("Invalid event");o=a}let l=t.descend[a];if(l!==void 0){let u=tu[l];u!==void 0&&vv(e.subarray(n.offset,n.offset+c),u)}}n.offset+=c}else if(s===5)n.offset+=4;else throw new Error("Invalid event");if(n.offset>e.length)throw new Error("Invalid event")}if(r!==0)throw new Error("Invalid event")}function x0(e){let t=new Set,n={offset:0},r=0;for(;n.offset<e.length;){let o=jn(e,n),i=Math.floor(o/8),a=o%8;if(i===0)throw new Error("Invalid event");if(a===3){r+=1;continue}if(a===4){if(r-=1,r<0)throw new Error("Invalid event");continue}if(r===0&&tn.has(i)){if(t.size>0&&!t.has(i))throw new Error("Invalid event");t.add(i)}if(a===0)jn(e,n);else if(a===1)n.offset+=8;else if(a===2){let s=jn(e,n);if(n.offset+s>e.length)throw new Error("Invalid event");if(r===0){let c=gv[i];if(c!==void 0){let l=tu[c];l!==void 0&&vv(e.subarray(n.offset,n.offset+s),l)}}n.offset+=s}else if(a===5)n.offset+=4;else throw new Error("Invalid event");if(n.offset>e.length)throw new Error("Invalid event")}if(r!==0)throw new Error("Invalid event")}function dv(e){if(e.length===1)return e[0];let t=new Uint8Array(e.reduce((r,o)=>r+o.length,0)),n=0;for(let r of e)t.set(r,n),n+=r.length;return t}function bv(e,t){let n=new R(e),r=[],o=new Map,i,a=!1;for(;n.pos<n.len;){let c=n.pos,[l,u]=n.tag(),m=u===2?n.bytes():void 0;m===void 0&&n.skip(u,l);let f=t.arms?.has(l)&&u===(t.armWireTypes?.[l]??2);if(f){if(i!==void 0&&i!==l){let S=o.get(i);S!==void 0&&(r[S]=void 0),o.delete(i),a=!0}if(i=l,!t.singular.has(l)){let S=o.get(l);S!==void 0&&(r[S]=void 0,o.delete(l),a=!0)}}let h=t.descend[l]??t.google?.[l],p=m!==void 0&&(t.singular.has(l)||h!==void 0),E=o.get(l),b=E===void 0?void 0:r[E]?.payloads;if(p&&t.singular.has(l)&&b!==void 0){b.push(m),a=!0;continue}(p||f)&&o.set(l,r.length),r.push({number:l,raw:e.subarray(c,n.pos),...p&&{payloads:[m]},child:h===void 0?void 0:tu[h]})}let s=[];for(let c of r)if(c!==void 0){if(c.payloads!==void 0){let l=dv(c.payloads),u=c.child===void 0?l:bv(l,c.child);if(c.payloads.length>1||u!==l){s.push(new U().uint32(c.number*8+2).bytes(u).finish()),a=!0;continue}}s.push(c.raw)}return a?dv(s):e}var nu=class extends Error{constructor(e="Unknown event type"){super(e),this.name="AGUIUnknownEventTypeError"}};function yv(e,t,n,r){let o=0,i=0,a=0;for(;;){if(t.offset>=e.length||a>=n)return-1;let s=e[t.offset++];if(a+=1,a===n&&s>r)return-1;if(o+=(s&127)*2**i,i+=7,(s&128)===0)return o}}var Ra=(e,t)=>yv(e,t,5,15),wv=(e,t)=>yv(e,t,10,1);function S0(e){let t={offset:0},n=[];for(;t.offset<e.length;){let r=Ra(e,t);if(r<0)return!1;let o=Math.floor(r/8),i=r%8;if(o===0)return!1;if(i===3)n.push(o);else if(i===4){if(n.pop()!==o)return!1}else if(i===0){if(wv(e,t)<0)return!1}else if(i===1)t.offset+=8;else if(i===5)t.offset+=4;else if(i===2){let a=Ra(e,t);if(a<0||t.offset+a>e.length)return!1;t.offset+=a}else return!1;if(t.offset>e.length)return!1}return n.length===0}function _0(e){let t={offset:0},n=[],r=0;for(;t.offset<e.length;){let o=Ra(e,t);if(o<0)return!1;let i=Math.floor(o/8),a=o%8;if(i===0)return!1;let s=n.length===0;if(a===3){if(s&&tn.has(i))return!1;n.push(i)}else if(a===4){if(n.pop()!==i)return!1}else if(a===0){if(s&&tn.has(i)||wv(e,t)<0)return!1}else if(a===1){if(s&&tn.has(i))return!1;t.offset+=8}else if(a===5){if(s&&tn.has(i))return!1;t.offset+=4}else if(a===2){let c=Ra(e,t);if(c<0||t.offset+c>e.length)return!1;if(s){if(tn.has(i)||!S0(e.subarray(t.offset,t.offset+c)))return!1;r+=1}t.offset+=c}else return!1;if(t.offset>e.length)return!1}return n.length===0&&r>0}function Ev(e){x0(e);let t=pv.decode(bv(e,{singular:tn,descend:gv})),n=Object.entries(t).filter(([,c])=>c!==void 0);if(n.length!==1)throw n.length===0&&_0(e)?new nu:new Error("Invalid event");let r=n[0],o=v0[r[0]];if(o===void 0)throw new Error("Invalid event");let i=r[1],a=Wn(i.baseEvent);if(!a)throw new Error("Invalid event");let s=m0[a.type];if(s!==o)throw new Error("Invalid event: envelope carries "+o+" but the base event declares "+String(s));if(i.type=o,i.timestamp=a.timestamp,i.rawEvent=a.rawEvent,a.metadata!==void 0&&(i.metadata=a.metadata),delete i.baseEvent,i.type==="MESSAGES_SNAPSHOT"&&Array.isArray(i.messages)&&(i.messages=i.messages.map(mv).filter(c=>c!==void 0)),i.type==="RUN_FINISHED"){let c=i,l=typeof c.outcome=="string"&&c.outcome!==""?c.outcome:void 0,u={};u.pendingToolCallIds=c.pendingToolCallIds,delete c.pendingToolCallIds,u.interrupts=c.interrupts,delete c.interrupts,delete c.outcome,l===void 0&&(de(u.pendingToolCallIds).length>0&&(c.pendingToolCallIds=u.pendingToolCallIds),de(u.interrupts).length>0&&(c.interrupts=u.interrupts)),l==="success"&&(c.outcome={type:"success",...de(u.pendingToolCallIds).length>0?{pendingToolCallIds:u.pendingToolCallIds}:{},...de(u.interrupts).length>0?{interrupts:u.interrupts}:{}}),l==="interrupt"&&(c.outcome={type:"interrupt",interrupts:de(u.interrupts),...de(u.pendingToolCallIds).length>0?{pendingToolCallIds:u.pendingToolCallIds}:{}}),l==="cancelled"&&(c.outcome={type:"cancelled",...de(u.pendingToolCallIds).length>0?{pendingToolCallIds:u.pendingToolCallIds}:{},...de(u.interrupts).length>0?{interrupts:u.interrupts}:{}}),l!==void 0&&!["success","interrupt","cancelled"].includes(l)&&(c.outcome={type:l,...de(u.pendingToolCallIds).length>0?{pendingToolCallIds:u.pendingToolCallIds}:{},...de(u.interrupts).length>0?{interrupts:u.interrupts}:{}})}if(i.type==="SUBAGENT_FINISHED"){let c=i,l=typeof c.outcome=="string"&&c.outcome!==""?c.outcome:void 0,u={};u.interruptIds=c.interruptIds,delete c.interruptIds,delete c.outcome,l===void 0&&de(u.interruptIds).length>0&&(c.interruptIds=u.interruptIds),l==="success"&&(c.outcome={type:"success",...de(u.interruptIds).length>0?{interruptIds:u.interruptIds}:{}}),l==="suspended"&&(c.outcome={type:"suspended",...de(u.interruptIds).length>0?{interruptIds:u.interruptIds}:{}}),l!==void 0&&!["success","suspended"].includes(l)&&(c.outcome={type:l,...de(u.interruptIds).length>0?{interruptIds:u.interruptIds}:{}})}if(i.type==="STATE_DELTA"&&Array.isArray(i.delta)&&(i.delta=i.delta.map(c=>{let l=dg[c.op];return c.op=typeof l=="string"&&l!=="UNRECOGNIZED"?l.toLowerCase():String(c.op),Object.keys(c).forEach(u=>{c[u]===void 0&&delete c[u]}),c})),i.type==="ACTIVITY_DELTA"&&Array.isArray(i.patch)&&(i.patch=i.patch.map(c=>{let l=dg[c.op];return c.op=typeof l=="string"&&l!=="UNRECOGNIZED"?l.toLowerCase():String(c.op),Object.keys(c).forEach(u=>{c[u]===void 0&&delete c[u]}),c})),i.type==="RUN_FINISHED"&&Array.isArray(i.usage)&&i.usage.length===0&&delete i.usage,i.type==="RUN_ERROR"&&Array.isArray(i.usage)&&i.usage.length===0&&delete i.usage,i.type==="TOOL_CALL_RESULT"){let c=i;if(c.content!==void 0&&de(c.contentParts).length>0)throw new Error("Invalid event: content carries both string content and content parts");c.content===void 0&&(c.content=de(c.contentParts).map(l=>{let u=fv(l);return u===void 0&&hv(),u}).filter(l=>l!==void 0)),delete c.contentParts}return i.type==="RUN_STARTED"&&i.input!==void 0&&(i.input=E0(i.input)),eu(i),i}var ru="application/vnd.ag-ui.event+proto";var ou=/^[v^~<>=]*?(\d+)(?:\.([x*]|\d+)(?:\.([x*]|\d+)(?:\.([x*]|\d+))?(?:-([\da-z\-]+(?:\.[\da-z\-]+)*))?(?:\+[\da-z\-]+(?:\.[\da-z\-]+)*)?)?)?$/i,iu=e=>{if(typeof e!="string")throw new TypeError("Invalid argument expected string");let t=e.match(ou);if(!t)throw new Error(`Invalid argument not valid semver ('${e}' received)`);return t.shift(),t},xv=e=>e==="*"||e==="x"||e==="X",Sv=e=>{let t=parseInt(e,10);return isNaN(t)?e:t},A0=(e,t)=>typeof e!=typeof t?[String(e),String(t)]:[e,t],k0=(e,t)=>{if(xv(e)||xv(t))return 0;let[n,r]=A0(Sv(e),Sv(t));return n>r?1:n<r?-1:0},au=(e,t)=>{for(let n=0;n<Math.max(e.length,t.length);n++){let r=k0(e[n]||"0",t[n]||"0");if(r!==0)return r}return 0};var sn=(e,t)=>{let n=iu(e),r=iu(t),o=n.pop(),i=r.pop(),a=au(n,r);return a!==0?a:o&&i?au(o.split("."),i.split(".")):o||i?o?-1:1:0};var su=e=>typeof e=="string"&&/^[v\d]/.test(e)&&ou.test(e);var _v="@ag-ui/client";function I0(e){if(!e.metadata||!Object.prototype.hasOwnProperty.call(e.metadata,_v))return;let t=e.metadata?.[_v];if(!t||typeof t!="object"||Array.isArray(t))return[];if(!Object.prototype.hasOwnProperty.call(t,"authoritativeActivityTypes"))return;let n=t.authoritativeActivityTypes;return n===null?null:Array.isArray(n)&&n.every(r=>typeof r=="string")?n:[]}var Q=e=>{if(typeof structuredClone=="function")return structuredClone(e);try{return JSON.parse(JSON.stringify(e))}catch{return Array.isArray(e)?[...e]:{...e}}};function we(){return It()}function R0(e){return e instanceof TypeError?/read[- ]?only|not extensible|cannot add property|cannot delete property|can't be deleted|unable to delete property|object is frozen|is not writable/i.test(e.message):!1}function bu(e){if(Object.freeze(e),typeof e=="object"&&e)for(let t of Object.values(e))typeof t=="object"&&t&&!Object.isFrozen(t)&&bu(t);return e}var Tv=512*1024;function Av(e,t,n){let r=0,o=[e,t],i=new WeakSet;for(;o.length>0;){let a=o.pop();if(typeof a=="string"){if(r+=a.length,r>n)return!0}else if(typeof a=="object"&&a){if(i.has(a))continue;if(i.add(a),Array.isArray(a))for(let s=0;s<a.length;s++)o.push(a[s]);else{let s=Object.keys(a);for(let c=0;c<s.length;c++){let l=s[c];if(r+=l.length,r>n)return!0;o.push(a[l])}}}}return!1}async function re(e,t,n,r){let o=typeof process<"u"&&process.env!==void 0,i=o&&!!process.env.VITEST_WORKER_ID,a=o&&!!process.env.VITEST_WORKER_ID,s=a&&!Av(t,n,Tv),c=s?Q(t):t,l=s?Q(n):n,u=!1,m=!1,f;for(let h of e)try{s&&(bu(c),bu(l));let p=await r(h,c,l);if(p===void 0)continue;let E=!1;if(p.messages!==void 0&&p.messages!==c&&(c=Q(p.messages),u=!0,E=!0),p.state!==void 0&&p.state!==l&&(l=Q(p.state),m=!0,E=!0),s&&E&&Av(c,l,Tv)&&(s=!1),f=p.stopPropagation,f===!0)break}catch(p){if(i&&p instanceof TypeError)throw p;s&&a&&R0(p)?console.error("AG-UI: Subscriber attempted to mutate frozen inputs in-place. Return mutations via AgentStateMutation instead of mutating directly.",p):console.error("Subscriber error:",p);continue}return{...u?{messages:Object.isFrozen(c)?Q(c):c}:{},...m?{state:Object.isFrozen(l)?Q(l):l}:{},...f===void 0?{}:{stopPropagation:f}}}function Oa(e){if(!e)return{enabled:!1,events:!1,lifecycle:!1,verbose:!1};if(e===!0)return{enabled:!0,events:!0,lifecycle:!0,verbose:!0};let t=e.events??!0,n=e.lifecycle??!0,r=e.verbose??!1;return{enabled:t||n,events:t,lifecycle:n,verbose:r}}function cn(e){if(e instanceof yu)return e;if(e===!0)return new yu(Oa(!0))}var yu=class{constructor(e){this.config=e}event(e,t,n,r){this.config.events&&(this.config.verbose?console.debug(`[${e}] ${t}`,typeof n=="string"?n:JSON.stringify(n)):console.debug(`[${e}] ${t}`,r??n))}lifecycle(e,t,n){this.config.lifecycle&&(n?console.debug(`[${e}] ${t}`,n):console.debug(`[${e}] ${t}`))}get eventsEnabled(){return this.config.events}get lifecycleEnabled(){return this.config.lifecycle}get enabled(){return this.config.enabled}};function lu(e){return e.enabled?new yu(e):void 0}function C0(e,t,n){if(t){let o=e.find(a=>a.id===t);if(o?.role==="assistant")return o;o&&console.warn(`TOOL_CALL_START: parentMessageId '${t}' matches a '${o.role}' message, not assistant \u2014 falling back to toolCallId`);let i={id:o?n:t,role:"assistant",toolCalls:[]};return e.push(i),i}let r={id:n,role:"assistant",toolCalls:[]};return e.push(r),r}function Ye(e,t){return!e||t.metadata===void 0?!1:(e.metadata=Ep(e.metadata,Q(t.metadata)),!0)}var Gv=(e,t,n,r,o)=>{let i=cn(o),a=Q(n.messages),s=Q(e.state),c={},l=[],u=new Set,m=p=>{let E=p.outcome?.type==="success"?p.outcome.pendingToolCallIds:void 0;return E!==void 0&&E.length>0?[...E]:l.filter(b=>!u.has(b))},f=p=>{p.messages!==void 0&&(a=p.messages,c.messages=p.messages),p.state!==void 0&&(s=p.state,c.state=p.state)},h=()=>{let p=Q(c);return c={},p.messages!==void 0||p.state!==void 0?ae(p):wr};return t.pipe(pi(async p=>{let E=await re(r,a,s,(b,S,y)=>b.onEvent?.({event:p,agent:n,input:e,messages:S,state:y}));if(f(E),E.stopPropagation===!0?i?.event("APPLY","Event dropped:",p,{type:p.type,reason:"stopPropagation by subscriber"}):i?.event("APPLY","Event applied:",p,{type:p.type,subscribers:r.length}),E.stopPropagation===!0)return h();switch(p.type){case v.TEXT_MESSAGE_START:{let b=await re(r,a,s,(S,y,T)=>S.onTextMessageStartEvent?.({event:p,messages:y,state:T,agent:n,input:e}));if(f(b),b.stopPropagation!==!0){let{messageId:S,role:y="assistant",name:T,subagentRunId:w}=p,_=a.find(z=>z.id===S);if(_?.role==="activity")return console.warn(`TEXT_MESSAGE_START: Message '${S}' is an activity message \u2014 message ids must be unique across activity and text messages`),h();let g=_;if(!g){let z={id:S,role:y,content:"",...T!==void 0&&{name:T},...w!=null&&{subagentRunId:w}};a.push(z),g=z}let I=Ye(g,p);(!_||I)&&f({messages:a})}return h()}case v.TEXT_MESSAGE_CONTENT:{let{messageId:b,delta:S}=p,y=a.find(w=>w.id===b);if(!y)return console.warn(`TEXT_MESSAGE_CONTENT: No message found with ID '${b}'`),h();if(y.role==="activity")return console.warn(`TEXT_MESSAGE_CONTENT: Message '${b}' is an activity message \u2014 message ids must be unique across activity and text messages`),h();let T=await re(r,a,s,(w,_,g)=>w.onTextMessageContentEvent?.({event:p,messages:_,state:g,agent:n,input:e,textMessageBuffer:typeof y.content=="string"?y.content:""}));return f(T),T.stopPropagation!==!0&&(y.content=`${typeof y.content=="string"?y.content:""}${S}`,Ye(y,p),f({messages:a})),h()}case v.TEXT_MESSAGE_END:{let{messageId:b}=p,S=a.find(T=>T.id===b);if(!S)return console.warn(`TEXT_MESSAGE_END: No message found with ID '${b}'`),h();if(S.role==="activity")return console.warn(`TEXT_MESSAGE_END: Message '${b}' is an activity message \u2014 message ids must be unique across activity and text messages`),h();let y=await re(r,a,s,(T,w,_)=>T.onTextMessageEndEvent?.({event:p,messages:w,state:_,agent:n,input:e,textMessageBuffer:typeof S.content=="string"?S.content:""}));return f(y),y.stopPropagation!==!0&&Ye(S,p)&&f({messages:a}),await Promise.all(r.map(T=>{T.onNewMessage?.({message:S,messages:a,state:s,agent:n,input:e})})),h()}case v.TOOL_CALL_START:{let b=await re(r,a,s,(S,y,T)=>S.onToolCallStartEvent?.({event:p,messages:y,state:T,agent:n,input:e}));if(f(b),b.stopPropagation!==!0){let{toolCallId:S,toolCallName:y,parentMessageId:T,subagentRunId:w}=p;l.includes(S)||l.push(S);let _=a.find(L=>L.toolCalls?.some(q=>q.id===S))?.toolCalls?.find(L=>L.id===S);if(_){let L=_.function.name!==y;return L&&(console.warn(`TOOL_CALL_START: tool call '${S}' already exists with name '${_.function.name}' \u2014 updating it to '${y}'`),_.function.name=y),(Ye(_,p)||L)&&f({messages:a}),h()}let g=new Set(a.map(L=>L.id)),I=C0(a,T,S);!g.has(I.id)&&w!=null&&I.subagentRunId===void 0&&(I.subagentRunId=w),I.toolCalls??=[];let z={id:S,type:"function",function:{name:y,arguments:""}};I.toolCalls.push(z),Ye(z,p),f({messages:a})}return h()}case v.TOOL_CALL_ARGS:{let{toolCallId:b,delta:S}=p,y=a.find(_=>_.toolCalls?.some(g=>g.id===b));if(!y)return console.warn(`TOOL_CALL_ARGS: No message found containing tool call with ID '${b}'`),h();let T=y.toolCalls?.find(_=>_.id===b);if(!T)return console.warn(`TOOL_CALL_ARGS: No tool call found with ID '${b}'`),h();let w=await re(r,a,s,(_,g,I)=>{let z=T.function.arguments,L=T.function.name,q={};try{q=mi(z)}catch{}return _.onToolCallArgsEvent?.({event:p,messages:g,state:I,agent:n,input:e,toolCallBuffer:z,toolCallName:L,partialToolCallArgs:q})});return f(w),w.stopPropagation!==!0&&(T.function.arguments+=S,Ye(T,p),f({messages:a})),h()}case v.TOOL_CALL_END:{let{toolCallId:b}=p,S=a.find(w=>w.toolCalls?.some(_=>_.id===b));if(!S)return console.warn(`TOOL_CALL_END: No message found containing tool call with ID '${b}'`),h();let y=S.toolCalls?.find(w=>w.id===b);if(!y)return console.warn(`TOOL_CALL_END: No tool call found with ID '${b}'`),h();let T=await re(r,a,s,(w,_,g)=>{let I=y.function.arguments,z=y.function.name,L={};try{L=JSON.parse(I)}catch{}return w.onToolCallEndEvent?.({event:p,messages:_,state:g,agent:n,input:e,toolCallName:z,toolCallArgs:L})});return f(T),T.stopPropagation!==!0&&Ye(y,p)&&f({messages:a}),await Promise.all(r.map(w=>{w.onNewToolCall?.({toolCall:y,messages:a,state:s,agent:n,input:e})})),h()}case v.TOOL_CALL_RESULT:{let b=await re(r,a,s,(S,y,T)=>S.onToolCallResultEvent?.({event:p,messages:y,state:T,agent:n,input:e}));if(f(b),b.stopPropagation!==!0){let{messageId:S,toolCallId:y,content:T,role:w,subagentRunId:_}=p;u.add(y);let g={id:S,toolCallId:y,role:w||"tool",content:T,..._!=null&&{subagentRunId:_}};Ye(g,p);let I=a.findIndex(z=>z.role==="assistant"&&z.toolCalls?.some(L=>L.id===y));if(I===-1)a.push(g);else{let z=I+1;for(;z<a.length&&a[z].role==="tool";)z++;a.splice(z,0,g)}await Promise.all(r.map(z=>{z.onNewMessage?.({message:g,messages:a,state:s,agent:n,input:e})})),f({messages:a})}return h()}case v.STATE_SNAPSHOT:{let b=await re(r,a,s,(S,y,T)=>S.onStateSnapshotEvent?.({event:p,messages:y,state:T,agent:n,input:e}));if(f(b),b.stopPropagation!==!0){let{snapshot:S}=p;s=S,f({state:s})}return h()}case v.STATE_DELTA:{let b=await re(r,a,s,(S,y,T)=>S.onStateDeltaEvent?.({event:p,messages:y,state:T,agent:n,input:e}));if(f(b),b.stopPropagation!==!0){let{delta:S}=p;try{s=Bo.applyPatch(s,S,!0,!1).newDocument,f({state:s})}catch(y){let T=y instanceof Error?y.message:String(y);console.warn(`Failed to apply state patch:
Current state: ${JSON.stringify(s,null,2)}
Patch operations: ${JSON.stringify(S,null,2)}
Error: ${T}`)}}return h()}case v.MESSAGES_SNAPSHOT:{let b=await re(r,a,s,(S,y,T)=>S.onMessagesSnapshotEvent?.({event:p,messages:y,state:T,agent:n,input:e}));if(f(b),b.stopPropagation!==!0){let{messages:S}=p,y=S.map(L=>{if(L.subagentRunId!==null)return L;let q={...L};return delete q.subagentRunId,q}),T=new Map(y.map(L=>[L.id,L])),w=I0(p),_=y.some(L=>L.role==="activity"),g=y.some(L=>L.role==="reasoning"),I=L=>L.role==="activity"&&(w?!w.includes(L.activityType):w!==null&&!_)||L.role==="reasoning"&&!g;a=a.filter(L=>T.has(L.id)||I(L)).map(L=>T.get(L.id)??L);let z=new Set(a.map(L=>L.id));for(let L of y)z.has(L.id)||a.push(L);f({messages:a})}return h()}case v.ACTIVITY_SNAPSHOT:{let b=p,S=a.findIndex(g=>g.id===b.messageId),y=S>=0?a[S]:void 0,T=y?.role==="activity"?y:void 0,w=b.replace??!0,_=await re(r,a,s,(g,I,z)=>g.onActivitySnapshotEvent?.({event:b,messages:I,state:z,agent:n,input:e,activityMessage:T,existingMessage:y}));if(f(_),_.stopPropagation!==!0){let g={id:b.messageId,role:"activity",activityType:b.activityType,content:Q(b.content),...b.subagentRunId!=null&&{subagentRunId:b.subagentRunId}},I,z;S===-1?(a.push(g),I=g,z=g):T?(w&&(a[S]={...T,activityType:b.activityType,content:Q(b.content),subagentRunId:b.subagentRunId},b.subagentRunId??delete a[S].subagentRunId),z=a[S]):w&&(a[S]=g,I=g,z=g),Ye(z,b),f({messages:a}),I&&await Promise.all(r.map(L=>L.onNewMessage?.({message:I,messages:a,state:s,agent:n,input:e})))}return h()}case v.ACTIVITY_DELTA:{let b=p,S=a.findIndex(_=>_.id===b.messageId);if(S===-1)return h();let y=a[S];if(y.role!=="activity")return console.warn(`ACTIVITY_DELTA: Message '${b.messageId}' is not an activity message`),h();let T=y,w=await re(r,a,s,(_,g,I)=>_.onActivityDeltaEvent?.({event:b,messages:g,state:I,agent:n,input:e,activityMessage:T}));if(f(w),w.stopPropagation!==!0)try{Ye(T,b)&&f({messages:a});let _=Q(T.content??{}),g=Bo.applyPatch(_,b.patch??[],!0,!1).newDocument;a[S]={...T,content:Q(g),activityType:b.activityType},f({messages:a})}catch(_){let g=_ instanceof Error?_.message:String(_);console.warn(`Failed to apply activity patch for '${b.messageId}': ${g}`)}return h()}case v.RAW:return f(await re(r,a,s,(b,S,y)=>b.onRawEvent?.({event:p,messages:S,state:y,agent:n,input:e}))),h();case v.CUSTOM:return f(await re(r,a,s,(b,S,y)=>b.onCustomEvent?.({event:p,messages:S,state:y,agent:n,input:e}))),h();case v.RUN_STARTED:{let b=await re(r,a,s,(S,y,T)=>S.onRunStartedEvent?.({event:p,messages:y,state:T,agent:n,input:e}));if(f(b),l=[],u=new Set,b.stopPropagation!==!0){let S=p;if(S.input?.messages){for(let y of S.input.messages){let T=y;if(y.subagentRunId===null){let w={...y};delete w.subagentRunId,T=w}a.find(w=>w.id===T.id)||a.push(T)}f({messages:a})}}return h()}case v.RUN_FINISHED:{let b=p,S=b.outcome?.type==="interrupt"?{event:b,outcome:"interrupt",interrupts:b.outcome.interrupts}:b.outcome?.type==="cancelled"?{event:b,outcome:"cancelled"}:{event:b,outcome:"success",result:b.result,pendingToolCallIds:m(b)},y=await re(r,a,s,(T,w,_)=>T.onRunFinishedEvent?.({...S,messages:w,state:_,agent:n,input:e}));return f(y),y.stopPropagation!==!0&&(n.pendingInterrupts=S.outcome==="interrupt"?S.interrupts.map(T=>{if(T.subagentRunId!==null)return T;let w={...T};return delete w.subagentRunId,w}):[]),h()}case v.RUN_ERROR:return f(await re(r,a,s,(b,S,y)=>b.onRunErrorEvent?.({event:p,messages:S,state:y,agent:n,input:e}))),h();case v.STEP_STARTED:return f(await re(r,a,s,(b,S,y)=>b.onStepStartedEvent?.({event:p,messages:S,state:y,agent:n,input:e}))),h();case v.STEP_FINISHED:return f(await re(r,a,s,(b,S,y)=>b.onStepFinishedEvent?.({event:p,messages:S,state:y,agent:n,input:e}))),h();case v.TEXT_MESSAGE_CHUNK:throw Error("TEXT_MESSAGE_CHUNK must be transformed before being applied");case v.TOOL_CALL_CHUNK:throw Error("TOOL_CALL_CHUNK must be transformed before being applied");case v.REASONING_START:return f(await re(r,a,s,(b,S,y)=>b.onReasoningStartEvent?.({event:p,messages:S,state:y,agent:n,input:e}))),h();case v.REASONING_MESSAGE_START:{let b=await re(r,a,s,(S,y,T)=>S.onReasoningMessageStartEvent?.({event:p,messages:y,state:T,agent:n,input:e}));if(f(b),b.stopPropagation!==!0){let{messageId:S,subagentRunId:y}=p,T=a.find(g=>g.id===S);if(T?.role==="activity")return console.warn(`REASONING_MESSAGE_START: Message '${S}' is an activity message \u2014 message ids must be unique across activity and reasoning messages`),h();let w=T;if(!w){let g={id:S,role:"reasoning",content:"",...y!=null&&{subagentRunId:y}};a.push(g),w=g}let _=Ye(w,p);(!T||_)&&f({messages:a})}return h()}case v.REASONING_MESSAGE_CONTENT:{let{messageId:b,delta:S}=p,y=a.find(w=>w.id===b);if(!y)return console.warn(`REASONING_MESSAGE_CONTENT: No message found with ID '${b}'`),h();if(y.role==="activity")return console.warn(`REASONING_MESSAGE_CONTENT: Message '${b}' is an activity message \u2014 message ids must be unique across activity and reasoning messages`),h();let T=await re(r,a,s,(w,_,g)=>w.onReasoningMessageContentEvent?.({event:p,messages:_,state:g,agent:n,input:e,reasoningMessageBuffer:typeof y.content=="string"?y.content:""}));return f(T),T.stopPropagation!==!0&&(y.content=`${typeof y.content=="string"?y.content:""}${S}`,Ye(y,p),f({messages:a})),h()}case v.REASONING_MESSAGE_END:{let{messageId:b}=p,S=a.find(T=>T.id===b);if(!S)return console.warn(`REASONING_MESSAGE_END: No message found with ID '${b}'`),h();if(S.role==="activity")return console.warn(`REASONING_MESSAGE_END: Message '${b}' is an activity message \u2014 message ids must be unique across activity and reasoning messages`),h();let y=await re(r,a,s,(T,w,_)=>T.onReasoningMessageEndEvent?.({event:p,messages:w,state:_,agent:n,input:e,reasoningMessageBuffer:typeof S.content=="string"?S.content:""}));return f(y),y.stopPropagation!==!0&&Ye(S,p)&&f({messages:a}),await Promise.all(r.map(T=>{T.onNewMessage?.({message:S,messages:a,state:s,agent:n,input:e})})),h()}case v.REASONING_MESSAGE_CHUNK:throw Error("REASONING_MESSAGE_CHUNK must be transformed before being applied");case v.REASONING_END:return f(await re(r,a,s,(b,S,y)=>b.onReasoningEndEvent?.({event:p,messages:S,state:y,agent:n,input:e}))),h();case v.REASONING_ENCRYPTED_VALUE:{let{subtype:b,entityId:S,encryptedValue:y}=p,T=await re(r,a,s,(w,_,g)=>w.onReasoningEncryptedValueEvent?.({event:p,messages:_,state:g,agent:n,input:e}));if(f(T),T.stopPropagation!==!0){let w=!1;if(b==="tool-call"){for(let _ of a)if(_.role==="assistant"&&_.toolCalls){let g=_.toolCalls.find(I=>I.id===S);if(g){g.encryptedValue=y,w=!0;break}}}else{let _=a.find(g=>g.id===S);_?.role!=="activity"&&_&&(_.encryptedValue=y,w=!0)}w&&(c.messages=a)}return h()}case v.SUBAGENT_STARTED:return f(await re(r,a,s,(b,S,y)=>b.onSubagentStartedEvent?.({event:p,messages:S,state:y,agent:n,input:e}))),h();case v.SUBAGENT_FINISHED:return f(await re(r,a,s,(b,S,y)=>b.onSubagentFinishedEvent?.({event:p,messages:S,state:y,agent:n,input:e}))),h();case v.SUBAGENT_ERROR:return f(await re(r,a,s,(b,S,y)=>b.onSubagentErrorEvent?.({event:p,messages:S,state:y,agent:n,input:e}))),h()}return p.type,h()}),Bl(),r.length>0?jl({}):p=>p)},cu=e=>t=>{let n=cn(e),r=new Set,o=new Set,i=new Set,a=new Set,s={message:new Map,toolCall:new Map,activity:new Map,reasoning:new Map},c=!1,l=!1,u=!1,m=new Map,f=w=>{let _=m.get(w);return _||(_=new Map,m.set(w,_)),_},h=()=>{for(let w of m.values())if(w.size>0)return!0;return!1},p=new Map,E=new Set,b=!1,S=()=>{r.clear(),o.clear(),i.clear(),a.clear(),s.message.clear(),s.toolCall.clear(),s.activity.clear(),s.reasoning.clear(),m.clear(),p.clear(),E.clear(),c=!1,l=!1,b=!0},y=(w,_)=>{let g=w??[];if(Array.isArray(g))for(let I of g){if(!I||typeof I.id!="string")continue;if(I.subagentRunId===null)return new j(`Cannot send a message (id '${I.id}') with 'subagentRunId: null'. The field is optional \u2014 omit it entirely.`);let z=I.role==="reasoning"?s.reasoning:I.role==="activity"?s.activity:s.message;(_||!z.has(I.id))&&z.set(I.id,{subagentRunId:I.subagentRunId});for(let L of I.toolCalls??[])L&&typeof L.id=="string"&&(_||!s.toolCall.has(L.id))&&s.toolCall.set(L.id,{subagentRunId:I.subagentRunId??void 0})}},T=(w,_,g,I,z)=>{if(_!==void 0&&g&&g.subagentRunId!==_)return new j(`Cannot send '${w}': subagentRunId '${_}' does not match the ${I} '${z}' opener's subagent '${g.subagentRunId??"(the parent agent)"}'.`)};return t.pipe(Ze(w=>{let _=w.type;if(n?.event("VERIFY","Event:",w,{type:w.type}),l&&_!==v.RUN_STARTED)return F(()=>new j(`Cannot send event type '${_}': The run has already errored with 'RUN_ERROR'. No further events can be sent.`));if(c&&_!==v.RUN_ERROR&&_!==v.RUN_STARTED)return F(()=>new j(`Cannot send event type '${_}': The run has already finished with 'RUN_FINISHED'. Start a new run with 'RUN_STARTED'.`));if(u){if(_===v.RUN_STARTED){if(b&&!c&&!l)return F(()=>new j("Cannot send 'RUN_STARTED' while a run is still active. The previous run must be finished with 'RUN_FINISHED' before starting a new run."));(c||l)&&S()}}else if(u=!0,_!==v.RUN_STARTED&&_!==v.RUN_ERROR)return F(()=>new j("First event must be 'RUN_STARTED'"));if(w.subagentRunId===null)return F(()=>new j(`Cannot send '${_}' with 'subagentRunId: null'. The field is optional \u2014 omit it entirely.`));if(_===v.SUBAGENT_STARTED||_===v.SUBAGENT_FINISHED||_===v.SUBAGENT_ERROR){let g=_===v.SUBAGENT_STARTED?["description","parentSubagentRunId","parentToolCallId","parentMessageId"]:_===v.SUBAGENT_FINISHED?["outcome"]:["code"];for(let z of g)if(w[z]===null)return F(()=>new j(`Cannot send '${_}' with '${z}: null'. The field is optional \u2014 omit it entirely.`));let I=w.outcome;if(I!=null&&I.type!=="success"&&I.type!=="suspended")return F(()=>new j(`Cannot send '${_}' with outcome type '${String(I.type)}'. The outcome is either { type: "success" } or { type: "suspended" }.`));if(I&&I.interruptIds===null)return F(()=>new j(`Cannot send '${_}' with 'outcome.interruptIds: null'. The field is optional \u2014 omit it entirely.`));if(I&&Array.isArray(I.interruptIds)&&I.interruptIds.some(z=>typeof z!="string"))return F(()=>new j(`Cannot send '${_}' with a non-string entry in 'outcome.interruptIds'. Interrupt ids are strings.`))}if(_===v.RUN_FINISHED){let g=w.outcome;if(g?.type==="interrupt"&&Array.isArray(g.interrupts)){for(let I of g.interrupts)if(I&&I.subagentRunId===null)return F(()=>new j(`Cannot send 'RUN_FINISHED' with an interrupt (id '${I.id}') carrying 'subagentRunId: null'. The field is optional \u2014 omit it entirely.`))}}switch(_){case v.TEXT_MESSAGE_START:{let g=w.messageId;if(r.has(g))return F(()=>new j(`Cannot send 'TEXT_MESSAGE_START' event: A text message with ID '${g}' is already in progress. Complete it with 'TEXT_MESSAGE_END' first.`));let I=s.message.get(g);if(I){let z=T(_,w.subagentRunId,I,"message",g);if(z)return F(()=>z)}return r.add(g),I||s.message.set(g,{subagentRunId:w.subagentRunId}),ae(w)}case v.TEXT_MESSAGE_CONTENT:{let g=w.messageId;if(!r.has(g))return F(()=>new j(`Cannot send 'TEXT_MESSAGE_CONTENT' event: No active text message found with ID '${g}'. Start a text message with 'TEXT_MESSAGE_START' first.`));let I=T(_,w.subagentRunId,s.message.get(g),"message",g);return I?F(()=>I):ae(w)}case v.TEXT_MESSAGE_END:{let g=w.messageId;if(!r.has(g))return F(()=>new j(`Cannot send 'TEXT_MESSAGE_END' event: No active text message found with ID '${g}'. A 'TEXT_MESSAGE_START' event must be sent first.`));let I=T(_,w.subagentRunId,s.message.get(g),"message",g);return I?F(()=>I):(r.delete(g),ae(w))}case v.TOOL_CALL_START:{let g=w.toolCallId;if(o.has(g))return F(()=>new j(`Cannot send 'TOOL_CALL_START' event: A tool call with ID '${g}' is already in progress. Complete it with 'TOOL_CALL_END' first.`));let I=w.parentMessageId,z=w.subagentRunId,L;if(I!==void 0){let Oe=s.message.get(I);if(Oe){if(z!==void 0&&z!==Oe.subagentRunId)return F(()=>new j(`Cannot send 'TOOL_CALL_START': subagentRunId '${z}' does not match its parent message '${I}' owner '${Oe.subagentRunId??"(the parent agent)"}'. A tool call belongs to the message that carries it.`));L=Oe}}let q=s.toolCall.get(g);if(q){let Oe=T(_,z,q,"tool call",g);if(Oe)return F(()=>Oe);if(z===void 0&&L&&L.subagentRunId!==q.subagentRunId)return F(()=>new j(`Cannot send 'TOOL_CALL_START': tool call '${g}' is owned by '${q.subagentRunId??"(the parent agent)"}' but its parent message '${I}' is owned by '${L.subagentRunId??"(the parent agent)"}'. A tool call belongs to the message that carries it.`))}return o.add(g),q||s.toolCall.set(g,z===void 0?L??{subagentRunId:void 0}:{subagentRunId:z}),ae(w)}case v.TOOL_CALL_ARGS:{let g=w.toolCallId;if(!o.has(g))return F(()=>new j(`Cannot send 'TOOL_CALL_ARGS' event: No active tool call found with ID '${g}'. Start a tool call with 'TOOL_CALL_START' first.`));let I=T(_,w.subagentRunId,s.toolCall.get(g),"tool call",g);return I?F(()=>I):ae(w)}case v.TOOL_CALL_END:{let g=w.toolCallId;if(!o.has(g))return F(()=>new j(`Cannot send 'TOOL_CALL_END' event: No active tool call found with ID '${g}'. A 'TOOL_CALL_START' event must be sent first.`));let I=T(_,w.subagentRunId,s.toolCall.get(g),"tool call",g);return I?F(()=>I):(o.delete(g),ae(w))}case v.STEP_STARTED:{let g=w.stepName,I=w.subagentRunId;return f(I).has(g)?F(()=>new j(`Step "${g}" is already active for 'STEP_STARTED'${I===void 0?"":` in subagent '${I}'`}`)):(f(I).set(g,!0),ae(w))}case v.STEP_FINISHED:{let g=w.stepName,I=w.subagentRunId;if(!f(I).has(g)){let z,L=!1;for(let[q,Oe]of m)if(q!==I&&Oe.has(g)){z=q,L=!0;break}return F(L?()=>new j(`Cannot send 'STEP_FINISHED' for step "${g}" attributed to ${I===void 0?"the parent agent":`subagent '${I}'`}: that step is open under ${z===void 0?"the parent agent":`subagent '${z}'`}. A step must be finished by whoever started it.`):()=>new j(`Cannot send 'STEP_FINISHED' for step "${g}" that was not started`))}return f(I).delete(g),ae(w)}case v.ACTIVITY_SNAPSHOT:{let g=w.messageId;return(!s.activity.has(g)||w.replace!==!1)&&s.activity.set(g,{subagentRunId:w.subagentRunId}),ae(w)}case v.TOOL_CALL_RESULT:{let g=w.messageId;return typeof g=="string"&&s.message.set(g,{subagentRunId:w.subagentRunId}),ae(w)}case v.REASONING_START:case v.REASONING_MESSAGE_START:{let g=w.messageId,I=_===v.REASONING_START,z=I?i:a;if(z.has(g))return F(()=>new j(I?`Cannot send 'REASONING_START' event: A reasoning span with ID '${g}' is already in progress. Complete it with 'REASONING_END' first.`:`Cannot send 'REASONING_MESSAGE_START' event: A reasoning message with ID '${g}' is already in progress. Complete it with 'REASONING_MESSAGE_END' first.`));let L=s.reasoning.get(g);if(L){let q=T(_,w.subagentRunId,L,"reasoning message",g);if(q)return F(()=>q)}return z.add(g),L||s.reasoning.set(g,{subagentRunId:w.subagentRunId}),ae(w)}case v.REASONING_MESSAGE_CONTENT:case v.REASONING_MESSAGE_END:case v.REASONING_END:{let g=w.messageId,I=_===v.REASONING_END,z=I?i:a;if(!z.has(g))return F(()=>new j(I?`Cannot send 'REASONING_END' event: No active reasoning span found with ID '${g}'. A 'REASONING_START' event must be sent first.`:`Cannot send '${_}' event: No active reasoning message found with ID '${g}'. Start a reasoning message with 'REASONING_MESSAGE_START' first.`));let L=T(_,w.subagentRunId,s.reasoning.get(g),"reasoning message",g);return L?F(()=>L):((_===v.REASONING_END||_===v.REASONING_MESSAGE_END)&&z.delete(g),ae(w))}case v.REASONING_ENCRYPTED_VALUE:{let g=w.entityId,I=w.subtype,z=I==="tool-call"?s.toolCall.get(g):I==="message"?s.message.get(g)??s.reasoning.get(g):s.reasoning.get(g),L=I==="tool-call"?"tool call":I==="message"?"message":"reasoning message",q=T(_,w.subagentRunId,z,L,g);return q?F(()=>q):ae(w)}case v.ACTIVITY_DELTA:{let g=w.messageId,I=T(_,w.subagentRunId,s.activity.get(g),"activity",g);return I?F(()=>I):ae(w)}case v.SUBAGENT_STARTED:{if(typeof w.subagentRunId!="string")return F(()=>new j("Cannot send 'SUBAGENT_STARTED' without a 'subagentRunId'."));if(typeof w.name!="string")return F(()=>new j("Cannot send 'SUBAGENT_STARTED' without a 'name'."));let g=w.subagentRunId,I=w.parentSubagentRunId;return p.has(g)?F(()=>new j(`Cannot send 'SUBAGENT_STARTED': subagent '${g}' is already active. Finish it with 'SUBAGENT_FINISHED' first.`)):E.has(g)?F(()=>new j(`Cannot send 'SUBAGENT_STARTED': subagent '${g}' has already finished in this run. Subagent IDs are per-invocation and cannot be reused.`)):I!==void 0&&!p.has(I)&&!E.has(I)?F(()=>new j(`Cannot send 'SUBAGENT_STARTED': parentSubagentRunId '${I}' has not been started in this run.`)):(p.set(g,!0),ae(w))}case v.SUBAGENT_FINISHED:case v.SUBAGENT_ERROR:{if(typeof w.subagentRunId!="string")return F(()=>new j(`Cannot send '${_}' without a 'subagentRunId'.`));if(_===v.SUBAGENT_ERROR&&typeof w.message!="string")return F(()=>new j("Cannot send 'SUBAGENT_ERROR' without a 'message'."));let g=w.subagentRunId;return p.has(g)?(p.delete(g),E.add(g),ae(w)):F(()=>new j(`Cannot send '${_}': no active subagent found with ID '${g}'. A 'SUBAGENT_STARTED' event must be sent first.`))}case v.MESSAGES_SNAPSHOT:{let g=y(w.messages,!0);if(g)return F(()=>g)}return ae(w);case v.RUN_STARTED:b=!0;{let g=y((w.input??{}).messages,!1);if(g)return F(()=>g)}return ae(w);case v.RUN_FINISHED:if(h()){let g=[];for(let[z,L]of m)for(let q of L.keys())g.push(z===void 0?q:`${q} (subagent '${z}')`);let I=g.join(", ");return F(()=>new j(`Cannot send 'RUN_FINISHED' while steps are still active: ${I}`))}if(r.size>0){let g=Array.from(r.keys()).join(", ");return F(()=>new j(`Cannot send 'RUN_FINISHED' while text messages are still active: ${g}`))}if(a.size>0){let g=Array.from(a.keys()).join(", ");return F(()=>new j(`Cannot send 'RUN_FINISHED' while reasoning messages are still active: ${g}`))}if(i.size>0){let g=Array.from(i.keys()).join(", ");return F(()=>new j(`Cannot send 'RUN_FINISHED' while reasoning spans are still active: ${g}`))}if(o.size>0){let g=Array.from(o.keys()).join(", ");return F(()=>new j(`Cannot send 'RUN_FINISHED' while tool calls are still active: ${g}`))}if(p.size>0){let g=Array.from(p.keys()).join(", ");return F(()=>new j(`Cannot send 'RUN_FINISHED' while subagents are still active: ${g}`))}return c=!0,ae(w);case v.RUN_ERROR:return l=!0,ae(w);case v.CUSTOM:return ae(w);default:return ae(w)}}))},ln=(function(e){return e.HEADERS="headers",e.DATA="data",e})({}),N0=e=>Er(()=>qt(e())).pipe(Wl(t=>{if(!t.ok){let o=t.headers.get("content-type")||"";return qt(t.text()).pipe(Ze(i=>{let a=i;if(o.includes("application/json"))try{a=JSON.parse(i)}catch{}let s=Error(`HTTP ${t.status}: ${typeof a=="string"?a:JSON.stringify(a)}`);return s.status=t.status,s.payload=a,F(()=>s)}))}let n={type:ln.HEADERS,status:t.status,headers:t.headers},r=t.body?.getReader();return r?new he(o=>(o.next(n),(async()=>{try{for(;;){let{done:i,value:a}=await r.read();if(i)break;let s={type:ln.DATA,data:a};o.next(s)}o.complete()}catch(i){o.error(i)}})(),()=>{r.cancel().catch(i=>{if(i?.name!=="AbortError")throw i})})):F(()=>Error("Failed to getReader() from response"))})),kv=10*1024*1024,O0=(e,t)=>{let n=cn(t),r=new vt,o=new TextDecoder("utf-8",{fatal:!1}),i="";e.subscribe({next:s=>{if(s.type!==ln.HEADERS&&s.type===ln.DATA&&s.data){let c=o.decode(s.data,{stream:!0});i+=c;let l=i.split(/\n\n/);i=l.pop()||"";for(let u of l)a(u);if(i.length>kv){r.error(Error(`SSE buffer size exceeded maximum limit of ${kv/(1024*1024)} MB`));return}}},error:s=>r.error(s),complete:()=>{i&&(i+=o.decode(),a(i)),r.complete()}});function a(s){let c=s.split(`
`),l=[];for(let u of c)u.startsWith("data:")&&l.push(u.slice(5).replace(/^ /,""));if(l.length>0)try{let u=l.join(`
`),m=JSON.parse(u);n?.event("SSE","Event received:",m,{type:m?.type}),r.next(m)}catch(u){r.error(u)}}return r.asObservable()},Iv=10*1024*1024,P0=()=>typeof process<"u"&&process.env!==void 0&&!!process.env.SUPPRESS_TRANSFORMATION_WARNINGS,M0=(e,t)=>{let n=cn(t),r=new vt,o=new Uint8Array,i=!1;e.subscribe({next:s=>{if(s.type!==ln.HEADERS&&s.type===ln.DATA&&s.data){let c=new Uint8Array(o.length+s.data.length);c.set(o,0),c.set(s.data,o.length),o=c,a()}},error:s=>r.error(s),complete:()=>{if(a(),!i){if(o.length>0){r.error(Error(`The binary stream ended mid-frame: ${o.length} trailing bytes could not be read as a complete message.`));return}r.complete()}}});function a(){if(!i)for(;o.length>=4;){let s=4+new DataView(o.buffer,o.byteOffset,4).getUint32(0,!1);if(s>Iv){r.error(Error(`Protobuf message size exceeded maximum limit of ${Iv/(1024*1024)} MB`));return}if(o.length<s)break;try{let c=o.slice(4,s),l=Ev(c);n?.event("PROTO","Event received:",l,{type:l.type}),r.next(l)}catch(c){if(c instanceof nu)P0()||console.warn("[ag-ui][proto] Dropped an event this build does not know: the protocol has a variant this SDK predates.");else{let l=c instanceof Error?c.message:String(c);i=!0,r.error(Error(`Failed to decode protocol buffer message: ${l}`));return}}o=o.slice(s)}}return r.asObservable()},z0=(e,t)=>{let n=cn(t),r=new vt,o=new Jo(1),i=!1,a,s=!1,c=()=>{s=!0,a?.unsubscribe()},l=m=>{c(),r.error(m)},u=()=>{c(),r.complete()};return a=e.subscribe({next:m=>{if(o.next(m),m.type===ln.HEADERS&&!i){i=!0;let f=m.headers.get("content-type");n?.lifecycle("HTTP","Stream format detected:",{contentType:f,parser:f===ru?"protobuf":"sse"}),f===ru?M0(o,n).subscribe({next:h=>r.next(h),error:h=>l(h),complete:()=>u()}):O0(o,n).subscribe({next:h=>{if(typeof h!="object"||!h||Array.isArray(h)){let E=Error("Invalid event: the frame is not a JSON object.");n?.event("HTTP","Event invalid:",{json:h,error:String(E)}),l(E);return}let p=h;if(typeof p.type!="string"||p.type.length===0){let E=Error("Invalid event: the frame carries no event type.");n?.event("HTTP","Event invalid:",{json:h,error:String(E)}),l(E);return}n?.event("HTTP","Event received:",h,{type:p.type}),r.next(h)},error:h=>{if(h?.name==="AbortError"){r.next({type:v.RUN_ERROR,message:h.message||"Request aborted",code:"abort",rawEvent:h}),u();return}return l(h)},complete:()=>u()})}else i||l(Error("No headers event received before data events"))},error:m=>{o.error(m),l(m)},complete:()=>{o.complete()}}),s&&a.unsubscribe(),r.asObservable()},Le={TextMessageStart:"TextMessageStart",TextMessageContent:"TextMessageContent",TextMessageEnd:"TextMessageEnd",ActionExecutionStart:"ActionExecutionStart",ActionExecutionArgs:"ActionExecutionArgs",ActionExecutionEnd:"ActionExecutionEnd",ActionExecutionResult:"ActionExecutionResult",AgentStateMessage:"AgentStateMessage",MetaEvent:"MetaEvent",RunStarted:"RunStarted",RunFinished:"RunFinished",RunError:"RunError",NodeStarted:"NodeStarted",NodeFinished:"NodeFinished"},L0=e=>{if(typeof e=="string")return e;if(!Array.isArray(e))return;let t=e.filter(n=>n.type==="text").map(n=>n.text).filter(n=>n.length>0);if(t.length!==0)return t.join(`
`)};function Zv(e,t){return xp(t)&&Lr(`[ag-ui][legacy] The result of tool call '${e}' carries content parts the legacy protocol cannot represent; only its text parts are bridged and the rest is dropped.`),Rn(t)}var Lr=e=>{typeof process<"u"&&process.env!==void 0&&process.env.SUPPRESS_TRANSFORMATION_WARNINGS||console.warn(e)},D0=(e,t,n)=>r=>{let o={},i=!0,a=!0,s="",c=null,l=null,u=[],m={},f=!1,h=p=>{typeof p=="object"&&p&&("messages"in p&&delete p.messages,o=p)};return r.pipe(Ze(p=>{switch(p.type){case v.TEXT_MESSAGE_START:{let E=p;return[{type:Le.TextMessageStart,messageId:E.messageId,role:E.role}]}case v.TEXT_MESSAGE_CONTENT:{let E=p;return[{type:Le.TextMessageContent,messageId:E.messageId,content:E.delta}]}case v.TEXT_MESSAGE_END:{let E=p;return[{type:Le.TextMessageEnd,messageId:E.messageId}]}case v.TOOL_CALL_START:{let E=p;return u.push({id:E.toolCallId,type:"function",function:{name:E.toolCallName,arguments:""}}),a=!0,m[E.toolCallId]=E.toolCallName,[{type:Le.ActionExecutionStart,actionExecutionId:E.toolCallId,actionName:E.toolCallName,parentMessageId:E.parentMessageId}]}case v.TOOL_CALL_ARGS:{let E=p,b=u.find(y=>y.id===E.toolCallId);if(!b)return Lr(`[ag-ui][legacy] TOOL_CALL_ARGS: No tool call found with ID '${E.toolCallId}'`),[];b.function.arguments+=E.delta;let S=!1;if(l){let y=l.find(T=>T.tool==b.function.name);if(y)try{let T=JSON.parse(mi(b.function.arguments));y.tool_argument&&y.tool_argument in T?(h({...o,[y.state_key]:T[y.tool_argument]}),S=!0):y.tool_argument||(h({...o,[y.state_key]:T}),S=!0)}catch{}}return[{type:Le.ActionExecutionArgs,actionExecutionId:E.toolCallId,args:E.delta},...S?[{type:Le.AgentStateMessage,threadId:e,agentName:n,nodeName:s,runId:t,running:i,role:"assistant",state:JSON.stringify(o),active:a}]:[]]}case v.TOOL_CALL_END:{let E=p;return[{type:Le.ActionExecutionEnd,actionExecutionId:E.toolCallId}]}case v.TOOL_CALL_RESULT:{let E=p,b=m[E.toolCallId];return(b===void 0||b==="")&&Lr(`[ag-ui][legacy] No usable tool name was seen for tool call '${E.toolCallId}' (${b===void 0?"no TOOL_CALL_START reached this bridge":"its TOOL_CALL_START carried an empty toolCallName"}), so its result is being bridged with the fabricated action name "unknown". Downstream consumers route on that name.`),[{type:Le.ActionExecutionResult,actionExecutionId:E.toolCallId,result:Zv(E.toolCallId,E.content),actionName:b||"unknown"}]}case v.RAW:return f||(f=!0,Lr("[ag-ui][legacy] Dropping RAW events: the legacy runtime protocol has no equivalent, so the provider payloads they carry do not reach the legacy stream. Reported once per stream.")),[];case v.CUSTOM:{let E=p;switch(E.name){case"Exit":i=!1;break;case"PredictState":l=E.value;break}return[{type:Le.MetaEvent,name:E.name,value:E.value}]}case v.STATE_SNAPSHOT:return h(p.snapshot),[{type:Le.AgentStateMessage,threadId:e,agentName:n,nodeName:s,runId:t,running:i,role:"assistant",state:JSON.stringify(o),active:a}];case v.STATE_DELTA:{let E=p,b;try{b=Bo.applyPatch(o,E.delta,!0,!1).newDocument}catch(S){let y=S instanceof Error?S.message:String(S);return Lr(`[ag-ui][legacy] Failed to apply state patch:
Current state: ${JSON.stringify(o,null,2)}
Patch operations: ${JSON.stringify(E.delta,null,2)}
Error: ${y}`),[]}return h(b),[{type:Le.AgentStateMessage,threadId:e,agentName:n,nodeName:s,runId:t,running:i,role:"assistant",state:JSON.stringify(o),active:a}]}case v.MESSAGES_SNAPSHOT:return c=p.messages,[{type:Le.AgentStateMessage,threadId:e,agentName:n,nodeName:s,runId:t,running:i,role:"assistant",state:JSON.stringify({...o,...c?{messages:c}:{}}),active:!0}];case v.RUN_STARTED:return[];case v.RUN_FINISHED:{if(c&&(o.messages=c),Object.keys(o).length===0)return[];let E=null;if(c)try{E=$0(c)}catch(b){return[{type:Le.RunError,message:b.message}]}return[{type:Le.AgentStateMessage,threadId:e,agentName:n,nodeName:s,runId:t,running:i,role:"assistant",state:JSON.stringify({...o,...E?{messages:E}:{}}),active:!1}]}case v.RUN_ERROR:{let E=p;return[{type:Le.RunError,message:E.message,code:E.code}]}case v.STEP_STARTED:return s=p.stepName,u=[],l=null,[{type:Le.AgentStateMessage,threadId:e,agentName:n,nodeName:s,runId:t,running:i,role:"assistant",state:JSON.stringify(o),active:!0}];case v.STEP_FINISHED:return u=[],l=null,[{type:Le.AgentStateMessage,threadId:e,agentName:n,nodeName:s,runId:t,running:i,role:"assistant",state:JSON.stringify(o),active:!1}];default:return[]}}))};function $0(e){let t=[];for(let n of e)if(n.role==="assistant"||n.role==="user"||n.role==="system"){let r=L0(n.content);if(r){let o={id:n.id,role:n.role,content:r};t.push(o)}if(n.role==="assistant"&&n.toolCalls&&n.toolCalls.length>0)for(let o of n.toolCalls){let i;try{i=JSON.parse(o.function.arguments)}catch(s){throw Error(`Failed to parse arguments for tool call '${o.id}' (${o.function.name}): ${s.message}`)}let a={id:o.id,name:o.function.name,arguments:i,parentMessageId:n.id};t.push(a)}}else if(n.role==="tool"){let r="unknown";for(let i of e)if(i.role==="assistant"&&i.toolCalls?.length){for(let a of i.toolCalls)if(a.id===n.toolCallId){r=a.function.name;break}}let o={id:n.id,result:Zv(n.toolCallId,n.content),actionExecutionId:n.toolCallId,actionName:r};t.push(o)}return t}var U0=e=>e.kind==="tool"?e.fields.toolCallId:e.fields.messageId,H0=e=>e==="tool"?"toolCallId":"messageId",Ca=(e,t,n,r,o)=>{if(r!==void 0&&r!==o)throw Error(`Cannot continue ${e} '${t}': chunk ${n} '${r}' does not match the open stream's ${n} ${o===void 0?"(absent)":`'${o}'`}.`)},Pa=(e,t)=>t.metadata===void 0?e:{...e,metadata:t.metadata},uu=(e,t)=>{let n=Pa(e,t);return t.rawEvent===void 0?n:{...n,rawEvent:t.rawEvent}},xu=e=>new Set(Object.keys(e.shape)),F0=xu(Dc),G0=xu($c),Z0=xu(Hc),du=(e,t)=>{let n;for(let r of Object.keys(e))t.has(r)||((n??={})[r]=e[r]);return n},B0=e=>{typeof process<"u"&&process.env!==void 0&&process.env.SUPPRESS_TRANSFORMATION_WARNINGS||console.warn(`[ag-ui][transform] ${e} Set SUPPRESS_TRANSFORMATION_WARNINGS=true to silence.`)},pu=(e,t,n,r)=>{if(t===void 0||n||e.length===0)return;let o=e[e.length-1],i=Object.keys(t).filter(a=>Object.prototype.hasOwnProperty.call(o,a));i.length>0&&B0(`A ${r} carried ${i.map(a=>`'${a}'`).join(", ")}, which the synthesized ${String(o.type)} already describes. The synthesized value is kept and the chunk's is dropped \u2014 this stage does not judge a described field, so the producer's value cannot be substituted for its own.`),e[e.length-1]={...t,...o}},Ma=e=>t=>{let n=cn(e),r=new Map,o=c=>{let l=r.get(c);if(!l)return[];switch(r.delete(c),l.kind){case"text":{let u={type:v.TEXT_MESSAGE_END,messageId:l.fields.messageId,...l.fields.subagentRunId!==void 0&&{subagentRunId:l.fields.subagentRunId}};return n?.event("TRANSFORM","TEXT_MESSAGE_END",u,{messageId:u.messageId}),[u]}case"tool":{let u={type:v.TOOL_CALL_END,toolCallId:l.fields.toolCallId,...l.fields.subagentRunId!==void 0&&{subagentRunId:l.fields.subagentRunId}};return n?.event("TRANSFORM","TOOL_CALL_END",u,{toolCallId:u.toolCallId}),[u]}case"reasoning":{let u={type:v.REASONING_MESSAGE_END,messageId:l.fields.messageId,...l.fields.subagentRunId!==void 0&&{subagentRunId:l.fields.subagentRunId}};return n?.event("TRANSFORM","REASONING_MESSAGE_END",u,{messageId:u.messageId}),[u]}}},i=()=>[...r.keys()].flatMap(c=>o(c)),a=(c,l)=>{for(let[u,m]of r)if(m.kind===c&&U0(m)===l)return{owner:u}},s=(c,l,u,m,f)=>{if(l!==void 0){let p=a(c,l);if(p){if(u!==void 0&&u!==p.owner)throw Error(`Cannot continue ${f} '${l}': chunk subagentRunId '${u}' does not match the open stream's subagent '${p.owner??"(the parent agent)"}'.`);return p.owner}return u}if(u!==void 0)return u;if(r.get(void 0)?.kind===c)return;let h=[...r.entries()].filter(([,p])=>p.kind===c);if(h.length===1)return h[0][0];if(h.length>1)throw Error(`Ambiguous ${m}: it carries neither a ${H0(c)} nor a subagentRunId, but ${h.length} lanes have an open ${f}. Attribute the chunk to the subagent it belongs to.`)};return t.pipe(Ze(c=>{switch(c.type){case v.TEXT_MESSAGE_START:case v.TEXT_MESSAGE_CONTENT:case v.TEXT_MESSAGE_END:case v.TOOL_CALL_START:case v.TOOL_CALL_ARGS:case v.TOOL_CALL_END:case v.TOOL_CALL_RESULT:case v.STATE_SNAPSHOT:case v.STATE_DELTA:case v.CUSTOM:case v.STEP_STARTED:case v.STEP_FINISHED:case v.REASONING_START:case v.REASONING_MESSAGE_START:case v.REASONING_MESSAGE_CONTENT:case v.REASONING_MESSAGE_END:case v.REASONING_END:return[...o(c.subagentRunId??void 0),c];case v.RUN_STARTED:case v.RUN_FINISHED:case v.RUN_ERROR:case v.MESSAGES_SNAPSHOT:return[...i(),c];case v.RAW:case v.ACTIVITY_SNAPSHOT:case v.ACTIVITY_DELTA:case v.REASONING_ENCRYPTED_VALUE:case v.SUBAGENT_STARTED:return[c];case v.SUBAGENT_FINISHED:case v.SUBAGENT_ERROR:{let l=c.subagentRunId;return l==null?[c]:[...o(l),c]}case v.TEXT_MESSAGE_CHUNK:{let l=c,u=du(c,F0),m=s("text",l.messageId,l.subagentRunId??void 0,"TEXT_MESSAGE_CHUNK","text message"),f=r.get(m),h=[],p=!1,E;if(f?.kind==="text"&&(l.messageId===void 0||l.messageId===f.fields.messageId))Ca("text message",f.fields.messageId,"role",l.role,f.fields.role),Ca("text message",f.fields.messageId,"name",l.name,f.fields.name),E=f.fields;else{if(h.push(...o(m)),l.messageId===void 0)throw Error("First TEXT_MESSAGE_CHUNK must have a messageId");E={messageId:l.messageId,role:l.role===void 0?"assistant":l.role,name:l.name,subagentRunId:l.subagentRunId},r.set(m,{kind:"text",fields:E});let b=Pa({type:v.TEXT_MESSAGE_START,messageId:l.messageId,role:E.role,...l.name!==void 0&&{name:l.name},...l.subagentRunId!==void 0&&{subagentRunId:l.subagentRunId}},l);h.push(b),n?.event("TRANSFORM","TEXT_MESSAGE_START",b,{messageId:l.messageId})}if(l.delta!==void 0||l.rawEvent!==void 0){let b=l.subagentRunId===void 0?E.subagentRunId:l.subagentRunId,S=uu({...u,type:v.TEXT_MESSAGE_CONTENT,messageId:E.messageId,delta:l.delta===void 0?"":l.delta,...b!==void 0&&{subagentRunId:b}},l);h.push(S),p=!0,n?.event("TRANSFORM","TEXT_MESSAGE_CONTENT",S,{messageId:E.messageId})}if(h.length===0&&(l.metadata!==void 0||l.rawEvent!==void 0||l.subagentRunId===null||u!==void 0)){let b=l.subagentRunId===void 0?E.subagentRunId:l.subagentRunId;h.push({...u,type:v.TEXT_MESSAGE_CONTENT,messageId:E.messageId,delta:"",...l.metadata!==void 0&&{metadata:l.metadata},...l.rawEvent!==void 0&&{rawEvent:l.rawEvent},...b!==void 0&&{subagentRunId:b}}),p=!0}return pu(h,u,p,"TEXT_MESSAGE_CHUNK"),h}case v.TOOL_CALL_CHUNK:{let l=c,u=du(c,G0),m=s("tool",l.toolCallId,l.subagentRunId??void 0,"TOOL_CALL_CHUNK","tool call"),f=r.get(m),h=[],p=!1,E;if(f?.kind==="tool"&&(l.toolCallId===void 0||l.toolCallId===f.fields.toolCallId))Ca("tool call",f.fields.toolCallId,"toolCallName",l.toolCallName,f.fields.toolCallName),Ca("tool call",f.fields.toolCallId,"parentMessageId",l.parentMessageId,f.fields.parentMessageId),E=f.fields;else{if(h.push(...o(m)),l.toolCallId===void 0)throw Error("First TOOL_CALL_CHUNK must have a toolCallId");if(l.toolCallName===void 0)throw Error("First TOOL_CALL_CHUNK must have a toolCallName");E={toolCallId:l.toolCallId,toolCallName:l.toolCallName,parentMessageId:l.parentMessageId,subagentRunId:l.subagentRunId},r.set(m,{kind:"tool",fields:E});let b=Pa({type:v.TOOL_CALL_START,toolCallId:l.toolCallId,toolCallName:l.toolCallName,...l.parentMessageId!==void 0&&{parentMessageId:l.parentMessageId},...l.subagentRunId!==void 0&&{subagentRunId:l.subagentRunId}},l);h.push(b),n?.event("TRANSFORM","TOOL_CALL_START",b,{toolCallId:l.toolCallId,toolCallName:l.toolCallName})}if(l.delta!==void 0||l.rawEvent!==void 0){let b=l.subagentRunId===void 0?E.subagentRunId:l.subagentRunId,S=uu({...u,type:v.TOOL_CALL_ARGS,toolCallId:E.toolCallId,delta:l.delta===void 0?"":l.delta,...b!==void 0&&{subagentRunId:b}},l);h.push(S),p=!0,n?.event("TRANSFORM","TOOL_CALL_ARGS",S,{toolCallId:E.toolCallId})}if(h.length===0&&(l.metadata!==void 0||l.rawEvent!==void 0||l.subagentRunId===null||u!==void 0)){let b=l.subagentRunId===void 0?E.subagentRunId:l.subagentRunId;h.push({...u,type:v.TOOL_CALL_ARGS,toolCallId:E.toolCallId,delta:"",...l.metadata!==void 0&&{metadata:l.metadata},...l.rawEvent!==void 0&&{rawEvent:l.rawEvent},...b!==void 0&&{subagentRunId:b}}),p=!0}return pu(h,u,p,"TOOL_CALL_CHUNK"),h}case v.REASONING_MESSAGE_CHUNK:{let l=c,u=du(c,Z0),m=s("reasoning",l.messageId,l.subagentRunId??void 0,"REASONING_MESSAGE_CHUNK","reasoning message"),f=r.get(m),h=[],p=!1,E;if(f?.kind==="reasoning"&&(l.messageId===void 0||l.messageId===f.fields.messageId))E=f.fields;else{if(h.push(...o(m)),l.messageId===void 0)throw Error("First REASONING_MESSAGE_CHUNK must have a messageId");E={messageId:l.messageId,subagentRunId:l.subagentRunId},r.set(m,{kind:"reasoning",fields:E});let b=Pa({type:v.REASONING_MESSAGE_START,messageId:l.messageId,role:"reasoning",...l.subagentRunId!==void 0&&{subagentRunId:l.subagentRunId}},l);h.push(b),n?.event("TRANSFORM","REASONING_MESSAGE_START",b,{messageId:l.messageId})}if(l.delta!==void 0||l.rawEvent!==void 0){let b=l.subagentRunId===void 0?E.subagentRunId:l.subagentRunId,S=uu({...u,type:v.REASONING_MESSAGE_CONTENT,messageId:E.messageId,delta:l.delta===void 0?"":l.delta,...b!==void 0&&{subagentRunId:b}},l);h.push(S),p=!0,n?.event("TRANSFORM","REASONING_MESSAGE_CONTENT",S,{messageId:E.messageId})}if(h.length===0&&(l.metadata!==void 0||l.rawEvent!==void 0||l.subagentRunId===null||u!==void 0)){let b=l.subagentRunId===void 0?E.subagentRunId:l.subagentRunId;h.push({...u,type:v.REASONING_MESSAGE_CONTENT,messageId:E.messageId,delta:"",...l.metadata!==void 0&&{metadata:l.metadata},...l.rawEvent!==void 0&&{rawEvent:l.rawEvent},...b!==void 0&&{subagentRunId:b}}),p=!0}return pu(h,u,p,"REASONING_MESSAGE_CHUNK"),h}}return c.type,[c]}),Yt(()=>{i()}))},qn=Symbol("agui.strip.drop");function Dr(e){let t=e;for(;;){if(t instanceof Pi||t instanceof Oc||t instanceof Pc||t instanceof Lc||t instanceof Mc){t=t.unwrap();continue}if(t instanceof zc){t=t.def.in;continue}if(t instanceof jm){t=t.def.getter();continue}return t}}function V0(e){let t=e.def;return typeof t?.discriminator=="string"?t.discriminator:void 0}function Bv(e){let t=e,n=Array.isArray(t.def?.values)?t.def.values:t.values?Array.from(t.values):void 0;return n&&n.length===1?n[0]:t.value}function j0(e){let t=Dr(e);return t instanceof Nc?Bv(t):void 0}function Yn(e,t,n,r){let o=Dr(t);if(o instanceof Bn){if(typeof e!="object"||!e||Array.isArray(e))return e;let i=o.shape,a=e,s={},c=o.meta()?.specOpen===!0;for(let l of Object.keys(a)){let u=Object.prototype.hasOwnProperty.call(i,l)?i[l]:void 0;if(u===void 0){if(c){s[l]=a[l];continue}r.push(`${n}/${l}`);continue}let m=r.length,f=Yn(a[l],u,`${n}/${l}`,r);if(f===qn){if(r.length=m,u.safeParse(void 0).success){r.push(`${n}/${l}`);continue}return qn}s[l]=f}return s}if(o instanceof Ni){if(!Array.isArray(e))return e;let i=o.element,a=[];return e.forEach((s,c)=>{let l=r.length,u=Yn(s,i,`${n}/${c}`,r);if(u===qn){r.length=l,r.push(`${n}/${c}`);return}a.push(u)}),a}if(o instanceof Bm){if(typeof e!="object"||!e||Array.isArray(e))return e;let i=o.def.valueType,a=e,s={};for(let c of Object.keys(a)){let l=r.length,u=Yn(a[c],i,`${n}/${c}`,r);if(u===qn){r.length=l,r.push(`${n}/${c}`);continue}s[c]=u}return s}if(o instanceof Oi){let i=o.options,a=V0(o);if(a!==void 0){if(typeof e!="object"||!e||Array.isArray(e))return e;let l=e[a];for(let u of i){let m=Dr(u);if(!(m instanceof Bn))continue;let f=m.shape;if(j0(f[a])===l)return Yn(e,u,n,r)}return qn}let s=i.filter(l=>Dr(l)instanceof Bn),c=typeof e=="object"&&!!e&&!Array.isArray(e);if(s.length>1&&c)return e;for(let l of i){let u=Dr(l);if(u instanceof Ni&&Array.isArray(e)||u instanceof Bn&&c)return Yn(e,l,n,r)}return e}return e}function Vv(e,t){let n=[],r=Yn(e,t,"",n);if(r===qn)throw Error("Internal error: the stripper found the whole value unrecognisable, which the schemas are not supposed to allow \u2014 schema/stripper mismatch.");return{value:r,stripped:n}}var W0=new Set(Object.values(v));function q0(e){return W0.has(e.type)}var Y0=new Map(Fc.options.map(e=>{let t=e.shape;return[String(Bv(t.type)),e]})),X0=()=>typeof process<"u"&&process.env!==void 0&&!!process.env.SUPPRESS_TRANSFORMATION_WARNINGS;function wu(e){X0()||console.warn(`[ag-ui][enforce] ${e}`)}var hu=e=>t=>{let n=cn(e);return t.pipe(Ze(r=>{if(!q0(r))return wu(`Dropping unrecognised event '${String(r.type)}': no middleware translated it and the protocol does not describe it.`),n?.event("ENFORCE","Unrecognised event dropped:",r,{type:r.type}),wr;let o=Y0.get(r.type);if(o===void 0)throw Error(`No validator for recognised event type '${String(r.type)}'`);let{value:i,stripped:a}=Vv(r,o);for(let s of a)wu(`Removed unrecognised material at '${s}' on ${String(r.type)}. Nothing handled it; see the repo-root DEPRECATIONS.md if it is a retired shape.`);return ae(o.parse(i))}))};function K0(e){let{value:t,stripped:n}=Vv(Cl(e,"RunAgentInput"),zi);for(let r of n)wu(`Removed unrecognised material at '${r}' from the outgoing input.`);return zi.parse(t)}var $r=class{runNext(e,t){return t.run(e).pipe(Ma(!1))}runNextWithState(e,t){let n=Q(e.messages||[]),r=Q(e.state===void 0?{}:e.state),o=new Jo;return Gv(e,o,t,[]).subscribe({next:i=>{i.messages!==void 0&&(n=i.messages),i.state!==void 0&&(r=i.state)},error:()=>{}}),this.runNext(e,t).pipe(pi(async i=>(o.next(i),await new Promise(a=>setTimeout(a,0)),{event:i,messages:Q(n),state:Q(r)})))}},J0=class extends $r{constructor(e){super(),this.fn=e}run(e,t){return this.fn(e,t)}};function Q0(e){return e.startsWith("image/")?"image":e.startsWith("audio/")?"audio":e.startsWith("video/")?"video":"document"}function e_(e){return typeof e=="object"&&!!e&&"type"in e&&e.type==="binary"&&"mimeType"in e&&typeof e.mimeType=="string"}function t_(e){let t=Q0(e.mimeType);return e.data?{type:t,source:{type:"data",value:e.data,mimeType:e.mimeType},...e.filename?{metadata:{filename:e.filename}}:{}}:e.url?{type:t,source:{type:"url",value:e.url,mimeType:e.mimeType},...e.filename?{metadata:{filename:e.filename}}:{}}:((typeof process>"u"||process.env===void 0||!process.env.SUPPRESS_TRANSFORMATION_WARNINGS)&&console.warn(`[ag-ui][compat] A binary content part carries only an id ('${e.id??""}') and cannot be converted to a modern media part; a 1.0 peer will not accept it. Provide data or a url. See the repo-root DEPRECATIONS.md.`),e)}function n_(e,t,n){if(typeof e!="object"||!e||!("type"in e)||e.type!==t.type||!("source"in e))return!1;let r=e.source;return typeof r!="object"||!r||!("type"in r)||r.type!==t.source.type||!("value"in r)||r.value!==t.source.value||!("mimeType"in r)||r.mimeType!==t.source.mimeType?!1:!n||"metadata"in e&&typeof e.metadata=="object"&&e.metadata!==null&&"filename"in e.metadata&&e.metadata.filename===n}function Rv(e){let t=e.content;if(!Array.isArray(t))return e;let n=t.flatMap(r=>{if(e_(r)){let o=t_(r);return o.type!=="binary"&&t.some(i=>n_(i,o,r.filename))?[]:[o]}return[r]});return{...e,content:n}}var fu="THINKING_START",mu="THINKING_END",Cv="THINKING_TEXT_MESSAGE_START",gu="THINKING_TEXT_MESSAGE_CONTENT",vu="THINKING_TEXT_MESSAGE_END";function jv(e,t){typeof process<"u"&&process.env!==void 0&&process.env.SUPPRESS_TRANSFORMATION_WARNINGS||console.warn(`[ag-ui][compat] Converting deprecated ${e} to ${t}. The old shape leaves the protocol after its shim window \u2014 see the repo-root DEPRECATIONS.md. Set SUPPRESS_TRANSFORMATION_WARNINGS=true to silence.`)}function Su(e){return typeof e=="object"&&!!e&&!Array.isArray(e)}function za(e,t,n){if(!Su(e)||e[t]!==null)return e;jv(`${n}.${t}: null`,"an absent field");let{[t]:r,...o}=e;return o}function La(e,t,n){if(!Su(e)||!Array.isArray(e[t]))return e;let r=e[t],o=r.map(n);return o.some((i,a)=>i!==r[a])?{...e,[t]:o}:e}function Wv(e){return La(e,"content",t=>{if(!Su(t))return t;switch(t.type){case"image":case"audio":case"video":case"document":return za(t,"metadata",`${t.type} input content`);default:return t}})}function r_(e){let t=za(e,"forwardedProps","RunAgentInput");return t=La(t,"tools",n=>za(n,"parameters","Tool")),t=La(t,"resume",n=>za(n,"payload","ResumeEntry")),La(t,"messages",Wv)}var Eu=class extends $r{constructor(...e){super(...e),this.currentReasoningId=null,this.currentMessageId=null}warn(e,t){jv(e,t)}mintedContinuationId(e,t){if(t!==null)return t;let n=we();return this.warnAside(`Minting a messageId ('${n}') for ${e}: no THINKING opener preceded it, so there was no id to continue. The id is this client's invention, not the producer's, and verification will reject the translated event for naming something nothing opened.`),n}warnAside(e){typeof process<"u"&&process.env!==void 0&&process.env.SUPPRESS_TRANSFORMATION_WARNINGS||console.warn(`[ag-ui][compat] ${e} Set SUPPRESS_TRANSFORMATION_WARNINGS=true to silence.`)}run(e,t){return this.currentReasoningId=null,this.currentMessageId=null,e.messages=e.messages.map(Rv),t.run(e).pipe(bt(n=>this.transformEvent(n)))}transformEvent(e){if(e.rawEvent===null){this.warn(`${e.type}.rawEvent: null`,"an absent field");let{rawEvent:t,...n}=e;e=n}if((e.type===v.RUN_FINISHED||e.type===v.SUBAGENT_FINISHED)&&e.result===null){this.warn(`${e.type}.result: null`,"an absent field");let{result:t,...n}=e;e=n}switch(e.type){case fu:{this.currentReasoningId=we();let{title:t,...n}=e;return this.warn(fu,v.REASONING_START),t!==void 0&&this.warnAside(`Dropping ${fu}.title ${JSON.stringify(t)}: ${v.REASONING_START} has no title field, so the span's label cannot be carried and nothing downstream can recover it.`),{...n,type:v.REASONING_START,messageId:this.currentReasoningId}}case Cv:return this.currentMessageId=we(),this.warn(Cv,v.REASONING_MESSAGE_START),{...e,type:v.REASONING_MESSAGE_START,messageId:this.currentMessageId,role:"reasoning"};case gu:{let{delta:t,...n}=e;return this.warn(gu,v.REASONING_MESSAGE_CONTENT),{...n,type:v.REASONING_MESSAGE_CONTENT,messageId:this.mintedContinuationId(gu,this.currentMessageId),delta:t}}case vu:{let t=this.mintedContinuationId(vu,this.currentMessageId);return this.currentMessageId=null,this.warn(vu,v.REASONING_MESSAGE_END),{...e,type:v.REASONING_MESSAGE_END,messageId:t}}case mu:{let t=this.mintedContinuationId(mu,this.currentReasoningId);return this.currentReasoningId=null,this.warn(mu,v.REASONING_END),{...e,type:v.REASONING_END,messageId:t}}case v.TOOL_CALL_START:case v.TOOL_CALL_CHUNK:{let t=e;if(t.parentMessageId===null){this.warn(`${e.type}.parentMessageId: null`,"an absent field");let{parentMessageId:n,...r}=t;return r}return e}case v.RUN_FINISHED:{let t=e;if(t.outcome===null){this.warn("RUN_FINISHED.outcome: null","an absent field");let{outcome:n,...r}=t;return r}return e}case v.MESSAGES_SNAPSHOT:{let t=e;return Array.isArray(t.messages)?{...t,messages:t.messages.map(n=>this.upgradeInboundMessage(n))}:e}case v.RUN_STARTED:{let t=r_(e.input),n=t===e.input?e:{...e,input:t},r=n;return!r.input||!Array.isArray(r.input.messages)?n:{...r,input:{...r.input,messages:r.input.messages.map(o=>this.upgradeInboundMessage(o))}}}default:return e}}upgradeInboundMessage(e){e=Wv(e);let t=e.content;return!Array.isArray(t)||!t.some(n=>typeof n=="object"&&!!n&&n.type==="binary")?e:(this.warn("binary input content","the modern media content parts"),Rv(e))}},o_=()=>e=>Er(()=>{let t=new Eu;return e.pipe(bt(n=>t.transformEvent(n)))});function i_(e,t=new Date){return e.expiresAt===void 0?!1:new Date(e.expiresAt)<=t}function qv(e,t){let n=new Set(e.map(a=>a.id)),r=new Set(Object.keys(t)),o=[...n].filter(a=>!r.has(a));if(o.length>0)throw Error(`buildResumeArray: missing responses for open interrupts: ${o.join(", ")}`);let i=[...r].filter(a=>!n.has(a));if(i.length>0)throw Error(`buildResumeArray: responses reference unknown interrupt ids: ${i.join(", ")}`);return e.map(a=>{let s=t[a.id],c={interruptId:a.id,status:s.status};return s.status==="resolved"&&s.payload!==void 0&&(c.payload=s.payload),s.metadata!==void 0&&(c.metadata=s.metadata),c})}function Yv(){return typeof process<"u"&&process.env!==void 0&&!!process.env.SUPPRESS_TRANSFORMATION_WARNINGS}function a_(e){Yv()||console.warn(`[ag-ui][compat] Flattening message content for a <=0.0.39 peer DROPS non-text parts (${e.join(", ")}). The peer cannot receive them; upgrade it to keep media content. See the repo-root DEPRECATIONS.md.`)}function s_(e){Yv()||console.warn(`[ag-ui][compat] Not flattening message content for a <=0.0.39 peer: ${e} content part(s) claim type "text" but carry a malformed 'text' value. That is a defect in the message, not media the peer cannot represent, and a downgrade must not repair it \u2014 the content is passed on unchanged so the outgoing enforcement boundary reports it. See the repo-root DEPRECATIONS.md.`)}function l_(e){let t=e.content;if(Array.isArray(t)){let n=s=>typeof s=="object"&&!!s&&"type"in s&&s.type==="text",r=s=>n(s)&&typeof s.text=="string",o=t.filter(s=>n(s)&&!r(s));if(o.length>0)return s_(o.length),e;let i=t.filter(s=>!r(s)).map(s=>typeof s=="object"&&s&&"type"in s?String(s.type):typeof s);i.length>0&&a_(i);let a=t.filter(r).map(s=>s.text).join("");return{...e,content:a}}return typeof t=="string"?e:t===void 0?{...e,content:""}:e}var c_=class extends $r{run(e,t){let{parentRunId:n,...r}=e,o={...r,messages:r.messages.map(l_)};return this.runNext(o,t)}},Nv="THINKING_START",Ov="THINKING_END",Pv="THINKING_TEXT_MESSAGE_START",Mv="THINKING_TEXT_MESSAGE_CONTENT",zv="THINKING_TEXT_MESSAGE_END",u_=class extends $r{constructor(...e){super(...e),this.currentReasoningId=null,this.currentMessageId=null}warnAboutTransformation(e,t){typeof process<"u"&&process.env!==void 0&&process.env.SUPPRESS_TRANSFORMATION_WARNINGS||console.warn(`AG-UI is converting ${e} to ${t}. To remove this warning, upgrade your AG-UI integration package (e.g. @ag-ui/langgraph). To surpress it, set SUPPRESS_TRANSFORMATION_WARNINGS=true in your .env file.`)}run(e,t){return this.currentReasoningId=null,this.currentMessageId=null,this.runNext(e,t).pipe(bt(n=>this.transformEvent(n)))}transformEvent(e){switch(e.type){case Nv:{this.currentReasoningId=we();let{title:t,...n}=e;return this.warnAboutTransformation(Nv,v.REASONING_START),{...n,type:v.REASONING_START,messageId:this.currentReasoningId}}case Pv:return this.currentMessageId=we(),this.warnAboutTransformation(Pv,v.REASONING_MESSAGE_START),{...e,type:v.REASONING_MESSAGE_START,messageId:this.currentMessageId,role:"reasoning"};case Mv:{let{delta:t,...n}=e;return this.warnAboutTransformation(Mv,v.REASONING_MESSAGE_CONTENT),{...n,type:v.REASONING_MESSAGE_CONTENT,messageId:this.currentMessageId??we(),delta:t}}case zv:{let t=this.currentMessageId??we();return this.warnAboutTransformation(zv,v.REASONING_MESSAGE_END),{...e,type:v.REASONING_MESSAGE_END,messageId:t}}case Ov:{let t=this.currentReasoningId??we();return this.warnAboutTransformation(Ov,v.REASONING_END),{...e,type:v.REASONING_END,messageId:t}}default:return e}}},Lv="SUBAGENT_STARTED",Dv="SUBAGENT_FINISHED",$v="SUBAGENT_ERROR";function Da(e){if(e&&typeof e=="object"&&"subagentRunId"in e){let{subagentRunId:t,...n}=e;return n}return e}function Uv(e){return e.map(t=>Da(t))}var d_=class extends $r{warnDroppedLifecycleEvent(e){typeof process<"u"&&process.env!==void 0&&process.env.SUPPRESS_TRANSFORMATION_WARNINGS||console.warn(`AG-UI is dropping ${e} because the target agent predates subagent support. To remove this warning, upgrade your AG-UI integration package. To suppress it, set SUPPRESS_TRANSFORMATION_WARNINGS=true in your .env file.`)}run(e,t){let n={...e,messages:(e.messages??[]).map(r=>Da(r))};return this.runNext(n,t).pipe(fi(r=>{let o=r.type;(o===Lv||o===Dv||o===$v)&&this.warnDroppedLifecycleEvent(o)}),Vl(r=>{let o=r.type;return o!==Lv&&o!==Dv&&o!==$v}),bt(r=>{let o=Da(r);if(o.type===v.MESSAGES_SNAPSHOT){let i=o;if(Array.isArray(i.messages))return{...i,messages:Uv(i.messages)}}if(o.type===v.RUN_FINISHED){let i=o;if(i.outcome&&Array.isArray(i.outcome.interrupts))return{...i,outcome:{...i.outcome,interrupts:i.outcome.interrupts.map(a=>Da(a))}}}if(o.type===v.RUN_STARTED){let i=o;if(i.input&&Array.isArray(i.input.messages))return{...i,input:{...i.input,messages:Uv(i.input.messages)}}}return o}))}},Na="1.0.0",Hv=!1,p_=(e,t)=>/^\d+\.\d+$/.test(e)?sn(e,t)>0?"newer":"not-newer":"uninterpretable",Fv=e=>{let t=e.protocolVersion;if(!(t===void 0||t===Bt))switch(p_(t,Bt)){case"uninterpretable":console.warn(`[ag-ui] The producer declared protocol version '${t}', which this client cannot interpret.`);return;case"newer":console.warn(`[ag-ui] The producer speaks protocol ${t}; this client speaks ${Bt}. Unrecognised material will be stripped with warnings.`);return;case"not-newer":return}},h_=class Xv{resolvePeerCeiling(t){if(this.resolvingPeerCeiling)return Na;let n=Object.getOwnPropertyDescriptor(this,"maxVersion"),r=Object.getOwnPropertyDescriptor(this,"maxProtocolVersion"),o=Object.getPrototypeOf(this);for(;o&&o!==Xv.prototype;)n??=Object.getOwnPropertyDescriptor(o,"maxVersion"),r??=Object.getOwnPropertyDescriptor(o,"maxProtocolVersion"),o=Object.getPrototypeOf(o);if(t==="maxVersion"&&n)return Na;let i=t==="maxProtocolVersion"?n:r;if(!i)return Na;this.resolvingPeerCeiling=!0;try{return i.get?i.get.call(this):i.value}finally{this.resolvingPeerCeiling=!1}}get maxProtocolVersion(){return this.resolvePeerCeiling("maxProtocolVersion")}get maxVersion(){return!this.resolvingPeerCeiling&&!Hv&&(Hv=!0,console.warn("[ag-ui] AbstractAgent.maxVersion is deprecated \u2014 use maxProtocolVersion. Same value; the new name says whose version it is and that it is a ceiling.")),this.resolvePeerCeiling("maxVersion")}get debug(){return this._debug}set debug(t){this._debug=Oa(t),this._debugLogger=lu(this._debug)}get debugLogger(){return this._debugLogger}set debugLogger(t){typeof t=="boolean"?this._debugLogger=t?lu(Oa(!0)):void 0:this._debugLogger=t}resolvedCeilingDuringConstruction(){let t=this.maxProtocolVersion;if(typeof t!="string"||!su(t))throw new j(`maxProtocolVersion resolved to ${JSON.stringify(t)} during construction, which is not a version this client can compare. A ceiling read from an instance field is not available yet \u2014 return a literal from the getter.`);return t}constructor({agentId:t,description:n,threadId:r,initialMessages:o,initialState:i,debug:a}={}){this.subscribers=[],this.isRunning=!1,this.pendingInterrupts=[],this.middlewares=[],this.resolvingPeerCeiling=!1,this.agentId=t,this.description=n??"",this.threadId=r??It(),this.messages=Q(o??[]),this.state=Q(i??{}),this._debug=Oa(a),this._debugLogger=lu(this._debug);let s=this.resolvedCeilingDuringConstruction();sn(s,"0.0.39")<=0&&this.middlewares.unshift(new c_),sn(s,"0.0.45")<=0&&this.middlewares.unshift(new u_),sn(s,"0.0.57")<=0&&this.middlewares.unshift(new d_)}subscribe(t){return this.subscribers.push(t),{unsubscribe:()=>{this.subscribers=this.subscribers.filter(n=>n!==t)}}}use(...t){let n=t.map(r=>typeof r=="function"?new J0(r):r);return this.middlewares.push(...n),this}async runAgent(t,n){try{this.isRunning=!0,this.agentId=this.agentId??It();let r=this.prepareRunAgentInput(t);this.debugLogger?.lifecycle("LIFECYCLE","Run started:",{agentId:this.agentId,threadId:this.threadId});let o,i=new Set(this.messages.map(l=>l.id)),a=[{onRunStartedEvent:({event:l})=>Fv(l),onRunFinishedEvent:l=>{l.outcome==="success"&&(o=l.result)}},...this.subscribers,n??{}];await this.onInitialize(r,a),this.activeRunDetach$=new vt;let s;this.activeRunCompletionPromise=new Promise(l=>{s=l}),await di(Ko(()=>[...this.middlewares,new Eu].reduceRight((l,u)=>({run:m=>u.run(m,l),get messages(){return l.messages},get state(){return l.state}}),this).run(r),hu(this.debugLogger),Ma(this.debugLogger),cu(this.debugLogger),l=>l.pipe(hi(this.activeRunDetach$)),l=>this.apply(r,l,a),l=>this.processApplyEvents(r,l,a),xr(l=>(this.debugLogger?.lifecycle("LIFECYCLE","Run errored:",{agentId:this.agentId,error:l instanceof Error?l.message:String(l)}),this.isRunning=!1,this.onError(r,l,a))),Yt(()=>{this.debugLogger?.lifecycle("LIFECYCLE","Run finished:",{agentId:this.agentId,threadId:this.threadId}),this.isRunning=!1,this.onFinalize(r,a),s?.(),s=void 0,this.activeRunCompletionPromise=void 0,this.activeRunDetach$=void 0}))(ae(null)));let c=Q(this.messages).filter(l=>!i.has(l.id));return{result:o,newMessages:c}}finally{this.isRunning=!1}}connect(t){throw new Nl}async connectAgent(t,n){try{this.isRunning=!0,this.agentId=this.agentId??It();let r=this.prepareRunAgentInput(t),o,i=new Set(this.messages.map(l=>l.id)),a=[{onRunStartedEvent:({event:l})=>Fv(l),onRunFinishedEvent:l=>{l.outcome==="success"&&(o=l.result)}},...this.subscribers,n??{}];await this.onInitialize(r,a),this.activeRunDetach$=new vt;let s;this.activeRunCompletionPromise=new Promise(l=>{s=l}),await di(Ko(()=>Er(()=>this.connect(r)),l=>hu(this.debugLogger)(o_()(l)),Ma(this.debugLogger),cu(this.debugLogger),l=>l.pipe(hi(this.activeRunDetach$)),l=>this.apply(r,l,a),l=>this.processApplyEvents(r,l,a),xr(l=>(this.isRunning=!1,l instanceof Nl?wr:this.onError(r,l,a))),Yt(()=>{this.isRunning=!1,this.onFinalize(r,a),s?.(),s=void 0,this.activeRunCompletionPromise=void 0,this.activeRunDetach$=void 0}))(ae(null)),{defaultValue:void 0});let c=Q(this.messages).filter(l=>!i.has(l.id));return{result:o,newMessages:c}}finally{this.isRunning=!1}}abortRun(){}async detachActiveRun(){if(!this.activeRunDetach$)return;let t=this.activeRunCompletionPromise??Promise.resolve();this.activeRunDetach$.next(),this.activeRunDetach$?.complete(),await t}apply(t,n,r){return Gv(t,n,this,r,this.debugLogger)}processApplyEvents(t,n,r){return n.pipe(fi(o=>{o.messages&&(this.messages=o.messages,r.forEach(i=>{i.onMessagesChanged?.({messages:this.messages,state:this.state,agent:this,input:t})})),o.state!==void 0&&(this.state=o.state,r.forEach(i=>{i.onStateChanged?.({state:this.state,messages:this.messages,agent:this,input:t})}))}))}prepareRunAgentInput(t){let n=Q(this.messages);for(let o of n)o.subagentRunId===null&&delete o.subagentRunId;let r=n.filter(o=>o.role!=="activity");return{threadId:this.threadId,runId:t?.runId||It(),...sn(this.maxProtocolVersion,Na)>=0&&{protocolVersion:Bt},tools:Q(t?.tools??[]),context:Q(t?.context??[]),forwardedProps:Q(t?.forwardedProps??{}),state:Q(this.state),messages:r,...t?.resume===void 0?{}:{resume:Q(t.resume)}}}async onInitialize(t,n){if(this.pendingInterrupts.length>0){let o=new Set((t.resume??[]).map(a=>a.interruptId)),i=this.pendingInterrupts.map(a=>a.id).filter(a=>!o.has(a));if(i.length>0)throw new j(`Thread has ${i.length} pending interrupt(s) not addressed by resume: ${i.join(", ")}`);for(let a of this.pendingInterrupts)if(i_(a)&&(t.resume??[]).find(s=>s.interruptId===a.id)?.status!=="cancelled")throw new j(`Interrupt ${a.id} expired at ${a.expiresAt} and can no longer be answered. Cancel it to continue the thread.`)}let r=await re(n,this.messages,this.state,(o,i,a)=>o.onRunInitialized?.({messages:i,state:a,agent:this,input:t}));if(r.messages!==void 0||r.state!==void 0){if(r.messages){this.messages=r.messages;for(let o of r.messages)o.subagentRunId===null&&delete o.subagentRunId;t.messages=r.messages.filter(o=>o.role!=="activity"),n.forEach(o=>{o.onMessagesChanged?.({messages:this.messages,state:this.state,agent:this,input:t})})}r.state!==void 0&&(this.state=r.state,t.state=r.state,n.forEach(o=>{o.onStateChanged?.({state:this.state,messages:this.messages,agent:this,input:t})}))}}onError(t,n,r){return qt(re(r,this.messages,this.state,(o,i,a)=>o.onRunFailed?.({error:n,messages:i,state:a,agent:this,input:t}))).pipe(bt(o=>{let i=o;if((i.messages!==void 0||i.state!==void 0)&&(i.messages!==void 0&&(this.messages=i.messages,r.forEach(a=>{a.onMessagesChanged?.({messages:this.messages,state:this.state,agent:this,input:t})})),i.state!==void 0&&(this.state=i.state,r.forEach(a=>{a.onStateChanged?.({state:this.state,messages:this.messages,agent:this,input:t})}))),i.stopPropagation!==!0){let a=String(n);if(!(n.name==="AbortError"||n.message==="Fetch is aborted"||n.message==="signal is aborted without reason"||n.message==="component unmounted"||a==="component unmounted"))throw console.error("Agent execution failed:",n),n}return{}}))}async onFinalize(t,n){let r=await re(n,this.messages,this.state,(o,i,a)=>o.onRunFinalized?.({messages:i,state:a,agent:this,input:t}));(r.messages!==void 0||r.state!==void 0)&&(r.messages!==void 0&&(this.messages=r.messages,n.forEach(o=>{o.onMessagesChanged?.({messages:this.messages,state:this.state,agent:this,input:t})})),r.state!==void 0&&(this.state=r.state,n.forEach(o=>{o.onStateChanged?.({state:this.state,messages:this.messages,agent:this,input:t})})))}clone(){let t=Object.create(Object.getPrototypeOf(this));return t.agentId=this.agentId,t.description=this.description,t.threadId=this.threadId,t.messages=Q(this.messages),t.state=Q(this.state),t._debug=this._debug,t._debugLogger=this._debugLogger,t.isRunning=this.isRunning,t.subscribers=[...this.subscribers],t.middlewares=[...this.middlewares],t.pendingInterrupts=Q(this.pendingInterrupts),t}addMessage(t){this.messages.push(t),(async()=>{for(let n of this.subscribers)await n.onNewMessage?.({message:t,messages:this.messages,state:this.state,agent:this});if(t.role==="assistant"&&t.toolCalls)for(let n of t.toolCalls)for(let r of this.subscribers)await r.onNewToolCall?.({toolCall:n,messages:this.messages,state:this.state,agent:this});for(let n of this.subscribers)await n.onMessagesChanged?.({messages:this.messages,state:this.state,agent:this})})()}addMessages(t){this.messages.push(...t),(async()=>{for(let n of t){for(let r of this.subscribers)await r.onNewMessage?.({message:n,messages:this.messages,state:this.state,agent:this});if(n.role==="assistant"&&n.toolCalls)for(let r of n.toolCalls)for(let o of this.subscribers)await o.onNewToolCall?.({toolCall:r,messages:this.messages,state:this.state,agent:this})}for(let n of this.subscribers)await n.onMessagesChanged?.({messages:this.messages,state:this.state,agent:this})})()}setMessages(t){this.messages=Q(t),(async()=>{for(let n of this.subscribers)await n.onMessagesChanged?.({messages:this.messages,state:this.state,agent:this})})()}setState(t){this.state=Q(t),(async()=>{for(let n of this.subscribers)await n.onStateChanged?.({messages:this.messages,state:this.state,agent:this})})()}legacy_to_be_removed_runAgentBridged(t){this.agentId=this.agentId??It();let n=this.prepareRunAgentInput(t);return[...this.middlewares,new Eu].reduceRight((r,o)=>({run:i=>o.run(i,r),get messages(){return r.messages},get state(){return r.state}}),this).run(n).pipe(hu(this.debugLogger),Ma(this.debugLogger),cu(this.debugLogger),D0(this.threadId,n.runId,this.agentId),r=>r.pipe(bt(o=>(this.debugLogger?.event("LEGACY","Event:",o,{type:o.type}),o))))}};function f_(e){if(!Array.isArray(e.messages))return e;let t=!1,n=e.messages.map(r=>{if(r.subagentRunId===null){t=!0;let o={...r};return delete o.subagentRunId,o}return r});return t?{...e,messages:n}:e}var Kv=class extends h_{requestInit(e){return{method:"POST",headers:{...this.headers,"Content-Type":"application/json",Accept:"text/event-stream"},body:JSON.stringify(f_(e)),signal:this.abortController.signal}}runAgent(e,t){return this.abortController=e?.abortController??new AbortController,super.runAgent(e,t)}abortRun(){this.abortController.abort(),super.abortRun()}constructor(e){super(e),this.abortController=new AbortController,this.url=e.url,this.headers=Q(e.headers??{}),this.fetch=e.fetch??((t,n)=>fetch(t,n))}run(e){return z0(N0(()=>this.fetch(this.url,this.requestInit(K0(e)))),this.debugLogger)}clone(){let e=super.clone();e.url=this.url,e.headers=Q(this.headers??{}),e.fetch=this.fetch;let t=new AbortController,n=this.abortController.signal;return n.aborted&&t.abort(n.reason),e.abortController=t,e}};ze(Fn());function nt(e,t){return t===void 0?e:{...e,credentials:t}}function $a(e){if(e.newThread!==void 0)return e.newThread();let t=we();return e.setActiveThread(t),t}function Ua(e,t,n,r){if(t.length===0)return;let o=new URL(String(e),location.href).origin;o===location.origin||n.includes(o)||r.has(o)||(r.add(o),console.warn(`<ag-ui-chat>: sending host credentials (${t.join(", ")}) to ${o}, which is not this page's origin (${location.origin}). Those headers are the page's own authentication, and whichever server answers the browser's preflight receives them \u2014 so a URL attribute built from a query parameter or from tenant-authored configuration is a channel for the token to leave on. If this destination is deliberate, name it in \`trustedOrigins\` to confirm it and silence this notice. Reported once per origin.`))}function Xn(e){return e.split(",").map(t=>t.trim()).filter(t=>t!=="")}function Ha(e,t,n=new Set){let r=new Set(n);for(let s of e)s.role==="tool"&&r.add(s.toolCallId);let o=[],i=[],a=!1;for(let s of e){let c=s.role==="assistant"?m_(s.toolCalls):[];s.role==="tool"||c.length>0&&!a||(o.push(...i.map(t)),i=[]),o.push(s),a=s.role==="tool";for(let u of c)r.has(u)||(r.add(u),i.push(u))}return o.length+i.length===e.length?e:(o.push(...i.map(t)),o)}function m_(e){return Array.isArray(e)?e.map(t=>Object(t).id).filter(t=>typeof t=="string"):[]}function Fa(e,t){return Object(e.metadata)[t]??e[t]}var pe={title:"Assistant",chatHistory:"Chat history",closeHistory:"Close history",searchConversations:"Search conversations",queued:"Waiting to send",removeQueued:'Do not send "{text}"',noMatches:"No conversations match that.",chatMoved:"Moved this panel out of the way",chatMinimised:"Minimised this panel",undo:"Undo",newChat:"New chat",collapse:"Collapse",expand:"Expand",expandUnread:"Expand \u2014 {count} unread",toggleTheme:"Toggle theme",copyCode:"Copy",copied:"Copied",copyFailed:"Copy failed",checkpoints:"Continue a run",noCheckpoints:"Nothing to continue yet.",resumeRun:"Resume",forkRun:"Fork",forkedRun:"branched",greeting:"Hello, {name}",greetingNoName:"Hello there",conversation:"Conversation",jumpToLatest:"Jump to latest",announceResponding:"Assistant is responding",announceAnswerReady:"Assistant answered",announceAwaitingDecision:"{count} action is waiting for your approval",announceStopped:"Response stopped",announceFailed:"The response failed",thinking:"Assistant is thinking\u2026",thoughts:"Thoughts",stopped:"\u23F9 Stopped",connectionLost:"Connection lost",noResult:"No result returned.",callNotFinished:"Not finished: the run ended or moved on before this tool call returned a result.",declinedAction:"User declined the action.",confirmCheckFailed:"Not run: the check that decides whether this action needs the user's confirmation failed.",navigating:"Navigating\u2026",historyReplaced:"The server replaced this conversation's history. Reload to see the updated transcript.",chartUndrawable:"A chart could not be drawn from the data sent, so it was removed.",historyCompacted:"Earlier turns condensed to fit the context window ({count} removed)",usingSkill:"Using skill {name}",runInterrupted:"The previous response didn\u2019t finish \u2014 the page changed before it arrived.",pageMoved:"The page changed since you last looked at it. Call read_page to see the current page, then retry.",attachmentsStillUploading:"{n} file still uploading \u2014 it was not sent with this message and is still attached.",notConnected:"This chat isn\u2019t connected to an agent, so the message wasn\u2019t sent.",continueNeedsTurn:"Type the next turn in the composer first, then pick a run to continue.",continueWhileRunning:"Wait for the current answer or stop it, then pick a run to continue.",skillNeeds:"\u201C{title}\u201D needs {fields} \u2014 fill it in below, then send.",message:"Message",inputPlaceholder:"Ask anything\u2026",send:"Send",stop:"Stop",attachFiles:"Attach files",recordVoice:"Record voice",stopRecording:"Stop recording",transcribing:"Transcribing\u2026",transcriptionFailed:"Transcription failed",recordingLimit:"Stopped at the {n}-minute limit \u2014 transcribing what was recorded.",toolRunning:"running\u2026",toolDeferred:"waiting for you",toolDone:"\u2713 done",toolError:"\u26A0 error",toolDeclined:"\u2298 declined",toolInterrupted:"\u25CC not finished",resizePanel:"Resize the chat panel",decisionApproved:"approved by you",decisionDeclined:"declined by you",argumentsLabel:"Arguments",resultLabel:"Result",errorLabel:"Error",declinedLabel:"Declined",interruptedLabel:"Not finished",details:"Details",subAgentWorking:"Working\u2026",subAgentDelegatedTo:"Delegated to {agent}",subAgentFinished:"{agent} finished",subAgentFailed:"The sub-agent failed",subAgentSteps:"Steps the sub-agent took",approvalEditArgs:"Edit the arguments before approving",approvalArgsInvalid:"That is not valid JSON, so nothing was sent.",approvalArgsNotAnObject:"Arguments have to be a JSON object.",suggestions:"Suggested follow-ups",messageActions:"Message actions",quoteSelection:"Quote",copyMessage:"Copy message",retryMessage:"Try again",feedbackUp:"Good answer",feedbackDown:"Poor answer",confirmAction:"Confirm action",confirmAlways:"Always allow",confirmRun:"Run \u201C{tool}\u201D?",confirm:"Confirm",cancel:"Cancel",approveAction:"Approve action",approvalPrompt:"Approve this action?",approve:"Approve",deny:"Deny",askUserAction:"Question",otherOption:"Other\u2026",answerPlaceholder:"Type your answer\u2026",submit:"Submit",chats:"Chats",noConversations:"No conversations yet.",rename:"Rename",renameConversation:"Rename conversation",delete:"Delete",deleteConversation:"Delete conversation",deletePrompt:"Delete?",tooLarge:"Too large (max {size})",fileTypeNotAllowed:"File type not allowed",uploadFailed:"upload failed",retry:"Retry",retryUpload:"Retry upload",remove:"Remove",removeAttachment:"Remove attachment",justNow:"just now",minutesAgo:"{n}m ago",hoursAgo:"{n}h ago",daysAgo:"{n}d ago",weeksAgo:"{n}w ago"};function _u(e){let t={...pe};for(let n of Object.keys(e)){let r=e[n];r!==void 0&&(t[n]=r)}return t}function g_(e){let t=document.createElement("input");return t.type="text",t.className="question-input",t.setAttribute("part","question-input"),t.placeholder=e,t}function Tu(e,t,n={}){let r=n.strings??pe,o=t.options??[],i=o.length>0,a=!i||t.allowCustom===!0;return new Promise(s=>{let c=document.createElement("div");c.className="question",c.setAttribute("part","question"),c.setAttribute("role","group"),c.setAttribute("aria-label",r.askUserAction);let l=document.createElement("div");l.className="question-body",l.setAttribute("part","question-body"),l.textContent=t.question;let u=document.createElement("div");u.className="question-options",u.setAttribute("part","question-options");let m=`q-${o.length}-${t.question.length}`,f=[];for(let _ of o){let g=document.createElement("label");g.className="question-choice",g.setAttribute("part","question-choice");let I=document.createElement("input");I.type="radio",I.name=m,I.value=_,I.setAttribute("part","question-radio");let z=document.createElement("span");z.setAttribute("part","question-choice-text"),z.textContent=_,g.append(I,z),u.appendChild(g),f.push(I)}let h=null,p=null;if(a){if(p=g_(r.answerPlaceholder),i){let _=document.createElement("label");_.className="question-choice",_.setAttribute("part","question-choice"),h=document.createElement("input"),h.type="radio",h.name=m,h.value="",h.setAttribute("part","question-radio");let g=document.createElement("span");g.setAttribute("part","question-choice-text"),g.textContent=r.otherOption,_.append(h,g),u.appendChild(_),p.disabled=!0}u.appendChild(p)}let E=document.createElement("div");E.className="question-actions",E.setAttribute("part","question-actions");let b=document.createElement("button");b.type="button",b.className="question-btn",b.setAttribute("part","question-button"),b.textContent=r.submit,E.appendChild(b);let S=!1,y=()=>{let _=f.find(g=>g.checked);if(_!==void 0)return _.value;if(p!==null&&(h===null||h.checked)){let g=p.value.trim();return g===""?null:g}return null},T=()=>{p!==null&&h!==null&&(p.disabled=!h.checked),b.disabled=y()===null},w=_=>{if(!S){S=!0,b.disabled=!0;for(let g of f)g.disabled=!0;h!==null&&(h.disabled=!0),p!==null&&(p.disabled=!0),c.setAttribute("data-resolved",_===""?"cancelled":"answered"),s(_)}};for(let _ of[...f,...h!==null?[h]:[]])_.addEventListener("change",T);if(p?.addEventListener("input",T),p?.addEventListener("keydown",_=>{if(_.key==="Enter"){_.preventDefault();let g=y();g!==null&&w(g)}}),b.addEventListener("click",()=>{let _=y();_!==null&&w(_)}),n.signal?.addEventListener("abort",()=>w(""),{once:!0}),c.append(l,u,E),e.appendChild(c),n.signal?.aborted===!0){w("");return}T(),(i?f[0]:p)?.focus()})}function Au(e){let t={};if(!Array.isArray(e))return t;for(let n of e){if(n===null||typeof n!="object")continue;let r=n,o=r.name,i=r.summary,a=r.description;typeof o=="string"&&typeof i=="string"&&(t[o]=typeof a=="string"?{name:o,summary:i,description:a}:{name:o,summary:i})}return t}var Ga=class{#e;#t={};#n=new Set;#o=new cr;constructor(t){this.#e=t}register(t){this.#o.register(t)}registerPageState(t){for(let n of Lo(t))this.#o.register(n)}has(t){return this.#o.has(t)}defaultTools(){return[...this.#l().map(t=>({name:t.name,description:t.description,parameters:t.parameters})),...this.#o.tools()]}advertise(){let t=this.#e.getTools();return this.#n=new Set(t.map(n=>n.name)),t}wasAdvertised(t){return this.#n.has(t)}resolve(t){let n=this.#l().find(r=>r.name===t);return n!==void 0?n:this.#o.has(t)?this.#o.get(t):null}summary(t){return this.#t[t]?.summary}async fetchCatalog(){let t=this.#e.element.getAttribute("data-tools-url");if(t!==null)try{let n=await fetch(t,this.#e.fetchInit(t));this.#t=Au(await n.json())}catch{}}#r(){return this.#e.routeMap().length===0?[]:Al(()=>this.#e.routeMap(),()=>this.#e.navigate())}#i(){let t=this.#e.getPageMap();return t===null?[]:[{name:Io,description:"Read the current page's structure (fields, buttons, route). Call after acting to observe the result within the same turn.",parameters:{type:"object",properties:{},required:[],[Ie]:"Read the page"},handler:()=>t()}]}#a(){let t=this.#e.element.getAttribute("data-page-actions");if(t===null)return[];let n=new Set(Xn(t));return[..._l(n,r=>this.#e.resolvePageTarget(r)),...n.has(pr.CHAT)?fl(this.#e.element):[]]}#l(){return[...this.#r(),...this.#i(),...this.#a(),...this.#u()]}#u(){return this.#e.askUser()?[{name:"ask_user",description:"Ask the user a question and wait for their answer. Provide `options` for a multiple-choice prompt; set `allow_custom` to also accept a free-text answer.",parameters:{type:"object",properties:{question:{type:"string",description:"The question to ask the user."},options:{type:"array",items:{type:"string"},description:"Preset choices offered as radio buttons."},allow_custom:{type:"boolean",description:"Allow a free-text answer in addition to any options."}},required:["question"]},handler:(t,n)=>this.#d(t,n)}]:[]}async#d(t,n){let o={question:typeof t.question=="string"?t.question:""},i=t.options;Array.isArray(i)&&(o.options=i.filter(u=>typeof u=="string")),t.allow_custom===!0&&(o.allowCustom=!0);let a=this.#e.decision.open();this.#e.hidePending();let s=()=>Tu(this.#e.ensureGroup(),o,{signal:a,strings:this.#e.strings()}),c=this.#e.askUserRenderer(),l;if(c===null)l=await s();else try{l=await c.call(this.#e.element,o,{signal:a})}catch(u){l=await this.#c(u,a,n,s)}return this.#e.decision.close(),this.#e.updateEmptyState(),this.#e.follow(),l}#c(t,n,r,o){return n.aborted?Promise.resolve(""):(console.warn(`ag-ui-chat: askUserRenderer failed for tool call ${r}, so the built-in question card asks instead`,t),o())}};function Za(e){if(e.name!==pl)return null;let t=e.args?.id;return typeof t=="string"&&t!==""?t:null}function Jv(e,t){let n=document.createElement("button");return n.type="button",n.className=`approval-btn approval-btn--${e}`,n.setAttribute("part",`approval-button approval-${e}`),n.textContent=t,n}function ku(e,t,n={}){let r=n.strings??pe;return new Promise(o=>{let i=document.createElement("div");i.className="approval",i.setAttribute("part","approval"),t.toolName!==void 0&&i.setAttribute("data-tool-name",t.toolName),i.setAttribute("role","group"),i.setAttribute("aria-label",r.approveAction);let a=document.createElement("div");a.className="approval-body",a.setAttribute("part","approval-body"),a.textContent=t.message??r.approvalPrompt;let s=v_(t,n,r),c=document.createElement("div");c.className="approval-actions",c.setAttribute("part","approval-actions");let l=Jv("deny",r.deny),u=Jv("approve",r.approve),m=!1,f=h=>{m||(m=!0,l.disabled=!0,u.disabled=!0,i.setAttribute("data-resolved",h?"approved":"denied"),o(h))};if(l.addEventListener("click",()=>f(!1)),u.addEventListener("click",()=>{s!==null&&!s.commit()||f(!0)}),n.signal?.addEventListener("abort",()=>f(!1),{once:!0}),c.append(l,u),i.append(a,...s===null?[]:[s.root],c),e.appendChild(i),n.signal?.aborted===!0){f(!1);return}u.focus()})}function v_(e,t,n){let{onEdit:r}=t;if(r===void 0||e.args===void 0)return null;let o=JSON.stringify(e.args,null,2),i=document.createElement("div");i.className="approval-edit",i.setAttribute("part","approval-edit");let a=document.createElement("textarea");a.className="approval-args",a.setAttribute("part","approval-args"),a.setAttribute("aria-label",n.approvalEditArgs),a.rows=Math.min(10,o.split(`
`).length),a.value=o;let s=document.createElement("div");return s.className="approval-error",s.setAttribute("part","approval-error"),s.setAttribute("role","alert"),s.hidden=!0,i.append(a,s),{root:i,commit:()=>{if(a.value===o)return!0;let c;try{c=JSON.parse(a.value)}catch{return s.textContent=n.approvalArgsInvalid,s.hidden=!1,a.focus(),!1}return typeof c!="object"||c===null||Array.isArray(c)?(s.textContent=n.approvalArgsNotAnObject,s.hidden=!1,a.focus(),!1):(s.hidden=!0,r(c),!0)}}}function Iu(e,t){let n=document.createElement("button");return n.type="button",n.className=`confirm-btn confirm-btn--${e}`,n.setAttribute("part",`confirm-button confirm-${e}`),n.textContent=t,n}function Ru(e,t,n={}){let r=n.strings??pe;return new Promise(o=>{let i=document.createElement("div");i.className="confirm",i.setAttribute("part","confirm"),i.setAttribute("data-tool-name",t.toolName),i.setAttribute("role","group"),i.setAttribute("aria-label",r.confirmAction);let a=document.createElement("div");a.className="confirm-body",a.setAttribute("part","confirm-body"),a.textContent=t.message??se(r.confirmRun,{tool:t.toolName});let s=document.createElement("pre");s.className="confirm-args",s.setAttribute("part","confirm-args"),s.textContent=JSON.stringify(t.args,null,2),s.hidden=Object.keys(t.args).length===0;let c=document.createElement("div");c.className="confirm-actions",c.setAttribute("part","confirm-actions");let l=Iu("cancel",r.cancel),u=n.onAlwaysAllow===void 0?null:Iu("always",se(r.confirmAlways,{tool:t.toolName})),m=Iu("confirm",r.confirm),f=!1,h=p=>{f||(f=!0,i.remove(),o(p))};if(l.addEventListener("click",()=>h(!1)),m.addEventListener("click",()=>h(!0)),u?.addEventListener("click",()=>{n.onAlwaysAllow?.(),h(!0)}),n.signal?.addEventListener("abort",()=>h(!1),{once:!0}),c.append(l,...u===null?[]:[u],m),i.append(a,s,c),e.appendChild(i),n.signal?.aborted===!0){h(!1);return}m.focus()})}function Cu(e){return e[sr]===!0}function Ba(e){return e[lr]===!0}var Va=class{#e;#t=new Set;#n=null;constructor(t){this.#e=t}forgetWaivers(){this.#t.clear()}buildContext(){return this.#n=window.location.href,this.#e.getContext()}async execute(t){if(Za(t)!==null)return null;let n=this.#e.transcript.cardFor(t);this.#e.transcript.forgetCard(t.id),this.#e.transcript.setCardElement(t.id,n.element);let r=this.#e.tools.wasAdvertised(t.name)?this.#e.tools.resolve(t.name):null;if(r===null)return this.#e.transcript.isServerSettled(t.id)||n.settle(ne.INTERRUPTED,this.#e.strings().callNotFinished),null;if(this.#e.getPageMap()!==null&&t.name!==Io&&!Ba(r.parameters)&&this.#i()){let a=this.#e.strings().pageMoved;return n.settle(ne.ERROR,a),this.#e.transcript.showPending(),{content:`Error: ${a}`,error:a,outcome:Ge.FAILED}}let o=await this.#r(t,r);if(o==="unanswered"){let a=this.#e.strings().confirmCheckFailed;return n.settle(ne.DECLINED,a),this.#e.transcript.showPending(),{content:a,outcome:Ge.DENIED}}if(o!==null){let a={toolName:t.name,args:t.args},s=r.parameters[ko];typeof s=="string"&&(a.message=s);let c=this.#e.decision.open(),l=Ru(this.#e.transcript.ensureGroup(),a,{signal:c,strings:this.#e.strings(),...o==="destructive"?{onAlwaysAllow:()=>this.#t.add(t.name)}:{}});this.#e.transcript.updateEmptyState(),this.#e.transcript.follow();let u=await l;if(this.#e.decision.close(),n.recordDecision(u?"approved":"declined"),!u){let m=this.#e.strings().declinedAction;return n.settle(ne.DECLINED,m),this.#e.transcript.showPending(),{content:m,outcome:Ge.DENIED}}}let i=Ba(r.parameters)&&this.#e.navigate()===null;i&&this.#e.conversationStore().saveCheckpoint(this.#e.threadId(),{toolCallId:t.id});try{let a=await r.handler(t.args,t.id);if(r.render!==void 0&&this.#e.transcript.renderToolOutput(r.render,t),i)return n.settle(ne.DONE,this.#e.strings().navigating),{content:"",halt:!0};let s=JSON.stringify(a??null);return n.settle(ne.DONE,s),this.#e.transcript.showPending(),{content:s}}catch(a){i&&this.#e.conversationStore().saveCheckpoint(this.#e.threadId(),null);let s=a instanceof Error?a.message:String(a);return n.settle(ne.ERROR,s),this.#e.transcript.showPending(),{content:`Error: ${s}`,error:s,outcome:Ge.FAILED}}}async resolveInterrupts(t){let n=this.#e.decision.open();this.#e.announce(se(this.#e.strings().announceAwaitingDecision,{count:t.length})),this.#e.transcript.hidePending();let r=await Promise.all(t.map(async i=>{let a=i.toolCallId!==void 0?this.#e.transcript.card(i.toolCallId):void 0,s={},c=b_(i)??i.message;c!==void 0&&(s.message=c);let l=a?.element.getAttribute("data-tool-name");l!=null&&(s.toolName=l);let u,m=this.#e.approveWithEdits()&&a!==void 0;m&&(s.args=a.args),a?.mark(ne.DEFERRED);let f=()=>ku(a?.approvalSlot??this.#e.transcript.ensureGroup(),s,{signal:n,strings:this.#e.strings(),...m?{onEdit:E=>{u=E}}:{}}),h=this.#e.approvalRenderer(),p;if(h===null)p=await f();else try{p=await h.call(this.#e.element,s,{signal:n})}catch(E){p=await this.#o(E,n,i.id,f)}return a?.recordDecision(p?"approved":"declined"),p?a?.mark(ne.PENDING):a?.settle(ne.DECLINED,this.#e.strings().declinedAction),{id:i.id,approved:p,editedArgs:u}}));this.#e.transcript.updateEmptyState(),this.#e.transcript.follow(),this.#e.decision.close();let o={};for(let{id:i,approved:a,editedArgs:s}of r)o[i]=a?{status:"resolved",payload:s===void 0?{approved:!0}:{approved:!0,editedArgs:s}}:{status:"cancelled"};return o}#o(t,n,r,o){return n.aborted?Promise.resolve(!1):(console.warn(`ag-ui-chat: approvalRenderer failed for interrupt ${r}, so the built-in approval card asks instead`,t),o())}async#r(t,n){if(this.#e.autoConfirm())return null;let r=this.#e.confirmPredicate();if(r!==null)try{return await r.call(this.#e.element,t.name,t.args)===!0?"predicate":null}catch(o){return console.warn(`ag-ui-chat: confirmPredicate failed for tool ${t.name}, so the call was refused`,o),"unanswered"}return this.#t.has(t.name)?null:Cu(n.parameters)?"destructive":null}#i(){return this.#n!==null&&this.#n!==window.location.href}};function b_(e){let t=e.metadata?.[ko];return typeof t=="string"&&t.trim()!==""?t:void 0}var y_="http://www.w3.org/2000/svg",Xe={top:20,right:12,bottom:30,left:44},w_=480,E_=220,x_=220/480,S_=160,__=320,Qv=8,T_=5.6,eb=["var(--ag-ui-chart-1, #4f7cff)","var(--ag-ui-chart-2, #21b573)","var(--ag-ui-chart-3, #e0803c)","var(--ag-ui-chart-4, #b563d8)","var(--ag-ui-chart-5, #d84f6e)","var(--ag-ui-chart-6, #3ba7c4)"];function un(e){return eb[e%eb.length]}function tb(e){let t=Math.max(E_,e),n=Math.min(__,Math.max(S_,Math.round(t*x_)));return{width:t,height:n,plotW:t-Xe.left-Xe.right,plotH:n-Xe.top-Xe.bottom}}function wt(e,t){let n=document.createElementNS(y_,e);for(let[r,o]of Object.entries(t))n.setAttribute(r,String(o));return n}function nb(e,t){let n=wt("text",{"font-size":10,fill:"currentColor","fill-opacity":.65,...t});return n.textContent=e,n}function A_(e){let t=[];return e.labels.forEach((n,r)=>{let o=0;for(let i of e.series)o+=i.points[r]??0,t.push(o)}),t}function k_(e){let t=e.kind==="stacked"?A_(e):e.series.flatMap(o=>[...o.points]),n=Math.max(0,...t),r=Math.min(0,...t);return n===r?{min:r,max:n+1}:{min:r,max:n}}function dn(e,t,n,r){return Xe.top+r.plotH-(e-t)/(n-t)*r.plotH}function Nu(e,t,n){let r=n.plotW/t;return Xe.left+r*e+r/2}function I_(e,t){let n=t.plotW/e.length,r=Math.max(...e.map(o=>o.length))*T_;return Math.max(1,Math.ceil(r/n))}function R_(e,t,n,r,o){for(let a of[r,o]){let s=dn(a,r,o,n);e.appendChild(wt("line",{x1:Xe.left,y1:s,x2:n.width-Xe.right,y2:s,stroke:"currentColor","stroke-opacity":a===r?.35:.12})),e.appendChild(nb(String(Math.round(a)),{x:Xe.left-6,y:s+4,"text-anchor":"end"}))}let i=I_(t.labels,n);t.labels.forEach((a,s)=>{s%i===0&&e.appendChild(nb(a,{x:Nu(s,t.labels.length,n),y:n.height-Xe.bottom+16,"text-anchor":"middle"}))})}function C_(e,t,n,r,o){let i=n.plotW/t.labels.length,a=i*.7/t.series.length,s=dn(r,r,o,n);t.series.forEach((c,l)=>{c.points.forEach((u,m)=>{let f=dn(u,r,o,n);e.appendChild(wt("rect",{x:Xe.left+i*m+i*.15+a*l,y:f,width:a,height:Math.max(1,s-f),fill:un(l),rx:2}))})})}function N_(e,t,n,r,o){let i=n.plotW/t.labels.length,a=i*.7,s=t.labels.map(()=>0);t.series.forEach((c,l)=>{c.points.forEach((u,m)=>{let f=s[m]??0,h=f+u;s[m]=h;let p=dn(h,r,o,n);e.appendChild(wt("rect",{x:Xe.left+i*m+i*.15,y:p,width:a,height:Math.max(1,dn(f,r,o,n)-p),fill:un(l)}))})})}function O_(e,t,n,r,o){t.series.forEach((i,a)=>{let s=i.points.map((c,l)=>`${Nu(l,t.labels.length,n)},${dn(c,r,o,n)}`).join(" ");e.appendChild(wt("polyline",{points:s,fill:"none",stroke:un(a),"stroke-width":2,"stroke-linejoin":"round"}))})}function P_(e,t,n,r,o){t.series.forEach((i,a)=>{i.points.forEach((s,c)=>{e.appendChild(wt("circle",{cx:Nu(c,t.labels.length,n),cy:dn(s,r,o,n),r:4,fill:un(a),"fill-opacity":.85}))})})}function M_(e,t,n){let r=t.reduce((c,l)=>c+l,0),o=n.width/2,i=Xe.top+n.plotH/2,a=Math.min(n.plotW,n.plotH)/2;if(r===0){e.appendChild(wt("circle",{cx:o,cy:i,r:a,fill:"none",stroke:"currentColor","stroke-opacity":.3}));return}let s=-Math.PI/2;t.forEach((c,l)=>{let u=c/r*Math.PI*2,m=s+u;if(u>=Math.PI*2)e.appendChild(wt("circle",{cx:o,cy:i,r:a,fill:un(l)}));else{let f=o+a*Math.cos(s),h=i+a*Math.sin(s),p=o+a*Math.cos(m),E=i+a*Math.sin(m),b=u>Math.PI?1:0;e.appendChild(wt("path",{d:`M ${o} ${i} L ${f} ${h} A ${a} ${a} 0 ${b} 1 ${p} ${E} Z`,fill:un(l)}))}s=m})}function rb(e,t){let n=wt("svg",{viewBox:`0 0 ${t.width} ${t.height}`,width:"100%",role:"img"});if(n.setAttribute("aria-label",e.title??`${e.kind} chart`),e.kind==="pie"){let i=e.series[0];return M_(n,i.points.map(a=>Math.max(0,a)),t),n}let{min:r,max:o}=k_(e);return R_(n,e,t,r,o),e.kind==="bar"?C_(n,e,t,r,o):e.kind==="stacked"?N_(n,e,t,r,o):e.kind==="line"?O_(n,e,t,r,o):P_(n,e,t,r,o),n}function z_(e){if(e.length<2)return null;let t=document.createElement("div");return t.className="chart-legend",t.setAttribute("part","chart-legend"),e.forEach((n,r)=>{let o=document.createElement("span");o.className="chart-legend-item";let i=document.createElement("span");i.className="chart-legend-swatch",i.style.background=un(r),o.append(i,document.createTextNode(n)),t.appendChild(o)}),t}function L_(e,t){new ResizeObserver(()=>{t(Math.round(e.clientWidth/Qv)*Qv)}).observe(e)}function Ur(e){if(e.labels.length===0||e.series.length===0)return null;let t=document.createElement("div");if(t.className="chart-block",t.setAttribute("part","chart-block"),e.title!==void 0&&e.title!==""){let i=document.createElement("div");i.className="chart-title",i.setAttribute("part","chart-title"),i.textContent=e.title,t.appendChild(i)}let n=w_,r=rb(e,tb(n));t.appendChild(r);let o=z_(e.kind==="pie"?e.labels:e.series.map(i=>i.label));return o!==null&&t.appendChild(o),L_(t,i=>{if(i===n)return;n=i;let a=rb(e,tb(n));r.replaceWith(a),r=a}),t}var D_=["bar","line","pie","scatter","stacked"];function $_(e){return D_.includes(e)?e:"bar"}function U_(e){if(!Array.isArray(e))return null;let t=[];for(let n of e){if(typeof n!="number"||!Number.isFinite(n)||Math.abs(n)>1e15)return null;t.push(n)}return t}function H_(e){if(!Array.isArray(e))return null;for(let t=0;t<e.length;t+=1)if(typeof e[t]!="string")return null;return e}function Kn(e){if(typeof e!="object"||e===null)return null;let t=e,n=H_(t.labels);if(n===null||!Array.isArray(t.series))return null;let r=[];for(let a of t.series){if(typeof a!="object"||a===null)return null;let s=a,c=U_(s.points);if(c===null||c.length!==n.length)return null;r.push({label:typeof s.label=="string"?s.label:"",points:c})}if(r.length===0||r.length*n.length>2e4||n.length>2e3)return null;let o=$_(t.kind),i=t.title;return typeof i=="string"?{kind:o,title:i,labels:n,series:r}:{kind:o,labels:n,series:r}}var ja="render_chart";function F_(e){let t=Kn(e);return t===null?null:Ur(t)}function G_(e){let t=Kn(e);return t!==null&&t.labels.length>0&&t.series.length>0}var Z_="chart not rendered: expected labels (strings) and series, each with one finite number per label";function ob(){return{name:ja,description:"Show a chart in the conversation. Supply the data and the page draws it. Every series must have exactly one point per label.",parameters:{type:"object",properties:{kind:{type:"string",enum:["bar","line","pie","scatter","stacked"]},title:{type:"string"},labels:{type:"array",items:{type:"string"}},series:{type:"array",items:{type:"object",properties:{label:{type:"string"},points:{type:"array",items:{type:"number"}}},required:["points"]}}},required:["labels","series"],"x-summary":"Draw a chart"},handler:e=>G_(e)?"chart rendered":Z_,render:F_}}function Mt(e){e.style.height="auto",e.style.height=`${e.scrollHeight}px`}function Ou(e,t){return new Promise((n,r)=>{let o=new FormData;o.append("file",e);let i=new XMLHttpRequest;i.open("POST",t.url),i.withCredentials=t.credentials==="include";for(let[c,l]of Object.entries(t.headers??{}))i.setRequestHeader(c,l);let a=t.onProgress;a!==void 0&&i.upload.addEventListener("progress",c=>{c.lengthComputable&&a(c.total===0?0:c.loaded/c.total)}),i.addEventListener("load",()=>{if(i.status>=200&&i.status<300)try{n(B_(JSON.parse(i.responseText)))}catch{r(new Error("upload returned an unreadable response"))}else r(new Error(V_(i)))}),i.addEventListener("error",()=>r(new Error("upload failed"))),i.addEventListener("abort",()=>r(new Error("upload cancelled")));let s=t.signal;s!==void 0&&s.addEventListener("abort",()=>i.abort()),i.send(o)})}function B_(e){if(typeof e!="object"||e===null)throw new Error("not an object");let t=e,n=t.id,r=t.name,o=t.mime,i=t.size,a=t.url;if(typeof n!="string"||typeof r!="string"||typeof o!="string"||typeof i!="number")throw new Error("missing fields");return typeof a=="string"?{id:n,name:r,mime:o,size:i,url:a}:{id:n,name:r,mime:o,size:i}}function V_(e){try{let t=JSON.parse(e.responseText);if(typeof t.error=="string")return t.error}catch{}return`upload failed (${e.status})`}function Wa(e){let t=document.createElement("div");t.className="attachment-chips",t.setAttribute("part","attachment-chips");for(let n of e)t.appendChild(j_(n));return t}function j_(e){let t=document.createElement("div");t.className="attachment-chip attachment-chip--ready",t.setAttribute("part","attachment-chip");let n=document.createElement("span");n.className="attachment-chip-icon",n.setAttribute("part","attachment-chip-icon"),n.innerHTML=Pu(e.mime),n.setAttribute("aria-hidden","true");let r=document.createElement("span");r.className="attachment-chip-name",r.setAttribute("part","attachment-chip-name"),r.textContent=e.name,r.title=e.name;let o=document.createElement("span");return o.className="attachment-chip-size",o.setAttribute("part","attachment-chip-size"),o.textContent=qa(e.size),t.append(n,r,o),t}function Pu(e){return e.startsWith("image/")?up:e==="application/pdf"?dp:e.startsWith("text/")?pp:cp}function qa(e){if(e<1024)return`${e} B`;let t=["KB","MB","GB"],n=e/1024,r=0;for(;n>=1024&&r<t.length-1;)n/=1024,r+=1;return`${n<10?Math.round(n*10)/10:Math.round(n)} ${t[r]}`}var Ya=class{element;#e;#t;#n=[];constructor(t){this.#e=t,this.#t=t.strings??pe,this.element=document.createElement("div"),this.element.className="attachment-tray",this.element.setAttribute("part","attachment-tray"),this.element.hidden=!0}add(t){let n={localId:we(),file:t,status:We.UPLOADING,progress:0,ref:null,error:"",controller:null};this.#n.push(n);let r=this.#o(t);if(r!==null){n.status=We.ERROR,n.error=r,this.#a(),this.#e.onChange?.();return}this.#a(),this.#e.onChange?.(),this.#r(n)}readyRefs(){let t=[];for(let n of this.#n)n.ref!==null&&t.push(n.ref);return t}hasPending(){return this.#n.some(t=>t.status===We.UPLOADING)}pendingCount(){return this.#n.filter(t=>t.status===We.UPLOADING).length}isEmpty(){return this.#n.length===0}clearReady(){this.#n=this.#n.filter(t=>t.status===We.UPLOADING),this.#a()}clear(){for(let t of this.#n)t.controller?.abort();this.#n=[],this.#a()}dispose(){for(let t of this.#n)t.controller?.abort()}#o(t){return this.#e.maxBytes>0&&t.size>this.#e.maxBytes?se(this.#t.tooLarge,{size:qa(this.#e.maxBytes)}):W_(this.#e.accept,t)?null:this.#t.fileTypeNotAllowed}#r(t){let n=this.#o(t.file);if(n!==null){t.status=We.ERROR,t.error=n,this.#a(),this.#e.onChange?.();return}t.status=We.UPLOADING,t.progress=0,t.error="";let r=new AbortController;t.controller=r,this.#a(),this.#e.upload(t.file,o=>{t.progress=o,this.#a()},r.signal).then(o=>{t.status=We.READY,t.ref=o}).catch(o=>{t.status=We.ERROR,t.error=o instanceof Error?o.message:this.#t.uploadFailed}).finally(()=>{t.controller=null,this.#a(),this.#e.onChange?.()})}#i(t){t.controller?.abort(),this.#n=this.#n.filter(n=>n!==t),this.#a(),this.#e.onChange?.()}#a(){this.element.replaceChildren(),this.element.hidden=this.#n.length===0;for(let t of this.#n)this.element.appendChild(this.#l(t))}#l(t){let n=document.createElement("div");n.className=`attachment-chip attachment-chip--${t.status}`,n.setAttribute("part","attachment-chip");let r=document.createElement("span");r.className="attachment-chip-icon",r.setAttribute("part","attachment-chip-icon"),r.innerHTML=Pu(t.file.type),r.setAttribute("aria-hidden","true");let o=document.createElement("span");o.className="attachment-chip-name",o.setAttribute("part","attachment-chip-name"),o.textContent=t.file.name,o.title=t.file.name;let i=document.createElement("span");if(i.className="attachment-chip-size",i.setAttribute("part","attachment-chip-size"),i.textContent=t.status===We.ERROR?t.error:qa(t.file.size),n.append(r,o,i),t.status===We.UPLOADING){let s=document.createElement("div");s.className="attachment-chip-bar",s.setAttribute("part","attachment-chip-bar");let c=document.createElement("div");c.className="attachment-chip-bar-fill",c.setAttribute("part","attachment-chip-bar-fill"),c.style.width=`${Math.round(t.progress*100)}%`,s.appendChild(c),n.appendChild(s)}if(t.status===We.ERROR){let s=document.createElement("button");s.type="button",s.className="attachment-chip-retry",s.setAttribute("part","attachment-chip-retry"),s.title=this.#t.retry,s.setAttribute("aria-label",this.#t.retryUpload),s.textContent="\u21BB",s.addEventListener("click",()=>this.#r(t)),n.appendChild(s)}let a=document.createElement("button");return a.type="button",a.className="attachment-chip-remove",a.setAttribute("part","attachment-chip-remove"),a.title=this.#t.remove,a.setAttribute("aria-label",this.#t.removeAttachment),a.textContent="\u2715",a.addEventListener("click",()=>this.#i(t)),n.appendChild(a),n}};function W_(e,t){let n=Xn(e).map(i=>i.toLowerCase());if(n.length===0)return!0;let r=t.type.toLowerCase(),o=t.name.toLowerCase();return n.some(i=>i.startsWith(".")?o.endsWith(i):i.endsWith("/*")?r.startsWith(i.slice(0,-1)):r===i)}var Xa=class{#e;#t=null;constructor(t){this.#e=t}get tray(){return this.#t}wire(t){this.#t?.element.remove(),this.#t=null;let n=this.#e.element.getAttribute("data-attachments-url"),r=this.#e.uploadHandler()??this.#n(n);if(r===null)return;let o=this.#e.element.getAttribute("data-attachment-accept")??"",i=new Ya({upload:r,maxBytes:this.#o(),accept:o,strings:this.#e.strings(),onChange:()=>this.#u(i)});this.#t=i,this.#e.slot.appendChild(this.#t.element),this.#e.fileInput.accept=o,this.#e.button.hidden=!1,this.#r(t),this.#l(i,t)}attach(t){return this.#t===null?!1:(this.#t.add(t),!0)}onFilesPicked(){let t=this.#e.fileInput,n=t.files;if(n!==null)for(let r of Array.from(n))this.#t?.add(r);t.value=""}#n(t){return t===null?null:(n,r,o)=>Ou(n,{url:t,headers:this.#e.headersFor(t),...this.#e.credentialsOption(),onProgress:r,signal:o})}#o(){let t=this.#e.element.getAttribute("data-attachment-max-bytes");if(t===null)return ul;let n=Number.parseInt(t,10);return Number.isFinite(n)&&n>=0?n:ul}#r(t){let n=this.#e.chat;n.addEventListener("dragover",r=>{r.preventDefault(),n.classList.add("chat--dragover")},{signal:t}),n.addEventListener("dragleave",()=>{n.classList.remove("chat--dragover")},{signal:t}),n.addEventListener("drop",r=>{r.preventDefault(),n.classList.remove("chat--dragover");let o=r.dataTransfer?.files;if(o!==void 0)for(let i of Array.from(o))this.#t?.add(i)},{signal:t})}#i(t,n,r){let o=this.#a(),i=n.getData("text/plain");o===null||i.length<o||(t.preventDefault(),r.add(new File([i],`pasted-${ib()}.txt`,{type:"text/plain"})))}#a(){let t=this.#e.element.getAttribute("data-paste-attach");if(t===null)return Co;if(t==="off")return null;let n=Number.parseInt(t,10);return Number.isNaN(n)||n<=0?(console.warn(`<ag-ui-chat>: data-paste-attach="${t}" is neither "off" nor a positive number of characters, so the default of ${Co} is used.`),Co):n}#l(t,n){this.#e.chat.addEventListener("paste",r=>{let o=r.clipboardData??null;if(o===null)return;let i=Array.from(o.files);if(i.length===0){this.#i(r,o,t);return}o.getData("text/plain")===""&&r.preventDefault();for(let a of i)this.#t?.add(q_(a))},{signal:n})}#u(t){this.#e.element.dispatchEvent(new CustomEvent(rl,{detail:{attachments:t.readyRefs(),pending:t.pendingCount()},bubbles:!0,composed:!0}))}};function ib(){return new Date().toISOString().replace(/[:.]/g,"-")}function q_(e){if(e.name!=="")return e;let t=e.type.split("/")[1]??e.type,n=ib();return new File([e],t===""?`pasted-${n}`:`pasted-${n}.${t}`,{type:e.type})}async function Mu(e,t){let n=new FormData;n.append("audio",e,"recording.webm");let r=await fetch(t.url,nt({method:"POST",headers:{...t.headers??{}},body:n},t.credentials));if(!r.ok)throw new Error(await Y_(r));let o=await r.json();if(typeof o=="object"&&o!==null&&typeof o.text=="string")return o.text;throw new Error("transcription returned an unreadable response")}async function Y_(e){try{let t=await e.json();if(typeof t.error=="string")return t.error}catch{}return`transcription failed (${e.status})`}var ab=12e4,Ka=class{element;#e;#t;#n;#o="idle";#r=null;#i=null;#a=[];#l=null;#u=!1;#d=!1;constructor(t){this.#e=t.transcribe,this.#t=t.onText,this.#n=t.strings??pe,this.element=document.createElement("button"),this.element.type="button",this.element.className="voice-btn",this.element.setAttribute("part","voice-button");let n=document.createElement("slot");n.name="icon-voice",n.innerHTML=tp,this.element.append(n),this.#g("idle"),this.element.addEventListener("click",()=>{this.toggle()})}async toggle(){if(this.#o==="recording"){this.#h();return}this.#o!=="transcribing"&&await this.#c()}async#c(){let t;try{t=await navigator.mediaDevices.getUserMedia({audio:!0})}catch{this.#b(this.#n.transcriptionFailed);return}this.#i=t,this.#a=[],this.#u=!1;let n=new MediaRecorder(t);n.addEventListener("dataavailable",r=>{this.#a.push(r.data)}),n.addEventListener("stop",()=>{this.#f(n.mimeType)}),this.#r=n,n.start(),this.#l=setTimeout(()=>{this.#u=!0,this.#h()},ab),this.#g("recording")}#h(){this.#s(),this.#r?.stop()}#s(){this.#l!==null&&(clearTimeout(this.#l),this.#l=null)}dispose(){this.#d=!0,this.#s(),this.#r!==null&&this.#r.state!=="inactive"&&this.#r.stop(),this.#r=null,this.#m()}async#f(t){if(this.#d)return;this.#m(),this.#g("transcribing");let n=new Blob(this.#a,{type:t||"audio/webm"});try{let r=await this.#e(n);this.#g("idle"),this.#u&&(this.element.title=se(this.#n.recordingLimit,{n:ab/6e4})),r!==""&&this.#t(r)}catch(r){this.#b(r instanceof Error?r.message:this.#n.transcriptionFailed)}finally{this.#r=null}}#m(){for(let t of this.#i?.getTracks()??[])t.stop();this.#i=null}#b(t){this.#m(),this.#r=null,this.#g("idle"),this.element.title=t}#g(t){this.#o=t,this.element.dataset.state=t;let n=this.#y(t);this.element.title=n,this.element.setAttribute("aria-label",n),this.element.setAttribute("aria-pressed",String(t==="recording")),this.element.disabled=t==="transcribing"}#y(t){return t==="recording"?this.#n.stopRecording:t==="transcribing"?this.#n.transcribing:this.#n.recordVoice}};var Ja=class{#e;#t=null;constructor(t){this.#e=t}wire(){this.#t?.element.remove(),this.#t=null;let t=this.#e.element.getAttribute("data-transcribe-url"),n=this.#e.transcribeHandler()??this.#n(t);n!==null&&(this.#t=new Ka({transcribe:n,onText:r=>this.#o(r),strings:this.#e.strings()}),this.#e.slot.appendChild(this.#t.element))}dispose(){this.#t?.dispose()}#n(t){return t===null?null:n=>Mu(n,{url:t,headers:this.#e.headersFor(t),...this.#e.credentialsOption()})}#o(t){let n=this.#e.input,r=n.value.trim();n.value=r===""?t:`${r} ${t}`,this.#e.onInput(),n.focus()}};var Qa=class{chips;palette;#e;#t=[];#n=!1;#o=!1;#r=[];#i=0;constructor(t){this.#e=t,this.chips=document.createElement("div"),this.chips.className="skill-chips",this.chips.setAttribute("part","skill-chips"),this.chips.hidden=!0,this.palette=document.createElement("div"),this.palette.className="skill-palette",this.palette.setAttribute("part","skill-palette"),this.palette.setAttribute("role","listbox"),this.palette.hidden=!0}setSkills(t){this.#t=t,this.#d()}enableChips(t){this.#n=t,this.#d()}enableSlash(t){this.#o=t}isOpen(){return!this.palette.hidden}onInput(t){this.#o&&t.startsWith("/")?this.#a(t.slice(1)):this.close()}onKeydown(t){return this.isOpen()?t.key==="ArrowDown"?(this.#l(1),!0):t.key==="ArrowUp"?(this.#l(-1),!0):t.key==="Escape"?(this.close(),!0):t.key==="Enter"?(this.#r.slice(this.#i,this.#i+1).forEach(n=>{this.#u(n)}),!0):!1:!1}close(){this.palette.hidden=!0,this.palette.replaceChildren()}#a(t){let n=t.trim().toLowerCase(),r=this.#t.filter(o=>o.name.toLowerCase().includes(n)||o.title.toLowerCase().includes(n));if(r.length===0){this.close();return}this.#r=r,this.#i=0,this.#c(),this.palette.hidden=!1}#l(t){let n=this.#r.length;this.#i=(this.#i+t+n)%n,this.#c()}#u(t){this.close(),this.#e(t)}#d(){this.chips.replaceChildren();let t=this.#n?this.#t.filter(n=>n.chip===!0):[];this.chips.hidden=t.length===0;for(let n of t){let r=document.createElement("button");r.type="button",r.className="skill-chip",r.setAttribute("part","skill-chip"),r.textContent=n.title,r.title=`/${n.name}`,r.addEventListener("click",()=>this.#u(n)),this.chips.appendChild(r)}}#c(){this.palette.replaceChildren(),this.#r.forEach((t,n)=>{let r=document.createElement("button");r.type="button",r.className="skill-item",r.setAttribute("part","skill-item"),r.setAttribute("role","option"),r.setAttribute("aria-selected",n===this.#i?"true":"false");let o=document.createElement("span");o.className="skill-item-title",o.setAttribute("part","skill-item-title");let i=document.createElement("code");if(i.className="skill-item-token",i.setAttribute("part","skill-item-token"),i.textContent=`/${t.name}`,o.append(i,document.createTextNode(` ${t.title}`)),r.appendChild(o),t.description!==void 0){let a=document.createElement("span");a.className="skill-item-desc",a.setAttribute("part","skill-item-desc"),a.textContent=t.description,r.appendChild(a)}r.addEventListener("click",()=>this.#u(t)),this.palette.appendChild(r)})}};var X_=500;function Hr(e,t=[],n){for(let r of sT(t)){if(!e.contains(r.startContainer)||!e.contains(r.endContainer))continue;let o=document.createRange();o.setStart(r.startContainer,r.startOffset),o.setEnd(r.endContainer,r.endOffset);let i=eT(o).trim();if(i!=="")return{text:i,rect:aT(o,n)}}return null}function zu(e){let t=K_(e);return t.length===0?"":`${Q_(t.join(`
`)).split(`
`).map(o=>`> ${o}`.trimEnd()).join(`
`)}

`}function K_(e){let t=e.split(/\r\n?|\n/).map(i=>i.trimEnd()),n=t.filter(i=>i!=="").map(J_),r=n.length===0?0:Math.min(...n),o=[];for(let i of t){let a=i.slice(r);a===""&&(o.length===0||o[o.length-1]==="")||o.push(a)}for(;o[o.length-1]==="";)o.pop();return o}function J_(e){return e.length-e.trimStart().length}function Q_(e){return e.length>500?`${e.slice(0,500).trimEnd()}...`:e}function eT(e){let t="";for(let n of oT(e)){let r=n.parentElement;if(!iT(r))continue;let o=n===e.startContainer?e.startOffset:0,i=n===e.endContainer?e.endOffset:n.data.length;t+=tT(n.data.slice(o,i),r)}return t}function tT(e,t){return nT.has(rT(t))?e:e.replace(/[^\S\n]*\n[^\S\n]*/g,`
`).replace(/[^\S\n]+/g," ")}var nT=new Set(["pre","pre-wrap","break-spaces"]);function rT(e){return window.getComputedStyle(e).whiteSpace}function oT(e){let t=e.commonAncestorContainer;if(t.nodeType===Node.TEXT_NODE)return[t];let n=[],r=document.createTreeWalker(t,NodeFilter.SHOW_TEXT);for(let o=r.nextNode();o!==null;o=r.nextNode())e.intersectsNode(o)&&n.push(o);return n}function iT(e){return typeof e.checkVisibility!="function"?!0:e.checkVisibility({contentVisibilityAuto:!0,opacityProperty:!0,visibilityProperty:!0})}function aT(e,t){let n=[...e.getClientRects()];if(n.length===0)return e.getBoundingClientRect();if(t===void 0)return n[0];let r=n[0],o=sb(r,t);for(let i of n.slice(1)){let a=sb(i,t);a<o&&(o=a,r=i)}return r}function sb(e,t){let n=Math.max(e.left-t.x,0,t.x-e.right),r=Math.max(e.top-t.y,0,t.y-e.bottom);return Math.hypot(n,r)}function sT(e){let t=window.getSelection();if(t===null)return[];let n=[...lT(t,e)];return t.rangeCount>0&&n.push(t.getRangeAt(0)),n}function lT(e,t){let n=e.getComposedRanges;if(n===void 0)return[];try{return n.call(e,{shadowRoots:t})}catch{return n.call(e,...t)}}var Lu=6,cT=`
.ag-ui-quote-offer {
  position: fixed;
  z-index: 2147483000;
  transform: translate(-50%, -100%);
  margin: 0;
  padding: 0.25em 0.7em;
  border: 1px solid rgb(0 0 0 / 0.15);
  border-radius: 999px;
  background: Canvas;
  color: CanvasText;
  font: inherit;
  font-size: 0.8rem;
  line-height: 1.6;
  white-space: nowrap;
  cursor: pointer;
  box-shadow: 0 2px 10px rgb(0 0 0 / 0.18);
}

.ag-ui-quote-offer[data-below="true"] {
  transform: translate(-50%, 0);
}
`;function Du(e){let{within:t,exclude:n,onQuote:r}=e,o=new CSSStyleSheet;o.replaceSync(cT),document.adoptedStyleSheets=[...document.adoptedStyleSheets,o];let i=document.createElement("button");i.type="button",i.className="ag-ui-quote-offer",i.textContent=e.label,i.hidden=!0,document.body.append(i);let a="",s=()=>{i.hidden=!0,a=""},c=u=>{if(u.composedPath().includes(n)){s();return}if(uT()){s();return}let m=u instanceof MouseEvent?{x:u.clientX,y:u.clientY}:void 0,f=Hr(t,[],m);if(f===null){s();return}a=f.text,dT(i,f.rect)},l=u=>{i.contains(u.target)||s()};return t.addEventListener("mouseup",c),t.addEventListener("keyup",c),t.addEventListener("mousedown",l),document.addEventListener("scroll",s,!0),window.addEventListener("resize",s),i.addEventListener("mousedown",u=>{u.preventDefault()}),i.addEventListener("click",()=>{let u=a;window.getSelection()?.removeAllRanges(),s(),r(u)}),{element:i,detach(){t.removeEventListener("mouseup",c),t.removeEventListener("keyup",c),t.removeEventListener("mousedown",l),document.removeEventListener("scroll",s,!0),window.removeEventListener("resize",s),i.remove(),document.adoptedStyleSheets=document.adoptedStyleSheets.filter(u=>u!==o)}}}function uT(){let e=document.activeElement;return e===null?!1:e.tagName==="INPUT"||e.tagName==="TEXTAREA"||e.isContentEditable===!0}function dT(e,t){e.hidden=!1;let n=t.top<Lu+e.offsetHeight;e.dataset.below=String(n),e.style.top=`${n?t.bottom+Lu:t.top-Lu}px`;let r=e.offsetWidth/2,o=t.left+t.width/2,i=document.documentElement.clientWidth;e.style.left=`${Math.min(Math.max(o,r),i-r)}px`}var $u=6,es=class{button=document.createElement("button");#e;#t="";#n=null;constructor(t){this.#e=t}insert(t){let n=zu(t);if(n==="")return;let r=this.#e.input,o=r.value.replace(/\s+$/,"");r.value=o===""?n:`${o}

${n}`,this.#e.autoGrow(),r.focus();let i=r.value.length;r.setSelectionRange(i,i)}offerInPage(t){this.#n?.detach();let n=Du({within:t,label:this.#e.strings().quoteSelection,exclude:this.#e.element,onQuote:r=>this.#e.quote(r)});return this.#n=n,()=>{n.detach(),this.#n===n&&(this.#n=null)}}detachPageOffer(){this.#n?.detach(),this.#n=null}mount(t){let n=this.button;n.className="quote-selection",n.type="button",n.setAttribute("part","quote-selection"),n.textContent=this.#e.strings().quoteSelection,n.hidden=!0,n.addEventListener("mousedown",o=>{o.preventDefault()},{signal:t}),n.addEventListener("click",()=>{this.#e.quote(this.#t),window.getSelection()?.removeAllRanges(),this.#a()},{signal:t});let r=this.#e.messages;r.addEventListener("mouseup",o=>this.#r(o),{signal:t}),r.addEventListener("keyup",()=>this.#r(),{signal:t}),r.addEventListener("mousedown",()=>this.#a(),{signal:t})}#o(){return this.#e.element.getAttribute("data-quote-selection")!=="false"}#r(t){if(!this.#o())return;let n=t===void 0?void 0:{x:t.clientX,y:t.clientY},r=Hr(this.#e.messages,[this.#e.root],n);if(r===null){this.#a();return}this.#t=r.text,this.#i(r.rect)}#i(t){let n=this.button;n.hidden=!1;let r=this.#e.messagesWrap.getBoundingClientRect(),o=t.top-r.top,i=o<$u+n.offsetHeight;n.dataset.below=String(i),n.style.top=`${i?t.bottom-r.top+$u:o-$u}px`;let a=n.offsetWidth/2,s=t.left+t.width/2-r.left;n.style.left=`${Math.min(Math.max(s,a),r.width-a)}px`}#a(){this.button.hidden=!0,this.#t=""}};function Fr(e,t=Date.now(),n=pe){if(!Number.isFinite(e))return n.justNow;let r=Math.round((t-e)/1e3);if(r<60)return n.justNow;let o=Math.round(r/60);if(o<60)return se(n.minutesAgo,{n:o});let i=Math.round(o/60);if(i<24)return se(n.hoursAgo,{n:i});let a=Math.round(i/24);return a<7?se(n.daysAgo,{n:a}):se(n.weeksAgo,{n:Math.round(a/7)})}function lb(e){return e.preview!==void 0&&e.preview!==null&&e.preview!==""?e.preview:null}function cb(e){return e.replace(/\s+/g," ").trim()}var Gr=class{element;#e;#t;#n;#o=null;#r=null;#i;#a=[];constructor(t,n=pe){this.#e=t,this.#i=n,this.element=document.createElement("div"),this.element.className="checkpoints",this.element.setAttribute("part","checkpoints"),this.element.setAttribute("role","dialog"),this.element.setAttribute("aria-label",n.checkpoints),this.element.tabIndex=-1,this.element.hidden=!0;let r=document.createElement("div");r.className="checkpoints-header",r.setAttribute("part","checkpoints-header"),this.#n=document.createElement("span"),this.#n.className="checkpoints-title",this.#n.setAttribute("part","checkpoints-title"),this.#n.textContent=n.checkpoints,r.append(this.#n),this.#t=document.createElement("div"),this.#t.className="checkpoints-list",this.#t.setAttribute("part","checkpoints-list"),this.element.append(r,this.#t),this.element.addEventListener("keydown",o=>this.#c(o))}setRuns(t){this.#a=t,this.#h()}setRelativeTimeFormatter(t){this.#r=t}#l(t){return this.#r!==null?this.#r(t):Fr(t,Date.now(),this.#i)}setStrings(t){this.#i=t,this.element.setAttribute("aria-label",t.checkpoints),this.#n.textContent=t.checkpoints,this.#h()}open(){this.open_||(this.#o=this.#u(),this.element.hidden=!1,(this.#d()[0]??this.element).focus())}close(){this.open_&&(this.element.hidden=!0,this.#o?.focus(),this.#o=null)}#u(){return this.element.getRootNode().activeElement}#d(){return Array.from(this.element.querySelectorAll("button, [tabindex]")).filter(t=>!t.hidden)}#c(t){if(t.key==="Escape"){t.stopPropagation(),this.close();return}if(t.key!=="Tab")return;let n=this.#d(),r=n[0],o=n[n.length-1],i=this.#u();t.shiftKey&&i===r?(t.preventDefault(),o?.focus()):!t.shiftKey&&i===o&&(t.preventDefault(),r?.focus())}get open_(){return!this.element.hidden}#h(){if(this.#t.replaceChildren(),this.#a.length===0){let n=document.createElement("div");n.className="checkpoints-empty",n.setAttribute("part","checkpoints-empty"),n.textContent=this.#i.noCheckpoints,this.#t.append(n);return}let t=this.#s();for(let n of this.#a)this.#t.append(this.#f(n,t))}#s(){let t=new Set,n=new Set;for(let r of this.#a){let o=lb(r);if(o===null)continue;let i=cb(o);t.has(i)&&n.add(i),t.add(i)}return n}#f(t,n){let r=document.createElement("div");r.className="checkpoint-row",r.setAttribute("part","checkpoint-row");let o=lb(t),i=t.started_at===null?null:this.#l(Date.parse(t.started_at)),a=document.createElement("span");if(a.className="checkpoint-label",a.setAttribute("part","checkpoint-label"),a.textContent=o??i??t.run_id,r.append(a),o!==null&&i!==null){let c=document.createElement("span");c.className="checkpoint-time",c.setAttribute("part","checkpoint-time"),c.textContent=i,r.append(c)}if((o===null?i!==null:n.has(cb(o)))&&t.run_id!==""){let c=document.createElement("span");c.className="checkpoint-id",c.setAttribute("part","checkpoint-id"),c.textContent=t.run_id.slice(0,8),c.title=t.run_id,r.append(c)}if(t.parent_run_id!==null){let c=document.createElement("span");c.className="checkpoint-branch",c.setAttribute("part","checkpoint-branch"),c.textContent=this.#i.forkedRun,c.title=t.parent_run_id,r.append(c)}return r.append(this.#m(t.run_id,"resume",this.#i.resumeRun),this.#m(t.run_id,"fork",this.#i.forkRun)),r}#m(t,n,r){let o=document.createElement("button");return o.type="button",o.className=`checkpoint-action checkpoint-${n}`,o.setAttribute("part",`checkpoint-action checkpoint-${n}`),o.textContent=r,o.addEventListener("click",()=>{this.close(),this.#e(t,n)}),o}};function Uu(e){let t=Fa(e,"attachments");return Array.isArray(t)?t.filter(pT):[]}function pT(e){if(typeof e!="object"||e===null)return!1;let t=e;return typeof t.id=="string"&&typeof t.name=="string"&&typeof t.mime=="string"&&typeof t.size=="number"&&(t.url===void 0||typeof t.url=="string")}var Zr=class{#e;#t;#n;constructor(t,n=()=>({}),r=()=>{}){this.#e=t.endsWith("/")?t:`${t}/`,this.#t=n,this.#n=r}async list(){try{let t=await fetch(this.#e,nt({method:"GET",headers:{Accept:"application/json",...this.#t()}},this.#n()));return t.ok?(await t.json()).runs??[]:[]}catch{return[]}}async continuable(){return(await this.list()).filter(t=>t.continuable)}resumeUrl(t){return this.#o("resume",t)}forkUrl(t){return this.#o("fork",t)}#o(t,n){return`${this.#e.slice(0,-5)}${t}/${encodeURIComponent(n)}/`}};function Br(e){return e===Ge.FAILED?ne.ERROR:e===Ge.DENIED?ne.DECLINED:e===Ge.INTERRUPTED?ne.INTERRUPTED:ne.DONE}var ts=class{#e;#t="";#n=[];#o=0;#r=0;#i=null;#a=null;constructor(t){this.#e=t}get threadId(){return this.#t}get restored(){return this.#n}get continuation(){return this.#a}adoptActiveThread(){this.#t=this.#e.conversationStore().threadId()}startThread(){this.#t=$a(this.#e.conversationStore())}stopContinuation(){this.#a?.cancel(),this.#a=null}forgetRestored(){this.#n=[],this.#o+=1}reapUnsent(){this.#e.conversationStore().isUnsent?.(this.#t)===!0&&this.#e.conversationStore().clear(this.#t)}runs(){let t=this.#e.element.getAttribute("data-runs-url");return t===null||t===""?null:(this.#i===null&&(this.#i=new Zr(t,()=>this.#e.headersFor(t),()=>this.#e.requestCredentials())),this.#i)}openThreads(){this.#e.checkpoints.close(),this.refreshDrawer(),this.#e.drawer.open()}openCheckpoints(){this.#e.drawer.close(),this.#l(),this.#e.checkpoints.open()}async switchThread(t){t!==this.#t&&(this.#e.cancelRun(),this.#e.resetState(),this.#e.conversationStore().setActiveThread(t),this.#t=t,this.#e.setRunning(!1),await this.rehydrate())}renameThread(t,n){this.#e.conversationStore().renameThread(t,n),this.refreshDrawer()}deleteThread(t){let n=t===this.#t;n&&this.#e.cancelRun(),this.#e.conversationStore().clear(t),n&&(this.#e.resetState(),this.adoptActiveThread(),this.#e.setRunning(!1)),this.refreshDrawer()}async refreshDrawer(){this.#e.drawer.setRelativeTimeFormatter(this.#e.formatRelativeTime()),this.#e.drawer.setThreads(await this.#e.conversationStore().listThreads(),this.#t)}async#l(){let t=this.runs();this.#e.checkpoints.setRelativeTimeFormatter(this.#e.formatRelativeTime()),this.#e.checkpoints.setRuns(t===null?[]:await t.continuable())}async continueRun(t,n){let r=this.runs();if(r===null)return;if(this.#e.running()||this.#a!==null){this.#u(this.#e.strings().continueWhileRunning);return}let o=this.#e.input.value.trim();if(o===""){this.#u(this.#e.strings().continueNeedsTurn);return}this.#e.input.value="",this.#e.autoGrow();let i=this.#o,a=this.#e.buildClient({endpoint:n==="resume"?r.resumeUrl(t):r.forkUrl(t),initialMessages:[],follows:this.#e.client()?.messages??this.#n,onSaved:s=>{i===this.#o&&(this.#n=s,this.#e.releaseClient())}});this.#a=a;try{await a.send(o)}finally{this.#a===a&&(this.#a=null,this.#e.continuationEnded())}}#u(t){this.#e.hint.textContent=t,this.#e.hint.hidden=!1,this.#e.input.focus()}async rehydrate(){this.#r+=1;let t=this.#r;this.#e.element.setAttribute("data-restoring","");let n;try{n=await this.#e.conversationStore().loadMessages(this.#t)}finally{t===this.#r&&this.#e.element.removeAttribute("data-restoring")}if(t!==this.#r)return;let r=this.#e.conversationStore().loadCheckpoint(this.#t);if(n!==null){let o=this.#e.strings().callNotFinished,i=Ha(n,a=>({id:we(),role:"tool",content:o,toolCallId:a,metadata:{outcome:Ge.INTERRUPTED}}),new Set(r===null?[]:[r.toolCallId]));this.#n=i;for(let a of i)this.replay(a)}if(r!==null){await this.#h(r);return}this.#d(n)}#d(t){let n=t?.at(-1);n===void 0||n.role!==Fe.USER||this.#e.transcript.appendNotice("\u26A0",this.#e.strings().runInterrupted,"interrupted")}replay(t){let n=typeof t.content=="string"?t.content:"";if(t.role===Fe.USER){let r=Uu(t);if(n!==""||r.length>0){let o=this.#e.appendMessage(Fe.USER,n);r.length>0&&o.appendChild(Wa(r))}return}if(t.role===Fe.ASSISTANT){if(n!==""){let r=this.#e.appendMessage(Fe.ASSISTANT,n);r.classList.add("message--restored"),this.#e.actions.attach(r)}for(let r of hT(t.toolCalls)){let o={id:r.id,name:r.function.name,args:this.#c(r.function.arguments)};if(this.#e.transcript.noticeIfSkillLoad(o))continue;this.#e.transcript.setCardElement(o.id,this.#e.transcript.cardFor(o).element);let i=this.#e.tools.resolve(o.name)?.render;i!==void 0&&this.#e.transcript.renderToolOutput(i,o)}return}if(t.role==="activity"){let r=t;typeof r.activityType=="string"&&this.#e.activities.draw(t.id,r.activityType,r.content);return}if(t.role==="tool"){let r=this.#e.transcript.card(t.toolCallId);r!==void 0&&r.settle(Br(Fa(t,"outcome")),Rn(t.content))}}#c(t){if(typeof t!="string")return{};try{let n=JSON.parse(t);if(typeof n=="object"&&n!==null)return n}catch{}return{}}async#h(t){this.#e.conversationStore().saveCheckpoint(this.#t,null);let n=this.#e.ensureClient();n.addToolResult(t.toolCallId,JSON.stringify(this.#e.navigationResult().call(this.#e.element,t))),await n.resume()}};function hT(e){return Array.isArray(e)?e.filter(fT):[]}function fT(e){if(typeof e!="object"||e===null)return!1;let t=e;return typeof t.id=="string"&&typeof t.function?.name=="string"}var mT=8,ns=class{element;#e;#t;#n;#o;#r;#i=null;#a;#l=[];#u="";#d;#c;#h="";#s=null;constructor(t,n=pe){this.#e=t,this.#a=n,this.element=document.createElement("div"),this.element.className="drawer",this.element.setAttribute("part","drawer"),this.element.hidden=!0;let r=document.createElement("div");r.className="drawer-backdrop",r.setAttribute("part","drawer-backdrop"),r.addEventListener("click",()=>this.close()),this.#t=document.createElement("div"),this.#t.className="drawer-panel",this.#t.setAttribute("part","drawer-panel"),this.#t.setAttribute("role","dialog"),this.#t.setAttribute("aria-modal","true"),this.#t.setAttribute("aria-label",n.chatHistory),this.#t.addEventListener("keydown",i=>this.#b(i));let o=document.createElement("div");o.className="drawer-header",o.setAttribute("part","drawer-header"),this.#n=document.createElement("span"),this.#n.className="drawer-title",this.#n.setAttribute("part","drawer-title"),this.#n.textContent=n.chats,this.#o=document.createElement("button"),this.#o.type="button",this.#o.className="drawer-new",this.#o.setAttribute("part","drawer-new"),this.#o.textContent=n.newChat,this.#o.addEventListener("click",()=>{this.close(),this.#e.onNew()}),this.#d=document.createElement("button"),this.#d.type="button",this.#d.className="drawer-close",this.#d.setAttribute("part","drawer-close"),this.#d.title=n.closeHistory,this.#d.setAttribute("aria-label",n.closeHistory),this.#d.append(document.createTextNode("\xD7")),this.#d.addEventListener("click",()=>this.close()),o.append(this.#n,this.#o,this.#d),this.#c=document.createElement("input"),this.#c.type="search",this.#c.className="drawer-filter",this.#c.setAttribute("part","drawer-filter"),this.#c.placeholder=n.searchConversations,this.#c.setAttribute("aria-label",n.searchConversations),this.#c.addEventListener("input",()=>{this.#h=this.#c.value.trim().toLowerCase(),this.#g()}),this.#r=document.createElement("div"),this.#r.className="drawer-list",this.#r.setAttribute("part","drawer-list"),this.#t.append(o,this.#c,this.#r),this.element.append(r,this.#t)}setRelativeTimeFormatter(t){this.#i=t}#f(t){return this.#i!==null?this.#i(t):Fr(t,void 0,this.#a)}setStrings(t){this.#a=t,this.#t.setAttribute("aria-label",t.chatHistory),this.#n.textContent=t.chats,this.#o.textContent=t.newChat,this.#d.title=t.closeHistory,this.#d.setAttribute("aria-label",t.closeHistory),this.#c.placeholder=t.searchConversations,this.#c.setAttribute("aria-label",t.searchConversations),this.#g()}isOpen(){return!this.element.hidden}open(){this.isOpen()||(this.#s=this.#m(),this.element.hidden=!1,this.#o.focus())}close(){this.isOpen()&&(this.element.hidden=!0,this.#s?.focus(),this.#s=null)}toggle(){this.isOpen()?this.close():this.open()}#m(){return this.element.getRootNode().activeElement}#b(t){if(t.key==="Escape"){t.preventDefault(),this.close();return}if(t.key!=="Tab")return;let n=Array.from(this.#t.querySelectorAll("button, input, [tabindex]")).filter(a=>!a.hidden),r=n[0],o=n[n.length-1],i=this.#m();t.shiftKey&&i===r?(t.preventDefault(),o?.focus()):!t.shiftKey&&i===o&&(t.preventDefault(),r?.focus())}setThreads(t,n){this.#l=t,this.#u=n,this.#g()}#g(){this.#r.replaceChildren();let t=this.#l.length<mT;this.#c.hidden=t,t&&this.#h!==""&&(this.#c.value="",this.#h="");let n=this.#y();if(n.length===0){let r=document.createElement("div");r.className="drawer-empty",r.setAttribute("part","drawer-empty"),r.textContent=this.#l.length===0?this.#a.noConversations:this.#a.noMatches,this.#r.appendChild(r);return}for(let r of n)this.#r.appendChild(this.#p(r))}#y(){return this.#h===""?this.#l:this.#l.filter(t=>t.title.toLowerCase().includes(this.#h)||t.preview.toLowerCase().includes(this.#h))}#p(t){let n=document.createElement("div");n.className="drawer-row",n.setAttribute("part","drawer-row"),t.threadId===this.#u&&n.classList.add("drawer-row--active");let r=document.createElement("button");r.type="button",r.className="drawer-row-select",r.setAttribute("part","drawer-row-select");let o=document.createElement("span");o.className="drawer-row-title",o.setAttribute("part","drawer-row-title"),o.textContent=t.title;let i=document.createElement("span");i.className="drawer-row-time",i.setAttribute("part","drawer-row-time"),i.textContent=this.#f(t.updatedAt);let a=document.createElement("span");a.className="drawer-row-preview",a.setAttribute("part","drawer-row-preview"),a.textContent=t.preview,r.append(o,i,a),r.addEventListener("click",()=>{this.close(),this.#e.onSelect(t.threadId)});let s=document.createElement("button");s.type="button",s.className="drawer-row-rename",s.setAttribute("part","drawer-row-rename"),s.title=this.#a.rename,s.setAttribute("aria-label",this.#a.renameConversation),s.textContent="\u270E",s.addEventListener("click",()=>this.#S(n,t));let c=document.createElement("button");c.type="button",c.className="drawer-row-delete",c.setAttribute("part","drawer-row-delete"),c.title=this.#a.delete,c.setAttribute("aria-label",this.#a.deleteConversation),c.textContent="\u{1F5D1}",c.addEventListener("click",()=>this.#w(n,t));let l=document.createElement("div");return l.className="drawer-row-actions",l.setAttribute("part","drawer-row-actions"),l.append(s,c),n.append(r,l),n}#S(t,n){let r=document.createElement("input");r.type="text",r.className="drawer-rename-input",r.setAttribute("part","drawer-rename-input"),r.value=n.title;let o=!1,i=()=>{if(o)return;o=!0;let s=r.value.trim();s===""||s===n.title?this.#g():this.#e.onRename(n.threadId,s)},a=()=>{o||(o=!0,this.#g())};r.addEventListener("keydown",s=>{s.key==="Enter"?(s.preventDefault(),i()):s.key==="Escape"&&(s.preventDefault(),s.stopPropagation(),a())}),r.addEventListener("blur",()=>i()),t.replaceChildren(r),r.focus(),r.select()}#w(t,n){let r=document.createElement("div");r.className="drawer-confirm",r.setAttribute("part","drawer-confirm");let o=document.createElement("span");o.className="drawer-confirm-label",o.setAttribute("part","drawer-confirm-label"),o.textContent=this.#a.deletePrompt;let i=document.createElement("button");i.type="button",i.className="drawer-confirm-yes",i.setAttribute("part","drawer-confirm-yes"),i.textContent=this.#a.delete,i.addEventListener("click",()=>this.#e.onDelete(n.threadId));let a=document.createElement("button");a.type="button",a.className="drawer-confirm-no",a.setAttribute("part","drawer-confirm-no"),a.textContent=this.#a.cancel,a.addEventListener("click",()=>this.#g()),r.append(o,i,a),t.replaceChildren(r)}};var rs=class{#e=null;open(){return this.#e=new AbortController,this.#e.signal}close(){this.#e=null}abort(){this.#e?.abort()}};function Vr(e){return e!=="page"}var gT=new Set([null,"","floating","bottom-left"]);function os(e){return gT.has(e)}function zt(e,t,n=ot){let r=Math.min(n,Math.max(0,(t.width-e.width)/2)),o=Math.min(n,Math.max(0,(t.height-e.height)/2));return{left:Math.max(t.left+r,Math.min(e.left,t.left+t.width-e.width-r)),top:Math.max(t.top+o,Math.min(e.top,t.top+t.height-e.height-o))}}function jr(e,t,n=Gt){let r=e.right-e.left,o=e.bottom-e.top,i=Math.max(t.left+n,Math.min(e.left,t.left+t.width-n-r)),a=Math.max(t.top+n,Math.min(e.top,t.top+t.height-n-o));return{left:i,top:a,right:i+r,bottom:a+o}}var vT=4,bT=16,yT=64;function ub(e,t){let n=!1,{signal:r}=t;e.addEventListener("click",a=>{!n||a.detail===0||(n=!1,a.stopPropagation(),a.preventDefault())},{capture:!0,signal:r}),e.addEventListener("pointerdown",a=>{if(n=!1,!t.enabled())return;let s=t.rect(),c=a.clientX,l=a.clientY,u=!1,m=h=>{let p=h.clientX-c,E=h.clientY-l;if(!u&&Math.hypot(p,E)<vT)return;u=!0,e.setAttribute("data-dragging","true");let b=zt({...s,left:s.left+p,top:s.top+E},t.viewport());t.apply(b.left,b.top)},f=h=>{if(window.removeEventListener("pointermove",m),window.removeEventListener("pointerup",f),window.removeEventListener("pointercancel",f),!u)return;e.removeAttribute("data-dragging"),n=!0;let p=zt({...s,left:s.left+(h.clientX-c),top:s.top+(h.clientY-l)},t.viewport());t.commit(p.left,p.top)};window.addEventListener("pointermove",m),window.addEventListener("pointerup",f),window.addEventListener("pointercancel",f)},{signal:r});let o=null,i=()=>{if(o===null)return;let{left:a,top:s}=o;o=null,t.commit(a,s)};e.addEventListener("keydown",a=>{if(!t.enabled())return;let s=a.shiftKey?yT:bT,c=t.rect(),l=null;if(a.key==="ArrowLeft"?l={left:c.left-s,top:c.top}:a.key==="ArrowRight"?l={left:c.left+s,top:c.top}:a.key==="ArrowUp"?l={left:c.left,top:c.top-s}:a.key==="ArrowDown"&&(l={left:c.left,top:c.top+s}),l===null)return;a.preventDefault();let u=zt({...c,...l},t.viewport());t.apply(u.left,u.top),o=u},{signal:r}),e.addEventListener("keyup",i,{signal:r}),e.addEventListener("blur",i,{signal:r})}function Wr(e,t,n,r){return{hostInset:db({top:n.y==="top"?e.top:null,right:n.x==="right"?r.width-e.right:null,bottom:n.y==="bottom"?r.height-e.bottom:null,left:n.x==="left"?e.left:null}),launcherInset:db({top:n.y==="top"?t.top-e.top:null,right:n.x==="right"?e.right-(t.left+t.width):null,bottom:n.y==="bottom"?e.bottom-(t.top+t.height):null,left:n.x==="left"?t.left-e.left:null})}}function db(e){let t=n=>n===null?"auto":`${Math.round(n)}px`;return`${t(e.top)} ${t(e.right)} ${t(e.bottom)} ${t(e.left)}`}function Hu(e,t,n,r,o=ot){let i=n.left+n.width-e.left,a=e.left+e.width-n.left,s=n.top+n.height-e.top,c=e.top+e.height-n.top,l={x:i>=a?"left":"right",y:s>=c?"top":"bottom"},u=l.x==="left"?e.left:e.left+e.width-t.width,m=l.y==="top"?e.top:e.top+e.height-t.height,f=jr({left:u,top:m,right:u+t.width,bottom:m+t.height},n,o);return{corner:l,...Wr(f,e,l,r)}}var wT="button, a[href], input, select, textarea, [contenteditable]";function pb(e,t){e.addEventListener("pointerdown",n=>{if(n.button!==0||!t.enabled()||ET(n,e))return;let r=t.rect(),o=n.clientX,i=n.clientY,a=!1,s=(u,m)=>{let f=u-o,h=m-i;return{left:r.left+f,top:r.top+h,right:r.right+f,bottom:r.bottom+h}},c=u=>{!a&&Math.hypot(u.clientX-o,u.clientY-i)<4||(a=!0,e.setAttribute("data-dragging","true"),t.apply(s(u.clientX,u.clientY),r))},l=u=>{window.removeEventListener("pointermove",c),window.removeEventListener("pointerup",l),window.removeEventListener("pointercancel",l),a&&(e.removeAttribute("data-dragging"),t.commit(s(u.clientX,u.clientY),r))};n.preventDefault(),window.addEventListener("pointermove",c),window.addEventListener("pointerup",l),window.addEventListener("pointercancel",l)})}function ET(e,t){let n=e.composedPath();return n.slice(0,n.indexOf(t)).some(r=>r instanceof Element&&r.matches(wT))}function fb(e,t){let n=document.createElement("div");n.className=`resize-handle resize-handle--${is(e)}`,n.setAttribute("part",`resize-handle resize-handle-${is(e)}`),n.setAttribute("role","separator"),e.x===void 0?n.setAttribute("aria-orientation","horizontal"):e.y===void 0&&n.setAttribute("aria-orientation","vertical"),n.setAttribute("aria-label",t.label),n.tabIndex=0,n.addEventListener("pointerdown",i=>{let a=t.axis();if(a==="none"||!hb(e,a))return;let s=t.rect(),c=u=>{t.apply(Fu(e,a,s,u.clientX,u.clientY))},l=u=>{window.removeEventListener("pointermove",c),window.removeEventListener("pointerup",l),n.removeAttribute("data-dragging"),t.commit(Fu(e,a,s,u.clientX,u.clientY))};n.setAttribute("data-dragging","true"),window.addEventListener("pointermove",c),window.addEventListener("pointerup",l),i.preventDefault()});let r=null,o=()=>{if(r===null)return;let i=r;r=null,t.commit(i)};return n.addEventListener("keydown",i=>{let a=t.axis();if(a==="none"||!hb(e,a))return;let s=i.shiftKey?64:16,c=t.rect(),l=xT[i.key];if(l===void 0||l.x!==0&&e.x===void 0||l.y!==0&&e.y===void 0)return;i.preventDefault();let u=(e.x==="left"?c.left:c.right)+l.x*s,m=(e.y==="top"?c.top:c.bottom)+l.y*s,f=Fu(e,a,c,u,m);t.apply(f),r=f}),n.addEventListener("keyup",o),n.addEventListener("blur",o),n}var xT={ArrowLeft:{x:-1,y:0},ArrowRight:{x:1,y:0},ArrowUp:{x:0,y:-1},ArrowDown:{x:0,y:1}};function is(e){return[e.y,e.x].filter(t=>t!==void 0).join("-")}function hb(e,t){return t==="both"||e.x!==void 0}function Fu(e,t,n,r,o){let i=e.x==="left"?Math.min(r,n.right-280):n.left,a=e.x==="right"?Math.max(r,n.left+280):n.right,s=t==="both",c=s&&e.y==="top"?Math.min(o,n.bottom-240):n.top,l=s&&e.y==="bottom"?Math.max(o,n.top+240):n.bottom;return{left:i,top:c,right:a,bottom:l}}var mb="ag-ui-chat:size",Gu="ag-ui-chat:launcher";function ST(e){if(typeof e!="object"||e===null)return null;let{left:t,top:n}=e;return typeof t=="number"&&typeof n=="number"?{left:t,top:n}:null}function gb(e,t){return e.width>=t.width-1&&e.height>=t.height-1}function vb(e,t,n){let r=o=>`${Math.round(o)}px`;return[e.y==="top"?r(t.top):"auto",e.x==="right"?r(n.width-t.right):"auto",e.y==="bottom"?r(n.height-t.bottom):"auto",e.x==="left"?r(t.left):"auto"].join(" ")}var _T=[{y:"top"},{y:"bottom"},{x:"left"},{x:"right"},{x:"left",y:"top"},{x:"right",y:"top"},{x:"left",y:"bottom"},{x:"right",y:"bottom"}],as=class{#e;constructor(t){this.#e=t}enablePanelDrag(t){pb(t,{enabled:()=>!this.#e.collapsed()&&this.#f(),rect:()=>this.#e.element.getBoundingClientRect(),apply:(n,r)=>this.#w(n,r),commit:(n,r)=>this.#T(n,r)})}enableLauncherDrag(t){ub(this.#e.launcher,{signal:t,enabled:()=>this.#e.collapsed()&&this.#f(),rect:()=>this.#g(),viewport:()=>this.#m(),apply:(n,r)=>this.#p(n,r),commit:(n,r)=>this.#S(n,r)})}mountResizeGrips(t){for(let n of _T){let r=fb(n,{axis:()=>this.#u(),rect:()=>this.#e.element.getBoundingClientRect(),apply:o=>this.#N(n,o),commit:o=>this.#F(n,o),label:this.#e.strings().resizePanel});r.tabIndex=-1,r.setAttribute("aria-hidden","true"),this.#i.set(is(n),r),t.appendChild(r)}this.#O()}restoreSize(){this.#s(this.#z())}probe=document.createElement("div");#t=null;#n=null;#o=null;#r={x:"right",y:"bottom"};#i=new Map;#a(t){let n=this.#m(),r=n.left+ot,o=n.top+ot,i=n.left+n.width-ot,a=n.top+n.height-ot;return{left:Math.min(Math.max(t.left,r),t.right),top:Math.min(Math.max(t.top,o),t.bottom),right:Math.max(Math.min(t.right,i),t.left),bottom:Math.max(Math.min(t.bottom,a),t.top)}}dragging(){return this.#e.launcher.hasAttribute("data-dragging")||this.#e.root.querySelector(".header[data-dragging]")!==null}describeSurface(){let t=this.#e.element.getBoundingClientRect(),n=this.#m(),r=gb(t,n);return{placement:this.#e.element.getAttribute("placement"),collapsed:this.#e.collapsed(),collapsible:this.#e.collapsible(),movable:this.#f()&&!r,draggable:this.#f(),fullBleed:r,box:{left:Math.round(t.left),top:Math.round(t.top),width:Math.round(t.width),height:Math.round(t.height)},viewport:{left:Math.round(n.left),top:Math.round(n.top),width:Math.round(n.width),height:Math.round(n.height)}}}moveTo(t,n={}){if(!this.#f())return!1;let r=n.announce===!0?this.#l():null,o=this.#m(),i=this.#e.element.getBoundingClientRect();if(gb(i,o))return!1;let[a,s]=t.split("-"),c=o.left+Gt,l=o.top+Gt,u=s==="left"?c:Math.max(c,o.left+o.width-Gt-i.width),m=a==="top"?l:Math.max(l,o.top+o.height-Gt-i.height),f={left:u,top:m,right:u+i.width,bottom:m+i.height},h=this.#e.launcher.offsetWidth,p=this.#e.launcher.offsetHeight;return this.#M(f,{left:s==="left"?f.left:f.right-h,top:a==="top"?f.top:f.bottom-p,width:h,height:p}),this.#E(),r!==null&&this.#e.announceSurfaceChange(this.#e.strings().chatMoved,r),!0}#l(){let t=this.#e.element.style.getPropertyValue("--ag-ui-inset"),n=this.#e.element.style.getPropertyValue("--ag-ui-launcher-inset"),r=this.#e.element.getAttribute("data-expand-corner"),o=this.#t,i=this.#n,a=this.#o;return()=>{this.#h("--ag-ui-inset",t),this.#h("--ag-ui-launcher-inset",n),r===null?this.#e.element.removeAttribute("data-expand-corner"):this.#e.element.setAttribute("data-expand-corner",r),this.#t=o,this.#n=i,this.#o=a,o===null?this.#e.clearPreference(Gu):this.#E(),this.syncResizeAnchor()}}#u(){switch(this.#e.element.getAttribute("placement")){case"full":case"page":return"none";case"sidebar":case"side":return"width";default:return"both"}}#d(){let t=this.#e.element.getBoundingClientRect(),n=this.#e.element.style.getPropertyValue("--ag-ui-width"),r=this.#e.element.style.getPropertyValue("--ag-ui-height"),o=this.#c(t,-1),i=o.x===null||o.y===null?this.#c(t,1):o;return this.#h("--ag-ui-width",n),this.#h("--ag-ui-height",r),{x:o.x??i.x??"right",y:o.y??i.y??"bottom"}}#c(t,n){this.#s({width:t.width+n,height:t.height+n});let r=this.#e.element.getBoundingClientRect(),o=(i,a)=>Math.abs(i-a)>=.5;return{x:o(r.width,t.width)?o(r.left,t.left)?"right":"left":null,y:o(r.height,t.height)?o(r.top,t.top)?"bottom":"top":null}}syncResizeAnchor(){if(!this.#e.connected())return;let t=this.#o??this.#d();this.#r=t,this.#e.element.setAttribute("data-resize-anchor",`${t.y}-${t.x}`),this.#O()}#h(t,n){if(n===""){this.#e.element.style.removeProperty(t);return}this.#e.element.style.setProperty(t,n)}#s(t){let n=this.#u();n!=="none"&&(t.width!==void 0&&this.#e.element.style.setProperty("--ag-ui-width",`${t.width}px`),t.height!==void 0&&n==="both"&&this.#e.element.style.setProperty("--ag-ui-height",`${t.height}px`))}releaseOwnedAxes(){let t=this.#u();t!=="both"&&this.#e.element.style.removeProperty("--ag-ui-height"),t==="none"&&this.#e.element.style.removeProperty("--ag-ui-width")}#f(){return this.#e.element.getAttribute("data-launcher-drag")!=="false"&&os(this.#e.element.getAttribute("placement"))}#m(){let t=window.visualViewport,n=t?.width??window.innerWidth,r=t?.height??window.innerHeight,o=getComputedStyle(this.probe),i=c=>{let l=Number.parseFloat(o.getPropertyValue(c));return Number.isFinite(l)?l:0},a=i("padding-left"),s=i("padding-top");return{left:a,top:s,width:Math.max(0,n-a-i("padding-right")),height:Math.max(0,r-s-i("padding-bottom"))}}#b(){let t=document.documentElement;return{width:t.clientWidth||window.innerWidth,height:t.clientHeight||window.innerHeight}}publishVisualViewport(){let t=window.visualViewport;if(t==null)return;let n=this.#b().height;if(Math.abs(t.height-n)<1){this.#e.element.style.removeProperty("--ag-ui-visual-viewport-height"),this.#e.element.style.removeProperty("--ag-ui-visual-viewport-inset-bottom"),this.#e.element.style.removeProperty("--ag-ui-visual-viewport-inset-top");return}this.#e.element.style.setProperty("--ag-ui-visual-viewport-height",`${Math.round(t.height)}px`);let r=n-t.height-t.offsetTop;this.#e.element.style.setProperty("--ag-ui-visual-viewport-inset-bottom",`${Math.max(0,Math.round(r))}px`),this.#e.element.style.setProperty("--ag-ui-visual-viewport-inset-top",`${Math.max(0,Math.round(t.offsetTop))}px`)}#g(){let t=this.#e.launcher.offsetWidth,n=this.#e.launcher.offsetHeight,r=this.#t;if(r!==null)return{left:r.left,top:r.top,width:t,height:n};let o=this.#e.launcher.getBoundingClientRect();return{left:o.left+o.width/2-t/2,top:o.top+o.height/2-n/2,width:t,height:n}}#y(t){if(!this.#f())return;this.#t=t,this.#n=null;let n=this.#e.element.getBoundingClientRect(),r=Hu(this.#g(),{width:n.width,height:n.height},this.#m(),this.#b());this.#e.element.style.setProperty("--ag-ui-inset",r.hostInset),this.#e.element.style.setProperty("--ag-ui-launcher-inset",r.launcherInset),this.#o=r.corner,this.#e.element.setAttribute("data-expand-corner",`${r.corner.y}-${r.corner.x}`),this.syncResizeAnchor()}#p(t,n){this.#y({left:t,top:n})}#S(t,n){this.#p(t,n),this.#E()}#w(t,n){if(!this.#f())return{held:t,launcher:null};if(this.#t===null){let c=this.#g();this.#t={left:c.left,top:c.top}}let r=this.#t,o=jr(t,this.#m(),ot),i=this.#o??this.#r;this.#e.element.style.setProperty("--ag-ui-inset",vb(i,o,this.#b())),this.#n={left:o.left,top:o.top};let a={...this.#g(),left:r.left+(o.left-n.left),top:r.top+(o.top-n.top)},s={...a,...zt(a,this.#m())};return this.#e.element.style.setProperty("--ag-ui-launcher-inset",Wr(o,s,i,this.#b()).launcherInset),{held:o,launcher:s}}#T(t,n){let{held:r,launcher:o}=this.#w(t,n);o!==null&&(this.#M(r,o),this.#E())}#M(t,n){let r=this.#m(),o=this.#b(),i={width:t.right-t.left,height:t.bottom-t.top},{corner:a}=Hu(n,i,r,o),s=Wr(t,n,a,o);this.#e.element.style.setProperty("--ag-ui-inset",s.hostInset),this.#e.element.style.setProperty("--ag-ui-launcher-inset",s.launcherInset),this.#t={left:n.left,top:n.top},this.#n={left:t.left,top:t.top},this.#o=a,this.#e.element.setAttribute("data-expand-corner",`${a.y}-${a.x}`),this.syncResizeAnchor()}#A(t){if(!this.#f())return;let n=this.#e.element.getBoundingClientRect(),r=jr({left:t.left,top:t.top,right:t.left+n.width,bottom:t.top+n.height},this.#m(),ot),o=this.#g(),i={...o,left:o.left+(r.left-t.left),top:o.top+(r.top-t.top)};this.#M(r,{...i,...zt(i,this.#m())})}#E(){let t=this.#t;if(t===null)return;let n=this.#n;this.#e.writePreference(Gu,JSON.stringify(n===null?t:{...t,panel:n}))}restoreLauncherPosition(){let t=this.#k(),n=this.#t??t;if(n===null)return;let r=this.#n??t?.panel??null;if(r!==null){this.#t={left:n.left,top:n.top},this.#A(r);return}let o=this.#g();this.#y(zt({...o,left:n.left,top:n.top},this.#m()))}#k(){let t=this.#e.readPreference(Gu);if(t===null)return null;try{let n=JSON.parse(t);if(typeof n!="object"||n===null)return null;let{left:r,top:o,panel:i}=n;if(typeof r!="number"||typeof o!="number")return null;let a=ST(i);return a===null?{left:r,top:o}:{left:r,top:o,panel:a}}catch{return null}}releaseLauncherPosition(){this.#f()||(this.#t=null,this.#n=null,this.#o=null,this.#e.element.style.removeProperty("--ag-ui-inset"),this.#e.element.style.removeProperty("--ag-ui-launcher-inset"),this.#e.element.removeAttribute("data-expand-corner"))}#N(t,n){if(n=this.#a(n),this.#s({width:n.right-n.left,height:n.bottom-n.top}),t.x!==this.#r.x&&t.y!==this.#r.y)return n;let r=this.#r;if(this.#e.element.style.setProperty("--ag-ui-inset",vb(r,n,this.#b())),this.#t!==null){let o=this.#e.launcher.offsetWidth;this.#t={left:r.x==="left"?n.left:n.right-o,top:r.y==="top"?n.top:n.bottom-o}}return this.#n!==null&&(this.#n={left:n.left,top:n.top}),n}#F(t,n){let r=this.#N(t,n);this.#v({width:r.right-r.left,height:r.bottom-r.top}),this.#E(),this.syncResizeAnchor()}#O(){let t=`${this.#r.y==="top"?"bottom":"top"}-${this.#r.x==="left"?"right":"left"}`;for(let[n,r]of this.#i){let o=n===t;r.tabIndex=o?0:-1,o?r.removeAttribute("aria-hidden"):r.setAttribute("aria-hidden","true")}}#v(t){let n={...this.#z(),...t};this.#e.writePreference(mb,JSON.stringify(n))}#z(){let t=this.#e.readPreference(mb);if(t===null)return{};try{let n=JSON.parse(t);return typeof n=="object"&&n!==null?n:{}}catch{return{}}}};var ss=class{region=document.createElement("div");#e=null;mount(){this.region.className="sr-only",this.region.setAttribute("role","status"),this.region.setAttribute("aria-live","polite"),this.region.setAttribute("aria-atomic","true")}announce(t){this.#e!==null&&clearTimeout(this.#e),this.region.textContent=t,this.#e=setTimeout(()=>{this.#e=null,this.region.textContent=""},hp)}dispose(){this.#e!==null&&(clearTimeout(this.#e),this.#e=null)}};function ls(e,t,n,r){let o=document.createElement("div");o.className=`run-notice run-notice--${n}`,o.setAttribute("part",`run-notice run-notice-${n}`),o.setAttribute("role","status");let i=document.createElement("span");i.className="run-notice-icon",i.setAttribute("part","run-notice-icon"),i.textContent=e,i.setAttribute("aria-hidden","true");let a=document.createElement("span");if(a.className="run-notice-text",a.setAttribute("part","run-notice-text"),a.textContent=t,o.append(i,a),r!==void 0){let s=document.createElement("button");s.type="button",s.className="run-notice-undo",s.setAttribute("part","run-notice-undo"),s.textContent=r.label,s.addEventListener("click",()=>{s.disabled=!0,r.onActivate()}),o.append(s)}return o}var cs=class{element;get agent(){return this.#r}#e;#t;#n;#o=new Map;#r=null;constructor(t=pe){this.element=document.createElement("div"),this.element.className="subagent",this.element.setAttribute("part","subagent"),this.#e=document.createElement("button"),this.#e.type="button",this.#e.className="subagent-row",this.#e.setAttribute("part","subagent-row"),this.#e.setAttribute("aria-expanded","false"),this.#e.disabled=!0;let n=document.createElement("span");n.className="subagent-icon",n.setAttribute("part","subagent-icon"),n.setAttribute("aria-hidden","true"),this.#t=document.createElement("span"),this.#t.className="subagent-status",this.#t.setAttribute("part","subagent-status"),this.#t.textContent=t.subAgentWorking,this.#e.append(n,this.#t),this.#n=document.createElement("div"),this.#n.className="subagent-steps",this.#n.setAttribute("part","subagent-steps"),this.#n.setAttribute("role","list"),this.#n.setAttribute("aria-label",t.subAgentSteps),this.#n.hidden=!0,this.#e.addEventListener("click",()=>{this.#l(this.#e.getAttribute("aria-expanded")!=="true")}),this.element.append(this.#e,this.#n)}report(t){this.element.setAttribute("data-phase",t.phase),t.agent!==null&&(this.#r=t.agent,this.element.setAttribute("data-agent",t.agent)),t.status!==null&&(this.#t.textContent=t.status),t.tool!==null&&this.#i(t.tool)}#i(t){let n=this.#o.get(t.toolCallId)??this.#a(t);if(t.ok===null){n.removeAttribute("data-ok");return}n.setAttribute("data-ok",String(t.ok))}#a(t){let n=document.createElement("div");n.className="subagent-step",n.setAttribute("part","subagent-step"),n.setAttribute("role","listitem"),n.setAttribute("data-tool-call-id",t.toolCallId);let r=document.createElement("span");r.className="subagent-step-icon",r.setAttribute("part","subagent-step-icon"),r.setAttribute("aria-hidden","true");let o=document.createElement("span");return o.className="subagent-step-name",o.setAttribute("part","subagent-step-name"),o.textContent=t.name,n.append(r,o),this.#n.appendChild(n),this.#o.set(t.toolCallId,n),this.#e.disabled=!1,n}#l(t){this.#n.hidden=!t,this.#e.setAttribute("aria-expanded",String(t))}};var TT=Object.values(_n);function bb(e){return typeof e!="object"||e===null||Array.isArray(e)?null:e}function qr(e){return typeof e=="string"&&e!==""?e:null}function AT(e){let t=bb(e);if(t===null)return null;let n=qr(t.toolCallId),r=qr(t.name),o=t.ok;return n===null||r===null||o!==null&&typeof o!="boolean"?null:{toolCallId:n,name:r,ok:o}}function yb(e){let t=bb(e);if(t===null)return null;let n=qr(t.delegationId),r=t.phase;return n===null||typeof r!="string"||!TT.includes(r)?null:{delegationId:n,phase:r,agent:qr(t.agent),status:qr(t.status),tool:AT(t.tool)}}var us=class{#e;#t=new Map;#n=new Map;constructor(t){this.#e=t}report(t){let n=yb(t);n!==null&&this.#i(n)}start(t,n,r){r!==null&&(this.#n.set(t,r),this.#i({delegationId:r,agent:n===""?null:n,phase:_n.STARTED,status:se(this.#e.strings().subAgentDelegatedTo,{agent:n}),tool:null}))}finish(t){this.#o(t,_n.FINISHED,null)}fail(t,n){this.#o(t,_n.FAILED,n===""?this.#e.strings().subAgentFailed:n)}clear(){this.#t.clear(),this.#n.clear()}#o(t,n,r){let o=this.#n.get(t);if(o===void 0)return;let i=this.#t.get(o)?.agent??null;this.#i({delegationId:o,agent:i,phase:n,status:r===null?this.#r(i):r,tool:null})}#r(t){let n=this.#e.strings();return t===null?n.subAgentWorking:se(n.subAgentFinished,{agent:t})}#i(t){let n=this.#e.card(t.delegationId);if(n===void 0)return;let r=this.#t.get(t.delegationId);r===void 0&&(r=new cs(this.#e.strings()),this.#t.set(t.delegationId,r),n.subagentSlot.appendChild(r.element)),r.report(t),this.#e.follow()}};function Zu(e){return{[ne.PENDING]:e.toolRunning,[ne.DEFERRED]:e.toolDeferred,[ne.DONE]:e.toolDone,[ne.ERROR]:e.toolError,[ne.DECLINED]:e.toolDeclined,[ne.INTERRUPTED]:e.toolInterrupted}}function kT(e){return{[ne.DONE]:e.resultLabel,[ne.ERROR]:e.errorLabel,[ne.DECLINED]:e.declinedLabel,[ne.INTERRUPTED]:e.interruptedLabel}}function IT(e){try{return JSON.stringify(JSON.parse(e),null,2)}catch{return e}}var Yr=class{element;approvalSlot;subagentSlot;#e;#t;#n;#o;#r;#i;#a;args;#l;#u;#d=!1;constructor(t,n,r,o=pe,i={}){this.#a=o,this.args=n,this.#l=t,this.#u=i.formatPayload??null,this.element=document.createElement("div"),this.element.className="tool-call",this.element.setAttribute("part","tool-card"),this.element.setAttribute("data-tool-name",t),this.element.setAttribute("data-status",ne.PENDING),this.element.setAttribute("data-expanded","false");let a=document.createElement("div");a.className="tool-call-head",a.setAttribute("part","tool-card-head");let s=document.createElement("span");s.className="tool-call-icon",s.setAttribute("part","tool-card-icon"),s.setAttribute("aria-hidden","true");let c=document.createElement("span");c.className="tool-call-name",c.setAttribute("part","tool-card-name"),c.textContent=r??t,this.#e=document.createElement("span"),this.#e.className="tool-call-status",this.#e.setAttribute("part","tool-card-status"),this.#e.textContent=Zu(o)[ne.PENDING],this.#t=document.createElement("span"),this.#t.className="tool-call-decision",this.#t.setAttribute("part","tool-card-decision"),this.#t.hidden=!0,a.append(s,c,this.#e,this.#t);let l=this.#h("args",o.argumentsLabel);this.#c(l.body,{kind:"arguments",toolName:t,args:n},JSON.stringify(n,null,2)),l.root.hidden=Object.keys(n).length===0;let u=this.#h("result",o.resultLabel);this.#o=u.root,this.#r=u.label,this.#i=u.body,u.root.hidden=!0,this.#n=document.createElement("button"),this.#n.type="button",this.#n.className="tool-call-toggle",this.#n.setAttribute("part","tool-card-toggle"),this.#n.setAttribute("aria-expanded","false"),this.#n.textContent=o.details,this.#n.addEventListener("click",()=>this.#f(!this.#s()));let m=document.createElement("div");m.className="tool-call-body",m.setAttribute("part","tool-card-body"),m.append(l.root,u.root),this.approvalSlot=document.createElement("div"),this.approvalSlot.className="tool-call-approval",this.approvalSlot.setAttribute("part","tool-card-approval"),this.subagentSlot=document.createElement("div"),this.subagentSlot.className="tool-call-subagent",this.subagentSlot.setAttribute("part","tool-card-subagent"),this.element.append(a,this.subagentSlot,this.#n,m,this.approvalSlot)}mark(t){this.#d||(this.element.setAttribute("data-status",t),this.#e.textContent=Zu(this.#a)[t])}recordDecision(t){this.element.setAttribute("data-decision",t),this.#t.textContent=t==="approved"?this.#a.decisionApproved:this.#a.decisionDeclined,this.#t.hidden=!1}get settled(){return this.#d}settle(t,n){this.#d||(this.#d=!0,this.element.setAttribute("data-status",t),this.#e.textContent=Zu(this.#a)[t],this.#r.textContent=kT(this.#a)[t],this.#c(this.#i,{kind:"result",toolName:this.#l,status:t,text:n},IT(n)),this.#o.hidden=!1)}#c(t,n,r){let o=this.#u===null?null:this.#u(n);if(o===null){t.textContent=r;return}if(t.setAttribute("data-formatted","true"),typeof o=="string"){t.textContent=o;return}t.replaceChildren(o)}#h(t,n){let r=document.createElement("div");r.className=`tool-call-section tool-call-section--${t}`,r.setAttribute("part",`tool-card-section tool-card-${t}-section`);let o=document.createElement("span");o.className="tool-call-section-label",o.setAttribute("part",`tool-card-section-label tool-card-${t}-label`),o.textContent=n;let i=document.createElement("pre");return i.className=`tool-call-${t}`,i.setAttribute("part",`tool-card-${t}`),r.append(o,i),{root:r,label:o,body:i}}#s(){return this.element.getAttribute("data-expanded")==="true"}#f(t){this.element.setAttribute("data-expanded",String(t)),this.#n.setAttribute("aria-expanded",String(t))}};var wb=`
/* \u2500\u2500 Token defaults \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
   Every public --ag-ui-* token is read here into a private --_* alias, and
   only the alias is used by the rules below.

   The indirection is what makes ancestor theming work. Declaring the public
   name on :host would set it on the host element, and a value on an element
   always beats one inherited from an ancestor, so tokens put on a wrapper
   would have no effect. Reading the public name with the default as a var()
   fallback leaves it undeclared on the element, so an ancestor's value
   inherits normally while one aimed at the element still wins.

   Two invariants hold this together:
   1. No rule outside this file's :host blocks may reference a public name
      directly. A public name read outside these blocks resolves to nothing and
      silently drops its declaration rather than erroring, so the miss shows up
      as a missing colour, not a failure.
   2. Every --_* alias in use is declared here. Aliases inherit like any custom
      property, so an undeclared one would pick up a same-named property from
      the host page; declaring it on :host shields the shadow tree from that. */
:host {
  /* Colors */
  --_bg: var(--ag-ui-bg, #ffffff);
  --_fg: var(--ag-ui-fg, #1a1a2e);
  --_accent: var(--ag-ui-accent, #4f46e5);
  --_user-bg: var(--ag-ui-user-bg, #4f46e5);
  --_user-fg: var(--ag-ui-user-fg, #ffffff);
  --_assistant-bg: var(--ag-ui-assistant-bg, #f1f1f6);
  --_hover: var(--ag-ui-hover, #e7e7ee);
  --_input-bg: var(--ag-ui-input-bg, var(--_bg));
  --_tool-bg: var(--ag-ui-tool-bg, var(--_assistant-bg));
  --_tool-fg: var(--ag-ui-tool-fg, var(--_accent));
  --_header-bg: var(--ag-ui-header-bg, var(--_accent));
  --_header-fg: var(--ag-ui-header-fg, #ffffff);
  --_border: var(--ag-ui-border, #e2e2ec);
  --_radius: var(--ag-ui-radius, 12px);
  /* The panel's own frame, which is the one corner a placement can put against
     the edge of the viewport. The placements that do (page, sidebar, side, full,
     and all but embedded on a small viewport) square this and leave --_radius alone, so
     the answer well and the controls inside the panel stay as round as the
     theme says: none of them meets that edge. */
  --_panel-radius: var(--ag-ui-panel-radius, var(--_radius));

  /* Body text and raised chrome, read only by the code-block copy button.
     The defaults restate what it inherits, so a host that sets neither sees
     no repaint \u2014 see the note on .code-copy. */
  --_text: var(--ag-ui-text, var(--_fg));
  --_surface: var(--ag-ui-surface, transparent);

  /* Message action row: the control box and the mark inside it. The box has a
     floor of 24px so it stays a reliable target at every density. */
  --_action-size: var(--ag-ui-action-size, 28px);
  /* The header's own controls. Sized rather than left to their contents: a row
     of buttons each as wide as the glyph inside it comes out uneven, and uneven
     buttons two pixels apart read as one smudge rather than five controls. */
  --_header-btn-size: var(--ag-ui-header-btn-size, 30px);
  --_header-gap: var(--ag-ui-header-gap, 4px);
  --_action-icon-size: var(--ag-ui-action-icon-size, 15px);
  --_tooltip-bg: var(--ag-ui-tooltip-bg, #1f2430);
  --_tooltip-fg: var(--ag-ui-tooltip-fg, #f5f6fa);

  /* Text and marks drawn on top of the accent and danger fills. Separate
     tokens because they are not free: a host that themes the accent to a pale
     colour has white-on-pale with no way to correct it, which is the one
     theming change that makes a control unreadable rather than merely off. */
  --_on-accent: var(--ag-ui-on-accent, #ffffff);
  --_on-danger: var(--ag-ui-on-danger, #ffffff);

  /* Resize grips: the corner squares and the edge strips between them. Wide
     enough to hit without being wide enough to swallow a click on the content
     underneath, and adjustable for a host with a coarser pointer. */
  --_grip-corner: var(--ag-ui-grip-corner, 14px);
  --_grip-edge: var(--ag-ui-grip-edge, 6px);
  --_grip-edge-docked: var(--ag-ui-grip-edge-docked, 8px);
  /* The mark drawn inside a grip, as opposed to the area it answers to. */
  --_grip-mark-length: var(--ag-ui-grip-mark-length, 28px);
  --_grip-mark-thickness: var(--ag-ui-grip-mark-thickness, 3px);

  /* Status accents for tool-call cards. */
  --_success: var(--ag-ui-success, #15803d);
  --_danger: var(--ag-ui-danger, #b91c1c);
  --_muted: var(--ag-ui-muted, #6b7280);

  /* Tool-call status icon glyphs (override to re-theme) + spinner speed.
     The pending state is the animated ring; the settled states use these. */
  --_tool-icon-done: var(--ag-ui-tool-icon-done, "\u2713");
  --_tool-icon-error: var(--ag-ui-tool-icon-error, "\u2715");
  --_tool-icon-declined: var(--ag-ui-tool-icon-declined, "\u2298");
  --_tool-icon-interrupted: var(--ag-ui-tool-icon-interrupted, "\u25CC");

  /* Disclosure marks on every expandable row. Tokenised for the same reason
     the status icons above are: a host re-theming one set and not the other
     ends up with two vocabularies in one transcript. */
  --_disclosure-collapsed: var(--ag-ui-disclosure-collapsed, "\u25B8");
  --_disclosure-expanded: var(--ag-ui-disclosure-expanded, "\u25BE");
  --_tool-spin-duration: var(--ag-ui-tool-spin-duration, 0.7s);

  /* Answer well (opt-in via data-answer-well) \u2014 boxes a whole assistant turn. */
  --_well-bg: var(--ag-ui-well-bg, transparent);
  --_well-border: var(--ag-ui-well-border, var(--_border));
  --_well-radius: var(--ag-ui-well-radius, var(--_radius));

  /* Surface \u2014 set --ag-ui-shadow: none for a flush, embedded panel. */
  --_shadow: var(--ag-ui-shadow, 0 12px 32px rgba(20, 20, 50, 0.18));
  --_font: var(--ag-ui-font, inherit);
  --_font-size: var(--ag-ui-font-size, 14px);
  --_code-font: var(--ag-ui-code-font, ui-monospace, "SF Mono", Menlo, monospace);

  /* Header / launcher icon box. */
  --_icon-size: var(--ag-ui-icon-size, 22px);
  --_icon-radius: var(--ag-ui-icon-radius, 4px);

  /* Composer \u2014 one bordered surface holding the field and its tool row. */
  --_composer-radius: var(--ag-ui-composer-radius, 14px);
  --_composer-max-height: var(--ag-ui-composer-max-height, 40vh);
  --_tool-btn-size: var(--ag-ui-tool-btn-size, 30px);
  --_send-size: var(--ag-ui-send-size, 30px);
  --_glyph-size: var(--ag-ui-glyph-size, 18px);
  --_glyph-stroke: var(--ag-ui-glyph-stroke, 1.75);

  /* How wide a chart is allowed to get. A cap rather than a width: below it
     the chart fills its column, and above it a wider panel is just a wider
     panel. */
  --_chart-max-width: var(--ag-ui-chart-max-width, 480px);

  /* Unread badge on the launcher. */
  --_badge-bg: var(--ag-ui-badge-bg, var(--_danger));
  --_badge-fg: var(--ag-ui-badge-fg, #ffffff);
  --_badge-size: var(--ag-ui-badge-size, 18px);
  --_badge-font-size: var(--ag-ui-badge-font-size, 11px);

  /* The floating launcher a collapsed widget shrinks to. */
  --_launcher-size: var(--ag-ui-launcher-size, 56px);
  --_launcher-bg: var(--ag-ui-launcher-bg, var(--_header-bg));
  --_launcher-fg: var(--ag-ui-launcher-fg, var(--_header-fg));
  --_launcher-radius: var(--ag-ui-launcher-radius, 50%);
  --_launcher-icon-size: var(--ag-ui-launcher-icon-size, 26px);
  --_launcher-inset: var(--ag-ui-launcher-inset, auto 0 0 auto);

  /* Motion. One duration and two curves drive every collapse, expand and
     slide-over, so the widget accelerates and settles as one thing. The
     default curve decelerates into place; the pop curve overshoots slightly,
     for something arriving. */
  --_motion: var(--ag-ui-motion, 0.28s);
  --_ease: var(--ag-ui-ease, cubic-bezier(0.32, 0.72, 0, 1));
  --_ease-pop: var(--ag-ui-ease-pop, cubic-bezier(0.34, 1.36, 0.64, 1));

  /* Spacing \u2014 the density preset overrides these. */
  --_space: var(--ag-ui-space, 10px);
  --_pad: var(--ag-ui-pad, 16px);
  --_msg-pad: var(--ag-ui-msg-pad, 8px 12px);
  --_msg-radius: var(--ag-ui-msg-radius, 14px);

  /* Edges of the viewport the host has already spent, and that a fixed
     placement must therefore stay out of: a sticky nav bar, a docked toolbar,
     a device's safe area. Four longhands rather than one shorthand because a
     custom property is a token stream and CSS cannot index one -- the height
     arithmetic below needs the vertical pair on its own.

     Every fixed placement derives from these, and the heights subtract them in
     one place. A host that reserved its chrome by restating --ag-ui-inset per
     placement had to keep --ag-ui-height in step by hand, and forgetting it
     overflowed the panel past the bottom of the screen with nothing to say so.

     These take env(safe-area-inset-*) verbatim, which is what a full-bleed
     placement wants on a device with a notch. */
  --_viewport-inset-top: var(--ag-ui-viewport-inset-top, 0px);
  --_viewport-inset-right: var(--ag-ui-viewport-inset-right, 0px);
  --_viewport-inset-bottom: var(--ag-ui-viewport-inset-bottom, 0px);
  --_viewport-inset-left: var(--ag-ui-viewport-inset-left, 0px);
  /* What is left of the viewport once the host's chrome is taken out, on both
     axes, so a placement never composes this itself and no host can subtract
     an edge from the position and forget it in the height.

     Settable in their own right, and that is not only convention: an on-screen
     keyboard changes no viewport-percentage length -- not vh, not dvh, not svh
     -- so a full-bleed panel on a phone has to be told the height rather than
     deriving it. The value to publish there is the visual viewport's. */
  --_viewport-height: var(
    --ag-ui-viewport-height,
    calc(
      min(var(--_visual-viewport-inset-top) + var(--_visual-viewport-height), 100dvh - var(--_viewport-inset-bottom)) -
        var(--_viewport-inset-top) - var(--_keyboard-inset-top)
    )
  );
  /* That default is the host's box cut to the part of the screen the user can
     see: from the top the panel starts at, the host's reserved top moved down
     by the keyboard inset below, to whichever is further up, the bottom of the
     visible area or the host's reserved bottom. Where nothing has measured, the
     visible area is the layout viewport with no pan, and this is the host's
     box exactly.

     Cut rather than replaced. A measured height used as the whole answer kept
     a bar the host reserved at the top in the position and out of the height,
     so the panel ran that far past the bottom of the visible area, with its
     composer behind the keyboard. */
  /* The measured height of the part of the screen the user can actually see,
     written by the element from the visual viewport and falling back to the
     layout viewport where nothing has measured yet.

     This is the on-screen keyboard, and it needs measuring because no CSS
     length describes it: an on-screen keyboard has no effect on any
     viewport-percentage unit, so 100vh, 100dvh and 100svh are all the same
     number with the keyboard up as without it. A full-bleed panel sized from
     any of them puts its composer behind the keyboard the user is typing into.

     Separate from the token above so a host that states the usable height
     outright still wins: the element writes this one inline, and an inline
     value would otherwise outrank the host's own rule.

     The fallback is dvh rather than vh because the browser's own bars do move
     it, where a keyboard does not. iOS Safari resolves vh to the viewport with
     its bars collapsed, so on a page that does not scroll them away a panel
     sized from it ran under the address bar by the bars' height -- 40px on
     the phone measured -- with a docked composer underneath. dvh is the
     viewport with the bars as they are. */
  --_visual-viewport-height: var(--ag-ui-visual-viewport-height, 100dvh);
  /* How much of the layout viewport is hidden below the visible one, measured
     and written by the element alongside the height above.

     A shorter panel is not enough on its own for anything anchored to the
     bottom. A floating widget is positioned against the layout viewport, so
     with a keyboard up its bottom edge -- and the launcher that lives at that
     corner -- sits behind the keyboard however tall the panel is. This is what
     lifts it clear. */
  /* Two tokens, for the same reason the height above has two: the element
     writes the measurement inline, and a host that states its own value needs
     a knob that outranks that write rather than one the next write replaces.
     A host wanting no keyboard lift at all sets --ag-ui-keyboard-inset: 0px. */
  --_keyboard-inset: var(--ag-ui-keyboard-inset, var(--_visual-viewport-inset-bottom));
  --_visual-viewport-inset-bottom: var(--ag-ui-visual-viewport-inset-bottom, 0px);
  /* How far a panel anchored at the top moves down for a keyboard, below the
     top the host reserved. With the same two-token shape as the lift above;
     0px keeps the panel at the host's top.

     To show the field being typed into, a browser pans the visible area down
     the layout viewport, and a fixed element stays against the layout top, so
     a panel that did not move showed only its lower part, from the pan down,
     with its header off the screen and an empty band under it. It moves by
     what the pan goes past the host's reserved top, not by the whole pan: the
     pan scrolls a bar reserved there away with the rest of the page rather
     than pushing it down, and adding the two put the panel a whole bar below
     the visible area. A corner panel anchored at the bottom does not use this,
     because the band below already accounts for the pan. */
  --_keyboard-inset-top: var(--ag-ui-keyboard-inset-top, max(0px, var(--_visual-viewport-inset-top) - var(--_viewport-inset-top)));
  /* How much of the layout viewport is hidden above the visible one: how far
     the browser panned. Measured and written by the element with the two
     above. */
  --_visual-viewport-inset-top: var(--ag-ui-visual-viewport-inset-top, 0px);
  --_viewport-width: var(
    --ag-ui-viewport-width,
    calc(100vw - var(--_viewport-inset-left) - var(--_viewport-inset-right))
  );

  /* Layout \u2014 override from outside to dock the widget anywhere.
     Set --ag-ui-position: static (and place this element in your own
     grid/flex layout) to embed it in the page flow instead of floating. */
  --_position: var(--ag-ui-position, fixed);
  --_z-index: var(--ag-ui-z-index, 2147483000);
  --_width: var(--ag-ui-width, 380px);
  --_height: var(--ag-ui-height, 560px);
  /* The gutter a resting floating panel keeps between itself and the edge of
     the box the host left free. One number, because the inset below spends it
     and the cap beneath has to know it was spent. */
  --_edge-gutter: var(--ag-ui-edge-gutter, 24px);
  --_inset: var(
    --ag-ui-inset,
    auto calc(var(--_edge-gutter) + var(--_viewport-inset-right))
      calc(var(--_edge-gutter) + var(--_viewport-inset-bottom) + var(--_keyboard-inset)) auto
  );
  /* The cap is what the host left free, less the *one* gutter the inset above
     spends on the anchored edge -- not two, and not none.

     Two was the first answer and it was felt on one axis only. The arithmetic
     says why: the default panel is 560 tall against a cap of the viewport
     minus 48, which on an 800px screen with a header reserved is 72px of
     headroom, so the height reaches its cap almost immediately; the default
     width is 380 against a cap near 1230, which is 850px nothing ever reaches.
     Once the size is capped a grip cannot grow the panel, so a pull on the
     anchored edge is written as position instead and the panel travels, and a
     pull on the free edge stops a whole gutter short of an edge a drag can
     reach.

     None was the correction, and it overshot: the panel is anchored bottom-
     right with a gutter already spent there, so a cap of the full usable
     height puts the far edge exactly one gutter outside it. On an 800px screen
     with nothing reserved that is a top of -24 -- the header, and every
     control in it, off the top of the window. Reserve a 120px header and it
     sits inside that instead, which is the one thing the reservation exists to
     prevent.

     One is the fixed point of both complaints. A resting panel grown to the
     cap runs from the usable near edge to its gutter on the far one, so the
     near edge is reachable by a resize exactly as it is by a drag, and neither
     can put any part of the panel outside the box. */
  --_max-width: var(--ag-ui-max-width, calc(var(--_viewport-width) - var(--_edge-gutter)));
  --_max-height: var(--ag-ui-max-height, calc(var(--_viewport-height) - var(--_edge-gutter)));
  /* Reading-column width for placement="page" (full-bleed, centred content). */
  --_content-max-width: var(--ag-ui-content-max-width, 820px);
  /* The greeting over an empty full-page conversation. The size scales with
     the viewport between a phone and a desktop rather than stepping at a
     breakpoint. */
  --_greeting-font: var(--ag-ui-greeting-font, var(--_font));
  --_greeting-size: var(--ag-ui-greeting-size, clamp(1.5rem, 4vw, 2.25rem));
  /* Slim rail the sidebar placement collapses to. Only that placement reads
     it, but it is declared here so every alias has a default in one place. */
  --_rail-width: var(--ag-ui-rail-width, 52px);

  position: var(--_position);
  inset: var(--_inset);
  z-index: var(--_z-index);
  width: var(--_width);
  max-width: var(--_max-width);
  height: var(--_height);
  max-height: var(--_max-height);
  display: flex;
  font-family: var(--_font);
  font-size: var(--_font-size);
  color: var(--_fg);
}

/* \u2500\u2500 Themes \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
   Themes only re-set the colour variables; layout/spacing are unaffected.
   theme="auto" follows the OS via prefers-color-scheme. */
:host([theme="dark"]) {
  --_bg: var(--ag-ui-bg, #15151f);
  --_fg: var(--ag-ui-fg, #e8e8f2);
  --_assistant-bg: var(--ag-ui-assistant-bg, #25253a);
  --_hover: var(--ag-ui-hover, #303049);
  --_header-bg: var(--ag-ui-header-bg, #1f1f30);
  --_header-fg: var(--ag-ui-header-fg, #e8e8f2);
  --_border: var(--ag-ui-border, #33334a);
  --_muted: var(--ag-ui-muted, #9aa0b4);
  --_shadow: var(--ag-ui-shadow, 0 12px 32px rgba(0, 0, 0, 0.5));
}

@media (prefers-color-scheme: dark) {
  :host([theme="auto"]) {
    --_bg: var(--ag-ui-bg, #15151f);
    --_fg: var(--ag-ui-fg, #e8e8f2);
    --_assistant-bg: var(--ag-ui-assistant-bg, #25253a);
    --_hover: var(--ag-ui-hover, #303049);
    --_header-bg: var(--ag-ui-header-bg, #1f1f30);
    --_header-fg: var(--ag-ui-header-fg, #e8e8f2);
    --_border: var(--ag-ui-border, #33334a);
    --_muted: var(--ag-ui-muted, #9aa0b4);
    --_shadow: var(--ag-ui-shadow, 0 12px 32px rgba(0, 0, 0, 0.5));
  }
}

/* A terminal-flavoured "code" theme: dark, monospace, green accent. */
:host([theme="code"]) {
  --_bg: var(--ag-ui-bg, #0d1117);
  --_fg: var(--ag-ui-fg, #c9d1d9);
  --_accent: var(--ag-ui-accent, #3fb950);
  --_user-bg: var(--ag-ui-user-bg, #238636);
  --_assistant-bg: var(--ag-ui-assistant-bg, #161b22);
  --_hover: var(--ag-ui-hover, #21262d);
  --_header-bg: var(--ag-ui-header-bg, #010409);
  --_header-fg: var(--ag-ui-header-fg, #c9d1d9);
  --_border: var(--ag-ui-border, #30363d);
  --_muted: var(--ag-ui-muted, #8b949e);
  --_font: var(--ag-ui-font, var(--_code-font));
  --_shadow: var(--ag-ui-shadow, 0 12px 32px rgba(0, 0, 0, 0.6));
}

/* \u2500\u2500 Density \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */
:host([density="compact"]) {
  --_font-size: var(--ag-ui-font-size, 13px);
  --_space: var(--ag-ui-space, 6px);
  --_pad: var(--ag-ui-pad, 10px);
  --_msg-pad: var(--ag-ui-msg-pad, 5px 9px);
  --_msg-radius: var(--ag-ui-msg-radius, 10px);
}

/* \u2500\u2500 Placement presets \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */
:host([placement="bottom-left"]) {
  --_inset: var(
    --ag-ui-inset,
    auto auto calc(var(--_edge-gutter) + var(--_viewport-inset-bottom) + var(--_keyboard-inset))
      calc(var(--_edge-gutter) + var(--_viewport-inset-left))
  );
}

:host([placement="side"]) {
  --_inset: var(--ag-ui-inset, calc(var(--_viewport-inset-top) + var(--_keyboard-inset-top)) var(--_viewport-inset-right) var(--_viewport-inset-bottom) auto);
  --_width: var(--ag-ui-width, 420px);
  --_height: var(--ag-ui-height, var(--_viewport-height));
  --_max-height: var(--ag-ui-max-height, var(--_viewport-height));
  --_panel-radius: var(--ag-ui-panel-radius, 0);
}

:host([placement="full"]) {
  --_inset: var(
    --ag-ui-inset,
    calc(var(--_viewport-inset-top) + var(--_keyboard-inset-top)) var(--_viewport-inset-right)
      var(--_viewport-inset-bottom) var(--_viewport-inset-left)
  );
  --_width: var(--ag-ui-width, var(--_viewport-width));
  --_height: var(--ag-ui-height, var(--_viewport-height));
  --_max-width: var(--ag-ui-max-width, var(--_viewport-width));
  --_max-height: var(--ag-ui-max-height, var(--_viewport-height));
  --_panel-radius: var(--ag-ui-panel-radius, 0);
}

/* Page: full-bleed background with a centred reading column capped at
   --ag-ui-content-max-width, where "full" is edge-to-edge and left-aligned.
   The column comes from symmetric auto padding on the scroll area and
   composer rather than a per-row wrapper, so user pills still right-align and
   the assistant well spans the column. */
:host([placement="page"]) {
  --_inset: var(
    --ag-ui-inset,
    calc(var(--_viewport-inset-top) + var(--_keyboard-inset-top)) var(--_viewport-inset-right)
      var(--_viewport-inset-bottom) var(--_viewport-inset-left)
  );
  --_width: var(--ag-ui-width, var(--_viewport-width));
  --_height: var(--ag-ui-height, var(--_viewport-height));
  --_max-width: var(--ag-ui-max-width, var(--_viewport-width));
  --_max-height: var(--ag-ui-max-height, var(--_viewport-height));
  --_panel-radius: var(--ag-ui-panel-radius, 0);
}

:host([placement="page"]) .messages {
  padding-inline: max(var(--_pad), calc((100% - var(--_content-max-width)) / 2));
}

:host([placement="page"]) .input-row {
  padding-inline: max(12px, calc((100% - var(--_content-max-width)) / 2));
}

/* The rows between the message list and the composer line up with the column
   too. Chips and tray are padding-based while palette and hint are
   margin-based, so each gets its own inline axis nudged by the same gutter. */
:host([placement="page"]) .skill-chips,
:host([placement="page"]) .attachment-tray {
  padding-inline: max(12px, calc((100% - var(--_content-max-width)) / 2));
}

:host([placement="page"]) .skill-palette,
:host([placement="page"]) .skill-hint {
  margin-inline: max(12px, calc((100% - var(--_content-max-width)) / 2));
}

/* In the reading column the assistant well uses the full width; the user
   message stays a right-aligned pill (its default align-self + max-width). */
:host([placement="page"]) .message--assistant {
  max-width: 100%;
}

/* Small viewports: one shape, reached from whichever placement the host chose.

   A phone is not an eighth placement, it is an override that collapses the
   others onto one of them. The host picked a placement for the desktop it was
   designing; a 380x560 panel with a 24px margin is not a smaller version of
   that decision, it is most of the screen with a frame drawn round it.

   The breakpoint is a literal because a custom property cannot be read in a
   media query -- which is exactly why there is an opt-out. Everything the block
   sets is a token a host can re-state, but the *trigger* is unreachable, so a
   host whose layout wants a different threshold, or none, sets
   data-small-viewport="off" and keeps its desktop shape at every width. 600px is above every common phone in portrait and below every
   tablet in landscape, and it is a width rather than a pointer test on purpose:
   a touch laptop is coarse-pointered and wide, a narrow desktop window is
   fine-pointered and small, and conflating the two gets both wrong. What the
   pointer decides is which controls make sense, further down.

   Two placements are left alone. "page" is already this shape. "embedded" sits
   in a box the host sized and placed, and taking that over would break the app
   shell it was embedded into -- the host is the only party that knows whether
   its column should become the whole screen. */
@media (max-width: 600px) {
  :host([placement="floating"]:not([data-small-viewport="off"])),
  :host([placement="bottom-left"]:not([data-small-viewport="off"])),
  :host([placement="sidebar"]:not([data-small-viewport="off"])),
  :host([placement="side"]:not([data-small-viewport="off"])),
  :host(:not([placement]):not([data-small-viewport="off"])),
  :host([placement=""]:not([data-small-viewport="off"])) {
    --_inset: var(
      --ag-ui-inset,
      calc(var(--_viewport-inset-top) + var(--_keyboard-inset-top)) var(--_viewport-inset-right)
        calc(var(--_viewport-inset-bottom) + var(--_keyboard-inset))
        var(--_viewport-inset-left)
    );
    --_width: var(--ag-ui-width, var(--_viewport-width));
    --_height: var(--ag-ui-height, var(--_viewport-height));
    --_max-width: var(--ag-ui-max-width, var(--_viewport-width));
    --_max-height: var(--ag-ui-max-height, var(--_viewport-height));
    --_panel-radius: var(--ag-ui-panel-radius, 0);
    --_shadow: var(--ag-ui-shadow, none);
  }

  /* Nothing to resize once the panel is the screen, and the grips would sit
     under the thumbs holding the phone. */
  :host([placement="floating"]:not([data-small-viewport="off"])) .resize-handle,
  :host([placement="bottom-left"]:not([data-small-viewport="off"])) .resize-handle,
  :host([placement="sidebar"]:not([data-small-viewport="off"])) .resize-handle,
  :host([placement="side"]:not([data-small-viewport="off"])) .resize-handle,
  :host(:not([placement]):not([data-small-viewport="off"])) .resize-handle,
  :host([placement=""]:not([data-small-viewport="off"])) .resize-handle {
    display: none;
  }
}

/* Sidebar: a full-height docked panel that slides open/closed and
   collapses to a slim icon rail (not the floating launcher). Docked right by
   default; data-side="left" docks it left. Overlay by default \u2014 set
   --ag-ui-position: static (and place this element in your own layout) for a
   host-managed push instead. */
:host([placement="sidebar"]) {
  --_inset: var(--ag-ui-inset, calc(var(--_viewport-inset-top) + var(--_keyboard-inset-top)) var(--_viewport-inset-right) var(--_viewport-inset-bottom) auto);
  --_width: var(--ag-ui-width, 420px);
  --_height: var(--ag-ui-height, var(--_viewport-height));
  --_max-height: var(--ag-ui-max-height, var(--_viewport-height));
  --_panel-radius: var(--ag-ui-panel-radius, 0);
  transition: width var(--_motion) var(--_ease);
}

:host([placement="sidebar"][data-side="left"]) {
  --_inset: var(
    --ag-ui-inset,
    calc(var(--_viewport-inset-top) + var(--_keyboard-inset-top)) auto var(--_viewport-inset-bottom)
      var(--_viewport-inset-left)
  );
}

/* The docked panel is pinned to the edge it docks against rather than filling
   the host as a flex child. Collapsing shrinks the host to the rail width, and
   a flex child would be squashed to 52px on the way out instead of sliding out
   at full width. */
/* The panel is taken out of flow so the collapse can slide it out at full
   width; see the note above. That makes the host its containing block, and the
   host is only one by accident: it is position: fixed by default. A host that
   takes the documented route to a pushed layout instead of an overlay sets
   --ag-ui-position: static, and a static element establishes nothing -- so the
   panel resolved against the initial containing block, landed at the document
   origin, and scrolled away with the page. Docked left it pinned to the
   document's left edge rather than the host's.

   It looked correct wherever it was first tried, because a full-height column
   at the top of an unscrolled document is exactly where those two answers
   coincide. Containment makes the host a containing block whatever its
   position, so the panel stays in the box the host was given. It is a no-op in
   the default case, which is already positioned. */
:host([placement="sidebar"]) {
  contain: layout;
}

:host([placement="sidebar"]) .chat {
  position: absolute;
  inset: 0 0 0 auto;
  width: var(--_width);
  transform-origin: right center;
}

:host([placement="sidebar"][data-side="left"]) .chat {
  inset: 0 auto 0 0;
  transform-origin: left center;
}

/* Collapsed sidebar: shrink the host to the rail width and slide the panel out
   through the edge it docks against. Higher specificity than the generic
   collapse rules, so it wins regardless of source order. */
/* The rail is the full height of what the host left, not of the screen. It
   said 100vh and pinned its own bottom, which put it under any chrome the host
   had reserved -- and the icon lives at the top of the rail, so the one control
   that reopens the panel was the first thing to disappear behind a sticky
   header. */
:host([placement="sidebar"][collapsed]) {
  width: var(--_rail-width);
  height: var(--_viewport-height);
  max-height: var(--_viewport-height);
  pointer-events: auto;
}

:host([placement="sidebar"][collapsed]) .chat {
  transform: translateX(100%);
}

:host([placement="sidebar"][data-side="left"][collapsed]) .chat {
  transform: translateX(-100%);
}

@media (prefers-reduced-motion: reduce) {
  :host([placement="sidebar"]),
  :host([placement="sidebar"]) .chat {
    transition: none;
  }
}

/* \u2500\u2500 Launcher \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
   What a collapsed widget shrinks to: a round floating button by default, the
   sidebar's slim edge rail under that placement. A sibling of the panel, so it
   survives the panel being hidden, and the only part of a collapsed widget
   that takes pointer events. */
.launcher {
  display: flex;
  position: absolute;
  inset: var(--_launcher-inset);
  align-items: center;
  justify-content: center;
  width: var(--_launcher-size);
  height: var(--_launcher-size);
  padding: 0;
  border: none;
  border-radius: var(--_launcher-radius);
  background: var(--_launcher-bg);
  color: var(--_launcher-fg);
  box-shadow: var(--_shadow);
  font: inherit;
  cursor: pointer;
  pointer-events: auto;
  /* A touch drag on the launcher moves it; without this the page scrolls under
     the finger instead and the launcher never moves at all. */
  touch-action: none;
  opacity: 0;
  transform: scale(0.4);
  visibility: hidden;
  transition:
    opacity var(--_motion) var(--_ease),
    transform var(--_motion) var(--_ease-pop),
    visibility var(--_motion) var(--_ease);
}

/* The launcher grows out of the corner the panel shrank into. It stays laid
   out at rest rather than display:none, which is what lets it animate both in
   and out: an unrendered element has no before-change style to transition
   from, and one flipping display to none cannot transition at all. visibility
   keeps it unpaintable, untabbable and unclickable in between, so the expanded
   panel's own controls underneath stay reachable. */
:host([collapsed]) .launcher {
  opacity: 1;
  transform: none;
  visibility: visible;
}

:host([collapsed]) .launcher:hover {
  transform: scale(1.06);
}

:host([collapsed]) .launcher:active {
  transform: scale(0.94);
}

/* A drag is a press and a hover at the same time, so both scale rules above are
   live throughout it. Cancelling them is what keeps the launcher the size of
   the thing under the pointer while it travels; the position itself comes from
   inset, which nothing here transitions, so it tracks the pointer exactly. */
:host([collapsed]) .launcher[data-dragging] {
  transform: none;
  cursor: grabbing;
}

.launcher .icon-holder {
  width: var(--_launcher-icon-size);
  height: var(--_launcher-icon-size);
}

/* The unread badge rides the launcher's top-right corner. The ring in the
   widget's own background is what separates it from the launcher underneath,
   whatever colour the host themes either one. */
.launcher-badge {
  position: absolute;
  top: -2px;
  right: -2px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  min-width: var(--_badge-size);
  height: var(--_badge-size);
  padding: 0 5px;
  border-radius: 999px;
  background: var(--_badge-bg);
  color: var(--_badge-fg);
  font-size: var(--_badge-font-size);
  font-weight: 600;
  line-height: 1;
  box-shadow: 0 0 0 2px var(--_bg);
}

.launcher-badge[hidden] {
  display: none;
}

/* The sidebar collapses to an edge rail instead: full height, square, flush
   against the dock. It slides in with the panel rather than popping. */
/* The edge rail. It reads as the docked edge of a panel rather than a coloured
   stripe: the surface the panel is made of, a border on the side it docks
   against, and the accent kept for the icon -- a full-height slab of accent is
   the loudest thing on the page and says the least about itself.

   Content sits at the top rather than centred, because a control floating in
   the middle of a screen-high column has nothing to belong to. */
:host([placement="sidebar"][collapsed]) .launcher {
  inset: 0;
  width: auto;
  height: auto;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  gap: 12px;
  padding-top: 14px;
  border: 0;
  border-inline-start: 1px solid var(--_border);
  border-radius: 0;
  background: var(--_bg);
  color: var(--_fg);
  box-shadow: none;
  transform: none;
}

:host([placement="sidebar"][data-side="left"][collapsed]) .launcher {
  border-inline-start: 0;
  border-inline-end: 1px solid var(--_border);
}

/* The icon keeps the accent, so there is one obvious thing to press.

   The glyph is sized here rather than left to fill the holder. A glyph in an
   icon holder takes the holder's whole box by default, which is right where the
   holder is only a box and wrong the moment it becomes a filled circle: the
   mark then runs edge to edge and reads as a square crammed into a disc. The
   proportion is the floating launcher's own -- a 26px glyph in a 56px bubble --
   so the two collapsed states look like the same widget. */
:host([placement="sidebar"][collapsed]) .launcher .icon-holder {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 34px;
  height: 34px;
  border-radius: 50%;
  background: var(--_header-bg);
  color: var(--_header-fg);
}

:host([placement="sidebar"][collapsed]) .launcher .icon-holder .glyph,
:host([placement="sidebar"][collapsed]) .launcher .icon-holder .icon-img {
  width: 16px;
  height: 16px;
}

/* Written down the rail, which is the only direction it fits. Reading upward
   is the convention for a right-hand edge and matches how a docked panel's
   label is set everywhere it appears. */
.rail-label {
  display: none;
}

:host([placement="sidebar"][collapsed]) .rail-label {
  display: block;
  writing-mode: vertical-rl;
  transform: rotate(180deg);
  max-height: calc(100% - 96px);
  overflow: hidden;
  font-size: 0.9em;
  font-weight: 600;
  letter-spacing: 0.02em;
  white-space: nowrap;
  text-overflow: ellipsis;
}

:host([placement="sidebar"][data-side="left"][collapsed]) .rail-label {
  writing-mode: vertical-rl;
  transform: none;
}

/* Every transition in this file is timed by --_motion, so collapsing it to a
   frame is the whole reduced-motion story: states still change (and display
   still flips at the end of its discrete transition), nothing travels. */
@media (prefers-reduced-motion: reduce) {
  :host {
    --_motion: var(--ag-ui-motion, 0.001s);
  }
}

/* Embedded: drop the floating chrome and the high z-index stacking context so
   the widget lives in the host's own layout (fixes overlay/z-index clashes). */
:host([placement="embedded"]) {
  --_position: var(--ag-ui-position, static);
  --_width: var(--ag-ui-width, 100%);
  --_height: var(--ag-ui-height, 100%);
  --_max-width: var(--ag-ui-max-width, 100%);
  --_max-height: var(--ag-ui-max-height, 100%);
  --_shadow: var(--ag-ui-shadow, none);
  --_z-index: var(--ag-ui-z-index, auto);
}

.chat {
  position: relative;
  display: flex;
  flex-direction: column;
  flex: 1;
  min-height: 0;
  background: var(--_bg);
  border: 1px solid var(--_border);
  border-radius: var(--_panel-radius);
  box-shadow: var(--_shadow);
  overflow: hidden;
}

.header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 8px;
  padding: 10px 14px;
  border-bottom: 1px solid var(--_border);
  background: var(--_header-bg);
  color: var(--_header-fg);
}

/* The header is the panel's title bar: on the placements that let the widget
   be moved it drags the whole thing, matching the launcher's own drag. The
   selector lists those placements rather than asking JS to stamp an attribute,
   because a cursor that appears one frame late reads as a control that only
   sometimes exists. touch-action keeps a finger drag here moving the panel
   instead of scrolling the page behind it. */
:host(:not([placement])) .header,
:host([placement=""]) .header,
:host([placement="floating"]) .header,
:host([placement="bottom-left"]) .header {
  cursor: move;
  touch-action: none;
}

/* A host that turned the drag off keeps a header that says so. */
:host([data-launcher-drag="false"]) .header {
  cursor: auto;
  touch-action: auto;
}

/* :host is carried for the specificity, not the scope: the placement rules
   above are a host selector plus a class plus an attribute, and a bare
   .header[data-dragging] loses to them -- silently, because the drag still
   works and only the cursor is wrong. */
:host .header[data-dragging] {
  cursor: grabbing;
}

/* The cursor inherits, so a control a host slots into the header would show
   the drag cursor over something the drag deliberately ignores. Named to
   match the controls panel_drag steps aside for. */
.header ::slotted(:is(button, a, input, select, textarea)) {
  cursor: pointer;
}

.header-title {
  flex: 1;
  min-width: 0;
  font-weight: 600;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

/* Header / launcher icon holder: a slot, with a data-icon-url <img>
   fallback, sized via --ag-ui-icon-size. */
.icon-holder {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex: none;
  width: var(--_icon-size);
  height: var(--_icon-size);
  line-height: 1;
}

.icon-img {
  width: 100%;
  height: 100%;
  object-fit: contain;
  border-radius: var(--_icon-radius);
}

.header-controls {
  display: flex;
  gap: var(--_header-gap);
  flex: none;
}

.header-btn {
  display: inline-flex;
  flex: 0 0 auto;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  width: var(--_header-btn-size);
  height: var(--_header-btn-size);
  border: none;
  background: transparent;
  color: inherit;
  font: inherit;
  line-height: 1;
  padding: 0;
  border-radius: 6px;
  cursor: pointer;
  opacity: 0.85;
}

.header-btn:hover {
  opacity: 1;
  background: rgba(255, 255, 255, 0.18);
}

/* \u2500\u2500 Collapse \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
   Collapsing shrinks the widget to the round floating launcher: the panel
   scales toward the launcher's corner and fades, the launcher pops in from the
   same point. Both halves are transform and opacity only, so the morph runs on
   the compositor and never reflows the host page.

   The host box keeps its expanded size, since animating it would animate
   layout and a dragged --ag-ui-width would fight the launcher's own size.
   Nothing paints there once the panel is gone, so the box only has to stop
   swallowing clicks: pointer events go to none and the launcher takes them.

   Two placements do not use it: "sidebar" slides to its rail (below), and
   "embedded" keeps its header bar, having no corner for a floating circle that
   would escape the host's layout. "page" has no collapsed state at all. */
:host([collapsed]) {
  pointer-events: none;
  /* A collapsed host has to be allowed to shrink, and in the layout hosts
     actually use it is not. Every collapse path here works by letting the host
     size to its content -- the in-flow ones set height: auto, the floating one
     leaves only the launcher -- and a flex or grid parent whose align-items is
     the default stretch value overrides all of it. The panel then hides and the box
     it occupied stays: a header bar over several hundred pixels of nothing.
     Every known consumer hit this, because putting the element in a flex column
     beside the page content is the obvious way to embed it. */
  align-self: start;
}

:host([collapsed]) .chat {
  opacity: 0;
  transform: scale(0.94);
  visibility: hidden;
}

/* visibility keeps the panel out of the tab order and the a11y tree at rest
   without display:none killing the transition. It interpolates so any progress
   below 1 still counts as visible: the panel stays on screen for the whole
   collapse, flips hidden exactly at the end, and on expand is visible from the
   first frame. */
.chat {
  transform-origin: bottom right;
  transition:
    opacity var(--_motion) var(--_ease),
    transform var(--_motion) var(--_ease),
    visibility var(--_motion) var(--_ease);
}

:host([placement="bottom-left"]) .chat {
  transform-origin: bottom left;
}

/* Once the launcher has been dragged the element places itself, and stamps the
   corner it chose to open away from. The morph has to start at that same
   corner: scaling out of the one the placement originally guessed reads as the
   panel leaping across the screen before it opens.

   Equal specificity to the placement rule above, so source order is what lets
   the stamped value win -- the same arrangement the resize grip uses, and the
   same trap. Write these with = on the whole hyphenated token; a ~= would match
   whitespace-separated words and so could never match at all. */
:host([data-expand-corner="top-left"]) .chat {
  transform-origin: top left;
}

:host([data-expand-corner="top-right"]) .chat {
  transform-origin: top right;
}

:host([data-expand-corner="bottom-left"]) .chat {
  transform-origin: bottom left;
}

:host([data-expand-corner="bottom-right"]) .chat {
  transform-origin: bottom right;
}

/* The in-flow placement keeps the original collapse: hide the body, let the
   host shrink to the header bar. */
:host([collapsed][placement="embedded"]) {
  height: auto;
  max-height: none;
  pointer-events: auto;
}

:host([collapsed][placement="embedded"]) .chat {
  opacity: 1;
  transform: none;
  visibility: visible;
}

/* It keeps the header bar, so the launcher must stay out of the way: an
   embedded host is position: static, which would let an absolutely-positioned
   circle escape the layout and land against whatever the page positions. */
:host([collapsed][placement="embedded"]) .launcher {
  visibility: hidden;
  opacity: 0;
}

:host([collapsed][placement="embedded"]) .messages-wrap,
:host([collapsed][placement="embedded"]) .messages,
:host([collapsed][placement="embedded"]) .input-row,
:host([collapsed][placement="embedded"]) .skill-chips,
:host([collapsed][placement="embedded"]) .skill-palette,
:host([collapsed][placement="embedded"]) .skill-hint {
  display: none;
}

/* The page placement has no collapsed state, so it offers no control for one.
   A dedicated route has no "away" to go to: shrinking it left a strip of
   application chrome fixed over a route that no longer had an owner, and this
   is the one placement where the launcher that would bring it back is hidden.

   Hiding the control is only half of it. The state has another way in -- the
   attribute can be written straight onto the element, and a value stored under
   a different placement is restored on connect -- and the JS guards that catch
   those cannot see an attribute set directly. So the placement neutralises the
   state here as well: with the collapse rules above no longer naming "page", an
   unguarded collapsed attribute would otherwise fall through to the generic
   rule that scales the panel away and drops pointer events, leaving nothing on
   screen and no launcher to press. */
:host([placement="page"]) .header-btn--collapse {
  display: none;
}

:host([placement="page"][collapsed]) {
  pointer-events: auto;
  align-self: auto;
}

:host([placement="page"][collapsed]) .chat {
  opacity: 1;
  transform: none;
  visibility: visible;
}

/* Jump-to-latest: shown only once the reader has scrolled away *and* missed
   something. Anchored to the panel rather than the list so it does not scroll
   with the content it is offering to scroll to. */
/* The transcript's own box, and the only one whose foot is the transcript's
   foot. The panel's foot is below the composer, the chips and the footer. */
.messages-wrap {
  position: relative;
  flex: 1;
  min-height: 0;
  display: flex;
  flex-direction: column;
}

.jump-latest {
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  bottom: var(--_pad);
  z-index: 2;
  display: none;
  align-items: center;
  gap: 0.35em;
  padding: 0.4em 0.9em;
  border: 1px solid var(--_border);
  border-radius: 999px;
  /* A raised surface, not the panel's own background. Reusing --_bg made the
     pill the same colour as everything behind it, leaving a 1px border and a
     shadow to carry the whole affordance -- and a dark-on-dark shadow carries
     nothing. --_hover is the token that already means "lifted off the panel",
     and it separates in both themes without competing with the accent the send
     button owns. */
  background: var(--_hover);
  color: var(--_text);
  font: inherit;
  font-size: 0.85em;
  cursor: pointer;
  box-shadow: 0 2px 10px rgb(0 0 0 / 0.18);
}

.jump-latest[data-missed="true"] {
  display: flex;
}

.jump-latest:hover {
  border-color: var(--_accent);
}

/* The offer to quote a selection. Positioned in script against the transcript
   box, which is the only ancestor whose top and foot are the transcript's --
   the same reason .jump-latest lives here. The translate is the half the
   script does not do: script sets the point the offer hangs from, CSS decides
   which corner of the offer that point is. */
.quote-selection {
  position: absolute;
  z-index: 2;
  transform: translate(-50%, -100%);
  padding: 0.25em 0.7em;
  border: 1px solid var(--_border);
  border-radius: 999px;
  background: var(--_hover);
  color: var(--_text);
  font: inherit;
  font-size: 0.8em;
  line-height: 1.6;
  white-space: nowrap;
  cursor: pointer;
  box-shadow: 0 2px 10px rgb(0 0 0 / 0.18);
}

/* Flipped under the selection when there was no room above it. Only the
   vertical half of the translate changes: it still hangs from its own centre
   horizontally. */
.quote-selection[data-below="true"] {
  transform: translate(-50%, 0);
}

.quote-selection:hover {
  border-color: var(--_accent);
}

/* Screen-reader-only status region. Off-screen rather than display:none or
   visibility:hidden, both of which take the element out of the accessibility
   tree entirely -- a hidden live region announces nothing at all, which is the
   classic way this pattern is written wrong.

   The 1px box with clip-path, rather than width/height 0, is the shape that
   survives: a zero-sized element is dropped from the tree by some engines. */
/* A used-value reader for the four viewport-inset tokens, and the only
   reliable one. getComputedStyle().getPropertyValue() on an unregistered
   custom property hands back the substituted token stream, not a length: it
   returns "4rem" verbatim, and "calc(56px + env(safe-area-inset-top))" as
   "calc(56px + 0px)" -- which parses as NaN and takes the whole inset with it.
   Padding is a real property, so the same tokens come back resolved to px.

   visibility rather than display: none, because a box that generates no
   layout has no used values to read. Zero-sized, absolutely positioned and
   inert, so it costs nothing but the read. */
.viewport-probe {
  position: absolute;
  top: 0;
  left: 0;
  width: 0;
  height: 0;
  visibility: hidden;
  pointer-events: none;
  padding: var(--_viewport-inset-top) var(--_viewport-inset-right)
    var(--_viewport-inset-bottom) var(--_viewport-inset-left);
}

.sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  margin: -1px;
  padding: 0;
  border: 0;
  overflow: hidden;
  white-space: nowrap;
  clip-path: inset(50%);
}

.messages {
  flex: 1;
  overflow-y: auto;
  /* Scrolling past the end of this must not scroll the page behind it. */
  overscroll-behavior: contain;
  /* The browser's own scroll anchoring competes with the scroller for the same
     job and wins unpredictably -- it can hold the view still exactly when we
     want to follow. Turned off so following is decided in one place. Safari
     does not implement it, which is itself a reason not to depend on it. */
  overflow-anchor: none;
  padding: var(--_pad);
  display: flex;
  flex-direction: column;
  gap: var(--_space);
}

/* Empty-state region (slot): centred while it's the only thing in the
   list, hidden as soon as a message, card, or pending indicator renders. */
.empty {
  margin: auto;
  text-align: center;
  color: var(--_muted);
}

.empty[hidden] {
  display: none;
}

/* The greeting layout: a greeting over an empty conversation, and the
   composer centred beneath it until the conversation has something in it.

   On by default for the page placement, where a conversation is the whole
   route; data-greeting="off" turns it off there. An embedded panel opts in
   with any other data-greeting value. No other placement has it: a panel
   opened from a launcher is already mid-task, and a greeting in a corner
   panel costs space and says little.

   The greeting itself renders under every placement and is hidden here, so a
   placement switch at runtime needs nothing from script. */
.greeting {
  display: none;
}

:host([placement="page"]:not([data-greeting="off"])) .greeting,
:host([placement="embedded"][data-greeting]:not([data-greeting="off"])) .greeting {
  display: block;
  margin-block-end: calc(var(--_space) * 2);
  font-family: var(--_greeting-font);
  font-size: var(--_greeting-size);
  font-weight: 500;
  line-height: 1.2;
  color: var(--_fg);
  overflow-wrap: anywhere;
}

/* Centring is two equal flexible boxes either side of the composer rows: the
   transcript above, which already grows, and this one below. Equal zero bases
   make the two halves the same height whatever they hold, so the rows sit in
   the middle of the panel below its header, and stay there as a draft, an
   attachment tray or a hint grows them, because growth splits into both
   halves at once.

   A pseudo element rather than a node, so no host layout and nothing that
   counts children can see it. It exists whether or not the conversation is
   empty and only its growth changes, because a box that appears and
   disappears is a box nothing can ever transition.

   Only the rule that generates it names the placements. The one that grows it
   needs nothing but the state: where the first rule does not apply there is no
   box to grow. The box is empty, so its automatic basis is already zero, the
   same as the transcript's; nothing here writes the flex shorthand, because
   this selector is the more specific of the two and a shorthand would win
   over the growth. */
:host([placement="page"]:not([data-greeting="off"])) .chat::after,
:host([placement="embedded"][data-greeting]:not([data-greeting="off"])) .chat::after {
  content: "";
}

/* Not while a restore is in flight: a conversation a remote store is still
   fetching is more likely to have messages than not, and centring it first
   would drop the composer the moment they land. */
:host([data-empty]:not([data-restoring])) .chat::after {
  flex-grow: 1;
}

/* Only the send that leaves the empty state travels. The element arms this for
   that one change and disarms it whenever the transcript is cleared, so a
   restored conversation, a thread switch and a new chat all snap. Growth rather
   than a transform, because the rows between the transcript and the composer
   move with it, and growth is continuous where a reorder is not. Reduced motion
   needs no rule of its own: the motion token already collapses to a frame
   there.

   The rule over the composer fades in over the same stretch. Appearing at once,
   it was drawn across the page at the composer's destination while the
   composer was still on its way there. */
:host([data-composer-settling]) .chat::after {
  transition: flex-grow var(--_motion) var(--_ease);
}

:host([data-composer-settling]) .input-row {
  transition: border-color var(--_motion) var(--_ease);
}

/* The greeting and whatever the host slotted sit at the foot of the upper
   half, directly over the composer, rather than floating in its middle. The
   region is hidden once the conversation has content, so this needs no state
   of its own. */
:host([placement="page"]:not([data-greeting="off"]):not([data-restoring])) .empty,
:host([placement="embedded"][data-greeting]:not([data-greeting="off"]):not([data-restoring])) .empty {
  margin: auto auto 0;
}

/* The rule over the composer separates it from a transcript. Over nothing it
   is a line drawn across the middle of the page. */
:host([placement="page"][data-empty]:not([data-greeting="off"]):not([data-restoring])) .input-row,
:host([placement="embedded"][data-greeting][data-empty]:not([data-greeting="off"]):not([data-restoring])) .input-row {
  border-block-start-color: transparent;
}

/* On a phone the composer stays at the foot and the greeting takes the room
   above it, which is the other way round from everything above.

   Centring is a shape for a screen with room to spare: the composer reads as
   the one thing on the page, and whichever way the rows grow there is space
   left on both sides of them. A phone has no space to spare, and the keyboard
   is what takes it -- opening one leaves a 426px-tall visible area with the
   composer halfway up it and an empty band underneath, which is the half of
   the screen a thumb is already resting on. Docked, the field sits directly
   over the keyboard, where every chat on the platform puts it, and the
   greeting keeps the rest.

   Both rules restate the selector they override, with the breakpoint's own
   opt-out added: this is part of the shape a host keeps its desktop layout
   instead of, so it goes the same way as the rest of that shape. Restating
   rather than adding conditions to the originals keeps each of those rules
   readable as one decision, and source order settles the pair. */
@media (max-width: 600px) {
  :host([data-empty]:not([data-restoring]):not([data-small-viewport="off"])) .chat::after {
    flex-grow: 0;
  }

  /* The empty region fills the transcript instead of being centred in it as a
     block, so the two things in it can go to different places: the prompts the
     host offers to the foot, against the composer, and the greeting to the
     middle of what they leave.

     A prompt chip is a way into the conversation. Against the field it starts,
     it reads as one; under the greeting halfway up the panel, with the field
     at the foot, it reads as decoration next to something else. Nothing here
     moves them on a screen where the composer is still centred: there the
     whole region hangs at the foot of the upper half, directly over the
     composer, and the prompts are already against it.

     Auto block margins on the greeting are what centre it, and they take the
     free space whether or not there are prompts below to leave any, so a host
     that offers none gets a greeting in the middle of the transcript rather
     than one clinging to the composer.
     The region declares a display here, which outranks the rule collapsing a
     hidden one, so it says it is not hidden itself. Nothing sets the two
     apart today -- the transcript writes the hidden property and the host's
     data-empty from one expression -- and that is exactly why: a rule holding
     because of how a method in another file happens to be written is a rule
     holding by luck. */
  :host([placement="page"][data-empty]:not([data-greeting="off"]):not([data-restoring]):not([data-small-viewport="off"])) .empty:not([hidden]),
  :host([placement="embedded"][data-greeting][data-empty]:not([data-greeting="off"]):not([data-restoring]):not([data-small-viewport="off"])) .empty:not([hidden]) {
    margin: 0;
    flex: 1;
    display: flex;
    flex-direction: column;
  }

  :host([placement="page"][data-empty]:not([data-greeting="off"]):not([data-restoring]):not([data-small-viewport="off"])) .greeting,
  :host([placement="embedded"][data-greeting][data-empty]:not([data-greeting="off"]):not([data-restoring]):not([data-small-viewport="off"])) .greeting {
    margin-block: auto;
  }
}

/* Nor does the greeting paint while a restore is in flight. Hidden rather than
   removed, so it keeps its place and nothing around it moves when it shows. */
:host([data-restoring]) .greeting {
  visibility: hidden;
}

/* \u2500\u2500 Answer group / well \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
   One .answer per assistant turn wraps the streamed text, its tool cards,
   and the pending indicator so a whole answer reads (and can be boxed) as one
   unit. A flex column on the message-list gap, stretched to the list width so
   its children keep their own left/right alignment. data-answer-well opts into
   the bordered "well"; without it the turn renders as a flat stack. */
.answer {
  display: flex;
  flex-direction: column;
  gap: var(--_space);
  align-self: stretch;
  min-width: 0;
}

:host([data-answer-well]) .answer {
  padding: var(--_pad);
  background: var(--_well-bg);
  border: 1px solid var(--_well-border);
  border-radius: var(--_well-radius);
}

.message {
  max-width: 80%;
  padding: var(--_msg-pad);
  border-radius: var(--_msg-radius);
  line-height: 1.4;
  white-space: pre-wrap;
  /* overflow-wrap, not word-break, and the difference is the whole reason a
     markdown table used to be unreadable.

     Both stop one long unbroken token blowing out the bubble, which is all this
     is for. But word-break: break-word is the legacy spelling of "break
     anywhere", and breaking anywhere drops the *min-content* width of every
     descendant to one character. A table's column algorithm takes min-content
     as an input, so the table always fitted max-width: 100%, the overflow-x:
     auto below it never had anything to scroll, and the columns absorbed the
     pressure by rendering one letter per line instead. A seven-column header
     came out 162px tall.

     overflow-wrap: break-word breaks a word only when it would otherwise
     overflow its line, and leaves min-content alone -- so the bubble is still
     protected and the table is free to be wider than the panel and scroll. */
  overflow-wrap: break-word;
}

/* \u2500\u2500 Incoming-text animations (data-text-animation) \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */
/* .message--restored (rehydrated history) is excluded: entrance animations are
   for freshly-arriving messages, not the whole transcript replaying on reload.
   Word mode is excluded implicitly \u2014 restored bubbles aren't wrapped. */
:host([data-text-animation="fade"]) .message--assistant:not(.message--restored) {
  animation: ag-ui-msg-fade 0.25s ease both;
}

@keyframes ag-ui-msg-fade {
  from { opacity: 0; transform: translateY(4px); }
  to { opacity: 1; transform: none; }
}

.message--assistant .word {
  animation: ag-ui-word-in 0.3s ease both;
  animation-delay: calc(var(--ag-ui-word-index, 0) * 35ms);
}

@keyframes ag-ui-word-in {
  from { opacity: 0; }
  to { opacity: 1; }
}

@media (prefers-reduced-motion: reduce) {
  :host([data-text-animation="fade"]) .message--assistant,
  .message--assistant .word {
    animation: none;
  }
}

.message--user {
  align-self: flex-end;
  background: var(--_user-bg);
  color: var(--_user-fg);
  border-bottom-right-radius: 4px;
}

.message--assistant {
  align-self: flex-start;
  background: var(--_assistant-bg);
  border-bottom-left-radius: 4px;
  /* Assistant bubbles hold rendered markdown/HTML, so collapse the source
     whitespace the renderer leaves between block tags. */
  white-space: normal;
}

/* Rendered-markdown elements inside an assistant bubble. */
.message--assistant > :first-child {
  margin-top: 0;
}

.message--assistant > :last-child {
  margin-bottom: 0;
}

.message--assistant p,
.message--assistant ul,
.message--assistant ol,
.message--assistant blockquote,
.message--assistant pre {
  margin: 0.5em 0;
}

.message--assistant ul,
.message--assistant ol {
  padding-left: 1.3em;
}

.message--assistant a {
  color: var(--_accent);
  text-decoration: underline;
}

.message--assistant code {
  font-family: ui-monospace, "SF Mono", Menlo, monospace;
  font-size: 0.92em;
  background: rgba(127, 127, 127, 0.16);
  padding: 1px 4px;
  border-radius: 4px;
}

.message--assistant pre {
  padding: 8px 10px;
  overflow: auto;
  /* Scrolling past the end of this must not scroll the page behind it. */
  overscroll-behavior: contain;
  background: var(--_bg);
  border: 1px solid var(--_border);
  border-radius: 6px;
}

.message--assistant pre code {
  background: none;
  padding: 0;
}

/* The copy button sits inside the block, so it scrolls with wide code rather
   than floating over the bubble. Positioning is on the pre; the button only
   appears once one has been attached. */
.message--assistant pre.has-copy {
  position: relative;
}

/* The only reader of --ag-ui-surface and --ag-ui-text. Their defaults are
   transparent and the body foreground, which is what this button rendered as
   before either token existed; changing them repaints only this control. */
.code-copy {
  position: absolute;
  top: 4px;
  right: 4px;
  padding: 2px 8px;
  font: inherit;
  font-size: 0.75em;
  line-height: 1.6;
  color: var(--_muted);
  background: var(--_surface);
  border: 1px solid var(--_border);
  border-radius: 4px;
  cursor: pointer;
  opacity: 0;
  transition: opacity 0.12s ease;
}

/* Revealed on hover or keyboard focus. Focus matters as much as hover here:
   hidden-until-hover is invisible to a keyboard user otherwise. */
.message--assistant pre.has-copy:hover .code-copy,
.code-copy:focus-visible {
  opacity: 1;
}

.code-copy:hover {
  color: var(--_text);
  background: var(--_hover);
}

.code-copy[data-state="copied"] {
  opacity: 1;
  color: var(--_text);
}

.code-copy[data-state="failed"] {
  opacity: 1;
  color: var(--_danger, var(--_text));
}

.message--assistant blockquote {
  padding-left: 10px;
  border-left: 3px solid var(--_border);
  color: var(--_muted);
}

/* Markdown tables. table/thead/tbody/tr/th/td are all in the sanitizer's
   ALLOWED_TAGS, so an agent can emit one. A wide table must scroll inside its
   own box rather than stretch the message: the bubble is width-constrained, so
   without this the columns either crush or push the layout sideways. */
.message--assistant table {
  display: block;
  width: fit-content;
  max-width: 100%;
  overflow-x: auto;
  border-collapse: collapse;
  font-size: 0.95em;
}

.message--assistant th,
.message--assistant td {
  padding: 6px 10px;
  border: 1px solid var(--_border);
  text-align: left;
  vertical-align: top;
}

.message--assistant th {
  background: var(--_hover);
  font-weight: 600;
}

.pending {
  align-self: flex-start;
  display: inline-flex;
  gap: 4px;
  align-items: center;
  padding: 12px 14px;
  background: var(--_assistant-bg);
  border-radius: 14px;
  border-bottom-left-radius: 4px;
}

.pending-dot {
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: var(--_muted);
  animation: ag-ui-pending 1.2s infinite ease-in-out both;
}

.pending-dot:nth-child(2) {
  animation-delay: 0.16s;
}

.pending-dot:nth-child(3) {
  animation-delay: 0.32s;
}

@keyframes ag-ui-pending {
  0%, 80%, 100% { opacity: 0.3; transform: translateY(0); }
  40% { opacity: 1; transform: translateY(-3px); }
}

@media (prefers-reduced-motion: reduce) {
  .pending-dot {
    animation: none;
    opacity: 0.6;
  }
}

/* \u2500\u2500 Thoughts region \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
   A muted, collapsible chain-of-thought at the top of the answer group: open
   while the model reasons, folded once the answer text starts. */
.thoughts {
  align-self: stretch;
  display: flex;
  flex-direction: column;
  gap: 4px;
  font-size: 12px;
  color: var(--_muted);
}

.thoughts-toggle {
  align-self: flex-start;
  border: none;
  padding: 0;
  background: none;
  font: inherit;
  font-size: 12px;
  font-weight: 600;
  color: var(--_muted);
  cursor: pointer;
}

.thoughts-toggle::before {
  content: var(--_disclosure-expanded) " ";
}

.thoughts-toggle[aria-expanded="false"]::before {
  content: var(--_disclosure-collapsed) " ";
}

/* A gentle pulse on the label while reasoning is still streaming. */
.thoughts[data-streaming] .thoughts-label {
  animation: ag-ui-thoughts-pulse 1.4s ease-in-out infinite;
}

@keyframes ag-ui-thoughts-pulse {
  0%, 100% { opacity: 0.55; }
  50% { opacity: 1; }
}

.thoughts-body {
  margin: 0;
  padding: 4px 0 4px 10px;
  border-left: 2px solid var(--_border);
  max-height: 220px;
  overflow: auto;
  /* Scrolling past the end of this must not scroll the page behind it. */
  overscroll-behavior: contain;
  white-space: pre-wrap;
  word-break: break-word;
  font-family: inherit;
}

.thoughts-body[hidden] {
  display: none;
}

@media (prefers-reduced-motion: reduce) {
  .thoughts[data-streaming] .thoughts-label {
    animation: none;
  }
}

.tool-call {
  align-self: flex-start;
  max-width: 80%;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  gap: 6px;
  font-size: 12px;
  font-family: ui-monospace, "SF Mono", Menlo, monospace;
  padding: 8px 10px;
  border-radius: 8px;
  background: var(--_tool-bg);
  border: 1px solid var(--_border);
  color: var(--_tool-fg);
}

/* Wraps, because the name is the only flexible child and every badge the row
   gains is taken out of it. An approved call adds a third fixed badge, which in
   a sidebar-width panel left the name 37px and broke it mid-word. Badges drop to
   their own row instead. */
.tool-call-head {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  gap: 8px;
}

.tool-call-name {
  /* An auto basis, and a min-width floor rather than zero: the name may shrink,
     but not below something readable, so wrapping moves a badge instead of
     shredding a word. Breaking anywhere still applies to a name that cannot fit
     on a line of its own, which is what keeps a long unbroken tool name inside
     the card. */
  flex: 1 1 auto;
  min-width: 6ch;
  font-weight: 600;
  overflow-wrap: anywhere;
}

/* Leading status icon. Empty in the DOM \u2014 the glyph/spinner is drawn
   here from the card's data-status, so it stays themeable. */
.tool-call-icon {
  flex: none;
  box-sizing: border-box;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 14px;
  height: 14px;
  font-size: 12px;
  line-height: 1;
}

/* Pending: a real spinning ring. Speed is tunable; reduced motion stops it. */
.tool-call[data-status="pending"] .tool-call-icon {
  border: 2px solid var(--_muted);
  border-top-color: transparent;
  border-radius: 50%;
  animation: ag-ui-tool-spin var(--_tool-spin-duration) linear infinite;
}

@keyframes ag-ui-tool-spin {
  to { transform: rotate(360deg); }
}

/* Deferred: no spinner, because nothing is spinning. A steady accent dot, since
   the state is waiting-on-you rather than an outcome. */
.tool-call[data-status="deferred"] .tool-call-icon {
  border-radius: 50%;
  background: var(--_accent);
}

/* Settled: a themeable glyph coloured by outcome. */
.tool-call[data-status="done"] .tool-call-icon::before {
  content: var(--_tool-icon-done);
  color: var(--_success);
}

.tool-call[data-status="error"] .tool-call-icon::before {
  content: var(--_tool-icon-error);
  color: var(--_danger);
}

.tool-call[data-status="declined"] .tool-call-icon::before {
  content: var(--_tool-icon-declined);
  color: var(--_muted);
}

/* Not finished: muted like declined, since nothing failed, but its own glyph,
   since nobody refused it either. */
.tool-call[data-status="interrupted"] .tool-call-icon::before {
  content: var(--_tool-icon-interrupted);
  color: var(--_muted);
}

@media (prefers-reduced-motion: reduce) {
  .tool-call[data-status="pending"] .tool-call-icon {
    animation: none;
  }
}

/* Inline display mode: the lightest card. Drop the box chrome so the status row
   reads as one line of the answer; the result toggle still expands below it. */
:host([data-tool-display="inline"]) .tool-call {
  max-width: 100%;
  background: transparent;
  border: none;
  padding: 2px 0;
  gap: 2px;
}

.tool-call-status {
  flex: none;
  padding: 1px 8px;
  border-radius: 999px;
  font-size: 11px;
  font-weight: 600;
  background: rgba(127, 127, 127, 0.16);
  color: var(--_muted);
}

.tool-call[data-status="deferred"] .tool-call-status {
  color: var(--_accent);
}

.tool-call[data-status="done"] .tool-call-status {
  color: var(--_success);
}

.tool-call[data-status="error"] .tool-call-status {
  color: var(--_danger);
}

.tool-call[data-status="declined"] .tool-call-status,
.tool-call[data-status="interrupted"] .tool-call-status {
  color: var(--_muted);
}

.tool-call-body {
  display: flex;
  flex-direction: column;
  gap: 6px;
}

.tool-call-section {
  display: flex;
  flex-direction: column;
  gap: 3px;
}

/* A call with no arguments drops the region rather than framing an empty
   object, and a settled card drops the result region until it has one -- both
   by setting the hidden property, and an author display beats the user-agent
   rule for that attribute. Without this the region kept laying out: 42px of
   card holding the ARGUMENTS heading over nothing, on every call the agent
   made with no arguments, in the display mode that shows arguments by
   default. */
.tool-call-section[hidden] {
  display: none;
}

/* The heading that tells the two payloads apart. Without it the arguments and
   the result were one run of text and a reader had to guess the boundary. */
.tool-call-section-label {
  font-size: 10px;
  font-weight: 700;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  color: var(--_muted);
}

.skill-item-token {
  font-family: ui-monospace, "SF Mono", Menlo, monospace;
  font-size: 0.92em;
  color: var(--_accent);
  margin-right: 6px;
}

/* The lasting record of a human decision on a gated call \u2014 without it an
   approved call looks exactly like one that was never gated. */
.tool-call-decision {
  flex: none;
  font-size: 11px;
  font-style: italic;
  color: var(--_muted);
}

.tool-call-args,
.tool-call-result {
  margin: 0;
  padding: 6px 8px;
  max-height: 160px;
  overflow: auto;
  /* Scrolling past the end of this must not scroll the page behind it. */
  overscroll-behavior: contain;
  background: var(--_bg);
  border: 1px solid var(--_border);
  border-radius: 6px;
  white-space: pre-wrap;
  word-break: break-word;
  color: var(--_fg);
}

/* A region a host formatter took over, marked by the card. Preformatted
   whitespace is what makes the built-in block read as written, and it is the one
   thing a host cannot want: a table inherits it as mangled cell spacing, and a
   sentence as line breaks nobody typed.

   Whitespace only. The card's own face, frame, padding and scroll cap stay,
   because the card is one visual object -- the head row and the status pill are
   monospaced too -- and a region that dropped the family would be the only part
   of it wearing a different one. A host that wants that restyles the
   tool-card-result part, which does not need the formatter at all. */
.tool-call-args[data-formatted],
.tool-call-result[data-formatted] {
  white-space: normal;
}

/* Display modes are pure visibility over one DOM shape, selected from the host
   attribute rather than a value stamped on the card at build time, so flipping
   data-tool-display re-styles cards already on screen. See ToolCallCard.

   Default (no attribute) is the full mode: arguments always visible, result
   behind the toggle. */
.tool-call[data-expanded="false"] .tool-call-section--result {
  display: none;
}

/* Compact: one toggle over both regions, so a settled card is a single line
   until asked. */
:host([data-tool-display="compact"]) .tool-call[data-expanded="false"] .tool-call-section {
  display: none;
}

/* Inline: the result only; the call's arguments are noise at this density. */
:host([data-tool-display="inline"]) .tool-call .tool-call-section--args {
  display: none;
}

/* Minimal: the status row and nothing else, so there is no toggle to press. */
:host([data-tool-display="minimal"]) .tool-call .tool-call-toggle,
:host([data-tool-display="minimal"]) .tool-call .tool-call-body {
  display: none;
}

/* A pending card has no result yet, and in the modes where the arguments are
   hidden too there is nothing behind the toggle. Hide the control rather than
   offer one that expands onto nothing. A deferred card is the same, and its
   arguments are shown unconditionally by the rules below. */
.tool-call[data-status="pending"] .tool-call-toggle,
.tool-call[data-status="deferred"] .tool-call-toggle,
:host([data-tool-display="inline"]) .tool-call[data-status="pending"] .tool-call-toggle {
  display: none;
}

/* The approval prompt for a gated call, rendered inside that call's own card.
   Empty on every card nobody is being asked about, so it collapses instead of
   adding a gap to each one. */
.tool-call-approval:empty {
  display: none;
}

.tool-call-approval {
  margin-top: 8px;
}

/* A card that is asking a question shows what it is asking about, in every
   display mode. Three gated calls of one tool ask the same words, so the
   arguments are the only thing telling them apart, and a density setting must
   not be able to hide the answer to "which one is this". */
:host([data-tool-display="minimal"]) .tool-call[data-status="deferred"] .tool-call-body {
  display: flex;
}

/* The arguments region only, never every section: the result region carries the
   hidden attribute until a result exists, and a display value here overrides it,
   framing an empty RESULT heading under the question. */
:host([data-tool-display="compact"]) .tool-call[data-status="deferred"] .tool-call-section--args,
:host([data-tool-display="inline"]) .tool-call[data-status="deferred"] .tool-call-section--args {
  display: flex;
}

/* A delegated sub-agent's progress, inside the card that delegated. Empty on
   every card that delegated nothing, so it collapses rather than adding a gap
   to each one -- the same shape the approval slot uses. */
.tool-call-subagent:empty {
  display: none;
}

.tool-call-subagent {
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.subagent {
  display: flex;
  flex-direction: column;
  gap: 4px;
  min-width: 0;
}

/* The collapsed row is the status and the expander at once, which is what keeps
   a ten-step child one row until somebody opens it. Full width and left-aligned,
   because it is a line of the card rather than a button on it. */
.subagent-row {
  display: flex;
  align-items: center;
  gap: 6px;
  width: 100%;
  box-sizing: border-box;
  padding: 2px 0;
  border: none;
  background: none;
  font: inherit;
  text-align: left;
  color: var(--_muted);
  cursor: pointer;
}

/* Nothing behind the row yet -- a delegation that failed before calling
   anything. Drop the affordances rather than offer a control that expands onto
   an empty region, which is the refusal the card's own toggle already makes. */
.subagent-row:disabled {
  cursor: default;
}

.subagent-row::after {
  content: var(--_disclosure-collapsed);
  flex: none;
  margin-left: auto;
  color: var(--_accent);
}

.subagent-row[aria-expanded="true"]::after {
  content: var(--_disclosure-expanded);
}

.subagent-row:disabled::after {
  display: none;
}

/* Empty in the DOM; the glyph is drawn here from the panel's data-phase, so a
   host re-themes it through the same tool-icon custom properties the card uses. */
.subagent-icon {
  flex: none;
  box-sizing: border-box;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 10px;
  height: 10px;
  font-size: 10px;
  line-height: 1;
}

/* Anything that is not a terminal phase is the child still working. Selected by
   what it is not, so a phase this client has not heard of still spins rather
   than rendering as a blank. */
.subagent[data-phase]:not([data-phase="finished"]):not([data-phase="failed"]) .subagent-icon {
  border: 2px solid var(--_muted);
  border-top-color: transparent;
  border-radius: 50%;
  animation: ag-ui-tool-spin var(--_tool-spin-duration) linear infinite;
}

.subagent[data-phase="finished"] .subagent-icon::before {
  content: var(--_tool-icon-done);
  color: var(--_success);
}

.subagent[data-phase="failed"] .subagent-icon::before {
  content: var(--_tool-icon-error);
  color: var(--_danger);
}

@media (prefers-reduced-motion: reduce) {
  .subagent .subagent-icon {
    animation: none;
  }
}

/* The server's own pre-rendered line. Shrinks and wraps rather than pushing the
   chevron out of the card, which is what a fixed-width sibling in a flex row
   does to a panel at sidebar width. */
.subagent-status {
  flex: 1 1 auto;
  min-width: 0;
  overflow-wrap: anywhere;
}

/* The child's own calls. Indented and ruled, so the nesting is visible without
   a second card frame around it. */
.subagent-steps {
  display: flex;
  flex-direction: column;
  gap: 2px;
  margin-left: 4px;
  padding-left: 10px;
  border-left: 1px solid var(--_border);
}

.subagent-steps[hidden] {
  display: none;
}

.subagent-step {
  display: flex;
  align-items: center;
  gap: 6px;
  min-width: 0;
  color: var(--_muted);
}

.subagent-step-icon {
  flex: none;
  box-sizing: border-box;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 8px;
  height: 8px;
  font-size: 9px;
  line-height: 1;
}

/* No outcome yet: the wire says null while the call is in flight, and the
   absence of the attribute is how that arrives here. A hollow ring, not a
   spinner -- several can be on screen at once and the row above already spins. */
.subagent-step:not([data-ok]) .subagent-step-icon {
  border: 1px solid var(--_muted);
  border-radius: 50%;
}

.subagent-step[data-ok="true"] .subagent-step-icon::before {
  content: var(--_tool-icon-done);
  color: var(--_success);
}

.subagent-step[data-ok="false"] .subagent-step-icon::before {
  content: var(--_tool-icon-error);
  color: var(--_danger);
}

.subagent-step-name {
  flex: 1 1 auto;
  min-width: 0;
  overflow-wrap: anywhere;
}

.tool-call-toggle {
  align-self: flex-start;
  border: none;
  padding: 0;
  background: none;
  font: inherit;
  font-weight: 600;
  color: var(--_accent);
  cursor: pointer;
}

.tool-call-toggle::before {
  content: var(--_disclosure-collapsed) " ";
}

.tool-call-toggle[aria-expanded="true"]::before {
  content: var(--_disclosure-expanded) " ";
}

/* Resize grips: every edge and every corner, so the panel can be dragged from
   whichever side the reader is already near. Absent entirely where the
   placement is full-bleed, since there is nothing to drag.

   The whole set is always laid out. Which edges the *layout* pins is not a
   question the stylesheet needs to answer any more -- it decided where the one
   grip went, and there is no longer one grip. The element still measures and
   stamps data-resize-anchor, because it decides what a drag on a pinned edge
   costs in position and which grip carries the tab stop, but no rule here
   reads it. */
.resize-handle {
  position: absolute;
  z-index: 2;
  background: transparent;
  touch-action: none;
}

.resize-handle:focus-visible {
  outline: 2px solid var(--_accent);
  outline-offset: -2px;
}

/* Corners first in the file and last in the DOM, so they take the pointer
   where they overlap an edge strip. */
.resize-handle--top-left,
.resize-handle--top-right,
.resize-handle--bottom-left,
.resize-handle--bottom-right {
  width: var(--_grip-corner);
  height: var(--_grip-corner);
}

.resize-handle--top-left {
  top: 0;
  left: 0;
  cursor: nwse-resize;
}

.resize-handle--top-right {
  top: 0;
  right: 0;
  cursor: nesw-resize;
}

.resize-handle--bottom-left {
  bottom: 0;
  left: 0;
  cursor: nesw-resize;
}

.resize-handle--bottom-right {
  bottom: 0;
  right: 0;
  cursor: nwse-resize;
}

/* Edge strips, held clear of the corners at both ends so a corner drag is
   never swallowed by the edge next to it. */
.resize-handle--left,
.resize-handle--right {
  top: var(--_grip-corner);
  bottom: var(--_grip-corner);
  width: var(--_grip-edge);
  cursor: ew-resize;
}

.resize-handle--left {
  left: 0;
}

.resize-handle--right {
  right: 0;
}

.resize-handle--top,
.resize-handle--bottom {
  left: var(--_grip-corner);
  right: var(--_grip-corner);
  height: var(--_grip-edge);
  cursor: ns-resize;
}

.resize-handle--top {
  top: 0;
}

.resize-handle--bottom {
  bottom: 0;
}

/* Docked: the placement owns the height, so the horizontal edges and every
   corner are inert and must not advertise a drag that does nothing. The two
   vertical edges remain, which is the same affordance these placements had
   when there was one grip -- now on both sides, since either may be the inner
   one depending on which side the rail is docked to. */
:host([placement="sidebar"]) .resize-handle--top,
:host([placement="sidebar"]) .resize-handle--bottom,
:host([placement="sidebar"]) .resize-handle--top-left,
:host([placement="sidebar"]) .resize-handle--top-right,
:host([placement="sidebar"]) .resize-handle--bottom-left,
:host([placement="sidebar"]) .resize-handle--bottom-right,
:host([placement="side"]) .resize-handle--top,
:host([placement="side"]) .resize-handle--bottom,
:host([placement="side"]) .resize-handle--top-left,
:host([placement="side"]) .resize-handle--top-right,
:host([placement="side"]) .resize-handle--bottom-left,
:host([placement="side"]) .resize-handle--bottom-right {
  display: none;
}

/* The vertical edges run the full height once no corner shares them. */
:host([placement="sidebar"]) .resize-handle--left,
:host([placement="sidebar"]) .resize-handle--right,
:host([placement="side"]) .resize-handle--left,
:host([placement="side"]) .resize-handle--right {
  top: 0;
  bottom: 0;
  width: var(--_grip-edge-docked);
}

/* Full-bleed: nothing to drag. */
:host([placement="full"]) .resize-handle,
:host([placement="page"]) .resize-handle {
  display: none;
}

/* The visible mark on a grip.

   Filling the whole strip was what the single corner grip did, and at 14px
   square nobody ever saw it. On a strip running the length of an edge the same
   fill reads as a border the panel grew -- square ended, stopping short of the
   corner radius at both ends, and easily mistaken for a rendering fault rather
   than for something to grab.

   So the hit area stays the full strip and the mark is a short pill centred on
   it, which cannot be read as an edge of anything and never meets the radius.

   It shows on hover and focus as well as during the drag. With eight grips, a
   mark that appears only once you are already dragging is a mark that never
   told anyone the grips were there. */
.resize-handle::after {
  content: "";
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: 999px;
  background: var(--_accent);
  opacity: 0;
  transition: opacity var(--_motion) var(--_ease);
}

.resize-handle--top::after,
.resize-handle--bottom::after {
  width: var(--_grip-mark-length);
  height: var(--_grip-mark-thickness);
}

.resize-handle--left::after,
.resize-handle--right::after {
  width: var(--_grip-mark-thickness);
  height: var(--_grip-mark-length);
}

/* A corner has no length to run along, so it gets a dot instead of a pill. */
.resize-handle--top-left::after,
.resize-handle--top-right::after,
.resize-handle--bottom-left::after,
.resize-handle--bottom-right::after {
  width: var(--_grip-mark-thickness);
  height: var(--_grip-mark-thickness);
}

.resize-handle:hover::after,
.resize-handle:focus-visible::after {
  opacity: 0.5;
}

/* Equal specificity to the pair above, so source order is what makes the drag
   the stronger of the two states. */
.resize-handle[data-dragging]::after {
  opacity: 0.9;
}

/* \u2500\u2500 Composer \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
   One surface owns the border, the background and the focus ring; the field
   and its tool row sit inside it, rather than being siblings stretched to the
   textarea's height. */
.input-row {
  display: flex;
  padding: 12px;
  border-top: 1px solid var(--_border);
}

.composer {
  flex: 1;
  min-width: 0;
  display: flex;
  flex-direction: column;
  gap: 4px;
  padding: 6px 6px 6px 10px;
  background: var(--_input-bg);
  border: 1px solid var(--_border);
  border-radius: var(--_composer-radius);
  transition: border-color var(--_motion) var(--_ease);
}

.composer:focus-within {
  border-color: var(--_accent);
}

/* The field grows with its content (sized by #autoGrow) up to the ceiling,
   then scrolls. border-box keeps that measurement stable: with content-box the
   padding would be added to every scrollHeight read and the field would creep
   taller on each keystroke. */
.input {
  box-sizing: border-box;
  resize: none;
  max-height: var(--_composer-max-height);
  overflow-y: auto;
  /* Scrolling past the end of this must not scroll the page behind it. */
  overscroll-behavior: contain;
  padding: 6px 4px 2px;
  background: transparent;
  border: none;
  font: inherit;
  color: inherit;
  outline: none;
}

.composer-tools {
  display: flex;
  align-items: center;
  gap: 2px;
}

/* Icon buttons: quiet at rest, so the field is what the eye lands on. */
.attach-btn,
.voice-btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: var(--_tool-btn-size);
  height: var(--_tool-btn-size);
  padding: 0;
  border: none;
  border-radius: 8px;
  background: transparent;
  color: var(--_muted);
  font: inherit;
  line-height: 1;
  cursor: pointer;
  transition:
    background-color var(--_motion) var(--_ease),
    color var(--_motion) var(--_ease);
}

.attach-btn:hover,
.voice-btn:hover {
  background: var(--_hover);
  color: var(--_fg);
}

.attach-btn:disabled,
.voice-btn:disabled {
  cursor: default;
  opacity: 0.6;
}

/* The same trap the attachment tray carries a note about, two rules along: an
   author display beats the UA stylesheet's rule for the hidden property, so a
   button the element has explicitly hidden keeps laying out and painting. The
   clip is hidden until a host supplies an upload handler or an attachments URL,
   and without this it is a visible control that cannot do anything.

   The mic needs no such rule, and the asymmetry is worth knowing before adding
   one: it is not hidden when unconfigured, it is never built. The voice wiring
   returns before constructing the button, leaving only an empty voice slot that
   is display: contents. A hidden-state rule for the mic would match nothing. */
.attach-btn[hidden] {
  display: none;
}

/* Send closes the row on the right: a circle, the only filled control in the
   composer, so "the thing that acts" reads at a glance. */
.send {
  margin-left: auto;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex: none;
  width: var(--_send-size);
  height: var(--_send-size);
  padding: 0;
  border: none;
  border-radius: 50%;
  background: var(--_accent);
  color: var(--_on-accent);
  font: inherit;
  line-height: 1;
  cursor: pointer;
  transition:
    background-color var(--_motion) var(--_ease),
    transform var(--_motion) var(--_ease-pop);
}

.send:hover {
  transform: scale(1.08);
}

.send:active {
  transform: scale(0.92);
}

.send:disabled {
  opacity: 0.5;
  cursor: default;
  transform: none;
}

/* The composer button doubles as the Stop control while a run is in flight \u2014
   same circle, different glyph, so nothing moves when a run starts. */
.send[data-state="running"] {
  background: var(--_muted);
}

.send[data-state="idle"] .send-stop,
.send[data-state="running"] .send-send {
  display: none;
}

/* Glyphs \u2014 one class, painted from the button's own colour so every state
   (hover, recording, running) carries the icon with it. */
.glyph {
  width: var(--_glyph-size);
  height: var(--_glyph-size);
  fill: none;
  stroke: currentColor;
  stroke-width: var(--_glyph-stroke);
  stroke-linecap: round;
  stroke-linejoin: round;
}

.glyph--solid {
  fill: currentColor;
  stroke: none;
}

/* In an icon holder (header brand, launcher) the glyph takes the holder's size
   rather than the composer's. */
.icon-holder .glyph {
  width: 100%;
  height: 100%;
}

/* \u2500\u2500 File attachments \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */
/* The picker button sits in the composer's tool row; hidden until
   data-attachments-url. */
.attach-input {
  display: none;
}

/* The mic button's mount point; filled only once ComposerVoice.wire mounts
   the control, which it skips unless transcription is configured. */
.voice-slot {
  display: contents;
}

/* Recording: a red tint + a gentle pulse so it's clearly "live". */
.voice-btn[data-state="recording"] {
  background: var(--_danger);
  color: var(--_on-danger);
  animation: ag-ui-voice-pulse 1.2s ease-in-out infinite;
}

.voice-btn[data-state="recording"]:hover {
  background: var(--_danger);
  color: var(--_on-danger);
}

@keyframes ag-ui-voice-pulse {
  0%, 100% { opacity: 1; }
  50% { opacity: 0.6; }
}

@media (prefers-reduced-motion: reduce) {
  .voice-btn[data-state="recording"] {
    animation: none;
  }
}

/* Pending-attachments tray, above the input row; collapses (hidden) when empty. */
.attachment-slot {
  display: contents;
}

/* The padding is the only separation the tray gets: its slot is display:
   contents, so the tray is a direct child of the .chat column, and that column
   sets no gap. The bottom value keeps a chip off the composer's top edge.
   The inline value here is only the default: the page placement overrides
   padding-inline further down to compute its reading-column gutter, and wins
   on specificity whichever way this declaration is written. Read the two
   together before changing either. */
.attachment-tray {
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
  padding: 8px 12px;
}

/* The tray sets the hidden property while empty, and an author display beats
   the UA stylesheet's rule for it, so without this the empty tray keeps
   laying out and its padding is permanent dead space above the composer. */
.attachment-tray[hidden] {
  display: none;
}

.attachment-chips {
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
  margin-top: 6px;
}

/* Charts.
 *
 * The SVG scales to the column and carries no colours of its own beyond the
 * series palette, so a host restyles it the same way it restyles everything
 * else. Series colours are custom properties with fallbacks rather than fixed
 * values, and the axis furniture inherits currentColor at low opacity so it
 * reads correctly in either theme without a second palette.
 */
/* A chart is sized like a message, not like a panel: it takes the width it
   needs and stops, rather than stretching into whatever room the transcript
   has. A message bubble caps at 80% for the same reason -- widening the panel
   should not resize what is already in it. The cap is a token so a host with a
   wide panel and a real reason can raise it; the default is the width this
   renderer has always drawn at. Below the cap the block still fills its column,
   which is what a narrow panel needs. */
.chart-block {
  align-self: flex-start;
  width: 100%;
  max-width: var(--_chart-max-width);
  margin: 6px 0;
  color: var(--_fg);
}

/* The drawing fills the block's width and carries its own height in the
   viewBox, so it is laid out rather than magnified: block display keeps the
   inline baseline gap from adding a stripe under every chart. */
.chart-block svg {
  display: block;
  width: 100%;
  height: auto;
}

.chart-title {
  margin-bottom: 2px;
  font-size: 0.85em;
  font-weight: 600;
  opacity: 0.85;
}

.chart-legend {
  display: flex;
  flex-wrap: wrap;
  gap: 4px 12px;
  margin-top: 4px;
  font-size: 0.78em;
  opacity: 0.75;
}

.chart-legend-item {
  display: inline-flex;
  align-items: center;
  gap: 5px;
}

.chart-legend-swatch {
  width: 9px;
  height: 9px;
  border-radius: 2px;
  flex: 0 0 auto;
}

.run-notice {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  align-self: flex-start;
  max-width: 100%;
  margin: 2px 0;
  padding: 3px 10px;
  border: 1px dashed var(--_border);
  border-radius: 999px;
  background: transparent;
  color: var(--_muted);
  font-size: 0.8em;
  line-height: 1.4;
}

.run-notice-icon {
  flex: none;
  opacity: 0.75;
}

/* The one control a notice may carry. Quiet, because it reports something
   already done rather than asking for a decision. */
.run-notice-undo {
  flex: 0 0 auto;
  margin-inline-start: auto;
  padding: 2px 8px;
  border: 1px solid var(--_border);
  border-radius: var(--_radius);
  background: var(--_bg);
  color: var(--_accent);
  font: inherit;
  font-size: 0.9em;
  cursor: pointer;
}

.run-notice-undo:hover:not(:disabled) {
  background: var(--_hover);
}

.run-notice-undo:disabled {
  opacity: 0.5;
  cursor: default;
}

.run-notice-text {
  min-width: 0;
  overflow-wrap: anywhere;
}

/* A chip carries its own text colour because it carries its own background.
   The same chip renders in two places with opposite inherited colours: the
   composer tray gives it the panel's, a sent user bubble gives it the user
   foreground, which is white on the stock light theme and near-invisible
   against the chip. Pairing the colour with the background it belongs to makes
   both placements read alike. Overridden below for an errored chip, which
   keeps its red. */
.attachment-chip {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  /* Without this the 100% below caps the content box, so the chip still
     overflows its container by its own padding and border. Invisible while a
     character cap kept names short; routine once the container is what bounds
     the name. */
  box-sizing: border-box;
  max-width: 100%;
  padding: 4px 8px;
  border: 1px solid var(--_border);
  border-radius: 999px;
  background: var(--_assistant-bg);
  color: var(--_text);
  font-size: 0.85em;
  position: relative;
}

.attachment-chip--error {
  border-color: var(--_danger);
  color: var(--_danger);
}

/* The type mark. Painted from currentColor, so it carries the chip's state
   with it and turns red along with an errored one; muted by opacity rather
   than a colour, which is what keeps that true. Sized from the chip's own text
   rather than --ag-ui-glyph-size, the way an icon holder's glyph takes the
   holder's size: the composer's 18px buttons would make a chip button-height. */
.attachment-chip-icon {
  display: inline-flex;
  flex: none;
  opacity: 0.75;
}

.attachment-chip-icon .glyph {
  width: 1.25em;
  height: 1.25em;
}

/* No character cap: the chip is already max-width 100%, so its container is
   what bounds the name, and a fixed cap only truncated names the chip had room
   for. min-width: 0 is what lets the flex item shrink past its content, so the
   ellipsis appears at the container edge instead of the chip overflowing. */
.attachment-chip-name {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  min-width: 0;
}

.attachment-chip-size {
  color: var(--_muted);
  white-space: nowrap;
}

.attachment-chip--error .attachment-chip-size {
  color: var(--_danger);
}

/* The progress bar fills as the file uploads. */
.attachment-chip-bar {
  flex-basis: 100%;
  height: 3px;
  border-radius: 2px;
  background: var(--_border);
  overflow: hidden;
}

.attachment-chip-bar-fill {
  height: 100%;
  background: var(--_accent);
  transition: width 0.15s ease;
}

.attachment-chip-remove,
.attachment-chip-retry {
  border: none;
  background: none;
  color: inherit;
  cursor: pointer;
  padding: 0;
  line-height: 1;
  opacity: 0.7;
}

.attachment-chip-remove:hover,
.attachment-chip-retry:hover {
  opacity: 1;
}

/* A subtle outline while a file is dragged over the shell. */
.chat--dragover {
  outline: 2px dashed var(--_accent);
  outline-offset: -4px;
}

/* Muted "\u23F9 Stopped" line after a cancelled run \u2014 a note, not an error bubble. */
.stopped-note {
  align-self: flex-start;
  color: var(--_muted);
  font-size: 12px;
  padding: 2px 4px;
}

/* Inline confirmation card \u2014 lives in the transcript, no focus-stealing overlay. */
.confirm {
  align-self: stretch;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding: 12px;
  background: var(--_bg);
  border: 1px solid var(--_accent);
  border-radius: 10px;
}

.confirm[data-resolved] {
  opacity: 0.7;
  border-color: var(--_border);
}

.confirm-body {
  font-weight: 600;
}

.confirm-args {
  margin: 0;
  padding: 8px 10px;
  max-height: 140px;
  overflow: auto;
  /* Scrolling past the end of this must not scroll the page behind it. */
  overscroll-behavior: contain;
  font-size: 12px;
  font-family: ui-monospace, "SF Mono", Menlo, monospace;
  background: var(--_assistant-bg);
  border-radius: 8px;
  white-space: pre-wrap;
  word-break: break-word;
}

.confirm-actions {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  justify-content: flex-end;
}

.confirm-btn {
  border: 1px solid var(--_border);
  border-radius: 8px;
  padding: 8px 14px;
  font: inherit;
  font-weight: 600;
  cursor: pointer;
  background: var(--_bg);
  color: var(--_fg);
}

.confirm-btn:disabled {
  cursor: default;
  opacity: 0.6;
}

.confirm-btn--confirm {
  border-color: var(--_accent);
  background: var(--_accent);
  color: var(--_on-accent);
}

/* The session waiver. Deliberately the quietest of the three: it is the widest
   decision on the card, so it should be reachable without being the one the eye
   lands on when the user means to say yes once. */
.confirm-btn--always {
  font-weight: 500;
  opacity: 0.85;
}

.confirm-btn--always:hover,
.confirm-btn--always:focus-visible {
  opacity: 1;
}

/* Editable arguments on an approval card. A plain field rather than a code
   editor: it holds the JSON a card already displays, and the only interaction
   is correcting a value before letting the call run. */
.approval-edit {
  display: flex;
  flex-direction: column;
  gap: 6px;
}

.approval-args {
  box-sizing: border-box;
  width: 100%;
  resize: vertical;
  border: 1px solid var(--_border);
  border-radius: 8px;
  padding: 8px;
  font-family: ui-monospace, SFMono-Regular, Menlo, monospace;
  font-size: 0.85em;
  background: var(--_bg);
  color: var(--_fg);
}

.approval-args:focus-visible {
  border-color: var(--_accent);
  outline: none;
}

.approval-error {
  font-size: 0.85em;
  color: var(--_danger);
}

/* Message action row. Sits under a finished assistant bubble.

   The wrap is insurance rather than a fix: these buttons are glyph-only, so at
   every width tested they fit on one line and removing the wrap changes
   nothing. It is here because the confirmation row one release earlier did
   overflow when it gained a third button, off the left edge and outside its own
   card, and the difference between the two rows is only that this one's labels
   are icons today. */
.message-actions {
  display: flex;
  flex-wrap: wrap;
  gap: 4px;
  /* Negative, and that is the point. The answer group is a flex column with its
     own gap, so a positive margin here pushes the row further from the message
     it acts on than the next card is below it -- the buttons then read as
     belonging to whatever follows. Pulling back inside the gap is what makes
     them the message's own. */
  margin-top: -6px;
}

/* The row's controls are icon-only, so the box is the whole target. Sized from
   a variable a host can raise, with a floor rather than a fixed height: the
   compact density shrinks the font, and a target that shrinks with it lands
   under the 24px minimum that makes a control reliably tappable. It used to,
   at roughly 20px square. */
.message-action {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  min-width: var(--_action-size);
  min-height: var(--_action-size);
  padding: 4px;
  border: none;
  border-radius: 6px;
  font: inherit;
  line-height: 1.2;
  cursor: pointer;
  background: transparent;
  color: var(--_muted);
  opacity: 0.75;
  /* The tooltip below is positioned against this box. */
  position: relative;
}

.message-action:hover,
.message-action:focus-visible {
  opacity: 1;
  background: var(--_border);
}

.message-action-icon {
  display: inline-flex;
  width: var(--_action-icon-size);
  height: var(--_action-icon-size);
}

.message-action-icon .glyph {
  width: 100%;
  height: 100%;
}

/* The label, drawn rather than left to the browser.

   A title attribute is the usual answer and covers only half the readers: it
   never appears on keyboard focus, so tabbing onto an icon-only control shows
   nothing at all. The attribute stays for the pointer users who expect it, and
   this shows the same words on hover and on focus alike.

   Left-aligned rather than centred because the row sits at the left edge of an
   answer inside a scrolling column, and a centred tooltip on the first control
   is clipped by that column. Growing rightward keeps it inside.

   Not exposed to assistive technology: the button already carries the same
   string as its accessible name, and this would be a second copy of it. */
.message-action::after {
  content: attr(data-tooltip);
  position: absolute;
  bottom: calc(100% + 4px);
  left: 0;
  z-index: 3;
  padding: 3px 6px;
  border-radius: 4px;
  background: var(--_tooltip-bg);
  color: var(--_tooltip-fg);
  font-size: 11px;
  line-height: 1.4;
  white-space: nowrap;
  pointer-events: none;
  opacity: 0;
  transition: opacity var(--_motion) var(--_ease);
}

.message-action:hover::after,
.message-action:focus-visible::after {
  opacity: 1;
}

/* Touch has no hover to reveal it, and a tooltip that latches open under a
   finger covers the answer it belongs to. */
@media (hover: none) {
  .message-action::after {
    content: none;
  }
}

/* Touch. Separate from the width breakpoint above on purpose: width decides
   the layout, the pointer decides which controls make sense, and a touch
   laptop is coarse-pointered and wide while a narrow desktop window is
   fine-pointered and small. */
@media (pointer: coarse) {
  /* A 6px edge strip is not a control, it is a trap that eats a scroll. The
     corners are 14px, still under the 24px floor a target is meant to clear,
     and the panel has other ways to be resized on a device that has a pointer
     precise enough to grab one. */
  .resize-handle {
    display: none;
  }

  /* Platform guidance is 44pt on iOS and 48dp on Android. These sit at 28-30px,
     which clears the WCAG minimum and misses both. */
  :host {
    --_action-size: var(--ag-ui-action-size, 44px);
    --_tool-btn-size: var(--ag-ui-tool-btn-size, 44px);
    --_send-size: var(--ag-ui-send-size, 44px);
    /* Missed the first time these were raised, which left the header -- the
       widget's primary controls, and the only way to reach history, a new chat
       or the collapse -- at half the size of everything beside it. */
    --_header-btn-size: var(--ag-ui-header-btn-size, 44px);
    --_header-gap: var(--ag-ui-header-gap, 6px);
  }

  /* iOS Safari zooms the page when a control under 16px takes focus, which
     drags the whole fixed panel with it and leaves the user pinching back out
     of a chat they only wanted to type into. The composer inherits the widget
     font, which is 14px by default and 13px at compact density, so it has to
     say 16 outright -- and only ever upward, so a host that has deliberately
     set something larger keeps it. */
  .input {
    font-size: max(16px, var(--_font-size));
  }
}

.message-action[aria-pressed="true"] {
  opacity: 1;
  color: var(--_accent);
}

.message-action--confirmed {
  opacity: 1;
  color: var(--_accent);
}

/* Approval card \u2014 the server-side-tool gate (approve/deny an interrupt). */
.approval {
  align-self: stretch;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding: 12px;
  background: var(--_bg);
  border: 1px solid var(--_accent);
  border-radius: 10px;
}

.approval[data-resolved] {
  opacity: 0.7;
  border-color: var(--_border);
}

.approval-body {
  font-weight: 600;
}

.approval-actions {
  display: flex;
  gap: 8px;
  justify-content: flex-end;
}

.approval-btn {
  border: 1px solid var(--_border);
  border-radius: 8px;
  padding: 8px 14px;
  font: inherit;
  font-weight: 600;
  cursor: pointer;
  background: var(--_bg);
  color: var(--_fg);
}

.approval-btn:disabled {
  cursor: default;
  opacity: 0.6;
}

.approval-btn--approve {
  border-color: var(--_accent);
  background: var(--_accent);
  color: var(--_on-accent);
}

/* Question card \u2014 the built-in ask_user prompt (radios and/or free text). */
.question {
  align-self: stretch;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding: 12px;
  background: var(--_bg);
  border: 1px solid var(--_accent);
  border-radius: 10px;
}

.question[data-resolved] {
  opacity: 0.7;
  border-color: var(--_border);
}

.question-body {
  font-weight: 600;
}

.question-options {
  display: flex;
  flex-direction: column;
  gap: 6px;
}

.question-choice {
  display: flex;
  align-items: center;
  gap: 8px;
  cursor: pointer;
}

.question-input {
  box-sizing: border-box;
  width: 100%;
  padding: 8px 10px;
  font: inherit;
  color: var(--_fg);
  background: var(--_bg);
  border: 1px solid var(--_border);
  border-radius: 8px;
}

.question-input:disabled {
  opacity: 0.6;
}

.question-actions {
  display: flex;
  justify-content: flex-end;
}

.question-btn {
  border: 1px solid var(--_accent);
  border-radius: 8px;
  padding: 8px 14px;
  font: inherit;
  font-weight: 600;
  cursor: pointer;
  background: var(--_accent);
  color: var(--_on-accent);
}

.question-btn:disabled {
  cursor: default;
  opacity: 0.6;
}

/* Skills \u2014 chips row + the /-command palette, above the input. */
.skill-chips {
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
  padding: 10px 12px;
}

/* The row is hidden whenever the host offers no skills, which is most elements
   most of the time, and an author display beats the user-agent rule for the
   hidden attribute. Without this it kept its padding: 20px of panel between
   the transcript and the composer, under every placement, reading as the gap
   under whatever the transcript ends with. */
.skill-chips[hidden] {
  display: none;
}

.skill-chip {
  border: 1px solid var(--_border);
  border-radius: 999px;
  padding: 4px 12px;
  font: inherit;
  font-size: 0.9em;
  cursor: pointer;
  background: var(--_assistant-bg);
  color: var(--_fg);
}

.skill-chip:hover {
  border-color: var(--_accent);
}

/* Follow-up suggestion chips. Deliberately the skill chips' shape rather than a
   second chip vocabulary -- both are "a question you could ask", and the only
   difference is who chose it. Inside the transcript, so they scroll with the
   answer they follow instead of hovering above the composer. */
.suggestions {
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
  align-self: stretch;
}

.suggestion-chip {
  border: 1px solid var(--_border);
  border-radius: 999px;
  padding: 4px 12px;
  font: inherit;
  font-size: 0.9em;
  text-align: left;
  cursor: pointer;
  background: var(--_assistant-bg);
  color: var(--_fg);
}

.suggestion-chip:hover,
.suggestion-chip:focus-visible {
  border-color: var(--_accent);
}

.skill-palette {
  margin: 8px 12px 0;
  display: flex;
  flex-direction: column;
  max-height: 220px;
  overflow: auto;
  /* Scrolling past the end of this must not scroll the page behind it. */
  overscroll-behavior: contain;
  background: var(--_bg);
  border: 1px solid var(--_border);
  border-radius: 8px;
  box-shadow: 0 8px 24px rgba(20, 20, 50, 0.16);
}

/* Closed nearly all of the time and mounted on every element. The display
   above beats the user-agent rule for the hidden attribute, so without this a
   closed palette still painted its margin, border and shadow as a line over
   the composer. */
.skill-palette[hidden] {
  display: none;
}

.skill-item {
  display: flex;
  flex-direction: column;
  gap: 2px;
  align-items: flex-start;
  padding: 8px 12px;
  border: none;
  background: none;
  font: inherit;
  text-align: left;
  cursor: pointer;
  color: var(--_fg);
}

.skill-item[aria-selected="true"] {
  background: var(--_assistant-bg);
}

.skill-item-title {
  font-weight: 600;
}

.skill-item-desc {
  font-size: 0.85em;
  color: var(--_muted);
}

/* The hint sits directly above the composer's top border, so a zero bottom
   margin left the text touching the divider. */
.skill-hint {
  margin: 8px 12px;
  font-size: 0.85em;
  line-height: 1.4;
  color: var(--_danger);
}

/* Chat-history drawer \u2014 a slide-over within the chat panel.
   The hidden attribute stays the single source of truth for open/closed (no
   JS-driven animation state): display is transitioned discretely, so on close
   the drawer stays displayed for the whole exit and is removed only at the end,
   which is what lets the backdrop fade and the panel slide out. */
.drawer {
  position: absolute;
  inset: 0;
  z-index: 5;
  display: flex;
  /* Visible at once on the way in. Opening moves focus to the list in the
     same task that unhides it, and an element still hidden cannot take focus:
     a transition on visibility starts at its first value, so easing it in
     left the drawer hidden at exactly that instant and the focus call was
     dropped at every placement. Reduced motion shortens the transition
     without removing it, so it had the same first frame. */
  transition: visibility 0s;
}

/* Closed. The overlay keeps its box (display, not none) so the backdrop and
   panel inside it stay rendered and can transition both ways; visibility is
   what takes the whole subtree out of the tab order, the a11y tree and hit
   testing at rest. On the way out it is delayed rather than eased, so it
   flips only once the slide has finished. A transition is read from the
   state being entered, which is what lets the two directions differ. */
.drawer[hidden] {
  display: flex;
  visibility: hidden;
  pointer-events: none;
  transition: visibility 0s var(--_motion);
}

.drawer[hidden] .drawer-backdrop {
  opacity: 0;
}

.drawer[hidden] .drawer-panel {
  transform: translateX(-100%);
}

.checkpoints {
  position: absolute;
  inset-block-start: 3rem;
  inset-inline: 0.75rem;
  z-index: 6;
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
  padding: 0.5rem;
  border: 1px solid var(--_border);
  border-radius: 0.5rem;
  background: var(--_assistant-bg);
  box-shadow: 0 6px 24px rgb(0 0 0 / 12%);
  max-height: 60%;
  overflow-y: auto;
  /* Scrolling past the end of this must not scroll the page behind it. */
  overscroll-behavior: contain;
  transform-origin: top center;
  /* Visibility flips at once on the way in, for the drawer's reason: opening
     focuses the panel in the same task that unhides it, and an element still
     hidden cannot take focus. The fade and the scale still ease in. */
  transition:
    opacity var(--_motion) var(--_ease),
    transform var(--_motion) var(--_ease),
    visibility 0s;
}

/* Same idiom as the drawer: laid out at rest, hidden by visibility, so the
   popover can animate open and closed. The whole list is restated because a
   transition is read from the state being entered; only visibility differs,
   delayed rather than eased so it flips once the exit has played. */
.checkpoints[hidden] {
  display: flex;
  visibility: hidden;
  pointer-events: none;
  opacity: 0;
  transform: scale(0.96) translateY(-6px);
  transition:
    opacity var(--_motion) var(--_ease),
    transform var(--_motion) var(--_ease),
    visibility 0s var(--_motion);
}

.checkpoints-title {
  font-size: 0.75rem;
  font-weight: 600;
  opacity: 0.7;
}

.checkpoints-empty {
  padding: 0.5rem 0.25rem;
  font-size: 0.8125rem;
  opacity: 0.7;
}

/* A row is a label and two buttons, and nothing about the row itself is
   pressable. It used to light up on hover, which is the affordance of something
   clickable and made the buttons look like decoration on a clickable strip. The
   resting surface groups the row instead, so hover can mean what it says: only
   the buttons respond to it.

   It wraps for the same reason the tool-call head does. Every child but the label
   is fixed-width, so in a narrow panel the label is the only thing that can give
   -- and a flex-basis of zero lets it give everything. Adding the run id was
   enough to crush "just now" to zero pixels: present, correct, and invisible.
   Wrapping puts the buttons on their own line instead. */
.checkpoint-row {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 0.5rem;
  padding: 0.3125rem 0.4375rem;
  border-radius: 0.375rem;
  background: var(--_hover);
}

/* Grows into spare room, and refuses to shrink past the shortest thing it ever
   says. A time is short and bounded, so there is no case for eliding it. */
.checkpoint-label {
  flex: 1 1 auto;
  min-width: 7ch;
  font-size: 0.8125rem;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

/* When the label holds the run's first message, the time moves here: still worth
   showing, no longer what identifies the row. Muted and unshrinkable, so it does
   not compete with the words beside it. */
.checkpoint-time {
  flex: 0 0 auto;
  font-size: 0.6875rem;
  opacity: 0.7;
  white-space: nowrap;
}

/* Enough of the run id to tell two runs apart when both say "just now". Muted
   and monospaced: it is a reference, not a name. */
.checkpoint-id {
  flex: 0 0 auto;
  font-family: ui-monospace, SFMono-Regular, Menlo, monospace;
  font-size: 0.6875rem;
  opacity: 0.55;
}

/* On the panel's own surface, not the row's: the row now paints the hover token
   itself, and a badge the same colour as what it sits on is not a badge. */
.checkpoint-branch {
  font-size: 0.6875rem;
  padding: 0 0.375rem;
  border-radius: 999px;
  background: var(--_assistant-bg);
  opacity: 0.8;
}

/* The two things in the row that actually do something, so they are the two
   things that look like it: a filled surface at rest rather than a transparent
   outline, which on top of the old row highlight was nearly invisible. */
.checkpoint-action {
  font: inherit;
  font-size: 0.75rem;
  line-height: 1.4;
  cursor: pointer;
  padding: 0.1875rem 0.5625rem;
  border: 1px solid var(--_border);
  border-radius: 0.375rem;
  background: var(--_bg);
  color: inherit;
  transition:
    background var(--_motion) var(--_ease),
    border-color var(--_motion) var(--_ease),
    transform var(--_motion) var(--_ease);
}

/* Resume is what a reader wants nine times in ten; fork is the deliberate choice
   beside it. Filled and outlined, the same pair the confirmation and approval
   cards already use for their primary and secondary action. */
.checkpoint-resume {
  font-weight: 600;
  border-color: var(--_accent);
  background: var(--_accent);
  color: var(--_on-accent);
}

.checkpoint-fork:hover {
  background: var(--_hover);
  border-color: var(--_accent);
}

/* The filled one cannot go lighter on hover without losing its contrast with the
   white label, so it dims instead. */
.checkpoint-resume:hover {
  opacity: 0.88;
}

/* Pressed: a pixel down, so the click is felt as well as seen. */
.checkpoint-action:active {
  transform: translateY(1px);
}

/* Keyboard focus was invisible here, in a panel that traps focus and is reached
   by Tab -- so the one navigation path guaranteed to land on these buttons was
   the one with nothing to show for it. */
.checkpoint-action:focus-visible {
  outline: 2px solid var(--_accent);
  outline-offset: 2px;
}

.drawer-backdrop {
  position: absolute;
  inset: 0;
  background: rgba(20, 20, 50, 0.32);
  opacity: 1;
  transition: opacity var(--_motion) var(--_ease);
}

.drawer-panel {
  position: relative;
  display: flex;
  flex-direction: column;
  width: min(300px, 85%);
  height: 100%;
  background: var(--_bg);
  border-right: 1px solid var(--_border);
  box-shadow: var(--_shadow);
  overflow: hidden;
  transform: none;
  transition: transform var(--_motion) var(--_ease);
}

.drawer-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: var(--_space);
  padding: var(--_pad);
  border-bottom: 1px solid var(--_border);
}

.drawer-title {
  /* Takes the slack so the two controls group at the trailing edge. With
     space-between and three items the middle one floats, which reads as the
     title and the close button being a pair with New chat wedged between
     them. Truncates rather than pushing them off the row. */
  flex: 1 1 auto;
  min-width: 0;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  font-weight: 600;
}

.drawer-new {
  flex: 0 0 auto;
  border: 1px solid var(--_border);
  border-radius: var(--_radius);
  background: var(--_bg);
  color: var(--_accent);
  padding: 4px 10px;
  font: inherit;
  font-size: 0.85em;
  cursor: pointer;
}

/* Narrows the list. Sits under the header rather than in it: the header's two
   controls act on the conversation, and a field that filters what is below it
   belongs with what it filters. */
/* What is waiting for the run to finish. Above the composer, beside the
   attachment tray, because both are things already handed over and not yet
   sent. Each chip is a button: pressing it takes that message back. */
.queued {
  display: flex;
  flex-wrap: wrap;
  gap: var(--_space);
  padding: 0 var(--_pad) var(--_space);
}

/* Empty whenever no run is in flight, and hidden then. Same reason as the
   palette: the display above would otherwise keep the bottom padding as dead
   space over the composer. */
.queued[hidden] {
  display: none;
}

.queued-chip {
  max-width: 100%;
  overflow: hidden;
  padding: 4px 10px;
  border: 1px dashed var(--_border);
  border-radius: var(--_msg-radius);
  background: var(--_bg);
  color: var(--_muted);
  font: inherit;
  font-size: 0.9em;
  text-overflow: ellipsis;
  white-space: nowrap;
  cursor: pointer;
}

.queued-chip:hover {
  border-style: solid;
  color: var(--_fg);
}

.drawer-filter {
  flex: 0 0 auto;
  box-sizing: border-box;
  width: calc(100% - var(--_pad) * 2);
  margin: var(--_space) var(--_pad) 0;
  padding: 6px 10px;
  border: 1px solid var(--_border);
  border-radius: var(--_radius);
  background: var(--_input-bg);
  color: var(--_fg);
  font: inherit;
  font-size: 0.9em;
}

.drawer-filter::placeholder {
  color: var(--_muted);
}

.drawer-list {
  flex: 1;
  min-height: 0;
  overflow-y: auto;
  /* Scrolling past the end of this must not scroll the page behind it. */
  overscroll-behavior: contain;
}

.drawer-empty {
  padding: var(--_pad);
  font-size: 0.9em;
  color: var(--_muted);
}

.drawer-row {
  display: flex;
  align-items: stretch;
  border-bottom: 1px solid var(--_border);
}

.drawer-row--active {
  background: var(--_assistant-bg);
}

.drawer-row-select {
  flex: 1;
  min-width: 0;
  display: flex;
  flex-direction: column;
  gap: 2px;
  padding: 8px 12px;
  border: none;
  background: none;
  color: inherit;
  font: inherit;
  text-align: left;
  cursor: pointer;
}

.drawer-row-title {
  font-weight: 600;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}

.drawer-row-time {
  font-size: 0.72em;
  color: var(--_muted);
}

.drawer-row-preview {
  font-size: 0.8em;
  color: var(--_muted);
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}

.drawer-row-actions {
  display: flex;
  align-items: center;
  gap: 2px;
  padding: 0 6px;
}

.drawer-row-rename,
.drawer-row-delete {
  border: none;
  background: none;
  color: var(--_muted);
  font-size: 0.9em;
  padding: 4px;
  cursor: pointer;
}

.drawer-rename-input {
  flex: 1;
  min-width: 0;
  margin: 6px 10px;
  padding: 4px 8px;
  border: 1px solid var(--_accent);
  border-radius: 6px;
  background: var(--_input-bg);
  color: var(--_fg);
  font: inherit;
}

.drawer-confirm {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 8px 12px;
  font-size: 0.85em;
}

.drawer-confirm-label {
  color: var(--_danger);
}

.drawer-confirm-yes {
  border: none;
  border-radius: 6px;
  background: var(--_danger);
  color: var(--_on-danger);
  padding: 3px 10px;
  font: inherit;
  cursor: pointer;
}

.drawer-confirm-no {
  border: 1px solid var(--_border);
  border-radius: 6px;
  background: none;
  color: inherit;
  padding: 3px 10px;
  font: inherit;
  cursor: pointer;
}

/* Embedded placement: an inline, flush side panel rather than a dimmed,
   floating slide-over. */
:host([placement="embedded"]) .drawer-backdrop {
  background: none;
}

/* The way back out of the list. It sits beside New chat, which is the control
   it must not be mistaken for: one returns you to the conversation you were
   reading, the other replaces it. */
.drawer-close {
  flex: 0 0 auto;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 26px;
  height: 26px;
  padding: 0;
  border: 0;
  border-radius: 6px;
  background: none;
  color: inherit;
  font: inherit;
  font-size: 18px;
  line-height: 1;
  cursor: pointer;
}

.drawer-close:hover {
  background: var(--_hover);
}

:host([placement="embedded"]) .drawer-panel {
  width: 100%;
  border-right: none;
  box-shadow: none;
}
`;function Eb(e){let t=new CSSStyleSheet;t.replaceSync(wb),e.adoptedStyleSheets=[t]}function ds(e,t,n){let r=document.createElement("slot");return r.name=e,r.className=t,r.innerHTML=n,r}function Xr(e,t,n){let r=document.createElement("button");r.type="button",r.className=`header-btn header-btn--${e}`,r.setAttribute("part",`header-button ${e}-button`),r.title=t,r.setAttribute("aria-label",t);let o=document.createElement("slot");return o.name=`icon-${e}`,o.append(document.createTextNode(n)),r.append(o),r}function ps(e,t,n,r){let o=document.createElement("span");o.className="icon-holder",o.setAttribute("part",t);let i=document.createElement("slot");if(i.name=e,r!==null){let a=document.createElement("img");a.className="icon-img",a.src=r,a.alt="",i.append(a)}else n!==null&&(i.innerHTML=n);return o.append(i),o}function xb(e){return e.getAttribute("data-unread-badge")!=="false"}function Sb(e){return e.getAttribute("data-launcher-icon-url")??e.getAttribute("data-icon-url")}var RT=new Set(["ADDRESS","ARTICLE","ASIDE","BLOCKQUOTE","DD","DIV","DL","DT","FIGCAPTION","FIGURE","FOOTER","H1","H2","H3","H4","H5","H6","HEADER","HR","MAIN","NAV","OL","P","SECTION","UL"]);function hs(e){let t=e.cloneNode(!0);for(let n of Array.from(t.querySelectorAll("button")))n.remove();return{text:OT(_b(t)),html:t.innerHTML}}function _b(e){if(e.nodeType===Node.TEXT_NODE)return e.nodeValue.replace(/\s+/g," ");if(e.nodeType!==Node.ELEMENT_NODE)return"";let t=e,n=t.tagName;if(n==="BR")return`
`;if(n==="PRE")return`

${Ab(t)}

`;if(n==="TABLE")return`

${NT(t)}

`;if(n==="UL"||n==="OL")return`

${CT(t,n==="OL")}

`;let r=Tb(t);return RT.has(n)?`

${r}

`:r}function Tb(e){let t="";for(let n of Array.from(e.childNodes))t+=_b(n);return t}function CT(e,t){return Array.from(e.children).map((n,r)=>`${t?`${r+1}. `:"- "}${Tb(n).trim()}`).join(`
`)}function NT(e){return Array.from(e.querySelectorAll("tr")).map(t=>Array.from(t.children).map(n=>Ab(n).replace(/\s+/g," ").trim()).join("	")).join(`
`)}function Ab(e){return e.textContent}function OT(e){return e.replace(/[^\S\n]+\n/g,`
`).replace(/\n{3,}/g,`

`).trim()}var PT=1500;function Vu(e,t){if(Ib(e)!==null)return;let n=fs(e,t.strings),r=t.text;r!==void 0&&n.appendChild(MT(t.strings,r,t.html)),t.onFeedback!==void 0&&n.append(kb("up",t.strings.feedbackUp,t.onFeedback),kb("down",t.strings.feedbackDown,t.onFeedback))}function fs(e,t){let n=Ib(e);if(n!==null)return n;let r=document.createElement("div");return r.className="message-actions",r.setAttribute("part","message-actions"),r.setAttribute("role","group"),r.setAttribute("aria-label",t.messageActions),e.after(r),r}function Ib(e){let t=e.nextElementSibling;return t?.classList.contains("message-actions")===!0?t:null}function ms(e,t,n){let r=document.createElement("button");r.type="button",r.className=`message-action message-action--${e}`,r.setAttribute("part",`message-action message-action-${e}`),Bu(r,t);let o=document.createElement("span");return o.className="message-action-icon",o.setAttribute("part",`message-action-icon message-action-icon-${e}`),o.setAttribute("aria-hidden","true"),o.innerHTML=n,r.appendChild(o),r}function Bu(e,t){e.title=t,e.setAttribute("aria-label",t),e.dataset.tooltip=t}function MT(e,t,n){let r=ms("copy",e.copyMessage,ip);return r.addEventListener("click",()=>{zT(t(),n?.()).then(o=>{LT(r,o?e.copied:e.copyFailed,e.copyMessage)})}),r}async function zT(e,t){let n=navigator.clipboard;if(n===void 0)return!1;if(t!==void 0&&typeof ClipboardItem=="function")try{return await n.write([new ClipboardItem({"text/plain":new Blob([e],{type:"text/plain"}),"text/html":new Blob([t],{type:"text/html"})})]),!0}catch{}try{return await n.writeText(e),!0}catch{return!1}}function kb(e,t,n){let r=ms(e==="up"?"up":"down",t,e==="up"?sp:lp);return r.addEventListener("click",()=>{let o=r.getAttribute("aria-pressed")==="true";r.setAttribute("aria-pressed",o?"false":"true"),n(e)}),r.setAttribute("aria-pressed","false"),r}function LT(e,t,n){Bu(e,t),e.classList.add("message-action--confirmed"),setTimeout(()=>{Bu(e,n),e.classList.remove("message-action--confirmed")},PT)}var gs=class{#e;#t=null;constructor(t){this.#e=t}forget(){this.#t=null}attach(t,n={}){let r=this.#o(),o=r.has(Ft.COPY),i=n.rateable!==!1&&r.has(Ft.FEEDBACK);(o||i)&&Vu(t,{strings:this.#e.strings(),...o?{text:()=>hs(t).text,html:()=>hs(t).html}:{},...i?{onFeedback:a=>{this.#e.element.dispatchEvent(new CustomEvent(sl,{detail:{content:hs(t).text,rating:a},bubbles:!0,composed:!0}))}}:{}}),r.has(Ft.RETRY)&&this.#n(fs(t,this.#e.strings()))}#n(t){this.#t?.querySelector(".message-action--retry")?.remove();let n=ms("retry",this.#e.strings().retryMessage,ap);n.addEventListener("click",()=>{this.#e.retry()}),t.prepend(n),this.#t=t}#o(){let t=this.#e.element.getAttribute("data-message-actions");return t===null?new Set([Ft.COPY,Ft.RETRY]):new Set(Xn(t))}};function Rb(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=Array(t);n<t;n++)r[n]=e[n];return r}function DT(e){if(Array.isArray(e))return e}function $T(e,t){var n=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(n!=null){var r,o,i,a,s=[],c=!0,l=!1;try{if(i=(n=n.call(e)).next,t!==0)for(;!(c=(r=i.call(n)).done)&&(s.push(r.value),s.length!==t);c=!0);}catch(u){l=!0,o=u}finally{try{if(!c&&n.return!=null&&(a=n.return(),Object(a)!==a))return}finally{if(l)throw o}}return s}}function UT(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function HT(e,t){return DT(e)||$T(e,t)||FT(e,t)||UT()}function FT(e,t){if(e){if(typeof e=="string")return Rb(e,t);var n={}.toString.call(e).slice(8,-1);return n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set"?Array.from(e):n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?Rb(e,t):void 0}}var Bb=Object.entries,Cb=Object.setPrototypeOf,GT=Object.isFrozen,ZT=Object.getPrototypeOf,BT=Object.getOwnPropertyDescriptor,Re=Object.freeze,Ne=Object.seal,Jn=Object.create,Vb=typeof Reflect<"u"&&Reflect,Ju=Vb.apply,Qu=Vb.construct;Re||(Re=function(t){return t});Ne||(Ne=function(t){return t});Ju||(Ju=function(t,n){for(var r=arguments.length,o=new Array(r>2?r-2:0),i=2;i<r;i++)o[i-2]=arguments[i];return t.apply(n,o)});Qu||(Qu=function(t){for(var n=arguments.length,r=new Array(n>1?n-1:0),o=1;o<n;o++)r[o-1]=arguments[o];return new t(...r)});var hn=ke(Array.prototype.forEach),VT=ke(Array.prototype.lastIndexOf),Nb=ke(Array.prototype.pop),Kr=ke(Array.prototype.push),jT=ke(Array.prototype.splice),Qn=Array.isArray,eo=ke(String.prototype.toLowerCase),ju=ke(String.prototype.toString),Ob=ke(String.prototype.match),Jr=ke(String.prototype.replace),Pb=ke(String.prototype.indexOf),WT=ke(String.prototype.trim),qT=ke(Number.prototype.toString),YT=ke(Boolean.prototype.toString),Mb=typeof BigInt>"u"?null:ke(BigInt.prototype.toString),zb=typeof Symbol>"u"?null:ke(Symbol.prototype.toString),je=ke(Object.prototype.hasOwnProperty),Qr=ke(Object.prototype.toString),$e=ke(RegExp.prototype.test),pn=XT(TypeError);function ke(e){return function(t){t instanceof RegExp&&(t.lastIndex=0);for(var n=arguments.length,r=new Array(n>1?n-1:0),o=1;o<n;o++)r[o-1]=arguments[o];return Ju(e,t,r)}}function XT(e){return function(){for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];return Qu(e,n)}}function te(e,t){let n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:eo;if(Cb&&Cb(e,null),!Qn(t))return e;let r=t.length;for(;r--;){let o=t[r];if(typeof o=="string"){let i=n(o);i!==o&&(GT(t)||(t[r]=i),o=i)}e[o]=!0}return e}function KT(e){for(let t=0;t<e.length;t++)je(e,t)||(e[t]=null);return e}function Je(e){let t=Jn(null);for(let r of Bb(e)){var n=HT(r,2);let o=n[0],i=n[1];je(e,o)&&(Qn(i)?t[o]=KT(i):i&&typeof i=="object"&&i.constructor===Object?t[o]=Je(i):t[o]=i)}return t}function JT(e){switch(typeof e){case"string":return e;case"number":return qT(e);case"boolean":return YT(e);case"bigint":return Mb?Mb(e):"0";case"symbol":return zb?zb(e):"Symbol()";case"undefined":return Qr(e);case"function":case"object":{if(e===null)return Qr(e);let t=e,n=rt(t,"toString");if(typeof n=="function"){let r=n(t);return typeof r=="string"?r:Qr(r)}return Qr(e)}default:return Qr(e)}}function rt(e,t){for(;e!==null;){let r=BT(e,t);if(r){if(r.get)return ke(r.get);if(typeof r.value=="function")return ke(r.value)}e=ZT(e)}function n(){return null}return n}function QT(e){try{return $e(e,""),!0}catch{return!1}}var Lb=Re(["a","abbr","acronym","address","area","article","aside","audio","b","bdi","bdo","big","blink","blockquote","body","br","button","canvas","caption","center","cite","code","col","colgroup","content","data","datalist","dd","decorator","del","details","dfn","dialog","dir","div","dl","dt","element","em","fieldset","figcaption","figure","font","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","img","input","ins","kbd","label","legend","li","main","map","mark","marquee","menu","menuitem","meter","nav","nobr","ol","optgroup","option","output","p","picture","pre","progress","q","rp","rt","ruby","s","samp","search","section","select","shadow","slot","small","source","spacer","span","strike","strong","style","sub","summary","sup","table","tbody","td","template","textarea","tfoot","th","thead","time","tr","track","tt","u","ul","var","video","wbr"]),Wu=Re(["svg","a","altglyph","altglyphdef","altglyphitem","animatecolor","animatemotion","animatetransform","circle","clippath","defs","desc","ellipse","enterkeyhint","exportparts","filter","font","g","glyph","glyphref","hkern","image","inputmode","line","lineargradient","marker","mask","metadata","mpath","part","path","pattern","polygon","polyline","radialgradient","rect","stop","style","switch","symbol","text","textpath","title","tref","tspan","view","vkern"]),qu=Re(["feBlend","feColorMatrix","feComponentTransfer","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feDistantLight","feDropShadow","feFlood","feFuncA","feFuncB","feFuncG","feFuncR","feGaussianBlur","feImage","feMerge","feMergeNode","feMorphology","feOffset","fePointLight","feSpecularLighting","feSpotLight","feTile","feTurbulence"]),eA=Re(["animate","color-profile","cursor","discard","font-face","font-face-format","font-face-name","font-face-src","font-face-uri","foreignobject","hatch","hatchpath","mesh","meshgradient","meshpatch","meshrow","missing-glyph","script","set","solidcolor","unknown","use"]),Yu=Re(["math","menclose","merror","mfenced","mfrac","mglyph","mi","mlabeledtr","mmultiscripts","mn","mo","mover","mpadded","mphantom","mroot","mrow","ms","mspace","msqrt","mstyle","msub","msup","msubsup","mtable","mtd","mtext","mtr","munder","munderover","mprescripts"]),tA=Re(["maction","maligngroup","malignmark","mlongdiv","mscarries","mscarry","msgroup","mstack","msline","msrow","semantics","annotation","annotation-xml","mprescripts","none"]),Db=Re(["#text"]),$b=Re(["accept","action","align","alt","autocapitalize","autocomplete","autopictureinpicture","autoplay","background","bgcolor","border","capture","cellpadding","cellspacing","checked","cite","class","clear","color","cols","colspan","command","commandfor","controls","controlslist","coords","crossorigin","datetime","decoding","default","dir","disabled","disablepictureinpicture","disableremoteplayback","download","draggable","enctype","enterkeyhint","exportparts","face","for","headers","height","hidden","high","href","hreflang","id","inert","inputmode","integrity","ismap","kind","label","lang","list","loading","loop","low","max","maxlength","media","method","min","minlength","multiple","muted","name","nonce","noshade","novalidate","nowrap","open","optimum","part","pattern","placeholder","playsinline","popover","popovertarget","popovertargetaction","poster","preload","pubdate","radiogroup","readonly","rel","required","rev","reversed","role","rows","rowspan","spellcheck","scope","selected","shape","size","sizes","slot","span","srclang","start","src","srcset","step","style","summary","tabindex","title","translate","type","usemap","valign","value","width","wrap","xmlns"]),Xu=Re(["accent-height","accumulate","additive","alignment-baseline","amplitude","ascent","attributename","attributetype","azimuth","basefrequency","baseline-shift","begin","bias","by","class","clip","clippathunits","clip-path","clip-rule","color","color-interpolation","color-interpolation-filters","color-profile","color-rendering","cx","cy","d","dx","dy","diffuseconstant","direction","display","divisor","dominant-baseline","dur","edgemode","elevation","end","exponent","fill","fill-opacity","fill-rule","filter","filterunits","flood-color","flood-opacity","font-family","font-size","font-size-adjust","font-stretch","font-style","font-variant","font-weight","fx","fy","g1","g2","glyph-name","glyphref","gradientunits","gradienttransform","height","href","id","image-rendering","in","in2","intercept","k","k1","k2","k3","k4","kerning","keypoints","keysplines","keytimes","lang","lengthadjust","letter-spacing","kernelmatrix","kernelunitlength","lighting-color","local","marker-end","marker-mid","marker-start","markerheight","markerunits","markerwidth","maskcontentunits","maskunits","max","mask","mask-type","media","method","mode","min","name","numoctaves","offset","operator","opacity","order","orient","orientation","origin","overflow","paint-order","path","pathlength","patterncontentunits","patterntransform","patternunits","pointer-events","points","preservealpha","preserveaspectratio","primitiveunits","r","rx","ry","radius","refx","refy","repeatcount","repeatdur","restart","result","rotate","scale","seed","shape-rendering","slope","specularconstant","specularexponent","spreadmethod","startoffset","stddeviation","stitchtiles","stop-color","stop-opacity","stroke-dasharray","stroke-dashoffset","stroke-linecap","stroke-linejoin","stroke-miterlimit","stroke-opacity","stroke","stroke-width","style","surfacescale","systemlanguage","tabindex","tablevalues","targetx","targety","transform","transform-origin","text-anchor","text-decoration","text-orientation","text-rendering","textlength","type","u1","u2","unicode","values","vector-effect","viewbox","visibility","version","vert-adv-y","vert-origin-x","vert-origin-y","width","word-spacing","wrap","writing-mode","xchannelselector","ychannelselector","x","x1","x2","xmlns","y","y1","y2","z","zoomandpan"]),Ub=Re(["accent","accentunder","align","bevelled","close","columnalign","columnlines","columnspacing","columnspan","denomalign","depth","dir","display","displaystyle","encoding","fence","frame","height","href","id","largeop","length","linethickness","lquote","lspace","mathbackground","mathcolor","mathsize","mathvariant","maxsize","minsize","movablelimits","notation","numalign","open","rowalign","rowlines","rowspacing","rowspan","rspace","rquote","scriptlevel","scriptminsize","scriptsizemultiplier","selection","separator","separators","stretchy","subscriptshift","supscriptshift","symmetric","voffset","width","xmlns"]),vs=Re(["xlink:href","xml:id","xlink:title","xml:space","xmlns:xlink"]),nA=Ne(/{{[\w\W]*|^[\w\W]*}}/g),rA=Ne(/<%[\w\W]*|^[\w\W]*%>/g),oA=Ne(/\${[\w\W]*/g),iA=Ne(/^data-[\-\w.\u00B7-\uFFFF]+$/),aA=Ne(/^aria-[\-\w]+$/),Hb=Ne(/^(?:(?:(?:f|ht)tps?|mailto|tel|callto|sms|cid|xmpp|matrix):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i),sA=Ne(/^(?:\w+script|data):/i),lA=Ne(/[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g),cA=Ne(/^html$/i),uA=Ne(/^[a-z][.\w]*(-[.\w]+)+$/i),Fb=Ne(/<[/\w!]/g),Gb=Ne(/<[/\w]/g),dA=Ne(/<\/no(script|embed|frames)/i),pA=Ne(/\/>/i),Ke={element:1,attribute:2,text:3,cdataSection:4,entityReference:5,entityNode:6,processingInstruction:7,comment:8,document:9,documentType:10,documentFragment:11,notation:12},jb=["style","script","xmp","iframe","noembed","noframes","plaintext","noscript"],hA=Re(te({},jb)),fA=(function(){let e={};return hn(jb,t=>{e[t]=Ne(new RegExp("</"+t+"(?=[\\t\\n\\f\\r />])","i"))}),Re(e)})(),mA=function(){return typeof window>"u"?null:window},gA=function(t,n){if(typeof t!="object"||typeof t.createPolicy!="function")return null;let r=null,o="data-tt-policy-suffix";n&&n.hasAttribute(o)&&(r=n.getAttribute(o));let i="dompurify"+(r?"#"+r:"");try{return t.createPolicy(i,{createHTML(a){return a},createScriptURL(a){return a}})}catch{return console.warn("TrustedTypes policy "+i+" could not be created."),null}},Zb=function(){return{afterSanitizeAttributes:[],afterSanitizeElements:[],afterSanitizeShadowDOM:[],beforeSanitizeAttributes:[],beforeSanitizeElements:[],beforeSanitizeShadowDOM:[],uponSanitizeAttribute:[],uponSanitizeElement:[],uponSanitizeShadowNode:[]}},Lt=function(t,n,r,o){return je(t,n)&&Qn(t[n])?te(o.base?Je(o.base):{},t[n],o.transform):r},Ku=function(t,n,r){let o=je(t,n)?t[n]:void 0;return o&&typeof o=="object"?Je(o):r()};function Wb(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:mA(),t=O=>Wb(O);if(t.version="3.4.15",t.removed=[],!e||!e.document||e.document.nodeType!==Ke.document||!e.Element)return t.isSupported=!1,t;let n=e.document,r=n,o=r.currentScript;e.DocumentFragment;let i=e.HTMLTemplateElement,a=e.Node,s=e.Element,c=e.NodeFilter,l=e.NamedNodeMap;l===void 0&&(e.NamedNodeMap||e.MozNamedAttrMap),e.HTMLFormElement;let u=e.DOMParser,m=e.trustedTypes,f=s.prototype,h=rt(f,"cloneNode"),p=rt(f,"remove"),E=rt(f,"removeAttributeNode"),b=rt(f,"nextSibling"),S=rt(f,"childNodes"),y=rt(f,"parentNode"),T=rt(f,"shadowRoot"),w=rt(f,"attributes"),_=a&&a.prototype?rt(a.prototype,"nodeType"):null,g=a&&a.prototype?rt(a.prototype,"nodeName"):null,I=a&&a.prototype?rt(a.prototype,"ownerDocument"):null,z=function(d){return _?_(d):d.nodeType},L=function(d){return g?g(d):d.nodeName};if(typeof i=="function"){let O=n.createElement("template");O.content&&O.content.ownerDocument&&(n=O.content.ownerDocument)}let q,Oe="",zs,bd=!1,rr=0,yd=function(){if(rr>0)throw pn('A configured TRUSTED_TYPES_POLICY callback (createHTML or createScriptURL) must not call DOMPurify.sanitize, as that causes infinite recursion. Do not pass a policy whose callbacks wrap DOMPurify as TRUSTED_TYPES_POLICY; see the "DOMPurify and Trusted Types" section of the README.')},vn=function(d){yd(),rr++;try{return q.createHTML(d)}finally{rr--}},Cy=function(d){yd(),rr++;try{return q.createScriptURL(d)}finally{rr--}},Ny=function(){return bd||(zs=gA(m,o),bd=!0),zs},ho=n,Ls=ho.implementation,wd=ho.createNodeIterator,Oy=ho.createDocumentFragment,Py=ho.getElementsByTagName,My=r.importNode,me=Zb();t.isSupported=typeof Bb=="function"&&typeof y=="function"&&Ls&&Ls.createHTMLDocument!==void 0;let zy=nA,Ly=rA,Dy=oA,$y=iA,Uy=aA,Hy=sA,Ed=lA,Fy=uA,xd=Hb,ge=null,Ds=te({},[...Lb,...Wu,...qu,...Yu,...Db]),ve=null,$s=te({},[...$b,...Xu,...Ub,...vs]),pt=Object.seal(Jn(null,{tagNameCheck:{writable:!0,configurable:!1,enumerable:!0,value:null},attributeNameCheck:{writable:!0,configurable:!1,enumerable:!0,value:null},allowCustomizedBuiltInElements:{writable:!0,configurable:!1,enumerable:!0,value:!1}})),or=null,Sd=null,Tt=Object.seal(Jn(null,{tagCheck:{writable:!0,configurable:!1,enumerable:!0,value:null},attributeCheck:{writable:!0,configurable:!1,enumerable:!0,value:null}})),_d=!0,Us=!0,Td=!1,Ad=!0,At=!1,$t=!0,Ut=!1,Hs=!1,fo=null,mo=null,Fs=!1,bn=!1,go=!1,vo=!1,kd=!0,Id=!1,Rd="user-content-",Gs=!0,Zs=!1,yn={},wn=null,Cd=te({},["annotation-xml","audio","colgroup","desc","foreignobject","head","iframe","math","mi","mn","mo","ms","mtext","noembed","noframes","noscript","plaintext","script","selectedcontent","style","svg","template","thead","title","video","xmp"]),Nd=null,Od=te({},["audio","video","img","source","image","track"]),Pd=null,Md=te({},["alt","class","for","id","label","name","pattern","placeholder","role","summary","title","value","style","xmlns"]),bo="http://www.w3.org/1998/Math/MathML",yo="http://www.w3.org/2000/svg",ht="http://www.w3.org/1999/xhtml",En=ht,Bs=!1,Vs=null,Gy=te({},[bo,yo,ht],ju),zd=Re(["mi","mo","mn","ms","mtext"]),js=te({},zd),Ld=Re(["annotation-xml"]),Ws=te({},Ld),Zy=te({},["title","style","font","a","script"]),ir=null,By=["application/xhtml+xml","text/html"],Vy="text/html",_e=null,xn=null,jy=n.createElement("form"),Dd=function(d){return d instanceof RegExp||d instanceof Function},qs=function(){let d=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};if(xn&&xn===d)return;(!d||typeof d!="object")&&(d={}),d=Je(d),ir=By.indexOf(d.PARSER_MEDIA_TYPE)===-1?Vy:d.PARSER_MEDIA_TYPE,_e=ir==="application/xhtml+xml"?ju:eo,ge=Lt(d,"ALLOWED_TAGS",Ds,{transform:_e}),ve=Lt(d,"ALLOWED_ATTR",$s,{transform:_e}),Vs=Lt(d,"ALLOWED_NAMESPACES",Gy,{transform:ju}),Pd=Lt(d,"ADD_URI_SAFE_ATTR",Md,{transform:_e,base:Md}),Nd=Lt(d,"ADD_DATA_URI_TAGS",Od,{transform:_e,base:Od}),wn=Lt(d,"FORBID_CONTENTS",Cd,{transform:_e}),or=Lt(d,"FORBID_TAGS",Je({}),{transform:_e}),Sd=Lt(d,"FORBID_ATTR",Je({}),{transform:_e}),yn=je(d,"USE_PROFILES")?d.USE_PROFILES&&typeof d.USE_PROFILES=="object"?Je(d.USE_PROFILES):d.USE_PROFILES:!1,_d=d.ALLOW_ARIA_ATTR!==!1,Us=d.ALLOW_DATA_ATTR!==!1,Td=d.ALLOW_UNKNOWN_PROTOCOLS||!1,Ad=d.ALLOW_SELF_CLOSE_IN_ATTR!==!1,At=d.SAFE_FOR_TEMPLATES||!1,$t=d.SAFE_FOR_XML!==!1,Ut=d.WHOLE_DOCUMENT||!1,bn=d.RETURN_DOM||!1,go=d.RETURN_DOM_FRAGMENT||!1,vo=d.RETURN_TRUSTED_TYPE||!1,Fs=d.FORCE_BODY||!1,kd=d.SANITIZE_DOM!==!1,Id=d.SANITIZE_NAMED_PROPS||!1,Gs=d.KEEP_CONTENT!==!1,Zs=d.IN_PLACE||!1,xd=QT(d.ALLOWED_URI_REGEXP)?d.ALLOWED_URI_REGEXP:Hb,En=typeof d.NAMESPACE=="string"?d.NAMESPACE:ht,js=Ku(d,"MATHML_TEXT_INTEGRATION_POINTS",()=>te({},zd)),Ws=Ku(d,"HTML_INTEGRATION_POINTS",()=>te({},Ld));let x=Ku(d,"CUSTOM_ELEMENT_HANDLING",()=>Jn(null));if(pt=Jn(null),je(x,"tagNameCheck")&&Dd(x.tagNameCheck)&&(pt.tagNameCheck=x.tagNameCheck),je(x,"attributeNameCheck")&&Dd(x.attributeNameCheck)&&(pt.attributeNameCheck=x.attributeNameCheck),je(x,"allowCustomizedBuiltInElements")&&typeof x.allowCustomizedBuiltInElements=="boolean"&&(pt.allowCustomizedBuiltInElements=x.allowCustomizedBuiltInElements),Ne(pt),At&&(Us=!1),go&&(bn=!0),yn&&(ge=te({},Db),ve=Jn(null),yn.html===!0&&(te(ge,Lb),te(ve,$b)),yn.svg===!0&&(te(ge,Wu),te(ve,Xu),te(ve,vs)),yn.svgFilters===!0&&(te(ge,qu),te(ve,Xu),te(ve,vs)),yn.mathMl===!0&&(te(ge,Yu),te(ve,Ub),te(ve,vs))),Tt.tagCheck=null,Tt.attributeCheck=null,je(d,"ADD_TAGS")&&(typeof d.ADD_TAGS=="function"?Tt.tagCheck=d.ADD_TAGS:Qn(d.ADD_TAGS)&&(ge===Ds&&(ge=Je(ge)),te(ge,d.ADD_TAGS,_e))),je(d,"ADD_ATTR")&&(typeof d.ADD_ATTR=="function"?Tt.attributeCheck=d.ADD_ATTR:Qn(d.ADD_ATTR)&&(ve===$s&&(ve=Je(ve)),te(ve,d.ADD_ATTR,_e))),je(d,"ADD_FORBID_CONTENTS")&&Qn(d.ADD_FORBID_CONTENTS)&&(wn===Cd&&(wn=Je(wn)),te(wn,d.ADD_FORBID_CONTENTS,_e)),Gs&&(ge["#text"]=!0),Ut&&te(ge,["html","head","body"]),ge.table&&(te(ge,["tbody"]),delete or.tbody),d.TRUSTED_TYPES_POLICY){if(typeof d.TRUSTED_TYPES_POLICY.createHTML!="function")throw pn('TRUSTED_TYPES_POLICY configuration option must provide a "createHTML" hook.');if(typeof d.TRUSTED_TYPES_POLICY.createScriptURL!="function")throw pn('TRUSTED_TYPES_POLICY configuration option must provide a "createScriptURL" hook.');let C=q;q=d.TRUSTED_TYPES_POLICY;try{Oe=vn("")}catch(D){throw q=C,D}}else d.TRUSTED_TYPES_POLICY===null?(q=void 0,Oe=""):(q===void 0&&(q=Ny()),q&&typeof Oe=="string"&&(Oe=vn("")));Re&&Re(d),xn=d},$d=te({},[...Wu,...qu,...eA]),Ud=te({},[...Yu,...tA]),Wy=function(d,x,C){return x.namespaceURI===ht?d==="svg":x.namespaceURI===bo?d==="svg"&&(C==="annotation-xml"||js[C]):!!$d[d]},qy=function(d,x,C){return x.namespaceURI===ht?d==="math":x.namespaceURI===yo?d==="math"&&Ws[C]:!!Ud[d]},Yy=function(d,x,C){return x.namespaceURI===yo&&!Ws[C]||x.namespaceURI===bo&&!js[C]?!1:!Ud[d]&&(Zy[d]||!$d[d])},Xy=function(d){let x=y(d);(!x||!x.tagName)&&(x={namespaceURI:En,tagName:"template"});let C=eo(d.tagName),D=eo(x.tagName);return Vs[d.namespaceURI]?d.namespaceURI===yo?Wy(C,x,D):d.namespaceURI===bo?qy(C,x,D):d.namespaceURI===ht?Yy(C,x,D):!!(ir==="application/xhtml+xml"&&Vs[d.namespaceURI]):!1},kt=function(d){Kr(t.removed,{element:d});try{y(d).removeChild(d)}catch{if(p(d),!y(d))throw pn("a node selected for removal could not be detached from its tree and cannot be safely returned; refusing to sanitize in place")}},Hd=function(d,x,C){try{E(d,x)}catch{try{d.removeAttribute(C)}catch{}}},wo=function(d){Eo(d);let x=S(d);if(x){let D=[];hn(x,H=>{Kr(D,H)}),hn(D,H=>{try{p(H)}catch{}})}let C=w(d);if(C)for(let D=C.length-1;D>=0;--D){let H=C[D],B=H&&H.name;typeof B=="string"&&Hd(d,H,B)}},Ht=function(d,x,C){if(!C)try{C=x.getAttributeNode(d)}catch{C=null}Kr(t.removed,{attribute:C||null,from:x});try{C?E(x,C):x.removeAttribute(d)}catch{try{x.removeAttribute(d)}catch{}}if(d==="is")if(bn||go)try{kt(x)}catch{}else try{x.setAttribute(d,"")}catch{}},Ky=function(d){let x=w(d);if(x)for(let C=x.length-1;C>=0;--C){let D=x[C],H=D&&D.name;typeof H!="string"||ve[_e(H)]||Hd(d,D,H)}},Eo=function(d){let x=[d];for(;x.length>0;){let C=x.pop();z(C)===Ke.element&&Ky(C);let H=S(C);if(H)for(let B=H.length-1;B>=0;--B)x.push(H[B])}},Fd=function(d,x){return $t?d==="patchsrc"?!0:d==="for"&&x!=="label"&&x!=="output":!1},Jy=function(d){if(!$t)return;let x=[d];for(;x.length>0;){let C=x.pop(),D=z(C);if(D===Ke.processingInstruction||D===Ke.comment&&$e(Gb,C.data)){try{p(C)}catch{}continue}if(D===Ke.element){let B=C,ue=_e(L(C));try{B.hasAttribute&&B.hasAttribute("patchsrc")&&B.removeAttribute("patchsrc"),B.hasAttribute&&B.hasAttribute("for")&&Fd("for",ue)&&B.removeAttribute("for")}catch{}}let H=S(C);if(H)for(let B=H.length-1;B>=0;--B)x.push(H[B])}},Gd=function(d){let x=null,C=null;if(Fs)d="<remove></remove>"+d;else{let B=Ob(d,/^[\r\n\t ]+/);C=B&&B[0]}ir==="application/xhtml+xml"&&En===ht&&(d='<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>'+d+"</body></html>");let D=q?vn(d):d;if(En===ht)try{x=new u().parseFromString(D,ir)}catch{}if(!x||!x.documentElement){x=Ls.createDocument(En,"template",null);try{x.documentElement.innerHTML=Bs?Oe:D}catch{}}let H=x.body||x.documentElement;return d&&C&&H.insertBefore(n.createTextNode(C),H.childNodes[0]||null),En===ht?Py.call(x,Ut?"html":"body")[0]:Ut?x.documentElement:H},Zd=function(d){let x=I?I(d):d.ownerDocument;return wd.call(x||d,d,c.SHOW_ELEMENT|c.SHOW_COMMENT|c.SHOW_TEXT|c.SHOW_PROCESSING_INSTRUCTION|c.SHOW_CDATA_SECTION,null)},xo=function(d){return d=Jr(d,zy," "),d=Jr(d,Ly," "),d=Jr(d,Dy," "),d},Ys=function(d){var x;d.normalize();let C=I?I(d):d.ownerDocument,D=wd.call(C||d,d,c.SHOW_TEXT|c.SHOW_COMMENT|c.SHOW_CDATA_SECTION|c.SHOW_PROCESSING_INSTRUCTION,null),H=D.nextNode();for(;H;)H.data=xo(H.data),H=D.nextNode();let B=(x=d.querySelectorAll)===null||x===void 0?void 0:x.call(d,"template");B&&hn(B,ue=>{Sn(ue.content)&&Ys(ue.content)})},So=function(d){let x=g?g(d):null;return typeof x!="string"||_e(x)!=="form"?!1:typeof d.nodeName!="string"||typeof d.textContent!="string"||typeof d.removeChild!="function"||d.attributes!==w(d)||typeof d.removeAttribute!="function"||typeof d.removeAttributeNode!="function"||typeof d.getAttributeNode!="function"||typeof d.setAttribute!="function"||typeof d.namespaceURI!="string"||typeof d.insertBefore!="function"||typeof d.hasChildNodes!="function"||d.nodeType!==_(d)||d.childNodes!==S(d)},Sn=function(d){if(!_||typeof d!="object"||d===null)return!1;try{return _(d)===Ke.documentFragment}catch{return!1}},ar=function(d){if(!_||typeof d!="object"||d===null)return!1;try{return typeof _(d)=="number"}catch{return!1}};function ft(O,d,x){O.length!==0&&hn(O,C=>{C.call(t,d,x,xn)})}let Qy=function(d,x){return!!($t&&d.hasChildNodes()&&!ar(d.firstElementChild)&&$e(Fb,d.textContent)&&$e(Fb,d.innerHTML)||$t&&d.namespaceURI===ht&&hA[x]&&(ar(d.firstElementChild)||typeof d.textContent=="string"&&$e(fA[x],d.textContent))||d.nodeType===Ke.processingInstruction||$t&&d.nodeType===Ke.comment&&$e(Gb,d.data))},_o=function(d,x){if(d instanceof RegExp)return $e(d,x);if(d instanceof Function){for(var C=arguments.length,D=new Array(C>2?C-2:0),H=2;H<C;H++)D[H-2]=arguments[H];return!!d(x,...D)}return!1},ew=function(d,x,C){if(!or[x]&&qd(x)&&_o(pt.tagNameCheck,x))return!1;if(Gs&&!wn[x]){let D=y(d),H=S(d);if(H&&D){let B=H.length;for(let ue=B-1;ue>=0;--ue){let Ee=d===C?h(H[ue],!0):H[ue];D.insertBefore(Ee,b(d))}}}return kt(d),!0},Bd=function(d,x,C,D){return d.length===0?x:x===C||x===D?Je(x):x},Vd=function(d,x){return d===x||y(d)!==null?!1:(Zs&&Eo(d),!0)},jd=function(d,x){if(ft(me.beforeSanitizeElements,d,null),Vd(d,x))return!0;if(So(d))return kt(d),!0;let C=_e(L(d));if(ge=Bd(me.uponSanitizeElement,ge,Ds,fo),ft(me.uponSanitizeElement,d,{tagName:C,allowedTags:ge}),Vd(d,x))return!0;if(Qy(d,C))return kt(d),!0;if(or[C]||!(Tt.tagCheck instanceof Function&&Tt.tagCheck(C))&&!ge[C]){let H=ew(d,C,x);return H===!1&&ft(me.afterSanitizeElements,d,null),H}if(z(d)===Ke.element&&!Xy(d)||(C==="noscript"||C==="noembed"||C==="noframes")&&$e(dA,d.innerHTML))return kt(d),!0;if(At&&d.nodeType===Ke.text){let H=xo(d.textContent);d.textContent!==H&&(Kr(t.removed,{element:d.cloneNode()}),d.textContent=H)}return ft(me.afterSanitizeElements,d,null),!1},Wd=function(d,x,C){if(Sd[x]||Fd(x,d)||kd&&(x==="id"||x==="name")&&(C in n||C in jy))return!1;let D=ve[x]||Tt.attributeCheck instanceof Function&&Tt.attributeCheck(x,d);return Us&&$e($y,x)||_d&&$e(Uy,x)?!0:D?Pd[x]||$e(xd,Jr(C,Ed,""))||(x==="src"||x==="xlink:href"||x==="href")&&d!=="script"&&Pb(C,"data:")===0&&Nd[d]||Td&&!$e(Hy,Jr(C,Ed,""))?!0:!C:qd(d)&&_o(pt.tagNameCheck,d)&&_o(pt.attributeNameCheck,x,d)||x==="is"&&pt.allowCustomizedBuiltInElements&&_o(pt.tagNameCheck,C)},tw=te({},["annotation-xml","color-profile","font-face","font-face-format","font-face-name","font-face-src","font-face-uri","missing-glyph"]),qd=function(d){return!tw[eo(d)]&&$e(Fy,d)},nw=function(d,x,C,D){if(q&&typeof m=="object"&&typeof m.getAttributeType=="function"&&!C)switch(m.getAttributeType(d,x)){case"TrustedHTML":return vn(D);case"TrustedScriptURL":return Cy(D)}return D},rw=function(d,x,C,D){try{return C?d.setAttributeNS(C,x,D):d.setAttribute(x,D),So(d)?(kt(d),!1):!0}catch{return Ht(x,d),!1}},Yd=function(d){ft(me.beforeSanitizeAttributes,d,null);let x=d.attributes;if(!x||So(d))return;ve=Bd(me.uponSanitizeAttribute,ve,$s,mo);let C={attrName:"",attrValue:"",keepAttr:!0,allowedAttributes:ve,forceKeepAttr:void 0},D=x.length,H=_e(d.nodeName);for(;D--;){let B=x[D],ue=B.name,Ee=B.namespaceURI,Be=B.value,Ve=_e(ue),Ks=Be,He=ue==="value"?Ks:WT(Ks),Xd=!1;if(C.attrName=Ve,C.attrValue=He,C.keepAttr=!0,C.forceKeepAttr=void 0,ft(me.uponSanitizeAttribute,d,C),He=C.attrValue,Id&&(Ve==="id"||Ve==="name")&&Pb(He,Rd)!==0&&(Ht(ue,d,B),He=Rd+He,Xd=!0),$t&&$e(/((--!?|])>)|<\/(style|script|title|xmp|textarea|noscript|iframe|noembed|noframes)/i,He)){Ht(ue,d,B);continue}if(Ve==="attributename"&&Ob(He,"href")){Ht(ue,d,B);continue}if(!C.forceKeepAttr){if(!C.keepAttr){Ht(ue,d,B);continue}if(!Ad&&$e(pA,He)){Ht(ue,d,B);continue}if(At&&(He=xo(He)),!Wd(H,Ve,He)){Ht(ue,d,B);continue}He=nw(H,Ve,Ee,He),He!==Ks&&rw(d,ue,Ee,He)&&Xd&&Nb(t.removed)}}ft(me.afterSanitizeAttributes,d,null)},To=function(d){let x=null,C=Zd(d);for(ft(me.beforeSanitizeShadowDOM,d,null);x=C.nextNode();)if(ft(me.uponSanitizeShadowNode,x,null),jd(x,d),Yd(x),Sn(x.content)&&To(x.content),z(x)===Ke.element){let D=T(x);Sn(D)&&(Xs(D),To(D))}ft(me.afterSanitizeShadowDOM,d,null)},Xs=function(d){let x=[{node:d,shadow:null}];for(;x.length>0;){let C=x.pop();if(C.shadow){To(C.shadow);continue}let D=C.node,B=z(D)===Ke.element,ue=S(D);if(ue)for(let Ee=ue.length-1;Ee>=0;--Ee)x.push({node:ue[Ee],shadow:null});if(B){let Ee=g?g(D):null;if(typeof Ee=="string"&&_e(Ee)==="template"){let Be=D.content;Sn(Be)&&x.push({node:Be,shadow:null})}}if(B){let Ee=T(D);Sn(Ee)&&x.push({node:null,shadow:Ee},{node:Ee,shadow:null})}}};return t.sanitize=function(O){let d=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},x=null,C=null,D=null,H=null;if(Bs=!O,Bs&&(O="<!-->"),typeof O!="string"&&!ar(O)&&(O=JT(O),typeof O!="string"))throw pn("dirty is not a string, aborting");if(!t.isSupported)return O;Hs?(ge=fo,ve=mo):qs(d),(me.uponSanitizeElement.length>0||me.uponSanitizeAttribute.length>0)&&(ge=Je(ge)),me.uponSanitizeAttribute.length>0&&(ve=Je(ve)),t.removed=[];let B=Zs&&typeof O!="string"&&ar(O);if(B){Jy(O);let Be=L(O);if(typeof Be=="string"){let Ve=_e(Be);if(!ge[Ve]||or[Ve])throw wo(O),pn("root node is forbidden and cannot be sanitized in-place")}if(So(O))throw wo(O),pn("root node is clobbered and cannot be sanitized in-place");try{Xs(O)}catch(Ve){throw wo(O),Ve}}else if(ar(O))x=Gd("<!---->"),C=x.ownerDocument.importNode(O,!0),C.nodeType===Ke.element&&C.nodeName==="BODY"||C.nodeName==="HTML"?x=C:x.appendChild(C),Xs(x);else{if(!bn&&!At&&!Ut&&O.indexOf("<")===-1)return q&&vo?vn(O):O;if(x=Gd(O),!x)return bn?null:vo?Oe:""}x&&Fs&&kt(x.firstChild);let ue=B?O:x;try{let Be=Zd(ue);for(;D=Be.nextNode();)jd(D,ue),Yd(D),Sn(D.content)&&To(D.content)}catch(Be){throw B&&(wo(O),hn(t.removed,Ve=>{Ve.element&&Eo(Ve.element)})),Be}if(B)return hn(t.removed,Be=>{Be.element&&Eo(Be.element)}),At&&Ys(O),O;if(bn){if(At&&Ys(x),go)for(H=Oy.call(x.ownerDocument);x.firstChild;)H.appendChild(x.firstChild);else H=x;return(ve.shadowroot||ve.shadowrootmode)&&(H=My.call(r,H,!0)),H}let Ee=Ut?x.outerHTML:x.innerHTML;return Ut&&ge["!doctype"]&&x.ownerDocument&&x.ownerDocument.doctype&&x.ownerDocument.doctype.name&&$e(cA,x.ownerDocument.doctype.name)&&(Ee="<!DOCTYPE "+x.ownerDocument.doctype.name+`>
`+Ee),At&&(Ee=xo(Ee)),q&&vo?vn(Ee):Ee},t.setConfig=function(){let O=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};qs(O),Hs=!0,fo=ge,mo=ve},t.clearConfig=function(){xn=null,Hs=!1,fo=null,mo=null,q=zs,Oe=""},t.isValidAttribute=function(O,d,x){xn||qs({});let C=_e(O),D=_e(d);return Wd(C,D,x)},t.addHook=function(O,d){typeof d=="function"&&je(me,O)&&Kr(me[O],d)},t.removeHook=function(O,d){if(je(me,O)){if(d!==void 0){let x=VT(me[O],d);return x===-1?void 0:jT(me[O],x,1)[0]}return Nb(me[O])}},t.removeHooks=function(O){je(me,O)&&(me[O]=[])},t.removeAllHooks=function(){me=Zb()},t}var qb=Wb();function rd(){return{async:!1,breaks:!1,extensions:null,gfm:!0,hooks:null,pedantic:!1,renderer:null,silent:!1,tokenizer:null,walkTokens:null}}var gn=rd();function ny(e){gn=e}var fn={exec:()=>null};function er(e){let t=[];return n=>{let r=Math.max(0,Math.min(3,n-1)),o=t[r];return o||(o=e(r),t[r]=o),o}}function K(e,t=""){let n=typeof e=="string"?e:e.source,r={replace:(o,i)=>{let a=typeof i=="string"?i:i.source;return a=a.replace(Ue.caret,"$1"),n=n.replace(o,a),r},getRegex:()=>new RegExp(n,t)};return r}var vA=((e="")=>{try{return!!new RegExp("(?<=1)(?<!1)"+e)}catch{return!1}})(),Ue={codeRemoveIndent:/^(?: {1,4}| {0,3}\t)/gm,outputLinkReplace:/\\([\[\]])/g,indentCodeCompensation:/^(\s+)(?:```)/,beginningSpace:/^\s+/,endingHash:/#$/,startingSpaceChar:/^ /,endingSpaceChar:/ $/,endingSpaceTabChar:/[ \t]$/,nonSpaceChar:/[^ ]/,newLineCharGlobal:/\n/g,tabCharGlobal:/\t/g,multipleSpaceGlobal:/\s+/g,blankLine:/^[ \t]*$/,doubleBlankLine:/\n[ \t]*\n[ \t]*$/,blockquoteStart:/^ {0,3}>/,blockquoteSetextReplace:/\n {0,3}((?:=+|-+) *)(?=\n|$)/g,blockquoteSetextReplace2:/^ {0,3}>[ \t]?/gm,listReplaceNesting:/^ {1,4}(?=( {4})*[^ ])/g,listIsTask:/^\[[ xX]\] +\S/,listReplaceTask:/^\[[ xX]\] +/,listTaskCheckbox:/\[[ xX]\]/,anyLine:/\n.*\n/,hrefBrackets:/^<(.*)>$/,tableDelimiter:/[:|]/,tableAlignChars:/^\||\| *$/g,tableRowBlankLine:/\n[ \t]*$/,tableAlignRight:/^ *-+: *$/,tableAlignCenter:/^ *:-+: *$/,tableAlignLeft:/^ *:-+ *$/,startATag:/^<a /i,endATag:/^<\/a>/i,startPreScriptTag:/^<(pre|code|kbd|script)(\s|>)/i,endPreScriptTag:/^<\/(pre|code|kbd|script)(\s|>)/i,startAngleBracket:/^</,endAngleBracket:/>$/,pedanticHrefTitle:/^([^'"]*[^\s])\s+(['"])(.*)\2/,unicodeAlphaNumeric:/[\p{L}\p{N}]/u,escapeTest:/[&<>"']/,escapeReplace:/[&<>"']/g,escapeTestNoEncode:/[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/,escapeReplaceNoEncode:/[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/g,caret:/(^|[^\[])\^/g,percentDecode:/%25/g,findPipe:/\|/g,splitPipe:/ \|/,slashPipe:/\\\|/g,carriageReturn:/\r\n|\r/g,spaceLine:/^ +$/gm,notSpaceStart:/^\S*/,endingNewline:/\n$/,listItemRegex:e=>new RegExp(`^( {0,3}${e})((?:[	 ][^\\n]*)?(?:\\n|$))`),nextBulletRegex:er(e=>new RegExp(`^ {0,${e}}(?:[*+-]|\\d{1,9}[.)])((?:[ 	][^\\n]*)?(?:\\n|$))`)),hrRegex:er(e=>new RegExp(`^ {0,${e}}((?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$)`)),fencesBeginRegex:er(e=>new RegExp(`^ {0,${e}}(?:\`\`\`|~~~)`)),headingBeginRegex:er(e=>new RegExp(`^ {0,${e}}#`)),htmlBeginRegex:er(e=>new RegExp(`^ {0,${e}}<(?:[a-z].*>|!--)`,"i")),blockquoteBeginRegex:er(e=>new RegExp(`^ {0,${e}}>`))},bA=/^(?:[ \t]*(?:\n|$))+/,yA=/^((?: {4}| {0,3}\t)[^\n]+(?:\n(?:[ \t]*(?:\n|$))*)?)+/,wA=/^ {0,3}(`{3,}(?=[^`\n]*(?:\n|$))|~{3,})([^\n]*)(?:\n|$)(?:|([\s\S]*?)(?:\n|$))(?: {0,3}\1[~`]* *(?=\n|$)|$)/,ro=/^ {0,3}((?:-[\t ]*){3,}|(?:_[ \t]*){3,}|(?:\*[ \t]*){3,})(?:\n+|$)/,EA=/^ {0,3}(#{1,6})(?=\s|$)(.*)(?:\n+|$)/,od=/ {0,3}(?:[*+-]|\d{1,9}[.)])/,ry=/^(?!bull |blockCode|fences|blockquote|heading|html|table)((?:.|\n(?!\s*?\n|bull |blockCode|fences|blockquote|heading|html|table))+?)\n {0,3}(=+|-+) *(?:\n+|$)/,oy=K(ry).replace(/bull/g,od).replace(/blockCode/g,/(?: {4}| {0,3}\t)/).replace(/fences/g,/ {0,3}(?:`{3,}|~{3,})/).replace(/blockquote/g,/ {0,3}>/).replace(/heading/g,/ {0,3}#{1,6}(?:\s|$)/).replace(/html/g,/ {0,3}<[^\n>]+>\n/).replace(/\|table/g,"").getRegex(),xA=K(ry).replace(/bull/g,od).replace(/blockCode/g,/(?: {4}| {0,3}\t)/).replace(/fences/g,/ {0,3}(?:`{3,}|~{3,})/).replace(/blockquote/g,/ {0,3}>/).replace(/heading/g,/ {0,3}#{1,6}(?:\s|$)/).replace(/html/g,/ {0,3}<[^\n>]+>\n/).replace(/table/g,/ {0,3}\|?(?:[:\- ]*\|)+[\:\- ]*\n/).getRegex(),id=/^([^\n]+(?:\n(?!hr|heading|lheading|blockquote|fences|list|html|table|[ \t]+\n)[^\n]+)*)/,SA=/^[^\n]+/,ad=/(?!\s*\])(?:\\[\s\S]|[^\[\]\\])+/,_A=K(/^ {0,3}\[(label)\]: *(?:\n[ \t]*)?([^<\s][^\s]*|<.*?>)(?:(?: +(?:\n[ \t]*)?| *\n[ \t]*)(title))? *(?:\n+|$)/).replace("label",ad).replace("title",/(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/).getRegex(),TA=K(/^(bull)([ \t][^\n]*?)?(?:\n|$)/).replace(/bull/g,od).getRegex(),xs="address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option|p|param|search|section|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul",sd=/<!--(?:-?>|[\s\S]*?(?:-->|$))/,AA=K("^ {0,3}(?:<(script|pre|style|textarea)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n*|$)|comment[^\\n]*(\\n+|$)|<\\?[\\s\\S]*?(?:\\?>[^\\n]*\\n*|$)|<![A-Z][\\s\\S]*?(?:>[^\\n]*\\n*|$)|<!\\[CDATA\\[[\\s\\S]*?(?:\\]\\]>[^\\n]*\\n*|$)|</?(tag)(?: +|\\n|/?>)[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$)|<(?!script|pre|style|textarea)([a-z][a-z0-9-]*)(?:attribute)*? */?>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$)|</(?!script|pre|style|textarea)[a-z][a-z0-9-]*\\s*>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$))","i").replace("comment",sd).replace("tag",xs).replace("attribute",/ +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/).getRegex(),iy=e=>K(id).replace("hr",ro).replace("heading"," {0,3}#{1,6}(?:\\s|$)").replace("|lheading","").replace("|table","").replace("blockquote"," {0,3}>").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*(?:\\n|$))|~~~)[^\\n]*(?:\\n|$)").replace("list",e).replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",xs).getRegex(),kA=iy(/ {0,3}(?:[*+-]|1[.)])[ \t]+[^ \t\n]/),IA=iy(/ {0,3}(?:[*+-]|\d{1,9}[.)])(?:[ \t]|\n|$)/),RA=K(/^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/).replace("paragraph",IA).getRegex(),ld={blockquote:RA,code:yA,def:_A,fences:wA,heading:EA,hr:ro,html:AA,lheading:oy,list:TA,newline:bA,paragraph:kA,table:fn,text:SA},Yb=K("^ *([^\\n ].*)\\n {0,3}((?:\\| *)?:?-+:? *(?:\\| *:?-+:? *)*(?:\\| *)?)(?:\\n((?:(?! *\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)").replace("hr",ro).replace("heading"," {0,3}#{1,6}(?:\\s|$)").replace("blockquote"," {0,3}>").replace("code","(?: {4}| {0,3}	)[^\\n]").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*(?:\\n|$))|~~~)[^\\n]*(?:\\n|$)").replace("list"," {0,3}(?:[*+-]|1[.)])[ \\t]").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",xs).getRegex(),CA={...ld,lheading:xA,table:Yb,paragraph:K(id).replace("hr",ro).replace("heading"," {0,3}#{1,6}(?:\\s|$)").replace("|lheading","").replace("table",Yb).replace("blockquote"," {0,3}>").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*(?:\\n|$))|~~~)[^\\n]*(?:\\n|$)").replace("list"," {0,3}(?:[*+-]|1[.)])[ \\t]+[^ \\t\\n]").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",xs).getRegex()},NA={...ld,html:K(`^ *(?:comment *(?:\\n|\\s*$)|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)|<tag(?:"[^"]*"|'[^']*'|\\s[^'"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))`).replace("comment",sd).replace(/tag/g,"(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:|[^\\w\\s@]*@)\\b").getRegex(),def:/^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/,heading:/^(#{1,6})(.*)(?:\n+|$)/,fences:fn,lheading:/^(.+?)\n {0,3}(=+|-+) *(?:\n+|$)/,paragraph:K(id).replace("hr",ro).replace("heading",` *#{1,6} *[^
]`).replace("lheading",oy).replace("|table","").replace("blockquote"," {0,3}>").replace("|fences","").replace("|list","").replace("|html","").replace("|tag","").getRegex()},OA=/^\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/,PA=/^(`+)([^`]|[^`][\s\S]*?[^`])\1(?!`)/,ay=/^( {2,}|\\)\n(?!\s*$)/,MA=/^(`+|[^`])(?:(?= {2,}\n)|[\s\S]*?(?:(?=[\\<!\[`*_]|\b_|$)|[^ ](?= {2,}\n)))/,_t=/[\p{P}\p{S}]/u,tr=/[\s\p{P}\p{S}]/u,oo=/[^\s\p{P}\p{S}]/u,zA=K(/^((?![*_])punctSpace)/,"u").replace(/punctSpace/g,tr).getRegex(),LA=/[\p{Pi}\p{Ps}"']/u,sy=/(?!~)[\p{P}\p{S}]/u,DA=/(?!~)[\s\p{P}\p{S}]/u,$A=/(?:[^\s\p{P}\p{S}]|~)/u,UA=K(/link|precode-code|html/,"g").replace("link",/\[(?:[^\[\]`]|(?<a>`+)[^`]+\k<a>(?!`))*?\]\((?:\\[\s\S]|[^\\\(\)]|\((?:\\[\s\S]|[^\\\(\)])*\))*\)/).replace("precode-",vA?"(?<!`)()":"(^^|[^`])").replace("code",/(?<b>`+)[^`]+\k<b>(?!`)/).replace("html",/<(?! )[^<>]*?>/).getRegex(),ly=/^(?:\*+(?:((?!\*)punct)|([^\s*]))?)|^_+(?:((?!_)punct)|([^\s_]))?/,HA=K(ly,"u").replace(/punct/g,_t).getRegex(),FA=K(ly,"u").replace(/punct/g,sy).getRegex(),GA=/^(?:\*+(?:((?!\*)(?!openQuote)punct)|([^\s*]))?)|^_+(?:((?!_)(?!openQuote)punct)|([^\s_]))?/,ZA=K(GA,"u").replace(/openQuote/g,LA).replace(/punct/g,_t).getRegex(),cy="^[^_*]*?__[^_*]*?\\*[^_*]*?(?=__)|[^*]+(?=[^*])|(?!\\*)punct(\\*+)(?=[\\s]|$)|notPunctSpace(\\*+)(?!\\*)(?=punctSpace|$)|(?!\\*)punctSpace(\\*+)(?=notPunctSpace)|[\\s](\\*+)(?!\\*)(?=punct)|(?!\\*)punct(\\*+)(?!\\*)(?=punct)|notPunctSpace(\\*+)(?=notPunctSpace)",BA=K(cy,"gu").replace(/notPunctSpace/g,oo).replace(/punctSpace/g,tr).replace(/punct/g,_t).getRegex(),VA=K(cy,"gu").replace(/notPunctSpace/g,$A).replace(/punctSpace/g,DA).replace(/punct/g,sy).getRegex(),jA="^[^_*]*?__[^_*]*?\\*[^_*]*?(?=__)|[^*]+(?=[^*])|(?!\\*)punct(\\*+)(?=[\\s]|$)|notPunctSpace(\\*+)(?!\\*)(?=punctSpace|$)|(?!\\*)[\\s](\\*+)(?=notPunctSpace)|[\\s](\\*+)(?!\\*)(?=punct)|(?!\\*)punct(\\*+)(?!\\*)(?=punct)|(?:(?!\\*)punct|notPunctSpace)(\\*+)(?!\\*)(?=notPunctSpace)",WA=K(jA,"gu").replace(/notPunctSpace/g,oo).replace(/punctSpace/g,tr).replace(/punct/g,_t).getRegex(),qA=K("^[^_*]*?\\*\\*[^_*]*?_[^_*]*?(?=\\*\\*)|[^_]+(?=[^_])|(?!_)punct(_+)(?=[\\s]|$)|notPunctSpace(_+)(?!_)(?=punctSpace|$)|(?!_)punctSpace(_+)(?=notPunctSpace)|[\\s](_+)(?!_)(?=punct)|(?!_)punct(_+)(?!_)(?=punct)","gu").replace(/notPunctSpace/g,oo).replace(/punctSpace/g,tr).replace(/punct/g,_t).getRegex(),YA="^[^_*]*?\\*\\*[^_*]*?_[^_*]*?(?=\\*\\*)|[^_]+(?=[^_])|(?!_)punct(_+)(?=[\\s]|$)|notPunctSpace(_+)(?!_)(?=punctSpace|$)|(?!_)[\\s](_+)(?=notPunctSpace)|[\\s](_+)(?!_)(?=punct)|(?!_)punct(_+)(?!_)(?=punct)|(?:(?!_)punct|notPunctSpace)(_+)(?!_)(?=notPunctSpace)",XA=K(YA,"gu").replace(/notPunctSpace/g,oo).replace(/punctSpace/g,tr).replace(/punct/g,_t).getRegex(),KA=K(/^~~?(?:((?!~)punct)|[^\s~])/,"u").replace(/punct/g,_t).getRegex(),JA="^[^~]+(?=[^~])|(?!~)punct(~~?)(?=[\\s]|$)|notPunctSpace(~~?)(?!~)(?=punctSpace|$)|(?!~)punctSpace(~~?)(?=notPunctSpace)|[\\s](~~?)(?!~)(?=punct)|(?!~)punct(~~?)(?!~)(?=punct)|notPunctSpace(~~?)(?=notPunctSpace)",QA=K(JA,"gu").replace(/notPunctSpace/g,oo).replace(/punctSpace/g,tr).replace(/punct/g,_t).getRegex(),ek=K(/\\(punct)/,"gu").replace(/punct/g,_t).getRegex(),tk=K(/^<(scheme:[^\s\x00-\x1f<>]*|email)>/).replace("scheme",/[a-zA-Z][a-zA-Z0-9+.-]{1,31}/).replace("email",/[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/).getRegex(),nk=K(sd).replace("(?:-->|$)","-->").getRegex(),rk=K("^comment|^</[a-zA-Z][a-zA-Z0-9-]*\\s*>|^<[a-zA-Z][a-zA-Z0-9-]*(?:attribute)*?\\s*/?>|^<\\?[\\s\\S]*?\\?>|^<![a-zA-Z]+\\s[\\s\\S]*?>|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>").replace("comment",nk).replace("attribute",/\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/).getRegex(),ok=/\[(?:\\[\s\S]|[^\[\]\\])*\]/,ys=K(/(?:\[(?:brackets|\\[\s\S]|[^\[\]\\])*\]|\\[\s\S]|`+(?!`)[^`]*?`+(?!`)|``+(?=\])|[^\[\]\\`])*?/).replace("brackets",ok).getRegex(),ik=K(/^!?\[(label)\]\(\s*(href)(?:(?:[ \t]+(?:\n[ \t]*)?|\n[ \t]*)(title))?\s*\)/).replace("label",ys).replace("href",/<(?:\\.|[^\n<>\\])+>|[^ \t\n\x00-\x1f]+|(?=\))/).replace("title",/"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/).getRegex(),uy=K(/^!?\[(label)\]\[(ref)\]/).replace("label",ys).replace("ref",ad).getRegex(),dy=K(/^!?\[(ref)\](?:\[\])?/).replace("ref",ad).getRegex(),ak=K("reflink|nolink(?!\\()","g").replace("reflink",uy).replace("nolink",dy).getRegex(),Xb=/[hH][tT][tT][pP][sS]?|[fF][tT][pP]/,cd={_backpedal:fn,anyPunctuation:ek,autolink:tk,blockSkip:UA,br:ay,code:PA,del:fn,delLDelim:fn,delRDelim:fn,emStrongLDelim:HA,emStrongRDelimAst:BA,emStrongRDelimUnd:qA,escape:OA,link:ik,nolink:dy,punctuation:zA,reflink:uy,reflinkSearch:ak,tag:rk,text:MA,url:fn},sk={...cd,emStrongLDelim:ZA,emStrongRDelimAst:WA,emStrongRDelimUnd:XA,link:K(/^!?\[(label)\]\((.*?)\)/).replace("label",ys).getRegex(),reflink:K(/^!?\[(label)\]\s*\[([^\]]*)\]/).replace("label",ys).getRegex()},ed={...cd,emStrongRDelimAst:VA,emStrongLDelim:FA,delLDelim:KA,delRDelim:QA,url:K(/^((?:protocol):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/).replace("protocol",Xb).replace("email",/[A-Za-z0-9._+-]+(@)[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![\w-])/).getRegex(),_backpedal:/(?:[^?!.,:;*_'"~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_'"~)]+(?!$))+/,del:/^(~~?)(?=[^\s~])((?:\\[\s\S]|[^\\])*?(?:\\[\s\S]|[^\s~\\]))\1(?=[^~]|$)/,text:K(/^(`+|~+|[^`~])(?:(?=[`~])|(?= {2,}\n)|(?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)|[\s\S]*?(?:(?=[\\<!\[`*~_]|\b_|protocol:\/\/|www\.|$)|[^ ](?= {2,}\n)|[^a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-](?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)))/).replace("protocol",Xb).getRegex()},lk={...ed,br:K(ay).replace("{2,}","*").getRegex(),text:K(ed.text).replace("\\b_","\\b_| {2,}\\n").replace(/\{2,\}/g,"*").getRegex()},bs={normal:ld,gfm:CA,pedantic:NA},to={normal:cd,gfm:ed,breaks:lk,pedantic:sk},ck={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"},Kb=e=>ck[e];function Qe(e,t){if(t){if(Ue.escapeTest.test(e))return e.replace(Ue.escapeReplace,Kb)}else if(Ue.escapeTestNoEncode.test(e))return e.replace(Ue.escapeReplaceNoEncode,Kb);return e}function Jb(e){try{e=encodeURI(e).replace(Ue.percentDecode,"%")}catch{return null}return e}function Qb(e,t){let n=e.replace(Ue.findPipe,(i,a,s)=>{let c=!1,l=a;for(;--l>=0&&s[l]==="\\";)c=!c;return c?"|":" |"}),r=n.split(Ue.splitPipe),o=0;if(r[0].trim()||r.shift(),r.length>0&&!r.at(-1)?.trim()&&r.pop(),t)if(r.length>t)r.splice(t);else for(;r.length<t;)r.push("");for(;o<r.length;o++)r[o]=r[o].trim().replace(Ue.slashPipe,"|");return r}function Dt(e,t,n){let r=e.length;if(r===0)return"";let o=0;for(;o<r;){let i=e.charAt(r-o-1);if(i===t&&!n)o++;else if(i!==t&&n)o++;else break}return e.slice(0,r-o)}function ey(e){let t=e.split(`
`),n=t.length-1;for(;n>=0&&Ue.blankLine.test(t[n]);)n--;return t.length-n<=2?e:t.slice(0,n+1).join(`
`)}function uk(e,t){if(e.indexOf(t[1])===-1)return-1;let n=0;for(let r=0;r<e.length;r++)if(e[r]==="\\")r++;else if(e[r]===t[0])n++;else if(e[r]===t[1]&&(n--,n<0))return r;return n>0?-2:-1}function dk(e,t=0){let n=t,r="";for(let o of e)if(o==="	"){let i=4-n%4;r+=" ".repeat(i),n+=i}else r+=o,n++;return r}function ty(e,t,n,r,o){let i=t.href,a=t.title||null,s=e[1].replace(o.other.outputLinkReplace,"$1"),c=e[0].charAt(0)==="!";r.state.inLink=!0;let l=r.state.linkEmitted,u=r.state.inRawBlock;r.state.linkEmitted=!1;let m=r.inlineTokens(s),f=r.state.linkEmitted;if(r.state.linkEmitted=l,r.state.inLink=!1,!c){if(f){r.state.inRawBlock=u;return}r.state.linkEmitted=!0}return{type:c?"image":"link",raw:n,href:i,title:a,text:s,tokens:m}}function pk(e,t,n){let r=e.match(n.other.indentCodeCompensation);if(r===null)return t;let o=r[1];return t.split(`
`).map(i=>{let a=i.match(n.other.beginningSpace);if(a===null)return i;let[s]=a;return i.slice(Math.min(s.length,o.length))}).join(`
`)}var ws=class{options;rules;lexer;constructor(e){this.options=e||gn}space(e){let t=this.rules.block.newline.exec(e);if(t&&t[0].length>0)return{type:"space",raw:t[0]}}code(e){let t=this.rules.block.code.exec(e);if(t){let n=this.options.pedantic?t[0]:ey(t[0]),r=n.replace(this.rules.other.codeRemoveIndent,"");return{type:"code",raw:n,codeBlockStyle:"indented",text:r}}}fences(e){let t=this.rules.block.fences.exec(e);if(t){let n=t[0],r=pk(n,t[3]||"",this.rules);return{type:"code",raw:n,lang:t[2]?t[2].trim().replace(this.rules.inline.anyPunctuation,"$1"):t[2],text:r}}}heading(e){let t=this.rules.block.heading.exec(e);if(t){let n=t[2].trim();if(this.rules.other.endingHash.test(n)){let r=Dt(n,"#");(this.options.pedantic||!r||this.rules.other.endingSpaceTabChar.test(r))&&(n=r.trim())}return{type:"heading",raw:Dt(t[0],`
`),depth:t[1].length,text:n,tokens:this.lexer.inline(n)}}}hr(e){let t=this.rules.block.hr.exec(e);if(t)return{type:"hr",raw:Dt(t[0],`
`)}}blockquote(e){let t=this.rules.block.blockquote.exec(e);if(t){let n=Dt(t[0],`
`).split(`
`),r="",o="",i=[];for(;n.length>0;){let a=!1,s=[],c;for(c=0;c<n.length;c++)if(this.rules.other.blockquoteStart.test(n[c]))s.push(n[c]),a=!0;else if(!a)s.push(n[c]);else break;n=n.slice(c);let l=s.join(`
`),u=l.replace(this.rules.other.blockquoteSetextReplace,`
    $1`).replace(this.rules.other.blockquoteSetextReplace2,"");r=r?`${r}
${l}`:l,o=o?`${o}
${u}`:u;let m=this.lexer.state.top;if(this.lexer.state.top=!0,this.lexer.blockTokens(u,i,!0),this.lexer.state.top=m,n.length===0)break;let f=i.at(-1);if(f?.type==="code")break;if(f?.type==="blockquote"){let h=f,p=n.join(`
`),E=h.raw+`
`+p.replace(this.rules.other.blockquoteSetextReplace2,""),b=this.blockquote(E);i[i.length-1]=b,r=`${r}
${p}`,o=o.substring(0,o.length-h.text.length)+b.text;break}else if(f?.type==="list"){let h=f,p=h.raw+`
`+n.join(`
`),E=this.list(p);i[i.length-1]=E,r=r.substring(0,r.length-f.raw.length)+E.raw,o=o.substring(0,o.length-h.raw.length)+E.raw,n=p.substring(i.at(-1).raw.length).split(`
`);continue}}return{type:"blockquote",raw:r,tokens:i,text:o}}}list(e){let t=this.rules.block.list.exec(e);if(t){let n=t[1].trim(),r=n.length>1,o={type:"list",raw:"",ordered:r,start:r?+n.slice(0,-1):"",loose:!1,items:[]};n=r?`\\d{1,9}\\${n.slice(-1)}`:`\\${n}`,this.options.pedantic&&(n=r?n:"[*+-]");let i=this.rules.other.listItemRegex(n),a=!1;for(;e;){let c=!1,l="",u="";if(!(t=i.exec(e))||this.rules.block.hr.test(e))break;l=t[0],e=e.substring(l.length);let m=dk(t[2].split(`
`,1)[0],t[1].length),f=e.split(`
`,1)[0],h=!m.trim(),p=0;if(this.options.pedantic?(p=2,u=m.trimStart()):h?p=t[1].length+1:(p=m.search(this.rules.other.nonSpaceChar),p=p>4?1:p,u=m.slice(p),p+=t[1].length),h&&this.rules.other.blankLine.test(f)&&(l+=f+`
`,e=e.substring(f.length+1),c=!0),!c){let E=this.rules.other.nextBulletRegex(p),b=this.rules.other.hrRegex(p),S=this.rules.other.fencesBeginRegex(p),y=this.rules.other.headingBeginRegex(p),T=this.rules.other.htmlBeginRegex(p),w=this.rules.other.blockquoteBeginRegex(p);for(;e;){let _=e.split(`
`,1)[0],g;if(f=_,this.options.pedantic?(f=f.replace(this.rules.other.listReplaceNesting,"  "),g=f):g=f.replace(this.rules.other.tabCharGlobal,"    "),S.test(f)||y.test(f)||T.test(f)||w.test(f)||E.test(f)||b.test(f))break;if(g.search(this.rules.other.nonSpaceChar)>=p||!f.trim())u+=`
`+g.slice(p);else{if(h||m.replace(this.rules.other.tabCharGlobal,"    ").search(this.rules.other.nonSpaceChar)>=4||S.test(m)||y.test(m)||b.test(m))break;u+=`
`+f}h=!f.trim(),l+=_+`
`,e=e.substring(_.length+1),m=g.slice(p)}}o.loose||(a?o.loose=!0:this.rules.other.doubleBlankLine.test(l)&&(a=!0)),o.items.push({type:"list_item",raw:l,task:!!this.options.gfm&&this.rules.other.listIsTask.test(u),loose:!1,text:u,tokens:[]}),o.raw+=l}let s=o.items.at(-1);if(s)s.raw=s.raw.trimEnd(),s.text=s.text.trimEnd();else return;o.raw=o.raw.trimEnd();for(let c of o.items)if(this.lexer.state.top=!1,c.tokens=this.lexer.blockTokens(c.text,[]),!o.loose){let l=c.tokens.filter(m=>m.type==="space"),u=l.length>0&&l.some(m=>this.rules.other.anyLine.test(m.raw));o.loose=u}for(let c of o.items){let l=c.tokens[0];if(c.task&&(l?.type==="text"||l?.type==="paragraph")){c.text=c.text.replace(this.rules.other.listReplaceTask,""),l.raw=l.raw.replace(this.rules.other.listReplaceTask,""),l.text=l.text.replace(this.rules.other.listReplaceTask,"");for(let m=this.lexer.inlineQueue.length-1;m>=0;m--)if(this.rules.other.listIsTask.test(this.lexer.inlineQueue[m].src)){this.lexer.inlineQueue[m].src=this.lexer.inlineQueue[m].src.replace(this.rules.other.listReplaceTask,"");break}let u=this.rules.other.listTaskCheckbox.exec(c.raw);if(u){let m={type:"checkbox",raw:u[0]+" ",checked:u[0]!=="[ ]"};c.checked=m.checked,o.loose?c.tokens[0]&&["paragraph","text"].includes(c.tokens[0].type)&&"tokens"in c.tokens[0]&&c.tokens[0].tokens?(c.tokens[0].raw=m.raw+c.tokens[0].raw,c.tokens[0].text=m.raw+c.tokens[0].text,c.tokens[0].tokens.unshift(m)):c.tokens.unshift({type:"paragraph",raw:m.raw,text:m.raw,tokens:[m]}):c.tokens.unshift(m)}}else c.task&&(c.task=!1)}if(o.loose)for(let c of o.items){c.loose=!0;for(let l of c.tokens)l.type==="text"&&(l.type="paragraph")}return o}}html(e){let t=this.rules.block.html.exec(e);if(t){let n=ey(t[0]);return{type:"html",block:!0,raw:n,pre:t[1]==="pre"||t[1]==="script"||t[1]==="style",text:n}}}def(e){let t=this.rules.block.def.exec(e);if(t){let n=t[1].toLowerCase().replace(this.rules.other.multipleSpaceGlobal," "),r=t[2]?t[2].replace(this.rules.other.hrefBrackets,"$1").replace(this.rules.inline.anyPunctuation,"$1"):"",o=t[3]?t[3].substring(1,t[3].length-1).replace(this.rules.inline.anyPunctuation,"$1"):t[3];return{type:"def",tag:n,raw:Dt(t[0],`
`),href:r,title:o}}}table(e){let t=this.rules.block.table.exec(e);if(!t||!this.rules.other.tableDelimiter.test(t[2]))return;let n=Qb(t[1]),r=t[2].replace(this.rules.other.tableAlignChars,"").split("|"),o=t[3]?.trim()?t[3].replace(this.rules.other.tableRowBlankLine,"").split(`
`):[],i={type:"table",raw:Dt(t[0],`
`),header:[],align:[],rows:[]};if(n.length===r.length){for(let a of r)this.rules.other.tableAlignRight.test(a)?i.align.push("right"):this.rules.other.tableAlignCenter.test(a)?i.align.push("center"):this.rules.other.tableAlignLeft.test(a)?i.align.push("left"):i.align.push(null);for(let a=0;a<n.length;a++)i.header.push({text:n[a],tokens:this.lexer.inline(n[a]),header:!0,align:i.align[a]});for(let a of o)i.rows.push(Qb(a,i.header.length).map((s,c)=>({text:s,tokens:this.lexer.inline(s),header:!1,align:i.align[c]})));return i}}lheading(e){let t=this.rules.block.lheading.exec(e);if(t){let n=t[1].trim();return{type:"heading",raw:Dt(t[0],`
`),depth:t[2].charAt(0)==="="?1:2,text:n,tokens:this.lexer.inline(n)}}}paragraph(e){let t=this.rules.block.paragraph.exec(e);if(t){let n=t[1].charAt(t[1].length-1)===`
`?t[1].slice(0,-1):t[1];return{type:"paragraph",raw:t[0],text:n,tokens:this.lexer.inline(n)}}}text(e){let t=this.rules.block.text.exec(e);if(t)return{type:"text",raw:t[0],text:t[0],tokens:this.lexer.inline(t[0])}}escape(e){let t=this.rules.inline.escape.exec(e);if(t)return{type:"escape",raw:t[0],text:t[1]}}tag(e){let t=this.rules.inline.tag.exec(e);if(t)return!this.lexer.state.inLink&&this.rules.other.startATag.test(t[0])?this.lexer.state.inLink=!0:this.lexer.state.inLink&&this.rules.other.endATag.test(t[0])&&(this.lexer.state.inLink=!1),!this.lexer.state.inRawBlock&&this.rules.other.startPreScriptTag.test(t[0])?this.lexer.state.inRawBlock=!0:this.lexer.state.inRawBlock&&this.rules.other.endPreScriptTag.test(t[0])&&(this.lexer.state.inRawBlock=!1),{type:"html",raw:t[0],inLink:this.lexer.state.inLink,inRawBlock:this.lexer.state.inRawBlock,block:!1,text:t[0]}}link(e){let t=this.rules.inline.link.exec(e);if(t){let n=t[2].trim();if(!this.options.pedantic&&this.rules.other.startAngleBracket.test(n)){if(!this.rules.other.endAngleBracket.test(n))return;let i=Dt(n.slice(0,-1),"\\");if((n.length-i.length)%2===0)return}else{let i=uk(t[2],"()");if(i===-2)return;if(i>-1){let a=(t[0].indexOf("!")===0?5:4)+t[1].length+i;t[2]=t[2].substring(0,i),t[0]=t[0].substring(0,a).trim(),t[3]=""}}let r=t[2],o="";if(this.options.pedantic){let i=this.rules.other.pedanticHrefTitle.exec(r);i&&(r=i[1],o=i[3])}else o=t[3]?t[3].slice(1,-1):"";return r=r.trim(),this.rules.other.startAngleBracket.test(r)&&(this.options.pedantic&&!this.rules.other.endAngleBracket.test(n)?r=r.slice(1):r=r.slice(1,-1)),ty(t,{href:r&&r.replace(this.rules.inline.anyPunctuation,"$1"),title:o&&o.replace(this.rules.inline.anyPunctuation,"$1")},t[0],this.lexer,this.rules)}}reflink(e,t){let n;if((n=this.rules.inline.reflink.exec(e))||(n=this.rules.inline.nolink.exec(e))){let r=(n[2]||n[1]).replace(this.rules.other.multipleSpaceGlobal," "),o=t[r.toLowerCase()];if(!o){let i=n[0].charAt(0);return{type:"text",raw:i,text:i}}return ty(n,o,n[0],this.lexer,this.rules)}}emStrong(e,t,n=""){let r=this.rules.inline.emStrongLDelim.exec(e);if(!(!r||!r[1]&&!r[2]&&!r[3]&&!r[4]||r[4]&&n.match(this.rules.other.unicodeAlphaNumeric))&&(!(r[1]||r[3])||!n||this.rules.inline.punctuation.exec(n))){let o=[...r[0]].length-1,i,a,s=o,c=0,l=r[0][0],u=n===l,m=l==="*"?this.rules.inline.emStrongRDelimAst:this.rules.inline.emStrongRDelimUnd;for(m.lastIndex=0,t=t.slice(-1*e.length+o);(r=m.exec(t))!==null;){if(i=r[1]||r[2]||r[3]||r[4]||r[5]||r[6],!i)continue;if(a=[...i].length,r[3]||r[4]){s+=a;continue}else if(r[5]||r[6]){if(o%3&&!((o+a)%3)){c+=a;continue}if(u)break}if(s-=a,s>0)continue;a=Math.min(a,a+s+c);let f=[...r[0]][0].length,h=e.slice(0,o+r.index+f+a);if(Math.min(o,a)%2){let E=h.slice(1,-1);return{type:"em",raw:h,text:E,tokens:this.lexer.inlineTokens(E)}}let p=h.slice(2,-2);return{type:"strong",raw:h,text:p,tokens:this.lexer.inlineTokens(p)}}}}codespan(e){let t=this.rules.inline.code.exec(e);if(t){let n=t[2].replace(this.rules.other.newLineCharGlobal," "),r=this.rules.other.nonSpaceChar.test(n),o=this.rules.other.startingSpaceChar.test(n)&&this.rules.other.endingSpaceChar.test(n);return r&&o&&(n=n.substring(1,n.length-1)),{type:"codespan",raw:t[0],text:n}}}br(e){let t=this.rules.inline.br.exec(e);if(t)return{type:"br",raw:t[0]}}del(e,t,n=""){let r=this.rules.inline.delLDelim.exec(e);if(r&&(!r[1]||!n||this.rules.inline.punctuation.exec(n))){let o=[...r[0]].length-1,i,a,s=o,c=this.rules.inline.delRDelim;for(c.lastIndex=0,t=t.slice(-1*e.length+o);(r=c.exec(t))!==null;){if(i=r[1]||r[2]||r[3]||r[4]||r[5]||r[6],!i||(a=[...i].length,a!==o))continue;if(r[3]||r[4]){s+=a;continue}if(s-=a,s>0)continue;a=Math.min(a,a+s);let l=[...r[0]][0].length,u=e.slice(0,o+r.index+l+a),m=u.slice(o,-o);return{type:"del",raw:u,text:m,tokens:this.lexer.inlineTokens(m)}}}}autolink(e){let t=this.rules.inline.autolink.exec(e);if(t){let n,r;return t[2]==="@"?(n=t[1],r="mailto:"+n):(n=t[1],r=n),{type:"link",raw:t[0],text:n,href:r,autolink:!0,tokens:[{type:"text",raw:n,text:n}]}}}url(e){let t;if(t=this.rules.inline.url.exec(e)){let n,r;if(t[2]==="@")n=t[0],r="mailto:"+n;else{let o;do o=t[0],t[0]=this.rules.inline._backpedal.exec(t[0])?.[0]??"";while(o!==t[0]);n=t[0],t[1]==="www."?r="http://"+t[0]:r=t[0]}return{type:"link",raw:t[0],text:n,href:r,autolink:!0,tokens:[{type:"text",raw:n,text:n}]}}}inlineText(e){let t=this.rules.inline.text.exec(e);if(t){let n=this.lexer.state.inRawBlock;return{type:"text",raw:t[0],text:t[0],escaped:n}}}},ct=class td{tokens;options;state;inlineQueue;tokenizer;constructor(t){this.tokens=[],this.tokens.links=Object.create(null),this.options=t||gn,this.options.tokenizer=this.options.tokenizer||new ws,this.tokenizer=this.options.tokenizer,this.tokenizer.options=this.options,this.tokenizer.lexer=this,this.inlineQueue=[],this.state={inLink:!1,inRawBlock:!1,linkEmitted:!1,top:!0};let n={other:Ue,block:bs.normal,inline:to.normal};this.options.pedantic?(n.block=bs.pedantic,n.inline=to.pedantic):this.options.gfm&&(n.block=bs.gfm,this.options.breaks?n.inline=to.breaks:n.inline=to.gfm),this.tokenizer.rules=n}static get rules(){return{block:bs,inline:to}}static lex(t,n){return new td(n).lex(t)}static lexInline(t,n){return new td(n).inlineTokens(t)}lex(t){t=t.replace(Ue.carriageReturn,`
`),this.blockTokens(t,this.tokens);for(let n=0;n<this.inlineQueue.length;n++){let r=this.inlineQueue[n];this.inlineTokens(r.src,r.tokens)}return this.inlineQueue=[],this.tokens}blockTokens(t,n=[],r=!1){this.tokenizer.lexer=this,this.options.pedantic&&(t=t.replace(Ue.tabCharGlobal,"    ").replace(Ue.spaceLine,""));let o=1/0;for(;t;){if(t.length<o)o=t.length;else{this.infiniteLoopError(t.charCodeAt(0));break}let i;if(this.options.extensions?.block?.some(s=>(i=s.call({lexer:this},t,n))?(t=t.substring(i.raw.length),n.push(i),!0):!1))continue;if(i=this.tokenizer.space(t)){t=t.substring(i.raw.length);let s=n.at(-1);i.raw.length===1&&s!==void 0?s.raw+=`
`:n.push(i);continue}if(i=this.tokenizer.code(t)){t=t.substring(i.raw.length);let s=n.at(-1);s?.type==="paragraph"||s?.type==="text"?(s.raw+=(s.raw.endsWith(`
`)?"":`
`)+i.raw,s.text+=`
`+i.text,this.inlineQueue.at(-1).src=s.text):n.push(i);continue}if(i=this.tokenizer.fences(t)){t=t.substring(i.raw.length),n.push(i);continue}if(i=this.tokenizer.heading(t)){t=t.substring(i.raw.length),n.push(i);continue}if(i=this.tokenizer.hr(t)){t=t.substring(i.raw.length),n.push(i);continue}if(i=this.tokenizer.blockquote(t)){t=t.substring(i.raw.length),n.push(i);continue}if(i=this.tokenizer.list(t)){t=t.substring(i.raw.length),n.push(i);continue}if(i=this.tokenizer.html(t)){t=t.substring(i.raw.length),n.push(i);continue}if(i=this.tokenizer.def(t)){t=t.substring(i.raw.length);let s=n.at(-1);s?.type==="paragraph"||s?.type==="text"?(s.raw+=(s.raw.endsWith(`
`)?"":`
`)+i.raw,s.text+=`
`+i.raw,this.inlineQueue.at(-1).src=s.text):this.tokens.links[i.tag]||(this.tokens.links[i.tag]={href:i.href,title:i.title},n.push(i));continue}if(i=this.tokenizer.table(t)){t=t.substring(i.raw.length),n.push(i);continue}if(i=this.tokenizer.lheading(t)){t=t.substring(i.raw.length),n.push(i);continue}let a=t;if(this.options.extensions?.startBlock){let s=1/0,c=t.slice(1),l;this.options.extensions.startBlock.forEach(u=>{l=u.call({lexer:this},c),typeof l=="number"&&l>=0&&(s=Math.min(s,l))}),s<1/0&&s>=0&&(a=t.substring(0,s+1))}if(this.state.top&&(i=this.tokenizer.paragraph(a))){let s=n.at(-1);r&&s?.type==="paragraph"?(s.raw+=(s.raw.endsWith(`
`)?"":`
`)+i.raw,s.text+=`
`+i.text,this.inlineQueue.pop(),this.inlineQueue.at(-1).src=s.text):n.push(i),r=a.length!==t.length,t=t.substring(i.raw.length);continue}if(i=this.tokenizer.text(t)){t=t.substring(i.raw.length);let s=n.at(-1);s?.type==="text"?(s.raw+=(s.raw.endsWith(`
`)?"":`
`)+i.raw,s.text+=`
`+i.text,this.inlineQueue.pop(),this.inlineQueue.at(-1).src=s.text):n.push(i);continue}if(t){this.infiniteLoopError(t.charCodeAt(0));break}}return this.state.top=!0,n}inline(t,n=[]){return this.inlineQueue.push({src:t,tokens:n}),n}linkInText(t){if(!t.includes("["))return!1;let n=this.tokenizer.rules.inline.link;for(let r of t.matchAll(this.tokenizer.rules.inline.blockSkip))if(n.test(r[0])&&t.charAt(r.index-1)!=="!")return!0;for(let r of t.matchAll(this.tokenizer.rules.inline.reflinkSearch)){let o=r[0],i=o.lastIndexOf("[");if(!(o.charAt(0)==="!"||!Object.hasOwn(this.tokens.links,o.slice(i+1,-1)))&&!(i>1&&this.linkInText(o.slice(1,i-1))))return!0}return!1}inlineTokens(t,n=[]){this.tokenizer.lexer=this;let r=t;if(this.tokens.links&&t.includes("[")){let s=this.tokenizer.rules.inline.reflinkSearch,c=l=>{let u=l.lastIndexOf("[");if(!Object.hasOwn(this.tokens.links,l.slice(u+1,-1)))return l;if(u>1&&l.charAt(0)!=="!"){let m=l.slice(1,u-1);if(this.linkInText(m))return"["+m.replace(s,c)+"]["+"a".repeat(l.length-u-2)+"]"}return"["+"a".repeat(l.length-2)+"]"};r=r.replace(s,c)}r=r.replace(this.tokenizer.rules.inline.anyPunctuation,s=>"+".repeat(s.length)),r=r.replace(this.tokenizer.rules.inline.blockSkip,(s,c,l)=>{let u=l?l.length:0;return s.slice(0,u)+"["+"a".repeat(s.length-u-2)+"]"}),r=this.options.hooks?.emStrongMask?.call({lexer:this},r)??r;let o=!1,i="",a=1/0;for(;t;){if(t.length<a)a=t.length;else{this.infiniteLoopError(t.charCodeAt(0));break}o||(i=""),o=!1;let s;if(this.options.extensions?.inline?.some(l=>(s=l.call({lexer:this},t,n))?(t=t.substring(s.raw.length),n.push(s),!0):!1))continue;if(s=this.tokenizer.escape(t)){t=t.substring(s.raw.length),n.push(s);continue}if(s=this.tokenizer.tag(t)){t=t.substring(s.raw.length),n.push(s);continue}if(s=this.tokenizer.link(t)){t=t.substring(s.raw.length),n.push(s);continue}if(s=this.tokenizer.reflink(t,this.tokens.links)){t=t.substring(s.raw.length);let l=n.at(-1);s.type==="text"&&l?.type==="text"?(l.raw+=s.raw,l.text+=s.text):n.push(s);continue}if(s=this.tokenizer.emStrong(t,r,i)){t=t.substring(s.raw.length),n.push(s);continue}if(s=this.tokenizer.codespan(t)){t=t.substring(s.raw.length),n.push(s);continue}if(s=this.tokenizer.br(t)){t=t.substring(s.raw.length),n.push(s);continue}if(s=this.tokenizer.del(t,r,i)){t=t.substring(s.raw.length),n.push(s);continue}if(s=this.tokenizer.autolink(t)){t=t.substring(s.raw.length),n.push(s);continue}if(!this.state.inLink&&(s=this.tokenizer.url(t))){t=t.substring(s.raw.length),n.push(s);continue}let c=t;if(this.options.extensions?.startInline){let l=1/0,u=t.slice(1),m;this.options.extensions.startInline.forEach(f=>{m=f.call({lexer:this},u),typeof m=="number"&&m>=0&&(l=Math.min(l,m))}),l<1/0&&l>=0&&(c=t.substring(0,l+1))}if(s=this.tokenizer.inlineText(c)){t=t.substring(s.raw.length),s.raw.slice(-1)!=="_"&&(i=s.raw.slice(-1)),o=!0;let l=n.at(-1);l?.type==="text"?(l.raw+=s.raw,l.text+=s.text):n.push(s);continue}if(t){this.infiniteLoopError(t.charCodeAt(0));break}}return n}infiniteLoopError(t){let n="Infinite loop on byte: "+t;if(this.options.silent)console.error(n);else throw new Error(n)}},Es=class{options;parser;constructor(e){this.options=e||gn}space(e){return""}code({text:e,lang:t,escaped:n}){let r=(t||"").match(Ue.notSpaceStart)?.[0],o=e?e.replace(Ue.endingNewline,"")+`
`:"";return r?'<pre><code class="language-'+Qe(r)+'">'+(n?o:Qe(o,!0))+`</code></pre>
`:"<pre><code>"+(n?o:Qe(o,!0))+`</code></pre>
`}blockquote({tokens:e}){return`<blockquote>
${this.parser.parse(e)}</blockquote>
`}html({text:e}){return e}def(e){return""}heading({tokens:e,depth:t}){return`<h${t}>${this.parser.parseInline(e)}</h${t}>
`}hr(e){return`<hr>
`}list(e){let t=e.ordered,n=e.start,r="";for(let a=0;a<e.items.length;a++){let s=e.items[a];r+=this.listitem(s)}let o=t?"ol":"ul",i=t&&n!==1?' start="'+n+'"':"";return"<"+o+i+`>
`+r+"</"+o+`>
`}listitem(e){return`<li>${this.parser.parse(e.tokens)}</li>
`}checkbox({checked:e}){return"<input "+(e?'checked="" ':"")+'disabled="" type="checkbox"> '}paragraph({tokens:e}){return`<p>${this.parser.parseInline(e)}</p>
`}table(e){let t="",n="";for(let o=0;o<e.header.length;o++)n+=this.tablecell(e.header[o]);t+=this.tablerow({text:n});let r="";for(let o=0;o<e.rows.length;o++){let i=e.rows[o];n="";for(let a=0;a<i.length;a++)n+=this.tablecell(i[a]);r+=this.tablerow({text:n})}return r&&(r=`<tbody>${r}</tbody>`),`<table>
<thead>
`+t+`</thead>
`+r+`</table>
`}tablerow({text:e}){return`<tr>
${e}</tr>
`}tablecell(e){let t=this.parser.parseInline(e.tokens),n=e.header?"th":"td";return(e.align?`<${n} align="${e.align}">`:`<${n}>`)+t+`</${n}>
`}strong({tokens:e}){return`<strong>${this.parser.parseInline(e)}</strong>`}em({tokens:e}){return`<em>${this.parser.parseInline(e)}</em>`}codespan({text:e}){return`<code>${Qe(e,!0)}</code>`}br(e){return"<br>"}del({tokens:e}){return`<del>${this.parser.parseInline(e)}</del>`}link({href:e,title:t,text:n,tokens:r,autolink:o}){let i=o?Qe(n,!0):this.parser.parseInline(r),a=Jb(e);if(a===null)return i;e=Qe(a,o);let s='<a href="'+e+'"';return t&&(s+=' title="'+Qe(t)+'"'),s+=">"+i+"</a>",s}image({href:e,title:t,text:n,tokens:r}){r&&(n=this.parser.parseInline(r,this.parser.textRenderer));let o=Jb(e);if(o===null)return Qe(n);e=o;let i=`<img src="${Qe(e)}" alt="${Qe(n)}"`;return t&&(i+=` title="${Qe(t)}"`),i+=">",i}text(e){return"tokens"in e&&e.tokens?this.parser.parseInline(e.tokens):"escaped"in e&&e.escaped?e.text:Qe(e.text)}},ud=class{strong({text:e}){return e}em({text:e}){return e}codespan({text:e}){return e}del({text:e}){return e}html({text:e}){return e}text({text:e}){return e}link({text:e}){return""+e}image({text:e}){return""+e}br(){return""}checkbox({raw:e}){return e}},ut=class nd{options;renderer;textRenderer;constructor(t){this.options=t||gn,this.options.renderer=this.options.renderer||new Es,this.renderer=this.options.renderer,this.renderer.options=this.options,this.renderer.parser=this,this.textRenderer=new ud}static parse(t,n){return new nd(n).parse(t)}static parseInline(t,n){return new nd(n).parseInline(t)}parse(t){this.renderer.parser=this;let n="";for(let r=0;r<t.length;r++){let o=t[r];if(this.options.extensions?.renderers?.[o.type]){let a=o,s=this.options.extensions.renderers[a.type].call({parser:this},a);if(s!==!1||!["space","hr","heading","code","table","blockquote","list","checkbox","html","def","paragraph","text"].includes(a.type)){n+=s||"";continue}}let i=o;switch(i.type){case"space":{n+=this.renderer.space(i);break}case"hr":{n+=this.renderer.hr(i);break}case"heading":{n+=this.renderer.heading(i);break}case"code":{n+=this.renderer.code(i);break}case"table":{n+=this.renderer.table(i);break}case"blockquote":{n+=this.renderer.blockquote(i);break}case"list":{n+=this.renderer.list(i);break}case"checkbox":{n+=this.renderer.checkbox(i);break}case"html":{n+=this.renderer.html(i);break}case"def":{n+=this.renderer.def(i);break}case"paragraph":{n+=this.renderer.paragraph(i);break}case"text":{n+=this.renderer.text(i);break}default:{let a='Token with "'+i.type+'" type was not found.';if(this.options.silent)return console.error(a),"";throw new Error(a)}}}return n}parseInline(t,n=this.renderer){this.renderer.parser=this;let r="";for(let o=0;o<t.length;o++){let i=t[o];if(this.options.extensions?.renderers?.[i.type]){let s=this.options.extensions.renderers[i.type].call({parser:this},i);if(s!==!1||!["escape","html","link","image","checkbox","strong","em","codespan","br","del","text"].includes(i.type)){r+=s||"";continue}}let a=i;switch(a.type){case"escape":{r+=n.text(a);break}case"html":{r+=n.html(a);break}case"link":{r+=n.link(a);break}case"image":{r+=n.image(a);break}case"checkbox":{r+=n.checkbox(a);break}case"strong":{r+=n.strong(a);break}case"em":{r+=n.em(a);break}case"codespan":{r+=n.codespan(a);break}case"br":{r+=n.br(a);break}case"del":{r+=n.del(a);break}case"text":{r+=n.text(a);break}default:{let s='Token with "'+a.type+'" type was not found.';if(this.options.silent)return console.error(s),"";throw new Error(s)}}}return r}},no=class{options;block;constructor(e){this.options=e||gn}static passThroughHooks=new Set(["preprocess","postprocess","processAllTokens","emStrongMask"]);static passThroughHooksRespectAsync=new Set(["preprocess","postprocess","processAllTokens"]);preprocess(e){return e}postprocess(e){return e}processAllTokens(e){return e}emStrongMask(e){return e}provideLexer(e=this.block){return e?ct.lex:ct.lexInline}provideParser(e=this.block){return e?ut.parse:ut.parseInline}},dd=class{defaults=rd();options=this.setOptions;parse=this.parseMarkdown(!0);parseInline=this.parseMarkdown(!1);Parser=ut;Renderer=Es;TextRenderer=ud;Lexer=ct;Tokenizer=ws;Hooks=no;constructor(...e){this.use(...e)}walkTokens(e,t){let n=[];for(let r of e)switch(n=n.concat(t.call(this,r)),r.type){case"table":{let o=r;for(let i of o.header)n=n.concat(this.walkTokens(i.tokens,t));for(let i of o.rows)for(let a of i)n=n.concat(this.walkTokens(a.tokens,t));break}case"list":{let o=r;n=n.concat(this.walkTokens(o.items,t));break}default:{let o=r;this.defaults.extensions?.childTokens?.[o.type]?this.defaults.extensions.childTokens[o.type].forEach(i=>{let a=o[i].flat(1/0);n=n.concat(this.walkTokens(a,t))}):o.tokens&&(n=n.concat(this.walkTokens(o.tokens,t)))}}return n}use(...e){let t=this.defaults.extensions||{renderers:{},childTokens:{}};return e.forEach(n=>{let r={...n};if(r.async=this.defaults.async||r.async||!1,n.extensions&&(n.extensions.forEach(o=>{if(!o.name)throw new Error("extension name required");if("renderer"in o){let i=t.renderers[o.name];i?t.renderers[o.name]=function(...a){let s=o.renderer.apply(this,a);return s===!1&&(s=i.apply(this,a)),s}:t.renderers[o.name]=o.renderer}if("tokenizer"in o){if(!o.level||o.level!=="block"&&o.level!=="inline")throw new Error("extension level must be 'block' or 'inline'");let i=t[o.level];i?i.unshift(o.tokenizer):t[o.level]=[o.tokenizer],o.start&&(o.level==="block"?t.startBlock?t.startBlock.push(o.start):t.startBlock=[o.start]:o.level==="inline"&&(t.startInline?t.startInline.push(o.start):t.startInline=[o.start]))}"childTokens"in o&&o.childTokens&&(t.childTokens[o.name]=o.childTokens)}),r.extensions=t),n.renderer){let o=this.defaults.renderer||new Es(this.defaults);for(let i in n.renderer){if(!(i in o))throw new Error(`renderer '${i}' does not exist`);if(["options","parser"].includes(i))continue;let a=i,s=n.renderer[a],c=o[a];o[a]=(...l)=>{let u=s.apply(o,l);return u===!1&&(u=c.apply(o,l)),u||""}}r.renderer=o}if(n.tokenizer){let o=this.defaults.tokenizer||new ws(this.defaults);for(let i in n.tokenizer){if(!(i in o))throw new Error(`tokenizer '${i}' does not exist`);if(["options","rules","lexer"].includes(i))continue;let a=i,s=n.tokenizer[a],c=o[a];o[a]=(...l)=>{let u=s.apply(o,l);return u===!1&&(u=c.apply(o,l)),u}}r.tokenizer=o}if(n.hooks){let o=this.defaults.hooks||new no;for(let i in n.hooks){if(!(i in o))throw new Error(`hook '${i}' does not exist`);if(["options","block"].includes(i))continue;let a=i,s=n.hooks[a],c=o[a];no.passThroughHooks.has(i)?o[a]=l=>{if(this.defaults.async&&no.passThroughHooksRespectAsync.has(i))return(async()=>{let m=await s.call(o,l);return c.call(o,m)})();let u=s.call(o,l);return c.call(o,u)}:o[a]=(...l)=>{if(this.defaults.async)return(async()=>{let m=await s.apply(o,l);return m===!1&&(m=await c.apply(o,l)),m})();let u=s.apply(o,l);return u===!1&&(u=c.apply(o,l)),u}}r.hooks=o}if(n.walkTokens){let o=this.defaults.walkTokens,i=n.walkTokens;r.walkTokens=function(a){let s=[];return s.push(i.call(this,a)),o&&(s=s.concat(o.call(this,a))),s}}this.defaults={...this.defaults,...r}}),this}setOptions(e){return this.defaults={...this.defaults,...e},this}lexer(e,t){return ct.lex(e,t??this.defaults)}parser(e,t){return ut.parse(e,t??this.defaults)}parseMarkdown(e){return(t,n)=>{let r={...n},o={...this.defaults,...r},i=this.onError(!!o.silent,!!o.async);if(this.defaults.async===!0&&r.async===!1)return i(new Error("marked(): The async option was set to true by an extension. Remove async: false from the parse options object to return a Promise."));if(typeof t>"u"||t===null)return i(new Error("marked(): input parameter is undefined or null"));if(typeof t!="string")return i(new Error("marked(): input parameter is of type "+Object.prototype.toString.call(t)+", string expected"));if(o.hooks&&(o.hooks.options=o,o.hooks.block=e),o.async)return(async()=>{let a=o.hooks?await o.hooks.preprocess(t):t,s=await(o.hooks?await o.hooks.provideLexer(e):e?ct.lex:ct.lexInline)(a,o),c=o.hooks?await o.hooks.processAllTokens(s):s;o.walkTokens&&await Promise.all(this.walkTokens(c,o.walkTokens));let l=await(o.hooks?await o.hooks.provideParser(e):e?ut.parse:ut.parseInline)(c,o);return o.hooks?await o.hooks.postprocess(l):l})().catch(i);try{o.hooks&&(t=o.hooks.preprocess(t));let a=(o.hooks?o.hooks.provideLexer(e):e?ct.lex:ct.lexInline)(t,o);o.hooks&&(a=o.hooks.processAllTokens(a)),o.walkTokens&&this.walkTokens(a,o.walkTokens);let s=(o.hooks?o.hooks.provideParser(e):e?ut.parse:ut.parseInline)(a,o);return o.hooks&&(s=o.hooks.postprocess(s)),s}catch(a){return i(a)}}}onError(e,t){return n=>{if(n.message+=`
Please report this to https://github.com/markedjs/marked.`,e){let r="<p>An error occurred:</p><pre>"+Qe(n.message+"",!0)+"</pre>";return t?Promise.resolve(r):r}if(t)return Promise.reject(n);throw n}}},mn=new dd;function ce(e,t){return mn.parse(e,t)}ce.options=ce.setOptions=function(e){return mn.setOptions(e),ce.defaults=mn.defaults,ny(ce.defaults),ce};ce.getDefaults=rd;ce.defaults=gn;function hk(...e){return mn.use(...e),ce.defaults=mn.defaults,ny(ce.defaults),ce}ce.use=hk;ce.walkTokens=function(e,t){return mn.walkTokens(e,t)};ce.parseInline=mn.parseInline;ce.Parser=ut;ce.parser=ut.parse;ce.Renderer=Es;ce.TextRenderer=ud;ce.Lexer=ct;ce.lexer=ct.lex;ce.Tokenizer=ws;ce.Hooks=no;ce.parse=ce;var _2=ce.options,T2=ce.setOptions,A2=ce.walkTokens,k2=ce.parseInline;var I2=ut.parse,R2=ct.lex;var fk=new dd({gfm:!0,breaks:!0}),py=["a","p","br","strong","em","b","i","u","s","del","code","pre","ul","ol","li","blockquote","h1","h2","h3","h4","h5","h6","hr","span","table","thead","tbody","tr","th","td"],hy=["href","title","class","target","rel"],fy={ALLOWED_TAGS:py,ALLOWED_ATTR:hy,ALLOW_DATA_ATTR:!1,ALLOW_ARIA_ATTR:!1},mk={...fy,ALLOWED_TAGS:[...py,"img"],ALLOWED_ATTR:[...hy,"src","alt","width","height"]},gk=/^language-[A-Za-z0-9_+#.-]+$/,vk=new Set(["CODE","PRE"]);function bk(e){e.nodeName==="A"&&e.hasAttribute("href")?(e.setAttribute("target","_blank"),e.setAttribute("rel","noopener noreferrer")):(e.removeAttribute("target"),e.removeAttribute("rel"));let t=e.getAttribute("class");if(t===null)return;let n=vk.has(e.nodeName)?t.split(/\s+/).filter(r=>gk.test(r)):[];if(n.length===0){e.removeAttribute("class");return}e.setAttribute("class",n.join(" "))}var Ss=null;function yk(){return Ss===null&&(Ss=qb(),Ss.addHook("afterSanitizeAttributes",bk)),Ss}function io(e,t){let n=t?.allowImages===!0,r=fk.parse(e,{async:!1});return yk().sanitize(r,n?mk:fy).trim()}var _s=class{#e;#t=null;#n=0;#o="";#r=null;constructor(t){this.#e=t}get deltas(){return this.#n}countDelta(){this.#n+=1}queue(t){this.#o=t,this.#i(),this.#r===null&&(this.#r=requestAnimationFrame(()=>{this.#r=null,this.into(this.#o)}))}into(t){this.#r!==null&&(cancelAnimationFrame(this.#r),this.#r=null),this.#o=t;let n=this.#i();return n.innerHTML=io(t,{allowImages:this.#e.allowImages()}),this.#e.follow(),n}end(){this.#r!==null&&this.into(this.#o),this.#t=null}#i(){return this.#t===null&&(this.#t=this.#e.openBubble(),this.#n=0),this.#t}};var wk=4,Ek=120;function my(e){if(typeof e!="object"||e===null)return null;let t=e.prompts;if(!Array.isArray(t))return null;let n=t.filter(r=>typeof r=="string").map(r=>r.trim()).filter(r=>r!==""&&r.length<=120).slice(0,4);return n.length===0?null:n}function ao(e,t,n){let r=my(e);if(r===null)return null;let o=document.createElement("div");o.className="suggestions",o.setAttribute("part","suggestions"),o.setAttribute("role","group"),o.setAttribute("aria-label",t.suggestions);for(let i of r){let a=document.createElement("button");a.type="button",a.className="suggestion-chip",a.setAttribute("part","suggestion-chip"),a.textContent=i,a.addEventListener("click",()=>n(i)),o.appendChild(a)}return o}function gy(e,t,n){let r=e.getAttribute("data-starters");if(r===null)return null;let o;try{o=JSON.parse(r)}catch{return console.warn(`<ag-ui-chat>: data-starters is not valid JSON, so no starters are shown. It takes an array of strings, e.g. data-starters='["Summarise this page"]'.`),null}return ao({prompts:o},t,n)}function Ts(e,t){for(let n of Array.from(e.querySelectorAll("pre"))){let r=n.querySelector("code");r===null||n.querySelector(".code-copy")!==null||(n.classList.add("has-copy"),n.append(xk(r,t)))}}function xk(e,t){let n=e.textContent,r=document.createElement("button");return r.type="button",r.className="code-copy",r.setAttribute("part","code-copy"),r.textContent=t.copyCode,r.title=t.copyCode,r.setAttribute("aria-label",t.copyCode),r.addEventListener("click",()=>{Sk(n).then(o=>{_k(r,o?t.copied:t.copyFailed,t)})}),r}async function Sk(e){let t=navigator.clipboard;if(t===void 0)return!1;try{return await t.writeText(e),!0}catch{return!1}}function _k(e,t,n){e.textContent=t,e.dataset.state=t===n.copied?"copied":"failed",setTimeout(()=>{e.textContent=n.copyCode,delete e.dataset.state},1500)}function pd(e){let t=e.replace(/[._-]+/g," ").trim();return t===""?e:t.charAt(0).toUpperCase()+t.slice(1)}var As=class{element;#e;#t;#n;#o;#r=!1;constructor(t=pe){this.#o=t,this.element=document.createElement("div"),this.element.className="thoughts",this.element.setAttribute("part","thoughts"),this.element.setAttribute("data-streaming",""),this.#n=document.createElement("button"),this.#n.type="button",this.#n.className="thoughts-toggle",this.#n.setAttribute("part","thoughts-toggle"),this.#n.setAttribute("aria-expanded","true"),this.#e=document.createElement("span"),this.#e.className="thoughts-label",this.#e.setAttribute("part","thoughts-label"),this.#e.textContent=t.thinking,this.#n.append(this.#e),this.#t=document.createElement("pre"),this.#t.className="thoughts-body",this.#t.setAttribute("part","thoughts-body"),this.#n.addEventListener("click",()=>{this.#i(!this.#r)}),this.element.append(this.#n,this.#t)}stream(t){this.#t.textContent=t}collapse(){this.#r||(this.element.removeAttribute("data-streaming"),this.#e.textContent=this.#o.thoughts,this.#i(!0))}#i(t){this.#r=t,this.#t.hidden=t,this.#n.setAttribute("aria-expanded",String(!t))}};function ks(e,t){try{return e()}catch(n){return console.warn(`ag-ui-chat: render failed for ${t}`,n),null}}function vy(e,t){for(let n of Array.from(e.childNodes))n.nodeType===Node.TEXT_NODE?t.push({node:n,parent:e}):vy(n,t)}function by(e){let t=[];vy(e,t);let n=0;for(let{node:r,parent:o}of t){let i=document.createDocumentFragment();for(let a of r.data.split(/(\s+)/)){if(a==="")continue;if(/\s/.test(a)){i.appendChild(document.createTextNode(a));continue}let s=document.createElement("span");s.className="word",s.style.setProperty("--ag-ui-word-index",String(n)),s.textContent=a,i.appendChild(s),n+=1}o.replaceChild(i,r)}}function yy({viewport:e,onMissedContent:t}){let n=!0,r=!1,o=()=>e.scrollHeight-e.scrollTop-e.clientHeight<=4,i=u=>{u!==r&&(r=u,t(r))},a=()=>{e.scrollTop=e.scrollHeight},s=()=>{n=o(),n&&i(!1)},c=()=>{if(n){a();return}i(!0)};e.addEventListener("scroll",s,{passive:!0});let l=new ResizeObserver(()=>{n&&a()});return l.observe(e),{follow:c,jump:()=>{n=!0,i(!1),a()},following:()=>n,dispose:()=>{e.removeEventListener("scroll",s),l.disconnect()}}}var Is=class{#e;#t=new Map;#n=new Map;#o=new Set;#r;#i=null;#a=null;#l=null;constructor(t){this.#e=t}mountScroller(t,n){t.addEventListener("click",()=>{this.jump()},{signal:n}),this.#r=yy({viewport:this.#e.messages,onMissedContent:r=>{t.dataset.missed=String(r)}})}disposeScroller(){this.#r.dispose()}follow(){this.#r.follow()}jump(){this.#r.jump()}isEmpty(){return!this.#e.emptyWrap.hidden}card(t){return this.#t.get(t)}cards(){return this.#t.values()}forgetCard(t){this.#t.delete(t)}setCardElement(t,n){this.#n.set(t,n)}markServerSettled(t){this.#o.add(t)}isServerSettled(t){return this.#o.has(t)}collapseThoughts(){this.#l?.collapse()}closeGroup(){this.#a!==null&&this.#a.childElementCount===0&&(this.#a.remove(),this.updateEmptyState()),this.#a=null,this.#l=null}releaseTurn(){this.#a=null,this.#l=null,this.hidePending(),this.#t.clear()}forgetCards(){this.#o.clear(),this.#n.clear()}empty(){this.#e.messages.replaceChildren(this.#e.emptyWrap),this.updateEmptyState()}append(t,n){let r=document.createElement("div");return r.className=`message message--${t}`,r.setAttribute("part",`message message-${t}`),t===Fe.ASSISTANT?(r.innerHTML=io(n,{allowImages:this.#e.allowImages()}),Ts(r,this.#e.strings()),this.ensureGroup().appendChild(r)):(this.#a=null,r.textContent=n,this.#e.messages.appendChild(r)),this.updateEmptyState(),t===Fe.USER?this.jump():this.follow(),r}ensureGroup(){if(this.#a===null){let t=document.createElement("div");t.className="answer",t.setAttribute("part","answer"),this.#a=t,this.#e.messages.appendChild(t),this.updateEmptyState()}return this.#a}revealWords(t){this.#e.element.getAttribute("data-text-animation")==="word"&&by(t)}updateEmptyState(){this.#e.emptyWrap.hidden=this.#e.messages.childElementCount>1,this.#e.element.toggleAttribute("data-empty",!this.#e.emptyWrap.hidden)}appendStoppedNote(){let t=document.createElement("div");t.className="stopped-note",t.setAttribute("part","stopped"),t.setAttribute("role","status"),t.textContent=this.#e.strings().stopped,this.ensureGroup().appendChild(t),this.updateEmptyState(),this.follow()}showPending(){if(this.#i!==null)return;let t=document.createElement("div");t.className="pending",t.setAttribute("part","pending"),t.setAttribute("role","status"),t.setAttribute("aria-label",this.#e.strings().thinking);for(let n=0;n<3;n+=1){let r=document.createElement("span");r.className="pending-dot",t.appendChild(r)}this.#i=t,this.ensureGroup().appendChild(t),this.updateEmptyState(),this.follow()}hidePending(){this.#i?.remove(),this.#i=null}showThoughts(){if(this.#l===null){this.#l=new As(this.#e.strings());let t=this.ensureGroup();t.insertBefore(this.#l.element,t.firstChild),this.updateEmptyState(),this.follow()}return this.#l}noticeIfSkillLoad(t){let n=Za(t);return n===null?!1:(this.appendNotice("\u2728",se(this.#e.strings().usingSkill,{name:n}),"skill"),!0)}appendNotice(t,n,r,o){this.ensureGroup().appendChild(ls(t,n,r,o)),this.updateEmptyState(),this.follow()}renderToolOutput(t,n){let r=ks(()=>t(n.args),`tool ${n.name}`);r!==null&&(this.#n.get(n.id)?.after(r),this.afterGrew())}afterGrew(){this.updateEmptyState(),this.follow()}cardFor(t){let n=this.#t.get(t.id);if(n!==void 0)return n;let r=this.#e.resolveTool(t.name)?.parameters[Ie],o=typeof r=="string"?r:this.#e.toolSummaries()[t.name]??this.#e.serverSummary(t.name)??pd(t.name),i=new Yr(t.name,t.args,o,this.#e.strings(),{formatPayload:a=>this.#e.formatToolPayload(a)});return this.#t.set(t.id,i),this.ensureGroup().appendChild(i.element),this.updateEmptyState(),this.follow(),i}};var Rs=class{#e;#t=new Map;#n=new Set;#o=new Map;constructor(t){this.#e=t}register(t){this.#t.set(t.type,t),this.#n.delete(t.type)}has(t){return this.#t.has(t)}unhandledTypes(){return[...this.#n]}clearBlocks(){this.#o.clear()}draw(t,n,r){let o=this.#t.get(n);if(o===void 0){this.#n.add(n);return}let i=ks(()=>o.render(r),`activity ${n}`);if(i===null){this.#r(t,n,o.removedNotice,r);return}let a=this.#o.get(t);a===void 0?this.#e.ensureGroup().appendChild(i):a.replaceWith(i),this.#o.set(t,i),this.#e.afterTranscriptGrew()}#r(t,n,r,o){let i=this.#o.has(t);this.#o.get(t)?.remove(),this.#o.delete(t),console.warn(`ag-ui-chat: activity ${t} (${n}) was not drawable and has been removed. A chart's points must each be a finite JSON number; a numeric column serialised as a string (a Decimal, typically) is rejected rather than coerced.`,o),i&&r!==void 0&&this.#e.appendNotice("\u{1F4C9}",r,"chart-undrawable")}};var Cs=class extends Error{constructor(t){super(t),this.name="ConnectionLostError"}},so=class{#e;#t;#n;#o;#r;#i;#a;#l=new Set;#u;#d;#c;#h;#s=!1;constructor(t){this.#e=t.agent,this.#t=t.handlers,this.#n=t.getTools??(()=>[]),this.#o=t.getContext??(()=>[]),this.#r=t.executeTool??null,this.#i=t.resolveInterrupts??null,this.#a=t.onPersist??(()=>{}),this.#u=t.connectionLostMessage??"Connection lost",this.#d=t.unfinishedMessage??"Not finished: the run ended or moved on before this tool call returned a result.",this.#c=t.declinedMessage??"User declined the action.";let n=t.maxToolRounds??Tn;this.#h=n>=1?Math.floor(n):Tn,this.#b();let r=t.onStateChanged;r!==void 0&&this.#e.subscribe({onStateChanged:({state:o})=>{r(o)}})}get state(){return this.#e.state}setState(t){this.#e.setState({...t})}get running(){return this.#e.isRunning}get messages(){return this.#e.messages}async send(t,n=[]){let r={id:we(),role:"user",content:t,...n.length>0?{metadata:{attachments:n}}:{}};this.#e.addMessage(r),this.#p(),await this.#f()}truncateToLastUser(){let t=[...this.#e.messages],n=-1;for(let[o,i]of t.entries())i.role==="user"&&(n=o);if(n===-1)return null;let r=t.slice(0,n+1);return this.#e.setMessages(r),this.#p(),r}async resume(){await this.#f()}addToolResult(t,n){this.#e.addMessage({id:we(),role:"tool",content:n,toolCallId:t}),this.#p()}cancel(){this.#s=!0,this.#e.abortRun()}async#f(){this.#s=!1;try{await this.#S(),this.#s&&this.#m()}catch(t){this.#s||Tk(t)?this.#m():this.#t.onError(t instanceof Error?t.message:String(t))}finally{this.#t.onSettled()}}#m(){this.#p(),this.#t.onCancelled()}#b(){let t=this.#e.messages,n=t.map(Ak);n.some((r,o)=>r!==t[o])&&this.#e.setMessages(n)}#g(t){let n=this.#e.messages,r=Ha(n,o=>({id:we(),role:"tool",content:this.#d,toolCallId:o,metadata:{outcome:Ge.INTERRUPTED}}),t);r!==n&&(this.#e.setMessages([...r]),this.#p())}#y(t,n){for(let r of t){let o=r.toolCallId;o!==void 0&&n[r.id]?.status==="cancelled"&&this.#e.addMessage({id:we(),role:"tool",content:this.#c,toolCallId:o,metadata:{outcome:Ge.DENIED}})}this.#p()}#p(){this.#a(this.#e.messages)}get annotatedMessages(){return this.messages}async#S(){let t,n=new Set;for(let r=0;r<this.#h;r+=1){if(this.#s)return;let o=[],i={terminal:!1,errored:!1,interrupts:[]},a={tools:this.#n(),context:this.#o()};if(t!==void 0&&(a.resume=t),this.#g(n),await this.#e.runAgent(a,this.#w(o,i)),t=void 0,n=new Set,this.#p(),this.#s)return;if(!i.terminal)throw new Cs(this.#u);if(i.errored)return;if(i.interrupts.length>0){if(this.#i===null)return;let c=await this.#i(i.interrupts);if(this.#s){this.#y(i.interrupts,c);return}t=qv(i.interrupts,c),n=new Set(i.interrupts.flatMap(({toolCallId:l})=>l??[]));continue}if(this.#r===null||o.length===0)return;let s=!1;for(let c of o){if(this.#s)return;let l=await this.#r(c);if(l!==null){if(l.halt===!0)return;this.#e.addMessage({id:we(),role:"tool",content:l.content,toolCallId:c.id,...l.outcome===void 0?{}:{metadata:{outcome:l.outcome}}}),this.#p(),s=!0}}if(!s)return}}#w(t,n){let r=this.#t,o=this.#l,i=()=>this.#s,a=new Set;return{onRunInitialized(){r.onRunStart()},onTextMessageStartEvent({event:s}){o.has(s.messageId)&&console.warn(`<ag-ui-chat>: the server reused message id "${s.messageId}", which was already closed. Its content will be appended to that earlier message rather than starting a new one, and the merged result is what gets persisted. Issue a fresh id per message.`)},onTextMessageContentEvent({textMessageBuffer:s}){r.onTextDelta(s)},onTextMessageEndEvent({event:s,textMessageBuffer:c}){o.add(s.messageId),r.onTextEnd(c)},onToolCallEndEvent({event:s,toolCallName:c,toolCallArgs:l}){let u={id:s.toolCallId,name:c,args:l};t.push(u),r.onToolCall(u)},onToolCallResultEvent({event:s}){let c=s.metadata?.outcome;r.onToolResult(s.toolCallId,Rn(s.content),c)},onActivitySnapshotEvent({event:s,messages:c}){if(c.some(u=>u.id===s.messageId&&u.role==="activity")){r.onActivityChanged(s.messageId,s.activityType,s.content);return}r.onActivity(s.activityType,s.content,s.messageId)},onActivityDeltaEvent({event:s}){a.add(s.messageId)},onCustomEvent({event:s}){r.onCustomEvent(s.name,s.value)},onSubagentStartedEvent({event:s}){r.onSubAgentStarted(s.subagentRunId,s.name,s.parentToolCallId??null)},onSubagentFinishedEvent({event:s}){r.onSubAgentFinished(s.subagentRunId)},onSubagentErrorEvent({event:s}){r.onSubAgentError(s.subagentRunId,s.message)},onMessagesSnapshotEvent({event:s}){r.onMessagesSnapshot(s.messages)},onMessagesChanged({messages:s}){if(a.size!==0){for(let c of a){let l=s.find(u=>u.id===c);l!==void 0&&l.role==="activity"&&r.onActivityChanged(c,l.activityType,l.content)}a.clear()}},onReasoningStartEvent(){r.onReasoningStart()},onReasoningMessageContentEvent({reasoningMessageBuffer:s}){r.onReasoningDelta(s)},onReasoningMessageEndEvent({reasoningMessageBuffer:s}){r.onReasoningDelta(s)},onReasoningEndEvent(){r.onReasoningEnd()},onRunFinishedEvent(s){n.terminal=!0,s.outcome==="interrupt"&&(n.interrupts=s.interrupts)},onRunErrorEvent({event:s}){n.terminal=!0,n.errored=!0,!i()&&r.onError(s.message)},onRunFinalized(){n.terminal=!0,r.onRunEnd()}}}};function Tk(e){return e instanceof Error?e.name==="AbortError"||e instanceof TypeError&&/abort/i.test(e.message):!1}function Ak(e){let{outcome:t,attachments:n,...r}=e;if(t===void 0&&n===void 0)return e;let o=r.metadata;return{...r,metadata:{...t===void 0?{}:{outcome:t},...n===void 0?{}:{attachments:n},...typeof o=="object"?o:{}}}}var wy="ag-ui-chat",nr="thread",hd="threads",lo="messages:",Os="checkpoint:",co="minted:",kk=60,Ik=100,Rk="New conversation",Ey=!1;function dt(e,t){try{sessionStorage.setItem(e,t)}catch{if(Ey)return;Ey=!0,console.warn("<ag-ui-chat>: the browser refused a sessionStorage write \u2014 the quota is full, or storage is disabled for this context. The conversation continues, but it will not survive a page reload. Deleting a long conversation from the history drawer frees the quota.")}}function Ns(e){return e===""?wy:`${wy}@${e}`}var et=class e{#e;constructor(t=""){this.#e=Ns(t),t!==""&&e.adopt("",t)}static adopt(t,n){let r=`${Ns(t)}:`,o=`${Ns(n)}:`;for(let[i,a]of xy(r)){let s=sessionStorage.getItem(i),c=o+a;s!==null&&sessionStorage.getItem(c)===null&&dt(c,s),sessionStorage.removeItem(i)}}static purge(t){for(let[n]of xy(`${Ns(t)}:`))sessionStorage.removeItem(n)}threadId(){return sessionStorage.getItem(this.#r(nr))??this.newThread()}newThread(){let t=we();return dt(this.#r(nr),t),dt(this.#r(co+t),"1"),t}isUnsent(t){return sessionStorage.getItem(this.#r(co+t))!==null&&sessionStorage.getItem(this.#r(lo+t))===null}loadMessages(t){return Promise.resolve(this.#i(this.#r(lo+t)))}saveMessages(t,n){dt(this.#r(lo+t),JSON.stringify(n)),sessionStorage.removeItem(this.#r(co+t)),this.#t(t,n)}loadCheckpoint(t){return this.#i(this.#r(Os+t))}saveCheckpoint(t,n){let r=this.#r(Os+t);if(n===null){sessionStorage.removeItem(r);return}dt(r,JSON.stringify(n))}clear(t){sessionStorage.removeItem(this.#r(lo+t)),sessionStorage.removeItem(this.#r(Os+t)),sessionStorage.removeItem(this.#r(co+t)),this.#o(this.#n().filter(n=>n.threadId!==t)),sessionStorage.getItem(this.#r(nr))===t&&sessionStorage.removeItem(this.#r(nr))}listThreads(){let t=this.#n().sort((n,r)=>r.updatedAt-n.updatedAt).map(({threadId:n,title:r,updatedAt:o,preview:i})=>({threadId:n,title:r,updatedAt:o,preview:i}));return Promise.resolve(t)}setActiveThread(t){dt(this.#r(nr),t)}renameThread(t,n){let r=this.#n(),o=r.find(i=>i.threadId===t);o!==void 0&&(o.title=n,o.titleCustom=!0,this.#o(r))}#t(t,n){let r=this.#n(),o=r.find(s=>s.threadId===t),i=Nk(n),a=Date.now();o===void 0?r.push({threadId:t,title:Sy(n),titleCustom:!1,preview:i,updatedAt:a}):(o.preview=i,o.updatedAt=a,o.titleCustom||(o.title=Sy(n))),this.#o(r)}#n(){return this.#i(this.#r(hd))??[]}#o(t){let n=this.#r(hd);if(t.length===0){sessionStorage.removeItem(n);return}dt(n,JSON.stringify(t))}#r(t){return`${this.#e}:${t}`}#i(t){let n=sessionStorage.getItem(t);if(n===null)return null;try{return JSON.parse(n)}catch{return null}}};function xy(e){let t=[];for(let n=0;n<sessionStorage.length;n+=1){let r=sessionStorage.key(n);if(r===null||!r.startsWith(e))continue;let o=r.slice(e.length);Ck(o)&&t.push([r,o])}return t}function Ck(e){return e===nr||e===hd||e.startsWith(lo)||e.startsWith(Os)||e.startsWith(co)}function Sy(e){for(let t of e)if(t.role==="user"){let n=_y(t.content);if(n!=="")return Ty(n,kk)}return Rk}function Nk(e){for(let t of[...e].reverse()){let n=_y(t.content);if(n!=="")return Ty(n,Ik)}return""}function _y(e){return typeof e=="string"?e.replace(/\s+/g," ").trim():""}function Ty(e,t){return e.length<=t?e:`${e.slice(0,t-1).trimEnd()}\u2026`}function fd(e){let t=e.headers??{},n=new Set;return new Kv({url:e.endpoint,headers:t,initialState:{...e.initialState??{}},fetch:(r,o)=>{let i=e.getHeaders?.(),a=[...new Set([...Object.keys(t),...Object.keys(i??{})])].sort();if(Ua(r,a,e.trustedOrigins??[],n),i===void 0)return fetch(r,nt(o,e.credentials));let s=new Headers(o?.headers);for(let[c,l]of Object.entries(i))s.set(c,l);return fetch(r,nt({...o,headers:s},e.credentials))},...e.threadId!==void 0?{threadId:e.threadId}:{},...e.initialMessages!==void 0?{initialMessages:[...e.initialMessages]}:{}})}function Ay(e){let t=e.getAttribute("data-max-tool-rounds");return t===null?Tn:Number.parseInt(t,10)}var uo=class{#e;#t;#n;#o;#r;#i=new Set;#a=new Map;constructor(t,n=()=>({}),r=new et,o=()=>{},i=!0){this.#e=t.endsWith("/")?t:`${t}/`,this.#t=n,this.#n=r,this.#o=o,this.#r=i}threadId(){return this.#n.threadId()}setActiveThread(t){this.#n.setActiveThread(t)}newThread(){return $a(this.#n)}isUnsent(t){return this.#n.isUnsent?.(t)===!0}saveMessages(t,n){this.#n.saveMessages(t,this.#r?n:[])}loadCheckpoint(t){return this.#n.loadCheckpoint(t)}saveCheckpoint(t,n){this.#n.saveCheckpoint(t,n)}renameThread(t,n){this.#n.renameThread(t,n),this.#a.set(t,n),this.#h(t,"PATCH",{title:n})}clear(t){this.#n.clear(t),this.#i.add(t),this.#h(t,"DELETE")}async listThreads(){let t=await this.#l();return t===null?this.#n.listThreads():t.filter(n=>!this.#i.has(n.thread_id)).map(n=>this.#d(n))}async loadMessages(t){if(this.#n.isUnsent?.(t)===!0)return null;let n=await this.#c(`${this.#e}${encodeURIComponent(t)}/`);if(n===null||!n.ok)return this.#n.loadMessages(t);let r=await this.#u(n);return r===null?this.#n.loadMessages(t):r.messages??null}async#l(){let t=await this.#c(this.#e);if(t===null||!t.ok)return null;let n=await this.#u(t);return n===null?null:n.threads??[]}async#u(t){try{return await t.json()}catch{return null}}#d(t){return{threadId:t.thread_id,title:this.#a.get(t.thread_id)??t.title,updatedAt:t.updated_at===null?Number.NaN:Date.parse(t.updated_at),preview:t.preview}}async#c(t){try{return await fetch(t,nt({headers:this.#t()},this.#o()))}catch{return null}}async#h(t,n,r){let o=this.#t();try{await fetch(`${this.#e}${encodeURIComponent(t)}/`,nt({method:n,headers:r===void 0?o:{...o,"content-type":"application/json"},body:r===void 0?null:JSON.stringify(r)},this.#o()))}catch{}}};function ky(){return{tools:[],serverSettled:new Set,invalidated:new Set,announcedOutcome:!1}}function Ok(e,t){let n={};for(let[r,o]of Object.entries(e))n[r]=(...i)=>{t()&&o(...i)};return n}var Ps=class{#e;#t=ky();constructor(t){this.#e=t}detach(){this.#t=ky()}forClient(){let t=this.#t,n=()=>t===this.#t,{onSettled:r,...o}=this.#n(t);return{...Ok(o,n),onSettled:()=>{n()&&r(),this.#o(t)}}}#n(t){return{onRunStart:()=>{this.#e.running()||(t.announcedOutcome=!1,this.#e.announcer.announce(this.#e.strings().announceResponding)),this.#e.setRunning(!0),this.#e.transcript.ensureGroup(),this.#e.transcript.showPending()},onReasoningStart:()=>{this.#e.transcript.hidePending(),this.#e.transcript.showThoughts()},onReasoningDelta:n=>{this.#e.transcript.showThoughts().stream(n)},onReasoningEnd:()=>{},onTextDelta:n=>{this.#e.transcript.hidePending(),this.#e.transcript.collapseThoughts(),this.#e.stream.queue(n),this.#e.stream.countDelta()},onTextEnd:n=>{if(n===""){this.#e.stream.end();return}let r=this.#e.stream.into(n);this.#e.stream.deltas<=1&&this.#e.transcript.revealWords(r),Ts(r,this.#e.strings()),this.#e.actions.attach(r),this.#e.stream.end(),this.#e.noteUnread()},onToolCall:n=>{this.#e.transcript.hidePending(),!this.#e.transcript.noticeIfSkillLoad(n)&&(t.tools.push({id:n.id,name:n.name}),this.#e.transcript.cardFor(n))},onActivity:(n,r,o)=>{this.#e.activities.draw(o,n,r)},onCustomEvent:(n,r)=>{if(n===cl){this.#r(t,r);return}if(n===Kd){this.#e.subagents.report(r);return}this.#e.element.dispatchEvent(new CustomEvent(il,{detail:{name:n,value:r},bubbles:!0,composed:!0}))},onSubAgentStarted:(n,r,o)=>{this.#e.subagents.start(n,r,o)},onSubAgentFinished:n=>{this.#e.subagents.finish(n)},onSubAgentError:(n,r)=>{this.#e.subagents.fail(n,r)},onMessagesSnapshot:()=>{this.#e.transcript.appendNotice("\u{1F504}",this.#e.strings().historyReplaced,"history-replaced")},onToolResult:(n,r,o)=>{let i=this.#e.transcript.card(n);i!==void 0&&(i.settle(Br(o),r),this.#e.transcript.markServerSettled(n),t.serverSettled.add(n),this.#e.transcript.showPending())},onActivityChanged:(n,r,o)=>{this.#e.activities.draw(n,r,o)},onRunEnd:()=>{this.#e.transcript.hidePending(),this.#e.stream.end()},onError:n=>{t.announcedOutcome=!0,this.#e.announcer.announce(this.#e.strings().announceFailed),this.#e.transcript.hidePending();let r=this.#e.appendMessage(Fe.ASSISTANT,`\u26A0\uFE0F ${n}`);r.classList.add("message--failed"),this.#e.actions.attach(r,{rateable:!1}),this.#e.transcript.revealWords(r),this.#e.stream.end()},onCancelled:()=>{t.announcedOutcome=!0,this.#e.announcer.announce(this.#e.strings().announceStopped),this.#e.transcript.hidePending(),this.#e.transcript.appendStoppedNote(),this.#e.stream.end()},onSettled:()=>{t.announcedOutcome||this.#e.announcer.announce(this.#e.strings().announceAnswerReady),this.#e.transcript.hidePending(),this.#e.setRunning(!1),this.#e.stream.end();for(let n of this.#e.transcript.cards())n.settled||n.settle(ne.INTERRUPTED,this.#e.strings().callNotFinished);this.#e.transcript.closeGroup()}}}#o(t){let n=t.tools.map(({id:o,name:i})=>({name:i,side:t.serverSettled.has(o)?"server":"client"})),r=[...t.invalidated];t.tools.length=0,t.serverSettled.clear(),t.invalidated.clear(),this.#e.element.dispatchEvent(new CustomEvent(ol,{detail:{tools:n,invalidated:r},bubbles:!0,composed:!0}))}#r(t,n){let r=n??{},o=Array.isArray(r.keys)?r.keys.filter(i=>typeof i=="string"):[];if(o.length!==0){for(let i of o)t.invalidated.add(i);this.#e.element.dispatchEvent(new CustomEvent(al,{detail:{keys:o,reason:typeof r.reason=="string"?r.reason:null},bubbles:!0,composed:!0}))}}};var md=new Set,Ms=class{#e;#t="";#n=null;#o="";#r="";#i=null;constructor(t){this.#e=t}claim(){this.#t=this.#a()}release(){this.#n!==null&&(md.delete(this.#n),this.#n=null)}conversationNamespace(t){return t===""?this.#t:`${this.#t}#${t}`}scopeStore(t,n){if(!(t instanceof et))return t;let r=this.conversationNamespace(n);return this.#i=r===""?t:new et(r),this.#i}rescopeStore(t){return this.#i===null?null:(this.#i=new et(t),this.#i)}key(t){return this.#t===""?t:`${t}:${this.#t}`}readScopedItem(t){let n=sessionStorage.getItem(this.key(t));return n!==null||this.#t===""?n:sessionStorage.getItem(t)}readPreference(t){try{let n=localStorage.getItem(this.key(t));if(n!==null)return n}catch{}return this.readScopedItem(t)}writePreference(t,n){let r=this.key(t);try{localStorage.setItem(r,n)}catch{}dt(r,n)}clearPreference(t){let n=this.key(t);try{localStorage.removeItem(n)}catch{}try{sessionStorage.removeItem(n)}catch{}}#a(){let t=this.#e.id(),n=t!==""?t:this.#e.endpoint();return n===""?"":this.#r===n?this.#o:md.has(n)?(this.#r=n,this.#o=`${n}~${we()}`,console.warn(`<ag-ui-chat>: another element on this page already stores its conversation under "${n}", so this one has been given a throwaway namespace of its own \u2014 the two would otherwise share a thread pointer, a history drawer and every message. Give each <ag-ui-chat> its own id to keep them apart and let this one restore its conversation across reloads.`),this.#o):(md.add(n),this.#n=n,n)}};var Pk=["data-attachments-url","data-attachment-accept","data-attachment-max-bytes","data-transcribe-url","data-threads-url","data-threads-cache","data-tools-url","data-skills-url","data-skills","data-prompt-chips","data-slash-commands","data-theme-toggle","data-strings","data-icon-url"],vd=["omit","same-origin","include"];function gd(e){return vd.includes(e)}var Iy="ag-ui-chat:collapsed",Ry="ag-ui-chat:theme",po=class extends HTMLElement{agentFactory=fd;headers={};getHeaders=null;trustedOrigins=[];allowImages=!1;formatRelativeTime=null;autoConfirm=!1;askUser=!1;askUserRenderer=null;approvalRenderer=null;approveWithEdits=!1;confirmPredicate=null;getTools=()=>this.#I.defaultTools();getContext=()=>[...Tl(this.getPageMap,this.autoInjectPageMap)];routeMap=[];navigate=null;getPageMap=null;autoInjectPageMap=!0;conversationStore=new et;uploadHandler=null;transcribeHandler=null;navigationResult=()=>({navigated:!0,url:window.location.href});skillContext=()=>({});toolSummaries={};formatToolPayload=null;strings={};resolvePageTarget=t=>document.querySelector(t);#e=new Set;#t=pe;#n=new us({card:t=>this.#v.card(t),strings:()=>this.#t,follow:()=>this.#v.follow()});#o=new Rs({ensureGroup:()=>this.#v.ensureGroup(),afterTranscriptGrew:()=>this.#v.afterGrew(),appendNotice:(t,n,r)=>this.#v.appendNotice(t,n,r)});#r=new gs({element:this,strings:()=>this.#t,retry:()=>{this.retryLastTurn()}});#i;#a=new ss;#l=document.createElement("button");#u;#d=document.createElement("div");#c;#h;#s;#f;#m;#b;#g;#y;#p;#S;#w;#T;#M;#A;#E;#k;#N=document.createElement("span");#F=0;#O;#v;#z;#ee;#le=document.createElement("span");#R;#x;#G=[];#D=[];#P=document.createElement("div");#$=null;#Z=()=>{this.#x.publishVisualViewport(),!this.#x.dragging()&&this.#x.restoreLauncherPosition()};#q;#te;#B=!1;#Y=new AbortController;#ce=!1;#ne=null;#L=null;#U={};#C=!1;#re=new rs;#I=new Ga({element:this,routeMap:()=>this.routeMap,navigate:()=>this.navigate,getPageMap:()=>this.getPageMap,resolvePageTarget:t=>this.resolvePageTarget(t),getTools:()=>this.getTools(),askUser:()=>this.askUser,askUserRenderer:()=>this.askUserRenderer,decision:this.#re,ensureGroup:()=>this.#v.ensureGroup(),strings:()=>this.#t,hidePending:()=>this.#v.hidePending(),updateEmptyState:()=>this.#v.updateEmptyState(),follow:()=>this.#v.follow(),fetchInit:t=>this.#he(t)});#ue=new _s({openBubble:()=>this.appendMessage(Fe.ASSISTANT,""),allowImages:()=>this.allowImages,follow:()=>this.#v.follow()});#_=new Ms({id:()=>this.id,endpoint:()=>this.endpoint});#V;constructor(){super(),this.#i=this.attachShadow({mode:"open"}),this.#c=document.createElement("div"),this.#h=document.createElement("div"),this.#s=document.createElement("textarea"),this.#f=document.createElement("button"),this.#m=document.createElement("span"),this.#S=document.createElement("div"),this.#w=document.createElement("button"),this.#T=document.createElement("input"),this.#M=document.createElement("div"),this.#q=document.createElement("span"),this.#A=document.createElement("button"),this.#E=document.createElement("button"),this.#k=document.createElement("span"),this.#O=document.createElement("div"),this.#v=new Is({element:this,messages:this.#h,emptyWrap:this.#O,strings:()=>this.#t,allowImages:()=>this.allowImages,resolveTool:t=>this.#I.resolve(t),toolSummaries:()=>this.toolSummaries,serverSummary:t=>this.#I.summary(t),formatToolPayload:t=>this.formatToolPayload?.(t)??null}),this.#z=new Va({element:this,transcript:this.#v,tools:this.#I,decision:this.#re,strings:()=>this.#t,announce:t=>this.#a.announce(t),autoConfirm:()=>this.autoConfirm,confirmPredicate:()=>this.confirmPredicate,getPageMap:()=>this.getPageMap,navigate:()=>this.navigate,approveWithEdits:()=>this.approveWithEdits,approvalRenderer:()=>this.approvalRenderer,getContext:()=>this.getContext(),conversationStore:()=>this.conversationStore,threadId:()=>this.#p.threadId}),this.#ee=new Ps({element:this,transcript:this.#v,stream:this.#ue,actions:this.#r,activities:this.#o,subagents:this.#n,announcer:this.#a,strings:()=>this.#t,running:()=>this.#C,setRunning:t=>this.#W(t),appendMessage:(t,n)=>this.appendMessage(t,n),noteUnread:()=>this.#Oe()}),this.#x=new as({element:this,launcher:this.#E,root:this.#i,connected:()=>this.#B,collapsed:()=>this.collapsed,collapsible:()=>Vr(this.getAttribute("placement")),strings:()=>this.#t,readPreference:t=>this.#_.readPreference(t),writePreference:(t,n)=>this.#_.writePreference(t,n),clearPreference:t=>this.#_.clearPreference(t),announceSurfaceChange:(t,n)=>this.#_e(t,n)}),this.#u=new es({element:this,root:this.#i,messages:this.#h,messagesWrap:this.#d,input:this.#s,strings:()=>this.#t,autoGrow:()=>Mt(this.#s),quote:t=>this.quote(t)}),this.#R=new Xa({element:this,chat:this.#c,slot:this.#M,fileInput:this.#T,button:this.#w,strings:()=>this.#t,uploadHandler:()=>this.uploadHandler,headersFor:t=>this.#j(t),credentialsOption:()=>this.#ie()}),this.#te=new Ja({element:this,slot:this.#q,input:this.#s,strings:()=>this.#t,transcribeHandler:()=>this.transcribeHandler,headersFor:t=>this.#j(t),credentialsOption:()=>this.#ie(),onInput:()=>this.#Ee()}),this.registerActivityRenderer({type:dl,render:t=>{let n=Mk(t);return n===null?null:ls("\u{1F5DC}",se(this.#t.historyCompacted,{count:n}),"compaction")}}),this.registerActivityRenderer({type:ll,render:t=>ao(t,this.#t,n=>{this.sendMessage(n)})}),this.#b=new Qa(t=>this.#V.apply(t)),this.#V=new No({element:this,menu:this.#b,input:this.#s,hint:this.#S,strings:()=>this.#t,context:()=>this.skillContext(),flag:t=>this.#Ae(t),readJsonAttribute:t=>this.#fe(t),fetchInit:t=>this.#he(t),send:t=>{this.sendMessage(t)},submit:()=>{this.#ae()},autoGrow:()=>Mt(this.#s)}),this.#g=new ns({onSelect:t=>{this.#p.switchThread(t)},onNew:()=>{this.newChat(),this.#p.refreshDrawer()},onRename:(t,n)=>{this.#p.renameThread(t,n)},onDelete:t=>{this.#p.deleteThread(t)}}),this.#y=new Gr((t,n)=>{this.#p.continueRun(t,n).catch(r=>{console.warn("<ag-ui-chat>: continuing a run failed",r)})}),this.#p=new ts({element:this,drawer:this.#g,checkpoints:this.#y,transcript:this.#v,actions:this.#r,activities:this.#o,tools:this.#I,input:this.#s,hint:this.#S,strings:()=>this.#t,conversationStore:()=>this.conversationStore,formatRelativeTime:()=>this.formatRelativeTime,navigationResult:()=>this.navigationResult,headersFor:t=>this.#j(t),requestCredentials:()=>this.#X(),appendMessage:(t,n)=>this.appendMessage(t,n),autoGrow:()=>Mt(this.#s),continuationEnded:()=>this.#xe(),client:()=>this.#L,ensureClient:()=>this.#se(),buildClient:t=>this.#Se(t),releaseClient:()=>{this.#L=null},running:()=>this.#C,cancelRun:()=>this.#H(),resetState:()=>this.#K(),setRunning:t=>this.#W(t)})}static get observedAttributes(){return["title-text","placement","credentials","user-key","user-name",...Pk]}attributeChangedCallback(t,n,r){if(t==="credentials"){r!==null&&!gd(r)&&console.error(`<ag-ui-chat>: credentials="${r}" is not a fetch credentials mode (${vd.join(" / ")}) \u2014 it is being ignored, so requests use the browser default and cross-origin cookies will not be sent.`);return}if(t==="placement"){this.#x.releaseOwnedAxes(),this.#x.releaseLauncherPosition(),!Vr(this.getAttribute("placement"))&&this.collapsed&&this.setCollapsed(!1),requestAnimationFrame(()=>this.#x.syncResizeAnchor());return}if(t==="title-text"){this.#m.textContent=r??this.#t.title,this.#N.textContent=this.#m.textContent;return}if(t==="user-name"){this.#pe();return}if(t==="user-key"){this.#B&&(n??"")!==(r??"")&&this.#Ce(n??"",r??"");return}n===r||!this.#B||console.warn(`<ag-ui-chat>: "${t}" was changed after the element connected, and is read only while connecting \u2014 this assignment has no effect. Set it before the element enters the DOM (in the markup, or on the element before appending it); frameworks that patch attributes after mount should bind it at creation. To apply a new value now, remove and re-insert the element.`)}registerTool(t){this.#I.register(t)}get sharedState(){return this.#de()?.state??this.#U}set sharedState(t){this.#U={...t},this.#de()?.setState(this.#U)}#de(){return this.#p.continuation??this.#L}registerPageState(t){this.#I.registerPageState(t)}registerStateHook(t){this.registerPageState(t)}get endpoint(){return this.getAttribute("endpoint")??""}set endpoint(t){this.setAttribute("endpoint",t)}get userKey(){return this.getAttribute("user-key")??""}set userKey(t){this.setAttribute("user-key",t)}get userName(){return this.getAttribute("user-name")??""}set userName(t){this.setAttribute("user-name",t)}#pe(){let t=this.userName.trim();this.#le.textContent=t===""?this.#t.greetingNoName:se(this.#t.greeting,{name:t})}get credentials(){let t=this.getAttribute("credentials");return t!==null&&gd(t)?t:null}set credentials(t){if(t===null){this.removeAttribute("credentials");return}if(!gd(t))throw new TypeError(`<ag-ui-chat>: credentials must be one of ${vd.map(n=>`"${n}"`).join(", ")} (got ${JSON.stringify(t)}).`);this.setAttribute("credentials",t)}#oe(){return{...this.headers,...this.getHeaders?.()}}#j(t){let n=this.#oe();return Ua(t,Object.keys(n),this.trustedOrigins,this.#e),n}#X(){return this.credentials??void 0}#ie(){let t=this.#X();return t===void 0?{}:{credentials:t}}#he(t){return nt({headers:this.#j(t)},this.#X())}get toolDisplay(){let t=this.getAttribute("data-tool-display");return t===An.INLINE||t===An.MINIMAL||t===An.COMPACT?t:An.FULL}set toolDisplay(t){this.setAttribute("data-tool-display",t)}connectedCallback(){if(this.#Y=new AbortController,this.#ce&&this.#be(),this.#ce=!0,this.#_.claim(),this.#x.restoreSize(),requestAnimationFrame(()=>{this.#x.restoreLauncherPosition(),this.#x.syncResizeAnchor()}),this.#t=_u({...this.#ke(),...this.strings}),this.getAttribute("data-theme-toggle")!==null){let t=this.#_.readPreference(Ry);t!==null&&this.setAttribute("theme",t)}this.#Ne(),this.#g.setStrings(this.#t),this.#y.setStrings(this.#t),Vr(this.getAttribute("placement"))&&this.#Re()&&this.setAttribute("collapsed",""),this.#we(),this.#V.init(),this.conversationStore=this.#_.scopeStore(this.#Ie(),this.userKey),window.addEventListener("resize",this.#Z),window.visualViewport?.addEventListener("resize",this.#Z),window.visualViewport?.addEventListener("scroll",this.#Z),this.#x.publishVisualViewport(),this.#me(),this.#R.wire(this.#Y.signal),this.#te.wire(),this.#p.adoptActiveThread(),queueMicrotask(()=>this.#Te()),this.#p.rehydrate(),this.#B=!0}#Te(){this.#B&&(this.#I.fetchCatalog(),this.#V.fetch())}async reload(){this.#H(),this.#K(),this.#W(!1),await Promise.all([this.#I.fetchCatalog(),this.#V.fetch(),this.#p.rehydrate()])}disconnectedCallback(){this.#B=!1,this.#Y.abort(),window.removeEventListener("resize",this.#Z),window.visualViewport?.removeEventListener("resize",this.#Z),window.visualViewport?.removeEventListener("scroll",this.#Z),this.#_.release(),this.#H(),this.#u.detachPageOffer(),this.#R.tray?.dispose(),this.#te.dispose(),this.#v.disposeScroller(),this.#a.dispose()}#Ae(t){let n=this.getAttribute(t);return n!==null&&n!=="false"}#fe(t){let n=this.getAttribute(t);if(n===null)return null;try{return JSON.parse(n)}catch{return console.warn(`<ag-ui-chat>: ${t} is not valid JSON, so it was ignored entirely and the built-in default is being used. Check the quoting -- JSON inside an HTML attribute needs single quotes around the attribute value, or its own double quotes escaped.`),null}}#ke(){let t=this.#fe("data-strings");return typeof t=="object"&&t!==null?t:{}}quote(t){this.#u.insert(t)}offerQuoteInPage(t=document.body){return this.#u.offerInPage(t)}#me(){this.#ne=null;let t=this.getAttribute("data-threads-url");if(t!==null){let n=this.conversationStore,r=new uo(t,()=>this.#j(t),n,()=>this.#X(),this.getAttribute("data-threads-cache")!=="false");this.#ne={remote:r,inner:n},this.conversationStore=r}}#Ie(){let t=this.#ne;return t!==null&&this.conversationStore===t.remote?t.inner:this.conversationStore}setSkills(t){this.#V.setClientSkills(t)}get collapsed(){return this.hasAttribute("collapsed")}set collapsed(t){this.setCollapsed(t)}setCollapsed(t,n={}){t&&!Vr(this.getAttribute("placement"))||(n.announce===!0&&t&&!this.collapsed&&this.#_e(this.#t.chatMinimised,null),t||this.#x.restoreLauncherPosition(),t?this.setAttribute("collapsed",""):this.removeAttribute("collapsed"),dt(this.#_.key(Iy),t?"1":"0"),this.#J(0),this.dispatchEvent(new CustomEvent(el,{detail:{collapsed:t},bubbles:!0,composed:!0})))}get unread(){return this.#F}#Re(){let t=this.#_.readScopedItem(Iy);return t!==null?t==="1":os(this.getAttribute("placement"))&&!this.hasAttribute("data-start-open")}describeSurface(){return this.#x.describeSurface()}moveTo(t,n={}){return this.#x.moveTo(t,n)}toggleCollapsed(){this.setCollapsed(!this.collapsed)}toggleTheme(){let t=this.getAttribute("theme")==="dark"?"light":"dark";this.setAttribute("theme",t),this.#_.writePreference(Ry,t),this.#ve()}#Ce(t,n){let r=this.#_.conversationNamespace(t),o=this.#_.conversationNamespace(n);if(t===""){et.adopt(r,o),this.#ge(o);return}et.purge(r),this.#ge(o),this.#z.forgetWaivers(),this.#H(),this.#K(),this.#U={},this.#W(!1),this.#J(0),this.#p.adoptActiveThread(),this.#p.rehydrate(),this.#p.refreshDrawer()}#ge(t){let n=this.#_.rescopeStore(t);n!==null&&(this.conversationStore=n,this.#me())}#ve(){let t=this.getAttribute("theme")==="dark";this.#A.replaceChildren(ps("theme","theme-icon",t?rp:np,null))}openThreads(){this.#p.openThreads()}openCheckpoints(){this.#p.openCheckpoints()}closeThreads(){this.#g.close()}closeCheckpoints(){this.#y.close()}toggleCheckpoints(){if(this.#y.open_){this.#y.close();return}this.openCheckpoints()}newChat(){this.#H(),this.#p.reapUnsent(),this.#K(),this.#p.startThread(),this.#W(!1),this.#J(0),this.collapsed||this.#s.focus({preventScroll:!0})}#K(){this.#be(),this.#G.length=0,this.#$=null}#be(){this.#L=null,this.#ee.detach(),this.#ye(),this.#p.forgetRestored()}#ye(){this.#ue.end(),this.#v.releaseTurn(),this.#n.clear(),this.#v.forgetCards(),this.#o.clearBlocks(),this.#r.forget(),this.#R.tray?.clear(),this.removeAttribute("data-composer-settling"),this.removeAttribute("data-restoring"),this.#v.empty()}async retryLastTurn(){if(this.#C)return!1;let t=this.#se(),n=t.truncateToLastUser();if(n===null)return!1;this.#ye();for(let r of n)this.#p.replay(r);return await t.resume(),!0}appendMessage(t,n){return this.#v.append(t,n)}#Ne(){let{signal:t}=this.#Y;this.#c.className="chat",this.#c.setAttribute("part","panel");let n=document.createElement("div");n.className="header",n.setAttribute("part","header");let r=this.#m;r.className="header-title",r.setAttribute("part","title"),r.textContent=this.getAttribute("title-text")??this.#t.title,(this.querySelector('[slot="icon"]')!==null||this.getAttribute("data-icon-url")!==null)&&n.append(ps("icon","icon",null,this.getAttribute("data-icon-url")));let o=document.createElement("slot");o.name="header-actions";let i=document.createElement("div");i.className="header-controls",i.setAttribute("part","header-controls");let a=Xr("history",this.#t.chatHistory,"\u2630");a.addEventListener("click",()=>this.openThreads());let s=Xr("checkpoints",this.#t.checkpoints,"\u21BA");s.addEventListener("click",()=>this.toggleCheckpoints());let c=Xr("new",this.#t.newChat,"\u271A");c.addEventListener("click",()=>this.newChat());let l=Xr("collapse",this.#t.collapse,"\u2014");l.addEventListener("click",()=>this.toggleCollapsed()),this.#p.runs()!==null?i.append(a,s,c):i.append(a,c),this.getAttribute("data-theme-toggle")!==null&&(this.#A.type="button",this.#A.className="header-btn header-btn--theme",this.#A.setAttribute("part","header-button theme-toggle"),this.#A.title=this.#t.toggleTheme,this.#A.setAttribute("aria-label",this.#t.toggleTheme),this.#A.addEventListener("click",()=>this.toggleTheme(),{signal:t}),this.#ve(),i.append(this.#A)),i.append(l),n.append(r,o,i),this.#x.enablePanelDrag(n),this.#h.className="messages",this.#h.setAttribute("part","messages"),this.#h.setAttribute("role","log"),this.#h.setAttribute("aria-live","off"),this.#h.setAttribute("aria-label",this.#t.conversation),this.#l.className="jump-latest",this.#l.type="button",this.#l.setAttribute("part","jump-latest"),this.#l.textContent=this.#t.jumpToLatest,this.#u.mount(t),this.#v.mountScroller(this.#l,t),this.#a.mount(),this.#O.className="empty",this.#O.setAttribute("part","empty");let u=document.createElement("div");u.className="greeting",u.setAttribute("part","greeting");let m=document.createElement("slot");m.name="greeting",m.append(this.#le),u.append(m),this.#pe();let f=document.createElement("slot");f.name="empty";let h=gy(this,this.#t,T=>{this.sendMessage(T)});h!==null&&f.append(h),this.#O.replaceChildren(u,f),this.#P.className="queued",this.#P.setAttribute("part","queued"),this.#P.setAttribute("role","group"),this.#P.setAttribute("aria-label",this.#t.queued),this.#P.hidden=!0,this.#h.append(this.#O),this.#v.updateEmptyState();let p=document.createElement("div");p.className="input-row",p.setAttribute("part","composer");let E=document.createElement("div");E.className="composer",E.setAttribute("part","composer-surface");let b=document.createElement("div");b.className="composer-tools",b.setAttribute("part","composer-tools"),this.#s.className="input",this.#s.setAttribute("part","input"),this.#s.setAttribute("aria-label",this.#t.message),this.#s.rows=1,this.#s.placeholder=this.#t.inputPlaceholder,this.#s.addEventListener("keydown",T=>this.#Pe(T),{signal:t}),this.#s.addEventListener("input",()=>this.#Ee(),{signal:t}),this.#f.className="send",this.#f.type="button",this.#f.setAttribute("part","send"),this.#f.replaceChildren(ds("icon-send","send-send",Jd),ds("icon-stop","send-stop",Qd)),this.#f.title=this.#t.send,this.#f.setAttribute("aria-label",this.#t.send),this.#f.dataset.state="idle",this.#f.addEventListener("click",()=>{if(this.#C){this.#H();return}this.#ae()},{signal:t}),this.#S.className="skill-hint",this.#S.setAttribute("part","skill-hint"),this.#S.hidden=!0,this.#w.className="attach-btn",this.#w.type="button",this.#w.setAttribute("part","attach-button"),this.#w.replaceChildren(ds("icon-attach","attach-glyph",ep)),this.#w.title=this.#t.attachFiles,this.#w.setAttribute("aria-label",this.#t.attachFiles),this.#w.hidden=!0,this.#w.addEventListener("click",()=>this.#T.click(),{signal:t}),this.#T.className="attach-input",this.#T.type="file",this.#T.multiple=!0,this.#T.hidden=!0,this.#T.addEventListener("change",()=>this.#R.onFilesPicked(),{signal:t}),this.#M.className="attachment-slot",this.#q.className="voice-slot";let S=document.createElement("slot");S.name="footer",b.append(this.#w,this.#q,this.#f),E.append(this.#s,b),p.append(E,this.#T),this.#d.className="messages-wrap",this.#d.replaceChildren(this.#h,this.#l,this.#u.button),this.#c.replaceChildren(n,this.#d,this.#b.palette,this.#b.chips,this.#S,this.#P,this.#M,p,S,this.#g.element,this.#y.element),this.#c.addEventListener("pointerdown",T=>{if(!this.#y.open_)return;let w=T.composedPath();w.includes(this.#y.element)||w.includes(s)||this.#y.close()},{signal:t}),this.#E.className="launcher",this.#E.type="button",this.#E.setAttribute("part","launcher"),this.#E.setAttribute("aria-label",this.#t.expand),this.#k.className="launcher-badge",this.#k.setAttribute("part","launcher-badge"),this.#k.setAttribute("aria-hidden","true"),this.#k.hidden=!0,this.#N.className="rail-label",this.#N.setAttribute("part","rail-label"),this.#N.setAttribute("aria-hidden","true"),this.#N.textContent=this.getAttribute("title-text")??this.#t.title,this.#E.replaceChildren(ps("launcher","launcher-icon",op,Sb(this)),this.#N,this.#k),this.#E.addEventListener("click",()=>this.setCollapsed(!1),{signal:t}),this.#x.enableLauncherDrag(t),this.#x.mountResizeGrips(this.#c),Eb(this.#i);let y=this.#x.probe;y.className="viewport-probe",y.setAttribute("aria-hidden","true"),this.#i.replaceChildren(y,this.#a.region,this.#c,this.#E)}#we(){this.#E.setAttribute("aria-expanded",String(!this.collapsed));let t=this.#F;this.#k.textContent=t>9?"9+":String(t),this.#k.hidden=t===0||!xb(this);let n=this.#k.hidden?this.#t.expand:se(this.#t.expandUnread,{count:t});this.#E.setAttribute("aria-label",n),this.#E.title=n}#J(t){this.#F=t,this.#we(),this.dispatchEvent(new CustomEvent(tl,{detail:{unread:t},bubbles:!0,composed:!0}))}#Oe(){this.collapsed&&this.#J(this.#F+1)}#Ee(){this.#b.onInput(this.#s.value),this.#S.hidden=!0,Mt(this.#s),this.#$=null}#Pe(t){if(this.#b.onKeydown(t)){t.preventDefault();return}if(t.key==="Escape"&&this.#C){t.preventDefault(),this.#H();return}if(t.key==="Enter"&&!t.shiftKey){t.preventDefault(),this.#ae();return}this.#Me(t)}#Me(t){let n=t.key==="ArrowUp";if(!n&&t.key!=="ArrowDown"||this.#b.isOpen())return;let r=this.#G;if(r.length===0||this.#$===null&&(!n||this.#s.value!==""))return;let o=this.#$===null?0:this.#$+(n?1:-1);o>=r.length||(t.preventDefault(),this.#$=o<0?null:o,this.#s.value=o<0?"":r[o],this.#s.setSelectionRange(this.#s.value.length,this.#s.value.length),Mt(this.#s))}#H(){for(let t of this.#D)this.#G[0]!==t&&this.#G.unshift(t);this.#D.length=0,this.#Q(),this.#re.abort(),this.#L?.cancel(),this.#p.stopContinuation()}#W(t){let n=this.#C&&!t;this.#C=t;let r=t?this.#t.stop:this.#t.send;this.#f.title=r,this.#f.setAttribute("aria-label",r),this.#f.dataset.state=t?"running":"idle",n&&this.#xe()}#xe(){if(this.#C||this.#p.continuation!==null)return;let t=this.#D.shift();this.#Q(),t!==void 0&&this.sendMessage(t)}#Q(){this.#P.replaceChildren(),this.#P.hidden=this.#D.length===0;for(let[t,n]of this.#D.entries()){let r=document.createElement("button");r.type="button",r.className="queued-chip",r.setAttribute("part","queued-chip"),r.textContent=n,r.title=se(this.#t.removeQueued,{text:n}),r.setAttribute("aria-label",r.title),r.addEventListener("click",()=>{this.#D.splice(t,1),this.#Q()}),this.#P.appendChild(r)}}async#ae(){let t=this.#s.value.trim(),n=this.#R.tray?.readyRefs()??[];if(!(t===""&&n.length===0)){if(this.#C||this.#p.continuation!==null){t!==""&&(this.#D.push(t),this.#Q(),this.#s.value="",Mt(this.#s));return}t!==""&&this.#G[0]!==t&&this.#G.unshift(t),this.#$=null,this.#s.value="",Mt(this.#s),this.#R.tray?.hasPending()===!0&&this.#v.appendNotice("\u{1F4CE}",se(this.#t.attachmentsStillUploading,{n:this.#R.tray.pendingCount()}),"attachment-pending"),this.#R.tray?.clearReady(),await this.sendMessage(t,n)}}async sendMessage(t,n=[]){if(this.#C||this.#p.continuation!==null||t===""&&n.length===0)return;this.#v.isEmpty()&&this.setAttribute("data-composer-settling","");let r=this.appendMessage(Fe.USER,t);n.length>0&&r.appendChild(Wa(n)),this.dispatchEvent(new CustomEvent(Qs,{detail:{content:t,attachments:n},bubbles:!0,composed:!0})),await this.#ze(t,n)}attachFile(t){return this.#R.attach(t)}async#ze(t,n){if(this.endpoint===""){console.error('<ag-ui-chat>: no endpoint is set, so this message was not sent and no request was made. Point the element at your AG-UI mount with the endpoint attribute (endpoint="/agent/"), or assign chat.endpoint before sending.'),this.#v.appendNotice("\u26A0",this.#t.notConnected,"not-connected");return}await this.#se().send(t,n)}#se(){return this.#L===null&&(this.#L=this.#Se({endpoint:this.endpoint,initialMessages:this.#p.restored,follows:[]})),this.#L}#Se(t){let n=this.#p.threadId,r=this.agentFactory({endpoint:t.endpoint,headers:this.#oe(),getHeaders:()=>this.#oe(),trustedOrigins:this.trustedOrigins,...this.#ie(),threadId:n,initialMessages:t.initialMessages,initialState:this.#U});return new so({agent:r,handlers:this.#ee.forClient(),getTools:()=>this.#I.advertise(),getContext:()=>this.#z.buildContext(),executeTool:o=>this.#z.execute(o),resolveInterrupts:o=>this.#z.resolveInterrupts(o),onPersist:o=>{let i=[...t.follows,...o];this.conversationStore.saveMessages(n,i),t.onSaved?.(i)},onStateChanged:o=>this.#Le(o),connectionLostMessage:this.#t.connectionLost,unfinishedMessage:this.#t.callNotFinished,declinedMessage:this.#t.declinedAction,maxToolRounds:Ay(this)})}#Le(t){this.#U={...t},this.dispatchEvent(new CustomEvent(nl,{detail:{state:this.#U},bubbles:!0,composed:!0}))}#_e(t,n){this.#v.appendNotice("\u2922",t,"surface",n===null?void 0:{label:this.#t.undo,onActivate:n})}enableCharts(t=["tool","activity"]){let n=!this.#o.has(Ro)&&!this.#I.has(ja);t.includes("activity")&&this.registerActivityRenderer({type:Ro,render:r=>{let o=Kn(r);return o===null?null:Ur(o)},removedNotice:this.#t.chartUndrawable}),t.includes("tool")&&this.registerTool(ob()),n&&this.isConnected&&this.reload()}registerActivityRenderer(t){this.#o.register(t)}get unhandledActivityTypes(){return this.#o.unhandledTypes()}};function Mk(e){let t=e?.removed;return typeof t=="number"?t:null}function zk(){customElements.get(Ao)===void 0&&customElements.define(Ao,po)}async function Lk(e,t,n={}){await Et(e),await wl(e,{...n,flashMs:n.flashMs??0}),await bl(e,t,n)}async function Dk(e,t={}){await Et(e),await yl(e,t)}async function $k(e,t={}){await Et(e),await El(e,t)}async function Uk(e,t,n={}){await Et(e),await xl(e,t,n)}async function Hk(e,t,n={}){await Et(e),await Sl(e,t,n)}function Fk(e,t){e instanceof HTMLInputElement&&e.type==="checkbox"?ur(e,!!t):Zt(e,String(t)),e.dispatchEvent(new Event("input",{bubbles:!0})),e.dispatchEvent(new Event("change",{bubbles:!0}))}var Gk="0.41.1";export{rl as ATTACHMENT_EVENT,po as AgUiChat,so as AgUiClient,Ro as CHART_ACTIVITY_TYPE,ja as CHART_TOOL_NAME,Oo as CHAT_CORNERS,dl as COMPACTION_ACTIVITY_TYPE,il as CUSTOM_AGENT_EVENT,Gr as CheckpointMenu,cr as ClientToolRegistry,Cs as ConnectionLostError,pe as DEFAULT_UI_STRINGS,Ao as ELEMENT_TAG,sl as FEEDBACK_EVENT,cl as INVALIDATE_CUSTOM_NAME,al as INVALIDATE_EVENT,pl as LOAD_CAPABILITY_TOOL,X_ as MAX_QUOTE_CHARS,wk as MAX_SUGGESTIONS,Ek as MAX_SUGGESTION_CHARS,Tn as MAX_TOOL_ROUNDS,Ft as MESSAGE_ACTIONS,Fe as MESSAGE_ROLE,pr as PAGE_ACTIONS,ol as RUN_FINISHED_EVENT,uo as RemoteConversationStore,Zr as RunIndex,nl as STATE_EVENT,Qs as SUBMIT_EVENT,ll as SUGGESTIONS_ACTIVITY_TYPE,et as SessionStorageStore,el as TOGGLE_EVENT,ne as TOOL_CALL_STATUS,An as TOOL_DISPLAY,Ge as TOOL_OUTCOME,Yr as ToolCallCard,tl as UNREAD_EVENT,Gk as VERSION,ko as X_CONFIRM_KEY,sr as X_DESTRUCTIVE_KEY,lr as X_NAVIGATES_KEY,Ie as X_SUMMARY_KEY,zu as asQuote,Vu as attachMessageActions,Du as attachQuoteOffer,Kn as chartSpecFrom,Dk as clickElement,fl as createChatSurfaceTools,fd as createHttpAgent,_l as createPageActionTools,Tl as createPageMapContext,Lo as createPageStateTools,Al as createRouteTools,Iw as createStateHookTools,zk as defineAgUiChat,Lk as fillField,Sw as flash,wl as focusWithFlash,yl as highlightThenClick,gp as isChatCorner,Cu as isDestructive,Ba as isNavigates,_u as mergeUiStrings,fs as messageActionBar,Uu as messageAttachments,Au as parseToolCatalog,Mo as prefersReducedMotion,$k as pressButton,El as pressThenClick,pd as prettifyToolName,Hr as quotableSelection,Fr as relativeTime,Ur as renderChart,io as renderMarkdown,ao as renderSuggestionChips,ku as requestApproval,Ru as requestConfirmation,Tu as requestQuestion,Et as scrollIntoCenterView,Uk as selectControl,xl as selectOption,Fk as setControlValue,ur as setNativeChecked,Zt as setNativeValue,ml as showHighlightOverlay,my as suggestionPrompts,Hk as toggleCheckbox,Sl as toggleControl,Br as toolStatusFromOutcome,Mu as transcribeAudio,bl as typeInto,Ou as uploadAttachment};
/*! Bundled license information:

fast-json-patch/module/helpers.mjs:
  (*!
   * https://github.com/Starcounter-Jack/JSON-Patch
   * (c) 2017-2022 Joachim Wester
   * MIT licensed
   *)

fast-json-patch/module/duplex.mjs:
  (*!
   * https://github.com/Starcounter-Jack/JSON-Patch
   * (c) 2017-2021 Joachim Wester
   * MIT license
   *)

dompurify/dist/purify.es.mjs:
  (*! @license DOMPurify 3.4.15 | (c) Cure53 and other contributors | Released under the Apache license 2.0 and Mozilla Public License 2.0 | github.com/cure53/DOMPurify/blob/3.4.15/LICENSE *)
*/
