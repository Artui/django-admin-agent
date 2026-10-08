var lw=Object.defineProperty;var tl=(t,e)=>{for(var n in e)lw(t,n,{get:e[n],enumerable:!0})};var Ro="ag-ui-chat",nl="ag-ui-submit",rl="ag-ui-toggle",ol="ag-ui-unread",il="ag-ui-state",al="ag-ui-attachments",sl="ag-ui-run-finished",ll="ag-ui-custom",cl="ag-ui-invalidate",ul="ag-ui-feedback",dl="suggestions",pl="ag_ui.invalidate",Qd="ag_ui.subagent",An={STARTED:"started",TOOL_CALL:"tool_call",TOOL_RESULT:"tool_result",FINISHED:"finished",FAILED:"failed"},He={USER:"user",ASSISTANT:"assistant"},cr="x-destructive",Co="x-confirm",Ie="x-summary",ur="x-navigates",No="read_page",kn=10,Gt={COPY:"copy",RETRY:"retry",FEEDBACK:"feedback"},J={PENDING:"pending",DEFERRED:"deferred",DONE:"done",ERROR:"error",DECLINED:"declined",INTERRUPTED:"interrupted"},Fe={SUCCESS:"success",FAILED:"failed",DENIED:"denied",INTERRUPTED:"interrupted"},je={UPLOADING:"uploading",READY:"ready",ERROR:"error"},hl=10*1024*1024,In={INLINE:"inline",MINIMAL:"minimal",COMPACT:"compact",FULL:"full"},fl="compaction",ml="load_capability",ep='<svg class="glyph" viewBox="0 0 24 24" aria-hidden="true"><path d="M12 19.5V5m-6.5 6.5L12 5l6.5 6.5"/></svg>',tp='<svg class="glyph glyph--solid" viewBox="0 0 24 24" aria-hidden="true"><rect x="7" y="7" width="10" height="10" rx="2.5"/></svg>',np='<svg class="glyph" viewBox="0 0 24 24" aria-hidden="true"><path d="M17 8.5V15a5 5 0 0 1-10 0V7a3 3 0 0 1 6 0v7.5a1 1 0 0 1-2 0V8.5"/></svg>',rp='<svg class="glyph" viewBox="0 0 24 24" aria-hidden="true"><path d="M12 4a3 3 0 0 1 3 3v5a3 3 0 0 1-6 0V7a3 3 0 0 1 3-3z"/><path d="M5 11v1a7 7 0 0 0 14 0v-1"/><path d="M12 19v3"/></svg>',op='<svg class="glyph" viewBox="0 0 24 24" aria-hidden="true"><path d="M20 14.5A8.5 8.5 0 0 1 9.5 4a8.5 8.5 0 1 0 10.5 10.5z"/></svg>',ip='<svg class="glyph" viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"/></svg>',ap='<svg class="glyph" viewBox="0 0 24 24" aria-hidden="true"><path d="M4 5.5A2.5 2.5 0 0 1 6.5 3h11A2.5 2.5 0 0 1 20 5.5v8a2.5 2.5 0 0 1-2.5 2.5H9l-5 4z"/></svg>',sp='<svg class="glyph" viewBox="0 0 24 24" aria-hidden="true"><rect x="9" y="9" width="11" height="11" rx="2"/><path d="M5 15V6a2 2 0 0 1 2-2h8"/></svg>',lp='<svg class="glyph" viewBox="0 0 24 24" aria-hidden="true"><path d="M20 12a8 8 0 1 1-2.5-5.8"/><path d="M20 4v4h-4"/></svg>',cp='<svg class="glyph" viewBox="0 0 24 24" aria-hidden="true"><path d="M7 10v10H4V10z"/><path d="M7 10l4.5-7a2 2 0 0 1 3.4 2L13.5 9H19a2 2 0 0 1 2 2.3l-1.1 6.4A2 2 0 0 1 17.9 20H7"/></svg>',up='<svg class="glyph" viewBox="0 0 24 24" aria-hidden="true"><path d="M17 14V4h3v10z"/><path d="M17 14l-4.5 7a2 2 0 0 1-3.4-2l1.4-4H5a2 2 0 0 1-2-2.3l1.1-6.4A2 2 0 0 1 6.1 4H17"/></svg>',dp='<svg class="glyph" viewBox="0 0 24 24" aria-hidden="true"><path d="M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8z"/><path d="M14 3v5h5"/></svg>',pp='<svg class="glyph" viewBox="0 0 24 24" aria-hidden="true"><rect x="3.5" y="4.5" width="17" height="15" rx="2.5"/><circle cx="9" cy="10" r="1.5"/><path d="M4.5 17.5 9 13.5l3.5 3 3-2.5 4.5 4"/></svg>',hp='<svg class="glyph" viewBox="0 0 24 24" aria-hidden="true"><path d="M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8z"/><path d="M14 3v5h5"/><rect class="glyph--solid" x="7.5" y="13.5" width="9" height="4.5" rx="1"/></svg>',fp='<svg class="glyph" viewBox="0 0 24 24" aria-hidden="true"><path d="M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8z"/><path d="M14 3v5h5"/><path d="M8.5 13.5h7M8.5 17h4.5"/></svg>',Oo="chart",Zt=24,mp=150,gp=2147483001,Po=5e3,ot=8;var cw=/\{([a-zA-Z_][a-zA-Z0-9_]*)\}/g;function le(t,e){return t.replace(cw,(n,r)=>Object.hasOwn(e,r)?String(e[r]):n)}var uw=/\{([a-zA-Z_][a-zA-Z0-9_]*)\}/g;function vp(t,e){let n=[];return{text:t.replace(uw,(o,i)=>{let a=e[i];return a==null||a===""?(n.includes(i)||n.push(i),o):String(a)}),missing:n}}function dw(t){if(typeof t!="object"||t===null)return!1;let e=t;return typeof e.name=="string"&&typeof e.title=="string"&&(e.prompt===void 0||typeof e.prompt=="string")}function gl(t){return Array.isArray(t)?t.filter(dw):[]}var Mo=class{#e;#t=[];#n=[];#o=[];constructor(e){this.#e=e}setClientSkills(e){this.#o=e,this.#i()}init(){this.#e.menu.enableChips(this.#e.flag("data-prompt-chips")),this.#e.menu.enableSlash(this.#e.flag("data-slash-commands")),this.#n=this.#r(),this.#i()}async fetch(){let e=this.#e.element.getAttribute("data-skills-url");if(e!==null)try{let n=await fetch(e,this.#e.fetchInit(e));this.#t=gl(await n.json()),this.#i()}catch{}}apply(e){let{input:n,hint:r}=this.#e;if(e.prompt===void 0){r.hidden=!0,this.#e.send(`/${e.name}`);return}let{text:o,missing:i}=vp(e.prompt,this.#e.context());if(i.length>0){r.textContent=le(this.#e.strings().skillNeeds,{title:e.title,fields:i.join(", ")}),r.hidden=!1,n.value=o,this.#e.autoGrow(),n.focus(),this.#a(o);return}if(r.hidden=!0,n.value=o,this.#e.autoGrow(),e.sendImmediately===!1){n.focus();return}this.#e.submit()}#r(){return gl(this.#e.readJsonAttribute("data-skills"))}#i(){let e=new Map;for(let n of[...this.#t,...this.#n,...this.#o])e.set(n.name,n);this.#e.menu.setSkills([...e.values()])}#a(e){let n=e.indexOf("{");this.#e.input.setSelectionRange(n,e.indexOf("}",n)+1)}};var zo=["top-left","top-right","bottom-left","bottom-right"];function bp(t){return zo.includes(t)}function vl(t){return[{name:"read_chat_surface",description:"Describe the chat panel you are speaking from: its placement, whether it is collapsed, whether it can be moved, and the box it occupies. Read this before moving or minimising yourself, since a full-screen panel has nowhere to move to. Read-only.",parameters:{type:"object",properties:{},required:[],[Ie]:"Read the chat's own position"},handler:()=>t.describeSurface()},{name:"move_chat",description:"Move your own panel to a corner, to uncover something the user needs to see. `corner` is top-left, top-right, bottom-left or bottom-right. Answers `moved: false` with a reason when the placement owns its position or the panel fills the screen; check `read_chat_surface` first, and prefer minimise_chat when there is nowhere to move to.",parameters:{type:"object",properties:{corner:{type:"string",enum:[...zo]}},required:["corner"],[Ie]:"Move the chat out of the way"},handler:e=>{let n=String(e.corner??""),r=t.describeSurface();return bp(n)?r.movable?{moved:t.moveTo(n,{announce:!0}),corner:n}:{moved:!1,reason:r.fullBleed?"the panel fills the screen, so there is nowhere to move it to":r.draggable===!1?"this page has turned off moving the panel":`the "${r.placement??""}" placement owns the panel's position`,suggestion:r.collapsible?"minimise_chat":null}:{moved:!1,reason:`"${n}" is not a corner; use one of ${zo.join(", ")}`}}},{name:"minimise_chat",description:"Collapse your own panel to its launcher, so the user can see the whole page. The launcher stays visible and reopens it. Answers `minimised: false` when the placement has no collapsed state, which is the case for a full-page chat.",parameters:{type:"object",properties:{},required:[],[Ie]:"Minimise the chat"},handler:()=>t.describeSurface().collapsible?(t.setCollapsed(!0,{announce:!0}),{minimised:!0}):{minimised:!1,reason:"this placement has no collapsed state, so there is no launcher to return to"}},{name:"restore_chat",description:"Open your own panel again after minimising it.",parameters:{type:"object",properties:{},required:[],[Ie]:"Restore the chat"},handler:()=>(t.setCollapsed(!1),{restored:!0})}]}var dr=class{#e=new Map;register(e){this.#e.set(e.name,e)}has(e){return this.#e.has(e)}get(e){let n=this.#e.get(e);if(n===void 0)throw new Error(`tool "${e}" is not registered`);return n}tools(){return[...this.#e.values()].map(e=>({name:e.name,description:e.description,parameters:e.parameters}))}};var pw="#4f46e5";function Rn(t,e,n){let r=window.getComputedStyle(t).getPropertyValue(e).trim();return r===""?n:r}var hw=4;function bl(t,e={}){let n=document.createElement("div");n.setAttribute("data-ag-ui-highlight",""),n.setAttribute("aria-hidden","true"),n.style.cssText=["position: fixed","inset: 0","pointer-events: none",`z-index: ${Rn(t,"--ag-ui-highlight-z-index",String(gp))}`].join(";");let r=document.createElement("div"),o=document.createElement("div");n.className="ag-ui-highlight",r.className="ag-ui-highlight-scrim",o.className="ag-ui-highlight-ring",e.scrim===!0&&n.append(r),n.append(o);let i=e.ringWidth??Number.parseFloat(Rn(t,"--ag-ui-highlight-ring-width","3")),a=e.flowMs??Number.parseFloat(Rn(t,"--ag-ui-highlight-flow-ms","2400")),s=()=>{let u=t.getBoundingClientRect(),f=e.padding??hw,m=e.radius??Number.parseFloat(getComputedStyle(t).borderRadius),h=u.left-f,p=u.top-f,E=u.width+f*2,g=u.height+f*2;e.scrim===!0&&(r.style.cssText=["position: absolute","inset: 0",`background: ${Rn(t,"--ag-ui-highlight-scrim","rgba(15, 15, 25, 0.45)")}`,`clip-path: path(evenodd, '${gw(h,p,E,g,m+f)}')`].join(";")),o.style.cssText=["position: absolute",`left: ${h}px`,`top: ${p}px`,`width: ${E}px`,`height: ${g}px`,`border-radius: ${m+f}px`,`border: ${i}px solid transparent`,"box-sizing: border-box",mw(t,e)].join(";")};s();let c=null;e.gradient===!0&&!window.matchMedia("(prefers-reduced-motion: reduce)").matches&&(c=o.animate([{backgroundPosition:"100% 0"},{backgroundPosition:"-100% 0"}],{duration:a,iterations:Number.POSITIVE_INFINITY,easing:"linear"}));let l={capture:!0,passive:!0};return window.addEventListener("scroll",s,l),window.addEventListener("resize",s,l),document.body.appendChild(n),()=>{window.removeEventListener("scroll",s,l),window.removeEventListener("resize",s,l),c?.cancel(),n.remove()}}function fw(t){return t===void 0?null:CSS.supports("color",t)?t:null}function mw(t,e){let n=fw(e.color)??Rn(t,"--ag-ui-accent",pw);if(e.gradient!==!0)return`border-color: ${n}`;let r=Rn(t,"--ag-ui-highlight-gradient",`linear-gradient(115deg, transparent 20%, ${n} 50%, transparent 80%)`),o="linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0)";return[`background-image: ${r}`,"background-origin: border-box","background-size: 300% 100%",`-webkit-mask: ${o}`,`mask: ${o}`,"-webkit-mask-composite: xor","mask-composite: exclude","background-position: 50% 0"].join(";")}function gw(t,e,n,r,o){let i=Math.max(0,Math.min(o,n/2,r/2)),a=t+n,s=e+r,c=`M 0 0 H ${window.innerWidth} V ${window.innerHeight} H 0 Z`,l=[`M ${t+i} ${e}`,`H ${a-i}`,`A ${i} ${i} 0 0 1 ${a} ${e+i}`,`V ${s-i}`,`A ${i} ${i} 0 0 1 ${a-i} ${s}`,`H ${t+i}`,`A ${i} ${i} 0 0 1 ${t} ${s-i}`,`V ${e+i}`,`A ${i} ${i} 0 0 1 ${t+i} ${e}`,"Z"].join(" ");return`${c} ${l}`}function Lo(t,e){return Object.getOwnPropertyDescriptor(t,e).set}var vw=Lo(HTMLInputElement.prototype,"value"),bw=Lo(HTMLTextAreaElement.prototype,"value"),yw=Lo(HTMLSelectElement.prototype,"value"),ww=Lo(HTMLInputElement.prototype,"checked");function Bt(t,e){t instanceof HTMLTextAreaElement?bw.call(t,e):t instanceof HTMLSelectElement?yw.call(t,e):vw.call(t,e)}function pr(t,e){ww.call(t,e)}var yl="#4f46e5",Ew="rgba(79, 70, 229, 0.4)",xw="--ag-ui-accent";function Cn(t){return new Promise(e=>{setTimeout(e,t)})}function Do(){return window.matchMedia("(prefers-reduced-motion: reduce)").matches}function wl(t){return t<=0||Do()?Promise.resolve():Cn(t)}function $o(t,e){let n=window.getComputedStyle(t).getPropertyValue(xw).trim();return n===""?e:n}function yp(t){return`0 0 0 3px ${$o(t,Ew)}`}async function El(t,e,n={}){let r=n.charDelayMs??35;Bt(t,""),t.dispatchEvent(new Event("input",{bubbles:!0}));for(let o of e)Bt(t,t.value+o),t.dispatchEvent(new Event("input",{bubbles:!0})),r>0&&await Cn(r);t.dispatchEvent(new Event("change",{bubbles:!0}))}async function xl(t,e={}){let n=e.highlightMs??280,r=t.style.outline,o=t.style.outlineOffset;t.style.outline=`2px solid ${$o(t,yl)}`,t.style.outlineOffset="2px",await Cn(n),t.style.outline=r,t.style.outlineOffset=o,t.click()}var Sw=600,_w=100;function Et(t,e={}){let n=Do();return t.scrollIntoView({block:"center",inline:"nearest",behavior:n?"auto":"smooth"}),n?Promise.resolve():new Promise(r=>{let o,i=()=>{clearTimeout(o),document.removeEventListener("scroll",a,!0),document.removeEventListener("scrollend",i,!0),r()},a=()=>{document.removeEventListener("scroll",a,!0),clearTimeout(o),o=setTimeout(i,e.settleMs??Sw)};o=setTimeout(i,_w),document.addEventListener("scroll",a,!0),document.addEventListener("scrollend",i,!0)})}var Tw=1200,Aw=1/3;async function wp(t,e,n){(e.focus??n)&&t.focus({preventScroll:!0});let r=e.flashMs??Tw;if(r<=0)return;if(e.scrim===!0||e.gradient===!0){let l=bl(t,{scrim:e.scrim===!0,gradient:e.gradient===!0,...e.color===void 0?{}:{color:e.color},...e.ringPadding===void 0?{}:{padding:e.ringPadding}});await Cn(r),l();return}let o=t.style.outline,i=t.style.outlineOffset,a=t.style.transition,s=e.color??$o(t,yl);t.style.outline=`3px solid ${s}`,t.style.outlineOffset="2px";let c=Do()?0:Math.round(r*Aw);await Cn(r-c),c>0&&(t.style.transition=`outline-color ${c}ms ease-out`,t.style.outline="3px solid transparent",await Cn(c)),t.style.outline=o,t.style.outlineOffset=i,t.style.transition=a}function kw(t,e={}){return wp(t,e,!1)}function Sl(t,e={}){return wp(t,e,!0)}async function _l(t,e={}){let n=e.pressMs??140,r=t.style.transform,o=t.style.transition,i=t.style.boxShadow;t.style.transition="transform 80ms ease",t.style.transform="scale(0.96)",t.style.boxShadow=yp(t),await wl(n),t.style.transform=r,t.style.transition=o,t.style.boxShadow=i,t.click()}function Iw(t,e){for(let n of Array.from(t.options))if(n.value===e||n.text===e)return n;return null}async function Tl(t,e,n={}){let r=Iw(t,e);if(r===null)throw new Error(`no <option> matching "${e}"`);let o=n.highlightMs??220,i=t.style.outline,a=t.style.outlineOffset;t.style.outline=`2px solid ${$o(t,yl)}`,t.style.outlineOffset="2px",await wl(o),Bt(t,r.value),t.dispatchEvent(new Event("input",{bubbles:!0})),t.dispatchEvent(new Event("change",{bubbles:!0})),t.style.outline=i,t.style.outlineOffset=a}async function Al(t,e,n={}){let r=n.flashMs??200,o=t.style.boxShadow;t.style.boxShadow=yp(t),await wl(r),pr(t,e),t.dispatchEvent(new Event("input",{bubbles:!0})),t.dispatchEvent(new Event("change",{bubbles:!0})),t.style.boxShadow=o}var fr={SCROLL:"scroll",DRAG:"drag",CHAT:"chat"};function kl(t,e){let n=[];return t.has(fr.SCROLL)&&n.push(Rw(e)),t.has(fr.DRAG)&&n.push(Cw(e)),n}function Rw(t){return{name:"scroll_to",description:"Scroll a target into view. `target` is `top`, `bottom`, or a CSS selector / page-map element id. Read-only: it changes nothing on the page.",parameters:{type:"object",properties:{target:{type:"string"}},required:["target"],[Ie]:"Scroll into view"},handler:e=>{let n=String(e.target??"");if(n==="top"||n==="bottom"){let o=n==="top"?0:document.body.scrollHeight;return window.scrollTo({top:o,behavior:"smooth"}),{scrolled:!0,target:n}}let r=t(n);if(r===null)throw new Error(`no element matching "${n}"`);return Et(r),{scrolled:!0,target:n}}}}function Cw(t){return{name:"drag_and_drop",description:"Drag the `from` element onto the `to` element (CSS selectors or page-map element ids), firing the page's native drag-and-drop. Use for reordering sortable lists. The page decides what the drop commits.",parameters:{type:"object",properties:{from:{type:"string"},to:{type:"string"}},required:["from","to"],[Ie]:"Drag and drop"},handler:e=>{let n=String(e.from??""),r=String(e.to??""),o=t(n);if(o===null)throw new Error(`no element matching "${n}"`);let i=t(r);if(i===null)throw new Error(`no element matching "${r}"`);return Nw(o,i),{dragged:!0,from:n,to:r}}}}function Nw(t,e){let n=new DataTransfer;hr(t,"dragstart",n),hr(e,"dragenter",n),hr(e,"dragover",n),hr(e,"drop",n),hr(t,"dragend",n)}function hr(t,e,n){let r=new Event(e,{bubbles:!0,cancelable:!0});r.dataTransfer=n,t.dispatchEvent(r)}function Il(t,e){return!e||t===null?[]:[{description:"page_map",value:JSON.stringify(t())}]}function Uo(t){let e=[{name:`read_${t.name}`,description:`Read the "${t.name}" state.`,parameters:{type:"object",properties:{},required:[],[Ie]:`Read ${t.name}`},handler:()=>t.read()}],n=t.write;return n!==void 0&&e.push({name:`set_${t.name}`,description:`Update the "${t.name}" state.`,parameters:{...t.schema??{type:"object"},[cr]:!0,[Ie]:`Update ${t.name}`},handler:r=>n(r)}),e}var Ow=Uo;var Ep=/:([A-Za-z_][A-Za-z0-9_]*)/g;function Pw(t){return[...t.matchAll(Ep)].map(e=>e[0].slice(1))}function Mw(t,e,n){let r={...n};return{path:e.replace(Ep,(i,a)=>{let s=n[a];if(s==null||String(s)==="")throw new Error(`route "${t}" requires path param "${a}"`);return delete r[a],encodeURIComponent(String(s))}),leftover:r}}function zw(t,e){let n=new URLSearchParams;for(let[o,i]of Object.entries(e))n.set(o,String(i));let r=n.toString();return r===""?t:`${t}?${r}`}function Rl(t,e){return[{name:"list_routes",description:"List the routes the app can navigate to. Each route's `pathParams` names the dynamic segments to pass as `params` to `navigate_to_route`.",parameters:{type:"object",properties:{},required:[],[Ie]:"List pages"},handler:()=>t().map(n=>({...n,pathParams:Pw(n.path)}))},{name:"navigate_to_route",description:"Navigate to one of the app's routes by its id, filling any dynamic `:name` path segments (and extra query params) from `params`.",parameters:{type:"object",properties:{route_id:{type:"string"},params:{type:"object"}},required:["route_id"],[ur]:!0,[Ie]:"Navigate"},handler:n=>{let r=n.route_id,o=t().find(u=>u.id===r);if(o===void 0)throw new Error(`unknown route "${String(r)}"`);let i=n.params??{},{path:a,leftover:s}=Mw(o.id,o.path,i),c=zw(a,s),l=e();return l!==null?l(c):window.location.assign(c),{navigated:!0,path:c}}}]}var Oe=[];for(let t=0;t<256;++t)Oe.push((t+256).toString(16).slice(1));function xp(t,e=0){return(Oe[t[e+0]]+Oe[t[e+1]]+Oe[t[e+2]]+Oe[t[e+3]]+"-"+Oe[t[e+4]]+Oe[t[e+5]]+"-"+Oe[t[e+6]]+Oe[t[e+7]]+"-"+Oe[t[e+8]]+Oe[t[e+9]]+"-"+Oe[t[e+10]]+Oe[t[e+11]]+Oe[t[e+12]]+Oe[t[e+13]]+Oe[t[e+14]]+Oe[t[e+15]]).toLowerCase()}var Cl,Lw=new Uint8Array(16);function Nl(){if(!Cl){if(typeof crypto>"u"||!crypto.getRandomValues)throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");Cl=crypto.getRandomValues.bind(crypto)}return Cl(Lw)}var Dw=typeof crypto<"u"&&crypto.randomUUID&&crypto.randomUUID.bind(crypto),Ol={randomUUID:Dw};function $w(t,e,n){if(Ol.randomUUID&&!e&&!t)return Ol.randomUUID();t=t||{};let r=t.random??t.rng?.()??Nl();if(r.length<16)throw new Error("Random bytes length must be >= 16");if(r[6]=r[6]&15|64,r[8]=r[8]&63|128,e){if(n=n||0,n<0||n+16>e.length)throw new RangeError(`UUID byte range ${n}:${n+15} is out of buffer bounds`);for(let o=0;o<16;++o)e[n+o]=r[o];return e}return xp(r)}var It=$w;var v=(function(t){return t.TEXT_MESSAGE_START="TEXT_MESSAGE_START",t.TEXT_MESSAGE_CONTENT="TEXT_MESSAGE_CONTENT",t.TEXT_MESSAGE_END="TEXT_MESSAGE_END",t.TEXT_MESSAGE_CHUNK="TEXT_MESSAGE_CHUNK",t.TOOL_CALL_START="TOOL_CALL_START",t.TOOL_CALL_ARGS="TOOL_CALL_ARGS",t.TOOL_CALL_END="TOOL_CALL_END",t.TOOL_CALL_CHUNK="TOOL_CALL_CHUNK",t.TOOL_CALL_RESULT="TOOL_CALL_RESULT",t.STATE_SNAPSHOT="STATE_SNAPSHOT",t.STATE_DELTA="STATE_DELTA",t.MESSAGES_SNAPSHOT="MESSAGES_SNAPSHOT",t.ACTIVITY_SNAPSHOT="ACTIVITY_SNAPSHOT",t.ACTIVITY_DELTA="ACTIVITY_DELTA",t.RAW="RAW",t.CUSTOM="CUSTOM",t.RUN_STARTED="RUN_STARTED",t.RUN_FINISHED="RUN_FINISHED",t.RUN_ERROR="RUN_ERROR",t.STEP_STARTED="STEP_STARTED",t.STEP_FINISHED="STEP_FINISHED",t.REASONING_START="REASONING_START",t.REASONING_MESSAGE_START="REASONING_MESSAGE_START",t.REASONING_MESSAGE_CONTENT="REASONING_MESSAGE_CONTENT",t.REASONING_MESSAGE_END="REASONING_MESSAGE_END",t.REASONING_MESSAGE_CHUNK="REASONING_MESSAGE_CHUNK",t.REASONING_END="REASONING_END",t.REASONING_ENCRYPTED_VALUE="REASONING_ENCRYPTED_VALUE",t.SUBAGENT_STARTED="SUBAGENT_STARTED",t.SUBAGENT_FINISHED="SUBAGENT_FINISHED",t.SUBAGENT_ERROR="SUBAGENT_ERROR",t})({}),Vt="1.0";var Uw={TextMessageStartEvent:{optional:["timestamp","rawEvent","metadata","subagentRunId","role","name"],fields:{}},TextMessageContentEvent:{optional:["timestamp","rawEvent","metadata","subagentRunId"],fields:{}},TextMessageEndEvent:{optional:["timestamp","rawEvent","metadata","subagentRunId"],fields:{}},TextMessageChunkEvent:{optional:["timestamp","rawEvent","metadata","subagentRunId","messageId","role","delta","name"],fields:{}},ToolCallStartEvent:{optional:["timestamp","rawEvent","metadata","subagentRunId","parentMessageId"],fields:{}},ToolCallArgsEvent:{optional:["timestamp","rawEvent","metadata","subagentRunId"],fields:{}},ToolCallEndEvent:{optional:["timestamp","rawEvent","metadata","subagentRunId"],fields:{}},ToolCallChunkEvent:{optional:["timestamp","rawEvent","metadata","subagentRunId","toolCallId","toolCallName","parentMessageId","delta"],fields:{}},TextPart:{optional:["id","metadata"],fields:{}},DataSource:{optional:[],fields:{}},UrlSource:{optional:["mimeType"],fields:{}},FileSource:{optional:["provider","mimeType"],fields:{}},PartSource:{discriminator:"type",variants:{data:"DataSource",url:"UrlSource",file:"FileSource"}},ImagePart:{optional:["id","metadata"],fields:{source:"PartSource"}},AudioPart:{optional:["id","metadata"],fields:{source:"PartSource"}},VideoPart:{optional:["id","metadata"],fields:{source:"PartSource"}},DocumentPart:{optional:["id","metadata"],fields:{source:"PartSource"}},ContentPart:{discriminator:"type",variants:{text:"TextPart",image:"ImagePart",audio:"AudioPart",video:"VideoPart",document:"DocumentPart"}},ToolCallResultEvent:{optional:["timestamp","rawEvent","metadata","subagentRunId","role"],fields:{content:{array:"ContentPart"}}},StateSnapshotEvent:{optional:["timestamp","rawEvent","metadata","subagentRunId"],fields:{}},AddOperation:{optional:[],fields:{}},RemoveOperation:{optional:[],fields:{}},ReplaceOperation:{optional:[],fields:{}},MoveOperation:{optional:[],fields:{}},CopyOperation:{optional:[],fields:{}},TestOperation:{optional:[],fields:{}},JsonPatchOperation:{discriminator:"op",variants:{add:"AddOperation",remove:"RemoveOperation",replace:"ReplaceOperation",move:"MoveOperation",copy:"CopyOperation",test:"TestOperation"}},StateDeltaEvent:{optional:["timestamp","rawEvent","metadata","subagentRunId"],fields:{delta:{array:"JsonPatchOperation"}}},DeveloperMessage:{optional:["subagentRunId","name","encryptedValue","metadata"],fields:{}},SystemMessage:{optional:["subagentRunId","name","encryptedValue","metadata"],fields:{}},FunctionCall:{optional:[],fields:{}},ToolCall:{optional:["encryptedValue","metadata"],fields:{function:"FunctionCall"}},AssistantMessage:{optional:["subagentRunId","name","encryptedValue","metadata","content","toolCalls"],fields:{toolCalls:{array:"ToolCall"}}},UserMessage:{optional:["subagentRunId","name","encryptedValue","metadata"],fields:{content:{array:"ContentPart"}}},ToolMessage:{optional:["subagentRunId","error","encryptedValue","metadata"],fields:{content:{array:"ContentPart"}}},ActivityMessage:{optional:["subagentRunId","metadata"],fields:{}},ReasoningMessage:{optional:["subagentRunId","encryptedValue","metadata"],fields:{}},Message:{discriminator:"role",variants:{developer:"DeveloperMessage",system:"SystemMessage",assistant:"AssistantMessage",user:"UserMessage",tool:"ToolMessage",activity:"ActivityMessage",reasoning:"ReasoningMessage"}},MessagesSnapshotEvent:{optional:["timestamp","rawEvent","metadata"],fields:{messages:{array:"Message"}}},ActivitySnapshotEvent:{optional:["timestamp","rawEvent","metadata","subagentRunId","replace"],fields:{}},ActivityDeltaEvent:{optional:["timestamp","rawEvent","metadata","subagentRunId"],fields:{patch:{array:"JsonPatchOperation"}}},RawEvent:{optional:["timestamp","rawEvent","metadata","subagentRunId","source"],fields:{}},CustomEvent:{optional:["timestamp","rawEvent","metadata","subagentRunId"],fields:{}},Tool:{optional:["parameters","metadata"],fields:{}},Context:{optional:[],fields:{}},ResumeEntry:{optional:["payload","metadata"],fields:{}},RunAgentInput:{optional:["protocolVersion","parentRunId","state","tools","context","forwardedProps","resume"],fields:{messages:{array:"Message"},tools:{array:"Tool"},context:{array:"Context"},resume:{array:"ResumeEntry"}}},RunStartedEvent:{optional:["timestamp","rawEvent","metadata","protocolVersion","parentRunId","input"],fields:{input:"RunAgentInput"}},RunFinishedSuccessOutcome:{optional:["pendingToolCallIds"],fields:{}},Interrupt:{optional:["subagentRunId","message","toolCallId","responseSchema","expiresAt","metadata"],fields:{}},RunFinishedInterruptOutcome:{optional:[],fields:{interrupts:{array:"Interrupt"}}},RunFinishedCancelledOutcome:{optional:[],fields:{}},RunFinishedOutcome:{discriminator:"type",variants:{success:"RunFinishedSuccessOutcome",interrupt:"RunFinishedInterruptOutcome",cancelled:"RunFinishedCancelledOutcome"}},TokenUsage:{optional:["provider","model","inputTokens","outputTokens","totalTokens","reasoningTokens","cachedInputTokens","cacheWriteInputTokens"],fields:{}},RunFinishedEvent:{optional:["timestamp","rawEvent","metadata","result","outcome","usage"],fields:{outcome:"RunFinishedOutcome",usage:{array:"TokenUsage"}}},RunErrorEvent:{optional:["timestamp","rawEvent","metadata","code","usage"],fields:{usage:{array:"TokenUsage"}}},StepStartedEvent:{optional:["timestamp","rawEvent","metadata","subagentRunId"],fields:{}},StepFinishedEvent:{optional:["timestamp","rawEvent","metadata","subagentRunId"],fields:{}},ReasoningStartEvent:{optional:["timestamp","rawEvent","metadata","subagentRunId"],fields:{}},ReasoningMessageStartEvent:{optional:["timestamp","rawEvent","metadata","subagentRunId"],fields:{}},ReasoningMessageContentEvent:{optional:["timestamp","rawEvent","metadata","subagentRunId"],fields:{}},ReasoningMessageEndEvent:{optional:["timestamp","rawEvent","metadata","subagentRunId"],fields:{}},ReasoningMessageChunkEvent:{optional:["timestamp","rawEvent","metadata","subagentRunId","messageId","delta"],fields:{}},ReasoningEndEvent:{optional:["timestamp","rawEvent","metadata","subagentRunId"],fields:{}},ReasoningEncryptedValueEvent:{optional:["timestamp","rawEvent","metadata","subagentRunId"],fields:{}},SubagentStartedEvent:{optional:["timestamp","rawEvent","metadata","description","parentSubagentRunId","parentToolCallId","parentMessageId"],fields:{}},SubagentFinishedSuccessOutcome:{optional:[],fields:{}},SubagentFinishedSuspendedOutcome:{optional:["interruptIds"],fields:{}},SubagentFinishedOutcome:{discriminator:"type",variants:{success:"SubagentFinishedSuccessOutcome",suspended:"SubagentFinishedSuspendedOutcome"}},SubagentFinishedEvent:{optional:["timestamp","rawEvent","metadata","result","outcome"],fields:{outcome:"SubagentFinishedOutcome"}},SubagentErrorEvent:{optional:["timestamp","rawEvent","metadata","code"],fields:{}},Event:{discriminator:"type",variants:{TEXT_MESSAGE_START:"TextMessageStartEvent",TEXT_MESSAGE_CONTENT:"TextMessageContentEvent",TEXT_MESSAGE_END:"TextMessageEndEvent",TEXT_MESSAGE_CHUNK:"TextMessageChunkEvent",TOOL_CALL_START:"ToolCallStartEvent",TOOL_CALL_ARGS:"ToolCallArgsEvent",TOOL_CALL_END:"ToolCallEndEvent",TOOL_CALL_CHUNK:"ToolCallChunkEvent",TOOL_CALL_RESULT:"ToolCallResultEvent",STATE_SNAPSHOT:"StateSnapshotEvent",STATE_DELTA:"StateDeltaEvent",MESSAGES_SNAPSHOT:"MessagesSnapshotEvent",ACTIVITY_SNAPSHOT:"ActivitySnapshotEvent",ACTIVITY_DELTA:"ActivityDeltaEvent",RAW:"RawEvent",CUSTOM:"CustomEvent",RUN_STARTED:"RunStartedEvent",RUN_FINISHED:"RunFinishedEvent",RUN_ERROR:"RunErrorEvent",STEP_STARTED:"StepStartedEvent",STEP_FINISHED:"StepFinishedEvent",REASONING_START:"ReasoningStartEvent",REASONING_MESSAGE_START:"ReasoningMessageStartEvent",REASONING_MESSAGE_CONTENT:"ReasoningMessageContentEvent",REASONING_MESSAGE_END:"ReasoningMessageEndEvent",REASONING_MESSAGE_CHUNK:"ReasoningMessageChunkEvent",REASONING_END:"ReasoningEndEvent",REASONING_ENCRYPTED_VALUE:"ReasoningEncryptedValueEvent",SUBAGENT_STARTED:"SubagentStartedEvent",SUBAGENT_FINISHED:"SubagentFinishedEvent",SUBAGENT_ERROR:"SubagentErrorEvent"}},SubagentInfo:{optional:["description"],fields:{}},IdentityCapabilities:{optional:["name","type","description","version","provider","documentationUrl","metadata"],fields:{}},TransportCapabilities:{optional:["streaming","websocket","httpBinary","pushNotifications","resumable"],fields:{}},ToolsCapabilities:{optional:["supported","items","parallelCalls","clientProvided"],fields:{items:{array:"Tool"}}},OutputCapabilities:{optional:["structuredOutput","supportedMimeTypes"],fields:{}},StateCapabilities:{optional:["snapshots","deltas","memory","persistentState"],fields:{}},MultiAgentCapabilities:{optional:["supported","delegation","handoffs","subagents"],fields:{subagents:{array:"SubagentInfo"}}},ReasoningCapabilities:{optional:["supported","streaming","encrypted"],fields:{}},MultimodalInputCapabilities:{optional:["image","audio","video","pdf","file"],fields:{}},MultimodalOutputCapabilities:{optional:["image","audio"],fields:{}},MultimodalCapabilities:{optional:["input","output"],fields:{input:"MultimodalInputCapabilities",output:"MultimodalOutputCapabilities"}},ExecutionCapabilities:{optional:["codeExecution","sandboxed","maxIterations","maxExecutionTime"],fields:{}},HumanInTheLoopCapabilities:{optional:["supported","approvals","interventions","feedback","interrupts","approveWithEdits"],fields:{}},AgentCapabilities:{optional:["identity","transport","tools","output","state","multiAgent","reasoning","multimodal","execution","humanInTheLoop","custom"],fields:{identity:"IdentityCapabilities",transport:"TransportCapabilities",tools:"ToolsCapabilities",output:"OutputCapabilities",state:"StateCapabilities",multiAgent:"MultiAgentCapabilities",reasoning:"ReasoningCapabilities",multimodal:"MultimodalCapabilities",execution:"ExecutionCapabilities",humanInTheLoop:"HumanInTheLoopCapabilities"}}};function mr(t,e){if(typeof e=="string")return mr(t,Uw[e]);if("array"in e){if(!Array.isArray(t))return t;let o=t.map(i=>mr(i,e.array));return o.every((i,a)=>i===t[a])?t:o}if(typeof t!="object"||t===null||Array.isArray(t))return t;let n=t;if("discriminator"in e){let o=n[e.discriminator];return typeof o=="string"&&Object.prototype.hasOwnProperty.call(e.variants,o)?mr(t,e.variants[o]):t}let r=n;for(let o of e.optional)Object.prototype.hasOwnProperty.call(n,o)&&n[o]===null&&(r===n&&(r={...n}),delete r[o]);for(let[o,i]of Object.entries(e.fields)){if(!Object.prototype.hasOwnProperty.call(r,o))continue;let a=mr(r[o],i);a!==r[o]&&(r===n&&(r={...n}),r[o]=a)}return r}function Pl(t,e){return mr(t,e)}var V=class extends Error{constructor(t){super(t)}},Ml=class extends V{constructor(){super("Connect not implemented. This method is not supported by the current agent.")}};function Sp(t,e){return e===void 0?t:t===void 0?{...e}:{...t,...e}}function Nn(t){return t===void 0?"":typeof t=="string"?t:t.filter(e=>e.type==="text").map(e=>e.text).join("")}function _p(t){return Array.isArray(t)&&t.some(e=>e.type!=="text")}var zl={};tl(zl,{JsonPatchError:()=>xe,_areEquals:()=>br,applyOperation:()=>jt,applyPatch:()=>jo,applyReducer:()=>Bw,deepClone:()=>Gw,getValueByPointer:()=>Bo,validate:()=>Ap,validator:()=>Vo});var Hw=(function(){var t=function(e,n){return t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(r,o){r.__proto__=o}||function(r,o){for(var i in o)o.hasOwnProperty(i)&&(r[i]=o[i])},t(e,n)};return function(e,n){t(e,n);function r(){this.constructor=e}e.prototype=n===null?Object.create(n):(r.prototype=n.prototype,new r)}})(),Fw=Object.prototype.hasOwnProperty;function Fo(t,e){return Fw.call(t,e)}function Go(t){if(Array.isArray(t)){for(var e=new Array(t.length),n=0;n<e.length;n++)e[n]=""+n;return e}if(Object.keys)return Object.keys(t);var r=[];for(var o in t)Fo(t,o)&&r.push(o);return r}function Pe(t){switch(typeof t){case"object":return JSON.parse(JSON.stringify(t));case"undefined":return null;default:return t}}function Zo(t){for(var e=0,n=t.length,r;e<n;){if(r=t.charCodeAt(e),r>=48&&r<=57){e++;continue}return!1}return!0}function mt(t){return t.indexOf("/")===-1&&t.indexOf("~")===-1?t:t.replace(/~/g,"~0").replace(/\//g,"~1")}function gr(t){return t.replace(/~1/g,"/").replace(/~0/g,"~")}function Ho(t){if(t===void 0)return!0;if(t){if(Array.isArray(t)){for(var e=0,n=t.length;e<n;e++)if(Ho(t[e]))return!0}else if(typeof t=="object"){for(var r=Go(t),o=r.length,i=0;i<o;i++)if(Ho(t[r[i]]))return!0}}return!1}function Tp(t,e){var n=[t];for(var r in e){var o=typeof e[r]=="object"?JSON.stringify(e[r],null,2):e[r];typeof o<"u"&&n.push(r+": "+o)}return n.join(`
`)}var vr=(function(t){Hw(e,t);function e(n,r,o,i,a){var s=this.constructor,c=t.call(this,Tp(n,{name:r,index:o,operation:i,tree:a}))||this;return c.name=r,c.index=o,c.operation=i,c.tree=a,Object.setPrototypeOf(c,s.prototype),c.message=Tp(n,{name:r,index:o,operation:i,tree:a}),c}return e})(Error);var xe=vr,Gw=Pe,On={add:function(t,e,n){return t[e]=this.value,{newDocument:n}},remove:function(t,e,n){var r=t[e];return delete t[e],{newDocument:n,removed:r}},replace:function(t,e,n){var r=t[e];return t[e]=this.value,{newDocument:n,removed:r}},move:function(t,e,n){var r=Bo(n,this.path);r&&(r=Pe(r));var o=jt(n,{op:"remove",path:this.from}).removed;return jt(n,{op:"add",path:this.path,value:o}),{newDocument:n,removed:r}},copy:function(t,e,n){var r=Bo(n,this.from);return jt(n,{op:"add",path:this.path,value:Pe(r)}),{newDocument:n}},test:function(t,e,n){return{newDocument:n,test:br(t[e],this.value)}},_get:function(t,e,n){return this.value=t[e],{newDocument:n}}},Zw={add:function(t,e,n){return Zo(e)?t.splice(e,0,this.value):t[e]=this.value,{newDocument:n,index:e}},remove:function(t,e,n){var r=t.splice(e,1);return{newDocument:n,removed:r[0]}},replace:function(t,e,n){var r=t[e];return t[e]=this.value,{newDocument:n,removed:r}},move:On.move,copy:On.copy,test:On.test,_get:On._get};function Bo(t,e){if(e=="")return t;var n={op:"_get",path:e};return jt(t,n),n.value}function jt(t,e,n,r,o,i){if(n===void 0&&(n=!1),r===void 0&&(r=!0),o===void 0&&(o=!0),i===void 0&&(i=0),n&&(typeof n=="function"?n(e,0,t,e.path):Vo(e,0)),e.path===""){var a={newDocument:t};if(e.op==="add")return a.newDocument=e.value,a;if(e.op==="replace")return a.newDocument=e.value,a.removed=t,a;if(e.op==="move"||e.op==="copy")return a.newDocument=Bo(t,e.from),e.op==="move"&&(a.removed=t),a;if(e.op==="test"){if(a.test=br(t,e.value),a.test===!1)throw new xe("Test operation failed","TEST_OPERATION_FAILED",i,e,t);return a.newDocument=t,a}else{if(e.op==="remove")return a.removed=t,a.newDocument=null,a;if(e.op==="_get")return e.value=t,a;if(n)throw new xe("Operation `op` property is not one of operations defined in RFC-6902","OPERATION_OP_INVALID",i,e,t);return a}}else{r||(t=Pe(t));var s=e.path||"",c=s.split("/"),l=t,u=1,f=c.length,m=void 0,h=void 0,p=void 0;for(typeof n=="function"?p=n:p=Vo;;){if(h=c[u],h&&h.indexOf("~")!=-1&&(h=gr(h)),o&&(h=="__proto__"||h=="prototype"&&u>0&&c[u-1]=="constructor"))throw new TypeError("JSON-Patch: modifying `__proto__` or `constructor/prototype` prop is banned for security reasons, if this was on purpose, please set `banPrototypeModifications` flag false and pass it to this function. More info in fast-json-patch README");if(n&&m===void 0&&(l[h]===void 0?m=c.slice(0,u).join("/"):u==f-1&&(m=e.path),m!==void 0&&p(e,0,t,m)),u++,Array.isArray(l)){if(h==="-")h=l.length;else{if(n&&!Zo(h))throw new xe("Expected an unsigned base-10 integer value, making the new referenced value the array element with the zero-based index","OPERATION_PATH_ILLEGAL_ARRAY_INDEX",i,e,t);Zo(h)&&(h=~~h)}if(u>=f){if(n&&e.op==="add"&&h>l.length)throw new xe("The specified index MUST NOT be greater than the number of elements in the array","OPERATION_VALUE_OUT_OF_BOUNDS",i,e,t);var a=Zw[e.op].call(e,l,h,t);if(a.test===!1)throw new xe("Test operation failed","TEST_OPERATION_FAILED",i,e,t);return a}}else if(u>=f){var a=On[e.op].call(e,l,h,t);if(a.test===!1)throw new xe("Test operation failed","TEST_OPERATION_FAILED",i,e,t);return a}if(l=l[h],n&&u<f&&(!l||typeof l!="object"))throw new xe("Cannot perform operation at the desired path","OPERATION_PATH_UNRESOLVABLE",i,e,t)}}}function jo(t,e,n,r,o){if(r===void 0&&(r=!0),o===void 0&&(o=!0),n&&!Array.isArray(e))throw new xe("Patch sequence must be an array","SEQUENCE_NOT_AN_ARRAY");r||(t=Pe(t));for(var i=new Array(e.length),a=0,s=e.length;a<s;a++)i[a]=jt(t,e[a],n,!0,o,a),t=i[a].newDocument;return i.newDocument=t,i}function Bw(t,e,n){var r=jt(t,e);if(r.test===!1)throw new xe("Test operation failed","TEST_OPERATION_FAILED",n,e,t);return r.newDocument}function Vo(t,e,n,r){if(typeof t!="object"||t===null||Array.isArray(t))throw new xe("Operation is not an object","OPERATION_NOT_AN_OBJECT",e,t,n);if(On[t.op]){if(typeof t.path!="string")throw new xe("Operation `path` property is not a string","OPERATION_PATH_INVALID",e,t,n);if(t.path.indexOf("/")!==0&&t.path.length>0)throw new xe('Operation `path` property must start with "/"',"OPERATION_PATH_INVALID",e,t,n);if((t.op==="move"||t.op==="copy")&&typeof t.from!="string")throw new xe("Operation `from` property is not present (applicable in `move` and `copy` operations)","OPERATION_FROM_REQUIRED",e,t,n);if((t.op==="add"||t.op==="replace"||t.op==="test")&&t.value===void 0)throw new xe("Operation `value` property is not present (applicable in `add`, `replace` and `test` operations)","OPERATION_VALUE_REQUIRED",e,t,n);if((t.op==="add"||t.op==="replace"||t.op==="test")&&Ho(t.value))throw new xe("Operation `value` property is not present (applicable in `add`, `replace` and `test` operations)","OPERATION_VALUE_CANNOT_CONTAIN_UNDEFINED",e,t,n);if(n){if(t.op=="add"){var o=t.path.split("/").length,i=r.split("/").length;if(o!==i+1&&o!==i)throw new xe("Cannot perform an `add` operation at the desired path","OPERATION_PATH_CANNOT_ADD",e,t,n)}else if(t.op==="replace"||t.op==="remove"||t.op==="_get"){if(t.path!==r)throw new xe("Cannot perform the operation at a path that does not exist","OPERATION_PATH_UNRESOLVABLE",e,t,n)}else if(t.op==="move"||t.op==="copy"){var a={op:"_get",path:t.from,value:void 0},s=Ap([a],n);if(s&&s.name==="OPERATION_PATH_UNRESOLVABLE")throw new xe("Cannot perform the operation from a path that does not exist","OPERATION_FROM_UNRESOLVABLE",e,t,n)}}}else throw new xe("Operation `op` property is not one of operations defined in RFC-6902","OPERATION_OP_INVALID",e,t,n)}function Ap(t,e,n){try{if(!Array.isArray(t))throw new xe("Patch sequence must be an array","SEQUENCE_NOT_AN_ARRAY");if(e)jo(Pe(e),Pe(t),n||!0);else{n=n||Vo;for(var r=0;r<t.length;r++)n(t[r],r,e,void 0)}}catch(o){if(o instanceof xe)return o;throw o}}function br(t,e){if(t===e)return!0;if(t&&e&&typeof t=="object"&&typeof e=="object"){var n=Array.isArray(t),r=Array.isArray(e),o,i,a;if(n&&r){if(i=t.length,i!=e.length)return!1;for(o=i;o--!==0;)if(!br(t[o],e[o]))return!1;return!0}if(n!=r)return!1;var s=Object.keys(t);if(i=s.length,i!==Object.keys(e).length)return!1;for(o=i;o--!==0;)if(!e.hasOwnProperty(s[o]))return!1;for(o=i;o--!==0;)if(a=s[o],!br(t[a],e[a]))return!1;return!0}return t!==t&&e!==e}var Ul={};tl(Ul,{compare:()=>Jw,generate:()=>Ll,observe:()=>Kw,unobserve:()=>Xw});var Dl=new WeakMap,Vw=(function(){function t(e){this.observers=new Map,this.obj=e}return t})(),jw=(function(){function t(e,n){this.callback=e,this.observer=n}return t})();function Ww(t){return Dl.get(t)}function qw(t,e){return t.observers.get(e)}function Yw(t,e){t.observers.delete(e.callback)}function Xw(t,e){e.unobserve()}function Kw(t,e){var n=[],r,o=Ww(t);if(!o)o=new Vw(t),Dl.set(t,o);else{var i=qw(o,e);r=i&&i.observer}if(r)return r;if(r={},o.value=Pe(t),e){r.callback=e,r.next=null;var a=function(){Ll(r)},s=function(){clearTimeout(r.next),r.next=setTimeout(a)};typeof window<"u"&&(window.addEventListener("mouseup",s),window.addEventListener("keyup",s),window.addEventListener("mousedown",s),window.addEventListener("keydown",s),window.addEventListener("change",s))}return r.patches=n,r.object=t,r.unobserve=function(){Ll(r),clearTimeout(r.next),Yw(o,r),typeof window<"u"&&(window.removeEventListener("mouseup",s),window.removeEventListener("keyup",s),window.removeEventListener("mousedown",s),window.removeEventListener("keydown",s),window.removeEventListener("change",s))},o.observers.set(e,new jw(e,r)),r}function Ll(t,e){e===void 0&&(e=!1);var n=Dl.get(t.object);$l(n.value,t.object,t.patches,"",e),t.patches.length&&jo(n.value,t.patches);var r=t.patches;return r.length>0&&(t.patches=[],t.callback&&t.callback(r)),r}function $l(t,e,n,r,o){if(e!==t){typeof e.toJSON=="function"&&(e=e.toJSON());for(var i=Go(e),a=Go(t),s=!1,c=!1,l=a.length-1;l>=0;l--){var u=a[l],f=t[u];if(Fo(e,u)&&!(e[u]===void 0&&f!==void 0&&Array.isArray(e)===!1)){var m=e[u];typeof f=="object"&&f!=null&&typeof m=="object"&&m!=null&&Array.isArray(f)===Array.isArray(m)?$l(f,m,n,r+"/"+mt(u),o):f!==m&&(s=!0,o&&n.push({op:"test",path:r+"/"+mt(u),value:Pe(f)}),n.push({op:"replace",path:r+"/"+mt(u),value:Pe(m)}))}else Array.isArray(t)===Array.isArray(e)?(o&&n.push({op:"test",path:r+"/"+mt(u),value:Pe(f)}),n.push({op:"remove",path:r+"/"+mt(u)}),c=!0):(o&&n.push({op:"test",path:r,value:t}),n.push({op:"replace",path:r,value:e}),s=!0)}if(!(!c&&i.length==a.length))for(var l=0;l<i.length;l++){var u=i[l];!Fo(t,u)&&e[u]!==void 0&&n.push({op:"add",path:r+"/"+mt(u),value:Pe(e[u])})}}}function Jw(t,e,n){n===void 0&&(n=!1);var r=[];return $l(t,e,r,"",n),r}var Wo=Object.assign({},zl,Ul,{JsonPatchError:vr,deepClone:Pe,escapePathComponent:mt,unescapePathComponent:gr});var Hl=function(t,e){return Hl=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(n,r){n.__proto__=r}||function(n,r){for(var o in r)Object.prototype.hasOwnProperty.call(r,o)&&(n[o]=r[o])},Hl(t,e)};function gt(t,e){if(typeof e!="function"&&e!==null)throw new TypeError("Class extends value "+String(e)+" is not a constructor or null");Hl(t,e);function n(){this.constructor=t}t.prototype=e===null?Object.create(e):(n.prototype=e.prototype,new n)}function kp(t,e,n,r){function o(i){return i instanceof n?i:new n(function(a){a(i)})}return new(n||(n=Promise))(function(i,a){function s(u){try{l(r.next(u))}catch(f){a(f)}}function c(u){try{l(r.throw(u))}catch(f){a(f)}}function l(u){u.done?i(u.value):o(u.value).then(s,c)}l((r=r.apply(t,e||[])).next())})}function qo(t,e){var n={label:0,sent:function(){if(i[0]&1)throw i[1];return i[1]},trys:[],ops:[]},r,o,i,a=Object.create((typeof Iterator=="function"?Iterator:Object).prototype);return a.next=s(0),a.throw=s(1),a.return=s(2),typeof Symbol=="function"&&(a[Symbol.iterator]=function(){return this}),a;function s(l){return function(u){return c([l,u])}}function c(l){if(r)throw new TypeError("Generator is already executing.");for(;a&&(a=0,l[0]&&(n=0)),n;)try{if(r=1,o&&(i=l[0]&2?o.return:l[0]?o.throw||((i=o.return)&&i.call(o),0):o.next)&&!(i=i.call(o,l[1])).done)return i;switch(o=0,i&&(l=[l[0]&2,i.value]),l[0]){case 0:case 1:i=l;break;case 4:return n.label++,{value:l[1],done:!1};case 5:n.label++,o=l[1],l=[0];continue;case 7:l=n.ops.pop(),n.trys.pop();continue;default:if(i=n.trys,!(i=i.length>0&&i[i.length-1])&&(l[0]===6||l[0]===2)){n=0;continue}if(l[0]===3&&(!i||l[1]>i[0]&&l[1]<i[3])){n.label=l[1];break}if(l[0]===6&&n.label<i[1]){n.label=i[1],i=l;break}if(i&&n.label<i[2]){n.label=i[2],n.ops.push(l);break}i[2]&&n.ops.pop(),n.trys.pop();continue}l=e.call(t,n)}catch(u){l=[6,u],o=0}finally{r=i=0}if(l[0]&5)throw l[1];return{value:l[0]?l[1]:void 0,done:!0}}}function xt(t){var e=typeof Symbol=="function"&&Symbol.iterator,n=e&&t[e],r=0;if(n)return n.call(t);if(t&&typeof t.length=="number")return{next:function(){return t&&r>=t.length&&(t=void 0),{value:t&&t[r++],done:!t}}};throw new TypeError(e?"Object is not iterable.":"Symbol.iterator is not defined.")}function Pn(t,e){var n=typeof Symbol=="function"&&t[Symbol.iterator];if(!n)return t;var r=n.call(t),o,i=[],a;try{for(;(e===void 0||e-- >0)&&!(o=r.next()).done;)i.push(o.value)}catch(s){a={error:s}}finally{try{o&&!o.done&&(n=r.return)&&n.call(r)}finally{if(a)throw a.error}}return i}function Mn(t,e,n){if(n||arguments.length===2)for(var r=0,o=e.length,i;r<o;r++)(i||!(r in e))&&(i||(i=Array.prototype.slice.call(e,0,r)),i[r]=e[r]);return t.concat(i||Array.prototype.slice.call(e))}function Wt(t){return this instanceof Wt?(this.v=t,this):new Wt(t)}function Ip(t,e,n){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var r=n.apply(t,e||[]),o,i=[];return o=Object.create((typeof AsyncIterator=="function"?AsyncIterator:Object).prototype),s("next"),s("throw"),s("return",a),o[Symbol.asyncIterator]=function(){return this},o;function a(h){return function(p){return Promise.resolve(p).then(h,f)}}function s(h,p){r[h]&&(o[h]=function(E){return new Promise(function(g,S){i.push([h,E,g,S])>1||c(h,E)})},p&&(o[h]=p(o[h])))}function c(h,p){try{l(r[h](p))}catch(E){m(i[0][3],E)}}function l(h){h.value instanceof Wt?Promise.resolve(h.value.v).then(u,f):m(i[0][2],h)}function u(h){c("next",h)}function f(h){c("throw",h)}function m(h,p){h(p),i.shift(),i.length&&c(i[0][0],i[0][1])}}function Rp(t){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var e=t[Symbol.asyncIterator],n;return e?e.call(t):(t=typeof xt=="function"?xt(t):t[Symbol.iterator](),n={},r("next"),r("throw"),r("return"),n[Symbol.asyncIterator]=function(){return this},n);function r(i){n[i]=t[i]&&function(a){return new Promise(function(s,c){a=t[i](a),o(s,c,a.done,a.value)})}}function o(i,a,s,c){Promise.resolve(c).then(function(l){i({value:l,done:s})},a)}}function q(t){return typeof t=="function"}function zn(t){var e=function(r){Error.call(r),r.stack=new Error().stack},n=t(e);return n.prototype=Object.create(Error.prototype),n.prototype.constructor=n,n}var Yo=zn(function(t){return function(n){t(this),this.message=n?n.length+` errors occurred during unsubscription:
`+n.map(function(r,o){return o+1+") "+r.toString()}).join(`
  `):"",this.name="UnsubscriptionError",this.errors=n}});function yr(t,e){if(t){var n=t.indexOf(e);0<=n&&t.splice(n,1)}}var Ln=(function(){function t(e){this.initialTeardown=e,this.closed=!1,this._parentage=null,this._finalizers=null}return t.prototype.unsubscribe=function(){var e,n,r,o,i;if(!this.closed){this.closed=!0;var a=this._parentage;if(a)if(this._parentage=null,Array.isArray(a))try{for(var s=xt(a),c=s.next();!c.done;c=s.next()){var l=c.value;l.remove(this)}}catch(E){e={error:E}}finally{try{c&&!c.done&&(n=s.return)&&n.call(s)}finally{if(e)throw e.error}}else a.remove(this);var u=this.initialTeardown;if(q(u))try{u()}catch(E){i=E instanceof Yo?E.errors:[E]}var f=this._finalizers;if(f){this._finalizers=null;try{for(var m=xt(f),h=m.next();!h.done;h=m.next()){var p=h.value;try{Cp(p)}catch(E){i=i??[],E instanceof Yo?i=Mn(Mn([],Pn(i)),Pn(E.errors)):i.push(E)}}}catch(E){r={error:E}}finally{try{h&&!h.done&&(o=m.return)&&o.call(m)}finally{if(r)throw r.error}}}if(i)throw new Yo(i)}},t.prototype.add=function(e){var n;if(e&&e!==this)if(this.closed)Cp(e);else{if(e instanceof t){if(e.closed||e._hasParent(this))return;e._addParent(this)}(this._finalizers=(n=this._finalizers)!==null&&n!==void 0?n:[]).push(e)}},t.prototype._hasParent=function(e){var n=this._parentage;return n===e||Array.isArray(n)&&n.includes(e)},t.prototype._addParent=function(e){var n=this._parentage;this._parentage=Array.isArray(n)?(n.push(e),n):n?[n,e]:e},t.prototype._removeParent=function(e){var n=this._parentage;n===e?this._parentage=null:Array.isArray(n)&&yr(n,e)},t.prototype.remove=function(e){var n=this._finalizers;n&&yr(n,e),e instanceof t&&e._removeParent(this)},t.EMPTY=(function(){var e=new t;return e.closed=!0,e})(),t})();var Fl=Ln.EMPTY;function Xo(t){return t instanceof Ln||t&&"closed"in t&&q(t.remove)&&q(t.add)&&q(t.unsubscribe)}function Cp(t){q(t)?t():t.unsubscribe()}var it={onUnhandledError:null,onStoppedNotification:null,Promise:void 0,useDeprecatedSynchronousErrorHandling:!1,useDeprecatedNextContext:!1};var Dn={setTimeout:function(t,e){for(var n=[],r=2;r<arguments.length;r++)n[r-2]=arguments[r];var o=Dn.delegate;return o?.setTimeout?o.setTimeout.apply(o,Mn([t,e],Pn(n))):setTimeout.apply(void 0,Mn([t,e],Pn(n)))},clearTimeout:function(t){var e=Dn.delegate;return(e?.clearTimeout||clearTimeout)(t)},delegate:void 0};function Ko(t){Dn.setTimeout(function(){var e=it.onUnhandledError;if(e)e(t);else throw t})}function wr(){}var Np=(function(){return Gl("C",void 0,void 0)})();function Op(t){return Gl("E",void 0,t)}function Pp(t){return Gl("N",t,void 0)}function Gl(t,e,n){return{kind:t,value:e,error:n}}var qt=null;function $n(t){if(it.useDeprecatedSynchronousErrorHandling){var e=!qt;if(e&&(qt={errorThrown:!1,error:null}),t(),e){var n=qt,r=n.errorThrown,o=n.error;if(qt=null,r)throw o}}else t()}function Mp(t){it.useDeprecatedSynchronousErrorHandling&&qt&&(qt.errorThrown=!0,qt.error=t)}var Er=(function(t){gt(e,t);function e(n){var r=t.call(this)||this;return r.isStopped=!1,n?(r.destination=n,Xo(n)&&n.add(r)):r.destination=nE,r}return e.create=function(n,r,o){return new Qo(n,r,o)},e.prototype.next=function(n){this.isStopped?Bl(Pp(n),this):this._next(n)},e.prototype.error=function(n){this.isStopped?Bl(Op(n),this):(this.isStopped=!0,this._error(n))},e.prototype.complete=function(){this.isStopped?Bl(Np,this):(this.isStopped=!0,this._complete())},e.prototype.unsubscribe=function(){this.closed||(this.isStopped=!0,t.prototype.unsubscribe.call(this),this.destination=null)},e.prototype._next=function(n){this.destination.next(n)},e.prototype._error=function(n){try{this.destination.error(n)}finally{this.unsubscribe()}},e.prototype._complete=function(){try{this.destination.complete()}finally{this.unsubscribe()}},e})(Ln);var Qw=Function.prototype.bind;function Zl(t,e){return Qw.call(t,e)}var eE=(function(){function t(e){this.partialObserver=e}return t.prototype.next=function(e){var n=this.partialObserver;if(n.next)try{n.next(e)}catch(r){Jo(r)}},t.prototype.error=function(e){var n=this.partialObserver;if(n.error)try{n.error(e)}catch(r){Jo(r)}else Jo(e)},t.prototype.complete=function(){var e=this.partialObserver;if(e.complete)try{e.complete()}catch(n){Jo(n)}},t})(),Qo=(function(t){gt(e,t);function e(n,r,o){var i=t.call(this)||this,a;if(q(n)||!n)a={next:n??void 0,error:r??void 0,complete:o??void 0};else{var s;i&&it.useDeprecatedNextContext?(s=Object.create(n),s.unsubscribe=function(){return i.unsubscribe()},a={next:n.next&&Zl(n.next,s),error:n.error&&Zl(n.error,s),complete:n.complete&&Zl(n.complete,s)}):a=n}return i.destination=new eE(a),i}return e})(Er);function Jo(t){it.useDeprecatedSynchronousErrorHandling?Mp(t):Ko(t)}function tE(t){throw t}function Bl(t,e){var n=it.onStoppedNotification;n&&Dn.setTimeout(function(){return n(t,e)})}var nE={closed:!0,next:wr,error:tE,complete:wr};var Un=(function(){return typeof Symbol=="function"&&Symbol.observable||"@@observable"})();function Hn(t){return t}function ei(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];return Vl(t)}function Vl(t){return t.length===0?Hn:t.length===1?t[0]:function(n){return t.reduce(function(r,o){return o(r)},n)}}var he=(function(){function t(e){e&&(this._subscribe=e)}return t.prototype.lift=function(e){var n=new t;return n.source=this,n.operator=e,n},t.prototype.subscribe=function(e,n,r){var o=this,i=oE(e)?e:new Qo(e,n,r);return $n(function(){var a=o,s=a.operator,c=a.source;i.add(s?s.call(i,c):c?o._subscribe(i):o._trySubscribe(i))}),i},t.prototype._trySubscribe=function(e){try{return this._subscribe(e)}catch(n){e.error(n)}},t.prototype.forEach=function(e,n){var r=this;return n=zp(n),new n(function(o,i){var a=new Qo({next:function(s){try{e(s)}catch(c){i(c),a.unsubscribe()}},error:i,complete:o});r.subscribe(a)})},t.prototype._subscribe=function(e){var n;return(n=this.source)===null||n===void 0?void 0:n.subscribe(e)},t.prototype[Un]=function(){return this},t.prototype.pipe=function(){for(var e=[],n=0;n<arguments.length;n++)e[n]=arguments[n];return Vl(e)(this)},t.prototype.toPromise=function(e){var n=this;return e=zp(e),new e(function(r,o){var i;n.subscribe(function(a){return i=a},function(a){return o(a)},function(){return r(i)})})},t.create=function(e){return new t(e)},t})();function zp(t){var e;return(e=t??it.Promise)!==null&&e!==void 0?e:Promise}function rE(t){return t&&q(t.next)&&q(t.error)&&q(t.complete)}function oE(t){return t&&t instanceof Er||rE(t)&&Xo(t)}function iE(t){return q(t?.lift)}function Se(t){return function(e){if(iE(e))return e.lift(function(n){try{return t(n,this)}catch(r){this.error(r)}});throw new TypeError("Unable to lift unknown Observable type")}}function Te(t,e,n,r,o){return new aE(t,e,n,r,o)}var aE=(function(t){gt(e,t);function e(n,r,o,i,a,s){var c=t.call(this,n)||this;return c.onFinalize=a,c.shouldUnsubscribe=s,c._next=r?function(l){try{r(l)}catch(u){n.error(u)}}:t.prototype._next,c._error=i?function(l){try{i(l)}catch(u){n.error(u)}finally{this.unsubscribe()}}:t.prototype._error,c._complete=o?function(){try{o()}catch(l){n.error(l)}finally{this.unsubscribe()}}:t.prototype._complete,c}return e.prototype.unsubscribe=function(){var n;if(!this.shouldUnsubscribe||this.shouldUnsubscribe()){var r=this.closed;t.prototype.unsubscribe.call(this),!r&&((n=this.onFinalize)===null||n===void 0||n.call(this))}},e})(Er);var Lp=zn(function(t){return function(){t(this),this.name="ObjectUnsubscribedError",this.message="object unsubscribed"}});var vt=(function(t){gt(e,t);function e(){var n=t.call(this)||this;return n.closed=!1,n.currentObservers=null,n.observers=[],n.isStopped=!1,n.hasError=!1,n.thrownError=null,n}return e.prototype.lift=function(n){var r=new Dp(this,this);return r.operator=n,r},e.prototype._throwIfClosed=function(){if(this.closed)throw new Lp},e.prototype.next=function(n){var r=this;$n(function(){var o,i;if(r._throwIfClosed(),!r.isStopped){r.currentObservers||(r.currentObservers=Array.from(r.observers));try{for(var a=xt(r.currentObservers),s=a.next();!s.done;s=a.next()){var c=s.value;c.next(n)}}catch(l){o={error:l}}finally{try{s&&!s.done&&(i=a.return)&&i.call(a)}finally{if(o)throw o.error}}}})},e.prototype.error=function(n){var r=this;$n(function(){if(r._throwIfClosed(),!r.isStopped){r.hasError=r.isStopped=!0,r.thrownError=n;for(var o=r.observers;o.length;)o.shift().error(n)}})},e.prototype.complete=function(){var n=this;$n(function(){if(n._throwIfClosed(),!n.isStopped){n.isStopped=!0;for(var r=n.observers;r.length;)r.shift().complete()}})},e.prototype.unsubscribe=function(){this.isStopped=this.closed=!0,this.observers=this.currentObservers=null},Object.defineProperty(e.prototype,"observed",{get:function(){var n;return((n=this.observers)===null||n===void 0?void 0:n.length)>0},enumerable:!1,configurable:!0}),e.prototype._trySubscribe=function(n){return this._throwIfClosed(),t.prototype._trySubscribe.call(this,n)},e.prototype._subscribe=function(n){return this._throwIfClosed(),this._checkFinalizedStatuses(n),this._innerSubscribe(n)},e.prototype._innerSubscribe=function(n){var r=this,o=this,i=o.hasError,a=o.isStopped,s=o.observers;return i||a?Fl:(this.currentObservers=null,s.push(n),new Ln(function(){r.currentObservers=null,yr(s,n)}))},e.prototype._checkFinalizedStatuses=function(n){var r=this,o=r.hasError,i=r.thrownError,a=r.isStopped;o?n.error(i):a&&n.complete()},e.prototype.asObservable=function(){var n=new he;return n.source=this,n},e.create=function(n,r){return new Dp(n,r)},e})(he);var Dp=(function(t){gt(e,t);function e(n,r){var o=t.call(this)||this;return o.destination=n,o.source=r,o}return e.prototype.next=function(n){var r,o;(o=(r=this.destination)===null||r===void 0?void 0:r.next)===null||o===void 0||o.call(r,n)},e.prototype.error=function(n){var r,o;(o=(r=this.destination)===null||r===void 0?void 0:r.error)===null||o===void 0||o.call(r,n)},e.prototype.complete=function(){var n,r;(r=(n=this.destination)===null||n===void 0?void 0:n.complete)===null||r===void 0||r.call(n)},e.prototype._subscribe=function(n){var r,o;return(o=(r=this.source)===null||r===void 0?void 0:r.subscribe(n))!==null&&o!==void 0?o:Fl},e})(vt);var jl={now:function(){return(jl.delegate||Date).now()},delegate:void 0};var ti=(function(t){gt(e,t);function e(n,r,o){n===void 0&&(n=1/0),r===void 0&&(r=1/0),o===void 0&&(o=jl);var i=t.call(this)||this;return i._bufferSize=n,i._windowTime=r,i._timestampProvider=o,i._buffer=[],i._infiniteTimeWindow=!0,i._infiniteTimeWindow=r===1/0,i._bufferSize=Math.max(1,n),i._windowTime=Math.max(1,r),i}return e.prototype.next=function(n){var r=this,o=r.isStopped,i=r._buffer,a=r._infiniteTimeWindow,s=r._timestampProvider,c=r._windowTime;o||(i.push(n),!a&&i.push(s.now()+c)),this._trimBuffer(),t.prototype.next.call(this,n)},e.prototype._subscribe=function(n){this._throwIfClosed(),this._trimBuffer();for(var r=this._innerSubscribe(n),o=this,i=o._infiniteTimeWindow,a=o._buffer,s=a.slice(),c=0;c<s.length&&!n.closed;c+=i?1:2)n.next(s[c]);return this._checkFinalizedStatuses(n),r},e.prototype._trimBuffer=function(){var n=this,r=n._bufferSize,o=n._timestampProvider,i=n._buffer,a=n._infiniteTimeWindow,s=(a?1:2)*r;if(r<1/0&&s<i.length&&i.splice(0,i.length-s),!a){for(var c=o.now(),l=0,u=1;u<i.length&&i[u]<=c;u+=2)l=u;l&&i.splice(0,l+1)}},e})(vt);var xr=new he(function(t){return t.complete()});function $p(t){return t&&q(t.schedule)}function sE(t){return t[t.length-1]}function Up(t){return $p(sE(t))?t.pop():void 0}var ni=(function(t){return t&&typeof t.length=="number"&&typeof t!="function"});function ri(t){return q(t?.then)}function oi(t){return q(t[Un])}function ii(t){return Symbol.asyncIterator&&q(t?.[Symbol.asyncIterator])}function ai(t){return new TypeError("You provided "+(t!==null&&typeof t=="object"?"an invalid object":"'"+t+"'")+" where a stream was expected. You can provide an Observable, Promise, ReadableStream, Array, AsyncIterable, or Iterable.")}function lE(){return typeof Symbol!="function"||!Symbol.iterator?"@@iterator":Symbol.iterator}var si=lE();function li(t){return q(t?.[si])}function ci(t){return Ip(this,arguments,function(){var n,r,o,i;return qo(this,function(a){switch(a.label){case 0:n=t.getReader(),a.label=1;case 1:a.trys.push([1,,9,10]),a.label=2;case 2:return[4,Wt(n.read())];case 3:return r=a.sent(),o=r.value,i=r.done,i?[4,Wt(void 0)]:[3,5];case 4:return[2,a.sent()];case 5:return[4,Wt(o)];case 6:return[4,a.sent()];case 7:return a.sent(),[3,2];case 8:return[3,10];case 9:return n.releaseLock(),[7];case 10:return[2]}})})}function ui(t){return q(t?.getReader)}function Ce(t){if(t instanceof he)return t;if(t!=null){if(oi(t))return cE(t);if(ni(t))return uE(t);if(ri(t))return dE(t);if(ii(t))return Hp(t);if(li(t))return pE(t);if(ui(t))return hE(t)}throw ai(t)}function cE(t){return new he(function(e){var n=t[Un]();if(q(n.subscribe))return n.subscribe(e);throw new TypeError("Provided object does not correctly implement Symbol.observable")})}function uE(t){return new he(function(e){for(var n=0;n<t.length&&!e.closed;n++)e.next(t[n]);e.complete()})}function dE(t){return new he(function(e){t.then(function(n){e.closed||(e.next(n),e.complete())},function(n){return e.error(n)}).then(null,Ko)})}function pE(t){return new he(function(e){var n,r;try{for(var o=xt(t),i=o.next();!i.done;i=o.next()){var a=i.value;if(e.next(a),e.closed)return}}catch(s){n={error:s}}finally{try{i&&!i.done&&(r=o.return)&&r.call(o)}finally{if(n)throw n.error}}e.complete()})}function Hp(t){return new he(function(e){fE(t,e).catch(function(n){return e.error(n)})})}function hE(t){return Hp(ci(t))}function fE(t,e){var n,r,o,i;return kp(this,void 0,void 0,function(){var a,s;return qo(this,function(c){switch(c.label){case 0:c.trys.push([0,5,6,11]),n=Rp(t),c.label=1;case 1:return[4,n.next()];case 2:if(r=c.sent(),!!r.done)return[3,4];if(a=r.value,e.next(a),e.closed)return[2];c.label=3;case 3:return[3,1];case 4:return[3,11];case 5:return s=c.sent(),o={error:s},[3,11];case 6:return c.trys.push([6,,9,10]),r&&!r.done&&(i=n.return)?[4,i.call(n)]:[3,8];case 7:c.sent(),c.label=8;case 8:return[3,10];case 9:if(o)throw o.error;return[7];case 10:return[7];case 11:return e.complete(),[2]}})})}function tt(t,e,n,r,o){r===void 0&&(r=0),o===void 0&&(o=!1);var i=e.schedule(function(){n(),o?t.add(this.schedule(null,r)):this.unsubscribe()},r);if(t.add(i),!o)return i}function di(t,e){return e===void 0&&(e=0),Se(function(n,r){n.subscribe(Te(r,function(o){return tt(r,t,function(){return r.next(o)},e)},function(){return tt(r,t,function(){return r.complete()},e)},function(o){return tt(r,t,function(){return r.error(o)},e)}))})}function pi(t,e){return e===void 0&&(e=0),Se(function(n,r){r.add(t.schedule(function(){return n.subscribe(r)},e))})}function Fp(t,e){return Ce(t).pipe(pi(e),di(e))}function Gp(t,e){return Ce(t).pipe(pi(e),di(e))}function Zp(t,e){return new he(function(n){var r=0;return e.schedule(function(){r===t.length?n.complete():(n.next(t[r++]),n.closed||this.schedule())})})}function Bp(t,e){return new he(function(n){var r;return tt(n,e,function(){r=t[si](),tt(n,e,function(){var o,i,a;try{o=r.next(),i=o.value,a=o.done}catch(s){n.error(s);return}a?n.complete():n.next(i)},0,!0)}),function(){return q(r?.return)&&r.return()}})}function hi(t,e){if(!t)throw new Error("Iterable cannot be null");return new he(function(n){tt(n,e,function(){var r=t[Symbol.asyncIterator]();tt(n,e,function(){r.next().then(function(o){o.done?n.complete():n.next(o.value)})},0,!0)})})}function Vp(t,e){return hi(ci(t),e)}function jp(t,e){if(t!=null){if(oi(t))return Fp(t,e);if(ni(t))return Zp(t,e);if(ri(t))return Gp(t,e);if(ii(t))return hi(t,e);if(li(t))return Bp(t,e);if(ui(t))return Vp(t,e)}throw ai(t)}function Yt(t,e){return e?jp(t,e):Ce(t)}function se(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];var n=Up(t);return Yt(t,n)}function F(t,e){var n=q(t)?t:function(){return t},r=function(o){return o.error(n())};return new he(e?function(o){return e.schedule(r,0,o)}:r)}var Wp=zn(function(t){return function(){t(this),this.name="EmptyError",this.message="no elements in sequence"}});function fi(t,e){var n=typeof e=="object";return new Promise(function(r,o){var i=!1,a;t.subscribe({next:function(s){a=s,i=!0},error:o,complete:function(){i?r(a):n?r(e.defaultValue):o(new Wp)}})})}function bt(t,e){return Se(function(n,r){var o=0;n.subscribe(Te(r,function(i){r.next(t.call(e,i,o++))}))})}function qp(t,e,n,r,o,i,a,s){var c=[],l=0,u=0,f=!1,m=function(){f&&!c.length&&!l&&e.complete()},h=function(E){return l<r?p(E):c.push(E)},p=function(E){i&&e.next(E),l++;var g=!1;Ce(n(E,u++)).subscribe(Te(e,function(S){o?.(S),i?h(S):e.next(S)},function(){g=!0},void 0,function(){if(g)try{l--;for(var S=function(){var y=c.shift();a?tt(e,a,function(){return p(y)}):p(y)};c.length&&l<r;)S();m()}catch(y){e.error(y)}}))};return t.subscribe(Te(e,h,function(){f=!0,m()})),function(){s?.()}}function Ge(t,e,n){return n===void 0&&(n=1/0),q(e)?Ge(function(r,o){return bt(function(i,a){return e(r,i,o,a)})(Ce(t(r,o)))},n):(typeof e=="number"&&(n=e),Se(function(r,o){return qp(r,o,t,n)}))}function Wl(t){return t===void 0&&(t=1/0),Ge(Hn,t)}function Sr(t){return new he(function(e){Ce(t()).subscribe(e)})}function ql(t,e){return Se(function(n,r){var o=0;n.subscribe(Te(r,function(i){return t.call(e,i,o++)&&r.next(i)}))})}function _r(t){return Se(function(e,n){var r=null,o=!1,i;r=e.subscribe(Te(n,void 0,void 0,function(a){i=Ce(t(a,_r(t)(e))),r?(r.unsubscribe(),r=null,i.subscribe(n)):o=!0})),o&&(r.unsubscribe(),r=null,i.subscribe(n))})}function mi(t,e){return q(e)?Ge(t,e,1):Ge(t,1)}function Yl(t){return Se(function(e,n){var r=!1;e.subscribe(Te(n,function(o){r=!0,n.next(o)},function(){r||n.next(t),n.complete()}))})}function Xt(t){return Se(function(e,n){try{e.subscribe(n)}finally{n.add(t)}})}function Xl(t,e){return Se(function(n,r){var o=null,i=0,a=!1,s=function(){return a&&!o&&r.complete()};n.subscribe(Te(r,function(c){o?.unsubscribe();var l=0,u=i++;Ce(t(c,u)).subscribe(o=Te(r,function(f){return r.next(e?e(c,f,u,l++):f)},function(){o=null,s()}))},function(){a=!0,s()}))})}function gi(t){return Se(function(e,n){Ce(t).subscribe(Te(n,function(){return n.complete()},wr)),!n.closed&&e.subscribe(n)})}function vi(t,e,n){var r=q(t)||e||n?{next:t,error:e,complete:n}:t;return r?Se(function(o,i){var a;(a=r.subscribe)===null||a===void 0||a.call(r);var s=!0;o.subscribe(Te(i,function(c){var l;(l=r.next)===null||l===void 0||l.call(r,c),i.next(c)},function(){var c;s=!1,(c=r.complete)===null||c===void 0||c.call(r),i.complete()},function(c){var l;s=!1,(l=r.error)===null||l===void 0||l.call(r,c),i.error(c)},function(){var c,l;s&&((c=r.unsubscribe)===null||c===void 0||c.call(r)),(l=r.finalize)===null||l===void 0||l.call(r)}))}):Hn}function Yp(t){return` \r
	`.indexOf(t)>=0}function bi(t){for(var e=["topLevel"],n=0,r,o,i,a=function(y){return e.push(y)},s=function(y){return e[e.length-1]=y},c=function(y){r==null&&(r=n,o=e.length,i=y)},l=function(y){y===i&&(r=void 0,o=void 0,i=void 0)},u=function(){return e.pop()},f=function(){return n--},m=function(y){if("0"<=y&&y<="9"){a("number");return}switch(y){case'"':a("string");return;case"-":a("numberNeedsDigit");return;case"t":a("true");return;case"f":a("false");return;case"n":a("null");return;case"[":a("arrayNeedsValue");return;case"{":a("objectNeedsKey");return}},h=t.length;n<h;n++){var p=t[n];switch(e[e.length-1]){case"topLevel":m(p);break;case"string":switch(p){case'"':u();break;case"\\":c("stringEscape"),a("stringEscaped");break}break;case"stringEscaped":p==="u"?a("stringUnicode"):(l("stringEscape"),u());break;case"stringUnicode":n-t.lastIndexOf("u",n)===4&&(l("stringEscape"),u());break;case"number":p==="."?s("numberNeedsDigit"):p==="e"||p==="E"?s("numberNeedsExponent"):(p<"0"||p>"9")&&(f(),u());break;case"numberNeedsDigit":s("number");break;case"numberNeedsExponent":s(p==="+"||p==="-"?"numberNeedsDigit":"number");break;case"true":case"false":case"null":(p<"a"||p>"z")&&(f(),u());break;case"arrayNeedsValue":p==="]"?u():Yp(p)||(l("collectionItem"),s("arrayNeedsComma"),m(p));break;case"arrayNeedsComma":p==="]"?u():p===","&&(c("collectionItem"),s("arrayNeedsValue"));break;case"objectNeedsKey":p==="}"?u():p==='"'&&(c("collectionItem"),s("objectNeedsColon"),a("string"));break;case"objectNeedsColon":p===":"&&s("objectNeedsValue");break;case"objectNeedsValue":Yp(p)||(l("collectionItem"),s("objectNeedsComma"),m(p));break;case"objectNeedsComma":p==="}"?u():p===","&&(c("collectionItem"),s("objectNeedsKey"));break}}o!=null&&(e.length=o);for(var E=[r!=null?t.slice(0,r):t],g=function(y){return E.push(y.slice(t.length-t.lastIndexOf(y[0])))},S=e.length-1;S>=0;S--)switch(e[S]){case"string":E.push('"');break;case"numberNeedsDigit":case"numberNeedsExponent":E.push("0");break;case"true":g("true");break;case"false":g("false");break;case"null":g("null");break;case"arrayNeedsValue":case"arrayNeedsComma":E.push("]");break;case"objectNeedsKey":case"objectNeedsColon":case"objectNeedsValue":case"objectNeedsComma":E.push("}");break}return E.join("")}var mE=Object.freeze({status:"aborted"});function k(t,e,n){function r(s,c){var l;Object.defineProperty(s,"_zod",{value:s._zod??{},enumerable:!1}),(l=s._zod).traits??(l.traits=new Set),s._zod.traits.add(t),e(s,c);for(let u in a.prototype)u in s||Object.defineProperty(s,u,{value:a.prototype[u].bind(s)});s._zod.constr=a,s._zod.def=c}let o=n?.Parent??Object;class i extends o{}Object.defineProperty(i,"name",{value:t});function a(s){var c;let l=n?.Parent?new i:this;r(l,s),(c=l._zod).deferred??(c.deferred=[]);for(let u of l._zod.deferred)u();return l}return Object.defineProperty(a,"init",{value:r}),Object.defineProperty(a,Symbol.hasInstance,{value:s=>n?.Parent&&s instanceof n.Parent?!0:s?._zod?.traits?.has(t)}),Object.defineProperty(a,"name",{value:t}),a}var St=class extends Error{constructor(){super("Encountered Promise during synchronous parse. Use .parseAsync() instead.")}},yi={};function Me(t){return t&&Object.assign(yi,t),yi}var ae={};tl(ae,{BIGINT_FORMAT_RANGES:()=>Kp,Class:()=>Jl,NUMBER_FORMAT_RANGES:()=>ac,aborted:()=>Jt,allowsEval:()=>rc,assert:()=>wE,assertEqual:()=>gE,assertIs:()=>bE,assertNever:()=>yE,assertNotEqual:()=>vE,assignProp:()=>nc,cached:()=>Ar,captureStackTrace:()=>Ei,cleanEnum:()=>PE,cleanRegex:()=>Ir,clone:()=>at,createTransparentProxy:()=>AE,defineLazy:()=>ie,esc:()=>Kt,escapeRegex:()=>Rt,extend:()=>RE,finalizeIssue:()=>st,floatSafeRemainder:()=>tc,getElementAtPath:()=>EE,getEnumValues:()=>Ql,getLengthableOrigin:()=>Rr,getParsedType:()=>TE,getSizableOrigin:()=>Jp,isObject:()=>Fn,isPlainObject:()=>Gn,issue:()=>sc,joinValues:()=>wi,jsonStringifyReplacer:()=>ec,merge:()=>CE,normalizeParams:()=>G,nullish:()=>kr,numKeys:()=>_E,omit:()=>IE,optionalKeys:()=>ic,partial:()=>NE,pick:()=>kE,prefixIssues:()=>yt,primitiveTypes:()=>Xp,promiseAllObject:()=>xE,propertyKeyTypes:()=>oc,randomString:()=>SE,required:()=>OE,stringifyPrimitive:()=>xi,unwrapMessage:()=>Tr});function gE(t){return t}function vE(t){return t}function bE(t){}function yE(t){throw new Error}function wE(t){}function Ql(t){let e=Object.values(t).filter(r=>typeof r=="number");return Object.entries(t).filter(([r,o])=>e.indexOf(+r)===-1).map(([r,o])=>o)}function wi(t,e="|"){return t.map(n=>xi(n)).join(e)}function ec(t,e){return typeof e=="bigint"?e.toString():e}function Ar(t){return{get value(){{let n=t();return Object.defineProperty(this,"value",{value:n}),n}throw new Error("cached value already set")}}}function kr(t){return t==null}function Ir(t){let e=t.startsWith("^")?1:0,n=t.endsWith("$")?t.length-1:t.length;return t.slice(e,n)}function tc(t,e){let n=(t.toString().split(".")[1]||"").length,r=(e.toString().split(".")[1]||"").length,o=n>r?n:r,i=Number.parseInt(t.toFixed(o).replace(".","")),a=Number.parseInt(e.toFixed(o).replace(".",""));return i%a/10**o}function ie(t,e,n){Object.defineProperty(t,e,{get(){{let o=n();return t[e]=o,o}throw new Error("cached value already set")},set(o){Object.defineProperty(t,e,{value:o})},configurable:!0})}function nc(t,e,n){Object.defineProperty(t,e,{value:n,writable:!0,enumerable:!0,configurable:!0})}function EE(t,e){return e?e.reduce((n,r)=>n?.[r],t):t}function xE(t){let e=Object.keys(t),n=e.map(r=>t[r]);return Promise.all(n).then(r=>{let o={};for(let i=0;i<e.length;i++)o[e[i]]=r[i];return o})}function SE(t=10){let e="abcdefghijklmnopqrstuvwxyz",n="";for(let r=0;r<t;r++)n+=e[Math.floor(Math.random()*e.length)];return n}function Kt(t){return JSON.stringify(t)}var Ei=Error.captureStackTrace?Error.captureStackTrace:(...t)=>{};function Fn(t){return typeof t=="object"&&t!==null&&!Array.isArray(t)}var rc=Ar(()=>{if(typeof navigator<"u"&&navigator?.userAgent?.includes("Cloudflare"))return!1;try{let t=Function;return new t(""),!0}catch{return!1}});function Gn(t){if(Fn(t)===!1)return!1;let e=t.constructor;if(e===void 0)return!0;let n=e.prototype;return!(Fn(n)===!1||Object.prototype.hasOwnProperty.call(n,"isPrototypeOf")===!1)}function _E(t){let e=0;for(let n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}var TE=t=>{let e=typeof t;switch(e){case"undefined":return"undefined";case"string":return"string";case"number":return Number.isNaN(t)?"nan":"number";case"boolean":return"boolean";case"function":return"function";case"bigint":return"bigint";case"symbol":return"symbol";case"object":return Array.isArray(t)?"array":t===null?"null":t.then&&typeof t.then=="function"&&t.catch&&typeof t.catch=="function"?"promise":typeof Map<"u"&&t instanceof Map?"map":typeof Set<"u"&&t instanceof Set?"set":typeof Date<"u"&&t instanceof Date?"date":typeof File<"u"&&t instanceof File?"file":"object";default:throw new Error(`Unknown data type: ${e}`)}},oc=new Set(["string","number","symbol"]),Xp=new Set(["string","number","bigint","boolean","symbol","undefined"]);function Rt(t){return t.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")}function at(t,e,n){let r=new t._zod.constr(e??t._zod.def);return(!e||n?.parent)&&(r._zod.parent=t),r}function G(t){let e=t;if(!e)return{};if(typeof e=="string")return{error:()=>e};if(e?.message!==void 0){if(e?.error!==void 0)throw new Error("Cannot specify both `message` and `error` params");e.error=e.message}return delete e.message,typeof e.error=="string"?{...e,error:()=>e.error}:e}function AE(t){let e;return new Proxy({},{get(n,r,o){return e??(e=t()),Reflect.get(e,r,o)},set(n,r,o,i){return e??(e=t()),Reflect.set(e,r,o,i)},has(n,r){return e??(e=t()),Reflect.has(e,r)},deleteProperty(n,r){return e??(e=t()),Reflect.deleteProperty(e,r)},ownKeys(n){return e??(e=t()),Reflect.ownKeys(e)},getOwnPropertyDescriptor(n,r){return e??(e=t()),Reflect.getOwnPropertyDescriptor(e,r)},defineProperty(n,r,o){return e??(e=t()),Reflect.defineProperty(e,r,o)}})}function xi(t){return typeof t=="bigint"?t.toString()+"n":typeof t=="string"?`"${t}"`:`${t}`}function ic(t){return Object.keys(t).filter(e=>t[e]._zod.optin==="optional"&&t[e]._zod.optout==="optional")}var ac={safeint:[Number.MIN_SAFE_INTEGER,Number.MAX_SAFE_INTEGER],int32:[-2147483648,2147483647],uint32:[0,4294967295],float32:[-34028234663852886e22,34028234663852886e22],float64:[-Number.MAX_VALUE,Number.MAX_VALUE]},Kp={int64:[BigInt("-9223372036854775808"),BigInt("9223372036854775807")],uint64:[BigInt(0),BigInt("18446744073709551615")]};function kE(t,e){let n={},r=t._zod.def;for(let o in e){if(!(o in r.shape))throw new Error(`Unrecognized key: "${o}"`);e[o]&&(n[o]=r.shape[o])}return at(t,{...t._zod.def,shape:n,checks:[]})}function IE(t,e){let n={...t._zod.def.shape},r=t._zod.def;for(let o in e){if(!(o in r.shape))throw new Error(`Unrecognized key: "${o}"`);e[o]&&delete n[o]}return at(t,{...t._zod.def,shape:n,checks:[]})}function RE(t,e){if(!Gn(e))throw new Error("Invalid input to extend: expected a plain object");let n={...t._zod.def,get shape(){let r={...t._zod.def.shape,...e};return nc(this,"shape",r),r},checks:[]};return at(t,n)}function CE(t,e){return at(t,{...t._zod.def,get shape(){let n={...t._zod.def.shape,...e._zod.def.shape};return nc(this,"shape",n),n},catchall:e._zod.def.catchall,checks:[]})}function NE(t,e,n){let r=e._zod.def.shape,o={...r};if(n)for(let i in n){if(!(i in r))throw new Error(`Unrecognized key: "${i}"`);n[i]&&(o[i]=t?new t({type:"optional",innerType:r[i]}):r[i])}else for(let i in r)o[i]=t?new t({type:"optional",innerType:r[i]}):r[i];return at(e,{...e._zod.def,shape:o,checks:[]})}function OE(t,e,n){let r=e._zod.def.shape,o={...r};if(n)for(let i in n){if(!(i in o))throw new Error(`Unrecognized key: "${i}"`);n[i]&&(o[i]=new t({type:"nonoptional",innerType:r[i]}))}else for(let i in r)o[i]=new t({type:"nonoptional",innerType:r[i]});return at(e,{...e._zod.def,shape:o,checks:[]})}function Jt(t,e=0){for(let n=e;n<t.issues.length;n++)if(t.issues[n]?.continue!==!0)return!0;return!1}function yt(t,e){return e.map(n=>{var r;return(r=n).path??(r.path=[]),n.path.unshift(t),n})}function Tr(t){return typeof t=="string"?t:t?.message}function st(t,e,n){let r={...t,path:t.path??[]};if(!t.message){let o=Tr(t.inst?._zod.def?.error?.(t))??Tr(e?.error?.(t))??Tr(n.customError?.(t))??Tr(n.localeError?.(t))??"Invalid input";r.message=o}return delete r.inst,delete r.continue,e?.reportInput||delete r.input,r}function Jp(t){return t instanceof Set?"set":t instanceof Map?"map":t instanceof File?"file":"unknown"}function Rr(t){return Array.isArray(t)?"array":typeof t=="string"?"string":"unknown"}function sc(...t){let[e,n,r]=t;return typeof e=="string"?{message:e,code:"custom",input:n,inst:r}:{...e}}function PE(t){return Object.entries(t).filter(([e,n])=>Number.isNaN(Number.parseInt(e,10))).map(e=>e[1])}var Jl=class{constructor(...e){}};var Qp=(t,e)=>{t.name="$ZodError",Object.defineProperty(t,"_zod",{value:t._zod,enumerable:!1}),Object.defineProperty(t,"issues",{value:e,enumerable:!1}),Object.defineProperty(t,"message",{get(){return JSON.stringify(e,ec,2)},enumerable:!0}),Object.defineProperty(t,"toString",{value:()=>t.message,enumerable:!1})},Si=k("$ZodError",Qp),lc=k("$ZodError",Qp,{Parent:Error});function cc(t,e=n=>n.message){let n={},r=[];for(let o of t.issues)o.path.length>0?(n[o.path[0]]=n[o.path[0]]||[],n[o.path[0]].push(e(o))):r.push(e(o));return{formErrors:r,fieldErrors:n}}function uc(t,e){let n=e||function(i){return i.message},r={_errors:[]},o=i=>{for(let a of i.issues)if(a.code==="invalid_union"&&a.errors.length)a.errors.map(s=>o({issues:s}));else if(a.code==="invalid_key")o({issues:a.issues});else if(a.code==="invalid_element")o({issues:a.issues});else if(a.path.length===0)r._errors.push(n(a));else{let s=r,c=0;for(;c<a.path.length;){let l=a.path[c];c===a.path.length-1?(s[l]=s[l]||{_errors:[]},s[l]._errors.push(n(a))):s[l]=s[l]||{_errors:[]},s=s[l],c++}}};return o(t),r}var eh=t=>(e,n,r,o)=>{let i=r?Object.assign(r,{async:!1}):{async:!1},a=e._zod.run({value:n,issues:[]},i);if(a instanceof Promise)throw new St;if(a.issues.length){let s=new(o?.Err??t)(a.issues.map(c=>st(c,i,Me())));throw Ei(s,o?.callee),s}return a.value};var th=t=>async(e,n,r,o)=>{let i=r?Object.assign(r,{async:!0}):{async:!0},a=e._zod.run({value:n,issues:[]},i);if(a instanceof Promise&&(a=await a),a.issues.length){let s=new(o?.Err??t)(a.issues.map(c=>st(c,i,Me())));throw Ei(s,o?.callee),s}return a.value};var dc=t=>(e,n,r)=>{let o=r?{...r,async:!1}:{async:!1},i=e._zod.run({value:n,issues:[]},o);if(i instanceof Promise)throw new St;return i.issues.length?{success:!1,error:new(t??Si)(i.issues.map(a=>st(a,o,Me())))}:{success:!0,data:i.value}},nh=dc(lc),pc=t=>async(e,n,r)=>{let o=r?Object.assign(r,{async:!0}):{async:!0},i=e._zod.run({value:n,issues:[]},o);return i instanceof Promise&&(i=await i),i.issues.length?{success:!1,error:new t(i.issues.map(a=>st(a,o,Me())))}:{success:!0,data:i.value}},rh=pc(lc);var oh=/^[cC][^\s-]{8,}$/,ih=/^[0-9a-z]+$/,ah=/^[0-9A-HJKMNP-TV-Za-hjkmnp-tv-z]{26}$/,sh=/^[0-9a-vA-V]{20}$/,lh=/^[A-Za-z0-9]{27}$/,ch=/^[a-zA-Z0-9_-]{21}$/,uh=/^P(?:(\d+W)|(?!.*W)(?=\d|T\d)(\d+Y)?(\d+M)?(\d+D)?(T(?=\d)(\d+H)?(\d+M)?(\d+([.,]\d+)?S)?)?)$/;var dh=/^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12})$/,hc=t=>t?new RegExp(`^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-${t}[0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12})$`):/^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[1-8][0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12}|00000000-0000-0000-0000-000000000000)$/;var ph=/^(?!\.)(?!.*\.\.)([A-Za-z0-9_'+\-\.]*)[A-Za-z0-9_+-]@([A-Za-z0-9][A-Za-z0-9\-]*\.)+[A-Za-z]{2,}$/;var zE="^(\\p{Extended_Pictographic}|\\p{Emoji_Component})+$";function hh(){return new RegExp(zE,"u")}var fh=/^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])$/,mh=/^(([0-9a-fA-F]{1,4}:){7}[0-9a-fA-F]{1,4}|::|([0-9a-fA-F]{1,4})?::([0-9a-fA-F]{1,4}:?){0,6})$/,gh=/^((25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\/([0-9]|[1-2][0-9]|3[0-2])$/,vh=/^(([0-9a-fA-F]{1,4}:){7}[0-9a-fA-F]{1,4}|::|([0-9a-fA-F]{1,4})?::([0-9a-fA-F]{1,4}:?){0,6})\/(12[0-8]|1[01][0-9]|[1-9]?[0-9])$/,bh=/^$|^(?:[0-9a-zA-Z+/]{4})*(?:(?:[0-9a-zA-Z+/]{2}==)|(?:[0-9a-zA-Z+/]{3}=))?$/,fc=/^[A-Za-z0-9_-]*$/,yh=/^([a-zA-Z0-9-]+\.)*[a-zA-Z0-9-]+$/;var wh=/^\+(?:[0-9]){6,14}[0-9]$/,Eh="(?:(?:\\d\\d[2468][048]|\\d\\d[13579][26]|\\d\\d0[48]|[02468][048]00|[13579][26]00)-02-29|\\d{4}-(?:(?:0[13578]|1[02])-(?:0[1-9]|[12]\\d|3[01])|(?:0[469]|11)-(?:0[1-9]|[12]\\d|30)|(?:02)-(?:0[1-9]|1\\d|2[0-8])))",xh=new RegExp(`^${Eh}$`);function Sh(t){let e="(?:[01]\\d|2[0-3]):[0-5]\\d";return typeof t.precision=="number"?t.precision===-1?`${e}`:t.precision===0?`${e}:[0-5]\\d`:`${e}:[0-5]\\d\\.\\d{${t.precision}}`:`${e}(?::[0-5]\\d(?:\\.\\d+)?)?`}function _h(t){return new RegExp(`^${Sh(t)}$`)}function Th(t){let e=Sh({precision:t.precision}),n=["Z"];t.local&&n.push(""),t.offset&&n.push("([+-]\\d{2}:\\d{2})");let r=`${e}(?:${n.join("|")})`;return new RegExp(`^${Eh}T(?:${r})$`)}var Ah=t=>{let e=t?`[\\s\\S]{${t?.minimum??0},${t?.maximum??""}}`:"[\\s\\S]*";return new RegExp(`^${e}$`)};var kh=/^\d+$/,Ih=/^-?\d+(?:\.\d+)?/i,Rh=/true|false/i;var Ch=/^[^A-Z]*$/,Nh=/^[^a-z]*$/;var De=k("$ZodCheck",(t,e)=>{var n;t._zod??(t._zod={}),t._zod.def=e,(n=t._zod).onattach??(n.onattach=[])}),Oh={number:"number",bigint:"bigint",object:"date"},mc=k("$ZodCheckLessThan",(t,e)=>{De.init(t,e);let n=Oh[typeof e.value];t._zod.onattach.push(r=>{let o=r._zod.bag,i=(e.inclusive?o.maximum:o.exclusiveMaximum)??Number.POSITIVE_INFINITY;e.value<i&&(e.inclusive?o.maximum=e.value:o.exclusiveMaximum=e.value)}),t._zod.check=r=>{(e.inclusive?r.value<=e.value:r.value<e.value)||r.issues.push({origin:n,code:"too_big",maximum:e.value,input:r.value,inclusive:e.inclusive,inst:t,continue:!e.abort})}}),gc=k("$ZodCheckGreaterThan",(t,e)=>{De.init(t,e);let n=Oh[typeof e.value];t._zod.onattach.push(r=>{let o=r._zod.bag,i=(e.inclusive?o.minimum:o.exclusiveMinimum)??Number.NEGATIVE_INFINITY;e.value>i&&(e.inclusive?o.minimum=e.value:o.exclusiveMinimum=e.value)}),t._zod.check=r=>{(e.inclusive?r.value>=e.value:r.value>e.value)||r.issues.push({origin:n,code:"too_small",minimum:e.value,input:r.value,inclusive:e.inclusive,inst:t,continue:!e.abort})}}),Ph=k("$ZodCheckMultipleOf",(t,e)=>{De.init(t,e),t._zod.onattach.push(n=>{var r;(r=n._zod.bag).multipleOf??(r.multipleOf=e.value)}),t._zod.check=n=>{if(typeof n.value!=typeof e.value)throw new Error("Cannot mix number and bigint in multiple_of check.");(typeof n.value=="bigint"?n.value%e.value===BigInt(0):tc(n.value,e.value)===0)||n.issues.push({origin:typeof n.value,code:"not_multiple_of",divisor:e.value,input:n.value,inst:t,continue:!e.abort})}}),Mh=k("$ZodCheckNumberFormat",(t,e)=>{De.init(t,e),e.format=e.format||"float64";let n=e.format?.includes("int"),r=n?"int":"number",[o,i]=ac[e.format];t._zod.onattach.push(a=>{let s=a._zod.bag;s.format=e.format,s.minimum=o,s.maximum=i,n&&(s.pattern=kh)}),t._zod.check=a=>{let s=a.value;if(n){if(!Number.isInteger(s)){a.issues.push({expected:r,format:e.format,code:"invalid_type",input:s,inst:t});return}if(!Number.isSafeInteger(s)){s>0?a.issues.push({input:s,code:"too_big",maximum:Number.MAX_SAFE_INTEGER,note:"Integers must be within the safe integer range.",inst:t,origin:r,continue:!e.abort}):a.issues.push({input:s,code:"too_small",minimum:Number.MIN_SAFE_INTEGER,note:"Integers must be within the safe integer range.",inst:t,origin:r,continue:!e.abort});return}}s<o&&a.issues.push({origin:"number",input:s,code:"too_small",minimum:o,inclusive:!0,inst:t,continue:!e.abort}),s>i&&a.issues.push({origin:"number",input:s,code:"too_big",maximum:i,inst:t})}});var zh=k("$ZodCheckMaxLength",(t,e)=>{var n;De.init(t,e),(n=t._zod.def).when??(n.when=r=>{let o=r.value;return!kr(o)&&o.length!==void 0}),t._zod.onattach.push(r=>{let o=r._zod.bag.maximum??Number.POSITIVE_INFINITY;e.maximum<o&&(r._zod.bag.maximum=e.maximum)}),t._zod.check=r=>{let o=r.value;if(o.length<=e.maximum)return;let a=Rr(o);r.issues.push({origin:a,code:"too_big",maximum:e.maximum,inclusive:!0,input:o,inst:t,continue:!e.abort})}}),Lh=k("$ZodCheckMinLength",(t,e)=>{var n;De.init(t,e),(n=t._zod.def).when??(n.when=r=>{let o=r.value;return!kr(o)&&o.length!==void 0}),t._zod.onattach.push(r=>{let o=r._zod.bag.minimum??Number.NEGATIVE_INFINITY;e.minimum>o&&(r._zod.bag.minimum=e.minimum)}),t._zod.check=r=>{let o=r.value;if(o.length>=e.minimum)return;let a=Rr(o);r.issues.push({origin:a,code:"too_small",minimum:e.minimum,inclusive:!0,input:o,inst:t,continue:!e.abort})}}),Dh=k("$ZodCheckLengthEquals",(t,e)=>{var n;De.init(t,e),(n=t._zod.def).when??(n.when=r=>{let o=r.value;return!kr(o)&&o.length!==void 0}),t._zod.onattach.push(r=>{let o=r._zod.bag;o.minimum=e.length,o.maximum=e.length,o.length=e.length}),t._zod.check=r=>{let o=r.value,i=o.length;if(i===e.length)return;let a=Rr(o),s=i>e.length;r.issues.push({origin:a,...s?{code:"too_big",maximum:e.length}:{code:"too_small",minimum:e.length},inclusive:!0,exact:!0,input:r.value,inst:t,continue:!e.abort})}}),Cr=k("$ZodCheckStringFormat",(t,e)=>{var n,r;De.init(t,e),t._zod.onattach.push(o=>{let i=o._zod.bag;i.format=e.format,e.pattern&&(i.patterns??(i.patterns=new Set),i.patterns.add(e.pattern))}),e.pattern?(n=t._zod).check??(n.check=o=>{e.pattern.lastIndex=0,!e.pattern.test(o.value)&&o.issues.push({origin:"string",code:"invalid_format",format:e.format,input:o.value,...e.pattern?{pattern:e.pattern.toString()}:{},inst:t,continue:!e.abort})}):(r=t._zod).check??(r.check=()=>{})}),$h=k("$ZodCheckRegex",(t,e)=>{Cr.init(t,e),t._zod.check=n=>{e.pattern.lastIndex=0,!e.pattern.test(n.value)&&n.issues.push({origin:"string",code:"invalid_format",format:"regex",input:n.value,pattern:e.pattern.toString(),inst:t,continue:!e.abort})}}),Uh=k("$ZodCheckLowerCase",(t,e)=>{e.pattern??(e.pattern=Ch),Cr.init(t,e)}),Hh=k("$ZodCheckUpperCase",(t,e)=>{e.pattern??(e.pattern=Nh),Cr.init(t,e)}),Fh=k("$ZodCheckIncludes",(t,e)=>{De.init(t,e);let n=Rt(e.includes),r=new RegExp(typeof e.position=="number"?`^.{${e.position}}${n}`:n);e.pattern=r,t._zod.onattach.push(o=>{let i=o._zod.bag;i.patterns??(i.patterns=new Set),i.patterns.add(r)}),t._zod.check=o=>{o.value.includes(e.includes,e.position)||o.issues.push({origin:"string",code:"invalid_format",format:"includes",includes:e.includes,input:o.value,inst:t,continue:!e.abort})}}),Gh=k("$ZodCheckStartsWith",(t,e)=>{De.init(t,e);let n=new RegExp(`^${Rt(e.prefix)}.*`);e.pattern??(e.pattern=n),t._zod.onattach.push(r=>{let o=r._zod.bag;o.patterns??(o.patterns=new Set),o.patterns.add(n)}),t._zod.check=r=>{r.value.startsWith(e.prefix)||r.issues.push({origin:"string",code:"invalid_format",format:"starts_with",prefix:e.prefix,input:r.value,inst:t,continue:!e.abort})}}),Zh=k("$ZodCheckEndsWith",(t,e)=>{De.init(t,e);let n=new RegExp(`.*${Rt(e.suffix)}$`);e.pattern??(e.pattern=n),t._zod.onattach.push(r=>{let o=r._zod.bag;o.patterns??(o.patterns=new Set),o.patterns.add(n)}),t._zod.check=r=>{r.value.endsWith(e.suffix)||r.issues.push({origin:"string",code:"invalid_format",format:"ends_with",suffix:e.suffix,input:r.value,inst:t,continue:!e.abort})}});var Bh=k("$ZodCheckOverwrite",(t,e)=>{De.init(t,e),t._zod.check=n=>{n.value=e.tx(n.value)}});var Ti=class{constructor(e=[]){this.content=[],this.indent=0,this&&(this.args=e)}indented(e){this.indent+=1,e(this),this.indent-=1}write(e){if(typeof e=="function"){e(this,{execution:"sync"}),e(this,{execution:"async"});return}let r=e.split(`
`).filter(a=>a),o=Math.min(...r.map(a=>a.length-a.trimStart().length)),i=r.map(a=>a.slice(o)).map(a=>" ".repeat(this.indent*2)+a);for(let a of i)this.content.push(a)}compile(){let e=Function,n=this?.args,o=[...(this?.content??[""]).map(i=>`  ${i}`)];return new e(...n,o.join(`
`))}};var jh={major:4,minor:0,patch:0};var ce=k("$ZodType",(t,e)=>{var n;t??(t={}),t._zod.def=e,t._zod.bag=t._zod.bag||{},t._zod.version=jh;let r=[...t._zod.def.checks??[]];t._zod.traits.has("$ZodCheck")&&r.unshift(t);for(let o of r)for(let i of o._zod.onattach)i(t);if(r.length===0)(n=t._zod).deferred??(n.deferred=[]),t._zod.deferred?.push(()=>{t._zod.run=t._zod.parse});else{let o=(i,a,s)=>{let c=Jt(i),l;for(let u of a){if(u._zod.def.when){if(!u._zod.def.when(i))continue}else if(c)continue;let f=i.issues.length,m=u._zod.check(i);if(m instanceof Promise&&s?.async===!1)throw new St;if(l||m instanceof Promise)l=(l??Promise.resolve()).then(async()=>{await m,i.issues.length!==f&&(c||(c=Jt(i,f)))});else{if(i.issues.length===f)continue;c||(c=Jt(i,f))}}return l?l.then(()=>i):i};t._zod.run=(i,a)=>{let s=t._zod.parse(i,a);if(s instanceof Promise){if(a.async===!1)throw new St;return s.then(c=>o(c,r,a))}return o(s,r,a)}}t["~standard"]={validate:o=>{try{let i=nh(t,o);return i.success?{value:i.data}:{issues:i.error?.issues}}catch{return rh(t,o).then(a=>a.success?{value:a.data}:{issues:a.error?.issues})}},vendor:"zod",version:1}}),ki=k("$ZodString",(t,e)=>{ce.init(t,e),t._zod.pattern=[...t?._zod.bag?.patterns??[]].pop()??Ah(t._zod.bag),t._zod.parse=(n,r)=>{if(e.coerce)try{n.value=String(n.value)}catch{}return typeof n.value=="string"||n.issues.push({expected:"string",code:"invalid_type",input:n.value,inst:t}),n}}),fe=k("$ZodStringFormat",(t,e)=>{Cr.init(t,e),ki.init(t,e)}),nf=k("$ZodGUID",(t,e)=>{e.pattern??(e.pattern=dh),fe.init(t,e)}),rf=k("$ZodUUID",(t,e)=>{if(e.version){let r={v1:1,v2:2,v3:3,v4:4,v5:5,v6:6,v7:7,v8:8}[e.version];if(r===void 0)throw new Error(`Invalid UUID version: "${e.version}"`);e.pattern??(e.pattern=hc(r))}else e.pattern??(e.pattern=hc());fe.init(t,e)}),of=k("$ZodEmail",(t,e)=>{e.pattern??(e.pattern=ph),fe.init(t,e)}),af=k("$ZodURL",(t,e)=>{fe.init(t,e),t._zod.check=n=>{try{let r=n.value,o=new URL(r),i=o.href;e.hostname&&(e.hostname.lastIndex=0,e.hostname.test(o.hostname)||n.issues.push({code:"invalid_format",format:"url",note:"Invalid hostname",pattern:yh.source,input:n.value,inst:t,continue:!e.abort})),e.protocol&&(e.protocol.lastIndex=0,e.protocol.test(o.protocol.endsWith(":")?o.protocol.slice(0,-1):o.protocol)||n.issues.push({code:"invalid_format",format:"url",note:"Invalid protocol",pattern:e.protocol.source,input:n.value,inst:t,continue:!e.abort})),!r.endsWith("/")&&i.endsWith("/")?n.value=i.slice(0,-1):n.value=i;return}catch{n.issues.push({code:"invalid_format",format:"url",input:n.value,inst:t,continue:!e.abort})}}}),sf=k("$ZodEmoji",(t,e)=>{e.pattern??(e.pattern=hh()),fe.init(t,e)}),lf=k("$ZodNanoID",(t,e)=>{e.pattern??(e.pattern=ch),fe.init(t,e)}),cf=k("$ZodCUID",(t,e)=>{e.pattern??(e.pattern=oh),fe.init(t,e)}),uf=k("$ZodCUID2",(t,e)=>{e.pattern??(e.pattern=ih),fe.init(t,e)}),df=k("$ZodULID",(t,e)=>{e.pattern??(e.pattern=ah),fe.init(t,e)}),pf=k("$ZodXID",(t,e)=>{e.pattern??(e.pattern=sh),fe.init(t,e)}),hf=k("$ZodKSUID",(t,e)=>{e.pattern??(e.pattern=lh),fe.init(t,e)}),ff=k("$ZodISODateTime",(t,e)=>{e.pattern??(e.pattern=Th(e)),fe.init(t,e)}),mf=k("$ZodISODate",(t,e)=>{e.pattern??(e.pattern=xh),fe.init(t,e)}),gf=k("$ZodISOTime",(t,e)=>{e.pattern??(e.pattern=_h(e)),fe.init(t,e)}),vf=k("$ZodISODuration",(t,e)=>{e.pattern??(e.pattern=uh),fe.init(t,e)}),bf=k("$ZodIPv4",(t,e)=>{e.pattern??(e.pattern=fh),fe.init(t,e),t._zod.onattach.push(n=>{let r=n._zod.bag;r.format="ipv4"})}),yf=k("$ZodIPv6",(t,e)=>{e.pattern??(e.pattern=mh),fe.init(t,e),t._zod.onattach.push(n=>{let r=n._zod.bag;r.format="ipv6"}),t._zod.check=n=>{try{new URL(`http://[${n.value}]`)}catch{n.issues.push({code:"invalid_format",format:"ipv6",input:n.value,inst:t,continue:!e.abort})}}}),wf=k("$ZodCIDRv4",(t,e)=>{e.pattern??(e.pattern=gh),fe.init(t,e)}),Ef=k("$ZodCIDRv6",(t,e)=>{e.pattern??(e.pattern=vh),fe.init(t,e),t._zod.check=n=>{let[r,o]=n.value.split("/");try{if(!o)throw new Error;let i=Number(o);if(`${i}`!==o)throw new Error;if(i<0||i>128)throw new Error;new URL(`http://[${r}]`)}catch{n.issues.push({code:"invalid_format",format:"cidrv6",input:n.value,inst:t,continue:!e.abort})}}});function xf(t){if(t==="")return!0;if(t.length%4!==0)return!1;try{return atob(t),!0}catch{return!1}}var Sf=k("$ZodBase64",(t,e)=>{e.pattern??(e.pattern=bh),fe.init(t,e),t._zod.onattach.push(n=>{n._zod.bag.contentEncoding="base64"}),t._zod.check=n=>{xf(n.value)||n.issues.push({code:"invalid_format",format:"base64",input:n.value,inst:t,continue:!e.abort})}});function LE(t){if(!fc.test(t))return!1;let e=t.replace(/[-_]/g,r=>r==="-"?"+":"/"),n=e.padEnd(Math.ceil(e.length/4)*4,"=");return xf(n)}var _f=k("$ZodBase64URL",(t,e)=>{e.pattern??(e.pattern=fc),fe.init(t,e),t._zod.onattach.push(n=>{n._zod.bag.contentEncoding="base64url"}),t._zod.check=n=>{LE(n.value)||n.issues.push({code:"invalid_format",format:"base64url",input:n.value,inst:t,continue:!e.abort})}}),Tf=k("$ZodE164",(t,e)=>{e.pattern??(e.pattern=wh),fe.init(t,e)});function DE(t,e=null){try{let n=t.split(".");if(n.length!==3)return!1;let[r]=n;if(!r)return!1;let o=JSON.parse(atob(r));return!("typ"in o&&o?.typ!=="JWT"||!o.alg||e&&(!("alg"in o)||o.alg!==e))}catch{return!1}}var Af=k("$ZodJWT",(t,e)=>{fe.init(t,e),t._zod.check=n=>{DE(n.value,e.alg)||n.issues.push({code:"invalid_format",format:"jwt",input:n.value,inst:t,continue:!e.abort})}});var bc=k("$ZodNumber",(t,e)=>{ce.init(t,e),t._zod.pattern=t._zod.bag.pattern??Ih,t._zod.parse=(n,r)=>{if(e.coerce)try{n.value=Number(n.value)}catch{}let o=n.value;if(typeof o=="number"&&!Number.isNaN(o)&&Number.isFinite(o))return n;let i=typeof o=="number"?Number.isNaN(o)?"NaN":Number.isFinite(o)?void 0:"Infinity":void 0;return n.issues.push({expected:"number",code:"invalid_type",input:o,inst:t,...i?{received:i}:{}}),n}}),kf=k("$ZodNumber",(t,e)=>{Mh.init(t,e),bc.init(t,e)}),If=k("$ZodBoolean",(t,e)=>{ce.init(t,e),t._zod.pattern=Rh,t._zod.parse=(n,r)=>{if(e.coerce)try{n.value=!!n.value}catch{}let o=n.value;return typeof o=="boolean"||n.issues.push({expected:"boolean",code:"invalid_type",input:o,inst:t}),n}});var Rf=k("$ZodAny",(t,e)=>{ce.init(t,e),t._zod.parse=n=>n}),Cf=k("$ZodUnknown",(t,e)=>{ce.init(t,e),t._zod.parse=n=>n}),Nf=k("$ZodNever",(t,e)=>{ce.init(t,e),t._zod.parse=(n,r)=>(n.issues.push({expected:"never",code:"invalid_type",input:n.value,inst:t}),n)});function Wh(t,e,n){t.issues.length&&e.issues.push(...yt(n,t.issues)),e.value[n]=t.value}var Of=k("$ZodArray",(t,e)=>{ce.init(t,e),t._zod.parse=(n,r)=>{let o=n.value;if(!Array.isArray(o))return n.issues.push({expected:"array",code:"invalid_type",input:o,inst:t}),n;n.value=Array(o.length);let i=[];for(let a=0;a<o.length;a++){let s=o[a],c=e.element._zod.run({value:s,issues:[]},r);c instanceof Promise?i.push(c.then(l=>Wh(l,n,a))):Wh(c,n,a)}return i.length?Promise.all(i).then(()=>n):n}});function Ai(t,e,n){t.issues.length&&e.issues.push(...yt(n,t.issues)),e.value[n]=t.value}function qh(t,e,n,r){t.issues.length?r[n]===void 0?n in r?e.value[n]=void 0:e.value[n]=t.value:e.issues.push(...yt(n,t.issues)):t.value===void 0?n in r&&(e.value[n]=void 0):e.value[n]=t.value}var Pf=k("$ZodObject",(t,e)=>{ce.init(t,e);let n=Ar(()=>{let f=Object.keys(e.shape);for(let h of f)if(!(e.shape[h]instanceof ce))throw new Error(`Invalid element at key "${h}": expected a Zod schema`);let m=ic(e.shape);return{shape:e.shape,keys:f,keySet:new Set(f),numKeys:f.length,optionalKeys:new Set(m)}});ie(t._zod,"propValues",()=>{let f=e.shape,m={};for(let h in f){let p=f[h]._zod;if(p.values){m[h]??(m[h]=new Set);for(let E of p.values)m[h].add(E)}}return m});let r=f=>{let m=new Ti(["shape","payload","ctx"]),h=n.value,p=y=>{let T=Kt(y);return`shape[${T}]._zod.run({ value: input[${T}], issues: [] }, ctx)`};m.write("const input = payload.value;");let E=Object.create(null),g=0;for(let y of h.keys)E[y]=`key_${g++}`;m.write("const newResult = {}");for(let y of h.keys)if(h.optionalKeys.has(y)){let T=E[y];m.write(`const ${T} = ${p(y)};`);let w=Kt(y);m.write(`
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
        `)}else{let T=E[y];m.write(`const ${T} = ${p(y)};`),m.write(`
          if (${T}.issues.length) payload.issues = payload.issues.concat(${T}.issues.map(iss => ({
            ...iss,
            path: iss.path ? [${Kt(y)}, ...iss.path] : [${Kt(y)}]
          })));`),m.write(`newResult[${Kt(y)}] = ${T}.value`)}m.write("payload.value = newResult;"),m.write("return payload;");let S=m.compile();return(y,T)=>S(f,y,T)},o,i=Fn,a=!yi.jitless,c=a&&rc.value,l=e.catchall,u;t._zod.parse=(f,m)=>{u??(u=n.value);let h=f.value;if(!i(h))return f.issues.push({expected:"object",code:"invalid_type",input:h,inst:t}),f;let p=[];if(a&&c&&m?.async===!1&&m.jitless!==!0)o||(o=r(e.shape)),f=o(f,m);else{f.value={};let T=u.shape;for(let w of u.keys){let _=T[w],b=_._zod.run({value:h[w],issues:[]},m),I=_._zod.optin==="optional"&&_._zod.optout==="optional";b instanceof Promise?p.push(b.then(z=>I?qh(z,f,w,h):Ai(z,f,w))):I?qh(b,f,w,h):Ai(b,f,w)}}if(!l)return p.length?Promise.all(p).then(()=>f):f;let E=[],g=u.keySet,S=l._zod,y=S.def.type;for(let T of Object.keys(h)){if(g.has(T))continue;if(y==="never"){E.push(T);continue}let w=S.run({value:h[T],issues:[]},m);w instanceof Promise?p.push(w.then(_=>Ai(_,f,T))):Ai(w,f,T)}return E.length&&f.issues.push({code:"unrecognized_keys",keys:E,input:h,inst:t}),p.length?Promise.all(p).then(()=>f):f}});function Yh(t,e,n,r){for(let o of t)if(o.issues.length===0)return e.value=o.value,e;return e.issues.push({code:"invalid_union",input:e.value,inst:n,errors:t.map(o=>o.issues.map(i=>st(i,r,Me())))}),e}var yc=k("$ZodUnion",(t,e)=>{ce.init(t,e),ie(t._zod,"optin",()=>e.options.some(n=>n._zod.optin==="optional")?"optional":void 0),ie(t._zod,"optout",()=>e.options.some(n=>n._zod.optout==="optional")?"optional":void 0),ie(t._zod,"values",()=>{if(e.options.every(n=>n._zod.values))return new Set(e.options.flatMap(n=>Array.from(n._zod.values)))}),ie(t._zod,"pattern",()=>{if(e.options.every(n=>n._zod.pattern)){let n=e.options.map(r=>r._zod.pattern);return new RegExp(`^(${n.map(r=>Ir(r.source)).join("|")})$`)}}),t._zod.parse=(n,r)=>{let o=!1,i=[];for(let a of e.options){let s=a._zod.run({value:n.value,issues:[]},r);if(s instanceof Promise)i.push(s),o=!0;else{if(s.issues.length===0)return s;i.push(s)}}return o?Promise.all(i).then(a=>Yh(a,n,t,r)):Yh(i,n,t,r)}}),Mf=k("$ZodDiscriminatedUnion",(t,e)=>{yc.init(t,e);let n=t._zod.parse;ie(t._zod,"propValues",()=>{let o={};for(let i of e.options){let a=i._zod.propValues;if(!a||Object.keys(a).length===0)throw new Error(`Invalid discriminated union option at index "${e.options.indexOf(i)}"`);for(let[s,c]of Object.entries(a)){o[s]||(o[s]=new Set);for(let l of c)o[s].add(l)}}return o});let r=Ar(()=>{let o=e.options,i=new Map;for(let a of o){let s=a._zod.propValues[e.discriminator];if(!s||s.size===0)throw new Error(`Invalid discriminated union option at index "${e.options.indexOf(a)}"`);for(let c of s){if(i.has(c))throw new Error(`Duplicate discriminator value "${String(c)}"`);i.set(c,a)}}return i});t._zod.parse=(o,i)=>{let a=o.value;if(!Fn(a))return o.issues.push({code:"invalid_type",expected:"object",input:a,inst:t}),o;let s=r.value.get(a?.[e.discriminator]);return s?s._zod.run(o,i):e.unionFallback?n(o,i):(o.issues.push({code:"invalid_union",errors:[],note:"No matching discriminator",input:a,path:[e.discriminator],inst:t}),o)}}),zf=k("$ZodIntersection",(t,e)=>{ce.init(t,e),t._zod.parse=(n,r)=>{let o=n.value,i=e.left._zod.run({value:o,issues:[]},r),a=e.right._zod.run({value:o,issues:[]},r);return i instanceof Promise||a instanceof Promise?Promise.all([i,a]).then(([c,l])=>Xh(n,c,l)):Xh(n,i,a)}});function vc(t,e){if(t===e)return{valid:!0,data:t};if(t instanceof Date&&e instanceof Date&&+t==+e)return{valid:!0,data:t};if(Gn(t)&&Gn(e)){let n=Object.keys(e),r=Object.keys(t).filter(i=>n.indexOf(i)!==-1),o={...t,...e};for(let i of r){let a=vc(t[i],e[i]);if(!a.valid)return{valid:!1,mergeErrorPath:[i,...a.mergeErrorPath]};o[i]=a.data}return{valid:!0,data:o}}if(Array.isArray(t)&&Array.isArray(e)){if(t.length!==e.length)return{valid:!1,mergeErrorPath:[]};let n=[];for(let r=0;r<t.length;r++){let o=t[r],i=e[r],a=vc(o,i);if(!a.valid)return{valid:!1,mergeErrorPath:[r,...a.mergeErrorPath]};n.push(a.data)}return{valid:!0,data:n}}return{valid:!1,mergeErrorPath:[]}}function Xh(t,e,n){if(e.issues.length&&t.issues.push(...e.issues),n.issues.length&&t.issues.push(...n.issues),Jt(t))return t;let r=vc(e.value,n.value);if(!r.valid)throw new Error(`Unmergable intersection. Error path: ${JSON.stringify(r.mergeErrorPath)}`);return t.value=r.data,t}var Lf=k("$ZodRecord",(t,e)=>{ce.init(t,e),t._zod.parse=(n,r)=>{let o=n.value;if(!Gn(o))return n.issues.push({expected:"record",code:"invalid_type",input:o,inst:t}),n;let i=[];if(e.keyType._zod.values){let a=e.keyType._zod.values;n.value={};for(let c of a)if(typeof c=="string"||typeof c=="number"||typeof c=="symbol"){let l=e.valueType._zod.run({value:o[c],issues:[]},r);l instanceof Promise?i.push(l.then(u=>{u.issues.length&&n.issues.push(...yt(c,u.issues)),n.value[c]=u.value})):(l.issues.length&&n.issues.push(...yt(c,l.issues)),n.value[c]=l.value)}let s;for(let c in o)a.has(c)||(s=s??[],s.push(c));s&&s.length>0&&n.issues.push({code:"unrecognized_keys",input:o,inst:t,keys:s})}else{n.value={};for(let a of Reflect.ownKeys(o)){if(a==="__proto__")continue;let s=e.keyType._zod.run({value:a,issues:[]},r);if(s instanceof Promise)throw new Error("Async schemas not supported in object keys currently");if(s.issues.length){n.issues.push({origin:"record",code:"invalid_key",issues:s.issues.map(l=>st(l,r,Me())),input:a,path:[a],inst:t}),n.value[s.value]=s.value;continue}let c=e.valueType._zod.run({value:o[a],issues:[]},r);c instanceof Promise?i.push(c.then(l=>{l.issues.length&&n.issues.push(...yt(a,l.issues)),n.value[s.value]=l.value})):(c.issues.length&&n.issues.push(...yt(a,c.issues)),n.value[s.value]=c.value)}}return i.length?Promise.all(i).then(()=>n):n}});var Df=k("$ZodEnum",(t,e)=>{ce.init(t,e);let n=Ql(e.entries);t._zod.values=new Set(n),t._zod.pattern=new RegExp(`^(${n.filter(r=>oc.has(typeof r)).map(r=>typeof r=="string"?Rt(r):r.toString()).join("|")})$`),t._zod.parse=(r,o)=>{let i=r.value;return t._zod.values.has(i)||r.issues.push({code:"invalid_value",values:n,input:i,inst:t}),r}}),$f=k("$ZodLiteral",(t,e)=>{ce.init(t,e),t._zod.values=new Set(e.values),t._zod.pattern=new RegExp(`^(${e.values.map(n=>typeof n=="string"?Rt(n):n?n.toString():String(n)).join("|")})$`),t._zod.parse=(n,r)=>{let o=n.value;return t._zod.values.has(o)||n.issues.push({code:"invalid_value",values:e.values,input:o,inst:t}),n}});var Uf=k("$ZodTransform",(t,e)=>{ce.init(t,e),t._zod.parse=(n,r)=>{let o=e.transform(n.value,n);if(r.async)return(o instanceof Promise?o:Promise.resolve(o)).then(a=>(n.value=a,n));if(o instanceof Promise)throw new St;return n.value=o,n}}),Hf=k("$ZodOptional",(t,e)=>{ce.init(t,e),t._zod.optin="optional",t._zod.optout="optional",ie(t._zod,"values",()=>e.innerType._zod.values?new Set([...e.innerType._zod.values,void 0]):void 0),ie(t._zod,"pattern",()=>{let n=e.innerType._zod.pattern;return n?new RegExp(`^(${Ir(n.source)})?$`):void 0}),t._zod.parse=(n,r)=>e.innerType._zod.optin==="optional"?e.innerType._zod.run(n,r):n.value===void 0?n:e.innerType._zod.run(n,r)}),Ff=k("$ZodNullable",(t,e)=>{ce.init(t,e),ie(t._zod,"optin",()=>e.innerType._zod.optin),ie(t._zod,"optout",()=>e.innerType._zod.optout),ie(t._zod,"pattern",()=>{let n=e.innerType._zod.pattern;return n?new RegExp(`^(${Ir(n.source)}|null)$`):void 0}),ie(t._zod,"values",()=>e.innerType._zod.values?new Set([...e.innerType._zod.values,null]):void 0),t._zod.parse=(n,r)=>n.value===null?n:e.innerType._zod.run(n,r)}),Gf=k("$ZodDefault",(t,e)=>{ce.init(t,e),t._zod.optin="optional",ie(t._zod,"values",()=>e.innerType._zod.values),t._zod.parse=(n,r)=>{if(n.value===void 0)return n.value=e.defaultValue,n;let o=e.innerType._zod.run(n,r);return o instanceof Promise?o.then(i=>Kh(i,e)):Kh(o,e)}});function Kh(t,e){return t.value===void 0&&(t.value=e.defaultValue),t}var Zf=k("$ZodPrefault",(t,e)=>{ce.init(t,e),t._zod.optin="optional",ie(t._zod,"values",()=>e.innerType._zod.values),t._zod.parse=(n,r)=>(n.value===void 0&&(n.value=e.defaultValue),e.innerType._zod.run(n,r))}),Bf=k("$ZodNonOptional",(t,e)=>{ce.init(t,e),ie(t._zod,"values",()=>{let n=e.innerType._zod.values;return n?new Set([...n].filter(r=>r!==void 0)):void 0}),t._zod.parse=(n,r)=>{let o=e.innerType._zod.run(n,r);return o instanceof Promise?o.then(i=>Jh(i,t)):Jh(o,t)}});function Jh(t,e){return!t.issues.length&&t.value===void 0&&t.issues.push({code:"invalid_type",expected:"nonoptional",input:t.value,inst:e}),t}var Vf=k("$ZodCatch",(t,e)=>{ce.init(t,e),t._zod.optin="optional",ie(t._zod,"optout",()=>e.innerType._zod.optout),ie(t._zod,"values",()=>e.innerType._zod.values),t._zod.parse=(n,r)=>{let o=e.innerType._zod.run(n,r);return o instanceof Promise?o.then(i=>(n.value=i.value,i.issues.length&&(n.value=e.catchValue({...n,error:{issues:i.issues.map(a=>st(a,r,Me()))},input:n.value}),n.issues=[]),n)):(n.value=o.value,o.issues.length&&(n.value=e.catchValue({...n,error:{issues:o.issues.map(i=>st(i,r,Me()))},input:n.value}),n.issues=[]),n)}});var jf=k("$ZodPipe",(t,e)=>{ce.init(t,e),ie(t._zod,"values",()=>e.in._zod.values),ie(t._zod,"optin",()=>e.in._zod.optin),ie(t._zod,"optout",()=>e.out._zod.optout),t._zod.parse=(n,r)=>{let o=e.in._zod.run(n,r);return o instanceof Promise?o.then(i=>Qh(i,e,r)):Qh(o,e,r)}});function Qh(t,e,n){return Jt(t)?t:e.out._zod.run({value:t.value,issues:t.issues},n)}var Wf=k("$ZodReadonly",(t,e)=>{ce.init(t,e),ie(t._zod,"propValues",()=>e.innerType._zod.propValues),ie(t._zod,"values",()=>e.innerType._zod.values),ie(t._zod,"optin",()=>e.innerType._zod.optin),ie(t._zod,"optout",()=>e.innerType._zod.optout),t._zod.parse=(n,r)=>{let o=e.innerType._zod.run(n,r);return o instanceof Promise?o.then(ef):ef(o)}});function ef(t){return t.value=Object.freeze(t.value),t}var qf=k("$ZodLazy",(t,e)=>{ce.init(t,e),ie(t._zod,"innerType",()=>e.getter()),ie(t._zod,"pattern",()=>t._zod.innerType._zod.pattern),ie(t._zod,"propValues",()=>t._zod.innerType._zod.propValues),ie(t._zod,"optin",()=>t._zod.innerType._zod.optin),ie(t._zod,"optout",()=>t._zod.innerType._zod.optout),t._zod.parse=(n,r)=>t._zod.innerType._zod.run(n,r)}),Yf=k("$ZodCustom",(t,e)=>{De.init(t,e),ce.init(t,e),t._zod.parse=(n,r)=>n,t._zod.check=n=>{let r=n.value,o=e.fn(r);if(o instanceof Promise)return o.then(i=>tf(i,n,r,t));tf(o,n,r,t)}});function tf(t,e,n,r){if(!t){let o={code:"custom",input:n,inst:r,path:[...r._zod.def.path??[]],continue:!r._zod.def.abort};r._zod.def.params&&(o.params=r._zod.def.params),e.issues.push(sc(o))}}var $E=t=>{let e=typeof t;switch(e){case"number":return Number.isNaN(t)?"NaN":"number";case"object":{if(Array.isArray(t))return"array";if(t===null)return"null";if(Object.getPrototypeOf(t)!==Object.prototype&&t.constructor)return t.constructor.name}}return e},UE=()=>{let t={string:{unit:"characters",verb:"to have"},file:{unit:"bytes",verb:"to have"},array:{unit:"items",verb:"to have"},set:{unit:"items",verb:"to have"}};function e(r){return t[r]??null}let n={regex:"input",email:"email address",url:"URL",emoji:"emoji",uuid:"UUID",uuidv4:"UUIDv4",uuidv6:"UUIDv6",nanoid:"nanoid",guid:"GUID",cuid:"cuid",cuid2:"cuid2",ulid:"ULID",xid:"XID",ksuid:"KSUID",datetime:"ISO datetime",date:"ISO date",time:"ISO time",duration:"ISO duration",ipv4:"IPv4 address",ipv6:"IPv6 address",cidrv4:"IPv4 range",cidrv6:"IPv6 range",base64:"base64-encoded string",base64url:"base64url-encoded string",json_string:"JSON string",e164:"E.164 number",jwt:"JWT",template_literal:"input"};return r=>{switch(r.code){case"invalid_type":return`Invalid input: expected ${r.expected}, received ${$E(r.input)}`;case"invalid_value":return r.values.length===1?`Invalid input: expected ${xi(r.values[0])}`:`Invalid option: expected one of ${wi(r.values,"|")}`;case"too_big":{let o=r.inclusive?"<=":"<",i=e(r.origin);return i?`Too big: expected ${r.origin??"value"} to have ${o}${r.maximum.toString()} ${i.unit??"elements"}`:`Too big: expected ${r.origin??"value"} to be ${o}${r.maximum.toString()}`}case"too_small":{let o=r.inclusive?">=":">",i=e(r.origin);return i?`Too small: expected ${r.origin} to have ${o}${r.minimum.toString()} ${i.unit}`:`Too small: expected ${r.origin} to be ${o}${r.minimum.toString()}`}case"invalid_format":{let o=r;return o.format==="starts_with"?`Invalid string: must start with "${o.prefix}"`:o.format==="ends_with"?`Invalid string: must end with "${o.suffix}"`:o.format==="includes"?`Invalid string: must include "${o.includes}"`:o.format==="regex"?`Invalid string: must match pattern ${o.pattern}`:`Invalid ${n[o.format]??r.format}`}case"not_multiple_of":return`Invalid number: must be a multiple of ${r.divisor}`;case"unrecognized_keys":return`Unrecognized key${r.keys.length>1?"s":""}: ${wi(r.keys,", ")}`;case"invalid_key":return`Invalid key in ${r.origin}`;case"invalid_union":return"Invalid input";case"invalid_element":return`Invalid value in ${r.origin}`;default:return"Invalid input"}}};function Zn(){return{localeError:UE()}}var wc=class{constructor(){this._map=new Map,this._idmap=new Map}add(e,...n){let r=n[0];if(this._map.set(e,r),r&&typeof r=="object"&&"id"in r){if(this._idmap.has(r.id))throw new Error(`ID ${r.id} already exists in the registry`);this._idmap.set(r.id,e)}return this}clear(){return this._map=new Map,this._idmap=new Map,this}remove(e){let n=this._map.get(e);return n&&typeof n=="object"&&"id"in n&&this._idmap.delete(n.id),this._map.delete(e),this}get(e){let n=e._zod.parent;if(n){let r={...this.get(n)??{}};return delete r.id,{...r,...this._map.get(e)}}return this._map.get(e)}has(e){return this._map.has(e)}};function Xf(){return new wc}var Bn=Xf();function Kf(t,e){return new t({type:"string",...G(e)})}function Jf(t,e){return new t({type:"string",format:"email",check:"string_format",abort:!1,...G(e)})}function Ec(t,e){return new t({type:"string",format:"guid",check:"string_format",abort:!1,...G(e)})}function Qf(t,e){return new t({type:"string",format:"uuid",check:"string_format",abort:!1,...G(e)})}function em(t,e){return new t({type:"string",format:"uuid",check:"string_format",abort:!1,version:"v4",...G(e)})}function tm(t,e){return new t({type:"string",format:"uuid",check:"string_format",abort:!1,version:"v6",...G(e)})}function nm(t,e){return new t({type:"string",format:"uuid",check:"string_format",abort:!1,version:"v7",...G(e)})}function rm(t,e){return new t({type:"string",format:"url",check:"string_format",abort:!1,...G(e)})}function om(t,e){return new t({type:"string",format:"emoji",check:"string_format",abort:!1,...G(e)})}function im(t,e){return new t({type:"string",format:"nanoid",check:"string_format",abort:!1,...G(e)})}function am(t,e){return new t({type:"string",format:"cuid",check:"string_format",abort:!1,...G(e)})}function sm(t,e){return new t({type:"string",format:"cuid2",check:"string_format",abort:!1,...G(e)})}function lm(t,e){return new t({type:"string",format:"ulid",check:"string_format",abort:!1,...G(e)})}function cm(t,e){return new t({type:"string",format:"xid",check:"string_format",abort:!1,...G(e)})}function um(t,e){return new t({type:"string",format:"ksuid",check:"string_format",abort:!1,...G(e)})}function dm(t,e){return new t({type:"string",format:"ipv4",check:"string_format",abort:!1,...G(e)})}function pm(t,e){return new t({type:"string",format:"ipv6",check:"string_format",abort:!1,...G(e)})}function hm(t,e){return new t({type:"string",format:"cidrv4",check:"string_format",abort:!1,...G(e)})}function fm(t,e){return new t({type:"string",format:"cidrv6",check:"string_format",abort:!1,...G(e)})}function mm(t,e){return new t({type:"string",format:"base64",check:"string_format",abort:!1,...G(e)})}function gm(t,e){return new t({type:"string",format:"base64url",check:"string_format",abort:!1,...G(e)})}function vm(t,e){return new t({type:"string",format:"e164",check:"string_format",abort:!1,...G(e)})}function bm(t,e){return new t({type:"string",format:"jwt",check:"string_format",abort:!1,...G(e)})}function ym(t,e){return new t({type:"string",format:"datetime",check:"string_format",offset:!1,local:!1,precision:null,...G(e)})}function wm(t,e){return new t({type:"string",format:"date",check:"string_format",...G(e)})}function Em(t,e){return new t({type:"string",format:"time",check:"string_format",precision:null,...G(e)})}function xm(t,e){return new t({type:"string",format:"duration",check:"string_format",...G(e)})}function Sm(t,e){return new t({type:"number",check:"number_format",abort:!1,format:"safeint",...G(e)})}function _m(t,e){return new t({type:"boolean",...G(e)})}function Tm(t){return new t({type:"any"})}function Am(t){return new t({type:"unknown"})}function km(t,e){return new t({type:"never",...G(e)})}function Ii(t,e){return new mc({check:"less_than",...G(e),value:t,inclusive:!1})}function Nr(t,e){return new mc({check:"less_than",...G(e),value:t,inclusive:!0})}function Ri(t,e){return new gc({check:"greater_than",...G(e),value:t,inclusive:!1})}function Or(t,e){return new gc({check:"greater_than",...G(e),value:t,inclusive:!0})}function Ci(t,e){return new Ph({check:"multiple_of",...G(e),value:t})}function Ni(t,e){return new zh({check:"max_length",...G(e),maximum:t})}function Vn(t,e){return new Lh({check:"min_length",...G(e),minimum:t})}function Oi(t,e){return new Dh({check:"length_equals",...G(e),length:t})}function xc(t,e){return new $h({check:"string_format",format:"regex",...G(e),pattern:t})}function Sc(t){return new Uh({check:"string_format",format:"lowercase",...G(t)})}function _c(t){return new Hh({check:"string_format",format:"uppercase",...G(t)})}function Tc(t,e){return new Fh({check:"string_format",format:"includes",...G(e),includes:t})}function Ac(t,e){return new Gh({check:"string_format",format:"starts_with",...G(e),prefix:t})}function kc(t,e){return new Zh({check:"string_format",format:"ends_with",...G(e),suffix:t})}function Qt(t){return new Bh({check:"overwrite",tx:t})}function Ic(t){return Qt(e=>e.normalize(t))}function Rc(){return Qt(t=>t.trim())}function Cc(){return Qt(t=>t.toLowerCase())}function Nc(){return Qt(t=>t.toUpperCase())}function Im(t,e,n){return new t({type:"array",element:e,...G(n)})}function Rm(t,e,n){let r=G(n);return r.abort??(r.abort=!0),new t({type:"custom",check:"custom",fn:e,...r})}function Cm(t,e,n){return new t({type:"custom",check:"custom",fn:e,...G(n)})}var jE=k("ZodISODateTime",(t,e)=>{ff.init(t,e),be.init(t,e)});function Nm(t){return ym(jE,t)}var WE=k("ZodISODate",(t,e)=>{mf.init(t,e),be.init(t,e)});function Om(t){return wm(WE,t)}var qE=k("ZodISOTime",(t,e)=>{gf.init(t,e),be.init(t,e)});function Pm(t){return Em(qE,t)}var YE=k("ZodISODuration",(t,e)=>{vf.init(t,e),be.init(t,e)});function Mm(t){return xm(YE,t)}var Lm=(t,e)=>{Si.init(t,e),t.name="ZodError",Object.defineProperties(t,{format:{value:n=>uc(t,n)},flatten:{value:n=>cc(t,n)},addIssue:{value:n=>t.issues.push(n)},addIssues:{value:n=>t.issues.push(...n)},isEmpty:{get(){return t.issues.length===0}}})},V1=k("ZodError",Lm),Mr=k("ZodError",Lm,{Parent:Error});var Dm=eh(Mr),$m=th(Mr),Um=dc(Mr),Hm=pc(Mr);var ye=k("ZodType",(t,e)=>(ce.init(t,e),t.def=e,Object.defineProperty(t,"_def",{value:e}),t.check=(...n)=>t.clone({...e,checks:[...e.checks??[],...n.map(r=>typeof r=="function"?{_zod:{check:r,def:{check:"custom"},onattach:[]}}:r)]}),t.clone=(n,r)=>at(t,n,r),t.brand=()=>t,t.register=((n,r)=>(n.add(t,r),t)),t.parse=(n,r)=>Dm(t,n,r,{callee:t.parse}),t.safeParse=(n,r)=>Um(t,n,r),t.parseAsync=async(n,r)=>$m(t,n,r,{callee:t.parseAsync}),t.safeParseAsync=async(n,r)=>Hm(t,n,r),t.spa=t.safeParseAsync,t.refine=(n,r)=>t.check(zx(n,r)),t.superRefine=n=>t.check(Lx(n)),t.overwrite=n=>t.check(Qt(n)),t.optional=()=>Gm(t),t.nullable=()=>Zm(t),t.nullish=()=>Gm(Zm(t)),t.nonoptional=n=>Nx(t,n),t.array=()=>Ae(t),t.or=n=>zr([t,n]),t.and=n=>Tx(t,n),t.transform=n=>Bm(t,kx(n)),t.default=n=>Ix(t,n),t.prefault=n=>Cx(t,n),t.catch=n=>Ox(t,n),t.pipe=n=>Bm(t,n),t.readonly=()=>Px(t),t.describe=n=>{let r=t.clone();return Bn.add(r,{description:n}),r},Object.defineProperty(t,"description",{get(){return Bn.get(t)?.description},configurable:!0}),t.meta=(...n)=>{if(n.length===0)return Bn.get(t);let r=t.clone();return Bn.add(r,n[0]),r},t.isOptional=()=>t.safeParse(void 0).success,t.isNullable=()=>t.safeParse(null).success,t)),Vm=k("_ZodString",(t,e)=>{ki.init(t,e),ye.init(t,e);let n=t._zod.bag;t.format=n.format??null,t.minLength=n.minimum??null,t.maxLength=n.maximum??null,t.regex=(...r)=>t.check(xc(...r)),t.includes=(...r)=>t.check(Tc(...r)),t.startsWith=(...r)=>t.check(Ac(...r)),t.endsWith=(...r)=>t.check(kc(...r)),t.min=(...r)=>t.check(Vn(...r)),t.max=(...r)=>t.check(Ni(...r)),t.length=(...r)=>t.check(Oi(...r)),t.nonempty=(...r)=>t.check(Vn(1,...r)),t.lowercase=r=>t.check(Sc(r)),t.uppercase=r=>t.check(_c(r)),t.trim=()=>t.check(Rc()),t.normalize=(...r)=>t.check(Ic(...r)),t.toLowerCase=()=>t.check(Cc()),t.toUpperCase=()=>t.check(Nc())}),JE=k("ZodString",(t,e)=>{ki.init(t,e),Vm.init(t,e),t.email=n=>t.check(Jf(QE,n)),t.url=n=>t.check(rm(ex,n)),t.jwt=n=>t.check(bm(mx,n)),t.emoji=n=>t.check(om(tx,n)),t.guid=n=>t.check(Ec(Fm,n)),t.uuid=n=>t.check(Qf(Pi,n)),t.uuidv4=n=>t.check(em(Pi,n)),t.uuidv6=n=>t.check(tm(Pi,n)),t.uuidv7=n=>t.check(nm(Pi,n)),t.nanoid=n=>t.check(im(nx,n)),t.guid=n=>t.check(Ec(Fm,n)),t.cuid=n=>t.check(am(rx,n)),t.cuid2=n=>t.check(sm(ox,n)),t.ulid=n=>t.check(lm(ix,n)),t.base64=n=>t.check(mm(px,n)),t.base64url=n=>t.check(gm(hx,n)),t.xid=n=>t.check(cm(ax,n)),t.ksuid=n=>t.check(um(sx,n)),t.ipv4=n=>t.check(dm(lx,n)),t.ipv6=n=>t.check(pm(cx,n)),t.cidrv4=n=>t.check(hm(ux,n)),t.cidrv6=n=>t.check(fm(dx,n)),t.e164=n=>t.check(vm(fx,n)),t.datetime=n=>t.check(Nm(n)),t.date=n=>t.check(Om(n)),t.time=n=>t.check(Pm(n)),t.duration=n=>t.check(Mm(n))});function A(t){return Kf(JE,t)}var be=k("ZodStringFormat",(t,e)=>{fe.init(t,e),Vm.init(t,e)}),QE=k("ZodEmail",(t,e)=>{of.init(t,e),be.init(t,e)});var Fm=k("ZodGUID",(t,e)=>{nf.init(t,e),be.init(t,e)});var Pi=k("ZodUUID",(t,e)=>{rf.init(t,e),be.init(t,e)});var ex=k("ZodURL",(t,e)=>{af.init(t,e),be.init(t,e)});var tx=k("ZodEmoji",(t,e)=>{sf.init(t,e),be.init(t,e)});var nx=k("ZodNanoID",(t,e)=>{lf.init(t,e),be.init(t,e)});var rx=k("ZodCUID",(t,e)=>{cf.init(t,e),be.init(t,e)});var ox=k("ZodCUID2",(t,e)=>{uf.init(t,e),be.init(t,e)});var ix=k("ZodULID",(t,e)=>{df.init(t,e),be.init(t,e)});var ax=k("ZodXID",(t,e)=>{pf.init(t,e),be.init(t,e)});var sx=k("ZodKSUID",(t,e)=>{hf.init(t,e),be.init(t,e)});var lx=k("ZodIPv4",(t,e)=>{bf.init(t,e),be.init(t,e)});var cx=k("ZodIPv6",(t,e)=>{yf.init(t,e),be.init(t,e)});var ux=k("ZodCIDRv4",(t,e)=>{wf.init(t,e),be.init(t,e)});var dx=k("ZodCIDRv6",(t,e)=>{Ef.init(t,e),be.init(t,e)});var px=k("ZodBase64",(t,e)=>{Sf.init(t,e),be.init(t,e)});var hx=k("ZodBase64URL",(t,e)=>{_f.init(t,e),be.init(t,e)});var fx=k("ZodE164",(t,e)=>{Tf.init(t,e),be.init(t,e)});var mx=k("ZodJWT",(t,e)=>{Af.init(t,e),be.init(t,e)});var gx=k("ZodNumber",(t,e)=>{bc.init(t,e),ye.init(t,e),t.gt=(r,o)=>t.check(Ri(r,o)),t.gte=(r,o)=>t.check(Or(r,o)),t.min=(r,o)=>t.check(Or(r,o)),t.lt=(r,o)=>t.check(Ii(r,o)),t.lte=(r,o)=>t.check(Nr(r,o)),t.max=(r,o)=>t.check(Nr(r,o)),t.int=r=>t.check(j(r)),t.safe=r=>t.check(j(r)),t.positive=r=>t.check(Ri(0,r)),t.nonnegative=r=>t.check(Or(0,r)),t.negative=r=>t.check(Ii(0,r)),t.nonpositive=r=>t.check(Nr(0,r)),t.multipleOf=(r,o)=>t.check(Ci(r,o)),t.step=(r,o)=>t.check(Ci(r,o)),t.finite=()=>t;let n=t._zod.bag;t.minValue=Math.max(n.minimum??Number.NEGATIVE_INFINITY,n.exclusiveMinimum??Number.NEGATIVE_INFINITY)??null,t.maxValue=Math.min(n.maximum??Number.POSITIVE_INFINITY,n.exclusiveMaximum??Number.POSITIVE_INFINITY)??null,t.isInt=(n.format??"").includes("int")||Number.isSafeInteger(n.multipleOf??.5),t.isFinite=!0,t.format=n.format??null});var vx=k("ZodNumberFormat",(t,e)=>{kf.init(t,e),gx.init(t,e)});function j(t){return Sm(vx,t)}var bx=k("ZodBoolean",(t,e)=>{If.init(t,e),ye.init(t,e)});function K(t){return _m(bx,t)}var yx=k("ZodAny",(t,e)=>{Rf.init(t,e),ye.init(t,e)});function Z(){return Tm(yx)}var wx=k("ZodUnknown",(t,e)=>{Cf.init(t,e),ye.init(t,e)});function Oc(){return Am(wx)}var Ex=k("ZodNever",(t,e)=>{Nf.init(t,e),ye.init(t,e)});function xx(t){return km(Ex,t)}var Mi=k("ZodArray",(t,e)=>{Of.init(t,e),ye.init(t,e),t.element=e.element,t.min=(n,r)=>t.check(Vn(n,r)),t.nonempty=n=>t.check(Vn(1,n)),t.max=(n,r)=>t.check(Ni(n,r)),t.length=(n,r)=>t.check(Oi(n,r)),t.unwrap=()=>t.element});function Ae(t,e){return Im(Mi,t,e)}var jn=k("ZodObject",(t,e)=>{Pf.init(t,e),ye.init(t,e),ae.defineLazy(t,"shape",()=>e.shape),t.keyof=()=>en(Object.keys(t._zod.def.shape)),t.catchall=n=>t.clone({...t._zod.def,catchall:n}),t.passthrough=()=>t.clone({...t._zod.def,catchall:Oc()}),t.loose=()=>t.clone({...t._zod.def,catchall:Oc()}),t.strict=()=>t.clone({...t._zod.def,catchall:xx()}),t.strip=()=>t.clone({...t._zod.def,catchall:void 0}),t.extend=n=>ae.extend(t,n),t.merge=n=>ae.merge(t,n),t.pick=n=>ae.pick(t,n),t.omit=n=>ae.omit(t,n),t.partial=(...n)=>ae.partial(Li,t,n[0]),t.required=(...n)=>ae.required(Wm,t,n[0])});function L(t,e){return new jn({type:"object",get shape(){return ae.assignProp(this,"shape",{...t}),this.shape},catchall:Oc(),...ae.normalizeParams(e)})}var zi=k("ZodUnion",(t,e)=>{yc.init(t,e),ye.init(t,e),t.options=e.options});function zr(t,e){return new zi({type:"union",options:t,...ae.normalizeParams(e)})}var Sx=k("ZodDiscriminatedUnion",(t,e)=>{zi.init(t,e),Mf.init(t,e)});function Ct(t,e,n){return new Sx({type:"union",options:e,discriminator:t,...ae.normalizeParams(n)})}var _x=k("ZodIntersection",(t,e)=>{zf.init(t,e),ye.init(t,e)});function Tx(t,e){return new _x({type:"intersection",left:t,right:e})}var jm=k("ZodRecord",(t,e)=>{Lf.init(t,e),ye.init(t,e),t.keyType=e.keyType,t.valueType=e.valueType});var Pc=k("ZodEnum",(t,e)=>{Df.init(t,e),ye.init(t,e),t.enum=e.entries,t.options=Object.values(e.entries);let n=new Set(Object.keys(e.entries));t.extract=(r,o)=>{let i={};for(let a of r)if(n.has(a))i[a]=e.entries[a];else throw new Error(`Key ${a} not found in enum`);return new Pc({...e,checks:[],...ae.normalizeParams(o),entries:i})},t.exclude=(r,o)=>{let i={...e.entries};for(let a of r)if(n.has(a))delete i[a];else throw new Error(`Key ${a} not found in enum`);return new Pc({...e,checks:[],...ae.normalizeParams(o),entries:i})}});function en(t,e){let n=Array.isArray(t)?Object.fromEntries(t.map(r=>[r,r])):t;return new Pc({type:"enum",entries:n,...ae.normalizeParams(e)})}var Mc=k("ZodLiteral",(t,e)=>{$f.init(t,e),ye.init(t,e),t.values=new Set(e.values),Object.defineProperty(t,"value",{get(){if(e.values.length>1)throw new Error("This schema contains multiple valid literal values. Use `.values` instead.");return e.values[0]}})});function $(t,e){return new Mc({type:"literal",values:Array.isArray(t)?t:[t],...ae.normalizeParams(e)})}var Ax=k("ZodTransform",(t,e)=>{Uf.init(t,e),ye.init(t,e),t._zod.parse=(n,r)=>{n.addIssue=i=>{if(typeof i=="string")n.issues.push(ae.issue(i,n.value,e));else{let a=i;a.fatal&&(a.continue=!1),a.code??(a.code="custom"),a.input??(a.input=n.value),a.inst??(a.inst=t),a.continue??(a.continue=!0),n.issues.push(ae.issue(a))}};let o=e.transform(n.value,n);return o instanceof Promise?o.then(i=>(n.value=i,n)):(n.value=o,n)}});function kx(t){return new Ax({type:"transform",transform:t})}var Li=k("ZodOptional",(t,e)=>{Hf.init(t,e),ye.init(t,e),t.unwrap=()=>t._zod.def.innerType});function Gm(t){return new Li({type:"optional",innerType:t})}var zc=k("ZodNullable",(t,e)=>{Ff.init(t,e),ye.init(t,e),t.unwrap=()=>t._zod.def.innerType});function Zm(t){return new zc({type:"nullable",innerType:t})}var Lc=k("ZodDefault",(t,e)=>{Gf.init(t,e),ye.init(t,e),t.unwrap=()=>t._zod.def.innerType,t.removeDefault=t.unwrap});function Ix(t,e){return new Lc({type:"default",innerType:t,get defaultValue(){return typeof e=="function"?e():e}})}var Rx=k("ZodPrefault",(t,e)=>{Zf.init(t,e),ye.init(t,e),t.unwrap=()=>t._zod.def.innerType});function Cx(t,e){return new Rx({type:"prefault",innerType:t,get defaultValue(){return typeof e=="function"?e():e}})}var Wm=k("ZodNonOptional",(t,e)=>{Bf.init(t,e),ye.init(t,e),t.unwrap=()=>t._zod.def.innerType});function Nx(t,e){return new Wm({type:"nonoptional",innerType:t,...ae.normalizeParams(e)})}var Dc=k("ZodCatch",(t,e)=>{Vf.init(t,e),ye.init(t,e),t.unwrap=()=>t._zod.def.innerType,t.removeCatch=t.unwrap});function Ox(t,e){return new Dc({type:"catch",innerType:t,catchValue:typeof e=="function"?e:()=>e})}var $c=k("ZodPipe",(t,e)=>{jf.init(t,e),ye.init(t,e),t.in=e.in,t.out=e.out});function Bm(t,e){return new $c({type:"pipe",in:t,out:e})}var Uc=k("ZodReadonly",(t,e)=>{Wf.init(t,e),ye.init(t,e)});function Px(t){return new Uc({type:"readonly",innerType:t})}var qm=k("ZodLazy",(t,e)=>{qf.init(t,e),ye.init(t,e),t.unwrap=()=>t._zod.def.getter()});var Ym=k("ZodCustom",(t,e)=>{Yf.init(t,e),ye.init(t,e)});function Mx(t){let e=new De({check:"custom"});return e._zod.check=t,e}function Wn(t,e){return Rm(Ym,t??(()=>!0),e)}function zx(t,e={}){return Cm(Ym,t,e)}function Lx(t){let e=Mx(n=>(n.addIssue=r=>{if(typeof r=="string")n.issues.push(ae.issue(r,n.value,e._zod.def));else{let o=r;o.fatal&&(o.continue=!1),o.code??(o.code="custom"),o.input??(o.input=n.value),o.inst??(o.inst=e),o.continue??(o.continue=!e._zod.def.abort),n.issues.push(ae.issue(o))}},t(n.value,n)));return e}Me(Zn());var $x=en(v),B=Wn(t=>typeof t=="object"&&t!==null&&!Array.isArray(t)),Y=A(),Xm=en(["developer","system","assistant","user"]),Ux=L({type:$(v.TEXT_MESSAGE_START),timestamp:j().min(-9007199254740991).max(9007199254740991).optional(),rawEvent:Z().refine(t=>t!==null).optional(),metadata:B.optional(),subagentRunId:Y.optional(),messageId:A(),role:Xm.optional(),name:A().optional()}),Hx=L({type:$(v.TEXT_MESSAGE_CONTENT),timestamp:j().min(-9007199254740991).max(9007199254740991).optional(),rawEvent:Z().refine(t=>t!==null).optional(),metadata:B.optional(),subagentRunId:Y.optional(),messageId:A(),delta:A()}),Fx=L({type:$(v.TEXT_MESSAGE_END),timestamp:j().min(-9007199254740991).max(9007199254740991).optional(),rawEvent:Z().refine(t=>t!==null).optional(),metadata:B.optional(),subagentRunId:Y.optional(),messageId:A()}),Hc=L({type:$(v.TEXT_MESSAGE_CHUNK),timestamp:j().min(-9007199254740991).max(9007199254740991).optional(),rawEvent:Z().refine(t=>t!==null).optional(),metadata:B.optional(),subagentRunId:Y.optional(),messageId:A().optional(),role:Xm.optional(),delta:A().optional(),name:A().optional()}),Gx=L({type:$(v.TOOL_CALL_START),timestamp:j().min(-9007199254740991).max(9007199254740991).optional(),rawEvent:Z().refine(t=>t!==null).optional(),metadata:B.optional(),subagentRunId:Y.optional(),toolCallId:A(),toolCallName:A(),parentMessageId:A().optional()}),Zx=L({type:$(v.TOOL_CALL_ARGS),timestamp:j().min(-9007199254740991).max(9007199254740991).optional(),rawEvent:Z().refine(t=>t!==null).optional(),metadata:B.optional(),subagentRunId:Y.optional(),toolCallId:A(),delta:A()}),Bx=L({type:$(v.TOOL_CALL_END),timestamp:j().min(-9007199254740991).max(9007199254740991).optional(),rawEvent:Z().refine(t=>t!==null).optional(),metadata:B.optional(),subagentRunId:Y.optional(),toolCallId:A()}),Fc=L({type:$(v.TOOL_CALL_CHUNK),timestamp:j().min(-9007199254740991).max(9007199254740991).optional(),rawEvent:Z().refine(t=>t!==null).optional(),metadata:B.optional(),subagentRunId:Y.optional(),toolCallId:A().optional(),toolCallName:A().optional(),parentMessageId:A().optional(),delta:A().optional()}),Vx=L({type:$("text"),id:A().optional(),text:A(),metadata:Z().refine(t=>t!==null).optional()}),jx=L({type:$("data"),value:A(),mimeType:A()}),Wx=L({type:$("url"),value:A(),mimeType:A().optional()}),qx=L({type:$("file"),value:A(),provider:A().optional(),mimeType:A().optional()}),Di=Ct("type",[jx,Wx,qx]),Yx=L({type:$("image"),id:A().optional(),source:Di,metadata:Z().refine(t=>t!==null).optional()}),Xx=L({type:$("audio"),id:A().optional(),source:Di,metadata:Z().refine(t=>t!==null).optional()}),Kx=L({type:$("video"),id:A().optional(),source:Di,metadata:Z().refine(t=>t!==null).optional()}),Jx=L({type:$("document"),id:A().optional(),source:Di,metadata:Z().refine(t=>t!==null).optional()}),Gc=Ct("type",[Vx,Yx,Xx,Kx,Jx]),Qx=L({type:$(v.TOOL_CALL_RESULT),timestamp:j().min(-9007199254740991).max(9007199254740991).optional(),rawEvent:Z().refine(t=>t!==null).optional(),metadata:B.optional(),subagentRunId:Y.optional(),messageId:A(),toolCallId:A(),content:zr([A(),Ae(Gc)]),role:$("tool").optional()}),Km=Z(),eS=L({type:$(v.STATE_SNAPSHOT),timestamp:j().min(-9007199254740991).max(9007199254740991).optional(),rawEvent:Z().refine(t=>t!==null).optional(),metadata:B.optional(),subagentRunId:Y.optional(),snapshot:Km.refine(t=>t!==void 0)}),Nt=A().regex(new RegExp("^(/([^/~]|~[01])*)*$")),tS=L({op:$("add"),path:Nt,value:Z().refine(t=>t!==void 0)}).meta({specOpen:!0}),nS=L({op:$("remove"),path:Nt}).meta({specOpen:!0}),rS=L({op:$("replace"),path:Nt,value:Z().refine(t=>t!==void 0)}).meta({specOpen:!0}),oS=L({op:$("move"),from:Nt,path:Nt}).meta({specOpen:!0}),iS=L({op:$("copy"),from:Nt,path:Nt}).meta({specOpen:!0}),aS=L({op:$("test"),path:Nt,value:Z().refine(t=>t!==void 0)}).meta({specOpen:!0}),sS=Ct("op",[tS,nS,rS,oS,iS,aS]),Jm=Ae(sS),lS=L({type:$(v.STATE_DELTA),timestamp:j().min(-9007199254740991).max(9007199254740991).optional(),rawEvent:Z().refine(t=>t!==null).optional(),metadata:B.optional(),subagentRunId:Y.optional(),delta:Jm}),cS=L({subagentRunId:Y.optional(),id:A(),role:$("developer"),name:A().optional(),encryptedValue:A().optional(),metadata:B.optional(),content:A()}),uS=L({subagentRunId:Y.optional(),id:A(),role:$("system"),name:A().optional(),encryptedValue:A().optional(),metadata:B.optional(),content:A()}),dS=L({name:A(),arguments:A()}),pS=L({id:A(),type:$("function"),function:dS,encryptedValue:A().optional(),metadata:B.optional()}),hS=L({subagentRunId:Y.optional(),id:A(),role:$("assistant"),name:A().optional(),encryptedValue:A().optional(),metadata:B.optional(),content:A().optional(),toolCalls:Ae(pS).optional()}),fS=L({subagentRunId:Y.optional(),id:A(),role:$("user"),name:A().optional(),encryptedValue:A().optional(),metadata:B.optional(),content:zr([A(),Ae(Gc)])}),mS=L({subagentRunId:Y.optional(),id:A(),role:$("tool"),content:zr([A(),Ae(Gc)]),toolCallId:A(),error:A().optional(),encryptedValue:A().optional(),metadata:B.optional()}),gS=L({subagentRunId:Y.optional(),id:A(),role:$("activity"),activityType:A(),content:Wn(t=>typeof t=="object"&&t!==null&&!Array.isArray(t)),metadata:B.optional()}),vS=L({subagentRunId:Y.optional(),id:A(),role:$("reasoning"),content:A(),encryptedValue:A().optional(),metadata:B.optional()}),Qm=Ct("role",[cS,uS,hS,fS,mS,gS,vS]),bS=L({type:$(v.MESSAGES_SNAPSHOT),timestamp:j().min(-9007199254740991).max(9007199254740991).optional(),rawEvent:Z().refine(t=>t!==null).optional(),metadata:B.optional(),messages:Ae(Qm)}),yS=L({type:$(v.ACTIVITY_SNAPSHOT),timestamp:j().min(-9007199254740991).max(9007199254740991).optional(),rawEvent:Z().refine(t=>t!==null).optional(),metadata:B.optional(),subagentRunId:Y.optional(),messageId:A(),activityType:A(),content:Wn(t=>typeof t=="object"&&t!==null&&!Array.isArray(t)),replace:K().optional()}),wS=L({type:$(v.ACTIVITY_DELTA),timestamp:j().min(-9007199254740991).max(9007199254740991).optional(),rawEvent:Z().refine(t=>t!==null).optional(),metadata:B.optional(),subagentRunId:Y.optional(),messageId:A(),activityType:A(),patch:Jm}),ES=L({type:$(v.RAW),timestamp:j().min(-9007199254740991).max(9007199254740991).optional(),rawEvent:Z().refine(t=>t!==null).optional(),metadata:B.optional(),subagentRunId:Y.optional(),event:Z().refine(t=>t!==void 0),source:A().optional()}),xS=L({type:$(v.CUSTOM),timestamp:j().min(-9007199254740991).max(9007199254740991).optional(),rawEvent:Z().refine(t=>t!==null).optional(),metadata:B.optional(),subagentRunId:Y.optional(),name:A(),value:Z().refine(t=>t!==void 0)}),eg=L({name:A(),description:A(),parameters:Z().refine(t=>t!==null).optional(),metadata:B.optional()}),SS=L({description:A(),value:A()}),_S=L({interruptId:A(),status:en(["resolved","cancelled"]),payload:Z().refine(t=>t!==null).optional(),metadata:B.optional()}),$i=L({threadId:A(),runId:A(),protocolVersion:A().optional(),parentRunId:A().optional(),state:Km.refine(t=>t!==null).nullable().transform(t=>t??void 0).optional(),messages:Ae(Qm),tools:Ae(eg).default(()=>[]),context:Ae(SS).default(()=>[]),forwardedProps:Z().refine(t=>t!==null).optional(),resume:Ae(_S).optional()}),TS=L({type:$(v.RUN_STARTED),timestamp:j().min(-9007199254740991).max(9007199254740991).optional(),rawEvent:Z().refine(t=>t!==null).optional(),metadata:B.optional(),threadId:A(),runId:A(),protocolVersion:A().optional(),parentRunId:A().optional(),input:$i.optional()}),AS=L({type:$("success"),pendingToolCallIds:Ae(A()).optional()}),kS=L({subagentRunId:Y.optional(),id:A(),reason:A(),message:A().optional(),toolCallId:A().optional(),responseSchema:Wn(t=>typeof t=="object"&&t!==null&&!Array.isArray(t)).optional(),expiresAt:A().optional(),metadata:B.optional()}),IS=L({type:$("interrupt"),interrupts:Ae(kS).min(1)}),RS=L({type:$("cancelled")}),CS=Ct("type",[AS,IS,RS]),tg=L({provider:A().optional(),model:A().optional(),inputTokens:j().min(0).max(9007199254740991).optional(),outputTokens:j().min(0).max(9007199254740991).optional(),totalTokens:j().min(0).max(9007199254740991).optional(),reasoningTokens:j().min(0).max(9007199254740991).optional(),cachedInputTokens:j().min(0).max(9007199254740991).optional(),cacheWriteInputTokens:j().min(0).max(9007199254740991).optional()}),NS=L({type:$(v.RUN_FINISHED),timestamp:j().min(-9007199254740991).max(9007199254740991).optional(),rawEvent:Z().refine(t=>t!==null).optional(),metadata:B.optional(),threadId:A(),runId:A(),result:Z().refine(t=>t!==null).optional(),outcome:CS.optional(),usage:Ae(tg).optional()}),OS=L({type:$(v.RUN_ERROR),timestamp:j().min(-9007199254740991).max(9007199254740991).optional(),rawEvent:Z().refine(t=>t!==null).optional(),metadata:B.optional(),message:A(),code:A().optional(),usage:Ae(tg).optional()}),PS=L({type:$(v.STEP_STARTED),timestamp:j().min(-9007199254740991).max(9007199254740991).optional(),rawEvent:Z().refine(t=>t!==null).optional(),metadata:B.optional(),subagentRunId:Y.optional(),stepName:A()}),MS=L({type:$(v.STEP_FINISHED),timestamp:j().min(-9007199254740991).max(9007199254740991).optional(),rawEvent:Z().refine(t=>t!==null).optional(),metadata:B.optional(),subagentRunId:Y.optional(),stepName:A()}),zS=L({type:$(v.REASONING_START),timestamp:j().min(-9007199254740991).max(9007199254740991).optional(),rawEvent:Z().refine(t=>t!==null).optional(),metadata:B.optional(),subagentRunId:Y.optional(),messageId:A()}),LS=L({type:$(v.REASONING_MESSAGE_START),timestamp:j().min(-9007199254740991).max(9007199254740991).optional(),rawEvent:Z().refine(t=>t!==null).optional(),metadata:B.optional(),subagentRunId:Y.optional(),messageId:A(),role:$("reasoning")}),DS=L({type:$(v.REASONING_MESSAGE_CONTENT),timestamp:j().min(-9007199254740991).max(9007199254740991).optional(),rawEvent:Z().refine(t=>t!==null).optional(),metadata:B.optional(),subagentRunId:Y.optional(),messageId:A(),delta:A()}),$S=L({type:$(v.REASONING_MESSAGE_END),timestamp:j().min(-9007199254740991).max(9007199254740991).optional(),rawEvent:Z().refine(t=>t!==null).optional(),metadata:B.optional(),subagentRunId:Y.optional(),messageId:A()}),Zc=L({type:$(v.REASONING_MESSAGE_CHUNK),timestamp:j().min(-9007199254740991).max(9007199254740991).optional(),rawEvent:Z().refine(t=>t!==null).optional(),metadata:B.optional(),subagentRunId:Y.optional(),messageId:A().optional(),delta:A().optional()}),US=L({type:$(v.REASONING_END),timestamp:j().min(-9007199254740991).max(9007199254740991).optional(),rawEvent:Z().refine(t=>t!==null).optional(),metadata:B.optional(),subagentRunId:Y.optional(),messageId:A()}),HS=en(["tool-call","message"]),FS=L({type:$(v.REASONING_ENCRYPTED_VALUE),timestamp:j().min(-9007199254740991).max(9007199254740991).optional(),rawEvent:Z().refine(t=>t!==null).optional(),metadata:B.optional(),subagentRunId:Y.optional(),subtype:HS,entityId:A(),encryptedValue:A()}),GS=L({type:$(v.SUBAGENT_STARTED),timestamp:j().min(-9007199254740991).max(9007199254740991).optional(),rawEvent:Z().refine(t=>t!==null).optional(),metadata:B.optional(),subagentRunId:Y,name:A(),description:A().optional(),parentSubagentRunId:Y.optional(),parentToolCallId:A().optional(),parentMessageId:A().optional()}),ZS=L({type:$("success")}),BS=L({type:$("suspended"),interruptIds:Ae(A()).optional()}),VS=Ct("type",[ZS,BS]),jS=L({type:$(v.SUBAGENT_FINISHED),timestamp:j().min(-9007199254740991).max(9007199254740991).optional(),rawEvent:Z().refine(t=>t!==null).optional(),metadata:B.optional(),subagentRunId:Y,result:Z().refine(t=>t!==null).optional(),outcome:VS.optional()}),WS=L({type:$(v.SUBAGENT_ERROR),timestamp:j().min(-9007199254740991).max(9007199254740991).optional(),rawEvent:Z().refine(t=>t!==null).optional(),metadata:B.optional(),subagentRunId:Y,message:A(),code:A().optional()}),Bc=Ct("type",[Ux,Hx,Fx,Hc,Gx,Zx,Bx,Fc,Qx,eS,lS,bS,yS,wS,ES,xS,TS,NS,OS,PS,MS,zS,LS,DS,$S,Zc,US,FS,GS,jS,WS]),WP=en(["developer","system","assistant","user","tool","activity","reasoning"]),qS=L({name:A(),description:A().optional()}),YS=L({name:A().optional(),type:A().optional(),description:A().optional(),version:A().optional(),provider:A().optional(),documentationUrl:A().optional(),metadata:B.optional()}),XS=L({streaming:K().optional(),websocket:K().optional(),httpBinary:K().optional(),pushNotifications:K().optional(),resumable:K().optional()}),KS=L({supported:K().optional(),items:Ae(eg).optional(),parallelCalls:K().optional(),clientProvided:K().optional()}),JS=L({structuredOutput:K().optional(),supportedMimeTypes:Ae(A()).optional()}),QS=L({snapshots:K().optional(),deltas:K().optional(),memory:K().optional(),persistentState:K().optional()}),e0=L({supported:K().optional(),delegation:K().optional(),handoffs:K().optional(),subagents:Ae(qS).optional()}),t0=L({supported:K().optional(),streaming:K().optional(),encrypted:K().optional()}),n0=L({image:K().optional(),audio:K().optional(),video:K().optional(),pdf:K().optional(),file:K().optional()}),r0=L({image:K().optional(),audio:K().optional()}),o0=L({input:n0.optional(),output:r0.optional()}),i0=L({codeExecution:K().optional(),sandboxed:K().optional(),maxIterations:j().min(0).max(9007199254740991).optional(),maxExecutionTime:j().min(0).max(9007199254740991).optional()}),a0=L({supported:K().optional(),approvals:K().optional(),interventions:K().optional(),feedback:K().optional(),interrupts:K().optional(),approveWithEdits:K().optional()}),qP=L({identity:YS.optional(),transport:XS.optional(),tools:KS.optional(),output:JS.optional(),state:QS.optional(),multiAgent:e0.optional(),reasoning:t0.optional(),multimodal:o0.optional(),execution:i0.optional(),humanInTheLoop:a0.optional(),custom:Wn(t=>typeof t=="object"&&t!==null&&!Array.isArray(t)).optional()}),YP=L({subagentRunId:Y.optional()}),XP=L({type:$x,timestamp:j().min(-9007199254740991).max(9007199254740991).optional(),rawEvent:Z().refine(t=>t!==null).optional(),metadata:B.optional()}),KP=L({subagentRunId:Y.optional(),id:A(),role:A(),name:A().optional(),encryptedValue:A().optional(),metadata:B.optional()}),JP=B.optional();Me(Zn());function rg(){let t=this.buf,e=this.pos,n=0,r=0;for(let i=0;i<28;i+=7){let a=t[e++];if(n|=(a&127)<<i,(a&128)==0){this.pos=e,this.assertBounds(),this.varint64Lo=n,this.varint64Hi=r;return}}let o=t[e++];if(n|=(o&15)<<28,r=(o&112)>>4,(o&128)==0){this.pos=e,this.assertBounds(),this.varint64Lo=n,this.varint64Hi=r;return}for(let i=3;i<=31;i+=7){let a=t[e++];if(r|=(a&127)<<i,(a&128)==0){this.pos=e,this.assertBounds(),this.varint64Lo=n,this.varint64Hi=r;return}}throw new Error("invalid varint")}var Ui=4294967296;function Vc(t){let e=t[0]==="-";e&&(t=t.slice(1));let n=1e6,r=0,o=0;function i(a,s){let c=Number(t.slice(a,s));o*=n,r=r*n+c,r>=Ui&&(o=o+(r/Ui|0),r=r%Ui)}return i(-24,-18),i(-18,-12),i(-12,-6),i(-6),e?ig(r,o):Wc(r,o)}function og(t,e){let n=Wc(t,e),r=n.hi&2147483648;r&&(n=ig(n.lo,n.hi));let o=jc(n.lo,n.hi);return r?"-"+o:o}function jc(t,e){if({lo:t,hi:e}=s0(t,e),e<=2097151)return String(Ui*e+t);let n=t&16777215,r=(t>>>24|e<<8)&16777215,o=e>>16&65535,i=n+r*6777216+o*6710656,a=r+o*8147497,s=o*2,c=1e7;return i>=c&&(a+=Math.floor(i/c),i%=c),a>=c&&(s+=Math.floor(a/c),a%=c),s.toString()+ng(a)+ng(i)}function s0(t,e){return{lo:t>>>0,hi:e>>>0}}function Wc(t,e){return{lo:t|0,hi:e|0}}function ig(t,e){return e=~e,t?t=~t+1:e+=1,Wc(t,e)}var ng=t=>{let e=String(t);return"0000000".slice(e.length)+e};function ag(){let t=this.buf[this.pos++];if((t&128)===0)return this.assertBounds(),t;let e=t&127;if(t=this.buf[this.pos++],e|=(t&127)<<7,(t&128)===0)return this.assertBounds(),e;if(t=this.buf[this.pos++],e|=(t&127)<<14,(t&128)===0)return this.assertBounds(),e;if(t=this.buf[this.pos++],e|=(t&127)<<21,(t&128)===0)return this.assertBounds(),e;t=this.buf[this.pos++],e|=(t&15)<<28;for(let n=5;(t&128)!==0&&n<10;n++)t=this.buf[this.pos++];if((t&128)!==0)throw new Error("invalid varint");return this.assertBounds(),e>>>0}var lt=l0();function l0(){let t=new DataView(new ArrayBuffer(8));if(typeof BigInt=="function"&&typeof t.getBigInt64=="function"&&typeof t.getBigUint64=="function"&&typeof t.setBigInt64=="function"&&typeof t.setBigUint64=="function"&&(!!globalThis.Deno||!!globalThis.Bun||typeof process!="object"||typeof process.env!="object"||process.env.BUF_BIGINT_DISABLE!=="1")){let n=BigInt("-9223372036854775808"),r=BigInt("9223372036854775807"),o=BigInt("0"),i=BigInt("18446744073709551615");return{zero:BigInt(0),supported:!0,parse(a){let s=typeof a=="bigint"?a:BigInt(a);if(s>r||s<n)throw new Error(`invalid int64: ${a}`);return s},uParse(a){let s=typeof a=="bigint"?a:BigInt(a);if(s>i||s<o)throw new Error(`invalid uint64: ${a}`);return s},enc(a){return t.setBigInt64(0,this.parse(a),!0),{lo:t.getInt32(0,!0),hi:t.getInt32(4,!0)}},uEnc(a){return t.setBigInt64(0,this.uParse(a),!0),{lo:t.getInt32(0,!0),hi:t.getInt32(4,!0)}},dec(a,s){return t.setInt32(0,a,!0),t.setInt32(4,s,!0),t.getBigInt64(0,!0)},uDec(a,s){return t.setInt32(0,a,!0),t.setInt32(4,s,!0),t.getBigUint64(0,!0)}}}return{zero:"0",supported:!1,parse(n){return typeof n!="string"&&(n=n.toString()),sg(n),n},uParse(n){return typeof n!="string"&&(n=n.toString()),lg(n),n},enc(n){return typeof n!="string"&&(n=n.toString()),sg(n),Vc(n)},uEnc(n){return typeof n!="string"&&(n=n.toString()),lg(n),Vc(n)},dec(n,r){return og(n,r)},uDec(n,r){return jc(n,r)}}}function sg(t){if(!/^-?[0-9]+$/.test(t))throw new Error("invalid int64: "+t)}function lg(t){if(!/^[0-9]+$/.test(t))throw new Error("invalid uint64: "+t)}var qc=Symbol.for("@bufbuild/protobuf/text-encoding");function c0(t){var e;globalThis[qc]=Object.assign(Object.assign({},t),{encodeUtf8Into:(e=t.encodeUtf8Into)!==null&&e!==void 0?e:Xc(t.encodeUtf8.bind(t))})}function Yc(){let t=globalThis;if(!t[qc]){let e=new t.TextEncoder,n=new t.TextDecoder,r,o={encodeUtf8(a){return e.encode(a)},decodeUtf8(a,s){return s?(r||(r=new t.TextDecoder("utf-8",{fatal:!0})),r.decode(a)):n.decode(a)},checkUtf8(a){try{return encodeURIComponent(a),!0}catch{return!1}}};e.encodeInto&&(o.encodeUtf8Into=e.encodeInto.bind(e));let i=String.prototype.isWellFormed;i&&(o.checkUtf8=a=>i.call(a)),c0(o)}return t[qc]}function Xc(t){return(e,n)=>{let r=t(e);return n.set(r),{written:r.byteLength}}}var Ot;(function(t){t[t.Varint=0]="Varint",t[t.Bit64=1]="Bit64",t[t.LengthDelimited=2]="LengthDelimited",t[t.StartGroup=3]="StartGroup",t[t.EndGroup=4]="EndGroup",t[t.Bit32=5]="Bit32"})(Ot||(Ot={}));var u0=34028234663852886e22,d0=-34028234663852886e22,p0=4294967295,h0=2147483647,f0=-2147483648,U=class{constructor(e){this.stackPos=[],this.encodeUtf8Into=e?Xc(e):Yc().encodeUtf8Into,this.buffer=ug,this.viewCache=g0,this.pos=0}ensureCapacity(e){let n=this.pos+e;if(n>this.buffer.length){let r=this.buffer.length||m0;for(;r<n;)r*=2;let o=new Uint8Array(r);this.pos>0&&o.set(this.buffer),this.buffer=o}}view(){let e=this.buffer,n=this.viewCache;if(n.byteLength===e.byteLength)return n;let r=new DataView(e.buffer);return this.viewCache=r,r}finish(){let e=this.buffer.slice(0,this.pos);return this.pos=0,this.stackPos=[],e}fork(){return this.stackPos.push(this.pos),this.ensureCapacity(Lr),this.buffer[this.pos++]=0,this}join(){let e=this.stackPos.pop();if(e===void 0)throw new Error("invalid state, fork stack empty");let n=this.pos-e-Lr,r=Kc(n);return r>Lr&&(this.ensureCapacity(r-Lr),this.buffer.copyWithin(e+r,e+Lr,this.pos)),this.pos=e,this.uint32(n),this.pos+=n,this}tag(e,n){return this.uint32((e<<3|n)>>>0)}raw(e){return this.ensureCapacity(e.length),this.buffer.set(e,this.pos),this.pos+=e.length,this}uint32(e){if(cg(e),this.ensureCapacity(5),e<128)return this.buffer[this.pos++]=e,this;for(;e>127;)this.buffer[this.pos++]=e&127|128,e>>>=7;return this.buffer[this.pos++]=e,this}int32(e){if(Jc(e),e>=0)return this.uint32(e);this.ensureCapacity(10);for(let n=0;n<9;n++)this.buffer[this.pos++]=e&127|128,e>>=7;return this.buffer[this.pos++]=1,this}bool(e){return this.ensureCapacity(1),this.buffer[this.pos++]=e?1:0,this}bytes(e){return this.uint32(e.byteLength),this.raw(e)}string(e){typeof e!="string"&&(e=String(e));let n=e.length;if(n<=dg){this.ensureCapacity(n+1);let c=this.buffer,l=this.pos;c[l++]=n;let u=0;for(;u<n;u++){let f=e.charCodeAt(u);if(f>127)break;c[l++]=f}if(u==n)return this.pos=l,this}this.ensureCapacity(n*3+5);let r=Kc(n),o=this.buffer,i=this.pos,{written:a}=this.encodeUtf8Into(e,o.subarray(i+r)),s=Kc(a);return s!=r&&o.copyWithin(i+s,i+r,i+r+a),this.uint32(a),this.pos+=a,this}float(e){return v0(e),this.ensureCapacity(4),this.view().setFloat32(this.pos,e,!0),this.pos+=4,this}double(e){return this.ensureCapacity(8),this.view().setFloat64(this.pos,e,!0),this.pos+=8,this}fixed32(e){return cg(e),this.ensureCapacity(4),this.view().setUint32(this.pos,e,!0),this.pos+=4,this}sfixed32(e){return Jc(e),this.ensureCapacity(4),this.view().setInt32(this.pos,e,!0),this.pos+=4,this}sint32(e){return Jc(e),this.uint32((e<<1^e>>31)>>>0)}sfixed64(e){let n=lt.enc(e);this.ensureCapacity(8);let r=this.view();return r.setInt32(this.pos,n.lo,!0),r.setInt32(this.pos+4,n.hi,!0),this.pos+=8,this}fixed64(e){let n=lt.uEnc(e);this.ensureCapacity(8);let r=this.view();return r.setInt32(this.pos,n.lo,!0),r.setInt32(this.pos+4,n.hi,!0),this.pos+=8,this}int64(e){let n=lt.enc(e);return this.writeVarint64(n.lo,n.hi)}sint64(e){let n=lt.enc(e),r=n.hi>>31,o=n.lo<<1^r,i=(n.hi<<1|n.lo>>>31)^r;return this.writeVarint64(o,i)}uint64(e){let n=lt.uEnc(e);return this.writeVarint64(n.lo,n.hi)}writeVarint64(e,n){this.ensureCapacity(10);let r=this.buffer,o=this.pos;for(let s=0;s<28;s=s+7){let c=e>>>s,l=!(!(c>>>7)&&n==0);if(r[o++]=(l?c|128:c)&255,!l)return this.pos=o,this}let i=e>>>28&15|(n&7)<<4,a=n>>3!=0;if(r[o++]=(a?i|128:i)&255,!a)return this.pos=o,this;for(let s=3;s<31;s=s+7){let c=n>>>s,l=!!(c>>>7);if(r[o++]=(l?c|128:c)&255,!l)return this.pos=o,this}return r[o++]=n>>>31&1,this.pos=o,this}},m0=128,Lr=1,ug=new Uint8Array(0),g0=new DataView(ug.buffer),dg=32;function Kc(t){return t<128?1:t<16384?2:t<2097152?3:t<268435456?4:5}var R=class{constructor(e,n=Yc().decodeUtf8){this.decodeUtf8=n,this.varint64Lo=0,this.varint64Hi=0,this.varint64=rg,this.uint32=ag,this.buf=e,this.len=e.length,this.pos=0,this.view=new DataView(e.buffer,e.byteOffset,e.byteLength)}tag(){let e=this.pos,n=this.uint32(),r=this.pos-e;if(r>5||r==5&&this.buf[this.pos-1]>15)throw new Error("illegal tag: varint overflows uint32");let o=n>>>3,i=n&7;if(o<=0||i>5)throw new Error("illegal tag: field no "+o+" wire type "+i);return[o,i]}skip(e,n,r=100){let o=this.pos;switch(e){case Ot.Varint:for(;this.buf[this.pos++]&128;);break;case Ot.Bit64:this.pos+=4;case Ot.Bit32:this.pos+=4;break;case Ot.LengthDelimited:let i=this.uint32();this.pos+=i;break;case Ot.StartGroup:if(r<=0)throw new Error("maximum recursion depth reached");for(;;){let[a,s]=this.tag();if(s===Ot.EndGroup){if(n!==void 0&&a!==n)throw new Error("invalid end group tag");break}this.skip(s,a,r-1)}break;default:throw new Error("cant skip wire type "+e)}return this.assertBounds(),this.buf.subarray(o,this.pos)}assertBounds(){if(this.pos>this.len)throw new RangeError("premature EOF")}int32(){return this.uint32()|0}sint32(){let e=this.uint32();return e>>>1^-(e&1)}int64(){return this.varint64(),lt.dec(this.varint64Lo,this.varint64Hi)}uint64(){return this.varint64(),lt.uDec(this.varint64Lo,this.varint64Hi)}sint64(){this.varint64();let e=this.varint64Lo,n=this.varint64Hi,r=-(e&1);return e=(e>>>1|(n&1)<<31)^r,n=n>>>1^r,lt.dec(e,n)}bool(){let e=this.buf[this.pos];return e<128?(this.pos++,e!==0):(this.varint64(),this.varint64Lo!==0||this.varint64Hi!==0)}fixed32(){return this.view.getUint32((this.pos+=4)-4,!0)}sfixed32(){return this.view.getInt32((this.pos+=4)-4,!0)}fixed64(){return lt.uDec(this.sfixed32(),this.sfixed32())}sfixed64(){return lt.dec(this.sfixed32(),this.sfixed32())}float(){return this.view.getFloat32((this.pos+=4)-4,!0)}double(){return this.view.getFloat64((this.pos+=8)-8,!0)}bytes(){let e=this.uint32(),n=this.pos;return this.pos+=e,this.assertBounds(),this.buf.subarray(n,n+e)}string(e){let n=this.bytes(),r=n.length;if(r<=dg){let o=new Array(r);for(let i=0;i<r;i++){let a=n[i];if(a>127)return this.decodeUtf8(n,e);o[i]=a}return String.fromCharCode.apply(String,o)}return this.decodeUtf8(n,e)}};function Jc(t){if(typeof t=="string")t=Number(t);else if(typeof t!="number")throw new Error("invalid int32: "+typeof t);if(!Number.isInteger(t)||t>h0||t<f0)throw new Error("invalid int32: "+t)}function cg(t){if(typeof t=="string")t=Number(t);else if(typeof t!="number")throw new Error("invalid uint32: "+typeof t);if(!Number.isInteger(t)||t>p0||t<0)throw new Error("invalid uint32: "+t)}function v0(t){if(typeof t=="string"){let e=t;if(t=Number(t),Number.isNaN(t)&&e!=="NaN")throw new Error("invalid float32: "+e)}else if(typeof t!="number")throw new Error("invalid float32: "+typeof t);if(Number.isFinite(t)&&(t>u0||t<d0))throw new Error("invalid float32: "+t)}var b0=(function(t){return t[t.NULL_VALUE=0]="NULL_VALUE",t[t.UNRECOGNIZED=-1]="UNRECOGNIZED",t})({});function Qc(){return{fields:{}}}var ne={encode(t,e=new U){return Object.entries(t.fields).forEach(([n,r])=>{r!==void 0&&nu.encode({key:n,value:r},e.uint32(10).fork()).join()}),e},decode(t,e){let n=t instanceof R?t:new R(t),r=e===void 0?n.len:n.pos+e,o=Qc();for(;n.pos<r;){let i=n.uint32();switch(i>>>3){case 1:{if(i!==10)break;let a=nu.decode(n,n.uint32());a.value!==void 0&&(o.fields[a.key]=a.value);continue}}if((i&7)===4||i===0)break;n.skip(i&7)}return o},create(t){return ne.fromPartial(t??{})},fromPartial(t){let e=Qc();return e.fields=Object.entries(t.fields??{}).reduce((n,[r,o])=>(o!==void 0&&(n[r]=o),n),{}),e},wrap(t){let e=Qc();if(t!==void 0)for(let n of Object.keys(t))e.fields[n]=t[n];return e},unwrap(t){let e={};if(t.fields)for(let n of Object.keys(t.fields))e[n]=t.fields[n];return e}};function pg(){return{key:"",value:void 0}}var nu={encode(t,e=new U){return t.key!==""&&e.uint32(10).string(t.key),t.value!==void 0&&D.encode(D.wrap(t.value),e.uint32(18).fork()).join(),e},decode(t,e){let n=t instanceof R?t:new R(t),r=e===void 0?n.len:n.pos+e,o=pg();for(;n.pos<r;){let i=n.uint32();switch(i>>>3){case 1:if(i!==10)break;o.key=n.string();continue;case 2:if(i!==18)break;o.value=D.unwrap(D.decode(n,n.uint32()));continue}if((i&7)===4||i===0)break;n.skip(i&7)}return o},create(t){return nu.fromPartial(t??{})},fromPartial(t){let e=pg();return e.key=t.key??"",e.value=t.value??void 0,e}};function eu(){return{nullValue:void 0,numberValue:void 0,stringValue:void 0,boolValue:void 0,structValue:void 0,listValue:void 0}}var D={encode(t,e=new U){return t.nullValue!==void 0&&e.uint32(8).int32(t.nullValue),t.numberValue!==void 0&&e.uint32(17).double(t.numberValue),t.stringValue!==void 0&&e.uint32(26).string(t.stringValue),t.boolValue!==void 0&&e.uint32(32).bool(t.boolValue),t.structValue!==void 0&&ne.encode(ne.wrap(t.structValue),e.uint32(42).fork()).join(),t.listValue!==void 0&&Dr.encode(Dr.wrap(t.listValue),e.uint32(50).fork()).join(),e},decode(t,e){let n=t instanceof R?t:new R(t),r=e===void 0?n.len:n.pos+e,o=eu();for(;n.pos<r;){let i=n.uint32();switch(i>>>3){case 1:if(i!==8)break;o.nullValue=n.int32();continue;case 2:if(i!==17)break;o.numberValue=n.double();continue;case 3:if(i!==26)break;o.stringValue=n.string();continue;case 4:if(i!==32)break;o.boolValue=n.bool();continue;case 5:if(i!==42)break;o.structValue=ne.unwrap(ne.decode(n,n.uint32()));continue;case 6:if(i!==50)break;o.listValue=Dr.unwrap(Dr.decode(n,n.uint32()));continue}if((i&7)===4||i===0)break;n.skip(i&7)}return o},create(t){return D.fromPartial(t??{})},fromPartial(t){let e=eu();return e.nullValue=t.nullValue??void 0,e.numberValue=t.numberValue??void 0,e.stringValue=t.stringValue??void 0,e.boolValue=t.boolValue??void 0,e.structValue=t.structValue??void 0,e.listValue=t.listValue??void 0,e},wrap(t){let e=eu();if(t===null)e.nullValue=b0.NULL_VALUE;else if(typeof t=="boolean")e.boolValue=t;else if(typeof t=="number")e.numberValue=t;else if(typeof t=="string")e.stringValue=t;else if(globalThis.Array.isArray(t))e.listValue=t;else if(typeof t=="object")e.structValue=t;else if(typeof t<"u")throw new globalThis.Error("Unsupported any value type: "+typeof t);return e},unwrap(t){if(t.stringValue!==void 0)return t.stringValue;if(t?.numberValue!==void 0)return t.numberValue;if(t?.boolValue!==void 0)return t.boolValue;if(t?.structValue!==void 0)return t.structValue;if(t?.listValue!==void 0)return t.listValue;if(t?.nullValue!==void 0)return null}};function tu(){return{values:[]}}var Dr={encode(t,e=new U){for(let n of t.values)D.encode(D.wrap(n),e.uint32(10).fork()).join();return e},decode(t,e){let n=t instanceof R?t:new R(t),r=e===void 0?n.len:n.pos+e,o=tu();for(;n.pos<r;){let i=n.uint32();switch(i>>>3){case 1:if(i!==10)break;o.values.push(D.unwrap(D.decode(n,n.uint32())));continue}if((i&7)===4||i===0)break;n.skip(i&7)}return o},create(t){return Dr.fromPartial(t??{})},fromPartial(t){let e=tu();return e.values=t.values?.map(n=>n)||[],e},wrap(t){let e=tu();return e.values=t??[],e},unwrap(t){return t?.hasOwnProperty("values")&&globalThis.Array.isArray(t.values)?t.values:t}},hg=(function(t){return t[t.ADD=0]="ADD",t[t.REMOVE=1]="REMOVE",t[t.REPLACE=2]="REPLACE",t[t.MOVE=3]="MOVE",t[t.COPY=4]="COPY",t[t.TEST=5]="TEST",t[t.UNRECOGNIZED=-1]="UNRECOGNIZED",t})({});function fg(){return{op:0,path:"",from:void 0,value:void 0}}var rn={encode(t,e=new U){return t.op!==0&&e.uint32(8).int32(t.op),t.path!==""&&e.uint32(18).string(t.path),t.from!==void 0&&e.uint32(26).string(t.from),t.value!==void 0&&D.encode(D.wrap(t.value),e.uint32(34).fork()).join(),e},decode(t,e){let n=t instanceof R?t:new R(t),r=e===void 0?n.len:n.pos+e,o=fg();for(;n.pos<r;){let i=n.uint32();switch(i>>>3){case 1:if(i!==8)break;o.op=n.int32();continue;case 2:if(i!==18)break;o.path=n.string();continue;case 3:if(i!==26)break;o.from=n.string();continue;case 4:if(i!==34)break;o.value=D.unwrap(D.decode(n,n.uint32()));continue}if((i&7)===4||i===0)break;n.skip(i&7)}return o},create(t){return rn.fromPartial(t??{})},fromPartial(t){let e=fg();return e.op=t.op??0,e.path=t.path??"",e.from=t.from??void 0,e.value=t.value??void 0,e}};function mg(){return{text:"",id:void 0,metadata:void 0}}var Hi={encode(t,e=new U){return t.text!==""&&e.uint32(10).string(t.text),t.id!==void 0&&e.uint32(18).string(t.id),t.metadata!==void 0&&D.encode(D.wrap(t.metadata),e.uint32(26).fork()).join(),e},decode(t,e){let n=t instanceof R?t:new R(t),r=e===void 0?n.len:n.pos+e,o=mg();for(;n.pos<r;){let i=n.uint32();switch(i>>>3){case 1:if(i!==10)break;o.text=n.string();continue;case 2:if(i!==18)break;o.id=n.string();continue;case 3:if(i!==26)break;o.metadata=D.unwrap(D.decode(n,n.uint32()));continue}if((i&7)===4||i===0)break;n.skip(i&7)}return o},create(t){return Hi.fromPartial(t??{})},fromPartial(t){let e=mg();return e.text=t.text??"",e.id=t.id??void 0,e.metadata=t.metadata??void 0,e}};function gg(){return{source:void 0,metadata:void 0,id:void 0}}var Fi={encode(t,e=new U){return t.source!==void 0&&We.encode(t.source,e.uint32(10).fork()).join(),t.metadata!==void 0&&D.encode(D.wrap(t.metadata),e.uint32(18).fork()).join(),t.id!==void 0&&e.uint32(26).string(t.id),e},decode(t,e){let n=t instanceof R?t:new R(t),r=e===void 0?n.len:n.pos+e,o=gg();for(;n.pos<r;){let i=n.uint32();switch(i>>>3){case 1:if(i!==10)break;o.source=We.decode(n,n.uint32());continue;case 2:if(i!==18)break;o.metadata=D.unwrap(D.decode(n,n.uint32()));continue;case 3:if(i!==26)break;o.id=n.string();continue}if((i&7)===4||i===0)break;n.skip(i&7)}return o},create(t){return Fi.fromPartial(t??{})},fromPartial(t){let e=gg();return e.source=t.source!==void 0&&t.source!==null?We.fromPartial(t.source):void 0,e.metadata=t.metadata??void 0,e.id=t.id??void 0,e}};function vg(){return{value:"",mimeType:""}}var Gi={encode(t,e=new U){return t.value!==""&&e.uint32(10).string(t.value),t.mimeType!==""&&e.uint32(18).string(t.mimeType),e},decode(t,e){let n=t instanceof R?t:new R(t),r=e===void 0?n.len:n.pos+e,o=vg();for(;n.pos<r;){let i=n.uint32();switch(i>>>3){case 1:if(i!==10)break;o.value=n.string();continue;case 2:if(i!==18)break;o.mimeType=n.string();continue}if((i&7)===4||i===0)break;n.skip(i&7)}return o},create(t){return Gi.fromPartial(t??{})},fromPartial(t){let e=vg();return e.value=t.value??"",e.mimeType=t.mimeType??"",e}};function bg(){return{value:"",mimeType:void 0}}var Zi={encode(t,e=new U){return t.value!==""&&e.uint32(10).string(t.value),t.mimeType!==void 0&&e.uint32(18).string(t.mimeType),e},decode(t,e){let n=t instanceof R?t:new R(t),r=e===void 0?n.len:n.pos+e,o=bg();for(;n.pos<r;){let i=n.uint32();switch(i>>>3){case 1:if(i!==10)break;o.value=n.string();continue;case 2:if(i!==18)break;o.mimeType=n.string();continue}if((i&7)===4||i===0)break;n.skip(i&7)}return o},create(t){return Zi.fromPartial(t??{})},fromPartial(t){let e=bg();return e.value=t.value??"",e.mimeType=t.mimeType??void 0,e}};function yg(){return{value:"",provider:void 0,mimeType:void 0}}var Bi={encode(t,e=new U){return t.value!==""&&e.uint32(10).string(t.value),t.provider!==void 0&&e.uint32(18).string(t.provider),t.mimeType!==void 0&&e.uint32(26).string(t.mimeType),e},decode(t,e){let n=t instanceof R?t:new R(t),r=e===void 0?n.len:n.pos+e,o=yg();for(;n.pos<r;){let i=n.uint32();switch(i>>>3){case 1:if(i!==10)break;o.value=n.string();continue;case 2:if(i!==18)break;o.provider=n.string();continue;case 3:if(i!==26)break;o.mimeType=n.string();continue}if((i&7)===4||i===0)break;n.skip(i&7)}return o},create(t){return Bi.fromPartial(t??{})},fromPartial(t){let e=yg();return e.value=t.value??"",e.provider=t.provider??void 0,e.mimeType=t.mimeType??void 0,e}};function wg(){return{data:void 0,url:void 0,file:void 0}}var We={encode(t,e=new U){return t.data!==void 0&&Gi.encode(t.data,e.uint32(10).fork()).join(),t.url!==void 0&&Zi.encode(t.url,e.uint32(18).fork()).join(),t.file!==void 0&&Bi.encode(t.file,e.uint32(26).fork()).join(),e},decode(t,e){let n=t instanceof R?t:new R(t),r=e===void 0?n.len:n.pos+e,o=wg();for(;n.pos<r;){let i=n.uint32();switch(i>>>3){case 1:if(i!==10)break;o.data=Gi.decode(n,n.uint32());continue;case 2:if(i!==18)break;o.url=Zi.decode(n,n.uint32());continue;case 3:if(i!==26)break;o.file=Bi.decode(n,n.uint32());continue}if((i&7)===4||i===0)break;n.skip(i&7)}return o},create(t){return We.fromPartial(t??{})},fromPartial(t){let e=wg();return e.data=t.data!==void 0&&t.data!==null?Gi.fromPartial(t.data):void 0,e.url=t.url!==void 0&&t.url!==null?Zi.fromPartial(t.url):void 0,e.file=t.file!==void 0&&t.file!==null?Bi.fromPartial(t.file):void 0,e}};function Eg(){return{source:void 0,metadata:void 0,id:void 0}}var Vi={encode(t,e=new U){return t.source!==void 0&&We.encode(t.source,e.uint32(10).fork()).join(),t.metadata!==void 0&&D.encode(D.wrap(t.metadata),e.uint32(18).fork()).join(),t.id!==void 0&&e.uint32(26).string(t.id),e},decode(t,e){let n=t instanceof R?t:new R(t),r=e===void 0?n.len:n.pos+e,o=Eg();for(;n.pos<r;){let i=n.uint32();switch(i>>>3){case 1:if(i!==10)break;o.source=We.decode(n,n.uint32());continue;case 2:if(i!==18)break;o.metadata=D.unwrap(D.decode(n,n.uint32()));continue;case 3:if(i!==26)break;o.id=n.string();continue}if((i&7)===4||i===0)break;n.skip(i&7)}return o},create(t){return Vi.fromPartial(t??{})},fromPartial(t){let e=Eg();return e.source=t.source!==void 0&&t.source!==null?We.fromPartial(t.source):void 0,e.metadata=t.metadata??void 0,e.id=t.id??void 0,e}};function xg(){return{source:void 0,metadata:void 0,id:void 0}}var ji={encode(t,e=new U){return t.source!==void 0&&We.encode(t.source,e.uint32(10).fork()).join(),t.metadata!==void 0&&D.encode(D.wrap(t.metadata),e.uint32(18).fork()).join(),t.id!==void 0&&e.uint32(26).string(t.id),e},decode(t,e){let n=t instanceof R?t:new R(t),r=e===void 0?n.len:n.pos+e,o=xg();for(;n.pos<r;){let i=n.uint32();switch(i>>>3){case 1:if(i!==10)break;o.source=We.decode(n,n.uint32());continue;case 2:if(i!==18)break;o.metadata=D.unwrap(D.decode(n,n.uint32()));continue;case 3:if(i!==26)break;o.id=n.string();continue}if((i&7)===4||i===0)break;n.skip(i&7)}return o},create(t){return ji.fromPartial(t??{})},fromPartial(t){let e=xg();return e.source=t.source!==void 0&&t.source!==null?We.fromPartial(t.source):void 0,e.metadata=t.metadata??void 0,e.id=t.id??void 0,e}};function Sg(){return{source:void 0,metadata:void 0,id:void 0}}var Wi={encode(t,e=new U){return t.source!==void 0&&We.encode(t.source,e.uint32(10).fork()).join(),t.metadata!==void 0&&D.encode(D.wrap(t.metadata),e.uint32(18).fork()).join(),t.id!==void 0&&e.uint32(26).string(t.id),e},decode(t,e){let n=t instanceof R?t:new R(t),r=e===void 0?n.len:n.pos+e,o=Sg();for(;n.pos<r;){let i=n.uint32();switch(i>>>3){case 1:if(i!==10)break;o.source=We.decode(n,n.uint32());continue;case 2:if(i!==18)break;o.metadata=D.unwrap(D.decode(n,n.uint32()));continue;case 3:if(i!==26)break;o.id=n.string();continue}if((i&7)===4||i===0)break;n.skip(i&7)}return o},create(t){return Wi.fromPartial(t??{})},fromPartial(t){let e=Sg();return e.source=t.source!==void 0&&t.source!==null?We.fromPartial(t.source):void 0,e.metadata=t.metadata??void 0,e.id=t.id??void 0,e}};function _g(){return{text:void 0,image:void 0,audio:void 0,video:void 0,document:void 0}}var on={encode(t,e=new U){return t.text!==void 0&&Hi.encode(t.text,e.uint32(10).fork()).join(),t.image!==void 0&&Fi.encode(t.image,e.uint32(18).fork()).join(),t.audio!==void 0&&Vi.encode(t.audio,e.uint32(26).fork()).join(),t.video!==void 0&&ji.encode(t.video,e.uint32(34).fork()).join(),t.document!==void 0&&Wi.encode(t.document,e.uint32(42).fork()).join(),e},decode(t,e){let n=t instanceof R?t:new R(t),r=e===void 0?n.len:n.pos+e,o=_g();for(;n.pos<r;){let i=n.uint32();switch(i>>>3){case 1:if(i!==10)break;o.text=Hi.decode(n,n.uint32());continue;case 2:if(i!==18)break;o.image=Fi.decode(n,n.uint32());continue;case 3:if(i!==26)break;o.audio=Vi.decode(n,n.uint32());continue;case 4:if(i!==34)break;o.video=ji.decode(n,n.uint32());continue;case 5:if(i!==42)break;o.document=Wi.decode(n,n.uint32());continue}if((i&7)===4||i===0)break;n.skip(i&7)}return o},create(t){return on.fromPartial(t??{})},fromPartial(t){let e=_g();return e.text=t.text!==void 0&&t.text!==null?Hi.fromPartial(t.text):void 0,e.image=t.image!==void 0&&t.image!==null?Fi.fromPartial(t.image):void 0,e.audio=t.audio!==void 0&&t.audio!==null?Vi.fromPartial(t.audio):void 0,e.video=t.video!==void 0&&t.video!==null?ji.fromPartial(t.video):void 0,e.document=t.document!==void 0&&t.document!==null?Wi.fromPartial(t.document):void 0,e}};function Tg(){return{id:"",type:"",function:void 0,metadata:void 0,encryptedValue:void 0}}var qi={encode(t,e=new U){return t.id!==""&&e.uint32(10).string(t.id),t.type!==""&&e.uint32(18).string(t.type),t.function!==void 0&&Yi.encode(t.function,e.uint32(26).fork()).join(),t.metadata!==void 0&&ne.encode(ne.wrap(t.metadata),e.uint32(34).fork()).join(),t.encryptedValue!==void 0&&e.uint32(42).string(t.encryptedValue),e},decode(t,e){let n=t instanceof R?t:new R(t),r=e===void 0?n.len:n.pos+e,o=Tg();for(;n.pos<r;){let i=n.uint32();switch(i>>>3){case 1:if(i!==10)break;o.id=n.string();continue;case 2:if(i!==18)break;o.type=n.string();continue;case 3:if(i!==26)break;o.function=Yi.decode(n,n.uint32());continue;case 4:if(i!==34)break;o.metadata=ne.unwrap(ne.decode(n,n.uint32()));continue;case 5:if(i!==42)break;o.encryptedValue=n.string();continue}if((i&7)===4||i===0)break;n.skip(i&7)}return o},create(t){return qi.fromPartial(t??{})},fromPartial(t){let e=Tg();return e.id=t.id??"",e.type=t.type??"",e.function=t.function!==void 0&&t.function!==null?Yi.fromPartial(t.function):void 0,e.metadata=t.metadata??void 0,e.encryptedValue=t.encryptedValue??void 0,e}};function Ag(){return{name:"",arguments:""}}var Yi={encode(t,e=new U){return t.name!==""&&e.uint32(10).string(t.name),t.arguments!==""&&e.uint32(18).string(t.arguments),e},decode(t,e){let n=t instanceof R?t:new R(t),r=e===void 0?n.len:n.pos+e,o=Ag();for(;n.pos<r;){let i=n.uint32();switch(i>>>3){case 1:if(i!==10)break;o.name=n.string();continue;case 2:if(i!==18)break;o.arguments=n.string();continue}if((i&7)===4||i===0)break;n.skip(i&7)}return o},create(t){return Yi.fromPartial(t??{})},fromPartial(t){let e=Ag();return e.name=t.name??"",e.arguments=t.arguments??"",e}};function kg(){return{id:"",role:"",content:void 0,name:void 0,toolCalls:[],toolCallId:void 0,error:void 0,contentParts:[],metadata:void 0,subagentRunId:void 0,encryptedValue:void 0,activityType:void 0,activityContent:void 0}}var an={encode(t,e=new U){t.id!==""&&e.uint32(10).string(t.id),t.role!==""&&e.uint32(18).string(t.role),t.content!==void 0&&e.uint32(26).string(t.content),t.name!==void 0&&e.uint32(34).string(t.name);for(let n of t.toolCalls)qi.encode(n,e.uint32(42).fork()).join();t.toolCallId!==void 0&&e.uint32(50).string(t.toolCallId),t.error!==void 0&&e.uint32(58).string(t.error);for(let n of t.contentParts)on.encode(n,e.uint32(66).fork()).join();return t.metadata!==void 0&&ne.encode(ne.wrap(t.metadata),e.uint32(74).fork()).join(),t.subagentRunId!==void 0&&e.uint32(82).string(t.subagentRunId),t.encryptedValue!==void 0&&e.uint32(90).string(t.encryptedValue),t.activityType!==void 0&&e.uint32(98).string(t.activityType),t.activityContent!==void 0&&ne.encode(ne.wrap(t.activityContent),e.uint32(106).fork()).join(),e},decode(t,e){let n=t instanceof R?t:new R(t),r=e===void 0?n.len:n.pos+e,o=kg();for(;n.pos<r;){let i=n.uint32();switch(i>>>3){case 1:if(i!==10)break;o.id=n.string();continue;case 2:if(i!==18)break;o.role=n.string();continue;case 3:if(i!==26)break;o.content=n.string();continue;case 4:if(i!==34)break;o.name=n.string();continue;case 5:if(i!==42)break;o.toolCalls.push(qi.decode(n,n.uint32()));continue;case 6:if(i!==50)break;o.toolCallId=n.string();continue;case 7:if(i!==58)break;o.error=n.string();continue;case 8:if(i!==66)break;o.contentParts.push(on.decode(n,n.uint32()));continue;case 9:if(i!==74)break;o.metadata=ne.unwrap(ne.decode(n,n.uint32()));continue;case 10:if(i!==82)break;o.subagentRunId=n.string();continue;case 11:if(i!==90)break;o.encryptedValue=n.string();continue;case 12:if(i!==98)break;o.activityType=n.string();continue;case 13:if(i!==106)break;o.activityContent=ne.unwrap(ne.decode(n,n.uint32()));continue}if((i&7)===4||i===0)break;n.skip(i&7)}return o},create(t){return an.fromPartial(t??{})},fromPartial(t){let e=kg();return e.id=t.id??"",e.role=t.role??"",e.content=t.content??void 0,e.name=t.name??void 0,e.toolCalls=t.toolCalls?.map(n=>qi.fromPartial(n))||[],e.toolCallId=t.toolCallId??void 0,e.error=t.error??void 0,e.contentParts=t.contentParts?.map(n=>on.fromPartial(n))||[],e.metadata=t.metadata??void 0,e.subagentRunId=t.subagentRunId??void 0,e.encryptedValue=t.encryptedValue??void 0,e.activityType=t.activityType??void 0,e.activityContent=t.activityContent??void 0,e}};function Ig(){return{name:"",description:"",parameters:void 0,metadata:void 0}}var Xi={encode(t,e=new U){return t.name!==""&&e.uint32(10).string(t.name),t.description!==""&&e.uint32(18).string(t.description),t.parameters!==void 0&&D.encode(D.wrap(t.parameters),e.uint32(26).fork()).join(),t.metadata!==void 0&&ne.encode(ne.wrap(t.metadata),e.uint32(34).fork()).join(),e},decode(t,e){let n=t instanceof R?t:new R(t),r=e===void 0?n.len:n.pos+e,o=Ig();for(;n.pos<r;){let i=n.uint32();switch(i>>>3){case 1:if(i!==10)break;o.name=n.string();continue;case 2:if(i!==18)break;o.description=n.string();continue;case 3:if(i!==26)break;o.parameters=D.unwrap(D.decode(n,n.uint32()));continue;case 4:if(i!==34)break;o.metadata=ne.unwrap(ne.decode(n,n.uint32()));continue}if((i&7)===4||i===0)break;n.skip(i&7)}return o},create(t){return Xi.fromPartial(t??{})},fromPartial(t){let e=Ig();return e.name=t.name??"",e.description=t.description??"",e.parameters=t.parameters??void 0,e.metadata=t.metadata??void 0,e}};function Rg(){return{description:"",value:""}}var Ki={encode(t,e=new U){return t.description!==""&&e.uint32(10).string(t.description),t.value!==""&&e.uint32(18).string(t.value),e},decode(t,e){let n=t instanceof R?t:new R(t),r=e===void 0?n.len:n.pos+e,o=Rg();for(;n.pos<r;){let i=n.uint32();switch(i>>>3){case 1:if(i!==10)break;o.description=n.string();continue;case 2:if(i!==18)break;o.value=n.string();continue}if((i&7)===4||i===0)break;n.skip(i&7)}return o},create(t){return Ki.fromPartial(t??{})},fromPartial(t){let e=Rg();return e.description=t.description??"",e.value=t.value??"",e}};function Cg(){return{interruptId:"",status:"",payload:void 0,metadata:void 0}}var Ji={encode(t,e=new U){return t.interruptId!==""&&e.uint32(10).string(t.interruptId),t.status!==""&&e.uint32(18).string(t.status),t.payload!==void 0&&D.encode(D.wrap(t.payload),e.uint32(26).fork()).join(),t.metadata!==void 0&&ne.encode(ne.wrap(t.metadata),e.uint32(34).fork()).join(),e},decode(t,e){let n=t instanceof R?t:new R(t),r=e===void 0?n.len:n.pos+e,o=Cg();for(;n.pos<r;){let i=n.uint32();switch(i>>>3){case 1:if(i!==10)break;o.interruptId=n.string();continue;case 2:if(i!==18)break;o.status=n.string();continue;case 3:if(i!==26)break;o.payload=D.unwrap(D.decode(n,n.uint32()));continue;case 4:if(i!==34)break;o.metadata=ne.unwrap(ne.decode(n,n.uint32()));continue}if((i&7)===4||i===0)break;n.skip(i&7)}return o},create(t){return Ji.fromPartial(t??{})},fromPartial(t){let e=Cg();return e.interruptId=t.interruptId??"",e.status=t.status??"",e.payload=t.payload??void 0,e.metadata=t.metadata??void 0,e}};function Ng(){return{threadId:"",runId:"",parentRunId:void 0,state:void 0,messages:[],tools:[],context:[],forwardedProps:void 0,resume:[],protocolVersion:void 0}}var Qi={encode(t,e=new U){t.threadId!==""&&e.uint32(10).string(t.threadId),t.runId!==""&&e.uint32(18).string(t.runId),t.parentRunId!==void 0&&e.uint32(26).string(t.parentRunId),t.state!==void 0&&D.encode(D.wrap(t.state),e.uint32(34).fork()).join();for(let n of t.messages)an.encode(n,e.uint32(42).fork()).join();for(let n of t.tools)Xi.encode(n,e.uint32(50).fork()).join();for(let n of t.context)Ki.encode(n,e.uint32(58).fork()).join();t.forwardedProps!==void 0&&D.encode(D.wrap(t.forwardedProps),e.uint32(66).fork()).join();for(let n of t.resume)Ji.encode(n,e.uint32(74).fork()).join();return t.protocolVersion!==void 0&&e.uint32(82).string(t.protocolVersion),e},decode(t,e){let n=t instanceof R?t:new R(t),r=e===void 0?n.len:n.pos+e,o=Ng();for(;n.pos<r;){let i=n.uint32();switch(i>>>3){case 1:if(i!==10)break;o.threadId=n.string();continue;case 2:if(i!==18)break;o.runId=n.string();continue;case 3:if(i!==26)break;o.parentRunId=n.string();continue;case 4:if(i!==34)break;o.state=D.unwrap(D.decode(n,n.uint32()));continue;case 5:if(i!==42)break;o.messages.push(an.decode(n,n.uint32()));continue;case 6:if(i!==50)break;o.tools.push(Xi.decode(n,n.uint32()));continue;case 7:if(i!==58)break;o.context.push(Ki.decode(n,n.uint32()));continue;case 8:if(i!==66)break;o.forwardedProps=D.unwrap(D.decode(n,n.uint32()));continue;case 9:if(i!==74)break;o.resume.push(Ji.decode(n,n.uint32()));continue;case 10:if(i!==82)break;o.protocolVersion=n.string();continue}if((i&7)===4||i===0)break;n.skip(i&7)}return o},create(t){return Qi.fromPartial(t??{})},fromPartial(t){let e=Ng();return e.threadId=t.threadId??"",e.runId=t.runId??"",e.parentRunId=t.parentRunId??void 0,e.state=t.state??void 0,e.messages=t.messages?.map(n=>an.fromPartial(n))||[],e.tools=t.tools?.map(n=>Xi.fromPartial(n))||[],e.context=t.context?.map(n=>Ki.fromPartial(n))||[],e.forwardedProps=t.forwardedProps??void 0,e.resume=t.resume?.map(n=>Ji.fromPartial(n))||[],e.protocolVersion=t.protocolVersion??void 0,e}};function Og(){return{id:"",reason:"",message:void 0,toolCallId:void 0,responseSchema:void 0,expiresAt:void 0,metadata:void 0,subagentRunId:void 0}}var ea={encode(t,e=new U){return t.id!==""&&e.uint32(10).string(t.id),t.reason!==""&&e.uint32(18).string(t.reason),t.message!==void 0&&e.uint32(26).string(t.message),t.toolCallId!==void 0&&e.uint32(34).string(t.toolCallId),t.responseSchema!==void 0&&D.encode(D.wrap(t.responseSchema),e.uint32(42).fork()).join(),t.expiresAt!==void 0&&e.uint32(50).string(t.expiresAt),t.metadata!==void 0&&D.encode(D.wrap(t.metadata),e.uint32(58).fork()).join(),t.subagentRunId!==void 0&&e.uint32(66).string(t.subagentRunId),e},decode(t,e){let n=t instanceof R?t:new R(t),r=e===void 0?n.len:n.pos+e,o=Og();for(;n.pos<r;){let i=n.uint32();switch(i>>>3){case 1:if(i!==10)break;o.id=n.string();continue;case 2:if(i!==18)break;o.reason=n.string();continue;case 3:if(i!==26)break;o.message=n.string();continue;case 4:if(i!==34)break;o.toolCallId=n.string();continue;case 5:if(i!==42)break;o.responseSchema=D.unwrap(D.decode(n,n.uint32()));continue;case 6:if(i!==50)break;o.expiresAt=n.string();continue;case 7:if(i!==58)break;o.metadata=D.unwrap(D.decode(n,n.uint32()));continue;case 8:if(i!==66)break;o.subagentRunId=n.string();continue}if((i&7)===4||i===0)break;n.skip(i&7)}return o},create(t){return ea.fromPartial(t??{})},fromPartial(t){let e=Og();return e.id=t.id??"",e.reason=t.reason??"",e.message=t.message??void 0,e.toolCallId=t.toolCallId??void 0,e.responseSchema=t.responseSchema??void 0,e.expiresAt=t.expiresAt??void 0,e.metadata=t.metadata??void 0,e.subagentRunId=t.subagentRunId??void 0,e}},y0=(function(t){return t[t.TEXT_MESSAGE_START=0]="TEXT_MESSAGE_START",t[t.TEXT_MESSAGE_CONTENT=1]="TEXT_MESSAGE_CONTENT",t[t.TEXT_MESSAGE_END=2]="TEXT_MESSAGE_END",t[t.TOOL_CALL_START=3]="TOOL_CALL_START",t[t.TOOL_CALL_ARGS=4]="TOOL_CALL_ARGS",t[t.TOOL_CALL_END=5]="TOOL_CALL_END",t[t.STATE_SNAPSHOT=6]="STATE_SNAPSHOT",t[t.STATE_DELTA=7]="STATE_DELTA",t[t.MESSAGES_SNAPSHOT=8]="MESSAGES_SNAPSHOT",t[t.RAW=9]="RAW",t[t.CUSTOM=10]="CUSTOM",t[t.RUN_STARTED=11]="RUN_STARTED",t[t.RUN_FINISHED=12]="RUN_FINISHED",t[t.RUN_ERROR=13]="RUN_ERROR",t[t.STEP_STARTED=14]="STEP_STARTED",t[t.STEP_FINISHED=15]="STEP_FINISHED",t[t.SUBAGENT_STARTED=16]="SUBAGENT_STARTED",t[t.SUBAGENT_FINISHED=17]="SUBAGENT_FINISHED",t[t.SUBAGENT_ERROR=18]="SUBAGENT_ERROR",t[t.TEXT_MESSAGE_CHUNK=19]="TEXT_MESSAGE_CHUNK",t[t.TOOL_CALL_CHUNK=20]="TOOL_CALL_CHUNK",t[t.TOOL_CALL_RESULT=21]="TOOL_CALL_RESULT",t[t.ACTIVITY_SNAPSHOT=22]="ACTIVITY_SNAPSHOT",t[t.ACTIVITY_DELTA=23]="ACTIVITY_DELTA",t[t.REASONING_START=24]="REASONING_START",t[t.REASONING_MESSAGE_START=25]="REASONING_MESSAGE_START",t[t.REASONING_MESSAGE_CONTENT=26]="REASONING_MESSAGE_CONTENT",t[t.REASONING_MESSAGE_END=27]="REASONING_MESSAGE_END",t[t.REASONING_MESSAGE_CHUNK=28]="REASONING_MESSAGE_CHUNK",t[t.REASONING_END=29]="REASONING_END",t[t.REASONING_ENCRYPTED_VALUE=30]="REASONING_ENCRYPTED_VALUE",t[t.UNRECOGNIZED=-1]="UNRECOGNIZED",t})({});function Pg(){return{type:0,timestamp:void 0,rawEvent:void 0,metadata:void 0}}var N={encode(t,e=new U){return t.type!==0&&e.uint32(8).int32(t.type),t.timestamp!==void 0&&e.uint32(16).int64(t.timestamp),t.rawEvent!==void 0&&D.encode(D.wrap(t.rawEvent),e.uint32(26).fork()).join(),t.metadata!==void 0&&ne.encode(ne.wrap(t.metadata),e.uint32(34).fork()).join(),e},decode(t,e){let n=t instanceof R?t:new R(t),r=e===void 0?n.len:n.pos+e,o=Pg();for(;n.pos<r;){let i=n.uint32();switch(i>>>3){case 1:if(i!==8)break;o.type=n.int32();continue;case 2:if(i!==16)break;o.timestamp=tn(n.int64());continue;case 3:if(i!==26)break;o.rawEvent=D.unwrap(D.decode(n,n.uint32()));continue;case 4:if(i!==34)break;o.metadata=ne.unwrap(ne.decode(n,n.uint32()));continue}if((i&7)===4||i===0)break;n.skip(i&7)}return o},create(t){return N.fromPartial(t??{})},fromPartial(t){let e=Pg();return e.type=t.type??0,e.timestamp=t.timestamp??void 0,e.rawEvent=t.rawEvent??void 0,e.metadata=t.metadata??void 0,e}};function Mg(){return{baseEvent:void 0,messageId:"",role:void 0,name:void 0,subagentRunId:void 0}}var ta={encode(t,e=new U){return t.baseEvent!==void 0&&N.encode(t.baseEvent,e.uint32(10).fork()).join(),t.messageId!==""&&e.uint32(18).string(t.messageId),t.role!==void 0&&e.uint32(26).string(t.role),t.name!==void 0&&e.uint32(34).string(t.name),t.subagentRunId!==void 0&&e.uint32(42).string(t.subagentRunId),e},decode(t,e){let n=t instanceof R?t:new R(t),r=e===void 0?n.len:n.pos+e,o=Mg();for(;n.pos<r;){let i=n.uint32();switch(i>>>3){case 1:if(i!==10)break;o.baseEvent=N.decode(n,n.uint32());continue;case 2:if(i!==18)break;o.messageId=n.string();continue;case 3:if(i!==26)break;o.role=n.string();continue;case 4:if(i!==34)break;o.name=n.string();continue;case 5:if(i!==42)break;o.subagentRunId=n.string();continue}if((i&7)===4||i===0)break;n.skip(i&7)}return o},create(t){return ta.fromPartial(t??{})},fromPartial(t){let e=Mg();return e.baseEvent=t.baseEvent!==void 0&&t.baseEvent!==null?N.fromPartial(t.baseEvent):void 0,e.messageId=t.messageId??"",e.role=t.role??void 0,e.name=t.name??void 0,e.subagentRunId=t.subagentRunId??void 0,e}};function zg(){return{baseEvent:void 0,messageId:"",delta:"",subagentRunId:void 0}}var na={encode(t,e=new U){return t.baseEvent!==void 0&&N.encode(t.baseEvent,e.uint32(10).fork()).join(),t.messageId!==""&&e.uint32(18).string(t.messageId),t.delta!==""&&e.uint32(26).string(t.delta),t.subagentRunId!==void 0&&e.uint32(34).string(t.subagentRunId),e},decode(t,e){let n=t instanceof R?t:new R(t),r=e===void 0?n.len:n.pos+e,o=zg();for(;n.pos<r;){let i=n.uint32();switch(i>>>3){case 1:if(i!==10)break;o.baseEvent=N.decode(n,n.uint32());continue;case 2:if(i!==18)break;o.messageId=n.string();continue;case 3:if(i!==26)break;o.delta=n.string();continue;case 4:if(i!==34)break;o.subagentRunId=n.string();continue}if((i&7)===4||i===0)break;n.skip(i&7)}return o},create(t){return na.fromPartial(t??{})},fromPartial(t){let e=zg();return e.baseEvent=t.baseEvent!==void 0&&t.baseEvent!==null?N.fromPartial(t.baseEvent):void 0,e.messageId=t.messageId??"",e.delta=t.delta??"",e.subagentRunId=t.subagentRunId??void 0,e}};function Lg(){return{baseEvent:void 0,messageId:"",subagentRunId:void 0}}var ra={encode(t,e=new U){return t.baseEvent!==void 0&&N.encode(t.baseEvent,e.uint32(10).fork()).join(),t.messageId!==""&&e.uint32(18).string(t.messageId),t.subagentRunId!==void 0&&e.uint32(26).string(t.subagentRunId),e},decode(t,e){let n=t instanceof R?t:new R(t),r=e===void 0?n.len:n.pos+e,o=Lg();for(;n.pos<r;){let i=n.uint32();switch(i>>>3){case 1:if(i!==10)break;o.baseEvent=N.decode(n,n.uint32());continue;case 2:if(i!==18)break;o.messageId=n.string();continue;case 3:if(i!==26)break;o.subagentRunId=n.string();continue}if((i&7)===4||i===0)break;n.skip(i&7)}return o},create(t){return ra.fromPartial(t??{})},fromPartial(t){let e=Lg();return e.baseEvent=t.baseEvent!==void 0&&t.baseEvent!==null?N.fromPartial(t.baseEvent):void 0,e.messageId=t.messageId??"",e.subagentRunId=t.subagentRunId??void 0,e}};function Dg(){return{baseEvent:void 0,messageId:void 0,role:void 0,delta:void 0,name:void 0,subagentRunId:void 0}}var oa={encode(t,e=new U){return t.baseEvent!==void 0&&N.encode(t.baseEvent,e.uint32(10).fork()).join(),t.messageId!==void 0&&e.uint32(18).string(t.messageId),t.role!==void 0&&e.uint32(26).string(t.role),t.delta!==void 0&&e.uint32(34).string(t.delta),t.name!==void 0&&e.uint32(42).string(t.name),t.subagentRunId!==void 0&&e.uint32(50).string(t.subagentRunId),e},decode(t,e){let n=t instanceof R?t:new R(t),r=e===void 0?n.len:n.pos+e,o=Dg();for(;n.pos<r;){let i=n.uint32();switch(i>>>3){case 1:if(i!==10)break;o.baseEvent=N.decode(n,n.uint32());continue;case 2:if(i!==18)break;o.messageId=n.string();continue;case 3:if(i!==26)break;o.role=n.string();continue;case 4:if(i!==34)break;o.delta=n.string();continue;case 5:if(i!==42)break;o.name=n.string();continue;case 6:if(i!==50)break;o.subagentRunId=n.string();continue}if((i&7)===4||i===0)break;n.skip(i&7)}return o},create(t){return oa.fromPartial(t??{})},fromPartial(t){let e=Dg();return e.baseEvent=t.baseEvent!==void 0&&t.baseEvent!==null?N.fromPartial(t.baseEvent):void 0,e.messageId=t.messageId??void 0,e.role=t.role??void 0,e.delta=t.delta??void 0,e.name=t.name??void 0,e.subagentRunId=t.subagentRunId??void 0,e}};function $g(){return{baseEvent:void 0,toolCallId:"",toolCallName:"",parentMessageId:void 0,subagentRunId:void 0}}var ia={encode(t,e=new U){return t.baseEvent!==void 0&&N.encode(t.baseEvent,e.uint32(10).fork()).join(),t.toolCallId!==""&&e.uint32(18).string(t.toolCallId),t.toolCallName!==""&&e.uint32(26).string(t.toolCallName),t.parentMessageId!==void 0&&e.uint32(34).string(t.parentMessageId),t.subagentRunId!==void 0&&e.uint32(42).string(t.subagentRunId),e},decode(t,e){let n=t instanceof R?t:new R(t),r=e===void 0?n.len:n.pos+e,o=$g();for(;n.pos<r;){let i=n.uint32();switch(i>>>3){case 1:if(i!==10)break;o.baseEvent=N.decode(n,n.uint32());continue;case 2:if(i!==18)break;o.toolCallId=n.string();continue;case 3:if(i!==26)break;o.toolCallName=n.string();continue;case 4:if(i!==34)break;o.parentMessageId=n.string();continue;case 5:if(i!==42)break;o.subagentRunId=n.string();continue}if((i&7)===4||i===0)break;n.skip(i&7)}return o},create(t){return ia.fromPartial(t??{})},fromPartial(t){let e=$g();return e.baseEvent=t.baseEvent!==void 0&&t.baseEvent!==null?N.fromPartial(t.baseEvent):void 0,e.toolCallId=t.toolCallId??"",e.toolCallName=t.toolCallName??"",e.parentMessageId=t.parentMessageId??void 0,e.subagentRunId=t.subagentRunId??void 0,e}};function Ug(){return{baseEvent:void 0,toolCallId:"",delta:"",subagentRunId:void 0}}var aa={encode(t,e=new U){return t.baseEvent!==void 0&&N.encode(t.baseEvent,e.uint32(10).fork()).join(),t.toolCallId!==""&&e.uint32(18).string(t.toolCallId),t.delta!==""&&e.uint32(26).string(t.delta),t.subagentRunId!==void 0&&e.uint32(34).string(t.subagentRunId),e},decode(t,e){let n=t instanceof R?t:new R(t),r=e===void 0?n.len:n.pos+e,o=Ug();for(;n.pos<r;){let i=n.uint32();switch(i>>>3){case 1:if(i!==10)break;o.baseEvent=N.decode(n,n.uint32());continue;case 2:if(i!==18)break;o.toolCallId=n.string();continue;case 3:if(i!==26)break;o.delta=n.string();continue;case 4:if(i!==34)break;o.subagentRunId=n.string();continue}if((i&7)===4||i===0)break;n.skip(i&7)}return o},create(t){return aa.fromPartial(t??{})},fromPartial(t){let e=Ug();return e.baseEvent=t.baseEvent!==void 0&&t.baseEvent!==null?N.fromPartial(t.baseEvent):void 0,e.toolCallId=t.toolCallId??"",e.delta=t.delta??"",e.subagentRunId=t.subagentRunId??void 0,e}};function Hg(){return{baseEvent:void 0,toolCallId:"",subagentRunId:void 0}}var sa={encode(t,e=new U){return t.baseEvent!==void 0&&N.encode(t.baseEvent,e.uint32(10).fork()).join(),t.toolCallId!==""&&e.uint32(18).string(t.toolCallId),t.subagentRunId!==void 0&&e.uint32(26).string(t.subagentRunId),e},decode(t,e){let n=t instanceof R?t:new R(t),r=e===void 0?n.len:n.pos+e,o=Hg();for(;n.pos<r;){let i=n.uint32();switch(i>>>3){case 1:if(i!==10)break;o.baseEvent=N.decode(n,n.uint32());continue;case 2:if(i!==18)break;o.toolCallId=n.string();continue;case 3:if(i!==26)break;o.subagentRunId=n.string();continue}if((i&7)===4||i===0)break;n.skip(i&7)}return o},create(t){return sa.fromPartial(t??{})},fromPartial(t){let e=Hg();return e.baseEvent=t.baseEvent!==void 0&&t.baseEvent!==null?N.fromPartial(t.baseEvent):void 0,e.toolCallId=t.toolCallId??"",e.subagentRunId=t.subagentRunId??void 0,e}};function Fg(){return{baseEvent:void 0,toolCallId:void 0,toolCallName:void 0,parentMessageId:void 0,delta:void 0,subagentRunId:void 0}}var la={encode(t,e=new U){return t.baseEvent!==void 0&&N.encode(t.baseEvent,e.uint32(10).fork()).join(),t.toolCallId!==void 0&&e.uint32(18).string(t.toolCallId),t.toolCallName!==void 0&&e.uint32(26).string(t.toolCallName),t.parentMessageId!==void 0&&e.uint32(34).string(t.parentMessageId),t.delta!==void 0&&e.uint32(42).string(t.delta),t.subagentRunId!==void 0&&e.uint32(50).string(t.subagentRunId),e},decode(t,e){let n=t instanceof R?t:new R(t),r=e===void 0?n.len:n.pos+e,o=Fg();for(;n.pos<r;){let i=n.uint32();switch(i>>>3){case 1:if(i!==10)break;o.baseEvent=N.decode(n,n.uint32());continue;case 2:if(i!==18)break;o.toolCallId=n.string();continue;case 3:if(i!==26)break;o.toolCallName=n.string();continue;case 4:if(i!==34)break;o.parentMessageId=n.string();continue;case 5:if(i!==42)break;o.delta=n.string();continue;case 6:if(i!==50)break;o.subagentRunId=n.string();continue}if((i&7)===4||i===0)break;n.skip(i&7)}return o},create(t){return la.fromPartial(t??{})},fromPartial(t){let e=Fg();return e.baseEvent=t.baseEvent!==void 0&&t.baseEvent!==null?N.fromPartial(t.baseEvent):void 0,e.toolCallId=t.toolCallId??void 0,e.toolCallName=t.toolCallName??void 0,e.parentMessageId=t.parentMessageId??void 0,e.delta=t.delta??void 0,e.subagentRunId=t.subagentRunId??void 0,e}};function Gg(){return{baseEvent:void 0,subagentRunId:void 0,messageId:"",toolCallId:"",content:void 0,role:void 0,contentParts:[]}}var ca={encode(t,e=new U){t.baseEvent!==void 0&&N.encode(t.baseEvent,e.uint32(10).fork()).join(),t.subagentRunId!==void 0&&e.uint32(18).string(t.subagentRunId),t.messageId!==""&&e.uint32(26).string(t.messageId),t.toolCallId!==""&&e.uint32(34).string(t.toolCallId),t.content!==void 0&&e.uint32(42).string(t.content),t.role!==void 0&&e.uint32(50).string(t.role);for(let n of t.contentParts)on.encode(n,e.uint32(58).fork()).join();return e},decode(t,e){let n=t instanceof R?t:new R(t),r=e===void 0?n.len:n.pos+e,o=Gg();for(;n.pos<r;){let i=n.uint32();switch(i>>>3){case 1:if(i!==10)break;o.baseEvent=N.decode(n,n.uint32());continue;case 2:if(i!==18)break;o.subagentRunId=n.string();continue;case 3:if(i!==26)break;o.messageId=n.string();continue;case 4:if(i!==34)break;o.toolCallId=n.string();continue;case 5:if(i!==42)break;o.content=n.string();continue;case 6:if(i!==50)break;o.role=n.string();continue;case 7:if(i!==58)break;o.contentParts.push(on.decode(n,n.uint32()));continue}if((i&7)===4||i===0)break;n.skip(i&7)}return o},create(t){return ca.fromPartial(t??{})},fromPartial(t){let e=Gg();return e.baseEvent=t.baseEvent!==void 0&&t.baseEvent!==null?N.fromPartial(t.baseEvent):void 0,e.subagentRunId=t.subagentRunId??void 0,e.messageId=t.messageId??"",e.toolCallId=t.toolCallId??"",e.content=t.content??void 0,e.role=t.role??void 0,e.contentParts=t.contentParts?.map(n=>on.fromPartial(n))||[],e}};function Zg(){return{baseEvent:void 0,snapshot:void 0,subagentRunId:void 0}}var ua={encode(t,e=new U){return t.baseEvent!==void 0&&N.encode(t.baseEvent,e.uint32(10).fork()).join(),t.snapshot!==void 0&&D.encode(D.wrap(t.snapshot),e.uint32(18).fork()).join(),t.subagentRunId!==void 0&&e.uint32(26).string(t.subagentRunId),e},decode(t,e){let n=t instanceof R?t:new R(t),r=e===void 0?n.len:n.pos+e,o=Zg();for(;n.pos<r;){let i=n.uint32();switch(i>>>3){case 1:if(i!==10)break;o.baseEvent=N.decode(n,n.uint32());continue;case 2:if(i!==18)break;o.snapshot=D.unwrap(D.decode(n,n.uint32()));continue;case 3:if(i!==26)break;o.subagentRunId=n.string();continue}if((i&7)===4||i===0)break;n.skip(i&7)}return o},create(t){return ua.fromPartial(t??{})},fromPartial(t){let e=Zg();return e.baseEvent=t.baseEvent!==void 0&&t.baseEvent!==null?N.fromPartial(t.baseEvent):void 0,e.snapshot=t.snapshot??void 0,e.subagentRunId=t.subagentRunId??void 0,e}};function Bg(){return{baseEvent:void 0,delta:[],subagentRunId:void 0}}var da={encode(t,e=new U){t.baseEvent!==void 0&&N.encode(t.baseEvent,e.uint32(10).fork()).join();for(let n of t.delta)rn.encode(n,e.uint32(18).fork()).join();return t.subagentRunId!==void 0&&e.uint32(26).string(t.subagentRunId),e},decode(t,e){let n=t instanceof R?t:new R(t),r=e===void 0?n.len:n.pos+e,o=Bg();for(;n.pos<r;){let i=n.uint32();switch(i>>>3){case 1:if(i!==10)break;o.baseEvent=N.decode(n,n.uint32());continue;case 2:if(i!==18)break;o.delta.push(rn.decode(n,n.uint32()));continue;case 3:if(i!==26)break;o.subagentRunId=n.string();continue}if((i&7)===4||i===0)break;n.skip(i&7)}return o},create(t){return da.fromPartial(t??{})},fromPartial(t){let e=Bg();return e.baseEvent=t.baseEvent!==void 0&&t.baseEvent!==null?N.fromPartial(t.baseEvent):void 0,e.delta=t.delta?.map(n=>rn.fromPartial(n))||[],e.subagentRunId=t.subagentRunId??void 0,e}};function Vg(){return{baseEvent:void 0,messages:[]}}var pa={encode(t,e=new U){t.baseEvent!==void 0&&N.encode(t.baseEvent,e.uint32(10).fork()).join();for(let n of t.messages)an.encode(n,e.uint32(18).fork()).join();return e},decode(t,e){let n=t instanceof R?t:new R(t),r=e===void 0?n.len:n.pos+e,o=Vg();for(;n.pos<r;){let i=n.uint32();switch(i>>>3){case 1:if(i!==10)break;o.baseEvent=N.decode(n,n.uint32());continue;case 2:if(i!==18)break;o.messages.push(an.decode(n,n.uint32()));continue}if((i&7)===4||i===0)break;n.skip(i&7)}return o},create(t){return pa.fromPartial(t??{})},fromPartial(t){let e=Vg();return e.baseEvent=t.baseEvent!==void 0&&t.baseEvent!==null?N.fromPartial(t.baseEvent):void 0,e.messages=t.messages?.map(n=>an.fromPartial(n))||[],e}};function jg(){return{baseEvent:void 0,subagentRunId:void 0,messageId:"",activityType:"",content:void 0,replace:void 0}}var ha={encode(t,e=new U){return t.baseEvent!==void 0&&N.encode(t.baseEvent,e.uint32(10).fork()).join(),t.subagentRunId!==void 0&&e.uint32(18).string(t.subagentRunId),t.messageId!==""&&e.uint32(26).string(t.messageId),t.activityType!==""&&e.uint32(34).string(t.activityType),t.content!==void 0&&ne.encode(ne.wrap(t.content),e.uint32(42).fork()).join(),t.replace!==void 0&&e.uint32(48).bool(t.replace),e},decode(t,e){let n=t instanceof R?t:new R(t),r=e===void 0?n.len:n.pos+e,o=jg();for(;n.pos<r;){let i=n.uint32();switch(i>>>3){case 1:if(i!==10)break;o.baseEvent=N.decode(n,n.uint32());continue;case 2:if(i!==18)break;o.subagentRunId=n.string();continue;case 3:if(i!==26)break;o.messageId=n.string();continue;case 4:if(i!==34)break;o.activityType=n.string();continue;case 5:if(i!==42)break;o.content=ne.unwrap(ne.decode(n,n.uint32()));continue;case 6:if(i!==48)break;o.replace=n.bool();continue}if((i&7)===4||i===0)break;n.skip(i&7)}return o},create(t){return ha.fromPartial(t??{})},fromPartial(t){let e=jg();return e.baseEvent=t.baseEvent!==void 0&&t.baseEvent!==null?N.fromPartial(t.baseEvent):void 0,e.subagentRunId=t.subagentRunId??void 0,e.messageId=t.messageId??"",e.activityType=t.activityType??"",e.content=t.content??void 0,e.replace=t.replace??void 0,e}};function Wg(){return{baseEvent:void 0,subagentRunId:void 0,messageId:"",activityType:"",patch:[]}}var fa={encode(t,e=new U){t.baseEvent!==void 0&&N.encode(t.baseEvent,e.uint32(10).fork()).join(),t.subagentRunId!==void 0&&e.uint32(18).string(t.subagentRunId),t.messageId!==""&&e.uint32(26).string(t.messageId),t.activityType!==""&&e.uint32(34).string(t.activityType);for(let n of t.patch)rn.encode(n,e.uint32(42).fork()).join();return e},decode(t,e){let n=t instanceof R?t:new R(t),r=e===void 0?n.len:n.pos+e,o=Wg();for(;n.pos<r;){let i=n.uint32();switch(i>>>3){case 1:if(i!==10)break;o.baseEvent=N.decode(n,n.uint32());continue;case 2:if(i!==18)break;o.subagentRunId=n.string();continue;case 3:if(i!==26)break;o.messageId=n.string();continue;case 4:if(i!==34)break;o.activityType=n.string();continue;case 5:if(i!==42)break;o.patch.push(rn.decode(n,n.uint32()));continue}if((i&7)===4||i===0)break;n.skip(i&7)}return o},create(t){return fa.fromPartial(t??{})},fromPartial(t){let e=Wg();return e.baseEvent=t.baseEvent!==void 0&&t.baseEvent!==null?N.fromPartial(t.baseEvent):void 0,e.subagentRunId=t.subagentRunId??void 0,e.messageId=t.messageId??"",e.activityType=t.activityType??"",e.patch=t.patch?.map(n=>rn.fromPartial(n))||[],e}};function qg(){return{baseEvent:void 0,event:void 0,source:void 0,subagentRunId:void 0}}var ma={encode(t,e=new U){return t.baseEvent!==void 0&&N.encode(t.baseEvent,e.uint32(10).fork()).join(),t.event!==void 0&&D.encode(D.wrap(t.event),e.uint32(18).fork()).join(),t.source!==void 0&&e.uint32(26).string(t.source),t.subagentRunId!==void 0&&e.uint32(34).string(t.subagentRunId),e},decode(t,e){let n=t instanceof R?t:new R(t),r=e===void 0?n.len:n.pos+e,o=qg();for(;n.pos<r;){let i=n.uint32();switch(i>>>3){case 1:if(i!==10)break;o.baseEvent=N.decode(n,n.uint32());continue;case 2:if(i!==18)break;o.event=D.unwrap(D.decode(n,n.uint32()));continue;case 3:if(i!==26)break;o.source=n.string();continue;case 4:if(i!==34)break;o.subagentRunId=n.string();continue}if((i&7)===4||i===0)break;n.skip(i&7)}return o},create(t){return ma.fromPartial(t??{})},fromPartial(t){let e=qg();return e.baseEvent=t.baseEvent!==void 0&&t.baseEvent!==null?N.fromPartial(t.baseEvent):void 0,e.event=t.event??void 0,e.source=t.source??void 0,e.subagentRunId=t.subagentRunId??void 0,e}};function Yg(){return{baseEvent:void 0,name:"",value:void 0,subagentRunId:void 0}}var ga={encode(t,e=new U){return t.baseEvent!==void 0&&N.encode(t.baseEvent,e.uint32(10).fork()).join(),t.name!==""&&e.uint32(18).string(t.name),t.value!==void 0&&D.encode(D.wrap(t.value),e.uint32(26).fork()).join(),t.subagentRunId!==void 0&&e.uint32(34).string(t.subagentRunId),e},decode(t,e){let n=t instanceof R?t:new R(t),r=e===void 0?n.len:n.pos+e,o=Yg();for(;n.pos<r;){let i=n.uint32();switch(i>>>3){case 1:if(i!==10)break;o.baseEvent=N.decode(n,n.uint32());continue;case 2:if(i!==18)break;o.name=n.string();continue;case 3:if(i!==26)break;o.value=D.unwrap(D.decode(n,n.uint32()));continue;case 4:if(i!==34)break;o.subagentRunId=n.string();continue}if((i&7)===4||i===0)break;n.skip(i&7)}return o},create(t){return ga.fromPartial(t??{})},fromPartial(t){let e=Yg();return e.baseEvent=t.baseEvent!==void 0&&t.baseEvent!==null?N.fromPartial(t.baseEvent):void 0,e.name=t.name??"",e.value=t.value??void 0,e.subagentRunId=t.subagentRunId??void 0,e}};function Xg(){return{baseEvent:void 0,threadId:"",runId:"",parentRunId:void 0,input:void 0,protocolVersion:void 0}}var va={encode(t,e=new U){return t.baseEvent!==void 0&&N.encode(t.baseEvent,e.uint32(10).fork()).join(),t.threadId!==""&&e.uint32(18).string(t.threadId),t.runId!==""&&e.uint32(26).string(t.runId),t.parentRunId!==void 0&&e.uint32(34).string(t.parentRunId),t.input!==void 0&&Qi.encode(t.input,e.uint32(42).fork()).join(),t.protocolVersion!==void 0&&e.uint32(50).string(t.protocolVersion),e},decode(t,e){let n=t instanceof R?t:new R(t),r=e===void 0?n.len:n.pos+e,o=Xg();for(;n.pos<r;){let i=n.uint32();switch(i>>>3){case 1:if(i!==10)break;o.baseEvent=N.decode(n,n.uint32());continue;case 2:if(i!==18)break;o.threadId=n.string();continue;case 3:if(i!==26)break;o.runId=n.string();continue;case 4:if(i!==34)break;o.parentRunId=n.string();continue;case 5:if(i!==42)break;o.input=Qi.decode(n,n.uint32());continue;case 6:if(i!==50)break;o.protocolVersion=n.string();continue}if((i&7)===4||i===0)break;n.skip(i&7)}return o},create(t){return va.fromPartial(t??{})},fromPartial(t){let e=Xg();return e.baseEvent=t.baseEvent!==void 0&&t.baseEvent!==null?N.fromPartial(t.baseEvent):void 0,e.threadId=t.threadId??"",e.runId=t.runId??"",e.parentRunId=t.parentRunId??void 0,e.input=t.input!==void 0&&t.input!==null?Qi.fromPartial(t.input):void 0,e.protocolVersion=t.protocolVersion??void 0,e}};function Kg(){return{baseEvent:void 0,threadId:"",runId:"",result:void 0,outcome:"",interrupts:[],usage:[],pendingToolCallIds:[]}}var ba={encode(t,e=new U){t.baseEvent!==void 0&&N.encode(t.baseEvent,e.uint32(10).fork()).join(),t.threadId!==""&&e.uint32(18).string(t.threadId),t.runId!==""&&e.uint32(26).string(t.runId),t.result!==void 0&&D.encode(D.wrap(t.result),e.uint32(34).fork()).join(),t.outcome!==""&&e.uint32(42).string(t.outcome);for(let n of t.interrupts)ea.encode(n,e.uint32(50).fork()).join();for(let n of t.usage)sn.encode(n,e.uint32(58).fork()).join();for(let n of t.pendingToolCallIds)e.uint32(66).string(n);return e},decode(t,e){let n=t instanceof R?t:new R(t),r=e===void 0?n.len:n.pos+e,o=Kg();for(;n.pos<r;){let i=n.uint32();switch(i>>>3){case 1:if(i!==10)break;o.baseEvent=N.decode(n,n.uint32());continue;case 2:if(i!==18)break;o.threadId=n.string();continue;case 3:if(i!==26)break;o.runId=n.string();continue;case 4:if(i!==34)break;o.result=D.unwrap(D.decode(n,n.uint32()));continue;case 5:if(i!==42)break;o.outcome=n.string();continue;case 6:if(i!==50)break;o.interrupts.push(ea.decode(n,n.uint32()));continue;case 7:if(i!==58)break;o.usage.push(sn.decode(n,n.uint32()));continue;case 8:if(i!==66)break;o.pendingToolCallIds.push(n.string());continue}if((i&7)===4||i===0)break;n.skip(i&7)}return o},create(t){return ba.fromPartial(t??{})},fromPartial(t){let e=Kg();return e.baseEvent=t.baseEvent!==void 0&&t.baseEvent!==null?N.fromPartial(t.baseEvent):void 0,e.threadId=t.threadId??"",e.runId=t.runId??"",e.result=t.result??void 0,e.outcome=t.outcome??"",e.interrupts=t.interrupts?.map(n=>ea.fromPartial(n))||[],e.usage=t.usage?.map(n=>sn.fromPartial(n))||[],e.pendingToolCallIds=t.pendingToolCallIds?.map(n=>n)||[],e}};function Jg(){return{baseEvent:void 0,code:void 0,message:"",usage:[]}}var ya={encode(t,e=new U){t.baseEvent!==void 0&&N.encode(t.baseEvent,e.uint32(10).fork()).join(),t.code!==void 0&&e.uint32(18).string(t.code),t.message!==""&&e.uint32(26).string(t.message);for(let n of t.usage)sn.encode(n,e.uint32(34).fork()).join();return e},decode(t,e){let n=t instanceof R?t:new R(t),r=e===void 0?n.len:n.pos+e,o=Jg();for(;n.pos<r;){let i=n.uint32();switch(i>>>3){case 1:if(i!==10)break;o.baseEvent=N.decode(n,n.uint32());continue;case 2:if(i!==18)break;o.code=n.string();continue;case 3:if(i!==26)break;o.message=n.string();continue;case 4:if(i!==34)break;o.usage.push(sn.decode(n,n.uint32()));continue}if((i&7)===4||i===0)break;n.skip(i&7)}return o},create(t){return ya.fromPartial(t??{})},fromPartial(t){let e=Jg();return e.baseEvent=t.baseEvent!==void 0&&t.baseEvent!==null?N.fromPartial(t.baseEvent):void 0,e.code=t.code??void 0,e.message=t.message??"",e.usage=t.usage?.map(n=>sn.fromPartial(n))||[],e}};function Qg(){return{baseEvent:void 0,stepName:"",subagentRunId:void 0}}var wa={encode(t,e=new U){return t.baseEvent!==void 0&&N.encode(t.baseEvent,e.uint32(10).fork()).join(),t.stepName!==""&&e.uint32(18).string(t.stepName),t.subagentRunId!==void 0&&e.uint32(26).string(t.subagentRunId),e},decode(t,e){let n=t instanceof R?t:new R(t),r=e===void 0?n.len:n.pos+e,o=Qg();for(;n.pos<r;){let i=n.uint32();switch(i>>>3){case 1:if(i!==10)break;o.baseEvent=N.decode(n,n.uint32());continue;case 2:if(i!==18)break;o.stepName=n.string();continue;case 3:if(i!==26)break;o.subagentRunId=n.string();continue}if((i&7)===4||i===0)break;n.skip(i&7)}return o},create(t){return wa.fromPartial(t??{})},fromPartial(t){let e=Qg();return e.baseEvent=t.baseEvent!==void 0&&t.baseEvent!==null?N.fromPartial(t.baseEvent):void 0,e.stepName=t.stepName??"",e.subagentRunId=t.subagentRunId??void 0,e}};function ev(){return{baseEvent:void 0,stepName:"",subagentRunId:void 0}}var Ea={encode(t,e=new U){return t.baseEvent!==void 0&&N.encode(t.baseEvent,e.uint32(10).fork()).join(),t.stepName!==""&&e.uint32(18).string(t.stepName),t.subagentRunId!==void 0&&e.uint32(26).string(t.subagentRunId),e},decode(t,e){let n=t instanceof R?t:new R(t),r=e===void 0?n.len:n.pos+e,o=ev();for(;n.pos<r;){let i=n.uint32();switch(i>>>3){case 1:if(i!==10)break;o.baseEvent=N.decode(n,n.uint32());continue;case 2:if(i!==18)break;o.stepName=n.string();continue;case 3:if(i!==26)break;o.subagentRunId=n.string();continue}if((i&7)===4||i===0)break;n.skip(i&7)}return o},create(t){return Ea.fromPartial(t??{})},fromPartial(t){let e=ev();return e.baseEvent=t.baseEvent!==void 0&&t.baseEvent!==null?N.fromPartial(t.baseEvent):void 0,e.stepName=t.stepName??"",e.subagentRunId=t.subagentRunId??void 0,e}};function tv(){return{baseEvent:void 0,subagentRunId:void 0,messageId:""}}var xa={encode(t,e=new U){return t.baseEvent!==void 0&&N.encode(t.baseEvent,e.uint32(10).fork()).join(),t.subagentRunId!==void 0&&e.uint32(18).string(t.subagentRunId),t.messageId!==""&&e.uint32(26).string(t.messageId),e},decode(t,e){let n=t instanceof R?t:new R(t),r=e===void 0?n.len:n.pos+e,o=tv();for(;n.pos<r;){let i=n.uint32();switch(i>>>3){case 1:if(i!==10)break;o.baseEvent=N.decode(n,n.uint32());continue;case 2:if(i!==18)break;o.subagentRunId=n.string();continue;case 3:if(i!==26)break;o.messageId=n.string();continue}if((i&7)===4||i===0)break;n.skip(i&7)}return o},create(t){return xa.fromPartial(t??{})},fromPartial(t){let e=tv();return e.baseEvent=t.baseEvent!==void 0&&t.baseEvent!==null?N.fromPartial(t.baseEvent):void 0,e.subagentRunId=t.subagentRunId??void 0,e.messageId=t.messageId??"",e}};function nv(){return{baseEvent:void 0,subagentRunId:void 0,messageId:"",role:""}}var Sa={encode(t,e=new U){return t.baseEvent!==void 0&&N.encode(t.baseEvent,e.uint32(10).fork()).join(),t.subagentRunId!==void 0&&e.uint32(18).string(t.subagentRunId),t.messageId!==""&&e.uint32(26).string(t.messageId),t.role!==""&&e.uint32(34).string(t.role),e},decode(t,e){let n=t instanceof R?t:new R(t),r=e===void 0?n.len:n.pos+e,o=nv();for(;n.pos<r;){let i=n.uint32();switch(i>>>3){case 1:if(i!==10)break;o.baseEvent=N.decode(n,n.uint32());continue;case 2:if(i!==18)break;o.subagentRunId=n.string();continue;case 3:if(i!==26)break;o.messageId=n.string();continue;case 4:if(i!==34)break;o.role=n.string();continue}if((i&7)===4||i===0)break;n.skip(i&7)}return o},create(t){return Sa.fromPartial(t??{})},fromPartial(t){let e=nv();return e.baseEvent=t.baseEvent!==void 0&&t.baseEvent!==null?N.fromPartial(t.baseEvent):void 0,e.subagentRunId=t.subagentRunId??void 0,e.messageId=t.messageId??"",e.role=t.role??"",e}};function rv(){return{baseEvent:void 0,subagentRunId:void 0,messageId:"",delta:""}}var _a={encode(t,e=new U){return t.baseEvent!==void 0&&N.encode(t.baseEvent,e.uint32(10).fork()).join(),t.subagentRunId!==void 0&&e.uint32(18).string(t.subagentRunId),t.messageId!==""&&e.uint32(26).string(t.messageId),t.delta!==""&&e.uint32(34).string(t.delta),e},decode(t,e){let n=t instanceof R?t:new R(t),r=e===void 0?n.len:n.pos+e,o=rv();for(;n.pos<r;){let i=n.uint32();switch(i>>>3){case 1:if(i!==10)break;o.baseEvent=N.decode(n,n.uint32());continue;case 2:if(i!==18)break;o.subagentRunId=n.string();continue;case 3:if(i!==26)break;o.messageId=n.string();continue;case 4:if(i!==34)break;o.delta=n.string();continue}if((i&7)===4||i===0)break;n.skip(i&7)}return o},create(t){return _a.fromPartial(t??{})},fromPartial(t){let e=rv();return e.baseEvent=t.baseEvent!==void 0&&t.baseEvent!==null?N.fromPartial(t.baseEvent):void 0,e.subagentRunId=t.subagentRunId??void 0,e.messageId=t.messageId??"",e.delta=t.delta??"",e}};function ov(){return{baseEvent:void 0,subagentRunId:void 0,messageId:""}}var Ta={encode(t,e=new U){return t.baseEvent!==void 0&&N.encode(t.baseEvent,e.uint32(10).fork()).join(),t.subagentRunId!==void 0&&e.uint32(18).string(t.subagentRunId),t.messageId!==""&&e.uint32(26).string(t.messageId),e},decode(t,e){let n=t instanceof R?t:new R(t),r=e===void 0?n.len:n.pos+e,o=ov();for(;n.pos<r;){let i=n.uint32();switch(i>>>3){case 1:if(i!==10)break;o.baseEvent=N.decode(n,n.uint32());continue;case 2:if(i!==18)break;o.subagentRunId=n.string();continue;case 3:if(i!==26)break;o.messageId=n.string();continue}if((i&7)===4||i===0)break;n.skip(i&7)}return o},create(t){return Ta.fromPartial(t??{})},fromPartial(t){let e=ov();return e.baseEvent=t.baseEvent!==void 0&&t.baseEvent!==null?N.fromPartial(t.baseEvent):void 0,e.subagentRunId=t.subagentRunId??void 0,e.messageId=t.messageId??"",e}};function iv(){return{baseEvent:void 0,subagentRunId:void 0,messageId:void 0,delta:void 0}}var Aa={encode(t,e=new U){return t.baseEvent!==void 0&&N.encode(t.baseEvent,e.uint32(10).fork()).join(),t.subagentRunId!==void 0&&e.uint32(18).string(t.subagentRunId),t.messageId!==void 0&&e.uint32(26).string(t.messageId),t.delta!==void 0&&e.uint32(34).string(t.delta),e},decode(t,e){let n=t instanceof R?t:new R(t),r=e===void 0?n.len:n.pos+e,o=iv();for(;n.pos<r;){let i=n.uint32();switch(i>>>3){case 1:if(i!==10)break;o.baseEvent=N.decode(n,n.uint32());continue;case 2:if(i!==18)break;o.subagentRunId=n.string();continue;case 3:if(i!==26)break;o.messageId=n.string();continue;case 4:if(i!==34)break;o.delta=n.string();continue}if((i&7)===4||i===0)break;n.skip(i&7)}return o},create(t){return Aa.fromPartial(t??{})},fromPartial(t){let e=iv();return e.baseEvent=t.baseEvent!==void 0&&t.baseEvent!==null?N.fromPartial(t.baseEvent):void 0,e.subagentRunId=t.subagentRunId??void 0,e.messageId=t.messageId??void 0,e.delta=t.delta??void 0,e}};function av(){return{baseEvent:void 0,subagentRunId:void 0,messageId:""}}var ka={encode(t,e=new U){return t.baseEvent!==void 0&&N.encode(t.baseEvent,e.uint32(10).fork()).join(),t.subagentRunId!==void 0&&e.uint32(18).string(t.subagentRunId),t.messageId!==""&&e.uint32(26).string(t.messageId),e},decode(t,e){let n=t instanceof R?t:new R(t),r=e===void 0?n.len:n.pos+e,o=av();for(;n.pos<r;){let i=n.uint32();switch(i>>>3){case 1:if(i!==10)break;o.baseEvent=N.decode(n,n.uint32());continue;case 2:if(i!==18)break;o.subagentRunId=n.string();continue;case 3:if(i!==26)break;o.messageId=n.string();continue}if((i&7)===4||i===0)break;n.skip(i&7)}return o},create(t){return ka.fromPartial(t??{})},fromPartial(t){let e=av();return e.baseEvent=t.baseEvent!==void 0&&t.baseEvent!==null?N.fromPartial(t.baseEvent):void 0,e.subagentRunId=t.subagentRunId??void 0,e.messageId=t.messageId??"",e}};function sv(){return{baseEvent:void 0,subagentRunId:void 0,subtype:"",entityId:"",encryptedValue:""}}var Ia={encode(t,e=new U){return t.baseEvent!==void 0&&N.encode(t.baseEvent,e.uint32(10).fork()).join(),t.subagentRunId!==void 0&&e.uint32(18).string(t.subagentRunId),t.subtype!==""&&e.uint32(26).string(t.subtype),t.entityId!==""&&e.uint32(34).string(t.entityId),t.encryptedValue!==""&&e.uint32(42).string(t.encryptedValue),e},decode(t,e){let n=t instanceof R?t:new R(t),r=e===void 0?n.len:n.pos+e,o=sv();for(;n.pos<r;){let i=n.uint32();switch(i>>>3){case 1:if(i!==10)break;o.baseEvent=N.decode(n,n.uint32());continue;case 2:if(i!==18)break;o.subagentRunId=n.string();continue;case 3:if(i!==26)break;o.subtype=n.string();continue;case 4:if(i!==34)break;o.entityId=n.string();continue;case 5:if(i!==42)break;o.encryptedValue=n.string();continue}if((i&7)===4||i===0)break;n.skip(i&7)}return o},create(t){return Ia.fromPartial(t??{})},fromPartial(t){let e=sv();return e.baseEvent=t.baseEvent!==void 0&&t.baseEvent!==null?N.fromPartial(t.baseEvent):void 0,e.subagentRunId=t.subagentRunId??void 0,e.subtype=t.subtype??"",e.entityId=t.entityId??"",e.encryptedValue=t.encryptedValue??"",e}};function lv(){return{baseEvent:void 0,subagentRunId:"",name:"",description:void 0,parentSubagentRunId:void 0,parentToolCallId:void 0,parentMessageId:void 0}}var Ra={encode(t,e=new U){return t.baseEvent!==void 0&&N.encode(t.baseEvent,e.uint32(10).fork()).join(),t.subagentRunId!==""&&e.uint32(18).string(t.subagentRunId),t.name!==""&&e.uint32(26).string(t.name),t.description!==void 0&&e.uint32(34).string(t.description),t.parentSubagentRunId!==void 0&&e.uint32(42).string(t.parentSubagentRunId),t.parentToolCallId!==void 0&&e.uint32(50).string(t.parentToolCallId),t.parentMessageId!==void 0&&e.uint32(58).string(t.parentMessageId),e},decode(t,e){let n=t instanceof R?t:new R(t),r=e===void 0?n.len:n.pos+e,o=lv();for(;n.pos<r;){let i=n.uint32();switch(i>>>3){case 1:if(i!==10)break;o.baseEvent=N.decode(n,n.uint32());continue;case 2:if(i!==18)break;o.subagentRunId=n.string();continue;case 3:if(i!==26)break;o.name=n.string();continue;case 4:if(i!==34)break;o.description=n.string();continue;case 5:if(i!==42)break;o.parentSubagentRunId=n.string();continue;case 6:if(i!==50)break;o.parentToolCallId=n.string();continue;case 7:if(i!==58)break;o.parentMessageId=n.string();continue}if((i&7)===4||i===0)break;n.skip(i&7)}return o},create(t){return Ra.fromPartial(t??{})},fromPartial(t){let e=lv();return e.baseEvent=t.baseEvent!==void 0&&t.baseEvent!==null?N.fromPartial(t.baseEvent):void 0,e.subagentRunId=t.subagentRunId??"",e.name=t.name??"",e.description=t.description??void 0,e.parentSubagentRunId=t.parentSubagentRunId??void 0,e.parentToolCallId=t.parentToolCallId??void 0,e.parentMessageId=t.parentMessageId??void 0,e}};function cv(){return{baseEvent:void 0,subagentRunId:"",result:void 0,outcome:"",interruptIds:[]}}var Ca={encode(t,e=new U){t.baseEvent!==void 0&&N.encode(t.baseEvent,e.uint32(10).fork()).join(),t.subagentRunId!==""&&e.uint32(18).string(t.subagentRunId),t.result!==void 0&&D.encode(D.wrap(t.result),e.uint32(26).fork()).join(),t.outcome!==""&&e.uint32(34).string(t.outcome);for(let n of t.interruptIds)e.uint32(42).string(n);return e},decode(t,e){let n=t instanceof R?t:new R(t),r=e===void 0?n.len:n.pos+e,o=cv();for(;n.pos<r;){let i=n.uint32();switch(i>>>3){case 1:if(i!==10)break;o.baseEvent=N.decode(n,n.uint32());continue;case 2:if(i!==18)break;o.subagentRunId=n.string();continue;case 3:if(i!==26)break;o.result=D.unwrap(D.decode(n,n.uint32()));continue;case 4:if(i!==34)break;o.outcome=n.string();continue;case 5:if(i!==42)break;o.interruptIds.push(n.string());continue}if((i&7)===4||i===0)break;n.skip(i&7)}return o},create(t){return Ca.fromPartial(t??{})},fromPartial(t){let e=cv();return e.baseEvent=t.baseEvent!==void 0&&t.baseEvent!==null?N.fromPartial(t.baseEvent):void 0,e.subagentRunId=t.subagentRunId??"",e.result=t.result??void 0,e.outcome=t.outcome??"",e.interruptIds=t.interruptIds?.map(n=>n)||[],e}};function uv(){return{baseEvent:void 0,subagentRunId:"",message:"",code:void 0}}var Na={encode(t,e=new U){return t.baseEvent!==void 0&&N.encode(t.baseEvent,e.uint32(10).fork()).join(),t.subagentRunId!==""&&e.uint32(18).string(t.subagentRunId),t.message!==""&&e.uint32(26).string(t.message),t.code!==void 0&&e.uint32(34).string(t.code),e},decode(t,e){let n=t instanceof R?t:new R(t),r=e===void 0?n.len:n.pos+e,o=uv();for(;n.pos<r;){let i=n.uint32();switch(i>>>3){case 1:if(i!==10)break;o.baseEvent=N.decode(n,n.uint32());continue;case 2:if(i!==18)break;o.subagentRunId=n.string();continue;case 3:if(i!==26)break;o.message=n.string();continue;case 4:if(i!==34)break;o.code=n.string();continue}if((i&7)===4||i===0)break;n.skip(i&7)}return o},create(t){return Na.fromPartial(t??{})},fromPartial(t){let e=uv();return e.baseEvent=t.baseEvent!==void 0&&t.baseEvent!==null?N.fromPartial(t.baseEvent):void 0,e.subagentRunId=t.subagentRunId??"",e.message=t.message??"",e.code=t.code??void 0,e}};function dv(){return{textMessageStart:void 0,textMessageContent:void 0,textMessageEnd:void 0,toolCallStart:void 0,toolCallArgs:void 0,toolCallEnd:void 0,stateSnapshot:void 0,stateDelta:void 0,messagesSnapshot:void 0,raw:void 0,custom:void 0,runStarted:void 0,runFinished:void 0,runError:void 0,stepStarted:void 0,stepFinished:void 0,textMessageChunk:void 0,toolCallChunk:void 0,subagentStarted:void 0,subagentFinished:void 0,subagentError:void 0,toolCallResult:void 0,activitySnapshot:void 0,activityDelta:void 0,reasoningStart:void 0,reasoningMessageStart:void 0,reasoningMessageContent:void 0,reasoningMessageEnd:void 0,reasoningMessageChunk:void 0,reasoningEnd:void 0,reasoningEncryptedValue:void 0}}var fv={encode(t,e=new U){return t.textMessageStart!==void 0&&ta.encode(t.textMessageStart,e.uint32(10).fork()).join(),t.textMessageContent!==void 0&&na.encode(t.textMessageContent,e.uint32(18).fork()).join(),t.textMessageEnd!==void 0&&ra.encode(t.textMessageEnd,e.uint32(26).fork()).join(),t.toolCallStart!==void 0&&ia.encode(t.toolCallStart,e.uint32(34).fork()).join(),t.toolCallArgs!==void 0&&aa.encode(t.toolCallArgs,e.uint32(42).fork()).join(),t.toolCallEnd!==void 0&&sa.encode(t.toolCallEnd,e.uint32(50).fork()).join(),t.stateSnapshot!==void 0&&ua.encode(t.stateSnapshot,e.uint32(58).fork()).join(),t.stateDelta!==void 0&&da.encode(t.stateDelta,e.uint32(66).fork()).join(),t.messagesSnapshot!==void 0&&pa.encode(t.messagesSnapshot,e.uint32(74).fork()).join(),t.raw!==void 0&&ma.encode(t.raw,e.uint32(82).fork()).join(),t.custom!==void 0&&ga.encode(t.custom,e.uint32(90).fork()).join(),t.runStarted!==void 0&&va.encode(t.runStarted,e.uint32(98).fork()).join(),t.runFinished!==void 0&&ba.encode(t.runFinished,e.uint32(106).fork()).join(),t.runError!==void 0&&ya.encode(t.runError,e.uint32(114).fork()).join(),t.stepStarted!==void 0&&wa.encode(t.stepStarted,e.uint32(122).fork()).join(),t.stepFinished!==void 0&&Ea.encode(t.stepFinished,e.uint32(130).fork()).join(),t.textMessageChunk!==void 0&&oa.encode(t.textMessageChunk,e.uint32(138).fork()).join(),t.toolCallChunk!==void 0&&la.encode(t.toolCallChunk,e.uint32(146).fork()).join(),t.subagentStarted!==void 0&&Ra.encode(t.subagentStarted,e.uint32(154).fork()).join(),t.subagentFinished!==void 0&&Ca.encode(t.subagentFinished,e.uint32(162).fork()).join(),t.subagentError!==void 0&&Na.encode(t.subagentError,e.uint32(170).fork()).join(),t.toolCallResult!==void 0&&ca.encode(t.toolCallResult,e.uint32(178).fork()).join(),t.activitySnapshot!==void 0&&ha.encode(t.activitySnapshot,e.uint32(186).fork()).join(),t.activityDelta!==void 0&&fa.encode(t.activityDelta,e.uint32(194).fork()).join(),t.reasoningStart!==void 0&&xa.encode(t.reasoningStart,e.uint32(202).fork()).join(),t.reasoningMessageStart!==void 0&&Sa.encode(t.reasoningMessageStart,e.uint32(210).fork()).join(),t.reasoningMessageContent!==void 0&&_a.encode(t.reasoningMessageContent,e.uint32(218).fork()).join(),t.reasoningMessageEnd!==void 0&&Ta.encode(t.reasoningMessageEnd,e.uint32(226).fork()).join(),t.reasoningMessageChunk!==void 0&&Aa.encode(t.reasoningMessageChunk,e.uint32(234).fork()).join(),t.reasoningEnd!==void 0&&ka.encode(t.reasoningEnd,e.uint32(242).fork()).join(),t.reasoningEncryptedValue!==void 0&&Ia.encode(t.reasoningEncryptedValue,e.uint32(250).fork()).join(),e},decode(t,e){let n=t instanceof R?t:new R(t),r=e===void 0?n.len:n.pos+e,o=dv();for(;n.pos<r;){let i=n.uint32();switch(i>>>3){case 1:if(i!==10)break;o.textMessageStart=ta.decode(n,n.uint32());continue;case 2:if(i!==18)break;o.textMessageContent=na.decode(n,n.uint32());continue;case 3:if(i!==26)break;o.textMessageEnd=ra.decode(n,n.uint32());continue;case 4:if(i!==34)break;o.toolCallStart=ia.decode(n,n.uint32());continue;case 5:if(i!==42)break;o.toolCallArgs=aa.decode(n,n.uint32());continue;case 6:if(i!==50)break;o.toolCallEnd=sa.decode(n,n.uint32());continue;case 7:if(i!==58)break;o.stateSnapshot=ua.decode(n,n.uint32());continue;case 8:if(i!==66)break;o.stateDelta=da.decode(n,n.uint32());continue;case 9:if(i!==74)break;o.messagesSnapshot=pa.decode(n,n.uint32());continue;case 10:if(i!==82)break;o.raw=ma.decode(n,n.uint32());continue;case 11:if(i!==90)break;o.custom=ga.decode(n,n.uint32());continue;case 12:if(i!==98)break;o.runStarted=va.decode(n,n.uint32());continue;case 13:if(i!==106)break;o.runFinished=ba.decode(n,n.uint32());continue;case 14:if(i!==114)break;o.runError=ya.decode(n,n.uint32());continue;case 15:if(i!==122)break;o.stepStarted=wa.decode(n,n.uint32());continue;case 16:if(i!==130)break;o.stepFinished=Ea.decode(n,n.uint32());continue;case 17:if(i!==138)break;o.textMessageChunk=oa.decode(n,n.uint32());continue;case 18:if(i!==146)break;o.toolCallChunk=la.decode(n,n.uint32());continue;case 19:if(i!==154)break;o.subagentStarted=Ra.decode(n,n.uint32());continue;case 20:if(i!==162)break;o.subagentFinished=Ca.decode(n,n.uint32());continue;case 21:if(i!==170)break;o.subagentError=Na.decode(n,n.uint32());continue;case 22:if(i!==178)break;o.toolCallResult=ca.decode(n,n.uint32());continue;case 23:if(i!==186)break;o.activitySnapshot=ha.decode(n,n.uint32());continue;case 24:if(i!==194)break;o.activityDelta=fa.decode(n,n.uint32());continue;case 25:if(i!==202)break;o.reasoningStart=xa.decode(n,n.uint32());continue;case 26:if(i!==210)break;o.reasoningMessageStart=Sa.decode(n,n.uint32());continue;case 27:if(i!==218)break;o.reasoningMessageContent=_a.decode(n,n.uint32());continue;case 28:if(i!==226)break;o.reasoningMessageEnd=Ta.decode(n,n.uint32());continue;case 29:if(i!==234)break;o.reasoningMessageChunk=Aa.decode(n,n.uint32());continue;case 30:if(i!==242)break;o.reasoningEnd=ka.decode(n,n.uint32());continue;case 31:if(i!==250)break;o.reasoningEncryptedValue=Ia.decode(n,n.uint32());continue}if((i&7)===4||i===0)break;n.skip(i&7)}return o},create(t){return fv.fromPartial(t??{})},fromPartial(t){let e=dv();return e.textMessageStart=t.textMessageStart!==void 0&&t.textMessageStart!==null?ta.fromPartial(t.textMessageStart):void 0,e.textMessageContent=t.textMessageContent!==void 0&&t.textMessageContent!==null?na.fromPartial(t.textMessageContent):void 0,e.textMessageEnd=t.textMessageEnd!==void 0&&t.textMessageEnd!==null?ra.fromPartial(t.textMessageEnd):void 0,e.toolCallStart=t.toolCallStart!==void 0&&t.toolCallStart!==null?ia.fromPartial(t.toolCallStart):void 0,e.toolCallArgs=t.toolCallArgs!==void 0&&t.toolCallArgs!==null?aa.fromPartial(t.toolCallArgs):void 0,e.toolCallEnd=t.toolCallEnd!==void 0&&t.toolCallEnd!==null?sa.fromPartial(t.toolCallEnd):void 0,e.stateSnapshot=t.stateSnapshot!==void 0&&t.stateSnapshot!==null?ua.fromPartial(t.stateSnapshot):void 0,e.stateDelta=t.stateDelta!==void 0&&t.stateDelta!==null?da.fromPartial(t.stateDelta):void 0,e.messagesSnapshot=t.messagesSnapshot!==void 0&&t.messagesSnapshot!==null?pa.fromPartial(t.messagesSnapshot):void 0,e.raw=t.raw!==void 0&&t.raw!==null?ma.fromPartial(t.raw):void 0,e.custom=t.custom!==void 0&&t.custom!==null?ga.fromPartial(t.custom):void 0,e.runStarted=t.runStarted!==void 0&&t.runStarted!==null?va.fromPartial(t.runStarted):void 0,e.runFinished=t.runFinished!==void 0&&t.runFinished!==null?ba.fromPartial(t.runFinished):void 0,e.runError=t.runError!==void 0&&t.runError!==null?ya.fromPartial(t.runError):void 0,e.stepStarted=t.stepStarted!==void 0&&t.stepStarted!==null?wa.fromPartial(t.stepStarted):void 0,e.stepFinished=t.stepFinished!==void 0&&t.stepFinished!==null?Ea.fromPartial(t.stepFinished):void 0,e.textMessageChunk=t.textMessageChunk!==void 0&&t.textMessageChunk!==null?oa.fromPartial(t.textMessageChunk):void 0,e.toolCallChunk=t.toolCallChunk!==void 0&&t.toolCallChunk!==null?la.fromPartial(t.toolCallChunk):void 0,e.subagentStarted=t.subagentStarted!==void 0&&t.subagentStarted!==null?Ra.fromPartial(t.subagentStarted):void 0,e.subagentFinished=t.subagentFinished!==void 0&&t.subagentFinished!==null?Ca.fromPartial(t.subagentFinished):void 0,e.subagentError=t.subagentError!==void 0&&t.subagentError!==null?Na.fromPartial(t.subagentError):void 0,e.toolCallResult=t.toolCallResult!==void 0&&t.toolCallResult!==null?ca.fromPartial(t.toolCallResult):void 0,e.activitySnapshot=t.activitySnapshot!==void 0&&t.activitySnapshot!==null?ha.fromPartial(t.activitySnapshot):void 0,e.activityDelta=t.activityDelta!==void 0&&t.activityDelta!==null?fa.fromPartial(t.activityDelta):void 0,e.reasoningStart=t.reasoningStart!==void 0&&t.reasoningStart!==null?xa.fromPartial(t.reasoningStart):void 0,e.reasoningMessageStart=t.reasoningMessageStart!==void 0&&t.reasoningMessageStart!==null?Sa.fromPartial(t.reasoningMessageStart):void 0,e.reasoningMessageContent=t.reasoningMessageContent!==void 0&&t.reasoningMessageContent!==null?_a.fromPartial(t.reasoningMessageContent):void 0,e.reasoningMessageEnd=t.reasoningMessageEnd!==void 0&&t.reasoningMessageEnd!==null?Ta.fromPartial(t.reasoningMessageEnd):void 0,e.reasoningMessageChunk=t.reasoningMessageChunk!==void 0&&t.reasoningMessageChunk!==null?Aa.fromPartial(t.reasoningMessageChunk):void 0,e.reasoningEnd=t.reasoningEnd!==void 0&&t.reasoningEnd!==null?ka.fromPartial(t.reasoningEnd):void 0,e.reasoningEncryptedValue=t.reasoningEncryptedValue!==void 0&&t.reasoningEncryptedValue!==null?Ia.fromPartial(t.reasoningEncryptedValue):void 0,e}};function pv(){return{provider:void 0,model:void 0,inputTokens:void 0,outputTokens:void 0,totalTokens:void 0,reasoningTokens:void 0,cachedInputTokens:void 0,cacheWriteInputTokens:void 0}}var sn={encode(t,e=new U){return t.provider!==void 0&&e.uint32(10).string(t.provider),t.model!==void 0&&e.uint32(18).string(t.model),t.inputTokens!==void 0&&e.uint32(24).int64(t.inputTokens),t.outputTokens!==void 0&&e.uint32(32).int64(t.outputTokens),t.totalTokens!==void 0&&e.uint32(40).int64(t.totalTokens),t.reasoningTokens!==void 0&&e.uint32(48).int64(t.reasoningTokens),t.cachedInputTokens!==void 0&&e.uint32(56).int64(t.cachedInputTokens),t.cacheWriteInputTokens!==void 0&&e.uint32(64).int64(t.cacheWriteInputTokens),e},decode(t,e){let n=t instanceof R?t:new R(t),r=e===void 0?n.len:n.pos+e,o=pv();for(;n.pos<r;){let i=n.uint32();switch(i>>>3){case 1:if(i!==10)break;o.provider=n.string();continue;case 2:if(i!==18)break;o.model=n.string();continue;case 3:if(i!==24)break;o.inputTokens=tn(n.int64());continue;case 4:if(i!==32)break;o.outputTokens=tn(n.int64());continue;case 5:if(i!==40)break;o.totalTokens=tn(n.int64());continue;case 6:if(i!==48)break;o.reasoningTokens=tn(n.int64());continue;case 7:if(i!==56)break;o.cachedInputTokens=tn(n.int64());continue;case 8:if(i!==64)break;o.cacheWriteInputTokens=tn(n.int64());continue}if((i&7)===4||i===0)break;n.skip(i&7)}return o},create(t){return sn.fromPartial(t??{})},fromPartial(t){let e=pv();return e.provider=t.provider??void 0,e.model=t.model??void 0,e.inputTokens=t.inputTokens??void 0,e.outputTokens=t.outputTokens??void 0,e.totalTokens=t.totalTokens??void 0,e.reasoningTokens=t.reasoningTokens??void 0,e.cachedInputTokens=t.cachedInputTokens??void 0,e.cacheWriteInputTokens=t.cacheWriteInputTokens??void 0,e}};function tn(t){let e=globalThis.Number(t.toString());if(e>globalThis.Number.MAX_SAFE_INTEGER)throw new globalThis.Error("Value is larger than Number.MAX_SAFE_INTEGER");if(e<globalThis.Number.MIN_SAFE_INTEGER)throw new globalThis.Error("Value is smaller than Number.MIN_SAFE_INTEGER");return e}var Yn=t=>t&&typeof t=="object"?t:void 0,de=t=>Array.isArray(t)?t:[],w0=()=>typeof process<"u"&&typeof process.env<"u"&&!!process.env.SUPPRESS_TRANSFORMATION_WARNINGS,mv=()=>{w0()||console.warn("[ag-ui][proto] Dropped a content part this build does not know: the protocol has a variant this SDK predates.")};var pM=new Set(Object.values(v)),E0={textMessageStart:"TEXT_MESSAGE_START",textMessageContent:"TEXT_MESSAGE_CONTENT",textMessageEnd:"TEXT_MESSAGE_END",textMessageChunk:"TEXT_MESSAGE_CHUNK",toolCallStart:"TOOL_CALL_START",toolCallArgs:"TOOL_CALL_ARGS",toolCallEnd:"TOOL_CALL_END",toolCallChunk:"TOOL_CALL_CHUNK",toolCallResult:"TOOL_CALL_RESULT",stateSnapshot:"STATE_SNAPSHOT",stateDelta:"STATE_DELTA",messagesSnapshot:"MESSAGES_SNAPSHOT",activitySnapshot:"ACTIVITY_SNAPSHOT",activityDelta:"ACTIVITY_DELTA",raw:"RAW",custom:"CUSTOM",runStarted:"RUN_STARTED",runFinished:"RUN_FINISHED",runError:"RUN_ERROR",stepStarted:"STEP_STARTED",stepFinished:"STEP_FINISHED",reasoningStart:"REASONING_START",reasoningMessageStart:"REASONING_MESSAGE_START",reasoningMessageContent:"REASONING_MESSAGE_CONTENT",reasoningMessageEnd:"REASONING_MESSAGE_END",reasoningMessageChunk:"REASONING_MESSAGE_CHUNK",reasoningEnd:"REASONING_END",reasoningEncryptedValue:"REASONING_ENCRYPTED_VALUE",subagentStarted:"SUBAGENT_STARTED",subagentFinished:"SUBAGENT_FINISHED",subagentError:"SUBAGENT_ERROR"},nn=new Set([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31]);var Pt=t=>{let e=Yn(t);if(e){if([e.data,e.url,e.file].filter(Boolean).length>1)throw new Error("Invalid event: source carries more than one arm");if(e.data){let n=e.data;return{type:"data",value:n.value,mimeType:n.mimeType}}if(e.url){let n=e.url;return{type:"url",value:n.value,mimeType:n.mimeType}}if(e.file){let n=e.file;return{type:"file",value:n.value,provider:n.provider,mimeType:n.mimeType}}}};var gv=t=>{let e=Yn(t);if(e){if([e.text,e.image,e.audio,e.video,e.document].filter(Boolean).length>1)throw new Error("Invalid event: content part carries more than one arm");if(e.text){let n=e.text;return{type:"text",id:n.id,text:n.text,metadata:n.metadata}}if(e.image){let n=e.image;return n.source!==void 0&&Pt(n.source)===void 0?void 0:{type:"image",id:n.id,source:Pt(n.source),metadata:n.metadata}}if(e.audio){let n=e.audio;return n.source!==void 0&&Pt(n.source)===void 0?void 0:{type:"audio",id:n.id,source:Pt(n.source),metadata:n.metadata}}if(e.video){let n=e.video;return n.source!==void 0&&Pt(n.source)===void 0?void 0:{type:"video",id:n.id,source:Pt(n.source),metadata:n.metadata}}if(e.document){let n=e.document;return n.source!==void 0&&Pt(n.source)===void 0?void 0:{type:"document",id:n.id,source:Pt(n.source),metadata:n.metadata}}}},x0=new Set(["activity"]),S0=new Set(["user","tool"]),_0=new Set(["developer","system","assistant","user","tool","activity","reasoning"]);var vv=t=>{let e=Yn(t)??{},n={...e},r=typeof e.role=="string"?e.role:"",o=_0.has(r),i=o?S0.has(r):de(e.contentParts).length>0,a=o?x0.has(r):!i&&e.activityContent!==void 0;if(!o&&(e.content!==void 0?1:0)+(de(e.contentParts).length>0?1:0)+(e.activityContent!==void 0?1:0)>1)throw new Error("Invalid event: message carries more than one content form");if(o){if(!i&&de(e.contentParts).length>0)throw new Error("Invalid event: message carries content parts for a role that has none");if(e.activityContent!==void 0&&!a)throw new Error("Invalid event: message carries activity content for a non-activity role");if(a&&e.content!==void 0)throw new Error("Invalid event: activity content cannot ride with other content forms");if(i&&e.content!==void 0&&de(e.contentParts).length>0)throw new Error("Invalid event: message carries both string content and content parts")}return i&&e.content===void 0&&(n.content=de(e.contentParts).map(s=>{let c=gv(s);return c===void 0&&mv(),c}).filter(s=>s!==void 0)),a&&e.activityContent!==void 0&&(n.content=e.activityContent),delete n.activityContent,delete n.contentParts,de(e.toolCalls).length===0&&delete n.toolCalls,Object.keys(n).forEach(s=>{n[s]===void 0&&delete n[s]}),n},ru=t=>{if(Array.isArray(t)){for(let n of t)ru(n);return}let e=Yn(t);if(e)for(let n of Object.keys(e))e[n]===void 0?delete e[n]:ru(e[n])};var T0=t=>{let e=Yn(t);if(!e)return;let n={};return e.threadId!==void 0&&(n.threadId=e.threadId),e.runId!==void 0&&(n.runId=e.runId),e.protocolVersion!==void 0&&(n.protocolVersion=e.protocolVersion),e.parentRunId!==void 0&&(n.parentRunId=e.parentRunId),e.state!==void 0&&(n.state=e.state),n.messages=de(e.messages).map(vv).filter(r=>r!==void 0),n.tools=de(e.tools),n.context=de(e.context),e.forwardedProps!==void 0&&(n.forwardedProps=e.forwardedProps),n.resume=de(e.resume),n};var ou={TextMessageStartEvent:{singular:new Set([1]),descend:{1:"BaseEvent"}},BaseEvent:{singular:new Set([3,4]),descend:{},google:{3:"google.protobuf.Value",4:"google.protobuf.Struct"}},TextMessageContentEvent:{singular:new Set([1]),descend:{1:"BaseEvent"}},TextMessageEndEvent:{singular:new Set([1]),descend:{1:"BaseEvent"}},ToolCallStartEvent:{singular:new Set([1]),descend:{1:"BaseEvent"}},ToolCallArgsEvent:{singular:new Set([1]),descend:{1:"BaseEvent"}},ToolCallEndEvent:{singular:new Set([1]),descend:{1:"BaseEvent"}},StateSnapshotEvent:{singular:new Set([1,2]),descend:{1:"BaseEvent"},google:{2:"google.protobuf.Value"}},StateDeltaEvent:{singular:new Set([1]),descend:{1:"BaseEvent",2:"JsonPatchOperation"}},JsonPatchOperation:{singular:new Set([4]),descend:{},google:{4:"google.protobuf.Value"}},MessagesSnapshotEvent:{singular:new Set([1]),descend:{1:"BaseEvent",2:"Message"}},Message:{singular:new Set([9,13]),descend:{5:"ToolCall",8:"InputContent"},google:{9:"google.protobuf.Struct",13:"google.protobuf.Struct"}},ToolCall:{singular:new Set([3,4]),descend:{},google:{4:"google.protobuf.Struct"}},InputContent:{singular:new Set([1,2,3,4,5]),descend:{1:"TextInputPart",2:"ImageInputPart",3:"AudioInputPart",4:"VideoInputPart",5:"DocumentInputPart"},arms:new Set([1,2,3,4,5])},TextInputPart:{singular:new Set([3]),descend:{},google:{3:"google.protobuf.Value"}},ImageInputPart:{singular:new Set([1,2]),descend:{1:"InputContentSource"},google:{2:"google.protobuf.Value"}},InputContentSource:{singular:new Set([1,2,3]),descend:{},arms:new Set([1,2,3])},AudioInputPart:{singular:new Set([1,2]),descend:{1:"InputContentSource"},google:{2:"google.protobuf.Value"}},VideoInputPart:{singular:new Set([1,2]),descend:{1:"InputContentSource"},google:{2:"google.protobuf.Value"}},DocumentInputPart:{singular:new Set([1,2]),descend:{1:"InputContentSource"},google:{2:"google.protobuf.Value"}},RawEvent:{singular:new Set([1,2]),descend:{1:"BaseEvent"},google:{2:"google.protobuf.Value"}},CustomEvent:{singular:new Set([1,3]),descend:{1:"BaseEvent"},google:{3:"google.protobuf.Value"}},RunStartedEvent:{singular:new Set([1,5]),descend:{1:"BaseEvent",5:"RunAgentInput"}},RunAgentInput:{singular:new Set([4,8]),descend:{5:"Message",6:"Tool",9:"ResumeEntry"},google:{4:"google.protobuf.Value",8:"google.protobuf.Value"}},Tool:{singular:new Set([3,4]),descend:{},google:{3:"google.protobuf.Value",4:"google.protobuf.Struct"}},ResumeEntry:{singular:new Set([3,4]),descend:{},google:{3:"google.protobuf.Value",4:"google.protobuf.Struct"}},RunFinishedEvent:{singular:new Set([1,4]),descend:{1:"BaseEvent",6:"Interrupt"},google:{4:"google.protobuf.Value"}},Interrupt:{singular:new Set([5,7]),descend:{},google:{5:"google.protobuf.Value",7:"google.protobuf.Value"}},RunErrorEvent:{singular:new Set([1]),descend:{1:"BaseEvent"}},StepStartedEvent:{singular:new Set([1]),descend:{1:"BaseEvent"}},StepFinishedEvent:{singular:new Set([1]),descend:{1:"BaseEvent"}},TextMessageChunkEvent:{singular:new Set([1]),descend:{1:"BaseEvent"}},ToolCallChunkEvent:{singular:new Set([1]),descend:{1:"BaseEvent"}},SubagentStartedEvent:{singular:new Set([1]),descend:{1:"BaseEvent"}},SubagentFinishedEvent:{singular:new Set([1,3]),descend:{1:"BaseEvent"},google:{3:"google.protobuf.Value"}},SubagentErrorEvent:{singular:new Set([1]),descend:{1:"BaseEvent"}},ToolCallResultEvent:{singular:new Set([1]),descend:{1:"BaseEvent",7:"InputContent"}},ActivitySnapshotEvent:{singular:new Set([1,5]),descend:{1:"BaseEvent"},google:{5:"google.protobuf.Struct"}},ActivityDeltaEvent:{singular:new Set([1]),descend:{1:"BaseEvent",5:"JsonPatchOperation"}},ReasoningStartEvent:{singular:new Set([1]),descend:{1:"BaseEvent"}},ReasoningMessageStartEvent:{singular:new Set([1]),descend:{1:"BaseEvent"}},ReasoningMessageContentEvent:{singular:new Set([1]),descend:{1:"BaseEvent"}},ReasoningMessageEndEvent:{singular:new Set([1]),descend:{1:"BaseEvent"}},ReasoningMessageChunkEvent:{singular:new Set([1]),descend:{1:"BaseEvent"}},ReasoningEndEvent:{singular:new Set([1]),descend:{1:"BaseEvent"}},ReasoningEncryptedValueEvent:{singular:new Set([1]),descend:{1:"BaseEvent"}},"google.protobuf.Struct":{singular:new Set,descend:{1:"google.protobuf.Struct.FieldsEntry"}},"google.protobuf.Struct.FieldsEntry":{singular:new Set([2]),descend:{2:"google.protobuf.Value"}},"google.protobuf.Value":{singular:new Set([5,6]),descend:{5:"google.protobuf.Struct",6:"google.protobuf.ListValue"},arms:new Set([1,2,3,4,5,6]),armWireTypes:{1:0,2:1,3:2,4:0,5:2,6:2}},"google.protobuf.ListValue":{singular:new Set,descend:{1:"google.protobuf.Value"}}},bv={1:"TextMessageStartEvent",2:"TextMessageContentEvent",3:"TextMessageEndEvent",4:"ToolCallStartEvent",5:"ToolCallArgsEvent",6:"ToolCallEndEvent",7:"StateSnapshotEvent",8:"StateDeltaEvent",9:"MessagesSnapshotEvent",10:"RawEvent",11:"CustomEvent",12:"RunStartedEvent",13:"RunFinishedEvent",14:"RunErrorEvent",15:"StepStartedEvent",16:"StepFinishedEvent",17:"TextMessageChunkEvent",18:"ToolCallChunkEvent",19:"SubagentStartedEvent",20:"SubagentFinishedEvent",21:"SubagentErrorEvent",22:"ToolCallResultEvent",23:"ActivitySnapshotEvent",24:"ActivityDeltaEvent",25:"ReasoningStartEvent",26:"ReasoningMessageStartEvent",27:"ReasoningMessageContentEvent",28:"ReasoningMessageEndEvent",29:"ReasoningMessageChunkEvent",30:"ReasoningEndEvent",31:"ReasoningEncryptedValueEvent"};function qn(t,e){let n=0,r=0;for(;;){if(e.offset>=t.length)throw new Error("Invalid event");let o=t[e.offset++];if(r<28?n+=(o&127)*2**r:r===28&&(n+=(o&15)*2**28),r+=7,(o&128)===0)return n}}function yv(t,e){let n={offset:0},r=0,o=0;for(;n.offset<t.length;){let i=qn(t,n),a=Math.floor(i/8),s=i%8;if(a===0)throw new Error("Invalid event");if(s===3){r+=1;continue}if(s===4){if(r-=1,r<0)throw new Error("Invalid event");continue}if(s===0)qn(t,n);else if(s===1)n.offset+=8;else if(s===2){let c=qn(t,n);if(n.offset+c>t.length)throw new Error("Invalid event");if(r===0){if(e.arms?.has(a)){if(o!==0&&o!==a)throw new Error("Invalid event");o=a}let l=e.descend[a];if(l!==void 0){let u=ou[l];u!==void 0&&yv(t.subarray(n.offset,n.offset+c),u)}}n.offset+=c}else if(s===5)n.offset+=4;else throw new Error("Invalid event");if(n.offset>t.length)throw new Error("Invalid event")}if(r!==0)throw new Error("Invalid event")}function A0(t){let e=new Set,n={offset:0},r=0;for(;n.offset<t.length;){let o=qn(t,n),i=Math.floor(o/8),a=o%8;if(i===0)throw new Error("Invalid event");if(a===3){r+=1;continue}if(a===4){if(r-=1,r<0)throw new Error("Invalid event");continue}if(r===0&&nn.has(i)){if(e.size>0&&!e.has(i))throw new Error("Invalid event");e.add(i)}if(a===0)qn(t,n);else if(a===1)n.offset+=8;else if(a===2){let s=qn(t,n);if(n.offset+s>t.length)throw new Error("Invalid event");if(r===0){let c=bv[i];if(c!==void 0){let l=ou[c];l!==void 0&&yv(t.subarray(n.offset,n.offset+s),l)}}n.offset+=s}else if(a===5)n.offset+=4;else throw new Error("Invalid event");if(n.offset>t.length)throw new Error("Invalid event")}if(r!==0)throw new Error("Invalid event")}function hv(t){if(t.length===1)return t[0];let e=new Uint8Array(t.reduce((r,o)=>r+o.length,0)),n=0;for(let r of t)e.set(r,n),n+=r.length;return e}function wv(t,e){let n=new R(t),r=[],o=new Map,i,a=!1;for(;n.pos<n.len;){let c=n.pos,[l,u]=n.tag(),f=u===2?n.bytes():void 0;f===void 0&&n.skip(u,l);let m=e.arms?.has(l)&&u===(e.armWireTypes?.[l]??2);if(m){if(i!==void 0&&i!==l){let S=o.get(i);S!==void 0&&(r[S]=void 0),o.delete(i),a=!0}if(i=l,!e.singular.has(l)){let S=o.get(l);S!==void 0&&(r[S]=void 0,o.delete(l),a=!0)}}let h=e.descend[l]??e.google?.[l],p=f!==void 0&&(e.singular.has(l)||h!==void 0),E=o.get(l),g=E===void 0?void 0:r[E]?.payloads;if(p&&e.singular.has(l)&&g!==void 0){g.push(f),a=!0;continue}(p||m)&&o.set(l,r.length),r.push({number:l,raw:t.subarray(c,n.pos),...p&&{payloads:[f]},child:h===void 0?void 0:ou[h]})}let s=[];for(let c of r)if(c!==void 0){if(c.payloads!==void 0){let l=hv(c.payloads),u=c.child===void 0?l:wv(l,c.child);if(c.payloads.length>1||u!==l){s.push(new U().uint32(c.number*8+2).bytes(u).finish()),a=!0;continue}}s.push(c.raw)}return a?hv(s):t}var iu=class extends Error{constructor(t="Unknown event type"){super(t),this.name="AGUIUnknownEventTypeError"}};function Ev(t,e,n,r){let o=0,i=0,a=0;for(;;){if(e.offset>=t.length||a>=n)return-1;let s=t[e.offset++];if(a+=1,a===n&&s>r)return-1;if(o+=(s&127)*2**i,i+=7,(s&128)===0)return o}}var Oa=(t,e)=>Ev(t,e,5,15),xv=(t,e)=>Ev(t,e,10,1);function k0(t){let e={offset:0},n=[];for(;e.offset<t.length;){let r=Oa(t,e);if(r<0)return!1;let o=Math.floor(r/8),i=r%8;if(o===0)return!1;if(i===3)n.push(o);else if(i===4){if(n.pop()!==o)return!1}else if(i===0){if(xv(t,e)<0)return!1}else if(i===1)e.offset+=8;else if(i===5)e.offset+=4;else if(i===2){let a=Oa(t,e);if(a<0||e.offset+a>t.length)return!1;e.offset+=a}else return!1;if(e.offset>t.length)return!1}return n.length===0}function I0(t){let e={offset:0},n=[],r=0;for(;e.offset<t.length;){let o=Oa(t,e);if(o<0)return!1;let i=Math.floor(o/8),a=o%8;if(i===0)return!1;let s=n.length===0;if(a===3){if(s&&nn.has(i))return!1;n.push(i)}else if(a===4){if(n.pop()!==i)return!1}else if(a===0){if(s&&nn.has(i)||xv(t,e)<0)return!1}else if(a===1){if(s&&nn.has(i))return!1;e.offset+=8}else if(a===5){if(s&&nn.has(i))return!1;e.offset+=4}else if(a===2){let c=Oa(t,e);if(c<0||e.offset+c>t.length)return!1;if(s){if(nn.has(i)||!k0(t.subarray(e.offset,e.offset+c)))return!1;r+=1}e.offset+=c}else return!1;if(e.offset>t.length)return!1}return n.length===0&&r>0}function Sv(t){A0(t);let e=fv.decode(wv(t,{singular:nn,descend:bv})),n=Object.entries(e).filter(([,c])=>c!==void 0);if(n.length!==1)throw n.length===0&&I0(t)?new iu:new Error("Invalid event");let r=n[0],o=E0[r[0]];if(o===void 0)throw new Error("Invalid event");let i=r[1],a=Yn(i.baseEvent);if(!a)throw new Error("Invalid event");let s=y0[a.type];if(s!==o)throw new Error("Invalid event: envelope carries "+o+" but the base event declares "+String(s));if(i.type=o,i.timestamp=a.timestamp,i.rawEvent=a.rawEvent,a.metadata!==void 0&&(i.metadata=a.metadata),delete i.baseEvent,i.type==="MESSAGES_SNAPSHOT"&&Array.isArray(i.messages)&&(i.messages=i.messages.map(vv).filter(c=>c!==void 0)),i.type==="RUN_FINISHED"){let c=i,l=typeof c.outcome=="string"&&c.outcome!==""?c.outcome:void 0,u={};u.pendingToolCallIds=c.pendingToolCallIds,delete c.pendingToolCallIds,u.interrupts=c.interrupts,delete c.interrupts,delete c.outcome,l===void 0&&(de(u.pendingToolCallIds).length>0&&(c.pendingToolCallIds=u.pendingToolCallIds),de(u.interrupts).length>0&&(c.interrupts=u.interrupts)),l==="success"&&(c.outcome={type:"success",...de(u.pendingToolCallIds).length>0?{pendingToolCallIds:u.pendingToolCallIds}:{},...de(u.interrupts).length>0?{interrupts:u.interrupts}:{}}),l==="interrupt"&&(c.outcome={type:"interrupt",interrupts:de(u.interrupts),...de(u.pendingToolCallIds).length>0?{pendingToolCallIds:u.pendingToolCallIds}:{}}),l==="cancelled"&&(c.outcome={type:"cancelled",...de(u.pendingToolCallIds).length>0?{pendingToolCallIds:u.pendingToolCallIds}:{},...de(u.interrupts).length>0?{interrupts:u.interrupts}:{}}),l!==void 0&&!["success","interrupt","cancelled"].includes(l)&&(c.outcome={type:l,...de(u.pendingToolCallIds).length>0?{pendingToolCallIds:u.pendingToolCallIds}:{},...de(u.interrupts).length>0?{interrupts:u.interrupts}:{}})}if(i.type==="SUBAGENT_FINISHED"){let c=i,l=typeof c.outcome=="string"&&c.outcome!==""?c.outcome:void 0,u={};u.interruptIds=c.interruptIds,delete c.interruptIds,delete c.outcome,l===void 0&&de(u.interruptIds).length>0&&(c.interruptIds=u.interruptIds),l==="success"&&(c.outcome={type:"success",...de(u.interruptIds).length>0?{interruptIds:u.interruptIds}:{}}),l==="suspended"&&(c.outcome={type:"suspended",...de(u.interruptIds).length>0?{interruptIds:u.interruptIds}:{}}),l!==void 0&&!["success","suspended"].includes(l)&&(c.outcome={type:l,...de(u.interruptIds).length>0?{interruptIds:u.interruptIds}:{}})}if(i.type==="STATE_DELTA"&&Array.isArray(i.delta)&&(i.delta=i.delta.map(c=>{let l=hg[c.op];return c.op=typeof l=="string"&&l!=="UNRECOGNIZED"?l.toLowerCase():String(c.op),Object.keys(c).forEach(u=>{c[u]===void 0&&delete c[u]}),c})),i.type==="ACTIVITY_DELTA"&&Array.isArray(i.patch)&&(i.patch=i.patch.map(c=>{let l=hg[c.op];return c.op=typeof l=="string"&&l!=="UNRECOGNIZED"?l.toLowerCase():String(c.op),Object.keys(c).forEach(u=>{c[u]===void 0&&delete c[u]}),c})),i.type==="RUN_FINISHED"&&Array.isArray(i.usage)&&i.usage.length===0&&delete i.usage,i.type==="RUN_ERROR"&&Array.isArray(i.usage)&&i.usage.length===0&&delete i.usage,i.type==="TOOL_CALL_RESULT"){let c=i;if(c.content!==void 0&&de(c.contentParts).length>0)throw new Error("Invalid event: content carries both string content and content parts");c.content===void 0&&(c.content=de(c.contentParts).map(l=>{let u=gv(l);return u===void 0&&mv(),u}).filter(l=>l!==void 0)),delete c.contentParts}return i.type==="RUN_STARTED"&&i.input!==void 0&&(i.input=T0(i.input)),ru(i),i}var au="application/vnd.ag-ui.event+proto";var su=/^[v^~<>=]*?(\d+)(?:\.([x*]|\d+)(?:\.([x*]|\d+)(?:\.([x*]|\d+))?(?:-([\da-z\-]+(?:\.[\da-z\-]+)*))?(?:\+[\da-z\-]+(?:\.[\da-z\-]+)*)?)?)?$/i,lu=t=>{if(typeof t!="string")throw new TypeError("Invalid argument expected string");let e=t.match(su);if(!e)throw new Error(`Invalid argument not valid semver ('${t}' received)`);return e.shift(),e},_v=t=>t==="*"||t==="x"||t==="X",Tv=t=>{let e=parseInt(t,10);return isNaN(e)?t:e},C0=(t,e)=>typeof t!=typeof e?[String(t),String(e)]:[t,e],N0=(t,e)=>{if(_v(t)||_v(e))return 0;let[n,r]=C0(Tv(t),Tv(e));return n>r?1:n<r?-1:0},cu=(t,e)=>{for(let n=0;n<Math.max(t.length,e.length);n++){let r=N0(t[n]||"0",e[n]||"0");if(r!==0)return r}return 0};var ln=(t,e)=>{let n=lu(t),r=lu(e),o=n.pop(),i=r.pop(),a=cu(n,r);return a!==0?a:o&&i?cu(o.split("."),i.split(".")):o||i?o?-1:1:0};var uu=t=>typeof t=="string"&&/^[v\d]/.test(t)&&su.test(t);var Av="@ag-ui/client";function O0(t){if(!t.metadata||!Object.prototype.hasOwnProperty.call(t.metadata,Av))return;let e=t.metadata?.[Av];if(!e||typeof e!="object"||Array.isArray(e))return[];if(!Object.prototype.hasOwnProperty.call(e,"authoritativeActivityTypes"))return;let n=e.authoritativeActivityTypes;return n===null?null:Array.isArray(n)&&n.every(r=>typeof r=="string")?n:[]}var Q=t=>{if(typeof structuredClone=="function")return structuredClone(t);try{return JSON.parse(JSON.stringify(t))}catch{return Array.isArray(t)?[...t]:{...t}}};function we(){return It()}function P0(t){return t instanceof TypeError?/read[- ]?only|not extensible|cannot add property|cannot delete property|can't be deleted|unable to delete property|object is frozen|is not writable/i.test(t.message):!1}function Eu(t){if(Object.freeze(t),typeof t=="object"&&t)for(let e of Object.values(t))typeof e=="object"&&e&&!Object.isFrozen(e)&&Eu(e);return t}var kv=512*1024;function Iv(t,e,n){let r=0,o=[t,e],i=new WeakSet;for(;o.length>0;){let a=o.pop();if(typeof a=="string"){if(r+=a.length,r>n)return!0}else if(typeof a=="object"&&a){if(i.has(a))continue;if(i.add(a),Array.isArray(a))for(let s=0;s<a.length;s++)o.push(a[s]);else{let s=Object.keys(a);for(let c=0;c<s.length;c++){let l=s[c];if(r+=l.length,r>n)return!0;o.push(a[l])}}}}return!1}async function oe(t,e,n,r){let o=typeof process<"u"&&process.env!==void 0,i=o&&!!process.env.VITEST_WORKER_ID,a=o&&!!process.env.VITEST_WORKER_ID,s=a&&!Iv(e,n,kv),c=s?Q(e):e,l=s?Q(n):n,u=!1,f=!1,m;for(let h of t)try{s&&(Eu(c),Eu(l));let p=await r(h,c,l);if(p===void 0)continue;let E=!1;if(p.messages!==void 0&&p.messages!==c&&(c=Q(p.messages),u=!0,E=!0),p.state!==void 0&&p.state!==l&&(l=Q(p.state),f=!0,E=!0),s&&E&&Iv(c,l,kv)&&(s=!1),m=p.stopPropagation,m===!0)break}catch(p){if(i&&p instanceof TypeError)throw p;s&&a&&P0(p)?console.error("AG-UI: Subscriber attempted to mutate frozen inputs in-place. Return mutations via AgentStateMutation instead of mutating directly.",p):console.error("Subscriber error:",p);continue}return{...u?{messages:Object.isFrozen(c)?Q(c):c}:{},...f?{state:Object.isFrozen(l)?Q(l):l}:{},...m===void 0?{}:{stopPropagation:m}}}function za(t){if(!t)return{enabled:!1,events:!1,lifecycle:!1,verbose:!1};if(t===!0)return{enabled:!0,events:!0,lifecycle:!0,verbose:!0};let e=t.events??!0,n=t.lifecycle??!0,r=t.verbose??!1;return{enabled:e||n,events:e,lifecycle:n,verbose:r}}function un(t){if(t instanceof xu)return t;if(t===!0)return new xu(za(!0))}var xu=class{constructor(t){this.config=t}event(t,e,n,r){this.config.events&&(this.config.verbose?console.debug(`[${t}] ${e}`,typeof n=="string"?n:JSON.stringify(n)):console.debug(`[${t}] ${e}`,r??n))}lifecycle(t,e,n){this.config.lifecycle&&(n?console.debug(`[${t}] ${e}`,n):console.debug(`[${t}] ${e}`))}get eventsEnabled(){return this.config.events}get lifecycleEnabled(){return this.config.lifecycle}get enabled(){return this.config.enabled}};function du(t){return t.enabled?new xu(t):void 0}function M0(t,e,n){if(e){let o=t.find(a=>a.id===e);if(o?.role==="assistant")return o;o&&console.warn(`TOOL_CALL_START: parentMessageId '${e}' matches a '${o.role}' message, not assistant \u2014 falling back to toolCallId`);let i={id:o?n:e,role:"assistant",toolCalls:[]};return t.push(i),i}let r={id:n,role:"assistant",toolCalls:[]};return t.push(r),r}function qe(t,e){return!t||e.metadata===void 0?!1:(t.metadata=Sp(t.metadata,Q(e.metadata)),!0)}var Bv=(t,e,n,r,o)=>{let i=un(o),a=Q(n.messages),s=Q(t.state),c={},l=[],u=new Set,f=p=>{let E=p.outcome?.type==="success"?p.outcome.pendingToolCallIds:void 0;return E!==void 0&&E.length>0?[...E]:l.filter(g=>!u.has(g))},m=p=>{p.messages!==void 0&&(a=p.messages,c.messages=p.messages),p.state!==void 0&&(s=p.state,c.state=p.state)},h=()=>{let p=Q(c);return c={},p.messages!==void 0||p.state!==void 0?se(p):xr};return e.pipe(mi(async p=>{let E=await oe(r,a,s,(g,S,y)=>g.onEvent?.({event:p,agent:n,input:t,messages:S,state:y}));if(m(E),E.stopPropagation===!0?i?.event("APPLY","Event dropped:",p,{type:p.type,reason:"stopPropagation by subscriber"}):i?.event("APPLY","Event applied:",p,{type:p.type,subscribers:r.length}),E.stopPropagation===!0)return h();switch(p.type){case v.TEXT_MESSAGE_START:{let g=await oe(r,a,s,(S,y,T)=>S.onTextMessageStartEvent?.({event:p,messages:y,state:T,agent:n,input:t}));if(m(g),g.stopPropagation!==!0){let{messageId:S,role:y="assistant",name:T,subagentRunId:w}=p,_=a.find(z=>z.id===S);if(_?.role==="activity")return console.warn(`TEXT_MESSAGE_START: Message '${S}' is an activity message \u2014 message ids must be unique across activity and text messages`),h();let b=_;if(!b){let z={id:S,role:y,content:"",...T!==void 0&&{name:T},...w!=null&&{subagentRunId:w}};a.push(z),b=z}let I=qe(b,p);(!_||I)&&m({messages:a})}return h()}case v.TEXT_MESSAGE_CONTENT:{let{messageId:g,delta:S}=p,y=a.find(w=>w.id===g);if(!y)return console.warn(`TEXT_MESSAGE_CONTENT: No message found with ID '${g}'`),h();if(y.role==="activity")return console.warn(`TEXT_MESSAGE_CONTENT: Message '${g}' is an activity message \u2014 message ids must be unique across activity and text messages`),h();let T=await oe(r,a,s,(w,_,b)=>w.onTextMessageContentEvent?.({event:p,messages:_,state:b,agent:n,input:t,textMessageBuffer:typeof y.content=="string"?y.content:""}));return m(T),T.stopPropagation!==!0&&(y.content=`${typeof y.content=="string"?y.content:""}${S}`,qe(y,p),m({messages:a})),h()}case v.TEXT_MESSAGE_END:{let{messageId:g}=p,S=a.find(T=>T.id===g);if(!S)return console.warn(`TEXT_MESSAGE_END: No message found with ID '${g}'`),h();if(S.role==="activity")return console.warn(`TEXT_MESSAGE_END: Message '${g}' is an activity message \u2014 message ids must be unique across activity and text messages`),h();let y=await oe(r,a,s,(T,w,_)=>T.onTextMessageEndEvent?.({event:p,messages:w,state:_,agent:n,input:t,textMessageBuffer:typeof S.content=="string"?S.content:""}));return m(y),y.stopPropagation!==!0&&qe(S,p)&&m({messages:a}),await Promise.all(r.map(T=>{T.onNewMessage?.({message:S,messages:a,state:s,agent:n,input:t})})),h()}case v.TOOL_CALL_START:{let g=await oe(r,a,s,(S,y,T)=>S.onToolCallStartEvent?.({event:p,messages:y,state:T,agent:n,input:t}));if(m(g),g.stopPropagation!==!0){let{toolCallId:S,toolCallName:y,parentMessageId:T,subagentRunId:w}=p;l.includes(S)||l.push(S);let _=a.find(P=>P.toolCalls?.some(te=>te.id===S))?.toolCalls?.find(P=>P.id===S);if(_){let P=_.function.name!==y;return P&&(console.warn(`TOOL_CALL_START: tool call '${S}' already exists with name '${_.function.name}' \u2014 updating it to '${y}'`),_.function.name=y),(qe(_,p)||P)&&m({messages:a}),h()}let b=new Set(a.map(P=>P.id)),I=M0(a,T,S);!b.has(I.id)&&w!=null&&I.subagentRunId===void 0&&(I.subagentRunId=w),I.toolCalls??=[];let z={id:S,type:"function",function:{name:y,arguments:""}};I.toolCalls.push(z),qe(z,p),m({messages:a})}return h()}case v.TOOL_CALL_ARGS:{let{toolCallId:g,delta:S}=p,y=a.find(_=>_.toolCalls?.some(b=>b.id===g));if(!y)return console.warn(`TOOL_CALL_ARGS: No message found containing tool call with ID '${g}'`),h();let T=y.toolCalls?.find(_=>_.id===g);if(!T)return console.warn(`TOOL_CALL_ARGS: No tool call found with ID '${g}'`),h();let w=await oe(r,a,s,(_,b,I)=>{let z=T.function.arguments,P=T.function.name,te={};try{te=bi(z)}catch{}return _.onToolCallArgsEvent?.({event:p,messages:b,state:I,agent:n,input:t,toolCallBuffer:z,toolCallName:P,partialToolCallArgs:te})});return m(w),w.stopPropagation!==!0&&(T.function.arguments+=S,qe(T,p),m({messages:a})),h()}case v.TOOL_CALL_END:{let{toolCallId:g}=p,S=a.find(w=>w.toolCalls?.some(_=>_.id===g));if(!S)return console.warn(`TOOL_CALL_END: No message found containing tool call with ID '${g}'`),h();let y=S.toolCalls?.find(w=>w.id===g);if(!y)return console.warn(`TOOL_CALL_END: No tool call found with ID '${g}'`),h();let T=await oe(r,a,s,(w,_,b)=>{let I=y.function.arguments,z=y.function.name,P={};try{P=JSON.parse(I)}catch{}return w.onToolCallEndEvent?.({event:p,messages:_,state:b,agent:n,input:t,toolCallName:z,toolCallArgs:P})});return m(T),T.stopPropagation!==!0&&qe(y,p)&&m({messages:a}),await Promise.all(r.map(w=>{w.onNewToolCall?.({toolCall:y,messages:a,state:s,agent:n,input:t})})),h()}case v.TOOL_CALL_RESULT:{let g=await oe(r,a,s,(S,y,T)=>S.onToolCallResultEvent?.({event:p,messages:y,state:T,agent:n,input:t}));if(m(g),g.stopPropagation!==!0){let{messageId:S,toolCallId:y,content:T,role:w,subagentRunId:_}=p;u.add(y);let b={id:S,toolCallId:y,role:w||"tool",content:T,..._!=null&&{subagentRunId:_}};qe(b,p);let I=a.findIndex(z=>z.role==="assistant"&&z.toolCalls?.some(P=>P.id===y));if(I===-1)a.push(b);else{let z=I+1;for(;z<a.length&&a[z].role==="tool";)z++;a.splice(z,0,b)}await Promise.all(r.map(z=>{z.onNewMessage?.({message:b,messages:a,state:s,agent:n,input:t})})),m({messages:a})}return h()}case v.STATE_SNAPSHOT:{let g=await oe(r,a,s,(S,y,T)=>S.onStateSnapshotEvent?.({event:p,messages:y,state:T,agent:n,input:t}));if(m(g),g.stopPropagation!==!0){let{snapshot:S}=p;s=S,m({state:s})}return h()}case v.STATE_DELTA:{let g=await oe(r,a,s,(S,y,T)=>S.onStateDeltaEvent?.({event:p,messages:y,state:T,agent:n,input:t}));if(m(g),g.stopPropagation!==!0){let{delta:S}=p;try{s=Wo.applyPatch(s,S,!0,!1).newDocument,m({state:s})}catch(y){let T=y instanceof Error?y.message:String(y);console.warn(`Failed to apply state patch:
Current state: ${JSON.stringify(s,null,2)}
Patch operations: ${JSON.stringify(S,null,2)}
Error: ${T}`)}}return h()}case v.MESSAGES_SNAPSHOT:{let g=await oe(r,a,s,(S,y,T)=>S.onMessagesSnapshotEvent?.({event:p,messages:y,state:T,agent:n,input:t}));if(m(g),g.stopPropagation!==!0){let{messages:S}=p,y=S.map(P=>{if(P.subagentRunId!==null)return P;let te={...P};return delete te.subagentRunId,te}),T=new Map(y.map(P=>[P.id,P])),w=O0(p),_=y.some(P=>P.role==="activity"),b=y.some(P=>P.role==="reasoning"),I=P=>P.role==="activity"&&(w?!w.includes(P.activityType):w!==null&&!_)||P.role==="reasoning"&&!b;a=a.filter(P=>T.has(P.id)||I(P)).map(P=>T.get(P.id)??P);let z=new Set(a.map(P=>P.id));for(let P of y)z.has(P.id)||a.push(P);m({messages:a})}return h()}case v.ACTIVITY_SNAPSHOT:{let g=p,S=a.findIndex(b=>b.id===g.messageId),y=S>=0?a[S]:void 0,T=y?.role==="activity"?y:void 0,w=g.replace??!0,_=await oe(r,a,s,(b,I,z)=>b.onActivitySnapshotEvent?.({event:g,messages:I,state:z,agent:n,input:t,activityMessage:T,existingMessage:y}));if(m(_),_.stopPropagation!==!0){let b={id:g.messageId,role:"activity",activityType:g.activityType,content:Q(g.content),...g.subagentRunId!=null&&{subagentRunId:g.subagentRunId}},I,z;S===-1?(a.push(b),I=b,z=b):T?(w&&(a[S]={...T,activityType:g.activityType,content:Q(g.content),subagentRunId:g.subagentRunId},g.subagentRunId??delete a[S].subagentRunId),z=a[S]):w&&(a[S]=b,I=b,z=b),qe(z,g),m({messages:a}),I&&await Promise.all(r.map(P=>P.onNewMessage?.({message:I,messages:a,state:s,agent:n,input:t})))}return h()}case v.ACTIVITY_DELTA:{let g=p,S=a.findIndex(_=>_.id===g.messageId);if(S===-1)return h();let y=a[S];if(y.role!=="activity")return console.warn(`ACTIVITY_DELTA: Message '${g.messageId}' is not an activity message`),h();let T=y,w=await oe(r,a,s,(_,b,I)=>_.onActivityDeltaEvent?.({event:g,messages:b,state:I,agent:n,input:t,activityMessage:T}));if(m(w),w.stopPropagation!==!0)try{qe(T,g)&&m({messages:a});let _=Q(T.content??{}),b=Wo.applyPatch(_,g.patch??[],!0,!1).newDocument;a[S]={...T,content:Q(b),activityType:g.activityType},m({messages:a})}catch(_){let b=_ instanceof Error?_.message:String(_);console.warn(`Failed to apply activity patch for '${g.messageId}': ${b}`)}return h()}case v.RAW:return m(await oe(r,a,s,(g,S,y)=>g.onRawEvent?.({event:p,messages:S,state:y,agent:n,input:t}))),h();case v.CUSTOM:return m(await oe(r,a,s,(g,S,y)=>g.onCustomEvent?.({event:p,messages:S,state:y,agent:n,input:t}))),h();case v.RUN_STARTED:{let g=await oe(r,a,s,(S,y,T)=>S.onRunStartedEvent?.({event:p,messages:y,state:T,agent:n,input:t}));if(m(g),l=[],u=new Set,g.stopPropagation!==!0){let S=p;if(S.input?.messages){for(let y of S.input.messages){let T=y;if(y.subagentRunId===null){let w={...y};delete w.subagentRunId,T=w}a.find(w=>w.id===T.id)||a.push(T)}m({messages:a})}}return h()}case v.RUN_FINISHED:{let g=p,S=g.outcome?.type==="interrupt"?{event:g,outcome:"interrupt",interrupts:g.outcome.interrupts}:g.outcome?.type==="cancelled"?{event:g,outcome:"cancelled"}:{event:g,outcome:"success",result:g.result,pendingToolCallIds:f(g)},y=await oe(r,a,s,(T,w,_)=>T.onRunFinishedEvent?.({...S,messages:w,state:_,agent:n,input:t}));return m(y),y.stopPropagation!==!0&&(n.pendingInterrupts=S.outcome==="interrupt"?S.interrupts.map(T=>{if(T.subagentRunId!==null)return T;let w={...T};return delete w.subagentRunId,w}):[]),h()}case v.RUN_ERROR:return m(await oe(r,a,s,(g,S,y)=>g.onRunErrorEvent?.({event:p,messages:S,state:y,agent:n,input:t}))),h();case v.STEP_STARTED:return m(await oe(r,a,s,(g,S,y)=>g.onStepStartedEvent?.({event:p,messages:S,state:y,agent:n,input:t}))),h();case v.STEP_FINISHED:return m(await oe(r,a,s,(g,S,y)=>g.onStepFinishedEvent?.({event:p,messages:S,state:y,agent:n,input:t}))),h();case v.TEXT_MESSAGE_CHUNK:throw Error("TEXT_MESSAGE_CHUNK must be transformed before being applied");case v.TOOL_CALL_CHUNK:throw Error("TOOL_CALL_CHUNK must be transformed before being applied");case v.REASONING_START:return m(await oe(r,a,s,(g,S,y)=>g.onReasoningStartEvent?.({event:p,messages:S,state:y,agent:n,input:t}))),h();case v.REASONING_MESSAGE_START:{let g=await oe(r,a,s,(S,y,T)=>S.onReasoningMessageStartEvent?.({event:p,messages:y,state:T,agent:n,input:t}));if(m(g),g.stopPropagation!==!0){let{messageId:S,subagentRunId:y}=p,T=a.find(b=>b.id===S);if(T?.role==="activity")return console.warn(`REASONING_MESSAGE_START: Message '${S}' is an activity message \u2014 message ids must be unique across activity and reasoning messages`),h();let w=T;if(!w){let b={id:S,role:"reasoning",content:"",...y!=null&&{subagentRunId:y}};a.push(b),w=b}let _=qe(w,p);(!T||_)&&m({messages:a})}return h()}case v.REASONING_MESSAGE_CONTENT:{let{messageId:g,delta:S}=p,y=a.find(w=>w.id===g);if(!y)return console.warn(`REASONING_MESSAGE_CONTENT: No message found with ID '${g}'`),h();if(y.role==="activity")return console.warn(`REASONING_MESSAGE_CONTENT: Message '${g}' is an activity message \u2014 message ids must be unique across activity and reasoning messages`),h();let T=await oe(r,a,s,(w,_,b)=>w.onReasoningMessageContentEvent?.({event:p,messages:_,state:b,agent:n,input:t,reasoningMessageBuffer:typeof y.content=="string"?y.content:""}));return m(T),T.stopPropagation!==!0&&(y.content=`${typeof y.content=="string"?y.content:""}${S}`,qe(y,p),m({messages:a})),h()}case v.REASONING_MESSAGE_END:{let{messageId:g}=p,S=a.find(T=>T.id===g);if(!S)return console.warn(`REASONING_MESSAGE_END: No message found with ID '${g}'`),h();if(S.role==="activity")return console.warn(`REASONING_MESSAGE_END: Message '${g}' is an activity message \u2014 message ids must be unique across activity and reasoning messages`),h();let y=await oe(r,a,s,(T,w,_)=>T.onReasoningMessageEndEvent?.({event:p,messages:w,state:_,agent:n,input:t,reasoningMessageBuffer:typeof S.content=="string"?S.content:""}));return m(y),y.stopPropagation!==!0&&qe(S,p)&&m({messages:a}),await Promise.all(r.map(T=>{T.onNewMessage?.({message:S,messages:a,state:s,agent:n,input:t})})),h()}case v.REASONING_MESSAGE_CHUNK:throw Error("REASONING_MESSAGE_CHUNK must be transformed before being applied");case v.REASONING_END:return m(await oe(r,a,s,(g,S,y)=>g.onReasoningEndEvent?.({event:p,messages:S,state:y,agent:n,input:t}))),h();case v.REASONING_ENCRYPTED_VALUE:{let{subtype:g,entityId:S,encryptedValue:y}=p,T=await oe(r,a,s,(w,_,b)=>w.onReasoningEncryptedValueEvent?.({event:p,messages:_,state:b,agent:n,input:t}));if(m(T),T.stopPropagation!==!0){let w=!1;if(g==="tool-call"){for(let _ of a)if(_.role==="assistant"&&_.toolCalls){let b=_.toolCalls.find(I=>I.id===S);if(b){b.encryptedValue=y,w=!0;break}}}else{let _=a.find(b=>b.id===S);_?.role!=="activity"&&_&&(_.encryptedValue=y,w=!0)}w&&(c.messages=a)}return h()}case v.SUBAGENT_STARTED:return m(await oe(r,a,s,(g,S,y)=>g.onSubagentStartedEvent?.({event:p,messages:S,state:y,agent:n,input:t}))),h();case v.SUBAGENT_FINISHED:return m(await oe(r,a,s,(g,S,y)=>g.onSubagentFinishedEvent?.({event:p,messages:S,state:y,agent:n,input:t}))),h();case v.SUBAGENT_ERROR:return m(await oe(r,a,s,(g,S,y)=>g.onSubagentErrorEvent?.({event:p,messages:S,state:y,agent:n,input:t}))),h()}return p.type,h()}),Wl(),r.length>0?Yl({}):p=>p)},pu=t=>e=>{let n=un(t),r=new Set,o=new Set,i=new Set,a=new Set,s={message:new Map,toolCall:new Map,activity:new Map,reasoning:new Map},c=!1,l=!1,u=!1,f=new Map,m=w=>{let _=f.get(w);return _||(_=new Map,f.set(w,_)),_},h=()=>{for(let w of f.values())if(w.size>0)return!0;return!1},p=new Map,E=new Set,g=!1,S=()=>{r.clear(),o.clear(),i.clear(),a.clear(),s.message.clear(),s.toolCall.clear(),s.activity.clear(),s.reasoning.clear(),f.clear(),p.clear(),E.clear(),c=!1,l=!1,g=!0},y=(w,_)=>{let b=w??[];if(Array.isArray(b))for(let I of b){if(!I||typeof I.id!="string")continue;if(I.subagentRunId===null)return new V(`Cannot send a message (id '${I.id}') with 'subagentRunId: null'. The field is optional \u2014 omit it entirely.`);let z=I.role==="reasoning"?s.reasoning:I.role==="activity"?s.activity:s.message;(_||!z.has(I.id))&&z.set(I.id,{subagentRunId:I.subagentRunId});for(let P of I.toolCalls??[])P&&typeof P.id=="string"&&(_||!s.toolCall.has(P.id))&&s.toolCall.set(P.id,{subagentRunId:I.subagentRunId??void 0})}},T=(w,_,b,I,z)=>{if(_!==void 0&&b&&b.subagentRunId!==_)return new V(`Cannot send '${w}': subagentRunId '${_}' does not match the ${I} '${z}' opener's subagent '${b.subagentRunId??"(the parent agent)"}'.`)};return e.pipe(Ge(w=>{let _=w.type;if(n?.event("VERIFY","Event:",w,{type:w.type}),l&&_!==v.RUN_STARTED)return F(()=>new V(`Cannot send event type '${_}': The run has already errored with 'RUN_ERROR'. No further events can be sent.`));if(c&&_!==v.RUN_ERROR&&_!==v.RUN_STARTED)return F(()=>new V(`Cannot send event type '${_}': The run has already finished with 'RUN_FINISHED'. Start a new run with 'RUN_STARTED'.`));if(u){if(_===v.RUN_STARTED){if(g&&!c&&!l)return F(()=>new V("Cannot send 'RUN_STARTED' while a run is still active. The previous run must be finished with 'RUN_FINISHED' before starting a new run."));(c||l)&&S()}}else if(u=!0,_!==v.RUN_STARTED&&_!==v.RUN_ERROR)return F(()=>new V("First event must be 'RUN_STARTED'"));if(w.subagentRunId===null)return F(()=>new V(`Cannot send '${_}' with 'subagentRunId: null'. The field is optional \u2014 omit it entirely.`));if(_===v.SUBAGENT_STARTED||_===v.SUBAGENT_FINISHED||_===v.SUBAGENT_ERROR){let b=_===v.SUBAGENT_STARTED?["description","parentSubagentRunId","parentToolCallId","parentMessageId"]:_===v.SUBAGENT_FINISHED?["outcome"]:["code"];for(let z of b)if(w[z]===null)return F(()=>new V(`Cannot send '${_}' with '${z}: null'. The field is optional \u2014 omit it entirely.`));let I=w.outcome;if(I!=null&&I.type!=="success"&&I.type!=="suspended")return F(()=>new V(`Cannot send '${_}' with outcome type '${String(I.type)}'. The outcome is either { type: "success" } or { type: "suspended" }.`));if(I&&I.interruptIds===null)return F(()=>new V(`Cannot send '${_}' with 'outcome.interruptIds: null'. The field is optional \u2014 omit it entirely.`));if(I&&Array.isArray(I.interruptIds)&&I.interruptIds.some(z=>typeof z!="string"))return F(()=>new V(`Cannot send '${_}' with a non-string entry in 'outcome.interruptIds'. Interrupt ids are strings.`))}if(_===v.RUN_FINISHED){let b=w.outcome;if(b?.type==="interrupt"&&Array.isArray(b.interrupts)){for(let I of b.interrupts)if(I&&I.subagentRunId===null)return F(()=>new V(`Cannot send 'RUN_FINISHED' with an interrupt (id '${I.id}') carrying 'subagentRunId: null'. The field is optional \u2014 omit it entirely.`))}}switch(_){case v.TEXT_MESSAGE_START:{let b=w.messageId;if(r.has(b))return F(()=>new V(`Cannot send 'TEXT_MESSAGE_START' event: A text message with ID '${b}' is already in progress. Complete it with 'TEXT_MESSAGE_END' first.`));let I=s.message.get(b);if(I){let z=T(_,w.subagentRunId,I,"message",b);if(z)return F(()=>z)}return r.add(b),I||s.message.set(b,{subagentRunId:w.subagentRunId}),se(w)}case v.TEXT_MESSAGE_CONTENT:{let b=w.messageId;if(!r.has(b))return F(()=>new V(`Cannot send 'TEXT_MESSAGE_CONTENT' event: No active text message found with ID '${b}'. Start a text message with 'TEXT_MESSAGE_START' first.`));let I=T(_,w.subagentRunId,s.message.get(b),"message",b);return I?F(()=>I):se(w)}case v.TEXT_MESSAGE_END:{let b=w.messageId;if(!r.has(b))return F(()=>new V(`Cannot send 'TEXT_MESSAGE_END' event: No active text message found with ID '${b}'. A 'TEXT_MESSAGE_START' event must be sent first.`));let I=T(_,w.subagentRunId,s.message.get(b),"message",b);return I?F(()=>I):(r.delete(b),se(w))}case v.TOOL_CALL_START:{let b=w.toolCallId;if(o.has(b))return F(()=>new V(`Cannot send 'TOOL_CALL_START' event: A tool call with ID '${b}' is already in progress. Complete it with 'TOOL_CALL_END' first.`));let I=w.parentMessageId,z=w.subagentRunId,P;if(I!==void 0){let Be=s.message.get(I);if(Be){if(z!==void 0&&z!==Be.subagentRunId)return F(()=>new V(`Cannot send 'TOOL_CALL_START': subagentRunId '${z}' does not match its parent message '${I}' owner '${Be.subagentRunId??"(the parent agent)"}'. A tool call belongs to the message that carries it.`));P=Be}}let te=s.toolCall.get(b);if(te){let Be=T(_,z,te,"tool call",b);if(Be)return F(()=>Be);if(z===void 0&&P&&P.subagentRunId!==te.subagentRunId)return F(()=>new V(`Cannot send 'TOOL_CALL_START': tool call '${b}' is owned by '${te.subagentRunId??"(the parent agent)"}' but its parent message '${I}' is owned by '${P.subagentRunId??"(the parent agent)"}'. A tool call belongs to the message that carries it.`))}return o.add(b),te||s.toolCall.set(b,z===void 0?P??{subagentRunId:void 0}:{subagentRunId:z}),se(w)}case v.TOOL_CALL_ARGS:{let b=w.toolCallId;if(!o.has(b))return F(()=>new V(`Cannot send 'TOOL_CALL_ARGS' event: No active tool call found with ID '${b}'. Start a tool call with 'TOOL_CALL_START' first.`));let I=T(_,w.subagentRunId,s.toolCall.get(b),"tool call",b);return I?F(()=>I):se(w)}case v.TOOL_CALL_END:{let b=w.toolCallId;if(!o.has(b))return F(()=>new V(`Cannot send 'TOOL_CALL_END' event: No active tool call found with ID '${b}'. A 'TOOL_CALL_START' event must be sent first.`));let I=T(_,w.subagentRunId,s.toolCall.get(b),"tool call",b);return I?F(()=>I):(o.delete(b),se(w))}case v.STEP_STARTED:{let b=w.stepName,I=w.subagentRunId;return m(I).has(b)?F(()=>new V(`Step "${b}" is already active for 'STEP_STARTED'${I===void 0?"":` in subagent '${I}'`}`)):(m(I).set(b,!0),se(w))}case v.STEP_FINISHED:{let b=w.stepName,I=w.subagentRunId;if(!m(I).has(b)){let z,P=!1;for(let[te,Be]of f)if(te!==I&&Be.has(b)){z=te,P=!0;break}return F(P?()=>new V(`Cannot send 'STEP_FINISHED' for step "${b}" attributed to ${I===void 0?"the parent agent":`subagent '${I}'`}: that step is open under ${z===void 0?"the parent agent":`subagent '${z}'`}. A step must be finished by whoever started it.`):()=>new V(`Cannot send 'STEP_FINISHED' for step "${b}" that was not started`))}return m(I).delete(b),se(w)}case v.ACTIVITY_SNAPSHOT:{let b=w.messageId;return(!s.activity.has(b)||w.replace!==!1)&&s.activity.set(b,{subagentRunId:w.subagentRunId}),se(w)}case v.TOOL_CALL_RESULT:{let b=w.messageId;return typeof b=="string"&&s.message.set(b,{subagentRunId:w.subagentRunId}),se(w)}case v.REASONING_START:case v.REASONING_MESSAGE_START:{let b=w.messageId,I=_===v.REASONING_START,z=I?i:a;if(z.has(b))return F(()=>new V(I?`Cannot send 'REASONING_START' event: A reasoning span with ID '${b}' is already in progress. Complete it with 'REASONING_END' first.`:`Cannot send 'REASONING_MESSAGE_START' event: A reasoning message with ID '${b}' is already in progress. Complete it with 'REASONING_MESSAGE_END' first.`));let P=s.reasoning.get(b);if(P){let te=T(_,w.subagentRunId,P,"reasoning message",b);if(te)return F(()=>te)}return z.add(b),P||s.reasoning.set(b,{subagentRunId:w.subagentRunId}),se(w)}case v.REASONING_MESSAGE_CONTENT:case v.REASONING_MESSAGE_END:case v.REASONING_END:{let b=w.messageId,I=_===v.REASONING_END,z=I?i:a;if(!z.has(b))return F(()=>new V(I?`Cannot send 'REASONING_END' event: No active reasoning span found with ID '${b}'. A 'REASONING_START' event must be sent first.`:`Cannot send '${_}' event: No active reasoning message found with ID '${b}'. Start a reasoning message with 'REASONING_MESSAGE_START' first.`));let P=T(_,w.subagentRunId,s.reasoning.get(b),"reasoning message",b);return P?F(()=>P):((_===v.REASONING_END||_===v.REASONING_MESSAGE_END)&&z.delete(b),se(w))}case v.REASONING_ENCRYPTED_VALUE:{let b=w.entityId,I=w.subtype,z=I==="tool-call"?s.toolCall.get(b):I==="message"?s.message.get(b)??s.reasoning.get(b):s.reasoning.get(b),P=I==="tool-call"?"tool call":I==="message"?"message":"reasoning message",te=T(_,w.subagentRunId,z,P,b);return te?F(()=>te):se(w)}case v.ACTIVITY_DELTA:{let b=w.messageId,I=T(_,w.subagentRunId,s.activity.get(b),"activity",b);return I?F(()=>I):se(w)}case v.SUBAGENT_STARTED:{if(typeof w.subagentRunId!="string")return F(()=>new V("Cannot send 'SUBAGENT_STARTED' without a 'subagentRunId'."));if(typeof w.name!="string")return F(()=>new V("Cannot send 'SUBAGENT_STARTED' without a 'name'."));let b=w.subagentRunId,I=w.parentSubagentRunId;return p.has(b)?F(()=>new V(`Cannot send 'SUBAGENT_STARTED': subagent '${b}' is already active. Finish it with 'SUBAGENT_FINISHED' first.`)):E.has(b)?F(()=>new V(`Cannot send 'SUBAGENT_STARTED': subagent '${b}' has already finished in this run. Subagent IDs are per-invocation and cannot be reused.`)):I!==void 0&&!p.has(I)&&!E.has(I)?F(()=>new V(`Cannot send 'SUBAGENT_STARTED': parentSubagentRunId '${I}' has not been started in this run.`)):(p.set(b,!0),se(w))}case v.SUBAGENT_FINISHED:case v.SUBAGENT_ERROR:{if(typeof w.subagentRunId!="string")return F(()=>new V(`Cannot send '${_}' without a 'subagentRunId'.`));if(_===v.SUBAGENT_ERROR&&typeof w.message!="string")return F(()=>new V("Cannot send 'SUBAGENT_ERROR' without a 'message'."));let b=w.subagentRunId;return p.has(b)?(p.delete(b),E.add(b),se(w)):F(()=>new V(`Cannot send '${_}': no active subagent found with ID '${b}'. A 'SUBAGENT_STARTED' event must be sent first.`))}case v.MESSAGES_SNAPSHOT:{let b=y(w.messages,!0);if(b)return F(()=>b)}return se(w);case v.RUN_STARTED:g=!0;{let b=y((w.input??{}).messages,!1);if(b)return F(()=>b)}return se(w);case v.RUN_FINISHED:if(h()){let b=[];for(let[z,P]of f)for(let te of P.keys())b.push(z===void 0?te:`${te} (subagent '${z}')`);let I=b.join(", ");return F(()=>new V(`Cannot send 'RUN_FINISHED' while steps are still active: ${I}`))}if(r.size>0){let b=Array.from(r.keys()).join(", ");return F(()=>new V(`Cannot send 'RUN_FINISHED' while text messages are still active: ${b}`))}if(a.size>0){let b=Array.from(a.keys()).join(", ");return F(()=>new V(`Cannot send 'RUN_FINISHED' while reasoning messages are still active: ${b}`))}if(i.size>0){let b=Array.from(i.keys()).join(", ");return F(()=>new V(`Cannot send 'RUN_FINISHED' while reasoning spans are still active: ${b}`))}if(o.size>0){let b=Array.from(o.keys()).join(", ");return F(()=>new V(`Cannot send 'RUN_FINISHED' while tool calls are still active: ${b}`))}if(p.size>0){let b=Array.from(p.keys()).join(", ");return F(()=>new V(`Cannot send 'RUN_FINISHED' while subagents are still active: ${b}`))}return c=!0,se(w);case v.RUN_ERROR:return l=!0,se(w);case v.CUSTOM:return se(w);default:return se(w)}}))},cn=(function(t){return t.HEADERS="headers",t.DATA="data",t})({}),z0=t=>Sr(()=>Yt(t())).pipe(Xl(e=>{if(!e.ok){let o=e.headers.get("content-type")||"";return Yt(e.text()).pipe(Ge(i=>{let a=i;if(o.includes("application/json"))try{a=JSON.parse(i)}catch{}let s=Error(`HTTP ${e.status}: ${typeof a=="string"?a:JSON.stringify(a)}`);return s.status=e.status,s.payload=a,F(()=>s)}))}let n={type:cn.HEADERS,status:e.status,headers:e.headers},r=e.body?.getReader();return r?new he(o=>(o.next(n),(async()=>{try{for(;;){let{done:i,value:a}=await r.read();if(i)break;let s={type:cn.DATA,data:a};o.next(s)}o.complete()}catch(i){o.error(i)}})(),()=>{r.cancel().catch(i=>{if(i?.name!=="AbortError")throw i})})):F(()=>Error("Failed to getReader() from response"))})),Rv=10*1024*1024,L0=(t,e)=>{let n=un(e),r=new vt,o=new TextDecoder("utf-8",{fatal:!1}),i="";t.subscribe({next:s=>{if(s.type!==cn.HEADERS&&s.type===cn.DATA&&s.data){let c=o.decode(s.data,{stream:!0});i+=c;let l=i.split(/\n\n/);i=l.pop()||"";for(let u of l)a(u);if(i.length>Rv){r.error(Error(`SSE buffer size exceeded maximum limit of ${Rv/(1024*1024)} MB`));return}}},error:s=>r.error(s),complete:()=>{i&&(i+=o.decode(),a(i)),r.complete()}});function a(s){let c=s.split(`
`),l=[];for(let u of c)u.startsWith("data:")&&l.push(u.slice(5).replace(/^ /,""));if(l.length>0)try{let u=l.join(`
`),f=JSON.parse(u);n?.event("SSE","Event received:",f,{type:f?.type}),r.next(f)}catch(u){r.error(u)}}return r.asObservable()},Cv=10*1024*1024,D0=()=>typeof process<"u"&&process.env!==void 0&&!!process.env.SUPPRESS_TRANSFORMATION_WARNINGS,$0=(t,e)=>{let n=un(e),r=new vt,o=new Uint8Array,i=!1;t.subscribe({next:s=>{if(s.type!==cn.HEADERS&&s.type===cn.DATA&&s.data){let c=new Uint8Array(o.length+s.data.length);c.set(o,0),c.set(s.data,o.length),o=c,a()}},error:s=>r.error(s),complete:()=>{if(a(),!i){if(o.length>0){r.error(Error(`The binary stream ended mid-frame: ${o.length} trailing bytes could not be read as a complete message.`));return}r.complete()}}});function a(){if(!i)for(;o.length>=4;){let s=4+new DataView(o.buffer,o.byteOffset,4).getUint32(0,!1);if(s>Cv){r.error(Error(`Protobuf message size exceeded maximum limit of ${Cv/(1024*1024)} MB`));return}if(o.length<s)break;try{let c=o.slice(4,s),l=Sv(c);n?.event("PROTO","Event received:",l,{type:l.type}),r.next(l)}catch(c){if(c instanceof iu)D0()||console.warn("[ag-ui][proto] Dropped an event this build does not know: the protocol has a variant this SDK predates.");else{let l=c instanceof Error?c.message:String(c);i=!0,r.error(Error(`Failed to decode protocol buffer message: ${l}`));return}}o=o.slice(s)}}return r.asObservable()},U0=(t,e)=>{let n=un(e),r=new vt,o=new ti(1),i=!1,a,s=!1,c=()=>{s=!0,a?.unsubscribe()},l=f=>{c(),r.error(f)},u=()=>{c(),r.complete()};return a=t.subscribe({next:f=>{if(o.next(f),f.type===cn.HEADERS&&!i){i=!0;let m=f.headers.get("content-type");n?.lifecycle("HTTP","Stream format detected:",{contentType:m,parser:m===au?"protobuf":"sse"}),m===au?$0(o,n).subscribe({next:h=>r.next(h),error:h=>l(h),complete:()=>u()}):L0(o,n).subscribe({next:h=>{if(typeof h!="object"||!h||Array.isArray(h)){let E=Error("Invalid event: the frame is not a JSON object.");n?.event("HTTP","Event invalid:",{json:h,error:String(E)}),l(E);return}let p=h;if(typeof p.type!="string"||p.type.length===0){let E=Error("Invalid event: the frame carries no event type.");n?.event("HTTP","Event invalid:",{json:h,error:String(E)}),l(E);return}n?.event("HTTP","Event received:",h,{type:p.type}),r.next(h)},error:h=>{if(h?.name==="AbortError"){r.next({type:v.RUN_ERROR,message:h.message||"Request aborted",code:"abort",rawEvent:h}),u();return}return l(h)},complete:()=>u()})}else i||l(Error("No headers event received before data events"))},error:f=>{o.error(f),l(f)},complete:()=>{o.complete()}}),s&&a.unsubscribe(),r.asObservable()},ze={TextMessageStart:"TextMessageStart",TextMessageContent:"TextMessageContent",TextMessageEnd:"TextMessageEnd",ActionExecutionStart:"ActionExecutionStart",ActionExecutionArgs:"ActionExecutionArgs",ActionExecutionEnd:"ActionExecutionEnd",ActionExecutionResult:"ActionExecutionResult",AgentStateMessage:"AgentStateMessage",MetaEvent:"MetaEvent",RunStarted:"RunStarted",RunFinished:"RunFinished",RunError:"RunError",NodeStarted:"NodeStarted",NodeFinished:"NodeFinished"},H0=t=>{if(typeof t=="string")return t;if(!Array.isArray(t))return;let e=t.filter(n=>n.type==="text").map(n=>n.text).filter(n=>n.length>0);if(e.length!==0)return e.join(`
`)};function Vv(t,e){return _p(e)&&$r(`[ag-ui][legacy] The result of tool call '${t}' carries content parts the legacy protocol cannot represent; only its text parts are bridged and the rest is dropped.`),Nn(e)}var $r=t=>{typeof process<"u"&&process.env!==void 0&&process.env.SUPPRESS_TRANSFORMATION_WARNINGS||console.warn(t)},F0=(t,e,n)=>r=>{let o={},i=!0,a=!0,s="",c=null,l=null,u=[],f={},m=!1,h=p=>{typeof p=="object"&&p&&("messages"in p&&delete p.messages,o=p)};return r.pipe(Ge(p=>{switch(p.type){case v.TEXT_MESSAGE_START:{let E=p;return[{type:ze.TextMessageStart,messageId:E.messageId,role:E.role}]}case v.TEXT_MESSAGE_CONTENT:{let E=p;return[{type:ze.TextMessageContent,messageId:E.messageId,content:E.delta}]}case v.TEXT_MESSAGE_END:{let E=p;return[{type:ze.TextMessageEnd,messageId:E.messageId}]}case v.TOOL_CALL_START:{let E=p;return u.push({id:E.toolCallId,type:"function",function:{name:E.toolCallName,arguments:""}}),a=!0,f[E.toolCallId]=E.toolCallName,[{type:ze.ActionExecutionStart,actionExecutionId:E.toolCallId,actionName:E.toolCallName,parentMessageId:E.parentMessageId}]}case v.TOOL_CALL_ARGS:{let E=p,g=u.find(y=>y.id===E.toolCallId);if(!g)return $r(`[ag-ui][legacy] TOOL_CALL_ARGS: No tool call found with ID '${E.toolCallId}'`),[];g.function.arguments+=E.delta;let S=!1;if(l){let y=l.find(T=>T.tool==g.function.name);if(y)try{let T=JSON.parse(bi(g.function.arguments));y.tool_argument&&y.tool_argument in T?(h({...o,[y.state_key]:T[y.tool_argument]}),S=!0):y.tool_argument||(h({...o,[y.state_key]:T}),S=!0)}catch{}}return[{type:ze.ActionExecutionArgs,actionExecutionId:E.toolCallId,args:E.delta},...S?[{type:ze.AgentStateMessage,threadId:t,agentName:n,nodeName:s,runId:e,running:i,role:"assistant",state:JSON.stringify(o),active:a}]:[]]}case v.TOOL_CALL_END:{let E=p;return[{type:ze.ActionExecutionEnd,actionExecutionId:E.toolCallId}]}case v.TOOL_CALL_RESULT:{let E=p,g=f[E.toolCallId];return(g===void 0||g==="")&&$r(`[ag-ui][legacy] No usable tool name was seen for tool call '${E.toolCallId}' (${g===void 0?"no TOOL_CALL_START reached this bridge":"its TOOL_CALL_START carried an empty toolCallName"}), so its result is being bridged with the fabricated action name "unknown". Downstream consumers route on that name.`),[{type:ze.ActionExecutionResult,actionExecutionId:E.toolCallId,result:Vv(E.toolCallId,E.content),actionName:g||"unknown"}]}case v.RAW:return m||(m=!0,$r("[ag-ui][legacy] Dropping RAW events: the legacy runtime protocol has no equivalent, so the provider payloads they carry do not reach the legacy stream. Reported once per stream.")),[];case v.CUSTOM:{let E=p;switch(E.name){case"Exit":i=!1;break;case"PredictState":l=E.value;break}return[{type:ze.MetaEvent,name:E.name,value:E.value}]}case v.STATE_SNAPSHOT:return h(p.snapshot),[{type:ze.AgentStateMessage,threadId:t,agentName:n,nodeName:s,runId:e,running:i,role:"assistant",state:JSON.stringify(o),active:a}];case v.STATE_DELTA:{let E=p,g;try{g=Wo.applyPatch(o,E.delta,!0,!1).newDocument}catch(S){let y=S instanceof Error?S.message:String(S);return $r(`[ag-ui][legacy] Failed to apply state patch:
Current state: ${JSON.stringify(o,null,2)}
Patch operations: ${JSON.stringify(E.delta,null,2)}
Error: ${y}`),[]}return h(g),[{type:ze.AgentStateMessage,threadId:t,agentName:n,nodeName:s,runId:e,running:i,role:"assistant",state:JSON.stringify(o),active:a}]}case v.MESSAGES_SNAPSHOT:return c=p.messages,[{type:ze.AgentStateMessage,threadId:t,agentName:n,nodeName:s,runId:e,running:i,role:"assistant",state:JSON.stringify({...o,...c?{messages:c}:{}}),active:!0}];case v.RUN_STARTED:return[];case v.RUN_FINISHED:{if(c&&(o.messages=c),Object.keys(o).length===0)return[];let E=null;if(c)try{E=G0(c)}catch(g){return[{type:ze.RunError,message:g.message}]}return[{type:ze.AgentStateMessage,threadId:t,agentName:n,nodeName:s,runId:e,running:i,role:"assistant",state:JSON.stringify({...o,...E?{messages:E}:{}}),active:!1}]}case v.RUN_ERROR:{let E=p;return[{type:ze.RunError,message:E.message,code:E.code}]}case v.STEP_STARTED:return s=p.stepName,u=[],l=null,[{type:ze.AgentStateMessage,threadId:t,agentName:n,nodeName:s,runId:e,running:i,role:"assistant",state:JSON.stringify(o),active:!0}];case v.STEP_FINISHED:return u=[],l=null,[{type:ze.AgentStateMessage,threadId:t,agentName:n,nodeName:s,runId:e,running:i,role:"assistant",state:JSON.stringify(o),active:!1}];default:return[]}}))};function G0(t){let e=[];for(let n of t)if(n.role==="assistant"||n.role==="user"||n.role==="system"){let r=H0(n.content);if(r){let o={id:n.id,role:n.role,content:r};e.push(o)}if(n.role==="assistant"&&n.toolCalls&&n.toolCalls.length>0)for(let o of n.toolCalls){let i;try{i=JSON.parse(o.function.arguments)}catch(s){throw Error(`Failed to parse arguments for tool call '${o.id}' (${o.function.name}): ${s.message}`)}let a={id:o.id,name:o.function.name,arguments:i,parentMessageId:n.id};e.push(a)}}else if(n.role==="tool"){let r="unknown";for(let i of t)if(i.role==="assistant"&&i.toolCalls?.length){for(let a of i.toolCalls)if(a.id===n.toolCallId){r=a.function.name;break}}let o={id:n.id,result:Vv(n.toolCallId,n.content),actionExecutionId:n.toolCallId,actionName:r};e.push(o)}return e}var Z0=t=>t.kind==="tool"?t.fields.toolCallId:t.fields.messageId,B0=t=>t==="tool"?"toolCallId":"messageId",Pa=(t,e,n,r,o)=>{if(r!==void 0&&r!==o)throw Error(`Cannot continue ${t} '${e}': chunk ${n} '${r}' does not match the open stream's ${n} ${o===void 0?"(absent)":`'${o}'`}.`)},La=(t,e)=>e.metadata===void 0?t:{...t,metadata:e.metadata},hu=(t,e)=>{let n=La(t,e);return e.rawEvent===void 0?n:{...n,rawEvent:e.rawEvent}},Tu=t=>new Set(Object.keys(t.shape)),V0=Tu(Hc),j0=Tu(Fc),W0=Tu(Zc),fu=(t,e)=>{let n;for(let r of Object.keys(t))e.has(r)||((n??={})[r]=t[r]);return n},q0=t=>{typeof process<"u"&&process.env!==void 0&&process.env.SUPPRESS_TRANSFORMATION_WARNINGS||console.warn(`[ag-ui][transform] ${t} Set SUPPRESS_TRANSFORMATION_WARNINGS=true to silence.`)},mu=(t,e,n,r)=>{if(e===void 0||n||t.length===0)return;let o=t[t.length-1],i=Object.keys(e).filter(a=>Object.prototype.hasOwnProperty.call(o,a));i.length>0&&q0(`A ${r} carried ${i.map(a=>`'${a}'`).join(", ")}, which the synthesized ${String(o.type)} already describes. The synthesized value is kept and the chunk's is dropped \u2014 this stage does not judge a described field, so the producer's value cannot be substituted for its own.`),t[t.length-1]={...e,...o}},Da=t=>e=>{let n=un(t),r=new Map,o=c=>{let l=r.get(c);if(!l)return[];switch(r.delete(c),l.kind){case"text":{let u={type:v.TEXT_MESSAGE_END,messageId:l.fields.messageId,...l.fields.subagentRunId!==void 0&&{subagentRunId:l.fields.subagentRunId}};return n?.event("TRANSFORM","TEXT_MESSAGE_END",u,{messageId:u.messageId}),[u]}case"tool":{let u={type:v.TOOL_CALL_END,toolCallId:l.fields.toolCallId,...l.fields.subagentRunId!==void 0&&{subagentRunId:l.fields.subagentRunId}};return n?.event("TRANSFORM","TOOL_CALL_END",u,{toolCallId:u.toolCallId}),[u]}case"reasoning":{let u={type:v.REASONING_MESSAGE_END,messageId:l.fields.messageId,...l.fields.subagentRunId!==void 0&&{subagentRunId:l.fields.subagentRunId}};return n?.event("TRANSFORM","REASONING_MESSAGE_END",u,{messageId:u.messageId}),[u]}}},i=()=>[...r.keys()].flatMap(c=>o(c)),a=(c,l)=>{for(let[u,f]of r)if(f.kind===c&&Z0(f)===l)return{owner:u}},s=(c,l,u,f,m)=>{if(l!==void 0){let p=a(c,l);if(p){if(u!==void 0&&u!==p.owner)throw Error(`Cannot continue ${m} '${l}': chunk subagentRunId '${u}' does not match the open stream's subagent '${p.owner??"(the parent agent)"}'.`);return p.owner}return u}if(u!==void 0)return u;if(r.get(void 0)?.kind===c)return;let h=[...r.entries()].filter(([,p])=>p.kind===c);if(h.length===1)return h[0][0];if(h.length>1)throw Error(`Ambiguous ${f}: it carries neither a ${B0(c)} nor a subagentRunId, but ${h.length} lanes have an open ${m}. Attribute the chunk to the subagent it belongs to.`)};return e.pipe(Ge(c=>{switch(c.type){case v.TEXT_MESSAGE_START:case v.TEXT_MESSAGE_CONTENT:case v.TEXT_MESSAGE_END:case v.TOOL_CALL_START:case v.TOOL_CALL_ARGS:case v.TOOL_CALL_END:case v.TOOL_CALL_RESULT:case v.STATE_SNAPSHOT:case v.STATE_DELTA:case v.CUSTOM:case v.STEP_STARTED:case v.STEP_FINISHED:case v.REASONING_START:case v.REASONING_MESSAGE_START:case v.REASONING_MESSAGE_CONTENT:case v.REASONING_MESSAGE_END:case v.REASONING_END:return[...o(c.subagentRunId??void 0),c];case v.RUN_STARTED:case v.RUN_FINISHED:case v.RUN_ERROR:case v.MESSAGES_SNAPSHOT:return[...i(),c];case v.RAW:case v.ACTIVITY_SNAPSHOT:case v.ACTIVITY_DELTA:case v.REASONING_ENCRYPTED_VALUE:case v.SUBAGENT_STARTED:return[c];case v.SUBAGENT_FINISHED:case v.SUBAGENT_ERROR:{let l=c.subagentRunId;return l==null?[c]:[...o(l),c]}case v.TEXT_MESSAGE_CHUNK:{let l=c,u=fu(c,V0),f=s("text",l.messageId,l.subagentRunId??void 0,"TEXT_MESSAGE_CHUNK","text message"),m=r.get(f),h=[],p=!1,E;if(m?.kind==="text"&&(l.messageId===void 0||l.messageId===m.fields.messageId))Pa("text message",m.fields.messageId,"role",l.role,m.fields.role),Pa("text message",m.fields.messageId,"name",l.name,m.fields.name),E=m.fields;else{if(h.push(...o(f)),l.messageId===void 0)throw Error("First TEXT_MESSAGE_CHUNK must have a messageId");E={messageId:l.messageId,role:l.role===void 0?"assistant":l.role,name:l.name,subagentRunId:l.subagentRunId},r.set(f,{kind:"text",fields:E});let g=La({type:v.TEXT_MESSAGE_START,messageId:l.messageId,role:E.role,...l.name!==void 0&&{name:l.name},...l.subagentRunId!==void 0&&{subagentRunId:l.subagentRunId}},l);h.push(g),n?.event("TRANSFORM","TEXT_MESSAGE_START",g,{messageId:l.messageId})}if(l.delta!==void 0||l.rawEvent!==void 0){let g=l.subagentRunId===void 0?E.subagentRunId:l.subagentRunId,S=hu({...u,type:v.TEXT_MESSAGE_CONTENT,messageId:E.messageId,delta:l.delta===void 0?"":l.delta,...g!==void 0&&{subagentRunId:g}},l);h.push(S),p=!0,n?.event("TRANSFORM","TEXT_MESSAGE_CONTENT",S,{messageId:E.messageId})}if(h.length===0&&(l.metadata!==void 0||l.rawEvent!==void 0||l.subagentRunId===null||u!==void 0)){let g=l.subagentRunId===void 0?E.subagentRunId:l.subagentRunId;h.push({...u,type:v.TEXT_MESSAGE_CONTENT,messageId:E.messageId,delta:"",...l.metadata!==void 0&&{metadata:l.metadata},...l.rawEvent!==void 0&&{rawEvent:l.rawEvent},...g!==void 0&&{subagentRunId:g}}),p=!0}return mu(h,u,p,"TEXT_MESSAGE_CHUNK"),h}case v.TOOL_CALL_CHUNK:{let l=c,u=fu(c,j0),f=s("tool",l.toolCallId,l.subagentRunId??void 0,"TOOL_CALL_CHUNK","tool call"),m=r.get(f),h=[],p=!1,E;if(m?.kind==="tool"&&(l.toolCallId===void 0||l.toolCallId===m.fields.toolCallId))Pa("tool call",m.fields.toolCallId,"toolCallName",l.toolCallName,m.fields.toolCallName),Pa("tool call",m.fields.toolCallId,"parentMessageId",l.parentMessageId,m.fields.parentMessageId),E=m.fields;else{if(h.push(...o(f)),l.toolCallId===void 0)throw Error("First TOOL_CALL_CHUNK must have a toolCallId");if(l.toolCallName===void 0)throw Error("First TOOL_CALL_CHUNK must have a toolCallName");E={toolCallId:l.toolCallId,toolCallName:l.toolCallName,parentMessageId:l.parentMessageId,subagentRunId:l.subagentRunId},r.set(f,{kind:"tool",fields:E});let g=La({type:v.TOOL_CALL_START,toolCallId:l.toolCallId,toolCallName:l.toolCallName,...l.parentMessageId!==void 0&&{parentMessageId:l.parentMessageId},...l.subagentRunId!==void 0&&{subagentRunId:l.subagentRunId}},l);h.push(g),n?.event("TRANSFORM","TOOL_CALL_START",g,{toolCallId:l.toolCallId,toolCallName:l.toolCallName})}if(l.delta!==void 0||l.rawEvent!==void 0){let g=l.subagentRunId===void 0?E.subagentRunId:l.subagentRunId,S=hu({...u,type:v.TOOL_CALL_ARGS,toolCallId:E.toolCallId,delta:l.delta===void 0?"":l.delta,...g!==void 0&&{subagentRunId:g}},l);h.push(S),p=!0,n?.event("TRANSFORM","TOOL_CALL_ARGS",S,{toolCallId:E.toolCallId})}if(h.length===0&&(l.metadata!==void 0||l.rawEvent!==void 0||l.subagentRunId===null||u!==void 0)){let g=l.subagentRunId===void 0?E.subagentRunId:l.subagentRunId;h.push({...u,type:v.TOOL_CALL_ARGS,toolCallId:E.toolCallId,delta:"",...l.metadata!==void 0&&{metadata:l.metadata},...l.rawEvent!==void 0&&{rawEvent:l.rawEvent},...g!==void 0&&{subagentRunId:g}}),p=!0}return mu(h,u,p,"TOOL_CALL_CHUNK"),h}case v.REASONING_MESSAGE_CHUNK:{let l=c,u=fu(c,W0),f=s("reasoning",l.messageId,l.subagentRunId??void 0,"REASONING_MESSAGE_CHUNK","reasoning message"),m=r.get(f),h=[],p=!1,E;if(m?.kind==="reasoning"&&(l.messageId===void 0||l.messageId===m.fields.messageId))E=m.fields;else{if(h.push(...o(f)),l.messageId===void 0)throw Error("First REASONING_MESSAGE_CHUNK must have a messageId");E={messageId:l.messageId,subagentRunId:l.subagentRunId},r.set(f,{kind:"reasoning",fields:E});let g=La({type:v.REASONING_MESSAGE_START,messageId:l.messageId,role:"reasoning",...l.subagentRunId!==void 0&&{subagentRunId:l.subagentRunId}},l);h.push(g),n?.event("TRANSFORM","REASONING_MESSAGE_START",g,{messageId:l.messageId})}if(l.delta!==void 0||l.rawEvent!==void 0){let g=l.subagentRunId===void 0?E.subagentRunId:l.subagentRunId,S=hu({...u,type:v.REASONING_MESSAGE_CONTENT,messageId:E.messageId,delta:l.delta===void 0?"":l.delta,...g!==void 0&&{subagentRunId:g}},l);h.push(S),p=!0,n?.event("TRANSFORM","REASONING_MESSAGE_CONTENT",S,{messageId:E.messageId})}if(h.length===0&&(l.metadata!==void 0||l.rawEvent!==void 0||l.subagentRunId===null||u!==void 0)){let g=l.subagentRunId===void 0?E.subagentRunId:l.subagentRunId;h.push({...u,type:v.REASONING_MESSAGE_CONTENT,messageId:E.messageId,delta:"",...l.metadata!==void 0&&{metadata:l.metadata},...l.rawEvent!==void 0&&{rawEvent:l.rawEvent},...g!==void 0&&{subagentRunId:g}}),p=!0}return mu(h,u,p,"REASONING_MESSAGE_CHUNK"),h}}return c.type,[c]}),Xt(()=>{i()}))},Xn=Symbol("agui.strip.drop");function Ur(t){let e=t;for(;;){if(e instanceof Li||e instanceof zc||e instanceof Lc||e instanceof Uc||e instanceof Dc){e=e.unwrap();continue}if(e instanceof $c){e=e.def.in;continue}if(e instanceof qm){e=e.def.getter();continue}return e}}function Y0(t){let e=t.def;return typeof e?.discriminator=="string"?e.discriminator:void 0}function jv(t){let e=t,n=Array.isArray(e.def?.values)?e.def.values:e.values?Array.from(e.values):void 0;return n&&n.length===1?n[0]:e.value}function X0(t){let e=Ur(t);return e instanceof Mc?jv(e):void 0}function Kn(t,e,n,r){let o=Ur(e);if(o instanceof jn){if(typeof t!="object"||!t||Array.isArray(t))return t;let i=o.shape,a=t,s={},c=o.meta()?.specOpen===!0;for(let l of Object.keys(a)){let u=Object.prototype.hasOwnProperty.call(i,l)?i[l]:void 0;if(u===void 0){if(c){s[l]=a[l];continue}r.push(`${n}/${l}`);continue}let f=r.length,m=Kn(a[l],u,`${n}/${l}`,r);if(m===Xn){if(r.length=f,u.safeParse(void 0).success){r.push(`${n}/${l}`);continue}return Xn}s[l]=m}return s}if(o instanceof Mi){if(!Array.isArray(t))return t;let i=o.element,a=[];return t.forEach((s,c)=>{let l=r.length,u=Kn(s,i,`${n}/${c}`,r);if(u===Xn){r.length=l,r.push(`${n}/${c}`);return}a.push(u)}),a}if(o instanceof jm){if(typeof t!="object"||!t||Array.isArray(t))return t;let i=o.def.valueType,a=t,s={};for(let c of Object.keys(a)){let l=r.length,u=Kn(a[c],i,`${n}/${c}`,r);if(u===Xn){r.length=l,r.push(`${n}/${c}`);continue}s[c]=u}return s}if(o instanceof zi){let i=o.options,a=Y0(o);if(a!==void 0){if(typeof t!="object"||!t||Array.isArray(t))return t;let l=t[a];for(let u of i){let f=Ur(u);if(!(f instanceof jn))continue;let m=f.shape;if(X0(m[a])===l)return Kn(t,u,n,r)}return Xn}let s=i.filter(l=>Ur(l)instanceof jn),c=typeof t=="object"&&!!t&&!Array.isArray(t);if(s.length>1&&c)return t;for(let l of i){let u=Ur(l);if(u instanceof Mi&&Array.isArray(t)||u instanceof jn&&c)return Kn(t,l,n,r)}return t}return t}function Wv(t,e){let n=[],r=Kn(t,e,"",n);if(r===Xn)throw Error("Internal error: the stripper found the whole value unrecognisable, which the schemas are not supposed to allow \u2014 schema/stripper mismatch.");return{value:r,stripped:n}}var K0=new Set(Object.values(v));function J0(t){return K0.has(t.type)}var Q0=new Map(Bc.options.map(t=>{let e=t.shape;return[String(jv(e.type)),t]})),e_=()=>typeof process<"u"&&process.env!==void 0&&!!process.env.SUPPRESS_TRANSFORMATION_WARNINGS;function Su(t){e_()||console.warn(`[ag-ui][enforce] ${t}`)}var gu=t=>e=>{let n=un(t);return e.pipe(Ge(r=>{if(!J0(r))return Su(`Dropping unrecognised event '${String(r.type)}': no middleware translated it and the protocol does not describe it.`),n?.event("ENFORCE","Unrecognised event dropped:",r,{type:r.type}),xr;let o=Q0.get(r.type);if(o===void 0)throw Error(`No validator for recognised event type '${String(r.type)}'`);let{value:i,stripped:a}=Wv(r,o);for(let s of a)Su(`Removed unrecognised material at '${s}' on ${String(r.type)}. Nothing handled it; see the repo-root DEPRECATIONS.md if it is a retired shape.`);return se(o.parse(i))}))};function t_(t){let{value:e,stripped:n}=Wv(Pl(t,"RunAgentInput"),$i);for(let r of n)Su(`Removed unrecognised material at '${r}' from the outgoing input.`);return $i.parse(e)}var Hr=class{runNext(t,e){return e.run(t).pipe(Da(!1))}runNextWithState(t,e){let n=Q(t.messages||[]),r=Q(t.state===void 0?{}:t.state),o=new ti;return Bv(t,o,e,[]).subscribe({next:i=>{i.messages!==void 0&&(n=i.messages),i.state!==void 0&&(r=i.state)},error:()=>{}}),this.runNext(t,e).pipe(mi(async i=>(o.next(i),await new Promise(a=>setTimeout(a,0)),{event:i,messages:Q(n),state:Q(r)})))}},n_=class extends Hr{constructor(t){super(),this.fn=t}run(t,e){return this.fn(t,e)}};function r_(t){return t.startsWith("image/")?"image":t.startsWith("audio/")?"audio":t.startsWith("video/")?"video":"document"}function o_(t){return typeof t=="object"&&!!t&&"type"in t&&t.type==="binary"&&"mimeType"in t&&typeof t.mimeType=="string"}function i_(t){let e=r_(t.mimeType);return t.data?{type:e,source:{type:"data",value:t.data,mimeType:t.mimeType},...t.filename?{metadata:{filename:t.filename}}:{}}:t.url?{type:e,source:{type:"url",value:t.url,mimeType:t.mimeType},...t.filename?{metadata:{filename:t.filename}}:{}}:((typeof process>"u"||process.env===void 0||!process.env.SUPPRESS_TRANSFORMATION_WARNINGS)&&console.warn(`[ag-ui][compat] A binary content part carries only an id ('${t.id??""}') and cannot be converted to a modern media part; a 1.0 peer will not accept it. Provide data or a url. See the repo-root DEPRECATIONS.md.`),t)}function a_(t,e,n){if(typeof t!="object"||!t||!("type"in t)||t.type!==e.type||!("source"in t))return!1;let r=t.source;return typeof r!="object"||!r||!("type"in r)||r.type!==e.source.type||!("value"in r)||r.value!==e.source.value||!("mimeType"in r)||r.mimeType!==e.source.mimeType?!1:!n||"metadata"in t&&typeof t.metadata=="object"&&t.metadata!==null&&"filename"in t.metadata&&t.metadata.filename===n}function Nv(t){let e=t.content;if(!Array.isArray(e))return t;let n=e.flatMap(r=>{if(o_(r)){let o=i_(r);return o.type!=="binary"&&e.some(i=>a_(i,o,r.filename))?[]:[o]}return[r]});return{...t,content:n}}var vu="THINKING_START",bu="THINKING_END",Ov="THINKING_TEXT_MESSAGE_START",yu="THINKING_TEXT_MESSAGE_CONTENT",wu="THINKING_TEXT_MESSAGE_END";function qv(t,e){typeof process<"u"&&process.env!==void 0&&process.env.SUPPRESS_TRANSFORMATION_WARNINGS||console.warn(`[ag-ui][compat] Converting deprecated ${t} to ${e}. The old shape leaves the protocol after its shim window \u2014 see the repo-root DEPRECATIONS.md. Set SUPPRESS_TRANSFORMATION_WARNINGS=true to silence.`)}function Au(t){return typeof t=="object"&&!!t&&!Array.isArray(t)}function $a(t,e,n){if(!Au(t)||t[e]!==null)return t;qv(`${n}.${e}: null`,"an absent field");let{[e]:r,...o}=t;return o}function Ua(t,e,n){if(!Au(t)||!Array.isArray(t[e]))return t;let r=t[e],o=r.map(n);return o.some((i,a)=>i!==r[a])?{...t,[e]:o}:t}function Yv(t){return Ua(t,"content",e=>{if(!Au(e))return e;switch(e.type){case"image":case"audio":case"video":case"document":return $a(e,"metadata",`${e.type} input content`);default:return e}})}function s_(t){let e=$a(t,"forwardedProps","RunAgentInput");return e=Ua(e,"tools",n=>$a(n,"parameters","Tool")),e=Ua(e,"resume",n=>$a(n,"payload","ResumeEntry")),Ua(e,"messages",Yv)}var _u=class extends Hr{constructor(...t){super(...t),this.currentReasoningId=null,this.currentMessageId=null}warn(t,e){qv(t,e)}mintedContinuationId(t,e){if(e!==null)return e;let n=we();return this.warnAside(`Minting a messageId ('${n}') for ${t}: no THINKING opener preceded it, so there was no id to continue. The id is this client's invention, not the producer's, and verification will reject the translated event for naming something nothing opened.`),n}warnAside(t){typeof process<"u"&&process.env!==void 0&&process.env.SUPPRESS_TRANSFORMATION_WARNINGS||console.warn(`[ag-ui][compat] ${t} Set SUPPRESS_TRANSFORMATION_WARNINGS=true to silence.`)}run(t,e){return this.currentReasoningId=null,this.currentMessageId=null,t.messages=t.messages.map(Nv),e.run(t).pipe(bt(n=>this.transformEvent(n)))}transformEvent(t){if(t.rawEvent===null){this.warn(`${t.type}.rawEvent: null`,"an absent field");let{rawEvent:e,...n}=t;t=n}if((t.type===v.RUN_FINISHED||t.type===v.SUBAGENT_FINISHED)&&t.result===null){this.warn(`${t.type}.result: null`,"an absent field");let{result:e,...n}=t;t=n}switch(t.type){case vu:{this.currentReasoningId=we();let{title:e,...n}=t;return this.warn(vu,v.REASONING_START),e!==void 0&&this.warnAside(`Dropping ${vu}.title ${JSON.stringify(e)}: ${v.REASONING_START} has no title field, so the span's label cannot be carried and nothing downstream can recover it.`),{...n,type:v.REASONING_START,messageId:this.currentReasoningId}}case Ov:return this.currentMessageId=we(),this.warn(Ov,v.REASONING_MESSAGE_START),{...t,type:v.REASONING_MESSAGE_START,messageId:this.currentMessageId,role:"reasoning"};case yu:{let{delta:e,...n}=t;return this.warn(yu,v.REASONING_MESSAGE_CONTENT),{...n,type:v.REASONING_MESSAGE_CONTENT,messageId:this.mintedContinuationId(yu,this.currentMessageId),delta:e}}case wu:{let e=this.mintedContinuationId(wu,this.currentMessageId);return this.currentMessageId=null,this.warn(wu,v.REASONING_MESSAGE_END),{...t,type:v.REASONING_MESSAGE_END,messageId:e}}case bu:{let e=this.mintedContinuationId(bu,this.currentReasoningId);return this.currentReasoningId=null,this.warn(bu,v.REASONING_END),{...t,type:v.REASONING_END,messageId:e}}case v.TOOL_CALL_START:case v.TOOL_CALL_CHUNK:{let e=t;if(e.parentMessageId===null){this.warn(`${t.type}.parentMessageId: null`,"an absent field");let{parentMessageId:n,...r}=e;return r}return t}case v.RUN_FINISHED:{let e=t;if(e.outcome===null){this.warn("RUN_FINISHED.outcome: null","an absent field");let{outcome:n,...r}=e;return r}return t}case v.MESSAGES_SNAPSHOT:{let e=t;return Array.isArray(e.messages)?{...e,messages:e.messages.map(n=>this.upgradeInboundMessage(n))}:t}case v.RUN_STARTED:{let e=s_(t.input),n=e===t.input?t:{...t,input:e},r=n;return!r.input||!Array.isArray(r.input.messages)?n:{...r,input:{...r.input,messages:r.input.messages.map(o=>this.upgradeInboundMessage(o))}}}default:return t}}upgradeInboundMessage(t){t=Yv(t);let e=t.content;return!Array.isArray(e)||!e.some(n=>typeof n=="object"&&!!n&&n.type==="binary")?t:(this.warn("binary input content","the modern media content parts"),Nv(t))}},l_=()=>t=>Sr(()=>{let e=new _u;return t.pipe(bt(n=>e.transformEvent(n)))});function c_(t,e=new Date){return t.expiresAt===void 0?!1:new Date(t.expiresAt)<=e}function Xv(t,e){let n=new Set(t.map(a=>a.id)),r=new Set(Object.keys(e)),o=[...n].filter(a=>!r.has(a));if(o.length>0)throw Error(`buildResumeArray: missing responses for open interrupts: ${o.join(", ")}`);let i=[...r].filter(a=>!n.has(a));if(i.length>0)throw Error(`buildResumeArray: responses reference unknown interrupt ids: ${i.join(", ")}`);return t.map(a=>{let s=e[a.id],c={interruptId:a.id,status:s.status};return s.status==="resolved"&&s.payload!==void 0&&(c.payload=s.payload),s.metadata!==void 0&&(c.metadata=s.metadata),c})}function Kv(){return typeof process<"u"&&process.env!==void 0&&!!process.env.SUPPRESS_TRANSFORMATION_WARNINGS}function u_(t){Kv()||console.warn(`[ag-ui][compat] Flattening message content for a <=0.0.39 peer DROPS non-text parts (${t.join(", ")}). The peer cannot receive them; upgrade it to keep media content. See the repo-root DEPRECATIONS.md.`)}function d_(t){Kv()||console.warn(`[ag-ui][compat] Not flattening message content for a <=0.0.39 peer: ${t} content part(s) claim type "text" but carry a malformed 'text' value. That is a defect in the message, not media the peer cannot represent, and a downgrade must not repair it \u2014 the content is passed on unchanged so the outgoing enforcement boundary reports it. See the repo-root DEPRECATIONS.md.`)}function p_(t){let e=t.content;if(Array.isArray(e)){let n=s=>typeof s=="object"&&!!s&&"type"in s&&s.type==="text",r=s=>n(s)&&typeof s.text=="string",o=e.filter(s=>n(s)&&!r(s));if(o.length>0)return d_(o.length),t;let i=e.filter(s=>!r(s)).map(s=>typeof s=="object"&&s&&"type"in s?String(s.type):typeof s);i.length>0&&u_(i);let a=e.filter(r).map(s=>s.text).join("");return{...t,content:a}}return typeof e=="string"?t:e===void 0?{...t,content:""}:t}var h_=class extends Hr{run(t,e){let{parentRunId:n,...r}=t,o={...r,messages:r.messages.map(p_)};return this.runNext(o,e)}},Pv="THINKING_START",Mv="THINKING_END",zv="THINKING_TEXT_MESSAGE_START",Lv="THINKING_TEXT_MESSAGE_CONTENT",Dv="THINKING_TEXT_MESSAGE_END",f_=class extends Hr{constructor(...t){super(...t),this.currentReasoningId=null,this.currentMessageId=null}warnAboutTransformation(t,e){typeof process<"u"&&process.env!==void 0&&process.env.SUPPRESS_TRANSFORMATION_WARNINGS||console.warn(`AG-UI is converting ${t} to ${e}. To remove this warning, upgrade your AG-UI integration package (e.g. @ag-ui/langgraph). To surpress it, set SUPPRESS_TRANSFORMATION_WARNINGS=true in your .env file.`)}run(t,e){return this.currentReasoningId=null,this.currentMessageId=null,this.runNext(t,e).pipe(bt(n=>this.transformEvent(n)))}transformEvent(t){switch(t.type){case Pv:{this.currentReasoningId=we();let{title:e,...n}=t;return this.warnAboutTransformation(Pv,v.REASONING_START),{...n,type:v.REASONING_START,messageId:this.currentReasoningId}}case zv:return this.currentMessageId=we(),this.warnAboutTransformation(zv,v.REASONING_MESSAGE_START),{...t,type:v.REASONING_MESSAGE_START,messageId:this.currentMessageId,role:"reasoning"};case Lv:{let{delta:e,...n}=t;return this.warnAboutTransformation(Lv,v.REASONING_MESSAGE_CONTENT),{...n,type:v.REASONING_MESSAGE_CONTENT,messageId:this.currentMessageId??we(),delta:e}}case Dv:{let e=this.currentMessageId??we();return this.warnAboutTransformation(Dv,v.REASONING_MESSAGE_END),{...t,type:v.REASONING_MESSAGE_END,messageId:e}}case Mv:{let e=this.currentReasoningId??we();return this.warnAboutTransformation(Mv,v.REASONING_END),{...t,type:v.REASONING_END,messageId:e}}default:return t}}},$v="SUBAGENT_STARTED",Uv="SUBAGENT_FINISHED",Hv="SUBAGENT_ERROR";function Ha(t){if(t&&typeof t=="object"&&"subagentRunId"in t){let{subagentRunId:e,...n}=t;return n}return t}function Fv(t){return t.map(e=>Ha(e))}var m_=class extends Hr{warnDroppedLifecycleEvent(t){typeof process<"u"&&process.env!==void 0&&process.env.SUPPRESS_TRANSFORMATION_WARNINGS||console.warn(`AG-UI is dropping ${t} because the target agent predates subagent support. To remove this warning, upgrade your AG-UI integration package. To suppress it, set SUPPRESS_TRANSFORMATION_WARNINGS=true in your .env file.`)}run(t,e){let n={...t,messages:(t.messages??[]).map(r=>Ha(r))};return this.runNext(n,e).pipe(vi(r=>{let o=r.type;(o===$v||o===Uv||o===Hv)&&this.warnDroppedLifecycleEvent(o)}),ql(r=>{let o=r.type;return o!==$v&&o!==Uv&&o!==Hv}),bt(r=>{let o=Ha(r);if(o.type===v.MESSAGES_SNAPSHOT){let i=o;if(Array.isArray(i.messages))return{...i,messages:Fv(i.messages)}}if(o.type===v.RUN_FINISHED){let i=o;if(i.outcome&&Array.isArray(i.outcome.interrupts))return{...i,outcome:{...i.outcome,interrupts:i.outcome.interrupts.map(a=>Ha(a))}}}if(o.type===v.RUN_STARTED){let i=o;if(i.input&&Array.isArray(i.input.messages))return{...i,input:{...i.input,messages:Fv(i.input.messages)}}}return o}))}},Ma="1.0.0",Gv=!1,g_=(t,e)=>/^\d+\.\d+$/.test(t)?ln(t,e)>0?"newer":"not-newer":"uninterpretable",Zv=t=>{let e=t.protocolVersion;if(!(e===void 0||e===Vt))switch(g_(e,Vt)){case"uninterpretable":console.warn(`[ag-ui] The producer declared protocol version '${e}', which this client cannot interpret.`);return;case"newer":console.warn(`[ag-ui] The producer speaks protocol ${e}; this client speaks ${Vt}. Unrecognised material will be stripped with warnings.`);return;case"not-newer":return}},v_=class Jv{resolvePeerCeiling(e){if(this.resolvingPeerCeiling)return Ma;let n=Object.getOwnPropertyDescriptor(this,"maxVersion"),r=Object.getOwnPropertyDescriptor(this,"maxProtocolVersion"),o=Object.getPrototypeOf(this);for(;o&&o!==Jv.prototype;)n??=Object.getOwnPropertyDescriptor(o,"maxVersion"),r??=Object.getOwnPropertyDescriptor(o,"maxProtocolVersion"),o=Object.getPrototypeOf(o);if(e==="maxVersion"&&n)return Ma;let i=e==="maxProtocolVersion"?n:r;if(!i)return Ma;this.resolvingPeerCeiling=!0;try{return i.get?i.get.call(this):i.value}finally{this.resolvingPeerCeiling=!1}}get maxProtocolVersion(){return this.resolvePeerCeiling("maxProtocolVersion")}get maxVersion(){return!this.resolvingPeerCeiling&&!Gv&&(Gv=!0,console.warn("[ag-ui] AbstractAgent.maxVersion is deprecated \u2014 use maxProtocolVersion. Same value; the new name says whose version it is and that it is a ceiling.")),this.resolvePeerCeiling("maxVersion")}get debug(){return this._debug}set debug(e){this._debug=za(e),this._debugLogger=du(this._debug)}get debugLogger(){return this._debugLogger}set debugLogger(e){typeof e=="boolean"?this._debugLogger=e?du(za(!0)):void 0:this._debugLogger=e}resolvedCeilingDuringConstruction(){let e=this.maxProtocolVersion;if(typeof e!="string"||!uu(e))throw new V(`maxProtocolVersion resolved to ${JSON.stringify(e)} during construction, which is not a version this client can compare. A ceiling read from an instance field is not available yet \u2014 return a literal from the getter.`);return e}constructor({agentId:e,description:n,threadId:r,initialMessages:o,initialState:i,debug:a}={}){this.subscribers=[],this.isRunning=!1,this.pendingInterrupts=[],this.middlewares=[],this.resolvingPeerCeiling=!1,this.agentId=e,this.description=n??"",this.threadId=r??It(),this.messages=Q(o??[]),this.state=Q(i??{}),this._debug=za(a),this._debugLogger=du(this._debug);let s=this.resolvedCeilingDuringConstruction();ln(s,"0.0.39")<=0&&this.middlewares.unshift(new h_),ln(s,"0.0.45")<=0&&this.middlewares.unshift(new f_),ln(s,"0.0.57")<=0&&this.middlewares.unshift(new m_)}subscribe(e){return this.subscribers.push(e),{unsubscribe:()=>{this.subscribers=this.subscribers.filter(n=>n!==e)}}}use(...e){let n=e.map(r=>typeof r=="function"?new n_(r):r);return this.middlewares.push(...n),this}async runAgent(e,n){try{this.isRunning=!0,this.agentId=this.agentId??It();let r=this.prepareRunAgentInput(e);this.debugLogger?.lifecycle("LIFECYCLE","Run started:",{agentId:this.agentId,threadId:this.threadId});let o,i=new Set(this.messages.map(l=>l.id)),a=[{onRunStartedEvent:({event:l})=>Zv(l),onRunFinishedEvent:l=>{l.outcome==="success"&&(o=l.result)}},...this.subscribers,n??{}];await this.onInitialize(r,a),this.activeRunDetach$=new vt;let s;this.activeRunCompletionPromise=new Promise(l=>{s=l}),await fi(ei(()=>[...this.middlewares,new _u].reduceRight((l,u)=>({run:f=>u.run(f,l),get messages(){return l.messages},get state(){return l.state}}),this).run(r),gu(this.debugLogger),Da(this.debugLogger),pu(this.debugLogger),l=>l.pipe(gi(this.activeRunDetach$)),l=>this.apply(r,l,a),l=>this.processApplyEvents(r,l,a),_r(l=>(this.debugLogger?.lifecycle("LIFECYCLE","Run errored:",{agentId:this.agentId,error:l instanceof Error?l.message:String(l)}),this.isRunning=!1,this.onError(r,l,a))),Xt(()=>{this.debugLogger?.lifecycle("LIFECYCLE","Run finished:",{agentId:this.agentId,threadId:this.threadId}),this.isRunning=!1,this.onFinalize(r,a),s?.(),s=void 0,this.activeRunCompletionPromise=void 0,this.activeRunDetach$=void 0}))(se(null)));let c=Q(this.messages).filter(l=>!i.has(l.id));return{result:o,newMessages:c}}finally{this.isRunning=!1}}connect(e){throw new Ml}async connectAgent(e,n){try{this.isRunning=!0,this.agentId=this.agentId??It();let r=this.prepareRunAgentInput(e),o,i=new Set(this.messages.map(l=>l.id)),a=[{onRunStartedEvent:({event:l})=>Zv(l),onRunFinishedEvent:l=>{l.outcome==="success"&&(o=l.result)}},...this.subscribers,n??{}];await this.onInitialize(r,a),this.activeRunDetach$=new vt;let s;this.activeRunCompletionPromise=new Promise(l=>{s=l}),await fi(ei(()=>Sr(()=>this.connect(r)),l=>gu(this.debugLogger)(l_()(l)),Da(this.debugLogger),pu(this.debugLogger),l=>l.pipe(gi(this.activeRunDetach$)),l=>this.apply(r,l,a),l=>this.processApplyEvents(r,l,a),_r(l=>(this.isRunning=!1,l instanceof Ml?xr:this.onError(r,l,a))),Xt(()=>{this.isRunning=!1,this.onFinalize(r,a),s?.(),s=void 0,this.activeRunCompletionPromise=void 0,this.activeRunDetach$=void 0}))(se(null)),{defaultValue:void 0});let c=Q(this.messages).filter(l=>!i.has(l.id));return{result:o,newMessages:c}}finally{this.isRunning=!1}}abortRun(){}async detachActiveRun(){if(!this.activeRunDetach$)return;let e=this.activeRunCompletionPromise??Promise.resolve();this.activeRunDetach$.next(),this.activeRunDetach$?.complete(),await e}apply(e,n,r){return Bv(e,n,this,r,this.debugLogger)}processApplyEvents(e,n,r){return n.pipe(vi(o=>{o.messages&&(this.messages=o.messages,r.forEach(i=>{i.onMessagesChanged?.({messages:this.messages,state:this.state,agent:this,input:e})})),o.state!==void 0&&(this.state=o.state,r.forEach(i=>{i.onStateChanged?.({state:this.state,messages:this.messages,agent:this,input:e})}))}))}prepareRunAgentInput(e){let n=Q(this.messages);for(let o of n)o.subagentRunId===null&&delete o.subagentRunId;let r=n.filter(o=>o.role!=="activity");return{threadId:this.threadId,runId:e?.runId||It(),...ln(this.maxProtocolVersion,Ma)>=0&&{protocolVersion:Vt},tools:Q(e?.tools??[]),context:Q(e?.context??[]),forwardedProps:Q(e?.forwardedProps??{}),state:Q(this.state),messages:r,...e?.resume===void 0?{}:{resume:Q(e.resume)}}}async onInitialize(e,n){if(this.pendingInterrupts.length>0){let o=new Set((e.resume??[]).map(a=>a.interruptId)),i=this.pendingInterrupts.map(a=>a.id).filter(a=>!o.has(a));if(i.length>0)throw new V(`Thread has ${i.length} pending interrupt(s) not addressed by resume: ${i.join(", ")}`);for(let a of this.pendingInterrupts)if(c_(a)&&(e.resume??[]).find(s=>s.interruptId===a.id)?.status!=="cancelled")throw new V(`Interrupt ${a.id} expired at ${a.expiresAt} and can no longer be answered. Cancel it to continue the thread.`)}let r=await oe(n,this.messages,this.state,(o,i,a)=>o.onRunInitialized?.({messages:i,state:a,agent:this,input:e}));if(r.messages!==void 0||r.state!==void 0){if(r.messages){this.messages=r.messages;for(let o of r.messages)o.subagentRunId===null&&delete o.subagentRunId;e.messages=r.messages.filter(o=>o.role!=="activity"),n.forEach(o=>{o.onMessagesChanged?.({messages:this.messages,state:this.state,agent:this,input:e})})}r.state!==void 0&&(this.state=r.state,e.state=r.state,n.forEach(o=>{o.onStateChanged?.({state:this.state,messages:this.messages,agent:this,input:e})}))}}onError(e,n,r){return Yt(oe(r,this.messages,this.state,(o,i,a)=>o.onRunFailed?.({error:n,messages:i,state:a,agent:this,input:e}))).pipe(bt(o=>{let i=o;if((i.messages!==void 0||i.state!==void 0)&&(i.messages!==void 0&&(this.messages=i.messages,r.forEach(a=>{a.onMessagesChanged?.({messages:this.messages,state:this.state,agent:this,input:e})})),i.state!==void 0&&(this.state=i.state,r.forEach(a=>{a.onStateChanged?.({state:this.state,messages:this.messages,agent:this,input:e})}))),i.stopPropagation!==!0){let a=String(n);if(!(n.name==="AbortError"||n.message==="Fetch is aborted"||n.message==="signal is aborted without reason"||n.message==="component unmounted"||a==="component unmounted"))throw console.error("Agent execution failed:",n),n}return{}}))}async onFinalize(e,n){let r=await oe(n,this.messages,this.state,(o,i,a)=>o.onRunFinalized?.({messages:i,state:a,agent:this,input:e}));(r.messages!==void 0||r.state!==void 0)&&(r.messages!==void 0&&(this.messages=r.messages,n.forEach(o=>{o.onMessagesChanged?.({messages:this.messages,state:this.state,agent:this,input:e})})),r.state!==void 0&&(this.state=r.state,n.forEach(o=>{o.onStateChanged?.({state:this.state,messages:this.messages,agent:this,input:e})})))}clone(){let e=Object.create(Object.getPrototypeOf(this));return e.agentId=this.agentId,e.description=this.description,e.threadId=this.threadId,e.messages=Q(this.messages),e.state=Q(this.state),e._debug=this._debug,e._debugLogger=this._debugLogger,e.isRunning=this.isRunning,e.subscribers=[...this.subscribers],e.middlewares=[...this.middlewares],e.pendingInterrupts=Q(this.pendingInterrupts),e}addMessage(e){this.messages.push(e),(async()=>{for(let n of this.subscribers)await n.onNewMessage?.({message:e,messages:this.messages,state:this.state,agent:this});if(e.role==="assistant"&&e.toolCalls)for(let n of e.toolCalls)for(let r of this.subscribers)await r.onNewToolCall?.({toolCall:n,messages:this.messages,state:this.state,agent:this});for(let n of this.subscribers)await n.onMessagesChanged?.({messages:this.messages,state:this.state,agent:this})})()}addMessages(e){this.messages.push(...e),(async()=>{for(let n of e){for(let r of this.subscribers)await r.onNewMessage?.({message:n,messages:this.messages,state:this.state,agent:this});if(n.role==="assistant"&&n.toolCalls)for(let r of n.toolCalls)for(let o of this.subscribers)await o.onNewToolCall?.({toolCall:r,messages:this.messages,state:this.state,agent:this})}for(let n of this.subscribers)await n.onMessagesChanged?.({messages:this.messages,state:this.state,agent:this})})()}setMessages(e){this.messages=Q(e),(async()=>{for(let n of this.subscribers)await n.onMessagesChanged?.({messages:this.messages,state:this.state,agent:this})})()}setState(e){this.state=Q(e),(async()=>{for(let n of this.subscribers)await n.onStateChanged?.({messages:this.messages,state:this.state,agent:this})})()}legacy_to_be_removed_runAgentBridged(e){this.agentId=this.agentId??It();let n=this.prepareRunAgentInput(e);return[...this.middlewares,new _u].reduceRight((r,o)=>({run:i=>o.run(i,r),get messages(){return r.messages},get state(){return r.state}}),this).run(n).pipe(gu(this.debugLogger),Da(this.debugLogger),pu(this.debugLogger),F0(this.threadId,n.runId,this.agentId),r=>r.pipe(bt(o=>(this.debugLogger?.event("LEGACY","Event:",o,{type:o.type}),o))))}};function b_(t){if(!Array.isArray(t.messages))return t;let e=!1,n=t.messages.map(r=>{if(r.subagentRunId===null){e=!0;let o={...r};return delete o.subagentRunId,o}return r});return e?{...t,messages:n}:t}var Qv=class extends v_{requestInit(t){return{method:"POST",headers:{...this.headers,"Content-Type":"application/json",Accept:"text/event-stream"},body:JSON.stringify(b_(t)),signal:this.abortController.signal}}runAgent(t,e){return this.abortController=t?.abortController??new AbortController,super.runAgent(t,e)}abortRun(){this.abortController.abort(),super.abortRun()}constructor(t){super(t),this.abortController=new AbortController,this.url=t.url,this.headers=Q(t.headers??{}),this.fetch=t.fetch??((e,n)=>fetch(e,n))}run(t){return U0(z0(()=>this.fetch(this.url,this.requestInit(t_(t)))),this.debugLogger)}clone(){let t=super.clone();t.url=this.url,t.headers=Q(this.headers??{}),t.fetch=this.fetch;let e=new AbortController,n=this.abortController.signal;return n.aborted&&e.abort(n.reason),t.abortController=e,t}};Me(Zn());function nt(t,e){return e===void 0?t:{...t,credentials:e}}function Fa(t){if(t.newThread!==void 0)return t.newThread();let e=we();return t.setActiveThread(e),e}function Ga(t,e,n,r){if(e.length===0)return;let o=new URL(String(t),location.href).origin;o===location.origin||n.includes(o)||r.has(o)||(r.add(o),console.warn(`<ag-ui-chat>: sending host credentials (${e.join(", ")}) to ${o}, which is not this page's origin (${location.origin}). Those headers are the page's own authentication, and whichever server answers the browser's preflight receives them \u2014 so a URL attribute built from a query parameter or from tenant-authored configuration is a channel for the token to leave on. If this destination is deliberate, name it in \`trustedOrigins\` to confirm it and silence this notice. Reported once per origin.`))}function Jn(t){return t.split(",").map(e=>e.trim()).filter(e=>e!=="")}function Za(t,e,n=new Set){let r=new Set(n);for(let s of t)s.role==="tool"&&r.add(s.toolCallId);let o=[],i=[],a=!1;for(let s of t){let c=s.role==="assistant"?y_(s.toolCalls):[];s.role==="tool"||c.length>0&&!a||(o.push(...i.map(e)),i=[]),o.push(s),a=s.role==="tool";for(let u of c)r.has(u)||(r.add(u),i.push(u))}return o.length+i.length===t.length?t:(o.push(...i.map(e)),o)}function y_(t){return Array.isArray(t)?t.map(e=>Object(e).id).filter(e=>typeof e=="string"):[]}function Ba(t,e){return Object(t.metadata)[e]??t[e]}var pe={title:"Assistant",chatHistory:"Chat history",closeHistory:"Close history",searchConversations:"Search conversations",queued:"Waiting to send",removeQueued:'Do not send "{text}"',noMatches:"No conversations match that.",chatMoved:"Moved this panel out of the way",chatMinimised:"Minimised this panel",undo:"Undo",newChat:"New chat",collapse:"Collapse",expand:"Expand",expandUnread:"Expand \u2014 {count} unread",toggleTheme:"Toggle theme",copyCode:"Copy",copied:"Copied",copyFailed:"Copy failed",checkpoints:"Continue a run",noCheckpoints:"Nothing to continue yet.",resumeRun:"Resume",forkRun:"Fork",forkedRun:"branched",greeting:"Hello, {name}",greetingNoName:"Hello there",conversation:"Conversation",jumpToLatest:"Jump to latest",announceResponding:"Assistant is responding",announceAnswerReady:"Assistant answered",announceAwaitingDecision:"{count} action is waiting for your approval",announceStopped:"Response stopped",announceFailed:"The response failed",thinking:"Assistant is thinking\u2026",thoughts:"Thoughts",stopped:"\u23F9 Stopped",connectionLost:"Connection lost",noResult:"No result returned.",callNotFinished:"Not finished: the run ended or moved on before this tool call returned a result.",declinedAction:"User declined the action.",confirmCheckFailed:"Not run: the check that decides whether this action needs the user's confirmation failed.",navigating:"Navigating\u2026",historyReplaced:"The server replaced this conversation's history. Reload to see the updated transcript.",chartUndrawable:"A chart could not be drawn from the data sent, so it was removed.",historyCompacted:"Earlier turns condensed to fit the context window ({count} removed)",usingSkill:"Using skill {name}",runInterrupted:"The previous response didn\u2019t finish \u2014 the page changed before it arrived.",pageMoved:"The page changed since you last looked at it. Call read_page to see the current page, then retry.",attachmentsStillUploading:"{n} file still uploading \u2014 it was not sent with this message and is still attached.",notConnected:"This chat isn\u2019t connected to an agent, so the message wasn\u2019t sent.",continueNeedsTurn:"Type the next turn in the composer first, then pick a run to continue.",continueWhileRunning:"Wait for the current answer or stop it, then pick a run to continue.",skillNeeds:"\u201C{title}\u201D needs {fields} \u2014 fill it in below, then send.",message:"Message",inputPlaceholder:"Ask anything\u2026",send:"Send",stop:"Stop",attachFiles:"Attach files",recordVoice:"Record voice",stopRecording:"Stop recording",transcribing:"Transcribing\u2026",transcriptionFailed:"Transcription failed",recordingLimit:"Stopped at the {n}-minute limit \u2014 transcribing what was recorded.",toolRunning:"running\u2026",toolDeferred:"waiting for you",toolDone:"\u2713 done",toolError:"\u26A0 error",toolDeclined:"\u2298 declined",toolInterrupted:"\u25CC not finished",resizePanel:"Resize the chat panel",decisionApproved:"approved by you",decisionDeclined:"declined by you",argumentsLabel:"Arguments",resultLabel:"Result",errorLabel:"Error",declinedLabel:"Declined",interruptedLabel:"Not finished",details:"Details",subAgentWorking:"Working\u2026",subAgentDelegatedTo:"Delegated to {agent}",subAgentFinished:"{agent} finished",subAgentFailed:"The sub-agent failed",subAgentSteps:"Steps the sub-agent took",approvalEditArgs:"Edit the arguments before approving",approvalArgsInvalid:"That is not valid JSON, so nothing was sent.",approvalArgsNotAnObject:"Arguments have to be a JSON object.",suggestions:"Suggested follow-ups",messageActions:"Message actions",quoteSelection:"Quote",copyMessage:"Copy message",retryMessage:"Try again",feedbackUp:"Good answer",feedbackDown:"Poor answer",confirmAction:"Confirm action",confirmAlways:"Always allow",confirmRun:"Run \u201C{tool}\u201D?",confirm:"Confirm",cancel:"Cancel",approveAction:"Approve action",approvalPrompt:"Approve this action?",approve:"Approve",deny:"Deny",askUserAction:"Question",otherOption:"Other\u2026",answerPlaceholder:"Type your answer\u2026",submit:"Submit",chats:"Chats",noConversations:"No conversations yet.",rename:"Rename",renameConversation:"Rename conversation",delete:"Delete",deleteConversation:"Delete conversation",deletePrompt:"Delete?",tooLarge:"Too large (max {size})",fileTypeNotAllowed:"File type not allowed",uploadFailed:"upload failed",retry:"Retry",retryUpload:"Retry upload",remove:"Remove",removeAttachment:"Remove attachment",justNow:"just now",minutesAgo:"{n}m ago",hoursAgo:"{n}h ago",daysAgo:"{n}d ago",weeksAgo:"{n}w ago"};function ku(t){let e={...pe};for(let n of Object.keys(t)){let r=t[n];r!==void 0&&(e[n]=r)}return e}function w_(t){let e=document.createElement("input");return e.type="text",e.className="question-input",e.setAttribute("part","question-input"),e.placeholder=t,e}function Iu(t,e,n={}){let r=n.strings??pe,o=e.options??[],i=o.length>0,a=!i||e.allowCustom===!0;return new Promise(s=>{let c=document.createElement("div");c.className="question",c.setAttribute("part","question"),c.setAttribute("role","group"),c.setAttribute("aria-label",r.askUserAction);let l=document.createElement("div");l.className="question-body",l.setAttribute("part","question-body"),l.textContent=e.question;let u=document.createElement("div");u.className="question-options",u.setAttribute("part","question-options");let f=`q-${o.length}-${e.question.length}`,m=[];for(let _ of o){let b=document.createElement("label");b.className="question-choice",b.setAttribute("part","question-choice");let I=document.createElement("input");I.type="radio",I.name=f,I.value=_,I.setAttribute("part","question-radio");let z=document.createElement("span");z.setAttribute("part","question-choice-text"),z.textContent=_,b.append(I,z),u.appendChild(b),m.push(I)}let h=null,p=null;if(a){if(p=w_(r.answerPlaceholder),i){let _=document.createElement("label");_.className="question-choice",_.setAttribute("part","question-choice"),h=document.createElement("input"),h.type="radio",h.name=f,h.value="",h.setAttribute("part","question-radio");let b=document.createElement("span");b.setAttribute("part","question-choice-text"),b.textContent=r.otherOption,_.append(h,b),u.appendChild(_),p.disabled=!0}u.appendChild(p)}let E=document.createElement("div");E.className="question-actions",E.setAttribute("part","question-actions");let g=document.createElement("button");g.type="button",g.className="question-btn",g.setAttribute("part","question-button"),g.textContent=r.submit,E.appendChild(g);let S=!1,y=()=>{let _=m.find(b=>b.checked);if(_!==void 0)return _.value;if(p!==null&&(h===null||h.checked)){let b=p.value.trim();return b===""?null:b}return null},T=()=>{p!==null&&h!==null&&(p.disabled=!h.checked),g.disabled=y()===null},w=_=>{if(!S){S=!0,g.disabled=!0;for(let b of m)b.disabled=!0;h!==null&&(h.disabled=!0),p!==null&&(p.disabled=!0),c.setAttribute("data-resolved",_===""?"cancelled":"answered"),s(_)}};for(let _ of[...m,...h!==null?[h]:[]])_.addEventListener("change",T);if(p?.addEventListener("input",T),p?.addEventListener("keydown",_=>{if(_.key==="Enter"){_.preventDefault();let b=y();b!==null&&w(b)}}),g.addEventListener("click",()=>{let _=y();_!==null&&w(_)}),n.signal?.addEventListener("abort",()=>w(""),{once:!0}),c.append(l,u,E),t.appendChild(c),n.signal?.aborted===!0){w("");return}T(),(i?m[0]:p)?.focus()})}function Ru(t){let e={};if(!Array.isArray(t))return e;for(let n of t){if(n===null||typeof n!="object")continue;let r=n,o=r.name,i=r.summary,a=r.description;typeof o=="string"&&typeof i=="string"&&(e[o]=typeof a=="string"?{name:o,summary:i,description:a}:{name:o,summary:i})}return e}var Va=class{#e;#t={};#n=new Set;#o=new dr;constructor(e){this.#e=e}register(e){this.#o.register(e)}registerPageState(e){for(let n of Uo(e))this.#o.register(n)}has(e){return this.#o.has(e)}defaultTools(){return[...this.#l().map(e=>({name:e.name,description:e.description,parameters:e.parameters})),...this.#o.tools()]}advertise(){let e=this.#e.getTools();return this.#n=new Set(e.map(n=>n.name)),e}wasAdvertised(e){return this.#n.has(e)}resolve(e){let n=this.#l().find(r=>r.name===e);return n!==void 0?n:this.#o.has(e)?this.#o.get(e):null}summary(e){return this.#t[e]?.summary}async fetchCatalog(){let e=this.#e.element.getAttribute("data-tools-url");if(e!==null)try{let n=await fetch(e,this.#e.fetchInit(e));this.#t=Ru(await n.json())}catch{}}#r(){return this.#e.routeMap().length===0?[]:Rl(()=>this.#e.routeMap(),()=>this.#e.navigate())}#i(){let e=this.#e.getPageMap();return e===null?[]:[{name:No,description:"Read the current page's structure (fields, buttons, route). Call after acting to observe the result within the same turn.",parameters:{type:"object",properties:{},required:[],[Ie]:"Read the page"},handler:()=>e()}]}#a(){let e=this.#e.element.getAttribute("data-page-actions");if(e===null)return[];let n=new Set(Jn(e));return[...kl(n,r=>this.#e.resolvePageTarget(r)),...n.has(fr.CHAT)?vl(this.#e.element):[]]}#l(){return[...this.#r(),...this.#i(),...this.#a(),...this.#p()]}#p(){return this.#e.askUser()?[{name:"ask_user",description:"Ask the user a question and wait for their answer. Provide `options` for a multiple-choice prompt; set `allow_custom` to also accept a free-text answer.",parameters:{type:"object",properties:{question:{type:"string",description:"The question to ask the user."},options:{type:"array",items:{type:"string"},description:"Preset choices offered as radio buttons."},allow_custom:{type:"boolean",description:"Allow a free-text answer in addition to any options."}},required:["question"]},handler:(e,n)=>this.#u(e,n)}]:[]}async#u(e,n){let o={question:typeof e.question=="string"?e.question:""},i=e.options;Array.isArray(i)&&(o.options=i.filter(u=>typeof u=="string")),e.allow_custom===!0&&(o.allowCustom=!0);let a=this.#e.decision.open();this.#e.hidePending();let s=()=>Iu(this.#e.ensureGroup(),o,{signal:a,strings:this.#e.strings()}),c=this.#e.askUserRenderer(),l;if(c===null)l=await s();else try{l=await c.call(this.#e.element,o,{signal:a})}catch(u){l=await this.#c(u,a,n,s)}return this.#e.decision.close(),this.#e.updateEmptyState(),this.#e.follow(),l}#c(e,n,r,o){return n.aborted?Promise.resolve(""):(console.warn(`ag-ui-chat: askUserRenderer failed for tool call ${r}, so the built-in question card asks instead`,e),o())}};function ja(t){if(t.name!==ml)return null;let e=t.args?.id;return typeof e=="string"&&e!==""?e:null}function eb(t,e){let n=document.createElement("button");return n.type="button",n.className=`approval-btn approval-btn--${t}`,n.setAttribute("part",`approval-button approval-${t}`),n.textContent=e,n}function Cu(t,e,n={}){let r=n.strings??pe;return new Promise(o=>{let i=document.createElement("div");i.className="approval",i.setAttribute("part","approval"),e.toolName!==void 0&&i.setAttribute("data-tool-name",e.toolName),i.setAttribute("role","group"),i.setAttribute("aria-label",r.approveAction);let a=document.createElement("div");a.className="approval-body",a.setAttribute("part","approval-body"),a.textContent=e.message??r.approvalPrompt;let s=E_(e,n,r),c=document.createElement("div");c.className="approval-actions",c.setAttribute("part","approval-actions");let l=eb("deny",r.deny),u=eb("approve",r.approve),f=!1,m=h=>{f||(f=!0,l.disabled=!0,u.disabled=!0,i.setAttribute("data-resolved",h?"approved":"denied"),o(h))};if(l.addEventListener("click",()=>m(!1)),u.addEventListener("click",()=>{s!==null&&!s.commit()||m(!0)}),n.signal?.addEventListener("abort",()=>m(!1),{once:!0}),c.append(l,u),i.append(a,...s===null?[]:[s.root],c),t.appendChild(i),n.signal?.aborted===!0){m(!1);return}u.focus()})}function E_(t,e,n){let{onEdit:r}=e;if(r===void 0||t.args===void 0)return null;let o=JSON.stringify(t.args,null,2),i=document.createElement("div");i.className="approval-edit",i.setAttribute("part","approval-edit");let a=document.createElement("textarea");a.className="approval-args",a.setAttribute("part","approval-args"),a.setAttribute("aria-label",n.approvalEditArgs),a.rows=Math.min(10,o.split(`
`).length),a.value=o;let s=document.createElement("div");return s.className="approval-error",s.setAttribute("part","approval-error"),s.setAttribute("role","alert"),s.hidden=!0,i.append(a,s),{root:i,commit:()=>{if(a.value===o)return!0;let c;try{c=JSON.parse(a.value)}catch{return s.textContent=n.approvalArgsInvalid,s.hidden=!1,a.focus(),!1}return typeof c!="object"||c===null||Array.isArray(c)?(s.textContent=n.approvalArgsNotAnObject,s.hidden=!1,a.focus(),!1):(s.hidden=!0,r(c),!0)}}}function Nu(t,e){let n=document.createElement("button");return n.type="button",n.className=`confirm-btn confirm-btn--${t}`,n.setAttribute("part",`confirm-button confirm-${t}`),n.textContent=e,n}function Ou(t,e,n={}){let r=n.strings??pe;return new Promise(o=>{let i=document.createElement("div");i.className="confirm",i.setAttribute("part","confirm"),i.setAttribute("data-tool-name",e.toolName),i.setAttribute("role","group"),i.setAttribute("aria-label",r.confirmAction);let a=document.createElement("div");a.className="confirm-body",a.setAttribute("part","confirm-body"),a.textContent=e.message??le(r.confirmRun,{tool:e.toolName});let s=document.createElement("pre");s.className="confirm-args",s.setAttribute("part","confirm-args"),s.textContent=JSON.stringify(e.args,null,2),s.hidden=Object.keys(e.args).length===0;let c=document.createElement("div");c.className="confirm-actions",c.setAttribute("part","confirm-actions");let l=Nu("cancel",r.cancel),u=n.onAlwaysAllow===void 0?null:Nu("always",le(r.confirmAlways,{tool:e.toolName})),f=Nu("confirm",r.confirm),m=!1,h=p=>{m||(m=!0,i.remove(),o(p))};if(l.addEventListener("click",()=>h(!1)),f.addEventListener("click",()=>h(!0)),u?.addEventListener("click",()=>{n.onAlwaysAllow?.(),h(!0)}),n.signal?.addEventListener("abort",()=>h(!1),{once:!0}),c.append(l,...u===null?[]:[u],f),i.append(a,s,c),t.appendChild(i),n.signal?.aborted===!0){h(!1);return}f.focus()})}function Pu(t){return t[cr]===!0}function Wa(t){return t[ur]===!0}var qa=class{#e;#t=new Set;#n=null;constructor(e){this.#e=e}forgetWaivers(){this.#t.clear()}buildContext(){return this.#n=window.location.href,this.#e.getContext()}async execute(e){if(ja(e)!==null)return null;let n=this.#e.tenure(),r=this.#e.threadId(),o=this.#e.transcript.cardFor(e);this.#e.transcript.forgetCard(e.id),this.#e.transcript.setCardElement(e.id,o.element);let i=this.#e.tools.wasAdvertised(e.name)?this.#e.tools.resolve(e.name):null;if(i===null)return this.#e.transcript.isServerSettled(e.id)||o.settle(J.INTERRUPTED,this.#e.strings().callNotFinished),null;if(this.#e.getPageMap()!==null&&e.name!==No&&!Wa(i.parameters)&&this.#a()){let l=this.#e.strings().pageMoved;return o.settle(J.ERROR,l),this.#e.transcript.showPending(),{content:`Error: ${l}`,error:l,outcome:Fe.FAILED}}let a=this.#e.decision.open(),s=await this.#r(e,i);if(this.#e.decision.close(),a.aborted)return this.#i(o);if(s==="unanswered"){let l=this.#e.strings().confirmCheckFailed;return o.settle(J.DECLINED,l),this.#e.transcript.showPending(),{content:l,outcome:Fe.DENIED}}if(s!==null){let l={toolName:e.name,args:e.args},u=i.parameters[Co];typeof u=="string"&&(l.message=u);let f=this.#e.decision.open(),m=Ou(this.#e.transcript.ensureGroup(),l,{signal:f,strings:this.#e.strings(),...s==="destructive"?{onAlwaysAllow:()=>this.#t.add(e.name)}:{}});this.#e.transcript.updateEmptyState(),this.#e.transcript.follow();let h=await m;if(this.#e.decision.close(),this.#e.tenure()!==n)return null;if(o.recordDecision(h?"approved":"declined"),!h){let p=this.#e.strings().declinedAction;return o.settle(J.DECLINED,p),this.#e.transcript.showPending(),{content:p,outcome:Fe.DENIED}}if(f.aborted)return this.#i(o)}let c=Wa(i.parameters)&&this.#e.navigate()===null;c&&this.#e.conversationStore().saveCheckpoint(r,{toolCallId:e.id});try{let l=await i.handler(e.args,e.id);if(this.#e.tenure()!==n)return null;if(i.render!==void 0&&this.#e.transcript.renderToolOutput(i.render,e),c)return o.settle(J.DONE,this.#e.strings().navigating),{content:"",halt:!0};let u=JSON.stringify(l??null);return o.settle(J.DONE,u),this.#e.transcript.showPending(),{content:u}}catch(l){if(this.#e.tenure()!==n)return null;c&&this.#e.conversationStore().saveCheckpoint(r,null);let u=l instanceof Error?l.message:String(l);return o.settle(J.ERROR,u),this.#e.transcript.showPending(),{content:`Error: ${u}`,error:u,outcome:Fe.FAILED}}}async resolveInterrupts(e){let n=this.#e.decision.open();this.#e.announce(le(this.#e.strings().announceAwaitingDecision,{count:e.length})),this.#e.transcript.hidePending();let r=await Promise.all(e.map(async i=>{let a=i.toolCallId!==void 0?this.#e.transcript.card(i.toolCallId):void 0,s={},c=x_(i)??i.message;c!==void 0&&(s.message=c);let l=a?.element.getAttribute("data-tool-name");l!=null&&(s.toolName=l);let u,f=this.#e.approveWithEdits()&&a!==void 0;f&&(s.args=a.args),a?.mark(J.DEFERRED);let m=()=>Cu(a?.approvalSlot??this.#e.transcript.ensureGroup(),s,{signal:n,strings:this.#e.strings(),...f?{onEdit:E=>{u=E}}:{}}),h=this.#e.approvalRenderer(),p;if(h===null)p=await m();else try{p=await h.call(this.#e.element,s,{signal:n})}catch(E){p=await this.#o(E,n,i.id,m)}return a?.recordDecision(p?"approved":"declined"),p?a?.mark(J.PENDING):a?.settle(J.DECLINED,this.#e.strings().declinedAction),{id:i.id,approved:p,editedArgs:u}}));this.#e.transcript.updateEmptyState(),this.#e.transcript.follow(),this.#e.decision.close();let o={};for(let{id:i,approved:a,editedArgs:s}of r)o[i]=a?{status:"resolved",payload:s===void 0?{approved:!0}:{approved:!0,editedArgs:s}}:{status:"cancelled"};return o}#o(e,n,r,o){return n.aborted?Promise.resolve(!1):(console.warn(`ag-ui-chat: approvalRenderer failed for interrupt ${r}, so the built-in approval card asks instead`,e),o())}async#r(e,n){if(this.#e.autoConfirm())return null;let r=this.#e.confirmPredicate();if(r!==null)try{return await r.call(this.#e.element,e.name,e.args)===!0?"predicate":null}catch(o){return console.warn(`ag-ui-chat: confirmPredicate failed for tool ${e.name}, so the call was refused`,o),"unanswered"}return this.#t.has(e.name)?null:Pu(n.parameters)?"destructive":null}#i(e){return e.settle(J.INTERRUPTED,this.#e.strings().callNotFinished),null}#a(){return this.#n!==null&&this.#n!==window.location.href}};function x_(t){let e=t.metadata?.[Co];return typeof e=="string"&&e.trim()!==""?e:void 0}var S_="http://www.w3.org/2000/svg",Ye={top:20,right:12,bottom:30,left:44},__=480,T_=220,A_=220/480,k_=160,I_=320,tb=8,R_=5.6,nb=["var(--ag-ui-chart-1, #4f7cff)","var(--ag-ui-chart-2, #21b573)","var(--ag-ui-chart-3, #e0803c)","var(--ag-ui-chart-4, #b563d8)","var(--ag-ui-chart-5, #d84f6e)","var(--ag-ui-chart-6, #3ba7c4)"];function dn(t){return nb[t%nb.length]}function rb(t){let e=Math.max(T_,t),n=Math.min(I_,Math.max(k_,Math.round(e*A_)));return{width:e,height:n,plotW:e-Ye.left-Ye.right,plotH:n-Ye.top-Ye.bottom}}function wt(t,e){let n=document.createElementNS(S_,t);for(let[r,o]of Object.entries(e))n.setAttribute(r,String(o));return n}function ob(t,e){let n=wt("text",{"font-size":10,fill:"currentColor","fill-opacity":.65,...e});return n.textContent=t,n}function C_(t){let e=[];return t.labels.forEach((n,r)=>{let o=0;for(let i of t.series)o+=i.points[r]??0,e.push(o)}),e}function N_(t){let e=t.kind==="stacked"?C_(t):t.series.flatMap(o=>[...o.points]),n=Math.max(0,...e),r=Math.min(0,...e);return n===r?{min:r,max:n+1}:{min:r,max:n}}function pn(t,e,n,r){return Ye.top+r.plotH-(t-e)/(n-e)*r.plotH}function Mu(t,e,n){let r=n.plotW/e;return Ye.left+r*t+r/2}function O_(t,e){let n=e.plotW/t.length,r=Math.max(...t.map(o=>o.length))*R_;return Math.max(1,Math.ceil(r/n))}function P_(t,e,n,r,o){for(let a of[r,o]){let s=pn(a,r,o,n);t.appendChild(wt("line",{x1:Ye.left,y1:s,x2:n.width-Ye.right,y2:s,stroke:"currentColor","stroke-opacity":a===r?.35:.12})),t.appendChild(ob(String(Math.round(a)),{x:Ye.left-6,y:s+4,"text-anchor":"end"}))}let i=O_(e.labels,n);e.labels.forEach((a,s)=>{s%i===0&&t.appendChild(ob(a,{x:Mu(s,e.labels.length,n),y:n.height-Ye.bottom+16,"text-anchor":"middle"}))})}function M_(t,e,n,r,o){let i=n.plotW/e.labels.length,a=i*.7/e.series.length,s=pn(r,r,o,n);e.series.forEach((c,l)=>{c.points.forEach((u,f)=>{let m=pn(u,r,o,n);t.appendChild(wt("rect",{x:Ye.left+i*f+i*.15+a*l,y:m,width:a,height:Math.max(1,s-m),fill:dn(l),rx:2}))})})}function z_(t,e,n,r,o){let i=n.plotW/e.labels.length,a=i*.7,s=e.labels.map(()=>0);e.series.forEach((c,l)=>{c.points.forEach((u,f)=>{let m=s[f]??0,h=m+u;s[f]=h;let p=pn(h,r,o,n);t.appendChild(wt("rect",{x:Ye.left+i*f+i*.15,y:p,width:a,height:Math.max(1,pn(m,r,o,n)-p),fill:dn(l)}))})})}function L_(t,e,n,r,o){e.series.forEach((i,a)=>{let s=i.points.map((c,l)=>`${Mu(l,e.labels.length,n)},${pn(c,r,o,n)}`).join(" ");t.appendChild(wt("polyline",{points:s,fill:"none",stroke:dn(a),"stroke-width":2,"stroke-linejoin":"round"}))})}function D_(t,e,n,r,o){e.series.forEach((i,a)=>{i.points.forEach((s,c)=>{t.appendChild(wt("circle",{cx:Mu(c,e.labels.length,n),cy:pn(s,r,o,n),r:4,fill:dn(a),"fill-opacity":.85}))})})}function $_(t,e,n){let r=e.reduce((c,l)=>c+l,0),o=n.width/2,i=Ye.top+n.plotH/2,a=Math.min(n.plotW,n.plotH)/2;if(r===0){t.appendChild(wt("circle",{cx:o,cy:i,r:a,fill:"none",stroke:"currentColor","stroke-opacity":.3}));return}let s=-Math.PI/2;e.forEach((c,l)=>{let u=c/r*Math.PI*2,f=s+u;if(u>=Math.PI*2)t.appendChild(wt("circle",{cx:o,cy:i,r:a,fill:dn(l)}));else{let m=o+a*Math.cos(s),h=i+a*Math.sin(s),p=o+a*Math.cos(f),E=i+a*Math.sin(f),g=u>Math.PI?1:0;t.appendChild(wt("path",{d:`M ${o} ${i} L ${m} ${h} A ${a} ${a} 0 ${g} 1 ${p} ${E} Z`,fill:dn(l)}))}s=f})}function ib(t,e){let n=wt("svg",{viewBox:`0 0 ${e.width} ${e.height}`,width:"100%",role:"img"});if(n.setAttribute("aria-label",t.title??`${t.kind} chart`),t.kind==="pie"){let i=t.series[0];return $_(n,i.points.map(a=>Math.max(0,a)),e),n}let{min:r,max:o}=N_(t);return P_(n,t,e,r,o),t.kind==="bar"?M_(n,t,e,r,o):t.kind==="stacked"?z_(n,t,e,r,o):t.kind==="line"?L_(n,t,e,r,o):D_(n,t,e,r,o),n}function U_(t){if(t.length<2)return null;let e=document.createElement("div");return e.className="chart-legend",e.setAttribute("part","chart-legend"),t.forEach((n,r)=>{let o=document.createElement("span");o.className="chart-legend-item";let i=document.createElement("span");i.className="chart-legend-swatch",i.style.background=dn(r),o.append(i,document.createTextNode(n)),e.appendChild(o)}),e}function H_(t,e){new ResizeObserver(()=>{e(Math.round(t.clientWidth/tb)*tb)}).observe(t)}function Fr(t){if(t.labels.length===0||t.series.length===0)return null;let e=document.createElement("div");if(e.className="chart-block",e.setAttribute("part","chart-block"),t.title!==void 0&&t.title!==""){let i=document.createElement("div");i.className="chart-title",i.setAttribute("part","chart-title"),i.textContent=t.title,e.appendChild(i)}let n=__,r=ib(t,rb(n));e.appendChild(r);let o=U_(t.kind==="pie"?t.labels:t.series.map(i=>i.label));return o!==null&&e.appendChild(o),H_(e,i=>{if(i===n)return;n=i;let a=ib(t,rb(n));r.replaceWith(a),r=a}),e}var F_=["bar","line","pie","scatter","stacked"];function G_(t){return F_.includes(t)?t:"bar"}function Z_(t){if(!Array.isArray(t))return null;let e=[];for(let n of t){if(typeof n!="number"||!Number.isFinite(n)||Math.abs(n)>1e15)return null;e.push(n)}return e}function B_(t){if(!Array.isArray(t))return null;for(let e=0;e<t.length;e+=1)if(typeof t[e]!="string")return null;return t}function Qn(t){if(typeof t!="object"||t===null)return null;let e=t,n=B_(e.labels);if(n===null||!Array.isArray(e.series))return null;let r=[];for(let a of e.series){if(typeof a!="object"||a===null)return null;let s=a,c=Z_(s.points);if(c===null||c.length!==n.length)return null;r.push({label:typeof s.label=="string"?s.label:"",points:c})}if(r.length===0||r.length*n.length>2e4||n.length>2e3)return null;let o=G_(e.kind),i=e.title;return typeof i=="string"?{kind:o,title:i,labels:n,series:r}:{kind:o,labels:n,series:r}}var Ya="render_chart";function V_(t){let e=Qn(t);return e===null?null:Fr(e)}function j_(t){let e=Qn(t);return e!==null&&e.labels.length>0&&e.series.length>0}var W_="chart not rendered: expected labels (strings) and series, each with one finite number per label";function ab(){return{name:Ya,description:"Show a chart in the conversation. Supply the data and the page draws it. Every series must have exactly one point per label.",parameters:{type:"object",properties:{kind:{type:"string",enum:["bar","line","pie","scatter","stacked"]},title:{type:"string"},labels:{type:"array",items:{type:"string"}},series:{type:"array",items:{type:"object",properties:{label:{type:"string"},points:{type:"array",items:{type:"number"}}},required:["points"]}}},required:["labels","series"],"x-summary":"Draw a chart"},handler:t=>j_(t)?"chart rendered":W_,render:V_}}function Mt(t){t.style.height="auto",t.style.height=`${t.scrollHeight}px`}function zu(t,e){return new Promise((n,r)=>{let o=new FormData;o.append("file",t);let i=new XMLHttpRequest;i.open("POST",e.url),i.withCredentials=e.credentials==="include";for(let[c,l]of Object.entries(e.headers??{}))i.setRequestHeader(c,l);let a=e.onProgress;a!==void 0&&i.upload.addEventListener("progress",c=>{c.lengthComputable&&a(c.total===0?0:c.loaded/c.total)}),i.addEventListener("load",()=>{if(i.status>=200&&i.status<300)try{n(q_(JSON.parse(i.responseText)))}catch{r(new Error("upload returned an unreadable response"))}else r(new Error(Y_(i)))}),i.addEventListener("error",()=>r(new Error("upload failed"))),i.addEventListener("abort",()=>r(new Error("upload cancelled")));let s=e.signal;s!==void 0&&s.addEventListener("abort",()=>i.abort()),i.send(o)})}function q_(t){if(typeof t!="object"||t===null)throw new Error("not an object");let e=t,n=e.id,r=e.name,o=e.mime,i=e.size,a=e.url;if(typeof n!="string"||typeof r!="string"||typeof o!="string"||typeof i!="number")throw new Error("missing fields");return typeof a=="string"?{id:n,name:r,mime:o,size:i,url:a}:{id:n,name:r,mime:o,size:i}}function Y_(t){try{let e=JSON.parse(t.responseText);if(typeof e.error=="string")return e.error}catch{}return`upload failed (${t.status})`}function Xa(t){let e=document.createElement("div");e.className="attachment-chips",e.setAttribute("part","attachment-chips");for(let n of t)e.appendChild(X_(n));return e}function X_(t){let e=document.createElement("div");e.className="attachment-chip attachment-chip--ready",e.setAttribute("part","attachment-chip");let n=document.createElement("span");n.className="attachment-chip-icon",n.setAttribute("part","attachment-chip-icon"),n.innerHTML=Lu(t.mime),n.setAttribute("aria-hidden","true");let r=document.createElement("span");r.className="attachment-chip-name",r.setAttribute("part","attachment-chip-name"),r.textContent=t.name,r.title=t.name;let o=document.createElement("span");return o.className="attachment-chip-size",o.setAttribute("part","attachment-chip-size"),o.textContent=Ka(t.size),e.append(n,r,o),e}function Lu(t){return t.startsWith("image/")?pp:t==="application/pdf"?hp:t.startsWith("text/")?fp:dp}function Ka(t){if(t<1024)return`${t} B`;let e=["KB","MB","GB"],n=t/1024,r=0;for(;n>=1024&&r<e.length-1;)n/=1024,r+=1;return`${n<10?Math.round(n*10)/10:Math.round(n)} ${e[r]}`}var Ja=class{element;#e;#t;#n=[];constructor(e){this.#e=e,this.#t=e.strings??pe,this.element=document.createElement("div"),this.element.className="attachment-tray",this.element.setAttribute("part","attachment-tray"),this.element.hidden=!0}add(e){let n={localId:we(),file:e,status:je.UPLOADING,progress:0,ref:null,error:"",controller:null};this.#n.push(n);let r=this.#o(e);if(r!==null){n.status=je.ERROR,n.error=r,this.#a(),this.#e.onChange?.();return}this.#a(),this.#e.onChange?.(),this.#r(n)}readyRefs(){let e=[];for(let n of this.#n)n.ref!==null&&e.push(n.ref);return e}hasPending(){return this.#n.some(e=>e.status===je.UPLOADING)}pendingCount(){return this.#n.filter(e=>e.status===je.UPLOADING).length}isEmpty(){return this.#n.length===0}clearReady(){this.#n=this.#n.filter(e=>e.status===je.UPLOADING),this.#a()}clear(){for(let e of this.#n)e.controller?.abort();this.#n=[],this.#a()}dispose(){for(let e of this.#n)e.controller?.abort()}#o(e){return this.#e.maxBytes>0&&e.size>this.#e.maxBytes?le(this.#t.tooLarge,{size:Ka(this.#e.maxBytes)}):K_(this.#e.accept,e)?null:this.#t.fileTypeNotAllowed}#r(e){let n=this.#o(e.file);if(n!==null){e.status=je.ERROR,e.error=n,this.#a(),this.#e.onChange?.();return}e.status=je.UPLOADING,e.progress=0,e.error="";let r=new AbortController;e.controller=r,this.#a(),this.#e.upload(e.file,o=>{e.progress=o,this.#a()},r.signal).then(o=>{e.status=je.READY,e.ref=o}).catch(o=>{e.status=je.ERROR,e.error=o instanceof Error?o.message:this.#t.uploadFailed}).finally(()=>{e.controller=null,this.#a(),this.#e.onChange?.()})}#i(e){e.controller?.abort(),this.#n=this.#n.filter(n=>n!==e),this.#a(),this.#e.onChange?.()}#a(){this.element.replaceChildren(),this.element.hidden=this.#n.length===0;for(let e of this.#n)this.element.appendChild(this.#l(e))}#l(e){let n=document.createElement("div");n.className=`attachment-chip attachment-chip--${e.status}`,n.setAttribute("part","attachment-chip");let r=document.createElement("span");r.className="attachment-chip-icon",r.setAttribute("part","attachment-chip-icon"),r.innerHTML=Lu(e.file.type),r.setAttribute("aria-hidden","true");let o=document.createElement("span");o.className="attachment-chip-name",o.setAttribute("part","attachment-chip-name"),o.textContent=e.file.name,o.title=e.file.name;let i=document.createElement("span");if(i.className="attachment-chip-size",i.setAttribute("part","attachment-chip-size"),i.textContent=e.status===je.ERROR?e.error:Ka(e.file.size),n.append(r,o,i),e.status===je.UPLOADING){let s=document.createElement("div");s.className="attachment-chip-bar",s.setAttribute("part","attachment-chip-bar");let c=document.createElement("div");c.className="attachment-chip-bar-fill",c.setAttribute("part","attachment-chip-bar-fill"),c.style.width=`${Math.round(e.progress*100)}%`,s.appendChild(c),n.appendChild(s)}if(e.status===je.ERROR){let s=document.createElement("button");s.type="button",s.className="attachment-chip-retry",s.setAttribute("part","attachment-chip-retry"),s.title=this.#t.retry,s.setAttribute("aria-label",this.#t.retryUpload),s.textContent="\u21BB",s.addEventListener("click",()=>this.#r(e)),n.appendChild(s)}let a=document.createElement("button");return a.type="button",a.className="attachment-chip-remove",a.setAttribute("part","attachment-chip-remove"),a.title=this.#t.remove,a.setAttribute("aria-label",this.#t.removeAttachment),a.textContent="\u2715",a.addEventListener("click",()=>this.#i(e)),n.appendChild(a),n}};function K_(t,e){let n=Jn(t).map(i=>i.toLowerCase());if(n.length===0)return!0;let r=e.type.toLowerCase(),o=e.name.toLowerCase();return n.some(i=>i.startsWith(".")?o.endsWith(i):i.endsWith("/*")?r.startsWith(i.slice(0,-1)):r===i)}var Qa=class{#e;#t=null;constructor(e){this.#e=e}get tray(){return this.#t}wire(e){this.#t?.element.remove(),this.#t=null;let n=this.#e.element.getAttribute("data-attachments-url"),r=this.#e.uploadHandler()??this.#n(n);if(r===null)return;let o=this.#e.element.getAttribute("data-attachment-accept")??"",i=new Ja({upload:r,maxBytes:this.#o(),accept:o,strings:this.#e.strings(),onChange:()=>this.#p(i)});this.#t=i,this.#e.slot.appendChild(this.#t.element),this.#e.fileInput.accept=o,this.#e.button.hidden=!1,this.#r(e),this.#l(i,e)}attach(e){return this.#t===null?!1:(this.#t.add(e),!0)}onFilesPicked(){let e=this.#e.fileInput,n=e.files;if(n!==null)for(let r of Array.from(n))this.#t?.add(r);e.value=""}#n(e){return e===null?null:(n,r,o)=>zu(n,{url:e,headers:this.#e.headersFor(e),...this.#e.credentialsOption(),onProgress:r,signal:o})}#o(){let e=this.#e.element.getAttribute("data-attachment-max-bytes");if(e===null)return hl;let n=Number.parseInt(e,10);return Number.isFinite(n)&&n>=0?n:hl}#r(e){let n=this.#e.chat;n.addEventListener("dragover",r=>{r.preventDefault(),n.classList.add("chat--dragover")},{signal:e}),n.addEventListener("dragleave",()=>{n.classList.remove("chat--dragover")},{signal:e}),n.addEventListener("drop",r=>{r.preventDefault(),n.classList.remove("chat--dragover");let o=r.dataTransfer?.files;if(o!==void 0)for(let i of Array.from(o))this.#t?.add(i)},{signal:e})}#i(e,n,r){let o=this.#a(),i=n.getData("text/plain");o===null||i.length<o||(e.preventDefault(),r.add(new File([i],`pasted-${sb()}.txt`,{type:"text/plain"})))}#a(){let e=this.#e.element.getAttribute("data-paste-attach");if(e===null)return Po;if(e==="off")return null;let n=Number.parseInt(e,10);return Number.isNaN(n)||n<=0?(console.warn(`<ag-ui-chat>: data-paste-attach="${e}" is neither "off" nor a positive number of characters, so the default of ${Po} is used.`),Po):n}#l(e,n){this.#e.chat.addEventListener("paste",r=>{let o=r.clipboardData??null;if(o===null)return;let i=Array.from(o.files);if(i.length===0){this.#i(r,o,e);return}o.getData("text/plain")===""&&r.preventDefault();for(let a of i)this.#t?.add(J_(a))},{signal:n})}#p(e){this.#e.element.dispatchEvent(new CustomEvent(al,{detail:{attachments:e.readyRefs(),pending:e.pendingCount()},bubbles:!0,composed:!0}))}};function sb(){return new Date().toISOString().replace(/[:.]/g,"-")}function J_(t){if(t.name!=="")return t;let e=t.type.split("/")[1]??t.type,n=sb();return new File([t],e===""?`pasted-${n}`:`pasted-${n}.${e}`,{type:t.type})}async function Du(t,e){let n=new FormData;n.append("audio",t,"recording.webm");let r=await fetch(e.url,nt({method:"POST",headers:{...e.headers??{}},body:n},e.credentials));if(!r.ok)throw new Error(await Q_(r));let o=await r.json();if(typeof o=="object"&&o!==null&&typeof o.text=="string")return o.text;throw new Error("transcription returned an unreadable response")}async function Q_(t){try{let e=await t.json();if(typeof e.error=="string")return e.error}catch{}return`transcription failed (${t.status})`}var lb=12e4,es=class{element;#e;#t;#n;#o="idle";#r=null;#i=null;#a=[];#l=null;#p=!1;#u=!1;constructor(e){this.#e=e.transcribe,this.#t=e.onText,this.#n=e.strings??pe,this.element=document.createElement("button"),this.element.type="button",this.element.className="voice-btn",this.element.setAttribute("part","voice-button");let n=document.createElement("slot");n.name="icon-voice",n.innerHTML=rp,this.element.append(n),this.#g("idle"),this.element.addEventListener("click",()=>{this.toggle()})}async toggle(){if(this.#o==="recording"){this.#h();return}this.#o!=="transcribing"&&await this.#c()}async#c(){let e;try{e=await navigator.mediaDevices.getUserMedia({audio:!0})}catch{this.#b(this.#n.transcriptionFailed);return}if(this.#u){for(let r of e.getTracks())r.stop();return}this.#i=e,this.#a=[],this.#p=!1;let n=new MediaRecorder(e);n.addEventListener("dataavailable",r=>{this.#a.push(r.data)}),n.addEventListener("stop",()=>{this.#f(n.mimeType)}),this.#r=n,n.start(),this.#l=setTimeout(()=>{this.#p=!0,this.#h()},lb),this.#g("recording")}#h(){this.#s(),this.#r?.stop()}#s(){this.#l!==null&&(clearTimeout(this.#l),this.#l=null)}dispose(){this.#u=!0,this.#s(),this.#r!==null&&this.#r.state!=="inactive"&&this.#r.stop(),this.#r=null,this.#m()}async#f(e){if(this.#u)return;this.#m(),this.#g("transcribing");let n=new Blob(this.#a,{type:e||"audio/webm"});try{let r=await this.#e(n);if(this.#u)return;this.#g("idle"),this.#p&&(this.element.title=le(this.#n.recordingLimit,{n:lb/6e4})),r!==""&&this.#t(r)}catch(r){this.#b(r instanceof Error?r.message:this.#n.transcriptionFailed)}finally{this.#r=null}}#m(){for(let e of this.#i?.getTracks()??[])e.stop();this.#i=null}#b(e){this.#u||(this.#m(),this.#r=null,this.#g("idle"),this.element.title=e)}#g(e){this.#o=e,this.element.dataset.state=e;let n=this.#y(e);this.element.title=n,this.element.setAttribute("aria-label",n),this.element.setAttribute("aria-pressed",String(e==="recording")),this.element.disabled=e==="transcribing"}#y(e){return e==="recording"?this.#n.stopRecording:e==="transcribing"?this.#n.transcribing:this.#n.recordVoice}};var ts=class{#e;#t=null;constructor(e){this.#e=e}wire(){this.#t?.element.remove(),this.#t=null;let e=this.#e.element.getAttribute("data-transcribe-url"),n=this.#e.transcribeHandler()??this.#n(e);n!==null&&(this.#t=new es({transcribe:n,onText:r=>this.#o(r),strings:this.#e.strings()}),this.#e.slot.appendChild(this.#t.element))}dispose(){this.#t?.dispose()}#n(e){return e===null?null:n=>Du(n,{url:e,headers:this.#e.headersFor(e),...this.#e.credentialsOption()})}#o(e){let n=this.#e.input,r=n.value.trim();n.value=r===""?e:`${r} ${e}`,this.#e.onInput(),n.focus()}};var ns=class{chips;palette;#e;#t=[];#n=!1;#o=!1;#r=[];#i=0;constructor(e){this.#e=e,this.chips=document.createElement("div"),this.chips.className="skill-chips",this.chips.setAttribute("part","skill-chips"),this.chips.hidden=!0,this.palette=document.createElement("div"),this.palette.className="skill-palette",this.palette.setAttribute("part","skill-palette"),this.palette.setAttribute("role","listbox"),this.palette.hidden=!0}setSkills(e){this.#t=e,this.#u()}enableChips(e){this.#n=e,this.#u()}enableSlash(e){this.#o=e}isOpen(){return!this.palette.hidden}onInput(e){this.#o&&e.startsWith("/")?this.#a(e.slice(1)):this.close()}onKeydown(e){return this.isOpen()?e.key==="ArrowDown"?(this.#l(1),!0):e.key==="ArrowUp"?(this.#l(-1),!0):e.key==="Escape"?(this.close(),!0):e.key==="Enter"?(this.#r.slice(this.#i,this.#i+1).forEach(n=>{this.#p(n)}),!0):!1:!1}close(){this.palette.hidden=!0,this.palette.replaceChildren()}#a(e){let n=e.trim().toLowerCase(),r=this.#t.filter(o=>o.name.toLowerCase().includes(n)||o.title.toLowerCase().includes(n));if(r.length===0){this.close();return}this.#r=r,this.#i=0,this.#c(),this.palette.hidden=!1}#l(e){let n=this.#r.length;this.#i=(this.#i+e+n)%n,this.#c()}#p(e){this.close(),this.#e(e)}#u(){this.chips.replaceChildren();let e=this.#n?this.#t.filter(n=>n.chip===!0):[];this.chips.hidden=e.length===0;for(let n of e){let r=document.createElement("button");r.type="button",r.className="skill-chip",r.setAttribute("part","skill-chip"),r.textContent=n.title,r.title=`/${n.name}`,r.addEventListener("click",()=>this.#p(n)),this.chips.appendChild(r)}}#c(){this.palette.replaceChildren(),this.#r.forEach((e,n)=>{let r=document.createElement("button");r.type="button",r.className="skill-item",r.setAttribute("part","skill-item"),r.setAttribute("role","option"),r.setAttribute("aria-selected",n===this.#i?"true":"false");let o=document.createElement("span");o.className="skill-item-title",o.setAttribute("part","skill-item-title");let i=document.createElement("code");if(i.className="skill-item-token",i.setAttribute("part","skill-item-token"),i.textContent=`/${e.name}`,o.append(i,document.createTextNode(` ${e.title}`)),r.appendChild(o),e.description!==void 0){let a=document.createElement("span");a.className="skill-item-desc",a.setAttribute("part","skill-item-desc"),a.textContent=e.description,r.appendChild(a)}r.addEventListener("click",()=>this.#p(e)),this.palette.appendChild(r)})}};var eT=500;function Gr(t,e=[],n){for(let r of dT(e)){if(!t.contains(r.startContainer)||!t.contains(r.endContainer))continue;let o=document.createRange();o.setStart(r.startContainer,r.startOffset),o.setEnd(r.endContainer,r.endOffset);let i=oT(o).trim();if(i!=="")return{text:i,rect:uT(o,n)}}return null}function $u(t){let e=tT(t);return e.length===0?"":`${rT(e.join(`
`)).split(`
`).map(o=>`> ${o}`.trimEnd()).join(`
`)}

`}function tT(t){let e=t.split(/\r\n?|\n/).map(i=>i.trimEnd()),n=e.filter(i=>i!=="").map(nT),r=n.length===0?0:Math.min(...n),o=[];for(let i of e){let a=i.slice(r);a===""&&(o.length===0||o[o.length-1]==="")||o.push(a)}for(;o[o.length-1]==="";)o.pop();return o}function nT(t){return t.length-t.trimStart().length}function rT(t){return t.length>500?`${t.slice(0,500).trimEnd()}...`:t}function oT(t){let e="";for(let n of lT(t)){let r=n.parentElement;if(!cT(r))continue;let o=n===t.startContainer?t.startOffset:0,i=n===t.endContainer?t.endOffset:n.data.length;e+=iT(n.data.slice(o,i),r)}return e}function iT(t,e){return aT.has(sT(e))?t:t.replace(/[^\S\n]*\n[^\S\n]*/g,`
`).replace(/[^\S\n]+/g," ")}var aT=new Set(["pre","pre-wrap","break-spaces"]);function sT(t){return window.getComputedStyle(t).whiteSpace}function lT(t){let e=t.commonAncestorContainer;if(e.nodeType===Node.TEXT_NODE)return[e];let n=[],r=document.createTreeWalker(e,NodeFilter.SHOW_TEXT);for(let o=r.nextNode();o!==null;o=r.nextNode())t.intersectsNode(o)&&n.push(o);return n}function cT(t){return typeof t.checkVisibility!="function"?!0:t.checkVisibility({contentVisibilityAuto:!0,opacityProperty:!0,visibilityProperty:!0})}function uT(t,e){let n=[...t.getClientRects()];if(n.length===0)return t.getBoundingClientRect();if(e===void 0)return n[0];let r=n[0],o=cb(r,e);for(let i of n.slice(1)){let a=cb(i,e);a<o&&(o=a,r=i)}return r}function cb(t,e){let n=Math.max(t.left-e.x,0,e.x-t.right),r=Math.max(t.top-e.y,0,e.y-t.bottom);return Math.hypot(n,r)}function dT(t){let e=window.getSelection();if(e===null)return[];let n=[...pT(e,t)];return e.rangeCount>0&&n.push(e.getRangeAt(0)),n}function pT(t,e){let n=t.getComposedRanges;if(n===void 0)return[];try{return n.call(t,{shadowRoots:e})}catch{return n.call(t,...e)}}var Uu=6,hT=`
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
`;function Hu(t){let{within:e,exclude:n,onQuote:r}=t,o=new CSSStyleSheet;o.replaceSync(hT),document.adoptedStyleSheets=[...document.adoptedStyleSheets,o];let i=document.createElement("button");i.type="button",i.className="ag-ui-quote-offer",i.textContent=t.label,i.hidden=!0,document.body.append(i);let a="",s=()=>{i.hidden=!0,a=""},c=u=>{if(u.composedPath().includes(n)){s();return}if(fT()){s();return}let f=u instanceof MouseEvent?{x:u.clientX,y:u.clientY}:void 0,m=Gr(e,[],f);if(m===null){s();return}a=m.text,mT(i,m.rect)},l=u=>{i.contains(u.target)||s()};return e.addEventListener("mouseup",c),e.addEventListener("keyup",c),e.addEventListener("mousedown",l),document.addEventListener("scroll",s,!0),window.addEventListener("resize",s),i.addEventListener("mousedown",u=>{u.preventDefault()}),i.addEventListener("click",()=>{let u=a;window.getSelection()?.removeAllRanges(),s(),r(u)}),{element:i,detach(){e.removeEventListener("mouseup",c),e.removeEventListener("keyup",c),e.removeEventListener("mousedown",l),document.removeEventListener("scroll",s,!0),window.removeEventListener("resize",s),i.remove(),document.adoptedStyleSheets=document.adoptedStyleSheets.filter(u=>u!==o)}}}function fT(){let t=document.activeElement;return t===null?!1:t.tagName==="INPUT"||t.tagName==="TEXTAREA"||t.isContentEditable===!0}function mT(t,e){t.hidden=!1;let n=e.top<Uu+t.offsetHeight;t.dataset.below=String(n),t.style.top=`${n?e.bottom+Uu:e.top-Uu}px`;let r=t.offsetWidth/2,o=e.left+e.width/2,i=document.documentElement.clientWidth;t.style.left=`${Math.min(Math.max(o,r),i-r)}px`}var Fu=6,rs=class{button=document.createElement("button");#e;#t="";#n=null;constructor(e){this.#e=e}insert(e){let n=$u(e);if(n==="")return;let r=this.#e.input,o=r.value.replace(/\s+$/,"");r.value=o===""?n:`${o}

${n}`,this.#e.autoGrow(),r.focus();let i=r.value.length;r.setSelectionRange(i,i)}offerInPage(e){this.#n?.detach();let n=Hu({within:e,label:this.#e.strings().quoteSelection,exclude:this.#e.element,onQuote:r=>this.#e.quote(r)});return this.#n=n,()=>{n.detach(),this.#n===n&&(this.#n=null)}}detachPageOffer(){this.#n?.detach(),this.#n=null}mount(e){let n=this.button;n.className="quote-selection",n.type="button",n.setAttribute("part","quote-selection"),n.textContent=this.#e.strings().quoteSelection,n.hidden=!0,n.addEventListener("mousedown",o=>{o.preventDefault()},{signal:e}),n.addEventListener("click",()=>{this.#e.quote(this.#t),window.getSelection()?.removeAllRanges(),this.#a()},{signal:e});let r=this.#e.messages;r.addEventListener("mouseup",o=>this.#r(o),{signal:e}),r.addEventListener("keyup",()=>this.#r(),{signal:e}),r.addEventListener("mousedown",()=>this.#a(),{signal:e})}#o(){return this.#e.element.getAttribute("data-quote-selection")!=="false"}#r(e){if(!this.#o())return;let n=e===void 0?void 0:{x:e.clientX,y:e.clientY},r=Gr(this.#e.messages,[this.#e.root],n);if(r===null){this.#a();return}this.#t=r.text,this.#i(r.rect)}#i(e){let n=this.button;n.hidden=!1;let r=this.#e.messagesWrap.getBoundingClientRect(),o=e.top-r.top,i=o<Fu+n.offsetHeight;n.dataset.below=String(i),n.style.top=`${i?e.bottom-r.top+Fu:o-Fu}px`;let a=n.offsetWidth/2,s=e.left+e.width/2-r.left;n.style.left=`${Math.min(Math.max(s,a),r.width-a)}px`}#a(){this.button.hidden=!0,this.#t=""}};function Zr(t,e=Date.now(),n=pe){if(!Number.isFinite(t))return n.justNow;let r=Math.round((e-t)/1e3);if(r<60)return n.justNow;let o=Math.round(r/60);if(o<60)return le(n.minutesAgo,{n:o});let i=Math.round(o/60);if(i<24)return le(n.hoursAgo,{n:i});let a=Math.round(i/24);return a<7?le(n.daysAgo,{n:a}):le(n.weeksAgo,{n:Math.round(a/7)})}function ub(t){return t.preview!==void 0&&t.preview!==null&&t.preview!==""?t.preview:null}function db(t){return t.replace(/\s+/g," ").trim()}var Br=class{element;#e;#t;#n;#o=null;#r=null;#i;#a=[];constructor(e,n=pe){this.#e=e,this.#i=n,this.element=document.createElement("div"),this.element.className="checkpoints",this.element.setAttribute("part","checkpoints"),this.element.setAttribute("role","dialog"),this.element.setAttribute("aria-label",n.checkpoints),this.element.tabIndex=-1,this.element.hidden=!0;let r=document.createElement("div");r.className="checkpoints-header",r.setAttribute("part","checkpoints-header"),this.#n=document.createElement("span"),this.#n.className="checkpoints-title",this.#n.setAttribute("part","checkpoints-title"),this.#n.textContent=n.checkpoints,r.append(this.#n),this.#t=document.createElement("div"),this.#t.className="checkpoints-list",this.#t.setAttribute("part","checkpoints-list"),this.element.append(r,this.#t),this.element.addEventListener("keydown",o=>this.#c(o))}setRuns(e){this.#a=e,this.#h()}setRelativeTimeFormatter(e){this.#r=e}#l(e){return this.#r!==null?this.#r(e):Zr(e,Date.now(),this.#i)}setStrings(e){this.#i=e,this.element.setAttribute("aria-label",e.checkpoints),this.#n.textContent=e.checkpoints,this.#h()}open(){this.open_||(this.#o=this.#p(),this.element.hidden=!1,(this.#u()[0]??this.element).focus())}close(){this.open_&&(this.element.hidden=!0,this.#o?.focus(),this.#o=null)}#p(){return this.element.getRootNode().activeElement}#u(){return Array.from(this.element.querySelectorAll("button, [tabindex]")).filter(e=>!e.hidden)}#c(e){if(e.key==="Escape"){e.stopPropagation(),this.close();return}if(e.key!=="Tab")return;let n=this.#u(),r=n[0],o=n[n.length-1],i=this.#p();e.shiftKey&&i===r?(e.preventDefault(),o?.focus()):!e.shiftKey&&i===o&&(e.preventDefault(),r?.focus())}get open_(){return!this.element.hidden}#h(){if(this.#t.replaceChildren(),this.#a.length===0){let n=document.createElement("div");n.className="checkpoints-empty",n.setAttribute("part","checkpoints-empty"),n.textContent=this.#i.noCheckpoints,this.#t.append(n);return}let e=this.#s();for(let n of this.#a)this.#t.append(this.#f(n,e))}#s(){let e=new Set,n=new Set;for(let r of this.#a){let o=ub(r);if(o===null)continue;let i=db(o);e.has(i)&&n.add(i),e.add(i)}return n}#f(e,n){let r=document.createElement("div");r.className="checkpoint-row",r.setAttribute("part","checkpoint-row");let o=ub(e),i=e.started_at===null?null:this.#l(Date.parse(e.started_at)),a=document.createElement("span");if(a.className="checkpoint-label",a.setAttribute("part","checkpoint-label"),a.textContent=o??i??e.run_id,r.append(a),o!==null&&i!==null){let c=document.createElement("span");c.className="checkpoint-time",c.setAttribute("part","checkpoint-time"),c.textContent=i,r.append(c)}if((o===null?i!==null:n.has(db(o)))&&e.run_id!==""){let c=document.createElement("span");c.className="checkpoint-id",c.setAttribute("part","checkpoint-id"),c.textContent=e.run_id.slice(0,8),c.title=e.run_id,r.append(c)}if(e.parent_run_id!==null){let c=document.createElement("span");c.className="checkpoint-branch",c.setAttribute("part","checkpoint-branch"),c.textContent=this.#i.forkedRun,c.title=e.parent_run_id,r.append(c)}return r.append(this.#m(e.run_id,"resume",this.#i.resumeRun),this.#m(e.run_id,"fork",this.#i.forkRun)),r}#m(e,n,r){let o=document.createElement("button");return o.type="button",o.className=`checkpoint-action checkpoint-${n}`,o.setAttribute("part",`checkpoint-action checkpoint-${n}`),o.textContent=r,o.addEventListener("click",()=>{this.close(),this.#e(e,n)}),o}};function Gu(t){let e=Ba(t,"attachments");return Array.isArray(e)?e.filter(gT):[]}function gT(t){if(typeof t!="object"||t===null)return!1;let e=t;return typeof e.id=="string"&&typeof e.name=="string"&&typeof e.mime=="string"&&typeof e.size=="number"&&(e.url===void 0||typeof e.url=="string")}var Vr=class{#e;#t;#n;constructor(e,n=()=>({}),r=()=>{}){this.#e=e.endsWith("/")?e:`${e}/`,this.#t=n,this.#n=r}async list(){try{let e=await fetch(this.#e,nt({method:"GET",headers:{Accept:"application/json",...this.#t()}},this.#n()));return e.ok?(await e.json()).runs??[]:[]}catch{return[]}}async continuable(){return(await this.list()).filter(e=>e.continuable)}resumeUrl(e){return this.#o("resume",e)}forkUrl(e){return this.#o("fork",e)}#o(e,n){return`${this.#e.slice(0,-5)}${e}/${encodeURIComponent(n)}/`}};function jr(t){return t===Fe.FAILED?J.ERROR:t===Fe.DENIED?J.DECLINED:t===Fe.INTERRUPTED?J.INTERRUPTED:J.DONE}var vT=Object.freeze({release:()=>{}}),os=class{#e;#t="";#n=[];#o=0;#r=0;#i=null;#a=null;#l=null;constructor(e){this.#e=e}get threadId(){return this.#t}get restored(){return this.#n}get continuation(){return this.#l}adoptActiveThread(){this.#t=this.#e.conversationStore().threadId()}startThread(){this.#t=Fa(this.#e.conversationStore())}stopContinuation(){this.#l?.cancel(),this.#l=null}forgetRestored(){this.#n=[],this.#o+=1,this.#r+=1}reapUnsent(){this.#e.conversationStore().isUnsent?.(this.#t)===!0&&this.#e.conversationStore().clear(this.#t)}runs(){let e=this.#e.element.getAttribute("data-runs-url");return e===null||e===""?null:(this.#a===null&&(this.#a=new Vr(e,()=>this.#e.headersFor(e),()=>this.#e.requestCredentials())),this.#a)}openThreads(){this.#e.checkpoints.close(),this.refreshDrawer(),this.#e.drawer.open()}openCheckpoints(){this.#e.drawer.close(),this.#p(),this.#e.checkpoints.open()}async switchThread(e){e!==this.#t&&(this.#e.cancelRun(),this.#e.resetState(),this.#e.conversationStore().setActiveThread(e),this.#t=e,this.#e.setRunning(!1),await this.rehydrate())}renameThread(e,n){this.#e.conversationStore().renameThread(e,n),this.refreshDrawer()}deleteThread(e){let n=e===this.#t;n&&this.#e.cancelRun(),this.#e.conversationStore().clear(e),n&&(this.#e.resetState(),this.adoptActiveThread(),this.#e.setRunning(!1)),this.refreshDrawer()}async refreshDrawer(){this.#e.drawer.setRelativeTimeFormatter(this.#e.formatRelativeTime()),this.#e.drawer.setThreads(await this.#e.conversationStore().listThreads(),this.#t)}async#p(){let e=this.runs();this.#e.checkpoints.setRelativeTimeFormatter(this.#e.formatRelativeTime()),this.#e.checkpoints.setRuns(e===null?[]:await e.continuable())}async continueRun(e,n){let r=this.runs();if(r===null)return;if(this.#e.running()||this.#l!==null){this.#u(this.#e.strings().continueWhileRunning);return}let o=this.#e.input.value.trim();if(o===""){this.#u(this.#e.strings().continueNeedsTurn);return}this.#e.recordTurn(o),this.#e.input.value="",this.#e.autoGrow();let i=this.#o,a=this.#e.buildClient({endpoint:n==="resume"?r.resumeUrl(e):r.forkUrl(e),initialMessages:[],follows:this.#e.client()?.messages??this.#n,onSaved:s=>{i===this.#o&&(this.#n=s,this.#e.releaseClient())}});this.#l=a;try{if(this.#e.announceTurn(o),this.#l!==a)return;await a.send(o)}finally{this.#l===a&&(this.#l=null,this.#e.continuationEnded())}}#u(e){this.#e.hint.textContent=e,this.#e.hint.hidden=!1,this.#e.input.focus()}async rehydrate(){this.#r+=1;let e=this.#r,n=this.#t,r=this.#e.conversationStore();this.#i={generation:e,store:r,threadId:n};let o=r.loadCheckpoint(n),i=o===null?vT:this.#e.holdRun();try{this.#e.element.setAttribute("data-restoring","");let a;try{a=await r.loadMessages(n)}finally{e===this.#r&&this.#e.element.removeAttribute("data-restoring")}if(!this.#c(e)){this.#h(r,n,o);return}if(a!==null){let s=this.#e.strings().callNotFinished,c=Za(a,l=>({id:we(),role:"tool",content:s,toolCallId:l,metadata:{outcome:Fe.INTERRUPTED}}),new Set(o===null?[]:[o.toolCallId]));this.#n=c;for(let l of c)if(this.replay(l),!this.#c(e)){this.#h(r,n,o);return}}if(o!==null){await this.#b(o,e);return}this.#f(a)}finally{i.release()}}#c(e){return e===this.#r&&this.#e.element.isConnected}#h(e,n,r){r!==null&&!this.#s(e,n)&&e.saveCheckpoint(n,null)}#s(e,n){let r=this.#i;return r?.generation===this.#r&&r.store===e&&r.threadId===n}#f(e){let n=e?.at(-1);n===void 0||n.role!==He.USER||this.#e.transcript.appendNotice("\u26A0",this.#e.strings().runInterrupted,"interrupted")}replay(e){let n=typeof e.content=="string"?e.content:"";if(e.role===He.USER){let r=Gu(e);if(n!==""||r.length>0){let o=this.#e.appendMessage(He.USER,n);r.length>0&&o.appendChild(Xa(r))}return}if(e.role===He.ASSISTANT){if(n!==""){let r=this.#e.appendMessage(He.ASSISTANT,n);r.classList.add("message--restored"),this.#e.actions.attach(r)}for(let r of bT(e.toolCalls)){let o={id:r.id,name:r.function.name,args:this.#m(r.function.arguments)};if(this.#e.transcript.noticeIfSkillLoad(o))continue;this.#e.transcript.setCardElement(o.id,this.#e.transcript.cardFor(o).element);let i=this.#e.tools.resolve(o.name)?.render;i!==void 0&&this.#e.transcript.renderToolOutput(i,o)}return}if(e.role==="activity"){let r=e;typeof r.activityType=="string"&&this.#e.activities.draw(e.id,r.activityType,r.content);return}if(e.role==="tool"){let r=this.#e.transcript.card(e.toolCallId);r!==void 0&&r.settle(jr(Ba(e,"outcome")),Nn(e.content))}}#m(e){if(typeof e!="string")return{};try{let n=JSON.parse(e);if(typeof n=="object"&&n!==null)return n}catch{}return{}}async#b(e,n){this.#e.conversationStore().saveCheckpoint(this.#t,null);let r=this.#e.ensureClient(),o=JSON.stringify(this.#e.navigationResult().call(this.#e.element,e));this.#c(n)&&(r.addToolResult(e.toolCallId,o),this.#e.transcript.card(e.toolCallId)?.settle(J.DONE,o),await r.resume())}};function bT(t){return Array.isArray(t)?t.filter(yT):[]}function yT(t){if(typeof t!="object"||t===null)return!1;let e=t;return typeof e.id=="string"&&typeof e.function?.name=="string"}var wT=8,is=class{element;#e;#t;#n;#o;#r;#i=null;#a;#l=[];#p="";#u;#c;#h="";#s=null;constructor(e,n=pe){this.#e=e,this.#a=n,this.element=document.createElement("div"),this.element.className="drawer",this.element.setAttribute("part","drawer"),this.element.hidden=!0;let r=document.createElement("div");r.className="drawer-backdrop",r.setAttribute("part","drawer-backdrop"),r.addEventListener("click",()=>this.close()),this.#t=document.createElement("div"),this.#t.className="drawer-panel",this.#t.setAttribute("part","drawer-panel"),this.#t.setAttribute("role","dialog"),this.#t.setAttribute("aria-modal","true"),this.#t.setAttribute("aria-label",n.chatHistory),this.#t.addEventListener("keydown",i=>this.#b(i));let o=document.createElement("div");o.className="drawer-header",o.setAttribute("part","drawer-header"),this.#n=document.createElement("span"),this.#n.className="drawer-title",this.#n.setAttribute("part","drawer-title"),this.#n.textContent=n.chats,this.#o=document.createElement("button"),this.#o.type="button",this.#o.className="drawer-new",this.#o.setAttribute("part","drawer-new"),this.#o.textContent=n.newChat,this.#o.addEventListener("click",()=>{this.close(),this.#e.onNew()}),this.#u=document.createElement("button"),this.#u.type="button",this.#u.className="drawer-close",this.#u.setAttribute("part","drawer-close"),this.#u.title=n.closeHistory,this.#u.setAttribute("aria-label",n.closeHistory),this.#u.append(document.createTextNode("\xD7")),this.#u.addEventListener("click",()=>this.close()),o.append(this.#n,this.#o,this.#u),this.#c=document.createElement("input"),this.#c.type="search",this.#c.className="drawer-filter",this.#c.setAttribute("part","drawer-filter"),this.#c.placeholder=n.searchConversations,this.#c.setAttribute("aria-label",n.searchConversations),this.#c.addEventListener("input",()=>{this.#h=this.#c.value.trim().toLowerCase(),this.#g()}),this.#r=document.createElement("div"),this.#r.className="drawer-list",this.#r.setAttribute("part","drawer-list"),this.#t.append(o,this.#c,this.#r),this.element.append(r,this.#t)}setRelativeTimeFormatter(e){this.#i=e}#f(e){return this.#i!==null?this.#i(e):Zr(e,void 0,this.#a)}setStrings(e){this.#a=e,this.#t.setAttribute("aria-label",e.chatHistory),this.#n.textContent=e.chats,this.#o.textContent=e.newChat,this.#u.title=e.closeHistory,this.#u.setAttribute("aria-label",e.closeHistory),this.#c.placeholder=e.searchConversations,this.#c.setAttribute("aria-label",e.searchConversations),this.#g()}isOpen(){return!this.element.hidden}open(){this.isOpen()||(this.#s=this.#m(),this.element.hidden=!1,this.#o.focus())}close(){this.isOpen()&&(this.element.hidden=!0,this.#s?.focus(),this.#s=null)}toggle(){this.isOpen()?this.close():this.open()}#m(){return this.element.getRootNode().activeElement}#b(e){if(e.key==="Escape"){e.preventDefault(),this.close();return}if(e.key!=="Tab")return;let n=Array.from(this.#t.querySelectorAll("button, input, [tabindex]")).filter(a=>!a.hidden),r=n[0],o=n[n.length-1],i=this.#m();e.shiftKey&&i===r?(e.preventDefault(),o?.focus()):!e.shiftKey&&i===o&&(e.preventDefault(),r?.focus())}setThreads(e,n){this.#l=e,this.#p=n,this.#g()}#g(){this.#r.replaceChildren();let e=this.#l.length<wT;this.#c.hidden=e,e&&this.#h!==""&&(this.#c.value="",this.#h="");let n=this.#y();if(n.length===0){let r=document.createElement("div");r.className="drawer-empty",r.setAttribute("part","drawer-empty"),r.textContent=this.#l.length===0?this.#a.noConversations:this.#a.noMatches,this.#r.appendChild(r);return}for(let r of n)this.#r.appendChild(this.#d(r))}#y(){return this.#h===""?this.#l:this.#l.filter(e=>e.title.toLowerCase().includes(this.#h)||e.preview.toLowerCase().includes(this.#h))}#d(e){let n=document.createElement("div");n.className="drawer-row",n.setAttribute("part","drawer-row"),e.threadId===this.#p&&n.classList.add("drawer-row--active");let r=document.createElement("button");r.type="button",r.className="drawer-row-select",r.setAttribute("part","drawer-row-select");let o=document.createElement("span");o.className="drawer-row-title",o.setAttribute("part","drawer-row-title"),o.textContent=e.title;let i=document.createElement("span");i.className="drawer-row-time",i.setAttribute("part","drawer-row-time"),i.textContent=this.#f(e.updatedAt);let a=document.createElement("span");a.className="drawer-row-preview",a.setAttribute("part","drawer-row-preview"),a.textContent=e.preview,r.append(o,i,a),r.addEventListener("click",()=>{this.close(),this.#e.onSelect(e.threadId)});let s=document.createElement("button");s.type="button",s.className="drawer-row-rename",s.setAttribute("part","drawer-row-rename"),s.title=this.#a.rename,s.setAttribute("aria-label",this.#a.renameConversation),s.textContent="\u270E",s.addEventListener("click",()=>this.#_(n,e));let c=document.createElement("button");c.type="button",c.className="drawer-row-delete",c.setAttribute("part","drawer-row-delete"),c.title=this.#a.delete,c.setAttribute("aria-label",this.#a.deleteConversation),c.textContent="\u{1F5D1}",c.addEventListener("click",()=>this.#w(n,e));let l=document.createElement("div");return l.className="drawer-row-actions",l.setAttribute("part","drawer-row-actions"),l.append(s,c),n.append(r,l),n}#_(e,n){let r=document.createElement("input");r.type="text",r.className="drawer-rename-input",r.setAttribute("part","drawer-rename-input"),r.value=n.title;let o=!1,i=()=>{if(o)return;o=!0;let s=r.value.trim();s===""||s===n.title?this.#g():this.#e.onRename(n.threadId,s)},a=()=>{o||(o=!0,this.#g())};r.addEventListener("keydown",s=>{s.key==="Enter"?(s.preventDefault(),i()):s.key==="Escape"&&(s.preventDefault(),s.stopPropagation(),a())}),r.addEventListener("blur",()=>i()),e.replaceChildren(r),r.focus(),r.select()}#w(e,n){let r=document.createElement("div");r.className="drawer-confirm",r.setAttribute("part","drawer-confirm");let o=document.createElement("span");o.className="drawer-confirm-label",o.setAttribute("part","drawer-confirm-label"),o.textContent=this.#a.deletePrompt;let i=document.createElement("button");i.type="button",i.className="drawer-confirm-yes",i.setAttribute("part","drawer-confirm-yes"),i.textContent=this.#a.delete,i.addEventListener("click",()=>this.#e.onDelete(n.threadId));let a=document.createElement("button");a.type="button",a.className="drawer-confirm-no",a.setAttribute("part","drawer-confirm-no"),a.textContent=this.#a.cancel,a.addEventListener("click",()=>this.#g()),r.append(o,i,a),e.replaceChildren(r)}};var as=class{#e=null;open(){return this.#e=new AbortController,this.#e.signal}close(){this.#e=null}abort(){this.#e?.abort()}};function Wr(t){return t!=="page"}var ET=new Set([null,"","floating","bottom-left"]);function ss(t){return ET.has(t)}function zt(t,e,n=ot){let r=Math.min(n,Math.max(0,(e.width-t.width)/2)),o=Math.min(n,Math.max(0,(e.height-t.height)/2));return{left:Math.max(e.left+r,Math.min(t.left,e.left+e.width-t.width-r)),top:Math.max(e.top+o,Math.min(t.top,e.top+e.height-t.height-o))}}function qr(t,e,n=Zt){let r=t.right-t.left,o=t.bottom-t.top,i=Math.max(e.left+n,Math.min(t.left,e.left+e.width-n-r)),a=Math.max(e.top+n,Math.min(t.top,e.top+e.height-n-o));return{left:i,top:a,right:i+r,bottom:a+o}}var xT=4,ST=16,_T=64;function pb(t,e){let n=!1,{signal:r}=e;t.addEventListener("click",a=>{!n||a.detail===0||(n=!1,a.stopPropagation(),a.preventDefault())},{capture:!0,signal:r}),t.addEventListener("pointerdown",a=>{if(n=!1,!e.enabled())return;let s=e.rect(),c=a.clientX,l=a.clientY,u=!1,f=h=>{let p=h.clientX-c,E=h.clientY-l;if(!u&&Math.hypot(p,E)<xT)return;u=!0,t.setAttribute("data-dragging","true");let g=zt({...s,left:s.left+p,top:s.top+E},e.viewport());e.apply(g.left,g.top)},m=h=>{if(window.removeEventListener("pointermove",f),window.removeEventListener("pointerup",m),window.removeEventListener("pointercancel",m),!u)return;t.removeAttribute("data-dragging"),n=!0;let p=zt({...s,left:s.left+(h.clientX-c),top:s.top+(h.clientY-l)},e.viewport());e.commit(p.left,p.top)};window.addEventListener("pointermove",f),window.addEventListener("pointerup",m),window.addEventListener("pointercancel",m)},{signal:r});let o=null,i=()=>{if(o===null)return;let{left:a,top:s}=o;o=null,e.commit(a,s)};t.addEventListener("keydown",a=>{if(!e.enabled())return;let s=a.shiftKey?_T:ST,c=e.rect(),l=null;if(a.key==="ArrowLeft"?l={left:c.left-s,top:c.top}:a.key==="ArrowRight"?l={left:c.left+s,top:c.top}:a.key==="ArrowUp"?l={left:c.left,top:c.top-s}:a.key==="ArrowDown"&&(l={left:c.left,top:c.top+s}),l===null)return;a.preventDefault();let u=zt({...c,...l},e.viewport());e.apply(u.left,u.top),o=u},{signal:r}),t.addEventListener("keyup",i,{signal:r}),t.addEventListener("blur",i,{signal:r})}function Yr(t,e,n,r){return{hostInset:hb({top:n.y==="top"?t.top:null,right:n.x==="right"?r.width-t.right:null,bottom:n.y==="bottom"?r.height-t.bottom:null,left:n.x==="left"?t.left:null}),launcherInset:hb({top:n.y==="top"?e.top-t.top:null,right:n.x==="right"?t.right-(e.left+e.width):null,bottom:n.y==="bottom"?t.bottom-(e.top+e.height):null,left:n.x==="left"?e.left-t.left:null})}}function hb(t){let e=n=>n===null?"auto":`${Math.round(n)}px`;return`${e(t.top)} ${e(t.right)} ${e(t.bottom)} ${e(t.left)}`}function Zu(t,e,n,r,o=ot){let i=n.left+n.width-t.left,a=t.left+t.width-n.left,s=n.top+n.height-t.top,c=t.top+t.height-n.top,l={x:i>=a?"left":"right",y:s>=c?"top":"bottom"},u=l.x==="left"?t.left:t.left+t.width-e.width,f=l.y==="top"?t.top:t.top+t.height-e.height,m=qr({left:u,top:f,right:u+e.width,bottom:f+e.height},n,o);return{corner:l,...Yr(m,t,l,r)}}var TT="button, a[href], input, select, textarea, [contenteditable]";function fb(t,e){t.addEventListener("pointerdown",n=>{if(n.button!==0||!e.enabled()||AT(n,t))return;let r=e.rect(),o=n.clientX,i=n.clientY,a=!1,s=(u,f)=>{let m=u-o,h=f-i;return{left:r.left+m,top:r.top+h,right:r.right+m,bottom:r.bottom+h}},c=u=>{!a&&Math.hypot(u.clientX-o,u.clientY-i)<4||(a=!0,t.setAttribute("data-dragging","true"),e.apply(s(u.clientX,u.clientY),r))},l=u=>{window.removeEventListener("pointermove",c),window.removeEventListener("pointerup",l),window.removeEventListener("pointercancel",l),a&&(t.removeAttribute("data-dragging"),e.commit(s(u.clientX,u.clientY),r))};n.preventDefault(),window.addEventListener("pointermove",c),window.addEventListener("pointerup",l),window.addEventListener("pointercancel",l)})}function AT(t,e){let n=t.composedPath();return n.slice(0,n.indexOf(e)).some(r=>r instanceof Element&&r.matches(TT))}function gb(t,e){let n=document.createElement("div");n.className=`resize-handle resize-handle--${ls(t)}`,n.setAttribute("part",`resize-handle resize-handle-${ls(t)}`),n.setAttribute("role","separator"),t.x===void 0?n.setAttribute("aria-orientation","horizontal"):t.y===void 0&&n.setAttribute("aria-orientation","vertical"),n.setAttribute("aria-label",e.label),n.tabIndex=0,n.addEventListener("pointerdown",i=>{let a=e.axis();if(a==="none"||!mb(t,a))return;let s=e.rect(),c=u=>{e.apply(Bu(t,a,s,u.clientX,u.clientY))},l=u=>{window.removeEventListener("pointermove",c),window.removeEventListener("pointerup",l),n.removeAttribute("data-dragging"),e.commit(Bu(t,a,s,u.clientX,u.clientY))};n.setAttribute("data-dragging","true"),window.addEventListener("pointermove",c),window.addEventListener("pointerup",l),i.preventDefault()});let r=null,o=()=>{if(r===null)return;let i=r;r=null,e.commit(i)};return n.addEventListener("keydown",i=>{let a=e.axis();if(a==="none"||!mb(t,a))return;let s=i.shiftKey?64:16,c=e.rect(),l=kT[i.key];if(l===void 0||l.x!==0&&t.x===void 0||l.y!==0&&t.y===void 0)return;i.preventDefault();let u=(t.x==="left"?c.left:c.right)+l.x*s,f=(t.y==="top"?c.top:c.bottom)+l.y*s,m=Bu(t,a,c,u,f);e.apply(m),r=m}),n.addEventListener("keyup",o),n.addEventListener("blur",o),n}var kT={ArrowLeft:{x:-1,y:0},ArrowRight:{x:1,y:0},ArrowUp:{x:0,y:-1},ArrowDown:{x:0,y:1}};function ls(t){return[t.y,t.x].filter(e=>e!==void 0).join("-")}function mb(t,e){return e==="both"||t.x!==void 0}function Bu(t,e,n,r,o){let i=t.x==="left"?Math.min(r,n.right-280):n.left,a=t.x==="right"?Math.max(r,n.left+280):n.right,s=e==="both",c=s&&t.y==="top"?Math.min(o,n.bottom-240):n.top,l=s&&t.y==="bottom"?Math.max(o,n.top+240):n.bottom;return{left:i,top:c,right:a,bottom:l}}var vb="ag-ui-chat:size",Vu="ag-ui-chat:launcher";function IT(t){if(typeof t!="object"||t===null)return null;let{left:e,top:n}=t;return typeof e=="number"&&typeof n=="number"?{left:e,top:n}:null}function bb(t,e){return t.width>=e.width-1&&t.height>=e.height-1}function yb(t,e,n){let r=o=>`${Math.round(o)}px`;return[t.y==="top"?r(e.top):"auto",t.x==="right"?r(n.width-e.right):"auto",t.y==="bottom"?r(n.height-e.bottom):"auto",t.x==="left"?r(e.left):"auto"].join(" ")}var RT=[{y:"top"},{y:"bottom"},{x:"left"},{x:"right"},{x:"left",y:"top"},{x:"right",y:"top"},{x:"left",y:"bottom"},{x:"right",y:"bottom"}],cs=class{#e;constructor(e){this.#e=e}enablePanelDrag(e){fb(e,{enabled:()=>!this.#e.collapsed()&&this.#f(),rect:()=>this.#e.element.getBoundingClientRect(),apply:(n,r)=>this.#w(n,r),commit:(n,r)=>this.#A(n,r)})}enableLauncherDrag(e){pb(this.#e.launcher,{signal:e,enabled:()=>this.#e.collapsed()&&this.#f(),rect:()=>this.#g(),viewport:()=>this.#m(),apply:(n,r)=>this.#d(n,r),commit:(n,r)=>this.#_(n,r)})}mountResizeGrips(e){for(let n of RT){let r=gb(n,{axis:()=>this.#p(),rect:()=>this.#e.element.getBoundingClientRect(),apply:o=>this.#O(n,o),commit:o=>this.#G(n,o),label:this.#e.strings().resizePanel});r.tabIndex=-1,r.setAttribute("aria-hidden","true"),this.#i.set(ls(n),r),e.appendChild(r)}this.#P()}restoreSize(){this.#s(this.#L())}probe=document.createElement("div");#t=null;#n=null;#o=null;#r={x:"right",y:"bottom"};#i=new Map;#a(e){let n=this.#m(),r=n.left+ot,o=n.top+ot,i=n.left+n.width-ot,a=n.top+n.height-ot;return{left:Math.min(Math.max(e.left,r),e.right),top:Math.min(Math.max(e.top,o),e.bottom),right:Math.max(Math.min(e.right,i),e.left),bottom:Math.max(Math.min(e.bottom,a),e.top)}}dragging(){return this.#e.launcher.hasAttribute("data-dragging")||this.#e.root.querySelector(".header[data-dragging]")!==null}describeSurface(){let e=this.#e.element.getBoundingClientRect(),n=this.#m(),r=bb(e,n);return{placement:this.#e.element.getAttribute("placement"),collapsed:this.#e.collapsed(),collapsible:this.#e.collapsible(),movable:this.#f()&&!r,draggable:this.#f(),fullBleed:r,box:{left:Math.round(e.left),top:Math.round(e.top),width:Math.round(e.width),height:Math.round(e.height)},viewport:{left:Math.round(n.left),top:Math.round(n.top),width:Math.round(n.width),height:Math.round(n.height)}}}moveTo(e,n={}){if(!this.#f())return!1;let r=n.announce===!0?this.#l():null,o=this.#m(),i=this.#e.element.getBoundingClientRect();if(bb(i,o))return!1;let[a,s]=e.split("-"),c=o.left+Zt,l=o.top+Zt,u=s==="left"?c:Math.max(c,o.left+o.width-Zt-i.width),f=a==="top"?l:Math.max(l,o.top+o.height-Zt-i.height),m={left:u,top:f,right:u+i.width,bottom:f+i.height},h=this.#e.launcher.offsetWidth,p=this.#e.launcher.offsetHeight;return this.#z(m,{left:s==="left"?m.left:m.right-h,top:a==="top"?m.top:m.bottom-p,width:h,height:p}),this.#E(),r!==null&&this.#e.announceSurfaceChange(this.#e.strings().chatMoved,r),!0}#l(){let e=this.#e.element.style.getPropertyValue("--ag-ui-inset"),n=this.#e.element.style.getPropertyValue("--ag-ui-launcher-inset"),r=this.#e.element.getAttribute("data-expand-corner"),o=this.#t,i=this.#n,a=this.#o;return()=>{this.#h("--ag-ui-inset",e),this.#h("--ag-ui-launcher-inset",n),r===null?this.#e.element.removeAttribute("data-expand-corner"):this.#e.element.setAttribute("data-expand-corner",r),this.#t=o,this.#n=i,this.#o=a,o===null?this.#e.clearPreference(Vu):this.#E(),this.syncResizeAnchor()}}#p(){switch(this.#e.element.getAttribute("placement")){case"full":case"page":return"none";case"sidebar":case"side":return"width";default:return"both"}}#u(){let e=this.#e.element.getBoundingClientRect(),n=this.#e.element.style.getPropertyValue("--ag-ui-width"),r=this.#e.element.style.getPropertyValue("--ag-ui-height"),o=this.#c(e,-1),i=o.x===null||o.y===null?this.#c(e,1):o;return this.#h("--ag-ui-width",n),this.#h("--ag-ui-height",r),{x:o.x??i.x??"right",y:o.y??i.y??"bottom"}}#c(e,n){this.#s({width:e.width+n,height:e.height+n});let r=this.#e.element.getBoundingClientRect(),o=(i,a)=>Math.abs(i-a)>=.5;return{x:o(r.width,e.width)?o(r.left,e.left)?"right":"left":null,y:o(r.height,e.height)?o(r.top,e.top)?"bottom":"top":null}}syncResizeAnchor(){if(!this.#e.connected())return;let e=this.#o??this.#u();this.#r=e,this.#e.element.setAttribute("data-resize-anchor",`${e.y}-${e.x}`),this.#P()}#h(e,n){if(n===""){this.#e.element.style.removeProperty(e);return}this.#e.element.style.setProperty(e,n)}#s(e){let n=this.#p();n!=="none"&&(e.width!==void 0&&this.#e.element.style.setProperty("--ag-ui-width",`${e.width}px`),e.height!==void 0&&n==="both"&&this.#e.element.style.setProperty("--ag-ui-height",`${e.height}px`))}releaseOwnedAxes(){let e=this.#p();e!=="both"&&this.#e.element.style.removeProperty("--ag-ui-height"),e==="none"&&this.#e.element.style.removeProperty("--ag-ui-width")}#f(){return this.#e.element.getAttribute("data-launcher-drag")!=="false"&&ss(this.#e.element.getAttribute("placement"))}#m(){let e=window.visualViewport,n=e?.width??window.innerWidth,r=e?.height??window.innerHeight,o=getComputedStyle(this.probe),i=c=>{let l=Number.parseFloat(o.getPropertyValue(c));return Number.isFinite(l)?l:0},a=i("padding-left"),s=i("padding-top");return{left:a,top:s,width:Math.max(0,n-a-i("padding-right")),height:Math.max(0,r-s-i("padding-bottom"))}}#b(){let e=document.documentElement;return{width:e.clientWidth||window.innerWidth,height:e.clientHeight||window.innerHeight}}publishVisualViewport(){let e=window.visualViewport;if(e==null)return;let n=this.#b().height;if(Math.abs(e.height-n)<1){this.#e.element.style.removeProperty("--ag-ui-visual-viewport-height"),this.#e.element.style.removeProperty("--ag-ui-visual-viewport-inset-bottom"),this.#e.element.style.removeProperty("--ag-ui-visual-viewport-inset-top");return}this.#e.element.style.setProperty("--ag-ui-visual-viewport-height",`${Math.round(e.height)}px`);let r=n-e.height-e.offsetTop;this.#e.element.style.setProperty("--ag-ui-visual-viewport-inset-bottom",`${Math.max(0,Math.round(r))}px`),this.#e.element.style.setProperty("--ag-ui-visual-viewport-inset-top",`${Math.max(0,Math.round(e.offsetTop))}px`)}#g(){let e=this.#e.launcher.offsetWidth,n=this.#e.launcher.offsetHeight,r=this.#t;if(r!==null)return{left:r.left,top:r.top,width:e,height:n};let o=this.#e.launcher.getBoundingClientRect();return{left:o.left+o.width/2-e/2,top:o.top+o.height/2-n/2,width:e,height:n}}#y(e){if(!this.#f())return;this.#t=e,this.#n=null;let n=this.#e.element.getBoundingClientRect(),r=Zu(this.#g(),{width:n.width,height:n.height},this.#m(),this.#b());this.#e.element.style.setProperty("--ag-ui-inset",r.hostInset),this.#e.element.style.setProperty("--ag-ui-launcher-inset",r.launcherInset),this.#o=r.corner,this.#e.element.setAttribute("data-expand-corner",`${r.corner.y}-${r.corner.x}`),this.syncResizeAnchor()}#d(e,n){this.#y({left:e,top:n})}#_(e,n){this.#d(e,n),this.#E()}#w(e,n){if(!this.#f())return{held:e,launcher:null};if(this.#t===null){let c=this.#g();this.#t={left:c.left,top:c.top}}let r=this.#t,o=qr(e,this.#m(),ot),i=this.#o??this.#r;this.#e.element.style.setProperty("--ag-ui-inset",yb(i,o,this.#b())),this.#n={left:o.left,top:o.top};let a={...this.#g(),left:r.left+(o.left-n.left),top:r.top+(o.top-n.top)},s={...a,...zt(a,this.#m())};return this.#e.element.style.setProperty("--ag-ui-launcher-inset",Yr(o,s,i,this.#b()).launcherInset),{held:o,launcher:s}}#A(e,n){let{held:r,launcher:o}=this.#w(e,n);o!==null&&(this.#z(r,o),this.#E())}#z(e,n){let r=this.#m(),o=this.#b(),i={width:e.right-e.left,height:e.bottom-e.top},{corner:a}=Zu(n,i,r,o),s=Yr(e,n,a,o);this.#e.element.style.setProperty("--ag-ui-inset",s.hostInset),this.#e.element.style.setProperty("--ag-ui-launcher-inset",s.launcherInset),this.#t={left:n.left,top:n.top},this.#n={left:e.left,top:e.top},this.#o=a,this.#e.element.setAttribute("data-expand-corner",`${a.y}-${a.x}`),this.syncResizeAnchor()}#k(e){if(!this.#f())return;let n=this.#e.element.getBoundingClientRect(),r=qr({left:e.left,top:e.top,right:e.left+n.width,bottom:e.top+n.height},this.#m(),ot),o=this.#g(),i={...o,left:o.left+(r.left-e.left),top:o.top+(r.top-e.top)};this.#z(r,{...i,...zt(i,this.#m())})}#E(){let e=this.#t;if(e===null)return;let n=this.#n;this.#e.writePreference(Vu,JSON.stringify(n===null?e:{...e,panel:n}))}restoreLauncherPosition(){let e=this.#I(),n=this.#t??e;if(n===null)return;let r=this.#n??e?.panel??null;if(r!==null){this.#t={left:n.left,top:n.top},this.#k(r);return}let o=this.#g();this.#y(zt({...o,left:n.left,top:n.top},this.#m()))}#I(){let e=this.#e.readPreference(Vu);if(e===null)return null;try{let n=JSON.parse(e);if(typeof n!="object"||n===null)return null;let{left:r,top:o,panel:i}=n;if(typeof r!="number"||typeof o!="number")return null;let a=IT(i);return a===null?{left:r,top:o}:{left:r,top:o,panel:a}}catch{return null}}releaseLauncherPosition(){this.#f()||(this.#t=null,this.#n=null,this.#o=null,this.#e.element.style.removeProperty("--ag-ui-inset"),this.#e.element.style.removeProperty("--ag-ui-launcher-inset"),this.#e.element.removeAttribute("data-expand-corner"))}#O(e,n){if(n=this.#a(n),this.#s({width:n.right-n.left,height:n.bottom-n.top}),e.x!==this.#r.x&&e.y!==this.#r.y)return n;let r=this.#r;if(this.#e.element.style.setProperty("--ag-ui-inset",yb(r,n,this.#b())),this.#t!==null){let o=this.#e.launcher.offsetWidth;this.#t={left:r.x==="left"?n.left:n.right-o,top:r.y==="top"?n.top:n.bottom-o}}return this.#n!==null&&(this.#n={left:n.left,top:n.top}),n}#G(e,n){let r=this.#O(e,n);this.#v({width:r.right-r.left,height:r.bottom-r.top}),this.#E(),this.syncResizeAnchor()}#P(){let e=`${this.#r.y==="top"?"bottom":"top"}-${this.#r.x==="left"?"right":"left"}`;for(let[n,r]of this.#i){let o=n===e;r.tabIndex=o?0:-1,o?r.removeAttribute("aria-hidden"):r.setAttribute("aria-hidden","true")}}#v(e){let n={...this.#L(),...e};this.#e.writePreference(vb,JSON.stringify(n))}#L(){let e=this.#e.readPreference(vb);if(e===null)return{};try{let n=JSON.parse(e);return typeof n=="object"&&n!==null?n:{}}catch{return{}}}};var us=class{region=document.createElement("div");#e=null;mount(){this.region.className="sr-only",this.region.setAttribute("role","status"),this.region.setAttribute("aria-live","polite"),this.region.setAttribute("aria-atomic","true")}announce(e){this.#e!==null&&clearTimeout(this.#e),this.region.textContent=e,this.#e=setTimeout(()=>{this.#e=null,this.region.textContent=""},mp)}dispose(){this.#e!==null&&(clearTimeout(this.#e),this.#e=null)}};function ds(t,e,n,r){let o=document.createElement("div");o.className=`run-notice run-notice--${n}`,o.setAttribute("part",`run-notice run-notice-${n}`),o.setAttribute("role","status");let i=document.createElement("span");i.className="run-notice-icon",i.setAttribute("part","run-notice-icon"),i.textContent=t,i.setAttribute("aria-hidden","true");let a=document.createElement("span");if(a.className="run-notice-text",a.setAttribute("part","run-notice-text"),a.textContent=e,o.append(i,a),r!==void 0){let s=document.createElement("button");s.type="button",s.className="run-notice-undo",s.setAttribute("part","run-notice-undo"),s.textContent=r.label,s.addEventListener("click",()=>{s.disabled=!0,r.onActivate()}),o.append(s)}return o}var ps=class{element;get agent(){return this.#r}#e;#t;#n;#o=new Map;#r=null;constructor(e=pe){this.element=document.createElement("div"),this.element.className="subagent",this.element.setAttribute("part","subagent"),this.#e=document.createElement("button"),this.#e.type="button",this.#e.className="subagent-row",this.#e.setAttribute("part","subagent-row"),this.#e.setAttribute("aria-expanded","false"),this.#e.disabled=!0;let n=document.createElement("span");n.className="subagent-icon",n.setAttribute("part","subagent-icon"),n.setAttribute("aria-hidden","true"),this.#t=document.createElement("span"),this.#t.className="subagent-status",this.#t.setAttribute("part","subagent-status"),this.#t.textContent=e.subAgentWorking,this.#e.append(n,this.#t),this.#n=document.createElement("div"),this.#n.className="subagent-steps",this.#n.setAttribute("part","subagent-steps"),this.#n.setAttribute("role","list"),this.#n.setAttribute("aria-label",e.subAgentSteps),this.#n.hidden=!0,this.#e.addEventListener("click",()=>{this.#l(this.#e.getAttribute("aria-expanded")!=="true")}),this.element.append(this.#e,this.#n)}report(e){this.element.setAttribute("data-phase",e.phase),e.agent!==null&&(this.#r=e.agent,this.element.setAttribute("data-agent",e.agent)),e.status!==null&&(this.#t.textContent=e.status),e.tool!==null&&this.#i(e.tool)}#i(e){let n=this.#o.get(e.toolCallId)??this.#a(e);if(e.ok===null){n.removeAttribute("data-ok");return}n.setAttribute("data-ok",String(e.ok))}#a(e){let n=document.createElement("div");n.className="subagent-step",n.setAttribute("part","subagent-step"),n.setAttribute("role","listitem"),n.setAttribute("data-tool-call-id",e.toolCallId);let r=document.createElement("span");r.className="subagent-step-icon",r.setAttribute("part","subagent-step-icon"),r.setAttribute("aria-hidden","true");let o=document.createElement("span");return o.className="subagent-step-name",o.setAttribute("part","subagent-step-name"),o.textContent=e.name,n.append(r,o),this.#n.appendChild(n),this.#o.set(e.toolCallId,n),this.#e.disabled=!1,n}#l(e){this.#n.hidden=!e,this.#e.setAttribute("aria-expanded",String(e))}};var CT=Object.values(An);function wb(t){return typeof t!="object"||t===null||Array.isArray(t)?null:t}function Xr(t){return typeof t=="string"&&t!==""?t:null}function NT(t){let e=wb(t);if(e===null)return null;let n=Xr(e.toolCallId),r=Xr(e.name),o=e.ok;return n===null||r===null||o!==null&&typeof o!="boolean"?null:{toolCallId:n,name:r,ok:o}}function Eb(t){let e=wb(t);if(e===null)return null;let n=Xr(e.delegationId),r=e.phase;return n===null||typeof r!="string"||!CT.includes(r)?null:{delegationId:n,phase:r,agent:Xr(e.agent),status:Xr(e.status),tool:NT(e.tool)}}var hs=class{#e;#t=new Map;#n=new Map;constructor(e){this.#e=e}report(e){let n=Eb(e);n!==null&&this.#i(n)}start(e,n,r){r!==null&&(this.#n.set(e,r),this.#i({delegationId:r,agent:n===""?null:n,phase:An.STARTED,status:le(this.#e.strings().subAgentDelegatedTo,{agent:n}),tool:null}))}finish(e){this.#o(e,An.FINISHED,null)}fail(e,n){this.#o(e,An.FAILED,n===""?this.#e.strings().subAgentFailed:n)}clear(){this.#t.clear(),this.#n.clear()}#o(e,n,r){let o=this.#n.get(e);if(o===void 0)return;let i=this.#t.get(o)?.agent??null;this.#i({delegationId:o,agent:i,phase:n,status:r===null?this.#r(i):r,tool:null})}#r(e){let n=this.#e.strings();return e===null?n.subAgentWorking:le(n.subAgentFinished,{agent:e})}#i(e){let n=this.#e.card(e.delegationId);if(n===void 0)return;let r=this.#t.get(e.delegationId);r===void 0&&(r=new ps(this.#e.strings()),this.#t.set(e.delegationId,r),n.subagentSlot.appendChild(r.element)),r.report(e),this.#e.follow()}};function ju(t){return{[J.PENDING]:t.toolRunning,[J.DEFERRED]:t.toolDeferred,[J.DONE]:t.toolDone,[J.ERROR]:t.toolError,[J.DECLINED]:t.toolDeclined,[J.INTERRUPTED]:t.toolInterrupted}}function OT(t){return{[J.DONE]:t.resultLabel,[J.ERROR]:t.errorLabel,[J.DECLINED]:t.declinedLabel,[J.INTERRUPTED]:t.interruptedLabel}}function PT(t){try{return JSON.stringify(JSON.parse(t),null,2)}catch{return t}}var Kr=class{element;approvalSlot;subagentSlot;#e;#t;#n;#o;#r;#i;#a;args;#l;#p;#u=!1;constructor(e,n,r,o=pe,i={}){this.#a=o,this.args=n,this.#l=e,this.#p=i.formatPayload??null,this.element=document.createElement("div"),this.element.className="tool-call",this.element.setAttribute("part","tool-card"),this.element.setAttribute("data-tool-name",e),this.element.setAttribute("data-status",J.PENDING),this.element.setAttribute("data-expanded","false");let a=document.createElement("div");a.className="tool-call-head",a.setAttribute("part","tool-card-head");let s=document.createElement("span");s.className="tool-call-icon",s.setAttribute("part","tool-card-icon"),s.setAttribute("aria-hidden","true");let c=document.createElement("span");c.className="tool-call-name",c.setAttribute("part","tool-card-name"),c.textContent=r??e,this.#e=document.createElement("span"),this.#e.className="tool-call-status",this.#e.setAttribute("part","tool-card-status"),this.#e.textContent=ju(o)[J.PENDING],this.#t=document.createElement("span"),this.#t.className="tool-call-decision",this.#t.setAttribute("part","tool-card-decision"),this.#t.hidden=!0,a.append(s,c,this.#e,this.#t);let l=this.#h("args",o.argumentsLabel);this.#c(l.body,{kind:"arguments",toolName:e,args:n},JSON.stringify(n,null,2)),l.root.hidden=Object.keys(n).length===0;let u=this.#h("result",o.resultLabel);this.#o=u.root,this.#r=u.label,this.#i=u.body,u.root.hidden=!0,this.#n=document.createElement("button"),this.#n.type="button",this.#n.className="tool-call-toggle",this.#n.setAttribute("part","tool-card-toggle"),this.#n.setAttribute("aria-expanded","false"),this.#n.textContent=o.details,this.#n.addEventListener("click",()=>this.#f(!this.#s()));let f=document.createElement("div");f.className="tool-call-body",f.setAttribute("part","tool-card-body"),f.append(l.root,u.root),this.approvalSlot=document.createElement("div"),this.approvalSlot.className="tool-call-approval",this.approvalSlot.setAttribute("part","tool-card-approval"),this.subagentSlot=document.createElement("div"),this.subagentSlot.className="tool-call-subagent",this.subagentSlot.setAttribute("part","tool-card-subagent"),this.element.append(a,this.subagentSlot,this.#n,f,this.approvalSlot)}mark(e){this.#u||(this.element.setAttribute("data-status",e),this.#e.textContent=ju(this.#a)[e])}recordDecision(e){this.element.setAttribute("data-decision",e),this.#t.textContent=e==="approved"?this.#a.decisionApproved:this.#a.decisionDeclined,this.#t.hidden=!1}get settled(){return this.#u}settle(e,n){this.#u||(this.#u=!0,this.element.setAttribute("data-status",e),this.#e.textContent=ju(this.#a)[e],this.#r.textContent=OT(this.#a)[e],this.#c(this.#i,{kind:"result",toolName:this.#l,status:e,text:n},PT(n)),this.#o.hidden=!1)}#c(e,n,r){let o=this.#p===null?null:this.#p(n);if(o===null){e.textContent=r;return}if(e.setAttribute("data-formatted","true"),typeof o=="string"){e.textContent=o;return}e.replaceChildren(o)}#h(e,n){let r=document.createElement("div");r.className=`tool-call-section tool-call-section--${e}`,r.setAttribute("part",`tool-card-section tool-card-${e}-section`);let o=document.createElement("span");o.className="tool-call-section-label",o.setAttribute("part",`tool-card-section-label tool-card-${e}-label`),o.textContent=n;let i=document.createElement("pre");return i.className=`tool-call-${e}`,i.setAttribute("part",`tool-card-${e}`),r.append(o,i),{root:r,label:o,body:i}}#s(){return this.element.getAttribute("data-expanded")==="true"}#f(e){this.element.setAttribute("data-expanded",String(e)),this.#n.setAttribute("aria-expanded",String(e))}};var xb=`
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
`;function Sb(t){let e=new CSSStyleSheet;e.replaceSync(xb),t.adoptedStyleSheets=[e]}function fs(t,e,n){let r=document.createElement("slot");return r.name=t,r.className=e,r.innerHTML=n,r}function Jr(t,e,n){let r=document.createElement("button");r.type="button",r.className=`header-btn header-btn--${t}`,r.setAttribute("part",`header-button ${t}-button`),r.title=e,r.setAttribute("aria-label",e);let o=document.createElement("slot");return o.name=`icon-${t}`,o.append(document.createTextNode(n)),r.append(o),r}function ms(t,e,n,r){let o=document.createElement("span");o.className="icon-holder",o.setAttribute("part",e);let i=document.createElement("slot");if(i.name=t,r!==null){let a=document.createElement("img");a.className="icon-img",a.src=r,a.alt="",i.append(a)}else n!==null&&(i.innerHTML=n);return o.append(i),o}function _b(t){return t.getAttribute("data-unread-badge")!=="false"}function Tb(t){return t.getAttribute("data-launcher-icon-url")??t.getAttribute("data-icon-url")}var MT=new Set(["ADDRESS","ARTICLE","ASIDE","BLOCKQUOTE","DD","DIV","DL","DT","FIGCAPTION","FIGURE","FOOTER","H1","H2","H3","H4","H5","H6","HEADER","HR","MAIN","NAV","OL","P","SECTION","UL"]);function gs(t){let e=t.cloneNode(!0);for(let n of Array.from(e.querySelectorAll("button")))n.remove();return{text:DT(Ab(e)),html:e.innerHTML}}function Ab(t){if(t.nodeType===Node.TEXT_NODE)return t.nodeValue.replace(/\s+/g," ");if(t.nodeType!==Node.ELEMENT_NODE)return"";let e=t,n=e.tagName;if(n==="BR")return`
`;if(n==="PRE")return`

${Ib(e)}

`;if(n==="TABLE")return`

${LT(e)}

`;if(n==="UL"||n==="OL")return`

${zT(e,n==="OL")}

`;let r=kb(e);return MT.has(n)?`

${r}

`:r}function kb(t){let e="";for(let n of Array.from(t.childNodes))e+=Ab(n);return e}function zT(t,e){return Array.from(t.children).map((n,r)=>`${e?`${r+1}. `:"- "}${kb(n).trim()}`).join(`
`)}function LT(t){return Array.from(t.querySelectorAll("tr")).map(e=>Array.from(e.children).map(n=>Ib(n).replace(/\s+/g," ").trim()).join("	")).join(`
`)}function Ib(t){return t.textContent}function DT(t){return t.replace(/[^\S\n]+\n/g,`
`).replace(/\n{3,}/g,`

`).trim()}var $T=1500;function qu(t,e){if(Cb(t)!==null)return;let n=vs(t,e.strings),r=e.text;r!==void 0&&n.appendChild(UT(e.strings,r,e.html)),e.onFeedback!==void 0&&n.append(Rb("up",e.strings.feedbackUp,e.onFeedback),Rb("down",e.strings.feedbackDown,e.onFeedback))}function vs(t,e){let n=Cb(t);if(n!==null)return n;let r=document.createElement("div");return r.className="message-actions",r.setAttribute("part","message-actions"),r.setAttribute("role","group"),r.setAttribute("aria-label",e.messageActions),t.after(r),r}function Cb(t){let e=t.nextElementSibling;return e?.classList.contains("message-actions")===!0?e:null}function bs(t,e,n){let r=document.createElement("button");r.type="button",r.className=`message-action message-action--${t}`,r.setAttribute("part",`message-action message-action-${t}`),Wu(r,e);let o=document.createElement("span");return o.className="message-action-icon",o.setAttribute("part",`message-action-icon message-action-icon-${t}`),o.setAttribute("aria-hidden","true"),o.innerHTML=n,r.appendChild(o),r}function Wu(t,e){t.title=e,t.setAttribute("aria-label",e),t.dataset.tooltip=e}function UT(t,e,n){let r=bs("copy",t.copyMessage,sp);return r.addEventListener("click",()=>{HT(e(),n?.()).then(o=>{FT(r,o?t.copied:t.copyFailed,t.copyMessage)})}),r}async function HT(t,e){let n=navigator.clipboard;if(n===void 0)return!1;if(e!==void 0&&typeof ClipboardItem=="function")try{return await n.write([new ClipboardItem({"text/plain":new Blob([t],{type:"text/plain"}),"text/html":new Blob([e],{type:"text/html"})})]),!0}catch{}try{return await n.writeText(t),!0}catch{return!1}}function Rb(t,e,n){let r=bs(t==="up"?"up":"down",e,t==="up"?cp:up);return r.addEventListener("click",()=>{let o=r.getAttribute("aria-pressed")==="true";r.setAttribute("aria-pressed",o?"false":"true"),n(t)}),r.setAttribute("aria-pressed","false"),r}function FT(t,e,n){Wu(t,e),t.classList.add("message-action--confirmed"),setTimeout(()=>{Wu(t,n),t.classList.remove("message-action--confirmed")},$T)}var ys=class{#e;#t=null;constructor(e){this.#e=e}forget(){this.#t=null}attach(e,n={}){let r=this.#o(),o=r.has(Gt.COPY),i=n.rateable!==!1&&r.has(Gt.FEEDBACK);(o||i)&&qu(e,{strings:this.#e.strings(),...o?{text:()=>gs(e).text,html:()=>gs(e).html}:{},...i?{onFeedback:a=>{this.#e.element.dispatchEvent(new CustomEvent(ul,{detail:{content:gs(e).text,rating:a},bubbles:!0,composed:!0}))}}:{}}),r.has(Gt.RETRY)&&this.#n(vs(e,this.#e.strings()))}#n(e){this.#t?.querySelector(".message-action--retry")?.remove();let n=bs("retry",this.#e.strings().retryMessage,lp);n.addEventListener("click",()=>{this.#e.retry()}),e.prepend(n),this.#t=e}#o(){let e=this.#e.element.getAttribute("data-message-actions");return e===null?new Set([Gt.COPY,Gt.RETRY]):new Set(Jn(e))}};function GT(t,e){this.v=t,this.k=e}function Nb(t,e){(e==null||e>t.length)&&(e=t.length);for(var n=0,r=Array(e);n<e;n++)r[n]=t[n];return r}function ZT(t){if(Array.isArray(t))return t}function BT(t,e){var n=t==null?null:typeof Symbol<"u"&&t[Symbol.iterator]||t["@@iterator"];if(n!=null){var r,o,i,a,s=[],c=!0,l=!1;try{if(i=(n=n.call(t)).next,e===0){if(Object(n)!==n)return;c=!1}else for(;!(c=(r=i.call(n)).done)&&(s.push(r.value),s.length!==e);c=!0);}catch(u){l=!0,o=u}finally{try{if(!c&&n.return!=null&&(a=n.return(),Object(a)!==a))return}finally{if(l)throw o}}return s}}function VT(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function jT(t,e){return ZT(t)||BT(t,e)||WT(t,e)||VT()}function WT(t,e){if(t){if(typeof t=="string")return Nb(t,e);var n={}.toString.call(t).slice(8,-1);return n==="Object"&&t.constructor&&(n=t.constructor.name),n==="Map"||n==="Set"?Array.from(t):n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?Nb(t,e):void 0}}function ws(t){var e,n;function r(i,a){try{var s=t[i](a),c=s.value,l=c instanceof GT;Promise.resolve(l?c.v:c).then(function(u){if(l){var f=i==="return"&&c.k?i:"next";if(!c.k||u.done)return r(f,u);u=t[f](u).value}o(!!s.done,u)},function(u){r("throw",u)})}catch(u){o(2,u)}}function o(i,a){i===2?e.reject(a):e.resolve({value:a,done:i}),(e=e.next)?r(e.key,e.arg):n=null}this._invoke=function(i,a){return new Promise(function(s,c){var l={key:i,arg:a,resolve:s,reject:c,next:null};n?n=n.next=l:(e=n=l,r(i,a))})},typeof t.return!="function"&&(this.return=void 0)}ws.prototype[typeof Symbol=="function"&&Symbol.asyncIterator||"@@asyncIterator"]=function(){return this},ws.prototype.next=function(t){return this._invoke("next",t)},ws.prototype.throw=function(t){return this._invoke("throw",t)},ws.prototype.return=function(t){return this._invoke("return",t)};var jb=Object.entries,Ob=Object.setPrototypeOf,qT=Object.isFrozen,YT=Object.getPrototypeOf,XT=Object.getOwnPropertyDescriptor,Re=Object.freeze,Ne=Object.seal,er=Object.create,Wb=typeof Reflect<"u"&&Reflect,td=Wb.apply,nd=Wb.construct;Re||(Re=function(e){return e});Ne||(Ne=function(e){return e});td||(td=function(e,n){for(var r=arguments.length,o=new Array(r>2?r-2:0),i=2;i<r;i++)o[i-2]=arguments[i];return e.apply(n,o)});nd||(nd=function(e){for(var n=arguments.length,r=new Array(n>1?n-1:0),o=1;o<n;o++)r[o-1]=arguments[o];return new e(...r)});var hn=ke(Array.prototype.forEach);Array.prototype.indexOf;var KT=ke(Array.prototype.lastIndexOf),Pb=ke(Array.prototype.pop),Qr=ke(Array.prototype.push);Array.prototype.slice;var JT=ke(Array.prototype.splice),tr=Array.isArray,no=ke(String.prototype.toLowerCase),Yu=ke(String.prototype.toString),Mb=ke(String.prototype.match),eo=ke(String.prototype.replace),zb=ke(String.prototype.indexOf),QT=ke(String.prototype.trim),eA=ke(Number.prototype.toString),tA=ke(Boolean.prototype.toString),Lb=typeof BigInt>"u"?null:ke(BigInt.prototype.toString),Db=typeof Symbol>"u"?null:ke(Symbol.prototype.toString),Ze=ke(Object.prototype.hasOwnProperty),to=ke(Object.prototype.toString),$e=ke(RegExp.prototype.test),Lt=nA(TypeError);function ke(t){return function(e){e instanceof RegExp&&(e.lastIndex=0);for(var n=arguments.length,r=new Array(n>1?n-1:0),o=1;o<n;o++)r[o-1]=arguments[o];return td(t,e,r)}}function nA(t){return function(){for(var e=arguments.length,n=new Array(e),r=0;r<e;r++)n[r]=arguments[r];return nd(t,n)}}function re(t,e){let n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:no;if(Ob&&Ob(t,null),!tr(e))return t;let r=e.length;for(;r--;){let o=e[r];if(typeof o=="string"){let i=n(o);i!==o&&(qT(e)||(e[r]=i),o=i)}t[o]=!0}return t}function rA(t){for(let e=0;e<t.length;e++)Ze(t,e)||(t[e]=null);return t}function Ke(t){let e=er(null);for(let r of jb(t)){var n=jT(r,2);let o=n[0],i=n[1];Ze(t,o)&&(tr(i)?e[o]=rA(i):i&&typeof i=="object"&&i.constructor===Object?e[o]=Ke(i):e[o]=i)}return e}function oA(t){switch(typeof t){case"string":return t;case"number":return eA(t);case"boolean":return tA(t);case"bigint":return Lb?Lb(t):"0";case"symbol":return Db?Db(t):"Symbol()";case"undefined":return to(t);case"function":case"object":{if(t===null)return to(t);let e=t,n=rt(e,"toString");if(typeof n=="function"){let r=n(e);return typeof r=="string"?r:to(r)}return to(t)}default:return to(t)}}function rt(t,e){for(;t!==null;){let r=XT(t,e);if(r){if(r.get)return ke(r.get);if(typeof r.value=="function")return ke(r.value)}t=YT(t)}function n(){return null}return n}function iA(t){try{return $e(t,""),!0}catch{return!1}}var $b=Re(["a","abbr","acronym","address","area","article","aside","audio","b","bdi","bdo","big","blink","blockquote","body","br","button","canvas","caption","center","cite","code","col","colgroup","content","data","datalist","dd","decorator","del","details","dfn","dialog","dir","div","dl","dt","element","em","fieldset","figcaption","figure","font","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","img","input","ins","kbd","label","legend","li","main","map","mark","marquee","menu","menuitem","meter","nav","nobr","ol","optgroup","option","output","p","picture","pre","progress","q","rp","rt","ruby","s","samp","search","section","select","shadow","slot","small","source","spacer","span","strike","strong","style","sub","summary","sup","table","tbody","td","template","textarea","tfoot","th","thead","time","tr","track","tt","u","ul","var","video","wbr"]),Xu=Re(["svg","a","altglyph","altglyphdef","altglyphitem","animatecolor","animatemotion","animatetransform","circle","clippath","defs","desc","ellipse","enterkeyhint","exportparts","filter","font","g","glyph","glyphref","hkern","image","inputmode","line","lineargradient","marker","mask","metadata","mpath","part","path","pattern","polygon","polyline","radialgradient","rect","stop","style","switch","symbol","text","textpath","title","tref","tspan","view","vkern"]),Ku=Re(["feBlend","feColorMatrix","feComponentTransfer","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feDistantLight","feDropShadow","feFlood","feFuncA","feFuncB","feFuncG","feFuncR","feGaussianBlur","feImage","feMerge","feMergeNode","feMorphology","feOffset","fePointLight","feSpecularLighting","feSpotLight","feTile","feTurbulence"]),aA=Re(["animate","color-profile","cursor","discard","font-face","font-face-format","font-face-name","font-face-src","font-face-uri","foreignobject","hatch","hatchpath","mesh","meshgradient","meshpatch","meshrow","missing-glyph","script","set","solidcolor","unknown","use"]),Ju=Re(["math","menclose","merror","mfenced","mfrac","mglyph","mi","mlabeledtr","mmultiscripts","mn","mo","mover","mpadded","mphantom","mroot","mrow","ms","mspace","msqrt","mstyle","msub","msup","msubsup","mtable","mtd","mtext","mtr","munder","munderover","mprescripts"]),sA=Re(["maction","maligngroup","malignmark","mlongdiv","mscarries","mscarry","msgroup","mstack","msline","msrow","semantics","annotation","annotation-xml","mprescripts","none"]),Ub=Re(["#text"]),Hb=Re(["accept","action","align","alt","autocapitalize","autocomplete","autopictureinpicture","autoplay","background","bgcolor","border","capture","cellpadding","cellspacing","checked","cite","class","clear","color","cols","colspan","command","commandfor","controls","controlslist","coords","crossorigin","datetime","decoding","default","dir","disabled","disablepictureinpicture","disableremoteplayback","download","draggable","enctype","enterkeyhint","exportparts","face","for","headers","height","hidden","high","href","hreflang","id","inert","inputmode","integrity","ismap","kind","label","lang","list","loading","loop","low","max","maxlength","media","method","min","minlength","multiple","muted","name","nonce","noshade","novalidate","nowrap","open","optimum","part","pattern","placeholder","playsinline","popover","popovertarget","popovertargetaction","poster","preload","pubdate","radiogroup","readonly","rel","required","rev","reversed","role","rows","rowspan","spellcheck","scope","selected","shape","size","sizes","slot","span","srclang","start","src","srcset","step","style","summary","tabindex","title","translate","type","usemap","valign","value","width","wrap","xmlns"]),Qu=Re(["accent-height","accumulate","additive","alignment-baseline","amplitude","ascent","attributename","attributetype","azimuth","basefrequency","baseline-shift","begin","bias","by","class","clip","clippathunits","clip-path","clip-rule","color","color-interpolation","color-interpolation-filters","color-profile","color-rendering","cx","cy","d","dx","dy","diffuseconstant","direction","display","divisor","dominant-baseline","dur","edgemode","elevation","end","exponent","fill","fill-opacity","fill-rule","filter","filterunits","flood-color","flood-opacity","font-family","font-size","font-size-adjust","font-stretch","font-style","font-variant","font-weight","fx","fy","g1","g2","glyph-name","glyphref","gradientunits","gradienttransform","height","href","id","image-rendering","in","in2","intercept","k","k1","k2","k3","k4","kerning","keypoints","keysplines","keytimes","lang","lengthadjust","letter-spacing","kernelmatrix","kernelunitlength","lighting-color","local","marker-end","marker-mid","marker-start","markerheight","markerunits","markerwidth","maskcontentunits","maskunits","max","mask","mask-type","media","method","mode","min","name","numoctaves","offset","operator","opacity","order","orient","orientation","origin","overflow","paint-order","path","pathlength","patterncontentunits","patterntransform","patternunits","pointer-events","points","preservealpha","preserveaspectratio","primitiveunits","r","rx","ry","radius","refx","refy","repeatcount","repeatdur","restart","result","rotate","scale","seed","shape-rendering","slope","specularconstant","specularexponent","spreadmethod","startoffset","stddeviation","stitchtiles","stop-color","stop-opacity","stroke-dasharray","stroke-dashoffset","stroke-linecap","stroke-linejoin","stroke-miterlimit","stroke-opacity","stroke","stroke-width","style","surfacescale","systemlanguage","tabindex","tablevalues","targetx","targety","transform","transform-origin","text-anchor","text-decoration","text-orientation","text-rendering","textlength","type","u1","u2","unicode","values","vector-effect","viewbox","visibility","version","vert-adv-y","vert-origin-x","vert-origin-y","width","word-spacing","wrap","writing-mode","xchannelselector","ychannelselector","x","x1","x2","xmlns","y","y1","y2","z","zoomandpan"]),Fb=Re(["accent","accentunder","align","bevelled","close","columnalign","columnlines","columnspacing","columnspan","denomalign","depth","dir","display","displaystyle","encoding","fence","frame","height","href","id","largeop","length","linethickness","lquote","lspace","mathbackground","mathcolor","mathsize","mathvariant","maxsize","minsize","movablelimits","notation","numalign","open","rowalign","rowlines","rowspacing","rowspan","rspace","rquote","scriptlevel","scriptminsize","scriptsizemultiplier","selection","separator","separators","stretchy","subscriptshift","supscriptshift","symmetric","voffset","width","xmlns"]),Es=Re(["xlink:href","xml:id","xlink:title","xml:space","xmlns:xlink"]),lA=Ne(/{{[\w\W]*|^[\w\W]*}}/g),cA=Ne(/<%[\w\W]*|^[\w\W]*%>/g),uA=Ne(/\${[\w\W]*/g),dA=Ne(/^data-[\-\w.\u00B7-\uFFFF]+$/),pA=Ne(/^aria-[\-\w]+$/),Gb=Ne(/^(?:(?:(?:f|ht)tps?|mailto|tel|callto|sms|cid|xmpp|matrix):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i),hA=Ne(/^(?:\w+script|data):/i),fA=Ne(/[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g),mA=Ne(/^html$/i),gA=Ne(/^[a-z][.\w]*(-[.\w]+)+$/i),Zb=Ne(/<[/\w!]/g),Bb=Ne(/<[/\w]/g),vA=Ne(/<\/no(script|embed|frames)/i),bA=Ne(/\/>/i),Xe={element:1,attribute:2,text:3,cdataSection:4,entityReference:5,entityNode:6,processingInstruction:7,comment:8,document:9,documentType:10,documentFragment:11,notation:12},qb=["style","script","xmp","iframe","noembed","noframes","plaintext","noscript"],yA=Re(re({},qb)),wA=(function(){let t={};return hn(qb,e=>{t[e]=Ne(new RegExp("</"+e+"(?=[\\t\\n\\f\\r />])","i"))}),Re(t)})(),EA=function(){return typeof window>"u"?null:window},xA=function(e,n){if(typeof e!="object"||typeof e.createPolicy!="function")return null;let r=null,o="data-tt-policy-suffix";n&&n.hasAttribute(o)&&(r=n.getAttribute(o));let i="dompurify"+(r?"#"+r:"");try{return e.createPolicy(i,{createHTML(a){return a},createScriptURL(a){return a}})}catch{return console.warn("TrustedTypes policy "+i+" could not be created."),null}},Vb=function(){return{afterSanitizeAttributes:[],afterSanitizeElements:[],afterSanitizeShadowDOM:[],beforeSanitizeAttributes:[],beforeSanitizeElements:[],beforeSanitizeShadowDOM:[],uponSanitizeAttribute:[],uponSanitizeElement:[],uponSanitizeShadowNode:[]}},Dt=function(e,n,r,o){return Ze(e,n)&&tr(e[n])?re(o.base?Ke(o.base):{},e[n],o.transform):r},ed=function(e,n,r){let o=Ze(e,n)?e[n]:void 0;return o&&typeof o=="object"?Ke(o):r()};function Yb(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:EA(),e=O=>Yb(O);if(e.version="3.4.16",e.removed=[],!t||!t.document||t.document.nodeType!==Xe.document||!t.Element)return e.isSupported=!1,e;let n=t.document,r=n,o=r.currentScript;t.DocumentFragment;let i=t.HTMLTemplateElement,a=t.Node,s=t.Element,c=t.NodeFilter;t.NamedNodeMap===void 0&&(t.NamedNodeMap||t.MozNamedAttrMap),t.HTMLFormElement;let l=t.DOMParser,u=t.trustedTypes,f=s.prototype,m=rt(f,"cloneNode"),h=rt(f,"remove"),p=rt(f,"removeAttributeNode"),E=rt(f,"nextSibling"),g=rt(f,"childNodes"),S=rt(f,"parentNode"),y=rt(f,"shadowRoot"),T=rt(f,"attributes"),w=a&&a.prototype?rt(a.prototype,"nodeType"):null,_=a&&a.prototype?rt(a.prototype,"nodeName"):null,b=a&&a.prototype?rt(a.prototype,"ownerDocument"):null,I=function(d){return w?w(d):d.nodeType},z=function(d){return _?_(d):d.nodeName};if(typeof i=="function"){let O=n.createElement("template");O.content&&O.content.ownerDocument&&(n=O.content.ownerDocument)}let P,te="",Be,Ed=!1,ir=0,xd=function(){if(ir>0)throw Lt('A configured TRUSTED_TYPES_POLICY callback (createHTML or createScriptURL) must not call DOMPurify.sanitize, as that causes infinite recursion. Do not pass a policy whose callbacks wrap DOMPurify as TRUSTED_TYPES_POLICY; see the "DOMPurify and Trusted Types" section of the README.')},vn=function(d){xd(),ir++;try{return P.createHTML(d)}finally{ir--}},My=function(d){xd(),ir++;try{return P.createScriptURL(d)}finally{ir--}},zy=function(){return Ed||(Be=xA(u,o),Ed=!0),Be},go=n,Us=go.implementation,Sd=go.createNodeIterator,Ly=go.createDocumentFragment,Dy=go.getElementsByTagName,$y=r.importNode,me=Vb();e.isSupported=typeof jb=="function"&&typeof S=="function"&&Us&&Us.createHTMLDocument!==void 0;let Uy=lA,Hy=cA,Fy=uA,Gy=dA,Zy=pA,By=hA,_d=fA,Vy=gA,Td=Gb,ge=null,Hs=re({},[...$b,...Xu,...Ku,...Ju,...Ub]),ve=null,Fs=re({},[...Hb,...Qu,...Fb,...Es]),pt=Object.seal(er(null,{tagNameCheck:{writable:!0,configurable:!1,enumerable:!0,value:null},attributeNameCheck:{writable:!0,configurable:!1,enumerable:!0,value:null},allowCustomizedBuiltInElements:{writable:!0,configurable:!1,enumerable:!0,value:!1}})),ar=null,Ad=null,Tt=Object.seal(er(null,{tagCheck:{writable:!0,configurable:!1,enumerable:!0,value:null},attributeCheck:{writable:!0,configurable:!1,enumerable:!0,value:null}})),kd=!0,Gs=!0,Id=!1,Rd=!0,At=!1,Ut=!0,Ht=!1,Zs=!1,vo=null,bo=null,Bs=!1,bn=!1,yo=!1,wo=!1,Cd=!0,Nd=!1,Od="user-content-",Vs=!0,js=!1,yn={},wn=null,Pd=re({},["annotation-xml","audio","colgroup","desc","foreignobject","head","iframe","math","mi","mn","mo","ms","mtext","noembed","noframes","noscript","plaintext","script","selectedcontent","style","svg","template","thead","title","video","xmp"]),Md=null,zd=re({},["audio","video","img","source","image","track"]),Ld=null,Dd=re({},["alt","class","for","id","label","name","pattern","placeholder","role","summary","title","value","style","xmlns"]),Eo="http://www.w3.org/1998/Math/MathML",xo="http://www.w3.org/2000/svg",ht="http://www.w3.org/1999/xhtml",En=ht,Ws=!1,qs=null,jy=re({},[Eo,xo,ht],Yu),$d=Re(["mi","mo","mn","ms","mtext"]),Ys=re({},$d),Ud=Re(["annotation-xml"]),Xs=re({},Ud),Wy=re({},["title","style","font","a","script"]),sr=null,qy=["application/xhtml+xml","text/html"],Yy="text/html",_e=null,xn=null,Xy=n.createElement("form"),Hd=function(d){return d instanceof RegExp||d instanceof Function},Ks=function(){let d=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};if(xn&&xn===d)return;(!d||typeof d!="object")&&(d={}),d=Ke(d),sr=qy.indexOf(d.PARSER_MEDIA_TYPE)===-1?Yy:d.PARSER_MEDIA_TYPE,_e=sr==="application/xhtml+xml"?Yu:no,ge=Dt(d,"ALLOWED_TAGS",Hs,{transform:_e}),ve=Dt(d,"ALLOWED_ATTR",Fs,{transform:_e}),qs=Dt(d,"ALLOWED_NAMESPACES",jy,{transform:Yu}),Ld=Dt(d,"ADD_URI_SAFE_ATTR",Dd,{transform:_e,base:Dd}),Md=Dt(d,"ADD_DATA_URI_TAGS",zd,{transform:_e,base:zd}),wn=Dt(d,"FORBID_CONTENTS",Pd,{transform:_e}),ar=Dt(d,"FORBID_TAGS",Ke({}),{transform:_e}),Ad=Dt(d,"FORBID_ATTR",Ke({}),{transform:_e}),yn=Ze(d,"USE_PROFILES")?d.USE_PROFILES&&typeof d.USE_PROFILES=="object"?Ke(d.USE_PROFILES):d.USE_PROFILES:!1,kd=d.ALLOW_ARIA_ATTR!==!1,Gs=d.ALLOW_DATA_ATTR!==!1,Id=d.ALLOW_UNKNOWN_PROTOCOLS||!1,Rd=d.ALLOW_SELF_CLOSE_IN_ATTR!==!1,At=d.SAFE_FOR_TEMPLATES||!1,Ut=d.SAFE_FOR_XML!==!1,Ht=d.WHOLE_DOCUMENT||!1,bn=d.RETURN_DOM||!1,yo=d.RETURN_DOM_FRAGMENT||!1,wo=d.RETURN_TRUSTED_TYPE||!1,Bs=d.FORCE_BODY||!1,Cd=d.SANITIZE_DOM!==!1,Nd=d.SANITIZE_NAMED_PROPS||!1,Vs=d.KEEP_CONTENT!==!1,js=d.IN_PLACE||!1,Td=iA(d.ALLOWED_URI_REGEXP)?d.ALLOWED_URI_REGEXP:Gb,En=typeof d.NAMESPACE=="string"?d.NAMESPACE:ht,Ys=ed(d,"MATHML_TEXT_INTEGRATION_POINTS",()=>re({},$d)),Xs=ed(d,"HTML_INTEGRATION_POINTS",()=>re({},Ud));let x=ed(d,"CUSTOM_ELEMENT_HANDLING",()=>er(null));if(pt=er(null),Ze(x,"tagNameCheck")&&Hd(x.tagNameCheck)&&(pt.tagNameCheck=x.tagNameCheck),Ze(x,"attributeNameCheck")&&Hd(x.attributeNameCheck)&&(pt.attributeNameCheck=x.attributeNameCheck),Ze(x,"allowCustomizedBuiltInElements")&&typeof x.allowCustomizedBuiltInElements=="boolean"&&(pt.allowCustomizedBuiltInElements=x.allowCustomizedBuiltInElements),Ne(pt),At&&(Gs=!1),yo&&(bn=!0),yn&&(ge=re({},Ub),ve=er(null),yn.html===!0&&(re(ge,$b),re(ve,Hb)),yn.svg===!0&&(re(ge,Xu),re(ve,Qu),re(ve,Es)),yn.svgFilters===!0&&(re(ge,Ku),re(ve,Qu),re(ve,Es)),yn.mathMl===!0&&(re(ge,Ju),re(ve,Fb),re(ve,Es))),Tt.tagCheck=null,Tt.attributeCheck=null,Ze(d,"ADD_TAGS")&&(typeof d.ADD_TAGS=="function"?Tt.tagCheck=d.ADD_TAGS:tr(d.ADD_TAGS)&&(ge===Hs&&(ge=Ke(ge)),re(ge,d.ADD_TAGS,_e))),Ze(d,"ADD_ATTR")&&(typeof d.ADD_ATTR=="function"?Tt.attributeCheck=d.ADD_ATTR:tr(d.ADD_ATTR)&&(ve===Fs&&(ve=Ke(ve)),re(ve,d.ADD_ATTR,_e))),Ze(d,"ADD_FORBID_CONTENTS")&&tr(d.ADD_FORBID_CONTENTS)&&(wn===Pd&&(wn=Ke(wn)),re(wn,d.ADD_FORBID_CONTENTS,_e)),Vs&&(ge["#text"]=!0),Ht&&re(ge,["html","head","body"]),ge.table&&(re(ge,["tbody"]),delete ar.tbody),d.TRUSTED_TYPES_POLICY){if(typeof d.TRUSTED_TYPES_POLICY.createHTML!="function")throw Lt('TRUSTED_TYPES_POLICY configuration option must provide a "createHTML" hook.');if(typeof d.TRUSTED_TYPES_POLICY.createScriptURL!="function")throw Lt('TRUSTED_TYPES_POLICY configuration option must provide a "createScriptURL" hook.');let C=P;P=d.TRUSTED_TYPES_POLICY;try{te=vn("")}catch(M){throw P=C,M}}else d.TRUSTED_TYPES_POLICY===null?(P=void 0,te=""):(P===void 0&&(P=zy()),P&&typeof te=="string"&&(te=vn("")));Re&&Re(d),xn=d},Fd=re({},[...Xu,...Ku,...aA]),Gd=re({},[...Ju,...sA]),Ky=function(d,x,C){return x.namespaceURI===ht?d==="svg":x.namespaceURI===Eo?d==="svg"&&(C==="annotation-xml"||Ys[C]):!!Fd[d]},Jy=function(d,x,C){return x.namespaceURI===ht?d==="math":x.namespaceURI===xo?d==="math"&&Xs[C]:!!Gd[d]},Qy=function(d,x,C){return x.namespaceURI===xo&&!Xs[C]||x.namespaceURI===Eo&&!Ys[C]?!1:!Gd[d]&&(Wy[d]||!Fd[d])},ew=function(d){let x=S(d);(!x||!x.tagName)&&(x={namespaceURI:En,tagName:"template"});let C=no(d.tagName),M=no(x.tagName);return qs[d.namespaceURI]?d.namespaceURI===xo?Ky(C,x,M):d.namespaceURI===Eo?Jy(C,x,M):d.namespaceURI===ht?Qy(C,x,M):!!(sr==="application/xhtml+xml"&&qs[d.namespaceURI]):!1},kt=function(d){Qr(e.removed,{element:d});try{S(d).removeChild(d)}catch{if(h(d),!S(d))throw Lt("a node selected for removal could not be detached from its tree and cannot be safely returned; refusing to sanitize in place")}},Zd=function(d,x,C){try{p(d,x)}catch{try{d.removeAttribute(C)}catch{}}},So=function(d){_o(d);let x=g(d);if(x){let M=[];hn(x,H=>{Qr(M,H)}),hn(M,H=>{try{h(H)}catch{}})}let C=T(d);if(C)for(let M=C.length-1;M>=0;--M){let H=C[M],X=H&&H.name;typeof X=="string"&&Zd(d,H,X)}},Ft=function(d,x,C){if(!C)try{C=x.getAttributeNode(d)}catch{C=null}Qr(e.removed,{attribute:C||null,from:x});try{C?p(x,C):x.removeAttribute(d)}catch{try{x.removeAttribute(d)}catch{}}if(d==="is")if(bn||yo)try{kt(x)}catch{}else try{x.setAttribute(d,"")}catch{}},tw=function(d){let x=T(d);if(x)for(let C=x.length-1;C>=0;--C){let M=x[C],H=M&&M.name;typeof H!="string"||ve[_e(H)]||Zd(d,M,H)}},_o=function(d){let x=[d];for(;x.length>0;){let C=x.pop();I(C)===Xe.element&&tw(C);let M=g(C);if(M)for(let H=M.length-1;H>=0;--H)x.push(M[H])}},Bd=function(d,x){return Ut?d==="patchsrc"?!0:d==="for"&&x!=="label"&&x!=="output":!1},nw=function(d){if(!Ut)return;let x=[d];for(;x.length>0;){let C=x.pop(),M=I(C);if(M===Xe.processingInstruction||M===Xe.comment&&$e(Bb,C.data)){try{h(C)}catch{}continue}if(M===Xe.element){let X=C,ee=_e(z(C));try{X.hasAttribute&&X.hasAttribute("patchsrc")&&X.removeAttribute("patchsrc"),X.hasAttribute&&X.hasAttribute("for")&&Bd("for",ee)&&X.removeAttribute("for")}catch{}}let H=g(C);if(H)for(let X=H.length-1;X>=0;--X)x.push(H[X])}},Vd=function(d){let x=null,C=null;if(Bs)d="<remove></remove>"+d;else{let X=Mb(d,/^[\r\n\t ]+/);C=X&&X[0]}sr==="application/xhtml+xml"&&En===ht&&(d='<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>'+d+"</body></html>");let M=P?vn(d):d;if(En===ht)try{x=new l().parseFromString(M,sr)}catch{}if(!x||!x.documentElement){x=Us.createDocument(En,"template",null);try{x.documentElement.innerHTML=Ws?te:M}catch{}}let H=x.body||x.documentElement;return d&&C&&H.insertBefore(n.createTextNode(C),H.childNodes[0]||null),En===ht?Dy.call(x,Ht?"html":"body")[0]:Ht?x.documentElement:H},jd=function(d){let x=b?b(d):d.ownerDocument;return Sd.call(x||d,d,c.SHOW_ELEMENT|c.SHOW_COMMENT|c.SHOW_TEXT|c.SHOW_PROCESSING_INSTRUCTION|c.SHOW_CDATA_SECTION,null)},To=function(d){return d=eo(d,Uy," "),d=eo(d,Hy," "),d=eo(d,Fy," "),d},Js=function(d){var x;d.normalize();let C=b?b(d):d.ownerDocument,M=Sd.call(C||d,d,c.SHOW_TEXT|c.SHOW_COMMENT|c.SHOW_CDATA_SECTION|c.SHOW_PROCESSING_INSTRUCTION,null),H=M.nextNode();for(;H;)H.data=To(H.data),H=M.nextNode();let X=(x=d.querySelectorAll)===null||x===void 0?void 0:x.call(d,"template");X&&hn(X,ee=>{Sn(ee.content)&&Js(ee.content)})},Ao=function(d){let x=_?_(d):null;return typeof x!="string"||_e(x)!=="form"?!1:typeof d.nodeName!="string"||typeof d.textContent!="string"||typeof d.removeChild!="function"||d.attributes!==T(d)||typeof d.removeAttribute!="function"||typeof d.removeAttributeNode!="function"||typeof d.getAttributeNode!="function"||typeof d.setAttribute!="function"||typeof d.namespaceURI!="string"||typeof d.insertBefore!="function"||typeof d.hasChildNodes!="function"||d.nodeType!==w(d)||d.childNodes!==g(d)},Sn=function(d){if(!w||typeof d!="object"||d===null)return!1;try{return w(d)===Xe.documentFragment}catch{return!1}},lr=function(d){if(!w||typeof d!="object"||d===null)return!1;try{return typeof w(d)=="number"}catch{return!1}};function ft(O,d,x){O.length!==0&&hn(O,C=>{C.call(e,d,x,xn)})}let rw=function(d,x){return!!(Ut&&d.hasChildNodes()&&!lr(d.firstElementChild)&&$e(Zb,d.textContent)&&$e(Zb,d.innerHTML)||Ut&&d.namespaceURI===ht&&yA[x]&&(lr(d.firstElementChild)||typeof d.textContent=="string"&&$e(wA[x],d.textContent))||d.nodeType===Xe.processingInstruction||Ut&&d.nodeType===Xe.comment&&$e(Bb,d.data))},ko=function(d,x){if(d instanceof RegExp)return $e(d,x);if(d instanceof Function){for(var C=arguments.length,M=new Array(C>2?C-2:0),H=2;H<C;H++)M[H-2]=arguments[H];return!!d(x,...M)}return!1},ow=function(d,x,C){if(!ar[x]&&Xd(x)&&ko(pt.tagNameCheck,x))return!1;if(Vs&&!wn[x]){let M=S(d),H=g(d);if(H&&M){let X=H.length;for(let ee=X-1;ee>=0;--ee){let Ee=d===C?m(H[ee],!0):H[ee];M.insertBefore(Ee,E(d))}}}return kt(d),!0},Wd=function(d,x,C,M){return d.length===0?x:x===C||x===M?Ke(x):x},_n=function(d,x){return d===x||S(d)!==null?!1:(js&&_o(d),!0)},qd=function(d,x){if(ft(me.beforeSanitizeElements,d,null),_n(d,x))return!0;if(Ao(d))return kt(d),!0;let C=_e(z(d));if(ge=Wd(me.uponSanitizeElement,ge,Hs,vo),ft(me.uponSanitizeElement,d,{tagName:C,allowedTags:ge}),_n(d,x))return!0;if(rw(d,C))return kt(d),!0;if(ar[C]||!(Tt.tagCheck instanceof Function&&Tt.tagCheck(C))&&!ge[C]){let M=ow(d,C,x);return M===!1&&(ft(me.afterSanitizeElements,d,null),_n(d,x))?!0:M}if(I(d)===Xe.element&&!ew(d)||(C==="noscript"||C==="noembed"||C==="noframes")&&$e(vA,d.innerHTML))return kt(d),!0;if(At&&d.nodeType===Xe.text){let M=To(d.textContent);d.textContent!==M&&(Qr(e.removed,{element:d.cloneNode()}),d.textContent=M)}return ft(me.afterSanitizeElements,d,null),_n(d,x)},Yd=function(d,x,C){if(Ad[x]||Bd(x,d)||Cd&&(x==="id"||x==="name")&&(C in n||C in Xy))return!1;let M=ve[x]||Tt.attributeCheck instanceof Function&&Tt.attributeCheck(x,d);return Gs&&$e(Gy,x)||kd&&$e(Zy,x)?!0:M?Ld[x]||$e(Td,eo(C,_d,""))||(x==="src"||x==="xlink:href"||x==="href")&&d!=="script"&&zb(C,"data:")===0&&Md[d]||Id&&!$e(By,eo(C,_d,""))?!0:!C:Xd(d)&&ko(pt.tagNameCheck,d)&&ko(pt.attributeNameCheck,x,d)||x==="is"&&pt.allowCustomizedBuiltInElements&&ko(pt.tagNameCheck,C)},iw=re({},["annotation-xml","color-profile","font-face","font-face-format","font-face-name","font-face-src","font-face-uri","missing-glyph"]),Xd=function(d){return!iw[no(d)]&&$e(Vy,d)},aw=function(d,x,C,M){if(P&&typeof u=="object"&&typeof u.getAttributeType=="function"&&!C)switch(u.getAttributeType(d,x)){case"TrustedHTML":return vn(M);case"TrustedScriptURL":return My(M)}return M},sw=function(d,x,C,M){try{return C?d.setAttributeNS(C,x,M):d.setAttribute(x,M),Ao(d)?(kt(d),!1):!0}catch{return Ft(x,d),!1}},Kd=function(d,x){if(ft(me.beforeSanitizeAttributes,d,null),_n(d,x))return;let C=d.attributes;if(!C||Ao(d))return;ve=Wd(me.uponSanitizeAttribute,ve,Fs,bo);let M={attrName:"",attrValue:"",keepAttr:!0,allowedAttributes:ve,forceKeepAttr:void 0},H=C.length,X=_e(d.nodeName);for(;H--;){let ee=C[H],Ee=ee.name,et=ee.namespaceURI,Ve=ee.value,Tn=_e(Ee),el=Ve,Ue=Ee==="value"?el:QT(el),Jd=!1;if(M.attrName=Tn,M.attrValue=Ue,M.keepAttr=!0,M.forceKeepAttr=void 0,ft(me.uponSanitizeAttribute,d,M),Ue=M.attrValue,Nd&&(Tn==="id"||Tn==="name")&&zb(Ue,Od)!==0&&(Ft(Ee,d,ee),Ue=Od+Ue,Jd=!0),Ut&&$e(/((--!?|])>)|<\/(style|script|title|xmp|textarea|noscript|iframe|noembed|noframes)/i,Ue)){Ft(Ee,d,ee);continue}if(Tn==="attributename"&&Mb(Ue,"href")){Ft(Ee,d,ee);continue}if(!M.forceKeepAttr){if(!M.keepAttr){Ft(Ee,d,ee);continue}if(!Rd&&$e(bA,Ue)){Ft(Ee,d,ee);continue}if(At&&(Ue=To(Ue)),!Yd(X,Tn,Ue)){Ft(Ee,d,ee);continue}Ue=aw(X,Tn,et,Ue),Ue!==el&&sw(d,Ee,et,Ue)&&Jd&&Pb(e.removed)}}ft(me.afterSanitizeAttributes,d,null),_n(d,x)},Io=function(d){let x=null,C=jd(d);for(ft(me.beforeSanitizeShadowDOM,d,null);x=C.nextNode();)if(ft(me.uponSanitizeShadowNode,x,null),qd(x,d),Kd(x,d),Sn(x.content)&&Io(x.content),I(x)===Xe.element){let M=y(x);Sn(M)&&(Qs(M),Io(M))}ft(me.afterSanitizeShadowDOM,d,null)},Qs=function(d){let x=[{node:d,shadow:null}];for(;x.length>0;){let C=x.pop();if(C.shadow){Io(C.shadow);continue}let M=C.node,H=I(M)===Xe.element,X=g(M);if(X)for(let ee=X.length-1;ee>=0;--ee)x.push({node:X[ee],shadow:null});if(H){let ee=_?_(M):null;if(typeof ee=="string"&&_e(ee)==="template"){let Ee=M.content;Sn(Ee)&&x.push({node:Ee,shadow:null})}}if(H){let ee=y(M);Sn(ee)&&x.push({node:null,shadow:ee},{node:ee,shadow:null})}}};return e.sanitize=function(O){let d=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},x=null,C=null,M=null,H=null;if(Ws=!O,Ws&&(O="<!-->"),typeof O!="string"&&!lr(O)&&(O=oA(O),typeof O!="string"))throw Lt("dirty is not a string, aborting");if(!e.isSupported)return O;Zs?(ge=vo,ve=bo):Ks(d),(me.uponSanitizeElement.length>0||me.uponSanitizeAttribute.length>0)&&(ge=Ke(ge)),me.uponSanitizeAttribute.length>0&&(ve=Ke(ve)),e.removed=[];let X=js&&typeof O!="string"&&lr(O);if(X){nw(O);let et=z(O);if(typeof et=="string"){let Ve=_e(et);if(!ge[Ve]||ar[Ve])throw So(O),Lt("root node is forbidden and cannot be sanitized in-place")}if(Ao(O))throw So(O),Lt("root node is clobbered and cannot be sanitized in-place");try{Qs(O)}catch(Ve){throw So(O),Ve}}else if(lr(O))x=Vd("<!---->"),C=x.ownerDocument.importNode(O,!0),C.nodeType===Xe.element&&C.nodeName==="BODY"||C.nodeName==="HTML"?x=C:x.appendChild(C),Qs(x);else{if(!bn&&!At&&!Ht&&O.indexOf("<")===-1)return P&&wo?vn(O):O;if(x=Vd(O),!x)return bn?null:wo?te:""}x&&Bs&&kt(x.firstChild);let ee=X?O:x;try{let et=jd(ee);for(;M=et.nextNode();)qd(M,ee),Kd(M,ee),Sn(M.content)&&Io(M.content)}catch(et){throw X&&(So(O),hn(e.removed,Ve=>{Ve.element&&_o(Ve.element)})),et}if(X){let et=!1;if(hn(e.removed,Ve=>{Ve.element&&(Ve.element===O&&(et=!0),_o(Ve.element))}),et)throw Lt("a node selected for removal could not be safely returned; refusing to sanitize in place");return At&&Js(O),O}if(bn){if(At&&Js(x),yo)for(H=Ly.call(x.ownerDocument);x.firstChild;)H.appendChild(x.firstChild);else H=x;return(ve.shadowroot||ve.shadowrootmode)&&(H=$y.call(r,H,!0)),H}let Ee=Ht?x.outerHTML:x.innerHTML;return Ht&&ge["!doctype"]&&x.ownerDocument&&x.ownerDocument.doctype&&x.ownerDocument.doctype.name&&$e(mA,x.ownerDocument.doctype.name)&&(Ee="<!DOCTYPE "+x.ownerDocument.doctype.name+`>
`+Ee),At&&(Ee=To(Ee)),P&&wo?vn(Ee):Ee},e.setConfig=function(){let O=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};Ks(O),Zs=!0,vo=ge,bo=ve},e.clearConfig=function(){xn=null,Zs=!1,vo=null,bo=null,P=Be,te=""},e.isValidAttribute=function(O,d,x){xn||Ks({});let C=_e(O),M=_e(d);return Yd(C,M,x)},e.addHook=function(O,d){typeof d=="function"&&Ze(me,O)&&Qr(me[O],d)},e.removeHook=function(O,d){if(Ze(me,O)){if(d!==void 0){let x=KT(me[O],d);return x===-1?void 0:JT(me[O],x,1)[0]}return Pb(me[O])}},e.removeHooks=function(O){Ze(me,O)&&(me[O]=[])},e.removeAllHooks=function(){me=Vb()},e}var Xb=Yb();function ad(){return{async:!1,breaks:!1,extensions:null,gfm:!0,hooks:null,pedantic:!1,renderer:null,silent:!1,tokenizer:null,walkTokens:null}}var gn=ad();function sy(t){gn=t}var fn={exec:()=>null};function nr(t){let e=[];return n=>{let r=Math.max(0,Math.min(3,n-1)),o=e[r];return o||(o=t(r),e[r]=o),o}}function W(t,e=""){let n=typeof t=="string"?t:t.source,r={replace:(o,i)=>{let a=typeof i=="string"?i:i.source;return a=a.replace(Le.caret,"$1"),n=n.replace(o,a),r},getRegex:()=>new RegExp(n,e)};return r}var SA=((t="")=>{try{return!!new RegExp("(?<=1)(?<!1)"+t)}catch{return!1}})(),Le={codeRemoveIndent:/^(?: {0,3}\t| {1,4})/gm,outputLinkReplace:/\\([\[\]])/g,indentCodeCompensation:/^(\s+)(?:```)/,beginningSpace:/^\s+/,endingHash:/#$/,startingSpaceChar:/^ /,endingSpaceChar:/ $/,endingSpaceTabChar:/[ \t]$/,nonSpaceChar:/[^ ]/,newLineCharGlobal:/\n/g,tabCharGlobal:/\t/g,leadingSpaceTab:/^[ \t]+/,multipleSpaceGlobal:/\s+/g,blankLine:/^[ \t]*$/,doubleBlankLine:/\n[ \t]*\n[ \t]*$/,blockquoteStart:/^ {0,3}>/,blockquoteSetextReplace:/\n {0,3}((?:=+|-+) *)(?=\n|$)/g,blockquoteSetextReplace2:/^ {0,3}>[ \t]?/gm,listReplaceNesting:/^ {1,4}(?=( {4})*[^ ])/g,listIsTask:/^\[[ xX]\] +\S/,listReplaceTask:/^\[[ xX]\] +/,listTaskCheckbox:/\[[ xX]\]/,anyLine:/\n.*\n/,hrefBrackets:/^<(.*)>$/,tableDelimiter:/[:|]/,tableAlignChars:/^\||\| *$/g,tableRowBlankLine:/\n[ \t]*$/,tableAlignRight:/^ *-+: *$/,tableAlignCenter:/^ *:-+: *$/,tableAlignLeft:/^ *:-+ *$/,startATag:/^<a /i,endATag:/^<\/a>/i,startPreScriptTag:/^<(pre|code|kbd|script)(\s|>)/i,endPreScriptTag:/^<\/(pre|code|kbd|script)(\s|>)/i,startAngleBracket:/^</,endAngleBracket:/>$/,pedanticHrefTitle:/^([^'"]*[^\s])\s+(['"])(.*)\2/,unicodeAlphaNumeric:/[\p{L}\p{N}]/u,numericCharacterReference:/&#(?:(\d{1,7})|[Xx]([A-Fa-f0-9]{1,6}));/g,escapeTest:/[&<>"']/,escapeReplace:/[&<>"']/g,escapeTestNoEncode:/[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/,escapeReplaceNoEncode:/[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/g,caret:/(^|[^\[])\^/g,percentDecode:/%25/g,findPipe:/\|/g,splitPipe:/ \|/,slashPipe:/\\\|/g,carriageReturn:/\r\n|\r/g,spaceLine:/^ +$/gm,notSpaceStart:/^\S*/,endingNewline:/\n$/,listItemRegex:t=>new RegExp(`^( {0,3}${t})((?:[	 ][^\\n]*)?(?:\\n|$))`),nextBulletRegex:nr(t=>new RegExp(`^ {0,${t}}(?:[*+-]|\\d{1,9}[.)])((?:[ 	][^\\n]*)?(?:\\n|$))`)),hrRegex:nr(t=>new RegExp(`^ {0,${t}}((?:-[ 	]*){3,}|(?:_[ 	]*){3,}|(?:\\*[ 	]*){3,})(?:\\n+|$)`)),fencesBeginRegex:nr(t=>new RegExp(`^ {0,${t}}(?:\`\`\`|~~~)`)),headingBeginRegex:nr(t=>new RegExp(`^ {0,${t}}#`)),htmlBeginRegex:nr(t=>new RegExp(`^ {0,${t}}(?:</?(?:${ao})(?: +|$|/?>)|<(?:script|pre|style|textarea|!--))`,"i")),blockquoteBeginRegex:nr(t=>new RegExp(`^ {0,${t}}>`))},_A=/^(?:[ \t]*(?:\n|$))+/,TA=/^((?: {4}| {0,3}\t)[^\n]+(?:\n(?:[ \t]*(?:\n|$))*)?)+/,AA=/^ {0,3}(`{3,}(?=[^`\n]*(?:\n|$))|~{3,})([^\n]*)(?:\n|$)(?:|([\s\S]*?)(?:\n|$))(?: {0,3}\1[~`]* *(?=\n|$)|$)/,io=/^ {0,3}((?:-[\t ]*){3,}|(?:_[ \t]*){3,}|(?:\*[ \t]*){3,})(?:\n+|$)/,kA=/^ {0,3}(#{1,6})(?=\s|$)(.*)(?:\n+|$)/,sd=/ {0,3}(?:[*+-]|\d{1,9}[.)])/,ly=/^(?!bull |blockCode|fences|blockquote|heading|html|table)((?:.|\n(?!\s*?\n|bull |fences|blockquote|heading|hr|html|table))+?)\n {0,3}(=+|-+) *(?:\n+|$)/,cy=W(ly).replace(/bull/g,sd).replace(/blockCode/g,/(?: {4}| {0,3}\t)/).replace(/fences/g,/ {0,3}(?:`{3,}|~{3,})/).replace(/blockquote/g,/ {0,3}>/).replace(/heading/g,/ {0,3}#{1,6}(?:\s|$)/).replace(/hr/g,/ {0,3}(?:(?:-[\t ]*){3,}|(?:_[ \t]*){3,}|(?:\*[ \t]*){3,})(?:\n+|$)/).replace(/html/g,/ {0,3}<[^\n>]+>\n/).replace(/\|table/g,"").getRegex(),IA=W(ly).replace(/bull/g,sd).replace(/blockCode/g,/(?: {4}| {0,3}\t)/).replace(/fences/g,/ {0,3}(?:`{3,}|~{3,})/).replace(/blockquote/g,/ {0,3}>/).replace(/heading/g,/ {0,3}#{1,6}(?:\s|$)/).replace(/hr/g,/ {0,3}(?:(?:-[\t ]*){3,}|(?:_[ \t]*){3,}|(?:\*[ \t]*){3,})(?:\n+|$)/).replace(/html/g,/ {0,3}<[^\n>]+>\n/).replace(/table/g,/ {0,3}\|?(?:[:\- ]*\|)+[\:\- ]*\n/).getRegex(),ld=/^([^\n]+(?:\n(?!hr|heading|lheading|blockquote|fences|list|html|table|[ \t]+\n)[^\n]+)*)/,RA=/^[^\n]+/,cd=/(?!\s*\])(?:\\[\s\S]|[^\[\]\\])+/,CA=W(/^ {0,3}\[(label)\]: *(?:\n[ \t]*)?([^<\s][^\s]*|<.*?>)(?:(?: +(?:\n[ \t]*)?| *\n[ \t]*)(title))? *(?:\n+|$)/).replace("label",cd).replace("title",/(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/).getRegex(),NA=W(/^(bull)([ \t][^\n]*?)?(?:\n|$)/).replace(/bull/g,sd).getRegex(),ao="address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option|p|param|search|section|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul",ud=/<!--(?:-?>|[\s\S]*?(?:-->|$))/,OA=W("^ {0,3}(?:<(script|pre|style|textarea)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n*|$)|comment[^\\n]*(\\n+|$)|<\\?[\\s\\S]*?(?:\\?>[^\\n]*\\n*|$)|<![A-Z][\\s\\S]*?(?:>[^\\n]*\\n*|$)|<!\\[CDATA\\[[\\s\\S]*?(?:\\]\\]>[^\\n]*\\n*|$)|</?(tag)(?: +|\\n|/?>)[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$)|<(?!script|pre|style|textarea)([a-z][a-z0-9-]*)(?:attribute)*? */?>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$)|</(?!script|pre|style|textarea)[a-z][a-z0-9-]*\\s*>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$))","i").replace("comment",ud).replace("tag",ao).replace("attribute",/ +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/).getRegex(),uy=t=>W(ld).replace("hr",io).replace("heading"," {0,3}#{1,6}(?:\\s|$)").replace("|lheading","").replace("|table","").replace("blockquote"," {0,3}>").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*(?:\\n|$))|~~~)[^\\n]*(?:\\n|$)").replace("list",t).replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",ao).getRegex(),PA=uy(/ {0,3}(?:[*+-]|1[.)])[ \t]+[^ \t\n]/),MA=uy(/ {0,3}(?:[*+-]|\d{1,9}[.)])(?:[ \t]|\n|$)/),zA=W(/^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/).replace("paragraph",MA).getRegex(),dd={blockquote:zA,code:TA,def:CA,fences:AA,heading:kA,hr:io,html:OA,lheading:cy,list:NA,newline:_A,paragraph:PA,table:fn,text:RA},Kb=W("^ *([^\\n ].*)\\n {0,3}((?:\\| *)?:?-+:? *(?:\\| *:?-+:? *)*(?:\\| *)?)(?:\\n((?:(?! *\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)").replace("hr",io).replace("heading"," {0,3}#{1,6}(?:\\s|$)").replace("blockquote"," {0,3}>").replace("code","(?: {4}| {0,3}	)[^\\n]").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*(?:\\n|$))|~~~)[^\\n]*(?:\\n|$)").replace("list"," {0,3}(?:[*+-]|1[.)])[ \\t]").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",ao).getRegex(),LA={...dd,lheading:IA,table:Kb,paragraph:W(ld).replace("hr",io).replace("heading"," {0,3}#{1,6}(?:\\s|$)").replace("|lheading","").replace("table",Kb).replace("blockquote"," {0,3}>").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*(?:\\n|$))|~~~)[^\\n]*(?:\\n|$)").replace("list"," {0,3}(?:[*+-]|1[.)])[ \\t]+[^ \\t\\n]").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",ao).getRegex()},DA={...dd,html:W(`^ *(?:comment *(?:\\n|\\s*$)|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)|<tag(?:"[^"]*"|'[^']*'|\\s[^'"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))`).replace("comment",ud).replace(/tag/g,"(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:|[^\\w\\s@]*@)\\b").getRegex(),def:/^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/,heading:/^(#{1,6})(.*)(?:\n+|$)/,fences:fn,lheading:/^(.+?)\n {0,3}(=+|-+) *(?:\n+|$)/,paragraph:W(ld).replace("hr",io).replace("heading",` *#{1,6} *[^
]`).replace("lheading",cy).replace("|table","").replace("blockquote"," {0,3}>").replace("|fences","").replace("|list","").replace("|html","").replace("|tag","").getRegex()},$A=/^\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/,UA=/^(`+)([^`]|[^`][\s\S]*?[^`])\1(?!`)/,dy=/^( {2,}|\\)\n(?!\s*$)[ \t]*/,HA=/^(`+|[^`])(?:(?= {2,}\n)|[\s\S]*?(?:(?=[\\<!\[`*_]|\b_|$)|[^ ](?= {2,}\n)))/,_t=/[\p{P}\p{S}]/u,rr=/[\s\p{P}\p{S}]/u,so=/[^\s\p{P}\p{S}]/u,FA=W(/^((?![*_])punctSpace)/,"u").replace(/punctSpace/g,rr).getRegex(),GA=/[\p{Pi}\p{Ps}"']/u,py=/(?!~)[\p{P}\p{S}]/u,ZA=/(?!~)[\s\p{P}\p{S}]/u,BA=/(?:[^\s\p{P}\p{S}]|~)/u,VA=W(/link|precode-code|html/,"g").replace("link",/\[(?:[^\[\]`]|(?<a>`+)[^`]+\k<a>(?!`))*?\]\((?:\\[\s\S]|[^\\\(\)]|\((?:\\[\s\S]|[^\\\(\)])*\))*\)/).replace("precode-",SA?"(?<!`)()":"(^^|[^`])").replace("code",/(?<b>`+)[^`]+\k<b>(?!`)/).replace("html",/<(?! )[^<>]*?>/).getRegex(),hy=/^(?:\*+(?:((?!\*)punct)|([^\s*]))?)|^_+(?:((?!_)punct)|([^\s_]))?/,jA=W(hy,"u").replace(/punct/g,_t).getRegex(),WA=W(hy,"u").replace(/punct/g,py).getRegex(),qA=/^(?:\*+(?:((?!\*)(?!openQuote)punct)|([^\s*]))?)|^_+(?:((?!_)(?!openQuote)punct)|([^\s_]))?/,YA=W(qA,"u").replace(/openQuote/g,GA).replace(/punct/g,_t).getRegex(),fy="^[^_*]*?__[^_*]*?\\*[^_*]*?(?=__)|[^*]+(?=[^*])|(?!\\*)punct(\\*+)(?=[\\s]|$)|notPunctSpace(\\*+)(?!\\*)(?=punctSpace|$)|(?!\\*)punctSpace(\\*+)(?=notPunctSpace)|[\\s](\\*+)(?!\\*)(?=punct)|(?!\\*)punct(\\*+)(?!\\*)(?=punct)|notPunctSpace(\\*+)(?=notPunctSpace)",XA=W(fy,"gu").replace(/notPunctSpace/g,so).replace(/punctSpace/g,rr).replace(/punct/g,_t).getRegex(),KA=W(fy,"gu").replace(/notPunctSpace/g,BA).replace(/punctSpace/g,ZA).replace(/punct/g,py).getRegex(),JA="^[^_*]*?__[^_*]*?\\*[^_*]*?(?=__)|[^*]+(?=[^*])|(?!\\*)punct(\\*+)(?=[\\s]|$)|notPunctSpace(\\*+)(?!\\*)(?=punctSpace|$)|(?!\\*)[\\s](\\*+)(?=notPunctSpace)|[\\s](\\*+)(?!\\*)(?=punct)|(?!\\*)punct(\\*+)(?!\\*)(?=punct)|(?:(?!\\*)punct|notPunctSpace)(\\*+)(?!\\*)(?=notPunctSpace)",QA=W(JA,"gu").replace(/notPunctSpace/g,so).replace(/punctSpace/g,rr).replace(/punct/g,_t).getRegex(),ek=W("^[^_*]*?\\*\\*[^_*]*?_[^_*]*?(?=\\*\\*)|[^_]+(?=[^_])|(?!_)punct(_+)(?=[\\s]|$)|notPunctSpace(_+)(?!_)(?=punctSpace|$)|(?!_)punctSpace(_+)(?=notPunctSpace)|[\\s](_+)(?!_)(?=punct)|(?!_)punct(_+)(?!_)(?=punct)","gu").replace(/notPunctSpace/g,so).replace(/punctSpace/g,rr).replace(/punct/g,_t).getRegex(),tk="^[^_*]*?\\*\\*[^_*]*?_[^_*]*?(?=\\*\\*)|[^_]+(?=[^_])|(?!_)punct(_+)(?=[\\s]|$)|notPunctSpace(_+)(?!_)(?=punctSpace|$)|(?!_)[\\s](_+)(?=notPunctSpace)|[\\s](_+)(?!_)(?=punct)|(?!_)punct(_+)(?!_)(?=punct)|(?:(?!_)punct|notPunctSpace)(_+)(?!_)(?=notPunctSpace)",nk=W(tk,"gu").replace(/notPunctSpace/g,so).replace(/punctSpace/g,rr).replace(/punct/g,_t).getRegex(),rk=W(/^~~?(?:((?!~)punct)|[^\s~])/,"u").replace(/punct/g,_t).getRegex(),ok="^[^~]+(?=[^~])|(?!~)punct(~~?)(?=[\\s]|$)|notPunctSpace(~~?)(?!~)(?=punctSpace|$)|(?!~)punctSpace(~~?)(?=notPunctSpace)|[\\s](~~?)(?!~)(?=punct)|(?!~)punct(~~?)(?!~)(?=punct)|notPunctSpace(~~?)(?=notPunctSpace)",ik=W(ok,"gu").replace(/notPunctSpace/g,so).replace(/punctSpace/g,rr).replace(/punct/g,_t).getRegex(),ak=W(/\\(punct)/,"gu").replace(/punct/g,_t).getRegex(),sk=W(/^<(scheme:[^\s\x00-\x1f<>]*|email)>/).replace("scheme",/[a-zA-Z][a-zA-Z0-9+.-]{1,31}/).replace("email",/[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/).getRegex(),lk=W(ud).replace("(?:-->|$)","-->").getRegex(),ck=W("^comment|^</[a-zA-Z][a-zA-Z0-9-]*\\s*>|^<[a-zA-Z][a-zA-Z0-9-]*(?:attribute)*?\\s*/?>|^<\\?[\\s\\S]*?\\?>|^<![a-zA-Z]+\\s[\\s\\S]*?>|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>").replace("comment",lk).replace("attribute",/\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/).getRegex(),my=/\[(?:\\[\s\S]|[^\[\]\\])*\]/,Ss=W(/(?:\[(?:brackets|\\[\s\S]|[^\[\]\\])*\]|\\[\s\S]|`+(?!`)[^`]*?`+(?!`)|``+(?=\])|[^\[\]\\`])*?/).replace("brackets",my).getRegex(),uk=W(/^!?\[(label)\]\(\s*(href)(?:(?:[ \t]+(?:\n[ \t]*)?|\n[ \t]*)(title))?\s*\)/).replace("label",Ss).replace("href",/<(?:\\.|[^\n<>\\])+>|[^ \t\n\x00-\x1f]+|(?=\))/).replace("title",/"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/).getRegex(),dk=W(/^!?\[(label)\]\[(ref)\]/).replace("label",Ss).replace("ref",cd).getRegex(),pk=W(/^!?\[(ref)\](?:\[\])?/).replace("ref",cd).getRegex(),Jb=/(?!\s*\])(?:\\[\s\S]|[^\[\]\\]){1,999}/,hk=W(/(?:[^\[\]\\`]*(?:\[(?:brackets|\\[\s\S]|[^\[\]\\])*\]|\\[\s\S]|`+(?!`)[^`]*?`+(?!`)|``+(?=\]))){0,999}?[^\[\]\\`]*?/).replace("brackets",my).getRegex(),fk=W("reflink|nolink(?!\\()","g").replace("reflink",W(/^!?\[(label)\]\[(ref)\]/).replace("label",hk).replace("ref",Jb).getRegex()).replace("nolink",W(/^!?\[(ref)\](?:\[\])?/).replace("ref",Jb).getRegex()).getRegex(),Qb=/[hH][tT][tT][pP][sS]?|[fF][tT][pP]/,mk=/[A-Za-z0-9._+-]+@[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![\w-])/,gk=W(/(?:mailto:email|xmpp:email(?:\/[A-Za-z0-9@.]+)?)/).replace(/email/g,mk).getRegex(),pd={_backpedal:fn,anyPunctuation:ak,autolink:sk,blockSkip:VA,br:dy,code:UA,del:fn,delLDelim:fn,delRDelim:fn,emStrongLDelim:jA,emStrongRDelimAst:XA,emStrongRDelimUnd:ek,escape:$A,link:uk,nolink:pk,punctuation:FA,reflink:dk,reflinkSearch:fk,tag:ck,text:HA,url:fn},vk={...pd,emStrongLDelim:YA,emStrongRDelimAst:QA,emStrongRDelimUnd:nk,link:W(/^!?\[(label)\]\((.*?)\)/).replace("label",Ss).getRegex(),reflink:W(/^!?\[(label)\]\s*\[([^\]]*)\]/).replace("label",Ss).getRegex()},rd={...pd,emStrongRDelimAst:KA,emStrongLDelim:WA,delLDelim:rk,delRDelim:ik,url:W(/^emailProtocol|^((?:protocol):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/).replace("emailProtocol",gk).replace("protocol",Qb).replace("email",/[A-Za-z0-9._+-]+(@)[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![\w-])/).getRegex(),_backpedal:/(?:[^?!.,:;*_'"~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_'"~)]+(?!$))+/,del:/^(~~?)(?=[^\s~])((?:\\[\s\S]|[^\\])*?(?:\\[\s\S]|[^\s~\\]))\1(?=[^~]|$)/,text:W(/^(?:[^a-zA-Z0-9](?=emailProtocol)|(`+|~+|[^`~])(?:(?=[`~])|(?= {2,}\n)|(?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)|[\s\S]*?(?:(?=[\\<!\[`*~_]|\b_|protocol:\/\/|www\.|$)|[^ ](?= {2,}\n)|[^a-zA-Z0-9](?=emailProtocol)|[^a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-](?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@))))/).replace("protocol",Qb).replace(/emailProtocol/g,/(?:mailto|xmpp):/).getRegex()},bk={...rd,br:W(dy).replace("{2,}","*").getRegex(),text:W(rd.text).replace("\\b_","\\b_| {2,}\\n").replace(/\{2,\}/g,"*").getRegex()},xs={normal:dd,gfm:LA,pedantic:DA},ro={normal:pd,gfm:rd,breaks:bk,pedantic:vk},yk={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"},ey=t=>yk[t];function Je(t,e){if(e){if(Le.escapeTest.test(t))return t.replace(Le.escapeReplace,ey)}else if(Le.escapeTestNoEncode.test(t))return t.replace(Le.escapeReplaceNoEncode,ey);return t}function wk(t){return t.replace(Le.numericCharacterReference,(e,n,r)=>{let o=n===void 0?Number.parseInt(r,16):Number.parseInt(n,10);return o===0||o>1114111||o>=55296&&o<=57343?"\uFFFD":String.fromCodePoint(o)})}function ty(t){try{t=encodeURI(t).replace(Le.percentDecode,"%")}catch{return null}return t}function ny(t,e){let n=t.replace(Le.findPipe,(i,a,s)=>{let c=!1,l=a;for(;--l>=0&&s[l]==="\\";)c=!c;return c?"|":" |"}),r=n.split(Le.splitPipe),o=0;if(r[0].trim()||r.shift(),r.length>0&&!r.at(-1)?.trim()&&r.pop(),e)if(r.length>e)r.splice(e);else for(;r.length<e;)r.push("");for(;o<r.length;o++)r[o]=r[o].trim().replace(Le.slashPipe,"|");return r}function $t(t,e,n){let r=t.length;if(r===0)return"";let o=0;for(;o<r;){let i=t.charAt(r-o-1);if(i===e&&!n)o++;else if(i!==e&&n)o++;else break}return t.slice(0,r-o)}function ry(t){let e=t.split(`
`),n=e.length-1;for(;n>=0&&Le.blankLine.test(e[n]);)n--;return e.length-n<=2?t:e.slice(0,n+1).join(`
`)}function _s(t){return t.trim().toLowerCase().toUpperCase().toLowerCase()}function Ek(t,e){if(t.indexOf(e[1])===-1)return-1;let n=0;for(let r=0;r<t.length;r++)if(t[r]==="\\")r++;else if(t[r]===e[0])n++;else if(t[r]===e[1]&&(n--,n<0))return r;return n>0?-2:-1}function oy(t,e=0){let n=e,r="";for(let o of t)if(o==="	"){let i=4-n%4;r+=" ".repeat(i),n+=i}else r+=o,n++;return r}function iy(t,e,n,r,o){let i=e.href,a=e.title||null,s=t[1].replace(o.other.outputLinkReplace,"$1"),c=t[0].charAt(0)==="!";r.state.inLink=!0;let l=r.state.linkEmitted,u=r.state.inRawBlock;r.state.linkEmitted=!1;let f=r.inlineTokens(s),m=r.state.linkEmitted;if(r.state.linkEmitted=l,r.state.inLink=!1,!c){if(m){r.state.inRawBlock=u;return}r.state.linkEmitted=!0}return{type:c?"image":"link",raw:n,href:i,title:a,text:s,tokens:f}}function xk(t,e,n){let r=t.match(n.other.indentCodeCompensation);if(r===null)return e;let o=r[1];return e.split(`
`).map(i=>{let a=i.match(n.other.beginningSpace);if(a===null)return i;let[s]=a;return i.slice(Math.min(s.length,o.length))}).join(`
`)}function ay(t,e,n,r){if(!e.includes("<"))return!1;for(let o=0;o<e.length;o++){if(e[o]==="\\"){o++;continue}if(e[o]==="`"){let s=r.inline.code.exec(e.slice(o));if(s){o+=s[0].length-1;continue}}if(e[o]!=="<")continue;let i=t.slice(n+o),a=r.inline.tag.exec(i)||r.inline.autolink.exec(i);if(a){if(a[0].length>e.length-o)return!0;o+=a[0].length-1}}return!1}var Ts=class{options;rules;lexer;constructor(t){this.options=t||gn}space(t){let e=this.rules.block.newline.exec(t);if(e&&e[0].length>0)return{type:"space",raw:e[0]}}code(t){let e=this.rules.block.code.exec(t);if(e){let n=this.options.pedantic?e[0]:ry(e[0]),r=n.replace(this.rules.other.codeRemoveIndent,"");return{type:"code",raw:n,codeBlockStyle:"indented",text:r}}}fences(t){let e=this.rules.block.fences.exec(t);if(e){let n=e[0],r=xk(n,e[3]||"",this.rules);return{type:"code",raw:n,lang:e[2]?e[2].trim().replace(this.rules.inline.anyPunctuation,"$1"):e[2],text:r}}}heading(t){let e=this.rules.block.heading.exec(t);if(e){let n=e[2].trim();if(this.rules.other.endingHash.test(n)){let r=$t(n,"#");(this.options.pedantic||!r||this.rules.other.endingSpaceTabChar.test(r))&&(n=r.trim())}return{type:"heading",raw:$t(e[0],`
`),depth:e[1].length,text:n,tokens:this.lexer.inline(n)}}}hr(t){let e=this.rules.block.hr.exec(t);if(e)return{type:"hr",raw:$t(e[0],`
`)}}blockquote(t){let e=this.rules.block.blockquote.exec(t);if(e){let n=$t(e[0],`
`).split(`
`),r="",o="",i=[];for(;n.length>0;){let a=!1,s=[],c;for(c=0;c<n.length;c++)if(this.rules.other.blockquoteStart.test(n[c]))s.push(n[c]),a=!0;else if(!a)s.push(n[c]);else break;n=n.slice(c);let l=s.join(`
`),u=l.replace(this.rules.other.blockquoteSetextReplace,`
    $1`).replace(this.rules.other.blockquoteSetextReplace2,"");r=r?`${r}
${l}`:l,o=o?`${o}
${u}`:u;let f=this.lexer.state.top;if(this.lexer.state.top=!0,this.lexer.blockTokens(u,i,!0),this.lexer.state.top=f,n.length===0)break;let m=i.at(-1);if(m?.type==="code")break;if(m?.type==="blockquote"){let h=m,p=n.join(`
`),E=h.raw+`
`+p.replace(this.rules.other.blockquoteSetextReplace2,""),g=this.blockquote(E);i[i.length-1]=g;let S=E.substring(g.raw.length).replace(/^\n/,""),y=S?S.split(`
`).length:0,T=y?n.slice(0,-y):n;T.length>0&&(r=`${r}
${T.join(`
`)}`),o=o.substring(0,o.length-h.text.length)+g.text;break}else if(m?.type==="list"){let h=m,p=h.raw+`
`+n.join(`
`),E=this.list(p);i[i.length-1]=E,r=r.substring(0,r.length-m.raw.length)+E.raw,o=o.substring(0,o.length-h.raw.length)+E.raw,n=p.substring(i.at(-1).raw.length).split(`
`);continue}}return{type:"blockquote",raw:r,tokens:i,text:o}}}list(t){let e=this.rules.block.list.exec(t);if(e){let n=e[1].trim(),r=n.length>1,o={type:"list",raw:"",ordered:r,start:r?+n.slice(0,-1):"",loose:!1,items:[]};n=r?`\\d{1,9}\\${n.slice(-1)}`:`\\${n}`,this.options.pedantic&&(n=r?n:"[*+-]");let i=this.rules.other.listItemRegex(n),a=!1;for(;t;){let c=!1,l="",u="";if(!(e=i.exec(t))||this.rules.block.hr.test(t))break;l=e[0],t=t.substring(l.length);let f=e[2].split(`
`,1)[0],m=e[1].length,h=this.options.pedantic?oy(f,m):f.replace(this.rules.other.leadingSpaceTab,S=>oy(S,m)),p=t.split(`
`,1)[0],E=!h.trim(),g=0;if(this.options.pedantic?(g=2,u=h.trimStart()):E?g=m+1:(g=h.search(this.rules.other.nonSpaceChar),g=g>4?1:g,u=h.slice(g),g+=m),E&&this.rules.other.blankLine.test(p)&&(l+=p+`
`,t=t.substring(p.length+1),c=!0),!c){let S=this.rules.other.nextBulletRegex(g),y=this.rules.other.hrRegex(g),T=this.rules.other.fencesBeginRegex(g),w=this.rules.other.headingBeginRegex(g),_=this.rules.other.htmlBeginRegex(g),b=this.rules.other.blockquoteBeginRegex(g);for(;t;){let I=t.split(`
`,1)[0],z;if(p=I,this.options.pedantic?(p=p.replace(this.rules.other.listReplaceNesting,"  "),z=p):z=p.replace(this.rules.other.leadingSpaceTab,P=>P.replace(this.rules.other.tabCharGlobal,"    ")),T.test(p)||w.test(p)||_.test(p)||b.test(p)||S.test(p)||y.test(p))break;if(z.search(this.rules.other.nonSpaceChar)>=g||!p.trim())u+=`
`+z.slice(g);else{if(E||h.replace(this.rules.other.tabCharGlobal,"    ").search(this.rules.other.nonSpaceChar)>=4||T.test(h)||w.test(h)||y.test(h))break;u+=`
`+p}E=!p.trim(),l+=I+`
`,t=t.substring(I.length+1),h=z.slice(g)}}o.loose||(a?o.loose=!0:this.rules.other.doubleBlankLine.test(l)&&(a=!0)),o.items.push({type:"list_item",raw:l,task:!!this.options.gfm&&this.rules.other.listIsTask.test(u),loose:!1,text:u,tokens:[]}),o.raw+=l}let s=o.items.at(-1);if(s)s.raw=s.raw.trimEnd(),s.text=s.text.trimEnd();else return;o.raw=o.raw.trimEnd();for(let c of o.items)if(this.lexer.state.top=!1,c.tokens=this.lexer.blockTokens(c.text,[]),!o.loose){let l=c.tokens.filter(f=>f.type==="space"),u=l.length>0&&l.some(f=>this.rules.other.anyLine.test(f.raw));o.loose=u}for(let c of o.items){let l=c.tokens[0];if(c.task&&(l?.type==="text"||l?.type==="paragraph")){c.text=c.text.replace(this.rules.other.listReplaceTask,""),l.raw=l.raw.replace(this.rules.other.listReplaceTask,""),l.text=l.text.replace(this.rules.other.listReplaceTask,"");for(let f=this.lexer.inlineQueue.length-1;f>=0;f--)if(this.rules.other.listIsTask.test(this.lexer.inlineQueue[f].src)){this.lexer.inlineQueue[f].src=this.lexer.inlineQueue[f].src.replace(this.rules.other.listReplaceTask,"");break}let u=this.rules.other.listTaskCheckbox.exec(c.raw);if(u){let f={type:"checkbox",raw:u[0]+" ",checked:u[0]!=="[ ]"};c.checked=f.checked,o.loose?c.tokens[0]&&["paragraph","text"].includes(c.tokens[0].type)&&"tokens"in c.tokens[0]&&c.tokens[0].tokens?(c.tokens[0].raw=f.raw+c.tokens[0].raw,c.tokens[0].text=f.raw+c.tokens[0].text,c.tokens[0].tokens.unshift(f)):c.tokens.unshift({type:"paragraph",raw:f.raw,text:f.raw,tokens:[f]}):c.tokens.unshift(f)}}else c.task&&(c.task=!1)}if(o.loose)for(let c of o.items){c.loose=!0;for(let l of c.tokens)l.type==="text"&&(l.type="paragraph")}return o}}html(t){let e=this.rules.block.html.exec(t);if(e){let n=ry(e[0]);return{type:"html",block:!0,raw:n,pre:e[1]==="pre"||e[1]==="script"||e[1]==="style",text:n}}}def(t){let e=this.rules.block.def.exec(t);if(e){let n=_s(e[1]).replace(this.rules.other.multipleSpaceGlobal," "),r=e[2]?e[2].replace(this.rules.other.hrefBrackets,"$1").replace(this.rules.inline.anyPunctuation,"$1"):"",o=e[3]?e[3].substring(1,e[3].length-1).replace(this.rules.inline.anyPunctuation,"$1"):e[3];return{type:"def",tag:n,raw:$t(e[0],`
`),href:r,title:o}}}table(t){let e=this.rules.block.table.exec(t);if(!e||!this.rules.other.tableDelimiter.test(e[2]))return;let n=ny(e[1]),r=e[2].replace(this.rules.other.tableAlignChars,"").split("|"),o=e[3]?.trim()?e[3].replace(this.rules.other.tableRowBlankLine,"").split(`
`):[],i={type:"table",raw:$t(e[0],`
`),header:[],align:[],rows:[]};if(n.length===r.length){for(let a of r)this.rules.other.tableAlignRight.test(a)?i.align.push("right"):this.rules.other.tableAlignCenter.test(a)?i.align.push("center"):this.rules.other.tableAlignLeft.test(a)?i.align.push("left"):i.align.push(null);for(let a=0;a<n.length;a++)i.header.push({text:n[a],tokens:this.lexer.inline(n[a]),header:!0,align:i.align[a]});for(let a of o)i.rows.push(ny(a,i.header.length).map((s,c)=>({text:s,tokens:this.lexer.inline(s),header:!1,align:i.align[c]})));return i}}lheading(t){let e=this.rules.block.lheading.exec(t);if(e){let n=e[1].trim();return{type:"heading",raw:$t(e[0],`
`),depth:e[2].charAt(0)==="="?1:2,text:n,tokens:this.lexer.inline(n)}}}paragraph(t){let e=this.rules.block.paragraph.exec(t);if(e){let n=e[1].charAt(e[1].length-1)===`
`?e[1].slice(0,-1):e[1];return{type:"paragraph",raw:e[0],text:n,tokens:this.lexer.inline(n)}}}text(t){let e=this.rules.block.text.exec(t);if(e)return{type:"text",raw:e[0],text:e[0],tokens:this.lexer.inline(e[0])}}escape(t){let e=this.rules.inline.escape.exec(t);if(e)return{type:"escape",raw:e[0],text:e[1]}}tag(t){let e=this.rules.inline.tag.exec(t);if(e)return!this.lexer.state.inLink&&this.rules.other.startATag.test(e[0])?this.lexer.state.inLink=!0:this.lexer.state.inLink&&this.rules.other.endATag.test(e[0])&&(this.lexer.state.inLink=!1),!this.lexer.state.inRawBlock&&this.rules.other.startPreScriptTag.test(e[0])?this.lexer.state.inRawBlock=!0:this.lexer.state.inRawBlock&&this.rules.other.endPreScriptTag.test(e[0])&&(this.lexer.state.inRawBlock=!1),{type:"html",raw:e[0],inLink:this.lexer.state.inLink,inRawBlock:this.lexer.state.inRawBlock,block:!1,text:e[0]}}link(t){let e=this.rules.inline.link.exec(t);if(e){let n=e[0].charAt(0)==="!"?2:1;if(!this.options.pedantic&&ay(t,e[1],n,this.rules))return;let r=e[2].trim();if(!this.options.pedantic&&this.rules.other.startAngleBracket.test(r)){if(!this.rules.other.endAngleBracket.test(r))return;let a=$t(r.slice(0,-1),"\\");if((r.length-a.length)%2===0)return}else{let a=Ek(e[2],"()");if(a===-2)return;if(a>-1){let s=(e[0].indexOf("!")===0?5:4)+e[1].length+a;e[2]=e[2].substring(0,a),e[0]=e[0].substring(0,s).trim(),e[3]=""}}let o=e[2],i="";if(this.options.pedantic){let a=this.rules.other.pedanticHrefTitle.exec(o);a&&(o=a[1],i=a[3])}else i=e[3]?e[3].slice(1,-1):"";return o=o.trim(),this.rules.other.startAngleBracket.test(o)&&(this.options.pedantic&&!this.rules.other.endAngleBracket.test(r)?o=o.slice(1):o=o.slice(1,-1)),iy(e,{href:o&&o.replace(this.rules.inline.anyPunctuation,"$1"),title:i&&i.replace(this.rules.inline.anyPunctuation,"$1")},e[0],this.lexer,this.rules)}}reflink(t,e){let n;if((n=this.rules.inline.reflink.exec(t))||(n=this.rules.inline.nolink.exec(t))){let r=n[0].charAt(0)==="!"?2:1;if(!this.options.pedantic&&ay(t,n[1],r,this.rules))return;let o=(n[2]||n[1]).replace(this.rules.other.multipleSpaceGlobal," "),i=e[_s(o)];if(!i){let a=n[0].charAt(0);return{type:"text",raw:a,text:a}}return iy(n,i,n[0],this.lexer,this.rules)}}emStrong(t,e,n=""){let r=this.rules.inline.emStrongLDelim.exec(t);if(!(!r||!r[1]&&!r[2]&&!r[3]&&!r[4]||r[4]&&n.match(this.rules.other.unicodeAlphaNumeric))&&(!(r[1]||r[3])||!n||this.rules.inline.punctuation.exec(n))){let o=[...r[0]].length-1,i,a,s=o,c=0,l=r[0][0],u=n===l,f=l==="*"?this.rules.inline.emStrongRDelimAst:this.rules.inline.emStrongRDelimUnd;for(f.lastIndex=0,e=e.slice(-1*t.length+o);(r=f.exec(e))!==null;){if(i=r[1]||r[2]||r[3]||r[4]||r[5]||r[6],!i)continue;if(a=[...i].length,r[3]||r[4]){s+=a;continue}else if(r[5]||r[6]){if(o%3&&!((o+a)%3)){c+=a;continue}if(u)break}if(s-=a,s>0)continue;a=Math.min(a,a+s+c);let m=[...r[0]][0].length,h=t.slice(0,o+r.index+m+a);if(Math.min(o,a)%2){let E=h.slice(1,-1);return{type:"em",raw:h,text:E,tokens:this.lexer.inlineTokens(E)}}let p=h.slice(2,-2);return{type:"strong",raw:h,text:p,tokens:this.lexer.inlineTokens(p)}}}}codespan(t){let e=this.rules.inline.code.exec(t);if(e){let n=e[2].replace(this.rules.other.newLineCharGlobal," "),r=this.rules.other.nonSpaceChar.test(n),o=this.rules.other.startingSpaceChar.test(n)&&this.rules.other.endingSpaceChar.test(n);return r&&o&&(n=n.substring(1,n.length-1)),{type:"codespan",raw:e[0],text:n}}}br(t){let e=this.rules.inline.br.exec(t);if(e)return{type:"br",raw:e[0]}}del(t,e,n=""){let r=this.rules.inline.delLDelim.exec(t);if(r&&(!r[1]||!n||this.rules.inline.punctuation.exec(n))){let o=[...r[0]].length-1,i,a,s=o,c=this.rules.inline.delRDelim;for(c.lastIndex=0,e=e.slice(-1*t.length+o);(r=c.exec(e))!==null;){if(i=r[1]||r[2]||r[3]||r[4]||r[5]||r[6],!i||(a=[...i].length,a!==o))continue;if(r[3]||r[4]){s+=a;continue}if(s-=a,s>0)continue;a=Math.min(a,a+s);let l=[...r[0]][0].length,u=t.slice(0,o+r.index+l+a),f=u.slice(o,-o);return{type:"del",raw:u,text:f,tokens:this.lexer.inlineTokens(f)}}}}autolink(t){let e=this.rules.inline.autolink.exec(t);if(e){let n,r;return e[2]==="@"?(n=e[1],r="mailto:"+n):(n=e[1],r=n),{type:"link",raw:e[0],text:n,href:r,autolink:!0,tokens:[{type:"text",raw:n,text:n}]}}}url(t){let e;if(e=this.rules.inline.url.exec(t)){let n,r;if(e[2]==="@")n=e[0],r="mailto:"+n;else{let o;do o=e[0],e[0]=this.rules.inline._backpedal.exec(e[0])?.[0]??"";while(o!==e[0]);n=e[0],e[1]==="www."?r="http://"+e[0]:r=e[0]}return{type:"link",raw:e[0],text:n,href:r,autolink:!0,tokens:[{type:"text",raw:n,text:n}]}}}inlineText(t){let e=this.rules.inline.text.exec(t);if(e){let n=this.lexer.state.inRawBlock;return{type:"text",raw:e[0],text:n?e[0]:wk(e[0]),escaped:n}}}},ct=class od{tokens;options;state;inlineQueue;tokenizer;constructor(e){this.tokens=[],this.tokens.links=Object.create(null),this.options=e||gn,this.options.tokenizer=this.options.tokenizer||new Ts,this.tokenizer=this.options.tokenizer,this.tokenizer.options=this.options,this.tokenizer.lexer=this,this.inlineQueue=[],this.state={inLink:!1,inRawBlock:!1,linkEmitted:!1,top:!0};let n={other:Le,block:xs.normal,inline:ro.normal};this.options.pedantic?(n.block=xs.pedantic,n.inline=ro.pedantic):this.options.gfm&&(n.block=xs.gfm,this.options.breaks?n.inline=ro.breaks:n.inline=ro.gfm),this.tokenizer.rules=n}static get rules(){return{block:xs,inline:ro}}static lex(e,n){return new od(n).lex(e)}static lexInline(e,n){return new od(n).inlineTokens(e)}lex(e){e=e.replace(Le.carriageReturn,`
`),this.blockTokens(e,this.tokens);for(let n=0;n<this.inlineQueue.length;n++){let r=this.inlineQueue[n];this.inlineTokens(r.src,r.tokens)}return this.inlineQueue=[],this.tokens}blockTokens(e,n=[],r=!1){this.tokenizer.lexer=this,this.options.pedantic&&(e=e.replace(Le.tabCharGlobal,"    ").replace(Le.spaceLine,""));let o=1/0;for(;e;){if(e.length<o)o=e.length;else{this.infiniteLoopError(e.charCodeAt(0));break}let i;if(this.options.extensions?.block?.some(s=>(i=s.call({lexer:this},e,n))?(e=e.substring(i.raw.length),n.push(i),!0):!1))continue;if(i=this.tokenizer.space(e)){e=e.substring(i.raw.length);let s=n.at(-1);i.raw.length===1&&s!==void 0?s.raw+=`
`:n.push(i);continue}if(i=this.tokenizer.code(e)){e=e.substring(i.raw.length);let s=n.at(-1);s?.type==="paragraph"||s?.type==="text"?(s.raw+=(s.raw.endsWith(`
`)?"":`
`)+i.raw,s.text+=`
`+i.text,this.inlineQueue.at(-1).src=s.text):n.push(i);continue}if(i=this.tokenizer.fences(e)){e=e.substring(i.raw.length),n.push(i);continue}if(i=this.tokenizer.heading(e)){e=e.substring(i.raw.length),n.push(i);continue}if(i=this.tokenizer.hr(e)){e=e.substring(i.raw.length),n.push(i);continue}if(i=this.tokenizer.blockquote(e)){e=e.substring(i.raw.length),n.push(i);continue}if(i=this.tokenizer.list(e)){e=e.substring(i.raw.length),n.push(i);continue}if(i=this.tokenizer.html(e)){e=e.substring(i.raw.length),n.push(i);continue}if(i=this.tokenizer.def(e)){e=e.substring(i.raw.length);let s=n.at(-1);s?.type==="paragraph"||s?.type==="text"?(s.raw+=(s.raw.endsWith(`
`)?"":`
`)+i.raw,s.text+=`
`+i.raw,this.inlineQueue.at(-1).src=s.text):this.tokens.links[i.tag]||(this.tokens.links[i.tag]={href:i.href,title:i.title},n.push(i));continue}if(i=this.tokenizer.table(e)){e=e.substring(i.raw.length),n.push(i);continue}if(i=this.tokenizer.lheading(e)){e=e.substring(i.raw.length),n.push(i);continue}let a=e;if(this.options.extensions?.startBlock){let s=1/0,c=e.slice(1),l;this.options.extensions.startBlock.forEach(u=>{l=u.call({lexer:this},c),typeof l=="number"&&l>=0&&(s=Math.min(s,l))}),s<1/0&&s>=0&&(a=e.substring(0,s+1))}if(this.state.top&&(i=this.tokenizer.paragraph(a))){let s=n.at(-1);r&&s?.type==="paragraph"?(s.raw+=(s.raw.endsWith(`
`)?"":`
`)+i.raw,s.text+=`
`+i.text,this.inlineQueue.pop(),this.inlineQueue.at(-1).src=s.text):n.push(i),r=a.length!==e.length,e=e.substring(i.raw.length);continue}if(i=this.tokenizer.text(e)){e=e.substring(i.raw.length);let s=n.at(-1);s?.type==="text"?(s.raw+=(s.raw.endsWith(`
`)?"":`
`)+i.raw,s.text+=`
`+i.text,this.inlineQueue.pop(),this.inlineQueue.at(-1).src=s.text):n.push(i);continue}if(e){this.infiniteLoopError(e.charCodeAt(0));break}}return this.state.top=!0,n}inline(e,n=[]){return this.inlineQueue.push({src:e,tokens:n}),n}linkInText(e){if(!e.includes("["))return!1;let n=this.tokenizer.rules.inline.link;for(let r of e.matchAll(this.tokenizer.rules.inline.blockSkip))if(n.test(r[0])&&e.charAt(r.index-1)!=="!")return!0;for(let r of e.matchAll(this.tokenizer.rules.inline.reflinkSearch)){let o=r[0],i=o.lastIndexOf("[");if(!(o.charAt(0)==="!"||!Object.hasOwn(this.tokens.links,_s(o.slice(i+1,-1))))&&!(i>1&&this.linkInText(o.slice(1,i-1))))return!0}return!1}inlineTokens(e,n=[]){this.tokenizer.lexer=this;let r=e;if(this.tokens.links&&e.includes("[")){let s=this.tokenizer.rules.inline.reflinkSearch,c=l=>{let u=l.lastIndexOf("[");if(!Object.hasOwn(this.tokens.links,_s(l.slice(u+1,-1))))return l;if(u>1&&l.charAt(0)!=="!"){let f=l.slice(1,u-1);if(this.linkInText(f))return"["+f.replace(s,c)+"]["+"a".repeat(l.length-u-2)+"]"}return"["+"a".repeat(l.length-2)+"]"};r=r.replace(s,c)}r=r.replace(this.tokenizer.rules.inline.anyPunctuation,s=>"+".repeat(s.length)),r=r.replace(this.tokenizer.rules.inline.blockSkip,(s,c,l)=>{let u=l?l.length:0;return s.slice(0,u)+"["+"a".repeat(s.length-u-2)+"]"}),r=this.options.hooks?.emStrongMask?.call({lexer:this},r)??r;let o=!1,i="",a=1/0;for(;e;){if(e.length<a)a=e.length;else{this.infiniteLoopError(e.charCodeAt(0));break}o||(i=""),o=!1;let s;if(this.options.extensions?.inline?.some(l=>(s=l.call({lexer:this},e,n))?(e=e.substring(s.raw.length),n.push(s),!0):!1))continue;if(s=this.tokenizer.escape(e)){e=e.substring(s.raw.length),n.push(s);continue}if(s=this.tokenizer.tag(e)){e=e.substring(s.raw.length),n.push(s);continue}if(s=this.tokenizer.link(e)){e=e.substring(s.raw.length),n.push(s);continue}if(s=this.tokenizer.reflink(e,this.tokens.links)){e=e.substring(s.raw.length);let l=n.at(-1);s.type==="text"&&l?.type==="text"?(l.raw+=s.raw,l.text+=s.text):n.push(s);continue}if(s=this.tokenizer.emStrong(e,r,i)){e=e.substring(s.raw.length),n.push(s);continue}if(s=this.tokenizer.codespan(e)){e=e.substring(s.raw.length),n.push(s);continue}if(s=this.tokenizer.br(e)){e=e.substring(s.raw.length),n.push(s);continue}if(s=this.tokenizer.del(e,r,i)){e=e.substring(s.raw.length),n.push(s);continue}if(s=this.tokenizer.autolink(e)){e=e.substring(s.raw.length),n.push(s);continue}if(!this.state.inLink&&(s=this.tokenizer.url(e))){e=e.substring(s.raw.length),n.push(s);continue}let c=e;if(this.options.extensions?.startInline){let l=1/0,u=e.slice(1),f;this.options.extensions.startInline.forEach(m=>{f=m.call({lexer:this},u),typeof f=="number"&&f>=0&&(l=Math.min(l,f))}),l<1/0&&l>=0&&(c=e.substring(0,l+1))}if(s=this.tokenizer.inlineText(c)){e=e.substring(s.raw.length),s.raw.slice(-1)!=="_"&&(i=s.raw.slice(-1)),o=!0;let l=n.at(-1);l?.type==="text"?(l.raw+=s.raw,l.text+=s.text):n.push(s);continue}if(e){this.infiniteLoopError(e.charCodeAt(0));break}}return n}infiniteLoopError(e){let n="Infinite loop on byte: "+e;if(this.options.silent)console.error(n);else throw new Error(n)}},As=class{options;parser;constructor(t){this.options=t||gn}space(t){return""}code({text:t,lang:e,escaped:n}){let r=(e||"").match(Le.notSpaceStart)?.[0],o=t?t.replace(Le.endingNewline,"")+`
`:"";return r?'<pre><code class="language-'+Je(r)+'">'+(n?o:Je(o,!0))+`</code></pre>
`:"<pre><code>"+(n?o:Je(o,!0))+`</code></pre>
`}blockquote({tokens:t}){return`<blockquote>
${this.parser.parse(t)}</blockquote>
`}html({text:t}){return t}def(t){return""}heading({tokens:t,depth:e}){return`<h${e}>${this.parser.parseInline(t)}</h${e}>
`}hr(t){return`<hr>
`}list(t){let e=t.ordered,n=t.start,r="";for(let a=0;a<t.items.length;a++){let s=t.items[a];r+=this.listitem(s)}let o=e?"ol":"ul",i=e&&n!==1?' start="'+n+'"':"";return"<"+o+i+`>
`+r+"</"+o+`>
`}listitem(t){return`<li>${this.parser.parse(t.tokens)}</li>
`}checkbox({checked:t}){return"<input "+(t?'checked="" ':"")+'disabled="" type="checkbox"> '}paragraph({tokens:t}){return`<p>${this.parser.parseInline(t)}</p>
`}table(t){let e="",n="";for(let o=0;o<t.header.length;o++)n+=this.tablecell(t.header[o]);e+=this.tablerow({text:n});let r="";for(let o=0;o<t.rows.length;o++){let i=t.rows[o];n="";for(let a=0;a<i.length;a++)n+=this.tablecell(i[a]);r+=this.tablerow({text:n})}return r&&(r=`<tbody>${r}</tbody>`),`<table>
<thead>
`+e+`</thead>
`+r+`</table>
`}tablerow({text:t}){return`<tr>
${t}</tr>
`}tablecell(t){let e=this.parser.parseInline(t.tokens),n=t.header?"th":"td";return(t.align?`<${n} align="${t.align}">`:`<${n}>`)+e+`</${n}>
`}strong({tokens:t}){return`<strong>${this.parser.parseInline(t)}</strong>`}em({tokens:t}){return`<em>${this.parser.parseInline(t)}</em>`}codespan({text:t}){return`<code>${Je(t,!0)}</code>`}br(t){return"<br>"}del({tokens:t}){return`<del>${this.parser.parseInline(t)}</del>`}link({href:t,title:e,text:n,tokens:r,autolink:o}){let i=o?Je(n,!0):this.parser.parseInline(r),a=ty(t);if(a===null)return i;t=Je(a,o);let s='<a href="'+t+'"';return e&&(s+=' title="'+Je(e)+'"'),s+=">"+i+"</a>",s}image({href:t,title:e,text:n,tokens:r}){r&&(n=this.parser.parseInline(r,this.parser.textRenderer));let o=ty(t);if(o===null)return Je(n);t=o;let i=`<img src="${Je(t)}" alt="${Je(n)}"`;return e&&(i+=` title="${Je(e)}"`),i+=">",i}text(t){return"tokens"in t&&t.tokens?this.parser.parseInline(t.tokens):"escaped"in t&&t.escaped?t.text:Je(t.text)}},hd=class{strong({text:t}){return t}em({text:t}){return t}codespan({text:t}){return t}del({text:t}){return t}html({text:t}){return t}text({text:t}){return t}link({text:t}){return""+t}image({text:t}){return""+t}br(){return""}checkbox({raw:t}){return t}},ut=class id{options;renderer;textRenderer;constructor(e){this.options=e||gn,this.options.renderer=this.options.renderer||new As,this.renderer=this.options.renderer,this.renderer.options=this.options,this.renderer.parser=this,this.textRenderer=new hd}static parse(e,n){return new id(n).parse(e)}static parseInline(e,n){return new id(n).parseInline(e)}parse(e){this.renderer.parser=this;let n="";for(let r=0;r<e.length;r++){let o=e[r];if(this.options.extensions?.renderers?.[o.type]){let a=o,s=this.options.extensions.renderers[a.type].call({parser:this},a);if(s!==!1||!["space","hr","heading","code","table","blockquote","list","checkbox","html","def","paragraph","text"].includes(a.type)){n+=s||"";continue}}let i=o;switch(i.type){case"space":{n+=this.renderer.space(i);break}case"hr":{n+=this.renderer.hr(i);break}case"heading":{n+=this.renderer.heading(i);break}case"code":{n+=this.renderer.code(i);break}case"table":{n+=this.renderer.table(i);break}case"blockquote":{n+=this.renderer.blockquote(i);break}case"list":{n+=this.renderer.list(i);break}case"checkbox":{n+=this.renderer.checkbox(i);break}case"html":{n+=this.renderer.html(i);break}case"def":{n+=this.renderer.def(i);break}case"paragraph":{n+=this.renderer.paragraph(i);break}case"text":{n+=this.renderer.text(i);break}default:{let a='Token with "'+i.type+'" type was not found.';if(this.options.silent)return console.error(a),"";throw new Error(a)}}}return n}parseInline(e,n=this.renderer){this.renderer.parser=this;let r="";for(let o=0;o<e.length;o++){let i=e[o];if(this.options.extensions?.renderers?.[i.type]){let s=this.options.extensions.renderers[i.type].call({parser:this},i);if(s!==!1||!["escape","html","link","image","checkbox","strong","em","codespan","br","del","text"].includes(i.type)){r+=s||"";continue}}let a=i;switch(a.type){case"escape":{r+=n.text(a);break}case"html":{r+=n.html(a);break}case"link":{r+=n.link(a);break}case"image":{r+=n.image(a);break}case"checkbox":{r+=n.checkbox(a);break}case"strong":{r+=n.strong(a);break}case"em":{r+=n.em(a);break}case"codespan":{r+=n.codespan(a);break}case"br":{r+=n.br(a);break}case"del":{r+=n.del(a);break}case"text":{r+=n.text(a);break}default:{let s='Token with "'+a.type+'" type was not found.';if(this.options.silent)return console.error(s),"";throw new Error(s)}}}return r}},oo=class{options;block;constructor(t){this.options=t||gn}static passThroughHooks=new Set(["preprocess","postprocess","processAllTokens","emStrongMask"]);static passThroughHooksRespectAsync=new Set(["preprocess","postprocess","processAllTokens"]);preprocess(t){return t}postprocess(t){return t}processAllTokens(t){return t}emStrongMask(t){return t}provideLexer(t=this.block){return t?ct.lex:ct.lexInline}provideParser(t=this.block){return t?ut.parse:ut.parseInline}},fd=class{defaults=ad();options=this.setOptions;parse=this.parseMarkdown(!0);parseInline=this.parseMarkdown(!1);Parser=ut;Renderer=As;TextRenderer=hd;Lexer=ct;Tokenizer=Ts;Hooks=oo;constructor(...t){this.use(...t)}walkTokens(t,e){let n=[];for(let r of t)switch(n=n.concat(e.call(this,r)),r.type){case"table":{let o=r;for(let i of o.header)n=n.concat(this.walkTokens(i.tokens,e));for(let i of o.rows)for(let a of i)n=n.concat(this.walkTokens(a.tokens,e));break}case"list":{let o=r;n=n.concat(this.walkTokens(o.items,e));break}default:{let o=r;this.defaults.extensions?.childTokens?.[o.type]?this.defaults.extensions.childTokens[o.type].forEach(i=>{let a=o[i].flat(1/0);n=n.concat(this.walkTokens(a,e))}):o.tokens&&(n=n.concat(this.walkTokens(o.tokens,e)))}}return n}use(...t){let e=this.defaults.extensions||{renderers:{},childTokens:{}};return t.forEach(n=>{let r={...n};if(r.async=this.defaults.async||r.async||!1,n.extensions&&(n.extensions.forEach(o=>{if(!o.name)throw new Error("extension name required");if("renderer"in o){let i=e.renderers[o.name];i?e.renderers[o.name]=function(...a){let s=o.renderer.apply(this,a);return s===!1&&(s=i.apply(this,a)),s}:e.renderers[o.name]=o.renderer}if("tokenizer"in o){if(!o.level||o.level!=="block"&&o.level!=="inline")throw new Error("extension level must be 'block' or 'inline'");let i=e[o.level];i?i.unshift(o.tokenizer):e[o.level]=[o.tokenizer],o.start&&(o.level==="block"?e.startBlock?e.startBlock.push(o.start):e.startBlock=[o.start]:o.level==="inline"&&(e.startInline?e.startInline.push(o.start):e.startInline=[o.start]))}"childTokens"in o&&o.childTokens&&(e.childTokens[o.name]=o.childTokens)}),r.extensions=e),n.renderer){let o=this.defaults.renderer||new As(this.defaults);for(let i in n.renderer){if(!(i in o))throw new Error(`renderer '${i}' does not exist`);if(["options","parser"].includes(i))continue;let a=i,s=n.renderer[a],c=o[a];o[a]=(...l)=>{let u=s.apply(o,l);return u===!1&&(u=c.apply(o,l)),u||""}}r.renderer=o}if(n.tokenizer){let o=this.defaults.tokenizer||new Ts(this.defaults);for(let i in n.tokenizer){if(!(i in o))throw new Error(`tokenizer '${i}' does not exist`);if(["options","rules","lexer"].includes(i))continue;let a=i,s=n.tokenizer[a],c=o[a];o[a]=(...l)=>{let u=s.apply(o,l);return u===!1&&(u=c.apply(o,l)),u}}r.tokenizer=o}if(n.hooks){let o=this.defaults.hooks||new oo;for(let i in n.hooks){if(!(i in o))throw new Error(`hook '${i}' does not exist`);if(["options","block"].includes(i))continue;let a=i,s=n.hooks[a],c=o[a];oo.passThroughHooks.has(i)?o[a]=l=>{if(this.defaults.async&&oo.passThroughHooksRespectAsync.has(i))return(async()=>{let f=await s.call(o,l);return c.call(o,f)})();let u=s.call(o,l);return c.call(o,u)}:o[a]=(...l)=>{if(this.defaults.async)return(async()=>{let f=await s.apply(o,l);return f===!1&&(f=await c.apply(o,l)),f})();let u=s.apply(o,l);return u===!1&&(u=c.apply(o,l)),u}}r.hooks=o}if(n.walkTokens){let o=this.defaults.walkTokens,i=n.walkTokens;r.walkTokens=function(a){let s=[];return s.push(i.call(this,a)),o&&(s=s.concat(o.call(this,a))),s}}this.defaults={...this.defaults,...r}}),this}setOptions(t){return this.defaults={...this.defaults,...t},this}lexer(t,e){return ct.lex(t,e??this.defaults)}parser(t,e){return ut.parse(t,e??this.defaults)}parseMarkdown(t){return(e,n)=>{let r={...n},o={...this.defaults,...r},i=this.onError(!!o.silent,!!o.async);if(this.defaults.async===!0&&r.async===!1)return i(new Error("marked(): The async option was set to true by an extension. Remove async: false from the parse options object to return a Promise."));if(typeof e>"u"||e===null)return i(new Error("marked(): input parameter is undefined or null"));if(typeof e!="string")return i(new Error("marked(): input parameter is of type "+Object.prototype.toString.call(e)+", string expected"));if(o.hooks&&(o.hooks.options=o,o.hooks.block=t),o.async)return(async()=>{let a=o.hooks?await o.hooks.preprocess(e):e,s=await(o.hooks?await o.hooks.provideLexer(t):t?ct.lex:ct.lexInline)(a,o),c=o.hooks?await o.hooks.processAllTokens(s):s;o.walkTokens&&await Promise.all(this.walkTokens(c,o.walkTokens));let l=await(o.hooks?await o.hooks.provideParser(t):t?ut.parse:ut.parseInline)(c,o);return o.hooks?await o.hooks.postprocess(l):l})().catch(i);try{o.hooks&&(e=o.hooks.preprocess(e));let a=(o.hooks?o.hooks.provideLexer(t):t?ct.lex:ct.lexInline)(e,o);o.hooks&&(a=o.hooks.processAllTokens(a)),o.walkTokens&&this.walkTokens(a,o.walkTokens);let s=(o.hooks?o.hooks.provideParser(t):t?ut.parse:ut.parseInline)(a,o);return o.hooks&&(s=o.hooks.postprocess(s)),s}catch(a){return i(a)}}}onError(t,e){return n=>{if(n.message+=`
Please report this to https://github.com/markedjs/marked.`,t){let r="<p>An error occurred:</p><pre>"+Je(n.message+"",!0)+"</pre>";return e?Promise.resolve(r):r}if(e)return Promise.reject(n);throw n}}},mn=new fd;function ue(t,e){return mn.parse(t,e)}ue.options=ue.setOptions=function(t){return mn.setOptions(t),ue.defaults=mn.defaults,sy(ue.defaults),ue};ue.getDefaults=ad;ue.defaults=gn;function Sk(...t){return mn.use(...t),ue.defaults=mn.defaults,sy(ue.defaults),ue}ue.use=Sk;ue.walkTokens=function(t,e){return mn.walkTokens(t,e)};ue.parseInline=mn.parseInline;ue.Parser=ut;ue.parser=ut.parse;ue.Renderer=As;ue.TextRenderer=hd;ue.Lexer=ct;ue.lexer=ct.lex;ue.Tokenizer=Ts;ue.Hooks=oo;ue.parse=ue;var P2=ue.options,M2=ue.setOptions,z2=ue.walkTokens,L2=ue.parseInline;var D2=ut.parse,$2=ct.lex;var _k=new fd({gfm:!0,breaks:!0}),gy=["a","p","br","strong","em","b","i","u","s","del","code","pre","ul","ol","li","blockquote","h1","h2","h3","h4","h5","h6","hr","span","table","thead","tbody","tr","th","td"],vy=["href","title","class","target","rel"],by={ALLOWED_TAGS:gy,ALLOWED_ATTR:vy,ALLOW_DATA_ATTR:!1,ALLOW_ARIA_ATTR:!1},Tk={...by,ALLOWED_TAGS:[...gy,"img"],ALLOWED_ATTR:[...vy,"src","alt","width","height"]},Ak=/^language-[A-Za-z0-9_+#.-]+$/,kk=new Set(["CODE","PRE"]);function Ik(t){t.nodeName==="A"&&t.hasAttribute("href")?(t.setAttribute("target","_blank"),t.setAttribute("rel","noopener noreferrer")):(t.removeAttribute("target"),t.removeAttribute("rel"));let e=t.getAttribute("class");if(e===null)return;let n=kk.has(t.nodeName)?e.split(/\s+/).filter(r=>Ak.test(r)):[];if(n.length===0){t.removeAttribute("class");return}t.setAttribute("class",n.join(" "))}var ks=null;function Rk(){return ks===null&&(ks=Xb(),ks.addHook("afterSanitizeAttributes",Ik)),ks}function lo(t,e){let n=e?.allowImages===!0,r=_k.parse(t,{async:!1});return Rk().sanitize(r,n?Tk:by).trim()}var Is=class{#e;#t=null;#n=0;#o="";#r=null;constructor(e){this.#e=e}get deltas(){return this.#n}countDelta(){this.#n+=1}queue(e){this.#o=e,this.#i(),this.#r===null&&(this.#r=requestAnimationFrame(()=>{this.#r=null,this.into(this.#o)}))}into(e){this.#r!==null&&(cancelAnimationFrame(this.#r),this.#r=null),this.#o=e;let n=this.#i();return n.innerHTML=lo(e,{allowImages:this.#e.allowImages()}),this.#e.follow(),n}end(){this.#r!==null&&this.into(this.#o),this.#t=null}#i(){return this.#t===null&&(this.#t=this.#e.openBubble(),this.#n=0),this.#t}};var Ck=4,Nk=120;function yy(t){if(typeof t!="object"||t===null)return null;let e=t.prompts;if(!Array.isArray(e))return null;let n=e.filter(r=>typeof r=="string").map(r=>r.trim()).filter(r=>r!==""&&r.length<=120).slice(0,4);return n.length===0?null:n}function co(t,e,n){let r=yy(t);if(r===null)return null;let o=document.createElement("div");o.className="suggestions",o.setAttribute("part","suggestions"),o.setAttribute("role","group"),o.setAttribute("aria-label",e.suggestions);for(let i of r){let a=document.createElement("button");a.type="button",a.className="suggestion-chip",a.setAttribute("part","suggestion-chip"),a.textContent=i,a.addEventListener("click",()=>n(i)),o.appendChild(a)}return o}function wy(t,e,n){let r=t.getAttribute("data-starters");if(r===null)return null;let o;try{o=JSON.parse(r)}catch{return console.warn(`<ag-ui-chat>: data-starters is not valid JSON, so no starters are shown. It takes an array of strings, e.g. data-starters='["Summarise this page"]'.`),null}return co({prompts:o},e,n)}function Rs(t,e){for(let n of Array.from(t.querySelectorAll("pre"))){let r=n.querySelector("code");r===null||n.querySelector(".code-copy")!==null||(n.classList.add("has-copy"),n.append(Ok(r,e)))}}function Ok(t,e){let n=t.textContent,r=document.createElement("button");return r.type="button",r.className="code-copy",r.setAttribute("part","code-copy"),r.textContent=e.copyCode,r.title=e.copyCode,r.setAttribute("aria-label",e.copyCode),r.addEventListener("click",()=>{Pk(n).then(o=>{Mk(r,o?e.copied:e.copyFailed,e)})}),r}async function Pk(t){let e=navigator.clipboard;if(e===void 0)return!1;try{return await e.writeText(t),!0}catch{return!1}}function Mk(t,e,n){t.textContent=e,t.dataset.state=e===n.copied?"copied":"failed",setTimeout(()=>{t.textContent=n.copyCode,delete t.dataset.state},1500)}function md(t){let e=t.replace(/[._-]+/g," ").trim();return e===""?t:e.charAt(0).toUpperCase()+e.slice(1)}var Cs=class{element;#e;#t;#n;#o;#r=!1;constructor(e=pe){this.#o=e,this.element=document.createElement("div"),this.element.className="thoughts",this.element.setAttribute("part","thoughts"),this.element.setAttribute("data-streaming",""),this.#n=document.createElement("button"),this.#n.type="button",this.#n.className="thoughts-toggle",this.#n.setAttribute("part","thoughts-toggle"),this.#n.setAttribute("aria-expanded","true"),this.#e=document.createElement("span"),this.#e.className="thoughts-label",this.#e.setAttribute("part","thoughts-label"),this.#e.textContent=e.thinking,this.#n.append(this.#e),this.#t=document.createElement("pre"),this.#t.className="thoughts-body",this.#t.setAttribute("part","thoughts-body"),this.#n.addEventListener("click",()=>{this.#i(!this.#r)}),this.element.append(this.#n,this.#t)}stream(e){this.#t.textContent=e}collapse(){this.#r||(this.element.removeAttribute("data-streaming"),this.#e.textContent=this.#o.thoughts,this.#i(!0))}#i(e){this.#r=e,this.#t.hidden=e,this.#n.setAttribute("aria-expanded",String(!e))}};function Ns(t,e){try{return t()}catch(n){return console.warn(`ag-ui-chat: render failed for ${e}`,n),null}}function Ey(t,e){for(let n of Array.from(t.childNodes))n.nodeType===Node.TEXT_NODE?e.push({node:n,parent:t}):Ey(n,e)}function xy(t){let e=[];Ey(t,e);let n=0;for(let{node:r,parent:o}of e){let i=document.createDocumentFragment();for(let a of r.data.split(/(\s+)/)){if(a==="")continue;if(/\s/.test(a)){i.appendChild(document.createTextNode(a));continue}let s=document.createElement("span");s.className="word",s.style.setProperty("--ag-ui-word-index",String(n)),s.textContent=a,i.appendChild(s),n+=1}o.replaceChild(i,r)}}function Sy({viewport:t,onMissedContent:e}){let n=!0,r=!1,o=()=>t.scrollHeight-t.scrollTop-t.clientHeight<=4,i=u=>{u!==r&&(r=u,e(r))},a=()=>{t.scrollTop=t.scrollHeight},s=()=>{n=o(),n&&i(!1)},c=()=>{if(n){a();return}i(!0)};t.addEventListener("scroll",s,{passive:!0});let l=new ResizeObserver(()=>{n&&a()});return l.observe(t),{follow:c,jump:()=>{n=!0,i(!1),a()},following:()=>n,dispose:()=>{t.removeEventListener("scroll",s),l.disconnect()}}}var Os=class{#e;#t=new Map;#n=new Map;#o=new Set;#r;#i=null;#a=null;#l=null;constructor(e){this.#e=e}mountScroller(e,n){e.addEventListener("click",()=>{this.jump()},{signal:n}),this.#r=Sy({viewport:this.#e.messages,onMissedContent:r=>{e.dataset.missed=String(r)}})}disposeScroller(){this.#r.dispose()}follow(){this.#r.follow()}jump(){this.#r.jump()}isEmpty(){return!this.#e.emptyWrap.hidden}card(e){return this.#t.get(e)}cards(){return this.#t.values()}forgetCard(e){this.#t.delete(e)}setCardElement(e,n){this.#n.set(e,n)}markServerSettled(e){this.#o.add(e)}isServerSettled(e){return this.#o.has(e)}collapseThoughts(){this.#l?.collapse()}closeGroup(){this.#a!==null&&this.#a.childElementCount===0&&(this.#a.remove(),this.updateEmptyState()),this.#a=null,this.#l=null}releaseTurn(){this.#a=null,this.#l=null,this.hidePending(),this.#t.clear()}forgetCards(){this.#o.clear(),this.#n.clear()}empty(){this.#e.messages.replaceChildren(this.#e.emptyWrap),this.updateEmptyState()}append(e,n){let r=document.createElement("div");return r.className=`message message--${e}`,r.setAttribute("part",`message message-${e}`),e===He.ASSISTANT?(r.innerHTML=lo(n,{allowImages:this.#e.allowImages()}),Rs(r,this.#e.strings()),this.ensureGroup().appendChild(r)):(this.#a=null,r.textContent=n,this.#e.messages.appendChild(r)),this.updateEmptyState(),e===He.USER?this.jump():this.follow(),r}ensureGroup(){if(this.#a===null){let e=document.createElement("div");e.className="answer",e.setAttribute("part","answer"),this.#a=e,this.#e.messages.appendChild(e),this.updateEmptyState()}return this.#a}revealWords(e){this.#e.element.getAttribute("data-text-animation")==="word"&&xy(e)}updateEmptyState(){this.#e.emptyWrap.hidden=this.#e.messages.childElementCount>1,this.#e.element.toggleAttribute("data-empty",!this.#e.emptyWrap.hidden)}appendStoppedNote(){let e=document.createElement("div");e.className="stopped-note",e.setAttribute("part","stopped"),e.setAttribute("role","status"),e.textContent=this.#e.strings().stopped,this.ensureGroup().appendChild(e),this.updateEmptyState(),this.follow()}showPending(){if(this.#i!==null)return;let e=document.createElement("div");e.className="pending",e.setAttribute("part","pending"),e.setAttribute("role","status"),e.setAttribute("aria-label",this.#e.strings().thinking);for(let n=0;n<3;n+=1){let r=document.createElement("span");r.className="pending-dot",e.appendChild(r)}this.#i=e,this.ensureGroup().appendChild(e),this.updateEmptyState(),this.follow()}hidePending(){this.#i?.remove(),this.#i=null}showThoughts(){if(this.#l===null){this.#l=new Cs(this.#e.strings());let e=this.ensureGroup();e.insertBefore(this.#l.element,e.firstChild),this.updateEmptyState(),this.follow()}return this.#l}noticeIfSkillLoad(e){let n=ja(e);return n===null?!1:(this.appendNotice("\u2728",le(this.#e.strings().usingSkill,{name:n}),"skill"),!0)}appendNotice(e,n,r,o){this.ensureGroup().appendChild(ds(e,n,r,o)),this.updateEmptyState(),this.follow()}renderToolOutput(e,n){let r=Ns(()=>e(n.args),`tool ${n.name}`);r!==null&&(this.#n.get(n.id)?.after(r),this.afterGrew())}afterGrew(){this.updateEmptyState(),this.follow()}cardFor(e){let n=this.#t.get(e.id);if(n!==void 0)return n;let r=this.#e.resolveTool(e.name)?.parameters[Ie],o=typeof r=="string"?r:this.#e.toolSummaries()[e.name]??this.#e.serverSummary(e.name)??md(e.name),i=new Kr(e.name,e.args,o,this.#e.strings(),{formatPayload:a=>this.#e.formatToolPayload(a)});return this.#t.set(e.id,i),this.ensureGroup().appendChild(i.element),this.updateEmptyState(),this.follow(),i}};var Ps=class{#e;#t=new Map;#n=new Set;#o=new Map;constructor(e){this.#e=e}register(e){this.#t.set(e.type,e),this.#n.delete(e.type)}has(e){return this.#t.has(e)}unhandledTypes(){return[...this.#n]}clearBlocks(){this.#o.clear()}draw(e,n,r){let o=this.#t.get(n);if(o===void 0){this.#n.add(n);return}let i=Ns(()=>o.render(r),`activity ${n}`);if(i===null){this.#r(e,n,o.removedNotice,r);return}let a=this.#o.get(e);a===void 0?this.#e.ensureGroup().appendChild(i):a.replaceWith(i),this.#o.set(e,i),this.#e.afterTranscriptGrew()}#r(e,n,r,o){let i=this.#o.has(e);this.#o.get(e)?.remove(),this.#o.delete(e),console.warn(`ag-ui-chat: activity ${e} (${n}) was not drawable and has been removed. A chart's points must each be a finite JSON number; a numeric column serialised as a string (a Decimal, typically) is rejected rather than coerced.`,o),i&&r!==void 0&&this.#e.appendNotice("\u{1F4C9}",r,"chart-undrawable")}};var Ms=class extends Error{constructor(e){super(e),this.name="ConnectionLostError"}},uo=class{#e;#t;#n;#o;#r;#i;#a;#l=new Set;#p;#u;#c;#h;#s=!1;constructor(e){this.#e=e.agent,this.#t=e.handlers,this.#n=e.getTools??(()=>[]),this.#o=e.getContext??(()=>[]),this.#r=e.executeTool??null,this.#i=e.resolveInterrupts??null,this.#a=e.onPersist??(()=>{}),this.#p=e.connectionLostMessage??"Connection lost",this.#u=e.unfinishedMessage??"Not finished: the run ended or moved on before this tool call returned a result.",this.#c=e.declinedMessage??"User declined the action.";let n=e.maxToolRounds??kn;this.#h=n>=1?Math.floor(n):kn,this.#b();let r=e.onStateChanged;r!==void 0&&this.#e.subscribe({onStateChanged:({state:o})=>{r(o)}})}get state(){return this.#e.state}setState(e){this.#e.setState({...e})}get running(){return this.#e.isRunning}get messages(){return this.#e.messages}async send(e,n=[]){this.#s=!1;let r={id:we(),role:"user",content:e,...n.length>0?{metadata:{attachments:n}}:{}};this.#e.addMessage(r),this.#d(),await this.#f()}truncateToLastUser(){let e=[...this.#e.messages],n=-1;for(let[o,i]of e.entries())i.role==="user"&&(n=o);if(n===-1)return null;let r=e.slice(0,n+1);return this.#a(r),this.#e.setMessages(r),r}async resume(){this.#s=!1,await this.#f()}addToolResult(e,n){this.#e.addMessage({id:we(),role:"tool",content:n,toolCallId:e}),this.#d()}cancel(){this.#s=!0,this.#e.abortRun()}async#f(){try{await this.#_(),this.#s&&this.#m()}catch(e){this.#s||zk(e)?this.#m():this.#t.onError(e instanceof Error?e.message:String(e))}finally{this.#t.onSettled()}}#m(){this.#d(),this.#t.onCancelled()}#b(){let e=this.#e.messages,n=e.map(Lk);n.some((r,o)=>r!==e[o])&&this.#e.setMessages(n)}#g(e){let n=this.#e.messages,r=Za(n,o=>({id:we(),role:"tool",content:this.#u,toolCallId:o,metadata:{outcome:Fe.INTERRUPTED}}),e);r!==n&&(this.#e.setMessages([...r]),this.#d())}#y(e,n){for(let r of e){let o=r.toolCallId;o!==void 0&&n[r.id]?.status==="cancelled"&&this.#e.addMessage({id:we(),role:"tool",content:this.#c,toolCallId:o,metadata:{outcome:Fe.DENIED}})}this.#d()}#d(){this.#a(this.#e.messages)}get annotatedMessages(){return this.messages}async#_(){let e,n=new Set;for(let r=0;r<this.#h;r+=1){if(this.#s)return;let o=[],i={terminal:!1,errored:!1,interrupts:[]},a={tools:this.#n(),context:this.#o()};if(e!==void 0&&(a.resume=e),this.#g(n),this.#s||(await this.#e.runAgent(a,this.#w(o,i)),e=void 0,n=new Set,this.#d(),this.#s))return;if(!i.terminal)throw new Ms(this.#p);if(i.errored)return;if(i.interrupts.length>0){if(this.#i===null)return;let c=await this.#i(i.interrupts);if(this.#s){this.#y(i.interrupts,c);return}e=Xv(i.interrupts,c),n=new Set(i.interrupts.flatMap(({toolCallId:l})=>l??[]));continue}if(this.#r===null||o.length===0)return;let s=!1;for(let c of o){if(this.#s)return;let l=await this.#r(c);if(l!==null){if(l.halt===!0)return;this.#e.addMessage({id:we(),role:"tool",content:l.content,toolCallId:c.id,...l.outcome===void 0?{}:{metadata:{outcome:l.outcome}}}),this.#d(),s=!0}}if(!s)return}}#w(e,n){let r=this.#t,o=this.#l,i=()=>this.#s,a=new Set;return{onRunInitialized(){r.onRunStart()},onTextMessageStartEvent({event:s}){o.has(s.messageId)&&console.warn(`<ag-ui-chat>: the server reused message id "${s.messageId}", which was already closed. Its content will be appended to that earlier message rather than starting a new one, and the merged result is what gets persisted. Issue a fresh id per message.`)},onTextMessageContentEvent({textMessageBuffer:s}){r.onTextDelta(s)},onTextMessageEndEvent({event:s,textMessageBuffer:c}){o.add(s.messageId),r.onTextEnd(c)},onToolCallEndEvent({event:s,toolCallName:c,toolCallArgs:l}){let u={id:s.toolCallId,name:c,args:l};e.push(u),r.onToolCall(u)},onToolCallResultEvent({event:s}){let c=s.metadata?.outcome;r.onToolResult(s.toolCallId,Nn(s.content),c)},onActivitySnapshotEvent({event:s,messages:c}){if(c.some(u=>u.id===s.messageId&&u.role==="activity")){r.onActivityChanged(s.messageId,s.activityType,s.content);return}r.onActivity(s.activityType,s.content,s.messageId)},onActivityDeltaEvent({event:s}){a.add(s.messageId)},onCustomEvent({event:s}){r.onCustomEvent(s.name,s.value)},onSubagentStartedEvent({event:s}){r.onSubAgentStarted(s.subagentRunId,s.name,s.parentToolCallId??null)},onSubagentFinishedEvent({event:s}){r.onSubAgentFinished(s.subagentRunId)},onSubagentErrorEvent({event:s}){r.onSubAgentError(s.subagentRunId,s.message)},onMessagesSnapshotEvent({event:s}){r.onMessagesSnapshot(s.messages)},onMessagesChanged({messages:s}){if(a.size!==0){for(let c of a){let l=s.find(u=>u.id===c);l!==void 0&&l.role==="activity"&&r.onActivityChanged(c,l.activityType,l.content)}a.clear()}},onReasoningStartEvent(){r.onReasoningStart()},onReasoningMessageContentEvent({reasoningMessageBuffer:s}){r.onReasoningDelta(s)},onReasoningMessageEndEvent({reasoningMessageBuffer:s}){r.onReasoningDelta(s)},onReasoningEndEvent(){r.onReasoningEnd()},onRunFinishedEvent(s){n.terminal=!0,s.outcome==="interrupt"&&(n.interrupts=s.interrupts)},onRunErrorEvent({event:s}){n.terminal=!0,n.errored=!0,!i()&&r.onError(s.message)},onRunFinalized(){n.terminal=!0,r.onRunEnd()}}}};function zk(t){return t instanceof Error?t.name==="AbortError"||t instanceof TypeError&&/abort/i.test(t.message):!1}function Lk(t){let{outcome:e,attachments:n,...r}=t;if(e===void 0&&n===void 0)return t;let o=r.metadata;return{...r,metadata:{...e===void 0?{}:{outcome:e},...n===void 0?{}:{attachments:n},...typeof o=="object"?o:{}}}}var _y="ag-ui-chat",or="thread",gd="threads",po="messages:",Ls="checkpoint:",ho="minted:",Dk=60,$k=100,Uk="New conversation",Ty=!1;function dt(t,e){try{sessionStorage.setItem(t,e)}catch{if(Ty)return;Ty=!0,console.warn("<ag-ui-chat>: the browser refused a sessionStorage write \u2014 the quota is full, or storage is disabled for this context. The conversation continues, but it will not survive a page reload. Deleting a long conversation from the history drawer frees the quota.")}}function zs(t){return t===""?_y:`${_y}@${t}`}var Qe=class t{#e;constructor(e=""){this.#e=zs(e),e!==""&&t.adopt("",e)}static adopt(e,n){let r=`${zs(e)}:`,o=`${zs(n)}:`;for(let[i,a]of Ay(r)){let s=sessionStorage.getItem(i),c=o+a;s!==null&&sessionStorage.getItem(c)===null&&dt(c,s),sessionStorage.removeItem(i)}}static purge(e){for(let[n]of Ay(`${zs(e)}:`))sessionStorage.removeItem(n)}threadId(){return sessionStorage.getItem(this.#r(or))??this.newThread()}newThread(){let e=we();return dt(this.#r(or),e),dt(this.#r(ho+e),"1"),e}isUnsent(e){return sessionStorage.getItem(this.#r(ho+e))!==null&&sessionStorage.getItem(this.#r(po+e))===null}loadMessages(e){return Promise.resolve(this.#i(this.#r(po+e)))}saveMessages(e,n){dt(this.#r(po+e),JSON.stringify(n)),sessionStorage.removeItem(this.#r(ho+e)),this.#t(e,n)}loadCheckpoint(e){return this.#i(this.#r(Ls+e))}saveCheckpoint(e,n){let r=this.#r(Ls+e);if(n===null){sessionStorage.removeItem(r);return}dt(r,JSON.stringify(n))}clear(e){sessionStorage.removeItem(this.#r(po+e)),sessionStorage.removeItem(this.#r(Ls+e)),sessionStorage.removeItem(this.#r(ho+e)),this.#o(this.#n().filter(n=>n.threadId!==e)),sessionStorage.getItem(this.#r(or))===e&&sessionStorage.removeItem(this.#r(or))}listThreads(){let e=this.#n().sort((n,r)=>r.updatedAt-n.updatedAt).map(({threadId:n,title:r,updatedAt:o,preview:i})=>({threadId:n,title:r,updatedAt:o,preview:i}));return Promise.resolve(e)}setActiveThread(e){dt(this.#r(or),e)}renameThread(e,n){let r=this.#n(),o=r.find(i=>i.threadId===e);o!==void 0&&(o.title=n,o.titleCustom=!0,this.#o(r))}#t(e,n){let r=this.#n(),o=r.find(s=>s.threadId===e),i=Fk(n),a=Date.now();o===void 0?r.push({threadId:e,title:ky(n),titleCustom:!1,preview:i,updatedAt:a}):(o.preview=i,o.updatedAt=a,o.titleCustom||(o.title=ky(n))),this.#o(r)}#n(){return this.#i(this.#r(gd))??[]}#o(e){let n=this.#r(gd);if(e.length===0){sessionStorage.removeItem(n);return}dt(n,JSON.stringify(e))}#r(e){return`${this.#e}:${e}`}#i(e){let n=sessionStorage.getItem(e);if(n===null)return null;try{return JSON.parse(n)}catch{return null}}};function Ay(t){let e=[];for(let n=0;n<sessionStorage.length;n+=1){let r=sessionStorage.key(n);if(r===null||!r.startsWith(t))continue;let o=r.slice(t.length);Hk(o)&&e.push([r,o])}return e}function Hk(t){return t===or||t===gd||t.startsWith(po)||t.startsWith(Ls)||t.startsWith(ho)}function ky(t){for(let e of t)if(e.role==="user"){let n=Iy(e.content);if(n!=="")return Ry(n,Dk)}return Uk}function Fk(t){for(let e of[...t].reverse()){let n=Iy(e.content);if(n!=="")return Ry(n,$k)}return""}function Iy(t){return typeof t=="string"?t.replace(/\s+/g," ").trim():""}function Ry(t,e){return t.length<=e?t:`${t.slice(0,e-1).trimEnd()}\u2026`}function vd(t){let e=t.headers??{},n=new Set;return new Qv({url:t.endpoint,headers:e,initialState:{...t.initialState??{}},fetch:(r,o)=>{let i=t.getHeaders?.(),a=[...new Set([...Object.keys(e),...Object.keys(i??{})])].sort();if(Ga(r,a,t.trustedOrigins??[],n),i===void 0)return fetch(r,nt(o,t.credentials));let s=new Headers(o?.headers);for(let[c,l]of Object.entries(i))s.set(c,l);return fetch(r,nt({...o,headers:s},t.credentials))},...t.threadId!==void 0?{threadId:t.threadId}:{},...t.initialMessages!==void 0?{initialMessages:[...t.initialMessages]}:{}})}function Cy(t){let e=t.getAttribute("data-max-tool-rounds");return e===null?kn:Number.parseInt(e,10)}var fo=class{#e;#t;#n;#o;#r;#i=new Set;#a=new Map;constructor(e,n=()=>({}),r=new Qe,o=()=>{},i=!0){this.#e=e.endsWith("/")?e:`${e}/`,this.#t=n,this.#n=r,this.#o=o,this.#r=i}threadId(){return this.#n.threadId()}setActiveThread(e){this.#n.setActiveThread(e)}newThread(){return Fa(this.#n)}isUnsent(e){return this.#n.isUnsent?.(e)===!0}saveMessages(e,n){this.#n.saveMessages(e,this.#r?n:[])}loadCheckpoint(e){return this.#n.loadCheckpoint(e)}saveCheckpoint(e,n){this.#n.saveCheckpoint(e,n)}renameThread(e,n){this.#n.renameThread(e,n),this.#a.set(e,n),this.#h(e,"PATCH",{title:n})}clear(e){this.#n.clear(e),this.#i.add(e),this.#h(e,"DELETE")}async listThreads(){let e=await this.#l();return e===null?this.#n.listThreads():e.filter(n=>!this.#i.has(n.thread_id)).map(n=>this.#u(n))}async loadMessages(e){if(this.#n.isUnsent?.(e)===!0)return null;let n=await this.#c(`${this.#e}${encodeURIComponent(e)}/`);if(n===null||!n.ok)return this.#n.loadMessages(e);let r=await this.#p(n);return r===null?this.#n.loadMessages(e):r.messages??null}async#l(){let e=await this.#c(this.#e);if(e===null||!e.ok)return null;let n=await this.#p(e);return n===null?null:n.threads??[]}async#p(e){try{return await e.json()}catch{return null}}#u(e){return{threadId:e.thread_id,title:this.#a.get(e.thread_id)??e.title,updatedAt:e.updated_at===null?Number.NaN:Date.parse(e.updated_at),preview:e.preview}}async#c(e){try{return await fetch(e,nt({headers:this.#t()},this.#o()))}catch{return null}}async#h(e,n,r){let o=this.#t();try{await fetch(`${this.#e}${encodeURIComponent(e)}/`,nt({method:n,headers:r===void 0?o:{...o,"content-type":"application/json"},body:r===void 0?null:JSON.stringify(r)},this.#o()))}catch{}}};function Ny(){return{tools:[],serverSettled:new Set,invalidated:new Set,announcedOutcome:!1}}function Gk(t,e){let n={};for(let[r,o]of Object.entries(t))n[r]=(...i)=>{e()&&o(...i)};return n}var Ds=class{#e;#t=Ny();constructor(e){this.#e=e}detach(){this.#t=Ny()}forClient(){let e=this.#t,n=()=>e===this.#t,{onSettled:r,...o}=this.#n(e);return{...Gk(o,n),onSettled:()=>{n()&&r(),this.#o(e)}}}#n(e){return{onRunStart:()=>{this.#e.running()||(e.announcedOutcome=!1,this.#e.announcer.announce(this.#e.strings().announceResponding)),this.#e.setRunning(!0),this.#e.transcript.ensureGroup(),this.#e.transcript.showPending()},onReasoningStart:()=>{this.#e.transcript.hidePending(),this.#e.transcript.showThoughts()},onReasoningDelta:n=>{this.#e.transcript.showThoughts().stream(n)},onReasoningEnd:()=>{},onTextDelta:n=>{this.#e.transcript.hidePending(),this.#e.transcript.collapseThoughts(),this.#e.stream.queue(n),this.#e.stream.countDelta()},onTextEnd:n=>{if(n===""){this.#e.stream.end();return}let r=this.#e.stream.into(n);this.#e.stream.deltas<=1&&this.#e.transcript.revealWords(r),Rs(r,this.#e.strings()),this.#e.actions.attach(r),this.#e.stream.end(),this.#e.noteUnread()},onToolCall:n=>{this.#e.transcript.hidePending(),!this.#e.transcript.noticeIfSkillLoad(n)&&(e.tools.push({id:n.id,name:n.name}),this.#e.transcript.cardFor(n))},onActivity:(n,r,o)=>{this.#e.activities.draw(o,n,r)},onCustomEvent:(n,r)=>{if(n===pl){this.#r(e,r);return}if(n===Qd){this.#e.subagents.report(r);return}this.#e.element.dispatchEvent(new CustomEvent(ll,{detail:{name:n,value:r},bubbles:!0,composed:!0}))},onSubAgentStarted:(n,r,o)=>{this.#e.subagents.start(n,r,o)},onSubAgentFinished:n=>{this.#e.subagents.finish(n)},onSubAgentError:(n,r)=>{this.#e.subagents.fail(n,r)},onMessagesSnapshot:()=>{this.#e.transcript.appendNotice("\u{1F504}",this.#e.strings().historyReplaced,"history-replaced")},onToolResult:(n,r,o)=>{let i=this.#e.transcript.card(n);i!==void 0&&(i.settle(jr(o),r),this.#e.transcript.markServerSettled(n),e.serverSettled.add(n),this.#e.transcript.showPending())},onActivityChanged:(n,r,o)=>{this.#e.activities.draw(n,r,o)},onRunEnd:()=>{this.#e.transcript.hidePending(),this.#e.stream.end()},onError:n=>{e.announcedOutcome=!0,this.#e.announcer.announce(this.#e.strings().announceFailed),this.#e.transcript.hidePending();let r=this.#e.appendMessage(He.ASSISTANT,`\u26A0\uFE0F ${n}`);r.classList.add("message--failed"),this.#e.actions.attach(r,{rateable:!1}),this.#e.transcript.revealWords(r),this.#e.stream.end()},onCancelled:()=>{e.announcedOutcome=!0,this.#e.announcer.announce(this.#e.strings().announceStopped),this.#e.transcript.hidePending(),this.#e.transcript.appendStoppedNote(),this.#e.stream.end()},onSettled:()=>{e.announcedOutcome||this.#e.announcer.announce(this.#e.strings().announceAnswerReady),this.#e.transcript.hidePending(),this.#e.setRunning(!1),this.#e.stream.end();for(let n of this.#e.transcript.cards())n.settled||n.settle(J.INTERRUPTED,this.#e.strings().callNotFinished);this.#e.transcript.closeGroup()}}}#o(e){let n=e.tools.map(({id:o,name:i})=>({name:i,side:e.serverSettled.has(o)?"server":"client"})),r=[...e.invalidated];e.tools.length=0,e.serverSettled.clear(),e.invalidated.clear(),this.#e.element.dispatchEvent(new CustomEvent(sl,{detail:{tools:n,invalidated:r},bubbles:!0,composed:!0}))}#r(e,n){let r=n??{},o=Array.isArray(r.keys)?r.keys.filter(i=>typeof i=="string"):[];if(o.length!==0){for(let i of o)e.invalidated.add(i);this.#e.element.dispatchEvent(new CustomEvent(cl,{detail:{keys:o,reason:typeof r.reason=="string"?r.reason:null},bubbles:!0,composed:!0}))}}};var bd=new Set,$s=class{#e;#t="";#n=null;#o="";#r="";#i=null;constructor(e){this.#e=e}claim(){this.#t=this.#a()}release(){this.#n!==null&&(bd.delete(this.#n),this.#n=null)}conversationNamespace(e){return e===""?this.#t:`${this.#t}#${e}`}scopeStore(e,n){if(!(e instanceof Qe))return e;let r=this.conversationNamespace(n);return this.#i=r===""?e:new Qe(r),this.#i}rescopeStore(e,n){return e!==this.#i?null:(this.#i=new Qe(n),this.#i)}key(e){return this.#t===""?e:`${e}:${this.#t}`}readScopedItem(e){let n=sessionStorage.getItem(this.key(e));return n!==null||this.#t===""?n:sessionStorage.getItem(e)}readPreference(e){try{let n=localStorage.getItem(this.key(e));if(n!==null)return n}catch{}return this.readScopedItem(e)}writePreference(e,n){let r=this.key(e);try{localStorage.setItem(r,n)}catch{}dt(r,n)}clearPreference(e){let n=this.key(e);try{localStorage.removeItem(n)}catch{}try{sessionStorage.removeItem(n)}catch{}}#a(){let e=this.#e.id(),n=e!==""?e:this.#e.endpoint();return n===""?"":this.#r===n?this.#o:bd.has(n)?(this.#r=n,this.#o=`${n}~${we()}`,console.warn(`<ag-ui-chat>: another element on this page already stores its conversation under "${n}", so this one has been given a throwaway namespace of its own \u2014 the two would otherwise share a thread pointer, a history drawer and every message. Give each <ag-ui-chat> its own id to keep them apart and let this one restore its conversation across reloads.`),this.#o):(bd.add(n),this.#n=n,n)}};var Zk=["data-attachments-url","data-attachment-accept","data-attachment-max-bytes","data-transcribe-url","data-threads-url","data-threads-cache","data-tools-url","data-skills-url","data-skills","data-prompt-chips","data-slash-commands","data-theme-toggle","data-strings","data-icon-url"],wd=["omit","same-origin","include"];function yd(t){return wd.includes(t)}var Oy="ag-ui-chat:collapsed",Py="ag-ui-chat:theme",mo=class extends HTMLElement{agentFactory=vd;headers={};getHeaders=null;trustedOrigins=[];allowImages=!1;formatRelativeTime=null;autoConfirm=!1;askUser=!1;askUserRenderer=null;approvalRenderer=null;approveWithEdits=!1;confirmPredicate=null;getTools=()=>this.#R.defaultTools();getContext=()=>[...Il(this.getPageMap,this.autoInjectPageMap)];routeMap=[];navigate=null;getPageMap=null;autoInjectPageMap=!0;conversationStore=new Qe;uploadHandler=null;transcribeHandler=null;navigationResult=()=>({navigated:!0,url:window.location.href});skillContext=()=>({});toolSummaries={};formatToolPayload=null;strings={};resolvePageTarget=e=>document.querySelector(e);#e=new Set;#t=pe;#n=new hs({card:e=>this.#v.card(e),strings:()=>this.#t,follow:()=>this.#v.follow()});#o=new Ps({ensureGroup:()=>this.#v.ensureGroup(),afterTranscriptGrew:()=>this.#v.afterGrew(),appendNotice:(e,n,r)=>this.#v.appendNotice(e,n,r)});#r=new ys({element:this,strings:()=>this.#t,retry:()=>{this.retryLastTurn()}});#i;#a=new us;#l=document.createElement("button");#p;#u=document.createElement("div");#c;#h;#s;#f;#m;#b;#g;#y;#d;#_;#w;#A;#z;#k;#E;#I;#O=document.createElement("span");#G=0;#P;#v;#L;#oe;#he=document.createElement("span");#C;#x;#K=[];#Z=[];#M=document.createElement("div");#D=null;#fe="";#B=()=>{this.#x.publishVisualViewport(),!this.#x.dragging()&&this.#x.restoreLauncherPosition()};#J;#j;#U=!1;#Q=new AbortController;#me=!1;#ie=null;#W={};#ae=null;#$=null;#H={};#N=!1;#S=null;#se=new as;#R=new Va({element:this,routeMap:()=>this.routeMap,navigate:()=>this.navigate,getPageMap:()=>this.getPageMap,resolvePageTarget:e=>this.resolvePageTarget(e),getTools:()=>this.getTools(),askUser:()=>this.askUser,askUserRenderer:()=>this.askUserRenderer,decision:this.#se,ensureGroup:()=>this.#v.ensureGroup(),strings:()=>this.#t,hidePending:()=>this.#v.hidePending(),updateEmptyState:()=>this.#v.updateEmptyState(),follow:()=>this.#v.follow(),fetchInit:e=>this.#ye(e)});#ge=new Is({openBubble:()=>this.appendMessage(He.ASSISTANT,""),allowImages:()=>this.allowImages,follow:()=>this.#v.follow()});#T=new $s({id:()=>this.id,endpoint:()=>this.endpoint});#V;constructor(){super(),this.#i=this.attachShadow({mode:"open"}),this.#c=document.createElement("div"),this.#h=document.createElement("div"),this.#s=document.createElement("textarea"),this.#f=document.createElement("button"),this.#m=document.createElement("span"),this.#_=document.createElement("div"),this.#w=document.createElement("button"),this.#A=document.createElement("input"),this.#z=document.createElement("div"),this.#J=document.createElement("span"),this.#k=document.createElement("button"),this.#E=document.createElement("button"),this.#I=document.createElement("span"),this.#P=document.createElement("div"),this.#v=new Os({element:this,messages:this.#h,emptyWrap:this.#P,strings:()=>this.#t,allowImages:()=>this.allowImages,resolveTool:e=>this.#R.resolve(e),toolSummaries:()=>this.toolSummaries,serverSummary:e=>this.#R.summary(e),formatToolPayload:e=>this.formatToolPayload?.(e)??null}),this.#L=new qa({element:this,transcript:this.#v,tools:this.#R,decision:this.#se,strings:()=>this.#t,announce:e=>this.#a.announce(e),autoConfirm:()=>this.autoConfirm,confirmPredicate:()=>this.confirmPredicate,getPageMap:()=>this.getPageMap,navigate:()=>this.navigate,approveWithEdits:()=>this.approveWithEdits,approvalRenderer:()=>this.approvalRenderer,getContext:()=>this.getContext(),conversationStore:()=>this.conversationStore,threadId:()=>this.#d.threadId,tenure:()=>this.#W}),this.#oe=new Ds({element:this,transcript:this.#v,stream:this.#ge,actions:this.#r,activities:this.#o,subagents:this.#n,announcer:this.#a,strings:()=>this.#t,running:()=>this.#N,setRunning:e=>this.#Y(e),appendMessage:(e,n)=>this.appendMessage(e,n),noteUnread:()=>this.#$e()}),this.#x=new cs({element:this,launcher:this.#E,root:this.#i,connected:()=>this.#U,collapsed:()=>this.collapsed,collapsible:()=>Wr(this.getAttribute("placement")),strings:()=>this.#t,readPreference:e=>this.#T.readPreference(e),writePreference:(e,n)=>this.#T.writePreference(e,n),clearPreference:e=>this.#T.clearPreference(e),announceSurfaceChange:(e,n)=>this.#Oe(e,n)}),this.#p=new rs({element:this,root:this.#i,messages:this.#h,messagesWrap:this.#u,input:this.#s,strings:()=>this.#t,autoGrow:()=>Mt(this.#s),quote:e=>this.quote(e)}),this.#C=new Qa({element:this,chat:this.#c,slot:this.#z,fileInput:this.#A,button:this.#w,strings:()=>this.#t,uploadHandler:()=>this.uploadHandler,headersFor:e=>this.#q(e),credentialsOption:()=>this.#ce()}),this.#j=new ts({element:this,slot:this.#J,input:this.#s,strings:()=>this.#t,transcribeHandler:()=>this.transcribeHandler,headersFor:e=>this.#q(e),credentialsOption:()=>this.#ce(),onInput:()=>this.#ue()}),this.registerActivityRenderer({type:fl,render:e=>{let n=Bk(e);return n===null?null:ds("\u{1F5DC}",le(this.#t.historyCompacted,{count:n}),"compaction")}}),this.registerActivityRenderer({type:dl,render:e=>co(e,this.#t,n=>{this.sendMessage(n)})}),this.#b=new ns(e=>this.#V.apply(e)),this.#V=new Mo({element:this,menu:this.#b,input:this.#s,hint:this.#_,strings:()=>this.#t,context:()=>this.skillContext(),flag:e=>this.#Me(e),readJsonAttribute:e=>this.#we(e),fetchInit:e=>this.#ye(e),send:e=>{this.sendMessage(e)},submit:()=>{this.#de()},autoGrow:()=>Mt(this.#s)}),this.#g=new is({onSelect:e=>{this.#d.switchThread(e)},onNew:()=>{this.newChat(),this.#d.refreshDrawer()},onRename:(e,n)=>{this.#d.renameThread(e,n)},onDelete:e=>{this.#d.deleteThread(e)}}),this.#y=new Br((e,n)=>{this.#d.continueRun(e,n).catch(r=>{console.warn("<ag-ui-chat>: continuing a run failed",r)})}),this.#d=new os({element:this,drawer:this.#g,checkpoints:this.#y,transcript:this.#v,actions:this.#r,activities:this.#o,tools:this.#R,input:this.#s,hint:this.#_,strings:()=>this.#t,conversationStore:()=>this.conversationStore,formatRelativeTime:()=>this.formatRelativeTime,navigationResult:()=>this.navigationResult,headersFor:e=>this.#q(e),requestCredentials:()=>this.#ee(),appendMessage:(e,n)=>this.appendMessage(e,n),announceTurn:e=>this.#Ce(e,[]),recordTurn:e=>this.#Re(e),autoGrow:()=>Mt(this.#s),continuationEnded:()=>this.#X(),client:()=>this.#$,ensureClient:()=>this.#pe(),buildClient:e=>this.#Ne(e),releaseClient:()=>{this.#$=null},running:()=>this.#N||this.#S!==null,holdRun:()=>{let e={};return this.#S=e,{release:()=>{this.#S===e&&(this.#S=null,this.#X())}}},cancelRun:()=>this.#F(),resetState:()=>this.#te(),setRunning:e=>this.#Y(e)})}static get observedAttributes(){return["title-text","placement","credentials","user-key","user-name",...Zk]}attributeChangedCallback(e,n,r){if(e==="credentials"){r!==null&&!yd(r)&&console.error(`<ag-ui-chat>: credentials="${r}" is not a fetch credentials mode (${wd.join(" / ")}) \u2014 it is being ignored, so requests use the browser default and cross-origin cookies will not be sent.`);return}if(e==="placement"){this.#x.releaseOwnedAxes(),this.#x.releaseLauncherPosition(),!Wr(this.getAttribute("placement"))&&this.collapsed&&this.setCollapsed(!1),requestAnimationFrame(()=>this.#x.syncResizeAnchor());return}if(e==="title-text"){this.#m.textContent=r??this.#t.title,this.#O.textContent=this.#m.textContent;return}if(e==="user-name"){this.#be();return}if(e==="user-key"){this.#U&&(n??"")!==(r??"")&&this.#Se(n??"",r??"");return}n===r||!this.#U||console.warn(`<ag-ui-chat>: "${e}" was changed after the element connected, and is read only while connecting \u2014 this assignment has no effect. Set it before the element enters the DOM (in the markup, or on the element before appending it); frameworks that patch attributes after mount should bind it at creation. To apply a new value now, remove and re-insert the element.`)}registerTool(e){this.#R.register(e)}get sharedState(){return this.#ve()?.state??this.#H}set sharedState(e){this.#H={...e},this.#ve()?.setState(this.#H)}#ve(){return this.#d.continuation??this.#$}registerPageState(e){this.#R.registerPageState(e)}registerStateHook(e){this.registerPageState(e)}get endpoint(){return this.getAttribute("endpoint")??""}set endpoint(e){this.setAttribute("endpoint",e)}get userKey(){return this.getAttribute("user-key")??""}set userKey(e){this.setAttribute("user-key",e)}get userName(){return this.getAttribute("user-name")??""}set userName(e){this.setAttribute("user-name",e)}#be(){let e=this.userName.trim();this.#he.textContent=e===""?this.#t.greetingNoName:le(this.#t.greeting,{name:e})}get credentials(){let e=this.getAttribute("credentials");return e!==null&&yd(e)?e:null}set credentials(e){if(e===null){this.removeAttribute("credentials");return}if(!yd(e))throw new TypeError(`<ag-ui-chat>: credentials must be one of ${wd.map(n=>`"${n}"`).join(", ")} (got ${JSON.stringify(e)}).`);this.setAttribute("credentials",e)}#le(){return{...this.headers,...this.getHeaders?.()}}#q(e){let n=this.#le();return Ga(e,Object.keys(n),this.trustedOrigins,this.#e),n}#ee(){return this.credentials??void 0}#ce(){let e=this.#ee();return e===void 0?{}:{credentials:e}}#ye(e){return nt({headers:this.#q(e)},this.#ee())}get toolDisplay(){let e=this.getAttribute("data-tool-display");return e===In.INLINE||e===In.MINIMAL||e===In.COMPACT?e:In.FULL}set toolDisplay(e){this.setAttribute("data-tool-display",e)}connectedCallback(){if(this.#Q=new AbortController,this.#me&&this.#Ae(),this.#me=!0,this.#T.claim(),this.#x.restoreSize(),requestAnimationFrame(()=>{this.#x.restoreLauncherPosition(),this.#x.syncResizeAnchor()}),this.#t=ku({...this.#ze(),...this.strings}),this.getAttribute("data-theme-toggle")!==null){let r=this.#T.readPreference(Py);r!==null&&this.setAttribute("theme",r)}this.#De(),this.#g.setStrings(this.#t),this.#y.setStrings(this.#t),Wr(this.getAttribute("placement"))&&this.#Le()&&this.setAttribute("collapsed",""),this.#Ie(),this.#V.init();let e=this.#ie,n=e!==null&&e!==this.userKey;n&&this.#Se(e,this.userKey),this.#ie=this.userKey,this.conversationStore=this.#T.scopeStore(this.#xe(),this.userKey),window.addEventListener("resize",this.#B),window.visualViewport?.addEventListener("resize",this.#B),window.visualViewport?.addEventListener("scroll",this.#B),this.#x.publishVisualViewport(),this.#Ee(),this.#C.wire(this.#Q.signal),this.#j.wire(),this.#d.adoptActiveThread(),queueMicrotask(()=>this.#Pe()),this.#d.rehydrate(),n&&this.#d.refreshDrawer(),this.#U=!0}#Pe(){this.#U&&(this.#R.fetchCatalog(),this.#V.fetch())}async reload(){this.#F(),this.#te(),this.#Y(!1),await Promise.all([this.#R.fetchCatalog(),this.#V.fetch(),this.#d.rehydrate()])}disconnectedCallback(){this.#U=!1,this.#Q.abort(),window.removeEventListener("resize",this.#B),window.visualViewport?.removeEventListener("resize",this.#B),window.visualViewport?.removeEventListener("scroll",this.#B),this.#T.release(),this.#F(),this.#p.detachPageOffer(),this.#C.tray?.dispose(),this.#j.dispose(),this.#v.disposeScroller(),this.#a.dispose()}#Me(e){let n=this.getAttribute(e);return n!==null&&n!=="false"}#we(e){let n=this.getAttribute(e);if(n===null)return null;try{return JSON.parse(n)}catch{return console.warn(`<ag-ui-chat>: ${e} is not valid JSON, so it was ignored entirely and the built-in default is being used. Check the quoting -- JSON inside an HTML attribute needs single quotes around the attribute value, or its own double quotes escaped.`),null}}#ze(){let e=this.#we("data-strings");return typeof e=="object"&&e!==null?e:{}}quote(e){this.#p.insert(e)}offerQuoteInPage(e=document.body){return this.#p.offerInPage(e)}#Ee(){this.#ae=null;let e=this.getAttribute("data-threads-url");if(e!==null){let n=this.conversationStore,r=new fo(e,()=>this.#q(e),n,()=>this.#ee(),this.getAttribute("data-threads-cache")!=="false");this.#ae={remote:r,inner:n},this.conversationStore=r}}#xe(){let e=this.#ae;return e!==null&&this.conversationStore===e.remote?e.inner:this.conversationStore}setSkills(e){this.#V.setClientSkills(e)}get collapsed(){return this.hasAttribute("collapsed")}set collapsed(e){this.setCollapsed(e)}setCollapsed(e,n={}){e&&!Wr(this.getAttribute("placement"))||(n.announce===!0&&e&&!this.collapsed&&this.#Oe(this.#t.chatMinimised,null),e||this.#x.restoreLauncherPosition(),e?this.setAttribute("collapsed",""):this.removeAttribute("collapsed"),dt(this.#T.key(Oy),e?"1":"0"),this.#ne(0),this.dispatchEvent(new CustomEvent(rl,{detail:{collapsed:e},bubbles:!0,composed:!0})))}get unread(){return this.#G}#Le(){let e=this.#T.readScopedItem(Oy);return e!==null?e==="1":ss(this.getAttribute("placement"))&&!this.hasAttribute("data-start-open")}describeSurface(){return this.#x.describeSurface()}moveTo(e,n={}){return this.#x.moveTo(e,n)}toggleCollapsed(){this.setCollapsed(!this.collapsed)}toggleTheme(){let e=this.getAttribute("theme")==="dark"?"light":"dark";this.setAttribute("theme",e),this.#T.writePreference(Py,e),this.#Te()}#Se(e,n){this.#ie=n;let r=this.#U,o=this.#T.conversationNamespace(e),i=this.#T.conversationNamespace(n);if(e===""){Qe.adopt(o,i),r&&this.#_e(i);return}this.#W={},Qe.purge(o),r&&this.#_e(i),this.#L.forgetWaivers(),this.#F(),this.#te(),this.#H={},this.#s.value="",this.#ue(),this.#Y(!1),this.#ne(0),r&&(this.#j.dispose(),this.#j.wire(),this.#d.adoptActiveThread(),this.#d.rehydrate(),this.#d.refreshDrawer())}#_e(e){let n=this.#T.rescopeStore(this.#xe(),e);n!==null&&(this.conversationStore=n,this.#Ee())}#Te(){let e=this.getAttribute("theme")==="dark";this.#k.replaceChildren(ms("theme","theme-icon",e?ip:op,null))}openThreads(){this.#d.openThreads()}openCheckpoints(){this.#d.openCheckpoints()}closeThreads(){this.#g.close()}closeCheckpoints(){this.#y.close()}toggleCheckpoints(){if(this.#y.open_){this.#y.close();return}this.openCheckpoints()}newChat(){this.#F(),this.#d.reapUnsent(),this.#te(),this.#d.startThread(),this.#Y(!1),this.#ne(0),this.collapsed||this.#s.focus({preventScroll:!0})}#te(){this.#Ae(),this.#K.length=0,this.#D=null}#Ae(){this.#$=null,this.#oe.detach(),this.#ke(),this.#d.forgetRestored()}#ke(){this.#ge.end(),this.#v.releaseTurn(),this.#n.clear(),this.#v.forgetCards(),this.#o.clearBlocks(),this.#r.forget(),this.#C.tray?.clear(),this.removeAttribute("data-composer-settling"),this.removeAttribute("data-restoring"),this.#v.empty()}async retryLastTurn(){if(this.#N||this.#S!==null||this.#d.continuation!==null)return!1;let e={};this.#S=e;try{let n=this.#pe(),r=n.truncateToLastUser();if(r===null||this.#S!==e)return!1;this.#ke();for(let o of r)if(this.#d.replay(o),this.#S!==e)return!1;return await n.resume(),!0}finally{this.#S===e&&(this.#S=null,this.#X())}}appendMessage(e,n){return this.#v.append(e,n)}#De(){let{signal:e}=this.#Q;this.#c.className="chat",this.#c.setAttribute("part","panel");let n=document.createElement("div");n.className="header",n.setAttribute("part","header");let r=this.#m;r.className="header-title",r.setAttribute("part","title"),r.textContent=this.getAttribute("title-text")??this.#t.title,(this.querySelector('[slot="icon"]')!==null||this.getAttribute("data-icon-url")!==null)&&n.append(ms("icon","icon",null,this.getAttribute("data-icon-url")));let o=document.createElement("slot");o.name="header-actions";let i=document.createElement("div");i.className="header-controls",i.setAttribute("part","header-controls");let a=Jr("history",this.#t.chatHistory,"\u2630");a.addEventListener("click",()=>this.openThreads());let s=Jr("checkpoints",this.#t.checkpoints,"\u21BA");s.addEventListener("click",()=>this.toggleCheckpoints());let c=Jr("new",this.#t.newChat,"\u271A");c.addEventListener("click",()=>this.newChat());let l=Jr("collapse",this.#t.collapse,"\u2014");l.addEventListener("click",()=>this.toggleCollapsed()),this.#d.runs()!==null?i.append(a,s,c):i.append(a,c),this.getAttribute("data-theme-toggle")!==null&&(this.#k.type="button",this.#k.className="header-btn header-btn--theme",this.#k.setAttribute("part","header-button theme-toggle"),this.#k.title=this.#t.toggleTheme,this.#k.setAttribute("aria-label",this.#t.toggleTheme),this.#k.addEventListener("click",()=>this.toggleTheme(),{signal:e}),this.#Te(),i.append(this.#k)),i.append(l),n.append(r,o,i),this.#x.enablePanelDrag(n),this.#h.className="messages",this.#h.setAttribute("part","messages"),this.#h.setAttribute("role","log"),this.#h.setAttribute("aria-live","off"),this.#h.setAttribute("aria-label",this.#t.conversation),this.#l.className="jump-latest",this.#l.type="button",this.#l.setAttribute("part","jump-latest"),this.#l.textContent=this.#t.jumpToLatest,this.#p.mount(e),this.#v.mountScroller(this.#l,e),this.#a.mount(),this.#P.className="empty",this.#P.setAttribute("part","empty");let u=document.createElement("div");u.className="greeting",u.setAttribute("part","greeting");let f=document.createElement("slot");f.name="greeting",f.append(this.#he),u.append(f),this.#be();let m=document.createElement("slot");m.name="empty";let h=wy(this,this.#t,T=>{this.sendMessage(T)});h!==null&&m.append(h),this.#P.replaceChildren(u,m),this.#M.className="queued",this.#M.setAttribute("part","queued"),this.#M.setAttribute("role","group"),this.#M.setAttribute("aria-label",this.#t.queued),this.#M.hidden=!0,this.#h.append(this.#P),this.#v.updateEmptyState();let p=document.createElement("div");p.className="input-row",p.setAttribute("part","composer");let E=document.createElement("div");E.className="composer",E.setAttribute("part","composer-surface");let g=document.createElement("div");g.className="composer-tools",g.setAttribute("part","composer-tools"),this.#s.className="input",this.#s.setAttribute("part","input"),this.#s.setAttribute("aria-label",this.#t.message),this.#s.rows=1,this.#s.placeholder=this.#t.inputPlaceholder,this.#s.addEventListener("keydown",T=>this.#Ue(T),{signal:e}),this.#s.addEventListener("input",()=>this.#ue(),{signal:e}),this.#f.className="send",this.#f.type="button",this.#f.setAttribute("part","send"),this.#f.replaceChildren(fs("icon-send","send-send",ep),fs("icon-stop","send-stop",tp)),this.#f.title=this.#t.send,this.#f.setAttribute("aria-label",this.#t.send),this.#f.dataset.state="idle",this.#f.addEventListener("click",()=>{if(this.#N){this.#F();return}this.#de()},{signal:e}),this.#_.className="skill-hint",this.#_.setAttribute("part","skill-hint"),this.#_.hidden=!0,this.#w.className="attach-btn",this.#w.type="button",this.#w.setAttribute("part","attach-button"),this.#w.replaceChildren(fs("icon-attach","attach-glyph",np)),this.#w.title=this.#t.attachFiles,this.#w.setAttribute("aria-label",this.#t.attachFiles),this.#w.hidden=!0,this.#w.addEventListener("click",()=>this.#A.click(),{signal:e}),this.#A.className="attach-input",this.#A.type="file",this.#A.multiple=!0,this.#A.hidden=!0,this.#A.addEventListener("change",()=>this.#C.onFilesPicked(),{signal:e}),this.#z.className="attachment-slot",this.#J.className="voice-slot";let S=document.createElement("slot");S.name="footer",g.append(this.#w,this.#J,this.#f),E.append(this.#s,g),p.append(E,this.#A),this.#u.className="messages-wrap",this.#u.replaceChildren(this.#h,this.#l,this.#p.button),this.#c.replaceChildren(n,this.#u,this.#b.palette,this.#b.chips,this.#_,this.#M,this.#z,p,S,this.#g.element,this.#y.element),this.#c.addEventListener("pointerdown",T=>{if(!this.#y.open_)return;let w=T.composedPath();w.includes(this.#y.element)||w.includes(s)||this.#y.close()},{signal:e}),this.#E.className="launcher",this.#E.type="button",this.#E.setAttribute("part","launcher"),this.#E.setAttribute("aria-label",this.#t.expand),this.#I.className="launcher-badge",this.#I.setAttribute("part","launcher-badge"),this.#I.setAttribute("aria-hidden","true"),this.#I.hidden=!0,this.#O.className="rail-label",this.#O.setAttribute("part","rail-label"),this.#O.setAttribute("aria-hidden","true"),this.#O.textContent=this.getAttribute("title-text")??this.#t.title,this.#E.replaceChildren(ms("launcher","launcher-icon",ap,Tb(this)),this.#O,this.#I),this.#E.addEventListener("click",()=>this.setCollapsed(!1),{signal:e}),this.#x.enableLauncherDrag(e),this.#x.mountResizeGrips(this.#c),Sb(this.#i);let y=this.#x.probe;y.className="viewport-probe",y.setAttribute("aria-hidden","true"),this.#i.replaceChildren(y,this.#a.region,this.#c,this.#E)}#Ie(){this.#E.setAttribute("aria-expanded",String(!this.collapsed));let e=this.#G;this.#I.textContent=e>9?"9+":String(e),this.#I.hidden=e===0||!_b(this);let n=this.#I.hidden?this.#t.expand:le(this.#t.expandUnread,{count:e});this.#E.setAttribute("aria-label",n),this.#E.title=n}#ne(e){this.#G=e,this.#Ie(),this.dispatchEvent(new CustomEvent(ol,{detail:{unread:e},bubbles:!0,composed:!0}))}#$e(){this.collapsed&&this.#ne(this.#G+1)}#ue(){this.#b.onInput(this.#s.value),this.#_.hidden=!0,Mt(this.#s),this.#D=null}#Ue(e){if(this.#b.onKeydown(e)){e.preventDefault();return}if(e.key==="Escape"&&this.#N){e.preventDefault(),this.#F();return}if(e.key==="Enter"&&!e.shiftKey){e.preventDefault(),this.#de();return}this.#He(e)}#He(e){let n=e.key==="ArrowUp";if(!n&&e.key!=="ArrowDown"||this.#b.isOpen())return;let r=this.#K;if(r.length===0||(this.#s.value!==this.#fe&&(this.#D=null),this.#D===null&&(!n||this.#s.value!=="")))return;let o=this.#D===null?0:this.#D+(n?1:-1);o>=r.length||(e.preventDefault(),this.#D=o<0?null:o,this.#s.value=o<0?"":r[o],this.#fe=this.#s.value,this.#s.setSelectionRange(this.#s.value.length,this.#s.value.length),Mt(this.#s))}#F(){this.#Z.length=0,this.#re(),this.#se.abort(),this.#$?.cancel(),this.#S=null,this.#d.stopContinuation()}#Y(e){let n=this.#N&&!e;this.#N=e,e&&(this.#S=null);let r=e?this.#t.stop:this.#t.send;this.#f.title=r,this.#f.setAttribute("aria-label",r),this.#f.dataset.state=e?"running":"idle",n&&this.#X()}#X(){if(this.#N||this.#d.continuation!==null)return;let e=this.#Z.shift();this.#re(),e!==void 0&&this.sendMessage(e)}#re(){this.#M.replaceChildren(),this.#M.hidden=this.#Z.length===0;for(let[e,n]of this.#Z.entries()){let r=document.createElement("button");r.type="button",r.className="queued-chip",r.setAttribute("part","queued-chip"),r.textContent=n,r.title=le(this.#t.removeQueued,{text:n}),r.setAttribute("aria-label",r.title),r.addEventListener("click",()=>{this.#Z.splice(e,1),this.#re()}),this.#M.appendChild(r)}}#Re(e){e!==""&&this.#K[0]!==e&&this.#K.unshift(e),this.#D=null}async#de(){let e=this.#s.value.trim(),n=this.#C.tray?.readyRefs()??[];if(!(e===""&&n.length===0)){if(this.#Re(e),this.#N||this.#S!==null||this.#d.continuation!==null){e!==""&&(this.#Z.push(e),this.#re(),this.#s.value="",Mt(this.#s));return}this.#s.value="",Mt(this.#s),this.#C.tray?.hasPending()===!0&&this.#v.appendNotice("\u{1F4CE}",le(this.#t.attachmentsStillUploading,{n:this.#C.tray.pendingCount()}),"attachment-pending"),this.#C.tray?.clearReady(),await this.sendMessage(e,n)}}async sendMessage(e,n=[]){if(this.#N||this.#S!==null||this.#d.continuation!==null||e===""&&n.length===0)return;let r={};this.#S=r;try{if(this.#v.isEmpty()&&this.setAttribute("data-composer-settling",""),this.#Ce(e,n),this.#S!==r)return;await this.#Fe(e,n)}finally{this.#S===r&&(this.#S=null,this.#X())}}#Ce(e,n){let r=this.appendMessage(He.USER,e);n.length>0&&r.appendChild(Xa(n)),this.dispatchEvent(new CustomEvent(nl,{detail:{content:e,attachments:n},bubbles:!0,composed:!0}))}attachFile(e){return this.#C.attach(e)}async#Fe(e,n){if(this.endpoint===""){console.error('<ag-ui-chat>: no endpoint is set, so this message was not sent and no request was made. Point the element at your AG-UI mount with the endpoint attribute (endpoint="/agent/"), or assign chat.endpoint before sending.'),this.#v.appendNotice("\u26A0",this.#t.notConnected,"not-connected");return}await this.#pe().send(e,n)}#pe(){return this.#$===null&&(this.#$=this.#Ne({endpoint:this.endpoint,initialMessages:this.#d.restored,follows:[]})),this.#$}#Ne(e){let n=this.#d.threadId,r=this.#W,o=this.agentFactory({endpoint:e.endpoint,headers:this.#le(),getHeaders:()=>this.#le(),trustedOrigins:this.trustedOrigins,...this.#ce(),threadId:n,initialMessages:e.initialMessages,initialState:this.#H});return new uo({agent:o,handlers:this.#oe.forClient(),getTools:()=>this.#R.advertise(),getContext:()=>this.#L.buildContext(),executeTool:i=>this.#L.execute(i),resolveInterrupts:i=>this.#L.resolveInterrupts(i),onPersist:i=>{if(r!==this.#W)return;let a=[...e.follows,...i];this.conversationStore.saveMessages(n,a),e.onSaved?.(a)},onStateChanged:i=>{r===this.#W&&this.#Ge(i)},connectionLostMessage:this.#t.connectionLost,unfinishedMessage:this.#t.callNotFinished,declinedMessage:this.#t.declinedAction,maxToolRounds:Cy(this)})}#Ge(e){this.#H={...e},this.dispatchEvent(new CustomEvent(il,{detail:{state:this.#H},bubbles:!0,composed:!0}))}#Oe(e,n){this.#v.appendNotice("\u2922",e,"surface",n===null?void 0:{label:this.#t.undo,onActivate:n})}enableCharts(e=["tool","activity"]){let n=!this.#o.has(Oo)&&!this.#R.has(Ya);e.includes("activity")&&this.registerActivityRenderer({type:Oo,render:r=>{let o=Qn(r);return o===null?null:Fr(o)},removedNotice:this.#t.chartUndrawable}),e.includes("tool")&&this.registerTool(ab()),n&&this.isConnected&&this.reload()}registerActivityRenderer(e){this.#o.register(e)}get unhandledActivityTypes(){return this.#o.unhandledTypes()}};function Bk(t){let e=t?.removed;return typeof e=="number"?e:null}function Vk(){customElements.get(Ro)===void 0&&customElements.define(Ro,mo)}async function jk(t,e,n={}){await Et(t),await Sl(t,{...n,flashMs:n.flashMs??0}),await El(t,e,n)}async function Wk(t,e={}){await Et(t),await xl(t,e)}async function qk(t,e={}){await Et(t),await _l(t,e)}async function Yk(t,e,n={}){await Et(t),await Tl(t,e,n)}async function Xk(t,e,n={}){await Et(t),await Al(t,e,n)}function Kk(t,e){t instanceof HTMLInputElement&&t.type==="checkbox"?pr(t,!!e):Bt(t,String(e)),t.dispatchEvent(new Event("input",{bubbles:!0})),t.dispatchEvent(new Event("change",{bubbles:!0}))}var Jk="0.42.0";export{al as ATTACHMENT_EVENT,mo as AgUiChat,uo as AgUiClient,Oo as CHART_ACTIVITY_TYPE,Ya as CHART_TOOL_NAME,zo as CHAT_CORNERS,fl as COMPACTION_ACTIVITY_TYPE,ll as CUSTOM_AGENT_EVENT,Br as CheckpointMenu,dr as ClientToolRegistry,Ms as ConnectionLostError,pe as DEFAULT_UI_STRINGS,Ro as ELEMENT_TAG,ul as FEEDBACK_EVENT,pl as INVALIDATE_CUSTOM_NAME,cl as INVALIDATE_EVENT,ml as LOAD_CAPABILITY_TOOL,eT as MAX_QUOTE_CHARS,Ck as MAX_SUGGESTIONS,Nk as MAX_SUGGESTION_CHARS,kn as MAX_TOOL_ROUNDS,Gt as MESSAGE_ACTIONS,He as MESSAGE_ROLE,fr as PAGE_ACTIONS,sl as RUN_FINISHED_EVENT,fo as RemoteConversationStore,Vr as RunIndex,il as STATE_EVENT,nl as SUBMIT_EVENT,dl as SUGGESTIONS_ACTIVITY_TYPE,Qe as SessionStorageStore,rl as TOGGLE_EVENT,J as TOOL_CALL_STATUS,In as TOOL_DISPLAY,Fe as TOOL_OUTCOME,Kr as ToolCallCard,ol as UNREAD_EVENT,Jk as VERSION,Co as X_CONFIRM_KEY,cr as X_DESTRUCTIVE_KEY,ur as X_NAVIGATES_KEY,Ie as X_SUMMARY_KEY,$u as asQuote,qu as attachMessageActions,Hu as attachQuoteOffer,Qn as chartSpecFrom,Wk as clickElement,vl as createChatSurfaceTools,vd as createHttpAgent,kl as createPageActionTools,Il as createPageMapContext,Uo as createPageStateTools,Rl as createRouteTools,Ow as createStateHookTools,Vk as defineAgUiChat,jk as fillField,kw as flash,Sl as focusWithFlash,xl as highlightThenClick,bp as isChatCorner,Pu as isDestructive,Wa as isNavigates,ku as mergeUiStrings,vs as messageActionBar,Gu as messageAttachments,Ru as parseToolCatalog,Do as prefersReducedMotion,qk as pressButton,_l as pressThenClick,md as prettifyToolName,Gr as quotableSelection,Zr as relativeTime,Fr as renderChart,lo as renderMarkdown,co as renderSuggestionChips,Cu as requestApproval,Ou as requestConfirmation,Iu as requestQuestion,Et as scrollIntoCenterView,Yk as selectControl,Tl as selectOption,Kk as setControlValue,pr as setNativeChecked,Bt as setNativeValue,bl as showHighlightOverlay,yy as suggestionPrompts,Xk as toggleCheckbox,Al as toggleControl,jr as toolStatusFromOutcome,Du as transcribeAudio,El as typeInto,zu as uploadAttachment};
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
  (*! @license DOMPurify 3.4.16 | (c) Cure53 and other contributors | Released under the Apache license 2.0 and Mozilla Public License 2.0 | github.com/cure53/DOMPurify/blob/3.4.16/LICENSE *)
  (*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE *)
*/
