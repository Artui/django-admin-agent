var fw=Object.defineProperty;var al=(t,e)=>{for(var n in e)fw(t,n,{get:e[n],enumerable:!0})};var Mo="ag-ui-chat",sl="ag-ui-submit",ll="ag-ui-toggle",cl="ag-ui-unread",ul="ag-ui-state",dl="ag-ui-attachments",pl="ag-ui-run-finished",hl="ag-ui-custom",fl="ag-ui-invalidate",ml="ag-ui-feedback",gl="suggestions",vl="ag_ui.invalidate",rp="ag_ui.subagent",Pn={STARTED:"started",TOOL_CALL:"tool_call",TOOL_RESULT:"tool_result",FINISHED:"finished",FAILED:"failed"},Fe={USER:"user",ASSISTANT:"assistant"},mr="x-destructive",zo="x-confirm",Re="x-summary",gr="x-navigates",Lo="read_page",Mn=10,qt={COPY:"copy",RETRY:"retry",FEEDBACK:"feedback"},Q={PENDING:"pending",DEFERRED:"deferred",DONE:"done",ERROR:"error",DECLINED:"declined",INTERRUPTED:"interrupted"},Ge={SUCCESS:"success",FAILED:"failed",DENIED:"denied",INTERRUPTED:"interrupted"},je={UPLOADING:"uploading",READY:"ready",ERROR:"error"},bl=10*1024*1024,zn={INLINE:"inline",MINIMAL:"minimal",COMPACT:"compact",FULL:"full"},yl="compaction",wl="load_capability",op='<svg class="glyph" viewBox="0 0 24 24" aria-hidden="true"><path d="M12 19.5V5m-6.5 6.5L12 5l6.5 6.5"/></svg>',ip='<svg class="glyph glyph--solid" viewBox="0 0 24 24" aria-hidden="true"><rect x="7" y="7" width="10" height="10" rx="2.5"/></svg>',ap='<svg class="glyph" viewBox="0 0 24 24" aria-hidden="true"><path d="M17 8.5V15a5 5 0 0 1-10 0V7a3 3 0 0 1 6 0v7.5a1 1 0 0 1-2 0V8.5"/></svg>',sp='<svg class="glyph" viewBox="0 0 24 24" aria-hidden="true"><path d="M12 4a3 3 0 0 1 3 3v5a3 3 0 0 1-6 0V7a3 3 0 0 1 3-3z"/><path d="M5 11v1a7 7 0 0 0 14 0v-1"/><path d="M12 19v3"/></svg>',lp='<svg class="glyph" viewBox="0 0 24 24" aria-hidden="true"><path d="M20 14.5A8.5 8.5 0 0 1 9.5 4a8.5 8.5 0 1 0 10.5 10.5z"/></svg>',cp='<svg class="glyph" viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"/></svg>',up='<svg class="glyph" viewBox="0 0 24 24" aria-hidden="true"><path d="M4 5.5A2.5 2.5 0 0 1 6.5 3h11A2.5 2.5 0 0 1 20 5.5v8a2.5 2.5 0 0 1-2.5 2.5H9l-5 4z"/></svg>',dp='<svg class="glyph" viewBox="0 0 24 24" aria-hidden="true"><rect x="9" y="9" width="11" height="11" rx="2"/><path d="M5 15V6a2 2 0 0 1 2-2h8"/></svg>',pp='<svg class="glyph" viewBox="0 0 24 24" aria-hidden="true"><path d="M20 12a8 8 0 1 1-2.5-5.8"/><path d="M20 4v4h-4"/></svg>',hp='<svg class="glyph" viewBox="0 0 24 24" aria-hidden="true"><path d="M7 10v10H4V10z"/><path d="M7 10l4.5-7a2 2 0 0 1 3.4 2L13.5 9H19a2 2 0 0 1 2 2.3l-1.1 6.4A2 2 0 0 1 17.9 20H7"/></svg>',fp='<svg class="glyph" viewBox="0 0 24 24" aria-hidden="true"><path d="M17 14V4h3v10z"/><path d="M17 14l-4.5 7a2 2 0 0 1-3.4-2l1.4-4H5a2 2 0 0 1-2-2.3l1.1-6.4A2 2 0 0 1 6.1 4H17"/></svg>',mp='<svg class="glyph" viewBox="0 0 24 24" aria-hidden="true"><path d="M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8z"/><path d="M14 3v5h5"/></svg>',gp='<svg class="glyph" viewBox="0 0 24 24" aria-hidden="true"><rect x="3.5" y="4.5" width="17" height="15" rx="2.5"/><circle cx="9" cy="10" r="1.5"/><path d="M4.5 17.5 9 13.5l3.5 3 3-2.5 4.5 4"/></svg>',vp='<svg class="glyph" viewBox="0 0 24 24" aria-hidden="true"><path d="M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8z"/><path d="M14 3v5h5"/><rect class="glyph--solid" x="7.5" y="13.5" width="9" height="4.5" rx="1"/></svg>',bp='<svg class="glyph" viewBox="0 0 24 24" aria-hidden="true"><path d="M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8z"/><path d="M14 3v5h5"/><path d="M8.5 13.5h7M8.5 17h4.5"/></svg>',Do="chart",Yt=24,yp=150,wp=2147483001,$o=5e3,it=8;var mw=/\{([a-zA-Z_][a-zA-Z0-9_]*)\}/g;function le(t,e){return t.replace(mw,(n,r)=>Object.hasOwn(e,r)?String(e[r]):n)}var gw=/\{([a-zA-Z_][a-zA-Z0-9_]*)\}/g;function Ep(t,e){let n=[];return{text:t.replace(gw,(o,i)=>{let a=e[i];return a==null||a===""?(n.includes(i)||n.push(i),o):String(a)}),missing:n}}function vw(t){if(typeof t!="object"||t===null)return!1;let e=t;return typeof e.name=="string"&&typeof e.title=="string"&&(e.prompt===void 0||typeof e.prompt=="string")}function El(t){return Array.isArray(t)?t.filter(vw):[]}var Uo=class{#e;#t=[];#n=[];#o=[];constructor(e){this.#e=e}setClientSkills(e){this.#o=e,this.#i()}init(){this.#e.menu.enableChips(this.#e.flag("data-prompt-chips")),this.#e.menu.enableSlash(this.#e.flag("data-slash-commands")),this.#n=this.#r(),this.#i()}async fetch(){let e=this.#e.element.getAttribute("data-skills-url");if(e!==null)try{let n=await fetch(e,this.#e.fetchInit(e));this.#t=El(await n.json()),this.#i()}catch{}}apply(e){let{input:n,hint:r}=this.#e;if(e.prompt===void 0){r.hidden=!0,this.#e.send(`/${e.name}`);return}let{text:o,missing:i}=Ep(e.prompt,this.#e.context());if(i.length>0){r.textContent=le(this.#e.strings().skillNeeds,{title:e.title,fields:i.join(", ")}),r.hidden=!1,n.value=o,this.#e.autoGrow(),n.focus(),this.#a(o);return}if(r.hidden=!0,n.value=o,this.#e.autoGrow(),e.sendImmediately===!1){n.focus();return}this.#e.submit()}#r(){return El(this.#e.readJsonAttribute("data-skills"))}#i(){let e=new Map;for(let n of[...this.#t,...this.#n,...this.#o])e.set(n.name,n);this.#e.menu.setSkills([...e.values()])}#a(e){let n=e.indexOf("{");this.#e.input.setSelectionRange(n,e.indexOf("}",n)+1)}};var Ho=["top-left","top-right","bottom-left","bottom-right"];function xp(t){return Ho.includes(t)}function xl(t){return[{name:"read_chat_surface",description:"Describe the chat panel you are speaking from: its placement, whether it is collapsed, whether it can be moved, and the box it occupies. Read this before moving or minimising yourself, since a full-screen panel has nowhere to move to. Read-only.",parameters:{type:"object",properties:{},required:[],[Re]:"Read the chat's own position"},handler:()=>t.describeSurface()},{name:"move_chat",description:"Move your own panel to a corner, to uncover something the user needs to see. `corner` is top-left, top-right, bottom-left or bottom-right. Answers `moved: false` with a reason when the placement owns its position or the panel fills the screen; check `read_chat_surface` first, and prefer minimise_chat when there is nowhere to move to.",parameters:{type:"object",properties:{corner:{type:"string",enum:[...Ho]}},required:["corner"],[Re]:"Move the chat out of the way"},handler:e=>{let n=String(e.corner??""),r=t.describeSurface();return xp(n)?r.movable?{moved:t.moveTo(n,{announce:!0}),corner:n}:{moved:!1,reason:r.fullBleed?"the panel fills the screen, so there is nowhere to move it to":r.draggable===!1?"this page has turned off moving the panel":`the "${r.placement??""}" placement owns the panel's position`,suggestion:r.collapsible?"minimise_chat":null}:{moved:!1,reason:`"${n}" is not a corner; use one of ${Ho.join(", ")}`}}},{name:"minimise_chat",description:"Collapse your own panel to its launcher, so the user can see the whole page. The launcher stays visible and reopens it. Answers `minimised: false` when the placement has no collapsed state, which is the case for a full-page chat.",parameters:{type:"object",properties:{},required:[],[Re]:"Minimise the chat"},handler:()=>t.describeSurface().collapsible?(t.setCollapsed(!0,{announce:!0}),{minimised:!0}):{minimised:!1,reason:"this placement has no collapsed state, so there is no launcher to return to"}},{name:"restore_chat",description:"Open your own panel again after minimising it.",parameters:{type:"object",properties:{},required:[],[Re]:"Restore the chat"},handler:()=>(t.setCollapsed(!1),{restored:!0})}]}var vr=class{#e=new Map;register(e){this.#e.set(e.name,e)}has(e){return this.#e.has(e)}get(e){let n=this.#e.get(e);if(n===void 0)throw new Error(`tool "${e}" is not registered`);return n}tools(){return[...this.#e.values()].map(e=>({name:e.name,description:e.description,parameters:e.parameters}))}};var bw="#4f46e5";function Ln(t,e,n){let r=window.getComputedStyle(t).getPropertyValue(e).trim();return r===""?n:r}var yw=4;function Sl(t,e={}){let n=document.createElement("div");n.setAttribute("data-ag-ui-highlight",""),n.setAttribute("aria-hidden","true"),n.style.cssText=["position: fixed","inset: 0","pointer-events: none",`z-index: ${Ln(t,"--ag-ui-highlight-z-index",String(wp))}`].join(";");let r=document.createElement("div"),o=document.createElement("div");n.className="ag-ui-highlight",r.className="ag-ui-highlight-scrim",o.className="ag-ui-highlight-ring",e.scrim===!0&&n.append(r),n.append(o);let i=e.ringWidth??Number.parseFloat(Ln(t,"--ag-ui-highlight-ring-width","3")),a=e.flowMs??Number.parseFloat(Ln(t,"--ag-ui-highlight-flow-ms","2400")),s=()=>{let u=t.getBoundingClientRect(),h=e.padding??yw,m=e.radius??Number.parseFloat(getComputedStyle(t).borderRadius),f=u.left-h,p=u.top-h,b=u.width+h*2,g=u.height+h*2;e.scrim===!0&&(r.style.cssText=["position: absolute","inset: 0",`background: ${Ln(t,"--ag-ui-highlight-scrim","rgba(15, 15, 25, 0.45)")}`,`clip-path: path(evenodd, '${xw(f,p,b,g,m+h)}')`].join(";")),o.style.cssText=["position: absolute",`left: ${f}px`,`top: ${p}px`,`width: ${b}px`,`height: ${g}px`,`border-radius: ${m+h}px`,`border: ${i}px solid transparent`,"box-sizing: border-box",Ew(t,e)].join(";")};s();let l=null;e.gradient===!0&&!window.matchMedia("(prefers-reduced-motion: reduce)").matches&&(l=o.animate([{backgroundPosition:"100% 0"},{backgroundPosition:"-100% 0"}],{duration:a,iterations:Number.POSITIVE_INFINITY,easing:"linear"}));let c={capture:!0,passive:!0};return window.addEventListener("scroll",s,c),window.addEventListener("resize",s,c),document.body.appendChild(n),()=>{window.removeEventListener("scroll",s,c),window.removeEventListener("resize",s,c),l?.cancel(),n.remove()}}function ww(t){return t===void 0?null:CSS.supports("color",t)?t:null}function Ew(t,e){let n=ww(e.color)??Ln(t,"--ag-ui-accent",bw);if(e.gradient!==!0)return`border-color: ${n}`;let r=Ln(t,"--ag-ui-highlight-gradient",`linear-gradient(115deg, transparent 20%, ${n} 50%, transparent 80%)`),o="linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0)";return[`background-image: ${r}`,"background-origin: border-box","background-size: 300% 100%",`-webkit-mask: ${o}`,`mask: ${o}`,"-webkit-mask-composite: xor","mask-composite: exclude","background-position: 50% 0"].join(";")}function xw(t,e,n,r,o){let i=Math.max(0,Math.min(o,n/2,r/2)),a=t+n,s=e+r,l=`M 0 0 H ${window.innerWidth} V ${window.innerHeight} H 0 Z`,c=[`M ${t+i} ${e}`,`H ${a-i}`,`A ${i} ${i} 0 0 1 ${a} ${e+i}`,`V ${s-i}`,`A ${i} ${i} 0 0 1 ${a-i} ${s}`,`H ${t+i}`,`A ${i} ${i} 0 0 1 ${t} ${s-i}`,`V ${e+i}`,`A ${i} ${i} 0 0 1 ${t+i} ${e}`,"Z"].join(" ");return`${l} ${c}`}function Fo(t,e){return Object.getOwnPropertyDescriptor(t,e).set}var Sw=Fo(HTMLInputElement.prototype,"value"),_w=Fo(HTMLTextAreaElement.prototype,"value"),Tw=Fo(HTMLSelectElement.prototype,"value"),Aw=Fo(HTMLInputElement.prototype,"checked");function Xt(t,e){t instanceof HTMLTextAreaElement?_w.call(t,e):t instanceof HTMLSelectElement?Tw.call(t,e):Sw.call(t,e)}function br(t,e){Aw.call(t,e)}var _l="#4f46e5",kw="rgba(79, 70, 229, 0.4)",Iw="--ag-ui-accent";function Dn(t){return new Promise(e=>{setTimeout(e,t)})}function Go(){return window.matchMedia("(prefers-reduced-motion: reduce)").matches}function Tl(t){return t<=0||Go()?Promise.resolve():Dn(t)}function Zo(t,e){let n=window.getComputedStyle(t).getPropertyValue(Iw).trim();return n===""?e:n}function Sp(t){return`0 0 0 3px ${Zo(t,kw)}`}async function Al(t,e,n={}){let r=n.charDelayMs??35;Xt(t,""),t.dispatchEvent(new Event("input",{bubbles:!0}));for(let o of e)Xt(t,t.value+o),t.dispatchEvent(new Event("input",{bubbles:!0})),r>0&&await Dn(r);t.dispatchEvent(new Event("change",{bubbles:!0}))}async function kl(t,e={}){let n=e.highlightMs??280,r=t.style.outline,o=t.style.outlineOffset;t.style.outline=`2px solid ${Zo(t,_l)}`,t.style.outlineOffset="2px",await Dn(n),t.style.outline=r,t.style.outlineOffset=o,t.click()}var Rw=600,Cw=100;function _t(t,e={}){let n=Go();return t.scrollIntoView({block:"center",inline:"nearest",behavior:n?"auto":"smooth"}),n?Promise.resolve():new Promise(r=>{let o,i=()=>{clearTimeout(o),document.removeEventListener("scroll",a,!0),document.removeEventListener("scrollend",i,!0),r()},a=()=>{document.removeEventListener("scroll",a,!0),clearTimeout(o),o=setTimeout(i,e.settleMs??Rw)};o=setTimeout(i,Cw),document.addEventListener("scroll",a,!0),document.addEventListener("scrollend",i,!0)})}var Nw=1200,Ow=1/3;async function _p(t,e,n){(e.focus??n)&&t.focus({preventScroll:!0});let r=e.flashMs??Nw;if(r<=0)return;if(e.scrim===!0||e.gradient===!0){let c=Sl(t,{scrim:e.scrim===!0,gradient:e.gradient===!0,...e.color===void 0?{}:{color:e.color},...e.ringPadding===void 0?{}:{padding:e.ringPadding}});await Dn(r),c();return}let o=t.style.outline,i=t.style.outlineOffset,a=t.style.transition,s=e.color??Zo(t,_l);t.style.outline=`3px solid ${s}`,t.style.outlineOffset="2px";let l=Go()?0:Math.round(r*Ow);await Dn(r-l),l>0&&(t.style.transition=`outline-color ${l}ms ease-out`,t.style.outline="3px solid transparent",await Dn(l)),t.style.outline=o,t.style.outlineOffset=i,t.style.transition=a}function Pw(t,e={}){return _p(t,e,!1)}function Il(t,e={}){return _p(t,e,!0)}async function Rl(t,e={}){let n=e.pressMs??140,r=t.style.transform,o=t.style.transition,i=t.style.boxShadow;t.style.transition="transform 80ms ease",t.style.transform="scale(0.96)",t.style.boxShadow=Sp(t),await Tl(n),t.style.transform=r,t.style.transition=o,t.style.boxShadow=i,t.click()}function Mw(t,e){for(let n of Array.from(t.options))if(n.value===e||n.text===e)return n;return null}async function Cl(t,e,n={}){let r=Mw(t,e);if(r===null)throw new Error(`no <option> matching "${e}"`);let o=n.highlightMs??220,i=t.style.outline,a=t.style.outlineOffset;t.style.outline=`2px solid ${Zo(t,_l)}`,t.style.outlineOffset="2px",await Tl(o),Xt(t,r.value),t.dispatchEvent(new Event("input",{bubbles:!0})),t.dispatchEvent(new Event("change",{bubbles:!0})),t.style.outline=i,t.style.outlineOffset=a}async function Nl(t,e,n={}){let r=n.flashMs??200,o=t.style.boxShadow;t.style.boxShadow=Sp(t),await Tl(r),br(t,e),t.dispatchEvent(new Event("input",{bubbles:!0})),t.dispatchEvent(new Event("change",{bubbles:!0})),t.style.boxShadow=o}var wr={SCROLL:"scroll",DRAG:"drag",CHAT:"chat"};function Ol(t,e){let n=[];return t.has(wr.SCROLL)&&n.push(zw(e)),t.has(wr.DRAG)&&n.push(Lw(e)),n}function zw(t){return{name:"scroll_to",description:"Scroll a target into view. `target` is `top`, `bottom`, or a CSS selector / page-map element id. Read-only: it changes nothing on the page.",parameters:{type:"object",properties:{target:{type:"string"}},required:["target"],[Re]:"Scroll into view"},handler:e=>{let n=String(e.target??"");if(n==="top"||n==="bottom"){let o=n==="top"?0:document.body.scrollHeight;return window.scrollTo({top:o,behavior:"smooth"}),{scrolled:!0,target:n}}let r=t(n);if(r===null)throw new Error(`no element matching "${n}"`);return _t(r),{scrolled:!0,target:n}}}}function Lw(t){return{name:"drag_and_drop",description:"Drag the `from` element onto the `to` element (CSS selectors or page-map element ids), firing the page's native drag-and-drop. Use for reordering sortable lists. The page decides what the drop commits.",parameters:{type:"object",properties:{from:{type:"string"},to:{type:"string"}},required:["from","to"],[Re]:"Drag and drop"},handler:e=>{let n=String(e.from??""),r=String(e.to??""),o=t(n);if(o===null)throw new Error(`no element matching "${n}"`);let i=t(r);if(i===null)throw new Error(`no element matching "${r}"`);return Dw(o,i),{dragged:!0,from:n,to:r}}}}function Dw(t,e){let n=new DataTransfer;yr(t,"dragstart",n),yr(e,"dragenter",n),yr(e,"dragover",n),yr(e,"drop",n),yr(t,"dragend",n)}function yr(t,e,n){let r=new Event(e,{bubbles:!0,cancelable:!0});r.dataTransfer=n,t.dispatchEvent(r)}function Pl(t,e){return!e||t===null?[]:[{description:"page_map",value:JSON.stringify(t())}]}function Bo(t){let e=[{name:`read_${t.name}`,description:`Read the "${t.name}" state.`,parameters:{type:"object",properties:{},required:[],[Re]:`Read ${t.name}`},handler:()=>t.read()}],n=t.write;return n!==void 0&&e.push({name:`set_${t.name}`,description:`Update the "${t.name}" state.`,parameters:{...t.schema??{type:"object"},[mr]:!0,[Re]:`Update ${t.name}`},handler:r=>n(r)}),e}var $w=Bo;var Tp=/:([A-Za-z_][A-Za-z0-9_]*)/g;function Uw(t){return[...t.matchAll(Tp)].map(e=>e[0].slice(1))}function Hw(t,e,n){let r={...n};return{path:e.replace(Tp,(i,a)=>{let s=n[a];if(s==null||String(s)==="")throw new Error(`route "${t}" requires path param "${a}"`);return delete r[a],encodeURIComponent(String(s))}),leftover:r}}function Fw(t,e){let n=new URLSearchParams;for(let[o,i]of Object.entries(e))n.set(o,String(i));let r=n.toString();return r===""?t:`${t}?${r}`}function Ml(t,e){return[{name:"list_routes",description:"List the routes the app can navigate to. Each route's `pathParams` names the dynamic segments to pass as `params` to `navigate_to_route`.",parameters:{type:"object",properties:{},required:[],[Re]:"List pages"},handler:()=>t().map(n=>({...n,pathParams:Uw(n.path)}))},{name:"navigate_to_route",description:"Navigate to one of the app's routes by its id, filling any dynamic `:name` path segments (and extra query params) from `params`.",parameters:{type:"object",properties:{route_id:{type:"string"},params:{type:"object"}},required:["route_id"],[gr]:!0,[Re]:"Navigate"},handler:n=>{let r=n.route_id,o=t().find(u=>u.id===r);if(o===void 0)throw new Error(`unknown route "${String(r)}"`);let i=n.params??{},{path:a,leftover:s}=Hw(o.id,o.path,i),l=Fw(a,s),c=e();return c!==null?c(l):window.location.assign(l),{navigated:!0,path:l}}}]}var Pe=[];for(let t=0;t<256;++t)Pe.push((t+256).toString(16).slice(1));function Ap(t,e=0){return(Pe[t[e+0]]+Pe[t[e+1]]+Pe[t[e+2]]+Pe[t[e+3]]+"-"+Pe[t[e+4]]+Pe[t[e+5]]+"-"+Pe[t[e+6]]+Pe[t[e+7]]+"-"+Pe[t[e+8]]+Pe[t[e+9]]+"-"+Pe[t[e+10]]+Pe[t[e+11]]+Pe[t[e+12]]+Pe[t[e+13]]+Pe[t[e+14]]+Pe[t[e+15]]).toLowerCase()}var zl,Gw=new Uint8Array(16);function Ll(){if(!zl){if(typeof crypto>"u"||!crypto.getRandomValues)throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");zl=crypto.getRandomValues.bind(crypto)}return zl(Gw)}var Zw=typeof crypto<"u"&&crypto.randomUUID&&crypto.randomUUID.bind(crypto),Dl={randomUUID:Zw};function Bw(t,e,n){if(Dl.randomUUID&&!e&&!t)return Dl.randomUUID();t=t||{};let r=t.random??t.rng?.()??Ll();if(r.length<16)throw new Error("Random bytes length must be >= 16");if(r[6]=r[6]&15|64,r[8]=r[8]&63|128,e){if(n=n||0,n<0||n+16>e.length)throw new RangeError(`UUID byte range ${n}:${n+15} is out of buffer bounds`);for(let o=0;o<16;++o)e[n+o]=r[o];return e}return Ap(r)}var Ot=Bw;var v=(function(t){return t.TEXT_MESSAGE_START="TEXT_MESSAGE_START",t.TEXT_MESSAGE_CONTENT="TEXT_MESSAGE_CONTENT",t.TEXT_MESSAGE_END="TEXT_MESSAGE_END",t.TEXT_MESSAGE_CHUNK="TEXT_MESSAGE_CHUNK",t.TOOL_CALL_START="TOOL_CALL_START",t.TOOL_CALL_ARGS="TOOL_CALL_ARGS",t.TOOL_CALL_END="TOOL_CALL_END",t.TOOL_CALL_CHUNK="TOOL_CALL_CHUNK",t.TOOL_CALL_RESULT="TOOL_CALL_RESULT",t.STATE_SNAPSHOT="STATE_SNAPSHOT",t.STATE_DELTA="STATE_DELTA",t.MESSAGES_SNAPSHOT="MESSAGES_SNAPSHOT",t.ACTIVITY_SNAPSHOT="ACTIVITY_SNAPSHOT",t.ACTIVITY_DELTA="ACTIVITY_DELTA",t.RAW="RAW",t.CUSTOM="CUSTOM",t.RUN_STARTED="RUN_STARTED",t.RUN_FINISHED="RUN_FINISHED",t.RUN_ERROR="RUN_ERROR",t.STEP_STARTED="STEP_STARTED",t.STEP_FINISHED="STEP_FINISHED",t.REASONING_START="REASONING_START",t.REASONING_MESSAGE_START="REASONING_MESSAGE_START",t.REASONING_MESSAGE_CONTENT="REASONING_MESSAGE_CONTENT",t.REASONING_MESSAGE_END="REASONING_MESSAGE_END",t.REASONING_MESSAGE_CHUNK="REASONING_MESSAGE_CHUNK",t.REASONING_END="REASONING_END",t.REASONING_ENCRYPTED_VALUE="REASONING_ENCRYPTED_VALUE",t.SUBAGENT_STARTED="SUBAGENT_STARTED",t.SUBAGENT_FINISHED="SUBAGENT_FINISHED",t.SUBAGENT_ERROR="SUBAGENT_ERROR",t})({}),Kt="1.0";var Vw={TextMessageStartEvent:{optional:["timestamp","rawEvent","metadata","subagentRunId","role","name"],fields:{}},TextMessageContentEvent:{optional:["timestamp","rawEvent","metadata","subagentRunId"],fields:{}},TextMessageEndEvent:{optional:["timestamp","rawEvent","metadata","subagentRunId"],fields:{}},TextMessageChunkEvent:{optional:["timestamp","rawEvent","metadata","subagentRunId","messageId","role","delta","name"],fields:{}},ToolCallStartEvent:{optional:["timestamp","rawEvent","metadata","subagentRunId","parentMessageId"],fields:{}},ToolCallArgsEvent:{optional:["timestamp","rawEvent","metadata","subagentRunId"],fields:{}},ToolCallEndEvent:{optional:["timestamp","rawEvent","metadata","subagentRunId"],fields:{}},ToolCallChunkEvent:{optional:["timestamp","rawEvent","metadata","subagentRunId","toolCallId","toolCallName","parentMessageId","delta"],fields:{}},TextPart:{optional:["id","metadata"],fields:{}},DataSource:{optional:[],fields:{}},UrlSource:{optional:["mimeType"],fields:{}},FileSource:{optional:["provider","mimeType"],fields:{}},PartSource:{discriminator:"type",variants:{data:"DataSource",url:"UrlSource",file:"FileSource"}},ImagePart:{optional:["id","metadata"],fields:{source:"PartSource"}},AudioPart:{optional:["id","metadata"],fields:{source:"PartSource"}},VideoPart:{optional:["id","metadata"],fields:{source:"PartSource"}},DocumentPart:{optional:["id","metadata"],fields:{source:"PartSource"}},ContentPart:{discriminator:"type",variants:{text:"TextPart",image:"ImagePart",audio:"AudioPart",video:"VideoPart",document:"DocumentPart"}},ToolCallResultEvent:{optional:["timestamp","rawEvent","metadata","subagentRunId","role"],fields:{content:{array:"ContentPart"}}},StateSnapshotEvent:{optional:["timestamp","rawEvent","metadata","subagentRunId"],fields:{}},AddOperation:{optional:[],fields:{}},RemoveOperation:{optional:[],fields:{}},ReplaceOperation:{optional:[],fields:{}},MoveOperation:{optional:[],fields:{}},CopyOperation:{optional:[],fields:{}},TestOperation:{optional:[],fields:{}},JsonPatchOperation:{discriminator:"op",variants:{add:"AddOperation",remove:"RemoveOperation",replace:"ReplaceOperation",move:"MoveOperation",copy:"CopyOperation",test:"TestOperation"}},StateDeltaEvent:{optional:["timestamp","rawEvent","metadata","subagentRunId"],fields:{delta:{array:"JsonPatchOperation"}}},DeveloperMessage:{optional:["subagentRunId","name","encryptedValue","metadata"],fields:{}},SystemMessage:{optional:["subagentRunId","name","encryptedValue","metadata"],fields:{}},FunctionCall:{optional:[],fields:{}},ToolCall:{optional:["encryptedValue","metadata"],fields:{function:"FunctionCall"}},AssistantMessage:{optional:["subagentRunId","name","encryptedValue","metadata","content","toolCalls"],fields:{toolCalls:{array:"ToolCall"}}},UserMessage:{optional:["subagentRunId","name","encryptedValue","metadata"],fields:{content:{array:"ContentPart"}}},ToolMessage:{optional:["subagentRunId","error","encryptedValue","metadata"],fields:{content:{array:"ContentPart"}}},ActivityMessage:{optional:["subagentRunId","metadata"],fields:{}},ReasoningMessage:{optional:["subagentRunId","encryptedValue","metadata"],fields:{}},Message:{discriminator:"role",variants:{developer:"DeveloperMessage",system:"SystemMessage",assistant:"AssistantMessage",user:"UserMessage",tool:"ToolMessage",activity:"ActivityMessage",reasoning:"ReasoningMessage"}},MessagesSnapshotEvent:{optional:["timestamp","rawEvent","metadata"],fields:{messages:{array:"Message"}}},ActivitySnapshotEvent:{optional:["timestamp","rawEvent","metadata","subagentRunId","replace"],fields:{}},ActivityDeltaEvent:{optional:["timestamp","rawEvent","metadata","subagentRunId"],fields:{patch:{array:"JsonPatchOperation"}}},RawEvent:{optional:["timestamp","rawEvent","metadata","subagentRunId","source"],fields:{}},CustomEvent:{optional:["timestamp","rawEvent","metadata","subagentRunId"],fields:{}},Tool:{optional:["parameters","metadata"],fields:{}},Context:{optional:[],fields:{}},ResumeEntry:{optional:["payload","metadata"],fields:{}},RunAgentInput:{optional:["protocolVersion","parentRunId","state","tools","context","forwardedProps","resume"],fields:{messages:{array:"Message"},tools:{array:"Tool"},context:{array:"Context"},resume:{array:"ResumeEntry"}}},RunStartedEvent:{optional:["timestamp","rawEvent","metadata","protocolVersion","parentRunId","input"],fields:{input:"RunAgentInput"}},RunFinishedSuccessOutcome:{optional:["pendingToolCallIds"],fields:{}},Interrupt:{optional:["subagentRunId","message","toolCallId","responseSchema","expiresAt","metadata"],fields:{}},RunFinishedInterruptOutcome:{optional:[],fields:{interrupts:{array:"Interrupt"}}},RunFinishedCancelledOutcome:{optional:[],fields:{}},RunFinishedOutcome:{discriminator:"type",variants:{success:"RunFinishedSuccessOutcome",interrupt:"RunFinishedInterruptOutcome",cancelled:"RunFinishedCancelledOutcome"}},TokenUsage:{optional:["provider","model","inputTokens","outputTokens","totalTokens","reasoningTokens","cachedInputTokens","cacheWriteInputTokens"],fields:{}},RunFinishedEvent:{optional:["timestamp","rawEvent","metadata","result","outcome","usage"],fields:{outcome:"RunFinishedOutcome",usage:{array:"TokenUsage"}}},RunErrorEvent:{optional:["timestamp","rawEvent","metadata","code","usage"],fields:{usage:{array:"TokenUsage"}}},StepStartedEvent:{optional:["timestamp","rawEvent","metadata","subagentRunId"],fields:{}},StepFinishedEvent:{optional:["timestamp","rawEvent","metadata","subagentRunId"],fields:{}},ReasoningStartEvent:{optional:["timestamp","rawEvent","metadata","subagentRunId"],fields:{}},ReasoningMessageStartEvent:{optional:["timestamp","rawEvent","metadata","subagentRunId"],fields:{}},ReasoningMessageContentEvent:{optional:["timestamp","rawEvent","metadata","subagentRunId"],fields:{}},ReasoningMessageEndEvent:{optional:["timestamp","rawEvent","metadata","subagentRunId"],fields:{}},ReasoningMessageChunkEvent:{optional:["timestamp","rawEvent","metadata","subagentRunId","messageId","delta"],fields:{}},ReasoningEndEvent:{optional:["timestamp","rawEvent","metadata","subagentRunId"],fields:{}},ReasoningEncryptedValueEvent:{optional:["timestamp","rawEvent","metadata","subagentRunId"],fields:{}},SubagentStartedEvent:{optional:["timestamp","rawEvent","metadata","description","parentSubagentRunId","parentToolCallId","parentMessageId"],fields:{}},SubagentFinishedSuccessOutcome:{optional:[],fields:{}},SubagentFinishedSuspendedOutcome:{optional:["interruptIds"],fields:{}},SubagentFinishedOutcome:{discriminator:"type",variants:{success:"SubagentFinishedSuccessOutcome",suspended:"SubagentFinishedSuspendedOutcome"}},SubagentFinishedEvent:{optional:["timestamp","rawEvent","metadata","result","outcome"],fields:{outcome:"SubagentFinishedOutcome"}},SubagentErrorEvent:{optional:["timestamp","rawEvent","metadata","code"],fields:{}},Event:{discriminator:"type",variants:{TEXT_MESSAGE_START:"TextMessageStartEvent",TEXT_MESSAGE_CONTENT:"TextMessageContentEvent",TEXT_MESSAGE_END:"TextMessageEndEvent",TEXT_MESSAGE_CHUNK:"TextMessageChunkEvent",TOOL_CALL_START:"ToolCallStartEvent",TOOL_CALL_ARGS:"ToolCallArgsEvent",TOOL_CALL_END:"ToolCallEndEvent",TOOL_CALL_CHUNK:"ToolCallChunkEvent",TOOL_CALL_RESULT:"ToolCallResultEvent",STATE_SNAPSHOT:"StateSnapshotEvent",STATE_DELTA:"StateDeltaEvent",MESSAGES_SNAPSHOT:"MessagesSnapshotEvent",ACTIVITY_SNAPSHOT:"ActivitySnapshotEvent",ACTIVITY_DELTA:"ActivityDeltaEvent",RAW:"RawEvent",CUSTOM:"CustomEvent",RUN_STARTED:"RunStartedEvent",RUN_FINISHED:"RunFinishedEvent",RUN_ERROR:"RunErrorEvent",STEP_STARTED:"StepStartedEvent",STEP_FINISHED:"StepFinishedEvent",REASONING_START:"ReasoningStartEvent",REASONING_MESSAGE_START:"ReasoningMessageStartEvent",REASONING_MESSAGE_CONTENT:"ReasoningMessageContentEvent",REASONING_MESSAGE_END:"ReasoningMessageEndEvent",REASONING_MESSAGE_CHUNK:"ReasoningMessageChunkEvent",REASONING_END:"ReasoningEndEvent",REASONING_ENCRYPTED_VALUE:"ReasoningEncryptedValueEvent",SUBAGENT_STARTED:"SubagentStartedEvent",SUBAGENT_FINISHED:"SubagentFinishedEvent",SUBAGENT_ERROR:"SubagentErrorEvent"}},SubagentInfo:{optional:["description"],fields:{}},IdentityCapabilities:{optional:["name","type","description","version","provider","documentationUrl","metadata"],fields:{}},TransportCapabilities:{optional:["streaming","websocket","httpBinary","pushNotifications","resumable"],fields:{}},ToolsCapabilities:{optional:["supported","items","parallelCalls","clientProvided"],fields:{items:{array:"Tool"}}},OutputCapabilities:{optional:["structuredOutput","supportedMimeTypes"],fields:{}},StateCapabilities:{optional:["snapshots","deltas","memory","persistentState"],fields:{}},MultiAgentCapabilities:{optional:["supported","delegation","handoffs","subagents"],fields:{subagents:{array:"SubagentInfo"}}},ReasoningCapabilities:{optional:["supported","streaming","encrypted"],fields:{}},MultimodalInputCapabilities:{optional:["image","audio","video","pdf","file"],fields:{}},MultimodalOutputCapabilities:{optional:["image","audio"],fields:{}},MultimodalCapabilities:{optional:["input","output"],fields:{input:"MultimodalInputCapabilities",output:"MultimodalOutputCapabilities"}},ExecutionCapabilities:{optional:["codeExecution","sandboxed","maxIterations","maxExecutionTime"],fields:{}},HumanInTheLoopCapabilities:{optional:["supported","approvals","interventions","feedback","interrupts","approveWithEdits"],fields:{}},AgentCapabilities:{optional:["identity","transport","tools","output","state","multiAgent","reasoning","multimodal","execution","humanInTheLoop","custom"],fields:{identity:"IdentityCapabilities",transport:"TransportCapabilities",tools:"ToolsCapabilities",output:"OutputCapabilities",state:"StateCapabilities",multiAgent:"MultiAgentCapabilities",reasoning:"ReasoningCapabilities",multimodal:"MultimodalCapabilities",execution:"ExecutionCapabilities",humanInTheLoop:"HumanInTheLoopCapabilities"}}};function Er(t,e){if(typeof e=="string")return Er(t,Vw[e]);if("array"in e){if(!Array.isArray(t))return t;let o=t.map(i=>Er(i,e.array));return o.every((i,a)=>i===t[a])?t:o}if(typeof t!="object"||t===null||Array.isArray(t))return t;let n=t;if("discriminator"in e){let o=n[e.discriminator];return typeof o=="string"&&Object.prototype.hasOwnProperty.call(e.variants,o)?Er(t,e.variants[o]):t}let r=n;for(let o of e.optional)Object.prototype.hasOwnProperty.call(n,o)&&n[o]===null&&(r===n&&(r={...n}),delete r[o]);for(let[o,i]of Object.entries(e.fields)){if(!Object.prototype.hasOwnProperty.call(r,o))continue;let a=Er(r[o],i);a!==r[o]&&(r===n&&(r={...n}),r[o]=a)}return r}function $l(t,e){return Er(t,e)}var V=class extends Error{constructor(t){super(t)}},Ul=class extends V{constructor(){super("Connect not implemented. This method is not supported by the current agent.")}};function kp(t,e){return e===void 0?t:t===void 0?{...e}:{...t,...e}}function $n(t){return t===void 0?"":typeof t=="string"?t:t.filter(e=>e.type==="text").map(e=>e.text).join("")}function Ip(t){return Array.isArray(t)&&t.some(e=>e.type!=="text")}var Hl={};al(Hl,{JsonPatchError:()=>Se,_areEquals:()=>_r,applyOperation:()=>Jt,applyPatch:()=>Ko,applyReducer:()=>Xw,deepClone:()=>qw,getValueByPointer:()=>Yo,validate:()=>Cp,validator:()=>Xo});var jw=(function(){var t=function(e,n){return t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(r,o){r.__proto__=o}||function(r,o){for(var i in o)o.hasOwnProperty(i)&&(r[i]=o[i])},t(e,n)};return function(e,n){t(e,n);function r(){this.constructor=e}e.prototype=n===null?Object.create(n):(r.prototype=n.prototype,new r)}})(),Ww=Object.prototype.hasOwnProperty;function jo(t,e){return Ww.call(t,e)}function Wo(t){if(Array.isArray(t)){for(var e=new Array(t.length),n=0;n<e.length;n++)e[n]=""+n;return e}if(Object.keys)return Object.keys(t);var r=[];for(var o in t)jo(t,o)&&r.push(o);return r}function Me(t){switch(typeof t){case"object":return JSON.parse(JSON.stringify(t));case"undefined":return null;default:return t}}function qo(t){for(var e=0,n=t.length,r;e<n;){if(r=t.charCodeAt(e),r>=48&&r<=57){e++;continue}return!1}return!0}function gt(t){return t.indexOf("/")===-1&&t.indexOf("~")===-1?t:t.replace(/~/g,"~0").replace(/\//g,"~1")}function xr(t){return t.replace(/~1/g,"/").replace(/~0/g,"~")}function Vo(t){if(t===void 0)return!0;if(t){if(Array.isArray(t)){for(var e=0,n=t.length;e<n;e++)if(Vo(t[e]))return!0}else if(typeof t=="object"){for(var r=Wo(t),o=r.length,i=0;i<o;i++)if(Vo(t[r[i]]))return!0}}return!1}function Rp(t,e){var n=[t];for(var r in e){var o=typeof e[r]=="object"?JSON.stringify(e[r],null,2):e[r];typeof o<"u"&&n.push(r+": "+o)}return n.join(`
`)}var Sr=(function(t){jw(e,t);function e(n,r,o,i,a){var s=this.constructor,l=t.call(this,Rp(n,{name:r,index:o,operation:i,tree:a}))||this;return l.name=r,l.index=o,l.operation=i,l.tree=a,Object.setPrototypeOf(l,s.prototype),l.message=Rp(n,{name:r,index:o,operation:i,tree:a}),l}return e})(Error);var Se=Sr,qw=Me,Un={add:function(t,e,n){return t[e]=this.value,{newDocument:n}},remove:function(t,e,n){var r=t[e];return delete t[e],{newDocument:n,removed:r}},replace:function(t,e,n){var r=t[e];return t[e]=this.value,{newDocument:n,removed:r}},move:function(t,e,n){var r=Yo(n,this.path);r&&(r=Me(r));var o=Jt(n,{op:"remove",path:this.from}).removed;return Jt(n,{op:"add",path:this.path,value:o}),{newDocument:n,removed:r}},copy:function(t,e,n){var r=Yo(n,this.from);return Jt(n,{op:"add",path:this.path,value:Me(r)}),{newDocument:n}},test:function(t,e,n){return{newDocument:n,test:_r(t[e],this.value)}},_get:function(t,e,n){return this.value=t[e],{newDocument:n}}},Yw={add:function(t,e,n){return qo(e)?t.splice(e,0,this.value):t[e]=this.value,{newDocument:n,index:e}},remove:function(t,e,n){var r=t.splice(e,1);return{newDocument:n,removed:r[0]}},replace:function(t,e,n){var r=t[e];return t[e]=this.value,{newDocument:n,removed:r}},move:Un.move,copy:Un.copy,test:Un.test,_get:Un._get};function Yo(t,e){if(e=="")return t;var n={op:"_get",path:e};return Jt(t,n),n.value}function Jt(t,e,n,r,o,i){if(n===void 0&&(n=!1),r===void 0&&(r=!0),o===void 0&&(o=!0),i===void 0&&(i=0),n&&(typeof n=="function"?n(e,0,t,e.path):Xo(e,0)),e.path===""){var a={newDocument:t};if(e.op==="add")return a.newDocument=e.value,a;if(e.op==="replace")return a.newDocument=e.value,a.removed=t,a;if(e.op==="move"||e.op==="copy")return a.newDocument=Yo(t,e.from),e.op==="move"&&(a.removed=t),a;if(e.op==="test"){if(a.test=_r(t,e.value),a.test===!1)throw new Se("Test operation failed","TEST_OPERATION_FAILED",i,e,t);return a.newDocument=t,a}else{if(e.op==="remove")return a.removed=t,a.newDocument=null,a;if(e.op==="_get")return e.value=t,a;if(n)throw new Se("Operation `op` property is not one of operations defined in RFC-6902","OPERATION_OP_INVALID",i,e,t);return a}}else{r||(t=Me(t));var s=e.path||"",l=s.split("/"),c=t,u=1,h=l.length,m=void 0,f=void 0,p=void 0;for(typeof n=="function"?p=n:p=Xo;;){if(f=l[u],f&&f.indexOf("~")!=-1&&(f=xr(f)),o&&(f=="__proto__"||f=="prototype"&&u>0&&l[u-1]=="constructor"))throw new TypeError("JSON-Patch: modifying `__proto__` or `constructor/prototype` prop is banned for security reasons, if this was on purpose, please set `banPrototypeModifications` flag false and pass it to this function. More info in fast-json-patch README");if(n&&m===void 0&&(c[f]===void 0?m=l.slice(0,u).join("/"):u==h-1&&(m=e.path),m!==void 0&&p(e,0,t,m)),u++,Array.isArray(c)){if(f==="-")f=c.length;else{if(n&&!qo(f))throw new Se("Expected an unsigned base-10 integer value, making the new referenced value the array element with the zero-based index","OPERATION_PATH_ILLEGAL_ARRAY_INDEX",i,e,t);qo(f)&&(f=~~f)}if(u>=h){if(n&&e.op==="add"&&f>c.length)throw new Se("The specified index MUST NOT be greater than the number of elements in the array","OPERATION_VALUE_OUT_OF_BOUNDS",i,e,t);var a=Yw[e.op].call(e,c,f,t);if(a.test===!1)throw new Se("Test operation failed","TEST_OPERATION_FAILED",i,e,t);return a}}else if(u>=h){var a=Un[e.op].call(e,c,f,t);if(a.test===!1)throw new Se("Test operation failed","TEST_OPERATION_FAILED",i,e,t);return a}if(c=c[f],n&&u<h&&(!c||typeof c!="object"))throw new Se("Cannot perform operation at the desired path","OPERATION_PATH_UNRESOLVABLE",i,e,t)}}}function Ko(t,e,n,r,o){if(r===void 0&&(r=!0),o===void 0&&(o=!0),n&&!Array.isArray(e))throw new Se("Patch sequence must be an array","SEQUENCE_NOT_AN_ARRAY");r||(t=Me(t));for(var i=new Array(e.length),a=0,s=e.length;a<s;a++)i[a]=Jt(t,e[a],n,!0,o,a),t=i[a].newDocument;return i.newDocument=t,i}function Xw(t,e,n){var r=Jt(t,e);if(r.test===!1)throw new Se("Test operation failed","TEST_OPERATION_FAILED",n,e,t);return r.newDocument}function Xo(t,e,n,r){if(typeof t!="object"||t===null||Array.isArray(t))throw new Se("Operation is not an object","OPERATION_NOT_AN_OBJECT",e,t,n);if(Un[t.op]){if(typeof t.path!="string")throw new Se("Operation `path` property is not a string","OPERATION_PATH_INVALID",e,t,n);if(t.path.indexOf("/")!==0&&t.path.length>0)throw new Se('Operation `path` property must start with "/"',"OPERATION_PATH_INVALID",e,t,n);if((t.op==="move"||t.op==="copy")&&typeof t.from!="string")throw new Se("Operation `from` property is not present (applicable in `move` and `copy` operations)","OPERATION_FROM_REQUIRED",e,t,n);if((t.op==="add"||t.op==="replace"||t.op==="test")&&t.value===void 0)throw new Se("Operation `value` property is not present (applicable in `add`, `replace` and `test` operations)","OPERATION_VALUE_REQUIRED",e,t,n);if((t.op==="add"||t.op==="replace"||t.op==="test")&&Vo(t.value))throw new Se("Operation `value` property is not present (applicable in `add`, `replace` and `test` operations)","OPERATION_VALUE_CANNOT_CONTAIN_UNDEFINED",e,t,n);if(n){if(t.op=="add"){var o=t.path.split("/").length,i=r.split("/").length;if(o!==i+1&&o!==i)throw new Se("Cannot perform an `add` operation at the desired path","OPERATION_PATH_CANNOT_ADD",e,t,n)}else if(t.op==="replace"||t.op==="remove"||t.op==="_get"){if(t.path!==r)throw new Se("Cannot perform the operation at a path that does not exist","OPERATION_PATH_UNRESOLVABLE",e,t,n)}else if(t.op==="move"||t.op==="copy"){var a={op:"_get",path:t.from,value:void 0},s=Cp([a],n);if(s&&s.name==="OPERATION_PATH_UNRESOLVABLE")throw new Se("Cannot perform the operation from a path that does not exist","OPERATION_FROM_UNRESOLVABLE",e,t,n)}}}else throw new Se("Operation `op` property is not one of operations defined in RFC-6902","OPERATION_OP_INVALID",e,t,n)}function Cp(t,e,n){try{if(!Array.isArray(t))throw new Se("Patch sequence must be an array","SEQUENCE_NOT_AN_ARRAY");if(e)Ko(Me(e),Me(t),n||!0);else{n=n||Xo;for(var r=0;r<t.length;r++)n(t[r],r,e,void 0)}}catch(o){if(o instanceof Se)return o;throw o}}function _r(t,e){if(t===e)return!0;if(t&&e&&typeof t=="object"&&typeof e=="object"){var n=Array.isArray(t),r=Array.isArray(e),o,i,a;if(n&&r){if(i=t.length,i!=e.length)return!1;for(o=i;o--!==0;)if(!_r(t[o],e[o]))return!1;return!0}if(n!=r)return!1;var s=Object.keys(t);if(i=s.length,i!==Object.keys(e).length)return!1;for(o=i;o--!==0;)if(!e.hasOwnProperty(s[o]))return!1;for(o=i;o--!==0;)if(a=s[o],!_r(t[a],e[a]))return!1;return!0}return t!==t&&e!==e}var Bl={};al(Bl,{compare:()=>oE,generate:()=>Fl,observe:()=>rE,unobserve:()=>nE});var Gl=new WeakMap,Kw=(function(){function t(e){this.observers=new Map,this.obj=e}return t})(),Jw=(function(){function t(e,n){this.callback=e,this.observer=n}return t})();function Qw(t){return Gl.get(t)}function eE(t,e){return t.observers.get(e)}function tE(t,e){t.observers.delete(e.callback)}function nE(t,e){e.unobserve()}function rE(t,e){var n=[],r,o=Qw(t);if(!o)o=new Kw(t),Gl.set(t,o);else{var i=eE(o,e);r=i&&i.observer}if(r)return r;if(r={},o.value=Me(t),e){r.callback=e,r.next=null;var a=function(){Fl(r)},s=function(){clearTimeout(r.next),r.next=setTimeout(a)};typeof window<"u"&&(window.addEventListener("mouseup",s),window.addEventListener("keyup",s),window.addEventListener("mousedown",s),window.addEventListener("keydown",s),window.addEventListener("change",s))}return r.patches=n,r.object=t,r.unobserve=function(){Fl(r),clearTimeout(r.next),tE(o,r),typeof window<"u"&&(window.removeEventListener("mouseup",s),window.removeEventListener("keyup",s),window.removeEventListener("mousedown",s),window.removeEventListener("keydown",s),window.removeEventListener("change",s))},o.observers.set(e,new Jw(e,r)),r}function Fl(t,e){e===void 0&&(e=!1);var n=Gl.get(t.object);Zl(n.value,t.object,t.patches,"",e),t.patches.length&&Ko(n.value,t.patches);var r=t.patches;return r.length>0&&(t.patches=[],t.callback&&t.callback(r)),r}function Zl(t,e,n,r,o){if(e!==t){typeof e.toJSON=="function"&&(e=e.toJSON());for(var i=Wo(e),a=Wo(t),s=!1,l=!1,c=a.length-1;c>=0;c--){var u=a[c],h=t[u];if(jo(e,u)&&!(e[u]===void 0&&h!==void 0&&Array.isArray(e)===!1)){var m=e[u];typeof h=="object"&&h!=null&&typeof m=="object"&&m!=null&&Array.isArray(h)===Array.isArray(m)?Zl(h,m,n,r+"/"+gt(u),o):h!==m&&(s=!0,o&&n.push({op:"test",path:r+"/"+gt(u),value:Me(h)}),n.push({op:"replace",path:r+"/"+gt(u),value:Me(m)}))}else Array.isArray(t)===Array.isArray(e)?(o&&n.push({op:"test",path:r+"/"+gt(u),value:Me(h)}),n.push({op:"remove",path:r+"/"+gt(u)}),l=!0):(o&&n.push({op:"test",path:r,value:t}),n.push({op:"replace",path:r,value:e}),s=!0)}if(!(!l&&i.length==a.length))for(var c=0;c<i.length;c++){var u=i[c];!jo(t,u)&&e[u]!==void 0&&n.push({op:"add",path:r+"/"+gt(u),value:Me(e[u])})}}}function oE(t,e,n){n===void 0&&(n=!1);var r=[];return Zl(t,e,r,"",n),r}var Jo=Object.assign({},Hl,Bl,{JsonPatchError:Sr,deepClone:Me,escapePathComponent:gt,unescapePathComponent:xr});var Vl=function(t,e){return Vl=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(n,r){n.__proto__=r}||function(n,r){for(var o in r)Object.prototype.hasOwnProperty.call(r,o)&&(n[o]=r[o])},Vl(t,e)};function vt(t,e){if(typeof e!="function"&&e!==null)throw new TypeError("Class extends value "+String(e)+" is not a constructor or null");Vl(t,e);function n(){this.constructor=t}t.prototype=e===null?Object.create(e):(n.prototype=e.prototype,new n)}function Np(t,e,n,r){function o(i){return i instanceof n?i:new n(function(a){a(i)})}return new(n||(n=Promise))(function(i,a){function s(u){try{c(r.next(u))}catch(h){a(h)}}function l(u){try{c(r.throw(u))}catch(h){a(h)}}function c(u){u.done?i(u.value):o(u.value).then(s,l)}c((r=r.apply(t,e||[])).next())})}function Qo(t,e){var n={label:0,sent:function(){if(i[0]&1)throw i[1];return i[1]},trys:[],ops:[]},r,o,i,a=Object.create((typeof Iterator=="function"?Iterator:Object).prototype);return a.next=s(0),a.throw=s(1),a.return=s(2),typeof Symbol=="function"&&(a[Symbol.iterator]=function(){return this}),a;function s(c){return function(u){return l([c,u])}}function l(c){if(r)throw new TypeError("Generator is already executing.");for(;a&&(a=0,c[0]&&(n=0)),n;)try{if(r=1,o&&(i=c[0]&2?o.return:c[0]?o.throw||((i=o.return)&&i.call(o),0):o.next)&&!(i=i.call(o,c[1])).done)return i;switch(o=0,i&&(c=[c[0]&2,i.value]),c[0]){case 0:case 1:i=c;break;case 4:return n.label++,{value:c[1],done:!1};case 5:n.label++,o=c[1],c=[0];continue;case 7:c=n.ops.pop(),n.trys.pop();continue;default:if(i=n.trys,!(i=i.length>0&&i[i.length-1])&&(c[0]===6||c[0]===2)){n=0;continue}if(c[0]===3&&(!i||c[1]>i[0]&&c[1]<i[3])){n.label=c[1];break}if(c[0]===6&&n.label<i[1]){n.label=i[1],i=c;break}if(i&&n.label<i[2]){n.label=i[2],n.ops.push(c);break}i[2]&&n.ops.pop(),n.trys.pop();continue}c=e.call(t,n)}catch(u){c=[6,u],o=0}finally{r=i=0}if(c[0]&5)throw c[1];return{value:c[0]?c[1]:void 0,done:!0}}}function Tt(t){var e=typeof Symbol=="function"&&Symbol.iterator,n=e&&t[e],r=0;if(n)return n.call(t);if(t&&typeof t.length=="number")return{next:function(){return t&&r>=t.length&&(t=void 0),{value:t&&t[r++],done:!t}}};throw new TypeError(e?"Object is not iterable.":"Symbol.iterator is not defined.")}function bt(t,e){var n=typeof Symbol=="function"&&t[Symbol.iterator];if(!n)return t;var r=n.call(t),o,i=[],a;try{for(;(e===void 0||e-- >0)&&!(o=r.next()).done;)i.push(o.value)}catch(s){a={error:s}}finally{try{o&&!o.done&&(n=r.return)&&n.call(r)}finally{if(a)throw a.error}}return i}function yt(t,e,n){if(n||arguments.length===2)for(var r=0,o=e.length,i;r<o;r++)(i||!(r in e))&&(i||(i=Array.prototype.slice.call(e,0,r)),i[r]=e[r]);return t.concat(i||Array.prototype.slice.call(e))}function Qt(t){return this instanceof Qt?(this.v=t,this):new Qt(t)}function Op(t,e,n){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var r=n.apply(t,e||[]),o,i=[];return o=Object.create((typeof AsyncIterator=="function"?AsyncIterator:Object).prototype),s("next"),s("throw"),s("return",a),o[Symbol.asyncIterator]=function(){return this},o;function a(f){return function(p){return Promise.resolve(p).then(f,h)}}function s(f,p){r[f]&&(o[f]=function(b){return new Promise(function(g,E){i.push([f,b,g,E])>1||l(f,b)})},p&&(o[f]=p(o[f])))}function l(f,p){try{c(r[f](p))}catch(b){m(i[0][3],b)}}function c(f){f.value instanceof Qt?Promise.resolve(f.value.v).then(u,h):m(i[0][2],f)}function u(f){l("next",f)}function h(f){l("throw",f)}function m(f,p){f(p),i.shift(),i.length&&l(i[0][0],i[0][1])}}function Pp(t){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var e=t[Symbol.asyncIterator],n;return e?e.call(t):(t=typeof Tt=="function"?Tt(t):t[Symbol.iterator](),n={},r("next"),r("throw"),r("return"),n[Symbol.asyncIterator]=function(){return this},n);function r(i){n[i]=t[i]&&function(a){return new Promise(function(s,l){a=t[i](a),o(s,l,a.done,a.value)})}}function o(i,a,s,l){Promise.resolve(l).then(function(c){i({value:c,done:s})},a)}}function Y(t){return typeof t=="function"}function Hn(t){var e=function(r){Error.call(r),r.stack=new Error().stack},n=t(e);return n.prototype=Object.create(Error.prototype),n.prototype.constructor=n,n}var ei=Hn(function(t){return function(n){t(this),this.message=n?n.length+` errors occurred during unsubscription:
`+n.map(function(r,o){return o+1+") "+r.toString()}).join(`
  `):"",this.name="UnsubscriptionError",this.errors=n}});function Tr(t,e){if(t){var n=t.indexOf(e);0<=n&&t.splice(n,1)}}var Fn=(function(){function t(e){this.initialTeardown=e,this.closed=!1,this._parentage=null,this._finalizers=null}return t.prototype.unsubscribe=function(){var e,n,r,o,i;if(!this.closed){this.closed=!0;var a=this._parentage;if(a)if(this._parentage=null,Array.isArray(a))try{for(var s=Tt(a),l=s.next();!l.done;l=s.next()){var c=l.value;c.remove(this)}}catch(b){e={error:b}}finally{try{l&&!l.done&&(n=s.return)&&n.call(s)}finally{if(e)throw e.error}}else a.remove(this);var u=this.initialTeardown;if(Y(u))try{u()}catch(b){i=b instanceof ei?b.errors:[b]}var h=this._finalizers;if(h){this._finalizers=null;try{for(var m=Tt(h),f=m.next();!f.done;f=m.next()){var p=f.value;try{Mp(p)}catch(b){i=i??[],b instanceof ei?i=yt(yt([],bt(i)),bt(b.errors)):i.push(b)}}}catch(b){r={error:b}}finally{try{f&&!f.done&&(o=m.return)&&o.call(m)}finally{if(r)throw r.error}}}if(i)throw new ei(i)}},t.prototype.add=function(e){var n;if(e&&e!==this)if(this.closed)Mp(e);else{if(e instanceof t){if(e.closed||e._hasParent(this))return;e._addParent(this)}(this._finalizers=(n=this._finalizers)!==null&&n!==void 0?n:[]).push(e)}},t.prototype._hasParent=function(e){var n=this._parentage;return n===e||Array.isArray(n)&&n.includes(e)},t.prototype._addParent=function(e){var n=this._parentage;this._parentage=Array.isArray(n)?(n.push(e),n):n?[n,e]:e},t.prototype._removeParent=function(e){var n=this._parentage;n===e?this._parentage=null:Array.isArray(n)&&Tr(n,e)},t.prototype.remove=function(e){var n=this._finalizers;n&&Tr(n,e),e instanceof t&&e._removeParent(this)},t.EMPTY=(function(){var e=new t;return e.closed=!0,e})(),t})();var jl=Fn.EMPTY;function ti(t){return t instanceof Fn||t&&"closed"in t&&Y(t.remove)&&Y(t.add)&&Y(t.unsubscribe)}function Mp(t){Y(t)?t():t.unsubscribe()}var at={onUnhandledError:null,onStoppedNotification:null,Promise:void 0,useDeprecatedSynchronousErrorHandling:!1,useDeprecatedNextContext:!1};var Gn={setTimeout:function(t,e){for(var n=[],r=2;r<arguments.length;r++)n[r-2]=arguments[r];var o=Gn.delegate;return o?.setTimeout?o.setTimeout.apply(o,yt([t,e],bt(n))):setTimeout.apply(void 0,yt([t,e],bt(n)))},clearTimeout:function(t){var e=Gn.delegate;return(e?.clearTimeout||clearTimeout)(t)},delegate:void 0};function ni(t){Gn.setTimeout(function(){var e=at.onUnhandledError;if(e)e(t);else throw t})}function Ar(){}var zp=(function(){return Wl("C",void 0,void 0)})();function Lp(t){return Wl("E",void 0,t)}function Dp(t){return Wl("N",t,void 0)}function Wl(t,e,n){return{kind:t,value:e,error:n}}var en=null;function Zn(t){if(at.useDeprecatedSynchronousErrorHandling){var e=!en;if(e&&(en={errorThrown:!1,error:null}),t(),e){var n=en,r=n.errorThrown,o=n.error;if(en=null,r)throw o}}else t()}function $p(t){at.useDeprecatedSynchronousErrorHandling&&en&&(en.errorThrown=!0,en.error=t)}var kr=(function(t){vt(e,t);function e(n){var r=t.call(this)||this;return r.isStopped=!1,n?(r.destination=n,ti(n)&&n.add(r)):r.destination=lE,r}return e.create=function(n,r,o){return new oi(n,r,o)},e.prototype.next=function(n){this.isStopped?Yl(Dp(n),this):this._next(n)},e.prototype.error=function(n){this.isStopped?Yl(Lp(n),this):(this.isStopped=!0,this._error(n))},e.prototype.complete=function(){this.isStopped?Yl(zp,this):(this.isStopped=!0,this._complete())},e.prototype.unsubscribe=function(){this.closed||(this.isStopped=!0,t.prototype.unsubscribe.call(this),this.destination=null)},e.prototype._next=function(n){this.destination.next(n)},e.prototype._error=function(n){try{this.destination.error(n)}finally{this.unsubscribe()}},e.prototype._complete=function(){try{this.destination.complete()}finally{this.unsubscribe()}},e})(Fn);var iE=Function.prototype.bind;function ql(t,e){return iE.call(t,e)}var aE=(function(){function t(e){this.partialObserver=e}return t.prototype.next=function(e){var n=this.partialObserver;if(n.next)try{n.next(e)}catch(r){ri(r)}},t.prototype.error=function(e){var n=this.partialObserver;if(n.error)try{n.error(e)}catch(r){ri(r)}else ri(e)},t.prototype.complete=function(){var e=this.partialObserver;if(e.complete)try{e.complete()}catch(n){ri(n)}},t})(),oi=(function(t){vt(e,t);function e(n,r,o){var i=t.call(this)||this,a;if(Y(n)||!n)a={next:n??void 0,error:r??void 0,complete:o??void 0};else{var s;i&&at.useDeprecatedNextContext?(s=Object.create(n),s.unsubscribe=function(){return i.unsubscribe()},a={next:n.next&&ql(n.next,s),error:n.error&&ql(n.error,s),complete:n.complete&&ql(n.complete,s)}):a=n}return i.destination=new aE(a),i}return e})(kr);function ri(t){at.useDeprecatedSynchronousErrorHandling?$p(t):ni(t)}function sE(t){throw t}function Yl(t,e){var n=at.onStoppedNotification;n&&Gn.setTimeout(function(){return n(t,e)})}var lE={closed:!0,next:Ar,error:sE,complete:Ar};var Bn=(function(){return typeof Symbol=="function"&&Symbol.observable||"@@observable"})();function Vn(t){return t}function ii(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];return Xl(t)}function Xl(t){return t.length===0?Vn:t.length===1?t[0]:function(n){return t.reduce(function(r,o){return o(r)},n)}}var he=(function(){function t(e){e&&(this._subscribe=e)}return t.prototype.lift=function(e){var n=new t;return n.source=this,n.operator=e,n},t.prototype.subscribe=function(e,n,r){var o=this,i=uE(e)?e:new oi(e,n,r);return Zn(function(){var a=o,s=a.operator,l=a.source;i.add(s?s.call(i,l):l?o._subscribe(i):o._trySubscribe(i))}),i},t.prototype._trySubscribe=function(e){try{return this._subscribe(e)}catch(n){e.error(n)}},t.prototype.forEach=function(e,n){var r=this;return n=Up(n),new n(function(o,i){var a=new oi({next:function(s){try{e(s)}catch(l){i(l),a.unsubscribe()}},error:i,complete:o});r.subscribe(a)})},t.prototype._subscribe=function(e){var n;return(n=this.source)===null||n===void 0?void 0:n.subscribe(e)},t.prototype[Bn]=function(){return this},t.prototype.pipe=function(){for(var e=[],n=0;n<arguments.length;n++)e[n]=arguments[n];return Xl(e)(this)},t.prototype.toPromise=function(e){var n=this;return e=Up(e),new e(function(r,o){var i;n.subscribe(function(a){return i=a},function(a){return o(a)},function(){return r(i)})})},t.create=function(e){return new t(e)},t})();function Up(t){var e;return(e=t??at.Promise)!==null&&e!==void 0?e:Promise}function cE(t){return t&&Y(t.next)&&Y(t.error)&&Y(t.complete)}function uE(t){return t&&t instanceof kr||cE(t)&&ti(t)}function dE(t){return Y(t?.lift)}function be(t){return function(e){if(dE(e))return e.lift(function(n){try{return t(n,this)}catch(r){this.error(r)}});throw new TypeError("Unable to lift unknown Observable type")}}function Ae(t,e,n,r,o){return new pE(t,e,n,r,o)}var pE=(function(t){vt(e,t);function e(n,r,o,i,a,s){var l=t.call(this,n)||this;return l.onFinalize=a,l.shouldUnsubscribe=s,l._next=r?function(c){try{r(c)}catch(u){n.error(u)}}:t.prototype._next,l._error=i?function(c){try{i(c)}catch(u){n.error(u)}finally{this.unsubscribe()}}:t.prototype._error,l._complete=o?function(){try{o()}catch(c){n.error(c)}finally{this.unsubscribe()}}:t.prototype._complete,l}return e.prototype.unsubscribe=function(){var n;if(!this.shouldUnsubscribe||this.shouldUnsubscribe()){var r=this.closed;t.prototype.unsubscribe.call(this),!r&&((n=this.onFinalize)===null||n===void 0||n.call(this))}},e})(kr);var Hp=Hn(function(t){return function(){t(this),this.name="ObjectUnsubscribedError",this.message="object unsubscribed"}});var wt=(function(t){vt(e,t);function e(){var n=t.call(this)||this;return n.closed=!1,n.currentObservers=null,n.observers=[],n.isStopped=!1,n.hasError=!1,n.thrownError=null,n}return e.prototype.lift=function(n){var r=new Fp(this,this);return r.operator=n,r},e.prototype._throwIfClosed=function(){if(this.closed)throw new Hp},e.prototype.next=function(n){var r=this;Zn(function(){var o,i;if(r._throwIfClosed(),!r.isStopped){r.currentObservers||(r.currentObservers=Array.from(r.observers));try{for(var a=Tt(r.currentObservers),s=a.next();!s.done;s=a.next()){var l=s.value;l.next(n)}}catch(c){o={error:c}}finally{try{s&&!s.done&&(i=a.return)&&i.call(a)}finally{if(o)throw o.error}}}})},e.prototype.error=function(n){var r=this;Zn(function(){if(r._throwIfClosed(),!r.isStopped){r.hasError=r.isStopped=!0,r.thrownError=n;for(var o=r.observers;o.length;)o.shift().error(n)}})},e.prototype.complete=function(){var n=this;Zn(function(){if(n._throwIfClosed(),!n.isStopped){n.isStopped=!0;for(var r=n.observers;r.length;)r.shift().complete()}})},e.prototype.unsubscribe=function(){this.isStopped=this.closed=!0,this.observers=this.currentObservers=null},Object.defineProperty(e.prototype,"observed",{get:function(){var n;return((n=this.observers)===null||n===void 0?void 0:n.length)>0},enumerable:!1,configurable:!0}),e.prototype._trySubscribe=function(n){return this._throwIfClosed(),t.prototype._trySubscribe.call(this,n)},e.prototype._subscribe=function(n){return this._throwIfClosed(),this._checkFinalizedStatuses(n),this._innerSubscribe(n)},e.prototype._innerSubscribe=function(n){var r=this,o=this,i=o.hasError,a=o.isStopped,s=o.observers;return i||a?jl:(this.currentObservers=null,s.push(n),new Fn(function(){r.currentObservers=null,Tr(s,n)}))},e.prototype._checkFinalizedStatuses=function(n){var r=this,o=r.hasError,i=r.thrownError,a=r.isStopped;o?n.error(i):a&&n.complete()},e.prototype.asObservable=function(){var n=new he;return n.source=this,n},e.create=function(n,r){return new Fp(n,r)},e})(he);var Fp=(function(t){vt(e,t);function e(n,r){var o=t.call(this)||this;return o.destination=n,o.source=r,o}return e.prototype.next=function(n){var r,o;(o=(r=this.destination)===null||r===void 0?void 0:r.next)===null||o===void 0||o.call(r,n)},e.prototype.error=function(n){var r,o;(o=(r=this.destination)===null||r===void 0?void 0:r.error)===null||o===void 0||o.call(r,n)},e.prototype.complete=function(){var n,r;(r=(n=this.destination)===null||n===void 0?void 0:n.complete)===null||r===void 0||r.call(n)},e.prototype._subscribe=function(n){var r,o;return(o=(r=this.source)===null||r===void 0?void 0:r.subscribe(n))!==null&&o!==void 0?o:jl},e})(wt);var Kl={now:function(){return(Kl.delegate||Date).now()},delegate:void 0};var ai=(function(t){vt(e,t);function e(n,r,o){n===void 0&&(n=1/0),r===void 0&&(r=1/0),o===void 0&&(o=Kl);var i=t.call(this)||this;return i._bufferSize=n,i._windowTime=r,i._timestampProvider=o,i._buffer=[],i._infiniteTimeWindow=!0,i._infiniteTimeWindow=r===1/0,i._bufferSize=Math.max(1,n),i._windowTime=Math.max(1,r),i}return e.prototype.next=function(n){var r=this,o=r.isStopped,i=r._buffer,a=r._infiniteTimeWindow,s=r._timestampProvider,l=r._windowTime;o||(i.push(n),!a&&i.push(s.now()+l)),this._trimBuffer(),t.prototype.next.call(this,n)},e.prototype._subscribe=function(n){this._throwIfClosed(),this._trimBuffer();for(var r=this._innerSubscribe(n),o=this,i=o._infiniteTimeWindow,a=o._buffer,s=a.slice(),l=0;l<s.length&&!n.closed;l+=i?1:2)n.next(s[l]);return this._checkFinalizedStatuses(n),r},e.prototype._trimBuffer=function(){var n=this,r=n._bufferSize,o=n._timestampProvider,i=n._buffer,a=n._infiniteTimeWindow,s=(a?1:2)*r;if(r<1/0&&s<i.length&&i.splice(0,i.length-s),!a){for(var l=o.now(),c=0,u=1;u<i.length&&i[u]<=l;u+=2)c=u;c&&i.splice(0,c+1)}},e})(wt);var tn=new he(function(t){return t.complete()});function Gp(t){return t&&Y(t.schedule)}function hE(t){return t[t.length-1]}function si(t){return Gp(hE(t))?t.pop():void 0}var li=(function(t){return t&&typeof t.length=="number"&&typeof t!="function"});function ci(t){return Y(t?.then)}function ui(t){return Y(t[Bn])}function di(t){return Symbol.asyncIterator&&Y(t?.[Symbol.asyncIterator])}function pi(t){return new TypeError("You provided "+(t!==null&&typeof t=="object"?"an invalid object":"'"+t+"'")+" where a stream was expected. You can provide an Observable, Promise, ReadableStream, Array, AsyncIterable, or Iterable.")}function fE(){return typeof Symbol!="function"||!Symbol.iterator?"@@iterator":Symbol.iterator}var hi=fE();function fi(t){return Y(t?.[hi])}function mi(t){return Op(this,arguments,function(){var n,r,o,i;return Qo(this,function(a){switch(a.label){case 0:n=t.getReader(),a.label=1;case 1:a.trys.push([1,,9,10]),a.label=2;case 2:return[4,Qt(n.read())];case 3:return r=a.sent(),o=r.value,i=r.done,i?[4,Qt(void 0)]:[3,5];case 4:return[2,a.sent()];case 5:return[4,Qt(o)];case 6:return[4,a.sent()];case 7:return a.sent(),[3,2];case 8:return[3,10];case 9:return n.releaseLock(),[7];case 10:return[2]}})})}function gi(t){return Y(t?.getReader)}function Ne(t){if(t instanceof he)return t;if(t!=null){if(ui(t))return mE(t);if(li(t))return gE(t);if(ci(t))return vE(t);if(di(t))return Zp(t);if(fi(t))return bE(t);if(gi(t))return yE(t)}throw pi(t)}function mE(t){return new he(function(e){var n=t[Bn]();if(Y(n.subscribe))return n.subscribe(e);throw new TypeError("Provided object does not correctly implement Symbol.observable")})}function gE(t){return new he(function(e){for(var n=0;n<t.length&&!e.closed;n++)e.next(t[n]);e.complete()})}function vE(t){return new he(function(e){t.then(function(n){e.closed||(e.next(n),e.complete())},function(n){return e.error(n)}).then(null,ni)})}function bE(t){return new he(function(e){var n,r;try{for(var o=Tt(t),i=o.next();!i.done;i=o.next()){var a=i.value;if(e.next(a),e.closed)return}}catch(s){n={error:s}}finally{try{i&&!i.done&&(r=o.return)&&r.call(o)}finally{if(n)throw n.error}}e.complete()})}function Zp(t){return new he(function(e){wE(t,e).catch(function(n){return e.error(n)})})}function yE(t){return Zp(mi(t))}function wE(t,e){var n,r,o,i;return Np(this,void 0,void 0,function(){var a,s;return Qo(this,function(l){switch(l.label){case 0:l.trys.push([0,5,6,11]),n=Pp(t),l.label=1;case 1:return[4,n.next()];case 2:if(r=l.sent(),!!r.done)return[3,4];if(a=r.value,e.next(a),e.closed)return[2];l.label=3;case 3:return[3,1];case 4:return[3,11];case 5:return s=l.sent(),o={error:s},[3,11];case 6:return l.trys.push([6,,9,10]),r&&!r.done&&(i=n.return)?[4,i.call(n)]:[3,8];case 7:l.sent(),l.label=8;case 8:return[3,10];case 9:if(o)throw o.error;return[7];case 10:return[7];case 11:return e.complete(),[2]}})})}function nt(t,e,n,r,o){r===void 0&&(r=0),o===void 0&&(o=!1);var i=e.schedule(function(){n(),o?t.add(this.schedule(null,r)):this.unsubscribe()},r);if(t.add(i),!o)return i}function vi(t,e){return e===void 0&&(e=0),be(function(n,r){n.subscribe(Ae(r,function(o){return nt(r,t,function(){return r.next(o)},e)},function(){return nt(r,t,function(){return r.complete()},e)},function(o){return nt(r,t,function(){return r.error(o)},e)}))})}function bi(t,e){return e===void 0&&(e=0),be(function(n,r){r.add(t.schedule(function(){return n.subscribe(r)},e))})}function Bp(t,e){return Ne(t).pipe(bi(e),vi(e))}function Vp(t,e){return Ne(t).pipe(bi(e),vi(e))}function jp(t,e){return new he(function(n){var r=0;return e.schedule(function(){r===t.length?n.complete():(n.next(t[r++]),n.closed||this.schedule())})})}function Wp(t,e){return new he(function(n){var r;return nt(n,e,function(){r=t[hi](),nt(n,e,function(){var o,i,a;try{o=r.next(),i=o.value,a=o.done}catch(s){n.error(s);return}a?n.complete():n.next(i)},0,!0)}),function(){return Y(r?.return)&&r.return()}})}function yi(t,e){if(!t)throw new Error("Iterable cannot be null");return new he(function(n){nt(n,e,function(){var r=t[Symbol.asyncIterator]();nt(n,e,function(){r.next().then(function(o){o.done?n.complete():n.next(o.value)})},0,!0)})})}function qp(t,e){return yi(mi(t),e)}function Yp(t,e){if(t!=null){if(ui(t))return Bp(t,e);if(li(t))return jp(t,e);if(ci(t))return Vp(t,e);if(di(t))return yi(t,e);if(fi(t))return Wp(t,e);if(gi(t))return qp(t,e)}throw pi(t)}function At(t,e){return e?Yp(t,e):Ne(t)}function se(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];var n=si(t);return At(t,n)}function F(t,e){var n=Y(t)?t:function(){return t},r=function(o){return o.error(n())};return new he(e?function(o){return e.schedule(r,0,o)}:r)}var Xp=Hn(function(t){return function(){t(this),this.name="EmptyError",this.message="no elements in sequence"}});function wi(t,e){var n=typeof e=="object";return new Promise(function(r,o){var i=!1,a;t.subscribe({next:function(s){a=s,i=!0},error:o,complete:function(){i?r(a):n?r(e.defaultValue):o(new Xp)}})})}function Et(t,e){return be(function(n,r){var o=0;n.subscribe(Ae(r,function(i){r.next(t.call(e,i,o++))}))})}function Kp(t,e,n,r,o,i,a,s){var l=[],c=0,u=0,h=!1,m=function(){h&&!l.length&&!c&&e.complete()},f=function(b){return c<r?p(b):l.push(b)},p=function(b){i&&e.next(b),c++;var g=!1;Ne(n(b,u++)).subscribe(Ae(e,function(E){o?.(E),i?f(E):e.next(E)},function(){g=!0},void 0,function(){if(g)try{c--;for(var E=function(){var y=l.shift();a?nt(e,a,function(){return p(y)}):p(y)};l.length&&c<r;)E();m()}catch(y){e.error(y)}}))};return t.subscribe(Ae(e,f,function(){h=!0,m()})),function(){s?.()}}function Ze(t,e,n){return n===void 0&&(n=1/0),Y(e)?Ze(function(r,o){return Et(function(i,a){return e(r,i,o,a)})(Ne(t(r,o)))},n):(typeof e=="number"&&(n=e),be(function(r,o){return Kp(r,o,t,n)}))}function Ir(t){return t===void 0&&(t=1/0),Ze(Vn,t)}function Jp(){return Ir(1)}function nn(t){return new he(function(e){Ne(t()).subscribe(e)})}function Jl(t,e){return be(function(n,r){var o=0;n.subscribe(Ae(r,function(i){return t.call(e,i,o++)&&r.next(i)}))})}function jn(t){return be(function(e,n){var r=null,o=!1,i;r=e.subscribe(Ae(n,void 0,void 0,function(a){i=Ne(t(a,jn(t)(e))),r?(r.unsubscribe(),r=null,i.subscribe(n)):o=!0})),o&&(r.unsubscribe(),r=null,i.subscribe(n))})}function Ei(t,e){return Y(e)?Ze(t,e,1):Ze(t,1)}function Qp(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];var n=si(t);return be(function(r,o){Jp()(At(yt([r],bt(t)),n)).subscribe(o)})}function Ql(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];return Qp.apply(void 0,yt([],bt(t)))}function ec(t){return be(function(e,n){var r=!1;e.subscribe(Ae(n,function(o){r=!0,n.next(o)},function(){r||n.next(t),n.complete()}))})}function rn(t){return be(function(e,n){try{e.subscribe(n)}finally{n.add(t)}})}function tc(t,e){return be(function(n,r){var o=null,i=0,a=!1,s=function(){return a&&!o&&r.complete()};n.subscribe(Ae(r,function(l){o?.unsubscribe();var c=0,u=i++;Ne(t(l,u)).subscribe(o=Ae(r,function(h){return r.next(e?e(l,h,u,c++):h)},function(){o=null,s()}))},function(){a=!0,s()}))})}function xi(t){return be(function(e,n){Ne(t).subscribe(Ae(n,function(){return n.complete()},Ar)),!n.closed&&e.subscribe(n)})}function Si(t,e,n){var r=Y(t)||e||n?{next:t,error:e,complete:n}:t;return r?be(function(o,i){var a;(a=r.subscribe)===null||a===void 0||a.call(r);var s=!0;o.subscribe(Ae(i,function(l){var c;(c=r.next)===null||c===void 0||c.call(r,l),i.next(l)},function(){var l;s=!1,(l=r.complete)===null||l===void 0||l.call(r),i.complete()},function(l){var c;s=!1,(c=r.error)===null||c===void 0||c.call(r,l),i.error(l)},function(){var l,c;s&&((l=r.unsubscribe)===null||l===void 0||l.call(r)),(c=r.finalize)===null||c===void 0||c.call(r)}))}):Vn}function eh(t){return` \r
	`.indexOf(t)>=0}function _i(t){for(var e=["topLevel"],n=0,r,o,i,a=function(y){return e.push(y)},s=function(y){return e[e.length-1]=y},l=function(y){r==null&&(r=n,o=e.length,i=y)},c=function(y){y===i&&(r=void 0,o=void 0,i=void 0)},u=function(){return e.pop()},h=function(){return n--},m=function(y){if("0"<=y&&y<="9"){a("number");return}switch(y){case'"':a("string");return;case"-":a("numberNeedsDigit");return;case"t":a("true");return;case"f":a("false");return;case"n":a("null");return;case"[":a("arrayNeedsValue");return;case"{":a("objectNeedsKey");return}},f=t.length;n<f;n++){var p=t[n];switch(e[e.length-1]){case"topLevel":m(p);break;case"string":switch(p){case'"':u();break;case"\\":l("stringEscape"),a("stringEscaped");break}break;case"stringEscaped":p==="u"?a("stringUnicode"):(c("stringEscape"),u());break;case"stringUnicode":n-t.lastIndexOf("u",n)===4&&(c("stringEscape"),u());break;case"number":p==="."?s("numberNeedsDigit"):p==="e"||p==="E"?s("numberNeedsExponent"):(p<"0"||p>"9")&&(h(),u());break;case"numberNeedsDigit":s("number");break;case"numberNeedsExponent":s(p==="+"||p==="-"?"numberNeedsDigit":"number");break;case"true":case"false":case"null":(p<"a"||p>"z")&&(h(),u());break;case"arrayNeedsValue":p==="]"?u():eh(p)||(c("collectionItem"),s("arrayNeedsComma"),m(p));break;case"arrayNeedsComma":p==="]"?u():p===","&&(l("collectionItem"),s("arrayNeedsValue"));break;case"objectNeedsKey":p==="}"?u():p==='"'&&(l("collectionItem"),s("objectNeedsColon"),a("string"));break;case"objectNeedsColon":p===":"&&s("objectNeedsValue");break;case"objectNeedsValue":eh(p)||(c("collectionItem"),s("objectNeedsComma"),m(p));break;case"objectNeedsComma":p==="}"?u():p===","&&(l("collectionItem"),s("objectNeedsKey"));break}}o!=null&&(e.length=o);for(var b=[r!=null?t.slice(0,r):t],g=function(y){return b.push(y.slice(t.length-t.lastIndexOf(y[0])))},E=e.length-1;E>=0;E--)switch(e[E]){case"string":b.push('"');break;case"numberNeedsDigit":case"numberNeedsExponent":b.push("0");break;case"true":g("true");break;case"false":g("false");break;case"null":g("null");break;case"arrayNeedsValue":case"arrayNeedsComma":b.push("]");break;case"objectNeedsKey":case"objectNeedsColon":case"objectNeedsValue":case"objectNeedsComma":b.push("}");break}return b.join("")}var EE=Object.freeze({status:"aborted"});function I(t,e,n){function r(s,l){var c;Object.defineProperty(s,"_zod",{value:s._zod??{},enumerable:!1}),(c=s._zod).traits??(c.traits=new Set),s._zod.traits.add(t),e(s,l);for(let u in a.prototype)u in s||Object.defineProperty(s,u,{value:a.prototype[u].bind(s)});s._zod.constr=a,s._zod.def=l}let o=n?.Parent??Object;class i extends o{}Object.defineProperty(i,"name",{value:t});function a(s){var l;let c=n?.Parent?new i:this;r(c,s),(l=c._zod).deferred??(l.deferred=[]);for(let u of c._zod.deferred)u();return c}return Object.defineProperty(a,"init",{value:r}),Object.defineProperty(a,Symbol.hasInstance,{value:s=>n?.Parent&&s instanceof n.Parent?!0:s?._zod?.traits?.has(t)}),Object.defineProperty(a,"name",{value:t}),a}var kt=class extends Error{constructor(){super("Encountered Promise during synchronous parse. Use .parseAsync() instead.")}},Ti={};function ze(t){return t&&Object.assign(Ti,t),Ti}var ae={};al(ae,{BIGINT_FORMAT_RANGES:()=>nh,Class:()=>rc,NUMBER_FORMAT_RANGES:()=>dc,aborted:()=>an,allowsEval:()=>lc,assert:()=>AE,assertEqual:()=>xE,assertIs:()=>_E,assertNever:()=>TE,assertNotEqual:()=>SE,assignProp:()=>sc,cached:()=>Cr,captureStackTrace:()=>ki,cleanEnum:()=>UE,cleanRegex:()=>Or,clone:()=>st,createTransparentProxy:()=>OE,defineLazy:()=>ie,esc:()=>on,escapeRegex:()=>Pt,extend:()=>zE,finalizeIssue:()=>lt,floatSafeRemainder:()=>ac,getElementAtPath:()=>kE,getEnumValues:()=>oc,getLengthableOrigin:()=>Pr,getParsedType:()=>NE,getSizableOrigin:()=>rh,isObject:()=>Wn,isPlainObject:()=>qn,issue:()=>pc,joinValues:()=>Ai,jsonStringifyReplacer:()=>ic,merge:()=>LE,normalizeParams:()=>G,nullish:()=>Nr,numKeys:()=>CE,omit:()=>ME,optionalKeys:()=>uc,partial:()=>DE,pick:()=>PE,prefixIssues:()=>xt,primitiveTypes:()=>th,promiseAllObject:()=>IE,propertyKeyTypes:()=>cc,randomString:()=>RE,required:()=>$E,stringifyPrimitive:()=>Ii,unwrapMessage:()=>Rr});function xE(t){return t}function SE(t){return t}function _E(t){}function TE(t){throw new Error}function AE(t){}function oc(t){let e=Object.values(t).filter(r=>typeof r=="number");return Object.entries(t).filter(([r,o])=>e.indexOf(+r)===-1).map(([r,o])=>o)}function Ai(t,e="|"){return t.map(n=>Ii(n)).join(e)}function ic(t,e){return typeof e=="bigint"?e.toString():e}function Cr(t){return{get value(){{let n=t();return Object.defineProperty(this,"value",{value:n}),n}throw new Error("cached value already set")}}}function Nr(t){return t==null}function Or(t){let e=t.startsWith("^")?1:0,n=t.endsWith("$")?t.length-1:t.length;return t.slice(e,n)}function ac(t,e){let n=(t.toString().split(".")[1]||"").length,r=(e.toString().split(".")[1]||"").length,o=n>r?n:r,i=Number.parseInt(t.toFixed(o).replace(".","")),a=Number.parseInt(e.toFixed(o).replace(".",""));return i%a/10**o}function ie(t,e,n){Object.defineProperty(t,e,{get(){{let o=n();return t[e]=o,o}throw new Error("cached value already set")},set(o){Object.defineProperty(t,e,{value:o})},configurable:!0})}function sc(t,e,n){Object.defineProperty(t,e,{value:n,writable:!0,enumerable:!0,configurable:!0})}function kE(t,e){return e?e.reduce((n,r)=>n?.[r],t):t}function IE(t){let e=Object.keys(t),n=e.map(r=>t[r]);return Promise.all(n).then(r=>{let o={};for(let i=0;i<e.length;i++)o[e[i]]=r[i];return o})}function RE(t=10){let e="abcdefghijklmnopqrstuvwxyz",n="";for(let r=0;r<t;r++)n+=e[Math.floor(Math.random()*e.length)];return n}function on(t){return JSON.stringify(t)}var ki=Error.captureStackTrace?Error.captureStackTrace:(...t)=>{};function Wn(t){return typeof t=="object"&&t!==null&&!Array.isArray(t)}var lc=Cr(()=>{if(typeof navigator<"u"&&navigator?.userAgent?.includes("Cloudflare"))return!1;try{let t=Function;return new t(""),!0}catch{return!1}});function qn(t){if(Wn(t)===!1)return!1;let e=t.constructor;if(e===void 0)return!0;let n=e.prototype;return!(Wn(n)===!1||Object.prototype.hasOwnProperty.call(n,"isPrototypeOf")===!1)}function CE(t){let e=0;for(let n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}var NE=t=>{let e=typeof t;switch(e){case"undefined":return"undefined";case"string":return"string";case"number":return Number.isNaN(t)?"nan":"number";case"boolean":return"boolean";case"function":return"function";case"bigint":return"bigint";case"symbol":return"symbol";case"object":return Array.isArray(t)?"array":t===null?"null":t.then&&typeof t.then=="function"&&t.catch&&typeof t.catch=="function"?"promise":typeof Map<"u"&&t instanceof Map?"map":typeof Set<"u"&&t instanceof Set?"set":typeof Date<"u"&&t instanceof Date?"date":typeof File<"u"&&t instanceof File?"file":"object";default:throw new Error(`Unknown data type: ${e}`)}},cc=new Set(["string","number","symbol"]),th=new Set(["string","number","bigint","boolean","symbol","undefined"]);function Pt(t){return t.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")}function st(t,e,n){let r=new t._zod.constr(e??t._zod.def);return(!e||n?.parent)&&(r._zod.parent=t),r}function G(t){let e=t;if(!e)return{};if(typeof e=="string")return{error:()=>e};if(e?.message!==void 0){if(e?.error!==void 0)throw new Error("Cannot specify both `message` and `error` params");e.error=e.message}return delete e.message,typeof e.error=="string"?{...e,error:()=>e.error}:e}function OE(t){let e;return new Proxy({},{get(n,r,o){return e??(e=t()),Reflect.get(e,r,o)},set(n,r,o,i){return e??(e=t()),Reflect.set(e,r,o,i)},has(n,r){return e??(e=t()),Reflect.has(e,r)},deleteProperty(n,r){return e??(e=t()),Reflect.deleteProperty(e,r)},ownKeys(n){return e??(e=t()),Reflect.ownKeys(e)},getOwnPropertyDescriptor(n,r){return e??(e=t()),Reflect.getOwnPropertyDescriptor(e,r)},defineProperty(n,r,o){return e??(e=t()),Reflect.defineProperty(e,r,o)}})}function Ii(t){return typeof t=="bigint"?t.toString()+"n":typeof t=="string"?`"${t}"`:`${t}`}function uc(t){return Object.keys(t).filter(e=>t[e]._zod.optin==="optional"&&t[e]._zod.optout==="optional")}var dc={safeint:[Number.MIN_SAFE_INTEGER,Number.MAX_SAFE_INTEGER],int32:[-2147483648,2147483647],uint32:[0,4294967295],float32:[-34028234663852886e22,34028234663852886e22],float64:[-Number.MAX_VALUE,Number.MAX_VALUE]},nh={int64:[BigInt("-9223372036854775808"),BigInt("9223372036854775807")],uint64:[BigInt(0),BigInt("18446744073709551615")]};function PE(t,e){let n={},r=t._zod.def;for(let o in e){if(!(o in r.shape))throw new Error(`Unrecognized key: "${o}"`);e[o]&&(n[o]=r.shape[o])}return st(t,{...t._zod.def,shape:n,checks:[]})}function ME(t,e){let n={...t._zod.def.shape},r=t._zod.def;for(let o in e){if(!(o in r.shape))throw new Error(`Unrecognized key: "${o}"`);e[o]&&delete n[o]}return st(t,{...t._zod.def,shape:n,checks:[]})}function zE(t,e){if(!qn(e))throw new Error("Invalid input to extend: expected a plain object");let n={...t._zod.def,get shape(){let r={...t._zod.def.shape,...e};return sc(this,"shape",r),r},checks:[]};return st(t,n)}function LE(t,e){return st(t,{...t._zod.def,get shape(){let n={...t._zod.def.shape,...e._zod.def.shape};return sc(this,"shape",n),n},catchall:e._zod.def.catchall,checks:[]})}function DE(t,e,n){let r=e._zod.def.shape,o={...r};if(n)for(let i in n){if(!(i in r))throw new Error(`Unrecognized key: "${i}"`);n[i]&&(o[i]=t?new t({type:"optional",innerType:r[i]}):r[i])}else for(let i in r)o[i]=t?new t({type:"optional",innerType:r[i]}):r[i];return st(e,{...e._zod.def,shape:o,checks:[]})}function $E(t,e,n){let r=e._zod.def.shape,o={...r};if(n)for(let i in n){if(!(i in o))throw new Error(`Unrecognized key: "${i}"`);n[i]&&(o[i]=new t({type:"nonoptional",innerType:r[i]}))}else for(let i in r)o[i]=new t({type:"nonoptional",innerType:r[i]});return st(e,{...e._zod.def,shape:o,checks:[]})}function an(t,e=0){for(let n=e;n<t.issues.length;n++)if(t.issues[n]?.continue!==!0)return!0;return!1}function xt(t,e){return e.map(n=>{var r;return(r=n).path??(r.path=[]),n.path.unshift(t),n})}function Rr(t){return typeof t=="string"?t:t?.message}function lt(t,e,n){let r={...t,path:t.path??[]};if(!t.message){let o=Rr(t.inst?._zod.def?.error?.(t))??Rr(e?.error?.(t))??Rr(n.customError?.(t))??Rr(n.localeError?.(t))??"Invalid input";r.message=o}return delete r.inst,delete r.continue,e?.reportInput||delete r.input,r}function rh(t){return t instanceof Set?"set":t instanceof Map?"map":t instanceof File?"file":"unknown"}function Pr(t){return Array.isArray(t)?"array":typeof t=="string"?"string":"unknown"}function pc(...t){let[e,n,r]=t;return typeof e=="string"?{message:e,code:"custom",input:n,inst:r}:{...e}}function UE(t){return Object.entries(t).filter(([e,n])=>Number.isNaN(Number.parseInt(e,10))).map(e=>e[1])}var rc=class{constructor(...e){}};var oh=(t,e)=>{t.name="$ZodError",Object.defineProperty(t,"_zod",{value:t._zod,enumerable:!1}),Object.defineProperty(t,"issues",{value:e,enumerable:!1}),Object.defineProperty(t,"message",{get(){return JSON.stringify(e,ic,2)},enumerable:!0}),Object.defineProperty(t,"toString",{value:()=>t.message,enumerable:!1})},Ri=I("$ZodError",oh),hc=I("$ZodError",oh,{Parent:Error});function fc(t,e=n=>n.message){let n={},r=[];for(let o of t.issues)o.path.length>0?(n[o.path[0]]=n[o.path[0]]||[],n[o.path[0]].push(e(o))):r.push(e(o));return{formErrors:r,fieldErrors:n}}function mc(t,e){let n=e||function(i){return i.message},r={_errors:[]},o=i=>{for(let a of i.issues)if(a.code==="invalid_union"&&a.errors.length)a.errors.map(s=>o({issues:s}));else if(a.code==="invalid_key")o({issues:a.issues});else if(a.code==="invalid_element")o({issues:a.issues});else if(a.path.length===0)r._errors.push(n(a));else{let s=r,l=0;for(;l<a.path.length;){let c=a.path[l];l===a.path.length-1?(s[c]=s[c]||{_errors:[]},s[c]._errors.push(n(a))):s[c]=s[c]||{_errors:[]},s=s[c],l++}}};return o(t),r}var ih=t=>(e,n,r,o)=>{let i=r?Object.assign(r,{async:!1}):{async:!1},a=e._zod.run({value:n,issues:[]},i);if(a instanceof Promise)throw new kt;if(a.issues.length){let s=new(o?.Err??t)(a.issues.map(l=>lt(l,i,ze())));throw ki(s,o?.callee),s}return a.value};var ah=t=>async(e,n,r,o)=>{let i=r?Object.assign(r,{async:!0}):{async:!0},a=e._zod.run({value:n,issues:[]},i);if(a instanceof Promise&&(a=await a),a.issues.length){let s=new(o?.Err??t)(a.issues.map(l=>lt(l,i,ze())));throw ki(s,o?.callee),s}return a.value};var gc=t=>(e,n,r)=>{let o=r?{...r,async:!1}:{async:!1},i=e._zod.run({value:n,issues:[]},o);if(i instanceof Promise)throw new kt;return i.issues.length?{success:!1,error:new(t??Ri)(i.issues.map(a=>lt(a,o,ze())))}:{success:!0,data:i.value}},sh=gc(hc),vc=t=>async(e,n,r)=>{let o=r?Object.assign(r,{async:!0}):{async:!0},i=e._zod.run({value:n,issues:[]},o);return i instanceof Promise&&(i=await i),i.issues.length?{success:!1,error:new t(i.issues.map(a=>lt(a,o,ze())))}:{success:!0,data:i.value}},lh=vc(hc);var ch=/^[cC][^\s-]{8,}$/,uh=/^[0-9a-z]+$/,dh=/^[0-9A-HJKMNP-TV-Za-hjkmnp-tv-z]{26}$/,ph=/^[0-9a-vA-V]{20}$/,hh=/^[A-Za-z0-9]{27}$/,fh=/^[a-zA-Z0-9_-]{21}$/,mh=/^P(?:(\d+W)|(?!.*W)(?=\d|T\d)(\d+Y)?(\d+M)?(\d+D)?(T(?=\d)(\d+H)?(\d+M)?(\d+([.,]\d+)?S)?)?)$/;var gh=/^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12})$/,bc=t=>t?new RegExp(`^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-${t}[0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12})$`):/^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[1-8][0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12}|00000000-0000-0000-0000-000000000000)$/;var vh=/^(?!\.)(?!.*\.\.)([A-Za-z0-9_'+\-\.]*)[A-Za-z0-9_+-]@([A-Za-z0-9][A-Za-z0-9\-]*\.)+[A-Za-z]{2,}$/;var FE="^(\\p{Extended_Pictographic}|\\p{Emoji_Component})+$";function bh(){return new RegExp(FE,"u")}var yh=/^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])$/,wh=/^(([0-9a-fA-F]{1,4}:){7}[0-9a-fA-F]{1,4}|::|([0-9a-fA-F]{1,4})?::([0-9a-fA-F]{1,4}:?){0,6})$/,Eh=/^((25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\/([0-9]|[1-2][0-9]|3[0-2])$/,xh=/^(([0-9a-fA-F]{1,4}:){7}[0-9a-fA-F]{1,4}|::|([0-9a-fA-F]{1,4})?::([0-9a-fA-F]{1,4}:?){0,6})\/(12[0-8]|1[01][0-9]|[1-9]?[0-9])$/,Sh=/^$|^(?:[0-9a-zA-Z+/]{4})*(?:(?:[0-9a-zA-Z+/]{2}==)|(?:[0-9a-zA-Z+/]{3}=))?$/,yc=/^[A-Za-z0-9_-]*$/,_h=/^([a-zA-Z0-9-]+\.)*[a-zA-Z0-9-]+$/;var Th=/^\+(?:[0-9]){6,14}[0-9]$/,Ah="(?:(?:\\d\\d[2468][048]|\\d\\d[13579][26]|\\d\\d0[48]|[02468][048]00|[13579][26]00)-02-29|\\d{4}-(?:(?:0[13578]|1[02])-(?:0[1-9]|[12]\\d|3[01])|(?:0[469]|11)-(?:0[1-9]|[12]\\d|30)|(?:02)-(?:0[1-9]|1\\d|2[0-8])))",kh=new RegExp(`^${Ah}$`);function Ih(t){let e="(?:[01]\\d|2[0-3]):[0-5]\\d";return typeof t.precision=="number"?t.precision===-1?`${e}`:t.precision===0?`${e}:[0-5]\\d`:`${e}:[0-5]\\d\\.\\d{${t.precision}}`:`${e}(?::[0-5]\\d(?:\\.\\d+)?)?`}function Rh(t){return new RegExp(`^${Ih(t)}$`)}function Ch(t){let e=Ih({precision:t.precision}),n=["Z"];t.local&&n.push(""),t.offset&&n.push("([+-]\\d{2}:\\d{2})");let r=`${e}(?:${n.join("|")})`;return new RegExp(`^${Ah}T(?:${r})$`)}var Nh=t=>{let e=t?`[\\s\\S]{${t?.minimum??0},${t?.maximum??""}}`:"[\\s\\S]*";return new RegExp(`^${e}$`)};var Oh=/^\d+$/,Ph=/^-?\d+(?:\.\d+)?/i,Mh=/true|false/i;var zh=/^[^A-Z]*$/,Lh=/^[^a-z]*$/;var $e=I("$ZodCheck",(t,e)=>{var n;t._zod??(t._zod={}),t._zod.def=e,(n=t._zod).onattach??(n.onattach=[])}),Dh={number:"number",bigint:"bigint",object:"date"},wc=I("$ZodCheckLessThan",(t,e)=>{$e.init(t,e);let n=Dh[typeof e.value];t._zod.onattach.push(r=>{let o=r._zod.bag,i=(e.inclusive?o.maximum:o.exclusiveMaximum)??Number.POSITIVE_INFINITY;e.value<i&&(e.inclusive?o.maximum=e.value:o.exclusiveMaximum=e.value)}),t._zod.check=r=>{(e.inclusive?r.value<=e.value:r.value<e.value)||r.issues.push({origin:n,code:"too_big",maximum:e.value,input:r.value,inclusive:e.inclusive,inst:t,continue:!e.abort})}}),Ec=I("$ZodCheckGreaterThan",(t,e)=>{$e.init(t,e);let n=Dh[typeof e.value];t._zod.onattach.push(r=>{let o=r._zod.bag,i=(e.inclusive?o.minimum:o.exclusiveMinimum)??Number.NEGATIVE_INFINITY;e.value>i&&(e.inclusive?o.minimum=e.value:o.exclusiveMinimum=e.value)}),t._zod.check=r=>{(e.inclusive?r.value>=e.value:r.value>e.value)||r.issues.push({origin:n,code:"too_small",minimum:e.value,input:r.value,inclusive:e.inclusive,inst:t,continue:!e.abort})}}),$h=I("$ZodCheckMultipleOf",(t,e)=>{$e.init(t,e),t._zod.onattach.push(n=>{var r;(r=n._zod.bag).multipleOf??(r.multipleOf=e.value)}),t._zod.check=n=>{if(typeof n.value!=typeof e.value)throw new Error("Cannot mix number and bigint in multiple_of check.");(typeof n.value=="bigint"?n.value%e.value===BigInt(0):ac(n.value,e.value)===0)||n.issues.push({origin:typeof n.value,code:"not_multiple_of",divisor:e.value,input:n.value,inst:t,continue:!e.abort})}}),Uh=I("$ZodCheckNumberFormat",(t,e)=>{$e.init(t,e),e.format=e.format||"float64";let n=e.format?.includes("int"),r=n?"int":"number",[o,i]=dc[e.format];t._zod.onattach.push(a=>{let s=a._zod.bag;s.format=e.format,s.minimum=o,s.maximum=i,n&&(s.pattern=Oh)}),t._zod.check=a=>{let s=a.value;if(n){if(!Number.isInteger(s)){a.issues.push({expected:r,format:e.format,code:"invalid_type",input:s,inst:t});return}if(!Number.isSafeInteger(s)){s>0?a.issues.push({input:s,code:"too_big",maximum:Number.MAX_SAFE_INTEGER,note:"Integers must be within the safe integer range.",inst:t,origin:r,continue:!e.abort}):a.issues.push({input:s,code:"too_small",minimum:Number.MIN_SAFE_INTEGER,note:"Integers must be within the safe integer range.",inst:t,origin:r,continue:!e.abort});return}}s<o&&a.issues.push({origin:"number",input:s,code:"too_small",minimum:o,inclusive:!0,inst:t,continue:!e.abort}),s>i&&a.issues.push({origin:"number",input:s,code:"too_big",maximum:i,inst:t})}});var Hh=I("$ZodCheckMaxLength",(t,e)=>{var n;$e.init(t,e),(n=t._zod.def).when??(n.when=r=>{let o=r.value;return!Nr(o)&&o.length!==void 0}),t._zod.onattach.push(r=>{let o=r._zod.bag.maximum??Number.POSITIVE_INFINITY;e.maximum<o&&(r._zod.bag.maximum=e.maximum)}),t._zod.check=r=>{let o=r.value;if(o.length<=e.maximum)return;let a=Pr(o);r.issues.push({origin:a,code:"too_big",maximum:e.maximum,inclusive:!0,input:o,inst:t,continue:!e.abort})}}),Fh=I("$ZodCheckMinLength",(t,e)=>{var n;$e.init(t,e),(n=t._zod.def).when??(n.when=r=>{let o=r.value;return!Nr(o)&&o.length!==void 0}),t._zod.onattach.push(r=>{let o=r._zod.bag.minimum??Number.NEGATIVE_INFINITY;e.minimum>o&&(r._zod.bag.minimum=e.minimum)}),t._zod.check=r=>{let o=r.value;if(o.length>=e.minimum)return;let a=Pr(o);r.issues.push({origin:a,code:"too_small",minimum:e.minimum,inclusive:!0,input:o,inst:t,continue:!e.abort})}}),Gh=I("$ZodCheckLengthEquals",(t,e)=>{var n;$e.init(t,e),(n=t._zod.def).when??(n.when=r=>{let o=r.value;return!Nr(o)&&o.length!==void 0}),t._zod.onattach.push(r=>{let o=r._zod.bag;o.minimum=e.length,o.maximum=e.length,o.length=e.length}),t._zod.check=r=>{let o=r.value,i=o.length;if(i===e.length)return;let a=Pr(o),s=i>e.length;r.issues.push({origin:a,...s?{code:"too_big",maximum:e.length}:{code:"too_small",minimum:e.length},inclusive:!0,exact:!0,input:r.value,inst:t,continue:!e.abort})}}),Mr=I("$ZodCheckStringFormat",(t,e)=>{var n,r;$e.init(t,e),t._zod.onattach.push(o=>{let i=o._zod.bag;i.format=e.format,e.pattern&&(i.patterns??(i.patterns=new Set),i.patterns.add(e.pattern))}),e.pattern?(n=t._zod).check??(n.check=o=>{e.pattern.lastIndex=0,!e.pattern.test(o.value)&&o.issues.push({origin:"string",code:"invalid_format",format:e.format,input:o.value,...e.pattern?{pattern:e.pattern.toString()}:{},inst:t,continue:!e.abort})}):(r=t._zod).check??(r.check=()=>{})}),Zh=I("$ZodCheckRegex",(t,e)=>{Mr.init(t,e),t._zod.check=n=>{e.pattern.lastIndex=0,!e.pattern.test(n.value)&&n.issues.push({origin:"string",code:"invalid_format",format:"regex",input:n.value,pattern:e.pattern.toString(),inst:t,continue:!e.abort})}}),Bh=I("$ZodCheckLowerCase",(t,e)=>{e.pattern??(e.pattern=zh),Mr.init(t,e)}),Vh=I("$ZodCheckUpperCase",(t,e)=>{e.pattern??(e.pattern=Lh),Mr.init(t,e)}),jh=I("$ZodCheckIncludes",(t,e)=>{$e.init(t,e);let n=Pt(e.includes),r=new RegExp(typeof e.position=="number"?`^.{${e.position}}${n}`:n);e.pattern=r,t._zod.onattach.push(o=>{let i=o._zod.bag;i.patterns??(i.patterns=new Set),i.patterns.add(r)}),t._zod.check=o=>{o.value.includes(e.includes,e.position)||o.issues.push({origin:"string",code:"invalid_format",format:"includes",includes:e.includes,input:o.value,inst:t,continue:!e.abort})}}),Wh=I("$ZodCheckStartsWith",(t,e)=>{$e.init(t,e);let n=new RegExp(`^${Pt(e.prefix)}.*`);e.pattern??(e.pattern=n),t._zod.onattach.push(r=>{let o=r._zod.bag;o.patterns??(o.patterns=new Set),o.patterns.add(n)}),t._zod.check=r=>{r.value.startsWith(e.prefix)||r.issues.push({origin:"string",code:"invalid_format",format:"starts_with",prefix:e.prefix,input:r.value,inst:t,continue:!e.abort})}}),qh=I("$ZodCheckEndsWith",(t,e)=>{$e.init(t,e);let n=new RegExp(`.*${Pt(e.suffix)}$`);e.pattern??(e.pattern=n),t._zod.onattach.push(r=>{let o=r._zod.bag;o.patterns??(o.patterns=new Set),o.patterns.add(n)}),t._zod.check=r=>{r.value.endsWith(e.suffix)||r.issues.push({origin:"string",code:"invalid_format",format:"ends_with",suffix:e.suffix,input:r.value,inst:t,continue:!e.abort})}});var Yh=I("$ZodCheckOverwrite",(t,e)=>{$e.init(t,e),t._zod.check=n=>{n.value=e.tx(n.value)}});var Ni=class{constructor(e=[]){this.content=[],this.indent=0,this&&(this.args=e)}indented(e){this.indent+=1,e(this),this.indent-=1}write(e){if(typeof e=="function"){e(this,{execution:"sync"}),e(this,{execution:"async"});return}let r=e.split(`
`).filter(a=>a),o=Math.min(...r.map(a=>a.length-a.trimStart().length)),i=r.map(a=>a.slice(o)).map(a=>" ".repeat(this.indent*2)+a);for(let a of i)this.content.push(a)}compile(){let e=Function,n=this?.args,o=[...(this?.content??[""]).map(i=>`  ${i}`)];return new e(...n,o.join(`
`))}};var Kh={major:4,minor:0,patch:0};var ce=I("$ZodType",(t,e)=>{var n;t??(t={}),t._zod.def=e,t._zod.bag=t._zod.bag||{},t._zod.version=Kh;let r=[...t._zod.def.checks??[]];t._zod.traits.has("$ZodCheck")&&r.unshift(t);for(let o of r)for(let i of o._zod.onattach)i(t);if(r.length===0)(n=t._zod).deferred??(n.deferred=[]),t._zod.deferred?.push(()=>{t._zod.run=t._zod.parse});else{let o=(i,a,s)=>{let l=an(i),c;for(let u of a){if(u._zod.def.when){if(!u._zod.def.when(i))continue}else if(l)continue;let h=i.issues.length,m=u._zod.check(i);if(m instanceof Promise&&s?.async===!1)throw new kt;if(c||m instanceof Promise)c=(c??Promise.resolve()).then(async()=>{await m,i.issues.length!==h&&(l||(l=an(i,h)))});else{if(i.issues.length===h)continue;l||(l=an(i,h))}}return c?c.then(()=>i):i};t._zod.run=(i,a)=>{let s=t._zod.parse(i,a);if(s instanceof Promise){if(a.async===!1)throw new kt;return s.then(l=>o(l,r,a))}return o(s,r,a)}}t["~standard"]={validate:o=>{try{let i=sh(t,o);return i.success?{value:i.data}:{issues:i.error?.issues}}catch{return lh(t,o).then(a=>a.success?{value:a.data}:{issues:a.error?.issues})}},vendor:"zod",version:1}}),Pi=I("$ZodString",(t,e)=>{ce.init(t,e),t._zod.pattern=[...t?._zod.bag?.patterns??[]].pop()??Nh(t._zod.bag),t._zod.parse=(n,r)=>{if(e.coerce)try{n.value=String(n.value)}catch{}return typeof n.value=="string"||n.issues.push({expected:"string",code:"invalid_type",input:n.value,inst:t}),n}}),fe=I("$ZodStringFormat",(t,e)=>{Mr.init(t,e),Pi.init(t,e)}),lf=I("$ZodGUID",(t,e)=>{e.pattern??(e.pattern=gh),fe.init(t,e)}),cf=I("$ZodUUID",(t,e)=>{if(e.version){let r={v1:1,v2:2,v3:3,v4:4,v5:5,v6:6,v7:7,v8:8}[e.version];if(r===void 0)throw new Error(`Invalid UUID version: "${e.version}"`);e.pattern??(e.pattern=bc(r))}else e.pattern??(e.pattern=bc());fe.init(t,e)}),uf=I("$ZodEmail",(t,e)=>{e.pattern??(e.pattern=vh),fe.init(t,e)}),df=I("$ZodURL",(t,e)=>{fe.init(t,e),t._zod.check=n=>{try{let r=n.value,o=new URL(r),i=o.href;e.hostname&&(e.hostname.lastIndex=0,e.hostname.test(o.hostname)||n.issues.push({code:"invalid_format",format:"url",note:"Invalid hostname",pattern:_h.source,input:n.value,inst:t,continue:!e.abort})),e.protocol&&(e.protocol.lastIndex=0,e.protocol.test(o.protocol.endsWith(":")?o.protocol.slice(0,-1):o.protocol)||n.issues.push({code:"invalid_format",format:"url",note:"Invalid protocol",pattern:e.protocol.source,input:n.value,inst:t,continue:!e.abort})),!r.endsWith("/")&&i.endsWith("/")?n.value=i.slice(0,-1):n.value=i;return}catch{n.issues.push({code:"invalid_format",format:"url",input:n.value,inst:t,continue:!e.abort})}}}),pf=I("$ZodEmoji",(t,e)=>{e.pattern??(e.pattern=bh()),fe.init(t,e)}),hf=I("$ZodNanoID",(t,e)=>{e.pattern??(e.pattern=fh),fe.init(t,e)}),ff=I("$ZodCUID",(t,e)=>{e.pattern??(e.pattern=ch),fe.init(t,e)}),mf=I("$ZodCUID2",(t,e)=>{e.pattern??(e.pattern=uh),fe.init(t,e)}),gf=I("$ZodULID",(t,e)=>{e.pattern??(e.pattern=dh),fe.init(t,e)}),vf=I("$ZodXID",(t,e)=>{e.pattern??(e.pattern=ph),fe.init(t,e)}),bf=I("$ZodKSUID",(t,e)=>{e.pattern??(e.pattern=hh),fe.init(t,e)}),yf=I("$ZodISODateTime",(t,e)=>{e.pattern??(e.pattern=Ch(e)),fe.init(t,e)}),wf=I("$ZodISODate",(t,e)=>{e.pattern??(e.pattern=kh),fe.init(t,e)}),Ef=I("$ZodISOTime",(t,e)=>{e.pattern??(e.pattern=Rh(e)),fe.init(t,e)}),xf=I("$ZodISODuration",(t,e)=>{e.pattern??(e.pattern=mh),fe.init(t,e)}),Sf=I("$ZodIPv4",(t,e)=>{e.pattern??(e.pattern=yh),fe.init(t,e),t._zod.onattach.push(n=>{let r=n._zod.bag;r.format="ipv4"})}),_f=I("$ZodIPv6",(t,e)=>{e.pattern??(e.pattern=wh),fe.init(t,e),t._zod.onattach.push(n=>{let r=n._zod.bag;r.format="ipv6"}),t._zod.check=n=>{try{new URL(`http://[${n.value}]`)}catch{n.issues.push({code:"invalid_format",format:"ipv6",input:n.value,inst:t,continue:!e.abort})}}}),Tf=I("$ZodCIDRv4",(t,e)=>{e.pattern??(e.pattern=Eh),fe.init(t,e)}),Af=I("$ZodCIDRv6",(t,e)=>{e.pattern??(e.pattern=xh),fe.init(t,e),t._zod.check=n=>{let[r,o]=n.value.split("/");try{if(!o)throw new Error;let i=Number(o);if(`${i}`!==o)throw new Error;if(i<0||i>128)throw new Error;new URL(`http://[${r}]`)}catch{n.issues.push({code:"invalid_format",format:"cidrv6",input:n.value,inst:t,continue:!e.abort})}}});function kf(t){if(t==="")return!0;if(t.length%4!==0)return!1;try{return atob(t),!0}catch{return!1}}var If=I("$ZodBase64",(t,e)=>{e.pattern??(e.pattern=Sh),fe.init(t,e),t._zod.onattach.push(n=>{n._zod.bag.contentEncoding="base64"}),t._zod.check=n=>{kf(n.value)||n.issues.push({code:"invalid_format",format:"base64",input:n.value,inst:t,continue:!e.abort})}});function GE(t){if(!yc.test(t))return!1;let e=t.replace(/[-_]/g,r=>r==="-"?"+":"/"),n=e.padEnd(Math.ceil(e.length/4)*4,"=");return kf(n)}var Rf=I("$ZodBase64URL",(t,e)=>{e.pattern??(e.pattern=yc),fe.init(t,e),t._zod.onattach.push(n=>{n._zod.bag.contentEncoding="base64url"}),t._zod.check=n=>{GE(n.value)||n.issues.push({code:"invalid_format",format:"base64url",input:n.value,inst:t,continue:!e.abort})}}),Cf=I("$ZodE164",(t,e)=>{e.pattern??(e.pattern=Th),fe.init(t,e)});function ZE(t,e=null){try{let n=t.split(".");if(n.length!==3)return!1;let[r]=n;if(!r)return!1;let o=JSON.parse(atob(r));return!("typ"in o&&o?.typ!=="JWT"||!o.alg||e&&(!("alg"in o)||o.alg!==e))}catch{return!1}}var Nf=I("$ZodJWT",(t,e)=>{fe.init(t,e),t._zod.check=n=>{ZE(n.value,e.alg)||n.issues.push({code:"invalid_format",format:"jwt",input:n.value,inst:t,continue:!e.abort})}});var Sc=I("$ZodNumber",(t,e)=>{ce.init(t,e),t._zod.pattern=t._zod.bag.pattern??Ph,t._zod.parse=(n,r)=>{if(e.coerce)try{n.value=Number(n.value)}catch{}let o=n.value;if(typeof o=="number"&&!Number.isNaN(o)&&Number.isFinite(o))return n;let i=typeof o=="number"?Number.isNaN(o)?"NaN":Number.isFinite(o)?void 0:"Infinity":void 0;return n.issues.push({expected:"number",code:"invalid_type",input:o,inst:t,...i?{received:i}:{}}),n}}),Of=I("$ZodNumber",(t,e)=>{Uh.init(t,e),Sc.init(t,e)}),Pf=I("$ZodBoolean",(t,e)=>{ce.init(t,e),t._zod.pattern=Mh,t._zod.parse=(n,r)=>{if(e.coerce)try{n.value=!!n.value}catch{}let o=n.value;return typeof o=="boolean"||n.issues.push({expected:"boolean",code:"invalid_type",input:o,inst:t}),n}});var Mf=I("$ZodAny",(t,e)=>{ce.init(t,e),t._zod.parse=n=>n}),zf=I("$ZodUnknown",(t,e)=>{ce.init(t,e),t._zod.parse=n=>n}),Lf=I("$ZodNever",(t,e)=>{ce.init(t,e),t._zod.parse=(n,r)=>(n.issues.push({expected:"never",code:"invalid_type",input:n.value,inst:t}),n)});function Jh(t,e,n){t.issues.length&&e.issues.push(...xt(n,t.issues)),e.value[n]=t.value}var Df=I("$ZodArray",(t,e)=>{ce.init(t,e),t._zod.parse=(n,r)=>{let o=n.value;if(!Array.isArray(o))return n.issues.push({expected:"array",code:"invalid_type",input:o,inst:t}),n;n.value=Array(o.length);let i=[];for(let a=0;a<o.length;a++){let s=o[a],l=e.element._zod.run({value:s,issues:[]},r);l instanceof Promise?i.push(l.then(c=>Jh(c,n,a))):Jh(l,n,a)}return i.length?Promise.all(i).then(()=>n):n}});function Oi(t,e,n){t.issues.length&&e.issues.push(...xt(n,t.issues)),e.value[n]=t.value}function Qh(t,e,n,r){t.issues.length?r[n]===void 0?n in r?e.value[n]=void 0:e.value[n]=t.value:e.issues.push(...xt(n,t.issues)):t.value===void 0?n in r&&(e.value[n]=void 0):e.value[n]=t.value}var $f=I("$ZodObject",(t,e)=>{ce.init(t,e);let n=Cr(()=>{let h=Object.keys(e.shape);for(let f of h)if(!(e.shape[f]instanceof ce))throw new Error(`Invalid element at key "${f}": expected a Zod schema`);let m=uc(e.shape);return{shape:e.shape,keys:h,keySet:new Set(h),numKeys:h.length,optionalKeys:new Set(m)}});ie(t._zod,"propValues",()=>{let h=e.shape,m={};for(let f in h){let p=h[f]._zod;if(p.values){m[f]??(m[f]=new Set);for(let b of p.values)m[f].add(b)}}return m});let r=h=>{let m=new Ni(["shape","payload","ctx"]),f=n.value,p=y=>{let _=on(y);return`shape[${_}]._zod.run({ value: input[${_}], issues: [] }, ctx)`};m.write("const input = payload.value;");let b=Object.create(null),g=0;for(let y of f.keys)b[y]=`key_${g++}`;m.write("const newResult = {}");for(let y of f.keys)if(f.optionalKeys.has(y)){let _=b[y];m.write(`const ${_} = ${p(y)};`);let C=on(y);m.write(`
        if (${_}.issues.length) {
          if (input[${C}] === undefined) {
            if (${C} in input) {
              newResult[${C}] = undefined;
            }
          } else {
            payload.issues = payload.issues.concat(
              ${_}.issues.map((iss) => ({
                ...iss,
                path: iss.path ? [${C}, ...iss.path] : [${C}],
              }))
            );
          }
        } else if (${_}.value === undefined) {
          if (${C} in input) newResult[${C}] = undefined;
        } else {
          newResult[${C}] = ${_}.value;
        }
        `)}else{let _=b[y];m.write(`const ${_} = ${p(y)};`),m.write(`
          if (${_}.issues.length) payload.issues = payload.issues.concat(${_}.issues.map(iss => ({
            ...iss,
            path: iss.path ? [${on(y)}, ...iss.path] : [${on(y)}]
          })));`),m.write(`newResult[${on(y)}] = ${_}.value`)}m.write("payload.value = newResult;"),m.write("return payload;");let E=m.compile();return(y,_)=>E(h,y,_)},o,i=Wn,a=!Ti.jitless,l=a&&lc.value,c=e.catchall,u;t._zod.parse=(h,m)=>{u??(u=n.value);let f=h.value;if(!i(f))return h.issues.push({expected:"object",code:"invalid_type",input:f,inst:t}),h;let p=[];if(a&&l&&m?.async===!1&&m.jitless!==!0)o||(o=r(e.shape)),h=o(h,m);else{h.value={};let _=u.shape;for(let C of u.keys){let w=_[C],T=w._zod.run({value:f[C],issues:[]},m),S=w._zod.optin==="optional"&&w._zod.optout==="optional";T instanceof Promise?p.push(T.then(A=>S?Qh(A,h,C,f):Oi(A,h,C))):S?Qh(T,h,C,f):Oi(T,h,C)}}if(!c)return p.length?Promise.all(p).then(()=>h):h;let b=[],g=u.keySet,E=c._zod,y=E.def.type;for(let _ of Object.keys(f)){if(g.has(_))continue;if(y==="never"){b.push(_);continue}let C=E.run({value:f[_],issues:[]},m);C instanceof Promise?p.push(C.then(w=>Oi(w,h,_))):Oi(C,h,_)}return b.length&&h.issues.push({code:"unrecognized_keys",keys:b,input:f,inst:t}),p.length?Promise.all(p).then(()=>h):h}});function ef(t,e,n,r){for(let o of t)if(o.issues.length===0)return e.value=o.value,e;return e.issues.push({code:"invalid_union",input:e.value,inst:n,errors:t.map(o=>o.issues.map(i=>lt(i,r,ze())))}),e}var _c=I("$ZodUnion",(t,e)=>{ce.init(t,e),ie(t._zod,"optin",()=>e.options.some(n=>n._zod.optin==="optional")?"optional":void 0),ie(t._zod,"optout",()=>e.options.some(n=>n._zod.optout==="optional")?"optional":void 0),ie(t._zod,"values",()=>{if(e.options.every(n=>n._zod.values))return new Set(e.options.flatMap(n=>Array.from(n._zod.values)))}),ie(t._zod,"pattern",()=>{if(e.options.every(n=>n._zod.pattern)){let n=e.options.map(r=>r._zod.pattern);return new RegExp(`^(${n.map(r=>Or(r.source)).join("|")})$`)}}),t._zod.parse=(n,r)=>{let o=!1,i=[];for(let a of e.options){let s=a._zod.run({value:n.value,issues:[]},r);if(s instanceof Promise)i.push(s),o=!0;else{if(s.issues.length===0)return s;i.push(s)}}return o?Promise.all(i).then(a=>ef(a,n,t,r)):ef(i,n,t,r)}}),Uf=I("$ZodDiscriminatedUnion",(t,e)=>{_c.init(t,e);let n=t._zod.parse;ie(t._zod,"propValues",()=>{let o={};for(let i of e.options){let a=i._zod.propValues;if(!a||Object.keys(a).length===0)throw new Error(`Invalid discriminated union option at index "${e.options.indexOf(i)}"`);for(let[s,l]of Object.entries(a)){o[s]||(o[s]=new Set);for(let c of l)o[s].add(c)}}return o});let r=Cr(()=>{let o=e.options,i=new Map;for(let a of o){let s=a._zod.propValues[e.discriminator];if(!s||s.size===0)throw new Error(`Invalid discriminated union option at index "${e.options.indexOf(a)}"`);for(let l of s){if(i.has(l))throw new Error(`Duplicate discriminator value "${String(l)}"`);i.set(l,a)}}return i});t._zod.parse=(o,i)=>{let a=o.value;if(!Wn(a))return o.issues.push({code:"invalid_type",expected:"object",input:a,inst:t}),o;let s=r.value.get(a?.[e.discriminator]);return s?s._zod.run(o,i):e.unionFallback?n(o,i):(o.issues.push({code:"invalid_union",errors:[],note:"No matching discriminator",input:a,path:[e.discriminator],inst:t}),o)}}),Hf=I("$ZodIntersection",(t,e)=>{ce.init(t,e),t._zod.parse=(n,r)=>{let o=n.value,i=e.left._zod.run({value:o,issues:[]},r),a=e.right._zod.run({value:o,issues:[]},r);return i instanceof Promise||a instanceof Promise?Promise.all([i,a]).then(([l,c])=>tf(n,l,c)):tf(n,i,a)}});function xc(t,e){if(t===e)return{valid:!0,data:t};if(t instanceof Date&&e instanceof Date&&+t==+e)return{valid:!0,data:t};if(qn(t)&&qn(e)){let n=Object.keys(e),r=Object.keys(t).filter(i=>n.indexOf(i)!==-1),o={...t,...e};for(let i of r){let a=xc(t[i],e[i]);if(!a.valid)return{valid:!1,mergeErrorPath:[i,...a.mergeErrorPath]};o[i]=a.data}return{valid:!0,data:o}}if(Array.isArray(t)&&Array.isArray(e)){if(t.length!==e.length)return{valid:!1,mergeErrorPath:[]};let n=[];for(let r=0;r<t.length;r++){let o=t[r],i=e[r],a=xc(o,i);if(!a.valid)return{valid:!1,mergeErrorPath:[r,...a.mergeErrorPath]};n.push(a.data)}return{valid:!0,data:n}}return{valid:!1,mergeErrorPath:[]}}function tf(t,e,n){if(e.issues.length&&t.issues.push(...e.issues),n.issues.length&&t.issues.push(...n.issues),an(t))return t;let r=xc(e.value,n.value);if(!r.valid)throw new Error(`Unmergable intersection. Error path: ${JSON.stringify(r.mergeErrorPath)}`);return t.value=r.data,t}var Ff=I("$ZodRecord",(t,e)=>{ce.init(t,e),t._zod.parse=(n,r)=>{let o=n.value;if(!qn(o))return n.issues.push({expected:"record",code:"invalid_type",input:o,inst:t}),n;let i=[];if(e.keyType._zod.values){let a=e.keyType._zod.values;n.value={};for(let l of a)if(typeof l=="string"||typeof l=="number"||typeof l=="symbol"){let c=e.valueType._zod.run({value:o[l],issues:[]},r);c instanceof Promise?i.push(c.then(u=>{u.issues.length&&n.issues.push(...xt(l,u.issues)),n.value[l]=u.value})):(c.issues.length&&n.issues.push(...xt(l,c.issues)),n.value[l]=c.value)}let s;for(let l in o)a.has(l)||(s=s??[],s.push(l));s&&s.length>0&&n.issues.push({code:"unrecognized_keys",input:o,inst:t,keys:s})}else{n.value={};for(let a of Reflect.ownKeys(o)){if(a==="__proto__")continue;let s=e.keyType._zod.run({value:a,issues:[]},r);if(s instanceof Promise)throw new Error("Async schemas not supported in object keys currently");if(s.issues.length){n.issues.push({origin:"record",code:"invalid_key",issues:s.issues.map(c=>lt(c,r,ze())),input:a,path:[a],inst:t}),n.value[s.value]=s.value;continue}let l=e.valueType._zod.run({value:o[a],issues:[]},r);l instanceof Promise?i.push(l.then(c=>{c.issues.length&&n.issues.push(...xt(a,c.issues)),n.value[s.value]=c.value})):(l.issues.length&&n.issues.push(...xt(a,l.issues)),n.value[s.value]=l.value)}}return i.length?Promise.all(i).then(()=>n):n}});var Gf=I("$ZodEnum",(t,e)=>{ce.init(t,e);let n=oc(e.entries);t._zod.values=new Set(n),t._zod.pattern=new RegExp(`^(${n.filter(r=>cc.has(typeof r)).map(r=>typeof r=="string"?Pt(r):r.toString()).join("|")})$`),t._zod.parse=(r,o)=>{let i=r.value;return t._zod.values.has(i)||r.issues.push({code:"invalid_value",values:n,input:i,inst:t}),r}}),Zf=I("$ZodLiteral",(t,e)=>{ce.init(t,e),t._zod.values=new Set(e.values),t._zod.pattern=new RegExp(`^(${e.values.map(n=>typeof n=="string"?Pt(n):n?n.toString():String(n)).join("|")})$`),t._zod.parse=(n,r)=>{let o=n.value;return t._zod.values.has(o)||n.issues.push({code:"invalid_value",values:e.values,input:o,inst:t}),n}});var Bf=I("$ZodTransform",(t,e)=>{ce.init(t,e),t._zod.parse=(n,r)=>{let o=e.transform(n.value,n);if(r.async)return(o instanceof Promise?o:Promise.resolve(o)).then(a=>(n.value=a,n));if(o instanceof Promise)throw new kt;return n.value=o,n}}),Vf=I("$ZodOptional",(t,e)=>{ce.init(t,e),t._zod.optin="optional",t._zod.optout="optional",ie(t._zod,"values",()=>e.innerType._zod.values?new Set([...e.innerType._zod.values,void 0]):void 0),ie(t._zod,"pattern",()=>{let n=e.innerType._zod.pattern;return n?new RegExp(`^(${Or(n.source)})?$`):void 0}),t._zod.parse=(n,r)=>e.innerType._zod.optin==="optional"?e.innerType._zod.run(n,r):n.value===void 0?n:e.innerType._zod.run(n,r)}),jf=I("$ZodNullable",(t,e)=>{ce.init(t,e),ie(t._zod,"optin",()=>e.innerType._zod.optin),ie(t._zod,"optout",()=>e.innerType._zod.optout),ie(t._zod,"pattern",()=>{let n=e.innerType._zod.pattern;return n?new RegExp(`^(${Or(n.source)}|null)$`):void 0}),ie(t._zod,"values",()=>e.innerType._zod.values?new Set([...e.innerType._zod.values,null]):void 0),t._zod.parse=(n,r)=>n.value===null?n:e.innerType._zod.run(n,r)}),Wf=I("$ZodDefault",(t,e)=>{ce.init(t,e),t._zod.optin="optional",ie(t._zod,"values",()=>e.innerType._zod.values),t._zod.parse=(n,r)=>{if(n.value===void 0)return n.value=e.defaultValue,n;let o=e.innerType._zod.run(n,r);return o instanceof Promise?o.then(i=>nf(i,e)):nf(o,e)}});function nf(t,e){return t.value===void 0&&(t.value=e.defaultValue),t}var qf=I("$ZodPrefault",(t,e)=>{ce.init(t,e),t._zod.optin="optional",ie(t._zod,"values",()=>e.innerType._zod.values),t._zod.parse=(n,r)=>(n.value===void 0&&(n.value=e.defaultValue),e.innerType._zod.run(n,r))}),Yf=I("$ZodNonOptional",(t,e)=>{ce.init(t,e),ie(t._zod,"values",()=>{let n=e.innerType._zod.values;return n?new Set([...n].filter(r=>r!==void 0)):void 0}),t._zod.parse=(n,r)=>{let o=e.innerType._zod.run(n,r);return o instanceof Promise?o.then(i=>rf(i,t)):rf(o,t)}});function rf(t,e){return!t.issues.length&&t.value===void 0&&t.issues.push({code:"invalid_type",expected:"nonoptional",input:t.value,inst:e}),t}var Xf=I("$ZodCatch",(t,e)=>{ce.init(t,e),t._zod.optin="optional",ie(t._zod,"optout",()=>e.innerType._zod.optout),ie(t._zod,"values",()=>e.innerType._zod.values),t._zod.parse=(n,r)=>{let o=e.innerType._zod.run(n,r);return o instanceof Promise?o.then(i=>(n.value=i.value,i.issues.length&&(n.value=e.catchValue({...n,error:{issues:i.issues.map(a=>lt(a,r,ze()))},input:n.value}),n.issues=[]),n)):(n.value=o.value,o.issues.length&&(n.value=e.catchValue({...n,error:{issues:o.issues.map(i=>lt(i,r,ze()))},input:n.value}),n.issues=[]),n)}});var Kf=I("$ZodPipe",(t,e)=>{ce.init(t,e),ie(t._zod,"values",()=>e.in._zod.values),ie(t._zod,"optin",()=>e.in._zod.optin),ie(t._zod,"optout",()=>e.out._zod.optout),t._zod.parse=(n,r)=>{let o=e.in._zod.run(n,r);return o instanceof Promise?o.then(i=>of(i,e,r)):of(o,e,r)}});function of(t,e,n){return an(t)?t:e.out._zod.run({value:t.value,issues:t.issues},n)}var Jf=I("$ZodReadonly",(t,e)=>{ce.init(t,e),ie(t._zod,"propValues",()=>e.innerType._zod.propValues),ie(t._zod,"values",()=>e.innerType._zod.values),ie(t._zod,"optin",()=>e.innerType._zod.optin),ie(t._zod,"optout",()=>e.innerType._zod.optout),t._zod.parse=(n,r)=>{let o=e.innerType._zod.run(n,r);return o instanceof Promise?o.then(af):af(o)}});function af(t){return t.value=Object.freeze(t.value),t}var Qf=I("$ZodLazy",(t,e)=>{ce.init(t,e),ie(t._zod,"innerType",()=>e.getter()),ie(t._zod,"pattern",()=>t._zod.innerType._zod.pattern),ie(t._zod,"propValues",()=>t._zod.innerType._zod.propValues),ie(t._zod,"optin",()=>t._zod.innerType._zod.optin),ie(t._zod,"optout",()=>t._zod.innerType._zod.optout),t._zod.parse=(n,r)=>t._zod.innerType._zod.run(n,r)}),em=I("$ZodCustom",(t,e)=>{$e.init(t,e),ce.init(t,e),t._zod.parse=(n,r)=>n,t._zod.check=n=>{let r=n.value,o=e.fn(r);if(o instanceof Promise)return o.then(i=>sf(i,n,r,t));sf(o,n,r,t)}});function sf(t,e,n,r){if(!t){let o={code:"custom",input:n,inst:r,path:[...r._zod.def.path??[]],continue:!r._zod.def.abort};r._zod.def.params&&(o.params=r._zod.def.params),e.issues.push(pc(o))}}var BE=t=>{let e=typeof t;switch(e){case"number":return Number.isNaN(t)?"NaN":"number";case"object":{if(Array.isArray(t))return"array";if(t===null)return"null";if(Object.getPrototypeOf(t)!==Object.prototype&&t.constructor)return t.constructor.name}}return e},VE=()=>{let t={string:{unit:"characters",verb:"to have"},file:{unit:"bytes",verb:"to have"},array:{unit:"items",verb:"to have"},set:{unit:"items",verb:"to have"}};function e(r){return t[r]??null}let n={regex:"input",email:"email address",url:"URL",emoji:"emoji",uuid:"UUID",uuidv4:"UUIDv4",uuidv6:"UUIDv6",nanoid:"nanoid",guid:"GUID",cuid:"cuid",cuid2:"cuid2",ulid:"ULID",xid:"XID",ksuid:"KSUID",datetime:"ISO datetime",date:"ISO date",time:"ISO time",duration:"ISO duration",ipv4:"IPv4 address",ipv6:"IPv6 address",cidrv4:"IPv4 range",cidrv6:"IPv6 range",base64:"base64-encoded string",base64url:"base64url-encoded string",json_string:"JSON string",e164:"E.164 number",jwt:"JWT",template_literal:"input"};return r=>{switch(r.code){case"invalid_type":return`Invalid input: expected ${r.expected}, received ${BE(r.input)}`;case"invalid_value":return r.values.length===1?`Invalid input: expected ${Ii(r.values[0])}`:`Invalid option: expected one of ${Ai(r.values,"|")}`;case"too_big":{let o=r.inclusive?"<=":"<",i=e(r.origin);return i?`Too big: expected ${r.origin??"value"} to have ${o}${r.maximum.toString()} ${i.unit??"elements"}`:`Too big: expected ${r.origin??"value"} to be ${o}${r.maximum.toString()}`}case"too_small":{let o=r.inclusive?">=":">",i=e(r.origin);return i?`Too small: expected ${r.origin} to have ${o}${r.minimum.toString()} ${i.unit}`:`Too small: expected ${r.origin} to be ${o}${r.minimum.toString()}`}case"invalid_format":{let o=r;return o.format==="starts_with"?`Invalid string: must start with "${o.prefix}"`:o.format==="ends_with"?`Invalid string: must end with "${o.suffix}"`:o.format==="includes"?`Invalid string: must include "${o.includes}"`:o.format==="regex"?`Invalid string: must match pattern ${o.pattern}`:`Invalid ${n[o.format]??r.format}`}case"not_multiple_of":return`Invalid number: must be a multiple of ${r.divisor}`;case"unrecognized_keys":return`Unrecognized key${r.keys.length>1?"s":""}: ${Ai(r.keys,", ")}`;case"invalid_key":return`Invalid key in ${r.origin}`;case"invalid_union":return"Invalid input";case"invalid_element":return`Invalid value in ${r.origin}`;default:return"Invalid input"}}};function Yn(){return{localeError:VE()}}var Tc=class{constructor(){this._map=new Map,this._idmap=new Map}add(e,...n){let r=n[0];if(this._map.set(e,r),r&&typeof r=="object"&&"id"in r){if(this._idmap.has(r.id))throw new Error(`ID ${r.id} already exists in the registry`);this._idmap.set(r.id,e)}return this}clear(){return this._map=new Map,this._idmap=new Map,this}remove(e){let n=this._map.get(e);return n&&typeof n=="object"&&"id"in n&&this._idmap.delete(n.id),this._map.delete(e),this}get(e){let n=e._zod.parent;if(n){let r={...this.get(n)??{}};return delete r.id,{...r,...this._map.get(e)}}return this._map.get(e)}has(e){return this._map.has(e)}};function tm(){return new Tc}var Xn=tm();function nm(t,e){return new t({type:"string",...G(e)})}function rm(t,e){return new t({type:"string",format:"email",check:"string_format",abort:!1,...G(e)})}function Ac(t,e){return new t({type:"string",format:"guid",check:"string_format",abort:!1,...G(e)})}function om(t,e){return new t({type:"string",format:"uuid",check:"string_format",abort:!1,...G(e)})}function im(t,e){return new t({type:"string",format:"uuid",check:"string_format",abort:!1,version:"v4",...G(e)})}function am(t,e){return new t({type:"string",format:"uuid",check:"string_format",abort:!1,version:"v6",...G(e)})}function sm(t,e){return new t({type:"string",format:"uuid",check:"string_format",abort:!1,version:"v7",...G(e)})}function lm(t,e){return new t({type:"string",format:"url",check:"string_format",abort:!1,...G(e)})}function cm(t,e){return new t({type:"string",format:"emoji",check:"string_format",abort:!1,...G(e)})}function um(t,e){return new t({type:"string",format:"nanoid",check:"string_format",abort:!1,...G(e)})}function dm(t,e){return new t({type:"string",format:"cuid",check:"string_format",abort:!1,...G(e)})}function pm(t,e){return new t({type:"string",format:"cuid2",check:"string_format",abort:!1,...G(e)})}function hm(t,e){return new t({type:"string",format:"ulid",check:"string_format",abort:!1,...G(e)})}function fm(t,e){return new t({type:"string",format:"xid",check:"string_format",abort:!1,...G(e)})}function mm(t,e){return new t({type:"string",format:"ksuid",check:"string_format",abort:!1,...G(e)})}function gm(t,e){return new t({type:"string",format:"ipv4",check:"string_format",abort:!1,...G(e)})}function vm(t,e){return new t({type:"string",format:"ipv6",check:"string_format",abort:!1,...G(e)})}function bm(t,e){return new t({type:"string",format:"cidrv4",check:"string_format",abort:!1,...G(e)})}function ym(t,e){return new t({type:"string",format:"cidrv6",check:"string_format",abort:!1,...G(e)})}function wm(t,e){return new t({type:"string",format:"base64",check:"string_format",abort:!1,...G(e)})}function Em(t,e){return new t({type:"string",format:"base64url",check:"string_format",abort:!1,...G(e)})}function xm(t,e){return new t({type:"string",format:"e164",check:"string_format",abort:!1,...G(e)})}function Sm(t,e){return new t({type:"string",format:"jwt",check:"string_format",abort:!1,...G(e)})}function _m(t,e){return new t({type:"string",format:"datetime",check:"string_format",offset:!1,local:!1,precision:null,...G(e)})}function Tm(t,e){return new t({type:"string",format:"date",check:"string_format",...G(e)})}function Am(t,e){return new t({type:"string",format:"time",check:"string_format",precision:null,...G(e)})}function km(t,e){return new t({type:"string",format:"duration",check:"string_format",...G(e)})}function Im(t,e){return new t({type:"number",check:"number_format",abort:!1,format:"safeint",...G(e)})}function Rm(t,e){return new t({type:"boolean",...G(e)})}function Cm(t){return new t({type:"any"})}function Nm(t){return new t({type:"unknown"})}function Om(t,e){return new t({type:"never",...G(e)})}function Mi(t,e){return new wc({check:"less_than",...G(e),value:t,inclusive:!1})}function zr(t,e){return new wc({check:"less_than",...G(e),value:t,inclusive:!0})}function zi(t,e){return new Ec({check:"greater_than",...G(e),value:t,inclusive:!1})}function Lr(t,e){return new Ec({check:"greater_than",...G(e),value:t,inclusive:!0})}function Li(t,e){return new $h({check:"multiple_of",...G(e),value:t})}function Di(t,e){return new Hh({check:"max_length",...G(e),maximum:t})}function Kn(t,e){return new Fh({check:"min_length",...G(e),minimum:t})}function $i(t,e){return new Gh({check:"length_equals",...G(e),length:t})}function kc(t,e){return new Zh({check:"string_format",format:"regex",...G(e),pattern:t})}function Ic(t){return new Bh({check:"string_format",format:"lowercase",...G(t)})}function Rc(t){return new Vh({check:"string_format",format:"uppercase",...G(t)})}function Cc(t,e){return new jh({check:"string_format",format:"includes",...G(e),includes:t})}function Nc(t,e){return new Wh({check:"string_format",format:"starts_with",...G(e),prefix:t})}function Oc(t,e){return new qh({check:"string_format",format:"ends_with",...G(e),suffix:t})}function sn(t){return new Yh({check:"overwrite",tx:t})}function Pc(t){return sn(e=>e.normalize(t))}function Mc(){return sn(t=>t.trim())}function zc(){return sn(t=>t.toLowerCase())}function Lc(){return sn(t=>t.toUpperCase())}function Pm(t,e,n){return new t({type:"array",element:e,...G(n)})}function Mm(t,e,n){let r=G(n);return r.abort??(r.abort=!0),new t({type:"custom",check:"custom",fn:e,...r})}function zm(t,e,n){return new t({type:"custom",check:"custom",fn:e,...G(n)})}var JE=I("ZodISODateTime",(t,e)=>{yf.init(t,e),ye.init(t,e)});function Lm(t){return _m(JE,t)}var QE=I("ZodISODate",(t,e)=>{wf.init(t,e),ye.init(t,e)});function Dm(t){return Tm(QE,t)}var ex=I("ZodISOTime",(t,e)=>{Ef.init(t,e),ye.init(t,e)});function $m(t){return Am(ex,t)}var tx=I("ZodISODuration",(t,e)=>{xf.init(t,e),ye.init(t,e)});function Um(t){return km(tx,t)}var Fm=(t,e)=>{Ri.init(t,e),t.name="ZodError",Object.defineProperties(t,{format:{value:n=>mc(t,n)},flatten:{value:n=>fc(t,n)},addIssue:{value:n=>t.issues.push(n)},addIssues:{value:n=>t.issues.push(...n)},isEmpty:{get(){return t.issues.length===0}}})},sP=I("ZodError",Fm),$r=I("ZodError",Fm,{Parent:Error});var Gm=ih($r),Zm=ah($r),Bm=gc($r),Vm=vc($r);var we=I("ZodType",(t,e)=>(ce.init(t,e),t.def=e,Object.defineProperty(t,"_def",{value:e}),t.check=(...n)=>t.clone({...e,checks:[...e.checks??[],...n.map(r=>typeof r=="function"?{_zod:{check:r,def:{check:"custom"},onattach:[]}}:r)]}),t.clone=(n,r)=>st(t,n,r),t.brand=()=>t,t.register=((n,r)=>(n.add(t,r),t)),t.parse=(n,r)=>Gm(t,n,r,{callee:t.parse}),t.safeParse=(n,r)=>Bm(t,n,r),t.parseAsync=async(n,r)=>Zm(t,n,r,{callee:t.parseAsync}),t.safeParseAsync=async(n,r)=>Vm(t,n,r),t.spa=t.safeParseAsync,t.refine=(n,r)=>t.check(Fx(n,r)),t.superRefine=n=>t.check(Gx(n)),t.overwrite=n=>t.check(sn(n)),t.optional=()=>Wm(t),t.nullable=()=>qm(t),t.nullish=()=>Wm(qm(t)),t.nonoptional=n=>Dx(t,n),t.array=()=>ke(t),t.or=n=>Ur([t,n]),t.and=n=>Nx(t,n),t.transform=n=>Ym(t,Px(n)),t.default=n=>Mx(t,n),t.prefault=n=>Lx(t,n),t.catch=n=>$x(t,n),t.pipe=n=>Ym(t,n),t.readonly=()=>Ux(t),t.describe=n=>{let r=t.clone();return Xn.add(r,{description:n}),r},Object.defineProperty(t,"description",{get(){return Xn.get(t)?.description},configurable:!0}),t.meta=(...n)=>{if(n.length===0)return Xn.get(t);let r=t.clone();return Xn.add(r,n[0]),r},t.isOptional=()=>t.safeParse(void 0).success,t.isNullable=()=>t.safeParse(null).success,t)),Xm=I("_ZodString",(t,e)=>{Pi.init(t,e),we.init(t,e);let n=t._zod.bag;t.format=n.format??null,t.minLength=n.minimum??null,t.maxLength=n.maximum??null,t.regex=(...r)=>t.check(kc(...r)),t.includes=(...r)=>t.check(Cc(...r)),t.startsWith=(...r)=>t.check(Nc(...r)),t.endsWith=(...r)=>t.check(Oc(...r)),t.min=(...r)=>t.check(Kn(...r)),t.max=(...r)=>t.check(Di(...r)),t.length=(...r)=>t.check($i(...r)),t.nonempty=(...r)=>t.check(Kn(1,...r)),t.lowercase=r=>t.check(Ic(r)),t.uppercase=r=>t.check(Rc(r)),t.trim=()=>t.check(Mc()),t.normalize=(...r)=>t.check(Pc(...r)),t.toLowerCase=()=>t.check(zc()),t.toUpperCase=()=>t.check(Lc())}),ox=I("ZodString",(t,e)=>{Pi.init(t,e),Xm.init(t,e),t.email=n=>t.check(rm(ix,n)),t.url=n=>t.check(lm(ax,n)),t.jwt=n=>t.check(Sm(Ex,n)),t.emoji=n=>t.check(cm(sx,n)),t.guid=n=>t.check(Ac(jm,n)),t.uuid=n=>t.check(om(Ui,n)),t.uuidv4=n=>t.check(im(Ui,n)),t.uuidv6=n=>t.check(am(Ui,n)),t.uuidv7=n=>t.check(sm(Ui,n)),t.nanoid=n=>t.check(um(lx,n)),t.guid=n=>t.check(Ac(jm,n)),t.cuid=n=>t.check(dm(cx,n)),t.cuid2=n=>t.check(pm(ux,n)),t.ulid=n=>t.check(hm(dx,n)),t.base64=n=>t.check(wm(bx,n)),t.base64url=n=>t.check(Em(yx,n)),t.xid=n=>t.check(fm(px,n)),t.ksuid=n=>t.check(mm(hx,n)),t.ipv4=n=>t.check(gm(fx,n)),t.ipv6=n=>t.check(vm(mx,n)),t.cidrv4=n=>t.check(bm(gx,n)),t.cidrv6=n=>t.check(ym(vx,n)),t.e164=n=>t.check(xm(wx,n)),t.datetime=n=>t.check(Lm(n)),t.date=n=>t.check(Dm(n)),t.time=n=>t.check($m(n)),t.duration=n=>t.check(Um(n))});function k(t){return nm(ox,t)}var ye=I("ZodStringFormat",(t,e)=>{fe.init(t,e),Xm.init(t,e)}),ix=I("ZodEmail",(t,e)=>{uf.init(t,e),ye.init(t,e)});var jm=I("ZodGUID",(t,e)=>{lf.init(t,e),ye.init(t,e)});var Ui=I("ZodUUID",(t,e)=>{cf.init(t,e),ye.init(t,e)});var ax=I("ZodURL",(t,e)=>{df.init(t,e),ye.init(t,e)});var sx=I("ZodEmoji",(t,e)=>{pf.init(t,e),ye.init(t,e)});var lx=I("ZodNanoID",(t,e)=>{hf.init(t,e),ye.init(t,e)});var cx=I("ZodCUID",(t,e)=>{ff.init(t,e),ye.init(t,e)});var ux=I("ZodCUID2",(t,e)=>{mf.init(t,e),ye.init(t,e)});var dx=I("ZodULID",(t,e)=>{gf.init(t,e),ye.init(t,e)});var px=I("ZodXID",(t,e)=>{vf.init(t,e),ye.init(t,e)});var hx=I("ZodKSUID",(t,e)=>{bf.init(t,e),ye.init(t,e)});var fx=I("ZodIPv4",(t,e)=>{Sf.init(t,e),ye.init(t,e)});var mx=I("ZodIPv6",(t,e)=>{_f.init(t,e),ye.init(t,e)});var gx=I("ZodCIDRv4",(t,e)=>{Tf.init(t,e),ye.init(t,e)});var vx=I("ZodCIDRv6",(t,e)=>{Af.init(t,e),ye.init(t,e)});var bx=I("ZodBase64",(t,e)=>{If.init(t,e),ye.init(t,e)});var yx=I("ZodBase64URL",(t,e)=>{Rf.init(t,e),ye.init(t,e)});var wx=I("ZodE164",(t,e)=>{Cf.init(t,e),ye.init(t,e)});var Ex=I("ZodJWT",(t,e)=>{Nf.init(t,e),ye.init(t,e)});var xx=I("ZodNumber",(t,e)=>{Sc.init(t,e),we.init(t,e),t.gt=(r,o)=>t.check(zi(r,o)),t.gte=(r,o)=>t.check(Lr(r,o)),t.min=(r,o)=>t.check(Lr(r,o)),t.lt=(r,o)=>t.check(Mi(r,o)),t.lte=(r,o)=>t.check(zr(r,o)),t.max=(r,o)=>t.check(zr(r,o)),t.int=r=>t.check(j(r)),t.safe=r=>t.check(j(r)),t.positive=r=>t.check(zi(0,r)),t.nonnegative=r=>t.check(Lr(0,r)),t.negative=r=>t.check(Mi(0,r)),t.nonpositive=r=>t.check(zr(0,r)),t.multipleOf=(r,o)=>t.check(Li(r,o)),t.step=(r,o)=>t.check(Li(r,o)),t.finite=()=>t;let n=t._zod.bag;t.minValue=Math.max(n.minimum??Number.NEGATIVE_INFINITY,n.exclusiveMinimum??Number.NEGATIVE_INFINITY)??null,t.maxValue=Math.min(n.maximum??Number.POSITIVE_INFINITY,n.exclusiveMaximum??Number.POSITIVE_INFINITY)??null,t.isInt=(n.format??"").includes("int")||Number.isSafeInteger(n.multipleOf??.5),t.isFinite=!0,t.format=n.format??null});var Sx=I("ZodNumberFormat",(t,e)=>{Of.init(t,e),xx.init(t,e)});function j(t){return Im(Sx,t)}var _x=I("ZodBoolean",(t,e)=>{Pf.init(t,e),we.init(t,e)});function J(t){return Rm(_x,t)}var Tx=I("ZodAny",(t,e)=>{Mf.init(t,e),we.init(t,e)});function Z(){return Cm(Tx)}var Ax=I("ZodUnknown",(t,e)=>{zf.init(t,e),we.init(t,e)});function Dc(){return Nm(Ax)}var kx=I("ZodNever",(t,e)=>{Lf.init(t,e),we.init(t,e)});function Ix(t){return Om(kx,t)}var Hi=I("ZodArray",(t,e)=>{Df.init(t,e),we.init(t,e),t.element=e.element,t.min=(n,r)=>t.check(Kn(n,r)),t.nonempty=n=>t.check(Kn(1,n)),t.max=(n,r)=>t.check(Di(n,r)),t.length=(n,r)=>t.check($i(n,r)),t.unwrap=()=>t.element});function ke(t,e){return Pm(Hi,t,e)}var Jn=I("ZodObject",(t,e)=>{$f.init(t,e),we.init(t,e),ae.defineLazy(t,"shape",()=>e.shape),t.keyof=()=>ln(Object.keys(t._zod.def.shape)),t.catchall=n=>t.clone({...t._zod.def,catchall:n}),t.passthrough=()=>t.clone({...t._zod.def,catchall:Dc()}),t.loose=()=>t.clone({...t._zod.def,catchall:Dc()}),t.strict=()=>t.clone({...t._zod.def,catchall:Ix()}),t.strip=()=>t.clone({...t._zod.def,catchall:void 0}),t.extend=n=>ae.extend(t,n),t.merge=n=>ae.merge(t,n),t.pick=n=>ae.pick(t,n),t.omit=n=>ae.omit(t,n),t.partial=(...n)=>ae.partial(Gi,t,n[0]),t.required=(...n)=>ae.required(Jm,t,n[0])});function L(t,e){return new Jn({type:"object",get shape(){return ae.assignProp(this,"shape",{...t}),this.shape},catchall:Dc(),...ae.normalizeParams(e)})}var Fi=I("ZodUnion",(t,e)=>{_c.init(t,e),we.init(t,e),t.options=e.options});function Ur(t,e){return new Fi({type:"union",options:t,...ae.normalizeParams(e)})}var Rx=I("ZodDiscriminatedUnion",(t,e)=>{Fi.init(t,e),Uf.init(t,e)});function Mt(t,e,n){return new Rx({type:"union",options:e,discriminator:t,...ae.normalizeParams(n)})}var Cx=I("ZodIntersection",(t,e)=>{Hf.init(t,e),we.init(t,e)});function Nx(t,e){return new Cx({type:"intersection",left:t,right:e})}var Km=I("ZodRecord",(t,e)=>{Ff.init(t,e),we.init(t,e),t.keyType=e.keyType,t.valueType=e.valueType});var $c=I("ZodEnum",(t,e)=>{Gf.init(t,e),we.init(t,e),t.enum=e.entries,t.options=Object.values(e.entries);let n=new Set(Object.keys(e.entries));t.extract=(r,o)=>{let i={};for(let a of r)if(n.has(a))i[a]=e.entries[a];else throw new Error(`Key ${a} not found in enum`);return new $c({...e,checks:[],...ae.normalizeParams(o),entries:i})},t.exclude=(r,o)=>{let i={...e.entries};for(let a of r)if(n.has(a))delete i[a];else throw new Error(`Key ${a} not found in enum`);return new $c({...e,checks:[],...ae.normalizeParams(o),entries:i})}});function ln(t,e){let n=Array.isArray(t)?Object.fromEntries(t.map(r=>[r,r])):t;return new $c({type:"enum",entries:n,...ae.normalizeParams(e)})}var Uc=I("ZodLiteral",(t,e)=>{Zf.init(t,e),we.init(t,e),t.values=new Set(e.values),Object.defineProperty(t,"value",{get(){if(e.values.length>1)throw new Error("This schema contains multiple valid literal values. Use `.values` instead.");return e.values[0]}})});function $(t,e){return new Uc({type:"literal",values:Array.isArray(t)?t:[t],...ae.normalizeParams(e)})}var Ox=I("ZodTransform",(t,e)=>{Bf.init(t,e),we.init(t,e),t._zod.parse=(n,r)=>{n.addIssue=i=>{if(typeof i=="string")n.issues.push(ae.issue(i,n.value,e));else{let a=i;a.fatal&&(a.continue=!1),a.code??(a.code="custom"),a.input??(a.input=n.value),a.inst??(a.inst=t),a.continue??(a.continue=!0),n.issues.push(ae.issue(a))}};let o=e.transform(n.value,n);return o instanceof Promise?o.then(i=>(n.value=i,n)):(n.value=o,n)}});function Px(t){return new Ox({type:"transform",transform:t})}var Gi=I("ZodOptional",(t,e)=>{Vf.init(t,e),we.init(t,e),t.unwrap=()=>t._zod.def.innerType});function Wm(t){return new Gi({type:"optional",innerType:t})}var Hc=I("ZodNullable",(t,e)=>{jf.init(t,e),we.init(t,e),t.unwrap=()=>t._zod.def.innerType});function qm(t){return new Hc({type:"nullable",innerType:t})}var Fc=I("ZodDefault",(t,e)=>{Wf.init(t,e),we.init(t,e),t.unwrap=()=>t._zod.def.innerType,t.removeDefault=t.unwrap});function Mx(t,e){return new Fc({type:"default",innerType:t,get defaultValue(){return typeof e=="function"?e():e}})}var zx=I("ZodPrefault",(t,e)=>{qf.init(t,e),we.init(t,e),t.unwrap=()=>t._zod.def.innerType});function Lx(t,e){return new zx({type:"prefault",innerType:t,get defaultValue(){return typeof e=="function"?e():e}})}var Jm=I("ZodNonOptional",(t,e)=>{Yf.init(t,e),we.init(t,e),t.unwrap=()=>t._zod.def.innerType});function Dx(t,e){return new Jm({type:"nonoptional",innerType:t,...ae.normalizeParams(e)})}var Gc=I("ZodCatch",(t,e)=>{Xf.init(t,e),we.init(t,e),t.unwrap=()=>t._zod.def.innerType,t.removeCatch=t.unwrap});function $x(t,e){return new Gc({type:"catch",innerType:t,catchValue:typeof e=="function"?e:()=>e})}var Zc=I("ZodPipe",(t,e)=>{Kf.init(t,e),we.init(t,e),t.in=e.in,t.out=e.out});function Ym(t,e){return new Zc({type:"pipe",in:t,out:e})}var Bc=I("ZodReadonly",(t,e)=>{Jf.init(t,e),we.init(t,e)});function Ux(t){return new Bc({type:"readonly",innerType:t})}var Qm=I("ZodLazy",(t,e)=>{Qf.init(t,e),we.init(t,e),t.unwrap=()=>t._zod.def.getter()});var eg=I("ZodCustom",(t,e)=>{em.init(t,e),we.init(t,e)});function Hx(t){let e=new $e({check:"custom"});return e._zod.check=t,e}function Qn(t,e){return Mm(eg,t??(()=>!0),e)}function Fx(t,e={}){return zm(eg,t,e)}function Gx(t){let e=Hx(n=>(n.addIssue=r=>{if(typeof r=="string")n.issues.push(ae.issue(r,n.value,e._zod.def));else{let o=r;o.fatal&&(o.continue=!1),o.code??(o.code="custom"),o.input??(o.input=n.value),o.inst??(o.inst=e),o.continue??(o.continue=!e._zod.def.abort),n.issues.push(ae.issue(o))}},t(n.value,n)));return e}ze(Yn());var Bx=ln(v),B=Qn(t=>typeof t=="object"&&t!==null&&!Array.isArray(t)),X=k(),tg=ln(["developer","system","assistant","user"]),Vx=L({type:$(v.TEXT_MESSAGE_START),timestamp:j().min(-9007199254740991).max(9007199254740991).optional(),rawEvent:Z().refine(t=>t!==null).optional(),metadata:B.optional(),subagentRunId:X.optional(),messageId:k(),role:tg.optional(),name:k().optional()}),jx=L({type:$(v.TEXT_MESSAGE_CONTENT),timestamp:j().min(-9007199254740991).max(9007199254740991).optional(),rawEvent:Z().refine(t=>t!==null).optional(),metadata:B.optional(),subagentRunId:X.optional(),messageId:k(),delta:k()}),Wx=L({type:$(v.TEXT_MESSAGE_END),timestamp:j().min(-9007199254740991).max(9007199254740991).optional(),rawEvent:Z().refine(t=>t!==null).optional(),metadata:B.optional(),subagentRunId:X.optional(),messageId:k()}),Vc=L({type:$(v.TEXT_MESSAGE_CHUNK),timestamp:j().min(-9007199254740991).max(9007199254740991).optional(),rawEvent:Z().refine(t=>t!==null).optional(),metadata:B.optional(),subagentRunId:X.optional(),messageId:k().optional(),role:tg.optional(),delta:k().optional(),name:k().optional()}),qx=L({type:$(v.TOOL_CALL_START),timestamp:j().min(-9007199254740991).max(9007199254740991).optional(),rawEvent:Z().refine(t=>t!==null).optional(),metadata:B.optional(),subagentRunId:X.optional(),toolCallId:k(),toolCallName:k(),parentMessageId:k().optional()}),Yx=L({type:$(v.TOOL_CALL_ARGS),timestamp:j().min(-9007199254740991).max(9007199254740991).optional(),rawEvent:Z().refine(t=>t!==null).optional(),metadata:B.optional(),subagentRunId:X.optional(),toolCallId:k(),delta:k()}),Xx=L({type:$(v.TOOL_CALL_END),timestamp:j().min(-9007199254740991).max(9007199254740991).optional(),rawEvent:Z().refine(t=>t!==null).optional(),metadata:B.optional(),subagentRunId:X.optional(),toolCallId:k()}),jc=L({type:$(v.TOOL_CALL_CHUNK),timestamp:j().min(-9007199254740991).max(9007199254740991).optional(),rawEvent:Z().refine(t=>t!==null).optional(),metadata:B.optional(),subagentRunId:X.optional(),toolCallId:k().optional(),toolCallName:k().optional(),parentMessageId:k().optional(),delta:k().optional()}),Kx=L({type:$("text"),id:k().optional(),text:k(),metadata:Z().refine(t=>t!==null).optional()}),Jx=L({type:$("data"),value:k(),mimeType:k()}),Qx=L({type:$("url"),value:k(),mimeType:k().optional()}),eS=L({type:$("file"),value:k(),provider:k().optional(),mimeType:k().optional()}),Zi=Mt("type",[Jx,Qx,eS]),tS=L({type:$("image"),id:k().optional(),source:Zi,metadata:Z().refine(t=>t!==null).optional()}),nS=L({type:$("audio"),id:k().optional(),source:Zi,metadata:Z().refine(t=>t!==null).optional()}),rS=L({type:$("video"),id:k().optional(),source:Zi,metadata:Z().refine(t=>t!==null).optional()}),oS=L({type:$("document"),id:k().optional(),source:Zi,metadata:Z().refine(t=>t!==null).optional()}),Wc=Mt("type",[Kx,tS,nS,rS,oS]),iS=L({type:$(v.TOOL_CALL_RESULT),timestamp:j().min(-9007199254740991).max(9007199254740991).optional(),rawEvent:Z().refine(t=>t!==null).optional(),metadata:B.optional(),subagentRunId:X.optional(),messageId:k(),toolCallId:k(),content:Ur([k(),ke(Wc)]),role:$("tool").optional()}),ng=Z(),aS=L({type:$(v.STATE_SNAPSHOT),timestamp:j().min(-9007199254740991).max(9007199254740991).optional(),rawEvent:Z().refine(t=>t!==null).optional(),metadata:B.optional(),subagentRunId:X.optional(),snapshot:ng.refine(t=>t!==void 0)}),zt=k().regex(new RegExp("^(/([^/~]|~[01])*)*$")),sS=L({op:$("add"),path:zt,value:Z().refine(t=>t!==void 0)}).meta({specOpen:!0}),lS=L({op:$("remove"),path:zt}).meta({specOpen:!0}),cS=L({op:$("replace"),path:zt,value:Z().refine(t=>t!==void 0)}).meta({specOpen:!0}),uS=L({op:$("move"),from:zt,path:zt}).meta({specOpen:!0}),dS=L({op:$("copy"),from:zt,path:zt}).meta({specOpen:!0}),pS=L({op:$("test"),path:zt,value:Z().refine(t=>t!==void 0)}).meta({specOpen:!0}),hS=Mt("op",[sS,lS,cS,uS,dS,pS]),rg=ke(hS),fS=L({type:$(v.STATE_DELTA),timestamp:j().min(-9007199254740991).max(9007199254740991).optional(),rawEvent:Z().refine(t=>t!==null).optional(),metadata:B.optional(),subagentRunId:X.optional(),delta:rg}),mS=L({subagentRunId:X.optional(),id:k(),role:$("developer"),name:k().optional(),encryptedValue:k().optional(),metadata:B.optional(),content:k()}),gS=L({subagentRunId:X.optional(),id:k(),role:$("system"),name:k().optional(),encryptedValue:k().optional(),metadata:B.optional(),content:k()}),vS=L({name:k(),arguments:k()}),bS=L({id:k(),type:$("function"),function:vS,encryptedValue:k().optional(),metadata:B.optional()}),yS=L({subagentRunId:X.optional(),id:k(),role:$("assistant"),name:k().optional(),encryptedValue:k().optional(),metadata:B.optional(),content:k().optional(),toolCalls:ke(bS).optional()}),wS=L({subagentRunId:X.optional(),id:k(),role:$("user"),name:k().optional(),encryptedValue:k().optional(),metadata:B.optional(),content:Ur([k(),ke(Wc)])}),ES=L({subagentRunId:X.optional(),id:k(),role:$("tool"),content:Ur([k(),ke(Wc)]),toolCallId:k(),error:k().optional(),encryptedValue:k().optional(),metadata:B.optional()}),xS=L({subagentRunId:X.optional(),id:k(),role:$("activity"),activityType:k(),content:Qn(t=>typeof t=="object"&&t!==null&&!Array.isArray(t)),metadata:B.optional()}),SS=L({subagentRunId:X.optional(),id:k(),role:$("reasoning"),content:k(),encryptedValue:k().optional(),metadata:B.optional()}),og=Mt("role",[mS,gS,yS,wS,ES,xS,SS]),_S=L({type:$(v.MESSAGES_SNAPSHOT),timestamp:j().min(-9007199254740991).max(9007199254740991).optional(),rawEvent:Z().refine(t=>t!==null).optional(),metadata:B.optional(),messages:ke(og)}),TS=L({type:$(v.ACTIVITY_SNAPSHOT),timestamp:j().min(-9007199254740991).max(9007199254740991).optional(),rawEvent:Z().refine(t=>t!==null).optional(),metadata:B.optional(),subagentRunId:X.optional(),messageId:k(),activityType:k(),content:Qn(t=>typeof t=="object"&&t!==null&&!Array.isArray(t)),replace:J().optional()}),AS=L({type:$(v.ACTIVITY_DELTA),timestamp:j().min(-9007199254740991).max(9007199254740991).optional(),rawEvent:Z().refine(t=>t!==null).optional(),metadata:B.optional(),subagentRunId:X.optional(),messageId:k(),activityType:k(),patch:rg}),kS=L({type:$(v.RAW),timestamp:j().min(-9007199254740991).max(9007199254740991).optional(),rawEvent:Z().refine(t=>t!==null).optional(),metadata:B.optional(),subagentRunId:X.optional(),event:Z().refine(t=>t!==void 0),source:k().optional()}),IS=L({type:$(v.CUSTOM),timestamp:j().min(-9007199254740991).max(9007199254740991).optional(),rawEvent:Z().refine(t=>t!==null).optional(),metadata:B.optional(),subagentRunId:X.optional(),name:k(),value:Z().refine(t=>t!==void 0)}),ig=L({name:k(),description:k(),parameters:Z().refine(t=>t!==null).optional(),metadata:B.optional()}),RS=L({description:k(),value:k()}),CS=L({interruptId:k(),status:ln(["resolved","cancelled"]),payload:Z().refine(t=>t!==null).optional(),metadata:B.optional()}),Bi=L({threadId:k(),runId:k(),protocolVersion:k().optional(),parentRunId:k().optional(),state:ng.refine(t=>t!==null).nullable().transform(t=>t??void 0).optional(),messages:ke(og),tools:ke(ig).default(()=>[]),context:ke(RS).default(()=>[]),forwardedProps:Z().refine(t=>t!==null).optional(),resume:ke(CS).optional()}),NS=L({type:$(v.RUN_STARTED),timestamp:j().min(-9007199254740991).max(9007199254740991).optional(),rawEvent:Z().refine(t=>t!==null).optional(),metadata:B.optional(),threadId:k(),runId:k(),protocolVersion:k().optional(),parentRunId:k().optional(),input:Bi.optional()}),OS=L({type:$("success"),pendingToolCallIds:ke(k()).optional()}),PS=L({subagentRunId:X.optional(),id:k(),reason:k(),message:k().optional(),toolCallId:k().optional(),responseSchema:Qn(t=>typeof t=="object"&&t!==null&&!Array.isArray(t)).optional(),expiresAt:k().optional(),metadata:B.optional()}),MS=L({type:$("interrupt"),interrupts:ke(PS).min(1)}),zS=L({type:$("cancelled")}),LS=Mt("type",[OS,MS,zS]),ag=L({provider:k().optional(),model:k().optional(),inputTokens:j().min(0).max(9007199254740991).optional(),outputTokens:j().min(0).max(9007199254740991).optional(),totalTokens:j().min(0).max(9007199254740991).optional(),reasoningTokens:j().min(0).max(9007199254740991).optional(),cachedInputTokens:j().min(0).max(9007199254740991).optional(),cacheWriteInputTokens:j().min(0).max(9007199254740991).optional()}),DS=L({type:$(v.RUN_FINISHED),timestamp:j().min(-9007199254740991).max(9007199254740991).optional(),rawEvent:Z().refine(t=>t!==null).optional(),metadata:B.optional(),threadId:k(),runId:k(),result:Z().refine(t=>t!==null).optional(),outcome:LS.optional(),usage:ke(ag).optional()}),$S=L({type:$(v.RUN_ERROR),timestamp:j().min(-9007199254740991).max(9007199254740991).optional(),rawEvent:Z().refine(t=>t!==null).optional(),metadata:B.optional(),message:k(),code:k().optional(),usage:ke(ag).optional()}),US=L({type:$(v.STEP_STARTED),timestamp:j().min(-9007199254740991).max(9007199254740991).optional(),rawEvent:Z().refine(t=>t!==null).optional(),metadata:B.optional(),subagentRunId:X.optional(),stepName:k()}),HS=L({type:$(v.STEP_FINISHED),timestamp:j().min(-9007199254740991).max(9007199254740991).optional(),rawEvent:Z().refine(t=>t!==null).optional(),metadata:B.optional(),subagentRunId:X.optional(),stepName:k()}),FS=L({type:$(v.REASONING_START),timestamp:j().min(-9007199254740991).max(9007199254740991).optional(),rawEvent:Z().refine(t=>t!==null).optional(),metadata:B.optional(),subagentRunId:X.optional(),messageId:k()}),GS=L({type:$(v.REASONING_MESSAGE_START),timestamp:j().min(-9007199254740991).max(9007199254740991).optional(),rawEvent:Z().refine(t=>t!==null).optional(),metadata:B.optional(),subagentRunId:X.optional(),messageId:k(),role:$("reasoning")}),ZS=L({type:$(v.REASONING_MESSAGE_CONTENT),timestamp:j().min(-9007199254740991).max(9007199254740991).optional(),rawEvent:Z().refine(t=>t!==null).optional(),metadata:B.optional(),subagentRunId:X.optional(),messageId:k(),delta:k()}),BS=L({type:$(v.REASONING_MESSAGE_END),timestamp:j().min(-9007199254740991).max(9007199254740991).optional(),rawEvent:Z().refine(t=>t!==null).optional(),metadata:B.optional(),subagentRunId:X.optional(),messageId:k()}),qc=L({type:$(v.REASONING_MESSAGE_CHUNK),timestamp:j().min(-9007199254740991).max(9007199254740991).optional(),rawEvent:Z().refine(t=>t!==null).optional(),metadata:B.optional(),subagentRunId:X.optional(),messageId:k().optional(),delta:k().optional()}),VS=L({type:$(v.REASONING_END),timestamp:j().min(-9007199254740991).max(9007199254740991).optional(),rawEvent:Z().refine(t=>t!==null).optional(),metadata:B.optional(),subagentRunId:X.optional(),messageId:k()}),jS=ln(["tool-call","message"]),WS=L({type:$(v.REASONING_ENCRYPTED_VALUE),timestamp:j().min(-9007199254740991).max(9007199254740991).optional(),rawEvent:Z().refine(t=>t!==null).optional(),metadata:B.optional(),subagentRunId:X.optional(),subtype:jS,entityId:k(),encryptedValue:k()}),qS=L({type:$(v.SUBAGENT_STARTED),timestamp:j().min(-9007199254740991).max(9007199254740991).optional(),rawEvent:Z().refine(t=>t!==null).optional(),metadata:B.optional(),subagentRunId:X,name:k(),description:k().optional(),parentSubagentRunId:X.optional(),parentToolCallId:k().optional(),parentMessageId:k().optional()}),YS=L({type:$("success")}),XS=L({type:$("suspended"),interruptIds:ke(k()).optional()}),KS=Mt("type",[YS,XS]),JS=L({type:$(v.SUBAGENT_FINISHED),timestamp:j().min(-9007199254740991).max(9007199254740991).optional(),rawEvent:Z().refine(t=>t!==null).optional(),metadata:B.optional(),subagentRunId:X,result:Z().refine(t=>t!==null).optional(),outcome:KS.optional()}),QS=L({type:$(v.SUBAGENT_ERROR),timestamp:j().min(-9007199254740991).max(9007199254740991).optional(),rawEvent:Z().refine(t=>t!==null).optional(),metadata:B.optional(),subagentRunId:X,message:k(),code:k().optional()}),Yc=Mt("type",[Vx,jx,Wx,Vc,qx,Yx,Xx,jc,iS,aS,fS,_S,TS,AS,kS,IS,NS,DS,$S,US,HS,FS,GS,ZS,BS,qc,VS,WS,qS,JS,QS]),cM=ln(["developer","system","assistant","user","tool","activity","reasoning"]),e0=L({name:k(),description:k().optional()}),t0=L({name:k().optional(),type:k().optional(),description:k().optional(),version:k().optional(),provider:k().optional(),documentationUrl:k().optional(),metadata:B.optional()}),n0=L({streaming:J().optional(),websocket:J().optional(),httpBinary:J().optional(),pushNotifications:J().optional(),resumable:J().optional()}),r0=L({supported:J().optional(),items:ke(ig).optional(),parallelCalls:J().optional(),clientProvided:J().optional()}),o0=L({structuredOutput:J().optional(),supportedMimeTypes:ke(k()).optional()}),i0=L({snapshots:J().optional(),deltas:J().optional(),memory:J().optional(),persistentState:J().optional()}),a0=L({supported:J().optional(),delegation:J().optional(),handoffs:J().optional(),subagents:ke(e0).optional()}),s0=L({supported:J().optional(),streaming:J().optional(),encrypted:J().optional()}),l0=L({image:J().optional(),audio:J().optional(),video:J().optional(),pdf:J().optional(),file:J().optional()}),c0=L({image:J().optional(),audio:J().optional()}),u0=L({input:l0.optional(),output:c0.optional()}),d0=L({codeExecution:J().optional(),sandboxed:J().optional(),maxIterations:j().min(0).max(9007199254740991).optional(),maxExecutionTime:j().min(0).max(9007199254740991).optional()}),p0=L({supported:J().optional(),approvals:J().optional(),interventions:J().optional(),feedback:J().optional(),interrupts:J().optional(),approveWithEdits:J().optional()}),uM=L({identity:t0.optional(),transport:n0.optional(),tools:r0.optional(),output:o0.optional(),state:i0.optional(),multiAgent:a0.optional(),reasoning:s0.optional(),multimodal:u0.optional(),execution:d0.optional(),humanInTheLoop:p0.optional(),custom:Qn(t=>typeof t=="object"&&t!==null&&!Array.isArray(t)).optional()}),dM=L({subagentRunId:X.optional()}),pM=L({type:Bx,timestamp:j().min(-9007199254740991).max(9007199254740991).optional(),rawEvent:Z().refine(t=>t!==null).optional(),metadata:B.optional()}),hM=L({subagentRunId:X.optional(),id:k(),role:k(),name:k().optional(),encryptedValue:k().optional(),metadata:B.optional()}),fM=B.optional();ze(Yn());function lg(){let t=this.buf,e=this.pos,n=0,r=0;for(let i=0;i<28;i+=7){let a=t[e++];if(n|=(a&127)<<i,(a&128)==0){this.pos=e,this.assertBounds(),this.varint64Lo=n,this.varint64Hi=r;return}}let o=t[e++];if(n|=(o&15)<<28,r=(o&112)>>4,(o&128)==0){this.pos=e,this.assertBounds(),this.varint64Lo=n,this.varint64Hi=r;return}for(let i=3;i<=31;i+=7){let a=t[e++];if(r|=(a&127)<<i,(a&128)==0){this.pos=e,this.assertBounds(),this.varint64Lo=n,this.varint64Hi=r;return}}throw new Error("invalid varint")}var Vi=4294967296;function Xc(t){let e=t[0]==="-";e&&(t=t.slice(1));let n=1e6,r=0,o=0;function i(a,s){let l=Number(t.slice(a,s));o*=n,r=r*n+l,r>=Vi&&(o=o+(r/Vi|0),r=r%Vi)}return i(-24,-18),i(-18,-12),i(-12,-6),i(-6),e?ug(r,o):Jc(r,o)}function cg(t,e){let n=Jc(t,e),r=n.hi&2147483648;r&&(n=ug(n.lo,n.hi));let o=Kc(n.lo,n.hi);return r?"-"+o:o}function Kc(t,e){if({lo:t,hi:e}=h0(t,e),e<=2097151)return String(Vi*e+t);let n=t&16777215,r=(t>>>24|e<<8)&16777215,o=e>>16&65535,i=n+r*6777216+o*6710656,a=r+o*8147497,s=o*2,l=1e7;return i>=l&&(a+=Math.floor(i/l),i%=l),a>=l&&(s+=Math.floor(a/l),a%=l),s.toString()+sg(a)+sg(i)}function h0(t,e){return{lo:t>>>0,hi:e>>>0}}function Jc(t,e){return{lo:t|0,hi:e|0}}function ug(t,e){return e=~e,t?t=~t+1:e+=1,Jc(t,e)}var sg=t=>{let e=String(t);return"0000000".slice(e.length)+e};function dg(){let t=this.buf[this.pos++];if((t&128)===0)return this.assertBounds(),t;let e=t&127;if(t=this.buf[this.pos++],e|=(t&127)<<7,(t&128)===0)return this.assertBounds(),e;if(t=this.buf[this.pos++],e|=(t&127)<<14,(t&128)===0)return this.assertBounds(),e;if(t=this.buf[this.pos++],e|=(t&127)<<21,(t&128)===0)return this.assertBounds(),e;t=this.buf[this.pos++],e|=(t&15)<<28;for(let n=5;(t&128)!==0&&n<10;n++)t=this.buf[this.pos++];if((t&128)!==0)throw new Error("invalid varint");return this.assertBounds(),e>>>0}var ct=f0();function f0(){let t=new DataView(new ArrayBuffer(8));if(typeof BigInt=="function"&&typeof t.getBigInt64=="function"&&typeof t.getBigUint64=="function"&&typeof t.setBigInt64=="function"&&typeof t.setBigUint64=="function"&&(!!globalThis.Deno||!!globalThis.Bun||typeof process!="object"||typeof process.env!="object"||process.env.BUF_BIGINT_DISABLE!=="1")){let n=BigInt("-9223372036854775808"),r=BigInt("9223372036854775807"),o=BigInt("0"),i=BigInt("18446744073709551615");return{zero:BigInt(0),supported:!0,parse(a){let s=typeof a=="bigint"?a:BigInt(a);if(s>r||s<n)throw new Error(`invalid int64: ${a}`);return s},uParse(a){let s=typeof a=="bigint"?a:BigInt(a);if(s>i||s<o)throw new Error(`invalid uint64: ${a}`);return s},enc(a){return t.setBigInt64(0,this.parse(a),!0),{lo:t.getInt32(0,!0),hi:t.getInt32(4,!0)}},uEnc(a){return t.setBigInt64(0,this.uParse(a),!0),{lo:t.getInt32(0,!0),hi:t.getInt32(4,!0)}},dec(a,s){return t.setInt32(0,a,!0),t.setInt32(4,s,!0),t.getBigInt64(0,!0)},uDec(a,s){return t.setInt32(0,a,!0),t.setInt32(4,s,!0),t.getBigUint64(0,!0)}}}return{zero:"0",supported:!1,parse(n){return typeof n!="string"&&(n=n.toString()),pg(n),n},uParse(n){return typeof n!="string"&&(n=n.toString()),hg(n),n},enc(n){return typeof n!="string"&&(n=n.toString()),pg(n),Xc(n)},uEnc(n){return typeof n!="string"&&(n=n.toString()),hg(n),Xc(n)},dec(n,r){return cg(n,r)},uDec(n,r){return Kc(n,r)}}}function pg(t){if(!/^-?[0-9]+$/.test(t))throw new Error("invalid int64: "+t)}function hg(t){if(!/^[0-9]+$/.test(t))throw new Error("invalid uint64: "+t)}var Qc;function m0(t){var e;Qc=Object.assign(Object.assign({},t),{encodeUtf8Into:(e=t.encodeUtf8Into)!==null&&e!==void 0?e:tu(t.encodeUtf8.bind(t))})}function eu(){if(!Qc){let t=globalThis;if(!t.TextEncoder||!t.TextDecoder)throw new Error("encoding API missing: install TextEncoder and TextDecoder on globalThis");let e=new t.TextEncoder,n=new t.TextDecoder,r,o={encodeUtf8(a){return e.encode(a)},decodeUtf8(a,s){return s?(r||(r=new t.TextDecoder("utf-8",{fatal:!0})),r.decode(a)):n.decode(a)},checkUtf8(a){try{return encodeURIComponent(a),!0}catch{return!1}}};e.encodeInto&&(o.encodeUtf8Into=e.encodeInto.bind(e));let i=String.prototype.isWellFormed;i&&(o.checkUtf8=a=>i.call(a)),m0(o)}return Qc}function tu(t){return(e,n)=>{let r=t(e);return n.set(r),{written:r.byteLength}}}var Lt;(function(t){t[t.Varint=0]="Varint",t[t.Bit64=1]="Bit64",t[t.LengthDelimited=2]="LengthDelimited",t[t.StartGroup=3]="StartGroup",t[t.EndGroup=4]="EndGroup",t[t.Bit32=5]="Bit32"})(Lt||(Lt={}));var g0=4294967295,v0=2147483647,b0=-2147483648,U=class{constructor(e){this.stackPos=[],this.encodeUtf8Into=e?tu(e):eu().encodeUtf8Into,this.buffer=mg,this.viewCache=w0,this.pos=0}ensureCapacity(e){let n=this.pos+e;if(n>this.buffer.length){let r=this.buffer.length||y0;for(;r<n;)r*=2;let o=new Uint8Array(r);this.pos>0&&o.set(this.buffer),this.buffer=o}}view(){let e=this.buffer,n=this.viewCache;if(n.byteLength===e.byteLength)return n;let r=new DataView(e.buffer);return this.viewCache=r,r}finish(){let e=this.buffer.slice(0,this.pos);return this.pos=0,this.stackPos=[],e}fork(){return this.stackPos.push(this.pos),this.ensureCapacity(Hr),this.buffer[this.pos++]=0,this}join(){let e=this.stackPos.pop();if(e===void 0)throw new Error("invalid state, fork stack empty");let n=this.pos-e-Hr,r=nu(n);return r>Hr&&(this.ensureCapacity(r-Hr),this.buffer.copyWithin(e+r,e+Hr,this.pos)),this.pos=e,this.uint32(n),this.pos+=n,this}tag(e,n){return this.uint32((e<<3|n)>>>0)}raw(e){return this.ensureCapacity(e.length),this.buffer.set(e,this.pos),this.pos+=e.length,this}uint32(e){if(fg(e),this.ensureCapacity(5),e<128)return this.buffer[this.pos++]=e,this;for(;e>127;)this.buffer[this.pos++]=e&127|128,e>>>=7;return this.buffer[this.pos++]=e,this}int32(e){if(ru(e),e>=0)return this.uint32(e);this.ensureCapacity(10);for(let n=0;n<9;n++)this.buffer[this.pos++]=e&127|128,e>>=7;return this.buffer[this.pos++]=1,this}bool(e){return this.ensureCapacity(1),this.buffer[this.pos++]=e?1:0,this}bytes(e){return this.uint32(e.byteLength),this.raw(e)}string(e){typeof e!="string"&&(e=String(e));let n=e.length;if(n<=gg){this.ensureCapacity(n+1);let l=this.buffer,c=this.pos;l[c++]=n;let u=0;for(;u<n;u++){let h=e.charCodeAt(u);if(h>127)break;l[c++]=h}if(u==n)return this.pos=c,this}this.ensureCapacity(n*3+5);let r=nu(n),o=this.buffer,i=this.pos,{written:a}=this.encodeUtf8Into(e,o.subarray(i+r)),s=nu(a);return s!=r&&o.copyWithin(i+s,i+r,i+r+a),this.uint32(a),this.pos+=a,this}float(e){return E0(e),this.ensureCapacity(4),this.view().setFloat32(this.pos,e,!0),this.pos+=4,this}double(e){return this.ensureCapacity(8),this.view().setFloat64(this.pos,e,!0),this.pos+=8,this}fixed32(e){return fg(e),this.ensureCapacity(4),this.view().setUint32(this.pos,e,!0),this.pos+=4,this}sfixed32(e){return ru(e),this.ensureCapacity(4),this.view().setInt32(this.pos,e,!0),this.pos+=4,this}sint32(e){return ru(e),this.uint32((e<<1^e>>31)>>>0)}sfixed64(e){let n=ct.enc(e);this.ensureCapacity(8);let r=this.view();return r.setInt32(this.pos,n.lo,!0),r.setInt32(this.pos+4,n.hi,!0),this.pos+=8,this}fixed64(e){let n=ct.uEnc(e);this.ensureCapacity(8);let r=this.view();return r.setInt32(this.pos,n.lo,!0),r.setInt32(this.pos+4,n.hi,!0),this.pos+=8,this}int64(e){let n=ct.enc(e);return this.writeVarint64(n.lo,n.hi)}sint64(e){let n=ct.enc(e),r=n.hi>>31,o=n.lo<<1^r,i=(n.hi<<1|n.lo>>>31)^r;return this.writeVarint64(o,i)}uint64(e){let n=ct.uEnc(e);return this.writeVarint64(n.lo,n.hi)}writeVarint64(e,n){this.ensureCapacity(10);let r=this.buffer,o=this.pos;for(let s=0;s<28;s=s+7){let l=e>>>s,c=!(!(l>>>7)&&n==0);if(r[o++]=(c?l|128:l)&255,!c)return this.pos=o,this}let i=e>>>28&15|(n&7)<<4,a=n>>3!=0;if(r[o++]=(a?i|128:i)&255,!a)return this.pos=o,this;for(let s=3;s<31;s=s+7){let l=n>>>s,c=!!(l>>>7);if(r[o++]=(c?l|128:l)&255,!c)return this.pos=o,this}return r[o++]=n>>>31&1,this.pos=o,this}},y0=128,Hr=1,mg=new Uint8Array(0),w0=new DataView(mg.buffer),gg=32;function nu(t){return t<128?1:t<16384?2:t<2097152?3:t<268435456?4:5}var R=class{constructor(e,n=eu().decodeUtf8){this.decodeUtf8=n,this.varint64Lo=0,this.varint64Hi=0,this.varint64=lg,this.uint32=dg,this.buf=e,this.len=e.length,this.pos=0,this.view=new DataView(e.buffer,e.byteOffset,e.byteLength)}tag(){let e=this.pos,n=this.uint32(),r=this.pos-e;if(r>5||r==5&&this.buf[this.pos-1]>15)throw new Error("illegal tag: varint overflows uint32");let o=n>>>3,i=n&7;if(o<=0||i>5)throw new Error("illegal tag: field no "+o+" wire type "+i);return[o,i]}skip(e,n,r=100){let o=this.pos;switch(e){case Lt.Varint:for(;this.buf[this.pos++]&128;);break;case Lt.Bit64:this.pos+=4;case Lt.Bit32:this.pos+=4;break;case Lt.LengthDelimited:let i=this.uint32();this.pos+=i;break;case Lt.StartGroup:if(r<=0)throw new Error("maximum recursion depth reached");for(;;){let[a,s]=this.tag();if(s===Lt.EndGroup){if(n!==void 0&&a!==n)throw new Error("invalid end group tag");break}this.skip(s,a,r-1)}break;default:throw new Error("cant skip wire type "+e)}return this.assertBounds(),this.buf.subarray(o,this.pos)}assertBounds(){if(this.pos>this.len)throw new RangeError("premature EOF")}int32(){return this.uint32()|0}sint32(){let e=this.uint32();return e>>>1^-(e&1)}int64(){return this.varint64(),ct.dec(this.varint64Lo,this.varint64Hi)}uint64(){return this.varint64(),ct.uDec(this.varint64Lo,this.varint64Hi)}sint64(){this.varint64();let e=this.varint64Lo,n=this.varint64Hi,r=-(e&1);return e=(e>>>1|(n&1)<<31)^r,n=n>>>1^r,ct.dec(e,n)}bool(){let e=this.buf[this.pos];return e<128?(this.pos++,e!==0):(this.varint64(),this.varint64Lo!==0||this.varint64Hi!==0)}fixed32(){return this.view.getUint32((this.pos+=4)-4,!0)}sfixed32(){return this.view.getInt32((this.pos+=4)-4,!0)}fixed64(){return ct.uDec(this.sfixed32(),this.sfixed32())}sfixed64(){return ct.dec(this.sfixed32(),this.sfixed32())}float(){return this.view.getFloat32((this.pos+=4)-4,!0)}double(){return this.view.getFloat64((this.pos+=8)-8,!0)}bytes(){let e=this.uint32(),n=this.pos;return this.pos+=e,this.assertBounds(),this.buf.subarray(n,n+e)}string(e){let n=this.bytes(),r=n.length;if(r<=gg){let o=new Array(r);for(let i=0;i<r;i++){let a=n[i];if(a>127)return this.decodeUtf8(n,e);o[i]=a}return String.fromCharCode.apply(String,o)}return this.decodeUtf8(n,e)}};function ru(t){if(typeof t=="string")t=Number(t);else if(typeof t!="number")throw new Error("invalid int32: "+typeof t);if(!Number.isInteger(t)||t>v0||t<b0)throw new Error("invalid int32: "+t)}function fg(t){if(typeof t=="string")t=Number(t);else if(typeof t!="number")throw new Error("invalid uint32: "+typeof t);if(!Number.isInteger(t)||t>g0||t<0)throw new Error("invalid uint32: "+t)}function E0(t){if(typeof t=="string"){let e=t;if(t=Number(t),Number.isNaN(t)&&e!=="NaN")throw new Error("invalid float32: "+e)}else if(typeof t!="number")throw new Error("invalid float32: "+typeof t);if(!Number.isFinite(Math.fround(t))&&Number.isFinite(t))throw new Error("invalid float32: "+t)}var x0=(function(t){return t[t.NULL_VALUE=0]="NULL_VALUE",t[t.UNRECOGNIZED=-1]="UNRECOGNIZED",t})({});function ou(){return{fields:{}}}var ne={encode(t,e=new U){return Object.entries(t.fields).forEach(([n,r])=>{r!==void 0&&su.encode({key:n,value:r},e.uint32(10).fork()).join()}),e},decode(t,e){let n=t instanceof R?t:new R(t),r=e===void 0?n.len:n.pos+e,o=ou();for(;n.pos<r;){let i=n.uint32();switch(i>>>3){case 1:{if(i!==10)break;let a=su.decode(n,n.uint32());a.value!==void 0&&(o.fields[a.key]=a.value);continue}}if((i&7)===4||i===0)break;n.skip(i&7)}return o},create(t){return ne.fromPartial(t??{})},fromPartial(t){let e=ou();return e.fields=Object.entries(t.fields??{}).reduce((n,[r,o])=>(o!==void 0&&(n[r]=o),n),{}),e},wrap(t){let e=ou();if(t!==void 0)for(let n of Object.keys(t))e.fields[n]=t[n];return e},unwrap(t){let e={};if(t.fields)for(let n of Object.keys(t.fields))e[n]=t.fields[n];return e}};function vg(){return{key:"",value:void 0}}var su={encode(t,e=new U){return t.key!==""&&e.uint32(10).string(t.key),t.value!==void 0&&D.encode(D.wrap(t.value),e.uint32(18).fork()).join(),e},decode(t,e){let n=t instanceof R?t:new R(t),r=e===void 0?n.len:n.pos+e,o=vg();for(;n.pos<r;){let i=n.uint32();switch(i>>>3){case 1:if(i!==10)break;o.key=n.string();continue;case 2:if(i!==18)break;o.value=D.unwrap(D.decode(n,n.uint32()));continue}if((i&7)===4||i===0)break;n.skip(i&7)}return o},create(t){return su.fromPartial(t??{})},fromPartial(t){let e=vg();return e.key=t.key??"",e.value=t.value??void 0,e}};function iu(){return{nullValue:void 0,numberValue:void 0,stringValue:void 0,boolValue:void 0,structValue:void 0,listValue:void 0}}var D={encode(t,e=new U){return t.nullValue!==void 0&&e.uint32(8).int32(t.nullValue),t.numberValue!==void 0&&e.uint32(17).double(t.numberValue),t.stringValue!==void 0&&e.uint32(26).string(t.stringValue),t.boolValue!==void 0&&e.uint32(32).bool(t.boolValue),t.structValue!==void 0&&ne.encode(ne.wrap(t.structValue),e.uint32(42).fork()).join(),t.listValue!==void 0&&Fr.encode(Fr.wrap(t.listValue),e.uint32(50).fork()).join(),e},decode(t,e){let n=t instanceof R?t:new R(t),r=e===void 0?n.len:n.pos+e,o=iu();for(;n.pos<r;){let i=n.uint32();switch(i>>>3){case 1:if(i!==8)break;o.nullValue=n.int32();continue;case 2:if(i!==17)break;o.numberValue=n.double();continue;case 3:if(i!==26)break;o.stringValue=n.string();continue;case 4:if(i!==32)break;o.boolValue=n.bool();continue;case 5:if(i!==42)break;o.structValue=ne.unwrap(ne.decode(n,n.uint32()));continue;case 6:if(i!==50)break;o.listValue=Fr.unwrap(Fr.decode(n,n.uint32()));continue}if((i&7)===4||i===0)break;n.skip(i&7)}return o},create(t){return D.fromPartial(t??{})},fromPartial(t){let e=iu();return e.nullValue=t.nullValue??void 0,e.numberValue=t.numberValue??void 0,e.stringValue=t.stringValue??void 0,e.boolValue=t.boolValue??void 0,e.structValue=t.structValue??void 0,e.listValue=t.listValue??void 0,e},wrap(t){let e=iu();if(t===null)e.nullValue=x0.NULL_VALUE;else if(typeof t=="boolean")e.boolValue=t;else if(typeof t=="number")e.numberValue=t;else if(typeof t=="string")e.stringValue=t;else if(globalThis.Array.isArray(t))e.listValue=t;else if(typeof t=="object")e.structValue=t;else if(typeof t<"u")throw new globalThis.Error("Unsupported any value type: "+typeof t);return e},unwrap(t){if(t.stringValue!==void 0)return t.stringValue;if(t?.numberValue!==void 0)return t.numberValue;if(t?.boolValue!==void 0)return t.boolValue;if(t?.structValue!==void 0)return t.structValue;if(t?.listValue!==void 0)return t.listValue;if(t?.nullValue!==void 0)return null}};function au(){return{values:[]}}var Fr={encode(t,e=new U){for(let n of t.values)D.encode(D.wrap(n),e.uint32(10).fork()).join();return e},decode(t,e){let n=t instanceof R?t:new R(t),r=e===void 0?n.len:n.pos+e,o=au();for(;n.pos<r;){let i=n.uint32();switch(i>>>3){case 1:if(i!==10)break;o.values.push(D.unwrap(D.decode(n,n.uint32())));continue}if((i&7)===4||i===0)break;n.skip(i&7)}return o},create(t){return Fr.fromPartial(t??{})},fromPartial(t){let e=au();return e.values=t.values?.map(n=>n)||[],e},wrap(t){let e=au();return e.values=t??[],e},unwrap(t){return t?.hasOwnProperty("values")&&globalThis.Array.isArray(t.values)?t.values:t}},bg=(function(t){return t[t.ADD=0]="ADD",t[t.REMOVE=1]="REMOVE",t[t.REPLACE=2]="REPLACE",t[t.MOVE=3]="MOVE",t[t.COPY=4]="COPY",t[t.TEST=5]="TEST",t[t.UNRECOGNIZED=-1]="UNRECOGNIZED",t})({});function yg(){return{op:0,path:"",from:void 0,value:void 0}}var dn={encode(t,e=new U){return t.op!==0&&e.uint32(8).int32(t.op),t.path!==""&&e.uint32(18).string(t.path),t.from!==void 0&&e.uint32(26).string(t.from),t.value!==void 0&&D.encode(D.wrap(t.value),e.uint32(34).fork()).join(),e},decode(t,e){let n=t instanceof R?t:new R(t),r=e===void 0?n.len:n.pos+e,o=yg();for(;n.pos<r;){let i=n.uint32();switch(i>>>3){case 1:if(i!==8)break;o.op=n.int32();continue;case 2:if(i!==18)break;o.path=n.string();continue;case 3:if(i!==26)break;o.from=n.string();continue;case 4:if(i!==34)break;o.value=D.unwrap(D.decode(n,n.uint32()));continue}if((i&7)===4||i===0)break;n.skip(i&7)}return o},create(t){return dn.fromPartial(t??{})},fromPartial(t){let e=yg();return e.op=t.op??0,e.path=t.path??"",e.from=t.from??void 0,e.value=t.value??void 0,e}};function wg(){return{text:"",id:void 0,metadata:void 0}}var ji={encode(t,e=new U){return t.text!==""&&e.uint32(10).string(t.text),t.id!==void 0&&e.uint32(18).string(t.id),t.metadata!==void 0&&D.encode(D.wrap(t.metadata),e.uint32(26).fork()).join(),e},decode(t,e){let n=t instanceof R?t:new R(t),r=e===void 0?n.len:n.pos+e,o=wg();for(;n.pos<r;){let i=n.uint32();switch(i>>>3){case 1:if(i!==10)break;o.text=n.string();continue;case 2:if(i!==18)break;o.id=n.string();continue;case 3:if(i!==26)break;o.metadata=D.unwrap(D.decode(n,n.uint32()));continue}if((i&7)===4||i===0)break;n.skip(i&7)}return o},create(t){return ji.fromPartial(t??{})},fromPartial(t){let e=wg();return e.text=t.text??"",e.id=t.id??void 0,e.metadata=t.metadata??void 0,e}};function Eg(){return{source:void 0,metadata:void 0,id:void 0}}var Wi={encode(t,e=new U){return t.source!==void 0&&We.encode(t.source,e.uint32(10).fork()).join(),t.metadata!==void 0&&D.encode(D.wrap(t.metadata),e.uint32(18).fork()).join(),t.id!==void 0&&e.uint32(26).string(t.id),e},decode(t,e){let n=t instanceof R?t:new R(t),r=e===void 0?n.len:n.pos+e,o=Eg();for(;n.pos<r;){let i=n.uint32();switch(i>>>3){case 1:if(i!==10)break;o.source=We.decode(n,n.uint32());continue;case 2:if(i!==18)break;o.metadata=D.unwrap(D.decode(n,n.uint32()));continue;case 3:if(i!==26)break;o.id=n.string();continue}if((i&7)===4||i===0)break;n.skip(i&7)}return o},create(t){return Wi.fromPartial(t??{})},fromPartial(t){let e=Eg();return e.source=t.source!==void 0&&t.source!==null?We.fromPartial(t.source):void 0,e.metadata=t.metadata??void 0,e.id=t.id??void 0,e}};function xg(){return{value:"",mimeType:""}}var qi={encode(t,e=new U){return t.value!==""&&e.uint32(10).string(t.value),t.mimeType!==""&&e.uint32(18).string(t.mimeType),e},decode(t,e){let n=t instanceof R?t:new R(t),r=e===void 0?n.len:n.pos+e,o=xg();for(;n.pos<r;){let i=n.uint32();switch(i>>>3){case 1:if(i!==10)break;o.value=n.string();continue;case 2:if(i!==18)break;o.mimeType=n.string();continue}if((i&7)===4||i===0)break;n.skip(i&7)}return o},create(t){return qi.fromPartial(t??{})},fromPartial(t){let e=xg();return e.value=t.value??"",e.mimeType=t.mimeType??"",e}};function Sg(){return{value:"",mimeType:void 0}}var Yi={encode(t,e=new U){return t.value!==""&&e.uint32(10).string(t.value),t.mimeType!==void 0&&e.uint32(18).string(t.mimeType),e},decode(t,e){let n=t instanceof R?t:new R(t),r=e===void 0?n.len:n.pos+e,o=Sg();for(;n.pos<r;){let i=n.uint32();switch(i>>>3){case 1:if(i!==10)break;o.value=n.string();continue;case 2:if(i!==18)break;o.mimeType=n.string();continue}if((i&7)===4||i===0)break;n.skip(i&7)}return o},create(t){return Yi.fromPartial(t??{})},fromPartial(t){let e=Sg();return e.value=t.value??"",e.mimeType=t.mimeType??void 0,e}};function _g(){return{value:"",provider:void 0,mimeType:void 0}}var Xi={encode(t,e=new U){return t.value!==""&&e.uint32(10).string(t.value),t.provider!==void 0&&e.uint32(18).string(t.provider),t.mimeType!==void 0&&e.uint32(26).string(t.mimeType),e},decode(t,e){let n=t instanceof R?t:new R(t),r=e===void 0?n.len:n.pos+e,o=_g();for(;n.pos<r;){let i=n.uint32();switch(i>>>3){case 1:if(i!==10)break;o.value=n.string();continue;case 2:if(i!==18)break;o.provider=n.string();continue;case 3:if(i!==26)break;o.mimeType=n.string();continue}if((i&7)===4||i===0)break;n.skip(i&7)}return o},create(t){return Xi.fromPartial(t??{})},fromPartial(t){let e=_g();return e.value=t.value??"",e.provider=t.provider??void 0,e.mimeType=t.mimeType??void 0,e}};function Tg(){return{data:void 0,url:void 0,file:void 0}}var We={encode(t,e=new U){return t.data!==void 0&&qi.encode(t.data,e.uint32(10).fork()).join(),t.url!==void 0&&Yi.encode(t.url,e.uint32(18).fork()).join(),t.file!==void 0&&Xi.encode(t.file,e.uint32(26).fork()).join(),e},decode(t,e){let n=t instanceof R?t:new R(t),r=e===void 0?n.len:n.pos+e,o=Tg();for(;n.pos<r;){let i=n.uint32();switch(i>>>3){case 1:if(i!==10)break;o.data=qi.decode(n,n.uint32());continue;case 2:if(i!==18)break;o.url=Yi.decode(n,n.uint32());continue;case 3:if(i!==26)break;o.file=Xi.decode(n,n.uint32());continue}if((i&7)===4||i===0)break;n.skip(i&7)}return o},create(t){return We.fromPartial(t??{})},fromPartial(t){let e=Tg();return e.data=t.data!==void 0&&t.data!==null?qi.fromPartial(t.data):void 0,e.url=t.url!==void 0&&t.url!==null?Yi.fromPartial(t.url):void 0,e.file=t.file!==void 0&&t.file!==null?Xi.fromPartial(t.file):void 0,e}};function Ag(){return{source:void 0,metadata:void 0,id:void 0}}var Ki={encode(t,e=new U){return t.source!==void 0&&We.encode(t.source,e.uint32(10).fork()).join(),t.metadata!==void 0&&D.encode(D.wrap(t.metadata),e.uint32(18).fork()).join(),t.id!==void 0&&e.uint32(26).string(t.id),e},decode(t,e){let n=t instanceof R?t:new R(t),r=e===void 0?n.len:n.pos+e,o=Ag();for(;n.pos<r;){let i=n.uint32();switch(i>>>3){case 1:if(i!==10)break;o.source=We.decode(n,n.uint32());continue;case 2:if(i!==18)break;o.metadata=D.unwrap(D.decode(n,n.uint32()));continue;case 3:if(i!==26)break;o.id=n.string();continue}if((i&7)===4||i===0)break;n.skip(i&7)}return o},create(t){return Ki.fromPartial(t??{})},fromPartial(t){let e=Ag();return e.source=t.source!==void 0&&t.source!==null?We.fromPartial(t.source):void 0,e.metadata=t.metadata??void 0,e.id=t.id??void 0,e}};function kg(){return{source:void 0,metadata:void 0,id:void 0}}var Ji={encode(t,e=new U){return t.source!==void 0&&We.encode(t.source,e.uint32(10).fork()).join(),t.metadata!==void 0&&D.encode(D.wrap(t.metadata),e.uint32(18).fork()).join(),t.id!==void 0&&e.uint32(26).string(t.id),e},decode(t,e){let n=t instanceof R?t:new R(t),r=e===void 0?n.len:n.pos+e,o=kg();for(;n.pos<r;){let i=n.uint32();switch(i>>>3){case 1:if(i!==10)break;o.source=We.decode(n,n.uint32());continue;case 2:if(i!==18)break;o.metadata=D.unwrap(D.decode(n,n.uint32()));continue;case 3:if(i!==26)break;o.id=n.string();continue}if((i&7)===4||i===0)break;n.skip(i&7)}return o},create(t){return Ji.fromPartial(t??{})},fromPartial(t){let e=kg();return e.source=t.source!==void 0&&t.source!==null?We.fromPartial(t.source):void 0,e.metadata=t.metadata??void 0,e.id=t.id??void 0,e}};function Ig(){return{source:void 0,metadata:void 0,id:void 0}}var Qi={encode(t,e=new U){return t.source!==void 0&&We.encode(t.source,e.uint32(10).fork()).join(),t.metadata!==void 0&&D.encode(D.wrap(t.metadata),e.uint32(18).fork()).join(),t.id!==void 0&&e.uint32(26).string(t.id),e},decode(t,e){let n=t instanceof R?t:new R(t),r=e===void 0?n.len:n.pos+e,o=Ig();for(;n.pos<r;){let i=n.uint32();switch(i>>>3){case 1:if(i!==10)break;o.source=We.decode(n,n.uint32());continue;case 2:if(i!==18)break;o.metadata=D.unwrap(D.decode(n,n.uint32()));continue;case 3:if(i!==26)break;o.id=n.string();continue}if((i&7)===4||i===0)break;n.skip(i&7)}return o},create(t){return Qi.fromPartial(t??{})},fromPartial(t){let e=Ig();return e.source=t.source!==void 0&&t.source!==null?We.fromPartial(t.source):void 0,e.metadata=t.metadata??void 0,e.id=t.id??void 0,e}};function Rg(){return{text:void 0,image:void 0,audio:void 0,video:void 0,document:void 0}}var pn={encode(t,e=new U){return t.text!==void 0&&ji.encode(t.text,e.uint32(10).fork()).join(),t.image!==void 0&&Wi.encode(t.image,e.uint32(18).fork()).join(),t.audio!==void 0&&Ki.encode(t.audio,e.uint32(26).fork()).join(),t.video!==void 0&&Ji.encode(t.video,e.uint32(34).fork()).join(),t.document!==void 0&&Qi.encode(t.document,e.uint32(42).fork()).join(),e},decode(t,e){let n=t instanceof R?t:new R(t),r=e===void 0?n.len:n.pos+e,o=Rg();for(;n.pos<r;){let i=n.uint32();switch(i>>>3){case 1:if(i!==10)break;o.text=ji.decode(n,n.uint32());continue;case 2:if(i!==18)break;o.image=Wi.decode(n,n.uint32());continue;case 3:if(i!==26)break;o.audio=Ki.decode(n,n.uint32());continue;case 4:if(i!==34)break;o.video=Ji.decode(n,n.uint32());continue;case 5:if(i!==42)break;o.document=Qi.decode(n,n.uint32());continue}if((i&7)===4||i===0)break;n.skip(i&7)}return o},create(t){return pn.fromPartial(t??{})},fromPartial(t){let e=Rg();return e.text=t.text!==void 0&&t.text!==null?ji.fromPartial(t.text):void 0,e.image=t.image!==void 0&&t.image!==null?Wi.fromPartial(t.image):void 0,e.audio=t.audio!==void 0&&t.audio!==null?Ki.fromPartial(t.audio):void 0,e.video=t.video!==void 0&&t.video!==null?Ji.fromPartial(t.video):void 0,e.document=t.document!==void 0&&t.document!==null?Qi.fromPartial(t.document):void 0,e}};function Cg(){return{id:"",type:"",function:void 0,metadata:void 0,encryptedValue:void 0}}var ea={encode(t,e=new U){return t.id!==""&&e.uint32(10).string(t.id),t.type!==""&&e.uint32(18).string(t.type),t.function!==void 0&&ta.encode(t.function,e.uint32(26).fork()).join(),t.metadata!==void 0&&ne.encode(ne.wrap(t.metadata),e.uint32(34).fork()).join(),t.encryptedValue!==void 0&&e.uint32(42).string(t.encryptedValue),e},decode(t,e){let n=t instanceof R?t:new R(t),r=e===void 0?n.len:n.pos+e,o=Cg();for(;n.pos<r;){let i=n.uint32();switch(i>>>3){case 1:if(i!==10)break;o.id=n.string();continue;case 2:if(i!==18)break;o.type=n.string();continue;case 3:if(i!==26)break;o.function=ta.decode(n,n.uint32());continue;case 4:if(i!==34)break;o.metadata=ne.unwrap(ne.decode(n,n.uint32()));continue;case 5:if(i!==42)break;o.encryptedValue=n.string();continue}if((i&7)===4||i===0)break;n.skip(i&7)}return o},create(t){return ea.fromPartial(t??{})},fromPartial(t){let e=Cg();return e.id=t.id??"",e.type=t.type??"",e.function=t.function!==void 0&&t.function!==null?ta.fromPartial(t.function):void 0,e.metadata=t.metadata??void 0,e.encryptedValue=t.encryptedValue??void 0,e}};function Ng(){return{name:"",arguments:""}}var ta={encode(t,e=new U){return t.name!==""&&e.uint32(10).string(t.name),t.arguments!==""&&e.uint32(18).string(t.arguments),e},decode(t,e){let n=t instanceof R?t:new R(t),r=e===void 0?n.len:n.pos+e,o=Ng();for(;n.pos<r;){let i=n.uint32();switch(i>>>3){case 1:if(i!==10)break;o.name=n.string();continue;case 2:if(i!==18)break;o.arguments=n.string();continue}if((i&7)===4||i===0)break;n.skip(i&7)}return o},create(t){return ta.fromPartial(t??{})},fromPartial(t){let e=Ng();return e.name=t.name??"",e.arguments=t.arguments??"",e}};function Og(){return{id:"",role:"",content:void 0,name:void 0,toolCalls:[],toolCallId:void 0,error:void 0,contentParts:[],metadata:void 0,subagentRunId:void 0,encryptedValue:void 0,activityType:void 0,activityContent:void 0}}var hn={encode(t,e=new U){t.id!==""&&e.uint32(10).string(t.id),t.role!==""&&e.uint32(18).string(t.role),t.content!==void 0&&e.uint32(26).string(t.content),t.name!==void 0&&e.uint32(34).string(t.name);for(let n of t.toolCalls)ea.encode(n,e.uint32(42).fork()).join();t.toolCallId!==void 0&&e.uint32(50).string(t.toolCallId),t.error!==void 0&&e.uint32(58).string(t.error);for(let n of t.contentParts)pn.encode(n,e.uint32(66).fork()).join();return t.metadata!==void 0&&ne.encode(ne.wrap(t.metadata),e.uint32(74).fork()).join(),t.subagentRunId!==void 0&&e.uint32(82).string(t.subagentRunId),t.encryptedValue!==void 0&&e.uint32(90).string(t.encryptedValue),t.activityType!==void 0&&e.uint32(98).string(t.activityType),t.activityContent!==void 0&&ne.encode(ne.wrap(t.activityContent),e.uint32(106).fork()).join(),e},decode(t,e){let n=t instanceof R?t:new R(t),r=e===void 0?n.len:n.pos+e,o=Og();for(;n.pos<r;){let i=n.uint32();switch(i>>>3){case 1:if(i!==10)break;o.id=n.string();continue;case 2:if(i!==18)break;o.role=n.string();continue;case 3:if(i!==26)break;o.content=n.string();continue;case 4:if(i!==34)break;o.name=n.string();continue;case 5:if(i!==42)break;o.toolCalls.push(ea.decode(n,n.uint32()));continue;case 6:if(i!==50)break;o.toolCallId=n.string();continue;case 7:if(i!==58)break;o.error=n.string();continue;case 8:if(i!==66)break;o.contentParts.push(pn.decode(n,n.uint32()));continue;case 9:if(i!==74)break;o.metadata=ne.unwrap(ne.decode(n,n.uint32()));continue;case 10:if(i!==82)break;o.subagentRunId=n.string();continue;case 11:if(i!==90)break;o.encryptedValue=n.string();continue;case 12:if(i!==98)break;o.activityType=n.string();continue;case 13:if(i!==106)break;o.activityContent=ne.unwrap(ne.decode(n,n.uint32()));continue}if((i&7)===4||i===0)break;n.skip(i&7)}return o},create(t){return hn.fromPartial(t??{})},fromPartial(t){let e=Og();return e.id=t.id??"",e.role=t.role??"",e.content=t.content??void 0,e.name=t.name??void 0,e.toolCalls=t.toolCalls?.map(n=>ea.fromPartial(n))||[],e.toolCallId=t.toolCallId??void 0,e.error=t.error??void 0,e.contentParts=t.contentParts?.map(n=>pn.fromPartial(n))||[],e.metadata=t.metadata??void 0,e.subagentRunId=t.subagentRunId??void 0,e.encryptedValue=t.encryptedValue??void 0,e.activityType=t.activityType??void 0,e.activityContent=t.activityContent??void 0,e}};function Pg(){return{name:"",description:"",parameters:void 0,metadata:void 0}}var na={encode(t,e=new U){return t.name!==""&&e.uint32(10).string(t.name),t.description!==""&&e.uint32(18).string(t.description),t.parameters!==void 0&&D.encode(D.wrap(t.parameters),e.uint32(26).fork()).join(),t.metadata!==void 0&&ne.encode(ne.wrap(t.metadata),e.uint32(34).fork()).join(),e},decode(t,e){let n=t instanceof R?t:new R(t),r=e===void 0?n.len:n.pos+e,o=Pg();for(;n.pos<r;){let i=n.uint32();switch(i>>>3){case 1:if(i!==10)break;o.name=n.string();continue;case 2:if(i!==18)break;o.description=n.string();continue;case 3:if(i!==26)break;o.parameters=D.unwrap(D.decode(n,n.uint32()));continue;case 4:if(i!==34)break;o.metadata=ne.unwrap(ne.decode(n,n.uint32()));continue}if((i&7)===4||i===0)break;n.skip(i&7)}return o},create(t){return na.fromPartial(t??{})},fromPartial(t){let e=Pg();return e.name=t.name??"",e.description=t.description??"",e.parameters=t.parameters??void 0,e.metadata=t.metadata??void 0,e}};function Mg(){return{description:"",value:""}}var ra={encode(t,e=new U){return t.description!==""&&e.uint32(10).string(t.description),t.value!==""&&e.uint32(18).string(t.value),e},decode(t,e){let n=t instanceof R?t:new R(t),r=e===void 0?n.len:n.pos+e,o=Mg();for(;n.pos<r;){let i=n.uint32();switch(i>>>3){case 1:if(i!==10)break;o.description=n.string();continue;case 2:if(i!==18)break;o.value=n.string();continue}if((i&7)===4||i===0)break;n.skip(i&7)}return o},create(t){return ra.fromPartial(t??{})},fromPartial(t){let e=Mg();return e.description=t.description??"",e.value=t.value??"",e}};function zg(){return{interruptId:"",status:"",payload:void 0,metadata:void 0}}var oa={encode(t,e=new U){return t.interruptId!==""&&e.uint32(10).string(t.interruptId),t.status!==""&&e.uint32(18).string(t.status),t.payload!==void 0&&D.encode(D.wrap(t.payload),e.uint32(26).fork()).join(),t.metadata!==void 0&&ne.encode(ne.wrap(t.metadata),e.uint32(34).fork()).join(),e},decode(t,e){let n=t instanceof R?t:new R(t),r=e===void 0?n.len:n.pos+e,o=zg();for(;n.pos<r;){let i=n.uint32();switch(i>>>3){case 1:if(i!==10)break;o.interruptId=n.string();continue;case 2:if(i!==18)break;o.status=n.string();continue;case 3:if(i!==26)break;o.payload=D.unwrap(D.decode(n,n.uint32()));continue;case 4:if(i!==34)break;o.metadata=ne.unwrap(ne.decode(n,n.uint32()));continue}if((i&7)===4||i===0)break;n.skip(i&7)}return o},create(t){return oa.fromPartial(t??{})},fromPartial(t){let e=zg();return e.interruptId=t.interruptId??"",e.status=t.status??"",e.payload=t.payload??void 0,e.metadata=t.metadata??void 0,e}};function Lg(){return{threadId:"",runId:"",parentRunId:void 0,state:void 0,messages:[],tools:[],context:[],forwardedProps:void 0,resume:[],protocolVersion:void 0}}var ia={encode(t,e=new U){t.threadId!==""&&e.uint32(10).string(t.threadId),t.runId!==""&&e.uint32(18).string(t.runId),t.parentRunId!==void 0&&e.uint32(26).string(t.parentRunId),t.state!==void 0&&D.encode(D.wrap(t.state),e.uint32(34).fork()).join();for(let n of t.messages)hn.encode(n,e.uint32(42).fork()).join();for(let n of t.tools)na.encode(n,e.uint32(50).fork()).join();for(let n of t.context)ra.encode(n,e.uint32(58).fork()).join();t.forwardedProps!==void 0&&D.encode(D.wrap(t.forwardedProps),e.uint32(66).fork()).join();for(let n of t.resume)oa.encode(n,e.uint32(74).fork()).join();return t.protocolVersion!==void 0&&e.uint32(82).string(t.protocolVersion),e},decode(t,e){let n=t instanceof R?t:new R(t),r=e===void 0?n.len:n.pos+e,o=Lg();for(;n.pos<r;){let i=n.uint32();switch(i>>>3){case 1:if(i!==10)break;o.threadId=n.string();continue;case 2:if(i!==18)break;o.runId=n.string();continue;case 3:if(i!==26)break;o.parentRunId=n.string();continue;case 4:if(i!==34)break;o.state=D.unwrap(D.decode(n,n.uint32()));continue;case 5:if(i!==42)break;o.messages.push(hn.decode(n,n.uint32()));continue;case 6:if(i!==50)break;o.tools.push(na.decode(n,n.uint32()));continue;case 7:if(i!==58)break;o.context.push(ra.decode(n,n.uint32()));continue;case 8:if(i!==66)break;o.forwardedProps=D.unwrap(D.decode(n,n.uint32()));continue;case 9:if(i!==74)break;o.resume.push(oa.decode(n,n.uint32()));continue;case 10:if(i!==82)break;o.protocolVersion=n.string();continue}if((i&7)===4||i===0)break;n.skip(i&7)}return o},create(t){return ia.fromPartial(t??{})},fromPartial(t){let e=Lg();return e.threadId=t.threadId??"",e.runId=t.runId??"",e.parentRunId=t.parentRunId??void 0,e.state=t.state??void 0,e.messages=t.messages?.map(n=>hn.fromPartial(n))||[],e.tools=t.tools?.map(n=>na.fromPartial(n))||[],e.context=t.context?.map(n=>ra.fromPartial(n))||[],e.forwardedProps=t.forwardedProps??void 0,e.resume=t.resume?.map(n=>oa.fromPartial(n))||[],e.protocolVersion=t.protocolVersion??void 0,e}};function Dg(){return{id:"",reason:"",message:void 0,toolCallId:void 0,responseSchema:void 0,expiresAt:void 0,metadata:void 0,subagentRunId:void 0}}var aa={encode(t,e=new U){return t.id!==""&&e.uint32(10).string(t.id),t.reason!==""&&e.uint32(18).string(t.reason),t.message!==void 0&&e.uint32(26).string(t.message),t.toolCallId!==void 0&&e.uint32(34).string(t.toolCallId),t.responseSchema!==void 0&&D.encode(D.wrap(t.responseSchema),e.uint32(42).fork()).join(),t.expiresAt!==void 0&&e.uint32(50).string(t.expiresAt),t.metadata!==void 0&&D.encode(D.wrap(t.metadata),e.uint32(58).fork()).join(),t.subagentRunId!==void 0&&e.uint32(66).string(t.subagentRunId),e},decode(t,e){let n=t instanceof R?t:new R(t),r=e===void 0?n.len:n.pos+e,o=Dg();for(;n.pos<r;){let i=n.uint32();switch(i>>>3){case 1:if(i!==10)break;o.id=n.string();continue;case 2:if(i!==18)break;o.reason=n.string();continue;case 3:if(i!==26)break;o.message=n.string();continue;case 4:if(i!==34)break;o.toolCallId=n.string();continue;case 5:if(i!==42)break;o.responseSchema=D.unwrap(D.decode(n,n.uint32()));continue;case 6:if(i!==50)break;o.expiresAt=n.string();continue;case 7:if(i!==58)break;o.metadata=D.unwrap(D.decode(n,n.uint32()));continue;case 8:if(i!==66)break;o.subagentRunId=n.string();continue}if((i&7)===4||i===0)break;n.skip(i&7)}return o},create(t){return aa.fromPartial(t??{})},fromPartial(t){let e=Dg();return e.id=t.id??"",e.reason=t.reason??"",e.message=t.message??void 0,e.toolCallId=t.toolCallId??void 0,e.responseSchema=t.responseSchema??void 0,e.expiresAt=t.expiresAt??void 0,e.metadata=t.metadata??void 0,e.subagentRunId=t.subagentRunId??void 0,e}},S0=(function(t){return t[t.TEXT_MESSAGE_START=0]="TEXT_MESSAGE_START",t[t.TEXT_MESSAGE_CONTENT=1]="TEXT_MESSAGE_CONTENT",t[t.TEXT_MESSAGE_END=2]="TEXT_MESSAGE_END",t[t.TOOL_CALL_START=3]="TOOL_CALL_START",t[t.TOOL_CALL_ARGS=4]="TOOL_CALL_ARGS",t[t.TOOL_CALL_END=5]="TOOL_CALL_END",t[t.STATE_SNAPSHOT=6]="STATE_SNAPSHOT",t[t.STATE_DELTA=7]="STATE_DELTA",t[t.MESSAGES_SNAPSHOT=8]="MESSAGES_SNAPSHOT",t[t.RAW=9]="RAW",t[t.CUSTOM=10]="CUSTOM",t[t.RUN_STARTED=11]="RUN_STARTED",t[t.RUN_FINISHED=12]="RUN_FINISHED",t[t.RUN_ERROR=13]="RUN_ERROR",t[t.STEP_STARTED=14]="STEP_STARTED",t[t.STEP_FINISHED=15]="STEP_FINISHED",t[t.SUBAGENT_STARTED=16]="SUBAGENT_STARTED",t[t.SUBAGENT_FINISHED=17]="SUBAGENT_FINISHED",t[t.SUBAGENT_ERROR=18]="SUBAGENT_ERROR",t[t.TEXT_MESSAGE_CHUNK=19]="TEXT_MESSAGE_CHUNK",t[t.TOOL_CALL_CHUNK=20]="TOOL_CALL_CHUNK",t[t.TOOL_CALL_RESULT=21]="TOOL_CALL_RESULT",t[t.ACTIVITY_SNAPSHOT=22]="ACTIVITY_SNAPSHOT",t[t.ACTIVITY_DELTA=23]="ACTIVITY_DELTA",t[t.REASONING_START=24]="REASONING_START",t[t.REASONING_MESSAGE_START=25]="REASONING_MESSAGE_START",t[t.REASONING_MESSAGE_CONTENT=26]="REASONING_MESSAGE_CONTENT",t[t.REASONING_MESSAGE_END=27]="REASONING_MESSAGE_END",t[t.REASONING_MESSAGE_CHUNK=28]="REASONING_MESSAGE_CHUNK",t[t.REASONING_END=29]="REASONING_END",t[t.REASONING_ENCRYPTED_VALUE=30]="REASONING_ENCRYPTED_VALUE",t[t.UNRECOGNIZED=-1]="UNRECOGNIZED",t})({});function $g(){return{type:0,timestamp:void 0,rawEvent:void 0,metadata:void 0}}var P={encode(t,e=new U){return t.type!==0&&e.uint32(8).int32(t.type),t.timestamp!==void 0&&e.uint32(16).int64(t.timestamp),t.rawEvent!==void 0&&D.encode(D.wrap(t.rawEvent),e.uint32(26).fork()).join(),t.metadata!==void 0&&ne.encode(ne.wrap(t.metadata),e.uint32(34).fork()).join(),e},decode(t,e){let n=t instanceof R?t:new R(t),r=e===void 0?n.len:n.pos+e,o=$g();for(;n.pos<r;){let i=n.uint32();switch(i>>>3){case 1:if(i!==8)break;o.type=n.int32();continue;case 2:if(i!==16)break;o.timestamp=cn(n.int64());continue;case 3:if(i!==26)break;o.rawEvent=D.unwrap(D.decode(n,n.uint32()));continue;case 4:if(i!==34)break;o.metadata=ne.unwrap(ne.decode(n,n.uint32()));continue}if((i&7)===4||i===0)break;n.skip(i&7)}return o},create(t){return P.fromPartial(t??{})},fromPartial(t){let e=$g();return e.type=t.type??0,e.timestamp=t.timestamp??void 0,e.rawEvent=t.rawEvent??void 0,e.metadata=t.metadata??void 0,e}};function Ug(){return{baseEvent:void 0,messageId:"",role:void 0,name:void 0,subagentRunId:void 0}}var sa={encode(t,e=new U){return t.baseEvent!==void 0&&P.encode(t.baseEvent,e.uint32(10).fork()).join(),t.messageId!==""&&e.uint32(18).string(t.messageId),t.role!==void 0&&e.uint32(26).string(t.role),t.name!==void 0&&e.uint32(34).string(t.name),t.subagentRunId!==void 0&&e.uint32(42).string(t.subagentRunId),e},decode(t,e){let n=t instanceof R?t:new R(t),r=e===void 0?n.len:n.pos+e,o=Ug();for(;n.pos<r;){let i=n.uint32();switch(i>>>3){case 1:if(i!==10)break;o.baseEvent=P.decode(n,n.uint32());continue;case 2:if(i!==18)break;o.messageId=n.string();continue;case 3:if(i!==26)break;o.role=n.string();continue;case 4:if(i!==34)break;o.name=n.string();continue;case 5:if(i!==42)break;o.subagentRunId=n.string();continue}if((i&7)===4||i===0)break;n.skip(i&7)}return o},create(t){return sa.fromPartial(t??{})},fromPartial(t){let e=Ug();return e.baseEvent=t.baseEvent!==void 0&&t.baseEvent!==null?P.fromPartial(t.baseEvent):void 0,e.messageId=t.messageId??"",e.role=t.role??void 0,e.name=t.name??void 0,e.subagentRunId=t.subagentRunId??void 0,e}};function Hg(){return{baseEvent:void 0,messageId:"",delta:"",subagentRunId:void 0}}var la={encode(t,e=new U){return t.baseEvent!==void 0&&P.encode(t.baseEvent,e.uint32(10).fork()).join(),t.messageId!==""&&e.uint32(18).string(t.messageId),t.delta!==""&&e.uint32(26).string(t.delta),t.subagentRunId!==void 0&&e.uint32(34).string(t.subagentRunId),e},decode(t,e){let n=t instanceof R?t:new R(t),r=e===void 0?n.len:n.pos+e,o=Hg();for(;n.pos<r;){let i=n.uint32();switch(i>>>3){case 1:if(i!==10)break;o.baseEvent=P.decode(n,n.uint32());continue;case 2:if(i!==18)break;o.messageId=n.string();continue;case 3:if(i!==26)break;o.delta=n.string();continue;case 4:if(i!==34)break;o.subagentRunId=n.string();continue}if((i&7)===4||i===0)break;n.skip(i&7)}return o},create(t){return la.fromPartial(t??{})},fromPartial(t){let e=Hg();return e.baseEvent=t.baseEvent!==void 0&&t.baseEvent!==null?P.fromPartial(t.baseEvent):void 0,e.messageId=t.messageId??"",e.delta=t.delta??"",e.subagentRunId=t.subagentRunId??void 0,e}};function Fg(){return{baseEvent:void 0,messageId:"",subagentRunId:void 0}}var ca={encode(t,e=new U){return t.baseEvent!==void 0&&P.encode(t.baseEvent,e.uint32(10).fork()).join(),t.messageId!==""&&e.uint32(18).string(t.messageId),t.subagentRunId!==void 0&&e.uint32(26).string(t.subagentRunId),e},decode(t,e){let n=t instanceof R?t:new R(t),r=e===void 0?n.len:n.pos+e,o=Fg();for(;n.pos<r;){let i=n.uint32();switch(i>>>3){case 1:if(i!==10)break;o.baseEvent=P.decode(n,n.uint32());continue;case 2:if(i!==18)break;o.messageId=n.string();continue;case 3:if(i!==26)break;o.subagentRunId=n.string();continue}if((i&7)===4||i===0)break;n.skip(i&7)}return o},create(t){return ca.fromPartial(t??{})},fromPartial(t){let e=Fg();return e.baseEvent=t.baseEvent!==void 0&&t.baseEvent!==null?P.fromPartial(t.baseEvent):void 0,e.messageId=t.messageId??"",e.subagentRunId=t.subagentRunId??void 0,e}};function Gg(){return{baseEvent:void 0,messageId:void 0,role:void 0,delta:void 0,name:void 0,subagentRunId:void 0}}var ua={encode(t,e=new U){return t.baseEvent!==void 0&&P.encode(t.baseEvent,e.uint32(10).fork()).join(),t.messageId!==void 0&&e.uint32(18).string(t.messageId),t.role!==void 0&&e.uint32(26).string(t.role),t.delta!==void 0&&e.uint32(34).string(t.delta),t.name!==void 0&&e.uint32(42).string(t.name),t.subagentRunId!==void 0&&e.uint32(50).string(t.subagentRunId),e},decode(t,e){let n=t instanceof R?t:new R(t),r=e===void 0?n.len:n.pos+e,o=Gg();for(;n.pos<r;){let i=n.uint32();switch(i>>>3){case 1:if(i!==10)break;o.baseEvent=P.decode(n,n.uint32());continue;case 2:if(i!==18)break;o.messageId=n.string();continue;case 3:if(i!==26)break;o.role=n.string();continue;case 4:if(i!==34)break;o.delta=n.string();continue;case 5:if(i!==42)break;o.name=n.string();continue;case 6:if(i!==50)break;o.subagentRunId=n.string();continue}if((i&7)===4||i===0)break;n.skip(i&7)}return o},create(t){return ua.fromPartial(t??{})},fromPartial(t){let e=Gg();return e.baseEvent=t.baseEvent!==void 0&&t.baseEvent!==null?P.fromPartial(t.baseEvent):void 0,e.messageId=t.messageId??void 0,e.role=t.role??void 0,e.delta=t.delta??void 0,e.name=t.name??void 0,e.subagentRunId=t.subagentRunId??void 0,e}};function Zg(){return{baseEvent:void 0,toolCallId:"",toolCallName:"",parentMessageId:void 0,subagentRunId:void 0}}var da={encode(t,e=new U){return t.baseEvent!==void 0&&P.encode(t.baseEvent,e.uint32(10).fork()).join(),t.toolCallId!==""&&e.uint32(18).string(t.toolCallId),t.toolCallName!==""&&e.uint32(26).string(t.toolCallName),t.parentMessageId!==void 0&&e.uint32(34).string(t.parentMessageId),t.subagentRunId!==void 0&&e.uint32(42).string(t.subagentRunId),e},decode(t,e){let n=t instanceof R?t:new R(t),r=e===void 0?n.len:n.pos+e,o=Zg();for(;n.pos<r;){let i=n.uint32();switch(i>>>3){case 1:if(i!==10)break;o.baseEvent=P.decode(n,n.uint32());continue;case 2:if(i!==18)break;o.toolCallId=n.string();continue;case 3:if(i!==26)break;o.toolCallName=n.string();continue;case 4:if(i!==34)break;o.parentMessageId=n.string();continue;case 5:if(i!==42)break;o.subagentRunId=n.string();continue}if((i&7)===4||i===0)break;n.skip(i&7)}return o},create(t){return da.fromPartial(t??{})},fromPartial(t){let e=Zg();return e.baseEvent=t.baseEvent!==void 0&&t.baseEvent!==null?P.fromPartial(t.baseEvent):void 0,e.toolCallId=t.toolCallId??"",e.toolCallName=t.toolCallName??"",e.parentMessageId=t.parentMessageId??void 0,e.subagentRunId=t.subagentRunId??void 0,e}};function Bg(){return{baseEvent:void 0,toolCallId:"",delta:"",subagentRunId:void 0}}var pa={encode(t,e=new U){return t.baseEvent!==void 0&&P.encode(t.baseEvent,e.uint32(10).fork()).join(),t.toolCallId!==""&&e.uint32(18).string(t.toolCallId),t.delta!==""&&e.uint32(26).string(t.delta),t.subagentRunId!==void 0&&e.uint32(34).string(t.subagentRunId),e},decode(t,e){let n=t instanceof R?t:new R(t),r=e===void 0?n.len:n.pos+e,o=Bg();for(;n.pos<r;){let i=n.uint32();switch(i>>>3){case 1:if(i!==10)break;o.baseEvent=P.decode(n,n.uint32());continue;case 2:if(i!==18)break;o.toolCallId=n.string();continue;case 3:if(i!==26)break;o.delta=n.string();continue;case 4:if(i!==34)break;o.subagentRunId=n.string();continue}if((i&7)===4||i===0)break;n.skip(i&7)}return o},create(t){return pa.fromPartial(t??{})},fromPartial(t){let e=Bg();return e.baseEvent=t.baseEvent!==void 0&&t.baseEvent!==null?P.fromPartial(t.baseEvent):void 0,e.toolCallId=t.toolCallId??"",e.delta=t.delta??"",e.subagentRunId=t.subagentRunId??void 0,e}};function Vg(){return{baseEvent:void 0,toolCallId:"",subagentRunId:void 0}}var ha={encode(t,e=new U){return t.baseEvent!==void 0&&P.encode(t.baseEvent,e.uint32(10).fork()).join(),t.toolCallId!==""&&e.uint32(18).string(t.toolCallId),t.subagentRunId!==void 0&&e.uint32(26).string(t.subagentRunId),e},decode(t,e){let n=t instanceof R?t:new R(t),r=e===void 0?n.len:n.pos+e,o=Vg();for(;n.pos<r;){let i=n.uint32();switch(i>>>3){case 1:if(i!==10)break;o.baseEvent=P.decode(n,n.uint32());continue;case 2:if(i!==18)break;o.toolCallId=n.string();continue;case 3:if(i!==26)break;o.subagentRunId=n.string();continue}if((i&7)===4||i===0)break;n.skip(i&7)}return o},create(t){return ha.fromPartial(t??{})},fromPartial(t){let e=Vg();return e.baseEvent=t.baseEvent!==void 0&&t.baseEvent!==null?P.fromPartial(t.baseEvent):void 0,e.toolCallId=t.toolCallId??"",e.subagentRunId=t.subagentRunId??void 0,e}};function jg(){return{baseEvent:void 0,toolCallId:void 0,toolCallName:void 0,parentMessageId:void 0,delta:void 0,subagentRunId:void 0}}var fa={encode(t,e=new U){return t.baseEvent!==void 0&&P.encode(t.baseEvent,e.uint32(10).fork()).join(),t.toolCallId!==void 0&&e.uint32(18).string(t.toolCallId),t.toolCallName!==void 0&&e.uint32(26).string(t.toolCallName),t.parentMessageId!==void 0&&e.uint32(34).string(t.parentMessageId),t.delta!==void 0&&e.uint32(42).string(t.delta),t.subagentRunId!==void 0&&e.uint32(50).string(t.subagentRunId),e},decode(t,e){let n=t instanceof R?t:new R(t),r=e===void 0?n.len:n.pos+e,o=jg();for(;n.pos<r;){let i=n.uint32();switch(i>>>3){case 1:if(i!==10)break;o.baseEvent=P.decode(n,n.uint32());continue;case 2:if(i!==18)break;o.toolCallId=n.string();continue;case 3:if(i!==26)break;o.toolCallName=n.string();continue;case 4:if(i!==34)break;o.parentMessageId=n.string();continue;case 5:if(i!==42)break;o.delta=n.string();continue;case 6:if(i!==50)break;o.subagentRunId=n.string();continue}if((i&7)===4||i===0)break;n.skip(i&7)}return o},create(t){return fa.fromPartial(t??{})},fromPartial(t){let e=jg();return e.baseEvent=t.baseEvent!==void 0&&t.baseEvent!==null?P.fromPartial(t.baseEvent):void 0,e.toolCallId=t.toolCallId??void 0,e.toolCallName=t.toolCallName??void 0,e.parentMessageId=t.parentMessageId??void 0,e.delta=t.delta??void 0,e.subagentRunId=t.subagentRunId??void 0,e}};function Wg(){return{baseEvent:void 0,subagentRunId:void 0,messageId:"",toolCallId:"",content:void 0,role:void 0,contentParts:[]}}var ma={encode(t,e=new U){t.baseEvent!==void 0&&P.encode(t.baseEvent,e.uint32(10).fork()).join(),t.subagentRunId!==void 0&&e.uint32(18).string(t.subagentRunId),t.messageId!==""&&e.uint32(26).string(t.messageId),t.toolCallId!==""&&e.uint32(34).string(t.toolCallId),t.content!==void 0&&e.uint32(42).string(t.content),t.role!==void 0&&e.uint32(50).string(t.role);for(let n of t.contentParts)pn.encode(n,e.uint32(58).fork()).join();return e},decode(t,e){let n=t instanceof R?t:new R(t),r=e===void 0?n.len:n.pos+e,o=Wg();for(;n.pos<r;){let i=n.uint32();switch(i>>>3){case 1:if(i!==10)break;o.baseEvent=P.decode(n,n.uint32());continue;case 2:if(i!==18)break;o.subagentRunId=n.string();continue;case 3:if(i!==26)break;o.messageId=n.string();continue;case 4:if(i!==34)break;o.toolCallId=n.string();continue;case 5:if(i!==42)break;o.content=n.string();continue;case 6:if(i!==50)break;o.role=n.string();continue;case 7:if(i!==58)break;o.contentParts.push(pn.decode(n,n.uint32()));continue}if((i&7)===4||i===0)break;n.skip(i&7)}return o},create(t){return ma.fromPartial(t??{})},fromPartial(t){let e=Wg();return e.baseEvent=t.baseEvent!==void 0&&t.baseEvent!==null?P.fromPartial(t.baseEvent):void 0,e.subagentRunId=t.subagentRunId??void 0,e.messageId=t.messageId??"",e.toolCallId=t.toolCallId??"",e.content=t.content??void 0,e.role=t.role??void 0,e.contentParts=t.contentParts?.map(n=>pn.fromPartial(n))||[],e}};function qg(){return{baseEvent:void 0,snapshot:void 0,subagentRunId:void 0}}var ga={encode(t,e=new U){return t.baseEvent!==void 0&&P.encode(t.baseEvent,e.uint32(10).fork()).join(),t.snapshot!==void 0&&D.encode(D.wrap(t.snapshot),e.uint32(18).fork()).join(),t.subagentRunId!==void 0&&e.uint32(26).string(t.subagentRunId),e},decode(t,e){let n=t instanceof R?t:new R(t),r=e===void 0?n.len:n.pos+e,o=qg();for(;n.pos<r;){let i=n.uint32();switch(i>>>3){case 1:if(i!==10)break;o.baseEvent=P.decode(n,n.uint32());continue;case 2:if(i!==18)break;o.snapshot=D.unwrap(D.decode(n,n.uint32()));continue;case 3:if(i!==26)break;o.subagentRunId=n.string();continue}if((i&7)===4||i===0)break;n.skip(i&7)}return o},create(t){return ga.fromPartial(t??{})},fromPartial(t){let e=qg();return e.baseEvent=t.baseEvent!==void 0&&t.baseEvent!==null?P.fromPartial(t.baseEvent):void 0,e.snapshot=t.snapshot??void 0,e.subagentRunId=t.subagentRunId??void 0,e}};function Yg(){return{baseEvent:void 0,delta:[],subagentRunId:void 0}}var va={encode(t,e=new U){t.baseEvent!==void 0&&P.encode(t.baseEvent,e.uint32(10).fork()).join();for(let n of t.delta)dn.encode(n,e.uint32(18).fork()).join();return t.subagentRunId!==void 0&&e.uint32(26).string(t.subagentRunId),e},decode(t,e){let n=t instanceof R?t:new R(t),r=e===void 0?n.len:n.pos+e,o=Yg();for(;n.pos<r;){let i=n.uint32();switch(i>>>3){case 1:if(i!==10)break;o.baseEvent=P.decode(n,n.uint32());continue;case 2:if(i!==18)break;o.delta.push(dn.decode(n,n.uint32()));continue;case 3:if(i!==26)break;o.subagentRunId=n.string();continue}if((i&7)===4||i===0)break;n.skip(i&7)}return o},create(t){return va.fromPartial(t??{})},fromPartial(t){let e=Yg();return e.baseEvent=t.baseEvent!==void 0&&t.baseEvent!==null?P.fromPartial(t.baseEvent):void 0,e.delta=t.delta?.map(n=>dn.fromPartial(n))||[],e.subagentRunId=t.subagentRunId??void 0,e}};function Xg(){return{baseEvent:void 0,messages:[]}}var ba={encode(t,e=new U){t.baseEvent!==void 0&&P.encode(t.baseEvent,e.uint32(10).fork()).join();for(let n of t.messages)hn.encode(n,e.uint32(18).fork()).join();return e},decode(t,e){let n=t instanceof R?t:new R(t),r=e===void 0?n.len:n.pos+e,o=Xg();for(;n.pos<r;){let i=n.uint32();switch(i>>>3){case 1:if(i!==10)break;o.baseEvent=P.decode(n,n.uint32());continue;case 2:if(i!==18)break;o.messages.push(hn.decode(n,n.uint32()));continue}if((i&7)===4||i===0)break;n.skip(i&7)}return o},create(t){return ba.fromPartial(t??{})},fromPartial(t){let e=Xg();return e.baseEvent=t.baseEvent!==void 0&&t.baseEvent!==null?P.fromPartial(t.baseEvent):void 0,e.messages=t.messages?.map(n=>hn.fromPartial(n))||[],e}};function Kg(){return{baseEvent:void 0,subagentRunId:void 0,messageId:"",activityType:"",content:void 0,replace:void 0}}var ya={encode(t,e=new U){return t.baseEvent!==void 0&&P.encode(t.baseEvent,e.uint32(10).fork()).join(),t.subagentRunId!==void 0&&e.uint32(18).string(t.subagentRunId),t.messageId!==""&&e.uint32(26).string(t.messageId),t.activityType!==""&&e.uint32(34).string(t.activityType),t.content!==void 0&&ne.encode(ne.wrap(t.content),e.uint32(42).fork()).join(),t.replace!==void 0&&e.uint32(48).bool(t.replace),e},decode(t,e){let n=t instanceof R?t:new R(t),r=e===void 0?n.len:n.pos+e,o=Kg();for(;n.pos<r;){let i=n.uint32();switch(i>>>3){case 1:if(i!==10)break;o.baseEvent=P.decode(n,n.uint32());continue;case 2:if(i!==18)break;o.subagentRunId=n.string();continue;case 3:if(i!==26)break;o.messageId=n.string();continue;case 4:if(i!==34)break;o.activityType=n.string();continue;case 5:if(i!==42)break;o.content=ne.unwrap(ne.decode(n,n.uint32()));continue;case 6:if(i!==48)break;o.replace=n.bool();continue}if((i&7)===4||i===0)break;n.skip(i&7)}return o},create(t){return ya.fromPartial(t??{})},fromPartial(t){let e=Kg();return e.baseEvent=t.baseEvent!==void 0&&t.baseEvent!==null?P.fromPartial(t.baseEvent):void 0,e.subagentRunId=t.subagentRunId??void 0,e.messageId=t.messageId??"",e.activityType=t.activityType??"",e.content=t.content??void 0,e.replace=t.replace??void 0,e}};function Jg(){return{baseEvent:void 0,subagentRunId:void 0,messageId:"",activityType:"",patch:[]}}var wa={encode(t,e=new U){t.baseEvent!==void 0&&P.encode(t.baseEvent,e.uint32(10).fork()).join(),t.subagentRunId!==void 0&&e.uint32(18).string(t.subagentRunId),t.messageId!==""&&e.uint32(26).string(t.messageId),t.activityType!==""&&e.uint32(34).string(t.activityType);for(let n of t.patch)dn.encode(n,e.uint32(42).fork()).join();return e},decode(t,e){let n=t instanceof R?t:new R(t),r=e===void 0?n.len:n.pos+e,o=Jg();for(;n.pos<r;){let i=n.uint32();switch(i>>>3){case 1:if(i!==10)break;o.baseEvent=P.decode(n,n.uint32());continue;case 2:if(i!==18)break;o.subagentRunId=n.string();continue;case 3:if(i!==26)break;o.messageId=n.string();continue;case 4:if(i!==34)break;o.activityType=n.string();continue;case 5:if(i!==42)break;o.patch.push(dn.decode(n,n.uint32()));continue}if((i&7)===4||i===0)break;n.skip(i&7)}return o},create(t){return wa.fromPartial(t??{})},fromPartial(t){let e=Jg();return e.baseEvent=t.baseEvent!==void 0&&t.baseEvent!==null?P.fromPartial(t.baseEvent):void 0,e.subagentRunId=t.subagentRunId??void 0,e.messageId=t.messageId??"",e.activityType=t.activityType??"",e.patch=t.patch?.map(n=>dn.fromPartial(n))||[],e}};function Qg(){return{baseEvent:void 0,event:void 0,source:void 0,subagentRunId:void 0}}var Ea={encode(t,e=new U){return t.baseEvent!==void 0&&P.encode(t.baseEvent,e.uint32(10).fork()).join(),t.event!==void 0&&D.encode(D.wrap(t.event),e.uint32(18).fork()).join(),t.source!==void 0&&e.uint32(26).string(t.source),t.subagentRunId!==void 0&&e.uint32(34).string(t.subagentRunId),e},decode(t,e){let n=t instanceof R?t:new R(t),r=e===void 0?n.len:n.pos+e,o=Qg();for(;n.pos<r;){let i=n.uint32();switch(i>>>3){case 1:if(i!==10)break;o.baseEvent=P.decode(n,n.uint32());continue;case 2:if(i!==18)break;o.event=D.unwrap(D.decode(n,n.uint32()));continue;case 3:if(i!==26)break;o.source=n.string();continue;case 4:if(i!==34)break;o.subagentRunId=n.string();continue}if((i&7)===4||i===0)break;n.skip(i&7)}return o},create(t){return Ea.fromPartial(t??{})},fromPartial(t){let e=Qg();return e.baseEvent=t.baseEvent!==void 0&&t.baseEvent!==null?P.fromPartial(t.baseEvent):void 0,e.event=t.event??void 0,e.source=t.source??void 0,e.subagentRunId=t.subagentRunId??void 0,e}};function ev(){return{baseEvent:void 0,name:"",value:void 0,subagentRunId:void 0}}var xa={encode(t,e=new U){return t.baseEvent!==void 0&&P.encode(t.baseEvent,e.uint32(10).fork()).join(),t.name!==""&&e.uint32(18).string(t.name),t.value!==void 0&&D.encode(D.wrap(t.value),e.uint32(26).fork()).join(),t.subagentRunId!==void 0&&e.uint32(34).string(t.subagentRunId),e},decode(t,e){let n=t instanceof R?t:new R(t),r=e===void 0?n.len:n.pos+e,o=ev();for(;n.pos<r;){let i=n.uint32();switch(i>>>3){case 1:if(i!==10)break;o.baseEvent=P.decode(n,n.uint32());continue;case 2:if(i!==18)break;o.name=n.string();continue;case 3:if(i!==26)break;o.value=D.unwrap(D.decode(n,n.uint32()));continue;case 4:if(i!==34)break;o.subagentRunId=n.string();continue}if((i&7)===4||i===0)break;n.skip(i&7)}return o},create(t){return xa.fromPartial(t??{})},fromPartial(t){let e=ev();return e.baseEvent=t.baseEvent!==void 0&&t.baseEvent!==null?P.fromPartial(t.baseEvent):void 0,e.name=t.name??"",e.value=t.value??void 0,e.subagentRunId=t.subagentRunId??void 0,e}};function tv(){return{baseEvent:void 0,threadId:"",runId:"",parentRunId:void 0,input:void 0,protocolVersion:void 0}}var Sa={encode(t,e=new U){return t.baseEvent!==void 0&&P.encode(t.baseEvent,e.uint32(10).fork()).join(),t.threadId!==""&&e.uint32(18).string(t.threadId),t.runId!==""&&e.uint32(26).string(t.runId),t.parentRunId!==void 0&&e.uint32(34).string(t.parentRunId),t.input!==void 0&&ia.encode(t.input,e.uint32(42).fork()).join(),t.protocolVersion!==void 0&&e.uint32(50).string(t.protocolVersion),e},decode(t,e){let n=t instanceof R?t:new R(t),r=e===void 0?n.len:n.pos+e,o=tv();for(;n.pos<r;){let i=n.uint32();switch(i>>>3){case 1:if(i!==10)break;o.baseEvent=P.decode(n,n.uint32());continue;case 2:if(i!==18)break;o.threadId=n.string();continue;case 3:if(i!==26)break;o.runId=n.string();continue;case 4:if(i!==34)break;o.parentRunId=n.string();continue;case 5:if(i!==42)break;o.input=ia.decode(n,n.uint32());continue;case 6:if(i!==50)break;o.protocolVersion=n.string();continue}if((i&7)===4||i===0)break;n.skip(i&7)}return o},create(t){return Sa.fromPartial(t??{})},fromPartial(t){let e=tv();return e.baseEvent=t.baseEvent!==void 0&&t.baseEvent!==null?P.fromPartial(t.baseEvent):void 0,e.threadId=t.threadId??"",e.runId=t.runId??"",e.parentRunId=t.parentRunId??void 0,e.input=t.input!==void 0&&t.input!==null?ia.fromPartial(t.input):void 0,e.protocolVersion=t.protocolVersion??void 0,e}};function nv(){return{baseEvent:void 0,threadId:"",runId:"",result:void 0,outcome:"",interrupts:[],usage:[],pendingToolCallIds:[]}}var _a={encode(t,e=new U){t.baseEvent!==void 0&&P.encode(t.baseEvent,e.uint32(10).fork()).join(),t.threadId!==""&&e.uint32(18).string(t.threadId),t.runId!==""&&e.uint32(26).string(t.runId),t.result!==void 0&&D.encode(D.wrap(t.result),e.uint32(34).fork()).join(),t.outcome!==""&&e.uint32(42).string(t.outcome);for(let n of t.interrupts)aa.encode(n,e.uint32(50).fork()).join();for(let n of t.usage)fn.encode(n,e.uint32(58).fork()).join();for(let n of t.pendingToolCallIds)e.uint32(66).string(n);return e},decode(t,e){let n=t instanceof R?t:new R(t),r=e===void 0?n.len:n.pos+e,o=nv();for(;n.pos<r;){let i=n.uint32();switch(i>>>3){case 1:if(i!==10)break;o.baseEvent=P.decode(n,n.uint32());continue;case 2:if(i!==18)break;o.threadId=n.string();continue;case 3:if(i!==26)break;o.runId=n.string();continue;case 4:if(i!==34)break;o.result=D.unwrap(D.decode(n,n.uint32()));continue;case 5:if(i!==42)break;o.outcome=n.string();continue;case 6:if(i!==50)break;o.interrupts.push(aa.decode(n,n.uint32()));continue;case 7:if(i!==58)break;o.usage.push(fn.decode(n,n.uint32()));continue;case 8:if(i!==66)break;o.pendingToolCallIds.push(n.string());continue}if((i&7)===4||i===0)break;n.skip(i&7)}return o},create(t){return _a.fromPartial(t??{})},fromPartial(t){let e=nv();return e.baseEvent=t.baseEvent!==void 0&&t.baseEvent!==null?P.fromPartial(t.baseEvent):void 0,e.threadId=t.threadId??"",e.runId=t.runId??"",e.result=t.result??void 0,e.outcome=t.outcome??"",e.interrupts=t.interrupts?.map(n=>aa.fromPartial(n))||[],e.usage=t.usage?.map(n=>fn.fromPartial(n))||[],e.pendingToolCallIds=t.pendingToolCallIds?.map(n=>n)||[],e}};function rv(){return{baseEvent:void 0,code:void 0,message:"",usage:[]}}var Ta={encode(t,e=new U){t.baseEvent!==void 0&&P.encode(t.baseEvent,e.uint32(10).fork()).join(),t.code!==void 0&&e.uint32(18).string(t.code),t.message!==""&&e.uint32(26).string(t.message);for(let n of t.usage)fn.encode(n,e.uint32(34).fork()).join();return e},decode(t,e){let n=t instanceof R?t:new R(t),r=e===void 0?n.len:n.pos+e,o=rv();for(;n.pos<r;){let i=n.uint32();switch(i>>>3){case 1:if(i!==10)break;o.baseEvent=P.decode(n,n.uint32());continue;case 2:if(i!==18)break;o.code=n.string();continue;case 3:if(i!==26)break;o.message=n.string();continue;case 4:if(i!==34)break;o.usage.push(fn.decode(n,n.uint32()));continue}if((i&7)===4||i===0)break;n.skip(i&7)}return o},create(t){return Ta.fromPartial(t??{})},fromPartial(t){let e=rv();return e.baseEvent=t.baseEvent!==void 0&&t.baseEvent!==null?P.fromPartial(t.baseEvent):void 0,e.code=t.code??void 0,e.message=t.message??"",e.usage=t.usage?.map(n=>fn.fromPartial(n))||[],e}};function ov(){return{baseEvent:void 0,stepName:"",subagentRunId:void 0}}var Aa={encode(t,e=new U){return t.baseEvent!==void 0&&P.encode(t.baseEvent,e.uint32(10).fork()).join(),t.stepName!==""&&e.uint32(18).string(t.stepName),t.subagentRunId!==void 0&&e.uint32(26).string(t.subagentRunId),e},decode(t,e){let n=t instanceof R?t:new R(t),r=e===void 0?n.len:n.pos+e,o=ov();for(;n.pos<r;){let i=n.uint32();switch(i>>>3){case 1:if(i!==10)break;o.baseEvent=P.decode(n,n.uint32());continue;case 2:if(i!==18)break;o.stepName=n.string();continue;case 3:if(i!==26)break;o.subagentRunId=n.string();continue}if((i&7)===4||i===0)break;n.skip(i&7)}return o},create(t){return Aa.fromPartial(t??{})},fromPartial(t){let e=ov();return e.baseEvent=t.baseEvent!==void 0&&t.baseEvent!==null?P.fromPartial(t.baseEvent):void 0,e.stepName=t.stepName??"",e.subagentRunId=t.subagentRunId??void 0,e}};function iv(){return{baseEvent:void 0,stepName:"",subagentRunId:void 0}}var ka={encode(t,e=new U){return t.baseEvent!==void 0&&P.encode(t.baseEvent,e.uint32(10).fork()).join(),t.stepName!==""&&e.uint32(18).string(t.stepName),t.subagentRunId!==void 0&&e.uint32(26).string(t.subagentRunId),e},decode(t,e){let n=t instanceof R?t:new R(t),r=e===void 0?n.len:n.pos+e,o=iv();for(;n.pos<r;){let i=n.uint32();switch(i>>>3){case 1:if(i!==10)break;o.baseEvent=P.decode(n,n.uint32());continue;case 2:if(i!==18)break;o.stepName=n.string();continue;case 3:if(i!==26)break;o.subagentRunId=n.string();continue}if((i&7)===4||i===0)break;n.skip(i&7)}return o},create(t){return ka.fromPartial(t??{})},fromPartial(t){let e=iv();return e.baseEvent=t.baseEvent!==void 0&&t.baseEvent!==null?P.fromPartial(t.baseEvent):void 0,e.stepName=t.stepName??"",e.subagentRunId=t.subagentRunId??void 0,e}};function av(){return{baseEvent:void 0,subagentRunId:void 0,messageId:""}}var Ia={encode(t,e=new U){return t.baseEvent!==void 0&&P.encode(t.baseEvent,e.uint32(10).fork()).join(),t.subagentRunId!==void 0&&e.uint32(18).string(t.subagentRunId),t.messageId!==""&&e.uint32(26).string(t.messageId),e},decode(t,e){let n=t instanceof R?t:new R(t),r=e===void 0?n.len:n.pos+e,o=av();for(;n.pos<r;){let i=n.uint32();switch(i>>>3){case 1:if(i!==10)break;o.baseEvent=P.decode(n,n.uint32());continue;case 2:if(i!==18)break;o.subagentRunId=n.string();continue;case 3:if(i!==26)break;o.messageId=n.string();continue}if((i&7)===4||i===0)break;n.skip(i&7)}return o},create(t){return Ia.fromPartial(t??{})},fromPartial(t){let e=av();return e.baseEvent=t.baseEvent!==void 0&&t.baseEvent!==null?P.fromPartial(t.baseEvent):void 0,e.subagentRunId=t.subagentRunId??void 0,e.messageId=t.messageId??"",e}};function sv(){return{baseEvent:void 0,subagentRunId:void 0,messageId:"",role:""}}var Ra={encode(t,e=new U){return t.baseEvent!==void 0&&P.encode(t.baseEvent,e.uint32(10).fork()).join(),t.subagentRunId!==void 0&&e.uint32(18).string(t.subagentRunId),t.messageId!==""&&e.uint32(26).string(t.messageId),t.role!==""&&e.uint32(34).string(t.role),e},decode(t,e){let n=t instanceof R?t:new R(t),r=e===void 0?n.len:n.pos+e,o=sv();for(;n.pos<r;){let i=n.uint32();switch(i>>>3){case 1:if(i!==10)break;o.baseEvent=P.decode(n,n.uint32());continue;case 2:if(i!==18)break;o.subagentRunId=n.string();continue;case 3:if(i!==26)break;o.messageId=n.string();continue;case 4:if(i!==34)break;o.role=n.string();continue}if((i&7)===4||i===0)break;n.skip(i&7)}return o},create(t){return Ra.fromPartial(t??{})},fromPartial(t){let e=sv();return e.baseEvent=t.baseEvent!==void 0&&t.baseEvent!==null?P.fromPartial(t.baseEvent):void 0,e.subagentRunId=t.subagentRunId??void 0,e.messageId=t.messageId??"",e.role=t.role??"",e}};function lv(){return{baseEvent:void 0,subagentRunId:void 0,messageId:"",delta:""}}var Ca={encode(t,e=new U){return t.baseEvent!==void 0&&P.encode(t.baseEvent,e.uint32(10).fork()).join(),t.subagentRunId!==void 0&&e.uint32(18).string(t.subagentRunId),t.messageId!==""&&e.uint32(26).string(t.messageId),t.delta!==""&&e.uint32(34).string(t.delta),e},decode(t,e){let n=t instanceof R?t:new R(t),r=e===void 0?n.len:n.pos+e,o=lv();for(;n.pos<r;){let i=n.uint32();switch(i>>>3){case 1:if(i!==10)break;o.baseEvent=P.decode(n,n.uint32());continue;case 2:if(i!==18)break;o.subagentRunId=n.string();continue;case 3:if(i!==26)break;o.messageId=n.string();continue;case 4:if(i!==34)break;o.delta=n.string();continue}if((i&7)===4||i===0)break;n.skip(i&7)}return o},create(t){return Ca.fromPartial(t??{})},fromPartial(t){let e=lv();return e.baseEvent=t.baseEvent!==void 0&&t.baseEvent!==null?P.fromPartial(t.baseEvent):void 0,e.subagentRunId=t.subagentRunId??void 0,e.messageId=t.messageId??"",e.delta=t.delta??"",e}};function cv(){return{baseEvent:void 0,subagentRunId:void 0,messageId:""}}var Na={encode(t,e=new U){return t.baseEvent!==void 0&&P.encode(t.baseEvent,e.uint32(10).fork()).join(),t.subagentRunId!==void 0&&e.uint32(18).string(t.subagentRunId),t.messageId!==""&&e.uint32(26).string(t.messageId),e},decode(t,e){let n=t instanceof R?t:new R(t),r=e===void 0?n.len:n.pos+e,o=cv();for(;n.pos<r;){let i=n.uint32();switch(i>>>3){case 1:if(i!==10)break;o.baseEvent=P.decode(n,n.uint32());continue;case 2:if(i!==18)break;o.subagentRunId=n.string();continue;case 3:if(i!==26)break;o.messageId=n.string();continue}if((i&7)===4||i===0)break;n.skip(i&7)}return o},create(t){return Na.fromPartial(t??{})},fromPartial(t){let e=cv();return e.baseEvent=t.baseEvent!==void 0&&t.baseEvent!==null?P.fromPartial(t.baseEvent):void 0,e.subagentRunId=t.subagentRunId??void 0,e.messageId=t.messageId??"",e}};function uv(){return{baseEvent:void 0,subagentRunId:void 0,messageId:void 0,delta:void 0}}var Oa={encode(t,e=new U){return t.baseEvent!==void 0&&P.encode(t.baseEvent,e.uint32(10).fork()).join(),t.subagentRunId!==void 0&&e.uint32(18).string(t.subagentRunId),t.messageId!==void 0&&e.uint32(26).string(t.messageId),t.delta!==void 0&&e.uint32(34).string(t.delta),e},decode(t,e){let n=t instanceof R?t:new R(t),r=e===void 0?n.len:n.pos+e,o=uv();for(;n.pos<r;){let i=n.uint32();switch(i>>>3){case 1:if(i!==10)break;o.baseEvent=P.decode(n,n.uint32());continue;case 2:if(i!==18)break;o.subagentRunId=n.string();continue;case 3:if(i!==26)break;o.messageId=n.string();continue;case 4:if(i!==34)break;o.delta=n.string();continue}if((i&7)===4||i===0)break;n.skip(i&7)}return o},create(t){return Oa.fromPartial(t??{})},fromPartial(t){let e=uv();return e.baseEvent=t.baseEvent!==void 0&&t.baseEvent!==null?P.fromPartial(t.baseEvent):void 0,e.subagentRunId=t.subagentRunId??void 0,e.messageId=t.messageId??void 0,e.delta=t.delta??void 0,e}};function dv(){return{baseEvent:void 0,subagentRunId:void 0,messageId:""}}var Pa={encode(t,e=new U){return t.baseEvent!==void 0&&P.encode(t.baseEvent,e.uint32(10).fork()).join(),t.subagentRunId!==void 0&&e.uint32(18).string(t.subagentRunId),t.messageId!==""&&e.uint32(26).string(t.messageId),e},decode(t,e){let n=t instanceof R?t:new R(t),r=e===void 0?n.len:n.pos+e,o=dv();for(;n.pos<r;){let i=n.uint32();switch(i>>>3){case 1:if(i!==10)break;o.baseEvent=P.decode(n,n.uint32());continue;case 2:if(i!==18)break;o.subagentRunId=n.string();continue;case 3:if(i!==26)break;o.messageId=n.string();continue}if((i&7)===4||i===0)break;n.skip(i&7)}return o},create(t){return Pa.fromPartial(t??{})},fromPartial(t){let e=dv();return e.baseEvent=t.baseEvent!==void 0&&t.baseEvent!==null?P.fromPartial(t.baseEvent):void 0,e.subagentRunId=t.subagentRunId??void 0,e.messageId=t.messageId??"",e}};function pv(){return{baseEvent:void 0,subagentRunId:void 0,subtype:"",entityId:"",encryptedValue:""}}var Ma={encode(t,e=new U){return t.baseEvent!==void 0&&P.encode(t.baseEvent,e.uint32(10).fork()).join(),t.subagentRunId!==void 0&&e.uint32(18).string(t.subagentRunId),t.subtype!==""&&e.uint32(26).string(t.subtype),t.entityId!==""&&e.uint32(34).string(t.entityId),t.encryptedValue!==""&&e.uint32(42).string(t.encryptedValue),e},decode(t,e){let n=t instanceof R?t:new R(t),r=e===void 0?n.len:n.pos+e,o=pv();for(;n.pos<r;){let i=n.uint32();switch(i>>>3){case 1:if(i!==10)break;o.baseEvent=P.decode(n,n.uint32());continue;case 2:if(i!==18)break;o.subagentRunId=n.string();continue;case 3:if(i!==26)break;o.subtype=n.string();continue;case 4:if(i!==34)break;o.entityId=n.string();continue;case 5:if(i!==42)break;o.encryptedValue=n.string();continue}if((i&7)===4||i===0)break;n.skip(i&7)}return o},create(t){return Ma.fromPartial(t??{})},fromPartial(t){let e=pv();return e.baseEvent=t.baseEvent!==void 0&&t.baseEvent!==null?P.fromPartial(t.baseEvent):void 0,e.subagentRunId=t.subagentRunId??void 0,e.subtype=t.subtype??"",e.entityId=t.entityId??"",e.encryptedValue=t.encryptedValue??"",e}};function hv(){return{baseEvent:void 0,subagentRunId:"",name:"",description:void 0,parentSubagentRunId:void 0,parentToolCallId:void 0,parentMessageId:void 0}}var za={encode(t,e=new U){return t.baseEvent!==void 0&&P.encode(t.baseEvent,e.uint32(10).fork()).join(),t.subagentRunId!==""&&e.uint32(18).string(t.subagentRunId),t.name!==""&&e.uint32(26).string(t.name),t.description!==void 0&&e.uint32(34).string(t.description),t.parentSubagentRunId!==void 0&&e.uint32(42).string(t.parentSubagentRunId),t.parentToolCallId!==void 0&&e.uint32(50).string(t.parentToolCallId),t.parentMessageId!==void 0&&e.uint32(58).string(t.parentMessageId),e},decode(t,e){let n=t instanceof R?t:new R(t),r=e===void 0?n.len:n.pos+e,o=hv();for(;n.pos<r;){let i=n.uint32();switch(i>>>3){case 1:if(i!==10)break;o.baseEvent=P.decode(n,n.uint32());continue;case 2:if(i!==18)break;o.subagentRunId=n.string();continue;case 3:if(i!==26)break;o.name=n.string();continue;case 4:if(i!==34)break;o.description=n.string();continue;case 5:if(i!==42)break;o.parentSubagentRunId=n.string();continue;case 6:if(i!==50)break;o.parentToolCallId=n.string();continue;case 7:if(i!==58)break;o.parentMessageId=n.string();continue}if((i&7)===4||i===0)break;n.skip(i&7)}return o},create(t){return za.fromPartial(t??{})},fromPartial(t){let e=hv();return e.baseEvent=t.baseEvent!==void 0&&t.baseEvent!==null?P.fromPartial(t.baseEvent):void 0,e.subagentRunId=t.subagentRunId??"",e.name=t.name??"",e.description=t.description??void 0,e.parentSubagentRunId=t.parentSubagentRunId??void 0,e.parentToolCallId=t.parentToolCallId??void 0,e.parentMessageId=t.parentMessageId??void 0,e}};function fv(){return{baseEvent:void 0,subagentRunId:"",result:void 0,outcome:"",interruptIds:[]}}var La={encode(t,e=new U){t.baseEvent!==void 0&&P.encode(t.baseEvent,e.uint32(10).fork()).join(),t.subagentRunId!==""&&e.uint32(18).string(t.subagentRunId),t.result!==void 0&&D.encode(D.wrap(t.result),e.uint32(26).fork()).join(),t.outcome!==""&&e.uint32(34).string(t.outcome);for(let n of t.interruptIds)e.uint32(42).string(n);return e},decode(t,e){let n=t instanceof R?t:new R(t),r=e===void 0?n.len:n.pos+e,o=fv();for(;n.pos<r;){let i=n.uint32();switch(i>>>3){case 1:if(i!==10)break;o.baseEvent=P.decode(n,n.uint32());continue;case 2:if(i!==18)break;o.subagentRunId=n.string();continue;case 3:if(i!==26)break;o.result=D.unwrap(D.decode(n,n.uint32()));continue;case 4:if(i!==34)break;o.outcome=n.string();continue;case 5:if(i!==42)break;o.interruptIds.push(n.string());continue}if((i&7)===4||i===0)break;n.skip(i&7)}return o},create(t){return La.fromPartial(t??{})},fromPartial(t){let e=fv();return e.baseEvent=t.baseEvent!==void 0&&t.baseEvent!==null?P.fromPartial(t.baseEvent):void 0,e.subagentRunId=t.subagentRunId??"",e.result=t.result??void 0,e.outcome=t.outcome??"",e.interruptIds=t.interruptIds?.map(n=>n)||[],e}};function mv(){return{baseEvent:void 0,subagentRunId:"",message:"",code:void 0}}var Da={encode(t,e=new U){return t.baseEvent!==void 0&&P.encode(t.baseEvent,e.uint32(10).fork()).join(),t.subagentRunId!==""&&e.uint32(18).string(t.subagentRunId),t.message!==""&&e.uint32(26).string(t.message),t.code!==void 0&&e.uint32(34).string(t.code),e},decode(t,e){let n=t instanceof R?t:new R(t),r=e===void 0?n.len:n.pos+e,o=mv();for(;n.pos<r;){let i=n.uint32();switch(i>>>3){case 1:if(i!==10)break;o.baseEvent=P.decode(n,n.uint32());continue;case 2:if(i!==18)break;o.subagentRunId=n.string();continue;case 3:if(i!==26)break;o.message=n.string();continue;case 4:if(i!==34)break;o.code=n.string();continue}if((i&7)===4||i===0)break;n.skip(i&7)}return o},create(t){return Da.fromPartial(t??{})},fromPartial(t){let e=mv();return e.baseEvent=t.baseEvent!==void 0&&t.baseEvent!==null?P.fromPartial(t.baseEvent):void 0,e.subagentRunId=t.subagentRunId??"",e.message=t.message??"",e.code=t.code??void 0,e}};function gv(){return{textMessageStart:void 0,textMessageContent:void 0,textMessageEnd:void 0,toolCallStart:void 0,toolCallArgs:void 0,toolCallEnd:void 0,stateSnapshot:void 0,stateDelta:void 0,messagesSnapshot:void 0,raw:void 0,custom:void 0,runStarted:void 0,runFinished:void 0,runError:void 0,stepStarted:void 0,stepFinished:void 0,textMessageChunk:void 0,toolCallChunk:void 0,subagentStarted:void 0,subagentFinished:void 0,subagentError:void 0,toolCallResult:void 0,activitySnapshot:void 0,activityDelta:void 0,reasoningStart:void 0,reasoningMessageStart:void 0,reasoningMessageContent:void 0,reasoningMessageEnd:void 0,reasoningMessageChunk:void 0,reasoningEnd:void 0,reasoningEncryptedValue:void 0}}var yv={encode(t,e=new U){return t.textMessageStart!==void 0&&sa.encode(t.textMessageStart,e.uint32(10).fork()).join(),t.textMessageContent!==void 0&&la.encode(t.textMessageContent,e.uint32(18).fork()).join(),t.textMessageEnd!==void 0&&ca.encode(t.textMessageEnd,e.uint32(26).fork()).join(),t.toolCallStart!==void 0&&da.encode(t.toolCallStart,e.uint32(34).fork()).join(),t.toolCallArgs!==void 0&&pa.encode(t.toolCallArgs,e.uint32(42).fork()).join(),t.toolCallEnd!==void 0&&ha.encode(t.toolCallEnd,e.uint32(50).fork()).join(),t.stateSnapshot!==void 0&&ga.encode(t.stateSnapshot,e.uint32(58).fork()).join(),t.stateDelta!==void 0&&va.encode(t.stateDelta,e.uint32(66).fork()).join(),t.messagesSnapshot!==void 0&&ba.encode(t.messagesSnapshot,e.uint32(74).fork()).join(),t.raw!==void 0&&Ea.encode(t.raw,e.uint32(82).fork()).join(),t.custom!==void 0&&xa.encode(t.custom,e.uint32(90).fork()).join(),t.runStarted!==void 0&&Sa.encode(t.runStarted,e.uint32(98).fork()).join(),t.runFinished!==void 0&&_a.encode(t.runFinished,e.uint32(106).fork()).join(),t.runError!==void 0&&Ta.encode(t.runError,e.uint32(114).fork()).join(),t.stepStarted!==void 0&&Aa.encode(t.stepStarted,e.uint32(122).fork()).join(),t.stepFinished!==void 0&&ka.encode(t.stepFinished,e.uint32(130).fork()).join(),t.textMessageChunk!==void 0&&ua.encode(t.textMessageChunk,e.uint32(138).fork()).join(),t.toolCallChunk!==void 0&&fa.encode(t.toolCallChunk,e.uint32(146).fork()).join(),t.subagentStarted!==void 0&&za.encode(t.subagentStarted,e.uint32(154).fork()).join(),t.subagentFinished!==void 0&&La.encode(t.subagentFinished,e.uint32(162).fork()).join(),t.subagentError!==void 0&&Da.encode(t.subagentError,e.uint32(170).fork()).join(),t.toolCallResult!==void 0&&ma.encode(t.toolCallResult,e.uint32(178).fork()).join(),t.activitySnapshot!==void 0&&ya.encode(t.activitySnapshot,e.uint32(186).fork()).join(),t.activityDelta!==void 0&&wa.encode(t.activityDelta,e.uint32(194).fork()).join(),t.reasoningStart!==void 0&&Ia.encode(t.reasoningStart,e.uint32(202).fork()).join(),t.reasoningMessageStart!==void 0&&Ra.encode(t.reasoningMessageStart,e.uint32(210).fork()).join(),t.reasoningMessageContent!==void 0&&Ca.encode(t.reasoningMessageContent,e.uint32(218).fork()).join(),t.reasoningMessageEnd!==void 0&&Na.encode(t.reasoningMessageEnd,e.uint32(226).fork()).join(),t.reasoningMessageChunk!==void 0&&Oa.encode(t.reasoningMessageChunk,e.uint32(234).fork()).join(),t.reasoningEnd!==void 0&&Pa.encode(t.reasoningEnd,e.uint32(242).fork()).join(),t.reasoningEncryptedValue!==void 0&&Ma.encode(t.reasoningEncryptedValue,e.uint32(250).fork()).join(),e},decode(t,e){let n=t instanceof R?t:new R(t),r=e===void 0?n.len:n.pos+e,o=gv();for(;n.pos<r;){let i=n.uint32();switch(i>>>3){case 1:if(i!==10)break;o.textMessageStart=sa.decode(n,n.uint32());continue;case 2:if(i!==18)break;o.textMessageContent=la.decode(n,n.uint32());continue;case 3:if(i!==26)break;o.textMessageEnd=ca.decode(n,n.uint32());continue;case 4:if(i!==34)break;o.toolCallStart=da.decode(n,n.uint32());continue;case 5:if(i!==42)break;o.toolCallArgs=pa.decode(n,n.uint32());continue;case 6:if(i!==50)break;o.toolCallEnd=ha.decode(n,n.uint32());continue;case 7:if(i!==58)break;o.stateSnapshot=ga.decode(n,n.uint32());continue;case 8:if(i!==66)break;o.stateDelta=va.decode(n,n.uint32());continue;case 9:if(i!==74)break;o.messagesSnapshot=ba.decode(n,n.uint32());continue;case 10:if(i!==82)break;o.raw=Ea.decode(n,n.uint32());continue;case 11:if(i!==90)break;o.custom=xa.decode(n,n.uint32());continue;case 12:if(i!==98)break;o.runStarted=Sa.decode(n,n.uint32());continue;case 13:if(i!==106)break;o.runFinished=_a.decode(n,n.uint32());continue;case 14:if(i!==114)break;o.runError=Ta.decode(n,n.uint32());continue;case 15:if(i!==122)break;o.stepStarted=Aa.decode(n,n.uint32());continue;case 16:if(i!==130)break;o.stepFinished=ka.decode(n,n.uint32());continue;case 17:if(i!==138)break;o.textMessageChunk=ua.decode(n,n.uint32());continue;case 18:if(i!==146)break;o.toolCallChunk=fa.decode(n,n.uint32());continue;case 19:if(i!==154)break;o.subagentStarted=za.decode(n,n.uint32());continue;case 20:if(i!==162)break;o.subagentFinished=La.decode(n,n.uint32());continue;case 21:if(i!==170)break;o.subagentError=Da.decode(n,n.uint32());continue;case 22:if(i!==178)break;o.toolCallResult=ma.decode(n,n.uint32());continue;case 23:if(i!==186)break;o.activitySnapshot=ya.decode(n,n.uint32());continue;case 24:if(i!==194)break;o.activityDelta=wa.decode(n,n.uint32());continue;case 25:if(i!==202)break;o.reasoningStart=Ia.decode(n,n.uint32());continue;case 26:if(i!==210)break;o.reasoningMessageStart=Ra.decode(n,n.uint32());continue;case 27:if(i!==218)break;o.reasoningMessageContent=Ca.decode(n,n.uint32());continue;case 28:if(i!==226)break;o.reasoningMessageEnd=Na.decode(n,n.uint32());continue;case 29:if(i!==234)break;o.reasoningMessageChunk=Oa.decode(n,n.uint32());continue;case 30:if(i!==242)break;o.reasoningEnd=Pa.decode(n,n.uint32());continue;case 31:if(i!==250)break;o.reasoningEncryptedValue=Ma.decode(n,n.uint32());continue}if((i&7)===4||i===0)break;n.skip(i&7)}return o},create(t){return yv.fromPartial(t??{})},fromPartial(t){let e=gv();return e.textMessageStart=t.textMessageStart!==void 0&&t.textMessageStart!==null?sa.fromPartial(t.textMessageStart):void 0,e.textMessageContent=t.textMessageContent!==void 0&&t.textMessageContent!==null?la.fromPartial(t.textMessageContent):void 0,e.textMessageEnd=t.textMessageEnd!==void 0&&t.textMessageEnd!==null?ca.fromPartial(t.textMessageEnd):void 0,e.toolCallStart=t.toolCallStart!==void 0&&t.toolCallStart!==null?da.fromPartial(t.toolCallStart):void 0,e.toolCallArgs=t.toolCallArgs!==void 0&&t.toolCallArgs!==null?pa.fromPartial(t.toolCallArgs):void 0,e.toolCallEnd=t.toolCallEnd!==void 0&&t.toolCallEnd!==null?ha.fromPartial(t.toolCallEnd):void 0,e.stateSnapshot=t.stateSnapshot!==void 0&&t.stateSnapshot!==null?ga.fromPartial(t.stateSnapshot):void 0,e.stateDelta=t.stateDelta!==void 0&&t.stateDelta!==null?va.fromPartial(t.stateDelta):void 0,e.messagesSnapshot=t.messagesSnapshot!==void 0&&t.messagesSnapshot!==null?ba.fromPartial(t.messagesSnapshot):void 0,e.raw=t.raw!==void 0&&t.raw!==null?Ea.fromPartial(t.raw):void 0,e.custom=t.custom!==void 0&&t.custom!==null?xa.fromPartial(t.custom):void 0,e.runStarted=t.runStarted!==void 0&&t.runStarted!==null?Sa.fromPartial(t.runStarted):void 0,e.runFinished=t.runFinished!==void 0&&t.runFinished!==null?_a.fromPartial(t.runFinished):void 0,e.runError=t.runError!==void 0&&t.runError!==null?Ta.fromPartial(t.runError):void 0,e.stepStarted=t.stepStarted!==void 0&&t.stepStarted!==null?Aa.fromPartial(t.stepStarted):void 0,e.stepFinished=t.stepFinished!==void 0&&t.stepFinished!==null?ka.fromPartial(t.stepFinished):void 0,e.textMessageChunk=t.textMessageChunk!==void 0&&t.textMessageChunk!==null?ua.fromPartial(t.textMessageChunk):void 0,e.toolCallChunk=t.toolCallChunk!==void 0&&t.toolCallChunk!==null?fa.fromPartial(t.toolCallChunk):void 0,e.subagentStarted=t.subagentStarted!==void 0&&t.subagentStarted!==null?za.fromPartial(t.subagentStarted):void 0,e.subagentFinished=t.subagentFinished!==void 0&&t.subagentFinished!==null?La.fromPartial(t.subagentFinished):void 0,e.subagentError=t.subagentError!==void 0&&t.subagentError!==null?Da.fromPartial(t.subagentError):void 0,e.toolCallResult=t.toolCallResult!==void 0&&t.toolCallResult!==null?ma.fromPartial(t.toolCallResult):void 0,e.activitySnapshot=t.activitySnapshot!==void 0&&t.activitySnapshot!==null?ya.fromPartial(t.activitySnapshot):void 0,e.activityDelta=t.activityDelta!==void 0&&t.activityDelta!==null?wa.fromPartial(t.activityDelta):void 0,e.reasoningStart=t.reasoningStart!==void 0&&t.reasoningStart!==null?Ia.fromPartial(t.reasoningStart):void 0,e.reasoningMessageStart=t.reasoningMessageStart!==void 0&&t.reasoningMessageStart!==null?Ra.fromPartial(t.reasoningMessageStart):void 0,e.reasoningMessageContent=t.reasoningMessageContent!==void 0&&t.reasoningMessageContent!==null?Ca.fromPartial(t.reasoningMessageContent):void 0,e.reasoningMessageEnd=t.reasoningMessageEnd!==void 0&&t.reasoningMessageEnd!==null?Na.fromPartial(t.reasoningMessageEnd):void 0,e.reasoningMessageChunk=t.reasoningMessageChunk!==void 0&&t.reasoningMessageChunk!==null?Oa.fromPartial(t.reasoningMessageChunk):void 0,e.reasoningEnd=t.reasoningEnd!==void 0&&t.reasoningEnd!==null?Pa.fromPartial(t.reasoningEnd):void 0,e.reasoningEncryptedValue=t.reasoningEncryptedValue!==void 0&&t.reasoningEncryptedValue!==null?Ma.fromPartial(t.reasoningEncryptedValue):void 0,e}};function vv(){return{provider:void 0,model:void 0,inputTokens:void 0,outputTokens:void 0,totalTokens:void 0,reasoningTokens:void 0,cachedInputTokens:void 0,cacheWriteInputTokens:void 0}}var fn={encode(t,e=new U){return t.provider!==void 0&&e.uint32(10).string(t.provider),t.model!==void 0&&e.uint32(18).string(t.model),t.inputTokens!==void 0&&e.uint32(24).int64(t.inputTokens),t.outputTokens!==void 0&&e.uint32(32).int64(t.outputTokens),t.totalTokens!==void 0&&e.uint32(40).int64(t.totalTokens),t.reasoningTokens!==void 0&&e.uint32(48).int64(t.reasoningTokens),t.cachedInputTokens!==void 0&&e.uint32(56).int64(t.cachedInputTokens),t.cacheWriteInputTokens!==void 0&&e.uint32(64).int64(t.cacheWriteInputTokens),e},decode(t,e){let n=t instanceof R?t:new R(t),r=e===void 0?n.len:n.pos+e,o=vv();for(;n.pos<r;){let i=n.uint32();switch(i>>>3){case 1:if(i!==10)break;o.provider=n.string();continue;case 2:if(i!==18)break;o.model=n.string();continue;case 3:if(i!==24)break;o.inputTokens=cn(n.int64());continue;case 4:if(i!==32)break;o.outputTokens=cn(n.int64());continue;case 5:if(i!==40)break;o.totalTokens=cn(n.int64());continue;case 6:if(i!==48)break;o.reasoningTokens=cn(n.int64());continue;case 7:if(i!==56)break;o.cachedInputTokens=cn(n.int64());continue;case 8:if(i!==64)break;o.cacheWriteInputTokens=cn(n.int64());continue}if((i&7)===4||i===0)break;n.skip(i&7)}return o},create(t){return fn.fromPartial(t??{})},fromPartial(t){let e=vv();return e.provider=t.provider??void 0,e.model=t.model??void 0,e.inputTokens=t.inputTokens??void 0,e.outputTokens=t.outputTokens??void 0,e.totalTokens=t.totalTokens??void 0,e.reasoningTokens=t.reasoningTokens??void 0,e.cachedInputTokens=t.cachedInputTokens??void 0,e.cacheWriteInputTokens=t.cacheWriteInputTokens??void 0,e}};function cn(t){let e=globalThis.Number(t.toString());if(e>globalThis.Number.MAX_SAFE_INTEGER)throw new globalThis.Error("Value is larger than Number.MAX_SAFE_INTEGER");if(e<globalThis.Number.MIN_SAFE_INTEGER)throw new globalThis.Error("Value is smaller than Number.MIN_SAFE_INTEGER");return e}var tr=t=>t&&typeof t=="object"?t:void 0,de=t=>Array.isArray(t)?t:[],_0=()=>typeof process<"u"&&typeof process.env<"u"&&!!process.env.SUPPRESS_TRANSFORMATION_WARNINGS,wv=()=>{_0()||console.warn("[ag-ui][proto] Dropped a content part this build does not know: the protocol has a variant this SDK predates.")};var IM=new Set(Object.values(v)),T0={textMessageStart:"TEXT_MESSAGE_START",textMessageContent:"TEXT_MESSAGE_CONTENT",textMessageEnd:"TEXT_MESSAGE_END",textMessageChunk:"TEXT_MESSAGE_CHUNK",toolCallStart:"TOOL_CALL_START",toolCallArgs:"TOOL_CALL_ARGS",toolCallEnd:"TOOL_CALL_END",toolCallChunk:"TOOL_CALL_CHUNK",toolCallResult:"TOOL_CALL_RESULT",stateSnapshot:"STATE_SNAPSHOT",stateDelta:"STATE_DELTA",messagesSnapshot:"MESSAGES_SNAPSHOT",activitySnapshot:"ACTIVITY_SNAPSHOT",activityDelta:"ACTIVITY_DELTA",raw:"RAW",custom:"CUSTOM",runStarted:"RUN_STARTED",runFinished:"RUN_FINISHED",runError:"RUN_ERROR",stepStarted:"STEP_STARTED",stepFinished:"STEP_FINISHED",reasoningStart:"REASONING_START",reasoningMessageStart:"REASONING_MESSAGE_START",reasoningMessageContent:"REASONING_MESSAGE_CONTENT",reasoningMessageEnd:"REASONING_MESSAGE_END",reasoningMessageChunk:"REASONING_MESSAGE_CHUNK",reasoningEnd:"REASONING_END",reasoningEncryptedValue:"REASONING_ENCRYPTED_VALUE",subagentStarted:"SUBAGENT_STARTED",subagentFinished:"SUBAGENT_FINISHED",subagentError:"SUBAGENT_ERROR"},un=new Set([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31]);var Dt=t=>{let e=tr(t);if(e){if([e.data,e.url,e.file].filter(Boolean).length>1)throw new Error("Invalid event: source carries more than one arm");if(e.data){let n=e.data;return{type:"data",value:n.value,mimeType:n.mimeType}}if(e.url){let n=e.url;return{type:"url",value:n.value,mimeType:n.mimeType}}if(e.file){let n=e.file;return{type:"file",value:n.value,provider:n.provider,mimeType:n.mimeType}}}};var Ev=t=>{let e=tr(t);if(e){if([e.text,e.image,e.audio,e.video,e.document].filter(Boolean).length>1)throw new Error("Invalid event: content part carries more than one arm");if(e.text){let n=e.text;return{type:"text",id:n.id,text:n.text,metadata:n.metadata}}if(e.image){let n=e.image;return n.source!==void 0&&Dt(n.source)===void 0?void 0:{type:"image",id:n.id,source:Dt(n.source),metadata:n.metadata}}if(e.audio){let n=e.audio;return n.source!==void 0&&Dt(n.source)===void 0?void 0:{type:"audio",id:n.id,source:Dt(n.source),metadata:n.metadata}}if(e.video){let n=e.video;return n.source!==void 0&&Dt(n.source)===void 0?void 0:{type:"video",id:n.id,source:Dt(n.source),metadata:n.metadata}}if(e.document){let n=e.document;return n.source!==void 0&&Dt(n.source)===void 0?void 0:{type:"document",id:n.id,source:Dt(n.source),metadata:n.metadata}}}},A0=new Set(["activity"]),k0=new Set(["user","tool"]),I0=new Set(["developer","system","assistant","user","tool","activity","reasoning"]);var xv=t=>{let e=tr(t)??{},n={...e},r=typeof e.role=="string"?e.role:"",o=I0.has(r),i=o?k0.has(r):de(e.contentParts).length>0,a=o?A0.has(r):!i&&e.activityContent!==void 0;if(!o&&(e.content!==void 0?1:0)+(de(e.contentParts).length>0?1:0)+(e.activityContent!==void 0?1:0)>1)throw new Error("Invalid event: message carries more than one content form");if(o){if(!i&&de(e.contentParts).length>0)throw new Error("Invalid event: message carries content parts for a role that has none");if(e.activityContent!==void 0&&!a)throw new Error("Invalid event: message carries activity content for a non-activity role");if(a&&e.content!==void 0)throw new Error("Invalid event: activity content cannot ride with other content forms");if(i&&e.content!==void 0&&de(e.contentParts).length>0)throw new Error("Invalid event: message carries both string content and content parts")}return i&&e.content===void 0&&(n.content=de(e.contentParts).map(s=>{let l=Ev(s);return l===void 0&&wv(),l}).filter(s=>s!==void 0)),a&&e.activityContent!==void 0&&(n.content=e.activityContent),delete n.activityContent,delete n.contentParts,de(e.toolCalls).length===0&&delete n.toolCalls,Object.keys(n).forEach(s=>{n[s]===void 0&&delete n[s]}),n},lu=t=>{if(Array.isArray(t)){for(let n of t)lu(n);return}let e=tr(t);if(e)for(let n of Object.keys(e))e[n]===void 0?delete e[n]:lu(e[n])};var R0=t=>{let e=tr(t);if(!e)return;let n={};return e.threadId!==void 0&&(n.threadId=e.threadId),e.runId!==void 0&&(n.runId=e.runId),e.protocolVersion!==void 0&&(n.protocolVersion=e.protocolVersion),e.parentRunId!==void 0&&(n.parentRunId=e.parentRunId),e.state!==void 0&&(n.state=e.state),n.messages=de(e.messages).map(xv).filter(r=>r!==void 0),n.tools=de(e.tools),n.context=de(e.context),e.forwardedProps!==void 0&&(n.forwardedProps=e.forwardedProps),n.resume=de(e.resume),n};var cu={TextMessageStartEvent:{singular:new Set([1]),descend:{1:"BaseEvent"}},BaseEvent:{singular:new Set([3,4]),descend:{},google:{3:"google.protobuf.Value",4:"google.protobuf.Struct"}},TextMessageContentEvent:{singular:new Set([1]),descend:{1:"BaseEvent"}},TextMessageEndEvent:{singular:new Set([1]),descend:{1:"BaseEvent"}},ToolCallStartEvent:{singular:new Set([1]),descend:{1:"BaseEvent"}},ToolCallArgsEvent:{singular:new Set([1]),descend:{1:"BaseEvent"}},ToolCallEndEvent:{singular:new Set([1]),descend:{1:"BaseEvent"}},StateSnapshotEvent:{singular:new Set([1,2]),descend:{1:"BaseEvent"},google:{2:"google.protobuf.Value"}},StateDeltaEvent:{singular:new Set([1]),descend:{1:"BaseEvent",2:"JsonPatchOperation"}},JsonPatchOperation:{singular:new Set([4]),descend:{},google:{4:"google.protobuf.Value"}},MessagesSnapshotEvent:{singular:new Set([1]),descend:{1:"BaseEvent",2:"Message"}},Message:{singular:new Set([9,13]),descend:{5:"ToolCall",8:"InputContent"},google:{9:"google.protobuf.Struct",13:"google.protobuf.Struct"}},ToolCall:{singular:new Set([3,4]),descend:{},google:{4:"google.protobuf.Struct"}},InputContent:{singular:new Set([1,2,3,4,5]),descend:{1:"TextInputPart",2:"ImageInputPart",3:"AudioInputPart",4:"VideoInputPart",5:"DocumentInputPart"},arms:new Set([1,2,3,4,5])},TextInputPart:{singular:new Set([3]),descend:{},google:{3:"google.protobuf.Value"}},ImageInputPart:{singular:new Set([1,2]),descend:{1:"InputContentSource"},google:{2:"google.protobuf.Value"}},InputContentSource:{singular:new Set([1,2,3]),descend:{},arms:new Set([1,2,3])},AudioInputPart:{singular:new Set([1,2]),descend:{1:"InputContentSource"},google:{2:"google.protobuf.Value"}},VideoInputPart:{singular:new Set([1,2]),descend:{1:"InputContentSource"},google:{2:"google.protobuf.Value"}},DocumentInputPart:{singular:new Set([1,2]),descend:{1:"InputContentSource"},google:{2:"google.protobuf.Value"}},RawEvent:{singular:new Set([1,2]),descend:{1:"BaseEvent"},google:{2:"google.protobuf.Value"}},CustomEvent:{singular:new Set([1,3]),descend:{1:"BaseEvent"},google:{3:"google.protobuf.Value"}},RunStartedEvent:{singular:new Set([1,5]),descend:{1:"BaseEvent",5:"RunAgentInput"}},RunAgentInput:{singular:new Set([4,8]),descend:{5:"Message",6:"Tool",9:"ResumeEntry"},google:{4:"google.protobuf.Value",8:"google.protobuf.Value"}},Tool:{singular:new Set([3,4]),descend:{},google:{3:"google.protobuf.Value",4:"google.protobuf.Struct"}},ResumeEntry:{singular:new Set([3,4]),descend:{},google:{3:"google.protobuf.Value",4:"google.protobuf.Struct"}},RunFinishedEvent:{singular:new Set([1,4]),descend:{1:"BaseEvent",6:"Interrupt"},google:{4:"google.protobuf.Value"}},Interrupt:{singular:new Set([5,7]),descend:{},google:{5:"google.protobuf.Value",7:"google.protobuf.Value"}},RunErrorEvent:{singular:new Set([1]),descend:{1:"BaseEvent"}},StepStartedEvent:{singular:new Set([1]),descend:{1:"BaseEvent"}},StepFinishedEvent:{singular:new Set([1]),descend:{1:"BaseEvent"}},TextMessageChunkEvent:{singular:new Set([1]),descend:{1:"BaseEvent"}},ToolCallChunkEvent:{singular:new Set([1]),descend:{1:"BaseEvent"}},SubagentStartedEvent:{singular:new Set([1]),descend:{1:"BaseEvent"}},SubagentFinishedEvent:{singular:new Set([1,3]),descend:{1:"BaseEvent"},google:{3:"google.protobuf.Value"}},SubagentErrorEvent:{singular:new Set([1]),descend:{1:"BaseEvent"}},ToolCallResultEvent:{singular:new Set([1]),descend:{1:"BaseEvent",7:"InputContent"}},ActivitySnapshotEvent:{singular:new Set([1,5]),descend:{1:"BaseEvent"},google:{5:"google.protobuf.Struct"}},ActivityDeltaEvent:{singular:new Set([1]),descend:{1:"BaseEvent",5:"JsonPatchOperation"}},ReasoningStartEvent:{singular:new Set([1]),descend:{1:"BaseEvent"}},ReasoningMessageStartEvent:{singular:new Set([1]),descend:{1:"BaseEvent"}},ReasoningMessageContentEvent:{singular:new Set([1]),descend:{1:"BaseEvent"}},ReasoningMessageEndEvent:{singular:new Set([1]),descend:{1:"BaseEvent"}},ReasoningMessageChunkEvent:{singular:new Set([1]),descend:{1:"BaseEvent"}},ReasoningEndEvent:{singular:new Set([1]),descend:{1:"BaseEvent"}},ReasoningEncryptedValueEvent:{singular:new Set([1]),descend:{1:"BaseEvent"}},"google.protobuf.Struct":{singular:new Set,descend:{1:"google.protobuf.Struct.FieldsEntry"}},"google.protobuf.Struct.FieldsEntry":{singular:new Set([2]),descend:{2:"google.protobuf.Value"}},"google.protobuf.Value":{singular:new Set([5,6]),descend:{5:"google.protobuf.Struct",6:"google.protobuf.ListValue"},arms:new Set([1,2,3,4,5,6]),armWireTypes:{1:0,2:1,3:2,4:0,5:2,6:2}},"google.protobuf.ListValue":{singular:new Set,descend:{1:"google.protobuf.Value"}}},Sv={1:"TextMessageStartEvent",2:"TextMessageContentEvent",3:"TextMessageEndEvent",4:"ToolCallStartEvent",5:"ToolCallArgsEvent",6:"ToolCallEndEvent",7:"StateSnapshotEvent",8:"StateDeltaEvent",9:"MessagesSnapshotEvent",10:"RawEvent",11:"CustomEvent",12:"RunStartedEvent",13:"RunFinishedEvent",14:"RunErrorEvent",15:"StepStartedEvent",16:"StepFinishedEvent",17:"TextMessageChunkEvent",18:"ToolCallChunkEvent",19:"SubagentStartedEvent",20:"SubagentFinishedEvent",21:"SubagentErrorEvent",22:"ToolCallResultEvent",23:"ActivitySnapshotEvent",24:"ActivityDeltaEvent",25:"ReasoningStartEvent",26:"ReasoningMessageStartEvent",27:"ReasoningMessageContentEvent",28:"ReasoningMessageEndEvent",29:"ReasoningMessageChunkEvent",30:"ReasoningEndEvent",31:"ReasoningEncryptedValueEvent"};function er(t,e){let n=0,r=0;for(;;){if(e.offset>=t.length)throw new Error("Invalid event");let o=t[e.offset++];if(r<28?n+=(o&127)*2**r:r===28&&(n+=(o&15)*2**28),r+=7,(o&128)===0)return n}}function _v(t,e){let n={offset:0},r=0,o=0;for(;n.offset<t.length;){let i=er(t,n),a=Math.floor(i/8),s=i%8;if(a===0)throw new Error("Invalid event");if(s===3){r+=1;continue}if(s===4){if(r-=1,r<0)throw new Error("Invalid event");continue}if(s===0)er(t,n);else if(s===1)n.offset+=8;else if(s===2){let l=er(t,n);if(n.offset+l>t.length)throw new Error("Invalid event");if(r===0){if(e.arms?.has(a)){if(o!==0&&o!==a)throw new Error("Invalid event");o=a}let c=e.descend[a];if(c!==void 0){let u=cu[c];u!==void 0&&_v(t.subarray(n.offset,n.offset+l),u)}}n.offset+=l}else if(s===5)n.offset+=4;else throw new Error("Invalid event");if(n.offset>t.length)throw new Error("Invalid event")}if(r!==0)throw new Error("Invalid event")}function C0(t){let e=new Set,n={offset:0},r=0;for(;n.offset<t.length;){let o=er(t,n),i=Math.floor(o/8),a=o%8;if(i===0)throw new Error("Invalid event");if(a===3){r+=1;continue}if(a===4){if(r-=1,r<0)throw new Error("Invalid event");continue}if(r===0&&un.has(i)){if(e.size>0&&!e.has(i))throw new Error("Invalid event");e.add(i)}if(a===0)er(t,n);else if(a===1)n.offset+=8;else if(a===2){let s=er(t,n);if(n.offset+s>t.length)throw new Error("Invalid event");if(r===0){let l=Sv[i];if(l!==void 0){let c=cu[l];c!==void 0&&_v(t.subarray(n.offset,n.offset+s),c)}}n.offset+=s}else if(a===5)n.offset+=4;else throw new Error("Invalid event");if(n.offset>t.length)throw new Error("Invalid event")}if(r!==0)throw new Error("Invalid event")}function bv(t){if(t.length===1)return t[0];let e=new Uint8Array(t.reduce((r,o)=>r+o.length,0)),n=0;for(let r of t)e.set(r,n),n+=r.length;return e}function Tv(t,e){let n=new R(t),r=[],o=new Map,i,a=!1;for(;n.pos<n.len;){let l=n.pos,[c,u]=n.tag(),h=u===2?n.bytes():void 0;h===void 0&&n.skip(u,c);let m=e.arms?.has(c)&&u===(e.armWireTypes?.[c]??2);if(m){if(i!==void 0&&i!==c){let E=o.get(i);E!==void 0&&(r[E]=void 0),o.delete(i),a=!0}if(i=c,!e.singular.has(c)){let E=o.get(c);E!==void 0&&(r[E]=void 0,o.delete(c),a=!0)}}let f=e.descend[c]??e.google?.[c],p=h!==void 0&&(e.singular.has(c)||f!==void 0),b=o.get(c),g=b===void 0?void 0:r[b]?.payloads;if(p&&e.singular.has(c)&&g!==void 0){g.push(h),a=!0;continue}(p||m)&&o.set(c,r.length),r.push({number:c,raw:t.subarray(l,n.pos),...p&&{payloads:[h]},child:f===void 0?void 0:cu[f]})}let s=[];for(let l of r)if(l!==void 0){if(l.payloads!==void 0){let c=bv(l.payloads),u=l.child===void 0?c:Tv(c,l.child);if(l.payloads.length>1||u!==c){s.push(new U().uint32(l.number*8+2).bytes(u).finish()),a=!0;continue}}s.push(l.raw)}return a?bv(s):t}var uu=class extends Error{constructor(t="Unknown event type"){super(t),this.name="AGUIUnknownEventTypeError"}};function Av(t,e,n,r){let o=0,i=0,a=0;for(;;){if(e.offset>=t.length||a>=n)return-1;let s=t[e.offset++];if(a+=1,a===n&&s>r)return-1;if(o+=(s&127)*2**i,i+=7,(s&128)===0)return o}}var $a=(t,e)=>Av(t,e,5,15),kv=(t,e)=>Av(t,e,10,1);function N0(t){let e={offset:0},n=[];for(;e.offset<t.length;){let r=$a(t,e);if(r<0)return!1;let o=Math.floor(r/8),i=r%8;if(o===0)return!1;if(i===3)n.push(o);else if(i===4){if(n.pop()!==o)return!1}else if(i===0){if(kv(t,e)<0)return!1}else if(i===1)e.offset+=8;else if(i===5)e.offset+=4;else if(i===2){let a=$a(t,e);if(a<0||e.offset+a>t.length)return!1;e.offset+=a}else return!1;if(e.offset>t.length)return!1}return n.length===0}function O0(t){let e={offset:0},n=[],r=0;for(;e.offset<t.length;){let o=$a(t,e);if(o<0)return!1;let i=Math.floor(o/8),a=o%8;if(i===0)return!1;let s=n.length===0;if(a===3){if(s&&un.has(i))return!1;n.push(i)}else if(a===4){if(n.pop()!==i)return!1}else if(a===0){if(s&&un.has(i)||kv(t,e)<0)return!1}else if(a===1){if(s&&un.has(i))return!1;e.offset+=8}else if(a===5){if(s&&un.has(i))return!1;e.offset+=4}else if(a===2){let l=$a(t,e);if(l<0||e.offset+l>t.length)return!1;if(s){if(un.has(i)||!N0(t.subarray(e.offset,e.offset+l)))return!1;r+=1}e.offset+=l}else return!1;if(e.offset>t.length)return!1}return n.length===0&&r>0}function Iv(t){C0(t);let e=yv.decode(Tv(t,{singular:un,descend:Sv})),n=Object.entries(e).filter(([,l])=>l!==void 0);if(n.length!==1)throw n.length===0&&O0(t)?new uu:new Error("Invalid event");let r=n[0],o=T0[r[0]];if(o===void 0)throw new Error("Invalid event");let i=r[1],a=tr(i.baseEvent);if(!a)throw new Error("Invalid event");let s=S0[a.type];if(s!==o)throw new Error("Invalid event: envelope carries "+o+" but the base event declares "+String(s));if(i.type=o,i.timestamp=a.timestamp,i.rawEvent=a.rawEvent,a.metadata!==void 0&&(i.metadata=a.metadata),delete i.baseEvent,i.type==="MESSAGES_SNAPSHOT"&&Array.isArray(i.messages)&&(i.messages=i.messages.map(xv).filter(l=>l!==void 0)),i.type==="RUN_FINISHED"){let l=i,c=typeof l.outcome=="string"&&l.outcome!==""?l.outcome:void 0,u={};u.pendingToolCallIds=l.pendingToolCallIds,delete l.pendingToolCallIds,u.interrupts=l.interrupts,delete l.interrupts,delete l.outcome,c===void 0&&(de(u.pendingToolCallIds).length>0&&(l.pendingToolCallIds=u.pendingToolCallIds),de(u.interrupts).length>0&&(l.interrupts=u.interrupts)),c==="success"&&(l.outcome={type:"success",...de(u.pendingToolCallIds).length>0?{pendingToolCallIds:u.pendingToolCallIds}:{},...de(u.interrupts).length>0?{interrupts:u.interrupts}:{}}),c==="interrupt"&&(l.outcome={type:"interrupt",interrupts:de(u.interrupts),...de(u.pendingToolCallIds).length>0?{pendingToolCallIds:u.pendingToolCallIds}:{}}),c==="cancelled"&&(l.outcome={type:"cancelled",...de(u.pendingToolCallIds).length>0?{pendingToolCallIds:u.pendingToolCallIds}:{},...de(u.interrupts).length>0?{interrupts:u.interrupts}:{}}),c!==void 0&&!["success","interrupt","cancelled"].includes(c)&&(l.outcome={type:c,...de(u.pendingToolCallIds).length>0?{pendingToolCallIds:u.pendingToolCallIds}:{},...de(u.interrupts).length>0?{interrupts:u.interrupts}:{}})}if(i.type==="SUBAGENT_FINISHED"){let l=i,c=typeof l.outcome=="string"&&l.outcome!==""?l.outcome:void 0,u={};u.interruptIds=l.interruptIds,delete l.interruptIds,delete l.outcome,c===void 0&&de(u.interruptIds).length>0&&(l.interruptIds=u.interruptIds),c==="success"&&(l.outcome={type:"success",...de(u.interruptIds).length>0?{interruptIds:u.interruptIds}:{}}),c==="suspended"&&(l.outcome={type:"suspended",...de(u.interruptIds).length>0?{interruptIds:u.interruptIds}:{}}),c!==void 0&&!["success","suspended"].includes(c)&&(l.outcome={type:c,...de(u.interruptIds).length>0?{interruptIds:u.interruptIds}:{}})}if(i.type==="STATE_DELTA"&&Array.isArray(i.delta)&&(i.delta=i.delta.map(l=>{let c=bg[l.op];return l.op=typeof c=="string"&&c!=="UNRECOGNIZED"?c.toLowerCase():String(l.op),Object.keys(l).forEach(u=>{l[u]===void 0&&delete l[u]}),l})),i.type==="ACTIVITY_DELTA"&&Array.isArray(i.patch)&&(i.patch=i.patch.map(l=>{let c=bg[l.op];return l.op=typeof c=="string"&&c!=="UNRECOGNIZED"?c.toLowerCase():String(l.op),Object.keys(l).forEach(u=>{l[u]===void 0&&delete l[u]}),l})),i.type==="RUN_FINISHED"&&Array.isArray(i.usage)&&i.usage.length===0&&delete i.usage,i.type==="RUN_ERROR"&&Array.isArray(i.usage)&&i.usage.length===0&&delete i.usage,i.type==="TOOL_CALL_RESULT"){let l=i;if(l.content!==void 0&&de(l.contentParts).length>0)throw new Error("Invalid event: content carries both string content and content parts");l.content===void 0&&(l.content=de(l.contentParts).map(c=>{let u=Ev(c);return u===void 0&&wv(),u}).filter(c=>c!==void 0)),delete l.contentParts}return i.type==="RUN_STARTED"&&i.input!==void 0&&(i.input=R0(i.input)),lu(i),i}var du="application/vnd.ag-ui.event+proto";var pu=/^[v^~<>=]*?(\d+)(?:\.([x*]|\d+)(?:\.([x*]|\d+)(?:\.([x*]|\d+))?(?:-([\da-z\-]+(?:\.[\da-z\-]+)*))?(?:\+[\da-z\-]+(?:\.[\da-z\-]+)*)?)?)?$/i,hu=t=>{if(typeof t!="string")throw new TypeError("Invalid argument expected string");let e=t.match(pu);if(!e)throw new Error(`Invalid argument not valid semver ('${t}' received)`);return e.shift(),e},Rv=t=>t==="*"||t==="x"||t==="X",Cv=t=>{let e=parseInt(t,10);return isNaN(e)?t:e},M0=(t,e)=>typeof t!=typeof e?[String(t),String(e)]:[t,e],z0=(t,e)=>{if(Rv(t)||Rv(e))return 0;let[n,r]=M0(Cv(t),Cv(e));return n>r?1:n<r?-1:0},fu=(t,e)=>{for(let n=0;n<Math.max(t.length,e.length);n++){let r=z0(t[n]||"0",e[n]||"0");if(r!==0)return r}return 0};var mn=(t,e)=>{let n=hu(t),r=hu(e),o=n.pop(),i=r.pop(),a=fu(n,r);return a!==0?a:o&&i?fu(o.split("."),i.split(".")):o||i?o?-1:1:0};var mu=t=>typeof t=="string"&&/^[v\d]/.test(t)&&pu.test(t);var Nv="@ag-ui/client";function L0(t){if(!t.metadata||!Object.prototype.hasOwnProperty.call(t.metadata,Nv))return;let e=t.metadata?.[Nv];if(!e||typeof e!="object"||Array.isArray(e))return[];if(!Object.prototype.hasOwnProperty.call(e,"authoritativeActivityTypes"))return;let n=e.authoritativeActivityTypes;return n===null?null:Array.isArray(n)&&n.every(r=>typeof r=="string")?n:[]}var ee=t=>{if(typeof structuredClone=="function")return structuredClone(t);try{return JSON.parse(JSON.stringify(t))}catch{return Array.isArray(t)?[...t]:{...t}}};function Ee(){return Ot()}function D0(t){return t instanceof TypeError?/read[- ]?only|not extensible|cannot add property|cannot delete property|can't be deleted|unable to delete property|object is frozen|is not writable/i.test(t.message):!1}function Au(t){if(Object.freeze(t),typeof t=="object"&&t)for(let e of Object.values(t))typeof e=="object"&&e&&!Object.isFrozen(e)&&Au(e);return t}var Ov=512*1024;function Pv(t,e,n){let r=0,o=[t,e],i=new WeakSet;for(;o.length>0;){let a=o.pop();if(typeof a=="string"){if(r+=a.length,r>n)return!0}else if(typeof a=="object"&&a){if(i.has(a))continue;if(i.add(a),Array.isArray(a))for(let s=0;s<a.length;s++)o.push(a[s]);else{let s=Object.keys(a);for(let l=0;l<s.length;l++){let c=s[l];if(r+=c.length,r>n)return!0;o.push(a[c])}}}}return!1}async function oe(t,e,n,r){let o=typeof process<"u"&&process.env!==void 0,i=o&&!!process.env.VITEST_WORKER_ID,a=o&&!!process.env.VITEST_WORKER_ID,s=a&&!Pv(e,n,Ov),l=s?ee(e):e,c=s?ee(n):n,u=!1,h=!1,m;for(let f of t)try{s&&(Au(l),Au(c));let p=await r(f,l,c);if(p===void 0)continue;let b=!1;if(p.messages!==void 0&&p.messages!==l&&(l=ee(p.messages),u=!0,b=!0),p.state!==void 0&&p.state!==c&&(c=ee(p.state),h=!0,b=!0),s&&b&&Pv(l,c,Ov)&&(s=!1),m=p.stopPropagation,m===!0)break}catch(p){if(i&&p instanceof TypeError)throw p;s&&a&&D0(p)?console.error("AG-UI: Subscriber attempted to mutate frozen inputs in-place. Return mutations via AgentStateMutation instead of mutating directly.",p):console.error("Subscriber error:",p);continue}return{...u?{messages:Object.isFrozen(l)?ee(l):l}:{},...h?{state:Object.isFrozen(c)?ee(c):c}:{},...m===void 0?{}:{stopPropagation:m}}}function Fa(t){if(!t)return{enabled:!1,events:!1,lifecycle:!1,verbose:!1};if(t===!0)return{enabled:!0,events:!0,lifecycle:!0,verbose:!0};let e=t.events??!0,n=t.lifecycle??!0,r=t.verbose??!1;return{enabled:e||n,events:e,lifecycle:n,verbose:r}}function vn(t){if(t instanceof ku)return t;if(t===!0)return new ku(Fa(!0))}var ku=class{constructor(t){this.config=t}event(t,e,n,r){this.config.events&&(this.config.verbose?console.debug(`[${t}] ${e}`,typeof n=="string"?n:JSON.stringify(n)):console.debug(`[${t}] ${e}`,r??n))}lifecycle(t,e,n){this.config.lifecycle&&(n?console.debug(`[${t}] ${e}`,n):console.debug(`[${t}] ${e}`))}get eventsEnabled(){return this.config.events}get lifecycleEnabled(){return this.config.lifecycle}get enabled(){return this.config.enabled}};function gu(t){return t.enabled?new ku(t):void 0}function $0(t,e,n){if(e){let o=t.find(a=>a.id===e);if(o?.role==="assistant")return o;o&&console.warn(`TOOL_CALL_START: parentMessageId '${e}' matches a '${o.role}' message, not assistant \u2014 falling back to toolCallId`);let i={id:o?n:e,role:"assistant",toolCalls:[]};return t.push(i),i}let r={id:n,role:"assistant",toolCalls:[]};return t.push(r),r}function qe(t,e){return!t||e.metadata===void 0?!1:(t.metadata=kp(t.metadata,ee(e.metadata)),!0)}var Xv=(t,e,n,r,o)=>{let i=vn(o),a=ee(n.messages),s=ee(t.state),l={},c=[],u=new Set,h=p=>{let b=p.outcome?.type==="success"?p.outcome.pendingToolCallIds:void 0;return b!==void 0&&b.length>0?[...b]:c.filter(g=>!u.has(g))},m=p=>{p.messages!==void 0&&(a=p.messages,l.messages=p.messages),p.state!==void 0&&(s=p.state,l.state=p.state)},f=()=>{let p=ee(l);return l={},p.messages!==void 0||p.state!==void 0?se(p):tn};return e.pipe(Ei(async p=>{let b=await oe(r,a,s,(g,E,y)=>g.onEvent?.({event:p,agent:n,input:t,messages:E,state:y}));if(m(b),b.stopPropagation===!0?i?.event("APPLY","Event dropped:",p,{type:p.type,reason:"stopPropagation by subscriber"}):i?.event("APPLY","Event applied:",p,{type:p.type,subscribers:r.length}),b.stopPropagation===!0)return f();switch(p.type){case v.TEXT_MESSAGE_START:{let g=await oe(r,a,s,(E,y,_)=>E.onTextMessageStartEvent?.({event:p,messages:y,state:_,agent:n,input:t}));if(m(g),g.stopPropagation!==!0){let{messageId:E,role:y="assistant",name:_,subagentRunId:C}=p,w=a.find(A=>A.id===E);if(w?.role==="activity")return console.warn(`TEXT_MESSAGE_START: Message '${E}' is an activity message \u2014 message ids must be unique across activity and text messages`),f();let T=w;if(!T){let A={id:E,role:y,content:"",..._!==void 0&&{name:_},...C!=null&&{subagentRunId:C}};a.push(A),T=A}let S=qe(T,p);(!w||S)&&m({messages:a})}return f()}case v.TEXT_MESSAGE_CONTENT:{let{messageId:g,delta:E}=p,y=a.find(C=>C.id===g);if(!y)return console.warn(`TEXT_MESSAGE_CONTENT: No message found with ID '${g}'`),f();if(y.role==="activity")return console.warn(`TEXT_MESSAGE_CONTENT: Message '${g}' is an activity message \u2014 message ids must be unique across activity and text messages`),f();let _=await oe(r,a,s,(C,w,T)=>C.onTextMessageContentEvent?.({event:p,messages:w,state:T,agent:n,input:t,textMessageBuffer:typeof y.content=="string"?y.content:""}));return m(_),_.stopPropagation!==!0&&(y.content=`${typeof y.content=="string"?y.content:""}${E}`,qe(y,p),m({messages:a})),f()}case v.TEXT_MESSAGE_END:{let{messageId:g}=p,E=a.find(_=>_.id===g);if(!E)return console.warn(`TEXT_MESSAGE_END: No message found with ID '${g}'`),f();if(E.role==="activity")return console.warn(`TEXT_MESSAGE_END: Message '${g}' is an activity message \u2014 message ids must be unique across activity and text messages`),f();let y=await oe(r,a,s,(_,C,w)=>_.onTextMessageEndEvent?.({event:p,messages:C,state:w,agent:n,input:t,textMessageBuffer:typeof E.content=="string"?E.content:""}));return m(y),y.stopPropagation!==!0&&qe(E,p)&&m({messages:a}),await Promise.all(r.map(_=>{_.onNewMessage?.({message:E,messages:a,state:s,agent:n,input:t})})),f()}case v.TOOL_CALL_START:{let g=await oe(r,a,s,(E,y,_)=>E.onToolCallStartEvent?.({event:p,messages:y,state:_,agent:n,input:t}));if(m(g),g.stopPropagation!==!0){let{toolCallId:E,toolCallName:y,parentMessageId:_,subagentRunId:C}=p;c.includes(E)||c.push(E);let w=a.find(O=>O.toolCalls?.some(q=>q.id===E))?.toolCalls?.find(O=>O.id===E);if(w){let O=w.function.name!==y;return O&&(console.warn(`TOOL_CALL_START: tool call '${E}' already exists with name '${w.function.name}' \u2014 updating it to '${y}'`),w.function.name=y),(qe(w,p)||O)&&m({messages:a}),f()}let T=new Set(a.map(O=>O.id)),S=$0(a,_,E);!T.has(S.id)&&C!=null&&S.subagentRunId===void 0&&(S.subagentRunId=C),S.toolCalls??=[];let A={id:E,type:"function",function:{name:y,arguments:""}};S.toolCalls.push(A),qe(A,p),m({messages:a})}return f()}case v.TOOL_CALL_ARGS:{let{toolCallId:g,delta:E}=p,y=a.find(w=>w.toolCalls?.some(T=>T.id===g));if(!y)return console.warn(`TOOL_CALL_ARGS: No message found containing tool call with ID '${g}'`),f();let _=y.toolCalls?.find(w=>w.id===g);if(!_)return console.warn(`TOOL_CALL_ARGS: No tool call found with ID '${g}'`),f();let C=await oe(r,a,s,(w,T,S)=>{let A=_.function.arguments,O=_.function.name,q={};try{q=_i(A)}catch{}return w.onToolCallArgsEvent?.({event:p,messages:T,state:S,agent:n,input:t,toolCallBuffer:A,toolCallName:O,partialToolCallArgs:q})});return m(C),C.stopPropagation!==!0&&(_.function.arguments+=E,qe(_,p),m({messages:a})),f()}case v.TOOL_CALL_END:{let{toolCallId:g}=p,E=a.find(C=>C.toolCalls?.some(w=>w.id===g));if(!E)return console.warn(`TOOL_CALL_END: No message found containing tool call with ID '${g}'`),f();let y=E.toolCalls?.find(C=>C.id===g);if(!y)return console.warn(`TOOL_CALL_END: No tool call found with ID '${g}'`),f();let _=await oe(r,a,s,(C,w,T)=>{let S=y.function.arguments,A=y.function.name,O={};try{O=JSON.parse(S)}catch{}return C.onToolCallEndEvent?.({event:p,messages:w,state:T,agent:n,input:t,toolCallName:A,toolCallArgs:O})});return m(_),_.stopPropagation!==!0&&qe(y,p)&&m({messages:a}),await Promise.all(r.map(C=>{C.onNewToolCall?.({toolCall:y,messages:a,state:s,agent:n,input:t})})),f()}case v.TOOL_CALL_RESULT:{let g=await oe(r,a,s,(E,y,_)=>E.onToolCallResultEvent?.({event:p,messages:y,state:_,agent:n,input:t}));if(m(g),g.stopPropagation!==!0){let{messageId:E,toolCallId:y,content:_,role:C,subagentRunId:w}=p;u.add(y);let T={id:E,toolCallId:y,role:C||"tool",content:_,...w!=null&&{subagentRunId:w}};qe(T,p);let S=a.findIndex(A=>A.role==="assistant"&&A.toolCalls?.some(O=>O.id===y));if(S===-1)a.push(T);else{let A=S+1;for(;A<a.length&&a[A].role==="tool";)A++;a.splice(A,0,T)}await Promise.all(r.map(A=>{A.onNewMessage?.({message:T,messages:a,state:s,agent:n,input:t})})),m({messages:a})}return f()}case v.STATE_SNAPSHOT:{let g=await oe(r,a,s,(E,y,_)=>E.onStateSnapshotEvent?.({event:p,messages:y,state:_,agent:n,input:t}));if(m(g),g.stopPropagation!==!0){let{snapshot:E}=p;s=E,m({state:s})}return f()}case v.STATE_DELTA:{let g=await oe(r,a,s,(E,y,_)=>E.onStateDeltaEvent?.({event:p,messages:y,state:_,agent:n,input:t}));if(m(g),g.stopPropagation!==!0){let{delta:E}=p;try{s=Jo.applyPatch(s,E,!0,!1).newDocument,m({state:s})}catch(y){let _=y instanceof Error?y.message:String(y);console.warn(`Failed to apply state patch:
Current state: ${JSON.stringify(s,null,2)}
Patch operations: ${JSON.stringify(E,null,2)}
Error: ${_}`)}}return f()}case v.MESSAGES_SNAPSHOT:{let g=await oe(r,a,s,(E,y,_)=>E.onMessagesSnapshotEvent?.({event:p,messages:y,state:_,agent:n,input:t}));if(m(g),g.stopPropagation!==!0){let{messages:E}=p,y=E.map(O=>{if(O.subagentRunId!==null)return O;let q={...O};return delete q.subagentRunId,q}),_=new Map(y.map(O=>[O.id,O])),C=L0(p),w=y.some(O=>O.role==="activity"),T=y.some(O=>O.role==="reasoning"),S=O=>O.role==="activity"&&(C?!C.includes(O.activityType):C!==null&&!w)||O.role==="reasoning"&&!T;a=a.filter(O=>_.has(O.id)||S(O)).map(O=>_.get(O.id)??O);let A=new Set(a.map(O=>O.id));for(let O of y)A.has(O.id)||a.push(O);m({messages:a})}return f()}case v.ACTIVITY_SNAPSHOT:{let g=p,E=a.findIndex(T=>T.id===g.messageId),y=E>=0?a[E]:void 0,_=y?.role==="activity"?y:void 0,C=g.replace??!0,w=await oe(r,a,s,(T,S,A)=>T.onActivitySnapshotEvent?.({event:g,messages:S,state:A,agent:n,input:t,activityMessage:_,existingMessage:y}));if(m(w),w.stopPropagation!==!0){let T={id:g.messageId,role:"activity",activityType:g.activityType,content:ee(g.content),...g.subagentRunId!=null&&{subagentRunId:g.subagentRunId}},S,A;E===-1?(a.push(T),S=T,A=T):_?(C&&(a[E]={..._,activityType:g.activityType,content:ee(g.content),subagentRunId:g.subagentRunId},g.subagentRunId??delete a[E].subagentRunId),A=a[E]):C&&(a[E]=T,S=T,A=T),qe(A,g),m({messages:a}),S&&await Promise.all(r.map(O=>O.onNewMessage?.({message:S,messages:a,state:s,agent:n,input:t})))}return f()}case v.ACTIVITY_DELTA:{let g=p,E=a.findIndex(w=>w.id===g.messageId);if(E===-1)return f();let y=a[E];if(y.role!=="activity")return console.warn(`ACTIVITY_DELTA: Message '${g.messageId}' is not an activity message`),f();let _=y,C=await oe(r,a,s,(w,T,S)=>w.onActivityDeltaEvent?.({event:g,messages:T,state:S,agent:n,input:t,activityMessage:_}));if(m(C),C.stopPropagation!==!0)try{qe(_,g)&&m({messages:a});let w=ee(_.content??{}),T=Jo.applyPatch(w,g.patch??[],!0,!1).newDocument;a[E]={..._,content:ee(T),activityType:g.activityType},m({messages:a})}catch(w){let T=w instanceof Error?w.message:String(w);console.warn(`Failed to apply activity patch for '${g.messageId}': ${T}`)}return f()}case v.RAW:return m(await oe(r,a,s,(g,E,y)=>g.onRawEvent?.({event:p,messages:E,state:y,agent:n,input:t}))),f();case v.CUSTOM:return m(await oe(r,a,s,(g,E,y)=>g.onCustomEvent?.({event:p,messages:E,state:y,agent:n,input:t}))),f();case v.RUN_STARTED:{let g=await oe(r,a,s,(E,y,_)=>E.onRunStartedEvent?.({event:p,messages:y,state:_,agent:n,input:t}));if(m(g),c=[],u=new Set,g.stopPropagation!==!0){let E=p;if(E.input?.messages){for(let y of E.input.messages){let _=y;if(y.subagentRunId===null){let C={...y};delete C.subagentRunId,_=C}a.find(C=>C.id===_.id)||a.push(_)}m({messages:a})}}return f()}case v.RUN_FINISHED:{let g=p,E=g.outcome?.type==="interrupt"?{event:g,outcome:"interrupt",interrupts:g.outcome.interrupts}:g.outcome?.type==="cancelled"?{event:g,outcome:"cancelled"}:{event:g,outcome:"success",result:g.result,pendingToolCallIds:h(g)},y=await oe(r,a,s,(_,C,w)=>_.onRunFinishedEvent?.({...E,messages:C,state:w,agent:n,input:t}));return m(y),y.stopPropagation!==!0&&(n.pendingInterrupts=E.outcome==="interrupt"?E.interrupts.map(_=>{if(_.subagentRunId!==null)return _;let C={..._};return delete C.subagentRunId,C}):[]),f()}case v.RUN_ERROR:return m(await oe(r,a,s,(g,E,y)=>g.onRunErrorEvent?.({event:p,messages:E,state:y,agent:n,input:t}))),f();case v.STEP_STARTED:return m(await oe(r,a,s,(g,E,y)=>g.onStepStartedEvent?.({event:p,messages:E,state:y,agent:n,input:t}))),f();case v.STEP_FINISHED:return m(await oe(r,a,s,(g,E,y)=>g.onStepFinishedEvent?.({event:p,messages:E,state:y,agent:n,input:t}))),f();case v.TEXT_MESSAGE_CHUNK:throw Error("TEXT_MESSAGE_CHUNK must be transformed before being applied");case v.TOOL_CALL_CHUNK:throw Error("TOOL_CALL_CHUNK must be transformed before being applied");case v.REASONING_START:return m(await oe(r,a,s,(g,E,y)=>g.onReasoningStartEvent?.({event:p,messages:E,state:y,agent:n,input:t}))),f();case v.REASONING_MESSAGE_START:{let g=await oe(r,a,s,(E,y,_)=>E.onReasoningMessageStartEvent?.({event:p,messages:y,state:_,agent:n,input:t}));if(m(g),g.stopPropagation!==!0){let{messageId:E,subagentRunId:y}=p,_=a.find(T=>T.id===E);if(_?.role==="activity")return console.warn(`REASONING_MESSAGE_START: Message '${E}' is an activity message \u2014 message ids must be unique across activity and reasoning messages`),f();let C=_;if(!C){let T={id:E,role:"reasoning",content:"",...y!=null&&{subagentRunId:y}};a.push(T),C=T}let w=qe(C,p);(!_||w)&&m({messages:a})}return f()}case v.REASONING_MESSAGE_CONTENT:{let{messageId:g,delta:E}=p,y=a.find(C=>C.id===g);if(!y)return console.warn(`REASONING_MESSAGE_CONTENT: No message found with ID '${g}'`),f();if(y.role==="activity")return console.warn(`REASONING_MESSAGE_CONTENT: Message '${g}' is an activity message \u2014 message ids must be unique across activity and reasoning messages`),f();let _=await oe(r,a,s,(C,w,T)=>C.onReasoningMessageContentEvent?.({event:p,messages:w,state:T,agent:n,input:t,reasoningMessageBuffer:typeof y.content=="string"?y.content:""}));return m(_),_.stopPropagation!==!0&&(y.content=`${typeof y.content=="string"?y.content:""}${E}`,qe(y,p),m({messages:a})),f()}case v.REASONING_MESSAGE_END:{let{messageId:g}=p,E=a.find(_=>_.id===g);if(!E)return console.warn(`REASONING_MESSAGE_END: No message found with ID '${g}'`),f();if(E.role==="activity")return console.warn(`REASONING_MESSAGE_END: Message '${g}' is an activity message \u2014 message ids must be unique across activity and reasoning messages`),f();let y=await oe(r,a,s,(_,C,w)=>_.onReasoningMessageEndEvent?.({event:p,messages:C,state:w,agent:n,input:t,reasoningMessageBuffer:typeof E.content=="string"?E.content:""}));return m(y),y.stopPropagation!==!0&&qe(E,p)&&m({messages:a}),await Promise.all(r.map(_=>{_.onNewMessage?.({message:E,messages:a,state:s,agent:n,input:t})})),f()}case v.REASONING_MESSAGE_CHUNK:throw Error("REASONING_MESSAGE_CHUNK must be transformed before being applied");case v.REASONING_END:return m(await oe(r,a,s,(g,E,y)=>g.onReasoningEndEvent?.({event:p,messages:E,state:y,agent:n,input:t}))),f();case v.REASONING_ENCRYPTED_VALUE:{let{subtype:g,entityId:E,encryptedValue:y}=p,_=await oe(r,a,s,(C,w,T)=>C.onReasoningEncryptedValueEvent?.({event:p,messages:w,state:T,agent:n,input:t}));if(m(_),_.stopPropagation!==!0){let C=!1;if(g==="tool-call"){for(let w of a)if(w.role==="assistant"&&w.toolCalls){let T=w.toolCalls.find(S=>S.id===E);if(T){T.encryptedValue=y,C=!0;break}}}else{let w=a.find(T=>T.id===E);w?.role!=="activity"&&w&&(w.encryptedValue=y,C=!0)}C&&(l.messages=a)}return f()}case v.SUBAGENT_STARTED:return m(await oe(r,a,s,(g,E,y)=>g.onSubagentStartedEvent?.({event:p,messages:E,state:y,agent:n,input:t}))),f();case v.SUBAGENT_FINISHED:return m(await oe(r,a,s,(g,E,y)=>g.onSubagentFinishedEvent?.({event:p,messages:E,state:y,agent:n,input:t}))),f();case v.SUBAGENT_ERROR:return m(await oe(r,a,s,(g,E,y)=>g.onSubagentErrorEvent?.({event:p,messages:E,state:y,agent:n,input:t}))),f()}return p.type,f()}),Ir(),r.length>0?ec({}):p=>p)};function Va(t,e){typeof process<"u"&&process.env!==void 0&&process.env.SUPPRESS_TRANSFORMATION_WARNINGS||console.warn(`[ag-ui][compat] Converting deprecated ${t} to ${e}. The old shape leaves the protocol after its shim window \u2014 see the repo-root DEPRECATIONS.md. Set SUPPRESS_TRANSFORMATION_WARNINGS=true to silence.`)}var vu=t=>e=>{let n=vn(t),r=new Set,o=new Set,i=new Set,a=new Set,s={message:new Map,toolCall:new Map,activity:new Map,reasoning:new Map},l=!1,c=!1,u=!1,h=new Map,m=w=>{let T=h.get(w);return T||(T=new Map,h.set(w,T)),T},f=()=>{for(let w of h.values())if(w.size>0)return!0;return!1},p=new Map,b=new Set,g=!1,E=!1,y=()=>{E=!1,r.clear(),o.clear(),i.clear(),a.clear(),s.message.clear(),s.toolCall.clear(),s.activity.clear(),s.reasoning.clear(),h.clear(),p.clear(),b.clear(),l=!1,c=!1,g=!0},_=(w,T)=>{let S=w??[];if(Array.isArray(S))for(let A of S){if(!A||typeof A.id!="string")continue;if(A.subagentRunId===null)return new V(`Cannot send a message (id '${A.id}') with 'subagentRunId: null'. The field is optional \u2014 omit it entirely.`);let O=A.role==="reasoning"?s.reasoning:A.role==="activity"?s.activity:s.message;(T||!O.has(A.id))&&O.set(A.id,{subagentRunId:A.subagentRunId});for(let q of A.toolCalls??[])q&&typeof q.id=="string"&&(T||!s.toolCall.has(q.id))&&s.toolCall.set(q.id,{subagentRunId:A.subagentRunId??void 0})}},C=(w,T,S,A,O)=>{if(T!==void 0&&S&&S.subagentRunId!==T)return new V(`Cannot send '${w}': subagentRunId '${T}' does not match the ${A} '${O}' opener's subagent '${S.subagentRunId??"(the parent agent)"}'.`)};return e.pipe(Ze(w=>{let T=w.type;if(n?.event("VERIFY","Event:",w,{type:w.type}),c&&T!==v.RUN_STARTED)return F(()=>new V(`Cannot send event type '${T}': The run has already errored with 'RUN_ERROR'. No further events can be sent.`));if(l&&T!==v.RUN_ERROR&&T!==v.RUN_STARTED)return F(()=>new V(`Cannot send event type '${T}': The run has already finished with 'RUN_FINISHED'. Start a new run with 'RUN_STARTED'.`));if(u){if(T===v.RUN_STARTED){if(g&&!l&&!c)return F(()=>new V("Cannot send 'RUN_STARTED' while a run is still active. The previous run must be finished with 'RUN_FINISHED' before starting a new run."));(l||c)&&y()}}else if(u=!0,T!==v.RUN_STARTED&&T!==v.RUN_ERROR)return F(()=>new V("First event must be 'RUN_STARTED'"));if(w.subagentRunId===null){E||(E=!0,Va("subagentRunId: null","an absent field"));let{subagentRunId:S,...A}=w;w=A}if(T===v.SUBAGENT_STARTED||T===v.SUBAGENT_FINISHED||T===v.SUBAGENT_ERROR){let S=T===v.SUBAGENT_STARTED?["description","parentSubagentRunId","parentToolCallId","parentMessageId"]:T===v.SUBAGENT_FINISHED?["outcome"]:["code"];for(let O of S)if(w[O]===null)return F(()=>new V(`Cannot send '${T}' with '${O}: null'. The field is optional \u2014 omit it entirely.`));let A=w.outcome;if(A!=null&&A.type!=="success"&&A.type!=="suspended")return F(()=>new V(`Cannot send '${T}' with outcome type '${String(A.type)}'. The outcome is either { type: "success" } or { type: "suspended" }.`));if(A&&A.interruptIds===null)return F(()=>new V(`Cannot send '${T}' with 'outcome.interruptIds: null'. The field is optional \u2014 omit it entirely.`));if(A&&Array.isArray(A.interruptIds)&&A.interruptIds.some(O=>typeof O!="string"))return F(()=>new V(`Cannot send '${T}' with a non-string entry in 'outcome.interruptIds'. Interrupt ids are strings.`))}if(T===v.RUN_FINISHED){let S=w.outcome;if(S?.type==="interrupt"&&Array.isArray(S.interrupts)){for(let A of S.interrupts)if(A&&A.subagentRunId===null)return F(()=>new V(`Cannot send 'RUN_FINISHED' with an interrupt (id '${A.id}') carrying 'subagentRunId: null'. The field is optional \u2014 omit it entirely.`))}}switch(T){case v.TEXT_MESSAGE_START:{let S=w.messageId;if(r.has(S))return F(()=>new V(`Cannot send 'TEXT_MESSAGE_START' event: A text message with ID '${S}' is already in progress. Complete it with 'TEXT_MESSAGE_END' first.`));let A=s.message.get(S);if(A){let O=C(T,w.subagentRunId,A,"message",S);if(O)return F(()=>O)}return r.add(S),A||s.message.set(S,{subagentRunId:w.subagentRunId}),se(w)}case v.TEXT_MESSAGE_CONTENT:{let S=w.messageId;if(!r.has(S))return F(()=>new V(`Cannot send 'TEXT_MESSAGE_CONTENT' event: No active text message found with ID '${S}'. Start a text message with 'TEXT_MESSAGE_START' first.`));let A=C(T,w.subagentRunId,s.message.get(S),"message",S);return A?F(()=>A):se(w)}case v.TEXT_MESSAGE_END:{let S=w.messageId;if(!r.has(S))return F(()=>new V(`Cannot send 'TEXT_MESSAGE_END' event: No active text message found with ID '${S}'. A 'TEXT_MESSAGE_START' event must be sent first.`));let A=C(T,w.subagentRunId,s.message.get(S),"message",S);return A?F(()=>A):(r.delete(S),se(w))}case v.TOOL_CALL_START:{let S=w.toolCallId;if(o.has(S))return F(()=>new V(`Cannot send 'TOOL_CALL_START' event: A tool call with ID '${S}' is already in progress. Complete it with 'TOOL_CALL_END' first.`));let A=w.parentMessageId,O=w.subagentRunId,q;if(A!==void 0){let et=s.message.get(A);if(et){if(O!==void 0&&O!==et.subagentRunId)return F(()=>new V(`Cannot send 'TOOL_CALL_START': subagentRunId '${O}' does not match its parent message '${A}' owner '${et.subagentRunId??"(the parent agent)"}'. A tool call belongs to the message that carries it.`));q=et}}let _e=s.toolCall.get(S);if(_e){let et=C(T,O,_e,"tool call",S);if(et)return F(()=>et);if(O===void 0&&q&&q.subagentRunId!==_e.subagentRunId)return F(()=>new V(`Cannot send 'TOOL_CALL_START': tool call '${S}' is owned by '${_e.subagentRunId??"(the parent agent)"}' but its parent message '${A}' is owned by '${q.subagentRunId??"(the parent agent)"}'. A tool call belongs to the message that carries it.`))}return o.add(S),_e||s.toolCall.set(S,O===void 0?q??{subagentRunId:void 0}:{subagentRunId:O}),se(w)}case v.TOOL_CALL_ARGS:{let S=w.toolCallId;if(!o.has(S))return F(()=>new V(`Cannot send 'TOOL_CALL_ARGS' event: No active tool call found with ID '${S}'. Start a tool call with 'TOOL_CALL_START' first.`));let A=C(T,w.subagentRunId,s.toolCall.get(S),"tool call",S);return A?F(()=>A):se(w)}case v.TOOL_CALL_END:{let S=w.toolCallId;if(!o.has(S))return F(()=>new V(`Cannot send 'TOOL_CALL_END' event: No active tool call found with ID '${S}'. A 'TOOL_CALL_START' event must be sent first.`));let A=C(T,w.subagentRunId,s.toolCall.get(S),"tool call",S);return A?F(()=>A):(o.delete(S),se(w))}case v.STEP_STARTED:{let S=w.stepName,A=w.subagentRunId;return m(A).has(S)?F(()=>new V(`Step "${S}" is already active for 'STEP_STARTED'${A===void 0?"":` in subagent '${A}'`}`)):(m(A).set(S,!0),se(w))}case v.STEP_FINISHED:{let S=w.stepName,A=w.subagentRunId;if(!m(A).has(S)){let O,q=!1;for(let[_e,et]of h)if(_e!==A&&et.has(S)){O=_e,q=!0;break}return F(q?()=>new V(`Cannot send 'STEP_FINISHED' for step "${S}" attributed to ${A===void 0?"the parent agent":`subagent '${A}'`}: that step is open under ${O===void 0?"the parent agent":`subagent '${O}'`}. A step must be finished by whoever started it.`):()=>new V(`Cannot send 'STEP_FINISHED' for step "${S}" that was not started`))}return m(A).delete(S),se(w)}case v.ACTIVITY_SNAPSHOT:{let S=w.messageId;return(!s.activity.has(S)||w.replace!==!1)&&s.activity.set(S,{subagentRunId:w.subagentRunId}),se(w)}case v.TOOL_CALL_RESULT:{let S=w.messageId;return typeof S=="string"&&s.message.set(S,{subagentRunId:w.subagentRunId}),se(w)}case v.REASONING_START:case v.REASONING_MESSAGE_START:{let S=w.messageId,A=T===v.REASONING_START,O=A?i:a;if(O.has(S))return F(()=>new V(A?`Cannot send 'REASONING_START' event: A reasoning span with ID '${S}' is already in progress. Complete it with 'REASONING_END' first.`:`Cannot send 'REASONING_MESSAGE_START' event: A reasoning message with ID '${S}' is already in progress. Complete it with 'REASONING_MESSAGE_END' first.`));let q=s.reasoning.get(S);if(q){let _e=C(T,w.subagentRunId,q,"reasoning message",S);if(_e)return F(()=>_e)}return O.add(S),q||s.reasoning.set(S,{subagentRunId:w.subagentRunId}),se(w)}case v.REASONING_MESSAGE_CONTENT:case v.REASONING_MESSAGE_END:case v.REASONING_END:{let S=w.messageId,A=T===v.REASONING_END,O=A?i:a;if(!O.has(S))return F(()=>new V(A?`Cannot send 'REASONING_END' event: No active reasoning span found with ID '${S}'. A 'REASONING_START' event must be sent first.`:`Cannot send '${T}' event: No active reasoning message found with ID '${S}'. Start a reasoning message with 'REASONING_MESSAGE_START' first.`));let q=C(T,w.subagentRunId,s.reasoning.get(S),"reasoning message",S);return q?F(()=>q):((T===v.REASONING_END||T===v.REASONING_MESSAGE_END)&&O.delete(S),se(w))}case v.REASONING_ENCRYPTED_VALUE:{let S=w.entityId,A=w.subtype,O=A==="tool-call"?s.toolCall.get(S):A==="message"?s.message.get(S)??s.reasoning.get(S):s.reasoning.get(S),q=A==="tool-call"?"tool call":A==="message"?"message":"reasoning message",_e=C(T,w.subagentRunId,O,q,S);return _e?F(()=>_e):se(w)}case v.ACTIVITY_DELTA:{let S=w.messageId,A=C(T,w.subagentRunId,s.activity.get(S),"activity",S);return A?F(()=>A):se(w)}case v.SUBAGENT_STARTED:{if(typeof w.subagentRunId!="string")return F(()=>new V("Cannot send 'SUBAGENT_STARTED' without a 'subagentRunId'."));if(typeof w.name!="string")return F(()=>new V("Cannot send 'SUBAGENT_STARTED' without a 'name'."));let S=w.subagentRunId,A=w.parentSubagentRunId;return p.has(S)?F(()=>new V(`Cannot send 'SUBAGENT_STARTED': subagent '${S}' is already active. Finish it with 'SUBAGENT_FINISHED' first.`)):b.has(S)?F(()=>new V(`Cannot send 'SUBAGENT_STARTED': subagent '${S}' has already finished in this run. Subagent IDs are per-invocation and cannot be reused.`)):A!==void 0&&!p.has(A)&&!b.has(A)?F(()=>new V(`Cannot send 'SUBAGENT_STARTED': parentSubagentRunId '${A}' has not been started in this run.`)):(p.set(S,!0),se(w))}case v.SUBAGENT_FINISHED:case v.SUBAGENT_ERROR:{if(typeof w.subagentRunId!="string")return F(()=>new V(`Cannot send '${T}' without a 'subagentRunId'.`));if(T===v.SUBAGENT_ERROR&&typeof w.message!="string")return F(()=>new V("Cannot send 'SUBAGENT_ERROR' without a 'message'."));let S=w.subagentRunId;return p.has(S)?(p.delete(S),b.add(S),se(w)):F(()=>new V(`Cannot send '${T}': no active subagent found with ID '${S}'. A 'SUBAGENT_STARTED' event must be sent first.`))}case v.MESSAGES_SNAPSHOT:{let S=_(w.messages,!0);if(S)return F(()=>S)}return se(w);case v.RUN_STARTED:g=!0;{let S=_((w.input??{}).messages,!1);if(S)return F(()=>S)}return se(w);case v.RUN_FINISHED:if(f()){let S=[];for(let[O,q]of h)for(let _e of q.keys())S.push(O===void 0?_e:`${_e} (subagent '${O}')`);let A=S.join(", ");return F(()=>new V(`Cannot send 'RUN_FINISHED' while steps are still active: ${A}`))}if(r.size>0){let S=Array.from(r.keys()).join(", ");return F(()=>new V(`Cannot send 'RUN_FINISHED' while text messages are still active: ${S}`))}if(a.size>0){let S=Array.from(a.keys()).join(", ");return F(()=>new V(`Cannot send 'RUN_FINISHED' while reasoning messages are still active: ${S}`))}if(i.size>0){let S=Array.from(i.keys()).join(", ");return F(()=>new V(`Cannot send 'RUN_FINISHED' while reasoning spans are still active: ${S}`))}if(o.size>0){let S=Array.from(o.keys()).join(", ");return F(()=>new V(`Cannot send 'RUN_FINISHED' while tool calls are still active: ${S}`))}if(p.size>0){let S=Array.from(p.keys()).join(", ");return F(()=>new V(`Cannot send 'RUN_FINISHED' while subagents are still active: ${S}`))}return l=!0,se(w);case v.RUN_ERROR:return c=!0,se(w);case v.CUSTOM:return se(w);default:return se(w)}}))},gn=(function(t){return t.HEADERS="headers",t.DATA="data",t})({}),U0=t=>nn(()=>At(t())).pipe(tc(e=>{if(!e.ok){let o=e.headers.get("content-type")||"";return At(e.text()).pipe(Ze(i=>{let a=i;if(o.includes("application/json"))try{a=JSON.parse(i)}catch{}let s=Error(`HTTP ${e.status}: ${typeof a=="string"?a:JSON.stringify(a)}`);return s.status=e.status,s.payload=a,F(()=>s)}))}let n={type:gn.HEADERS,status:e.status,headers:e.headers},r=e.body?.getReader();return r?new he(o=>{let i=!1;return o.next(n),(async()=>{try{for(;!o.closed;){let{done:a,value:s}=await r.read();if(a){i=!0;break}let l={type:gn.DATA,data:s};o.next(l)}o.complete()}catch(a){i=!0,o.error(a)}})(),()=>{i||r.cancel().catch(a=>{a?.name!=="AbortError"&&console.warn("Failed to cancel HTTP response stream:",a)})}}):F(()=>Error("Failed to getReader() from response"))})),Mv=10*1024*1024,H0=(t,e)=>{let n=vn(e),r=new wt,o=new TextDecoder("utf-8",{fatal:!1}),i="";t.subscribe({next:s=>{if(s.type!==gn.HEADERS&&s.type===gn.DATA&&s.data){let l=o.decode(s.data,{stream:!0});i+=l;let c=i.split(/\n\n/);i=c.pop()||"";for(let u of c)a(u);if(i.length>Mv){r.error(Error(`SSE buffer size exceeded maximum limit of ${Mv/(1024*1024)} MB`));return}}},error:s=>r.error(s),complete:()=>{i&&(i+=o.decode(),a(i)),r.complete()}});function a(s){let l=s.split(`
`),c=[];for(let u of l)u.startsWith("data:")&&c.push(u.slice(5).replace(/^ /,""));if(c.length>0)try{let u=c.join(`
`),h=JSON.parse(u);n?.event("SSE","Event received:",h,{type:h?.type}),r.next(h)}catch(u){r.error(u)}}return r.asObservable()},zv=10*1024*1024,F0=()=>typeof process<"u"&&process.env!==void 0&&!!process.env.SUPPRESS_TRANSFORMATION_WARNINGS,G0=(t,e)=>{let n=vn(e),r=new wt,o=new Uint8Array,i=!1;t.subscribe({next:s=>{if(s.type!==gn.HEADERS&&s.type===gn.DATA&&s.data){let l=new Uint8Array(o.length+s.data.length);l.set(o,0),l.set(s.data,o.length),o=l,a()}},error:s=>r.error(s),complete:()=>{if(a(),!i){if(o.length>0){r.error(Error(`The binary stream ended mid-frame: ${o.length} trailing bytes could not be read as a complete message.`));return}r.complete()}}});function a(){if(!i)for(;o.length>=4;){let s=4+new DataView(o.buffer,o.byteOffset,4).getUint32(0,!1);if(s>zv){r.error(Error(`Protobuf message size exceeded maximum limit of ${zv/(1024*1024)} MB`));return}if(o.length<s)break;try{let l=o.slice(4,s),c=Iv(l);n?.event("PROTO","Event received:",c,{type:c.type}),r.next(c)}catch(l){if(l instanceof uu)F0()||console.warn("[ag-ui][proto] Dropped an event this build does not know: the protocol has a variant this SDK predates.");else{let c=l instanceof Error?l.message:String(l);i=!0,r.error(Error(`Failed to decode protocol buffer message: ${c}`));return}}o=o.slice(s)}}return r.asObservable()},Z0=(t,e)=>{let n=vn(e),r=new wt,o=new ai(1),i=!1,a,s=!1,l=()=>{s=!0,a?.unsubscribe()},c=h=>{l(),r.error(h)},u=()=>{l(),r.complete()};return a=t.subscribe({next:h=>{if(o.next(h),h.type===gn.HEADERS&&!i){i=!0;let m=h.headers.get("content-type");n?.lifecycle("HTTP","Stream format detected:",{contentType:m,parser:m===du?"protobuf":"sse"}),m===du?G0(o,n).subscribe({next:f=>r.next(f),error:f=>c(f),complete:()=>u()}):H0(o,n).subscribe({next:f=>{if(typeof f!="object"||!f||Array.isArray(f)){let b=Error("Invalid event: the frame is not a JSON object.");n?.event("HTTP","Event invalid:",{json:f,error:String(b)}),c(b);return}let p=f;if(typeof p.type!="string"||p.type.length===0){let b=Error("Invalid event: the frame carries no event type.");n?.event("HTTP","Event invalid:",{json:f,error:String(b)}),c(b);return}n?.event("HTTP","Event received:",f,{type:p.type}),r.next(f)},error:f=>{if(f?.name==="AbortError"){r.next({type:v.RUN_ERROR,message:f.message||"Request aborted",code:"abort",rawEvent:f}),u();return}return c(f)},complete:()=>u()})}else i||c(Error("No headers event received before data events"))},error:h=>{o.error(h),c(h)},complete:()=>{o.complete()}}),s&&a.unsubscribe(),r.asObservable()},Le={TextMessageStart:"TextMessageStart",TextMessageContent:"TextMessageContent",TextMessageEnd:"TextMessageEnd",ActionExecutionStart:"ActionExecutionStart",ActionExecutionArgs:"ActionExecutionArgs",ActionExecutionEnd:"ActionExecutionEnd",ActionExecutionResult:"ActionExecutionResult",AgentStateMessage:"AgentStateMessage",MetaEvent:"MetaEvent",RunStarted:"RunStarted",RunFinished:"RunFinished",RunError:"RunError",NodeStarted:"NodeStarted",NodeFinished:"NodeFinished"},B0=t=>{if(typeof t=="string")return t;if(!Array.isArray(t))return;let e=t.filter(n=>n.type==="text").map(n=>n.text).filter(n=>n.length>0);if(e.length!==0)return e.join(`
`)};function Kv(t,e){return Ip(e)&&Gr(`[ag-ui][legacy] The result of tool call '${t}' carries content parts the legacy protocol cannot represent; only its text parts are bridged and the rest is dropped.`),$n(e)}var Gr=t=>{typeof process<"u"&&process.env!==void 0&&process.env.SUPPRESS_TRANSFORMATION_WARNINGS||console.warn(t)},V0=(t,e,n)=>r=>{let o={},i=!0,a=!0,s="",l=null,c=null,u=[],h={},m=!1,f=p=>{typeof p=="object"&&p&&("messages"in p&&delete p.messages,o=p)};return r.pipe(Ze(p=>{switch(p.type){case v.TEXT_MESSAGE_START:{let b=p;return[{type:Le.TextMessageStart,messageId:b.messageId,role:b.role}]}case v.TEXT_MESSAGE_CONTENT:{let b=p;return[{type:Le.TextMessageContent,messageId:b.messageId,content:b.delta}]}case v.TEXT_MESSAGE_END:{let b=p;return[{type:Le.TextMessageEnd,messageId:b.messageId}]}case v.TOOL_CALL_START:{let b=p;return u.push({id:b.toolCallId,type:"function",function:{name:b.toolCallName,arguments:""}}),a=!0,h[b.toolCallId]=b.toolCallName,[{type:Le.ActionExecutionStart,actionExecutionId:b.toolCallId,actionName:b.toolCallName,parentMessageId:b.parentMessageId}]}case v.TOOL_CALL_ARGS:{let b=p,g=u.find(y=>y.id===b.toolCallId);if(!g)return Gr(`[ag-ui][legacy] TOOL_CALL_ARGS: No tool call found with ID '${b.toolCallId}'`),[];g.function.arguments+=b.delta;let E=!1;if(c){let y=c.find(_=>_.tool==g.function.name);if(y)try{let _=JSON.parse(_i(g.function.arguments));y.tool_argument&&y.tool_argument in _?(f({...o,[y.state_key]:_[y.tool_argument]}),E=!0):y.tool_argument||(f({...o,[y.state_key]:_}),E=!0)}catch{}}return[{type:Le.ActionExecutionArgs,actionExecutionId:b.toolCallId,args:b.delta},...E?[{type:Le.AgentStateMessage,threadId:t,agentName:n,nodeName:s,runId:e,running:i,role:"assistant",state:JSON.stringify(o),active:a}]:[]]}case v.TOOL_CALL_END:{let b=p;return[{type:Le.ActionExecutionEnd,actionExecutionId:b.toolCallId}]}case v.TOOL_CALL_RESULT:{let b=p,g=h[b.toolCallId];return(g===void 0||g==="")&&Gr(`[ag-ui][legacy] No usable tool name was seen for tool call '${b.toolCallId}' (${g===void 0?"no TOOL_CALL_START reached this bridge":"its TOOL_CALL_START carried an empty toolCallName"}), so its result is being bridged with the fabricated action name "unknown". Downstream consumers route on that name.`),[{type:Le.ActionExecutionResult,actionExecutionId:b.toolCallId,result:Kv(b.toolCallId,b.content),actionName:g||"unknown"}]}case v.RAW:return m||(m=!0,Gr("[ag-ui][legacy] Dropping RAW events: the legacy runtime protocol has no equivalent, so the provider payloads they carry do not reach the legacy stream. Reported once per stream.")),[];case v.CUSTOM:{let b=p;switch(b.name){case"Exit":i=!1;break;case"PredictState":c=b.value;break}return[{type:Le.MetaEvent,name:b.name,value:b.value}]}case v.STATE_SNAPSHOT:return f(p.snapshot),[{type:Le.AgentStateMessage,threadId:t,agentName:n,nodeName:s,runId:e,running:i,role:"assistant",state:JSON.stringify(o),active:a}];case v.STATE_DELTA:{let b=p,g;try{g=Jo.applyPatch(o,b.delta,!0,!1).newDocument}catch(E){let y=E instanceof Error?E.message:String(E);return Gr(`[ag-ui][legacy] Failed to apply state patch:
Current state: ${JSON.stringify(o,null,2)}
Patch operations: ${JSON.stringify(b.delta,null,2)}
Error: ${y}`),[]}return f(g),[{type:Le.AgentStateMessage,threadId:t,agentName:n,nodeName:s,runId:e,running:i,role:"assistant",state:JSON.stringify(o),active:a}]}case v.MESSAGES_SNAPSHOT:return l=p.messages,[{type:Le.AgentStateMessage,threadId:t,agentName:n,nodeName:s,runId:e,running:i,role:"assistant",state:JSON.stringify({...o,...l?{messages:l}:{}}),active:!0}];case v.RUN_STARTED:return[];case v.RUN_FINISHED:{if(l&&(o.messages=l),Object.keys(o).length===0)return[];let b=null;if(l)try{b=j0(l)}catch(g){return[{type:Le.RunError,message:g.message}]}return[{type:Le.AgentStateMessage,threadId:t,agentName:n,nodeName:s,runId:e,running:i,role:"assistant",state:JSON.stringify({...o,...b?{messages:b}:{}}),active:!1}]}case v.RUN_ERROR:{let b=p;return[{type:Le.RunError,message:b.message,code:b.code}]}case v.STEP_STARTED:return s=p.stepName,u=[],c=null,[{type:Le.AgentStateMessage,threadId:t,agentName:n,nodeName:s,runId:e,running:i,role:"assistant",state:JSON.stringify(o),active:!0}];case v.STEP_FINISHED:return u=[],c=null,[{type:Le.AgentStateMessage,threadId:t,agentName:n,nodeName:s,runId:e,running:i,role:"assistant",state:JSON.stringify(o),active:!1}];default:return[]}}))};function j0(t){let e=[];for(let n of t)if(n.role==="assistant"||n.role==="user"||n.role==="system"){let r=B0(n.content);if(r){let o={id:n.id,role:n.role,content:r};e.push(o)}if(n.role==="assistant"&&n.toolCalls&&n.toolCalls.length>0)for(let o of n.toolCalls){let i;try{i=JSON.parse(o.function.arguments)}catch(s){throw Error(`Failed to parse arguments for tool call '${o.id}' (${o.function.name}): ${s.message}`)}let a={id:o.id,name:o.function.name,arguments:i,parentMessageId:n.id};e.push(a)}}else if(n.role==="tool"){let r="unknown";for(let i of t)if(i.role==="assistant"&&i.toolCalls?.length){for(let a of i.toolCalls)if(a.id===n.toolCallId){r=a.function.name;break}}let o={id:n.id,result:Kv(n.toolCallId,n.content),actionExecutionId:n.toolCallId,actionName:r};e.push(o)}return e}var W0=t=>t.kind==="tool"?t.fields.toolCallId:t.fields.messageId,q0=t=>t==="tool"?"toolCallId":"messageId",Ua=(t,e,n,r,o)=>{if(r!==void 0&&r!==o)throw Error(`Cannot continue ${t} '${e}': chunk ${n} '${r}' does not match the open stream's ${n} ${o===void 0?"(absent)":`'${o}'`}.`)},Ga=(t,e)=>e.metadata===void 0?t:{...t,metadata:e.metadata},bu=(t,e)=>{let n=Ga(t,e);return e.rawEvent===void 0?n:{...n,rawEvent:e.rawEvent}},Cu=t=>new Set(Object.keys(t.shape)),Y0=Cu(Vc),X0=Cu(jc),K0=Cu(qc),yu=(t,e)=>{let n;for(let r of Object.keys(t))e.has(r)||((n??={})[r]=t[r]);return n},J0=t=>{typeof process<"u"&&process.env!==void 0&&process.env.SUPPRESS_TRANSFORMATION_WARNINGS||console.warn(`[ag-ui][transform] ${t} Set SUPPRESS_TRANSFORMATION_WARNINGS=true to silence.`)},wu=(t,e,n,r)=>{if(e===void 0||n||t.length===0)return;let o=t[t.length-1],i=Object.keys(e).filter(a=>Object.prototype.hasOwnProperty.call(o,a));i.length>0&&J0(`A ${r} carried ${i.map(a=>`'${a}'`).join(", ")}, which the synthesized ${String(o.type)} already describes. The synthesized value is kept and the chunk's is dropped \u2014 this stage does not judge a described field, so the producer's value cannot be substituted for its own.`),t[t.length-1]={...e,...o}},Za=t=>e=>{let n=vn(t),r=new Map,o=l=>{let c=r.get(l);if(!c)return[];switch(r.delete(l),c.kind){case"text":{let u={type:v.TEXT_MESSAGE_END,messageId:c.fields.messageId,...c.fields.subagentRunId!==void 0&&{subagentRunId:c.fields.subagentRunId}};return n?.event("TRANSFORM","TEXT_MESSAGE_END",u,{messageId:u.messageId}),[u]}case"tool":{let u={type:v.TOOL_CALL_END,toolCallId:c.fields.toolCallId,...c.fields.subagentRunId!==void 0&&{subagentRunId:c.fields.subagentRunId}};return n?.event("TRANSFORM","TOOL_CALL_END",u,{toolCallId:u.toolCallId}),[u]}case"reasoning":{let u={type:v.REASONING_MESSAGE_END,messageId:c.fields.messageId,...c.fields.subagentRunId!==void 0&&{subagentRunId:c.fields.subagentRunId}};return n?.event("TRANSFORM","REASONING_MESSAGE_END",u,{messageId:u.messageId}),[u]}}},i=()=>[...r.keys()].flatMap(l=>o(l)),a=(l,c)=>{for(let[u,h]of r)if(h.kind===l&&W0(h)===c)return{owner:u}},s=(l,c,u,h,m)=>{if(c!==void 0){let p=a(l,c);if(p){if(u!==void 0&&u!==p.owner)throw Error(`Cannot continue ${m} '${c}': chunk subagentRunId '${u}' does not match the open stream's subagent '${p.owner??"(the parent agent)"}'.`);return p.owner}return u}if(u!==void 0)return u;if(r.get(void 0)?.kind===l)return;let f=[...r.entries()].filter(([,p])=>p.kind===l);if(f.length===1)return f[0][0];if(f.length>1)throw Error(`Ambiguous ${h}: it carries neither a ${q0(l)} nor a subagentRunId, but ${f.length} lanes have an open ${m}. Attribute the chunk to the subagent it belongs to.`)};return e.pipe(Ze(l=>{switch(l.type){case v.TEXT_MESSAGE_START:case v.TEXT_MESSAGE_CONTENT:case v.TEXT_MESSAGE_END:case v.TOOL_CALL_START:case v.TOOL_CALL_ARGS:case v.TOOL_CALL_END:case v.TOOL_CALL_RESULT:case v.STATE_SNAPSHOT:case v.STATE_DELTA:case v.CUSTOM:case v.STEP_STARTED:case v.STEP_FINISHED:case v.REASONING_START:case v.REASONING_MESSAGE_START:case v.REASONING_MESSAGE_CONTENT:case v.REASONING_MESSAGE_END:case v.REASONING_END:return[...o(l.subagentRunId??void 0),l];case v.RUN_STARTED:case v.RUN_FINISHED:case v.RUN_ERROR:case v.MESSAGES_SNAPSHOT:return[...i(),l];case v.RAW:case v.ACTIVITY_SNAPSHOT:case v.ACTIVITY_DELTA:case v.REASONING_ENCRYPTED_VALUE:case v.SUBAGENT_STARTED:return[l];case v.SUBAGENT_FINISHED:case v.SUBAGENT_ERROR:{let c=l.subagentRunId;return c==null?[l]:[...o(c),l]}case v.TEXT_MESSAGE_CHUNK:{let c=l,u=yu(l,Y0),h=s("text",c.messageId,c.subagentRunId??void 0,"TEXT_MESSAGE_CHUNK","text message"),m=r.get(h),f=[],p=!1,b;if(m?.kind==="text"&&(c.messageId===void 0||c.messageId===m.fields.messageId))Ua("text message",m.fields.messageId,"role",c.role,m.fields.role),Ua("text message",m.fields.messageId,"name",c.name,m.fields.name),b=m.fields;else{if(f.push(...o(h)),c.messageId===void 0)throw Error("First TEXT_MESSAGE_CHUNK must have a messageId");b={messageId:c.messageId,role:c.role===void 0?"assistant":c.role,name:c.name,subagentRunId:c.subagentRunId},r.set(h,{kind:"text",fields:b});let g=Ga({type:v.TEXT_MESSAGE_START,messageId:c.messageId,role:b.role,...c.name!==void 0&&{name:c.name},...c.subagentRunId!==void 0&&{subagentRunId:c.subagentRunId}},c);f.push(g),n?.event("TRANSFORM","TEXT_MESSAGE_START",g,{messageId:c.messageId})}if(c.delta!==void 0||c.rawEvent!==void 0){let g=c.subagentRunId===void 0?b.subagentRunId:c.subagentRunId,E=bu({...u,type:v.TEXT_MESSAGE_CONTENT,messageId:b.messageId,delta:c.delta===void 0?"":c.delta,...g!==void 0&&{subagentRunId:g}},c);f.push(E),p=!0,n?.event("TRANSFORM","TEXT_MESSAGE_CONTENT",E,{messageId:b.messageId})}if(f.length===0&&(c.metadata!==void 0||c.rawEvent!==void 0||c.subagentRunId===null||u!==void 0)){let g=c.subagentRunId===void 0?b.subagentRunId:c.subagentRunId;f.push({...u,type:v.TEXT_MESSAGE_CONTENT,messageId:b.messageId,delta:"",...c.metadata!==void 0&&{metadata:c.metadata},...c.rawEvent!==void 0&&{rawEvent:c.rawEvent},...g!==void 0&&{subagentRunId:g}}),p=!0}return wu(f,u,p,"TEXT_MESSAGE_CHUNK"),f}case v.TOOL_CALL_CHUNK:{let c=l,u=yu(l,X0),h=s("tool",c.toolCallId,c.subagentRunId??void 0,"TOOL_CALL_CHUNK","tool call"),m=r.get(h),f=[],p=!1,b;if(m?.kind==="tool"&&(c.toolCallId===void 0||c.toolCallId===m.fields.toolCallId))Ua("tool call",m.fields.toolCallId,"toolCallName",c.toolCallName,m.fields.toolCallName),Ua("tool call",m.fields.toolCallId,"parentMessageId",c.parentMessageId,m.fields.parentMessageId),b=m.fields;else{if(f.push(...o(h)),c.toolCallId===void 0)throw Error("First TOOL_CALL_CHUNK must have a toolCallId");if(c.toolCallName===void 0)throw Error("First TOOL_CALL_CHUNK must have a toolCallName");b={toolCallId:c.toolCallId,toolCallName:c.toolCallName,parentMessageId:c.parentMessageId,subagentRunId:c.subagentRunId},r.set(h,{kind:"tool",fields:b});let g=Ga({type:v.TOOL_CALL_START,toolCallId:c.toolCallId,toolCallName:c.toolCallName,...c.parentMessageId!==void 0&&{parentMessageId:c.parentMessageId},...c.subagentRunId!==void 0&&{subagentRunId:c.subagentRunId}},c);f.push(g),n?.event("TRANSFORM","TOOL_CALL_START",g,{toolCallId:c.toolCallId,toolCallName:c.toolCallName})}if(c.delta!==void 0||c.rawEvent!==void 0){let g=c.subagentRunId===void 0?b.subagentRunId:c.subagentRunId,E=bu({...u,type:v.TOOL_CALL_ARGS,toolCallId:b.toolCallId,delta:c.delta===void 0?"":c.delta,...g!==void 0&&{subagentRunId:g}},c);f.push(E),p=!0,n?.event("TRANSFORM","TOOL_CALL_ARGS",E,{toolCallId:b.toolCallId})}if(f.length===0&&(c.metadata!==void 0||c.rawEvent!==void 0||c.subagentRunId===null||u!==void 0)){let g=c.subagentRunId===void 0?b.subagentRunId:c.subagentRunId;f.push({...u,type:v.TOOL_CALL_ARGS,toolCallId:b.toolCallId,delta:"",...c.metadata!==void 0&&{metadata:c.metadata},...c.rawEvent!==void 0&&{rawEvent:c.rawEvent},...g!==void 0&&{subagentRunId:g}}),p=!0}return wu(f,u,p,"TOOL_CALL_CHUNK"),f}case v.REASONING_MESSAGE_CHUNK:{let c=l,u=yu(l,K0),h=s("reasoning",c.messageId,c.subagentRunId??void 0,"REASONING_MESSAGE_CHUNK","reasoning message"),m=r.get(h),f=[],p=!1,b;if(m?.kind==="reasoning"&&(c.messageId===void 0||c.messageId===m.fields.messageId))b=m.fields;else{if(f.push(...o(h)),c.messageId===void 0)throw Error("First REASONING_MESSAGE_CHUNK must have a messageId");b={messageId:c.messageId,subagentRunId:c.subagentRunId},r.set(h,{kind:"reasoning",fields:b});let g=Ga({type:v.REASONING_MESSAGE_START,messageId:c.messageId,role:"reasoning",...c.subagentRunId!==void 0&&{subagentRunId:c.subagentRunId}},c);f.push(g),n?.event("TRANSFORM","REASONING_MESSAGE_START",g,{messageId:c.messageId})}if(c.delta!==void 0||c.rawEvent!==void 0){let g=c.subagentRunId===void 0?b.subagentRunId:c.subagentRunId,E=bu({...u,type:v.REASONING_MESSAGE_CONTENT,messageId:b.messageId,delta:c.delta===void 0?"":c.delta,...g!==void 0&&{subagentRunId:g}},c);f.push(E),p=!0,n?.event("TRANSFORM","REASONING_MESSAGE_CONTENT",E,{messageId:b.messageId})}if(f.length===0&&(c.metadata!==void 0||c.rawEvent!==void 0||c.subagentRunId===null||u!==void 0)){let g=c.subagentRunId===void 0?b.subagentRunId:c.subagentRunId;f.push({...u,type:v.REASONING_MESSAGE_CONTENT,messageId:b.messageId,delta:"",...c.metadata!==void 0&&{metadata:c.metadata},...c.rawEvent!==void 0&&{rawEvent:c.rawEvent},...g!==void 0&&{subagentRunId:g}}),p=!0}return wu(f,u,p,"REASONING_MESSAGE_CHUNK"),f}}return l.type,[l]}),rn(()=>{i()}))},nr=Symbol("agui.strip.drop");function Zr(t){let e=t;for(;;){if(e instanceof Gi||e instanceof Hc||e instanceof Fc||e instanceof Bc||e instanceof Gc){e=e.unwrap();continue}if(e instanceof Zc){e=e.def.in;continue}if(e instanceof Qm){e=e.def.getter();continue}return e}}function Q0(t){let e=t.def;return typeof e?.discriminator=="string"?e.discriminator:void 0}function Jv(t){let e=t,n=Array.isArray(e.def?.values)?e.def.values:e.values?Array.from(e.values):void 0;return n&&n.length===1?n[0]:e.value}function e_(t){let e=Zr(t);return e instanceof Uc?Jv(e):void 0}function rr(t,e,n,r){let o=Zr(e);if(o instanceof Jn){if(typeof t!="object"||!t||Array.isArray(t))return t;let i=o.shape,a=t,s={},l=o.meta()?.specOpen===!0;for(let c of Object.keys(a)){let u=Object.prototype.hasOwnProperty.call(i,c)?i[c]:void 0;if(u===void 0){if(l){s[c]=a[c];continue}r.push(`${n}/${c}`);continue}let h=r.length,m=rr(a[c],u,`${n}/${c}`,r);if(m===nr){if(r.length=h,u.safeParse(void 0).success){r.push(`${n}/${c}`);continue}return nr}s[c]=m}return s}if(o instanceof Hi){if(!Array.isArray(t))return t;let i=o.element,a=[];return t.forEach((s,l)=>{let c=r.length,u=rr(s,i,`${n}/${l}`,r);if(u===nr){r.length=c,r.push(`${n}/${l}`);return}a.push(u)}),a}if(o instanceof Km){if(typeof t!="object"||!t||Array.isArray(t))return t;let i=o.def.valueType,a=t,s={};for(let l of Object.keys(a)){let c=r.length,u=rr(a[l],i,`${n}/${l}`,r);if(u===nr){r.length=c,r.push(`${n}/${l}`);continue}s[l]=u}return s}if(o instanceof Fi){let i=o.options,a=Q0(o);if(a!==void 0){if(typeof t!="object"||!t||Array.isArray(t))return t;let c=t[a];for(let u of i){let h=Zr(u);if(!(h instanceof Jn))continue;let m=h.shape;if(e_(m[a])===c)return rr(t,u,n,r)}return nr}let s=i.filter(c=>Zr(c)instanceof Jn),l=typeof t=="object"&&!!t&&!Array.isArray(t);if(s.length>1&&l)return t;for(let c of i){let u=Zr(c);if(u instanceof Hi&&Array.isArray(t)||u instanceof Jn&&l)return rr(t,c,n,r)}return t}return t}function Qv(t,e){let n=[],r=rr(t,e,"",n);if(r===nr)throw Error("Internal error: the stripper found the whole value unrecognisable, which the schemas are not supposed to allow \u2014 schema/stripper mismatch.");return{value:r,stripped:n}}var t_=new Set(Object.values(v));function n_(t){return t_.has(t.type)}var r_=new Map(Yc.options.map(t=>{let e=t.shape;return[String(Jv(e.type)),t]})),o_=()=>typeof process<"u"&&process.env!==void 0&&!!process.env.SUPPRESS_TRANSFORMATION_WARNINGS;function Iu(t){o_()||console.warn(`[ag-ui][enforce] ${t}`)}var Eu=t=>e=>{let n=vn(t);return e.pipe(Ze(r=>{if(!n_(r))return Iu(`Dropping unrecognised event '${String(r.type)}': no middleware translated it and the protocol does not describe it.`),n?.event("ENFORCE","Unrecognised event dropped:",r,{type:r.type}),tn;let o=r_.get(r.type);if(o===void 0)throw Error(`No validator for recognised event type '${String(r.type)}'`);let{value:i,stripped:a}=Qv(r,o);for(let s of a)Iu(`Removed unrecognised material at '${s}' on ${String(r.type)}. Nothing handled it; see the repo-root DEPRECATIONS.md if it is a retired shape.`);return se(o.parse(i))}))};function i_(t){let{value:e,stripped:n}=Qv($l(t,"RunAgentInput"),Bi);for(let r of n)Iu(`Removed unrecognised material at '${r}' from the outgoing input.`);return Bi.parse(e)}var Vr=class{runNext(t,e){return e.run(t).pipe(Za(!1))}runNextWithState(t,e){let n=ee(t.messages||[]),r=ee(t.state===void 0?{}:t.state),o=new ai;return Xv(t,o,e,[]).subscribe({next:i=>{i.messages!==void 0&&(n=i.messages),i.state!==void 0&&(r=i.state)},error:()=>{}}),this.runNext(t,e).pipe(Ei(async i=>(o.next(i),await new Promise(a=>setTimeout(a,0)),{event:i,messages:ee(n),state:ee(r)})))}},a_=class extends Vr{constructor(t){super(),this.fn=t}run(t,e){return this.fn(t,e)}};function s_(t){return t.startsWith("image/")?"image":t.startsWith("audio/")?"audio":t.startsWith("video/")?"video":"document"}function l_(t){return typeof t=="object"&&!!t&&"type"in t&&t.type==="binary"&&"mimeType"in t&&typeof t.mimeType=="string"}function c_(t){let e=s_(t.mimeType);return t.data?{type:e,source:{type:"data",value:t.data,mimeType:t.mimeType},...t.filename?{metadata:{filename:t.filename}}:{}}:t.url?{type:e,source:{type:"url",value:t.url,mimeType:t.mimeType},...t.filename?{metadata:{filename:t.filename}}:{}}:((typeof process>"u"||process.env===void 0||!process.env.SUPPRESS_TRANSFORMATION_WARNINGS)&&console.warn(`[ag-ui][compat] A binary content part carries only an id ('${t.id??""}') and cannot be converted to a modern media part; a 1.0 peer will not accept it. Provide data or a url. See the repo-root DEPRECATIONS.md.`),t)}function u_(t,e,n){if(typeof t!="object"||!t||!("type"in t)||t.type!==e.type||!("source"in t))return!1;let r=t.source;return typeof r!="object"||!r||!("type"in r)||r.type!==e.source.type||!("value"in r)||r.value!==e.source.value||!("mimeType"in r)||r.mimeType!==e.source.mimeType?!1:!n||"metadata"in t&&typeof t.metadata=="object"&&t.metadata!==null&&"filename"in t.metadata&&t.metadata.filename===n}function Lv(t){let e=t.content;if(!Array.isArray(e))return t;let n=e.flatMap(r=>{if(l_(r)){let o=c_(r);return o.type!=="binary"&&e.some(i=>u_(i,o,r.filename))?[]:[o]}return[r]});return{...t,content:n}}var xu="THINKING_START",Su="THINKING_END",Dv="THINKING_TEXT_MESSAGE_START",_u="THINKING_TEXT_MESSAGE_CONTENT",Tu="THINKING_TEXT_MESSAGE_END";function Nu(t){return typeof t=="object"&&!!t&&!Array.isArray(t)}var Ut={event:["rawEvent","subagentRunId"],[v.RUN_STARTED]:["parentRunId","input"],[v.RUN_FINISHED]:["result","outcome"],[v.RUN_ERROR]:["usage"],[v.SUBAGENT_FINISHED]:["result"],[v.TOOL_CALL_START]:["parentMessageId"],[v.TOOL_CALL_CHUNK]:["parentMessageId"],[v.TOOL_CALL_RESULT]:["role"],"RUN_FINISHED.outcome":["pendingToolCallIds"],"RUN_FINISHED.usage[]":["provider","reasoningTokens","cachedInputTokens","cacheWriteInputTokens"],RunAgentInput:["forwardedProps"],Tool:["parameters"],ResumeEntry:["payload"],"input content":["metadata"]},d_=new Map(Object.entries(Ut).filter(([t])=>Object.values(v).includes(t))),p_=t=>Va(t,"an absent field");function $t(t,e,n,r){if(!Nu(t))return t;let o;for(let i of e)t[i]===null&&(r(n===void 0?`${i}: null`:`${n}.${i}: null`),o??={...t},delete o[i]);return o??t}function Br(t,e,n){if(!Nu(t)||!Array.isArray(t[e]))return t;let r=t[e],o=r.map(n);return o.some((i,a)=>i!==r[a])?{...t,[e]:o}:t}function eb(t,e){return Br(t,"content",n=>{if(!Nu(n))return n;switch(n.type){case"image":case"audio":case"video":case"document":return $t(n,Ut["input content"],`${n.type} input content`,e);default:return n}})}function h_(t,e=p_){let n=$t(t,Ut.RunAgentInput,"RunAgentInput",e);return n=Br(n,"tools",r=>$t(r,Ut.Tool,"Tool",e)),n=Br(n,"resume",r=>$t(r,Ut.ResumeEntry,"ResumeEntry",e)),Br(n,"messages",r=>eb(r,e))}var Ru=class extends Vr{constructor(...t){super(...t),this.currentReasoningId=null,this.currentMessageId=null,this.nullsNoticedThisRun=new Set,this.noticeNullOncePerRun=e=>{this.nullsNoticedThisRun.has(e)||(this.nullsNoticedThisRun.add(e),Va(e,"an absent field"))}}warn(t,e){Va(t,e)}mintedContinuationId(t,e){if(e!==null)return e;let n=Ee();return this.warnAside(`Minting a messageId ('${n}') for ${t}: no THINKING opener preceded it, so there was no id to continue. The id is this client's invention, not the producer's, and verification will reject the translated event for naming something nothing opened.`),n}warnAside(t){typeof process<"u"&&process.env!==void 0&&process.env.SUPPRESS_TRANSFORMATION_WARNINGS||console.warn(`[ag-ui][compat] ${t} Set SUPPRESS_TRANSFORMATION_WARNINGS=true to silence.`)}run(t,e){return this.currentReasoningId=null,this.currentMessageId=null,this.nullsNoticedThisRun.clear(),t.messages=t.messages.map(Lv),e.run(t).pipe(Et(n=>this.transformEvent(n)))}transformEvent(t){let e=this.noticeNullOncePerRun;t.type===v.RUN_STARTED&&this.nullsNoticedThisRun.clear(),t=$t(t,Ut.event,void 0,e);let n=d_.get(t.type);switch(n&&(t=$t(t,n,t.type,e)),t.type){case xu:{this.currentReasoningId=Ee();let{title:r,...o}=t;return this.warn(xu,v.REASONING_START),r!==void 0&&this.warnAside(`Dropping ${xu}.title ${JSON.stringify(r)}: ${v.REASONING_START} has no title field, so the span's label cannot be carried and nothing downstream can recover it.`),{...o,type:v.REASONING_START,messageId:this.currentReasoningId}}case Dv:return this.currentMessageId=Ee(),this.warn(Dv,v.REASONING_MESSAGE_START),{...t,type:v.REASONING_MESSAGE_START,messageId:this.currentMessageId,role:"reasoning"};case _u:{let{delta:r,...o}=t;return this.warn(_u,v.REASONING_MESSAGE_CONTENT),{...o,type:v.REASONING_MESSAGE_CONTENT,messageId:this.mintedContinuationId(_u,this.currentMessageId),delta:r}}case Tu:{let r=this.mintedContinuationId(Tu,this.currentMessageId);return this.currentMessageId=null,this.warn(Tu,v.REASONING_MESSAGE_END),{...t,type:v.REASONING_MESSAGE_END,messageId:r}}case Su:{let r=this.mintedContinuationId(Su,this.currentReasoningId);return this.currentReasoningId=null,this.warn(Su,v.REASONING_END),{...t,type:v.REASONING_END,messageId:r}}case v.RUN_FINISHED:{let r=t,o=$t(r.outcome,Ut["RUN_FINISHED.outcome"],"RUN_FINISHED.outcome",e);return Br(o===r.outcome?r:{...r,outcome:o},"usage",i=>$t(i,Ut["RUN_FINISHED.usage[]"],"RUN_FINISHED.usage[]",e))}case v.MESSAGES_SNAPSHOT:{let r=t;return Array.isArray(r.messages)?{...r,messages:r.messages.map(o=>this.upgradeInboundMessage(o))}:t}case v.RUN_STARTED:{let r=h_(t.input,e),o=r===t.input?t:{...t,input:r},i=o;return!i.input||!Array.isArray(i.input.messages)?o:{...i,input:{...i.input,messages:i.input.messages.map(a=>this.upgradeInboundMessage(a))}}}default:return t}}upgradeInboundMessage(t){t=eb(t,this.noticeNullOncePerRun);let e=t.content;return!Array.isArray(e)||!e.some(n=>typeof n=="object"&&!!n&&n.type==="binary")?t:(this.warn("binary input content","the modern media content parts"),Lv(t))}},f_=()=>t=>nn(()=>{let e=new Ru;return t.pipe(Et(n=>e.transformEvent(n)))});function m_(t,e=new Date){return t.expiresAt===void 0?!1:new Date(t.expiresAt)<=e}function tb(t,e){let n=new Set(t.map(a=>a.id)),r=new Set(Object.keys(e)),o=[...n].filter(a=>!r.has(a));if(o.length>0)throw Error(`buildResumeArray: missing responses for open interrupts: ${o.join(", ")}`);let i=[...r].filter(a=>!n.has(a));if(i.length>0)throw Error(`buildResumeArray: responses reference unknown interrupt ids: ${i.join(", ")}`);return t.map(a=>{let s=e[a.id],l={interruptId:a.id,status:s.status};return s.status==="resolved"&&s.payload!==void 0&&(l.payload=s.payload),s.metadata!==void 0&&(l.metadata=s.metadata),l})}function nb(){return typeof process<"u"&&process.env!==void 0&&!!process.env.SUPPRESS_TRANSFORMATION_WARNINGS}function g_(t){nb()||console.warn(`[ag-ui][compat] Flattening message content for a <=0.0.39 peer DROPS non-text parts (${t.join(", ")}). The peer cannot receive them; upgrade it to keep media content. See the repo-root DEPRECATIONS.md.`)}function v_(t){nb()||console.warn(`[ag-ui][compat] Not flattening message content for a <=0.0.39 peer: ${t} content part(s) claim type "text" but carry a malformed 'text' value. That is a defect in the message, not media the peer cannot represent, and a downgrade must not repair it \u2014 the content is passed on unchanged so the outgoing enforcement boundary reports it. See the repo-root DEPRECATIONS.md.`)}function b_(t){let e=t.content;if(Array.isArray(e)){let n=s=>typeof s=="object"&&!!s&&"type"in s&&s.type==="text",r=s=>n(s)&&typeof s.text=="string",o=e.filter(s=>n(s)&&!r(s));if(o.length>0)return v_(o.length),t;let i=e.filter(s=>!r(s)).map(s=>typeof s=="object"&&s&&"type"in s?String(s.type):typeof s);i.length>0&&g_(i);let a=e.filter(r).map(s=>s.text).join("");return{...t,content:a}}return typeof e=="string"?t:e===void 0?{...t,content:""}:t}var y_=class extends Vr{run(t,e){let{parentRunId:n,...r}=t,o={...r,messages:r.messages.map(b_)};return this.runNext(o,e)}},$v="THINKING_START",Uv="THINKING_END",Hv="THINKING_TEXT_MESSAGE_START",Fv="THINKING_TEXT_MESSAGE_CONTENT",Gv="THINKING_TEXT_MESSAGE_END",w_=class extends Vr{constructor(...t){super(...t),this.currentReasoningId=null,this.currentMessageId=null}warnAboutTransformation(t,e){typeof process<"u"&&process.env!==void 0&&process.env.SUPPRESS_TRANSFORMATION_WARNINGS||console.warn(`AG-UI is converting ${t} to ${e}. To remove this warning, upgrade your AG-UI integration package (e.g. @ag-ui/langgraph). To surpress it, set SUPPRESS_TRANSFORMATION_WARNINGS=true in your .env file.`)}run(t,e){return this.currentReasoningId=null,this.currentMessageId=null,this.runNext(t,e).pipe(Et(n=>this.transformEvent(n)))}transformEvent(t){switch(t.type){case $v:{this.currentReasoningId=Ee();let{title:e,...n}=t;return this.warnAboutTransformation($v,v.REASONING_START),{...n,type:v.REASONING_START,messageId:this.currentReasoningId}}case Hv:return this.currentMessageId=Ee(),this.warnAboutTransformation(Hv,v.REASONING_MESSAGE_START),{...t,type:v.REASONING_MESSAGE_START,messageId:this.currentMessageId,role:"reasoning"};case Fv:{let{delta:e,...n}=t;return this.warnAboutTransformation(Fv,v.REASONING_MESSAGE_CONTENT),{...n,type:v.REASONING_MESSAGE_CONTENT,messageId:this.currentMessageId??Ee(),delta:e}}case Gv:{let e=this.currentMessageId??Ee();return this.warnAboutTransformation(Gv,v.REASONING_MESSAGE_END),{...t,type:v.REASONING_MESSAGE_END,messageId:e}}case Uv:{let e=this.currentReasoningId??Ee();return this.warnAboutTransformation(Uv,v.REASONING_END),{...t,type:v.REASONING_END,messageId:e}}default:return t}}},Zv="SUBAGENT_STARTED",Bv="SUBAGENT_FINISHED",Vv="SUBAGENT_ERROR";function Ba(t){if(t&&typeof t=="object"&&"subagentRunId"in t){let{subagentRunId:e,...n}=t;return n}return t}function jv(t){return t.map(e=>Ba(e))}var E_=class extends Vr{warnDroppedLifecycleEvent(t){typeof process<"u"&&process.env!==void 0&&process.env.SUPPRESS_TRANSFORMATION_WARNINGS||console.warn(`AG-UI is dropping ${t} because the target agent predates subagent support. To remove this warning, upgrade your AG-UI integration package. To suppress it, set SUPPRESS_TRANSFORMATION_WARNINGS=true in your .env file.`)}run(t,e){let n={...t,messages:(t.messages??[]).map(r=>Ba(r))};return this.runNext(n,e).pipe(Si(r=>{let o=r.type;(o===Zv||o===Bv||o===Vv)&&this.warnDroppedLifecycleEvent(o)}),Jl(r=>{let o=r.type;return o!==Zv&&o!==Bv&&o!==Vv}),Et(r=>{let o=Ba(r);if(o.type===v.MESSAGES_SNAPSHOT){let i=o;if(Array.isArray(i.messages))return{...i,messages:jv(i.messages)}}if(o.type===v.RUN_FINISHED){let i=o;if(i.outcome&&Array.isArray(i.outcome.interrupts))return{...i,outcome:{...i.outcome,interrupts:i.outcome.interrupts.map(a=>Ba(a))}}}if(o.type===v.RUN_STARTED){let i=o;if(i.input&&Array.isArray(i.input.messages))return{...i,input:{...i.input,messages:jv(i.input.messages)}}}return o}))}},Ha="1.0.2",Wv=!1,qv=new WeakSet,x_=(t,e)=>/^\d+\.\d+$/.test(t)?mn(t,e)>0?"newer":"not-newer":"uninterpretable",Yv=t=>{let e=t.protocolVersion;if(!(e===void 0||e===Kt))switch(x_(e,Kt)){case"uninterpretable":console.warn(`[ag-ui] The producer declared protocol version '${e}', which this client cannot interpret.`);return;case"newer":console.warn(`[ag-ui] The producer speaks protocol ${e}; this client speaks ${Kt}. Unrecognised material will be stripped with warnings.`);return;case"not-newer":return}},S_=class rb{resolvePeerCeiling(e){if(this.resolvingPeerCeiling)return Ha;let n=Object.getOwnPropertyDescriptor(this,"maxVersion"),r=Object.getOwnPropertyDescriptor(this,"maxProtocolVersion"),o=Object.getPrototypeOf(this);for(;o&&o!==rb.prototype;)n??=Object.getOwnPropertyDescriptor(o,"maxVersion"),r??=Object.getOwnPropertyDescriptor(o,"maxProtocolVersion"),o=Object.getPrototypeOf(o);if(e==="maxVersion"&&n)return Ha;let i=e==="maxProtocolVersion"?n:r;if(!i)return Ha;this.resolvingPeerCeiling=!0;try{return i.get?i.get.call(this):i.value}finally{this.resolvingPeerCeiling=!1}}get maxProtocolVersion(){return this.resolvePeerCeiling("maxProtocolVersion")}get maxVersion(){return!this.resolvingPeerCeiling&&!Wv&&(Wv=!0,console.warn("[ag-ui] AbstractAgent.maxVersion is deprecated \u2014 use maxProtocolVersion. Same value; the new name says whose version it is and that it is a ceiling.")),this.resolvePeerCeiling("maxVersion")}get debug(){return this._debug}set debug(e){this._debug=Fa(e),this._debugLogger=gu(this._debug)}get debugLogger(){return this._debugLogger}set debugLogger(e){typeof e=="boolean"?this._debugLogger=e?gu(Fa(!0)):void 0:this._debugLogger=e}resolvedCeilingDuringConstruction(){let e=this.maxProtocolVersion;if(typeof e!="string"||!mu(e))throw new V(`maxProtocolVersion resolved to ${JSON.stringify(e)} during construction, which is not a version this client can compare. A ceiling read from an instance field is not available yet \u2014 return a literal from the getter.`);return e}constructor({agentId:e,description:n,threadId:r,initialMessages:o,initialState:i,debug:a}={}){this.subscribers=[],this.isRunning=!1,this.pendingInterrupts=[],this.middlewares=[],this.resolvingPeerCeiling=!1,this.agentId=e,this.description=n??"",this.threadId=r??Ot(),this.messages=ee(o??[]),this.state=ee(i??{}),this._debug=Fa(a),this._debugLogger=gu(this._debug);let s=this.resolvedCeilingDuringConstruction();mn(s,"0.0.39")<=0&&this.middlewares.unshift(new y_),mn(s,"0.0.45")<=0&&this.middlewares.unshift(new w_),mn(s,"0.0.57")<=0&&this.middlewares.unshift(new E_)}subscribe(e){return this.subscribers.push(e),{unsubscribe:()=>{this.subscribers=this.subscribers.filter(n=>n!==e)}}}use(...e){let n=e.map(r=>typeof r=="function"?new a_(r):r);return this.middlewares.push(...n),this}async runAgent(e,n){try{this.isRunning=!0,this.agentId=this.agentId??Ot();let r=this.prepareRunAgentInput(e);this.debugLogger?.lifecycle("LIFECYCLE","Run started:",{agentId:this.agentId,threadId:this.threadId});let o,i=new Set(this.messages.map(c=>c.id)),a=[{onRunStartedEvent:({event:c})=>Yv(c),onRunFinishedEvent:c=>{c.outcome==="success"&&(o=c.result)}},...this.subscribers,n??{}];qv.add(r),await this.onInitialize(r,a),this.activeRunDetach$=new wt;let s;this.activeRunCompletionPromise=new Promise(c=>{s=c}),await wi(ii(()=>[...this.middlewares,new Ru].reduceRight((c,u)=>({run:h=>u.run(h,c),get messages(){return c.messages},get state(){return c.state}}),this).run(r),Eu(this.debugLogger),Za(this.debugLogger),vu(this.debugLogger),c=>c.pipe(xi(this.activeRunDetach$)),c=>this.applyBeforeSourceError(r,c,a),jn(c=>(this.debugLogger?.lifecycle("LIFECYCLE","Run errored:",{agentId:this.agentId,error:c instanceof Error?c.message:String(c)}),this.isRunning=!1,this.onError(r,c,a))),rn(()=>{this.debugLogger?.lifecycle("LIFECYCLE","Run finished:",{agentId:this.agentId,threadId:this.threadId}),this.isRunning=!1,this.onFinalize(r,a),s?.(),s=void 0,this.activeRunCompletionPromise=void 0,this.activeRunDetach$=void 0}))(se(null)));let l=ee(this.messages).filter(c=>!i.has(c.id));return{result:o,newMessages:l}}finally{this.isRunning=!1}}connect(e){throw new Ul}async connectAgent(e,n){try{this.isRunning=!0,this.agentId=this.agentId??Ot();let r=this.prepareRunAgentInput(e),o,i=new Set(this.messages.map(c=>c.id)),a=[{onRunStartedEvent:({event:c})=>Yv(c),onRunFinishedEvent:c=>{c.outcome==="success"&&(o=c.result)}},...this.subscribers,n??{}];await this.onInitialize(r,a),this.activeRunDetach$=new wt;let s;this.activeRunCompletionPromise=new Promise(c=>{s=c}),await wi(ii(()=>nn(()=>this.connect(r)),c=>Eu(this.debugLogger)(f_()(c)),Za(this.debugLogger),vu(this.debugLogger),c=>c.pipe(xi(this.activeRunDetach$)),c=>this.applyBeforeSourceError(r,c,a),jn(c=>(this.isRunning=!1,c instanceof Ul?tn:this.onError(r,c,a))),rn(()=>{this.isRunning=!1,this.onFinalize(r,a),s?.(),s=void 0,this.activeRunCompletionPromise=void 0,this.activeRunDetach$=void 0}))(se(null)),{defaultValue:void 0});let l=ee(this.messages).filter(c=>!i.has(c.id));return{result:o,newMessages:l}}finally{this.isRunning=!1}}abortRun(){}async detachActiveRun(){if(!this.activeRunDetach$)return;let e=this.activeRunCompletionPromise??Promise.resolve();this.activeRunDetach$.next(),this.activeRunDetach$?.complete(),await e}applyBeforeSourceError(e,n,r){return nn(()=>{let o,i=n.pipe(jn(a=>(o={error:a},tn)));return this.processApplyEvents(e,this.apply(e,i,r),r).pipe(Ql(nn(()=>{let a=o;return a?F(()=>a.error):tn})))})}apply(e,n,r){return Xv(e,n,this,r,this.debugLogger)}processApplyEvents(e,n,r){return n.pipe(Si(o=>{o.messages&&(this.messages=o.messages,r.forEach(i=>{i.onMessagesChanged?.({messages:this.messages,state:this.state,agent:this,input:e})})),o.state!==void 0&&(this.state=o.state,r.forEach(i=>{i.onStateChanged?.({state:this.state,messages:this.messages,agent:this,input:e})}))}))}prepareRunAgentInput(e){let n=ee(this.messages);for(let o of n)o.subagentRunId===null&&delete o.subagentRunId;let r=n.filter(o=>o.role!=="activity");return{threadId:this.threadId,runId:e?.runId||Ot(),...mn(this.maxProtocolVersion,Ha)>=0&&{protocolVersion:Kt},tools:ee(e?.tools??[]),context:ee(e?.context??[]),forwardedProps:ee(e?.forwardedProps??{}),state:ee(this.state),messages:r,...e?.resume===void 0?{}:{resume:ee(e.resume)}}}async onInitialize(e,n){if(qv.has(e)&&this.pendingInterrupts.length>0){let o=new Set((e.resume??[]).map(a=>a.interruptId)),i=this.pendingInterrupts.map(a=>a.id).filter(a=>!o.has(a));if(i.length>0)throw new V(`Thread has ${i.length} pending interrupt(s) not addressed by resume: ${i.join(", ")}`);for(let a of this.pendingInterrupts)if(m_(a)&&(e.resume??[]).find(s=>s.interruptId===a.id)?.status!=="cancelled")throw new V(`Interrupt ${a.id} expired at ${a.expiresAt} and can no longer be answered. Cancel it to continue the thread.`)}let r=await oe(n,this.messages,this.state,(o,i,a)=>o.onRunInitialized?.({messages:i,state:a,agent:this,input:e}));if(r.messages!==void 0||r.state!==void 0){if(r.messages){this.messages=r.messages;for(let o of r.messages)o.subagentRunId===null&&delete o.subagentRunId;e.messages=r.messages.filter(o=>o.role!=="activity"),n.forEach(o=>{o.onMessagesChanged?.({messages:this.messages,state:this.state,agent:this,input:e})})}r.state!==void 0&&(this.state=r.state,e.state=r.state,n.forEach(o=>{o.onStateChanged?.({state:this.state,messages:this.messages,agent:this,input:e})}))}}onError(e,n,r){return At(oe(r,this.messages,this.state,(o,i,a)=>o.onRunFailed?.({error:n,messages:i,state:a,agent:this,input:e}))).pipe(Et(o=>{let i=o;if((i.messages!==void 0||i.state!==void 0)&&(i.messages!==void 0&&(this.messages=i.messages,r.forEach(a=>{a.onMessagesChanged?.({messages:this.messages,state:this.state,agent:this,input:e})})),i.state!==void 0&&(this.state=i.state,r.forEach(a=>{a.onStateChanged?.({state:this.state,messages:this.messages,agent:this,input:e})}))),i.stopPropagation!==!0){let a=String(n);if(!(n.name==="AbortError"||n.message==="Fetch is aborted"||n.message==="signal is aborted without reason"||n.message==="component unmounted"||a==="component unmounted"))throw console.error("Agent execution failed:",n),n}return{}}))}async onFinalize(e,n){let r=await oe(n,this.messages,this.state,(o,i,a)=>o.onRunFinalized?.({messages:i,state:a,agent:this,input:e}));(r.messages!==void 0||r.state!==void 0)&&(r.messages!==void 0&&(this.messages=r.messages,n.forEach(o=>{o.onMessagesChanged?.({messages:this.messages,state:this.state,agent:this,input:e})})),r.state!==void 0&&(this.state=r.state,n.forEach(o=>{o.onStateChanged?.({state:this.state,messages:this.messages,agent:this,input:e})})))}clone(){let e=Object.create(Object.getPrototypeOf(this));return e.agentId=this.agentId,e.description=this.description,e.threadId=this.threadId,e.messages=ee(this.messages),e.state=ee(this.state),e._debug=this._debug,e._debugLogger=this._debugLogger,e.isRunning=this.isRunning,e.subscribers=[...this.subscribers],e.middlewares=[...this.middlewares],e.pendingInterrupts=ee(this.pendingInterrupts),e}addMessage(e){this.messages.push(e),(async()=>{for(let n of this.subscribers)await n.onNewMessage?.({message:e,messages:this.messages,state:this.state,agent:this});if(e.role==="assistant"&&e.toolCalls)for(let n of e.toolCalls)for(let r of this.subscribers)await r.onNewToolCall?.({toolCall:n,messages:this.messages,state:this.state,agent:this});for(let n of this.subscribers)await n.onMessagesChanged?.({messages:this.messages,state:this.state,agent:this})})()}addMessages(e){this.messages.push(...e),(async()=>{for(let n of e){for(let r of this.subscribers)await r.onNewMessage?.({message:n,messages:this.messages,state:this.state,agent:this});if(n.role==="assistant"&&n.toolCalls)for(let r of n.toolCalls)for(let o of this.subscribers)await o.onNewToolCall?.({toolCall:r,messages:this.messages,state:this.state,agent:this})}for(let n of this.subscribers)await n.onMessagesChanged?.({messages:this.messages,state:this.state,agent:this})})()}setMessages(e){this.messages=ee(e),(async()=>{for(let n of this.subscribers)await n.onMessagesChanged?.({messages:this.messages,state:this.state,agent:this})})()}setState(e){this.state=ee(e),(async()=>{for(let n of this.subscribers)await n.onStateChanged?.({messages:this.messages,state:this.state,agent:this})})()}legacy_to_be_removed_runAgentBridged(e){this.agentId=this.agentId??Ot();let n=this.prepareRunAgentInput(e);return[...this.middlewares,new Ru].reduceRight((r,o)=>({run:i=>o.run(i,r),get messages(){return r.messages},get state(){return r.state}}),this).run(n).pipe(Eu(this.debugLogger),Za(this.debugLogger),vu(this.debugLogger),V0(this.threadId,n.runId,this.agentId),r=>r.pipe(Et(o=>(this.debugLogger?.event("LEGACY","Event:",o,{type:o.type}),o))))}};function __(t){if(!Array.isArray(t.messages))return t;let e=!1,n=t.messages.map(r=>{if(r.subagentRunId===null){e=!0;let o={...r};return delete o.subagentRunId,o}return r});return e?{...t,messages:n}:t}var ob=class extends S_{requestInit(t){return{method:"POST",headers:{...this.headers,"Content-Type":"application/json",Accept:"text/event-stream"},body:JSON.stringify(__(t)),signal:this.abortController.signal}}runAgent(t,e){return this.abortController=t?.abortController??new AbortController,super.runAgent(t,e)}abortRun(){this.abortController.abort(),super.abortRun()}constructor(t){super(t),this.abortController=new AbortController,this.url=t.url,this.headers=ee(t.headers??{}),this.fetch=t.fetch??((e,n)=>fetch(e,n))}run(t){return Z0(U0(()=>this.fetch(this.url,this.requestInit(i_(t)))),this.debugLogger)}clone(){let t=super.clone();t.url=this.url,t.headers=ee(this.headers??{}),t.fetch=this.fetch;let e=new AbortController,n=this.abortController.signal;return n.aborted&&e.abort(n.reason),t.abortController=e,t}};ze(Yn());function rt(t,e){return e===void 0?t:{...t,credentials:e}}function ja(t){if(t.newThread!==void 0)return t.newThread();let e=Ee();return t.setActiveThread(e),e}function Wa(t,e,n,r){if(e.length===0)return;let o=new URL(String(t),location.href).origin;o===location.origin||n.includes(o)||r.has(o)||(r.add(o),console.warn(`<ag-ui-chat>: sending host credentials (${e.join(", ")}) to ${o}, which is not this page's origin (${location.origin}). Those headers are the page's own authentication, and whichever server answers the browser's preflight receives them \u2014 so a URL attribute built from a query parameter or from tenant-authored configuration is a channel for the token to leave on. If this destination is deliberate, name it in \`trustedOrigins\` to confirm it and silence this notice. Reported once per origin.`))}function or(t){return t.split(",").map(e=>e.trim()).filter(e=>e!=="")}function qa(t,e,n=new Set){let r=new Set(n);for(let s of t)s.role==="tool"&&r.add(s.toolCallId);let o=[],i=[],a=!1;for(let s of t){let l=s.role==="assistant"?T_(s.toolCalls):[];s.role==="tool"||l.length>0&&!a||(o.push(...i.map(e)),i=[]),o.push(s),a=s.role==="tool";for(let u of l)r.has(u)||(r.add(u),i.push(u))}return o.length+i.length===t.length?t:(o.push(...i.map(e)),o)}function T_(t){return Array.isArray(t)?t.map(e=>Object(e).id).filter(e=>typeof e=="string"):[]}function Ya(t,e){return Object(t.metadata)[e]??t[e]}var pe={title:"Assistant",chatHistory:"Chat history",closeHistory:"Close history",searchConversations:"Search conversations",queued:"Waiting to send",removeQueued:'Do not send "{text}"',noMatches:"No conversations match that.",chatMoved:"Moved this panel out of the way",chatMinimised:"Minimised this panel",undo:"Undo",newChat:"New chat",collapse:"Collapse",expand:"Expand",expandUnread:"Expand \u2014 {count} unread",toggleTheme:"Toggle theme",copyCode:"Copy",copied:"Copied",copyFailed:"Copy failed",checkpoints:"Continue a run",noCheckpoints:"Nothing to continue yet.",resumeRun:"Resume",forkRun:"Fork",forkedRun:"branched",greeting:"Hello, {name}",greetingNoName:"Hello there",conversation:"Conversation",jumpToLatest:"Jump to latest",announceResponding:"Assistant is responding",announceAnswerReady:"Assistant answered",announceAwaitingDecision:"{count} action is waiting for your approval",announceStopped:"Response stopped",announceFailed:"The response failed",thinking:"Assistant is thinking\u2026",thoughts:"Thoughts",stopped:"\u23F9 Stopped",connectionLost:"Connection lost",noResult:"No result returned.",callNotFinished:"Not finished: the run ended or moved on before this tool call returned a result.",declinedAction:"User declined the action.",confirmCheckFailed:"Not run: the check that decides whether this action needs the user's confirmation failed.",navigating:"Navigating\u2026",historyReplaced:"The server replaced this conversation's history. Reload to see the updated transcript.",chartUndrawable:"A chart could not be drawn from the data sent, so it was removed.",historyCompacted:"Earlier turns condensed to fit the context window ({count} removed)",usingSkill:"Using skill {name}",runInterrupted:"The previous response didn\u2019t finish \u2014 the page changed before it arrived.",pageMoved:"The page changed since you last looked at it. Call read_page to see the current page, then retry.",attachmentsStillUploading:"{n} file still uploading \u2014 it was not sent with this message and is still attached.",notConnected:"This chat isn\u2019t connected to an agent, so the message wasn\u2019t sent.",continueNeedsTurn:"Type the next turn in the composer first, then pick a run to continue.",continueWhileRunning:"Wait for the current answer or stop it, then pick a run to continue.",continueWhileLoading:"Wait for the conversation to finish loading, then pick a run to continue.",skillNeeds:"\u201C{title}\u201D needs {fields} \u2014 fill it in below, then send.",message:"Message",inputPlaceholder:"Ask anything\u2026",send:"Send",stop:"Stop",attachFiles:"Attach files",recordVoice:"Record voice",stopRecording:"Stop recording",transcribing:"Transcribing\u2026",transcriptionFailed:"Transcription failed",recordingLimit:"Stopped at the {n}-minute limit \u2014 transcribing what was recorded.",toolRunning:"running\u2026",toolDeferred:"waiting for you",toolDone:"\u2713 done",toolError:"\u26A0 error",toolDeclined:"\u2298 declined",toolInterrupted:"\u25CC not finished",resizePanel:"Resize the chat panel",decisionApproved:"approved by you",decisionDeclined:"declined by you",argumentsLabel:"Arguments",resultLabel:"Result",errorLabel:"Error",declinedLabel:"Declined",interruptedLabel:"Not finished",details:"Details",subAgentWorking:"Working\u2026",subAgentDelegatedTo:"Delegated to {agent}",subAgentFinished:"{agent} finished",subAgentFailed:"The sub-agent failed",subAgentSteps:"Steps the sub-agent took",approvalEditArgs:"Edit the arguments before approving",approvalArgsInvalid:"That is not valid JSON, so nothing was sent.",approvalArgsNotAnObject:"Arguments have to be a JSON object.",suggestions:"Suggested follow-ups",messageActions:"Message actions",quoteSelection:"Quote",copyMessage:"Copy message",retryMessage:"Try again",feedbackUp:"Good answer",feedbackDown:"Poor answer",confirmAction:"Confirm action",confirmAlways:"Always allow",confirmRun:"Run \u201C{tool}\u201D?",confirm:"Confirm",cancel:"Cancel",approveAction:"Approve action",approvalPrompt:"Approve this action?",approve:"Approve",deny:"Deny",askUserAction:"Question",otherOption:"Other\u2026",answerPlaceholder:"Type your answer\u2026",submit:"Submit",chats:"Chats",noConversations:"No conversations yet.",rename:"Rename",renameConversation:"Rename conversation",delete:"Delete",deleteConversation:"Delete conversation",deletePrompt:"Delete?",tooLarge:"Too large (max {size})",fileTypeNotAllowed:"File type not allowed",uploadFailed:"upload failed",retry:"Retry",retryUpload:"Retry upload",remove:"Remove",removeAttachment:"Remove attachment",justNow:"just now",minutesAgo:"{n}m ago",hoursAgo:"{n}h ago",daysAgo:"{n}d ago",weeksAgo:"{n}w ago"};function Ou(t){let e={...pe};for(let n of Object.keys(t)){let r=t[n];r!==void 0&&(e[n]=r)}return e}function A_(t){let e=document.createElement("input");return e.type="text",e.className="question-input",e.setAttribute("part","question-input"),e.placeholder=t,e}function Pu(t,e,n={}){let r=n.strings??pe,o=e.options??[],i=o.length>0,a=!i||e.allowCustom===!0;return new Promise(s=>{let l=document.createElement("div");l.className="question",l.setAttribute("part","question"),l.setAttribute("role","group"),l.setAttribute("aria-label",r.askUserAction);let c=document.createElement("div");c.className="question-body",c.setAttribute("part","question-body"),c.textContent=e.question;let u=document.createElement("div");u.className="question-options",u.setAttribute("part","question-options");let h=`q-${o.length}-${e.question.length}`,m=[];for(let w of o){let T=document.createElement("label");T.className="question-choice",T.setAttribute("part","question-choice");let S=document.createElement("input");S.type="radio",S.name=h,S.value=w,S.setAttribute("part","question-radio");let A=document.createElement("span");A.setAttribute("part","question-choice-text"),A.textContent=w,T.append(S,A),u.appendChild(T),m.push(S)}let f=null,p=null;if(a){if(p=A_(r.answerPlaceholder),i){let w=document.createElement("label");w.className="question-choice",w.setAttribute("part","question-choice"),f=document.createElement("input"),f.type="radio",f.name=h,f.value="",f.setAttribute("part","question-radio");let T=document.createElement("span");T.setAttribute("part","question-choice-text"),T.textContent=r.otherOption,w.append(f,T),u.appendChild(w),p.disabled=!0}u.appendChild(p)}let b=document.createElement("div");b.className="question-actions",b.setAttribute("part","question-actions");let g=document.createElement("button");g.type="button",g.className="question-btn",g.setAttribute("part","question-button"),g.textContent=r.submit,b.appendChild(g);let E=!1,y=()=>{let w=m.find(T=>T.checked);if(w!==void 0)return w.value;if(p!==null&&(f===null||f.checked)){let T=p.value.trim();return T===""?null:T}return null},_=()=>{p!==null&&f!==null&&(p.disabled=!f.checked),g.disabled=y()===null},C=w=>{if(!E){E=!0,g.disabled=!0;for(let T of m)T.disabled=!0;f!==null&&(f.disabled=!0),p!==null&&(p.disabled=!0),l.setAttribute("data-resolved",w===""?"cancelled":"answered"),s(w)}};for(let w of[...m,...f!==null?[f]:[]])w.addEventListener("change",_);if(p?.addEventListener("input",_),p?.addEventListener("keydown",w=>{if(w.key==="Enter"){w.preventDefault();let T=y();T!==null&&C(T)}}),g.addEventListener("click",()=>{let w=y();w!==null&&C(w)}),n.signal?.addEventListener("abort",()=>C(""),{once:!0}),l.append(c,u,b),t.appendChild(l),n.signal?.aborted===!0){C("");return}_(),(i?m[0]:p)?.focus()})}function Mu(t){let e={};if(!Array.isArray(t))return e;for(let n of t){if(n===null||typeof n!="object")continue;let r=n,o=r.name,i=r.summary,a=r.description;typeof o=="string"&&typeof i=="string"&&(e[o]=typeof a=="string"?{name:o,summary:i,description:a}:{name:o,summary:i})}return e}var Xa=class{#e;#t={};#n=new Set;#o=new vr;constructor(e){this.#e=e}register(e){this.#o.register(e)}registerPageState(e){for(let n of Bo(e))this.#o.register(n)}has(e){return this.#o.has(e)}defaultTools(){return[...this.#l().map(e=>({name:e.name,description:e.description,parameters:e.parameters})),...this.#o.tools()]}advertise(){let e=this.#e.getTools();return this.#n=new Set(e.map(n=>n.name)),e}wasAdvertised(e){return this.#n.has(e)}resolve(e){let n=this.#l().find(r=>r.name===e);return n!==void 0?n:this.#o.has(e)?this.#o.get(e):null}summary(e){return this.#t[e]?.summary}async fetchCatalog(){let e=this.#e.element.getAttribute("data-tools-url");if(e!==null)try{let n=await fetch(e,this.#e.fetchInit(e));this.#t=Mu(await n.json())}catch{}}#r(){return this.#e.routeMap().length===0?[]:Ml(()=>this.#e.routeMap(),()=>this.#e.navigate())}#i(){let e=this.#e.getPageMap();return e===null?[]:[{name:Lo,description:"Read the current page's structure (fields, buttons, route). Call after acting to observe the result within the same turn.",parameters:{type:"object",properties:{},required:[],[Re]:"Read the page"},handler:()=>e()}]}#a(){let e=this.#e.element.getAttribute("data-page-actions");if(e===null)return[];let n=new Set(or(e));return[...Ol(n,r=>this.#e.resolvePageTarget(r)),...n.has(wr.CHAT)?xl(this.#e.element):[]]}#l(){return[...this.#r(),...this.#i(),...this.#a(),...this.#u()]}#u(){return this.#e.askUser()?[{name:"ask_user",description:"Ask the user a question and wait for their answer. Provide `options` for a multiple-choice prompt; set `allow_custom` to also accept a free-text answer.",parameters:{type:"object",properties:{question:{type:"string",description:"The question to ask the user."},options:{type:"array",items:{type:"string"},description:"Preset choices offered as radio buttons."},allow_custom:{type:"boolean",description:"Allow a free-text answer in addition to any options."}},required:["question"]},handler:(e,n)=>this.#d(e,n)}]:[]}async#d(e,n){let o={question:typeof e.question=="string"?e.question:""},i=e.options;Array.isArray(i)&&(o.options=i.filter(u=>typeof u=="string")),e.allow_custom===!0&&(o.allowCustom=!0);let a=this.#e.decision.open();this.#e.hidePending();let s=()=>Pu(this.#e.ensureGroup(),o,{signal:a,strings:this.#e.strings()}),l=this.#e.askUserRenderer(),c;if(l===null)c=await s();else try{c=await l.call(this.#e.element,o,{signal:a})}catch(u){c=await this.#c(u,a,n,s)}return this.#e.decision.close(),this.#e.updateEmptyState(),this.#e.follow(),c}#c(e,n,r,o){return n.aborted?Promise.resolve(""):(console.warn(`ag-ui-chat: askUserRenderer failed for tool call ${r}, so the built-in question card asks instead`,e),o())}};function Ka(t){if(t.name!==wl)return null;let e=t.args?.id;return typeof e=="string"&&e!==""?e:null}function ib(t,e){let n=document.createElement("button");return n.type="button",n.className=`approval-btn approval-btn--${t}`,n.setAttribute("part",`approval-button approval-${t}`),n.textContent=e,n}function zu(t,e,n={}){let r=n.strings??pe;return new Promise(o=>{let i=document.createElement("div");i.className="approval",i.setAttribute("part","approval"),e.toolName!==void 0&&i.setAttribute("data-tool-name",e.toolName),i.setAttribute("role","group"),i.setAttribute("aria-label",r.approveAction);let a=document.createElement("div");a.className="approval-body",a.setAttribute("part","approval-body"),a.textContent=e.message??r.approvalPrompt;let s=k_(e,n,r),l=document.createElement("div");l.className="approval-actions",l.setAttribute("part","approval-actions");let c=ib("deny",r.deny),u=ib("approve",r.approve),h=!1,m=f=>{h||(h=!0,c.disabled=!0,u.disabled=!0,i.setAttribute("data-resolved",f?"approved":"denied"),o(f))};if(c.addEventListener("click",()=>m(!1)),u.addEventListener("click",()=>{s!==null&&!s.commit()||m(!0)}),n.signal?.addEventListener("abort",()=>m(!1),{once:!0}),l.append(c,u),i.append(a,...s===null?[]:[s.root],l),t.appendChild(i),n.signal?.aborted===!0){m(!1);return}u.focus()})}function k_(t,e,n){let{onEdit:r}=e;if(r===void 0||t.args===void 0)return null;let o=JSON.stringify(t.args,null,2),i=document.createElement("div");i.className="approval-edit",i.setAttribute("part","approval-edit");let a=document.createElement("textarea");a.className="approval-args",a.setAttribute("part","approval-args"),a.setAttribute("aria-label",n.approvalEditArgs),a.rows=Math.min(10,o.split(`
`).length),a.value=o;let s=document.createElement("div");return s.className="approval-error",s.setAttribute("part","approval-error"),s.setAttribute("role","alert"),s.hidden=!0,i.append(a,s),{root:i,commit:()=>{if(a.value===o)return!0;let l;try{l=JSON.parse(a.value)}catch{return s.textContent=n.approvalArgsInvalid,s.hidden=!1,a.focus(),!1}return typeof l!="object"||l===null||Array.isArray(l)?(s.textContent=n.approvalArgsNotAnObject,s.hidden=!1,a.focus(),!1):(s.hidden=!0,r(l),!0)}}}function Lu(t,e){let n=document.createElement("button");return n.type="button",n.className=`confirm-btn confirm-btn--${t}`,n.setAttribute("part",`confirm-button confirm-${t}`),n.textContent=e,n}function Du(t,e,n={}){let r=n.strings??pe;return new Promise(o=>{let i=document.createElement("div");i.className="confirm",i.setAttribute("part","confirm"),i.setAttribute("data-tool-name",e.toolName),i.setAttribute("role","group"),i.setAttribute("aria-label",r.confirmAction);let a=document.createElement("div");a.className="confirm-body",a.setAttribute("part","confirm-body"),a.textContent=e.message??le(r.confirmRun,{tool:e.toolName});let s=document.createElement("pre");s.className="confirm-args",s.setAttribute("part","confirm-args"),s.textContent=JSON.stringify(e.args,null,2),s.hidden=Object.keys(e.args).length===0;let l=document.createElement("div");l.className="confirm-actions",l.setAttribute("part","confirm-actions");let c=Lu("cancel",r.cancel),u=n.onAlwaysAllow===void 0?null:Lu("always",le(r.confirmAlways,{tool:e.toolName})),h=Lu("confirm",r.confirm),m=!1,f=p=>{m||(m=!0,i.remove(),o(p))};if(c.addEventListener("click",()=>f(!1)),h.addEventListener("click",()=>f(!0)),u?.addEventListener("click",()=>{n.onAlwaysAllow?.(),f(!0)}),n.signal?.addEventListener("abort",()=>f(!1),{once:!0}),l.append(c,...u===null?[]:[u],h),i.append(a,s,l),t.appendChild(i),n.signal?.aborted===!0){f(!1);return}h.focus()})}function $u(t){return t[mr]===!0}function Ja(t){return t[gr]===!0}var Qa=class{#e;#t=new Set;#n=null;constructor(e){this.#e=e}forgetWaivers(){this.#t.clear()}buildContext(){return this.#n=window.location.href,this.#e.getContext()}async execute(e){if(Ka(e)!==null)return null;let n=this.#e.tenure(),r=this.#e.conversation(),o=this.#e.threadId(),i=this.#e.transcript.cardFor(e);this.#e.transcript.forgetCard(e.id),this.#e.transcript.setCardElement(e.id,i.element);let a=this.#e.tools.wasAdvertised(e.name)?this.#e.tools.resolve(e.name):null;if(a===null)return this.#e.transcript.isServerSettled(e.id)||i.settle(Q.INTERRUPTED,this.#e.strings().callNotFinished),null;if(this.#e.getPageMap()!==null&&e.name!==Lo&&!Ja(a.parameters)&&this.#a()){let u=this.#e.strings().pageMoved;return i.settle(Q.ERROR,u),this.#e.transcript.showPending(),{content:`Error: ${u}`,error:u,outcome:Ge.FAILED}}let s=this.#e.decision.open(),l=await this.#r(e,a);if(this.#e.decision.close(),s.aborted)return this.#i(i);if(l==="unanswered"){let u=this.#e.strings().confirmCheckFailed;return i.settle(Q.DECLINED,u),this.#e.transcript.showPending(),{content:u,outcome:Ge.DENIED}}if(l!==null){let u={toolName:e.name,args:e.args},h=a.parameters[zo];typeof h=="string"&&(u.message=h);let m=this.#e.decision.open(),f=Du(this.#e.transcript.ensureGroup(),u,{signal:m,strings:this.#e.strings(),...l==="destructive"?{onAlwaysAllow:()=>this.#t.add(e.name)}:{}});this.#e.transcript.updateEmptyState(),this.#e.transcript.follow();let p=await f;if(this.#e.decision.close(),this.#e.tenure()!==n)return null;if(i.recordDecision(p?"approved":"declined"),!p){let b=this.#e.strings().declinedAction;return i.settle(Q.DECLINED,b),this.#e.conversation()===r&&this.#e.transcript.showPending(),{content:b,outcome:Ge.DENIED}}if(m.aborted)return this.#i(i)}let c=Ja(a.parameters)&&this.#e.navigate()===null;c&&this.#e.conversationStore().saveCheckpoint(o,{toolCallId:e.id});try{let u=await a.handler(e.args,e.id);if(this.#e.tenure()!==n)return null;if(a.render!==void 0&&this.#e.transcript.renderToolOutput(a.render,e),c)return i.settle(Q.DONE,this.#e.strings().navigating),{content:"",halt:!0};let h=JSON.stringify(u??null);return i.settle(Q.DONE,h),this.#e.conversation()===r&&this.#e.transcript.showPending(),{content:h}}catch(u){if(this.#e.tenure()!==n)return null;c&&this.#e.conversationStore().saveCheckpoint(o,null);let h=u instanceof Error?u.message:String(u);return i.settle(Q.ERROR,h),this.#e.conversation()===r&&this.#e.transcript.showPending(),{content:`Error: ${h}`,error:h,outcome:Ge.FAILED}}}async resolveInterrupts(e){let n=this.#e.decision.open();this.#e.announce(le(this.#e.strings().announceAwaitingDecision,{count:e.length})),this.#e.transcript.hidePending();let r=await Promise.all(e.map(async i=>{let a=i.toolCallId!==void 0?this.#e.transcript.card(i.toolCallId):void 0,s={},l=I_(i)??i.message;l!==void 0&&(s.message=l);let c=a?.element.getAttribute("data-tool-name");c!=null&&(s.toolName=c);let u,h=this.#e.approveWithEdits()&&a!==void 0;h&&(s.args=a.args),a?.mark(Q.DEFERRED);let m=()=>zu(a?.approvalSlot??this.#e.transcript.ensureGroup(),s,{signal:n,strings:this.#e.strings(),...h?{onEdit:b=>{u=b}}:{}}),f=this.#e.approvalRenderer(),p;if(f===null)p=await m();else try{p=await f.call(this.#e.element,s,{signal:n})}catch(b){p=await this.#o(b,n,i.id,m)}return a?.recordDecision(p?"approved":"declined"),p?a?.mark(Q.PENDING):a?.settle(Q.DECLINED,this.#e.strings().declinedAction),{id:i.id,approved:p,editedArgs:u}}));this.#e.transcript.updateEmptyState(),this.#e.transcript.follow(),this.#e.decision.close();let o={};for(let{id:i,approved:a,editedArgs:s}of r)o[i]=a?{status:"resolved",payload:s===void 0?{approved:!0}:{approved:!0,editedArgs:s}}:{status:"cancelled"};return o}#o(e,n,r,o){return n.aborted?Promise.resolve(!1):(console.warn(`ag-ui-chat: approvalRenderer failed for interrupt ${r}, so the built-in approval card asks instead`,e),o())}async#r(e,n){if(this.#e.autoConfirm())return null;let r=this.#e.confirmPredicate();if(r!==null)try{return await r.call(this.#e.element,e.name,e.args)===!0?"predicate":null}catch(o){return console.warn(`ag-ui-chat: confirmPredicate failed for tool ${e.name}, so the call was refused`,o),"unanswered"}return this.#t.has(e.name)?null:$u(n.parameters)?"destructive":null}#i(e){return e.settle(Q.INTERRUPTED,this.#e.strings().callNotFinished),null}#a(){return this.#n!==null&&this.#n!==window.location.href}};function I_(t){let e=t.metadata?.[zo];return typeof e=="string"&&e.trim()!==""?e:void 0}var R_="http://www.w3.org/2000/svg",Ye={top:20,right:12,bottom:30,left:44},C_=480,N_=220,O_=220/480,P_=160,M_=320,ab=8,z_=5.6,sb=["var(--ag-ui-chart-1, #4f7cff)","var(--ag-ui-chart-2, #21b573)","var(--ag-ui-chart-3, #e0803c)","var(--ag-ui-chart-4, #b563d8)","var(--ag-ui-chart-5, #d84f6e)","var(--ag-ui-chart-6, #3ba7c4)"];function bn(t){return sb[t%sb.length]}function lb(t){let e=Math.max(N_,t),n=Math.min(M_,Math.max(P_,Math.round(e*O_)));return{width:e,height:n,plotW:e-Ye.left-Ye.right,plotH:n-Ye.top-Ye.bottom}}function St(t,e){let n=document.createElementNS(R_,t);for(let[r,o]of Object.entries(e))n.setAttribute(r,String(o));return n}function cb(t,e){let n=St("text",{"font-size":10,fill:"currentColor","fill-opacity":.65,...e});return n.textContent=t,n}function L_(t){let e=[];return t.labels.forEach((n,r)=>{let o=0;for(let i of t.series)o+=i.points[r]??0,e.push(o)}),e}function D_(t){let e=t.kind==="stacked"?L_(t):t.series.flatMap(o=>[...o.points]),n=Math.max(0,...e),r=Math.min(0,...e);return n===r?{min:r,max:n+1}:{min:r,max:n}}function yn(t,e,n,r){return Ye.top+r.plotH-(t-e)/(n-e)*r.plotH}function Uu(t,e,n){let r=n.plotW/e;return Ye.left+r*t+r/2}function $_(t,e){let n=e.plotW/t.length,r=Math.max(...t.map(o=>o.length))*z_;return Math.max(1,Math.ceil(r/n))}function U_(t,e,n,r,o){for(let a of[r,o]){let s=yn(a,r,o,n);t.appendChild(St("line",{x1:Ye.left,y1:s,x2:n.width-Ye.right,y2:s,stroke:"currentColor","stroke-opacity":a===r?.35:.12})),t.appendChild(cb(String(Math.round(a)),{x:Ye.left-6,y:s+4,"text-anchor":"end"}))}let i=$_(e.labels,n);e.labels.forEach((a,s)=>{s%i===0&&t.appendChild(cb(a,{x:Uu(s,e.labels.length,n),y:n.height-Ye.bottom+16,"text-anchor":"middle"}))})}function H_(t,e,n,r,o){let i=n.plotW/e.labels.length,a=i*.7/e.series.length,s=yn(r,r,o,n);e.series.forEach((l,c)=>{l.points.forEach((u,h)=>{let m=yn(u,r,o,n);t.appendChild(St("rect",{x:Ye.left+i*h+i*.15+a*c,y:m,width:a,height:Math.max(1,s-m),fill:bn(c),rx:2}))})})}function F_(t,e,n,r,o){let i=n.plotW/e.labels.length,a=i*.7,s=e.labels.map(()=>0);e.series.forEach((l,c)=>{l.points.forEach((u,h)=>{let m=s[h]??0,f=m+u;s[h]=f;let p=yn(f,r,o,n);t.appendChild(St("rect",{x:Ye.left+i*h+i*.15,y:p,width:a,height:Math.max(1,yn(m,r,o,n)-p),fill:bn(c)}))})})}function G_(t,e,n,r,o){e.series.forEach((i,a)=>{let s=i.points.map((l,c)=>`${Uu(c,e.labels.length,n)},${yn(l,r,o,n)}`).join(" ");t.appendChild(St("polyline",{points:s,fill:"none",stroke:bn(a),"stroke-width":2,"stroke-linejoin":"round"}))})}function Z_(t,e,n,r,o){e.series.forEach((i,a)=>{i.points.forEach((s,l)=>{t.appendChild(St("circle",{cx:Uu(l,e.labels.length,n),cy:yn(s,r,o,n),r:4,fill:bn(a),"fill-opacity":.85}))})})}function B_(t,e,n){let r=e.reduce((l,c)=>l+c,0),o=n.width/2,i=Ye.top+n.plotH/2,a=Math.min(n.plotW,n.plotH)/2;if(r===0){t.appendChild(St("circle",{cx:o,cy:i,r:a,fill:"none",stroke:"currentColor","stroke-opacity":.3}));return}let s=-Math.PI/2;e.forEach((l,c)=>{let u=l/r*Math.PI*2,h=s+u;if(u>=Math.PI*2)t.appendChild(St("circle",{cx:o,cy:i,r:a,fill:bn(c)}));else{let m=o+a*Math.cos(s),f=i+a*Math.sin(s),p=o+a*Math.cos(h),b=i+a*Math.sin(h),g=u>Math.PI?1:0;t.appendChild(St("path",{d:`M ${o} ${i} L ${m} ${f} A ${a} ${a} 0 ${g} 1 ${p} ${b} Z`,fill:bn(c)}))}s=h})}function ub(t,e){let n=St("svg",{viewBox:`0 0 ${e.width} ${e.height}`,width:"100%",role:"img"});if(n.setAttribute("aria-label",t.title??`${t.kind} chart`),t.kind==="pie"){let i=t.series[0];return B_(n,i.points.map(a=>Math.max(0,a)),e),n}let{min:r,max:o}=D_(t);return U_(n,t,e,r,o),t.kind==="bar"?H_(n,t,e,r,o):t.kind==="stacked"?F_(n,t,e,r,o):t.kind==="line"?G_(n,t,e,r,o):Z_(n,t,e,r,o),n}function V_(t){if(t.length<2)return null;let e=document.createElement("div");return e.className="chart-legend",e.setAttribute("part","chart-legend"),t.forEach((n,r)=>{let o=document.createElement("span");o.className="chart-legend-item";let i=document.createElement("span");i.className="chart-legend-swatch",i.style.background=bn(r),o.append(i,document.createTextNode(n)),e.appendChild(o)}),e}function j_(t,e){new ResizeObserver(()=>{e(Math.round(t.clientWidth/ab)*ab)}).observe(t)}function jr(t){if(t.labels.length===0||t.series.length===0)return null;let e=document.createElement("div");if(e.className="chart-block",e.setAttribute("part","chart-block"),t.title!==void 0&&t.title!==""){let i=document.createElement("div");i.className="chart-title",i.setAttribute("part","chart-title"),i.textContent=t.title,e.appendChild(i)}let n=C_,r=ub(t,lb(n));e.appendChild(r);let o=V_(t.kind==="pie"?t.labels:t.series.map(i=>i.label));return o!==null&&e.appendChild(o),j_(e,i=>{if(i===n)return;n=i;let a=ub(t,lb(n));r.replaceWith(a),r=a}),e}var W_=["bar","line","pie","scatter","stacked"];function q_(t){return W_.includes(t)?t:"bar"}function Y_(t){if(!Array.isArray(t))return null;let e=[];for(let n of t){if(typeof n!="number"||!Number.isFinite(n)||Math.abs(n)>1e15)return null;e.push(n)}return e}function X_(t){if(!Array.isArray(t))return null;for(let e=0;e<t.length;e+=1)if(typeof t[e]!="string")return null;return t}function ir(t){if(typeof t!="object"||t===null)return null;let e=t,n=X_(e.labels);if(n===null||!Array.isArray(e.series))return null;let r=[];for(let a of e.series){if(typeof a!="object"||a===null)return null;let s=a,l=Y_(s.points);if(l===null||l.length!==n.length)return null;r.push({label:typeof s.label=="string"?s.label:"",points:l})}if(r.length===0||r.length*n.length>2e4||n.length>2e3)return null;let o=q_(e.kind),i=e.title;return typeof i=="string"?{kind:o,title:i,labels:n,series:r}:{kind:o,labels:n,series:r}}var es="render_chart";function K_(t){let e=ir(t);return e===null?null:jr(e)}function J_(t){let e=ir(t);return e!==null&&e.labels.length>0&&e.series.length>0}var Q_="chart not rendered: expected labels (strings) and series, each with one finite number per label";function db(){return{name:es,description:"Show a chart in the conversation. Supply the data and the page draws it. Every series must have exactly one point per label.",parameters:{type:"object",properties:{kind:{type:"string",enum:["bar","line","pie","scatter","stacked"]},title:{type:"string"},labels:{type:"array",items:{type:"string"}},series:{type:"array",items:{type:"object",properties:{label:{type:"string"},points:{type:"array",items:{type:"number"}}},required:["points"]}}},required:["labels","series"],"x-summary":"Draw a chart"},handler:t=>J_(t)?"chart rendered":Q_,render:K_}}function Ht(t){t.style.height="auto",t.style.height=`${t.scrollHeight}px`}function Hu(t,e){return new Promise((n,r)=>{let o=new FormData;o.append("file",t);let i=new XMLHttpRequest;i.open("POST",e.url),i.withCredentials=e.credentials==="include";for(let[l,c]of Object.entries(e.headers??{}))i.setRequestHeader(l,c);let a=e.onProgress;a!==void 0&&i.upload.addEventListener("progress",l=>{l.lengthComputable&&a(l.total===0?0:l.loaded/l.total)}),i.addEventListener("load",()=>{if(i.status>=200&&i.status<300)try{n(eT(JSON.parse(i.responseText)))}catch{r(new Error("upload returned an unreadable response"))}else r(new Error(tT(i)))}),i.addEventListener("error",()=>r(new Error("upload failed"))),i.addEventListener("abort",()=>r(new Error("upload cancelled")));let s=e.signal;s!==void 0&&s.addEventListener("abort",()=>i.abort()),i.send(o)})}function eT(t){if(typeof t!="object"||t===null)throw new Error("not an object");let e=t,n=e.id,r=e.name,o=e.mime,i=e.size,a=e.url;if(typeof n!="string"||typeof r!="string"||typeof o!="string"||typeof i!="number")throw new Error("missing fields");return typeof a=="string"?{id:n,name:r,mime:o,size:i,url:a}:{id:n,name:r,mime:o,size:i}}function tT(t){try{let e=JSON.parse(t.responseText);if(typeof e.error=="string")return e.error}catch{}return`upload failed (${t.status})`}function ts(t){let e=document.createElement("div");e.className="attachment-chips",e.setAttribute("part","attachment-chips");for(let n of t)e.appendChild(nT(n));return e}function nT(t){let e=document.createElement("div");e.className="attachment-chip attachment-chip--ready",e.setAttribute("part","attachment-chip");let n=document.createElement("span");n.className="attachment-chip-icon",n.setAttribute("part","attachment-chip-icon"),n.innerHTML=Fu(t.mime),n.setAttribute("aria-hidden","true");let r=document.createElement("span");r.className="attachment-chip-name",r.setAttribute("part","attachment-chip-name"),r.textContent=t.name,r.title=t.name;let o=document.createElement("span");return o.className="attachment-chip-size",o.setAttribute("part","attachment-chip-size"),o.textContent=ns(t.size),e.append(n,r,o),e}function Fu(t){return t.startsWith("image/")?gp:t==="application/pdf"?vp:t.startsWith("text/")?bp:mp}function ns(t){if(t<1024)return`${t} B`;let e=["KB","MB","GB"],n=t/1024,r=0;for(;n>=1024&&r<e.length-1;)n/=1024,r+=1;return`${n<10?Math.round(n*10)/10:Math.round(n)} ${e[r]}`}var rs=class{element;#e;#t;#n=[];constructor(e){this.#e=e,this.#t=e.strings??pe,this.element=document.createElement("div"),this.element.className="attachment-tray",this.element.setAttribute("part","attachment-tray"),this.element.hidden=!0}add(e){let n={localId:Ee(),file:e,status:je.UPLOADING,progress:0,ref:null,error:"",controller:null};this.#n.push(n);let r=this.#o(e);if(r!==null){n.status=je.ERROR,n.error=r,this.#a(),this.#e.onChange?.();return}this.#a(),this.#e.onChange?.(),this.#r(n)}readyRefs(){let e=[];for(let n of this.#n)n.ref!==null&&e.push(n.ref);return e}hasPending(){return this.#n.some(e=>e.status===je.UPLOADING)}pendingCount(){return this.#n.filter(e=>e.status===je.UPLOADING).length}isEmpty(){return this.#n.length===0}clearReady(){this.#n=this.#n.filter(e=>e.status===je.UPLOADING),this.#a()}clear(){for(let e of this.#n)e.controller?.abort();this.#n=[],this.#a()}dispose(){for(let e of this.#n)e.controller?.abort()}#o(e){return this.#e.maxBytes>0&&e.size>this.#e.maxBytes?le(this.#t.tooLarge,{size:ns(this.#e.maxBytes)}):rT(this.#e.accept,e)?null:this.#t.fileTypeNotAllowed}#r(e){let n=this.#o(e.file);if(n!==null){e.status=je.ERROR,e.error=n,this.#a(),this.#e.onChange?.();return}e.status=je.UPLOADING,e.progress=0,e.error="";let r=new AbortController;e.controller=r,this.#a(),this.#e.upload(e.file,o=>{e.progress=o,this.#a()},r.signal).then(o=>{e.status=je.READY,e.ref=o}).catch(o=>{e.status=je.ERROR,e.error=o instanceof Error?o.message:this.#t.uploadFailed}).finally(()=>{e.controller=null,this.#a(),this.#e.onChange?.()})}#i(e){e.controller?.abort(),this.#n=this.#n.filter(n=>n!==e),this.#a(),this.#e.onChange?.()}#a(){this.element.replaceChildren(),this.element.hidden=this.#n.length===0;for(let e of this.#n)this.element.appendChild(this.#l(e))}#l(e){let n=document.createElement("div");n.className=`attachment-chip attachment-chip--${e.status}`,n.setAttribute("part","attachment-chip");let r=document.createElement("span");r.className="attachment-chip-icon",r.setAttribute("part","attachment-chip-icon"),r.innerHTML=Fu(e.file.type),r.setAttribute("aria-hidden","true");let o=document.createElement("span");o.className="attachment-chip-name",o.setAttribute("part","attachment-chip-name"),o.textContent=e.file.name,o.title=e.file.name;let i=document.createElement("span");if(i.className="attachment-chip-size",i.setAttribute("part","attachment-chip-size"),i.textContent=e.status===je.ERROR?e.error:ns(e.file.size),n.append(r,o,i),e.status===je.UPLOADING){let s=document.createElement("div");s.className="attachment-chip-bar",s.setAttribute("part","attachment-chip-bar");let l=document.createElement("div");l.className="attachment-chip-bar-fill",l.setAttribute("part","attachment-chip-bar-fill"),l.style.width=`${Math.round(e.progress*100)}%`,s.appendChild(l),n.appendChild(s)}if(e.status===je.ERROR){let s=document.createElement("button");s.type="button",s.className="attachment-chip-retry",s.setAttribute("part","attachment-chip-retry"),s.title=this.#t.retry,s.setAttribute("aria-label",this.#t.retryUpload),s.textContent="\u21BB",s.addEventListener("click",()=>this.#r(e)),n.appendChild(s)}let a=document.createElement("button");return a.type="button",a.className="attachment-chip-remove",a.setAttribute("part","attachment-chip-remove"),a.title=this.#t.remove,a.setAttribute("aria-label",this.#t.removeAttachment),a.textContent="\u2715",a.addEventListener("click",()=>this.#i(e)),n.appendChild(a),n}};function rT(t,e){let n=or(t).map(i=>i.toLowerCase());if(n.length===0)return!0;let r=e.type.toLowerCase(),o=e.name.toLowerCase();return n.some(i=>i.startsWith(".")?o.endsWith(i):i.endsWith("/*")?r.startsWith(i.slice(0,-1)):r===i)}var os=class{#e;#t=null;constructor(e){this.#e=e}get tray(){return this.#t}wire(e){this.#t?.element.remove(),this.#t=null;let n=this.#e.element.getAttribute("data-attachments-url"),r=this.#e.uploadHandler()??this.#n(n);if(r===null)return;let o=this.#e.element.getAttribute("data-attachment-accept")??"",i=new rs({upload:r,maxBytes:this.#o(),accept:o,strings:this.#e.strings(),onChange:()=>this.#u(i)});this.#t=i,this.#e.slot.appendChild(this.#t.element),this.#e.fileInput.accept=o,this.#e.button.hidden=!1,this.#r(e),this.#l(i,e)}attach(e){return this.#t===null?!1:(this.#t.add(e),!0)}onFilesPicked(){let e=this.#e.fileInput,n=e.files;if(n!==null)for(let r of Array.from(n))this.#t?.add(r);e.value=""}#n(e){return e===null?null:(n,r,o)=>Hu(n,{url:e,headers:this.#e.headersFor(e),...this.#e.credentialsOption(),onProgress:r,signal:o})}#o(){let e=this.#e.element.getAttribute("data-attachment-max-bytes");if(e===null)return bl;let n=Number.parseInt(e,10);return Number.isFinite(n)&&n>=0?n:bl}#r(e){let n=this.#e.chat;n.addEventListener("dragover",r=>{r.preventDefault(),n.classList.add("chat--dragover")},{signal:e}),n.addEventListener("dragleave",()=>{n.classList.remove("chat--dragover")},{signal:e}),n.addEventListener("drop",r=>{r.preventDefault(),n.classList.remove("chat--dragover");let o=r.dataTransfer?.files;if(o!==void 0)for(let i of Array.from(o))this.#t?.add(i)},{signal:e})}#i(e,n,r){let o=this.#a(),i=n.getData("text/plain");o===null||i.length<o||(e.preventDefault(),r.add(new File([i],`pasted-${pb()}.txt`,{type:"text/plain"})))}#a(){let e=this.#e.element.getAttribute("data-paste-attach");if(e===null)return $o;if(e==="off")return null;let n=Number.parseInt(e,10);return Number.isNaN(n)||n<=0?(console.warn(`<ag-ui-chat>: data-paste-attach="${e}" is neither "off" nor a positive number of characters, so the default of ${$o} is used.`),$o):n}#l(e,n){this.#e.chat.addEventListener("paste",r=>{let o=r.clipboardData??null;if(o===null)return;let i=Array.from(o.files);if(i.length===0){this.#i(r,o,e);return}o.getData("text/plain")===""&&r.preventDefault();for(let a of i)this.#t?.add(oT(a))},{signal:n})}#u(e){this.#e.element.dispatchEvent(new CustomEvent(dl,{detail:{attachments:e.readyRefs(),pending:e.pendingCount()},bubbles:!0,composed:!0}))}};function pb(){return new Date().toISOString().replace(/[:.]/g,"-")}function oT(t){if(t.name!=="")return t;let e=t.type.split("/")[1]??t.type,n=pb();return new File([t],e===""?`pasted-${n}`:`pasted-${n}.${e}`,{type:t.type})}async function Gu(t,e){let n=new FormData;n.append("audio",t,"recording.webm");let r=await fetch(e.url,rt({method:"POST",headers:{...e.headers??{}},body:n},e.credentials));if(!r.ok)throw new Error(await iT(r));let o=await r.json();if(typeof o=="object"&&o!==null&&typeof o.text=="string")return o.text;throw new Error("transcription returned an unreadable response")}async function iT(t){try{let e=await t.json();if(typeof e.error=="string")return e.error}catch{}return`transcription failed (${t.status})`}var hb=12e4,is=class{element;#e;#t;#n;#o="idle";#r=null;#i=null;#a=[];#l=null;#u=!1;#d=!1;#c={};constructor(e){this.#e=e.transcribe,this.#t=e.onText,this.#n=e.strings??pe,this.element=document.createElement("button"),this.element.type="button",this.element.className="voice-btn",this.element.setAttribute("part","voice-button");let n=document.createElement("slot");n.name="icon-voice",n.innerHTML=sp,this.element.append(n),this.#b("idle"),this.element.addEventListener("click",()=>{this.toggle()})}async toggle(){if(this.#o==="recording"){this.#s();return}this.#o!=="transcribing"&&await this.#h()}async#h(){let e={};this.#c=e;let n;try{n=await navigator.mediaDevices.getUserMedia({audio:!0})}catch{n=null}if(e!==this.#c||this.#d){for(let o of n?.getTracks()??[])o.stop();return}if(n===null){this.#g(this.#n.transcriptionFailed);return}this.#i=n,this.#a=[],this.#u=!1;let r;try{r=new MediaRecorder(n),r.addEventListener("dataavailable",o=>{this.#a.push(o.data)}),r.addEventListener("stop",()=>{this.#m(r.mimeType)}),this.#r=r,r.start()}catch{this.#g(this.#n.transcriptionFailed);return}this.#l=setTimeout(()=>{this.#u=!0,this.#s()},hb),this.#b("recording")}#s(){this.#f(),this.#r?.stop()}#f(){this.#l!==null&&(clearTimeout(this.#l),this.#l=null)}dispose(){this.#d=!0,this.#f(),this.#r!==null&&this.#r.state!=="inactive"&&this.#r.stop(),this.#r=null,this.#y()}async#m(e){if(this.#d)return;this.#y(),this.#b("transcribing");let n=new Blob(this.#a,{type:e||"audio/webm"});try{let r=await this.#e(n);if(this.#d)return;this.#b("idle"),this.#u&&(this.element.title=le(this.#n.recordingLimit,{n:hb/6e4})),r!==""&&this.#t(r)}catch(r){this.#g(r instanceof Error?r.message:this.#n.transcriptionFailed)}finally{this.#r=null}}#y(){for(let e of this.#i?.getTracks()??[])e.stop();this.#i=null}#g(e){this.#d||(this.#y(),this.#r=null,this.#b("idle"),this.element.title=e)}#b(e){this.#o=e,this.element.dataset.state=e;let n=this.#p(e);this.element.title=n,this.element.setAttribute("aria-label",n),this.element.setAttribute("aria-pressed",String(e==="recording")),this.element.disabled=e==="transcribing"}#p(e){return e==="recording"?this.#n.stopRecording:e==="transcribing"?this.#n.transcribing:this.#n.recordVoice}};var as=class{#e;#t=null;constructor(e){this.#e=e}wire(){this.#t?.element.remove(),this.#t=null;let e=this.#e.element.getAttribute("data-transcribe-url"),n=this.#e.transcribeHandler()??this.#n(e);n!==null&&(this.#t=new is({transcribe:n,onText:r=>this.#o(r),strings:this.#e.strings()}),this.#e.slot.appendChild(this.#t.element))}dispose(){this.#t?.dispose()}#n(e){return e===null?null:n=>Gu(n,{url:e,headers:this.#e.headersFor(e),...this.#e.credentialsOption()})}#o(e){let n=this.#e.input,r=n.value.trim();n.value=r===""?e:`${r} ${e}`,this.#e.onInput(),n.focus()}};var ss=class{chips;palette;#e;#t=[];#n=!1;#o=!1;#r=[];#i=0;constructor(e){this.#e=e,this.chips=document.createElement("div"),this.chips.className="skill-chips",this.chips.setAttribute("part","skill-chips"),this.chips.hidden=!0,this.palette=document.createElement("div"),this.palette.className="skill-palette",this.palette.setAttribute("part","skill-palette"),this.palette.setAttribute("role","listbox"),this.palette.hidden=!0}setSkills(e){this.#t=e,this.#d()}enableChips(e){this.#n=e,this.#d()}enableSlash(e){this.#o=e}isOpen(){return!this.palette.hidden}onInput(e){this.#o&&e.startsWith("/")?this.#a(e.slice(1)):this.close()}onKeydown(e){return this.isOpen()?e.key==="ArrowDown"?(this.#l(1),!0):e.key==="ArrowUp"?(this.#l(-1),!0):e.key==="Escape"?(this.close(),!0):e.key==="Enter"?(this.#r.slice(this.#i,this.#i+1).forEach(n=>{this.#u(n)}),!0):!1:!1}close(){this.palette.hidden=!0,this.palette.replaceChildren()}#a(e){let n=e.trim().toLowerCase(),r=this.#t.filter(o=>o.name.toLowerCase().includes(n)||o.title.toLowerCase().includes(n));if(r.length===0){this.close();return}this.#r=r,this.#i=0,this.#c(),this.palette.hidden=!1}#l(e){let n=this.#r.length;this.#i=(this.#i+e+n)%n,this.#c()}#u(e){this.close(),this.#e(e)}#d(){this.chips.replaceChildren();let e=this.#n?this.#t.filter(n=>n.chip===!0):[];this.chips.hidden=e.length===0;for(let n of e){let r=document.createElement("button");r.type="button",r.className="skill-chip",r.setAttribute("part","skill-chip"),r.textContent=n.title,r.title=`/${n.name}`,r.addEventListener("click",()=>this.#u(n)),this.chips.appendChild(r)}}#c(){this.palette.replaceChildren(),this.#r.forEach((e,n)=>{let r=document.createElement("button");r.type="button",r.className="skill-item",r.setAttribute("part","skill-item"),r.setAttribute("role","option"),r.setAttribute("aria-selected",n===this.#i?"true":"false");let o=document.createElement("span");o.className="skill-item-title",o.setAttribute("part","skill-item-title");let i=document.createElement("code");if(i.className="skill-item-token",i.setAttribute("part","skill-item-token"),i.textContent=`/${e.name}`,o.append(i,document.createTextNode(` ${e.title}`)),r.appendChild(o),e.description!==void 0){let a=document.createElement("span");a.className="skill-item-desc",a.setAttribute("part","skill-item-desc"),a.textContent=e.description,r.appendChild(a)}r.addEventListener("click",()=>this.#u(e)),this.palette.appendChild(r)})}};var aT=500;function Wr(t,e=[],n){for(let r of vT(e)){if(!t.contains(r.startContainer)||!t.contains(r.endContainer))continue;let o=document.createRange();o.setStart(r.startContainer,r.startOffset),o.setEnd(r.endContainer,r.endOffset);let i=uT(o).trim();if(i!=="")return{text:i,rect:gT(o,n)}}return null}function Zu(t){let e=sT(t);return e.length===0?"":`${cT(e.join(`
`)).split(`
`).map(o=>`> ${o}`.trimEnd()).join(`
`)}

`}function sT(t){let e=t.split(/\r\n?|\n/).map(i=>i.trimEnd()),n=e.filter(i=>i!=="").map(lT),r=n.length===0?0:Math.min(...n),o=[];for(let i of e){let a=i.slice(r);a===""&&(o.length===0||o[o.length-1]==="")||o.push(a)}for(;o[o.length-1]==="";)o.pop();return o}function lT(t){return t.length-t.trimStart().length}function cT(t){return t.length>500?`${t.slice(0,500).trimEnd()}...`:t}function uT(t){let e="";for(let n of fT(t)){let r=n.parentElement;if(!mT(r))continue;let o=n===t.startContainer?t.startOffset:0,i=n===t.endContainer?t.endOffset:n.data.length;e+=dT(n.data.slice(o,i),r)}return e}function dT(t,e){return pT.has(hT(e))?t:t.replace(/[^\S\n]*\n[^\S\n]*/g,`
`).replace(/[^\S\n]+/g," ")}var pT=new Set(["pre","pre-wrap","break-spaces"]);function hT(t){return window.getComputedStyle(t).whiteSpace}function fT(t){let e=t.commonAncestorContainer;if(e.nodeType===Node.TEXT_NODE)return[e];let n=[],r=document.createTreeWalker(e,NodeFilter.SHOW_TEXT);for(let o=r.nextNode();o!==null;o=r.nextNode())t.intersectsNode(o)&&n.push(o);return n}function mT(t){return typeof t.checkVisibility!="function"?!0:t.checkVisibility({contentVisibilityAuto:!0,opacityProperty:!0,visibilityProperty:!0})}function gT(t,e){let n=[...t.getClientRects()];if(n.length===0)return t.getBoundingClientRect();if(e===void 0)return n[0];let r=n[0],o=fb(r,e);for(let i of n.slice(1)){let a=fb(i,e);a<o&&(o=a,r=i)}return r}function fb(t,e){let n=Math.max(t.left-e.x,0,e.x-t.right),r=Math.max(t.top-e.y,0,e.y-t.bottom);return Math.hypot(n,r)}function vT(t){let e=window.getSelection();if(e===null)return[];let n=[...bT(e,t)];return e.rangeCount>0&&n.push(e.getRangeAt(0)),n}function bT(t,e){let n=t.getComposedRanges;if(n===void 0)return[];try{return n.call(t,{shadowRoots:e})}catch{return n.call(t,...e)}}var Bu=6,yT=`
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
`;function Vu(t){let{within:e,exclude:n,onQuote:r}=t,o=new CSSStyleSheet;o.replaceSync(yT),document.adoptedStyleSheets=[...document.adoptedStyleSheets,o];let i=document.createElement("button");i.type="button",i.className="ag-ui-quote-offer",i.textContent=t.label,i.hidden=!0,document.body.append(i);let a="",s=()=>{i.hidden=!0,a=""},l=u=>{if(u.composedPath().includes(n)){s();return}if(wT()){s();return}let h=u instanceof MouseEvent?{x:u.clientX,y:u.clientY}:void 0,m=Wr(e,[],h);if(m===null){s();return}a=m.text,ET(i,m.rect)},c=u=>{i.contains(u.target)||s()};return e.addEventListener("mouseup",l),e.addEventListener("keyup",l),e.addEventListener("mousedown",c),document.addEventListener("scroll",s,!0),window.addEventListener("resize",s),i.addEventListener("mousedown",u=>{u.preventDefault()}),i.addEventListener("click",()=>{let u=a;window.getSelection()?.removeAllRanges(),s(),r(u)}),{element:i,detach(){e.removeEventListener("mouseup",l),e.removeEventListener("keyup",l),e.removeEventListener("mousedown",c),document.removeEventListener("scroll",s,!0),window.removeEventListener("resize",s),i.remove(),document.adoptedStyleSheets=document.adoptedStyleSheets.filter(u=>u!==o)}}}function wT(){let t=document.activeElement;return t===null?!1:t.tagName==="INPUT"||t.tagName==="TEXTAREA"||t.isContentEditable===!0}function ET(t,e){t.hidden=!1;let n=e.top<Bu+t.offsetHeight;t.dataset.below=String(n),t.style.top=`${n?e.bottom+Bu:e.top-Bu}px`;let r=t.offsetWidth/2,o=e.left+e.width/2,i=document.documentElement.clientWidth;t.style.left=`${Math.min(Math.max(o,r),i-r)}px`}var ju=6,ls=class{button=document.createElement("button");#e;#t="";#n=null;constructor(e){this.#e=e}insert(e){let n=Zu(e);if(n==="")return;let r=this.#e.input,o=r.value.replace(/\s+$/,"");r.value=o===""?n:`${o}

${n}`,this.#e.autoGrow(),r.focus();let i=r.value.length;r.setSelectionRange(i,i)}offerInPage(e){this.#n?.detach();let n=Vu({within:e,label:this.#e.strings().quoteSelection,exclude:this.#e.element,onQuote:r=>this.#e.quote(r)});return this.#n=n,()=>{n.detach(),this.#n===n&&(this.#n=null)}}detachPageOffer(){this.#n?.detach(),this.#n=null}mount(e){let n=this.button;n.className="quote-selection",n.type="button",n.setAttribute("part","quote-selection"),n.textContent=this.#e.strings().quoteSelection,n.hidden=!0,n.addEventListener("mousedown",o=>{o.preventDefault()},{signal:e}),n.addEventListener("click",()=>{this.#e.quote(this.#t),window.getSelection()?.removeAllRanges(),this.#a()},{signal:e});let r=this.#e.messages;r.addEventListener("mouseup",o=>this.#r(o),{signal:e}),r.addEventListener("keyup",()=>this.#r(),{signal:e}),r.addEventListener("mousedown",()=>this.#a(),{signal:e})}#o(){return this.#e.element.getAttribute("data-quote-selection")!=="false"}#r(e){if(!this.#o())return;let n=e===void 0?void 0:{x:e.clientX,y:e.clientY},r=Wr(this.#e.messages,[this.#e.root],n);if(r===null){this.#a();return}this.#t=r.text,this.#i(r.rect)}#i(e){let n=this.button;n.hidden=!1;let r=this.#e.messagesWrap.getBoundingClientRect(),o=e.top-r.top,i=o<ju+n.offsetHeight;n.dataset.below=String(i),n.style.top=`${i?e.bottom-r.top+ju:o-ju}px`;let a=n.offsetWidth/2,s=e.left+e.width/2-r.left;n.style.left=`${Math.min(Math.max(s,a),r.width-a)}px`}#a(){this.button.hidden=!0,this.#t=""}};function qr(t,e=Date.now(),n=pe){if(!Number.isFinite(t))return n.justNow;let r=Math.round((e-t)/1e3);if(r<60)return n.justNow;let o=Math.round(r/60);if(o<60)return le(n.minutesAgo,{n:o});let i=Math.round(o/60);if(i<24)return le(n.hoursAgo,{n:i});let a=Math.round(i/24);return a<7?le(n.daysAgo,{n:a}):le(n.weeksAgo,{n:Math.round(a/7)})}function mb(t){return t.preview!==void 0&&t.preview!==null&&t.preview!==""?t.preview:null}function gb(t){return t.replace(/\s+/g," ").trim()}var Yr=class{element;#e;#t;#n;#o=null;#r=null;#i;#a=[];constructor(e,n=pe){this.#e=e,this.#i=n,this.element=document.createElement("div"),this.element.className="checkpoints",this.element.setAttribute("part","checkpoints"),this.element.setAttribute("role","dialog"),this.element.setAttribute("aria-label",n.checkpoints),this.element.tabIndex=-1,this.element.hidden=!0;let r=document.createElement("div");r.className="checkpoints-header",r.setAttribute("part","checkpoints-header"),this.#n=document.createElement("span"),this.#n.className="checkpoints-title",this.#n.setAttribute("part","checkpoints-title"),this.#n.textContent=n.checkpoints,r.append(this.#n),this.#t=document.createElement("div"),this.#t.className="checkpoints-list",this.#t.setAttribute("part","checkpoints-list"),this.element.append(r,this.#t),this.element.addEventListener("keydown",o=>this.#c(o))}setRuns(e){this.#a=e,this.#h()}setRelativeTimeFormatter(e){this.#r=e}#l(e){return this.#r!==null?this.#r(e):qr(e,Date.now(),this.#i)}setStrings(e){this.#i=e,this.element.setAttribute("aria-label",e.checkpoints),this.#n.textContent=e.checkpoints,this.#h()}open(){this.open_||(this.#o=this.#u(),this.element.hidden=!1,(this.#d()[0]??this.element).focus())}close(){this.open_&&(this.element.hidden=!0,this.#o?.focus(),this.#o=null)}#u(){return this.element.getRootNode().activeElement}#d(){return Array.from(this.element.querySelectorAll("button, [tabindex]")).filter(e=>!e.hidden)}#c(e){if(e.key==="Escape"){e.stopPropagation(),this.close();return}if(e.key!=="Tab")return;let n=this.#d(),r=n[0],o=n[n.length-1],i=this.#u();e.shiftKey&&i===r?(e.preventDefault(),o?.focus()):!e.shiftKey&&i===o&&(e.preventDefault(),r?.focus())}get open_(){return!this.element.hidden}#h(){if(this.#t.replaceChildren(),this.#a.length===0){let n=document.createElement("div");n.className="checkpoints-empty",n.setAttribute("part","checkpoints-empty"),n.textContent=this.#i.noCheckpoints,this.#t.append(n);return}let e=this.#s();for(let n of this.#a)this.#t.append(this.#f(n,e))}#s(){let e=new Set,n=new Set;for(let r of this.#a){let o=mb(r);if(o===null)continue;let i=gb(o);e.has(i)&&n.add(i),e.add(i)}return n}#f(e,n){let r=document.createElement("div");r.className="checkpoint-row",r.setAttribute("part","checkpoint-row");let o=mb(e),i=e.started_at===null?null:this.#l(Date.parse(e.started_at)),a=document.createElement("span");if(a.className="checkpoint-label",a.setAttribute("part","checkpoint-label"),a.textContent=o??i??e.run_id,r.append(a),o!==null&&i!==null){let l=document.createElement("span");l.className="checkpoint-time",l.setAttribute("part","checkpoint-time"),l.textContent=i,r.append(l)}if((o===null?i!==null:n.has(gb(o)))&&e.run_id!==""){let l=document.createElement("span");l.className="checkpoint-id",l.setAttribute("part","checkpoint-id"),l.textContent=e.run_id.slice(0,8),l.title=e.run_id,r.append(l)}if(e.parent_run_id!==null){let l=document.createElement("span");l.className="checkpoint-branch",l.setAttribute("part","checkpoint-branch"),l.textContent=this.#i.forkedRun,l.title=e.parent_run_id,r.append(l)}return r.append(this.#m(e.run_id,"resume",this.#i.resumeRun),this.#m(e.run_id,"fork",this.#i.forkRun)),r}#m(e,n,r){let o=document.createElement("button");return o.type="button",o.className=`checkpoint-action checkpoint-${n}`,o.setAttribute("part",`checkpoint-action checkpoint-${n}`),o.textContent=r,o.addEventListener("click",()=>{this.close(),this.#e(e,n)}),o}};function Wu(t){let e=Ya(t,"attachments");return Array.isArray(e)?e.filter(xT):[]}function xT(t){if(typeof t!="object"||t===null)return!1;let e=t;return typeof e.id=="string"&&typeof e.name=="string"&&typeof e.mime=="string"&&typeof e.size=="number"&&(e.url===void 0||typeof e.url=="string")}var Xr=class{#e;#t;#n;constructor(e,n=()=>({}),r=()=>{}){this.#e=e.endsWith("/")?e:`${e}/`,this.#t=n,this.#n=r}async list(){try{let e=await fetch(this.#e,rt({method:"GET",headers:{Accept:"application/json",...this.#t()}},this.#n()));return e.ok?(await e.json()).runs??[]:[]}catch{return[]}}async continuable(){return(await this.list()).filter(e=>e.continuable)}resumeUrl(e){return this.#o("resume",e)}forkUrl(e){return this.#o("fork",e)}#o(e,n){return`${this.#e.slice(0,-5)}${e}/${encodeURIComponent(n)}/`}};function Kr(t){return t===Ge.FAILED?Q.ERROR:t===Ge.DENIED?Q.DECLINED:t===Ge.INTERRUPTED?Q.INTERRUPTED:Q.DONE}var cs=class{#e;#t="";#n=[];#o=0;#r=0;#i=null;#a=null;#l=null;#u=null;constructor(e){this.#e=e}get threadId(){return this.#t}get restored(){return this.#n}get continuation(){return this.#l}adoptActiveThread(){this.#t=this.#e.conversationStore().threadId()}startThread(){this.#t=ja(this.#e.conversationStore())}stopContinuation(){this.#l?.cancel(),this.#l=null}forgetRestored(){this.#n=[],this.#o+=1,this.#r+=1,this.#d()}#d(){let e=this.#u;this.#u=null,e?.()}reapUnsent(){this.#e.conversationStore().isUnsent?.(this.#t)===!0&&this.#e.conversationStore().clear(this.#t)}runs(){let e=this.#e.element.getAttribute("data-runs-url");return e===null||e===""?null:(this.#a===null&&(this.#a=new Xr(e,()=>this.#e.headersFor(e),()=>this.#e.requestCredentials())),this.#a)}openThreads(){this.#e.checkpoints.close(),this.refreshDrawer(),this.#e.drawer.open()}openCheckpoints(){this.#e.drawer.close(),this.#c(),this.#e.checkpoints.open()}async switchThread(e){e!==this.#t&&(this.#e.cancelRun(),this.#e.resetState(),this.#e.conversationStore().setActiveThread(e),this.#t=e,this.#e.setRunning(!1),await this.rehydrate())}renameThread(e,n){this.#e.conversationStore().renameThread(e,n),this.refreshDrawer()}deleteThread(e){let n=e===this.#t;n&&this.#e.cancelRun(),this.#e.conversationStore().clear(e),n&&(this.#e.resetState(),this.adoptActiveThread(),this.#e.setRunning(!1)),this.refreshDrawer()}async refreshDrawer(){this.#e.drawer.setRelativeTimeFormatter(this.#e.formatRelativeTime()),this.#e.drawer.setThreads(await this.#e.conversationStore().listThreads(),this.#t)}async#c(){let e=this.runs();this.#e.checkpoints.setRelativeTimeFormatter(this.#e.formatRelativeTime()),this.#e.checkpoints.setRuns(e===null?[]:await e.continuable())}async continueRun(e,n){let r=this.runs();if(r===null)return;if(this.#e.running()||this.#l!==null){let s=this.#e.strings();this.#h(this.#u===null?s.continueWhileRunning:s.continueWhileLoading);return}let o=this.#e.input.value.trim();if(o===""){this.#h(this.#e.strings().continueNeedsTurn);return}this.#e.recordTurn(o),this.#e.input.value="",this.#e.autoGrow();let i=this.#o,a=this.#e.buildClient({endpoint:n==="resume"?r.resumeUrl(e):r.forkUrl(e),initialMessages:[],follows:this.#e.client()?.messages??this.#n,onSaved:s=>{i===this.#o&&(this.#n=s,this.#e.releaseClient())}});this.#l=a;try{if(this.#e.announceTurn(o),this.#l!==a)return;await a.send(o)}finally{this.#l===a&&(this.#l=null,this.#e.continuationEnded())}}#h(e){this.#e.hint.textContent=e,this.#e.hint.hidden=!1,this.#e.input.focus()}async rehydrate(){this.#r+=1;let e=this.#r,n=this.#t,r=this.#e.conversationStore();this.#i={generation:e,store:r,threadId:n};let o=r.loadCheckpoint(n),i=o===null?new Promise(l=>{this.#u=l}):null,a=this.#u,s=this.#e.holdRun(i);try{this.#e.element.setAttribute("data-restoring","");let l;try{l=await r.loadMessages(n)}finally{e===this.#r&&this.#e.element.removeAttribute("data-restoring")}if(!this.#s(e)){this.#f(r,n,o);return}if(l!==null){let c=this.#e.strings().callNotFinished,u=qa(l,h=>({id:Ee(),role:"tool",content:c,toolCallId:h,metadata:{outcome:Ge.INTERRUPTED}}),new Set(o===null?[]:[o.toolCallId]));this.#n=u;for(let h of u)if(this.replay(h),!this.#s(e)){this.#f(r,n,o);return}}if(o!==null){await this.#b(o,e);return}this.#y(l)}finally{s.release(),this.#u===a&&this.#d()}}#s(e){return e===this.#r&&this.#e.element.isConnected}#f(e,n,r){r!==null&&!this.#m(e,n)&&e.saveCheckpoint(n,null)}#m(e,n){let r=this.#i;return r?.generation===this.#r&&r.store===e&&r.threadId===n}#y(e){let n=e?.at(-1);n===void 0||n.role!==Fe.USER||this.#e.transcript.appendNotice("\u26A0",this.#e.strings().runInterrupted,"interrupted")}replay(e){let n=typeof e.content=="string"?e.content:"";if(e.role===Fe.USER){let r=Wu(e);if(n!==""||r.length>0){let o=this.#e.appendMessage(Fe.USER,n);r.length>0&&o.appendChild(ts(r))}return}if(e.role===Fe.ASSISTANT){if(n!==""){let r=this.#e.appendMessage(Fe.ASSISTANT,n);r.classList.add("message--restored");let o=e.id;this.#e.actions.attach(r,typeof o=="string"&&o!==""?{messageId:o}:{rateable:!1})}for(let r of ST(e.toolCalls)){let o={id:r.id,name:r.function.name,args:this.#g(r.function.arguments)};if(this.#e.transcript.noticeIfSkillLoad(o))continue;this.#e.transcript.setCardElement(o.id,this.#e.transcript.cardFor(o).element);let i=this.#e.tools.resolve(o.name)?.render;i!==void 0&&this.#e.transcript.renderToolOutput(i,o)}return}if(e.role==="activity"){let r=e;typeof r.activityType=="string"&&this.#e.activities.draw(e.id,r.activityType,r.content);return}if(e.role==="tool"){let r=this.#e.transcript.card(e.toolCallId);r!==void 0&&r.settle(Kr(Ya(e,"outcome")),$n(e.content))}}#g(e){if(typeof e!="string")return{};try{let n=JSON.parse(e);if(typeof n=="object"&&n!==null)return n}catch{}return{}}async#b(e,n){this.#e.conversationStore().saveCheckpoint(this.#t,null);let r=this.#e.ensureClient(),o=JSON.stringify(this.#e.navigationResult().call(this.#e.element,e));this.#s(n)&&(r.addToolResult(e.toolCallId,o),this.#e.transcript.card(e.toolCallId)?.settle(Q.DONE,o),await r.resume())}};function ST(t){return Array.isArray(t)?t.filter(_T):[]}function _T(t){if(typeof t!="object"||t===null)return!1;let e=t;return typeof e.id=="string"&&typeof e.function?.name=="string"}var TT=8,us=class{element;#e;#t;#n;#o;#r;#i=null;#a;#l=[];#u="";#d;#c;#h="";#s=null;constructor(e,n=pe){this.#e=e,this.#a=n,this.element=document.createElement("div"),this.element.className="drawer",this.element.setAttribute("part","drawer"),this.element.hidden=!0;let r=document.createElement("div");r.className="drawer-backdrop",r.setAttribute("part","drawer-backdrop"),r.addEventListener("click",()=>this.close()),this.#t=document.createElement("div"),this.#t.className="drawer-panel",this.#t.setAttribute("part","drawer-panel"),this.#t.setAttribute("role","dialog"),this.#t.setAttribute("aria-modal","true"),this.#t.setAttribute("aria-label",n.chatHistory),this.#t.addEventListener("keydown",i=>this.#y(i));let o=document.createElement("div");o.className="drawer-header",o.setAttribute("part","drawer-header"),this.#n=document.createElement("span"),this.#n.className="drawer-title",this.#n.setAttribute("part","drawer-title"),this.#n.textContent=n.chats,this.#o=document.createElement("button"),this.#o.type="button",this.#o.className="drawer-new",this.#o.setAttribute("part","drawer-new"),this.#o.textContent=n.newChat,this.#o.addEventListener("click",()=>{this.close(),this.#e.onNew()}),this.#d=document.createElement("button"),this.#d.type="button",this.#d.className="drawer-close",this.#d.setAttribute("part","drawer-close"),this.#d.title=n.closeHistory,this.#d.setAttribute("aria-label",n.closeHistory),this.#d.append(document.createTextNode("\xD7")),this.#d.addEventListener("click",()=>this.close()),o.append(this.#n,this.#o,this.#d),this.#c=document.createElement("input"),this.#c.type="search",this.#c.className="drawer-filter",this.#c.setAttribute("part","drawer-filter"),this.#c.placeholder=n.searchConversations,this.#c.setAttribute("aria-label",n.searchConversations),this.#c.addEventListener("input",()=>{this.#h=this.#c.value.trim().toLowerCase(),this.#g()}),this.#r=document.createElement("div"),this.#r.className="drawer-list",this.#r.setAttribute("part","drawer-list"),this.#t.append(o,this.#c,this.#r),this.element.append(r,this.#t)}setRelativeTimeFormatter(e){this.#i=e}#f(e){return this.#i!==null?this.#i(e):qr(e,void 0,this.#a)}setStrings(e){this.#a=e,this.#t.setAttribute("aria-label",e.chatHistory),this.#n.textContent=e.chats,this.#o.textContent=e.newChat,this.#d.title=e.closeHistory,this.#d.setAttribute("aria-label",e.closeHistory),this.#c.placeholder=e.searchConversations,this.#c.setAttribute("aria-label",e.searchConversations),this.#g()}isOpen(){return!this.element.hidden}open(){this.isOpen()||(this.#s=this.#m(),this.element.hidden=!1,this.#o.focus())}close(){this.isOpen()&&(this.element.hidden=!0,this.#s?.focus(),this.#s=null)}toggle(){this.isOpen()?this.close():this.open()}#m(){return this.element.getRootNode().activeElement}#y(e){if(e.key==="Escape"){e.preventDefault(),this.close();return}if(e.key!=="Tab")return;let n=Array.from(this.#t.querySelectorAll("button, input, [tabindex]")).filter(a=>!a.hidden),r=n[0],o=n[n.length-1],i=this.#m();e.shiftKey&&i===r?(e.preventDefault(),o?.focus()):!e.shiftKey&&i===o&&(e.preventDefault(),r?.focus())}setThreads(e,n){this.#l=e,this.#u=n,this.#g()}#g(){this.#r.replaceChildren();let e=this.#l.length<TT;this.#c.hidden=e,e&&this.#h!==""&&(this.#c.value="",this.#h="");let n=this.#b();if(n.length===0){let r=document.createElement("div");r.className="drawer-empty",r.setAttribute("part","drawer-empty"),r.textContent=this.#l.length===0?this.#a.noConversations:this.#a.noMatches,this.#r.appendChild(r);return}for(let r of n)this.#r.appendChild(this.#p(r))}#b(){return this.#h===""?this.#l:this.#l.filter(e=>e.title.toLowerCase().includes(this.#h)||e.preview.toLowerCase().includes(this.#h))}#p(e){let n=document.createElement("div");n.className="drawer-row",n.setAttribute("part","drawer-row"),e.threadId===this.#u&&n.classList.add("drawer-row--active");let r=document.createElement("button");r.type="button",r.className="drawer-row-select",r.setAttribute("part","drawer-row-select");let o=document.createElement("span");o.className="drawer-row-title",o.setAttribute("part","drawer-row-title"),o.textContent=e.title;let i=document.createElement("span");i.className="drawer-row-time",i.setAttribute("part","drawer-row-time"),i.textContent=this.#f(e.updatedAt);let a=document.createElement("span");a.className="drawer-row-preview",a.setAttribute("part","drawer-row-preview"),a.textContent=e.preview,r.append(o,i,a),r.addEventListener("click",()=>{this.close(),this.#e.onSelect(e.threadId)});let s=document.createElement("button");s.type="button",s.className="drawer-row-rename",s.setAttribute("part","drawer-row-rename"),s.title=this.#a.rename,s.setAttribute("aria-label",this.#a.renameConversation),s.textContent="\u270E",s.addEventListener("click",()=>this.#_(n,e));let l=document.createElement("button");l.type="button",l.className="drawer-row-delete",l.setAttribute("part","drawer-row-delete"),l.title=this.#a.delete,l.setAttribute("aria-label",this.#a.deleteConversation),l.textContent="\u{1F5D1}",l.addEventListener("click",()=>this.#E(n,e));let c=document.createElement("div");return c.className="drawer-row-actions",c.setAttribute("part","drawer-row-actions"),c.append(s,l),n.append(r,c),n}#_(e,n){let r=document.createElement("input");r.type="text",r.className="drawer-rename-input",r.setAttribute("part","drawer-rename-input"),r.value=n.title;let o=!1,i=()=>{if(o)return;o=!0;let s=r.value.trim();s===""||s===n.title?this.#g():this.#e.onRename(n.threadId,s)},a=()=>{o||(o=!0,this.#g())};r.addEventListener("keydown",s=>{s.key==="Enter"?(s.preventDefault(),i()):s.key==="Escape"&&(s.preventDefault(),s.stopPropagation(),a())}),r.addEventListener("blur",()=>i()),e.replaceChildren(r),r.focus(),r.select()}#E(e,n){let r=document.createElement("div");r.className="drawer-confirm",r.setAttribute("part","drawer-confirm");let o=document.createElement("span");o.className="drawer-confirm-label",o.setAttribute("part","drawer-confirm-label"),o.textContent=this.#a.deletePrompt;let i=document.createElement("button");i.type="button",i.className="drawer-confirm-yes",i.setAttribute("part","drawer-confirm-yes"),i.textContent=this.#a.delete,i.addEventListener("click",()=>this.#e.onDelete(n.threadId));let a=document.createElement("button");a.type="button",a.className="drawer-confirm-no",a.setAttribute("part","drawer-confirm-no"),a.textContent=this.#a.cancel,a.addEventListener("click",()=>this.#g()),r.append(o,i,a),e.replaceChildren(r)}};var ds=class{#e=null;open(){return this.#e=new AbortController,this.#e.signal}close(){this.#e=null}abort(){this.#e?.abort()}};function Jr(t){return t!=="page"}var AT=new Set([null,"","floating","bottom-left"]);function ps(t){return AT.has(t)}function Ft(t,e,n=it){let r=Math.min(n,Math.max(0,(e.width-t.width)/2)),o=Math.min(n,Math.max(0,(e.height-t.height)/2));return{left:Math.max(e.left+r,Math.min(t.left,e.left+e.width-t.width-r)),top:Math.max(e.top+o,Math.min(t.top,e.top+e.height-t.height-o))}}function Qr(t,e,n=Yt){let r=t.right-t.left,o=t.bottom-t.top,i=Math.max(e.left+n,Math.min(t.left,e.left+e.width-n-r)),a=Math.max(e.top+n,Math.min(t.top,e.top+e.height-n-o));return{left:i,top:a,right:i+r,bottom:a+o}}var kT=4,IT=16,RT=64;function vb(t,e){let n=!1,{signal:r}=e;t.addEventListener("click",a=>{!n||a.detail===0||(n=!1,a.stopPropagation(),a.preventDefault())},{capture:!0,signal:r}),t.addEventListener("pointerdown",a=>{if(n=!1,!e.enabled())return;let s=e.rect(),l=a.clientX,c=a.clientY,u=!1,h=f=>{let p=f.clientX-l,b=f.clientY-c;if(!u&&Math.hypot(p,b)<kT)return;u=!0,t.setAttribute("data-dragging","true");let g=Ft({...s,left:s.left+p,top:s.top+b},e.viewport());e.apply(g.left,g.top)},m=f=>{if(window.removeEventListener("pointermove",h),window.removeEventListener("pointerup",m),window.removeEventListener("pointercancel",m),!u)return;t.removeAttribute("data-dragging"),n=!0;let p=Ft({...s,left:s.left+(f.clientX-l),top:s.top+(f.clientY-c)},e.viewport());e.commit(p.left,p.top)};window.addEventListener("pointermove",h),window.addEventListener("pointerup",m),window.addEventListener("pointercancel",m)},{signal:r});let o=null,i=()=>{if(o===null)return;let{left:a,top:s}=o;o=null,e.commit(a,s)};t.addEventListener("keydown",a=>{if(!e.enabled())return;let s=a.shiftKey?RT:IT,l=e.rect(),c=null;if(a.key==="ArrowLeft"?c={left:l.left-s,top:l.top}:a.key==="ArrowRight"?c={left:l.left+s,top:l.top}:a.key==="ArrowUp"?c={left:l.left,top:l.top-s}:a.key==="ArrowDown"&&(c={left:l.left,top:l.top+s}),c===null)return;a.preventDefault();let u=Ft({...l,...c},e.viewport());e.apply(u.left,u.top),o=u},{signal:r}),t.addEventListener("keyup",i,{signal:r}),t.addEventListener("blur",i,{signal:r})}function eo(t,e,n,r){return{hostInset:bb({top:n.y==="top"?t.top:null,right:n.x==="right"?r.width-t.right:null,bottom:n.y==="bottom"?r.height-t.bottom:null,left:n.x==="left"?t.left:null}),launcherInset:bb({top:n.y==="top"?e.top-t.top:null,right:n.x==="right"?t.right-(e.left+e.width):null,bottom:n.y==="bottom"?t.bottom-(e.top+e.height):null,left:n.x==="left"?e.left-t.left:null})}}function bb(t){let e=n=>n===null?"auto":`${Math.round(n)}px`;return`${e(t.top)} ${e(t.right)} ${e(t.bottom)} ${e(t.left)}`}function qu(t,e,n,r,o=it){let i=n.left+n.width-t.left,a=t.left+t.width-n.left,s=n.top+n.height-t.top,l=t.top+t.height-n.top,c={x:i>=a?"left":"right",y:s>=l?"top":"bottom"},u=c.x==="left"?t.left:t.left+t.width-e.width,h=c.y==="top"?t.top:t.top+t.height-e.height,m=Qr({left:u,top:h,right:u+e.width,bottom:h+e.height},n,o);return{corner:c,...eo(m,t,c,r)}}var CT="button, a[href], input, select, textarea, [contenteditable]";function yb(t,e){t.addEventListener("pointerdown",n=>{if(n.button!==0||!e.enabled()||NT(n,t))return;let r=e.rect(),o=n.clientX,i=n.clientY,a=!1,s=(u,h)=>{let m=u-o,f=h-i;return{left:r.left+m,top:r.top+f,right:r.right+m,bottom:r.bottom+f}},l=u=>{!a&&Math.hypot(u.clientX-o,u.clientY-i)<4||(a=!0,t.setAttribute("data-dragging","true"),e.apply(s(u.clientX,u.clientY),r))},c=u=>{window.removeEventListener("pointermove",l),window.removeEventListener("pointerup",c),window.removeEventListener("pointercancel",c),a&&(t.removeAttribute("data-dragging"),e.commit(s(u.clientX,u.clientY),r))};n.preventDefault(),window.addEventListener("pointermove",l),window.addEventListener("pointerup",c),window.addEventListener("pointercancel",c)})}function NT(t,e){let n=t.composedPath();return n.slice(0,n.indexOf(e)).some(r=>r instanceof Element&&r.matches(CT))}function Eb(t,e){let n=document.createElement("div");n.className=`resize-handle resize-handle--${hs(t)}`,n.setAttribute("part",`resize-handle resize-handle-${hs(t)}`),n.setAttribute("role","separator"),t.x===void 0?n.setAttribute("aria-orientation","horizontal"):t.y===void 0&&n.setAttribute("aria-orientation","vertical"),n.setAttribute("aria-label",e.label),n.tabIndex=0,n.addEventListener("pointerdown",i=>{let a=e.axis();if(a==="none"||!wb(t,a))return;let s=e.rect(),l=u=>{e.apply(Yu(t,a,s,u.clientX,u.clientY))},c=u=>{window.removeEventListener("pointermove",l),window.removeEventListener("pointerup",c),n.removeAttribute("data-dragging"),e.commit(Yu(t,a,s,u.clientX,u.clientY))};n.setAttribute("data-dragging","true"),window.addEventListener("pointermove",l),window.addEventListener("pointerup",c),i.preventDefault()});let r=null,o=()=>{if(r===null)return;let i=r;r=null,e.commit(i)};return n.addEventListener("keydown",i=>{let a=e.axis();if(a==="none"||!wb(t,a))return;let s=i.shiftKey?64:16,l=e.rect(),c=OT[i.key];if(c===void 0||c.x!==0&&t.x===void 0||c.y!==0&&t.y===void 0)return;i.preventDefault();let u=(t.x==="left"?l.left:l.right)+c.x*s,h=(t.y==="top"?l.top:l.bottom)+c.y*s,m=Yu(t,a,l,u,h);e.apply(m),r=m}),n.addEventListener("keyup",o),n.addEventListener("blur",o),n}var OT={ArrowLeft:{x:-1,y:0},ArrowRight:{x:1,y:0},ArrowUp:{x:0,y:-1},ArrowDown:{x:0,y:1}};function hs(t){return[t.y,t.x].filter(e=>e!==void 0).join("-")}function wb(t,e){return e==="both"||t.x!==void 0}function Yu(t,e,n,r,o){let i=t.x==="left"?Math.min(r,n.right-280):n.left,a=t.x==="right"?Math.max(r,n.left+280):n.right,s=e==="both",l=s&&t.y==="top"?Math.min(o,n.bottom-240):n.top,c=s&&t.y==="bottom"?Math.max(o,n.top+240):n.bottom;return{left:i,top:l,right:a,bottom:c}}var xb="ag-ui-chat:size",Xu="ag-ui-chat:launcher";function PT(t){if(typeof t!="object"||t===null)return null;let{left:e,top:n}=t;return typeof e=="number"&&typeof n=="number"?{left:e,top:n}:null}function Sb(t,e){return t.width>=e.width-1&&t.height>=e.height-1}function _b(t,e,n){let r=o=>`${Math.round(o)}px`;return[t.y==="top"?r(e.top):"auto",t.x==="right"?r(n.width-e.right):"auto",t.y==="bottom"?r(n.height-e.bottom):"auto",t.x==="left"?r(e.left):"auto"].join(" ")}var MT=[{y:"top"},{y:"bottom"},{x:"left"},{x:"right"},{x:"left",y:"top"},{x:"right",y:"top"},{x:"left",y:"bottom"},{x:"right",y:"bottom"}],fs=class{#e;constructor(e){this.#e=e}enablePanelDrag(e){yb(e,{enabled:()=>!this.#e.collapsed()&&this.#f(),rect:()=>this.#e.element.getBoundingClientRect(),apply:(n,r)=>this.#E(n,r),commit:(n,r)=>this.#A(n,r)})}enableLauncherDrag(e){vb(this.#e.launcher,{signal:e,enabled:()=>this.#e.collapsed()&&this.#f(),rect:()=>this.#g(),viewport:()=>this.#m(),apply:(n,r)=>this.#p(n,r),commit:(n,r)=>this.#_(n,r)})}mountResizeGrips(e){for(let n of MT){let r=Eb(n,{axis:()=>this.#u(),rect:()=>this.#e.element.getBoundingClientRect(),apply:o=>this.#O(n,o),commit:o=>this.#G(n,o),label:this.#e.strings().resizePanel});r.tabIndex=-1,r.setAttribute("aria-hidden","true"),this.#i.set(hs(n),r),e.appendChild(r)}this.#P()}restoreSize(){this.#s(this.#L())}probe=document.createElement("div");#t=null;#n=null;#o=null;#r={x:"right",y:"bottom"};#i=new Map;#a(e){let n=this.#m(),r=n.left+it,o=n.top+it,i=n.left+n.width-it,a=n.top+n.height-it;return{left:Math.min(Math.max(e.left,r),e.right),top:Math.min(Math.max(e.top,o),e.bottom),right:Math.max(Math.min(e.right,i),e.left),bottom:Math.max(Math.min(e.bottom,a),e.top)}}dragging(){return this.#e.launcher.hasAttribute("data-dragging")||this.#e.root.querySelector(".header[data-dragging]")!==null}describeSurface(){let e=this.#e.element.getBoundingClientRect(),n=this.#m(),r=Sb(e,n);return{placement:this.#e.element.getAttribute("placement"),collapsed:this.#e.collapsed(),collapsible:this.#e.collapsible(),movable:this.#f()&&!r,draggable:this.#f(),fullBleed:r,box:{left:Math.round(e.left),top:Math.round(e.top),width:Math.round(e.width),height:Math.round(e.height)},viewport:{left:Math.round(n.left),top:Math.round(n.top),width:Math.round(n.width),height:Math.round(n.height)}}}moveTo(e,n={}){if(!this.#f())return!1;let r=n.announce===!0?this.#l():null,o=this.#m(),i=this.#e.element.getBoundingClientRect();if(Sb(i,o))return!1;let[a,s]=e.split("-"),l=o.left+Yt,c=o.top+Yt,u=s==="left"?l:Math.max(l,o.left+o.width-Yt-i.width),h=a==="top"?c:Math.max(c,o.top+o.height-Yt-i.height),m={left:u,top:h,right:u+i.width,bottom:h+i.height},f=this.#e.launcher.offsetWidth,p=this.#e.launcher.offsetHeight;return this.#z(m,{left:s==="left"?m.left:m.right-f,top:a==="top"?m.top:m.bottom-p,width:f,height:p}),this.#x(),r!==null&&this.#e.announceSurfaceChange(this.#e.strings().chatMoved,r),!0}#l(){let e=this.#e.element.style.getPropertyValue("--ag-ui-inset"),n=this.#e.element.style.getPropertyValue("--ag-ui-launcher-inset"),r=this.#e.element.getAttribute("data-expand-corner"),o=this.#t,i=this.#n,a=this.#o;return()=>{this.#h("--ag-ui-inset",e),this.#h("--ag-ui-launcher-inset",n),r===null?this.#e.element.removeAttribute("data-expand-corner"):this.#e.element.setAttribute("data-expand-corner",r),this.#t=o,this.#n=i,this.#o=a,o===null?this.#e.clearPreference(Xu):this.#x(),this.syncResizeAnchor()}}#u(){switch(this.#e.element.getAttribute("placement")){case"full":case"page":return"none";case"sidebar":case"side":return"width";default:return"both"}}#d(){let e=this.#e.element.getBoundingClientRect(),n=this.#e.element.style.getPropertyValue("--ag-ui-width"),r=this.#e.element.style.getPropertyValue("--ag-ui-height"),o=this.#c(e,-1),i=o.x===null||o.y===null?this.#c(e,1):o;return this.#h("--ag-ui-width",n),this.#h("--ag-ui-height",r),{x:o.x??i.x??"right",y:o.y??i.y??"bottom"}}#c(e,n){this.#s({width:e.width+n,height:e.height+n});let r=this.#e.element.getBoundingClientRect(),o=(i,a)=>Math.abs(i-a)>=.5;return{x:o(r.width,e.width)?o(r.left,e.left)?"right":"left":null,y:o(r.height,e.height)?o(r.top,e.top)?"bottom":"top":null}}syncResizeAnchor(){if(!this.#e.connected())return;let e=this.#o??this.#d();this.#r=e,this.#e.element.setAttribute("data-resize-anchor",`${e.y}-${e.x}`),this.#P()}#h(e,n){if(n===""){this.#e.element.style.removeProperty(e);return}this.#e.element.style.setProperty(e,n)}#s(e){let n=this.#u();n!=="none"&&(e.width!==void 0&&this.#e.element.style.setProperty("--ag-ui-width",`${e.width}px`),e.height!==void 0&&n==="both"&&this.#e.element.style.setProperty("--ag-ui-height",`${e.height}px`))}releaseOwnedAxes(){let e=this.#u();e!=="both"&&this.#e.element.style.removeProperty("--ag-ui-height"),e==="none"&&this.#e.element.style.removeProperty("--ag-ui-width")}#f(){return this.#e.element.getAttribute("data-launcher-drag")!=="false"&&ps(this.#e.element.getAttribute("placement"))}#m(){let e=window.visualViewport,n=e?.width??window.innerWidth,r=e?.height??window.innerHeight,o=getComputedStyle(this.probe),i=l=>{let c=Number.parseFloat(o.getPropertyValue(l));return Number.isFinite(c)?c:0},a=i("padding-left"),s=i("padding-top");return{left:a,top:s,width:Math.max(0,n-a-i("padding-right")),height:Math.max(0,r-s-i("padding-bottom"))}}#y(){let e=document.documentElement;return{width:e.clientWidth||window.innerWidth,height:e.clientHeight||window.innerHeight}}publishVisualViewport(){let e=window.visualViewport;if(e==null)return;let n=this.#y().height;if(Math.abs(e.height-n)<1){this.#e.element.style.removeProperty("--ag-ui-visual-viewport-height"),this.#e.element.style.removeProperty("--ag-ui-visual-viewport-inset-bottom"),this.#e.element.style.removeProperty("--ag-ui-visual-viewport-inset-top");return}this.#e.element.style.setProperty("--ag-ui-visual-viewport-height",`${Math.round(e.height)}px`);let r=n-e.height-e.offsetTop;this.#e.element.style.setProperty("--ag-ui-visual-viewport-inset-bottom",`${Math.max(0,Math.round(r))}px`),this.#e.element.style.setProperty("--ag-ui-visual-viewport-inset-top",`${Math.max(0,Math.round(e.offsetTop))}px`)}#g(){let e=this.#e.launcher.offsetWidth,n=this.#e.launcher.offsetHeight,r=this.#t;if(r!==null)return{left:r.left,top:r.top,width:e,height:n};let o=this.#e.launcher.getBoundingClientRect();return{left:o.left+o.width/2-e/2,top:o.top+o.height/2-n/2,width:e,height:n}}#b(e){if(!this.#f())return;this.#t=e,this.#n=null;let n=this.#e.element.getBoundingClientRect(),r=qu(this.#g(),{width:n.width,height:n.height},this.#m(),this.#y());this.#e.element.style.setProperty("--ag-ui-inset",r.hostInset),this.#e.element.style.setProperty("--ag-ui-launcher-inset",r.launcherInset),this.#o=r.corner,this.#e.element.setAttribute("data-expand-corner",`${r.corner.y}-${r.corner.x}`),this.syncResizeAnchor()}#p(e,n){this.#b({left:e,top:n})}#_(e,n){this.#p(e,n),this.#x()}#E(e,n){if(!this.#f())return{held:e,launcher:null};if(this.#t===null){let l=this.#g();this.#t={left:l.left,top:l.top}}let r=this.#t,o=Qr(e,this.#m(),it),i=this.#o??this.#r;this.#e.element.style.setProperty("--ag-ui-inset",_b(i,o,this.#y())),this.#n={left:o.left,top:o.top};let a={...this.#g(),left:r.left+(o.left-n.left),top:r.top+(o.top-n.top)},s={...a,...Ft(a,this.#m())};return this.#e.element.style.setProperty("--ag-ui-launcher-inset",eo(o,s,i,this.#y()).launcherInset),{held:o,launcher:s}}#A(e,n){let{held:r,launcher:o}=this.#E(e,n);o!==null&&(this.#z(r,o),this.#x())}#z(e,n){let r=this.#m(),o=this.#y(),i={width:e.right-e.left,height:e.bottom-e.top},{corner:a}=qu(n,i,r,o),s=eo(e,n,a,o);this.#e.element.style.setProperty("--ag-ui-inset",s.hostInset),this.#e.element.style.setProperty("--ag-ui-launcher-inset",s.launcherInset),this.#t={left:n.left,top:n.top},this.#n={left:e.left,top:e.top},this.#o=a,this.#e.element.setAttribute("data-expand-corner",`${a.y}-${a.x}`),this.syncResizeAnchor()}#k(e){if(!this.#f())return;let n=this.#e.element.getBoundingClientRect(),r=Qr({left:e.left,top:e.top,right:e.left+n.width,bottom:e.top+n.height},this.#m(),it),o=this.#g(),i={...o,left:o.left+(r.left-e.left),top:o.top+(r.top-e.top)};this.#z(r,{...i,...Ft(i,this.#m())})}#x(){let e=this.#t;if(e===null)return;let n=this.#n;this.#e.writePreference(Xu,JSON.stringify(n===null?e:{...e,panel:n}))}restoreLauncherPosition(){let e=this.#I(),n=this.#t??e;if(n===null)return;let r=this.#n??e?.panel??null;if(r!==null){this.#t={left:n.left,top:n.top},this.#k(r);return}let o=this.#g();this.#b(Ft({...o,left:n.left,top:n.top},this.#m()))}#I(){let e=this.#e.readPreference(Xu);if(e===null)return null;try{let n=JSON.parse(e);if(typeof n!="object"||n===null)return null;let{left:r,top:o,panel:i}=n;if(typeof r!="number"||typeof o!="number")return null;let a=PT(i);return a===null?{left:r,top:o}:{left:r,top:o,panel:a}}catch{return null}}releaseLauncherPosition(){this.#f()||(this.#t=null,this.#n=null,this.#o=null,this.#e.element.style.removeProperty("--ag-ui-inset"),this.#e.element.style.removeProperty("--ag-ui-launcher-inset"),this.#e.element.removeAttribute("data-expand-corner"))}#O(e,n){if(n=this.#a(n),this.#s({width:n.right-n.left,height:n.bottom-n.top}),e.x!==this.#r.x&&e.y!==this.#r.y)return n;let r=this.#r;if(this.#e.element.style.setProperty("--ag-ui-inset",_b(r,n,this.#y())),this.#t!==null){let o=this.#e.launcher.offsetWidth;this.#t={left:r.x==="left"?n.left:n.right-o,top:r.y==="top"?n.top:n.bottom-o}}return this.#n!==null&&(this.#n={left:n.left,top:n.top}),n}#G(e,n){let r=this.#O(e,n);this.#v({width:r.right-r.left,height:r.bottom-r.top}),this.#x(),this.syncResizeAnchor()}#P(){let e=`${this.#r.y==="top"?"bottom":"top"}-${this.#r.x==="left"?"right":"left"}`;for(let[n,r]of this.#i){let o=n===e;r.tabIndex=o?0:-1,o?r.removeAttribute("aria-hidden"):r.setAttribute("aria-hidden","true")}}#v(e){let n={...this.#L(),...e};this.#e.writePreference(xb,JSON.stringify(n))}#L(){let e=this.#e.readPreference(xb);if(e===null)return{};try{let n=JSON.parse(e);return typeof n=="object"&&n!==null?n:{}}catch{return{}}}};var ms=class{region=document.createElement("div");#e=null;mount(){this.region.className="sr-only",this.region.setAttribute("role","status"),this.region.setAttribute("aria-live","polite"),this.region.setAttribute("aria-atomic","true")}announce(e){this.#e!==null&&clearTimeout(this.#e),this.region.textContent=e,this.#e=setTimeout(()=>{this.#e=null,this.region.textContent=""},yp)}dispose(){this.#e!==null&&(clearTimeout(this.#e),this.#e=null)}};function gs(t,e,n,r){let o=document.createElement("div");o.className=`run-notice run-notice--${n}`,o.setAttribute("part",`run-notice run-notice-${n}`),o.setAttribute("role","status");let i=document.createElement("span");i.className="run-notice-icon",i.setAttribute("part","run-notice-icon"),i.textContent=t,i.setAttribute("aria-hidden","true");let a=document.createElement("span");if(a.className="run-notice-text",a.setAttribute("part","run-notice-text"),a.textContent=e,o.append(i,a),r!==void 0){let s=document.createElement("button");s.type="button",s.className="run-notice-undo",s.setAttribute("part","run-notice-undo"),s.textContent=r.label,s.addEventListener("click",()=>{s.disabled=!0,r.onActivate()}),o.append(s)}return o}var vs=class{element;get agent(){return this.#r}#e;#t;#n;#o=new Map;#r=null;constructor(e=pe){this.element=document.createElement("div"),this.element.className="subagent",this.element.setAttribute("part","subagent"),this.#e=document.createElement("button"),this.#e.type="button",this.#e.className="subagent-row",this.#e.setAttribute("part","subagent-row"),this.#e.setAttribute("aria-expanded","false"),this.#e.disabled=!0;let n=document.createElement("span");n.className="subagent-icon",n.setAttribute("part","subagent-icon"),n.setAttribute("aria-hidden","true"),this.#t=document.createElement("span"),this.#t.className="subagent-status",this.#t.setAttribute("part","subagent-status"),this.#t.textContent=e.subAgentWorking,this.#e.append(n,this.#t),this.#n=document.createElement("div"),this.#n.className="subagent-steps",this.#n.setAttribute("part","subagent-steps"),this.#n.setAttribute("role","list"),this.#n.setAttribute("aria-label",e.subAgentSteps),this.#n.hidden=!0,this.#e.addEventListener("click",()=>{this.#l(this.#e.getAttribute("aria-expanded")!=="true")}),this.element.append(this.#e,this.#n)}report(e){this.element.setAttribute("data-phase",e.phase),e.agent!==null&&(this.#r=e.agent,this.element.setAttribute("data-agent",e.agent)),e.status!==null&&(this.#t.textContent=e.status),e.tool!==null&&this.#i(e.tool)}#i(e){let n=this.#o.get(e.toolCallId)??this.#a(e);if(e.ok===null){n.removeAttribute("data-ok");return}n.setAttribute("data-ok",String(e.ok))}#a(e){let n=document.createElement("div");n.className="subagent-step",n.setAttribute("part","subagent-step"),n.setAttribute("role","listitem"),n.setAttribute("data-tool-call-id",e.toolCallId);let r=document.createElement("span");r.className="subagent-step-icon",r.setAttribute("part","subagent-step-icon"),r.setAttribute("aria-hidden","true");let o=document.createElement("span");return o.className="subagent-step-name",o.setAttribute("part","subagent-step-name"),o.textContent=e.name,n.append(r,o),this.#n.appendChild(n),this.#o.set(e.toolCallId,n),this.#e.disabled=!1,n}#l(e){this.#n.hidden=!e,this.#e.setAttribute("aria-expanded",String(e))}};var zT=Object.values(Pn);function Tb(t){return typeof t!="object"||t===null||Array.isArray(t)?null:t}function to(t){return typeof t=="string"&&t!==""?t:null}function LT(t){let e=Tb(t);if(e===null)return null;let n=to(e.toolCallId),r=to(e.name),o=e.ok;return n===null||r===null||o!==null&&typeof o!="boolean"?null:{toolCallId:n,name:r,ok:o}}function Ab(t){let e=Tb(t);if(e===null)return null;let n=to(e.delegationId),r=e.phase;return n===null||typeof r!="string"||!zT.includes(r)?null:{delegationId:n,phase:r,agent:to(e.agent),status:to(e.status),tool:LT(e.tool)}}var bs=class{#e;#t=new Map;#n=new Map;constructor(e){this.#e=e}report(e){let n=Ab(e);n!==null&&this.#i(n)}start(e,n,r){r!==null&&(this.#n.set(e,r),this.#i({delegationId:r,agent:n===""?null:n,phase:Pn.STARTED,status:le(this.#e.strings().subAgentDelegatedTo,{agent:n}),tool:null}))}finish(e){this.#o(e,Pn.FINISHED,null)}fail(e,n){this.#o(e,Pn.FAILED,n===""?this.#e.strings().subAgentFailed:n)}clear(){this.#t.clear(),this.#n.clear()}#o(e,n,r){let o=this.#n.get(e);if(o===void 0)return;let i=this.#t.get(o)?.agent??null;this.#i({delegationId:o,agent:i,phase:n,status:r===null?this.#r(i):r,tool:null})}#r(e){let n=this.#e.strings();return e===null?n.subAgentWorking:le(n.subAgentFinished,{agent:e})}#i(e){let n=this.#e.card(e.delegationId);if(n===void 0)return;let r=this.#t.get(e.delegationId);r===void 0&&(r=new vs(this.#e.strings()),this.#t.set(e.delegationId,r),n.subagentSlot.appendChild(r.element)),r.report(e),this.#e.follow()}};function Ku(t){return{[Q.PENDING]:t.toolRunning,[Q.DEFERRED]:t.toolDeferred,[Q.DONE]:t.toolDone,[Q.ERROR]:t.toolError,[Q.DECLINED]:t.toolDeclined,[Q.INTERRUPTED]:t.toolInterrupted}}function DT(t){return{[Q.DONE]:t.resultLabel,[Q.ERROR]:t.errorLabel,[Q.DECLINED]:t.declinedLabel,[Q.INTERRUPTED]:t.interruptedLabel}}function $T(t){try{return JSON.stringify(JSON.parse(t),null,2)}catch{return t}}var no=class{element;approvalSlot;subagentSlot;#e;#t;#n;#o;#r;#i;#a;args;#l;#u;#d=!1;constructor(e,n,r,o=pe,i={}){this.#a=o,this.args=n,this.#l=e,this.#u=i.formatPayload??null,this.element=document.createElement("div"),this.element.className="tool-call",this.element.setAttribute("part","tool-card"),this.element.setAttribute("data-tool-name",e),this.element.setAttribute("data-status",Q.PENDING),this.element.setAttribute("data-expanded","false");let a=document.createElement("div");a.className="tool-call-head",a.setAttribute("part","tool-card-head");let s=document.createElement("span");s.className="tool-call-icon",s.setAttribute("part","tool-card-icon"),s.setAttribute("aria-hidden","true");let l=document.createElement("span");l.className="tool-call-name",l.setAttribute("part","tool-card-name"),l.textContent=r??e,this.#e=document.createElement("span"),this.#e.className="tool-call-status",this.#e.setAttribute("part","tool-card-status"),this.#e.textContent=Ku(o)[Q.PENDING],this.#t=document.createElement("span"),this.#t.className="tool-call-decision",this.#t.setAttribute("part","tool-card-decision"),this.#t.hidden=!0,a.append(s,l,this.#e,this.#t);let c=this.#h("args",o.argumentsLabel);this.#c(c.body,{kind:"arguments",toolName:e,args:n},JSON.stringify(n,null,2)),c.root.hidden=Object.keys(n).length===0;let u=this.#h("result",o.resultLabel);this.#o=u.root,this.#r=u.label,this.#i=u.body,u.root.hidden=!0,this.#n=document.createElement("button"),this.#n.type="button",this.#n.className="tool-call-toggle",this.#n.setAttribute("part","tool-card-toggle"),this.#n.setAttribute("aria-expanded","false"),this.#n.textContent=o.details,this.#n.addEventListener("click",()=>this.#f(!this.#s()));let h=document.createElement("div");h.className="tool-call-body",h.setAttribute("part","tool-card-body"),h.append(c.root,u.root),this.approvalSlot=document.createElement("div"),this.approvalSlot.className="tool-call-approval",this.approvalSlot.setAttribute("part","tool-card-approval"),this.subagentSlot=document.createElement("div"),this.subagentSlot.className="tool-call-subagent",this.subagentSlot.setAttribute("part","tool-card-subagent"),this.element.append(a,this.subagentSlot,this.#n,h,this.approvalSlot)}mark(e){this.#d||(this.element.setAttribute("data-status",e),this.#e.textContent=Ku(this.#a)[e])}recordDecision(e){this.element.setAttribute("data-decision",e),this.#t.textContent=e==="approved"?this.#a.decisionApproved:this.#a.decisionDeclined,this.#t.hidden=!1}get settled(){return this.#d}settle(e,n){this.#d||(this.#d=!0,this.element.setAttribute("data-status",e),this.#e.textContent=Ku(this.#a)[e],this.#r.textContent=DT(this.#a)[e],this.#c(this.#i,{kind:"result",toolName:this.#l,status:e,text:n},$T(n)),this.#o.hidden=!1)}#c(e,n,r){let o=this.#u===null?null:this.#u(n);if(o===null){e.textContent=r;return}if(e.setAttribute("data-formatted","true"),typeof o=="string"){e.textContent=o;return}e.replaceChildren(o)}#h(e,n){let r=document.createElement("div");r.className=`tool-call-section tool-call-section--${e}`,r.setAttribute("part",`tool-card-section tool-card-${e}-section`);let o=document.createElement("span");o.className="tool-call-section-label",o.setAttribute("part",`tool-card-section-label tool-card-${e}-label`),o.textContent=n;let i=document.createElement("pre");return i.className=`tool-call-${e}`,i.setAttribute("part",`tool-card-${e}`),r.append(o,i),{root:r,label:o,body:i}}#s(){return this.element.getAttribute("data-expanded")==="true"}#f(e){this.element.setAttribute("data-expanded",String(e)),this.#n.setAttribute("aria-expanded",String(e))}};var kb=`
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
`;function Ib(t){let e=new CSSStyleSheet;e.replaceSync(kb),t.adoptedStyleSheets=[e]}function ys(t,e,n){let r=document.createElement("slot");return r.name=t,r.className=e,r.innerHTML=n,r}function ro(t,e,n){let r=document.createElement("button");r.type="button",r.className=`header-btn header-btn--${t}`,r.setAttribute("part",`header-button ${t}-button`),r.title=e,r.setAttribute("aria-label",e);let o=document.createElement("slot");return o.name=`icon-${t}`,o.append(document.createTextNode(n)),r.append(o),r}function ws(t,e,n,r){let o=document.createElement("span");o.className="icon-holder",o.setAttribute("part",e);let i=document.createElement("slot");if(i.name=t,r!==null){let a=document.createElement("img");a.className="icon-img",a.src=r,a.alt="",i.append(a)}else n!==null&&(i.innerHTML=n);return o.append(i),o}function Rb(t){return t.getAttribute("data-unread-badge")!=="false"}function Cb(t){return t.getAttribute("data-launcher-icon-url")??t.getAttribute("data-icon-url")}var UT=new Set(["ADDRESS","ARTICLE","ASIDE","BLOCKQUOTE","DD","DIV","DL","DT","FIGCAPTION","FIGURE","FOOTER","H1","H2","H3","H4","H5","H6","HEADER","HR","MAIN","NAV","OL","P","SECTION","UL"]);function Es(t){let e=t.cloneNode(!0);for(let n of Array.from(e.querySelectorAll("button")))n.remove();return{text:GT(Nb(e)),html:e.innerHTML}}function Nb(t){if(t.nodeType===Node.TEXT_NODE)return t.nodeValue.replace(/\s+/g," ");if(t.nodeType!==Node.ELEMENT_NODE)return"";let e=t,n=e.tagName;if(n==="BR")return`
`;if(n==="PRE")return`

${Pb(e)}

`;if(n==="TABLE")return`

${FT(e)}

`;if(n==="UL"||n==="OL")return`

${HT(e,n==="OL")}

`;let r=Ob(e);return UT.has(n)?`

${r}

`:r}function Ob(t){let e="";for(let n of Array.from(t.childNodes))e+=Nb(n);return e}function HT(t,e){return Array.from(t.children).map((n,r)=>`${e?`${r+1}. `:"- "}${Ob(n).trim()}`).join(`
`)}function FT(t){return Array.from(t.querySelectorAll("tr")).map(e=>Array.from(e.children).map(n=>Pb(n).replace(/\s+/g," ").trim()).join("	")).join(`
`)}function Pb(t){return t.textContent}function GT(t){return t.replace(/[^\S\n]+\n/g,`
`).replace(/\n{3,}/g,`

`).trim()}var ZT=1500;function Qu(t,e){if(zb(t)!==null)return;let n=xs(t,e.strings),r=e.text;r!==void 0&&n.appendChild(BT(e.strings,r,e.html)),e.onFeedback!==void 0&&n.append(Mb("up",e.strings.feedbackUp,e.onFeedback),Mb("down",e.strings.feedbackDown,e.onFeedback))}function xs(t,e){let n=zb(t);if(n!==null)return n;let r=document.createElement("div");return r.className="message-actions",r.setAttribute("part","message-actions"),r.setAttribute("role","group"),r.setAttribute("aria-label",e.messageActions),t.after(r),r}function zb(t){let e=t.nextElementSibling;return e?.classList.contains("message-actions")===!0?e:null}function Ss(t,e,n){let r=document.createElement("button");r.type="button",r.className=`message-action message-action--${t}`,r.setAttribute("part",`message-action message-action-${t}`),Ju(r,e);let o=document.createElement("span");return o.className="message-action-icon",o.setAttribute("part",`message-action-icon message-action-icon-${t}`),o.setAttribute("aria-hidden","true"),o.innerHTML=n,r.appendChild(o),r}function Ju(t,e){t.title=e,t.setAttribute("aria-label",e),t.dataset.tooltip=e}function BT(t,e,n){let r=Ss("copy",t.copyMessage,dp);return r.addEventListener("click",()=>{VT(e(),n?.()).then(o=>{jT(r,o?t.copied:t.copyFailed,t.copyMessage)})}),r}async function VT(t,e){let n=navigator.clipboard;if(n===void 0)return!1;if(e!==void 0&&typeof ClipboardItem=="function")try{return await n.write([new ClipboardItem({"text/plain":new Blob([t],{type:"text/plain"}),"text/html":new Blob([e],{type:"text/html"})})]),!0}catch{}try{return await n.writeText(t),!0}catch{return!1}}function Mb(t,e,n){let r=Ss(t==="up"?"up":"down",e,t==="up"?hp:fp);return r.addEventListener("click",()=>{let o=r.getAttribute("aria-pressed")==="true";r.setAttribute("aria-pressed",o?"false":"true"),n(t)}),r.setAttribute("aria-pressed","false"),r}function jT(t,e,n){Ju(t,e),t.classList.add("message-action--confirmed"),setTimeout(()=>{Ju(t,n),t.classList.remove("message-action--confirmed")},ZT)}var _s=class{#e;#t=null;constructor(e){this.#e=e}forget(){this.#t=null}attach(e,n){let r=this.#o(),o=r.has(qt.COPY),i="messageId"in n?n:null,a=i!==null&&r.has(qt.FEEDBACK),s=this.#e.threadId();(o||a)&&Qu(e,{strings:this.#e.strings(),...o?{text:()=>Es(e).text,html:()=>Es(e).html}:{},...a?{onFeedback:l=>{this.#e.element.dispatchEvent(new CustomEvent(ml,{detail:{content:Es(e).text,rating:l,messageId:i.messageId,threadId:s,...i.runId===void 0?{}:{runId:i.runId}},bubbles:!0,composed:!0}))}}:{}}),r.has(qt.RETRY)&&this.#n(xs(e,this.#e.strings()))}#n(e){this.#t?.querySelector(".message-action--retry")?.remove();let n=Ss("retry",this.#e.strings().retryMessage,pp);n.addEventListener("click",()=>{this.#e.retry()}),e.prepend(n),this.#t=e}#o(){let e=this.#e.element.getAttribute("data-message-actions");return e===null?new Set([qt.COPY,qt.RETRY]):new Set(or(e))}};function WT(t,e){this.v=t,this.k=e}function Lb(t,e){(e==null||e>t.length)&&(e=t.length);for(var n=0,r=Array(e);n<e;n++)r[n]=t[n];return r}function qT(t){if(Array.isArray(t))return t}function YT(t,e){var n=t==null?null:typeof Symbol<"u"&&t[Symbol.iterator]||t["@@iterator"];if(n!=null){var r,o,i,a,s=[],l=!0,c=!1;try{if(i=(n=n.call(t)).next,e===0){if(Object(n)!==n)return;l=!1}else for(;!(l=(r=i.call(n)).done)&&(s.push(r.value),s.length!==e);l=!0);}catch(u){c=!0,o=u}finally{try{if(!l&&n.return!=null&&(a=n.return(),Object(a)!==a))return}finally{if(c)throw o}}return s}}function XT(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function KT(t,e){return qT(t)||YT(t,e)||JT(t,e)||XT()}function JT(t,e){if(t){if(typeof t=="string")return Lb(t,e);var n={}.toString.call(t).slice(8,-1);return n==="Object"&&t.constructor&&(n=t.constructor.name),n==="Map"||n==="Set"?Array.from(t):n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?Lb(t,e):void 0}}function Ts(t){var e,n;function r(i,a){try{var s=t[i](a),l=s.value,c=l instanceof WT;Promise.resolve(c?l.v:l).then(function(u){if(c){var h=i==="return"&&l.k?i:"next";if(!l.k||u.done)return r(h,u);u=t[h](u).value}o(!!s.done,u)},function(u){r("throw",u)})}catch(u){o(2,u)}}function o(i,a){i===2?e.reject(a):e.resolve({value:a,done:i}),(e=e.next)?r(e.key,e.arg):n=null}this._invoke=function(i,a){return new Promise(function(s,l){var c={key:i,arg:a,resolve:s,reject:l,next:null};n?n=n.next=c:(e=n=c,r(i,a))})},typeof t.return!="function"&&(this.return=void 0)}Ts.prototype[typeof Symbol=="function"&&Symbol.asyncIterator||"@@asyncIterator"]=function(){return this},Ts.prototype.next=function(t){return this._invoke("next",t)},Ts.prototype.throw=function(t){return this._invoke("throw",t)},Ts.prototype.return=function(t){return this._invoke("return",t)};var Kb=Object.entries,Db=Object.setPrototypeOf,QT=Object.isFrozen,eA=Object.getPrototypeOf,tA=Object.getOwnPropertyDescriptor,Ce=Object.freeze,Oe=Object.seal,ar=Object.create,Jb=typeof Reflect<"u"&&Reflect,ad=Jb.apply,sd=Jb.construct;Ce||(Ce=function(e){return e});Oe||(Oe=function(e){return e});ad||(ad=function(e,n){for(var r=arguments.length,o=new Array(r>2?r-2:0),i=2;i<r;i++)o[i-2]=arguments[i];return e.apply(n,o)});sd||(sd=function(e){for(var n=arguments.length,r=new Array(n>1?n-1:0),o=1;o<n;o++)r[o-1]=arguments[o];return new e(...r)});var wn=Ie(Array.prototype.forEach);Array.prototype.indexOf;var nA=Ie(Array.prototype.lastIndexOf),$b=Ie(Array.prototype.pop),oo=Ie(Array.prototype.push);Array.prototype.slice;var rA=Ie(Array.prototype.splice),sr=Array.isArray,so=Ie(String.prototype.toLowerCase),ed=Ie(String.prototype.toString),Ub=Ie(String.prototype.match),io=Ie(String.prototype.replace),Hb=Ie(String.prototype.indexOf),oA=Ie(String.prototype.trim),iA=Ie(Number.prototype.toString),aA=Ie(Boolean.prototype.toString),Fb=typeof BigInt>"u"?null:Ie(BigInt.prototype.toString),Gb=typeof Symbol>"u"?null:Ie(Symbol.prototype.toString),Be=Ie(Object.prototype.hasOwnProperty),ao=Ie(Object.prototype.toString),Ue=Ie(RegExp.prototype.test),Gt=sA(TypeError);function Ie(t){return function(e){e instanceof RegExp&&(e.lastIndex=0);for(var n=arguments.length,r=new Array(n>1?n-1:0),o=1;o<n;o++)r[o-1]=arguments[o];return ad(t,e,r)}}function sA(t){return function(){for(var e=arguments.length,n=new Array(e),r=0;r<e;r++)n[r]=arguments[r];return sd(t,n)}}function re(t,e){let n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:so;if(Db&&Db(t,null),!sr(e))return t;let r=e.length;for(;r--;){let o=e[r];if(typeof o=="string"){let i=n(o);i!==o&&(QT(e)||(e[r]=i),o=i)}t[o]=!0}return t}function lA(t){for(let e=0;e<t.length;e++)Be(t,e)||(t[e]=null);return t}function Ke(t){let e=ar(null);for(let r of Kb(t)){var n=KT(r,2);let o=n[0],i=n[1];Be(t,o)&&(sr(i)?e[o]=lA(i):i&&typeof i=="object"&&i.constructor===Object?e[o]=Ke(i):e[o]=i)}return e}function cA(t){switch(typeof t){case"string":return t;case"number":return iA(t);case"boolean":return aA(t);case"bigint":return Fb?Fb(t):"0";case"symbol":return Gb?Gb(t):"Symbol()";case"undefined":return ao(t);case"function":case"object":{if(t===null)return ao(t);let e=t,n=ot(e,"toString");if(typeof n=="function"){let r=n(e);return typeof r=="string"?r:ao(r)}return ao(t)}default:return ao(t)}}function ot(t,e){for(;t!==null;){let r=tA(t,e);if(r){if(r.get)return Ie(r.get);if(typeof r.value=="function")return Ie(r.value)}t=eA(t)}function n(){return null}return n}function uA(t){try{return Ue(t,""),!0}catch{return!1}}var Zb=Ce(["a","abbr","acronym","address","area","article","aside","audio","b","bdi","bdo","big","blink","blockquote","body","br","button","canvas","caption","center","cite","code","col","colgroup","content","data","datalist","dd","decorator","del","details","dfn","dialog","dir","div","dl","dt","element","em","fieldset","figcaption","figure","font","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","img","input","ins","kbd","label","legend","li","main","map","mark","marquee","menu","menuitem","meter","nav","nobr","ol","optgroup","option","output","p","picture","pre","progress","q","rp","rt","ruby","s","samp","search","section","select","shadow","slot","small","source","spacer","span","strike","strong","style","sub","summary","sup","table","tbody","td","template","textarea","tfoot","th","thead","time","tr","track","tt","u","ul","var","video","wbr"]),td=Ce(["svg","a","altglyph","altglyphdef","altglyphitem","animatecolor","animatemotion","animatetransform","circle","clippath","defs","desc","ellipse","enterkeyhint","exportparts","filter","font","g","glyph","glyphref","hkern","image","inputmode","line","lineargradient","marker","mask","metadata","mpath","part","path","pattern","polygon","polyline","radialgradient","rect","stop","style","switch","symbol","text","textpath","title","tref","tspan","view","vkern"]),nd=Ce(["feBlend","feColorMatrix","feComponentTransfer","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feDistantLight","feDropShadow","feFlood","feFuncA","feFuncB","feFuncG","feFuncR","feGaussianBlur","feImage","feMerge","feMergeNode","feMorphology","feOffset","fePointLight","feSpecularLighting","feSpotLight","feTile","feTurbulence"]),dA=Ce(["animate","color-profile","cursor","discard","font-face","font-face-format","font-face-name","font-face-src","font-face-uri","foreignobject","hatch","hatchpath","mesh","meshgradient","meshpatch","meshrow","missing-glyph","script","set","solidcolor","unknown","use"]),rd=Ce(["math","menclose","merror","mfenced","mfrac","mglyph","mi","mlabeledtr","mmultiscripts","mn","mo","mover","mpadded","mphantom","mroot","mrow","ms","mspace","msqrt","mstyle","msub","msup","msubsup","mtable","mtd","mtext","mtr","munder","munderover","mprescripts"]),pA=Ce(["maction","maligngroup","malignmark","mlongdiv","mscarries","mscarry","msgroup","mstack","msline","msrow","semantics","annotation","annotation-xml","mprescripts","none"]),Bb=Ce(["#text"]),Vb=Ce(["accept","action","align","alt","autocapitalize","autocomplete","autopictureinpicture","autoplay","background","bgcolor","border","capture","cellpadding","cellspacing","checked","cite","class","clear","color","cols","colspan","command","commandfor","controls","controlslist","coords","crossorigin","datetime","decoding","default","dir","disabled","disablepictureinpicture","disableremoteplayback","download","draggable","enctype","enterkeyhint","exportparts","face","for","headers","height","hidden","high","href","hreflang","id","inert","inputmode","integrity","ismap","kind","label","lang","list","loading","loop","low","max","maxlength","media","method","min","minlength","multiple","muted","name","nonce","noshade","novalidate","nowrap","open","optimum","part","pattern","placeholder","playsinline","popover","popovertarget","popovertargetaction","poster","preload","pubdate","radiogroup","readonly","rel","required","rev","reversed","role","rows","rowspan","spellcheck","scope","selected","shape","size","sizes","slot","span","srclang","start","src","srcset","step","style","summary","tabindex","title","translate","type","usemap","valign","value","width","wrap","xmlns"]),od=Ce(["accent-height","accumulate","additive","alignment-baseline","amplitude","ascent","attributename","attributetype","azimuth","basefrequency","baseline-shift","begin","bias","by","class","clip","clippathunits","clip-path","clip-rule","color","color-interpolation","color-interpolation-filters","color-profile","color-rendering","cx","cy","d","dx","dy","diffuseconstant","direction","display","divisor","dominant-baseline","dur","edgemode","elevation","end","exponent","fill","fill-opacity","fill-rule","filter","filterunits","flood-color","flood-opacity","font-family","font-size","font-size-adjust","font-stretch","font-style","font-variant","font-weight","fx","fy","g1","g2","glyph-name","glyphref","gradientunits","gradienttransform","height","href","id","image-rendering","in","in2","intercept","k","k1","k2","k3","k4","kerning","keypoints","keysplines","keytimes","lang","lengthadjust","letter-spacing","kernelmatrix","kernelunitlength","lighting-color","local","marker-end","marker-mid","marker-start","markerheight","markerunits","markerwidth","maskcontentunits","maskunits","max","mask","mask-type","media","method","mode","min","name","numoctaves","offset","operator","opacity","order","orient","orientation","origin","overflow","paint-order","path","pathlength","patterncontentunits","patterntransform","patternunits","pointer-events","points","preservealpha","preserveaspectratio","primitiveunits","r","rx","ry","radius","refx","refy","repeatcount","repeatdur","restart","result","rotate","scale","seed","shape-rendering","slope","specularconstant","specularexponent","spreadmethod","startoffset","stddeviation","stitchtiles","stop-color","stop-opacity","stroke-dasharray","stroke-dashoffset","stroke-linecap","stroke-linejoin","stroke-miterlimit","stroke-opacity","stroke","stroke-width","style","surfacescale","systemlanguage","tabindex","tablevalues","targetx","targety","transform","transform-origin","text-anchor","text-decoration","text-orientation","text-rendering","textlength","type","u1","u2","unicode","values","vector-effect","viewbox","visibility","version","vert-adv-y","vert-origin-x","vert-origin-y","width","word-spacing","wrap","writing-mode","xchannelselector","ychannelselector","x","x1","x2","xmlns","y","y1","y2","z","zoomandpan"]),jb=Ce(["accent","accentunder","align","bevelled","close","columnalign","columnlines","columnspacing","columnspan","denomalign","depth","dir","display","displaystyle","encoding","fence","frame","height","href","id","largeop","length","linethickness","lquote","lspace","mathbackground","mathcolor","mathsize","mathvariant","maxsize","minsize","movablelimits","notation","numalign","open","rowalign","rowlines","rowspacing","rowspan","rspace","rquote","scriptlevel","scriptminsize","scriptsizemultiplier","selection","separator","separators","stretchy","subscriptshift","supscriptshift","symmetric","voffset","width","xmlns"]),As=Ce(["xlink:href","xml:id","xlink:title","xml:space","xmlns:xlink"]),hA=Oe(/{{[\w\W]*|^[\w\W]*}}/g),fA=Oe(/<%[\w\W]*|^[\w\W]*%>/g),mA=Oe(/\${[\w\W]*/g),gA=Oe(/^data-[\-\w.\u00B7-\uFFFF]+$/),vA=Oe(/^aria-[\-\w]+$/),Wb=Oe(/^(?:(?:(?:f|ht)tps?|mailto|tel|callto|sms|cid|xmpp|matrix):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i),bA=Oe(/^(?:\w+script|data):/i),yA=Oe(/[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g),wA=Oe(/^html$/i),EA=Oe(/^[a-z][.\w]*(-[.\w]+)+$/i),qb=Oe(/<[/\w!]/g),Yb=Oe(/<[/\w]/g),xA=Oe(/<\/no(script|embed|frames)/i),SA=Oe(/\/>/i),Xe={element:1,attribute:2,text:3,cdataSection:4,entityReference:5,entityNode:6,processingInstruction:7,comment:8,document:9,documentType:10,documentFragment:11,notation:12},Qb=["style","script","xmp","iframe","noembed","noframes","plaintext","noscript"],_A=Ce(re({},Qb)),TA=(function(){let t={};return wn(Qb,e=>{t[e]=Oe(new RegExp("</"+e+"(?=[\\t\\n\\f\\r />])","i"))}),Ce(t)})(),AA=function(){return typeof window>"u"?null:window},kA=function(e,n){if(typeof e!="object"||typeof e.createPolicy!="function")return null;let r=null,o="data-tt-policy-suffix";n&&n.hasAttribute(o)&&(r=n.getAttribute(o));let i="dompurify"+(r?"#"+r:"");try{return e.createPolicy(i,{createHTML(a){return a},createScriptURL(a){return a}})}catch{return console.warn("TrustedTypes policy "+i+" could not be created."),null}},Xb=function(){return{afterSanitizeAttributes:[],afterSanitizeElements:[],afterSanitizeShadowDOM:[],beforeSanitizeAttributes:[],beforeSanitizeElements:[],beforeSanitizeShadowDOM:[],uponSanitizeAttribute:[],uponSanitizeElement:[],uponSanitizeShadowNode:[]}},Zt=function(e,n,r,o){return Be(e,n)&&sr(e[n])?re(o.base?Ke(o.base):{},e[n],o.transform):r},id=function(e,n,r){let o=Be(e,n)?e[n]:void 0;return o&&typeof o=="object"?Ke(o):r()};function ey(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:AA(),e=M=>ey(M);if(e.version="3.4.16",e.removed=[],!t||!t.document||t.document.nodeType!==Xe.document||!t.Element)return e.isSupported=!1,e;let n=t.document,r=n,o=r.currentScript;t.DocumentFragment;let i=t.HTMLTemplateElement,a=t.Node,s=t.Element,l=t.NodeFilter;t.NamedNodeMap===void 0&&(t.NamedNodeMap||t.MozNamedAttrMap),t.HTMLFormElement;let c=t.DOMParser,u=t.trustedTypes,h=s.prototype,m=ot(h,"cloneNode"),f=ot(h,"remove"),p=ot(h,"removeAttributeNode"),b=ot(h,"nextSibling"),g=ot(h,"childNodes"),E=ot(h,"parentNode"),y=ot(h,"shadowRoot"),_=ot(h,"attributes"),C=a&&a.prototype?ot(a.prototype,"nodeType"):null,w=a&&a.prototype?ot(a.prototype,"nodeName"):null,T=a&&a.prototype?ot(a.prototype,"ownerDocument"):null,S=function(d){return C?C(d):d.nodeType},A=function(d){return w?w(d):d.nodeName};if(typeof i=="function"){let M=n.createElement("template");M.content&&M.content.ownerDocument&&(n=M.content.ownerDocument)}let O,q="",_e,et=!1,dr=0,Ad=function(){if(dr>0)throw Gt('A configured TRUSTED_TYPES_POLICY callback (createHTML or createScriptURL) must not call DOMPurify.sanitize, as that causes infinite recursion. Do not pass a policy whose callbacks wrap DOMPurify as TRUSTED_TYPES_POLICY; see the "DOMPurify and Trusted Types" section of the README.')},_n=function(d){Ad(),dr++;try{return O.createHTML(d)}finally{dr--}},Hy=function(d){Ad(),dr++;try{return O.createScriptURL(d)}finally{dr--}},Fy=function(){return et||(_e=kA(u,o),et=!0),_e},Eo=n,Bs=Eo.implementation,kd=Eo.createNodeIterator,Gy=Eo.createDocumentFragment,Zy=Eo.getElementsByTagName,By=r.importNode,me=Xb();e.isSupported=typeof Kb=="function"&&typeof E=="function"&&Bs&&Bs.createHTMLDocument!==void 0;let Vy=hA,jy=fA,Wy=mA,qy=gA,Yy=vA,Xy=bA,Id=yA,Ky=EA,Rd=Wb,ge=null,Vs=re({},[...Zb,...td,...nd,...rd,...Bb]),ve=null,js=re({},[...Vb,...od,...jb,...As]),ht=Object.seal(ar(null,{tagNameCheck:{writable:!0,configurable:!1,enumerable:!0,value:null},attributeNameCheck:{writable:!0,configurable:!1,enumerable:!0,value:null},allowCustomizedBuiltInElements:{writable:!0,configurable:!1,enumerable:!0,value:!1}})),pr=null,Cd=null,Rt=Object.seal(ar(null,{tagCheck:{writable:!0,configurable:!1,enumerable:!0,value:null},attributeCheck:{writable:!0,configurable:!1,enumerable:!0,value:null}})),Nd=!0,Ws=!0,Od=!1,Pd=!0,Ct=!1,Vt=!0,jt=!1,qs=!1,xo=null,So=null,Ys=!1,Tn=!1,_o=!1,To=!1,Md=!0,zd=!1,Ld="user-content-",Xs=!0,Ks=!1,An={},kn=null,Dd=re({},["annotation-xml","audio","colgroup","desc","foreignobject","head","iframe","math","mi","mn","mo","ms","mtext","noembed","noframes","noscript","plaintext","script","selectedcontent","style","svg","template","thead","title","video","xmp"]),$d=null,Ud=re({},["audio","video","img","source","image","track"]),Hd=null,Fd=re({},["alt","class","for","id","label","name","pattern","placeholder","role","summary","title","value","style","xmlns"]),Ao="http://www.w3.org/1998/Math/MathML",ko="http://www.w3.org/2000/svg",ft="http://www.w3.org/1999/xhtml",In=ft,Js=!1,Qs=null,Jy=re({},[Ao,ko,ft],ed),Gd=Ce(["mi","mo","mn","ms","mtext"]),el=re({},Gd),Zd=Ce(["annotation-xml"]),tl=re({},Zd),Qy=re({},["title","style","font","a","script"]),hr=null,ew=["application/xhtml+xml","text/html"],tw="text/html",Te=null,Rn=null,nw=n.createElement("form"),Bd=function(d){return d instanceof RegExp||d instanceof Function},nl=function(){let d=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};if(Rn&&Rn===d)return;(!d||typeof d!="object")&&(d={}),d=Ke(d),hr=ew.indexOf(d.PARSER_MEDIA_TYPE)===-1?tw:d.PARSER_MEDIA_TYPE,Te=hr==="application/xhtml+xml"?ed:so,ge=Zt(d,"ALLOWED_TAGS",Vs,{transform:Te}),ve=Zt(d,"ALLOWED_ATTR",js,{transform:Te}),Qs=Zt(d,"ALLOWED_NAMESPACES",Jy,{transform:ed}),Hd=Zt(d,"ADD_URI_SAFE_ATTR",Fd,{transform:Te,base:Fd}),$d=Zt(d,"ADD_DATA_URI_TAGS",Ud,{transform:Te,base:Ud}),kn=Zt(d,"FORBID_CONTENTS",Dd,{transform:Te}),pr=Zt(d,"FORBID_TAGS",Ke({}),{transform:Te}),Cd=Zt(d,"FORBID_ATTR",Ke({}),{transform:Te}),An=Be(d,"USE_PROFILES")?d.USE_PROFILES&&typeof d.USE_PROFILES=="object"?Ke(d.USE_PROFILES):d.USE_PROFILES:!1,Nd=d.ALLOW_ARIA_ATTR!==!1,Ws=d.ALLOW_DATA_ATTR!==!1,Od=d.ALLOW_UNKNOWN_PROTOCOLS||!1,Pd=d.ALLOW_SELF_CLOSE_IN_ATTR!==!1,Ct=d.SAFE_FOR_TEMPLATES||!1,Vt=d.SAFE_FOR_XML!==!1,jt=d.WHOLE_DOCUMENT||!1,Tn=d.RETURN_DOM||!1,_o=d.RETURN_DOM_FRAGMENT||!1,To=d.RETURN_TRUSTED_TYPE||!1,Ys=d.FORCE_BODY||!1,Md=d.SANITIZE_DOM!==!1,zd=d.SANITIZE_NAMED_PROPS||!1,Xs=d.KEEP_CONTENT!==!1,Ks=d.IN_PLACE||!1,Rd=uA(d.ALLOWED_URI_REGEXP)?d.ALLOWED_URI_REGEXP:Wb,In=typeof d.NAMESPACE=="string"?d.NAMESPACE:ft,el=id(d,"MATHML_TEXT_INTEGRATION_POINTS",()=>re({},Gd)),tl=id(d,"HTML_INTEGRATION_POINTS",()=>re({},Zd));let x=id(d,"CUSTOM_ELEMENT_HANDLING",()=>ar(null));if(ht=ar(null),Be(x,"tagNameCheck")&&Bd(x.tagNameCheck)&&(ht.tagNameCheck=x.tagNameCheck),Be(x,"attributeNameCheck")&&Bd(x.attributeNameCheck)&&(ht.attributeNameCheck=x.attributeNameCheck),Be(x,"allowCustomizedBuiltInElements")&&typeof x.allowCustomizedBuiltInElements=="boolean"&&(ht.allowCustomizedBuiltInElements=x.allowCustomizedBuiltInElements),Oe(ht),Ct&&(Ws=!1),_o&&(Tn=!0),An&&(ge=re({},Bb),ve=ar(null),An.html===!0&&(re(ge,Zb),re(ve,Vb)),An.svg===!0&&(re(ge,td),re(ve,od),re(ve,As)),An.svgFilters===!0&&(re(ge,nd),re(ve,od),re(ve,As)),An.mathMl===!0&&(re(ge,rd),re(ve,jb),re(ve,As))),Rt.tagCheck=null,Rt.attributeCheck=null,Be(d,"ADD_TAGS")&&(typeof d.ADD_TAGS=="function"?Rt.tagCheck=d.ADD_TAGS:sr(d.ADD_TAGS)&&(ge===Vs&&(ge=Ke(ge)),re(ge,d.ADD_TAGS,Te))),Be(d,"ADD_ATTR")&&(typeof d.ADD_ATTR=="function"?Rt.attributeCheck=d.ADD_ATTR:sr(d.ADD_ATTR)&&(ve===js&&(ve=Ke(ve)),re(ve,d.ADD_ATTR,Te))),Be(d,"ADD_FORBID_CONTENTS")&&sr(d.ADD_FORBID_CONTENTS)&&(kn===Dd&&(kn=Ke(kn)),re(kn,d.ADD_FORBID_CONTENTS,Te)),Xs&&(ge["#text"]=!0),jt&&re(ge,["html","head","body"]),ge.table&&(re(ge,["tbody"]),delete pr.tbody),d.TRUSTED_TYPES_POLICY){if(typeof d.TRUSTED_TYPES_POLICY.createHTML!="function")throw Gt('TRUSTED_TYPES_POLICY configuration option must provide a "createHTML" hook.');if(typeof d.TRUSTED_TYPES_POLICY.createScriptURL!="function")throw Gt('TRUSTED_TYPES_POLICY configuration option must provide a "createScriptURL" hook.');let N=O;O=d.TRUSTED_TYPES_POLICY;try{q=_n("")}catch(z){throw O=N,z}}else d.TRUSTED_TYPES_POLICY===null?(O=void 0,q=""):(O===void 0&&(O=Fy()),O&&typeof q=="string"&&(q=_n("")));Ce&&Ce(d),Rn=d},Vd=re({},[...td,...nd,...dA]),jd=re({},[...rd,...pA]),rw=function(d,x,N){return x.namespaceURI===ft?d==="svg":x.namespaceURI===Ao?d==="svg"&&(N==="annotation-xml"||el[N]):!!Vd[d]},ow=function(d,x,N){return x.namespaceURI===ft?d==="math":x.namespaceURI===ko?d==="math"&&tl[N]:!!jd[d]},iw=function(d,x,N){return x.namespaceURI===ko&&!tl[N]||x.namespaceURI===Ao&&!el[N]?!1:!jd[d]&&(Qy[d]||!Vd[d])},aw=function(d){let x=E(d);(!x||!x.tagName)&&(x={namespaceURI:In,tagName:"template"});let N=so(d.tagName),z=so(x.tagName);return Qs[d.namespaceURI]?d.namespaceURI===ko?rw(N,x,z):d.namespaceURI===Ao?ow(N,x,z):d.namespaceURI===ft?iw(N,x,z):!!(hr==="application/xhtml+xml"&&Qs[d.namespaceURI]):!1},Nt=function(d){oo(e.removed,{element:d});try{E(d).removeChild(d)}catch{if(f(d),!E(d))throw Gt("a node selected for removal could not be detached from its tree and cannot be safely returned; refusing to sanitize in place")}},Wd=function(d,x,N){try{p(d,x)}catch{try{d.removeAttribute(N)}catch{}}},Io=function(d){Ro(d);let x=g(d);if(x){let z=[];wn(x,H=>{oo(z,H)}),wn(z,H=>{try{f(H)}catch{}})}let N=_(d);if(N)for(let z=N.length-1;z>=0;--z){let H=N[z],K=H&&H.name;typeof K=="string"&&Wd(d,H,K)}},Wt=function(d,x,N){if(!N)try{N=x.getAttributeNode(d)}catch{N=null}oo(e.removed,{attribute:N||null,from:x});try{N?p(x,N):x.removeAttribute(d)}catch{try{x.removeAttribute(d)}catch{}}if(d==="is")if(Tn||_o)try{Nt(x)}catch{}else try{x.setAttribute(d,"")}catch{}},sw=function(d){let x=_(d);if(x)for(let N=x.length-1;N>=0;--N){let z=x[N],H=z&&z.name;typeof H!="string"||ve[Te(H)]||Wd(d,z,H)}},Ro=function(d){let x=[d];for(;x.length>0;){let N=x.pop();S(N)===Xe.element&&sw(N);let z=g(N);if(z)for(let H=z.length-1;H>=0;--H)x.push(z[H])}},qd=function(d,x){return Vt?d==="patchsrc"?!0:d==="for"&&x!=="label"&&x!=="output":!1},lw=function(d){if(!Vt)return;let x=[d];for(;x.length>0;){let N=x.pop(),z=S(N);if(z===Xe.processingInstruction||z===Xe.comment&&Ue(Yb,N.data)){try{f(N)}catch{}continue}if(z===Xe.element){let K=N,te=Te(A(N));try{K.hasAttribute&&K.hasAttribute("patchsrc")&&K.removeAttribute("patchsrc"),K.hasAttribute&&K.hasAttribute("for")&&qd("for",te)&&K.removeAttribute("for")}catch{}}let H=g(N);if(H)for(let K=H.length-1;K>=0;--K)x.push(H[K])}},Yd=function(d){let x=null,N=null;if(Ys)d="<remove></remove>"+d;else{let K=Ub(d,/^[\r\n\t ]+/);N=K&&K[0]}hr==="application/xhtml+xml"&&In===ft&&(d='<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>'+d+"</body></html>");let z=O?_n(d):d;if(In===ft)try{x=new c().parseFromString(z,hr)}catch{}if(!x||!x.documentElement){x=Bs.createDocument(In,"template",null);try{x.documentElement.innerHTML=Js?q:z}catch{}}let H=x.body||x.documentElement;return d&&N&&H.insertBefore(n.createTextNode(N),H.childNodes[0]||null),In===ft?Zy.call(x,jt?"html":"body")[0]:jt?x.documentElement:H},Xd=function(d){let x=T?T(d):d.ownerDocument;return kd.call(x||d,d,l.SHOW_ELEMENT|l.SHOW_COMMENT|l.SHOW_TEXT|l.SHOW_PROCESSING_INSTRUCTION|l.SHOW_CDATA_SECTION,null)},Co=function(d){return d=io(d,Vy," "),d=io(d,jy," "),d=io(d,Wy," "),d},rl=function(d){var x;d.normalize();let N=T?T(d):d.ownerDocument,z=kd.call(N||d,d,l.SHOW_TEXT|l.SHOW_COMMENT|l.SHOW_CDATA_SECTION|l.SHOW_PROCESSING_INSTRUCTION,null),H=z.nextNode();for(;H;)H.data=Co(H.data),H=z.nextNode();let K=(x=d.querySelectorAll)===null||x===void 0?void 0:x.call(d,"template");K&&wn(K,te=>{Cn(te.content)&&rl(te.content)})},No=function(d){let x=w?w(d):null;return typeof x!="string"||Te(x)!=="form"?!1:typeof d.nodeName!="string"||typeof d.textContent!="string"||typeof d.removeChild!="function"||d.attributes!==_(d)||typeof d.removeAttribute!="function"||typeof d.removeAttributeNode!="function"||typeof d.getAttributeNode!="function"||typeof d.setAttribute!="function"||typeof d.namespaceURI!="string"||typeof d.insertBefore!="function"||typeof d.hasChildNodes!="function"||d.nodeType!==C(d)||d.childNodes!==g(d)},Cn=function(d){if(!C||typeof d!="object"||d===null)return!1;try{return C(d)===Xe.documentFragment}catch{return!1}},fr=function(d){if(!C||typeof d!="object"||d===null)return!1;try{return typeof C(d)=="number"}catch{return!1}};function mt(M,d,x){M.length!==0&&wn(M,N=>{N.call(e,d,x,Rn)})}let cw=function(d,x){return!!(Vt&&d.hasChildNodes()&&!fr(d.firstElementChild)&&Ue(qb,d.textContent)&&Ue(qb,d.innerHTML)||Vt&&d.namespaceURI===ft&&_A[x]&&(fr(d.firstElementChild)||typeof d.textContent=="string"&&Ue(TA[x],d.textContent))||d.nodeType===Xe.processingInstruction||Vt&&d.nodeType===Xe.comment&&Ue(Yb,d.data))},Oo=function(d,x){if(d instanceof RegExp)return Ue(d,x);if(d instanceof Function){for(var N=arguments.length,z=new Array(N>2?N-2:0),H=2;H<N;H++)z[H-2]=arguments[H];return!!d(x,...z)}return!1},uw=function(d,x,N){if(!pr[x]&&ep(x)&&Oo(ht.tagNameCheck,x))return!1;if(Xs&&!kn[x]){let z=E(d),H=g(d);if(H&&z){let K=H.length;for(let te=K-1;te>=0;--te){let xe=d===N?m(H[te],!0):H[te];z.insertBefore(xe,b(d))}}}return Nt(d),!0},Kd=function(d,x,N,z){return d.length===0?x:x===N||x===z?Ke(x):x},Nn=function(d,x){return d===x||E(d)!==null?!1:(Ks&&Ro(d),!0)},Jd=function(d,x){if(mt(me.beforeSanitizeElements,d,null),Nn(d,x))return!0;if(No(d))return Nt(d),!0;let N=Te(A(d));if(ge=Kd(me.uponSanitizeElement,ge,Vs,xo),mt(me.uponSanitizeElement,d,{tagName:N,allowedTags:ge}),Nn(d,x))return!0;if(cw(d,N))return Nt(d),!0;if(pr[N]||!(Rt.tagCheck instanceof Function&&Rt.tagCheck(N))&&!ge[N]){let z=uw(d,N,x);return z===!1&&(mt(me.afterSanitizeElements,d,null),Nn(d,x))?!0:z}if(S(d)===Xe.element&&!aw(d)||(N==="noscript"||N==="noembed"||N==="noframes")&&Ue(xA,d.innerHTML))return Nt(d),!0;if(Ct&&d.nodeType===Xe.text){let z=Co(d.textContent);d.textContent!==z&&(oo(e.removed,{element:d.cloneNode()}),d.textContent=z)}return mt(me.afterSanitizeElements,d,null),Nn(d,x)},Qd=function(d,x,N){if(Cd[x]||qd(x,d)||Md&&(x==="id"||x==="name")&&(N in n||N in nw))return!1;let z=ve[x]||Rt.attributeCheck instanceof Function&&Rt.attributeCheck(x,d);return Ws&&Ue(qy,x)||Nd&&Ue(Yy,x)?!0:z?Hd[x]||Ue(Rd,io(N,Id,""))||(x==="src"||x==="xlink:href"||x==="href")&&d!=="script"&&Hb(N,"data:")===0&&$d[d]||Od&&!Ue(Xy,io(N,Id,""))?!0:!N:ep(d)&&Oo(ht.tagNameCheck,d)&&Oo(ht.attributeNameCheck,x,d)||x==="is"&&ht.allowCustomizedBuiltInElements&&Oo(ht.tagNameCheck,N)},dw=re({},["annotation-xml","color-profile","font-face","font-face-format","font-face-name","font-face-src","font-face-uri","missing-glyph"]),ep=function(d){return!dw[so(d)]&&Ue(Ky,d)},pw=function(d,x,N,z){if(O&&typeof u=="object"&&typeof u.getAttributeType=="function"&&!N)switch(u.getAttributeType(d,x)){case"TrustedHTML":return _n(z);case"TrustedScriptURL":return Hy(z)}return z},hw=function(d,x,N,z){try{return N?d.setAttributeNS(N,x,z):d.setAttribute(x,z),No(d)?(Nt(d),!1):!0}catch{return Wt(x,d),!1}},tp=function(d,x){if(mt(me.beforeSanitizeAttributes,d,null),Nn(d,x))return;let N=d.attributes;if(!N||No(d))return;ve=Kd(me.uponSanitizeAttribute,ve,js,So);let z={attrName:"",attrValue:"",keepAttr:!0,allowedAttributes:ve,forceKeepAttr:void 0},H=N.length,K=Te(d.nodeName);for(;H--;){let te=N[H],xe=te.name,tt=te.namespaceURI,Ve=te.value,On=Te(xe),il=Ve,He=xe==="value"?il:oA(il),np=!1;if(z.attrName=On,z.attrValue=He,z.keepAttr=!0,z.forceKeepAttr=void 0,mt(me.uponSanitizeAttribute,d,z),He=z.attrValue,zd&&(On==="id"||On==="name")&&Hb(He,Ld)!==0&&(Wt(xe,d,te),He=Ld+He,np=!0),Vt&&Ue(/((--!?|])>)|<\/(style|script|title|xmp|textarea|noscript|iframe|noembed|noframes)/i,He)){Wt(xe,d,te);continue}if(On==="attributename"&&Ub(He,"href")){Wt(xe,d,te);continue}if(!z.forceKeepAttr){if(!z.keepAttr){Wt(xe,d,te);continue}if(!Pd&&Ue(SA,He)){Wt(xe,d,te);continue}if(Ct&&(He=Co(He)),!Qd(K,On,He)){Wt(xe,d,te);continue}He=pw(K,On,tt,He),He!==il&&hw(d,xe,tt,He)&&np&&$b(e.removed)}}mt(me.afterSanitizeAttributes,d,null),Nn(d,x)},Po=function(d){let x=null,N=Xd(d);for(mt(me.beforeSanitizeShadowDOM,d,null);x=N.nextNode();)if(mt(me.uponSanitizeShadowNode,x,null),Jd(x,d),tp(x,d),Cn(x.content)&&Po(x.content),S(x)===Xe.element){let z=y(x);Cn(z)&&(ol(z),Po(z))}mt(me.afterSanitizeShadowDOM,d,null)},ol=function(d){let x=[{node:d,shadow:null}];for(;x.length>0;){let N=x.pop();if(N.shadow){Po(N.shadow);continue}let z=N.node,H=S(z)===Xe.element,K=g(z);if(K)for(let te=K.length-1;te>=0;--te)x.push({node:K[te],shadow:null});if(H){let te=w?w(z):null;if(typeof te=="string"&&Te(te)==="template"){let xe=z.content;Cn(xe)&&x.push({node:xe,shadow:null})}}if(H){let te=y(z);Cn(te)&&x.push({node:null,shadow:te},{node:te,shadow:null})}}};return e.sanitize=function(M){let d=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},x=null,N=null,z=null,H=null;if(Js=!M,Js&&(M="<!-->"),typeof M!="string"&&!fr(M)&&(M=cA(M),typeof M!="string"))throw Gt("dirty is not a string, aborting");if(!e.isSupported)return M;qs?(ge=xo,ve=So):nl(d),(me.uponSanitizeElement.length>0||me.uponSanitizeAttribute.length>0)&&(ge=Ke(ge)),me.uponSanitizeAttribute.length>0&&(ve=Ke(ve)),e.removed=[];let K=Ks&&typeof M!="string"&&fr(M);if(K){lw(M);let tt=A(M);if(typeof tt=="string"){let Ve=Te(tt);if(!ge[Ve]||pr[Ve])throw Io(M),Gt("root node is forbidden and cannot be sanitized in-place")}if(No(M))throw Io(M),Gt("root node is clobbered and cannot be sanitized in-place");try{ol(M)}catch(Ve){throw Io(M),Ve}}else if(fr(M))x=Yd("<!---->"),N=x.ownerDocument.importNode(M,!0),N.nodeType===Xe.element&&N.nodeName==="BODY"||N.nodeName==="HTML"?x=N:x.appendChild(N),ol(x);else{if(!Tn&&!Ct&&!jt&&M.indexOf("<")===-1)return O&&To?_n(M):M;if(x=Yd(M),!x)return Tn?null:To?q:""}x&&Ys&&Nt(x.firstChild);let te=K?M:x;try{let tt=Xd(te);for(;z=tt.nextNode();)Jd(z,te),tp(z,te),Cn(z.content)&&Po(z.content)}catch(tt){throw K&&(Io(M),wn(e.removed,Ve=>{Ve.element&&Ro(Ve.element)})),tt}if(K){let tt=!1;if(wn(e.removed,Ve=>{Ve.element&&(Ve.element===M&&(tt=!0),Ro(Ve.element))}),tt)throw Gt("a node selected for removal could not be safely returned; refusing to sanitize in place");return Ct&&rl(M),M}if(Tn){if(Ct&&rl(x),_o)for(H=Gy.call(x.ownerDocument);x.firstChild;)H.appendChild(x.firstChild);else H=x;return(ve.shadowroot||ve.shadowrootmode)&&(H=By.call(r,H,!0)),H}let xe=jt?x.outerHTML:x.innerHTML;return jt&&ge["!doctype"]&&x.ownerDocument&&x.ownerDocument.doctype&&x.ownerDocument.doctype.name&&Ue(wA,x.ownerDocument.doctype.name)&&(xe="<!DOCTYPE "+x.ownerDocument.doctype.name+`>
`+xe),Ct&&(xe=Co(xe)),O&&To?_n(xe):xe},e.setConfig=function(){let M=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};nl(M),qs=!0,xo=ge,So=ve},e.clearConfig=function(){Rn=null,qs=!1,xo=null,So=null,O=_e,q=""},e.isValidAttribute=function(M,d,x){Rn||nl({});let N=Te(M),z=Te(d);return Qd(N,z,x)},e.addHook=function(M,d){typeof d=="function"&&Be(me,M)&&oo(me[M],d)},e.removeHook=function(M,d){if(Be(me,M)){if(d!==void 0){let x=nA(me[M],d);return x===-1?void 0:rA(me[M],x,1)[0]}return $b(me[M])}},e.removeHooks=function(M){Be(me,M)&&(me[M]=[])},e.removeAllHooks=function(){me=Xb()},e}var ty=ey();function dd(){return{async:!1,breaks:!1,extensions:null,gfm:!0,hooks:null,pedantic:!1,renderer:null,silent:!1,tokenizer:null,walkTokens:null}}var Sn=dd();function hy(t){Sn=t}var En={exec:()=>null};function lr(t){let e=[];return n=>{let r=Math.max(0,Math.min(3,n-1)),o=e[r];return o||(o=t(r),e[r]=o),o}}function W(t,e=""){let n=typeof t=="string"?t:t.source,r={replace:(o,i)=>{let a=typeof i=="string"?i:i.source;return a=a.replace(De.caret,"$1"),n=n.replace(o,a),r},getRegex:()=>new RegExp(n,e)};return r}var IA=((t="")=>{try{return!!new RegExp("(?<=1)(?<!1)"+t)}catch{return!1}})(),De={codeRemoveIndent:/^(?: {0,3}\t| {1,4})/gm,outputLinkReplace:/\\([\[\]])/g,indentCodeCompensation:/^(\s+)(?:```)/,beginningSpace:/^\s+/,endingHash:/#$/,startingSpaceChar:/^ /,endingSpaceChar:/ $/,endingSpaceTabChar:/[ \t]$/,nonSpaceChar:/[^ ]/,newLineCharGlobal:/\n/g,tabCharGlobal:/\t/g,leadingSpaceTab:/^[ \t]+/,multipleSpaceGlobal:/\s+/g,blankLine:/^[ \t]*$/,doubleBlankLine:/\n[ \t]*\n[ \t]*$/,blockquoteStart:/^ {0,3}>/,blockquoteSetextReplace:/\n {0,3}((?:=+|-+) *)(?=\n|$)/g,blockquoteSetextReplace2:/^ {0,3}>[ \t]?/gm,listReplaceNesting:/^ {1,4}(?=( {4})*[^ ])/g,listIsTask:/^\[[ xX]\] +\S/,listReplaceTask:/^\[[ xX]\] +/,listTaskCheckbox:/\[[ xX]\]/,anyLine:/\n.*\n/,hrefBrackets:/^<(.*)>$/,tableDelimiter:/[:|]/,tableAlignChars:/^\||\| *$/g,tableRowBlankLine:/\n[ \t]*$/,tableAlignRight:/^ *-+: *$/,tableAlignCenter:/^ *:-+: *$/,tableAlignLeft:/^ *:-+ *$/,startATag:/^<a /i,endATag:/^<\/a>/i,startPreScriptTag:/^<(pre|code|kbd|script)(\s|>)/i,endPreScriptTag:/^<\/(pre|code|kbd|script)(\s|>)/i,startAngleBracket:/^</,endAngleBracket:/>$/,pedanticHrefTitle:/^([^'"]*[^\s])\s+(['"])(.*)\2/,unicodeAlphaNumeric:/[\p{L}\p{N}]/u,numericCharacterReference:/&#(?:(\d{1,7})|[Xx]([A-Fa-f0-9]{1,6}));/g,escapeTest:/[&<>"']/,escapeReplace:/[&<>"']/g,escapeTestNoEncode:/[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/,escapeReplaceNoEncode:/[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/g,caret:/(^|[^\[])\^/g,percentDecode:/%25/g,findPipe:/\|/g,splitPipe:/ \|/,slashPipe:/\\\|/g,carriageReturn:/\r\n|\r/g,spaceLine:/^ +$/gm,notSpaceStart:/^\S*/,endingNewline:/\n$/,listItemRegex:t=>new RegExp(`^( {0,3}${t})((?:[	 ][^\\n]*)?(?:\\n|$))`),nextBulletRegex:lr(t=>new RegExp(`^ {0,${t}}(?:[*+-]|\\d{1,9}[.)])((?:[ 	][^\\n]*)?(?:\\n|$))`)),hrRegex:lr(t=>new RegExp(`^ {0,${t}}((?:-[ 	]*){3,}|(?:_[ 	]*){3,}|(?:\\*[ 	]*){3,})(?:\\n+|$)`)),fencesBeginRegex:lr(t=>new RegExp(`^ {0,${t}}(?:\`\`\`|~~~)`)),headingBeginRegex:lr(t=>new RegExp(`^ {0,${t}}#`)),htmlBeginRegex:lr(t=>new RegExp(`^ {0,${t}}(?:</?(?:${po})(?: +|$|/?>)|<(?:script|pre|style|textarea|!--))`,"i")),blockquoteBeginRegex:lr(t=>new RegExp(`^ {0,${t}}>`))},RA=/^(?:[ \t]*(?:\n|$))+/,CA=/^((?: {4}| {0,3}\t)[^\n]+(?:\n(?:[ \t]*(?:\n|$))*)?)+/,NA=/^ {0,3}(`{3,}(?=[^`\n]*(?:\n|$))|~{3,})([^\n]*)(?:\n|$)(?:|([\s\S]*?)(?:\n|$))(?: {0,3}\1[~`]* *(?=\n|$)|$)/,uo=/^ {0,3}((?:-[\t ]*){3,}|(?:_[ \t]*){3,}|(?:\*[ \t]*){3,})(?:\n+|$)/,OA=/^ {0,3}(#{1,6})(?=\s|$)(.*)(?:\n+|$)/,pd=/ {0,3}(?:[*+-]|\d{1,9}[.)])/,fy=/^(?!bull |blockCode|fences|blockquote|heading|html|table)((?:.|\n(?!\s*?\n|bull |fences|blockquote|heading|hr|html|table))+?)\n {0,3}(=+|-+) *(?:\n+|$)/,my=W(fy).replace(/bull/g,pd).replace(/blockCode/g,/(?: {4}| {0,3}\t)/).replace(/fences/g,/ {0,3}(?:`{3,}|~{3,})/).replace(/blockquote/g,/ {0,3}>/).replace(/heading/g,/ {0,3}#{1,6}(?:\s|$)/).replace(/hr/g,/ {0,3}(?:(?:-[\t ]*){3,}|(?:_[ \t]*){3,}|(?:\*[ \t]*){3,})(?:\n+|$)/).replace(/html/g,/ {0,3}<[^\n>]+>\n/).replace(/\|table/g,"").getRegex(),PA=W(fy).replace(/bull/g,pd).replace(/blockCode/g,/(?: {4}| {0,3}\t)/).replace(/fences/g,/ {0,3}(?:`{3,}|~{3,})/).replace(/blockquote/g,/ {0,3}>/).replace(/heading/g,/ {0,3}#{1,6}(?:\s|$)/).replace(/hr/g,/ {0,3}(?:(?:-[\t ]*){3,}|(?:_[ \t]*){3,}|(?:\*[ \t]*){3,})(?:\n+|$)/).replace(/html/g,/ {0,3}<[^\n>]+>\n/).replace(/table/g,/ {0,3}\|?(?:[:\- ]*\|)+[\:\- ]*\n/).getRegex(),hd=/^([^\n]+(?:\n(?!hr|heading|lheading|blockquote|fences|list|html|table|[ \t]+\n)[^\n]+)*)/,MA=/^[^\n]+/,fd=/(?!\s*\])(?:\\[\s\S]|[^\[\]\\])+/,zA=W(/^ {0,3}\[(label)\]: *(?:\n[ \t]*)?([^<\s][^\s]*|<.*?>)(?:(?: +(?:\n[ \t]*)?| *\n[ \t]*)(title))? *(?:\n+|$)/).replace("label",fd).replace("title",/(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/).getRegex(),LA=W(/^(bull)([ \t][^\n]*?)?(?:\n|$)/).replace(/bull/g,pd).getRegex(),po="address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option|p|param|search|section|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul",md=/<!--(?:-?>|[\s\S]*?(?:-->|$))/,DA=W("^ {0,3}(?:<(script|pre|style|textarea)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n*|$)|comment[^\\n]*(\\n+|$)|<\\?[\\s\\S]*?(?:\\?>[^\\n]*\\n*|$)|<![A-Z][\\s\\S]*?(?:>[^\\n]*\\n*|$)|<!\\[CDATA\\[[\\s\\S]*?(?:\\]\\]>[^\\n]*\\n*|$)|</?(tag)(?: +|\\n|/?>)[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$)|<(?!script|pre|style|textarea)([a-z][a-z0-9-]*)(?:attribute)*? */?>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$)|</(?!script|pre|style|textarea)[a-z][a-z0-9-]*\\s*>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$))","i").replace("comment",md).replace("tag",po).replace("attribute",/ +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/).getRegex(),gy=t=>W(hd).replace("hr",uo).replace("heading"," {0,3}#{1,6}(?:\\s|$)").replace("|lheading","").replace("|table","").replace("blockquote"," {0,3}>").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*(?:\\n|$))|~~~)[^\\n]*(?:\\n|$)").replace("list",t).replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",po).getRegex(),$A=gy(/ {0,3}(?:[*+-]|1[.)])[ \t]+[^ \t\n]/),UA=gy(/ {0,3}(?:[*+-]|\d{1,9}[.)])(?:[ \t]|\n|$)/),HA=W(/^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/).replace("paragraph",UA).getRegex(),gd={blockquote:HA,code:CA,def:zA,fences:NA,heading:OA,hr:uo,html:DA,lheading:my,list:LA,newline:RA,paragraph:$A,table:En,text:MA},ny=W("^ *([^\\n ].*)\\n {0,3}((?:\\| *)?:?-+:? *(?:\\| *:?-+:? *)*(?:\\| *)?)(?:\\n((?:(?! *\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)").replace("hr",uo).replace("heading"," {0,3}#{1,6}(?:\\s|$)").replace("blockquote"," {0,3}>").replace("code","(?: {4}| {0,3}	)[^\\n]").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*(?:\\n|$))|~~~)[^\\n]*(?:\\n|$)").replace("list"," {0,3}(?:[*+-]|1[.)])[ \\t]").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",po).getRegex(),FA={...gd,lheading:PA,table:ny,paragraph:W(hd).replace("hr",uo).replace("heading"," {0,3}#{1,6}(?:\\s|$)").replace("|lheading","").replace("table",ny).replace("blockquote"," {0,3}>").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*(?:\\n|$))|~~~)[^\\n]*(?:\\n|$)").replace("list"," {0,3}(?:[*+-]|1[.)])[ \\t]+[^ \\t\\n]").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",po).getRegex()},GA={...gd,html:W(`^ *(?:comment *(?:\\n|\\s*$)|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)|<tag(?:"[^"]*"|'[^']*'|\\s[^'"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))`).replace("comment",md).replace(/tag/g,"(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:|[^\\w\\s@]*@)\\b").getRegex(),def:/^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/,heading:/^(#{1,6})(.*)(?:\n+|$)/,fences:En,lheading:/^(.+?)\n {0,3}(=+|-+) *(?:\n+|$)/,paragraph:W(hd).replace("hr",uo).replace("heading",` *#{1,6} *[^
]`).replace("lheading",my).replace("|table","").replace("blockquote"," {0,3}>").replace("|fences","").replace("|list","").replace("|html","").replace("|tag","").getRegex()},ZA=/^\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/,BA=/^(`+)([^`]|[^`][\s\S]*?[^`])\1(?!`)/,vy=/^( {2,}|\\)\n(?!\s*$)[ \t]*/,VA=/^(`+|[^`])(?:(?= {2,}\n)|[\s\S]*?(?:(?=[\\<!\[`*_]|\b_|$)|[^ ](?= {2,}\n)))/,It=/[\p{P}\p{S}]/u,cr=/[\s\p{P}\p{S}]/u,ho=/[^\s\p{P}\p{S}]/u,jA=W(/^((?![*_])punctSpace)/,"u").replace(/punctSpace/g,cr).getRegex(),WA=/[\p{Pi}\p{Ps}"']/u,by=/(?!~)[\p{P}\p{S}]/u,qA=/(?!~)[\s\p{P}\p{S}]/u,YA=/(?:[^\s\p{P}\p{S}]|~)/u,XA=W(/link|precode-code|html/,"g").replace("link",/\[(?:[^\[\]`]|(?<a>`+)[^`]+\k<a>(?!`))*?\]\((?:\\[\s\S]|[^\\\(\)]|\((?:\\[\s\S]|[^\\\(\)])*\))*\)/).replace("precode-",IA?"(?<!`)()":"(^^|[^`])").replace("code",/(?<b>`+)[^`]+\k<b>(?!`)/).replace("html",/<(?! )[^<>]*?>/).getRegex(),yy=/^(?:\*+(?:((?!\*)punct)|([^\s*]))?)|^_+(?:((?!_)punct)|([^\s_]))?/,KA=W(yy,"u").replace(/punct/g,It).getRegex(),JA=W(yy,"u").replace(/punct/g,by).getRegex(),QA=/^(?:\*+(?:((?!\*)(?!openQuote)punct)|([^\s*]))?)|^_+(?:((?!_)(?!openQuote)punct)|([^\s_]))?/,ek=W(QA,"u").replace(/openQuote/g,WA).replace(/punct/g,It).getRegex(),wy="^[^_*]*?__[^_*]*?\\*[^_*]*?(?=__)|[^*]+(?=[^*])|(?!\\*)punct(\\*+)(?=[\\s]|$)|notPunctSpace(\\*+)(?!\\*)(?=punctSpace|$)|(?!\\*)punctSpace(\\*+)(?=notPunctSpace)|[\\s](\\*+)(?!\\*)(?=punct)|(?!\\*)punct(\\*+)(?!\\*)(?=punct)|notPunctSpace(\\*+)(?=notPunctSpace)",tk=W(wy,"gu").replace(/notPunctSpace/g,ho).replace(/punctSpace/g,cr).replace(/punct/g,It).getRegex(),nk=W(wy,"gu").replace(/notPunctSpace/g,YA).replace(/punctSpace/g,qA).replace(/punct/g,by).getRegex(),rk="^[^_*]*?__[^_*]*?\\*[^_*]*?(?=__)|[^*]+(?=[^*])|(?!\\*)punct(\\*+)(?=[\\s]|$)|notPunctSpace(\\*+)(?!\\*)(?=punctSpace|$)|(?!\\*)[\\s](\\*+)(?=notPunctSpace)|[\\s](\\*+)(?!\\*)(?=punct)|(?!\\*)punct(\\*+)(?!\\*)(?=punct)|(?:(?!\\*)punct|notPunctSpace)(\\*+)(?!\\*)(?=notPunctSpace)",ok=W(rk,"gu").replace(/notPunctSpace/g,ho).replace(/punctSpace/g,cr).replace(/punct/g,It).getRegex(),ik=W("^[^_*]*?\\*\\*[^_*]*?_[^_*]*?(?=\\*\\*)|[^_]+(?=[^_])|(?!_)punct(_+)(?=[\\s]|$)|notPunctSpace(_+)(?!_)(?=punctSpace|$)|(?!_)punctSpace(_+)(?=notPunctSpace)|[\\s](_+)(?!_)(?=punct)|(?!_)punct(_+)(?!_)(?=punct)","gu").replace(/notPunctSpace/g,ho).replace(/punctSpace/g,cr).replace(/punct/g,It).getRegex(),ak="^[^_*]*?\\*\\*[^_*]*?_[^_*]*?(?=\\*\\*)|[^_]+(?=[^_])|(?!_)punct(_+)(?=[\\s]|$)|notPunctSpace(_+)(?!_)(?=punctSpace|$)|(?!_)[\\s](_+)(?=notPunctSpace)|[\\s](_+)(?!_)(?=punct)|(?!_)punct(_+)(?!_)(?=punct)|(?:(?!_)punct|notPunctSpace)(_+)(?!_)(?=notPunctSpace)",sk=W(ak,"gu").replace(/notPunctSpace/g,ho).replace(/punctSpace/g,cr).replace(/punct/g,It).getRegex(),lk=W(/^~~?(?:((?!~)punct)|[^\s~])/,"u").replace(/punct/g,It).getRegex(),ck="^[^~]+(?=[^~])|(?!~)punct(~~?)(?=[\\s]|$)|notPunctSpace(~~?)(?!~)(?=punctSpace|$)|(?!~)punctSpace(~~?)(?=notPunctSpace)|[\\s](~~?)(?!~)(?=punct)|(?!~)punct(~~?)(?!~)(?=punct)|notPunctSpace(~~?)(?=notPunctSpace)",uk=W(ck,"gu").replace(/notPunctSpace/g,ho).replace(/punctSpace/g,cr).replace(/punct/g,It).getRegex(),dk=W(/\\(punct)/,"gu").replace(/punct/g,It).getRegex(),pk=W(/^<(scheme:[^\s\x00-\x1f<>]*|email)>/).replace("scheme",/[a-zA-Z][a-zA-Z0-9+.-]{1,31}/).replace("email",/[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/).getRegex(),hk=W(md).replace("(?:-->|$)","-->").getRegex(),fk=W("^comment|^</[a-zA-Z][a-zA-Z0-9-]*\\s*>|^<[a-zA-Z][a-zA-Z0-9-]*(?:attribute)*?\\s*/?>|^<\\?[\\s\\S]*?\\?>|^<![a-zA-Z]+\\s[\\s\\S]*?>|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>").replace("comment",hk).replace("attribute",/\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/).getRegex(),Ey=/\[(?:\\[\s\S]|[^\[\]\\])*\]/,Is=W(/(?:\[(?:brackets|\\[\s\S]|[^\[\]\\])*\]|\\[\s\S]|`+(?!`)[^`]*?`+(?!`)|``+(?=\])|[^\[\]\\`])*?/).replace("brackets",Ey).getRegex(),mk=W(/^!?\[(label)\]\([ \t\n]*(href)(?:(?:[ \t]+(?:\n[ \t]*)?|\n[ \t]*)(title))?[ \t\n]*\)/).replace("label",Is).replace("href",/<(?:\\.|[^\n<>\\])+>|[^ \t\n\x00-\x1f]+|(?=\))/).replace("title",/"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/).getRegex(),gk=W(/^!?\[(label)\]\[(ref)\]/).replace("label",Is).replace("ref",fd).getRegex(),vk=W(/^!?\[(ref)\](?:\[\])?/).replace("ref",fd).getRegex(),ry=/(?!\s*\])(?:\\[\s\S]|[^\[\]\\]){1,999}/,bk=W(/(?:[^\[\]\\`]*(?:\[(?:brackets|\\[\s\S]|[^\[\]\\])*\]|\\[\s\S]|`+(?!`)[^`]*?`+(?!`)|``+(?=\]))){0,999}?[^\[\]\\`]*?/).replace("brackets",Ey).getRegex(),yk=W("reflink|nolink(?!\\()","g").replace("reflink",W(/^!?\[(label)\]\[(ref)\]/).replace("label",bk).replace("ref",ry).getRegex()).replace("nolink",W(/^!?\[(ref)\](?:\[\])?/).replace("ref",ry).getRegex()).getRegex(),oy=/[hH][tT][tT][pP][sS]?|[fF][tT][pP]/,wk=/[A-Za-z0-9._+-]+@[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![\w-])/,Ek=W(/(?:mailto:email|xmpp:email(?:\/[A-Za-z0-9@.]+)?)/).replace(/email/g,wk).getRegex(),vd={_backpedal:En,anyPunctuation:dk,autolink:pk,blockSkip:XA,br:vy,code:BA,del:En,delLDelim:En,delRDelim:En,emStrongLDelim:KA,emStrongRDelimAst:tk,emStrongRDelimUnd:ik,escape:ZA,link:mk,nolink:vk,punctuation:jA,reflink:gk,reflinkSearch:yk,tag:fk,text:VA,url:En},xk={...vd,emStrongLDelim:ek,emStrongRDelimAst:ok,emStrongRDelimUnd:sk,link:W(/^!?\[(label)\]\((.*?)\)/).replace("label",Is).getRegex(),reflink:W(/^!?\[(label)\]\s*\[([^\]]*)\]/).replace("label",Is).getRegex()},ld={...vd,emStrongRDelimAst:nk,emStrongLDelim:JA,delLDelim:lk,delRDelim:uk,url:W(/^emailProtocol|^((?:protocol):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/).replace("emailProtocol",Ek).replace("protocol",oy).replace("email",/[A-Za-z0-9._+-]+(@)[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![\w-])/).getRegex(),_backpedal:/(?:[^?!.,:;*_'"~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_'"~)]+(?!$))+/,del:/^(~~?)(?=[^\s~])((?:\\[\s\S]|[^\\])*?(?:\\[\s\S]|[^\s~\\]))\1(?=[^~]|$)/,text:W(/^(?:[^a-zA-Z0-9](?=emailProtocol)|(`+|~+|[^`~])(?:(?=[`~])|(?= {2,}\n)|(?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)|[\s\S]*?(?:(?=[\\<!\[`*~_]|\b_|protocol:\/\/|www\.|$)|[^ ](?= {2,}\n)|[^a-zA-Z0-9](?=emailProtocol)|[^a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-](?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@))))/).replace("protocol",oy).replace(/emailProtocol/g,/(?:mailto|xmpp):/).getRegex()},Sk={...ld,br:W(vy).replace("{2,}","*").getRegex(),text:W(ld.text).replace("\\b_","\\b_| {2,}\\n").replace(/\{2,\}/g,"*").getRegex()},ks={normal:gd,gfm:FA,pedantic:GA},lo={normal:vd,gfm:ld,breaks:Sk,pedantic:xk},_k={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"},iy=t=>_k[t];function Je(t,e){if(e){if(De.escapeTest.test(t))return t.replace(De.escapeReplace,iy)}else if(De.escapeTestNoEncode.test(t))return t.replace(De.escapeReplaceNoEncode,iy);return t}function Tk(t){return t.replace(De.numericCharacterReference,(e,n,r)=>{let o=n===void 0?Number.parseInt(r,16):Number.parseInt(n,10);return o===0||o>1114111||o>=55296&&o<=57343?"\uFFFD":String.fromCodePoint(o)})}function ay(t){try{t=encodeURI(t).replace(De.percentDecode,"%")}catch{return null}return t}function sy(t,e){let n=t.replace(De.findPipe,(i,a,s)=>{let l=!1,c=a;for(;--c>=0&&s[c]==="\\";)l=!l;return l?"|":" |"}),r=n.split(De.splitPipe),o=0;if(r[0].trim()||r.shift(),r.length>0&&!r.at(-1)?.trim()&&r.pop(),e)if(r.length>e)r.splice(e);else for(;r.length<e;)r.push("");for(;o<r.length;o++)r[o]=r[o].trim().replace(De.slashPipe,"|");return r}function Bt(t,e,n){let r=t.length;if(r===0)return"";let o=0;for(;o<r;){let i=t.charAt(r-o-1);if(i===e&&!n)o++;else if(i!==e&&n)o++;else break}return t.slice(0,r-o)}function ly(t){let e=t.split(`
`),n=e.length-1;for(;n>=0&&De.blankLine.test(e[n]);)n--;return e.length-n<=2?t:e.slice(0,n+1).join(`
`)}function Rs(t){return t.trim().toLowerCase().toUpperCase().toLowerCase()}function cy(t,e){if(t.indexOf(e[0])===-1&&t.indexOf(e[1])===-1)return-1;let n=0;for(let r=0;r<t.length;r++)if(t[r]==="\\")r++;else if(t[r]===e[0])n++;else if(t[r]===e[1]&&(n--,n<0))return r;return n>0?-2:-1}function uy(t,e=0){let n=e,r="";for(let o of t)if(o==="	"){let i=4-n%4;r+=" ".repeat(i),n+=i}else r+=o,n++;return r}function dy(t,e,n,r,o){let i=e.href,a=e.title||null,s=t[1].replace(o.other.outputLinkReplace,"$1"),l=t[0].charAt(0)==="!";r.state.inLink=!0;let c=r.state.linkEmitted,u=r.state.inRawBlock;r.state.linkEmitted=!1;let h=r.inlineTokens(s),m=r.state.linkEmitted;if(r.state.linkEmitted=c,r.state.inLink=!1,!l){if(m){r.state.inRawBlock=u;return}r.state.linkEmitted=!0}return{type:l?"image":"link",raw:n,href:i,title:a,text:s,tokens:h}}function Ak(t,e,n){let r=t.match(n.other.indentCodeCompensation);if(r===null)return e;let o=r[1];return e.split(`
`).map(i=>{let a=i.match(n.other.beginningSpace);if(a===null)return i;let[s]=a;return i.slice(Math.min(s.length,o.length))}).join(`
`)}function py(t,e,n,r){if(!e.includes("<"))return!1;for(let o=0;o<e.length;o++){if(e[o]==="\\"){o++;continue}if(e[o]==="`"){let s=r.inline.code.exec(e.slice(o));if(s){o+=s[0].length-1;continue}}if(e[o]!=="<")continue;let i=t.slice(n+o),a=r.inline.tag.exec(i)||r.inline.autolink.exec(i);if(a){if(a[0].length>e.length-o)return!0;o+=a[0].length-1}}return!1}var Cs=class{options;rules;lexer;constructor(t){this.options=t||Sn}space(t){let e=this.rules.block.newline.exec(t);if(e&&e[0].length>0)return{type:"space",raw:e[0]}}code(t){let e=this.rules.block.code.exec(t);if(e){let n=this.options.pedantic?e[0]:ly(e[0]),r=n.replace(this.rules.other.codeRemoveIndent,"");return{type:"code",raw:n,codeBlockStyle:"indented",text:r}}}fences(t){let e=this.rules.block.fences.exec(t);if(e){let n=e[0],r=Ak(n,e[3]||"",this.rules);return{type:"code",raw:n,lang:e[2]?e[2].trim().replace(this.rules.inline.anyPunctuation,"$1"):e[2],text:r}}}heading(t){let e=this.rules.block.heading.exec(t);if(e){let n=e[2].trim();if(this.rules.other.endingHash.test(n)){let r=Bt(n,"#");(this.options.pedantic||!r||this.rules.other.endingSpaceTabChar.test(r))&&(n=r.trim())}return{type:"heading",raw:Bt(e[0],`
`),depth:e[1].length,text:n,tokens:this.lexer.inline(n)}}}hr(t){let e=this.rules.block.hr.exec(t);if(e)return{type:"hr",raw:Bt(e[0],`
`)}}blockquote(t){let e=this.rules.block.blockquote.exec(t);if(e){let n=Bt(e[0],`
`).split(`
`),r="",o="",i=[];for(;n.length>0;){let a=!1,s=[],l;for(l=0;l<n.length;l++)if(this.rules.other.blockquoteStart.test(n[l]))s.push(n[l]),a=!0;else if(!a)s.push(n[l]);else break;n=n.slice(l);let c=s.join(`
`),u=c.replace(this.rules.other.blockquoteSetextReplace,`
    $1`).replace(this.rules.other.blockquoteSetextReplace2,"");r=r?`${r}
${c}`:c,o=o?`${o}
${u}`:u;let h=this.lexer.state.top;if(this.lexer.state.top=!0,this.lexer.blockTokens(u,i,!0),this.lexer.state.top=h,n.length===0)break;let m=i.at(-1);if(m?.type==="code")break;if(m?.type==="blockquote"){let f=m,p=n.join(`
`),b=f.raw+`
`+p.replace(this.rules.other.blockquoteSetextReplace2,""),g=this.blockquote(b);i[i.length-1]=g;let E=b.substring(g.raw.length).replace(/^\n/,""),y=E?E.split(`
`).length:0,_=y?n.slice(0,-y):n;_.length>0&&(r=`${r}
${_.join(`
`)}`),o=o.substring(0,o.length-f.text.length)+g.text;break}else if(m?.type==="list"){let f=m,p=f.raw+`
`+n.join(`
`),b=this.list(p);i[i.length-1]=b,r=r.substring(0,r.length-m.raw.length)+b.raw,o=o.substring(0,o.length-f.raw.length)+b.raw,n=p.substring(i.at(-1).raw.length).split(`
`);continue}}return{type:"blockquote",raw:r,tokens:i,text:o}}}list(t){let e=this.rules.block.list.exec(t);if(e){let n=e[1].trim(),r=n.length>1,o={type:"list",raw:"",ordered:r,start:r?+n.slice(0,-1):"",loose:!1,items:[]};n=r?`\\d{1,9}\\${n.slice(-1)}`:`\\${n}`,this.options.pedantic&&(n=r?n:"[*+-]");let i=this.rules.other.listItemRegex(n),a=!1;for(;t;){let l=!1,c="",u="";if(!(e=i.exec(t))||this.rules.block.hr.test(t))break;c=e[0],t=t.substring(c.length);let h=e[2].split(`
`,1)[0],m=e[1].length,f=this.options.pedantic?uy(h,m):h.replace(this.rules.other.leadingSpaceTab,E=>uy(E,m)),p=t.split(`
`,1)[0],b=!f.trim(),g=0;if(this.options.pedantic?(g=2,u=f.trimStart()):b?g=m+1:(g=f.search(this.rules.other.nonSpaceChar),g=g>4?1:g,u=f.slice(g),g+=m),b&&this.rules.other.blankLine.test(p)&&(c+=p+`
`,t=t.substring(p.length+1),l=!0),!l){let E=this.rules.other.nextBulletRegex(g),y=this.rules.other.hrRegex(g),_=this.rules.other.fencesBeginRegex(g),C=this.rules.other.headingBeginRegex(g),w=this.rules.other.htmlBeginRegex(g),T=this.rules.other.blockquoteBeginRegex(g);for(;t;){let S=t.split(`
`,1)[0],A;if(p=S,this.options.pedantic?(p=p.replace(this.rules.other.listReplaceNesting,"  "),A=p):A=p.replace(this.rules.other.leadingSpaceTab,O=>O.replace(this.rules.other.tabCharGlobal,"    ")),_.test(p)||C.test(p)||w.test(p)||T.test(p)||E.test(p)||y.test(p))break;if(A.search(this.rules.other.nonSpaceChar)>=g||!p.trim())u+=`
`+A.slice(g);else{if(b||f.replace(this.rules.other.tabCharGlobal,"    ").search(this.rules.other.nonSpaceChar)>=4||_.test(f)||C.test(f)||y.test(f))break;u+=`
`+p}b=!p.trim(),c+=S+`
`,t=t.substring(S.length+1),f=A.slice(g)}}o.loose||(a?o.loose=!0:this.rules.other.doubleBlankLine.test(c)&&(a=!0)),o.items.push({type:"list_item",raw:c,task:!!this.options.gfm&&this.rules.other.listIsTask.test(u),loose:!1,text:u,tokens:[]}),o.raw+=c}let s=o.items.at(-1);if(s)s.raw=s.raw.trimEnd(),s.text=s.text.trimEnd();else return;o.raw=o.raw.trimEnd();for(let l of o.items)if(this.lexer.state.top=!1,l.tokens=this.lexer.blockTokens(l.text,[]),!o.loose){let c=l.tokens.filter(h=>h.type==="space"),u=c.length>0&&c.some(h=>this.rules.other.anyLine.test(h.raw));o.loose=u}for(let l of o.items){let c=l.tokens[0];if(l.task&&(c?.type==="text"||c?.type==="paragraph")){l.text=l.text.replace(this.rules.other.listReplaceTask,""),c.raw=c.raw.replace(this.rules.other.listReplaceTask,""),c.text=c.text.replace(this.rules.other.listReplaceTask,"");for(let h=this.lexer.inlineQueue.length-1;h>=0;h--)if(this.rules.other.listIsTask.test(this.lexer.inlineQueue[h].src)){this.lexer.inlineQueue[h].src=this.lexer.inlineQueue[h].src.replace(this.rules.other.listReplaceTask,"");break}let u=this.rules.other.listTaskCheckbox.exec(l.raw);if(u){let h={type:"checkbox",raw:u[0]+" ",checked:u[0]!=="[ ]"};l.checked=h.checked,o.loose?l.tokens[0]&&["paragraph","text"].includes(l.tokens[0].type)&&"tokens"in l.tokens[0]&&l.tokens[0].tokens?(l.tokens[0].raw=h.raw+l.tokens[0].raw,l.tokens[0].text=h.raw+l.tokens[0].text,l.tokens[0].tokens.unshift(h)):l.tokens.unshift({type:"paragraph",raw:h.raw,text:h.raw,tokens:[h]}):l.tokens.unshift(h)}}else l.task&&(l.task=!1)}if(o.loose)for(let l of o.items){l.loose=!0;for(let c of l.tokens)c.type==="text"&&(c.type="paragraph")}return o}}html(t){let e=this.rules.block.html.exec(t);if(e){let n=ly(e[0]);return{type:"html",block:!0,raw:n,pre:e[1]==="pre"||e[1]==="script"||e[1]==="style",text:n}}}def(t){let e=this.rules.block.def.exec(t);if(e){if(!this.rules.other.startAngleBracket.test(e[2])&&cy(e[2],"()")!==-1)return;let n=Rs(e[1]).replace(this.rules.other.multipleSpaceGlobal," "),r=e[2]?e[2].replace(this.rules.other.hrefBrackets,"$1").replace(this.rules.inline.anyPunctuation,"$1"):"",o=e[3]?e[3].substring(1,e[3].length-1).replace(this.rules.inline.anyPunctuation,"$1"):e[3];return{type:"def",tag:n,raw:Bt(e[0],`
`),href:r,title:o}}}table(t){let e=this.rules.block.table.exec(t);if(!e||!this.rules.other.tableDelimiter.test(e[2]))return;let n=sy(e[1]),r=e[2].replace(this.rules.other.tableAlignChars,"").split("|"),o=e[3]?.trim()?e[3].replace(this.rules.other.tableRowBlankLine,"").split(`
`):[],i={type:"table",raw:Bt(e[0],`
`),header:[],align:[],rows:[]};if(n.length===r.length){for(let a of r)this.rules.other.tableAlignRight.test(a)?i.align.push("right"):this.rules.other.tableAlignCenter.test(a)?i.align.push("center"):this.rules.other.tableAlignLeft.test(a)?i.align.push("left"):i.align.push(null);for(let a=0;a<n.length;a++)i.header.push({text:n[a],tokens:this.lexer.inline(n[a]),header:!0,align:i.align[a]});for(let a of o)i.rows.push(sy(a,i.header.length).map((s,l)=>({text:s,tokens:this.lexer.inline(s),header:!1,align:i.align[l]})));return i}}lheading(t){let e=this.rules.block.lheading.exec(t);if(e){let n=e[1].trim();return{type:"heading",raw:Bt(e[0],`
`),depth:e[2].charAt(0)==="="?1:2,text:n,tokens:this.lexer.inline(n)}}}paragraph(t){let e=this.rules.block.paragraph.exec(t);if(e){let n=e[1].charAt(e[1].length-1)===`
`?e[1].slice(0,-1):e[1];return{type:"paragraph",raw:e[0],text:n,tokens:this.lexer.inline(n)}}}text(t){let e=this.rules.block.text.exec(t);if(e)return{type:"text",raw:e[0],text:e[0],tokens:this.lexer.inline(e[0])}}escape(t){let e=this.rules.inline.escape.exec(t);if(e)return{type:"escape",raw:e[0],text:e[1]}}tag(t){let e=this.rules.inline.tag.exec(t);if(e)return!this.lexer.state.inLink&&this.rules.other.startATag.test(e[0])?this.lexer.state.inLink=!0:this.lexer.state.inLink&&this.rules.other.endATag.test(e[0])&&(this.lexer.state.inLink=!1),!this.lexer.state.inRawBlock&&this.rules.other.startPreScriptTag.test(e[0])?this.lexer.state.inRawBlock=!0:this.lexer.state.inRawBlock&&this.rules.other.endPreScriptTag.test(e[0])&&(this.lexer.state.inRawBlock=!1),{type:"html",raw:e[0],inLink:this.lexer.state.inLink,inRawBlock:this.lexer.state.inRawBlock,block:!1,text:e[0]}}link(t){if(this.lexer.state.linkParenPossible===!1)return;let e=this.rules.inline.link.exec(t);if(e){let n=e[0].charAt(0)==="!"?2:1;if(!this.options.pedantic&&py(t,e[1],n,this.rules))return;let r=e[2].trim();if(!this.options.pedantic&&this.rules.other.startAngleBracket.test(r)){if(!this.rules.other.endAngleBracket.test(r))return;let a=Bt(r.slice(0,-1),"\\");if((r.length-a.length)%2===0)return}else{let a=cy(e[2],"()");if(a===-2)return;if(a>-1){let s=(e[0].indexOf("!")===0?5:4)+e[1].length+a;e[2]=e[2].substring(0,a),e[0]=e[0].substring(0,s).trim(),e[3]=""}}let o=e[2],i="";if(this.options.pedantic){let a=this.rules.other.pedanticHrefTitle.exec(o);a&&(o=a[1],i=a[3])}else i=e[3]?e[3].slice(1,-1):"";return o=o.trim(),this.rules.other.startAngleBracket.test(o)&&(this.options.pedantic&&!this.rules.other.endAngleBracket.test(r)?o=o.slice(1):o=o.slice(1,-1)),dy(e,{href:o&&o.replace(this.rules.inline.anyPunctuation,"$1"),title:i&&i.replace(this.rules.inline.anyPunctuation,"$1")},e[0],this.lexer,this.rules)}}reflink(t,e){let n;if((n=this.rules.inline.reflink.exec(t))||(n=this.rules.inline.nolink.exec(t))){let r=n[0].charAt(0)==="!"?2:1;if(!this.options.pedantic&&py(t,n[1],r,this.rules))return;let o=(n[2]||n[1]).replace(this.rules.other.multipleSpaceGlobal," "),i=e[Rs(o)];if(!i){let a=n[0].charAt(0);return{type:"text",raw:a,text:a}}return dy(n,i,n[0],this.lexer,this.rules)}}emStrong(t,e,n=""){let r=this.rules.inline.emStrongLDelim.exec(t);if(!(!r||!r[1]&&!r[2]&&!r[3]&&!r[4]||r[4]&&n.match(this.rules.other.unicodeAlphaNumeric))&&(!(r[1]||r[3])||!n||this.rules.inline.punctuation.exec(n))){let o=[...r[0]].length-1,i,a,s=o,l=0,c=r[0][0],u=n===c,h=c==="*"?this.rules.inline.emStrongRDelimAst:this.rules.inline.emStrongRDelimUnd;for(h.lastIndex=0,e=e.slice(-1*t.length+o);(r=h.exec(e))!==null;){if(i=r[1]||r[2]||r[3]||r[4]||r[5]||r[6],!i)continue;if(a=[...i].length,r[3]||r[4]){s+=a;continue}else if(r[5]||r[6]){if(o%3&&!((o+a)%3)){l+=a;continue}if(u)break}if(s-=a,s>0)continue;a=Math.min(a,a+s+l);let m=[...r[0]][0].length,f=t.slice(0,o+r.index+m+a);if(Math.min(o,a)%2){let b=f.slice(1,-1);return{type:"em",raw:f,text:b,tokens:this.lexer.inlineTokens(b)}}let p=f.slice(2,-2);return{type:"strong",raw:f,text:p,tokens:this.lexer.inlineTokens(p)}}}}codespan(t){let e=this.rules.inline.code.exec(t);if(e){let n=e[2].replace(this.rules.other.newLineCharGlobal," "),r=this.rules.other.nonSpaceChar.test(n),o=this.rules.other.startingSpaceChar.test(n)&&this.rules.other.endingSpaceChar.test(n);return r&&o&&(n=n.substring(1,n.length-1)),{type:"codespan",raw:e[0],text:n}}}br(t){let e=this.rules.inline.br.exec(t);if(e)return{type:"br",raw:e[0]}}del(t,e,n=""){let r=this.rules.inline.delLDelim.exec(t);if(r&&(!r[1]||!n||this.rules.inline.punctuation.exec(n))){let o=[...r[0]].length-1,i,a,s=o,l=this.rules.inline.delRDelim;for(l.lastIndex=0,e=e.slice(-1*t.length+o);(r=l.exec(e))!==null;){if(i=r[1]||r[2]||r[3]||r[4]||r[5]||r[6],!i||(a=[...i].length,a!==o))continue;if(r[3]||r[4]){s+=a;continue}if(s-=a,s>0)continue;a=Math.min(a,a+s);let c=[...r[0]][0].length,u=t.slice(0,o+r.index+c+a),h=u.slice(o,-o);return{type:"del",raw:u,text:h,tokens:this.lexer.inlineTokens(h)}}}}autolink(t){let e=this.rules.inline.autolink.exec(t);if(e){let n,r;return e[2]==="@"?(n=e[1],r="mailto:"+n):(n=e[1],r=n),{type:"link",raw:e[0],text:n,href:r,autolink:!0,tokens:[{type:"text",raw:n,text:n}]}}}url(t){let e;if(e=this.rules.inline.url.exec(t)){let n,r;if(e[2]==="@")n=e[0],r="mailto:"+n;else{let o;do o=e[0],e[0]=this.rules.inline._backpedal.exec(e[0])?.[0]??"";while(o!==e[0]);n=e[0],e[1]==="www."?r="http://"+e[0]:r=e[0]}return{type:"link",raw:e[0],text:n,href:r,autolink:!0,tokens:[{type:"text",raw:n,text:n}]}}}inlineText(t){let e=this.rules.inline.text.exec(t);if(e){let n=this.lexer.state.inRawBlock;return{type:"text",raw:e[0],text:n?e[0]:Tk(e[0]),escaped:n}}}},ut=class cd{tokens;options;state;inlineQueue;tokenizer;constructor(e){this.tokens=[],this.tokens.links=Object.create(null),this.options=e||Sn,this.options.tokenizer=this.options.tokenizer||new Cs,this.tokenizer=this.options.tokenizer,this.tokenizer.options=this.options,this.tokenizer.lexer=this,this.inlineQueue=[],this.state={inLink:!1,inRawBlock:!1,linkEmitted:!1,linkParenPossible:!0,top:!0};let n={other:De,block:ks.normal,inline:lo.normal};this.options.pedantic?(n.block=ks.pedantic,n.inline=lo.pedantic):this.options.gfm&&(n.block=ks.gfm,this.options.breaks?n.inline=lo.breaks:n.inline=lo.gfm),this.tokenizer.rules=n}static get rules(){return{block:ks,inline:lo}}static lex(e,n){return new cd(n).lex(e)}static lexInline(e,n){return new cd(n).inlineTokens(e)}lex(e){e=e.replace(De.carriageReturn,`
`),this.blockTokens(e,this.tokens);for(let n=0;n<this.inlineQueue.length;n++){let r=this.inlineQueue[n];this.inlineTokens(r.src,r.tokens)}return this.inlineQueue=[],this.tokens}blockTokens(e,n=[],r=!1){this.tokenizer.lexer=this,this.options.pedantic&&(e=e.replace(De.tabCharGlobal,"    ").replace(De.spaceLine,""));let o=1/0;for(;e;){if(e.length<o)o=e.length;else{this.infiniteLoopError(e.charCodeAt(0));break}let i;if(this.options.extensions?.block?.some(s=>(i=s.call({lexer:this},e,n))?(e=e.substring(i.raw.length),n.push(i),!0):!1))continue;if(i=this.tokenizer.space(e)){e=e.substring(i.raw.length);let s=n.at(-1);i.raw.length===1&&s!==void 0?s.raw+=`
`:n.push(i);continue}if(i=this.tokenizer.code(e)){e=e.substring(i.raw.length);let s=n.at(-1);s?.type==="paragraph"||s?.type==="text"?(s.raw+=(s.raw.endsWith(`
`)?"":`
`)+i.raw,s.text+=`
`+i.text,this.inlineQueue.at(-1).src=s.text):n.push(i);continue}if(i=this.tokenizer.fences(e)){e=e.substring(i.raw.length),n.push(i);continue}if(i=this.tokenizer.heading(e)){e=e.substring(i.raw.length),n.push(i);continue}if(i=this.tokenizer.hr(e)){e=e.substring(i.raw.length),n.push(i);continue}if(i=this.tokenizer.blockquote(e)){e=e.substring(i.raw.length),n.push(i);continue}if(i=this.tokenizer.list(e)){e=e.substring(i.raw.length),n.push(i);continue}if(i=this.tokenizer.html(e)){e=e.substring(i.raw.length),n.push(i);continue}if(i=this.tokenizer.def(e)){e=e.substring(i.raw.length);let s=n.at(-1);s?.type==="paragraph"||s?.type==="text"?(s.raw+=(s.raw.endsWith(`
`)?"":`
`)+i.raw,s.text+=`
`+i.raw,this.inlineQueue.at(-1).src=s.text):this.tokens.links[i.tag]||(this.tokens.links[i.tag]={href:i.href,title:i.title},n.push(i));continue}if(i=this.tokenizer.table(e)){e=e.substring(i.raw.length),n.push(i);continue}if(i=this.tokenizer.lheading(e)){e=e.substring(i.raw.length),n.push(i);continue}let a=e;if(this.options.extensions?.startBlock){let s=1/0,l=e.slice(1),c;this.options.extensions.startBlock.forEach(u=>{c=u.call({lexer:this},l),typeof c=="number"&&c>=0&&(s=Math.min(s,c))}),s<1/0&&s>=0&&(a=e.substring(0,s+1))}if(this.state.top&&(i=this.tokenizer.paragraph(a))){let s=n.at(-1);r&&s?.type==="paragraph"?(s.raw+=(s.raw.endsWith(`
`)?"":`
`)+i.raw,s.text+=`
`+i.text,this.inlineQueue.pop(),this.inlineQueue.at(-1).src=s.text):n.push(i),r=a.length!==e.length,e=e.substring(i.raw.length);continue}if(i=this.tokenizer.text(e)){e=e.substring(i.raw.length);let s=n.at(-1);s?.type==="text"?(s.raw+=(s.raw.endsWith(`
`)?"":`
`)+i.raw,s.text+=`
`+i.text,this.inlineQueue.pop(),this.inlineQueue.at(-1).src=s.text):n.push(i);continue}if(e){this.infiniteLoopError(e.charCodeAt(0));break}}return this.state.top=!0,n}inline(e,n=[]){return this.inlineQueue.push({src:e,tokens:n}),n}linkInText(e){if(!e.includes("["))return!1;let n=this.tokenizer.rules.inline.link;for(let r of e.matchAll(this.tokenizer.rules.inline.blockSkip))if(n.test(r[0])&&e.charAt(r.index-1)!=="!")return!0;for(let r of e.matchAll(this.tokenizer.rules.inline.reflinkSearch)){let o=r[0],i=o.lastIndexOf("[");if(!(o.charAt(0)==="!"||!Object.hasOwn(this.tokens.links,Rs(o.slice(i+1,-1))))&&!(i>1&&this.linkInText(o.slice(1,i-1))))return!0}return!1}inlineTokens(e,n=[]){this.tokenizer.lexer=this;let r=this.state.linkParenPossible;this.state.linkParenPossible=r&&e.includes(")");try{return this.#e(e,n)}finally{this.state.linkParenPossible=r}}#e(e,n){let r=e;if(this.tokens.links&&e.includes("[")){let s=this.tokenizer.rules.inline.reflinkSearch,l=c=>{let u=c.lastIndexOf("[");if(!Object.hasOwn(this.tokens.links,Rs(c.slice(u+1,-1))))return c;if(u>1&&c.charAt(0)!=="!"){let h=c.slice(1,u-1);if(this.linkInText(h))return"["+h.replace(s,l)+"]["+"a".repeat(c.length-u-2)+"]"}return"["+"a".repeat(c.length-2)+"]"};r=r.replace(s,l)}r=r.replace(this.tokenizer.rules.inline.anyPunctuation,s=>"+".repeat(s.length)),r=r.replace(this.tokenizer.rules.inline.blockSkip,(s,l,c)=>{let u=c?c.length:0;return s.slice(0,u)+"["+"a".repeat(s.length-u-2)+"]"}),r=this.options.hooks?.emStrongMask?.call({lexer:this},r)??r;let o=!1,i="",a=1/0;for(;e;){if(e.length<a)a=e.length;else{this.infiniteLoopError(e.charCodeAt(0));break}o||(i=""),o=!1;let s;if(this.options.extensions?.inline?.some(c=>(s=c.call({lexer:this},e,n))?(e=e.substring(s.raw.length),n.push(s),!0):!1))continue;if(s=this.tokenizer.escape(e)){e=e.substring(s.raw.length),n.push(s);continue}if(s=this.tokenizer.tag(e)){e=e.substring(s.raw.length),n.push(s);continue}if(s=this.tokenizer.link(e)){e=e.substring(s.raw.length),n.push(s);continue}if(s=this.tokenizer.reflink(e,this.tokens.links)){e=e.substring(s.raw.length);let c=n.at(-1);s.type==="text"&&c?.type==="text"?(c.raw+=s.raw,c.text+=s.text):n.push(s);continue}if(s=this.tokenizer.emStrong(e,r,i)){e=e.substring(s.raw.length),n.push(s);continue}if(s=this.tokenizer.codespan(e)){e=e.substring(s.raw.length),n.push(s);continue}if(s=this.tokenizer.br(e)){e=e.substring(s.raw.length),n.push(s);continue}if(s=this.tokenizer.del(e,r,i)){e=e.substring(s.raw.length),n.push(s);continue}if(s=this.tokenizer.autolink(e)){e=e.substring(s.raw.length),n.push(s);continue}if(!this.state.inLink&&(s=this.tokenizer.url(e))){e=e.substring(s.raw.length),n.push(s);continue}let l=e;if(this.options.extensions?.startInline){let c=1/0,u=e.slice(1),h;this.options.extensions.startInline.forEach(m=>{h=m.call({lexer:this},u),typeof h=="number"&&h>=0&&(c=Math.min(c,h))}),c<1/0&&c>=0&&(l=e.substring(0,c+1))}if(s=this.tokenizer.inlineText(l)){e=e.substring(s.raw.length),s.raw.slice(-1)!=="_"&&(i=s.raw.slice(-1)),o=!0;let c=n.at(-1);c?.type==="text"?(c.raw+=s.raw,c.text+=s.text):n.push(s);continue}if(e){this.infiniteLoopError(e.charCodeAt(0));break}}return n}infiniteLoopError(e){let n="Infinite loop on byte: "+e;if(this.options.silent)console.error(n);else throw new Error(n)}},Ns=class{options;parser;constructor(t){this.options=t||Sn}space(t){return""}code({text:t,lang:e,escaped:n}){let r=(e||"").match(De.notSpaceStart)?.[0],o=t?t.replace(De.endingNewline,"")+`
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
`}strong({tokens:t}){return`<strong>${this.parser.parseInline(t)}</strong>`}em({tokens:t}){return`<em>${this.parser.parseInline(t)}</em>`}codespan({text:t}){return`<code>${Je(t,!0)}</code>`}br(t){return"<br>"}del({tokens:t}){return`<del>${this.parser.parseInline(t)}</del>`}link({href:t,title:e,text:n,tokens:r,autolink:o}){let i=o?Je(n,!0):this.parser.parseInline(r),a=ay(t);if(a===null)return i;t=Je(a,o);let s='<a href="'+t+'"';return e&&(s+=' title="'+Je(e)+'"'),s+=">"+i+"</a>",s}image({href:t,title:e,text:n,tokens:r}){r&&(n=this.parser.parseInline(r,this.parser.textRenderer));let o=ay(t);if(o===null)return Je(n);t=o;let i=`<img src="${Je(t)}" alt="${Je(n)}"`;return e&&(i+=` title="${Je(e)}"`),i+=">",i}text(t){return"tokens"in t&&t.tokens?this.parser.parseInline(t.tokens):"escaped"in t&&t.escaped?t.text:Je(t.text)}},bd=class{strong({text:t}){return t}em({text:t}){return t}codespan({text:t}){return t}del({text:t}){return t}html({text:t}){return t}text({text:t}){return t}link({text:t}){return""+t}image({text:t}){return""+t}br(){return""}checkbox({raw:t}){return t}},dt=class ud{options;renderer;textRenderer;constructor(e){this.options=e||Sn,this.options.renderer=this.options.renderer||new Ns,this.renderer=this.options.renderer,this.renderer.options=this.options,this.renderer.parser=this,this.textRenderer=new bd}static parse(e,n){return new ud(n).parse(e)}static parseInline(e,n){return new ud(n).parseInline(e)}parse(e){this.renderer.parser=this;let n="";for(let r=0;r<e.length;r++){let o=e[r];if(this.options.extensions?.renderers?.[o.type]){let a=o,s=this.options.extensions.renderers[a.type].call({parser:this},a);if(s!==!1||!["space","hr","heading","code","table","blockquote","list","checkbox","html","def","paragraph","text"].includes(a.type)){n+=s||"";continue}}let i=o;switch(i.type){case"space":{n+=this.renderer.space(i);break}case"hr":{n+=this.renderer.hr(i);break}case"heading":{n+=this.renderer.heading(i);break}case"code":{n+=this.renderer.code(i);break}case"table":{n+=this.renderer.table(i);break}case"blockquote":{n+=this.renderer.blockquote(i);break}case"list":{n+=this.renderer.list(i);break}case"checkbox":{n+=this.renderer.checkbox(i);break}case"html":{n+=this.renderer.html(i);break}case"def":{n+=this.renderer.def(i);break}case"paragraph":{n+=this.renderer.paragraph(i);break}case"text":{n+=this.renderer.text(i);break}default:{let a='Token with "'+i.type+'" type was not found.';if(this.options.silent)return console.error(a),"";throw new Error(a)}}}return n}parseInline(e,n=this.renderer){this.renderer.parser=this;let r="";for(let o=0;o<e.length;o++){let i=e[o];if(this.options.extensions?.renderers?.[i.type]){let s=this.options.extensions.renderers[i.type].call({parser:this},i);if(s!==!1||!["escape","html","link","image","checkbox","strong","em","codespan","br","del","text"].includes(i.type)){r+=s||"";continue}}let a=i;switch(a.type){case"escape":{r+=n.text(a);break}case"html":{r+=n.html(a);break}case"link":{r+=n.link(a);break}case"image":{r+=n.image(a);break}case"checkbox":{r+=n.checkbox(a);break}case"strong":{r+=n.strong(a);break}case"em":{r+=n.em(a);break}case"codespan":{r+=n.codespan(a);break}case"br":{r+=n.br(a);break}case"del":{r+=n.del(a);break}case"text":{r+=n.text(a);break}default:{let s='Token with "'+a.type+'" type was not found.';if(this.options.silent)return console.error(s),"";throw new Error(s)}}}return r}},co=class{options;block;constructor(t){this.options=t||Sn}static passThroughHooks=new Set(["preprocess","postprocess","processAllTokens","emStrongMask"]);static passThroughHooksRespectAsync=new Set(["preprocess","postprocess","processAllTokens"]);preprocess(t){return t}postprocess(t){return t}processAllTokens(t){return t}emStrongMask(t){return t}provideLexer(t=this.block){return t?ut.lex:ut.lexInline}provideParser(t=this.block){return t?dt.parse:dt.parseInline}},yd=class{defaults=dd();options=this.setOptions;parse=this.parseMarkdown(!0);parseInline=this.parseMarkdown(!1);Parser=dt;Renderer=Ns;TextRenderer=bd;Lexer=ut;Tokenizer=Cs;Hooks=co;constructor(...t){this.use(...t)}walkTokens(t,e){let n=[];for(let r of t)switch(n=n.concat(e.call(this,r)),r.type){case"table":{let o=r;for(let i of o.header)n=n.concat(this.walkTokens(i.tokens,e));for(let i of o.rows)for(let a of i)n=n.concat(this.walkTokens(a.tokens,e));break}case"list":{let o=r;n=n.concat(this.walkTokens(o.items,e));break}default:{let o=r;this.defaults.extensions?.childTokens?.[o.type]?this.defaults.extensions.childTokens[o.type].forEach(i=>{let a=o[i].flat(1/0);n=n.concat(this.walkTokens(a,e))}):o.tokens&&(n=n.concat(this.walkTokens(o.tokens,e)))}}return n}use(...t){let e=this.defaults.extensions||{renderers:{},childTokens:{}};return t.forEach(n=>{let r={...n};if(r.async=this.defaults.async||r.async||!1,n.extensions&&(n.extensions.forEach(o=>{if(!o.name)throw new Error("extension name required");if("renderer"in o){let i=e.renderers[o.name];i?e.renderers[o.name]=function(...a){let s=o.renderer.apply(this,a);return s===!1&&(s=i.apply(this,a)),s}:e.renderers[o.name]=o.renderer}if("tokenizer"in o){if(!o.level||o.level!=="block"&&o.level!=="inline")throw new Error("extension level must be 'block' or 'inline'");let i=e[o.level];i?i.unshift(o.tokenizer):e[o.level]=[o.tokenizer],o.start&&(o.level==="block"?e.startBlock?e.startBlock.push(o.start):e.startBlock=[o.start]:o.level==="inline"&&(e.startInline?e.startInline.push(o.start):e.startInline=[o.start]))}"childTokens"in o&&o.childTokens&&(e.childTokens[o.name]=o.childTokens)}),r.extensions=e),n.renderer){let o=this.defaults.renderer||new Ns(this.defaults);for(let i in n.renderer){if(!(i in o))throw new Error(`renderer '${i}' does not exist`);if(["options","parser"].includes(i))continue;let a=i,s=n.renderer[a],l=o[a];o[a]=(...c)=>{let u=s.apply(o,c);return u===!1&&(u=l.apply(o,c)),u||""}}r.renderer=o}if(n.tokenizer){let o=this.defaults.tokenizer||new Cs(this.defaults);for(let i in n.tokenizer){if(!(i in o))throw new Error(`tokenizer '${i}' does not exist`);if(["options","rules","lexer"].includes(i))continue;let a=i,s=n.tokenizer[a],l=o[a];o[a]=(...c)=>{let u=s.apply(o,c);return u===!1&&(u=l.apply(o,c)),u}}r.tokenizer=o}if(n.hooks){let o=this.defaults.hooks||new co;for(let i in n.hooks){if(!(i in o))throw new Error(`hook '${i}' does not exist`);if(["options","block"].includes(i))continue;let a=i,s=n.hooks[a],l=o[a];co.passThroughHooks.has(i)?o[a]=c=>{if(this.defaults.async&&co.passThroughHooksRespectAsync.has(i))return(async()=>{let h=await s.call(o,c);return l.call(o,h)})();let u=s.call(o,c);return l.call(o,u)}:o[a]=(...c)=>{if(this.defaults.async)return(async()=>{let h=await s.apply(o,c);return h===!1&&(h=await l.apply(o,c)),h})();let u=s.apply(o,c);return u===!1&&(u=l.apply(o,c)),u}}r.hooks=o}if(n.walkTokens){let o=this.defaults.walkTokens,i=n.walkTokens;r.walkTokens=function(a){let s=[];return s.push(i.call(this,a)),o&&(s=s.concat(o.call(this,a))),s}}this.defaults={...this.defaults,...r}}),this}setOptions(t){return this.defaults={...this.defaults,...t},this}lexer(t,e){return ut.lex(t,e??this.defaults)}parser(t,e){return dt.parse(t,e??this.defaults)}parseMarkdown(t){return(e,n)=>{let r={...n},o={...this.defaults,...r},i=this.onError(!!o.silent,!!o.async);if(this.defaults.async===!0&&r.async===!1)return i(new Error("marked(): The async option was set to true by an extension. Remove async: false from the parse options object to return a Promise."));if(typeof e>"u"||e===null)return i(new Error("marked(): input parameter is undefined or null"));if(typeof e!="string")return i(new Error("marked(): input parameter is of type "+Object.prototype.toString.call(e)+", string expected"));if(o.hooks&&(o.hooks.options=o,o.hooks.block=t),o.async)return(async()=>{let a=o.hooks?await o.hooks.preprocess(e):e,s=await(o.hooks?await o.hooks.provideLexer(t):t?ut.lex:ut.lexInline)(a,o),l=o.hooks?await o.hooks.processAllTokens(s):s;o.walkTokens&&await Promise.all(this.walkTokens(l,o.walkTokens));let c=await(o.hooks?await o.hooks.provideParser(t):t?dt.parse:dt.parseInline)(l,o);return o.hooks?await o.hooks.postprocess(c):c})().catch(i);try{o.hooks&&(e=o.hooks.preprocess(e));let a=(o.hooks?o.hooks.provideLexer(t):t?ut.lex:ut.lexInline)(e,o);o.hooks&&(a=o.hooks.processAllTokens(a)),o.walkTokens&&this.walkTokens(a,o.walkTokens);let s=(o.hooks?o.hooks.provideParser(t):t?dt.parse:dt.parseInline)(a,o);return o.hooks&&(s=o.hooks.postprocess(s)),s}catch(a){return i(a)}}}onError(t,e){return n=>{if(n.message+=`
Please report this to https://github.com/markedjs/marked.`,t){let r="<p>An error occurred:</p><pre>"+Je(n.message+"",!0)+"</pre>";return e?Promise.resolve(r):r}if(e)return Promise.reject(n);throw n}}},xn=new yd;function ue(t,e){return xn.parse(t,e)}ue.options=ue.setOptions=function(t){return xn.setOptions(t),ue.defaults=xn.defaults,hy(ue.defaults),ue};ue.getDefaults=dd;ue.defaults=Sn;function kk(...t){return xn.use(...t),ue.defaults=xn.defaults,hy(ue.defaults),ue}ue.use=kk;ue.walkTokens=function(t,e){return xn.walkTokens(t,e)};ue.parseInline=xn.parseInline;ue.Parser=dt;ue.parser=dt.parse;ue.Renderer=Ns;ue.TextRenderer=bd;ue.Lexer=ut;ue.lexer=ut.lex;ue.Tokenizer=Cs;ue.Hooks=co;ue.parse=ue;var Y2=ue.options,X2=ue.setOptions,K2=ue.walkTokens,J2=ue.parseInline;var Q2=dt.parse,eD=ut.lex;var Ik=new yd({gfm:!0,breaks:!0}),xy=["a","p","br","strong","em","b","i","u","s","del","code","pre","ul","ol","li","blockquote","h1","h2","h3","h4","h5","h6","hr","span","table","thead","tbody","tr","th","td"],Sy=["href","title","class","target","rel"],_y={ALLOWED_TAGS:xy,ALLOWED_ATTR:Sy,ALLOW_DATA_ATTR:!1,ALLOW_ARIA_ATTR:!1},Rk={..._y,ALLOWED_TAGS:[...xy,"img"],ALLOWED_ATTR:[...Sy,"src","alt","width","height"]},Ck=/^language-[A-Za-z0-9_+#.-]+$/,Nk=new Set(["CODE","PRE"]);function Ok(t){t.nodeName==="A"&&t.hasAttribute("href")?(t.setAttribute("target","_blank"),t.setAttribute("rel","noopener noreferrer")):(t.removeAttribute("target"),t.removeAttribute("rel"));let e=t.getAttribute("class");if(e===null)return;let n=Nk.has(t.nodeName)?e.split(/\s+/).filter(r=>Ck.test(r)):[];if(n.length===0){t.removeAttribute("class");return}t.setAttribute("class",n.join(" "))}var Os=null;function Pk(){return Os===null&&(Os=ty(),Os.addHook("afterSanitizeAttributes",Ok)),Os}function fo(t,e){let n=e?.allowImages===!0,r=Ik.parse(t,{async:!1});return Pk().sanitize(r,n?Rk:_y).trim()}var Ps=class{#e;#t=null;#n=0;#o="";#r=null;constructor(e){this.#e=e}get deltas(){return this.#n}countDelta(){this.#n+=1}queue(e){this.#o=e,this.#i(),this.#r===null&&(this.#r=requestAnimationFrame(()=>{this.#r=null,this.into(this.#o)}))}into(e){this.#r!==null&&(cancelAnimationFrame(this.#r),this.#r=null),this.#o=e;let n=this.#i();return n.innerHTML=fo(e,{allowImages:this.#e.allowImages()}),this.#e.follow(),n}end(){this.#r!==null&&this.into(this.#o),this.#t=null}#i(){return this.#t===null&&(this.#t=this.#e.openBubble(),this.#n=0),this.#t}};var Mk=4,zk=120;function Ty(t){if(typeof t!="object"||t===null)return null;let e=t.prompts;if(!Array.isArray(e))return null;let n=e.filter(r=>typeof r=="string").map(r=>r.trim()).filter(r=>r!==""&&r.length<=120).slice(0,4);return n.length===0?null:n}function mo(t,e,n){let r=Ty(t);if(r===null)return null;let o=document.createElement("div");o.className="suggestions",o.setAttribute("part","suggestions"),o.setAttribute("role","group"),o.setAttribute("aria-label",e.suggestions);for(let i of r){let a=document.createElement("button");a.type="button",a.className="suggestion-chip",a.setAttribute("part","suggestion-chip"),a.textContent=i,a.addEventListener("click",()=>n(i)),o.appendChild(a)}return o}function Ay(t,e,n){let r=t.getAttribute("data-starters");if(r===null)return null;let o;try{o=JSON.parse(r)}catch{return console.warn(`<ag-ui-chat>: data-starters is not valid JSON, so no starters are shown. It takes an array of strings, e.g. data-starters='["Summarise this page"]'.`),null}return mo({prompts:o},e,n)}function Ms(t,e){for(let n of Array.from(t.querySelectorAll("pre"))){let r=n.querySelector("code");r===null||n.querySelector(".code-copy")!==null||(n.classList.add("has-copy"),n.append(Lk(r,e)))}}function Lk(t,e){let n=t.textContent,r=document.createElement("button");return r.type="button",r.className="code-copy",r.setAttribute("part","code-copy"),r.textContent=e.copyCode,r.title=e.copyCode,r.setAttribute("aria-label",e.copyCode),r.addEventListener("click",()=>{Dk(n).then(o=>{$k(r,o?e.copied:e.copyFailed,e)})}),r}async function Dk(t){let e=navigator.clipboard;if(e===void 0)return!1;try{return await e.writeText(t),!0}catch{return!1}}function $k(t,e,n){t.textContent=e,t.dataset.state=e===n.copied?"copied":"failed",setTimeout(()=>{t.textContent=n.copyCode,delete t.dataset.state},1500)}function wd(t){let e=t.replace(/[._-]+/g," ").trim();return e===""?t:e.charAt(0).toUpperCase()+e.slice(1)}var zs=class{element;#e;#t;#n;#o;#r=!1;constructor(e=pe){this.#o=e,this.element=document.createElement("div"),this.element.className="thoughts",this.element.setAttribute("part","thoughts"),this.element.setAttribute("data-streaming",""),this.#n=document.createElement("button"),this.#n.type="button",this.#n.className="thoughts-toggle",this.#n.setAttribute("part","thoughts-toggle"),this.#n.setAttribute("aria-expanded","true"),this.#e=document.createElement("span"),this.#e.className="thoughts-label",this.#e.setAttribute("part","thoughts-label"),this.#e.textContent=e.thinking,this.#n.append(this.#e),this.#t=document.createElement("pre"),this.#t.className="thoughts-body",this.#t.setAttribute("part","thoughts-body"),this.#n.addEventListener("click",()=>{this.#i(!this.#r)}),this.element.append(this.#n,this.#t)}stream(e){this.#t.textContent=e}collapse(){this.#r||(this.element.removeAttribute("data-streaming"),this.#e.textContent=this.#o.thoughts,this.#i(!0))}#i(e){this.#r=e,this.#t.hidden=e,this.#n.setAttribute("aria-expanded",String(!e))}};function Ls(t,e){try{return t()}catch(n){return console.warn(`ag-ui-chat: render failed for ${e}`,n),null}}function ky(t,e){for(let n of Array.from(t.childNodes))n.nodeType===Node.TEXT_NODE?e.push({node:n,parent:t}):ky(n,e)}function Iy(t){let e=[];ky(t,e);let n=0;for(let{node:r,parent:o}of e){let i=document.createDocumentFragment();for(let a of r.data.split(/(\s+)/)){if(a==="")continue;if(/\s/.test(a)){i.appendChild(document.createTextNode(a));continue}let s=document.createElement("span");s.className="word",s.style.setProperty("--ag-ui-word-index",String(n)),s.textContent=a,i.appendChild(s),n+=1}o.replaceChild(i,r)}}function Ry({viewport:t,onMissedContent:e}){let n=!0,r=!1,o=()=>t.scrollHeight-t.scrollTop-t.clientHeight<=4,i=u=>{u!==r&&(r=u,e(r))},a=()=>{t.scrollTop=t.scrollHeight},s=()=>{n=o(),n&&i(!1)},l=()=>{if(n){a();return}i(!0)};t.addEventListener("scroll",s,{passive:!0});let c=new ResizeObserver(()=>{n&&a()});return c.observe(t),{follow:l,jump:()=>{n=!0,i(!1),a()},following:()=>n,dispose:()=>{t.removeEventListener("scroll",s),c.disconnect()}}}var Ds=class{#e;#t=new Map;#n=new Map;#o=new Set;#r;#i=null;#a=null;#l=null;constructor(e){this.#e=e}mountScroller(e,n){e.addEventListener("click",()=>{this.jump()},{signal:n}),this.#r=Ry({viewport:this.#e.messages,onMissedContent:r=>{e.dataset.missed=String(r)}})}disposeScroller(){this.#r.dispose()}follow(){this.#r.follow()}jump(){this.#r.jump()}isEmpty(){return!this.#e.emptyWrap.hidden}card(e){return this.#t.get(e)}cards(){return this.#t.values()}forgetCard(e){this.#t.delete(e)}setCardElement(e,n){this.#n.set(e,n)}markServerSettled(e){this.#o.add(e)}isServerSettled(e){return this.#o.has(e)}collapseThoughts(){this.#l?.collapse()}closeGroup(){this.#a!==null&&this.#a.childElementCount===0&&(this.#a.remove(),this.updateEmptyState()),this.#a=null,this.#l=null}releaseTurn(){this.#a=null,this.#l=null,this.hidePending(),this.#t.clear()}forgetCards(){this.#o.clear(),this.#n.clear()}empty(){this.#e.messages.replaceChildren(this.#e.emptyWrap),this.updateEmptyState()}append(e,n){let r=document.createElement("div");return r.className=`message message--${e}`,r.setAttribute("part",`message message-${e}`),e===Fe.ASSISTANT?(r.innerHTML=fo(n,{allowImages:this.#e.allowImages()}),Ms(r,this.#e.strings()),this.ensureGroup().appendChild(r)):(this.#a=null,r.textContent=n,this.#e.messages.appendChild(r)),this.updateEmptyState(),e===Fe.USER?this.jump():this.follow(),r}ensureGroup(){if(this.#a===null){let e=document.createElement("div");e.className="answer",e.setAttribute("part","answer"),this.#a=e,this.#e.messages.appendChild(e),this.updateEmptyState()}return this.#a}revealWords(e){this.#e.element.getAttribute("data-text-animation")==="word"&&Iy(e)}updateEmptyState(){this.#e.emptyWrap.hidden=this.#e.messages.childElementCount>1,this.#e.element.toggleAttribute("data-empty",!this.#e.emptyWrap.hidden)}appendStoppedNote(){let e=document.createElement("div");e.className="stopped-note",e.setAttribute("part","stopped"),e.setAttribute("role","status"),e.textContent=this.#e.strings().stopped,this.ensureGroup().appendChild(e),this.updateEmptyState(),this.follow()}showPending(){if(this.#i!==null)return;let e=document.createElement("div");e.className="pending",e.setAttribute("part","pending"),e.setAttribute("role","status"),e.setAttribute("aria-label",this.#e.strings().thinking);for(let n=0;n<3;n+=1){let r=document.createElement("span");r.className="pending-dot",e.appendChild(r)}this.#i=e,this.ensureGroup().appendChild(e),this.updateEmptyState(),this.follow()}hidePending(){this.#i?.remove(),this.#i=null}showThoughts(){if(this.#l===null){this.#l=new zs(this.#e.strings());let e=this.ensureGroup();e.insertBefore(this.#l.element,e.firstChild),this.updateEmptyState(),this.follow()}return this.#l}noticeIfSkillLoad(e){let n=Ka(e);return n===null?!1:(this.appendNotice("\u2728",le(this.#e.strings().usingSkill,{name:n}),"skill"),!0)}appendNotice(e,n,r,o){this.ensureGroup().appendChild(gs(e,n,r,o)),this.updateEmptyState(),this.follow()}renderToolOutput(e,n){let r=Ls(()=>e(n.args),`tool ${n.name}`);r!==null&&(this.#n.get(n.id)?.after(r),this.afterGrew())}afterGrew(){this.updateEmptyState(),this.follow()}cardFor(e){let n=this.#t.get(e.id);if(n!==void 0)return n;let r=this.#e.resolveTool(e.name)?.parameters[Re],o=typeof r=="string"?r:this.#e.toolSummaries()[e.name]??this.#e.serverSummary(e.name)??wd(e.name),i=new no(e.name,e.args,o,this.#e.strings(),{formatPayload:a=>this.#e.formatToolPayload(a)});return this.#t.set(e.id,i),this.ensureGroup().appendChild(i.element),this.updateEmptyState(),this.follow(),i}};var $s=class{#e;#t=new Map;#n=new Set;#o=new Map;constructor(e){this.#e=e}register(e){this.#t.set(e.type,e),this.#n.delete(e.type)}has(e){return this.#t.has(e)}unhandledTypes(){return[...this.#n]}clearBlocks(){this.#o.clear()}draw(e,n,r){let o=this.#t.get(n);if(o===void 0){this.#n.add(n);return}let i=Ls(()=>o.render(r),`activity ${n}`);if(i===null){this.#r(e,n,o.removedNotice,r);return}let a=this.#o.get(e);a===void 0?this.#e.ensureGroup().appendChild(i):a.replaceWith(i),this.#o.set(e,i),this.#e.afterTranscriptGrew()}#r(e,n,r,o){let i=this.#o.has(e);this.#o.get(e)?.remove(),this.#o.delete(e),console.warn(`ag-ui-chat: activity ${e} (${n}) was not drawable and has been removed. A chart's points must each be a finite JSON number; a numeric column serialised as a string (a Decimal, typically) is rejected rather than coerced.`,o),i&&r!==void 0&&this.#e.appendNotice("\u{1F4C9}",r,"chart-undrawable")}};var Us=class extends Error{constructor(e){super(e),this.name="ConnectionLostError"}},go=class{#e;#t;#n;#o;#r;#i;#a;#l=new Set;#u;#d;#c;#h;#s=!1;constructor(e){this.#e=e.agent,this.#t=e.handlers,this.#n=e.getTools??(()=>[]),this.#o=e.getContext??(()=>[]),this.#r=e.executeTool??null,this.#i=e.resolveInterrupts??null,this.#a=e.onPersist??(()=>{}),this.#u=e.connectionLostMessage??"Connection lost",this.#d=e.unfinishedMessage??"Not finished: the run ended or moved on before this tool call returned a result.",this.#c=e.declinedMessage??"User declined the action.";let n=e.maxToolRounds??Mn;this.#h=n>=1?Math.floor(n):Mn,this.#y();let r=e.onStateChanged;r!==void 0&&this.#e.subscribe({onStateChanged:({state:o})=>{r(o)}})}get state(){return this.#e.state}setState(e){this.#e.setState({...e})}get running(){return this.#e.isRunning}get messages(){return this.#e.messages}async send(e,n=[]){this.#s=!1;let r={id:Ee(),role:"user",content:e,...n.length>0?{metadata:{attachments:n}}:{}};this.#e.addMessage(r),this.#p(),await this.#f()}truncateToLastUser(){let e=[...this.#e.messages],n=-1;for(let[o,i]of e.entries())i.role==="user"&&(n=o);if(n===-1)return null;let r=e.slice(0,n+1);return this.#a(r),this.#e.setMessages(r),r}async resume(){this.#s=!1,await this.#f()}addToolResult(e,n){this.#e.addMessage({id:Ee(),role:"tool",content:n,toolCallId:e}),this.#p()}cancel(){this.#s=!0,this.#e.abortRun()}async#f(){try{await this.#_(),this.#s&&this.#m()}catch(e){this.#s||Uk(e)?this.#m():this.#t.onError(e instanceof Error?e.message:String(e))}finally{this.#t.onSettled()}}#m(){this.#p(),this.#t.onCancelled()}#y(){let e=this.#e.messages,n=e.map(Hk);n.some((r,o)=>r!==e[o])&&this.#e.setMessages(n)}#g(e){let n=this.#e.messages,r=qa(n,o=>({id:Ee(),role:"tool",content:this.#d,toolCallId:o,metadata:{outcome:Ge.INTERRUPTED}}),e);r!==n&&(this.#e.setMessages([...r]),this.#p())}#b(e,n){for(let r of e){let o=r.toolCallId;o!==void 0&&n[r.id]?.status==="cancelled"&&this.#e.addMessage({id:Ee(),role:"tool",content:this.#c,toolCallId:o,metadata:{outcome:Ge.DENIED}})}this.#p()}#p(){this.#a(this.#e.messages)}get annotatedMessages(){return this.messages}async#_(){let e,n=new Set;for(let r=0;r<this.#h;r+=1){if(this.#s)return;let o=[],i={terminal:!1,errored:!1,interrupts:[]},a={tools:this.#n(),context:this.#o()};if(e!==void 0&&(a.resume=e),this.#g(n),this.#s||(await this.#e.runAgent(a,this.#E(o,i)),e=void 0,n=new Set,this.#p(),this.#s))return;if(!i.terminal)throw new Us(this.#u);if(i.errored)return;if(i.interrupts.length>0){if(this.#i===null)return;let l=await this.#i(i.interrupts);if(this.#s){this.#b(i.interrupts,l);return}e=tb(i.interrupts,l),n=new Set(i.interrupts.flatMap(({toolCallId:c})=>c??[]));continue}if(this.#r===null||o.length===0)return;let s=!1;for(let l of o){if(this.#s)return;let c=await this.#r(l);if(c!==null){if(c.halt===!0)return;this.#e.addMessage({id:Ee(),role:"tool",content:c.content,toolCallId:l.id,...c.outcome===void 0?{}:{metadata:{outcome:c.outcome}}}),this.#p(),s=!0}}if(!s)return}}#E(e,n){let r=this.#t,o=this.#l,i=()=>this.#s,a=new Set,s;return{onRunInitialized(){r.onRunStart()},onRunStartedEvent({event:l}){s=l.runId},onTextMessageStartEvent({event:l}){o.has(l.messageId)&&console.warn(`<ag-ui-chat>: the server reused message id "${l.messageId}", which was already closed. Its content will be appended to that earlier message rather than starting a new one, and the merged result is what gets persisted. Issue a fresh id per message.`)},onTextMessageContentEvent({textMessageBuffer:l}){r.onTextDelta(l)},onTextMessageEndEvent({event:l,textMessageBuffer:c}){o.add(l.messageId),r.onTextEnd(c,{messageId:l.messageId,...s===void 0?{}:{runId:s}})},onToolCallEndEvent({event:l,toolCallName:c,toolCallArgs:u}){let h={id:l.toolCallId,name:c,args:u};e.push(h),r.onToolCall(h)},onToolCallResultEvent({event:l}){let c=l.metadata?.outcome;r.onToolResult(l.toolCallId,$n(l.content),c)},onActivitySnapshotEvent({event:l,messages:c}){if(c.some(h=>h.id===l.messageId&&h.role==="activity")){r.onActivityChanged(l.messageId,l.activityType,l.content);return}r.onActivity(l.activityType,l.content,l.messageId)},onActivityDeltaEvent({event:l}){a.add(l.messageId)},onCustomEvent({event:l}){r.onCustomEvent(l.name,l.value)},onSubagentStartedEvent({event:l}){r.onSubAgentStarted(l.subagentRunId,l.name,l.parentToolCallId??null)},onSubagentFinishedEvent({event:l}){r.onSubAgentFinished(l.subagentRunId)},onSubagentErrorEvent({event:l}){r.onSubAgentError(l.subagentRunId,l.message)},onMessagesSnapshotEvent({event:l}){r.onMessagesSnapshot(l.messages)},onMessagesChanged({messages:l}){if(a.size!==0){for(let c of a){let u=l.find(h=>h.id===c);u!==void 0&&u.role==="activity"&&r.onActivityChanged(c,u.activityType,u.content)}a.clear()}},onReasoningStartEvent(){r.onReasoningStart()},onReasoningMessageContentEvent({reasoningMessageBuffer:l}){r.onReasoningDelta(l)},onReasoningMessageEndEvent({reasoningMessageBuffer:l}){r.onReasoningDelta(l)},onReasoningEndEvent(){r.onReasoningEnd()},onRunFinishedEvent(l){n.terminal=!0,l.outcome==="interrupt"&&(n.interrupts=l.interrupts)},onRunErrorEvent({event:l}){n.terminal=!0,n.errored=!0,!i()&&r.onError(l.message)},onRunFinalized(){n.terminal=!0,r.onRunEnd()}}}};function Uk(t){return t instanceof Error?t.name==="AbortError"||t instanceof TypeError&&/abort/i.test(t.message):!1}function Hk(t){let{outcome:e,attachments:n,...r}=t;if(e===void 0&&n===void 0)return t;let o=r.metadata;return{...r,metadata:{...e===void 0?{}:{outcome:e},...n===void 0?{}:{attachments:n},...typeof o=="object"?o:{}}}}var Cy="ag-ui-chat",ur="thread",Ed="threads",vo="messages:",Fs="checkpoint:",bo="minted:",Fk=60,Gk=100,Zk="New conversation",Ny=!1;function pt(t,e){try{sessionStorage.setItem(t,e)}catch{if(Ny)return;Ny=!0,console.warn("<ag-ui-chat>: the browser refused a sessionStorage write \u2014 the quota is full, or storage is disabled for this context. The conversation continues, but it will not survive a page reload. Deleting a long conversation from the history drawer frees the quota.")}}function Hs(t){return t===""?Cy:`${Cy}@${t}`}var Qe=class t{#e;constructor(e=""){this.#e=Hs(e),e!==""&&t.adopt("",e)}static adopt(e,n){let r=`${Hs(e)}:`,o=`${Hs(n)}:`;for(let[i,a]of Oy(r)){let s=sessionStorage.getItem(i),l=o+a;s!==null&&sessionStorage.getItem(l)===null&&pt(l,s),sessionStorage.removeItem(i)}}static purge(e){for(let[n]of Oy(`${Hs(e)}:`))sessionStorage.removeItem(n)}threadId(){return sessionStorage.getItem(this.#r(ur))??this.newThread()}newThread(){let e=Ee();return pt(this.#r(ur),e),pt(this.#r(bo+e),"1"),e}isUnsent(e){return sessionStorage.getItem(this.#r(bo+e))!==null&&sessionStorage.getItem(this.#r(vo+e))===null}loadMessages(e){return Promise.resolve(this.#i(this.#r(vo+e)))}saveMessages(e,n){pt(this.#r(vo+e),JSON.stringify(n)),sessionStorage.removeItem(this.#r(bo+e)),this.#t(e,n)}loadCheckpoint(e){return this.#i(this.#r(Fs+e))}saveCheckpoint(e,n){let r=this.#r(Fs+e);if(n===null){sessionStorage.removeItem(r);return}pt(r,JSON.stringify(n))}clear(e){sessionStorage.removeItem(this.#r(vo+e)),sessionStorage.removeItem(this.#r(Fs+e)),sessionStorage.removeItem(this.#r(bo+e)),this.#o(this.#n().filter(n=>n.threadId!==e)),sessionStorage.getItem(this.#r(ur))===e&&sessionStorage.removeItem(this.#r(ur))}listThreads(){let e=this.#n().sort((n,r)=>r.updatedAt-n.updatedAt).map(({threadId:n,title:r,updatedAt:o,preview:i})=>({threadId:n,title:r,updatedAt:o,preview:i}));return Promise.resolve(e)}setActiveThread(e){pt(this.#r(ur),e)}renameThread(e,n){let r=this.#n(),o=r.find(i=>i.threadId===e);o!==void 0&&(o.title=n,o.titleCustom=!0,this.#o(r))}#t(e,n){let r=this.#n(),o=r.find(s=>s.threadId===e),i=Vk(n),a=Date.now();o===void 0?r.push({threadId:e,title:Py(n),titleCustom:!1,preview:i,updatedAt:a}):(o.preview=i,o.updatedAt=a,o.titleCustom||(o.title=Py(n))),this.#o(r)}#n(){return this.#i(this.#r(Ed))??[]}#o(e){let n=this.#r(Ed);if(e.length===0){sessionStorage.removeItem(n);return}pt(n,JSON.stringify(e))}#r(e){return`${this.#e}:${e}`}#i(e){let n=sessionStorage.getItem(e);if(n===null)return null;try{return JSON.parse(n)}catch{return null}}};function Oy(t){let e=[];for(let n=0;n<sessionStorage.length;n+=1){let r=sessionStorage.key(n);if(r===null||!r.startsWith(t))continue;let o=r.slice(t.length);Bk(o)&&e.push([r,o])}return e}function Bk(t){return t===ur||t===Ed||t.startsWith(vo)||t.startsWith(Fs)||t.startsWith(bo)}function Py(t){for(let e of t)if(e.role==="user"){let n=My(e.content);if(n!=="")return zy(n,Fk)}return Zk}function Vk(t){for(let e of[...t].reverse()){let n=My(e.content);if(n!=="")return zy(n,Gk)}return""}function My(t){return typeof t=="string"?t.replace(/\s+/g," ").trim():""}function zy(t,e){return t.length<=e?t:`${t.slice(0,e-1).trimEnd()}\u2026`}function xd(t){let e=t.headers??{},n=new Set;return new ob({url:t.endpoint,headers:e,initialState:{...t.initialState??{}},fetch:(r,o)=>{let i=t.getHeaders?.(),a=[...new Set([...Object.keys(e),...Object.keys(i??{})])].sort();if(Wa(r,a,t.trustedOrigins??[],n),i===void 0)return fetch(r,rt(o,t.credentials));let s=new Headers(o?.headers);for(let[l,c]of Object.entries(i))s.set(l,c);return fetch(r,rt({...o,headers:s},t.credentials))},...t.threadId!==void 0?{threadId:t.threadId}:{},...t.initialMessages!==void 0?{initialMessages:[...t.initialMessages]}:{}})}function Ly(t){let e=t.getAttribute("data-max-tool-rounds");return e===null?Mn:Number.parseInt(e,10)}var yo=class{#e;#t;#n;#o;#r;#i=new Set;#a=new Map;constructor(e,n=()=>({}),r=new Qe,o=()=>{},i=!0){this.#e=e.endsWith("/")?e:`${e}/`,this.#t=n,this.#n=r,this.#o=o,this.#r=i}threadId(){return this.#n.threadId()}setActiveThread(e){this.#n.setActiveThread(e)}newThread(){return ja(this.#n)}isUnsent(e){return this.#n.isUnsent?.(e)===!0}saveMessages(e,n){this.#n.saveMessages(e,this.#r?n:[])}loadCheckpoint(e){return this.#n.loadCheckpoint(e)}saveCheckpoint(e,n){this.#n.saveCheckpoint(e,n)}renameThread(e,n){this.#n.renameThread(e,n),this.#a.set(e,n),this.#h(e,"PATCH",{title:n})}clear(e){this.#n.clear(e),this.#i.add(e),this.#h(e,"DELETE")}async listThreads(){let e=await this.#l();return e===null?this.#n.listThreads():e.filter(n=>!this.#i.has(n.thread_id)).map(n=>this.#d(n))}async loadMessages(e){if(this.#n.isUnsent?.(e)===!0)return null;let n=await this.#c(`${this.#e}${encodeURIComponent(e)}/`);if(n===null||!n.ok)return this.#n.loadMessages(e);let r=await this.#u(n);return r===null?this.#n.loadMessages(e):r.messages??null}async#l(){let e=await this.#c(this.#e);if(e===null||!e.ok)return null;let n=await this.#u(e);return n===null?null:n.threads??[]}async#u(e){try{return await e.json()}catch{return null}}#d(e){return{threadId:e.thread_id,title:this.#a.get(e.thread_id)??e.title,updatedAt:e.updated_at===null?Number.NaN:Date.parse(e.updated_at),preview:e.preview}}async#c(e){try{return await fetch(e,rt({headers:this.#t()},this.#o()))}catch{return null}}async#h(e,n,r){let o=this.#t();try{await fetch(`${this.#e}${encodeURIComponent(e)}/`,rt({method:n,headers:r===void 0?o:{...o,"content-type":"application/json"},body:r===void 0?null:JSON.stringify(r)},this.#o()))}catch{}}};function Dy(){return{tools:[],serverSettled:new Set,invalidated:new Set,announcedOutcome:!1}}function jk(t,e){let n={};for(let[r,o]of Object.entries(t))n[r]=(...i)=>{e()&&o(...i)};return n}var Gs=class{#e;#t=Dy();constructor(e){this.#e=e}detach(){this.#t=Dy()}forClient(){let e=this.#t,n=()=>e===this.#t,{onSettled:r,...o}=this.#n(e);return{...jk(o,n),onSettled:()=>{n()&&r(),this.#o(e)}}}#n(e){return{onRunStart:()=>{this.#e.running()||(e.announcedOutcome=!1,this.#e.announcer.announce(this.#e.strings().announceResponding)),this.#e.setRunning(!0),this.#e.transcript.ensureGroup(),this.#e.transcript.showPending()},onReasoningStart:()=>{this.#e.transcript.hidePending(),this.#e.transcript.showThoughts()},onReasoningDelta:n=>{this.#e.transcript.showThoughts().stream(n)},onReasoningEnd:()=>{},onTextDelta:n=>{this.#e.transcript.hidePending(),this.#e.transcript.collapseThoughts(),this.#e.stream.queue(n),this.#e.stream.countDelta()},onTextEnd:(n,r)=>{if(n===""){this.#e.stream.end();return}let o=this.#e.stream.into(n);this.#e.stream.deltas<=1&&this.#e.transcript.revealWords(o),Ms(o,this.#e.strings()),this.#e.actions.attach(o,r),this.#e.stream.end(),this.#e.noteUnread()},onToolCall:n=>{this.#e.transcript.hidePending(),!this.#e.transcript.noticeIfSkillLoad(n)&&(e.tools.push({id:n.id,name:n.name}),this.#e.transcript.cardFor(n))},onActivity:(n,r,o)=>{this.#e.activities.draw(o,n,r)},onCustomEvent:(n,r)=>{if(n===vl){this.#r(e,r);return}if(n===rp){this.#e.subagents.report(r);return}this.#e.element.dispatchEvent(new CustomEvent(hl,{detail:{name:n,value:r},bubbles:!0,composed:!0}))},onSubAgentStarted:(n,r,o)=>{this.#e.subagents.start(n,r,o)},onSubAgentFinished:n=>{this.#e.subagents.finish(n)},onSubAgentError:(n,r)=>{this.#e.subagents.fail(n,r)},onMessagesSnapshot:()=>{this.#e.transcript.appendNotice("\u{1F504}",this.#e.strings().historyReplaced,"history-replaced")},onToolResult:(n,r,o)=>{let i=this.#e.transcript.card(n);i!==void 0&&(i.settle(Kr(o),r),this.#e.transcript.markServerSettled(n),e.serverSettled.add(n),this.#e.transcript.showPending())},onActivityChanged:(n,r,o)=>{this.#e.activities.draw(n,r,o)},onRunEnd:()=>{this.#e.transcript.hidePending(),this.#e.stream.end()},onError:n=>{e.announcedOutcome=!0,this.#e.announcer.announce(this.#e.strings().announceFailed),this.#e.transcript.hidePending();let r=this.#e.appendMessage(Fe.ASSISTANT,`\u26A0\uFE0F ${n}`);r.classList.add("message--failed"),this.#e.actions.attach(r,{rateable:!1}),this.#e.transcript.revealWords(r),this.#e.stream.end()},onCancelled:()=>{e.announcedOutcome=!0,this.#e.announcer.announce(this.#e.strings().announceStopped),this.#e.transcript.hidePending(),this.#e.transcript.appendStoppedNote(),this.#e.stream.end()},onSettled:()=>{e.announcedOutcome||this.#e.announcer.announce(this.#e.strings().announceAnswerReady),this.#e.transcript.hidePending(),this.#e.setRunning(!1),this.#e.stream.end();for(let n of this.#e.transcript.cards())n.settled||n.settle(Q.INTERRUPTED,this.#e.strings().callNotFinished);this.#e.transcript.closeGroup()}}}#o(e){let n=e.tools.map(({id:o,name:i})=>({name:i,side:e.serverSettled.has(o)?"server":"client"})),r=[...e.invalidated];e.tools.length=0,e.serverSettled.clear(),e.invalidated.clear(),this.#e.element.dispatchEvent(new CustomEvent(pl,{detail:{tools:n,invalidated:r},bubbles:!0,composed:!0}))}#r(e,n){let r=n??{},o=Array.isArray(r.keys)?r.keys.filter(i=>typeof i=="string"):[];if(o.length!==0){for(let i of o)e.invalidated.add(i);this.#e.element.dispatchEvent(new CustomEvent(fl,{detail:{keys:o,reason:typeof r.reason=="string"?r.reason:null},bubbles:!0,composed:!0}))}}};var Sd=new Set,Zs=class{#e;#t="";#n=null;#o="";#r="";#i=null;constructor(e){this.#e=e}claim(){this.#t=this.#a()}release(){this.#n!==null&&(Sd.delete(this.#n),this.#n=null)}conversationNamespace(e){return e===""?this.#t:`${this.#t}#${e}`}scopeStore(e,n){if(!(e instanceof Qe))return e;let r=this.conversationNamespace(n);return this.#i=r===""?e:new Qe(r),this.#i}rescopeStore(e,n){return e!==this.#i?null:(this.#i=new Qe(n),this.#i)}key(e){return this.#t===""?e:`${e}:${this.#t}`}readScopedItem(e){let n=sessionStorage.getItem(this.key(e));return n!==null||this.#t===""?n:sessionStorage.getItem(e)}readPreference(e){try{let n=localStorage.getItem(this.key(e));if(n!==null)return n}catch{}return this.readScopedItem(e)}writePreference(e,n){let r=this.key(e);try{localStorage.setItem(r,n)}catch{}pt(r,n)}clearPreference(e){let n=this.key(e);try{localStorage.removeItem(n)}catch{}try{sessionStorage.removeItem(n)}catch{}}#a(){let e=this.#e.id(),n=e!==""?e:this.#e.endpoint();return n===""?"":this.#r===n?this.#o:Sd.has(n)?(this.#r=n,this.#o=`${n}~${Ee()}`,console.warn(`<ag-ui-chat>: another element on this page already stores its conversation under "${n}", so this one has been given a throwaway namespace of its own \u2014 the two would otherwise share a thread pointer, a history drawer and every message. Give each <ag-ui-chat> its own id to keep them apart and let this one restore its conversation across reloads.`),this.#o):(Sd.add(n),this.#n=n,n)}};var Wk=["data-attachments-url","data-attachment-accept","data-attachment-max-bytes","data-transcribe-url","data-threads-url","data-threads-cache","data-tools-url","data-skills-url","data-skills","data-prompt-chips","data-slash-commands","data-theme-toggle","data-strings","data-icon-url"],Td=["omit","same-origin","include"];function _d(t){return Td.includes(t)}var $y="ag-ui-chat:collapsed",Uy="ag-ui-chat:theme",wo=class extends HTMLElement{agentFactory=xd;headers={};getHeaders=null;trustedOrigins=[];allowImages=!1;formatRelativeTime=null;autoConfirm=!1;askUser=!1;askUserRenderer=null;approvalRenderer=null;approveWithEdits=!1;confirmPredicate=null;getTools=()=>this.#R.defaultTools();getContext=()=>[...Pl(this.getPageMap,this.autoInjectPageMap)];routeMap=[];navigate=null;getPageMap=null;autoInjectPageMap=!0;conversationStore=new Qe;uploadHandler=null;transcribeHandler=null;navigationResult=()=>({navigated:!0,url:window.location.href});skillContext=()=>({});toolSummaries={};formatToolPayload=null;strings={};resolvePageTarget=e=>document.querySelector(e);#e=new Set;#t=pe;#n=new bs({card:e=>this.#v.card(e),strings:()=>this.#t,follow:()=>this.#v.follow()});#o=new $s({ensureGroup:()=>this.#v.ensureGroup(),afterTranscriptGrew:()=>this.#v.afterGrew(),appendNotice:(e,n,r)=>this.#v.appendNotice(e,n,r)});#r=new _s({element:this,strings:()=>this.#t,retry:()=>{this.retryLastTurn()},threadId:()=>this.#p.threadId});#i;#a=new ms;#l=document.createElement("button");#u;#d=document.createElement("div");#c;#h;#s;#f;#m;#y;#g;#b;#p;#_;#E;#A;#z;#k;#x;#I;#O=document.createElement("span");#G=0;#P;#v;#L;#oe;#he=document.createElement("span");#C;#S;#K=[];#Z=[];#M=document.createElement("div");#D=null;#fe="";#B=()=>{this.#S.publishVisualViewport(),!this.#S.dragging()&&this.#S.restoreLauncherPosition()};#J;#j;#U=!1;#Q=new AbortController;#me=!1;#ie=null;#W={};#ge={};#ae=null;#$=null;#H={};#N=!1;#w=null;#ve=null;#se=new ds;#R=new Xa({element:this,routeMap:()=>this.routeMap,navigate:()=>this.navigate,getPageMap:()=>this.getPageMap,resolvePageTarget:e=>this.resolvePageTarget(e),getTools:()=>this.getTools(),askUser:()=>this.askUser,askUserRenderer:()=>this.askUserRenderer,decision:this.#se,ensureGroup:()=>this.#v.ensureGroup(),strings:()=>this.#t,hidePending:()=>this.#v.hidePending(),updateEmptyState:()=>this.#v.updateEmptyState(),follow:()=>this.#v.follow(),fetchInit:e=>this.#Ee(e)});#be=new Ps({openBubble:()=>this.appendMessage(Fe.ASSISTANT,""),allowImages:()=>this.allowImages,follow:()=>this.#v.follow()});#T=new Zs({id:()=>this.id,endpoint:()=>this.endpoint});#V;constructor(){super(),this.#i=this.attachShadow({mode:"open"}),this.#c=document.createElement("div"),this.#h=document.createElement("div"),this.#s=document.createElement("textarea"),this.#f=document.createElement("button"),this.#m=document.createElement("span"),this.#_=document.createElement("div"),this.#E=document.createElement("button"),this.#A=document.createElement("input"),this.#z=document.createElement("div"),this.#J=document.createElement("span"),this.#k=document.createElement("button"),this.#x=document.createElement("button"),this.#I=document.createElement("span"),this.#P=document.createElement("div"),this.#v=new Ds({element:this,messages:this.#h,emptyWrap:this.#P,strings:()=>this.#t,allowImages:()=>this.allowImages,resolveTool:e=>this.#R.resolve(e),toolSummaries:()=>this.toolSummaries,serverSummary:e=>this.#R.summary(e),formatToolPayload:e=>this.formatToolPayload?.(e)??null}),this.#L=new Qa({element:this,transcript:this.#v,tools:this.#R,decision:this.#se,strings:()=>this.#t,announce:e=>this.#a.announce(e),autoConfirm:()=>this.autoConfirm,confirmPredicate:()=>this.confirmPredicate,getPageMap:()=>this.getPageMap,navigate:()=>this.navigate,approveWithEdits:()=>this.approveWithEdits,approvalRenderer:()=>this.approvalRenderer,getContext:()=>this.getContext(),conversationStore:()=>this.conversationStore,threadId:()=>this.#p.threadId,tenure:()=>this.#W,conversation:()=>this.#ge}),this.#oe=new Gs({element:this,transcript:this.#v,stream:this.#be,actions:this.#r,activities:this.#o,subagents:this.#n,announcer:this.#a,strings:()=>this.#t,running:()=>this.#N,setRunning:e=>this.#Y(e),appendMessage:(e,n)=>this.appendMessage(e,n),noteUnread:()=>this.#He()}),this.#S=new fs({element:this,launcher:this.#x,root:this.#i,connected:()=>this.#U,collapsed:()=>this.collapsed,collapsible:()=>Jr(this.getAttribute("placement")),strings:()=>this.#t,readPreference:e=>this.#T.readPreference(e),writePreference:(e,n)=>this.#T.writePreference(e,n),clearPreference:e=>this.#T.clearPreference(e),announceSurfaceChange:(e,n)=>this.#Me(e,n)}),this.#u=new ls({element:this,root:this.#i,messages:this.#h,messagesWrap:this.#d,input:this.#s,strings:()=>this.#t,autoGrow:()=>Ht(this.#s),quote:e=>this.quote(e)}),this.#C=new os({element:this,chat:this.#c,slot:this.#z,fileInput:this.#A,button:this.#E,strings:()=>this.#t,uploadHandler:()=>this.uploadHandler,headersFor:e=>this.#q(e),credentialsOption:()=>this.#ce()}),this.#j=new as({element:this,slot:this.#J,input:this.#s,strings:()=>this.#t,transcribeHandler:()=>this.transcribeHandler,headersFor:e=>this.#q(e),credentialsOption:()=>this.#ce(),onInput:()=>this.#ue()}),this.registerActivityRenderer({type:yl,render:e=>{let n=qk(e);return n===null?null:gs("\u{1F5DC}",le(this.#t.historyCompacted,{count:n}),"compaction")}}),this.registerActivityRenderer({type:gl,render:e=>mo(e,this.#t,n=>{this.sendMessage(n)})}),this.#y=new ss(e=>this.#V.apply(e)),this.#V=new Uo({element:this,menu:this.#y,input:this.#s,hint:this.#_,strings:()=>this.#t,context:()=>this.skillContext(),flag:e=>this.#Le(e),readJsonAttribute:e=>this.#xe(e),fetchInit:e=>this.#Ee(e),send:e=>{this.sendMessage(e)},submit:()=>{this.#de()},autoGrow:()=>Ht(this.#s)}),this.#g=new us({onSelect:e=>{this.#p.switchThread(e)},onNew:()=>{this.newChat(),this.#p.refreshDrawer()},onRename:(e,n)=>{this.#p.renameThread(e,n)},onDelete:e=>{this.#p.deleteThread(e)}}),this.#b=new Yr((e,n)=>{this.#p.continueRun(e,n).catch(r=>{console.warn("<ag-ui-chat>: continuing a run failed",r)})}),this.#p=new cs({element:this,drawer:this.#g,checkpoints:this.#b,transcript:this.#v,actions:this.#r,activities:this.#o,tools:this.#R,input:this.#s,hint:this.#_,strings:()=>this.#t,conversationStore:()=>this.conversationStore,formatRelativeTime:()=>this.formatRelativeTime,navigationResult:()=>this.navigationResult,headersFor:e=>this.#q(e),requestCredentials:()=>this.#ee(),appendMessage:(e,n)=>this.appendMessage(e,n),announceTurn:e=>this.#Oe(e,[]),recordTurn:e=>this.#Ne(e),autoGrow:()=>Ht(this.#s),continuationEnded:()=>this.#X(),client:()=>this.#$,ensureClient:()=>this.#pe(),buildClient:e=>this.#Pe(e),releaseClient:()=>{this.#$=null},running:()=>this.#N||this.#w!==null,holdRun:e=>{let n={};return this.#w=n,this.#ve=e===null?null:{hold:n,restored:e},{release:()=>{this.#w===n&&(this.#w=null,this.#X())}}},cancelRun:()=>this.#F(),resetState:()=>this.#te(),setRunning:e=>this.#Y(e)})}static get observedAttributes(){return["title-text","placement","credentials","user-key","user-name",...Wk]}attributeChangedCallback(e,n,r){if(e==="credentials"){r!==null&&!_d(r)&&console.error(`<ag-ui-chat>: credentials="${r}" is not a fetch credentials mode (${Td.join(" / ")}) \u2014 it is being ignored, so requests use the browser default and cross-origin cookies will not be sent.`);return}if(e==="placement"){this.#S.releaseOwnedAxes(),this.#S.releaseLauncherPosition(),!Jr(this.getAttribute("placement"))&&this.collapsed&&this.setCollapsed(!1),requestAnimationFrame(()=>this.#S.syncResizeAnchor());return}if(e==="title-text"){this.#m.textContent=r??this.#t.title,this.#O.textContent=this.#m.textContent;return}if(e==="user-name"){this.#we();return}if(e==="user-key"){this.#U&&(n??"")!==(r??"")&&this.#Te(n??"",r??"");return}n===r||!this.#U||console.warn(`<ag-ui-chat>: "${e}" was changed after the element connected, and is read only while connecting \u2014 this assignment has no effect. Set it before the element enters the DOM (in the markup, or on the element before appending it); frameworks that patch attributes after mount should bind it at creation. To apply a new value now, remove and re-insert the element.`)}registerTool(e){this.#R.register(e)}get sharedState(){return this.#ye()?.state??this.#H}set sharedState(e){this.#H={...e},this.#ye()?.setState(this.#H)}#ye(){return this.#p.continuation??this.#$}registerPageState(e){this.#R.registerPageState(e)}registerStateHook(e){this.registerPageState(e)}get endpoint(){return this.getAttribute("endpoint")??""}set endpoint(e){this.setAttribute("endpoint",e)}get userKey(){return this.getAttribute("user-key")??""}set userKey(e){this.setAttribute("user-key",e)}get userName(){return this.getAttribute("user-name")??""}set userName(e){this.setAttribute("user-name",e)}#we(){let e=this.userName.trim();this.#he.textContent=e===""?this.#t.greetingNoName:le(this.#t.greeting,{name:e})}get credentials(){let e=this.getAttribute("credentials");return e!==null&&_d(e)?e:null}set credentials(e){if(e===null){this.removeAttribute("credentials");return}if(!_d(e))throw new TypeError(`<ag-ui-chat>: credentials must be one of ${Td.map(n=>`"${n}"`).join(", ")} (got ${JSON.stringify(e)}).`);this.setAttribute("credentials",e)}#le(){return{...this.headers,...this.getHeaders?.()}}#q(e){let n=this.#le();return Wa(e,Object.keys(n),this.trustedOrigins,this.#e),n}#ee(){return this.credentials??void 0}#ce(){let e=this.#ee();return e===void 0?{}:{credentials:e}}#Ee(e){return rt({headers:this.#q(e)},this.#ee())}get toolDisplay(){let e=this.getAttribute("data-tool-display");return e===zn.INLINE||e===zn.MINIMAL||e===zn.COMPACT?e:zn.FULL}set toolDisplay(e){this.setAttribute("data-tool-display",e)}connectedCallback(){if(this.#Q=new AbortController,this.#me&&this.#Ie(),this.#me=!0,this.#T.claim(),this.#S.restoreSize(),requestAnimationFrame(()=>{this.#S.restoreLauncherPosition(),this.#S.syncResizeAnchor()}),this.#t=Ou({...this.#De(),...this.strings}),this.getAttribute("data-theme-toggle")!==null){let r=this.#T.readPreference(Uy);r!==null&&this.setAttribute("theme",r)}this.#Ue(),this.#g.setStrings(this.#t),this.#b.setStrings(this.#t),Jr(this.getAttribute("placement"))&&this.#$e()&&this.setAttribute("collapsed",""),this.#Ce(),this.#V.init();let e=this.#ie,n=e!==null&&e!==this.userKey;n&&this.#Te(e,this.userKey),this.#ie=this.userKey,this.conversationStore=this.#T.scopeStore(this.#_e(),this.userKey),window.addEventListener("resize",this.#B),window.visualViewport?.addEventListener("resize",this.#B),window.visualViewport?.addEventListener("scroll",this.#B),this.#S.publishVisualViewport(),this.#Se(),this.#C.wire(this.#Q.signal),this.#j.wire(),this.#p.adoptActiveThread(),queueMicrotask(()=>this.#ze()),this.#p.rehydrate(),n&&this.#p.refreshDrawer(),this.#U=!0}#ze(){this.#U&&(this.#R.fetchCatalog(),this.#V.fetch())}async reload(){this.#F(),this.#te(),this.#Y(!1),await Promise.all([this.#R.fetchCatalog(),this.#V.fetch(),this.#p.rehydrate()])}disconnectedCallback(){this.#U=!1,this.#Q.abort(),window.removeEventListener("resize",this.#B),window.visualViewport?.removeEventListener("resize",this.#B),window.visualViewport?.removeEventListener("scroll",this.#B),this.#T.release(),this.#F(),this.#u.detachPageOffer(),this.#C.tray?.dispose(),this.#j.dispose(),this.#v.disposeScroller(),this.#a.dispose()}#Le(e){let n=this.getAttribute(e);return n!==null&&n!=="false"}#xe(e){let n=this.getAttribute(e);if(n===null)return null;try{return JSON.parse(n)}catch{return console.warn(`<ag-ui-chat>: ${e} is not valid JSON, so it was ignored entirely and the built-in default is being used. Check the quoting -- JSON inside an HTML attribute needs single quotes around the attribute value, or its own double quotes escaped.`),null}}#De(){let e=this.#xe("data-strings");return typeof e=="object"&&e!==null?e:{}}quote(e){this.#u.insert(e)}offerQuoteInPage(e=document.body){return this.#u.offerInPage(e)}#Se(){this.#ae=null;let e=this.getAttribute("data-threads-url");if(e!==null){let n=this.conversationStore,r=new yo(e,()=>this.#q(e),n,()=>this.#ee(),this.getAttribute("data-threads-cache")!=="false");this.#ae={remote:r,inner:n},this.conversationStore=r}}#_e(){let e=this.#ae;return e!==null&&this.conversationStore===e.remote?e.inner:this.conversationStore}setSkills(e){this.#V.setClientSkills(e)}get collapsed(){return this.hasAttribute("collapsed")}set collapsed(e){this.setCollapsed(e)}setCollapsed(e,n={}){e&&!Jr(this.getAttribute("placement"))||(n.announce===!0&&e&&!this.collapsed&&this.#Me(this.#t.chatMinimised,null),e||this.#S.restoreLauncherPosition(),e?this.setAttribute("collapsed",""):this.removeAttribute("collapsed"),pt(this.#T.key($y),e?"1":"0"),this.#ne(0),this.dispatchEvent(new CustomEvent(ll,{detail:{collapsed:e},bubbles:!0,composed:!0})))}get unread(){return this.#G}#$e(){let e=this.#T.readScopedItem($y);return e!==null?e==="1":ps(this.getAttribute("placement"))&&!this.hasAttribute("data-start-open")}describeSurface(){return this.#S.describeSurface()}moveTo(e,n={}){return this.#S.moveTo(e,n)}toggleCollapsed(){this.setCollapsed(!this.collapsed)}toggleTheme(){let e=this.getAttribute("theme")==="dark"?"light":"dark";this.setAttribute("theme",e),this.#T.writePreference(Uy,e),this.#ke()}#Te(e,n){this.#ie=n;let r=this.#U,o=this.#T.conversationNamespace(e),i=this.#T.conversationNamespace(n);if(e===""){Qe.adopt(o,i),r&&this.#Ae(i);return}this.#W={},Qe.purge(o),r&&this.#Ae(i),this.#L.forgetWaivers(),this.#F(),this.#te(),this.#H={},this.#s.value="",this.#ue(),this.#Y(!1),this.#ne(0),r&&(this.#j.dispose(),this.#j.wire(),this.#p.adoptActiveThread(),this.#p.rehydrate(),this.#p.refreshDrawer())}#Ae(e){let n=this.#T.rescopeStore(this.#_e(),e);n!==null&&(this.conversationStore=n,this.#Se())}#ke(){let e=this.getAttribute("theme")==="dark";this.#k.replaceChildren(ws("theme","theme-icon",e?cp:lp,null))}openThreads(){this.#p.openThreads()}openCheckpoints(){this.#p.openCheckpoints()}closeThreads(){this.#g.close()}closeCheckpoints(){this.#b.close()}toggleCheckpoints(){if(this.#b.open_){this.#b.close();return}this.openCheckpoints()}newChat(){this.#F(),this.#p.reapUnsent(),this.#te(),this.#p.startThread(),this.#Y(!1),this.#ne(0),this.collapsed||this.#s.focus({preventScroll:!0})}#te(){this.#Ie(),this.#K.length=0,this.#D=null}#Ie(){this.#$=null,this.#oe.detach(),this.#ge={},this.#Re(),this.#p.forgetRestored()}#Re(){this.#be.end(),this.#v.releaseTurn(),this.#n.clear(),this.#v.forgetCards(),this.#o.clearBlocks(),this.#r.forget(),this.#C.tray?.clear(),this.removeAttribute("data-composer-settling"),this.removeAttribute("data-restoring"),this.#v.empty()}async retryLastTurn(){if(this.#N||this.#w!==null||this.#p.continuation!==null)return!1;let e={};this.#w=e;try{let n=this.#pe(),r=n.truncateToLastUser();if(r===null||this.#w!==e)return!1;this.#Re();for(let o of r)if(this.#p.replay(o),this.#w!==e)return!1;return await n.resume(),!0}finally{this.#w===e&&(this.#w=null,this.#X())}}appendMessage(e,n){return this.#v.append(e,n)}#Ue(){let{signal:e}=this.#Q;this.#c.className="chat",this.#c.setAttribute("part","panel");let n=document.createElement("div");n.className="header",n.setAttribute("part","header");let r=this.#m;r.className="header-title",r.setAttribute("part","title"),r.textContent=this.getAttribute("title-text")??this.#t.title,(this.querySelector('[slot="icon"]')!==null||this.getAttribute("data-icon-url")!==null)&&n.append(ws("icon","icon",null,this.getAttribute("data-icon-url")));let o=document.createElement("slot");o.name="header-actions";let i=document.createElement("div");i.className="header-controls",i.setAttribute("part","header-controls");let a=ro("history",this.#t.chatHistory,"\u2630");a.addEventListener("click",()=>this.openThreads());let s=ro("checkpoints",this.#t.checkpoints,"\u21BA");s.addEventListener("click",()=>this.toggleCheckpoints());let l=ro("new",this.#t.newChat,"\u271A");l.addEventListener("click",()=>this.newChat());let c=ro("collapse",this.#t.collapse,"\u2014");c.addEventListener("click",()=>this.toggleCollapsed()),this.#p.runs()!==null?i.append(a,s,l):i.append(a,l),this.getAttribute("data-theme-toggle")!==null&&(this.#k.type="button",this.#k.className="header-btn header-btn--theme",this.#k.setAttribute("part","header-button theme-toggle"),this.#k.title=this.#t.toggleTheme,this.#k.setAttribute("aria-label",this.#t.toggleTheme),this.#k.addEventListener("click",()=>this.toggleTheme(),{signal:e}),this.#ke(),i.append(this.#k)),i.append(c),n.append(r,o,i),this.#S.enablePanelDrag(n),this.#h.className="messages",this.#h.setAttribute("part","messages"),this.#h.setAttribute("role","log"),this.#h.setAttribute("aria-live","off"),this.#h.setAttribute("aria-label",this.#t.conversation),this.#l.className="jump-latest",this.#l.type="button",this.#l.setAttribute("part","jump-latest"),this.#l.textContent=this.#t.jumpToLatest,this.#u.mount(e),this.#v.mountScroller(this.#l,e),this.#a.mount(),this.#P.className="empty",this.#P.setAttribute("part","empty");let u=document.createElement("div");u.className="greeting",u.setAttribute("part","greeting");let h=document.createElement("slot");h.name="greeting",h.append(this.#he),u.append(h),this.#we();let m=document.createElement("slot");m.name="empty";let f=Ay(this,this.#t,_=>{this.sendMessage(_)});f!==null&&m.append(f),this.#P.replaceChildren(u,m),this.#M.className="queued",this.#M.setAttribute("part","queued"),this.#M.setAttribute("role","group"),this.#M.setAttribute("aria-label",this.#t.queued),this.#M.hidden=!0,this.#h.append(this.#P),this.#v.updateEmptyState();let p=document.createElement("div");p.className="input-row",p.setAttribute("part","composer");let b=document.createElement("div");b.className="composer",b.setAttribute("part","composer-surface");let g=document.createElement("div");g.className="composer-tools",g.setAttribute("part","composer-tools"),this.#s.className="input",this.#s.setAttribute("part","input"),this.#s.setAttribute("aria-label",this.#t.message),this.#s.rows=1,this.#s.placeholder=this.#t.inputPlaceholder,this.#s.addEventListener("keydown",_=>this.#Fe(_),{signal:e}),this.#s.addEventListener("input",()=>this.#ue(),{signal:e}),this.#f.className="send",this.#f.type="button",this.#f.setAttribute("part","send"),this.#f.replaceChildren(ys("icon-send","send-send",op),ys("icon-stop","send-stop",ip)),this.#f.title=this.#t.send,this.#f.setAttribute("aria-label",this.#t.send),this.#f.dataset.state="idle",this.#f.addEventListener("click",()=>{if(this.#N){this.#F();return}this.#de()},{signal:e}),this.#_.className="skill-hint",this.#_.setAttribute("part","skill-hint"),this.#_.hidden=!0,this.#E.className="attach-btn",this.#E.type="button",this.#E.setAttribute("part","attach-button"),this.#E.replaceChildren(ys("icon-attach","attach-glyph",ap)),this.#E.title=this.#t.attachFiles,this.#E.setAttribute("aria-label",this.#t.attachFiles),this.#E.hidden=!0,this.#E.addEventListener("click",()=>this.#A.click(),{signal:e}),this.#A.className="attach-input",this.#A.type="file",this.#A.multiple=!0,this.#A.hidden=!0,this.#A.addEventListener("change",()=>this.#C.onFilesPicked(),{signal:e}),this.#z.className="attachment-slot",this.#J.className="voice-slot";let E=document.createElement("slot");E.name="footer",g.append(this.#E,this.#J,this.#f),b.append(this.#s,g),p.append(b,this.#A),this.#d.className="messages-wrap",this.#d.replaceChildren(this.#h,this.#l,this.#u.button),this.#c.replaceChildren(n,this.#d,this.#y.palette,this.#y.chips,this.#_,this.#M,this.#z,p,E,this.#g.element,this.#b.element),this.#c.addEventListener("pointerdown",_=>{if(!this.#b.open_)return;let C=_.composedPath();C.includes(this.#b.element)||C.includes(s)||this.#b.close()},{signal:e}),this.#x.className="launcher",this.#x.type="button",this.#x.setAttribute("part","launcher"),this.#x.setAttribute("aria-label",this.#t.expand),this.#I.className="launcher-badge",this.#I.setAttribute("part","launcher-badge"),this.#I.setAttribute("aria-hidden","true"),this.#I.hidden=!0,this.#O.className="rail-label",this.#O.setAttribute("part","rail-label"),this.#O.setAttribute("aria-hidden","true"),this.#O.textContent=this.getAttribute("title-text")??this.#t.title,this.#x.replaceChildren(ws("launcher","launcher-icon",up,Cb(this)),this.#O,this.#I),this.#x.addEventListener("click",()=>this.setCollapsed(!1),{signal:e}),this.#S.enableLauncherDrag(e),this.#S.mountResizeGrips(this.#c),Ib(this.#i);let y=this.#S.probe;y.className="viewport-probe",y.setAttribute("aria-hidden","true"),this.#i.replaceChildren(y,this.#a.region,this.#c,this.#x)}#Ce(){this.#x.setAttribute("aria-expanded",String(!this.collapsed));let e=this.#G;this.#I.textContent=e>9?"9+":String(e),this.#I.hidden=e===0||!Rb(this);let n=this.#I.hidden?this.#t.expand:le(this.#t.expandUnread,{count:e});this.#x.setAttribute("aria-label",n),this.#x.title=n}#ne(e){this.#G=e,this.#Ce(),this.dispatchEvent(new CustomEvent(cl,{detail:{unread:e},bubbles:!0,composed:!0}))}#He(){this.collapsed&&this.#ne(this.#G+1)}#ue(){this.#y.onInput(this.#s.value),this.#_.hidden=!0,Ht(this.#s),this.#D=null}#Fe(e){if(this.#y.onKeydown(e)){e.preventDefault();return}if(e.key==="Escape"&&this.#N){e.preventDefault(),this.#F();return}if(e.key==="Enter"&&!e.shiftKey){e.preventDefault(),this.#de();return}this.#Ge(e)}#Ge(e){let n=e.key==="ArrowUp";if(!n&&e.key!=="ArrowDown"||this.#y.isOpen())return;let r=this.#K;if(r.length===0||(this.#s.value!==this.#fe&&(this.#D=null),this.#D===null&&(!n||this.#s.value!=="")))return;let o=this.#D===null?0:this.#D+(n?1:-1);o>=r.length||(e.preventDefault(),this.#D=o<0?null:o,this.#s.value=o<0?"":r[o],this.#fe=this.#s.value,this.#s.setSelectionRange(this.#s.value.length,this.#s.value.length),Ht(this.#s))}#F(){this.#Z.length=0,this.#re(),this.#se.abort(),this.#$?.cancel(),this.#w=null,this.#p.stopContinuation()}#Y(e){let n=this.#N&&!e;this.#N=e,e&&(this.#w=null);let r=e?this.#t.stop:this.#t.send;this.#f.title=r,this.#f.setAttribute("aria-label",r),this.#f.dataset.state=e?"running":"idle",n&&this.#X()}#X(){if(this.#N||this.#p.continuation!==null)return;let e=this.#Z.shift();this.#re(),e!==void 0&&this.sendMessage(e)}#re(){this.#M.replaceChildren(),this.#M.hidden=this.#Z.length===0;for(let[e,n]of this.#Z.entries()){let r=document.createElement("button");r.type="button",r.className="queued-chip",r.setAttribute("part","queued-chip"),r.textContent=n,r.title=le(this.#t.removeQueued,{text:n}),r.setAttribute("aria-label",r.title),r.addEventListener("click",()=>{this.#Z.splice(e,1),this.#re()}),this.#M.appendChild(r)}}#Ne(e){e!==""&&this.#K[0]!==e&&this.#K.unshift(e),this.#D=null}async#de(){let e=this.#s.value.trim(),n=this.#C.tray?.readyRefs()??[];if(!(e===""&&n.length===0)){if(this.#Ne(e),this.#N||this.#w!==null||this.#p.continuation!==null){e!==""&&(this.#Z.push(e),this.#re(),this.#s.value="",Ht(this.#s));return}this.#s.value="",Ht(this.#s),this.#C.tray?.hasPending()===!0&&this.#v.appendNotice("\u{1F4CE}",le(this.#t.attachmentsStillUploading,{n:this.#C.tray.pendingCount()}),"attachment-pending"),this.#C.tray?.clearReady(),await this.sendMessage(e,n)}}async sendMessage(e,n=[]){if(e===""&&n.length===0)return!1;let r=this.#ve;if(r!==null&&this.#w===r.hold){let i={};return this.#w=i,await r.restored,this.#w!==i?!1:(this.#w=null,this.sendMessage(e,n))}if(this.#N||this.#w!==null||this.#p.continuation!==null)return!1;let o={};this.#w=o;try{if(this.#v.isEmpty()&&this.setAttribute("data-composer-settling",""),this.#Oe(e,n),this.#w!==o)return!1;let i=this.endpoint!=="";return await this.#Ze(e,n),i}finally{this.#w===o&&(this.#w=null,this.#X())}}#Oe(e,n){let r=this.appendMessage(Fe.USER,e);n.length>0&&r.appendChild(ts(n)),this.dispatchEvent(new CustomEvent(sl,{detail:{content:e,attachments:n},bubbles:!0,composed:!0}))}attachFile(e){return this.#C.attach(e)}async#Ze(e,n){if(this.endpoint===""){console.error('<ag-ui-chat>: no endpoint is set, so this message was not sent and no request was made. Point the element at your AG-UI mount with the endpoint attribute (endpoint="/agent/"), or assign chat.endpoint before sending.'),this.#v.appendNotice("\u26A0",this.#t.notConnected,"not-connected");return}await this.#pe().send(e,n)}#pe(){return this.#$===null&&(this.#$=this.#Pe({endpoint:this.endpoint,initialMessages:this.#p.restored,follows:[]})),this.#$}#Pe(e){let n=this.#p.threadId,r=this.#W,o=this.agentFactory({endpoint:e.endpoint,headers:this.#le(),getHeaders:()=>this.#le(),trustedOrigins:this.trustedOrigins,...this.#ce(),threadId:n,initialMessages:e.initialMessages,initialState:this.#H});return new go({agent:o,handlers:this.#oe.forClient(),getTools:()=>this.#R.advertise(),getContext:()=>this.#L.buildContext(),executeTool:i=>this.#L.execute(i),resolveInterrupts:i=>this.#L.resolveInterrupts(i),onPersist:i=>{if(r!==this.#W)return;let a=[...e.follows,...i];this.conversationStore.saveMessages(n,a),e.onSaved?.(a)},onStateChanged:i=>{r===this.#W&&this.#Be(i)},connectionLostMessage:this.#t.connectionLost,unfinishedMessage:this.#t.callNotFinished,declinedMessage:this.#t.declinedAction,maxToolRounds:Ly(this)})}#Be(e){this.#H={...e},this.dispatchEvent(new CustomEvent(ul,{detail:{state:this.#H},bubbles:!0,composed:!0}))}#Me(e,n){this.#v.appendNotice("\u2922",e,"surface",n===null?void 0:{label:this.#t.undo,onActivate:n})}enableCharts(e=["tool","activity"]){let n=!this.#o.has(Do)&&!this.#R.has(es);e.includes("activity")&&this.registerActivityRenderer({type:Do,render:r=>{let o=ir(r);return o===null?null:jr(o)},removedNotice:this.#t.chartUndrawable}),e.includes("tool")&&this.registerTool(db()),n&&this.isConnected&&this.reload()}registerActivityRenderer(e){this.#o.register(e)}get unhandledActivityTypes(){return this.#o.unhandledTypes()}};function qk(t){let e=t?.removed;return typeof e=="number"?e:null}function Yk(){customElements.get(Mo)===void 0&&customElements.define(Mo,wo)}async function Xk(t,e,n={}){await _t(t),await Il(t,{...n,flashMs:n.flashMs??0}),await Al(t,e,n)}async function Kk(t,e={}){await _t(t),await kl(t,e)}async function Jk(t,e={}){await _t(t),await Rl(t,e)}async function Qk(t,e,n={}){await _t(t),await Cl(t,e,n)}async function eI(t,e,n={}){await _t(t),await Nl(t,e,n)}function tI(t,e){t instanceof HTMLInputElement&&t.type==="checkbox"?br(t,!!e):Xt(t,String(e)),t.dispatchEvent(new Event("input",{bubbles:!0})),t.dispatchEvent(new Event("change",{bubbles:!0}))}var nI="0.44.0";export{dl as ATTACHMENT_EVENT,wo as AgUiChat,go as AgUiClient,Do as CHART_ACTIVITY_TYPE,es as CHART_TOOL_NAME,Ho as CHAT_CORNERS,yl as COMPACTION_ACTIVITY_TYPE,hl as CUSTOM_AGENT_EVENT,Yr as CheckpointMenu,vr as ClientToolRegistry,Us as ConnectionLostError,pe as DEFAULT_UI_STRINGS,Mo as ELEMENT_TAG,ml as FEEDBACK_EVENT,vl as INVALIDATE_CUSTOM_NAME,fl as INVALIDATE_EVENT,wl as LOAD_CAPABILITY_TOOL,aT as MAX_QUOTE_CHARS,Mk as MAX_SUGGESTIONS,zk as MAX_SUGGESTION_CHARS,Mn as MAX_TOOL_ROUNDS,qt as MESSAGE_ACTIONS,Fe as MESSAGE_ROLE,wr as PAGE_ACTIONS,pl as RUN_FINISHED_EVENT,yo as RemoteConversationStore,Xr as RunIndex,ul as STATE_EVENT,sl as SUBMIT_EVENT,gl as SUGGESTIONS_ACTIVITY_TYPE,Qe as SessionStorageStore,ll as TOGGLE_EVENT,Q as TOOL_CALL_STATUS,zn as TOOL_DISPLAY,Ge as TOOL_OUTCOME,no as ToolCallCard,cl as UNREAD_EVENT,nI as VERSION,zo as X_CONFIRM_KEY,mr as X_DESTRUCTIVE_KEY,gr as X_NAVIGATES_KEY,Re as X_SUMMARY_KEY,Zu as asQuote,Qu as attachMessageActions,Vu as attachQuoteOffer,ir as chartSpecFrom,Kk as clickElement,xl as createChatSurfaceTools,xd as createHttpAgent,Ol as createPageActionTools,Pl as createPageMapContext,Bo as createPageStateTools,Ml as createRouteTools,$w as createStateHookTools,Yk as defineAgUiChat,Xk as fillField,Pw as flash,Il as focusWithFlash,kl as highlightThenClick,xp as isChatCorner,$u as isDestructive,Ja as isNavigates,Ou as mergeUiStrings,xs as messageActionBar,Wu as messageAttachments,Mu as parseToolCatalog,Go as prefersReducedMotion,Jk as pressButton,Rl as pressThenClick,wd as prettifyToolName,Wr as quotableSelection,qr as relativeTime,jr as renderChart,fo as renderMarkdown,mo as renderSuggestionChips,zu as requestApproval,Du as requestConfirmation,Pu as requestQuestion,_t as scrollIntoCenterView,Qk as selectControl,Cl as selectOption,tI as setControlValue,br as setNativeChecked,Xt as setNativeValue,Sl as showHighlightOverlay,Ty as suggestionPrompts,eI as toggleCheckbox,Nl as toggleControl,Kr as toolStatusFromOutcome,Gu as transcribeAudio,Al as typeInto,Hu as uploadAttachment};
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
