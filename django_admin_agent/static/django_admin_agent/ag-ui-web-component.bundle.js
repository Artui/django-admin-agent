var UE=Object.defineProperty;var _l=(t,e)=>{for(var n in e)UE(t,n,{get:e[n],enumerable:!0})};var Bo="ag-ui-chat",Sl="ag-ui-submit",Tl="ag-ui-toggle",Al="ag-ui-unread",kl="ag-ui-state",Il="ag-ui-attachments",Rl="ag-ui-run-finished",Cl="ag-ui-thread",Nl="ag-ui-custom",Ol="ag-ui-invalidate",Pl="ag-ui-feedback",Ml="suggestions",Ll="ag_ui.invalidate",Ip="ag_ui.subagent",yt={STARTED:"started",TOOL_CALL:"tool_call",TOOL_RESULT:"tool_result",FINISHED:"finished",FAILED:"failed"},Ve={USER:"user",ASSISTANT:"assistant"},Tr="x-destructive",Zo="x-confirm",Pe="x-summary",Ar="x-navigates",Vo="read_page",Bn=10,rn={COPY:"copy",RETRY:"retry",FEEDBACK:"feedback"},K={PENDING:"pending",DEFERRED:"deferred",DONE:"done",ERROR:"error",DECLINED:"declined",INTERRUPTED:"interrupted"},je={SUCCESS:"success",FAILED:"failed",DENIED:"denied",INTERRUPTED:"interrupted"},Xe={UPLOADING:"uploading",READY:"ready",ERROR:"error"},zl=10*1024*1024,Ct={GROUPED:"grouped",INLINE:"inline",MINIMAL:"minimal",COMPACT:"compact",FULL:"full"},Dl="compaction",$l="load_capability",Rp='<svg class="glyph" viewBox="0 0 24 24" aria-hidden="true"><path d="M12 19.5V5m-6.5 6.5L12 5l6.5 6.5"/></svg>',Cp='<svg class="glyph glyph--solid" viewBox="0 0 24 24" aria-hidden="true"><rect x="7" y="7" width="10" height="10" rx="2.5"/></svg>',Np='<svg class="glyph" viewBox="0 0 24 24" aria-hidden="true"><path d="M17 8.5V15a5 5 0 0 1-10 0V7a3 3 0 0 1 6 0v7.5a1 1 0 0 1-2 0V8.5"/></svg>',Op='<svg class="glyph" viewBox="0 0 24 24" aria-hidden="true"><path d="M12 4a3 3 0 0 1 3 3v5a3 3 0 0 1-6 0V7a3 3 0 0 1 3-3z"/><path d="M5 11v1a7 7 0 0 0 14 0v-1"/><path d="M12 19v3"/></svg>',Pp='<svg class="glyph" viewBox="0 0 24 24" aria-hidden="true"><path d="M20 14.5A8.5 8.5 0 0 1 9.5 4a8.5 8.5 0 1 0 10.5 10.5z"/></svg>',Mp='<svg class="glyph" viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"/></svg>',Lp='<svg class="glyph" viewBox="0 0 24 24" aria-hidden="true"><path d="M4 5.5A2.5 2.5 0 0 1 6.5 3h11A2.5 2.5 0 0 1 20 5.5v8a2.5 2.5 0 0 1-2.5 2.5H9l-5 4z"/></svg>',zp='<svg class="glyph" viewBox="0 0 24 24" aria-hidden="true"><rect x="9" y="9" width="11" height="11" rx="2"/><path d="M5 15V6a2 2 0 0 1 2-2h8"/></svg>',Dp='<svg class="glyph" viewBox="0 0 24 24" aria-hidden="true"><path d="M20 12a8 8 0 1 1-2.5-5.8"/><path d="M20 4v4h-4"/></svg>',$p='<svg class="glyph" viewBox="0 0 24 24" aria-hidden="true"><path d="M7 10v10H4V10z"/><path d="M7 10l4.5-7a2 2 0 0 1 3.4 2L13.5 9H19a2 2 0 0 1 2 2.3l-1.1 6.4A2 2 0 0 1 17.9 20H7"/></svg>',Up='<svg class="glyph" viewBox="0 0 24 24" aria-hidden="true"><path d="M17 14V4h3v10z"/><path d="M17 14l-4.5 7a2 2 0 0 1-3.4-2l1.4-4H5a2 2 0 0 1-2-2.3l1.1-6.4A2 2 0 0 1 6.1 4H17"/></svg>',Hp='<svg class="glyph" viewBox="0 0 24 24" aria-hidden="true"><path d="M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8z"/><path d="M14 3v5h5"/></svg>',Fp='<svg class="glyph" viewBox="0 0 24 24" aria-hidden="true"><rect x="3.5" y="4.5" width="17" height="15" rx="2.5"/><circle cx="9" cy="10" r="1.5"/><path d="M4.5 17.5 9 13.5l3.5 3 3-2.5 4.5 4"/></svg>',Gp='<svg class="glyph" viewBox="0 0 24 24" aria-hidden="true"><path d="M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8z"/><path d="M14 3v5h5"/><rect class="glyph--solid" x="7.5" y="13.5" width="9" height="4.5" rx="1"/></svg>',Bp='<svg class="glyph" viewBox="0 0 24 24" aria-hidden="true"><path d="M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8z"/><path d="M14 3v5h5"/><path d="M8.5 13.5h7M8.5 17h4.5"/></svg>',jo="chart",on=24,Zp=150,Vp=2147483001,Wo=5e3,lt=8;var HE=/\{([a-zA-Z_][a-zA-Z0-9_]*)\}/g;function re(t,e){return t.replace(HE,(n,r)=>Object.hasOwn(e,r)?String(e[r]):n)}var FE=/\{([a-zA-Z_][a-zA-Z0-9_]*)\}/g;function jp(t,e){let n=[];return{text:t.replace(FE,(o,i)=>{let a=e[i];return a==null||a===""?(n.includes(i)||n.push(i),o):String(a)}),missing:n}}function GE(t){if(typeof t!="object"||t===null)return!1;let e=t;return typeof e.name=="string"&&typeof e.title=="string"&&(e.prompt===void 0||typeof e.prompt=="string")}function Ul(t){return Array.isArray(t)?t.filter(GE):[]}var qo=class{#e;#t=[];#n=[];#o=[];constructor(e){this.#e=e}setClientSkills(e){this.#o=e,this.#i()}init(){this.#e.menu.enableChips(this.#e.flag("data-prompt-chips")),this.#e.menu.enableSlash(this.#e.flag("data-slash-commands")),this.#n=this.#r(),this.#i()}async fetch(){let e=this.#e.element.getAttribute("data-skills-url");if(e!==null)try{let n=await fetch(e,this.#e.fetchInit(e));this.#t=Ul(await n.json()),this.#i()}catch{}}apply(e){let{input:n,hint:r}=this.#e;if(e.prompt===void 0){r.hidden=!0,this.#e.send(`/${e.name}`);return}let{text:o,missing:i}=jp(e.prompt,this.#e.context());if(i.length>0){r.textContent=re(this.#e.strings().skillNeeds,{title:e.title,fields:i.join(", ")}),r.hidden=!1,n.value=o,this.#e.autoGrow(),n.focus(),this.#a(o);return}if(r.hidden=!0,n.value=o,this.#e.autoGrow(),e.sendImmediately===!1){n.focus();return}this.#e.submit()}#r(){return Ul(this.#e.readJsonAttribute("data-skills"))}#i(){let e=new Map;for(let n of[...this.#t,...this.#n,...this.#o])e.set(n.name,n);this.#e.menu.setSkills([...e.values()])}#a(e){let n=e.indexOf("{");this.#e.input.setSelectionRange(n,e.indexOf("}",n)+1)}};var Yo=["top-left","top-right","bottom-left","bottom-right"];function Wp(t){return Yo.includes(t)}function Hl(t){return[{name:"read_chat_surface",description:"Describe the chat panel you are speaking from: its placement, whether it is collapsed, whether it can be moved, and the box it occupies. Read this before moving or minimising yourself, since a full-screen panel has nowhere to move to. Read-only.",parameters:{type:"object",properties:{},required:[],[Pe]:"Read the chat's own position"},handler:()=>t.describeSurface()},{name:"move_chat",description:"Move your own panel to a corner, to uncover something the user needs to see. `corner` is top-left, top-right, bottom-left or bottom-right. Answers `moved: false` with a reason when the placement owns its position or the panel fills the screen; check `read_chat_surface` first, and prefer minimise_chat when there is nowhere to move to.",parameters:{type:"object",properties:{corner:{type:"string",enum:[...Yo]}},required:["corner"],[Pe]:"Move the chat out of the way"},handler:e=>{let n=String(e.corner??""),r=t.describeSurface();return Wp(n)?r.movable?{moved:t.moveTo(n,{announce:!0}),corner:n}:{moved:!1,reason:r.fullBleed?"the panel fills the screen, so there is nowhere to move it to":r.draggable===!1?"this page has turned off moving the panel":`the "${r.placement??""}" placement owns the panel's position`,suggestion:r.collapsible?"minimise_chat":null}:{moved:!1,reason:`"${n}" is not a corner; use one of ${Yo.join(", ")}`}}},{name:"minimise_chat",description:"Collapse your own panel to its launcher, so the user can see the whole page. The launcher stays visible and reopens it. Answers `minimised: false` when the placement has no collapsed state, which is the case for a full-page chat.",parameters:{type:"object",properties:{},required:[],[Pe]:"Minimise the chat"},handler:()=>t.describeSurface().collapsible?(t.setCollapsed(!0,{announce:!0}),{minimised:!0}):{minimised:!1,reason:"this placement has no collapsed state, so there is no launcher to return to"}},{name:"restore_chat",description:"Open your own panel again after minimising it.",parameters:{type:"object",properties:{},required:[],[Pe]:"Restore the chat"},handler:()=>(t.setCollapsed(!1),{restored:!0})}]}var kr=class{#e=new Map;register(e){this.#e.set(e.name,e)}has(e){return this.#e.has(e)}get(e){let n=this.#e.get(e);if(n===void 0)throw new Error(`tool "${e}" is not registered`);return n}tools(){return[...this.#e.values()].map(e=>({name:e.name,description:e.description,parameters:e.parameters}))}};var Fl=new Set,Zn=class{#e;constructor(e){this.#e=e}join(){Fl.add(this.#e)}leave(){Fl.delete(this.#e)}static latest(){let e=null;for(let n of Fl)e=n;return e}};var qp="--ag-ui-highlight-ring-color",BE="--ag-ui-accent",ZE="--_accent",VE="#4f46e5";function an(t,e){let n=Gl(t,qp);if(n!=="")return n;let r=e??Zn.latest(),o=r===null?"":Yp(r,qp);if(o!=="")return o;let i=Gl(t,BE);if(i!=="")return i;let a=r===null?"":Yp(r,ZE);return a===""?VE:a}function Gl(t,e){return window.getComputedStyle(t).getPropertyValue(e).trim()}function Yp(t,e){let n=Gl(t,e),r=t.shadowRoot;if(n===""||r===null)return n;let o=document.createElement("span");if(o.hidden=!0,o.style.color=n,o.style.color==="")return"";r.appendChild(o);let i=window.getComputedStyle(o).color;return o.remove(),i}function Ir(t,e,n){let r=window.getComputedStyle(t).getPropertyValue(e).trim();return r===""?n:r}var jE=4;function Bl(t,e={}){let n=document.createElement("div");n.setAttribute("data-ag-ui-highlight",""),n.setAttribute("aria-hidden","true"),n.style.cssText=["position: fixed","inset: 0","pointer-events: none",`z-index: ${Ir(t,"--ag-ui-highlight-z-index",String(Vp))}`].join(";");let r=document.createElement("div"),o=document.createElement("div");n.className="ag-ui-highlight",r.className="ag-ui-highlight-scrim",o.className="ag-ui-highlight-ring",e.scrim===!0&&n.append(r),n.append(o);let i=e.ringWidth??Number.parseFloat(Ir(t,"--ag-ui-highlight-ring-width","3")),a=e.flowMs??Number.parseFloat(Ir(t,"--ag-ui-highlight-flow-ms","2400")),s=()=>{let u=t.getBoundingClientRect(),f=e.padding??jE,m=e.radius??Number.parseFloat(getComputedStyle(t).borderRadius),p=u.left-f,h=u.top-f,x=u.width+f*2,g=u.height+f*2;e.scrim===!0&&(r.style.cssText=["position: absolute","inset: 0",`background: ${Ir(t,"--ag-ui-highlight-scrim","rgba(15, 15, 25, 0.45)")}`,`clip-path: path(evenodd, '${YE(p,h,x,g,m+f)}')`].join(";")),o.style.cssText=["position: absolute",`left: ${p}px`,`top: ${h}px`,`width: ${x}px`,`height: ${g}px`,`border-radius: ${m+f}px`,`border: ${i}px solid transparent`,"box-sizing: border-box",qE(t,e)].join(";")};s();let c=null;e.gradient===!0&&!window.matchMedia("(prefers-reduced-motion: reduce)").matches&&(c=o.animate([{backgroundPosition:"100% 0"},{backgroundPosition:"-100% 0"}],{duration:a,iterations:Number.POSITIVE_INFINITY,easing:"linear"}));let l={capture:!0,passive:!0};return window.addEventListener("scroll",s,l),window.addEventListener("resize",s,l),document.body.appendChild(n),()=>{window.removeEventListener("scroll",s,l),window.removeEventListener("resize",s,l),c?.cancel(),n.remove()}}function WE(t){return t===void 0?null:CSS.supports("color",t)?t:null}function qE(t,e){let n=WE(e.color)??an(t,e.chat);if(e.gradient!==!0)return`border-color: ${n}`;let r=Ir(t,"--ag-ui-highlight-gradient",`linear-gradient(115deg, transparent 20%, ${n} 50%, transparent 80%)`),o="linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0)";return[`background-image: ${r}`,"background-origin: border-box","background-size: 300% 100%",`-webkit-mask: ${o}`,`mask: ${o}`,"-webkit-mask-composite: xor","mask-composite: exclude","background-position: 50% 0"].join(";")}function YE(t,e,n,r,o){let i=Math.max(0,Math.min(o,n/2,r/2)),a=t+n,s=e+r,c=`M 0 0 H ${window.innerWidth} V ${window.innerHeight} H 0 Z`,l=[`M ${t+i} ${e}`,`H ${a-i}`,`A ${i} ${i} 0 0 1 ${a} ${e+i}`,`V ${s-i}`,`A ${i} ${i} 0 0 1 ${a-i} ${s}`,`H ${t+i}`,`A ${i} ${i} 0 0 1 ${t} ${s-i}`,`V ${e+i}`,`A ${i} ${i} 0 0 1 ${t+i} ${e}`,"Z"].join(" ");return`${c} ${l}`}function Ko(t,e){return Object.getOwnPropertyDescriptor(t,e).set}var KE=Ko(HTMLInputElement.prototype,"value"),XE=Ko(HTMLTextAreaElement.prototype,"value"),JE=Ko(HTMLSelectElement.prototype,"value"),QE=Ko(HTMLInputElement.prototype,"checked");function sn(t,e){t instanceof HTMLTextAreaElement?XE.call(t,e):t instanceof HTMLSelectElement?JE.call(t,e):KE.call(t,e)}function Rr(t,e){QE.call(t,e)}function Vn(t){return new Promise(e=>{setTimeout(e,t)})}function Xo(){return window.matchMedia("(prefers-reduced-motion: reduce)").matches}function Zl(t){return t<=0||Xo()?Promise.resolve():Vn(t)}function Kp(t,e){return`0 0 0 3px color-mix(in srgb, ${an(t,e)} 40%, transparent)`}async function Vl(t,e,n={}){let r=n.charDelayMs??35;sn(t,""),t.dispatchEvent(new Event("input",{bubbles:!0}));for(let o of e)sn(t,t.value+o),t.dispatchEvent(new Event("input",{bubbles:!0})),r>0&&await Vn(r);t.dispatchEvent(new Event("change",{bubbles:!0}))}async function jl(t,e={}){let n=e.highlightMs??280,r=t.style.outline,o=t.style.outlineOffset;t.style.outline=`2px solid ${an(t,e.chat)}`,t.style.outlineOffset="2px",await Vn(n),t.style.outline=r,t.style.outlineOffset=o,t.click()}var ex=600,tx=100;function Nt(t,e={}){let n=Xo();return t.scrollIntoView({block:"center",inline:"nearest",behavior:n?"auto":"smooth"}),n?Promise.resolve():new Promise(r=>{let o,i=()=>{clearTimeout(o),document.removeEventListener("scroll",a,!0),document.removeEventListener("scrollend",i,!0),r()},a=()=>{document.removeEventListener("scroll",a,!0),clearTimeout(o),o=setTimeout(i,e.settleMs??ex)};o=setTimeout(i,tx),document.addEventListener("scroll",a,!0),document.addEventListener("scrollend",i,!0)})}var nx=1200,rx=1/3;async function Xp(t,e,n){(e.focus??n)&&t.focus({preventScroll:!0});let r=e.flashMs??nx;if(r<=0)return;if(e.scrim===!0||e.gradient===!0){let l=Bl(t,{scrim:e.scrim===!0,gradient:e.gradient===!0,...e.color===void 0?{}:{color:e.color},...e.ringPadding===void 0?{}:{padding:e.ringPadding},...e.chat===void 0?{}:{chat:e.chat}});await Vn(r),l();return}let o=t.style.outline,i=t.style.outlineOffset,a=t.style.transition,s=e.color??an(t,e.chat);t.style.outline=`3px solid ${s}`,t.style.outlineOffset="2px";let c=Xo()?0:Math.round(r*rx);await Vn(r-c),c>0&&(t.style.transition=`outline-color ${c}ms ease-out`,t.style.outline="3px solid transparent",await Vn(c)),t.style.outline=o,t.style.outlineOffset=i,t.style.transition=a}function ox(t,e={}){return Xp(t,e,!1)}function Wl(t,e={}){return Xp(t,e,!0)}async function ql(t,e={}){let n=e.pressMs??140,r=t.style.transform,o=t.style.transition,i=t.style.boxShadow;t.style.transition="transform 80ms ease",t.style.transform="scale(0.96)",t.style.boxShadow=Kp(t,e.chat),await Zl(n),t.style.transform=r,t.style.transition=o,t.style.boxShadow=i,t.click()}function ix(t,e){for(let n of Array.from(t.options))if(n.value===e||n.text===e)return n;return null}async function Yl(t,e,n={}){let r=ix(t,e);if(r===null)throw new Error(`no <option> matching "${e}"`);let o=n.highlightMs??220,i=t.style.outline,a=t.style.outlineOffset;t.style.outline=`2px solid ${an(t,n.chat)}`,t.style.outlineOffset="2px",await Zl(o),sn(t,r.value),t.dispatchEvent(new Event("input",{bubbles:!0})),t.dispatchEvent(new Event("change",{bubbles:!0})),t.style.outline=i,t.style.outlineOffset=a}async function Kl(t,e,n={}){let r=n.flashMs??200,o=t.style.boxShadow;t.style.boxShadow=Kp(t,n.chat),await Zl(r),Rr(t,e),t.dispatchEvent(new Event("input",{bubbles:!0})),t.dispatchEvent(new Event("change",{bubbles:!0})),t.style.boxShadow=o}var Nr={SCROLL:"scroll",DRAG:"drag",CHAT:"chat"};function Xl(t,e){let n=[];return t.has(Nr.SCROLL)&&n.push(ax(e)),t.has(Nr.DRAG)&&n.push(sx(e)),n}function ax(t){return{name:"scroll_to",description:"Scroll a target into view. `target` is `top`, `bottom`, or a CSS selector / page-map element id. Read-only: it changes nothing on the page.",parameters:{type:"object",properties:{target:{type:"string"}},required:["target"],[Pe]:"Scroll into view"},handler:e=>{let n=String(e.target??"");if(n==="top"||n==="bottom"){let o=n==="top"?0:document.body.scrollHeight;return window.scrollTo({top:o,behavior:"smooth"}),{scrolled:!0,target:n}}let r=t(n);if(r===null)throw new Error(`no element matching "${n}"`);return Nt(r),{scrolled:!0,target:n}}}}function sx(t){return{name:"drag_and_drop",description:"Drag the `from` element onto the `to` element (CSS selectors or page-map element ids), firing the page's native drag-and-drop. Use for reordering sortable lists. The page decides what the drop commits.",parameters:{type:"object",properties:{from:{type:"string"},to:{type:"string"}},required:["from","to"],[Pe]:"Drag and drop"},handler:e=>{let n=String(e.from??""),r=String(e.to??""),o=t(n);if(o===null)throw new Error(`no element matching "${n}"`);let i=t(r);if(i===null)throw new Error(`no element matching "${r}"`);return lx(o,i),{dragged:!0,from:n,to:r}}}}function lx(t,e){let n=new DataTransfer;Cr(t,"dragstart",n),Cr(e,"dragenter",n),Cr(e,"dragover",n),Cr(e,"drop",n),Cr(t,"dragend",n)}function Cr(t,e,n){let r=new Event(e,{bubbles:!0,cancelable:!0});r.dataTransfer=n,t.dispatchEvent(r)}function Jl(t,e){return!e||t===null?[]:[{description:"page_map",value:JSON.stringify(t())}]}function Jo(t){let e=[{name:`read_${t.name}`,description:`Read the "${t.name}" state.`,parameters:{type:"object",properties:{},required:[],[Pe]:`Read ${t.name}`},handler:()=>t.read()}],n=t.write;return n!==void 0&&e.push({name:`set_${t.name}`,description:`Update the "${t.name}" state.`,parameters:{...t.schema??{type:"object"},[Tr]:!0,[Pe]:`Update ${t.name}`},handler:r=>n(r)}),e}var cx=Jo;var Jp=/:([A-Za-z_][A-Za-z0-9_]*)/g;function ux(t){return[...t.matchAll(Jp)].map(e=>e[0].slice(1))}function dx(t,e,n){let r={...n};return{path:e.replace(Jp,(i,a)=>{let s=n[a];if(s==null||String(s)==="")throw new Error(`route "${t}" requires path param "${a}"`);return delete r[a],encodeURIComponent(String(s))}),leftover:r}}function px(t,e){let n=new URLSearchParams;for(let[o,i]of Object.entries(e))n.set(o,String(i));let r=n.toString();return r===""?t:`${t}?${r}`}function Ql(t,e){return[{name:"list_routes",description:"List the routes the app can navigate to. Each route's `pathParams` names the dynamic segments to pass as `params` to `navigate_to_route`.",parameters:{type:"object",properties:{},required:[],[Pe]:"List pages"},handler:()=>t().map(n=>({...n,pathParams:ux(n.path)}))},{name:"navigate_to_route",description:"Navigate to one of the app's routes by its id, filling any dynamic `:name` path segments (and extra query params) from `params`.",parameters:{type:"object",properties:{route_id:{type:"string"},params:{type:"object"}},required:["route_id"],[Ar]:!0,[Pe]:"Navigate"},handler:n=>{let r=n.route_id,o=t().find(u=>u.id===r);if(o===void 0)throw new Error(`unknown route "${String(r)}"`);let i=n.params??{},{path:a,leftover:s}=dx(o.id,o.path,i),c=px(a,s),l=e();return l!==null?l(c):window.location.assign(c),{navigated:!0,path:c}}}]}var De=[];for(let t=0;t<256;++t)De.push((t+256).toString(16).slice(1));function Qp(t,e=0){return(De[t[e+0]]+De[t[e+1]]+De[t[e+2]]+De[t[e+3]]+"-"+De[t[e+4]]+De[t[e+5]]+"-"+De[t[e+6]]+De[t[e+7]]+"-"+De[t[e+8]]+De[t[e+9]]+"-"+De[t[e+10]]+De[t[e+11]]+De[t[e+12]]+De[t[e+13]]+De[t[e+14]]+De[t[e+15]]).toLowerCase()}var ec,hx=new Uint8Array(16);function tc(){if(!ec){if(typeof crypto>"u"||!crypto.getRandomValues)throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");ec=crypto.getRandomValues.bind(crypto)}return ec(hx)}var fx=typeof crypto<"u"&&crypto.randomUUID&&crypto.randomUUID.bind(crypto),nc={randomUUID:fx};function mx(t,e,n){if(nc.randomUUID&&!e&&!t)return nc.randomUUID();t=t||{};let r=t.random??t.rng?.()??tc();if(r.length<16)throw new Error("Random bytes length must be >= 16");if(r[6]=r[6]&15|64,r[8]=r[8]&63|128,e){if(n=n||0,n<0||n+16>e.length)throw new RangeError(`UUID byte range ${n}:${n+15} is out of buffer bounds`);for(let o=0;o<16;++o)e[n+o]=r[o];return e}return Qp(r)}var Ft=mx;var v=(function(t){return t.TEXT_MESSAGE_START="TEXT_MESSAGE_START",t.TEXT_MESSAGE_CONTENT="TEXT_MESSAGE_CONTENT",t.TEXT_MESSAGE_END="TEXT_MESSAGE_END",t.TEXT_MESSAGE_CHUNK="TEXT_MESSAGE_CHUNK",t.TOOL_CALL_START="TOOL_CALL_START",t.TOOL_CALL_ARGS="TOOL_CALL_ARGS",t.TOOL_CALL_END="TOOL_CALL_END",t.TOOL_CALL_CHUNK="TOOL_CALL_CHUNK",t.TOOL_CALL_RESULT="TOOL_CALL_RESULT",t.STATE_SNAPSHOT="STATE_SNAPSHOT",t.STATE_DELTA="STATE_DELTA",t.MESSAGES_SNAPSHOT="MESSAGES_SNAPSHOT",t.ACTIVITY_SNAPSHOT="ACTIVITY_SNAPSHOT",t.ACTIVITY_DELTA="ACTIVITY_DELTA",t.RAW="RAW",t.CUSTOM="CUSTOM",t.RUN_STARTED="RUN_STARTED",t.RUN_FINISHED="RUN_FINISHED",t.RUN_ERROR="RUN_ERROR",t.STEP_STARTED="STEP_STARTED",t.STEP_FINISHED="STEP_FINISHED",t.REASONING_START="REASONING_START",t.REASONING_MESSAGE_START="REASONING_MESSAGE_START",t.REASONING_MESSAGE_CONTENT="REASONING_MESSAGE_CONTENT",t.REASONING_MESSAGE_END="REASONING_MESSAGE_END",t.REASONING_MESSAGE_CHUNK="REASONING_MESSAGE_CHUNK",t.REASONING_END="REASONING_END",t.REASONING_ENCRYPTED_VALUE="REASONING_ENCRYPTED_VALUE",t.SUBAGENT_STARTED="SUBAGENT_STARTED",t.SUBAGENT_FINISHED="SUBAGENT_FINISHED",t.SUBAGENT_ERROR="SUBAGENT_ERROR",t})({}),ln="1.0";var gx={TextMessageStartEvent:{optional:["timestamp","rawEvent","metadata","subagentRunId","role","name"],fields:{}},TextMessageContentEvent:{optional:["timestamp","rawEvent","metadata","subagentRunId"],fields:{}},TextMessageEndEvent:{optional:["timestamp","rawEvent","metadata","subagentRunId"],fields:{}},TextMessageChunkEvent:{optional:["timestamp","rawEvent","metadata","subagentRunId","messageId","role","delta","name"],fields:{}},ToolCallStartEvent:{optional:["timestamp","rawEvent","metadata","subagentRunId","parentMessageId"],fields:{}},ToolCallArgsEvent:{optional:["timestamp","rawEvent","metadata","subagentRunId"],fields:{}},ToolCallEndEvent:{optional:["timestamp","rawEvent","metadata","subagentRunId"],fields:{}},ToolCallChunkEvent:{optional:["timestamp","rawEvent","metadata","subagentRunId","toolCallId","toolCallName","parentMessageId","delta"],fields:{}},TextPart:{optional:["id","metadata"],fields:{}},DataSource:{optional:[],fields:{}},UrlSource:{optional:["mimeType"],fields:{}},FileSource:{optional:["provider","mimeType"],fields:{}},PartSource:{discriminator:"type",variants:{data:"DataSource",url:"UrlSource",file:"FileSource"}},ImagePart:{optional:["id","metadata"],fields:{source:"PartSource"}},AudioPart:{optional:["id","metadata"],fields:{source:"PartSource"}},VideoPart:{optional:["id","metadata"],fields:{source:"PartSource"}},DocumentPart:{optional:["id","metadata"],fields:{source:"PartSource"}},ContentPart:{discriminator:"type",variants:{text:"TextPart",image:"ImagePart",audio:"AudioPart",video:"VideoPart",document:"DocumentPart"}},ToolCallResultEvent:{optional:["timestamp","rawEvent","metadata","subagentRunId","role"],fields:{content:{array:"ContentPart"}}},StateSnapshotEvent:{optional:["timestamp","rawEvent","metadata","subagentRunId"],fields:{}},AddOperation:{optional:[],fields:{}},RemoveOperation:{optional:[],fields:{}},ReplaceOperation:{optional:[],fields:{}},MoveOperation:{optional:[],fields:{}},CopyOperation:{optional:[],fields:{}},TestOperation:{optional:[],fields:{}},JsonPatchOperation:{discriminator:"op",variants:{add:"AddOperation",remove:"RemoveOperation",replace:"ReplaceOperation",move:"MoveOperation",copy:"CopyOperation",test:"TestOperation"}},StateDeltaEvent:{optional:["timestamp","rawEvent","metadata","subagentRunId"],fields:{delta:{array:"JsonPatchOperation"}}},DeveloperMessage:{optional:["subagentRunId","name","encryptedValue","metadata"],fields:{}},SystemMessage:{optional:["subagentRunId","name","encryptedValue","metadata"],fields:{}},FunctionCall:{optional:[],fields:{}},ToolCall:{optional:["encryptedValue","metadata"],fields:{function:"FunctionCall"}},AssistantMessage:{optional:["subagentRunId","name","encryptedValue","metadata","content","toolCalls"],fields:{toolCalls:{array:"ToolCall"}}},UserMessage:{optional:["subagentRunId","name","encryptedValue","metadata"],fields:{content:{array:"ContentPart"}}},ToolMessage:{optional:["subagentRunId","error","encryptedValue","metadata"],fields:{content:{array:"ContentPart"}}},ActivityMessage:{optional:["subagentRunId","metadata"],fields:{}},ReasoningMessage:{optional:["subagentRunId","encryptedValue","metadata"],fields:{}},Message:{discriminator:"role",variants:{developer:"DeveloperMessage",system:"SystemMessage",assistant:"AssistantMessage",user:"UserMessage",tool:"ToolMessage",activity:"ActivityMessage",reasoning:"ReasoningMessage"}},MessagesSnapshotEvent:{optional:["timestamp","rawEvent","metadata"],fields:{messages:{array:"Message"}}},ActivitySnapshotEvent:{optional:["timestamp","rawEvent","metadata","subagentRunId","replace"],fields:{}},ActivityDeltaEvent:{optional:["timestamp","rawEvent","metadata","subagentRunId"],fields:{patch:{array:"JsonPatchOperation"}}},RawEvent:{optional:["timestamp","rawEvent","metadata","subagentRunId","source"],fields:{}},CustomEvent:{optional:["timestamp","rawEvent","metadata","subagentRunId"],fields:{}},Tool:{optional:["parameters","metadata"],fields:{}},Context:{optional:[],fields:{}},ResumeEntry:{optional:["payload","metadata"],fields:{}},RunAgentInput:{optional:["protocolVersion","parentRunId","state","tools","context","forwardedProps","resume"],fields:{messages:{array:"Message"},tools:{array:"Tool"},context:{array:"Context"},resume:{array:"ResumeEntry"}}},RunStartedEvent:{optional:["timestamp","rawEvent","metadata","protocolVersion","parentRunId","input"],fields:{input:"RunAgentInput"}},RunFinishedSuccessOutcome:{optional:["pendingToolCallIds"],fields:{}},Interrupt:{optional:["subagentRunId","message","toolCallId","responseSchema","expiresAt","metadata"],fields:{}},RunFinishedInterruptOutcome:{optional:[],fields:{interrupts:{array:"Interrupt"}}},RunFinishedCancelledOutcome:{optional:[],fields:{}},RunFinishedOutcome:{discriminator:"type",variants:{success:"RunFinishedSuccessOutcome",interrupt:"RunFinishedInterruptOutcome",cancelled:"RunFinishedCancelledOutcome"}},TokenUsage:{optional:["provider","model","inputTokens","outputTokens","totalTokens","reasoningTokens","cachedInputTokens","cacheWriteInputTokens"],fields:{}},RunFinishedEvent:{optional:["timestamp","rawEvent","metadata","result","outcome","usage"],fields:{outcome:"RunFinishedOutcome",usage:{array:"TokenUsage"}}},RunErrorEvent:{optional:["timestamp","rawEvent","metadata","code","usage"],fields:{usage:{array:"TokenUsage"}}},StepStartedEvent:{optional:["timestamp","rawEvent","metadata","subagentRunId"],fields:{}},StepFinishedEvent:{optional:["timestamp","rawEvent","metadata","subagentRunId"],fields:{}},ReasoningStartEvent:{optional:["timestamp","rawEvent","metadata","subagentRunId"],fields:{}},ReasoningMessageStartEvent:{optional:["timestamp","rawEvent","metadata","subagentRunId"],fields:{}},ReasoningMessageContentEvent:{optional:["timestamp","rawEvent","metadata","subagentRunId"],fields:{}},ReasoningMessageEndEvent:{optional:["timestamp","rawEvent","metadata","subagentRunId"],fields:{}},ReasoningMessageChunkEvent:{optional:["timestamp","rawEvent","metadata","subagentRunId","messageId","delta"],fields:{}},ReasoningEndEvent:{optional:["timestamp","rawEvent","metadata","subagentRunId"],fields:{}},ReasoningEncryptedValueEvent:{optional:["timestamp","rawEvent","metadata","subagentRunId"],fields:{}},SubagentStartedEvent:{optional:["timestamp","rawEvent","metadata","description","parentSubagentRunId","parentToolCallId","parentMessageId"],fields:{}},SubagentFinishedSuccessOutcome:{optional:[],fields:{}},SubagentFinishedSuspendedOutcome:{optional:["interruptIds"],fields:{}},SubagentFinishedOutcome:{discriminator:"type",variants:{success:"SubagentFinishedSuccessOutcome",suspended:"SubagentFinishedSuspendedOutcome"}},SubagentFinishedEvent:{optional:["timestamp","rawEvent","metadata","result","outcome"],fields:{outcome:"SubagentFinishedOutcome"}},SubagentErrorEvent:{optional:["timestamp","rawEvent","metadata","code"],fields:{}},Event:{discriminator:"type",variants:{TEXT_MESSAGE_START:"TextMessageStartEvent",TEXT_MESSAGE_CONTENT:"TextMessageContentEvent",TEXT_MESSAGE_END:"TextMessageEndEvent",TEXT_MESSAGE_CHUNK:"TextMessageChunkEvent",TOOL_CALL_START:"ToolCallStartEvent",TOOL_CALL_ARGS:"ToolCallArgsEvent",TOOL_CALL_END:"ToolCallEndEvent",TOOL_CALL_CHUNK:"ToolCallChunkEvent",TOOL_CALL_RESULT:"ToolCallResultEvent",STATE_SNAPSHOT:"StateSnapshotEvent",STATE_DELTA:"StateDeltaEvent",MESSAGES_SNAPSHOT:"MessagesSnapshotEvent",ACTIVITY_SNAPSHOT:"ActivitySnapshotEvent",ACTIVITY_DELTA:"ActivityDeltaEvent",RAW:"RawEvent",CUSTOM:"CustomEvent",RUN_STARTED:"RunStartedEvent",RUN_FINISHED:"RunFinishedEvent",RUN_ERROR:"RunErrorEvent",STEP_STARTED:"StepStartedEvent",STEP_FINISHED:"StepFinishedEvent",REASONING_START:"ReasoningStartEvent",REASONING_MESSAGE_START:"ReasoningMessageStartEvent",REASONING_MESSAGE_CONTENT:"ReasoningMessageContentEvent",REASONING_MESSAGE_END:"ReasoningMessageEndEvent",REASONING_MESSAGE_CHUNK:"ReasoningMessageChunkEvent",REASONING_END:"ReasoningEndEvent",REASONING_ENCRYPTED_VALUE:"ReasoningEncryptedValueEvent",SUBAGENT_STARTED:"SubagentStartedEvent",SUBAGENT_FINISHED:"SubagentFinishedEvent",SUBAGENT_ERROR:"SubagentErrorEvent"}},SubagentInfo:{optional:["description"],fields:{}},IdentityCapabilities:{optional:["name","type","description","version","provider","documentationUrl","metadata"],fields:{}},TransportCapabilities:{optional:["streaming","websocket","httpBinary","pushNotifications","resumable"],fields:{}},ToolsCapabilities:{optional:["supported","items","parallelCalls","clientProvided"],fields:{items:{array:"Tool"}}},OutputCapabilities:{optional:["structuredOutput","supportedMimeTypes"],fields:{}},StateCapabilities:{optional:["snapshots","deltas","memory","persistentState"],fields:{}},MultiAgentCapabilities:{optional:["supported","delegation","handoffs","subagents"],fields:{subagents:{array:"SubagentInfo"}}},ReasoningCapabilities:{optional:["supported","streaming","encrypted"],fields:{}},MultimodalInputCapabilities:{optional:["image","audio","video","pdf","file"],fields:{}},MultimodalOutputCapabilities:{optional:["image","audio"],fields:{}},MultimodalCapabilities:{optional:["input","output"],fields:{input:"MultimodalInputCapabilities",output:"MultimodalOutputCapabilities"}},ExecutionCapabilities:{optional:["codeExecution","sandboxed","maxIterations","maxExecutionTime"],fields:{}},HumanInTheLoopCapabilities:{optional:["supported","approvals","interventions","feedback","interrupts","approveWithEdits"],fields:{}},AgentCapabilities:{optional:["identity","transport","tools","output","state","multiAgent","reasoning","multimodal","execution","humanInTheLoop","custom"],fields:{identity:"IdentityCapabilities",transport:"TransportCapabilities",tools:"ToolsCapabilities",output:"OutputCapabilities",state:"StateCapabilities",multiAgent:"MultiAgentCapabilities",reasoning:"ReasoningCapabilities",multimodal:"MultimodalCapabilities",execution:"ExecutionCapabilities",humanInTheLoop:"HumanInTheLoopCapabilities"}}};function Or(t,e){if(typeof e=="string")return Or(t,gx[e]);if("array"in e){if(!Array.isArray(t))return t;let o=t.map(i=>Or(i,e.array));return o.every((i,a)=>i===t[a])?t:o}if(typeof t!="object"||t===null||Array.isArray(t))return t;let n=t;if("discriminator"in e){let o=n[e.discriminator];return typeof o=="string"&&Object.prototype.hasOwnProperty.call(e.variants,o)?Or(t,e.variants[o]):t}let r=n;for(let o of e.optional)Object.prototype.hasOwnProperty.call(n,o)&&n[o]===null&&(r===n&&(r={...n}),delete r[o]);for(let[o,i]of Object.entries(e.fields)){if(!Object.prototype.hasOwnProperty.call(r,o))continue;let a=Or(r[o],i);a!==r[o]&&(r===n&&(r={...n}),r[o]=a)}return r}function rc(t,e){return Or(t,e)}var j=class extends Error{constructor(t){super(t)}},oc=class extends j{constructor(){super("Connect not implemented. This method is not supported by the current agent.")}};function eh(t,e){return e===void 0?t:t===void 0?{...e}:{...t,...e}}function jn(t){return t===void 0?"":typeof t=="string"?t:t.filter(e=>e.type==="text").map(e=>e.text).join("")}function th(t){return Array.isArray(t)&&t.some(e=>e.type!=="text")}var ic={};_l(ic,{JsonPatchError:()=>Ae,_areEquals:()=>Lr,applyOperation:()=>cn,applyPatch:()=>ii,applyReducer:()=>Ex,deepClone:()=>yx,getValueByPointer:()=>ri,validate:()=>rh,validator:()=>oi});var vx=(function(){var t=function(e,n){return t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(r,o){r.__proto__=o}||function(r,o){for(var i in o)o.hasOwnProperty(i)&&(r[i]=o[i])},t(e,n)};return function(e,n){t(e,n);function r(){this.constructor=e}e.prototype=n===null?Object.create(n):(r.prototype=n.prototype,new r)}})(),bx=Object.prototype.hasOwnProperty;function ei(t,e){return bx.call(t,e)}function ti(t){if(Array.isArray(t)){for(var e=new Array(t.length),n=0;n<e.length;n++)e[n]=""+n;return e}if(Object.keys)return Object.keys(t);var r=[];for(var o in t)ei(t,o)&&r.push(o);return r}function $e(t){switch(typeof t){case"object":return JSON.parse(JSON.stringify(t));case"undefined":return null;default:return t}}function ni(t){for(var e=0,n=t.length,r;e<n;){if(r=t.charCodeAt(e),r>=48&&r<=57){e++;continue}return!1}return!0}function wt(t){return t.indexOf("/")===-1&&t.indexOf("~")===-1?t:t.replace(/~/g,"~0").replace(/\//g,"~1")}function Pr(t){return t.replace(/~1/g,"/").replace(/~0/g,"~")}function Qo(t){if(t===void 0)return!0;if(t){if(Array.isArray(t)){for(var e=0,n=t.length;e<n;e++)if(Qo(t[e]))return!0}else if(typeof t=="object"){for(var r=ti(t),o=r.length,i=0;i<o;i++)if(Qo(t[r[i]]))return!0}}return!1}function nh(t,e){var n=[t];for(var r in e){var o=typeof e[r]=="object"?JSON.stringify(e[r],null,2):e[r];typeof o<"u"&&n.push(r+": "+o)}return n.join(`
`)}var Mr=(function(t){vx(e,t);function e(n,r,o,i,a){var s=this.constructor,c=t.call(this,nh(n,{name:r,index:o,operation:i,tree:a}))||this;return c.name=r,c.index=o,c.operation=i,c.tree=a,Object.setPrototypeOf(c,s.prototype),c.message=nh(n,{name:r,index:o,operation:i,tree:a}),c}return e})(Error);var Ae=Mr,yx=$e,Wn={add:function(t,e,n){return t[e]=this.value,{newDocument:n}},remove:function(t,e,n){var r=t[e];return delete t[e],{newDocument:n,removed:r}},replace:function(t,e,n){var r=t[e];return t[e]=this.value,{newDocument:n,removed:r}},move:function(t,e,n){var r=ri(n,this.path);r&&(r=$e(r));var o=cn(n,{op:"remove",path:this.from}).removed;return cn(n,{op:"add",path:this.path,value:o}),{newDocument:n,removed:r}},copy:function(t,e,n){var r=ri(n,this.from);return cn(n,{op:"add",path:this.path,value:$e(r)}),{newDocument:n}},test:function(t,e,n){return{newDocument:n,test:Lr(t[e],this.value)}},_get:function(t,e,n){return this.value=t[e],{newDocument:n}}},wx={add:function(t,e,n){return ni(e)?t.splice(e,0,this.value):t[e]=this.value,{newDocument:n,index:e}},remove:function(t,e,n){var r=t.splice(e,1);return{newDocument:n,removed:r[0]}},replace:function(t,e,n){var r=t[e];return t[e]=this.value,{newDocument:n,removed:r}},move:Wn.move,copy:Wn.copy,test:Wn.test,_get:Wn._get};function ri(t,e){if(e=="")return t;var n={op:"_get",path:e};return cn(t,n),n.value}function cn(t,e,n,r,o,i){if(n===void 0&&(n=!1),r===void 0&&(r=!0),o===void 0&&(o=!0),i===void 0&&(i=0),n&&(typeof n=="function"?n(e,0,t,e.path):oi(e,0)),e.path===""){var a={newDocument:t};if(e.op==="add")return a.newDocument=e.value,a;if(e.op==="replace")return a.newDocument=e.value,a.removed=t,a;if(e.op==="move"||e.op==="copy")return a.newDocument=ri(t,e.from),e.op==="move"&&(a.removed=t),a;if(e.op==="test"){if(a.test=Lr(t,e.value),a.test===!1)throw new Ae("Test operation failed","TEST_OPERATION_FAILED",i,e,t);return a.newDocument=t,a}else{if(e.op==="remove")return a.removed=t,a.newDocument=null,a;if(e.op==="_get")return e.value=t,a;if(n)throw new Ae("Operation `op` property is not one of operations defined in RFC-6902","OPERATION_OP_INVALID",i,e,t);return a}}else{r||(t=$e(t));var s=e.path||"",c=s.split("/"),l=t,u=1,f=c.length,m=void 0,p=void 0,h=void 0;for(typeof n=="function"?h=n:h=oi;;){if(p=c[u],p&&p.indexOf("~")!=-1&&(p=Pr(p)),o&&(p=="__proto__"||p=="prototype"&&u>0&&c[u-1]=="constructor"))throw new TypeError("JSON-Patch: modifying `__proto__` or `constructor/prototype` prop is banned for security reasons, if this was on purpose, please set `banPrototypeModifications` flag false and pass it to this function. More info in fast-json-patch README");if(n&&m===void 0&&(l[p]===void 0?m=c.slice(0,u).join("/"):u==f-1&&(m=e.path),m!==void 0&&h(e,0,t,m)),u++,Array.isArray(l)){if(p==="-")p=l.length;else{if(n&&!ni(p))throw new Ae("Expected an unsigned base-10 integer value, making the new referenced value the array element with the zero-based index","OPERATION_PATH_ILLEGAL_ARRAY_INDEX",i,e,t);ni(p)&&(p=~~p)}if(u>=f){if(n&&e.op==="add"&&p>l.length)throw new Ae("The specified index MUST NOT be greater than the number of elements in the array","OPERATION_VALUE_OUT_OF_BOUNDS",i,e,t);var a=wx[e.op].call(e,l,p,t);if(a.test===!1)throw new Ae("Test operation failed","TEST_OPERATION_FAILED",i,e,t);return a}}else if(u>=f){var a=Wn[e.op].call(e,l,p,t);if(a.test===!1)throw new Ae("Test operation failed","TEST_OPERATION_FAILED",i,e,t);return a}if(l=l[p],n&&u<f&&(!l||typeof l!="object"))throw new Ae("Cannot perform operation at the desired path","OPERATION_PATH_UNRESOLVABLE",i,e,t)}}}function ii(t,e,n,r,o){if(r===void 0&&(r=!0),o===void 0&&(o=!0),n&&!Array.isArray(e))throw new Ae("Patch sequence must be an array","SEQUENCE_NOT_AN_ARRAY");r||(t=$e(t));for(var i=new Array(e.length),a=0,s=e.length;a<s;a++)i[a]=cn(t,e[a],n,!0,o,a),t=i[a].newDocument;return i.newDocument=t,i}function Ex(t,e,n){var r=cn(t,e);if(r.test===!1)throw new Ae("Test operation failed","TEST_OPERATION_FAILED",n,e,t);return r.newDocument}function oi(t,e,n,r){if(typeof t!="object"||t===null||Array.isArray(t))throw new Ae("Operation is not an object","OPERATION_NOT_AN_OBJECT",e,t,n);if(Wn[t.op]){if(typeof t.path!="string")throw new Ae("Operation `path` property is not a string","OPERATION_PATH_INVALID",e,t,n);if(t.path.indexOf("/")!==0&&t.path.length>0)throw new Ae('Operation `path` property must start with "/"',"OPERATION_PATH_INVALID",e,t,n);if((t.op==="move"||t.op==="copy")&&typeof t.from!="string")throw new Ae("Operation `from` property is not present (applicable in `move` and `copy` operations)","OPERATION_FROM_REQUIRED",e,t,n);if((t.op==="add"||t.op==="replace"||t.op==="test")&&t.value===void 0)throw new Ae("Operation `value` property is not present (applicable in `add`, `replace` and `test` operations)","OPERATION_VALUE_REQUIRED",e,t,n);if((t.op==="add"||t.op==="replace"||t.op==="test")&&Qo(t.value))throw new Ae("Operation `value` property is not present (applicable in `add`, `replace` and `test` operations)","OPERATION_VALUE_CANNOT_CONTAIN_UNDEFINED",e,t,n);if(n){if(t.op=="add"){var o=t.path.split("/").length,i=r.split("/").length;if(o!==i+1&&o!==i)throw new Ae("Cannot perform an `add` operation at the desired path","OPERATION_PATH_CANNOT_ADD",e,t,n)}else if(t.op==="replace"||t.op==="remove"||t.op==="_get"){if(t.path!==r)throw new Ae("Cannot perform the operation at a path that does not exist","OPERATION_PATH_UNRESOLVABLE",e,t,n)}else if(t.op==="move"||t.op==="copy"){var a={op:"_get",path:t.from,value:void 0},s=rh([a],n);if(s&&s.name==="OPERATION_PATH_UNRESOLVABLE")throw new Ae("Cannot perform the operation from a path that does not exist","OPERATION_FROM_UNRESOLVABLE",e,t,n)}}}else throw new Ae("Operation `op` property is not one of operations defined in RFC-6902","OPERATION_OP_INVALID",e,t,n)}function rh(t,e,n){try{if(!Array.isArray(t))throw new Ae("Patch sequence must be an array","SEQUENCE_NOT_AN_ARRAY");if(e)ii($e(e),$e(t),n||!0);else{n=n||oi;for(var r=0;r<t.length;r++)n(t[r],r,e,void 0)}}catch(o){if(o instanceof Ae)return o;throw o}}function Lr(t,e){if(t===e)return!0;if(t&&e&&typeof t=="object"&&typeof e=="object"){var n=Array.isArray(t),r=Array.isArray(e),o,i,a;if(n&&r){if(i=t.length,i!=e.length)return!1;for(o=i;o--!==0;)if(!Lr(t[o],e[o]))return!1;return!0}if(n!=r)return!1;var s=Object.keys(t);if(i=s.length,i!==Object.keys(e).length)return!1;for(o=i;o--!==0;)if(!e.hasOwnProperty(s[o]))return!1;for(o=i;o--!==0;)if(a=s[o],!Lr(t[a],e[a]))return!1;return!0}return t!==t&&e!==e}var cc={};_l(cc,{compare:()=>Rx,generate:()=>ac,observe:()=>Ix,unobserve:()=>kx});var sc=new WeakMap,xx=(function(){function t(e){this.observers=new Map,this.obj=e}return t})(),_x=(function(){function t(e,n){this.callback=e,this.observer=n}return t})();function Sx(t){return sc.get(t)}function Tx(t,e){return t.observers.get(e)}function Ax(t,e){t.observers.delete(e.callback)}function kx(t,e){e.unobserve()}function Ix(t,e){var n=[],r,o=Sx(t);if(!o)o=new xx(t),sc.set(t,o);else{var i=Tx(o,e);r=i&&i.observer}if(r)return r;if(r={},o.value=$e(t),e){r.callback=e,r.next=null;var a=function(){ac(r)},s=function(){clearTimeout(r.next),r.next=setTimeout(a)};typeof window<"u"&&(window.addEventListener("mouseup",s),window.addEventListener("keyup",s),window.addEventListener("mousedown",s),window.addEventListener("keydown",s),window.addEventListener("change",s))}return r.patches=n,r.object=t,r.unobserve=function(){ac(r),clearTimeout(r.next),Ax(o,r),typeof window<"u"&&(window.removeEventListener("mouseup",s),window.removeEventListener("keyup",s),window.removeEventListener("mousedown",s),window.removeEventListener("keydown",s),window.removeEventListener("change",s))},o.observers.set(e,new _x(e,r)),r}function ac(t,e){e===void 0&&(e=!1);var n=sc.get(t.object);lc(n.value,t.object,t.patches,"",e),t.patches.length&&ii(n.value,t.patches);var r=t.patches;return r.length>0&&(t.patches=[],t.callback&&t.callback(r)),r}function lc(t,e,n,r,o){if(e!==t){typeof e.toJSON=="function"&&(e=e.toJSON());for(var i=ti(e),a=ti(t),s=!1,c=!1,l=a.length-1;l>=0;l--){var u=a[l],f=t[u];if(ei(e,u)&&!(e[u]===void 0&&f!==void 0&&Array.isArray(e)===!1)){var m=e[u];typeof f=="object"&&f!=null&&typeof m=="object"&&m!=null&&Array.isArray(f)===Array.isArray(m)?lc(f,m,n,r+"/"+wt(u),o):f!==m&&(s=!0,o&&n.push({op:"test",path:r+"/"+wt(u),value:$e(f)}),n.push({op:"replace",path:r+"/"+wt(u),value:$e(m)}))}else Array.isArray(t)===Array.isArray(e)?(o&&n.push({op:"test",path:r+"/"+wt(u),value:$e(f)}),n.push({op:"remove",path:r+"/"+wt(u)}),c=!0):(o&&n.push({op:"test",path:r,value:t}),n.push({op:"replace",path:r,value:e}),s=!0)}if(!(!c&&i.length==a.length))for(var l=0;l<i.length;l++){var u=i[l];!ei(t,u)&&e[u]!==void 0&&n.push({op:"add",path:r+"/"+wt(u),value:$e(e[u])})}}}function Rx(t,e,n){n===void 0&&(n=!1);var r=[];return lc(t,e,r,"",n),r}var ai=Object.assign({},ic,cc,{JsonPatchError:Mr,deepClone:$e,escapePathComponent:wt,unescapePathComponent:Pr});var uc=function(t,e){return uc=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(n,r){n.__proto__=r}||function(n,r){for(var o in r)Object.prototype.hasOwnProperty.call(r,o)&&(n[o]=r[o])},uc(t,e)};function Et(t,e){if(typeof e!="function"&&e!==null)throw new TypeError("Class extends value "+String(e)+" is not a constructor or null");uc(t,e);function n(){this.constructor=t}t.prototype=e===null?Object.create(e):(n.prototype=e.prototype,new n)}function oh(t,e,n,r){function o(i){return i instanceof n?i:new n(function(a){a(i)})}return new(n||(n=Promise))(function(i,a){function s(u){try{l(r.next(u))}catch(f){a(f)}}function c(u){try{l(r.throw(u))}catch(f){a(f)}}function l(u){u.done?i(u.value):o(u.value).then(s,c)}l((r=r.apply(t,e||[])).next())})}function si(t,e){var n={label:0,sent:function(){if(i[0]&1)throw i[1];return i[1]},trys:[],ops:[]},r,o,i,a=Object.create((typeof Iterator=="function"?Iterator:Object).prototype);return a.next=s(0),a.throw=s(1),a.return=s(2),typeof Symbol=="function"&&(a[Symbol.iterator]=function(){return this}),a;function s(l){return function(u){return c([l,u])}}function c(l){if(r)throw new TypeError("Generator is already executing.");for(;a&&(a=0,l[0]&&(n=0)),n;)try{if(r=1,o&&(i=l[0]&2?o.return:l[0]?o.throw||((i=o.return)&&i.call(o),0):o.next)&&!(i=i.call(o,l[1])).done)return i;switch(o=0,i&&(l=[l[0]&2,i.value]),l[0]){case 0:case 1:i=l;break;case 4:return n.label++,{value:l[1],done:!1};case 5:n.label++,o=l[1],l=[0];continue;case 7:l=n.ops.pop(),n.trys.pop();continue;default:if(i=n.trys,!(i=i.length>0&&i[i.length-1])&&(l[0]===6||l[0]===2)){n=0;continue}if(l[0]===3&&(!i||l[1]>i[0]&&l[1]<i[3])){n.label=l[1];break}if(l[0]===6&&n.label<i[1]){n.label=i[1],i=l;break}if(i&&n.label<i[2]){n.label=i[2],n.ops.push(l);break}i[2]&&n.ops.pop(),n.trys.pop();continue}l=e.call(t,n)}catch(u){l=[6,u],o=0}finally{r=i=0}if(l[0]&5)throw l[1];return{value:l[0]?l[1]:void 0,done:!0}}}function Ot(t){var e=typeof Symbol=="function"&&Symbol.iterator,n=e&&t[e],r=0;if(n)return n.call(t);if(t&&typeof t.length=="number")return{next:function(){return t&&r>=t.length&&(t=void 0),{value:t&&t[r++],done:!t}}};throw new TypeError(e?"Object is not iterable.":"Symbol.iterator is not defined.")}function xt(t,e){var n=typeof Symbol=="function"&&t[Symbol.iterator];if(!n)return t;var r=n.call(t),o,i=[],a;try{for(;(e===void 0||e-- >0)&&!(o=r.next()).done;)i.push(o.value)}catch(s){a={error:s}}finally{try{o&&!o.done&&(n=r.return)&&n.call(r)}finally{if(a)throw a.error}}return i}function _t(t,e,n){if(n||arguments.length===2)for(var r=0,o=e.length,i;r<o;r++)(i||!(r in e))&&(i||(i=Array.prototype.slice.call(e,0,r)),i[r]=e[r]);return t.concat(i||Array.prototype.slice.call(e))}function un(t){return this instanceof un?(this.v=t,this):new un(t)}function ih(t,e,n){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var r=n.apply(t,e||[]),o,i=[];return o=Object.create((typeof AsyncIterator=="function"?AsyncIterator:Object).prototype),s("next"),s("throw"),s("return",a),o[Symbol.asyncIterator]=function(){return this},o;function a(p){return function(h){return Promise.resolve(h).then(p,f)}}function s(p,h){r[p]&&(o[p]=function(x){return new Promise(function(g,w){i.push([p,x,g,w])>1||c(p,x)})},h&&(o[p]=h(o[p])))}function c(p,h){try{l(r[p](h))}catch(x){m(i[0][3],x)}}function l(p){p.value instanceof un?Promise.resolve(p.value.v).then(u,f):m(i[0][2],p)}function u(p){c("next",p)}function f(p){c("throw",p)}function m(p,h){p(h),i.shift(),i.length&&c(i[0][0],i[0][1])}}function ah(t){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var e=t[Symbol.asyncIterator],n;return e?e.call(t):(t=typeof Ot=="function"?Ot(t):t[Symbol.iterator](),n={},r("next"),r("throw"),r("return"),n[Symbol.asyncIterator]=function(){return this},n);function r(i){n[i]=t[i]&&function(a){return new Promise(function(s,c){a=t[i](a),o(s,c,a.done,a.value)})}}function o(i,a,s,c){Promise.resolve(c).then(function(l){i({value:l,done:s})},a)}}function Q(t){return typeof t=="function"}function qn(t){var e=function(r){Error.call(r),r.stack=new Error().stack},n=t(e);return n.prototype=Object.create(Error.prototype),n.prototype.constructor=n,n}var li=qn(function(t){return function(n){t(this),this.message=n?n.length+` errors occurred during unsubscription:
`+n.map(function(r,o){return o+1+") "+r.toString()}).join(`
  `):"",this.name="UnsubscriptionError",this.errors=n}});function zr(t,e){if(t){var n=t.indexOf(e);0<=n&&t.splice(n,1)}}var Yn=(function(){function t(e){this.initialTeardown=e,this.closed=!1,this._parentage=null,this._finalizers=null}return t.prototype.unsubscribe=function(){var e,n,r,o,i;if(!this.closed){this.closed=!0;var a=this._parentage;if(a)if(this._parentage=null,Array.isArray(a))try{for(var s=Ot(a),c=s.next();!c.done;c=s.next()){var l=c.value;l.remove(this)}}catch(x){e={error:x}}finally{try{c&&!c.done&&(n=s.return)&&n.call(s)}finally{if(e)throw e.error}}else a.remove(this);var u=this.initialTeardown;if(Q(u))try{u()}catch(x){i=x instanceof li?x.errors:[x]}var f=this._finalizers;if(f){this._finalizers=null;try{for(var m=Ot(f),p=m.next();!p.done;p=m.next()){var h=p.value;try{sh(h)}catch(x){i=i??[],x instanceof li?i=_t(_t([],xt(i)),xt(x.errors)):i.push(x)}}}catch(x){r={error:x}}finally{try{p&&!p.done&&(o=m.return)&&o.call(m)}finally{if(r)throw r.error}}}if(i)throw new li(i)}},t.prototype.add=function(e){var n;if(e&&e!==this)if(this.closed)sh(e);else{if(e instanceof t){if(e.closed||e._hasParent(this))return;e._addParent(this)}(this._finalizers=(n=this._finalizers)!==null&&n!==void 0?n:[]).push(e)}},t.prototype._hasParent=function(e){var n=this._parentage;return n===e||Array.isArray(n)&&n.includes(e)},t.prototype._addParent=function(e){var n=this._parentage;this._parentage=Array.isArray(n)?(n.push(e),n):n?[n,e]:e},t.prototype._removeParent=function(e){var n=this._parentage;n===e?this._parentage=null:Array.isArray(n)&&zr(n,e)},t.prototype.remove=function(e){var n=this._finalizers;n&&zr(n,e),e instanceof t&&e._removeParent(this)},t.EMPTY=(function(){var e=new t;return e.closed=!0,e})(),t})();var dc=Yn.EMPTY;function ci(t){return t instanceof Yn||t&&"closed"in t&&Q(t.remove)&&Q(t.add)&&Q(t.unsubscribe)}function sh(t){Q(t)?t():t.unsubscribe()}var ct={onUnhandledError:null,onStoppedNotification:null,Promise:void 0,useDeprecatedSynchronousErrorHandling:!1,useDeprecatedNextContext:!1};var Kn={setTimeout:function(t,e){for(var n=[],r=2;r<arguments.length;r++)n[r-2]=arguments[r];var o=Kn.delegate;return o?.setTimeout?o.setTimeout.apply(o,_t([t,e],xt(n))):setTimeout.apply(void 0,_t([t,e],xt(n)))},clearTimeout:function(t){var e=Kn.delegate;return(e?.clearTimeout||clearTimeout)(t)},delegate:void 0};function ui(t){Kn.setTimeout(function(){var e=ct.onUnhandledError;if(e)e(t);else throw t})}function Dr(){}var lh=(function(){return pc("C",void 0,void 0)})();function ch(t){return pc("E",void 0,t)}function uh(t){return pc("N",t,void 0)}function pc(t,e,n){return{kind:t,value:e,error:n}}var dn=null;function Xn(t){if(ct.useDeprecatedSynchronousErrorHandling){var e=!dn;if(e&&(dn={errorThrown:!1,error:null}),t(),e){var n=dn,r=n.errorThrown,o=n.error;if(dn=null,r)throw o}}else t()}function dh(t){ct.useDeprecatedSynchronousErrorHandling&&dn&&(dn.errorThrown=!0,dn.error=t)}var $r=(function(t){Et(e,t);function e(n){var r=t.call(this)||this;return r.isStopped=!1,n?(r.destination=n,ci(n)&&n.add(r)):r.destination=Px,r}return e.create=function(n,r,o){return new pi(n,r,o)},e.prototype.next=function(n){this.isStopped?fc(uh(n),this):this._next(n)},e.prototype.error=function(n){this.isStopped?fc(ch(n),this):(this.isStopped=!0,this._error(n))},e.prototype.complete=function(){this.isStopped?fc(lh,this):(this.isStopped=!0,this._complete())},e.prototype.unsubscribe=function(){this.closed||(this.isStopped=!0,t.prototype.unsubscribe.call(this),this.destination=null)},e.prototype._next=function(n){this.destination.next(n)},e.prototype._error=function(n){try{this.destination.error(n)}finally{this.unsubscribe()}},e.prototype._complete=function(){try{this.destination.complete()}finally{this.unsubscribe()}},e})(Yn);var Cx=Function.prototype.bind;function hc(t,e){return Cx.call(t,e)}var Nx=(function(){function t(e){this.partialObserver=e}return t.prototype.next=function(e){var n=this.partialObserver;if(n.next)try{n.next(e)}catch(r){di(r)}},t.prototype.error=function(e){var n=this.partialObserver;if(n.error)try{n.error(e)}catch(r){di(r)}else di(e)},t.prototype.complete=function(){var e=this.partialObserver;if(e.complete)try{e.complete()}catch(n){di(n)}},t})(),pi=(function(t){Et(e,t);function e(n,r,o){var i=t.call(this)||this,a;if(Q(n)||!n)a={next:n??void 0,error:r??void 0,complete:o??void 0};else{var s;i&&ct.useDeprecatedNextContext?(s=Object.create(n),s.unsubscribe=function(){return i.unsubscribe()},a={next:n.next&&hc(n.next,s),error:n.error&&hc(n.error,s),complete:n.complete&&hc(n.complete,s)}):a=n}return i.destination=new Nx(a),i}return e})($r);function di(t){ct.useDeprecatedSynchronousErrorHandling?dh(t):ui(t)}function Ox(t){throw t}function fc(t,e){var n=ct.onStoppedNotification;n&&Kn.setTimeout(function(){return n(t,e)})}var Px={closed:!0,next:Dr,error:Ox,complete:Dr};var Jn=(function(){return typeof Symbol=="function"&&Symbol.observable||"@@observable"})();function Qn(t){return t}function hi(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];return mc(t)}function mc(t){return t.length===0?Qn:t.length===1?t[0]:function(n){return t.reduce(function(r,o){return o(r)},n)}}var ve=(function(){function t(e){e&&(this._subscribe=e)}return t.prototype.lift=function(e){var n=new t;return n.source=this,n.operator=e,n},t.prototype.subscribe=function(e,n,r){var o=this,i=Lx(e)?e:new pi(e,n,r);return Xn(function(){var a=o,s=a.operator,c=a.source;i.add(s?s.call(i,c):c?o._subscribe(i):o._trySubscribe(i))}),i},t.prototype._trySubscribe=function(e){try{return this._subscribe(e)}catch(n){e.error(n)}},t.prototype.forEach=function(e,n){var r=this;return n=ph(n),new n(function(o,i){var a=new pi({next:function(s){try{e(s)}catch(c){i(c),a.unsubscribe()}},error:i,complete:o});r.subscribe(a)})},t.prototype._subscribe=function(e){var n;return(n=this.source)===null||n===void 0?void 0:n.subscribe(e)},t.prototype[Jn]=function(){return this},t.prototype.pipe=function(){for(var e=[],n=0;n<arguments.length;n++)e[n]=arguments[n];return mc(e)(this)},t.prototype.toPromise=function(e){var n=this;return e=ph(e),new e(function(r,o){var i;n.subscribe(function(a){return i=a},function(a){return o(a)},function(){return r(i)})})},t.create=function(e){return new t(e)},t})();function ph(t){var e;return(e=t??ct.Promise)!==null&&e!==void 0?e:Promise}function Mx(t){return t&&Q(t.next)&&Q(t.error)&&Q(t.complete)}function Lx(t){return t&&t instanceof $r||Mx(t)&&ci(t)}function zx(t){return Q(t?.lift)}function Ee(t){return function(e){if(zx(e))return e.lift(function(n){try{return t(n,this)}catch(r){this.error(r)}});throw new TypeError("Unable to lift unknown Observable type")}}function Ie(t,e,n,r,o){return new Dx(t,e,n,r,o)}var Dx=(function(t){Et(e,t);function e(n,r,o,i,a,s){var c=t.call(this,n)||this;return c.onFinalize=a,c.shouldUnsubscribe=s,c._next=r?function(l){try{r(l)}catch(u){n.error(u)}}:t.prototype._next,c._error=i?function(l){try{i(l)}catch(u){n.error(u)}finally{this.unsubscribe()}}:t.prototype._error,c._complete=o?function(){try{o()}catch(l){n.error(l)}finally{this.unsubscribe()}}:t.prototype._complete,c}return e.prototype.unsubscribe=function(){var n;if(!this.shouldUnsubscribe||this.shouldUnsubscribe()){var r=this.closed;t.prototype.unsubscribe.call(this),!r&&((n=this.onFinalize)===null||n===void 0||n.call(this))}},e})($r);var hh=qn(function(t){return function(){t(this),this.name="ObjectUnsubscribedError",this.message="object unsubscribed"}});var St=(function(t){Et(e,t);function e(){var n=t.call(this)||this;return n.closed=!1,n.currentObservers=null,n.observers=[],n.isStopped=!1,n.hasError=!1,n.thrownError=null,n}return e.prototype.lift=function(n){var r=new fh(this,this);return r.operator=n,r},e.prototype._throwIfClosed=function(){if(this.closed)throw new hh},e.prototype.next=function(n){var r=this;Xn(function(){var o,i;if(r._throwIfClosed(),!r.isStopped){r.currentObservers||(r.currentObservers=Array.from(r.observers));try{for(var a=Ot(r.currentObservers),s=a.next();!s.done;s=a.next()){var c=s.value;c.next(n)}}catch(l){o={error:l}}finally{try{s&&!s.done&&(i=a.return)&&i.call(a)}finally{if(o)throw o.error}}}})},e.prototype.error=function(n){var r=this;Xn(function(){if(r._throwIfClosed(),!r.isStopped){r.hasError=r.isStopped=!0,r.thrownError=n;for(var o=r.observers;o.length;)o.shift().error(n)}})},e.prototype.complete=function(){var n=this;Xn(function(){if(n._throwIfClosed(),!n.isStopped){n.isStopped=!0;for(var r=n.observers;r.length;)r.shift().complete()}})},e.prototype.unsubscribe=function(){this.isStopped=this.closed=!0,this.observers=this.currentObservers=null},Object.defineProperty(e.prototype,"observed",{get:function(){var n;return((n=this.observers)===null||n===void 0?void 0:n.length)>0},enumerable:!1,configurable:!0}),e.prototype._trySubscribe=function(n){return this._throwIfClosed(),t.prototype._trySubscribe.call(this,n)},e.prototype._subscribe=function(n){return this._throwIfClosed(),this._checkFinalizedStatuses(n),this._innerSubscribe(n)},e.prototype._innerSubscribe=function(n){var r=this,o=this,i=o.hasError,a=o.isStopped,s=o.observers;return i||a?dc:(this.currentObservers=null,s.push(n),new Yn(function(){r.currentObservers=null,zr(s,n)}))},e.prototype._checkFinalizedStatuses=function(n){var r=this,o=r.hasError,i=r.thrownError,a=r.isStopped;o?n.error(i):a&&n.complete()},e.prototype.asObservable=function(){var n=new ve;return n.source=this,n},e.create=function(n,r){return new fh(n,r)},e})(ve);var fh=(function(t){Et(e,t);function e(n,r){var o=t.call(this)||this;return o.destination=n,o.source=r,o}return e.prototype.next=function(n){var r,o;(o=(r=this.destination)===null||r===void 0?void 0:r.next)===null||o===void 0||o.call(r,n)},e.prototype.error=function(n){var r,o;(o=(r=this.destination)===null||r===void 0?void 0:r.error)===null||o===void 0||o.call(r,n)},e.prototype.complete=function(){var n,r;(r=(n=this.destination)===null||n===void 0?void 0:n.complete)===null||r===void 0||r.call(n)},e.prototype._subscribe=function(n){var r,o;return(o=(r=this.source)===null||r===void 0?void 0:r.subscribe(n))!==null&&o!==void 0?o:dc},e})(St);var gc={now:function(){return(gc.delegate||Date).now()},delegate:void 0};var fi=(function(t){Et(e,t);function e(n,r,o){n===void 0&&(n=1/0),r===void 0&&(r=1/0),o===void 0&&(o=gc);var i=t.call(this)||this;return i._bufferSize=n,i._windowTime=r,i._timestampProvider=o,i._buffer=[],i._infiniteTimeWindow=!0,i._infiniteTimeWindow=r===1/0,i._bufferSize=Math.max(1,n),i._windowTime=Math.max(1,r),i}return e.prototype.next=function(n){var r=this,o=r.isStopped,i=r._buffer,a=r._infiniteTimeWindow,s=r._timestampProvider,c=r._windowTime;o||(i.push(n),!a&&i.push(s.now()+c)),this._trimBuffer(),t.prototype.next.call(this,n)},e.prototype._subscribe=function(n){this._throwIfClosed(),this._trimBuffer();for(var r=this._innerSubscribe(n),o=this,i=o._infiniteTimeWindow,a=o._buffer,s=a.slice(),c=0;c<s.length&&!n.closed;c+=i?1:2)n.next(s[c]);return this._checkFinalizedStatuses(n),r},e.prototype._trimBuffer=function(){var n=this,r=n._bufferSize,o=n._timestampProvider,i=n._buffer,a=n._infiniteTimeWindow,s=(a?1:2)*r;if(r<1/0&&s<i.length&&i.splice(0,i.length-s),!a){for(var c=o.now(),l=0,u=1;u<i.length&&i[u]<=c;u+=2)l=u;l&&i.splice(0,l+1)}},e})(St);var pn=new ve(function(t){return t.complete()});function mh(t){return t&&Q(t.schedule)}function $x(t){return t[t.length-1]}function mi(t){return mh($x(t))?t.pop():void 0}var gi=(function(t){return t&&typeof t.length=="number"&&typeof t!="function"});function vi(t){return Q(t?.then)}function bi(t){return Q(t[Jn])}function yi(t){return Symbol.asyncIterator&&Q(t?.[Symbol.asyncIterator])}function wi(t){return new TypeError("You provided "+(t!==null&&typeof t=="object"?"an invalid object":"'"+t+"'")+" where a stream was expected. You can provide an Observable, Promise, ReadableStream, Array, AsyncIterable, or Iterable.")}function Ux(){return typeof Symbol!="function"||!Symbol.iterator?"@@iterator":Symbol.iterator}var Ei=Ux();function xi(t){return Q(t?.[Ei])}function _i(t){return ih(this,arguments,function(){var n,r,o,i;return si(this,function(a){switch(a.label){case 0:n=t.getReader(),a.label=1;case 1:a.trys.push([1,,9,10]),a.label=2;case 2:return[4,un(n.read())];case 3:return r=a.sent(),o=r.value,i=r.done,i?[4,un(void 0)]:[3,5];case 4:return[2,a.sent()];case 5:return[4,un(o)];case 6:return[4,a.sent()];case 7:return a.sent(),[3,2];case 8:return[3,10];case 9:return n.releaseLock(),[7];case 10:return[2]}})})}function Si(t){return Q(t?.getReader)}function Me(t){if(t instanceof ve)return t;if(t!=null){if(bi(t))return Hx(t);if(gi(t))return Fx(t);if(vi(t))return Gx(t);if(yi(t))return gh(t);if(xi(t))return Bx(t);if(Si(t))return Zx(t)}throw wi(t)}function Hx(t){return new ve(function(e){var n=t[Jn]();if(Q(n.subscribe))return n.subscribe(e);throw new TypeError("Provided object does not correctly implement Symbol.observable")})}function Fx(t){return new ve(function(e){for(var n=0;n<t.length&&!e.closed;n++)e.next(t[n]);e.complete()})}function Gx(t){return new ve(function(e){t.then(function(n){e.closed||(e.next(n),e.complete())},function(n){return e.error(n)}).then(null,ui)})}function Bx(t){return new ve(function(e){var n,r;try{for(var o=Ot(t),i=o.next();!i.done;i=o.next()){var a=i.value;if(e.next(a),e.closed)return}}catch(s){n={error:s}}finally{try{i&&!i.done&&(r=o.return)&&r.call(o)}finally{if(n)throw n.error}}e.complete()})}function gh(t){return new ve(function(e){Vx(t,e).catch(function(n){return e.error(n)})})}function Zx(t){return gh(_i(t))}function Vx(t,e){var n,r,o,i;return oh(this,void 0,void 0,function(){var a,s;return si(this,function(c){switch(c.label){case 0:c.trys.push([0,5,6,11]),n=ah(t),c.label=1;case 1:return[4,n.next()];case 2:if(r=c.sent(),!!r.done)return[3,4];if(a=r.value,e.next(a),e.closed)return[2];c.label=3;case 3:return[3,1];case 4:return[3,11];case 5:return s=c.sent(),o={error:s},[3,11];case 6:return c.trys.push([6,,9,10]),r&&!r.done&&(i=n.return)?[4,i.call(n)]:[3,8];case 7:c.sent(),c.label=8;case 8:return[3,10];case 9:if(o)throw o.error;return[7];case 10:return[7];case 11:return e.complete(),[2]}})})}function ot(t,e,n,r,o){r===void 0&&(r=0),o===void 0&&(o=!1);var i=e.schedule(function(){n(),o?t.add(this.schedule(null,r)):this.unsubscribe()},r);if(t.add(i),!o)return i}function Ti(t,e){return e===void 0&&(e=0),Ee(function(n,r){n.subscribe(Ie(r,function(o){return ot(r,t,function(){return r.next(o)},e)},function(){return ot(r,t,function(){return r.complete()},e)},function(o){return ot(r,t,function(){return r.error(o)},e)}))})}function Ai(t,e){return e===void 0&&(e=0),Ee(function(n,r){r.add(t.schedule(function(){return n.subscribe(r)},e))})}function vh(t,e){return Me(t).pipe(Ai(e),Ti(e))}function bh(t,e){return Me(t).pipe(Ai(e),Ti(e))}function yh(t,e){return new ve(function(n){var r=0;return e.schedule(function(){r===t.length?n.complete():(n.next(t[r++]),n.closed||this.schedule())})})}function wh(t,e){return new ve(function(n){var r;return ot(n,e,function(){r=t[Ei](),ot(n,e,function(){var o,i,a;try{o=r.next(),i=o.value,a=o.done}catch(s){n.error(s);return}a?n.complete():n.next(i)},0,!0)}),function(){return Q(r?.return)&&r.return()}})}function ki(t,e){if(!t)throw new Error("Iterable cannot be null");return new ve(function(n){ot(n,e,function(){var r=t[Symbol.asyncIterator]();ot(n,e,function(){r.next().then(function(o){o.done?n.complete():n.next(o.value)})},0,!0)})})}function Eh(t,e){return ki(_i(t),e)}function xh(t,e){if(t!=null){if(bi(t))return vh(t,e);if(gi(t))return yh(t,e);if(vi(t))return bh(t,e);if(yi(t))return ki(t,e);if(xi(t))return wh(t,e);if(Si(t))return Eh(t,e)}throw wi(t)}function Pt(t,e){return e?xh(t,e):Me(t)}function ue(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];var n=mi(t);return Pt(t,n)}function F(t,e){var n=Q(t)?t:function(){return t},r=function(o){return o.error(n())};return new ve(e?function(o){return e.schedule(r,0,o)}:r)}var _h=qn(function(t){return function(){t(this),this.name="EmptyError",this.message="no elements in sequence"}});function Ii(t,e){var n=typeof e=="object";return new Promise(function(r,o){var i=!1,a;t.subscribe({next:function(s){a=s,i=!0},error:o,complete:function(){i?r(a):n?r(e.defaultValue):o(new _h)}})})}function Tt(t,e){return Ee(function(n,r){var o=0;n.subscribe(Ie(r,function(i){r.next(t.call(e,i,o++))}))})}function Sh(t,e,n,r,o,i,a,s){var c=[],l=0,u=0,f=!1,m=function(){f&&!c.length&&!l&&e.complete()},p=function(x){return l<r?h(x):c.push(x)},h=function(x){i&&e.next(x),l++;var g=!1;Me(n(x,u++)).subscribe(Ie(e,function(w){o?.(w),i?p(w):e.next(w)},function(){g=!0},void 0,function(){if(g)try{l--;for(var w=function(){var b=c.shift();a?ot(e,a,function(){return h(b)}):h(b)};c.length&&l<r;)w();m()}catch(b){e.error(b)}}))};return t.subscribe(Ie(e,p,function(){f=!0,m()})),function(){s?.()}}function We(t,e,n){return n===void 0&&(n=1/0),Q(e)?We(function(r,o){return Tt(function(i,a){return e(r,i,o,a)})(Me(t(r,o)))},n):(typeof e=="number"&&(n=e),Ee(function(r,o){return Sh(r,o,t,n)}))}function Ur(t){return t===void 0&&(t=1/0),We(Qn,t)}function Th(){return Ur(1)}function hn(t){return new ve(function(e){Me(t()).subscribe(e)})}function vc(t,e){return Ee(function(n,r){var o=0;n.subscribe(Ie(r,function(i){return t.call(e,i,o++)&&r.next(i)}))})}function er(t){return Ee(function(e,n){var r=null,o=!1,i;r=e.subscribe(Ie(n,void 0,void 0,function(a){i=Me(t(a,er(t)(e))),r?(r.unsubscribe(),r=null,i.subscribe(n)):o=!0})),o&&(r.unsubscribe(),r=null,i.subscribe(n))})}function Ri(t,e){return Q(e)?We(t,e,1):We(t,1)}function Ah(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];var n=mi(t);return Ee(function(r,o){Th()(Pt(_t([r],xt(t)),n)).subscribe(o)})}function bc(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];return Ah.apply(void 0,_t([],xt(t)))}function yc(t){return Ee(function(e,n){var r=!1;e.subscribe(Ie(n,function(o){r=!0,n.next(o)},function(){r||n.next(t),n.complete()}))})}function fn(t){return Ee(function(e,n){try{e.subscribe(n)}finally{n.add(t)}})}function wc(t,e){return Ee(function(n,r){var o=null,i=0,a=!1,s=function(){return a&&!o&&r.complete()};n.subscribe(Ie(r,function(c){o?.unsubscribe();var l=0,u=i++;Me(t(c,u)).subscribe(o=Ie(r,function(f){return r.next(e?e(c,f,u,l++):f)},function(){o=null,s()}))},function(){a=!0,s()}))})}function Ci(t){return Ee(function(e,n){Me(t).subscribe(Ie(n,function(){return n.complete()},Dr)),!n.closed&&e.subscribe(n)})}function Ni(t,e,n){var r=Q(t)||e||n?{next:t,error:e,complete:n}:t;return r?Ee(function(o,i){var a;(a=r.subscribe)===null||a===void 0||a.call(r);var s=!0;o.subscribe(Ie(i,function(c){var l;(l=r.next)===null||l===void 0||l.call(r,c),i.next(c)},function(){var c;s=!1,(c=r.complete)===null||c===void 0||c.call(r),i.complete()},function(c){var l;s=!1,(l=r.error)===null||l===void 0||l.call(r,c),i.error(c)},function(){var c,l;s&&((c=r.unsubscribe)===null||c===void 0||c.call(r)),(l=r.finalize)===null||l===void 0||l.call(r)}))}):Qn}function kh(t){return` \r
	`.indexOf(t)>=0}function Oi(t){for(var e=["topLevel"],n=0,r,o,i,a=function(b){return e.push(b)},s=function(b){return e[e.length-1]=b},c=function(b){r==null&&(r=n,o=e.length,i=b)},l=function(b){b===i&&(r=void 0,o=void 0,i=void 0)},u=function(){return e.pop()},f=function(){return n--},m=function(b){if("0"<=b&&b<="9"){a("number");return}switch(b){case'"':a("string");return;case"-":a("numberNeedsDigit");return;case"t":a("true");return;case"f":a("false");return;case"n":a("null");return;case"[":a("arrayNeedsValue");return;case"{":a("objectNeedsKey");return}},p=t.length;n<p;n++){var h=t[n];switch(e[e.length-1]){case"topLevel":m(h);break;case"string":switch(h){case'"':u();break;case"\\":c("stringEscape"),a("stringEscaped");break}break;case"stringEscaped":h==="u"?a("stringUnicode"):(l("stringEscape"),u());break;case"stringUnicode":n-t.lastIndexOf("u",n)===4&&(l("stringEscape"),u());break;case"number":h==="."?s("numberNeedsDigit"):h==="e"||h==="E"?s("numberNeedsExponent"):(h<"0"||h>"9")&&(f(),u());break;case"numberNeedsDigit":s("number");break;case"numberNeedsExponent":s(h==="+"||h==="-"?"numberNeedsDigit":"number");break;case"true":case"false":case"null":(h<"a"||h>"z")&&(f(),u());break;case"arrayNeedsValue":h==="]"?u():kh(h)||(l("collectionItem"),s("arrayNeedsComma"),m(h));break;case"arrayNeedsComma":h==="]"?u():h===","&&(c("collectionItem"),s("arrayNeedsValue"));break;case"objectNeedsKey":h==="}"?u():h==='"'&&(c("collectionItem"),s("objectNeedsColon"),a("string"));break;case"objectNeedsColon":h===":"&&s("objectNeedsValue");break;case"objectNeedsValue":kh(h)||(l("collectionItem"),s("objectNeedsComma"),m(h));break;case"objectNeedsComma":h==="}"?u():h===","&&(c("collectionItem"),s("objectNeedsKey"));break}}o!=null&&(e.length=o);for(var x=[r!=null?t.slice(0,r):t],g=function(b){return x.push(b.slice(t.length-t.lastIndexOf(b[0])))},w=e.length-1;w>=0;w--)switch(e[w]){case"string":x.push('"');break;case"numberNeedsDigit":case"numberNeedsExponent":x.push("0");break;case"true":g("true");break;case"false":g("false");break;case"null":g("null");break;case"arrayNeedsValue":case"arrayNeedsComma":x.push("]");break;case"objectNeedsKey":case"objectNeedsColon":case"objectNeedsValue":case"objectNeedsComma":x.push("}");break}return x.join("")}var jx=Object.freeze({status:"aborted"});function A(t,e,n){function r(s,c){var l;Object.defineProperty(s,"_zod",{value:s._zod??{},enumerable:!1}),(l=s._zod).traits??(l.traits=new Set),s._zod.traits.add(t),e(s,c);for(let u in a.prototype)u in s||Object.defineProperty(s,u,{value:a.prototype[u].bind(s)});s._zod.constr=a,s._zod.def=c}let o=n?.Parent??Object;class i extends o{}Object.defineProperty(i,"name",{value:t});function a(s){var c;let l=n?.Parent?new i:this;r(l,s),(c=l._zod).deferred??(c.deferred=[]);for(let u of l._zod.deferred)u();return l}return Object.defineProperty(a,"init",{value:r}),Object.defineProperty(a,Symbol.hasInstance,{value:s=>n?.Parent&&s instanceof n.Parent?!0:s?._zod?.traits?.has(t)}),Object.defineProperty(a,"name",{value:t}),a}var Mt=class extends Error{constructor(){super("Encountered Promise during synchronous parse. Use .parseAsync() instead.")}},Pi={};function Ue(t){return t&&Object.assign(Pi,t),Pi}var ce={};_l(ce,{BIGINT_FORMAT_RANGES:()=>Rh,Class:()=>xc,NUMBER_FORMAT_RANGES:()=>Cc,aborted:()=>gn,allowsEval:()=>kc,assert:()=>Xx,assertEqual:()=>Wx,assertIs:()=>Yx,assertNever:()=>Kx,assertNotEqual:()=>qx,assignProp:()=>Ac,cached:()=>Fr,captureStackTrace:()=>Li,cleanEnum:()=>u_,cleanRegex:()=>Br,clone:()=>ut,createTransparentProxy:()=>r_,defineLazy:()=>le,esc:()=>mn,escapeRegex:()=>Gt,extend:()=>a_,finalizeIssue:()=>dt,floatSafeRemainder:()=>Tc,getElementAtPath:()=>Jx,getEnumValues:()=>_c,getLengthableOrigin:()=>Zr,getParsedType:()=>n_,getSizableOrigin:()=>Ch,isObject:()=>tr,isPlainObject:()=>nr,issue:()=>Nc,joinValues:()=>Mi,jsonStringifyReplacer:()=>Sc,merge:()=>s_,normalizeParams:()=>G,nullish:()=>Gr,numKeys:()=>t_,omit:()=>i_,optionalKeys:()=>Rc,partial:()=>l_,pick:()=>o_,prefixIssues:()=>At,primitiveTypes:()=>Ih,promiseAllObject:()=>Qx,propertyKeyTypes:()=>Ic,randomString:()=>e_,required:()=>c_,stringifyPrimitive:()=>zi,unwrapMessage:()=>Hr});function Wx(t){return t}function qx(t){return t}function Yx(t){}function Kx(t){throw new Error}function Xx(t){}function _c(t){let e=Object.values(t).filter(r=>typeof r=="number");return Object.entries(t).filter(([r,o])=>e.indexOf(+r)===-1).map(([r,o])=>o)}function Mi(t,e="|"){return t.map(n=>zi(n)).join(e)}function Sc(t,e){return typeof e=="bigint"?e.toString():e}function Fr(t){return{get value(){{let n=t();return Object.defineProperty(this,"value",{value:n}),n}throw new Error("cached value already set")}}}function Gr(t){return t==null}function Br(t){let e=t.startsWith("^")?1:0,n=t.endsWith("$")?t.length-1:t.length;return t.slice(e,n)}function Tc(t,e){let n=(t.toString().split(".")[1]||"").length,r=(e.toString().split(".")[1]||"").length,o=n>r?n:r,i=Number.parseInt(t.toFixed(o).replace(".","")),a=Number.parseInt(e.toFixed(o).replace(".",""));return i%a/10**o}function le(t,e,n){Object.defineProperty(t,e,{get(){{let o=n();return t[e]=o,o}throw new Error("cached value already set")},set(o){Object.defineProperty(t,e,{value:o})},configurable:!0})}function Ac(t,e,n){Object.defineProperty(t,e,{value:n,writable:!0,enumerable:!0,configurable:!0})}function Jx(t,e){return e?e.reduce((n,r)=>n?.[r],t):t}function Qx(t){let e=Object.keys(t),n=e.map(r=>t[r]);return Promise.all(n).then(r=>{let o={};for(let i=0;i<e.length;i++)o[e[i]]=r[i];return o})}function e_(t=10){let e="abcdefghijklmnopqrstuvwxyz",n="";for(let r=0;r<t;r++)n+=e[Math.floor(Math.random()*e.length)];return n}function mn(t){return JSON.stringify(t)}var Li=Error.captureStackTrace?Error.captureStackTrace:(...t)=>{};function tr(t){return typeof t=="object"&&t!==null&&!Array.isArray(t)}var kc=Fr(()=>{if(typeof navigator<"u"&&navigator?.userAgent?.includes("Cloudflare"))return!1;try{let t=Function;return new t(""),!0}catch{return!1}});function nr(t){if(tr(t)===!1)return!1;let e=t.constructor;if(e===void 0)return!0;let n=e.prototype;return!(tr(n)===!1||Object.prototype.hasOwnProperty.call(n,"isPrototypeOf")===!1)}function t_(t){let e=0;for(let n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}var n_=t=>{let e=typeof t;switch(e){case"undefined":return"undefined";case"string":return"string";case"number":return Number.isNaN(t)?"nan":"number";case"boolean":return"boolean";case"function":return"function";case"bigint":return"bigint";case"symbol":return"symbol";case"object":return Array.isArray(t)?"array":t===null?"null":t.then&&typeof t.then=="function"&&t.catch&&typeof t.catch=="function"?"promise":typeof Map<"u"&&t instanceof Map?"map":typeof Set<"u"&&t instanceof Set?"set":typeof Date<"u"&&t instanceof Date?"date":typeof File<"u"&&t instanceof File?"file":"object";default:throw new Error(`Unknown data type: ${e}`)}},Ic=new Set(["string","number","symbol"]),Ih=new Set(["string","number","bigint","boolean","symbol","undefined"]);function Gt(t){return t.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")}function ut(t,e,n){let r=new t._zod.constr(e??t._zod.def);return(!e||n?.parent)&&(r._zod.parent=t),r}function G(t){let e=t;if(!e)return{};if(typeof e=="string")return{error:()=>e};if(e?.message!==void 0){if(e?.error!==void 0)throw new Error("Cannot specify both `message` and `error` params");e.error=e.message}return delete e.message,typeof e.error=="string"?{...e,error:()=>e.error}:e}function r_(t){let e;return new Proxy({},{get(n,r,o){return e??(e=t()),Reflect.get(e,r,o)},set(n,r,o,i){return e??(e=t()),Reflect.set(e,r,o,i)},has(n,r){return e??(e=t()),Reflect.has(e,r)},deleteProperty(n,r){return e??(e=t()),Reflect.deleteProperty(e,r)},ownKeys(n){return e??(e=t()),Reflect.ownKeys(e)},getOwnPropertyDescriptor(n,r){return e??(e=t()),Reflect.getOwnPropertyDescriptor(e,r)},defineProperty(n,r,o){return e??(e=t()),Reflect.defineProperty(e,r,o)}})}function zi(t){return typeof t=="bigint"?t.toString()+"n":typeof t=="string"?`"${t}"`:`${t}`}function Rc(t){return Object.keys(t).filter(e=>t[e]._zod.optin==="optional"&&t[e]._zod.optout==="optional")}var Cc={safeint:[Number.MIN_SAFE_INTEGER,Number.MAX_SAFE_INTEGER],int32:[-2147483648,2147483647],uint32:[0,4294967295],float32:[-34028234663852886e22,34028234663852886e22],float64:[-Number.MAX_VALUE,Number.MAX_VALUE]},Rh={int64:[BigInt("-9223372036854775808"),BigInt("9223372036854775807")],uint64:[BigInt(0),BigInt("18446744073709551615")]};function o_(t,e){let n={},r=t._zod.def;for(let o in e){if(!(o in r.shape))throw new Error(`Unrecognized key: "${o}"`);e[o]&&(n[o]=r.shape[o])}return ut(t,{...t._zod.def,shape:n,checks:[]})}function i_(t,e){let n={...t._zod.def.shape},r=t._zod.def;for(let o in e){if(!(o in r.shape))throw new Error(`Unrecognized key: "${o}"`);e[o]&&delete n[o]}return ut(t,{...t._zod.def,shape:n,checks:[]})}function a_(t,e){if(!nr(e))throw new Error("Invalid input to extend: expected a plain object");let n={...t._zod.def,get shape(){let r={...t._zod.def.shape,...e};return Ac(this,"shape",r),r},checks:[]};return ut(t,n)}function s_(t,e){return ut(t,{...t._zod.def,get shape(){let n={...t._zod.def.shape,...e._zod.def.shape};return Ac(this,"shape",n),n},catchall:e._zod.def.catchall,checks:[]})}function l_(t,e,n){let r=e._zod.def.shape,o={...r};if(n)for(let i in n){if(!(i in r))throw new Error(`Unrecognized key: "${i}"`);n[i]&&(o[i]=t?new t({type:"optional",innerType:r[i]}):r[i])}else for(let i in r)o[i]=t?new t({type:"optional",innerType:r[i]}):r[i];return ut(e,{...e._zod.def,shape:o,checks:[]})}function c_(t,e,n){let r=e._zod.def.shape,o={...r};if(n)for(let i in n){if(!(i in o))throw new Error(`Unrecognized key: "${i}"`);n[i]&&(o[i]=new t({type:"nonoptional",innerType:r[i]}))}else for(let i in r)o[i]=new t({type:"nonoptional",innerType:r[i]});return ut(e,{...e._zod.def,shape:o,checks:[]})}function gn(t,e=0){for(let n=e;n<t.issues.length;n++)if(t.issues[n]?.continue!==!0)return!0;return!1}function At(t,e){return e.map(n=>{var r;return(r=n).path??(r.path=[]),n.path.unshift(t),n})}function Hr(t){return typeof t=="string"?t:t?.message}function dt(t,e,n){let r={...t,path:t.path??[]};if(!t.message){let o=Hr(t.inst?._zod.def?.error?.(t))??Hr(e?.error?.(t))??Hr(n.customError?.(t))??Hr(n.localeError?.(t))??"Invalid input";r.message=o}return delete r.inst,delete r.continue,e?.reportInput||delete r.input,r}function Ch(t){return t instanceof Set?"set":t instanceof Map?"map":t instanceof File?"file":"unknown"}function Zr(t){return Array.isArray(t)?"array":typeof t=="string"?"string":"unknown"}function Nc(...t){let[e,n,r]=t;return typeof e=="string"?{message:e,code:"custom",input:n,inst:r}:{...e}}function u_(t){return Object.entries(t).filter(([e,n])=>Number.isNaN(Number.parseInt(e,10))).map(e=>e[1])}var xc=class{constructor(...e){}};var Nh=(t,e)=>{t.name="$ZodError",Object.defineProperty(t,"_zod",{value:t._zod,enumerable:!1}),Object.defineProperty(t,"issues",{value:e,enumerable:!1}),Object.defineProperty(t,"message",{get(){return JSON.stringify(e,Sc,2)},enumerable:!0}),Object.defineProperty(t,"toString",{value:()=>t.message,enumerable:!1})},Di=A("$ZodError",Nh),Oc=A("$ZodError",Nh,{Parent:Error});function Pc(t,e=n=>n.message){let n={},r=[];for(let o of t.issues)o.path.length>0?(n[o.path[0]]=n[o.path[0]]||[],n[o.path[0]].push(e(o))):r.push(e(o));return{formErrors:r,fieldErrors:n}}function Mc(t,e){let n=e||function(i){return i.message},r={_errors:[]},o=i=>{for(let a of i.issues)if(a.code==="invalid_union"&&a.errors.length)a.errors.map(s=>o({issues:s}));else if(a.code==="invalid_key")o({issues:a.issues});else if(a.code==="invalid_element")o({issues:a.issues});else if(a.path.length===0)r._errors.push(n(a));else{let s=r,c=0;for(;c<a.path.length;){let l=a.path[c];c===a.path.length-1?(s[l]=s[l]||{_errors:[]},s[l]._errors.push(n(a))):s[l]=s[l]||{_errors:[]},s=s[l],c++}}};return o(t),r}var Oh=t=>(e,n,r,o)=>{let i=r?Object.assign(r,{async:!1}):{async:!1},a=e._zod.run({value:n,issues:[]},i);if(a instanceof Promise)throw new Mt;if(a.issues.length){let s=new(o?.Err??t)(a.issues.map(c=>dt(c,i,Ue())));throw Li(s,o?.callee),s}return a.value};var Ph=t=>async(e,n,r,o)=>{let i=r?Object.assign(r,{async:!0}):{async:!0},a=e._zod.run({value:n,issues:[]},i);if(a instanceof Promise&&(a=await a),a.issues.length){let s=new(o?.Err??t)(a.issues.map(c=>dt(c,i,Ue())));throw Li(s,o?.callee),s}return a.value};var Lc=t=>(e,n,r)=>{let o=r?{...r,async:!1}:{async:!1},i=e._zod.run({value:n,issues:[]},o);if(i instanceof Promise)throw new Mt;return i.issues.length?{success:!1,error:new(t??Di)(i.issues.map(a=>dt(a,o,Ue())))}:{success:!0,data:i.value}},Mh=Lc(Oc),zc=t=>async(e,n,r)=>{let o=r?Object.assign(r,{async:!0}):{async:!0},i=e._zod.run({value:n,issues:[]},o);return i instanceof Promise&&(i=await i),i.issues.length?{success:!1,error:new t(i.issues.map(a=>dt(a,o,Ue())))}:{success:!0,data:i.value}},Lh=zc(Oc);var zh=/^[cC][^\s-]{8,}$/,Dh=/^[0-9a-z]+$/,$h=/^[0-9A-HJKMNP-TV-Za-hjkmnp-tv-z]{26}$/,Uh=/^[0-9a-vA-V]{20}$/,Hh=/^[A-Za-z0-9]{27}$/,Fh=/^[a-zA-Z0-9_-]{21}$/,Gh=/^P(?:(\d+W)|(?!.*W)(?=\d|T\d)(\d+Y)?(\d+M)?(\d+D)?(T(?=\d)(\d+H)?(\d+M)?(\d+([.,]\d+)?S)?)?)$/;var Bh=/^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12})$/,Dc=t=>t?new RegExp(`^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-${t}[0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12})$`):/^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[1-8][0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12}|00000000-0000-0000-0000-000000000000)$/;var Zh=/^(?!\.)(?!.*\.\.)([A-Za-z0-9_'+\-\.]*)[A-Za-z0-9_+-]@([A-Za-z0-9][A-Za-z0-9\-]*\.)+[A-Za-z]{2,}$/;var p_="^(\\p{Extended_Pictographic}|\\p{Emoji_Component})+$";function Vh(){return new RegExp(p_,"u")}var jh=/^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])$/,Wh=/^(([0-9a-fA-F]{1,4}:){7}[0-9a-fA-F]{1,4}|::|([0-9a-fA-F]{1,4})?::([0-9a-fA-F]{1,4}:?){0,6})$/,qh=/^((25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\/([0-9]|[1-2][0-9]|3[0-2])$/,Yh=/^(([0-9a-fA-F]{1,4}:){7}[0-9a-fA-F]{1,4}|::|([0-9a-fA-F]{1,4})?::([0-9a-fA-F]{1,4}:?){0,6})\/(12[0-8]|1[01][0-9]|[1-9]?[0-9])$/,Kh=/^$|^(?:[0-9a-zA-Z+/]{4})*(?:(?:[0-9a-zA-Z+/]{2}==)|(?:[0-9a-zA-Z+/]{3}=))?$/,$c=/^[A-Za-z0-9_-]*$/,Xh=/^([a-zA-Z0-9-]+\.)*[a-zA-Z0-9-]+$/;var Jh=/^\+(?:[0-9]){6,14}[0-9]$/,Qh="(?:(?:\\d\\d[2468][048]|\\d\\d[13579][26]|\\d\\d0[48]|[02468][048]00|[13579][26]00)-02-29|\\d{4}-(?:(?:0[13578]|1[02])-(?:0[1-9]|[12]\\d|3[01])|(?:0[469]|11)-(?:0[1-9]|[12]\\d|30)|(?:02)-(?:0[1-9]|1\\d|2[0-8])))",ef=new RegExp(`^${Qh}$`);function tf(t){let e="(?:[01]\\d|2[0-3]):[0-5]\\d";return typeof t.precision=="number"?t.precision===-1?`${e}`:t.precision===0?`${e}:[0-5]\\d`:`${e}:[0-5]\\d\\.\\d{${t.precision}}`:`${e}(?::[0-5]\\d(?:\\.\\d+)?)?`}function nf(t){return new RegExp(`^${tf(t)}$`)}function rf(t){let e=tf({precision:t.precision}),n=["Z"];t.local&&n.push(""),t.offset&&n.push("([+-]\\d{2}:\\d{2})");let r=`${e}(?:${n.join("|")})`;return new RegExp(`^${Qh}T(?:${r})$`)}var of=t=>{let e=t?`[\\s\\S]{${t?.minimum??0},${t?.maximum??""}}`:"[\\s\\S]*";return new RegExp(`^${e}$`)};var af=/^\d+$/,sf=/^-?\d+(?:\.\d+)?/i,lf=/true|false/i;var cf=/^[^A-Z]*$/,uf=/^[^a-z]*$/;var Be=A("$ZodCheck",(t,e)=>{var n;t._zod??(t._zod={}),t._zod.def=e,(n=t._zod).onattach??(n.onattach=[])}),df={number:"number",bigint:"bigint",object:"date"},Uc=A("$ZodCheckLessThan",(t,e)=>{Be.init(t,e);let n=df[typeof e.value];t._zod.onattach.push(r=>{let o=r._zod.bag,i=(e.inclusive?o.maximum:o.exclusiveMaximum)??Number.POSITIVE_INFINITY;e.value<i&&(e.inclusive?o.maximum=e.value:o.exclusiveMaximum=e.value)}),t._zod.check=r=>{(e.inclusive?r.value<=e.value:r.value<e.value)||r.issues.push({origin:n,code:"too_big",maximum:e.value,input:r.value,inclusive:e.inclusive,inst:t,continue:!e.abort})}}),Hc=A("$ZodCheckGreaterThan",(t,e)=>{Be.init(t,e);let n=df[typeof e.value];t._zod.onattach.push(r=>{let o=r._zod.bag,i=(e.inclusive?o.minimum:o.exclusiveMinimum)??Number.NEGATIVE_INFINITY;e.value>i&&(e.inclusive?o.minimum=e.value:o.exclusiveMinimum=e.value)}),t._zod.check=r=>{(e.inclusive?r.value>=e.value:r.value>e.value)||r.issues.push({origin:n,code:"too_small",minimum:e.value,input:r.value,inclusive:e.inclusive,inst:t,continue:!e.abort})}}),pf=A("$ZodCheckMultipleOf",(t,e)=>{Be.init(t,e),t._zod.onattach.push(n=>{var r;(r=n._zod.bag).multipleOf??(r.multipleOf=e.value)}),t._zod.check=n=>{if(typeof n.value!=typeof e.value)throw new Error("Cannot mix number and bigint in multiple_of check.");(typeof n.value=="bigint"?n.value%e.value===BigInt(0):Tc(n.value,e.value)===0)||n.issues.push({origin:typeof n.value,code:"not_multiple_of",divisor:e.value,input:n.value,inst:t,continue:!e.abort})}}),hf=A("$ZodCheckNumberFormat",(t,e)=>{Be.init(t,e),e.format=e.format||"float64";let n=e.format?.includes("int"),r=n?"int":"number",[o,i]=Cc[e.format];t._zod.onattach.push(a=>{let s=a._zod.bag;s.format=e.format,s.minimum=o,s.maximum=i,n&&(s.pattern=af)}),t._zod.check=a=>{let s=a.value;if(n){if(!Number.isInteger(s)){a.issues.push({expected:r,format:e.format,code:"invalid_type",input:s,inst:t});return}if(!Number.isSafeInteger(s)){s>0?a.issues.push({input:s,code:"too_big",maximum:Number.MAX_SAFE_INTEGER,note:"Integers must be within the safe integer range.",inst:t,origin:r,continue:!e.abort}):a.issues.push({input:s,code:"too_small",minimum:Number.MIN_SAFE_INTEGER,note:"Integers must be within the safe integer range.",inst:t,origin:r,continue:!e.abort});return}}s<o&&a.issues.push({origin:"number",input:s,code:"too_small",minimum:o,inclusive:!0,inst:t,continue:!e.abort}),s>i&&a.issues.push({origin:"number",input:s,code:"too_big",maximum:i,inst:t})}});var ff=A("$ZodCheckMaxLength",(t,e)=>{var n;Be.init(t,e),(n=t._zod.def).when??(n.when=r=>{let o=r.value;return!Gr(o)&&o.length!==void 0}),t._zod.onattach.push(r=>{let o=r._zod.bag.maximum??Number.POSITIVE_INFINITY;e.maximum<o&&(r._zod.bag.maximum=e.maximum)}),t._zod.check=r=>{let o=r.value;if(o.length<=e.maximum)return;let a=Zr(o);r.issues.push({origin:a,code:"too_big",maximum:e.maximum,inclusive:!0,input:o,inst:t,continue:!e.abort})}}),mf=A("$ZodCheckMinLength",(t,e)=>{var n;Be.init(t,e),(n=t._zod.def).when??(n.when=r=>{let o=r.value;return!Gr(o)&&o.length!==void 0}),t._zod.onattach.push(r=>{let o=r._zod.bag.minimum??Number.NEGATIVE_INFINITY;e.minimum>o&&(r._zod.bag.minimum=e.minimum)}),t._zod.check=r=>{let o=r.value;if(o.length>=e.minimum)return;let a=Zr(o);r.issues.push({origin:a,code:"too_small",minimum:e.minimum,inclusive:!0,input:o,inst:t,continue:!e.abort})}}),gf=A("$ZodCheckLengthEquals",(t,e)=>{var n;Be.init(t,e),(n=t._zod.def).when??(n.when=r=>{let o=r.value;return!Gr(o)&&o.length!==void 0}),t._zod.onattach.push(r=>{let o=r._zod.bag;o.minimum=e.length,o.maximum=e.length,o.length=e.length}),t._zod.check=r=>{let o=r.value,i=o.length;if(i===e.length)return;let a=Zr(o),s=i>e.length;r.issues.push({origin:a,...s?{code:"too_big",maximum:e.length}:{code:"too_small",minimum:e.length},inclusive:!0,exact:!0,input:r.value,inst:t,continue:!e.abort})}}),Vr=A("$ZodCheckStringFormat",(t,e)=>{var n,r;Be.init(t,e),t._zod.onattach.push(o=>{let i=o._zod.bag;i.format=e.format,e.pattern&&(i.patterns??(i.patterns=new Set),i.patterns.add(e.pattern))}),e.pattern?(n=t._zod).check??(n.check=o=>{e.pattern.lastIndex=0,!e.pattern.test(o.value)&&o.issues.push({origin:"string",code:"invalid_format",format:e.format,input:o.value,...e.pattern?{pattern:e.pattern.toString()}:{},inst:t,continue:!e.abort})}):(r=t._zod).check??(r.check=()=>{})}),vf=A("$ZodCheckRegex",(t,e)=>{Vr.init(t,e),t._zod.check=n=>{e.pattern.lastIndex=0,!e.pattern.test(n.value)&&n.issues.push({origin:"string",code:"invalid_format",format:"regex",input:n.value,pattern:e.pattern.toString(),inst:t,continue:!e.abort})}}),bf=A("$ZodCheckLowerCase",(t,e)=>{e.pattern??(e.pattern=cf),Vr.init(t,e)}),yf=A("$ZodCheckUpperCase",(t,e)=>{e.pattern??(e.pattern=uf),Vr.init(t,e)}),wf=A("$ZodCheckIncludes",(t,e)=>{Be.init(t,e);let n=Gt(e.includes),r=new RegExp(typeof e.position=="number"?`^.{${e.position}}${n}`:n);e.pattern=r,t._zod.onattach.push(o=>{let i=o._zod.bag;i.patterns??(i.patterns=new Set),i.patterns.add(r)}),t._zod.check=o=>{o.value.includes(e.includes,e.position)||o.issues.push({origin:"string",code:"invalid_format",format:"includes",includes:e.includes,input:o.value,inst:t,continue:!e.abort})}}),Ef=A("$ZodCheckStartsWith",(t,e)=>{Be.init(t,e);let n=new RegExp(`^${Gt(e.prefix)}.*`);e.pattern??(e.pattern=n),t._zod.onattach.push(r=>{let o=r._zod.bag;o.patterns??(o.patterns=new Set),o.patterns.add(n)}),t._zod.check=r=>{r.value.startsWith(e.prefix)||r.issues.push({origin:"string",code:"invalid_format",format:"starts_with",prefix:e.prefix,input:r.value,inst:t,continue:!e.abort})}}),xf=A("$ZodCheckEndsWith",(t,e)=>{Be.init(t,e);let n=new RegExp(`.*${Gt(e.suffix)}$`);e.pattern??(e.pattern=n),t._zod.onattach.push(r=>{let o=r._zod.bag;o.patterns??(o.patterns=new Set),o.patterns.add(n)}),t._zod.check=r=>{r.value.endsWith(e.suffix)||r.issues.push({origin:"string",code:"invalid_format",format:"ends_with",suffix:e.suffix,input:r.value,inst:t,continue:!e.abort})}});var _f=A("$ZodCheckOverwrite",(t,e)=>{Be.init(t,e),t._zod.check=n=>{n.value=e.tx(n.value)}});var Ui=class{constructor(e=[]){this.content=[],this.indent=0,this&&(this.args=e)}indented(e){this.indent+=1,e(this),this.indent-=1}write(e){if(typeof e=="function"){e(this,{execution:"sync"}),e(this,{execution:"async"});return}let r=e.split(`
`).filter(a=>a),o=Math.min(...r.map(a=>a.length-a.trimStart().length)),i=r.map(a=>a.slice(o)).map(a=>" ".repeat(this.indent*2)+a);for(let a of i)this.content.push(a)}compile(){let e=Function,n=this?.args,o=[...(this?.content??[""]).map(i=>`  ${i}`)];return new e(...n,o.join(`
`))}};var Tf={major:4,minor:0,patch:0};var de=A("$ZodType",(t,e)=>{var n;t??(t={}),t._zod.def=e,t._zod.bag=t._zod.bag||{},t._zod.version=Tf;let r=[...t._zod.def.checks??[]];t._zod.traits.has("$ZodCheck")&&r.unshift(t);for(let o of r)for(let i of o._zod.onattach)i(t);if(r.length===0)(n=t._zod).deferred??(n.deferred=[]),t._zod.deferred?.push(()=>{t._zod.run=t._zod.parse});else{let o=(i,a,s)=>{let c=gn(i),l;for(let u of a){if(u._zod.def.when){if(!u._zod.def.when(i))continue}else if(c)continue;let f=i.issues.length,m=u._zod.check(i);if(m instanceof Promise&&s?.async===!1)throw new Mt;if(l||m instanceof Promise)l=(l??Promise.resolve()).then(async()=>{await m,i.issues.length!==f&&(c||(c=gn(i,f)))});else{if(i.issues.length===f)continue;c||(c=gn(i,f))}}return l?l.then(()=>i):i};t._zod.run=(i,a)=>{let s=t._zod.parse(i,a);if(s instanceof Promise){if(a.async===!1)throw new Mt;return s.then(c=>o(c,r,a))}return o(s,r,a)}}t["~standard"]={validate:o=>{try{let i=Mh(t,o);return i.success?{value:i.data}:{issues:i.error?.issues}}catch{return Lh(t,o).then(a=>a.success?{value:a.data}:{issues:a.error?.issues})}},vendor:"zod",version:1}}),Fi=A("$ZodString",(t,e)=>{de.init(t,e),t._zod.pattern=[...t?._zod.bag?.patterns??[]].pop()??of(t._zod.bag),t._zod.parse=(n,r)=>{if(e.coerce)try{n.value=String(n.value)}catch{}return typeof n.value=="string"||n.issues.push({expected:"string",code:"invalid_type",input:n.value,inst:t}),n}}),be=A("$ZodStringFormat",(t,e)=>{Vr.init(t,e),Fi.init(t,e)}),Lf=A("$ZodGUID",(t,e)=>{e.pattern??(e.pattern=Bh),be.init(t,e)}),zf=A("$ZodUUID",(t,e)=>{if(e.version){let r={v1:1,v2:2,v3:3,v4:4,v5:5,v6:6,v7:7,v8:8}[e.version];if(r===void 0)throw new Error(`Invalid UUID version: "${e.version}"`);e.pattern??(e.pattern=Dc(r))}else e.pattern??(e.pattern=Dc());be.init(t,e)}),Df=A("$ZodEmail",(t,e)=>{e.pattern??(e.pattern=Zh),be.init(t,e)}),$f=A("$ZodURL",(t,e)=>{be.init(t,e),t._zod.check=n=>{try{let r=n.value,o=new URL(r),i=o.href;e.hostname&&(e.hostname.lastIndex=0,e.hostname.test(o.hostname)||n.issues.push({code:"invalid_format",format:"url",note:"Invalid hostname",pattern:Xh.source,input:n.value,inst:t,continue:!e.abort})),e.protocol&&(e.protocol.lastIndex=0,e.protocol.test(o.protocol.endsWith(":")?o.protocol.slice(0,-1):o.protocol)||n.issues.push({code:"invalid_format",format:"url",note:"Invalid protocol",pattern:e.protocol.source,input:n.value,inst:t,continue:!e.abort})),!r.endsWith("/")&&i.endsWith("/")?n.value=i.slice(0,-1):n.value=i;return}catch{n.issues.push({code:"invalid_format",format:"url",input:n.value,inst:t,continue:!e.abort})}}}),Uf=A("$ZodEmoji",(t,e)=>{e.pattern??(e.pattern=Vh()),be.init(t,e)}),Hf=A("$ZodNanoID",(t,e)=>{e.pattern??(e.pattern=Fh),be.init(t,e)}),Ff=A("$ZodCUID",(t,e)=>{e.pattern??(e.pattern=zh),be.init(t,e)}),Gf=A("$ZodCUID2",(t,e)=>{e.pattern??(e.pattern=Dh),be.init(t,e)}),Bf=A("$ZodULID",(t,e)=>{e.pattern??(e.pattern=$h),be.init(t,e)}),Zf=A("$ZodXID",(t,e)=>{e.pattern??(e.pattern=Uh),be.init(t,e)}),Vf=A("$ZodKSUID",(t,e)=>{e.pattern??(e.pattern=Hh),be.init(t,e)}),jf=A("$ZodISODateTime",(t,e)=>{e.pattern??(e.pattern=rf(e)),be.init(t,e)}),Wf=A("$ZodISODate",(t,e)=>{e.pattern??(e.pattern=ef),be.init(t,e)}),qf=A("$ZodISOTime",(t,e)=>{e.pattern??(e.pattern=nf(e)),be.init(t,e)}),Yf=A("$ZodISODuration",(t,e)=>{e.pattern??(e.pattern=Gh),be.init(t,e)}),Kf=A("$ZodIPv4",(t,e)=>{e.pattern??(e.pattern=jh),be.init(t,e),t._zod.onattach.push(n=>{let r=n._zod.bag;r.format="ipv4"})}),Xf=A("$ZodIPv6",(t,e)=>{e.pattern??(e.pattern=Wh),be.init(t,e),t._zod.onattach.push(n=>{let r=n._zod.bag;r.format="ipv6"}),t._zod.check=n=>{try{new URL(`http://[${n.value}]`)}catch{n.issues.push({code:"invalid_format",format:"ipv6",input:n.value,inst:t,continue:!e.abort})}}}),Jf=A("$ZodCIDRv4",(t,e)=>{e.pattern??(e.pattern=qh),be.init(t,e)}),Qf=A("$ZodCIDRv6",(t,e)=>{e.pattern??(e.pattern=Yh),be.init(t,e),t._zod.check=n=>{let[r,o]=n.value.split("/");try{if(!o)throw new Error;let i=Number(o);if(`${i}`!==o)throw new Error;if(i<0||i>128)throw new Error;new URL(`http://[${r}]`)}catch{n.issues.push({code:"invalid_format",format:"cidrv6",input:n.value,inst:t,continue:!e.abort})}}});function em(t){if(t==="")return!0;if(t.length%4!==0)return!1;try{return atob(t),!0}catch{return!1}}var tm=A("$ZodBase64",(t,e)=>{e.pattern??(e.pattern=Kh),be.init(t,e),t._zod.onattach.push(n=>{n._zod.bag.contentEncoding="base64"}),t._zod.check=n=>{em(n.value)||n.issues.push({code:"invalid_format",format:"base64",input:n.value,inst:t,continue:!e.abort})}});function h_(t){if(!$c.test(t))return!1;let e=t.replace(/[-_]/g,r=>r==="-"?"+":"/"),n=e.padEnd(Math.ceil(e.length/4)*4,"=");return em(n)}var nm=A("$ZodBase64URL",(t,e)=>{e.pattern??(e.pattern=$c),be.init(t,e),t._zod.onattach.push(n=>{n._zod.bag.contentEncoding="base64url"}),t._zod.check=n=>{h_(n.value)||n.issues.push({code:"invalid_format",format:"base64url",input:n.value,inst:t,continue:!e.abort})}}),rm=A("$ZodE164",(t,e)=>{e.pattern??(e.pattern=Jh),be.init(t,e)});function f_(t,e=null){try{let n=t.split(".");if(n.length!==3)return!1;let[r]=n;if(!r)return!1;let o=JSON.parse(atob(r));return!("typ"in o&&o?.typ!=="JWT"||!o.alg||e&&(!("alg"in o)||o.alg!==e))}catch{return!1}}var om=A("$ZodJWT",(t,e)=>{be.init(t,e),t._zod.check=n=>{f_(n.value,e.alg)||n.issues.push({code:"invalid_format",format:"jwt",input:n.value,inst:t,continue:!e.abort})}});var Gc=A("$ZodNumber",(t,e)=>{de.init(t,e),t._zod.pattern=t._zod.bag.pattern??sf,t._zod.parse=(n,r)=>{if(e.coerce)try{n.value=Number(n.value)}catch{}let o=n.value;if(typeof o=="number"&&!Number.isNaN(o)&&Number.isFinite(o))return n;let i=typeof o=="number"?Number.isNaN(o)?"NaN":Number.isFinite(o)?void 0:"Infinity":void 0;return n.issues.push({expected:"number",code:"invalid_type",input:o,inst:t,...i?{received:i}:{}}),n}}),im=A("$ZodNumber",(t,e)=>{hf.init(t,e),Gc.init(t,e)}),am=A("$ZodBoolean",(t,e)=>{de.init(t,e),t._zod.pattern=lf,t._zod.parse=(n,r)=>{if(e.coerce)try{n.value=!!n.value}catch{}let o=n.value;return typeof o=="boolean"||n.issues.push({expected:"boolean",code:"invalid_type",input:o,inst:t}),n}});var sm=A("$ZodAny",(t,e)=>{de.init(t,e),t._zod.parse=n=>n}),lm=A("$ZodUnknown",(t,e)=>{de.init(t,e),t._zod.parse=n=>n}),cm=A("$ZodNever",(t,e)=>{de.init(t,e),t._zod.parse=(n,r)=>(n.issues.push({expected:"never",code:"invalid_type",input:n.value,inst:t}),n)});function Af(t,e,n){t.issues.length&&e.issues.push(...At(n,t.issues)),e.value[n]=t.value}var um=A("$ZodArray",(t,e)=>{de.init(t,e),t._zod.parse=(n,r)=>{let o=n.value;if(!Array.isArray(o))return n.issues.push({expected:"array",code:"invalid_type",input:o,inst:t}),n;n.value=Array(o.length);let i=[];for(let a=0;a<o.length;a++){let s=o[a],c=e.element._zod.run({value:s,issues:[]},r);c instanceof Promise?i.push(c.then(l=>Af(l,n,a))):Af(c,n,a)}return i.length?Promise.all(i).then(()=>n):n}});function Hi(t,e,n){t.issues.length&&e.issues.push(...At(n,t.issues)),e.value[n]=t.value}function kf(t,e,n,r){t.issues.length?r[n]===void 0?n in r?e.value[n]=void 0:e.value[n]=t.value:e.issues.push(...At(n,t.issues)):t.value===void 0?n in r&&(e.value[n]=void 0):e.value[n]=t.value}var dm=A("$ZodObject",(t,e)=>{de.init(t,e);let n=Fr(()=>{let f=Object.keys(e.shape);for(let p of f)if(!(e.shape[p]instanceof de))throw new Error(`Invalid element at key "${p}": expected a Zod schema`);let m=Rc(e.shape);return{shape:e.shape,keys:f,keySet:new Set(f),numKeys:f.length,optionalKeys:new Set(m)}});le(t._zod,"propValues",()=>{let f=e.shape,m={};for(let p in f){let h=f[p]._zod;if(h.values){m[p]??(m[p]=new Set);for(let x of h.values)m[p].add(x)}}return m});let r=f=>{let m=new Ui(["shape","payload","ctx"]),p=n.value,h=b=>{let k=mn(b);return`shape[${k}]._zod.run({ value: input[${k}], issues: [] }, ctx)`};m.write("const input = payload.value;");let x=Object.create(null),g=0;for(let b of p.keys)x[b]=`key_${g++}`;m.write("const newResult = {}");for(let b of p.keys)if(p.optionalKeys.has(b)){let k=x[b];m.write(`const ${k} = ${h(b)};`);let O=mn(b);m.write(`
        if (${k}.issues.length) {
          if (input[${O}] === undefined) {
            if (${O} in input) {
              newResult[${O}] = undefined;
            }
          } else {
            payload.issues = payload.issues.concat(
              ${k}.issues.map((iss) => ({
                ...iss,
                path: iss.path ? [${O}, ...iss.path] : [${O}],
              }))
            );
          }
        } else if (${k}.value === undefined) {
          if (${O} in input) newResult[${O}] = undefined;
        } else {
          newResult[${O}] = ${k}.value;
        }
        `)}else{let k=x[b];m.write(`const ${k} = ${h(b)};`),m.write(`
          if (${k}.issues.length) payload.issues = payload.issues.concat(${k}.issues.map(iss => ({
            ...iss,
            path: iss.path ? [${mn(b)}, ...iss.path] : [${mn(b)}]
          })));`),m.write(`newResult[${mn(b)}] = ${k}.value`)}m.write("payload.value = newResult;"),m.write("return payload;");let w=m.compile();return(b,k)=>w(f,b,k)},o,i=tr,a=!Pi.jitless,c=a&&kc.value,l=e.catchall,u;t._zod.parse=(f,m)=>{u??(u=n.value);let p=f.value;if(!i(p))return f.issues.push({expected:"object",code:"invalid_type",input:p,inst:t}),f;let h=[];if(a&&c&&m?.async===!1&&m.jitless!==!0)o||(o=r(e.shape)),f=o(f,m);else{f.value={};let k=u.shape;for(let O of u.keys){let E=k[O],S=E._zod.run({value:p[O],issues:[]},m),_=E._zod.optin==="optional"&&E._zod.optout==="optional";S instanceof Promise?h.push(S.then(I=>_?kf(I,f,O,p):Hi(I,f,O))):_?kf(S,f,O,p):Hi(S,f,O)}}if(!l)return h.length?Promise.all(h).then(()=>f):f;let x=[],g=u.keySet,w=l._zod,b=w.def.type;for(let k of Object.keys(p)){if(g.has(k))continue;if(b==="never"){x.push(k);continue}let O=w.run({value:p[k],issues:[]},m);O instanceof Promise?h.push(O.then(E=>Hi(E,f,k))):Hi(O,f,k)}return x.length&&f.issues.push({code:"unrecognized_keys",keys:x,input:p,inst:t}),h.length?Promise.all(h).then(()=>f):f}});function If(t,e,n,r){for(let o of t)if(o.issues.length===0)return e.value=o.value,e;return e.issues.push({code:"invalid_union",input:e.value,inst:n,errors:t.map(o=>o.issues.map(i=>dt(i,r,Ue())))}),e}var Bc=A("$ZodUnion",(t,e)=>{de.init(t,e),le(t._zod,"optin",()=>e.options.some(n=>n._zod.optin==="optional")?"optional":void 0),le(t._zod,"optout",()=>e.options.some(n=>n._zod.optout==="optional")?"optional":void 0),le(t._zod,"values",()=>{if(e.options.every(n=>n._zod.values))return new Set(e.options.flatMap(n=>Array.from(n._zod.values)))}),le(t._zod,"pattern",()=>{if(e.options.every(n=>n._zod.pattern)){let n=e.options.map(r=>r._zod.pattern);return new RegExp(`^(${n.map(r=>Br(r.source)).join("|")})$`)}}),t._zod.parse=(n,r)=>{let o=!1,i=[];for(let a of e.options){let s=a._zod.run({value:n.value,issues:[]},r);if(s instanceof Promise)i.push(s),o=!0;else{if(s.issues.length===0)return s;i.push(s)}}return o?Promise.all(i).then(a=>If(a,n,t,r)):If(i,n,t,r)}}),pm=A("$ZodDiscriminatedUnion",(t,e)=>{Bc.init(t,e);let n=t._zod.parse;le(t._zod,"propValues",()=>{let o={};for(let i of e.options){let a=i._zod.propValues;if(!a||Object.keys(a).length===0)throw new Error(`Invalid discriminated union option at index "${e.options.indexOf(i)}"`);for(let[s,c]of Object.entries(a)){o[s]||(o[s]=new Set);for(let l of c)o[s].add(l)}}return o});let r=Fr(()=>{let o=e.options,i=new Map;for(let a of o){let s=a._zod.propValues[e.discriminator];if(!s||s.size===0)throw new Error(`Invalid discriminated union option at index "${e.options.indexOf(a)}"`);for(let c of s){if(i.has(c))throw new Error(`Duplicate discriminator value "${String(c)}"`);i.set(c,a)}}return i});t._zod.parse=(o,i)=>{let a=o.value;if(!tr(a))return o.issues.push({code:"invalid_type",expected:"object",input:a,inst:t}),o;let s=r.value.get(a?.[e.discriminator]);return s?s._zod.run(o,i):e.unionFallback?n(o,i):(o.issues.push({code:"invalid_union",errors:[],note:"No matching discriminator",input:a,path:[e.discriminator],inst:t}),o)}}),hm=A("$ZodIntersection",(t,e)=>{de.init(t,e),t._zod.parse=(n,r)=>{let o=n.value,i=e.left._zod.run({value:o,issues:[]},r),a=e.right._zod.run({value:o,issues:[]},r);return i instanceof Promise||a instanceof Promise?Promise.all([i,a]).then(([c,l])=>Rf(n,c,l)):Rf(n,i,a)}});function Fc(t,e){if(t===e)return{valid:!0,data:t};if(t instanceof Date&&e instanceof Date&&+t==+e)return{valid:!0,data:t};if(nr(t)&&nr(e)){let n=Object.keys(e),r=Object.keys(t).filter(i=>n.indexOf(i)!==-1),o={...t,...e};for(let i of r){let a=Fc(t[i],e[i]);if(!a.valid)return{valid:!1,mergeErrorPath:[i,...a.mergeErrorPath]};o[i]=a.data}return{valid:!0,data:o}}if(Array.isArray(t)&&Array.isArray(e)){if(t.length!==e.length)return{valid:!1,mergeErrorPath:[]};let n=[];for(let r=0;r<t.length;r++){let o=t[r],i=e[r],a=Fc(o,i);if(!a.valid)return{valid:!1,mergeErrorPath:[r,...a.mergeErrorPath]};n.push(a.data)}return{valid:!0,data:n}}return{valid:!1,mergeErrorPath:[]}}function Rf(t,e,n){if(e.issues.length&&t.issues.push(...e.issues),n.issues.length&&t.issues.push(...n.issues),gn(t))return t;let r=Fc(e.value,n.value);if(!r.valid)throw new Error(`Unmergable intersection. Error path: ${JSON.stringify(r.mergeErrorPath)}`);return t.value=r.data,t}var fm=A("$ZodRecord",(t,e)=>{de.init(t,e),t._zod.parse=(n,r)=>{let o=n.value;if(!nr(o))return n.issues.push({expected:"record",code:"invalid_type",input:o,inst:t}),n;let i=[];if(e.keyType._zod.values){let a=e.keyType._zod.values;n.value={};for(let c of a)if(typeof c=="string"||typeof c=="number"||typeof c=="symbol"){let l=e.valueType._zod.run({value:o[c],issues:[]},r);l instanceof Promise?i.push(l.then(u=>{u.issues.length&&n.issues.push(...At(c,u.issues)),n.value[c]=u.value})):(l.issues.length&&n.issues.push(...At(c,l.issues)),n.value[c]=l.value)}let s;for(let c in o)a.has(c)||(s=s??[],s.push(c));s&&s.length>0&&n.issues.push({code:"unrecognized_keys",input:o,inst:t,keys:s})}else{n.value={};for(let a of Reflect.ownKeys(o)){if(a==="__proto__")continue;let s=e.keyType._zod.run({value:a,issues:[]},r);if(s instanceof Promise)throw new Error("Async schemas not supported in object keys currently");if(s.issues.length){n.issues.push({origin:"record",code:"invalid_key",issues:s.issues.map(l=>dt(l,r,Ue())),input:a,path:[a],inst:t}),n.value[s.value]=s.value;continue}let c=e.valueType._zod.run({value:o[a],issues:[]},r);c instanceof Promise?i.push(c.then(l=>{l.issues.length&&n.issues.push(...At(a,l.issues)),n.value[s.value]=l.value})):(c.issues.length&&n.issues.push(...At(a,c.issues)),n.value[s.value]=c.value)}}return i.length?Promise.all(i).then(()=>n):n}});var mm=A("$ZodEnum",(t,e)=>{de.init(t,e);let n=_c(e.entries);t._zod.values=new Set(n),t._zod.pattern=new RegExp(`^(${n.filter(r=>Ic.has(typeof r)).map(r=>typeof r=="string"?Gt(r):r.toString()).join("|")})$`),t._zod.parse=(r,o)=>{let i=r.value;return t._zod.values.has(i)||r.issues.push({code:"invalid_value",values:n,input:i,inst:t}),r}}),gm=A("$ZodLiteral",(t,e)=>{de.init(t,e),t._zod.values=new Set(e.values),t._zod.pattern=new RegExp(`^(${e.values.map(n=>typeof n=="string"?Gt(n):n?n.toString():String(n)).join("|")})$`),t._zod.parse=(n,r)=>{let o=n.value;return t._zod.values.has(o)||n.issues.push({code:"invalid_value",values:e.values,input:o,inst:t}),n}});var vm=A("$ZodTransform",(t,e)=>{de.init(t,e),t._zod.parse=(n,r)=>{let o=e.transform(n.value,n);if(r.async)return(o instanceof Promise?o:Promise.resolve(o)).then(a=>(n.value=a,n));if(o instanceof Promise)throw new Mt;return n.value=o,n}}),bm=A("$ZodOptional",(t,e)=>{de.init(t,e),t._zod.optin="optional",t._zod.optout="optional",le(t._zod,"values",()=>e.innerType._zod.values?new Set([...e.innerType._zod.values,void 0]):void 0),le(t._zod,"pattern",()=>{let n=e.innerType._zod.pattern;return n?new RegExp(`^(${Br(n.source)})?$`):void 0}),t._zod.parse=(n,r)=>e.innerType._zod.optin==="optional"?e.innerType._zod.run(n,r):n.value===void 0?n:e.innerType._zod.run(n,r)}),ym=A("$ZodNullable",(t,e)=>{de.init(t,e),le(t._zod,"optin",()=>e.innerType._zod.optin),le(t._zod,"optout",()=>e.innerType._zod.optout),le(t._zod,"pattern",()=>{let n=e.innerType._zod.pattern;return n?new RegExp(`^(${Br(n.source)}|null)$`):void 0}),le(t._zod,"values",()=>e.innerType._zod.values?new Set([...e.innerType._zod.values,null]):void 0),t._zod.parse=(n,r)=>n.value===null?n:e.innerType._zod.run(n,r)}),wm=A("$ZodDefault",(t,e)=>{de.init(t,e),t._zod.optin="optional",le(t._zod,"values",()=>e.innerType._zod.values),t._zod.parse=(n,r)=>{if(n.value===void 0)return n.value=e.defaultValue,n;let o=e.innerType._zod.run(n,r);return o instanceof Promise?o.then(i=>Cf(i,e)):Cf(o,e)}});function Cf(t,e){return t.value===void 0&&(t.value=e.defaultValue),t}var Em=A("$ZodPrefault",(t,e)=>{de.init(t,e),t._zod.optin="optional",le(t._zod,"values",()=>e.innerType._zod.values),t._zod.parse=(n,r)=>(n.value===void 0&&(n.value=e.defaultValue),e.innerType._zod.run(n,r))}),xm=A("$ZodNonOptional",(t,e)=>{de.init(t,e),le(t._zod,"values",()=>{let n=e.innerType._zod.values;return n?new Set([...n].filter(r=>r!==void 0)):void 0}),t._zod.parse=(n,r)=>{let o=e.innerType._zod.run(n,r);return o instanceof Promise?o.then(i=>Nf(i,t)):Nf(o,t)}});function Nf(t,e){return!t.issues.length&&t.value===void 0&&t.issues.push({code:"invalid_type",expected:"nonoptional",input:t.value,inst:e}),t}var _m=A("$ZodCatch",(t,e)=>{de.init(t,e),t._zod.optin="optional",le(t._zod,"optout",()=>e.innerType._zod.optout),le(t._zod,"values",()=>e.innerType._zod.values),t._zod.parse=(n,r)=>{let o=e.innerType._zod.run(n,r);return o instanceof Promise?o.then(i=>(n.value=i.value,i.issues.length&&(n.value=e.catchValue({...n,error:{issues:i.issues.map(a=>dt(a,r,Ue()))},input:n.value}),n.issues=[]),n)):(n.value=o.value,o.issues.length&&(n.value=e.catchValue({...n,error:{issues:o.issues.map(i=>dt(i,r,Ue()))},input:n.value}),n.issues=[]),n)}});var Sm=A("$ZodPipe",(t,e)=>{de.init(t,e),le(t._zod,"values",()=>e.in._zod.values),le(t._zod,"optin",()=>e.in._zod.optin),le(t._zod,"optout",()=>e.out._zod.optout),t._zod.parse=(n,r)=>{let o=e.in._zod.run(n,r);return o instanceof Promise?o.then(i=>Of(i,e,r)):Of(o,e,r)}});function Of(t,e,n){return gn(t)?t:e.out._zod.run({value:t.value,issues:t.issues},n)}var Tm=A("$ZodReadonly",(t,e)=>{de.init(t,e),le(t._zod,"propValues",()=>e.innerType._zod.propValues),le(t._zod,"values",()=>e.innerType._zod.values),le(t._zod,"optin",()=>e.innerType._zod.optin),le(t._zod,"optout",()=>e.innerType._zod.optout),t._zod.parse=(n,r)=>{let o=e.innerType._zod.run(n,r);return o instanceof Promise?o.then(Pf):Pf(o)}});function Pf(t){return t.value=Object.freeze(t.value),t}var Am=A("$ZodLazy",(t,e)=>{de.init(t,e),le(t._zod,"innerType",()=>e.getter()),le(t._zod,"pattern",()=>t._zod.innerType._zod.pattern),le(t._zod,"propValues",()=>t._zod.innerType._zod.propValues),le(t._zod,"optin",()=>t._zod.innerType._zod.optin),le(t._zod,"optout",()=>t._zod.innerType._zod.optout),t._zod.parse=(n,r)=>t._zod.innerType._zod.run(n,r)}),km=A("$ZodCustom",(t,e)=>{Be.init(t,e),de.init(t,e),t._zod.parse=(n,r)=>n,t._zod.check=n=>{let r=n.value,o=e.fn(r);if(o instanceof Promise)return o.then(i=>Mf(i,n,r,t));Mf(o,n,r,t)}});function Mf(t,e,n,r){if(!t){let o={code:"custom",input:n,inst:r,path:[...r._zod.def.path??[]],continue:!r._zod.def.abort};r._zod.def.params&&(o.params=r._zod.def.params),e.issues.push(Nc(o))}}var m_=t=>{let e=typeof t;switch(e){case"number":return Number.isNaN(t)?"NaN":"number";case"object":{if(Array.isArray(t))return"array";if(t===null)return"null";if(Object.getPrototypeOf(t)!==Object.prototype&&t.constructor)return t.constructor.name}}return e},g_=()=>{let t={string:{unit:"characters",verb:"to have"},file:{unit:"bytes",verb:"to have"},array:{unit:"items",verb:"to have"},set:{unit:"items",verb:"to have"}};function e(r){return t[r]??null}let n={regex:"input",email:"email address",url:"URL",emoji:"emoji",uuid:"UUID",uuidv4:"UUIDv4",uuidv6:"UUIDv6",nanoid:"nanoid",guid:"GUID",cuid:"cuid",cuid2:"cuid2",ulid:"ULID",xid:"XID",ksuid:"KSUID",datetime:"ISO datetime",date:"ISO date",time:"ISO time",duration:"ISO duration",ipv4:"IPv4 address",ipv6:"IPv6 address",cidrv4:"IPv4 range",cidrv6:"IPv6 range",base64:"base64-encoded string",base64url:"base64url-encoded string",json_string:"JSON string",e164:"E.164 number",jwt:"JWT",template_literal:"input"};return r=>{switch(r.code){case"invalid_type":return`Invalid input: expected ${r.expected}, received ${m_(r.input)}`;case"invalid_value":return r.values.length===1?`Invalid input: expected ${zi(r.values[0])}`:`Invalid option: expected one of ${Mi(r.values,"|")}`;case"too_big":{let o=r.inclusive?"<=":"<",i=e(r.origin);return i?`Too big: expected ${r.origin??"value"} to have ${o}${r.maximum.toString()} ${i.unit??"elements"}`:`Too big: expected ${r.origin??"value"} to be ${o}${r.maximum.toString()}`}case"too_small":{let o=r.inclusive?">=":">",i=e(r.origin);return i?`Too small: expected ${r.origin} to have ${o}${r.minimum.toString()} ${i.unit}`:`Too small: expected ${r.origin} to be ${o}${r.minimum.toString()}`}case"invalid_format":{let o=r;return o.format==="starts_with"?`Invalid string: must start with "${o.prefix}"`:o.format==="ends_with"?`Invalid string: must end with "${o.suffix}"`:o.format==="includes"?`Invalid string: must include "${o.includes}"`:o.format==="regex"?`Invalid string: must match pattern ${o.pattern}`:`Invalid ${n[o.format]??r.format}`}case"not_multiple_of":return`Invalid number: must be a multiple of ${r.divisor}`;case"unrecognized_keys":return`Unrecognized key${r.keys.length>1?"s":""}: ${Mi(r.keys,", ")}`;case"invalid_key":return`Invalid key in ${r.origin}`;case"invalid_union":return"Invalid input";case"invalid_element":return`Invalid value in ${r.origin}`;default:return"Invalid input"}}};function rr(){return{localeError:g_()}}var Zc=class{constructor(){this._map=new Map,this._idmap=new Map}add(e,...n){let r=n[0];if(this._map.set(e,r),r&&typeof r=="object"&&"id"in r){if(this._idmap.has(r.id))throw new Error(`ID ${r.id} already exists in the registry`);this._idmap.set(r.id,e)}return this}clear(){return this._map=new Map,this._idmap=new Map,this}remove(e){let n=this._map.get(e);return n&&typeof n=="object"&&"id"in n&&this._idmap.delete(n.id),this._map.delete(e),this}get(e){let n=e._zod.parent;if(n){let r={...this.get(n)??{}};return delete r.id,{...r,...this._map.get(e)}}return this._map.get(e)}has(e){return this._map.has(e)}};function Im(){return new Zc}var or=Im();function Rm(t,e){return new t({type:"string",...G(e)})}function Cm(t,e){return new t({type:"string",format:"email",check:"string_format",abort:!1,...G(e)})}function Vc(t,e){return new t({type:"string",format:"guid",check:"string_format",abort:!1,...G(e)})}function Nm(t,e){return new t({type:"string",format:"uuid",check:"string_format",abort:!1,...G(e)})}function Om(t,e){return new t({type:"string",format:"uuid",check:"string_format",abort:!1,version:"v4",...G(e)})}function Pm(t,e){return new t({type:"string",format:"uuid",check:"string_format",abort:!1,version:"v6",...G(e)})}function Mm(t,e){return new t({type:"string",format:"uuid",check:"string_format",abort:!1,version:"v7",...G(e)})}function Lm(t,e){return new t({type:"string",format:"url",check:"string_format",abort:!1,...G(e)})}function zm(t,e){return new t({type:"string",format:"emoji",check:"string_format",abort:!1,...G(e)})}function Dm(t,e){return new t({type:"string",format:"nanoid",check:"string_format",abort:!1,...G(e)})}function $m(t,e){return new t({type:"string",format:"cuid",check:"string_format",abort:!1,...G(e)})}function Um(t,e){return new t({type:"string",format:"cuid2",check:"string_format",abort:!1,...G(e)})}function Hm(t,e){return new t({type:"string",format:"ulid",check:"string_format",abort:!1,...G(e)})}function Fm(t,e){return new t({type:"string",format:"xid",check:"string_format",abort:!1,...G(e)})}function Gm(t,e){return new t({type:"string",format:"ksuid",check:"string_format",abort:!1,...G(e)})}function Bm(t,e){return new t({type:"string",format:"ipv4",check:"string_format",abort:!1,...G(e)})}function Zm(t,e){return new t({type:"string",format:"ipv6",check:"string_format",abort:!1,...G(e)})}function Vm(t,e){return new t({type:"string",format:"cidrv4",check:"string_format",abort:!1,...G(e)})}function jm(t,e){return new t({type:"string",format:"cidrv6",check:"string_format",abort:!1,...G(e)})}function Wm(t,e){return new t({type:"string",format:"base64",check:"string_format",abort:!1,...G(e)})}function qm(t,e){return new t({type:"string",format:"base64url",check:"string_format",abort:!1,...G(e)})}function Ym(t,e){return new t({type:"string",format:"e164",check:"string_format",abort:!1,...G(e)})}function Km(t,e){return new t({type:"string",format:"jwt",check:"string_format",abort:!1,...G(e)})}function Xm(t,e){return new t({type:"string",format:"datetime",check:"string_format",offset:!1,local:!1,precision:null,...G(e)})}function Jm(t,e){return new t({type:"string",format:"date",check:"string_format",...G(e)})}function Qm(t,e){return new t({type:"string",format:"time",check:"string_format",precision:null,...G(e)})}function eg(t,e){return new t({type:"string",format:"duration",check:"string_format",...G(e)})}function tg(t,e){return new t({type:"number",check:"number_format",abort:!1,format:"safeint",...G(e)})}function ng(t,e){return new t({type:"boolean",...G(e)})}function rg(t){return new t({type:"any"})}function og(t){return new t({type:"unknown"})}function ig(t,e){return new t({type:"never",...G(e)})}function Gi(t,e){return new Uc({check:"less_than",...G(e),value:t,inclusive:!1})}function jr(t,e){return new Uc({check:"less_than",...G(e),value:t,inclusive:!0})}function Bi(t,e){return new Hc({check:"greater_than",...G(e),value:t,inclusive:!1})}function Wr(t,e){return new Hc({check:"greater_than",...G(e),value:t,inclusive:!0})}function Zi(t,e){return new pf({check:"multiple_of",...G(e),value:t})}function Vi(t,e){return new ff({check:"max_length",...G(e),maximum:t})}function ir(t,e){return new mf({check:"min_length",...G(e),minimum:t})}function ji(t,e){return new gf({check:"length_equals",...G(e),length:t})}function jc(t,e){return new vf({check:"string_format",format:"regex",...G(e),pattern:t})}function Wc(t){return new bf({check:"string_format",format:"lowercase",...G(t)})}function qc(t){return new yf({check:"string_format",format:"uppercase",...G(t)})}function Yc(t,e){return new wf({check:"string_format",format:"includes",...G(e),includes:t})}function Kc(t,e){return new Ef({check:"string_format",format:"starts_with",...G(e),prefix:t})}function Xc(t,e){return new xf({check:"string_format",format:"ends_with",...G(e),suffix:t})}function vn(t){return new _f({check:"overwrite",tx:t})}function Jc(t){return vn(e=>e.normalize(t))}function Qc(){return vn(t=>t.trim())}function eu(){return vn(t=>t.toLowerCase())}function tu(){return vn(t=>t.toUpperCase())}function ag(t,e,n){return new t({type:"array",element:e,...G(n)})}function sg(t,e,n){let r=G(n);return r.abort??(r.abort=!0),new t({type:"custom",check:"custom",fn:e,...r})}function lg(t,e,n){return new t({type:"custom",check:"custom",fn:e,...G(n)})}var __=A("ZodISODateTime",(t,e)=>{jf.init(t,e),xe.init(t,e)});function cg(t){return Xm(__,t)}var S_=A("ZodISODate",(t,e)=>{Wf.init(t,e),xe.init(t,e)});function ug(t){return Jm(S_,t)}var T_=A("ZodISOTime",(t,e)=>{qf.init(t,e),xe.init(t,e)});function dg(t){return Qm(T_,t)}var A_=A("ZodISODuration",(t,e)=>{Yf.init(t,e),xe.init(t,e)});function pg(t){return eg(A_,t)}var fg=(t,e)=>{Di.init(t,e),t.name="ZodError",Object.defineProperties(t,{format:{value:n=>Mc(t,n)},flatten:{value:n=>Pc(t,n)},addIssue:{value:n=>t.issues.push(n)},addIssues:{value:n=>t.issues.push(...n)},isEmpty:{get(){return t.issues.length===0}}})},FM=A("ZodError",fg),Yr=A("ZodError",fg,{Parent:Error});var mg=Oh(Yr),gg=Ph(Yr),vg=Lc(Yr),bg=zc(Yr);var _e=A("ZodType",(t,e)=>(de.init(t,e),t.def=e,Object.defineProperty(t,"_def",{value:e}),t.check=(...n)=>t.clone({...e,checks:[...e.checks??[],...n.map(r=>typeof r=="function"?{_zod:{check:r,def:{check:"custom"},onattach:[]}}:r)]}),t.clone=(n,r)=>ut(t,n,r),t.brand=()=>t,t.register=((n,r)=>(n.add(t,r),t)),t.parse=(n,r)=>mg(t,n,r,{callee:t.parse}),t.safeParse=(n,r)=>vg(t,n,r),t.parseAsync=async(n,r)=>gg(t,n,r,{callee:t.parseAsync}),t.safeParseAsync=async(n,r)=>bg(t,n,r),t.spa=t.safeParseAsync,t.refine=(n,r)=>t.check(pS(n,r)),t.superRefine=n=>t.check(hS(n)),t.overwrite=n=>t.check(vn(n)),t.optional=()=>wg(t),t.nullable=()=>Eg(t),t.nullish=()=>wg(Eg(t)),t.nonoptional=n=>lS(t,n),t.array=()=>Re(t),t.or=n=>Kr([t,n]),t.and=n=>nS(t,n),t.transform=n=>xg(t,oS(n)),t.default=n=>iS(t,n),t.prefault=n=>sS(t,n),t.catch=n=>cS(t,n),t.pipe=n=>xg(t,n),t.readonly=()=>uS(t),t.describe=n=>{let r=t.clone();return or.add(r,{description:n}),r},Object.defineProperty(t,"description",{get(){return or.get(t)?.description},configurable:!0}),t.meta=(...n)=>{if(n.length===0)return or.get(t);let r=t.clone();return or.add(r,n[0]),r},t.isOptional=()=>t.safeParse(void 0).success,t.isNullable=()=>t.safeParse(null).success,t)),_g=A("_ZodString",(t,e)=>{Fi.init(t,e),_e.init(t,e);let n=t._zod.bag;t.format=n.format??null,t.minLength=n.minimum??null,t.maxLength=n.maximum??null,t.regex=(...r)=>t.check(jc(...r)),t.includes=(...r)=>t.check(Yc(...r)),t.startsWith=(...r)=>t.check(Kc(...r)),t.endsWith=(...r)=>t.check(Xc(...r)),t.min=(...r)=>t.check(ir(...r)),t.max=(...r)=>t.check(Vi(...r)),t.length=(...r)=>t.check(ji(...r)),t.nonempty=(...r)=>t.check(ir(1,...r)),t.lowercase=r=>t.check(Wc(r)),t.uppercase=r=>t.check(qc(r)),t.trim=()=>t.check(Qc()),t.normalize=(...r)=>t.check(Jc(...r)),t.toLowerCase=()=>t.check(eu()),t.toUpperCase=()=>t.check(tu())}),R_=A("ZodString",(t,e)=>{Fi.init(t,e),_g.init(t,e),t.email=n=>t.check(Cm(C_,n)),t.url=n=>t.check(Lm(N_,n)),t.jwt=n=>t.check(Km(j_,n)),t.emoji=n=>t.check(zm(O_,n)),t.guid=n=>t.check(Vc(yg,n)),t.uuid=n=>t.check(Nm(Wi,n)),t.uuidv4=n=>t.check(Om(Wi,n)),t.uuidv6=n=>t.check(Pm(Wi,n)),t.uuidv7=n=>t.check(Mm(Wi,n)),t.nanoid=n=>t.check(Dm(P_,n)),t.guid=n=>t.check(Vc(yg,n)),t.cuid=n=>t.check($m(M_,n)),t.cuid2=n=>t.check(Um(L_,n)),t.ulid=n=>t.check(Hm(z_,n)),t.base64=n=>t.check(Wm(B_,n)),t.base64url=n=>t.check(qm(Z_,n)),t.xid=n=>t.check(Fm(D_,n)),t.ksuid=n=>t.check(Gm($_,n)),t.ipv4=n=>t.check(Bm(U_,n)),t.ipv6=n=>t.check(Zm(H_,n)),t.cidrv4=n=>t.check(Vm(F_,n)),t.cidrv6=n=>t.check(jm(G_,n)),t.e164=n=>t.check(Ym(V_,n)),t.datetime=n=>t.check(cg(n)),t.date=n=>t.check(ug(n)),t.time=n=>t.check(dg(n)),t.duration=n=>t.check(pg(n))});function T(t){return Rm(R_,t)}var xe=A("ZodStringFormat",(t,e)=>{be.init(t,e),_g.init(t,e)}),C_=A("ZodEmail",(t,e)=>{Df.init(t,e),xe.init(t,e)});var yg=A("ZodGUID",(t,e)=>{Lf.init(t,e),xe.init(t,e)});var Wi=A("ZodUUID",(t,e)=>{zf.init(t,e),xe.init(t,e)});var N_=A("ZodURL",(t,e)=>{$f.init(t,e),xe.init(t,e)});var O_=A("ZodEmoji",(t,e)=>{Uf.init(t,e),xe.init(t,e)});var P_=A("ZodNanoID",(t,e)=>{Hf.init(t,e),xe.init(t,e)});var M_=A("ZodCUID",(t,e)=>{Ff.init(t,e),xe.init(t,e)});var L_=A("ZodCUID2",(t,e)=>{Gf.init(t,e),xe.init(t,e)});var z_=A("ZodULID",(t,e)=>{Bf.init(t,e),xe.init(t,e)});var D_=A("ZodXID",(t,e)=>{Zf.init(t,e),xe.init(t,e)});var $_=A("ZodKSUID",(t,e)=>{Vf.init(t,e),xe.init(t,e)});var U_=A("ZodIPv4",(t,e)=>{Kf.init(t,e),xe.init(t,e)});var H_=A("ZodIPv6",(t,e)=>{Xf.init(t,e),xe.init(t,e)});var F_=A("ZodCIDRv4",(t,e)=>{Jf.init(t,e),xe.init(t,e)});var G_=A("ZodCIDRv6",(t,e)=>{Qf.init(t,e),xe.init(t,e)});var B_=A("ZodBase64",(t,e)=>{tm.init(t,e),xe.init(t,e)});var Z_=A("ZodBase64URL",(t,e)=>{nm.init(t,e),xe.init(t,e)});var V_=A("ZodE164",(t,e)=>{rm.init(t,e),xe.init(t,e)});var j_=A("ZodJWT",(t,e)=>{om.init(t,e),xe.init(t,e)});var W_=A("ZodNumber",(t,e)=>{Gc.init(t,e),_e.init(t,e),t.gt=(r,o)=>t.check(Bi(r,o)),t.gte=(r,o)=>t.check(Wr(r,o)),t.min=(r,o)=>t.check(Wr(r,o)),t.lt=(r,o)=>t.check(Gi(r,o)),t.lte=(r,o)=>t.check(jr(r,o)),t.max=(r,o)=>t.check(jr(r,o)),t.int=r=>t.check(W(r)),t.safe=r=>t.check(W(r)),t.positive=r=>t.check(Bi(0,r)),t.nonnegative=r=>t.check(Wr(0,r)),t.negative=r=>t.check(Gi(0,r)),t.nonpositive=r=>t.check(jr(0,r)),t.multipleOf=(r,o)=>t.check(Zi(r,o)),t.step=(r,o)=>t.check(Zi(r,o)),t.finite=()=>t;let n=t._zod.bag;t.minValue=Math.max(n.minimum??Number.NEGATIVE_INFINITY,n.exclusiveMinimum??Number.NEGATIVE_INFINITY)??null,t.maxValue=Math.min(n.maximum??Number.POSITIVE_INFINITY,n.exclusiveMaximum??Number.POSITIVE_INFINITY)??null,t.isInt=(n.format??"").includes("int")||Number.isSafeInteger(n.multipleOf??.5),t.isFinite=!0,t.format=n.format??null});var q_=A("ZodNumberFormat",(t,e)=>{im.init(t,e),W_.init(t,e)});function W(t){return tg(q_,t)}var Y_=A("ZodBoolean",(t,e)=>{am.init(t,e),_e.init(t,e)});function te(t){return ng(Y_,t)}var K_=A("ZodAny",(t,e)=>{sm.init(t,e),_e.init(t,e)});function B(){return rg(K_)}var X_=A("ZodUnknown",(t,e)=>{lm.init(t,e),_e.init(t,e)});function nu(){return og(X_)}var J_=A("ZodNever",(t,e)=>{cm.init(t,e),_e.init(t,e)});function Q_(t){return ig(J_,t)}var qi=A("ZodArray",(t,e)=>{um.init(t,e),_e.init(t,e),t.element=e.element,t.min=(n,r)=>t.check(ir(n,r)),t.nonempty=n=>t.check(ir(1,n)),t.max=(n,r)=>t.check(Vi(n,r)),t.length=(n,r)=>t.check(ji(n,r)),t.unwrap=()=>t.element});function Re(t,e){return ag(qi,t,e)}var ar=A("ZodObject",(t,e)=>{dm.init(t,e),_e.init(t,e),ce.defineLazy(t,"shape",()=>e.shape),t.keyof=()=>bn(Object.keys(t._zod.def.shape)),t.catchall=n=>t.clone({...t._zod.def,catchall:n}),t.passthrough=()=>t.clone({...t._zod.def,catchall:nu()}),t.loose=()=>t.clone({...t._zod.def,catchall:nu()}),t.strict=()=>t.clone({...t._zod.def,catchall:Q_()}),t.strip=()=>t.clone({...t._zod.def,catchall:void 0}),t.extend=n=>ce.extend(t,n),t.merge=n=>ce.merge(t,n),t.pick=n=>ce.pick(t,n),t.omit=n=>ce.omit(t,n),t.partial=(...n)=>ce.partial(Ki,t,n[0]),t.required=(...n)=>ce.required(Tg,t,n[0])});function z(t,e){return new ar({type:"object",get shape(){return ce.assignProp(this,"shape",{...t}),this.shape},catchall:nu(),...ce.normalizeParams(e)})}var Yi=A("ZodUnion",(t,e)=>{Bc.init(t,e),_e.init(t,e),t.options=e.options});function Kr(t,e){return new Yi({type:"union",options:t,...ce.normalizeParams(e)})}var eS=A("ZodDiscriminatedUnion",(t,e)=>{Yi.init(t,e),pm.init(t,e)});function Bt(t,e,n){return new eS({type:"union",options:e,discriminator:t,...ce.normalizeParams(n)})}var tS=A("ZodIntersection",(t,e)=>{hm.init(t,e),_e.init(t,e)});function nS(t,e){return new tS({type:"intersection",left:t,right:e})}var Sg=A("ZodRecord",(t,e)=>{fm.init(t,e),_e.init(t,e),t.keyType=e.keyType,t.valueType=e.valueType});var ru=A("ZodEnum",(t,e)=>{mm.init(t,e),_e.init(t,e),t.enum=e.entries,t.options=Object.values(e.entries);let n=new Set(Object.keys(e.entries));t.extract=(r,o)=>{let i={};for(let a of r)if(n.has(a))i[a]=e.entries[a];else throw new Error(`Key ${a} not found in enum`);return new ru({...e,checks:[],...ce.normalizeParams(o),entries:i})},t.exclude=(r,o)=>{let i={...e.entries};for(let a of r)if(n.has(a))delete i[a];else throw new Error(`Key ${a} not found in enum`);return new ru({...e,checks:[],...ce.normalizeParams(o),entries:i})}});function bn(t,e){let n=Array.isArray(t)?Object.fromEntries(t.map(r=>[r,r])):t;return new ru({type:"enum",entries:n,...ce.normalizeParams(e)})}var ou=A("ZodLiteral",(t,e)=>{gm.init(t,e),_e.init(t,e),t.values=new Set(e.values),Object.defineProperty(t,"value",{get(){if(e.values.length>1)throw new Error("This schema contains multiple valid literal values. Use `.values` instead.");return e.values[0]}})});function $(t,e){return new ou({type:"literal",values:Array.isArray(t)?t:[t],...ce.normalizeParams(e)})}var rS=A("ZodTransform",(t,e)=>{vm.init(t,e),_e.init(t,e),t._zod.parse=(n,r)=>{n.addIssue=i=>{if(typeof i=="string")n.issues.push(ce.issue(i,n.value,e));else{let a=i;a.fatal&&(a.continue=!1),a.code??(a.code="custom"),a.input??(a.input=n.value),a.inst??(a.inst=t),a.continue??(a.continue=!0),n.issues.push(ce.issue(a))}};let o=e.transform(n.value,n);return o instanceof Promise?o.then(i=>(n.value=i,n)):(n.value=o,n)}});function oS(t){return new rS({type:"transform",transform:t})}var Ki=A("ZodOptional",(t,e)=>{bm.init(t,e),_e.init(t,e),t.unwrap=()=>t._zod.def.innerType});function wg(t){return new Ki({type:"optional",innerType:t})}var iu=A("ZodNullable",(t,e)=>{ym.init(t,e),_e.init(t,e),t.unwrap=()=>t._zod.def.innerType});function Eg(t){return new iu({type:"nullable",innerType:t})}var au=A("ZodDefault",(t,e)=>{wm.init(t,e),_e.init(t,e),t.unwrap=()=>t._zod.def.innerType,t.removeDefault=t.unwrap});function iS(t,e){return new au({type:"default",innerType:t,get defaultValue(){return typeof e=="function"?e():e}})}var aS=A("ZodPrefault",(t,e)=>{Em.init(t,e),_e.init(t,e),t.unwrap=()=>t._zod.def.innerType});function sS(t,e){return new aS({type:"prefault",innerType:t,get defaultValue(){return typeof e=="function"?e():e}})}var Tg=A("ZodNonOptional",(t,e)=>{xm.init(t,e),_e.init(t,e),t.unwrap=()=>t._zod.def.innerType});function lS(t,e){return new Tg({type:"nonoptional",innerType:t,...ce.normalizeParams(e)})}var su=A("ZodCatch",(t,e)=>{_m.init(t,e),_e.init(t,e),t.unwrap=()=>t._zod.def.innerType,t.removeCatch=t.unwrap});function cS(t,e){return new su({type:"catch",innerType:t,catchValue:typeof e=="function"?e:()=>e})}var lu=A("ZodPipe",(t,e)=>{Sm.init(t,e),_e.init(t,e),t.in=e.in,t.out=e.out});function xg(t,e){return new lu({type:"pipe",in:t,out:e})}var cu=A("ZodReadonly",(t,e)=>{Tm.init(t,e),_e.init(t,e)});function uS(t){return new cu({type:"readonly",innerType:t})}var Ag=A("ZodLazy",(t,e)=>{Am.init(t,e),_e.init(t,e),t.unwrap=()=>t._zod.def.getter()});var kg=A("ZodCustom",(t,e)=>{km.init(t,e),_e.init(t,e)});function dS(t){let e=new Be({check:"custom"});return e._zod.check=t,e}function sr(t,e){return sg(kg,t??(()=>!0),e)}function pS(t,e={}){return lg(kg,t,e)}function hS(t){let e=dS(n=>(n.addIssue=r=>{if(typeof r=="string")n.issues.push(ce.issue(r,n.value,e._zod.def));else{let o=r;o.fatal&&(o.continue=!1),o.code??(o.code="custom"),o.input??(o.input=n.value),o.inst??(o.inst=e),o.continue??(o.continue=!e._zod.def.abort),n.issues.push(ce.issue(o))}},t(n.value,n)));return e}Ue(rr());var mS=bn(v),V=sr(t=>typeof t=="object"&&t!==null&&!Array.isArray(t)),ee=T(),Ig=bn(["developer","system","assistant","user"]),gS=z({type:$(v.TEXT_MESSAGE_START),timestamp:W().min(-9007199254740991).max(9007199254740991).optional(),rawEvent:B().refine(t=>t!==null).optional(),metadata:V.optional(),subagentRunId:ee.optional(),messageId:T(),role:Ig.optional(),name:T().optional()}),vS=z({type:$(v.TEXT_MESSAGE_CONTENT),timestamp:W().min(-9007199254740991).max(9007199254740991).optional(),rawEvent:B().refine(t=>t!==null).optional(),metadata:V.optional(),subagentRunId:ee.optional(),messageId:T(),delta:T()}),bS=z({type:$(v.TEXT_MESSAGE_END),timestamp:W().min(-9007199254740991).max(9007199254740991).optional(),rawEvent:B().refine(t=>t!==null).optional(),metadata:V.optional(),subagentRunId:ee.optional(),messageId:T()}),uu=z({type:$(v.TEXT_MESSAGE_CHUNK),timestamp:W().min(-9007199254740991).max(9007199254740991).optional(),rawEvent:B().refine(t=>t!==null).optional(),metadata:V.optional(),subagentRunId:ee.optional(),messageId:T().optional(),role:Ig.optional(),delta:T().optional(),name:T().optional()}),yS=z({type:$(v.TOOL_CALL_START),timestamp:W().min(-9007199254740991).max(9007199254740991).optional(),rawEvent:B().refine(t=>t!==null).optional(),metadata:V.optional(),subagentRunId:ee.optional(),toolCallId:T(),toolCallName:T(),parentMessageId:T().optional()}),wS=z({type:$(v.TOOL_CALL_ARGS),timestamp:W().min(-9007199254740991).max(9007199254740991).optional(),rawEvent:B().refine(t=>t!==null).optional(),metadata:V.optional(),subagentRunId:ee.optional(),toolCallId:T(),delta:T()}),ES=z({type:$(v.TOOL_CALL_END),timestamp:W().min(-9007199254740991).max(9007199254740991).optional(),rawEvent:B().refine(t=>t!==null).optional(),metadata:V.optional(),subagentRunId:ee.optional(),toolCallId:T()}),du=z({type:$(v.TOOL_CALL_CHUNK),timestamp:W().min(-9007199254740991).max(9007199254740991).optional(),rawEvent:B().refine(t=>t!==null).optional(),metadata:V.optional(),subagentRunId:ee.optional(),toolCallId:T().optional(),toolCallName:T().optional(),parentMessageId:T().optional(),delta:T().optional()}),xS=z({type:$("text"),id:T().optional(),text:T(),metadata:B().refine(t=>t!==null).optional()}),_S=z({type:$("data"),value:T(),mimeType:T()}),SS=z({type:$("url"),value:T(),mimeType:T().optional()}),TS=z({type:$("file"),value:T(),provider:T().optional(),mimeType:T().optional()}),Xi=Bt("type",[_S,SS,TS]),AS=z({type:$("image"),id:T().optional(),source:Xi,metadata:B().refine(t=>t!==null).optional()}),kS=z({type:$("audio"),id:T().optional(),source:Xi,metadata:B().refine(t=>t!==null).optional()}),IS=z({type:$("video"),id:T().optional(),source:Xi,metadata:B().refine(t=>t!==null).optional()}),RS=z({type:$("document"),id:T().optional(),source:Xi,metadata:B().refine(t=>t!==null).optional()}),pu=Bt("type",[xS,AS,kS,IS,RS]),CS=z({type:$(v.TOOL_CALL_RESULT),timestamp:W().min(-9007199254740991).max(9007199254740991).optional(),rawEvent:B().refine(t=>t!==null).optional(),metadata:V.optional(),subagentRunId:ee.optional(),messageId:T(),toolCallId:T(),content:Kr([T(),Re(pu)]),role:$("tool").optional()}),Rg=B(),NS=z({type:$(v.STATE_SNAPSHOT),timestamp:W().min(-9007199254740991).max(9007199254740991).optional(),rawEvent:B().refine(t=>t!==null).optional(),metadata:V.optional(),subagentRunId:ee.optional(),snapshot:Rg.refine(t=>t!==void 0)}),Zt=T().regex(new RegExp("^(/([^/~]|~[01])*)*$")),OS=z({op:$("add"),path:Zt,value:B().refine(t=>t!==void 0)}).meta({specOpen:!0}),PS=z({op:$("remove"),path:Zt}).meta({specOpen:!0}),MS=z({op:$("replace"),path:Zt,value:B().refine(t=>t!==void 0)}).meta({specOpen:!0}),LS=z({op:$("move"),from:Zt,path:Zt}).meta({specOpen:!0}),zS=z({op:$("copy"),from:Zt,path:Zt}).meta({specOpen:!0}),DS=z({op:$("test"),path:Zt,value:B().refine(t=>t!==void 0)}).meta({specOpen:!0}),$S=Bt("op",[OS,PS,MS,LS,zS,DS]),Cg=Re($S),US=z({type:$(v.STATE_DELTA),timestamp:W().min(-9007199254740991).max(9007199254740991).optional(),rawEvent:B().refine(t=>t!==null).optional(),metadata:V.optional(),subagentRunId:ee.optional(),delta:Cg}),HS=z({subagentRunId:ee.optional(),id:T(),role:$("developer"),name:T().optional(),encryptedValue:T().optional(),metadata:V.optional(),content:T()}),FS=z({subagentRunId:ee.optional(),id:T(),role:$("system"),name:T().optional(),encryptedValue:T().optional(),metadata:V.optional(),content:T()}),GS=z({name:T(),arguments:T()}),BS=z({id:T(),type:$("function"),function:GS,encryptedValue:T().optional(),metadata:V.optional()}),ZS=z({subagentRunId:ee.optional(),id:T(),role:$("assistant"),name:T().optional(),encryptedValue:T().optional(),metadata:V.optional(),content:T().optional(),toolCalls:Re(BS).optional()}),VS=z({subagentRunId:ee.optional(),id:T(),role:$("user"),name:T().optional(),encryptedValue:T().optional(),metadata:V.optional(),content:Kr([T(),Re(pu)])}),jS=z({subagentRunId:ee.optional(),id:T(),role:$("tool"),content:Kr([T(),Re(pu)]),toolCallId:T(),error:T().optional(),encryptedValue:T().optional(),metadata:V.optional()}),WS=z({subagentRunId:ee.optional(),id:T(),role:$("activity"),activityType:T(),content:sr(t=>typeof t=="object"&&t!==null&&!Array.isArray(t)),metadata:V.optional()}),qS=z({subagentRunId:ee.optional(),id:T(),role:$("reasoning"),content:T(),encryptedValue:T().optional(),metadata:V.optional()}),Ng=Bt("role",[HS,FS,ZS,VS,jS,WS,qS]),YS=z({type:$(v.MESSAGES_SNAPSHOT),timestamp:W().min(-9007199254740991).max(9007199254740991).optional(),rawEvent:B().refine(t=>t!==null).optional(),metadata:V.optional(),messages:Re(Ng)}),KS=z({type:$(v.ACTIVITY_SNAPSHOT),timestamp:W().min(-9007199254740991).max(9007199254740991).optional(),rawEvent:B().refine(t=>t!==null).optional(),metadata:V.optional(),subagentRunId:ee.optional(),messageId:T(),activityType:T(),content:sr(t=>typeof t=="object"&&t!==null&&!Array.isArray(t)),replace:te().optional()}),XS=z({type:$(v.ACTIVITY_DELTA),timestamp:W().min(-9007199254740991).max(9007199254740991).optional(),rawEvent:B().refine(t=>t!==null).optional(),metadata:V.optional(),subagentRunId:ee.optional(),messageId:T(),activityType:T(),patch:Cg}),JS=z({type:$(v.RAW),timestamp:W().min(-9007199254740991).max(9007199254740991).optional(),rawEvent:B().refine(t=>t!==null).optional(),metadata:V.optional(),subagentRunId:ee.optional(),event:B().refine(t=>t!==void 0),source:T().optional()}),QS=z({type:$(v.CUSTOM),timestamp:W().min(-9007199254740991).max(9007199254740991).optional(),rawEvent:B().refine(t=>t!==null).optional(),metadata:V.optional(),subagentRunId:ee.optional(),name:T(),value:B().refine(t=>t!==void 0)}),Og=z({name:T(),description:T(),parameters:B().refine(t=>t!==null).optional(),metadata:V.optional()}),e0=z({description:T(),value:T()}),t0=z({interruptId:T(),status:bn(["resolved","cancelled"]),payload:B().refine(t=>t!==null).optional(),metadata:V.optional()}),Ji=z({threadId:T(),runId:T(),protocolVersion:T().optional(),parentRunId:T().optional(),state:Rg.refine(t=>t!==null).nullable().transform(t=>t??void 0).optional(),messages:Re(Ng),tools:Re(Og).default(()=>[]),context:Re(e0).default(()=>[]),forwardedProps:B().refine(t=>t!==null).optional(),resume:Re(t0).optional()}),n0=z({type:$(v.RUN_STARTED),timestamp:W().min(-9007199254740991).max(9007199254740991).optional(),rawEvent:B().refine(t=>t!==null).optional(),metadata:V.optional(),threadId:T(),runId:T(),protocolVersion:T().optional(),parentRunId:T().optional(),input:Ji.optional()}),r0=z({type:$("success"),pendingToolCallIds:Re(T()).optional()}),o0=z({subagentRunId:ee.optional(),id:T(),reason:T(),message:T().optional(),toolCallId:T().optional(),responseSchema:sr(t=>typeof t=="object"&&t!==null&&!Array.isArray(t)).optional(),expiresAt:T().optional(),metadata:V.optional()}),i0=z({type:$("interrupt"),interrupts:Re(o0).min(1)}),a0=z({type:$("cancelled")}),s0=Bt("type",[r0,i0,a0]),Pg=z({provider:T().optional(),model:T().optional(),inputTokens:W().min(0).max(9007199254740991).optional(),outputTokens:W().min(0).max(9007199254740991).optional(),totalTokens:W().min(0).max(9007199254740991).optional(),reasoningTokens:W().min(0).max(9007199254740991).optional(),cachedInputTokens:W().min(0).max(9007199254740991).optional(),cacheWriteInputTokens:W().min(0).max(9007199254740991).optional()}),l0=z({type:$(v.RUN_FINISHED),timestamp:W().min(-9007199254740991).max(9007199254740991).optional(),rawEvent:B().refine(t=>t!==null).optional(),metadata:V.optional(),threadId:T(),runId:T(),result:B().refine(t=>t!==null).optional(),outcome:s0.optional(),usage:Re(Pg).optional()}),c0=z({type:$(v.RUN_ERROR),timestamp:W().min(-9007199254740991).max(9007199254740991).optional(),rawEvent:B().refine(t=>t!==null).optional(),metadata:V.optional(),message:T(),code:T().optional(),usage:Re(Pg).optional()}),u0=z({type:$(v.STEP_STARTED),timestamp:W().min(-9007199254740991).max(9007199254740991).optional(),rawEvent:B().refine(t=>t!==null).optional(),metadata:V.optional(),subagentRunId:ee.optional(),stepName:T()}),d0=z({type:$(v.STEP_FINISHED),timestamp:W().min(-9007199254740991).max(9007199254740991).optional(),rawEvent:B().refine(t=>t!==null).optional(),metadata:V.optional(),subagentRunId:ee.optional(),stepName:T()}),p0=z({type:$(v.REASONING_START),timestamp:W().min(-9007199254740991).max(9007199254740991).optional(),rawEvent:B().refine(t=>t!==null).optional(),metadata:V.optional(),subagentRunId:ee.optional(),messageId:T()}),h0=z({type:$(v.REASONING_MESSAGE_START),timestamp:W().min(-9007199254740991).max(9007199254740991).optional(),rawEvent:B().refine(t=>t!==null).optional(),metadata:V.optional(),subagentRunId:ee.optional(),messageId:T(),role:$("reasoning")}),f0=z({type:$(v.REASONING_MESSAGE_CONTENT),timestamp:W().min(-9007199254740991).max(9007199254740991).optional(),rawEvent:B().refine(t=>t!==null).optional(),metadata:V.optional(),subagentRunId:ee.optional(),messageId:T(),delta:T()}),m0=z({type:$(v.REASONING_MESSAGE_END),timestamp:W().min(-9007199254740991).max(9007199254740991).optional(),rawEvent:B().refine(t=>t!==null).optional(),metadata:V.optional(),subagentRunId:ee.optional(),messageId:T()}),hu=z({type:$(v.REASONING_MESSAGE_CHUNK),timestamp:W().min(-9007199254740991).max(9007199254740991).optional(),rawEvent:B().refine(t=>t!==null).optional(),metadata:V.optional(),subagentRunId:ee.optional(),messageId:T().optional(),delta:T().optional()}),g0=z({type:$(v.REASONING_END),timestamp:W().min(-9007199254740991).max(9007199254740991).optional(),rawEvent:B().refine(t=>t!==null).optional(),metadata:V.optional(),subagentRunId:ee.optional(),messageId:T()}),v0=bn(["tool-call","message"]),b0=z({type:$(v.REASONING_ENCRYPTED_VALUE),timestamp:W().min(-9007199254740991).max(9007199254740991).optional(),rawEvent:B().refine(t=>t!==null).optional(),metadata:V.optional(),subagentRunId:ee.optional(),subtype:v0,entityId:T(),encryptedValue:T()}),y0=z({type:$(v.SUBAGENT_STARTED),timestamp:W().min(-9007199254740991).max(9007199254740991).optional(),rawEvent:B().refine(t=>t!==null).optional(),metadata:V.optional(),subagentRunId:ee,name:T(),description:T().optional(),parentSubagentRunId:ee.optional(),parentToolCallId:T().optional(),parentMessageId:T().optional()}),w0=z({type:$("success")}),E0=z({type:$("suspended"),interruptIds:Re(T()).optional()}),x0=Bt("type",[w0,E0]),_0=z({type:$(v.SUBAGENT_FINISHED),timestamp:W().min(-9007199254740991).max(9007199254740991).optional(),rawEvent:B().refine(t=>t!==null).optional(),metadata:V.optional(),subagentRunId:ee,result:B().refine(t=>t!==null).optional(),outcome:x0.optional()}),S0=z({type:$(v.SUBAGENT_ERROR),timestamp:W().min(-9007199254740991).max(9007199254740991).optional(),rawEvent:B().refine(t=>t!==null).optional(),metadata:V.optional(),subagentRunId:ee,message:T(),code:T().optional()}),fu=Bt("type",[gS,vS,bS,uu,yS,wS,ES,du,CS,NS,US,YS,KS,XS,JS,QS,n0,l0,c0,u0,d0,p0,h0,f0,m0,hu,g0,b0,y0,_0,S0]),BL=bn(["developer","system","assistant","user","tool","activity","reasoning"]),T0=z({name:T(),description:T().optional()}),A0=z({name:T().optional(),type:T().optional(),description:T().optional(),version:T().optional(),provider:T().optional(),documentationUrl:T().optional(),metadata:V.optional()}),k0=z({streaming:te().optional(),websocket:te().optional(),httpBinary:te().optional(),pushNotifications:te().optional(),resumable:te().optional()}),I0=z({supported:te().optional(),items:Re(Og).optional(),parallelCalls:te().optional(),clientProvided:te().optional()}),R0=z({structuredOutput:te().optional(),supportedMimeTypes:Re(T()).optional()}),C0=z({snapshots:te().optional(),deltas:te().optional(),memory:te().optional(),persistentState:te().optional()}),N0=z({supported:te().optional(),delegation:te().optional(),handoffs:te().optional(),subagents:Re(T0).optional()}),O0=z({supported:te().optional(),streaming:te().optional(),encrypted:te().optional()}),P0=z({image:te().optional(),audio:te().optional(),video:te().optional(),pdf:te().optional(),file:te().optional()}),M0=z({image:te().optional(),audio:te().optional()}),L0=z({input:P0.optional(),output:M0.optional()}),z0=z({codeExecution:te().optional(),sandboxed:te().optional(),maxIterations:W().min(0).max(9007199254740991).optional(),maxExecutionTime:W().min(0).max(9007199254740991).optional()}),D0=z({supported:te().optional(),approvals:te().optional(),interventions:te().optional(),feedback:te().optional(),interrupts:te().optional(),approveWithEdits:te().optional()}),ZL=z({identity:A0.optional(),transport:k0.optional(),tools:I0.optional(),output:R0.optional(),state:C0.optional(),multiAgent:N0.optional(),reasoning:O0.optional(),multimodal:L0.optional(),execution:z0.optional(),humanInTheLoop:D0.optional(),custom:sr(t=>typeof t=="object"&&t!==null&&!Array.isArray(t)).optional()}),VL=z({subagentRunId:ee.optional()}),jL=z({type:mS,timestamp:W().min(-9007199254740991).max(9007199254740991).optional(),rawEvent:B().refine(t=>t!==null).optional(),metadata:V.optional()}),WL=z({subagentRunId:ee.optional(),id:T(),role:T(),name:T().optional(),encryptedValue:T().optional(),metadata:V.optional()}),qL=V.optional();Ue(rr());function Lg(){let t=this.buf,e=this.pos,n=0,r=0;for(let i=0;i<28;i+=7){let a=t[e++];if(n|=(a&127)<<i,(a&128)==0){this.pos=e,this.assertBounds(),this.varint64Lo=n,this.varint64Hi=r;return}}let o=t[e++];if(n|=(o&15)<<28,r=(o&112)>>4,(o&128)==0){this.pos=e,this.assertBounds(),this.varint64Lo=n,this.varint64Hi=r;return}for(let i=3;i<=31;i+=7){let a=t[e++];if(r|=(a&127)<<i,(a&128)==0){this.pos=e,this.assertBounds(),this.varint64Lo=n,this.varint64Hi=r;return}}throw new Error("invalid varint")}var Qi=4294967296;function mu(t){let e=t[0]==="-";e&&(t=t.slice(1));let n=1e6,r=0,o=0;function i(a,s){let c=Number(t.slice(a,s));o*=n,r=r*n+c,r>=Qi&&(o=o+(r/Qi|0),r=r%Qi)}return i(-24,-18),i(-18,-12),i(-12,-6),i(-6),e?Dg(r,o):vu(r,o)}function zg(t,e){let n=vu(t,e),r=n.hi&2147483648;r&&(n=Dg(n.lo,n.hi));let o=gu(n.lo,n.hi);return r?"-"+o:o}function gu(t,e){if({lo:t,hi:e}=$0(t,e),e<=2097151)return String(Qi*e+t);let n=t&16777215,r=(t>>>24|e<<8)&16777215,o=e>>16&65535,i=n+r*6777216+o*6710656,a=r+o*8147497,s=o*2,c=1e7;return i>=c&&(a+=Math.floor(i/c),i%=c),a>=c&&(s+=Math.floor(a/c),a%=c),s.toString()+Mg(a)+Mg(i)}function $0(t,e){return{lo:t>>>0,hi:e>>>0}}function vu(t,e){return{lo:t|0,hi:e|0}}function Dg(t,e){return e=~e,t?t=~t+1:e+=1,vu(t,e)}var Mg=t=>{let e=String(t);return"0000000".slice(e.length)+e};function $g(){let t=this.buf[this.pos++];if((t&128)===0)return this.assertBounds(),t;let e=t&127;if(t=this.buf[this.pos++],e|=(t&127)<<7,(t&128)===0)return this.assertBounds(),e;if(t=this.buf[this.pos++],e|=(t&127)<<14,(t&128)===0)return this.assertBounds(),e;if(t=this.buf[this.pos++],e|=(t&127)<<21,(t&128)===0)return this.assertBounds(),e;t=this.buf[this.pos++],e|=(t&15)<<28;for(let n=5;(t&128)!==0&&n<10;n++)t=this.buf[this.pos++];if((t&128)!==0)throw new Error("invalid varint");return this.assertBounds(),e>>>0}var pt=U0();function U0(){let t=new DataView(new ArrayBuffer(8));if(typeof BigInt=="function"&&typeof t.getBigInt64=="function"&&typeof t.getBigUint64=="function"&&typeof t.setBigInt64=="function"&&typeof t.setBigUint64=="function"&&(!!globalThis.Deno||!!globalThis.Bun||typeof process!="object"||typeof process.env!="object"||process.env.BUF_BIGINT_DISABLE!=="1")){let n=BigInt("-9223372036854775808"),r=BigInt("9223372036854775807"),o=BigInt("0"),i=BigInt("18446744073709551615");return{zero:BigInt(0),supported:!0,parse(a){let s=typeof a=="bigint"?a:BigInt(a);if(s>r||s<n)throw new Error(`invalid int64: ${a}`);return s},uParse(a){let s=typeof a=="bigint"?a:BigInt(a);if(s>i||s<o)throw new Error(`invalid uint64: ${a}`);return s},enc(a){return t.setBigInt64(0,this.parse(a),!0),{lo:t.getInt32(0,!0),hi:t.getInt32(4,!0)}},uEnc(a){return t.setBigInt64(0,this.uParse(a),!0),{lo:t.getInt32(0,!0),hi:t.getInt32(4,!0)}},dec(a,s){return t.setInt32(0,a,!0),t.setInt32(4,s,!0),t.getBigInt64(0,!0)},uDec(a,s){return t.setInt32(0,a,!0),t.setInt32(4,s,!0),t.getBigUint64(0,!0)}}}return{zero:"0",supported:!1,parse(n){return typeof n!="string"&&(n=n.toString()),Ug(n),n},uParse(n){return typeof n!="string"&&(n=n.toString()),Hg(n),n},enc(n){return typeof n!="string"&&(n=n.toString()),Ug(n),mu(n)},uEnc(n){return typeof n!="string"&&(n=n.toString()),Hg(n),mu(n)},dec(n,r){return zg(n,r)},uDec(n,r){return gu(n,r)}}}function Ug(t){if(!/^-?[0-9]+$/.test(t))throw new Error("invalid int64: "+t)}function Hg(t){if(!/^[0-9]+$/.test(t))throw new Error("invalid uint64: "+t)}var bu;function H0(t){var e;bu=Object.assign(Object.assign({},t),{encodeUtf8Into:(e=t.encodeUtf8Into)!==null&&e!==void 0?e:wu(t.encodeUtf8.bind(t))})}function yu(){if(!bu){let t=globalThis;if(!t.TextEncoder||!t.TextDecoder)throw new Error("encoding API missing: install TextEncoder and TextDecoder on globalThis");let e=new t.TextEncoder,n=new t.TextDecoder,r,o={encodeUtf8(a){return e.encode(a)},decodeUtf8(a,s){return s?(r||(r=new t.TextDecoder("utf-8",{fatal:!0})),r.decode(a)):n.decode(a)},checkUtf8(a){try{return encodeURIComponent(a),!0}catch{return!1}}};e.encodeInto&&(o.encodeUtf8Into=e.encodeInto.bind(e));let i=String.prototype.isWellFormed;i&&(o.checkUtf8=a=>i.call(a)),H0(o)}return bu}function wu(t){return(e,n)=>{let r=t(e);return n.set(r),{written:r.byteLength}}}var Vt;(function(t){t[t.Varint=0]="Varint",t[t.Bit64=1]="Bit64",t[t.LengthDelimited=2]="LengthDelimited",t[t.StartGroup=3]="StartGroup",t[t.EndGroup=4]="EndGroup",t[t.Bit32=5]="Bit32"})(Vt||(Vt={}));var F0=4294967295,G0=2147483647,B0=-2147483648,U=class{constructor(e){this.stackPos=[],this.encodeUtf8Into=e?wu(e):yu().encodeUtf8Into,this.buffer=Gg,this.viewCache=V0,this.pos=0}ensureCapacity(e){let n=this.pos+e;if(n>this.buffer.length){let r=this.buffer.length||Z0;for(;r<n;)r*=2;let o=new Uint8Array(r);this.pos>0&&o.set(this.buffer),this.buffer=o}}view(){let e=this.buffer,n=this.viewCache;if(n.byteLength===e.byteLength)return n;let r=new DataView(e.buffer);return this.viewCache=r,r}finish(){let e=this.buffer.slice(0,this.pos);return this.pos=0,this.stackPos=[],e}fork(){return this.stackPos.push(this.pos),this.ensureCapacity(Xr),this.buffer[this.pos++]=0,this}join(){let e=this.stackPos.pop();if(e===void 0)throw new Error("invalid state, fork stack empty");let n=this.pos-e-Xr,r=Eu(n);return r>Xr&&(this.ensureCapacity(r-Xr),this.buffer.copyWithin(e+r,e+Xr,this.pos)),this.pos=e,this.uint32(n),this.pos+=n,this}tag(e,n){return this.uint32((e<<3|n)>>>0)}raw(e){return this.ensureCapacity(e.length),this.buffer.set(e,this.pos),this.pos+=e.length,this}uint32(e){if(Fg(e),this.ensureCapacity(5),e<128)return this.buffer[this.pos++]=e,this;for(;e>127;)this.buffer[this.pos++]=e&127|128,e>>>=7;return this.buffer[this.pos++]=e,this}int32(e){if(xu(e),e>=0)return this.uint32(e);this.ensureCapacity(10);for(let n=0;n<9;n++)this.buffer[this.pos++]=e&127|128,e>>=7;return this.buffer[this.pos++]=1,this}bool(e){return this.ensureCapacity(1),this.buffer[this.pos++]=e?1:0,this}bytes(e){return this.uint32(e.byteLength),this.raw(e)}string(e){typeof e!="string"&&(e=String(e));let n=e.length;if(n<=Bg){this.ensureCapacity(n+1);let c=this.buffer,l=this.pos;c[l++]=n;let u=0;for(;u<n;u++){let f=e.charCodeAt(u);if(f>127)break;c[l++]=f}if(u==n)return this.pos=l,this}this.ensureCapacity(n*3+5);let r=Eu(n),o=this.buffer,i=this.pos,{written:a}=this.encodeUtf8Into(e,o.subarray(i+r)),s=Eu(a);return s!=r&&o.copyWithin(i+s,i+r,i+r+a),this.uint32(a),this.pos+=a,this}float(e){return j0(e),this.ensureCapacity(4),this.view().setFloat32(this.pos,e,!0),this.pos+=4,this}double(e){return this.ensureCapacity(8),this.view().setFloat64(this.pos,e,!0),this.pos+=8,this}fixed32(e){return Fg(e),this.ensureCapacity(4),this.view().setUint32(this.pos,e,!0),this.pos+=4,this}sfixed32(e){return xu(e),this.ensureCapacity(4),this.view().setInt32(this.pos,e,!0),this.pos+=4,this}sint32(e){return xu(e),this.uint32((e<<1^e>>31)>>>0)}sfixed64(e){let n=pt.enc(e);this.ensureCapacity(8);let r=this.view();return r.setInt32(this.pos,n.lo,!0),r.setInt32(this.pos+4,n.hi,!0),this.pos+=8,this}fixed64(e){let n=pt.uEnc(e);this.ensureCapacity(8);let r=this.view();return r.setInt32(this.pos,n.lo,!0),r.setInt32(this.pos+4,n.hi,!0),this.pos+=8,this}int64(e){let n=pt.enc(e);return this.writeVarint64(n.lo,n.hi)}sint64(e){let n=pt.enc(e),r=n.hi>>31,o=n.lo<<1^r,i=(n.hi<<1|n.lo>>>31)^r;return this.writeVarint64(o,i)}uint64(e){let n=pt.uEnc(e);return this.writeVarint64(n.lo,n.hi)}writeVarint64(e,n){this.ensureCapacity(10);let r=this.buffer,o=this.pos;for(let s=0;s<28;s=s+7){let c=e>>>s,l=!(!(c>>>7)&&n==0);if(r[o++]=(l?c|128:c)&255,!l)return this.pos=o,this}let i=e>>>28&15|(n&7)<<4,a=n>>3!=0;if(r[o++]=(a?i|128:i)&255,!a)return this.pos=o,this;for(let s=3;s<31;s=s+7){let c=n>>>s,l=!!(c>>>7);if(r[o++]=(l?c|128:c)&255,!l)return this.pos=o,this}return r[o++]=n>>>31&1,this.pos=o,this}},Z0=128,Xr=1,Gg=new Uint8Array(0),V0=new DataView(Gg.buffer),Bg=32;function Eu(t){return t<128?1:t<16384?2:t<2097152?3:t<268435456?4:5}var R=class{constructor(e,n=yu().decodeUtf8){this.decodeUtf8=n,this.varint64Lo=0,this.varint64Hi=0,this.varint64=Lg,this.uint32=$g,this.buf=e,this.len=e.length,this.pos=0,this.view=new DataView(e.buffer,e.byteOffset,e.byteLength)}tag(){let e=this.pos,n=this.uint32(),r=this.pos-e;if(r>5||r==5&&this.buf[this.pos-1]>15)throw new Error("illegal tag: varint overflows uint32");let o=n>>>3,i=n&7;if(o<=0||i>5)throw new Error("illegal tag: field no "+o+" wire type "+i);return[o,i]}skip(e,n,r=100){let o=this.pos;switch(e){case Vt.Varint:for(;this.buf[this.pos++]&128;);break;case Vt.Bit64:this.pos+=4;case Vt.Bit32:this.pos+=4;break;case Vt.LengthDelimited:let i=this.uint32();this.pos+=i;break;case Vt.StartGroup:if(r<=0)throw new Error("maximum recursion depth reached");for(;;){let[a,s]=this.tag();if(s===Vt.EndGroup){if(n!==void 0&&a!==n)throw new Error("invalid end group tag");break}this.skip(s,a,r-1)}break;default:throw new Error("cant skip wire type "+e)}return this.assertBounds(),this.buf.subarray(o,this.pos)}assertBounds(){if(this.pos>this.len)throw new RangeError("premature EOF")}int32(){return this.uint32()|0}sint32(){let e=this.uint32();return e>>>1^-(e&1)}int64(){return this.varint64(),pt.dec(this.varint64Lo,this.varint64Hi)}uint64(){return this.varint64(),pt.uDec(this.varint64Lo,this.varint64Hi)}sint64(){this.varint64();let e=this.varint64Lo,n=this.varint64Hi,r=-(e&1);return e=(e>>>1|(n&1)<<31)^r,n=n>>>1^r,pt.dec(e,n)}bool(){let e=this.buf[this.pos];return e<128?(this.pos++,e!==0):(this.varint64(),this.varint64Lo!==0||this.varint64Hi!==0)}fixed32(){return this.view.getUint32((this.pos+=4)-4,!0)}sfixed32(){return this.view.getInt32((this.pos+=4)-4,!0)}fixed64(){return pt.uDec(this.sfixed32(),this.sfixed32())}sfixed64(){return pt.dec(this.sfixed32(),this.sfixed32())}float(){return this.view.getFloat32((this.pos+=4)-4,!0)}double(){return this.view.getFloat64((this.pos+=8)-8,!0)}bytes(){let e=this.uint32(),n=this.pos;return this.pos+=e,this.assertBounds(),this.buf.subarray(n,n+e)}string(e){let n=this.bytes(),r=n.length;if(r<=Bg){let o=new Array(r);for(let i=0;i<r;i++){let a=n[i];if(a>127)return this.decodeUtf8(n,e);o[i]=a}return String.fromCharCode.apply(String,o)}return this.decodeUtf8(n,e)}};function xu(t){if(typeof t=="string")t=Number(t);else if(typeof t!="number")throw new Error("invalid int32: "+typeof t);if(!Number.isInteger(t)||t>G0||t<B0)throw new Error("invalid int32: "+t)}function Fg(t){if(typeof t=="string")t=Number(t);else if(typeof t!="number")throw new Error("invalid uint32: "+typeof t);if(!Number.isInteger(t)||t>F0||t<0)throw new Error("invalid uint32: "+t)}function j0(t){if(typeof t=="string"){let e=t;if(t=Number(t),Number.isNaN(t)&&e!=="NaN")throw new Error("invalid float32: "+e)}else if(typeof t!="number")throw new Error("invalid float32: "+typeof t);if(!Number.isFinite(Math.fround(t))&&Number.isFinite(t))throw new Error("invalid float32: "+t)}var W0=(function(t){return t[t.NULL_VALUE=0]="NULL_VALUE",t[t.UNRECOGNIZED=-1]="UNRECOGNIZED",t})({});function _u(){return{fields:{}}}var oe={encode(t,e=new U){return Object.entries(t.fields).forEach(([n,r])=>{r!==void 0&&Au.encode({key:n,value:r},e.uint32(10).fork()).join()}),e},decode(t,e){let n=t instanceof R?t:new R(t),r=e===void 0?n.len:n.pos+e,o=_u();for(;n.pos<r;){let i=n.uint32();switch(i>>>3){case 1:{if(i!==10)break;let a=Au.decode(n,n.uint32());a.value!==void 0&&(o.fields[a.key]=a.value);continue}}if((i&7)===4||i===0)break;n.skip(i&7)}return o},create(t){return oe.fromPartial(t??{})},fromPartial(t){let e=_u();return e.fields=Object.entries(t.fields??{}).reduce((n,[r,o])=>(o!==void 0&&(n[r]=o),n),{}),e},wrap(t){let e=_u();if(t!==void 0)for(let n of Object.keys(t))e.fields[n]=t[n];return e},unwrap(t){let e={};if(t.fields)for(let n of Object.keys(t.fields))e[n]=t.fields[n];return e}};function Zg(){return{key:"",value:void 0}}var Au={encode(t,e=new U){return t.key!==""&&e.uint32(10).string(t.key),t.value!==void 0&&D.encode(D.wrap(t.value),e.uint32(18).fork()).join(),e},decode(t,e){let n=t instanceof R?t:new R(t),r=e===void 0?n.len:n.pos+e,o=Zg();for(;n.pos<r;){let i=n.uint32();switch(i>>>3){case 1:if(i!==10)break;o.key=n.string();continue;case 2:if(i!==18)break;o.value=D.unwrap(D.decode(n,n.uint32()));continue}if((i&7)===4||i===0)break;n.skip(i&7)}return o},create(t){return Au.fromPartial(t??{})},fromPartial(t){let e=Zg();return e.key=t.key??"",e.value=t.value??void 0,e}};function Su(){return{nullValue:void 0,numberValue:void 0,stringValue:void 0,boolValue:void 0,structValue:void 0,listValue:void 0}}var D={encode(t,e=new U){return t.nullValue!==void 0&&e.uint32(8).int32(t.nullValue),t.numberValue!==void 0&&e.uint32(17).double(t.numberValue),t.stringValue!==void 0&&e.uint32(26).string(t.stringValue),t.boolValue!==void 0&&e.uint32(32).bool(t.boolValue),t.structValue!==void 0&&oe.encode(oe.wrap(t.structValue),e.uint32(42).fork()).join(),t.listValue!==void 0&&Jr.encode(Jr.wrap(t.listValue),e.uint32(50).fork()).join(),e},decode(t,e){let n=t instanceof R?t:new R(t),r=e===void 0?n.len:n.pos+e,o=Su();for(;n.pos<r;){let i=n.uint32();switch(i>>>3){case 1:if(i!==8)break;o.nullValue=n.int32();continue;case 2:if(i!==17)break;o.numberValue=n.double();continue;case 3:if(i!==26)break;o.stringValue=n.string();continue;case 4:if(i!==32)break;o.boolValue=n.bool();continue;case 5:if(i!==42)break;o.structValue=oe.unwrap(oe.decode(n,n.uint32()));continue;case 6:if(i!==50)break;o.listValue=Jr.unwrap(Jr.decode(n,n.uint32()));continue}if((i&7)===4||i===0)break;n.skip(i&7)}return o},create(t){return D.fromPartial(t??{})},fromPartial(t){let e=Su();return e.nullValue=t.nullValue??void 0,e.numberValue=t.numberValue??void 0,e.stringValue=t.stringValue??void 0,e.boolValue=t.boolValue??void 0,e.structValue=t.structValue??void 0,e.listValue=t.listValue??void 0,e},wrap(t){let e=Su();if(t===null)e.nullValue=W0.NULL_VALUE;else if(typeof t=="boolean")e.boolValue=t;else if(typeof t=="number")e.numberValue=t;else if(typeof t=="string")e.stringValue=t;else if(globalThis.Array.isArray(t))e.listValue=t;else if(typeof t=="object")e.structValue=t;else if(typeof t<"u")throw new globalThis.Error("Unsupported any value type: "+typeof t);return e},unwrap(t){if(t.stringValue!==void 0)return t.stringValue;if(t?.numberValue!==void 0)return t.numberValue;if(t?.boolValue!==void 0)return t.boolValue;if(t?.structValue!==void 0)return t.structValue;if(t?.listValue!==void 0)return t.listValue;if(t?.nullValue!==void 0)return null}};function Tu(){return{values:[]}}var Jr={encode(t,e=new U){for(let n of t.values)D.encode(D.wrap(n),e.uint32(10).fork()).join();return e},decode(t,e){let n=t instanceof R?t:new R(t),r=e===void 0?n.len:n.pos+e,o=Tu();for(;n.pos<r;){let i=n.uint32();switch(i>>>3){case 1:if(i!==10)break;o.values.push(D.unwrap(D.decode(n,n.uint32())));continue}if((i&7)===4||i===0)break;n.skip(i&7)}return o},create(t){return Jr.fromPartial(t??{})},fromPartial(t){let e=Tu();return e.values=t.values?.map(n=>n)||[],e},wrap(t){let e=Tu();return e.values=t??[],e},unwrap(t){return t?.hasOwnProperty("values")&&globalThis.Array.isArray(t.values)?t.values:t}},Vg=(function(t){return t[t.ADD=0]="ADD",t[t.REMOVE=1]="REMOVE",t[t.REPLACE=2]="REPLACE",t[t.MOVE=3]="MOVE",t[t.COPY=4]="COPY",t[t.TEST=5]="TEST",t[t.UNRECOGNIZED=-1]="UNRECOGNIZED",t})({});function jg(){return{op:0,path:"",from:void 0,value:void 0}}var En={encode(t,e=new U){return t.op!==0&&e.uint32(8).int32(t.op),t.path!==""&&e.uint32(18).string(t.path),t.from!==void 0&&e.uint32(26).string(t.from),t.value!==void 0&&D.encode(D.wrap(t.value),e.uint32(34).fork()).join(),e},decode(t,e){let n=t instanceof R?t:new R(t),r=e===void 0?n.len:n.pos+e,o=jg();for(;n.pos<r;){let i=n.uint32();switch(i>>>3){case 1:if(i!==8)break;o.op=n.int32();continue;case 2:if(i!==18)break;o.path=n.string();continue;case 3:if(i!==26)break;o.from=n.string();continue;case 4:if(i!==34)break;o.value=D.unwrap(D.decode(n,n.uint32()));continue}if((i&7)===4||i===0)break;n.skip(i&7)}return o},create(t){return En.fromPartial(t??{})},fromPartial(t){let e=jg();return e.op=t.op??0,e.path=t.path??"",e.from=t.from??void 0,e.value=t.value??void 0,e}};function Wg(){return{text:"",id:void 0,metadata:void 0}}var ea={encode(t,e=new U){return t.text!==""&&e.uint32(10).string(t.text),t.id!==void 0&&e.uint32(18).string(t.id),t.metadata!==void 0&&D.encode(D.wrap(t.metadata),e.uint32(26).fork()).join(),e},decode(t,e){let n=t instanceof R?t:new R(t),r=e===void 0?n.len:n.pos+e,o=Wg();for(;n.pos<r;){let i=n.uint32();switch(i>>>3){case 1:if(i!==10)break;o.text=n.string();continue;case 2:if(i!==18)break;o.id=n.string();continue;case 3:if(i!==26)break;o.metadata=D.unwrap(D.decode(n,n.uint32()));continue}if((i&7)===4||i===0)break;n.skip(i&7)}return o},create(t){return ea.fromPartial(t??{})},fromPartial(t){let e=Wg();return e.text=t.text??"",e.id=t.id??void 0,e.metadata=t.metadata??void 0,e}};function qg(){return{source:void 0,metadata:void 0,id:void 0}}var ta={encode(t,e=new U){return t.source!==void 0&&Je.encode(t.source,e.uint32(10).fork()).join(),t.metadata!==void 0&&D.encode(D.wrap(t.metadata),e.uint32(18).fork()).join(),t.id!==void 0&&e.uint32(26).string(t.id),e},decode(t,e){let n=t instanceof R?t:new R(t),r=e===void 0?n.len:n.pos+e,o=qg();for(;n.pos<r;){let i=n.uint32();switch(i>>>3){case 1:if(i!==10)break;o.source=Je.decode(n,n.uint32());continue;case 2:if(i!==18)break;o.metadata=D.unwrap(D.decode(n,n.uint32()));continue;case 3:if(i!==26)break;o.id=n.string();continue}if((i&7)===4||i===0)break;n.skip(i&7)}return o},create(t){return ta.fromPartial(t??{})},fromPartial(t){let e=qg();return e.source=t.source!==void 0&&t.source!==null?Je.fromPartial(t.source):void 0,e.metadata=t.metadata??void 0,e.id=t.id??void 0,e}};function Yg(){return{value:"",mimeType:""}}var na={encode(t,e=new U){return t.value!==""&&e.uint32(10).string(t.value),t.mimeType!==""&&e.uint32(18).string(t.mimeType),e},decode(t,e){let n=t instanceof R?t:new R(t),r=e===void 0?n.len:n.pos+e,o=Yg();for(;n.pos<r;){let i=n.uint32();switch(i>>>3){case 1:if(i!==10)break;o.value=n.string();continue;case 2:if(i!==18)break;o.mimeType=n.string();continue}if((i&7)===4||i===0)break;n.skip(i&7)}return o},create(t){return na.fromPartial(t??{})},fromPartial(t){let e=Yg();return e.value=t.value??"",e.mimeType=t.mimeType??"",e}};function Kg(){return{value:"",mimeType:void 0}}var ra={encode(t,e=new U){return t.value!==""&&e.uint32(10).string(t.value),t.mimeType!==void 0&&e.uint32(18).string(t.mimeType),e},decode(t,e){let n=t instanceof R?t:new R(t),r=e===void 0?n.len:n.pos+e,o=Kg();for(;n.pos<r;){let i=n.uint32();switch(i>>>3){case 1:if(i!==10)break;o.value=n.string();continue;case 2:if(i!==18)break;o.mimeType=n.string();continue}if((i&7)===4||i===0)break;n.skip(i&7)}return o},create(t){return ra.fromPartial(t??{})},fromPartial(t){let e=Kg();return e.value=t.value??"",e.mimeType=t.mimeType??void 0,e}};function Xg(){return{value:"",provider:void 0,mimeType:void 0}}var oa={encode(t,e=new U){return t.value!==""&&e.uint32(10).string(t.value),t.provider!==void 0&&e.uint32(18).string(t.provider),t.mimeType!==void 0&&e.uint32(26).string(t.mimeType),e},decode(t,e){let n=t instanceof R?t:new R(t),r=e===void 0?n.len:n.pos+e,o=Xg();for(;n.pos<r;){let i=n.uint32();switch(i>>>3){case 1:if(i!==10)break;o.value=n.string();continue;case 2:if(i!==18)break;o.provider=n.string();continue;case 3:if(i!==26)break;o.mimeType=n.string();continue}if((i&7)===4||i===0)break;n.skip(i&7)}return o},create(t){return oa.fromPartial(t??{})},fromPartial(t){let e=Xg();return e.value=t.value??"",e.provider=t.provider??void 0,e.mimeType=t.mimeType??void 0,e}};function Jg(){return{data:void 0,url:void 0,file:void 0}}var Je={encode(t,e=new U){return t.data!==void 0&&na.encode(t.data,e.uint32(10).fork()).join(),t.url!==void 0&&ra.encode(t.url,e.uint32(18).fork()).join(),t.file!==void 0&&oa.encode(t.file,e.uint32(26).fork()).join(),e},decode(t,e){let n=t instanceof R?t:new R(t),r=e===void 0?n.len:n.pos+e,o=Jg();for(;n.pos<r;){let i=n.uint32();switch(i>>>3){case 1:if(i!==10)break;o.data=na.decode(n,n.uint32());continue;case 2:if(i!==18)break;o.url=ra.decode(n,n.uint32());continue;case 3:if(i!==26)break;o.file=oa.decode(n,n.uint32());continue}if((i&7)===4||i===0)break;n.skip(i&7)}return o},create(t){return Je.fromPartial(t??{})},fromPartial(t){let e=Jg();return e.data=t.data!==void 0&&t.data!==null?na.fromPartial(t.data):void 0,e.url=t.url!==void 0&&t.url!==null?ra.fromPartial(t.url):void 0,e.file=t.file!==void 0&&t.file!==null?oa.fromPartial(t.file):void 0,e}};function Qg(){return{source:void 0,metadata:void 0,id:void 0}}var ia={encode(t,e=new U){return t.source!==void 0&&Je.encode(t.source,e.uint32(10).fork()).join(),t.metadata!==void 0&&D.encode(D.wrap(t.metadata),e.uint32(18).fork()).join(),t.id!==void 0&&e.uint32(26).string(t.id),e},decode(t,e){let n=t instanceof R?t:new R(t),r=e===void 0?n.len:n.pos+e,o=Qg();for(;n.pos<r;){let i=n.uint32();switch(i>>>3){case 1:if(i!==10)break;o.source=Je.decode(n,n.uint32());continue;case 2:if(i!==18)break;o.metadata=D.unwrap(D.decode(n,n.uint32()));continue;case 3:if(i!==26)break;o.id=n.string();continue}if((i&7)===4||i===0)break;n.skip(i&7)}return o},create(t){return ia.fromPartial(t??{})},fromPartial(t){let e=Qg();return e.source=t.source!==void 0&&t.source!==null?Je.fromPartial(t.source):void 0,e.metadata=t.metadata??void 0,e.id=t.id??void 0,e}};function ev(){return{source:void 0,metadata:void 0,id:void 0}}var aa={encode(t,e=new U){return t.source!==void 0&&Je.encode(t.source,e.uint32(10).fork()).join(),t.metadata!==void 0&&D.encode(D.wrap(t.metadata),e.uint32(18).fork()).join(),t.id!==void 0&&e.uint32(26).string(t.id),e},decode(t,e){let n=t instanceof R?t:new R(t),r=e===void 0?n.len:n.pos+e,o=ev();for(;n.pos<r;){let i=n.uint32();switch(i>>>3){case 1:if(i!==10)break;o.source=Je.decode(n,n.uint32());continue;case 2:if(i!==18)break;o.metadata=D.unwrap(D.decode(n,n.uint32()));continue;case 3:if(i!==26)break;o.id=n.string();continue}if((i&7)===4||i===0)break;n.skip(i&7)}return o},create(t){return aa.fromPartial(t??{})},fromPartial(t){let e=ev();return e.source=t.source!==void 0&&t.source!==null?Je.fromPartial(t.source):void 0,e.metadata=t.metadata??void 0,e.id=t.id??void 0,e}};function tv(){return{source:void 0,metadata:void 0,id:void 0}}var sa={encode(t,e=new U){return t.source!==void 0&&Je.encode(t.source,e.uint32(10).fork()).join(),t.metadata!==void 0&&D.encode(D.wrap(t.metadata),e.uint32(18).fork()).join(),t.id!==void 0&&e.uint32(26).string(t.id),e},decode(t,e){let n=t instanceof R?t:new R(t),r=e===void 0?n.len:n.pos+e,o=tv();for(;n.pos<r;){let i=n.uint32();switch(i>>>3){case 1:if(i!==10)break;o.source=Je.decode(n,n.uint32());continue;case 2:if(i!==18)break;o.metadata=D.unwrap(D.decode(n,n.uint32()));continue;case 3:if(i!==26)break;o.id=n.string();continue}if((i&7)===4||i===0)break;n.skip(i&7)}return o},create(t){return sa.fromPartial(t??{})},fromPartial(t){let e=tv();return e.source=t.source!==void 0&&t.source!==null?Je.fromPartial(t.source):void 0,e.metadata=t.metadata??void 0,e.id=t.id??void 0,e}};function nv(){return{text:void 0,image:void 0,audio:void 0,video:void 0,document:void 0}}var xn={encode(t,e=new U){return t.text!==void 0&&ea.encode(t.text,e.uint32(10).fork()).join(),t.image!==void 0&&ta.encode(t.image,e.uint32(18).fork()).join(),t.audio!==void 0&&ia.encode(t.audio,e.uint32(26).fork()).join(),t.video!==void 0&&aa.encode(t.video,e.uint32(34).fork()).join(),t.document!==void 0&&sa.encode(t.document,e.uint32(42).fork()).join(),e},decode(t,e){let n=t instanceof R?t:new R(t),r=e===void 0?n.len:n.pos+e,o=nv();for(;n.pos<r;){let i=n.uint32();switch(i>>>3){case 1:if(i!==10)break;o.text=ea.decode(n,n.uint32());continue;case 2:if(i!==18)break;o.image=ta.decode(n,n.uint32());continue;case 3:if(i!==26)break;o.audio=ia.decode(n,n.uint32());continue;case 4:if(i!==34)break;o.video=aa.decode(n,n.uint32());continue;case 5:if(i!==42)break;o.document=sa.decode(n,n.uint32());continue}if((i&7)===4||i===0)break;n.skip(i&7)}return o},create(t){return xn.fromPartial(t??{})},fromPartial(t){let e=nv();return e.text=t.text!==void 0&&t.text!==null?ea.fromPartial(t.text):void 0,e.image=t.image!==void 0&&t.image!==null?ta.fromPartial(t.image):void 0,e.audio=t.audio!==void 0&&t.audio!==null?ia.fromPartial(t.audio):void 0,e.video=t.video!==void 0&&t.video!==null?aa.fromPartial(t.video):void 0,e.document=t.document!==void 0&&t.document!==null?sa.fromPartial(t.document):void 0,e}};function rv(){return{id:"",type:"",function:void 0,metadata:void 0,encryptedValue:void 0}}var la={encode(t,e=new U){return t.id!==""&&e.uint32(10).string(t.id),t.type!==""&&e.uint32(18).string(t.type),t.function!==void 0&&ca.encode(t.function,e.uint32(26).fork()).join(),t.metadata!==void 0&&oe.encode(oe.wrap(t.metadata),e.uint32(34).fork()).join(),t.encryptedValue!==void 0&&e.uint32(42).string(t.encryptedValue),e},decode(t,e){let n=t instanceof R?t:new R(t),r=e===void 0?n.len:n.pos+e,o=rv();for(;n.pos<r;){let i=n.uint32();switch(i>>>3){case 1:if(i!==10)break;o.id=n.string();continue;case 2:if(i!==18)break;o.type=n.string();continue;case 3:if(i!==26)break;o.function=ca.decode(n,n.uint32());continue;case 4:if(i!==34)break;o.metadata=oe.unwrap(oe.decode(n,n.uint32()));continue;case 5:if(i!==42)break;o.encryptedValue=n.string();continue}if((i&7)===4||i===0)break;n.skip(i&7)}return o},create(t){return la.fromPartial(t??{})},fromPartial(t){let e=rv();return e.id=t.id??"",e.type=t.type??"",e.function=t.function!==void 0&&t.function!==null?ca.fromPartial(t.function):void 0,e.metadata=t.metadata??void 0,e.encryptedValue=t.encryptedValue??void 0,e}};function ov(){return{name:"",arguments:""}}var ca={encode(t,e=new U){return t.name!==""&&e.uint32(10).string(t.name),t.arguments!==""&&e.uint32(18).string(t.arguments),e},decode(t,e){let n=t instanceof R?t:new R(t),r=e===void 0?n.len:n.pos+e,o=ov();for(;n.pos<r;){let i=n.uint32();switch(i>>>3){case 1:if(i!==10)break;o.name=n.string();continue;case 2:if(i!==18)break;o.arguments=n.string();continue}if((i&7)===4||i===0)break;n.skip(i&7)}return o},create(t){return ca.fromPartial(t??{})},fromPartial(t){let e=ov();return e.name=t.name??"",e.arguments=t.arguments??"",e}};function iv(){return{id:"",role:"",content:void 0,name:void 0,toolCalls:[],toolCallId:void 0,error:void 0,contentParts:[],metadata:void 0,subagentRunId:void 0,encryptedValue:void 0,activityType:void 0,activityContent:void 0}}var _n={encode(t,e=new U){t.id!==""&&e.uint32(10).string(t.id),t.role!==""&&e.uint32(18).string(t.role),t.content!==void 0&&e.uint32(26).string(t.content),t.name!==void 0&&e.uint32(34).string(t.name);for(let n of t.toolCalls)la.encode(n,e.uint32(42).fork()).join();t.toolCallId!==void 0&&e.uint32(50).string(t.toolCallId),t.error!==void 0&&e.uint32(58).string(t.error);for(let n of t.contentParts)xn.encode(n,e.uint32(66).fork()).join();return t.metadata!==void 0&&oe.encode(oe.wrap(t.metadata),e.uint32(74).fork()).join(),t.subagentRunId!==void 0&&e.uint32(82).string(t.subagentRunId),t.encryptedValue!==void 0&&e.uint32(90).string(t.encryptedValue),t.activityType!==void 0&&e.uint32(98).string(t.activityType),t.activityContent!==void 0&&oe.encode(oe.wrap(t.activityContent),e.uint32(106).fork()).join(),e},decode(t,e){let n=t instanceof R?t:new R(t),r=e===void 0?n.len:n.pos+e,o=iv();for(;n.pos<r;){let i=n.uint32();switch(i>>>3){case 1:if(i!==10)break;o.id=n.string();continue;case 2:if(i!==18)break;o.role=n.string();continue;case 3:if(i!==26)break;o.content=n.string();continue;case 4:if(i!==34)break;o.name=n.string();continue;case 5:if(i!==42)break;o.toolCalls.push(la.decode(n,n.uint32()));continue;case 6:if(i!==50)break;o.toolCallId=n.string();continue;case 7:if(i!==58)break;o.error=n.string();continue;case 8:if(i!==66)break;o.contentParts.push(xn.decode(n,n.uint32()));continue;case 9:if(i!==74)break;o.metadata=oe.unwrap(oe.decode(n,n.uint32()));continue;case 10:if(i!==82)break;o.subagentRunId=n.string();continue;case 11:if(i!==90)break;o.encryptedValue=n.string();continue;case 12:if(i!==98)break;o.activityType=n.string();continue;case 13:if(i!==106)break;o.activityContent=oe.unwrap(oe.decode(n,n.uint32()));continue}if((i&7)===4||i===0)break;n.skip(i&7)}return o},create(t){return _n.fromPartial(t??{})},fromPartial(t){let e=iv();return e.id=t.id??"",e.role=t.role??"",e.content=t.content??void 0,e.name=t.name??void 0,e.toolCalls=t.toolCalls?.map(n=>la.fromPartial(n))||[],e.toolCallId=t.toolCallId??void 0,e.error=t.error??void 0,e.contentParts=t.contentParts?.map(n=>xn.fromPartial(n))||[],e.metadata=t.metadata??void 0,e.subagentRunId=t.subagentRunId??void 0,e.encryptedValue=t.encryptedValue??void 0,e.activityType=t.activityType??void 0,e.activityContent=t.activityContent??void 0,e}};function av(){return{name:"",description:"",parameters:void 0,metadata:void 0}}var ua={encode(t,e=new U){return t.name!==""&&e.uint32(10).string(t.name),t.description!==""&&e.uint32(18).string(t.description),t.parameters!==void 0&&D.encode(D.wrap(t.parameters),e.uint32(26).fork()).join(),t.metadata!==void 0&&oe.encode(oe.wrap(t.metadata),e.uint32(34).fork()).join(),e},decode(t,e){let n=t instanceof R?t:new R(t),r=e===void 0?n.len:n.pos+e,o=av();for(;n.pos<r;){let i=n.uint32();switch(i>>>3){case 1:if(i!==10)break;o.name=n.string();continue;case 2:if(i!==18)break;o.description=n.string();continue;case 3:if(i!==26)break;o.parameters=D.unwrap(D.decode(n,n.uint32()));continue;case 4:if(i!==34)break;o.metadata=oe.unwrap(oe.decode(n,n.uint32()));continue}if((i&7)===4||i===0)break;n.skip(i&7)}return o},create(t){return ua.fromPartial(t??{})},fromPartial(t){let e=av();return e.name=t.name??"",e.description=t.description??"",e.parameters=t.parameters??void 0,e.metadata=t.metadata??void 0,e}};function sv(){return{description:"",value:""}}var da={encode(t,e=new U){return t.description!==""&&e.uint32(10).string(t.description),t.value!==""&&e.uint32(18).string(t.value),e},decode(t,e){let n=t instanceof R?t:new R(t),r=e===void 0?n.len:n.pos+e,o=sv();for(;n.pos<r;){let i=n.uint32();switch(i>>>3){case 1:if(i!==10)break;o.description=n.string();continue;case 2:if(i!==18)break;o.value=n.string();continue}if((i&7)===4||i===0)break;n.skip(i&7)}return o},create(t){return da.fromPartial(t??{})},fromPartial(t){let e=sv();return e.description=t.description??"",e.value=t.value??"",e}};function lv(){return{interruptId:"",status:"",payload:void 0,metadata:void 0}}var pa={encode(t,e=new U){return t.interruptId!==""&&e.uint32(10).string(t.interruptId),t.status!==""&&e.uint32(18).string(t.status),t.payload!==void 0&&D.encode(D.wrap(t.payload),e.uint32(26).fork()).join(),t.metadata!==void 0&&oe.encode(oe.wrap(t.metadata),e.uint32(34).fork()).join(),e},decode(t,e){let n=t instanceof R?t:new R(t),r=e===void 0?n.len:n.pos+e,o=lv();for(;n.pos<r;){let i=n.uint32();switch(i>>>3){case 1:if(i!==10)break;o.interruptId=n.string();continue;case 2:if(i!==18)break;o.status=n.string();continue;case 3:if(i!==26)break;o.payload=D.unwrap(D.decode(n,n.uint32()));continue;case 4:if(i!==34)break;o.metadata=oe.unwrap(oe.decode(n,n.uint32()));continue}if((i&7)===4||i===0)break;n.skip(i&7)}return o},create(t){return pa.fromPartial(t??{})},fromPartial(t){let e=lv();return e.interruptId=t.interruptId??"",e.status=t.status??"",e.payload=t.payload??void 0,e.metadata=t.metadata??void 0,e}};function cv(){return{threadId:"",runId:"",parentRunId:void 0,state:void 0,messages:[],tools:[],context:[],forwardedProps:void 0,resume:[],protocolVersion:void 0}}var ha={encode(t,e=new U){t.threadId!==""&&e.uint32(10).string(t.threadId),t.runId!==""&&e.uint32(18).string(t.runId),t.parentRunId!==void 0&&e.uint32(26).string(t.parentRunId),t.state!==void 0&&D.encode(D.wrap(t.state),e.uint32(34).fork()).join();for(let n of t.messages)_n.encode(n,e.uint32(42).fork()).join();for(let n of t.tools)ua.encode(n,e.uint32(50).fork()).join();for(let n of t.context)da.encode(n,e.uint32(58).fork()).join();t.forwardedProps!==void 0&&D.encode(D.wrap(t.forwardedProps),e.uint32(66).fork()).join();for(let n of t.resume)pa.encode(n,e.uint32(74).fork()).join();return t.protocolVersion!==void 0&&e.uint32(82).string(t.protocolVersion),e},decode(t,e){let n=t instanceof R?t:new R(t),r=e===void 0?n.len:n.pos+e,o=cv();for(;n.pos<r;){let i=n.uint32();switch(i>>>3){case 1:if(i!==10)break;o.threadId=n.string();continue;case 2:if(i!==18)break;o.runId=n.string();continue;case 3:if(i!==26)break;o.parentRunId=n.string();continue;case 4:if(i!==34)break;o.state=D.unwrap(D.decode(n,n.uint32()));continue;case 5:if(i!==42)break;o.messages.push(_n.decode(n,n.uint32()));continue;case 6:if(i!==50)break;o.tools.push(ua.decode(n,n.uint32()));continue;case 7:if(i!==58)break;o.context.push(da.decode(n,n.uint32()));continue;case 8:if(i!==66)break;o.forwardedProps=D.unwrap(D.decode(n,n.uint32()));continue;case 9:if(i!==74)break;o.resume.push(pa.decode(n,n.uint32()));continue;case 10:if(i!==82)break;o.protocolVersion=n.string();continue}if((i&7)===4||i===0)break;n.skip(i&7)}return o},create(t){return ha.fromPartial(t??{})},fromPartial(t){let e=cv();return e.threadId=t.threadId??"",e.runId=t.runId??"",e.parentRunId=t.parentRunId??void 0,e.state=t.state??void 0,e.messages=t.messages?.map(n=>_n.fromPartial(n))||[],e.tools=t.tools?.map(n=>ua.fromPartial(n))||[],e.context=t.context?.map(n=>da.fromPartial(n))||[],e.forwardedProps=t.forwardedProps??void 0,e.resume=t.resume?.map(n=>pa.fromPartial(n))||[],e.protocolVersion=t.protocolVersion??void 0,e}};function uv(){return{id:"",reason:"",message:void 0,toolCallId:void 0,responseSchema:void 0,expiresAt:void 0,metadata:void 0,subagentRunId:void 0}}var fa={encode(t,e=new U){return t.id!==""&&e.uint32(10).string(t.id),t.reason!==""&&e.uint32(18).string(t.reason),t.message!==void 0&&e.uint32(26).string(t.message),t.toolCallId!==void 0&&e.uint32(34).string(t.toolCallId),t.responseSchema!==void 0&&D.encode(D.wrap(t.responseSchema),e.uint32(42).fork()).join(),t.expiresAt!==void 0&&e.uint32(50).string(t.expiresAt),t.metadata!==void 0&&D.encode(D.wrap(t.metadata),e.uint32(58).fork()).join(),t.subagentRunId!==void 0&&e.uint32(66).string(t.subagentRunId),e},decode(t,e){let n=t instanceof R?t:new R(t),r=e===void 0?n.len:n.pos+e,o=uv();for(;n.pos<r;){let i=n.uint32();switch(i>>>3){case 1:if(i!==10)break;o.id=n.string();continue;case 2:if(i!==18)break;o.reason=n.string();continue;case 3:if(i!==26)break;o.message=n.string();continue;case 4:if(i!==34)break;o.toolCallId=n.string();continue;case 5:if(i!==42)break;o.responseSchema=D.unwrap(D.decode(n,n.uint32()));continue;case 6:if(i!==50)break;o.expiresAt=n.string();continue;case 7:if(i!==58)break;o.metadata=D.unwrap(D.decode(n,n.uint32()));continue;case 8:if(i!==66)break;o.subagentRunId=n.string();continue}if((i&7)===4||i===0)break;n.skip(i&7)}return o},create(t){return fa.fromPartial(t??{})},fromPartial(t){let e=uv();return e.id=t.id??"",e.reason=t.reason??"",e.message=t.message??void 0,e.toolCallId=t.toolCallId??void 0,e.responseSchema=t.responseSchema??void 0,e.expiresAt=t.expiresAt??void 0,e.metadata=t.metadata??void 0,e.subagentRunId=t.subagentRunId??void 0,e}},q0=(function(t){return t[t.TEXT_MESSAGE_START=0]="TEXT_MESSAGE_START",t[t.TEXT_MESSAGE_CONTENT=1]="TEXT_MESSAGE_CONTENT",t[t.TEXT_MESSAGE_END=2]="TEXT_MESSAGE_END",t[t.TOOL_CALL_START=3]="TOOL_CALL_START",t[t.TOOL_CALL_ARGS=4]="TOOL_CALL_ARGS",t[t.TOOL_CALL_END=5]="TOOL_CALL_END",t[t.STATE_SNAPSHOT=6]="STATE_SNAPSHOT",t[t.STATE_DELTA=7]="STATE_DELTA",t[t.MESSAGES_SNAPSHOT=8]="MESSAGES_SNAPSHOT",t[t.RAW=9]="RAW",t[t.CUSTOM=10]="CUSTOM",t[t.RUN_STARTED=11]="RUN_STARTED",t[t.RUN_FINISHED=12]="RUN_FINISHED",t[t.RUN_ERROR=13]="RUN_ERROR",t[t.STEP_STARTED=14]="STEP_STARTED",t[t.STEP_FINISHED=15]="STEP_FINISHED",t[t.SUBAGENT_STARTED=16]="SUBAGENT_STARTED",t[t.SUBAGENT_FINISHED=17]="SUBAGENT_FINISHED",t[t.SUBAGENT_ERROR=18]="SUBAGENT_ERROR",t[t.TEXT_MESSAGE_CHUNK=19]="TEXT_MESSAGE_CHUNK",t[t.TOOL_CALL_CHUNK=20]="TOOL_CALL_CHUNK",t[t.TOOL_CALL_RESULT=21]="TOOL_CALL_RESULT",t[t.ACTIVITY_SNAPSHOT=22]="ACTIVITY_SNAPSHOT",t[t.ACTIVITY_DELTA=23]="ACTIVITY_DELTA",t[t.REASONING_START=24]="REASONING_START",t[t.REASONING_MESSAGE_START=25]="REASONING_MESSAGE_START",t[t.REASONING_MESSAGE_CONTENT=26]="REASONING_MESSAGE_CONTENT",t[t.REASONING_MESSAGE_END=27]="REASONING_MESSAGE_END",t[t.REASONING_MESSAGE_CHUNK=28]="REASONING_MESSAGE_CHUNK",t[t.REASONING_END=29]="REASONING_END",t[t.REASONING_ENCRYPTED_VALUE=30]="REASONING_ENCRYPTED_VALUE",t[t.UNRECOGNIZED=-1]="UNRECOGNIZED",t})({});function dv(){return{type:0,timestamp:void 0,rawEvent:void 0,metadata:void 0}}var M={encode(t,e=new U){return t.type!==0&&e.uint32(8).int32(t.type),t.timestamp!==void 0&&e.uint32(16).int64(t.timestamp),t.rawEvent!==void 0&&D.encode(D.wrap(t.rawEvent),e.uint32(26).fork()).join(),t.metadata!==void 0&&oe.encode(oe.wrap(t.metadata),e.uint32(34).fork()).join(),e},decode(t,e){let n=t instanceof R?t:new R(t),r=e===void 0?n.len:n.pos+e,o=dv();for(;n.pos<r;){let i=n.uint32();switch(i>>>3){case 1:if(i!==8)break;o.type=n.int32();continue;case 2:if(i!==16)break;o.timestamp=yn(n.int64());continue;case 3:if(i!==26)break;o.rawEvent=D.unwrap(D.decode(n,n.uint32()));continue;case 4:if(i!==34)break;o.metadata=oe.unwrap(oe.decode(n,n.uint32()));continue}if((i&7)===4||i===0)break;n.skip(i&7)}return o},create(t){return M.fromPartial(t??{})},fromPartial(t){let e=dv();return e.type=t.type??0,e.timestamp=t.timestamp??void 0,e.rawEvent=t.rawEvent??void 0,e.metadata=t.metadata??void 0,e}};function pv(){return{baseEvent:void 0,messageId:"",role:void 0,name:void 0,subagentRunId:void 0}}var ma={encode(t,e=new U){return t.baseEvent!==void 0&&M.encode(t.baseEvent,e.uint32(10).fork()).join(),t.messageId!==""&&e.uint32(18).string(t.messageId),t.role!==void 0&&e.uint32(26).string(t.role),t.name!==void 0&&e.uint32(34).string(t.name),t.subagentRunId!==void 0&&e.uint32(42).string(t.subagentRunId),e},decode(t,e){let n=t instanceof R?t:new R(t),r=e===void 0?n.len:n.pos+e,o=pv();for(;n.pos<r;){let i=n.uint32();switch(i>>>3){case 1:if(i!==10)break;o.baseEvent=M.decode(n,n.uint32());continue;case 2:if(i!==18)break;o.messageId=n.string();continue;case 3:if(i!==26)break;o.role=n.string();continue;case 4:if(i!==34)break;o.name=n.string();continue;case 5:if(i!==42)break;o.subagentRunId=n.string();continue}if((i&7)===4||i===0)break;n.skip(i&7)}return o},create(t){return ma.fromPartial(t??{})},fromPartial(t){let e=pv();return e.baseEvent=t.baseEvent!==void 0&&t.baseEvent!==null?M.fromPartial(t.baseEvent):void 0,e.messageId=t.messageId??"",e.role=t.role??void 0,e.name=t.name??void 0,e.subagentRunId=t.subagentRunId??void 0,e}};function hv(){return{baseEvent:void 0,messageId:"",delta:"",subagentRunId:void 0}}var ga={encode(t,e=new U){return t.baseEvent!==void 0&&M.encode(t.baseEvent,e.uint32(10).fork()).join(),t.messageId!==""&&e.uint32(18).string(t.messageId),t.delta!==""&&e.uint32(26).string(t.delta),t.subagentRunId!==void 0&&e.uint32(34).string(t.subagentRunId),e},decode(t,e){let n=t instanceof R?t:new R(t),r=e===void 0?n.len:n.pos+e,o=hv();for(;n.pos<r;){let i=n.uint32();switch(i>>>3){case 1:if(i!==10)break;o.baseEvent=M.decode(n,n.uint32());continue;case 2:if(i!==18)break;o.messageId=n.string();continue;case 3:if(i!==26)break;o.delta=n.string();continue;case 4:if(i!==34)break;o.subagentRunId=n.string();continue}if((i&7)===4||i===0)break;n.skip(i&7)}return o},create(t){return ga.fromPartial(t??{})},fromPartial(t){let e=hv();return e.baseEvent=t.baseEvent!==void 0&&t.baseEvent!==null?M.fromPartial(t.baseEvent):void 0,e.messageId=t.messageId??"",e.delta=t.delta??"",e.subagentRunId=t.subagentRunId??void 0,e}};function fv(){return{baseEvent:void 0,messageId:"",subagentRunId:void 0}}var va={encode(t,e=new U){return t.baseEvent!==void 0&&M.encode(t.baseEvent,e.uint32(10).fork()).join(),t.messageId!==""&&e.uint32(18).string(t.messageId),t.subagentRunId!==void 0&&e.uint32(26).string(t.subagentRunId),e},decode(t,e){let n=t instanceof R?t:new R(t),r=e===void 0?n.len:n.pos+e,o=fv();for(;n.pos<r;){let i=n.uint32();switch(i>>>3){case 1:if(i!==10)break;o.baseEvent=M.decode(n,n.uint32());continue;case 2:if(i!==18)break;o.messageId=n.string();continue;case 3:if(i!==26)break;o.subagentRunId=n.string();continue}if((i&7)===4||i===0)break;n.skip(i&7)}return o},create(t){return va.fromPartial(t??{})},fromPartial(t){let e=fv();return e.baseEvent=t.baseEvent!==void 0&&t.baseEvent!==null?M.fromPartial(t.baseEvent):void 0,e.messageId=t.messageId??"",e.subagentRunId=t.subagentRunId??void 0,e}};function mv(){return{baseEvent:void 0,messageId:void 0,role:void 0,delta:void 0,name:void 0,subagentRunId:void 0}}var ba={encode(t,e=new U){return t.baseEvent!==void 0&&M.encode(t.baseEvent,e.uint32(10).fork()).join(),t.messageId!==void 0&&e.uint32(18).string(t.messageId),t.role!==void 0&&e.uint32(26).string(t.role),t.delta!==void 0&&e.uint32(34).string(t.delta),t.name!==void 0&&e.uint32(42).string(t.name),t.subagentRunId!==void 0&&e.uint32(50).string(t.subagentRunId),e},decode(t,e){let n=t instanceof R?t:new R(t),r=e===void 0?n.len:n.pos+e,o=mv();for(;n.pos<r;){let i=n.uint32();switch(i>>>3){case 1:if(i!==10)break;o.baseEvent=M.decode(n,n.uint32());continue;case 2:if(i!==18)break;o.messageId=n.string();continue;case 3:if(i!==26)break;o.role=n.string();continue;case 4:if(i!==34)break;o.delta=n.string();continue;case 5:if(i!==42)break;o.name=n.string();continue;case 6:if(i!==50)break;o.subagentRunId=n.string();continue}if((i&7)===4||i===0)break;n.skip(i&7)}return o},create(t){return ba.fromPartial(t??{})},fromPartial(t){let e=mv();return e.baseEvent=t.baseEvent!==void 0&&t.baseEvent!==null?M.fromPartial(t.baseEvent):void 0,e.messageId=t.messageId??void 0,e.role=t.role??void 0,e.delta=t.delta??void 0,e.name=t.name??void 0,e.subagentRunId=t.subagentRunId??void 0,e}};function gv(){return{baseEvent:void 0,toolCallId:"",toolCallName:"",parentMessageId:void 0,subagentRunId:void 0}}var ya={encode(t,e=new U){return t.baseEvent!==void 0&&M.encode(t.baseEvent,e.uint32(10).fork()).join(),t.toolCallId!==""&&e.uint32(18).string(t.toolCallId),t.toolCallName!==""&&e.uint32(26).string(t.toolCallName),t.parentMessageId!==void 0&&e.uint32(34).string(t.parentMessageId),t.subagentRunId!==void 0&&e.uint32(42).string(t.subagentRunId),e},decode(t,e){let n=t instanceof R?t:new R(t),r=e===void 0?n.len:n.pos+e,o=gv();for(;n.pos<r;){let i=n.uint32();switch(i>>>3){case 1:if(i!==10)break;o.baseEvent=M.decode(n,n.uint32());continue;case 2:if(i!==18)break;o.toolCallId=n.string();continue;case 3:if(i!==26)break;o.toolCallName=n.string();continue;case 4:if(i!==34)break;o.parentMessageId=n.string();continue;case 5:if(i!==42)break;o.subagentRunId=n.string();continue}if((i&7)===4||i===0)break;n.skip(i&7)}return o},create(t){return ya.fromPartial(t??{})},fromPartial(t){let e=gv();return e.baseEvent=t.baseEvent!==void 0&&t.baseEvent!==null?M.fromPartial(t.baseEvent):void 0,e.toolCallId=t.toolCallId??"",e.toolCallName=t.toolCallName??"",e.parentMessageId=t.parentMessageId??void 0,e.subagentRunId=t.subagentRunId??void 0,e}};function vv(){return{baseEvent:void 0,toolCallId:"",delta:"",subagentRunId:void 0}}var wa={encode(t,e=new U){return t.baseEvent!==void 0&&M.encode(t.baseEvent,e.uint32(10).fork()).join(),t.toolCallId!==""&&e.uint32(18).string(t.toolCallId),t.delta!==""&&e.uint32(26).string(t.delta),t.subagentRunId!==void 0&&e.uint32(34).string(t.subagentRunId),e},decode(t,e){let n=t instanceof R?t:new R(t),r=e===void 0?n.len:n.pos+e,o=vv();for(;n.pos<r;){let i=n.uint32();switch(i>>>3){case 1:if(i!==10)break;o.baseEvent=M.decode(n,n.uint32());continue;case 2:if(i!==18)break;o.toolCallId=n.string();continue;case 3:if(i!==26)break;o.delta=n.string();continue;case 4:if(i!==34)break;o.subagentRunId=n.string();continue}if((i&7)===4||i===0)break;n.skip(i&7)}return o},create(t){return wa.fromPartial(t??{})},fromPartial(t){let e=vv();return e.baseEvent=t.baseEvent!==void 0&&t.baseEvent!==null?M.fromPartial(t.baseEvent):void 0,e.toolCallId=t.toolCallId??"",e.delta=t.delta??"",e.subagentRunId=t.subagentRunId??void 0,e}};function bv(){return{baseEvent:void 0,toolCallId:"",subagentRunId:void 0}}var Ea={encode(t,e=new U){return t.baseEvent!==void 0&&M.encode(t.baseEvent,e.uint32(10).fork()).join(),t.toolCallId!==""&&e.uint32(18).string(t.toolCallId),t.subagentRunId!==void 0&&e.uint32(26).string(t.subagentRunId),e},decode(t,e){let n=t instanceof R?t:new R(t),r=e===void 0?n.len:n.pos+e,o=bv();for(;n.pos<r;){let i=n.uint32();switch(i>>>3){case 1:if(i!==10)break;o.baseEvent=M.decode(n,n.uint32());continue;case 2:if(i!==18)break;o.toolCallId=n.string();continue;case 3:if(i!==26)break;o.subagentRunId=n.string();continue}if((i&7)===4||i===0)break;n.skip(i&7)}return o},create(t){return Ea.fromPartial(t??{})},fromPartial(t){let e=bv();return e.baseEvent=t.baseEvent!==void 0&&t.baseEvent!==null?M.fromPartial(t.baseEvent):void 0,e.toolCallId=t.toolCallId??"",e.subagentRunId=t.subagentRunId??void 0,e}};function yv(){return{baseEvent:void 0,toolCallId:void 0,toolCallName:void 0,parentMessageId:void 0,delta:void 0,subagentRunId:void 0}}var xa={encode(t,e=new U){return t.baseEvent!==void 0&&M.encode(t.baseEvent,e.uint32(10).fork()).join(),t.toolCallId!==void 0&&e.uint32(18).string(t.toolCallId),t.toolCallName!==void 0&&e.uint32(26).string(t.toolCallName),t.parentMessageId!==void 0&&e.uint32(34).string(t.parentMessageId),t.delta!==void 0&&e.uint32(42).string(t.delta),t.subagentRunId!==void 0&&e.uint32(50).string(t.subagentRunId),e},decode(t,e){let n=t instanceof R?t:new R(t),r=e===void 0?n.len:n.pos+e,o=yv();for(;n.pos<r;){let i=n.uint32();switch(i>>>3){case 1:if(i!==10)break;o.baseEvent=M.decode(n,n.uint32());continue;case 2:if(i!==18)break;o.toolCallId=n.string();continue;case 3:if(i!==26)break;o.toolCallName=n.string();continue;case 4:if(i!==34)break;o.parentMessageId=n.string();continue;case 5:if(i!==42)break;o.delta=n.string();continue;case 6:if(i!==50)break;o.subagentRunId=n.string();continue}if((i&7)===4||i===0)break;n.skip(i&7)}return o},create(t){return xa.fromPartial(t??{})},fromPartial(t){let e=yv();return e.baseEvent=t.baseEvent!==void 0&&t.baseEvent!==null?M.fromPartial(t.baseEvent):void 0,e.toolCallId=t.toolCallId??void 0,e.toolCallName=t.toolCallName??void 0,e.parentMessageId=t.parentMessageId??void 0,e.delta=t.delta??void 0,e.subagentRunId=t.subagentRunId??void 0,e}};function wv(){return{baseEvent:void 0,subagentRunId:void 0,messageId:"",toolCallId:"",content:void 0,role:void 0,contentParts:[]}}var _a={encode(t,e=new U){t.baseEvent!==void 0&&M.encode(t.baseEvent,e.uint32(10).fork()).join(),t.subagentRunId!==void 0&&e.uint32(18).string(t.subagentRunId),t.messageId!==""&&e.uint32(26).string(t.messageId),t.toolCallId!==""&&e.uint32(34).string(t.toolCallId),t.content!==void 0&&e.uint32(42).string(t.content),t.role!==void 0&&e.uint32(50).string(t.role);for(let n of t.contentParts)xn.encode(n,e.uint32(58).fork()).join();return e},decode(t,e){let n=t instanceof R?t:new R(t),r=e===void 0?n.len:n.pos+e,o=wv();for(;n.pos<r;){let i=n.uint32();switch(i>>>3){case 1:if(i!==10)break;o.baseEvent=M.decode(n,n.uint32());continue;case 2:if(i!==18)break;o.subagentRunId=n.string();continue;case 3:if(i!==26)break;o.messageId=n.string();continue;case 4:if(i!==34)break;o.toolCallId=n.string();continue;case 5:if(i!==42)break;o.content=n.string();continue;case 6:if(i!==50)break;o.role=n.string();continue;case 7:if(i!==58)break;o.contentParts.push(xn.decode(n,n.uint32()));continue}if((i&7)===4||i===0)break;n.skip(i&7)}return o},create(t){return _a.fromPartial(t??{})},fromPartial(t){let e=wv();return e.baseEvent=t.baseEvent!==void 0&&t.baseEvent!==null?M.fromPartial(t.baseEvent):void 0,e.subagentRunId=t.subagentRunId??void 0,e.messageId=t.messageId??"",e.toolCallId=t.toolCallId??"",e.content=t.content??void 0,e.role=t.role??void 0,e.contentParts=t.contentParts?.map(n=>xn.fromPartial(n))||[],e}};function Ev(){return{baseEvent:void 0,snapshot:void 0,subagentRunId:void 0}}var Sa={encode(t,e=new U){return t.baseEvent!==void 0&&M.encode(t.baseEvent,e.uint32(10).fork()).join(),t.snapshot!==void 0&&D.encode(D.wrap(t.snapshot),e.uint32(18).fork()).join(),t.subagentRunId!==void 0&&e.uint32(26).string(t.subagentRunId),e},decode(t,e){let n=t instanceof R?t:new R(t),r=e===void 0?n.len:n.pos+e,o=Ev();for(;n.pos<r;){let i=n.uint32();switch(i>>>3){case 1:if(i!==10)break;o.baseEvent=M.decode(n,n.uint32());continue;case 2:if(i!==18)break;o.snapshot=D.unwrap(D.decode(n,n.uint32()));continue;case 3:if(i!==26)break;o.subagentRunId=n.string();continue}if((i&7)===4||i===0)break;n.skip(i&7)}return o},create(t){return Sa.fromPartial(t??{})},fromPartial(t){let e=Ev();return e.baseEvent=t.baseEvent!==void 0&&t.baseEvent!==null?M.fromPartial(t.baseEvent):void 0,e.snapshot=t.snapshot??void 0,e.subagentRunId=t.subagentRunId??void 0,e}};function xv(){return{baseEvent:void 0,delta:[],subagentRunId:void 0}}var Ta={encode(t,e=new U){t.baseEvent!==void 0&&M.encode(t.baseEvent,e.uint32(10).fork()).join();for(let n of t.delta)En.encode(n,e.uint32(18).fork()).join();return t.subagentRunId!==void 0&&e.uint32(26).string(t.subagentRunId),e},decode(t,e){let n=t instanceof R?t:new R(t),r=e===void 0?n.len:n.pos+e,o=xv();for(;n.pos<r;){let i=n.uint32();switch(i>>>3){case 1:if(i!==10)break;o.baseEvent=M.decode(n,n.uint32());continue;case 2:if(i!==18)break;o.delta.push(En.decode(n,n.uint32()));continue;case 3:if(i!==26)break;o.subagentRunId=n.string();continue}if((i&7)===4||i===0)break;n.skip(i&7)}return o},create(t){return Ta.fromPartial(t??{})},fromPartial(t){let e=xv();return e.baseEvent=t.baseEvent!==void 0&&t.baseEvent!==null?M.fromPartial(t.baseEvent):void 0,e.delta=t.delta?.map(n=>En.fromPartial(n))||[],e.subagentRunId=t.subagentRunId??void 0,e}};function _v(){return{baseEvent:void 0,messages:[]}}var Aa={encode(t,e=new U){t.baseEvent!==void 0&&M.encode(t.baseEvent,e.uint32(10).fork()).join();for(let n of t.messages)_n.encode(n,e.uint32(18).fork()).join();return e},decode(t,e){let n=t instanceof R?t:new R(t),r=e===void 0?n.len:n.pos+e,o=_v();for(;n.pos<r;){let i=n.uint32();switch(i>>>3){case 1:if(i!==10)break;o.baseEvent=M.decode(n,n.uint32());continue;case 2:if(i!==18)break;o.messages.push(_n.decode(n,n.uint32()));continue}if((i&7)===4||i===0)break;n.skip(i&7)}return o},create(t){return Aa.fromPartial(t??{})},fromPartial(t){let e=_v();return e.baseEvent=t.baseEvent!==void 0&&t.baseEvent!==null?M.fromPartial(t.baseEvent):void 0,e.messages=t.messages?.map(n=>_n.fromPartial(n))||[],e}};function Sv(){return{baseEvent:void 0,subagentRunId:void 0,messageId:"",activityType:"",content:void 0,replace:void 0}}var ka={encode(t,e=new U){return t.baseEvent!==void 0&&M.encode(t.baseEvent,e.uint32(10).fork()).join(),t.subagentRunId!==void 0&&e.uint32(18).string(t.subagentRunId),t.messageId!==""&&e.uint32(26).string(t.messageId),t.activityType!==""&&e.uint32(34).string(t.activityType),t.content!==void 0&&oe.encode(oe.wrap(t.content),e.uint32(42).fork()).join(),t.replace!==void 0&&e.uint32(48).bool(t.replace),e},decode(t,e){let n=t instanceof R?t:new R(t),r=e===void 0?n.len:n.pos+e,o=Sv();for(;n.pos<r;){let i=n.uint32();switch(i>>>3){case 1:if(i!==10)break;o.baseEvent=M.decode(n,n.uint32());continue;case 2:if(i!==18)break;o.subagentRunId=n.string();continue;case 3:if(i!==26)break;o.messageId=n.string();continue;case 4:if(i!==34)break;o.activityType=n.string();continue;case 5:if(i!==42)break;o.content=oe.unwrap(oe.decode(n,n.uint32()));continue;case 6:if(i!==48)break;o.replace=n.bool();continue}if((i&7)===4||i===0)break;n.skip(i&7)}return o},create(t){return ka.fromPartial(t??{})},fromPartial(t){let e=Sv();return e.baseEvent=t.baseEvent!==void 0&&t.baseEvent!==null?M.fromPartial(t.baseEvent):void 0,e.subagentRunId=t.subagentRunId??void 0,e.messageId=t.messageId??"",e.activityType=t.activityType??"",e.content=t.content??void 0,e.replace=t.replace??void 0,e}};function Tv(){return{baseEvent:void 0,subagentRunId:void 0,messageId:"",activityType:"",patch:[]}}var Ia={encode(t,e=new U){t.baseEvent!==void 0&&M.encode(t.baseEvent,e.uint32(10).fork()).join(),t.subagentRunId!==void 0&&e.uint32(18).string(t.subagentRunId),t.messageId!==""&&e.uint32(26).string(t.messageId),t.activityType!==""&&e.uint32(34).string(t.activityType);for(let n of t.patch)En.encode(n,e.uint32(42).fork()).join();return e},decode(t,e){let n=t instanceof R?t:new R(t),r=e===void 0?n.len:n.pos+e,o=Tv();for(;n.pos<r;){let i=n.uint32();switch(i>>>3){case 1:if(i!==10)break;o.baseEvent=M.decode(n,n.uint32());continue;case 2:if(i!==18)break;o.subagentRunId=n.string();continue;case 3:if(i!==26)break;o.messageId=n.string();continue;case 4:if(i!==34)break;o.activityType=n.string();continue;case 5:if(i!==42)break;o.patch.push(En.decode(n,n.uint32()));continue}if((i&7)===4||i===0)break;n.skip(i&7)}return o},create(t){return Ia.fromPartial(t??{})},fromPartial(t){let e=Tv();return e.baseEvent=t.baseEvent!==void 0&&t.baseEvent!==null?M.fromPartial(t.baseEvent):void 0,e.subagentRunId=t.subagentRunId??void 0,e.messageId=t.messageId??"",e.activityType=t.activityType??"",e.patch=t.patch?.map(n=>En.fromPartial(n))||[],e}};function Av(){return{baseEvent:void 0,event:void 0,source:void 0,subagentRunId:void 0}}var Ra={encode(t,e=new U){return t.baseEvent!==void 0&&M.encode(t.baseEvent,e.uint32(10).fork()).join(),t.event!==void 0&&D.encode(D.wrap(t.event),e.uint32(18).fork()).join(),t.source!==void 0&&e.uint32(26).string(t.source),t.subagentRunId!==void 0&&e.uint32(34).string(t.subagentRunId),e},decode(t,e){let n=t instanceof R?t:new R(t),r=e===void 0?n.len:n.pos+e,o=Av();for(;n.pos<r;){let i=n.uint32();switch(i>>>3){case 1:if(i!==10)break;o.baseEvent=M.decode(n,n.uint32());continue;case 2:if(i!==18)break;o.event=D.unwrap(D.decode(n,n.uint32()));continue;case 3:if(i!==26)break;o.source=n.string();continue;case 4:if(i!==34)break;o.subagentRunId=n.string();continue}if((i&7)===4||i===0)break;n.skip(i&7)}return o},create(t){return Ra.fromPartial(t??{})},fromPartial(t){let e=Av();return e.baseEvent=t.baseEvent!==void 0&&t.baseEvent!==null?M.fromPartial(t.baseEvent):void 0,e.event=t.event??void 0,e.source=t.source??void 0,e.subagentRunId=t.subagentRunId??void 0,e}};function kv(){return{baseEvent:void 0,name:"",value:void 0,subagentRunId:void 0}}var Ca={encode(t,e=new U){return t.baseEvent!==void 0&&M.encode(t.baseEvent,e.uint32(10).fork()).join(),t.name!==""&&e.uint32(18).string(t.name),t.value!==void 0&&D.encode(D.wrap(t.value),e.uint32(26).fork()).join(),t.subagentRunId!==void 0&&e.uint32(34).string(t.subagentRunId),e},decode(t,e){let n=t instanceof R?t:new R(t),r=e===void 0?n.len:n.pos+e,o=kv();for(;n.pos<r;){let i=n.uint32();switch(i>>>3){case 1:if(i!==10)break;o.baseEvent=M.decode(n,n.uint32());continue;case 2:if(i!==18)break;o.name=n.string();continue;case 3:if(i!==26)break;o.value=D.unwrap(D.decode(n,n.uint32()));continue;case 4:if(i!==34)break;o.subagentRunId=n.string();continue}if((i&7)===4||i===0)break;n.skip(i&7)}return o},create(t){return Ca.fromPartial(t??{})},fromPartial(t){let e=kv();return e.baseEvent=t.baseEvent!==void 0&&t.baseEvent!==null?M.fromPartial(t.baseEvent):void 0,e.name=t.name??"",e.value=t.value??void 0,e.subagentRunId=t.subagentRunId??void 0,e}};function Iv(){return{baseEvent:void 0,threadId:"",runId:"",parentRunId:void 0,input:void 0,protocolVersion:void 0}}var Na={encode(t,e=new U){return t.baseEvent!==void 0&&M.encode(t.baseEvent,e.uint32(10).fork()).join(),t.threadId!==""&&e.uint32(18).string(t.threadId),t.runId!==""&&e.uint32(26).string(t.runId),t.parentRunId!==void 0&&e.uint32(34).string(t.parentRunId),t.input!==void 0&&ha.encode(t.input,e.uint32(42).fork()).join(),t.protocolVersion!==void 0&&e.uint32(50).string(t.protocolVersion),e},decode(t,e){let n=t instanceof R?t:new R(t),r=e===void 0?n.len:n.pos+e,o=Iv();for(;n.pos<r;){let i=n.uint32();switch(i>>>3){case 1:if(i!==10)break;o.baseEvent=M.decode(n,n.uint32());continue;case 2:if(i!==18)break;o.threadId=n.string();continue;case 3:if(i!==26)break;o.runId=n.string();continue;case 4:if(i!==34)break;o.parentRunId=n.string();continue;case 5:if(i!==42)break;o.input=ha.decode(n,n.uint32());continue;case 6:if(i!==50)break;o.protocolVersion=n.string();continue}if((i&7)===4||i===0)break;n.skip(i&7)}return o},create(t){return Na.fromPartial(t??{})},fromPartial(t){let e=Iv();return e.baseEvent=t.baseEvent!==void 0&&t.baseEvent!==null?M.fromPartial(t.baseEvent):void 0,e.threadId=t.threadId??"",e.runId=t.runId??"",e.parentRunId=t.parentRunId??void 0,e.input=t.input!==void 0&&t.input!==null?ha.fromPartial(t.input):void 0,e.protocolVersion=t.protocolVersion??void 0,e}};function Rv(){return{baseEvent:void 0,threadId:"",runId:"",result:void 0,outcome:"",interrupts:[],usage:[],pendingToolCallIds:[]}}var Oa={encode(t,e=new U){t.baseEvent!==void 0&&M.encode(t.baseEvent,e.uint32(10).fork()).join(),t.threadId!==""&&e.uint32(18).string(t.threadId),t.runId!==""&&e.uint32(26).string(t.runId),t.result!==void 0&&D.encode(D.wrap(t.result),e.uint32(34).fork()).join(),t.outcome!==""&&e.uint32(42).string(t.outcome);for(let n of t.interrupts)fa.encode(n,e.uint32(50).fork()).join();for(let n of t.usage)Sn.encode(n,e.uint32(58).fork()).join();for(let n of t.pendingToolCallIds)e.uint32(66).string(n);return e},decode(t,e){let n=t instanceof R?t:new R(t),r=e===void 0?n.len:n.pos+e,o=Rv();for(;n.pos<r;){let i=n.uint32();switch(i>>>3){case 1:if(i!==10)break;o.baseEvent=M.decode(n,n.uint32());continue;case 2:if(i!==18)break;o.threadId=n.string();continue;case 3:if(i!==26)break;o.runId=n.string();continue;case 4:if(i!==34)break;o.result=D.unwrap(D.decode(n,n.uint32()));continue;case 5:if(i!==42)break;o.outcome=n.string();continue;case 6:if(i!==50)break;o.interrupts.push(fa.decode(n,n.uint32()));continue;case 7:if(i!==58)break;o.usage.push(Sn.decode(n,n.uint32()));continue;case 8:if(i!==66)break;o.pendingToolCallIds.push(n.string());continue}if((i&7)===4||i===0)break;n.skip(i&7)}return o},create(t){return Oa.fromPartial(t??{})},fromPartial(t){let e=Rv();return e.baseEvent=t.baseEvent!==void 0&&t.baseEvent!==null?M.fromPartial(t.baseEvent):void 0,e.threadId=t.threadId??"",e.runId=t.runId??"",e.result=t.result??void 0,e.outcome=t.outcome??"",e.interrupts=t.interrupts?.map(n=>fa.fromPartial(n))||[],e.usage=t.usage?.map(n=>Sn.fromPartial(n))||[],e.pendingToolCallIds=t.pendingToolCallIds?.map(n=>n)||[],e}};function Cv(){return{baseEvent:void 0,code:void 0,message:"",usage:[]}}var Pa={encode(t,e=new U){t.baseEvent!==void 0&&M.encode(t.baseEvent,e.uint32(10).fork()).join(),t.code!==void 0&&e.uint32(18).string(t.code),t.message!==""&&e.uint32(26).string(t.message);for(let n of t.usage)Sn.encode(n,e.uint32(34).fork()).join();return e},decode(t,e){let n=t instanceof R?t:new R(t),r=e===void 0?n.len:n.pos+e,o=Cv();for(;n.pos<r;){let i=n.uint32();switch(i>>>3){case 1:if(i!==10)break;o.baseEvent=M.decode(n,n.uint32());continue;case 2:if(i!==18)break;o.code=n.string();continue;case 3:if(i!==26)break;o.message=n.string();continue;case 4:if(i!==34)break;o.usage.push(Sn.decode(n,n.uint32()));continue}if((i&7)===4||i===0)break;n.skip(i&7)}return o},create(t){return Pa.fromPartial(t??{})},fromPartial(t){let e=Cv();return e.baseEvent=t.baseEvent!==void 0&&t.baseEvent!==null?M.fromPartial(t.baseEvent):void 0,e.code=t.code??void 0,e.message=t.message??"",e.usage=t.usage?.map(n=>Sn.fromPartial(n))||[],e}};function Nv(){return{baseEvent:void 0,stepName:"",subagentRunId:void 0}}var Ma={encode(t,e=new U){return t.baseEvent!==void 0&&M.encode(t.baseEvent,e.uint32(10).fork()).join(),t.stepName!==""&&e.uint32(18).string(t.stepName),t.subagentRunId!==void 0&&e.uint32(26).string(t.subagentRunId),e},decode(t,e){let n=t instanceof R?t:new R(t),r=e===void 0?n.len:n.pos+e,o=Nv();for(;n.pos<r;){let i=n.uint32();switch(i>>>3){case 1:if(i!==10)break;o.baseEvent=M.decode(n,n.uint32());continue;case 2:if(i!==18)break;o.stepName=n.string();continue;case 3:if(i!==26)break;o.subagentRunId=n.string();continue}if((i&7)===4||i===0)break;n.skip(i&7)}return o},create(t){return Ma.fromPartial(t??{})},fromPartial(t){let e=Nv();return e.baseEvent=t.baseEvent!==void 0&&t.baseEvent!==null?M.fromPartial(t.baseEvent):void 0,e.stepName=t.stepName??"",e.subagentRunId=t.subagentRunId??void 0,e}};function Ov(){return{baseEvent:void 0,stepName:"",subagentRunId:void 0}}var La={encode(t,e=new U){return t.baseEvent!==void 0&&M.encode(t.baseEvent,e.uint32(10).fork()).join(),t.stepName!==""&&e.uint32(18).string(t.stepName),t.subagentRunId!==void 0&&e.uint32(26).string(t.subagentRunId),e},decode(t,e){let n=t instanceof R?t:new R(t),r=e===void 0?n.len:n.pos+e,o=Ov();for(;n.pos<r;){let i=n.uint32();switch(i>>>3){case 1:if(i!==10)break;o.baseEvent=M.decode(n,n.uint32());continue;case 2:if(i!==18)break;o.stepName=n.string();continue;case 3:if(i!==26)break;o.subagentRunId=n.string();continue}if((i&7)===4||i===0)break;n.skip(i&7)}return o},create(t){return La.fromPartial(t??{})},fromPartial(t){let e=Ov();return e.baseEvent=t.baseEvent!==void 0&&t.baseEvent!==null?M.fromPartial(t.baseEvent):void 0,e.stepName=t.stepName??"",e.subagentRunId=t.subagentRunId??void 0,e}};function Pv(){return{baseEvent:void 0,subagentRunId:void 0,messageId:""}}var za={encode(t,e=new U){return t.baseEvent!==void 0&&M.encode(t.baseEvent,e.uint32(10).fork()).join(),t.subagentRunId!==void 0&&e.uint32(18).string(t.subagentRunId),t.messageId!==""&&e.uint32(26).string(t.messageId),e},decode(t,e){let n=t instanceof R?t:new R(t),r=e===void 0?n.len:n.pos+e,o=Pv();for(;n.pos<r;){let i=n.uint32();switch(i>>>3){case 1:if(i!==10)break;o.baseEvent=M.decode(n,n.uint32());continue;case 2:if(i!==18)break;o.subagentRunId=n.string();continue;case 3:if(i!==26)break;o.messageId=n.string();continue}if((i&7)===4||i===0)break;n.skip(i&7)}return o},create(t){return za.fromPartial(t??{})},fromPartial(t){let e=Pv();return e.baseEvent=t.baseEvent!==void 0&&t.baseEvent!==null?M.fromPartial(t.baseEvent):void 0,e.subagentRunId=t.subagentRunId??void 0,e.messageId=t.messageId??"",e}};function Mv(){return{baseEvent:void 0,subagentRunId:void 0,messageId:"",role:""}}var Da={encode(t,e=new U){return t.baseEvent!==void 0&&M.encode(t.baseEvent,e.uint32(10).fork()).join(),t.subagentRunId!==void 0&&e.uint32(18).string(t.subagentRunId),t.messageId!==""&&e.uint32(26).string(t.messageId),t.role!==""&&e.uint32(34).string(t.role),e},decode(t,e){let n=t instanceof R?t:new R(t),r=e===void 0?n.len:n.pos+e,o=Mv();for(;n.pos<r;){let i=n.uint32();switch(i>>>3){case 1:if(i!==10)break;o.baseEvent=M.decode(n,n.uint32());continue;case 2:if(i!==18)break;o.subagentRunId=n.string();continue;case 3:if(i!==26)break;o.messageId=n.string();continue;case 4:if(i!==34)break;o.role=n.string();continue}if((i&7)===4||i===0)break;n.skip(i&7)}return o},create(t){return Da.fromPartial(t??{})},fromPartial(t){let e=Mv();return e.baseEvent=t.baseEvent!==void 0&&t.baseEvent!==null?M.fromPartial(t.baseEvent):void 0,e.subagentRunId=t.subagentRunId??void 0,e.messageId=t.messageId??"",e.role=t.role??"",e}};function Lv(){return{baseEvent:void 0,subagentRunId:void 0,messageId:"",delta:""}}var $a={encode(t,e=new U){return t.baseEvent!==void 0&&M.encode(t.baseEvent,e.uint32(10).fork()).join(),t.subagentRunId!==void 0&&e.uint32(18).string(t.subagentRunId),t.messageId!==""&&e.uint32(26).string(t.messageId),t.delta!==""&&e.uint32(34).string(t.delta),e},decode(t,e){let n=t instanceof R?t:new R(t),r=e===void 0?n.len:n.pos+e,o=Lv();for(;n.pos<r;){let i=n.uint32();switch(i>>>3){case 1:if(i!==10)break;o.baseEvent=M.decode(n,n.uint32());continue;case 2:if(i!==18)break;o.subagentRunId=n.string();continue;case 3:if(i!==26)break;o.messageId=n.string();continue;case 4:if(i!==34)break;o.delta=n.string();continue}if((i&7)===4||i===0)break;n.skip(i&7)}return o},create(t){return $a.fromPartial(t??{})},fromPartial(t){let e=Lv();return e.baseEvent=t.baseEvent!==void 0&&t.baseEvent!==null?M.fromPartial(t.baseEvent):void 0,e.subagentRunId=t.subagentRunId??void 0,e.messageId=t.messageId??"",e.delta=t.delta??"",e}};function zv(){return{baseEvent:void 0,subagentRunId:void 0,messageId:""}}var Ua={encode(t,e=new U){return t.baseEvent!==void 0&&M.encode(t.baseEvent,e.uint32(10).fork()).join(),t.subagentRunId!==void 0&&e.uint32(18).string(t.subagentRunId),t.messageId!==""&&e.uint32(26).string(t.messageId),e},decode(t,e){let n=t instanceof R?t:new R(t),r=e===void 0?n.len:n.pos+e,o=zv();for(;n.pos<r;){let i=n.uint32();switch(i>>>3){case 1:if(i!==10)break;o.baseEvent=M.decode(n,n.uint32());continue;case 2:if(i!==18)break;o.subagentRunId=n.string();continue;case 3:if(i!==26)break;o.messageId=n.string();continue}if((i&7)===4||i===0)break;n.skip(i&7)}return o},create(t){return Ua.fromPartial(t??{})},fromPartial(t){let e=zv();return e.baseEvent=t.baseEvent!==void 0&&t.baseEvent!==null?M.fromPartial(t.baseEvent):void 0,e.subagentRunId=t.subagentRunId??void 0,e.messageId=t.messageId??"",e}};function Dv(){return{baseEvent:void 0,subagentRunId:void 0,messageId:void 0,delta:void 0}}var Ha={encode(t,e=new U){return t.baseEvent!==void 0&&M.encode(t.baseEvent,e.uint32(10).fork()).join(),t.subagentRunId!==void 0&&e.uint32(18).string(t.subagentRunId),t.messageId!==void 0&&e.uint32(26).string(t.messageId),t.delta!==void 0&&e.uint32(34).string(t.delta),e},decode(t,e){let n=t instanceof R?t:new R(t),r=e===void 0?n.len:n.pos+e,o=Dv();for(;n.pos<r;){let i=n.uint32();switch(i>>>3){case 1:if(i!==10)break;o.baseEvent=M.decode(n,n.uint32());continue;case 2:if(i!==18)break;o.subagentRunId=n.string();continue;case 3:if(i!==26)break;o.messageId=n.string();continue;case 4:if(i!==34)break;o.delta=n.string();continue}if((i&7)===4||i===0)break;n.skip(i&7)}return o},create(t){return Ha.fromPartial(t??{})},fromPartial(t){let e=Dv();return e.baseEvent=t.baseEvent!==void 0&&t.baseEvent!==null?M.fromPartial(t.baseEvent):void 0,e.subagentRunId=t.subagentRunId??void 0,e.messageId=t.messageId??void 0,e.delta=t.delta??void 0,e}};function $v(){return{baseEvent:void 0,subagentRunId:void 0,messageId:""}}var Fa={encode(t,e=new U){return t.baseEvent!==void 0&&M.encode(t.baseEvent,e.uint32(10).fork()).join(),t.subagentRunId!==void 0&&e.uint32(18).string(t.subagentRunId),t.messageId!==""&&e.uint32(26).string(t.messageId),e},decode(t,e){let n=t instanceof R?t:new R(t),r=e===void 0?n.len:n.pos+e,o=$v();for(;n.pos<r;){let i=n.uint32();switch(i>>>3){case 1:if(i!==10)break;o.baseEvent=M.decode(n,n.uint32());continue;case 2:if(i!==18)break;o.subagentRunId=n.string();continue;case 3:if(i!==26)break;o.messageId=n.string();continue}if((i&7)===4||i===0)break;n.skip(i&7)}return o},create(t){return Fa.fromPartial(t??{})},fromPartial(t){let e=$v();return e.baseEvent=t.baseEvent!==void 0&&t.baseEvent!==null?M.fromPartial(t.baseEvent):void 0,e.subagentRunId=t.subagentRunId??void 0,e.messageId=t.messageId??"",e}};function Uv(){return{baseEvent:void 0,subagentRunId:void 0,subtype:"",entityId:"",encryptedValue:""}}var Ga={encode(t,e=new U){return t.baseEvent!==void 0&&M.encode(t.baseEvent,e.uint32(10).fork()).join(),t.subagentRunId!==void 0&&e.uint32(18).string(t.subagentRunId),t.subtype!==""&&e.uint32(26).string(t.subtype),t.entityId!==""&&e.uint32(34).string(t.entityId),t.encryptedValue!==""&&e.uint32(42).string(t.encryptedValue),e},decode(t,e){let n=t instanceof R?t:new R(t),r=e===void 0?n.len:n.pos+e,o=Uv();for(;n.pos<r;){let i=n.uint32();switch(i>>>3){case 1:if(i!==10)break;o.baseEvent=M.decode(n,n.uint32());continue;case 2:if(i!==18)break;o.subagentRunId=n.string();continue;case 3:if(i!==26)break;o.subtype=n.string();continue;case 4:if(i!==34)break;o.entityId=n.string();continue;case 5:if(i!==42)break;o.encryptedValue=n.string();continue}if((i&7)===4||i===0)break;n.skip(i&7)}return o},create(t){return Ga.fromPartial(t??{})},fromPartial(t){let e=Uv();return e.baseEvent=t.baseEvent!==void 0&&t.baseEvent!==null?M.fromPartial(t.baseEvent):void 0,e.subagentRunId=t.subagentRunId??void 0,e.subtype=t.subtype??"",e.entityId=t.entityId??"",e.encryptedValue=t.encryptedValue??"",e}};function Hv(){return{baseEvent:void 0,subagentRunId:"",name:"",description:void 0,parentSubagentRunId:void 0,parentToolCallId:void 0,parentMessageId:void 0}}var Ba={encode(t,e=new U){return t.baseEvent!==void 0&&M.encode(t.baseEvent,e.uint32(10).fork()).join(),t.subagentRunId!==""&&e.uint32(18).string(t.subagentRunId),t.name!==""&&e.uint32(26).string(t.name),t.description!==void 0&&e.uint32(34).string(t.description),t.parentSubagentRunId!==void 0&&e.uint32(42).string(t.parentSubagentRunId),t.parentToolCallId!==void 0&&e.uint32(50).string(t.parentToolCallId),t.parentMessageId!==void 0&&e.uint32(58).string(t.parentMessageId),e},decode(t,e){let n=t instanceof R?t:new R(t),r=e===void 0?n.len:n.pos+e,o=Hv();for(;n.pos<r;){let i=n.uint32();switch(i>>>3){case 1:if(i!==10)break;o.baseEvent=M.decode(n,n.uint32());continue;case 2:if(i!==18)break;o.subagentRunId=n.string();continue;case 3:if(i!==26)break;o.name=n.string();continue;case 4:if(i!==34)break;o.description=n.string();continue;case 5:if(i!==42)break;o.parentSubagentRunId=n.string();continue;case 6:if(i!==50)break;o.parentToolCallId=n.string();continue;case 7:if(i!==58)break;o.parentMessageId=n.string();continue}if((i&7)===4||i===0)break;n.skip(i&7)}return o},create(t){return Ba.fromPartial(t??{})},fromPartial(t){let e=Hv();return e.baseEvent=t.baseEvent!==void 0&&t.baseEvent!==null?M.fromPartial(t.baseEvent):void 0,e.subagentRunId=t.subagentRunId??"",e.name=t.name??"",e.description=t.description??void 0,e.parentSubagentRunId=t.parentSubagentRunId??void 0,e.parentToolCallId=t.parentToolCallId??void 0,e.parentMessageId=t.parentMessageId??void 0,e}};function Fv(){return{baseEvent:void 0,subagentRunId:"",result:void 0,outcome:"",interruptIds:[]}}var Za={encode(t,e=new U){t.baseEvent!==void 0&&M.encode(t.baseEvent,e.uint32(10).fork()).join(),t.subagentRunId!==""&&e.uint32(18).string(t.subagentRunId),t.result!==void 0&&D.encode(D.wrap(t.result),e.uint32(26).fork()).join(),t.outcome!==""&&e.uint32(34).string(t.outcome);for(let n of t.interruptIds)e.uint32(42).string(n);return e},decode(t,e){let n=t instanceof R?t:new R(t),r=e===void 0?n.len:n.pos+e,o=Fv();for(;n.pos<r;){let i=n.uint32();switch(i>>>3){case 1:if(i!==10)break;o.baseEvent=M.decode(n,n.uint32());continue;case 2:if(i!==18)break;o.subagentRunId=n.string();continue;case 3:if(i!==26)break;o.result=D.unwrap(D.decode(n,n.uint32()));continue;case 4:if(i!==34)break;o.outcome=n.string();continue;case 5:if(i!==42)break;o.interruptIds.push(n.string());continue}if((i&7)===4||i===0)break;n.skip(i&7)}return o},create(t){return Za.fromPartial(t??{})},fromPartial(t){let e=Fv();return e.baseEvent=t.baseEvent!==void 0&&t.baseEvent!==null?M.fromPartial(t.baseEvent):void 0,e.subagentRunId=t.subagentRunId??"",e.result=t.result??void 0,e.outcome=t.outcome??"",e.interruptIds=t.interruptIds?.map(n=>n)||[],e}};function Gv(){return{baseEvent:void 0,subagentRunId:"",message:"",code:void 0}}var Va={encode(t,e=new U){return t.baseEvent!==void 0&&M.encode(t.baseEvent,e.uint32(10).fork()).join(),t.subagentRunId!==""&&e.uint32(18).string(t.subagentRunId),t.message!==""&&e.uint32(26).string(t.message),t.code!==void 0&&e.uint32(34).string(t.code),e},decode(t,e){let n=t instanceof R?t:new R(t),r=e===void 0?n.len:n.pos+e,o=Gv();for(;n.pos<r;){let i=n.uint32();switch(i>>>3){case 1:if(i!==10)break;o.baseEvent=M.decode(n,n.uint32());continue;case 2:if(i!==18)break;o.subagentRunId=n.string();continue;case 3:if(i!==26)break;o.message=n.string();continue;case 4:if(i!==34)break;o.code=n.string();continue}if((i&7)===4||i===0)break;n.skip(i&7)}return o},create(t){return Va.fromPartial(t??{})},fromPartial(t){let e=Gv();return e.baseEvent=t.baseEvent!==void 0&&t.baseEvent!==null?M.fromPartial(t.baseEvent):void 0,e.subagentRunId=t.subagentRunId??"",e.message=t.message??"",e.code=t.code??void 0,e}};function Bv(){return{textMessageStart:void 0,textMessageContent:void 0,textMessageEnd:void 0,toolCallStart:void 0,toolCallArgs:void 0,toolCallEnd:void 0,stateSnapshot:void 0,stateDelta:void 0,messagesSnapshot:void 0,raw:void 0,custom:void 0,runStarted:void 0,runFinished:void 0,runError:void 0,stepStarted:void 0,stepFinished:void 0,textMessageChunk:void 0,toolCallChunk:void 0,subagentStarted:void 0,subagentFinished:void 0,subagentError:void 0,toolCallResult:void 0,activitySnapshot:void 0,activityDelta:void 0,reasoningStart:void 0,reasoningMessageStart:void 0,reasoningMessageContent:void 0,reasoningMessageEnd:void 0,reasoningMessageChunk:void 0,reasoningEnd:void 0,reasoningEncryptedValue:void 0}}var jv={encode(t,e=new U){return t.textMessageStart!==void 0&&ma.encode(t.textMessageStart,e.uint32(10).fork()).join(),t.textMessageContent!==void 0&&ga.encode(t.textMessageContent,e.uint32(18).fork()).join(),t.textMessageEnd!==void 0&&va.encode(t.textMessageEnd,e.uint32(26).fork()).join(),t.toolCallStart!==void 0&&ya.encode(t.toolCallStart,e.uint32(34).fork()).join(),t.toolCallArgs!==void 0&&wa.encode(t.toolCallArgs,e.uint32(42).fork()).join(),t.toolCallEnd!==void 0&&Ea.encode(t.toolCallEnd,e.uint32(50).fork()).join(),t.stateSnapshot!==void 0&&Sa.encode(t.stateSnapshot,e.uint32(58).fork()).join(),t.stateDelta!==void 0&&Ta.encode(t.stateDelta,e.uint32(66).fork()).join(),t.messagesSnapshot!==void 0&&Aa.encode(t.messagesSnapshot,e.uint32(74).fork()).join(),t.raw!==void 0&&Ra.encode(t.raw,e.uint32(82).fork()).join(),t.custom!==void 0&&Ca.encode(t.custom,e.uint32(90).fork()).join(),t.runStarted!==void 0&&Na.encode(t.runStarted,e.uint32(98).fork()).join(),t.runFinished!==void 0&&Oa.encode(t.runFinished,e.uint32(106).fork()).join(),t.runError!==void 0&&Pa.encode(t.runError,e.uint32(114).fork()).join(),t.stepStarted!==void 0&&Ma.encode(t.stepStarted,e.uint32(122).fork()).join(),t.stepFinished!==void 0&&La.encode(t.stepFinished,e.uint32(130).fork()).join(),t.textMessageChunk!==void 0&&ba.encode(t.textMessageChunk,e.uint32(138).fork()).join(),t.toolCallChunk!==void 0&&xa.encode(t.toolCallChunk,e.uint32(146).fork()).join(),t.subagentStarted!==void 0&&Ba.encode(t.subagentStarted,e.uint32(154).fork()).join(),t.subagentFinished!==void 0&&Za.encode(t.subagentFinished,e.uint32(162).fork()).join(),t.subagentError!==void 0&&Va.encode(t.subagentError,e.uint32(170).fork()).join(),t.toolCallResult!==void 0&&_a.encode(t.toolCallResult,e.uint32(178).fork()).join(),t.activitySnapshot!==void 0&&ka.encode(t.activitySnapshot,e.uint32(186).fork()).join(),t.activityDelta!==void 0&&Ia.encode(t.activityDelta,e.uint32(194).fork()).join(),t.reasoningStart!==void 0&&za.encode(t.reasoningStart,e.uint32(202).fork()).join(),t.reasoningMessageStart!==void 0&&Da.encode(t.reasoningMessageStart,e.uint32(210).fork()).join(),t.reasoningMessageContent!==void 0&&$a.encode(t.reasoningMessageContent,e.uint32(218).fork()).join(),t.reasoningMessageEnd!==void 0&&Ua.encode(t.reasoningMessageEnd,e.uint32(226).fork()).join(),t.reasoningMessageChunk!==void 0&&Ha.encode(t.reasoningMessageChunk,e.uint32(234).fork()).join(),t.reasoningEnd!==void 0&&Fa.encode(t.reasoningEnd,e.uint32(242).fork()).join(),t.reasoningEncryptedValue!==void 0&&Ga.encode(t.reasoningEncryptedValue,e.uint32(250).fork()).join(),e},decode(t,e){let n=t instanceof R?t:new R(t),r=e===void 0?n.len:n.pos+e,o=Bv();for(;n.pos<r;){let i=n.uint32();switch(i>>>3){case 1:if(i!==10)break;o.textMessageStart=ma.decode(n,n.uint32());continue;case 2:if(i!==18)break;o.textMessageContent=ga.decode(n,n.uint32());continue;case 3:if(i!==26)break;o.textMessageEnd=va.decode(n,n.uint32());continue;case 4:if(i!==34)break;o.toolCallStart=ya.decode(n,n.uint32());continue;case 5:if(i!==42)break;o.toolCallArgs=wa.decode(n,n.uint32());continue;case 6:if(i!==50)break;o.toolCallEnd=Ea.decode(n,n.uint32());continue;case 7:if(i!==58)break;o.stateSnapshot=Sa.decode(n,n.uint32());continue;case 8:if(i!==66)break;o.stateDelta=Ta.decode(n,n.uint32());continue;case 9:if(i!==74)break;o.messagesSnapshot=Aa.decode(n,n.uint32());continue;case 10:if(i!==82)break;o.raw=Ra.decode(n,n.uint32());continue;case 11:if(i!==90)break;o.custom=Ca.decode(n,n.uint32());continue;case 12:if(i!==98)break;o.runStarted=Na.decode(n,n.uint32());continue;case 13:if(i!==106)break;o.runFinished=Oa.decode(n,n.uint32());continue;case 14:if(i!==114)break;o.runError=Pa.decode(n,n.uint32());continue;case 15:if(i!==122)break;o.stepStarted=Ma.decode(n,n.uint32());continue;case 16:if(i!==130)break;o.stepFinished=La.decode(n,n.uint32());continue;case 17:if(i!==138)break;o.textMessageChunk=ba.decode(n,n.uint32());continue;case 18:if(i!==146)break;o.toolCallChunk=xa.decode(n,n.uint32());continue;case 19:if(i!==154)break;o.subagentStarted=Ba.decode(n,n.uint32());continue;case 20:if(i!==162)break;o.subagentFinished=Za.decode(n,n.uint32());continue;case 21:if(i!==170)break;o.subagentError=Va.decode(n,n.uint32());continue;case 22:if(i!==178)break;o.toolCallResult=_a.decode(n,n.uint32());continue;case 23:if(i!==186)break;o.activitySnapshot=ka.decode(n,n.uint32());continue;case 24:if(i!==194)break;o.activityDelta=Ia.decode(n,n.uint32());continue;case 25:if(i!==202)break;o.reasoningStart=za.decode(n,n.uint32());continue;case 26:if(i!==210)break;o.reasoningMessageStart=Da.decode(n,n.uint32());continue;case 27:if(i!==218)break;o.reasoningMessageContent=$a.decode(n,n.uint32());continue;case 28:if(i!==226)break;o.reasoningMessageEnd=Ua.decode(n,n.uint32());continue;case 29:if(i!==234)break;o.reasoningMessageChunk=Ha.decode(n,n.uint32());continue;case 30:if(i!==242)break;o.reasoningEnd=Fa.decode(n,n.uint32());continue;case 31:if(i!==250)break;o.reasoningEncryptedValue=Ga.decode(n,n.uint32());continue}if((i&7)===4||i===0)break;n.skip(i&7)}return o},create(t){return jv.fromPartial(t??{})},fromPartial(t){let e=Bv();return e.textMessageStart=t.textMessageStart!==void 0&&t.textMessageStart!==null?ma.fromPartial(t.textMessageStart):void 0,e.textMessageContent=t.textMessageContent!==void 0&&t.textMessageContent!==null?ga.fromPartial(t.textMessageContent):void 0,e.textMessageEnd=t.textMessageEnd!==void 0&&t.textMessageEnd!==null?va.fromPartial(t.textMessageEnd):void 0,e.toolCallStart=t.toolCallStart!==void 0&&t.toolCallStart!==null?ya.fromPartial(t.toolCallStart):void 0,e.toolCallArgs=t.toolCallArgs!==void 0&&t.toolCallArgs!==null?wa.fromPartial(t.toolCallArgs):void 0,e.toolCallEnd=t.toolCallEnd!==void 0&&t.toolCallEnd!==null?Ea.fromPartial(t.toolCallEnd):void 0,e.stateSnapshot=t.stateSnapshot!==void 0&&t.stateSnapshot!==null?Sa.fromPartial(t.stateSnapshot):void 0,e.stateDelta=t.stateDelta!==void 0&&t.stateDelta!==null?Ta.fromPartial(t.stateDelta):void 0,e.messagesSnapshot=t.messagesSnapshot!==void 0&&t.messagesSnapshot!==null?Aa.fromPartial(t.messagesSnapshot):void 0,e.raw=t.raw!==void 0&&t.raw!==null?Ra.fromPartial(t.raw):void 0,e.custom=t.custom!==void 0&&t.custom!==null?Ca.fromPartial(t.custom):void 0,e.runStarted=t.runStarted!==void 0&&t.runStarted!==null?Na.fromPartial(t.runStarted):void 0,e.runFinished=t.runFinished!==void 0&&t.runFinished!==null?Oa.fromPartial(t.runFinished):void 0,e.runError=t.runError!==void 0&&t.runError!==null?Pa.fromPartial(t.runError):void 0,e.stepStarted=t.stepStarted!==void 0&&t.stepStarted!==null?Ma.fromPartial(t.stepStarted):void 0,e.stepFinished=t.stepFinished!==void 0&&t.stepFinished!==null?La.fromPartial(t.stepFinished):void 0,e.textMessageChunk=t.textMessageChunk!==void 0&&t.textMessageChunk!==null?ba.fromPartial(t.textMessageChunk):void 0,e.toolCallChunk=t.toolCallChunk!==void 0&&t.toolCallChunk!==null?xa.fromPartial(t.toolCallChunk):void 0,e.subagentStarted=t.subagentStarted!==void 0&&t.subagentStarted!==null?Ba.fromPartial(t.subagentStarted):void 0,e.subagentFinished=t.subagentFinished!==void 0&&t.subagentFinished!==null?Za.fromPartial(t.subagentFinished):void 0,e.subagentError=t.subagentError!==void 0&&t.subagentError!==null?Va.fromPartial(t.subagentError):void 0,e.toolCallResult=t.toolCallResult!==void 0&&t.toolCallResult!==null?_a.fromPartial(t.toolCallResult):void 0,e.activitySnapshot=t.activitySnapshot!==void 0&&t.activitySnapshot!==null?ka.fromPartial(t.activitySnapshot):void 0,e.activityDelta=t.activityDelta!==void 0&&t.activityDelta!==null?Ia.fromPartial(t.activityDelta):void 0,e.reasoningStart=t.reasoningStart!==void 0&&t.reasoningStart!==null?za.fromPartial(t.reasoningStart):void 0,e.reasoningMessageStart=t.reasoningMessageStart!==void 0&&t.reasoningMessageStart!==null?Da.fromPartial(t.reasoningMessageStart):void 0,e.reasoningMessageContent=t.reasoningMessageContent!==void 0&&t.reasoningMessageContent!==null?$a.fromPartial(t.reasoningMessageContent):void 0,e.reasoningMessageEnd=t.reasoningMessageEnd!==void 0&&t.reasoningMessageEnd!==null?Ua.fromPartial(t.reasoningMessageEnd):void 0,e.reasoningMessageChunk=t.reasoningMessageChunk!==void 0&&t.reasoningMessageChunk!==null?Ha.fromPartial(t.reasoningMessageChunk):void 0,e.reasoningEnd=t.reasoningEnd!==void 0&&t.reasoningEnd!==null?Fa.fromPartial(t.reasoningEnd):void 0,e.reasoningEncryptedValue=t.reasoningEncryptedValue!==void 0&&t.reasoningEncryptedValue!==null?Ga.fromPartial(t.reasoningEncryptedValue):void 0,e}};function Zv(){return{provider:void 0,model:void 0,inputTokens:void 0,outputTokens:void 0,totalTokens:void 0,reasoningTokens:void 0,cachedInputTokens:void 0,cacheWriteInputTokens:void 0}}var Sn={encode(t,e=new U){return t.provider!==void 0&&e.uint32(10).string(t.provider),t.model!==void 0&&e.uint32(18).string(t.model),t.inputTokens!==void 0&&e.uint32(24).int64(t.inputTokens),t.outputTokens!==void 0&&e.uint32(32).int64(t.outputTokens),t.totalTokens!==void 0&&e.uint32(40).int64(t.totalTokens),t.reasoningTokens!==void 0&&e.uint32(48).int64(t.reasoningTokens),t.cachedInputTokens!==void 0&&e.uint32(56).int64(t.cachedInputTokens),t.cacheWriteInputTokens!==void 0&&e.uint32(64).int64(t.cacheWriteInputTokens),e},decode(t,e){let n=t instanceof R?t:new R(t),r=e===void 0?n.len:n.pos+e,o=Zv();for(;n.pos<r;){let i=n.uint32();switch(i>>>3){case 1:if(i!==10)break;o.provider=n.string();continue;case 2:if(i!==18)break;o.model=n.string();continue;case 3:if(i!==24)break;o.inputTokens=yn(n.int64());continue;case 4:if(i!==32)break;o.outputTokens=yn(n.int64());continue;case 5:if(i!==40)break;o.totalTokens=yn(n.int64());continue;case 6:if(i!==48)break;o.reasoningTokens=yn(n.int64());continue;case 7:if(i!==56)break;o.cachedInputTokens=yn(n.int64());continue;case 8:if(i!==64)break;o.cacheWriteInputTokens=yn(n.int64());continue}if((i&7)===4||i===0)break;n.skip(i&7)}return o},create(t){return Sn.fromPartial(t??{})},fromPartial(t){let e=Zv();return e.provider=t.provider??void 0,e.model=t.model??void 0,e.inputTokens=t.inputTokens??void 0,e.outputTokens=t.outputTokens??void 0,e.totalTokens=t.totalTokens??void 0,e.reasoningTokens=t.reasoningTokens??void 0,e.cachedInputTokens=t.cachedInputTokens??void 0,e.cacheWriteInputTokens=t.cacheWriteInputTokens??void 0,e}};function yn(t){let e=globalThis.Number(t.toString());if(e>globalThis.Number.MAX_SAFE_INTEGER)throw new globalThis.Error("Value is larger than Number.MAX_SAFE_INTEGER");if(e<globalThis.Number.MIN_SAFE_INTEGER)throw new globalThis.Error("Value is smaller than Number.MIN_SAFE_INTEGER");return e}var cr=t=>t&&typeof t=="object"?t:void 0,he=t=>Array.isArray(t)?t:[],Y0=()=>typeof process<"u"&&typeof process.env<"u"&&!!process.env.SUPPRESS_TRANSFORMATION_WARNINGS,Wv=()=>{Y0()||console.warn("[ag-ui][proto] Dropped a content part this build does not know: the protocol has a variant this SDK predates.")};var lz=new Set(Object.values(v)),K0={textMessageStart:"TEXT_MESSAGE_START",textMessageContent:"TEXT_MESSAGE_CONTENT",textMessageEnd:"TEXT_MESSAGE_END",textMessageChunk:"TEXT_MESSAGE_CHUNK",toolCallStart:"TOOL_CALL_START",toolCallArgs:"TOOL_CALL_ARGS",toolCallEnd:"TOOL_CALL_END",toolCallChunk:"TOOL_CALL_CHUNK",toolCallResult:"TOOL_CALL_RESULT",stateSnapshot:"STATE_SNAPSHOT",stateDelta:"STATE_DELTA",messagesSnapshot:"MESSAGES_SNAPSHOT",activitySnapshot:"ACTIVITY_SNAPSHOT",activityDelta:"ACTIVITY_DELTA",raw:"RAW",custom:"CUSTOM",runStarted:"RUN_STARTED",runFinished:"RUN_FINISHED",runError:"RUN_ERROR",stepStarted:"STEP_STARTED",stepFinished:"STEP_FINISHED",reasoningStart:"REASONING_START",reasoningMessageStart:"REASONING_MESSAGE_START",reasoningMessageContent:"REASONING_MESSAGE_CONTENT",reasoningMessageEnd:"REASONING_MESSAGE_END",reasoningMessageChunk:"REASONING_MESSAGE_CHUNK",reasoningEnd:"REASONING_END",reasoningEncryptedValue:"REASONING_ENCRYPTED_VALUE",subagentStarted:"SUBAGENT_STARTED",subagentFinished:"SUBAGENT_FINISHED",subagentError:"SUBAGENT_ERROR"},wn=new Set([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31]);var jt=t=>{let e=cr(t);if(e){if([e.data,e.url,e.file].filter(Boolean).length>1)throw new Error("Invalid event: source carries more than one arm");if(e.data){let n=e.data;return{type:"data",value:n.value,mimeType:n.mimeType}}if(e.url){let n=e.url;return{type:"url",value:n.value,mimeType:n.mimeType}}if(e.file){let n=e.file;return{type:"file",value:n.value,provider:n.provider,mimeType:n.mimeType}}}};var qv=t=>{let e=cr(t);if(e){if([e.text,e.image,e.audio,e.video,e.document].filter(Boolean).length>1)throw new Error("Invalid event: content part carries more than one arm");if(e.text){let n=e.text;return{type:"text",id:n.id,text:n.text,metadata:n.metadata}}if(e.image){let n=e.image;return n.source!==void 0&&jt(n.source)===void 0?void 0:{type:"image",id:n.id,source:jt(n.source),metadata:n.metadata}}if(e.audio){let n=e.audio;return n.source!==void 0&&jt(n.source)===void 0?void 0:{type:"audio",id:n.id,source:jt(n.source),metadata:n.metadata}}if(e.video){let n=e.video;return n.source!==void 0&&jt(n.source)===void 0?void 0:{type:"video",id:n.id,source:jt(n.source),metadata:n.metadata}}if(e.document){let n=e.document;return n.source!==void 0&&jt(n.source)===void 0?void 0:{type:"document",id:n.id,source:jt(n.source),metadata:n.metadata}}}},X0=new Set(["activity"]),J0=new Set(["user","tool"]),Q0=new Set(["developer","system","assistant","user","tool","activity","reasoning"]);var Yv=t=>{let e=cr(t)??{},n={...e},r=typeof e.role=="string"?e.role:"",o=Q0.has(r),i=o?J0.has(r):he(e.contentParts).length>0,a=o?X0.has(r):!i&&e.activityContent!==void 0;if(!o&&(e.content!==void 0?1:0)+(he(e.contentParts).length>0?1:0)+(e.activityContent!==void 0?1:0)>1)throw new Error("Invalid event: message carries more than one content form");if(o){if(!i&&he(e.contentParts).length>0)throw new Error("Invalid event: message carries content parts for a role that has none");if(e.activityContent!==void 0&&!a)throw new Error("Invalid event: message carries activity content for a non-activity role");if(a&&e.content!==void 0)throw new Error("Invalid event: activity content cannot ride with other content forms");if(i&&e.content!==void 0&&he(e.contentParts).length>0)throw new Error("Invalid event: message carries both string content and content parts")}return i&&e.content===void 0&&(n.content=he(e.contentParts).map(s=>{let c=qv(s);return c===void 0&&Wv(),c}).filter(s=>s!==void 0)),a&&e.activityContent!==void 0&&(n.content=e.activityContent),delete n.activityContent,delete n.contentParts,he(e.toolCalls).length===0&&delete n.toolCalls,Object.keys(n).forEach(s=>{n[s]===void 0&&delete n[s]}),n},ku=t=>{if(Array.isArray(t)){for(let n of t)ku(n);return}let e=cr(t);if(e)for(let n of Object.keys(e))e[n]===void 0?delete e[n]:ku(e[n])};var eT=t=>{let e=cr(t);if(!e)return;let n={};return e.threadId!==void 0&&(n.threadId=e.threadId),e.runId!==void 0&&(n.runId=e.runId),e.protocolVersion!==void 0&&(n.protocolVersion=e.protocolVersion),e.parentRunId!==void 0&&(n.parentRunId=e.parentRunId),e.state!==void 0&&(n.state=e.state),n.messages=he(e.messages).map(Yv).filter(r=>r!==void 0),n.tools=he(e.tools),n.context=he(e.context),e.forwardedProps!==void 0&&(n.forwardedProps=e.forwardedProps),n.resume=he(e.resume),n};var Iu={TextMessageStartEvent:{singular:new Set([1]),descend:{1:"BaseEvent"}},BaseEvent:{singular:new Set([3,4]),descend:{},google:{3:"google.protobuf.Value",4:"google.protobuf.Struct"}},TextMessageContentEvent:{singular:new Set([1]),descend:{1:"BaseEvent"}},TextMessageEndEvent:{singular:new Set([1]),descend:{1:"BaseEvent"}},ToolCallStartEvent:{singular:new Set([1]),descend:{1:"BaseEvent"}},ToolCallArgsEvent:{singular:new Set([1]),descend:{1:"BaseEvent"}},ToolCallEndEvent:{singular:new Set([1]),descend:{1:"BaseEvent"}},StateSnapshotEvent:{singular:new Set([1,2]),descend:{1:"BaseEvent"},google:{2:"google.protobuf.Value"}},StateDeltaEvent:{singular:new Set([1]),descend:{1:"BaseEvent",2:"JsonPatchOperation"}},JsonPatchOperation:{singular:new Set([4]),descend:{},google:{4:"google.protobuf.Value"}},MessagesSnapshotEvent:{singular:new Set([1]),descend:{1:"BaseEvent",2:"Message"}},Message:{singular:new Set([9,13]),descend:{5:"ToolCall",8:"InputContent"},google:{9:"google.protobuf.Struct",13:"google.protobuf.Struct"}},ToolCall:{singular:new Set([3,4]),descend:{},google:{4:"google.protobuf.Struct"}},InputContent:{singular:new Set([1,2,3,4,5]),descend:{1:"TextInputPart",2:"ImageInputPart",3:"AudioInputPart",4:"VideoInputPart",5:"DocumentInputPart"},arms:new Set([1,2,3,4,5])},TextInputPart:{singular:new Set([3]),descend:{},google:{3:"google.protobuf.Value"}},ImageInputPart:{singular:new Set([1,2]),descend:{1:"InputContentSource"},google:{2:"google.protobuf.Value"}},InputContentSource:{singular:new Set([1,2,3]),descend:{},arms:new Set([1,2,3])},AudioInputPart:{singular:new Set([1,2]),descend:{1:"InputContentSource"},google:{2:"google.protobuf.Value"}},VideoInputPart:{singular:new Set([1,2]),descend:{1:"InputContentSource"},google:{2:"google.protobuf.Value"}},DocumentInputPart:{singular:new Set([1,2]),descend:{1:"InputContentSource"},google:{2:"google.protobuf.Value"}},RawEvent:{singular:new Set([1,2]),descend:{1:"BaseEvent"},google:{2:"google.protobuf.Value"}},CustomEvent:{singular:new Set([1,3]),descend:{1:"BaseEvent"},google:{3:"google.protobuf.Value"}},RunStartedEvent:{singular:new Set([1,5]),descend:{1:"BaseEvent",5:"RunAgentInput"}},RunAgentInput:{singular:new Set([4,8]),descend:{5:"Message",6:"Tool",9:"ResumeEntry"},google:{4:"google.protobuf.Value",8:"google.protobuf.Value"}},Tool:{singular:new Set([3,4]),descend:{},google:{3:"google.protobuf.Value",4:"google.protobuf.Struct"}},ResumeEntry:{singular:new Set([3,4]),descend:{},google:{3:"google.protobuf.Value",4:"google.protobuf.Struct"}},RunFinishedEvent:{singular:new Set([1,4]),descend:{1:"BaseEvent",6:"Interrupt"},google:{4:"google.protobuf.Value"}},Interrupt:{singular:new Set([5,7]),descend:{},google:{5:"google.protobuf.Value",7:"google.protobuf.Value"}},RunErrorEvent:{singular:new Set([1]),descend:{1:"BaseEvent"}},StepStartedEvent:{singular:new Set([1]),descend:{1:"BaseEvent"}},StepFinishedEvent:{singular:new Set([1]),descend:{1:"BaseEvent"}},TextMessageChunkEvent:{singular:new Set([1]),descend:{1:"BaseEvent"}},ToolCallChunkEvent:{singular:new Set([1]),descend:{1:"BaseEvent"}},SubagentStartedEvent:{singular:new Set([1]),descend:{1:"BaseEvent"}},SubagentFinishedEvent:{singular:new Set([1,3]),descend:{1:"BaseEvent"},google:{3:"google.protobuf.Value"}},SubagentErrorEvent:{singular:new Set([1]),descend:{1:"BaseEvent"}},ToolCallResultEvent:{singular:new Set([1]),descend:{1:"BaseEvent",7:"InputContent"}},ActivitySnapshotEvent:{singular:new Set([1,5]),descend:{1:"BaseEvent"},google:{5:"google.protobuf.Struct"}},ActivityDeltaEvent:{singular:new Set([1]),descend:{1:"BaseEvent",5:"JsonPatchOperation"}},ReasoningStartEvent:{singular:new Set([1]),descend:{1:"BaseEvent"}},ReasoningMessageStartEvent:{singular:new Set([1]),descend:{1:"BaseEvent"}},ReasoningMessageContentEvent:{singular:new Set([1]),descend:{1:"BaseEvent"}},ReasoningMessageEndEvent:{singular:new Set([1]),descend:{1:"BaseEvent"}},ReasoningMessageChunkEvent:{singular:new Set([1]),descend:{1:"BaseEvent"}},ReasoningEndEvent:{singular:new Set([1]),descend:{1:"BaseEvent"}},ReasoningEncryptedValueEvent:{singular:new Set([1]),descend:{1:"BaseEvent"}},"google.protobuf.Struct":{singular:new Set,descend:{1:"google.protobuf.Struct.FieldsEntry"}},"google.protobuf.Struct.FieldsEntry":{singular:new Set([2]),descend:{2:"google.protobuf.Value"}},"google.protobuf.Value":{singular:new Set([5,6]),descend:{5:"google.protobuf.Struct",6:"google.protobuf.ListValue"},arms:new Set([1,2,3,4,5,6]),armWireTypes:{1:0,2:1,3:2,4:0,5:2,6:2}},"google.protobuf.ListValue":{singular:new Set,descend:{1:"google.protobuf.Value"}}},Kv={1:"TextMessageStartEvent",2:"TextMessageContentEvent",3:"TextMessageEndEvent",4:"ToolCallStartEvent",5:"ToolCallArgsEvent",6:"ToolCallEndEvent",7:"StateSnapshotEvent",8:"StateDeltaEvent",9:"MessagesSnapshotEvent",10:"RawEvent",11:"CustomEvent",12:"RunStartedEvent",13:"RunFinishedEvent",14:"RunErrorEvent",15:"StepStartedEvent",16:"StepFinishedEvent",17:"TextMessageChunkEvent",18:"ToolCallChunkEvent",19:"SubagentStartedEvent",20:"SubagentFinishedEvent",21:"SubagentErrorEvent",22:"ToolCallResultEvent",23:"ActivitySnapshotEvent",24:"ActivityDeltaEvent",25:"ReasoningStartEvent",26:"ReasoningMessageStartEvent",27:"ReasoningMessageContentEvent",28:"ReasoningMessageEndEvent",29:"ReasoningMessageChunkEvent",30:"ReasoningEndEvent",31:"ReasoningEncryptedValueEvent"};function lr(t,e){let n=0,r=0;for(;;){if(e.offset>=t.length)throw new Error("Invalid event");let o=t[e.offset++];if(r<28?n+=(o&127)*2**r:r===28&&(n+=(o&15)*2**28),r+=7,(o&128)===0)return n}}function Xv(t,e){let n={offset:0},r=0,o=0;for(;n.offset<t.length;){let i=lr(t,n),a=Math.floor(i/8),s=i%8;if(a===0)throw new Error("Invalid event");if(s===3){r+=1;continue}if(s===4){if(r-=1,r<0)throw new Error("Invalid event");continue}if(s===0)lr(t,n);else if(s===1)n.offset+=8;else if(s===2){let c=lr(t,n);if(n.offset+c>t.length)throw new Error("Invalid event");if(r===0){if(e.arms?.has(a)){if(o!==0&&o!==a)throw new Error("Invalid event");o=a}let l=e.descend[a];if(l!==void 0){let u=Iu[l];u!==void 0&&Xv(t.subarray(n.offset,n.offset+c),u)}}n.offset+=c}else if(s===5)n.offset+=4;else throw new Error("Invalid event");if(n.offset>t.length)throw new Error("Invalid event")}if(r!==0)throw new Error("Invalid event")}function tT(t){let e=new Set,n={offset:0},r=0;for(;n.offset<t.length;){let o=lr(t,n),i=Math.floor(o/8),a=o%8;if(i===0)throw new Error("Invalid event");if(a===3){r+=1;continue}if(a===4){if(r-=1,r<0)throw new Error("Invalid event");continue}if(r===0&&wn.has(i)){if(e.size>0&&!e.has(i))throw new Error("Invalid event");e.add(i)}if(a===0)lr(t,n);else if(a===1)n.offset+=8;else if(a===2){let s=lr(t,n);if(n.offset+s>t.length)throw new Error("Invalid event");if(r===0){let c=Kv[i];if(c!==void 0){let l=Iu[c];l!==void 0&&Xv(t.subarray(n.offset,n.offset+s),l)}}n.offset+=s}else if(a===5)n.offset+=4;else throw new Error("Invalid event");if(n.offset>t.length)throw new Error("Invalid event")}if(r!==0)throw new Error("Invalid event")}function Vv(t){if(t.length===1)return t[0];let e=new Uint8Array(t.reduce((r,o)=>r+o.length,0)),n=0;for(let r of t)e.set(r,n),n+=r.length;return e}function Jv(t,e){let n=new R(t),r=[],o=new Map,i,a=!1;for(;n.pos<n.len;){let c=n.pos,[l,u]=n.tag(),f=u===2?n.bytes():void 0;f===void 0&&n.skip(u,l);let m=e.arms?.has(l)&&u===(e.armWireTypes?.[l]??2);if(m){if(i!==void 0&&i!==l){let w=o.get(i);w!==void 0&&(r[w]=void 0),o.delete(i),a=!0}if(i=l,!e.singular.has(l)){let w=o.get(l);w!==void 0&&(r[w]=void 0,o.delete(l),a=!0)}}let p=e.descend[l]??e.google?.[l],h=f!==void 0&&(e.singular.has(l)||p!==void 0),x=o.get(l),g=x===void 0?void 0:r[x]?.payloads;if(h&&e.singular.has(l)&&g!==void 0){g.push(f),a=!0;continue}(h||m)&&o.set(l,r.length),r.push({number:l,raw:t.subarray(c,n.pos),...h&&{payloads:[f]},child:p===void 0?void 0:Iu[p]})}let s=[];for(let c of r)if(c!==void 0){if(c.payloads!==void 0){let l=Vv(c.payloads),u=c.child===void 0?l:Jv(l,c.child);if(c.payloads.length>1||u!==l){s.push(new U().uint32(c.number*8+2).bytes(u).finish()),a=!0;continue}}s.push(c.raw)}return a?Vv(s):t}var Ru=class extends Error{constructor(t="Unknown event type"){super(t),this.name="AGUIUnknownEventTypeError"}};function Qv(t,e,n,r){let o=0,i=0,a=0;for(;;){if(e.offset>=t.length||a>=n)return-1;let s=t[e.offset++];if(a+=1,a===n&&s>r)return-1;if(o+=(s&127)*2**i,i+=7,(s&128)===0)return o}}var ja=(t,e)=>Qv(t,e,5,15),eb=(t,e)=>Qv(t,e,10,1);function nT(t){let e={offset:0},n=[];for(;e.offset<t.length;){let r=ja(t,e);if(r<0)return!1;let o=Math.floor(r/8),i=r%8;if(o===0)return!1;if(i===3)n.push(o);else if(i===4){if(n.pop()!==o)return!1}else if(i===0){if(eb(t,e)<0)return!1}else if(i===1)e.offset+=8;else if(i===5)e.offset+=4;else if(i===2){let a=ja(t,e);if(a<0||e.offset+a>t.length)return!1;e.offset+=a}else return!1;if(e.offset>t.length)return!1}return n.length===0}function rT(t){let e={offset:0},n=[],r=0;for(;e.offset<t.length;){let o=ja(t,e);if(o<0)return!1;let i=Math.floor(o/8),a=o%8;if(i===0)return!1;let s=n.length===0;if(a===3){if(s&&wn.has(i))return!1;n.push(i)}else if(a===4){if(n.pop()!==i)return!1}else if(a===0){if(s&&wn.has(i)||eb(t,e)<0)return!1}else if(a===1){if(s&&wn.has(i))return!1;e.offset+=8}else if(a===5){if(s&&wn.has(i))return!1;e.offset+=4}else if(a===2){let c=ja(t,e);if(c<0||e.offset+c>t.length)return!1;if(s){if(wn.has(i)||!nT(t.subarray(e.offset,e.offset+c)))return!1;r+=1}e.offset+=c}else return!1;if(e.offset>t.length)return!1}return n.length===0&&r>0}function tb(t){tT(t);let e=jv.decode(Jv(t,{singular:wn,descend:Kv})),n=Object.entries(e).filter(([,c])=>c!==void 0);if(n.length!==1)throw n.length===0&&rT(t)?new Ru:new Error("Invalid event");let r=n[0],o=K0[r[0]];if(o===void 0)throw new Error("Invalid event");let i=r[1],a=cr(i.baseEvent);if(!a)throw new Error("Invalid event");let s=q0[a.type];if(s!==o)throw new Error("Invalid event: envelope carries "+o+" but the base event declares "+String(s));if(i.type=o,i.timestamp=a.timestamp,i.rawEvent=a.rawEvent,a.metadata!==void 0&&(i.metadata=a.metadata),delete i.baseEvent,i.type==="MESSAGES_SNAPSHOT"&&Array.isArray(i.messages)&&(i.messages=i.messages.map(Yv).filter(c=>c!==void 0)),i.type==="RUN_FINISHED"){let c=i,l=typeof c.outcome=="string"&&c.outcome!==""?c.outcome:void 0,u={};u.pendingToolCallIds=c.pendingToolCallIds,delete c.pendingToolCallIds,u.interrupts=c.interrupts,delete c.interrupts,delete c.outcome,l===void 0&&(he(u.pendingToolCallIds).length>0&&(c.pendingToolCallIds=u.pendingToolCallIds),he(u.interrupts).length>0&&(c.interrupts=u.interrupts)),l==="success"&&(c.outcome={type:"success",...he(u.pendingToolCallIds).length>0?{pendingToolCallIds:u.pendingToolCallIds}:{},...he(u.interrupts).length>0?{interrupts:u.interrupts}:{}}),l==="interrupt"&&(c.outcome={type:"interrupt",interrupts:he(u.interrupts),...he(u.pendingToolCallIds).length>0?{pendingToolCallIds:u.pendingToolCallIds}:{}}),l==="cancelled"&&(c.outcome={type:"cancelled",...he(u.pendingToolCallIds).length>0?{pendingToolCallIds:u.pendingToolCallIds}:{},...he(u.interrupts).length>0?{interrupts:u.interrupts}:{}}),l!==void 0&&!["success","interrupt","cancelled"].includes(l)&&(c.outcome={type:l,...he(u.pendingToolCallIds).length>0?{pendingToolCallIds:u.pendingToolCallIds}:{},...he(u.interrupts).length>0?{interrupts:u.interrupts}:{}})}if(i.type==="SUBAGENT_FINISHED"){let c=i,l=typeof c.outcome=="string"&&c.outcome!==""?c.outcome:void 0,u={};u.interruptIds=c.interruptIds,delete c.interruptIds,delete c.outcome,l===void 0&&he(u.interruptIds).length>0&&(c.interruptIds=u.interruptIds),l==="success"&&(c.outcome={type:"success",...he(u.interruptIds).length>0?{interruptIds:u.interruptIds}:{}}),l==="suspended"&&(c.outcome={type:"suspended",...he(u.interruptIds).length>0?{interruptIds:u.interruptIds}:{}}),l!==void 0&&!["success","suspended"].includes(l)&&(c.outcome={type:l,...he(u.interruptIds).length>0?{interruptIds:u.interruptIds}:{}})}if(i.type==="STATE_DELTA"&&Array.isArray(i.delta)&&(i.delta=i.delta.map(c=>{let l=Vg[c.op];return c.op=typeof l=="string"&&l!=="UNRECOGNIZED"?l.toLowerCase():String(c.op),Object.keys(c).forEach(u=>{c[u]===void 0&&delete c[u]}),c})),i.type==="ACTIVITY_DELTA"&&Array.isArray(i.patch)&&(i.patch=i.patch.map(c=>{let l=Vg[c.op];return c.op=typeof l=="string"&&l!=="UNRECOGNIZED"?l.toLowerCase():String(c.op),Object.keys(c).forEach(u=>{c[u]===void 0&&delete c[u]}),c})),i.type==="RUN_FINISHED"&&Array.isArray(i.usage)&&i.usage.length===0&&delete i.usage,i.type==="RUN_ERROR"&&Array.isArray(i.usage)&&i.usage.length===0&&delete i.usage,i.type==="TOOL_CALL_RESULT"){let c=i;if(c.content!==void 0&&he(c.contentParts).length>0)throw new Error("Invalid event: content carries both string content and content parts");c.content===void 0&&(c.content=he(c.contentParts).map(l=>{let u=qv(l);return u===void 0&&Wv(),u}).filter(l=>l!==void 0)),delete c.contentParts}return i.type==="RUN_STARTED"&&i.input!==void 0&&(i.input=eT(i.input)),ku(i),i}var Cu="application/vnd.ag-ui.event+proto";var Nu=/^[v^~<>=]*?(\d+)(?:\.([x*]|\d+)(?:\.([x*]|\d+)(?:\.([x*]|\d+))?(?:-([\da-z\-]+(?:\.[\da-z\-]+)*))?(?:\+[\da-z\-]+(?:\.[\da-z\-]+)*)?)?)?$/i,Ou=t=>{if(typeof t!="string")throw new TypeError("Invalid argument expected string");let e=t.match(Nu);if(!e)throw new Error(`Invalid argument not valid semver ('${t}' received)`);return e.shift(),e},nb=t=>t==="*"||t==="x"||t==="X",rb=t=>{let e=parseInt(t,10);return isNaN(e)?t:e},iT=(t,e)=>typeof t!=typeof e?[String(t),String(e)]:[t,e],aT=(t,e)=>{if(nb(t)||nb(e))return 0;let[n,r]=iT(rb(t),rb(e));return n>r?1:n<r?-1:0},Pu=(t,e)=>{for(let n=0;n<Math.max(t.length,e.length);n++){let r=aT(t[n]||"0",e[n]||"0");if(r!==0)return r}return 0};var Tn=(t,e)=>{let n=Ou(t),r=Ou(e),o=n.pop(),i=r.pop(),a=Pu(n,r);return a!==0?a:o&&i?Pu(o.split("."),i.split(".")):o||i?o?-1:1:0};var Mu=t=>typeof t=="string"&&/^[v\d]/.test(t)&&Nu.test(t);var ob="@ag-ui/client";function sT(t){if(!t.metadata||!Object.prototype.hasOwnProperty.call(t.metadata,ob))return;let e=t.metadata?.[ob];if(!e||typeof e!="object"||Array.isArray(e))return[];if(!Object.prototype.hasOwnProperty.call(e,"authoritativeActivityTypes"))return;let n=e.authoritativeActivityTypes;return n===null?null:Array.isArray(n)&&n.every(r=>typeof r=="string")?n:[]}var ne=t=>{if(typeof structuredClone=="function")return structuredClone(t);try{return JSON.parse(JSON.stringify(t))}catch{return Array.isArray(t)?[...t]:{...t}}};function Se(){return Ft()}function lT(t){return t instanceof TypeError?/read[- ]?only|not extensible|cannot add property|cannot delete property|can't be deleted|unable to delete property|object is frozen|is not writable/i.test(t.message):!1}function Vu(t){if(Object.freeze(t),typeof t=="object"&&t)for(let e of Object.values(t))typeof e=="object"&&e&&!Object.isFrozen(e)&&Vu(e);return t}var ib=512*1024;function ab(t,e,n){let r=0,o=[t,e],i=new WeakSet;for(;o.length>0;){let a=o.pop();if(typeof a=="string"){if(r+=a.length,r>n)return!0}else if(typeof a=="object"&&a){if(i.has(a))continue;if(i.add(a),Array.isArray(a))for(let s=0;s<a.length;s++)o.push(a[s]);else{let s=Object.keys(a);for(let c=0;c<s.length;c++){let l=s[c];if(r+=l.length,r>n)return!0;o.push(a[l])}}}}return!1}async function ae(t,e,n,r){let o=typeof process<"u"&&process.env!==void 0,i=o&&!!process.env.VITEST_WORKER_ID,a=o&&!!process.env.VITEST_WORKER_ID,s=a&&!ab(e,n,ib),c=s?ne(e):e,l=s?ne(n):n,u=!1,f=!1,m;for(let p of t)try{s&&(Vu(c),Vu(l));let h=await r(p,c,l);if(h===void 0)continue;let x=!1;if(h.messages!==void 0&&h.messages!==c&&(c=ne(h.messages),u=!0,x=!0),h.state!==void 0&&h.state!==l&&(l=ne(h.state),f=!0,x=!0),s&&x&&ab(c,l,ib)&&(s=!1),m=h.stopPropagation,m===!0)break}catch(h){if(i&&h instanceof TypeError)throw h;s&&a&&lT(h)?console.error("AG-UI: Subscriber attempted to mutate frozen inputs in-place. Return mutations via AgentStateMutation instead of mutating directly.",h):console.error("Subscriber error:",h);continue}return{...u?{messages:Object.isFrozen(c)?ne(c):c}:{},...f?{state:Object.isFrozen(l)?ne(l):l}:{},...m===void 0?{}:{stopPropagation:m}}}function Ya(t){if(!t)return{enabled:!1,events:!1,lifecycle:!1,verbose:!1};if(t===!0)return{enabled:!0,events:!0,lifecycle:!0,verbose:!0};let e=t.events??!0,n=t.lifecycle??!0,r=t.verbose??!1;return{enabled:e||n,events:e,lifecycle:n,verbose:r}}function kn(t){if(t instanceof ju)return t;if(t===!0)return new ju(Ya(!0))}var ju=class{constructor(t){this.config=t}event(t,e,n,r){this.config.events&&(this.config.verbose?console.debug(`[${t}] ${e}`,typeof n=="string"?n:JSON.stringify(n)):console.debug(`[${t}] ${e}`,r??n))}lifecycle(t,e,n){this.config.lifecycle&&(n?console.debug(`[${t}] ${e}`,n):console.debug(`[${t}] ${e}`))}get eventsEnabled(){return this.config.events}get lifecycleEnabled(){return this.config.lifecycle}get enabled(){return this.config.enabled}};function Lu(t){return t.enabled?new ju(t):void 0}function cT(t,e,n){if(e){let o=t.find(a=>a.id===e);if(o?.role==="assistant")return o;o&&console.warn(`TOOL_CALL_START: parentMessageId '${e}' matches a '${o.role}' message, not assistant \u2014 falling back to toolCallId`);let i={id:o?n:e,role:"assistant",toolCalls:[]};return t.push(i),i}let r={id:n,role:"assistant",toolCalls:[]};return t.push(r),r}function Qe(t,e){return!t||e.metadata===void 0?!1:(t.metadata=eh(t.metadata,ne(e.metadata)),!0)}var _b=(t,e,n,r,o)=>{let i=kn(o),a=ne(n.messages),s=ne(t.state),c={},l=[],u=new Set,f=h=>{let x=h.outcome?.type==="success"?h.outcome.pendingToolCallIds:void 0;return x!==void 0&&x.length>0?[...x]:l.filter(g=>!u.has(g))},m=h=>{h.messages!==void 0&&(a=h.messages,c.messages=h.messages),h.state!==void 0&&(s=h.state,c.state=h.state)},p=()=>{let h=ne(c);return c={},h.messages!==void 0||h.state!==void 0?ue(h):pn};return e.pipe(Ri(async h=>{let x=await ae(r,a,s,(g,w,b)=>g.onEvent?.({event:h,agent:n,input:t,messages:w,state:b}));if(m(x),x.stopPropagation===!0?i?.event("APPLY","Event dropped:",h,{type:h.type,reason:"stopPropagation by subscriber"}):i?.event("APPLY","Event applied:",h,{type:h.type,subscribers:r.length}),x.stopPropagation===!0)return p();switch(h.type){case v.TEXT_MESSAGE_START:{let g=await ae(r,a,s,(w,b,k)=>w.onTextMessageStartEvent?.({event:h,messages:b,state:k,agent:n,input:t}));if(m(g),g.stopPropagation!==!0){let{messageId:w,role:b="assistant",name:k,subagentRunId:O}=h,E=a.find(I=>I.id===w);if(E?.role==="activity")return console.warn(`TEXT_MESSAGE_START: Message '${w}' is an activity message \u2014 message ids must be unique across activity and text messages`),p();let S=E;if(!S){let I={id:w,role:b,content:"",...k!==void 0&&{name:k},...O!=null&&{subagentRunId:O}};a.push(I),S=I}let _=Qe(S,h);(!E||_)&&m({messages:a})}return p()}case v.TEXT_MESSAGE_CONTENT:{let{messageId:g,delta:w}=h,b=a.find(O=>O.id===g);if(!b)return console.warn(`TEXT_MESSAGE_CONTENT: No message found with ID '${g}'`),p();if(b.role==="activity")return console.warn(`TEXT_MESSAGE_CONTENT: Message '${g}' is an activity message \u2014 message ids must be unique across activity and text messages`),p();let k=await ae(r,a,s,(O,E,S)=>O.onTextMessageContentEvent?.({event:h,messages:E,state:S,agent:n,input:t,textMessageBuffer:typeof b.content=="string"?b.content:""}));return m(k),k.stopPropagation!==!0&&(b.content=`${typeof b.content=="string"?b.content:""}${w}`,Qe(b,h),m({messages:a})),p()}case v.TEXT_MESSAGE_END:{let{messageId:g}=h,w=a.find(k=>k.id===g);if(!w)return console.warn(`TEXT_MESSAGE_END: No message found with ID '${g}'`),p();if(w.role==="activity")return console.warn(`TEXT_MESSAGE_END: Message '${g}' is an activity message \u2014 message ids must be unique across activity and text messages`),p();let b=await ae(r,a,s,(k,O,E)=>k.onTextMessageEndEvent?.({event:h,messages:O,state:E,agent:n,input:t,textMessageBuffer:typeof w.content=="string"?w.content:""}));return m(b),b.stopPropagation!==!0&&Qe(w,h)&&m({messages:a}),await Promise.all(r.map(k=>{k.onNewMessage?.({message:w,messages:a,state:s,agent:n,input:t})})),p()}case v.TOOL_CALL_START:{let g=await ae(r,a,s,(w,b,k)=>w.onToolCallStartEvent?.({event:h,messages:b,state:k,agent:n,input:t}));if(m(g),g.stopPropagation!==!0){let{toolCallId:w,toolCallName:b,parentMessageId:k,subagentRunId:O}=h;l.includes(w)||l.push(w);let E=a.find(L=>L.toolCalls?.some(Y=>Y.id===w))?.toolCalls?.find(L=>L.id===w);if(E){let L=E.function.name!==b;return L&&(console.warn(`TOOL_CALL_START: tool call '${w}' already exists with name '${E.function.name}' \u2014 updating it to '${b}'`),E.function.name=b),(Qe(E,h)||L)&&m({messages:a}),p()}let S=new Set(a.map(L=>L.id)),_=cT(a,k,w);!S.has(_.id)&&O!=null&&_.subagentRunId===void 0&&(_.subagentRunId=O),_.toolCalls??=[];let I={id:w,type:"function",function:{name:b,arguments:""}};_.toolCalls.push(I),Qe(I,h),m({messages:a})}return p()}case v.TOOL_CALL_ARGS:{let{toolCallId:g,delta:w}=h,b=a.find(E=>E.toolCalls?.some(S=>S.id===g));if(!b)return console.warn(`TOOL_CALL_ARGS: No message found containing tool call with ID '${g}'`),p();let k=b.toolCalls?.find(E=>E.id===g);if(!k)return console.warn(`TOOL_CALL_ARGS: No tool call found with ID '${g}'`),p();let O=await ae(r,a,s,(E,S,_)=>{let I=k.function.arguments,L=k.function.name,Y={};try{Y=Oi(I)}catch{}return E.onToolCallArgsEvent?.({event:h,messages:S,state:_,agent:n,input:t,toolCallBuffer:I,toolCallName:L,partialToolCallArgs:Y})});return m(O),O.stopPropagation!==!0&&(k.function.arguments+=w,Qe(k,h),m({messages:a})),p()}case v.TOOL_CALL_END:{let{toolCallId:g}=h,w=a.find(O=>O.toolCalls?.some(E=>E.id===g));if(!w)return console.warn(`TOOL_CALL_END: No message found containing tool call with ID '${g}'`),p();let b=w.toolCalls?.find(O=>O.id===g);if(!b)return console.warn(`TOOL_CALL_END: No tool call found with ID '${g}'`),p();let k=await ae(r,a,s,(O,E,S)=>{let _=b.function.arguments,I=b.function.name,L={};try{L=JSON.parse(_)}catch{}return O.onToolCallEndEvent?.({event:h,messages:E,state:S,agent:n,input:t,toolCallName:I,toolCallArgs:L})});return m(k),k.stopPropagation!==!0&&Qe(b,h)&&m({messages:a}),await Promise.all(r.map(O=>{O.onNewToolCall?.({toolCall:b,messages:a,state:s,agent:n,input:t})})),p()}case v.TOOL_CALL_RESULT:{let g=await ae(r,a,s,(w,b,k)=>w.onToolCallResultEvent?.({event:h,messages:b,state:k,agent:n,input:t}));if(m(g),g.stopPropagation!==!0){let{messageId:w,toolCallId:b,content:k,role:O,subagentRunId:E}=h;u.add(b);let S=a.findIndex(I=>I.id===w&&I.role==="tool"&&I.toolCallId===b),_={...S===-1?{}:a[S],id:w,toolCallId:b,role:O||"tool",content:k,...E!=null&&{subagentRunId:E}};if(E??delete _.subagentRunId,Qe(_,h),S!==-1)a[S]=_;else{let I=a.findIndex(L=>L.role==="assistant"&&L.toolCalls?.some(Y=>Y.id===b));if(I===-1)a.push(_);else{let L=I+1;for(;L<a.length&&a[L].role==="tool";)L++;a.splice(L,0,_)}await Promise.all(r.map(L=>{L.onNewMessage?.({message:_,messages:a,state:s,agent:n,input:t})}))}m({messages:a})}return p()}case v.STATE_SNAPSHOT:{let g=await ae(r,a,s,(w,b,k)=>w.onStateSnapshotEvent?.({event:h,messages:b,state:k,agent:n,input:t}));if(m(g),g.stopPropagation!==!0){let{snapshot:w}=h;s=w,m({state:s})}return p()}case v.STATE_DELTA:{let g=await ae(r,a,s,(w,b,k)=>w.onStateDeltaEvent?.({event:h,messages:b,state:k,agent:n,input:t}));if(m(g),g.stopPropagation!==!0){let{delta:w}=h;try{s=ai.applyPatch(s,w,!0,!1).newDocument,m({state:s})}catch(b){let k=b instanceof Error?b.message:String(b);console.warn(`Failed to apply state patch:
Current state: ${JSON.stringify(s,null,2)}
Patch operations: ${JSON.stringify(w,null,2)}
Error: ${k}`)}}return p()}case v.MESSAGES_SNAPSHOT:{let g=await ae(r,a,s,(w,b,k)=>w.onMessagesSnapshotEvent?.({event:h,messages:b,state:k,agent:n,input:t}));if(m(g),g.stopPropagation!==!0){let{messages:w}=h,b=w.map(L=>{if(L.subagentRunId!==null)return L;let Y={...L};return delete Y.subagentRunId,Y}),k=new Map(b.map(L=>[L.id,L])),O=sT(h),E=b.some(L=>L.role==="activity"),S=b.some(L=>L.role==="reasoning"),_=L=>L.role==="activity"&&(O?!O.includes(L.activityType):O!==null&&!E)||L.role==="reasoning"&&!S;a=a.filter(L=>k.has(L.id)||_(L)).map(L=>k.get(L.id)??L);let I=new Set(a.map(L=>L.id));for(let L of b)I.has(L.id)||a.push(L);m({messages:a})}return p()}case v.ACTIVITY_SNAPSHOT:{let g=h,w=a.findIndex(S=>S.id===g.messageId),b=w>=0?a[w]:void 0,k=b?.role==="activity"?b:void 0,O=g.replace??!0,E=await ae(r,a,s,(S,_,I)=>S.onActivitySnapshotEvent?.({event:g,messages:_,state:I,agent:n,input:t,activityMessage:k,existingMessage:b}));if(m(E),E.stopPropagation!==!0){let S={id:g.messageId,role:"activity",activityType:g.activityType,content:ne(g.content),...g.subagentRunId!=null&&{subagentRunId:g.subagentRunId}},_,I;w===-1?(a.push(S),_=S,I=S):k?(O&&(a[w]={...k,activityType:g.activityType,content:ne(g.content),subagentRunId:g.subagentRunId},g.subagentRunId??delete a[w].subagentRunId),I=a[w]):O&&(a[w]=S,_=S,I=S),Qe(I,g),m({messages:a}),_&&await Promise.all(r.map(L=>L.onNewMessage?.({message:_,messages:a,state:s,agent:n,input:t})))}return p()}case v.ACTIVITY_DELTA:{let g=h,w=a.findIndex(E=>E.id===g.messageId);if(w===-1)return p();let b=a[w];if(b.role!=="activity")return console.warn(`ACTIVITY_DELTA: Message '${g.messageId}' is not an activity message`),p();let k=b,O=await ae(r,a,s,(E,S,_)=>E.onActivityDeltaEvent?.({event:g,messages:S,state:_,agent:n,input:t,activityMessage:k}));if(m(O),O.stopPropagation!==!0)try{Qe(k,g)&&m({messages:a});let E=ne(k.content??{}),S=ai.applyPatch(E,g.patch??[],!0,!1).newDocument;a[w]={...k,content:ne(S),activityType:g.activityType},m({messages:a})}catch(E){let S=E instanceof Error?E.message:String(E);console.warn(`Failed to apply activity patch for '${g.messageId}': ${S}`)}return p()}case v.RAW:return m(await ae(r,a,s,(g,w,b)=>g.onRawEvent?.({event:h,messages:w,state:b,agent:n,input:t}))),p();case v.CUSTOM:return m(await ae(r,a,s,(g,w,b)=>g.onCustomEvent?.({event:h,messages:w,state:b,agent:n,input:t}))),p();case v.RUN_STARTED:{let g=await ae(r,a,s,(w,b,k)=>w.onRunStartedEvent?.({event:h,messages:b,state:k,agent:n,input:t}));if(m(g),l=[],u=new Set,g.stopPropagation!==!0){let w=h;if(w.input?.messages){for(let b of w.input.messages){let k=b;if(b.subagentRunId===null){let O={...b};delete O.subagentRunId,k=O}a.find(O=>O.id===k.id)||a.push(k)}m({messages:a})}}return p()}case v.RUN_FINISHED:{let g=h,w=g.outcome?.type==="interrupt"?{event:g,outcome:"interrupt",interrupts:g.outcome.interrupts}:g.outcome?.type==="cancelled"?{event:g,outcome:"cancelled"}:{event:g,outcome:"success",result:g.result,pendingToolCallIds:f(g)},b=await ae(r,a,s,(k,O,E)=>k.onRunFinishedEvent?.({...w,messages:O,state:E,agent:n,input:t}));return m(b),b.stopPropagation!==!0&&(n.pendingInterrupts=w.outcome==="interrupt"?w.interrupts.map(k=>{if(k.subagentRunId!==null)return k;let O={...k};return delete O.subagentRunId,O}):[]),p()}case v.RUN_ERROR:return m(await ae(r,a,s,(g,w,b)=>g.onRunErrorEvent?.({event:h,messages:w,state:b,agent:n,input:t}))),p();case v.STEP_STARTED:return m(await ae(r,a,s,(g,w,b)=>g.onStepStartedEvent?.({event:h,messages:w,state:b,agent:n,input:t}))),p();case v.STEP_FINISHED:return m(await ae(r,a,s,(g,w,b)=>g.onStepFinishedEvent?.({event:h,messages:w,state:b,agent:n,input:t}))),p();case v.TEXT_MESSAGE_CHUNK:throw Error("TEXT_MESSAGE_CHUNK must be transformed before being applied");case v.TOOL_CALL_CHUNK:throw Error("TOOL_CALL_CHUNK must be transformed before being applied");case v.REASONING_START:return m(await ae(r,a,s,(g,w,b)=>g.onReasoningStartEvent?.({event:h,messages:w,state:b,agent:n,input:t}))),p();case v.REASONING_MESSAGE_START:{let g=await ae(r,a,s,(w,b,k)=>w.onReasoningMessageStartEvent?.({event:h,messages:b,state:k,agent:n,input:t}));if(m(g),g.stopPropagation!==!0){let{messageId:w,subagentRunId:b}=h,k=a.find(S=>S.id===w);if(k?.role==="activity")return console.warn(`REASONING_MESSAGE_START: Message '${w}' is an activity message \u2014 message ids must be unique across activity and reasoning messages`),p();let O=k;if(!O){let S={id:w,role:"reasoning",content:"",...b!=null&&{subagentRunId:b}};a.push(S),O=S}let E=Qe(O,h);(!k||E)&&m({messages:a})}return p()}case v.REASONING_MESSAGE_CONTENT:{let{messageId:g,delta:w}=h,b=a.find(O=>O.id===g);if(!b)return console.warn(`REASONING_MESSAGE_CONTENT: No message found with ID '${g}'`),p();if(b.role==="activity")return console.warn(`REASONING_MESSAGE_CONTENT: Message '${g}' is an activity message \u2014 message ids must be unique across activity and reasoning messages`),p();let k=await ae(r,a,s,(O,E,S)=>O.onReasoningMessageContentEvent?.({event:h,messages:E,state:S,agent:n,input:t,reasoningMessageBuffer:typeof b.content=="string"?b.content:""}));return m(k),k.stopPropagation!==!0&&(b.content=`${typeof b.content=="string"?b.content:""}${w}`,Qe(b,h),m({messages:a})),p()}case v.REASONING_MESSAGE_END:{let{messageId:g}=h,w=a.find(k=>k.id===g);if(!w)return console.warn(`REASONING_MESSAGE_END: No message found with ID '${g}'`),p();if(w.role==="activity")return console.warn(`REASONING_MESSAGE_END: Message '${g}' is an activity message \u2014 message ids must be unique across activity and reasoning messages`),p();let b=await ae(r,a,s,(k,O,E)=>k.onReasoningMessageEndEvent?.({event:h,messages:O,state:E,agent:n,input:t,reasoningMessageBuffer:typeof w.content=="string"?w.content:""}));return m(b),b.stopPropagation!==!0&&Qe(w,h)&&m({messages:a}),await Promise.all(r.map(k=>{k.onNewMessage?.({message:w,messages:a,state:s,agent:n,input:t})})),p()}case v.REASONING_MESSAGE_CHUNK:throw Error("REASONING_MESSAGE_CHUNK must be transformed before being applied");case v.REASONING_END:return m(await ae(r,a,s,(g,w,b)=>g.onReasoningEndEvent?.({event:h,messages:w,state:b,agent:n,input:t}))),p();case v.REASONING_ENCRYPTED_VALUE:{let{subtype:g,entityId:w,encryptedValue:b}=h,k=await ae(r,a,s,(O,E,S)=>O.onReasoningEncryptedValueEvent?.({event:h,messages:E,state:S,agent:n,input:t}));if(m(k),k.stopPropagation!==!0){let O=!1;if(g==="tool-call"){for(let E of a)if(E.role==="assistant"&&E.toolCalls){let S=E.toolCalls.find(_=>_.id===w);if(S){S.encryptedValue=b,O=!0;break}}}else{let E=a.find(S=>S.id===w);E?.role!=="activity"&&E&&(E.encryptedValue=b,O=!0)}O&&(c.messages=a)}return p()}case v.SUBAGENT_STARTED:return m(await ae(r,a,s,(g,w,b)=>g.onSubagentStartedEvent?.({event:h,messages:w,state:b,agent:n,input:t}))),p();case v.SUBAGENT_FINISHED:return m(await ae(r,a,s,(g,w,b)=>g.onSubagentFinishedEvent?.({event:h,messages:w,state:b,agent:n,input:t}))),p();case v.SUBAGENT_ERROR:return m(await ae(r,a,s,(g,w,b)=>g.onSubagentErrorEvent?.({event:h,messages:w,state:b,agent:n,input:t}))),p()}return h.type,p()}),Ur(),r.length>0?yc({}):h=>h)};function Qa(t,e){typeof process<"u"&&process.env!==void 0&&process.env.SUPPRESS_TRANSFORMATION_WARNINGS||console.warn(`[ag-ui][compat] Converting deprecated ${t} to ${e}. The old shape leaves the protocol after its shim window \u2014 see the repo-root DEPRECATIONS.md. Set SUPPRESS_TRANSFORMATION_WARNINGS=true to silence.`)}var zu=t=>e=>{let n=kn(t),r=new Set,o=new Set,i=new Set,a=new Set,s={message:new Map,toolCall:new Map,activity:new Map,reasoning:new Map},c=!1,l=!1,u=!1,f=new Map,m=E=>{let S=f.get(E);return S||(S=new Map,f.set(E,S)),S},p=()=>{for(let E of f.values())if(E.size>0)return!0;return!1},h=new Map,x=new Set,g=!1,w=!1,b=()=>{w=!1,r.clear(),o.clear(),i.clear(),a.clear(),s.message.clear(),s.toolCall.clear(),s.activity.clear(),s.reasoning.clear(),f.clear(),h.clear(),x.clear(),c=!1,l=!1,g=!0},k=(E,S)=>{let _=E??[];if(Array.isArray(_))for(let I of _){if(!I||typeof I.id!="string")continue;if(I.subagentRunId===null)return new j(`Cannot send a message (id '${I.id}') with 'subagentRunId: null'. The field is optional \u2014 omit it entirely.`);let L=I.role==="reasoning"?s.reasoning:I.role==="activity"?s.activity:s.message;(S||!L.has(I.id))&&L.set(I.id,{subagentRunId:I.subagentRunId});for(let Y of I.toolCalls??[])Y&&typeof Y.id=="string"&&(S||!s.toolCall.has(Y.id))&&s.toolCall.set(Y.id,{subagentRunId:I.subagentRunId??void 0})}},O=(E,S,_,I,L)=>{if(S!==void 0&&_&&_.subagentRunId!==S)return new j(`Cannot send '${E}': subagentRunId '${S}' does not match the ${I} '${L}' opener's subagent '${_.subagentRunId??"(the parent agent)"}'.`)};return e.pipe(We(E=>{let S=E.type;if(n?.event("VERIFY","Event:",E,{type:E.type}),l&&S!==v.RUN_STARTED)return F(()=>new j(`Cannot send event type '${S}': The run has already errored with 'RUN_ERROR'. No further events can be sent.`));if(c&&S!==v.RUN_ERROR&&S!==v.RUN_STARTED)return F(()=>new j(`Cannot send event type '${S}': The run has already finished with 'RUN_FINISHED'. Start a new run with 'RUN_STARTED'.`));if(u){if(S===v.RUN_STARTED){if(g&&!c&&!l)return F(()=>new j("Cannot send 'RUN_STARTED' while a run is still active. The previous run must be finished with 'RUN_FINISHED' before starting a new run."));(c||l)&&b()}}else if(u=!0,S!==v.RUN_STARTED&&S!==v.RUN_ERROR)return F(()=>new j("First event must be 'RUN_STARTED'"));if(E.subagentRunId===null){w||(w=!0,Qa("subagentRunId: null","an absent field"));let{subagentRunId:_,...I}=E;E=I}if(S===v.SUBAGENT_STARTED||S===v.SUBAGENT_FINISHED||S===v.SUBAGENT_ERROR){let _=S===v.SUBAGENT_STARTED?["description","parentSubagentRunId","parentToolCallId","parentMessageId"]:S===v.SUBAGENT_FINISHED?["outcome"]:["code"];for(let L of _)if(E[L]===null)return F(()=>new j(`Cannot send '${S}' with '${L}: null'. The field is optional \u2014 omit it entirely.`));let I=E.outcome;if(I!=null&&I.type!=="success"&&I.type!=="suspended")return F(()=>new j(`Cannot send '${S}' with outcome type '${String(I.type)}'. The outcome is either { type: "success" } or { type: "suspended" }.`));if(I&&I.interruptIds===null)return F(()=>new j(`Cannot send '${S}' with 'outcome.interruptIds: null'. The field is optional \u2014 omit it entirely.`));if(I&&Array.isArray(I.interruptIds)&&I.interruptIds.some(L=>typeof L!="string"))return F(()=>new j(`Cannot send '${S}' with a non-string entry in 'outcome.interruptIds'. Interrupt ids are strings.`))}if(S===v.RUN_FINISHED){let _=E.outcome;if(_?.type==="interrupt"&&Array.isArray(_.interrupts)){for(let I of _.interrupts)if(I&&I.subagentRunId===null)return F(()=>new j(`Cannot send 'RUN_FINISHED' with an interrupt (id '${I.id}') carrying 'subagentRunId: null'. The field is optional \u2014 omit it entirely.`))}}switch(S){case v.TEXT_MESSAGE_START:{let _=E.messageId;if(r.has(_))return F(()=>new j(`Cannot send 'TEXT_MESSAGE_START' event: A text message with ID '${_}' is already in progress. Complete it with 'TEXT_MESSAGE_END' first.`));let I=s.message.get(_);if(I){let L=O(S,E.subagentRunId,I,"message",_);if(L)return F(()=>L)}return r.add(_),I||s.message.set(_,{subagentRunId:E.subagentRunId}),ue(E)}case v.TEXT_MESSAGE_CONTENT:{let _=E.messageId;if(!r.has(_))return F(()=>new j(`Cannot send 'TEXT_MESSAGE_CONTENT' event: No active text message found with ID '${_}'. Start a text message with 'TEXT_MESSAGE_START' first.`));let I=O(S,E.subagentRunId,s.message.get(_),"message",_);return I?F(()=>I):ue(E)}case v.TEXT_MESSAGE_END:{let _=E.messageId;if(!r.has(_))return F(()=>new j(`Cannot send 'TEXT_MESSAGE_END' event: No active text message found with ID '${_}'. A 'TEXT_MESSAGE_START' event must be sent first.`));let I=O(S,E.subagentRunId,s.message.get(_),"message",_);return I?F(()=>I):(r.delete(_),ue(E))}case v.TOOL_CALL_START:{let _=E.toolCallId;if(o.has(_))return F(()=>new j(`Cannot send 'TOOL_CALL_START' event: A tool call with ID '${_}' is already in progress. Complete it with 'TOOL_CALL_END' first.`));let I=E.parentMessageId,L=E.subagentRunId,Y;if(I!==void 0){let Ne=s.message.get(I);if(Ne){if(L!==void 0&&L!==Ne.subagentRunId)return F(()=>new j(`Cannot send 'TOOL_CALL_START': subagentRunId '${L}' does not match its parent message '${I}' owner '${Ne.subagentRunId??"(the parent agent)"}'. A tool call belongs to the message that carries it.`));Y=Ne}}let X=s.toolCall.get(_);if(X){let Ne=O(S,L,X,"tool call",_);if(Ne)return F(()=>Ne);if(L===void 0&&Y&&Y.subagentRunId!==X.subagentRunId)return F(()=>new j(`Cannot send 'TOOL_CALL_START': tool call '${_}' is owned by '${X.subagentRunId??"(the parent agent)"}' but its parent message '${I}' is owned by '${Y.subagentRunId??"(the parent agent)"}'. A tool call belongs to the message that carries it.`))}return o.add(_),X||s.toolCall.set(_,L===void 0?Y??{subagentRunId:void 0}:{subagentRunId:L}),ue(E)}case v.TOOL_CALL_ARGS:{let _=E.toolCallId;if(!o.has(_))return F(()=>new j(`Cannot send 'TOOL_CALL_ARGS' event: No active tool call found with ID '${_}'. Start a tool call with 'TOOL_CALL_START' first.`));let I=O(S,E.subagentRunId,s.toolCall.get(_),"tool call",_);return I?F(()=>I):ue(E)}case v.TOOL_CALL_END:{let _=E.toolCallId;if(!o.has(_))return F(()=>new j(`Cannot send 'TOOL_CALL_END' event: No active tool call found with ID '${_}'. A 'TOOL_CALL_START' event must be sent first.`));let I=O(S,E.subagentRunId,s.toolCall.get(_),"tool call",_);return I?F(()=>I):(o.delete(_),ue(E))}case v.STEP_STARTED:{let _=E.stepName,I=E.subagentRunId;return m(I).has(_)?F(()=>new j(`Step "${_}" is already active for 'STEP_STARTED'${I===void 0?"":` in subagent '${I}'`}`)):(m(I).set(_,!0),ue(E))}case v.STEP_FINISHED:{let _=E.stepName,I=E.subagentRunId;if(!m(I).has(_)){let L,Y=!1;for(let[X,Ne]of f)if(X!==I&&Ne.has(_)){L=X,Y=!0;break}return F(Y?()=>new j(`Cannot send 'STEP_FINISHED' for step "${_}" attributed to ${I===void 0?"the parent agent":`subagent '${I}'`}: that step is open under ${L===void 0?"the parent agent":`subagent '${L}'`}. A step must be finished by whoever started it.`):()=>new j(`Cannot send 'STEP_FINISHED' for step "${_}" that was not started`))}return m(I).delete(_),ue(E)}case v.ACTIVITY_SNAPSHOT:{let _=E.messageId;return(!s.activity.has(_)||E.replace!==!1)&&s.activity.set(_,{subagentRunId:E.subagentRunId}),ue(E)}case v.TOOL_CALL_RESULT:{let _=E.messageId;return typeof _=="string"&&s.message.set(_,{subagentRunId:E.subagentRunId}),ue(E)}case v.REASONING_START:case v.REASONING_MESSAGE_START:{let _=E.messageId,I=S===v.REASONING_START,L=I?i:a;if(L.has(_))return F(()=>new j(I?`Cannot send 'REASONING_START' event: A reasoning span with ID '${_}' is already in progress. Complete it with 'REASONING_END' first.`:`Cannot send 'REASONING_MESSAGE_START' event: A reasoning message with ID '${_}' is already in progress. Complete it with 'REASONING_MESSAGE_END' first.`));let Y=s.reasoning.get(_);if(Y){let X=O(S,E.subagentRunId,Y,"reasoning message",_);if(X)return F(()=>X)}return L.add(_),Y||s.reasoning.set(_,{subagentRunId:E.subagentRunId}),ue(E)}case v.REASONING_MESSAGE_CONTENT:case v.REASONING_MESSAGE_END:case v.REASONING_END:{let _=E.messageId,I=S===v.REASONING_END,L=I?i:a;if(!L.has(_))return F(()=>new j(I?`Cannot send 'REASONING_END' event: No active reasoning span found with ID '${_}'. A 'REASONING_START' event must be sent first.`:`Cannot send '${S}' event: No active reasoning message found with ID '${_}'. Start a reasoning message with 'REASONING_MESSAGE_START' first.`));let Y=O(S,E.subagentRunId,s.reasoning.get(_),"reasoning message",_);return Y?F(()=>Y):((S===v.REASONING_END||S===v.REASONING_MESSAGE_END)&&L.delete(_),ue(E))}case v.REASONING_ENCRYPTED_VALUE:{let _=E.entityId,I=E.subtype,L=I==="tool-call"?s.toolCall.get(_):I==="message"?s.message.get(_)??s.reasoning.get(_):s.reasoning.get(_),Y=I==="tool-call"?"tool call":I==="message"?"message":"reasoning message",X=O(S,E.subagentRunId,L,Y,_);return X?F(()=>X):ue(E)}case v.ACTIVITY_DELTA:{let _=E.messageId,I=O(S,E.subagentRunId,s.activity.get(_),"activity",_);return I?F(()=>I):ue(E)}case v.SUBAGENT_STARTED:{if(typeof E.subagentRunId!="string")return F(()=>new j("Cannot send 'SUBAGENT_STARTED' without a 'subagentRunId'."));if(typeof E.name!="string")return F(()=>new j("Cannot send 'SUBAGENT_STARTED' without a 'name'."));let _=E.subagentRunId,I=E.parentSubagentRunId;return h.has(_)?F(()=>new j(`Cannot send 'SUBAGENT_STARTED': subagent '${_}' is already active. Finish it with 'SUBAGENT_FINISHED' first.`)):x.has(_)?F(()=>new j(`Cannot send 'SUBAGENT_STARTED': subagent '${_}' has already finished in this run. Subagent IDs are per-invocation and cannot be reused.`)):I!==void 0&&!h.has(I)&&!x.has(I)?F(()=>new j(`Cannot send 'SUBAGENT_STARTED': parentSubagentRunId '${I}' has not been started in this run.`)):(h.set(_,!0),ue(E))}case v.SUBAGENT_FINISHED:case v.SUBAGENT_ERROR:{if(typeof E.subagentRunId!="string")return F(()=>new j(`Cannot send '${S}' without a 'subagentRunId'.`));if(S===v.SUBAGENT_ERROR&&typeof E.message!="string")return F(()=>new j("Cannot send 'SUBAGENT_ERROR' without a 'message'."));let _=E.subagentRunId;return h.has(_)?(h.delete(_),x.add(_),ue(E)):F(()=>new j(`Cannot send '${S}': no active subagent found with ID '${_}'. A 'SUBAGENT_STARTED' event must be sent first.`))}case v.MESSAGES_SNAPSHOT:{let _=k(E.messages,!0);if(_)return F(()=>_)}return ue(E);case v.RUN_STARTED:g=!0;{let _=k((E.input??{}).messages,!1);if(_)return F(()=>_)}return ue(E);case v.RUN_FINISHED:if(p()){let _=[];for(let[L,Y]of f)for(let X of Y.keys())_.push(L===void 0?X:`${X} (subagent '${L}')`);let I=_.join(", ");return F(()=>new j(`Cannot send 'RUN_FINISHED' while steps are still active: ${I}`))}if(r.size>0){let _=Array.from(r.keys()).join(", ");return F(()=>new j(`Cannot send 'RUN_FINISHED' while text messages are still active: ${_}`))}if(a.size>0){let _=Array.from(a.keys()).join(", ");return F(()=>new j(`Cannot send 'RUN_FINISHED' while reasoning messages are still active: ${_}`))}if(i.size>0){let _=Array.from(i.keys()).join(", ");return F(()=>new j(`Cannot send 'RUN_FINISHED' while reasoning spans are still active: ${_}`))}if(o.size>0){let _=Array.from(o.keys()).join(", ");return F(()=>new j(`Cannot send 'RUN_FINISHED' while tool calls are still active: ${_}`))}if(h.size>0){let _=Array.from(h.keys()).join(", ");return F(()=>new j(`Cannot send 'RUN_FINISHED' while subagents are still active: ${_}`))}return c=!0,ue(E);case v.RUN_ERROR:return l=!0,ue(E);case v.CUSTOM:return ue(E);default:return ue(E)}}))},An=(function(t){return t.HEADERS="headers",t.DATA="data",t})({}),uT=t=>hn(()=>Pt(t())).pipe(wc(e=>{if(!e.ok){let o=e.headers.get("content-type")||"";return Pt(e.text()).pipe(We(i=>{let a=i;if(o.includes("application/json"))try{a=JSON.parse(i)}catch{}let s=Error(`HTTP ${e.status}: ${typeof a=="string"?a:JSON.stringify(a)}`);return s.status=e.status,s.payload=a,F(()=>s)}))}let n={type:An.HEADERS,status:e.status,headers:e.headers},r=e.body?.getReader();return r?new ve(o=>{let i=!1;return o.next(n),(async()=>{try{for(;!o.closed;){let{done:a,value:s}=await r.read();if(a){i=!0;break}let c={type:An.DATA,data:s};o.next(c)}o.complete()}catch(a){i=!0,o.error(a)}})(),()=>{i||r.cancel().catch(a=>{a?.name!=="AbortError"&&console.warn("Failed to cancel HTTP response stream:",a)})}}):F(()=>Error("Failed to getReader() from response"))})),sb=10*1024*1024,dT=(t,e)=>{let n=kn(e),r=new St,o=new TextDecoder("utf-8",{fatal:!1}),i="";t.subscribe({next:s=>{if(s.type!==An.HEADERS&&s.type===An.DATA&&s.data){let c=o.decode(s.data,{stream:!0});i+=c;let l=i.split(/\n\n/);i=l.pop()||"";for(let u of l)a(u);if(i.length>sb){r.error(Error(`SSE buffer size exceeded maximum limit of ${sb/(1024*1024)} MB`));return}}},error:s=>r.error(s),complete:()=>{i&&(i+=o.decode(),a(i)),r.complete()}});function a(s){let c=s.split(`
`),l=[];for(let u of c)u.startsWith("data:")&&l.push(u.slice(5).replace(/^ /,""));if(l.length>0)try{let u=l.join(`
`),f=JSON.parse(u);n?.event("SSE","Event received:",f,{type:f?.type}),r.next(f)}catch(u){r.error(u)}}return r.asObservable()},lb=10*1024*1024,pT=()=>typeof process<"u"&&process.env!==void 0&&!!process.env.SUPPRESS_TRANSFORMATION_WARNINGS,hT=(t,e)=>{let n=kn(e),r=new St,o=new Uint8Array,i=!1;t.subscribe({next:s=>{if(s.type!==An.HEADERS&&s.type===An.DATA&&s.data){let c=new Uint8Array(o.length+s.data.length);c.set(o,0),c.set(s.data,o.length),o=c,a()}},error:s=>r.error(s),complete:()=>{if(a(),!i){if(o.length>0){r.error(Error(`The binary stream ended mid-frame: ${o.length} trailing bytes could not be read as a complete message.`));return}r.complete()}}});function a(){if(!i)for(;o.length>=4;){let s=4+new DataView(o.buffer,o.byteOffset,4).getUint32(0,!1);if(s>lb){r.error(Error(`Protobuf message size exceeded maximum limit of ${lb/(1024*1024)} MB`));return}if(o.length<s)break;try{let c=o.slice(4,s),l=tb(c);n?.event("PROTO","Event received:",l,{type:l.type}),r.next(l)}catch(c){if(c instanceof Ru)pT()||console.warn("[ag-ui][proto] Dropped an event this build does not know: the protocol has a variant this SDK predates.");else{let l=c instanceof Error?c.message:String(c);i=!0,r.error(Error(`Failed to decode protocol buffer message: ${l}`));return}}o=o.slice(s)}}return r.asObservable()},fT=(t,e)=>{let n=kn(e),r=new St,o=new fi(1),i=!1,a,s=!1,c=()=>{s=!0,a?.unsubscribe()},l=f=>{c(),r.error(f)},u=()=>{c(),r.complete()};return a=t.subscribe({next:f=>{if(o.next(f),f.type===An.HEADERS&&!i){i=!0;let m=f.headers.get("content-type");n?.lifecycle("HTTP","Stream format detected:",{contentType:m,parser:m===Cu?"protobuf":"sse"}),m===Cu?hT(o,n).subscribe({next:p=>r.next(p),error:p=>l(p),complete:()=>u()}):dT(o,n).subscribe({next:p=>{if(typeof p!="object"||!p||Array.isArray(p)){let x=Error("Invalid event: the frame is not a JSON object.");n?.event("HTTP","Event invalid:",{json:p,error:String(x)}),l(x);return}let h=p;if(typeof h.type!="string"||h.type.length===0){let x=Error("Invalid event: the frame carries no event type.");n?.event("HTTP","Event invalid:",{json:p,error:String(x)}),l(x);return}n?.event("HTTP","Event received:",p,{type:h.type}),r.next(p)},error:p=>{if(p?.name==="AbortError"){r.next({type:v.RUN_ERROR,message:p.message||"Request aborted",code:"abort",rawEvent:p}),u();return}return l(p)},complete:()=>u()})}else i||l(Error("No headers event received before data events"))},error:f=>{o.error(f),l(f)},complete:()=>{o.complete()}}),s&&a.unsubscribe(),r.asObservable()},He={TextMessageStart:"TextMessageStart",TextMessageContent:"TextMessageContent",TextMessageEnd:"TextMessageEnd",ActionExecutionStart:"ActionExecutionStart",ActionExecutionArgs:"ActionExecutionArgs",ActionExecutionEnd:"ActionExecutionEnd",ActionExecutionResult:"ActionExecutionResult",AgentStateMessage:"AgentStateMessage",MetaEvent:"MetaEvent",RunStarted:"RunStarted",RunFinished:"RunFinished",RunError:"RunError",NodeStarted:"NodeStarted",NodeFinished:"NodeFinished"},mT=t=>{if(typeof t=="string")return t;if(!Array.isArray(t))return;let e=t.filter(n=>n.type==="text").map(n=>n.text).filter(n=>n.length>0);if(e.length!==0)return e.join(`
`)};function Sb(t,e){return th(e)&&Qr(`[ag-ui][legacy] The result of tool call '${t}' carries content parts the legacy protocol cannot represent; only its text parts are bridged and the rest is dropped.`),jn(e)}var Qr=t=>{typeof process<"u"&&process.env!==void 0&&process.env.SUPPRESS_TRANSFORMATION_WARNINGS||console.warn(t)},gT=(t,e,n)=>r=>{let o={},i=!0,a=!0,s="",c=null,l=null,u=[],f={},m=!1,p=h=>{typeof h=="object"&&h&&("messages"in h&&delete h.messages,o=h)};return r.pipe(We(h=>{switch(h.type){case v.TEXT_MESSAGE_START:{let x=h;return[{type:He.TextMessageStart,messageId:x.messageId,role:x.role}]}case v.TEXT_MESSAGE_CONTENT:{let x=h;return[{type:He.TextMessageContent,messageId:x.messageId,content:x.delta}]}case v.TEXT_MESSAGE_END:{let x=h;return[{type:He.TextMessageEnd,messageId:x.messageId}]}case v.TOOL_CALL_START:{let x=h;return u.push({id:x.toolCallId,type:"function",function:{name:x.toolCallName,arguments:""}}),a=!0,f[x.toolCallId]=x.toolCallName,[{type:He.ActionExecutionStart,actionExecutionId:x.toolCallId,actionName:x.toolCallName,parentMessageId:x.parentMessageId}]}case v.TOOL_CALL_ARGS:{let x=h,g=u.find(b=>b.id===x.toolCallId);if(!g)return Qr(`[ag-ui][legacy] TOOL_CALL_ARGS: No tool call found with ID '${x.toolCallId}'`),[];g.function.arguments+=x.delta;let w=!1;if(l){let b=l.find(k=>k.tool==g.function.name);if(b)try{let k=JSON.parse(Oi(g.function.arguments));b.tool_argument&&b.tool_argument in k?(p({...o,[b.state_key]:k[b.tool_argument]}),w=!0):b.tool_argument||(p({...o,[b.state_key]:k}),w=!0)}catch{}}return[{type:He.ActionExecutionArgs,actionExecutionId:x.toolCallId,args:x.delta},...w?[{type:He.AgentStateMessage,threadId:t,agentName:n,nodeName:s,runId:e,running:i,role:"assistant",state:JSON.stringify(o),active:a}]:[]]}case v.TOOL_CALL_END:{let x=h;return[{type:He.ActionExecutionEnd,actionExecutionId:x.toolCallId}]}case v.TOOL_CALL_RESULT:{let x=h,g=f[x.toolCallId];return(g===void 0||g==="")&&Qr(`[ag-ui][legacy] No usable tool name was seen for tool call '${x.toolCallId}' (${g===void 0?"no TOOL_CALL_START reached this bridge":"its TOOL_CALL_START carried an empty toolCallName"}), so its result is being bridged with the fabricated action name "unknown". Downstream consumers route on that name.`),[{type:He.ActionExecutionResult,actionExecutionId:x.toolCallId,result:Sb(x.toolCallId,x.content),actionName:g||"unknown"}]}case v.RAW:return m||(m=!0,Qr("[ag-ui][legacy] Dropping RAW events: the legacy runtime protocol has no equivalent, so the provider payloads they carry do not reach the legacy stream. Reported once per stream.")),[];case v.CUSTOM:{let x=h;switch(x.name){case"Exit":i=!1;break;case"PredictState":l=x.value;break}return[{type:He.MetaEvent,name:x.name,value:x.value}]}case v.STATE_SNAPSHOT:return p(h.snapshot),[{type:He.AgentStateMessage,threadId:t,agentName:n,nodeName:s,runId:e,running:i,role:"assistant",state:JSON.stringify(o),active:a}];case v.STATE_DELTA:{let x=h,g;try{g=ai.applyPatch(o,x.delta,!0,!1).newDocument}catch(w){let b=w instanceof Error?w.message:String(w);return Qr(`[ag-ui][legacy] Failed to apply state patch:
Current state: ${JSON.stringify(o,null,2)}
Patch operations: ${JSON.stringify(x.delta,null,2)}
Error: ${b}`),[]}return p(g),[{type:He.AgentStateMessage,threadId:t,agentName:n,nodeName:s,runId:e,running:i,role:"assistant",state:JSON.stringify(o),active:a}]}case v.MESSAGES_SNAPSHOT:return c=h.messages,[{type:He.AgentStateMessage,threadId:t,agentName:n,nodeName:s,runId:e,running:i,role:"assistant",state:JSON.stringify({...o,...c?{messages:c}:{}}),active:!0}];case v.RUN_STARTED:return[];case v.RUN_FINISHED:{if(c&&(o.messages=c),Object.keys(o).length===0)return[];let x=null;if(c)try{x=vT(c)}catch(g){return[{type:He.RunError,message:g.message}]}return[{type:He.AgentStateMessage,threadId:t,agentName:n,nodeName:s,runId:e,running:i,role:"assistant",state:JSON.stringify({...o,...x?{messages:x}:{}}),active:!1}]}case v.RUN_ERROR:{let x=h;return[{type:He.RunError,message:x.message,code:x.code}]}case v.STEP_STARTED:return s=h.stepName,u=[],l=null,[{type:He.AgentStateMessage,threadId:t,agentName:n,nodeName:s,runId:e,running:i,role:"assistant",state:JSON.stringify(o),active:!0}];case v.STEP_FINISHED:return u=[],l=null,[{type:He.AgentStateMessage,threadId:t,agentName:n,nodeName:s,runId:e,running:i,role:"assistant",state:JSON.stringify(o),active:!1}];default:return[]}}))};function vT(t){let e=[];for(let n of t)if(n.role==="assistant"||n.role==="user"||n.role==="system"){let r=mT(n.content);if(r){let o={id:n.id,role:n.role,content:r};e.push(o)}if(n.role==="assistant"&&n.toolCalls&&n.toolCalls.length>0)for(let o of n.toolCalls){let i;try{i=JSON.parse(o.function.arguments)}catch(s){throw Error(`Failed to parse arguments for tool call '${o.id}' (${o.function.name}): ${s.message}`)}let a={id:o.id,name:o.function.name,arguments:i,parentMessageId:n.id};e.push(a)}}else if(n.role==="tool"){let r="unknown";for(let i of t)if(i.role==="assistant"&&i.toolCalls?.length){for(let a of i.toolCalls)if(a.id===n.toolCallId){r=a.function.name;break}}let o={id:n.id,result:Sb(n.toolCallId,n.content),actionExecutionId:n.toolCallId,actionName:r};e.push(o)}return e}var bT=t=>t.kind==="tool"?t.fields.toolCallId:t.fields.messageId,yT=t=>t==="tool"?"toolCallId":"messageId",Wa=(t,e,n,r,o)=>{if(r!==void 0&&r!==o)throw Error(`Cannot continue ${t} '${e}': chunk ${n} '${r}' does not match the open stream's ${n} ${o===void 0?"(absent)":`'${o}'`}.`)},Ka=(t,e)=>e.metadata===void 0?t:{...t,metadata:e.metadata},Du=(t,e)=>{let n=Ka(t,e);return e.rawEvent===void 0?n:{...n,rawEvent:e.rawEvent}},Yu=t=>new Set(Object.keys(t.shape)),wT=Yu(uu),ET=Yu(du),xT=Yu(hu),$u=(t,e)=>{let n;for(let r of Object.keys(t))e.has(r)||((n??={})[r]=t[r]);return n},_T=t=>{typeof process<"u"&&process.env!==void 0&&process.env.SUPPRESS_TRANSFORMATION_WARNINGS||console.warn(`[ag-ui][transform] ${t} Set SUPPRESS_TRANSFORMATION_WARNINGS=true to silence.`)},Uu=(t,e,n,r)=>{if(e===void 0||n||t.length===0)return;let o=t[t.length-1],i=Object.keys(e).filter(a=>Object.prototype.hasOwnProperty.call(o,a));i.length>0&&_T(`A ${r} carried ${i.map(a=>`'${a}'`).join(", ")}, which the synthesized ${String(o.type)} already describes. The synthesized value is kept and the chunk's is dropped \u2014 this stage does not judge a described field, so the producer's value cannot be substituted for its own.`),t[t.length-1]={...e,...o}},Xa=t=>e=>{let n=kn(t),r=new Map,o=c=>{let l=r.get(c);if(!l)return[];switch(r.delete(c),l.kind){case"text":{let u={type:v.TEXT_MESSAGE_END,messageId:l.fields.messageId,...l.fields.subagentRunId!==void 0&&{subagentRunId:l.fields.subagentRunId}};return n?.event("TRANSFORM","TEXT_MESSAGE_END",u,{messageId:u.messageId}),[u]}case"tool":{let u={type:v.TOOL_CALL_END,toolCallId:l.fields.toolCallId,...l.fields.subagentRunId!==void 0&&{subagentRunId:l.fields.subagentRunId}};return n?.event("TRANSFORM","TOOL_CALL_END",u,{toolCallId:u.toolCallId}),[u]}case"reasoning":{let u={type:v.REASONING_MESSAGE_END,messageId:l.fields.messageId,...l.fields.subagentRunId!==void 0&&{subagentRunId:l.fields.subagentRunId}};return n?.event("TRANSFORM","REASONING_MESSAGE_END",u,{messageId:u.messageId}),[u]}}},i=()=>[...r.keys()].flatMap(c=>o(c)),a=(c,l)=>{for(let[u,f]of r)if(f.kind===c&&bT(f)===l)return{owner:u}},s=(c,l,u,f,m)=>{if(l!==void 0){let h=a(c,l);if(h){if(u!==void 0&&u!==h.owner)throw Error(`Cannot continue ${m} '${l}': chunk subagentRunId '${u}' does not match the open stream's subagent '${h.owner??"(the parent agent)"}'.`);return h.owner}return u}if(u!==void 0)return u;if(r.get(void 0)?.kind===c)return;let p=[...r.entries()].filter(([,h])=>h.kind===c);if(p.length===1)return p[0][0];if(p.length>1)throw Error(`Ambiguous ${f}: it carries neither a ${yT(c)} nor a subagentRunId, but ${p.length} lanes have an open ${m}. Attribute the chunk to the subagent it belongs to.`)};return e.pipe(We(c=>{switch(c.type){case v.TEXT_MESSAGE_START:case v.TEXT_MESSAGE_CONTENT:case v.TEXT_MESSAGE_END:case v.TOOL_CALL_START:case v.TOOL_CALL_ARGS:case v.TOOL_CALL_END:case v.TOOL_CALL_RESULT:case v.STATE_SNAPSHOT:case v.STATE_DELTA:case v.CUSTOM:case v.STEP_STARTED:case v.STEP_FINISHED:case v.REASONING_START:case v.REASONING_MESSAGE_START:case v.REASONING_MESSAGE_CONTENT:case v.REASONING_MESSAGE_END:case v.REASONING_END:return[...o(c.subagentRunId??void 0),c];case v.RUN_STARTED:case v.RUN_FINISHED:case v.RUN_ERROR:case v.MESSAGES_SNAPSHOT:return[...i(),c];case v.RAW:case v.ACTIVITY_SNAPSHOT:case v.ACTIVITY_DELTA:case v.REASONING_ENCRYPTED_VALUE:case v.SUBAGENT_STARTED:return[c];case v.SUBAGENT_FINISHED:case v.SUBAGENT_ERROR:{let l=c.subagentRunId;return l==null?[c]:[...o(l),c]}case v.TEXT_MESSAGE_CHUNK:{let l=c,u=$u(c,wT),f=s("text",l.messageId,l.subagentRunId??void 0,"TEXT_MESSAGE_CHUNK","text message"),m=r.get(f),p=[],h=!1,x;if(m?.kind==="text"&&(l.messageId===void 0||l.messageId===m.fields.messageId))Wa("text message",m.fields.messageId,"role",l.role,m.fields.role),Wa("text message",m.fields.messageId,"name",l.name,m.fields.name),x=m.fields;else{if(p.push(...o(f)),l.messageId===void 0)throw Error("First TEXT_MESSAGE_CHUNK must have a messageId");x={messageId:l.messageId,role:l.role===void 0?"assistant":l.role,name:l.name,subagentRunId:l.subagentRunId},r.set(f,{kind:"text",fields:x});let g=Ka({type:v.TEXT_MESSAGE_START,messageId:l.messageId,role:x.role,...l.name!==void 0&&{name:l.name},...l.subagentRunId!==void 0&&{subagentRunId:l.subagentRunId}},l);p.push(g),n?.event("TRANSFORM","TEXT_MESSAGE_START",g,{messageId:l.messageId})}if(l.delta!==void 0||l.rawEvent!==void 0){let g=l.subagentRunId===void 0?x.subagentRunId:l.subagentRunId,w=Du({...u,type:v.TEXT_MESSAGE_CONTENT,messageId:x.messageId,delta:l.delta===void 0?"":l.delta,...g!==void 0&&{subagentRunId:g}},l);p.push(w),h=!0,n?.event("TRANSFORM","TEXT_MESSAGE_CONTENT",w,{messageId:x.messageId})}if(p.length===0&&(l.metadata!==void 0||l.rawEvent!==void 0||l.subagentRunId===null||u!==void 0)){let g=l.subagentRunId===void 0?x.subagentRunId:l.subagentRunId;p.push({...u,type:v.TEXT_MESSAGE_CONTENT,messageId:x.messageId,delta:"",...l.metadata!==void 0&&{metadata:l.metadata},...l.rawEvent!==void 0&&{rawEvent:l.rawEvent},...g!==void 0&&{subagentRunId:g}}),h=!0}return Uu(p,u,h,"TEXT_MESSAGE_CHUNK"),p}case v.TOOL_CALL_CHUNK:{let l=c,u=$u(c,ET),f=s("tool",l.toolCallId,l.subagentRunId??void 0,"TOOL_CALL_CHUNK","tool call"),m=r.get(f),p=[],h=!1,x;if(m?.kind==="tool"&&(l.toolCallId===void 0||l.toolCallId===m.fields.toolCallId))Wa("tool call",m.fields.toolCallId,"toolCallName",l.toolCallName,m.fields.toolCallName),Wa("tool call",m.fields.toolCallId,"parentMessageId",l.parentMessageId,m.fields.parentMessageId),x=m.fields;else{if(p.push(...o(f)),l.toolCallId===void 0)throw Error("First TOOL_CALL_CHUNK must have a toolCallId");if(l.toolCallName===void 0)throw Error("First TOOL_CALL_CHUNK must have a toolCallName");x={toolCallId:l.toolCallId,toolCallName:l.toolCallName,parentMessageId:l.parentMessageId,subagentRunId:l.subagentRunId},r.set(f,{kind:"tool",fields:x});let g=Ka({type:v.TOOL_CALL_START,toolCallId:l.toolCallId,toolCallName:l.toolCallName,...l.parentMessageId!==void 0&&{parentMessageId:l.parentMessageId},...l.subagentRunId!==void 0&&{subagentRunId:l.subagentRunId}},l);p.push(g),n?.event("TRANSFORM","TOOL_CALL_START",g,{toolCallId:l.toolCallId,toolCallName:l.toolCallName})}if(l.delta!==void 0||l.rawEvent!==void 0){let g=l.subagentRunId===void 0?x.subagentRunId:l.subagentRunId,w=Du({...u,type:v.TOOL_CALL_ARGS,toolCallId:x.toolCallId,delta:l.delta===void 0?"":l.delta,...g!==void 0&&{subagentRunId:g}},l);p.push(w),h=!0,n?.event("TRANSFORM","TOOL_CALL_ARGS",w,{toolCallId:x.toolCallId})}if(p.length===0&&(l.metadata!==void 0||l.rawEvent!==void 0||l.subagentRunId===null||u!==void 0)){let g=l.subagentRunId===void 0?x.subagentRunId:l.subagentRunId;p.push({...u,type:v.TOOL_CALL_ARGS,toolCallId:x.toolCallId,delta:"",...l.metadata!==void 0&&{metadata:l.metadata},...l.rawEvent!==void 0&&{rawEvent:l.rawEvent},...g!==void 0&&{subagentRunId:g}}),h=!0}return Uu(p,u,h,"TOOL_CALL_CHUNK"),p}case v.REASONING_MESSAGE_CHUNK:{let l=c,u=$u(c,xT),f=s("reasoning",l.messageId,l.subagentRunId??void 0,"REASONING_MESSAGE_CHUNK","reasoning message"),m=r.get(f),p=[],h=!1,x;if(m?.kind==="reasoning"&&(l.messageId===void 0||l.messageId===m.fields.messageId))x=m.fields;else{if(p.push(...o(f)),l.messageId===void 0)throw Error("First REASONING_MESSAGE_CHUNK must have a messageId");x={messageId:l.messageId,subagentRunId:l.subagentRunId},r.set(f,{kind:"reasoning",fields:x});let g=Ka({type:v.REASONING_MESSAGE_START,messageId:l.messageId,role:"reasoning",...l.subagentRunId!==void 0&&{subagentRunId:l.subagentRunId}},l);p.push(g),n?.event("TRANSFORM","REASONING_MESSAGE_START",g,{messageId:l.messageId})}if(l.delta!==void 0||l.rawEvent!==void 0){let g=l.subagentRunId===void 0?x.subagentRunId:l.subagentRunId,w=Du({...u,type:v.REASONING_MESSAGE_CONTENT,messageId:x.messageId,delta:l.delta===void 0?"":l.delta,...g!==void 0&&{subagentRunId:g}},l);p.push(w),h=!0,n?.event("TRANSFORM","REASONING_MESSAGE_CONTENT",w,{messageId:x.messageId})}if(p.length===0&&(l.metadata!==void 0||l.rawEvent!==void 0||l.subagentRunId===null||u!==void 0)){let g=l.subagentRunId===void 0?x.subagentRunId:l.subagentRunId;p.push({...u,type:v.REASONING_MESSAGE_CONTENT,messageId:x.messageId,delta:"",...l.metadata!==void 0&&{metadata:l.metadata},...l.rawEvent!==void 0&&{rawEvent:l.rawEvent},...g!==void 0&&{subagentRunId:g}}),h=!0}return Uu(p,u,h,"REASONING_MESSAGE_CHUNK"),p}}return c.type,[c]}),fn(()=>{i()}))},ur=Symbol("agui.strip.drop");function eo(t){let e=t;for(;;){if(e instanceof Ki||e instanceof iu||e instanceof au||e instanceof cu||e instanceof su){e=e.unwrap();continue}if(e instanceof lu){e=e.def.in;continue}if(e instanceof Ag){e=e.def.getter();continue}return e}}function ST(t){let e=t.def;return typeof e?.discriminator=="string"?e.discriminator:void 0}function Tb(t){let e=t,n=Array.isArray(e.def?.values)?e.def.values:e.values?Array.from(e.values):void 0;return n&&n.length===1?n[0]:e.value}function TT(t){let e=eo(t);return e instanceof ou?Tb(e):void 0}function dr(t,e,n,r){let o=eo(e);if(o instanceof ar){if(typeof t!="object"||!t||Array.isArray(t))return t;let i=o.shape,a=t,s={},c=o.meta()?.specOpen===!0;for(let l of Object.keys(a)){let u=Object.prototype.hasOwnProperty.call(i,l)?i[l]:void 0;if(u===void 0){if(c){s[l]=a[l];continue}r.push(`${n}/${l}`);continue}let f=r.length,m=dr(a[l],u,`${n}/${l}`,r);if(m===ur){if(r.length=f,u.safeParse(void 0).success){r.push(`${n}/${l}`);continue}return ur}s[l]=m}return s}if(o instanceof qi){if(!Array.isArray(t))return t;let i=o.element,a=[];return t.forEach((s,c)=>{let l=r.length,u=dr(s,i,`${n}/${c}`,r);if(u===ur){r.length=l,r.push(`${n}/${c}`);return}a.push(u)}),a}if(o instanceof Sg){if(typeof t!="object"||!t||Array.isArray(t))return t;let i=o.def.valueType,a=t,s={};for(let c of Object.keys(a)){let l=r.length,u=dr(a[c],i,`${n}/${c}`,r);if(u===ur){r.length=l,r.push(`${n}/${c}`);continue}s[c]=u}return s}if(o instanceof Yi){let i=o.options,a=ST(o);if(a!==void 0){if(typeof t!="object"||!t||Array.isArray(t))return t;let l=t[a];for(let u of i){let f=eo(u);if(!(f instanceof ar))continue;let m=f.shape;if(TT(m[a])===l)return dr(t,u,n,r)}return ur}let s=i.filter(l=>eo(l)instanceof ar),c=typeof t=="object"&&!!t&&!Array.isArray(t);if(s.length>1&&c)return t;for(let l of i){let u=eo(l);if(u instanceof qi&&Array.isArray(t)||u instanceof ar&&c)return dr(t,l,n,r)}return t}return t}function Ab(t,e){let n=[],r=dr(t,e,"",n);if(r===ur)throw Error("Internal error: the stripper found the whole value unrecognisable, which the schemas are not supposed to allow \u2014 schema/stripper mismatch.");return{value:r,stripped:n}}var AT=new Set(Object.values(v));function kT(t){return AT.has(t.type)}var IT=new Map(fu.options.map(t=>{let e=t.shape;return[String(Tb(e.type)),t]})),RT=()=>typeof process<"u"&&process.env!==void 0&&!!process.env.SUPPRESS_TRANSFORMATION_WARNINGS;function Wu(t){RT()||console.warn(`[ag-ui][enforce] ${t}`)}var Hu=t=>e=>{let n=kn(t);return e.pipe(We(r=>{if(!kT(r))return Wu(`Dropping unrecognised event '${String(r.type)}': no middleware translated it and the protocol does not describe it.`),n?.event("ENFORCE","Unrecognised event dropped:",r,{type:r.type}),pn;let o=IT.get(r.type);if(o===void 0)throw Error(`No validator for recognised event type '${String(r.type)}'`);let{value:i,stripped:a}=Ab(r,o);for(let s of a)Wu(`Removed unrecognised material at '${s}' on ${String(r.type)}. Nothing handled it; see the repo-root DEPRECATIONS.md if it is a retired shape.`);return ue(o.parse(i))}))};function CT(t){let{value:e,stripped:n}=Ab(rc(t,"RunAgentInput"),Ji);for(let r of n)Wu(`Removed unrecognised material at '${r}' from the outgoing input.`);return Ji.parse(e)}var no=class{runNext(t,e){return e.run(t).pipe(Xa(!1))}runNextWithState(t,e){let n=ne(t.messages||[]),r=ne(t.state===void 0?{}:t.state),o=new fi;return _b(t,o,e,[]).subscribe({next:i=>{i.messages!==void 0&&(n=i.messages),i.state!==void 0&&(r=i.state)},error:()=>{}}),this.runNext(t,e).pipe(Ri(async i=>(o.next(i),await new Promise(a=>setTimeout(a,0)),{event:i,messages:ne(n),state:ne(r)})))}},NT=class extends no{constructor(t){super(),this.fn=t}run(t,e){return this.fn(t,e)}};function OT(t){return t.startsWith("image/")?"image":t.startsWith("audio/")?"audio":t.startsWith("video/")?"video":"document"}function PT(t){return typeof t=="object"&&!!t&&"type"in t&&t.type==="binary"&&"mimeType"in t&&typeof t.mimeType=="string"}function MT(t){let e=OT(t.mimeType);return t.data?{type:e,source:{type:"data",value:t.data,mimeType:t.mimeType},...t.filename?{metadata:{filename:t.filename}}:{}}:t.url?{type:e,source:{type:"url",value:t.url,mimeType:t.mimeType},...t.filename?{metadata:{filename:t.filename}}:{}}:((typeof process>"u"||process.env===void 0||!process.env.SUPPRESS_TRANSFORMATION_WARNINGS)&&console.warn(`[ag-ui][compat] A binary content part carries only an id ('${t.id??""}') and cannot be converted to a modern media part; a 1.0 peer will not accept it. Provide data or a url. See the repo-root DEPRECATIONS.md.`),t)}function LT(t,e,n){if(typeof t!="object"||!t||!("type"in t)||t.type!==e.type||!("source"in t))return!1;let r=t.source;return typeof r!="object"||!r||!("type"in r)||r.type!==e.source.type||!("value"in r)||r.value!==e.source.value||!("mimeType"in r)||r.mimeType!==e.source.mimeType?!1:!n||"metadata"in t&&typeof t.metadata=="object"&&t.metadata!==null&&"filename"in t.metadata&&t.metadata.filename===n}function cb(t){let e=t.content;if(!Array.isArray(e))return t;let n=e.flatMap(r=>{if(PT(r)){let o=MT(r);return o.type!=="binary"&&e.some(i=>LT(i,o,r.filename))?[]:[o]}return[r]});return{...t,content:n}}var Fu="THINKING_START",Gu="THINKING_END",ub="THINKING_TEXT_MESSAGE_START",Bu="THINKING_TEXT_MESSAGE_CONTENT",Zu="THINKING_TEXT_MESSAGE_END";function Ku(t){return typeof t=="object"&&!!t&&!Array.isArray(t)}var qt={event:["rawEvent","subagentRunId"],[v.RUN_STARTED]:["parentRunId","input"],[v.RUN_FINISHED]:["result","outcome"],[v.RUN_ERROR]:["usage"],[v.SUBAGENT_FINISHED]:["result"],[v.TOOL_CALL_START]:["parentMessageId"],[v.TOOL_CALL_CHUNK]:["parentMessageId"],[v.TOOL_CALL_RESULT]:["role"],"RUN_FINISHED.outcome":["pendingToolCallIds"],"RUN_FINISHED.usage[]":["provider","reasoningTokens","cachedInputTokens","cacheWriteInputTokens"],RunAgentInput:["forwardedProps"],Tool:["parameters"],ResumeEntry:["payload"],"input content":["metadata"]},zT=new Map(Object.entries(qt).filter(([t])=>Object.values(v).includes(t))),DT=t=>Qa(t,"an absent field");function Wt(t,e,n,r){if(!Ku(t))return t;let o;for(let i of e)t[i]===null&&(r(n===void 0?`${i}: null`:`${n}.${i}: null`),o??={...t},delete o[i]);return o??t}function to(t,e,n){if(!Ku(t)||!Array.isArray(t[e]))return t;let r=t[e],o=r.map(n);return o.some((i,a)=>i!==r[a])?{...t,[e]:o}:t}function kb(t,e){return to(t,"content",n=>{if(!Ku(n))return n;switch(n.type){case"image":case"audio":case"video":case"document":return Wt(n,qt["input content"],`${n.type} input content`,e);default:return n}})}function $T(t,e=DT){let n=Wt(t,qt.RunAgentInput,"RunAgentInput",e);return n=to(n,"tools",r=>Wt(r,qt.Tool,"Tool",e)),n=to(n,"resume",r=>Wt(r,qt.ResumeEntry,"ResumeEntry",e)),to(n,"messages",r=>kb(r,e))}var qu=class extends no{constructor(...t){super(...t),this.currentReasoningId=null,this.currentMessageId=null,this.nullsNoticedThisRun=new Set,this.noticeNullOncePerRun=e=>{this.nullsNoticedThisRun.has(e)||(this.nullsNoticedThisRun.add(e),Qa(e,"an absent field"))}}warn(t,e){Qa(t,e)}mintedContinuationId(t,e){if(e!==null)return e;let n=Se();return this.warnAside(`Minting a messageId ('${n}') for ${t}: no THINKING opener preceded it, so there was no id to continue. The id is this client's invention, not the producer's, and verification will reject the translated event for naming something nothing opened.`),n}warnAside(t){typeof process<"u"&&process.env!==void 0&&process.env.SUPPRESS_TRANSFORMATION_WARNINGS||console.warn(`[ag-ui][compat] ${t} Set SUPPRESS_TRANSFORMATION_WARNINGS=true to silence.`)}run(t,e){return this.currentReasoningId=null,this.currentMessageId=null,this.nullsNoticedThisRun.clear(),t.messages=t.messages.map(cb),e.run(t).pipe(Tt(n=>this.transformEvent(n)))}transformEvent(t){let e=this.noticeNullOncePerRun;t.type===v.RUN_STARTED&&this.nullsNoticedThisRun.clear(),t=Wt(t,qt.event,void 0,e);let n=zT.get(t.type);switch(n&&(t=Wt(t,n,t.type,e)),t.type){case Fu:{this.currentReasoningId=Se();let{title:r,...o}=t;return this.warn(Fu,v.REASONING_START),r!==void 0&&this.warnAside(`Dropping ${Fu}.title ${JSON.stringify(r)}: ${v.REASONING_START} has no title field, so the span's label cannot be carried and nothing downstream can recover it.`),{...o,type:v.REASONING_START,messageId:this.currentReasoningId}}case ub:return this.currentMessageId=Se(),this.warn(ub,v.REASONING_MESSAGE_START),{...t,type:v.REASONING_MESSAGE_START,messageId:this.currentMessageId,role:"reasoning"};case Bu:{let{delta:r,...o}=t;return this.warn(Bu,v.REASONING_MESSAGE_CONTENT),{...o,type:v.REASONING_MESSAGE_CONTENT,messageId:this.mintedContinuationId(Bu,this.currentMessageId),delta:r}}case Zu:{let r=this.mintedContinuationId(Zu,this.currentMessageId);return this.currentMessageId=null,this.warn(Zu,v.REASONING_MESSAGE_END),{...t,type:v.REASONING_MESSAGE_END,messageId:r}}case Gu:{let r=this.mintedContinuationId(Gu,this.currentReasoningId);return this.currentReasoningId=null,this.warn(Gu,v.REASONING_END),{...t,type:v.REASONING_END,messageId:r}}case v.RUN_FINISHED:{let r=t,o=Wt(r.outcome,qt["RUN_FINISHED.outcome"],"RUN_FINISHED.outcome",e);return to(o===r.outcome?r:{...r,outcome:o},"usage",i=>Wt(i,qt["RUN_FINISHED.usage[]"],"RUN_FINISHED.usage[]",e))}case v.MESSAGES_SNAPSHOT:{let r=t;return Array.isArray(r.messages)?{...r,messages:r.messages.map(o=>this.upgradeInboundMessage(o))}:t}case v.RUN_STARTED:{let r=$T(t.input,e),o=r===t.input?t:{...t,input:r},i=o;return!i.input||!Array.isArray(i.input.messages)?o:{...i,input:{...i.input,messages:i.input.messages.map(a=>this.upgradeInboundMessage(a))}}}default:return t}}upgradeInboundMessage(t){t=kb(t,this.noticeNullOncePerRun);let e=t.content;return!Array.isArray(e)||!e.some(n=>typeof n=="object"&&!!n&&n.type==="binary")?t:(this.warn("binary input content","the modern media content parts"),cb(t))}},UT=()=>t=>hn(()=>{let e=new qu;return t.pipe(Tt(n=>e.transformEvent(n)))});function HT(t,e=new Date){return t.expiresAt===void 0?!1:new Date(t.expiresAt)<=e}function Ib(t,e){let n=new Set(t.map(a=>a.id)),r=new Set(Object.keys(e)),o=[...n].filter(a=>!r.has(a));if(o.length>0)throw Error(`buildResumeArray: missing responses for open interrupts: ${o.join(", ")}`);let i=[...r].filter(a=>!n.has(a));if(i.length>0)throw Error(`buildResumeArray: responses reference unknown interrupt ids: ${i.join(", ")}`);return t.map(a=>{let s=e[a.id],c={interruptId:a.id,status:s.status};return s.status==="resolved"&&s.payload!==void 0&&(c.payload=s.payload),s.metadata!==void 0&&(c.metadata=s.metadata),c})}function Rb(){return typeof process<"u"&&process.env!==void 0&&!!process.env.SUPPRESS_TRANSFORMATION_WARNINGS}function FT(t){Rb()||console.warn(`[ag-ui][compat] Flattening message content for a <=0.0.39 peer DROPS non-text parts (${t.join(", ")}). The peer cannot receive them; upgrade it to keep media content. See the repo-root DEPRECATIONS.md.`)}function GT(t){Rb()||console.warn(`[ag-ui][compat] Not flattening message content for a <=0.0.39 peer: ${t} content part(s) claim type "text" but carry a malformed 'text' value. That is a defect in the message, not media the peer cannot represent, and a downgrade must not repair it \u2014 the content is passed on unchanged so the outgoing enforcement boundary reports it. See the repo-root DEPRECATIONS.md.`)}function BT(t){let e=t.content;if(Array.isArray(e)){let n=s=>typeof s=="object"&&!!s&&"type"in s&&s.type==="text",r=s=>n(s)&&typeof s.text=="string",o=e.filter(s=>n(s)&&!r(s));if(o.length>0)return GT(o.length),t;let i=e.filter(s=>!r(s)).map(s=>typeof s=="object"&&s&&"type"in s?String(s.type):typeof s);i.length>0&&FT(i);let a=e.filter(r).map(s=>s.text).join("");return{...t,content:a}}return typeof e=="string"?t:e===void 0?{...t,content:""}:t}var ZT=class extends no{run(t,e){let{parentRunId:n,...r}=t,o={...r,messages:r.messages.map(BT)};return this.runNext(o,e)}},db="THINKING_START",pb="THINKING_END",hb="THINKING_TEXT_MESSAGE_START",fb="THINKING_TEXT_MESSAGE_CONTENT",mb="THINKING_TEXT_MESSAGE_END",VT=class extends no{constructor(...t){super(...t),this.currentReasoningId=null,this.currentMessageId=null}warnAboutTransformation(t,e){typeof process<"u"&&process.env!==void 0&&process.env.SUPPRESS_TRANSFORMATION_WARNINGS||console.warn(`AG-UI is converting ${t} to ${e}. To remove this warning, upgrade your AG-UI integration package (e.g. @ag-ui/langgraph). To surpress it, set SUPPRESS_TRANSFORMATION_WARNINGS=true in your .env file.`)}run(t,e){return this.currentReasoningId=null,this.currentMessageId=null,this.runNext(t,e).pipe(Tt(n=>this.transformEvent(n)))}transformEvent(t){switch(t.type){case db:{this.currentReasoningId=Se();let{title:e,...n}=t;return this.warnAboutTransformation(db,v.REASONING_START),{...n,type:v.REASONING_START,messageId:this.currentReasoningId}}case hb:return this.currentMessageId=Se(),this.warnAboutTransformation(hb,v.REASONING_MESSAGE_START),{...t,type:v.REASONING_MESSAGE_START,messageId:this.currentMessageId,role:"reasoning"};case fb:{let{delta:e,...n}=t;return this.warnAboutTransformation(fb,v.REASONING_MESSAGE_CONTENT),{...n,type:v.REASONING_MESSAGE_CONTENT,messageId:this.currentMessageId??Se(),delta:e}}case mb:{let e=this.currentMessageId??Se();return this.warnAboutTransformation(mb,v.REASONING_MESSAGE_END),{...t,type:v.REASONING_MESSAGE_END,messageId:e}}case pb:{let e=this.currentReasoningId??Se();return this.warnAboutTransformation(pb,v.REASONING_END),{...t,type:v.REASONING_END,messageId:e}}default:return t}}},gb="SUBAGENT_STARTED",vb="SUBAGENT_FINISHED",bb="SUBAGENT_ERROR";function Ja(t){if(t&&typeof t=="object"&&"subagentRunId"in t){let{subagentRunId:e,...n}=t;return n}return t}function yb(t){return t.map(e=>Ja(e))}var jT=class extends no{warnDroppedLifecycleEvent(t){typeof process<"u"&&process.env!==void 0&&process.env.SUPPRESS_TRANSFORMATION_WARNINGS||console.warn(`AG-UI is dropping ${t} because the target agent predates subagent support. To remove this warning, upgrade your AG-UI integration package. To suppress it, set SUPPRESS_TRANSFORMATION_WARNINGS=true in your .env file.`)}run(t,e){let n={...t,messages:(t.messages??[]).map(r=>Ja(r))};return this.runNext(n,e).pipe(Ni(r=>{let o=r.type;(o===gb||o===vb||o===bb)&&this.warnDroppedLifecycleEvent(o)}),vc(r=>{let o=r.type;return o!==gb&&o!==vb&&o!==bb}),Tt(r=>{let o=Ja(r);if(o.type===v.MESSAGES_SNAPSHOT){let i=o;if(Array.isArray(i.messages))return{...i,messages:yb(i.messages)}}if(o.type===v.RUN_FINISHED){let i=o;if(i.outcome&&Array.isArray(i.outcome.interrupts))return{...i,outcome:{...i.outcome,interrupts:i.outcome.interrupts.map(a=>Ja(a))}}}if(o.type===v.RUN_STARTED){let i=o;if(i.input&&Array.isArray(i.input.messages))return{...i,input:{...i.input,messages:yb(i.input.messages)}}}return o}))}},qa="1.0.3",wb=!1,Eb=new WeakSet,WT=(t,e)=>/^\d+\.\d+$/.test(t)?Tn(t,e)>0?"newer":"not-newer":"uninterpretable",xb=t=>{let e=t.protocolVersion;if(!(e===void 0||e===ln))switch(WT(e,ln)){case"uninterpretable":console.warn(`[ag-ui] The producer declared protocol version '${e}', which this client cannot interpret.`);return;case"newer":console.warn(`[ag-ui] The producer speaks protocol ${e}; this client speaks ${ln}. Unrecognised material will be stripped with warnings.`);return;case"not-newer":return}},qT=class Cb{resolvePeerCeiling(e){if(this.resolvingPeerCeiling)return qa;let n=Object.getOwnPropertyDescriptor(this,"maxVersion"),r=Object.getOwnPropertyDescriptor(this,"maxProtocolVersion"),o=Object.getPrototypeOf(this);for(;o&&o!==Cb.prototype;)n??=Object.getOwnPropertyDescriptor(o,"maxVersion"),r??=Object.getOwnPropertyDescriptor(o,"maxProtocolVersion"),o=Object.getPrototypeOf(o);if(e==="maxVersion"&&n)return qa;let i=e==="maxProtocolVersion"?n:r;if(!i)return qa;this.resolvingPeerCeiling=!0;try{return i.get?i.get.call(this):i.value}finally{this.resolvingPeerCeiling=!1}}get maxProtocolVersion(){return this.resolvePeerCeiling("maxProtocolVersion")}get maxVersion(){return!this.resolvingPeerCeiling&&!wb&&(wb=!0,console.warn("[ag-ui] AbstractAgent.maxVersion is deprecated \u2014 use maxProtocolVersion. Same value; the new name says whose version it is and that it is a ceiling.")),this.resolvePeerCeiling("maxVersion")}get debug(){return this._debug}set debug(e){this._debug=Ya(e),this._debugLogger=Lu(this._debug)}get debugLogger(){return this._debugLogger}set debugLogger(e){typeof e=="boolean"?this._debugLogger=e?Lu(Ya(!0)):void 0:this._debugLogger=e}resolvedCeilingDuringConstruction(){let e=this.maxProtocolVersion;if(typeof e!="string"||!Mu(e))throw new j(`maxProtocolVersion resolved to ${JSON.stringify(e)} during construction, which is not a version this client can compare. A ceiling read from an instance field is not available yet \u2014 return a literal from the getter.`);return e}constructor({agentId:e,description:n,threadId:r,initialMessages:o,initialState:i,debug:a}={}){this.subscribers=[],this.isRunning=!1,this.pendingInterrupts=[],this.middlewares=[],this.resolvingPeerCeiling=!1,this.agentId=e,this.description=n??"",this.threadId=r??Ft(),this.messages=ne(o??[]),this.state=ne(i??{}),this._debug=Ya(a),this._debugLogger=Lu(this._debug);let s=this.resolvedCeilingDuringConstruction();Tn(s,"0.0.39")<=0&&this.middlewares.unshift(new ZT),Tn(s,"0.0.45")<=0&&this.middlewares.unshift(new VT),Tn(s,"0.0.57")<=0&&this.middlewares.unshift(new jT)}subscribe(e){return this.subscribers.push(e),{unsubscribe:()=>{this.subscribers=this.subscribers.filter(n=>n!==e)}}}use(...e){let n=e.map(r=>typeof r=="function"?new NT(r):r);return this.middlewares.push(...n),this}async runAgent(e,n){try{this.isRunning=!0,this.agentId=this.agentId??Ft();let r=this.prepareRunAgentInput(e);this.debugLogger?.lifecycle("LIFECYCLE","Run started:",{agentId:this.agentId,threadId:this.threadId});let o,i=new Set(this.messages.map(l=>l.id)),a=[{onRunStartedEvent:({event:l})=>xb(l),onRunFinishedEvent:l=>{l.outcome==="success"&&(o=l.result)}},...this.subscribers,n??{}];Eb.add(r),await this.onInitialize(r,a),this.activeRunDetach$=new St;let s;this.activeRunCompletionPromise=new Promise(l=>{s=l}),await Ii(hi(()=>[...this.middlewares,new qu].reduceRight((l,u)=>({run:f=>u.run(f,l),get messages(){return l.messages},get state(){return l.state}}),this).run(r),Hu(this.debugLogger),Xa(this.debugLogger),zu(this.debugLogger),l=>l.pipe(Ci(this.activeRunDetach$)),l=>this.applyBeforeSourceError(r,l,a),er(l=>(this.debugLogger?.lifecycle("LIFECYCLE","Run errored:",{agentId:this.agentId,error:l instanceof Error?l.message:String(l)}),this.isRunning=!1,this.onError(r,l,a))),fn(()=>{this.debugLogger?.lifecycle("LIFECYCLE","Run finished:",{agentId:this.agentId,threadId:this.threadId}),this.isRunning=!1,this.onFinalize(r,a),s?.(),s=void 0,this.activeRunCompletionPromise=void 0,this.activeRunDetach$=void 0}))(ue(null)));let c=ne(this.messages).filter(l=>!i.has(l.id));return{result:o,newMessages:c}}finally{this.isRunning=!1}}connect(e){throw new oc}async connectAgent(e,n){try{this.isRunning=!0,this.agentId=this.agentId??Ft();let r=this.prepareRunAgentInput(e),o,i=new Set(this.messages.map(l=>l.id)),a=[{onRunStartedEvent:({event:l})=>xb(l),onRunFinishedEvent:l=>{l.outcome==="success"&&(o=l.result)}},...this.subscribers,n??{}];await this.onInitialize(r,a),this.activeRunDetach$=new St;let s;this.activeRunCompletionPromise=new Promise(l=>{s=l}),await Ii(hi(()=>hn(()=>this.connect(r)),l=>Hu(this.debugLogger)(UT()(l)),Xa(this.debugLogger),zu(this.debugLogger),l=>l.pipe(Ci(this.activeRunDetach$)),l=>this.applyBeforeSourceError(r,l,a),er(l=>(this.isRunning=!1,l instanceof oc?pn:this.onError(r,l,a))),fn(()=>{this.isRunning=!1,this.onFinalize(r,a),s?.(),s=void 0,this.activeRunCompletionPromise=void 0,this.activeRunDetach$=void 0}))(ue(null)),{defaultValue:void 0});let c=ne(this.messages).filter(l=>!i.has(l.id));return{result:o,newMessages:c}}finally{this.isRunning=!1}}abortRun(){}async detachActiveRun(){if(!this.activeRunDetach$)return;let e=this.activeRunCompletionPromise??Promise.resolve();this.activeRunDetach$.next(),this.activeRunDetach$?.complete(),await e}applyBeforeSourceError(e,n,r){return hn(()=>{let o,i=n.pipe(er(a=>(o={error:a},pn)));return this.processApplyEvents(e,this.apply(e,i,r),r).pipe(bc(hn(()=>{let a=o;return a?F(()=>a.error):pn})))})}apply(e,n,r){return _b(e,n,this,r,this.debugLogger)}processApplyEvents(e,n,r){return n.pipe(Ni(o=>{o.messages&&(this.messages=o.messages,r.forEach(i=>{i.onMessagesChanged?.({messages:this.messages,state:this.state,agent:this,input:e})})),o.state!==void 0&&(this.state=o.state,r.forEach(i=>{i.onStateChanged?.({state:this.state,messages:this.messages,agent:this,input:e})}))}))}prepareRunAgentInput(e){let n=ne(this.messages);for(let o of n)o.subagentRunId===null&&delete o.subagentRunId;let r=n.filter(o=>o.role!=="activity");return{threadId:this.threadId,runId:e?.runId||Ft(),...Tn(this.maxProtocolVersion,qa)>=0&&{protocolVersion:ln},tools:ne(e?.tools??[]),context:ne(e?.context??[]),forwardedProps:ne(e?.forwardedProps??{}),state:ne(this.state),messages:r,...e?.resume===void 0?{}:{resume:ne(e.resume)}}}async onInitialize(e,n){if(Eb.has(e)&&this.pendingInterrupts.length>0){let o=new Set((e.resume??[]).map(a=>a.interruptId)),i=this.pendingInterrupts.map(a=>a.id).filter(a=>!o.has(a));if(i.length>0)throw new j(`Thread has ${i.length} pending interrupt(s) not addressed by resume: ${i.join(", ")}`);for(let a of this.pendingInterrupts)if(HT(a)&&(e.resume??[]).find(s=>s.interruptId===a.id)?.status!=="cancelled")throw new j(`Interrupt ${a.id} expired at ${a.expiresAt} and can no longer be answered. Cancel it to continue the thread.`)}let r=await ae(n,this.messages,this.state,(o,i,a)=>o.onRunInitialized?.({messages:i,state:a,agent:this,input:e}));if(r.messages!==void 0||r.state!==void 0){if(r.messages){this.messages=r.messages;for(let o of r.messages)o.subagentRunId===null&&delete o.subagentRunId;e.messages=r.messages.filter(o=>o.role!=="activity"),n.forEach(o=>{o.onMessagesChanged?.({messages:this.messages,state:this.state,agent:this,input:e})})}r.state!==void 0&&(this.state=r.state,e.state=r.state,n.forEach(o=>{o.onStateChanged?.({state:this.state,messages:this.messages,agent:this,input:e})}))}}onError(e,n,r){return Pt(ae(r,this.messages,this.state,(o,i,a)=>o.onRunFailed?.({error:n,messages:i,state:a,agent:this,input:e}))).pipe(Tt(o=>{let i=o;if((i.messages!==void 0||i.state!==void 0)&&(i.messages!==void 0&&(this.messages=i.messages,r.forEach(a=>{a.onMessagesChanged?.({messages:this.messages,state:this.state,agent:this,input:e})})),i.state!==void 0&&(this.state=i.state,r.forEach(a=>{a.onStateChanged?.({state:this.state,messages:this.messages,agent:this,input:e})}))),i.stopPropagation!==!0){let a=String(n);if(!(n.name==="AbortError"||n.message==="Fetch is aborted"||n.message==="signal is aborted without reason"||n.message==="component unmounted"||a==="component unmounted"))throw console.error("Agent execution failed:",n),n}return{}}))}async onFinalize(e,n){let r=await ae(n,this.messages,this.state,(o,i,a)=>o.onRunFinalized?.({messages:i,state:a,agent:this,input:e}));(r.messages!==void 0||r.state!==void 0)&&(r.messages!==void 0&&(this.messages=r.messages,n.forEach(o=>{o.onMessagesChanged?.({messages:this.messages,state:this.state,agent:this,input:e})})),r.state!==void 0&&(this.state=r.state,n.forEach(o=>{o.onStateChanged?.({state:this.state,messages:this.messages,agent:this,input:e})})))}clone(){let e=Object.create(Object.getPrototypeOf(this));return e.agentId=this.agentId,e.description=this.description,e.threadId=this.threadId,e.messages=ne(this.messages),e.state=ne(this.state),e._debug=this._debug,e._debugLogger=this._debugLogger,e.isRunning=this.isRunning,e.subscribers=[...this.subscribers],e.middlewares=[...this.middlewares],e.pendingInterrupts=ne(this.pendingInterrupts),e}addMessage(e){this.messages.push(e),(async()=>{for(let n of this.subscribers)await n.onNewMessage?.({message:e,messages:this.messages,state:this.state,agent:this});if(e.role==="assistant"&&e.toolCalls)for(let n of e.toolCalls)for(let r of this.subscribers)await r.onNewToolCall?.({toolCall:n,messages:this.messages,state:this.state,agent:this});for(let n of this.subscribers)await n.onMessagesChanged?.({messages:this.messages,state:this.state,agent:this})})()}addMessages(e){this.messages.push(...e),(async()=>{for(let n of e){for(let r of this.subscribers)await r.onNewMessage?.({message:n,messages:this.messages,state:this.state,agent:this});if(n.role==="assistant"&&n.toolCalls)for(let r of n.toolCalls)for(let o of this.subscribers)await o.onNewToolCall?.({toolCall:r,messages:this.messages,state:this.state,agent:this})}for(let n of this.subscribers)await n.onMessagesChanged?.({messages:this.messages,state:this.state,agent:this})})()}setMessages(e){this.messages=ne(e),(async()=>{for(let n of this.subscribers)await n.onMessagesChanged?.({messages:this.messages,state:this.state,agent:this})})()}setState(e){this.state=ne(e),(async()=>{for(let n of this.subscribers)await n.onStateChanged?.({messages:this.messages,state:this.state,agent:this})})()}legacy_to_be_removed_runAgentBridged(e){this.agentId=this.agentId??Ft();let n=this.prepareRunAgentInput(e);return[...this.middlewares,new qu].reduceRight((r,o)=>({run:i=>o.run(i,r),get messages(){return r.messages},get state(){return r.state}}),this).run(n).pipe(Hu(this.debugLogger),Xa(this.debugLogger),zu(this.debugLogger),gT(this.threadId,n.runId,this.agentId),r=>r.pipe(Tt(o=>(this.debugLogger?.event("LEGACY","Event:",o,{type:o.type}),o))))}};function YT(t){if(!Array.isArray(t.messages))return t;let e=!1,n=t.messages.map(r=>{if(r.subagentRunId===null){e=!0;let o={...r};return delete o.subagentRunId,o}return r});return e?{...t,messages:n}:t}var Nb=class extends qT{requestInit(t){return{method:"POST",headers:{...this.headers,"Content-Type":"application/json",Accept:"text/event-stream"},body:JSON.stringify(YT(t)),signal:this.abortController.signal}}runAgent(t,e){return this.abortController=t?.abortController??new AbortController,super.runAgent(t,e)}abortRun(){this.abortController.abort(),super.abortRun()}constructor(t){super(t),this.abortController=new AbortController,this.url=t.url,this.headers=ne(t.headers??{}),this.fetch=t.fetch??((e,n)=>fetch(e,n))}run(t){return fT(uT(()=>this.fetch(this.url,this.requestInit(CT(t)))),this.debugLogger)}clone(){let t=super.clone();t.url=this.url,t.headers=ne(this.headers??{}),t.fetch=this.fetch;let e=new AbortController,n=this.abortController.signal;return n.aborted&&e.abort(n.reason),t.abortController=e,t}};Ue(rr());function it(t,e){return e===void 0?t:{...t,credentials:e}}function es(t){if(t.newThread!==void 0)return t.newThread();let e=Se();return t.setActiveThread(e),e}function ts(t,e,n,r){if(e.length===0)return;let o=new URL(String(t),location.href).origin;o===location.origin||n.includes(o)||r.has(o)||(r.add(o),console.warn(`<ag-ui-chat>: sending host credentials (${e.join(", ")}) to ${o}, which is not this page's origin (${location.origin}). Those headers are the page's own authentication, and whichever server answers the browser's preflight receives them \u2014 so a URL attribute built from a query parameter or from tenant-authored configuration is a channel for the token to leave on. If this destination is deliberate, name it in \`trustedOrigins\` to confirm it and silence this notice. Reported once per origin.`))}function pr(t){return t.split(",").map(e=>e.trim()).filter(e=>e!=="")}function ns(t,e,n=new Set){let r=new Set(n);for(let s of t)s.role==="tool"&&r.add(s.toolCallId);let o=[],i=[],a=!1;for(let s of t){let c=s.role==="assistant"?KT(s.toolCalls):[];s.role==="tool"||c.length>0&&!a||(o.push(...i.map(e)),i=[]),o.push(s),a=s.role==="tool";for(let u of c)r.has(u)||(r.add(u),i.push(u))}return o.length+i.length===t.length?t:(o.push(...i.map(e)),o)}function KT(t){return Array.isArray(t)?t.map(e=>Object(e).id).filter(e=>typeof e=="string"):[]}function rs(t,e){return Object(t.metadata)[e]??t[e]}var fe={title:"Assistant",chatHistory:"Chat history",closeHistory:"Close history",searchConversations:"Search conversations",queued:"Waiting to send",removeQueued:'Do not send "{text}"',noMatches:"No conversations match that.",chatMoved:"Moved this panel out of the way",chatMinimised:"Minimised this panel",undo:"Undo",newChat:"New chat",collapse:"Collapse",expand:"Expand",expandUnread:"Expand \u2014 {count} unread",toggleTheme:"Toggle theme",copyCode:"Copy",copied:"Copied",copyFailed:"Copy failed",checkpoints:"Continue a run",noCheckpoints:"Nothing to continue yet.",resumeRun:"Resume",forkRun:"Fork",forkedRun:"branched",greeting:"Hello, {name}",greetingNoName:"Hello there",conversation:"Conversation",jumpToLatest:"Jump to latest",announceResponding:"Assistant is responding",announceAnswerReady:"Assistant answered",announceAwaitingDecision:"{count} action is waiting for your approval",announceStopped:"Response stopped",announceFailed:"The response failed",thinking:"Assistant is thinking\u2026",thoughts:"Thoughts",stopped:"\u23F9 Stopped",connectionLost:"Connection lost",noResult:"No result returned.",callNotFinished:"Not finished: the run ended or moved on before this tool call returned a result.",declinedAction:"User declined the action.",confirmCheckFailed:"Not run: the check that decides whether this action needs the user's confirmation failed.",navigating:"Navigating\u2026",historyReplaced:"The server replaced this conversation's history. Reload to see the updated transcript.",chartUndrawable:"A chart could not be drawn from the data sent, so it was removed.",historyCompacted:"Earlier turns condensed to fit the context window ({count} removed)",usingSkill:"Using skill {name}",runInterrupted:"The previous response didn\u2019t finish \u2014 the page changed before it arrived.",pageMoved:"The page changed since you last looked at it. Call read_page to see the current page, then retry.",attachmentsStillUploading:"{n} file still uploading \u2014 it was not sent with this message and is still attached.",notConnected:"This chat isn\u2019t connected to an agent, so the message wasn\u2019t sent.",continueNeedsTurn:"Type the next turn in the composer first, then pick a run to continue.",continueWhileRunning:"Wait for the current answer or stop it, then pick a run to continue.",continueWhileLoading:"Wait for the conversation to finish loading, then pick a run to continue.",skillNeeds:"\u201C{title}\u201D needs {fields} \u2014 fill it in below, then send.",message:"Message",inputPlaceholder:"Ask anything\u2026",send:"Send",stop:"Stop",attachFiles:"Attach files",recordVoice:"Record voice",stopRecording:"Stop recording",transcribing:"Transcribing\u2026",transcriptionFailed:"Transcription failed",recordingLimit:"Stopped at the {n}-minute limit \u2014 transcribing what was recorded.",toolRunning:"running\u2026",toolDeferred:"waiting for you",toolDone:"\u2713 done",toolError:"\u26A0 error",toolDeclined:"\u2298 declined",toolInterrupted:"\u25CC not finished",resizePanel:"Resize the chat panel",decisionApproved:"approved by you",decisionDeclined:"declined by you",argumentsLabel:"Arguments",resultLabel:"Result",errorLabel:"Error",declinedLabel:"Declined",interruptedLabel:"Not finished",details:"Details",toolGroupSteps:"{count} steps",toolGroupWorking:"Working through {count} steps",toolGroupWorked:"Worked through {count} steps",toolGroupWaiting:"{count} waiting for you",toolGroupFailed:"{count} failed",toolGroupDeclined:"{count} declined",toolStepRepeat:"({n})",subAgentWorking:"Working\u2026",subAgentDelegatedTo:"Delegated to {agent}",subAgentFinished:"{agent} finished",subAgentFailed:"The sub-agent failed",subAgentSteps:"Steps the sub-agent took",approvalEditArgs:"Edit the arguments before approving",approvalArgsInvalid:"That is not valid JSON, so nothing was sent.",approvalArgsNotAnObject:"Arguments have to be a JSON object.",suggestions:"Suggested follow-ups",messageActions:"Message actions",quoteSelection:"Quote",copyMessage:"Copy message",retryMessage:"Try again",feedbackUp:"Good answer",feedbackDown:"Poor answer",confirmAction:"Confirm action",confirmAlways:"Always allow",confirmRun:"Run \u201C{tool}\u201D?",confirm:"Confirm",cancel:"Cancel",approveAction:"Approve action",approvalPrompt:"Approve this action?",approve:"Approve",deny:"Deny",askUserAction:"Question",otherOption:"Other\u2026",answerPlaceholder:"Type your answer\u2026",submit:"Submit",chats:"Chats",noConversations:"No conversations yet.",rename:"Rename",renameConversation:"Rename conversation",delete:"Delete",deleteConversation:"Delete conversation",deletePrompt:"Delete?",tooLarge:"Too large (max {size})",fileTypeNotAllowed:"File type not allowed",uploadFailed:"upload failed",retry:"Retry",retryUpload:"Retry upload",remove:"Remove",removeAttachment:"Remove attachment",justNow:"just now",minutesAgo:"{n}m ago",hoursAgo:"{n}h ago",daysAgo:"{n}d ago",weeksAgo:"{n}w ago"};function Xu(t){let e={...fe};for(let n of Object.keys(t)){let r=t[n];r!==void 0&&(e[n]=r)}return e}function XT(t){let e=document.createElement("input");return e.type="text",e.className="question-input",e.setAttribute("part","question-input"),e.placeholder=t,e}function Ju(t,e,n={}){let r=n.strings??fe,o=e.options??[],i=o.length>0,a=!i||e.allowCustom===!0;return new Promise(s=>{let c=document.createElement("div");c.className="question",c.setAttribute("part","question"),c.setAttribute("role","group"),c.setAttribute("aria-label",r.askUserAction);let l=document.createElement("div");l.className="question-body",l.setAttribute("part","question-body"),l.textContent=e.question;let u=document.createElement("div");u.className="question-options",u.setAttribute("part","question-options");let f=`q-${o.length}-${e.question.length}`,m=[];for(let E of o){let S=document.createElement("label");S.className="question-choice",S.setAttribute("part","question-choice");let _=document.createElement("input");_.type="radio",_.name=f,_.value=E,_.setAttribute("part","question-radio");let I=document.createElement("span");I.setAttribute("part","question-choice-text"),I.textContent=E,S.append(_,I),u.appendChild(S),m.push(_)}let p=null,h=null;if(a){if(h=XT(r.answerPlaceholder),i){let E=document.createElement("label");E.className="question-choice",E.setAttribute("part","question-choice"),p=document.createElement("input"),p.type="radio",p.name=f,p.value="",p.setAttribute("part","question-radio");let S=document.createElement("span");S.setAttribute("part","question-choice-text"),S.textContent=r.otherOption,E.append(p,S),u.appendChild(E),h.disabled=!0}u.appendChild(h)}let x=document.createElement("div");x.className="question-actions",x.setAttribute("part","question-actions");let g=document.createElement("button");g.type="button",g.className="question-btn",g.setAttribute("part","question-button"),g.textContent=r.submit,x.appendChild(g);let w=!1,b=()=>{let E=m.find(S=>S.checked);if(E!==void 0)return E.value;if(h!==null&&(p===null||p.checked)){let S=h.value.trim();return S===""?null:S}return null},k=()=>{h!==null&&p!==null&&(h.disabled=!p.checked),g.disabled=b()===null},O=E=>{if(!w){w=!0,g.disabled=!0;for(let S of m)S.disabled=!0;p!==null&&(p.disabled=!0),h!==null&&(h.disabled=!0),c.setAttribute("data-resolved",E===""?"cancelled":"answered"),s(E)}};for(let E of[...m,...p!==null?[p]:[]])E.addEventListener("change",k);if(h?.addEventListener("input",k),h?.addEventListener("keydown",E=>{if(E.key==="Enter"){E.preventDefault();let S=b();S!==null&&O(S)}}),g.addEventListener("click",()=>{let E=b();E!==null&&O(E)}),n.signal?.addEventListener("abort",()=>O(""),{once:!0}),c.append(l,u,x),t.appendChild(c),n.signal?.aborted===!0){O("");return}k(),(i?m[0]:h)?.focus()})}function Qu(t){let e={};if(!Array.isArray(t))return e;for(let n of t){if(n===null||typeof n!="object")continue;let r=n,o=r.name,i=r.summary,a=r.description;typeof o=="string"&&typeof i=="string"&&(e[o]=typeof a=="string"?{name:o,summary:i,description:a}:{name:o,summary:i})}return e}var os=class{#e;#t={};#n=new Set;#o=new kr;constructor(e){this.#e=e}register(e){this.#o.register(e)}registerPageState(e){for(let n of Jo(e))this.#o.register(n)}has(e){return this.#o.has(e)}defaultTools(){return[...this.#s().map(e=>({name:e.name,description:e.description,parameters:e.parameters})),...this.#o.tools()]}advertise(){let e=this.#e.getTools();return this.#n=new Set(e.map(n=>n.name)),e}wasAdvertised(e){return this.#n.has(e)}resolve(e){let n=this.#s().find(r=>r.name===e);return n!==void 0?n:this.#o.has(e)?this.#o.get(e):null}summary(e){return this.#t[e]?.summary}async fetchCatalog(){let e=this.#e.element.getAttribute("data-tools-url");if(e!==null)try{let n=await fetch(e,this.#e.fetchInit(e));this.#t=Qu(await n.json())}catch{}}#r(){return this.#e.routeMap().length===0?[]:Ql(()=>this.#e.routeMap(),()=>this.#e.navigate())}#i(){let e=this.#e.getPageMap();return e===null?[]:[{name:Vo,description:"Read the current page's structure (fields, buttons, route). Call after acting to observe the result within the same turn.",parameters:{type:"object",properties:{},required:[],[Pe]:"Read the page"},handler:()=>e()}]}#a(){let e=this.#e.element.getAttribute("data-page-actions");if(e===null)return[];let n=new Set(pr(e));return[...Xl(n,r=>this.#e.resolvePageTarget(r)),...n.has(Nr.CHAT)?Hl(this.#e.element):[]]}#s(){return[...this.#r(),...this.#i(),...this.#a(),...this.#l()]}#l(){return this.#e.askUser()?[{name:"ask_user",description:"Ask the user a question and wait for their answer. Provide `options` for a multiple-choice prompt; set `allow_custom` to also accept a free-text answer.",parameters:{type:"object",properties:{question:{type:"string",description:"The question to ask the user."},options:{type:"array",items:{type:"string"},description:"Preset choices offered as radio buttons."},allow_custom:{type:"boolean",description:"Allow a free-text answer in addition to any options."}},required:["question"]},handler:(e,n)=>this.#u(e,n)}]:[]}async#u(e,n){let o={question:typeof e.question=="string"?e.question:""},i=e.options;Array.isArray(i)&&(o.options=i.filter(u=>typeof u=="string")),e.allow_custom===!0&&(o.allowCustom=!0);let a=this.#e.decision.open();this.#e.hidePending();let s=()=>Ju(this.#e.ensureGroup(),o,{signal:a,strings:this.#e.strings()}),c=this.#e.askUserRenderer(),l;this.#e.setAsking(n,!0);try{if(c===null)l=await s();else try{l=await c.call(this.#e.element,o,{signal:a})}catch(u){l=await this.#d(u,a,n,s)}}finally{this.#e.setAsking(n,!1)}return this.#e.decision.close(),this.#e.updateEmptyState(),this.#e.follow(),l}#d(e,n,r,o){return n.aborted?Promise.resolve(""):(console.warn(`ag-ui-chat: askUserRenderer failed for tool call ${r}, so the built-in question card asks instead`,e),o())}};function is(t){if(t.name!==$l)return null;let e=t.args?.id;return typeof e=="string"&&e!==""?e:null}function Ob(t,e){let n=document.createElement("button");return n.type="button",n.className=`approval-btn approval-btn--${t}`,n.setAttribute("part",`approval-button approval-${t}`),n.textContent=e,n}function ed(t,e,n={}){let r=n.strings??fe;return new Promise(o=>{let i=document.createElement("div");i.className="approval",i.setAttribute("part","approval"),e.toolName!==void 0&&i.setAttribute("data-tool-name",e.toolName),i.setAttribute("role","group"),i.setAttribute("aria-label",r.approveAction);let a=document.createElement("div");a.className="approval-body",a.setAttribute("part","approval-body"),a.textContent=e.message??r.approvalPrompt;let s=JT(e,n,r),c=document.createElement("div");c.className="approval-actions",c.setAttribute("part","approval-actions");let l=Ob("deny",r.deny),u=Ob("approve",r.approve),f=!1,m=p=>{f||(f=!0,l.disabled=!0,u.disabled=!0,i.setAttribute("data-resolved",p?"approved":"denied"),o(p))};if(l.addEventListener("click",()=>m(!1)),u.addEventListener("click",()=>{s!==null&&!s.commit()||m(!0)}),n.signal?.addEventListener("abort",()=>m(!1),{once:!0}),c.append(l,u),i.append(a,...s===null?[]:[s.root],c),t.appendChild(i),n.signal?.aborted===!0){m(!1);return}u.focus()})}function JT(t,e,n){let{onEdit:r}=e;if(r===void 0||t.args===void 0)return null;let o=JSON.stringify(t.args,null,2),i=document.createElement("div");i.className="approval-edit",i.setAttribute("part","approval-edit");let a=document.createElement("textarea");a.className="approval-args",a.setAttribute("part","approval-args"),a.setAttribute("aria-label",n.approvalEditArgs),a.rows=Math.min(10,o.split(`
`).length),a.value=o;let s=document.createElement("div");return s.className="approval-error",s.setAttribute("part","approval-error"),s.setAttribute("role","alert"),s.hidden=!0,i.append(a,s),{root:i,commit:()=>{if(a.value===o)return!0;let c;try{c=JSON.parse(a.value)}catch{return s.textContent=n.approvalArgsInvalid,s.hidden=!1,a.focus(),!1}return typeof c!="object"||c===null||Array.isArray(c)?(s.textContent=n.approvalArgsNotAnObject,s.hidden=!1,a.focus(),!1):(s.hidden=!0,r(c),!0)}}}function td(t,e){let n=document.createElement("button");return n.type="button",n.className=`confirm-btn confirm-btn--${t}`,n.setAttribute("part",`confirm-button confirm-${t}`),n.textContent=e,n}function nd(t,e,n={}){let r=n.strings??fe;return new Promise(o=>{let i=document.createElement("div");i.className="confirm",i.setAttribute("part","confirm"),i.setAttribute("data-tool-name",e.toolName),i.setAttribute("role","group"),i.setAttribute("aria-label",r.confirmAction);let a=document.createElement("div");a.className="confirm-body",a.setAttribute("part","confirm-body"),a.textContent=e.message??re(r.confirmRun,{tool:e.toolName});let s=document.createElement("pre");s.className="confirm-args",s.setAttribute("part","confirm-args"),s.textContent=JSON.stringify(e.args,null,2),s.hidden=Object.keys(e.args).length===0;let c=document.createElement("div");c.className="confirm-actions",c.setAttribute("part","confirm-actions");let l=td("cancel",r.cancel),u=n.onAlwaysAllow===void 0?null:td("always",re(r.confirmAlways,{tool:e.toolName})),f=td("confirm",r.confirm),m=!1,p=h=>{m||(m=!0,i.remove(),o(h))};if(l.addEventListener("click",()=>p(!1)),f.addEventListener("click",()=>p(!0)),u?.addEventListener("click",()=>{n.onAlwaysAllow?.(),p(!0)}),n.signal?.addEventListener("abort",()=>p(!1),{once:!0}),c.append(l,...u===null?[]:[u],f),i.append(a,s,c),t.appendChild(i),n.signal?.aborted===!0){p(!1);return}f.focus()})}function rd(t){return t[Tr]===!0}function as(t){return t[Ar]===!0}var ss=class{#e;#t=new Set;#n=null;constructor(e){this.#e=e}forgetWaivers(){this.#t.clear()}buildContext(){return this.#n=window.location.href,this.#e.getContext()}async execute(e){if(is(e)!==null)return null;let n=this.#e.tenure(),r=this.#e.conversation(),o=this.#e.threadId(),i=this.#e.transcript.cardFor(e);this.#e.transcript.forgetCard(e.id),this.#e.transcript.setCardElement(e.id,i.element),this.#e.transcript.holdRunning(e.id,i);let a=this.#e.tools.wasAdvertised(e.name)?this.#e.tools.resolve(e.name):null;if(a===null)return this.#e.transcript.isServerSettled(e.id)||i.settle(K.INTERRUPTED,this.#e.strings().callNotFinished),null;if(this.#e.getPageMap()!==null&&e.name!==Vo&&!as(a.parameters)&&this.#a()){let u=this.#e.strings().pageMoved;return i.settle(K.ERROR,u),this.#e.transcript.showPending(),{content:`Error: ${u}`,error:u,outcome:je.FAILED}}let s=this.#e.decision.open(),c=await this.#r(e,a);if(this.#e.decision.close(),s.aborted)return this.#i(i);if(c==="unanswered"){let u=this.#e.strings().confirmCheckFailed;return i.settle(K.DECLINED,u),this.#e.transcript.showPending(),{content:u,outcome:je.DENIED}}if(c!==null){let u={toolName:e.name,args:e.args},f=a.parameters[Zo];typeof f=="string"&&(u.message=f);let m=this.#e.decision.open();i.setAsking(!0);let p;try{let h=nd(this.#e.transcript.ensureGroup(),u,{signal:m,strings:this.#e.strings(),...c==="destructive"?{onAlwaysAllow:()=>this.#t.add(e.name)}:{}});this.#e.transcript.updateEmptyState(),this.#e.transcript.follow(),p=await h}finally{i.setAsking(!1)}if(this.#e.decision.close(),this.#e.tenure()!==n)return null;if(i.recordDecision(p?"approved":"declined"),!p){let h=this.#e.strings().declinedAction;return i.settle(K.DECLINED,h),this.#e.conversation()===r&&this.#e.transcript.showPending(),{content:h,outcome:je.DENIED}}if(m.aborted)return this.#i(i)}let l=as(a.parameters)&&this.#e.navigate()===null;l&&this.#e.conversationStore().saveCheckpoint(o,{toolCallId:e.id});try{let u=await a.handler(e.args,e.id);if(this.#e.tenure()!==n)return null;if(a.render!==void 0&&this.#e.transcript.renderToolOutput(a.render,e),l)return i.settle(K.DONE,this.#e.strings().navigating),{content:"",halt:!0};let f=JSON.stringify(u??null);return i.settle(K.DONE,f),this.#e.conversation()===r&&this.#e.transcript.showPending(),{content:f}}catch(u){if(this.#e.tenure()!==n)return null;l&&this.#e.conversationStore().saveCheckpoint(o,null);let f=u instanceof Error?u.message:String(u);return i.settle(K.ERROR,f),this.#e.conversation()===r&&this.#e.transcript.showPending(),{content:`Error: ${f}`,error:f,outcome:je.FAILED}}}async resolveInterrupts(e){let n=this.#e.decision.open();this.#e.announce(re(this.#e.strings().announceAwaitingDecision,{count:e.length})),this.#e.transcript.hidePending();let r=await Promise.all(e.map(async i=>{let a=i.toolCallId!==void 0?this.#e.transcript.card(i.toolCallId):void 0,s={},c=QT(i)??i.message;c!==void 0&&(s.message=c);let l=a?.element.getAttribute("data-tool-name");l!=null&&(s.toolName=l);let u,f=this.#e.approveWithEdits()&&a!==void 0;f&&(s.args=a.args),a?.mark(K.DEFERRED),a!==void 0&&this.#e.transcript.revealStep(a);let m=()=>ed(a?.approvalSlot??this.#e.transcript.ensureGroup(),s,{signal:n,strings:this.#e.strings(),...f?{onEdit:x=>{u=x}}:{}}),p=this.#e.approvalRenderer(),h;if(p===null)h=await m();else try{h=await p.call(this.#e.element,s,{signal:n})}catch(x){h=await this.#o(x,n,i.id,m)}return a?.recordDecision(h?"approved":"declined"),h?a?.mark(K.PENDING):a?.settle(K.DECLINED,this.#e.strings().declinedAction),{id:i.id,approved:h,editedArgs:u}}));this.#e.transcript.updateEmptyState(),this.#e.transcript.follow(),this.#e.decision.close();let o={};for(let{id:i,approved:a,editedArgs:s}of r)o[i]=a?{status:"resolved",payload:s===void 0?{approved:!0}:{approved:!0,editedArgs:s}}:{status:"cancelled"};return o}#o(e,n,r,o){return n.aborted?Promise.resolve(!1):(console.warn(`ag-ui-chat: approvalRenderer failed for interrupt ${r}, so the built-in approval card asks instead`,e),o())}async#r(e,n){if(this.#e.autoConfirm())return null;let r=this.#e.confirmPredicate();if(r!==null)try{return await r.call(this.#e.element,e.name,e.args)===!0?"predicate":null}catch(o){return console.warn(`ag-ui-chat: confirmPredicate failed for tool ${e.name}, so the call was refused`,o),"unanswered"}return this.#t.has(e.name)?null:rd(n.parameters)?"destructive":null}#i(e){return e.settle(K.INTERRUPTED,this.#e.strings().callNotFinished),null}#a(){return this.#n!==null&&this.#n!==window.location.href}};function QT(t){let e=t.metadata?.[Zo];return typeof e=="string"&&e.trim()!==""?e:void 0}var eA="http://www.w3.org/2000/svg",et={top:20,right:12,bottom:30,left:44},tA=480,nA=220,rA=220/480,oA=160,iA=320,Pb=8,aA=5.6,Mb=["var(--_chart-1)","var(--_chart-2)","var(--_chart-3)","var(--_chart-4)","var(--_chart-5)","var(--_chart-6)"];function In(t){return Mb[t%Mb.length]}function Lb(t){let e=Math.max(nA,t),n=Math.min(iA,Math.max(oA,Math.round(e*rA)));return{width:e,height:n,plotW:e-et.left-et.right,plotH:n-et.top-et.bottom}}function kt(t,e){let n=document.createElementNS(eA,t);for(let[r,o]of Object.entries(e))n.setAttribute(r,String(o));return n}function zb(t,e){let n=kt("text",{"font-size":10,fill:"currentColor","fill-opacity":.65,...e});return n.textContent=t,n}function sA(t){let e=[];return t.labels.forEach((n,r)=>{let o=0;for(let i of t.series)o+=i.points[r]??0,e.push(o)}),e}function lA(t){let e=t.kind==="stacked"?sA(t):t.series.flatMap(o=>[...o.points]),n=Math.max(0,...e),r=Math.min(0,...e);return n===r?{min:r,max:n+1}:{min:r,max:n}}function Rn(t,e,n,r){return et.top+r.plotH-(t-e)/(n-e)*r.plotH}function od(t,e,n){let r=n.plotW/e;return et.left+r*t+r/2}function cA(t,e){let n=e.plotW/t.length,r=Math.max(...t.map(o=>o.length))*aA;return Math.max(1,Math.ceil(r/n))}function uA(t,e,n,r,o){for(let a of[r,o]){let s=Rn(a,r,o,n);t.appendChild(kt("line",{x1:et.left,y1:s,x2:n.width-et.right,y2:s,stroke:"currentColor","stroke-opacity":a===r?.35:.12})),t.appendChild(zb(String(Math.round(a)),{x:et.left-6,y:s+4,"text-anchor":"end"}))}let i=cA(e.labels,n);e.labels.forEach((a,s)=>{s%i===0&&t.appendChild(zb(a,{x:od(s,e.labels.length,n),y:n.height-et.bottom+16,"text-anchor":"middle"}))})}function dA(t,e,n,r,o){let i=n.plotW/e.labels.length,a=i*.7/e.series.length,s=Rn(r,r,o,n);e.series.forEach((c,l)=>{c.points.forEach((u,f)=>{let m=Rn(u,r,o,n);t.appendChild(kt("rect",{x:et.left+i*f+i*.15+a*l,y:m,width:a,height:Math.max(1,s-m),fill:In(l),rx:2}))})})}function pA(t,e,n,r,o){let i=n.plotW/e.labels.length,a=i*.7,s=e.labels.map(()=>0);e.series.forEach((c,l)=>{c.points.forEach((u,f)=>{let m=s[f]??0,p=m+u;s[f]=p;let h=Rn(p,r,o,n);t.appendChild(kt("rect",{x:et.left+i*f+i*.15,y:h,width:a,height:Math.max(1,Rn(m,r,o,n)-h),fill:In(l)}))})})}function hA(t,e,n,r,o){e.series.forEach((i,a)=>{let s=i.points.map((c,l)=>`${od(l,e.labels.length,n)},${Rn(c,r,o,n)}`).join(" ");t.appendChild(kt("polyline",{points:s,fill:"none",stroke:In(a),"stroke-width":2,"stroke-linejoin":"round"}))})}function fA(t,e,n,r,o){e.series.forEach((i,a)=>{i.points.forEach((s,c)=>{t.appendChild(kt("circle",{cx:od(c,e.labels.length,n),cy:Rn(s,r,o,n),r:4,fill:In(a),"fill-opacity":.85}))})})}function mA(t,e,n){let r=e.reduce((c,l)=>c+l,0),o=n.width/2,i=et.top+n.plotH/2,a=Math.min(n.plotW,n.plotH)/2;if(r===0){t.appendChild(kt("circle",{cx:o,cy:i,r:a,fill:"none",stroke:"currentColor","stroke-opacity":.3}));return}let s=-Math.PI/2;e.forEach((c,l)=>{let u=c/r*Math.PI*2,f=s+u;if(u>=Math.PI*2)t.appendChild(kt("circle",{cx:o,cy:i,r:a,fill:In(l)}));else{let m=o+a*Math.cos(s),p=i+a*Math.sin(s),h=o+a*Math.cos(f),x=i+a*Math.sin(f),g=u>Math.PI?1:0;t.appendChild(kt("path",{d:`M ${o} ${i} L ${m} ${p} A ${a} ${a} 0 ${g} 1 ${h} ${x} Z`,fill:In(l)}))}s=f})}function Db(t,e){let n=kt("svg",{viewBox:`0 0 ${e.width} ${e.height}`,width:"100%",role:"img"});if(n.setAttribute("aria-label",t.title??`${t.kind} chart`),t.kind==="pie"){let i=t.series[0];return mA(n,i.points.map(a=>Math.max(0,a)),e),n}let{min:r,max:o}=lA(t);return uA(n,t,e,r,o),t.kind==="bar"?dA(n,t,e,r,o):t.kind==="stacked"?pA(n,t,e,r,o):t.kind==="line"?hA(n,t,e,r,o):fA(n,t,e,r,o),n}function gA(t){if(t.length<2)return null;let e=document.createElement("div");return e.className="chart-legend",e.setAttribute("part","chart-legend"),t.forEach((n,r)=>{let o=document.createElement("span");o.className="chart-legend-item";let i=document.createElement("span");i.className="chart-legend-swatch",i.style.background=In(r),o.append(i,document.createTextNode(n)),e.appendChild(o)}),e}function vA(t,e){new ResizeObserver(()=>{e(Math.round(t.clientWidth/Pb)*Pb)}).observe(t)}function ro(t){if(t.labels.length===0||t.series.length===0)return null;let e=document.createElement("div");if(e.className="chart-block",e.setAttribute("part","chart-block"),t.title!==void 0&&t.title!==""){let i=document.createElement("div");i.className="chart-title",i.setAttribute("part","chart-title"),i.textContent=t.title,e.appendChild(i)}let n=tA,r=Db(t,Lb(n));e.appendChild(r);let o=gA(t.kind==="pie"?t.labels:t.series.map(i=>i.label));return o!==null&&e.appendChild(o),vA(e,i=>{if(i===n)return;n=i;let a=Db(t,Lb(n));r.replaceWith(a),r=a}),e}var bA=["bar","line","pie","scatter","stacked"];function yA(t){return bA.includes(t)?t:"bar"}function wA(t){if(!Array.isArray(t))return null;let e=[];for(let n of t){if(typeof n!="number"||!Number.isFinite(n)||Math.abs(n)>1e15)return null;e.push(n)}return e}function EA(t){if(!Array.isArray(t))return null;for(let e=0;e<t.length;e+=1)if(typeof t[e]!="string")return null;return t}function hr(t){if(typeof t!="object"||t===null)return null;let e=t,n=EA(e.labels);if(n===null||!Array.isArray(e.series))return null;let r=[];for(let a of e.series){if(typeof a!="object"||a===null)return null;let s=a,c=wA(s.points);if(c===null||c.length!==n.length)return null;r.push({label:typeof s.label=="string"?s.label:"",points:c})}if(r.length===0||r.length*n.length>2e4||n.length>2e3)return null;let o=yA(e.kind),i=e.title;return typeof i=="string"?{kind:o,title:i,labels:n,series:r}:{kind:o,labels:n,series:r}}var ls="render_chart";function xA(t){let e=hr(t);return e===null?null:ro(e)}function _A(t){let e=hr(t);return e!==null&&e.labels.length>0&&e.series.length>0}var SA="chart not rendered: expected labels (strings) and series, each with one finite number per label";function $b(){return{name:ls,description:"Show a chart in the conversation. Supply the data and the page draws it. Every series must have exactly one point per label.",parameters:{type:"object",properties:{kind:{type:"string",enum:["bar","line","pie","scatter","stacked"]},title:{type:"string"},labels:{type:"array",items:{type:"string"}},series:{type:"array",items:{type:"object",properties:{label:{type:"string"},points:{type:"array",items:{type:"number"}}},required:["points"]}}},required:["labels","series"],"x-summary":"Draw a chart"},handler:t=>_A(t)?"chart rendered":SA,render:xA}}function Yt(t){t.style.height="auto",t.style.height=`${t.scrollHeight}px`}function cs(t,e,n){let r=document.createElement("slot");return r.name=t,r.className=e,r.innerHTML=n,r}function Ub(t){let{input:e,send:n,attachButton:r,fileInput:o,strings:i,signal:a}=t,s=t.queuedRow;s.className="queued",s.setAttribute("part","queued"),s.setAttribute("role","group"),s.setAttribute("aria-label",i.queued),s.hidden=!0;let c=document.createElement("div");c.className="input-row",c.setAttribute("part","composer");let l=document.createElement("div");l.className="composer",l.setAttribute("part","composer-surface");let u=document.createElement("div");u.className="composer-tools",u.setAttribute("part","composer-tools"),e.className="input",e.setAttribute("part","input"),e.setAttribute("aria-label",i.message),e.rows=1,e.placeholder=i.inputPlaceholder,e.addEventListener("keydown",t.onKeydown,{signal:a}),e.addEventListener("input",t.onInput,{signal:a}),n.className="send",n.type="button",n.setAttribute("part","send"),n.replaceChildren(cs("icon-send","send-send",Rp),cs("icon-stop","send-stop",Cp)),n.title=i.send,n.setAttribute("aria-label",i.send),n.dataset.state="idle",n.addEventListener("click",t.onSend,{signal:a});let f=t.hint;return f.className="skill-hint",f.setAttribute("part","skill-hint"),f.hidden=!0,r.className="attach-btn",r.type="button",r.setAttribute("part","attach-button"),r.replaceChildren(cs("icon-attach","attach-glyph",Np)),r.title=i.attachFiles,r.setAttribute("aria-label",i.attachFiles),r.hidden=!0,r.addEventListener("click",()=>o.click(),{signal:a}),o.className="attach-input",o.type="file",o.multiple=!0,o.hidden=!0,o.addEventListener("change",t.onFilesPicked,{signal:a}),t.attachSlot.className="attachment-slot",t.voiceSlot.className="voice-slot",u.append(r,t.voiceSlot,n),l.append(e,u),c.append(l,o),c}function id(t,e){return new Promise((n,r)=>{let o=new FormData;o.append("file",t);let i=new XMLHttpRequest;i.open("POST",e.url),i.withCredentials=e.credentials==="include";for(let[c,l]of Object.entries(e.headers??{}))i.setRequestHeader(c,l);let a=e.onProgress;a!==void 0&&i.upload.addEventListener("progress",c=>{c.lengthComputable&&a(c.total===0?0:c.loaded/c.total)}),i.addEventListener("load",()=>{if(i.status>=200&&i.status<300)try{n(TA(JSON.parse(i.responseText)))}catch{r(new Error("upload returned an unreadable response"))}else r(new Error(AA(i)))}),i.addEventListener("error",()=>r(new Error("upload failed"))),i.addEventListener("abort",()=>r(new Error("upload cancelled")));let s=e.signal;s!==void 0&&s.addEventListener("abort",()=>i.abort()),i.send(o)})}function TA(t){if(typeof t!="object"||t===null)throw new Error("not an object");let e=t,n=e.id,r=e.name,o=e.mime,i=e.size,a=e.url;if(typeof n!="string"||typeof r!="string"||typeof o!="string"||typeof i!="number")throw new Error("missing fields");return typeof a=="string"?{id:n,name:r,mime:o,size:i,url:a}:{id:n,name:r,mime:o,size:i}}function AA(t){try{let e=JSON.parse(t.responseText);if(typeof e.error=="string")return e.error}catch{}return`upload failed (${t.status})`}function us(t){let e=document.createElement("div");e.className="attachment-chips",e.setAttribute("part","attachment-chips");for(let n of t)e.appendChild(kA(n));return e}function kA(t){let e=document.createElement("div");e.className="attachment-chip attachment-chip--ready",e.setAttribute("part","attachment-chip");let n=document.createElement("span");n.className="attachment-chip-icon",n.setAttribute("part","attachment-chip-icon"),n.innerHTML=ad(t.mime),n.setAttribute("aria-hidden","true");let r=document.createElement("span");r.className="attachment-chip-name",r.setAttribute("part","attachment-chip-name"),r.textContent=t.name,r.title=t.name;let o=document.createElement("span");return o.className="attachment-chip-size",o.setAttribute("part","attachment-chip-size"),o.textContent=ds(t.size),e.append(n,r,o),e}function ad(t){return t.startsWith("image/")?Fp:t==="application/pdf"?Gp:t.startsWith("text/")?Bp:Hp}function ds(t){if(t<1024)return`${t} B`;let e=["KB","MB","GB"],n=t/1024,r=0;for(;n>=1024&&r<e.length-1;)n/=1024,r+=1;return`${n<10?Math.round(n*10)/10:Math.round(n)} ${e[r]}`}var ps=class{element;#e;#t;#n=[];constructor(e){this.#e=e,this.#t=e.strings??fe,this.element=document.createElement("div"),this.element.className="attachment-tray",this.element.setAttribute("part","attachment-tray"),this.element.hidden=!0}add(e){let n={localId:Se(),file:e,status:Xe.UPLOADING,progress:0,ref:null,error:"",controller:null};this.#n.push(n);let r=this.#o(e);if(r!==null){n.status=Xe.ERROR,n.error=r,this.#a(),this.#e.onChange?.();return}this.#a(),this.#e.onChange?.(),this.#r(n)}readyRefs(){let e=[];for(let n of this.#n)n.ref!==null&&e.push(n.ref);return e}hasPending(){return this.#n.some(e=>e.status===Xe.UPLOADING)}pendingCount(){return this.#n.filter(e=>e.status===Xe.UPLOADING).length}isEmpty(){return this.#n.length===0}clearReady(){this.#n=this.#n.filter(e=>e.status===Xe.UPLOADING),this.#a()}clear(){for(let e of this.#n)e.controller?.abort();this.#n=[],this.#a()}dispose(){for(let e of this.#n)e.controller?.abort()}#o(e){return this.#e.maxBytes>0&&e.size>this.#e.maxBytes?re(this.#t.tooLarge,{size:ds(this.#e.maxBytes)}):IA(this.#e.accept,e)?null:this.#t.fileTypeNotAllowed}#r(e){let n=this.#o(e.file);if(n!==null){e.status=Xe.ERROR,e.error=n,this.#a(),this.#e.onChange?.();return}e.status=Xe.UPLOADING,e.progress=0,e.error="";let r=new AbortController;e.controller=r,this.#a(),this.#e.upload(e.file,o=>{e.progress=o,this.#a()},r.signal).then(o=>{e.status=Xe.READY,e.ref=o}).catch(o=>{e.status=Xe.ERROR,e.error=o instanceof Error?o.message:this.#t.uploadFailed}).finally(()=>{e.controller=null,this.#a(),this.#e.onChange?.()})}#i(e){e.controller?.abort(),this.#n=this.#n.filter(n=>n!==e),this.#a(),this.#e.onChange?.()}#a(){this.element.replaceChildren(),this.element.hidden=this.#n.length===0;for(let e of this.#n)this.element.appendChild(this.#s(e))}#s(e){let n=document.createElement("div");n.className=`attachment-chip attachment-chip--${e.status}`,n.setAttribute("part","attachment-chip");let r=document.createElement("span");r.className="attachment-chip-icon",r.setAttribute("part","attachment-chip-icon"),r.innerHTML=ad(e.file.type),r.setAttribute("aria-hidden","true");let o=document.createElement("span");o.className="attachment-chip-name",o.setAttribute("part","attachment-chip-name"),o.textContent=e.file.name,o.title=e.file.name;let i=document.createElement("span");if(i.className="attachment-chip-size",i.setAttribute("part","attachment-chip-size"),i.textContent=e.status===Xe.ERROR?e.error:ds(e.file.size),n.append(r,o,i),e.status===Xe.UPLOADING){let s=document.createElement("div");s.className="attachment-chip-bar",s.setAttribute("part","attachment-chip-bar");let c=document.createElement("div");c.className="attachment-chip-bar-fill",c.setAttribute("part","attachment-chip-bar-fill"),c.style.width=`${Math.round(e.progress*100)}%`,s.appendChild(c),n.appendChild(s)}if(e.status===Xe.ERROR){let s=document.createElement("button");s.type="button",s.className="attachment-chip-retry",s.setAttribute("part","attachment-chip-retry"),s.title=this.#t.retry,s.setAttribute("aria-label",this.#t.retryUpload),s.textContent="\u21BB",s.addEventListener("click",()=>this.#r(e)),n.appendChild(s)}let a=document.createElement("button");return a.type="button",a.className="attachment-chip-remove",a.setAttribute("part","attachment-chip-remove"),a.title=this.#t.remove,a.setAttribute("aria-label",this.#t.removeAttachment),a.textContent="\u2715",a.addEventListener("click",()=>this.#i(e)),n.appendChild(a),n}};function IA(t,e){let n=pr(t).map(i=>i.toLowerCase());if(n.length===0)return!0;let r=e.type.toLowerCase(),o=e.name.toLowerCase();return n.some(i=>i.startsWith(".")?o.endsWith(i):i.endsWith("/*")?r.startsWith(i.slice(0,-1)):r===i)}var hs=class{#e;#t=null;constructor(e){this.#e=e}get tray(){return this.#t}wire(e){this.#t?.element.remove(),this.#t=null;let n=this.#e.element.getAttribute("data-attachments-url"),r=this.#e.uploadHandler()??this.#n(n);if(r===null)return;let o=this.#e.element.getAttribute("data-attachment-accept")??"",i=new ps({upload:r,maxBytes:this.#o(),accept:o,strings:this.#e.strings(),onChange:()=>this.#l(i)});this.#t=i,this.#e.slot.appendChild(this.#t.element),this.#e.fileInput.accept=o,this.#e.button.hidden=!1,this.#r(e),this.#s(i,e)}attach(e){return this.#t===null?!1:(this.#t.add(e),!0)}onFilesPicked(){let e=this.#e.fileInput,n=e.files;if(n!==null)for(let r of Array.from(n))this.#t?.add(r);e.value=""}#n(e){return e===null?null:(n,r,o)=>id(n,{url:e,headers:this.#e.headersFor(e),...this.#e.credentialsOption(),onProgress:r,signal:o})}#o(){let e=this.#e.element.getAttribute("data-attachment-max-bytes");if(e===null)return zl;let n=Number.parseInt(e,10);return Number.isFinite(n)&&n>=0?n:zl}#r(e){let n=this.#e.chat;n.addEventListener("dragover",r=>{r.preventDefault(),n.classList.add("chat--dragover")},{signal:e}),n.addEventListener("dragleave",()=>{n.classList.remove("chat--dragover")},{signal:e}),n.addEventListener("drop",r=>{r.preventDefault(),n.classList.remove("chat--dragover");let o=r.dataTransfer?.files;if(o!==void 0)for(let i of Array.from(o))this.#t?.add(i)},{signal:e})}#i(e,n,r){let o=this.#a(),i=n.getData("text/plain");o===null||i.length<o||(e.preventDefault(),r.add(new File([i],`pasted-${Hb()}.txt`,{type:"text/plain"})))}#a(){let e=this.#e.element.getAttribute("data-paste-attach");if(e===null)return Wo;if(e==="off")return null;let n=Number.parseInt(e,10);return Number.isNaN(n)||n<=0?(console.warn(`<ag-ui-chat>: data-paste-attach="${e}" is neither "off" nor a positive number of characters, so the default of ${Wo} is used.`),Wo):n}#s(e,n){this.#e.chat.addEventListener("paste",r=>{let o=r.clipboardData??null;if(o===null)return;let i=Array.from(o.files);if(i.length===0){this.#i(r,o,e);return}o.getData("text/plain")===""&&r.preventDefault();for(let a of i)this.#t?.add(RA(a))},{signal:n})}#l(e){this.#e.element.dispatchEvent(new CustomEvent(Il,{detail:{attachments:e.readyRefs(),pending:e.pendingCount()},bubbles:!0,composed:!0}))}};function Hb(){return new Date().toISOString().replace(/[:.]/g,"-")}function RA(t){if(t.name!=="")return t;let e=t.type.split("/")[1]??t.type,n=Hb();return new File([t],e===""?`pasted-${n}`:`pasted-${n}.${e}`,{type:t.type})}async function sd(t,e){let n=new FormData;n.append("audio",t,"recording.webm");let r=await fetch(e.url,it({method:"POST",headers:{...e.headers??{}},body:n},e.credentials));if(!r.ok)throw new Error(await CA(r));let o=await r.json();if(typeof o=="object"&&o!==null&&typeof o.text=="string")return o.text;throw new Error("transcription returned an unreadable response")}async function CA(t){try{let e=await t.json();if(typeof e.error=="string")return e.error}catch{}return`transcription failed (${t.status})`}var Fb=12e4,fs=class{element;#e;#t;#n;#o="idle";#r=null;#i=null;#a=[];#s=null;#l=!1;#u=!1;#d={};constructor(e){this.#e=e.transcribe,this.#t=e.onText,this.#n=e.strings??fe,this.element=document.createElement("button"),this.element.type="button",this.element.className="voice-btn",this.element.setAttribute("part","voice-button");let n=document.createElement("slot");n.name="icon-voice",n.innerHTML=Op,this.element.append(n),this.#y("idle"),this.element.addEventListener("click",()=>{this.toggle()})}async toggle(){if(this.#o==="recording"){this.#p();return}this.#o!=="transcribing"&&await this.#f()}async#f(){let e={};this.#d=e;let n;try{n=await navigator.mediaDevices.getUserMedia({audio:!0})}catch{n=null}if(e!==this.#d||this.#u){for(let o of n?.getTracks()??[])o.stop();return}if(n===null){this.#g(this.#n.transcriptionFailed);return}this.#i=n,this.#a=[],this.#l=!1;let r;try{r=new MediaRecorder(n),r.addEventListener("dataavailable",o=>{this.#a.push(o.data)}),r.addEventListener("stop",()=>{this.#c(r.mimeType)}),this.#r=r,r.start()}catch{this.#g(this.#n.transcriptionFailed);return}this.#s=setTimeout(()=>{this.#l=!0,this.#p()},Fb),this.#y("recording")}#p(){this.#m(),this.#r?.stop()}#m(){this.#s!==null&&(clearTimeout(this.#s),this.#s=null)}dispose(){this.#u=!0,this.#m(),this.#r!==null&&this.#r.state!=="inactive"&&this.#r.stop(),this.#r=null,this.#b()}async#c(e){if(this.#u)return;this.#b(),this.#y("transcribing");let n=new Blob(this.#a,{type:e||"audio/webm"});try{let r=await this.#e(n);if(this.#u)return;this.#y("idle"),this.#l&&(this.element.title=re(this.#n.recordingLimit,{n:Fb/6e4})),r!==""&&this.#t(r)}catch(r){this.#g(r instanceof Error?r.message:this.#n.transcriptionFailed)}finally{this.#r=null}}#b(){for(let e of this.#i?.getTracks()??[])e.stop();this.#i=null}#g(e){this.#u||(this.#b(),this.#r=null,this.#y("idle"),this.element.title=e)}#y(e){this.#o=e,this.element.dataset.state=e;let n=this.#E(e);this.element.title=n,this.element.setAttribute("aria-label",n),this.element.setAttribute("aria-pressed",String(e==="recording")),this.element.disabled=e==="transcribing"}#E(e){return e==="recording"?this.#n.stopRecording:e==="transcribing"?this.#n.transcribing:this.#n.recordVoice}};var ms=class{#e;#t=null;constructor(e){this.#e=e}wire(){this.#t?.element.remove(),this.#t=null;let e=this.#e.element.getAttribute("data-transcribe-url"),n=this.#e.transcribeHandler()??this.#n(e);n!==null&&(this.#t=new fs({transcribe:n,onText:r=>this.#o(r),strings:this.#e.strings()}),this.#e.slot.appendChild(this.#t.element))}dispose(){this.#t?.dispose()}#n(e){return e===null?null:n=>sd(n,{url:e,headers:this.#e.headersFor(e),...this.#e.credentialsOption()})}#o(e){let n=this.#e.input,r=n.value.trim();n.value=r===""?e:`${r} ${e}`,this.#e.onInput(),n.focus()}};var gs=class{chips;palette;#e;#t=[];#n=!1;#o=!1;#r=[];#i=0;constructor(e){this.#e=e,this.chips=document.createElement("div"),this.chips.className="skill-chips",this.chips.setAttribute("part","skill-chips"),this.chips.hidden=!0,this.palette=document.createElement("div"),this.palette.className="skill-palette",this.palette.setAttribute("part","skill-palette"),this.palette.setAttribute("role","listbox"),this.palette.hidden=!0}setSkills(e){this.#t=e,this.#u()}enableChips(e){this.#n=e,this.#u()}enableSlash(e){this.#o=e}isOpen(){return!this.palette.hidden}onInput(e){this.#o&&e.startsWith("/")?this.#a(e.slice(1)):this.close()}onKeydown(e){return this.isOpen()?e.key==="ArrowDown"?(this.#s(1),!0):e.key==="ArrowUp"?(this.#s(-1),!0):e.key==="Escape"?(this.close(),!0):e.key==="Enter"?(this.#r.slice(this.#i,this.#i+1).forEach(n=>{this.#l(n)}),!0):!1:!1}close(){this.palette.hidden=!0,this.palette.replaceChildren()}#a(e){let n=e.trim().toLowerCase(),r=this.#t.filter(o=>o.name.toLowerCase().includes(n)||o.title.toLowerCase().includes(n));if(r.length===0){this.close();return}this.#r=r,this.#i=0,this.#d(),this.palette.hidden=!1}#s(e){let n=this.#r.length;this.#i=(this.#i+e+n)%n,this.#d()}#l(e){this.close(),this.#e(e)}#u(){this.chips.replaceChildren();let e=this.#n?this.#t.filter(n=>n.chip===!0):[];this.chips.hidden=e.length===0;for(let n of e){let r=document.createElement("button");r.type="button",r.className="skill-chip",r.setAttribute("part","skill-chip"),r.textContent=n.title,r.title=`/${n.name}`,r.addEventListener("click",()=>this.#l(n)),this.chips.appendChild(r)}}#d(){this.palette.replaceChildren(),this.#r.forEach((e,n)=>{let r=document.createElement("button");r.type="button",r.className="skill-item",r.setAttribute("part","skill-item"),r.setAttribute("role","option"),r.setAttribute("aria-selected",n===this.#i?"true":"false");let o=document.createElement("span");o.className="skill-item-title",o.setAttribute("part","skill-item-title");let i=document.createElement("code");if(i.className="skill-item-token",i.setAttribute("part","skill-item-token"),i.textContent=`/${e.name}`,o.append(i,document.createTextNode(` ${e.title}`)),r.appendChild(o),e.description!==void 0){let a=document.createElement("span");a.className="skill-item-desc",a.setAttribute("part","skill-item-desc"),a.textContent=e.description,r.appendChild(a)}r.addEventListener("click",()=>this.#l(e)),this.palette.appendChild(r)})}};var NA=500;function oo(t,e=[],n){for(let r of GA(e)){if(!t.contains(r.startContainer)||!t.contains(r.endContainer))continue;let o=document.createRange();o.setStart(r.startContainer,r.startOffset),o.setEnd(r.endContainer,r.endOffset);let i=LA(o).trim();if(i!=="")return{text:i,rect:FA(o,n)}}return null}function ld(t){let e=OA(t);return e.length===0?"":`${MA(e.join(`
`)).split(`
`).map(o=>`> ${o}`.trimEnd()).join(`
`)}

`}function OA(t){let e=t.split(/\r\n?|\n/).map(i=>i.trimEnd()),n=e.filter(i=>i!=="").map(PA),r=n.length===0?0:Math.min(...n),o=[];for(let i of e){let a=i.slice(r);a===""&&(o.length===0||o[o.length-1]==="")||o.push(a)}for(;o[o.length-1]==="";)o.pop();return o}function PA(t){return t.length-t.trimStart().length}function MA(t){return t.length>500?`${t.slice(0,500).trimEnd()}...`:t}function LA(t){let e="";for(let n of UA(t)){let r=n.parentElement;if(!HA(r))continue;let o=n===t.startContainer?t.startOffset:0,i=n===t.endContainer?t.endOffset:n.data.length;e+=zA(n.data.slice(o,i),r)}return e}function zA(t,e){return DA.has($A(e))?t:t.replace(/[^\S\n]*\n[^\S\n]*/g,`
`).replace(/[^\S\n]+/g," ")}var DA=new Set(["pre","pre-wrap","break-spaces"]);function $A(t){return window.getComputedStyle(t).whiteSpace}function UA(t){let e=t.commonAncestorContainer;if(e.nodeType===Node.TEXT_NODE)return[e];let n=[],r=document.createTreeWalker(e,NodeFilter.SHOW_TEXT);for(let o=r.nextNode();o!==null;o=r.nextNode())t.intersectsNode(o)&&n.push(o);return n}function HA(t){return typeof t.checkVisibility!="function"?!0:t.checkVisibility({contentVisibilityAuto:!0,opacityProperty:!0,visibilityProperty:!0})}function FA(t,e){let n=[...t.getClientRects()];if(n.length===0)return t.getBoundingClientRect();if(e===void 0)return n[0];let r=n[0],o=Gb(r,e);for(let i of n.slice(1)){let a=Gb(i,e);a<o&&(o=a,r=i)}return r}function Gb(t,e){let n=Math.max(t.left-e.x,0,e.x-t.right),r=Math.max(t.top-e.y,0,e.y-t.bottom);return Math.hypot(n,r)}function GA(t){let e=window.getSelection();if(e===null)return[];let n=[...BA(e,t)];return e.rangeCount>0&&n.push(e.getRangeAt(0)),n}function BA(t,e){let n=t.getComposedRanges;if(n===void 0)return[];try{return n.call(t,{shadowRoots:e})}catch{return n.call(t,...e)}}var cd=6,ZA=`
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
`;function ud(t){let{within:e,exclude:n,onQuote:r}=t,o=new CSSStyleSheet;o.replaceSync(ZA),document.adoptedStyleSheets=[...document.adoptedStyleSheets,o];let i=document.createElement("button");i.type="button",i.className="ag-ui-quote-offer",i.textContent=t.label,i.hidden=!0,document.body.append(i);let a="",s=()=>{i.hidden=!0,a=""},c=u=>{if(u.composedPath().includes(n)){s();return}if(VA()){s();return}let f=u instanceof MouseEvent?{x:u.clientX,y:u.clientY}:void 0,m=oo(e,[],f);if(m===null){s();return}a=m.text,jA(i,m.rect)},l=u=>{i.contains(u.target)||s()};return e.addEventListener("mouseup",c),e.addEventListener("keyup",c),e.addEventListener("mousedown",l),document.addEventListener("scroll",s,!0),window.addEventListener("resize",s),i.addEventListener("mousedown",u=>{u.preventDefault()}),i.addEventListener("click",()=>{let u=a;window.getSelection()?.removeAllRanges(),s(),r(u)}),{element:i,detach(){e.removeEventListener("mouseup",c),e.removeEventListener("keyup",c),e.removeEventListener("mousedown",l),document.removeEventListener("scroll",s,!0),window.removeEventListener("resize",s),i.remove(),document.adoptedStyleSheets=document.adoptedStyleSheets.filter(u=>u!==o)}}}function VA(){let t=document.activeElement;return t===null?!1:t.tagName==="INPUT"||t.tagName==="TEXTAREA"||t.isContentEditable===!0}function jA(t,e){t.hidden=!1;let n=e.top<cd+t.offsetHeight;t.dataset.below=String(n),t.style.top=`${n?e.bottom+cd:e.top-cd}px`;let r=t.offsetWidth/2,o=e.left+e.width/2,i=document.documentElement.clientWidth;t.style.left=`${Math.min(Math.max(o,r),i-r)}px`}var dd=6,vs=class{button=document.createElement("button");#e;#t="";#n=null;constructor(e){this.#e=e}insert(e){let n=ld(e);if(n==="")return;let r=this.#e.input,o=r.value.replace(/\s+$/,"");r.value=o===""?n:`${o}

${n}`,this.#e.autoGrow(),r.focus();let i=r.value.length;r.setSelectionRange(i,i)}offerInPage(e){this.#n?.detach();let n=ud({within:e,label:this.#e.strings().quoteSelection,exclude:this.#e.element,onQuote:r=>this.#e.quote(r)});return this.#n=n,()=>{n.detach(),this.#n===n&&(this.#n=null)}}detachPageOffer(){this.#n?.detach(),this.#n=null}mount(e){let n=this.button;n.className="quote-selection",n.type="button",n.setAttribute("part","quote-selection"),n.textContent=this.#e.strings().quoteSelection,n.hidden=!0,n.addEventListener("mousedown",o=>{o.preventDefault()},{signal:e}),n.addEventListener("click",()=>{this.#e.quote(this.#t),window.getSelection()?.removeAllRanges(),this.#a()},{signal:e});let r=this.#e.messages;r.addEventListener("mouseup",o=>this.#r(o),{signal:e}),r.addEventListener("keyup",()=>this.#r(),{signal:e}),r.addEventListener("mousedown",()=>this.#a(),{signal:e})}#o(){return this.#e.element.getAttribute("data-quote-selection")!=="false"}#r(e){if(!this.#o())return;let n=e===void 0?void 0:{x:e.clientX,y:e.clientY},r=oo(this.#e.messages,[this.#e.root],n);if(r===null){this.#a();return}this.#t=r.text,this.#i(r.rect)}#i(e){let n=this.button;n.hidden=!1;let r=this.#e.messagesWrap.getBoundingClientRect(),o=e.top-r.top,i=o<dd+n.offsetHeight;n.dataset.below=String(i),n.style.top=`${i?e.bottom-r.top+dd:o-dd}px`;let a=n.offsetWidth/2,s=e.left+e.width/2-r.left;n.style.left=`${Math.min(Math.max(s,a),r.width-a)}px`}#a(){this.button.hidden=!0,this.#t=""}};function io(t,e=Date.now(),n=fe){if(!Number.isFinite(t))return n.justNow;let r=Math.round((e-t)/1e3);if(r<60)return n.justNow;let o=Math.round(r/60);if(o<60)return re(n.minutesAgo,{n:o});let i=Math.round(o/60);if(i<24)return re(n.hoursAgo,{n:i});let a=Math.round(i/24);return a<7?re(n.daysAgo,{n:a}):re(n.weeksAgo,{n:Math.round(a/7)})}function Bb(t){return t.preview!==void 0&&t.preview!==null&&t.preview!==""?t.preview:null}function Zb(t){return t.replace(/\s+/g," ").trim()}var ao=class{element;#e;#t;#n;#o=null;#r=null;#i;#a=[];constructor(e,n=fe){this.#e=e,this.#i=n,this.element=document.createElement("div"),this.element.className="checkpoints",this.element.setAttribute("part","checkpoints"),this.element.setAttribute("role","dialog"),this.element.setAttribute("aria-label",n.checkpoints),this.element.tabIndex=-1,this.element.hidden=!0;let r=document.createElement("div");r.className="checkpoints-header",r.setAttribute("part","checkpoints-header"),this.#n=document.createElement("span"),this.#n.className="checkpoints-title",this.#n.setAttribute("part","checkpoints-title"),this.#n.textContent=n.checkpoints,r.append(this.#n),this.#t=document.createElement("div"),this.#t.className="checkpoints-list",this.#t.setAttribute("part","checkpoints-list"),this.element.append(r,this.#t),this.element.addEventListener("keydown",o=>this.#d(o))}setRuns(e){this.#a=e,this.#f()}setRelativeTimeFormatter(e){this.#r=e}#s(e){return this.#r!==null?this.#r(e):io(e,Date.now(),this.#i)}setStrings(e){this.#i=e,this.element.setAttribute("aria-label",e.checkpoints),this.#n.textContent=e.checkpoints,this.#f()}open(){this.open_||(this.#o=this.#l(),this.element.hidden=!1,(this.#u()[0]??this.element).focus())}close(){this.open_&&(this.element.hidden=!0,this.#o?.focus(),this.#o=null)}#l(){return this.element.getRootNode().activeElement}#u(){return Array.from(this.element.querySelectorAll("button, [tabindex]")).filter(e=>!e.hidden)}#d(e){if(e.key==="Escape"){e.stopPropagation(),this.close();return}if(e.key!=="Tab")return;let n=this.#u(),r=n[0],o=n[n.length-1],i=this.#l();e.shiftKey&&i===r?(e.preventDefault(),o?.focus()):!e.shiftKey&&i===o&&(e.preventDefault(),r?.focus())}get open_(){return!this.element.hidden}#f(){if(this.#t.replaceChildren(),this.#a.length===0){let n=document.createElement("div");n.className="checkpoints-empty",n.setAttribute("part","checkpoints-empty"),n.textContent=this.#i.noCheckpoints,this.#t.append(n);return}let e=this.#p();for(let n of this.#a)this.#t.append(this.#m(n,e))}#p(){let e=new Set,n=new Set;for(let r of this.#a){let o=Bb(r);if(o===null)continue;let i=Zb(o);e.has(i)&&n.add(i),e.add(i)}return n}#m(e,n){let r=document.createElement("div");r.className="checkpoint-row",r.setAttribute("part","checkpoint-row");let o=Bb(e),i=e.started_at===null?null:this.#s(Date.parse(e.started_at)),a=document.createElement("span");if(a.className="checkpoint-label",a.setAttribute("part","checkpoint-label"),a.textContent=o??i??e.run_id,r.append(a),o!==null&&i!==null){let c=document.createElement("span");c.className="checkpoint-time",c.setAttribute("part","checkpoint-time"),c.textContent=i,r.append(c)}if((o===null?i!==null:n.has(Zb(o)))&&e.run_id!==""){let c=document.createElement("span");c.className="checkpoint-id",c.setAttribute("part","checkpoint-id"),c.textContent=e.run_id.slice(0,8),c.title=e.run_id,r.append(c)}if(e.parent_run_id!==null){let c=document.createElement("span");c.className="checkpoint-branch",c.setAttribute("part","checkpoint-branch"),c.textContent=this.#i.forkedRun,c.title=e.parent_run_id,r.append(c)}return r.append(this.#c(e.run_id,"resume",this.#i.resumeRun),this.#c(e.run_id,"fork",this.#i.forkRun)),r}#c(e,n,r){let o=document.createElement("button");return o.type="button",o.className=`checkpoint-action checkpoint-${n}`,o.setAttribute("part",`checkpoint-action checkpoint-${n}`),o.textContent=r,o.addEventListener("click",()=>{this.close(),this.#e(e,n)}),o}};function pd(t){let e=rs(t,"attachments");return Array.isArray(e)?e.filter(WA):[]}function WA(t){if(typeof t!="object"||t===null)return!1;let e=t;return typeof e.id=="string"&&typeof e.name=="string"&&typeof e.mime=="string"&&typeof e.size=="number"&&(e.url===void 0||typeof e.url=="string")}var so=class{#e;#t;#n;constructor(e,n=()=>({}),r=()=>{}){this.#e=e.endsWith("/")?e:`${e}/`,this.#t=n,this.#n=r}async list(){try{let e=await fetch(this.#e,it({method:"GET",headers:{Accept:"application/json",...this.#t()}},this.#n()));return e.ok?(await e.json()).runs??[]:[]}catch{return[]}}async continuable(){return(await this.list()).filter(e=>e.continuable)}resumeUrl(e){return this.#o("resume",e)}forkUrl(e){return this.#o("fork",e)}#o(e,n){return`${this.#e.slice(0,-5)}${e}/${encodeURIComponent(n)}/`}};function lo(t){return t===je.FAILED?K.ERROR:t===je.DENIED?K.DECLINED:t===je.INTERRUPTED?K.INTERRUPTED:K.DONE}var bs=class{#e;#t="";#n=[];#o=0;#r=0;#i=null;#a=null;#s=null;#l=null;constructor(e){this.#e=e}get threadId(){return this.#t}get restored(){return this.#n}get continuation(){return this.#s}adoptActiveThread(){this.#t=this.#e.conversationStore().threadId()}startThread(){this.#t=es(this.#e.conversationStore())}stopContinuation(){this.#s?.cancel(),this.#s=null}forgetRestored(){this.#n=[],this.#o+=1,this.#r+=1,this.#u()}#u(){let e=this.#l;this.#l=null,e?.()}reapUnsent(){this.#e.conversationStore().isUnsent?.(this.#t)===!0&&this.#e.conversationStore().clear(this.#t)}runs(){let e=this.#e.element.getAttribute("data-runs-url");return e===null||e===""?null:(this.#a===null&&(this.#a=new so(e,()=>this.#e.headersFor(e),()=>this.#e.requestCredentials())),this.#a)}openThreads(){this.#e.checkpoints.close(),this.refreshDrawer(),this.#e.drawer.open()}openCheckpoints(){this.#e.drawer.close(),this.#d(),this.#e.checkpoints.open()}async switchThread(e){e!==this.#t&&(this.#e.cancelRun(),this.#e.resetState(),this.#e.conversationStore().setActiveThread(e),this.#t=e,this.#e.setRunning(!1),await this.rehydrate("switch"))}renameThread(e,n){this.#e.conversationStore().renameThread(e,n),this.refreshDrawer()}deleteThread(e){let n=e===this.#t;n&&this.#e.cancelRun(),this.#e.conversationStore().clear(e),n&&(this.#e.resetState(),this.adoptActiveThread(),this.#e.setRunning(!1),this.#e.threadChanged(this.#t,"delete")),this.refreshDrawer()}async refreshDrawer(){this.#e.drawer.setRelativeTimeFormatter(this.#e.formatRelativeTime()),this.#e.drawer.setThreads(await this.#e.conversationStore().listThreads(),this.#t)}async#d(){let e=this.runs();this.#e.checkpoints.setRelativeTimeFormatter(this.#e.formatRelativeTime()),this.#e.checkpoints.setRuns(e===null?[]:await e.continuable())}async continueRun(e,n){let r=this.runs();if(r===null)return;if(this.#e.running()||this.#s!==null){let s=this.#e.strings();this.#f(this.#l===null?s.continueWhileRunning:s.continueWhileLoading);return}let o=this.#e.input.value.trim();if(o===""){this.#f(this.#e.strings().continueNeedsTurn);return}this.#e.recordTurn(o),this.#e.input.value="",this.#e.autoGrow();let i=this.#o,a=this.#e.buildClient({endpoint:n==="resume"?r.resumeUrl(e):r.forkUrl(e),initialMessages:[],follows:this.#e.client()?.messages??this.#n,onSaved:s=>{i===this.#o&&(this.#n=s,this.#e.releaseClient())}});this.#s=a;try{if(this.#e.announceTurn(o),this.#s!==a)return;await a.send(o)}finally{this.#s===a&&(this.#s=null,this.#e.continuationEnded())}}#f(e){this.#e.hint.textContent=e,this.#e.hint.hidden=!1,this.#e.input.focus()}async rehydrate(e){this.#r+=1;let n=this.#r,r=this.#t,o=this.#e.conversationStore();this.#i={generation:n,store:o,threadId:r};let i=o.loadCheckpoint(r),a=i===null?new Promise(l=>{this.#l=l}):null,s=this.#l,c=this.#e.holdRun(a);try{this.#e.element.setAttribute("data-restoring","");let l;try{l=await o.loadMessages(r)}finally{n===this.#r&&this.#e.element.removeAttribute("data-restoring")}if(!this.#p(n)){this.#m(o,r,i);return}if(l!==null){let u=this.#e.strings().callNotFinished,f=ns(l,m=>({id:Se(),role:"tool",content:u,toolCallId:m,metadata:{outcome:je.INTERRUPTED}}),new Set(i===null?[]:[i.toolCallId]));this.#n=f;for(let m of f)if(this.replay(m),!this.#p(n)){this.#m(o,r,i);return}}if(i===null&&this.#b(l),this.#e.threadChanged(r,e),i!==null){if(!this.#p(n)){this.#m(o,r,i);return}await this.#y(i,n)}}finally{c.release(),this.#l===s&&this.#u()}}#p(e){return e===this.#r&&this.#e.element.isConnected}#m(e,n,r){r!==null&&!this.#c(e,n)&&e.saveCheckpoint(n,null)}#c(e,n){let r=this.#i;return r?.generation===this.#r&&r.store===e&&r.threadId===n}#b(e){let n=e?.at(-1);n===void 0||n.role!==Ve.USER||this.#e.transcript.appendNotice("\u26A0",this.#e.strings().runInterrupted,"interrupted")}replay(e){let n=typeof e.content=="string"?e.content:"";if(e.role===Ve.USER){let r=pd(e);if(n!==""||r.length>0){let o=this.#e.appendMessage(Ve.USER,n);r.length>0&&o.appendChild(us(r))}return}if(e.role===Ve.ASSISTANT){if(n!==""){let r=this.#e.appendMessage(Ve.ASSISTANT,n);r.classList.add("message--restored");let o=e.id;this.#e.actions.attach(r,typeof o=="string"&&o!==""?{messageId:o}:{rateable:!1})}for(let r of qA(e.toolCalls)){let o={id:r.id,name:r.function.name,args:this.#g(r.function.arguments)};if(this.#e.transcript.noticeIfSkillLoad(o))continue;this.#e.transcript.setCardElement(o.id,this.#e.transcript.cardFor(o).element);let i=this.#e.tools.resolve(o.name)?.render;i!==void 0&&this.#e.transcript.renderToolOutput(i,o)}return}if(e.role==="activity"){let r=e;typeof r.activityType=="string"&&this.#e.activities.draw(e.id,r.activityType,r.content);return}if(e.role==="tool"){let r=this.#e.transcript.card(e.toolCallId);r!==void 0&&r.settle(lo(rs(e,"outcome")),jn(e.content))}}#g(e){if(typeof e!="string")return{};try{let n=JSON.parse(e);if(typeof n=="object"&&n!==null)return n}catch{}return{}}async#y(e,n){this.#e.conversationStore().saveCheckpoint(this.#t,null);let r=this.#e.ensureClient(),o=JSON.stringify(this.#e.navigationResult().call(this.#e.element,e));this.#p(n)&&(r.addToolResult(e.toolCallId,o),this.#e.transcript.card(e.toolCallId)?.settle(K.DONE,o),await r.resume())}};function qA(t){return Array.isArray(t)?t.filter(YA):[]}function YA(t){if(typeof t!="object"||t===null)return!1;let e=t;return typeof e.id=="string"&&typeof e.function?.name=="string"}var KA=8,ys=class{element;#e;#t;#n;#o;#r;#i=null;#a;#s=[];#l="";#u;#d;#f="";#p=null;constructor(e,n=fe){this.#e=e,this.#a=n,this.element=document.createElement("div"),this.element.className="drawer",this.element.setAttribute("part","drawer"),this.element.hidden=!0;let r=document.createElement("div");r.className="drawer-backdrop",r.setAttribute("part","drawer-backdrop"),r.addEventListener("click",()=>this.close()),this.#t=document.createElement("div"),this.#t.className="drawer-panel",this.#t.setAttribute("part","drawer-panel"),this.#t.setAttribute("role","dialog"),this.#t.setAttribute("aria-modal","true"),this.#t.setAttribute("aria-label",n.chatHistory),this.#t.addEventListener("keydown",i=>this.#b(i));let o=document.createElement("div");o.className="drawer-header",o.setAttribute("part","drawer-header"),this.#n=document.createElement("span"),this.#n.className="drawer-title",this.#n.setAttribute("part","drawer-title"),this.#n.textContent=n.chats,this.#o=document.createElement("button"),this.#o.type="button",this.#o.className="drawer-new",this.#o.setAttribute("part","drawer-new"),this.#o.textContent=n.newChat,this.#o.addEventListener("click",()=>{this.close(),this.#e.onNew()}),this.#u=document.createElement("button"),this.#u.type="button",this.#u.className="drawer-close",this.#u.setAttribute("part","drawer-close"),this.#u.title=n.closeHistory,this.#u.setAttribute("aria-label",n.closeHistory),this.#u.append(document.createTextNode("\xD7")),this.#u.addEventListener("click",()=>this.close()),o.append(this.#n,this.#o,this.#u),this.#d=document.createElement("input"),this.#d.type="search",this.#d.className="drawer-filter",this.#d.setAttribute("part","drawer-filter"),this.#d.placeholder=n.searchConversations,this.#d.setAttribute("aria-label",n.searchConversations),this.#d.addEventListener("input",()=>{this.#f=this.#d.value.trim().toLowerCase(),this.#g()}),this.#r=document.createElement("div"),this.#r.className="drawer-list",this.#r.setAttribute("part","drawer-list"),this.#t.append(o,this.#d,this.#r),this.element.append(r,this.#t)}setRelativeTimeFormatter(e){this.#i=e}#m(e){return this.#i!==null?this.#i(e):io(e,void 0,this.#a)}setStrings(e){this.#a=e,this.#t.setAttribute("aria-label",e.chatHistory),this.#n.textContent=e.chats,this.#o.textContent=e.newChat,this.#u.title=e.closeHistory,this.#u.setAttribute("aria-label",e.closeHistory),this.#d.placeholder=e.searchConversations,this.#d.setAttribute("aria-label",e.searchConversations),this.#g()}isOpen(){return!this.element.hidden}open(){this.isOpen()||(this.#p=this.#c(),this.element.hidden=!1,this.#o.focus())}close(){this.isOpen()&&(this.element.hidden=!0,this.#p?.focus(),this.#p=null)}toggle(){this.isOpen()?this.close():this.open()}#c(){return this.element.getRootNode().activeElement}#b(e){if(e.key==="Escape"){e.preventDefault(),this.close();return}if(e.key!=="Tab")return;let n=Array.from(this.#t.querySelectorAll("button, input, [tabindex]")).filter(a=>!a.hidden),r=n[0],o=n[n.length-1],i=this.#c();e.shiftKey&&i===r?(e.preventDefault(),o?.focus()):!e.shiftKey&&i===o&&(e.preventDefault(),r?.focus())}setThreads(e,n){this.#s=e,this.#l=n,this.#g()}#g(){this.#r.replaceChildren();let e=this.#s.length<KA;this.#d.hidden=e,e&&this.#f!==""&&(this.#d.value="",this.#f="");let n=this.#y();if(n.length===0){let r=document.createElement("div");r.className="drawer-empty",r.setAttribute("part","drawer-empty"),r.textContent=this.#s.length===0?this.#a.noConversations:this.#a.noMatches,this.#r.appendChild(r);return}for(let r of n)this.#r.appendChild(this.#E(r))}#y(){return this.#f===""?this.#s:this.#s.filter(e=>e.title.toLowerCase().includes(this.#f)||e.preview.toLowerCase().includes(this.#f))}#E(e){let n=document.createElement("div");n.className="drawer-row",n.setAttribute("part","drawer-row"),e.threadId===this.#l&&n.classList.add("drawer-row--active");let r=document.createElement("button");r.type="button",r.className="drawer-row-select",r.setAttribute("part","drawer-row-select");let o=document.createElement("span");o.className="drawer-row-title",o.setAttribute("part","drawer-row-title"),o.textContent=e.title;let i=document.createElement("span");i.className="drawer-row-time",i.setAttribute("part","drawer-row-time"),i.textContent=this.#m(e.updatedAt);let a=document.createElement("span");a.className="drawer-row-preview",a.setAttribute("part","drawer-row-preview"),a.textContent=e.preview,r.append(o,i,a),r.addEventListener("click",()=>{this.close(),this.#e.onSelect(e.threadId)});let s=document.createElement("button");s.type="button",s.className="drawer-row-rename",s.setAttribute("part","drawer-row-rename"),s.title=this.#a.rename,s.setAttribute("aria-label",this.#a.renameConversation),s.textContent="\u270E",s.addEventListener("click",()=>this.#_(n,e));let c=document.createElement("button");c.type="button",c.className="drawer-row-delete",c.setAttribute("part","drawer-row-delete"),c.title=this.#a.delete,c.setAttribute("aria-label",this.#a.deleteConversation),c.textContent="\u{1F5D1}",c.addEventListener("click",()=>this.#h(n,e));let l=document.createElement("div");return l.className="drawer-row-actions",l.setAttribute("part","drawer-row-actions"),l.append(s,c),n.append(r,l),n}#_(e,n){let r=document.createElement("input");r.type="text",r.className="drawer-rename-input",r.setAttribute("part","drawer-rename-input"),r.value=n.title;let o=!1,i=()=>{if(o)return;o=!0;let s=r.value.trim();s===""||s===n.title?this.#g():this.#e.onRename(n.threadId,s)},a=()=>{o||(o=!0,this.#g())};r.addEventListener("keydown",s=>{s.key==="Enter"?(s.preventDefault(),i()):s.key==="Escape"&&(s.preventDefault(),s.stopPropagation(),a())}),r.addEventListener("blur",()=>i()),e.replaceChildren(r),r.focus(),r.select()}#h(e,n){let r=document.createElement("div");r.className="drawer-confirm",r.setAttribute("part","drawer-confirm");let o=document.createElement("span");o.className="drawer-confirm-label",o.setAttribute("part","drawer-confirm-label"),o.textContent=this.#a.deletePrompt;let i=document.createElement("button");i.type="button",i.className="drawer-confirm-yes",i.setAttribute("part","drawer-confirm-yes"),i.textContent=this.#a.delete,i.addEventListener("click",()=>this.#e.onDelete(n.threadId));let a=document.createElement("button");a.type="button",a.className="drawer-confirm-no",a.setAttribute("part","drawer-confirm-no"),a.textContent=this.#a.cancel,a.addEventListener("click",()=>this.#g()),r.append(o,i,a),e.replaceChildren(r)}};var ws=class{#e=null;open(){return this.#e=new AbortController,this.#e.signal}close(){this.#e=null}abort(){this.#e?.abort()}};function Kt(t,e,n=lt){let r=Math.min(n,Math.max(0,(e.width-t.width)/2)),o=Math.min(n,Math.max(0,(e.height-t.height)/2));return{left:Math.max(e.left+r,Math.min(t.left,e.left+e.width-t.width-r)),top:Math.max(e.top+o,Math.min(t.top,e.top+e.height-t.height-o))}}function co(t,e,n=on){let r=t.right-t.left,o=t.bottom-t.top,i=Math.max(e.left+n,Math.min(t.left,e.left+e.width-n-r)),a=Math.max(e.top+n,Math.min(t.top,e.top+e.height-n-o));return{left:i,top:a,right:i+r,bottom:a+o}}var XA=4,JA=16,QA=64;function Vb(t,e){let n=!1,{signal:r}=e;t.addEventListener("click",a=>{!n||a.detail===0||(n=!1,a.stopPropagation(),a.preventDefault())},{capture:!0,signal:r}),t.addEventListener("pointerdown",a=>{if(n=!1,!e.enabled())return;let s=e.rect(),c=a.clientX,l=a.clientY,u=!1,f=p=>{let h=p.clientX-c,x=p.clientY-l;if(!u&&Math.hypot(h,x)<XA)return;u=!0,t.setAttribute("data-dragging","true");let g=Kt({...s,left:s.left+h,top:s.top+x},e.viewport());e.apply(g.left,g.top)},m=p=>{if(window.removeEventListener("pointermove",f),window.removeEventListener("pointerup",m),window.removeEventListener("pointercancel",m),!u)return;t.removeAttribute("data-dragging"),n=!0;let h=Kt({...s,left:s.left+(p.clientX-c),top:s.top+(p.clientY-l)},e.viewport());e.commit(h.left,h.top)};window.addEventListener("pointermove",f),window.addEventListener("pointerup",m),window.addEventListener("pointercancel",m)},{signal:r});let o=null,i=()=>{if(o===null)return;let{left:a,top:s}=o;o=null,e.commit(a,s)};t.addEventListener("keydown",a=>{if(!e.enabled())return;let s=a.shiftKey?QA:JA,c=e.rect(),l=null;if(a.key==="ArrowLeft"?l={left:c.left-s,top:c.top}:a.key==="ArrowRight"?l={left:c.left+s,top:c.top}:a.key==="ArrowUp"?l={left:c.left,top:c.top-s}:a.key==="ArrowDown"&&(l={left:c.left,top:c.top+s}),l===null)return;a.preventDefault();let u=Kt({...c,...l},e.viewport());e.apply(u.left,u.top),o=u},{signal:r}),t.addEventListener("keyup",i,{signal:r}),t.addEventListener("blur",i,{signal:r})}function uo(t,e,n,r){return{hostInset:jb({top:n.y==="top"?t.top:null,right:n.x==="right"?r.width-t.right:null,bottom:n.y==="bottom"?r.height-t.bottom:null,left:n.x==="left"?t.left:null}),launcherInset:jb({top:n.y==="top"?e.top-t.top:null,right:n.x==="right"?t.right-(e.left+e.width):null,bottom:n.y==="bottom"?t.bottom-(e.top+e.height):null,left:n.x==="left"?e.left-t.left:null})}}function jb(t){let e=n=>n===null?"auto":`${Math.round(n)}px`;return`${e(t.top)} ${e(t.right)} ${e(t.bottom)} ${e(t.left)}`}function hd(t,e,n,r,o=lt){let i=n.left+n.width-t.left,a=t.left+t.width-n.left,s=n.top+n.height-t.top,c=t.top+t.height-n.top,l={x:i>=a?"left":"right",y:s>=c?"top":"bottom"},u=l.x==="left"?t.left:t.left+t.width-e.width,f=l.y==="top"?t.top:t.top+t.height-e.height,m=co({left:u,top:f,right:u+e.width,bottom:f+e.height},n,o);return{corner:l,...uo(m,t,l,r)}}var ek="button, a[href], input, select, textarea, [contenteditable]";function Wb(t,e){t.addEventListener("pointerdown",n=>{if(n.button!==0||!e.enabled()||tk(n,t))return;let r=e.rect(),o=n.clientX,i=n.clientY,a=!1,s=(u,f)=>{let m=u-o,p=f-i;return{left:r.left+m,top:r.top+p,right:r.right+m,bottom:r.bottom+p}},c=u=>{!a&&Math.hypot(u.clientX-o,u.clientY-i)<4||(a=!0,t.setAttribute("data-dragging","true"),e.apply(s(u.clientX,u.clientY),r))},l=u=>{window.removeEventListener("pointermove",c),window.removeEventListener("pointerup",l),window.removeEventListener("pointercancel",l),a&&(t.removeAttribute("data-dragging"),e.commit(s(u.clientX,u.clientY),r))};n.preventDefault(),window.addEventListener("pointermove",c),window.addEventListener("pointerup",l),window.addEventListener("pointercancel",l)})}function tk(t,e){let n=t.composedPath();return n.slice(0,n.indexOf(e)).some(r=>r instanceof Element&&r.matches(ek))}function Yb(t,e){let n=document.createElement("div");n.className=`resize-handle resize-handle--${Es(t)}`,n.setAttribute("part",`resize-handle resize-handle-${Es(t)}`),n.setAttribute("role","separator"),t.x===void 0?n.setAttribute("aria-orientation","horizontal"):t.y===void 0&&n.setAttribute("aria-orientation","vertical"),n.setAttribute("aria-label",e.label),n.tabIndex=0,n.addEventListener("pointerdown",i=>{let a=e.axis();if(a==="none"||!qb(t,a))return;let s=e.rect(),c=u=>{e.apply(fd(t,a,s,u.clientX,u.clientY))},l=u=>{window.removeEventListener("pointermove",c),window.removeEventListener("pointerup",l),n.removeAttribute("data-dragging"),e.commit(fd(t,a,s,u.clientX,u.clientY))};n.setAttribute("data-dragging","true"),window.addEventListener("pointermove",c),window.addEventListener("pointerup",l),i.preventDefault()});let r=null,o=()=>{if(r===null)return;let i=r;r=null,e.commit(i)};return n.addEventListener("keydown",i=>{let a=e.axis();if(a==="none"||!qb(t,a))return;let s=i.shiftKey?64:16,c=e.rect(),l=nk[i.key];if(l===void 0||l.x!==0&&t.x===void 0||l.y!==0&&t.y===void 0)return;i.preventDefault();let u=(t.x==="left"?c.left:c.right)+l.x*s,f=(t.y==="top"?c.top:c.bottom)+l.y*s,m=fd(t,a,c,u,f);e.apply(m),r=m}),n.addEventListener("keyup",o),n.addEventListener("blur",o),n}var nk={ArrowLeft:{x:-1,y:0},ArrowRight:{x:1,y:0},ArrowUp:{x:0,y:-1},ArrowDown:{x:0,y:1}};function Es(t){return[t.y,t.x].filter(e=>e!==void 0).join("-")}function qb(t,e){return e==="both"||t.x!==void 0}function fd(t,e,n,r,o){let i=t.x==="left"?Math.min(r,n.right-280):n.left,a=t.x==="right"?Math.max(r,n.left+280):n.right,s=e==="both",c=s&&t.y==="top"?Math.min(o,n.bottom-240):n.top,l=s&&t.y==="bottom"?Math.max(o,n.top+240):n.bottom;return{left:i,top:c,right:a,bottom:l}}var xs={collapseTo:"launcher",launcherDraggable:!0,resizeAxis:"both",startsCollapsed:!0},Kb={collapseTo:"launcher",launcherDraggable:!1,resizeAxis:"width",startsCollapsed:!1},rk=new Map([[null,xs],["",xs],["floating",xs],["bottom-left",xs],["side",Kb],["sidebar",{...Kb,collapseTo:"rail"}],["full",{collapseTo:"launcher",launcherDraggable:!1,resizeAxis:"none",startsCollapsed:!1}],["page",{collapseTo:null,launcherDraggable:!1,resizeAxis:"none",startsCollapsed:!1}],["embedded",{collapseTo:"header",launcherDraggable:!1,resizeAxis:"both",startsCollapsed:!1}]]),ok={collapseTo:"launcher",launcherDraggable:!1,resizeAxis:"both",startsCollapsed:!1};function Lt(t){return rk.get(t)??ok}var md="ag-ui-chat:size",po="--_drag-width",ho="--_drag-height",gd="ag-ui-chat:launcher";function ik(t){if(typeof t!="object"||t===null)return null;let{left:e,top:n}=t;return typeof e=="number"&&typeof n=="number"?{left:e,top:n}:null}function Xb(t,e){return t.width>=e.width-1&&t.height>=e.height-1}function Jb(t,e,n){let r=o=>`${Math.round(o)}px`;return[t.y==="top"?r(e.top):"auto",t.x==="right"?r(n.width-e.right):"auto",t.y==="bottom"?r(n.height-e.bottom):"auto",t.x==="left"?r(e.left):"auto"].join(" ")}var ak=[{y:"top"},{y:"bottom"},{x:"left"},{x:"right"},{x:"left",y:"top"},{x:"right",y:"top"},{x:"left",y:"bottom"},{x:"right",y:"bottom"}],_s=class{#e;constructor(e){this.#e=e}enablePanelDrag(e){Wb(e,{enabled:()=>!this.#e.collapsed()&&this.#m(),rect:()=>this.#e.element.getBoundingClientRect(),apply:(n,r)=>this.#h(n,r),commit:(n,r)=>this.#N(n,r)})}enableLauncherDrag(e){Vb(this.#e.launcher,{signal:e,enabled:()=>this.#e.collapsed()&&this.#m(),rect:()=>this.#g(),viewport:()=>this.#c(),apply:(n,r)=>this.#E(n,r),commit:(n,r)=>this.#_(n,r)})}mountResizeGrips(e){for(let n of ak){let r=Yb(n,{axis:()=>this.#l(),rect:()=>this.#e.element.getBoundingClientRect(),apply:o=>this.#I(n,o),commit:o=>this.#L(n,o),label:this.#e.strings().resizePanel});r.tabIndex=-1,r.setAttribute("aria-hidden","true"),this.#i.set(Es(n),r),e.appendChild(r)}this.#V()}restoreSize(){this.#p(this.#z())}resetSize(){this.#e.element.style.removeProperty(po),this.#e.element.style.removeProperty(ho),this.#e.clearPreference(md),this.syncResizeAnchor()}probe=document.createElement("div");#t=null;#n=null;#o=null;#r={x:"right",y:"bottom"};#i=new Map;#a(e){let n=this.#c(),r=n.left+lt,o=n.top+lt,i=n.left+n.width-lt,a=n.top+n.height-lt;return{left:Math.min(Math.max(e.left,r),e.right),top:Math.min(Math.max(e.top,o),e.bottom),right:Math.max(Math.min(e.right,i),e.left),bottom:Math.max(Math.min(e.bottom,a),e.top)}}dragging(){return this.#e.launcher.hasAttribute("data-dragging")||this.#e.root.querySelector(".header[data-dragging]")!==null}describeSurface(){let e=this.#e.element.getBoundingClientRect(),n=this.#c(),r=Xb(e,n);return{placement:this.#e.element.getAttribute("placement"),collapsed:this.#e.collapsed(),collapsible:this.#e.collapsible(),movable:this.#m()&&!r,draggable:this.#m(),fullBleed:r,box:{left:Math.round(e.left),top:Math.round(e.top),width:Math.round(e.width),height:Math.round(e.height)},viewport:{left:Math.round(n.left),top:Math.round(n.top),width:Math.round(n.width),height:Math.round(n.height)}}}moveTo(e,n={}){if(!this.#m())return!1;let r=n.announce===!0?this.#s():null,o=this.#c(),i=this.#e.element.getBoundingClientRect();if(Xb(i,o))return!1;let[a,s]=e.split("-"),c=o.left+on,l=o.top+on,u=s==="left"?c:Math.max(c,o.left+o.width-on-i.width),f=a==="top"?l:Math.max(l,o.top+o.height-on-i.height),m={left:u,top:f,right:u+i.width,bottom:f+i.height},p=this.#e.launcher.offsetWidth,h=this.#e.launcher.offsetHeight;return this.#M(m,{left:s==="left"?m.left:m.right-p,top:a==="top"?m.top:m.bottom-h,width:p,height:h}),this.#k(),r!==null&&this.#e.announceSurfaceChange(this.#e.strings().chatMoved,r),!0}#s(){let e=this.#e.element.style.getPropertyValue("--ag-ui-inset"),n=this.#e.element.style.getPropertyValue("--ag-ui-launcher-inset"),r=this.#e.element.getAttribute("data-expand-corner"),o=this.#t,i=this.#n,a=this.#o;return()=>{this.#f("--ag-ui-inset",e),this.#f("--ag-ui-launcher-inset",n),r===null?this.#e.element.removeAttribute("data-expand-corner"):this.#e.element.setAttribute("data-expand-corner",r),this.#t=o,this.#n=i,this.#o=a,o===null?this.#e.clearPreference(gd):this.#k(),this.syncResizeAnchor()}}#l(){return Lt(this.#e.element.getAttribute("placement")).resizeAxis}#u(){let e=this.#e.element.getBoundingClientRect(),n=this.#e.element.style.getPropertyValue(po),r=this.#e.element.style.getPropertyValue(ho),o=this.#d(e,-1),i=o.x===null||o.y===null?this.#d(e,1):o;return this.#f(po,n),this.#f(ho,r),{x:o.x??i.x??"right",y:o.y??i.y??"bottom"}}#d(e,n){this.#p({width:e.width+n,height:e.height+n});let r=this.#e.element.getBoundingClientRect(),o=(i,a)=>Math.abs(i-a)>=.5;return{x:o(r.width,e.width)?o(r.left,e.left)?"right":"left":null,y:o(r.height,e.height)?o(r.top,e.top)?"bottom":"top":null}}syncResizeAnchor(){if(!this.#e.connected())return;let e=this.#o??this.#u();this.#r=e,this.#e.element.setAttribute("data-resize-anchor",`${e.y}-${e.x}`),this.#V()}#f(e,n){if(n===""){this.#e.element.style.removeProperty(e);return}this.#e.element.style.setProperty(e,n)}#p(e){let n=this.#l();n!=="none"&&(e.width!==void 0&&this.#e.element.style.setProperty(po,`${e.width}px`),e.height!==void 0&&n==="both"&&this.#e.element.style.setProperty(ho,`${e.height}px`))}releaseOwnedAxes(){let e=this.#l();e!=="both"&&this.#e.element.style.removeProperty(ho),e==="none"&&this.#e.element.style.removeProperty(po)}#m(){return this.#e.element.getAttribute("data-launcher-drag")!=="false"&&Lt(this.#e.element.getAttribute("placement")).launcherDraggable}#c(){let e=window.visualViewport,n=e?.width??window.innerWidth,r=e?.height??window.innerHeight,o=getComputedStyle(this.probe),i=c=>{let l=Number.parseFloat(o.getPropertyValue(c));return Number.isFinite(l)?l:0},a=i("padding-left"),s=i("padding-top");return{left:a,top:s,width:Math.max(0,n-a-i("padding-right")),height:Math.max(0,r-s-i("padding-bottom"))}}#b(){let e=document.documentElement;return{width:e.clientWidth||window.innerWidth,height:e.clientHeight||window.innerHeight}}publishVisualViewport(){let e=window.visualViewport;if(e==null)return;let n=this.#b().height;if(Math.abs(e.height-n)<1){this.#e.element.style.removeProperty("--ag-ui-visual-viewport-height"),this.#e.element.style.removeProperty("--ag-ui-visual-viewport-inset-bottom"),this.#e.element.style.removeProperty("--ag-ui-visual-viewport-inset-top");return}this.#e.element.style.setProperty("--ag-ui-visual-viewport-height",`${Math.round(e.height)}px`);let r=n-e.height-e.offsetTop;this.#e.element.style.setProperty("--ag-ui-visual-viewport-inset-bottom",`${Math.max(0,Math.round(r))}px`),this.#e.element.style.setProperty("--ag-ui-visual-viewport-inset-top",`${Math.max(0,Math.round(e.offsetTop))}px`)}#g(){let e=this.#e.launcher.offsetWidth,n=this.#e.launcher.offsetHeight,r=this.#t;if(r!==null)return{left:r.left,top:r.top,width:e,height:n};let o=this.#e.launcher.getBoundingClientRect();return{left:o.left+o.width/2-e/2,top:o.top+o.height/2-n/2,width:e,height:n}}#y(e){if(!this.#m())return;this.#t=e,this.#n=null;let n=this.#e.element.getBoundingClientRect(),r=hd(this.#g(),{width:n.width,height:n.height},this.#c(),this.#b());this.#e.element.style.setProperty("--ag-ui-inset",r.hostInset),this.#e.element.style.setProperty("--ag-ui-launcher-inset",r.launcherInset),this.#o=r.corner,this.#e.element.setAttribute("data-expand-corner",`${r.corner.y}-${r.corner.x}`),this.syncResizeAnchor()}#E(e,n){this.#y({left:e,top:n})}#_(e,n){this.#E(e,n),this.#k()}#h(e,n){if(!this.#m())return{held:e,launcher:null};if(this.#t===null){let c=this.#g();this.#t={left:c.left,top:c.top}}let r=this.#t,o=co(e,this.#c(),lt),i=this.#o??this.#r;this.#e.element.style.setProperty("--ag-ui-inset",Jb(i,o,this.#b())),this.#n={left:o.left,top:o.top};let a={...this.#g(),left:r.left+(o.left-n.left),top:r.top+(o.top-n.top)},s={...a,...Kt(a,this.#c())};return this.#e.element.style.setProperty("--ag-ui-launcher-inset",uo(o,s,i,this.#b()).launcherInset),{held:o,launcher:s}}#N(e,n){let{held:r,launcher:o}=this.#h(e,n);o!==null&&(this.#M(r,o),this.#k())}#M(e,n){let r=this.#c(),o=this.#b(),i={width:e.right-e.left,height:e.bottom-e.top},{corner:a}=hd(n,i,r,o),s=uo(e,n,a,o);this.#e.element.style.setProperty("--ag-ui-inset",s.hostInset),this.#e.element.style.setProperty("--ag-ui-launcher-inset",s.launcherInset),this.#t={left:n.left,top:n.top},this.#n={left:e.left,top:e.top},this.#o=a,this.#e.element.setAttribute("data-expand-corner",`${a.y}-${a.x}`),this.syncResizeAnchor()}#B(e){if(!this.#m())return;let n=this.#e.element.getBoundingClientRect(),r=co({left:e.left,top:e.top,right:e.left+n.width,bottom:e.top+n.height},this.#c(),lt),o=this.#g(),i={...o,left:o.left+(r.left-e.left),top:o.top+(r.top-e.top)};this.#M(r,{...i,...Kt(i,this.#c())})}#k(){let e=this.#t;if(e===null)return;let n=this.#n;this.#e.writePreference(gd,JSON.stringify(n===null?e:{...e,panel:n}))}restoreLauncherPosition(){let e=this.#Z(),n=this.#t??e;if(n===null)return;let r=this.#n??e?.panel??null;if(r!==null){this.#t={left:n.left,top:n.top},this.#B(r);return}let o=this.#g();this.#y(Kt({...o,left:n.left,top:n.top},this.#c()))}#Z(){let e=this.#e.readPreference(gd);if(e===null)return null;try{let n=JSON.parse(e);if(typeof n!="object"||n===null)return null;let{left:r,top:o,panel:i}=n;if(typeof r!="number"||typeof o!="number")return null;let a=ik(i);return a===null?{left:r,top:o}:{left:r,top:o,panel:a}}catch{return null}}releaseLauncherPosition(){this.#m()||(this.#t=null,this.#n=null,this.#o=null,this.#e.element.style.removeProperty("--ag-ui-inset"),this.#e.element.style.removeProperty("--ag-ui-launcher-inset"),this.#e.element.removeAttribute("data-expand-corner"))}#I(e,n){if(n=this.#a(n),this.#p({width:n.right-n.left,height:n.bottom-n.top}),e.x!==this.#r.x&&e.y!==this.#r.y)return n;let r=this.#r;if(this.#e.element.style.setProperty("--ag-ui-inset",Jb(r,n,this.#b())),this.#t!==null){let o=this.#e.launcher.offsetWidth;this.#t={left:r.x==="left"?n.left:n.right-o,top:r.y==="top"?n.top:n.bottom-o}}return this.#n!==null&&(this.#n={left:n.left,top:n.top}),n}#L(e,n){let r=this.#I(e,n);this.#U({width:r.right-r.left,height:r.bottom-r.top}),this.#k(),this.syncResizeAnchor()}#V(){let e=`${this.#r.y==="top"?"bottom":"top"}-${this.#r.x==="left"?"right":"left"}`;for(let[n,r]of this.#i){let o=n===e;r.tabIndex=o?0:-1,o?r.removeAttribute("aria-hidden"):r.setAttribute("aria-hidden","true")}}#U(e){let n={...this.#z(),...e};this.#e.writePreference(md,JSON.stringify(n))}#z(){let e=this.#e.readPreference(md);if(e===null)return{};try{let n=JSON.parse(e);return typeof n=="object"&&n!==null?n:{}}catch{return{}}}};var Ss=class{region=document.createElement("div");#e=null;mount(){this.region.className="sr-only",this.region.setAttribute("role","status"),this.region.setAttribute("aria-live","polite"),this.region.setAttribute("aria-atomic","true")}announce(e){this.#e!==null&&clearTimeout(this.#e),this.region.textContent=e,this.#e=setTimeout(()=>{this.#e=null,this.region.textContent=""},Zp)}dispose(){this.#e!==null&&(clearTimeout(this.#e),this.#e=null)}};function Ts(t,e,n,r){let o=document.createElement("div");o.className=`run-notice run-notice--${n}`,o.setAttribute("part",`run-notice run-notice-${n}`),o.setAttribute("role","status");let i=document.createElement("span");i.className="run-notice-icon",i.setAttribute("part","run-notice-icon"),i.textContent=t,i.setAttribute("aria-hidden","true");let a=document.createElement("span");if(a.className="run-notice-text",a.setAttribute("part","run-notice-text"),a.textContent=e,o.append(i,a),r!==void 0){let s=document.createElement("button");s.type="button",s.className="run-notice-undo",s.setAttribute("part","run-notice-undo"),s.textContent=r.label,s.addEventListener("click",()=>{s.disabled=!0,r.onActivate()}),o.append(s)}return o}var As=class{element;get agent(){return this.#r}#e;#t;#n;#o=new Map;#r=null;constructor(e=fe){this.element=document.createElement("div"),this.element.className="subagent",this.element.setAttribute("part","subagent"),this.#e=document.createElement("button"),this.#e.type="button",this.#e.className="subagent-row",this.#e.setAttribute("part","subagent-row"),this.#e.setAttribute("aria-expanded","false"),this.#e.disabled=!0;let n=document.createElement("span");n.className="subagent-icon",n.setAttribute("part","subagent-icon"),n.setAttribute("aria-hidden","true"),this.#t=document.createElement("span"),this.#t.className="subagent-status",this.#t.setAttribute("part","subagent-status"),this.#t.textContent=e.subAgentWorking,this.#e.append(n,this.#t),this.#n=document.createElement("div"),this.#n.className="subagent-steps",this.#n.setAttribute("part","subagent-steps"),this.#n.setAttribute("role","list"),this.#n.setAttribute("aria-label",e.subAgentSteps),this.#n.hidden=!0,this.#e.addEventListener("click",()=>{this.#s(this.#e.getAttribute("aria-expanded")!=="true")}),this.element.append(this.#e,this.#n)}report(e){this.element.setAttribute("data-phase",e.phase),e.agent!==null&&(this.#r=e.agent,this.element.setAttribute("data-agent",e.agent)),e.status!==null&&(this.#t.textContent=e.status),e.tool!==null&&this.#i(e.tool)}#i(e){let n=this.#o.get(e.toolCallId)??this.#a(e);if(e.ok===null){n.removeAttribute("data-ok");return}n.setAttribute("data-ok",String(e.ok))}#a(e){let n=document.createElement("div");n.className="subagent-step",n.setAttribute("part","subagent-step"),n.setAttribute("role","listitem"),n.setAttribute("data-tool-call-id",e.toolCallId);let r=document.createElement("span");r.className="subagent-step-icon",r.setAttribute("part","subagent-step-icon"),r.setAttribute("aria-hidden","true");let o=document.createElement("span");return o.className="subagent-step-name",o.setAttribute("part","subagent-step-name"),o.textContent=e.name,n.append(r,o),this.#n.appendChild(n),this.#o.set(e.toolCallId,n),this.#e.disabled=!1,n}#s(e){this.#n.hidden=!e,this.#e.setAttribute("aria-expanded",String(e))}};var sk=Object.values(yt);function Qb(t){return typeof t!="object"||t===null||Array.isArray(t)?null:t}function fo(t){return typeof t=="string"&&t!==""?t:null}function lk(t){let e=Qb(t);if(e===null)return null;let n=fo(e.toolCallId),r=fo(e.name),o=e.ok;return n===null||r===null||o!==null&&typeof o!="boolean"?null:{toolCallId:n,name:r,ok:o}}function ey(t){let e=Qb(t);if(e===null)return null;let n=fo(e.delegationId),r=e.phase;return n===null||typeof r!="string"||!sk.includes(r)?null:{delegationId:n,phase:r,agent:fo(e.agent),status:fo(e.status),tool:lk(e.tool)}}var ks=class{#e;#t=new Map;#n=new Map;constructor(e){this.#e=e}report(e){let n=ey(e);n!==null&&this.#i(n)}start(e,n,r){r!==null&&(this.#n.set(e,r),this.#i({delegationId:r,agent:n===""?null:n,phase:yt.STARTED,status:re(this.#e.strings().subAgentDelegatedTo,{agent:n}),tool:null}))}finish(e){this.#o(e,yt.FINISHED,null)}fail(e,n){this.#o(e,yt.FAILED,n===""?this.#e.strings().subAgentFailed:n)}clear(){this.#t.clear(),this.#n.clear()}#o(e,n,r){let o=this.#n.get(e);if(o===void 0)return;let i=this.#t.get(o)?.agent??null;this.#i({delegationId:o,agent:i,phase:n,status:r===null?this.#r(i):r,tool:null})}#r(e){let n=this.#e.strings();return e===null?n.subAgentWorking:re(n.subAgentFinished,{agent:e})}#i(e){let n=this.#e.card(e.delegationId);if(n===void 0)return;let r=this.#t.get(e.delegationId);r===void 0&&(r=new As(this.#e.strings()),this.#t.set(e.delegationId,r),n.subagentSlot.appendChild(r.element)),r.report(e),this.#e.follow()}};function ck(t){return{[K.PENDING]:t.toolRunning,[K.DEFERRED]:t.toolDeferred,[K.DONE]:t.toolDone,[K.ERROR]:t.toolError,[K.DECLINED]:t.toolDeclined,[K.INTERRUPTED]:t.toolInterrupted}}function uk(t){return{[K.DONE]:t.resultLabel,[K.ERROR]:t.errorLabel,[K.DECLINED]:t.declinedLabel,[K.INTERRUPTED]:t.interruptedLabel}}function dk(t){try{return JSON.stringify(JSON.parse(t),null,2)}catch{return t}}var mo=class{element;approvalSlot;subagentSlot;#e;#t;#n;#o;#r;#i;#a;args;#s;#l;#u=!1;constructor(e,n,r,o=fe,i={}){this.#a=o,this.args=n,this.#s=e,this.#l=i.formatPayload??null,this.element=document.createElement("div"),this.element.className="tool-call",this.element.setAttribute("data-tool-name",e),this.element.setAttribute("data-expanded","false");let a=document.createElement("div");a.className="tool-call-head",a.setAttribute("part","tool-card-head");let s=document.createElement("span");s.className="tool-call-icon",s.setAttribute("part","tool-card-icon"),s.setAttribute("aria-hidden","true");let c=document.createElement("span");c.className="tool-call-name",c.setAttribute("part","tool-card-name"),c.textContent=r??e,this.#e=document.createElement("span"),this.#e.className="tool-call-status",this.#d(K.PENDING),this.#t=document.createElement("span"),this.#t.className="tool-call-decision",this.#t.setAttribute("part","tool-card-decision"),this.#t.hidden=!0,a.append(s,c,this.#e,this.#t);let l=this.#p("args",o.argumentsLabel);this.#f(l.body,{kind:"arguments",toolName:e,args:n},JSON.stringify(n,null,2)),l.root.hidden=Object.keys(n).length===0;let u=this.#p("result",o.resultLabel);this.#o=u.root,this.#r=u.label,this.#i=u.body,u.root.hidden=!0,this.#n=document.createElement("button"),this.#n.type="button",this.#n.className="tool-call-toggle",this.#n.setAttribute("part","tool-card-toggle"),this.#n.setAttribute("aria-expanded","false"),this.#n.textContent=o.details,this.#n.addEventListener("click",()=>this.#c(!this.#m()));let f=document.createElement("div");f.className="tool-call-body",f.setAttribute("part","tool-card-body"),f.append(l.root,u.root),this.approvalSlot=document.createElement("div"),this.approvalSlot.className="tool-call-approval",this.approvalSlot.setAttribute("part","tool-card-approval"),this.subagentSlot=document.createElement("div"),this.subagentSlot.className="tool-call-subagent",this.subagentSlot.setAttribute("part","tool-card-subagent"),this.element.append(a,this.subagentSlot,this.#n,f,this.approvalSlot)}mark(e){this.#u||this.#d(e)}setAsking(e){this.element.toggleAttribute("data-asking",e)}recordDecision(e){this.element.setAttribute("data-decision",e),this.#t.textContent=e==="approved"?this.#a.decisionApproved:this.#a.decisionDeclined,this.#t.hidden=!1}get settled(){return this.#u}settle(e,n){this.#u||(this.#u=!0,this.#d(e),this.#r.textContent=uk(this.#a)[e],this.#f(this.#i,{kind:"result",toolName:this.#s,status:e,text:n},dk(n)),this.#o.hidden=!1)}#d(e){this.element.setAttribute("data-status",e),this.element.setAttribute("part",`tool-card tool-card-${e}`),this.#e.setAttribute("part",`tool-card-status tool-card-status-${e}`),this.#e.textContent=ck(this.#a)[e]}#f(e,n,r){let o=this.#l===null?null:this.#l(n);if(o===null){e.textContent=r;return}if(e.setAttribute("data-formatted","true"),typeof o=="string"){e.textContent=o;return}e.replaceChildren(o)}#p(e,n){let r=document.createElement("div");r.className=`tool-call-section tool-call-section--${e}`,r.setAttribute("part",`tool-card-section tool-card-${e}-section`);let o=document.createElement("span");o.className="tool-call-section-label",o.setAttribute("part",`tool-card-section-label tool-card-${e}-label`),o.textContent=n;let i=document.createElement("pre");return i.className=`tool-call-${e}`,i.setAttribute("part",`tool-card-${e}`),r.append(o,i),{root:r,label:o,body:i}}#m(){return this.element.getAttribute("data-expanded")==="true"}#c(e){this.element.setAttribute("data-expanded",String(e)),this.#n.setAttribute("aria-expanded",String(e))}};var ty=`
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
`;var ny=`
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
`;var ry=`
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
`;var oy=`
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
`;var iy=`
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
`;var ay=`
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
`;var sy=`
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
`;var ly=`
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
`;var cy=`
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
`;var uy=`
/* Embedded: drop the floating chrome and the high z-index stacking context so
   the widget lives in the host's own layout (fixes overlay/z-index clashes). */
:host([placement="embedded"]) {
  --_position: var(--ag-ui-position, static);
  --_width: var(--_drag-width, var(--ag-ui-width, 100%));
  --_height: var(--_drag-height, var(--ag-ui-height, 100%));
  --_max-width: var(--ag-ui-max-width, 100%);
  --_max-height: var(--ag-ui-max-height, 100%);
  --_shadow: var(--ag-ui-shadow, none);
  --_z-index: var(--ag-ui-z-index, auto);
}
`;var dy=`
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

/* Every transition in the stylesheet is timed by --_motion, so collapsing it to a
   frame is the whole reduced-motion story: states still change (and display
   still flips at the end of its discrete transition), nothing travels. */
@media (prefers-reduced-motion: reduce) {
  :host {
    --_motion: var(--ag-ui-motion, 0.001s);
  }
}
`;var py=`
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
`;var hy=`
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
  --_width: var(--_drag-width, var(--ag-ui-width, 420px));
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
`;var fy=`
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
`;var my=`
/* Sidebar: a full-height docked panel that slides open/closed and
   collapses to a slim icon rail (not the floating launcher). Docked right by
   default; data-side="left" docks it left. Overlay by default \u2014 set
   --ag-ui-position: static (and place this element in your own layout) for a
   host-managed push instead. */
:host([placement="sidebar"]) {
  --_inset: var(--ag-ui-inset, calc(var(--_viewport-inset-top) + var(--_keyboard-inset-top)) var(--_viewport-inset-right) var(--_viewport-inset-bottom) auto);
  --_width: var(--_drag-width, var(--ag-ui-width, 420px));
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
`;var gy=`
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

   The size the user dragged is deliberately not read here. The desktop
   placements read it before the host token, and this block restates the sizes
   without it, so a persisted or freshly dragged size cannot change the shape
   of a phone, and a window narrowed after a drag goes full-bleed.

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
`;var vy=`
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
`;var by=`
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
`;var yy=['[data-tool-display="inline"]','[data-tool-display="minimal"]','[data-tool-display="compact"]','[data-tool-display="full"]'].join(", "),me=`:host(:where(:not(${yy})))`,Is=`:host(:is(${yy}))`,wy=`
/* \u2500\u2500 The folded tool-step group \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
   One quiet row per run of consecutive calls, the cards one click down as
   plain lines rather than boxes. Every rule is scoped to grouped mode, so
   none of it reaches a group drawn earlier once the host moves to a card
   mode. */
${me} .tool-group {
  align-self: stretch;
  display: flex;
  flex-direction: column;
  min-width: 0;
}

${me} .tool-group-head {
  appearance: none;
  align-self: flex-start;
  max-width: 100%;
  display: inline-flex;
  align-items: center;
  gap: 8px;
  margin: 0 0 0 -6px;
  padding: 4px 6px;
  border: 0;
  border-radius: 6px;
  background: transparent;
  color: var(--_muted);
  font: inherit;
  font-size: var(--_text-sm);
  line-height: 1.3;
  text-align: left;
  cursor: pointer;
}

${me} .tool-group-head:hover {
  background: var(--_hover);
  color: var(--_fg);
}

${me} .tool-group-head:focus-visible {
  outline: 2px solid var(--_ring);
  outline-offset: 1px;
}

${me} .tool-group-label {
  min-width: 0;
  font-weight: 500;
  color: var(--_ink-2);
  overflow-wrap: anywhere;
}

${me} .tool-group-meta {
  min-width: 0;
  color: var(--_muted);
  overflow-wrap: anywhere;
}

/* Each note opens with a middle dot, which also parts the first note from
   the label. */
${me} .tool-group-note::before {
  content: "\\00B7";
  margin: 0 6px 0 2px;
}

${me} .tool-group[data-state="error"] .tool-group-meta {
  color: var(--_danger);
}

${me} .tool-group-icon {
  flex: none;
  box-sizing: border-box;
  width: 14px;
  height: 14px;
  background: currentColor;
  mask: var(--_ico-check) center / contain no-repeat;
  color: var(--_success);
}

${me} .tool-group[data-state="error"] .tool-group-icon {
  mask-image: var(--_ico-error);
  color: var(--_danger);
}

${me} .tool-group[data-state="running"] .tool-group-icon {
  mask: none;
  background: none;
  border: 2px solid var(--_muted);
  border-top-color: transparent;
  border-radius: 50%;
  animation: ag-ui-tool-spin var(--_tool-spin-duration) linear infinite;
}

/* Waiting on the user: a steady accent dot rather than a spinner, and the
   count in the accent's ink. */
${me} .tool-group[data-state="waiting"] .tool-group-icon {
  mask: none;
  border-radius: 50%;
  transform: scale(0.6);
  background: var(--_accent);
}

${me} .tool-group[data-state="waiting"] .tool-group-meta {
  color: var(--_accent-ink);
  font-weight: 500;
}

${me} .tool-group-chevron {
  flex: none;
  width: 12px;
  height: 12px;
  background: currentColor;
  mask: var(--_ico-chevron) center / contain no-repeat;
  opacity: 0.7;
  transition: transform var(--_motion) var(--_ease);
}

${me} .tool-group[data-open="true"] .tool-group-chevron {
  transform: rotate(90deg);
}

@media (prefers-reduced-motion: reduce) {
  ${me} .tool-group[data-state="running"] .tool-group-icon {
    animation: none;
  }
}

${me} .tool-group-list {
  display: flex;
  flex-direction: column;
  gap: 2px;
  margin: 2px 0 4px 6px;
  padding-left: 13px;
  border-left: 1px solid var(--_border);
}

${me} .tool-group[data-open="false"] .tool-group-list {
  display: none;
}

/* A card inside the group is one line of the list: icon, name, and its
   Details control at the end, with the arguments and result opening under
   the whole row. */
${me} .tool-group .tool-call {
  max-width: 100%;
  align-self: stretch;
  flex-flow: row wrap;
  align-items: center;
  gap: 2px 10px;
  padding: 3px 0;
  border: 0;
  border-radius: 0;
  background: transparent;
  color: var(--_ink-2);
  font-family: inherit;
  font-size: var(--_text-sm);
}

${me} .tool-group .tool-call-head {
  flex: 1 1 auto;
  justify-content: flex-start;
}

${me} .tool-group .tool-call-name {
  flex: 0 1 auto;
  font-weight: 450;
}

/* The repeat ordinal on a step whose label an earlier step has. */
${me} .tool-call-repeat {
  color: var(--_muted);
  font-variant-numeric: tabular-nums;
}

${me} .tool-group .tool-call-toggle {
  font-family: inherit;
  font-size: var(--_text-xs);
  color: var(--_muted);
}

${me} .tool-group .tool-call-body,
${me} .tool-group .tool-call-approval,
${me} .tool-group .tool-call-subagent {
  flex-basis: 100%;
}

/* Grouping is decided as each card is built, so a card mode set afterwards
   finds groups already drawn. It flattens them: the group and its list stop
   generating boxes, the row and the repeat ordinals go, and every card lays
   out as a direct child of the answer, exactly as a card built in that mode
   does. */
${Is} .tool-group,
${Is} .tool-group-list {
  display: contents;
}

${Is} .tool-group-head,
${Is} .tool-call-repeat {
  display: none;
}

/* Each of these declares its own display, which beats the user-agent rule for
   the hidden attribute, so each needs its own. The host prefix is there for
   weight, not scope: it lifts these over the card-mode rules above that set
   display, which are heavier than a bare class and attribute. */
:host .tool-group[hidden],
:host .tool-group-head[hidden],
:host .tool-group-list[hidden] {
  display: none;
}
`;var Ey=`
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
`;var xy=`
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
`;var _y=`
/* \u2500\u2500 Density \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */
:host([density="compact"]) {
  --_font-size: var(--ag-ui-font-size, 13px);
  --_space: var(--ag-ui-space, 6px);
  --_pad: var(--ag-ui-pad, 10px);
  --_msg-pad: var(--ag-ui-msg-pad, 5px 9px);
  --_msg-radius: var(--ag-ui-msg-radius, 10px);
}
`;var Sy=`
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
   1. No rule outside a :host block may reference a public name
      directly. A public name read outside these blocks resolves to nothing and
      silently drops its declaration rather than erroring, so the miss shows up
      as a missing colour, not a failure.
   2. Every --_* alias in use is declared here. Aliases inherit like any custom
      property, so an undeclared one would pick up a same-named property from
      the host page; declaring it on :host shields the shadow tree from that. */
:host {
  /* Colors. The default theme, Quiet: three seeds, and every other shade
     mixed from them in oklch, so a host that sets only --ag-ui-accent (or
     only the background and text) gets a whole widget rethemed. The seeds use
     light-dark, so the scheme word on the theme attribute picks the half;
     see scheme_styles in the themes directory. Every derived shade still
     reads its own public token first, so each stays an override point. */
  color-scheme: light;
  --_bg: var(--ag-ui-bg, light-dark(#ffffff, #161618));
  --_fg: var(--ag-ui-fg, light-dark(#1b1b1d, #ececee));
  --_accent: var(--ag-ui-accent, light-dark(#232326, #f0f0f2));
  --_ink-2: var(--ag-ui-ink-2, color-mix(in oklch, var(--_fg) 78%, var(--_bg)));
  --_ink-3: var(--ag-ui-ink-3, color-mix(in oklch, var(--_fg) 64%, var(--_bg)));
  --_line: var(--ag-ui-line, color-mix(in oklch, var(--_fg) 11%, var(--_bg)));
  --_line-strong: var(--ag-ui-line-strong, color-mix(in oklch, var(--_fg) 20%, var(--_bg)));
  --_wash: var(--ag-ui-wash, color-mix(in oklch, var(--_fg) 4.5%, var(--_bg)));
  --_accent-ink: var(--ag-ui-accent-ink, color-mix(in oklch, var(--_accent) 82%, var(--_fg)));
  --_ring: var(--ag-ui-ring, color-mix(in oklch, var(--_accent) 55%, transparent));
  /* The user's turn is the accent at a whisper. With Quiet's graphite accent
     that is a neutral wash; once a host sets a brand accent it becomes a tint
     of the brand, which is the one thing Soft does that Quiet keeps. */
  --_user-bg: var(--ag-ui-user-bg, color-mix(in oklch, var(--_accent) 12%, var(--_bg)));
  --_user-fg: var(--ag-ui-user-fg, var(--_fg));
  --_assistant-bg: var(--ag-ui-assistant-bg, transparent);
  --_hover: var(--ag-ui-hover, color-mix(in oklch, var(--_fg) 6%, var(--_bg)));
  --_input-bg: var(--ag-ui-input-bg, var(--_bg));
  --_tool-bg: var(--ag-ui-tool-bg, transparent);
  --_tool-fg: var(--ag-ui-tool-fg, var(--_ink-2));
  --_header-bg: var(--ag-ui-header-bg, var(--_bg));
  --_header-fg: var(--ag-ui-header-fg, var(--_fg));
  --_border: var(--ag-ui-border, var(--_line));
  --_radius: var(--ag-ui-radius, 12px);
  /* The panel's own frame, which is the one corner a placement can put against
     the edge of the viewport. The placements that do (page, sidebar, side, full,
     and all but embedded on a small viewport) square this and leave --_radius alone, so
     the answer well and the controls inside the panel stay as round as the
     theme says: none of them meets that edge. */
  /* What a theme sets for the frame; the effective value below is what a
     placement squares, so the two never fight over one property. A host's
     --ag-ui-radius still rounds the frame, as it did before themes gave the
     frame a radius of its own; only the theme's own default differs. */
  --_frame-radius: var(--ag-ui-frame-radius, var(--ag-ui-radius, 14px));
  --_panel-radius: var(--ag-ui-panel-radius, var(--_frame-radius));

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
  --_tooltip-bg: var(--ag-ui-tooltip-bg, var(--_fg));
  --_tooltip-fg: var(--ag-ui-tooltip-fg, var(--_bg));

  /* Text and marks drawn on top of the accent and danger fills. Separate
     tokens because they are not free: a host that themes the accent to a pale
     colour has white-on-pale with no way to correct it, which is the one
     theming change that makes a control unreadable rather than merely off. */
  /* Picked from the accent's own luminance where relative colour syntax is
     supported (the first block after this rule). Without it, this value: the
     scheme's colour, which is the right side for each newer theme's own
     accent in both schemes. Classic and code take white instead, in the
     second block. */
  --_on-accent: var(--ag-ui-on-accent, light-dark(#ffffff, #111111));
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
  --_success: var(--ag-ui-success, light-dark(#15803d, #4ade80));
  --_danger: var(--ag-ui-danger, light-dark(#b91c1c, #f87171));
  --_muted: var(--ag-ui-muted, var(--_ink-3));

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
  --_frame-shadow: var(--ag-ui-frame-shadow, 0 1px 2px light-dark(rgb(0 0 0 / 0.05), rgb(255 255 255 / 0.04)), 0 12px 32px -16px light-dark(rgb(0 0 0 / 0.22), rgb(0 0 0 / 0.7)));
  --_shadow: var(--ag-ui-shadow, var(--_frame-shadow));
  --_font: var(--ag-ui-font, Inter, ui-sans-serif, system-ui, sans-serif);
  --_serif: var(--ag-ui-serif, Charter, "Bitstream Charter", "Iowan Old Style", Georgia, serif);
  --_font-size: var(--ag-ui-font-size, var(--_text-md));
  /* The type scale. */
  --_text-xs: var(--ag-ui-text-xs, 11.5px);
  --_text-sm: var(--ag-ui-text-sm, 12.5px);
  --_text-md: var(--ag-ui-text-md, 14px);
  --_text-lg: var(--ag-ui-text-lg, 16px);
  --_leading: var(--ag-ui-leading, 1.55);
  --_code-font: var(--ag-ui-code-font, ui-monospace, "SF Mono", Menlo, monospace);

  /* Header / launcher icon box. */
  --_icon-size: var(--ag-ui-icon-size, 22px);
  --_icon-radius: var(--ag-ui-icon-radius, 4px);

  /* Composer \u2014 one bordered surface holding the field and its tool row. */
  --_composer-radius: var(--ag-ui-composer-radius, 12px);
  --_composer-max-height: var(--ag-ui-composer-max-height, 40vh);
  --_tool-btn-size: var(--ag-ui-tool-btn-size, 30px);
  --_send-size: var(--ag-ui-send-size, 30px);
  --_glyph-size: var(--ag-ui-glyph-size, 18px);
  --_glyph-stroke: var(--ag-ui-glyph-stroke, 1.75);

  /* How wide a chart is allowed to get. A cap rather than a width: below it
     the chart fills its column, and above it a wider panel is just a wider
     panel. */
  --_chart-max-width: var(--ag-ui-chart-max-width, 480px);
  /* Chart series. Quiet draws in ink and keeps hues for the series past two. */
  --_chart-1: var(--ag-ui-chart-1, var(--_fg));
  --_chart-2: var(--ag-ui-chart-2, color-mix(in oklch, var(--_fg) 32%, var(--_bg)));
  --_chart-3: var(--ag-ui-chart-3, #e0803c);
  --_chart-4: var(--ag-ui-chart-4, #b563d8);
  --_chart-5: var(--ag-ui-chart-5, #d84f6e);
  --_chart-6: var(--ag-ui-chart-6, #3ba7c4);

  /* Unread badge on the launcher. */
  --_badge-bg: var(--ag-ui-badge-bg, var(--_danger));
  --_badge-fg: var(--ag-ui-badge-fg, #ffffff);
  --_badge-size: var(--ag-ui-badge-size, 18px);
  --_badge-font-size: var(--ag-ui-badge-font-size, 11px);

  /* The floating launcher a collapsed widget shrinks to. */
  --_launcher-size: var(--ag-ui-launcher-size, 48px);
  --_launcher-bg: var(--ag-ui-launcher-bg, var(--_bg));
  --_launcher-fg: var(--ag-ui-launcher-fg, var(--_fg));
  --_launcher-radius: var(--ag-ui-launcher-radius, 14px);
  --_launcher-icon-size: var(--ag-ui-launcher-icon-size, 22px);
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
  --_msg-radius: var(--ag-ui-msg-radius, 12px);

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
  --_width: var(--_drag-width, var(--ag-ui-width, 380px));
  --_height: var(--_drag-height, var(--ag-ui-height, 560px));
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

  /* Surfaces a theme can tint; Quiet leaves them neutral. */
  --_tint: var(--ag-ui-tint, var(--_wash));
  --_tint-2: var(--ag-ui-tint-2, var(--_user-bg));

  /* Status marks drawn as masks, so they take the colour of their state. */
  --_ico-check: var(--ag-ui-ico-check, url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='none' stroke='black' stroke-width='1.9' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M3.5 8.5l3 3 6-7'/%3E%3C/svg%3E"));
  --_ico-error: var(--ag-ui-ico-error, url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='none' stroke='black' stroke-width='1.6' stroke-linecap='round'%3E%3Ccircle cx='8' cy='8' r='6.2'/%3E%3Cpath d='M8 4.9v3.7M8 11.1v.1'/%3E%3C/svg%3E"));
  --_ico-declined: var(--ag-ui-ico-declined, url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='none' stroke='black' stroke-width='1.6' stroke-linecap='round'%3E%3Ccircle cx='8' cy='8' r='6.2'/%3E%3Cpath d='M3.8 12.2l8.4-8.4'/%3E%3C/svg%3E"));
  --_ico-chevron: var(--ag-ui-ico-chevron, url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='none' stroke='black' stroke-width='1.8' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M6 3.5l4.5 4.5L6 12.5'/%3E%3C/svg%3E"));
}

/* The colour drawn on the accent, from the accent's own luminance: white on
   an accent darker than WCAG relative luminance 0.179, black on a lighter
   one. That is the crossover where the two give the same contrast, so the
   pick is always the better of the two and never under 4.58:1. A threshold on
   oklch lightness was tried first and missed: indigo 500 sits under the
   threshold that works for greys and took white at 4.47:1. Each channel is
   the same expression over the linear channels, so the result is pure black
   or pure white. A host that sets a mid-tone brand accent in the dark scheme
   would otherwise get the scheme's near-black on it. Relative colour syntax
   with channel arithmetic is Chrome 119, Firefox 128 and Safari 18. Of the
   browsers at or above this package's floor (Chrome 123, Firefox 120, Safari
   17.5), Firefox 120 to 127 lack it, and Safari 17.5 and 17.6 parse an older
   draft that rejects this expression, so the test below asks for the exact
   expression and those engines keep the fallback above. light-dark needs no
   such test: the floor is set where every engine has it. */
@supports (color: color(from red srgb-linear clamp(0, (0.179 - (0.2126 * r + 0.7152 * g + 0.0722 * b)) * 100000, 1) 0 0)) {
  :host {
    --_on-accent: var(--ag-ui-on-accent, color(from var(--_accent) srgb-linear clamp(0, (0.179 - (0.2126 * r + 0.7152 * g + 0.0722 * b)) * 100000, 1) clamp(0, (0.179 - (0.2126 * r + 0.7152 * g + 0.0722 * b)) * 100000, 1) clamp(0, (0.179 - (0.2126 * r + 0.7152 * g + 0.0722 * b)) * 100000, 1)));
  }
}

/* Without relative colour syntax, classic and code keep the white they drew
   before the theme set, not the scheme's colour: their accents are dark in
   both schemes. Only on that path, so where the pick can be computed it is.
   The condition is the one above, negated, and must stay its exact twin. */
@supports not (color: color(from red srgb-linear clamp(0, (0.179 - (0.2126 * r + 0.7152 * g + 0.0722 * b)) * 100000, 1) 0 0)) {
  :host([theme~="classic"]),
  :host([theme~="code"]) {
    --_on-accent: var(--ag-ui-on-accent, #ffffff);
  }
}
`;var Ty=`
/* \u2500\u2500 Classic \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
   The status pill draws its state's colour on a grey wash, which measured
   3.75:1 for done in the light scheme and under 2.5:1 in the dark one. Each
   state's ink is pulled halfway to the text colour: darker on the light
   panel, lighter on the dark one, still recognisably its state. Scoped to
   classic, so code keeps the pill it always had. */
:host([theme~="classic"]) .tool-call-status {
  color: color-mix(in oklch, var(--_muted) 50%, var(--_fg));
}

:host([theme~="classic"]) .tool-call[data-status="deferred"] .tool-call-status {
  color: color-mix(in oklch, var(--_accent) 50%, var(--_fg));
}

:host([theme~="classic"]) .tool-call[data-status="done"] .tool-call-status {
  color: color-mix(in oklch, var(--_success) 50%, var(--_fg));
}

:host([theme~="classic"]) .tool-call[data-status="error"] .tool-call-status {
  color: color-mix(in oklch, var(--_danger) 50%, var(--_fg));
}

/* The browser's default placeholder measured 3.93:1 on the dark composer.
   The muted ink clears 4.5:1 in both schemes. */
:host([theme~="classic"]) .input::placeholder {
  color: var(--_muted);
  opacity: 1;
}
`;var Ay=`
/* \u2500\u2500 Classic \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
   Today's indigo header, accent user bubble, round launcher and heavy
   shadow, in both schemes. The code theme starts from these as well, since
   it was always this structure in a terminal palette. */
:host([theme~="classic"]),
:host([theme~="code"]) {
  --_bg: var(--ag-ui-bg, light-dark(#ffffff, #15151f));
  --_fg: var(--ag-ui-fg, light-dark(#1a1a2e, #e8e8f2));
  --_accent: var(--ag-ui-accent, #4f46e5);
  --_user-bg: var(--ag-ui-user-bg, #4f46e5);
  --_user-fg: var(--ag-ui-user-fg, #ffffff);
  --_assistant-bg: var(--ag-ui-assistant-bg, light-dark(#f1f1f6, #25253a));
  --_hover: var(--ag-ui-hover, light-dark(#e7e7ee, #303049));
  --_tool-bg: var(--ag-ui-tool-bg, var(--_assistant-bg));
  --_tool-fg: var(--ag-ui-tool-fg, var(--_accent));
  --_header-bg: var(--ag-ui-header-bg, light-dark(var(--_accent), #1f1f30));
  --_header-fg: var(--ag-ui-header-fg, light-dark(#ffffff, #e8e8f2));
  --_border: var(--ag-ui-border, light-dark(#e2e2ec, #33334a));
  --_muted: var(--ag-ui-muted, light-dark(#6b7280, #9aa0b4));
  --_success: var(--ag-ui-success, #15803d);
  --_danger: var(--ag-ui-danger, #b91c1c);
  --_tooltip-bg: var(--ag-ui-tooltip-bg, #1f2430);
  --_tooltip-fg: var(--ag-ui-tooltip-fg, #f5f6fa);
  --_font: var(--ag-ui-font, inherit);
  --_frame-radius: var(--ag-ui-frame-radius, var(--_radius));
  --_frame-shadow: var(--ag-ui-frame-shadow, 0 12px 32px light-dark(rgba(20, 20, 50, 0.18), rgba(0, 0, 0, 0.5)));
  --_composer-radius: var(--ag-ui-composer-radius, 14px);
  --_msg-radius: var(--ag-ui-msg-radius, 14px);
  --_launcher-size: var(--ag-ui-launcher-size, 56px);
  --_launcher-bg: var(--ag-ui-launcher-bg, var(--_header-bg));
  --_launcher-fg: var(--ag-ui-launcher-fg, var(--_header-fg));
  --_launcher-radius: var(--ag-ui-launcher-radius, 50%);
  --_launcher-icon-size: var(--ag-ui-launcher-icon-size, 26px);
  --_chart-1: var(--ag-ui-chart-1, #4f7cff);
  --_chart-2: var(--ag-ui-chart-2, #21b573);
}

/* Classic's contrast fixes, which code does not share. The indigo accent
   measured 2.38:1 as tool-name text on the dark card, and the old success
   green 2.38:1 as the done mark there; in the dark scheme the tool name
   takes the accent mixed halfway to the text colour, and success the
   lighter green the other themes use. The light half is unchanged. */
:host([theme~="classic"]) {
  --_tool-fg: var(--ag-ui-tool-fg, light-dark(var(--_accent), color-mix(in oklch, var(--_accent) 50%, var(--_fg))));
  --_success: var(--ag-ui-success, light-dark(#15803d, #4ade80));
}
`;var ky=`
/* \u2500\u2500 Code \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
   Dark only, monospace, green accent. Restates the colours classic sets,
   after it, so code wins wherever the two would both apply. */
:host([theme~="code"]) {
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
  --_frame-shadow: var(--ag-ui-frame-shadow, 0 12px 32px rgba(0, 0, 0, 0.6));
}
`;var Iy=`
/* \u2500\u2500 Ledger \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
   Structure only; the tokens are in ledger_tokens. Serif for what the
   agent says, monospace for what the machine did. */

:host([theme~="ledger"]) .chat {
  line-height: var(--_leading);
  border-color: var(--_line-strong);
}

:host([theme~="ledger"]) .header {
  padding: 8px 10px 8px 14px;
  border-bottom-color: var(--_line-strong);
}

:host([theme~="ledger"]) .header-title {
  font-family: var(--_code-font);
  font-size: var(--_text-xs);
  font-weight: 600;
  letter-spacing: 0.08em;
  text-transform: uppercase;
}

:host([theme~="ledger"]) .header-title::before {
  content: "";
  display: inline-block;
  width: 7px;
  height: 7px;
  margin-right: 8px;
  background: var(--_accent);
  vertical-align: 1px;
}

:host([theme~="ledger"]) .header-btn {
  color: var(--_ink-3);
  border-radius: 3px;
}

:host([theme~="ledger"]) .header-btn:hover {
  background: var(--_hover);
  color: var(--_fg);
}

:host([theme~="ledger"]) .message--user {
  align-self: stretch;
  max-width: 100%;
  margin-top: 6px;
  padding: 2px 0 2px 12px;
  border-left: 2px solid var(--_fg);
  font-weight: 500;
}

:host([theme~="ledger"]) .message--user + .answer,
:host([theme~="ledger"]) .answer + .message--user {
  margin-top: 4px;
}

:host([theme~="ledger"]) .answer + .message--user {
  border-top: 0;
}

:host([theme~="ledger"]) .message--assistant {
  padding: 0;
  max-width: 100%;
  font-family: var(--_serif);
  font-size: var(--_text-lg);
  line-height: 1.5;
}

:host([theme~="ledger"]) .message--assistant a {
  color: var(--_accent-ink);
}

:host([theme~="ledger"]) .thoughts-toggle {
  font-family: var(--_code-font);
  font-size: var(--_text-xs);
  letter-spacing: 0.01em;
}

/* The step group's row reads as a ledger heading. Unscoped to grouped mode:
   a card mode hides the row and drops the list's box, so neither reaches a
   flattened card. */
:host([theme~="ledger"]) .tool-group-head {
  font-family: var(--_code-font);
  font-size: var(--_text-xs);
  border-radius: 2px;
  text-transform: uppercase;
  letter-spacing: 0.06em;
}

:host([theme~="ledger"]) .tool-group-list {
  border-left: 1px dashed var(--_line-strong);
}

:host([theme~="ledger"]) .chart-block {
  border-top: 1px solid var(--_line-strong);
  border-bottom: 1px solid var(--_line);
  padding: 8px 0;
}

:host([theme~="ledger"]) .chart-title {
  font-family: var(--_code-font);
  font-size: var(--_text-xs);
  text-transform: uppercase;
  letter-spacing: 0.08em;
}

:host([theme~="ledger"]) .input-row {
  padding-block: 10px;
  border-top: 1px solid var(--_line-strong);
}

:host([theme~="ledger"]) .composer {
  border-color: var(--_line-strong);
}

:host([theme~="ledger"]) .composer:focus-within {
  border-color: var(--_fg);
}

:host([theme~="ledger"]) .send {
  border-radius: 3px;
}

:host([theme~="ledger"]) :is(.suggestion-chip, .skill-chip) {
  background: transparent;
  border: 1px solid var(--_line-strong);
  color: var(--_ink-2);
  border-radius: 2px;
  font-family: var(--_code-font);
  font-size: var(--_text-xs);
  padding: 3px 8px;
}

:host([theme~="ledger"]) :is(.suggestion-chip, .skill-chip):hover {
  border-color: var(--_fg);
  color: var(--_fg);
}

:host([theme~="ledger"]) .confirm {
  border: 1px solid var(--_fg);
  border-left: 3px solid var(--_accent);
  border-radius: 2px;
  padding: 10px 12px;
  gap: 10px;
  background: var(--_bg);
}

:host([theme~="ledger"]) .confirm-btn {
  border-radius: 2px;
  padding: 5px 12px;
  font-family: var(--_code-font);
  font-size: var(--_text-xs);
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.06em;
  border-color: var(--_line-strong);
}

:host([theme~="ledger"]) .confirm-btn--confirm {
  border-color: var(--_accent);
}

:host([theme~="ledger"]) .launcher {
  border: 0;
}
`;var Ry=`
/* \u2500\u2500 Ledger \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
   A smaller type scale than the other themes, because density is the point.
   Set before the density presets, so density="compact" still wins. */
:host([theme~="ledger"]) {
  --_bg: var(--ag-ui-bg, light-dark(#fbfaf6, #151513));
  --_fg: var(--ag-ui-fg, light-dark(#1d1c19, #e8e6df));
  --_accent: var(--ag-ui-accent, light-dark(#b8410e, #f08a4b));
  --_code-font: var(--ag-ui-code-font, "JetBrains Mono", ui-monospace, Menlo, monospace);
  --_text-xs: var(--ag-ui-text-xs, 10.5px);
  --_text-sm: var(--ag-ui-text-sm, 12px);
  --_text-md: var(--ag-ui-text-md, 13px);
  --_text-lg: var(--ag-ui-text-lg, 14.5px);
  --_leading: var(--ag-ui-leading, 1.5);
  --_space: var(--ag-ui-space, 8px);
  --_pad: var(--ag-ui-pad, 14px);
  --_radius: var(--ag-ui-radius, 3px);
  --_frame-radius: var(--ag-ui-frame-radius, var(--ag-ui-radius, 6px));
  --_msg-radius: var(--ag-ui-msg-radius, 0px);
  --_composer-radius: var(--ag-ui-composer-radius, 4px);
  --_user-bg: var(--ag-ui-user-bg, transparent);
  --_frame-shadow: var(--ag-ui-frame-shadow, 0 0 0 1px var(--_line-strong), 0 20px 40px -28px rgb(0 0 0 / 0.45));
  --_launcher-bg: var(--ag-ui-launcher-bg, var(--_fg));
  --_launcher-fg: var(--ag-ui-launcher-fg, var(--_bg));
  --_launcher-radius: var(--ag-ui-launcher-radius, 6px);
  --_launcher-size: var(--ag-ui-launcher-size, 44px);
  --_launcher-icon-size: var(--ag-ui-launcher-icon-size, 20px);
  --_chart-1: var(--ag-ui-chart-1, var(--_fg));
  --_chart-2: var(--ag-ui-chart-2, var(--_accent));
}
`;var se={modern:':host(:not([theme~="classic"], [theme~="code"]))',quiet:':host(:not([theme~="classic"], [theme~="code"], [theme~="soft"], [theme~="ledger"]))'};var Cy=`
/* \u2500\u2500 status as an icon, never a pill \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
   The word stays for assistive technology through the card's own label; the
   pill only ever repeated what the icon said. */
${se.modern} .tool-call-status {
  position: absolute;
  width: 1px;
  height: 1px;
  overflow: hidden;
  clip-path: inset(50%);
  white-space: nowrap;
}

${se.modern} .tool-call:is([data-status="done"], [data-status="error"], [data-status="declined"]) .tool-call-icon::before {
  content: "";
  width: 14px;
  height: 14px;
  background: currentColor;
  mask: var(--_ico-check) center / contain no-repeat;
}

${se.modern} .tool-call[data-status="done"] .tool-call-icon {
  color: var(--_success);
}

${se.modern} .tool-call[data-status="error"] .tool-call-icon {
  color: var(--_danger);
}

${se.modern} .tool-call[data-status="error"] .tool-call-icon::before {
  mask-image: var(--_ico-error);
}

/* An interrupted call is muted like a declined one but keeps the base glyph
   rather than taking the declined mark: nobody refused it, it only did not
   finish. */
${se.modern} .tool-call:is([data-status="declined"], [data-status="interrupted"]) .tool-call-icon {
  color: var(--_muted);
}

${se.modern} .tool-call[data-status="declined"] .tool-call-icon::before {
  mask-image: var(--_ico-declined);
}

/* The settled icon inherits colour from the icon box, so the box's own glyph
   colour from the base rules must not win. */
${se.modern} .tool-call .tool-call-icon::before {
  color: inherit;
}

/* \u2500\u2500 one chip row \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
   Follow-up suggestions are the row once a conversation has started; the
   skill chips stay on the empty state only and otherwise live in the slash
   palette, so two rows never compete above the composer. */
:host(:not([theme~="classic"], [theme~="code"], [data-empty])) .skill-chips {
  display: none;
}

/* \u2500\u2500 one action row per answer \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
   Copy and retry under every interim sentence of a long turn read as noise;
   only the row after the last bubble of a turn stays. */
${se.modern} .message-actions:has(~ .message--assistant) {
  display: none;
}

${se.modern} .chart-block {
  box-sizing: border-box;
}

/* The baseline placeholder is the browser default, which measured under
   4.5:1 on every dark surface. A derived ink clears it in both schemes. */
${se.modern} .input::placeholder {
  color: var(--_ink-3);
  opacity: 1;
}
`;var Ny=`
/* \u2500\u2500 Quiet \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
   The default. Its tokens are the token defaults; this is the little
   structure it adds on top: no bubble for the agent, hairlines, and a
   composer that sits on the panel rather than in a band. */

${se.quiet} .chat {
  font-feature-settings: "cv11", "ss01";
  letter-spacing: -0.003em;
  line-height: var(--_leading);
}

${se.quiet} .header {
  padding: 12px 14px 12px 18px;
}

${se.quiet} .header-title {
  font-size: var(--_text-md);
  font-weight: 600;
  letter-spacing: -0.01em;
}

${se.quiet} .header-btn {
  color: var(--_ink-3);
  border-radius: 8px;
}

${se.quiet} .header-btn:hover {
  color: var(--_fg);
  background: var(--_hover);
}

${se.quiet} .message--user {
  border-radius: var(--_msg-radius);
  padding: 8px 12px;
}

${se.quiet} .message--assistant {
  padding: 0;
  max-width: 100%;
}

${se.quiet} .message--assistant a {
  color: inherit;
  text-decoration: underline;
  text-decoration-color: var(--_line-strong);
  text-underline-offset: 3px;
}

${se.quiet} .thoughts-toggle {
  color: var(--_muted);
  font-size: var(--_text-sm);
}

${se.quiet} .input-row {
  border-top: 0;
  padding-top: 4px;
}

${se.quiet} .composer {
  border-color: var(--_line-strong);
  box-shadow: 0 1px 2px rgb(0 0 0 / 0.04);
}

${se.quiet} .composer:focus-within {
  border-color: var(--_ink-3);
  box-shadow: 0 0 0 3px var(--_wash);
}

${se.quiet} .send {
  border-radius: 9px;
}

${se.quiet} :is(.suggestion-chip, .skill-chip) {
  background: transparent;
  border: 1px solid var(--_line);
  color: var(--_ink-2);
  border-radius: 999px;
}

${se.quiet} :is(.suggestion-chip, .skill-chip):hover {
  background: var(--_hover);
  color: var(--_fg);
}

${se.quiet} .confirm {
  border: 1px solid var(--_line-strong);
  border-radius: var(--_radius);
  padding: 14px;
  gap: 12px;
  box-shadow: 0 1px 2px rgb(0 0 0 / 0.04);
}

${se.quiet} .confirm-btn {
  border-radius: 8px;
  padding: 7px 14px;
  font-weight: 500;
  font-size: var(--_text-sm);
  border-color: var(--_line-strong);
}

${se.quiet} .confirm-btn--confirm {
  border-color: var(--_accent);
  font-weight: 600;
}

${se.quiet} .launcher {
  border: 1px solid var(--_line-strong);
  box-shadow: 0 1px 2px rgb(0 0 0 / 0.06), 0 8px 24px -10px rgb(0 0 0 / 0.25);
}
`;var Oy=`
/* \u2500\u2500 Scheme \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
   Every theme declares its colours with light-dark, so the scheme is one
   property. Matched as a word, so dark works alone (the default theme,
   dark) and beside a theme name (soft dark). auto follows the operating
   system through color-scheme itself, with no media query to keep in step.
   code is a dark-only theme and has no light half. */
:host([theme~="dark"]),
:host([theme~="code"]) {
  color-scheme: dark;
}

:host([theme~="auto"]) {
  color-scheme: light dark;
}
`;var Py=`
/* \u2500\u2500 Soft \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
   Structure only; the tokens are in soft_tokens, set before the density
   presets. */

:host([theme~="soft"]) .chat {
  line-height: var(--_leading);
  background: var(--_bg);
}

:host([theme~="soft"]) .header {
  border-bottom-color: transparent;
  padding: 14px 16px 12px 20px;
}

:host([theme~="soft"]) .header-title {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  font-size: var(--_text-lg);
  font-weight: 600;
  letter-spacing: -0.015em;
}

:host([theme~="soft"]) .header-title::before {
  content: "";
  width: 22px;
  height: 22px;
  border-radius: 8px;
  background: linear-gradient(140deg, color-mix(in oklch, var(--_accent) 55%, var(--_bg)), var(--_accent));
}

:host([theme~="soft"]) .header-btn {
  color: var(--_ink-3);
  border-radius: 10px;
}

:host([theme~="soft"]) .header-btn:hover {
  background: var(--_tint-2);
  color: var(--_accent-ink);
}

:host([theme~="soft"]) .messages {
  background: linear-gradient(var(--_tint), var(--_bg) 120px);
}

:host([theme~="soft"]) .message--user {
  border-radius: var(--_msg-radius) var(--_msg-radius) 6px var(--_msg-radius);
  padding: 9px 14px;
}

:host([theme~="soft"]) .message--assistant {
  padding: 0 2px;
  max-width: 100%;
}

:host([theme~="soft"]) .message--assistant a {
  color: var(--_accent-ink);
}

/* The step group's row as a tinted pill. Unscoped to grouped mode: a card
   mode hides the row and drops the list's box, so neither reaches a
   flattened card. */
:host([theme~="soft"]) .tool-group-head {
  background: var(--_tint);
  border: 1px solid var(--_border);
  border-radius: 999px;
  padding: 5px 12px 5px 9px;
  margin-left: 0;
}

:host([theme~="soft"]) .tool-group-head:hover {
  background: var(--_tint-2);
}

:host([theme~="soft"]) .tool-group-list {
  border-left-color: var(--_tint-2);
  margin-left: 14px;
}

:host([theme~="soft"]) .chart-block {
  background: var(--_bg);
  border: 1px solid var(--_border);
  border-radius: var(--_radius);
  padding: 12px 14px;
}

:host([theme~="soft"]) .input-row {
  border-top: 0;
  padding-block: 6px 16px;
}

:host([theme~="soft"]) .composer {
  padding: 8px 8px 8px 14px;
  border-color: var(--_border);
  box-shadow: 0 6px 20px -10px color-mix(in oklch, var(--_accent) 35%, transparent);
}

:host([theme~="soft"]) .composer:focus-within {
  border-color: color-mix(in oklch, var(--_accent) 50%, var(--_bg));
  box-shadow: 0 0 0 4px var(--_tint-2);
}

:host([theme~="soft"]) .send {
  border-radius: 999px;
}

:host([theme~="soft"]) :is(.suggestion-chip, .skill-chip) {
  background: var(--_tint-2);
  border: 1px solid transparent;
  color: var(--_accent-ink);
  border-radius: 999px;
  font-weight: 500;
}

:host([theme~="soft"]) :is(.suggestion-chip, .skill-chip):hover {
  border-color: color-mix(in oklch, var(--_accent) 35%, var(--_bg));
}

:host([theme~="soft"]) .confirm {
  background: var(--_tint);
  border: 1px solid var(--_border);
  border-radius: 18px;
  padding: 16px;
  gap: 14px;
}

:host([theme~="soft"]) .confirm-btn {
  border-radius: 999px;
  padding: 8px 16px;
  font-weight: 500;
  background: var(--_bg);
  border-color: var(--_border);
}

:host([theme~="soft"]) .confirm-btn--confirm {
  background: var(--_accent);
  border-color: var(--_accent);
  color: var(--_on-accent);
  font-weight: 600;
}

:host([theme~="soft"]) .launcher {
  border: 0;
  box-shadow: 0 14px 30px -12px color-mix(in oklch, var(--_accent) 70%, transparent);
}
`;var My=`
/* \u2500\u2500 Soft \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
   Seeds, plus two surfaces mixed from the accent: a faint wash for the panel
   chrome and a stronger tint for the user's turns. */
:host([theme~="soft"]) {
  --_bg: var(--ag-ui-bg, light-dark(#fdfcff, #17161d));
  --_fg: var(--ag-ui-fg, light-dark(#1f1d2b, #ebe9f5));
  --_accent: var(--ag-ui-accent, light-dark(#6a4fd8, #a593ff));
  --_tint: var(--ag-ui-tint, color-mix(in oklch, var(--_accent) 5%, var(--_bg)));
  --_tint-2: var(--ag-ui-tint-2, color-mix(in oklch, var(--_accent) 13%, var(--_bg)));
  --_header-bg: var(--ag-ui-header-bg, var(--_tint));
  --_user-bg: var(--ag-ui-user-bg, var(--_tint-2));
  --_border: var(--ag-ui-border, color-mix(in oklch, var(--_accent) 14%, var(--_bg)));
  --_radius: var(--ag-ui-radius, 16px);
  --_frame-radius: var(--ag-ui-frame-radius, var(--ag-ui-radius, 24px));
  --_msg-radius: var(--ag-ui-msg-radius, 18px);
  --_composer-radius: var(--ag-ui-composer-radius, 22px);
  --_frame-shadow: var(--ag-ui-frame-shadow, 0 2px 6px light-dark(rgb(30 20 60 / 0.05), rgb(0 0 0 / 0.3)), 0 30px 60px -28px light-dark(color-mix(in oklch, var(--_accent) 45%, transparent), rgb(0 0 0 / 0.75)));
  --_launcher-size: var(--ag-ui-launcher-size, 56px);
  --_launcher-bg: var(--ag-ui-launcher-bg, var(--_accent));
  --_launcher-fg: var(--ag-ui-launcher-fg, var(--_on-accent));
  --_launcher-radius: var(--ag-ui-launcher-radius, 20px);
  --_launcher-icon-size: var(--ag-ui-launcher-icon-size, 24px);
  --_chart-1: var(--ag-ui-chart-1, var(--_accent));
  --_chart-2: var(--ag-ui-chart-2, color-mix(in oklch, var(--_accent) 38%, var(--_bg)));
}
`;var Ly=`
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
`;var zy=`
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
`;var Dy=`
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

/* Touch. Separate from the width breakpoint in the small-viewport placement
   rules on purpose: width decides the layout, the pointer decides which
   controls make sense, and a touch laptop is coarse-pointered and wide while a
   narrow desktop window is fine-pointered and small. */
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
`;var $y=`
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
`;var Uy=`
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
`;var Hy=[Sy,Ay,ky,My,Ry,Oy,_y,hy,py,gy,my,dy,uy,xy,cy,Uy,zy,$y,by,Ey,fy,ry,ny,ty,vy,Ly,sy,Dy,ay,ly,oy,iy,wy,Ty,Cy,Ny,Py,Iy].join("");function Fy(t,e=[]){let n=new CSSStyleSheet;return n.replaceSync(Hy),t.adoptedStyleSheets=[n,...e],n}function go(t,e,n){let r=document.createElement("button");r.type="button",r.className=`header-btn header-btn--${t}`,r.setAttribute("part",`header-button ${t}-button`),r.title=e,r.setAttribute("aria-label",e);let o=document.createElement("slot");return o.name=`icon-${t}`,o.append(document.createTextNode(n)),r.append(o),r}function fr(t,e,n,r){let o=document.createElement("span");o.className="icon-holder",o.setAttribute("part",e);let i=document.createElement("slot");if(i.name=t,r!==null){let a=document.createElement("img");a.className="icon-img",a.src=r,a.alt="",i.append(a)}else n!==null&&(i.innerHTML=n);return o.append(i),o}function Gy(t){let{strings:e}=t,n=document.createElement("div");n.className="header",n.setAttribute("part","header");let r=t.title;r.className="header-title",r.setAttribute("part","title"),r.textContent=t.titleText,(t.host.querySelector('[slot="icon"]')!==null||t.iconUrl!==null)&&n.append(fr("icon","icon",null,t.iconUrl));let o=document.createElement("slot");o.name="header-actions";let i=document.createElement("div");i.className="header-controls",i.setAttribute("part","header-controls");let a=go("history",e.chatHistory,"\u2630");a.addEventListener("click",t.onHistory);let s=go("checkpoints",e.checkpoints,"\u21BA");s.addEventListener("click",t.onCheckpoints);let c=go("new",e.newChat,"\u271A");c.addEventListener("click",t.onNewChat);let l=go("collapse",e.collapse,"\u2014");l.addEventListener("click",t.onCollapse),t.withCheckpoints?i.append(a,s,c):i.append(a,c);let u=t.themeToggle;return u!==null&&(u.type="button",u.className="header-btn header-btn--theme",u.setAttribute("part","header-button theme-toggle"),u.title=e.toggleTheme,u.setAttribute("aria-label",e.toggleTheme),u.addEventListener("click",t.onToggleTheme,{signal:t.signal}),i.append(u)),i.append(l),n.append(r,o,i),{header:n,checkpoints:s}}function By(t){let{launcher:e,badge:n,railLabel:r}=t;e.className="launcher",e.type="button",e.setAttribute("part","launcher"),e.setAttribute("aria-label",t.strings.expand),n.className="launcher-badge",n.setAttribute("part","launcher-badge"),n.setAttribute("aria-hidden","true"),n.hidden=!0,r.className="rail-label",r.setAttribute("part","rail-label"),r.setAttribute("aria-hidden","true"),r.textContent=t.titleText,e.replaceChildren(fr("launcher","launcher-icon",Lp,t.iconUrl),r,n),e.addEventListener("click",t.onOpen,{signal:t.signal})}function Zy(t){return t.getAttribute("data-unread-badge")!=="false"}function Vy(t){return t.getAttribute("data-launcher-icon-url")??t.getAttribute("data-icon-url")}var pk=new Set(["ADDRESS","ARTICLE","ASIDE","BLOCKQUOTE","DD","DIV","DL","DT","FIGCAPTION","FIGURE","FOOTER","H1","H2","H3","H4","H5","H6","HEADER","HR","MAIN","NAV","OL","P","SECTION","UL"]);function Rs(t){let e=t.cloneNode(!0);for(let n of Array.from(e.querySelectorAll("button")))n.remove();return{text:mk(jy(e)),html:e.innerHTML}}function jy(t){if(t.nodeType===Node.TEXT_NODE)return t.nodeValue.replace(/\s+/g," ");if(t.nodeType!==Node.ELEMENT_NODE)return"";let e=t,n=e.tagName;if(n==="BR")return`
`;if(n==="PRE")return`

${qy(e)}

`;if(n==="TABLE")return`

${fk(e)}

`;if(n==="UL"||n==="OL")return`

${hk(e,n==="OL")}

`;let r=Wy(e);return pk.has(n)?`

${r}

`:r}function Wy(t){let e="";for(let n of Array.from(t.childNodes))e+=jy(n);return e}function hk(t,e){return Array.from(t.children).map((n,r)=>`${e?`${r+1}. `:"- "}${Wy(n).trim()}`).join(`
`)}function fk(t){return Array.from(t.querySelectorAll("tr")).map(e=>Array.from(e.children).map(n=>qy(n).replace(/\s+/g," ").trim()).join("	")).join(`
`)}function qy(t){return t.textContent}function mk(t){return t.replace(/[^\S\n]+\n/g,`
`).replace(/\n{3,}/g,`

`).trim()}var gk=1500;function bd(t,e){if(Ky(t)!==null)return;let n=Cs(t,e.strings),r=e.text;r!==void 0&&n.appendChild(vk(e.strings,r,e.html)),e.onFeedback!==void 0&&n.append(Yy("up",e.strings.feedbackUp,e.onFeedback),Yy("down",e.strings.feedbackDown,e.onFeedback))}function Cs(t,e){let n=Ky(t);if(n!==null)return n;let r=document.createElement("div");return r.className="message-actions",r.setAttribute("part","message-actions"),r.setAttribute("role","group"),r.setAttribute("aria-label",e.messageActions),t.after(r),r}function Ky(t){let e=t.nextElementSibling;return e?.classList.contains("message-actions")===!0?e:null}function Ns(t,e,n){let r=document.createElement("button");r.type="button",r.className=`message-action message-action--${t}`,r.setAttribute("part",`message-action message-action-${t}`),vd(r,e);let o=document.createElement("span");return o.className="message-action-icon",o.setAttribute("part",`message-action-icon message-action-icon-${t}`),o.setAttribute("aria-hidden","true"),o.innerHTML=n,r.appendChild(o),r}function vd(t,e){t.title=e,t.setAttribute("aria-label",e),t.dataset.tooltip=e}function vk(t,e,n){let r=Ns("copy",t.copyMessage,zp);return r.addEventListener("click",()=>{bk(e(),n?.()).then(o=>{yk(r,o?t.copied:t.copyFailed,t.copyMessage)})}),r}async function bk(t,e){let n=navigator.clipboard;if(n===void 0)return!1;if(e!==void 0&&typeof ClipboardItem=="function")try{return await n.write([new ClipboardItem({"text/plain":new Blob([t],{type:"text/plain"}),"text/html":new Blob([e],{type:"text/html"})})]),!0}catch{}try{return await n.writeText(t),!0}catch{return!1}}function Yy(t,e,n){let r=Ns(t==="up"?"up":"down",e,t==="up"?$p:Up);return r.addEventListener("click",()=>{let o=r.getAttribute("aria-pressed")==="true";r.setAttribute("aria-pressed",o?"false":"true"),n(t)}),r.setAttribute("aria-pressed","false"),r}function yk(t,e,n){vd(t,e),t.classList.add("message-action--confirmed"),setTimeout(()=>{vd(t,n),t.classList.remove("message-action--confirmed")},gk)}var Os=class{#e;#t=null;constructor(e){this.#e=e}forget(){this.#t=null}attach(e,n){let r=this.#o(),o=r.has(rn.COPY),i="messageId"in n?n:null,a=i!==null&&r.has(rn.FEEDBACK),s=this.#e.threadId();(o||a)&&bd(e,{strings:this.#e.strings(),...o?{text:()=>Rs(e).text,html:()=>Rs(e).html}:{},...a?{onFeedback:c=>{this.#e.element.dispatchEvent(new CustomEvent(Pl,{detail:{content:Rs(e).text,rating:c,messageId:i.messageId,threadId:s,...i.runId===void 0?{}:{runId:i.runId}},bubbles:!0,composed:!0}))}}:{}}),r.has(rn.RETRY)&&this.#n(Cs(e,this.#e.strings()))}#n(e){this.#t?.querySelector(".message-action--retry")?.remove();let n=Ns("retry",this.#e.strings().retryMessage,Dp);n.addEventListener("click",()=>{this.#e.retry()}),e.prepend(n),this.#t=e}#o(){let e=this.#e.element.getAttribute("data-message-actions");return e===null?new Set([rn.COPY,rn.RETRY]):new Set(pr(e))}};function wk(t,e){this.v=t,this.k=e}function Xy(t,e){(e==null||e>t.length)&&(e=t.length);for(var n=0,r=Array(e);n<e;n++)r[n]=t[n];return r}function Ek(t){if(Array.isArray(t))return t}function xk(t,e){var n=t==null?null:typeof Symbol<"u"&&t[Symbol.iterator]||t["@@iterator"];if(n!=null){var r,o,i,a,s=[],c=!0,l=!1;try{if(i=(n=n.call(t)).next,e===0){if(Object(n)!==n)return;c=!1}else for(;!(c=(r=i.call(n)).done)&&(s.push(r.value),s.length!==e);c=!0);}catch(u){l=!0,o=u}finally{try{if(!c&&n.return!=null&&(a=n.return(),Object(a)!==a))return}finally{if(l)throw o}}return s}}function _k(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Sk(t,e){return Ek(t)||xk(t,e)||Tk(t,e)||_k()}function Tk(t,e){if(t){if(typeof t=="string")return Xy(t,e);var n={}.toString.call(t).slice(8,-1);return n==="Object"&&t.constructor&&(n=t.constructor.name),n==="Map"||n==="Set"?Array.from(t):n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?Xy(t,e):void 0}}function Ps(t){var e,n;function r(i,a){try{var s=t[i](a),c=s.value,l=c instanceof wk;Promise.resolve(l?c.v:c).then(function(u){if(l){var f=i==="return"&&c.k?i:"next";if(!c.k||u.done)return r(f,u);u=t[f](u).value}o(!!s.done,u)},function(u){r("throw",u)})}catch(u){o(2,u)}}function o(i,a){i===2?e.reject(a):e.resolve({value:a,done:i}),(e=e.next)?r(e.key,e.arg):n=null}this._invoke=function(i,a){return new Promise(function(s,c){var l={key:i,arg:a,resolve:s,reject:c,next:null};n?n=n.next=l:(e=n=l,r(i,a))})},typeof t.return!="function"&&(this.return=void 0)}Ps.prototype[typeof Symbol=="function"&&Symbol.asyncIterator||"@@asyncIterator"]=function(){return this},Ps.prototype.next=function(t){return this._invoke("next",t)},Ps.prototype.throw=function(t){return this._invoke("throw",t)},Ps.prototype.return=function(t){return this._invoke("return",t)};var pw=Object.entries,Jy=Object.setPrototypeOf,Ak=Object.isFrozen,hw=Object.getPrototypeOf,fw=Object.getOwnPropertyDescriptor,Le=Object.freeze,Ge=Object.seal,mr=Object.create,mw=typeof Reflect<"u"&&Reflect,Id=mw.apply,Rd=mw.construct;Le||(Le=function(e){return e});Ge||(Ge=function(e){return e});Id||(Id=function(e,n){for(var r=arguments.length,o=new Array(r>2?r-2:0),i=2;i<r;i++)o[i-2]=arguments[i];return e.apply(n,o)});Rd||(Rd=function(e){for(var n=arguments.length,r=new Array(n>1?n-1:0),o=1;o<n;o++)r[o-1]=arguments[o];return new e(...r)});var zt=Te(Array.prototype.forEach);Array.prototype.indexOf;var kk=Te(Array.prototype.lastIndexOf),Qy=Te(Array.prototype.pop),vo=Te(Array.prototype.push),Ik=Te(Array.prototype.slice),Rk=Te(Array.prototype.splice),gr=Array.isArray,yd=gw(Set),wd=Te(Set.prototype.add),bo=Te(Set.prototype.has),Cn=Te(String.prototype.toLowerCase),Ed=Te(String.prototype.toString),ew=Te(String.prototype.match),yo=Te(String.prototype.replace),tw=Te(String.prototype.indexOf),Ck=Te(String.prototype.trim),Nk=Te(Number.prototype.toString),Ok=Te(Boolean.prototype.toString),nw=typeof BigInt>"u"?null:Te(BigInt.prototype.toString),rw=typeof Symbol>"u"?null:Te(Symbol.prototype.toString),Ke=Te(Object.prototype.hasOwnProperty),wo=Te(Object.prototype.toString),Fe=Te(RegExp.prototype.test),Dt=gw(TypeError);function Te(t){return function(e){e instanceof RegExp&&(e.lastIndex=0);for(var n=arguments.length,r=new Array(n>1?n-1:0),o=1;o<n;o++)r[o-1]=arguments[o];return Id(t,e,r)}}function gw(t){return function(){for(var e=arguments.length,n=new Array(e),r=0;r<e;r++)n[r]=arguments[r];return Rd(t,n)}}function ie(t,e){let n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:Cn;if(Jy&&Jy(t,null),!gr(e))return t;let r=e.length;for(;r--;){let o=e[r];if(typeof o=="string"){let i=n(o);i!==o&&(Ak(e)||(e[r]=i),o=i)}t[o]=!0}return t}function Pk(t){for(let e=0;e<t.length;e++)Ke(t,e)||(t[e]=null);return t}function tt(t){let e=mr(null);for(let r of pw(t)){var n=Sk(r,2);let o=n[0],i=n[1];Ke(t,o)&&(gr(i)?e[o]=Pk(i):i&&typeof i=="object"&&i.constructor===Object?e[o]=tt(i):e[o]=i)}return e}function Mk(t){switch(typeof t){case"string":return t;case"number":return Nk(t);case"boolean":return Ok(t);case"bigint":return nw?nw(t):"0";case"symbol":return rw?rw(t):"Symbol()";case"undefined":return wo(t);case"function":case"object":{if(t===null)return wo(t);let e=t,n=at(e,"toString");if(typeof n=="function"){let r=n(e);return typeof r=="string"?r:wo(r)}return wo(t)}default:return wo(t)}}function at(t,e){for(;t!==null;){let r=fw(t,e);if(r){if(r.get)return Te(r.get);if(typeof r.value=="function")return Te(r.value)}t=hw(t)}function n(){return null}return n}function Lk(t,e){for(;t!==null;){let n=fw(t,e);if(n)return n.get?Te(n.get):null;t=hw(t)}return null}function zk(t){try{return Fe(t,""),!0}catch{return!1}}var ow=Le(["a","abbr","acronym","address","area","article","aside","audio","b","bdi","bdo","big","blink","blockquote","body","br","button","canvas","caption","center","cite","code","col","colgroup","content","data","datalist","dd","decorator","del","details","dfn","dialog","dir","div","dl","dt","element","em","fieldset","figcaption","figure","font","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","img","input","ins","kbd","label","legend","li","main","map","mark","marquee","menu","menuitem","meter","nav","nobr","ol","optgroup","option","output","p","picture","pre","progress","q","rp","rt","ruby","s","samp","search","section","select","shadow","slot","small","source","spacer","span","strike","strong","style","sub","summary","sup","table","tbody","td","template","textarea","tfoot","th","thead","time","tr","track","tt","u","ul","var","video","wbr"]),xd=Le(["svg","a","altglyph","altglyphdef","altglyphitem","animatecolor","animatemotion","animatetransform","circle","clippath","defs","desc","ellipse","enterkeyhint","exportparts","filter","font","g","glyph","glyphref","hkern","image","inputmode","line","lineargradient","marker","mask","metadata","mpath","part","path","pattern","polygon","polyline","radialgradient","rect","stop","style","switch","symbol","text","textpath","title","tref","tspan","view","vkern"]),_d=Le(["feBlend","feColorMatrix","feComponentTransfer","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feDistantLight","feDropShadow","feFlood","feFuncA","feFuncB","feFuncG","feFuncR","feGaussianBlur","feImage","feMerge","feMergeNode","feMorphology","feOffset","fePointLight","feSpecularLighting","feSpotLight","feTile","feTurbulence"]),Dk=Le(["animate","color-profile","cursor","discard","font-face","font-face-format","font-face-name","font-face-src","font-face-uri","foreignobject","hatch","hatchpath","mesh","meshgradient","meshpatch","meshrow","missing-glyph","script","set","solidcolor","unknown","use"]),Sd=Le(["math","menclose","merror","mfenced","mfrac","mglyph","mi","mlabeledtr","mmultiscripts","mn","mo","mover","mpadded","mphantom","mroot","mrow","ms","mspace","msqrt","mstyle","msub","msup","msubsup","mtable","mtd","mtext","mtr","munder","munderover","mprescripts"]),$k=Le(["maction","maligngroup","malignmark","mlongdiv","mscarries","mscarry","msgroup","mstack","msline","msrow","semantics","annotation","annotation-xml","mprescripts","none"]),iw=Le(["#text"]),aw=Le(["accept","action","align","alt","autocapitalize","autocomplete","autopictureinpicture","autoplay","background","bgcolor","border","capture","cellpadding","cellspacing","checked","cite","class","clear","color","cols","colspan","command","commandfor","controls","controlslist","coords","crossorigin","datetime","decoding","default","dir","disabled","disablepictureinpicture","disableremoteplayback","download","draggable","enctype","enterkeyhint","exportparts","face","for","headers","height","hidden","high","href","hreflang","id","inert","inputmode","integrity","ismap","kind","label","lang","list","loading","loop","low","max","maxlength","media","method","min","minlength","multiple","muted","name","nonce","noshade","novalidate","nowrap","open","optimum","part","pattern","placeholder","playsinline","popover","popovertarget","popovertargetaction","poster","preload","pubdate","radiogroup","readonly","rel","required","rev","reversed","role","rows","rowspan","spellcheck","scope","selected","shape","size","sizes","slot","span","srclang","start","src","srcset","step","style","summary","tabindex","title","translate","type","usemap","valign","value","width","wrap","xmlns"]),Td=Le(["accent-height","accumulate","additive","alignment-baseline","amplitude","ascent","attributename","attributetype","azimuth","basefrequency","baseline-shift","begin","bias","by","class","clip","clippathunits","clip-path","clip-rule","color","color-interpolation","color-interpolation-filters","color-profile","color-rendering","cx","cy","d","dx","dy","diffuseconstant","direction","display","divisor","dominant-baseline","dur","edgemode","elevation","end","exponent","fill","fill-opacity","fill-rule","filter","filterunits","flood-color","flood-opacity","font-family","font-size","font-size-adjust","font-stretch","font-style","font-variant","font-weight","fx","fy","g1","g2","glyph-name","glyphref","gradientunits","gradienttransform","height","href","id","image-rendering","in","in2","intercept","k","k1","k2","k3","k4","kerning","keypoints","keysplines","keytimes","lang","lengthadjust","letter-spacing","kernelmatrix","kernelunitlength","lighting-color","local","marker-end","marker-mid","marker-start","markerheight","markerunits","markerwidth","maskcontentunits","maskunits","max","mask","mask-type","media","method","mode","min","name","numoctaves","offset","operator","opacity","order","orient","orientation","origin","overflow","paint-order","path","pathlength","patterncontentunits","patterntransform","patternunits","pointer-events","points","preservealpha","preserveaspectratio","primitiveunits","r","rx","ry","radius","refx","refy","repeatcount","repeatdur","restart","result","rotate","scale","seed","shape-rendering","slope","specularconstant","specularexponent","spreadmethod","startoffset","stddeviation","stitchtiles","stop-color","stop-opacity","stroke-dasharray","stroke-dashoffset","stroke-linecap","stroke-linejoin","stroke-miterlimit","stroke-opacity","stroke","stroke-width","style","surfacescale","systemlanguage","tabindex","tablevalues","targetx","targety","transform","transform-origin","text-anchor","text-decoration","text-orientation","text-rendering","textlength","type","u1","u2","unicode","values","vector-effect","viewbox","visibility","version","vert-adv-y","vert-origin-x","vert-origin-y","width","word-spacing","wrap","writing-mode","xchannelselector","ychannelselector","x","x1","x2","xmlns","y","y1","y2","z","zoomandpan"]),sw=Le(["accent","accentunder","align","bevelled","close","columnalign","columnlines","columnspacing","columnspan","denomalign","depth","dir","display","displaystyle","encoding","fence","frame","height","href","id","largeop","length","linethickness","lquote","lspace","mathbackground","mathcolor","mathsize","mathvariant","maxsize","minsize","movablelimits","notation","numalign","open","rowalign","rowlines","rowspacing","rowspan","rspace","rquote","scriptlevel","scriptminsize","scriptsizemultiplier","selection","separator","separators","stretchy","subscriptshift","supscriptshift","symmetric","voffset","width","xmlns"]),Ms=Le(["xlink:href","xml:id","xlink:title","xml:space","xmlns:xlink"]),Uk=Ge(/{{[\w\W]*|^[\w\W]*}}/g),Hk=Ge(/<%[\w\W]*|^[\w\W]*%>/g),Fk=Ge(/\${[\w\W]*/g),Gk=Ge(/^data-[\-\w.\u00B7-\uFFFF]+$/),Bk=Ge(/^aria-[\-\w]+$/),lw=Ge(/^(?:(?:(?:f|ht)tps?|mailto|tel|callto|sms|cid|xmpp|matrix):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i),Zk=Ge(/^(?:\w+script|data):/i),Vk=Ge(/[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g),jk=Ge(/^html$/i),Wk=Ge(/^[a-z][.\w]*(-[.\w]+)+$/i),Ad=Ge(/<[/\w!]/g),cw=Ge(/<[/\w]/g),qk=Ge(/<\/no(script|embed|frames)/i),uw=Ge(/\/>/i),Ce={element:1,attribute:2,text:3,cdataSection:4,entityReference:5,entityNode:6,processingInstruction:7,comment:8,document:9,documentType:10,documentFragment:11,notation:12},Yk=Le(ie({},["style","script","xmp","iframe","noembed","noframes","plaintext","noscript"])),Kk=function(){return typeof window>"u"?null:window},Xk=function(e,n){if(typeof e!="object"||typeof e.createPolicy!="function")return null;let r=null,o="data-tt-policy-suffix";n&&n.hasAttribute(o)&&(r=n.getAttribute(o));let i="dompurify"+(r?"#"+r:"");try{return e.createPolicy(i,{createHTML(a){return a},createScriptURL(a){return a}})}catch{return console.warn("TrustedTypes policy "+i+" could not be created."),null}},dw=function(){return{afterSanitizeAttributes:[],afterSanitizeElements:[],afterSanitizeShadowDOM:[],beforeSanitizeAttributes:[],beforeSanitizeElements:[],beforeSanitizeShadowDOM:[],uponSanitizeAttribute:[],uponSanitizeElement:[],uponSanitizeShadowNode:[]}},Xt=function(e,n,r,o){return Ke(e,n)&&gr(e[n])?ie(o.base?tt(o.base):{},e[n],o.transform):r},kd=function(e,n,r){let o=Ke(e,n)?e[n]:void 0;return o&&typeof o=="object"?tt(o):r()};function vw(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:Kk(),e=P=>vw(P);if(e.version="3.4.17",e.removed=[],!t||!t.document||t.document.nodeType!==Ce.document||!t.Element)return e.isSupported=!1,e;let n=t.document,r=n,o=r.currentScript;t.DocumentFragment;let i=t.HTMLTemplateElement,a=t.Node,s=t.Element,c=t.NodeFilter;t.NamedNodeMap===void 0&&(t.NamedNodeMap||t.MozNamedAttrMap),t.HTMLFormElement;let l=t.DOMParser,u=t.trustedTypes,f=s.prototype,m=at(f,"cloneNode"),p=at(f,"remove"),h=at(f,"removeAttributeNode"),x=at(f,"nextSibling"),g=at(f,"childNodes"),w=at(f,"parentNode"),b=at(f,"shadowRoot"),k=at(f,"attributes"),O=a&&a.prototype?at(a.prototype,"nodeType"):null,E=a&&a.prototype?at(a.prototype,"nodeName"):null,S=a&&a.prototype?at(a.prototype,"ownerDocument"):null,_=function(d){return O?O(d):d.nodeType},I=function(d){return E?E(d):d.nodeName},L=Lk(f,"namespaceURI"),Y=function(d){return L?L(d):d.namespaceURI};if(typeof i=="function"){let P=n.createElement("template");P.content&&P.content.ownerDocument&&(n=P.content.ownerDocument)}let X,Ne="",Qs,Kd=!1,wr=0,Xd=function(){if(wr>0)throw Dt('A configured TRUSTED_TYPES_POLICY callback (createHTML or createScriptURL) must not call DOMPurify.sanitize, as that causes infinite recursion. Do not pass a policy whose callbacks wrap DOMPurify as TRUSTED_TYPES_POLICY; see the "DOMPurify and Trusted Types" section of the README.')},Ln=function(d){Xd(),wr++;try{return X.createHTML(d)}finally{wr--}},sE=function(d){Xd(),wr++;try{return X.createScriptURL(d)}finally{wr--}},lE=function(){return Kd||(Qs=Xk(u,o),Kd=!0),Qs},Po=n,el=Po.implementation,Jd=Po.createNodeIterator,cE=Po.createDocumentFragment,uE=Po.getElementsByTagName,dE=r.importNode,ge=dw();e.isSupported=typeof pw=="function"&&typeof w=="function"&&el&&el.createHTMLDocument!==void 0;let pE=Uk,hE=Hk,fE=Fk,mE=Gk,gE=Bk,vE=Zk,Qd=Vk,bE=Wk,ep=lw,ye=null,tl=ie({},[...ow,...xd,..._d,...Sd,...iw]),we=null,nl=ie({},[...aw,...Td,...sw,...Ms]),gt=Object.seal(mr(null,{tagNameCheck:{writable:!0,configurable:!1,enumerable:!0,value:null},attributeNameCheck:{writable:!0,configurable:!1,enumerable:!0,value:null},allowCustomizedBuiltInElements:{writable:!0,configurable:!1,enumerable:!0,value:!1}})),Er=null,tp=null,$t=Object.seal(mr(null,{tagCheck:{writable:!0,configurable:!1,enumerable:!0,value:null},attributeCheck:{writable:!0,configurable:!1,enumerable:!0,value:null}})),np=!0,rl=!0,rp=!1,ol=!0,Rt=!1,Qt=!0,en=!1,il=!1,Mo=null,Lo=null,al=!1,zn=!1,zo=!1,Do=!1,op=!0,ip=!1,ap="user-content-",sl=!0,ll=!1,tn=null,Dn={},nn=null,sp=ie({},["annotation-xml","audio","colgroup","desc","foreignobject","head","iframe","math","mi","mn","mo","ms","mtext","noembed","noframes","noscript","plaintext","script","selectedcontent","style","svg","template","thead","title","video","xmp"]),lp=null,cp=ie({},["audio","video","img","source","image","track"]),up=null,dp=ie({},["alt","class","for","id","label","name","pattern","placeholder","role","summary","title","value","style","xmlns"]),$o="http://www.w3.org/1998/Math/MathML",Uo="http://www.w3.org/2000/svg",vt="http://www.w3.org/1999/xhtml",$n=vt,cl=!1,ul=null,yE=ie({},[$o,Uo,vt],Ed),pp=Le(["mi","mo","mn","ms","mtext"]),dl=ie({},pp),hp=Le(["annotation-xml"]),pl=ie({},hp),wE=ie({},["title","style","font","a","script"]),xr=null,EE=["application/xhtml+xml","text/html"],xE="text/html",ke=null,Un=null,_E=n.createElement("form"),fp=function(d){return d instanceof RegExp||d instanceof Function},hl=function(){let d=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};if(Un&&Un===d)return;(!d||typeof d!="object")&&(d={}),d=tt(d),xr=EE.indexOf(d.PARSER_MEDIA_TYPE)===-1?xE:d.PARSER_MEDIA_TYPE,ke=xr==="application/xhtml+xml"?Ed:Cn,ye=Xt(d,"ALLOWED_TAGS",tl,{transform:ke}),we=Xt(d,"ALLOWED_ATTR",nl,{transform:ke}),ul=Xt(d,"ALLOWED_NAMESPACES",yE,{transform:Ed}),up=Xt(d,"ADD_URI_SAFE_ATTR",dp,{transform:ke,base:dp}),lp=Xt(d,"ADD_DATA_URI_TAGS",cp,{transform:ke,base:cp}),nn=Xt(d,"FORBID_CONTENTS",sp,{transform:ke}),Er=Xt(d,"FORBID_TAGS",tt({}),{transform:ke}),tp=Xt(d,"FORBID_ATTR",tt({}),{transform:ke}),Dn=Ke(d,"USE_PROFILES")?d.USE_PROFILES&&typeof d.USE_PROFILES=="object"?tt(d.USE_PROFILES):d.USE_PROFILES:!1,np=d.ALLOW_ARIA_ATTR!==!1,rl=d.ALLOW_DATA_ATTR!==!1,rp=d.ALLOW_UNKNOWN_PROTOCOLS||!1,ol=d.ALLOW_SELF_CLOSE_IN_ATTR!==!1,Rt=d.SAFE_FOR_TEMPLATES||!1,Qt=d.SAFE_FOR_XML!==!1,en=d.WHOLE_DOCUMENT||!1,zn=d.RETURN_DOM||!1,zo=d.RETURN_DOM_FRAGMENT||!1,Do=d.RETURN_TRUSTED_TYPE||!1,al=d.FORCE_BODY||!1,op=d.SANITIZE_DOM!==!1,ip=d.SANITIZE_NAMED_PROPS||!1,sl=d.KEEP_CONTENT!==!1,ll=d.IN_PLACE||!1,ep=zk(d.ALLOWED_URI_REGEXP)?d.ALLOWED_URI_REGEXP:lw,$n=typeof d.NAMESPACE=="string"?d.NAMESPACE:vt,dl=kd(d,"MATHML_TEXT_INTEGRATION_POINTS",()=>ie({},pp)),pl=kd(d,"HTML_INTEGRATION_POINTS",()=>ie({},hp));let y=kd(d,"CUSTOM_ELEMENT_HANDLING",()=>mr(null));if(gt=mr(null),Ke(y,"tagNameCheck")&&fp(y.tagNameCheck)&&(gt.tagNameCheck=y.tagNameCheck),Ke(y,"attributeNameCheck")&&fp(y.attributeNameCheck)&&(gt.attributeNameCheck=y.attributeNameCheck),Ke(y,"allowCustomizedBuiltInElements")&&typeof y.allowCustomizedBuiltInElements=="boolean"&&(gt.allowCustomizedBuiltInElements=y.allowCustomizedBuiltInElements),Ge(gt),Rt&&(rl=!1),zo&&(zn=!0),Dn&&(ye=ie({},iw),we=mr(null),Dn.html===!0&&(ie(ye,ow),ie(we,aw)),Dn.svg===!0&&(ie(ye,xd),ie(we,Td),ie(we,Ms)),Dn.svgFilters===!0&&(ie(ye,_d),ie(we,Td),ie(we,Ms)),Dn.mathMl===!0&&(ie(ye,Sd),ie(we,sw),ie(we,Ms))),$t.tagCheck=null,$t.attributeCheck=null,Ke(d,"ADD_TAGS")&&(typeof d.ADD_TAGS=="function"?$t.tagCheck=d.ADD_TAGS:gr(d.ADD_TAGS)&&(ye===tl&&(ye=tt(ye)),ie(ye,d.ADD_TAGS,ke))),Ke(d,"ADD_ATTR")&&(typeof d.ADD_ATTR=="function"?$t.attributeCheck=d.ADD_ATTR:gr(d.ADD_ATTR)&&(we===nl&&(we=tt(we)),ie(we,d.ADD_ATTR,ke))),Ke(d,"ADD_FORBID_CONTENTS")&&gr(d.ADD_FORBID_CONTENTS)&&(nn===sp&&(nn=tt(nn)),ie(nn,d.ADD_FORBID_CONTENTS,ke)),sl&&(ye["#text"]=!0),en&&ie(ye,["html","head","body"]),ye.table&&(ie(ye,["tbody"]),delete Er.tbody),d.TRUSTED_TYPES_POLICY){if(typeof d.TRUSTED_TYPES_POLICY.createHTML!="function")throw Dt('TRUSTED_TYPES_POLICY configuration option must provide a "createHTML" hook.');if(typeof d.TRUSTED_TYPES_POLICY.createScriptURL!="function")throw Dt('TRUSTED_TYPES_POLICY configuration option must provide a "createScriptURL" hook.');let C=X;X=d.TRUSTED_TYPES_POLICY;try{Ne=Ln("")}catch(N){throw X=C,N}}else d.TRUSTED_TYPES_POLICY===null?(X=void 0,Ne=""):(X===void 0&&(X=lE()),X&&typeof Ne=="string"&&(Ne=Ln("")));Le&&Le(d),Un=d},mp=ie({},[...xd,..._d,...Dk]),gp=ie({},[...Sd,...$k]),SE=function(d,y,C){return y.namespaceURI===vt?d==="svg":y.namespaceURI===$o?d==="svg"&&(C==="annotation-xml"||dl[C]):!!mp[d]},TE=function(d,y,C){return y.namespaceURI===vt?d==="math":y.namespaceURI===Uo?d==="math"&&pl[C]:!!gp[d]},AE=function(d,y,C){return y.namespaceURI===Uo&&!pl[C]||y.namespaceURI===$o&&!dl[C]?!1:!gp[d]&&(wE[d]||!mp[d])},kE=function(d){let y=Y(d),C=Cn(I(d)),N=w(d),H,Z;return N&&_(N)===Ce.element?(H={namespaceURI:Y(N)},Z=Cn(I(N))):(H={namespaceURI:$n},Z="template"),ul[y]?y===Uo?SE(C,H,Z):y===$o?TE(C,H,Z):y===vt?AE(C,H,Z):!!(xr==="application/xhtml+xml"&&ul[y]):!1},Ut=function(d){vo(e.removed,{element:d});try{w(d).removeChild(d)}catch{if(p(d),!w(d))throw Dt("a node selected for removal could not be detached from its tree and cannot be safely returned; refusing to sanitize in place")}},vp=function(d,y,C){try{h(d,y)}catch{try{d.removeAttribute(C)}catch{}}},fl=function(d){gl(d);let y=g(d);y&&zt(Ik(y),N=>{try{p(N)}catch{}});let C=_(d)===Ce.element?k(d):null;if(C)for(let N=C.length-1;N>=0;--N){let H=C[N],Z=H&&H.name;typeof Z=="string"&&vp(d,H,Z)}},Hn=function(d,y,C){if(!C)try{C=y.getAttributeNode(d)}catch{C=null}vo(e.removed,{attribute:C||null,from:y});try{C?h(y,C):y.removeAttribute(d)}catch{try{y.removeAttribute(d)}catch{}}if(d==="is")if(zn||zo)try{Ut(y)}catch{}else try{y.setAttribute(d,"")}catch{}},bp=function(d){let y=k(d);if(y)for(let C=y.length-1;C>=0;--C){let N=y[C],H=N&&N.name;typeof H!="string"||we[ke(H)]||vp(d,N,H)}},ml=function(d,y){let C=arguments.length>2&&arguments[2]!==void 0?arguments[2]:!1,N=[d];for(;N.length>0;){let H=N.pop();if(y(H)===!1)continue;if(C&&_(H)===Ce.element){let J=b(H);Ht(J)&&N.push(J)}let Z=g(H);if(Z)for(let J=Z.length-1;J>=0;--J)N.push(Z[J])}},gl=function(d){ml(d,y=>{_(y)===Ce.element&&bp(y)})},vl=function(d){let y=[];return ml(d,C=>{y.push(C)},!0),y},IE=function(d,y){let C=yd();zt(vl(d),N=>{_(N)===Ce.element&&wd(C,N)}),zt(y,N=>{_(N)===Ce.element&&!bo(C,N)&&bp(N)})},yp=function(d,y){let C=!1;return zt(e.removed,N=>{N.element&&(C=C||N.element===d,gl(N.element))}),IE(d,y),C},RE=8,CE=function(d,y){let C=tn,N=null,H=()=>(N||(N=yd(),zt(y,Z=>{wd(N,Z)})),N);for(let Z=0;;Z++){let J=vl(d),Oe=[d],bt=!1;if(zt(J,Ze=>{_(Ze)===Ce.documentFragment?vo(Oe,Ze):!bt&&!bo(C,Ze)&&(bt=bo(H(),Ze))}),!bt)return;if(Z>=RE)throw Dt("the tree kept changing during in-place sanitization; refusing to return it");zt(Oe,(Ze,qe)=>{NE(Ze,qe>0,d,H())})}},NE=function(d,y,C,N){let H=bl(d),Z;for(;Z=H.nextNode();)!bo(N,Z)||bo(tn,Z)||(y&&st(ge.uponSanitizeShadowNode,Z,null),wl(Z,C),El(Z,C),Ht(Z.content)&&Sr(Z.content))},OE=function(d){tn&&wd(tn,d)},wp=function(d,y){return Qt?d==="patchsrc"?!0:d==="for"&&y!=="label"&&y!=="output":!1},PE=function(d){Qt&&ml(d,y=>{let C=_(y);if(C===Ce.processingInstruction||C===Ce.comment&&Fe(cw,y.data)){try{p(y)}catch{}return!1}if(C===Ce.element){let N=y,H=ke(I(y));try{N.hasAttribute&&N.hasAttribute("patchsrc")&&N.removeAttribute("patchsrc"),N.hasAttribute&&N.hasAttribute("for")&&wp("for",H)&&N.removeAttribute("for")}catch{}}return!0})},Ep=function(d){let y=null,C=null;if(al)d="<remove></remove>"+d;else{let Z=ew(d,/^[\r\n\t ]+/);C=Z&&Z[0]}xr==="application/xhtml+xml"&&$n===vt&&(d='<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>'+d+"</body></html>");let N=X?Ln(d):d;if($n===vt)try{y=new l().parseFromString(N,xr)}catch{}if(!y||!y.documentElement){y=el.createDocument($n,"template",null);try{y.documentElement.innerHTML=cl?Ne:N}catch{}}let H=y.body||y.documentElement;return d&&C&&H.insertBefore(n.createTextNode(C),H.childNodes[0]||null),$n===vt?uE.call(y,en?"html":"body")[0]:en?y.documentElement:H},bl=function(d){let y=S?S(d):d.ownerDocument;return Jd.call(y||d,d,c.SHOW_ELEMENT|c.SHOW_COMMENT|c.SHOW_TEXT|c.SHOW_PROCESSING_INSTRUCTION|c.SHOW_CDATA_SECTION,null)},Ho=function(d){return d=yo(d,pE," "),d=yo(d,hE," "),d=yo(d,fE," "),d},yl=function(d){var y;xp(d);let C=(y=d.querySelectorAll)===null||y===void 0?void 0:y.call(d,"template");C&&zt(C,N=>{Ht(N.content)&&yl(N.content)})},xp=function(d){d.normalize();let y=S?S(d):d.ownerDocument,C=Jd.call(y||d,d,c.SHOW_TEXT|c.SHOW_COMMENT|c.SHOW_CDATA_SECTION|c.SHOW_PROCESSING_INSTRUCTION,null),N=C.nextNode();for(;N;)N.data=Ho(N.data),N=C.nextNode()},Fo=function(d){let y=E?E(d):null;return typeof y!="string"||ke(y)!=="form"?!1:typeof d.nodeName!="string"||typeof d.textContent!="string"||typeof d.removeChild!="function"||d.attributes!==k(d)||typeof d.removeAttribute!="function"||typeof d.removeAttributeNode!="function"||typeof d.getAttributeNode!="function"||typeof d.setAttribute!="function"||typeof d.namespaceURI!="string"||typeof d.insertBefore!="function"||typeof d.hasChildNodes!="function"||d.nodeType!==O(d)||d.childNodes!==g(d)},Ht=function(d){if(!O||typeof d!="object"||d===null)return!1;try{return O(d)===Ce.documentFragment}catch{return!1}},_r=function(d){if(!O||typeof d!="object"||d===null)return!1;try{return typeof O(d)=="number"}catch{return!1}};function st(P,d,y){P.length!==0&&zt(P,C=>{C.call(e,d,y,Un)})}let ME=function(d,y){return!!(Qt&&d.hasChildNodes()&&!_r(d.firstElementChild)&&Fe(Ad,d.textContent)&&Fe(Ad,d.innerHTML)||Qt&&Yk[y]&&_(d)===Ce.element&&Y(d)===vt&&(_r(d.firstElementChild)||typeof d.textContent=="string"&&Fe(Ad,d.textContent))||d.nodeType===Ce.processingInstruction||Qt&&d.nodeType===Ce.comment&&Fe(cw,d.data))},Go=function(d,y){if(d instanceof RegExp)return Fe(d,y);if(d instanceof Function){for(var C=arguments.length,N=new Array(C>2?C-2:0),H=2;H<C;H++)N[H-2]=arguments[H];return!!d(y,...N)}return!1},LE=function(d,y,C){if(!Er[y]&&Tp(y)&&Go(gt.tagNameCheck,y))return!1;if(sl&&!nn[y]&&!nn[Cn(y)]){let N=w(d),H=g(d);if(H&&N){let Z=H.length;for(let J=Z-1;J>=0;--J){let Oe=d===C?m(H[J],!0):H[J];N.insertBefore(Oe,x(d))}}}return Ut(d),!0},_p=function(d,y,C,N){return d.length===0?y:y===C||y===N?tt(y):y},Fn=function(d,y){return d===y||w(d)!==null?!1:(ll&&gl(d),!0)},wl=function(d,y){if(OE(d),st(ge.beforeSanitizeElements,d,null),Fn(d,y))return!0;if(Fo(d))return Ut(d),!0;let C=ke(I(d));if(ye=_p(ge.uponSanitizeElement,ye,tl,Mo),st(ge.uponSanitizeElement,d,{tagName:C,allowedTags:ye}),Fn(d,y))return!0;if(ME(d,C))return Ut(d),!0;if(Er[C]||!($t.tagCheck instanceof Function&&$t.tagCheck(C))&&!ye[C]){let N=LE(d,C,y);return N===!1&&(st(ge.afterSanitizeElements,d,null),Fn(d,y))?!0:N}if(_(d)===Ce.element&&!kE(d)||(C==="noscript"||C==="noembed"||C==="noframes")&&Fe(qk,d.innerHTML))return Ut(d),!0;if(Rt&&d.nodeType===Ce.text){let N=Ho(d.textContent);d.textContent!==N&&(vo(e.removed,{element:d.cloneNode()}),d.textContent=N)}return st(ge.afterSanitizeElements,d,null),Fn(d,y)},Sp=function(d,y,C){if(tp[y]||wp(y,d)||op&&(y==="id"||y==="name")&&(C in n||C in _E))return!1;let N=we[y]||$t.attributeCheck instanceof Function&&$t.attributeCheck(y,d);return rl&&Fe(mE,y)||np&&Fe(gE,y)?!0:N?up[y]||Fe(ep,yo(C,Qd,""))||(y==="src"||y==="xlink:href"||y==="href")&&d!=="script"&&tw(C,"data:")===0&&lp[d]||rp&&!Fe(vE,yo(C,Qd,""))?!0:!C:Tp(d)&&Go(gt.tagNameCheck,d)&&Go(gt.attributeNameCheck,y,d)||y==="is"&&gt.allowCustomizedBuiltInElements&&Go(gt.tagNameCheck,C)},zE=ie({},["annotation-xml","color-profile","font-face","font-face-format","font-face-name","font-face-src","font-face-uri","missing-glyph"]),Tp=function(d){return!zE[Cn(d)]&&Fe(bE,d)},DE=function(d,y,C,N){if(X&&typeof u=="object"&&typeof u.getAttributeType=="function"&&!C)switch(u.getAttributeType(d,y)){case"TrustedHTML":return Ln(N);case"TrustedScriptURL":return sE(N)}return N},$E=function(d,y,C,N){try{return C?d.setAttributeNS(C,y,N):d.setAttribute(y,N),Fo(d)?(Ut(d),!1):!0}catch{return Hn(y,d),!1}},Ap=function(d,y){return Qt&&Fe(/((--!?|])>)|<\/(style|script|title|xmp|textarea|noscript|iframe|noembed|noframes)/i,y)?!0:Cn(d)==="attributename"&&ew(y,"href")!==null},El=function(d,y){if(st(ge.beforeSanitizeAttributes,d,null),Fn(d,y))return;let C=d.attributes;if(!C||Fo(d))return;we=_p(ge.uponSanitizeAttribute,we,nl,Lo);let N={attrName:"",attrValue:"",keepAttr:!0,allowedAttributes:we,forceKeepAttr:void 0},H=C.length,Z=ke(d.nodeName);for(;H--;){let J=C[H],Oe=J.name,bt=J.namespaceURI,Ze=J.value,qe=ke(Oe),Gn=Ze,Ye=Oe==="value"?Gn:Ck(Gn),kp=!1;if(N.attrName=qe,N.attrValue=Ye,N.keepAttr=!0,N.forceKeepAttr=void 0,st(ge.uponSanitizeAttribute,d,N),Ye=N.attrValue,ip&&(qe==="id"||qe==="name")&&tw(Ye,ap)!==0&&(Hn(Oe,d,J),Ye=ap+Ye,kp=!0),Ap(Oe,Ye)){Hn(Oe,d,J);continue}if(!N.forceKeepAttr){if(!N.keepAttr){Hn(Oe,d,J);continue}if(!ol&&Fe(uw,Ye)){Hn(Oe,d,J);continue}if(Rt&&(Ye=Ho(Ye)),!Sp(Z,qe,Ye)){Hn(Oe,d,J);continue}Ye=DE(Z,qe,bt,Ye),Ye!==Gn&&$E(d,Oe,bt,Ye)&&kp&&Qy(e.removed)}}st(ge.afterSanitizeAttributes,d,null),Fn(d,y)},Sr=function(d){let y=null,C=bl(d);for(st(ge.beforeSanitizeShadowDOM,d,null);y=C.nextNode();)if(st(ge.uponSanitizeShadowNode,y,null),wl(y,d),El(y,d),Ht(y.content)&&Sr(y.content),_(y)===Ce.element){let N=b(y);Ht(N)&&(xl(N),Sr(N))}Rt&&xp(d),st(ge.afterSanitizeShadowDOM,d,null)},xl=function(d){let y=[{node:d,shadow:null}];for(;y.length>0;){let C=y.pop();if(C.shadow){Sr(C.shadow);continue}let N=C.node,H=_(N)===Ce.element,Z=g(N);if(Z)for(let J=Z.length-1;J>=0;--J)y.push({node:Z[J],shadow:null});if(H){let J=E?E(N):null;if(typeof J=="string"&&ke(J)==="template"){let Oe=N.content;Ht(Oe)&&y.push({node:Oe,shadow:null})}}if(H){let J=b(N);Ht(J)&&y.push({node:null,shadow:J},{node:J,shadow:null})}}};return e.sanitize=function(P){let d=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},y=null,C=null,N=null,H=null;if(cl=!P,cl&&(P="<!-->"),typeof P!="string"&&!_r(P)&&(P=Mk(P),typeof P!="string"))throw Dt("dirty is not a string, aborting");if(!e.isSupported)return P;il?(ye=Mo,we=Lo):hl(d),(ge.uponSanitizeElement.length>0||ge.uponSanitizeAttribute.length>0)&&(ye=tt(ye)),ge.uponSanitizeAttribute.length>0&&(we=tt(we)),e.removed=[];let Z=ll&&typeof P!="string"&&_r(P),J=[],Oe=tn;if(Z){PE(P);let qe=I(P);if(typeof qe=="string"){let Gn=ke(qe);if(!ye[Gn]||Er[Gn])throw fl(P),Dt("root node is forbidden and cannot be sanitized in-place")}if(Fo(P))throw fl(P),Dt("root node is clobbered and cannot be sanitized in-place");J=vl(P),tn=yd()}else if(_r(P))y=Ep("<!---->"),C=y.ownerDocument.importNode(P,!0),C.nodeType===Ce.element&&C.nodeName==="BODY"||C.nodeName==="HTML"?y=C:y.appendChild(C),xl(y);else{if(!zn&&!Rt&&!en&&P.indexOf("<")===-1)return X&&Do?Ln(P):P;if(y=Ep(P),!y)return zn?null:Do?Ne:""}y&&al&&Ut(y.firstChild);let bt=Z?P:y;try{Z&&xl(P);let qe=bl(bt);for(;N=qe.nextNode();)wl(N,bt),El(N,bt),Ht(N.content)&&Sr(N.content);Z&&CE(P,J)}catch(qe){throw Z&&(fl(P),yp(P,J)),qe}finally{tn=Oe}if(Z){if(yp(P,J))throw Dt("a node selected for removal could not be safely returned; refusing to sanitize in place");return Rt&&yl(P),P}if(zn){if(Rt&&yl(y),zo)for(H=cE.call(y.ownerDocument);y.firstChild;)H.appendChild(y.firstChild);else H=y;return(we.shadowroot||we.shadowrootmode)&&(H=dE.call(r,H,!0)),H}let Ze=en?y.outerHTML:y.innerHTML;return en&&ye["!doctype"]&&y.ownerDocument&&y.ownerDocument.doctype&&y.ownerDocument.doctype.name&&Fe(jk,y.ownerDocument.doctype.name)&&(Ze="<!DOCTYPE "+y.ownerDocument.doctype.name+`>
`+Ze),Rt&&(Ze=Ho(Ze)),X&&Do?Ln(Ze):Ze},e.setConfig=function(){let P=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};hl(P),il=!0,Mo=ye,Lo=we},e.clearConfig=function(){Un=null,il=!1,Mo=null,Lo=null,X=Qs,Ne=""},e.isValidAttribute=function(P,d,y){Un||hl({});let C=ke(P),N=ke(d);return typeof y=="string"&&(Ap(d,y)||!ol&&Fe(uw,y))?!1:Sp(C,N,y)},e.addHook=function(P,d){typeof d=="function"&&Ke(ge,P)&&vo(ge[P],d)},e.removeHook=function(P,d){if(Ke(ge,P)){if(d!==void 0){let y=kk(ge[P],d);return y===-1?void 0:Rk(ge[P],y,1)[0]}return Qy(ge[P])}},e.removeHooks=function(P){Ke(ge,P)&&(ge[P]=[])},e.removeAllHooks=function(){ge=dw()},e}var bw=vw();function Md(){return{async:!1,breaks:!1,extensions:null,gfm:!0,hooks:null,pedantic:!1,renderer:null,silent:!1,tokenizer:null,walkTokens:null}}var Mn=Md();function Rw(t){Mn=t}var On={exec:()=>null};function vr(t){let e=[];return n=>{let r=Math.max(0,Math.min(3,n-1)),o=e[r];return o||(o=t(r),e[r]=o),o}}function q(t,e=""){let n=typeof t=="string"?t:t.source,r={replace:(o,i)=>{let a=typeof i=="string"?i:i.source;return a=a.replace(ze.caret,"$1"),n=n.replace(o,a),r},getRegex:()=>new RegExp(n,e)};return r}var Jk=((t="")=>{try{return!!new RegExp("(?<=1)(?<!1)"+t)}catch{return!1}})(),ze={codeRemoveIndent:/^(?: {0,3}\t| {1,4})/gm,outputLinkReplace:/\\([\[\]])/g,indentCodeCompensation:/^(\s+)(?:```)/,beginningSpace:/^\s+/,endingHash:/#$/,startingSpaceChar:/^ /,endingSpaceChar:/ $/,endingSpaceTabChar:/[ \t]$/,nonSpaceChar:/[^ ]/,newLineCharGlobal:/\n/g,tabCharGlobal:/\t/g,leadingSpaceTab:/^[ \t]+/,multipleSpaceGlobal:/\s+/g,blankLine:/^[ \t]*$/,doubleBlankLine:/\n[ \t]*\n[ \t]*$/,blockquoteStart:/^ {0,3}>/,blockquoteSetextReplace:/\n {0,3}((?:=+|-+) *)(?=\n|$)/g,blockquoteSetextReplace2:/^ {0,3}>[ \t]?/gm,listReplaceNesting:/^ {1,4}(?=( {4})*[^ ])/g,listIsTask:/^\[[ xX]\] +\S/,listReplaceTask:/^\[[ xX]\] +/,listTaskCheckbox:/\[[ xX]\]/,anyLine:/\n.*\n/,hrefBrackets:/^<(.*)>$/,tableDelimiter:/[:|]/,tableAlignChars:/^\||\| *$/g,tableRowBlankLine:/\n[ \t]*$/,tableAlignRight:/^ *-+: *$/,tableAlignCenter:/^ *:-+: *$/,tableAlignLeft:/^ *:-+ *$/,startATag:/^<a /i,endATag:/^<\/a>/i,startPreScriptTag:/^<(pre|code|kbd|script)(\s|>)/i,endPreScriptTag:/^<\/(pre|code|kbd|script)(\s|>)/i,startAngleBracket:/^</,endAngleBracket:/>$/,pedanticHrefTitle:/^([^'"]*[^\s])\s+(['"])(.*)\2/,unicodeAlphaNumeric:/[\p{L}\p{N}]/u,numericCharacterReference:/&#(?:(\d{1,7})|[Xx]([A-Fa-f0-9]{1,6}));/,numericCharacterReferenceOrAmpersand:/&#(?:(\d{1,7})|[Xx]([A-Fa-f0-9]{1,6}));|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/g,escapeTest:/[&<>"']/,escapeReplace:/[&<>"']/g,escapeTestNoEncode:/[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/,escapeReplaceNoEncode:/[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/g,caret:/(^|[^\[])\^/g,percentDecode:/%25/g,findPipe:/\|/g,splitPipe:/ \|/,slashPipe:/\\\|/g,carriageReturn:/\r\n|\r/g,spaceLine:/^ +$/gm,notSpaceStart:/^\S*/,endingNewline:/\n$/,listItemRegex:t=>new RegExp(`^( {0,3}${t})((?:[	 ][^\\n]*)?(?:\\n|$))`),nextBulletRegex:vr(t=>new RegExp(`^ {0,${t}}(?:[*+-]|\\d{1,9}[.)])((?:[ 	][^\\n]*)?(?:\\n|$))`)),hrRegex:vr(t=>new RegExp(`^ {0,${t}}((?:-[ 	]*){3,}|(?:_[ 	]*){3,}|(?:\\*[ 	]*){3,})(?:\\n+|$)`)),fencesBeginRegex:vr(t=>new RegExp(`^ {0,${t}}(?:\`\`\`|~~~)`)),headingBeginRegex:vr(t=>new RegExp(`^ {0,${t}}#`)),htmlBeginRegex:vr(t=>new RegExp(`^ {0,${t}}(?:</?(?:${So})(?: +|$|/?>)|<(?:(?:script|pre|style|textarea)(?:[\\s>]|$)|!--)|<\\?|<![A-Za-z]|<!\\[CDATA\\[)`,"i")),blockquoteBeginRegex:vr(t=>new RegExp(`^ {0,${t}}>`))},Qk=/^(?:[ \t]*(?:\n|$))+/,eI=/^((?: {4}| {0,3}\t)[^\n]+(?:\n(?:[ \t]*(?:\n|$))*)?)+/,tI=/^ {0,3}(`{3,}(?=[^`\n]*(?:\n|$))|~{3,})([^\n]*)(?:\n|$)(?:|([\s\S]*?)(?:\n|$))(?: {0,3}\1[~`]* *(?=\n|$)|$)/,_o=/^ {0,3}((?:-[\t ]*){3,}|(?:_[ \t]*){3,}|(?:\*[ \t]*){3,})(?:\n+|$)/,nI=/^ {0,3}(#{1,6})(?=\s|$)(.*)(?:\n+|$)/,Ld=/ {0,3}(?:[*+-]|\d{1,9}[.)])/,Cw=/^(?!bull |blockCode|fences|blockquote|heading|html|table)((?:.|\n(?!\s*?\n|bull |fences|blockquote|heading|hr|html|table))+?)\n {0,3}(=+|-+) *(?:\n+|$)/,Nw=q(Cw).replace(/bull/g,Ld).replace(/blockCode/g,/(?: {4}| {0,3}\t)/).replace(/fences/g,/ {0,3}(?:`{3,}|~{3,})/).replace(/blockquote/g,/ {0,3}>/).replace(/heading/g,/ {0,3}#{1,6}(?:\s|$)/).replace(/hr/g,/ {0,3}(?:(?:-[\t ]*){3,}|(?:_[ \t]*){3,}|(?:\*[ \t]*){3,})(?:\n+|$)/).replace(/html/g,/ {0,3}<[^\n>]+>\n/).replace(/\|table/g,"").getRegex(),rI=q(Cw).replace(/bull/g,Ld).replace(/blockCode/g,/(?: {4}| {0,3}\t)/).replace(/fences/g,/ {0,3}(?:`{3,}|~{3,})/).replace(/blockquote/g,/ {0,3}>/).replace(/heading/g,/ {0,3}#{1,6}(?:\s|$)/).replace(/hr/g,/ {0,3}(?:(?:-[\t ]*){3,}|(?:_[ \t]*){3,}|(?:\*[ \t]*){3,})(?:\n+|$)/).replace(/html/g,/ {0,3}<[^\n>]+>\n/).replace(/table/g,/ {0,3}\|?(?:[:\- ]*\|)+[\:\- ]*\n/).getRegex(),zd=/^([^\n]+(?:\n(?!hr|heading|lheading|blockquote|fences|list|html|table|[ \t]+\n)[^\n]+)*)/,oI=/^[^\n]+/,Dd=/(?!\s*\])(?:\\[\s\S]|[^\[\]\\])+/,iI=q(/^ {0,3}\[(label)\]: *(?:\n[ \t]*)?([^<\s][^\s]*|<.*?>)(?:(?: +(?:\n[ \t]*)?| *\n[ \t]*)(title))? *(?:\n+|$)/).replace("label",Dd).replace("title",/(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/).getRegex(),aI=q(/^(bull)([ \t][^\n]*?)?(?:\n|$)/).replace(/bull/g,Ld).getRegex(),So="address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option|p|param|search|section|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul",$d=/<!--(?:-?>|[\s\S]*?(?:-->|$))/,sI=q("^ {0,3}(?:<(script|pre|style|textarea)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n*|$)|comment[^\\n]*(\\n+|$)|<\\?[\\s\\S]*?(?:\\?>[^\\n]*\\n*|$)|<![A-Z][\\s\\S]*?(?:>[^\\n]*\\n*|$)|<!\\[CDATA\\[[\\s\\S]*?(?:\\]\\]>[^\\n]*\\n*|$)|</?(tag)(?: +|\\n|/?>)[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$)|<(?!(?:script|pre|style|textarea)(?![a-z0-9-]))([a-z][a-z0-9-]*)(?:attribute)*? */?>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$)|</[a-z][a-z0-9-]*\\s*>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$))","i").replace("comment",$d).replace("tag",So).replace("attribute",/ +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/).getRegex(),Ow=t=>q(zd).replace("hr",_o).replace("heading"," {0,3}#{1,6}(?:\\s|$)").replace("|lheading","").replace("|table","").replace("blockquote"," {0,3}>").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*(?:\\n|$))|~~~)[^\\n]*(?:\\n|$)").replace("list",t).replace("html"," {0,3}(?:</?(?:tag)(?: +|\\n|/?>)|<(?:(?:script|pre|style|textarea)(?:[\\s>]|$)|!--)|<\\?|<![A-Za-z]|<!\\[CDATA\\[)").replace("tag",So).getRegex(),lI=Ow(/ {0,3}(?:[*+-]|1[.)])[ \t]+[^ \t\n]/),cI=Ow(/ {0,3}(?:[*+-]|\d{1,9}[.)])(?:[ \t]|\n|$)/),uI=q(/^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/).replace("paragraph",cI).getRegex(),Ud={blockquote:uI,code:eI,def:iI,fences:tI,heading:nI,hr:_o,html:sI,lheading:Nw,list:aI,newline:Qk,paragraph:lI,table:On,text:oI},yw=q("^ *([^\\n ].*)\\n {0,3}((?:\\| *)?:?-+:? *(?:\\| *:?-+:? *)*(?:\\| *)?)(?:\\n((?:(?! *\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)").replace("hr",_o).replace("heading"," {0,3}#{1,6}(?:\\s|$)").replace("blockquote"," {0,3}>").replace("code","(?: {4}| {0,3}	)[^\\n]").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*(?:\\n|$))|~~~)[^\\n]*(?:\\n|$)").replace("list"," {0,3}(?:[*+-]|1[.)])[ \\t]").replace("html"," {0,3}(?:</?(?:tag)(?: +|\\n|/?>)|<(?:(?:script|pre|style|textarea)(?:[\\s>]|$)|!--)|<\\?|<![A-Za-z]|<!\\[CDATA\\[)").replace("tag",So).getRegex(),dI={...Ud,lheading:rI,table:yw,paragraph:q(zd).replace("hr",_o).replace("heading"," {0,3}#{1,6}(?:\\s|$)").replace("|lheading","").replace("table",yw).replace("blockquote"," {0,3}>").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*(?:\\n|$))|~~~)[^\\n]*(?:\\n|$)").replace("list"," {0,3}(?:[*+-]|1[.)])[ \\t]+[^ \\t\\n]").replace("html"," {0,3}(?:</?(?:tag)(?: +|\\n|/?>)|<(?:(?:script|pre|style|textarea)(?:[\\s>]|$)|!--)|<\\?|<![A-Za-z]|<!\\[CDATA\\[)").replace("tag",So).getRegex()},pI={...Ud,html:q(`^ *(?:comment *(?:\\n|\\s*$)|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)|<tag(?:"[^"]*"|'[^']*'|\\s[^'"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))`).replace("comment",$d).replace(/tag/g,"(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:|[^\\w\\s@]*@)\\b").getRegex(),def:/^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/,heading:/^(#{1,6})(.*)(?:\n+|$)/,fences:On,lheading:/^(.+?)\n {0,3}(=+|-+) *(?:\n+|$)/,paragraph:q(zd).replace("hr",_o).replace("heading",` *#{1,6} *[^
]`).replace("lheading",Nw).replace("|table","").replace("blockquote"," {0,3}>").replace("|fences","").replace("|list","").replace("|html","").replace("|tag","").getRegex()},hI=/^\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/,fI=/^(`+)([^`]|[^`][\s\S]*?[^`])\1(?!`)/,Pw=/^( {2,}|\\)\n(?!\s*$)[ \t]*/,mI=/^(`+|[^`])(?:(?= {2,}\n)|[\s\S]*?(?:(?=[\\<!\[`*_]|\b_|$)|[^ ](?= {2,}\n)))/,It=/[\p{P}\p{S}]/u,br=/[\s\p{P}\p{S}]/u,To=/[^\s\p{P}\p{S}]/u,gI=q(/^((?![*_])punctSpace)/,"u").replace(/punctSpace/g,br).getRegex(),vI=/[\p{Pi}\p{Ps}"']/u,Mw=/(?!~)[\p{P}\p{S}]/u,bI=/(?!~)[\s\p{P}\p{S}]/u,yI=/(?:[^\s\p{P}\p{S}]|~)/u,wI=q(/link|precode-code|html/,"g").replace("link",/\[(?:[^\[\]`]|(?<a>`+)[^`]+\k<a>(?!`))*?\]\((?:\\[\s\S]|[^\\\(\)]|\((?:\\[\s\S]|[^\\\(\)])*\))*\)/).replace("precode-",Jk?"(?<!`)()":"(^^|[^`])").replace("code",/(?<b>`+)[^`]+\k<b>(?!`)/).replace("html",/<(?! )[^<>]*?>/).getRegex(),Lw=/^(?:\*+(?:((?!\*)punct)|([^\s*]))?)|^_+(?:((?!_)punct)|([^\s_]))?/,EI=q(Lw,"u").replace(/punct/g,It).getRegex(),xI=q(Lw,"u").replace(/punct/g,Mw).getRegex(),_I=/^(?:\*+(?:((?!\*)(?!openQuote)punct)|([^\s*]))?)|^_+(?:((?!_)(?!openQuote)punct)|([^\s_]))?/,SI=q(_I,"u").replace(/openQuote/g,vI).replace(/punct/g,It).getRegex(),zw="^[^_*]*?__[^_*]*?\\*[^_*]*?(?=__)|[^*]+(?=[^*])|(?!\\*)punct(\\*+)(?=[\\s]|$)|notPunctSpace(\\*+)(?!\\*)(?=punctSpace|$)|(?!\\*)punctSpace(\\*+)(?=notPunctSpace)|[\\s](\\*+)(?!\\*)(?=punct)|(?!\\*)punct(\\*+)(?!\\*)(?=punct)|notPunctSpace(\\*+)(?=notPunctSpace)",TI=q(zw,"gu").replace(/notPunctSpace/g,To).replace(/punctSpace/g,br).replace(/punct/g,It).getRegex(),AI=q(zw,"gu").replace(/notPunctSpace/g,yI).replace(/punctSpace/g,bI).replace(/punct/g,Mw).getRegex(),kI="^[^_*]*?__[^_*]*?\\*[^_*]*?(?=__)|[^*]+(?=[^*])|(?!\\*)punct(\\*+)(?=[\\s]|$)|notPunctSpace(\\*+)(?!\\*)(?=punctSpace|$)|(?!\\*)[\\s](\\*+)(?=notPunctSpace)|[\\s](\\*+)(?!\\*)(?=punct)|(?!\\*)punct(\\*+)(?!\\*)(?=punct)|(?:(?!\\*)punct|notPunctSpace)(\\*+)(?!\\*)(?=notPunctSpace)",II=q(kI,"gu").replace(/notPunctSpace/g,To).replace(/punctSpace/g,br).replace(/punct/g,It).getRegex(),RI=q("^[^_*]*?\\*\\*[^_*]*?_[^_*]*?(?=\\*\\*)|[^_]+(?=[^_])|(?!_)punct(_+)(?=[\\s]|$)|notPunctSpace(_+)(?!_)(?=punctSpace|$)|(?!_)punctSpace(_+)(?=notPunctSpace)|[\\s](_+)(?!_)(?=punct)|(?!_)punct(_+)(?!_)(?=punct)","gu").replace(/notPunctSpace/g,To).replace(/punctSpace/g,br).replace(/punct/g,It).getRegex(),CI="^[^_*]*?\\*\\*[^_*]*?_[^_*]*?(?=\\*\\*)|[^_]+(?=[^_])|(?!_)punct(_+)(?=[\\s]|$)|notPunctSpace(_+)(?!_)(?=punctSpace|$)|(?!_)[\\s](_+)(?=notPunctSpace)|[\\s](_+)(?!_)(?=punct)|(?!_)punct(_+)(?!_)(?=punct)|(?:(?!_)punct|notPunctSpace)(_+)(?!_)(?=notPunctSpace)",NI=q(CI,"gu").replace(/notPunctSpace/g,To).replace(/punctSpace/g,br).replace(/punct/g,It).getRegex(),OI=q(/^~~?(?:((?!~)punct)|[^\s~])/,"u").replace(/punct/g,It).getRegex(),PI="^[^~]+(?=[^~])|(?!~)punct(~~?)(?=[\\s]|$)|notPunctSpace(~~?)(?!~)(?=punctSpace|$)|(?!~)punctSpace(~~?)(?=notPunctSpace)|[\\s](~~?)(?!~)(?=punct)|(?!~)punct(~~?)(?!~)(?=punct)|notPunctSpace(~~?)(?=notPunctSpace)",MI=q(PI,"gu").replace(/notPunctSpace/g,To).replace(/punctSpace/g,br).replace(/punct/g,It).getRegex(),LI=q(/\\(punct)/,"gu").replace(/punct/g,It).getRegex(),zI=q(/(`+)(?:[^`]|[^`][\s\S]*?[^`])\1(?!`)|`+|\\(punct)/,"gu").replace(/punct/g,It).getRegex(),DI=q(/^<(scheme:[^\s\x00-\x1f<>]*|email)>/).replace("scheme",/[a-zA-Z][a-zA-Z0-9+.-]{1,31}/).replace("email",/[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/).getRegex(),$I=q($d).replace("(?:-->|$)","-->").getRegex(),UI=q("^comment|^</[a-zA-Z][a-zA-Z0-9-]*\\s*>|^<[a-zA-Z][a-zA-Z0-9-]*(?:attribute)*?\\s*/?>|^<\\?[\\s\\S]*?\\?>|^<![a-zA-Z]+\\s[\\s\\S]*?>|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>").replace("comment",$I).replace("attribute",/\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/).getRegex(),Dw=/\[(?:\\[\s\S]|[^\[\]\\])*\]/,zs=q(/(?:\[(?:brackets|\\[\s\S]|[^\[\]\\])*\]|\\[\s\S]|`+(?!`)[^`]*?`+(?!`)|``+(?=\])|[^\[\]\\`])*?/).replace("brackets",Dw).getRegex(),HI=q(/^!?\[(label)\]\([ \t\n]*(href)(?:(?:[ \t]+(?:\n[ \t]*)?|\n[ \t]*)(title))?[ \t\n]*\)/).replace("label",zs).replace("href",/<(?:\\.|[^\n<>\\])+>|[^ \t\n\x00-\x1f]+|(?=\))/).replace("title",/"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/).getRegex(),FI=q(/^!?\[(label)\]\[(ref)\]/).replace("label",zs).replace("ref",Dd).getRegex(),GI=q(/^!?\[(ref)\](?:\[\])?/).replace("ref",Dd).getRegex(),ww=/(?!\s*\])(?:\\[\s\S]|[^\[\]\\]){1,999}/,BI=q(/(?:[^\[\]\\`]*(?:\[(?:brackets|\\[\s\S]|[^\[\]\\])*\]|\\[\s\S]|`+(?!`)[^`]*?`+(?!`)|``+(?=\]))){0,999}?[^\[\]\\`]*?/).replace("brackets",Dw).getRegex(),ZI=q("reflink|nolink(?!\\()","g").replace("reflink",q(/^!?\[(label)\]\[(ref)\]/).replace("label",BI).replace("ref",ww).getRegex()).replace("nolink",q(/^!?\[(ref)\](?:\[\])?/).replace("ref",ww).getRegex()).getRegex(),Ew=/[hH][tT][tT][pP][sS]?|[fF][tT][pP]/,VI=/[A-Za-z0-9._+-]+@[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![\w-])/,jI=q(/(?:mailto:email|xmpp:email(?:\/[A-Za-z0-9@.]+)?)/).replace(/email/g,VI).getRegex(),Hd={_backpedal:On,anyPunctuation:LI,anyPunctuationOutsideCode:zI,autolink:DI,blockSkip:wI,br:Pw,code:fI,del:On,delLDelim:On,delRDelim:On,emStrongLDelim:EI,emStrongRDelimAst:TI,emStrongRDelimUnd:RI,escape:hI,link:HI,nolink:GI,punctuation:gI,reflink:FI,reflinkSearch:ZI,tag:UI,text:mI,url:On},WI={...Hd,emStrongLDelim:SI,emStrongRDelimAst:II,emStrongRDelimUnd:NI,link:q(/^!?\[(label)\]\((.*?)\)/).replace("label",zs).getRegex(),reflink:q(/^!?\[(label)\]\s*\[([^\]]*)\]/).replace("label",zs).getRegex()},Nd={...Hd,emStrongRDelimAst:AI,emStrongLDelim:xI,delLDelim:OI,delRDelim:MI,url:q(/^emailProtocol|^((?:protocol):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/).replace("emailProtocol",jI).replace("protocol",Ew).replace("email",/[A-Za-z0-9._+-]+(@)[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![\w-])/).getRegex(),_backpedal:/(?:[^?!.,:;*_'"~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_'"~)]+(?!$))+/,del:/^(~~?)(?=[^\s~])((?:\\[\s\S]|[^\\])*?(?:\\[\s\S]|[^\s~\\]))\1(?=[^~]|$)/,text:q(/^(?:[^a-zA-Z0-9](?=emailProtocol)|(`+|~+|[^`~])(?:(?=[`~])|(?= {2,}\n)|(?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)|[\s\S]*?(?:(?=[\\<!\[`*~_]|\b_|protocol:\/\/|www\.|$)|[^ ](?= {2,}\n)|[^a-zA-Z0-9](?=emailProtocol)|[^a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-](?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@))))/).replace("protocol",Ew).replace(/emailProtocol/g,/(?:mailto|xmpp):/).getRegex()},qI={...Nd,br:q(Pw).replace("{2,}","*").getRegex(),text:q(Nd.text).replace("\\b_","\\b_| {2,}\\n").replace(/\{2,\}/g,"*").getRegex()},Ls={normal:Ud,gfm:dI,pedantic:pI},Eo={normal:Hd,gfm:Nd,breaks:qI,pedantic:WI},YI={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"},xw=t=>YI[t];function nt(t,e){if(e){if(ze.escapeTest.test(t))return t.replace(ze.escapeReplace,xw)}else if(ze.escapeTestNoEncode.test(t))return t.replace(ze.escapeReplaceNoEncode,xw);return t}function KI(t){return ze.numericCharacterReference.test(t)?t.replace(ze.numericCharacterReferenceOrAmpersand,(e,n,r)=>{if(n===void 0&&r===void 0)return"&amp;";let o=n===void 0?Number.parseInt(r,16):Number.parseInt(n,10);return o===0||o>1114111||o>=55296&&o<=57343?"\uFFFD":o===38?"&amp;":String.fromCodePoint(o)}):t}function _w(t){try{t=encodeURI(t).replace(ze.percentDecode,"%")}catch{return null}return t}function Sw(t,e){let n=t.replace(ze.findPipe,(i,a,s)=>{let c=!1,l=a;for(;--l>=0&&s[l]==="\\";)c=!c;return c?"|":" |"}),r=n.split(ze.splitPipe),o=0;if(r[0].trim()||r.shift(),r.length>0&&!r.at(-1)?.trim()&&r.pop(),e)if(r.length>e)r.splice(e);else for(;r.length<e;)r.push("");for(;o<r.length;o++)r[o]=r[o].trim().replace(ze.slashPipe,"|");return r}function Jt(t,e,n){let r=t.length;if(r===0)return"";let o=0;for(;o<r;){let i=t.charAt(r-o-1);if(i===e&&!n)o++;else if(i!==e&&n)o++;else break}return t.slice(0,r-o)}function Tw(t){let e=t.split(`
`),n=e.length-1;for(;n>=0&&ze.blankLine.test(e[n]);)n--;return e.length-n<=2?t:e.slice(0,n+1).join(`
`)}function Ds(t){return t.trim().toLowerCase().toUpperCase().toLowerCase()}function Aw(t,e){if(t.indexOf(e[0])===-1&&t.indexOf(e[1])===-1)return-1;let n=0;for(let r=0;r<t.length;r++)if(t[r]==="\\")r++;else if(t[r]===e[0])n++;else if(t[r]===e[1]&&(n--,n<0))return r;return n>0?-2:-1}function Cd(t,e=0){let n=e,r="";for(let o of t)if(o==="	"){let i=4-n%4;r+=" ".repeat(i),n+=i}else r+=o,n++;return r}function kw(t,e,n,r,o){let i=e.href,a=e.title||null,s=t[1].replace(o.other.outputLinkReplace,"$1"),c=t[0].charAt(0)==="!",l=r.state.inLink,u=r.state.linkEmitted,f=r.state.inRawBlock;r.state.inLink=!0,r.state.linkEmitted=!1;let m=r.inlineTokens(s),p=r.state.linkEmitted;if(r.state.linkEmitted=u,r.state.inLink=l,!c){if(p){r.state.inRawBlock=f;return}r.state.linkEmitted=!0}return{type:c?"image":"link",raw:n,href:i,title:a,text:s,tokens:m}}function XI(t,e,n){let r=t.match(n.other.indentCodeCompensation);if(r===null)return e;let o=r[1];return e.split(`
`).map(i=>{let a=i.match(n.other.beginningSpace);if(a===null)return i;let[s]=a;return i.slice(Math.min(s.length,o.length))}).join(`
`)}function Iw(t,e,n,r){if(!e.includes("<"))return!1;for(let o=0;o<e.length;o++){if(e[o]==="\\"){o++;continue}if(e[o]==="`"){let s=r.inline.code.exec(e.slice(o));if(s){o+=s[0].length-1;continue}}if(e[o]!=="<")continue;let i=t.slice(n+o),a=r.inline.tag.exec(i)||r.inline.autolink.exec(i);if(a){if(a[0].length>e.length-o)return!0;o+=a[0].length-1}}return!1}var $s=class{options;rules;lexer;constructor(t){this.options=t||Mn}space(t){let e=this.rules.block.newline.exec(t);if(e&&e[0].length>0)return{type:"space",raw:e[0]}}code(t){let e=this.rules.block.code.exec(t);if(e){let n=this.options.pedantic?e[0]:Tw(e[0]),r=n.replace(this.rules.other.codeRemoveIndent,"");return{type:"code",raw:n,codeBlockStyle:"indented",text:r}}}fences(t){let e=this.rules.block.fences.exec(t);if(e){let n=e[0],r=XI(n,e[3]||"",this.rules);return{type:"code",raw:n,lang:e[2]?e[2].trim().replace(this.rules.inline.anyPunctuation,"$1"):e[2],text:r}}}heading(t){let e=this.rules.block.heading.exec(t);if(e){let n=e[2].trim();if(this.rules.other.endingHash.test(n)){let r=Jt(n,"#");(this.options.pedantic||!r||this.rules.other.endingSpaceTabChar.test(r))&&(n=r.trim())}return{type:"heading",raw:Jt(e[0],`
`),depth:e[1].length,text:n,tokens:this.lexer.inline(n)}}}hr(t){let e=this.rules.block.hr.exec(t);if(e)return{type:"hr",raw:Jt(e[0],`
`)}}blockquote(t){let e=this.rules.block.blockquote.exec(t);if(e){let n=Jt(e[0],`
`).split(`
`),r="",o="",i=[];for(;n.length>0;){let a=!1,s=[],c;for(c=0;c<n.length;c++)if(this.rules.other.blockquoteStart.test(n[c]))s.push(n[c]),a=!0;else if(!a)s.push(n[c]);else break;n=n.slice(c);let l=s.join(`
`),u=l.replace(this.rules.other.blockquoteSetextReplace,`
    $1`).replace(this.rules.other.blockquoteSetextReplace2,"");r=r?`${r}
${l}`:l,o=o?`${o}
${u}`:u;let f=this.lexer.state.top;if(this.lexer.state.top=!0,this.lexer.blockTokens(u,i,!0),this.lexer.state.top=f,n.length===0)break;let m=i.at(-1);if(m?.type==="code"||m?.type==="heading"||m?.type==="hr"||m?.type==="html")break;if(m?.type==="blockquote"){let p=m,h=n.join(`
`),x=p.raw+`
`+h.replace(this.rules.other.blockquoteSetextReplace2,""),g=this.blockquote(x);i[i.length-1]=g;let w=x.substring(g.raw.length).replace(/^\n/,""),b=w?w.split(`
`).length:0,k=b?n.slice(0,-b):n;k.length>0&&(r=`${r}
${k.join(`
`)}`),o=o.substring(0,o.length-p.text.length)+g.text;break}else if(m?.type==="list"){let p=m,h=p.raw+`
`+n.join(`
`),x=this.list(h);i[i.length-1]=x,r=r.substring(0,r.length-m.raw.length)+x.raw,o=o.substring(0,o.length-p.raw.length)+x.raw,n=h.substring(i.at(-1).raw.length).split(`
`);continue}}return{type:"blockquote",raw:r,tokens:i,text:o}}}list(t){let e=this.rules.block.list.exec(t);if(e){let n=t,r=()=>n.length-t.length,o=e[1].trim(),i=o.length>1,a={type:"list",raw:"",ordered:i,start:i?+o.slice(0,-1):"",loose:!1,items:[]};o=i?`\\d{1,9}\\${o.slice(-1)}`:`\\${o}`,this.options.pedantic&&(o=i?o:"[*+-]");let s=this.rules.other.listItemRegex(o),c=!1;for(;t;){let u=!1,f="";if(!(e=s.exec(t))||this.rules.block.hr.test(t))break;let m=r();t=t.substring(e[0].length);let p=e[2].split(`
`,1)[0],h=e[1].length,x=this.options.pedantic?Cd(p,h):p.replace(this.rules.other.leadingSpaceTab,O=>Cd(O,h)),g=t.split(`
`,1)[0],w=!x.trim(),b=0;if(this.options.pedantic?(b=2,f=x.trimStart()):w?b=h+1:(b=x.search(this.rules.other.nonSpaceChar),b=b>4?1:b,f=x.slice(b),b+=h),w&&this.rules.other.blankLine.test(g)&&(t=t.substring(g.length+1),u=!0),!u){let O=this.rules.other.nextBulletRegex(b),E=this.rules.other.hrRegex(b),S=this.rules.other.fencesBeginRegex(b),_=this.rules.other.headingBeginRegex(b),I=this.rules.other.htmlBeginRegex(b),L=this.rules.other.blockquoteBeginRegex(b);for(;t;){let Y=t.split(`
`,1)[0],X;if(g=Y,this.options.pedantic?(g=g.replace(this.rules.other.listReplaceNesting,"  "),X=g):X=g.replace(this.rules.other.leadingSpaceTab,Ne=>Cd(Ne)),S.test(g)||_.test(g)||I.test(g)||L.test(g)||O.test(g)||E.test(g))break;if(X.search(this.rules.other.nonSpaceChar)>=b||!g.trim())f+=`
`+X.slice(b);else{if(w||x.replace(this.rules.other.tabCharGlobal,"    ").search(this.rules.other.nonSpaceChar)>=4||S.test(x)||_.test(x)||E.test(x))break;f+=`
`+g}w=!g.trim(),t=t.substring(Y.length+1),x=X.slice(b)}}let k=n.slice(m,r());a.loose||(c?a.loose=!0:this.rules.other.doubleBlankLine.test(k)&&(c=!0)),a.items.push({type:"list_item",raw:k,task:!!this.options.gfm&&this.rules.other.listIsTask.test(f),loose:!1,text:f,tokens:[]})}let l=a.items.at(-1);if(l)l.raw=l.raw.trimEnd(),l.text=l.text.trimEnd();else return;a.raw=n.slice(0,r()).trimEnd();for(let u of a.items)if(this.lexer.state.top=!1,u.tokens=this.lexer.blockTokens(u.text,[]),!a.loose){let f=u.tokens.filter(p=>p.type==="space"),m=f.length>0&&f.some(p=>this.rules.other.anyLine.test(p.raw));a.loose=m}for(let u of a.items){let f=u.tokens[0];if(u.task&&(f?.type==="text"||f?.type==="paragraph")){u.text=u.text.replace(this.rules.other.listReplaceTask,""),f.raw=f.raw.replace(this.rules.other.listReplaceTask,""),f.text=f.text.replace(this.rules.other.listReplaceTask,"");for(let p=this.lexer.inlineQueue.length-1;p>=0;p--)if(this.rules.other.listIsTask.test(this.lexer.inlineQueue[p].src)){this.lexer.inlineQueue[p].src=this.lexer.inlineQueue[p].src.replace(this.rules.other.listReplaceTask,"");break}let m=this.rules.other.listTaskCheckbox.exec(u.raw);if(m){let p={type:"checkbox",raw:m[0]+" ",checked:m[0]!=="[ ]"};u.checked=p.checked,a.loose?u.tokens[0]&&["paragraph","text"].includes(u.tokens[0].type)&&"tokens"in u.tokens[0]&&u.tokens[0].tokens?(u.tokens[0].raw=p.raw+u.tokens[0].raw,u.tokens[0].text=p.raw+u.tokens[0].text,u.tokens[0].tokens.unshift(p)):u.tokens.unshift({type:"paragraph",raw:p.raw,text:p.raw,tokens:[p]}):u.tokens.unshift(p)}}else u.task&&(u.task=!1)}if(a.loose)for(let u of a.items){u.loose=!0;for(let f of u.tokens)f.type==="text"&&(f.type="paragraph")}return a}}html(t){let e=this.rules.block.html.exec(t);if(e){let n=Tw(e[0]);return{type:"html",block:!0,raw:n,pre:e[1]==="pre"||e[1]==="script"||e[1]==="style",text:n}}}def(t){let e=this.rules.block.def.exec(t);if(e){if(!this.rules.other.startAngleBracket.test(e[2])&&Aw(e[2],"()")!==-1)return;let n=Ds(e[1]).replace(this.rules.other.multipleSpaceGlobal," "),r=e[2]?e[2].replace(this.rules.other.hrefBrackets,"$1").replace(this.rules.inline.anyPunctuation,"$1"):"",o=e[3]?e[3].substring(1,e[3].length-1).replace(this.rules.inline.anyPunctuation,"$1"):e[3];return{type:"def",tag:n,raw:Jt(e[0],`
`),href:r,title:o}}}table(t){let e=this.rules.block.table.exec(t);if(!e||!this.rules.other.tableDelimiter.test(e[2]))return;let n=Sw(e[1]),r=e[2].replace(this.rules.other.tableAlignChars,"").split("|"),o=e[3]?.trim()?e[3].replace(this.rules.other.tableRowBlankLine,"").split(`
`):[],i={type:"table",raw:Jt(e[0],`
`),header:[],align:[],rows:[]};if(n.length===r.length){for(let a of r)this.rules.other.tableAlignRight.test(a)?i.align.push("right"):this.rules.other.tableAlignCenter.test(a)?i.align.push("center"):this.rules.other.tableAlignLeft.test(a)?i.align.push("left"):i.align.push(null);for(let a=0;a<n.length;a++)i.header.push({text:n[a],tokens:this.lexer.inline(n[a]),header:!0,align:i.align[a]});for(let a of o)i.rows.push(Sw(a,i.header.length).map((s,c)=>({text:s,tokens:this.lexer.inline(s),header:!1,align:i.align[c]})));return i}}lheading(t){let e=this.rules.block.lheading.exec(t);if(e){let n=e[1].trim();return{type:"heading",raw:Jt(e[0],`
`),depth:e[2].charAt(0)==="="?1:2,text:n,tokens:this.lexer.inline(n)}}}paragraph(t){let e=this.rules.block.paragraph.exec(t);if(e){let n=e[1].charAt(e[1].length-1)===`
`?e[1].slice(0,-1):e[1];return{type:"paragraph",raw:e[0],text:n,tokens:this.lexer.inline(n)}}}text(t){let e=this.rules.block.text.exec(t);if(e)return{type:"text",raw:e[0],text:e[0],tokens:this.lexer.inline(e[0])}}escape(t){let e=this.rules.inline.escape.exec(t);if(e)return{type:"escape",raw:e[0],text:e[1]}}tag(t){let e=this.rules.inline.tag.exec(t);if(e)return!this.lexer.state.inLink&&this.rules.other.startATag.test(e[0])?this.lexer.state.inLink=!0:this.lexer.state.inLink&&this.rules.other.endATag.test(e[0])&&(this.lexer.state.inLink=!1),!this.lexer.state.inRawBlock&&this.rules.other.startPreScriptTag.test(e[0])?this.lexer.state.inRawBlock=!0:this.lexer.state.inRawBlock&&this.rules.other.endPreScriptTag.test(e[0])&&(this.lexer.state.inRawBlock=!1),{type:"html",raw:e[0],inLink:this.lexer.state.inLink,inRawBlock:this.lexer.state.inRawBlock,block:!1,text:e[0]}}link(t){if(this.lexer.state.linkParenPossible===!1)return;let e=this.rules.inline.link.exec(t);if(e){let n=e[0].charAt(0)==="!"?2:1;if(!this.options.pedantic&&Iw(t,e[1],n,this.rules))return;let r=e[2].trim();if(!this.options.pedantic&&this.rules.other.startAngleBracket.test(r)){if(!this.rules.other.endAngleBracket.test(r))return;let a=Jt(r.slice(0,-1),"\\");if((r.length-a.length)%2===0)return}else{let a=Aw(e[2],"()");if(a===-2)return;if(a>-1){let s=(e[0].indexOf("!")===0?5:4)+e[1].length+a;e[2]=e[2].substring(0,a),e[0]=e[0].substring(0,s).trim(),e[3]=""}}let o=e[2],i="";if(this.options.pedantic){let a=this.rules.other.pedanticHrefTitle.exec(o);a&&(o=a[1],i=a[3])}else i=e[3]?e[3].slice(1,-1):"";return o=o.trim(),this.rules.other.startAngleBracket.test(o)&&(this.options.pedantic&&!this.rules.other.endAngleBracket.test(r)?o=o.slice(1):o=o.slice(1,-1)),kw(e,{href:o&&o.replace(this.rules.inline.anyPunctuation,"$1"),title:i&&i.replace(this.rules.inline.anyPunctuation,"$1")},e[0],this.lexer,this.rules)}}reflink(t,e){let n;if((n=this.rules.inline.reflink.exec(t))||(n=this.rules.inline.nolink.exec(t))){let r=n[0].charAt(0)==="!"?2:1;if(!this.options.pedantic&&Iw(t,n[1],r,this.rules))return;let o=(n[2]||n[1]).replace(this.rules.other.multipleSpaceGlobal," "),i=e[Ds(o)];if(!i){let a=n[0].charAt(0);return{type:"text",raw:a,text:a}}return kw(n,i,n[0],this.lexer,this.rules)}}emStrong(t,e,n=""){let r=this.rules.inline.emStrongLDelim.exec(t);if(!(!r||!r[1]&&!r[2]&&!r[3]&&!r[4]||r[4]&&n.match(this.rules.other.unicodeAlphaNumeric))&&(!(r[1]||r[3])||!n||this.rules.inline.punctuation.exec(n))){let o=[...r[0]].length-1,i,a,s=o,c=0,l=r[0][0],u=n===l,f=l==="*"?this.rules.inline.emStrongRDelimAst:this.rules.inline.emStrongRDelimUnd;for(f.lastIndex=0,e=e.slice(-1*t.length+o);(r=f.exec(e))!==null;){if(i=r[1]||r[2]||r[3]||r[4]||r[5]||r[6],!i)continue;if(a=[...i].length,r[3]||r[4]){s+=a;continue}else if(r[5]||r[6]){if(o%3&&!((o+a)%3)){c+=a;continue}if(u)break}if(s-=a,s>0)continue;a=Math.min(a,a+s+c);let m=[...r[0]][0].length,p=t.slice(0,o+r.index+m+a);if(Math.min(o,a)%2){let x=p.slice(1,-1);return{type:"em",raw:p,text:x,tokens:this.lexer.inlineTokens(x)}}let h=p.slice(2,-2);return{type:"strong",raw:p,text:h,tokens:this.lexer.inlineTokens(h)}}}}codespan(t){let e=this.rules.inline.code.exec(t);if(e){let n=e[2].replace(this.rules.other.newLineCharGlobal," "),r=this.rules.other.nonSpaceChar.test(n),o=this.rules.other.startingSpaceChar.test(n)&&this.rules.other.endingSpaceChar.test(n);return r&&o&&(n=n.substring(1,n.length-1)),{type:"codespan",raw:e[0],text:n}}}br(t){let e=this.rules.inline.br.exec(t);if(e)return{type:"br",raw:e[0]}}del(t,e,n=""){let r=this.rules.inline.delLDelim.exec(t);if(r&&(!r[1]||!n||this.rules.inline.punctuation.exec(n))){let o=[...r[0]].length-1,i,a,s=o,c=this.rules.inline.delRDelim;for(c.lastIndex=0,e=e.slice(-1*t.length+o);(r=c.exec(e))!==null;){if(i=r[1]||r[2]||r[3]||r[4]||r[5]||r[6],!i||(a=[...i].length,a!==o))continue;if(r[3]||r[4]){s+=a;continue}if(s-=a,s>0)continue;a=Math.min(a,a+s);let l=[...r[0]][0].length,u=t.slice(0,o+r.index+l+a),f=u.slice(o,-o);return{type:"del",raw:u,text:f,tokens:this.lexer.inlineTokens(f)}}}}autolink(t){let e=this.rules.inline.autolink.exec(t);if(e){let n,r;return e[2]==="@"?(n=e[1],r="mailto:"+n):(n=e[1],r=n),{type:"link",raw:e[0],text:n,href:r,autolink:!0,tokens:[{type:"text",raw:n,text:n}]}}}url(t){let e;if(e=this.rules.inline.url.exec(t)){let n,r;if(e[2]==="@")n=e[0],r="mailto:"+n;else{let o;do o=e[0],e[0]=this.rules.inline._backpedal.exec(e[0])?.[0]??"";while(o!==e[0]);n=e[0],e[1]==="www."?r="http://"+e[0]:r=e[0]}return{type:"link",raw:e[0],text:n,href:r,autolink:!0,tokens:[{type:"text",raw:n,text:n}]}}}inlineText(t){let e=this.rules.inline.text.exec(t);if(e){let n=this.lexer.state.inRawBlock;return{type:"text",raw:e[0],text:n?e[0]:KI(e[0]),escaped:n}}}},ht=class Od{tokens;options;state;inlineQueue;tokenizer;constructor(e){this.tokens=[],this.tokens.links=Object.create(null),this.options=e||Mn,this.options.tokenizer=this.options.tokenizer||new $s,this.tokenizer=this.options.tokenizer,this.tokenizer.options=this.options,this.tokenizer.lexer=this,this.inlineQueue=[],this.state={inLink:!1,inRawBlock:!1,linkEmitted:!1,linkParenPossible:!0,top:!0};let n={other:ze,block:Ls.normal,inline:Eo.normal};this.options.pedantic?(n.block=Ls.pedantic,n.inline=Eo.pedantic):this.options.gfm&&(n.block=Ls.gfm,this.options.breaks?n.inline=Eo.breaks:n.inline=Eo.gfm),this.tokenizer.rules=n}static get rules(){return{block:Ls,inline:Eo}}static lex(e,n){return new Od(n).lex(e)}static lexInline(e,n){return new Od(n).inlineTokens(e)}lex(e){e=e.replace(ze.carriageReturn,`
`),this.blockTokens(e,this.tokens);for(let n=0;n<this.inlineQueue.length;n++){let r=this.inlineQueue[n];this.inlineTokens(r.src,r.tokens)}return this.inlineQueue=[],this.tokens}blockTokens(e,n=[],r=!1){this.tokenizer.lexer=this,this.options.pedantic&&(e=e.replace(ze.tabCharGlobal,"    ").replace(ze.spaceLine,""));let o=1/0;for(;e;){if(e.length<o)o=e.length;else{this.infiniteLoopError(e.charCodeAt(0));break}let i;if(this.options.extensions?.block?.some(s=>(i=s.call({lexer:this},e,n))?(e=e.substring(i.raw.length),n.push(i),!0):!1))continue;if(i=this.tokenizer.space(e)){e=e.substring(i.raw.length);let s=n.at(-1);i.raw.length===1&&s!==void 0?s.raw+=`
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
`+i.text,this.inlineQueue.pop(),this.inlineQueue.at(-1).src=s.text):n.push(i);continue}if(e){this.infiniteLoopError(e.charCodeAt(0));break}}return this.state.top=!0,n}inline(e,n=[]){return this.inlineQueue.push({src:e,tokens:n}),n}linkInText(e){if(!e.includes("["))return!1;let n=this.tokenizer.rules.inline.link;for(let r of e.matchAll(this.tokenizer.rules.inline.blockSkip))if(n.test(r[0])&&e.charAt(r.index-1)!=="!")return!0;for(let r of e.matchAll(this.tokenizer.rules.inline.reflinkSearch)){let o=r[0],i=o.lastIndexOf("[");if(!(o.charAt(0)==="!"||!Object.hasOwn(this.tokens.links,Ds(o.slice(i+1,-1))))&&!(i>1&&this.linkInText(o.slice(1,i-1))))return!0}return!1}inlineTokens(e,n=[]){this.tokenizer.lexer=this;let r=this.state.linkParenPossible;this.state.linkParenPossible=r&&e.includes(")");try{return this.#e(e,n)}finally{this.state.linkParenPossible=r}}#e(e,n){let r=e;if(this.tokens.links&&e.includes("[")){let s=this.tokenizer.rules.inline.reflinkSearch,c=l=>{let u=l.lastIndexOf("[");if(!Object.hasOwn(this.tokens.links,Ds(l.slice(u+1,-1))))return l;if(u>1&&l.charAt(0)!=="!"){let f=l.slice(1,u-1);if(this.linkInText(f))return"["+f.replace(s,c)+"]["+"a".repeat(l.length-u-2)+"]"}return"["+"a".repeat(l.length-2)+"]"};r=r.replace(s,c)}r=r.replace(this.tokenizer.rules.inline.anyPunctuationOutsideCode,(s,c,l)=>l?"+".repeat(s.length):c?c+s.slice(c.length,-c.length).replace(/`/g,"+")+c:s),r=r.replace(this.tokenizer.rules.inline.blockSkip,(s,c,l)=>{let u=l?l.length:0;return s.slice(0,u)+"["+"a".repeat(s.length-u-2)+"]"}),r=this.options.hooks?.emStrongMask?.call({lexer:this},r)??r;let o=!1,i="",a=1/0;for(;e;){if(e.length<a)a=e.length;else{this.infiniteLoopError(e.charCodeAt(0));break}o||(i=""),o=!1;let s;if(this.options.extensions?.inline?.some(l=>(s=l.call({lexer:this},e,n))?(e=e.substring(s.raw.length),n.push(s),!0):!1))continue;if(s=this.tokenizer.escape(e)){e=e.substring(s.raw.length),n.push(s);continue}if(s=this.tokenizer.tag(e)){e=e.substring(s.raw.length),n.push(s);continue}if(s=this.tokenizer.link(e)){e=e.substring(s.raw.length),n.push(s);continue}if(s=this.tokenizer.reflink(e,this.tokens.links)){e=e.substring(s.raw.length);let l=n.at(-1);s.type==="text"&&l?.type==="text"?(l.raw+=s.raw,l.text+=s.text):n.push(s);continue}if(s=this.tokenizer.emStrong(e,r,i)){e=e.substring(s.raw.length),n.push(s);continue}if(s=this.tokenizer.codespan(e)){e=e.substring(s.raw.length),n.push(s);continue}if(s=this.tokenizer.br(e)){e=e.substring(s.raw.length),n.push(s);continue}if(s=this.tokenizer.del(e,r,i)){e=e.substring(s.raw.length),n.push(s);continue}if(s=this.tokenizer.autolink(e)){e=e.substring(s.raw.length),n.push(s);continue}if(!this.state.inLink&&(s=this.tokenizer.url(e))){e=e.substring(s.raw.length),n.push(s);continue}let c=e;if(this.options.extensions?.startInline){let l=1/0,u=e.slice(1),f;this.options.extensions.startInline.forEach(m=>{f=m.call({lexer:this},u),typeof f=="number"&&f>=0&&(l=Math.min(l,f))}),l<1/0&&l>=0&&(c=e.substring(0,l+1))}if(s=this.tokenizer.inlineText(c)){e=e.substring(s.raw.length),s.raw.slice(-1)!=="_"&&(i=s.raw.slice(-1)),o=!0;let l=n.at(-1);l?.type==="text"?(l.raw+=s.raw,l.text+=s.text):n.push(s);continue}if(e){this.infiniteLoopError(e.charCodeAt(0));break}}return n}infiniteLoopError(e){let n="Infinite loop on byte: "+e;if(this.options.silent)console.error(n);else throw new Error(n)}},Us=class{options;parser;constructor(t){this.options=t||Mn}space(t){return""}code({text:t,lang:e,escaped:n}){let r=(e||"").match(ze.notSpaceStart)?.[0],o=t?t.replace(ze.endingNewline,"")+`
`:"";return r?'<pre><code class="language-'+nt(r)+'">'+(n?o:nt(o,!0))+`</code></pre>
`:"<pre><code>"+(n?o:nt(o,!0))+`</code></pre>
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
`}strong({tokens:t}){return`<strong>${this.parser.parseInline(t)}</strong>`}em({tokens:t}){return`<em>${this.parser.parseInline(t)}</em>`}codespan({text:t}){return`<code>${nt(t,!0)}</code>`}br(t){return"<br>"}del({tokens:t}){return`<del>${this.parser.parseInline(t)}</del>`}link({href:t,title:e,text:n,tokens:r,autolink:o}){let i=o?nt(n,!0):this.parser.parseInline(r),a=_w(t);if(a===null)return i;t=nt(a,o);let s='<a href="'+t+'"';return e&&(s+=' title="'+nt(e)+'"'),s+=">"+i+"</a>",s}image({href:t,title:e,text:n,tokens:r}){r&&(n=this.parser.parseInline(r,this.parser.textRenderer));let o=_w(t);if(o===null)return nt(n);t=o;let i=`<img src="${nt(t)}" alt="${nt(n)}"`;return e&&(i+=` title="${nt(e)}"`),i+=">",i}text(t){return"tokens"in t&&t.tokens?this.parser.parseInline(t.tokens):"escaped"in t&&t.escaped?t.text:nt(t.text)}},Fd=class{strong({text:t}){return t}em({text:t}){return t}codespan({text:t}){return t}del({text:t}){return t}html({text:t}){return t}text({text:t}){return t}link({text:t}){return""+t}image({text:t}){return""+t}br(){return""}checkbox({raw:t}){return t}},ft=class Pd{options;renderer;textRenderer;constructor(e){this.options=e||Mn,this.options.renderer=this.options.renderer||new Us,this.renderer=this.options.renderer,this.renderer.options=this.options,this.renderer.parser=this,this.textRenderer=new Fd}static parse(e,n){return new Pd(n).parse(e)}static parseInline(e,n){return new Pd(n).parseInline(e)}parse(e){this.renderer.parser=this;let n="";for(let r=0;r<e.length;r++){let o=e[r];if(this.options.extensions?.renderers?.[o.type]){let a=o,s=this.options.extensions.renderers[a.type].call({parser:this},a);if(s!==!1||!["space","hr","heading","code","table","blockquote","list","checkbox","html","def","paragraph","text"].includes(a.type)){n+=s||"";continue}}let i=o;switch(i.type){case"space":{n+=this.renderer.space(i);break}case"hr":{n+=this.renderer.hr(i);break}case"heading":{n+=this.renderer.heading(i);break}case"code":{n+=this.renderer.code(i);break}case"table":{n+=this.renderer.table(i);break}case"blockquote":{n+=this.renderer.blockquote(i);break}case"list":{n+=this.renderer.list(i);break}case"checkbox":{n+=this.renderer.checkbox(i);break}case"html":{n+=this.renderer.html(i);break}case"def":{n+=this.renderer.def(i);break}case"paragraph":{n+=this.renderer.paragraph(i);break}case"text":{n+=this.renderer.text(i);break}default:{let a='Token with "'+i.type+'" type was not found.';if(this.options.silent)return console.error(a),"";throw new Error(a)}}}return n}parseInline(e,n=this.renderer){this.renderer.parser=this;let r="";for(let o=0;o<e.length;o++){let i=e[o];if(this.options.extensions?.renderers?.[i.type]){let s=this.options.extensions.renderers[i.type].call({parser:this},i);if(s!==!1||!["escape","html","link","image","checkbox","strong","em","codespan","br","del","text"].includes(i.type)){r+=s||"";continue}}let a=i;switch(a.type){case"escape":{r+=n.text(a);break}case"html":{r+=n.html(a);break}case"link":{r+=n.link(a);break}case"image":{r+=n.image(a);break}case"checkbox":{r+=n.checkbox(a);break}case"strong":{r+=n.strong(a);break}case"em":{r+=n.em(a);break}case"codespan":{r+=n.codespan(a);break}case"br":{r+=n.br(a);break}case"del":{r+=n.del(a);break}case"text":{r+=n.text(a);break}default:{let s='Token with "'+a.type+'" type was not found.';if(this.options.silent)return console.error(s),"";throw new Error(s)}}}return r}},xo=class{options;block;constructor(t){this.options=t||Mn}static passThroughHooks=new Set(["preprocess","postprocess","processAllTokens","emStrongMask"]);static passThroughHooksRespectAsync=new Set(["preprocess","postprocess","processAllTokens"]);preprocess(t){return t}postprocess(t){return t}processAllTokens(t){return t}emStrongMask(t){return t}provideLexer(t=this.block){return t?ht.lex:ht.lexInline}provideParser(t=this.block){return t?ft.parse:ft.parseInline}};function Nn(t,e){if(Array.isArray(e))for(let n=0;n<e.length;n++)t.push(e[n]);else t.push(e)}var Gd=class{defaults=Md();options=this.setOptions;parse=this.parseMarkdown(!0);parseInline=this.parseMarkdown(!1);Parser=ft;Renderer=Us;TextRenderer=Fd;Lexer=ht;Tokenizer=$s;Hooks=xo;constructor(...t){this.use(...t)}walkTokens(t,e){let n=[];for(let r of t)switch(Nn(n,e.call(this,r)),r.type){case"table":{let o=r;for(let i of o.header)Nn(n,this.walkTokens(i.tokens,e));for(let i of o.rows)for(let a of i)Nn(n,this.walkTokens(a.tokens,e));break}case"list":{let o=r;Nn(n,this.walkTokens(o.items,e));break}default:{let o=r;this.defaults.extensions?.childTokens?.[o.type]?this.defaults.extensions.childTokens[o.type].forEach(i=>{let a=o[i].flat(1/0);Nn(n,this.walkTokens(a,e))}):o.tokens&&Nn(n,this.walkTokens(o.tokens,e))}}return n}use(...t){let e=this.defaults.extensions||{renderers:{},childTokens:{}};return t.forEach(n=>{let r={...n};if(r.async=this.defaults.async||r.async||!1,n.extensions&&(n.extensions.forEach(o=>{if(!o.name)throw new Error("extension name required");if("renderer"in o){let i=e.renderers[o.name];i?e.renderers[o.name]=function(...a){let s=o.renderer.apply(this,a);return s===!1&&(s=i.apply(this,a)),s}:e.renderers[o.name]=o.renderer}if("tokenizer"in o){if(!o.level||o.level!=="block"&&o.level!=="inline")throw new Error("extension level must be 'block' or 'inline'");let i=e[o.level];i?i.unshift(o.tokenizer):e[o.level]=[o.tokenizer],o.start&&(o.level==="block"?e.startBlock?e.startBlock.push(o.start):e.startBlock=[o.start]:o.level==="inline"&&(e.startInline?e.startInline.push(o.start):e.startInline=[o.start]))}"childTokens"in o&&o.childTokens&&(e.childTokens[o.name]=o.childTokens)}),r.extensions=e),n.renderer){let o=this.defaults.renderer||new Us(this.defaults);for(let i in n.renderer){if(!(i in o))throw new Error(`renderer '${i}' does not exist`);if(["options","parser"].includes(i))continue;let a=i,s=n.renderer[a],c=o[a];o[a]=(...l)=>{let u=s.apply(o,l);return u===!1&&(u=c.apply(o,l)),u||""}}r.renderer=o}if(n.tokenizer){let o=this.defaults.tokenizer||new $s(this.defaults);for(let i in n.tokenizer){if(!(i in o))throw new Error(`tokenizer '${i}' does not exist`);if(["options","rules","lexer"].includes(i))continue;let a=i,s=n.tokenizer[a],c=o[a];o[a]=(...l)=>{let u=s.apply(o,l);return u===!1&&(u=c.apply(o,l)),u}}r.tokenizer=o}if(n.hooks){let o=this.defaults.hooks||new xo;for(let i in n.hooks){if(!(i in o))throw new Error(`hook '${i}' does not exist`);if(["options","block"].includes(i))continue;let a=i,s=n.hooks[a],c=o[a];xo.passThroughHooks.has(i)?o[a]=l=>{if(this.defaults.async&&xo.passThroughHooksRespectAsync.has(i))return(async()=>{let f=await s.call(o,l);return c.call(o,f)})();let u=s.call(o,l);return c.call(o,u)}:o[a]=(...l)=>{if(this.defaults.async)return(async()=>{let f=await s.apply(o,l);return f===!1&&(f=await c.apply(o,l)),f})();let u=s.apply(o,l);return u===!1&&(u=c.apply(o,l)),u}}r.hooks=o}if(n.walkTokens){let o=this.defaults.walkTokens,i=n.walkTokens;r.walkTokens=function(a){let s=[];return s.push(i.call(this,a)),o&&Nn(s,o.call(this,a)),s}}this.defaults={...this.defaults,...r}}),this}setOptions(t){return this.defaults={...this.defaults,...t},this}lexer(t,e){return ht.lex(t,e??this.defaults)}parser(t,e){return ft.parse(t,e??this.defaults)}parseMarkdown(t){return(e,n)=>{let r={...n},o={...this.defaults,...r},i=this.onError(!!o.silent,!!o.async);if(this.defaults.async===!0&&r.async===!1)return i(new Error("marked(): The async option was set to true by an extension. Remove async: false from the parse options object to return a Promise."));if(typeof e>"u"||e===null)return i(new Error("marked(): input parameter is undefined or null"));if(typeof e!="string")return i(new Error("marked(): input parameter is of type "+Object.prototype.toString.call(e)+", string expected"));if(o.hooks&&(o.hooks.options=o,o.hooks.block=t),o.async)return(async()=>{let a=o.hooks?await o.hooks.preprocess(e):e,s=await(o.hooks?await o.hooks.provideLexer(t):t?ht.lex:ht.lexInline)(a,o),c=o.hooks?await o.hooks.processAllTokens(s):s;o.walkTokens&&await Promise.all(this.walkTokens(c,o.walkTokens));let l=await(o.hooks?await o.hooks.provideParser(t):t?ft.parse:ft.parseInline)(c,o);return o.hooks?await o.hooks.postprocess(l):l})().catch(i);try{o.hooks&&(e=o.hooks.preprocess(e));let a=(o.hooks?o.hooks.provideLexer(t):t?ht.lex:ht.lexInline)(e,o);o.hooks&&(a=o.hooks.processAllTokens(a)),o.walkTokens&&this.walkTokens(a,o.walkTokens);let s=(o.hooks?o.hooks.provideParser(t):t?ft.parse:ft.parseInline)(a,o);return o.hooks&&(s=o.hooks.postprocess(s)),s}catch(a){return i(a)}}}onError(t,e){return n=>{if(n.message+=`
Please report this to https://github.com/markedjs/marked.`,t){let r="<p>An error occurred:</p><pre>"+nt(n.message+"",!0)+"</pre>";return e?Promise.resolve(r):r}if(e)return Promise.reject(n);throw n}}},Pn=new Gd;function pe(t,e){return Pn.parse(t,e)}pe.options=pe.setOptions=function(t){return Pn.setOptions(t),pe.defaults=Pn.defaults,Rw(pe.defaults),pe};pe.getDefaults=Md;pe.defaults=Mn;function JI(...t){return Pn.use(...t),pe.defaults=Pn.defaults,Rw(pe.defaults),pe}pe.use=JI;pe.walkTokens=function(t,e){return Pn.walkTokens(t,e)};pe.parseInline=Pn.parseInline;pe.Parser=ft;pe.parser=ft.parse;pe.Renderer=Us;pe.TextRenderer=Fd;pe.Lexer=ht;pe.lexer=ht.lex;pe.Tokenizer=$s;pe.Hooks=xo;pe.parse=pe;var lU=pe.options,cU=pe.setOptions,uU=pe.walkTokens,dU=pe.parseInline;var pU=ft.parse,hU=ht.lex;var QI=new Gd({gfm:!0,breaks:!0}),$w=["a","p","br","strong","em","b","i","u","s","del","code","pre","ul","ol","li","blockquote","h1","h2","h3","h4","h5","h6","hr","span","table","thead","tbody","tr","th","td"],Uw=["href","title","class","target","rel"],Hw={ALLOWED_TAGS:$w,ALLOWED_ATTR:Uw,ALLOW_DATA_ATTR:!1,ALLOW_ARIA_ATTR:!1},eR={...Hw,ALLOWED_TAGS:[...$w,"img"],ALLOWED_ATTR:[...Uw,"src","alt","width","height"]},tR=/^language-[A-Za-z0-9_+#.-]+$/,nR=new Set(["CODE","PRE"]);function rR(t){t.nodeName==="A"&&t.hasAttribute("href")?(t.setAttribute("target","_blank"),t.setAttribute("rel","noopener noreferrer")):(t.removeAttribute("target"),t.removeAttribute("rel"));let e=t.getAttribute("class");if(e===null)return;let n=nR.has(t.nodeName)?e.split(/\s+/).filter(r=>tR.test(r)):[];if(n.length===0){t.removeAttribute("class");return}t.setAttribute("class",n.join(" "))}var Hs=null;function oR(){return Hs===null&&(Hs=bw(),Hs.addHook("afterSanitizeAttributes",rR)),Hs}function Ao(t,e){let n=e?.allowImages===!0,r=QI.parse(t,{async:!1});return oR().sanitize(r,n?eR:Hw).trim()}var Fs=class{#e;#t=null;#n=0;#o="";#r=null;constructor(e){this.#e=e}get deltas(){return this.#n}countDelta(){this.#n+=1}queue(e){this.#o=e,this.#i(),this.#r===null&&(this.#r=requestAnimationFrame(()=>{this.#r=null,this.into(this.#o)}))}into(e){this.#r!==null&&(cancelAnimationFrame(this.#r),this.#r=null),this.#o=e;let n=this.#i();return n.innerHTML=Ao(e,{allowImages:this.#e.allowImages()}),this.#e.follow(),n}end(){this.#r!==null&&this.into(this.#o),this.#t=null}#i(){return this.#t===null&&(this.#t=this.#e.openBubble(),this.#n=0),this.#t}};function Fw(t){let{messages:e,jumpButton:n,emptyWrap:r,strings:o}=t;e.className="messages",e.setAttribute("part","messages"),e.setAttribute("role","log"),e.setAttribute("aria-live","off"),e.setAttribute("aria-label",o.conversation),n.className="jump-latest",n.type="button",n.setAttribute("part","jump-latest"),n.textContent=o.jumpToLatest,r.className="empty",r.setAttribute("part","empty");let i=document.createElement("div");i.className="greeting",i.setAttribute("part","greeting");let a=document.createElement("slot");a.name="greeting",a.append(t.greetingText),i.append(a);let s=document.createElement("slot");s.name="empty",t.starters!==null&&s.append(t.starters),r.replaceChildren(i,s)}var iR=4,aR=120;function Gw(t){if(typeof t!="object"||t===null)return null;let e=t.prompts;if(!Array.isArray(e))return null;let n=e.filter(r=>typeof r=="string").map(r=>r.trim()).filter(r=>r!==""&&r.length<=120).slice(0,4);return n.length===0?null:n}function ko(t,e,n){let r=Gw(t);if(r===null)return null;let o=document.createElement("div");o.className="suggestions",o.setAttribute("part","suggestions"),o.setAttribute("role","group"),o.setAttribute("aria-label",e.suggestions);for(let i of r){let a=document.createElement("button");a.type="button",a.className="suggestion-chip",a.setAttribute("part","suggestion-chip"),a.textContent=i,a.addEventListener("click",()=>n(i)),o.appendChild(a)}return o}function Bw(t,e,n){let r=t.getAttribute("data-starters");if(r===null)return null;let o;try{o=JSON.parse(r)}catch{return console.warn(`<ag-ui-chat>: data-starters is not valid JSON, so no starters are shown. It takes an array of strings, e.g. data-starters='["Summarise this page"]'.`),null}return ko({prompts:o},e,n)}function Gs(t,e){for(let n of Array.from(t.querySelectorAll("pre"))){let r=n.querySelector("code");r===null||n.querySelector(".code-copy")!==null||(n.classList.add("has-copy"),n.append(sR(r,e)))}}function sR(t,e){let n=t.textContent,r=document.createElement("button");return r.type="button",r.className="code-copy",r.setAttribute("part","code-copy"),r.textContent=e.copyCode,r.title=e.copyCode,r.setAttribute("aria-label",e.copyCode),r.addEventListener("click",()=>{lR(n).then(o=>{cR(r,o?e.copied:e.copyFailed,e)})}),r}async function lR(t){let e=navigator.clipboard;if(e===void 0)return!1;try{return await e.writeText(t),!0}catch{return!1}}function cR(t,e,n){t.textContent=e,t.dataset.state=e===n.copied?"copied":"failed",setTimeout(()=>{t.textContent=n.copyCode,delete t.dataset.state},1500)}function Bd(t){let e=t.replace(/[._-]+/g," ").trim();return e===""?t:e.charAt(0).toUpperCase()+e.slice(1)}var Bs=class{element;#e;#t;#n;#o;#r=!1;constructor(e=fe){this.#o=e,this.element=document.createElement("div"),this.element.className="thoughts",this.element.setAttribute("part","thoughts"),this.element.setAttribute("data-streaming",""),this.#n=document.createElement("button"),this.#n.type="button",this.#n.className="thoughts-toggle",this.#n.setAttribute("part","thoughts-toggle"),this.#n.setAttribute("aria-expanded","true"),this.#e=document.createElement("span"),this.#e.className="thoughts-label",this.#e.setAttribute("part","thoughts-label"),this.#e.textContent=e.thinking,this.#n.append(this.#e),this.#t=document.createElement("pre"),this.#t.className="thoughts-body",this.#t.setAttribute("part","thoughts-body"),this.#n.addEventListener("click",()=>{this.#i(!this.#r)}),this.element.append(this.#n,this.#t)}stream(e){this.#t.textContent=e}collapse(){this.#r||(this.element.removeAttribute("data-streaming"),this.#e.textContent=this.#o.thoughts,this.#i(!0))}#i(e){this.#r=e,this.#t.hidden=e,this.#n.setAttribute("aria-expanded",String(!e))}};var uR=new Set([K.PENDING,K.DEFERRED]),dR=`.tool-call-subagent > .subagent:is(${[yt.STARTED,yt.TOOL_CALL,yt.TOOL_RESULT].map(t=>`[data-phase="${t}"]`).join(", ")})`,pR=["data-status","data-asking","data-phase","data-agent"],Zs=class{element;#e;#t;#n;#o;#r;#i=[];#a=!1;constructor(e){this.#e=e,this.element=document.createElement("div"),this.element.className="tool-group",this.element.setAttribute("part","tool-group"),this.element.setAttribute("data-open","false"),this.#n=document.createElement("button"),this.#n.type="button",this.#n.className="tool-group-head",this.#n.setAttribute("part","tool-group-head"),this.#n.setAttribute("aria-expanded","false");let n=document.createElement("span");n.className="tool-group-icon",n.setAttribute("part","tool-group-icon"),n.setAttribute("aria-hidden","true"),this.#o=document.createElement("span"),this.#o.className="tool-group-label",this.#o.setAttribute("part","tool-group-label"),this.#r=document.createElement("span"),this.#r.className="tool-group-meta",this.#r.setAttribute("part","tool-group-meta");let r=document.createElement("span");r.className="tool-group-chevron",r.setAttribute("aria-hidden","true"),this.#n.append(n,this.#o,this.#r,r),this.#n.addEventListener("click",()=>{this.setOpen(this.element.getAttribute("data-open")!=="true")}),this.#t=document.createElement("div"),this.#t.className="tool-group-list",this.#t.setAttribute("part","tool-group-list"),this.element.append(this.#n,this.#t),new MutationObserver(()=>{this.#l()}).observe(this.#t,{attributes:!0,attributeFilter:[...pR],subtree:!0})}add(e,n){let r=this.#i.filter(i=>i.name===n).length+1,o=n;if(r>1){let i=document.createElement("span");i.className="tool-call-repeat",i.setAttribute("part","tool-card-repeat"),i.textContent=re(this.#e.toolStepRepeat,{n:r}),e.querySelector(".tool-call-name")?.after(i),o=`${n} ${i.textContent}`}this.#i.push({element:e,name:n,label:o}),this.#t.append(e),this.#l()}setOpen(e){this.element.setAttribute("data-open",String(e)),this.#n.setAttribute("aria-expanded",String(e))}reveal(){this.#a=!0,this.setOpen(!0)}#s(){for(let{element:e}of this.#i){let n=e.getAttribute("data-status")===K.PENDING?e.querySelector(dR):null;if(n!==null){let r=n.getAttribute("data-agent");return r===null?this.#e.subAgentWorking:re(this.#e.subAgentDelegatedTo,{agent:r})}}return null}#l(){let e=this.#e,n=this.#i,r=n.map(w=>w.element.getAttribute("data-status")??""),o=n.filter((w,b)=>uR.has(r[b])),i=w=>r.filter(b=>b===w).length,a=i(K.ERROR),s=i(K.DECLINED),c=i(K.DEFERRED),l=n.filter(w=>w.element.hasAttribute("data-asking")).length,u=c+l,f=n.length;c>0&&!this.#a?(this.#a=!0,this.setOpen(!0)):c===0&&(this.#a=!1);let m="done";u>0?m="waiting":o.length>0?m="running":a>0&&(m="error"),this.element.setAttribute("data-state",m),this.element.setAttribute("part",`tool-group tool-group-${m}`),this.element.setAttribute("data-count",String(f));let p=f===1?n[0]:void 0;if(p!==void 0)this.#o.textContent=p.label;else{let w=m==="waiting"?e.toolGroupSteps:m==="running"?e.toolGroupWorking:e.toolGroupWorked;this.#o.textContent=re(w,{count:f})}let h=[],x=this.#s(),g=o[0];u>0?h.push(re(e.toolGroupWaiting,{count:u})):x!==null?h.push(x):g!==void 0&&f>1&&h.push(g.label),a>0&&h.push(re(e.toolGroupFailed,{count:a})),s>0&&h.push(re(e.toolGroupDeclined,{count:s})),this.#r.replaceChildren(...h.map(w=>{let b=document.createElement("span");return b.className="tool-group-note",b.textContent=w,b})),this.#r.hidden=h.length===0}};function Zw(t){return t===Ct.GROUPED}function Vs(t,e){try{return t()}catch(n){return console.warn(`ag-ui-chat: render failed for ${e}`,n),null}}function Vw(t,e){for(let n of Array.from(t.childNodes))n.nodeType===Node.TEXT_NODE?e.push({node:n,parent:t}):Vw(n,e)}function jw(t){let e=[];Vw(t,e);let n=0;for(let{node:r,parent:o}of e){let i=document.createDocumentFragment();for(let a of r.data.split(/(\s+)/)){if(a==="")continue;if(/\s/.test(a)){i.appendChild(document.createTextNode(a));continue}let s=document.createElement("span");s.className="word",s.style.setProperty("--ag-ui-word-index",String(n)),s.textContent=a,i.appendChild(s),n+=1}o.replaceChild(i,r)}}function Ww({viewport:t,onMissedContent:e}){let n=!0,r=!1,o=()=>t.scrollHeight-t.scrollTop-t.clientHeight<=4,i=u=>{u!==r&&(r=u,e(r))},a=()=>{t.scrollTop=t.scrollHeight},s=()=>{n=o(),n&&i(!1)},c=()=>{if(n){a();return}i(!0)};t.addEventListener("scroll",s,{passive:!0});let l=new ResizeObserver(()=>{n&&a()});return l.observe(t),{follow:c,jump:()=>{n=!0,i(!1),a()},following:()=>n,dispose:()=>{t.removeEventListener("scroll",s),l.disconnect()}}}var js=class{#e;#t=new Map;#n=new Map;#o=new Map;#r=new Set;#i;#a=null;#s=null;#l=null;#u=new WeakMap;#d=new WeakMap;#f=new WeakMap;constructor(e){this.#e=e}mountScroller(e,n){e.addEventListener("click",()=>{this.jump()},{signal:n}),this.#i=Ww({viewport:this.#e.messages,onMissedContent:r=>{e.dataset.missed=String(r)}})}disposeScroller(){this.#i.dispose()}follow(){this.#i.follow()}jump(){this.#i.jump()}isEmpty(){return!this.#e.emptyWrap.hidden}card(e){return this.#t.get(e)}cards(){return this.#t.values()}forgetCard(e){this.#t.delete(e)}setCardElement(e,n){this.#n.set(e,n)}markServerSettled(e){this.#r.add(e)}isServerSettled(e){return this.#r.has(e)}collapseThoughts(){this.#l?.collapse()}closeGroup(){this.#s!==null&&this.#s.childElementCount===0&&(this.#s.remove(),this.updateEmptyState()),this.#s=null,this.#l=null}releaseTurn(){this.#s=null,this.#l=null,this.hidePending(),this.#t.clear()}forgetCards(){this.#r.clear(),this.#n.clear(),this.#o.clear()}holdRunning(e,n){this.#o.set(e,n)}setAsking(e,n){this.#o.get(e)?.setAsking(n)}empty(){this.#e.messages.replaceChildren(this.#e.emptyWrap),this.updateEmptyState()}append(e,n){let r=document.createElement("div");return r.className=`message message--${e}`,r.setAttribute("part",`message message-${e}`),e===Ve.ASSISTANT?(r.innerHTML=Ao(n,{allowImages:this.#e.allowImages()}),Gs(r,this.#e.strings()),this.ensureGroup().appendChild(r)):(this.#s=null,r.textContent=n,this.#e.messages.appendChild(r)),this.updateEmptyState(),e===Ve.USER?this.jump():this.follow(),r}ensureGroup(){if(this.#s===null){let e=document.createElement("div");e.className="answer",e.setAttribute("part","answer"),this.#s=e,this.#e.messages.appendChild(e),this.updateEmptyState()}return this.#s}revealWords(e){this.#e.element.getAttribute("data-text-animation")==="word"&&jw(e)}updateEmptyState(){this.#e.emptyWrap.hidden=this.#e.messages.childElementCount>1,this.#e.element.toggleAttribute("data-empty",!this.#e.emptyWrap.hidden)}appendStoppedNote(){let e=document.createElement("div");e.className="stopped-note",e.setAttribute("part","stopped"),e.setAttribute("role","status"),e.textContent=this.#e.strings().stopped,this.ensureGroup().appendChild(e),this.updateEmptyState(),this.follow()}showPending(){if(this.#a!==null)return;let e=document.createElement("div");e.className="pending",e.setAttribute("part","pending"),e.setAttribute("role","status"),e.setAttribute("aria-label",this.#e.strings().thinking);for(let n=0;n<3;n+=1){let r=document.createElement("span");r.className="pending-dot",e.appendChild(r)}this.#a=e,this.ensureGroup().appendChild(e),this.updateEmptyState(),this.follow()}hidePending(){this.#a?.remove(),this.#a=null}showThoughts(){if(this.#l===null){this.#l=new Bs(this.#e.strings());let e=this.ensureGroup();e.insertBefore(this.#l.element,e.firstChild),this.updateEmptyState(),this.follow()}return this.#l}noticeIfSkillLoad(e){let n=is(e);return n===null?!1:(this.appendNotice("\u2728",re(this.#e.strings().usingSkill,{name:n}),"skill"),!0)}appendNotice(e,n,r,o){this.ensureGroup().appendChild(Ts(e,n,r,o)),this.updateEmptyState(),this.follow()}renderToolOutput(e,n){let r=Vs(()=>e(n.args),`tool ${n.name}`);if(r===null)return;let o=this.#n.get(n.id),i=o?.closest(".tool-group");if(i==null)o?.after(r);else{let a=this.#d.get(i);a===void 0&&(a=document.createComment(""),i.after(a),this.#d.set(i,a));let s=r instanceof DocumentFragment?[...r.children]:[r];a.before(r);for(let c of s)this.#f.set(c,i)}this.afterGrew()}afterGrew(){this.updateEmptyState(),this.follow()}cardFor(e){let n=this.#t.get(e.id);if(n!==void 0)return n;let r=this.#e.resolveTool(e.name)?.parameters[Pe],o=typeof r=="string"?r:this.#e.toolSummaries()[e.name]??this.#e.serverSummary(e.name)??Bd(e.name),i=new mo(e.name,e.args,o,this.#e.strings(),{formatPayload:a=>this.#e.formatToolPayload(a)});return this.#t.set(e.id,i),Zw(this.#e.toolDisplay())?this.#p().add(i.element,o):this.ensureGroup().appendChild(i.element),this.updateEmptyState(),this.follow(),i}revealStep(e){let n=e.element.closest(".tool-group");(n===null?void 0:this.#u.get(n))?.reveal()}#p(){let e=this.ensureGroup(),n=e.lastElementChild,r=n===null?void 0:this.#u.get(this.#f.get(n)??n);if(r!==void 0)return r;let o=new Zs(this.#e.strings());return this.#u.set(o.element,o),n===null?e.prepend(o.element):n.after(o.element),o}};var Ws=class{#e;#t=new Map;#n=new Set;#o=new Map;constructor(e){this.#e=e}register(e){this.#t.set(e.type,e),this.#n.delete(e.type)}has(e){return this.#t.has(e)}unhandledTypes(){return[...this.#n]}clearBlocks(){this.#o.clear()}draw(e,n,r){let o=this.#t.get(n);if(o===void 0){this.#n.add(n);return}let i=Vs(()=>o.render(r),`activity ${n}`);if(i===null){this.#r(e,n,o.removedNotice,r);return}let a=this.#o.get(e);a===void 0?this.#e.ensureGroup().appendChild(i):a.replaceWith(i),this.#o.set(e,i),this.#e.afterTranscriptGrew()}#r(e,n,r,o){let i=this.#o.has(e);this.#o.get(e)?.remove(),this.#o.delete(e),console.warn(`ag-ui-chat: activity ${e} (${n}) was not drawable and has been removed. A chart's points must each be a finite JSON number; a numeric column serialised as a string (a Decimal, typically) is rejected rather than coerced.`,o),i&&r!==void 0&&this.#e.appendNotice("\u{1F4C9}",r,"chart-undrawable")}};var qs=class extends Error{constructor(e){super(e),this.name="ConnectionLostError"}},Io=class{#e;#t;#n;#o;#r;#i;#a;#s=new Set;#l;#u;#d;#f;#p=!1;constructor(e){this.#e=e.agent,this.#t=e.handlers,this.#n=e.getTools??(()=>[]),this.#o=e.getContext??(()=>[]),this.#r=e.executeTool??null,this.#i=e.resolveInterrupts??null,this.#a=e.onPersist??(()=>{}),this.#l=e.connectionLostMessage??"Connection lost",this.#u=e.unfinishedMessage??"Not finished: the run ended or moved on before this tool call returned a result.",this.#d=e.declinedMessage??"User declined the action.";let n=e.maxToolRounds??Bn;this.#f=n>=1?Math.floor(n):Bn,this.#b();let r=e.onStateChanged;r!==void 0&&this.#e.subscribe({onStateChanged:({state:o})=>{r(o)}})}get state(){return this.#e.state}setState(e){this.#e.setState({...e})}get running(){return this.#e.isRunning}get messages(){return this.#e.messages}async send(e,n=[]){this.#p=!1;let r={id:Se(),role:"user",content:e,...n.length>0?{metadata:{attachments:n}}:{}};this.#e.addMessage(r),this.#E(),await this.#m()}truncateToLastUser(){let e=[...this.#e.messages],n=-1;for(let[o,i]of e.entries())i.role==="user"&&(n=o);if(n===-1)return null;let r=e.slice(0,n+1);return this.#a(r),this.#e.setMessages(r),r}async resume(){this.#p=!1,await this.#m()}addToolResult(e,n){this.#e.addMessage({id:Se(),role:"tool",content:n,toolCallId:e}),this.#E()}cancel(){this.#p=!0,this.#e.abortRun()}async#m(){try{await this.#_(),this.#p&&this.#c()}catch(e){this.#p||hR(e)?this.#c():this.#t.onError(e instanceof Error?e.message:String(e))}finally{this.#t.onSettled()}}#c(){this.#E(),this.#t.onCancelled()}#b(){let e=this.#e.messages,n=e.map(fR);n.some((r,o)=>r!==e[o])&&this.#e.setMessages(n)}#g(e){let n=this.#e.messages,r=ns(n,o=>({id:Se(),role:"tool",content:this.#u,toolCallId:o,metadata:{outcome:je.INTERRUPTED}}),e);r!==n&&(this.#e.setMessages([...r]),this.#E())}#y(e,n){for(let r of e){let o=r.toolCallId;o!==void 0&&n[r.id]?.status==="cancelled"&&this.#e.addMessage({id:Se(),role:"tool",content:this.#d,toolCallId:o,metadata:{outcome:je.DENIED}})}this.#E()}#E(){this.#a(this.#e.messages)}get annotatedMessages(){return this.messages}async#_(){let e,n=new Set;for(let r=0;r<this.#f;r+=1){if(this.#p)return;let o=[],i={terminal:!1,errored:!1,interrupts:[]},a={tools:this.#n(),context:this.#o()};if(e!==void 0&&(a.resume=e),this.#g(n),this.#p||(await this.#e.runAgent(a,this.#h(o,i)),e=void 0,n=new Set,this.#E(),this.#p))return;if(!i.terminal)throw new qs(this.#l);if(i.errored)return;if(i.interrupts.length>0){if(this.#i===null)return;let c=await this.#i(i.interrupts);if(this.#p){this.#y(i.interrupts,c);return}e=Ib(i.interrupts,c),n=new Set(i.interrupts.flatMap(({toolCallId:l})=>l??[]));continue}if(this.#r===null||o.length===0)return;let s=!1;for(let c of o){if(this.#p)return;let l=await this.#r(c);if(l!==null){if(l.halt===!0)return;this.#e.addMessage({id:Se(),role:"tool",content:l.content,toolCallId:c.id,...l.outcome===void 0?{}:{metadata:{outcome:l.outcome}}}),this.#E(),s=!0}}if(!s)return}}#h(e,n){let r=this.#t,o=this.#s,i=()=>this.#p,a=new Set,s;return{onRunInitialized(){r.onRunStart()},onRunStartedEvent({event:c}){s=c.runId},onTextMessageStartEvent({event:c}){o.has(c.messageId)&&console.warn(`<ag-ui-chat>: the server reused message id "${c.messageId}", which was already closed. Its content will be appended to that earlier message rather than starting a new one, and the merged result is what gets persisted. Issue a fresh id per message.`)},onTextMessageContentEvent({textMessageBuffer:c}){r.onTextDelta(c)},onTextMessageEndEvent({event:c,textMessageBuffer:l}){o.add(c.messageId),r.onTextEnd(l,{messageId:c.messageId,...s===void 0?{}:{runId:s}})},onToolCallEndEvent({event:c,toolCallName:l,toolCallArgs:u}){let f={id:c.toolCallId,name:l,args:u};e.push(f),r.onToolCall(f)},onToolCallResultEvent({event:c}){let l=c.metadata?.outcome;r.onToolResult(c.toolCallId,jn(c.content),l)},onActivitySnapshotEvent({event:c,messages:l}){if(l.some(f=>f.id===c.messageId&&f.role==="activity")){r.onActivityChanged(c.messageId,c.activityType,c.content);return}r.onActivity(c.activityType,c.content,c.messageId)},onActivityDeltaEvent({event:c}){a.add(c.messageId)},onCustomEvent({event:c}){r.onCustomEvent(c.name,c.value)},onSubagentStartedEvent({event:c}){r.onSubAgentStarted(c.subagentRunId,c.name,c.parentToolCallId??null)},onSubagentFinishedEvent({event:c}){r.onSubAgentFinished(c.subagentRunId)},onSubagentErrorEvent({event:c}){r.onSubAgentError(c.subagentRunId,c.message)},onMessagesSnapshotEvent({event:c}){r.onMessagesSnapshot(c.messages)},onMessagesChanged({messages:c}){if(a.size!==0){for(let l of a){let u=c.find(f=>f.id===l);u!==void 0&&u.role==="activity"&&r.onActivityChanged(l,u.activityType,u.content)}a.clear()}},onReasoningStartEvent(){r.onReasoningStart()},onReasoningMessageContentEvent({reasoningMessageBuffer:c}){r.onReasoningDelta(c)},onReasoningMessageEndEvent({reasoningMessageBuffer:c}){r.onReasoningDelta(c)},onReasoningEndEvent(){r.onReasoningEnd()},onRunFinishedEvent(c){n.terminal=!0,c.outcome==="interrupt"&&(n.interrupts=c.interrupts)},onRunErrorEvent({event:c}){n.terminal=!0,n.errored=!0,!i()&&r.onError(c.message)},onRunFinalized(){n.terminal=!0,r.onRunEnd()}}}};function hR(t){return t instanceof Error?t.name==="AbortError"||t instanceof TypeError&&/abort/i.test(t.message):!1}function fR(t){let{outcome:e,attachments:n,...r}=t;if(e===void 0&&n===void 0)return t;let o=r.metadata;return{...r,metadata:{...e===void 0?{}:{outcome:e},...n===void 0?{}:{attachments:n},...typeof o=="object"?o:{}}}}var qw="ag-ui-chat",yr="thread",Zd="threads",Ro="messages:",Ks="checkpoint:",Co="minted:",mR=60,gR=100,vR="New conversation",Yw=!1;function mt(t,e){try{sessionStorage.setItem(t,e)}catch{if(Yw)return;Yw=!0,console.warn("<ag-ui-chat>: the browser refused a sessionStorage write \u2014 the quota is full, or storage is disabled for this context. The conversation continues, but it will not survive a page reload. Deleting a long conversation from the history drawer frees the quota.")}}function Ys(t){return t===""?qw:`${qw}@${t}`}var rt=class t{#e;constructor(e=""){this.#e=Ys(e),e!==""&&t.adopt("",e)}static adopt(e,n){let r=`${Ys(e)}:`,o=`${Ys(n)}:`;for(let[i,a]of Kw(r)){let s=sessionStorage.getItem(i),c=o+a;s!==null&&sessionStorage.getItem(c)===null&&mt(c,s),sessionStorage.removeItem(i)}}static purge(e){for(let[n]of Kw(`${Ys(e)}:`))sessionStorage.removeItem(n)}threadId(){return sessionStorage.getItem(this.#r(yr))??this.newThread()}newThread(){let e=Se();return mt(this.#r(yr),e),mt(this.#r(Co+e),"1"),e}isUnsent(e){return sessionStorage.getItem(this.#r(Co+e))!==null&&sessionStorage.getItem(this.#r(Ro+e))===null}loadMessages(e){return Promise.resolve(this.#i(this.#r(Ro+e)))}saveMessages(e,n){mt(this.#r(Ro+e),JSON.stringify(n)),sessionStorage.removeItem(this.#r(Co+e)),this.#t(e,n)}loadCheckpoint(e){return this.#i(this.#r(Ks+e))}saveCheckpoint(e,n){let r=this.#r(Ks+e);if(n===null){sessionStorage.removeItem(r);return}mt(r,JSON.stringify(n))}clear(e){sessionStorage.removeItem(this.#r(Ro+e)),sessionStorage.removeItem(this.#r(Ks+e)),sessionStorage.removeItem(this.#r(Co+e)),this.#o(this.#n().filter(n=>n.threadId!==e)),sessionStorage.getItem(this.#r(yr))===e&&sessionStorage.removeItem(this.#r(yr))}listThreads(){let e=this.#n().sort((n,r)=>r.updatedAt-n.updatedAt).map(({threadId:n,title:r,updatedAt:o,preview:i})=>({threadId:n,title:r,updatedAt:o,preview:i}));return Promise.resolve(e)}setActiveThread(e){mt(this.#r(yr),e)}renameThread(e,n){let r=this.#n(),o=r.find(i=>i.threadId===e);o!==void 0&&(o.title=n,o.titleCustom=!0,this.#o(r))}#t(e,n){let r=this.#n(),o=r.find(s=>s.threadId===e),i=yR(n),a=Date.now();o===void 0?r.push({threadId:e,title:Xw(n),titleCustom:!1,preview:i,updatedAt:a}):(o.preview=i,o.updatedAt=a,o.titleCustom||(o.title=Xw(n))),this.#o(r)}#n(){return this.#i(this.#r(Zd))??[]}#o(e){let n=this.#r(Zd);if(e.length===0){sessionStorage.removeItem(n);return}mt(n,JSON.stringify(e))}#r(e){return`${this.#e}:${e}`}#i(e){let n=sessionStorage.getItem(e);if(n===null)return null;try{return JSON.parse(n)}catch{return null}}};function Kw(t){let e=[];for(let n=0;n<sessionStorage.length;n+=1){let r=sessionStorage.key(n);if(r===null||!r.startsWith(t))continue;let o=r.slice(t.length);bR(o)&&e.push([r,o])}return e}function bR(t){return t===yr||t===Zd||t.startsWith(Ro)||t.startsWith(Ks)||t.startsWith(Co)}function Xw(t){for(let e of t)if(e.role==="user"){let n=Jw(e.content);if(n!=="")return Qw(n,mR)}return vR}function yR(t){for(let e of[...t].reverse()){let n=Jw(e.content);if(n!=="")return Qw(n,gR)}return""}function Jw(t){return typeof t=="string"?t.replace(/\s+/g," ").trim():""}function Qw(t,e){return t.length<=e?t:`${t.slice(0,e-1).trimEnd()}\u2026`}function Vd(t){let e=t.headers??{},n=new Set;return new Nb({url:t.endpoint,headers:e,initialState:{...t.initialState??{}},fetch:(r,o)=>{let i=t.getHeaders?.(),a=[...new Set([...Object.keys(e),...Object.keys(i??{})])].sort();if(ts(r,a,t.trustedOrigins??[],n),i===void 0)return fetch(r,it(o,t.credentials));let s=new Headers(o?.headers);for(let[c,l]of Object.entries(i))s.set(c,l);return fetch(r,it({...o,headers:s},t.credentials))},...t.threadId!==void 0?{threadId:t.threadId}:{},...t.initialMessages!==void 0?{initialMessages:[...t.initialMessages]}:{}})}function eE(t,e){let n=t.getAttribute(e);return n!==null&&n!=="false"}function jd(t,e){let n=t.getAttribute(e);if(n===null)return null;try{return JSON.parse(n)}catch{return console.warn(`<ag-ui-chat>: ${e} is not valid JSON, so it was ignored entirely and the built-in default is being used. Check the quoting -- JSON inside an HTML attribute needs single quotes around the attribute value, or its own double quotes escaped.`),null}}function tE(t){let e=t.getAttribute("data-max-tool-rounds");return e===null?Bn:Number.parseInt(e,10)}var No=class{#e;#t;#n;#o;#r;#i=new Set;#a=new Map;constructor(e,n=()=>({}),r=new rt,o=()=>{},i=!0){this.#e=e.endsWith("/")?e:`${e}/`,this.#t=n,this.#n=r,this.#o=o,this.#r=i}threadId(){return this.#n.threadId()}setActiveThread(e){this.#n.setActiveThread(e)}newThread(){return es(this.#n)}isUnsent(e){return this.#n.isUnsent?.(e)===!0}saveMessages(e,n){this.#n.saveMessages(e,this.#r?n:[])}loadCheckpoint(e){return this.#n.loadCheckpoint(e)}saveCheckpoint(e,n){this.#n.saveCheckpoint(e,n)}renameThread(e,n){this.#n.renameThread(e,n),this.#a.set(e,n),this.#f(e,"PATCH",{title:n})}clear(e){this.#n.clear(e),this.#i.add(e),this.#f(e,"DELETE")}async listThreads(){let e=await this.#s();return e===null?this.#n.listThreads():e.filter(n=>!this.#i.has(n.thread_id)).map(n=>this.#u(n))}async loadMessages(e){if(this.#n.isUnsent?.(e)===!0)return null;let n=await this.#d(`${this.#e}${encodeURIComponent(e)}/`);if(n===null||!n.ok)return this.#n.loadMessages(e);let r=await this.#l(n);return r===null?this.#n.loadMessages(e):r.messages??null}async#s(){let e=await this.#d(this.#e);if(e===null||!e.ok)return null;let n=await this.#l(e);return n===null?null:n.threads??[]}async#l(e){try{return await e.json()}catch{return null}}#u(e){return{threadId:e.thread_id,title:this.#a.get(e.thread_id)??e.title,updatedAt:e.updated_at===null?Number.NaN:Date.parse(e.updated_at),preview:e.preview}}async#d(e){try{return await fetch(e,it({headers:this.#t()},this.#o()))}catch{return null}}async#f(e,n,r){let o=this.#t();try{await fetch(`${this.#e}${encodeURIComponent(e)}/`,it({method:n,headers:r===void 0?o:{...o,"content-type":"application/json"},body:r===void 0?null:JSON.stringify(r)},this.#o()))}catch{}}};function nE(){return{tools:[],serverSettled:new Set,invalidated:new Set,announcedOutcome:!1}}function wR(t,e){let n={};for(let[r,o]of Object.entries(t))n[r]=(...i)=>{e()&&o(...i)};return n}var Xs=class{#e;#t=nE();constructor(e){this.#e=e}detach(){this.#t=nE()}forClient(e){let n=this.#t,r=()=>n===this.#t,{onSettled:o,...i}=this.#n(n);return{...wR(i,r),onSettled:()=>{r()&&o(),this.#o(n,e)}}}#n(e){return{onRunStart:()=>{this.#e.running()||(e.announcedOutcome=!1,this.#e.announcer.announce(this.#e.strings().announceResponding)),this.#e.setRunning(!0),this.#e.transcript.ensureGroup(),this.#e.transcript.showPending()},onReasoningStart:()=>{this.#e.transcript.hidePending(),this.#e.transcript.showThoughts()},onReasoningDelta:n=>{this.#e.transcript.showThoughts().stream(n)},onReasoningEnd:()=>{},onTextDelta:n=>{this.#e.transcript.hidePending(),this.#e.transcript.collapseThoughts(),this.#e.stream.queue(n),this.#e.stream.countDelta()},onTextEnd:(n,r)=>{if(n===""){this.#e.stream.end();return}let o=this.#e.stream.into(n);this.#e.stream.deltas<=1&&this.#e.transcript.revealWords(o),Gs(o,this.#e.strings()),this.#e.actions.attach(o,r),this.#e.stream.end(),this.#e.noteUnread()},onToolCall:n=>{this.#e.transcript.hidePending(),!this.#e.transcript.noticeIfSkillLoad(n)&&(e.tools.push({id:n.id,name:n.name}),this.#e.transcript.cardFor(n))},onActivity:(n,r,o)=>{this.#e.activities.draw(o,n,r)},onCustomEvent:(n,r)=>{if(n===Ll){this.#r(e,r);return}if(n===Ip){this.#e.subagents.report(r);return}this.#e.element.dispatchEvent(new CustomEvent(Nl,{detail:{name:n,value:r},bubbles:!0,composed:!0}))},onSubAgentStarted:(n,r,o)=>{this.#e.subagents.start(n,r,o)},onSubAgentFinished:n=>{this.#e.subagents.finish(n)},onSubAgentError:(n,r)=>{this.#e.subagents.fail(n,r)},onMessagesSnapshot:()=>{this.#e.transcript.appendNotice("\u{1F504}",this.#e.strings().historyReplaced,"history-replaced")},onToolResult:(n,r,o)=>{let i=this.#e.transcript.card(n);i!==void 0&&(i.settle(lo(o),r),this.#e.transcript.markServerSettled(n),e.serverSettled.add(n),this.#e.transcript.showPending())},onActivityChanged:(n,r,o)=>{this.#e.activities.draw(n,r,o)},onRunEnd:()=>{this.#e.transcript.hidePending(),this.#e.stream.end()},onError:n=>{e.announcedOutcome=!0,this.#e.announcer.announce(this.#e.strings().announceFailed),this.#e.transcript.hidePending();let r=this.#e.appendMessage(Ve.ASSISTANT,`\u26A0\uFE0F ${n}`);r.classList.add("message--failed"),this.#e.actions.attach(r,{rateable:!1}),this.#e.transcript.revealWords(r),this.#e.stream.end()},onCancelled:()=>{e.announcedOutcome=!0,this.#e.announcer.announce(this.#e.strings().announceStopped),this.#e.transcript.hidePending(),this.#e.transcript.appendStoppedNote(),this.#e.stream.end()},onSettled:()=>{e.announcedOutcome||this.#e.announcer.announce(this.#e.strings().announceAnswerReady),this.#e.transcript.hidePending(),this.#e.setRunning(!1),this.#e.stream.end();for(let n of this.#e.transcript.cards())n.settled||n.settle(K.INTERRUPTED,this.#e.strings().callNotFinished);this.#e.transcript.closeGroup()}}}#o(e,n){let r=e.tools.map(({id:i,name:a})=>({name:a,side:e.serverSettled.has(i)?"server":"client"})),o=[...e.invalidated];e.tools.length=0,e.serverSettled.clear(),e.invalidated.clear(),this.#e.element.dispatchEvent(new CustomEvent(Rl,{detail:{threadId:n,tools:r,invalidated:o},bubbles:!0,composed:!0}))}#r(e,n){let r=n??{},o=Array.isArray(r.keys)?r.keys.filter(i=>typeof i=="string"):[];if(o.length!==0){for(let i of o)e.invalidated.add(i);this.#e.element.dispatchEvent(new CustomEvent(Ol,{detail:{keys:o,reason:typeof r.reason=="string"?r.reason:null},bubbles:!0,composed:!0}))}}};var Wd=new Set,Js=class{#e;#t="";#n=null;#o="";#r="";#i=null;constructor(e){this.#e=e}claim(){this.#t=this.#a()}release(){this.#n!==null&&(Wd.delete(this.#n),this.#n=null)}conversationNamespace(e){return e===""?this.#t:`${this.#t}#${e}`}scopeStore(e,n){if(!(e instanceof rt))return e;let r=this.conversationNamespace(n);return this.#i=r===""?e:new rt(r),this.#i}rescopeStore(e,n){return e!==this.#i?null:(this.#i=new rt(n),this.#i)}key(e){return this.#t===""?e:`${e}:${this.#t}`}readScopedItem(e){let n=sessionStorage.getItem(this.key(e));return n!==null||this.#t===""?n:sessionStorage.getItem(e)}readPreference(e){try{let n=localStorage.getItem(this.key(e));if(n!==null)return n}catch{}return this.readScopedItem(e)}writePreference(e,n){let r=this.key(e);try{localStorage.setItem(r,n)}catch{}mt(r,n)}clearPreference(e){let n=this.key(e);try{localStorage.removeItem(n)}catch{}try{sessionStorage.removeItem(n)}catch{}}#a(){let e=this.#e.id(),n=e!==""?e:this.#e.endpoint();return n===""?"":this.#r===n?this.#o:Wd.has(n)?(this.#r=n,this.#o=`${n}~${Se()}`,console.warn(`<ag-ui-chat>: another element on this page already stores its conversation under "${n}", so this one has been given a throwaway namespace of its own \u2014 the two would otherwise share a thread pointer, a history drawer and every message. Give each <ag-ui-chat> its own id to keep them apart and let this one restore its conversation across reloads.`),this.#o):(Wd.add(n),this.#n=n,n)}};var ER=["data-attachments-url","data-attachment-accept","data-attachment-max-bytes","data-transcribe-url","data-threads-url","data-threads-cache","data-tools-url","data-skills-url","data-skills","data-prompt-chips","data-slash-commands","data-theme-toggle","data-strings","data-icon-url"],Yd=["omit","same-origin","include"];function qd(t){return Yd.includes(t)}var rE="ag-ui-chat:collapsed",oE="ag-ui-chat:theme",aE=["light","dark","auto"];function xR(t){return t.split(/\s+/).filter(e=>aE.includes(e)).at(-1)}function iE(t,e){return[...t.split(/\s+/).filter(r=>r!==""&&!aE.includes(r)),e].join(" ")}var Oo=class extends HTMLElement{agentFactory=Vd;headers={};getHeaders=null;trustedOrigins=[];allowImages=!1;formatRelativeTime=null;autoConfirm=!1;askUser=!1;askUserRenderer=null;approvalRenderer=null;approveWithEdits=!1;confirmPredicate=null;getTools=()=>this.#A.defaultTools();getContext=()=>[...Jl(this.getPageMap,this.autoInjectPageMap)];routeMap=[];navigate=null;getPageMap=null;autoInjectPageMap=!0;conversationStore=new rt;uploadHandler=null;transcribeHandler=null;navigationResult=()=>({navigated:!0,url:window.location.href});skillContext=()=>({});toolSummaries={};formatToolPayload=null;strings={};resolvePageTarget=e=>document.querySelector(e);#e=new Set;#t=fe;#n=new ks({card:e=>this.#v.card(e),strings:()=>this.#t,follow:()=>this.#v.follow()});#o=new Ws({ensureGroup:()=>this.#v.ensureGroup(),afterTranscriptGrew:()=>this.#v.afterGrew(),appendNotice:(e,n,r)=>this.#v.appendNotice(e,n,r)});#r=new Os({element:this,strings:()=>this.#t,retry:()=>{this.retryLastTurn()},threadId:()=>this.#h.threadId});#i;#a=null;#s=[];#l=new Ss;#u=document.createElement("button");#d;#f=document.createElement("div");#p;#m;#c;#b;#g;#y;#E;#_;#h;#N;#M;#B;#k;#Z;#I;#L;#V=document.createElement("span");#U=0;#z;#v;#j;#ie;#me=document.createElement("span");#R;#x;#Q=[];#H=[];#W=document.createElement("div");#O=null;#ge="";#F=()=>{this.#x.publishVisualViewport(),!this.#x.dragging()&&this.#x.restoreLauncherPosition()};#ae;#q;#C=!1;#ee=new AbortController;#ve=!1;#se=null;#Y={};#be={};#le=null;#P=null;#D={};#T=!1;#w=null;#ye=null;#we=null;#ce=new ws;#A=new os({element:this,routeMap:()=>this.routeMap,navigate:()=>this.navigate,getPageMap:()=>this.getPageMap,resolvePageTarget:e=>this.resolvePageTarget(e),getTools:()=>this.getTools(),askUser:()=>this.askUser,askUserRenderer:()=>this.askUserRenderer,decision:this.#ce,setAsking:(e,n)=>this.#v.setAsking(e,n),ensureGroup:()=>this.#v.ensureGroup(),strings:()=>this.#t,hidePending:()=>this.#v.hidePending(),updateEmptyState:()=>this.#v.updateEmptyState(),follow:()=>this.#v.follow(),fetchInit:e=>this.#Te(e)});#Ee=new Fs({openBubble:()=>this.appendMessage(Ve.ASSISTANT,""),allowImages:()=>this.allowImages,follow:()=>this.#v.follow()});#xe=new Zn(this);#S=new Js({id:()=>this.id,endpoint:()=>this.endpoint});#G;constructor(){super(),this.#i=this.attachShadow({mode:"open"}),this.#p=document.createElement("div"),this.#m=document.createElement("div"),this.#c=document.createElement("textarea"),this.#b=document.createElement("button"),this.#g=document.createElement("span"),this.#N=document.createElement("div"),this.#M=document.createElement("button"),this.#B=document.createElement("input"),this.#k=document.createElement("div"),this.#ae=document.createElement("span"),this.#Z=document.createElement("button"),this.#I=document.createElement("button"),this.#L=document.createElement("span"),this.#z=document.createElement("div"),this.#v=new js({element:this,messages:this.#m,emptyWrap:this.#z,strings:()=>this.#t,allowImages:()=>this.allowImages,resolveTool:e=>this.#A.resolve(e),toolSummaries:()=>this.toolSummaries,serverSummary:e=>this.#A.summary(e),toolDisplay:()=>this.toolDisplay,formatToolPayload:e=>this.formatToolPayload?.(e)??null}),this.#j=new ss({element:this,transcript:this.#v,tools:this.#A,decision:this.#ce,strings:()=>this.#t,announce:e=>this.#l.announce(e),autoConfirm:()=>this.autoConfirm,confirmPredicate:()=>this.confirmPredicate,getPageMap:()=>this.getPageMap,navigate:()=>this.navigate,approveWithEdits:()=>this.approveWithEdits,approvalRenderer:()=>this.approvalRenderer,getContext:()=>this.getContext(),conversationStore:()=>this.conversationStore,threadId:()=>this.#h.threadId,tenure:()=>this.#Y,conversation:()=>this.#be}),this.#ie=new Xs({element:this,transcript:this.#v,stream:this.#Ee,actions:this.#r,activities:this.#o,subagents:this.#n,announcer:this.#l,strings:()=>this.#t,running:()=>this.#T,setRunning:e=>this.#X(e),appendMessage:(e,n)=>this.appendMessage(e,n),noteUnread:()=>this.#Be()}),this.#x=new _s({element:this,launcher:this.#I,root:this.#i,connected:()=>this.#C,collapsed:()=>this.collapsed,collapsible:()=>Lt(this.getAttribute("placement")).collapseTo!==null,strings:()=>this.#t,readPreference:e=>this.#S.readPreference(e),writePreference:(e,n)=>this.#S.writePreference(e,n),clearPreference:e=>this.#S.clearPreference(e),announceSurfaceChange:(e,n)=>this.#$e(e,n)}),this.#d=new vs({element:this,root:this.#i,messages:this.#m,messagesWrap:this.#f,input:this.#c,strings:()=>this.#t,autoGrow:()=>Yt(this.#c),quote:e=>this.quote(e)}),this.#R=new hs({element:this,chat:this.#p,slot:this.#k,fileInput:this.#B,button:this.#M,strings:()=>this.#t,uploadHandler:()=>this.uploadHandler,headersFor:e=>this.#K(e),credentialsOption:()=>this.#de()}),this.#q=new ms({element:this,slot:this.#ae,input:this.#c,strings:()=>this.#t,transcribeHandler:()=>this.transcribeHandler,headersFor:e=>this.#K(e),credentialsOption:()=>this.#de(),onInput:()=>this.#pe()}),this.registerActivityRenderer({type:Dl,render:e=>{let n=_R(e);return n===null?null:Ts("\u{1F5DC}",re(this.#t.historyCompacted,{count:n}),"compaction")}}),this.registerActivityRenderer({type:Ml,render:e=>ko(e,this.#t,n=>{this.sendMessage(n)})}),this.#y=new gs(e=>this.#G.apply(e)),this.#G=new qo({element:this,menu:this.#y,input:this.#c,hint:this.#N,strings:()=>this.#t,context:()=>this.skillContext(),flag:e=>eE(this,e),readJsonAttribute:e=>jd(this,e),fetchInit:e=>this.#Te(e),send:e=>{this.sendMessage(e)},submit:()=>{this.#he()},autoGrow:()=>Yt(this.#c)}),this.#E=new ys({onSelect:e=>{this.#h.switchThread(e)},onNew:()=>{this.newChat(),this.#h.refreshDrawer()},onRename:(e,n)=>{this.#h.renameThread(e,n)},onDelete:e=>{this.#h.deleteThread(e)}}),this.#_=new ao((e,n)=>{this.#h.continueRun(e,n).catch(r=>{console.warn("<ag-ui-chat>: continuing a run failed",r)})}),this.#h=new bs({element:this,drawer:this.#E,checkpoints:this.#_,transcript:this.#v,actions:this.#r,activities:this.#o,tools:this.#A,input:this.#c,hint:this.#N,strings:()=>this.#t,conversationStore:()=>this.conversationStore,formatRelativeTime:()=>this.formatRelativeTime,navigationResult:()=>this.navigationResult,headersFor:e=>this.#K(e),requestCredentials:()=>this.#te(),appendMessage:(e,n)=>this.appendMessage(e,n),announceTurn:e=>this.#ze(e,[]),recordTurn:e=>this.#Le(e),autoGrow:()=>Yt(this.#c),continuationEnded:()=>this.#J(),client:()=>this.#P,ensureClient:()=>this.#fe(),buildClient:e=>this.#De(e),releaseClient:()=>{this.#P=null},running:()=>this.#T||this.#w!==null,holdRun:e=>{let n={};return this.#w=n,this.#ye=e===null?null:{hold:n,restored:e},{release:()=>{this.#w===n&&(this.#w=null,this.#J())}}},cancelRun:()=>this.#$(),resetState:()=>this.#ne(),setRunning:e=>this.#X(e),threadChanged:(e,n)=>this.#Me(e,n)})}static get observedAttributes(){return["title-text","placement","credentials","user-key","user-name",...ER]}attributeChangedCallback(e,n,r){if(e==="credentials"){r!==null&&!qd(r)&&console.error(`<ag-ui-chat>: credentials="${r}" is not a fetch credentials mode (${Yd.join(" / ")}) \u2014 it is being ignored, so requests use the browser default and cross-origin cookies will not be sent.`);return}if(e==="placement"){this.#x.releaseOwnedAxes(),this.#x.releaseLauncherPosition(),Lt(this.getAttribute("placement")).collapseTo===null&&this.collapsed&&this.setCollapsed(!1),requestAnimationFrame(()=>this.#x.syncResizeAnchor());return}if(e==="title-text"){this.#g.textContent=r??this.#t.title,this.#V.textContent=this.#g.textContent;return}if(e==="user-name"){this.#Se();return}if(e==="user-key"){this.#C&&(n??"")!==(r??"")&&this.#Ie(n??"",r??"");return}n===r||!this.#C||console.warn(`<ag-ui-chat>: "${e}" was changed after the element connected, and is read only while connecting \u2014 this assignment has no effect. Set it before the element enters the DOM (in the markup, or on the element before appending it); frameworks that patch attributes after mount should bind it at creation. To apply a new value now, remove and re-insert the element.`)}registerTool(e){this.#A.register(e)}get sharedState(){return this.#_e()?.state??this.#D}set sharedState(e){this.#D={...e},this.#_e()?.setState(this.#D)}#_e(){return this.#h.continuation??this.#P}registerPageState(e){this.#A.registerPageState(e)}registerStateHook(e){this.registerPageState(e)}get endpoint(){return this.getAttribute("endpoint")??""}set endpoint(e){this.setAttribute("endpoint",e)}get userKey(){return this.getAttribute("user-key")??""}set userKey(e){this.setAttribute("user-key",e)}get userName(){return this.getAttribute("user-name")??""}set userName(e){this.setAttribute("user-name",e)}#Se(){let e=this.userName.trim();this.#me.textContent=e===""?this.#t.greetingNoName:re(this.#t.greeting,{name:e})}get credentials(){let e=this.getAttribute("credentials");return e!==null&&qd(e)?e:null}set credentials(e){if(e===null){this.removeAttribute("credentials");return}if(!qd(e))throw new TypeError(`<ag-ui-chat>: credentials must be one of ${Yd.map(n=>`"${n}"`).join(", ")} (got ${JSON.stringify(e)}).`);this.setAttribute("credentials",e)}#ue(){return{...this.headers,...this.getHeaders?.()}}#K(e){let n=this.#ue();return ts(e,Object.keys(n),this.trustedOrigins,this.#e),n}#te(){return this.credentials??void 0}#de(){let e=this.#te();return e===void 0?{}:{credentials:e}}#Te(e){return it({headers:this.#K(e)},this.#te())}get toolDisplay(){let e=this.getAttribute("data-tool-display");return e===Ct.INLINE||e===Ct.MINIMAL||e===Ct.COMPACT||e===Ct.FULL?e:Ct.GROUPED}set toolDisplay(e){this.setAttribute("data-tool-display",e)}get extraStyles(){return this.#s}set extraStyles(e){this.#s=[...e],this.#a!==null&&(this.#i.adoptedStyleSheets=[this.#a,...this.#s])}connectedCallback(){if(this.#ee=new AbortController,this.#ve&&this.#Ne(),this.#ve=!0,this.#S.claim(),this.#xe.join(),this.#x.restoreSize(),requestAnimationFrame(()=>{this.#x.restoreLauncherPosition(),this.#x.syncResizeAnchor()}),this.#t=Xu({...this.#He(),...this.strings}),this.getAttribute("data-theme-toggle")!==null){let r=this.#S.readPreference(oE),o=r===null?void 0:xR(r);o!==void 0&&this.setAttribute("theme",iE(this.getAttribute("theme")??"",o))}this.#Ge(),this.#E.setStrings(this.#t),this.#_.setStrings(this.#t),Lt(this.getAttribute("placement")).collapseTo!==null&&this.#Fe()&&this.setAttribute("collapsed",""),this.#Pe(),this.#G.init();let e=this.#se,n=e!==null&&e!==this.userKey;n&&this.#Ie(e,this.userKey),this.#se=this.userKey,this.conversationStore=this.#S.scopeStore(this.#ke(),this.userKey),window.addEventListener("resize",this.#F),window.visualViewport?.addEventListener("resize",this.#F),window.visualViewport?.addEventListener("scroll",this.#F),this.#x.publishVisualViewport(),this.#Ae(),this.#R.wire(this.#ee.signal),this.#q.wire(),this.#h.adoptActiveThread(),queueMicrotask(()=>this.#Ue()),this.#h.rehydrate(n&&e!==""?"rescope":"restore"),n&&this.#h.refreshDrawer(),this.#C=!0}#Ue(){this.#C&&(this.#A.fetchCatalog(),this.#G.fetch())}async reload(){this.#$(),this.#ne(),this.#X(!1),await Promise.all([this.#A.fetchCatalog(),this.#G.fetch(),this.#h.rehydrate("restore")])}disconnectedCallback(){this.#C=!1,this.#ee.abort(),window.removeEventListener("resize",this.#F),window.visualViewport?.removeEventListener("resize",this.#F),window.visualViewport?.removeEventListener("scroll",this.#F),this.#S.release(),this.#xe.leave(),this.#$(),this.#d.detachPageOffer(),this.#R.tray?.dispose(),this.#q.dispose(),this.#v.disposeScroller(),this.#l.dispose()}#He(){let e=jd(this,"data-strings");return typeof e=="object"&&e!==null?e:{}}quote(e){this.#d.insert(e)}offerQuoteInPage(e=document.body){return this.#d.offerInPage(e)}#Ae(){this.#le=null;let e=this.getAttribute("data-threads-url");if(e!==null){let n=this.conversationStore,r=new No(e,()=>this.#K(e),n,()=>this.#te(),this.getAttribute("data-threads-cache")!=="false");this.#le={remote:r,inner:n},this.conversationStore=r}}#ke(){let e=this.#le;return e!==null&&this.conversationStore===e.remote?e.inner:this.conversationStore}setSkills(e){this.#G.setClientSkills(e)}get collapsed(){return this.hasAttribute("collapsed")}set collapsed(e){this.setCollapsed(e)}setCollapsed(e,n={}){e&&Lt(this.getAttribute("placement")).collapseTo===null||(n.announce===!0&&e&&!this.collapsed&&this.#$e(this.#t.chatMinimised,null),e||this.#x.restoreLauncherPosition(),e?this.setAttribute("collapsed",""):this.removeAttribute("collapsed"),mt(this.#S.key(rE),e?"1":"0"),this.#re(0),this.dispatchEvent(new CustomEvent(Tl,{detail:{collapsed:e},bubbles:!0,composed:!0})))}get unread(){return this.#U}get threadId(){let e=this.#h.threadId;return e===""?null:e}get running(){return this.#T}#Fe(){let e=this.#S.readScopedItem(rE);return e!==null?e==="1":Lt(this.getAttribute("placement")).startsCollapsed&&!this.hasAttribute("data-start-open")}describeSurface(){return this.#x.describeSurface()}moveTo(e,n={}){return this.#x.moveTo(e,n)}resetSize(){this.#x.resetSize()}toggleCollapsed(){this.setCollapsed(!this.collapsed)}toggleTheme(){let e=this.getAttribute("theme")??"",n=e.split(/\s+/).includes("dark")?"light":"dark";this.setAttribute("theme",iE(e,n)),this.#S.writePreference(oE,n),this.#Ce()}#Ie(e,n){this.#se=n;let r=this.#C,o=this.#S.conversationNamespace(e),i=this.#S.conversationNamespace(n);if(e===""){rt.adopt(o,i),r&&this.#Re(i);return}this.#Y={},rt.purge(o),r&&this.#Re(i),this.#j.forgetWaivers(),this.#$(),this.#ne(),this.#D={},this.#c.value="",this.#pe(),this.#X(!1),this.#re(0),r&&(this.#q.dispose(),this.#q.wire(),this.#h.adoptActiveThread(),this.#h.rehydrate("rescope"),this.#h.refreshDrawer())}#Re(e){let n=this.#S.rescopeStore(this.#ke(),e);n!==null&&(this.conversationStore=n,this.#Ae())}#Ce(){let e=(this.getAttribute("theme")??"").split(/\s+/).includes("dark");this.#Z.replaceChildren(fr("theme","theme-icon",e?Mp:Pp,null))}openThreads(){this.#h.openThreads()}openCheckpoints(){this.#h.openCheckpoints()}closeThreads(){this.#E.close()}closeCheckpoints(){this.#_.close()}async switchThread(e){this.#C&&await this.#h.switchThread(e)}deleteThread(e){this.#C&&this.#h.deleteThread(e)}toggleCheckpoints(){if(this.#_.open_){this.#_.close();return}this.openCheckpoints()}newChat(){this.#$(),this.#h.reapUnsent(),this.#ne(),this.#h.startThread(),this.#X(!1),this.#re(0),this.#Me(this.#h.threadId,"new"),this.collapsed||this.#c.focus({preventScroll:!0})}#ne(){this.#Ne(),this.#Q.length=0,this.#O=null}#Ne(){this.#P=null,this.#ie.detach(),this.#be={},this.#Oe(),this.#h.forgetRestored()}#Oe(){this.#Ee.end(),this.#v.releaseTurn(),this.#n.clear(),this.#v.forgetCards(),this.#o.clearBlocks(),this.#r.forget(),this.#R.tray?.clear(),this.removeAttribute("data-composer-settling"),this.removeAttribute("data-restoring"),this.#v.empty()}async retryLastTurn(){if(this.#T||this.#w!==null||this.#h.continuation!==null)return!1;let e={};this.#w=e;try{let n=this.#fe(),r=n.truncateToLastUser();if(r===null||this.#w!==e)return!1;this.#Oe();for(let o of r)if(this.#h.replay(o),this.#w!==e)return!1;return await n.resume(),!0}finally{this.#w===e&&(this.#w=null,this.#J())}}appendMessage(e,n){return this.#v.append(e,n)}#Ge(){let{signal:e}=this.#ee;this.#p.className="chat",this.#p.setAttribute("part","panel");let n=this.getAttribute("title-text")??this.#t.title,r=this.getAttribute("data-theme-toggle")!==null,{header:o,checkpoints:i}=Gy({host:this,title:this.#g,titleText:n,iconUrl:this.getAttribute("data-icon-url"),strings:this.#t,withCheckpoints:this.#h.runs()!==null,themeToggle:r?this.#Z:null,signal:e,onHistory:()=>this.openThreads(),onCheckpoints:()=>this.toggleCheckpoints(),onNewChat:()=>this.newChat(),onCollapse:()=>this.toggleCollapsed(),onToggleTheme:()=>this.toggleTheme()});r&&this.#Ce(),this.#x.enablePanelDrag(o),Fw({messages:this.#m,jumpButton:this.#u,emptyWrap:this.#z,greetingText:this.#me,starters:Bw(this,this.#t,u=>{this.sendMessage(u)}),strings:this.#t}),this.#Se(),this.#d.mount(e),this.#v.mountScroller(this.#u,e),this.#l.mount(),this.#m.append(this.#z),this.#v.updateEmptyState();let a=Ub({input:this.#c,send:this.#b,attachButton:this.#M,fileInput:this.#B,voiceSlot:this.#ae,hint:this.#N,queuedRow:this.#W,attachSlot:this.#k,strings:this.#t,signal:e,onKeydown:u=>this.#Ze(u),onInput:()=>this.#pe(),onSend:()=>{if(this.#T){this.#$();return}this.#he()},onFilesPicked:()=>this.#R.onFilesPicked()}),s=document.createElement("slot");s.name="above-composer";let c=document.createElement("slot");c.name="footer",this.#f.className="messages-wrap",this.#f.replaceChildren(this.#m,this.#u,this.#d.button),this.#p.replaceChildren(o,this.#f,this.#y.palette,this.#y.chips,this.#N,this.#W,this.#k,s,a,c,this.#E.element,this.#_.element),this.#p.addEventListener("pointerdown",u=>{if(!this.#_.open_)return;let f=u.composedPath();f.includes(this.#_.element)||f.includes(i)||this.#_.close()},{signal:e}),By({launcher:this.#I,badge:this.#L,railLabel:this.#V,titleText:n,iconUrl:Vy(this),strings:this.#t,signal:e,onOpen:()=>this.setCollapsed(!1)}),this.#x.enableLauncherDrag(e),this.#x.mountResizeGrips(this.#p),this.#a=Fy(this.#i,this.#s);let l=this.#x.probe;l.className="viewport-probe",l.setAttribute("aria-hidden","true"),this.#i.replaceChildren(l,this.#l.region,this.#p,this.#I)}#Pe(){this.#I.setAttribute("aria-expanded",String(!this.collapsed));let e=this.#U;this.#L.textContent=e>9?"9+":String(e),this.#L.hidden=e===0||!Zy(this);let n=this.#L.hidden?this.#t.expand:re(this.#t.expandUnread,{count:e});this.#I.setAttribute("aria-label",n),this.#I.title=n}#re(e){this.#U=e,this.#Pe(),this.dispatchEvent(new CustomEvent(Al,{detail:{unread:e},bubbles:!0,composed:!0}))}#Be(){this.collapsed&&this.#re(this.#U+1)}#pe(){this.#y.onInput(this.#c.value),this.#N.hidden=!0,Yt(this.#c),this.#O=null}#Ze(e){if(this.#y.onKeydown(e)){e.preventDefault();return}if(e.key==="Escape"&&this.#T){e.preventDefault(),this.#$();return}if(e.key==="Enter"&&!e.shiftKey){e.preventDefault(),this.#he();return}this.#Ve(e)}#Ve(e){let n=e.key==="ArrowUp";if(!n&&e.key!=="ArrowDown"||this.#y.isOpen())return;let r=this.#Q;if(r.length===0||(this.#c.value!==this.#ge&&(this.#O=null),this.#O===null&&(!n||this.#c.value!=="")))return;let o=this.#O===null?0:this.#O+(n?1:-1);o>=r.length||(e.preventDefault(),this.#O=o<0?null:o,this.#c.value=o<0?"":r[o],this.#ge=this.#c.value,this.#c.setSelectionRange(this.#c.value.length,this.#c.value.length),Yt(this.#c))}#$(){this.#H.length=0,this.#oe(),this.#ce.abort(),this.#P?.cancel(),this.#w=null,this.#h.stopContinuation()}#Me(e,n){let r={threadId:e,previousThreadId:this.#we,reason:n};this.#we=e,this.dispatchEvent(new CustomEvent(Cl,{detail:r,bubbles:!0,composed:!0}))}#X(e){let n=this.#T&&!e;this.#T=e,e&&(this.#w=null);let r=e?this.#t.stop:this.#t.send;this.#b.title=r,this.#b.setAttribute("aria-label",r),this.#b.dataset.state=e?"running":"idle",this.toggleAttribute("data-running",e),n&&this.#J()}#J(){if(this.#T||this.#h.continuation!==null)return;let e=this.#H.shift();this.#oe(),e!==void 0&&this.sendMessage(e)}#oe(){this.#W.replaceChildren(),this.#W.hidden=this.#H.length===0;for(let[e,n]of this.#H.entries()){let r=document.createElement("button");r.type="button",r.className="queued-chip",r.setAttribute("part","queued-chip"),r.textContent=n,r.title=re(this.#t.removeQueued,{text:n}),r.setAttribute("aria-label",r.title),r.addEventListener("click",()=>{this.#H.splice(e,1),this.#oe()}),this.#W.appendChild(r)}}#Le(e){e!==""&&this.#Q[0]!==e&&this.#Q.unshift(e),this.#O=null}async#he(){let e=this.#c.value.trim(),n=this.#R.tray?.readyRefs()??[];if(!(e===""&&n.length===0)){if(this.#Le(e),this.#T||this.#w!==null||this.#h.continuation!==null){e!==""&&(this.#H.push(e),this.#oe(),this.#c.value="",Yt(this.#c));return}this.#c.value="",Yt(this.#c),this.#R.tray?.hasPending()===!0&&this.#v.appendNotice("\u{1F4CE}",re(this.#t.attachmentsStillUploading,{n:this.#R.tray.pendingCount()}),"attachment-pending"),this.#R.tray?.clearReady(),await this.sendMessage(e,n)}}async sendMessage(e,n=[]){if(e===""&&n.length===0)return!1;let r=this.#ye;if(r!==null&&this.#w===r.hold){let i={};return this.#w=i,await r.restored,this.#w!==i?!1:(this.#w=null,this.sendMessage(e,n))}if(this.#T||this.#w!==null||this.#h.continuation!==null)return!1;let o={};this.#w=o;try{if(this.#v.isEmpty()&&this.setAttribute("data-composer-settling",""),this.#ze(e,n),this.#w!==o)return!1;let i=this.endpoint!=="";return await this.#je(e,n),i}finally{this.#w===o&&(this.#w=null,this.#J())}}#ze(e,n){let r=this.appendMessage(Ve.USER,e);n.length>0&&r.appendChild(us(n)),this.dispatchEvent(new CustomEvent(Sl,{detail:{content:e,attachments:n},bubbles:!0,composed:!0}))}attachFile(e){return this.#R.attach(e)}async#je(e,n){if(this.endpoint===""){console.error('<ag-ui-chat>: no endpoint is set, so this message was not sent and no request was made. Point the element at your AG-UI mount with the endpoint attribute (endpoint="/agent/"), or assign chat.endpoint before sending.'),this.#v.appendNotice("\u26A0",this.#t.notConnected,"not-connected");return}await this.#fe().send(e,n)}#fe(){return this.#P===null&&(this.#P=this.#De({endpoint:this.endpoint,initialMessages:this.#h.restored,follows:[]})),this.#P}#De(e){let n=this.#h.threadId,r=this.#Y,o=this.agentFactory({endpoint:e.endpoint,headers:this.#ue(),getHeaders:()=>this.#ue(),trustedOrigins:this.trustedOrigins,...this.#de(),threadId:n,initialMessages:e.initialMessages,initialState:this.#D});return new Io({agent:o,handlers:this.#ie.forClient(n),getTools:()=>this.#A.advertise(),getContext:()=>this.#j.buildContext(),executeTool:i=>this.#j.execute(i),resolveInterrupts:i=>this.#j.resolveInterrupts(i),onPersist:i=>{if(r!==this.#Y)return;let a=[...e.follows,...i];this.conversationStore.saveMessages(n,a),e.onSaved?.(a)},onStateChanged:i=>{r===this.#Y&&this.#We(i)},connectionLostMessage:this.#t.connectionLost,unfinishedMessage:this.#t.callNotFinished,declinedMessage:this.#t.declinedAction,maxToolRounds:tE(this)})}#We(e){this.#D={...e},this.dispatchEvent(new CustomEvent(kl,{detail:{state:this.#D},bubbles:!0,composed:!0}))}#$e(e,n){this.#v.appendNotice("\u2922",e,"surface",n===null?void 0:{label:this.#t.undo,onActivate:n})}enableCharts(e=["tool","activity"]){let n=!this.#o.has(jo)&&!this.#A.has(ls);e.includes("activity")&&this.registerActivityRenderer({type:jo,render:r=>{let o=hr(r);return o===null?null:ro(o)},removedNotice:this.#t.chartUndrawable}),e.includes("tool")&&this.registerTool($b()),n&&this.isConnected&&this.reload()}registerActivityRenderer(e){this.#o.register(e)}get unhandledActivityTypes(){return this.#o.unhandledTypes()}};function _R(t){let e=t?.removed;return typeof e=="number"?e:null}function SR(){customElements.get(Bo)===void 0&&customElements.define(Bo,Oo)}async function TR(t,e,n={}){await Nt(t),await Wl(t,{...n,flashMs:n.flashMs??0}),await Vl(t,e,n)}async function AR(t,e={}){await Nt(t),await jl(t,e)}async function kR(t,e={}){await Nt(t),await ql(t,e)}async function IR(t,e,n={}){await Nt(t),await Yl(t,e,n)}async function RR(t,e,n={}){await Nt(t),await Kl(t,e,n)}function CR(t,e){t instanceof HTMLInputElement&&t.type==="checkbox"?Rr(t,!!e):sn(t,String(e)),t.dispatchEvent(new Event("input",{bubbles:!0})),t.dispatchEvent(new Event("change",{bubbles:!0}))}var NR="0.47.0";export{Il as ATTACHMENT_EVENT,Oo as AgUiChat,Io as AgUiClient,jo as CHART_ACTIVITY_TYPE,ls as CHART_TOOL_NAME,Yo as CHAT_CORNERS,Dl as COMPACTION_ACTIVITY_TYPE,Nl as CUSTOM_AGENT_EVENT,ao as CheckpointMenu,kr as ClientToolRegistry,qs as ConnectionLostError,fe as DEFAULT_UI_STRINGS,Bo as ELEMENT_TAG,Pl as FEEDBACK_EVENT,Ll as INVALIDATE_CUSTOM_NAME,Ol as INVALIDATE_EVENT,$l as LOAD_CAPABILITY_TOOL,NA as MAX_QUOTE_CHARS,iR as MAX_SUGGESTIONS,aR as MAX_SUGGESTION_CHARS,Bn as MAX_TOOL_ROUNDS,rn as MESSAGE_ACTIONS,Ve as MESSAGE_ROLE,Nr as PAGE_ACTIONS,Rl as RUN_FINISHED_EVENT,No as RemoteConversationStore,so as RunIndex,kl as STATE_EVENT,Sl as SUBMIT_EVENT,Ml as SUGGESTIONS_ACTIVITY_TYPE,rt as SessionStorageStore,Cl as THREAD_EVENT,Tl as TOGGLE_EVENT,K as TOOL_CALL_STATUS,Ct as TOOL_DISPLAY,je as TOOL_OUTCOME,mo as ToolCallCard,Al as UNREAD_EVENT,NR as VERSION,Zo as X_CONFIRM_KEY,Tr as X_DESTRUCTIVE_KEY,Ar as X_NAVIGATES_KEY,Pe as X_SUMMARY_KEY,ld as asQuote,bd as attachMessageActions,ud as attachQuoteOffer,hr as chartSpecFrom,AR as clickElement,Hl as createChatSurfaceTools,Vd as createHttpAgent,Xl as createPageActionTools,Jl as createPageMapContext,Jo as createPageStateTools,Ql as createRouteTools,cx as createStateHookTools,SR as defineAgUiChat,TR as fillField,ox as flash,Wl as focusWithFlash,jl as highlightThenClick,Wp as isChatCorner,rd as isDestructive,as as isNavigates,Xu as mergeUiStrings,Cs as messageActionBar,pd as messageAttachments,Qu as parseToolCatalog,Xo as prefersReducedMotion,kR as pressButton,ql as pressThenClick,Bd as prettifyToolName,oo as quotableSelection,io as relativeTime,ro as renderChart,Ao as renderMarkdown,ko as renderSuggestionChips,ed as requestApproval,nd as requestConfirmation,Ju as requestQuestion,Nt as scrollIntoCenterView,IR as selectControl,Yl as selectOption,CR as setControlValue,Rr as setNativeChecked,sn as setNativeValue,Bl as showHighlightOverlay,Gw as suggestionPrompts,RR as toggleCheckbox,Kl as toggleControl,lo as toolStatusFromOutcome,sd as transcribeAudio,Vl as typeInto,id as uploadAttachment};
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
  (*! @license DOMPurify 3.4.17 | (c) Cure53 and other contributors | Released under the Apache license 2.0 and Mozilla Public License 2.0 | github.com/cure53/DOMPurify/blob/3.4.17/LICENSE *)
  (*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE *)
*/
