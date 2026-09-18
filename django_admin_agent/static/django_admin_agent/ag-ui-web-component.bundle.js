var Ff=Object.defineProperty;var ba=(t,e)=>{for(var n in e)Ff(t,n,{get:e[n],enumerable:!0})};var xo="ag-ui-chat",ya="ag-ui-submit",wa="ag-ui-toggle",xa="ag-ui-unread",Ea="ag-ui-state",Ta="ag-ui-attachments",_a="ag-ui-run-finished",Sa="ag-ui-custom",Aa="ag-ui-invalidate",ka="ag-ui-feedback",Ra="suggestions",Ia="ag_ui.invalidate",sc="ag_ui.subagent",On={STARTED:"started",TOOL_CALL:"tool_call",TOOL_RESULT:"tool_result",FINISHED:"finished",FAILED:"failed"},Le={USER:"user",ASSISTANT:"assistant"},fr="x-destructive",Eo="x-confirm",xe="x-summary",mr="x-navigates",To="read_page",Mn=10,jt={COPY:"copy",RETRY:"retry",FEEDBACK:"feedback"},te={PENDING:"pending",DEFERRED:"deferred",DONE:"done",ERROR:"error",DECLINED:"declined",INTERRUPTED:"interrupted"},Pe={SUCCESS:"success",FAILED:"failed",DENIED:"denied",INTERRUPTED:"interrupted"},$e={UPLOADING:"uploading",READY:"ready",ERROR:"error"},Ca=10*1024*1024,Ln={INLINE:"inline",MINIMAL:"minimal",COMPACT:"compact",FULL:"full"},Na="compaction",Oa="load_capability",ac='<svg class="glyph" viewBox="0 0 24 24" aria-hidden="true"><path d="M12 19.5V5m-6.5 6.5L12 5l6.5 6.5"/></svg>',lc='<svg class="glyph glyph--solid" viewBox="0 0 24 24" aria-hidden="true"><rect x="7" y="7" width="10" height="10" rx="2.5"/></svg>',dc='<svg class="glyph" viewBox="0 0 24 24" aria-hidden="true"><path d="M17 8.5V15a5 5 0 0 1-10 0V7a3 3 0 0 1 6 0v7.5a1 1 0 0 1-2 0V8.5"/></svg>',cc='<svg class="glyph" viewBox="0 0 24 24" aria-hidden="true"><path d="M12 4a3 3 0 0 1 3 3v5a3 3 0 0 1-6 0V7a3 3 0 0 1 3-3z"/><path d="M5 11v1a7 7 0 0 0 14 0v-1"/><path d="M12 19v3"/></svg>',uc='<svg class="glyph" viewBox="0 0 24 24" aria-hidden="true"><path d="M20 14.5A8.5 8.5 0 0 1 9.5 4a8.5 8.5 0 1 0 10.5 10.5z"/></svg>',hc='<svg class="glyph" viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"/></svg>',pc='<svg class="glyph" viewBox="0 0 24 24" aria-hidden="true"><path d="M4 5.5A2.5 2.5 0 0 1 6.5 3h11A2.5 2.5 0 0 1 20 5.5v8a2.5 2.5 0 0 1-2.5 2.5H9l-5 4z"/></svg>',fc='<svg class="glyph" viewBox="0 0 24 24" aria-hidden="true"><rect x="9" y="9" width="11" height="11" rx="2"/><path d="M5 15V6a2 2 0 0 1 2-2h8"/></svg>',mc='<svg class="glyph" viewBox="0 0 24 24" aria-hidden="true"><path d="M20 12a8 8 0 1 1-2.5-5.8"/><path d="M20 4v4h-4"/></svg>',gc='<svg class="glyph" viewBox="0 0 24 24" aria-hidden="true"><path d="M7 10v10H4V10z"/><path d="M7 10l4.5-7a2 2 0 0 1 3.4 2L13.5 9H19a2 2 0 0 1 2 2.3l-1.1 6.4A2 2 0 0 1 17.9 20H7"/></svg>',vc='<svg class="glyph" viewBox="0 0 24 24" aria-hidden="true"><path d="M17 14V4h3v10z"/><path d="M17 14l-4.5 7a2 2 0 0 1-3.4-2l1.4-4H5a2 2 0 0 1-2-2.3l1.1-6.4A2 2 0 0 1 6.1 4H17"/></svg>',bc='<svg class="glyph" viewBox="0 0 24 24" aria-hidden="true"><path d="M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8z"/><path d="M14 3v5h5"/></svg>',yc='<svg class="glyph" viewBox="0 0 24 24" aria-hidden="true"><rect x="3.5" y="4.5" width="17" height="15" rx="2.5"/><circle cx="9" cy="10" r="1.5"/><path d="M4.5 17.5 9 13.5l3.5 3 3-2.5 4.5 4"/></svg>',wc='<svg class="glyph" viewBox="0 0 24 24" aria-hidden="true"><path d="M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8z"/><path d="M14 3v5h5"/><rect class="glyph--solid" x="7.5" y="13.5" width="9" height="4.5" rx="1"/></svg>',xc='<svg class="glyph" viewBox="0 0 24 24" aria-hidden="true"><path d="M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8z"/><path d="M14 3v5h5"/><path d="M8.5 13.5h7M8.5 17h4.5"/></svg>',_o="chart",Vt=24,Ec=150,Tc=2147483001,So=5e3,tt=8;var $f=/\{([a-zA-Z_][a-zA-Z0-9_]*)\}/g;function oe(t,e){return t.replace($f,(n,r)=>Object.hasOwn(e,r)?String(e[r]):n)}var Bf=/\{([a-zA-Z_][a-zA-Z0-9_]*)\}/g;function _c(t,e){let n=[];return{text:t.replace(Bf,(o,i)=>{let s=e[i];return s==null||s===""?(n.includes(i)||n.push(i),o):String(s)}),missing:n}}function jf(t){if(typeof t!="object"||t===null)return!1;let e=t;return typeof e.name=="string"&&typeof e.title=="string"&&(e.prompt===void 0||typeof e.prompt=="string")}function Ma(t){return Array.isArray(t)?t.filter(jf):[]}var Ao=class{#e;#t=[];#n=[];#o=[];constructor(e){this.#e=e}setClientSkills(e){this.#o=e,this.#i()}init(){this.#e.menu.enableChips(this.#e.flag("data-prompt-chips")),this.#e.menu.enableSlash(this.#e.flag("data-slash-commands")),this.#n=this.#r(),this.#i()}async fetch(){let e=this.#e.element.getAttribute("data-skills-url");if(e!==null)try{let n=await fetch(e,this.#e.fetchInit(e));this.#t=Ma(await n.json()),this.#i()}catch{}}apply(e){let{input:n,hint:r}=this.#e;if(e.prompt===void 0){r.hidden=!0,this.#e.send(`/${e.name}`);return}let{text:o,missing:i}=_c(e.prompt,this.#e.context());if(i.length>0){r.textContent=oe(this.#e.strings().skillNeeds,{title:e.title,fields:i.join(", ")}),r.hidden=!1,n.value=o,this.#e.autoGrow(),n.focus(),this.#s(o);return}if(r.hidden=!0,n.value=o,this.#e.autoGrow(),e.sendImmediately===!1){n.focus();return}this.#e.submit()}#r(){return Ma(this.#e.readJsonAttribute("data-skills"))}#i(){let e=new Map;for(let n of[...this.#t,...this.#n,...this.#o])e.set(n.name,n);this.#e.menu.setSkills([...e.values()])}#s(e){let n=e.indexOf("{");this.#e.input.setSelectionRange(n,e.indexOf("}",n)+1)}};var ko=["top-left","top-right","bottom-left","bottom-right"];function Sc(t){return ko.includes(t)}function La(t){return[{name:"read_chat_surface",description:"Describe the chat panel you are speaking from: its placement, whether it is collapsed, whether it can be moved, and the box it occupies. Read this before moving or minimising yourself, since a full-screen panel has nowhere to move to. Read-only.",parameters:{type:"object",properties:{},required:[],[xe]:"Read the chat's own position"},handler:()=>t.describeSurface()},{name:"move_chat",description:"Move your own panel to a corner, to uncover something the user needs to see. `corner` is top-left, top-right, bottom-left or bottom-right. Answers `moved: false` with a reason when the placement owns its position or the panel fills the screen; check `read_chat_surface` first, and prefer minimise_chat when there is nowhere to move to.",parameters:{type:"object",properties:{corner:{type:"string",enum:[...ko]}},required:["corner"],[xe]:"Move the chat out of the way"},handler:e=>{let n=String(e.corner??""),r=t.describeSurface();return Sc(n)?r.movable?{moved:t.moveTo(n,{announce:!0}),corner:n}:{moved:!1,reason:r.fullBleed?"the panel fills the screen, so there is nowhere to move it to":r.draggable===!1?"this page has turned off moving the panel":`the "${r.placement??""}" placement owns the panel's position`,suggestion:r.collapsible?"minimise_chat":null}:{moved:!1,reason:`"${n}" is not a corner; use one of ${ko.join(", ")}`}}},{name:"minimise_chat",description:"Collapse your own panel to its launcher, so the user can see the whole page. The launcher stays visible and reopens it. Answers `minimised: false` when the placement has no collapsed state, which is the case for a full-page chat.",parameters:{type:"object",properties:{},required:[],[xe]:"Minimise the chat"},handler:()=>t.describeSurface().collapsible?(t.setCollapsed(!0,{announce:!0}),{minimised:!0}):{minimised:!1,reason:"this placement has no collapsed state, so there is no launcher to return to"}},{name:"restore_chat",description:"Open your own panel again after minimising it.",parameters:{type:"object",properties:{},required:[],[xe]:"Restore the chat"},handler:()=>(t.setCollapsed(!1),{restored:!0})}]}var gr=class{#e=new Map;register(e){this.#e.set(e.name,e)}has(e){return this.#e.has(e)}get(e){let n=this.#e.get(e);if(n===void 0)throw new Error(`tool "${e}" is not registered`);return n}tools(){return[...this.#e.values()].map(e=>({name:e.name,description:e.description,parameters:e.parameters}))}};var Vf="#4f46e5";function Pn(t,e,n){let r=window.getComputedStyle(t).getPropertyValue(e).trim();return r===""?n:r}var qf=4;function Pa(t,e={}){let n=document.createElement("div");n.setAttribute("data-ag-ui-highlight",""),n.setAttribute("aria-hidden","true"),n.style.cssText=["position: fixed","inset: 0","pointer-events: none",`z-index: ${Pn(t,"--ag-ui-highlight-z-index",String(Tc))}`].join(";");let r=document.createElement("div"),o=document.createElement("div");n.className="ag-ui-highlight",r.className="ag-ui-highlight-scrim",o.className="ag-ui-highlight-ring",e.scrim===!0&&n.append(r),n.append(o);let i=e.ringWidth??Number.parseFloat(Pn(t,"--ag-ui-highlight-ring-width","3")),s=e.flowMs??Number.parseFloat(Pn(t,"--ag-ui-highlight-flow-ms","2400")),a=()=>{let u=t.getBoundingClientRect(),m=e.padding??qf,w=e.radius??Number.parseFloat(getComputedStyle(t).borderRadius),p=u.left-m,h=u.top-m,v=u.width+m*2,x=u.height+m*2;e.scrim===!0&&(r.style.cssText=["position: absolute","inset: 0",`background: ${Pn(t,"--ag-ui-highlight-scrim","rgba(15, 15, 25, 0.45)")}`,`clip-path: path(evenodd, '${Yf(p,h,v,x,w+m)}')`].join(";")),o.style.cssText=["position: absolute",`left: ${p}px`,`top: ${h}px`,`width: ${v}px`,`height: ${x}px`,`border-radius: ${w+m}px`,`border: ${i}px solid transparent`,"box-sizing: border-box",Xf(t,e)].join(";")};a();let l=null;e.gradient===!0&&!window.matchMedia("(prefers-reduced-motion: reduce)").matches&&(l=o.animate([{backgroundPosition:"100% 0"},{backgroundPosition:"-100% 0"}],{duration:s,iterations:Number.POSITIVE_INFINITY,easing:"linear"}));let d={capture:!0,passive:!0};return window.addEventListener("scroll",a,d),window.addEventListener("resize",a,d),document.body.appendChild(n),()=>{window.removeEventListener("scroll",a,d),window.removeEventListener("resize",a,d),l?.cancel(),n.remove()}}function Wf(t){return t===void 0?null:CSS.supports("color",t)?t:null}function Xf(t,e){let n=Wf(e.color)??Pn(t,"--ag-ui-accent",Vf);if(e.gradient!==!0)return`border-color: ${n}`;let r=Pn(t,"--ag-ui-highlight-gradient",`linear-gradient(115deg, transparent 20%, ${n} 50%, transparent 80%)`),o="linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0)";return[`background-image: ${r}`,"background-origin: border-box","background-size: 300% 100%",`-webkit-mask: ${o}`,`mask: ${o}`,"-webkit-mask-composite: xor","mask-composite: exclude","background-position: 50% 0"].join(";")}function Yf(t,e,n,r,o){let i=Math.max(0,Math.min(o,n/2,r/2)),s=t+n,a=e+r,l=`M 0 0 H ${window.innerWidth} V ${window.innerHeight} H 0 Z`,d=[`M ${t+i} ${e}`,`H ${s-i}`,`A ${i} ${i} 0 0 1 ${s} ${e+i}`,`V ${a-i}`,`A ${i} ${i} 0 0 1 ${s-i} ${a}`,`H ${t+i}`,`A ${i} ${i} 0 0 1 ${t} ${a-i}`,`V ${e+i}`,`A ${i} ${i} 0 0 1 ${t+i} ${e}`,"Z"].join(" ");return`${l} ${d}`}function Ro(t,e){return Object.getOwnPropertyDescriptor(t,e).set}var Kf=Ro(HTMLInputElement.prototype,"value"),Zf=Ro(HTMLTextAreaElement.prototype,"value"),Qf=Ro(HTMLSelectElement.prototype,"value"),Jf=Ro(HTMLInputElement.prototype,"checked");function qt(t,e){t instanceof HTMLTextAreaElement?Zf.call(t,e):t instanceof HTMLSelectElement?Qf.call(t,e):Kf.call(t,e)}function vr(t,e){Jf.call(t,e)}var Da="#4f46e5",em="rgba(79, 70, 229, 0.4)",tm="--ag-ui-accent";function Dn(t){return new Promise(e=>{setTimeout(e,t)})}function Io(){return window.matchMedia("(prefers-reduced-motion: reduce)").matches}function Ua(t){return t<=0||Io()?Promise.resolve():Dn(t)}function Co(t,e){let n=window.getComputedStyle(t).getPropertyValue(tm).trim();return n===""?e:n}function Ac(t){return`0 0 0 3px ${Co(t,em)}`}async function Ha(t,e,n={}){let r=n.charDelayMs??35;qt(t,""),t.dispatchEvent(new Event("input",{bubbles:!0}));for(let o of e)qt(t,t.value+o),t.dispatchEvent(new Event("input",{bubbles:!0})),r>0&&await Dn(r);t.dispatchEvent(new Event("change",{bubbles:!0}))}async function Ga(t,e={}){let n=e.highlightMs??280,r=t.style.outline,o=t.style.outlineOffset;t.style.outline=`2px solid ${Co(t,Da)}`,t.style.outlineOffset="2px",await Dn(n),t.style.outline=r,t.style.outlineOffset=o,t.click()}var nm=600,rm=100;function wt(t,e={}){let n=Io();return t.scrollIntoView({block:"center",inline:"nearest",behavior:n?"auto":"smooth"}),n?Promise.resolve():new Promise(r=>{let o,i=()=>{clearTimeout(o),document.removeEventListener("scroll",s,!0),document.removeEventListener("scrollend",i,!0),r()},s=()=>{document.removeEventListener("scroll",s,!0),clearTimeout(o),o=setTimeout(i,e.settleMs??nm)};o=setTimeout(i,rm),document.addEventListener("scroll",s,!0),document.addEventListener("scrollend",i,!0)})}var om=1200,im=1/3;async function kc(t,e,n){(e.focus??n)&&t.focus({preventScroll:!0});let r=e.flashMs??om;if(r<=0)return;if(e.scrim===!0||e.gradient===!0){let d=Pa(t,{scrim:e.scrim===!0,gradient:e.gradient===!0,...e.color===void 0?{}:{color:e.color},...e.ringPadding===void 0?{}:{padding:e.ringPadding}});await Dn(r),d();return}let o=t.style.outline,i=t.style.outlineOffset,s=t.style.transition,a=e.color??Co(t,Da);t.style.outline=`3px solid ${a}`,t.style.outlineOffset="2px";let l=Io()?0:Math.round(r*im);await Dn(r-l),l>0&&(t.style.transition=`outline-color ${l}ms ease-out`,t.style.outline="3px solid transparent",await Dn(l)),t.style.outline=o,t.style.outlineOffset=i,t.style.transition=s}function sm(t,e={}){return kc(t,e,!1)}function za(t,e={}){return kc(t,e,!0)}async function Fa(t,e={}){let n=e.pressMs??140,r=t.style.transform,o=t.style.transition,i=t.style.boxShadow;t.style.transition="transform 80ms ease",t.style.transform="scale(0.96)",t.style.boxShadow=Ac(t),await Ua(n),t.style.transform=r,t.style.transition=o,t.style.boxShadow=i,t.click()}function am(t,e){for(let n of Array.from(t.options))if(n.value===e||n.text===e)return n;return null}async function $a(t,e,n={}){let r=am(t,e);if(r===null)throw new Error(`no <option> matching "${e}"`);let o=n.highlightMs??220,i=t.style.outline,s=t.style.outlineOffset;t.style.outline=`2px solid ${Co(t,Da)}`,t.style.outlineOffset="2px",await Ua(o),qt(t,r.value),t.dispatchEvent(new Event("input",{bubbles:!0})),t.dispatchEvent(new Event("change",{bubbles:!0})),t.style.outline=i,t.style.outlineOffset=s}async function Ba(t,e,n={}){let r=n.flashMs??200,o=t.style.boxShadow;t.style.boxShadow=Ac(t),await Ua(r),vr(t,e),t.dispatchEvent(new Event("input",{bubbles:!0})),t.dispatchEvent(new Event("change",{bubbles:!0})),t.style.boxShadow=o}var yr={SCROLL:"scroll",DRAG:"drag",CHAT:"chat"};function ja(t,e){let n=[];return t.has(yr.SCROLL)&&n.push(lm(e)),t.has(yr.DRAG)&&n.push(dm(e)),n}function lm(t){return{name:"scroll_to",description:"Scroll a target into view. `target` is `top`, `bottom`, or a CSS selector / page-map element id. Read-only: it changes nothing on the page.",parameters:{type:"object",properties:{target:{type:"string"}},required:["target"],[xe]:"Scroll into view"},handler:e=>{let n=String(e.target??"");if(n==="top"||n==="bottom"){let o=n==="top"?0:document.body.scrollHeight;return window.scrollTo({top:o,behavior:"smooth"}),{scrolled:!0,target:n}}let r=t(n);if(r===null)throw new Error(`no element matching "${n}"`);return wt(r),{scrolled:!0,target:n}}}}function dm(t){return{name:"drag_and_drop",description:"Drag the `from` element onto the `to` element (CSS selectors or page-map element ids), firing the page's native drag-and-drop. Use for reordering sortable lists. The page decides what the drop commits.",parameters:{type:"object",properties:{from:{type:"string"},to:{type:"string"}},required:["from","to"],[xe]:"Drag and drop"},handler:e=>{let n=String(e.from??""),r=String(e.to??""),o=t(n);if(o===null)throw new Error(`no element matching "${n}"`);let i=t(r);if(i===null)throw new Error(`no element matching "${r}"`);return cm(o,i),{dragged:!0,from:n,to:r}}}}function cm(t,e){let n=new DataTransfer;br(t,"dragstart",n),br(e,"dragenter",n),br(e,"dragover",n),br(e,"drop",n),br(t,"dragend",n)}function br(t,e,n){let r=new Event(e,{bubbles:!0,cancelable:!0});r.dataTransfer=n,t.dispatchEvent(r)}function Va(t,e){return!e||t===null?[]:[{description:"page_map",value:JSON.stringify(t())}]}function No(t){let e=[{name:`read_${t.name}`,description:`Read the "${t.name}" state.`,parameters:{type:"object",properties:{},required:[],[xe]:`Read ${t.name}`},handler:()=>t.read()}],n=t.write;return n!==void 0&&e.push({name:`set_${t.name}`,description:`Update the "${t.name}" state.`,parameters:{...t.schema??{type:"object"},[fr]:!0,[xe]:`Update ${t.name}`},handler:r=>n(r)}),e}var um=No;var Rc=/:([A-Za-z_][A-Za-z0-9_]*)/g;function hm(t){return[...t.matchAll(Rc)].map(e=>e[0].slice(1))}function pm(t,e,n){let r={...n};return{path:e.replace(Rc,(i,s)=>{let a=n[s];if(a==null||String(a)==="")throw new Error(`route "${t}" requires path param "${s}"`);return delete r[s],encodeURIComponent(String(a))}),leftover:r}}function fm(t,e){let n=new URLSearchParams;for(let[o,i]of Object.entries(e))n.set(o,String(i));let r=n.toString();return r===""?t:`${t}?${r}`}function qa(t,e){return[{name:"list_routes",description:"List the routes the app can navigate to. Each route's `pathParams` names the dynamic segments to pass as `params` to `navigate_to_route`.",parameters:{type:"object",properties:{},required:[],[xe]:"List pages"},handler:()=>t().map(n=>({...n,pathParams:hm(n.path)}))},{name:"navigate_to_route",description:"Navigate to one of the app's routes by its id, filling any dynamic `:name` path segments (and extra query params) from `params`.",parameters:{type:"object",properties:{route_id:{type:"string"},params:{type:"object"}},required:["route_id"],[mr]:!0,[xe]:"Navigate"},handler:n=>{let r=n.route_id,o=t().find(u=>u.id===r);if(o===void 0)throw new Error(`unknown route "${String(r)}"`);let i=n.params??{},{path:s,leftover:a}=pm(o.id,o.path,i),l=fm(s,a),d=e();return d!==null?d(l):window.location.assign(l),{navigated:!0,path:l}}}]}var Ae=[];for(let t=0;t<256;++t)Ae.push((t+256).toString(16).slice(1));function Ic(t,e=0){return(Ae[t[e+0]]+Ae[t[e+1]]+Ae[t[e+2]]+Ae[t[e+3]]+"-"+Ae[t[e+4]]+Ae[t[e+5]]+"-"+Ae[t[e+6]]+Ae[t[e+7]]+"-"+Ae[t[e+8]]+Ae[t[e+9]]+"-"+Ae[t[e+10]]+Ae[t[e+11]]+Ae[t[e+12]]+Ae[t[e+13]]+Ae[t[e+14]]+Ae[t[e+15]]).toLowerCase()}var Wa,mm=new Uint8Array(16);function Xa(){if(!Wa){if(typeof crypto>"u"||!crypto.getRandomValues)throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");Wa=crypto.getRandomValues.bind(crypto)}return Wa(mm)}var gm=typeof crypto<"u"&&crypto.randomUUID&&crypto.randomUUID.bind(crypto),Ya={randomUUID:gm};function vm(t,e,n){if(Ya.randomUUID&&!e&&!t)return Ya.randomUUID();t=t||{};let r=t.random??t.rng?.()??Xa();if(r.length<16)throw new Error("Random bytes length must be >= 16");if(r[6]=r[6]&15|64,r[8]=r[8]&63|128,e){if(n=n||0,n<0||n+16>e.length)throw new RangeError(`UUID byte range ${n}:${n+15} is out of buffer bounds`);for(let o=0;o<16;++o)e[n+o]=r[o];return e}return Ic(r)}var Ct=vm;var c={};ba(c,{BRAND:()=>Bm,DIRTY:()=>Wt,EMPTY_PATH:()=>xm,INVALID:()=>F,NEVER:()=>kg,OK:()=>Ce,ParseStatus:()=>ke,Schema:()=>X,ZodAny:()=>Mt,ZodArray:()=>_t,ZodBigInt:()=>Yt,ZodBoolean:()=>Kt,ZodBranded:()=>xr,ZodCatch:()=>ln,ZodDate:()=>Zt,ZodDefault:()=>an,ZodDiscriminatedUnion:()=>Lo,ZodEffects:()=>Qe,ZodEnum:()=>on,ZodError:()=>He,ZodFirstPartyTypeKind:()=>$,ZodFunction:()=>Do,ZodIntersection:()=>tn,ZodIssueCode:()=>k,ZodLazy:()=>nn,ZodLiteral:()=>rn,ZodMap:()=>$n,ZodNaN:()=>jn,ZodNativeEnum:()=>sn,ZodNever:()=>nt,ZodNull:()=>Jt,ZodNullable:()=>ft,ZodNumber:()=>Xt,ZodObject:()=>Ge,ZodOptional:()=>Ke,ZodParsedType:()=>L,ZodPipeline:()=>Er,ZodPromise:()=>Lt,ZodReadonly:()=>dn,ZodRecord:()=>Po,ZodSchema:()=>X,ZodSet:()=>Bn,ZodString:()=>Ot,ZodSymbol:()=>zn,ZodTransformer:()=>Qe,ZodTuple:()=>pt,ZodType:()=>X,ZodUndefined:()=>Qt,ZodUnion:()=>en,ZodUnknown:()=>Tt,ZodVoid:()=>Fn,addIssueToContext:()=>N,any:()=>Qm,array:()=>ng,bigint:()=>Wm,boolean:()=>zc,coerce:()=>Ag,custom:()=>Uc,date:()=>Xm,datetimeRegex:()=>Pc,defaultErrorMap:()=>xt,discriminatedUnion:()=>sg,effect:()=>bg,enum:()=>mg,function:()=>hg,getErrorMap:()=>Un,getParsedType:()=>ht,instanceof:()=>Vm,intersection:()=>ag,isAborted:()=>Oo,isAsync:()=>Hn,isDirty:()=>Mo,isValid:()=>Nt,late:()=>jm,lazy:()=>pg,literal:()=>fg,makeIssue:()=>wr,map:()=>cg,nan:()=>qm,nativeEnum:()=>gg,never:()=>eg,null:()=>Zm,nullable:()=>wg,number:()=>Gc,object:()=>rg,objectUtil:()=>Ka,oboolean:()=>Sg,onumber:()=>_g,optional:()=>yg,ostring:()=>Tg,pipeline:()=>Eg,preprocess:()=>xg,promise:()=>vg,quotelessJson:()=>bm,record:()=>dg,set:()=>ug,setErrorMap:()=>wm,strictObject:()=>og,string:()=>Hc,symbol:()=>Ym,transformer:()=>bg,tuple:()=>lg,undefined:()=>Km,union:()=>ig,unknown:()=>Jm,util:()=>K,void:()=>tg});var K;(function(t){t.assertEqual=o=>{};function e(o){}t.assertIs=e;function n(o){throw new Error}t.assertNever=n,t.arrayToEnum=o=>{let i={};for(let s of o)i[s]=s;return i},t.getValidEnumValues=o=>{let i=t.objectKeys(o).filter(a=>typeof o[o[a]]!="number"),s={};for(let a of i)s[a]=o[a];return t.objectValues(s)},t.objectValues=o=>t.objectKeys(o).map(function(i){return o[i]}),t.objectKeys=typeof Object.keys=="function"?o=>Object.keys(o):o=>{let i=[];for(let s in o)Object.prototype.hasOwnProperty.call(o,s)&&i.push(s);return i},t.find=(o,i)=>{for(let s of o)if(i(s))return s},t.isInteger=typeof Number.isInteger=="function"?o=>Number.isInteger(o):o=>typeof o=="number"&&Number.isFinite(o)&&Math.floor(o)===o;function r(o,i=" | "){return o.map(s=>typeof s=="string"?`'${s}'`:s).join(i)}t.joinValues=r,t.jsonStringifyReplacer=(o,i)=>typeof i=="bigint"?i.toString():i})(K||(K={}));var Ka;(function(t){t.mergeShapes=(e,n)=>({...e,...n})})(Ka||(Ka={}));var L=K.arrayToEnum(["string","nan","number","integer","float","boolean","date","bigint","symbol","function","undefined","null","array","object","unknown","promise","void","never","map","set"]),ht=t=>{switch(typeof t){case"undefined":return L.undefined;case"string":return L.string;case"number":return Number.isNaN(t)?L.nan:L.number;case"boolean":return L.boolean;case"function":return L.function;case"bigint":return L.bigint;case"symbol":return L.symbol;case"object":return Array.isArray(t)?L.array:t===null?L.null:t.then&&typeof t.then=="function"&&t.catch&&typeof t.catch=="function"?L.promise:typeof Map<"u"&&t instanceof Map?L.map:typeof Set<"u"&&t instanceof Set?L.set:typeof Date<"u"&&t instanceof Date?L.date:L.object;default:return L.unknown}};var k=K.arrayToEnum(["invalid_type","invalid_literal","custom","invalid_union","invalid_union_discriminator","invalid_enum_value","unrecognized_keys","invalid_arguments","invalid_return_type","invalid_date","invalid_string","too_small","too_big","invalid_intersection_types","not_multiple_of","not_finite"]),bm=t=>JSON.stringify(t,null,2).replace(/"([^"]+)":/g,"$1:"),He=class t extends Error{get errors(){return this.issues}constructor(e){super(),this.issues=[],this.addIssue=r=>{this.issues=[...this.issues,r]},this.addIssues=(r=[])=>{this.issues=[...this.issues,...r]};let n=new.target.prototype;Object.setPrototypeOf?Object.setPrototypeOf(this,n):this.__proto__=n,this.name="ZodError",this.issues=e}format(e){let n=e||function(i){return i.message},r={_errors:[]},o=i=>{for(let s of i.issues)if(s.code==="invalid_union")s.unionErrors.map(o);else if(s.code==="invalid_return_type")o(s.returnTypeError);else if(s.code==="invalid_arguments")o(s.argumentsError);else if(s.path.length===0)r._errors.push(n(s));else{let a=r,l=0;for(;l<s.path.length;){let d=s.path[l];l===s.path.length-1?(a[d]=a[d]||{_errors:[]},a[d]._errors.push(n(s))):a[d]=a[d]||{_errors:[]},a=a[d],l++}}};return o(this),r}static assert(e){if(!(e instanceof t))throw new Error(`Not a ZodError: ${e}`)}toString(){return this.message}get message(){return JSON.stringify(this.issues,K.jsonStringifyReplacer,2)}get isEmpty(){return this.issues.length===0}flatten(e=n=>n.message){let n={},r=[];for(let o of this.issues)if(o.path.length>0){let i=o.path[0];n[i]=n[i]||[],n[i].push(e(o))}else r.push(e(o));return{formErrors:r,fieldErrors:n}}get formErrors(){return this.flatten()}};He.create=t=>new He(t);var ym=(t,e)=>{let n;switch(t.code){case k.invalid_type:t.received===L.undefined?n="Required":n=`Expected ${t.expected}, received ${t.received}`;break;case k.invalid_literal:n=`Invalid literal value, expected ${JSON.stringify(t.expected,K.jsonStringifyReplacer)}`;break;case k.unrecognized_keys:n=`Unrecognized key(s) in object: ${K.joinValues(t.keys,", ")}`;break;case k.invalid_union:n="Invalid input";break;case k.invalid_union_discriminator:n=`Invalid discriminator value. Expected ${K.joinValues(t.options)}`;break;case k.invalid_enum_value:n=`Invalid enum value. Expected ${K.joinValues(t.options)}, received '${t.received}'`;break;case k.invalid_arguments:n="Invalid function arguments";break;case k.invalid_return_type:n="Invalid function return type";break;case k.invalid_date:n="Invalid date";break;case k.invalid_string:typeof t.validation=="object"?"includes"in t.validation?(n=`Invalid input: must include "${t.validation.includes}"`,typeof t.validation.position=="number"&&(n=`${n} at one or more positions greater than or equal to ${t.validation.position}`)):"startsWith"in t.validation?n=`Invalid input: must start with "${t.validation.startsWith}"`:"endsWith"in t.validation?n=`Invalid input: must end with "${t.validation.endsWith}"`:K.assertNever(t.validation):t.validation!=="regex"?n=`Invalid ${t.validation}`:n="Invalid";break;case k.too_small:t.type==="array"?n=`Array must contain ${t.exact?"exactly":t.inclusive?"at least":"more than"} ${t.minimum} element(s)`:t.type==="string"?n=`String must contain ${t.exact?"exactly":t.inclusive?"at least":"over"} ${t.minimum} character(s)`:t.type==="number"?n=`Number must be ${t.exact?"exactly equal to ":t.inclusive?"greater than or equal to ":"greater than "}${t.minimum}`:t.type==="bigint"?n=`Number must be ${t.exact?"exactly equal to ":t.inclusive?"greater than or equal to ":"greater than "}${t.minimum}`:t.type==="date"?n=`Date must be ${t.exact?"exactly equal to ":t.inclusive?"greater than or equal to ":"greater than "}${new Date(Number(t.minimum))}`:n="Invalid input";break;case k.too_big:t.type==="array"?n=`Array must contain ${t.exact?"exactly":t.inclusive?"at most":"less than"} ${t.maximum} element(s)`:t.type==="string"?n=`String must contain ${t.exact?"exactly":t.inclusive?"at most":"under"} ${t.maximum} character(s)`:t.type==="number"?n=`Number must be ${t.exact?"exactly":t.inclusive?"less than or equal to":"less than"} ${t.maximum}`:t.type==="bigint"?n=`BigInt must be ${t.exact?"exactly":t.inclusive?"less than or equal to":"less than"} ${t.maximum}`:t.type==="date"?n=`Date must be ${t.exact?"exactly":t.inclusive?"smaller than or equal to":"smaller than"} ${new Date(Number(t.maximum))}`:n="Invalid input";break;case k.custom:n="Invalid input";break;case k.invalid_intersection_types:n="Intersection results could not be merged";break;case k.not_multiple_of:n=`Number must be a multiple of ${t.multipleOf}`;break;case k.not_finite:n="Number must be finite";break;default:n=e.defaultError,K.assertNever(t)}return{message:n}},xt=ym;var Cc=xt;function wm(t){Cc=t}function Un(){return Cc}var wr=t=>{let{data:e,path:n,errorMaps:r,issueData:o}=t,i=[...n,...o.path||[]],s={...o,path:i};if(o.message!==void 0)return{...o,path:i,message:o.message};let a="",l=r.filter(d=>!!d).slice().reverse();for(let d of l)a=d(s,{data:e,defaultError:a}).message;return{...o,path:i,message:a}},xm=[];function N(t,e){let n=Un(),r=wr({issueData:e,data:t.data,path:t.path,errorMaps:[t.common.contextualErrorMap,t.schemaErrorMap,n,n===xt?void 0:xt].filter(o=>!!o)});t.common.issues.push(r)}var ke=class t{constructor(){this.value="valid"}dirty(){this.value==="valid"&&(this.value="dirty")}abort(){this.value!=="aborted"&&(this.value="aborted")}static mergeArray(e,n){let r=[];for(let o of n){if(o.status==="aborted")return F;o.status==="dirty"&&e.dirty(),r.push(o.value)}return{status:e.value,value:r}}static async mergeObjectAsync(e,n){let r=[];for(let o of n){let i=await o.key,s=await o.value;r.push({key:i,value:s})}return t.mergeObjectSync(e,r)}static mergeObjectSync(e,n){let r={};for(let o of n){let{key:i,value:s}=o;if(i.status==="aborted"||s.status==="aborted")return F;i.status==="dirty"&&e.dirty(),s.status==="dirty"&&e.dirty(),i.value!=="__proto__"&&(typeof s.value<"u"||o.alwaysSet)&&(r[i.value]=s.value)}return{status:e.value,value:r}}},F=Object.freeze({status:"aborted"}),Wt=t=>({status:"dirty",value:t}),Ce=t=>({status:"valid",value:t}),Oo=t=>t.status==="aborted",Mo=t=>t.status==="dirty",Nt=t=>t.status==="valid",Hn=t=>typeof Promise<"u"&&t instanceof Promise;var D;(function(t){t.errToObj=e=>typeof e=="string"?{message:e}:e||{},t.toString=e=>typeof e=="string"?e:e?.message})(D||(D={}));var Ze=class{constructor(e,n,r,o){this._cachedPath=[],this.parent=e,this.data=n,this._path=r,this._key=o}get path(){return this._cachedPath.length||(Array.isArray(this._key)?this._cachedPath.push(...this._path,...this._key):this._cachedPath.push(...this._path,this._key)),this._cachedPath}},Nc=(t,e)=>{if(Nt(e))return{success:!0,data:e.value};if(!t.common.issues.length)throw new Error("Validation failed but no issues detected.");return{success:!1,get error(){if(this._error)return this._error;let n=new He(t.common.issues);return this._error=n,this._error}}};function W(t){if(!t)return{};let{errorMap:e,invalid_type_error:n,required_error:r,description:o}=t;if(e&&(n||r))throw new Error(`Can't use "invalid_type_error" or "required_error" in conjunction with custom error map.`);return e?{errorMap:e,description:o}:{errorMap:(s,a)=>{let{message:l}=t;return s.code==="invalid_enum_value"?{message:l??a.defaultError}:typeof a.data>"u"?{message:l??r??a.defaultError}:s.code!=="invalid_type"?{message:a.defaultError}:{message:l??n??a.defaultError}},description:o}}var X=class{get description(){return this._def.description}_getType(e){return ht(e.data)}_getOrReturnCtx(e,n){return n||{common:e.parent.common,data:e.data,parsedType:ht(e.data),schemaErrorMap:this._def.errorMap,path:e.path,parent:e.parent}}_processInputParams(e){return{status:new ke,ctx:{common:e.parent.common,data:e.data,parsedType:ht(e.data),schemaErrorMap:this._def.errorMap,path:e.path,parent:e.parent}}}_parseSync(e){let n=this._parse(e);if(Hn(n))throw new Error("Synchronous parse encountered promise.");return n}_parseAsync(e){let n=this._parse(e);return Promise.resolve(n)}parse(e,n){let r=this.safeParse(e,n);if(r.success)return r.data;throw r.error}safeParse(e,n){let r={common:{issues:[],async:n?.async??!1,contextualErrorMap:n?.errorMap},path:n?.path||[],schemaErrorMap:this._def.errorMap,parent:null,data:e,parsedType:ht(e)},o=this._parseSync({data:e,path:r.path,parent:r});return Nc(r,o)}"~validate"(e){let n={common:{issues:[],async:!!this["~standard"].async},path:[],schemaErrorMap:this._def.errorMap,parent:null,data:e,parsedType:ht(e)};if(!this["~standard"].async)try{let r=this._parseSync({data:e,path:[],parent:n});return Nt(r)?{value:r.value}:{issues:n.common.issues}}catch(r){r?.message?.toLowerCase()?.includes("encountered")&&(this["~standard"].async=!0),n.common={issues:[],async:!0}}return this._parseAsync({data:e,path:[],parent:n}).then(r=>Nt(r)?{value:r.value}:{issues:n.common.issues})}async parseAsync(e,n){let r=await this.safeParseAsync(e,n);if(r.success)return r.data;throw r.error}async safeParseAsync(e,n){let r={common:{issues:[],contextualErrorMap:n?.errorMap,async:!0},path:n?.path||[],schemaErrorMap:this._def.errorMap,parent:null,data:e,parsedType:ht(e)},o=this._parse({data:e,path:r.path,parent:r}),i=await(Hn(o)?o:Promise.resolve(o));return Nc(r,i)}refine(e,n){let r=o=>typeof n=="string"||typeof n>"u"?{message:n}:typeof n=="function"?n(o):n;return this._refinement((o,i)=>{let s=e(o),a=()=>i.addIssue({code:k.custom,...r(o)});return typeof Promise<"u"&&s instanceof Promise?s.then(l=>l?!0:(a(),!1)):s?!0:(a(),!1)})}refinement(e,n){return this._refinement((r,o)=>e(r)?!0:(o.addIssue(typeof n=="function"?n(r,o):n),!1))}_refinement(e){return new Qe({schema:this,typeName:$.ZodEffects,effect:{type:"refinement",refinement:e}})}superRefine(e){return this._refinement(e)}constructor(e){this.spa=this.safeParseAsync,this._def=e,this.parse=this.parse.bind(this),this.safeParse=this.safeParse.bind(this),this.parseAsync=this.parseAsync.bind(this),this.safeParseAsync=this.safeParseAsync.bind(this),this.spa=this.spa.bind(this),this.refine=this.refine.bind(this),this.refinement=this.refinement.bind(this),this.superRefine=this.superRefine.bind(this),this.optional=this.optional.bind(this),this.nullable=this.nullable.bind(this),this.nullish=this.nullish.bind(this),this.array=this.array.bind(this),this.promise=this.promise.bind(this),this.or=this.or.bind(this),this.and=this.and.bind(this),this.transform=this.transform.bind(this),this.brand=this.brand.bind(this),this.default=this.default.bind(this),this.catch=this.catch.bind(this),this.describe=this.describe.bind(this),this.pipe=this.pipe.bind(this),this.readonly=this.readonly.bind(this),this.isNullable=this.isNullable.bind(this),this.isOptional=this.isOptional.bind(this),this["~standard"]={version:1,vendor:"zod",validate:n=>this["~validate"](n)}}optional(){return Ke.create(this,this._def)}nullable(){return ft.create(this,this._def)}nullish(){return this.nullable().optional()}array(){return _t.create(this)}promise(){return Lt.create(this,this._def)}or(e){return en.create([this,e],this._def)}and(e){return tn.create(this,e,this._def)}transform(e){return new Qe({...W(this._def),schema:this,typeName:$.ZodEffects,effect:{type:"transform",transform:e}})}default(e){let n=typeof e=="function"?e:()=>e;return new an({...W(this._def),innerType:this,defaultValue:n,typeName:$.ZodDefault})}brand(){return new xr({typeName:$.ZodBranded,type:this,...W(this._def)})}catch(e){let n=typeof e=="function"?e:()=>e;return new ln({...W(this._def),innerType:this,catchValue:n,typeName:$.ZodCatch})}describe(e){let n=this.constructor;return new n({...this._def,description:e})}pipe(e){return Er.create(this,e)}readonly(){return dn.create(this)}isOptional(){return this.safeParse(void 0).success}isNullable(){return this.safeParse(null).success}},Em=/^c[^\s-]{8,}$/i,Tm=/^[0-9a-z]+$/,_m=/^[0-9A-HJKMNP-TV-Z]{26}$/i,Sm=/^[0-9a-fA-F]{8}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{12}$/i,Am=/^[a-z0-9_-]{21}$/i,km=/^[A-Za-z0-9-_]+\.[A-Za-z0-9-_]+\.[A-Za-z0-9-_]*$/,Rm=/^[-+]?P(?!$)(?:(?:[-+]?\d+Y)|(?:[-+]?\d+[.,]\d+Y$))?(?:(?:[-+]?\d+M)|(?:[-+]?\d+[.,]\d+M$))?(?:(?:[-+]?\d+W)|(?:[-+]?\d+[.,]\d+W$))?(?:(?:[-+]?\d+D)|(?:[-+]?\d+[.,]\d+D$))?(?:T(?=[\d+-])(?:(?:[-+]?\d+H)|(?:[-+]?\d+[.,]\d+H$))?(?:(?:[-+]?\d+M)|(?:[-+]?\d+[.,]\d+M$))?(?:[-+]?\d+(?:[.,]\d+)?S)?)??$/,Im=/^(?!\.)(?!.*\.\.)([A-Z0-9_'+\-\.]*)[A-Z0-9_+-]@([A-Z0-9][A-Z0-9\-]*\.)+[A-Z]{2,}$/i,Cm="^(\\p{Extended_Pictographic}|\\p{Emoji_Component})+$",Za,Nm=/^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])$/,Om=/^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\/(3[0-2]|[12]?[0-9])$/,Mm=/^(([0-9a-fA-F]{1,4}:){7,7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:)|fe80:(:[0-9a-fA-F]{0,4}){0,4}%[0-9a-zA-Z]{1,}|::(ffff(:0{1,4}){0,1}:){0,1}((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])|([0-9a-fA-F]{1,4}:){1,4}:((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9]))$/,Lm=/^(([0-9a-fA-F]{1,4}:){7,7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:)|fe80:(:[0-9a-fA-F]{0,4}){0,4}%[0-9a-zA-Z]{1,}|::(ffff(:0{1,4}){0,1}:){0,1}((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])|([0-9a-fA-F]{1,4}:){1,4}:((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9]))\/(12[0-8]|1[01][0-9]|[1-9]?[0-9])$/,Pm=/^([0-9a-zA-Z+/]{4})*(([0-9a-zA-Z+/]{2}==)|([0-9a-zA-Z+/]{3}=))?$/,Dm=/^([0-9a-zA-Z-_]{4})*(([0-9a-zA-Z-_]{2}(==)?)|([0-9a-zA-Z-_]{3}(=)?))?$/,Mc="((\\d\\d[2468][048]|\\d\\d[13579][26]|\\d\\d0[48]|[02468][048]00|[13579][26]00)-02-29|\\d{4}-((0[13578]|1[02])-(0[1-9]|[12]\\d|3[01])|(0[469]|11)-(0[1-9]|[12]\\d|30)|(02)-(0[1-9]|1\\d|2[0-8])))",Um=new RegExp(`^${Mc}$`);function Lc(t){let e="[0-5]\\d";t.precision?e=`${e}\\.\\d{${t.precision}}`:t.precision==null&&(e=`${e}(\\.\\d+)?`);let n=t.precision?"+":"?";return`([01]\\d|2[0-3]):[0-5]\\d(:${e})${n}`}function Hm(t){return new RegExp(`^${Lc(t)}$`)}function Pc(t){let e=`${Mc}T${Lc(t)}`,n=[];return n.push(t.local?"Z?":"Z"),t.offset&&n.push("([+-]\\d{2}:?\\d{2})"),e=`${e}(${n.join("|")})`,new RegExp(`^${e}$`)}function Gm(t,e){return!!((e==="v4"||!e)&&Nm.test(t)||(e==="v6"||!e)&&Mm.test(t))}function zm(t,e){if(!km.test(t))return!1;try{let[n]=t.split(".");if(!n)return!1;let r=n.replace(/-/g,"+").replace(/_/g,"/").padEnd(n.length+(4-n.length%4)%4,"="),o=JSON.parse(atob(r));return!(typeof o!="object"||o===null||"typ"in o&&o?.typ!=="JWT"||!o.alg||e&&o.alg!==e)}catch{return!1}}function Fm(t,e){return!!((e==="v4"||!e)&&Om.test(t)||(e==="v6"||!e)&&Lm.test(t))}var Ot=class t extends X{_parse(e){if(this._def.coerce&&(e.data=String(e.data)),this._getType(e)!==L.string){let i=this._getOrReturnCtx(e);return N(i,{code:k.invalid_type,expected:L.string,received:i.parsedType}),F}let r=new ke,o;for(let i of this._def.checks)if(i.kind==="min")e.data.length<i.value&&(o=this._getOrReturnCtx(e,o),N(o,{code:k.too_small,minimum:i.value,type:"string",inclusive:!0,exact:!1,message:i.message}),r.dirty());else if(i.kind==="max")e.data.length>i.value&&(o=this._getOrReturnCtx(e,o),N(o,{code:k.too_big,maximum:i.value,type:"string",inclusive:!0,exact:!1,message:i.message}),r.dirty());else if(i.kind==="length"){let s=e.data.length>i.value,a=e.data.length<i.value;(s||a)&&(o=this._getOrReturnCtx(e,o),s?N(o,{code:k.too_big,maximum:i.value,type:"string",inclusive:!0,exact:!0,message:i.message}):a&&N(o,{code:k.too_small,minimum:i.value,type:"string",inclusive:!0,exact:!0,message:i.message}),r.dirty())}else if(i.kind==="email")Im.test(e.data)||(o=this._getOrReturnCtx(e,o),N(o,{validation:"email",code:k.invalid_string,message:i.message}),r.dirty());else if(i.kind==="emoji")Za||(Za=new RegExp(Cm,"u")),Za.test(e.data)||(o=this._getOrReturnCtx(e,o),N(o,{validation:"emoji",code:k.invalid_string,message:i.message}),r.dirty());else if(i.kind==="uuid")Sm.test(e.data)||(o=this._getOrReturnCtx(e,o),N(o,{validation:"uuid",code:k.invalid_string,message:i.message}),r.dirty());else if(i.kind==="nanoid")Am.test(e.data)||(o=this._getOrReturnCtx(e,o),N(o,{validation:"nanoid",code:k.invalid_string,message:i.message}),r.dirty());else if(i.kind==="cuid")Em.test(e.data)||(o=this._getOrReturnCtx(e,o),N(o,{validation:"cuid",code:k.invalid_string,message:i.message}),r.dirty());else if(i.kind==="cuid2")Tm.test(e.data)||(o=this._getOrReturnCtx(e,o),N(o,{validation:"cuid2",code:k.invalid_string,message:i.message}),r.dirty());else if(i.kind==="ulid")_m.test(e.data)||(o=this._getOrReturnCtx(e,o),N(o,{validation:"ulid",code:k.invalid_string,message:i.message}),r.dirty());else if(i.kind==="url")try{new URL(e.data)}catch{o=this._getOrReturnCtx(e,o),N(o,{validation:"url",code:k.invalid_string,message:i.message}),r.dirty()}else i.kind==="regex"?(i.regex.lastIndex=0,i.regex.test(e.data)||(o=this._getOrReturnCtx(e,o),N(o,{validation:"regex",code:k.invalid_string,message:i.message}),r.dirty())):i.kind==="trim"?e.data=e.data.trim():i.kind==="includes"?e.data.includes(i.value,i.position)||(o=this._getOrReturnCtx(e,o),N(o,{code:k.invalid_string,validation:{includes:i.value,position:i.position},message:i.message}),r.dirty()):i.kind==="toLowerCase"?e.data=e.data.toLowerCase():i.kind==="toUpperCase"?e.data=e.data.toUpperCase():i.kind==="startsWith"?e.data.startsWith(i.value)||(o=this._getOrReturnCtx(e,o),N(o,{code:k.invalid_string,validation:{startsWith:i.value},message:i.message}),r.dirty()):i.kind==="endsWith"?e.data.endsWith(i.value)||(o=this._getOrReturnCtx(e,o),N(o,{code:k.invalid_string,validation:{endsWith:i.value},message:i.message}),r.dirty()):i.kind==="datetime"?Pc(i).test(e.data)||(o=this._getOrReturnCtx(e,o),N(o,{code:k.invalid_string,validation:"datetime",message:i.message}),r.dirty()):i.kind==="date"?Um.test(e.data)||(o=this._getOrReturnCtx(e,o),N(o,{code:k.invalid_string,validation:"date",message:i.message}),r.dirty()):i.kind==="time"?Hm(i).test(e.data)||(o=this._getOrReturnCtx(e,o),N(o,{code:k.invalid_string,validation:"time",message:i.message}),r.dirty()):i.kind==="duration"?Rm.test(e.data)||(o=this._getOrReturnCtx(e,o),N(o,{validation:"duration",code:k.invalid_string,message:i.message}),r.dirty()):i.kind==="ip"?Gm(e.data,i.version)||(o=this._getOrReturnCtx(e,o),N(o,{validation:"ip",code:k.invalid_string,message:i.message}),r.dirty()):i.kind==="jwt"?zm(e.data,i.alg)||(o=this._getOrReturnCtx(e,o),N(o,{validation:"jwt",code:k.invalid_string,message:i.message}),r.dirty()):i.kind==="cidr"?Fm(e.data,i.version)||(o=this._getOrReturnCtx(e,o),N(o,{validation:"cidr",code:k.invalid_string,message:i.message}),r.dirty()):i.kind==="base64"?Pm.test(e.data)||(o=this._getOrReturnCtx(e,o),N(o,{validation:"base64",code:k.invalid_string,message:i.message}),r.dirty()):i.kind==="base64url"?Dm.test(e.data)||(o=this._getOrReturnCtx(e,o),N(o,{validation:"base64url",code:k.invalid_string,message:i.message}),r.dirty()):K.assertNever(i);return{status:r.value,value:e.data}}_regex(e,n,r){return this.refinement(o=>e.test(o),{validation:n,code:k.invalid_string,...D.errToObj(r)})}_addCheck(e){return new t({...this._def,checks:[...this._def.checks,e]})}email(e){return this._addCheck({kind:"email",...D.errToObj(e)})}url(e){return this._addCheck({kind:"url",...D.errToObj(e)})}emoji(e){return this._addCheck({kind:"emoji",...D.errToObj(e)})}uuid(e){return this._addCheck({kind:"uuid",...D.errToObj(e)})}nanoid(e){return this._addCheck({kind:"nanoid",...D.errToObj(e)})}cuid(e){return this._addCheck({kind:"cuid",...D.errToObj(e)})}cuid2(e){return this._addCheck({kind:"cuid2",...D.errToObj(e)})}ulid(e){return this._addCheck({kind:"ulid",...D.errToObj(e)})}base64(e){return this._addCheck({kind:"base64",...D.errToObj(e)})}base64url(e){return this._addCheck({kind:"base64url",...D.errToObj(e)})}jwt(e){return this._addCheck({kind:"jwt",...D.errToObj(e)})}ip(e){return this._addCheck({kind:"ip",...D.errToObj(e)})}cidr(e){return this._addCheck({kind:"cidr",...D.errToObj(e)})}datetime(e){return typeof e=="string"?this._addCheck({kind:"datetime",precision:null,offset:!1,local:!1,message:e}):this._addCheck({kind:"datetime",precision:typeof e?.precision>"u"?null:e?.precision,offset:e?.offset??!1,local:e?.local??!1,...D.errToObj(e?.message)})}date(e){return this._addCheck({kind:"date",message:e})}time(e){return typeof e=="string"?this._addCheck({kind:"time",precision:null,message:e}):this._addCheck({kind:"time",precision:typeof e?.precision>"u"?null:e?.precision,...D.errToObj(e?.message)})}duration(e){return this._addCheck({kind:"duration",...D.errToObj(e)})}regex(e,n){return this._addCheck({kind:"regex",regex:e,...D.errToObj(n)})}includes(e,n){return this._addCheck({kind:"includes",value:e,position:n?.position,...D.errToObj(n?.message)})}startsWith(e,n){return this._addCheck({kind:"startsWith",value:e,...D.errToObj(n)})}endsWith(e,n){return this._addCheck({kind:"endsWith",value:e,...D.errToObj(n)})}min(e,n){return this._addCheck({kind:"min",value:e,...D.errToObj(n)})}max(e,n){return this._addCheck({kind:"max",value:e,...D.errToObj(n)})}length(e,n){return this._addCheck({kind:"length",value:e,...D.errToObj(n)})}nonempty(e){return this.min(1,D.errToObj(e))}trim(){return new t({...this._def,checks:[...this._def.checks,{kind:"trim"}]})}toLowerCase(){return new t({...this._def,checks:[...this._def.checks,{kind:"toLowerCase"}]})}toUpperCase(){return new t({...this._def,checks:[...this._def.checks,{kind:"toUpperCase"}]})}get isDatetime(){return!!this._def.checks.find(e=>e.kind==="datetime")}get isDate(){return!!this._def.checks.find(e=>e.kind==="date")}get isTime(){return!!this._def.checks.find(e=>e.kind==="time")}get isDuration(){return!!this._def.checks.find(e=>e.kind==="duration")}get isEmail(){return!!this._def.checks.find(e=>e.kind==="email")}get isURL(){return!!this._def.checks.find(e=>e.kind==="url")}get isEmoji(){return!!this._def.checks.find(e=>e.kind==="emoji")}get isUUID(){return!!this._def.checks.find(e=>e.kind==="uuid")}get isNANOID(){return!!this._def.checks.find(e=>e.kind==="nanoid")}get isCUID(){return!!this._def.checks.find(e=>e.kind==="cuid")}get isCUID2(){return!!this._def.checks.find(e=>e.kind==="cuid2")}get isULID(){return!!this._def.checks.find(e=>e.kind==="ulid")}get isIP(){return!!this._def.checks.find(e=>e.kind==="ip")}get isCIDR(){return!!this._def.checks.find(e=>e.kind==="cidr")}get isBase64(){return!!this._def.checks.find(e=>e.kind==="base64")}get isBase64url(){return!!this._def.checks.find(e=>e.kind==="base64url")}get minLength(){let e=null;for(let n of this._def.checks)n.kind==="min"&&(e===null||n.value>e)&&(e=n.value);return e}get maxLength(){let e=null;for(let n of this._def.checks)n.kind==="max"&&(e===null||n.value<e)&&(e=n.value);return e}};Ot.create=t=>new Ot({checks:[],typeName:$.ZodString,coerce:t?.coerce??!1,...W(t)});function $m(t,e){let n=(t.toString().split(".")[1]||"").length,r=(e.toString().split(".")[1]||"").length,o=n>r?n:r,i=Number.parseInt(t.toFixed(o).replace(".","")),s=Number.parseInt(e.toFixed(o).replace(".",""));return i%s/10**o}var Xt=class t extends X{constructor(){super(...arguments),this.min=this.gte,this.max=this.lte,this.step=this.multipleOf}_parse(e){if(this._def.coerce&&(e.data=Number(e.data)),this._getType(e)!==L.number){let i=this._getOrReturnCtx(e);return N(i,{code:k.invalid_type,expected:L.number,received:i.parsedType}),F}let r,o=new ke;for(let i of this._def.checks)i.kind==="int"?K.isInteger(e.data)||(r=this._getOrReturnCtx(e,r),N(r,{code:k.invalid_type,expected:"integer",received:"float",message:i.message}),o.dirty()):i.kind==="min"?(i.inclusive?e.data<i.value:e.data<=i.value)&&(r=this._getOrReturnCtx(e,r),N(r,{code:k.too_small,minimum:i.value,type:"number",inclusive:i.inclusive,exact:!1,message:i.message}),o.dirty()):i.kind==="max"?(i.inclusive?e.data>i.value:e.data>=i.value)&&(r=this._getOrReturnCtx(e,r),N(r,{code:k.too_big,maximum:i.value,type:"number",inclusive:i.inclusive,exact:!1,message:i.message}),o.dirty()):i.kind==="multipleOf"?$m(e.data,i.value)!==0&&(r=this._getOrReturnCtx(e,r),N(r,{code:k.not_multiple_of,multipleOf:i.value,message:i.message}),o.dirty()):i.kind==="finite"?Number.isFinite(e.data)||(r=this._getOrReturnCtx(e,r),N(r,{code:k.not_finite,message:i.message}),o.dirty()):K.assertNever(i);return{status:o.value,value:e.data}}gte(e,n){return this.setLimit("min",e,!0,D.toString(n))}gt(e,n){return this.setLimit("min",e,!1,D.toString(n))}lte(e,n){return this.setLimit("max",e,!0,D.toString(n))}lt(e,n){return this.setLimit("max",e,!1,D.toString(n))}setLimit(e,n,r,o){return new t({...this._def,checks:[...this._def.checks,{kind:e,value:n,inclusive:r,message:D.toString(o)}]})}_addCheck(e){return new t({...this._def,checks:[...this._def.checks,e]})}int(e){return this._addCheck({kind:"int",message:D.toString(e)})}positive(e){return this._addCheck({kind:"min",value:0,inclusive:!1,message:D.toString(e)})}negative(e){return this._addCheck({kind:"max",value:0,inclusive:!1,message:D.toString(e)})}nonpositive(e){return this._addCheck({kind:"max",value:0,inclusive:!0,message:D.toString(e)})}nonnegative(e){return this._addCheck({kind:"min",value:0,inclusive:!0,message:D.toString(e)})}multipleOf(e,n){return this._addCheck({kind:"multipleOf",value:e,message:D.toString(n)})}finite(e){return this._addCheck({kind:"finite",message:D.toString(e)})}safe(e){return this._addCheck({kind:"min",inclusive:!0,value:Number.MIN_SAFE_INTEGER,message:D.toString(e)})._addCheck({kind:"max",inclusive:!0,value:Number.MAX_SAFE_INTEGER,message:D.toString(e)})}get minValue(){let e=null;for(let n of this._def.checks)n.kind==="min"&&(e===null||n.value>e)&&(e=n.value);return e}get maxValue(){let e=null;for(let n of this._def.checks)n.kind==="max"&&(e===null||n.value<e)&&(e=n.value);return e}get isInt(){return!!this._def.checks.find(e=>e.kind==="int"||e.kind==="multipleOf"&&K.isInteger(e.value))}get isFinite(){let e=null,n=null;for(let r of this._def.checks){if(r.kind==="finite"||r.kind==="int"||r.kind==="multipleOf")return!0;r.kind==="min"?(n===null||r.value>n)&&(n=r.value):r.kind==="max"&&(e===null||r.value<e)&&(e=r.value)}return Number.isFinite(n)&&Number.isFinite(e)}};Xt.create=t=>new Xt({checks:[],typeName:$.ZodNumber,coerce:t?.coerce||!1,...W(t)});var Yt=class t extends X{constructor(){super(...arguments),this.min=this.gte,this.max=this.lte}_parse(e){if(this._def.coerce)try{e.data=BigInt(e.data)}catch{return this._getInvalidInput(e)}if(this._getType(e)!==L.bigint)return this._getInvalidInput(e);let r,o=new ke;for(let i of this._def.checks)i.kind==="min"?(i.inclusive?e.data<i.value:e.data<=i.value)&&(r=this._getOrReturnCtx(e,r),N(r,{code:k.too_small,type:"bigint",minimum:i.value,inclusive:i.inclusive,message:i.message}),o.dirty()):i.kind==="max"?(i.inclusive?e.data>i.value:e.data>=i.value)&&(r=this._getOrReturnCtx(e,r),N(r,{code:k.too_big,type:"bigint",maximum:i.value,inclusive:i.inclusive,message:i.message}),o.dirty()):i.kind==="multipleOf"?e.data%i.value!==BigInt(0)&&(r=this._getOrReturnCtx(e,r),N(r,{code:k.not_multiple_of,multipleOf:i.value,message:i.message}),o.dirty()):K.assertNever(i);return{status:o.value,value:e.data}}_getInvalidInput(e){let n=this._getOrReturnCtx(e);return N(n,{code:k.invalid_type,expected:L.bigint,received:n.parsedType}),F}gte(e,n){return this.setLimit("min",e,!0,D.toString(n))}gt(e,n){return this.setLimit("min",e,!1,D.toString(n))}lte(e,n){return this.setLimit("max",e,!0,D.toString(n))}lt(e,n){return this.setLimit("max",e,!1,D.toString(n))}setLimit(e,n,r,o){return new t({...this._def,checks:[...this._def.checks,{kind:e,value:n,inclusive:r,message:D.toString(o)}]})}_addCheck(e){return new t({...this._def,checks:[...this._def.checks,e]})}positive(e){return this._addCheck({kind:"min",value:BigInt(0),inclusive:!1,message:D.toString(e)})}negative(e){return this._addCheck({kind:"max",value:BigInt(0),inclusive:!1,message:D.toString(e)})}nonpositive(e){return this._addCheck({kind:"max",value:BigInt(0),inclusive:!0,message:D.toString(e)})}nonnegative(e){return this._addCheck({kind:"min",value:BigInt(0),inclusive:!0,message:D.toString(e)})}multipleOf(e,n){return this._addCheck({kind:"multipleOf",value:e,message:D.toString(n)})}get minValue(){let e=null;for(let n of this._def.checks)n.kind==="min"&&(e===null||n.value>e)&&(e=n.value);return e}get maxValue(){let e=null;for(let n of this._def.checks)n.kind==="max"&&(e===null||n.value<e)&&(e=n.value);return e}};Yt.create=t=>new Yt({checks:[],typeName:$.ZodBigInt,coerce:t?.coerce??!1,...W(t)});var Kt=class extends X{_parse(e){if(this._def.coerce&&(e.data=!!e.data),this._getType(e)!==L.boolean){let r=this._getOrReturnCtx(e);return N(r,{code:k.invalid_type,expected:L.boolean,received:r.parsedType}),F}return Ce(e.data)}};Kt.create=t=>new Kt({typeName:$.ZodBoolean,coerce:t?.coerce||!1,...W(t)});var Zt=class t extends X{_parse(e){if(this._def.coerce&&(e.data=new Date(e.data)),this._getType(e)!==L.date){let i=this._getOrReturnCtx(e);return N(i,{code:k.invalid_type,expected:L.date,received:i.parsedType}),F}if(Number.isNaN(e.data.getTime())){let i=this._getOrReturnCtx(e);return N(i,{code:k.invalid_date}),F}let r=new ke,o;for(let i of this._def.checks)i.kind==="min"?e.data.getTime()<i.value&&(o=this._getOrReturnCtx(e,o),N(o,{code:k.too_small,message:i.message,inclusive:!0,exact:!1,minimum:i.value,type:"date"}),r.dirty()):i.kind==="max"?e.data.getTime()>i.value&&(o=this._getOrReturnCtx(e,o),N(o,{code:k.too_big,message:i.message,inclusive:!0,exact:!1,maximum:i.value,type:"date"}),r.dirty()):K.assertNever(i);return{status:r.value,value:new Date(e.data.getTime())}}_addCheck(e){return new t({...this._def,checks:[...this._def.checks,e]})}min(e,n){return this._addCheck({kind:"min",value:e.getTime(),message:D.toString(n)})}max(e,n){return this._addCheck({kind:"max",value:e.getTime(),message:D.toString(n)})}get minDate(){let e=null;for(let n of this._def.checks)n.kind==="min"&&(e===null||n.value>e)&&(e=n.value);return e!=null?new Date(e):null}get maxDate(){let e=null;for(let n of this._def.checks)n.kind==="max"&&(e===null||n.value<e)&&(e=n.value);return e!=null?new Date(e):null}};Zt.create=t=>new Zt({checks:[],coerce:t?.coerce||!1,typeName:$.ZodDate,...W(t)});var zn=class extends X{_parse(e){if(this._getType(e)!==L.symbol){let r=this._getOrReturnCtx(e);return N(r,{code:k.invalid_type,expected:L.symbol,received:r.parsedType}),F}return Ce(e.data)}};zn.create=t=>new zn({typeName:$.ZodSymbol,...W(t)});var Qt=class extends X{_parse(e){if(this._getType(e)!==L.undefined){let r=this._getOrReturnCtx(e);return N(r,{code:k.invalid_type,expected:L.undefined,received:r.parsedType}),F}return Ce(e.data)}};Qt.create=t=>new Qt({typeName:$.ZodUndefined,...W(t)});var Jt=class extends X{_parse(e){if(this._getType(e)!==L.null){let r=this._getOrReturnCtx(e);return N(r,{code:k.invalid_type,expected:L.null,received:r.parsedType}),F}return Ce(e.data)}};Jt.create=t=>new Jt({typeName:$.ZodNull,...W(t)});var Mt=class extends X{constructor(){super(...arguments),this._any=!0}_parse(e){return Ce(e.data)}};Mt.create=t=>new Mt({typeName:$.ZodAny,...W(t)});var Tt=class extends X{constructor(){super(...arguments),this._unknown=!0}_parse(e){return Ce(e.data)}};Tt.create=t=>new Tt({typeName:$.ZodUnknown,...W(t)});var nt=class extends X{_parse(e){let n=this._getOrReturnCtx(e);return N(n,{code:k.invalid_type,expected:L.never,received:n.parsedType}),F}};nt.create=t=>new nt({typeName:$.ZodNever,...W(t)});var Fn=class extends X{_parse(e){if(this._getType(e)!==L.undefined){let r=this._getOrReturnCtx(e);return N(r,{code:k.invalid_type,expected:L.void,received:r.parsedType}),F}return Ce(e.data)}};Fn.create=t=>new Fn({typeName:$.ZodVoid,...W(t)});var _t=class t extends X{_parse(e){let{ctx:n,status:r}=this._processInputParams(e),o=this._def;if(n.parsedType!==L.array)return N(n,{code:k.invalid_type,expected:L.array,received:n.parsedType}),F;if(o.exactLength!==null){let s=n.data.length>o.exactLength.value,a=n.data.length<o.exactLength.value;(s||a)&&(N(n,{code:s?k.too_big:k.too_small,minimum:a?o.exactLength.value:void 0,maximum:s?o.exactLength.value:void 0,type:"array",inclusive:!0,exact:!0,message:o.exactLength.message}),r.dirty())}if(o.minLength!==null&&n.data.length<o.minLength.value&&(N(n,{code:k.too_small,minimum:o.minLength.value,type:"array",inclusive:!0,exact:!1,message:o.minLength.message}),r.dirty()),o.maxLength!==null&&n.data.length>o.maxLength.value&&(N(n,{code:k.too_big,maximum:o.maxLength.value,type:"array",inclusive:!0,exact:!1,message:o.maxLength.message}),r.dirty()),n.common.async)return Promise.all([...n.data].map((s,a)=>o.type._parseAsync(new Ze(n,s,n.path,a)))).then(s=>ke.mergeArray(r,s));let i=[...n.data].map((s,a)=>o.type._parseSync(new Ze(n,s,n.path,a)));return ke.mergeArray(r,i)}get element(){return this._def.type}min(e,n){return new t({...this._def,minLength:{value:e,message:D.toString(n)}})}max(e,n){return new t({...this._def,maxLength:{value:e,message:D.toString(n)}})}length(e,n){return new t({...this._def,exactLength:{value:e,message:D.toString(n)}})}nonempty(e){return this.min(1,e)}};_t.create=(t,e)=>new _t({type:t,minLength:null,maxLength:null,exactLength:null,typeName:$.ZodArray,...W(e)});function Gn(t){if(t instanceof Ge){let e={};for(let n in t.shape){let r=t.shape[n];e[n]=Ke.create(Gn(r))}return new Ge({...t._def,shape:()=>e})}else return t instanceof _t?new _t({...t._def,type:Gn(t.element)}):t instanceof Ke?Ke.create(Gn(t.unwrap())):t instanceof ft?ft.create(Gn(t.unwrap())):t instanceof pt?pt.create(t.items.map(e=>Gn(e))):t}var Ge=class t extends X{constructor(){super(...arguments),this._cached=null,this.nonstrict=this.passthrough,this.augment=this.extend}_getCached(){if(this._cached!==null)return this._cached;let e=this._def.shape(),n=K.objectKeys(e);return this._cached={shape:e,keys:n},this._cached}_parse(e){if(this._getType(e)!==L.object){let d=this._getOrReturnCtx(e);return N(d,{code:k.invalid_type,expected:L.object,received:d.parsedType}),F}let{status:r,ctx:o}=this._processInputParams(e),{shape:i,keys:s}=this._getCached(),a=[];if(!(this._def.catchall instanceof nt&&this._def.unknownKeys==="strip"))for(let d in o.data)s.includes(d)||a.push(d);let l=[];for(let d of s){let u=i[d],m=o.data[d];l.push({key:{status:"valid",value:d},value:u._parse(new Ze(o,m,o.path,d)),alwaysSet:d in o.data})}if(this._def.catchall instanceof nt){let d=this._def.unknownKeys;if(d==="passthrough")for(let u of a)l.push({key:{status:"valid",value:u},value:{status:"valid",value:o.data[u]}});else if(d==="strict")a.length>0&&(N(o,{code:k.unrecognized_keys,keys:a}),r.dirty());else if(d!=="strip")throw new Error("Internal ZodObject error: invalid unknownKeys value.")}else{let d=this._def.catchall;for(let u of a){let m=o.data[u];l.push({key:{status:"valid",value:u},value:d._parse(new Ze(o,m,o.path,u)),alwaysSet:u in o.data})}}return o.common.async?Promise.resolve().then(async()=>{let d=[];for(let u of l){let m=await u.key,w=await u.value;d.push({key:m,value:w,alwaysSet:u.alwaysSet})}return d}).then(d=>ke.mergeObjectSync(r,d)):ke.mergeObjectSync(r,l)}get shape(){return this._def.shape()}strict(e){return D.errToObj,new t({...this._def,unknownKeys:"strict",...e!==void 0?{errorMap:(n,r)=>{let o=this._def.errorMap?.(n,r).message??r.defaultError;return n.code==="unrecognized_keys"?{message:D.errToObj(e).message??o}:{message:o}}}:{}})}strip(){return new t({...this._def,unknownKeys:"strip"})}passthrough(){return new t({...this._def,unknownKeys:"passthrough"})}extend(e){return new t({...this._def,shape:()=>({...this._def.shape(),...e})})}merge(e){return new t({unknownKeys:e._def.unknownKeys,catchall:e._def.catchall,shape:()=>({...this._def.shape(),...e._def.shape()}),typeName:$.ZodObject})}setKey(e,n){return this.augment({[e]:n})}catchall(e){return new t({...this._def,catchall:e})}pick(e){let n={};for(let r of K.objectKeys(e))e[r]&&this.shape[r]&&(n[r]=this.shape[r]);return new t({...this._def,shape:()=>n})}omit(e){let n={};for(let r of K.objectKeys(this.shape))e[r]||(n[r]=this.shape[r]);return new t({...this._def,shape:()=>n})}deepPartial(){return Gn(this)}partial(e){let n={};for(let r of K.objectKeys(this.shape)){let o=this.shape[r];e&&!e[r]?n[r]=o:n[r]=o.optional()}return new t({...this._def,shape:()=>n})}required(e){let n={};for(let r of K.objectKeys(this.shape))if(e&&!e[r])n[r]=this.shape[r];else{let i=this.shape[r];for(;i instanceof Ke;)i=i._def.innerType;n[r]=i}return new t({...this._def,shape:()=>n})}keyof(){return Dc(K.objectKeys(this.shape))}};Ge.create=(t,e)=>new Ge({shape:()=>t,unknownKeys:"strip",catchall:nt.create(),typeName:$.ZodObject,...W(e)});Ge.strictCreate=(t,e)=>new Ge({shape:()=>t,unknownKeys:"strict",catchall:nt.create(),typeName:$.ZodObject,...W(e)});Ge.lazycreate=(t,e)=>new Ge({shape:t,unknownKeys:"strip",catchall:nt.create(),typeName:$.ZodObject,...W(e)});var en=class extends X{_parse(e){let{ctx:n}=this._processInputParams(e),r=this._def.options;function o(i){for(let a of i)if(a.result.status==="valid")return a.result;for(let a of i)if(a.result.status==="dirty")return n.common.issues.push(...a.ctx.common.issues),a.result;let s=i.map(a=>new He(a.ctx.common.issues));return N(n,{code:k.invalid_union,unionErrors:s}),F}if(n.common.async)return Promise.all(r.map(async i=>{let s={...n,common:{...n.common,issues:[]},parent:null};return{result:await i._parseAsync({data:n.data,path:n.path,parent:s}),ctx:s}})).then(o);{let i,s=[];for(let l of r){let d={...n,common:{...n.common,issues:[]},parent:null},u=l._parseSync({data:n.data,path:n.path,parent:d});if(u.status==="valid")return u;u.status==="dirty"&&!i&&(i={result:u,ctx:d}),d.common.issues.length&&s.push(d.common.issues)}if(i)return n.common.issues.push(...i.ctx.common.issues),i.result;let a=s.map(l=>new He(l));return N(n,{code:k.invalid_union,unionErrors:a}),F}}get options(){return this._def.options}};en.create=(t,e)=>new en({options:t,typeName:$.ZodUnion,...W(e)});var Et=t=>t instanceof nn?Et(t.schema):t instanceof Qe?Et(t.innerType()):t instanceof rn?[t.value]:t instanceof on?t.options:t instanceof sn?K.objectValues(t.enum):t instanceof an?Et(t._def.innerType):t instanceof Qt?[void 0]:t instanceof Jt?[null]:t instanceof Ke?[void 0,...Et(t.unwrap())]:t instanceof ft?[null,...Et(t.unwrap())]:t instanceof xr||t instanceof dn?Et(t.unwrap()):t instanceof ln?Et(t._def.innerType):[],Lo=class t extends X{_parse(e){let{ctx:n}=this._processInputParams(e);if(n.parsedType!==L.object)return N(n,{code:k.invalid_type,expected:L.object,received:n.parsedType}),F;let r=this.discriminator,o=n.data[r],i=this.optionsMap.get(o);return i?n.common.async?i._parseAsync({data:n.data,path:n.path,parent:n}):i._parseSync({data:n.data,path:n.path,parent:n}):(N(n,{code:k.invalid_union_discriminator,options:Array.from(this.optionsMap.keys()),path:[r]}),F)}get discriminator(){return this._def.discriminator}get options(){return this._def.options}get optionsMap(){return this._def.optionsMap}static create(e,n,r){let o=new Map;for(let i of n){let s=Et(i.shape[e]);if(!s.length)throw new Error(`A discriminator value for key \`${e}\` could not be extracted from all schema options`);for(let a of s){if(o.has(a))throw new Error(`Discriminator property ${String(e)} has duplicate value ${String(a)}`);o.set(a,i)}}return new t({typeName:$.ZodDiscriminatedUnion,discriminator:e,options:n,optionsMap:o,...W(r)})}};function Qa(t,e){let n=ht(t),r=ht(e);if(t===e)return{valid:!0,data:t};if(n===L.object&&r===L.object){let o=K.objectKeys(e),i=K.objectKeys(t).filter(a=>o.indexOf(a)!==-1),s={...t,...e};for(let a of i){let l=Qa(t[a],e[a]);if(!l.valid)return{valid:!1};s[a]=l.data}return{valid:!0,data:s}}else if(n===L.array&&r===L.array){if(t.length!==e.length)return{valid:!1};let o=[];for(let i=0;i<t.length;i++){let s=t[i],a=e[i],l=Qa(s,a);if(!l.valid)return{valid:!1};o.push(l.data)}return{valid:!0,data:o}}else return n===L.date&&r===L.date&&+t==+e?{valid:!0,data:t}:{valid:!1}}var tn=class extends X{_parse(e){let{status:n,ctx:r}=this._processInputParams(e),o=(i,s)=>{if(Oo(i)||Oo(s))return F;let a=Qa(i.value,s.value);return a.valid?((Mo(i)||Mo(s))&&n.dirty(),{status:n.value,value:a.data}):(N(r,{code:k.invalid_intersection_types}),F)};return r.common.async?Promise.all([this._def.left._parseAsync({data:r.data,path:r.path,parent:r}),this._def.right._parseAsync({data:r.data,path:r.path,parent:r})]).then(([i,s])=>o(i,s)):o(this._def.left._parseSync({data:r.data,path:r.path,parent:r}),this._def.right._parseSync({data:r.data,path:r.path,parent:r}))}};tn.create=(t,e,n)=>new tn({left:t,right:e,typeName:$.ZodIntersection,...W(n)});var pt=class t extends X{_parse(e){let{status:n,ctx:r}=this._processInputParams(e);if(r.parsedType!==L.array)return N(r,{code:k.invalid_type,expected:L.array,received:r.parsedType}),F;if(r.data.length<this._def.items.length)return N(r,{code:k.too_small,minimum:this._def.items.length,inclusive:!0,exact:!1,type:"array"}),F;!this._def.rest&&r.data.length>this._def.items.length&&(N(r,{code:k.too_big,maximum:this._def.items.length,inclusive:!0,exact:!1,type:"array"}),n.dirty());let i=[...r.data].map((s,a)=>{let l=this._def.items[a]||this._def.rest;return l?l._parse(new Ze(r,s,r.path,a)):null}).filter(s=>!!s);return r.common.async?Promise.all(i).then(s=>ke.mergeArray(n,s)):ke.mergeArray(n,i)}get items(){return this._def.items}rest(e){return new t({...this._def,rest:e})}};pt.create=(t,e)=>{if(!Array.isArray(t))throw new Error("You must pass an array of schemas to z.tuple([ ... ])");return new pt({items:t,typeName:$.ZodTuple,rest:null,...W(e)})};var Po=class t extends X{get keySchema(){return this._def.keyType}get valueSchema(){return this._def.valueType}_parse(e){let{status:n,ctx:r}=this._processInputParams(e);if(r.parsedType!==L.object)return N(r,{code:k.invalid_type,expected:L.object,received:r.parsedType}),F;let o=[],i=this._def.keyType,s=this._def.valueType;for(let a in r.data)o.push({key:i._parse(new Ze(r,a,r.path,a)),value:s._parse(new Ze(r,r.data[a],r.path,a)),alwaysSet:a in r.data});return r.common.async?ke.mergeObjectAsync(n,o):ke.mergeObjectSync(n,o)}get element(){return this._def.valueType}static create(e,n,r){return n instanceof X?new t({keyType:e,valueType:n,typeName:$.ZodRecord,...W(r)}):new t({keyType:Ot.create(),valueType:e,typeName:$.ZodRecord,...W(n)})}},$n=class extends X{get keySchema(){return this._def.keyType}get valueSchema(){return this._def.valueType}_parse(e){let{status:n,ctx:r}=this._processInputParams(e);if(r.parsedType!==L.map)return N(r,{code:k.invalid_type,expected:L.map,received:r.parsedType}),F;let o=this._def.keyType,i=this._def.valueType,s=[...r.data.entries()].map(([a,l],d)=>({key:o._parse(new Ze(r,a,r.path,[d,"key"])),value:i._parse(new Ze(r,l,r.path,[d,"value"]))}));if(r.common.async){let a=new Map;return Promise.resolve().then(async()=>{for(let l of s){let d=await l.key,u=await l.value;if(d.status==="aborted"||u.status==="aborted")return F;(d.status==="dirty"||u.status==="dirty")&&n.dirty(),a.set(d.value,u.value)}return{status:n.value,value:a}})}else{let a=new Map;for(let l of s){let d=l.key,u=l.value;if(d.status==="aborted"||u.status==="aborted")return F;(d.status==="dirty"||u.status==="dirty")&&n.dirty(),a.set(d.value,u.value)}return{status:n.value,value:a}}}};$n.create=(t,e,n)=>new $n({valueType:e,keyType:t,typeName:$.ZodMap,...W(n)});var Bn=class t extends X{_parse(e){let{status:n,ctx:r}=this._processInputParams(e);if(r.parsedType!==L.set)return N(r,{code:k.invalid_type,expected:L.set,received:r.parsedType}),F;let o=this._def;o.minSize!==null&&r.data.size<o.minSize.value&&(N(r,{code:k.too_small,minimum:o.minSize.value,type:"set",inclusive:!0,exact:!1,message:o.minSize.message}),n.dirty()),o.maxSize!==null&&r.data.size>o.maxSize.value&&(N(r,{code:k.too_big,maximum:o.maxSize.value,type:"set",inclusive:!0,exact:!1,message:o.maxSize.message}),n.dirty());let i=this._def.valueType;function s(l){let d=new Set;for(let u of l){if(u.status==="aborted")return F;u.status==="dirty"&&n.dirty(),d.add(u.value)}return{status:n.value,value:d}}let a=[...r.data.values()].map((l,d)=>i._parse(new Ze(r,l,r.path,d)));return r.common.async?Promise.all(a).then(l=>s(l)):s(a)}min(e,n){return new t({...this._def,minSize:{value:e,message:D.toString(n)}})}max(e,n){return new t({...this._def,maxSize:{value:e,message:D.toString(n)}})}size(e,n){return this.min(e,n).max(e,n)}nonempty(e){return this.min(1,e)}};Bn.create=(t,e)=>new Bn({valueType:t,minSize:null,maxSize:null,typeName:$.ZodSet,...W(e)});var Do=class t extends X{constructor(){super(...arguments),this.validate=this.implement}_parse(e){let{ctx:n}=this._processInputParams(e);if(n.parsedType!==L.function)return N(n,{code:k.invalid_type,expected:L.function,received:n.parsedType}),F;function r(a,l){return wr({data:a,path:n.path,errorMaps:[n.common.contextualErrorMap,n.schemaErrorMap,Un(),xt].filter(d=>!!d),issueData:{code:k.invalid_arguments,argumentsError:l}})}function o(a,l){return wr({data:a,path:n.path,errorMaps:[n.common.contextualErrorMap,n.schemaErrorMap,Un(),xt].filter(d=>!!d),issueData:{code:k.invalid_return_type,returnTypeError:l}})}let i={errorMap:n.common.contextualErrorMap},s=n.data;if(this._def.returns instanceof Lt){let a=this;return Ce(async function(...l){let d=new He([]),u=await a._def.args.parseAsync(l,i).catch(p=>{throw d.addIssue(r(l,p)),d}),m=await Reflect.apply(s,this,u);return await a._def.returns._def.type.parseAsync(m,i).catch(p=>{throw d.addIssue(o(m,p)),d})})}else{let a=this;return Ce(function(...l){let d=a._def.args.safeParse(l,i);if(!d.success)throw new He([r(l,d.error)]);let u=Reflect.apply(s,this,d.data),m=a._def.returns.safeParse(u,i);if(!m.success)throw new He([o(u,m.error)]);return m.data})}}parameters(){return this._def.args}returnType(){return this._def.returns}args(...e){return new t({...this._def,args:pt.create(e).rest(Tt.create())})}returns(e){return new t({...this._def,returns:e})}implement(e){return this.parse(e)}strictImplement(e){return this.parse(e)}static create(e,n,r){return new t({args:e||pt.create([]).rest(Tt.create()),returns:n||Tt.create(),typeName:$.ZodFunction,...W(r)})}},nn=class extends X{get schema(){return this._def.getter()}_parse(e){let{ctx:n}=this._processInputParams(e);return this._def.getter()._parse({data:n.data,path:n.path,parent:n})}};nn.create=(t,e)=>new nn({getter:t,typeName:$.ZodLazy,...W(e)});var rn=class extends X{_parse(e){if(e.data!==this._def.value){let n=this._getOrReturnCtx(e);return N(n,{received:n.data,code:k.invalid_literal,expected:this._def.value}),F}return{status:"valid",value:e.data}}get value(){return this._def.value}};rn.create=(t,e)=>new rn({value:t,typeName:$.ZodLiteral,...W(e)});function Dc(t,e){return new on({values:t,typeName:$.ZodEnum,...W(e)})}var on=class t extends X{_parse(e){if(typeof e.data!="string"){let n=this._getOrReturnCtx(e),r=this._def.values;return N(n,{expected:K.joinValues(r),received:n.parsedType,code:k.invalid_type}),F}if(this._cache||(this._cache=new Set(this._def.values)),!this._cache.has(e.data)){let n=this._getOrReturnCtx(e),r=this._def.values;return N(n,{received:n.data,code:k.invalid_enum_value,options:r}),F}return Ce(e.data)}get options(){return this._def.values}get enum(){let e={};for(let n of this._def.values)e[n]=n;return e}get Values(){let e={};for(let n of this._def.values)e[n]=n;return e}get Enum(){let e={};for(let n of this._def.values)e[n]=n;return e}extract(e,n=this._def){return t.create(e,{...this._def,...n})}exclude(e,n=this._def){return t.create(this.options.filter(r=>!e.includes(r)),{...this._def,...n})}};on.create=Dc;var sn=class extends X{_parse(e){let n=K.getValidEnumValues(this._def.values),r=this._getOrReturnCtx(e);if(r.parsedType!==L.string&&r.parsedType!==L.number){let o=K.objectValues(n);return N(r,{expected:K.joinValues(o),received:r.parsedType,code:k.invalid_type}),F}if(this._cache||(this._cache=new Set(K.getValidEnumValues(this._def.values))),!this._cache.has(e.data)){let o=K.objectValues(n);return N(r,{received:r.data,code:k.invalid_enum_value,options:o}),F}return Ce(e.data)}get enum(){return this._def.values}};sn.create=(t,e)=>new sn({values:t,typeName:$.ZodNativeEnum,...W(e)});var Lt=class extends X{unwrap(){return this._def.type}_parse(e){let{ctx:n}=this._processInputParams(e);if(n.parsedType!==L.promise&&n.common.async===!1)return N(n,{code:k.invalid_type,expected:L.promise,received:n.parsedType}),F;let r=n.parsedType===L.promise?n.data:Promise.resolve(n.data);return Ce(r.then(o=>this._def.type.parseAsync(o,{path:n.path,errorMap:n.common.contextualErrorMap})))}};Lt.create=(t,e)=>new Lt({type:t,typeName:$.ZodPromise,...W(e)});var Qe=class extends X{innerType(){return this._def.schema}sourceType(){return this._def.schema._def.typeName===$.ZodEffects?this._def.schema.sourceType():this._def.schema}_parse(e){let{status:n,ctx:r}=this._processInputParams(e),o=this._def.effect||null,i={addIssue:s=>{N(r,s),s.fatal?n.abort():n.dirty()},get path(){return r.path}};if(i.addIssue=i.addIssue.bind(i),o.type==="preprocess"){let s=o.transform(r.data,i);if(r.common.async)return Promise.resolve(s).then(async a=>{if(n.value==="aborted")return F;let l=await this._def.schema._parseAsync({data:a,path:r.path,parent:r});return l.status==="aborted"?F:l.status==="dirty"?Wt(l.value):n.value==="dirty"?Wt(l.value):l});{if(n.value==="aborted")return F;let a=this._def.schema._parseSync({data:s,path:r.path,parent:r});return a.status==="aborted"?F:a.status==="dirty"?Wt(a.value):n.value==="dirty"?Wt(a.value):a}}if(o.type==="refinement"){let s=a=>{let l=o.refinement(a,i);if(r.common.async)return Promise.resolve(l);if(l instanceof Promise)throw new Error("Async refinement encountered during synchronous parse operation. Use .parseAsync instead.");return a};if(r.common.async===!1){let a=this._def.schema._parseSync({data:r.data,path:r.path,parent:r});return a.status==="aborted"?F:(a.status==="dirty"&&n.dirty(),s(a.value),{status:n.value,value:a.value})}else return this._def.schema._parseAsync({data:r.data,path:r.path,parent:r}).then(a=>a.status==="aborted"?F:(a.status==="dirty"&&n.dirty(),s(a.value).then(()=>({status:n.value,value:a.value}))))}if(o.type==="transform")if(r.common.async===!1){let s=this._def.schema._parseSync({data:r.data,path:r.path,parent:r});if(!Nt(s))return F;let a=o.transform(s.value,i);if(a instanceof Promise)throw new Error("Asynchronous transform encountered during synchronous parse operation. Use .parseAsync instead.");return{status:n.value,value:a}}else return this._def.schema._parseAsync({data:r.data,path:r.path,parent:r}).then(s=>Nt(s)?Promise.resolve(o.transform(s.value,i)).then(a=>({status:n.value,value:a})):F);K.assertNever(o)}};Qe.create=(t,e,n)=>new Qe({schema:t,typeName:$.ZodEffects,effect:e,...W(n)});Qe.createWithPreprocess=(t,e,n)=>new Qe({schema:e,effect:{type:"preprocess",transform:t},typeName:$.ZodEffects,...W(n)});var Ke=class extends X{_parse(e){return this._getType(e)===L.undefined?Ce(void 0):this._def.innerType._parse(e)}unwrap(){return this._def.innerType}};Ke.create=(t,e)=>new Ke({innerType:t,typeName:$.ZodOptional,...W(e)});var ft=class extends X{_parse(e){return this._getType(e)===L.null?Ce(null):this._def.innerType._parse(e)}unwrap(){return this._def.innerType}};ft.create=(t,e)=>new ft({innerType:t,typeName:$.ZodNullable,...W(e)});var an=class extends X{_parse(e){let{ctx:n}=this._processInputParams(e),r=n.data;return n.parsedType===L.undefined&&(r=this._def.defaultValue()),this._def.innerType._parse({data:r,path:n.path,parent:n})}removeDefault(){return this._def.innerType}};an.create=(t,e)=>new an({innerType:t,typeName:$.ZodDefault,defaultValue:typeof e.default=="function"?e.default:()=>e.default,...W(e)});var ln=class extends X{_parse(e){let{ctx:n}=this._processInputParams(e),r={...n,common:{...n.common,issues:[]}},o=this._def.innerType._parse({data:r.data,path:r.path,parent:{...r}});return Hn(o)?o.then(i=>({status:"valid",value:i.status==="valid"?i.value:this._def.catchValue({get error(){return new He(r.common.issues)},input:r.data})})):{status:"valid",value:o.status==="valid"?o.value:this._def.catchValue({get error(){return new He(r.common.issues)},input:r.data})}}removeCatch(){return this._def.innerType}};ln.create=(t,e)=>new ln({innerType:t,typeName:$.ZodCatch,catchValue:typeof e.catch=="function"?e.catch:()=>e.catch,...W(e)});var jn=class extends X{_parse(e){if(this._getType(e)!==L.nan){let r=this._getOrReturnCtx(e);return N(r,{code:k.invalid_type,expected:L.nan,received:r.parsedType}),F}return{status:"valid",value:e.data}}};jn.create=t=>new jn({typeName:$.ZodNaN,...W(t)});var Bm=Symbol("zod_brand"),xr=class extends X{_parse(e){let{ctx:n}=this._processInputParams(e),r=n.data;return this._def.type._parse({data:r,path:n.path,parent:n})}unwrap(){return this._def.type}},Er=class t extends X{_parse(e){let{status:n,ctx:r}=this._processInputParams(e);if(r.common.async)return(async()=>{let i=await this._def.in._parseAsync({data:r.data,path:r.path,parent:r});return i.status==="aborted"?F:i.status==="dirty"?(n.dirty(),Wt(i.value)):this._def.out._parseAsync({data:i.value,path:r.path,parent:r})})();{let o=this._def.in._parseSync({data:r.data,path:r.path,parent:r});return o.status==="aborted"?F:o.status==="dirty"?(n.dirty(),{status:"dirty",value:o.value}):this._def.out._parseSync({data:o.value,path:r.path,parent:r})}}static create(e,n){return new t({in:e,out:n,typeName:$.ZodPipeline})}},dn=class extends X{_parse(e){let n=this._def.innerType._parse(e),r=o=>(Nt(o)&&(o.value=Object.freeze(o.value)),o);return Hn(n)?n.then(o=>r(o)):r(n)}unwrap(){return this._def.innerType}};dn.create=(t,e)=>new dn({innerType:t,typeName:$.ZodReadonly,...W(e)});function Oc(t,e){let n=typeof t=="function"?t(e):typeof t=="string"?{message:t}:t;return typeof n=="string"?{message:n}:n}function Uc(t,e={},n){return t?Mt.create().superRefine((r,o)=>{let i=t(r);if(i instanceof Promise)return i.then(s=>{if(!s){let a=Oc(e,r),l=a.fatal??n??!0;o.addIssue({code:"custom",...a,fatal:l})}});if(!i){let s=Oc(e,r),a=s.fatal??n??!0;o.addIssue({code:"custom",...s,fatal:a})}}):Mt.create()}var jm={object:Ge.lazycreate},$;(function(t){t.ZodString="ZodString",t.ZodNumber="ZodNumber",t.ZodNaN="ZodNaN",t.ZodBigInt="ZodBigInt",t.ZodBoolean="ZodBoolean",t.ZodDate="ZodDate",t.ZodSymbol="ZodSymbol",t.ZodUndefined="ZodUndefined",t.ZodNull="ZodNull",t.ZodAny="ZodAny",t.ZodUnknown="ZodUnknown",t.ZodNever="ZodNever",t.ZodVoid="ZodVoid",t.ZodArray="ZodArray",t.ZodObject="ZodObject",t.ZodUnion="ZodUnion",t.ZodDiscriminatedUnion="ZodDiscriminatedUnion",t.ZodIntersection="ZodIntersection",t.ZodTuple="ZodTuple",t.ZodRecord="ZodRecord",t.ZodMap="ZodMap",t.ZodSet="ZodSet",t.ZodFunction="ZodFunction",t.ZodLazy="ZodLazy",t.ZodLiteral="ZodLiteral",t.ZodEnum="ZodEnum",t.ZodEffects="ZodEffects",t.ZodNativeEnum="ZodNativeEnum",t.ZodOptional="ZodOptional",t.ZodNullable="ZodNullable",t.ZodDefault="ZodDefault",t.ZodCatch="ZodCatch",t.ZodPromise="ZodPromise",t.ZodBranded="ZodBranded",t.ZodPipeline="ZodPipeline",t.ZodReadonly="ZodReadonly"})($||($={}));var Vm=(t,e={message:`Input not instance of ${t.name}`})=>Uc(n=>n instanceof t,e),Hc=Ot.create,Gc=Xt.create,qm=jn.create,Wm=Yt.create,zc=Kt.create,Xm=Zt.create,Ym=zn.create,Km=Qt.create,Zm=Jt.create,Qm=Mt.create,Jm=Tt.create,eg=nt.create,tg=Fn.create,ng=_t.create,rg=Ge.create,og=Ge.strictCreate,ig=en.create,sg=Lo.create,ag=tn.create,lg=pt.create,dg=Po.create,cg=$n.create,ug=Bn.create,hg=Do.create,pg=nn.create,fg=rn.create,mg=on.create,gg=sn.create,vg=Lt.create,bg=Qe.create,yg=Ke.create,wg=ft.create,xg=Qe.createWithPreprocess,Eg=Er.create,Tg=()=>Hc().optional(),_g=()=>Gc().optional(),Sg=()=>zc().optional(),Ag={string:(t=>Ot.create({...t,coerce:!0})),number:(t=>Xt.create({...t,coerce:!0})),boolean:(t=>Kt.create({...t,coerce:!0})),bigint:(t=>Yt.create({...t,coerce:!0})),date:(t=>Zt.create({...t,coerce:!0}))};var kg=F;var Rg=c.record(c.any()),cn=Rg.optional();function Fc(t,e){return e===void 0?t:t===void 0?{...e}:{...t,...e}}var Ig=c.object({name:c.string(),arguments:c.string()}),Cg=c.object({id:c.string(),type:c.literal("function"),function:Ig,encryptedValue:c.string().optional(),metadata:cn}),Uo=c.object({id:c.string(),role:c.string(),content:c.string().optional(),name:c.string().optional(),encryptedValue:c.string().optional(),subagentRunId:c.string().optional(),metadata:cn}),Ng=c.object({type:c.literal("text"),text:c.string()}),Og=c.object({type:c.literal("data"),value:c.string(),mimeType:c.string()}),Mg=c.object({type:c.literal("url"),value:c.string(),mimeType:c.string().optional()}),Ho=c.discriminatedUnion("type",[Og,Mg]),Lg=c.object({type:c.literal("image"),source:Ho,metadata:c.unknown().optional()}),Pg=c.object({type:c.literal("audio"),source:Ho,metadata:c.unknown().optional()}),Dg=c.object({type:c.literal("video"),source:Ho,metadata:c.unknown().optional()}),Ug=c.object({type:c.literal("document"),source:Ho,metadata:c.unknown().optional()});var $c=c.object({type:c.literal("binary"),mimeType:c.string(),id:c.string().optional(),url:c.string().optional(),data:c.string().optional(),filename:c.string().optional()}),Bc=(t,e)=>{!t.id&&!t.url&&!t.data&&e.addIssue({code:c.ZodIssueCode.custom,message:"BinaryInputContent requires at least one of id, url, or data.",path:["id"]})},l_=$c.superRefine((t,e)=>{Bc(t,e)}),Hg=c.discriminatedUnion("type",[Ng,Lg,Pg,Dg,Ug,$c]),Gg=Hg.superRefine((t,e)=>{t.type==="binary"&&Bc(t,e)}),zg=Uo.extend({role:c.literal("developer"),content:c.string()}),Fg=Uo.extend({role:c.literal("system"),content:c.string()}),$g=Uo.extend({role:c.literal("assistant"),content:c.string().optional(),toolCalls:c.array(Cg).optional()}),Bg=Uo.extend({role:c.literal("user"),content:c.union([c.string(),c.array(Gg)])}),jg=c.object({id:c.string(),content:c.string(),role:c.literal("tool"),toolCallId:c.string(),error:c.string().optional(),encryptedValue:c.string().optional(),subagentRunId:c.string().optional(),metadata:cn}),Vg=c.object({id:c.string(),role:c.literal("activity"),activityType:c.string(),content:c.record(c.any()),subagentRunId:c.string().optional(),metadata:cn}),qg=c.object({id:c.string(),role:c.literal("reasoning"),content:c.string(),encryptedValue:c.string().optional(),subagentRunId:c.string().optional(),metadata:cn}),jc=c.discriminatedUnion("role",[zg,Fg,$g,Bg,jg,Vg,qg]),d_=c.union([c.literal("developer"),c.literal("system"),c.literal("assistant"),c.literal("user"),c.literal("tool"),c.literal("activity"),c.literal("reasoning")]),Wg=c.object({description:c.string(),value:c.string()}),Vc=c.object({name:c.string(),description:c.string(),parameters:c.any(),metadata:c.record(c.any()).optional()}),Xg=c.object({id:c.string(),reason:c.string(),message:c.string().optional(),toolCallId:c.string().optional(),responseSchema:c.record(c.any()).optional(),expiresAt:c.string().optional(),metadata:c.record(c.any()).optional(),subagentRunId:c.string().optional()}),Yg=c.object({interruptId:c.string(),status:c.enum(["resolved","cancelled"]),payload:c.any().optional(),metadata:cn}),Kg=c.object({threadId:c.string(),runId:c.string(),parentRunId:c.string().optional(),state:c.any().transform(t=>t??void 0),messages:c.array(jc),tools:c.array(Vc),context:c.array(Wg),forwardedProps:c.any(),resume:c.array(Yg).optional()}),Zg=c.any(),V=class extends Error{constructor(t){super(t)}},Ja=class extends V{constructor(){super("Connect not implemented. This method is not supported by the current agent.")}},Qg=c.object({name:c.string(),description:c.string().optional()}),Jg=c.object({name:c.string().optional(),type:c.string().optional(),description:c.string().optional(),version:c.string().optional(),provider:c.string().optional(),documentationUrl:c.string().optional(),metadata:c.record(c.unknown()).optional()}),ev=c.object({streaming:c.boolean().optional(),websocket:c.boolean().optional(),httpBinary:c.boolean().optional(),pushNotifications:c.boolean().optional(),resumable:c.boolean().optional()}),tv=c.object({supported:c.boolean().optional(),items:c.array(Vc).optional(),parallelCalls:c.boolean().optional(),clientProvided:c.boolean().optional()}),nv=c.object({structuredOutput:c.boolean().optional(),supportedMimeTypes:c.array(c.string()).optional()}),rv=c.object({snapshots:c.boolean().optional(),deltas:c.boolean().optional(),memory:c.boolean().optional(),persistentState:c.boolean().optional()}),ov=c.object({supported:c.boolean().optional(),delegation:c.boolean().optional(),handoffs:c.boolean().optional(),subAgents:c.array(Qg).optional()}),iv=c.object({supported:c.boolean().optional(),streaming:c.boolean().optional(),encrypted:c.boolean().optional()}),sv=c.object({image:c.boolean().optional(),audio:c.boolean().optional(),video:c.boolean().optional(),pdf:c.boolean().optional(),file:c.boolean().optional()}),av=c.object({image:c.boolean().optional(),audio:c.boolean().optional()}),lv=c.object({input:sv.optional(),output:av.optional()}),dv=c.object({codeExecution:c.boolean().optional(),sandboxed:c.boolean().optional(),maxIterations:c.number().optional(),maxExecutionTime:c.number().optional()}),cv=c.object({supported:c.boolean().optional(),approvals:c.boolean().optional(),interventions:c.boolean().optional(),feedback:c.boolean().optional(),interrupts:c.boolean().optional(),approveWithEdits:c.boolean().optional()}),c_=c.object({identity:Jg.optional(),transport:ev.optional(),tools:tv.optional(),output:nv.optional(),state:rv.optional(),multiAgent:ov.optional(),reasoning:iv.optional(),multimodal:lv.optional(),execution:dv.optional(),humanInTheLoop:cv.optional(),custom:c.record(c.unknown()).optional()}),qc=c.union([c.literal("developer"),c.literal("system"),c.literal("assistant"),c.literal("user")]),g=(function(t){return t.TEXT_MESSAGE_START="TEXT_MESSAGE_START",t.TEXT_MESSAGE_CONTENT="TEXT_MESSAGE_CONTENT",t.TEXT_MESSAGE_END="TEXT_MESSAGE_END",t.TEXT_MESSAGE_CHUNK="TEXT_MESSAGE_CHUNK",t.TOOL_CALL_START="TOOL_CALL_START",t.TOOL_CALL_ARGS="TOOL_CALL_ARGS",t.TOOL_CALL_END="TOOL_CALL_END",t.TOOL_CALL_CHUNK="TOOL_CALL_CHUNK",t.TOOL_CALL_RESULT="TOOL_CALL_RESULT",t.THINKING_START="THINKING_START",t.THINKING_END="THINKING_END",t.THINKING_TEXT_MESSAGE_START="THINKING_TEXT_MESSAGE_START",t.THINKING_TEXT_MESSAGE_CONTENT="THINKING_TEXT_MESSAGE_CONTENT",t.THINKING_TEXT_MESSAGE_END="THINKING_TEXT_MESSAGE_END",t.STATE_SNAPSHOT="STATE_SNAPSHOT",t.STATE_DELTA="STATE_DELTA",t.MESSAGES_SNAPSHOT="MESSAGES_SNAPSHOT",t.ACTIVITY_SNAPSHOT="ACTIVITY_SNAPSHOT",t.ACTIVITY_DELTA="ACTIVITY_DELTA",t.RAW="RAW",t.CUSTOM="CUSTOM",t.RUN_STARTED="RUN_STARTED",t.RUN_FINISHED="RUN_FINISHED",t.RUN_ERROR="RUN_ERROR",t.STEP_STARTED="STEP_STARTED",t.STEP_FINISHED="STEP_FINISHED",t.REASONING_START="REASONING_START",t.REASONING_MESSAGE_START="REASONING_MESSAGE_START",t.REASONING_MESSAGE_CONTENT="REASONING_MESSAGE_CONTENT",t.REASONING_MESSAGE_END="REASONING_MESSAGE_END",t.REASONING_MESSAGE_CHUNK="REASONING_MESSAGE_CHUNK",t.REASONING_END="REASONING_END",t.REASONING_ENCRYPTED_VALUE="REASONING_ENCRYPTED_VALUE",t.SUBAGENT_STARTED="SUBAGENT_STARTED",t.SUBAGENT_FINISHED="SUBAGENT_FINISHED",t.SUBAGENT_ERROR="SUBAGENT_ERROR",t})({}),Q=c.object({type:c.nativeEnum(g),timestamp:c.number().optional(),rawEvent:c.any().optional(),metadata:cn}).passthrough(),uv=Q.extend({type:c.literal(g.TEXT_MESSAGE_START),messageId:c.string(),role:qc.default("assistant"),name:c.string().optional(),subagentRunId:c.string().optional()}),Wc=Q.extend({type:c.literal(g.TEXT_MESSAGE_CONTENT),messageId:c.string(),delta:c.string(),subagentRunId:c.string().optional()}),hv=Q.extend({type:c.literal(g.TEXT_MESSAGE_END),messageId:c.string(),subagentRunId:c.string().optional()}),pv=Q.extend({type:c.literal(g.TEXT_MESSAGE_CHUNK),messageId:c.string().optional(),role:qc.optional(),delta:c.string().optional(),name:c.string().optional(),subagentRunId:c.string().optional()}),fv=Q.extend({type:c.literal(g.THINKING_TEXT_MESSAGE_START)}),mv=Wc.omit({messageId:!0,type:!0,subagentRunId:!0}).extend({type:c.literal(g.THINKING_TEXT_MESSAGE_CONTENT)}),gv=Q.extend({type:c.literal(g.THINKING_TEXT_MESSAGE_END)}),vv=Q.extend({type:c.literal(g.TOOL_CALL_START),toolCallId:c.string(),toolCallName:c.string(),parentMessageId:c.string().nullable().optional().transform(t=>t??void 0),subagentRunId:c.string().optional()}),bv=Q.extend({type:c.literal(g.TOOL_CALL_ARGS),toolCallId:c.string(),delta:c.string(),subagentRunId:c.string().optional()}),yv=Q.extend({type:c.literal(g.TOOL_CALL_END),toolCallId:c.string(),subagentRunId:c.string().optional()}),wv=Q.extend({messageId:c.string(),type:c.literal(g.TOOL_CALL_RESULT),toolCallId:c.string(),content:c.string(),role:c.literal("tool").optional(),subagentRunId:c.string().optional()}),xv=Q.extend({type:c.literal(g.TOOL_CALL_CHUNK),toolCallId:c.string().optional(),toolCallName:c.string().optional(),parentMessageId:c.string().nullable().optional().transform(t=>t??void 0),delta:c.string().optional(),subagentRunId:c.string().optional()}),Ev=Q.extend({type:c.literal(g.THINKING_START),title:c.string().optional()}),Tv=Q.extend({type:c.literal(g.THINKING_END)}),_v=Q.extend({type:c.literal(g.STATE_SNAPSHOT),snapshot:Zg,subagentRunId:c.string().optional()}),Sv=Q.extend({type:c.literal(g.STATE_DELTA),delta:c.array(c.any()),subagentRunId:c.string().optional()}),Av=Q.extend({type:c.literal(g.MESSAGES_SNAPSHOT),messages:c.array(jc)}),kv=Q.extend({type:c.literal(g.ACTIVITY_SNAPSHOT),messageId:c.string(),activityType:c.string(),content:c.record(c.any()),replace:c.boolean().optional().default(!0),subagentRunId:c.string().optional()}),Rv=Q.extend({type:c.literal(g.ACTIVITY_DELTA),messageId:c.string(),activityType:c.string(),patch:c.array(c.any()),subagentRunId:c.string().optional()}),Iv=Q.extend({type:c.literal(g.RAW),event:c.any(),source:c.string().optional(),subagentRunId:c.string().optional()}),Cv=Q.extend({type:c.literal(g.CUSTOM),name:c.string(),value:c.any(),subagentRunId:c.string().optional()}),Nv=Q.extend({type:c.literal(g.RUN_STARTED),threadId:c.string(),runId:c.string(),parentRunId:c.string().optional(),input:Kg.optional()}),Ov=c.object({type:c.literal("success")}).strict(),Mv=c.object({type:c.literal("interrupt"),interrupts:c.array(Xg).min(1)}).strict(),Lv=c.discriminatedUnion("type",[Ov,Mv]),Xc=c.object({provider:c.string().optional(),model:c.string().optional(),inputTokens:c.number().int().nonnegative().optional(),outputTokens:c.number().int().nonnegative().optional(),totalTokens:c.number().int().nonnegative().optional(),reasoningTokens:c.number().int().nonnegative().optional(),cachedInputTokens:c.number().int().nonnegative().optional()}),Pv=Q.extend({type:c.literal(g.RUN_FINISHED),threadId:c.string(),runId:c.string(),result:c.any().optional(),outcome:Lv.nullable().optional().transform(t=>t??void 0),usage:c.array(Xc).optional()}),Dv=Q.extend({type:c.literal(g.RUN_ERROR),message:c.string(),code:c.string().optional(),usage:c.array(Xc).optional()}),Uv=Q.extend({type:c.literal(g.STEP_STARTED),stepName:c.string(),subagentRunId:c.string().optional()}),Hv=Q.extend({type:c.literal(g.STEP_FINISHED),stepName:c.string(),subagentRunId:c.string().optional()}),Gv=c.union([c.literal("tool-call"),c.literal("message")]),zv=Q.extend({type:c.literal(g.REASONING_START),messageId:c.string(),subagentRunId:c.string().optional()}),Fv=Q.extend({type:c.literal(g.REASONING_MESSAGE_START),messageId:c.string(),role:c.literal("reasoning"),subagentRunId:c.string().optional()}),$v=Q.extend({type:c.literal(g.REASONING_MESSAGE_CONTENT),messageId:c.string(),delta:c.string(),subagentRunId:c.string().optional()}),Bv=Q.extend({type:c.literal(g.REASONING_MESSAGE_END),messageId:c.string(),subagentRunId:c.string().optional()}),jv=Q.extend({type:c.literal(g.REASONING_MESSAGE_CHUNK),messageId:c.string().optional(),delta:c.string().optional(),subagentRunId:c.string().optional()}),Vv=Q.extend({type:c.literal(g.REASONING_END),messageId:c.string(),subagentRunId:c.string().optional()}),qv=Q.extend({type:c.literal(g.REASONING_ENCRYPTED_VALUE),subtype:Gv,entityId:c.string(),encryptedValue:c.string(),subagentRunId:c.string().optional()}),Wv=Q.extend({type:c.literal(g.SUBAGENT_STARTED),subagentRunId:c.string(),name:c.string(),description:c.string().optional(),parentSubagentRunId:c.string().optional(),parentToolCallId:c.string().optional(),parentMessageId:c.string().optional()}),Xv=c.object({type:c.literal("success")}).strict(),Yv=c.object({type:c.literal("suspended"),interruptIds:c.array(c.string()).optional()}).strict(),Kv=c.discriminatedUnion("type",[Xv,Yv]),Zv=Q.extend({type:c.literal(g.SUBAGENT_FINISHED),subagentRunId:c.string(),result:c.any().optional(),outcome:Kv.optional()}),Qv=Q.extend({type:c.literal(g.SUBAGENT_ERROR),subagentRunId:c.string(),message:c.string(),code:c.string().optional()}),Go=c.discriminatedUnion("type",[uv,Wc,hv,pv,Ev,Tv,fv,mv,gv,vv,bv,yv,xv,wv,_v,Sv,Av,kv,Rv,Iv,Cv,Nv,Pv,Dv,Uv,Hv,zv,Fv,$v,Bv,jv,Vv,qv,Wv,Zv,Qv]);var el={};ba(el,{JsonPatchError:()=>me,_areEquals:()=>Sr,applyOperation:()=>un,applyPatch:()=>qo,applyReducer:()=>rb,deepClone:()=>tb,getValueByPointer:()=>jo,validate:()=>Kc,validator:()=>Vo});var Jv=(function(){var t=function(e,n){return t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(r,o){r.__proto__=o}||function(r,o){for(var i in o)o.hasOwnProperty(i)&&(r[i]=o[i])},t(e,n)};return function(e,n){t(e,n);function r(){this.constructor=e}e.prototype=n===null?Object.create(n):(r.prototype=n.prototype,new r)}})(),eb=Object.prototype.hasOwnProperty;function Fo(t,e){return eb.call(t,e)}function $o(t){if(Array.isArray(t)){for(var e=new Array(t.length),n=0;n<e.length;n++)e[n]=""+n;return e}if(Object.keys)return Object.keys(t);var r=[];for(var o in t)Fo(t,o)&&r.push(o);return r}function Re(t){switch(typeof t){case"object":return JSON.parse(JSON.stringify(t));case"undefined":return null;default:return t}}function Bo(t){for(var e=0,n=t.length,r;e<n;){if(r=t.charCodeAt(e),r>=48&&r<=57){e++;continue}return!1}return!0}function mt(t){return t.indexOf("/")===-1&&t.indexOf("~")===-1?t:t.replace(/~/g,"~0").replace(/\//g,"~1")}function Tr(t){return t.replace(/~1/g,"/").replace(/~0/g,"~")}function zo(t){if(t===void 0)return!0;if(t){if(Array.isArray(t)){for(var e=0,n=t.length;e<n;e++)if(zo(t[e]))return!0}else if(typeof t=="object"){for(var r=$o(t),o=r.length,i=0;i<o;i++)if(zo(t[r[i]]))return!0}}return!1}function Yc(t,e){var n=[t];for(var r in e){var o=typeof e[r]=="object"?JSON.stringify(e[r],null,2):e[r];typeof o<"u"&&n.push(r+": "+o)}return n.join(`
`)}var _r=(function(t){Jv(e,t);function e(n,r,o,i,s){var a=this.constructor,l=t.call(this,Yc(n,{name:r,index:o,operation:i,tree:s}))||this;return l.name=r,l.index=o,l.operation=i,l.tree=s,Object.setPrototypeOf(l,a.prototype),l.message=Yc(n,{name:r,index:o,operation:i,tree:s}),l}return e})(Error);var me=_r,tb=Re,Vn={add:function(t,e,n){return t[e]=this.value,{newDocument:n}},remove:function(t,e,n){var r=t[e];return delete t[e],{newDocument:n,removed:r}},replace:function(t,e,n){var r=t[e];return t[e]=this.value,{newDocument:n,removed:r}},move:function(t,e,n){var r=jo(n,this.path);r&&(r=Re(r));var o=un(n,{op:"remove",path:this.from}).removed;return un(n,{op:"add",path:this.path,value:o}),{newDocument:n,removed:r}},copy:function(t,e,n){var r=jo(n,this.from);return un(n,{op:"add",path:this.path,value:Re(r)}),{newDocument:n}},test:function(t,e,n){return{newDocument:n,test:Sr(t[e],this.value)}},_get:function(t,e,n){return this.value=t[e],{newDocument:n}}},nb={add:function(t,e,n){return Bo(e)?t.splice(e,0,this.value):t[e]=this.value,{newDocument:n,index:e}},remove:function(t,e,n){var r=t.splice(e,1);return{newDocument:n,removed:r[0]}},replace:function(t,e,n){var r=t[e];return t[e]=this.value,{newDocument:n,removed:r}},move:Vn.move,copy:Vn.copy,test:Vn.test,_get:Vn._get};function jo(t,e){if(e=="")return t;var n={op:"_get",path:e};return un(t,n),n.value}function un(t,e,n,r,o,i){if(n===void 0&&(n=!1),r===void 0&&(r=!0),o===void 0&&(o=!0),i===void 0&&(i=0),n&&(typeof n=="function"?n(e,0,t,e.path):Vo(e,0)),e.path===""){var s={newDocument:t};if(e.op==="add")return s.newDocument=e.value,s;if(e.op==="replace")return s.newDocument=e.value,s.removed=t,s;if(e.op==="move"||e.op==="copy")return s.newDocument=jo(t,e.from),e.op==="move"&&(s.removed=t),s;if(e.op==="test"){if(s.test=Sr(t,e.value),s.test===!1)throw new me("Test operation failed","TEST_OPERATION_FAILED",i,e,t);return s.newDocument=t,s}else{if(e.op==="remove")return s.removed=t,s.newDocument=null,s;if(e.op==="_get")return e.value=t,s;if(n)throw new me("Operation `op` property is not one of operations defined in RFC-6902","OPERATION_OP_INVALID",i,e,t);return s}}else{r||(t=Re(t));var a=e.path||"",l=a.split("/"),d=t,u=1,m=l.length,w=void 0,p=void 0,h=void 0;for(typeof n=="function"?h=n:h=Vo;;){if(p=l[u],p&&p.indexOf("~")!=-1&&(p=Tr(p)),o&&(p=="__proto__"||p=="prototype"&&u>0&&l[u-1]=="constructor"))throw new TypeError("JSON-Patch: modifying `__proto__` or `constructor/prototype` prop is banned for security reasons, if this was on purpose, please set `banPrototypeModifications` flag false and pass it to this function. More info in fast-json-patch README");if(n&&w===void 0&&(d[p]===void 0?w=l.slice(0,u).join("/"):u==m-1&&(w=e.path),w!==void 0&&h(e,0,t,w)),u++,Array.isArray(d)){if(p==="-")p=d.length;else{if(n&&!Bo(p))throw new me("Expected an unsigned base-10 integer value, making the new referenced value the array element with the zero-based index","OPERATION_PATH_ILLEGAL_ARRAY_INDEX",i,e,t);Bo(p)&&(p=~~p)}if(u>=m){if(n&&e.op==="add"&&p>d.length)throw new me("The specified index MUST NOT be greater than the number of elements in the array","OPERATION_VALUE_OUT_OF_BOUNDS",i,e,t);var s=nb[e.op].call(e,d,p,t);if(s.test===!1)throw new me("Test operation failed","TEST_OPERATION_FAILED",i,e,t);return s}}else if(u>=m){var s=Vn[e.op].call(e,d,p,t);if(s.test===!1)throw new me("Test operation failed","TEST_OPERATION_FAILED",i,e,t);return s}if(d=d[p],n&&u<m&&(!d||typeof d!="object"))throw new me("Cannot perform operation at the desired path","OPERATION_PATH_UNRESOLVABLE",i,e,t)}}}function qo(t,e,n,r,o){if(r===void 0&&(r=!0),o===void 0&&(o=!0),n&&!Array.isArray(e))throw new me("Patch sequence must be an array","SEQUENCE_NOT_AN_ARRAY");r||(t=Re(t));for(var i=new Array(e.length),s=0,a=e.length;s<a;s++)i[s]=un(t,e[s],n,!0,o,s),t=i[s].newDocument;return i.newDocument=t,i}function rb(t,e,n){var r=un(t,e);if(r.test===!1)throw new me("Test operation failed","TEST_OPERATION_FAILED",n,e,t);return r.newDocument}function Vo(t,e,n,r){if(typeof t!="object"||t===null||Array.isArray(t))throw new me("Operation is not an object","OPERATION_NOT_AN_OBJECT",e,t,n);if(Vn[t.op]){if(typeof t.path!="string")throw new me("Operation `path` property is not a string","OPERATION_PATH_INVALID",e,t,n);if(t.path.indexOf("/")!==0&&t.path.length>0)throw new me('Operation `path` property must start with "/"',"OPERATION_PATH_INVALID",e,t,n);if((t.op==="move"||t.op==="copy")&&typeof t.from!="string")throw new me("Operation `from` property is not present (applicable in `move` and `copy` operations)","OPERATION_FROM_REQUIRED",e,t,n);if((t.op==="add"||t.op==="replace"||t.op==="test")&&t.value===void 0)throw new me("Operation `value` property is not present (applicable in `add`, `replace` and `test` operations)","OPERATION_VALUE_REQUIRED",e,t,n);if((t.op==="add"||t.op==="replace"||t.op==="test")&&zo(t.value))throw new me("Operation `value` property is not present (applicable in `add`, `replace` and `test` operations)","OPERATION_VALUE_CANNOT_CONTAIN_UNDEFINED",e,t,n);if(n){if(t.op=="add"){var o=t.path.split("/").length,i=r.split("/").length;if(o!==i+1&&o!==i)throw new me("Cannot perform an `add` operation at the desired path","OPERATION_PATH_CANNOT_ADD",e,t,n)}else if(t.op==="replace"||t.op==="remove"||t.op==="_get"){if(t.path!==r)throw new me("Cannot perform the operation at a path that does not exist","OPERATION_PATH_UNRESOLVABLE",e,t,n)}else if(t.op==="move"||t.op==="copy"){var s={op:"_get",path:t.from,value:void 0},a=Kc([s],n);if(a&&a.name==="OPERATION_PATH_UNRESOLVABLE")throw new me("Cannot perform the operation from a path that does not exist","OPERATION_FROM_UNRESOLVABLE",e,t,n)}}}else throw new me("Operation `op` property is not one of operations defined in RFC-6902","OPERATION_OP_INVALID",e,t,n)}function Kc(t,e,n){try{if(!Array.isArray(t))throw new me("Patch sequence must be an array","SEQUENCE_NOT_AN_ARRAY");if(e)qo(Re(e),Re(t),n||!0);else{n=n||Vo;for(var r=0;r<t.length;r++)n(t[r],r,e,void 0)}}catch(o){if(o instanceof me)return o;throw o}}function Sr(t,e){if(t===e)return!0;if(t&&e&&typeof t=="object"&&typeof e=="object"){var n=Array.isArray(t),r=Array.isArray(e),o,i,s;if(n&&r){if(i=t.length,i!=e.length)return!1;for(o=i;o--!==0;)if(!Sr(t[o],e[o]))return!1;return!0}if(n!=r)return!1;var a=Object.keys(t);if(i=a.length,i!==Object.keys(e).length)return!1;for(o=i;o--!==0;)if(!e.hasOwnProperty(a[o]))return!1;for(o=i;o--!==0;)if(s=a[o],!Sr(t[s],e[s]))return!1;return!0}return t!==t&&e!==e}var ol={};ba(ol,{compare:()=>ub,generate:()=>tl,observe:()=>cb,unobserve:()=>db});var nl=new WeakMap,ob=(function(){function t(e){this.observers=new Map,this.obj=e}return t})(),ib=(function(){function t(e,n){this.callback=e,this.observer=n}return t})();function sb(t){return nl.get(t)}function ab(t,e){return t.observers.get(e)}function lb(t,e){t.observers.delete(e.callback)}function db(t,e){e.unobserve()}function cb(t,e){var n=[],r,o=sb(t);if(!o)o=new ob(t),nl.set(t,o);else{var i=ab(o,e);r=i&&i.observer}if(r)return r;if(r={},o.value=Re(t),e){r.callback=e,r.next=null;var s=function(){tl(r)},a=function(){clearTimeout(r.next),r.next=setTimeout(s)};typeof window<"u"&&(window.addEventListener("mouseup",a),window.addEventListener("keyup",a),window.addEventListener("mousedown",a),window.addEventListener("keydown",a),window.addEventListener("change",a))}return r.patches=n,r.object=t,r.unobserve=function(){tl(r),clearTimeout(r.next),lb(o,r),typeof window<"u"&&(window.removeEventListener("mouseup",a),window.removeEventListener("keyup",a),window.removeEventListener("mousedown",a),window.removeEventListener("keydown",a),window.removeEventListener("change",a))},o.observers.set(e,new ib(e,r)),r}function tl(t,e){e===void 0&&(e=!1);var n=nl.get(t.object);rl(n.value,t.object,t.patches,"",e),t.patches.length&&qo(n.value,t.patches);var r=t.patches;return r.length>0&&(t.patches=[],t.callback&&t.callback(r)),r}function rl(t,e,n,r,o){if(e!==t){typeof e.toJSON=="function"&&(e=e.toJSON());for(var i=$o(e),s=$o(t),a=!1,l=!1,d=s.length-1;d>=0;d--){var u=s[d],m=t[u];if(Fo(e,u)&&!(e[u]===void 0&&m!==void 0&&Array.isArray(e)===!1)){var w=e[u];typeof m=="object"&&m!=null&&typeof w=="object"&&w!=null&&Array.isArray(m)===Array.isArray(w)?rl(m,w,n,r+"/"+mt(u),o):m!==w&&(a=!0,o&&n.push({op:"test",path:r+"/"+mt(u),value:Re(m)}),n.push({op:"replace",path:r+"/"+mt(u),value:Re(w)}))}else Array.isArray(t)===Array.isArray(e)?(o&&n.push({op:"test",path:r+"/"+mt(u),value:Re(m)}),n.push({op:"remove",path:r+"/"+mt(u)}),l=!0):(o&&n.push({op:"test",path:r,value:t}),n.push({op:"replace",path:r,value:e}),a=!0)}if(!(!l&&i.length==s.length))for(var d=0;d<i.length;d++){var u=i[d];!Fo(t,u)&&e[u]!==void 0&&n.push({op:"add",path:r+"/"+mt(u),value:Re(e[u])})}}}function ub(t,e,n){n===void 0&&(n=!1);var r=[];return rl(t,e,r,"",n),r}var Wo=Object.assign({},el,ol,{JsonPatchError:_r,deepClone:Re,escapePathComponent:mt,unescapePathComponent:Tr});var il=function(t,e){return il=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(n,r){n.__proto__=r}||function(n,r){for(var o in r)Object.prototype.hasOwnProperty.call(r,o)&&(n[o]=r[o])},il(t,e)};function gt(t,e){if(typeof e!="function"&&e!==null)throw new TypeError("Class extends value "+String(e)+" is not a constructor or null");il(t,e);function n(){this.constructor=t}t.prototype=e===null?Object.create(e):(n.prototype=e.prototype,new n)}function Zc(t,e,n,r){function o(i){return i instanceof n?i:new n(function(s){s(i)})}return new(n||(n=Promise))(function(i,s){function a(u){try{d(r.next(u))}catch(m){s(m)}}function l(u){try{d(r.throw(u))}catch(m){s(m)}}function d(u){u.done?i(u.value):o(u.value).then(a,l)}d((r=r.apply(t,e||[])).next())})}function Xo(t,e){var n={label:0,sent:function(){if(i[0]&1)throw i[1];return i[1]},trys:[],ops:[]},r,o,i,s=Object.create((typeof Iterator=="function"?Iterator:Object).prototype);return s.next=a(0),s.throw=a(1),s.return=a(2),typeof Symbol=="function"&&(s[Symbol.iterator]=function(){return this}),s;function a(d){return function(u){return l([d,u])}}function l(d){if(r)throw new TypeError("Generator is already executing.");for(;s&&(s=0,d[0]&&(n=0)),n;)try{if(r=1,o&&(i=d[0]&2?o.return:d[0]?o.throw||((i=o.return)&&i.call(o),0):o.next)&&!(i=i.call(o,d[1])).done)return i;switch(o=0,i&&(d=[d[0]&2,i.value]),d[0]){case 0:case 1:i=d;break;case 4:return n.label++,{value:d[1],done:!1};case 5:n.label++,o=d[1],d=[0];continue;case 7:d=n.ops.pop(),n.trys.pop();continue;default:if(i=n.trys,!(i=i.length>0&&i[i.length-1])&&(d[0]===6||d[0]===2)){n=0;continue}if(d[0]===3&&(!i||d[1]>i[0]&&d[1]<i[3])){n.label=d[1];break}if(d[0]===6&&n.label<i[1]){n.label=i[1],i=d;break}if(i&&n.label<i[2]){n.label=i[2],n.ops.push(d);break}i[2]&&n.ops.pop(),n.trys.pop();continue}d=e.call(t,n)}catch(u){d=[6,u],o=0}finally{r=i=0}if(d[0]&5)throw d[1];return{value:d[0]?d[1]:void 0,done:!0}}}function St(t){var e=typeof Symbol=="function"&&Symbol.iterator,n=e&&t[e],r=0;if(n)return n.call(t);if(t&&typeof t.length=="number")return{next:function(){return t&&r>=t.length&&(t=void 0),{value:t&&t[r++],done:!t}}};throw new TypeError(e?"Object is not iterable.":"Symbol.iterator is not defined.")}function qn(t,e){var n=typeof Symbol=="function"&&t[Symbol.iterator];if(!n)return t;var r=n.call(t),o,i=[],s;try{for(;(e===void 0||e-- >0)&&!(o=r.next()).done;)i.push(o.value)}catch(a){s={error:a}}finally{try{o&&!o.done&&(n=r.return)&&n.call(r)}finally{if(s)throw s.error}}return i}function Wn(t,e,n){if(n||arguments.length===2)for(var r=0,o=e.length,i;r<o;r++)(i||!(r in e))&&(i||(i=Array.prototype.slice.call(e,0,r)),i[r]=e[r]);return t.concat(i||Array.prototype.slice.call(e))}function hn(t){return this instanceof hn?(this.v=t,this):new hn(t)}function Qc(t,e,n){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var r=n.apply(t,e||[]),o,i=[];return o=Object.create((typeof AsyncIterator=="function"?AsyncIterator:Object).prototype),a("next"),a("throw"),a("return",s),o[Symbol.asyncIterator]=function(){return this},o;function s(p){return function(h){return Promise.resolve(h).then(p,m)}}function a(p,h){r[p]&&(o[p]=function(v){return new Promise(function(x,S){i.push([p,v,x,S])>1||l(p,v)})},h&&(o[p]=h(o[p])))}function l(p,h){try{d(r[p](h))}catch(v){w(i[0][3],v)}}function d(p){p.value instanceof hn?Promise.resolve(p.value.v).then(u,m):w(i[0][2],p)}function u(p){l("next",p)}function m(p){l("throw",p)}function w(p,h){p(h),i.shift(),i.length&&l(i[0][0],i[0][1])}}function Jc(t){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var e=t[Symbol.asyncIterator],n;return e?e.call(t):(t=typeof St=="function"?St(t):t[Symbol.iterator](),n={},r("next"),r("throw"),r("return"),n[Symbol.asyncIterator]=function(){return this},n);function r(i){n[i]=t[i]&&function(s){return new Promise(function(a,l){s=t[i](s),o(a,l,s.done,s.value)})}}function o(i,s,a,l){Promise.resolve(l).then(function(d){i({value:d,done:a})},s)}}function Y(t){return typeof t=="function"}function Xn(t){var e=function(r){Error.call(r),r.stack=new Error().stack},n=t(e);return n.prototype=Object.create(Error.prototype),n.prototype.constructor=n,n}var Yo=Xn(function(t){return function(n){t(this),this.message=n?n.length+` errors occurred during unsubscription:
`+n.map(function(r,o){return o+1+") "+r.toString()}).join(`
  `):"",this.name="UnsubscriptionError",this.errors=n}});function Ar(t,e){if(t){var n=t.indexOf(e);0<=n&&t.splice(n,1)}}var Yn=(function(){function t(e){this.initialTeardown=e,this.closed=!1,this._parentage=null,this._finalizers=null}return t.prototype.unsubscribe=function(){var e,n,r,o,i;if(!this.closed){this.closed=!0;var s=this._parentage;if(s)if(this._parentage=null,Array.isArray(s))try{for(var a=St(s),l=a.next();!l.done;l=a.next()){var d=l.value;d.remove(this)}}catch(v){e={error:v}}finally{try{l&&!l.done&&(n=a.return)&&n.call(a)}finally{if(e)throw e.error}}else s.remove(this);var u=this.initialTeardown;if(Y(u))try{u()}catch(v){i=v instanceof Yo?v.errors:[v]}var m=this._finalizers;if(m){this._finalizers=null;try{for(var w=St(m),p=w.next();!p.done;p=w.next()){var h=p.value;try{eu(h)}catch(v){i=i??[],v instanceof Yo?i=Wn(Wn([],qn(i)),qn(v.errors)):i.push(v)}}}catch(v){r={error:v}}finally{try{p&&!p.done&&(o=w.return)&&o.call(w)}finally{if(r)throw r.error}}}if(i)throw new Yo(i)}},t.prototype.add=function(e){var n;if(e&&e!==this)if(this.closed)eu(e);else{if(e instanceof t){if(e.closed||e._hasParent(this))return;e._addParent(this)}(this._finalizers=(n=this._finalizers)!==null&&n!==void 0?n:[]).push(e)}},t.prototype._hasParent=function(e){var n=this._parentage;return n===e||Array.isArray(n)&&n.includes(e)},t.prototype._addParent=function(e){var n=this._parentage;this._parentage=Array.isArray(n)?(n.push(e),n):n?[n,e]:e},t.prototype._removeParent=function(e){var n=this._parentage;n===e?this._parentage=null:Array.isArray(n)&&Ar(n,e)},t.prototype.remove=function(e){var n=this._finalizers;n&&Ar(n,e),e instanceof t&&e._removeParent(this)},t.EMPTY=(function(){var e=new t;return e.closed=!0,e})(),t})();var sl=Yn.EMPTY;function Ko(t){return t instanceof Yn||t&&"closed"in t&&Y(t.remove)&&Y(t.add)&&Y(t.unsubscribe)}function eu(t){Y(t)?t():t.unsubscribe()}var rt={onUnhandledError:null,onStoppedNotification:null,Promise:void 0,useDeprecatedSynchronousErrorHandling:!1,useDeprecatedNextContext:!1};var Kn={setTimeout:function(t,e){for(var n=[],r=2;r<arguments.length;r++)n[r-2]=arguments[r];var o=Kn.delegate;return o?.setTimeout?o.setTimeout.apply(o,Wn([t,e],qn(n))):setTimeout.apply(void 0,Wn([t,e],qn(n)))},clearTimeout:function(t){var e=Kn.delegate;return(e?.clearTimeout||clearTimeout)(t)},delegate:void 0};function Zo(t){Kn.setTimeout(function(){var e=rt.onUnhandledError;if(e)e(t);else throw t})}function kr(){}var tu=(function(){return al("C",void 0,void 0)})();function nu(t){return al("E",void 0,t)}function ru(t){return al("N",t,void 0)}function al(t,e,n){return{kind:t,value:e,error:n}}var pn=null;function Zn(t){if(rt.useDeprecatedSynchronousErrorHandling){var e=!pn;if(e&&(pn={errorThrown:!1,error:null}),t(),e){var n=pn,r=n.errorThrown,o=n.error;if(pn=null,r)throw o}}else t()}function ou(t){rt.useDeprecatedSynchronousErrorHandling&&pn&&(pn.errorThrown=!0,pn.error=t)}var Rr=(function(t){gt(e,t);function e(n){var r=t.call(this)||this;return r.isStopped=!1,n?(r.destination=n,Ko(n)&&n.add(r)):r.destination=mb,r}return e.create=function(n,r,o){return new Jo(n,r,o)},e.prototype.next=function(n){this.isStopped?dl(ru(n),this):this._next(n)},e.prototype.error=function(n){this.isStopped?dl(nu(n),this):(this.isStopped=!0,this._error(n))},e.prototype.complete=function(){this.isStopped?dl(tu,this):(this.isStopped=!0,this._complete())},e.prototype.unsubscribe=function(){this.closed||(this.isStopped=!0,t.prototype.unsubscribe.call(this),this.destination=null)},e.prototype._next=function(n){this.destination.next(n)},e.prototype._error=function(n){try{this.destination.error(n)}finally{this.unsubscribe()}},e.prototype._complete=function(){try{this.destination.complete()}finally{this.unsubscribe()}},e})(Yn);var hb=Function.prototype.bind;function ll(t,e){return hb.call(t,e)}var pb=(function(){function t(e){this.partialObserver=e}return t.prototype.next=function(e){var n=this.partialObserver;if(n.next)try{n.next(e)}catch(r){Qo(r)}},t.prototype.error=function(e){var n=this.partialObserver;if(n.error)try{n.error(e)}catch(r){Qo(r)}else Qo(e)},t.prototype.complete=function(){var e=this.partialObserver;if(e.complete)try{e.complete()}catch(n){Qo(n)}},t})(),Jo=(function(t){gt(e,t);function e(n,r,o){var i=t.call(this)||this,s;if(Y(n)||!n)s={next:n??void 0,error:r??void 0,complete:o??void 0};else{var a;i&&rt.useDeprecatedNextContext?(a=Object.create(n),a.unsubscribe=function(){return i.unsubscribe()},s={next:n.next&&ll(n.next,a),error:n.error&&ll(n.error,a),complete:n.complete&&ll(n.complete,a)}):s=n}return i.destination=new pb(s),i}return e})(Rr);function Qo(t){rt.useDeprecatedSynchronousErrorHandling?ou(t):Zo(t)}function fb(t){throw t}function dl(t,e){var n=rt.onStoppedNotification;n&&Kn.setTimeout(function(){return n(t,e)})}var mb={closed:!0,next:kr,error:fb,complete:kr};var Qn=(function(){return typeof Symbol=="function"&&Symbol.observable||"@@observable"})();function Jn(t){return t}function ei(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];return cl(t)}function cl(t){return t.length===0?Jn:t.length===1?t[0]:function(n){return t.reduce(function(r,o){return o(r)},n)}}var ce=(function(){function t(e){e&&(this._subscribe=e)}return t.prototype.lift=function(e){var n=new t;return n.source=this,n.operator=e,n},t.prototype.subscribe=function(e,n,r){var o=this,i=vb(e)?e:new Jo(e,n,r);return Zn(function(){var s=o,a=s.operator,l=s.source;i.add(a?a.call(i,l):l?o._subscribe(i):o._trySubscribe(i))}),i},t.prototype._trySubscribe=function(e){try{return this._subscribe(e)}catch(n){e.error(n)}},t.prototype.forEach=function(e,n){var r=this;return n=iu(n),new n(function(o,i){var s=new Jo({next:function(a){try{e(a)}catch(l){i(l),s.unsubscribe()}},error:i,complete:o});r.subscribe(s)})},t.prototype._subscribe=function(e){var n;return(n=this.source)===null||n===void 0?void 0:n.subscribe(e)},t.prototype[Qn]=function(){return this},t.prototype.pipe=function(){for(var e=[],n=0;n<arguments.length;n++)e[n]=arguments[n];return cl(e)(this)},t.prototype.toPromise=function(e){var n=this;return e=iu(e),new e(function(r,o){var i;n.subscribe(function(s){return i=s},function(s){return o(s)},function(){return r(i)})})},t.create=function(e){return new t(e)},t})();function iu(t){var e;return(e=t??rt.Promise)!==null&&e!==void 0?e:Promise}function gb(t){return t&&Y(t.next)&&Y(t.error)&&Y(t.complete)}function vb(t){return t&&t instanceof Rr||gb(t)&&Ko(t)}function bb(t){return Y(t?.lift)}function ge(t){return function(e){if(bb(e))return e.lift(function(n){try{return t(n,this)}catch(r){this.error(r)}});throw new TypeError("Unable to lift unknown Observable type")}}function ye(t,e,n,r,o){return new yb(t,e,n,r,o)}var yb=(function(t){gt(e,t);function e(n,r,o,i,s,a){var l=t.call(this,n)||this;return l.onFinalize=s,l.shouldUnsubscribe=a,l._next=r?function(d){try{r(d)}catch(u){n.error(u)}}:t.prototype._next,l._error=i?function(d){try{i(d)}catch(u){n.error(u)}finally{this.unsubscribe()}}:t.prototype._error,l._complete=o?function(){try{o()}catch(d){n.error(d)}finally{this.unsubscribe()}}:t.prototype._complete,l}return e.prototype.unsubscribe=function(){var n;if(!this.shouldUnsubscribe||this.shouldUnsubscribe()){var r=this.closed;t.prototype.unsubscribe.call(this),!r&&((n=this.onFinalize)===null||n===void 0||n.call(this))}},e})(Rr);var su=Xn(function(t){return function(){t(this),this.name="ObjectUnsubscribedError",this.message="object unsubscribed"}});var vt=(function(t){gt(e,t);function e(){var n=t.call(this)||this;return n.closed=!1,n.currentObservers=null,n.observers=[],n.isStopped=!1,n.hasError=!1,n.thrownError=null,n}return e.prototype.lift=function(n){var r=new au(this,this);return r.operator=n,r},e.prototype._throwIfClosed=function(){if(this.closed)throw new su},e.prototype.next=function(n){var r=this;Zn(function(){var o,i;if(r._throwIfClosed(),!r.isStopped){r.currentObservers||(r.currentObservers=Array.from(r.observers));try{for(var s=St(r.currentObservers),a=s.next();!a.done;a=s.next()){var l=a.value;l.next(n)}}catch(d){o={error:d}}finally{try{a&&!a.done&&(i=s.return)&&i.call(s)}finally{if(o)throw o.error}}}})},e.prototype.error=function(n){var r=this;Zn(function(){if(r._throwIfClosed(),!r.isStopped){r.hasError=r.isStopped=!0,r.thrownError=n;for(var o=r.observers;o.length;)o.shift().error(n)}})},e.prototype.complete=function(){var n=this;Zn(function(){if(n._throwIfClosed(),!n.isStopped){n.isStopped=!0;for(var r=n.observers;r.length;)r.shift().complete()}})},e.prototype.unsubscribe=function(){this.isStopped=this.closed=!0,this.observers=this.currentObservers=null},Object.defineProperty(e.prototype,"observed",{get:function(){var n;return((n=this.observers)===null||n===void 0?void 0:n.length)>0},enumerable:!1,configurable:!0}),e.prototype._trySubscribe=function(n){return this._throwIfClosed(),t.prototype._trySubscribe.call(this,n)},e.prototype._subscribe=function(n){return this._throwIfClosed(),this._checkFinalizedStatuses(n),this._innerSubscribe(n)},e.prototype._innerSubscribe=function(n){var r=this,o=this,i=o.hasError,s=o.isStopped,a=o.observers;return i||s?sl:(this.currentObservers=null,a.push(n),new Yn(function(){r.currentObservers=null,Ar(a,n)}))},e.prototype._checkFinalizedStatuses=function(n){var r=this,o=r.hasError,i=r.thrownError,s=r.isStopped;o?n.error(i):s&&n.complete()},e.prototype.asObservable=function(){var n=new ce;return n.source=this,n},e.create=function(n,r){return new au(n,r)},e})(ce);var au=(function(t){gt(e,t);function e(n,r){var o=t.call(this)||this;return o.destination=n,o.source=r,o}return e.prototype.next=function(n){var r,o;(o=(r=this.destination)===null||r===void 0?void 0:r.next)===null||o===void 0||o.call(r,n)},e.prototype.error=function(n){var r,o;(o=(r=this.destination)===null||r===void 0?void 0:r.error)===null||o===void 0||o.call(r,n)},e.prototype.complete=function(){var n,r;(r=(n=this.destination)===null||n===void 0?void 0:n.complete)===null||r===void 0||r.call(n)},e.prototype._subscribe=function(n){var r,o;return(o=(r=this.source)===null||r===void 0?void 0:r.subscribe(n))!==null&&o!==void 0?o:sl},e})(vt);var ul={now:function(){return(ul.delegate||Date).now()},delegate:void 0};var ti=(function(t){gt(e,t);function e(n,r,o){n===void 0&&(n=1/0),r===void 0&&(r=1/0),o===void 0&&(o=ul);var i=t.call(this)||this;return i._bufferSize=n,i._windowTime=r,i._timestampProvider=o,i._buffer=[],i._infiniteTimeWindow=!0,i._infiniteTimeWindow=r===1/0,i._bufferSize=Math.max(1,n),i._windowTime=Math.max(1,r),i}return e.prototype.next=function(n){var r=this,o=r.isStopped,i=r._buffer,s=r._infiniteTimeWindow,a=r._timestampProvider,l=r._windowTime;o||(i.push(n),!s&&i.push(a.now()+l)),this._trimBuffer(),t.prototype.next.call(this,n)},e.prototype._subscribe=function(n){this._throwIfClosed(),this._trimBuffer();for(var r=this._innerSubscribe(n),o=this,i=o._infiniteTimeWindow,s=o._buffer,a=s.slice(),l=0;l<a.length&&!n.closed;l+=i?1:2)n.next(a[l]);return this._checkFinalizedStatuses(n),r},e.prototype._trimBuffer=function(){var n=this,r=n._bufferSize,o=n._timestampProvider,i=n._buffer,s=n._infiniteTimeWindow,a=(s?1:2)*r;if(r<1/0&&a<i.length&&i.splice(0,i.length-a),!s){for(var l=o.now(),d=0,u=1;u<i.length&&i[u]<=l;u+=2)d=u;d&&i.splice(0,d+1)}},e})(vt);var ni=new ce(function(t){return t.complete()});function lu(t){return t&&Y(t.schedule)}function wb(t){return t[t.length-1]}function du(t){return lu(wb(t))?t.pop():void 0}var ri=(function(t){return t&&typeof t.length=="number"&&typeof t!="function"});function oi(t){return Y(t?.then)}function ii(t){return Y(t[Qn])}function si(t){return Symbol.asyncIterator&&Y(t?.[Symbol.asyncIterator])}function ai(t){return new TypeError("You provided "+(t!==null&&typeof t=="object"?"an invalid object":"'"+t+"'")+" where a stream was expected. You can provide an Observable, Promise, ReadableStream, Array, AsyncIterable, or Iterable.")}function xb(){return typeof Symbol!="function"||!Symbol.iterator?"@@iterator":Symbol.iterator}var li=xb();function di(t){return Y(t?.[li])}function ci(t){return Qc(this,arguments,function(){var n,r,o,i;return Xo(this,function(s){switch(s.label){case 0:n=t.getReader(),s.label=1;case 1:s.trys.push([1,,9,10]),s.label=2;case 2:return[4,hn(n.read())];case 3:return r=s.sent(),o=r.value,i=r.done,i?[4,hn(void 0)]:[3,5];case 4:return[2,s.sent()];case 5:return[4,hn(o)];case 6:return[4,s.sent()];case 7:return s.sent(),[3,2];case 8:return[3,10];case 9:return n.releaseLock(),[7];case 10:return[2]}})})}function ui(t){return Y(t?.getReader)}function _e(t){if(t instanceof ce)return t;if(t!=null){if(ii(t))return Eb(t);if(ri(t))return Tb(t);if(oi(t))return _b(t);if(si(t))return cu(t);if(di(t))return Sb(t);if(ui(t))return Ab(t)}throw ai(t)}function Eb(t){return new ce(function(e){var n=t[Qn]();if(Y(n.subscribe))return n.subscribe(e);throw new TypeError("Provided object does not correctly implement Symbol.observable")})}function Tb(t){return new ce(function(e){for(var n=0;n<t.length&&!e.closed;n++)e.next(t[n]);e.complete()})}function _b(t){return new ce(function(e){t.then(function(n){e.closed||(e.next(n),e.complete())},function(n){return e.error(n)}).then(null,Zo)})}function Sb(t){return new ce(function(e){var n,r;try{for(var o=St(t),i=o.next();!i.done;i=o.next()){var s=i.value;if(e.next(s),e.closed)return}}catch(a){n={error:a}}finally{try{i&&!i.done&&(r=o.return)&&r.call(o)}finally{if(n)throw n.error}}e.complete()})}function cu(t){return new ce(function(e){kb(t,e).catch(function(n){return e.error(n)})})}function Ab(t){return cu(ci(t))}function kb(t,e){var n,r,o,i;return Zc(this,void 0,void 0,function(){var s,a;return Xo(this,function(l){switch(l.label){case 0:l.trys.push([0,5,6,11]),n=Jc(t),l.label=1;case 1:return[4,n.next()];case 2:if(r=l.sent(),!!r.done)return[3,4];if(s=r.value,e.next(s),e.closed)return[2];l.label=3;case 3:return[3,1];case 4:return[3,11];case 5:return a=l.sent(),o={error:a},[3,11];case 6:return l.trys.push([6,,9,10]),r&&!r.done&&(i=n.return)?[4,i.call(n)]:[3,8];case 7:l.sent(),l.label=8;case 8:return[3,10];case 9:if(o)throw o.error;return[7];case 10:return[7];case 11:return e.complete(),[2]}})})}function Je(t,e,n,r,o){r===void 0&&(r=0),o===void 0&&(o=!1);var i=e.schedule(function(){n(),o?t.add(this.schedule(null,r)):this.unsubscribe()},r);if(t.add(i),!o)return i}function hi(t,e){return e===void 0&&(e=0),ge(function(n,r){n.subscribe(ye(r,function(o){return Je(r,t,function(){return r.next(o)},e)},function(){return Je(r,t,function(){return r.complete()},e)},function(o){return Je(r,t,function(){return r.error(o)},e)}))})}function pi(t,e){return e===void 0&&(e=0),ge(function(n,r){r.add(t.schedule(function(){return n.subscribe(r)},e))})}function uu(t,e){return _e(t).pipe(pi(e),hi(e))}function hu(t,e){return _e(t).pipe(pi(e),hi(e))}function pu(t,e){return new ce(function(n){var r=0;return e.schedule(function(){r===t.length?n.complete():(n.next(t[r++]),n.closed||this.schedule())})})}function fu(t,e){return new ce(function(n){var r;return Je(n,e,function(){r=t[li](),Je(n,e,function(){var o,i,s;try{o=r.next(),i=o.value,s=o.done}catch(a){n.error(a);return}s?n.complete():n.next(i)},0,!0)}),function(){return Y(r?.return)&&r.return()}})}function fi(t,e){if(!t)throw new Error("Iterable cannot be null");return new ce(function(n){Je(n,e,function(){var r=t[Symbol.asyncIterator]();Je(n,e,function(){r.next().then(function(o){o.done?n.complete():n.next(o.value)})},0,!0)})})}function mu(t,e){return fi(ci(t),e)}function gu(t,e){if(t!=null){if(ii(t))return uu(t,e);if(ri(t))return pu(t,e);if(oi(t))return hu(t,e);if(si(t))return fi(t,e);if(di(t))return fu(t,e);if(ui(t))return mu(t,e)}throw ai(t)}function fn(t,e){return e?gu(t,e):_e(t)}function ne(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];var n=du(t);return fn(t,n)}function z(t,e){var n=Y(t)?t:function(){return t},r=function(o){return o.error(n())};return new ce(e?function(o){return e.schedule(r,0,o)}:r)}var vu=Xn(function(t){return function(){t(this),this.name="EmptyError",this.message="no elements in sequence"}});function mi(t,e){var n=typeof e=="object";return new Promise(function(r,o){var i=!1,s;t.subscribe({next:function(a){s=a,i=!0},error:o,complete:function(){i?r(s):n?r(e.defaultValue):o(new vu)}})})}function Pt(t,e){return ge(function(n,r){var o=0;n.subscribe(ye(r,function(i){r.next(t.call(e,i,o++))}))})}function bu(t,e,n,r,o,i,s,a){var l=[],d=0,u=0,m=!1,w=function(){m&&!l.length&&!d&&e.complete()},p=function(v){return d<r?h(v):l.push(v)},h=function(v){i&&e.next(v),d++;var x=!1;_e(n(v,u++)).subscribe(ye(e,function(S){o?.(S),i?p(S):e.next(S)},function(){x=!0},void 0,function(){if(x)try{d--;for(var S=function(){var _=l.shift();s?Je(e,s,function(){return h(_)}):h(_)};l.length&&d<r;)S();w()}catch(_){e.error(_)}}))};return t.subscribe(ye(e,p,function(){m=!0,w()})),function(){a?.()}}function ze(t,e,n){return n===void 0&&(n=1/0),Y(e)?ze(function(r,o){return Pt(function(i,s){return e(r,i,o,s)})(_e(t(r,o)))},n):(typeof e=="number"&&(n=e),ge(function(r,o){return bu(r,o,t,n)}))}function hl(t){return t===void 0&&(t=1/0),ze(Jn,t)}function gi(t){return new ce(function(e){_e(t()).subscribe(e)})}function pl(t,e){return ge(function(n,r){var o=0;n.subscribe(ye(r,function(i){return t.call(e,i,o++)&&r.next(i)}))})}function Ir(t){return ge(function(e,n){var r=null,o=!1,i;r=e.subscribe(ye(n,void 0,void 0,function(s){i=_e(t(s,Ir(t)(e))),r?(r.unsubscribe(),r=null,i.subscribe(n)):o=!0})),o&&(r.unsubscribe(),r=null,i.subscribe(n))})}function vi(t,e){return Y(e)?ze(t,e,1):ze(t,1)}function fl(t){return ge(function(e,n){var r=!1;e.subscribe(ye(n,function(o){r=!0,n.next(o)},function(){r||n.next(t),n.complete()}))})}function mn(t){return ge(function(e,n){try{e.subscribe(n)}finally{n.add(t)}})}function ml(t,e){return ge(function(n,r){var o=null,i=0,s=!1,a=function(){return s&&!o&&r.complete()};n.subscribe(ye(r,function(l){o?.unsubscribe();var d=0,u=i++;_e(t(l,u)).subscribe(o=ye(r,function(m){return r.next(e?e(l,m,u,d++):m)},function(){o=null,a()}))},function(){s=!0,a()}))})}function bi(t){return ge(function(e,n){_e(t).subscribe(ye(n,function(){return n.complete()},kr)),!n.closed&&e.subscribe(n)})}function yi(t,e,n){var r=Y(t)||e||n?{next:t,error:e,complete:n}:t;return r?ge(function(o,i){var s;(s=r.subscribe)===null||s===void 0||s.call(r);var a=!0;o.subscribe(ye(i,function(l){var d;(d=r.next)===null||d===void 0||d.call(r,l),i.next(l)},function(){var l;a=!1,(l=r.complete)===null||l===void 0||l.call(r),i.complete()},function(l){var d;a=!1,(d=r.error)===null||d===void 0||d.call(r,l),i.error(l)},function(){var l,d;a&&((l=r.unsubscribe)===null||l===void 0||l.call(r)),(d=r.finalize)===null||d===void 0||d.call(r)}))}):Jn}function yu(t){return` \r
	`.indexOf(t)>=0}function wi(t){for(var e=["topLevel"],n=0,r,o,i,s=function(_){return e.push(_)},a=function(_){return e[e.length-1]=_},l=function(_){r==null&&(r=n,o=e.length,i=_)},d=function(_){_===i&&(r=void 0,o=void 0,i=void 0)},u=function(){return e.pop()},m=function(){return n--},w=function(_){if("0"<=_&&_<="9"){s("number");return}switch(_){case'"':s("string");return;case"-":s("numberNeedsDigit");return;case"t":s("true");return;case"f":s("false");return;case"n":s("null");return;case"[":s("arrayNeedsValue");return;case"{":s("objectNeedsKey");return}},p=t.length;n<p;n++){var h=t[n];switch(e[e.length-1]){case"topLevel":w(h);break;case"string":switch(h){case'"':u();break;case"\\":l("stringEscape"),s("stringEscaped");break}break;case"stringEscaped":h==="u"?s("stringUnicode"):(d("stringEscape"),u());break;case"stringUnicode":n-t.lastIndexOf("u",n)===4&&(d("stringEscape"),u());break;case"number":h==="."?a("numberNeedsDigit"):h==="e"||h==="E"?a("numberNeedsExponent"):(h<"0"||h>"9")&&(m(),u());break;case"numberNeedsDigit":a("number");break;case"numberNeedsExponent":a(h==="+"||h==="-"?"numberNeedsDigit":"number");break;case"true":case"false":case"null":(h<"a"||h>"z")&&(m(),u());break;case"arrayNeedsValue":h==="]"?u():yu(h)||(d("collectionItem"),a("arrayNeedsComma"),w(h));break;case"arrayNeedsComma":h==="]"?u():h===","&&(l("collectionItem"),a("arrayNeedsValue"));break;case"objectNeedsKey":h==="}"?u():h==='"'&&(l("collectionItem"),a("objectNeedsColon"),s("string"));break;case"objectNeedsColon":h===":"&&a("objectNeedsValue");break;case"objectNeedsValue":yu(h)||(d("collectionItem"),a("objectNeedsComma"),w(h));break;case"objectNeedsComma":h==="}"?u():h===","&&(l("collectionItem"),a("objectNeedsKey"));break}}o!=null&&(e.length=o);for(var v=[r!=null?t.slice(0,r):t],x=function(_){return v.push(_.slice(t.length-t.lastIndexOf(_[0])))},S=e.length-1;S>=0;S--)switch(e[S]){case"string":v.push('"');break;case"numberNeedsDigit":case"numberNeedsExponent":v.push("0");break;case"true":x("true");break;case"false":x("false");break;case"null":x("null");break;case"arrayNeedsValue":case"arrayNeedsComma":v.push("]");break;case"objectNeedsKey":case"objectNeedsColon":case"objectNeedsValue":case"objectNeedsComma":v.push("}");break}return v.join("")}function xu(){let t=this.buf,e=this.pos,n=0,r=0;for(let i=0;i<28;i+=7){let s=t[e++];if(n|=(s&127)<<i,(s&128)==0){this.pos=e,this.assertBounds(),this.varint64Lo=n,this.varint64Hi=r;return}}let o=t[e++];if(n|=(o&15)<<28,r=(o&112)>>4,(o&128)==0){this.pos=e,this.assertBounds(),this.varint64Lo=n,this.varint64Hi=r;return}for(let i=3;i<=31;i+=7){let s=t[e++];if(r|=(s&127)<<i,(s&128)==0){this.pos=e,this.assertBounds(),this.varint64Lo=n,this.varint64Hi=r;return}}throw new Error("invalid varint")}var xi=4294967296;function gl(t){let e=t[0]==="-";e&&(t=t.slice(1));let n=1e6,r=0,o=0;function i(s,a){let l=Number(t.slice(s,a));o*=n,r=r*n+l,r>=xi&&(o=o+(r/xi|0),r=r%xi)}return i(-24,-18),i(-18,-12),i(-12,-6),i(-6),e?Tu(r,o):bl(r,o)}function Eu(t,e){let n=bl(t,e),r=n.hi&2147483648;r&&(n=Tu(n.lo,n.hi));let o=vl(n.lo,n.hi);return r?"-"+o:o}function vl(t,e){if({lo:t,hi:e}=Rb(t,e),e<=2097151)return String(xi*e+t);let n=t&16777215,r=(t>>>24|e<<8)&16777215,o=e>>16&65535,i=n+r*6777216+o*6710656,s=r+o*8147497,a=o*2,l=1e7;return i>=l&&(s+=Math.floor(i/l),i%=l),s>=l&&(a+=Math.floor(s/l),s%=l),a.toString()+wu(s)+wu(i)}function Rb(t,e){return{lo:t>>>0,hi:e>>>0}}function bl(t,e){return{lo:t|0,hi:e|0}}function Tu(t,e){return e=~e,t?t=~t+1:e+=1,bl(t,e)}var wu=t=>{let e=String(t);return"0000000".slice(e.length)+e};function _u(){let t=this.buf[this.pos++];if((t&128)===0)return this.assertBounds(),t;let e=t&127;if(t=this.buf[this.pos++],e|=(t&127)<<7,(t&128)===0)return this.assertBounds(),e;if(t=this.buf[this.pos++],e|=(t&127)<<14,(t&128)===0)return this.assertBounds(),e;if(t=this.buf[this.pos++],e|=(t&127)<<21,(t&128)===0)return this.assertBounds(),e;t=this.buf[this.pos++],e|=(t&15)<<28;for(let n=5;(t&128)!==0&&n<10;n++)t=this.buf[this.pos++];if((t&128)!==0)throw new Error("invalid varint");return this.assertBounds(),e>>>0}var ot=Ib();function Ib(){let t=new DataView(new ArrayBuffer(8));if(typeof BigInt=="function"&&typeof t.getBigInt64=="function"&&typeof t.getBigUint64=="function"&&typeof t.setBigInt64=="function"&&typeof t.setBigUint64=="function"&&(!!globalThis.Deno||!!globalThis.Bun||typeof process!="object"||typeof process.env!="object"||process.env.BUF_BIGINT_DISABLE!=="1")){let n=BigInt("-9223372036854775808"),r=BigInt("9223372036854775807"),o=BigInt("0"),i=BigInt("18446744073709551615");return{zero:BigInt(0),supported:!0,parse(s){let a=typeof s=="bigint"?s:BigInt(s);if(a>r||a<n)throw new Error(`invalid int64: ${s}`);return a},uParse(s){let a=typeof s=="bigint"?s:BigInt(s);if(a>i||a<o)throw new Error(`invalid uint64: ${s}`);return a},enc(s){return t.setBigInt64(0,this.parse(s),!0),{lo:t.getInt32(0,!0),hi:t.getInt32(4,!0)}},uEnc(s){return t.setBigInt64(0,this.uParse(s),!0),{lo:t.getInt32(0,!0),hi:t.getInt32(4,!0)}},dec(s,a){return t.setInt32(0,s,!0),t.setInt32(4,a,!0),t.getBigInt64(0,!0)},uDec(s,a){return t.setInt32(0,s,!0),t.setInt32(4,a,!0),t.getBigUint64(0,!0)}}}return{zero:"0",supported:!1,parse(n){return typeof n!="string"&&(n=n.toString()),Su(n),n},uParse(n){return typeof n!="string"&&(n=n.toString()),Au(n),n},enc(n){return typeof n!="string"&&(n=n.toString()),Su(n),gl(n)},uEnc(n){return typeof n!="string"&&(n=n.toString()),Au(n),gl(n)},dec(n,r){return Eu(n,r)},uDec(n,r){return vl(n,r)}}}function Su(t){if(!/^-?[0-9]+$/.test(t))throw new Error("invalid int64: "+t)}function Au(t){if(!/^[0-9]+$/.test(t))throw new Error("invalid uint64: "+t)}var yl=Symbol.for("@bufbuild/protobuf/text-encoding");function Cb(t){var e;globalThis[yl]=Object.assign(Object.assign({},t),{encodeUtf8Into:(e=t.encodeUtf8Into)!==null&&e!==void 0?e:xl(t.encodeUtf8.bind(t))})}function wl(){let t=globalThis;if(!t[yl]){let e=new t.TextEncoder,n=new t.TextDecoder,r,o={encodeUtf8(s){return e.encode(s)},decodeUtf8(s,a){return a?(r||(r=new t.TextDecoder("utf-8",{fatal:!0})),r.decode(s)):n.decode(s)},checkUtf8(s){try{return encodeURIComponent(s),!0}catch{return!1}}};e.encodeInto&&(o.encodeUtf8Into=e.encodeInto.bind(e));let i=String.prototype.isWellFormed;i&&(o.checkUtf8=s=>i.call(s)),Cb(o)}return t[yl]}function xl(t){return(e,n)=>{let r=t(e);return n.set(r),{written:r.byteLength}}}var Dt;(function(t){t[t.Varint=0]="Varint",t[t.Bit64=1]="Bit64",t[t.LengthDelimited=2]="LengthDelimited",t[t.StartGroup=3]="StartGroup",t[t.EndGroup=4]="EndGroup",t[t.Bit32=5]="Bit32"})(Dt||(Dt={}));var Nb=34028234663852886e22,Ob=-34028234663852886e22,Mb=4294967295,Lb=2147483647,Pb=-2147483648,q=class{constructor(e){this.stackPos=[],this.encodeUtf8Into=e?xl(e):wl().encodeUtf8Into,this.buffer=Ru,this.viewCache=Ub,this.pos=0}ensureCapacity(e){let n=this.pos+e;if(n>this.buffer.length){let r=this.buffer.length||Db;for(;r<n;)r*=2;let o=new Uint8Array(r);this.pos>0&&o.set(this.buffer),this.buffer=o}}view(){let e=this.buffer,n=this.viewCache;if(n.byteLength===e.byteLength)return n;let r=new DataView(e.buffer);return this.viewCache=r,r}finish(){let e=this.buffer.slice(0,this.pos);return this.pos=0,this.stackPos=[],e}fork(){return this.stackPos.push(this.pos),this.ensureCapacity(Cr),this.buffer[this.pos++]=0,this}join(){let e=this.stackPos.pop();if(e===void 0)throw new Error("invalid state, fork stack empty");let n=this.pos-e-Cr,r=El(n);return r>Cr&&(this.ensureCapacity(r-Cr),this.buffer.copyWithin(e+r,e+Cr,this.pos)),this.pos=e,this.uint32(n),this.pos+=n,this}tag(e,n){return this.uint32((e<<3|n)>>>0)}raw(e){return this.ensureCapacity(e.length),this.buffer.set(e,this.pos),this.pos+=e.length,this}uint32(e){if(ku(e),this.ensureCapacity(5),e<128)return this.buffer[this.pos++]=e,this;for(;e>127;)this.buffer[this.pos++]=e&127|128,e>>>=7;return this.buffer[this.pos++]=e,this}int32(e){if(Tl(e),e>=0)return this.uint32(e);this.ensureCapacity(10);for(let n=0;n<9;n++)this.buffer[this.pos++]=e&127|128,e>>=7;return this.buffer[this.pos++]=1,this}bool(e){return this.ensureCapacity(1),this.buffer[this.pos++]=e?1:0,this}bytes(e){return this.uint32(e.byteLength),this.raw(e)}string(e){typeof e!="string"&&(e=String(e));let n=e.length;if(n<=Iu){this.ensureCapacity(n+1);let l=this.buffer,d=this.pos;l[d++]=n;let u=0;for(;u<n;u++){let m=e.charCodeAt(u);if(m>127)break;l[d++]=m}if(u==n)return this.pos=d,this}this.ensureCapacity(n*3+5);let r=El(n),o=this.buffer,i=this.pos,{written:s}=this.encodeUtf8Into(e,o.subarray(i+r)),a=El(s);return a!=r&&o.copyWithin(i+a,i+r,i+r+s),this.uint32(s),this.pos+=s,this}float(e){return Hb(e),this.ensureCapacity(4),this.view().setFloat32(this.pos,e,!0),this.pos+=4,this}double(e){return this.ensureCapacity(8),this.view().setFloat64(this.pos,e,!0),this.pos+=8,this}fixed32(e){return ku(e),this.ensureCapacity(4),this.view().setUint32(this.pos,e,!0),this.pos+=4,this}sfixed32(e){return Tl(e),this.ensureCapacity(4),this.view().setInt32(this.pos,e,!0),this.pos+=4,this}sint32(e){return Tl(e),this.uint32((e<<1^e>>31)>>>0)}sfixed64(e){let n=ot.enc(e);this.ensureCapacity(8);let r=this.view();return r.setInt32(this.pos,n.lo,!0),r.setInt32(this.pos+4,n.hi,!0),this.pos+=8,this}fixed64(e){let n=ot.uEnc(e);this.ensureCapacity(8);let r=this.view();return r.setInt32(this.pos,n.lo,!0),r.setInt32(this.pos+4,n.hi,!0),this.pos+=8,this}int64(e){let n=ot.enc(e);return this.writeVarint64(n.lo,n.hi)}sint64(e){let n=ot.enc(e),r=n.hi>>31,o=n.lo<<1^r,i=(n.hi<<1|n.lo>>>31)^r;return this.writeVarint64(o,i)}uint64(e){let n=ot.uEnc(e);return this.writeVarint64(n.lo,n.hi)}writeVarint64(e,n){this.ensureCapacity(10);let r=this.buffer,o=this.pos;for(let a=0;a<28;a=a+7){let l=e>>>a,d=!(!(l>>>7)&&n==0);if(r[o++]=(d?l|128:l)&255,!d)return this.pos=o,this}let i=e>>>28&15|(n&7)<<4,s=n>>3!=0;if(r[o++]=(s?i|128:i)&255,!s)return this.pos=o,this;for(let a=3;a<31;a=a+7){let l=n>>>a,d=!!(l>>>7);if(r[o++]=(d?l|128:l)&255,!d)return this.pos=o,this}return r[o++]=n>>>31&1,this.pos=o,this}},Db=128,Cr=1,Ru=new Uint8Array(0),Ub=new DataView(Ru.buffer),Iu=32;function El(t){return t<128?1:t<16384?2:t<2097152?3:t<268435456?4:5}var C=class{constructor(e,n=wl().decodeUtf8){this.decodeUtf8=n,this.varint64Lo=0,this.varint64Hi=0,this.varint64=xu,this.uint32=_u,this.buf=e,this.len=e.length,this.pos=0,this.view=new DataView(e.buffer,e.byteOffset,e.byteLength)}tag(){let e=this.pos,n=this.uint32(),r=this.pos-e;if(r>5||r==5&&this.buf[this.pos-1]>15)throw new Error("illegal tag: varint overflows uint32");let o=n>>>3,i=n&7;if(o<=0||i>5)throw new Error("illegal tag: field no "+o+" wire type "+i);return[o,i]}skip(e,n,r=100){let o=this.pos;switch(e){case Dt.Varint:for(;this.buf[this.pos++]&128;);break;case Dt.Bit64:this.pos+=4;case Dt.Bit32:this.pos+=4;break;case Dt.LengthDelimited:let i=this.uint32();this.pos+=i;break;case Dt.StartGroup:if(r<=0)throw new Error("maximum recursion depth reached");for(;;){let[s,a]=this.tag();if(a===Dt.EndGroup){if(n!==void 0&&s!==n)throw new Error("invalid end group tag");break}this.skip(a,s,r-1)}break;default:throw new Error("cant skip wire type "+e)}return this.assertBounds(),this.buf.subarray(o,this.pos)}assertBounds(){if(this.pos>this.len)throw new RangeError("premature EOF")}int32(){return this.uint32()|0}sint32(){let e=this.uint32();return e>>>1^-(e&1)}int64(){return this.varint64(),ot.dec(this.varint64Lo,this.varint64Hi)}uint64(){return this.varint64(),ot.uDec(this.varint64Lo,this.varint64Hi)}sint64(){this.varint64();let e=this.varint64Lo,n=this.varint64Hi,r=-(e&1);return e=(e>>>1|(n&1)<<31)^r,n=n>>>1^r,ot.dec(e,n)}bool(){let e=this.buf[this.pos];return e<128?(this.pos++,e!==0):(this.varint64(),this.varint64Lo!==0||this.varint64Hi!==0)}fixed32(){return this.view.getUint32((this.pos+=4)-4,!0)}sfixed32(){return this.view.getInt32((this.pos+=4)-4,!0)}fixed64(){return ot.uDec(this.sfixed32(),this.sfixed32())}sfixed64(){return ot.dec(this.sfixed32(),this.sfixed32())}float(){return this.view.getFloat32((this.pos+=4)-4,!0)}double(){return this.view.getFloat64((this.pos+=8)-8,!0)}bytes(){let e=this.uint32(),n=this.pos;return this.pos+=e,this.assertBounds(),this.buf.subarray(n,n+e)}string(e){let n=this.bytes(),r=n.length;if(r<=Iu){let o=new Array(r);for(let i=0;i<r;i++){let s=n[i];if(s>127)return this.decodeUtf8(n,e);o[i]=s}return String.fromCharCode.apply(String,o)}return this.decodeUtf8(n,e)}};function Tl(t){if(typeof t=="string")t=Number(t);else if(typeof t!="number")throw new Error("invalid int32: "+typeof t);if(!Number.isInteger(t)||t>Lb||t<Pb)throw new Error("invalid int32: "+t)}function ku(t){if(typeof t=="string")t=Number(t);else if(typeof t!="number")throw new Error("invalid uint32: "+typeof t);if(!Number.isInteger(t)||t>Mb||t<0)throw new Error("invalid uint32: "+t)}function Hb(t){if(typeof t=="string"){let e=t;if(t=Number(t),Number.isNaN(t)&&e!=="NaN")throw new Error("invalid float32: "+e)}else if(typeof t!="number")throw new Error("invalid float32: "+typeof t);if(Number.isFinite(t)&&(t>Nb||t<Ob))throw new Error("invalid float32: "+t)}var Gb=(function(t){return t[t.NULL_VALUE=0]="NULL_VALUE",t[t.UNRECOGNIZED=-1]="UNRECOGNIZED",t})({});function _l(){return{fields:{}}}var Ie={encode(t,e=new q){return Object.entries(t.fields).forEach(([n,r])=>{r!==void 0&&kl.encode({key:n,value:r},e.uint32(10).fork()).join()}),e},decode(t,e){let n=t instanceof C?t:new C(t),r=e===void 0?n.len:n.pos+e,o=_l();for(;n.pos<r;){let i=n.uint32();switch(i>>>3){case 1:{if(i!==10)break;let s=kl.decode(n,n.uint32());s.value!==void 0&&(o.fields[s.key]=s.value);continue}}if((i&7)===4||i===0)break;n.skip(i&7)}return o},create(t){return Ie.fromPartial(t??{})},fromPartial(t){let e=_l();return e.fields=Object.entries(t.fields??{}).reduce((n,[r,o])=>(o!==void 0&&(n[r]=o),n),{}),e},wrap(t){let e=_l();if(t!==void 0)for(let n of Object.keys(t))e.fields[n]=t[n];return e},unwrap(t){let e={};if(t.fields)for(let n of Object.keys(t.fields))e[n]=t.fields[n];return e}};function Cu(){return{key:"",value:void 0}}var kl={encode(t,e=new q){return t.key!==""&&e.uint32(10).string(t.key),t.value!==void 0&&U.encode(U.wrap(t.value),e.uint32(18).fork()).join(),e},decode(t,e){let n=t instanceof C?t:new C(t),r=e===void 0?n.len:n.pos+e,o=Cu();for(;n.pos<r;){let i=n.uint32();switch(i>>>3){case 1:if(i!==10)break;o.key=n.string();continue;case 2:if(i!==18)break;o.value=U.unwrap(U.decode(n,n.uint32()));continue}if((i&7)===4||i===0)break;n.skip(i&7)}return o},create(t){return kl.fromPartial(t??{})},fromPartial(t){let e=Cu();return e.key=t.key??"",e.value=t.value??void 0,e}};function Sl(){return{nullValue:void 0,numberValue:void 0,stringValue:void 0,boolValue:void 0,structValue:void 0,listValue:void 0}}var U={encode(t,e=new q){return t.nullValue!==void 0&&e.uint32(8).int32(t.nullValue),t.numberValue!==void 0&&e.uint32(17).double(t.numberValue),t.stringValue!==void 0&&e.uint32(26).string(t.stringValue),t.boolValue!==void 0&&e.uint32(32).bool(t.boolValue),t.structValue!==void 0&&Ie.encode(Ie.wrap(t.structValue),e.uint32(42).fork()).join(),t.listValue!==void 0&&Nr.encode(Nr.wrap(t.listValue),e.uint32(50).fork()).join(),e},decode(t,e){let n=t instanceof C?t:new C(t),r=e===void 0?n.len:n.pos+e,o=Sl();for(;n.pos<r;){let i=n.uint32();switch(i>>>3){case 1:if(i!==8)break;o.nullValue=n.int32();continue;case 2:if(i!==17)break;o.numberValue=n.double();continue;case 3:if(i!==26)break;o.stringValue=n.string();continue;case 4:if(i!==32)break;o.boolValue=n.bool();continue;case 5:if(i!==42)break;o.structValue=Ie.unwrap(Ie.decode(n,n.uint32()));continue;case 6:if(i!==50)break;o.listValue=Nr.unwrap(Nr.decode(n,n.uint32()));continue}if((i&7)===4||i===0)break;n.skip(i&7)}return o},create(t){return U.fromPartial(t??{})},fromPartial(t){let e=Sl();return e.nullValue=t.nullValue??void 0,e.numberValue=t.numberValue??void 0,e.stringValue=t.stringValue??void 0,e.boolValue=t.boolValue??void 0,e.structValue=t.structValue??void 0,e.listValue=t.listValue??void 0,e},wrap(t){let e=Sl();if(t===null)e.nullValue=Gb.NULL_VALUE;else if(typeof t=="boolean")e.boolValue=t;else if(typeof t=="number")e.numberValue=t;else if(typeof t=="string")e.stringValue=t;else if(globalThis.Array.isArray(t))e.listValue=t;else if(typeof t=="object")e.structValue=t;else if(typeof t<"u")throw new globalThis.Error("Unsupported any value type: "+typeof t);return e},unwrap(t){if(t.stringValue!==void 0)return t.stringValue;if(t?.numberValue!==void 0)return t.numberValue;if(t?.boolValue!==void 0)return t.boolValue;if(t?.structValue!==void 0)return t.structValue;if(t?.listValue!==void 0)return t.listValue;if(t?.nullValue!==void 0)return null}};function Al(){return{values:[]}}var Nr={encode(t,e=new q){for(let n of t.values)U.encode(U.wrap(n),e.uint32(10).fork()).join();return e},decode(t,e){let n=t instanceof C?t:new C(t),r=e===void 0?n.len:n.pos+e,o=Al();for(;n.pos<r;){let i=n.uint32();switch(i>>>3){case 1:if(i!==10)break;o.values.push(U.unwrap(U.decode(n,n.uint32())));continue}if((i&7)===4||i===0)break;n.skip(i&7)}return o},create(t){return Nr.fromPartial(t??{})},fromPartial(t){let e=Al();return e.values=t.values?.map(n=>n)||[],e},wrap(t){let e=Al();return e.values=t??[],e},unwrap(t){return t?.hasOwnProperty("values")&&globalThis.Array.isArray(t.values)?t.values:t}},zb=(function(t){return t[t.ADD=0]="ADD",t[t.REMOVE=1]="REMOVE",t[t.REPLACE=2]="REPLACE",t[t.MOVE=3]="MOVE",t[t.COPY=4]="COPY",t[t.TEST=5]="TEST",t[t.UNRECOGNIZED=-1]="UNRECOGNIZED",t})({});function Nu(){return{op:0,path:"",from:void 0,value:void 0}}var Ti={encode(t,e=new q){return t.op!==0&&e.uint32(8).int32(t.op),t.path!==""&&e.uint32(18).string(t.path),t.from!==void 0&&e.uint32(26).string(t.from),t.value!==void 0&&U.encode(U.wrap(t.value),e.uint32(34).fork()).join(),e},decode(t,e){let n=t instanceof C?t:new C(t),r=e===void 0?n.len:n.pos+e,o=Nu();for(;n.pos<r;){let i=n.uint32();switch(i>>>3){case 1:if(i!==8)break;o.op=n.int32();continue;case 2:if(i!==18)break;o.path=n.string();continue;case 3:if(i!==26)break;o.from=n.string();continue;case 4:if(i!==34)break;o.value=U.unwrap(U.decode(n,n.uint32()));continue}if((i&7)===4||i===0)break;n.skip(i&7)}return o},create(t){return Ti.fromPartial(t??{})},fromPartial(t){let e=Nu();return e.op=t.op??0,e.path=t.path??"",e.from=t.from??void 0,e.value=t.value??void 0,e}};function Ou(){return{id:"",type:"",function:void 0,metadata:void 0}}var _i={encode(t,e=new q){return t.id!==""&&e.uint32(10).string(t.id),t.type!==""&&e.uint32(18).string(t.type),t.function!==void 0&&Si.encode(t.function,e.uint32(26).fork()).join(),t.metadata!==void 0&&Ie.encode(Ie.wrap(t.metadata),e.uint32(34).fork()).join(),e},decode(t,e){let n=t instanceof C?t:new C(t),r=e===void 0?n.len:n.pos+e,o=Ou();for(;n.pos<r;){let i=n.uint32();switch(i>>>3){case 1:if(i!==10)break;o.id=n.string();continue;case 2:if(i!==18)break;o.type=n.string();continue;case 3:if(i!==26)break;o.function=Si.decode(n,n.uint32());continue;case 4:if(i!==34)break;o.metadata=Ie.unwrap(Ie.decode(n,n.uint32()));continue}if((i&7)===4||i===0)break;n.skip(i&7)}return o},create(t){return _i.fromPartial(t??{})},fromPartial(t){let e=Ou();return e.id=t.id??"",e.type=t.type??"",e.function=t.function!==void 0&&t.function!==null?Si.fromPartial(t.function):void 0,e.metadata=t.metadata??void 0,e}};function Mu(){return{name:"",arguments:""}}var Si={encode(t,e=new q){return t.name!==""&&e.uint32(10).string(t.name),t.arguments!==""&&e.uint32(18).string(t.arguments),e},decode(t,e){let n=t instanceof C?t:new C(t),r=e===void 0?n.len:n.pos+e,o=Mu();for(;n.pos<r;){let i=n.uint32();switch(i>>>3){case 1:if(i!==10)break;o.name=n.string();continue;case 2:if(i!==18)break;o.arguments=n.string();continue}if((i&7)===4||i===0)break;n.skip(i&7)}return o},create(t){return Si.fromPartial(t??{})},fromPartial(t){let e=Mu();return e.name=t.name??"",e.arguments=t.arguments??"",e}};function Lu(){return{value:"",mimeType:""}}var Ai={encode(t,e=new q){return t.value!==""&&e.uint32(10).string(t.value),t.mimeType!==""&&e.uint32(18).string(t.mimeType),e},decode(t,e){let n=t instanceof C?t:new C(t),r=e===void 0?n.len:n.pos+e,o=Lu();for(;n.pos<r;){let i=n.uint32();switch(i>>>3){case 1:if(i!==10)break;o.value=n.string();continue;case 2:if(i!==18)break;o.mimeType=n.string();continue}if((i&7)===4||i===0)break;n.skip(i&7)}return o},create(t){return Ai.fromPartial(t??{})},fromPartial(t){let e=Lu();return e.value=t.value??"",e.mimeType=t.mimeType??"",e}};function Pu(){return{value:"",mimeType:void 0}}var ki={encode(t,e=new q){return t.value!==""&&e.uint32(10).string(t.value),t.mimeType!==void 0&&e.uint32(18).string(t.mimeType),e},decode(t,e){let n=t instanceof C?t:new C(t),r=e===void 0?n.len:n.pos+e,o=Pu();for(;n.pos<r;){let i=n.uint32();switch(i>>>3){case 1:if(i!==10)break;o.value=n.string();continue;case 2:if(i!==18)break;o.mimeType=n.string();continue}if((i&7)===4||i===0)break;n.skip(i&7)}return o},create(t){return ki.fromPartial(t??{})},fromPartial(t){let e=Pu();return e.value=t.value??"",e.mimeType=t.mimeType??void 0,e}};function Du(){return{data:void 0,url:void 0}}var Be={encode(t,e=new q){return t.data!==void 0&&Ai.encode(t.data,e.uint32(10).fork()).join(),t.url!==void 0&&ki.encode(t.url,e.uint32(18).fork()).join(),e},decode(t,e){let n=t instanceof C?t:new C(t),r=e===void 0?n.len:n.pos+e,o=Du();for(;n.pos<r;){let i=n.uint32();switch(i>>>3){case 1:if(i!==10)break;o.data=Ai.decode(n,n.uint32());continue;case 2:if(i!==18)break;o.url=ki.decode(n,n.uint32());continue}if((i&7)===4||i===0)break;n.skip(i&7)}return o},create(t){return Be.fromPartial(t??{})},fromPartial(t){let e=Du();return e.data=t.data!==void 0&&t.data!==null?Ai.fromPartial(t.data):void 0,e.url=t.url!==void 0&&t.url!==null?ki.fromPartial(t.url):void 0,e}};function Uu(){return{text:""}}var Ri={encode(t,e=new q){return t.text!==""&&e.uint32(10).string(t.text),e},decode(t,e){let n=t instanceof C?t:new C(t),r=e===void 0?n.len:n.pos+e,o=Uu();for(;n.pos<r;){let i=n.uint32();switch(i>>>3){case 1:if(i!==10)break;o.text=n.string();continue}if((i&7)===4||i===0)break;n.skip(i&7)}return o},create(t){return Ri.fromPartial(t??{})},fromPartial(t){let e=Uu();return e.text=t.text??"",e}};function Hu(){return{source:void 0,metadata:void 0}}var Ii={encode(t,e=new q){return t.source!==void 0&&Be.encode(t.source,e.uint32(10).fork()).join(),t.metadata!==void 0&&U.encode(U.wrap(t.metadata),e.uint32(18).fork()).join(),e},decode(t,e){let n=t instanceof C?t:new C(t),r=e===void 0?n.len:n.pos+e,o=Hu();for(;n.pos<r;){let i=n.uint32();switch(i>>>3){case 1:if(i!==10)break;o.source=Be.decode(n,n.uint32());continue;case 2:if(i!==18)break;o.metadata=U.unwrap(U.decode(n,n.uint32()));continue}if((i&7)===4||i===0)break;n.skip(i&7)}return o},create(t){return Ii.fromPartial(t??{})},fromPartial(t){let e=Hu();return e.source=t.source!==void 0&&t.source!==null?Be.fromPartial(t.source):void 0,e.metadata=t.metadata??void 0,e}};function Gu(){return{source:void 0,metadata:void 0}}var Ci={encode(t,e=new q){return t.source!==void 0&&Be.encode(t.source,e.uint32(10).fork()).join(),t.metadata!==void 0&&U.encode(U.wrap(t.metadata),e.uint32(18).fork()).join(),e},decode(t,e){let n=t instanceof C?t:new C(t),r=e===void 0?n.len:n.pos+e,o=Gu();for(;n.pos<r;){let i=n.uint32();switch(i>>>3){case 1:if(i!==10)break;o.source=Be.decode(n,n.uint32());continue;case 2:if(i!==18)break;o.metadata=U.unwrap(U.decode(n,n.uint32()));continue}if((i&7)===4||i===0)break;n.skip(i&7)}return o},create(t){return Ci.fromPartial(t??{})},fromPartial(t){let e=Gu();return e.source=t.source!==void 0&&t.source!==null?Be.fromPartial(t.source):void 0,e.metadata=t.metadata??void 0,e}};function zu(){return{source:void 0,metadata:void 0}}var Ni={encode(t,e=new q){return t.source!==void 0&&Be.encode(t.source,e.uint32(10).fork()).join(),t.metadata!==void 0&&U.encode(U.wrap(t.metadata),e.uint32(18).fork()).join(),e},decode(t,e){let n=t instanceof C?t:new C(t),r=e===void 0?n.len:n.pos+e,o=zu();for(;n.pos<r;){let i=n.uint32();switch(i>>>3){case 1:if(i!==10)break;o.source=Be.decode(n,n.uint32());continue;case 2:if(i!==18)break;o.metadata=U.unwrap(U.decode(n,n.uint32()));continue}if((i&7)===4||i===0)break;n.skip(i&7)}return o},create(t){return Ni.fromPartial(t??{})},fromPartial(t){let e=zu();return e.source=t.source!==void 0&&t.source!==null?Be.fromPartial(t.source):void 0,e.metadata=t.metadata??void 0,e}};function Fu(){return{source:void 0,metadata:void 0}}var Oi={encode(t,e=new q){return t.source!==void 0&&Be.encode(t.source,e.uint32(10).fork()).join(),t.metadata!==void 0&&U.encode(U.wrap(t.metadata),e.uint32(18).fork()).join(),e},decode(t,e){let n=t instanceof C?t:new C(t),r=e===void 0?n.len:n.pos+e,o=Fu();for(;n.pos<r;){let i=n.uint32();switch(i>>>3){case 1:if(i!==10)break;o.source=Be.decode(n,n.uint32());continue;case 2:if(i!==18)break;o.metadata=U.unwrap(U.decode(n,n.uint32()));continue}if((i&7)===4||i===0)break;n.skip(i&7)}return o},create(t){return Oi.fromPartial(t??{})},fromPartial(t){let e=Fu();return e.source=t.source!==void 0&&t.source!==null?Be.fromPartial(t.source):void 0,e.metadata=t.metadata??void 0,e}};function $u(){return{text:void 0,image:void 0,audio:void 0,video:void 0,document:void 0}}var Mi={encode(t,e=new q){return t.text!==void 0&&Ri.encode(t.text,e.uint32(10).fork()).join(),t.image!==void 0&&Ii.encode(t.image,e.uint32(18).fork()).join(),t.audio!==void 0&&Ci.encode(t.audio,e.uint32(26).fork()).join(),t.video!==void 0&&Ni.encode(t.video,e.uint32(34).fork()).join(),t.document!==void 0&&Oi.encode(t.document,e.uint32(42).fork()).join(),e},decode(t,e){let n=t instanceof C?t:new C(t),r=e===void 0?n.len:n.pos+e,o=$u();for(;n.pos<r;){let i=n.uint32();switch(i>>>3){case 1:if(i!==10)break;o.text=Ri.decode(n,n.uint32());continue;case 2:if(i!==18)break;o.image=Ii.decode(n,n.uint32());continue;case 3:if(i!==26)break;o.audio=Ci.decode(n,n.uint32());continue;case 4:if(i!==34)break;o.video=Ni.decode(n,n.uint32());continue;case 5:if(i!==42)break;o.document=Oi.decode(n,n.uint32());continue}if((i&7)===4||i===0)break;n.skip(i&7)}return o},create(t){return Mi.fromPartial(t??{})},fromPartial(t){let e=$u();return e.text=t.text!==void 0&&t.text!==null?Ri.fromPartial(t.text):void 0,e.image=t.image!==void 0&&t.image!==null?Ii.fromPartial(t.image):void 0,e.audio=t.audio!==void 0&&t.audio!==null?Ci.fromPartial(t.audio):void 0,e.video=t.video!==void 0&&t.video!==null?Ni.fromPartial(t.video):void 0,e.document=t.document!==void 0&&t.document!==null?Oi.fromPartial(t.document):void 0,e}};function Bu(){return{id:"",role:"",content:void 0,name:void 0,toolCalls:[],toolCallId:void 0,error:void 0,contentParts:[],metadata:void 0,subagentRunId:void 0}}var Li={encode(t,e=new q){t.id!==""&&e.uint32(10).string(t.id),t.role!==""&&e.uint32(18).string(t.role),t.content!==void 0&&e.uint32(26).string(t.content),t.name!==void 0&&e.uint32(34).string(t.name);for(let n of t.toolCalls)_i.encode(n,e.uint32(42).fork()).join();t.toolCallId!==void 0&&e.uint32(50).string(t.toolCallId),t.error!==void 0&&e.uint32(58).string(t.error);for(let n of t.contentParts)Mi.encode(n,e.uint32(66).fork()).join();return t.metadata!==void 0&&Ie.encode(Ie.wrap(t.metadata),e.uint32(74).fork()).join(),t.subagentRunId!==void 0&&e.uint32(82).string(t.subagentRunId),e},decode(t,e){let n=t instanceof C?t:new C(t),r=e===void 0?n.len:n.pos+e,o=Bu();for(;n.pos<r;){let i=n.uint32();switch(i>>>3){case 1:if(i!==10)break;o.id=n.string();continue;case 2:if(i!==18)break;o.role=n.string();continue;case 3:if(i!==26)break;o.content=n.string();continue;case 4:if(i!==34)break;o.name=n.string();continue;case 5:if(i!==42)break;o.toolCalls.push(_i.decode(n,n.uint32()));continue;case 6:if(i!==50)break;o.toolCallId=n.string();continue;case 7:if(i!==58)break;o.error=n.string();continue;case 8:if(i!==66)break;o.contentParts.push(Mi.decode(n,n.uint32()));continue;case 9:if(i!==74)break;o.metadata=Ie.unwrap(Ie.decode(n,n.uint32()));continue;case 10:if(i!==82)break;o.subagentRunId=n.string();continue}if((i&7)===4||i===0)break;n.skip(i&7)}return o},create(t){return Li.fromPartial(t??{})},fromPartial(t){let e=Bu();return e.id=t.id??"",e.role=t.role??"",e.content=t.content??void 0,e.name=t.name??void 0,e.toolCalls=t.toolCalls?.map(n=>_i.fromPartial(n))||[],e.toolCallId=t.toolCallId??void 0,e.error=t.error??void 0,e.contentParts=t.contentParts?.map(n=>Mi.fromPartial(n))||[],e.metadata=t.metadata??void 0,e.subagentRunId=t.subagentRunId??void 0,e}};function ju(){return{id:"",reason:"",message:void 0,toolCallId:void 0,responseSchema:void 0,expiresAt:void 0,metadata:void 0,subagentRunId:void 0}}var Pi={encode(t,e=new q){return t.id!==""&&e.uint32(10).string(t.id),t.reason!==""&&e.uint32(18).string(t.reason),t.message!==void 0&&e.uint32(26).string(t.message),t.toolCallId!==void 0&&e.uint32(34).string(t.toolCallId),t.responseSchema!==void 0&&U.encode(U.wrap(t.responseSchema),e.uint32(42).fork()).join(),t.expiresAt!==void 0&&e.uint32(50).string(t.expiresAt),t.metadata!==void 0&&U.encode(U.wrap(t.metadata),e.uint32(58).fork()).join(),t.subagentRunId!==void 0&&e.uint32(66).string(t.subagentRunId),e},decode(t,e){let n=t instanceof C?t:new C(t),r=e===void 0?n.len:n.pos+e,o=ju();for(;n.pos<r;){let i=n.uint32();switch(i>>>3){case 1:if(i!==10)break;o.id=n.string();continue;case 2:if(i!==18)break;o.reason=n.string();continue;case 3:if(i!==26)break;o.message=n.string();continue;case 4:if(i!==34)break;o.toolCallId=n.string();continue;case 5:if(i!==42)break;o.responseSchema=U.unwrap(U.decode(n,n.uint32()));continue;case 6:if(i!==50)break;o.expiresAt=n.string();continue;case 7:if(i!==58)break;o.metadata=U.unwrap(U.decode(n,n.uint32()));continue;case 8:if(i!==66)break;o.subagentRunId=n.string();continue}if((i&7)===4||i===0)break;n.skip(i&7)}return o},create(t){return Pi.fromPartial(t??{})},fromPartial(t){let e=ju();return e.id=t.id??"",e.reason=t.reason??"",e.message=t.message??void 0,e.toolCallId=t.toolCallId??void 0,e.responseSchema=t.responseSchema??void 0,e.expiresAt=t.expiresAt??void 0,e.metadata=t.metadata??void 0,e.subagentRunId=t.subagentRunId??void 0,e}},Fb=(function(t){return t[t.TEXT_MESSAGE_START=0]="TEXT_MESSAGE_START",t[t.TEXT_MESSAGE_CONTENT=1]="TEXT_MESSAGE_CONTENT",t[t.TEXT_MESSAGE_END=2]="TEXT_MESSAGE_END",t[t.TOOL_CALL_START=3]="TOOL_CALL_START",t[t.TOOL_CALL_ARGS=4]="TOOL_CALL_ARGS",t[t.TOOL_CALL_END=5]="TOOL_CALL_END",t[t.STATE_SNAPSHOT=6]="STATE_SNAPSHOT",t[t.STATE_DELTA=7]="STATE_DELTA",t[t.MESSAGES_SNAPSHOT=8]="MESSAGES_SNAPSHOT",t[t.RAW=9]="RAW",t[t.CUSTOM=10]="CUSTOM",t[t.RUN_STARTED=11]="RUN_STARTED",t[t.RUN_FINISHED=12]="RUN_FINISHED",t[t.RUN_ERROR=13]="RUN_ERROR",t[t.STEP_STARTED=14]="STEP_STARTED",t[t.STEP_FINISHED=15]="STEP_FINISHED",t[t.SUBAGENT_STARTED=16]="SUBAGENT_STARTED",t[t.SUBAGENT_FINISHED=17]="SUBAGENT_FINISHED",t[t.SUBAGENT_ERROR=18]="SUBAGENT_ERROR",t[t.UNRECOGNIZED=-1]="UNRECOGNIZED",t})({});function Vu(){return{type:0,timestamp:void 0,rawEvent:void 0,metadata:void 0}}var P={encode(t,e=new q){return t.type!==0&&e.uint32(8).int32(t.type),t.timestamp!==void 0&&e.uint32(16).int64(t.timestamp),t.rawEvent!==void 0&&U.encode(U.wrap(t.rawEvent),e.uint32(26).fork()).join(),t.metadata!==void 0&&Ie.encode(Ie.wrap(t.metadata),e.uint32(34).fork()).join(),e},decode(t,e){let n=t instanceof C?t:new C(t),r=e===void 0?n.len:n.pos+e,o=Vu();for(;n.pos<r;){let i=n.uint32();switch(i>>>3){case 1:if(i!==8)break;o.type=n.int32();continue;case 2:if(i!==16)break;o.timestamp=er(n.int64());continue;case 3:if(i!==26)break;o.rawEvent=U.unwrap(U.decode(n,n.uint32()));continue;case 4:if(i!==34)break;o.metadata=Ie.unwrap(Ie.decode(n,n.uint32()));continue}if((i&7)===4||i===0)break;n.skip(i&7)}return o},create(t){return P.fromPartial(t??{})},fromPartial(t){let e=Vu();return e.type=t.type??0,e.timestamp=t.timestamp??void 0,e.rawEvent=t.rawEvent??void 0,e.metadata=t.metadata??void 0,e}};function qu(){return{baseEvent:void 0,messageId:"",role:void 0,name:void 0,subagentRunId:void 0}}var Di={encode(t,e=new q){return t.baseEvent!==void 0&&P.encode(t.baseEvent,e.uint32(10).fork()).join(),t.messageId!==""&&e.uint32(18).string(t.messageId),t.role!==void 0&&e.uint32(26).string(t.role),t.name!==void 0&&e.uint32(34).string(t.name),t.subagentRunId!==void 0&&e.uint32(42).string(t.subagentRunId),e},decode(t,e){let n=t instanceof C?t:new C(t),r=e===void 0?n.len:n.pos+e,o=qu();for(;n.pos<r;){let i=n.uint32();switch(i>>>3){case 1:if(i!==10)break;o.baseEvent=P.decode(n,n.uint32());continue;case 2:if(i!==18)break;o.messageId=n.string();continue;case 3:if(i!==26)break;o.role=n.string();continue;case 4:if(i!==34)break;o.name=n.string();continue;case 5:if(i!==42)break;o.subagentRunId=n.string();continue}if((i&7)===4||i===0)break;n.skip(i&7)}return o},create(t){return Di.fromPartial(t??{})},fromPartial(t){let e=qu();return e.baseEvent=t.baseEvent!==void 0&&t.baseEvent!==null?P.fromPartial(t.baseEvent):void 0,e.messageId=t.messageId??"",e.role=t.role??void 0,e.name=t.name??void 0,e.subagentRunId=t.subagentRunId??void 0,e}};function Wu(){return{baseEvent:void 0,messageId:"",delta:"",subagentRunId:void 0}}var Ui={encode(t,e=new q){return t.baseEvent!==void 0&&P.encode(t.baseEvent,e.uint32(10).fork()).join(),t.messageId!==""&&e.uint32(18).string(t.messageId),t.delta!==""&&e.uint32(26).string(t.delta),t.subagentRunId!==void 0&&e.uint32(34).string(t.subagentRunId),e},decode(t,e){let n=t instanceof C?t:new C(t),r=e===void 0?n.len:n.pos+e,o=Wu();for(;n.pos<r;){let i=n.uint32();switch(i>>>3){case 1:if(i!==10)break;o.baseEvent=P.decode(n,n.uint32());continue;case 2:if(i!==18)break;o.messageId=n.string();continue;case 3:if(i!==26)break;o.delta=n.string();continue;case 4:if(i!==34)break;o.subagentRunId=n.string();continue}if((i&7)===4||i===0)break;n.skip(i&7)}return o},create(t){return Ui.fromPartial(t??{})},fromPartial(t){let e=Wu();return e.baseEvent=t.baseEvent!==void 0&&t.baseEvent!==null?P.fromPartial(t.baseEvent):void 0,e.messageId=t.messageId??"",e.delta=t.delta??"",e.subagentRunId=t.subagentRunId??void 0,e}};function Xu(){return{baseEvent:void 0,messageId:"",subagentRunId:void 0}}var Hi={encode(t,e=new q){return t.baseEvent!==void 0&&P.encode(t.baseEvent,e.uint32(10).fork()).join(),t.messageId!==""&&e.uint32(18).string(t.messageId),t.subagentRunId!==void 0&&e.uint32(26).string(t.subagentRunId),e},decode(t,e){let n=t instanceof C?t:new C(t),r=e===void 0?n.len:n.pos+e,o=Xu();for(;n.pos<r;){let i=n.uint32();switch(i>>>3){case 1:if(i!==10)break;o.baseEvent=P.decode(n,n.uint32());continue;case 2:if(i!==18)break;o.messageId=n.string();continue;case 3:if(i!==26)break;o.subagentRunId=n.string();continue}if((i&7)===4||i===0)break;n.skip(i&7)}return o},create(t){return Hi.fromPartial(t??{})},fromPartial(t){let e=Xu();return e.baseEvent=t.baseEvent!==void 0&&t.baseEvent!==null?P.fromPartial(t.baseEvent):void 0,e.messageId=t.messageId??"",e.subagentRunId=t.subagentRunId??void 0,e}};function Yu(){return{baseEvent:void 0,toolCallId:"",toolCallName:"",parentMessageId:void 0,subagentRunId:void 0}}var Gi={encode(t,e=new q){return t.baseEvent!==void 0&&P.encode(t.baseEvent,e.uint32(10).fork()).join(),t.toolCallId!==""&&e.uint32(18).string(t.toolCallId),t.toolCallName!==""&&e.uint32(26).string(t.toolCallName),t.parentMessageId!==void 0&&e.uint32(34).string(t.parentMessageId),t.subagentRunId!==void 0&&e.uint32(42).string(t.subagentRunId),e},decode(t,e){let n=t instanceof C?t:new C(t),r=e===void 0?n.len:n.pos+e,o=Yu();for(;n.pos<r;){let i=n.uint32();switch(i>>>3){case 1:if(i!==10)break;o.baseEvent=P.decode(n,n.uint32());continue;case 2:if(i!==18)break;o.toolCallId=n.string();continue;case 3:if(i!==26)break;o.toolCallName=n.string();continue;case 4:if(i!==34)break;o.parentMessageId=n.string();continue;case 5:if(i!==42)break;o.subagentRunId=n.string();continue}if((i&7)===4||i===0)break;n.skip(i&7)}return o},create(t){return Gi.fromPartial(t??{})},fromPartial(t){let e=Yu();return e.baseEvent=t.baseEvent!==void 0&&t.baseEvent!==null?P.fromPartial(t.baseEvent):void 0,e.toolCallId=t.toolCallId??"",e.toolCallName=t.toolCallName??"",e.parentMessageId=t.parentMessageId??void 0,e.subagentRunId=t.subagentRunId??void 0,e}};function Ku(){return{baseEvent:void 0,toolCallId:"",delta:"",subagentRunId:void 0}}var zi={encode(t,e=new q){return t.baseEvent!==void 0&&P.encode(t.baseEvent,e.uint32(10).fork()).join(),t.toolCallId!==""&&e.uint32(18).string(t.toolCallId),t.delta!==""&&e.uint32(26).string(t.delta),t.subagentRunId!==void 0&&e.uint32(34).string(t.subagentRunId),e},decode(t,e){let n=t instanceof C?t:new C(t),r=e===void 0?n.len:n.pos+e,o=Ku();for(;n.pos<r;){let i=n.uint32();switch(i>>>3){case 1:if(i!==10)break;o.baseEvent=P.decode(n,n.uint32());continue;case 2:if(i!==18)break;o.toolCallId=n.string();continue;case 3:if(i!==26)break;o.delta=n.string();continue;case 4:if(i!==34)break;o.subagentRunId=n.string();continue}if((i&7)===4||i===0)break;n.skip(i&7)}return o},create(t){return zi.fromPartial(t??{})},fromPartial(t){let e=Ku();return e.baseEvent=t.baseEvent!==void 0&&t.baseEvent!==null?P.fromPartial(t.baseEvent):void 0,e.toolCallId=t.toolCallId??"",e.delta=t.delta??"",e.subagentRunId=t.subagentRunId??void 0,e}};function Zu(){return{baseEvent:void 0,toolCallId:"",subagentRunId:void 0}}var Fi={encode(t,e=new q){return t.baseEvent!==void 0&&P.encode(t.baseEvent,e.uint32(10).fork()).join(),t.toolCallId!==""&&e.uint32(18).string(t.toolCallId),t.subagentRunId!==void 0&&e.uint32(26).string(t.subagentRunId),e},decode(t,e){let n=t instanceof C?t:new C(t),r=e===void 0?n.len:n.pos+e,o=Zu();for(;n.pos<r;){let i=n.uint32();switch(i>>>3){case 1:if(i!==10)break;o.baseEvent=P.decode(n,n.uint32());continue;case 2:if(i!==18)break;o.toolCallId=n.string();continue;case 3:if(i!==26)break;o.subagentRunId=n.string();continue}if((i&7)===4||i===0)break;n.skip(i&7)}return o},create(t){return Fi.fromPartial(t??{})},fromPartial(t){let e=Zu();return e.baseEvent=t.baseEvent!==void 0&&t.baseEvent!==null?P.fromPartial(t.baseEvent):void 0,e.toolCallId=t.toolCallId??"",e.subagentRunId=t.subagentRunId??void 0,e}};function Qu(){return{baseEvent:void 0,snapshot:void 0,subagentRunId:void 0}}var $i={encode(t,e=new q){return t.baseEvent!==void 0&&P.encode(t.baseEvent,e.uint32(10).fork()).join(),t.snapshot!==void 0&&U.encode(U.wrap(t.snapshot),e.uint32(18).fork()).join(),t.subagentRunId!==void 0&&e.uint32(26).string(t.subagentRunId),e},decode(t,e){let n=t instanceof C?t:new C(t),r=e===void 0?n.len:n.pos+e,o=Qu();for(;n.pos<r;){let i=n.uint32();switch(i>>>3){case 1:if(i!==10)break;o.baseEvent=P.decode(n,n.uint32());continue;case 2:if(i!==18)break;o.snapshot=U.unwrap(U.decode(n,n.uint32()));continue;case 3:if(i!==26)break;o.subagentRunId=n.string();continue}if((i&7)===4||i===0)break;n.skip(i&7)}return o},create(t){return $i.fromPartial(t??{})},fromPartial(t){let e=Qu();return e.baseEvent=t.baseEvent!==void 0&&t.baseEvent!==null?P.fromPartial(t.baseEvent):void 0,e.snapshot=t.snapshot??void 0,e.subagentRunId=t.subagentRunId??void 0,e}};function Ju(){return{baseEvent:void 0,delta:[],subagentRunId:void 0}}var Bi={encode(t,e=new q){t.baseEvent!==void 0&&P.encode(t.baseEvent,e.uint32(10).fork()).join();for(let n of t.delta)Ti.encode(n,e.uint32(18).fork()).join();return t.subagentRunId!==void 0&&e.uint32(26).string(t.subagentRunId),e},decode(t,e){let n=t instanceof C?t:new C(t),r=e===void 0?n.len:n.pos+e,o=Ju();for(;n.pos<r;){let i=n.uint32();switch(i>>>3){case 1:if(i!==10)break;o.baseEvent=P.decode(n,n.uint32());continue;case 2:if(i!==18)break;o.delta.push(Ti.decode(n,n.uint32()));continue;case 3:if(i!==26)break;o.subagentRunId=n.string();continue}if((i&7)===4||i===0)break;n.skip(i&7)}return o},create(t){return Bi.fromPartial(t??{})},fromPartial(t){let e=Ju();return e.baseEvent=t.baseEvent!==void 0&&t.baseEvent!==null?P.fromPartial(t.baseEvent):void 0,e.delta=t.delta?.map(n=>Ti.fromPartial(n))||[],e.subagentRunId=t.subagentRunId??void 0,e}};function eh(){return{baseEvent:void 0,messages:[]}}var ji={encode(t,e=new q){t.baseEvent!==void 0&&P.encode(t.baseEvent,e.uint32(10).fork()).join();for(let n of t.messages)Li.encode(n,e.uint32(18).fork()).join();return e},decode(t,e){let n=t instanceof C?t:new C(t),r=e===void 0?n.len:n.pos+e,o=eh();for(;n.pos<r;){let i=n.uint32();switch(i>>>3){case 1:if(i!==10)break;o.baseEvent=P.decode(n,n.uint32());continue;case 2:if(i!==18)break;o.messages.push(Li.decode(n,n.uint32()));continue}if((i&7)===4||i===0)break;n.skip(i&7)}return o},create(t){return ji.fromPartial(t??{})},fromPartial(t){let e=eh();return e.baseEvent=t.baseEvent!==void 0&&t.baseEvent!==null?P.fromPartial(t.baseEvent):void 0,e.messages=t.messages?.map(n=>Li.fromPartial(n))||[],e}};function th(){return{baseEvent:void 0,event:void 0,source:void 0,subagentRunId:void 0}}var Vi={encode(t,e=new q){return t.baseEvent!==void 0&&P.encode(t.baseEvent,e.uint32(10).fork()).join(),t.event!==void 0&&U.encode(U.wrap(t.event),e.uint32(18).fork()).join(),t.source!==void 0&&e.uint32(26).string(t.source),t.subagentRunId!==void 0&&e.uint32(34).string(t.subagentRunId),e},decode(t,e){let n=t instanceof C?t:new C(t),r=e===void 0?n.len:n.pos+e,o=th();for(;n.pos<r;){let i=n.uint32();switch(i>>>3){case 1:if(i!==10)break;o.baseEvent=P.decode(n,n.uint32());continue;case 2:if(i!==18)break;o.event=U.unwrap(U.decode(n,n.uint32()));continue;case 3:if(i!==26)break;o.source=n.string();continue;case 4:if(i!==34)break;o.subagentRunId=n.string();continue}if((i&7)===4||i===0)break;n.skip(i&7)}return o},create(t){return Vi.fromPartial(t??{})},fromPartial(t){let e=th();return e.baseEvent=t.baseEvent!==void 0&&t.baseEvent!==null?P.fromPartial(t.baseEvent):void 0,e.event=t.event??void 0,e.source=t.source??void 0,e.subagentRunId=t.subagentRunId??void 0,e}};function nh(){return{baseEvent:void 0,name:"",value:void 0,subagentRunId:void 0}}var qi={encode(t,e=new q){return t.baseEvent!==void 0&&P.encode(t.baseEvent,e.uint32(10).fork()).join(),t.name!==""&&e.uint32(18).string(t.name),t.value!==void 0&&U.encode(U.wrap(t.value),e.uint32(26).fork()).join(),t.subagentRunId!==void 0&&e.uint32(34).string(t.subagentRunId),e},decode(t,e){let n=t instanceof C?t:new C(t),r=e===void 0?n.len:n.pos+e,o=nh();for(;n.pos<r;){let i=n.uint32();switch(i>>>3){case 1:if(i!==10)break;o.baseEvent=P.decode(n,n.uint32());continue;case 2:if(i!==18)break;o.name=n.string();continue;case 3:if(i!==26)break;o.value=U.unwrap(U.decode(n,n.uint32()));continue;case 4:if(i!==34)break;o.subagentRunId=n.string();continue}if((i&7)===4||i===0)break;n.skip(i&7)}return o},create(t){return qi.fromPartial(t??{})},fromPartial(t){let e=nh();return e.baseEvent=t.baseEvent!==void 0&&t.baseEvent!==null?P.fromPartial(t.baseEvent):void 0,e.name=t.name??"",e.value=t.value??void 0,e.subagentRunId=t.subagentRunId??void 0,e}};function rh(){return{baseEvent:void 0,threadId:"",runId:""}}var Wi={encode(t,e=new q){return t.baseEvent!==void 0&&P.encode(t.baseEvent,e.uint32(10).fork()).join(),t.threadId!==""&&e.uint32(18).string(t.threadId),t.runId!==""&&e.uint32(26).string(t.runId),e},decode(t,e){let n=t instanceof C?t:new C(t),r=e===void 0?n.len:n.pos+e,o=rh();for(;n.pos<r;){let i=n.uint32();switch(i>>>3){case 1:if(i!==10)break;o.baseEvent=P.decode(n,n.uint32());continue;case 2:if(i!==18)break;o.threadId=n.string();continue;case 3:if(i!==26)break;o.runId=n.string();continue}if((i&7)===4||i===0)break;n.skip(i&7)}return o},create(t){return Wi.fromPartial(t??{})},fromPartial(t){let e=rh();return e.baseEvent=t.baseEvent!==void 0&&t.baseEvent!==null?P.fromPartial(t.baseEvent):void 0,e.threadId=t.threadId??"",e.runId=t.runId??"",e}};function oh(){return{provider:void 0,model:void 0,inputTokens:void 0,outputTokens:void 0,totalTokens:void 0,reasoningTokens:void 0,cachedInputTokens:void 0}}var gn={encode(t,e=new q){return t.provider!==void 0&&e.uint32(10).string(t.provider),t.model!==void 0&&e.uint32(18).string(t.model),t.inputTokens!==void 0&&e.uint32(24).int64(t.inputTokens),t.outputTokens!==void 0&&e.uint32(32).int64(t.outputTokens),t.totalTokens!==void 0&&e.uint32(40).int64(t.totalTokens),t.reasoningTokens!==void 0&&e.uint32(48).int64(t.reasoningTokens),t.cachedInputTokens!==void 0&&e.uint32(56).int64(t.cachedInputTokens),e},decode(t,e){let n=t instanceof C?t:new C(t),r=e===void 0?n.len:n.pos+e,o=oh();for(;n.pos<r;){let i=n.uint32();switch(i>>>3){case 1:if(i!==10)break;o.provider=n.string();continue;case 2:if(i!==18)break;o.model=n.string();continue;case 3:if(i!==24)break;o.inputTokens=er(n.int64());continue;case 4:if(i!==32)break;o.outputTokens=er(n.int64());continue;case 5:if(i!==40)break;o.totalTokens=er(n.int64());continue;case 6:if(i!==48)break;o.reasoningTokens=er(n.int64());continue;case 7:if(i!==56)break;o.cachedInputTokens=er(n.int64());continue}if((i&7)===4||i===0)break;n.skip(i&7)}return o},create(t){return gn.fromPartial(t??{})},fromPartial(t){let e=oh();return e.provider=t.provider??void 0,e.model=t.model??void 0,e.inputTokens=t.inputTokens??void 0,e.outputTokens=t.outputTokens??void 0,e.totalTokens=t.totalTokens??void 0,e.reasoningTokens=t.reasoningTokens??void 0,e.cachedInputTokens=t.cachedInputTokens??void 0,e}};function ih(){return{baseEvent:void 0,threadId:"",runId:"",result:void 0,outcome:"",interrupts:[],usage:[]}}var Xi={encode(t,e=new q){t.baseEvent!==void 0&&P.encode(t.baseEvent,e.uint32(10).fork()).join(),t.threadId!==""&&e.uint32(18).string(t.threadId),t.runId!==""&&e.uint32(26).string(t.runId),t.result!==void 0&&U.encode(U.wrap(t.result),e.uint32(34).fork()).join(),t.outcome!==""&&e.uint32(42).string(t.outcome);for(let n of t.interrupts)Pi.encode(n,e.uint32(50).fork()).join();for(let n of t.usage)gn.encode(n,e.uint32(58).fork()).join();return e},decode(t,e){let n=t instanceof C?t:new C(t),r=e===void 0?n.len:n.pos+e,o=ih();for(;n.pos<r;){let i=n.uint32();switch(i>>>3){case 1:if(i!==10)break;o.baseEvent=P.decode(n,n.uint32());continue;case 2:if(i!==18)break;o.threadId=n.string();continue;case 3:if(i!==26)break;o.runId=n.string();continue;case 4:if(i!==34)break;o.result=U.unwrap(U.decode(n,n.uint32()));continue;case 5:if(i!==42)break;o.outcome=n.string();continue;case 6:if(i!==50)break;o.interrupts.push(Pi.decode(n,n.uint32()));continue;case 7:if(i!==58)break;o.usage.push(gn.decode(n,n.uint32()));continue}if((i&7)===4||i===0)break;n.skip(i&7)}return o},create(t){return Xi.fromPartial(t??{})},fromPartial(t){let e=ih();return e.baseEvent=t.baseEvent!==void 0&&t.baseEvent!==null?P.fromPartial(t.baseEvent):void 0,e.threadId=t.threadId??"",e.runId=t.runId??"",e.result=t.result??void 0,e.outcome=t.outcome??"",e.interrupts=t.interrupts?.map(n=>Pi.fromPartial(n))||[],e.usage=t.usage?.map(n=>gn.fromPartial(n))||[],e}};function sh(){return{baseEvent:void 0,code:void 0,message:"",usage:[]}}var Yi={encode(t,e=new q){t.baseEvent!==void 0&&P.encode(t.baseEvent,e.uint32(10).fork()).join(),t.code!==void 0&&e.uint32(18).string(t.code),t.message!==""&&e.uint32(26).string(t.message);for(let n of t.usage)gn.encode(n,e.uint32(34).fork()).join();return e},decode(t,e){let n=t instanceof C?t:new C(t),r=e===void 0?n.len:n.pos+e,o=sh();for(;n.pos<r;){let i=n.uint32();switch(i>>>3){case 1:if(i!==10)break;o.baseEvent=P.decode(n,n.uint32());continue;case 2:if(i!==18)break;o.code=n.string();continue;case 3:if(i!==26)break;o.message=n.string();continue;case 4:if(i!==34)break;o.usage.push(gn.decode(n,n.uint32()));continue}if((i&7)===4||i===0)break;n.skip(i&7)}return o},create(t){return Yi.fromPartial(t??{})},fromPartial(t){let e=sh();return e.baseEvent=t.baseEvent!==void 0&&t.baseEvent!==null?P.fromPartial(t.baseEvent):void 0,e.code=t.code??void 0,e.message=t.message??"",e.usage=t.usage?.map(n=>gn.fromPartial(n))||[],e}};function ah(){return{baseEvent:void 0,stepName:"",subagentRunId:void 0}}var Ki={encode(t,e=new q){return t.baseEvent!==void 0&&P.encode(t.baseEvent,e.uint32(10).fork()).join(),t.stepName!==""&&e.uint32(18).string(t.stepName),t.subagentRunId!==void 0&&e.uint32(26).string(t.subagentRunId),e},decode(t,e){let n=t instanceof C?t:new C(t),r=e===void 0?n.len:n.pos+e,o=ah();for(;n.pos<r;){let i=n.uint32();switch(i>>>3){case 1:if(i!==10)break;o.baseEvent=P.decode(n,n.uint32());continue;case 2:if(i!==18)break;o.stepName=n.string();continue;case 3:if(i!==26)break;o.subagentRunId=n.string();continue}if((i&7)===4||i===0)break;n.skip(i&7)}return o},create(t){return Ki.fromPartial(t??{})},fromPartial(t){let e=ah();return e.baseEvent=t.baseEvent!==void 0&&t.baseEvent!==null?P.fromPartial(t.baseEvent):void 0,e.stepName=t.stepName??"",e.subagentRunId=t.subagentRunId??void 0,e}};function lh(){return{baseEvent:void 0,stepName:"",subagentRunId:void 0}}var Zi={encode(t,e=new q){return t.baseEvent!==void 0&&P.encode(t.baseEvent,e.uint32(10).fork()).join(),t.stepName!==""&&e.uint32(18).string(t.stepName),t.subagentRunId!==void 0&&e.uint32(26).string(t.subagentRunId),e},decode(t,e){let n=t instanceof C?t:new C(t),r=e===void 0?n.len:n.pos+e,o=lh();for(;n.pos<r;){let i=n.uint32();switch(i>>>3){case 1:if(i!==10)break;o.baseEvent=P.decode(n,n.uint32());continue;case 2:if(i!==18)break;o.stepName=n.string();continue;case 3:if(i!==26)break;o.subagentRunId=n.string();continue}if((i&7)===4||i===0)break;n.skip(i&7)}return o},create(t){return Zi.fromPartial(t??{})},fromPartial(t){let e=lh();return e.baseEvent=t.baseEvent!==void 0&&t.baseEvent!==null?P.fromPartial(t.baseEvent):void 0,e.stepName=t.stepName??"",e.subagentRunId=t.subagentRunId??void 0,e}};function dh(){return{baseEvent:void 0,messageId:void 0,role:void 0,delta:void 0,name:void 0,subagentRunId:void 0}}var Qi={encode(t,e=new q){return t.baseEvent!==void 0&&P.encode(t.baseEvent,e.uint32(10).fork()).join(),t.messageId!==void 0&&e.uint32(18).string(t.messageId),t.role!==void 0&&e.uint32(26).string(t.role),t.delta!==void 0&&e.uint32(34).string(t.delta),t.name!==void 0&&e.uint32(42).string(t.name),t.subagentRunId!==void 0&&e.uint32(50).string(t.subagentRunId),e},decode(t,e){let n=t instanceof C?t:new C(t),r=e===void 0?n.len:n.pos+e,o=dh();for(;n.pos<r;){let i=n.uint32();switch(i>>>3){case 1:if(i!==10)break;o.baseEvent=P.decode(n,n.uint32());continue;case 2:if(i!==18)break;o.messageId=n.string();continue;case 3:if(i!==26)break;o.role=n.string();continue;case 4:if(i!==34)break;o.delta=n.string();continue;case 5:if(i!==42)break;o.name=n.string();continue;case 6:if(i!==50)break;o.subagentRunId=n.string();continue}if((i&7)===4||i===0)break;n.skip(i&7)}return o},create(t){return Qi.fromPartial(t??{})},fromPartial(t){let e=dh();return e.baseEvent=t.baseEvent!==void 0&&t.baseEvent!==null?P.fromPartial(t.baseEvent):void 0,e.messageId=t.messageId??void 0,e.role=t.role??void 0,e.delta=t.delta??void 0,e.name=t.name??void 0,e.subagentRunId=t.subagentRunId??void 0,e}};function ch(){return{baseEvent:void 0,toolCallId:void 0,toolCallName:void 0,parentMessageId:void 0,delta:void 0,subagentRunId:void 0}}var Ji={encode(t,e=new q){return t.baseEvent!==void 0&&P.encode(t.baseEvent,e.uint32(10).fork()).join(),t.toolCallId!==void 0&&e.uint32(18).string(t.toolCallId),t.toolCallName!==void 0&&e.uint32(26).string(t.toolCallName),t.parentMessageId!==void 0&&e.uint32(34).string(t.parentMessageId),t.delta!==void 0&&e.uint32(42).string(t.delta),t.subagentRunId!==void 0&&e.uint32(50).string(t.subagentRunId),e},decode(t,e){let n=t instanceof C?t:new C(t),r=e===void 0?n.len:n.pos+e,o=ch();for(;n.pos<r;){let i=n.uint32();switch(i>>>3){case 1:if(i!==10)break;o.baseEvent=P.decode(n,n.uint32());continue;case 2:if(i!==18)break;o.toolCallId=n.string();continue;case 3:if(i!==26)break;o.toolCallName=n.string();continue;case 4:if(i!==34)break;o.parentMessageId=n.string();continue;case 5:if(i!==42)break;o.delta=n.string();continue;case 6:if(i!==50)break;o.subagentRunId=n.string();continue}if((i&7)===4||i===0)break;n.skip(i&7)}return o},create(t){return Ji.fromPartial(t??{})},fromPartial(t){let e=ch();return e.baseEvent=t.baseEvent!==void 0&&t.baseEvent!==null?P.fromPartial(t.baseEvent):void 0,e.toolCallId=t.toolCallId??void 0,e.toolCallName=t.toolCallName??void 0,e.parentMessageId=t.parentMessageId??void 0,e.delta=t.delta??void 0,e.subagentRunId=t.subagentRunId??void 0,e}};function uh(){return{baseEvent:void 0,subagentRunId:"",name:"",description:void 0,parentSubagentRunId:void 0,parentToolCallId:void 0,parentMessageId:void 0}}var es={encode(t,e=new q){return t.baseEvent!==void 0&&P.encode(t.baseEvent,e.uint32(10).fork()).join(),t.subagentRunId!==""&&e.uint32(18).string(t.subagentRunId),t.name!==""&&e.uint32(26).string(t.name),t.description!==void 0&&e.uint32(34).string(t.description),t.parentSubagentRunId!==void 0&&e.uint32(42).string(t.parentSubagentRunId),t.parentToolCallId!==void 0&&e.uint32(50).string(t.parentToolCallId),t.parentMessageId!==void 0&&e.uint32(58).string(t.parentMessageId),e},decode(t,e){let n=t instanceof C?t:new C(t),r=e===void 0?n.len:n.pos+e,o=uh();for(;n.pos<r;){let i=n.uint32();switch(i>>>3){case 1:if(i!==10)break;o.baseEvent=P.decode(n,n.uint32());continue;case 2:if(i!==18)break;o.subagentRunId=n.string();continue;case 3:if(i!==26)break;o.name=n.string();continue;case 4:if(i!==34)break;o.description=n.string();continue;case 5:if(i!==42)break;o.parentSubagentRunId=n.string();continue;case 6:if(i!==50)break;o.parentToolCallId=n.string();continue;case 7:if(i!==58)break;o.parentMessageId=n.string();continue}if((i&7)===4||i===0)break;n.skip(i&7)}return o},create(t){return es.fromPartial(t??{})},fromPartial(t){let e=uh();return e.baseEvent=t.baseEvent!==void 0&&t.baseEvent!==null?P.fromPartial(t.baseEvent):void 0,e.subagentRunId=t.subagentRunId??"",e.name=t.name??"",e.description=t.description??void 0,e.parentSubagentRunId=t.parentSubagentRunId??void 0,e.parentToolCallId=t.parentToolCallId??void 0,e.parentMessageId=t.parentMessageId??void 0,e}};function hh(){return{baseEvent:void 0,subagentRunId:"",result:void 0,outcome:"",interruptIds:[]}}var ts={encode(t,e=new q){t.baseEvent!==void 0&&P.encode(t.baseEvent,e.uint32(10).fork()).join(),t.subagentRunId!==""&&e.uint32(18).string(t.subagentRunId),t.result!==void 0&&U.encode(U.wrap(t.result),e.uint32(26).fork()).join(),t.outcome!==""&&e.uint32(34).string(t.outcome);for(let n of t.interruptIds)e.uint32(42).string(n);return e},decode(t,e){let n=t instanceof C?t:new C(t),r=e===void 0?n.len:n.pos+e,o=hh();for(;n.pos<r;){let i=n.uint32();switch(i>>>3){case 1:if(i!==10)break;o.baseEvent=P.decode(n,n.uint32());continue;case 2:if(i!==18)break;o.subagentRunId=n.string();continue;case 3:if(i!==26)break;o.result=U.unwrap(U.decode(n,n.uint32()));continue;case 4:if(i!==34)break;o.outcome=n.string();continue;case 5:if(i!==42)break;o.interruptIds.push(n.string());continue}if((i&7)===4||i===0)break;n.skip(i&7)}return o},create(t){return ts.fromPartial(t??{})},fromPartial(t){let e=hh();return e.baseEvent=t.baseEvent!==void 0&&t.baseEvent!==null?P.fromPartial(t.baseEvent):void 0,e.subagentRunId=t.subagentRunId??"",e.result=t.result??void 0,e.outcome=t.outcome??"",e.interruptIds=t.interruptIds?.map(n=>n)||[],e}};function ph(){return{baseEvent:void 0,subagentRunId:"",message:"",code:void 0}}var ns={encode(t,e=new q){return t.baseEvent!==void 0&&P.encode(t.baseEvent,e.uint32(10).fork()).join(),t.subagentRunId!==""&&e.uint32(18).string(t.subagentRunId),t.message!==""&&e.uint32(26).string(t.message),t.code!==void 0&&e.uint32(34).string(t.code),e},decode(t,e){let n=t instanceof C?t:new C(t),r=e===void 0?n.len:n.pos+e,o=ph();for(;n.pos<r;){let i=n.uint32();switch(i>>>3){case 1:if(i!==10)break;o.baseEvent=P.decode(n,n.uint32());continue;case 2:if(i!==18)break;o.subagentRunId=n.string();continue;case 3:if(i!==26)break;o.message=n.string();continue;case 4:if(i!==34)break;o.code=n.string();continue}if((i&7)===4||i===0)break;n.skip(i&7)}return o},create(t){return ns.fromPartial(t??{})},fromPartial(t){let e=ph();return e.baseEvent=t.baseEvent!==void 0&&t.baseEvent!==null?P.fromPartial(t.baseEvent):void 0,e.subagentRunId=t.subagentRunId??"",e.message=t.message??"",e.code=t.code??void 0,e}};function fh(){return{textMessageStart:void 0,textMessageContent:void 0,textMessageEnd:void 0,toolCallStart:void 0,toolCallArgs:void 0,toolCallEnd:void 0,stateSnapshot:void 0,stateDelta:void 0,messagesSnapshot:void 0,raw:void 0,custom:void 0,runStarted:void 0,runFinished:void 0,runError:void 0,stepStarted:void 0,stepFinished:void 0,textMessageChunk:void 0,toolCallChunk:void 0,subagentStarted:void 0,subagentFinished:void 0,subagentError:void 0}}var mh={encode(t,e=new q){return t.textMessageStart!==void 0&&Di.encode(t.textMessageStart,e.uint32(10).fork()).join(),t.textMessageContent!==void 0&&Ui.encode(t.textMessageContent,e.uint32(18).fork()).join(),t.textMessageEnd!==void 0&&Hi.encode(t.textMessageEnd,e.uint32(26).fork()).join(),t.toolCallStart!==void 0&&Gi.encode(t.toolCallStart,e.uint32(34).fork()).join(),t.toolCallArgs!==void 0&&zi.encode(t.toolCallArgs,e.uint32(42).fork()).join(),t.toolCallEnd!==void 0&&Fi.encode(t.toolCallEnd,e.uint32(50).fork()).join(),t.stateSnapshot!==void 0&&$i.encode(t.stateSnapshot,e.uint32(58).fork()).join(),t.stateDelta!==void 0&&Bi.encode(t.stateDelta,e.uint32(66).fork()).join(),t.messagesSnapshot!==void 0&&ji.encode(t.messagesSnapshot,e.uint32(74).fork()).join(),t.raw!==void 0&&Vi.encode(t.raw,e.uint32(82).fork()).join(),t.custom!==void 0&&qi.encode(t.custom,e.uint32(90).fork()).join(),t.runStarted!==void 0&&Wi.encode(t.runStarted,e.uint32(98).fork()).join(),t.runFinished!==void 0&&Xi.encode(t.runFinished,e.uint32(106).fork()).join(),t.runError!==void 0&&Yi.encode(t.runError,e.uint32(114).fork()).join(),t.stepStarted!==void 0&&Ki.encode(t.stepStarted,e.uint32(122).fork()).join(),t.stepFinished!==void 0&&Zi.encode(t.stepFinished,e.uint32(130).fork()).join(),t.textMessageChunk!==void 0&&Qi.encode(t.textMessageChunk,e.uint32(138).fork()).join(),t.toolCallChunk!==void 0&&Ji.encode(t.toolCallChunk,e.uint32(146).fork()).join(),t.subagentStarted!==void 0&&es.encode(t.subagentStarted,e.uint32(154).fork()).join(),t.subagentFinished!==void 0&&ts.encode(t.subagentFinished,e.uint32(162).fork()).join(),t.subagentError!==void 0&&ns.encode(t.subagentError,e.uint32(170).fork()).join(),e},decode(t,e){let n=t instanceof C?t:new C(t),r=e===void 0?n.len:n.pos+e,o=fh();for(;n.pos<r;){let i=n.uint32();switch(i>>>3){case 1:if(i!==10)break;o.textMessageStart=Di.decode(n,n.uint32());continue;case 2:if(i!==18)break;o.textMessageContent=Ui.decode(n,n.uint32());continue;case 3:if(i!==26)break;o.textMessageEnd=Hi.decode(n,n.uint32());continue;case 4:if(i!==34)break;o.toolCallStart=Gi.decode(n,n.uint32());continue;case 5:if(i!==42)break;o.toolCallArgs=zi.decode(n,n.uint32());continue;case 6:if(i!==50)break;o.toolCallEnd=Fi.decode(n,n.uint32());continue;case 7:if(i!==58)break;o.stateSnapshot=$i.decode(n,n.uint32());continue;case 8:if(i!==66)break;o.stateDelta=Bi.decode(n,n.uint32());continue;case 9:if(i!==74)break;o.messagesSnapshot=ji.decode(n,n.uint32());continue;case 10:if(i!==82)break;o.raw=Vi.decode(n,n.uint32());continue;case 11:if(i!==90)break;o.custom=qi.decode(n,n.uint32());continue;case 12:if(i!==98)break;o.runStarted=Wi.decode(n,n.uint32());continue;case 13:if(i!==106)break;o.runFinished=Xi.decode(n,n.uint32());continue;case 14:if(i!==114)break;o.runError=Yi.decode(n,n.uint32());continue;case 15:if(i!==122)break;o.stepStarted=Ki.decode(n,n.uint32());continue;case 16:if(i!==130)break;o.stepFinished=Zi.decode(n,n.uint32());continue;case 17:if(i!==138)break;o.textMessageChunk=Qi.decode(n,n.uint32());continue;case 18:if(i!==146)break;o.toolCallChunk=Ji.decode(n,n.uint32());continue;case 19:if(i!==154)break;o.subagentStarted=es.decode(n,n.uint32());continue;case 20:if(i!==162)break;o.subagentFinished=ts.decode(n,n.uint32());continue;case 21:if(i!==170)break;o.subagentError=ns.decode(n,n.uint32());continue}if((i&7)===4||i===0)break;n.skip(i&7)}return o},create(t){return mh.fromPartial(t??{})},fromPartial(t){let e=fh();return e.textMessageStart=t.textMessageStart!==void 0&&t.textMessageStart!==null?Di.fromPartial(t.textMessageStart):void 0,e.textMessageContent=t.textMessageContent!==void 0&&t.textMessageContent!==null?Ui.fromPartial(t.textMessageContent):void 0,e.textMessageEnd=t.textMessageEnd!==void 0&&t.textMessageEnd!==null?Hi.fromPartial(t.textMessageEnd):void 0,e.toolCallStart=t.toolCallStart!==void 0&&t.toolCallStart!==null?Gi.fromPartial(t.toolCallStart):void 0,e.toolCallArgs=t.toolCallArgs!==void 0&&t.toolCallArgs!==null?zi.fromPartial(t.toolCallArgs):void 0,e.toolCallEnd=t.toolCallEnd!==void 0&&t.toolCallEnd!==null?Fi.fromPartial(t.toolCallEnd):void 0,e.stateSnapshot=t.stateSnapshot!==void 0&&t.stateSnapshot!==null?$i.fromPartial(t.stateSnapshot):void 0,e.stateDelta=t.stateDelta!==void 0&&t.stateDelta!==null?Bi.fromPartial(t.stateDelta):void 0,e.messagesSnapshot=t.messagesSnapshot!==void 0&&t.messagesSnapshot!==null?ji.fromPartial(t.messagesSnapshot):void 0,e.raw=t.raw!==void 0&&t.raw!==null?Vi.fromPartial(t.raw):void 0,e.custom=t.custom!==void 0&&t.custom!==null?qi.fromPartial(t.custom):void 0,e.runStarted=t.runStarted!==void 0&&t.runStarted!==null?Wi.fromPartial(t.runStarted):void 0,e.runFinished=t.runFinished!==void 0&&t.runFinished!==null?Xi.fromPartial(t.runFinished):void 0,e.runError=t.runError!==void 0&&t.runError!==null?Yi.fromPartial(t.runError):void 0,e.stepStarted=t.stepStarted!==void 0&&t.stepStarted!==null?Ki.fromPartial(t.stepStarted):void 0,e.stepFinished=t.stepFinished!==void 0&&t.stepFinished!==null?Zi.fromPartial(t.stepFinished):void 0,e.textMessageChunk=t.textMessageChunk!==void 0&&t.textMessageChunk!==null?Qi.fromPartial(t.textMessageChunk):void 0,e.toolCallChunk=t.toolCallChunk!==void 0&&t.toolCallChunk!==null?Ji.fromPartial(t.toolCallChunk):void 0,e.subagentStarted=t.subagentStarted!==void 0&&t.subagentStarted!==null?es.fromPartial(t.subagentStarted):void 0,e.subagentFinished=t.subagentFinished!==void 0&&t.subagentFinished!==null?ts.fromPartial(t.subagentFinished):void 0,e.subagentError=t.subagentError!==void 0&&t.subagentError!==null?ns.fromPartial(t.subagentError):void 0,e}};function er(t){let e=globalThis.Number(t.toString());if(e>globalThis.Number.MAX_SAFE_INTEGER)throw new globalThis.Error("Value is larger than Number.MAX_SAFE_INTEGER");if(e<globalThis.Number.MIN_SAFE_INTEGER)throw new globalThis.Error("Value is smaller than Number.MIN_SAFE_INTEGER");return e}var gh=t=>t&&typeof t=="object"?t:void 0;var Ei=t=>{let e=gh(t);if(e){if(e.data){let n=e.data;return{type:"data",value:n.value,mimeType:n.mimeType}}if(e.url){let n=e.url;return{type:"url",value:n.value,mimeType:n.mimeType}}}},$b=t=>{let e=gh(t);if(e){if(e.text)return{type:"text",text:e.text.text};if(e.image){let n=e.image;return{type:"image",source:Ei(n.source),metadata:n.metadata}}if(e.audio){let n=e.audio;return{type:"audio",source:Ei(n.source),metadata:n.metadata}}if(e.video){let n=e.video;return{type:"video",source:Ei(n.source),metadata:n.metadata}}if(e.document){let n=e.document;return{type:"document",source:Ei(n.source),metadata:n.metadata}}}};function vh(t){let e=mh.decode(t),n=Object.values(e).find(r=>r!==void 0);if(!n)throw new Error("Invalid event");if(n.type=Fb[n.baseEvent.type],n.timestamp=n.baseEvent.timestamp,n.rawEvent=n.baseEvent.rawEvent,n.baseEvent.metadata!==void 0&&(n.metadata=n.baseEvent.metadata),delete n.baseEvent,n.type===g.MESSAGES_SNAPSHOT)for(let r of n.messages){let o=r;if(o.role==="user"&&Array.isArray(o.contentParts)){let i=o.contentParts.map(s=>$b(s)).filter(s=>s!==void 0);i.length>0&&(o.content=i)}Array.isArray(o.contentParts)&&o.contentParts.length===0&&(o.contentParts=void 0),o.toolCalls?.length===0&&(o.toolCalls=void 0)}if(n.type===g.RUN_FINISHED){let r=n,o=typeof r.outcome=="string"&&r.outcome!==""?r.outcome:void 0,i=Array.isArray(r.interrupts)?r.interrupts:[];delete r.interrupts,o==="interrupt"?r.outcome={type:"interrupt",interrupts:i}:o==="success"?r.outcome={type:"success"}:delete r.outcome}if(n.type===g.SUBAGENT_FINISHED){let r=n,o=typeof r.outcome=="string"&&r.outcome!==""?r.outcome:void 0,i=Array.isArray(r.interruptIds)?r.interruptIds:[];delete r.interruptIds,o==="suspended"?r.outcome={type:"suspended",...i.length>0&&{interruptIds:i}}:o==="success"?r.outcome={type:"success"}:delete r.outcome}if((n.type===g.RUN_FINISHED||n.type===g.RUN_ERROR)&&Array.isArray(n.usage)&&n.usage.length===0&&delete n.usage,n.type===g.STATE_DELTA)for(let r of n.delta)r.op=zb[r.op].toLowerCase(),Object.keys(r).forEach(o=>{r[o]===void 0&&delete r[o]});return Object.keys(n).forEach(r=>{n[r]===void 0&&delete n[r]}),Go.parse(n)}var Rl="application/vnd.ag-ui.event+proto";var jb=/^[v^~<>=]*?(\d+)(?:\.([x*]|\d+)(?:\.([x*]|\d+)(?:\.([x*]|\d+))?(?:-([\da-z\-]+(?:\.[\da-z\-]+)*))?(?:\+[\da-z\-]+(?:\.[\da-z\-]+)*)?)?)?$/i,Il=t=>{if(typeof t!="string")throw new TypeError("Invalid argument expected string");let e=t.match(jb);if(!e)throw new Error(`Invalid argument not valid semver ('${t}' received)`);return e.shift(),e},bh=t=>t==="*"||t==="x"||t==="X",yh=t=>{let e=parseInt(t,10);return isNaN(e)?t:e},Vb=(t,e)=>typeof t!=typeof e?[String(t),String(e)]:[t,e],qb=(t,e)=>{if(bh(t)||bh(e))return 0;let[n,r]=Vb(yh(t),yh(e));return n>r?1:n<r?-1:0},Cl=(t,e)=>{for(let n=0;n<Math.max(t.length,e.length);n++){let r=qb(t[n]||"0",e[n]||"0");if(r!==0)return r}return 0};var tr=(t,e)=>{let n=Il(t),r=Il(e),o=n.pop(),i=r.pop(),s=Cl(n,r);return s!==0?s:o&&i?Cl(o.split("."),i.split(".")):o||i?o?-1:1:0};var J=t=>{if(typeof structuredClone=="function")return structuredClone(t);try{return JSON.parse(JSON.stringify(t))}catch{return Array.isArray(t)?[...t]:{...t}}};function be(){return Ct()}function Ml(t){if(Object.freeze(t),typeof t=="object"&&t)for(let e of Object.values(t))typeof e=="object"&&e&&!Object.isFrozen(e)&&Ml(e);return t}var wh=512*1024;function xh(t,e,n){let r=0,o=[t,e],i=new WeakSet;for(;o.length>0;){let s=o.pop();if(typeof s=="string"){if(r+=s.length,r>n)return!0}else if(typeof s=="object"&&s){if(i.has(s))continue;if(i.add(s),Array.isArray(s))for(let a=0;a<s.length;a++)o.push(s[a]);else{let a=Object.keys(s);for(let l=0;l<a.length;l++){let d=a[l];if(r+=d.length,r>n)return!0;o.push(s[d])}}}}return!1}async function re(t,e,n,r){let o=typeof process<"u"&&process.env!==void 0,i=o&&!!process.env.VITEST_WORKER_ID,s=o&&!!process.env.VITEST_WORKER_ID,a=s&&!xh(e,n,wh),l=a?J(e):e,d=a?J(n):n,u=!1,m=!1,w;for(let p of t)try{a&&(Ml(l),Ml(d));let h=await r(p,l,d);if(h===void 0)continue;let v=!1;if(h.messages!==void 0&&h.messages!==l&&(l=J(h.messages),u=!0,v=!0),h.state!==void 0&&h.state!==d&&(d=J(h.state),m=!0,v=!0),a&&v&&xh(l,d,wh)&&(a=!1),w=h.stopPropagation,w===!0)break}catch(h){if(s&&h instanceof TypeError){if(i)throw h;console.error("AG-UI: Subscriber attempted to mutate frozen inputs in-place. Return mutations via AgentStateMutation instead of mutating directly.",h)}else i||console.error("Subscriber error:",h);continue}return{...u?{messages:Object.isFrozen(l)?J(l):l}:{},...m?{state:Object.isFrozen(d)?J(d):d}:{},...w===void 0?{}:{stopPropagation:w}}}function rs(t){if(!t)return{enabled:!1,events:!1,lifecycle:!1,verbose:!1};if(t===!0)return{enabled:!0,events:!0,lifecycle:!0,verbose:!0};let e=t.events??!0,n=t.lifecycle??!0,r=t.verbose??!1;return{enabled:e||n,events:e,lifecycle:n,verbose:r}}function Or(t){if(t instanceof Ll)return t;if(t===!0)return new Ll(rs(!0))}var Ll=class{constructor(t){this.config=t}event(t,e,n,r){this.config.events&&(this.config.verbose?console.debug(`[${t}] ${e}`,typeof n=="string"?n:JSON.stringify(n)):console.debug(`[${t}] ${e}`,r??n))}lifecycle(t,e,n){this.config.lifecycle&&(n?console.debug(`[${t}] ${e}`,n):console.debug(`[${t}] ${e}`))}get eventsEnabled(){return this.config.events}get lifecycleEnabled(){return this.config.lifecycle}get enabled(){return this.config.enabled}};function Nl(t){return t.enabled?new Ll(t):void 0}function Wb(t,e,n){if(e){let o=t.find(s=>s.id===e);if(o?.role==="assistant")return o;o&&console.warn(`TOOL_CALL_START: parentMessageId '${e}' matches a '${o.role}' message, not assistant \u2014 falling back to toolCallId`);let i={id:o?n:e,role:"assistant",toolCalls:[]};return t.push(i),i}let r={id:n,role:"assistant",toolCalls:[]};return t.push(r),r}function je(t,e){return!t||e.metadata===void 0?!1:(t.metadata=Fc(t.metadata,J(e.metadata)),!0)}var Nh=(t,e,n,r,o)=>{let i=Or(o),s=J(n.messages),a=J(t.state),l={},d=m=>{m.messages!==void 0&&(s=m.messages,l.messages=m.messages),m.state!==void 0&&(a=m.state,l.state=m.state)},u=()=>{let m=J(l);return l={},m.messages!==void 0||m.state!==void 0?ne(m):ni};return e.pipe(vi(async m=>{let w=await re(r,s,a,(p,h,v)=>p.onEvent?.({event:m,agent:n,input:t,messages:h,state:v}));if(d(w),w.stopPropagation===!0?i?.event("APPLY","Event dropped:",m,{type:m.type,reason:"stopPropagation by subscriber"}):i?.event("APPLY","Event applied:",m,{type:m.type,subscribers:r.length}),w.stopPropagation===!0)return u();switch(m.type){case g.TEXT_MESSAGE_START:{let p=await re(r,s,a,(h,v,x)=>h.onTextMessageStartEvent?.({event:m,messages:v,state:x,agent:n,input:t}));if(d(p),p.stopPropagation!==!0){let{messageId:h,role:v="assistant",name:x,subagentRunId:S}=m,_=s.find(b=>b.id===h);if(_?.role==="activity")return console.warn(`TEXT_MESSAGE_START: Message '${h}' is an activity message \u2014 message ids must be unique across activity and text messages`),u();let O=_;if(!O){let b={id:h,role:v,content:"",...x!==void 0&&{name:x},...S!=null&&{subagentRunId:S}};s.push(b),O=b}let G=je(O,m);(!_||G)&&d({messages:s})}return u()}case g.TEXT_MESSAGE_CONTENT:{let{messageId:p,delta:h}=m,v=s.find(S=>S.id===p);if(!v)return console.warn(`TEXT_MESSAGE_CONTENT: No message found with ID '${p}'`),u();if(v.role==="activity")return console.warn(`TEXT_MESSAGE_CONTENT: Message '${p}' is an activity message \u2014 message ids must be unique across activity and text messages`),u();let x=await re(r,s,a,(S,_,O)=>S.onTextMessageContentEvent?.({event:m,messages:_,state:O,agent:n,input:t,textMessageBuffer:typeof v.content=="string"?v.content:""}));return d(x),x.stopPropagation!==!0&&(v.content=`${typeof v.content=="string"?v.content:""}${h}`,je(v,m),d({messages:s})),u()}case g.TEXT_MESSAGE_END:{let{messageId:p}=m,h=s.find(x=>x.id===p);if(!h)return console.warn(`TEXT_MESSAGE_END: No message found with ID '${p}'`),u();if(h.role==="activity")return console.warn(`TEXT_MESSAGE_END: Message '${p}' is an activity message \u2014 message ids must be unique across activity and text messages`),u();let v=await re(r,s,a,(x,S,_)=>x.onTextMessageEndEvent?.({event:m,messages:S,state:_,agent:n,input:t,textMessageBuffer:typeof h.content=="string"?h.content:""}));return d(v),v.stopPropagation!==!0&&je(h,m)&&d({messages:s}),await Promise.all(r.map(x=>{x.onNewMessage?.({message:h,messages:s,state:a,agent:n,input:t})})),u()}case g.TOOL_CALL_START:{let p=await re(r,s,a,(h,v,x)=>h.onToolCallStartEvent?.({event:m,messages:v,state:x,agent:n,input:t}));if(d(p),p.stopPropagation!==!0){let{toolCallId:h,toolCallName:v,parentMessageId:x,subagentRunId:S}=m,_=s.find(A=>A.toolCalls?.some(E=>E.id===h))?.toolCalls?.find(A=>A.id===h);if(_){let A=_.function.name!==v;return A&&(console.warn(`TOOL_CALL_START: tool call '${h}' already exists with name '${_.function.name}' \u2014 updating it to '${v}'`),_.function.name=v),(je(_,m)||A)&&d({messages:s}),u()}let O=new Set(s.map(A=>A.id)),G=Wb(s,x,h);!O.has(G.id)&&S!=null&&G.subagentRunId===void 0&&(G.subagentRunId=S),G.toolCalls??=[];let b={id:h,type:"function",function:{name:v,arguments:""}};G.toolCalls.push(b),je(b,m),d({messages:s})}return u()}case g.TOOL_CALL_ARGS:{let{toolCallId:p,delta:h}=m,v=s.find(_=>_.toolCalls?.some(O=>O.id===p));if(!v)return console.warn(`TOOL_CALL_ARGS: No message found containing tool call with ID '${p}'`),u();let x=v.toolCalls?.find(_=>_.id===p);if(!x)return console.warn(`TOOL_CALL_ARGS: No tool call found with ID '${p}'`),u();let S=await re(r,s,a,(_,O,G)=>{let b=x.function.arguments,A=x.function.name,E={};try{E=wi(b)}catch{}return _.onToolCallArgsEvent?.({event:m,messages:O,state:G,agent:n,input:t,toolCallBuffer:b,toolCallName:A,partialToolCallArgs:E})});return d(S),S.stopPropagation!==!0&&(x.function.arguments+=h,je(x,m),d({messages:s})),u()}case g.TOOL_CALL_END:{let{toolCallId:p}=m,h=s.find(S=>S.toolCalls?.some(_=>_.id===p));if(!h)return console.warn(`TOOL_CALL_END: No message found containing tool call with ID '${p}'`),u();let v=h.toolCalls?.find(S=>S.id===p);if(!v)return console.warn(`TOOL_CALL_END: No tool call found with ID '${p}'`),u();let x=await re(r,s,a,(S,_,O)=>{let G=v.function.arguments,b=v.function.name,A={};try{A=JSON.parse(G)}catch{}return S.onToolCallEndEvent?.({event:m,messages:_,state:O,agent:n,input:t,toolCallName:b,toolCallArgs:A})});return d(x),x.stopPropagation!==!0&&je(v,m)&&d({messages:s}),await Promise.all(r.map(S=>{S.onNewToolCall?.({toolCall:v,messages:s,state:a,agent:n,input:t})})),u()}case g.TOOL_CALL_RESULT:{let p=await re(r,s,a,(h,v,x)=>h.onToolCallResultEvent?.({event:m,messages:v,state:x,agent:n,input:t}));if(d(p),p.stopPropagation!==!0){let{messageId:h,toolCallId:v,content:x,role:S,subagentRunId:_}=m,O={id:h,toolCallId:v,role:S||"tool",content:x,..._!=null&&{subagentRunId:_}};je(O,m);let G=s.findIndex(b=>b.role==="assistant"&&b.toolCalls?.some(A=>A.id===v));if(G===-1)s.push(O);else{let b=G+1;for(;b<s.length&&s[b].role==="tool";)b++;s.splice(b,0,O)}await Promise.all(r.map(b=>{b.onNewMessage?.({message:O,messages:s,state:a,agent:n,input:t})})),d({messages:s})}return u()}case g.STATE_SNAPSHOT:{let p=await re(r,s,a,(h,v,x)=>h.onStateSnapshotEvent?.({event:m,messages:v,state:x,agent:n,input:t}));if(d(p),p.stopPropagation!==!0){let{snapshot:h}=m;a=h,d({state:a})}return u()}case g.STATE_DELTA:{let p=await re(r,s,a,(h,v,x)=>h.onStateDeltaEvent?.({event:m,messages:v,state:x,agent:n,input:t}));if(d(p),p.stopPropagation!==!0){let{delta:h}=m;try{a=Wo.applyPatch(a,h,!0,!1).newDocument,d({state:a})}catch(v){let x=v instanceof Error?v.message:String(v);console.warn(`Failed to apply state patch:
Current state: ${JSON.stringify(a,null,2)}
Patch operations: ${JSON.stringify(h,null,2)}
Error: ${x}`)}}return u()}case g.MESSAGES_SNAPSHOT:{let p=await re(r,s,a,(h,v,x)=>h.onMessagesSnapshotEvent?.({event:m,messages:v,state:x,agent:n,input:t}));if(d(p),p.stopPropagation!==!0){let{messages:h}=m,v=h.map(b=>{if(b.subagentRunId!==null)return b;let A={...b};return delete A.subagentRunId,A}),x=new Map(v.map(b=>[b.id,b])),S=v.some(b=>b.role==="activity"),_=v.some(b=>b.role==="reasoning"),O=b=>b.role==="activity"&&!S||b.role==="reasoning"&&!_;s=s.filter(b=>O(b)||x.has(b.id)).map(b=>O(b)?b:x.get(b.id));let G=new Set(s.map(b=>b.id));for(let b of v)G.has(b.id)||s.push(b);d({messages:s})}return u()}case g.ACTIVITY_SNAPSHOT:{let p=m,h=s.findIndex(O=>O.id===p.messageId),v=h>=0?s[h]:void 0,x=v?.role==="activity"?v:void 0,S=p.replace??!0,_=await re(r,s,a,(O,G,b)=>O.onActivitySnapshotEvent?.({event:p,messages:G,state:b,agent:n,input:t,activityMessage:x,existingMessage:v}));if(d(_),_.stopPropagation!==!0){let O={id:p.messageId,role:"activity",activityType:p.activityType,content:J(p.content),...p.subagentRunId!=null&&{subagentRunId:p.subagentRunId}},G,b;h===-1?(s.push(O),G=O,b=O):x?(S&&(s[h]={...x,activityType:p.activityType,content:J(p.content),subagentRunId:p.subagentRunId},p.subagentRunId??delete s[h].subagentRunId),b=s[h]):S&&(s[h]=O,G=O,b=O),je(b,p),d({messages:s}),G&&await Promise.all(r.map(A=>A.onNewMessage?.({message:G,messages:s,state:a,agent:n,input:t})))}return u()}case g.ACTIVITY_DELTA:{let p=m,h=s.findIndex(_=>_.id===p.messageId);if(h===-1)return u();let v=s[h];if(v.role!=="activity")return console.warn(`ACTIVITY_DELTA: Message '${p.messageId}' is not an activity message`),u();let x=v,S=await re(r,s,a,(_,O,G)=>_.onActivityDeltaEvent?.({event:p,messages:O,state:G,agent:n,input:t,activityMessage:x}));if(d(S),S.stopPropagation!==!0)try{je(x,p)&&d({messages:s});let _=J(x.content??{}),O=Wo.applyPatch(_,p.patch??[],!0,!1).newDocument;s[h]={...x,content:J(O),activityType:p.activityType},d({messages:s})}catch(_){let O=_ instanceof Error?_.message:String(_);console.warn(`Failed to apply activity patch for '${p.messageId}': ${O}`)}return u()}case g.RAW:return d(await re(r,s,a,(p,h,v)=>p.onRawEvent?.({event:m,messages:h,state:v,agent:n,input:t}))),u();case g.CUSTOM:return d(await re(r,s,a,(p,h,v)=>p.onCustomEvent?.({event:m,messages:h,state:v,agent:n,input:t}))),u();case g.RUN_STARTED:{let p=await re(r,s,a,(h,v,x)=>h.onRunStartedEvent?.({event:m,messages:v,state:x,agent:n,input:t}));if(d(p),p.stopPropagation!==!0){let h=m;if(h.input?.messages){for(let v of h.input.messages){let x=v;if(v.subagentRunId===null){let S={...v};delete S.subagentRunId,x=S}s.find(S=>S.id===x.id)||s.push(x)}d({messages:s})}}return u()}case g.RUN_FINISHED:{let p=m,h=p.outcome?.type==="interrupt"?{event:p,outcome:"interrupt",interrupts:p.outcome.interrupts}:{event:p,outcome:"success",result:p.result},v=await re(r,s,a,(x,S,_)=>x.onRunFinishedEvent?.({...h,messages:S,state:_,agent:n,input:t}));return d(v),v.stopPropagation!==!0&&(n.pendingInterrupts=h.outcome==="interrupt"?h.interrupts.map(x=>{if(x.subagentRunId!==null)return x;let S={...x};return delete S.subagentRunId,S}):[]),u()}case g.RUN_ERROR:return d(await re(r,s,a,(p,h,v)=>p.onRunErrorEvent?.({event:m,messages:h,state:v,agent:n,input:t}))),u();case g.STEP_STARTED:return d(await re(r,s,a,(p,h,v)=>p.onStepStartedEvent?.({event:m,messages:h,state:v,agent:n,input:t}))),u();case g.STEP_FINISHED:return d(await re(r,s,a,(p,h,v)=>p.onStepFinishedEvent?.({event:m,messages:h,state:v,agent:n,input:t}))),u();case g.TEXT_MESSAGE_CHUNK:throw Error("TEXT_MESSAGE_CHUNK must be transformed before being applied");case g.TOOL_CALL_CHUNK:throw Error("TOOL_CALL_CHUNK must be transformed before being applied");case g.THINKING_START:return u();case g.THINKING_END:return u();case g.THINKING_TEXT_MESSAGE_START:return u();case g.THINKING_TEXT_MESSAGE_CONTENT:return u();case g.THINKING_TEXT_MESSAGE_END:return u();case g.REASONING_START:return d(await re(r,s,a,(p,h,v)=>p.onReasoningStartEvent?.({event:m,messages:h,state:v,agent:n,input:t}))),u();case g.REASONING_MESSAGE_START:{let p=await re(r,s,a,(h,v,x)=>h.onReasoningMessageStartEvent?.({event:m,messages:v,state:x,agent:n,input:t}));if(d(p),p.stopPropagation!==!0){let{messageId:h,subagentRunId:v}=m,x=s.find(O=>O.id===h),S=x;if(!S){let O={id:h,role:"reasoning",content:"",...v!=null&&{subagentRunId:v}};s.push(O),S=O}let _=je(S,m);(!x||_)&&d({messages:s})}return u()}case g.REASONING_MESSAGE_CONTENT:{let{messageId:p,delta:h}=m,v=s.find(S=>S.id===p);if(!v)return console.warn(`REASONING_MESSAGE_CONTENT: No message found with ID '${p}'`),u();let x=await re(r,s,a,(S,_,O)=>S.onReasoningMessageContentEvent?.({event:m,messages:_,state:O,agent:n,input:t,reasoningMessageBuffer:typeof v.content=="string"?v.content:""}));return d(x),x.stopPropagation!==!0&&(v.content=`${typeof v.content=="string"?v.content:""}${h}`,je(v,m),d({messages:s})),u()}case g.REASONING_MESSAGE_END:{let{messageId:p}=m,h=s.find(x=>x.id===p);if(!h)return console.warn(`REASONING_MESSAGE_END: No message found with ID '${p}'`),u();let v=await re(r,s,a,(x,S,_)=>x.onReasoningMessageEndEvent?.({event:m,messages:S,state:_,agent:n,input:t,reasoningMessageBuffer:typeof h.content=="string"?h.content:""}));return d(v),v.stopPropagation!==!0&&je(h,m)&&d({messages:s}),await Promise.all(r.map(x=>{x.onNewMessage?.({message:h,messages:s,state:a,agent:n,input:t})})),u()}case g.REASONING_MESSAGE_CHUNK:throw Error("REASONING_MESSAGE_CHUNK must be transformed before being applied");case g.REASONING_END:return d(await re(r,s,a,(p,h,v)=>p.onReasoningEndEvent?.({event:m,messages:h,state:v,agent:n,input:t}))),u();case g.REASONING_ENCRYPTED_VALUE:{let{subtype:p,entityId:h,encryptedValue:v}=m,x=await re(r,s,a,(S,_,O)=>S.onReasoningEncryptedValueEvent?.({event:m,messages:_,state:O,agent:n,input:t}));if(d(x),x.stopPropagation!==!0){let S=!1;if(p==="tool-call"){for(let _ of s)if(_.role==="assistant"&&_.toolCalls){let O=_.toolCalls.find(G=>G.id===h);if(O){O.encryptedValue=v,S=!0;break}}}else{let _=s.find(O=>O.id===h);_?.role!=="activity"&&_&&(_.encryptedValue=v,S=!0)}S&&(l.messages=s)}return u()}case g.SUBAGENT_STARTED:return d(await re(r,s,a,(p,h,v)=>p.onSubagentStartedEvent?.({event:m,messages:h,state:v,agent:n,input:t}))),u();case g.SUBAGENT_FINISHED:return d(await re(r,s,a,(p,h,v)=>p.onSubagentFinishedEvent?.({event:m,messages:h,state:v,agent:n,input:t}))),u();case g.SUBAGENT_ERROR:return d(await re(r,s,a,(p,h,v)=>p.onSubagentErrorEvent?.({event:m,messages:h,state:v,agent:n,input:t}))),u()}return m.type,u()}),hl(),r.length>0?fl({}):m=>m)},Ol=t=>e=>{let n=Or(t),r=new Set,o=new Set,i=new Set,s={message:new Map,toolCall:new Map,activity:new Map,reasoning:new Map},a=!1,l=!1,d=!1,u=new Map,m=b=>{let A=u.get(b);return A||(A=new Map,u.set(b,A)),A},w=()=>{for(let b of u.values())if(b.size>0)return!0;return!1},p=new Map,h=new Set,v=!1,x=!1,S=!1,_=()=>{r.clear(),o.clear(),i.clear(),s.message.clear(),s.toolCall.clear(),s.activity.clear(),s.reasoning.clear(),u.clear(),p.clear(),h.clear(),v=!1,x=!1,a=!1,l=!1,S=!0},O=(b,A)=>{let E=b??[];if(Array.isArray(E))for(let I of E){if(!I||typeof I.id!="string")continue;if(I.subagentRunId===null)return new V(`Cannot send a message (id '${I.id}') with 'subagentRunId: null'. The field is optional \u2014 omit it entirely.`);let B=I.role==="reasoning"?s.reasoning:I.role==="activity"?s.activity:s.message;(A||!B.has(I.id))&&B.set(I.id,{subagentRunId:I.subagentRunId});for(let de of I.toolCalls??[])de&&typeof de.id=="string"&&(A||!s.toolCall.has(de.id))&&s.toolCall.set(de.id,{subagentRunId:I.subagentRunId??void 0})}},G=(b,A,E,I,B)=>{if(A!==void 0&&E&&E.subagentRunId!==A)return new V(`Cannot send '${b}': subagentRunId '${A}' does not match the ${I} '${B}' opener's subagent '${E.subagentRunId??"(the parent agent)"}'.`)};return e.pipe(ze(b=>{let A=b.type;if(n?.event("VERIFY","Event:",b,{type:b.type}),l&&A!==g.RUN_STARTED)return z(()=>new V(`Cannot send event type '${A}': The run has already errored with 'RUN_ERROR'. No further events can be sent.`));if(a&&A!==g.RUN_ERROR&&A!==g.RUN_STARTED)return z(()=>new V(`Cannot send event type '${A}': The run has already finished with 'RUN_FINISHED'. Start a new run with 'RUN_STARTED'.`));if(d){if(A===g.RUN_STARTED){if(S&&!a&&!l)return z(()=>new V("Cannot send 'RUN_STARTED' while a run is still active. The previous run must be finished with 'RUN_FINISHED' before starting a new run."));(a||l)&&_()}}else if(d=!0,A!==g.RUN_STARTED&&A!==g.RUN_ERROR)return z(()=>new V("First event must be 'RUN_STARTED'"));if(b.subagentRunId===null)return z(()=>new V(`Cannot send '${A}' with 'subagentRunId: null'. The field is optional \u2014 omit it entirely.`));if(A===g.SUBAGENT_STARTED||A===g.SUBAGENT_FINISHED||A===g.SUBAGENT_ERROR){let E=A===g.SUBAGENT_STARTED?["description","parentSubagentRunId","parentToolCallId","parentMessageId"]:A===g.SUBAGENT_FINISHED?["outcome"]:["code"];for(let B of E)if(b[B]===null)return z(()=>new V(`Cannot send '${A}' with '${B}: null'. The field is optional \u2014 omit it entirely.`));let I=b.outcome;if(I!=null&&I.type!=="success"&&I.type!=="suspended")return z(()=>new V(`Cannot send '${A}' with outcome type '${String(I.type)}'. The outcome is either { type: "success" } or { type: "suspended" }.`));if(I&&I.interruptIds===null)return z(()=>new V(`Cannot send '${A}' with 'outcome.interruptIds: null'. The field is optional \u2014 omit it entirely.`));if(I&&Array.isArray(I.interruptIds)&&I.interruptIds.some(B=>typeof B!="string"))return z(()=>new V(`Cannot send '${A}' with a non-string entry in 'outcome.interruptIds'. Interrupt ids are strings.`))}if(A===g.RUN_FINISHED){let E=b.outcome;if(E?.type==="interrupt"&&Array.isArray(E.interrupts)){for(let I of E.interrupts)if(I&&I.subagentRunId===null)return z(()=>new V(`Cannot send 'RUN_FINISHED' with an interrupt (id '${I.id}') carrying 'subagentRunId: null'. The field is optional \u2014 omit it entirely.`))}}switch(A){case g.TEXT_MESSAGE_START:{let E=b.messageId;if(r.has(E))return z(()=>new V(`Cannot send 'TEXT_MESSAGE_START' event: A text message with ID '${E}' is already in progress. Complete it with 'TEXT_MESSAGE_END' first.`));let I=s.message.get(E);if(I){let B=G(A,b.subagentRunId,I,"message",E);if(B)return z(()=>B)}return r.add(E),I||s.message.set(E,{subagentRunId:b.subagentRunId}),ne(b)}case g.TEXT_MESSAGE_CONTENT:{let E=b.messageId;if(!r.has(E))return z(()=>new V(`Cannot send 'TEXT_MESSAGE_CONTENT' event: No active text message found with ID '${E}'. Start a text message with 'TEXT_MESSAGE_START' first.`));let I=G(A,b.subagentRunId,s.message.get(E),"message",E);return I?z(()=>I):ne(b)}case g.TEXT_MESSAGE_END:{let E=b.messageId;if(!r.has(E))return z(()=>new V(`Cannot send 'TEXT_MESSAGE_END' event: No active text message found with ID '${E}'. A 'TEXT_MESSAGE_START' event must be sent first.`));let I=G(A,b.subagentRunId,s.message.get(E),"message",E);return I?z(()=>I):(r.delete(E),ne(b))}case g.TOOL_CALL_START:{let E=b.toolCallId;if(o.has(E))return z(()=>new V(`Cannot send 'TOOL_CALL_START' event: A tool call with ID '${E}' is already in progress. Complete it with 'TOOL_CALL_END' first.`));let I=b.parentMessageId,B=b.subagentRunId,de;if(I!==void 0){let Ye=s.message.get(I);if(Ye){if(B!==void 0&&B!==Ye.subagentRunId)return z(()=>new V(`Cannot send 'TOOL_CALL_START': subagentRunId '${B}' does not match its parent message '${I}' owner '${Ye.subagentRunId??"(the parent agent)"}'. A tool call belongs to the message that carries it.`));de=Ye}}let Te=s.toolCall.get(E);if(Te){let Ye=G(A,B,Te,"tool call",E);if(Ye)return z(()=>Ye);if(B===void 0&&de&&de.subagentRunId!==Te.subagentRunId)return z(()=>new V(`Cannot send 'TOOL_CALL_START': tool call '${E}' is owned by '${Te.subagentRunId??"(the parent agent)"}' but its parent message '${I}' is owned by '${de.subagentRunId??"(the parent agent)"}'. A tool call belongs to the message that carries it.`))}return o.add(E),Te||s.toolCall.set(E,B===void 0?de??{subagentRunId:void 0}:{subagentRunId:B}),ne(b)}case g.TOOL_CALL_ARGS:{let E=b.toolCallId;if(!o.has(E))return z(()=>new V(`Cannot send 'TOOL_CALL_ARGS' event: No active tool call found with ID '${E}'. Start a tool call with 'TOOL_CALL_START' first.`));let I=G(A,b.subagentRunId,s.toolCall.get(E),"tool call",E);return I?z(()=>I):ne(b)}case g.TOOL_CALL_END:{let E=b.toolCallId;if(!o.has(E))return z(()=>new V(`Cannot send 'TOOL_CALL_END' event: No active tool call found with ID '${E}'. A 'TOOL_CALL_START' event must be sent first.`));let I=G(A,b.subagentRunId,s.toolCall.get(E),"tool call",E);return I?z(()=>I):(o.delete(E),ne(b))}case g.STEP_STARTED:{let E=b.stepName,I=b.subagentRunId;return m(I).has(E)?z(()=>new V(`Step "${E}" is already active for 'STEP_STARTED'${I===void 0?"":` in subagent '${I}'`}`)):(m(I).set(E,!0),ne(b))}case g.STEP_FINISHED:{let E=b.stepName,I=b.subagentRunId;if(!m(I).has(E)){let B,de=!1;for(let[Te,Ye]of u)if(Te!==I&&Ye.has(E)){B=Te,de=!0;break}return z(de?()=>new V(`Cannot send 'STEP_FINISHED' for step "${E}" attributed to ${I===void 0?"the parent agent":`subagent '${I}'`}: that step is open under ${B===void 0?"the parent agent":`subagent '${B}'`}. A step must be finished by whoever started it.`):()=>new V(`Cannot send 'STEP_FINISHED' for step "${E}" that was not started`))}return m(I).delete(E),ne(b)}case g.ACTIVITY_SNAPSHOT:{let E=b.messageId;return(!s.activity.has(E)||b.replace!==!1)&&s.activity.set(E,{subagentRunId:b.subagentRunId}),ne(b)}case g.TOOL_CALL_RESULT:{let E=b.messageId;return typeof E=="string"&&s.message.set(E,{subagentRunId:b.subagentRunId}),ne(b)}case g.REASONING_START:case g.REASONING_MESSAGE_START:{let E=b.messageId,I=s.reasoning.get(E);if(I){let B=G(A,b.subagentRunId,I,"reasoning message",E);if(B)return z(()=>B)}return i.add(E),I||s.reasoning.set(E,{subagentRunId:b.subagentRunId}),ne(b)}case g.REASONING_MESSAGE_CONTENT:case g.REASONING_MESSAGE_END:case g.REASONING_END:{let E=b.messageId,I=G(A,b.subagentRunId,s.reasoning.get(E),"reasoning message",E);return I?z(()=>I):(A===g.REASONING_END&&i.delete(E),ne(b))}case g.REASONING_ENCRYPTED_VALUE:{let E=b.entityId,I=b.subtype,B=I==="tool-call"?s.toolCall.get(E):I==="message"?s.message.get(E)??s.reasoning.get(E):s.reasoning.get(E),de=I==="tool-call"?"tool call":I==="message"?"message":"reasoning message",Te=G(A,b.subagentRunId,B,de,E);return Te?z(()=>Te):ne(b)}case g.ACTIVITY_DELTA:{let E=b.messageId,I=G(A,b.subagentRunId,s.activity.get(E),"activity",E);return I?z(()=>I):ne(b)}case g.SUBAGENT_STARTED:{if(typeof b.subagentRunId!="string")return z(()=>new V("Cannot send 'SUBAGENT_STARTED' without a 'subagentRunId'."));if(typeof b.name!="string")return z(()=>new V("Cannot send 'SUBAGENT_STARTED' without a 'name'."));let E=b.subagentRunId,I=b.parentSubagentRunId;return p.has(E)?z(()=>new V(`Cannot send 'SUBAGENT_STARTED': subagent '${E}' is already active. Finish it with 'SUBAGENT_FINISHED' first.`)):h.has(E)?z(()=>new V(`Cannot send 'SUBAGENT_STARTED': subagent '${E}' has already finished in this run. Subagent IDs are per-invocation and cannot be reused.`)):I!==void 0&&!p.has(I)&&!h.has(I)?z(()=>new V(`Cannot send 'SUBAGENT_STARTED': parentSubagentRunId '${I}' has not been started in this run.`)):(p.set(E,!0),ne(b))}case g.SUBAGENT_FINISHED:case g.SUBAGENT_ERROR:{if(typeof b.subagentRunId!="string")return z(()=>new V(`Cannot send '${A}' without a 'subagentRunId'.`));if(A===g.SUBAGENT_ERROR&&typeof b.message!="string")return z(()=>new V("Cannot send 'SUBAGENT_ERROR' without a 'message'."));let E=b.subagentRunId;return p.has(E)?(p.delete(E),h.add(E),ne(b)):z(()=>new V(`Cannot send '${A}': no active subagent found with ID '${E}'. A 'SUBAGENT_STARTED' event must be sent first.`))}case g.MESSAGES_SNAPSHOT:{let E=O(b.messages,!0);if(E)return z(()=>E)}return ne(b);case g.RUN_STARTED:S=!0;{let E=O((b.input??{}).messages,!1);if(E)return z(()=>E)}return ne(b);case g.RUN_FINISHED:if(w()){let E=[];for(let[B,de]of u)for(let Te of de.keys())E.push(B===void 0?Te:`${Te} (subagent '${B}')`);let I=E.join(", ");return z(()=>new V(`Cannot send 'RUN_FINISHED' while steps are still active: ${I}`))}if(r.size>0){let E=Array.from(r.keys()).join(", ");return z(()=>new V(`Cannot send 'RUN_FINISHED' while text messages are still active: ${E}`))}if(o.size>0){let E=Array.from(o.keys()).join(", ");return z(()=>new V(`Cannot send 'RUN_FINISHED' while tool calls are still active: ${E}`))}if(p.size>0){let E=Array.from(p.keys()).join(", ");return z(()=>new V(`Cannot send 'RUN_FINISHED' while subagents are still active: ${E}`))}return a=!0,ne(b);case g.RUN_ERROR:return l=!0,ne(b);case g.CUSTOM:return ne(b);case g.THINKING_TEXT_MESSAGE_START:return v?x?z(()=>new V("Cannot send 'THINKING_TEXT_MESSAGE_START' event: A thinking message is already in progress. Complete it with 'THINKING_TEXT_MESSAGE_END' first.")):(x=!0,ne(b)):z(()=>new V("Cannot send 'THINKING_TEXT_MESSAGE_START' event: A thinking step is not in progress. Create one with 'THINKING_START' first."));case g.THINKING_TEXT_MESSAGE_CONTENT:return x?ne(b):z(()=>new V("Cannot send 'THINKING_TEXT_MESSAGE_CONTENT' event: No active thinking message found. Start a message with 'THINKING_TEXT_MESSAGE_START' first."));case g.THINKING_TEXT_MESSAGE_END:return x?(x=!1,ne(b)):z(()=>new V("Cannot send 'THINKING_TEXT_MESSAGE_END' event: No active thinking message found. A 'THINKING_TEXT_MESSAGE_START' event must be sent first."));case g.THINKING_START:return v?z(()=>new V("Cannot send 'THINKING_START' event: A thinking step is already in progress. End it with 'THINKING_END' first.")):(v=!0,ne(b));case g.THINKING_END:return v?(v=!1,ne(b)):z(()=>new V("Cannot send 'THINKING_END' event: No active thinking step found. A 'THINKING_START' event must be sent first."));default:return ne(b)}}))},vn=(function(t){return t.HEADERS="headers",t.DATA="data",t})({}),Xb=t=>gi(()=>fn(t())).pipe(ml(e=>{if(!e.ok){let o=e.headers.get("content-type")||"";return fn(e.text()).pipe(ze(i=>{let s=i;if(o.includes("application/json"))try{s=JSON.parse(i)}catch{}let a=Error(`HTTP ${e.status}: ${typeof s=="string"?s:JSON.stringify(s)}`);return a.status=e.status,a.payload=s,z(()=>a)}))}let n={type:vn.HEADERS,status:e.status,headers:e.headers},r=e.body?.getReader();return r?new ce(o=>(o.next(n),(async()=>{try{for(;;){let{done:i,value:s}=await r.read();if(i)break;let a={type:vn.DATA,data:s};o.next(a)}o.complete()}catch(i){o.error(i)}})(),()=>{r.cancel().catch(i=>{if(i?.name!=="AbortError")throw i})})):z(()=>Error("Failed to getReader() from response"))})),Yb=(t,e)=>{let n=Or(e),r=new vt,o=new TextDecoder("utf-8",{fatal:!1}),i="";t.subscribe({next:a=>{if(a.type!==vn.HEADERS&&a.type===vn.DATA&&a.data){let l=o.decode(a.data,{stream:!0});i+=l;let d=i.split(/\n\n/);i=d.pop()||"";for(let u of d)s(u)}},error:a=>r.error(a),complete:()=>{i&&(i+=o.decode(),s(i)),r.complete()}});function s(a){let l=a.split(`
`),d=[];for(let u of l)u.startsWith("data:")&&d.push(u.slice(5).replace(/^ /,""));if(d.length>0)try{let u=d.join(`
`),m=JSON.parse(u);n?.event("SSE","Event received:",m,{type:m.type}),r.next(m)}catch(u){r.error(u)}}return r.asObservable()},Kb=t=>{let e=new vt,n=new Uint8Array;t.subscribe({next:o=>{if(o.type!==vn.HEADERS&&o.type===vn.DATA&&o.data){let i=new Uint8Array(n.length+o.data.length);i.set(n,0),i.set(o.data,n.length),n=i,r()}},error:o=>e.error(o),complete:()=>{if(n.length>0)try{r()}catch{console.warn("Incomplete or invalid protocol buffer data at stream end")}e.complete()}});function r(){for(;n.length>=4;){let o=4+new DataView(n.buffer,n.byteOffset,4).getUint32(0,!1);if(n.length<o)break;try{let i=n.slice(4,o),s=vh(i);e.next(s),n=n.slice(o)}catch(i){let s=i instanceof Error?i.message:String(i);e.error(Error(`Failed to decode protocol buffer message: ${s}`));return}}}return e.asObservable()},Zb=(t,e)=>{let n=Or(e),r=new vt,o=new ti,i=!1;return t.subscribe({next:s=>{if(o.next(s),s.type===vn.HEADERS&&!i){i=!0;let a=s.headers.get("content-type");n?.lifecycle("HTTP","Stream format detected:",{contentType:a,parser:a===Rl?"protobuf":"sse"}),a===Rl?Kb(o).subscribe({next:l=>r.next(l),error:l=>r.error(l),complete:()=>r.complete()}):Yb(o,n).subscribe({next:l=>{try{let d=Go.parse(l);n?.event("HTTP","Event validated:",d,{type:d.type,valid:!0}),r.next(d)}catch(d){n?.event("HTTP","Event invalid:",{json:l,error:String(d)}),r.error(d)}},error:l=>{if(l?.name==="AbortError"){r.next({type:g.RUN_ERROR,message:l.message||"Request aborted",code:"abort",rawEvent:l}),r.complete();return}return r.error(l)},complete:()=>r.complete()})}else i||r.error(Error("No headers event received before data events"))},error:s=>{o.error(s),r.error(s)},complete:()=>{o.complete()}}),r.asObservable()},ae=c.enum(["TextMessageStart","TextMessageContent","TextMessageEnd","ActionExecutionStart","ActionExecutionArgs","ActionExecutionEnd","ActionExecutionResult","AgentStateMessage","MetaEvent","RunStarted","RunFinished","RunError","NodeStarted","NodeFinished"]),Qb=c.enum(["LangGraphInterruptEvent","PredictState","Exit"]),Jb=c.object({type:c.literal(ae.enum.TextMessageStart),messageId:c.string(),parentMessageId:c.string().optional(),role:c.string().optional()}),ey=c.object({type:c.literal(ae.enum.TextMessageContent),messageId:c.string(),content:c.string()}),ty=c.object({type:c.literal(ae.enum.TextMessageEnd),messageId:c.string()}),ny=c.object({type:c.literal(ae.enum.ActionExecutionStart),actionExecutionId:c.string(),actionName:c.string(),parentMessageId:c.string().optional()}),ry=c.object({type:c.literal(ae.enum.ActionExecutionArgs),actionExecutionId:c.string(),args:c.string()}),oy=c.object({type:c.literal(ae.enum.ActionExecutionEnd),actionExecutionId:c.string()}),iy=c.object({type:c.literal(ae.enum.ActionExecutionResult),actionName:c.string(),actionExecutionId:c.string(),result:c.string()}),sy=c.object({type:c.literal(ae.enum.AgentStateMessage),threadId:c.string(),agentName:c.string(),nodeName:c.string(),runId:c.string(),active:c.boolean(),role:c.string(),state:c.string(),running:c.boolean()}),ay=c.object({type:c.literal(ae.enum.MetaEvent),name:Qb,value:c.any()}),ly=c.object({type:c.literal(ae.enum.RunError),message:c.string(),code:c.string().optional()});c.discriminatedUnion("type",[Jb,ey,ty,ny,ry,oy,iy,sy,ay,ly]),c.object({id:c.string(),role:c.string(),content:c.string(),parentMessageId:c.string().optional()}),c.object({id:c.string(),name:c.string(),arguments:c.any(),parentMessageId:c.string().optional()}),c.object({id:c.string(),result:c.any(),actionExecutionId:c.string(),actionName:c.string()});var dy=t=>{if(typeof t=="string")return t;if(!Array.isArray(t))return;let e=t.filter(n=>n.type==="text").map(n=>n.text).filter(n=>n.length>0);if(e.length!==0)return e.join(`
`)},cy=(t,e,n)=>r=>{let o={},i=!0,s=!0,a="",l=null,d=null,u=[],m={},w=p=>{typeof p=="object"&&p&&("messages"in p&&delete p.messages,o=p)};return r.pipe(ze(p=>{switch(p.type){case g.TEXT_MESSAGE_START:{let h=p;return[{type:ae.enum.TextMessageStart,messageId:h.messageId,role:h.role}]}case g.TEXT_MESSAGE_CONTENT:{let h=p;return[{type:ae.enum.TextMessageContent,messageId:h.messageId,content:h.delta}]}case g.TEXT_MESSAGE_END:{let h=p;return[{type:ae.enum.TextMessageEnd,messageId:h.messageId}]}case g.TOOL_CALL_START:{let h=p;return u.push({id:h.toolCallId,type:"function",function:{name:h.toolCallName,arguments:""}}),s=!0,m[h.toolCallId]=h.toolCallName,[{type:ae.enum.ActionExecutionStart,actionExecutionId:h.toolCallId,actionName:h.toolCallName,parentMessageId:h.parentMessageId}]}case g.TOOL_CALL_ARGS:{let h=p,v=u.find(S=>S.id===h.toolCallId);if(!v)return console.warn(`TOOL_CALL_ARGS: No tool call found with ID '${h.toolCallId}'`),[];v.function.arguments+=h.delta;let x=!1;if(d){let S=d.find(_=>_.tool==v.function.name);if(S)try{let _=JSON.parse(wi(v.function.arguments));S.tool_argument&&S.tool_argument in _?(w({...o,[S.state_key]:_[S.tool_argument]}),x=!0):S.tool_argument||(w({...o,[S.state_key]:_}),x=!0)}catch{}}return[{type:ae.enum.ActionExecutionArgs,actionExecutionId:h.toolCallId,args:h.delta},...x?[{type:ae.enum.AgentStateMessage,threadId:t,agentName:n,nodeName:a,runId:e,running:i,role:"assistant",state:JSON.stringify(o),active:s}]:[]]}case g.TOOL_CALL_END:{let h=p;return[{type:ae.enum.ActionExecutionEnd,actionExecutionId:h.toolCallId}]}case g.TOOL_CALL_RESULT:{let h=p;return[{type:ae.enum.ActionExecutionResult,actionExecutionId:h.toolCallId,result:h.content,actionName:m[h.toolCallId]||"unknown"}]}case g.RAW:return[];case g.CUSTOM:{let h=p;switch(h.name){case"Exit":i=!1;break;case"PredictState":d=h.value;break}return[{type:ae.enum.MetaEvent,name:h.name,value:h.value}]}case g.STATE_SNAPSHOT:return w(p.snapshot),[{type:ae.enum.AgentStateMessage,threadId:t,agentName:n,nodeName:a,runId:e,running:i,role:"assistant",state:JSON.stringify(o),active:s}];case g.STATE_DELTA:{let h=p,v=Wo.applyPatch(o,h.delta,!0,!1);return v?(w(v.newDocument),[{type:ae.enum.AgentStateMessage,threadId:t,agentName:n,nodeName:a,runId:e,running:i,role:"assistant",state:JSON.stringify(o),active:s}]):[]}case g.MESSAGES_SNAPSHOT:return l=p.messages,[{type:ae.enum.AgentStateMessage,threadId:t,agentName:n,nodeName:a,runId:e,running:i,role:"assistant",state:JSON.stringify({...o,...l?{messages:l}:{}}),active:!0}];case g.RUN_STARTED:return[];case g.RUN_FINISHED:return l&&(o.messages=l),Object.keys(o).length===0?[]:[{type:ae.enum.AgentStateMessage,threadId:t,agentName:n,nodeName:a,runId:e,running:i,role:"assistant",state:JSON.stringify({...o,...l?{messages:uy(l)}:{}}),active:!1}];case g.RUN_ERROR:{let h=p;return[{type:ae.enum.RunError,message:h.message,code:h.code}]}case g.STEP_STARTED:return a=p.stepName,u=[],d=null,[{type:ae.enum.AgentStateMessage,threadId:t,agentName:n,nodeName:a,runId:e,running:i,role:"assistant",state:JSON.stringify(o),active:!0}];case g.STEP_FINISHED:return u=[],d=null,[{type:ae.enum.AgentStateMessage,threadId:t,agentName:n,nodeName:a,runId:e,running:i,role:"assistant",state:JSON.stringify(o),active:!1}];default:return[]}}))};function uy(t){let e=[];for(let n of t)if(n.role==="assistant"||n.role==="user"||n.role==="system"){let r=dy(n.content);if(r){let o={id:n.id,role:n.role,content:r};e.push(o)}if(n.role==="assistant"&&n.toolCalls&&n.toolCalls.length>0)for(let o of n.toolCalls){let i={id:o.id,name:o.function.name,arguments:JSON.parse(o.function.arguments),parentMessageId:n.id};e.push(i)}}else if(n.role==="tool"){let r="unknown";for(let i of t)if(i.role==="assistant"&&i.toolCalls?.length){for(let s of i.toolCalls)if(s.id===n.toolCallId){r=s.function.name;break}}let o={id:n.id,result:n.content,actionExecutionId:n.toolCallId,actionName:r};e.push(o)}return e}var hy=t=>t.kind==="tool"?t.fields.toolCallId:t.fields.messageId,py=t=>t==="tool"?"toolCallId":"messageId",nr=(t,e)=>e.metadata===void 0?t:{...t,metadata:e.metadata},os=t=>e=>{let n=Or(t),r=new Map,o=l=>{let d=r.get(l);if(!d)return[];switch(r.delete(l),d.kind){case"text":{let u={type:g.TEXT_MESSAGE_END,messageId:d.fields.messageId,...d.fields.subagentRunId!=null&&{subagentRunId:d.fields.subagentRunId}};return n?.event("TRANSFORM","TEXT_MESSAGE_END",u,{messageId:u.messageId}),[u]}case"tool":{let u={type:g.TOOL_CALL_END,toolCallId:d.fields.toolCallId,...d.fields.subagentRunId!=null&&{subagentRunId:d.fields.subagentRunId}};return n?.event("TRANSFORM","TOOL_CALL_END",u,{toolCallId:u.toolCallId}),[u]}case"reasoning":{let u={type:g.REASONING_MESSAGE_END,messageId:d.fields.messageId,...d.fields.subagentRunId!=null&&{subagentRunId:d.fields.subagentRunId}};return n?.event("TRANSFORM","REASONING_MESSAGE_END",u,{messageId:u.messageId}),[u]}}},i=()=>[...r.keys()].flatMap(l=>o(l)),s=(l,d)=>{for(let[u,m]of r)if(m.kind===l&&hy(m)===d)return{owner:u}},a=(l,d,u,m,w)=>{if(d!==void 0){let h=s(l,d);if(h){if(u!==void 0&&u!==h.owner)throw Error(`Cannot continue ${w} '${d}': chunk subagentRunId '${u}' does not match the open stream's subagent '${h.owner??"(the parent agent)"}'.`);return h.owner}return u}if(u!==void 0)return u;if(r.get(void 0)?.kind===l)return;let p=[...r.entries()].filter(([,h])=>h.kind===l);if(p.length===1)return p[0][0];if(p.length>1)throw Error(`Ambiguous ${m}: it carries neither a ${py(l)} nor a subagentRunId, but ${p.length} lanes have an open ${w}. Attribute the chunk to the subagent it belongs to.`)};return e.pipe(ze(l=>{switch(l.type){case g.TEXT_MESSAGE_START:case g.TEXT_MESSAGE_CONTENT:case g.TEXT_MESSAGE_END:case g.TOOL_CALL_START:case g.TOOL_CALL_ARGS:case g.TOOL_CALL_END:case g.TOOL_CALL_RESULT:case g.STATE_SNAPSHOT:case g.STATE_DELTA:case g.CUSTOM:case g.STEP_STARTED:case g.STEP_FINISHED:case g.THINKING_START:case g.THINKING_END:case g.THINKING_TEXT_MESSAGE_START:case g.THINKING_TEXT_MESSAGE_CONTENT:case g.THINKING_TEXT_MESSAGE_END:case g.REASONING_START:case g.REASONING_MESSAGE_START:case g.REASONING_MESSAGE_CONTENT:case g.REASONING_MESSAGE_END:case g.REASONING_END:return[...o(l.subagentRunId??void 0),l];case g.RUN_STARTED:case g.RUN_FINISHED:case g.RUN_ERROR:case g.MESSAGES_SNAPSHOT:return[...i(),l];case g.RAW:case g.ACTIVITY_SNAPSHOT:case g.ACTIVITY_DELTA:case g.REASONING_ENCRYPTED_VALUE:case g.SUBAGENT_STARTED:return[l];case g.SUBAGENT_FINISHED:case g.SUBAGENT_ERROR:{let d=l.subagentRunId;return d==null?[l]:[...o(d),l]}case g.TEXT_MESSAGE_CHUNK:{let d=l,u=a("text",d.messageId,d.subagentRunId??void 0,"TEXT_MESSAGE_CHUNK","text message"),m=r.get(u),w=[],p;if(m?.kind==="text"&&(d.messageId===void 0||d.messageId===m.fields.messageId))p=m.fields;else{if(w.push(...o(u)),d.messageId===void 0)throw Error("First TEXT_MESSAGE_CHUNK must have a messageId");p={messageId:d.messageId,name:d.name,subagentRunId:d.subagentRunId},r.set(u,{kind:"text",fields:p});let h=nr({type:g.TEXT_MESSAGE_START,messageId:d.messageId,role:d.role||"assistant",...d.name!==void 0&&{name:d.name},...d.subagentRunId!=null&&{subagentRunId:d.subagentRunId}},d);w.push(h),n?.event("TRANSFORM","TEXT_MESSAGE_START",h,{messageId:d.messageId})}if(d.delta!==void 0){let h=d.subagentRunId??p.subagentRunId,v=nr({type:g.TEXT_MESSAGE_CONTENT,messageId:p.messageId,delta:d.delta,...h!=null&&{subagentRunId:h}},d);w.push(v),n?.event("TRANSFORM","TEXT_MESSAGE_CONTENT",v,{messageId:p.messageId})}if(w.length===0&&d.metadata!==void 0){let h=d.subagentRunId??p.subagentRunId;w.push({type:g.TEXT_MESSAGE_CONTENT,messageId:p.messageId,delta:"",metadata:d.metadata,...h!=null&&{subagentRunId:h}})}return w}case g.TOOL_CALL_CHUNK:{let d=l,u=a("tool",d.toolCallId,d.subagentRunId??void 0,"TOOL_CALL_CHUNK","tool call"),m=r.get(u),w=[],p;if(m?.kind==="tool"&&(d.toolCallId===void 0||d.toolCallId===m.fields.toolCallId))p=m.fields;else{if(w.push(...o(u)),d.toolCallId===void 0)throw Error("First TOOL_CALL_CHUNK must have a toolCallId");if(d.toolCallName===void 0)throw Error("First TOOL_CALL_CHUNK must have a toolCallName");p={toolCallId:d.toolCallId,toolCallName:d.toolCallName,parentMessageId:d.parentMessageId,subagentRunId:d.subagentRunId},r.set(u,{kind:"tool",fields:p});let h=nr({type:g.TOOL_CALL_START,toolCallId:d.toolCallId,toolCallName:d.toolCallName,parentMessageId:d.parentMessageId,...d.subagentRunId!=null&&{subagentRunId:d.subagentRunId}},d);w.push(h),n?.event("TRANSFORM","TOOL_CALL_START",h,{toolCallId:d.toolCallId,toolCallName:d.toolCallName})}if(d.delta!==void 0){let h=d.subagentRunId??p.subagentRunId,v=nr({type:g.TOOL_CALL_ARGS,toolCallId:p.toolCallId,delta:d.delta,...h!=null&&{subagentRunId:h}},d);w.push(v),n?.event("TRANSFORM","TOOL_CALL_ARGS",v,{toolCallId:p.toolCallId})}if(w.length===0&&d.metadata!==void 0){let h=d.subagentRunId??p.subagentRunId;w.push({type:g.TOOL_CALL_ARGS,toolCallId:p.toolCallId,delta:"",metadata:d.metadata,...h!=null&&{subagentRunId:h}})}return w}case g.REASONING_MESSAGE_CHUNK:{let d=l,u=a("reasoning",d.messageId,d.subagentRunId??void 0,"REASONING_MESSAGE_CHUNK","reasoning message"),m=r.get(u),w=[],p;if(m?.kind==="reasoning"&&(d.messageId===void 0||d.messageId===m.fields.messageId))p=m.fields;else{if(w.push(...o(u)),d.messageId===void 0)throw Error("First REASONING_MESSAGE_CHUNK must have a messageId");p={messageId:d.messageId,subagentRunId:d.subagentRunId},r.set(u,{kind:"reasoning",fields:p});let h=nr({type:g.REASONING_MESSAGE_START,messageId:d.messageId,role:"reasoning",...d.subagentRunId!=null&&{subagentRunId:d.subagentRunId}},d);w.push(h),n?.event("TRANSFORM","REASONING_MESSAGE_START",h,{messageId:d.messageId})}if(d.delta!==void 0){let h=d.subagentRunId??p.subagentRunId,v=nr({type:g.REASONING_MESSAGE_CONTENT,messageId:p.messageId,delta:d.delta,...h!=null&&{subagentRunId:h}},d);w.push(v),n?.event("TRANSFORM","REASONING_MESSAGE_CONTENT",v,{messageId:p.messageId})}if(w.length===0&&d.metadata!==void 0){let h=d.subagentRunId??p.subagentRunId;w.push({type:g.REASONING_MESSAGE_CONTENT,messageId:p.messageId,delta:"",metadata:d.metadata,...h!=null&&{subagentRunId:h}})}return w}}return l.type,[]}),mn(()=>{i()}))};function fy(t,e=new Date){return t.expiresAt===void 0?!1:new Date(t.expiresAt)<=e}function Oh(t,e){let n=new Set(t.map(s=>s.id)),r=new Set(Object.keys(e)),o=[...n].filter(s=>!r.has(s));if(o.length>0)throw Error(`buildResumeArray: missing responses for open interrupts: ${o.join(", ")}`);let i=[...r].filter(s=>!n.has(s));if(i.length>0)throw Error(`buildResumeArray: responses reference unknown interrupt ids: ${i.join(", ")}`);return t.map(s=>{let a=e[s.id],l={interruptId:s.id,status:a.status};return a.status==="resolved"&&a.payload!==void 0&&(l.payload=a.payload),a.metadata!==void 0&&(l.metadata=a.metadata),l})}var Mr=class{runNext(t,e){return e.run(t).pipe(os(!1))}runNextWithState(t,e){let n=J(t.messages||[]),r=J(t.state||{}),o=new ti;return Nh(t,o,e,[]).subscribe(i=>{i.messages!==void 0&&(n=i.messages),i.state!==void 0&&(r=i.state)}),this.runNext(t,e).pipe(vi(async i=>(o.next(i),await new Promise(s=>setTimeout(s,0)),{event:i,messages:J(n),state:J(r)})))}},my=class extends Mr{constructor(t){super(),this.fn=t}run(t,e){return this.fn(t,e)}};function gy(t){let e=t.content;if(Array.isArray(e)){let n=e.filter(r=>typeof r=="object"&&!!r&&"type"in r&&r.type==="text"&&typeof r.text=="string").map(r=>r.text).join("");return{...t,content:n}}return typeof e=="string"?t:{...t,content:""}}var vy=class extends Mr{run(t,e){let{parentRunId:n,...r}=t,o={...r,messages:r.messages.map(gy)};return this.runNext(o,e)}},Eh="THINKING_START",Th="THINKING_END",_h="THINKING_TEXT_MESSAGE_START",Sh="THINKING_TEXT_MESSAGE_CONTENT",Ah="THINKING_TEXT_MESSAGE_END",by=class extends Mr{constructor(...t){super(...t),this.currentReasoningId=null,this.currentMessageId=null}warnAboutTransformation(t,e){typeof process<"u"&&process.env!==void 0&&process.env.SUPPRESS_TRANSFORMATION_WARNINGS||console.warn(`AG-UI is converting ${t} to ${e}. To remove this warning, upgrade your AG-UI integration package (e.g. @ag-ui/langgraph). To surpress it, set SUPPRESS_TRANSFORMATION_WARNINGS=true in your .env file.`)}run(t,e){return this.currentReasoningId=null,this.currentMessageId=null,this.runNext(t,e).pipe(Pt(n=>this.transformEvent(n)))}transformEvent(t){switch(t.type){case Eh:{this.currentReasoningId=be();let{title:e,...n}=t;return this.warnAboutTransformation(Eh,g.REASONING_START),{...n,type:g.REASONING_START,messageId:this.currentReasoningId}}case _h:return this.currentMessageId=be(),this.warnAboutTransformation(_h,g.REASONING_MESSAGE_START),{...t,type:g.REASONING_MESSAGE_START,messageId:this.currentMessageId,role:"assistant"};case Sh:{let{delta:e,...n}=t;return this.warnAboutTransformation(Sh,g.REASONING_MESSAGE_CONTENT),{...n,type:g.REASONING_MESSAGE_CONTENT,messageId:this.currentMessageId??be(),delta:e}}case Ah:{let e=this.currentMessageId??be();return this.warnAboutTransformation(Ah,g.REASONING_MESSAGE_END),{...t,type:g.REASONING_MESSAGE_END,messageId:e}}case Th:{let e=this.currentReasoningId??be();return this.warnAboutTransformation(Th,g.REASONING_END),{...t,type:g.REASONING_END,messageId:e}}default:return t}}};function yy(t){return t.startsWith("image/")?"image":t.startsWith("audio/")?"audio":t.startsWith("video/")?"video":"document"}function wy(t){return typeof t=="object"&&!!t&&"type"in t&&t.type==="binary"&&"mimeType"in t&&typeof t.mimeType=="string"}function xy(t){let e=yy(t.mimeType);return t.data?{type:e,source:{type:"data",value:t.data,mimeType:t.mimeType},...t.filename?{metadata:{filename:t.filename}}:{}}:t.url?{type:e,source:{type:"url",value:t.url,mimeType:t.mimeType},...t.filename?{metadata:{filename:t.filename}}:{}}:t}function Ey(t){let e=t.content;if(!Array.isArray(e))return t;let n=e.map(r=>wy(r)?xy(r):r);return{...t,content:n}}var Ty=class extends Mr{run(t,e){let n={...t,messages:t.messages.map(Ey)};return this.runNext(n,e)}},kh="SUBAGENT_STARTED",Rh="SUBAGENT_FINISHED",Ih="SUBAGENT_ERROR";function is(t){if(t&&typeof t=="object"&&"subagentRunId"in t){let{subagentRunId:e,...n}=t;return n}return t}function Ch(t){return t.map(e=>is(e))}var _y=class extends Mr{warnDroppedLifecycleEvent(t){typeof process<"u"&&process.env!==void 0&&process.env.SUPPRESS_TRANSFORMATION_WARNINGS||console.warn(`AG-UI is dropping ${t} because the target agent predates subagent support. To remove this warning, upgrade your AG-UI integration package. To suppress it, set SUPPRESS_TRANSFORMATION_WARNINGS=true in your .env file.`)}run(t,e){let n={...t,messages:(t.messages??[]).map(r=>is(r))};return this.runNext(n,e).pipe(yi(r=>{let o=r.type;(o===kh||o===Rh||o===Ih)&&this.warnDroppedLifecycleEvent(o)}),pl(r=>{let o=r.type;return o!==kh&&o!==Rh&&o!==Ih}),Pt(r=>{let o=is(r);if(o.type===g.MESSAGES_SNAPSHOT){let i=o;if(Array.isArray(i.messages))return{...i,messages:Ch(i.messages)}}if(o.type===g.RUN_FINISHED){let i=o;if(i.outcome&&Array.isArray(i.outcome.interrupts))return{...i,outcome:{...i.outcome,interrupts:i.outcome.interrupts.map(s=>is(s))}}}if(o.type===g.RUN_STARTED){let i=o;if(i.input&&Array.isArray(i.input.messages))return{...i,input:{...i.input,messages:Ch(i.input.messages)}}}return o}))}},Sy="0.0.59",Ay=class{get maxVersion(){return Sy}get debug(){return this._debug}set debug(t){this._debug=rs(t),this._debugLogger=Nl(this._debug)}get debugLogger(){return this._debugLogger}set debugLogger(t){typeof t=="boolean"?this._debugLogger=t?Nl(rs(!0)):void 0:this._debugLogger=t}constructor({agentId:t,description:e,threadId:n,initialMessages:r,initialState:o,debug:i}={}){this.subscribers=[],this.isRunning=!1,this.pendingInterrupts=[],this.middlewares=[],this.agentId=t,this.description=e??"",this.threadId=n??Ct(),this.messages=J(r??[]),this.state=J(o??{}),this._debug=rs(i),this._debugLogger=Nl(this._debug),tr(this.maxVersion,"0.0.39")<=0&&this.middlewares.unshift(new vy),tr(this.maxVersion,"0.0.45")<=0&&this.middlewares.unshift(new by),tr(this.maxVersion,"0.0.47")<=0&&this.middlewares.unshift(new Ty),tr(this.maxVersion,"0.0.57")<=0&&this.middlewares.unshift(new _y)}subscribe(t){return this.subscribers.push(t),{unsubscribe:()=>{this.subscribers=this.subscribers.filter(e=>e!==t)}}}use(...t){let e=t.map(n=>typeof n=="function"?new my(n):n);return this.middlewares.push(...e),this}async runAgent(t,e){try{this.isRunning=!0,this.agentId=this.agentId??Ct();let n=this.prepareRunAgentInput(t);this.debugLogger?.lifecycle("LIFECYCLE","Run started:",{agentId:this.agentId,threadId:this.threadId});let r,o=new Set(this.messages.map(l=>l.id)),i=[{onRunFinishedEvent:l=>{l.outcome==="success"&&(r=l.result)}},...this.subscribers,e??{}];await this.onInitialize(n,i),this.activeRunDetach$=new vt;let s;this.activeRunCompletionPromise=new Promise(l=>{s=l}),await mi(ei(()=>this.middlewares.length===0?this.run(n):this.middlewares.reduceRight((l,d)=>({run:u=>d.run(u,l),get messages(){return l.messages},get state(){return l.state}}),this).run(n),os(this.debugLogger),Ol(this.debugLogger),l=>l.pipe(bi(this.activeRunDetach$)),l=>this.apply(n,l,i),l=>this.processApplyEvents(n,l,i),Ir(l=>(this.debugLogger?.lifecycle("LIFECYCLE","Run errored:",{agentId:this.agentId,error:l instanceof Error?l.message:String(l)}),this.isRunning=!1,this.onError(n,l,i))),mn(()=>{this.debugLogger?.lifecycle("LIFECYCLE","Run finished:",{agentId:this.agentId,threadId:this.threadId}),this.isRunning=!1,this.onFinalize(n,i),s?.(),s=void 0,this.activeRunCompletionPromise=void 0,this.activeRunDetach$=void 0}))(ne(null)));let a=J(this.messages).filter(l=>!o.has(l.id));return{result:r,newMessages:a}}finally{this.isRunning=!1}}connect(t){throw new Ja}async connectAgent(t,e){try{this.isRunning=!0,this.agentId=this.agentId??Ct();let n=this.prepareRunAgentInput(t),r,o=new Set(this.messages.map(l=>l.id)),i=[{onRunFinishedEvent:l=>{l.outcome==="success"&&(r=l.result)}},...this.subscribers,e??{}];await this.onInitialize(n,i),this.activeRunDetach$=new vt;let s;this.activeRunCompletionPromise=new Promise(l=>{s=l}),await mi(ei(()=>gi(()=>this.connect(n)),os(this.debugLogger),Ol(this.debugLogger),l=>l.pipe(bi(this.activeRunDetach$)),l=>this.apply(n,l,i),l=>this.processApplyEvents(n,l,i),Ir(l=>(this.isRunning=!1,l instanceof Ja?ni:this.onError(n,l,i))),mn(()=>{this.isRunning=!1,this.onFinalize(n,i),s?.(),s=void 0,this.activeRunCompletionPromise=void 0,this.activeRunDetach$=void 0}))(ne(null)),{defaultValue:void 0});let a=J(this.messages).filter(l=>!o.has(l.id));return{result:r,newMessages:a}}finally{this.isRunning=!1}}abortRun(){}async detachActiveRun(){if(!this.activeRunDetach$)return;let t=this.activeRunCompletionPromise??Promise.resolve();this.activeRunDetach$.next(),this.activeRunDetach$?.complete(),await t}apply(t,e,n){return Nh(t,e,this,n,this.debugLogger)}processApplyEvents(t,e,n){return e.pipe(yi(r=>{r.messages&&(this.messages=r.messages,n.forEach(o=>{o.onMessagesChanged?.({messages:this.messages,state:this.state,agent:this,input:t})})),r.state&&(this.state=r.state,n.forEach(o=>{o.onStateChanged?.({state:this.state,messages:this.messages,agent:this,input:t})}))}))}prepareRunAgentInput(t){let e=J(this.messages);for(let r of e)r.subagentRunId===null&&delete r.subagentRunId;let n=e.filter(r=>r.role!=="activity");return{threadId:this.threadId,runId:t?.runId||Ct(),tools:J(t?.tools??[]),context:J(t?.context??[]),forwardedProps:J(t?.forwardedProps??{}),state:J(this.state),messages:n,...t?.resume===void 0?{}:{resume:J(t.resume)}}}async onInitialize(t,e){if(this.pendingInterrupts.length>0){let r=new Set((t.resume??[]).map(i=>i.interruptId)),o=this.pendingInterrupts.map(i=>i.id).filter(i=>!r.has(i));if(o.length>0)throw new V(`Thread has ${o.length} pending interrupt(s) not addressed by resume: ${o.join(", ")}`);for(let i of this.pendingInterrupts)if(fy(i))throw new V(`Interrupt ${i.id} expired at ${i.expiresAt}`)}let n=await re(e,this.messages,this.state,(r,o,i)=>r.onRunInitialized?.({messages:o,state:i,agent:this,input:t}));if(n.messages!==void 0||n.state!==void 0){if(n.messages){this.messages=n.messages;for(let r of n.messages)r.subagentRunId===null&&delete r.subagentRunId;t.messages=n.messages,e.forEach(r=>{r.onMessagesChanged?.({messages:this.messages,state:this.state,agent:this,input:t})})}n.state&&(this.state=n.state,t.state=n.state,e.forEach(r=>{r.onStateChanged?.({state:this.state,messages:this.messages,agent:this,input:t})}))}}onError(t,e,n){return fn(re(n,this.messages,this.state,(r,o,i)=>r.onRunFailed?.({error:e,messages:o,state:i,agent:this,input:t}))).pipe(Pt(r=>{let o=r;if((o.messages!==void 0||o.state!==void 0)&&(o.messages!==void 0&&(this.messages=o.messages,n.forEach(i=>{i.onMessagesChanged?.({messages:this.messages,state:this.state,agent:this,input:t})})),o.state!==void 0&&(this.state=o.state,n.forEach(i=>{i.onStateChanged?.({state:this.state,messages:this.messages,agent:this,input:t})}))),o.stopPropagation!==!0){let i=String(e);if(!(e.name==="AbortError"||e.message==="Fetch is aborted"||e.message==="signal is aborted without reason"||e.message==="component unmounted"||i==="component unmounted"))throw console.error("Agent execution failed:",e),e}return{}}))}async onFinalize(t,e){let n=await re(e,this.messages,this.state,(r,o,i)=>r.onRunFinalized?.({messages:o,state:i,agent:this,input:t}));(n.messages!==void 0||n.state!==void 0)&&(n.messages!==void 0&&(this.messages=n.messages,e.forEach(r=>{r.onMessagesChanged?.({messages:this.messages,state:this.state,agent:this,input:t})})),n.state!==void 0&&(this.state=n.state,e.forEach(r=>{r.onStateChanged?.({state:this.state,messages:this.messages,agent:this,input:t})})))}clone(){let t=Object.create(Object.getPrototypeOf(this));return t.agentId=this.agentId,t.description=this.description,t.threadId=this.threadId,t.messages=J(this.messages),t.state=J(this.state),t._debug=this._debug,t._debugLogger=this._debugLogger,t.isRunning=this.isRunning,t.subscribers=[...this.subscribers],t.middlewares=[...this.middlewares],t.pendingInterrupts=J(this.pendingInterrupts),t}addMessage(t){this.messages.push(t),(async()=>{for(let e of this.subscribers)await e.onNewMessage?.({message:t,messages:this.messages,state:this.state,agent:this});if(t.role==="assistant"&&t.toolCalls)for(let e of t.toolCalls)for(let n of this.subscribers)await n.onNewToolCall?.({toolCall:e,messages:this.messages,state:this.state,agent:this});for(let e of this.subscribers)await e.onMessagesChanged?.({messages:this.messages,state:this.state,agent:this})})()}addMessages(t){this.messages.push(...t),(async()=>{for(let e of t){for(let n of this.subscribers)await n.onNewMessage?.({message:e,messages:this.messages,state:this.state,agent:this});if(e.role==="assistant"&&e.toolCalls)for(let n of e.toolCalls)for(let r of this.subscribers)await r.onNewToolCall?.({toolCall:n,messages:this.messages,state:this.state,agent:this})}for(let e of this.subscribers)await e.onMessagesChanged?.({messages:this.messages,state:this.state,agent:this})})()}setMessages(t){this.messages=J(t),(async()=>{for(let e of this.subscribers)await e.onMessagesChanged?.({messages:this.messages,state:this.state,agent:this})})()}setState(t){this.state=J(t),(async()=>{for(let e of this.subscribers)await e.onStateChanged?.({messages:this.messages,state:this.state,agent:this})})()}legacy_to_be_removed_runAgentBridged(t){this.agentId=this.agentId??Ct();let e=this.prepareRunAgentInput(t);return(this.middlewares.length===0?this.run(e):this.middlewares.reduceRight((n,r)=>({run:o=>r.run(o,n),get messages(){return n.messages},get state(){return n.state}}),this).run(e)).pipe(os(this.debugLogger),Ol(this.debugLogger),cy(this.threadId,e.runId,this.agentId),n=>n.pipe(Pt(r=>(this.debugLogger?.event("LEGACY","Event:",r,{type:r.type}),r))))}};function ky(t){if(!Array.isArray(t.messages))return t;let e=!1,n=t.messages.map(r=>{if(r.subagentRunId===null){e=!0;let o={...r};return delete o.subagentRunId,o}return r});return e?{...t,messages:n}:t}var Mh=class extends Ay{requestInit(t){return{method:"POST",headers:{...this.headers,"Content-Type":"application/json",Accept:"text/event-stream"},body:JSON.stringify(ky(t)),signal:this.abortController.signal}}runAgent(t,e){return this.abortController=t?.abortController??new AbortController,super.runAgent(t,e)}abortRun(){this.abortController.abort(),super.abortRun()}constructor(t){super(t),this.abortController=new AbortController,this.url=t.url,this.headers=J(t.headers??{}),this.fetch=t.fetch??((e,n)=>fetch(e,n))}run(t){return Zb(Xb(()=>this.fetch(this.url,this.requestInit(t))),this.debugLogger)}clone(){let t=super.clone();t.url=this.url,t.headers=J(this.headers??{}),t.fetch=this.fetch;let e=new AbortController,n=this.abortController.signal;return n.aborted&&e.abort(n.reason),t.abortController=e,t}};function et(t,e){return e===void 0?t:{...t,credentials:e}}function ss(t){if(t.newThread!==void 0)return t.newThread();let e=be();return t.setActiveThread(e),e}function as(t,e,n,r){if(e.length===0)return;let o=new URL(String(t),location.href).origin;o===location.origin||n.includes(o)||r.has(o)||(r.add(o),console.warn(`<ag-ui-chat>: sending host credentials (${e.join(", ")}) to ${o}, which is not this page's origin (${location.origin}). Those headers are the page's own authentication, and whichever server answers the browser's preflight receives them \u2014 so a URL attribute built from a query parameter or from tenant-authored configuration is a channel for the token to leave on. If this destination is deliberate, name it in \`trustedOrigins\` to confirm it and silence this notice. Reported once per origin.`))}function rr(t){return t.split(",").map(e=>e.trim()).filter(e=>e!=="")}function ls(t,e,n=new Set){let r=new Set(n);for(let a of t)a.role==="tool"&&r.add(a.toolCallId);let o=[],i=[],s=!1;for(let a of t){let l=a.role==="assistant"?Ry(a.toolCalls):[];a.role==="tool"||l.length>0&&!s||(o.push(...i.map(e)),i=[]),o.push(a),s=a.role==="tool";for(let u of l)r.has(u)||(r.add(u),i.push(u))}return o.length+i.length===t.length?t:(o.push(...i.map(e)),o)}function Ry(t){return Array.isArray(t)?t.map(e=>Object(e).id).filter(e=>typeof e=="string"):[]}var le={title:"Assistant",chatHistory:"Chat history",closeHistory:"Close history",searchConversations:"Search conversations",queued:"Waiting to send",removeQueued:'Do not send "{text}"',noMatches:"No conversations match that.",chatMoved:"Moved this panel out of the way",chatMinimised:"Minimised this panel",undo:"Undo",newChat:"New chat",collapse:"Collapse",expand:"Expand",expandUnread:"Expand \u2014 {count} unread",toggleTheme:"Toggle theme",copyCode:"Copy",copied:"Copied",copyFailed:"Copy failed",checkpoints:"Continue a run",noCheckpoints:"Nothing to continue yet.",resumeRun:"Resume",forkRun:"Fork",forkedRun:"branched",greeting:"Hello, {name}",greetingNoName:"Hello there",conversation:"Conversation",jumpToLatest:"Jump to latest",announceResponding:"Assistant is responding",announceAnswerReady:"Assistant answered",announceAwaitingDecision:"{count} action is waiting for your approval",announceStopped:"Response stopped",announceFailed:"The response failed",thinking:"Assistant is thinking\u2026",thoughts:"Thoughts",stopped:"\u23F9 Stopped",connectionLost:"Connection lost",noResult:"No result returned.",callNotFinished:"Not finished: the run ended or moved on before this tool call returned a result.",declinedAction:"User declined the action.",confirmCheckFailed:"Not run: the check that decides whether this action needs the user's confirmation failed.",navigating:"Navigating\u2026",historyReplaced:"The server replaced this conversation's history. Reload to see the updated transcript.",chartUndrawable:"A chart could not be drawn from the data sent, so it was removed.",historyCompacted:"Earlier turns condensed to fit the context window ({count} removed)",usingSkill:"Using skill {name}",runInterrupted:"The previous response didn\u2019t finish \u2014 the page changed before it arrived.",pageMoved:"The page changed since you last looked at it. Call read_page to see the current page, then retry.",attachmentsStillUploading:"{n} file still uploading \u2014 it was not sent with this message and is still attached.",notConnected:"This chat isn\u2019t connected to an agent, so the message wasn\u2019t sent.",continueNeedsTurn:"Type the next turn in the composer first, then pick a run to continue.",continueWhileRunning:"Wait for the current answer or stop it, then pick a run to continue.",skillNeeds:"\u201C{title}\u201D needs {fields} \u2014 fill it in below, then send.",message:"Message",inputPlaceholder:"Ask anything\u2026",send:"Send",stop:"Stop",attachFiles:"Attach files",recordVoice:"Record voice",stopRecording:"Stop recording",transcribing:"Transcribing\u2026",transcriptionFailed:"Transcription failed",recordingLimit:"Stopped at the {n}-minute limit \u2014 transcribing what was recorded.",toolRunning:"running\u2026",toolDeferred:"waiting for you",toolDone:"\u2713 done",toolError:"\u26A0 error",toolDeclined:"\u2298 declined",toolInterrupted:"\u25CC not finished",resizePanel:"Resize the chat panel",decisionApproved:"approved by you",decisionDeclined:"declined by you",argumentsLabel:"Arguments",resultLabel:"Result",errorLabel:"Error",declinedLabel:"Declined",interruptedLabel:"Not finished",details:"Details",subAgentWorking:"Working\u2026",subAgentDelegatedTo:"Delegated to {agent}",subAgentFinished:"{agent} finished",subAgentFailed:"The sub-agent failed",subAgentSteps:"Steps the sub-agent took",approvalEditArgs:"Edit the arguments before approving",approvalArgsInvalid:"That is not valid JSON, so nothing was sent.",approvalArgsNotAnObject:"Arguments have to be a JSON object.",suggestions:"Suggested follow-ups",messageActions:"Message actions",quoteSelection:"Quote",copyMessage:"Copy message",retryMessage:"Try again",feedbackUp:"Good answer",feedbackDown:"Poor answer",confirmAction:"Confirm action",confirmAlways:"Always allow",confirmRun:"Run \u201C{tool}\u201D?",confirm:"Confirm",cancel:"Cancel",approveAction:"Approve action",approvalPrompt:"Approve this action?",approve:"Approve",deny:"Deny",askUserAction:"Question",otherOption:"Other\u2026",answerPlaceholder:"Type your answer\u2026",submit:"Submit",chats:"Chats",noConversations:"No conversations yet.",rename:"Rename",renameConversation:"Rename conversation",delete:"Delete",deleteConversation:"Delete conversation",deletePrompt:"Delete?",tooLarge:"Too large (max {size})",fileTypeNotAllowed:"File type not allowed",uploadFailed:"upload failed",retry:"Retry",retryUpload:"Retry upload",remove:"Remove",removeAttachment:"Remove attachment",justNow:"just now",minutesAgo:"{n}m ago",hoursAgo:"{n}h ago",daysAgo:"{n}d ago",weeksAgo:"{n}w ago"};function Pl(t){let e={...le};for(let n of Object.keys(t)){let r=t[n];r!==void 0&&(e[n]=r)}return e}function Iy(t){let e=document.createElement("input");return e.type="text",e.className="question-input",e.setAttribute("part","question-input"),e.placeholder=t,e}function Dl(t,e,n={}){let r=n.strings??le,o=e.options??[],i=o.length>0,s=!i||e.allowCustom===!0;return new Promise(a=>{let l=document.createElement("div");l.className="question",l.setAttribute("part","question"),l.setAttribute("role","group"),l.setAttribute("aria-label",r.askUserAction);let d=document.createElement("div");d.className="question-body",d.setAttribute("part","question-body"),d.textContent=e.question;let u=document.createElement("div");u.className="question-options",u.setAttribute("part","question-options");let m=`q-${o.length}-${e.question.length}`,w=[];for(let b of o){let A=document.createElement("label");A.className="question-choice",A.setAttribute("part","question-choice");let E=document.createElement("input");E.type="radio",E.name=m,E.value=b,E.setAttribute("part","question-radio");let I=document.createElement("span");I.setAttribute("part","question-choice-text"),I.textContent=b,A.append(E,I),u.appendChild(A),w.push(E)}let p=null,h=null;if(s){if(h=Iy(r.answerPlaceholder),i){let b=document.createElement("label");b.className="question-choice",b.setAttribute("part","question-choice"),p=document.createElement("input"),p.type="radio",p.name=m,p.value="",p.setAttribute("part","question-radio");let A=document.createElement("span");A.setAttribute("part","question-choice-text"),A.textContent=r.otherOption,b.append(p,A),u.appendChild(b),h.disabled=!0}u.appendChild(h)}let v=document.createElement("div");v.className="question-actions",v.setAttribute("part","question-actions");let x=document.createElement("button");x.type="button",x.className="question-btn",x.setAttribute("part","question-button"),x.textContent=r.submit,v.appendChild(x);let S=!1,_=()=>{let b=w.find(A=>A.checked);if(b!==void 0)return b.value;if(h!==null&&(p===null||p.checked)){let A=h.value.trim();return A===""?null:A}return null},O=()=>{h!==null&&p!==null&&(h.disabled=!p.checked),x.disabled=_()===null},G=b=>{if(!S){S=!0,x.disabled=!0;for(let A of w)A.disabled=!0;p!==null&&(p.disabled=!0),h!==null&&(h.disabled=!0),l.setAttribute("data-resolved",b===""?"cancelled":"answered"),a(b)}};for(let b of[...w,...p!==null?[p]:[]])b.addEventListener("change",O);if(h?.addEventListener("input",O),h?.addEventListener("keydown",b=>{if(b.key==="Enter"){b.preventDefault();let A=_();A!==null&&G(A)}}),x.addEventListener("click",()=>{let b=_();b!==null&&G(b)}),n.signal?.addEventListener("abort",()=>G(""),{once:!0}),l.append(d,u,v),t.appendChild(l),n.signal?.aborted===!0){G("");return}O(),(i?w[0]:h)?.focus()})}function Ul(t){let e={};if(!Array.isArray(t))return e;for(let n of t){if(n===null||typeof n!="object")continue;let r=n,o=r.name,i=r.summary,s=r.description;typeof o=="string"&&typeof i=="string"&&(e[o]=typeof s=="string"?{name:o,summary:i,description:s}:{name:o,summary:i})}return e}var ds=class{#e;#t={};#n=new Set;#o=new gr;constructor(e){this.#e=e}register(e){this.#o.register(e)}registerPageState(e){for(let n of No(e))this.#o.register(n)}has(e){return this.#o.has(e)}defaultTools(){return[...this.#a().map(e=>({name:e.name,description:e.description,parameters:e.parameters})),...this.#o.tools()]}advertise(){let e=this.#e.getTools();return this.#n=new Set(e.map(n=>n.name)),e}wasAdvertised(e){return this.#n.has(e)}resolve(e){let n=this.#a().find(r=>r.name===e);return n!==void 0?n:this.#o.has(e)?this.#o.get(e):null}summary(e){return this.#t[e]?.summary}async fetchCatalog(){let e=this.#e.element.getAttribute("data-tools-url");if(e!==null)try{let n=await fetch(e,this.#e.fetchInit(e));this.#t=Ul(await n.json())}catch{}}#r(){return this.#e.routeMap().length===0?[]:qa(()=>this.#e.routeMap(),()=>this.#e.navigate())}#i(){let e=this.#e.getPageMap();return e===null?[]:[{name:To,description:"Read the current page's structure (fields, buttons, route). Call after acting to observe the result within the same turn.",parameters:{type:"object",properties:{},required:[],[xe]:"Read the page"},handler:()=>e()}]}#s(){let e=this.#e.element.getAttribute("data-page-actions");if(e===null)return[];let n=new Set(rr(e));return[...ja(n,r=>this.#e.resolvePageTarget(r)),...n.has(yr.CHAT)?La(this.#e.element):[]]}#a(){return[...this.#r(),...this.#i(),...this.#s(),...this.#d()]}#d(){return this.#e.askUser()?[{name:"ask_user",description:"Ask the user a question and wait for their answer. Provide `options` for a multiple-choice prompt; set `allow_custom` to also accept a free-text answer.",parameters:{type:"object",properties:{question:{type:"string",description:"The question to ask the user."},options:{type:"array",items:{type:"string"},description:"Preset choices offered as radio buttons."},allow_custom:{type:"boolean",description:"Allow a free-text answer in addition to any options."}},required:["question"]},handler:(e,n)=>this.#u(e,n)}]:[]}async#u(e,n){let o={question:typeof e.question=="string"?e.question:""},i=e.options;Array.isArray(i)&&(o.options=i.filter(u=>typeof u=="string")),e.allow_custom===!0&&(o.allowCustom=!0);let s=this.#e.decision.open();this.#e.hidePending();let a=()=>Dl(this.#e.ensureGroup(),o,{signal:s,strings:this.#e.strings()}),l=this.#e.askUserRenderer(),d;if(l===null)d=await a();else try{d=await l.call(this.#e.element,o,{signal:s})}catch(u){d=await this.#c(u,s,n,a)}return this.#e.decision.close(),this.#e.updateEmptyState(),this.#e.follow(),d}#c(e,n,r,o){return n.aborted?Promise.resolve(""):(console.warn(`ag-ui-chat: askUserRenderer failed for tool call ${r}, so the built-in question card asks instead`,e),o())}};function cs(t){if(t.name!==Oa)return null;let e=t.args?.id;return typeof e=="string"&&e!==""?e:null}function Lh(t,e){let n=document.createElement("button");return n.type="button",n.className=`approval-btn approval-btn--${t}`,n.setAttribute("part",`approval-button approval-${t}`),n.textContent=e,n}function Hl(t,e,n={}){let r=n.strings??le;return new Promise(o=>{let i=document.createElement("div");i.className="approval",i.setAttribute("part","approval"),e.toolName!==void 0&&i.setAttribute("data-tool-name",e.toolName),i.setAttribute("role","group"),i.setAttribute("aria-label",r.approveAction);let s=document.createElement("div");s.className="approval-body",s.setAttribute("part","approval-body"),s.textContent=e.message??r.approvalPrompt;let a=Cy(e,n,r),l=document.createElement("div");l.className="approval-actions",l.setAttribute("part","approval-actions");let d=Lh("deny",r.deny),u=Lh("approve",r.approve),m=!1,w=p=>{m||(m=!0,d.disabled=!0,u.disabled=!0,i.setAttribute("data-resolved",p?"approved":"denied"),o(p))};if(d.addEventListener("click",()=>w(!1)),u.addEventListener("click",()=>{a!==null&&!a.commit()||w(!0)}),n.signal?.addEventListener("abort",()=>w(!1),{once:!0}),l.append(d,u),i.append(s,...a===null?[]:[a.root],l),t.appendChild(i),n.signal?.aborted===!0){w(!1);return}u.focus()})}function Cy(t,e,n){let{onEdit:r}=e;if(r===void 0||t.args===void 0)return null;let o=JSON.stringify(t.args,null,2),i=document.createElement("div");i.className="approval-edit",i.setAttribute("part","approval-edit");let s=document.createElement("textarea");s.className="approval-args",s.setAttribute("part","approval-args"),s.setAttribute("aria-label",n.approvalEditArgs),s.rows=Math.min(10,o.split(`
`).length),s.value=o;let a=document.createElement("div");return a.className="approval-error",a.setAttribute("part","approval-error"),a.setAttribute("role","alert"),a.hidden=!0,i.append(s,a),{root:i,commit:()=>{if(s.value===o)return!0;let l;try{l=JSON.parse(s.value)}catch{return a.textContent=n.approvalArgsInvalid,a.hidden=!1,s.focus(),!1}return typeof l!="object"||l===null||Array.isArray(l)?(a.textContent=n.approvalArgsNotAnObject,a.hidden=!1,s.focus(),!1):(a.hidden=!0,r(l),!0)}}}function Gl(t,e){let n=document.createElement("button");return n.type="button",n.className=`confirm-btn confirm-btn--${t}`,n.setAttribute("part",`confirm-button confirm-${t}`),n.textContent=e,n}function zl(t,e,n={}){let r=n.strings??le;return new Promise(o=>{let i=document.createElement("div");i.className="confirm",i.setAttribute("part","confirm"),i.setAttribute("data-tool-name",e.toolName),i.setAttribute("role","group"),i.setAttribute("aria-label",r.confirmAction);let s=document.createElement("div");s.className="confirm-body",s.setAttribute("part","confirm-body"),s.textContent=e.message??oe(r.confirmRun,{tool:e.toolName});let a=document.createElement("pre");a.className="confirm-args",a.setAttribute("part","confirm-args"),a.textContent=JSON.stringify(e.args,null,2),a.hidden=Object.keys(e.args).length===0;let l=document.createElement("div");l.className="confirm-actions",l.setAttribute("part","confirm-actions");let d=Gl("cancel",r.cancel),u=n.onAlwaysAllow===void 0?null:Gl("always",oe(r.confirmAlways,{tool:e.toolName})),m=Gl("confirm",r.confirm),w=!1,p=h=>{w||(w=!0,i.remove(),o(h))};if(d.addEventListener("click",()=>p(!1)),m.addEventListener("click",()=>p(!0)),u?.addEventListener("click",()=>{n.onAlwaysAllow?.(),p(!0)}),n.signal?.addEventListener("abort",()=>p(!1),{once:!0}),l.append(d,...u===null?[]:[u],m),i.append(s,a,l),t.appendChild(i),n.signal?.aborted===!0){p(!1);return}m.focus()})}function Fl(t){return t[fr]===!0}function us(t){return t[mr]===!0}var hs=class{#e;#t=new Set;#n=null;constructor(e){this.#e=e}forgetWaivers(){this.#t.clear()}buildContext(){return this.#n=window.location.href,this.#e.getContext()}async execute(e){if(cs(e)!==null)return null;let n=this.#e.transcript.cardFor(e);this.#e.transcript.forgetCard(e.id),this.#e.transcript.setCardElement(e.id,n.element);let r=this.#e.tools.wasAdvertised(e.name)?this.#e.tools.resolve(e.name):null;if(r===null)return this.#e.transcript.isServerSettled(e.id)||n.settle(te.INTERRUPTED,this.#e.strings().callNotFinished),null;if(this.#e.getPageMap()!==null&&e.name!==To&&!us(r.parameters)&&this.#i()){let s=this.#e.strings().pageMoved;return n.settle(te.ERROR,s),this.#e.transcript.showPending(),{content:`Error: ${s}`,error:s,outcome:Pe.FAILED}}let o=await this.#r(e,r);if(o==="unanswered"){let s=this.#e.strings().confirmCheckFailed;return n.settle(te.DECLINED,s),this.#e.transcript.showPending(),{content:s,outcome:Pe.DENIED}}if(o!==null){let s={toolName:e.name,args:e.args},a=r.parameters[Eo];typeof a=="string"&&(s.message=a);let l=this.#e.decision.open(),d=zl(this.#e.transcript.ensureGroup(),s,{signal:l,strings:this.#e.strings(),...o==="destructive"?{onAlwaysAllow:()=>this.#t.add(e.name)}:{}});this.#e.transcript.updateEmptyState(),this.#e.transcript.follow();let u=await d;if(this.#e.decision.close(),n.recordDecision(u?"approved":"declined"),!u){let m=this.#e.strings().declinedAction;return n.settle(te.DECLINED,m),this.#e.transcript.showPending(),{content:m,outcome:Pe.DENIED}}}let i=us(r.parameters)&&this.#e.navigate()===null;i&&this.#e.conversationStore().saveCheckpoint(this.#e.threadId(),{toolCallId:e.id});try{let s=await r.handler(e.args,e.id);if(r.render!==void 0&&this.#e.transcript.renderToolOutput(r.render,e),i)return n.settle(te.DONE,this.#e.strings().navigating),{content:"",halt:!0};let a=JSON.stringify(s??null);return n.settle(te.DONE,a),this.#e.transcript.showPending(),{content:a}}catch(s){i&&this.#e.conversationStore().saveCheckpoint(this.#e.threadId(),null);let a=s instanceof Error?s.message:String(s);return n.settle(te.ERROR,a),this.#e.transcript.showPending(),{content:`Error: ${a}`,error:a,outcome:Pe.FAILED}}}async resolveInterrupts(e){let n=this.#e.decision.open();this.#e.announce(oe(this.#e.strings().announceAwaitingDecision,{count:e.length})),this.#e.transcript.hidePending();let r=await Promise.all(e.map(async i=>{let s=i.toolCallId!==void 0?this.#e.transcript.card(i.toolCallId):void 0,a={},l=Ny(i)??i.message;l!==void 0&&(a.message=l);let d=s?.element.getAttribute("data-tool-name");d!=null&&(a.toolName=d);let u,m=this.#e.approveWithEdits()&&s!==void 0;m&&(a.args=s.args),s?.mark(te.DEFERRED);let w=()=>Hl(s?.approvalSlot??this.#e.transcript.ensureGroup(),a,{signal:n,strings:this.#e.strings(),...m?{onEdit:v=>{u=v}}:{}}),p=this.#e.approvalRenderer(),h;if(p===null)h=await w();else try{h=await p.call(this.#e.element,a,{signal:n})}catch(v){h=await this.#o(v,n,i.id,w)}return s?.recordDecision(h?"approved":"declined"),h?s?.mark(te.PENDING):s?.settle(te.DECLINED,this.#e.strings().declinedAction),{id:i.id,approved:h,editedArgs:u}}));this.#e.transcript.updateEmptyState(),this.#e.transcript.follow(),this.#e.decision.close();let o={};for(let{id:i,approved:s,editedArgs:a}of r)o[i]=s?{status:"resolved",payload:a===void 0?{approved:!0}:{approved:!0,editedArgs:a}}:{status:"cancelled"};return o}#o(e,n,r,o){return n.aborted?Promise.resolve(!1):(console.warn(`ag-ui-chat: approvalRenderer failed for interrupt ${r}, so the built-in approval card asks instead`,e),o())}async#r(e,n){if(this.#e.autoConfirm())return null;let r=this.#e.confirmPredicate();if(r!==null)try{return await r.call(this.#e.element,e.name,e.args)===!0?"predicate":null}catch(o){return console.warn(`ag-ui-chat: confirmPredicate failed for tool ${e.name}, so the call was refused`,o),"unanswered"}return this.#t.has(e.name)?null:Fl(n.parameters)?"destructive":null}#i(){return this.#n!==null&&this.#n!==window.location.href}};function Ny(t){let e=t.metadata?.[Eo];return typeof e=="string"&&e.trim()!==""?e:void 0}var Oy="http://www.w3.org/2000/svg",Ve={top:20,right:12,bottom:30,left:44},My=480,Ly=220,Py=220/480,Dy=160,Uy=320,Ph=8,Hy=5.6,Dh=["var(--ag-ui-chart-1, #4f7cff)","var(--ag-ui-chart-2, #21b573)","var(--ag-ui-chart-3, #e0803c)","var(--ag-ui-chart-4, #b563d8)","var(--ag-ui-chart-5, #d84f6e)","var(--ag-ui-chart-6, #3ba7c4)"];function bn(t){return Dh[t%Dh.length]}function Uh(t){let e=Math.max(Ly,t),n=Math.min(Uy,Math.max(Dy,Math.round(e*Py)));return{width:e,height:n,plotW:e-Ve.left-Ve.right,plotH:n-Ve.top-Ve.bottom}}function bt(t,e){let n=document.createElementNS(Oy,t);for(let[r,o]of Object.entries(e))n.setAttribute(r,String(o));return n}function Hh(t,e){let n=bt("text",{"font-size":10,fill:"currentColor","fill-opacity":.65,...e});return n.textContent=t,n}function Gy(t){let e=[];return t.labels.forEach((n,r)=>{let o=0;for(let i of t.series)o+=i.points[r]??0,e.push(o)}),e}function zy(t){let e=t.kind==="stacked"?Gy(t):t.series.flatMap(o=>[...o.points]),n=Math.max(0,...e),r=Math.min(0,...e);return n===r?{min:r,max:n+1}:{min:r,max:n}}function yn(t,e,n,r){return Ve.top+r.plotH-(t-e)/(n-e)*r.plotH}function $l(t,e,n){let r=n.plotW/e;return Ve.left+r*t+r/2}function Fy(t,e){let n=e.plotW/t.length,r=Math.max(...t.map(o=>o.length))*Hy;return Math.max(1,Math.ceil(r/n))}function $y(t,e,n,r,o){for(let s of[r,o]){let a=yn(s,r,o,n);t.appendChild(bt("line",{x1:Ve.left,y1:a,x2:n.width-Ve.right,y2:a,stroke:"currentColor","stroke-opacity":s===r?.35:.12})),t.appendChild(Hh(String(Math.round(s)),{x:Ve.left-6,y:a+4,"text-anchor":"end"}))}let i=Fy(e.labels,n);e.labels.forEach((s,a)=>{a%i===0&&t.appendChild(Hh(s,{x:$l(a,e.labels.length,n),y:n.height-Ve.bottom+16,"text-anchor":"middle"}))})}function By(t,e,n,r,o){let i=n.plotW/e.labels.length,s=i*.7/e.series.length,a=yn(r,r,o,n);e.series.forEach((l,d)=>{l.points.forEach((u,m)=>{let w=yn(u,r,o,n);t.appendChild(bt("rect",{x:Ve.left+i*m+i*.15+s*d,y:w,width:s,height:Math.max(1,a-w),fill:bn(d),rx:2}))})})}function jy(t,e,n,r,o){let i=n.plotW/e.labels.length,s=i*.7,a=e.labels.map(()=>0);e.series.forEach((l,d)=>{l.points.forEach((u,m)=>{let w=a[m]??0,p=w+u;a[m]=p;let h=yn(p,r,o,n);t.appendChild(bt("rect",{x:Ve.left+i*m+i*.15,y:h,width:s,height:Math.max(1,yn(w,r,o,n)-h),fill:bn(d)}))})})}function Vy(t,e,n,r,o){e.series.forEach((i,s)=>{let a=i.points.map((l,d)=>`${$l(d,e.labels.length,n)},${yn(l,r,o,n)}`).join(" ");t.appendChild(bt("polyline",{points:a,fill:"none",stroke:bn(s),"stroke-width":2,"stroke-linejoin":"round"}))})}function qy(t,e,n,r,o){e.series.forEach((i,s)=>{i.points.forEach((a,l)=>{t.appendChild(bt("circle",{cx:$l(l,e.labels.length,n),cy:yn(a,r,o,n),r:4,fill:bn(s),"fill-opacity":.85}))})})}function Wy(t,e,n){let r=e.reduce((l,d)=>l+d,0),o=n.width/2,i=Ve.top+n.plotH/2,s=Math.min(n.plotW,n.plotH)/2;if(r===0){t.appendChild(bt("circle",{cx:o,cy:i,r:s,fill:"none",stroke:"currentColor","stroke-opacity":.3}));return}let a=-Math.PI/2;e.forEach((l,d)=>{let u=l/r*Math.PI*2,m=a+u;if(u>=Math.PI*2)t.appendChild(bt("circle",{cx:o,cy:i,r:s,fill:bn(d)}));else{let w=o+s*Math.cos(a),p=i+s*Math.sin(a),h=o+s*Math.cos(m),v=i+s*Math.sin(m),x=u>Math.PI?1:0;t.appendChild(bt("path",{d:`M ${o} ${i} L ${w} ${p} A ${s} ${s} 0 ${x} 1 ${h} ${v} Z`,fill:bn(d)}))}a=m})}function Gh(t,e){let n=bt("svg",{viewBox:`0 0 ${e.width} ${e.height}`,width:"100%",role:"img"});if(n.setAttribute("aria-label",t.title??`${t.kind} chart`),t.kind==="pie"){let i=t.series[0];return Wy(n,i.points.map(s=>Math.max(0,s)),e),n}let{min:r,max:o}=zy(t);return $y(n,t,e,r,o),t.kind==="bar"?By(n,t,e,r,o):t.kind==="stacked"?jy(n,t,e,r,o):t.kind==="line"?Vy(n,t,e,r,o):qy(n,t,e,r,o),n}function Xy(t){if(t.length<2)return null;let e=document.createElement("div");return e.className="chart-legend",e.setAttribute("part","chart-legend"),t.forEach((n,r)=>{let o=document.createElement("span");o.className="chart-legend-item";let i=document.createElement("span");i.className="chart-legend-swatch",i.style.background=bn(r),o.append(i,document.createTextNode(n)),e.appendChild(o)}),e}function Yy(t,e){new ResizeObserver(()=>{e(Math.round(t.clientWidth/Ph)*Ph)}).observe(t)}function Lr(t){if(t.labels.length===0||t.series.length===0)return null;let e=document.createElement("div");if(e.className="chart-block",e.setAttribute("part","chart-block"),t.title!==void 0&&t.title!==""){let i=document.createElement("div");i.className="chart-title",i.setAttribute("part","chart-title"),i.textContent=t.title,e.appendChild(i)}let n=My,r=Gh(t,Uh(n));e.appendChild(r);let o=Xy(t.kind==="pie"?t.labels:t.series.map(i=>i.label));return o!==null&&e.appendChild(o),Yy(e,i=>{if(i===n)return;n=i;let s=Gh(t,Uh(n));r.replaceWith(s),r=s}),e}var Ky=["bar","line","pie","scatter","stacked"];function Zy(t){return Ky.includes(t)?t:"bar"}function Qy(t){if(!Array.isArray(t))return null;let e=[];for(let n of t){if(typeof n!="number"||!Number.isFinite(n)||Math.abs(n)>1e15)return null;e.push(n)}return e}function Jy(t){if(!Array.isArray(t))return null;for(let e=0;e<t.length;e+=1)if(typeof t[e]!="string")return null;return t}function or(t){if(typeof t!="object"||t===null)return null;let e=t,n=Jy(e.labels);if(n===null||!Array.isArray(e.series))return null;let r=[];for(let s of e.series){if(typeof s!="object"||s===null)return null;let a=s,l=Qy(a.points);if(l===null||l.length!==n.length)return null;r.push({label:typeof a.label=="string"?a.label:"",points:l})}if(r.length===0||r.length*n.length>2e4||n.length>2e3)return null;let o=Zy(e.kind),i=e.title;return typeof i=="string"?{kind:o,title:i,labels:n,series:r}:{kind:o,labels:n,series:r}}var ps="render_chart";function ew(t){let e=or(t);return e===null?null:Lr(e)}function tw(t){let e=or(t);return e!==null&&e.labels.length>0&&e.series.length>0}var nw="chart not rendered: expected labels (strings) and series, each with one finite number per label";function zh(){return{name:ps,description:"Show a chart in the conversation. Supply the data and the page draws it. Every series must have exactly one point per label.",parameters:{type:"object",properties:{kind:{type:"string",enum:["bar","line","pie","scatter","stacked"]},title:{type:"string"},labels:{type:"array",items:{type:"string"}},series:{type:"array",items:{type:"object",properties:{label:{type:"string"},points:{type:"array",items:{type:"number"}}},required:["points"]}}},required:["labels","series"],"x-summary":"Draw a chart"},handler:t=>tw(t)?"chart rendered":nw,render:ew}}function Ut(t){t.style.height="auto",t.style.height=`${t.scrollHeight}px`}function Bl(t,e){return new Promise((n,r)=>{let o=new FormData;o.append("file",t);let i=new XMLHttpRequest;i.open("POST",e.url),i.withCredentials=e.credentials==="include";for(let[l,d]of Object.entries(e.headers??{}))i.setRequestHeader(l,d);let s=e.onProgress;s!==void 0&&i.upload.addEventListener("progress",l=>{l.lengthComputable&&s(l.total===0?0:l.loaded/l.total)}),i.addEventListener("load",()=>{if(i.status>=200&&i.status<300)try{n(rw(JSON.parse(i.responseText)))}catch{r(new Error("upload returned an unreadable response"))}else r(new Error(ow(i)))}),i.addEventListener("error",()=>r(new Error("upload failed"))),i.addEventListener("abort",()=>r(new Error("upload cancelled")));let a=e.signal;a!==void 0&&a.addEventListener("abort",()=>i.abort()),i.send(o)})}function rw(t){if(typeof t!="object"||t===null)throw new Error("not an object");let e=t,n=e.id,r=e.name,o=e.mime,i=e.size,s=e.url;if(typeof n!="string"||typeof r!="string"||typeof o!="string"||typeof i!="number")throw new Error("missing fields");return typeof s=="string"?{id:n,name:r,mime:o,size:i,url:s}:{id:n,name:r,mime:o,size:i}}function ow(t){try{let e=JSON.parse(t.responseText);if(typeof e.error=="string")return e.error}catch{}return`upload failed (${t.status})`}function fs(t){let e=document.createElement("div");e.className="attachment-chips",e.setAttribute("part","attachment-chips");for(let n of t)e.appendChild(iw(n));return e}function iw(t){let e=document.createElement("div");e.className="attachment-chip attachment-chip--ready",e.setAttribute("part","attachment-chip");let n=document.createElement("span");n.className="attachment-chip-icon",n.setAttribute("part","attachment-chip-icon"),n.innerHTML=jl(t.mime),n.setAttribute("aria-hidden","true");let r=document.createElement("span");r.className="attachment-chip-name",r.setAttribute("part","attachment-chip-name"),r.textContent=t.name,r.title=t.name;let o=document.createElement("span");return o.className="attachment-chip-size",o.setAttribute("part","attachment-chip-size"),o.textContent=ms(t.size),e.append(n,r,o),e}function jl(t){return t.startsWith("image/")?yc:t==="application/pdf"?wc:t.startsWith("text/")?xc:bc}function ms(t){if(t<1024)return`${t} B`;let e=["KB","MB","GB"],n=t/1024,r=0;for(;n>=1024&&r<e.length-1;)n/=1024,r+=1;return`${n<10?Math.round(n*10)/10:Math.round(n)} ${e[r]}`}var gs=class{element;#e;#t;#n=[];constructor(e){this.#e=e,this.#t=e.strings??le,this.element=document.createElement("div"),this.element.className="attachment-tray",this.element.setAttribute("part","attachment-tray"),this.element.hidden=!0}add(e){let n={localId:be(),file:e,status:$e.UPLOADING,progress:0,ref:null,error:"",controller:null};this.#n.push(n);let r=this.#o(e);if(r!==null){n.status=$e.ERROR,n.error=r,this.#s(),this.#e.onChange?.();return}this.#s(),this.#e.onChange?.(),this.#r(n)}readyRefs(){let e=[];for(let n of this.#n)n.ref!==null&&e.push(n.ref);return e}hasPending(){return this.#n.some(e=>e.status===$e.UPLOADING)}pendingCount(){return this.#n.filter(e=>e.status===$e.UPLOADING).length}isEmpty(){return this.#n.length===0}clearReady(){this.#n=this.#n.filter(e=>e.status===$e.UPLOADING),this.#s()}clear(){for(let e of this.#n)e.controller?.abort();this.#n=[],this.#s()}dispose(){for(let e of this.#n)e.controller?.abort()}#o(e){return this.#e.maxBytes>0&&e.size>this.#e.maxBytes?oe(this.#t.tooLarge,{size:ms(this.#e.maxBytes)}):sw(this.#e.accept,e)?null:this.#t.fileTypeNotAllowed}#r(e){let n=this.#o(e.file);if(n!==null){e.status=$e.ERROR,e.error=n,this.#s(),this.#e.onChange?.();return}e.status=$e.UPLOADING,e.progress=0,e.error="";let r=new AbortController;e.controller=r,this.#s(),this.#e.upload(e.file,o=>{e.progress=o,this.#s()},r.signal).then(o=>{e.status=$e.READY,e.ref=o}).catch(o=>{e.status=$e.ERROR,e.error=o instanceof Error?o.message:this.#t.uploadFailed}).finally(()=>{e.controller=null,this.#s(),this.#e.onChange?.()})}#i(e){e.controller?.abort(),this.#n=this.#n.filter(n=>n!==e),this.#s(),this.#e.onChange?.()}#s(){this.element.replaceChildren(),this.element.hidden=this.#n.length===0;for(let e of this.#n)this.element.appendChild(this.#a(e))}#a(e){let n=document.createElement("div");n.className=`attachment-chip attachment-chip--${e.status}`,n.setAttribute("part","attachment-chip");let r=document.createElement("span");r.className="attachment-chip-icon",r.setAttribute("part","attachment-chip-icon"),r.innerHTML=jl(e.file.type),r.setAttribute("aria-hidden","true");let o=document.createElement("span");o.className="attachment-chip-name",o.setAttribute("part","attachment-chip-name"),o.textContent=e.file.name,o.title=e.file.name;let i=document.createElement("span");if(i.className="attachment-chip-size",i.setAttribute("part","attachment-chip-size"),i.textContent=e.status===$e.ERROR?e.error:ms(e.file.size),n.append(r,o,i),e.status===$e.UPLOADING){let a=document.createElement("div");a.className="attachment-chip-bar",a.setAttribute("part","attachment-chip-bar");let l=document.createElement("div");l.className="attachment-chip-bar-fill",l.setAttribute("part","attachment-chip-bar-fill"),l.style.width=`${Math.round(e.progress*100)}%`,a.appendChild(l),n.appendChild(a)}if(e.status===$e.ERROR){let a=document.createElement("button");a.type="button",a.className="attachment-chip-retry",a.setAttribute("part","attachment-chip-retry"),a.title=this.#t.retry,a.setAttribute("aria-label",this.#t.retryUpload),a.textContent="\u21BB",a.addEventListener("click",()=>this.#r(e)),n.appendChild(a)}let s=document.createElement("button");return s.type="button",s.className="attachment-chip-remove",s.setAttribute("part","attachment-chip-remove"),s.title=this.#t.remove,s.setAttribute("aria-label",this.#t.removeAttachment),s.textContent="\u2715",s.addEventListener("click",()=>this.#i(e)),n.appendChild(s),n}};function sw(t,e){let n=rr(t).map(i=>i.toLowerCase());if(n.length===0)return!0;let r=e.type.toLowerCase(),o=e.name.toLowerCase();return n.some(i=>i.startsWith(".")?o.endsWith(i):i.endsWith("/*")?r.startsWith(i.slice(0,-1)):r===i)}var vs=class{#e;#t=null;constructor(e){this.#e=e}get tray(){return this.#t}wire(e){this.#t?.element.remove(),this.#t=null;let n=this.#e.element.getAttribute("data-attachments-url"),r=this.#e.uploadHandler()??this.#n(n);if(r===null)return;let o=this.#e.element.getAttribute("data-attachment-accept")??"",i=new gs({upload:r,maxBytes:this.#o(),accept:o,strings:this.#e.strings(),onChange:()=>this.#d(i)});this.#t=i,this.#e.slot.appendChild(this.#t.element),this.#e.fileInput.accept=o,this.#e.button.hidden=!1,this.#r(e),this.#a(i,e)}attach(e){return this.#t===null?!1:(this.#t.add(e),!0)}onFilesPicked(){let e=this.#e.fileInput,n=e.files;if(n!==null)for(let r of Array.from(n))this.#t?.add(r);e.value=""}#n(e){return e===null?null:(n,r,o)=>Bl(n,{url:e,headers:this.#e.headersFor(e),...this.#e.credentialsOption(),onProgress:r,signal:o})}#o(){let e=this.#e.element.getAttribute("data-attachment-max-bytes");if(e===null)return Ca;let n=Number.parseInt(e,10);return Number.isFinite(n)&&n>=0?n:Ca}#r(e){let n=this.#e.chat;n.addEventListener("dragover",r=>{r.preventDefault(),n.classList.add("chat--dragover")},{signal:e}),n.addEventListener("dragleave",()=>{n.classList.remove("chat--dragover")},{signal:e}),n.addEventListener("drop",r=>{r.preventDefault(),n.classList.remove("chat--dragover");let o=r.dataTransfer?.files;if(o!==void 0)for(let i of Array.from(o))this.#t?.add(i)},{signal:e})}#i(e,n,r){let o=this.#s(),i=n.getData("text/plain");o===null||i.length<o||(e.preventDefault(),r.add(new File([i],`pasted-${Fh()}.txt`,{type:"text/plain"})))}#s(){let e=this.#e.element.getAttribute("data-paste-attach");if(e===null)return So;if(e==="off")return null;let n=Number.parseInt(e,10);return Number.isNaN(n)||n<=0?(console.warn(`<ag-ui-chat>: data-paste-attach="${e}" is neither "off" nor a positive number of characters, so the default of ${So} is used.`),So):n}#a(e,n){this.#e.chat.addEventListener("paste",r=>{let o=r.clipboardData??null;if(o===null)return;let i=Array.from(o.files);if(i.length===0){this.#i(r,o,e);return}o.getData("text/plain")===""&&r.preventDefault();for(let s of i)this.#t?.add(aw(s))},{signal:n})}#d(e){this.#e.element.dispatchEvent(new CustomEvent(Ta,{detail:{attachments:e.readyRefs(),pending:e.pendingCount()},bubbles:!0,composed:!0}))}};function Fh(){return new Date().toISOString().replace(/[:.]/g,"-")}function aw(t){if(t.name!=="")return t;let e=t.type.split("/")[1]??t.type,n=Fh();return new File([t],e===""?`pasted-${n}`:`pasted-${n}.${e}`,{type:t.type})}async function Vl(t,e){let n=new FormData;n.append("audio",t,"recording.webm");let r=await fetch(e.url,et({method:"POST",headers:{...e.headers??{}},body:n},e.credentials));if(!r.ok)throw new Error(await lw(r));let o=await r.json();if(typeof o=="object"&&o!==null&&typeof o.text=="string")return o.text;throw new Error("transcription returned an unreadable response")}async function lw(t){try{let e=await t.json();if(typeof e.error=="string")return e.error}catch{}return`transcription failed (${t.status})`}var $h=12e4,bs=class{element;#e;#t;#n;#o="idle";#r=null;#i=null;#s=[];#a=null;#d=!1;#u=!1;constructor(e){this.#e=e.transcribe,this.#t=e.onText,this.#n=e.strings??le,this.element=document.createElement("button"),this.element.type="button",this.element.className="voice-btn",this.element.setAttribute("part","voice-button");let n=document.createElement("slot");n.name="icon-voice",n.innerHTML=cc,this.element.append(n),this.#g("idle"),this.element.addEventListener("click",()=>{this.toggle()})}async toggle(){if(this.#o==="recording"){this.#p();return}this.#o!=="transcribing"&&await this.#c()}async#c(){let e;try{e=await navigator.mediaDevices.getUserMedia({audio:!0})}catch{this.#b(this.#n.transcriptionFailed);return}this.#i=e,this.#s=[],this.#d=!1;let n=new MediaRecorder(e);n.addEventListener("dataavailable",r=>{this.#s.push(r.data)}),n.addEventListener("stop",()=>{this.#h(n.mimeType)}),this.#r=n,n.start(),this.#a=setTimeout(()=>{this.#d=!0,this.#p()},$h),this.#g("recording")}#p(){this.#l(),this.#r?.stop()}#l(){this.#a!==null&&(clearTimeout(this.#a),this.#a=null)}dispose(){this.#u=!0,this.#l(),this.#r!==null&&this.#r.state!=="inactive"&&this.#r.stop(),this.#r=null,this.#m()}async#h(e){if(this.#u)return;this.#m(),this.#g("transcribing");let n=new Blob(this.#s,{type:e||"audio/webm"});try{let r=await this.#e(n);this.#g("idle"),this.#d&&(this.element.title=oe(this.#n.recordingLimit,{n:$h/6e4})),r!==""&&this.#t(r)}catch(r){this.#b(r instanceof Error?r.message:this.#n.transcriptionFailed)}finally{this.#r=null}}#m(){for(let e of this.#i?.getTracks()??[])e.stop();this.#i=null}#b(e){this.#m(),this.#r=null,this.#g("idle"),this.element.title=e}#g(e){this.#o=e,this.element.dataset.state=e;let n=this.#w(e);this.element.title=n,this.element.setAttribute("aria-label",n),this.element.setAttribute("aria-pressed",String(e==="recording")),this.element.disabled=e==="transcribing"}#w(e){return e==="recording"?this.#n.stopRecording:e==="transcribing"?this.#n.transcribing:this.#n.recordVoice}};var ys=class{#e;#t=null;constructor(e){this.#e=e}wire(){this.#t?.element.remove(),this.#t=null;let e=this.#e.element.getAttribute("data-transcribe-url"),n=this.#e.transcribeHandler()??this.#n(e);n!==null&&(this.#t=new bs({transcribe:n,onText:r=>this.#o(r),strings:this.#e.strings()}),this.#e.slot.appendChild(this.#t.element))}dispose(){this.#t?.dispose()}#n(e){return e===null?null:n=>Vl(n,{url:e,headers:this.#e.headersFor(e),...this.#e.credentialsOption()})}#o(e){let n=this.#e.input,r=n.value.trim();n.value=r===""?e:`${r} ${e}`,this.#e.onInput(),n.focus()}};var ws=class{chips;palette;#e;#t=[];#n=!1;#o=!1;#r=[];#i=0;constructor(e){this.#e=e,this.chips=document.createElement("div"),this.chips.className="skill-chips",this.chips.setAttribute("part","skill-chips"),this.chips.hidden=!0,this.palette=document.createElement("div"),this.palette.className="skill-palette",this.palette.setAttribute("part","skill-palette"),this.palette.setAttribute("role","listbox"),this.palette.hidden=!0}setSkills(e){this.#t=e,this.#u()}enableChips(e){this.#n=e,this.#u()}enableSlash(e){this.#o=e}isOpen(){return!this.palette.hidden}onInput(e){this.#o&&e.startsWith("/")?this.#s(e.slice(1)):this.close()}onKeydown(e){return this.isOpen()?e.key==="ArrowDown"?(this.#a(1),!0):e.key==="ArrowUp"?(this.#a(-1),!0):e.key==="Escape"?(this.close(),!0):e.key==="Enter"?(this.#r.slice(this.#i,this.#i+1).forEach(n=>{this.#d(n)}),!0):!1:!1}close(){this.palette.hidden=!0,this.palette.replaceChildren()}#s(e){let n=e.trim().toLowerCase(),r=this.#t.filter(o=>o.name.toLowerCase().includes(n)||o.title.toLowerCase().includes(n));if(r.length===0){this.close();return}this.#r=r,this.#i=0,this.#c(),this.palette.hidden=!1}#a(e){let n=this.#r.length;this.#i=(this.#i+e+n)%n,this.#c()}#d(e){this.close(),this.#e(e)}#u(){this.chips.replaceChildren();let e=this.#n?this.#t.filter(n=>n.chip===!0):[];this.chips.hidden=e.length===0;for(let n of e){let r=document.createElement("button");r.type="button",r.className="skill-chip",r.setAttribute("part","skill-chip"),r.textContent=n.title,r.title=`/${n.name}`,r.addEventListener("click",()=>this.#d(n)),this.chips.appendChild(r)}}#c(){this.palette.replaceChildren(),this.#r.forEach((e,n)=>{let r=document.createElement("button");r.type="button",r.className="skill-item",r.setAttribute("part","skill-item"),r.setAttribute("role","option"),r.setAttribute("aria-selected",n===this.#i?"true":"false");let o=document.createElement("span");o.className="skill-item-title",o.setAttribute("part","skill-item-title");let i=document.createElement("code");if(i.className="skill-item-token",i.setAttribute("part","skill-item-token"),i.textContent=`/${e.name}`,o.append(i,document.createTextNode(` ${e.title}`)),r.appendChild(o),e.description!==void 0){let s=document.createElement("span");s.className="skill-item-desc",s.setAttribute("part","skill-item-desc"),s.textContent=e.description,r.appendChild(s)}r.addEventListener("click",()=>this.#d(e)),this.palette.appendChild(r)})}};var dw=500;function Pr(t,e=[],n){for(let r of ww(e)){if(!t.contains(r.startContainer)||!t.contains(r.endContainer))continue;let o=document.createRange();o.setStart(r.startContainer,r.startOffset),o.setEnd(r.endContainer,r.endOffset);let i=pw(o).trim();if(i!=="")return{text:i,rect:yw(o,n)}}return null}function ql(t){let e=cw(t);return e.length===0?"":`${hw(e.join(`
`)).split(`
`).map(o=>`> ${o}`.trimEnd()).join(`
`)}

`}function cw(t){let e=t.split(/\r\n?|\n/).map(i=>i.trimEnd()),n=e.filter(i=>i!=="").map(uw),r=n.length===0?0:Math.min(...n),o=[];for(let i of e){let s=i.slice(r);s===""&&(o.length===0||o[o.length-1]==="")||o.push(s)}for(;o[o.length-1]==="";)o.pop();return o}function uw(t){return t.length-t.trimStart().length}function hw(t){return t.length>500?`${t.slice(0,500).trimEnd()}...`:t}function pw(t){let e="";for(let n of vw(t)){let r=n.parentElement;if(!bw(r))continue;let o=n===t.startContainer?t.startOffset:0,i=n===t.endContainer?t.endOffset:n.data.length;e+=fw(n.data.slice(o,i),r)}return e}function fw(t,e){return mw.has(gw(e))?t:t.replace(/[^\S\n]*\n[^\S\n]*/g,`
`).replace(/[^\S\n]+/g," ")}var mw=new Set(["pre","pre-wrap","break-spaces"]);function gw(t){return window.getComputedStyle(t).whiteSpace}function vw(t){let e=t.commonAncestorContainer;if(e.nodeType===Node.TEXT_NODE)return[e];let n=[],r=document.createTreeWalker(e,NodeFilter.SHOW_TEXT);for(let o=r.nextNode();o!==null;o=r.nextNode())t.intersectsNode(o)&&n.push(o);return n}function bw(t){return typeof t.checkVisibility!="function"?!0:t.checkVisibility({contentVisibilityAuto:!0,opacityProperty:!0,visibilityProperty:!0})}function yw(t,e){let n=[...t.getClientRects()];if(n.length===0)return t.getBoundingClientRect();if(e===void 0)return n[0];let r=n[0],o=Bh(r,e);for(let i of n.slice(1)){let s=Bh(i,e);s<o&&(o=s,r=i)}return r}function Bh(t,e){let n=Math.max(t.left-e.x,0,e.x-t.right),r=Math.max(t.top-e.y,0,e.y-t.bottom);return Math.hypot(n,r)}function ww(t){let e=window.getSelection();if(e===null)return[];let n=[...xw(e,t)];return e.rangeCount>0&&n.push(e.getRangeAt(0)),n}function xw(t,e){let n=t.getComposedRanges;if(n===void 0)return[];try{return n.call(t,{shadowRoots:e})}catch{return n.call(t,...e)}}var Wl=6,Ew=`
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
`;function Xl(t){let{within:e,exclude:n,onQuote:r}=t,o=new CSSStyleSheet;o.replaceSync(Ew),document.adoptedStyleSheets=[...document.adoptedStyleSheets,o];let i=document.createElement("button");i.type="button",i.className="ag-ui-quote-offer",i.textContent=t.label,i.hidden=!0,document.body.append(i);let s="",a=()=>{i.hidden=!0,s=""},l=u=>{if(u.composedPath().includes(n)){a();return}if(Tw()){a();return}let m=u instanceof MouseEvent?{x:u.clientX,y:u.clientY}:void 0,w=Pr(e,[],m);if(w===null){a();return}s=w.text,_w(i,w.rect)},d=u=>{i.contains(u.target)||a()};return e.addEventListener("mouseup",l),e.addEventListener("keyup",l),e.addEventListener("mousedown",d),document.addEventListener("scroll",a,!0),window.addEventListener("resize",a),i.addEventListener("mousedown",u=>{u.preventDefault()}),i.addEventListener("click",()=>{let u=s;window.getSelection()?.removeAllRanges(),a(),r(u)}),{element:i,detach(){e.removeEventListener("mouseup",l),e.removeEventListener("keyup",l),e.removeEventListener("mousedown",d),document.removeEventListener("scroll",a,!0),window.removeEventListener("resize",a),i.remove(),document.adoptedStyleSheets=document.adoptedStyleSheets.filter(u=>u!==o)}}}function Tw(){let t=document.activeElement;return t===null?!1:t.tagName==="INPUT"||t.tagName==="TEXTAREA"||t.isContentEditable===!0}function _w(t,e){t.hidden=!1;let n=e.top<Wl+t.offsetHeight;t.dataset.below=String(n),t.style.top=`${n?e.bottom+Wl:e.top-Wl}px`;let r=t.offsetWidth/2,o=e.left+e.width/2,i=document.documentElement.clientWidth;t.style.left=`${Math.min(Math.max(o,r),i-r)}px`}var Yl=6,xs=class{button=document.createElement("button");#e;#t="";#n=null;constructor(e){this.#e=e}insert(e){let n=ql(e);if(n==="")return;let r=this.#e.input,o=r.value.replace(/\s+$/,"");r.value=o===""?n:`${o}

${n}`,this.#e.autoGrow(),r.focus();let i=r.value.length;r.setSelectionRange(i,i)}offerInPage(e){this.#n?.detach();let n=Xl({within:e,label:this.#e.strings().quoteSelection,exclude:this.#e.element,onQuote:r=>this.#e.quote(r)});return this.#n=n,()=>{n.detach(),this.#n===n&&(this.#n=null)}}detachPageOffer(){this.#n?.detach(),this.#n=null}mount(e){let n=this.button;n.className="quote-selection",n.type="button",n.setAttribute("part","quote-selection"),n.textContent=this.#e.strings().quoteSelection,n.hidden=!0,n.addEventListener("mousedown",o=>{o.preventDefault()},{signal:e}),n.addEventListener("click",()=>{this.#e.quote(this.#t),window.getSelection()?.removeAllRanges(),this.#s()},{signal:e});let r=this.#e.messages;r.addEventListener("mouseup",o=>this.#r(o),{signal:e}),r.addEventListener("keyup",()=>this.#r(),{signal:e}),r.addEventListener("mousedown",()=>this.#s(),{signal:e})}#o(){return this.#e.element.getAttribute("data-quote-selection")!=="false"}#r(e){if(!this.#o())return;let n=e===void 0?void 0:{x:e.clientX,y:e.clientY},r=Pr(this.#e.messages,[this.#e.root],n);if(r===null){this.#s();return}this.#t=r.text,this.#i(r.rect)}#i(e){let n=this.button;n.hidden=!1;let r=this.#e.messagesWrap.getBoundingClientRect(),o=e.top-r.top,i=o<Yl+n.offsetHeight;n.dataset.below=String(i),n.style.top=`${i?e.bottom-r.top+Yl:o-Yl}px`;let s=n.offsetWidth/2,a=e.left+e.width/2-r.left;n.style.left=`${Math.min(Math.max(a,s),r.width-s)}px`}#s(){this.button.hidden=!0,this.#t=""}};function Dr(t,e=Date.now(),n=le){if(!Number.isFinite(t))return n.justNow;let r=Math.round((e-t)/1e3);if(r<60)return n.justNow;let o=Math.round(r/60);if(o<60)return oe(n.minutesAgo,{n:o});let i=Math.round(o/60);if(i<24)return oe(n.hoursAgo,{n:i});let s=Math.round(i/24);return s<7?oe(n.daysAgo,{n:s}):oe(n.weeksAgo,{n:Math.round(s/7)})}function jh(t){return t.preview!==void 0&&t.preview!==null&&t.preview!==""?t.preview:null}function Vh(t){return t.replace(/\s+/g," ").trim()}var Ur=class{element;#e;#t;#n;#o=null;#r=null;#i;#s=[];constructor(e,n=le){this.#e=e,this.#i=n,this.element=document.createElement("div"),this.element.className="checkpoints",this.element.setAttribute("part","checkpoints"),this.element.setAttribute("role","dialog"),this.element.setAttribute("aria-label",n.checkpoints),this.element.tabIndex=-1,this.element.hidden=!0;let r=document.createElement("div");r.className="checkpoints-header",r.setAttribute("part","checkpoints-header"),this.#n=document.createElement("span"),this.#n.className="checkpoints-title",this.#n.setAttribute("part","checkpoints-title"),this.#n.textContent=n.checkpoints,r.append(this.#n),this.#t=document.createElement("div"),this.#t.className="checkpoints-list",this.#t.setAttribute("part","checkpoints-list"),this.element.append(r,this.#t),this.element.addEventListener("keydown",o=>this.#c(o))}setRuns(e){this.#s=e,this.#p()}setRelativeTimeFormatter(e){this.#r=e}#a(e){return this.#r!==null?this.#r(e):Dr(e,Date.now(),this.#i)}setStrings(e){this.#i=e,this.element.setAttribute("aria-label",e.checkpoints),this.#n.textContent=e.checkpoints,this.#p()}open(){this.open_||(this.#o=this.#d(),this.element.hidden=!1,(this.#u()[0]??this.element).focus())}close(){this.open_&&(this.element.hidden=!0,this.#o?.focus(),this.#o=null)}#d(){return this.element.getRootNode().activeElement}#u(){return Array.from(this.element.querySelectorAll("button, [tabindex]")).filter(e=>!e.hidden)}#c(e){if(e.key==="Escape"){e.stopPropagation(),this.close();return}if(e.key!=="Tab")return;let n=this.#u(),r=n[0],o=n[n.length-1],i=this.#d();e.shiftKey&&i===r?(e.preventDefault(),o?.focus()):!e.shiftKey&&i===o&&(e.preventDefault(),r?.focus())}get open_(){return!this.element.hidden}#p(){if(this.#t.replaceChildren(),this.#s.length===0){let n=document.createElement("div");n.className="checkpoints-empty",n.setAttribute("part","checkpoints-empty"),n.textContent=this.#i.noCheckpoints,this.#t.append(n);return}let e=this.#l();for(let n of this.#s)this.#t.append(this.#h(n,e))}#l(){let e=new Set,n=new Set;for(let r of this.#s){let o=jh(r);if(o===null)continue;let i=Vh(o);e.has(i)&&n.add(i),e.add(i)}return n}#h(e,n){let r=document.createElement("div");r.className="checkpoint-row",r.setAttribute("part","checkpoint-row");let o=jh(e),i=e.started_at===null?null:this.#a(Date.parse(e.started_at)),s=document.createElement("span");if(s.className="checkpoint-label",s.setAttribute("part","checkpoint-label"),s.textContent=o??i??e.run_id,r.append(s),o!==null&&i!==null){let l=document.createElement("span");l.className="checkpoint-time",l.setAttribute("part","checkpoint-time"),l.textContent=i,r.append(l)}if((o===null?i!==null:n.has(Vh(o)))&&e.run_id!==""){let l=document.createElement("span");l.className="checkpoint-id",l.setAttribute("part","checkpoint-id"),l.textContent=e.run_id.slice(0,8),l.title=e.run_id,r.append(l)}if(e.parent_run_id!==null){let l=document.createElement("span");l.className="checkpoint-branch",l.setAttribute("part","checkpoint-branch"),l.textContent=this.#i.forkedRun,l.title=e.parent_run_id,r.append(l)}return r.append(this.#m(e.run_id,"resume",this.#i.resumeRun),this.#m(e.run_id,"fork",this.#i.forkRun)),r}#m(e,n,r){let o=document.createElement("button");return o.type="button",o.className=`checkpoint-action checkpoint-${n}`,o.setAttribute("part",`checkpoint-action checkpoint-${n}`),o.textContent=r,o.addEventListener("click",()=>{this.close(),this.#e(e,n)}),o}};function Kl(t){let e=t.attachments;return Array.isArray(e)?e.filter(Sw):[]}function Sw(t){if(typeof t!="object"||t===null)return!1;let e=t;return typeof e.id=="string"&&typeof e.name=="string"&&typeof e.mime=="string"&&typeof e.size=="number"&&(e.url===void 0||typeof e.url=="string")}var Hr=class{#e;#t;#n;constructor(e,n=()=>({}),r=()=>{}){this.#e=e.endsWith("/")?e:`${e}/`,this.#t=n,this.#n=r}async list(){try{let e=await fetch(this.#e,et({method:"GET",headers:{Accept:"application/json",...this.#t()}},this.#n()));return e.ok?(await e.json()).runs??[]:[]}catch{return[]}}async continuable(){return(await this.list()).filter(e=>e.continuable)}resumeUrl(e){return this.#o("resume",e)}forkUrl(e){return this.#o("fork",e)}#o(e,n){return`${this.#e.slice(0,-5)}${e}/${encodeURIComponent(n)}/`}};function Gr(t){return t===Pe.FAILED?te.ERROR:t===Pe.DENIED?te.DECLINED:t===Pe.INTERRUPTED?te.INTERRUPTED:te.DONE}var Es=class{#e;#t="";#n=[];#o=0;#r=0;#i=null;#s=null;constructor(e){this.#e=e}get threadId(){return this.#t}get restored(){return this.#n}get continuation(){return this.#s}adoptActiveThread(){this.#t=this.#e.conversationStore().threadId()}startThread(){this.#t=ss(this.#e.conversationStore())}stopContinuation(){this.#s?.cancel(),this.#s=null}forgetRestored(){this.#n=[],this.#o+=1}reapUnsent(){this.#e.conversationStore().isUnsent?.(this.#t)===!0&&this.#e.conversationStore().clear(this.#t)}runs(){let e=this.#e.element.getAttribute("data-runs-url");return e===null||e===""?null:(this.#i===null&&(this.#i=new Hr(e,()=>this.#e.headersFor(e),()=>this.#e.requestCredentials())),this.#i)}openThreads(){this.#e.checkpoints.close(),this.refreshDrawer(),this.#e.drawer.open()}openCheckpoints(){this.#e.drawer.close(),this.#a(),this.#e.checkpoints.open()}async switchThread(e){e!==this.#t&&(this.#e.cancelRun(),this.#e.resetState(),this.#e.conversationStore().setActiveThread(e),this.#t=e,this.#e.setRunning(!1),await this.rehydrate())}renameThread(e,n){this.#e.conversationStore().renameThread(e,n),this.refreshDrawer()}deleteThread(e){let n=e===this.#t;n&&this.#e.cancelRun(),this.#e.conversationStore().clear(e),n&&(this.#e.resetState(),this.adoptActiveThread(),this.#e.setRunning(!1)),this.refreshDrawer()}async refreshDrawer(){this.#e.drawer.setRelativeTimeFormatter(this.#e.formatRelativeTime()),this.#e.drawer.setThreads(await this.#e.conversationStore().listThreads(),this.#t)}async#a(){let e=this.runs();this.#e.checkpoints.setRelativeTimeFormatter(this.#e.formatRelativeTime()),this.#e.checkpoints.setRuns(e===null?[]:await e.continuable())}async continueRun(e,n){let r=this.runs();if(r===null)return;if(this.#e.running()||this.#s!==null){this.#d(this.#e.strings().continueWhileRunning);return}let o=this.#e.input.value.trim();if(o===""){this.#d(this.#e.strings().continueNeedsTurn);return}this.#e.input.value="",this.#e.autoGrow();let i=this.#o,s=this.#e.buildClient({endpoint:n==="resume"?r.resumeUrl(e):r.forkUrl(e),initialMessages:[],follows:this.#e.client()?.annotatedMessages??this.#n,onSaved:a=>{i===this.#o&&(this.#n=a,this.#e.releaseClient())}});this.#s=s;try{await s.send(o)}finally{this.#s===s&&(this.#s=null,this.#e.continuationEnded())}}#d(e){this.#e.hint.textContent=e,this.#e.hint.hidden=!1,this.#e.input.focus()}async rehydrate(){this.#r+=1;let e=this.#r;this.#e.element.setAttribute("data-restoring","");let n;try{n=await this.#e.conversationStore().loadMessages(this.#t)}finally{e===this.#r&&this.#e.element.removeAttribute("data-restoring")}if(e!==this.#r)return;let r=this.#e.conversationStore().loadCheckpoint(this.#t);if(n!==null){let o=this.#e.strings().callNotFinished,i=ls(n,s=>({id:be(),role:"tool",content:o,toolCallId:s,outcome:Pe.INTERRUPTED}),new Set(r===null?[]:[r.toolCallId]));this.#n=i;for(let s of i)this.replay(s)}if(r!==null){await this.#p(r);return}this.#u(n)}#u(e){let n=e?.at(-1);n===void 0||n.role!==Le.USER||this.#e.transcript.appendNotice("\u26A0",this.#e.strings().runInterrupted,"interrupted")}replay(e){let n=typeof e.content=="string"?e.content:"";if(e.role===Le.USER){let r=Kl(e);if(n!==""||r.length>0){let o=this.#e.appendMessage(Le.USER,n);r.length>0&&o.appendChild(fs(r))}return}if(e.role===Le.ASSISTANT){if(n!==""){let r=this.#e.appendMessage(Le.ASSISTANT,n);r.classList.add("message--restored"),this.#e.actions.attach(r)}for(let r of Aw(e.toolCalls)){let o={id:r.id,name:r.function.name,args:this.#c(r.function.arguments)};if(this.#e.transcript.noticeIfSkillLoad(o))continue;this.#e.transcript.setCardElement(o.id,this.#e.transcript.cardFor(o).element);let i=this.#e.tools.resolve(o.name)?.render;i!==void 0&&this.#e.transcript.renderToolOutput(i,o)}return}if(e.role==="activity"){let r=e;typeof r.activityType=="string"&&this.#e.activities.draw(e.id,r.activityType,r.content);return}if(e.role==="tool"){let r=this.#e.transcript.card(e.toolCallId);r!==void 0&&r.settle(Gr(e.outcome),e.content)}}#c(e){if(typeof e!="string")return{};try{let n=JSON.parse(e);if(typeof n=="object"&&n!==null)return n}catch{}return{}}async#p(e){this.#e.conversationStore().saveCheckpoint(this.#t,null);let n=this.#e.ensureClient();n.addToolResult(e.toolCallId,JSON.stringify(this.#e.navigationResult().call(this.#e.element,e))),await n.resume()}};function Aw(t){return Array.isArray(t)?t.filter(kw):[]}function kw(t){if(typeof t!="object"||t===null)return!1;let e=t;return typeof e.id=="string"&&typeof e.function?.name=="string"}var Rw=8,Ts=class{element;#e;#t;#n;#o;#r;#i=null;#s;#a=[];#d="";#u;#c;#p="";#l=null;constructor(e,n=le){this.#e=e,this.#s=n,this.element=document.createElement("div"),this.element.className="drawer",this.element.setAttribute("part","drawer"),this.element.hidden=!0;let r=document.createElement("div");r.className="drawer-backdrop",r.setAttribute("part","drawer-backdrop"),r.addEventListener("click",()=>this.close()),this.#t=document.createElement("div"),this.#t.className="drawer-panel",this.#t.setAttribute("part","drawer-panel"),this.#t.setAttribute("role","dialog"),this.#t.setAttribute("aria-modal","true"),this.#t.setAttribute("aria-label",n.chatHistory),this.#t.addEventListener("keydown",i=>this.#b(i));let o=document.createElement("div");o.className="drawer-header",o.setAttribute("part","drawer-header"),this.#n=document.createElement("span"),this.#n.className="drawer-title",this.#n.setAttribute("part","drawer-title"),this.#n.textContent=n.chats,this.#o=document.createElement("button"),this.#o.type="button",this.#o.className="drawer-new",this.#o.setAttribute("part","drawer-new"),this.#o.textContent=n.newChat,this.#o.addEventListener("click",()=>{this.close(),this.#e.onNew()}),this.#u=document.createElement("button"),this.#u.type="button",this.#u.className="drawer-close",this.#u.setAttribute("part","drawer-close"),this.#u.title=n.closeHistory,this.#u.setAttribute("aria-label",n.closeHistory),this.#u.append(document.createTextNode("\xD7")),this.#u.addEventListener("click",()=>this.close()),o.append(this.#n,this.#o,this.#u),this.#c=document.createElement("input"),this.#c.type="search",this.#c.className="drawer-filter",this.#c.setAttribute("part","drawer-filter"),this.#c.placeholder=n.searchConversations,this.#c.setAttribute("aria-label",n.searchConversations),this.#c.addEventListener("input",()=>{this.#p=this.#c.value.trim().toLowerCase(),this.#g()}),this.#r=document.createElement("div"),this.#r.className="drawer-list",this.#r.setAttribute("part","drawer-list"),this.#t.append(o,this.#c,this.#r),this.element.append(r,this.#t)}setRelativeTimeFormatter(e){this.#i=e}#h(e){return this.#i!==null?this.#i(e):Dr(e,void 0,this.#s)}setStrings(e){this.#s=e,this.#t.setAttribute("aria-label",e.chatHistory),this.#n.textContent=e.chats,this.#o.textContent=e.newChat,this.#u.title=e.closeHistory,this.#u.setAttribute("aria-label",e.closeHistory),this.#c.placeholder=e.searchConversations,this.#c.setAttribute("aria-label",e.searchConversations),this.#g()}isOpen(){return!this.element.hidden}open(){this.isOpen()||(this.#l=this.#m(),this.element.hidden=!1,this.#o.focus())}close(){this.isOpen()&&(this.element.hidden=!0,this.#l?.focus(),this.#l=null)}toggle(){this.isOpen()?this.close():this.open()}#m(){return this.element.getRootNode().activeElement}#b(e){if(e.key==="Escape"){e.preventDefault(),this.close();return}if(e.key!=="Tab")return;let n=Array.from(this.#t.querySelectorAll("button, input, [tabindex]")).filter(s=>!s.hidden),r=n[0],o=n[n.length-1],i=this.#m();e.shiftKey&&i===r?(e.preventDefault(),o?.focus()):!e.shiftKey&&i===o&&(e.preventDefault(),r?.focus())}setThreads(e,n){this.#a=e,this.#d=n,this.#g()}#g(){this.#r.replaceChildren();let e=this.#a.length<Rw;this.#c.hidden=e,e&&this.#p!==""&&(this.#c.value="",this.#p="");let n=this.#w();if(n.length===0){let r=document.createElement("div");r.className="drawer-empty",r.setAttribute("part","drawer-empty"),r.textContent=this.#a.length===0?this.#s.noConversations:this.#s.noMatches,this.#r.appendChild(r);return}for(let r of n)this.#r.appendChild(this.#f(r))}#w(){return this.#p===""?this.#a:this.#a.filter(e=>e.title.toLowerCase().includes(this.#p)||e.preview.toLowerCase().includes(this.#p))}#f(e){let n=document.createElement("div");n.className="drawer-row",n.setAttribute("part","drawer-row"),e.threadId===this.#d&&n.classList.add("drawer-row--active");let r=document.createElement("button");r.type="button",r.className="drawer-row-select",r.setAttribute("part","drawer-row-select");let o=document.createElement("span");o.className="drawer-row-title",o.setAttribute("part","drawer-row-title"),o.textContent=e.title;let i=document.createElement("span");i.className="drawer-row-time",i.setAttribute("part","drawer-row-time"),i.textContent=this.#h(e.updatedAt);let s=document.createElement("span");s.className="drawer-row-preview",s.setAttribute("part","drawer-row-preview"),s.textContent=e.preview,r.append(o,i,s),r.addEventListener("click",()=>{this.close(),this.#e.onSelect(e.threadId)});let a=document.createElement("button");a.type="button",a.className="drawer-row-rename",a.setAttribute("part","drawer-row-rename"),a.title=this.#s.rename,a.setAttribute("aria-label",this.#s.renameConversation),a.textContent="\u270E",a.addEventListener("click",()=>this.#y(n,e));let l=document.createElement("button");l.type="button",l.className="drawer-row-delete",l.setAttribute("part","drawer-row-delete"),l.title=this.#s.delete,l.setAttribute("aria-label",this.#s.deleteConversation),l.textContent="\u{1F5D1}",l.addEventListener("click",()=>this.#x(n,e));let d=document.createElement("div");return d.className="drawer-row-actions",d.setAttribute("part","drawer-row-actions"),d.append(a,l),n.append(r,d),n}#y(e,n){let r=document.createElement("input");r.type="text",r.className="drawer-rename-input",r.setAttribute("part","drawer-rename-input"),r.value=n.title;let o=!1,i=()=>{if(o)return;o=!0;let a=r.value.trim();a===""||a===n.title?this.#g():this.#e.onRename(n.threadId,a)},s=()=>{o||(o=!0,this.#g())};r.addEventListener("keydown",a=>{a.key==="Enter"?(a.preventDefault(),i()):a.key==="Escape"&&(a.preventDefault(),a.stopPropagation(),s())}),r.addEventListener("blur",()=>i()),e.replaceChildren(r),r.focus(),r.select()}#x(e,n){let r=document.createElement("div");r.className="drawer-confirm",r.setAttribute("part","drawer-confirm");let o=document.createElement("span");o.className="drawer-confirm-label",o.setAttribute("part","drawer-confirm-label"),o.textContent=this.#s.deletePrompt;let i=document.createElement("button");i.type="button",i.className="drawer-confirm-yes",i.setAttribute("part","drawer-confirm-yes"),i.textContent=this.#s.delete,i.addEventListener("click",()=>this.#e.onDelete(n.threadId));let s=document.createElement("button");s.type="button",s.className="drawer-confirm-no",s.setAttribute("part","drawer-confirm-no"),s.textContent=this.#s.cancel,s.addEventListener("click",()=>this.#g()),r.append(o,i,s),e.replaceChildren(r)}};var _s=class{#e=null;open(){return this.#e=new AbortController,this.#e.signal}close(){this.#e=null}abort(){this.#e?.abort()}};function zr(t){return t!=="page"}var Iw=new Set([null,"","floating","bottom-left"]);function Ss(t){return Iw.has(t)}function Ht(t,e,n=tt){let r=Math.min(n,Math.max(0,(e.width-t.width)/2)),o=Math.min(n,Math.max(0,(e.height-t.height)/2));return{left:Math.max(e.left+r,Math.min(t.left,e.left+e.width-t.width-r)),top:Math.max(e.top+o,Math.min(t.top,e.top+e.height-t.height-o))}}function Fr(t,e,n=Vt){let r=t.right-t.left,o=t.bottom-t.top,i=Math.max(e.left+n,Math.min(t.left,e.left+e.width-n-r)),s=Math.max(e.top+n,Math.min(t.top,e.top+e.height-n-o));return{left:i,top:s,right:i+r,bottom:s+o}}var Cw=4,Nw=16,Ow=64;function qh(t,e){let n=!1,{signal:r}=e;t.addEventListener("click",s=>{!n||s.detail===0||(n=!1,s.stopPropagation(),s.preventDefault())},{capture:!0,signal:r}),t.addEventListener("pointerdown",s=>{if(n=!1,!e.enabled())return;let a=e.rect(),l=s.clientX,d=s.clientY,u=!1,m=p=>{let h=p.clientX-l,v=p.clientY-d;if(!u&&Math.hypot(h,v)<Cw)return;u=!0,t.setAttribute("data-dragging","true");let x=Ht({...a,left:a.left+h,top:a.top+v},e.viewport());e.apply(x.left,x.top)},w=p=>{if(window.removeEventListener("pointermove",m),window.removeEventListener("pointerup",w),window.removeEventListener("pointercancel",w),!u)return;t.removeAttribute("data-dragging"),n=!0;let h=Ht({...a,left:a.left+(p.clientX-l),top:a.top+(p.clientY-d)},e.viewport());e.commit(h.left,h.top)};window.addEventListener("pointermove",m),window.addEventListener("pointerup",w),window.addEventListener("pointercancel",w)},{signal:r});let o=null,i=()=>{if(o===null)return;let{left:s,top:a}=o;o=null,e.commit(s,a)};t.addEventListener("keydown",s=>{if(!e.enabled())return;let a=s.shiftKey?Ow:Nw,l=e.rect(),d=null;if(s.key==="ArrowLeft"?d={left:l.left-a,top:l.top}:s.key==="ArrowRight"?d={left:l.left+a,top:l.top}:s.key==="ArrowUp"?d={left:l.left,top:l.top-a}:s.key==="ArrowDown"&&(d={left:l.left,top:l.top+a}),d===null)return;s.preventDefault();let u=Ht({...l,...d},e.viewport());e.apply(u.left,u.top),o=u},{signal:r}),t.addEventListener("keyup",i,{signal:r}),t.addEventListener("blur",i,{signal:r})}function $r(t,e,n,r){return{hostInset:Wh({top:n.y==="top"?t.top:null,right:n.x==="right"?r.width-t.right:null,bottom:n.y==="bottom"?r.height-t.bottom:null,left:n.x==="left"?t.left:null}),launcherInset:Wh({top:n.y==="top"?e.top-t.top:null,right:n.x==="right"?t.right-(e.left+e.width):null,bottom:n.y==="bottom"?t.bottom-(e.top+e.height):null,left:n.x==="left"?e.left-t.left:null})}}function Wh(t){let e=n=>n===null?"auto":`${Math.round(n)}px`;return`${e(t.top)} ${e(t.right)} ${e(t.bottom)} ${e(t.left)}`}function Zl(t,e,n,r,o=tt){let i=n.left+n.width-t.left,s=t.left+t.width-n.left,a=n.top+n.height-t.top,l=t.top+t.height-n.top,d={x:i>=s?"left":"right",y:a>=l?"top":"bottom"},u=d.x==="left"?t.left:t.left+t.width-e.width,m=d.y==="top"?t.top:t.top+t.height-e.height,w=Fr({left:u,top:m,right:u+e.width,bottom:m+e.height},n,o);return{corner:d,...$r(w,t,d,r)}}var Mw="button, a[href], input, select, textarea, [contenteditable]";function Xh(t,e){t.addEventListener("pointerdown",n=>{if(n.button!==0||!e.enabled()||Lw(n,t))return;let r=e.rect(),o=n.clientX,i=n.clientY,s=!1,a=(u,m)=>{let w=u-o,p=m-i;return{left:r.left+w,top:r.top+p,right:r.right+w,bottom:r.bottom+p}},l=u=>{!s&&Math.hypot(u.clientX-o,u.clientY-i)<4||(s=!0,t.setAttribute("data-dragging","true"),e.apply(a(u.clientX,u.clientY),r))},d=u=>{window.removeEventListener("pointermove",l),window.removeEventListener("pointerup",d),window.removeEventListener("pointercancel",d),s&&(t.removeAttribute("data-dragging"),e.commit(a(u.clientX,u.clientY),r))};n.preventDefault(),window.addEventListener("pointermove",l),window.addEventListener("pointerup",d),window.addEventListener("pointercancel",d)})}function Lw(t,e){let n=t.composedPath();return n.slice(0,n.indexOf(e)).some(r=>r instanceof Element&&r.matches(Mw))}function Kh(t,e){let n=document.createElement("div");n.className=`resize-handle resize-handle--${As(t)}`,n.setAttribute("part",`resize-handle resize-handle-${As(t)}`),n.setAttribute("role","separator"),t.x===void 0?n.setAttribute("aria-orientation","horizontal"):t.y===void 0&&n.setAttribute("aria-orientation","vertical"),n.setAttribute("aria-label",e.label),n.tabIndex=0,n.addEventListener("pointerdown",i=>{let s=e.axis();if(s==="none"||!Yh(t,s))return;let a=e.rect(),l=u=>{e.apply(Ql(t,s,a,u.clientX,u.clientY))},d=u=>{window.removeEventListener("pointermove",l),window.removeEventListener("pointerup",d),n.removeAttribute("data-dragging"),e.commit(Ql(t,s,a,u.clientX,u.clientY))};n.setAttribute("data-dragging","true"),window.addEventListener("pointermove",l),window.addEventListener("pointerup",d),i.preventDefault()});let r=null,o=()=>{if(r===null)return;let i=r;r=null,e.commit(i)};return n.addEventListener("keydown",i=>{let s=e.axis();if(s==="none"||!Yh(t,s))return;let a=i.shiftKey?64:16,l=e.rect(),d=Pw[i.key];if(d===void 0||d.x!==0&&t.x===void 0||d.y!==0&&t.y===void 0)return;i.preventDefault();let u=(t.x==="left"?l.left:l.right)+d.x*a,m=(t.y==="top"?l.top:l.bottom)+d.y*a,w=Ql(t,s,l,u,m);e.apply(w),r=w}),n.addEventListener("keyup",o),n.addEventListener("blur",o),n}var Pw={ArrowLeft:{x:-1,y:0},ArrowRight:{x:1,y:0},ArrowUp:{x:0,y:-1},ArrowDown:{x:0,y:1}};function As(t){return[t.y,t.x].filter(e=>e!==void 0).join("-")}function Yh(t,e){return e==="both"||t.x!==void 0}function Ql(t,e,n,r,o){let i=t.x==="left"?Math.min(r,n.right-280):n.left,s=t.x==="right"?Math.max(r,n.left+280):n.right,a=e==="both",l=a&&t.y==="top"?Math.min(o,n.bottom-240):n.top,d=a&&t.y==="bottom"?Math.max(o,n.top+240):n.bottom;return{left:i,top:l,right:s,bottom:d}}var Zh="ag-ui-chat:size",Jl="ag-ui-chat:launcher";function Dw(t){if(typeof t!="object"||t===null)return null;let{left:e,top:n}=t;return typeof e=="number"&&typeof n=="number"?{left:e,top:n}:null}function Qh(t,e){return t.width>=e.width-1&&t.height>=e.height-1}function Jh(t,e,n){let r=o=>`${Math.round(o)}px`;return[t.y==="top"?r(e.top):"auto",t.x==="right"?r(n.width-e.right):"auto",t.y==="bottom"?r(n.height-e.bottom):"auto",t.x==="left"?r(e.left):"auto"].join(" ")}var Uw=[{y:"top"},{y:"bottom"},{x:"left"},{x:"right"},{x:"left",y:"top"},{x:"right",y:"top"},{x:"left",y:"bottom"},{x:"right",y:"bottom"}],ks=class{#e;constructor(e){this.#e=e}enablePanelDrag(e){Xh(e,{enabled:()=>!this.#e.collapsed()&&this.#h(),rect:()=>this.#e.element.getBoundingClientRect(),apply:(n,r)=>this.#x(n,r),commit:(n,r)=>this.#_(n,r)})}enableLauncherDrag(e){qh(this.#e.launcher,{signal:e,enabled:()=>this.#e.collapsed()&&this.#h(),rect:()=>this.#g(),viewport:()=>this.#m(),apply:(n,r)=>this.#f(n,r),commit:(n,r)=>this.#y(n,r)})}mountResizeGrips(e){for(let n of Uw){let r=Kh(n,{axis:()=>this.#d(),rect:()=>this.#e.element.getBoundingClientRect(),apply:o=>this.#N(n,o),commit:o=>this.#F(n,o),label:this.#e.strings().resizePanel});r.tabIndex=-1,r.setAttribute("aria-hidden","true"),this.#i.set(As(n),r),e.appendChild(r)}this.#O()}restoreSize(){this.#l(this.#P())}probe=document.createElement("div");#t=null;#n=null;#o=null;#r={x:"right",y:"bottom"};#i=new Map;#s(e){let n=this.#m(),r=n.left+tt,o=n.top+tt,i=n.left+n.width-tt,s=n.top+n.height-tt;return{left:Math.min(Math.max(e.left,r),e.right),top:Math.min(Math.max(e.top,o),e.bottom),right:Math.max(Math.min(e.right,i),e.left),bottom:Math.max(Math.min(e.bottom,s),e.top)}}dragging(){return this.#e.launcher.hasAttribute("data-dragging")||this.#e.root.querySelector(".header[data-dragging]")!==null}describeSurface(){let e=this.#e.element.getBoundingClientRect(),n=this.#m(),r=Qh(e,n);return{placement:this.#e.element.getAttribute("placement"),collapsed:this.#e.collapsed(),collapsible:this.#e.collapsible(),movable:this.#h()&&!r,draggable:this.#h(),fullBleed:r,box:{left:Math.round(e.left),top:Math.round(e.top),width:Math.round(e.width),height:Math.round(e.height)},viewport:{left:Math.round(n.left),top:Math.round(n.top),width:Math.round(n.width),height:Math.round(n.height)}}}moveTo(e,n={}){if(!this.#h())return!1;let r=n.announce===!0?this.#a():null,o=this.#m(),i=this.#e.element.getBoundingClientRect();if(Qh(i,o))return!1;let[s,a]=e.split("-"),l=o.left+Vt,d=o.top+Vt,u=a==="left"?l:Math.max(l,o.left+o.width-Vt-i.width),m=s==="top"?d:Math.max(d,o.top+o.height-Vt-i.height),w={left:u,top:m,right:u+i.width,bottom:m+i.height},p=this.#e.launcher.offsetWidth,h=this.#e.launcher.offsetHeight;return this.#L(w,{left:a==="left"?w.left:w.right-p,top:s==="top"?w.top:w.bottom-h,width:p,height:h}),this.#E(),r!==null&&this.#e.announceSurfaceChange(this.#e.strings().chatMoved,r),!0}#a(){let e=this.#e.element.style.getPropertyValue("--ag-ui-inset"),n=this.#e.element.style.getPropertyValue("--ag-ui-launcher-inset"),r=this.#e.element.getAttribute("data-expand-corner"),o=this.#t,i=this.#n,s=this.#o;return()=>{this.#p("--ag-ui-inset",e),this.#p("--ag-ui-launcher-inset",n),r===null?this.#e.element.removeAttribute("data-expand-corner"):this.#e.element.setAttribute("data-expand-corner",r),this.#t=o,this.#n=i,this.#o=s,o===null?this.#e.clearPreference(Jl):this.#E(),this.syncResizeAnchor()}}#d(){switch(this.#e.element.getAttribute("placement")){case"full":case"page":return"none";case"sidebar":case"side":return"width";default:return"both"}}#u(){let e=this.#e.element.getBoundingClientRect(),n=this.#e.element.style.getPropertyValue("--ag-ui-width"),r=this.#e.element.style.getPropertyValue("--ag-ui-height"),o=this.#c(e,-1),i=o.x===null||o.y===null?this.#c(e,1):o;return this.#p("--ag-ui-width",n),this.#p("--ag-ui-height",r),{x:o.x??i.x??"right",y:o.y??i.y??"bottom"}}#c(e,n){this.#l({width:e.width+n,height:e.height+n});let r=this.#e.element.getBoundingClientRect(),o=(i,s)=>Math.abs(i-s)>=.5;return{x:o(r.width,e.width)?o(r.left,e.left)?"right":"left":null,y:o(r.height,e.height)?o(r.top,e.top)?"bottom":"top":null}}syncResizeAnchor(){if(!this.#e.connected())return;let e=this.#o??this.#u();this.#r=e,this.#e.element.setAttribute("data-resize-anchor",`${e.y}-${e.x}`),this.#O()}#p(e,n){if(n===""){this.#e.element.style.removeProperty(e);return}this.#e.element.style.setProperty(e,n)}#l(e){let n=this.#d();n!=="none"&&(e.width!==void 0&&this.#e.element.style.setProperty("--ag-ui-width",`${e.width}px`),e.height!==void 0&&n==="both"&&this.#e.element.style.setProperty("--ag-ui-height",`${e.height}px`))}releaseOwnedAxes(){let e=this.#d();e!=="both"&&this.#e.element.style.removeProperty("--ag-ui-height"),e==="none"&&this.#e.element.style.removeProperty("--ag-ui-width")}#h(){return this.#e.element.getAttribute("data-launcher-drag")!=="false"&&Ss(this.#e.element.getAttribute("placement"))}#m(){let e=window.visualViewport,n=e?.width??window.innerWidth,r=e?.height??window.innerHeight,o=getComputedStyle(this.probe),i=l=>{let d=Number.parseFloat(o.getPropertyValue(l));return Number.isFinite(d)?d:0},s=i("padding-left"),a=i("padding-top");return{left:s,top:a,width:Math.max(0,n-s-i("padding-right")),height:Math.max(0,r-a-i("padding-bottom"))}}#b(){let e=document.documentElement;return{width:e.clientWidth||window.innerWidth,height:e.clientHeight||window.innerHeight}}publishVisualViewport(){let e=window.visualViewport;if(e==null)return;let n=this.#b().height;if(Math.abs(e.height-n)<1){this.#e.element.style.removeProperty("--ag-ui-visual-viewport-height"),this.#e.element.style.removeProperty("--ag-ui-visual-viewport-inset-bottom"),this.#e.element.style.removeProperty("--ag-ui-visual-viewport-inset-top");return}this.#e.element.style.setProperty("--ag-ui-visual-viewport-height",`${Math.round(e.height)}px`);let r=n-e.height-e.offsetTop;this.#e.element.style.setProperty("--ag-ui-visual-viewport-inset-bottom",`${Math.max(0,Math.round(r))}px`),this.#e.element.style.setProperty("--ag-ui-visual-viewport-inset-top",`${Math.max(0,Math.round(e.offsetTop))}px`)}#g(){let e=this.#e.launcher.offsetWidth,n=this.#e.launcher.offsetHeight,r=this.#t;if(r!==null)return{left:r.left,top:r.top,width:e,height:n};let o=this.#e.launcher.getBoundingClientRect();return{left:o.left+o.width/2-e/2,top:o.top+o.height/2-n/2,width:e,height:n}}#w(e){if(!this.#h())return;this.#t=e,this.#n=null;let n=this.#e.element.getBoundingClientRect(),r=Zl(this.#g(),{width:n.width,height:n.height},this.#m(),this.#b());this.#e.element.style.setProperty("--ag-ui-inset",r.hostInset),this.#e.element.style.setProperty("--ag-ui-launcher-inset",r.launcherInset),this.#o=r.corner,this.#e.element.setAttribute("data-expand-corner",`${r.corner.y}-${r.corner.x}`),this.syncResizeAnchor()}#f(e,n){this.#w({left:e,top:n})}#y(e,n){this.#f(e,n),this.#E()}#x(e,n){if(!this.#h())return{held:e,launcher:null};if(this.#t===null){let l=this.#g();this.#t={left:l.left,top:l.top}}let r=this.#t,o=Fr(e,this.#m(),tt),i=this.#o??this.#r;this.#e.element.style.setProperty("--ag-ui-inset",Jh(i,o,this.#b())),this.#n={left:o.left,top:o.top};let s={...this.#g(),left:r.left+(o.left-n.left),top:r.top+(o.top-n.top)},a={...s,...Ht(s,this.#m())};return this.#e.element.style.setProperty("--ag-ui-launcher-inset",$r(o,a,i,this.#b()).launcherInset),{held:o,launcher:a}}#_(e,n){let{held:r,launcher:o}=this.#x(e,n);o!==null&&(this.#L(r,o),this.#E())}#L(e,n){let r=this.#m(),o=this.#b(),i={width:e.right-e.left,height:e.bottom-e.top},{corner:s}=Zl(n,i,r,o),a=$r(e,n,s,o);this.#e.element.style.setProperty("--ag-ui-inset",a.hostInset),this.#e.element.style.setProperty("--ag-ui-launcher-inset",a.launcherInset),this.#t={left:n.left,top:n.top},this.#n={left:e.left,top:e.top},this.#o=s,this.#e.element.setAttribute("data-expand-corner",`${s.y}-${s.x}`),this.syncResizeAnchor()}#A(e){if(!this.#h())return;let n=this.#e.element.getBoundingClientRect(),r=Fr({left:e.left,top:e.top,right:e.left+n.width,bottom:e.top+n.height},this.#m(),tt),o=this.#g(),i={...o,left:o.left+(r.left-e.left),top:o.top+(r.top-e.top)};this.#L(r,{...i,...Ht(i,this.#m())})}#E(){let e=this.#t;if(e===null)return;let n=this.#n;this.#e.writePreference(Jl,JSON.stringify(n===null?e:{...e,panel:n}))}restoreLauncherPosition(){let e=this.#k(),n=this.#t??e;if(n===null)return;let r=this.#n??e?.panel??null;if(r!==null){this.#t={left:n.left,top:n.top},this.#A(r);return}let o=this.#g();this.#w(Ht({...o,left:n.left,top:n.top},this.#m()))}#k(){let e=this.#e.readPreference(Jl);if(e===null)return null;try{let n=JSON.parse(e);if(typeof n!="object"||n===null)return null;let{left:r,top:o,panel:i}=n;if(typeof r!="number"||typeof o!="number")return null;let s=Dw(i);return s===null?{left:r,top:o}:{left:r,top:o,panel:s}}catch{return null}}releaseLauncherPosition(){this.#h()||(this.#t=null,this.#n=null,this.#o=null,this.#e.element.style.removeProperty("--ag-ui-inset"),this.#e.element.style.removeProperty("--ag-ui-launcher-inset"),this.#e.element.removeAttribute("data-expand-corner"))}#N(e,n){if(n=this.#s(n),this.#l({width:n.right-n.left,height:n.bottom-n.top}),e.x!==this.#r.x&&e.y!==this.#r.y)return n;let r=this.#r;if(this.#e.element.style.setProperty("--ag-ui-inset",Jh(r,n,this.#b())),this.#t!==null){let o=this.#e.launcher.offsetWidth;this.#t={left:r.x==="left"?n.left:n.right-o,top:r.y==="top"?n.top:n.bottom-o}}return this.#n!==null&&(this.#n={left:n.left,top:n.top}),n}#F(e,n){let r=this.#N(e,n);this.#v({width:r.right-r.left,height:r.bottom-r.top}),this.#E(),this.syncResizeAnchor()}#O(){let e=`${this.#r.y==="top"?"bottom":"top"}-${this.#r.x==="left"?"right":"left"}`;for(let[n,r]of this.#i){let o=n===e;r.tabIndex=o?0:-1,o?r.removeAttribute("aria-hidden"):r.setAttribute("aria-hidden","true")}}#v(e){let n={...this.#P(),...e};this.#e.writePreference(Zh,JSON.stringify(n))}#P(){let e=this.#e.readPreference(Zh);if(e===null)return{};try{let n=JSON.parse(e);return typeof n=="object"&&n!==null?n:{}}catch{return{}}}};var Rs=class{region=document.createElement("div");#e=null;mount(){this.region.className="sr-only",this.region.setAttribute("role","status"),this.region.setAttribute("aria-live","polite"),this.region.setAttribute("aria-atomic","true")}announce(e){this.#e!==null&&clearTimeout(this.#e),this.region.textContent=e,this.#e=setTimeout(()=>{this.#e=null,this.region.textContent=""},Ec)}dispose(){this.#e!==null&&(clearTimeout(this.#e),this.#e=null)}};function Is(t,e,n,r){let o=document.createElement("div");o.className=`run-notice run-notice--${n}`,o.setAttribute("part",`run-notice run-notice-${n}`),o.setAttribute("role","status");let i=document.createElement("span");i.className="run-notice-icon",i.setAttribute("part","run-notice-icon"),i.textContent=t,i.setAttribute("aria-hidden","true");let s=document.createElement("span");if(s.className="run-notice-text",s.setAttribute("part","run-notice-text"),s.textContent=e,o.append(i,s),r!==void 0){let a=document.createElement("button");a.type="button",a.className="run-notice-undo",a.setAttribute("part","run-notice-undo"),a.textContent=r.label,a.addEventListener("click",()=>{a.disabled=!0,r.onActivate()}),o.append(a)}return o}var Cs=class{element;get agent(){return this.#r}#e;#t;#n;#o=new Map;#r=null;constructor(e=le){this.element=document.createElement("div"),this.element.className="subagent",this.element.setAttribute("part","subagent"),this.#e=document.createElement("button"),this.#e.type="button",this.#e.className="subagent-row",this.#e.setAttribute("part","subagent-row"),this.#e.setAttribute("aria-expanded","false"),this.#e.disabled=!0;let n=document.createElement("span");n.className="subagent-icon",n.setAttribute("part","subagent-icon"),n.setAttribute("aria-hidden","true"),this.#t=document.createElement("span"),this.#t.className="subagent-status",this.#t.setAttribute("part","subagent-status"),this.#t.textContent=e.subAgentWorking,this.#e.append(n,this.#t),this.#n=document.createElement("div"),this.#n.className="subagent-steps",this.#n.setAttribute("part","subagent-steps"),this.#n.setAttribute("role","list"),this.#n.setAttribute("aria-label",e.subAgentSteps),this.#n.hidden=!0,this.#e.addEventListener("click",()=>{this.#a(this.#e.getAttribute("aria-expanded")!=="true")}),this.element.append(this.#e,this.#n)}report(e){this.element.setAttribute("data-phase",e.phase),e.agent!==null&&(this.#r=e.agent,this.element.setAttribute("data-agent",e.agent)),e.status!==null&&(this.#t.textContent=e.status),e.tool!==null&&this.#i(e.tool)}#i(e){let n=this.#o.get(e.toolCallId)??this.#s(e);if(e.ok===null){n.removeAttribute("data-ok");return}n.setAttribute("data-ok",String(e.ok))}#s(e){let n=document.createElement("div");n.className="subagent-step",n.setAttribute("part","subagent-step"),n.setAttribute("role","listitem"),n.setAttribute("data-tool-call-id",e.toolCallId);let r=document.createElement("span");r.className="subagent-step-icon",r.setAttribute("part","subagent-step-icon"),r.setAttribute("aria-hidden","true");let o=document.createElement("span");return o.className="subagent-step-name",o.setAttribute("part","subagent-step-name"),o.textContent=e.name,n.append(r,o),this.#n.appendChild(n),this.#o.set(e.toolCallId,n),this.#e.disabled=!1,n}#a(e){this.#n.hidden=!e,this.#e.setAttribute("aria-expanded",String(e))}};var Hw=Object.values(On);function ep(t){return typeof t!="object"||t===null||Array.isArray(t)?null:t}function Br(t){return typeof t=="string"&&t!==""?t:null}function Gw(t){let e=ep(t);if(e===null)return null;let n=Br(e.toolCallId),r=Br(e.name),o=e.ok;return n===null||r===null||o!==null&&typeof o!="boolean"?null:{toolCallId:n,name:r,ok:o}}function tp(t){let e=ep(t);if(e===null)return null;let n=Br(e.delegationId),r=e.phase;return n===null||typeof r!="string"||!Hw.includes(r)?null:{delegationId:n,phase:r,agent:Br(e.agent),status:Br(e.status),tool:Gw(e.tool)}}var Ns=class{#e;#t=new Map;#n=new Map;constructor(e){this.#e=e}report(e){let n=tp(e);n!==null&&this.#i(n)}start(e,n,r){r!==null&&(this.#n.set(e,r),this.#i({delegationId:r,agent:n===""?null:n,phase:On.STARTED,status:oe(this.#e.strings().subAgentDelegatedTo,{agent:n}),tool:null}))}finish(e){this.#o(e,On.FINISHED,null)}fail(e,n){this.#o(e,On.FAILED,n===""?this.#e.strings().subAgentFailed:n)}clear(){this.#t.clear(),this.#n.clear()}#o(e,n,r){let o=this.#n.get(e);if(o===void 0)return;let i=this.#t.get(o)?.agent??null;this.#i({delegationId:o,agent:i,phase:n,status:r===null?this.#r(i):r,tool:null})}#r(e){let n=this.#e.strings();return e===null?n.subAgentWorking:oe(n.subAgentFinished,{agent:e})}#i(e){let n=this.#e.card(e.delegationId);if(n===void 0)return;let r=this.#t.get(e.delegationId);r===void 0&&(r=new Cs(this.#e.strings()),this.#t.set(e.delegationId,r),n.subagentSlot.appendChild(r.element)),r.report(e),this.#e.follow()}};function ed(t){return{[te.PENDING]:t.toolRunning,[te.DEFERRED]:t.toolDeferred,[te.DONE]:t.toolDone,[te.ERROR]:t.toolError,[te.DECLINED]:t.toolDeclined,[te.INTERRUPTED]:t.toolInterrupted}}function zw(t){return{[te.DONE]:t.resultLabel,[te.ERROR]:t.errorLabel,[te.DECLINED]:t.declinedLabel,[te.INTERRUPTED]:t.interruptedLabel}}function Fw(t){try{return JSON.stringify(JSON.parse(t),null,2)}catch{return t}}var jr=class{element;approvalSlot;subagentSlot;#e;#t;#n;#o;#r;#i;#s;args;#a;#d;#u=!1;constructor(e,n,r,o=le,i={}){this.#s=o,this.args=n,this.#a=e,this.#d=i.formatPayload??null,this.element=document.createElement("div"),this.element.className="tool-call",this.element.setAttribute("part","tool-card"),this.element.setAttribute("data-tool-name",e),this.element.setAttribute("data-status",te.PENDING),this.element.setAttribute("data-expanded","false");let s=document.createElement("div");s.className="tool-call-head",s.setAttribute("part","tool-card-head");let a=document.createElement("span");a.className="tool-call-icon",a.setAttribute("part","tool-card-icon"),a.setAttribute("aria-hidden","true");let l=document.createElement("span");l.className="tool-call-name",l.setAttribute("part","tool-card-name"),l.textContent=r??e,this.#e=document.createElement("span"),this.#e.className="tool-call-status",this.#e.setAttribute("part","tool-card-status"),this.#e.textContent=ed(o)[te.PENDING],this.#t=document.createElement("span"),this.#t.className="tool-call-decision",this.#t.setAttribute("part","tool-card-decision"),this.#t.hidden=!0,s.append(a,l,this.#e,this.#t);let d=this.#p("args",o.argumentsLabel);this.#c(d.body,{kind:"arguments",toolName:e,args:n},JSON.stringify(n,null,2)),d.root.hidden=Object.keys(n).length===0;let u=this.#p("result",o.resultLabel);this.#o=u.root,this.#r=u.label,this.#i=u.body,u.root.hidden=!0,this.#n=document.createElement("button"),this.#n.type="button",this.#n.className="tool-call-toggle",this.#n.setAttribute("part","tool-card-toggle"),this.#n.setAttribute("aria-expanded","false"),this.#n.textContent=o.details,this.#n.addEventListener("click",()=>this.#h(!this.#l()));let m=document.createElement("div");m.className="tool-call-body",m.setAttribute("part","tool-card-body"),m.append(d.root,u.root),this.approvalSlot=document.createElement("div"),this.approvalSlot.className="tool-call-approval",this.approvalSlot.setAttribute("part","tool-card-approval"),this.subagentSlot=document.createElement("div"),this.subagentSlot.className="tool-call-subagent",this.subagentSlot.setAttribute("part","tool-card-subagent"),this.element.append(s,this.subagentSlot,this.#n,m,this.approvalSlot)}mark(e){this.#u||(this.element.setAttribute("data-status",e),this.#e.textContent=ed(this.#s)[e])}recordDecision(e){this.element.setAttribute("data-decision",e),this.#t.textContent=e==="approved"?this.#s.decisionApproved:this.#s.decisionDeclined,this.#t.hidden=!1}get settled(){return this.#u}settle(e,n){this.#u||(this.#u=!0,this.element.setAttribute("data-status",e),this.#e.textContent=ed(this.#s)[e],this.#r.textContent=zw(this.#s)[e],this.#c(this.#i,{kind:"result",toolName:this.#a,status:e,text:n},Fw(n)),this.#o.hidden=!1)}#c(e,n,r){let o=this.#d===null?null:this.#d(n);if(o===null){e.textContent=r;return}if(e.setAttribute("data-formatted","true"),typeof o=="string"){e.textContent=o;return}e.replaceChildren(o)}#p(e,n){let r=document.createElement("div");r.className=`tool-call-section tool-call-section--${e}`,r.setAttribute("part",`tool-card-section tool-card-${e}-section`);let o=document.createElement("span");o.className="tool-call-section-label",o.setAttribute("part",`tool-card-section-label tool-card-${e}-label`),o.textContent=n;let i=document.createElement("pre");return i.className=`tool-call-${e}`,i.setAttribute("part",`tool-card-${e}`),r.append(o,i),{root:r,label:o,body:i}}#l(){return this.element.getAttribute("data-expanded")==="true"}#h(e){this.element.setAttribute("data-expanded",String(e)),this.#n.setAttribute("aria-expanded",String(e))}};var np=`
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
`;function rp(t){let e=new CSSStyleSheet;e.replaceSync(np),t.adoptedStyleSheets=[e]}function Os(t,e,n){let r=document.createElement("slot");return r.name=t,r.className=e,r.innerHTML=n,r}function Vr(t,e,n){let r=document.createElement("button");r.type="button",r.className=`header-btn header-btn--${t}`,r.setAttribute("part",`header-button ${t}-button`),r.title=e,r.setAttribute("aria-label",e);let o=document.createElement("slot");return o.name=`icon-${t}`,o.append(document.createTextNode(n)),r.append(o),r}function Ms(t,e,n,r){let o=document.createElement("span");o.className="icon-holder",o.setAttribute("part",e);let i=document.createElement("slot");if(i.name=t,r!==null){let s=document.createElement("img");s.className="icon-img",s.src=r,s.alt="",i.append(s)}else n!==null&&(i.innerHTML=n);return o.append(i),o}function op(t){return t.getAttribute("data-unread-badge")!=="false"}function ip(t){return t.getAttribute("data-launcher-icon-url")??t.getAttribute("data-icon-url")}var $w=new Set(["ADDRESS","ARTICLE","ASIDE","BLOCKQUOTE","DD","DIV","DL","DT","FIGCAPTION","FIGURE","FOOTER","H1","H2","H3","H4","H5","H6","HEADER","HR","MAIN","NAV","OL","P","SECTION","UL"]);function Ls(t){let e=t.cloneNode(!0);for(let n of Array.from(e.querySelectorAll("button")))n.remove();return{text:Vw(sp(e)),html:e.innerHTML}}function sp(t){if(t.nodeType===Node.TEXT_NODE)return t.nodeValue.replace(/\s+/g," ");if(t.nodeType!==Node.ELEMENT_NODE)return"";let e=t,n=e.tagName;if(n==="BR")return`
`;if(n==="PRE")return`

${lp(e)}

`;if(n==="TABLE")return`

${jw(e)}

`;if(n==="UL"||n==="OL")return`

${Bw(e,n==="OL")}

`;let r=ap(e);return $w.has(n)?`

${r}

`:r}function ap(t){let e="";for(let n of Array.from(t.childNodes))e+=sp(n);return e}function Bw(t,e){return Array.from(t.children).map((n,r)=>`${e?`${r+1}. `:"- "}${ap(n).trim()}`).join(`
`)}function jw(t){return Array.from(t.querySelectorAll("tr")).map(e=>Array.from(e.children).map(n=>lp(n).replace(/\s+/g," ").trim()).join("	")).join(`
`)}function lp(t){return t.textContent}function Vw(t){return t.replace(/[^\S\n]+\n/g,`
`).replace(/\n{3,}/g,`

`).trim()}var qw=1500;function nd(t,e){if(cp(t)!==null)return;let n=Ps(t,e.strings),r=e.text;r!==void 0&&n.appendChild(Ww(e.strings,r,e.html)),e.onFeedback!==void 0&&n.append(dp("up",e.strings.feedbackUp,e.onFeedback),dp("down",e.strings.feedbackDown,e.onFeedback))}function Ps(t,e){let n=cp(t);if(n!==null)return n;let r=document.createElement("div");return r.className="message-actions",r.setAttribute("part","message-actions"),r.setAttribute("role","group"),r.setAttribute("aria-label",e.messageActions),t.after(r),r}function cp(t){let e=t.nextElementSibling;return e?.classList.contains("message-actions")===!0?e:null}function Ds(t,e,n){let r=document.createElement("button");r.type="button",r.className=`message-action message-action--${t}`,r.setAttribute("part",`message-action message-action-${t}`),td(r,e);let o=document.createElement("span");return o.className="message-action-icon",o.setAttribute("part",`message-action-icon message-action-icon-${t}`),o.setAttribute("aria-hidden","true"),o.innerHTML=n,r.appendChild(o),r}function td(t,e){t.title=e,t.setAttribute("aria-label",e),t.dataset.tooltip=e}function Ww(t,e,n){let r=Ds("copy",t.copyMessage,fc);return r.addEventListener("click",()=>{Xw(e(),n?.()).then(o=>{Yw(r,o?t.copied:t.copyFailed,t.copyMessage)})}),r}async function Xw(t,e){let n=navigator.clipboard;if(n===void 0)return!1;if(e!==void 0&&typeof ClipboardItem=="function")try{return await n.write([new ClipboardItem({"text/plain":new Blob([t],{type:"text/plain"}),"text/html":new Blob([e],{type:"text/html"})})]),!0}catch{}try{return await n.writeText(t),!0}catch{return!1}}function dp(t,e,n){let r=Ds(t==="up"?"up":"down",e,t==="up"?gc:vc);return r.addEventListener("click",()=>{let o=r.getAttribute("aria-pressed")==="true";r.setAttribute("aria-pressed",o?"false":"true"),n(t)}),r.setAttribute("aria-pressed","false"),r}function Yw(t,e,n){td(t,e),t.classList.add("message-action--confirmed"),setTimeout(()=>{td(t,n),t.classList.remove("message-action--confirmed")},qw)}var Us=class{#e;#t=null;constructor(e){this.#e=e}forget(){this.#t=null}attach(e,n={}){let r=this.#o(),o=r.has(jt.COPY),i=n.rateable!==!1&&r.has(jt.FEEDBACK);(o||i)&&nd(e,{strings:this.#e.strings(),...o?{text:()=>Ls(e).text,html:()=>Ls(e).html}:{},...i?{onFeedback:s=>{this.#e.element.dispatchEvent(new CustomEvent(ka,{detail:{content:Ls(e).text,rating:s},bubbles:!0,composed:!0}))}}:{}}),r.has(jt.RETRY)&&this.#n(Ps(e,this.#e.strings()))}#n(e){this.#t?.querySelector(".message-action--retry")?.remove();let n=Ds("retry",this.#e.strings().retryMessage,mc);n.addEventListener("click",()=>{this.#e.retry()}),e.prepend(n),this.#t=e}#o(){let e=this.#e.element.getAttribute("data-message-actions");return e===null?new Set([jt.COPY,jt.RETRY]):new Set(rr(e))}};function up(t,e){(e==null||e>t.length)&&(e=t.length);for(var n=0,r=Array(e);n<e;n++)r[n]=t[n];return r}function Kw(t){if(Array.isArray(t))return t}function Zw(t,e){var n=t==null?null:typeof Symbol<"u"&&t[Symbol.iterator]||t["@@iterator"];if(n!=null){var r,o,i,s,a=[],l=!0,d=!1;try{if(i=(n=n.call(t)).next,e!==0)for(;!(l=(r=i.call(n)).done)&&(a.push(r.value),a.length!==e);l=!0);}catch(u){d=!0,o=u}finally{try{if(!l&&n.return!=null&&(s=n.return(),Object(s)!==s))return}finally{if(d)throw o}}return a}}function Qw(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Jw(t,e){return Kw(t)||Zw(t,e)||ex(t,e)||Qw()}function ex(t,e){if(t){if(typeof t=="string")return up(t,e);var n={}.toString.call(t).slice(8,-1);return n==="Object"&&t.constructor&&(n=t.constructor.name),n==="Map"||n==="Set"?Array.from(t):n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?up(t,e):void 0}}var Ap=Object.entries,hp=Object.setPrototypeOf,tx=Object.isFrozen,nx=Object.getPrototypeOf,rx=Object.getOwnPropertyDescriptor,Ee=Object.freeze,Se=Object.seal,ir=Object.create,kp=typeof Reflect<"u"&&Reflect,dd=kp.apply,cd=kp.construct;Ee||(Ee=function(e){return e});Se||(Se=function(e){return e});dd||(dd=function(e,n){for(var r=arguments.length,o=new Array(r>2?r-2:0),i=2;i<r;i++)o[i-2]=arguments[i];return e.apply(n,o)});cd||(cd=function(e){for(var n=arguments.length,r=new Array(n>1?n-1:0),o=1;o<n;o++)r[o-1]=arguments[o];return new e(...r)});var xn=we(Array.prototype.forEach),ox=we(Array.prototype.lastIndexOf),pp=we(Array.prototype.pop),qr=we(Array.prototype.push),ix=we(Array.prototype.splice),sr=Array.isArray,Yr=we(String.prototype.toLowerCase),rd=we(String.prototype.toString),fp=we(String.prototype.match),Wr=we(String.prototype.replace),mp=we(String.prototype.indexOf),sx=we(String.prototype.trim),ax=we(Number.prototype.toString),lx=we(Boolean.prototype.toString),gp=typeof BigInt>"u"?null:we(BigInt.prototype.toString),vp=typeof Symbol>"u"?null:we(Symbol.prototype.toString),Fe=we(Object.prototype.hasOwnProperty),Xr=we(Object.prototype.toString),Ne=we(RegExp.prototype.test),wn=dx(TypeError);function we(t){return function(e){e instanceof RegExp&&(e.lastIndex=0);for(var n=arguments.length,r=new Array(n>1?n-1:0),o=1;o<n;o++)r[o-1]=arguments[o];return dd(t,e,r)}}function dx(t){return function(){for(var e=arguments.length,n=new Array(e),r=0;r<e;r++)n[r]=arguments[r];return cd(t,n)}}function ee(t,e){let n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:Yr;if(hp&&hp(t,null),!sr(e))return t;let r=e.length;for(;r--;){let o=e[r];if(typeof o=="string"){let i=n(o);i!==o&&(tx(e)||(e[r]=i),o=i)}t[o]=!0}return t}function cx(t){for(let e=0;e<t.length;e++)Fe(t,e)||(t[e]=null);return t}function We(t){let e=ir(null);for(let r of Ap(t)){var n=Jw(r,2);let o=n[0],i=n[1];Fe(t,o)&&(sr(i)?e[o]=cx(i):i&&typeof i=="object"&&i.constructor===Object?e[o]=We(i):e[o]=i)}return e}function ux(t){switch(typeof t){case"string":return t;case"number":return ax(t);case"boolean":return lx(t);case"bigint":return gp?gp(t):"0";case"symbol":return vp?vp(t):"Symbol()";case"undefined":return Xr(t);case"function":case"object":{if(t===null)return Xr(t);let e=t,n=it(e,"toString");if(typeof n=="function"){let r=n(e);return typeof r=="string"?r:Xr(r)}return Xr(t)}default:return Xr(t)}}function it(t,e){for(;t!==null;){let r=rx(t,e);if(r){if(r.get)return we(r.get);if(typeof r.value=="function")return we(r.value)}t=nx(t)}function n(){return null}return n}function hx(t){try{return Ne(t,""),!0}catch{return!1}}var bp=Ee(["a","abbr","acronym","address","area","article","aside","audio","b","bdi","bdo","big","blink","blockquote","body","br","button","canvas","caption","center","cite","code","col","colgroup","content","data","datalist","dd","decorator","del","details","dfn","dialog","dir","div","dl","dt","element","em","fieldset","figcaption","figure","font","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","img","input","ins","kbd","label","legend","li","main","map","mark","marquee","menu","menuitem","meter","nav","nobr","ol","optgroup","option","output","p","picture","pre","progress","q","rp","rt","ruby","s","samp","search","section","select","shadow","slot","small","source","spacer","span","strike","strong","style","sub","summary","sup","table","tbody","td","template","textarea","tfoot","th","thead","time","tr","track","tt","u","ul","var","video","wbr"]),od=Ee(["svg","a","altglyph","altglyphdef","altglyphitem","animatecolor","animatemotion","animatetransform","circle","clippath","defs","desc","ellipse","enterkeyhint","exportparts","filter","font","g","glyph","glyphref","hkern","image","inputmode","line","lineargradient","marker","mask","metadata","mpath","part","path","pattern","polygon","polyline","radialgradient","rect","stop","style","switch","symbol","text","textpath","title","tref","tspan","view","vkern"]),id=Ee(["feBlend","feColorMatrix","feComponentTransfer","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feDistantLight","feDropShadow","feFlood","feFuncA","feFuncB","feFuncG","feFuncR","feGaussianBlur","feImage","feMerge","feMergeNode","feMorphology","feOffset","fePointLight","feSpecularLighting","feSpotLight","feTile","feTurbulence"]),px=Ee(["animate","color-profile","cursor","discard","font-face","font-face-format","font-face-name","font-face-src","font-face-uri","foreignobject","hatch","hatchpath","mesh","meshgradient","meshpatch","meshrow","missing-glyph","script","set","solidcolor","unknown","use"]),sd=Ee(["math","menclose","merror","mfenced","mfrac","mglyph","mi","mlabeledtr","mmultiscripts","mn","mo","mover","mpadded","mphantom","mroot","mrow","ms","mspace","msqrt","mstyle","msub","msup","msubsup","mtable","mtd","mtext","mtr","munder","munderover","mprescripts"]),fx=Ee(["maction","maligngroup","malignmark","mlongdiv","mscarries","mscarry","msgroup","mstack","msline","msrow","semantics","annotation","annotation-xml","mprescripts","none"]),yp=Ee(["#text"]),wp=Ee(["accept","action","align","alt","autocapitalize","autocomplete","autopictureinpicture","autoplay","background","bgcolor","border","capture","cellpadding","cellspacing","checked","cite","class","clear","color","cols","colspan","command","commandfor","controls","controlslist","coords","crossorigin","datetime","decoding","default","dir","disabled","disablepictureinpicture","disableremoteplayback","download","draggable","enctype","enterkeyhint","exportparts","face","for","headers","height","hidden","high","href","hreflang","id","inert","inputmode","integrity","ismap","kind","label","lang","list","loading","loop","low","max","maxlength","media","method","min","minlength","multiple","muted","name","nonce","noshade","novalidate","nowrap","open","optimum","part","pattern","placeholder","playsinline","popover","popovertarget","popovertargetaction","poster","preload","pubdate","radiogroup","readonly","rel","required","rev","reversed","role","rows","rowspan","spellcheck","scope","selected","shape","size","sizes","slot","span","srclang","start","src","srcset","step","style","summary","tabindex","title","translate","type","usemap","valign","value","width","wrap","xmlns"]),ad=Ee(["accent-height","accumulate","additive","alignment-baseline","amplitude","ascent","attributename","attributetype","azimuth","basefrequency","baseline-shift","begin","bias","by","class","clip","clippathunits","clip-path","clip-rule","color","color-interpolation","color-interpolation-filters","color-profile","color-rendering","cx","cy","d","dx","dy","diffuseconstant","direction","display","divisor","dominant-baseline","dur","edgemode","elevation","end","exponent","fill","fill-opacity","fill-rule","filter","filterunits","flood-color","flood-opacity","font-family","font-size","font-size-adjust","font-stretch","font-style","font-variant","font-weight","fx","fy","g1","g2","glyph-name","glyphref","gradientunits","gradienttransform","height","href","id","image-rendering","in","in2","intercept","k","k1","k2","k3","k4","kerning","keypoints","keysplines","keytimes","lang","lengthadjust","letter-spacing","kernelmatrix","kernelunitlength","lighting-color","local","marker-end","marker-mid","marker-start","markerheight","markerunits","markerwidth","maskcontentunits","maskunits","max","mask","mask-type","media","method","mode","min","name","numoctaves","offset","operator","opacity","order","orient","orientation","origin","overflow","paint-order","path","pathlength","patterncontentunits","patterntransform","patternunits","pointer-events","points","preservealpha","preserveaspectratio","primitiveunits","r","rx","ry","radius","refx","refy","repeatcount","repeatdur","restart","result","rotate","scale","seed","shape-rendering","slope","specularconstant","specularexponent","spreadmethod","startoffset","stddeviation","stitchtiles","stop-color","stop-opacity","stroke-dasharray","stroke-dashoffset","stroke-linecap","stroke-linejoin","stroke-miterlimit","stroke-opacity","stroke","stroke-width","style","surfacescale","systemlanguage","tabindex","tablevalues","targetx","targety","transform","transform-origin","text-anchor","text-decoration","text-orientation","text-rendering","textlength","type","u1","u2","unicode","values","vector-effect","viewbox","visibility","version","vert-adv-y","vert-origin-x","vert-origin-y","width","word-spacing","wrap","writing-mode","xchannelselector","ychannelselector","x","x1","x2","xmlns","y","y1","y2","z","zoomandpan"]),xp=Ee(["accent","accentunder","align","bevelled","close","columnalign","columnlines","columnspacing","columnspan","denomalign","depth","dir","display","displaystyle","encoding","fence","frame","height","href","id","largeop","length","linethickness","lquote","lspace","mathbackground","mathcolor","mathsize","mathvariant","maxsize","minsize","movablelimits","notation","numalign","open","rowalign","rowlines","rowspacing","rowspan","rspace","rquote","scriptlevel","scriptminsize","scriptsizemultiplier","selection","separator","separators","stretchy","subscriptshift","supscriptshift","symmetric","voffset","width","xmlns"]),Hs=Ee(["xlink:href","xml:id","xlink:title","xml:space","xmlns:xlink"]),mx=Se(/{{[\w\W]*|^[\w\W]*}}/g),gx=Se(/<%[\w\W]*|^[\w\W]*%>/g),vx=Se(/\${[\w\W]*/g),bx=Se(/^data-[\-\w.\u00B7-\uFFFF]+$/),yx=Se(/^aria-[\-\w]+$/),Ep=Se(/^(?:(?:(?:f|ht)tps?|mailto|tel|callto|sms|cid|xmpp|matrix):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i),wx=Se(/^(?:\w+script|data):/i),xx=Se(/[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g),Ex=Se(/^html$/i),Tx=Se(/^[a-z][.\w]*(-[.\w]+)+$/i),Tp=Se(/<[/\w!]/g),_p=Se(/<[/\w]/g),_x=Se(/<\/no(script|embed|frames)/i),Sx=Se(/\/>/i),qe={element:1,attribute:2,text:3,cdataSection:4,entityReference:5,entityNode:6,processingInstruction:7,comment:8,document:9,documentType:10,documentFragment:11,notation:12},Rp=["style","script","xmp","iframe","noembed","noframes","plaintext","noscript"],Ax=Ee(ee({},Rp)),kx=(function(){let t={};return xn(Rp,e=>{t[e]=Se(new RegExp("</"+e+"(?=[\\t\\n\\f\\r />])","i"))}),Ee(t)})(),Rx=function(){return typeof window>"u"?null:window},Ix=function(e,n){if(typeof e!="object"||typeof e.createPolicy!="function")return null;let r=null,o="data-tt-policy-suffix";n&&n.hasAttribute(o)&&(r=n.getAttribute(o));let i="dompurify"+(r?"#"+r:"");try{return e.createPolicy(i,{createHTML(s){return s},createScriptURL(s){return s}})}catch{return console.warn("TrustedTypes policy "+i+" could not be created."),null}},Sp=function(){return{afterSanitizeAttributes:[],afterSanitizeElements:[],afterSanitizeShadowDOM:[],beforeSanitizeAttributes:[],beforeSanitizeElements:[],beforeSanitizeShadowDOM:[],uponSanitizeAttribute:[],uponSanitizeElement:[],uponSanitizeShadowNode:[]}},Gt=function(e,n,r,o){return Fe(e,n)&&sr(e[n])?ee(o.base?We(o.base):{},e[n],o.transform):r},ld=function(e,n,r){let o=Fe(e,n)?e[n]:void 0;return o&&typeof o=="object"?We(o):r()};function Ip(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:Rx(),e=R=>Ip(R);if(e.version="3.4.14",e.removed=[],!t||!t.document||t.document.nodeType!==qe.document||!t.Element)return e.isSupported=!1,e;let n=t.document,r=n,o=r.currentScript;t.DocumentFragment;let i=t.HTMLTemplateElement,s=t.Node,a=t.Element,l=t.NodeFilter,d=t.NamedNodeMap;d===void 0&&(t.NamedNodeMap||t.MozNamedAttrMap),t.HTMLFormElement;let u=t.DOMParser,m=t.trustedTypes,w=a.prototype,p=it(w,"cloneNode"),h=it(w,"remove"),v=it(w,"nextSibling"),x=it(w,"childNodes"),S=it(w,"parentNode"),_=it(w,"shadowRoot"),O=it(w,"attributes"),G=s&&s.prototype?it(s.prototype,"nodeType"):null,b=s&&s.prototype?it(s.prototype,"nodeName"):null,A=s&&s.prototype?it(s.prototype,"ownerDocument"):null,E=function(f){return G?G(f):f.nodeType},I=function(f){return b?b(f):f.nodeName};if(typeof i=="function"){let R=n.createElement("template");R.content&&R.content.ownerDocument&&(n=R.content.ownerDocument)}let B,de="",Te,Ye=!1,cr=0,Id=function(){if(cr>0)throw wn('A configured TRUSTED_TYPES_POLICY callback (createHTML or createScriptURL) must not call DOMPurify.sanitize, as that causes infinite recursion. Do not pass a policy whose callbacks wrap DOMPurify as TRUSTED_TYPES_POLICY; see the "DOMPurify and Trusted Types" section of the README.')},Sn=function(f){Id(),cr++;try{return B.createHTML(f)}finally{cr--}},pf=function(f){Id(),cr++;try{return B.createScriptURL(f)}finally{cr--}},ff=function(){return Ye||(Te=Ix(m,o),Ye=!0),Te},ao=n,na=ao.implementation,Cd=ao.createNodeIterator,mf=ao.createDocumentFragment,gf=ao.getElementsByTagName,vf=r.importNode,ue=Sp();e.isSupported=typeof Ap=="function"&&typeof S=="function"&&na&&na.createHTMLDocument!==void 0;let bf=mx,yf=gx,wf=vx,xf=bx,Ef=yx,Tf=wx,Nd=xx,_f=Tx,Od=Ep,he=null,ra=ee({},[...bp,...od,...id,...sd,...yp]),pe=null,oa=ee({},[...wp,...ad,...xp,...Hs]),dt=Object.seal(ir(null,{tagNameCheck:{writable:!0,configurable:!1,enumerable:!0,value:null},attributeNameCheck:{writable:!0,configurable:!1,enumerable:!0,value:null},allowCustomizedBuiltInElements:{writable:!0,configurable:!1,enumerable:!0,value:!1}})),ur=null,Md=null,kt=Object.seal(ir(null,{tagCheck:{writable:!0,configurable:!1,enumerable:!0,value:null},attributeCheck:{writable:!0,configurable:!1,enumerable:!0,value:null}})),Ld=!0,ia=!0,Pd=!1,Dd=!0,Rt=!1,Ft=!0,$t=!1,sa=!1,lo=null,co=null,aa=!1,An=!1,uo=!1,ho=!1,Ud=!0,Hd=!1,Gd="user-content-",la=!0,da=!1,kn={},Rn=null,zd=ee({},["annotation-xml","audio","colgroup","desc","foreignobject","head","iframe","math","mi","mn","mo","ms","mtext","noembed","noframes","noscript","plaintext","script","selectedcontent","style","svg","template","thead","title","video","xmp"]),Fd=null,$d=ee({},["audio","video","img","source","image","track"]),Bd=null,jd=ee({},["alt","class","for","id","label","name","pattern","placeholder","role","summary","title","value","style","xmlns"]),po="http://www.w3.org/1998/Math/MathML",fo="http://www.w3.org/2000/svg",ct="http://www.w3.org/1999/xhtml",In=ct,ca=!1,ua=null,Sf=ee({},[po,fo,ct],rd),Vd=Ee(["mi","mo","mn","ms","mtext"]),ha=ee({},Vd),qd=Ee(["annotation-xml"]),pa=ee({},qd),Af=ee({},["title","style","font","a","script"]),hr=null,kf=["application/xhtml+xml","text/html"],Rf="text/html",ve=null,Cn=null,If=n.createElement("form"),Wd=function(f){return f instanceof RegExp||f instanceof Function},fa=function(){let f=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};if(Cn&&Cn===f)return;(!f||typeof f!="object")&&(f={}),f=We(f),hr=kf.indexOf(f.PARSER_MEDIA_TYPE)===-1?Rf:f.PARSER_MEDIA_TYPE,ve=hr==="application/xhtml+xml"?rd:Yr,he=Gt(f,"ALLOWED_TAGS",ra,{transform:ve}),pe=Gt(f,"ALLOWED_ATTR",oa,{transform:ve}),ua=Gt(f,"ALLOWED_NAMESPACES",Sf,{transform:rd}),Bd=Gt(f,"ADD_URI_SAFE_ATTR",jd,{transform:ve,base:jd}),Fd=Gt(f,"ADD_DATA_URI_TAGS",$d,{transform:ve,base:$d}),Rn=Gt(f,"FORBID_CONTENTS",zd,{transform:ve}),ur=Gt(f,"FORBID_TAGS",We({}),{transform:ve}),Md=Gt(f,"FORBID_ATTR",We({}),{transform:ve}),kn=Fe(f,"USE_PROFILES")?f.USE_PROFILES&&typeof f.USE_PROFILES=="object"?We(f.USE_PROFILES):f.USE_PROFILES:!1,Ld=f.ALLOW_ARIA_ATTR!==!1,ia=f.ALLOW_DATA_ATTR!==!1,Pd=f.ALLOW_UNKNOWN_PROTOCOLS||!1,Dd=f.ALLOW_SELF_CLOSE_IN_ATTR!==!1,Rt=f.SAFE_FOR_TEMPLATES||!1,Ft=f.SAFE_FOR_XML!==!1,$t=f.WHOLE_DOCUMENT||!1,An=f.RETURN_DOM||!1,uo=f.RETURN_DOM_FRAGMENT||!1,ho=f.RETURN_TRUSTED_TYPE||!1,aa=f.FORCE_BODY||!1,Ud=f.SANITIZE_DOM!==!1,Hd=f.SANITIZE_NAMED_PROPS||!1,la=f.KEEP_CONTENT!==!1,da=f.IN_PLACE||!1,Od=hx(f.ALLOWED_URI_REGEXP)?f.ALLOWED_URI_REGEXP:Ep,In=typeof f.NAMESPACE=="string"?f.NAMESPACE:ct,ha=ld(f,"MATHML_TEXT_INTEGRATION_POINTS",()=>ee({},Vd)),pa=ld(f,"HTML_INTEGRATION_POINTS",()=>ee({},qd));let y=ld(f,"CUSTOM_ELEMENT_HANDLING",()=>ir(null));if(dt=ir(null),Fe(y,"tagNameCheck")&&Wd(y.tagNameCheck)&&(dt.tagNameCheck=y.tagNameCheck),Fe(y,"attributeNameCheck")&&Wd(y.attributeNameCheck)&&(dt.attributeNameCheck=y.attributeNameCheck),Fe(y,"allowCustomizedBuiltInElements")&&typeof y.allowCustomizedBuiltInElements=="boolean"&&(dt.allowCustomizedBuiltInElements=y.allowCustomizedBuiltInElements),Se(dt),Rt&&(ia=!1),uo&&(An=!0),kn&&(he=ee({},yp),pe=ir(null),kn.html===!0&&(ee(he,bp),ee(pe,wp)),kn.svg===!0&&(ee(he,od),ee(pe,ad),ee(pe,Hs)),kn.svgFilters===!0&&(ee(he,id),ee(pe,ad),ee(pe,Hs)),kn.mathMl===!0&&(ee(he,sd),ee(pe,xp),ee(pe,Hs))),kt.tagCheck=null,kt.attributeCheck=null,Fe(f,"ADD_TAGS")&&(typeof f.ADD_TAGS=="function"?kt.tagCheck=f.ADD_TAGS:sr(f.ADD_TAGS)&&(he===ra&&(he=We(he)),ee(he,f.ADD_TAGS,ve))),Fe(f,"ADD_ATTR")&&(typeof f.ADD_ATTR=="function"?kt.attributeCheck=f.ADD_ATTR:sr(f.ADD_ATTR)&&(pe===oa&&(pe=We(pe)),ee(pe,f.ADD_ATTR,ve))),Fe(f,"ADD_FORBID_CONTENTS")&&sr(f.ADD_FORBID_CONTENTS)&&(Rn===zd&&(Rn=We(Rn)),ee(Rn,f.ADD_FORBID_CONTENTS,ve)),la&&(he["#text"]=!0),$t&&ee(he,["html","head","body"]),he.table&&(ee(he,["tbody"]),delete ur.tbody),f.TRUSTED_TYPES_POLICY){if(typeof f.TRUSTED_TYPES_POLICY.createHTML!="function")throw wn('TRUSTED_TYPES_POLICY configuration option must provide a "createHTML" hook.');if(typeof f.TRUSTED_TYPES_POLICY.createScriptURL!="function")throw wn('TRUSTED_TYPES_POLICY configuration option must provide a "createScriptURL" hook.');let T=B;B=f.TRUSTED_TYPES_POLICY;try{de=Sn("")}catch(M){throw B=T,M}}else f.TRUSTED_TYPES_POLICY===null?(B=void 0,de=""):(B===void 0&&(B=ff()),B&&typeof de=="string"&&(de=Sn("")));Ee&&Ee(f),Cn=f},Xd=ee({},[...od,...id,...px]),Yd=ee({},[...sd,...fx]),Cf=function(f,y,T){return y.namespaceURI===ct?f==="svg":y.namespaceURI===po?f==="svg"&&(T==="annotation-xml"||ha[T]):!!Xd[f]},Nf=function(f,y,T){return y.namespaceURI===ct?f==="math":y.namespaceURI===fo?f==="math"&&pa[T]:!!Yd[f]},Of=function(f,y,T){return y.namespaceURI===fo&&!pa[T]||y.namespaceURI===po&&!ha[T]?!1:!Yd[f]&&(Af[f]||!Xd[f])},Mf=function(f){let y=S(f);(!y||!y.tagName)&&(y={namespaceURI:In,tagName:"template"});let T=Yr(f.tagName),M=Yr(y.tagName);return ua[f.namespaceURI]?f.namespaceURI===fo?Cf(T,y,M):f.namespaceURI===po?Nf(T,y,M):f.namespaceURI===ct?Of(T,y,M):!!(hr==="application/xhtml+xml"&&ua[f.namespaceURI]):!1},It=function(f){qr(e.removed,{element:f});try{S(f).removeChild(f)}catch{if(h(f),!S(f))throw wn("a node selected for removal could not be detached from its tree and cannot be safely returned; refusing to sanitize in place")}},Kd=function(f,y,T){try{f.removeAttributeNode(y)}catch{try{f.removeAttribute(T)}catch{}}},mo=function(f){go(f);let y=x(f);if(y){let M=[];xn(y,H=>{qr(M,H)}),xn(M,H=>{try{h(H)}catch{}})}let T=O(f);if(T)for(let M=T.length-1;M>=0;--M){let H=T[M],j=H&&H.name;typeof j=="string"&&Kd(f,H,j)}},Bt=function(f,y,T){if(!T)try{T=y.getAttributeNode(f)}catch{T=null}qr(e.removed,{attribute:T||null,from:y});try{T?y.removeAttributeNode(T):y.removeAttribute(f)}catch{try{y.removeAttribute(f)}catch{}}if(f==="is")if(An||uo)try{It(y)}catch{}else try{y.setAttribute(f,"")}catch{}},Lf=function(f){let y=O(f);if(y)for(let T=y.length-1;T>=0;--T){let M=y[T],H=M&&M.name;typeof H!="string"||pe[ve(H)]||Kd(f,M,H)}},go=function(f){let y=[f];for(;y.length>0;){let T=y.pop();E(T)===qe.element&&Lf(T);let H=x(T);if(H)for(let j=H.length-1;j>=0;--j)y.push(H[j])}},Zd=function(f,y){return Ft?f==="patchsrc"?!0:f==="for"&&y!=="label"&&y!=="output":!1},Pf=function(f){if(!Ft)return;let y=[f];for(;y.length>0;){let T=y.pop(),M=E(T);if(M===qe.processingInstruction||M===qe.comment&&Ne(_p,T.data)){try{h(T)}catch{}continue}if(M===qe.element){let j=T,se=ve(I(T));try{j.hasAttribute&&j.hasAttribute("patchsrc")&&j.removeAttribute("patchsrc"),j.hasAttribute&&j.hasAttribute("for")&&Zd("for",se)&&j.removeAttribute("for")}catch{}}let H=x(T);if(H)for(let j=H.length-1;j>=0;--j)y.push(H[j])}},Qd=function(f){let y=null,T=null;if(aa)f="<remove></remove>"+f;else{let j=fp(f,/^[\r\n\t ]+/);T=j&&j[0]}hr==="application/xhtml+xml"&&In===ct&&(f='<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>'+f+"</body></html>");let M=B?Sn(f):f;if(In===ct)try{y=new u().parseFromString(M,hr)}catch{}if(!y||!y.documentElement){y=na.createDocument(In,"template",null);try{y.documentElement.innerHTML=ca?de:M}catch{}}let H=y.body||y.documentElement;return f&&T&&H.insertBefore(n.createTextNode(T),H.childNodes[0]||null),In===ct?gf.call(y,$t?"html":"body")[0]:$t?y.documentElement:H},Jd=function(f){let y=A?A(f):f.ownerDocument;return Cd.call(y||f,f,l.SHOW_ELEMENT|l.SHOW_COMMENT|l.SHOW_TEXT|l.SHOW_PROCESSING_INSTRUCTION|l.SHOW_CDATA_SECTION,null)},vo=function(f){return f=Wr(f,bf," "),f=Wr(f,yf," "),f=Wr(f,wf," "),f},ma=function(f){var y;f.normalize();let T=A?A(f):f.ownerDocument,M=Cd.call(T||f,f,l.SHOW_TEXT|l.SHOW_COMMENT|l.SHOW_CDATA_SECTION|l.SHOW_PROCESSING_INSTRUCTION,null),H=M.nextNode();for(;H;)H.data=vo(H.data),H=M.nextNode();let j=(y=f.querySelectorAll)===null||y===void 0?void 0:y.call(f,"template");j&&xn(j,se=>{Nn(se.content)&&ma(se.content)})},bo=function(f){let y=b?b(f):null;return typeof y!="string"||ve(y)!=="form"?!1:typeof f.nodeName!="string"||typeof f.textContent!="string"||typeof f.removeChild!="function"||f.attributes!==O(f)||typeof f.removeAttribute!="function"||typeof f.setAttribute!="function"||typeof f.namespaceURI!="string"||typeof f.insertBefore!="function"||typeof f.hasChildNodes!="function"||f.nodeType!==G(f)||f.childNodes!==x(f)},Nn=function(f){if(!G||typeof f!="object"||f===null)return!1;try{return G(f)===qe.documentFragment}catch{return!1}},pr=function(f){if(!G||typeof f!="object"||f===null)return!1;try{return typeof G(f)=="number"}catch{return!1}};function ut(R,f,y){R.length!==0&&xn(R,T=>{T.call(e,f,y,Cn)})}let Df=function(f,y){return!!(Ft&&f.hasChildNodes()&&!pr(f.firstElementChild)&&Ne(Tp,f.textContent)&&Ne(Tp,f.innerHTML)||Ft&&f.namespaceURI===ct&&Ax[y]&&(pr(f.firstElementChild)||typeof f.textContent=="string"&&Ne(kx[y],f.textContent))||f.nodeType===qe.processingInstruction||Ft&&f.nodeType===qe.comment&&Ne(_p,f.data))},yo=function(f,y){if(f instanceof RegExp)return Ne(f,y);if(f instanceof Function){for(var T=arguments.length,M=new Array(T>2?T-2:0),H=2;H<T;H++)M[H-2]=arguments[H];return!!f(y,...M)}return!1},Uf=function(f,y,T){if(!ur[y]&&oc(y)&&yo(dt.tagNameCheck,y))return!1;if(la&&!Rn[y]){let M=S(f),H=x(f);if(H&&M){let j=H.length;for(let se=j-1;se>=0;--se){let fe=f===T?p(H[se],!0):H[se];M.insertBefore(fe,v(f))}}}return It(f),!0},ec=function(f,y,T,M){return f.length===0?y:y===T||y===M?We(y):y},tc=function(f,y){return f===y||S(f)!==null?!1:(da&&go(f),!0)},nc=function(f,y){if(ut(ue.beforeSanitizeElements,f,null),tc(f,y))return!0;if(bo(f))return It(f),!0;let T=ve(I(f));if(he=ec(ue.uponSanitizeElement,he,ra,lo),ut(ue.uponSanitizeElement,f,{tagName:T,allowedTags:he}),tc(f,y))return!0;if(Df(f,T))return It(f),!0;if(ur[T]||!(kt.tagCheck instanceof Function&&kt.tagCheck(T))&&!he[T]){let H=Uf(f,T,y);return H===!1&&ut(ue.afterSanitizeElements,f,null),H}if(E(f)===qe.element&&!Mf(f)||(T==="noscript"||T==="noembed"||T==="noframes")&&Ne(_x,f.innerHTML))return It(f),!0;if(Rt&&f.nodeType===qe.text){let H=vo(f.textContent);f.textContent!==H&&(qr(e.removed,{element:f.cloneNode()}),f.textContent=H)}return ut(ue.afterSanitizeElements,f,null),!1},rc=function(f,y,T){if(Md[y]||Zd(y,f)||Ud&&(y==="id"||y==="name")&&(T in n||T in If))return!1;let M=pe[y]||kt.attributeCheck instanceof Function&&kt.attributeCheck(y,f);return ia&&Ne(xf,y)||Ld&&Ne(Ef,y)?!0:M?Bd[y]||Ne(Od,Wr(T,Nd,""))||(y==="src"||y==="xlink:href"||y==="href")&&f!=="script"&&mp(T,"data:")===0&&Fd[f]||Pd&&!Ne(Tf,Wr(T,Nd,""))?!0:!T:oc(f)&&yo(dt.tagNameCheck,f)&&yo(dt.attributeNameCheck,y,f)||y==="is"&&dt.allowCustomizedBuiltInElements&&yo(dt.tagNameCheck,T)},Hf=ee({},["annotation-xml","color-profile","font-face","font-face-format","font-face-name","font-face-src","font-face-uri","missing-glyph"]),oc=function(f){return!Hf[Yr(f)]&&Ne(_f,f)},Gf=function(f,y,T,M){if(B&&typeof m=="object"&&typeof m.getAttributeType=="function"&&!T)switch(m.getAttributeType(f,y)){case"TrustedHTML":return Sn(M);case"TrustedScriptURL":return pf(M)}return M},zf=function(f,y,T,M){try{T?f.setAttributeNS(T,y,M):f.setAttribute(y,M),bo(f)?It(f):pp(e.removed)}catch{Bt(y,f)}},ic=function(f){ut(ue.beforeSanitizeAttributes,f,null);let y=f.attributes;if(!y||bo(f))return;pe=ec(ue.uponSanitizeAttribute,pe,oa,co);let T={attrName:"",attrValue:"",keepAttr:!0,allowedAttributes:pe,forceKeepAttr:void 0},M=y.length,H=ve(f.nodeName);for(;M--;){let j=y[M],se=j.name,fe=j.namespaceURI,De=j.value,Ue=ve(se),va=De,Me=se==="value"?va:sx(va);if(T.attrName=Ue,T.attrValue=Me,T.keepAttr=!0,T.forceKeepAttr=void 0,ut(ue.uponSanitizeAttribute,f,T),Me=T.attrValue,Hd&&(Ue==="id"||Ue==="name")&&mp(Me,Gd)!==0&&(Bt(se,f,j),Me=Gd+Me),Ft&&Ne(/((--!?|])>)|<\/(style|script|title|xmp|textarea|noscript|iframe|noembed|noframes)/i,Me)){Bt(se,f,j);continue}if(Ue==="attributename"&&fp(Me,"href")){Bt(se,f,j);continue}if(!T.forceKeepAttr){if(!T.keepAttr){Bt(se,f,j);continue}if(!Dd&&Ne(Sx,Me)){Bt(se,f,j);continue}if(Rt&&(Me=vo(Me)),!rc(H,Ue,Me)){Bt(se,f,j);continue}Me=Gf(H,Ue,fe,Me),Me!==va&&zf(f,se,fe,Me)}}ut(ue.afterSanitizeAttributes,f,null)},wo=function(f){let y=null,T=Jd(f);for(ut(ue.beforeSanitizeShadowDOM,f,null);y=T.nextNode();)if(ut(ue.uponSanitizeShadowNode,y,null),nc(y,f),ic(y),Nn(y.content)&&wo(y.content),E(y)===qe.element){let M=_(y);Nn(M)&&(ga(M),wo(M))}ut(ue.afterSanitizeShadowDOM,f,null)},ga=function(f){let y=[{node:f,shadow:null}];for(;y.length>0;){let T=y.pop();if(T.shadow){wo(T.shadow);continue}let M=T.node,j=E(M)===qe.element,se=x(M);if(se)for(let fe=se.length-1;fe>=0;--fe)y.push({node:se[fe],shadow:null});if(j){let fe=b?b(M):null;if(typeof fe=="string"&&ve(fe)==="template"){let De=M.content;Nn(De)&&y.push({node:De,shadow:null})}}if(j){let fe=_(M);Nn(fe)&&y.push({node:null,shadow:fe},{node:fe,shadow:null})}}};return e.sanitize=function(R){let f=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},y=null,T=null,M=null,H=null;if(ca=!R,ca&&(R="<!-->"),typeof R!="string"&&!pr(R)&&(R=ux(R),typeof R!="string"))throw wn("dirty is not a string, aborting");if(!e.isSupported)return R;sa?(he=lo,pe=co):fa(f),(ue.uponSanitizeElement.length>0||ue.uponSanitizeAttribute.length>0)&&(he=We(he)),ue.uponSanitizeAttribute.length>0&&(pe=We(pe)),e.removed=[];let j=da&&typeof R!="string"&&pr(R);if(j){Pf(R);let De=I(R);if(typeof De=="string"){let Ue=ve(De);if(!he[Ue]||ur[Ue])throw mo(R),wn("root node is forbidden and cannot be sanitized in-place")}if(bo(R))throw mo(R),wn("root node is clobbered and cannot be sanitized in-place");try{ga(R)}catch(Ue){throw mo(R),Ue}}else if(pr(R))y=Qd("<!---->"),T=y.ownerDocument.importNode(R,!0),T.nodeType===qe.element&&T.nodeName==="BODY"||T.nodeName==="HTML"?y=T:y.appendChild(T),ga(T);else{if(!An&&!Rt&&!$t&&R.indexOf("<")===-1)return B&&ho?Sn(R):R;if(y=Qd(R),!y)return An?null:ho?de:""}y&&aa&&It(y.firstChild);let se=j?R:y;try{let De=Jd(se);for(;M=De.nextNode();)nc(M,se),ic(M),Nn(M.content)&&wo(M.content)}catch(De){throw j&&(mo(R),xn(e.removed,Ue=>{Ue.element&&go(Ue.element)})),De}if(j)return xn(e.removed,De=>{De.element&&go(De.element)}),Rt&&ma(R),R;if(An){if(Rt&&ma(y),uo)for(H=mf.call(y.ownerDocument);y.firstChild;)H.appendChild(y.firstChild);else H=y;return(pe.shadowroot||pe.shadowrootmode)&&(H=vf.call(r,H,!0)),H}let fe=$t?y.outerHTML:y.innerHTML;return $t&&he["!doctype"]&&y.ownerDocument&&y.ownerDocument.doctype&&y.ownerDocument.doctype.name&&Ne(Ex,y.ownerDocument.doctype.name)&&(fe="<!DOCTYPE "+y.ownerDocument.doctype.name+`>
`+fe),Rt&&(fe=vo(fe)),B&&ho?Sn(fe):fe},e.setConfig=function(){let R=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};fa(R),sa=!0,lo=he,co=pe},e.clearConfig=function(){Cn=null,sa=!1,lo=null,co=null,B=Te,de=""},e.isValidAttribute=function(R,f,y){Cn||fa({});let T=ve(R),M=ve(f);return rc(T,M,y)},e.addHook=function(R,f){typeof f=="function"&&Fe(ue,R)&&qr(ue[R],f)},e.removeHook=function(R,f){if(Fe(ue,R)){if(f!==void 0){let y=ox(ue[R],f);return y===-1?void 0:ix(ue[R],y,1)[0]}return pp(ue[R])}},e.removeHooks=function(R){Fe(ue,R)&&(ue[R]=[])},e.removeAllHooks=function(){ue=Sp()},e}var Cp=Ip();function fd(){return{async:!1,breaks:!1,extensions:null,gfm:!0,hooks:null,pedantic:!1,renderer:null,silent:!1,tokenizer:null,walkTokens:null}}var _n=fd();function Hp(t){_n=t}var En={exec:()=>null};function ar(t){let e=[];return n=>{let r=Math.max(0,Math.min(3,n-1)),o=e[r];return o||(o=t(r),e[r]=o),o}}function Z(t,e=""){let n=typeof t=="string"?t:t.source,r={replace:(o,i)=>{let s=typeof i=="string"?i:i.source;return s=s.replace(Oe.caret,"$1"),n=n.replace(o,s),r},getRegex:()=>new RegExp(n,e)};return r}var Cx=((t="")=>{try{return!!new RegExp("(?<=1)(?<!1)"+t)}catch{return!1}})(),Oe={codeRemoveIndent:/^(?: {1,4}| {0,3}\t)/gm,outputLinkReplace:/\\([\[\]])/g,indentCodeCompensation:/^(\s+)(?:```)/,beginningSpace:/^\s+/,endingHash:/#$/,startingSpaceChar:/^ /,endingSpaceChar:/ $/,nonSpaceChar:/[^ ]/,newLineCharGlobal:/\n/g,tabCharGlobal:/\t/g,multipleSpaceGlobal:/\s+/g,blankLine:/^[ \t]*$/,doubleBlankLine:/\n[ \t]*\n[ \t]*$/,blockquoteStart:/^ {0,3}>/,blockquoteSetextReplace:/\n {0,3}((?:=+|-+) *)(?=\n|$)/g,blockquoteSetextReplace2:/^ {0,3}>[ \t]?/gm,listReplaceNesting:/^ {1,4}(?=( {4})*[^ ])/g,listIsTask:/^\[[ xX]\] +\S/,listReplaceTask:/^\[[ xX]\] +/,listTaskCheckbox:/\[[ xX]\]/,anyLine:/\n.*\n/,hrefBrackets:/^<(.*)>$/,tableDelimiter:/[:|]/,tableAlignChars:/^\||\| *$/g,tableRowBlankLine:/\n[ \t]*$/,tableAlignRight:/^ *-+: *$/,tableAlignCenter:/^ *:-+: *$/,tableAlignLeft:/^ *:-+ *$/,startATag:/^<a /i,endATag:/^<\/a>/i,startPreScriptTag:/^<(pre|code|kbd|script)(\s|>)/i,endPreScriptTag:/^<\/(pre|code|kbd|script)(\s|>)/i,startAngleBracket:/^</,endAngleBracket:/>$/,pedanticHrefTitle:/^([^'"]*[^\s])\s+(['"])(.*)\2/,unicodeAlphaNumeric:/[\p{L}\p{N}]/u,escapeTest:/[&<>"']/,escapeReplace:/[&<>"']/g,escapeTestNoEncode:/[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/,escapeReplaceNoEncode:/[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/g,caret:/(^|[^\[])\^/g,percentDecode:/%25/g,findPipe:/\|/g,splitPipe:/ \|/,slashPipe:/\\\|/g,carriageReturn:/\r\n|\r/g,spaceLine:/^ +$/gm,notSpaceStart:/^\S*/,endingNewline:/\n$/,listItemRegex:t=>new RegExp(`^( {0,3}${t})((?:[	 ][^\\n]*)?(?:\\n|$))`),nextBulletRegex:ar(t=>new RegExp(`^ {0,${t}}(?:[*+-]|\\d{1,9}[.)])((?:[ 	][^\\n]*)?(?:\\n|$))`)),hrRegex:ar(t=>new RegExp(`^ {0,${t}}((?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$)`)),fencesBeginRegex:ar(t=>new RegExp(`^ {0,${t}}(?:\`\`\`|~~~)`)),headingBeginRegex:ar(t=>new RegExp(`^ {0,${t}}#`)),htmlBeginRegex:ar(t=>new RegExp(`^ {0,${t}}<(?:[a-z].*>|!--)`,"i")),blockquoteBeginRegex:ar(t=>new RegExp(`^ {0,${t}}>`))},Nx=/^(?:[ \t]*(?:\n|$))+/,Ox=/^((?: {4}| {0,3}\t)[^\n]+(?:\n(?:[ \t]*(?:\n|$))*)?)+/,Mx=/^ {0,3}(`{3,}(?=[^`\n]*(?:\n|$))|~{3,})([^\n]*)(?:\n|$)(?:|([\s\S]*?)(?:\n|$))(?: {0,3}\1[~`]* *(?=\n|$)|$)/,Qr=/^ {0,3}((?:-[\t ]*){3,}|(?:_[ \t]*){3,}|(?:\*[ \t]*){3,})(?:\n+|$)/,Lx=/^ {0,3}(#{1,6})(?=\s|$)(.*)(?:\n+|$)/,md=/ {0,3}(?:[*+-]|\d{1,9}[.)])/,Gp=/^(?!bull |blockCode|fences|blockquote|heading|html|table)((?:.|\n(?!\s*?\n|bull |blockCode|fences|blockquote|heading|html|table))+?)\n {0,3}(=+|-+) *(?:\n+|$)/,zp=Z(Gp).replace(/bull/g,md).replace(/blockCode/g,/(?: {4}| {0,3}\t)/).replace(/fences/g,/ {0,3}(?:`{3,}|~{3,})/).replace(/blockquote/g,/ {0,3}>/).replace(/heading/g,/ {0,3}#{1,6}(?:\s|$)/).replace(/html/g,/ {0,3}<[^\n>]+>\n/).replace(/\|table/g,"").getRegex(),Px=Z(Gp).replace(/bull/g,md).replace(/blockCode/g,/(?: {4}| {0,3}\t)/).replace(/fences/g,/ {0,3}(?:`{3,}|~{3,})/).replace(/blockquote/g,/ {0,3}>/).replace(/heading/g,/ {0,3}#{1,6}(?:\s|$)/).replace(/html/g,/ {0,3}<[^\n>]+>\n/).replace(/table/g,/ {0,3}\|?(?:[:\- ]*\|)+[\:\- ]*\n/).getRegex(),gd=/^([^\n]+(?:\n(?!hr|heading|lheading|blockquote|fences|list|html|table|[ \t]+\n)[^\n]+)*)/,Dx=/^[^\n]+/,vd=/(?!\s*\])(?:\\[\s\S]|[^\[\]\\])+/,Ux=Z(/^ {0,3}\[(label)\]: *(?:\n[ \t]*)?([^<\s][^\s]*|<.*?>)(?:(?: +(?:\n[ \t]*)?| *\n[ \t]*)(title))? *(?:\n+|$)/).replace("label",vd).replace("title",/(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/).getRegex(),Hx=Z(/^(bull)([ \t][^\n]*?)?(?:\n|$)/).replace(/bull/g,md).getRegex(),Bs="address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option|p|param|search|section|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul",bd=/<!--(?:-?>|[\s\S]*?(?:-->|$))/,Gx=Z("^ {0,3}(?:<(script|pre|style|textarea)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n*|$)|comment[^\\n]*(\\n+|$)|<\\?[\\s\\S]*?(?:\\?>[^\\n]*\\n*|$)|<![A-Z][\\s\\S]*?(?:>[^\\n]*\\n*|$)|<!\\[CDATA\\[[\\s\\S]*?(?:\\]\\]>[^\\n]*\\n*|$)|</?(tag)(?: +|\\n|/?>)[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$)|<(?!script|pre|style|textarea)([a-z][\\w-]*)(?:attribute)*? */?>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$)|</(?!script|pre|style|textarea)[a-z][\\w-]*\\s*>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$))","i").replace("comment",bd).replace("tag",Bs).replace("attribute",/ +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/).getRegex(),Fp=t=>Z(gd).replace("hr",Qr).replace("heading"," {0,3}#{1,6}(?:\\s|$)").replace("|lheading","").replace("|table","").replace("blockquote"," {0,3}>").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*(?:\\n|$))|~~~)[^\\n]*(?:\\n|$)").replace("list",t).replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",Bs).getRegex(),zx=Fp(/ {0,3}(?:[*+-]|1[.)])[ \t]+[^ \t\n]/),Fx=Fp(/ {0,3}(?:[*+-]|\d{1,9}[.)])(?:[ \t]|\n|$)/),$x=Z(/^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/).replace("paragraph",Fx).getRegex(),yd={blockquote:$x,code:Ox,def:Ux,fences:Mx,heading:Lx,hr:Qr,html:Gx,lheading:zp,list:Hx,newline:Nx,paragraph:zx,table:En,text:Dx},Np=Z("^ *([^\\n ].*)\\n {0,3}((?:\\| *)?:?-+:? *(?:\\| *:?-+:? *)*(?:\\| *)?)(?:\\n((?:(?! *\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)").replace("hr",Qr).replace("heading"," {0,3}#{1,6}(?:\\s|$)").replace("blockquote"," {0,3}>").replace("code","(?: {4}| {0,3}	)[^\\n]").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*(?:\\n|$))|~~~)[^\\n]*(?:\\n|$)").replace("list"," {0,3}(?:[*+-]|1[.)])[ \\t]").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",Bs).getRegex(),Bx={...yd,lheading:Px,table:Np,paragraph:Z(gd).replace("hr",Qr).replace("heading"," {0,3}#{1,6}(?:\\s|$)").replace("|lheading","").replace("table",Np).replace("blockquote"," {0,3}>").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*(?:\\n|$))|~~~)[^\\n]*(?:\\n|$)").replace("list"," {0,3}(?:[*+-]|1[.)])[ \\t]+[^ \\t\\n]").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",Bs).getRegex()},jx={...yd,html:Z(`^ *(?:comment *(?:\\n|\\s*$)|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)|<tag(?:"[^"]*"|'[^']*'|\\s[^'"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))`).replace("comment",bd).replace(/tag/g,"(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:|[^\\w\\s@]*@)\\b").getRegex(),def:/^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/,heading:/^(#{1,6})(.*)(?:\n+|$)/,fences:En,lheading:/^(.+?)\n {0,3}(=+|-+) *(?:\n+|$)/,paragraph:Z(gd).replace("hr",Qr).replace("heading",` *#{1,6} *[^
]`).replace("lheading",zp).replace("|table","").replace("blockquote"," {0,3}>").replace("|fences","").replace("|list","").replace("|html","").replace("|tag","").getRegex()},Vx=/^\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/,qx=/^(`+)([^`]|[^`][\s\S]*?[^`])\1(?!`)/,$p=/^( {2,}|\\)\n(?!\s*$)/,Wx=/^(`+|[^`])(?:(?= {2,}\n)|[\s\S]*?(?:(?=[\\<!\[`*_]|\b_|$)|[^ ](?= {2,}\n)))/,At=/[\p{P}\p{S}]/u,lr=/[\s\p{P}\p{S}]/u,Jr=/[^\s\p{P}\p{S}]/u,Xx=Z(/^((?![*_])punctSpace)/,"u").replace(/punctSpace/g,lr).getRegex(),Yx=/[\p{Pi}\p{Ps}"']/u,Bp=/(?!~)[\p{P}\p{S}]/u,Kx=/(?!~)[\s\p{P}\p{S}]/u,Zx=/(?:[^\s\p{P}\p{S}]|~)/u,Qx=Z(/link|precode-code|html/,"g").replace("link",/\[(?:[^\[\]`]|(?<a>`+)[^`]+\k<a>(?!`))*?\]\((?:\\[\s\S]|[^\\\(\)]|\((?:\\[\s\S]|[^\\\(\)])*\))*\)/).replace("precode-",Cx?"(?<!`)()":"(^^|[^`])").replace("code",/(?<b>`+)[^`]+\k<b>(?!`)/).replace("html",/<(?! )[^<>]*?>/).getRegex(),jp=/^(?:\*+(?:((?!\*)punct)|([^\s*]))?)|^_+(?:((?!_)punct)|([^\s_]))?/,Jx=Z(jp,"u").replace(/punct/g,At).getRegex(),eE=Z(jp,"u").replace(/punct/g,Bp).getRegex(),tE=/^(?:\*+(?:((?!\*)(?!openQuote)punct)|([^\s*]))?)|^_+(?:((?!_)(?!openQuote)punct)|([^\s_]))?/,nE=Z(tE,"u").replace(/openQuote/g,Yx).replace(/punct/g,At).getRegex(),Vp="^[^_*]*?__[^_*]*?\\*[^_*]*?(?=__)|[^*]+(?=[^*])|(?!\\*)punct(\\*+)(?=[\\s]|$)|notPunctSpace(\\*+)(?!\\*)(?=punctSpace|$)|(?!\\*)punctSpace(\\*+)(?=notPunctSpace)|[\\s](\\*+)(?!\\*)(?=punct)|(?!\\*)punct(\\*+)(?!\\*)(?=punct)|notPunctSpace(\\*+)(?=notPunctSpace)",rE=Z(Vp,"gu").replace(/notPunctSpace/g,Jr).replace(/punctSpace/g,lr).replace(/punct/g,At).getRegex(),oE=Z(Vp,"gu").replace(/notPunctSpace/g,Zx).replace(/punctSpace/g,Kx).replace(/punct/g,Bp).getRegex(),iE="^[^_*]*?__[^_*]*?\\*[^_*]*?(?=__)|[^*]+(?=[^*])|(?!\\*)punct(\\*+)(?=[\\s]|$)|notPunctSpace(\\*+)(?!\\*)(?=punctSpace|$)|(?!\\*)[\\s](\\*+)(?=notPunctSpace)|[\\s](\\*+)(?!\\*)(?=punct)|(?!\\*)punct(\\*+)(?!\\*)(?=punct)|(?:(?!\\*)punct|notPunctSpace)(\\*+)(?!\\*)(?=notPunctSpace)",sE=Z(iE,"gu").replace(/notPunctSpace/g,Jr).replace(/punctSpace/g,lr).replace(/punct/g,At).getRegex(),aE=Z("^[^_*]*?\\*\\*[^_*]*?_[^_*]*?(?=\\*\\*)|[^_]+(?=[^_])|(?!_)punct(_+)(?=[\\s]|$)|notPunctSpace(_+)(?!_)(?=punctSpace|$)|(?!_)punctSpace(_+)(?=notPunctSpace)|[\\s](_+)(?!_)(?=punct)|(?!_)punct(_+)(?!_)(?=punct)","gu").replace(/notPunctSpace/g,Jr).replace(/punctSpace/g,lr).replace(/punct/g,At).getRegex(),lE="^[^_*]*?\\*\\*[^_*]*?_[^_*]*?(?=\\*\\*)|[^_]+(?=[^_])|(?!_)punct(_+)(?=[\\s]|$)|notPunctSpace(_+)(?!_)(?=punctSpace|$)|(?!_)[\\s](_+)(?=notPunctSpace)|[\\s](_+)(?!_)(?=punct)|(?!_)punct(_+)(?!_)(?=punct)|(?:(?!_)punct|notPunctSpace)(_+)(?!_)(?=notPunctSpace)",dE=Z(lE,"gu").replace(/notPunctSpace/g,Jr).replace(/punctSpace/g,lr).replace(/punct/g,At).getRegex(),cE=Z(/^~~?(?:((?!~)punct)|[^\s~])/,"u").replace(/punct/g,At).getRegex(),uE="^[^~]+(?=[^~])|(?!~)punct(~~?)(?=[\\s]|$)|notPunctSpace(~~?)(?!~)(?=punctSpace|$)|(?!~)punctSpace(~~?)(?=notPunctSpace)|[\\s](~~?)(?!~)(?=punct)|(?!~)punct(~~?)(?!~)(?=punct)|notPunctSpace(~~?)(?=notPunctSpace)",hE=Z(uE,"gu").replace(/notPunctSpace/g,Jr).replace(/punctSpace/g,lr).replace(/punct/g,At).getRegex(),pE=Z(/\\(punct)/,"gu").replace(/punct/g,At).getRegex(),fE=Z(/^<(scheme:[^\s\x00-\x1f<>]*|email)>/).replace("scheme",/[a-zA-Z][a-zA-Z0-9+.-]{1,31}/).replace("email",/[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/).getRegex(),mE=Z(bd).replace("(?:-->|$)","-->").getRegex(),gE=Z("^comment|^</[a-zA-Z][\\w:-]*\\s*>|^<[a-zA-Z][\\w-]*(?:attribute)*?\\s*/?>|^<\\?[\\s\\S]*?\\?>|^<![a-zA-Z]+\\s[\\s\\S]*?>|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>").replace("comment",mE).replace("attribute",/\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/).getRegex(),zs=/(?:\[(?:\\[\s\S]|[^\[\]\\])*\]|\\[\s\S]|`+(?!`)[^`]*?`+(?!`)|``+(?=\])|[^\[\]\\`])*?/,vE=Z(/^!?\[(label)\]\(\s*(href)(?:(?:[ \t]+(?:\n[ \t]*)?|\n[ \t]*)(title))?\s*\)/).replace("label",zs).replace("href",/<(?:\\.|[^\n<>\\])+>|[^ \t\n\x00-\x1f]+|(?=\))/).replace("title",/"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/).getRegex(),qp=Z(/^!?\[(label)\]\[(ref)\]/).replace("label",zs).replace("ref",vd).getRegex(),Wp=Z(/^!?\[(ref)\](?:\[\])?/).replace("ref",vd).getRegex(),bE=Z("reflink|nolink(?!\\()","g").replace("reflink",qp).replace("nolink",Wp).getRegex(),Op=/[hH][tT][tT][pP][sS]?|[fF][tT][pP]/,wd={_backpedal:En,anyPunctuation:pE,autolink:fE,blockSkip:Qx,br:$p,code:qx,del:En,delLDelim:En,delRDelim:En,emStrongLDelim:Jx,emStrongRDelimAst:rE,emStrongRDelimUnd:aE,escape:Vx,link:vE,nolink:Wp,punctuation:Xx,reflink:qp,reflinkSearch:bE,tag:gE,text:Wx,url:En},yE={...wd,emStrongLDelim:nE,emStrongRDelimAst:sE,emStrongRDelimUnd:dE,link:Z(/^!?\[(label)\]\((.*?)\)/).replace("label",zs).getRegex(),reflink:Z(/^!?\[(label)\]\s*\[([^\]]*)\]/).replace("label",zs).getRegex()},ud={...wd,emStrongRDelimAst:oE,emStrongLDelim:eE,delLDelim:cE,delRDelim:hE,url:Z(/^((?:protocol):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/).replace("protocol",Op).replace("email",/[A-Za-z0-9._+-]+(@)[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![-_])/).getRegex(),_backpedal:/(?:[^?!.,:;*_'"~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_'"~)]+(?!$))+/,del:/^(~~?)(?=[^\s~])((?:\\[\s\S]|[^\\])*?(?:\\[\s\S]|[^\s~\\]))\1(?=[^~]|$)/,text:Z(/^(`+|~+|[^`~])(?:(?=[`~])|(?= {2,}\n)|(?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)|[\s\S]*?(?:(?=[\\<!\[`*~_]|\b_|protocol:\/\/|www\.|$)|[^ ](?= {2,}\n)|[^a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-](?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)))/).replace("protocol",Op).getRegex()},wE={...ud,br:Z($p).replace("{2,}","*").getRegex(),text:Z(ud.text).replace("\\b_","\\b_| {2,}\\n").replace(/\{2,\}/g,"*").getRegex()},Gs={normal:yd,gfm:Bx,pedantic:jx},Kr={normal:wd,gfm:ud,breaks:wE,pedantic:yE},xE={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"},Mp=t=>xE[t];function yt(t,e){if(e){if(Oe.escapeTest.test(t))return t.replace(Oe.escapeReplace,Mp)}else if(Oe.escapeTestNoEncode.test(t))return t.replace(Oe.escapeReplaceNoEncode,Mp);return t}function Lp(t){try{t=encodeURI(t).replace(Oe.percentDecode,"%")}catch{return null}return t}function Pp(t,e){let n=t.replace(Oe.findPipe,(i,s,a)=>{let l=!1,d=s;for(;--d>=0&&a[d]==="\\";)l=!l;return l?"|":" |"}),r=n.split(Oe.splitPipe),o=0;if(r[0].trim()||r.shift(),r.length>0&&!r.at(-1)?.trim()&&r.pop(),e)if(r.length>e)r.splice(e);else for(;r.length<e;)r.push("");for(;o<r.length;o++)r[o]=r[o].trim().replace(Oe.slashPipe,"|");return r}function zt(t,e,n){let r=t.length;if(r===0)return"";let o=0;for(;o<r;){let i=t.charAt(r-o-1);if(i===e&&!n)o++;else if(i!==e&&n)o++;else break}return t.slice(0,r-o)}function Dp(t){let e=t.split(`
`),n=e.length-1;for(;n>=0&&Oe.blankLine.test(e[n]);)n--;return e.length-n<=2?t:e.slice(0,n+1).join(`
`)}function EE(t,e){if(t.indexOf(e[1])===-1)return-1;let n=0;for(let r=0;r<t.length;r++)if(t[r]==="\\")r++;else if(t[r]===e[0])n++;else if(t[r]===e[1]&&(n--,n<0))return r;return n>0?-2:-1}function TE(t,e=0){let n=e,r="";for(let o of t)if(o==="	"){let i=4-n%4;r+=" ".repeat(i),n+=i}else r+=o,n++;return r}function Up(t,e,n,r,o){let i=e.href,s=e.title||null,a=t[1].replace(o.other.outputLinkReplace,"$1"),l=t[0].charAt(0)==="!";r.state.inLink=!0;let d=r.state.linkEmitted,u=r.state.inRawBlock;r.state.linkEmitted=!1;let m=r.inlineTokens(a),w=r.state.linkEmitted;if(r.state.linkEmitted=d,r.state.inLink=!1,!l){if(w){r.state.inRawBlock=u;return}r.state.linkEmitted=!0}return{type:l?"image":"link",raw:n,href:i,title:s,text:a,tokens:m}}function _E(t,e,n){let r=t.match(n.other.indentCodeCompensation);if(r===null)return e;let o=r[1];return e.split(`
`).map(i=>{let s=i.match(n.other.beginningSpace);if(s===null)return i;let[a]=s;return a.length>=o.length?i.slice(o.length):i}).join(`
`)}var Fs=class{options;rules;lexer;constructor(t){this.options=t||_n}space(t){let e=this.rules.block.newline.exec(t);if(e&&e[0].length>0)return{type:"space",raw:e[0]}}code(t){let e=this.rules.block.code.exec(t);if(e){let n=this.options.pedantic?e[0]:Dp(e[0]),r=n.replace(this.rules.other.codeRemoveIndent,"");return{type:"code",raw:n,codeBlockStyle:"indented",text:r}}}fences(t){let e=this.rules.block.fences.exec(t);if(e){let n=e[0],r=_E(n,e[3]||"",this.rules);return{type:"code",raw:n,lang:e[2]?e[2].trim().replace(this.rules.inline.anyPunctuation,"$1"):e[2],text:r}}}heading(t){let e=this.rules.block.heading.exec(t);if(e){let n=e[2].trim();if(this.rules.other.endingHash.test(n)){let r=zt(n,"#");(this.options.pedantic||!r||this.rules.other.endingSpaceChar.test(r))&&(n=r.trim())}return{type:"heading",raw:zt(e[0],`
`),depth:e[1].length,text:n,tokens:this.lexer.inline(n)}}}hr(t){let e=this.rules.block.hr.exec(t);if(e)return{type:"hr",raw:zt(e[0],`
`)}}blockquote(t){let e=this.rules.block.blockquote.exec(t);if(e){let n=zt(e[0],`
`).split(`
`),r="",o="",i=[];for(;n.length>0;){let s=!1,a=[],l;for(l=0;l<n.length;l++)if(this.rules.other.blockquoteStart.test(n[l]))a.push(n[l]),s=!0;else if(!s)a.push(n[l]);else break;n=n.slice(l);let d=a.join(`
`),u=d.replace(this.rules.other.blockquoteSetextReplace,`
    $1`).replace(this.rules.other.blockquoteSetextReplace2,"");r=r?`${r}
${d}`:d,o=o?`${o}
${u}`:u;let m=this.lexer.state.top;if(this.lexer.state.top=!0,this.lexer.blockTokens(u,i,!0),this.lexer.state.top=m,n.length===0)break;let w=i.at(-1);if(w?.type==="code")break;if(w?.type==="blockquote"){let p=w,h=n.join(`
`),v=p.raw+`
`+h.replace(this.rules.other.blockquoteSetextReplace2,""),x=this.blockquote(v);i[i.length-1]=x,r=`${r}
${h}`,o=o.substring(0,o.length-p.text.length)+x.text;break}else if(w?.type==="list"){let p=w,h=p.raw+`
`+n.join(`
`),v=this.list(h);i[i.length-1]=v,r=r.substring(0,r.length-w.raw.length)+v.raw,o=o.substring(0,o.length-p.raw.length)+v.raw,n=h.substring(i.at(-1).raw.length).split(`
`);continue}}return{type:"blockquote",raw:r,tokens:i,text:o}}}list(t){let e=this.rules.block.list.exec(t);if(e){let n=e[1].trim(),r=n.length>1,o={type:"list",raw:"",ordered:r,start:r?+n.slice(0,-1):"",loose:!1,items:[]};n=r?`\\d{1,9}\\${n.slice(-1)}`:`\\${n}`,this.options.pedantic&&(n=r?n:"[*+-]");let i=this.rules.other.listItemRegex(n),s=!1;for(;t;){let l=!1,d="",u="";if(!(e=i.exec(t))||this.rules.block.hr.test(t))break;d=e[0],t=t.substring(d.length);let m=TE(e[2].split(`
`,1)[0],e[1].length),w=t.split(`
`,1)[0],p=!m.trim(),h=0;if(this.options.pedantic?(h=2,u=m.trimStart()):p?h=e[1].length+1:(h=m.search(this.rules.other.nonSpaceChar),h=h>4?1:h,u=m.slice(h),h+=e[1].length),p&&this.rules.other.blankLine.test(w)&&(d+=w+`
`,t=t.substring(w.length+1),l=!0),!l){let v=this.rules.other.nextBulletRegex(h),x=this.rules.other.hrRegex(h),S=this.rules.other.fencesBeginRegex(h),_=this.rules.other.headingBeginRegex(h),O=this.rules.other.htmlBeginRegex(h),G=this.rules.other.blockquoteBeginRegex(h);for(;t;){let b=t.split(`
`,1)[0],A;if(w=b,this.options.pedantic?(w=w.replace(this.rules.other.listReplaceNesting,"  "),A=w):A=w.replace(this.rules.other.tabCharGlobal,"    "),S.test(w)||_.test(w)||O.test(w)||G.test(w)||v.test(w)||x.test(w))break;if(A.search(this.rules.other.nonSpaceChar)>=h||!w.trim())u+=`
`+A.slice(h);else{if(p||m.replace(this.rules.other.tabCharGlobal,"    ").search(this.rules.other.nonSpaceChar)>=4||S.test(m)||_.test(m)||x.test(m))break;u+=`
`+w}p=!w.trim(),d+=b+`
`,t=t.substring(b.length+1),m=A.slice(h)}}o.loose||(s?o.loose=!0:this.rules.other.doubleBlankLine.test(d)&&(s=!0)),o.items.push({type:"list_item",raw:d,task:!!this.options.gfm&&this.rules.other.listIsTask.test(u),loose:!1,text:u,tokens:[]}),o.raw+=d}let a=o.items.at(-1);if(a)a.raw=a.raw.trimEnd(),a.text=a.text.trimEnd();else return;o.raw=o.raw.trimEnd();for(let l of o.items)if(this.lexer.state.top=!1,l.tokens=this.lexer.blockTokens(l.text,[]),!o.loose){let d=l.tokens.filter(m=>m.type==="space"),u=d.length>0&&d.some(m=>this.rules.other.anyLine.test(m.raw));o.loose=u}for(let l of o.items){let d=l.tokens[0];if(l.task&&(d?.type==="text"||d?.type==="paragraph")){l.text=l.text.replace(this.rules.other.listReplaceTask,""),d.raw=d.raw.replace(this.rules.other.listReplaceTask,""),d.text=d.text.replace(this.rules.other.listReplaceTask,"");for(let m=this.lexer.inlineQueue.length-1;m>=0;m--)if(this.rules.other.listIsTask.test(this.lexer.inlineQueue[m].src)){this.lexer.inlineQueue[m].src=this.lexer.inlineQueue[m].src.replace(this.rules.other.listReplaceTask,"");break}let u=this.rules.other.listTaskCheckbox.exec(l.raw);if(u){let m={type:"checkbox",raw:u[0]+" ",checked:u[0]!=="[ ]"};l.checked=m.checked,o.loose?l.tokens[0]&&["paragraph","text"].includes(l.tokens[0].type)&&"tokens"in l.tokens[0]&&l.tokens[0].tokens?(l.tokens[0].raw=m.raw+l.tokens[0].raw,l.tokens[0].text=m.raw+l.tokens[0].text,l.tokens[0].tokens.unshift(m)):l.tokens.unshift({type:"paragraph",raw:m.raw,text:m.raw,tokens:[m]}):l.tokens.unshift(m)}}else l.task&&(l.task=!1)}if(o.loose)for(let l of o.items){l.loose=!0;for(let d of l.tokens)d.type==="text"&&(d.type="paragraph")}return o}}html(t){let e=this.rules.block.html.exec(t);if(e){let n=Dp(e[0]);return{type:"html",block:!0,raw:n,pre:e[1]==="pre"||e[1]==="script"||e[1]==="style",text:n}}}def(t){let e=this.rules.block.def.exec(t);if(e){let n=e[1].toLowerCase().replace(this.rules.other.multipleSpaceGlobal," "),r=e[2]?e[2].replace(this.rules.other.hrefBrackets,"$1").replace(this.rules.inline.anyPunctuation,"$1"):"",o=e[3]?e[3].substring(1,e[3].length-1).replace(this.rules.inline.anyPunctuation,"$1"):e[3];return{type:"def",tag:n,raw:zt(e[0],`
`),href:r,title:o}}}table(t){let e=this.rules.block.table.exec(t);if(!e||!this.rules.other.tableDelimiter.test(e[2]))return;let n=Pp(e[1]),r=e[2].replace(this.rules.other.tableAlignChars,"").split("|"),o=e[3]?.trim()?e[3].replace(this.rules.other.tableRowBlankLine,"").split(`
`):[],i={type:"table",raw:zt(e[0],`
`),header:[],align:[],rows:[]};if(n.length===r.length){for(let s of r)this.rules.other.tableAlignRight.test(s)?i.align.push("right"):this.rules.other.tableAlignCenter.test(s)?i.align.push("center"):this.rules.other.tableAlignLeft.test(s)?i.align.push("left"):i.align.push(null);for(let s=0;s<n.length;s++)i.header.push({text:n[s],tokens:this.lexer.inline(n[s]),header:!0,align:i.align[s]});for(let s of o)i.rows.push(Pp(s,i.header.length).map((a,l)=>({text:a,tokens:this.lexer.inline(a),header:!1,align:i.align[l]})));return i}}lheading(t){let e=this.rules.block.lheading.exec(t);if(e){let n=e[1].trim();return{type:"heading",raw:zt(e[0],`
`),depth:e[2].charAt(0)==="="?1:2,text:n,tokens:this.lexer.inline(n)}}}paragraph(t){let e=this.rules.block.paragraph.exec(t);if(e){let n=e[1].charAt(e[1].length-1)===`
`?e[1].slice(0,-1):e[1];return{type:"paragraph",raw:e[0],text:n,tokens:this.lexer.inline(n)}}}text(t){let e=this.rules.block.text.exec(t);if(e)return{type:"text",raw:e[0],text:e[0],tokens:this.lexer.inline(e[0])}}escape(t){let e=this.rules.inline.escape.exec(t);if(e)return{type:"escape",raw:e[0],text:e[1]}}tag(t){let e=this.rules.inline.tag.exec(t);if(e)return!this.lexer.state.inLink&&this.rules.other.startATag.test(e[0])?this.lexer.state.inLink=!0:this.lexer.state.inLink&&this.rules.other.endATag.test(e[0])&&(this.lexer.state.inLink=!1),!this.lexer.state.inRawBlock&&this.rules.other.startPreScriptTag.test(e[0])?this.lexer.state.inRawBlock=!0:this.lexer.state.inRawBlock&&this.rules.other.endPreScriptTag.test(e[0])&&(this.lexer.state.inRawBlock=!1),{type:"html",raw:e[0],inLink:this.lexer.state.inLink,inRawBlock:this.lexer.state.inRawBlock,block:!1,text:e[0]}}link(t){let e=this.rules.inline.link.exec(t);if(e){let n=e[2].trim();if(!this.options.pedantic&&this.rules.other.startAngleBracket.test(n)){if(!this.rules.other.endAngleBracket.test(n))return;let i=zt(n.slice(0,-1),"\\");if((n.length-i.length)%2===0)return}else{let i=EE(e[2],"()");if(i===-2)return;if(i>-1){let s=(e[0].indexOf("!")===0?5:4)+e[1].length+i;e[2]=e[2].substring(0,i),e[0]=e[0].substring(0,s).trim(),e[3]=""}}let r=e[2],o="";if(this.options.pedantic){let i=this.rules.other.pedanticHrefTitle.exec(r);i&&(r=i[1],o=i[3])}else o=e[3]?e[3].slice(1,-1):"";return r=r.trim(),this.rules.other.startAngleBracket.test(r)&&(this.options.pedantic&&!this.rules.other.endAngleBracket.test(n)?r=r.slice(1):r=r.slice(1,-1)),Up(e,{href:r&&r.replace(this.rules.inline.anyPunctuation,"$1"),title:o&&o.replace(this.rules.inline.anyPunctuation,"$1")},e[0],this.lexer,this.rules)}}reflink(t,e){let n;if((n=this.rules.inline.reflink.exec(t))||(n=this.rules.inline.nolink.exec(t))){let r=(n[2]||n[1]).replace(this.rules.other.multipleSpaceGlobal," "),o=e[r.toLowerCase()];if(!o){let i=n[0].charAt(0);return{type:"text",raw:i,text:i}}return Up(n,o,n[0],this.lexer,this.rules)}}emStrong(t,e,n=""){let r=this.rules.inline.emStrongLDelim.exec(t);if(!(!r||!r[1]&&!r[2]&&!r[3]&&!r[4]||r[4]&&n.match(this.rules.other.unicodeAlphaNumeric))&&(!(r[1]||r[3])||!n||this.rules.inline.punctuation.exec(n))){let o=[...r[0]].length-1,i,s,a=o,l=0,d=r[0][0],u=n===d,m=d==="*"?this.rules.inline.emStrongRDelimAst:this.rules.inline.emStrongRDelimUnd;for(m.lastIndex=0,e=e.slice(-1*t.length+o);(r=m.exec(e))!==null;){if(i=r[1]||r[2]||r[3]||r[4]||r[5]||r[6],!i)continue;if(s=[...i].length,r[3]||r[4]){a+=s;continue}else if(r[5]||r[6]){if(o%3&&!((o+s)%3)){l+=s;continue}if(u)break}if(a-=s,a>0)continue;s=Math.min(s,s+a+l);let w=[...r[0]][0].length,p=t.slice(0,o+r.index+w+s);if(Math.min(o,s)%2){let v=p.slice(1,-1);return{type:"em",raw:p,text:v,tokens:this.lexer.inlineTokens(v)}}let h=p.slice(2,-2);return{type:"strong",raw:p,text:h,tokens:this.lexer.inlineTokens(h)}}}}codespan(t){let e=this.rules.inline.code.exec(t);if(e){let n=e[2].replace(this.rules.other.newLineCharGlobal," "),r=this.rules.other.nonSpaceChar.test(n),o=this.rules.other.startingSpaceChar.test(n)&&this.rules.other.endingSpaceChar.test(n);return r&&o&&(n=n.substring(1,n.length-1)),{type:"codespan",raw:e[0],text:n}}}br(t){let e=this.rules.inline.br.exec(t);if(e)return{type:"br",raw:e[0]}}del(t,e,n=""){let r=this.rules.inline.delLDelim.exec(t);if(r&&(!r[1]||!n||this.rules.inline.punctuation.exec(n))){let o=[...r[0]].length-1,i,s,a=o,l=this.rules.inline.delRDelim;for(l.lastIndex=0,e=e.slice(-1*t.length+o);(r=l.exec(e))!==null;){if(i=r[1]||r[2]||r[3]||r[4]||r[5]||r[6],!i||(s=[...i].length,s!==o))continue;if(r[3]||r[4]){a+=s;continue}if(a-=s,a>0)continue;s=Math.min(s,s+a);let d=[...r[0]][0].length,u=t.slice(0,o+r.index+d+s),m=u.slice(o,-o);return{type:"del",raw:u,text:m,tokens:this.lexer.inlineTokens(m)}}}}autolink(t){let e=this.rules.inline.autolink.exec(t);if(e){let n,r;return e[2]==="@"?(n=e[1],r="mailto:"+n):(n=e[1],r=n),{type:"link",raw:e[0],text:n,href:r,tokens:[{type:"text",raw:n,text:n}]}}}url(t){let e;if(e=this.rules.inline.url.exec(t)){let n,r;if(e[2]==="@")n=e[0],r="mailto:"+n;else{let o;do o=e[0],e[0]=this.rules.inline._backpedal.exec(e[0])?.[0]??"";while(o!==e[0]);n=e[0],e[1]==="www."?r="http://"+e[0]:r=e[0]}return{type:"link",raw:e[0],text:n,href:r,tokens:[{type:"text",raw:n,text:n}]}}}inlineText(t){let e=this.rules.inline.text.exec(t);if(e){let n=this.lexer.state.inRawBlock;return{type:"text",raw:e[0],text:e[0],escaped:n}}}},st=class hd{tokens;options;state;inlineQueue;tokenizer;constructor(e){this.tokens=[],this.tokens.links=Object.create(null),this.options=e||_n,this.options.tokenizer=this.options.tokenizer||new Fs,this.tokenizer=this.options.tokenizer,this.tokenizer.options=this.options,this.tokenizer.lexer=this,this.inlineQueue=[],this.state={inLink:!1,inRawBlock:!1,linkEmitted:!1,top:!0};let n={other:Oe,block:Gs.normal,inline:Kr.normal};this.options.pedantic?(n.block=Gs.pedantic,n.inline=Kr.pedantic):this.options.gfm&&(n.block=Gs.gfm,this.options.breaks?n.inline=Kr.breaks:n.inline=Kr.gfm),this.tokenizer.rules=n}static get rules(){return{block:Gs,inline:Kr}}static lex(e,n){return new hd(n).lex(e)}static lexInline(e,n){return new hd(n).inlineTokens(e)}lex(e){e=e.replace(Oe.carriageReturn,`
`),this.blockTokens(e,this.tokens);for(let n=0;n<this.inlineQueue.length;n++){let r=this.inlineQueue[n];this.inlineTokens(r.src,r.tokens)}return this.inlineQueue=[],this.tokens}blockTokens(e,n=[],r=!1){this.tokenizer.lexer=this,this.options.pedantic&&(e=e.replace(Oe.tabCharGlobal,"    ").replace(Oe.spaceLine,""));let o=1/0;for(;e;){if(e.length<o)o=e.length;else{this.infiniteLoopError(e.charCodeAt(0));break}let i;if(this.options.extensions?.block?.some(a=>(i=a.call({lexer:this},e,n))?(e=e.substring(i.raw.length),n.push(i),!0):!1))continue;if(i=this.tokenizer.space(e)){e=e.substring(i.raw.length);let a=n.at(-1);i.raw.length===1&&a!==void 0?a.raw+=`
`:n.push(i);continue}if(i=this.tokenizer.code(e)){e=e.substring(i.raw.length);let a=n.at(-1);a?.type==="paragraph"||a?.type==="text"?(a.raw+=(a.raw.endsWith(`
`)?"":`
`)+i.raw,a.text+=`
`+i.text,this.inlineQueue.at(-1).src=a.text):n.push(i);continue}if(i=this.tokenizer.fences(e)){e=e.substring(i.raw.length),n.push(i);continue}if(i=this.tokenizer.heading(e)){e=e.substring(i.raw.length),n.push(i);continue}if(i=this.tokenizer.hr(e)){e=e.substring(i.raw.length),n.push(i);continue}if(i=this.tokenizer.blockquote(e)){e=e.substring(i.raw.length),n.push(i);continue}if(i=this.tokenizer.list(e)){e=e.substring(i.raw.length),n.push(i);continue}if(i=this.tokenizer.html(e)){e=e.substring(i.raw.length),n.push(i);continue}if(i=this.tokenizer.def(e)){e=e.substring(i.raw.length);let a=n.at(-1);a?.type==="paragraph"||a?.type==="text"?(a.raw+=(a.raw.endsWith(`
`)?"":`
`)+i.raw,a.text+=`
`+i.raw,this.inlineQueue.at(-1).src=a.text):this.tokens.links[i.tag]||(this.tokens.links[i.tag]={href:i.href,title:i.title},n.push(i));continue}if(i=this.tokenizer.table(e)){e=e.substring(i.raw.length),n.push(i);continue}if(i=this.tokenizer.lheading(e)){e=e.substring(i.raw.length),n.push(i);continue}let s=e;if(this.options.extensions?.startBlock){let a=1/0,l=e.slice(1),d;this.options.extensions.startBlock.forEach(u=>{d=u.call({lexer:this},l),typeof d=="number"&&d>=0&&(a=Math.min(a,d))}),a<1/0&&a>=0&&(s=e.substring(0,a+1))}if(this.state.top&&(i=this.tokenizer.paragraph(s))){let a=n.at(-1);r&&a?.type==="paragraph"?(a.raw+=(a.raw.endsWith(`
`)?"":`
`)+i.raw,a.text+=`
`+i.text,this.inlineQueue.pop(),this.inlineQueue.at(-1).src=a.text):n.push(i),r=s.length!==e.length,e=e.substring(i.raw.length);continue}if(i=this.tokenizer.text(e)){e=e.substring(i.raw.length);let a=n.at(-1);a?.type==="text"?(a.raw+=(a.raw.endsWith(`
`)?"":`
`)+i.raw,a.text+=`
`+i.text,this.inlineQueue.pop(),this.inlineQueue.at(-1).src=a.text):n.push(i);continue}if(e){this.infiniteLoopError(e.charCodeAt(0));break}}return this.state.top=!0,n}inline(e,n=[]){return this.inlineQueue.push({src:e,tokens:n}),n}linkInText(e){if(!e.includes("["))return!1;let n=this.tokenizer.rules.inline.link;for(let r of e.matchAll(this.tokenizer.rules.inline.blockSkip))if(n.test(r[0])&&e.charAt(r.index-1)!=="!")return!0;for(let r of e.matchAll(this.tokenizer.rules.inline.reflinkSearch)){let o=r[0],i=o.lastIndexOf("[");if(!(o.charAt(0)==="!"||!Object.hasOwn(this.tokens.links,o.slice(i+1,-1)))&&!(i>1&&this.linkInText(o.slice(1,i-1))))return!0}return!1}inlineTokens(e,n=[]){this.tokenizer.lexer=this;let r=e;if(this.tokens.links&&e.includes("[")){let a=this.tokenizer.rules.inline.reflinkSearch,l=d=>{let u=d.lastIndexOf("[");if(!Object.hasOwn(this.tokens.links,d.slice(u+1,-1)))return d;if(u>1&&d.charAt(0)!=="!"){let m=d.slice(1,u-1);if(this.linkInText(m))return"["+m.replace(a,l)+"]["+"a".repeat(d.length-u-2)+"]"}return"["+"a".repeat(d.length-2)+"]"};r=r.replace(a,l)}r=r.replace(this.tokenizer.rules.inline.anyPunctuation,a=>"+".repeat(a.length)),r=r.replace(this.tokenizer.rules.inline.blockSkip,(a,l,d)=>{let u=d?d.length:0;return a.slice(0,u)+"["+"a".repeat(a.length-u-2)+"]"}),r=this.options.hooks?.emStrongMask?.call({lexer:this},r)??r;let o=!1,i="",s=1/0;for(;e;){if(e.length<s)s=e.length;else{this.infiniteLoopError(e.charCodeAt(0));break}o||(i=""),o=!1;let a;if(this.options.extensions?.inline?.some(d=>(a=d.call({lexer:this},e,n))?(e=e.substring(a.raw.length),n.push(a),!0):!1))continue;if(a=this.tokenizer.escape(e)){e=e.substring(a.raw.length),n.push(a);continue}if(a=this.tokenizer.tag(e)){e=e.substring(a.raw.length),n.push(a);continue}if(a=this.tokenizer.link(e)){e=e.substring(a.raw.length),n.push(a);continue}if(a=this.tokenizer.reflink(e,this.tokens.links)){e=e.substring(a.raw.length);let d=n.at(-1);a.type==="text"&&d?.type==="text"?(d.raw+=a.raw,d.text+=a.text):n.push(a);continue}if(a=this.tokenizer.emStrong(e,r,i)){e=e.substring(a.raw.length),n.push(a);continue}if(a=this.tokenizer.codespan(e)){e=e.substring(a.raw.length),n.push(a);continue}if(a=this.tokenizer.br(e)){e=e.substring(a.raw.length),n.push(a);continue}if(a=this.tokenizer.del(e,r,i)){e=e.substring(a.raw.length),n.push(a);continue}if(a=this.tokenizer.autolink(e)){e=e.substring(a.raw.length),n.push(a);continue}if(!this.state.inLink&&(a=this.tokenizer.url(e))){e=e.substring(a.raw.length),n.push(a);continue}let l=e;if(this.options.extensions?.startInline){let d=1/0,u=e.slice(1),m;this.options.extensions.startInline.forEach(w=>{m=w.call({lexer:this},u),typeof m=="number"&&m>=0&&(d=Math.min(d,m))}),d<1/0&&d>=0&&(l=e.substring(0,d+1))}if(a=this.tokenizer.inlineText(l)){e=e.substring(a.raw.length),a.raw.slice(-1)!=="_"&&(i=a.raw.slice(-1)),o=!0;let d=n.at(-1);d?.type==="text"?(d.raw+=a.raw,d.text+=a.text):n.push(a);continue}if(e){this.infiniteLoopError(e.charCodeAt(0));break}}return n}infiniteLoopError(e){let n="Infinite loop on byte: "+e;if(this.options.silent)console.error(n);else throw new Error(n)}},$s=class{options;parser;constructor(t){this.options=t||_n}space(t){return""}code({text:t,lang:e,escaped:n}){let r=(e||"").match(Oe.notSpaceStart)?.[0],o=t.replace(Oe.endingNewline,"")+`
`;return r?'<pre><code class="language-'+yt(r)+'">'+(n?o:yt(o,!0))+`</code></pre>
`:"<pre><code>"+(n?o:yt(o,!0))+`</code></pre>
`}blockquote({tokens:t}){return`<blockquote>
${this.parser.parse(t)}</blockquote>
`}html({text:t}){return t}def(t){return""}heading({tokens:t,depth:e}){return`<h${e}>${this.parser.parseInline(t)}</h${e}>
`}hr(t){return`<hr>
`}list(t){let e=t.ordered,n=t.start,r="";for(let s=0;s<t.items.length;s++){let a=t.items[s];r+=this.listitem(a)}let o=e?"ol":"ul",i=e&&n!==1?' start="'+n+'"':"";return"<"+o+i+`>
`+r+"</"+o+`>
`}listitem(t){return`<li>${this.parser.parse(t.tokens)}</li>
`}checkbox({checked:t}){return"<input "+(t?'checked="" ':"")+'disabled="" type="checkbox"> '}paragraph({tokens:t}){return`<p>${this.parser.parseInline(t)}</p>
`}table(t){let e="",n="";for(let o=0;o<t.header.length;o++)n+=this.tablecell(t.header[o]);e+=this.tablerow({text:n});let r="";for(let o=0;o<t.rows.length;o++){let i=t.rows[o];n="";for(let s=0;s<i.length;s++)n+=this.tablecell(i[s]);r+=this.tablerow({text:n})}return r&&(r=`<tbody>${r}</tbody>`),`<table>
<thead>
`+e+`</thead>
`+r+`</table>
`}tablerow({text:t}){return`<tr>
${t}</tr>
`}tablecell(t){let e=this.parser.parseInline(t.tokens),n=t.header?"th":"td";return(t.align?`<${n} align="${t.align}">`:`<${n}>`)+e+`</${n}>
`}strong({tokens:t}){return`<strong>${this.parser.parseInline(t)}</strong>`}em({tokens:t}){return`<em>${this.parser.parseInline(t)}</em>`}codespan({text:t}){return`<code>${yt(t,!0)}</code>`}br(t){return"<br>"}del({tokens:t}){return`<del>${this.parser.parseInline(t)}</del>`}link({href:t,title:e,tokens:n}){let r=this.parser.parseInline(n),o=Lp(t);if(o===null)return r;t=o;let i='<a href="'+t+'"';return e&&(i+=' title="'+yt(e)+'"'),i+=">"+r+"</a>",i}image({href:t,title:e,text:n,tokens:r}){r&&(n=this.parser.parseInline(r,this.parser.textRenderer));let o=Lp(t);if(o===null)return yt(n);t=o;let i=`<img src="${t}" alt="${yt(n)}"`;return e&&(i+=` title="${yt(e)}"`),i+=">",i}text(t){return"tokens"in t&&t.tokens?this.parser.parseInline(t.tokens):"escaped"in t&&t.escaped?t.text:yt(t.text)}},xd=class{strong({text:t}){return t}em({text:t}){return t}codespan({text:t}){return t}del({text:t}){return t}html({text:t}){return t}text({text:t}){return t}link({text:t}){return""+t}image({text:t}){return""+t}br(){return""}checkbox({raw:t}){return t}},at=class pd{options;renderer;textRenderer;constructor(e){this.options=e||_n,this.options.renderer=this.options.renderer||new $s,this.renderer=this.options.renderer,this.renderer.options=this.options,this.renderer.parser=this,this.textRenderer=new xd}static parse(e,n){return new pd(n).parse(e)}static parseInline(e,n){return new pd(n).parseInline(e)}parse(e){this.renderer.parser=this;let n="";for(let r=0;r<e.length;r++){let o=e[r];if(this.options.extensions?.renderers?.[o.type]){let s=o,a=this.options.extensions.renderers[s.type].call({parser:this},s);if(a!==!1||!["space","hr","heading","code","table","blockquote","list","checkbox","html","def","paragraph","text"].includes(s.type)){n+=a||"";continue}}let i=o;switch(i.type){case"space":{n+=this.renderer.space(i);break}case"hr":{n+=this.renderer.hr(i);break}case"heading":{n+=this.renderer.heading(i);break}case"code":{n+=this.renderer.code(i);break}case"table":{n+=this.renderer.table(i);break}case"blockquote":{n+=this.renderer.blockquote(i);break}case"list":{n+=this.renderer.list(i);break}case"checkbox":{n+=this.renderer.checkbox(i);break}case"html":{n+=this.renderer.html(i);break}case"def":{n+=this.renderer.def(i);break}case"paragraph":{n+=this.renderer.paragraph(i);break}case"text":{n+=this.renderer.text(i);break}default:{let s='Token with "'+i.type+'" type was not found.';if(this.options.silent)return console.error(s),"";throw new Error(s)}}}return n}parseInline(e,n=this.renderer){this.renderer.parser=this;let r="";for(let o=0;o<e.length;o++){let i=e[o];if(this.options.extensions?.renderers?.[i.type]){let a=this.options.extensions.renderers[i.type].call({parser:this},i);if(a!==!1||!["escape","html","link","image","checkbox","strong","em","codespan","br","del","text"].includes(i.type)){r+=a||"";continue}}let s=i;switch(s.type){case"escape":{r+=n.text(s);break}case"html":{r+=n.html(s);break}case"link":{r+=n.link(s);break}case"image":{r+=n.image(s);break}case"checkbox":{r+=n.checkbox(s);break}case"strong":{r+=n.strong(s);break}case"em":{r+=n.em(s);break}case"codespan":{r+=n.codespan(s);break}case"br":{r+=n.br(s);break}case"del":{r+=n.del(s);break}case"text":{r+=n.text(s);break}default:{let a='Token with "'+s.type+'" type was not found.';if(this.options.silent)return console.error(a),"";throw new Error(a)}}}return r}},Zr=class{options;block;constructor(t){this.options=t||_n}static passThroughHooks=new Set(["preprocess","postprocess","processAllTokens","emStrongMask"]);static passThroughHooksRespectAsync=new Set(["preprocess","postprocess","processAllTokens"]);preprocess(t){return t}postprocess(t){return t}processAllTokens(t){return t}emStrongMask(t){return t}provideLexer(t=this.block){return t?st.lex:st.lexInline}provideParser(t=this.block){return t?at.parse:at.parseInline}},Ed=class{defaults=fd();options=this.setOptions;parse=this.parseMarkdown(!0);parseInline=this.parseMarkdown(!1);Parser=at;Renderer=$s;TextRenderer=xd;Lexer=st;Tokenizer=Fs;Hooks=Zr;constructor(...t){this.use(...t)}walkTokens(t,e){let n=[];for(let r of t)switch(n=n.concat(e.call(this,r)),r.type){case"table":{let o=r;for(let i of o.header)n=n.concat(this.walkTokens(i.tokens,e));for(let i of o.rows)for(let s of i)n=n.concat(this.walkTokens(s.tokens,e));break}case"list":{let o=r;n=n.concat(this.walkTokens(o.items,e));break}default:{let o=r;this.defaults.extensions?.childTokens?.[o.type]?this.defaults.extensions.childTokens[o.type].forEach(i=>{let s=o[i].flat(1/0);n=n.concat(this.walkTokens(s,e))}):o.tokens&&(n=n.concat(this.walkTokens(o.tokens,e)))}}return n}use(...t){let e=this.defaults.extensions||{renderers:{},childTokens:{}};return t.forEach(n=>{let r={...n};if(r.async=this.defaults.async||r.async||!1,n.extensions&&(n.extensions.forEach(o=>{if(!o.name)throw new Error("extension name required");if("renderer"in o){let i=e.renderers[o.name];i?e.renderers[o.name]=function(...s){let a=o.renderer.apply(this,s);return a===!1&&(a=i.apply(this,s)),a}:e.renderers[o.name]=o.renderer}if("tokenizer"in o){if(!o.level||o.level!=="block"&&o.level!=="inline")throw new Error("extension level must be 'block' or 'inline'");let i=e[o.level];i?i.unshift(o.tokenizer):e[o.level]=[o.tokenizer],o.start&&(o.level==="block"?e.startBlock?e.startBlock.push(o.start):e.startBlock=[o.start]:o.level==="inline"&&(e.startInline?e.startInline.push(o.start):e.startInline=[o.start]))}"childTokens"in o&&o.childTokens&&(e.childTokens[o.name]=o.childTokens)}),r.extensions=e),n.renderer){let o=this.defaults.renderer||new $s(this.defaults);for(let i in n.renderer){if(!(i in o))throw new Error(`renderer '${i}' does not exist`);if(["options","parser"].includes(i))continue;let s=i,a=n.renderer[s],l=o[s];o[s]=(...d)=>{let u=a.apply(o,d);return u===!1&&(u=l.apply(o,d)),u||""}}r.renderer=o}if(n.tokenizer){let o=this.defaults.tokenizer||new Fs(this.defaults);for(let i in n.tokenizer){if(!(i in o))throw new Error(`tokenizer '${i}' does not exist`);if(["options","rules","lexer"].includes(i))continue;let s=i,a=n.tokenizer[s],l=o[s];o[s]=(...d)=>{let u=a.apply(o,d);return u===!1&&(u=l.apply(o,d)),u}}r.tokenizer=o}if(n.hooks){let o=this.defaults.hooks||new Zr;for(let i in n.hooks){if(!(i in o))throw new Error(`hook '${i}' does not exist`);if(["options","block"].includes(i))continue;let s=i,a=n.hooks[s],l=o[s];Zr.passThroughHooks.has(i)?o[s]=d=>{if(this.defaults.async&&Zr.passThroughHooksRespectAsync.has(i))return(async()=>{let m=await a.call(o,d);return l.call(o,m)})();let u=a.call(o,d);return l.call(o,u)}:o[s]=(...d)=>{if(this.defaults.async)return(async()=>{let m=await a.apply(o,d);return m===!1&&(m=await l.apply(o,d)),m})();let u=a.apply(o,d);return u===!1&&(u=l.apply(o,d)),u}}r.hooks=o}if(n.walkTokens){let o=this.defaults.walkTokens,i=n.walkTokens;r.walkTokens=function(s){let a=[];return a.push(i.call(this,s)),o&&(a=a.concat(o.call(this,s))),a}}this.defaults={...this.defaults,...r}}),this}setOptions(t){return this.defaults={...this.defaults,...t},this}lexer(t,e){return st.lex(t,e??this.defaults)}parser(t,e){return at.parse(t,e??this.defaults)}parseMarkdown(t){return(e,n)=>{let r={...n},o={...this.defaults,...r},i=this.onError(!!o.silent,!!o.async);if(this.defaults.async===!0&&r.async===!1)return i(new Error("marked(): The async option was set to true by an extension. Remove async: false from the parse options object to return a Promise."));if(typeof e>"u"||e===null)return i(new Error("marked(): input parameter is undefined or null"));if(typeof e!="string")return i(new Error("marked(): input parameter is of type "+Object.prototype.toString.call(e)+", string expected"));if(o.hooks&&(o.hooks.options=o,o.hooks.block=t),o.async)return(async()=>{let s=o.hooks?await o.hooks.preprocess(e):e,a=await(o.hooks?await o.hooks.provideLexer(t):t?st.lex:st.lexInline)(s,o),l=o.hooks?await o.hooks.processAllTokens(a):a;o.walkTokens&&await Promise.all(this.walkTokens(l,o.walkTokens));let d=await(o.hooks?await o.hooks.provideParser(t):t?at.parse:at.parseInline)(l,o);return o.hooks?await o.hooks.postprocess(d):d})().catch(i);try{o.hooks&&(e=o.hooks.preprocess(e));let s=(o.hooks?o.hooks.provideLexer(t):t?st.lex:st.lexInline)(e,o);o.hooks&&(s=o.hooks.processAllTokens(s)),o.walkTokens&&this.walkTokens(s,o.walkTokens);let a=(o.hooks?o.hooks.provideParser(t):t?at.parse:at.parseInline)(s,o);return o.hooks&&(a=o.hooks.postprocess(a)),a}catch(s){return i(s)}}}onError(t,e){return n=>{if(n.message+=`
Please report this to https://github.com/markedjs/marked.`,t){let r="<p>An error occurred:</p><pre>"+yt(n.message+"",!0)+"</pre>";return e?Promise.resolve(r):r}if(e)return Promise.reject(n);throw n}}},Tn=new Ed;function ie(t,e){return Tn.parse(t,e)}ie.options=ie.setOptions=function(t){return Tn.setOptions(t),ie.defaults=Tn.defaults,Hp(ie.defaults),ie};ie.getDefaults=fd;ie.defaults=_n;function SE(...t){return Tn.use(...t),ie.defaults=Tn.defaults,Hp(ie.defaults),ie}ie.use=SE;ie.walkTokens=function(t,e){return Tn.walkTokens(t,e)};ie.parseInline=Tn.parseInline;ie.Parser=at;ie.parser=at.parse;ie.Renderer=$s;ie.TextRenderer=xd;ie.Lexer=st;ie.lexer=st.lex;ie.Tokenizer=Fs;ie.Hooks=Zr;ie.parse=ie;var rN=ie.options,oN=ie.setOptions,iN=ie.walkTokens,sN=ie.parseInline;var aN=at.parse,lN=st.lex;var AE=new Ed({gfm:!0,breaks:!0}),Xp=["a","p","br","strong","em","b","i","u","s","del","code","pre","ul","ol","li","blockquote","h1","h2","h3","h4","h5","h6","hr","span","table","thead","tbody","tr","th","td"],Yp=["href","title","class","target","rel"],Kp={ALLOWED_TAGS:Xp,ALLOWED_ATTR:Yp,ALLOW_DATA_ATTR:!1,ALLOW_ARIA_ATTR:!1},kE={...Kp,ALLOWED_TAGS:[...Xp,"img"],ALLOWED_ATTR:[...Yp,"src","alt","width","height"]},RE=/^language-[A-Za-z0-9_+#.-]+$/,IE=new Set(["CODE","PRE"]);function CE(t){t.nodeName==="A"&&t.hasAttribute("href")?(t.setAttribute("target","_blank"),t.setAttribute("rel","noopener noreferrer")):(t.removeAttribute("target"),t.removeAttribute("rel"));let e=t.getAttribute("class");if(e===null)return;let n=IE.has(t.nodeName)?e.split(/\s+/).filter(r=>RE.test(r)):[];if(n.length===0){t.removeAttribute("class");return}t.setAttribute("class",n.join(" "))}var js=null;function NE(){return js===null&&(js=Cp(),js.addHook("afterSanitizeAttributes",CE)),js}function eo(t,e){let n=e?.allowImages===!0,r=AE.parse(t,{async:!1});return NE().sanitize(r,n?kE:Kp).trim()}var Vs=class{#e;#t=null;#n=0;#o="";#r=null;constructor(e){this.#e=e}get deltas(){return this.#n}countDelta(){this.#n+=1}queue(e){this.#o=e,this.#i(),this.#r===null&&(this.#r=requestAnimationFrame(()=>{this.#r=null,this.into(this.#o)}))}into(e){this.#r!==null&&(cancelAnimationFrame(this.#r),this.#r=null),this.#o=e;let n=this.#i();return n.innerHTML=eo(e,{allowImages:this.#e.allowImages()}),this.#e.follow(),n}end(){this.#r!==null&&this.into(this.#o),this.#t=null}#i(){return this.#t===null&&(this.#t=this.#e.openBubble(),this.#n=0),this.#t}};var OE=4,ME=120;function Zp(t){if(typeof t!="object"||t===null)return null;let e=t.prompts;if(!Array.isArray(e))return null;let n=e.filter(r=>typeof r=="string").map(r=>r.trim()).filter(r=>r!==""&&r.length<=120).slice(0,4);return n.length===0?null:n}function to(t,e,n){let r=Zp(t);if(r===null)return null;let o=document.createElement("div");o.className="suggestions",o.setAttribute("part","suggestions"),o.setAttribute("role","group"),o.setAttribute("aria-label",e.suggestions);for(let i of r){let s=document.createElement("button");s.type="button",s.className="suggestion-chip",s.setAttribute("part","suggestion-chip"),s.textContent=i,s.addEventListener("click",()=>n(i)),o.appendChild(s)}return o}function Qp(t,e,n){let r=t.getAttribute("data-starters");if(r===null)return null;let o;try{o=JSON.parse(r)}catch{return console.warn(`<ag-ui-chat>: data-starters is not valid JSON, so no starters are shown. It takes an array of strings, e.g. data-starters='["Summarise this page"]'.`),null}return to({prompts:o},e,n)}function qs(t,e){for(let n of Array.from(t.querySelectorAll("pre"))){let r=n.querySelector("code");r===null||n.querySelector(".code-copy")!==null||(n.classList.add("has-copy"),n.append(LE(r,e)))}}function LE(t,e){let n=t.textContent,r=document.createElement("button");return r.type="button",r.className="code-copy",r.setAttribute("part","code-copy"),r.textContent=e.copyCode,r.title=e.copyCode,r.setAttribute("aria-label",e.copyCode),r.addEventListener("click",()=>{PE(n).then(o=>{DE(r,o?e.copied:e.copyFailed,e)})}),r}async function PE(t){let e=navigator.clipboard;if(e===void 0)return!1;try{return await e.writeText(t),!0}catch{return!1}}function DE(t,e,n){t.textContent=e,t.dataset.state=e===n.copied?"copied":"failed",setTimeout(()=>{t.textContent=n.copyCode,delete t.dataset.state},1500)}function Td(t){let e=t.replace(/[._-]+/g," ").trim();return e===""?t:e.charAt(0).toUpperCase()+e.slice(1)}var Ws=class{element;#e;#t;#n;#o;#r=!1;constructor(e=le){this.#o=e,this.element=document.createElement("div"),this.element.className="thoughts",this.element.setAttribute("part","thoughts"),this.element.setAttribute("data-streaming",""),this.#n=document.createElement("button"),this.#n.type="button",this.#n.className="thoughts-toggle",this.#n.setAttribute("part","thoughts-toggle"),this.#n.setAttribute("aria-expanded","true"),this.#e=document.createElement("span"),this.#e.className="thoughts-label",this.#e.setAttribute("part","thoughts-label"),this.#e.textContent=e.thinking,this.#n.append(this.#e),this.#t=document.createElement("pre"),this.#t.className="thoughts-body",this.#t.setAttribute("part","thoughts-body"),this.#n.addEventListener("click",()=>{this.#i(!this.#r)}),this.element.append(this.#n,this.#t)}stream(e){this.#t.textContent=e}collapse(){this.#r||(this.element.removeAttribute("data-streaming"),this.#e.textContent=this.#o.thoughts,this.#i(!0))}#i(e){this.#r=e,this.#t.hidden=e,this.#n.setAttribute("aria-expanded",String(!e))}};function Xs(t,e){try{return t()}catch(n){return console.warn(`ag-ui-chat: render failed for ${e}`,n),null}}function Jp(t,e){for(let n of Array.from(t.childNodes))n.nodeType===Node.TEXT_NODE?e.push({node:n,parent:t}):Jp(n,e)}function ef(t){let e=[];Jp(t,e);let n=0;for(let{node:r,parent:o}of e){let i=document.createDocumentFragment();for(let s of r.data.split(/(\s+)/)){if(s==="")continue;if(/\s/.test(s)){i.appendChild(document.createTextNode(s));continue}let a=document.createElement("span");a.className="word",a.style.setProperty("--ag-ui-word-index",String(n)),a.textContent=s,i.appendChild(a),n+=1}o.replaceChild(i,r)}}function tf({viewport:t,onMissedContent:e}){let n=!0,r=!1,o=()=>t.scrollHeight-t.scrollTop-t.clientHeight<=4,i=u=>{u!==r&&(r=u,e(r))},s=()=>{t.scrollTop=t.scrollHeight},a=()=>{n=o(),n&&i(!1)},l=()=>{if(n){s();return}i(!0)};t.addEventListener("scroll",a,{passive:!0});let d=new ResizeObserver(()=>{n&&s()});return d.observe(t),{follow:l,jump:()=>{n=!0,i(!1),s()},following:()=>n,dispose:()=>{t.removeEventListener("scroll",a),d.disconnect()}}}var Ys=class{#e;#t=new Map;#n=new Map;#o=new Set;#r;#i=null;#s=null;#a=null;constructor(e){this.#e=e}mountScroller(e,n){e.addEventListener("click",()=>{this.jump()},{signal:n}),this.#r=tf({viewport:this.#e.messages,onMissedContent:r=>{e.dataset.missed=String(r)}})}disposeScroller(){this.#r.dispose()}follow(){this.#r.follow()}jump(){this.#r.jump()}isEmpty(){return!this.#e.emptyWrap.hidden}card(e){return this.#t.get(e)}cards(){return this.#t.values()}forgetCard(e){this.#t.delete(e)}setCardElement(e,n){this.#n.set(e,n)}markServerSettled(e){this.#o.add(e)}isServerSettled(e){return this.#o.has(e)}collapseThoughts(){this.#a?.collapse()}closeGroup(){this.#s!==null&&this.#s.childElementCount===0&&(this.#s.remove(),this.updateEmptyState()),this.#s=null,this.#a=null}releaseTurn(){this.#s=null,this.#a=null,this.hidePending(),this.#t.clear()}forgetCards(){this.#o.clear(),this.#n.clear()}empty(){this.#e.messages.replaceChildren(this.#e.emptyWrap),this.updateEmptyState()}append(e,n){let r=document.createElement("div");return r.className=`message message--${e}`,r.setAttribute("part",`message message-${e}`),e===Le.ASSISTANT?(r.innerHTML=eo(n,{allowImages:this.#e.allowImages()}),qs(r,this.#e.strings()),this.ensureGroup().appendChild(r)):(this.#s=null,r.textContent=n,this.#e.messages.appendChild(r)),this.updateEmptyState(),e===Le.USER?this.jump():this.follow(),r}ensureGroup(){if(this.#s===null){let e=document.createElement("div");e.className="answer",e.setAttribute("part","answer"),this.#s=e,this.#e.messages.appendChild(e),this.updateEmptyState()}return this.#s}revealWords(e){this.#e.element.getAttribute("data-text-animation")==="word"&&ef(e)}updateEmptyState(){this.#e.emptyWrap.hidden=this.#e.messages.childElementCount>1,this.#e.element.toggleAttribute("data-empty",!this.#e.emptyWrap.hidden)}appendStoppedNote(){let e=document.createElement("div");e.className="stopped-note",e.setAttribute("part","stopped"),e.setAttribute("role","status"),e.textContent=this.#e.strings().stopped,this.ensureGroup().appendChild(e),this.updateEmptyState(),this.follow()}showPending(){if(this.#i!==null)return;let e=document.createElement("div");e.className="pending",e.setAttribute("part","pending"),e.setAttribute("role","status"),e.setAttribute("aria-label",this.#e.strings().thinking);for(let n=0;n<3;n+=1){let r=document.createElement("span");r.className="pending-dot",e.appendChild(r)}this.#i=e,this.ensureGroup().appendChild(e),this.updateEmptyState(),this.follow()}hidePending(){this.#i?.remove(),this.#i=null}showThoughts(){if(this.#a===null){this.#a=new Ws(this.#e.strings());let e=this.ensureGroup();e.insertBefore(this.#a.element,e.firstChild),this.updateEmptyState(),this.follow()}return this.#a}noticeIfSkillLoad(e){let n=cs(e);return n===null?!1:(this.appendNotice("\u2728",oe(this.#e.strings().usingSkill,{name:n}),"skill"),!0)}appendNotice(e,n,r,o){this.ensureGroup().appendChild(Is(e,n,r,o)),this.updateEmptyState(),this.follow()}renderToolOutput(e,n){let r=Xs(()=>e(n.args),`tool ${n.name}`);r!==null&&(this.#n.get(n.id)?.after(r),this.afterGrew())}afterGrew(){this.updateEmptyState(),this.follow()}cardFor(e){let n=this.#t.get(e.id);if(n!==void 0)return n;let r=this.#e.resolveTool(e.name)?.parameters[xe],o=typeof r=="string"?r:this.#e.toolSummaries()[e.name]??this.#e.serverSummary(e.name)??Td(e.name),i=new jr(e.name,e.args,o,this.#e.strings(),{formatPayload:s=>this.#e.formatToolPayload(s)});return this.#t.set(e.id,i),this.ensureGroup().appendChild(i.element),this.updateEmptyState(),this.follow(),i}};var Ks=class{#e;#t=new Map;#n=new Set;#o=new Map;constructor(e){this.#e=e}register(e){this.#t.set(e.type,e),this.#n.delete(e.type)}has(e){return this.#t.has(e)}unhandledTypes(){return[...this.#n]}clearBlocks(){this.#o.clear()}draw(e,n,r){let o=this.#t.get(n);if(o===void 0){this.#n.add(n);return}let i=Xs(()=>o.render(r),`activity ${n}`);if(i===null){this.#r(e,n,o.removedNotice,r);return}let s=this.#o.get(e);s===void 0?this.#e.ensureGroup().appendChild(i):s.replaceWith(i),this.#o.set(e,i),this.#e.afterTranscriptGrew()}#r(e,n,r,o){let i=this.#o.has(e);this.#o.get(e)?.remove(),this.#o.delete(e),console.warn(`ag-ui-chat: activity ${e} (${n}) was not drawable and has been removed. A chart's points must each be a finite JSON number; a numeric column serialised as a string (a Decimal, typically) is rejected rather than coerced.`,o),i&&r!==void 0&&this.#e.appendNotice("\u{1F4C9}",r,"chart-undrawable")}};var Zs=class extends Error{constructor(e){super(e),this.name="ConnectionLostError"}},no=class{#e;#t;#n;#o;#r;#i;#s;#a=new Set;#d=new Map;#u;#c;#p;#l;#h=!1;constructor(e){this.#e=e.agent,this.#t=e.handlers,this.#n=e.getTools??(()=>[]),this.#o=e.getContext??(()=>[]),this.#r=e.executeTool??null,this.#i=e.resolveInterrupts??null,this.#s=e.onPersist??(()=>{}),this.#u=e.connectionLostMessage??"Connection lost",this.#c=e.unfinishedMessage??"Not finished: the run ended or moved on before this tool call returned a result.",this.#p=e.declinedMessage??"User declined the action.";let n=e.maxToolRounds??Mn;this.#l=n>=1?Math.floor(n):Mn,this.#g();let r=e.onStateChanged;r!==void 0&&this.#e.subscribe({onStateChanged:({state:o})=>{r(o)}})}get state(){return this.#e.state}setState(e){this.#e.setState({...e})}get running(){return this.#e.isRunning}get messages(){return this.#e.messages}async send(e,n=[]){let r={id:be(),role:"user",content:e};n.length>0&&(r.attachments=n),this.#e.addMessage(r),this.#y(),await this.#m()}truncateToLastUser(){let e=[...this.#e.messages],n=-1;for(let[o,i]of e.entries())i.role==="user"&&(n=o);if(n===-1)return null;let r=e.slice(0,n+1);return this.#e.setMessages(r),this.#y(),r}async resume(){await this.#m()}addToolResult(e,n){this.#e.addMessage({id:be(),role:"tool",content:n,toolCallId:e}),this.#y()}cancel(){this.#h=!0,this.#e.abortRun()}async#m(){this.#h=!1;try{await this.#x(),this.#h&&this.#b()}catch(e){this.#h||UE(e)?this.#b():this.#t.onError(e instanceof Error?e.message:String(e))}finally{this.#t.onSettled()}}#b(){this.#y(),this.#t.onCancelled()}#g(){let e=this.#e.messages;e.some(n=>"outcome"in n)&&this.#e.setMessages(e.map(n=>{if(n.role!=="tool")return n;let{outcome:r,...o}=n;return this.#d.set(n.toolCallId,r),o}))}#w(e){let n=this.#e.messages,r=ls(n,o=>(this.#d.set(o,Pe.INTERRUPTED),{id:be(),role:"tool",content:this.#c,toolCallId:o}),e);r!==n&&(this.#e.setMessages([...r]),this.#y())}#f(e,n){for(let r of e){let o=r.toolCallId;o!==void 0&&n[r.id]?.status==="cancelled"&&(this.#d.set(o,Pe.DENIED),this.#e.addMessage({id:be(),role:"tool",content:this.#p,toolCallId:o}))}this.#y()}#y(){this.#s(this.annotatedMessages)}get annotatedMessages(){let e=this.#e.messages;return this.#d.size===0?e:e.map(n=>{if(n.role!=="tool")return n;let r=this.#d.get(n.toolCallId);return r===void 0?n:{...n,outcome:r}})}async#x(){let e,n=new Set;for(let r=0;r<this.#l;r+=1){if(this.#h)return;let o=[],i={terminal:!1,errored:!1,interrupts:[]},s={tools:this.#n(),context:this.#o()};if(e!==void 0&&(s.resume=e),this.#w(n),await this.#e.runAgent(s,this.#_(o,i)),e=void 0,n=new Set,this.#y(),this.#h)return;if(!i.terminal)throw new Zs(this.#u);if(i.errored)return;if(i.interrupts.length>0){if(this.#i===null)return;let l=await this.#i(i.interrupts);if(this.#h){this.#f(i.interrupts,l);return}e=Oh(i.interrupts,l),n=new Set(i.interrupts.flatMap(({toolCallId:d})=>d??[]));continue}if(this.#r===null||o.length===0)return;let a=!1;for(let l of o){if(this.#h)return;let d=await this.#r(l);if(d!==null){if(d.halt===!0)return;d.outcome!==void 0&&this.#d.set(l.id,d.outcome),this.#e.addMessage({id:be(),role:"tool",content:d.content,toolCallId:l.id}),this.#y(),a=!0}}if(!a)return}}#_(e,n){let r=this.#t,o=this.#a,i=this.#d,s=()=>this.#h,a=new Set;return{onRunInitialized(){r.onRunStart()},onTextMessageStartEvent({event:l}){o.has(l.messageId)&&console.warn(`<ag-ui-chat>: the server reused message id "${l.messageId}", which was already closed. Its content will be appended to that earlier message rather than starting a new one, and the merged result is what gets persisted. Issue a fresh id per message.`)},onTextMessageContentEvent({textMessageBuffer:l}){r.onTextDelta(l)},onTextMessageEndEvent({event:l,textMessageBuffer:d}){o.add(l.messageId),r.onTextEnd(d)},onToolCallEndEvent({event:l,toolCallName:d,toolCallArgs:u}){let m={id:l.toolCallId,name:d,args:u};e.push(m),r.onToolCall(m)},onToolCallResultEvent({event:l}){let d=l.outcome;typeof d=="string"&&i.set(l.toolCallId,d),r.onToolResult(l.toolCallId,l.content,d)},onActivitySnapshotEvent({event:l,messages:d}){if(d.some(m=>m.id===l.messageId&&m.role==="activity")){r.onActivityChanged(l.messageId,l.activityType,l.content);return}r.onActivity(l.activityType,l.content,l.messageId)},onActivityDeltaEvent({event:l}){a.add(l.messageId)},onCustomEvent({event:l}){r.onCustomEvent(l.name,l.value)},onSubagentStartedEvent({event:l}){r.onSubAgentStarted(l.subagentRunId,l.name,l.parentToolCallId??null)},onSubagentFinishedEvent({event:l}){r.onSubAgentFinished(l.subagentRunId)},onSubagentErrorEvent({event:l}){r.onSubAgentError(l.subagentRunId,l.message)},onMessagesSnapshotEvent({event:l}){r.onMessagesSnapshot(l.messages)},onMessagesChanged({messages:l}){if(a.size!==0){for(let d of a){let u=l.find(m=>m.id===d);u!==void 0&&u.role==="activity"&&r.onActivityChanged(d,u.activityType,u.content)}a.clear()}},onReasoningStartEvent(){r.onReasoningStart()},onReasoningMessageContentEvent({reasoningMessageBuffer:l}){r.onReasoningDelta(l)},onReasoningMessageEndEvent({reasoningMessageBuffer:l}){r.onReasoningDelta(l)},onReasoningEndEvent(){r.onReasoningEnd()},onRunFinishedEvent(l){n.terminal=!0,l.outcome==="interrupt"&&(n.interrupts=l.interrupts)},onRunErrorEvent({event:l}){n.terminal=!0,n.errored=!0,!s()&&r.onError(l.message)},onRunFinalized(){n.terminal=!0,r.onRunEnd()}}}};function UE(t){return t instanceof Error?t.name==="AbortError"||t instanceof TypeError&&/abort/i.test(t.message):!1}var nf="ag-ui-chat",dr="thread",_d="threads",ro="messages:",Js="checkpoint:",oo="minted:",HE=60,GE=100,zE="New conversation",rf=!1;function lt(t,e){try{sessionStorage.setItem(t,e)}catch{if(rf)return;rf=!0,console.warn("<ag-ui-chat>: the browser refused a sessionStorage write \u2014 the quota is full, or storage is disabled for this context. The conversation continues, but it will not survive a page reload. Deleting a long conversation from the history drawer frees the quota.")}}function Qs(t){return t===""?nf:`${nf}@${t}`}var Xe=class t{#e;constructor(e=""){this.#e=Qs(e),e!==""&&t.adopt("",e)}static adopt(e,n){let r=`${Qs(e)}:`,o=`${Qs(n)}:`;for(let[i,s]of of(r)){let a=sessionStorage.getItem(i),l=o+s;a!==null&&sessionStorage.getItem(l)===null&&lt(l,a),sessionStorage.removeItem(i)}}static purge(e){for(let[n]of of(`${Qs(e)}:`))sessionStorage.removeItem(n)}threadId(){return sessionStorage.getItem(this.#r(dr))??this.newThread()}newThread(){let e=be();return lt(this.#r(dr),e),lt(this.#r(oo+e),"1"),e}isUnsent(e){return sessionStorage.getItem(this.#r(oo+e))!==null&&sessionStorage.getItem(this.#r(ro+e))===null}loadMessages(e){return Promise.resolve(this.#i(this.#r(ro+e)))}saveMessages(e,n){lt(this.#r(ro+e),JSON.stringify(n)),sessionStorage.removeItem(this.#r(oo+e)),this.#t(e,n)}loadCheckpoint(e){return this.#i(this.#r(Js+e))}saveCheckpoint(e,n){let r=this.#r(Js+e);if(n===null){sessionStorage.removeItem(r);return}lt(r,JSON.stringify(n))}clear(e){sessionStorage.removeItem(this.#r(ro+e)),sessionStorage.removeItem(this.#r(Js+e)),sessionStorage.removeItem(this.#r(oo+e)),this.#o(this.#n().filter(n=>n.threadId!==e)),sessionStorage.getItem(this.#r(dr))===e&&sessionStorage.removeItem(this.#r(dr))}listThreads(){let e=this.#n().sort((n,r)=>r.updatedAt-n.updatedAt).map(({threadId:n,title:r,updatedAt:o,preview:i})=>({threadId:n,title:r,updatedAt:o,preview:i}));return Promise.resolve(e)}setActiveThread(e){lt(this.#r(dr),e)}renameThread(e,n){let r=this.#n(),o=r.find(i=>i.threadId===e);o!==void 0&&(o.title=n,o.titleCustom=!0,this.#o(r))}#t(e,n){let r=this.#n(),o=r.find(a=>a.threadId===e),i=$E(n),s=Date.now();o===void 0?r.push({threadId:e,title:sf(n),titleCustom:!1,preview:i,updatedAt:s}):(o.preview=i,o.updatedAt=s,o.titleCustom||(o.title=sf(n))),this.#o(r)}#n(){return this.#i(this.#r(_d))??[]}#o(e){let n=this.#r(_d);if(e.length===0){sessionStorage.removeItem(n);return}lt(n,JSON.stringify(e))}#r(e){return`${this.#e}:${e}`}#i(e){let n=sessionStorage.getItem(e);if(n===null)return null;try{return JSON.parse(n)}catch{return null}}};function of(t){let e=[];for(let n=0;n<sessionStorage.length;n+=1){let r=sessionStorage.key(n);if(r===null||!r.startsWith(t))continue;let o=r.slice(t.length);FE(o)&&e.push([r,o])}return e}function FE(t){return t===dr||t===_d||t.startsWith(ro)||t.startsWith(Js)||t.startsWith(oo)}function sf(t){for(let e of t)if(e.role==="user"){let n=af(e.content);if(n!=="")return lf(n,HE)}return zE}function $E(t){for(let e of[...t].reverse()){let n=af(e.content);if(n!=="")return lf(n,GE)}return""}function af(t){return typeof t=="string"?t.replace(/\s+/g," ").trim():""}function lf(t,e){return t.length<=e?t:`${t.slice(0,e-1).trimEnd()}\u2026`}function Sd(t){let e=t.headers??{},n=new Set;return new Mh({url:t.endpoint,headers:e,initialState:{...t.initialState??{}},fetch:(r,o)=>{let i=t.getHeaders?.(),s=[...new Set([...Object.keys(e),...Object.keys(i??{})])].sort();if(as(r,s,t.trustedOrigins??[],n),i===void 0)return fetch(r,et(o,t.credentials));let a=new Headers(o?.headers);for(let[l,d]of Object.entries(i))a.set(l,d);return fetch(r,et({...o,headers:a},t.credentials))},...t.threadId!==void 0?{threadId:t.threadId}:{},...t.initialMessages!==void 0?{initialMessages:[...t.initialMessages]}:{}})}function df(t){let e=t.getAttribute("data-max-tool-rounds");return e===null?Mn:Number.parseInt(e,10)}var io=class{#e;#t;#n;#o;#r;#i=new Set;#s=new Map;constructor(e,n=()=>({}),r=new Xe,o=()=>{},i=!0){this.#e=e.endsWith("/")?e:`${e}/`,this.#t=n,this.#n=r,this.#o=o,this.#r=i}threadId(){return this.#n.threadId()}setActiveThread(e){this.#n.setActiveThread(e)}newThread(){return ss(this.#n)}isUnsent(e){return this.#n.isUnsent?.(e)===!0}saveMessages(e,n){this.#n.saveMessages(e,this.#r?n:[])}loadCheckpoint(e){return this.#n.loadCheckpoint(e)}saveCheckpoint(e,n){this.#n.saveCheckpoint(e,n)}renameThread(e,n){this.#n.renameThread(e,n),this.#s.set(e,n),this.#p(e,"PATCH",{title:n})}clear(e){this.#n.clear(e),this.#i.add(e),this.#p(e,"DELETE")}async listThreads(){let e=await this.#a();return e===null?this.#n.listThreads():e.filter(n=>!this.#i.has(n.thread_id)).map(n=>this.#u(n))}async loadMessages(e){if(this.#n.isUnsent?.(e)===!0)return null;let n=await this.#c(`${this.#e}${encodeURIComponent(e)}/`);if(n===null||!n.ok)return this.#n.loadMessages(e);let r=await this.#d(n);return r===null?this.#n.loadMessages(e):r.messages??null}async#a(){let e=await this.#c(this.#e);if(e===null||!e.ok)return null;let n=await this.#d(e);return n===null?null:n.threads??[]}async#d(e){try{return await e.json()}catch{return null}}#u(e){return{threadId:e.thread_id,title:this.#s.get(e.thread_id)??e.title,updatedAt:e.updated_at===null?Number.NaN:Date.parse(e.updated_at),preview:e.preview}}async#c(e){try{return await fetch(e,et({headers:this.#t()},this.#o()))}catch{return null}}async#p(e,n,r){let o=this.#t();try{await fetch(`${this.#e}${encodeURIComponent(e)}/`,et({method:n,headers:r===void 0?o:{...o,"content-type":"application/json"},body:r===void 0?null:JSON.stringify(r)},this.#o()))}catch{}}};function cf(){return{tools:[],serverSettled:new Set,invalidated:new Set,announcedOutcome:!1}}function BE(t,e){let n={};for(let[r,o]of Object.entries(t))n[r]=(...i)=>{e()&&o(...i)};return n}var ea=class{#e;#t=cf();constructor(e){this.#e=e}detach(){this.#t=cf()}forClient(){let e=this.#t,n=()=>e===this.#t,{onSettled:r,...o}=this.#n(e);return{...BE(o,n),onSettled:()=>{n()&&r(),this.#o(e)}}}#n(e){return{onRunStart:()=>{this.#e.running()||(e.announcedOutcome=!1,this.#e.announcer.announce(this.#e.strings().announceResponding)),this.#e.setRunning(!0),this.#e.transcript.ensureGroup(),this.#e.transcript.showPending()},onReasoningStart:()=>{this.#e.transcript.hidePending(),this.#e.transcript.showThoughts()},onReasoningDelta:n=>{this.#e.transcript.showThoughts().stream(n)},onReasoningEnd:()=>{},onTextDelta:n=>{this.#e.transcript.hidePending(),this.#e.transcript.collapseThoughts(),this.#e.stream.queue(n),this.#e.stream.countDelta()},onTextEnd:n=>{if(n===""){this.#e.stream.end();return}let r=this.#e.stream.into(n);this.#e.stream.deltas<=1&&this.#e.transcript.revealWords(r),qs(r,this.#e.strings()),this.#e.actions.attach(r),this.#e.stream.end(),this.#e.noteUnread()},onToolCall:n=>{this.#e.transcript.hidePending(),!this.#e.transcript.noticeIfSkillLoad(n)&&(e.tools.push({id:n.id,name:n.name}),this.#e.transcript.cardFor(n))},onActivity:(n,r,o)=>{this.#e.activities.draw(o,n,r)},onCustomEvent:(n,r)=>{if(n===Ia){this.#r(e,r);return}if(n===sc){this.#e.subagents.report(r);return}this.#e.element.dispatchEvent(new CustomEvent(Sa,{detail:{name:n,value:r},bubbles:!0,composed:!0}))},onSubAgentStarted:(n,r,o)=>{this.#e.subagents.start(n,r,o)},onSubAgentFinished:n=>{this.#e.subagents.finish(n)},onSubAgentError:(n,r)=>{this.#e.subagents.fail(n,r)},onMessagesSnapshot:()=>{this.#e.transcript.appendNotice("\u{1F504}",this.#e.strings().historyReplaced,"history-replaced")},onToolResult:(n,r,o)=>{let i=this.#e.transcript.card(n);i!==void 0&&(i.settle(Gr(o),r),this.#e.transcript.markServerSettled(n),e.serverSettled.add(n),this.#e.transcript.showPending())},onActivityChanged:(n,r,o)=>{this.#e.activities.draw(n,r,o)},onRunEnd:()=>{this.#e.transcript.hidePending(),this.#e.stream.end()},onError:n=>{e.announcedOutcome=!0,this.#e.announcer.announce(this.#e.strings().announceFailed),this.#e.transcript.hidePending();let r=this.#e.appendMessage(Le.ASSISTANT,`\u26A0\uFE0F ${n}`);r.classList.add("message--failed"),this.#e.actions.attach(r,{rateable:!1}),this.#e.transcript.revealWords(r),this.#e.stream.end()},onCancelled:()=>{e.announcedOutcome=!0,this.#e.announcer.announce(this.#e.strings().announceStopped),this.#e.transcript.hidePending(),this.#e.transcript.appendStoppedNote(),this.#e.stream.end()},onSettled:()=>{e.announcedOutcome||this.#e.announcer.announce(this.#e.strings().announceAnswerReady),this.#e.transcript.hidePending(),this.#e.setRunning(!1),this.#e.stream.end();for(let n of this.#e.transcript.cards())n.settled||n.settle(te.INTERRUPTED,this.#e.strings().callNotFinished);this.#e.transcript.closeGroup()}}}#o(e){let n=e.tools.map(({id:o,name:i})=>({name:i,side:e.serverSettled.has(o)?"server":"client"})),r=[...e.invalidated];e.tools.length=0,e.serverSettled.clear(),e.invalidated.clear(),this.#e.element.dispatchEvent(new CustomEvent(_a,{detail:{tools:n,invalidated:r},bubbles:!0,composed:!0}))}#r(e,n){let r=n??{},o=Array.isArray(r.keys)?r.keys.filter(i=>typeof i=="string"):[];if(o.length!==0){for(let i of o)e.invalidated.add(i);this.#e.element.dispatchEvent(new CustomEvent(Aa,{detail:{keys:o,reason:typeof r.reason=="string"?r.reason:null},bubbles:!0,composed:!0}))}}};var Ad=new Set,ta=class{#e;#t="";#n=null;#o="";#r="";#i=null;constructor(e){this.#e=e}claim(){this.#t=this.#s()}release(){this.#n!==null&&(Ad.delete(this.#n),this.#n=null)}conversationNamespace(e){return e===""?this.#t:`${this.#t}#${e}`}scopeStore(e,n){if(!(e instanceof Xe))return e;let r=this.conversationNamespace(n);return this.#i=r===""?e:new Xe(r),this.#i}rescopeStore(e){return this.#i===null?null:(this.#i=new Xe(e),this.#i)}key(e){return this.#t===""?e:`${e}:${this.#t}`}readScopedItem(e){let n=sessionStorage.getItem(this.key(e));return n!==null||this.#t===""?n:sessionStorage.getItem(e)}readPreference(e){try{let n=localStorage.getItem(this.key(e));if(n!==null)return n}catch{}return this.readScopedItem(e)}writePreference(e,n){let r=this.key(e);try{localStorage.setItem(r,n)}catch{}lt(r,n)}clearPreference(e){let n=this.key(e);try{localStorage.removeItem(n)}catch{}try{sessionStorage.removeItem(n)}catch{}}#s(){let e=this.#e.id(),n=e!==""?e:this.#e.endpoint();return n===""?"":this.#r===n?this.#o:Ad.has(n)?(this.#r=n,this.#o=`${n}~${be()}`,console.warn(`<ag-ui-chat>: another element on this page already stores its conversation under "${n}", so this one has been given a throwaway namespace of its own \u2014 the two would otherwise share a thread pointer, a history drawer and every message. Give each <ag-ui-chat> its own id to keep them apart and let this one restore its conversation across reloads.`),this.#o):(Ad.add(n),this.#n=n,n)}};var jE=["data-attachments-url","data-attachment-accept","data-attachment-max-bytes","data-transcribe-url","data-threads-url","data-threads-cache","data-tools-url","data-skills-url","data-skills","data-prompt-chips","data-slash-commands","data-theme-toggle","data-strings","data-icon-url"],Rd=["omit","same-origin","include"];function kd(t){return Rd.includes(t)}var uf="ag-ui-chat:collapsed",hf="ag-ui-chat:theme",so=class extends HTMLElement{agentFactory=Sd;headers={};getHeaders=null;trustedOrigins=[];allowImages=!1;formatRelativeTime=null;autoConfirm=!1;askUser=!1;askUserRenderer=null;approvalRenderer=null;approveWithEdits=!1;confirmPredicate=null;getTools=()=>this.#R.defaultTools();getContext=()=>[...Va(this.getPageMap,this.autoInjectPageMap)];routeMap=[];navigate=null;getPageMap=null;autoInjectPageMap=!0;conversationStore=new Xe;uploadHandler=null;transcribeHandler=null;navigationResult=()=>({navigated:!0,url:window.location.href});skillContext=()=>({});toolSummaries={};formatToolPayload=null;strings={};resolvePageTarget=e=>document.querySelector(e);#e=new Set;#t=le;#n=new Ns({card:e=>this.#v.card(e),strings:()=>this.#t,follow:()=>this.#v.follow()});#o=new Ks({ensureGroup:()=>this.#v.ensureGroup(),afterTranscriptGrew:()=>this.#v.afterGrew(),appendNotice:(e,n,r)=>this.#v.appendNotice(e,n,r)});#r=new Us({element:this,strings:()=>this.#t,retry:()=>{this.retryLastTurn()}});#i;#s=new Rs;#a=document.createElement("button");#d;#u=document.createElement("div");#c;#p;#l;#h;#m;#b;#g;#w;#f;#y;#x;#_;#L;#A;#E;#k;#N=document.createElement("span");#F=0;#O;#v;#P;#ee;#le=document.createElement("span");#I;#T;#$=[];#U=[];#M=document.createElement("div");#H=null;#B=()=>{this.#T.publishVisualViewport(),!this.#T.dragging()&&this.#T.restoreLauncherPosition()};#X;#te;#j=!1;#Y=new AbortController;#de=!1;#ne=null;#D=null;#G={};#C=!1;#re=new _s;#R=new ds({element:this,routeMap:()=>this.routeMap,navigate:()=>this.navigate,getPageMap:()=>this.getPageMap,resolvePageTarget:e=>this.resolvePageTarget(e),getTools:()=>this.getTools(),askUser:()=>this.askUser,askUserRenderer:()=>this.askUserRenderer,decision:this.#re,ensureGroup:()=>this.#v.ensureGroup(),strings:()=>this.#t,hidePending:()=>this.#v.hidePending(),updateEmptyState:()=>this.#v.updateEmptyState(),follow:()=>this.#v.follow(),fetchInit:e=>this.#pe(e)});#ce=new Vs({openBubble:()=>this.appendMessage(Le.ASSISTANT,""),allowImages:()=>this.allowImages,follow:()=>this.#v.follow()});#S=new ta({id:()=>this.id,endpoint:()=>this.endpoint});#V;constructor(){super(),this.#i=this.attachShadow({mode:"open"}),this.#c=document.createElement("div"),this.#p=document.createElement("div"),this.#l=document.createElement("textarea"),this.#h=document.createElement("button"),this.#m=document.createElement("span"),this.#y=document.createElement("div"),this.#x=document.createElement("button"),this.#_=document.createElement("input"),this.#L=document.createElement("div"),this.#X=document.createElement("span"),this.#A=document.createElement("button"),this.#E=document.createElement("button"),this.#k=document.createElement("span"),this.#O=document.createElement("div"),this.#v=new Ys({element:this,messages:this.#p,emptyWrap:this.#O,strings:()=>this.#t,allowImages:()=>this.allowImages,resolveTool:e=>this.#R.resolve(e),toolSummaries:()=>this.toolSummaries,serverSummary:e=>this.#R.summary(e),formatToolPayload:e=>this.formatToolPayload?.(e)??null}),this.#P=new hs({element:this,transcript:this.#v,tools:this.#R,decision:this.#re,strings:()=>this.#t,announce:e=>this.#s.announce(e),autoConfirm:()=>this.autoConfirm,confirmPredicate:()=>this.confirmPredicate,getPageMap:()=>this.getPageMap,navigate:()=>this.navigate,approveWithEdits:()=>this.approveWithEdits,approvalRenderer:()=>this.approvalRenderer,getContext:()=>this.getContext(),conversationStore:()=>this.conversationStore,threadId:()=>this.#f.threadId}),this.#ee=new ea({element:this,transcript:this.#v,stream:this.#ce,actions:this.#r,activities:this.#o,subagents:this.#n,announcer:this.#s,strings:()=>this.#t,running:()=>this.#C,setRunning:e=>this.#W(e),appendMessage:(e,n)=>this.appendMessage(e,n),noteUnread:()=>this.#Oe()}),this.#T=new ks({element:this,launcher:this.#E,root:this.#i,connected:()=>this.#j,collapsed:()=>this.collapsed,collapsible:()=>zr(this.getAttribute("placement")),strings:()=>this.#t,readPreference:e=>this.#S.readPreference(e),writePreference:(e,n)=>this.#S.writePreference(e,n),clearPreference:e=>this.#S.clearPreference(e),announceSurfaceChange:(e,n)=>this.#_e(e,n)}),this.#d=new xs({element:this,root:this.#i,messages:this.#p,messagesWrap:this.#u,input:this.#l,strings:()=>this.#t,autoGrow:()=>Ut(this.#l),quote:e=>this.quote(e)}),this.#I=new vs({element:this,chat:this.#c,slot:this.#L,fileInput:this.#_,button:this.#x,strings:()=>this.#t,uploadHandler:()=>this.uploadHandler,headersFor:e=>this.#q(e),credentialsOption:()=>this.#ie()}),this.#te=new ys({element:this,slot:this.#X,input:this.#l,strings:()=>this.#t,transcribeHandler:()=>this.transcribeHandler,headersFor:e=>this.#q(e),credentialsOption:()=>this.#ie(),onInput:()=>this.#xe()}),this.registerActivityRenderer({type:Na,render:e=>{let n=VE(e);return n===null?null:Is("\u{1F5DC}",oe(this.#t.historyCompacted,{count:n}),"compaction")}}),this.registerActivityRenderer({type:Ra,render:e=>to(e,this.#t,n=>{this.sendMessage(n)})}),this.#b=new ws(e=>this.#V.apply(e)),this.#V=new Ao({element:this,menu:this.#b,input:this.#l,hint:this.#y,strings:()=>this.#t,context:()=>this.skillContext(),flag:e=>this.#Ae(e),readJsonAttribute:e=>this.#fe(e),fetchInit:e=>this.#pe(e),send:e=>{this.sendMessage(e)},submit:()=>{this.#se()},autoGrow:()=>Ut(this.#l)}),this.#g=new Ts({onSelect:e=>{this.#f.switchThread(e)},onNew:()=>{this.newChat(),this.#f.refreshDrawer()},onRename:(e,n)=>{this.#f.renameThread(e,n)},onDelete:e=>{this.#f.deleteThread(e)}}),this.#w=new Ur((e,n)=>{this.#f.continueRun(e,n).catch(r=>{console.warn("<ag-ui-chat>: continuing a run failed",r)})}),this.#f=new Es({element:this,drawer:this.#g,checkpoints:this.#w,transcript:this.#v,actions:this.#r,activities:this.#o,tools:this.#R,input:this.#l,hint:this.#y,strings:()=>this.#t,conversationStore:()=>this.conversationStore,formatRelativeTime:()=>this.formatRelativeTime,navigationResult:()=>this.navigationResult,headersFor:e=>this.#q(e),requestCredentials:()=>this.#K(),appendMessage:(e,n)=>this.appendMessage(e,n),autoGrow:()=>Ut(this.#l),continuationEnded:()=>this.#Ee(),client:()=>this.#D,ensureClient:()=>this.#ae(),buildClient:e=>this.#Te(e),releaseClient:()=>{this.#D=null},running:()=>this.#C,cancelRun:()=>this.#z(),resetState:()=>this.#Z(),setRunning:e=>this.#W(e)})}static get observedAttributes(){return["title-text","placement","credentials","user-key","user-name",...jE]}attributeChangedCallback(e,n,r){if(e==="credentials"){r!==null&&!kd(r)&&console.error(`<ag-ui-chat>: credentials="${r}" is not a fetch credentials mode (${Rd.join(" / ")}) \u2014 it is being ignored, so requests use the browser default and cross-origin cookies will not be sent.`);return}if(e==="placement"){this.#T.releaseOwnedAxes(),this.#T.releaseLauncherPosition(),!zr(this.getAttribute("placement"))&&this.collapsed&&this.setCollapsed(!1),requestAnimationFrame(()=>this.#T.syncResizeAnchor());return}if(e==="title-text"){this.#m.textContent=r??this.#t.title,this.#N.textContent=this.#m.textContent;return}if(e==="user-name"){this.#he();return}if(e==="user-key"){this.#j&&(n??"")!==(r??"")&&this.#Ce(n??"",r??"");return}n===r||!this.#j||console.warn(`<ag-ui-chat>: "${e}" was changed after the element connected, and is read only while connecting \u2014 this assignment has no effect. Set it before the element enters the DOM (in the markup, or on the element before appending it); frameworks that patch attributes after mount should bind it at creation. To apply a new value now, remove and re-insert the element.`)}registerTool(e){this.#R.register(e)}get sharedState(){return this.#ue()?.state??this.#G}set sharedState(e){this.#G={...e},this.#ue()?.setState(this.#G)}#ue(){return this.#f.continuation??this.#D}registerPageState(e){this.#R.registerPageState(e)}registerStateHook(e){this.registerPageState(e)}get endpoint(){return this.getAttribute("endpoint")??""}set endpoint(e){this.setAttribute("endpoint",e)}get userKey(){return this.getAttribute("user-key")??""}set userKey(e){this.setAttribute("user-key",e)}get userName(){return this.getAttribute("user-name")??""}set userName(e){this.setAttribute("user-name",e)}#he(){let e=this.userName.trim();this.#le.textContent=e===""?this.#t.greetingNoName:oe(this.#t.greeting,{name:e})}get credentials(){let e=this.getAttribute("credentials");return e!==null&&kd(e)?e:null}set credentials(e){if(e===null){this.removeAttribute("credentials");return}if(!kd(e))throw new TypeError(`<ag-ui-chat>: credentials must be one of ${Rd.map(n=>`"${n}"`).join(", ")} (got ${JSON.stringify(e)}).`);this.setAttribute("credentials",e)}#oe(){return{...this.headers,...this.getHeaders?.()}}#q(e){let n=this.#oe();return as(e,Object.keys(n),this.trustedOrigins,this.#e),n}#K(){return this.credentials??void 0}#ie(){let e=this.#K();return e===void 0?{}:{credentials:e}}#pe(e){return et({headers:this.#q(e)},this.#K())}get toolDisplay(){let e=this.getAttribute("data-tool-display");return e===Ln.INLINE||e===Ln.MINIMAL||e===Ln.COMPACT?e:Ln.FULL}set toolDisplay(e){this.setAttribute("data-tool-display",e)}connectedCallback(){if(this.#Y=new AbortController,this.#de&&this.#be(),this.#de=!0,this.#S.claim(),this.#T.restoreSize(),requestAnimationFrame(()=>{this.#T.restoreLauncherPosition(),this.#T.syncResizeAnchor()}),this.#t=Pl({...this.#ke(),...this.strings}),this.getAttribute("data-theme-toggle")!==null){let e=this.#S.readPreference(hf);e!==null&&this.setAttribute("theme",e)}this.#Ne(),this.#g.setStrings(this.#t),this.#w.setStrings(this.#t),zr(this.getAttribute("placement"))&&this.#Ie()&&this.setAttribute("collapsed",""),this.#we(),this.#V.init(),this.conversationStore=this.#S.scopeStore(this.#Re(),this.userKey),window.addEventListener("resize",this.#B),window.visualViewport?.addEventListener("resize",this.#B),window.visualViewport?.addEventListener("scroll",this.#B),this.#T.publishVisualViewport(),this.#me(),this.#I.wire(this.#Y.signal),this.#te.wire(),this.#f.adoptActiveThread(),queueMicrotask(()=>this.#Se()),this.#f.rehydrate(),this.#j=!0}#Se(){this.#j&&(this.#R.fetchCatalog(),this.#V.fetch())}async reload(){this.#z(),this.#Z(),this.#W(!1),await Promise.all([this.#R.fetchCatalog(),this.#V.fetch(),this.#f.rehydrate()])}disconnectedCallback(){this.#j=!1,this.#Y.abort(),window.removeEventListener("resize",this.#B),window.visualViewport?.removeEventListener("resize",this.#B),window.visualViewport?.removeEventListener("scroll",this.#B),this.#S.release(),this.#z(),this.#d.detachPageOffer(),this.#I.tray?.dispose(),this.#te.dispose(),this.#v.disposeScroller(),this.#s.dispose()}#Ae(e){let n=this.getAttribute(e);return n!==null&&n!=="false"}#fe(e){let n=this.getAttribute(e);if(n===null)return null;try{return JSON.parse(n)}catch{return console.warn(`<ag-ui-chat>: ${e} is not valid JSON, so it was ignored entirely and the built-in default is being used. Check the quoting -- JSON inside an HTML attribute needs single quotes around the attribute value, or its own double quotes escaped.`),null}}#ke(){let e=this.#fe("data-strings");return typeof e=="object"&&e!==null?e:{}}quote(e){this.#d.insert(e)}offerQuoteInPage(e=document.body){return this.#d.offerInPage(e)}#me(){this.#ne=null;let e=this.getAttribute("data-threads-url");if(e!==null){let n=this.conversationStore,r=new io(e,()=>this.#q(e),n,()=>this.#K(),this.getAttribute("data-threads-cache")!=="false");this.#ne={remote:r,inner:n},this.conversationStore=r}}#Re(){let e=this.#ne;return e!==null&&this.conversationStore===e.remote?e.inner:this.conversationStore}setSkills(e){this.#V.setClientSkills(e)}get collapsed(){return this.hasAttribute("collapsed")}set collapsed(e){this.setCollapsed(e)}setCollapsed(e,n={}){e&&!zr(this.getAttribute("placement"))||(n.announce===!0&&e&&!this.collapsed&&this.#_e(this.#t.chatMinimised,null),e||this.#T.restoreLauncherPosition(),e?this.setAttribute("collapsed",""):this.removeAttribute("collapsed"),lt(this.#S.key(uf),e?"1":"0"),this.#Q(0),this.dispatchEvent(new CustomEvent(wa,{detail:{collapsed:e},bubbles:!0,composed:!0})))}get unread(){return this.#F}#Ie(){let e=this.#S.readScopedItem(uf);return e!==null?e==="1":Ss(this.getAttribute("placement"))&&!this.hasAttribute("data-start-open")}describeSurface(){return this.#T.describeSurface()}moveTo(e,n={}){return this.#T.moveTo(e,n)}toggleCollapsed(){this.setCollapsed(!this.collapsed)}toggleTheme(){let e=this.getAttribute("theme")==="dark"?"light":"dark";this.setAttribute("theme",e),this.#S.writePreference(hf,e),this.#ve()}#Ce(e,n){let r=this.#S.conversationNamespace(e),o=this.#S.conversationNamespace(n);if(e===""){Xe.adopt(r,o),this.#ge(o);return}Xe.purge(r),this.#ge(o),this.#P.forgetWaivers(),this.#z(),this.#Z(),this.#G={},this.#W(!1),this.#Q(0),this.#f.adoptActiveThread(),this.#f.rehydrate(),this.#f.refreshDrawer()}#ge(e){let n=this.#S.rescopeStore(e);n!==null&&(this.conversationStore=n,this.#me())}#ve(){let e=this.getAttribute("theme")==="dark";this.#A.replaceChildren(Ms("theme","theme-icon",e?hc:uc,null))}openThreads(){this.#f.openThreads()}openCheckpoints(){this.#f.openCheckpoints()}closeThreads(){this.#g.close()}closeCheckpoints(){this.#w.close()}toggleCheckpoints(){if(this.#w.open_){this.#w.close();return}this.openCheckpoints()}newChat(){this.#z(),this.#f.reapUnsent(),this.#Z(),this.#f.startThread(),this.#W(!1),this.#Q(0),this.collapsed||this.#l.focus({preventScroll:!0})}#Z(){this.#be(),this.#$.length=0,this.#H=null}#be(){this.#D=null,this.#ee.detach(),this.#ye(),this.#f.forgetRestored()}#ye(){this.#ce.end(),this.#v.releaseTurn(),this.#n.clear(),this.#v.forgetCards(),this.#o.clearBlocks(),this.#r.forget(),this.#I.tray?.clear(),this.removeAttribute("data-composer-settling"),this.removeAttribute("data-restoring"),this.#v.empty()}async retryLastTurn(){if(this.#C)return!1;let e=this.#ae(),n=e.truncateToLastUser();if(n===null)return!1;this.#ye();for(let r of n)this.#f.replay(r);return await e.resume(),!0}appendMessage(e,n){return this.#v.append(e,n)}#Ne(){let{signal:e}=this.#Y;this.#c.className="chat",this.#c.setAttribute("part","panel");let n=document.createElement("div");n.className="header",n.setAttribute("part","header");let r=this.#m;r.className="header-title",r.setAttribute("part","title"),r.textContent=this.getAttribute("title-text")??this.#t.title,(this.querySelector('[slot="icon"]')!==null||this.getAttribute("data-icon-url")!==null)&&n.append(Ms("icon","icon",null,this.getAttribute("data-icon-url")));let o=document.createElement("slot");o.name="header-actions";let i=document.createElement("div");i.className="header-controls",i.setAttribute("part","header-controls");let s=Vr("history",this.#t.chatHistory,"\u2630");s.addEventListener("click",()=>this.openThreads());let a=Vr("checkpoints",this.#t.checkpoints,"\u21BA");a.addEventListener("click",()=>this.toggleCheckpoints());let l=Vr("new",this.#t.newChat,"\u271A");l.addEventListener("click",()=>this.newChat());let d=Vr("collapse",this.#t.collapse,"\u2014");d.addEventListener("click",()=>this.toggleCollapsed()),this.#f.runs()!==null?i.append(s,a,l):i.append(s,l),this.getAttribute("data-theme-toggle")!==null&&(this.#A.type="button",this.#A.className="header-btn header-btn--theme",this.#A.setAttribute("part","header-button theme-toggle"),this.#A.title=this.#t.toggleTheme,this.#A.setAttribute("aria-label",this.#t.toggleTheme),this.#A.addEventListener("click",()=>this.toggleTheme(),{signal:e}),this.#ve(),i.append(this.#A)),i.append(d),n.append(r,o,i),this.#T.enablePanelDrag(n),this.#p.className="messages",this.#p.setAttribute("part","messages"),this.#p.setAttribute("role","log"),this.#p.setAttribute("aria-live","off"),this.#p.setAttribute("aria-label",this.#t.conversation),this.#a.className="jump-latest",this.#a.type="button",this.#a.setAttribute("part","jump-latest"),this.#a.textContent=this.#t.jumpToLatest,this.#d.mount(e),this.#v.mountScroller(this.#a,e),this.#s.mount(),this.#O.className="empty",this.#O.setAttribute("part","empty");let u=document.createElement("div");u.className="greeting",u.setAttribute("part","greeting");let m=document.createElement("slot");m.name="greeting",m.append(this.#le),u.append(m),this.#he();let w=document.createElement("slot");w.name="empty";let p=Qp(this,this.#t,O=>{this.sendMessage(O)});p!==null&&w.append(p),this.#O.replaceChildren(u,w),this.#M.className="queued",this.#M.setAttribute("part","queued"),this.#M.setAttribute("role","group"),this.#M.setAttribute("aria-label",this.#t.queued),this.#M.hidden=!0,this.#p.append(this.#O),this.#v.updateEmptyState();let h=document.createElement("div");h.className="input-row",h.setAttribute("part","composer");let v=document.createElement("div");v.className="composer",v.setAttribute("part","composer-surface");let x=document.createElement("div");x.className="composer-tools",x.setAttribute("part","composer-tools"),this.#l.className="input",this.#l.setAttribute("part","input"),this.#l.setAttribute("aria-label",this.#t.message),this.#l.rows=1,this.#l.placeholder=this.#t.inputPlaceholder,this.#l.addEventListener("keydown",O=>this.#Me(O),{signal:e}),this.#l.addEventListener("input",()=>this.#xe(),{signal:e}),this.#h.className="send",this.#h.type="button",this.#h.setAttribute("part","send"),this.#h.replaceChildren(Os("icon-send","send-send",ac),Os("icon-stop","send-stop",lc)),this.#h.title=this.#t.send,this.#h.setAttribute("aria-label",this.#t.send),this.#h.dataset.state="idle",this.#h.addEventListener("click",()=>{if(this.#C){this.#z();return}this.#se()},{signal:e}),this.#y.className="skill-hint",this.#y.setAttribute("part","skill-hint"),this.#y.hidden=!0,this.#x.className="attach-btn",this.#x.type="button",this.#x.setAttribute("part","attach-button"),this.#x.replaceChildren(Os("icon-attach","attach-glyph",dc)),this.#x.title=this.#t.attachFiles,this.#x.setAttribute("aria-label",this.#t.attachFiles),this.#x.hidden=!0,this.#x.addEventListener("click",()=>this.#_.click(),{signal:e}),this.#_.className="attach-input",this.#_.type="file",this.#_.multiple=!0,this.#_.hidden=!0,this.#_.addEventListener("change",()=>this.#I.onFilesPicked(),{signal:e}),this.#L.className="attachment-slot",this.#X.className="voice-slot";let S=document.createElement("slot");S.name="footer",x.append(this.#x,this.#X,this.#h),v.append(this.#l,x),h.append(v,this.#_),this.#u.className="messages-wrap",this.#u.replaceChildren(this.#p,this.#a,this.#d.button),this.#c.replaceChildren(n,this.#u,this.#b.palette,this.#b.chips,this.#y,this.#M,this.#L,h,S,this.#g.element,this.#w.element),this.#c.addEventListener("pointerdown",O=>{if(!this.#w.open_)return;let G=O.composedPath();G.includes(this.#w.element)||G.includes(a)||this.#w.close()},{signal:e}),this.#E.className="launcher",this.#E.type="button",this.#E.setAttribute("part","launcher"),this.#E.setAttribute("aria-label",this.#t.expand),this.#k.className="launcher-badge",this.#k.setAttribute("part","launcher-badge"),this.#k.setAttribute("aria-hidden","true"),this.#k.hidden=!0,this.#N.className="rail-label",this.#N.setAttribute("part","rail-label"),this.#N.setAttribute("aria-hidden","true"),this.#N.textContent=this.getAttribute("title-text")??this.#t.title,this.#E.replaceChildren(Ms("launcher","launcher-icon",pc,ip(this)),this.#N,this.#k),this.#E.addEventListener("click",()=>this.setCollapsed(!1),{signal:e}),this.#T.enableLauncherDrag(e),this.#T.mountResizeGrips(this.#c),rp(this.#i);let _=this.#T.probe;_.className="viewport-probe",_.setAttribute("aria-hidden","true"),this.#i.replaceChildren(_,this.#s.region,this.#c,this.#E)}#we(){this.#E.setAttribute("aria-expanded",String(!this.collapsed));let e=this.#F;this.#k.textContent=e>9?"9+":String(e),this.#k.hidden=e===0||!op(this);let n=this.#k.hidden?this.#t.expand:oe(this.#t.expandUnread,{count:e});this.#E.setAttribute("aria-label",n),this.#E.title=n}#Q(e){this.#F=e,this.#we(),this.dispatchEvent(new CustomEvent(xa,{detail:{unread:e},bubbles:!0,composed:!0}))}#Oe(){this.collapsed&&this.#Q(this.#F+1)}#xe(){this.#b.onInput(this.#l.value),this.#y.hidden=!0,Ut(this.#l),this.#H=null}#Me(e){if(this.#b.onKeydown(e)){e.preventDefault();return}if(e.key==="Escape"&&this.#C){e.preventDefault(),this.#z();return}if(e.key==="Enter"&&!e.shiftKey){e.preventDefault(),this.#se();return}this.#Le(e)}#Le(e){let n=e.key==="ArrowUp";if(!n&&e.key!=="ArrowDown"||this.#b.isOpen())return;let r=this.#$;if(r.length===0||this.#H===null&&(!n||this.#l.value!==""))return;let o=this.#H===null?0:this.#H+(n?1:-1);o>=r.length||(e.preventDefault(),this.#H=o<0?null:o,this.#l.value=o<0?"":r[o],this.#l.setSelectionRange(this.#l.value.length,this.#l.value.length),Ut(this.#l))}#z(){for(let e of this.#U)this.#$[0]!==e&&this.#$.unshift(e);this.#U.length=0,this.#J(),this.#re.abort(),this.#D?.cancel(),this.#f.stopContinuation()}#W(e){let n=this.#C&&!e;this.#C=e;let r=e?this.#t.stop:this.#t.send;this.#h.title=r,this.#h.setAttribute("aria-label",r),this.#h.dataset.state=e?"running":"idle",n&&this.#Ee()}#Ee(){if(this.#C||this.#f.continuation!==null)return;let e=this.#U.shift();this.#J(),e!==void 0&&this.sendMessage(e)}#J(){this.#M.replaceChildren(),this.#M.hidden=this.#U.length===0;for(let[e,n]of this.#U.entries()){let r=document.createElement("button");r.type="button",r.className="queued-chip",r.setAttribute("part","queued-chip"),r.textContent=n,r.title=oe(this.#t.removeQueued,{text:n}),r.setAttribute("aria-label",r.title),r.addEventListener("click",()=>{this.#U.splice(e,1),this.#J()}),this.#M.appendChild(r)}}async#se(){let e=this.#l.value.trim(),n=this.#I.tray?.readyRefs()??[];if(!(e===""&&n.length===0)){if(this.#C||this.#f.continuation!==null){e!==""&&(this.#U.push(e),this.#J(),this.#l.value="",Ut(this.#l));return}e!==""&&this.#$[0]!==e&&this.#$.unshift(e),this.#H=null,this.#l.value="",Ut(this.#l),this.#I.tray?.hasPending()===!0&&this.#v.appendNotice("\u{1F4CE}",oe(this.#t.attachmentsStillUploading,{n:this.#I.tray.pendingCount()}),"attachment-pending"),this.#I.tray?.clearReady(),await this.sendMessage(e,n)}}async sendMessage(e,n=[]){if(this.#C||this.#f.continuation!==null||e===""&&n.length===0)return;this.#v.isEmpty()&&this.setAttribute("data-composer-settling","");let r=this.appendMessage(Le.USER,e);n.length>0&&r.appendChild(fs(n)),this.dispatchEvent(new CustomEvent(ya,{detail:{content:e,attachments:n},bubbles:!0,composed:!0})),await this.#Pe(e,n)}attachFile(e){return this.#I.attach(e)}async#Pe(e,n){if(this.endpoint===""){console.error('<ag-ui-chat>: no endpoint is set, so this message was not sent and no request was made. Point the element at your AG-UI mount with the endpoint attribute (endpoint="/agent/"), or assign chat.endpoint before sending.'),this.#v.appendNotice("\u26A0",this.#t.notConnected,"not-connected");return}await this.#ae().send(e,n)}#ae(){return this.#D===null&&(this.#D=this.#Te({endpoint:this.endpoint,initialMessages:this.#f.restored,follows:[]})),this.#D}#Te(e){let n=this.#f.threadId,r=this.agentFactory({endpoint:e.endpoint,headers:this.#oe(),getHeaders:()=>this.#oe(),trustedOrigins:this.trustedOrigins,...this.#ie(),threadId:n,initialMessages:e.initialMessages,initialState:this.#G});return new no({agent:r,handlers:this.#ee.forClient(),getTools:()=>this.#R.advertise(),getContext:()=>this.#P.buildContext(),executeTool:o=>this.#P.execute(o),resolveInterrupts:o=>this.#P.resolveInterrupts(o),onPersist:o=>{let i=[...e.follows,...o];this.conversationStore.saveMessages(n,i),e.onSaved?.(i)},onStateChanged:o=>this.#De(o),connectionLostMessage:this.#t.connectionLost,unfinishedMessage:this.#t.callNotFinished,declinedMessage:this.#t.declinedAction,maxToolRounds:df(this)})}#De(e){this.#G={...e},this.dispatchEvent(new CustomEvent(Ea,{detail:{state:this.#G},bubbles:!0,composed:!0}))}#_e(e,n){this.#v.appendNotice("\u2922",e,"surface",n===null?void 0:{label:this.#t.undo,onActivate:n})}enableCharts(e=["tool","activity"]){let n=!this.#o.has(_o)&&!this.#R.has(ps);e.includes("activity")&&this.registerActivityRenderer({type:_o,render:r=>{let o=or(r);return o===null?null:Lr(o)},removedNotice:this.#t.chartUndrawable}),e.includes("tool")&&this.registerTool(zh()),n&&this.isConnected&&this.reload()}registerActivityRenderer(e){this.#o.register(e)}get unhandledActivityTypes(){return this.#o.unhandledTypes()}};function VE(t){let e=t?.removed;return typeof e=="number"?e:null}function qE(){customElements.get(xo)===void 0&&customElements.define(xo,so)}async function WE(t,e,n={}){await wt(t),await za(t,{...n,flashMs:n.flashMs??0}),await Ha(t,e,n)}async function XE(t,e={}){await wt(t),await Ga(t,e)}async function YE(t,e={}){await wt(t),await Fa(t,e)}async function KE(t,e,n={}){await wt(t),await $a(t,e,n)}async function ZE(t,e,n={}){await wt(t),await Ba(t,e,n)}function QE(t,e){t instanceof HTMLInputElement&&t.type==="checkbox"?vr(t,!!e):qt(t,String(e)),t.dispatchEvent(new Event("input",{bubbles:!0})),t.dispatchEvent(new Event("change",{bubbles:!0}))}var JE="0.40.0";export{Ta as ATTACHMENT_EVENT,so as AgUiChat,no as AgUiClient,_o as CHART_ACTIVITY_TYPE,ps as CHART_TOOL_NAME,ko as CHAT_CORNERS,Na as COMPACTION_ACTIVITY_TYPE,Sa as CUSTOM_AGENT_EVENT,Ur as CheckpointMenu,gr as ClientToolRegistry,Zs as ConnectionLostError,le as DEFAULT_UI_STRINGS,xo as ELEMENT_TAG,ka as FEEDBACK_EVENT,Ia as INVALIDATE_CUSTOM_NAME,Aa as INVALIDATE_EVENT,Oa as LOAD_CAPABILITY_TOOL,dw as MAX_QUOTE_CHARS,OE as MAX_SUGGESTIONS,ME as MAX_SUGGESTION_CHARS,Mn as MAX_TOOL_ROUNDS,jt as MESSAGE_ACTIONS,Le as MESSAGE_ROLE,yr as PAGE_ACTIONS,_a as RUN_FINISHED_EVENT,io as RemoteConversationStore,Hr as RunIndex,Ea as STATE_EVENT,ya as SUBMIT_EVENT,Ra as SUGGESTIONS_ACTIVITY_TYPE,Xe as SessionStorageStore,wa as TOGGLE_EVENT,te as TOOL_CALL_STATUS,Ln as TOOL_DISPLAY,Pe as TOOL_OUTCOME,jr as ToolCallCard,xa as UNREAD_EVENT,JE as VERSION,Eo as X_CONFIRM_KEY,fr as X_DESTRUCTIVE_KEY,mr as X_NAVIGATES_KEY,xe as X_SUMMARY_KEY,ql as asQuote,nd as attachMessageActions,Xl as attachQuoteOffer,or as chartSpecFrom,XE as clickElement,La as createChatSurfaceTools,Sd as createHttpAgent,ja as createPageActionTools,Va as createPageMapContext,No as createPageStateTools,qa as createRouteTools,um as createStateHookTools,qE as defineAgUiChat,WE as fillField,sm as flash,za as focusWithFlash,Ga as highlightThenClick,Sc as isChatCorner,Fl as isDestructive,us as isNavigates,Pl as mergeUiStrings,Ps as messageActionBar,Kl as messageAttachments,Ul as parseToolCatalog,Io as prefersReducedMotion,YE as pressButton,Fa as pressThenClick,Td as prettifyToolName,Pr as quotableSelection,Dr as relativeTime,Lr as renderChart,eo as renderMarkdown,to as renderSuggestionChips,Hl as requestApproval,zl as requestConfirmation,Dl as requestQuestion,wt as scrollIntoCenterView,KE as selectControl,$a as selectOption,QE as setControlValue,vr as setNativeChecked,qt as setNativeValue,Pa as showHighlightOverlay,Zp as suggestionPrompts,ZE as toggleCheckbox,Ba as toggleControl,Gr as toolStatusFromOutcome,Vl as transcribeAudio,Ha as typeInto,Bl as uploadAttachment};
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
  (*! @license DOMPurify 3.4.14 | (c) Cure53 and other contributors | Released under the Apache license 2.0 and Mozilla Public License 2.0 | github.com/cure53/DOMPurify/blob/3.4.14/LICENSE *)
*/
