var oE=Object.defineProperty;var Nl=(t,e)=>{for(var n in e)oE(t,n,{get:e[n],enumerable:!0})};var Yo="ag-ui-chat",Ol="ag-ui-submit",Ko="ag-ui-toggle",Ml="ag-ui-bar-height",Pl="ag-ui-unread",Ll="ag-ui-state",zl="ag-ui-attachments",Dl="ag-ui-run-finished",$l="ag-ui-thread",Ul="ag-ui-custom",Hl="ag-ui-invalidate",Gl="ag-ui-feedback",Fl="suggestions",Bl="ag_ui.invalidate",Fp="ag_ui.subagent",Et={STARTED:"started",TOOL_CALL:"tool_call",TOOL_RESULT:"tool_result",FINISHED:"finished",FAILED:"failed"},We={USER:"user",ASSISTANT:"assistant"},Cr="x-destructive",Xo="x-confirm",Le="x-summary",Nr="x-navigates",Jo="read_page",qn=10,an={COPY:"copy",RETRY:"retry",FEEDBACK:"feedback"},J={PENDING:"pending",DEFERRED:"deferred",DONE:"done",ERROR:"error",DECLINED:"declined",INTERRUPTED:"interrupted"},qe={SUCCESS:"success",FAILED:"failed",DENIED:"denied",INTERRUPTED:"interrupted"},Qe={UPLOADING:"uploading",READY:"ready",ERROR:"error"},Zl=10*1024*1024,Mt={GROUPED:"grouped",INLINE:"inline",MINIMAL:"minimal",COMPACT:"compact",FULL:"full"},Yn={INLINE:"inline",MINIMAL:"minimal",COMPACT:"compact",FULL:"full"},Vl="compaction",jl="load_capability",Bp='<svg class="glyph" viewBox="0 0 24 24" aria-hidden="true"><path d="M12 19.5V5m-6.5 6.5L12 5l6.5 6.5"/></svg>',Zp='<svg class="glyph glyph--solid" viewBox="0 0 24 24" aria-hidden="true"><rect x="7" y="7" width="10" height="10" rx="2.5"/></svg>',Vp='<svg class="glyph" viewBox="0 0 24 24" aria-hidden="true"><path d="M17 8.5V15a5 5 0 0 1-10 0V7a3 3 0 0 1 6 0v7.5a1 1 0 0 1-2 0V8.5"/></svg>',jp='<svg class="glyph" viewBox="0 0 24 24" aria-hidden="true"><path d="M12 4a3 3 0 0 1 3 3v5a3 3 0 0 1-6 0V7a3 3 0 0 1 3-3z"/><path d="M5 11v1a7 7 0 0 0 14 0v-1"/><path d="M12 19v3"/></svg>',Wp='<svg class="glyph" viewBox="0 0 24 24" aria-hidden="true"><path d="M20 14.5A8.5 8.5 0 0 1 9.5 4a8.5 8.5 0 1 0 10.5 10.5z"/></svg>',qp='<svg class="glyph" viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"/></svg>',Yp='<svg class="glyph" viewBox="0 0 24 24" aria-hidden="true"><path d="M4 5.5A2.5 2.5 0 0 1 6.5 3h11A2.5 2.5 0 0 1 20 5.5v8a2.5 2.5 0 0 1-2.5 2.5H9l-5 4z"/></svg>',Kp='<svg class="glyph" viewBox="0 0 24 24" aria-hidden="true"><rect x="9" y="9" width="11" height="11" rx="2"/><path d="M5 15V6a2 2 0 0 1 2-2h8"/></svg>',Xp='<svg class="glyph" viewBox="0 0 24 24" aria-hidden="true"><path d="M20 12a8 8 0 1 1-2.5-5.8"/><path d="M20 4v4h-4"/></svg>',Jp='<svg class="glyph" viewBox="0 0 24 24" aria-hidden="true"><path d="M7 10v10H4V10z"/><path d="M7 10l4.5-7a2 2 0 0 1 3.4 2L13.5 9H19a2 2 0 0 1 2 2.3l-1.1 6.4A2 2 0 0 1 17.9 20H7"/></svg>',Qp='<svg class="glyph" viewBox="0 0 24 24" aria-hidden="true"><path d="M17 14V4h3v10z"/><path d="M17 14l-4.5 7a2 2 0 0 1-3.4-2l1.4-4H5a2 2 0 0 1-2-2.3l1.1-6.4A2 2 0 0 1 6.1 4H17"/></svg>',eh='<svg class="glyph" viewBox="0 0 24 24" aria-hidden="true"><path d="M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8z"/><path d="M14 3v5h5"/></svg>',th='<svg class="glyph" viewBox="0 0 24 24" aria-hidden="true"><rect x="3.5" y="4.5" width="17" height="15" rx="2.5"/><circle cx="9" cy="10" r="1.5"/><path d="M4.5 17.5 9 13.5l3.5 3 3-2.5 4.5 4"/></svg>',nh='<svg class="glyph" viewBox="0 0 24 24" aria-hidden="true"><path d="M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8z"/><path d="M14 3v5h5"/><rect class="glyph--solid" x="7.5" y="13.5" width="9" height="4.5" rx="1"/></svg>',rh='<svg class="glyph" viewBox="0 0 24 24" aria-hidden="true"><path d="M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8z"/><path d="M14 3v5h5"/><path d="M8.5 13.5h7M8.5 17h4.5"/></svg>',Qo="chart",sn=24,oh=150,ih=2147483001,ei=5e3,dt=8;var iE=/\{([a-zA-Z_][a-zA-Z0-9_]*)\}/g;function oe(t,e){return t.replace(iE,(n,r)=>Object.hasOwn(e,r)?String(e[r]):n)}var aE=/\{([a-zA-Z_][a-zA-Z0-9_]*)\}/g;function ah(t,e){let n=[];return{text:t.replace(aE,(o,i)=>{let a=e[i];return a==null||a===""?(n.includes(i)||n.push(i),o):String(a)}),missing:n}}function sE(t){if(typeof t!="object"||t===null)return!1;let e=t;return typeof e.name=="string"&&typeof e.title=="string"&&(e.prompt===void 0||typeof e.prompt=="string")}function Wl(t){return Array.isArray(t)?t.filter(sE):[]}var ti=class{#e;#t=[];#n=[];#o=[];constructor(e){this.#e=e}setClientSkills(e){this.#o=e,this.#i()}init(){this.#e.menu.enableChips(this.#e.flag("data-prompt-chips")),this.#e.menu.enableSlash(this.#e.flag("data-slash-commands")),this.#n=this.#r(),this.#i()}async fetch(){let e=this.#e.element.getAttribute("data-skills-url");if(e!==null)try{let n=await fetch(e,this.#e.fetchInit(e));this.#t=Wl(await n.json()),this.#i()}catch{}}apply(e){let{input:n,hint:r}=this.#e;if(e.prompt===void 0){r.hidden=!0,this.#e.send(`/${e.name}`);return}let{text:o,missing:i}=ah(e.prompt,this.#e.context());if(i.length>0){r.textContent=oe(this.#e.strings().skillNeeds,{title:e.title,fields:i.join(", ")}),r.hidden=!1,n.value=o,this.#e.autoGrow(),n.focus(),this.#a(o);return}if(r.hidden=!0,n.value=o,this.#e.autoGrow(),e.sendImmediately===!1){n.focus();return}this.#e.submit()}#r(){return Wl(this.#e.readJsonAttribute("data-skills"))}#i(){let e=new Map;for(let n of[...this.#t,...this.#n,...this.#o])e.set(n.name,n);this.#e.menu.setSkills([...e.values()])}#a(e){let n=e.indexOf("{");this.#e.input.setSelectionRange(n,e.indexOf("}",n)+1)}};var ni=["top-left","top-right","bottom-left","bottom-right"];function sh(t){return ni.includes(t)}function ql(t){return[{name:"read_chat_surface",description:"Describe the chat panel you are speaking from: its placement, whether it is collapsed, whether it can be moved, and the box it occupies. Read this before moving or minimising yourself, since a full-screen panel has nowhere to move to. Read-only.",parameters:{type:"object",properties:{},required:[],[Le]:"Read the chat's own position"},handler:()=>t.describeSurface()},{name:"move_chat",description:"Move your own panel to a corner, to uncover something the user needs to see. `corner` is top-left, top-right, bottom-left or bottom-right. Answers `moved: false` with a reason when the placement owns its position or the panel fills the screen; check `read_chat_surface` first, and prefer minimise_chat when there is nowhere to move to.",parameters:{type:"object",properties:{corner:{type:"string",enum:[...ni]}},required:["corner"],[Le]:"Move the chat out of the way"},handler:e=>{let n=String(e.corner??""),r=t.describeSurface();return sh(n)?r.movable?{moved:t.moveTo(n,{announce:!0}),corner:n}:{moved:!1,reason:r.fullBleed?"the panel fills the screen, so there is nowhere to move it to":r.collapseTo==="bar"||r.collapseTo==="none"?"the panel is docked: it rises from the page's bottom bar and stays there":r.draggable===!1?"this page has turned off moving the panel":`the "${r.placement??""}" placement owns the panel's position`,suggestion:r.collapsible?"minimise_chat":null}:{moved:!1,reason:`"${n}" is not a corner; use one of ${ni.join(", ")}`}}},{name:"minimise_chat",description:"Collapse your own panel, so the user can see the whole page. The user reopens it from where it collapsed to (a launcher, a rail, a bottom bar or the page's own control). Answers `minimised: false` when the placement has no collapsed state, which is the case for a full-page chat.",parameters:{type:"object",properties:{},required:[],[Le]:"Minimise the chat"},handler:()=>t.describeSurface().collapsible?(t.setCollapsed(!0,{announce:!0}),{minimised:!0}):{minimised:!1,reason:"this placement has no collapsed state, so there is nothing to minimise to"}},{name:"restore_chat",description:"Open your own panel again after minimising it.",parameters:{type:"object",properties:{},required:[],[Le]:"Restore the chat"},handler:()=>(t.setCollapsed(!1),{restored:!0})}]}var Or=class{#e=new Map;register(e){this.#e.set(e.name,e)}has(e){return this.#e.has(e)}get(e){let n=this.#e.get(e);if(n===void 0)throw new Error(`tool "${e}" is not registered`);return n}tools(){return[...this.#e.values()].map(e=>({name:e.name,description:e.description,parameters:e.parameters}))}};var Yl=new Set,Kn=class{#e;constructor(e){this.#e=e}join(){Yl.add(this.#e)}leave(){Yl.delete(this.#e)}static latest(){let e=null;for(let n of Yl)e=n;return e}};var lh="--ag-ui-highlight-ring-color",lE="--ag-ui-accent",Xl="--_accent",ch="#4f46e5";function ln(t,e){let n=ec(t,lh);if(n!=="")return n;let r=e??Kn.latest(),o=r===null?"":ri(r,lh);if(o!=="")return o;let i=ec(t,lE);if(i!=="")return i;if(r===null)return ch;let a=ri(r,Xl);return a===""?ch:uE(r,a,t)}var cE=3,uh=.1;function uE(t,e,n){let r=document.createElement("canvas").getContext("2d",{willReadFrequently:!0});if(r===null)return e;let o=T=>{r.clearRect(0,0,1,1),r.fillStyle="rgb(0 0 0 / 0)",r.fillStyle=T,r.fillRect(0,0,1,1);let[E=0,H=0,_=0,f=0]=r.getImageData(0,0,1,1).data;return[E,H,_,f/255]},i=dE(n,o),a=T=>Kl(Jl(T,i),i)>=cE,l=[e,ri(t,Xl,"light"),ri(t,Xl,"dark")].find(T=>a(o(T)));if(l!==void 0)return l;let c=Jl(o(e),i),u=[0,0,0,1],p=[255,255,255,1],v=Kl(u,i)>Kl(p,i)?u:p,m=1;for(;!a(Ql(c,v,m*uh));)m+=1;let[h,y,k]=Ql(c,v,m*uh);return`rgb(${h}, ${y}, ${k})`}function dE(t,e){let n=[];for(let i=dh(t);i!==null;i=dh(i)){let a=e(window.getComputedStyle(i).backgroundColor);if(n.push(a),a[3]===1)break}let r=document.createElement("span");r.hidden=!0,r.style.color="Canvas",document.documentElement.appendChild(r);let o=e(window.getComputedStyle(r).color);r.remove();for(let i of n.reverse())o=Jl(i,o);return o}function dh(t){if(t.parentElement!==null)return t.parentElement;let e=t.getRootNode();return e instanceof ShadowRoot?e.host:null}function Jl(t,e){return Ql(e,t,t[3])}function Ql(t,e,n){let r=o=>Math.round(t[o]+(e[o]-t[o])*n);return[r(0),r(1),r(2),1]}function ph([t,e,n]){let r=o=>{let i=o/255;return i<=.04045?i/12.92:((i+.055)/1.055)**2.4};return .2126*r(t)+.7152*r(e)+.0722*r(n)}function Kl(t,e){let[n,r]=[ph(t),ph(e)];return(Math.max(n,r)+.05)/(Math.min(n,r)+.05)}function ec(t,e){return window.getComputedStyle(t).getPropertyValue(e).trim()}function ri(t,e,n){let r=ec(t,e),o=t.shadowRoot;if(r===""||o===null)return r;let i=document.createElement("span");if(i.hidden=!0,n!==void 0&&(i.style.colorScheme=n),i.style.color=r,i.style.color==="")return"";o.appendChild(i);let a=window.getComputedStyle(i).color;return i.remove(),a}function Mr(t,e,n){let r=window.getComputedStyle(t).getPropertyValue(e).trim();return r===""?n:r}var pE=4;function tc(t,e={}){let n=document.createElement("div");n.setAttribute("data-ag-ui-highlight",""),n.setAttribute("aria-hidden","true"),n.style.cssText=["position: fixed","inset: 0","pointer-events: none",`z-index: ${Mr(t,"--ag-ui-highlight-z-index",String(ih))}`].join(";");let r=document.createElement("div"),o=document.createElement("div");n.className="ag-ui-highlight",r.className="ag-ui-highlight-scrim",o.className="ag-ui-highlight-ring",e.scrim===!0&&n.append(r),n.append(o);let i=e.ringWidth??Number.parseFloat(Mr(t,"--ag-ui-highlight-ring-width","3")),a=e.flowMs??Number.parseFloat(Mr(t,"--ag-ui-highlight-flow-ms","2400")),s=()=>{let u=t.getBoundingClientRect(),p=e.padding??pE,v=e.radius??Number.parseFloat(getComputedStyle(t).borderRadius),m=u.left-p,h=u.top-p,y=u.width+p*2,k=u.height+p*2;e.scrim===!0&&(r.style.cssText=["position: absolute","inset: 0",`background: ${Mr(t,"--ag-ui-highlight-scrim","rgba(15, 15, 25, 0.45)")}`,`clip-path: path(evenodd, '${mE(m,h,y,k,v+p)}')`].join(";")),o.style.cssText=["position: absolute",`left: ${m}px`,`top: ${h}px`,`width: ${y}px`,`height: ${k}px`,`border-radius: ${v+p}px`,`border: ${i}px solid transparent`,"box-sizing: border-box",fE(t,e)].join(";")};s();let l=null;e.gradient===!0&&!window.matchMedia("(prefers-reduced-motion: reduce)").matches&&(l=o.animate([{backgroundPosition:"100% 0"},{backgroundPosition:"-100% 0"}],{duration:a,iterations:Number.POSITIVE_INFINITY,easing:"linear"}));let c={capture:!0,passive:!0};return window.addEventListener("scroll",s,c),window.addEventListener("resize",s,c),document.body.appendChild(n),()=>{window.removeEventListener("scroll",s,c),window.removeEventListener("resize",s,c),l?.cancel(),n.remove()}}function hE(t){return t===void 0?null:CSS.supports("color",t)?t:null}function fE(t,e){let n=hE(e.color)??ln(t,e.chat);if(e.gradient!==!0)return`border-color: ${n}`;let r=Mr(t,"--ag-ui-highlight-gradient",`linear-gradient(115deg, transparent 20%, ${n} 50%, transparent 80%)`),o="linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0)";return[`background-image: ${r}`,"background-origin: border-box","background-size: 300% 100%",`-webkit-mask: ${o}`,`mask: ${o}`,"-webkit-mask-composite: xor","mask-composite: exclude","background-position: 50% 0"].join(";")}function mE(t,e,n,r,o){let i=Math.max(0,Math.min(o,n/2,r/2)),a=t+n,s=e+r,l=`M 0 0 H ${window.innerWidth} V ${window.innerHeight} H 0 Z`,c=[`M ${t+i} ${e}`,`H ${a-i}`,`A ${i} ${i} 0 0 1 ${a} ${e+i}`,`V ${s-i}`,`A ${i} ${i} 0 0 1 ${a-i} ${s}`,`H ${t+i}`,`A ${i} ${i} 0 0 1 ${t} ${s-i}`,`V ${e+i}`,`A ${i} ${i} 0 0 1 ${t+i} ${e}`,"Z"].join(" ");return`${l} ${c}`}function oi(t,e){return Object.getOwnPropertyDescriptor(t,e).set}var gE=oi(HTMLInputElement.prototype,"value"),vE=oi(HTMLTextAreaElement.prototype,"value"),bE=oi(HTMLSelectElement.prototype,"value"),yE=oi(HTMLInputElement.prototype,"checked");function cn(t,e){t instanceof HTMLTextAreaElement?vE.call(t,e):t instanceof HTMLSelectElement?bE.call(t,e):gE.call(t,e)}function Pr(t,e){yE.call(t,e)}function Xn(t){return new Promise(e=>{setTimeout(e,t)})}function ii(){return window.matchMedia("(prefers-reduced-motion: reduce)").matches}function nc(t){return t<=0||ii()?Promise.resolve():Xn(t)}function hh(t,e){return`0 0 0 3px color-mix(in srgb, ${ln(t,e)} 40%, transparent)`}async function rc(t,e,n={}){let r=n.charDelayMs??35;cn(t,""),t.dispatchEvent(new Event("input",{bubbles:!0}));for(let o of e)cn(t,t.value+o),t.dispatchEvent(new Event("input",{bubbles:!0})),r>0&&await Xn(r);t.dispatchEvent(new Event("change",{bubbles:!0}))}async function oc(t,e={}){let n=e.highlightMs??280,r=t.style.outline,o=t.style.outlineOffset;t.style.outline=`2px solid ${ln(t,e.chat)}`,t.style.outlineOffset="2px",await Xn(n),t.style.outline=r,t.style.outlineOffset=o,t.click()}var wE=600,xE=100;function Pt(t,e={}){let n=ii();return t.scrollIntoView({block:"center",inline:"nearest",behavior:n?"auto":"smooth"}),n?Promise.resolve():new Promise(r=>{let o,i=()=>{clearTimeout(o),document.removeEventListener("scroll",a,!0),document.removeEventListener("scrollend",i,!0),r()},a=()=>{document.removeEventListener("scroll",a,!0),clearTimeout(o),o=setTimeout(i,e.settleMs??wE)};o=setTimeout(i,xE),document.addEventListener("scroll",a,!0),document.addEventListener("scrollend",i,!0)})}var EE=1200,_E=1/3;async function fh(t,e,n){(e.focus??n)&&t.focus({preventScroll:!0});let r=e.flashMs??EE;if(r<=0)return;if(e.scrim===!0||e.gradient===!0){let c=tc(t,{scrim:e.scrim===!0,gradient:e.gradient===!0,...e.color===void 0?{}:{color:e.color},...e.ringPadding===void 0?{}:{padding:e.ringPadding},...e.chat===void 0?{}:{chat:e.chat}});await Xn(r),c();return}let o=t.style.outline,i=t.style.outlineOffset,a=t.style.transition,s=e.color??ln(t,e.chat);t.style.outline=`3px solid ${s}`,t.style.outlineOffset="2px";let l=ii()?0:Math.round(r*_E);await Xn(r-l),l>0&&(t.style.transition=`outline-color ${l}ms ease-out`,t.style.outline="3px solid transparent",await Xn(l)),t.style.outline=o,t.style.outlineOffset=i,t.style.transition=a}function SE(t,e={}){return fh(t,e,!1)}function ic(t,e={}){return fh(t,e,!0)}async function ac(t,e={}){let n=e.pressMs??140,r=t.style.transform,o=t.style.transition,i=t.style.boxShadow;t.style.transition="transform 80ms ease",t.style.transform="scale(0.96)",t.style.boxShadow=hh(t,e.chat),await nc(n),t.style.transform=r,t.style.transition=o,t.style.boxShadow=i,t.click()}function TE(t,e){for(let n of Array.from(t.options))if(n.value===e||n.text===e)return n;return null}async function sc(t,e,n={}){let r=TE(t,e);if(r===null)throw new Error(`no <option> matching "${e}"`);let o=n.highlightMs??220,i=t.style.outline,a=t.style.outlineOffset;t.style.outline=`2px solid ${ln(t,n.chat)}`,t.style.outlineOffset="2px",await nc(o),cn(t,r.value),t.dispatchEvent(new Event("input",{bubbles:!0})),t.dispatchEvent(new Event("change",{bubbles:!0})),t.style.outline=i,t.style.outlineOffset=a}async function lc(t,e,n={}){let r=n.flashMs??200,o=t.style.boxShadow;t.style.boxShadow=hh(t,n.chat),await nc(r),Pr(t,e),t.dispatchEvent(new Event("input",{bubbles:!0})),t.dispatchEvent(new Event("change",{bubbles:!0})),t.style.boxShadow=o}var zr={SCROLL:"scroll",DRAG:"drag",CHAT:"chat"};function cc(t,e){let n=[];return t.has(zr.SCROLL)&&n.push(kE(e)),t.has(zr.DRAG)&&n.push(AE(e)),n}function kE(t){return{name:"scroll_to",description:"Scroll a target into view. `target` is `top`, `bottom`, or a CSS selector / page-map element id. Read-only: it changes nothing on the page.",parameters:{type:"object",properties:{target:{type:"string"}},required:["target"],[Le]:"Scroll into view"},handler:e=>{let n=String(e.target??"");if(n==="top"||n==="bottom"){let o=n==="top"?0:document.body.scrollHeight;return window.scrollTo({top:o,behavior:"smooth"}),{scrolled:!0,target:n}}let r=t(n);if(r===null)throw new Error(`no element matching "${n}"`);return Pt(r),{scrolled:!0,target:n}}}}function AE(t){return{name:"drag_and_drop",description:"Drag the `from` element onto the `to` element (CSS selectors or page-map element ids), firing the page's native drag-and-drop. Use for reordering sortable lists. The page decides what the drop commits.",parameters:{type:"object",properties:{from:{type:"string"},to:{type:"string"}},required:["from","to"],[Le]:"Drag and drop"},handler:e=>{let n=String(e.from??""),r=String(e.to??""),o=t(n);if(o===null)throw new Error(`no element matching "${n}"`);let i=t(r);if(i===null)throw new Error(`no element matching "${r}"`);return IE(o,i),{dragged:!0,from:n,to:r}}}}function IE(t,e){let n=new DataTransfer;Lr(t,"dragstart",n),Lr(e,"dragenter",n),Lr(e,"dragover",n),Lr(e,"drop",n),Lr(t,"dragend",n)}function Lr(t,e,n){let r=new Event(e,{bubbles:!0,cancelable:!0});r.dataTransfer=n,t.dispatchEvent(r)}function uc(t,e){return!e||t===null?[]:[{description:"page_map",value:JSON.stringify(t())}]}function ai(t){let e=[{name:`read_${t.name}`,description:`Read the "${t.name}" state.`,parameters:{type:"object",properties:{},required:[],[Le]:`Read ${t.name}`},handler:()=>t.read()}],n=t.write;return n!==void 0&&e.push({name:`set_${t.name}`,description:`Update the "${t.name}" state.`,parameters:{...t.schema??{type:"object"},[Cr]:!0,[Le]:`Update ${t.name}`},handler:r=>n(r)}),e}var RE=ai;var mh=/:([A-Za-z_][A-Za-z0-9_]*)/g;function CE(t){return[...t.matchAll(mh)].map(e=>e[0].slice(1))}function NE(t,e,n){let r={...n};return{path:e.replace(mh,(i,a)=>{let s=n[a];if(s==null||String(s)==="")throw new Error(`route "${t}" requires path param "${a}"`);return delete r[a],encodeURIComponent(String(s))}),leftover:r}}function OE(t,e){let n=new URLSearchParams;for(let[o,i]of Object.entries(e))n.set(o,String(i));let r=n.toString();return r===""?t:`${t}?${r}`}function dc(t,e){return[{name:"list_routes",description:"List the routes the app can navigate to. Each route's `pathParams` names the dynamic segments to pass as `params` to `navigate_to_route`.",parameters:{type:"object",properties:{},required:[],[Le]:"List pages"},handler:()=>t().map(n=>({...n,pathParams:CE(n.path)}))},{name:"navigate_to_route",description:"Navigate to one of the app's routes by its id, filling any dynamic `:name` path segments (and extra query params) from `params`.",parameters:{type:"object",properties:{route_id:{type:"string"},params:{type:"object"}},required:["route_id"],[Nr]:!0,[Le]:"Navigate"},handler:n=>{let r=n.route_id,o=t().find(u=>u.id===r);if(o===void 0)throw new Error(`unknown route "${String(r)}"`);let i=n.params??{},{path:a,leftover:s}=NE(o.id,o.path,i),l=OE(a,s),c=e();return c!==null?c(l):window.location.assign(l),{navigated:!0,path:l}}}]}var Ue=[];for(let t=0;t<256;++t)Ue.push((t+256).toString(16).slice(1));function gh(t,e=0){return(Ue[t[e+0]]+Ue[t[e+1]]+Ue[t[e+2]]+Ue[t[e+3]]+"-"+Ue[t[e+4]]+Ue[t[e+5]]+"-"+Ue[t[e+6]]+Ue[t[e+7]]+"-"+Ue[t[e+8]]+Ue[t[e+9]]+"-"+Ue[t[e+10]]+Ue[t[e+11]]+Ue[t[e+12]]+Ue[t[e+13]]+Ue[t[e+14]]+Ue[t[e+15]]).toLowerCase()}var pc,ME=new Uint8Array(16);function hc(){if(!pc){if(typeof crypto>"u"||!crypto.getRandomValues)throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");pc=crypto.getRandomValues.bind(crypto)}return pc(ME)}var PE=typeof crypto<"u"&&crypto.randomUUID&&crypto.randomUUID.bind(crypto),fc={randomUUID:PE};function LE(t,e,n){if(fc.randomUUID&&!e&&!t)return fc.randomUUID();t=t||{};let r=t.random??t.rng?.()??hc();if(r.length<16)throw new Error("Random bytes length must be >= 16");if(r[6]=r[6]&15|64,r[8]=r[8]&63|128,e){if(n=n||0,n<0||n+16>e.length)throw new RangeError(`UUID byte range ${n}:${n+15} is out of buffer bounds`);for(let o=0;o<16;++o)e[n+o]=r[o];return e}return gh(r)}var Bt=LE;var b=(function(t){return t.TEXT_MESSAGE_START="TEXT_MESSAGE_START",t.TEXT_MESSAGE_CONTENT="TEXT_MESSAGE_CONTENT",t.TEXT_MESSAGE_END="TEXT_MESSAGE_END",t.TEXT_MESSAGE_CHUNK="TEXT_MESSAGE_CHUNK",t.TOOL_CALL_START="TOOL_CALL_START",t.TOOL_CALL_ARGS="TOOL_CALL_ARGS",t.TOOL_CALL_END="TOOL_CALL_END",t.TOOL_CALL_CHUNK="TOOL_CALL_CHUNK",t.TOOL_CALL_RESULT="TOOL_CALL_RESULT",t.STATE_SNAPSHOT="STATE_SNAPSHOT",t.STATE_DELTA="STATE_DELTA",t.MESSAGES_SNAPSHOT="MESSAGES_SNAPSHOT",t.ACTIVITY_SNAPSHOT="ACTIVITY_SNAPSHOT",t.ACTIVITY_DELTA="ACTIVITY_DELTA",t.RAW="RAW",t.CUSTOM="CUSTOM",t.RUN_STARTED="RUN_STARTED",t.RUN_FINISHED="RUN_FINISHED",t.RUN_ERROR="RUN_ERROR",t.STEP_STARTED="STEP_STARTED",t.STEP_FINISHED="STEP_FINISHED",t.REASONING_START="REASONING_START",t.REASONING_MESSAGE_START="REASONING_MESSAGE_START",t.REASONING_MESSAGE_CONTENT="REASONING_MESSAGE_CONTENT",t.REASONING_MESSAGE_END="REASONING_MESSAGE_END",t.REASONING_MESSAGE_CHUNK="REASONING_MESSAGE_CHUNK",t.REASONING_END="REASONING_END",t.REASONING_ENCRYPTED_VALUE="REASONING_ENCRYPTED_VALUE",t.SUBAGENT_STARTED="SUBAGENT_STARTED",t.SUBAGENT_FINISHED="SUBAGENT_FINISHED",t.SUBAGENT_ERROR="SUBAGENT_ERROR",t})({}),un="1.0";var zE={TextMessageStartEvent:{optional:["timestamp","rawEvent","metadata","subagentRunId","role","name"],fields:{}},TextMessageContentEvent:{optional:["timestamp","rawEvent","metadata","subagentRunId"],fields:{}},TextMessageEndEvent:{optional:["timestamp","rawEvent","metadata","subagentRunId"],fields:{}},TextMessageChunkEvent:{optional:["timestamp","rawEvent","metadata","subagentRunId","messageId","role","delta","name"],fields:{}},ToolCallStartEvent:{optional:["timestamp","rawEvent","metadata","subagentRunId","parentMessageId"],fields:{}},ToolCallArgsEvent:{optional:["timestamp","rawEvent","metadata","subagentRunId"],fields:{}},ToolCallEndEvent:{optional:["timestamp","rawEvent","metadata","subagentRunId"],fields:{}},ToolCallChunkEvent:{optional:["timestamp","rawEvent","metadata","subagentRunId","toolCallId","toolCallName","parentMessageId","delta"],fields:{}},TextPart:{optional:["id","metadata"],fields:{}},DataSource:{optional:[],fields:{}},UrlSource:{optional:["mimeType"],fields:{}},FileSource:{optional:["provider","mimeType"],fields:{}},PartSource:{discriminator:"type",variants:{data:"DataSource",url:"UrlSource",file:"FileSource"}},ImagePart:{optional:["id","metadata"],fields:{source:"PartSource"}},AudioPart:{optional:["id","metadata"],fields:{source:"PartSource"}},VideoPart:{optional:["id","metadata"],fields:{source:"PartSource"}},DocumentPart:{optional:["id","metadata"],fields:{source:"PartSource"}},ContentPart:{discriminator:"type",variants:{text:"TextPart",image:"ImagePart",audio:"AudioPart",video:"VideoPart",document:"DocumentPart"}},ToolCallResultEvent:{optional:["timestamp","rawEvent","metadata","subagentRunId","role"],fields:{content:{array:"ContentPart"}}},StateSnapshotEvent:{optional:["timestamp","rawEvent","metadata","subagentRunId"],fields:{}},AddOperation:{optional:[],fields:{}},RemoveOperation:{optional:[],fields:{}},ReplaceOperation:{optional:[],fields:{}},MoveOperation:{optional:[],fields:{}},CopyOperation:{optional:[],fields:{}},TestOperation:{optional:[],fields:{}},JsonPatchOperation:{discriminator:"op",variants:{add:"AddOperation",remove:"RemoveOperation",replace:"ReplaceOperation",move:"MoveOperation",copy:"CopyOperation",test:"TestOperation"}},StateDeltaEvent:{optional:["timestamp","rawEvent","metadata","subagentRunId"],fields:{delta:{array:"JsonPatchOperation"}}},DeveloperMessage:{optional:["subagentRunId","name","encryptedValue","metadata"],fields:{}},SystemMessage:{optional:["subagentRunId","name","encryptedValue","metadata"],fields:{}},FunctionCall:{optional:[],fields:{}},ToolCall:{optional:["encryptedValue","metadata"],fields:{function:"FunctionCall"}},AssistantMessage:{optional:["subagentRunId","name","encryptedValue","metadata","content","toolCalls"],fields:{toolCalls:{array:"ToolCall"}}},UserMessage:{optional:["subagentRunId","name","encryptedValue","metadata"],fields:{content:{array:"ContentPart"}}},ToolMessage:{optional:["subagentRunId","error","encryptedValue","metadata"],fields:{content:{array:"ContentPart"}}},ActivityMessage:{optional:["subagentRunId","metadata"],fields:{}},ReasoningMessage:{optional:["subagentRunId","encryptedValue","metadata"],fields:{}},Message:{discriminator:"role",variants:{developer:"DeveloperMessage",system:"SystemMessage",assistant:"AssistantMessage",user:"UserMessage",tool:"ToolMessage",activity:"ActivityMessage",reasoning:"ReasoningMessage"}},MessagesSnapshotEvent:{optional:["timestamp","rawEvent","metadata"],fields:{messages:{array:"Message"}}},ActivitySnapshotEvent:{optional:["timestamp","rawEvent","metadata","subagentRunId","replace"],fields:{}},ActivityDeltaEvent:{optional:["timestamp","rawEvent","metadata","subagentRunId"],fields:{patch:{array:"JsonPatchOperation"}}},RawEvent:{optional:["timestamp","rawEvent","metadata","subagentRunId","source"],fields:{}},CustomEvent:{optional:["timestamp","rawEvent","metadata","subagentRunId"],fields:{}},Tool:{optional:["parameters","metadata"],fields:{}},Context:{optional:[],fields:{}},ResumeEntry:{optional:["payload","metadata"],fields:{}},RunAgentInput:{optional:["protocolVersion","parentRunId","state","tools","context","forwardedProps","resume"],fields:{messages:{array:"Message"},tools:{array:"Tool"},context:{array:"Context"},resume:{array:"ResumeEntry"}}},RunStartedEvent:{optional:["timestamp","rawEvent","metadata","protocolVersion","parentRunId","input"],fields:{input:"RunAgentInput"}},RunFinishedSuccessOutcome:{optional:["pendingToolCallIds"],fields:{}},Interrupt:{optional:["subagentRunId","message","toolCallId","responseSchema","expiresAt","metadata"],fields:{}},RunFinishedInterruptOutcome:{optional:[],fields:{interrupts:{array:"Interrupt"}}},RunFinishedCancelledOutcome:{optional:[],fields:{}},RunFinishedOutcome:{discriminator:"type",variants:{success:"RunFinishedSuccessOutcome",interrupt:"RunFinishedInterruptOutcome",cancelled:"RunFinishedCancelledOutcome"}},TokenUsage:{optional:["provider","model","inputTokens","outputTokens","totalTokens","reasoningTokens","cachedInputTokens","cacheWriteInputTokens"],fields:{}},RunFinishedEvent:{optional:["timestamp","rawEvent","metadata","result","outcome","usage"],fields:{outcome:"RunFinishedOutcome",usage:{array:"TokenUsage"}}},RunErrorEvent:{optional:["timestamp","rawEvent","metadata","code","usage"],fields:{usage:{array:"TokenUsage"}}},StepStartedEvent:{optional:["timestamp","rawEvent","metadata","subagentRunId"],fields:{}},StepFinishedEvent:{optional:["timestamp","rawEvent","metadata","subagentRunId"],fields:{}},ReasoningStartEvent:{optional:["timestamp","rawEvent","metadata","subagentRunId"],fields:{}},ReasoningMessageStartEvent:{optional:["timestamp","rawEvent","metadata","subagentRunId"],fields:{}},ReasoningMessageContentEvent:{optional:["timestamp","rawEvent","metadata","subagentRunId"],fields:{}},ReasoningMessageEndEvent:{optional:["timestamp","rawEvent","metadata","subagentRunId"],fields:{}},ReasoningMessageChunkEvent:{optional:["timestamp","rawEvent","metadata","subagentRunId","messageId","delta"],fields:{}},ReasoningEndEvent:{optional:["timestamp","rawEvent","metadata","subagentRunId"],fields:{}},ReasoningEncryptedValueEvent:{optional:["timestamp","rawEvent","metadata","subagentRunId"],fields:{}},SubagentStartedEvent:{optional:["timestamp","rawEvent","metadata","description","parentSubagentRunId","parentToolCallId","parentMessageId"],fields:{}},SubagentFinishedSuccessOutcome:{optional:[],fields:{}},SubagentFinishedSuspendedOutcome:{optional:["interruptIds"],fields:{}},SubagentFinishedOutcome:{discriminator:"type",variants:{success:"SubagentFinishedSuccessOutcome",suspended:"SubagentFinishedSuspendedOutcome"}},SubagentFinishedEvent:{optional:["timestamp","rawEvent","metadata","result","outcome"],fields:{outcome:"SubagentFinishedOutcome"}},SubagentErrorEvent:{optional:["timestamp","rawEvent","metadata","code"],fields:{}},Event:{discriminator:"type",variants:{TEXT_MESSAGE_START:"TextMessageStartEvent",TEXT_MESSAGE_CONTENT:"TextMessageContentEvent",TEXT_MESSAGE_END:"TextMessageEndEvent",TEXT_MESSAGE_CHUNK:"TextMessageChunkEvent",TOOL_CALL_START:"ToolCallStartEvent",TOOL_CALL_ARGS:"ToolCallArgsEvent",TOOL_CALL_END:"ToolCallEndEvent",TOOL_CALL_CHUNK:"ToolCallChunkEvent",TOOL_CALL_RESULT:"ToolCallResultEvent",STATE_SNAPSHOT:"StateSnapshotEvent",STATE_DELTA:"StateDeltaEvent",MESSAGES_SNAPSHOT:"MessagesSnapshotEvent",ACTIVITY_SNAPSHOT:"ActivitySnapshotEvent",ACTIVITY_DELTA:"ActivityDeltaEvent",RAW:"RawEvent",CUSTOM:"CustomEvent",RUN_STARTED:"RunStartedEvent",RUN_FINISHED:"RunFinishedEvent",RUN_ERROR:"RunErrorEvent",STEP_STARTED:"StepStartedEvent",STEP_FINISHED:"StepFinishedEvent",REASONING_START:"ReasoningStartEvent",REASONING_MESSAGE_START:"ReasoningMessageStartEvent",REASONING_MESSAGE_CONTENT:"ReasoningMessageContentEvent",REASONING_MESSAGE_END:"ReasoningMessageEndEvent",REASONING_MESSAGE_CHUNK:"ReasoningMessageChunkEvent",REASONING_END:"ReasoningEndEvent",REASONING_ENCRYPTED_VALUE:"ReasoningEncryptedValueEvent",SUBAGENT_STARTED:"SubagentStartedEvent",SUBAGENT_FINISHED:"SubagentFinishedEvent",SUBAGENT_ERROR:"SubagentErrorEvent"}},SubagentInfo:{optional:["description"],fields:{}},IdentityCapabilities:{optional:["name","type","description","version","provider","documentationUrl","metadata"],fields:{}},TransportCapabilities:{optional:["streaming","websocket","httpBinary","pushNotifications","resumable"],fields:{}},ToolsCapabilities:{optional:["supported","items","parallelCalls","clientProvided"],fields:{items:{array:"Tool"}}},OutputCapabilities:{optional:["structuredOutput","supportedMimeTypes"],fields:{}},StateCapabilities:{optional:["snapshots","deltas","memory","persistentState"],fields:{}},MultiAgentCapabilities:{optional:["supported","delegation","handoffs","subagents"],fields:{subagents:{array:"SubagentInfo"}}},ReasoningCapabilities:{optional:["supported","streaming","encrypted"],fields:{}},MultimodalInputCapabilities:{optional:["image","audio","video","pdf","file"],fields:{}},MultimodalOutputCapabilities:{optional:["image","audio"],fields:{}},MultimodalCapabilities:{optional:["input","output"],fields:{input:"MultimodalInputCapabilities",output:"MultimodalOutputCapabilities"}},ExecutionCapabilities:{optional:["codeExecution","sandboxed","maxIterations","maxExecutionTime"],fields:{}},HumanInTheLoopCapabilities:{optional:["supported","approvals","interventions","feedback","interrupts","approveWithEdits"],fields:{}},AgentCapabilities:{optional:["identity","transport","tools","output","state","multiAgent","reasoning","multimodal","execution","humanInTheLoop","custom"],fields:{identity:"IdentityCapabilities",transport:"TransportCapabilities",tools:"ToolsCapabilities",output:"OutputCapabilities",state:"StateCapabilities",multiAgent:"MultiAgentCapabilities",reasoning:"ReasoningCapabilities",multimodal:"MultimodalCapabilities",execution:"ExecutionCapabilities",humanInTheLoop:"HumanInTheLoopCapabilities"}}};function Dr(t,e){if(typeof e=="string")return Dr(t,zE[e]);if("array"in e){if(!Array.isArray(t))return t;let o=t.map(i=>Dr(i,e.array));return o.every((i,a)=>i===t[a])?t:o}if(typeof t!="object"||t===null||Array.isArray(t))return t;let n=t;if("discriminator"in e){let o=n[e.discriminator];return typeof o=="string"&&Object.prototype.hasOwnProperty.call(e.variants,o)?Dr(t,e.variants[o]):t}let r=n;for(let o of e.optional)Object.prototype.hasOwnProperty.call(n,o)&&n[o]===null&&(r===n&&(r={...n}),delete r[o]);for(let[o,i]of Object.entries(e.fields)){if(!Object.prototype.hasOwnProperty.call(r,o))continue;let a=Dr(r[o],i);a!==r[o]&&(r===n&&(r={...n}),r[o]=a)}return r}function mc(t,e){return Dr(t,e)}var Y=class extends Error{constructor(t){super(t)}},gc=class extends Y{constructor(){super("Connect not implemented. This method is not supported by the current agent.")}};function vh(t,e){return e===void 0?t:t===void 0?{...e}:{...t,...e}}function Jn(t){return t===void 0?"":typeof t=="string"?t:t.filter(e=>e.type==="text").map(e=>e.text).join("")}function bh(t){return Array.isArray(t)&&t.some(e=>e.type!=="text")}var vc={};Nl(vc,{JsonPatchError:()=>Ie,_areEquals:()=>Hr,applyOperation:()=>dn,applyPatch:()=>hi,applyReducer:()=>GE,deepClone:()=>UE,getValueByPointer:()=>di,validate:()=>wh,validator:()=>pi});var DE=(function(){var t=function(e,n){return t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(r,o){r.__proto__=o}||function(r,o){for(var i in o)o.hasOwnProperty(i)&&(r[i]=o[i])},t(e,n)};return function(e,n){t(e,n);function r(){this.constructor=e}e.prototype=n===null?Object.create(n):(r.prototype=n.prototype,new r)}})(),$E=Object.prototype.hasOwnProperty;function li(t,e){return $E.call(t,e)}function ci(t){if(Array.isArray(t)){for(var e=new Array(t.length),n=0;n<e.length;n++)e[n]=""+n;return e}if(Object.keys)return Object.keys(t);var r=[];for(var o in t)li(t,o)&&r.push(o);return r}function He(t){switch(typeof t){case"object":return JSON.parse(JSON.stringify(t));case"undefined":return null;default:return t}}function ui(t){for(var e=0,n=t.length,r;e<n;){if(r=t.charCodeAt(e),r>=48&&r<=57){e++;continue}return!1}return!0}function _t(t){return t.indexOf("/")===-1&&t.indexOf("~")===-1?t:t.replace(/~/g,"~0").replace(/\//g,"~1")}function $r(t){return t.replace(/~1/g,"/").replace(/~0/g,"~")}function si(t){if(t===void 0)return!0;if(t){if(Array.isArray(t)){for(var e=0,n=t.length;e<n;e++)if(si(t[e]))return!0}else if(typeof t=="object"){for(var r=ci(t),o=r.length,i=0;i<o;i++)if(si(t[r[i]]))return!0}}return!1}function yh(t,e){var n=[t];for(var r in e){var o=typeof e[r]=="object"?JSON.stringify(e[r],null,2):e[r];typeof o<"u"&&n.push(r+": "+o)}return n.join(`
`)}var Ur=(function(t){DE(e,t);function e(n,r,o,i,a){var s=this.constructor,l=t.call(this,yh(n,{name:r,index:o,operation:i,tree:a}))||this;return l.name=r,l.index=o,l.operation=i,l.tree=a,Object.setPrototypeOf(l,s.prototype),l.message=yh(n,{name:r,index:o,operation:i,tree:a}),l}return e})(Error);var Ie=Ur,UE=He,Qn={add:function(t,e,n){return t[e]=this.value,{newDocument:n}},remove:function(t,e,n){var r=t[e];return delete t[e],{newDocument:n,removed:r}},replace:function(t,e,n){var r=t[e];return t[e]=this.value,{newDocument:n,removed:r}},move:function(t,e,n){var r=di(n,this.path);r&&(r=He(r));var o=dn(n,{op:"remove",path:this.from}).removed;return dn(n,{op:"add",path:this.path,value:o}),{newDocument:n,removed:r}},copy:function(t,e,n){var r=di(n,this.from);return dn(n,{op:"add",path:this.path,value:He(r)}),{newDocument:n}},test:function(t,e,n){return{newDocument:n,test:Hr(t[e],this.value)}},_get:function(t,e,n){return this.value=t[e],{newDocument:n}}},HE={add:function(t,e,n){return ui(e)?t.splice(e,0,this.value):t[e]=this.value,{newDocument:n,index:e}},remove:function(t,e,n){var r=t.splice(e,1);return{newDocument:n,removed:r[0]}},replace:function(t,e,n){var r=t[e];return t[e]=this.value,{newDocument:n,removed:r}},move:Qn.move,copy:Qn.copy,test:Qn.test,_get:Qn._get};function di(t,e){if(e=="")return t;var n={op:"_get",path:e};return dn(t,n),n.value}function dn(t,e,n,r,o,i){if(n===void 0&&(n=!1),r===void 0&&(r=!0),o===void 0&&(o=!0),i===void 0&&(i=0),n&&(typeof n=="function"?n(e,0,t,e.path):pi(e,0)),e.path===""){var a={newDocument:t};if(e.op==="add")return a.newDocument=e.value,a;if(e.op==="replace")return a.newDocument=e.value,a.removed=t,a;if(e.op==="move"||e.op==="copy")return a.newDocument=di(t,e.from),e.op==="move"&&(a.removed=t),a;if(e.op==="test"){if(a.test=Hr(t,e.value),a.test===!1)throw new Ie("Test operation failed","TEST_OPERATION_FAILED",i,e,t);return a.newDocument=t,a}else{if(e.op==="remove")return a.removed=t,a.newDocument=null,a;if(e.op==="_get")return e.value=t,a;if(n)throw new Ie("Operation `op` property is not one of operations defined in RFC-6902","OPERATION_OP_INVALID",i,e,t);return a}}else{r||(t=He(t));var s=e.path||"",l=s.split("/"),c=t,u=1,p=l.length,v=void 0,m=void 0,h=void 0;for(typeof n=="function"?h=n:h=pi;;){if(m=l[u],m&&m.indexOf("~")!=-1&&(m=$r(m)),o&&(m=="__proto__"||m=="prototype"&&u>0&&l[u-1]=="constructor"))throw new TypeError("JSON-Patch: modifying `__proto__` or `constructor/prototype` prop is banned for security reasons, if this was on purpose, please set `banPrototypeModifications` flag false and pass it to this function. More info in fast-json-patch README");if(n&&v===void 0&&(c[m]===void 0?v=l.slice(0,u).join("/"):u==p-1&&(v=e.path),v!==void 0&&h(e,0,t,v)),u++,Array.isArray(c)){if(m==="-")m=c.length;else{if(n&&!ui(m))throw new Ie("Expected an unsigned base-10 integer value, making the new referenced value the array element with the zero-based index","OPERATION_PATH_ILLEGAL_ARRAY_INDEX",i,e,t);ui(m)&&(m=~~m)}if(u>=p){if(n&&e.op==="add"&&m>c.length)throw new Ie("The specified index MUST NOT be greater than the number of elements in the array","OPERATION_VALUE_OUT_OF_BOUNDS",i,e,t);var a=HE[e.op].call(e,c,m,t);if(a.test===!1)throw new Ie("Test operation failed","TEST_OPERATION_FAILED",i,e,t);return a}}else if(u>=p){var a=Qn[e.op].call(e,c,m,t);if(a.test===!1)throw new Ie("Test operation failed","TEST_OPERATION_FAILED",i,e,t);return a}if(c=c[m],n&&u<p&&(!c||typeof c!="object"))throw new Ie("Cannot perform operation at the desired path","OPERATION_PATH_UNRESOLVABLE",i,e,t)}}}function hi(t,e,n,r,o){if(r===void 0&&(r=!0),o===void 0&&(o=!0),n&&!Array.isArray(e))throw new Ie("Patch sequence must be an array","SEQUENCE_NOT_AN_ARRAY");r||(t=He(t));for(var i=new Array(e.length),a=0,s=e.length;a<s;a++)i[a]=dn(t,e[a],n,!0,o,a),t=i[a].newDocument;return i.newDocument=t,i}function GE(t,e,n){var r=dn(t,e);if(r.test===!1)throw new Ie("Test operation failed","TEST_OPERATION_FAILED",n,e,t);return r.newDocument}function pi(t,e,n,r){if(typeof t!="object"||t===null||Array.isArray(t))throw new Ie("Operation is not an object","OPERATION_NOT_AN_OBJECT",e,t,n);if(Qn[t.op]){if(typeof t.path!="string")throw new Ie("Operation `path` property is not a string","OPERATION_PATH_INVALID",e,t,n);if(t.path.indexOf("/")!==0&&t.path.length>0)throw new Ie('Operation `path` property must start with "/"',"OPERATION_PATH_INVALID",e,t,n);if((t.op==="move"||t.op==="copy")&&typeof t.from!="string")throw new Ie("Operation `from` property is not present (applicable in `move` and `copy` operations)","OPERATION_FROM_REQUIRED",e,t,n);if((t.op==="add"||t.op==="replace"||t.op==="test")&&t.value===void 0)throw new Ie("Operation `value` property is not present (applicable in `add`, `replace` and `test` operations)","OPERATION_VALUE_REQUIRED",e,t,n);if((t.op==="add"||t.op==="replace"||t.op==="test")&&si(t.value))throw new Ie("Operation `value` property is not present (applicable in `add`, `replace` and `test` operations)","OPERATION_VALUE_CANNOT_CONTAIN_UNDEFINED",e,t,n);if(n){if(t.op=="add"){var o=t.path.split("/").length,i=r.split("/").length;if(o!==i+1&&o!==i)throw new Ie("Cannot perform an `add` operation at the desired path","OPERATION_PATH_CANNOT_ADD",e,t,n)}else if(t.op==="replace"||t.op==="remove"||t.op==="_get"){if(t.path!==r)throw new Ie("Cannot perform the operation at a path that does not exist","OPERATION_PATH_UNRESOLVABLE",e,t,n)}else if(t.op==="move"||t.op==="copy"){var a={op:"_get",path:t.from,value:void 0},s=wh([a],n);if(s&&s.name==="OPERATION_PATH_UNRESOLVABLE")throw new Ie("Cannot perform the operation from a path that does not exist","OPERATION_FROM_UNRESOLVABLE",e,t,n)}}}else throw new Ie("Operation `op` property is not one of operations defined in RFC-6902","OPERATION_OP_INVALID",e,t,n)}function wh(t,e,n){try{if(!Array.isArray(t))throw new Ie("Patch sequence must be an array","SEQUENCE_NOT_AN_ARRAY");if(e)hi(He(e),He(t),n||!0);else{n=n||pi;for(var r=0;r<t.length;r++)n(t[r],r,e,void 0)}}catch(o){if(o instanceof Ie)return o;throw o}}function Hr(t,e){if(t===e)return!0;if(t&&e&&typeof t=="object"&&typeof e=="object"){var n=Array.isArray(t),r=Array.isArray(e),o,i,a;if(n&&r){if(i=t.length,i!=e.length)return!1;for(o=i;o--!==0;)if(!Hr(t[o],e[o]))return!1;return!0}if(n!=r)return!1;var s=Object.keys(t);if(i=s.length,i!==Object.keys(e).length)return!1;for(o=i;o--!==0;)if(!e.hasOwnProperty(s[o]))return!1;for(o=i;o--!==0;)if(a=s[o],!Hr(t[a],e[a]))return!1;return!0}return t!==t&&e!==e}var xc={};Nl(xc,{compare:()=>YE,generate:()=>bc,observe:()=>qE,unobserve:()=>WE});var yc=new WeakMap,FE=(function(){function t(e){this.observers=new Map,this.obj=e}return t})(),BE=(function(){function t(e,n){this.callback=e,this.observer=n}return t})();function ZE(t){return yc.get(t)}function VE(t,e){return t.observers.get(e)}function jE(t,e){t.observers.delete(e.callback)}function WE(t,e){e.unobserve()}function qE(t,e){var n=[],r,o=ZE(t);if(!o)o=new FE(t),yc.set(t,o);else{var i=VE(o,e);r=i&&i.observer}if(r)return r;if(r={},o.value=He(t),e){r.callback=e,r.next=null;var a=function(){bc(r)},s=function(){clearTimeout(r.next),r.next=setTimeout(a)};typeof window<"u"&&(window.addEventListener("mouseup",s),window.addEventListener("keyup",s),window.addEventListener("mousedown",s),window.addEventListener("keydown",s),window.addEventListener("change",s))}return r.patches=n,r.object=t,r.unobserve=function(){bc(r),clearTimeout(r.next),jE(o,r),typeof window<"u"&&(window.removeEventListener("mouseup",s),window.removeEventListener("keyup",s),window.removeEventListener("mousedown",s),window.removeEventListener("keydown",s),window.removeEventListener("change",s))},o.observers.set(e,new BE(e,r)),r}function bc(t,e){e===void 0&&(e=!1);var n=yc.get(t.object);wc(n.value,t.object,t.patches,"",e),t.patches.length&&hi(n.value,t.patches);var r=t.patches;return r.length>0&&(t.patches=[],t.callback&&t.callback(r)),r}function wc(t,e,n,r,o){if(e!==t){typeof e.toJSON=="function"&&(e=e.toJSON());for(var i=ci(e),a=ci(t),s=!1,l=!1,c=a.length-1;c>=0;c--){var u=a[c],p=t[u];if(li(e,u)&&!(e[u]===void 0&&p!==void 0&&Array.isArray(e)===!1)){var v=e[u];typeof p=="object"&&p!=null&&typeof v=="object"&&v!=null&&Array.isArray(p)===Array.isArray(v)?wc(p,v,n,r+"/"+_t(u),o):p!==v&&(s=!0,o&&n.push({op:"test",path:r+"/"+_t(u),value:He(p)}),n.push({op:"replace",path:r+"/"+_t(u),value:He(v)}))}else Array.isArray(t)===Array.isArray(e)?(o&&n.push({op:"test",path:r+"/"+_t(u),value:He(p)}),n.push({op:"remove",path:r+"/"+_t(u)}),l=!0):(o&&n.push({op:"test",path:r,value:t}),n.push({op:"replace",path:r,value:e}),s=!0)}if(!(!l&&i.length==a.length))for(var c=0;c<i.length;c++){var u=i[c];!li(t,u)&&e[u]!==void 0&&n.push({op:"add",path:r+"/"+_t(u),value:He(e[u])})}}}function YE(t,e,n){n===void 0&&(n=!1);var r=[];return wc(t,e,r,"",n),r}var fi=Object.assign({},vc,xc,{JsonPatchError:Ur,deepClone:He,escapePathComponent:_t,unescapePathComponent:$r});var Ec=function(t,e){return Ec=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(n,r){n.__proto__=r}||function(n,r){for(var o in r)Object.prototype.hasOwnProperty.call(r,o)&&(n[o]=r[o])},Ec(t,e)};function St(t,e){if(typeof e!="function"&&e!==null)throw new TypeError("Class extends value "+String(e)+" is not a constructor or null");Ec(t,e);function n(){this.constructor=t}t.prototype=e===null?Object.create(e):(n.prototype=e.prototype,new n)}function xh(t,e,n,r){function o(i){return i instanceof n?i:new n(function(a){a(i)})}return new(n||(n=Promise))(function(i,a){function s(u){try{c(r.next(u))}catch(p){a(p)}}function l(u){try{c(r.throw(u))}catch(p){a(p)}}function c(u){u.done?i(u.value):o(u.value).then(s,l)}c((r=r.apply(t,e||[])).next())})}function mi(t,e){var n={label:0,sent:function(){if(i[0]&1)throw i[1];return i[1]},trys:[],ops:[]},r,o,i,a=Object.create((typeof Iterator=="function"?Iterator:Object).prototype);return a.next=s(0),a.throw=s(1),a.return=s(2),typeof Symbol=="function"&&(a[Symbol.iterator]=function(){return this}),a;function s(c){return function(u){return l([c,u])}}function l(c){if(r)throw new TypeError("Generator is already executing.");for(;a&&(a=0,c[0]&&(n=0)),n;)try{if(r=1,o&&(i=c[0]&2?o.return:c[0]?o.throw||((i=o.return)&&i.call(o),0):o.next)&&!(i=i.call(o,c[1])).done)return i;switch(o=0,i&&(c=[c[0]&2,i.value]),c[0]){case 0:case 1:i=c;break;case 4:return n.label++,{value:c[1],done:!1};case 5:n.label++,o=c[1],c=[0];continue;case 7:c=n.ops.pop(),n.trys.pop();continue;default:if(i=n.trys,!(i=i.length>0&&i[i.length-1])&&(c[0]===6||c[0]===2)){n=0;continue}if(c[0]===3&&(!i||c[1]>i[0]&&c[1]<i[3])){n.label=c[1];break}if(c[0]===6&&n.label<i[1]){n.label=i[1],i=c;break}if(i&&n.label<i[2]){n.label=i[2],n.ops.push(c);break}i[2]&&n.ops.pop(),n.trys.pop();continue}c=e.call(t,n)}catch(u){c=[6,u],o=0}finally{r=i=0}if(c[0]&5)throw c[1];return{value:c[0]?c[1]:void 0,done:!0}}}function Lt(t){var e=typeof Symbol=="function"&&Symbol.iterator,n=e&&t[e],r=0;if(n)return n.call(t);if(t&&typeof t.length=="number")return{next:function(){return t&&r>=t.length&&(t=void 0),{value:t&&t[r++],done:!t}}};throw new TypeError(e?"Object is not iterable.":"Symbol.iterator is not defined.")}function Tt(t,e){var n=typeof Symbol=="function"&&t[Symbol.iterator];if(!n)return t;var r=n.call(t),o,i=[],a;try{for(;(e===void 0||e-- >0)&&!(o=r.next()).done;)i.push(o.value)}catch(s){a={error:s}}finally{try{o&&!o.done&&(n=r.return)&&n.call(r)}finally{if(a)throw a.error}}return i}function kt(t,e,n){if(n||arguments.length===2)for(var r=0,o=e.length,i;r<o;r++)(i||!(r in e))&&(i||(i=Array.prototype.slice.call(e,0,r)),i[r]=e[r]);return t.concat(i||Array.prototype.slice.call(e))}function pn(t){return this instanceof pn?(this.v=t,this):new pn(t)}function Eh(t,e,n){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var r=n.apply(t,e||[]),o,i=[];return o=Object.create((typeof AsyncIterator=="function"?AsyncIterator:Object).prototype),s("next"),s("throw"),s("return",a),o[Symbol.asyncIterator]=function(){return this},o;function a(m){return function(h){return Promise.resolve(h).then(m,p)}}function s(m,h){r[m]&&(o[m]=function(y){return new Promise(function(k,T){i.push([m,y,k,T])>1||l(m,y)})},h&&(o[m]=h(o[m])))}function l(m,h){try{c(r[m](h))}catch(y){v(i[0][3],y)}}function c(m){m.value instanceof pn?Promise.resolve(m.value.v).then(u,p):v(i[0][2],m)}function u(m){l("next",m)}function p(m){l("throw",m)}function v(m,h){m(h),i.shift(),i.length&&l(i[0][0],i[0][1])}}function _h(t){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var e=t[Symbol.asyncIterator],n;return e?e.call(t):(t=typeof Lt=="function"?Lt(t):t[Symbol.iterator](),n={},r("next"),r("throw"),r("return"),n[Symbol.asyncIterator]=function(){return this},n);function r(i){n[i]=t[i]&&function(a){return new Promise(function(s,l){a=t[i](a),o(s,l,a.done,a.value)})}}function o(i,a,s,l){Promise.resolve(l).then(function(c){i({value:c,done:s})},a)}}function te(t){return typeof t=="function"}function er(t){var e=function(r){Error.call(r),r.stack=new Error().stack},n=t(e);return n.prototype=Object.create(Error.prototype),n.prototype.constructor=n,n}var gi=er(function(t){return function(n){t(this),this.message=n?n.length+` errors occurred during unsubscription:
`+n.map(function(r,o){return o+1+") "+r.toString()}).join(`
  `):"",this.name="UnsubscriptionError",this.errors=n}});function Gr(t,e){if(t){var n=t.indexOf(e);0<=n&&t.splice(n,1)}}var tr=(function(){function t(e){this.initialTeardown=e,this.closed=!1,this._parentage=null,this._finalizers=null}return t.prototype.unsubscribe=function(){var e,n,r,o,i;if(!this.closed){this.closed=!0;var a=this._parentage;if(a)if(this._parentage=null,Array.isArray(a))try{for(var s=Lt(a),l=s.next();!l.done;l=s.next()){var c=l.value;c.remove(this)}}catch(y){e={error:y}}finally{try{l&&!l.done&&(n=s.return)&&n.call(s)}finally{if(e)throw e.error}}else a.remove(this);var u=this.initialTeardown;if(te(u))try{u()}catch(y){i=y instanceof gi?y.errors:[y]}var p=this._finalizers;if(p){this._finalizers=null;try{for(var v=Lt(p),m=v.next();!m.done;m=v.next()){var h=m.value;try{Sh(h)}catch(y){i=i??[],y instanceof gi?i=kt(kt([],Tt(i)),Tt(y.errors)):i.push(y)}}}catch(y){r={error:y}}finally{try{m&&!m.done&&(o=v.return)&&o.call(v)}finally{if(r)throw r.error}}}if(i)throw new gi(i)}},t.prototype.add=function(e){var n;if(e&&e!==this)if(this.closed)Sh(e);else{if(e instanceof t){if(e.closed||e._hasParent(this))return;e._addParent(this)}(this._finalizers=(n=this._finalizers)!==null&&n!==void 0?n:[]).push(e)}},t.prototype._hasParent=function(e){var n=this._parentage;return n===e||Array.isArray(n)&&n.includes(e)},t.prototype._addParent=function(e){var n=this._parentage;this._parentage=Array.isArray(n)?(n.push(e),n):n?[n,e]:e},t.prototype._removeParent=function(e){var n=this._parentage;n===e?this._parentage=null:Array.isArray(n)&&Gr(n,e)},t.prototype.remove=function(e){var n=this._finalizers;n&&Gr(n,e),e instanceof t&&e._removeParent(this)},t.EMPTY=(function(){var e=new t;return e.closed=!0,e})(),t})();var _c=tr.EMPTY;function vi(t){return t instanceof tr||t&&"closed"in t&&te(t.remove)&&te(t.add)&&te(t.unsubscribe)}function Sh(t){te(t)?t():t.unsubscribe()}var pt={onUnhandledError:null,onStoppedNotification:null,Promise:void 0,useDeprecatedSynchronousErrorHandling:!1,useDeprecatedNextContext:!1};var nr={setTimeout:function(t,e){for(var n=[],r=2;r<arguments.length;r++)n[r-2]=arguments[r];var o=nr.delegate;return o?.setTimeout?o.setTimeout.apply(o,kt([t,e],Tt(n))):setTimeout.apply(void 0,kt([t,e],Tt(n)))},clearTimeout:function(t){var e=nr.delegate;return(e?.clearTimeout||clearTimeout)(t)},delegate:void 0};function bi(t){nr.setTimeout(function(){var e=pt.onUnhandledError;if(e)e(t);else throw t})}function Fr(){}var Th=(function(){return Sc("C",void 0,void 0)})();function kh(t){return Sc("E",void 0,t)}function Ah(t){return Sc("N",t,void 0)}function Sc(t,e,n){return{kind:t,value:e,error:n}}var hn=null;function rr(t){if(pt.useDeprecatedSynchronousErrorHandling){var e=!hn;if(e&&(hn={errorThrown:!1,error:null}),t(),e){var n=hn,r=n.errorThrown,o=n.error;if(hn=null,r)throw o}}else t()}function Ih(t){pt.useDeprecatedSynchronousErrorHandling&&hn&&(hn.errorThrown=!0,hn.error=t)}var Br=(function(t){St(e,t);function e(n){var r=t.call(this)||this;return r.isStopped=!1,n?(r.destination=n,vi(n)&&n.add(r)):r.destination=QE,r}return e.create=function(n,r,o){return new wi(n,r,o)},e.prototype.next=function(n){this.isStopped?kc(Ah(n),this):this._next(n)},e.prototype.error=function(n){this.isStopped?kc(kh(n),this):(this.isStopped=!0,this._error(n))},e.prototype.complete=function(){this.isStopped?kc(Th,this):(this.isStopped=!0,this._complete())},e.prototype.unsubscribe=function(){this.closed||(this.isStopped=!0,t.prototype.unsubscribe.call(this),this.destination=null)},e.prototype._next=function(n){this.destination.next(n)},e.prototype._error=function(n){try{this.destination.error(n)}finally{this.unsubscribe()}},e.prototype._complete=function(){try{this.destination.complete()}finally{this.unsubscribe()}},e})(tr);var KE=Function.prototype.bind;function Tc(t,e){return KE.call(t,e)}var XE=(function(){function t(e){this.partialObserver=e}return t.prototype.next=function(e){var n=this.partialObserver;if(n.next)try{n.next(e)}catch(r){yi(r)}},t.prototype.error=function(e){var n=this.partialObserver;if(n.error)try{n.error(e)}catch(r){yi(r)}else yi(e)},t.prototype.complete=function(){var e=this.partialObserver;if(e.complete)try{e.complete()}catch(n){yi(n)}},t})(),wi=(function(t){St(e,t);function e(n,r,o){var i=t.call(this)||this,a;if(te(n)||!n)a={next:n??void 0,error:r??void 0,complete:o??void 0};else{var s;i&&pt.useDeprecatedNextContext?(s=Object.create(n),s.unsubscribe=function(){return i.unsubscribe()},a={next:n.next&&Tc(n.next,s),error:n.error&&Tc(n.error,s),complete:n.complete&&Tc(n.complete,s)}):a=n}return i.destination=new XE(a),i}return e})(Br);function yi(t){pt.useDeprecatedSynchronousErrorHandling?Ih(t):bi(t)}function JE(t){throw t}function kc(t,e){var n=pt.onStoppedNotification;n&&nr.setTimeout(function(){return n(t,e)})}var QE={closed:!0,next:Fr,error:JE,complete:Fr};var or=(function(){return typeof Symbol=="function"&&Symbol.observable||"@@observable"})();function ir(t){return t}function xi(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];return Ac(t)}function Ac(t){return t.length===0?ir:t.length===1?t[0]:function(n){return t.reduce(function(r,o){return o(r)},n)}}var ye=(function(){function t(e){e&&(this._subscribe=e)}return t.prototype.lift=function(e){var n=new t;return n.source=this,n.operator=e,n},t.prototype.subscribe=function(e,n,r){var o=this,i=t_(e)?e:new wi(e,n,r);return rr(function(){var a=o,s=a.operator,l=a.source;i.add(s?s.call(i,l):l?o._subscribe(i):o._trySubscribe(i))}),i},t.prototype._trySubscribe=function(e){try{return this._subscribe(e)}catch(n){e.error(n)}},t.prototype.forEach=function(e,n){var r=this;return n=Rh(n),new n(function(o,i){var a=new wi({next:function(s){try{e(s)}catch(l){i(l),a.unsubscribe()}},error:i,complete:o});r.subscribe(a)})},t.prototype._subscribe=function(e){var n;return(n=this.source)===null||n===void 0?void 0:n.subscribe(e)},t.prototype[or]=function(){return this},t.prototype.pipe=function(){for(var e=[],n=0;n<arguments.length;n++)e[n]=arguments[n];return Ac(e)(this)},t.prototype.toPromise=function(e){var n=this;return e=Rh(e),new e(function(r,o){var i;n.subscribe(function(a){return i=a},function(a){return o(a)},function(){return r(i)})})},t.create=function(e){return new t(e)},t})();function Rh(t){var e;return(e=t??pt.Promise)!==null&&e!==void 0?e:Promise}function e_(t){return t&&te(t.next)&&te(t.error)&&te(t.complete)}function t_(t){return t&&t instanceof Br||e_(t)&&vi(t)}function n_(t){return te(t?.lift)}function _e(t){return function(e){if(n_(e))return e.lift(function(n){try{return t(n,this)}catch(r){this.error(r)}});throw new TypeError("Unable to lift unknown Observable type")}}function Ne(t,e,n,r,o){return new r_(t,e,n,r,o)}var r_=(function(t){St(e,t);function e(n,r,o,i,a,s){var l=t.call(this,n)||this;return l.onFinalize=a,l.shouldUnsubscribe=s,l._next=r?function(c){try{r(c)}catch(u){n.error(u)}}:t.prototype._next,l._error=i?function(c){try{i(c)}catch(u){n.error(u)}finally{this.unsubscribe()}}:t.prototype._error,l._complete=o?function(){try{o()}catch(c){n.error(c)}finally{this.unsubscribe()}}:t.prototype._complete,l}return e.prototype.unsubscribe=function(){var n;if(!this.shouldUnsubscribe||this.shouldUnsubscribe()){var r=this.closed;t.prototype.unsubscribe.call(this),!r&&((n=this.onFinalize)===null||n===void 0||n.call(this))}},e})(Br);var Ch=er(function(t){return function(){t(this),this.name="ObjectUnsubscribedError",this.message="object unsubscribed"}});var At=(function(t){St(e,t);function e(){var n=t.call(this)||this;return n.closed=!1,n.currentObservers=null,n.observers=[],n.isStopped=!1,n.hasError=!1,n.thrownError=null,n}return e.prototype.lift=function(n){var r=new Nh(this,this);return r.operator=n,r},e.prototype._throwIfClosed=function(){if(this.closed)throw new Ch},e.prototype.next=function(n){var r=this;rr(function(){var o,i;if(r._throwIfClosed(),!r.isStopped){r.currentObservers||(r.currentObservers=Array.from(r.observers));try{for(var a=Lt(r.currentObservers),s=a.next();!s.done;s=a.next()){var l=s.value;l.next(n)}}catch(c){o={error:c}}finally{try{s&&!s.done&&(i=a.return)&&i.call(a)}finally{if(o)throw o.error}}}})},e.prototype.error=function(n){var r=this;rr(function(){if(r._throwIfClosed(),!r.isStopped){r.hasError=r.isStopped=!0,r.thrownError=n;for(var o=r.observers;o.length;)o.shift().error(n)}})},e.prototype.complete=function(){var n=this;rr(function(){if(n._throwIfClosed(),!n.isStopped){n.isStopped=!0;for(var r=n.observers;r.length;)r.shift().complete()}})},e.prototype.unsubscribe=function(){this.isStopped=this.closed=!0,this.observers=this.currentObservers=null},Object.defineProperty(e.prototype,"observed",{get:function(){var n;return((n=this.observers)===null||n===void 0?void 0:n.length)>0},enumerable:!1,configurable:!0}),e.prototype._trySubscribe=function(n){return this._throwIfClosed(),t.prototype._trySubscribe.call(this,n)},e.prototype._subscribe=function(n){return this._throwIfClosed(),this._checkFinalizedStatuses(n),this._innerSubscribe(n)},e.prototype._innerSubscribe=function(n){var r=this,o=this,i=o.hasError,a=o.isStopped,s=o.observers;return i||a?_c:(this.currentObservers=null,s.push(n),new tr(function(){r.currentObservers=null,Gr(s,n)}))},e.prototype._checkFinalizedStatuses=function(n){var r=this,o=r.hasError,i=r.thrownError,a=r.isStopped;o?n.error(i):a&&n.complete()},e.prototype.asObservable=function(){var n=new ye;return n.source=this,n},e.create=function(n,r){return new Nh(n,r)},e})(ye);var Nh=(function(t){St(e,t);function e(n,r){var o=t.call(this)||this;return o.destination=n,o.source=r,o}return e.prototype.next=function(n){var r,o;(o=(r=this.destination)===null||r===void 0?void 0:r.next)===null||o===void 0||o.call(r,n)},e.prototype.error=function(n){var r,o;(o=(r=this.destination)===null||r===void 0?void 0:r.error)===null||o===void 0||o.call(r,n)},e.prototype.complete=function(){var n,r;(r=(n=this.destination)===null||n===void 0?void 0:n.complete)===null||r===void 0||r.call(n)},e.prototype._subscribe=function(n){var r,o;return(o=(r=this.source)===null||r===void 0?void 0:r.subscribe(n))!==null&&o!==void 0?o:_c},e})(At);var Ic={now:function(){return(Ic.delegate||Date).now()},delegate:void 0};var Ei=(function(t){St(e,t);function e(n,r,o){n===void 0&&(n=1/0),r===void 0&&(r=1/0),o===void 0&&(o=Ic);var i=t.call(this)||this;return i._bufferSize=n,i._windowTime=r,i._timestampProvider=o,i._buffer=[],i._infiniteTimeWindow=!0,i._infiniteTimeWindow=r===1/0,i._bufferSize=Math.max(1,n),i._windowTime=Math.max(1,r),i}return e.prototype.next=function(n){var r=this,o=r.isStopped,i=r._buffer,a=r._infiniteTimeWindow,s=r._timestampProvider,l=r._windowTime;o||(i.push(n),!a&&i.push(s.now()+l)),this._trimBuffer(),t.prototype.next.call(this,n)},e.prototype._subscribe=function(n){this._throwIfClosed(),this._trimBuffer();for(var r=this._innerSubscribe(n),o=this,i=o._infiniteTimeWindow,a=o._buffer,s=a.slice(),l=0;l<s.length&&!n.closed;l+=i?1:2)n.next(s[l]);return this._checkFinalizedStatuses(n),r},e.prototype._trimBuffer=function(){var n=this,r=n._bufferSize,o=n._timestampProvider,i=n._buffer,a=n._infiniteTimeWindow,s=(a?1:2)*r;if(r<1/0&&s<i.length&&i.splice(0,i.length-s),!a){for(var l=o.now(),c=0,u=1;u<i.length&&i[u]<=l;u+=2)c=u;c&&i.splice(0,c+1)}},e})(At);var fn=new ye(function(t){return t.complete()});function Oh(t){return t&&te(t.schedule)}function o_(t){return t[t.length-1]}function _i(t){return Oh(o_(t))?t.pop():void 0}var Si=(function(t){return t&&typeof t.length=="number"&&typeof t!="function"});function Ti(t){return te(t?.then)}function ki(t){return te(t[or])}function Ai(t){return Symbol.asyncIterator&&te(t?.[Symbol.asyncIterator])}function Ii(t){return new TypeError("You provided "+(t!==null&&typeof t=="object"?"an invalid object":"'"+t+"'")+" where a stream was expected. You can provide an Observable, Promise, ReadableStream, Array, AsyncIterable, or Iterable.")}function i_(){return typeof Symbol!="function"||!Symbol.iterator?"@@iterator":Symbol.iterator}var Ri=i_();function Ci(t){return te(t?.[Ri])}function Ni(t){return Eh(this,arguments,function(){var n,r,o,i;return mi(this,function(a){switch(a.label){case 0:n=t.getReader(),a.label=1;case 1:a.trys.push([1,,9,10]),a.label=2;case 2:return[4,pn(n.read())];case 3:return r=a.sent(),o=r.value,i=r.done,i?[4,pn(void 0)]:[3,5];case 4:return[2,a.sent()];case 5:return[4,pn(o)];case 6:return[4,a.sent()];case 7:return a.sent(),[3,2];case 8:return[3,10];case 9:return n.releaseLock(),[7];case 10:return[2]}})})}function Oi(t){return te(t?.getReader)}function ze(t){if(t instanceof ye)return t;if(t!=null){if(ki(t))return a_(t);if(Si(t))return s_(t);if(Ti(t))return l_(t);if(Ai(t))return Mh(t);if(Ci(t))return c_(t);if(Oi(t))return u_(t)}throw Ii(t)}function a_(t){return new ye(function(e){var n=t[or]();if(te(n.subscribe))return n.subscribe(e);throw new TypeError("Provided object does not correctly implement Symbol.observable")})}function s_(t){return new ye(function(e){for(var n=0;n<t.length&&!e.closed;n++)e.next(t[n]);e.complete()})}function l_(t){return new ye(function(e){t.then(function(n){e.closed||(e.next(n),e.complete())},function(n){return e.error(n)}).then(null,bi)})}function c_(t){return new ye(function(e){var n,r;try{for(var o=Lt(t),i=o.next();!i.done;i=o.next()){var a=i.value;if(e.next(a),e.closed)return}}catch(s){n={error:s}}finally{try{i&&!i.done&&(r=o.return)&&r.call(o)}finally{if(n)throw n.error}}e.complete()})}function Mh(t){return new ye(function(e){d_(t,e).catch(function(n){return e.error(n)})})}function u_(t){return Mh(Ni(t))}function d_(t,e){var n,r,o,i;return xh(this,void 0,void 0,function(){var a,s;return mi(this,function(l){switch(l.label){case 0:l.trys.push([0,5,6,11]),n=_h(t),l.label=1;case 1:return[4,n.next()];case 2:if(r=l.sent(),!!r.done)return[3,4];if(a=r.value,e.next(a),e.closed)return[2];l.label=3;case 3:return[3,1];case 4:return[3,11];case 5:return s=l.sent(),o={error:s},[3,11];case 6:return l.trys.push([6,,9,10]),r&&!r.done&&(i=n.return)?[4,i.call(n)]:[3,8];case 7:l.sent(),l.label=8;case 8:return[3,10];case 9:if(o)throw o.error;return[7];case 10:return[7];case 11:return e.complete(),[2]}})})}function at(t,e,n,r,o){r===void 0&&(r=0),o===void 0&&(o=!1);var i=e.schedule(function(){n(),o?t.add(this.schedule(null,r)):this.unsubscribe()},r);if(t.add(i),!o)return i}function Mi(t,e){return e===void 0&&(e=0),_e(function(n,r){n.subscribe(Ne(r,function(o){return at(r,t,function(){return r.next(o)},e)},function(){return at(r,t,function(){return r.complete()},e)},function(o){return at(r,t,function(){return r.error(o)},e)}))})}function Pi(t,e){return e===void 0&&(e=0),_e(function(n,r){r.add(t.schedule(function(){return n.subscribe(r)},e))})}function Ph(t,e){return ze(t).pipe(Pi(e),Mi(e))}function Lh(t,e){return ze(t).pipe(Pi(e),Mi(e))}function zh(t,e){return new ye(function(n){var r=0;return e.schedule(function(){r===t.length?n.complete():(n.next(t[r++]),n.closed||this.schedule())})})}function Dh(t,e){return new ye(function(n){var r;return at(n,e,function(){r=t[Ri](),at(n,e,function(){var o,i,a;try{o=r.next(),i=o.value,a=o.done}catch(s){n.error(s);return}a?n.complete():n.next(i)},0,!0)}),function(){return te(r?.return)&&r.return()}})}function Li(t,e){if(!t)throw new Error("Iterable cannot be null");return new ye(function(n){at(n,e,function(){var r=t[Symbol.asyncIterator]();at(n,e,function(){r.next().then(function(o){o.done?n.complete():n.next(o.value)})},0,!0)})})}function $h(t,e){return Li(Ni(t),e)}function Uh(t,e){if(t!=null){if(ki(t))return Ph(t,e);if(Si(t))return zh(t,e);if(Ti(t))return Lh(t,e);if(Ai(t))return Li(t,e);if(Ci(t))return Dh(t,e);if(Oi(t))return $h(t,e)}throw Ii(t)}function zt(t,e){return e?Uh(t,e):ze(t)}function de(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];var n=_i(t);return zt(t,n)}function Z(t,e){var n=te(t)?t:function(){return t},r=function(o){return o.error(n())};return new ye(e?function(o){return e.schedule(r,0,o)}:r)}var Hh=er(function(t){return function(){t(this),this.name="EmptyError",this.message="no elements in sequence"}});function zi(t,e){var n=typeof e=="object";return new Promise(function(r,o){var i=!1,a;t.subscribe({next:function(s){a=s,i=!0},error:o,complete:function(){i?r(a):n?r(e.defaultValue):o(new Hh)}})})}function It(t,e){return _e(function(n,r){var o=0;n.subscribe(Ne(r,function(i){r.next(t.call(e,i,o++))}))})}function Gh(t,e,n,r,o,i,a,s){var l=[],c=0,u=0,p=!1,v=function(){p&&!l.length&&!c&&e.complete()},m=function(y){return c<r?h(y):l.push(y)},h=function(y){i&&e.next(y),c++;var k=!1;ze(n(y,u++)).subscribe(Ne(e,function(T){o?.(T),i?m(T):e.next(T)},function(){k=!0},void 0,function(){if(k)try{c--;for(var T=function(){var E=l.shift();a?at(e,a,function(){return h(E)}):h(E)};l.length&&c<r;)T();v()}catch(E){e.error(E)}}))};return t.subscribe(Ne(e,m,function(){p=!0,v()})),function(){s?.()}}function Ye(t,e,n){return n===void 0&&(n=1/0),te(e)?Ye(function(r,o){return It(function(i,a){return e(r,i,o,a)})(ze(t(r,o)))},n):(typeof e=="number"&&(n=e),_e(function(r,o){return Gh(r,o,t,n)}))}function Zr(t){return t===void 0&&(t=1/0),Ye(ir,t)}function Fh(){return Zr(1)}function mn(t){return new ye(function(e){ze(t()).subscribe(e)})}function Rc(t,e){return _e(function(n,r){var o=0;n.subscribe(Ne(r,function(i){return t.call(e,i,o++)&&r.next(i)}))})}function ar(t){return _e(function(e,n){var r=null,o=!1,i;r=e.subscribe(Ne(n,void 0,void 0,function(a){i=ze(t(a,ar(t)(e))),r?(r.unsubscribe(),r=null,i.subscribe(n)):o=!0})),o&&(r.unsubscribe(),r=null,i.subscribe(n))})}function Di(t,e){return te(e)?Ye(t,e,1):Ye(t,1)}function Bh(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];var n=_i(t);return _e(function(r,o){Fh()(zt(kt([r],Tt(t)),n)).subscribe(o)})}function Cc(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];return Bh.apply(void 0,kt([],Tt(t)))}function Nc(t){return _e(function(e,n){var r=!1;e.subscribe(Ne(n,function(o){r=!0,n.next(o)},function(){r||n.next(t),n.complete()}))})}function gn(t){return _e(function(e,n){try{e.subscribe(n)}finally{n.add(t)}})}function Oc(t,e){return _e(function(n,r){var o=null,i=0,a=!1,s=function(){return a&&!o&&r.complete()};n.subscribe(Ne(r,function(l){o?.unsubscribe();var c=0,u=i++;ze(t(l,u)).subscribe(o=Ne(r,function(p){return r.next(e?e(l,p,u,c++):p)},function(){o=null,s()}))},function(){a=!0,s()}))})}function $i(t){return _e(function(e,n){ze(t).subscribe(Ne(n,function(){return n.complete()},Fr)),!n.closed&&e.subscribe(n)})}function Ui(t,e,n){var r=te(t)||e||n?{next:t,error:e,complete:n}:t;return r?_e(function(o,i){var a;(a=r.subscribe)===null||a===void 0||a.call(r);var s=!0;o.subscribe(Ne(i,function(l){var c;(c=r.next)===null||c===void 0||c.call(r,l),i.next(l)},function(){var l;s=!1,(l=r.complete)===null||l===void 0||l.call(r),i.complete()},function(l){var c;s=!1,(c=r.error)===null||c===void 0||c.call(r,l),i.error(l)},function(){var l,c;s&&((l=r.unsubscribe)===null||l===void 0||l.call(r)),(c=r.finalize)===null||c===void 0||c.call(r)}))}):ir}function Zh(t){return` \r
	`.indexOf(t)>=0}function Hi(t){for(var e=["topLevel"],n=0,r,o,i,a=function(E){return e.push(E)},s=function(E){return e[e.length-1]=E},l=function(E){r==null&&(r=n,o=e.length,i=E)},c=function(E){E===i&&(r=void 0,o=void 0,i=void 0)},u=function(){return e.pop()},p=function(){return n--},v=function(E){if("0"<=E&&E<="9"){a("number");return}switch(E){case'"':a("string");return;case"-":a("numberNeedsDigit");return;case"t":a("true");return;case"f":a("false");return;case"n":a("null");return;case"[":a("arrayNeedsValue");return;case"{":a("objectNeedsKey");return}},m=t.length;n<m;n++){var h=t[n];switch(e[e.length-1]){case"topLevel":v(h);break;case"string":switch(h){case'"':u();break;case"\\":l("stringEscape"),a("stringEscaped");break}break;case"stringEscaped":h==="u"?a("stringUnicode"):(c("stringEscape"),u());break;case"stringUnicode":n-t.lastIndexOf("u",n)===4&&(c("stringEscape"),u());break;case"number":h==="."?s("numberNeedsDigit"):h==="e"||h==="E"?s("numberNeedsExponent"):(h<"0"||h>"9")&&(p(),u());break;case"numberNeedsDigit":s("number");break;case"numberNeedsExponent":s(h==="+"||h==="-"?"numberNeedsDigit":"number");break;case"true":case"false":case"null":(h<"a"||h>"z")&&(p(),u());break;case"arrayNeedsValue":h==="]"?u():Zh(h)||(c("collectionItem"),s("arrayNeedsComma"),v(h));break;case"arrayNeedsComma":h==="]"?u():h===","&&(l("collectionItem"),s("arrayNeedsValue"));break;case"objectNeedsKey":h==="}"?u():h==='"'&&(l("collectionItem"),s("objectNeedsColon"),a("string"));break;case"objectNeedsColon":h===":"&&s("objectNeedsValue");break;case"objectNeedsValue":Zh(h)||(c("collectionItem"),s("objectNeedsComma"),v(h));break;case"objectNeedsComma":h==="}"?u():h===","&&(l("collectionItem"),s("objectNeedsKey"));break}}o!=null&&(e.length=o);for(var y=[r!=null?t.slice(0,r):t],k=function(E){return y.push(E.slice(t.length-t.lastIndexOf(E[0])))},T=e.length-1;T>=0;T--)switch(e[T]){case"string":y.push('"');break;case"numberNeedsDigit":case"numberNeedsExponent":y.push("0");break;case"true":k("true");break;case"false":k("false");break;case"null":k("null");break;case"arrayNeedsValue":case"arrayNeedsComma":y.push("]");break;case"objectNeedsKey":case"objectNeedsColon":case"objectNeedsValue":case"objectNeedsComma":y.push("}");break}return y.join("")}var p_=Object.freeze({status:"aborted"});function I(t,e,n){function r(s,l){var c;Object.defineProperty(s,"_zod",{value:s._zod??{},enumerable:!1}),(c=s._zod).traits??(c.traits=new Set),s._zod.traits.add(t),e(s,l);for(let u in a.prototype)u in s||Object.defineProperty(s,u,{value:a.prototype[u].bind(s)});s._zod.constr=a,s._zod.def=l}let o=n?.Parent??Object;class i extends o{}Object.defineProperty(i,"name",{value:t});function a(s){var l;let c=n?.Parent?new i:this;r(c,s),(l=c._zod).deferred??(l.deferred=[]);for(let u of c._zod.deferred)u();return c}return Object.defineProperty(a,"init",{value:r}),Object.defineProperty(a,Symbol.hasInstance,{value:s=>n?.Parent&&s instanceof n.Parent?!0:s?._zod?.traits?.has(t)}),Object.defineProperty(a,"name",{value:t}),a}var Dt=class extends Error{constructor(){super("Encountered Promise during synchronous parse. Use .parseAsync() instead.")}},Gi={};function Ge(t){return t&&Object.assign(Gi,t),Gi}var ue={};Nl(ue,{BIGINT_FORMAT_RANGES:()=>jh,Class:()=>Pc,NUMBER_FORMAT_RANGES:()=>Fc,aborted:()=>bn,allowsEval:()=>Uc,assert:()=>v_,assertEqual:()=>h_,assertIs:()=>m_,assertNever:()=>g_,assertNotEqual:()=>f_,assignProp:()=>$c,cached:()=>jr,captureStackTrace:()=>Bi,cleanEnum:()=>C_,cleanRegex:()=>qr,clone:()=>ht,createTransparentProxy:()=>__,defineLazy:()=>ce,esc:()=>vn,escapeRegex:()=>Zt,extend:()=>k_,finalizeIssue:()=>ft,floatSafeRemainder:()=>Dc,getElementAtPath:()=>b_,getEnumValues:()=>Lc,getLengthableOrigin:()=>Yr,getParsedType:()=>E_,getSizableOrigin:()=>Wh,isObject:()=>sr,isPlainObject:()=>lr,issue:()=>Bc,joinValues:()=>Fi,jsonStringifyReplacer:()=>zc,merge:()=>A_,normalizeParams:()=>V,nullish:()=>Wr,numKeys:()=>x_,omit:()=>T_,optionalKeys:()=>Gc,partial:()=>I_,pick:()=>S_,prefixIssues:()=>Rt,primitiveTypes:()=>Vh,promiseAllObject:()=>y_,propertyKeyTypes:()=>Hc,randomString:()=>w_,required:()=>R_,stringifyPrimitive:()=>Zi,unwrapMessage:()=>Vr});function h_(t){return t}function f_(t){return t}function m_(t){}function g_(t){throw new Error}function v_(t){}function Lc(t){let e=Object.values(t).filter(r=>typeof r=="number");return Object.entries(t).filter(([r,o])=>e.indexOf(+r)===-1).map(([r,o])=>o)}function Fi(t,e="|"){return t.map(n=>Zi(n)).join(e)}function zc(t,e){return typeof e=="bigint"?e.toString():e}function jr(t){return{get value(){{let n=t();return Object.defineProperty(this,"value",{value:n}),n}throw new Error("cached value already set")}}}function Wr(t){return t==null}function qr(t){let e=t.startsWith("^")?1:0,n=t.endsWith("$")?t.length-1:t.length;return t.slice(e,n)}function Dc(t,e){let n=(t.toString().split(".")[1]||"").length,r=(e.toString().split(".")[1]||"").length,o=n>r?n:r,i=Number.parseInt(t.toFixed(o).replace(".","")),a=Number.parseInt(e.toFixed(o).replace(".",""));return i%a/10**o}function ce(t,e,n){Object.defineProperty(t,e,{get(){{let o=n();return t[e]=o,o}throw new Error("cached value already set")},set(o){Object.defineProperty(t,e,{value:o})},configurable:!0})}function $c(t,e,n){Object.defineProperty(t,e,{value:n,writable:!0,enumerable:!0,configurable:!0})}function b_(t,e){return e?e.reduce((n,r)=>n?.[r],t):t}function y_(t){let e=Object.keys(t),n=e.map(r=>t[r]);return Promise.all(n).then(r=>{let o={};for(let i=0;i<e.length;i++)o[e[i]]=r[i];return o})}function w_(t=10){let e="abcdefghijklmnopqrstuvwxyz",n="";for(let r=0;r<t;r++)n+=e[Math.floor(Math.random()*e.length)];return n}function vn(t){return JSON.stringify(t)}var Bi=Error.captureStackTrace?Error.captureStackTrace:(...t)=>{};function sr(t){return typeof t=="object"&&t!==null&&!Array.isArray(t)}var Uc=jr(()=>{if(typeof navigator<"u"&&navigator?.userAgent?.includes("Cloudflare"))return!1;try{let t=Function;return new t(""),!0}catch{return!1}});function lr(t){if(sr(t)===!1)return!1;let e=t.constructor;if(e===void 0)return!0;let n=e.prototype;return!(sr(n)===!1||Object.prototype.hasOwnProperty.call(n,"isPrototypeOf")===!1)}function x_(t){let e=0;for(let n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}var E_=t=>{let e=typeof t;switch(e){case"undefined":return"undefined";case"string":return"string";case"number":return Number.isNaN(t)?"nan":"number";case"boolean":return"boolean";case"function":return"function";case"bigint":return"bigint";case"symbol":return"symbol";case"object":return Array.isArray(t)?"array":t===null?"null":t.then&&typeof t.then=="function"&&t.catch&&typeof t.catch=="function"?"promise":typeof Map<"u"&&t instanceof Map?"map":typeof Set<"u"&&t instanceof Set?"set":typeof Date<"u"&&t instanceof Date?"date":typeof File<"u"&&t instanceof File?"file":"object";default:throw new Error(`Unknown data type: ${e}`)}},Hc=new Set(["string","number","symbol"]),Vh=new Set(["string","number","bigint","boolean","symbol","undefined"]);function Zt(t){return t.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")}function ht(t,e,n){let r=new t._zod.constr(e??t._zod.def);return(!e||n?.parent)&&(r._zod.parent=t),r}function V(t){let e=t;if(!e)return{};if(typeof e=="string")return{error:()=>e};if(e?.message!==void 0){if(e?.error!==void 0)throw new Error("Cannot specify both `message` and `error` params");e.error=e.message}return delete e.message,typeof e.error=="string"?{...e,error:()=>e.error}:e}function __(t){let e;return new Proxy({},{get(n,r,o){return e??(e=t()),Reflect.get(e,r,o)},set(n,r,o,i){return e??(e=t()),Reflect.set(e,r,o,i)},has(n,r){return e??(e=t()),Reflect.has(e,r)},deleteProperty(n,r){return e??(e=t()),Reflect.deleteProperty(e,r)},ownKeys(n){return e??(e=t()),Reflect.ownKeys(e)},getOwnPropertyDescriptor(n,r){return e??(e=t()),Reflect.getOwnPropertyDescriptor(e,r)},defineProperty(n,r,o){return e??(e=t()),Reflect.defineProperty(e,r,o)}})}function Zi(t){return typeof t=="bigint"?t.toString()+"n":typeof t=="string"?`"${t}"`:`${t}`}function Gc(t){return Object.keys(t).filter(e=>t[e]._zod.optin==="optional"&&t[e]._zod.optout==="optional")}var Fc={safeint:[Number.MIN_SAFE_INTEGER,Number.MAX_SAFE_INTEGER],int32:[-2147483648,2147483647],uint32:[0,4294967295],float32:[-34028234663852886e22,34028234663852886e22],float64:[-Number.MAX_VALUE,Number.MAX_VALUE]},jh={int64:[BigInt("-9223372036854775808"),BigInt("9223372036854775807")],uint64:[BigInt(0),BigInt("18446744073709551615")]};function S_(t,e){let n={},r=t._zod.def;for(let o in e){if(!(o in r.shape))throw new Error(`Unrecognized key: "${o}"`);e[o]&&(n[o]=r.shape[o])}return ht(t,{...t._zod.def,shape:n,checks:[]})}function T_(t,e){let n={...t._zod.def.shape},r=t._zod.def;for(let o in e){if(!(o in r.shape))throw new Error(`Unrecognized key: "${o}"`);e[o]&&delete n[o]}return ht(t,{...t._zod.def,shape:n,checks:[]})}function k_(t,e){if(!lr(e))throw new Error("Invalid input to extend: expected a plain object");let n={...t._zod.def,get shape(){let r={...t._zod.def.shape,...e};return $c(this,"shape",r),r},checks:[]};return ht(t,n)}function A_(t,e){return ht(t,{...t._zod.def,get shape(){let n={...t._zod.def.shape,...e._zod.def.shape};return $c(this,"shape",n),n},catchall:e._zod.def.catchall,checks:[]})}function I_(t,e,n){let r=e._zod.def.shape,o={...r};if(n)for(let i in n){if(!(i in r))throw new Error(`Unrecognized key: "${i}"`);n[i]&&(o[i]=t?new t({type:"optional",innerType:r[i]}):r[i])}else for(let i in r)o[i]=t?new t({type:"optional",innerType:r[i]}):r[i];return ht(e,{...e._zod.def,shape:o,checks:[]})}function R_(t,e,n){let r=e._zod.def.shape,o={...r};if(n)for(let i in n){if(!(i in o))throw new Error(`Unrecognized key: "${i}"`);n[i]&&(o[i]=new t({type:"nonoptional",innerType:r[i]}))}else for(let i in r)o[i]=new t({type:"nonoptional",innerType:r[i]});return ht(e,{...e._zod.def,shape:o,checks:[]})}function bn(t,e=0){for(let n=e;n<t.issues.length;n++)if(t.issues[n]?.continue!==!0)return!0;return!1}function Rt(t,e){return e.map(n=>{var r;return(r=n).path??(r.path=[]),n.path.unshift(t),n})}function Vr(t){return typeof t=="string"?t:t?.message}function ft(t,e,n){let r={...t,path:t.path??[]};if(!t.message){let o=Vr(t.inst?._zod.def?.error?.(t))??Vr(e?.error?.(t))??Vr(n.customError?.(t))??Vr(n.localeError?.(t))??"Invalid input";r.message=o}return delete r.inst,delete r.continue,e?.reportInput||delete r.input,r}function Wh(t){return t instanceof Set?"set":t instanceof Map?"map":t instanceof File?"file":"unknown"}function Yr(t){return Array.isArray(t)?"array":typeof t=="string"?"string":"unknown"}function Bc(...t){let[e,n,r]=t;return typeof e=="string"?{message:e,code:"custom",input:n,inst:r}:{...e}}function C_(t){return Object.entries(t).filter(([e,n])=>Number.isNaN(Number.parseInt(e,10))).map(e=>e[1])}var Pc=class{constructor(...e){}};var qh=(t,e)=>{t.name="$ZodError",Object.defineProperty(t,"_zod",{value:t._zod,enumerable:!1}),Object.defineProperty(t,"issues",{value:e,enumerable:!1}),Object.defineProperty(t,"message",{get(){return JSON.stringify(e,zc,2)},enumerable:!0}),Object.defineProperty(t,"toString",{value:()=>t.message,enumerable:!1})},Vi=I("$ZodError",qh),Zc=I("$ZodError",qh,{Parent:Error});function Vc(t,e=n=>n.message){let n={},r=[];for(let o of t.issues)o.path.length>0?(n[o.path[0]]=n[o.path[0]]||[],n[o.path[0]].push(e(o))):r.push(e(o));return{formErrors:r,fieldErrors:n}}function jc(t,e){let n=e||function(i){return i.message},r={_errors:[]},o=i=>{for(let a of i.issues)if(a.code==="invalid_union"&&a.errors.length)a.errors.map(s=>o({issues:s}));else if(a.code==="invalid_key")o({issues:a.issues});else if(a.code==="invalid_element")o({issues:a.issues});else if(a.path.length===0)r._errors.push(n(a));else{let s=r,l=0;for(;l<a.path.length;){let c=a.path[l];l===a.path.length-1?(s[c]=s[c]||{_errors:[]},s[c]._errors.push(n(a))):s[c]=s[c]||{_errors:[]},s=s[c],l++}}};return o(t),r}var Yh=t=>(e,n,r,o)=>{let i=r?Object.assign(r,{async:!1}):{async:!1},a=e._zod.run({value:n,issues:[]},i);if(a instanceof Promise)throw new Dt;if(a.issues.length){let s=new(o?.Err??t)(a.issues.map(l=>ft(l,i,Ge())));throw Bi(s,o?.callee),s}return a.value};var Kh=t=>async(e,n,r,o)=>{let i=r?Object.assign(r,{async:!0}):{async:!0},a=e._zod.run({value:n,issues:[]},i);if(a instanceof Promise&&(a=await a),a.issues.length){let s=new(o?.Err??t)(a.issues.map(l=>ft(l,i,Ge())));throw Bi(s,o?.callee),s}return a.value};var Wc=t=>(e,n,r)=>{let o=r?{...r,async:!1}:{async:!1},i=e._zod.run({value:n,issues:[]},o);if(i instanceof Promise)throw new Dt;return i.issues.length?{success:!1,error:new(t??Vi)(i.issues.map(a=>ft(a,o,Ge())))}:{success:!0,data:i.value}},Xh=Wc(Zc),qc=t=>async(e,n,r)=>{let o=r?Object.assign(r,{async:!0}):{async:!0},i=e._zod.run({value:n,issues:[]},o);return i instanceof Promise&&(i=await i),i.issues.length?{success:!1,error:new t(i.issues.map(a=>ft(a,o,Ge())))}:{success:!0,data:i.value}},Jh=qc(Zc);var Qh=/^[cC][^\s-]{8,}$/,ef=/^[0-9a-z]+$/,tf=/^[0-9A-HJKMNP-TV-Za-hjkmnp-tv-z]{26}$/,nf=/^[0-9a-vA-V]{20}$/,rf=/^[A-Za-z0-9]{27}$/,of=/^[a-zA-Z0-9_-]{21}$/,af=/^P(?:(\d+W)|(?!.*W)(?=\d|T\d)(\d+Y)?(\d+M)?(\d+D)?(T(?=\d)(\d+H)?(\d+M)?(\d+([.,]\d+)?S)?)?)$/;var sf=/^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12})$/,Yc=t=>t?new RegExp(`^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-${t}[0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12})$`):/^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[1-8][0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12}|00000000-0000-0000-0000-000000000000)$/;var lf=/^(?!\.)(?!.*\.\.)([A-Za-z0-9_'+\-\.]*)[A-Za-z0-9_+-]@([A-Za-z0-9][A-Za-z0-9\-]*\.)+[A-Za-z]{2,}$/;var O_="^(\\p{Extended_Pictographic}|\\p{Emoji_Component})+$";function cf(){return new RegExp(O_,"u")}var uf=/^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])$/,df=/^(([0-9a-fA-F]{1,4}:){7}[0-9a-fA-F]{1,4}|::|([0-9a-fA-F]{1,4})?::([0-9a-fA-F]{1,4}:?){0,6})$/,pf=/^((25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\/([0-9]|[1-2][0-9]|3[0-2])$/,hf=/^(([0-9a-fA-F]{1,4}:){7}[0-9a-fA-F]{1,4}|::|([0-9a-fA-F]{1,4})?::([0-9a-fA-F]{1,4}:?){0,6})\/(12[0-8]|1[01][0-9]|[1-9]?[0-9])$/,ff=/^$|^(?:[0-9a-zA-Z+/]{4})*(?:(?:[0-9a-zA-Z+/]{2}==)|(?:[0-9a-zA-Z+/]{3}=))?$/,Kc=/^[A-Za-z0-9_-]*$/,mf=/^([a-zA-Z0-9-]+\.)*[a-zA-Z0-9-]+$/;var gf=/^\+(?:[0-9]){6,14}[0-9]$/,vf="(?:(?:\\d\\d[2468][048]|\\d\\d[13579][26]|\\d\\d0[48]|[02468][048]00|[13579][26]00)-02-29|\\d{4}-(?:(?:0[13578]|1[02])-(?:0[1-9]|[12]\\d|3[01])|(?:0[469]|11)-(?:0[1-9]|[12]\\d|30)|(?:02)-(?:0[1-9]|1\\d|2[0-8])))",bf=new RegExp(`^${vf}$`);function yf(t){let e="(?:[01]\\d|2[0-3]):[0-5]\\d";return typeof t.precision=="number"?t.precision===-1?`${e}`:t.precision===0?`${e}:[0-5]\\d`:`${e}:[0-5]\\d\\.\\d{${t.precision}}`:`${e}(?::[0-5]\\d(?:\\.\\d+)?)?`}function wf(t){return new RegExp(`^${yf(t)}$`)}function xf(t){let e=yf({precision:t.precision}),n=["Z"];t.local&&n.push(""),t.offset&&n.push("([+-]\\d{2}:\\d{2})");let r=`${e}(?:${n.join("|")})`;return new RegExp(`^${vf}T(?:${r})$`)}var Ef=t=>{let e=t?`[\\s\\S]{${t?.minimum??0},${t?.maximum??""}}`:"[\\s\\S]*";return new RegExp(`^${e}$`)};var _f=/^\d+$/,Sf=/^-?\d+(?:\.\d+)?/i,Tf=/true|false/i;var kf=/^[^A-Z]*$/,Af=/^[^a-z]*$/;var Ve=I("$ZodCheck",(t,e)=>{var n;t._zod??(t._zod={}),t._zod.def=e,(n=t._zod).onattach??(n.onattach=[])}),If={number:"number",bigint:"bigint",object:"date"},Xc=I("$ZodCheckLessThan",(t,e)=>{Ve.init(t,e);let n=If[typeof e.value];t._zod.onattach.push(r=>{let o=r._zod.bag,i=(e.inclusive?o.maximum:o.exclusiveMaximum)??Number.POSITIVE_INFINITY;e.value<i&&(e.inclusive?o.maximum=e.value:o.exclusiveMaximum=e.value)}),t._zod.check=r=>{(e.inclusive?r.value<=e.value:r.value<e.value)||r.issues.push({origin:n,code:"too_big",maximum:e.value,input:r.value,inclusive:e.inclusive,inst:t,continue:!e.abort})}}),Jc=I("$ZodCheckGreaterThan",(t,e)=>{Ve.init(t,e);let n=If[typeof e.value];t._zod.onattach.push(r=>{let o=r._zod.bag,i=(e.inclusive?o.minimum:o.exclusiveMinimum)??Number.NEGATIVE_INFINITY;e.value>i&&(e.inclusive?o.minimum=e.value:o.exclusiveMinimum=e.value)}),t._zod.check=r=>{(e.inclusive?r.value>=e.value:r.value>e.value)||r.issues.push({origin:n,code:"too_small",minimum:e.value,input:r.value,inclusive:e.inclusive,inst:t,continue:!e.abort})}}),Rf=I("$ZodCheckMultipleOf",(t,e)=>{Ve.init(t,e),t._zod.onattach.push(n=>{var r;(r=n._zod.bag).multipleOf??(r.multipleOf=e.value)}),t._zod.check=n=>{if(typeof n.value!=typeof e.value)throw new Error("Cannot mix number and bigint in multiple_of check.");(typeof n.value=="bigint"?n.value%e.value===BigInt(0):Dc(n.value,e.value)===0)||n.issues.push({origin:typeof n.value,code:"not_multiple_of",divisor:e.value,input:n.value,inst:t,continue:!e.abort})}}),Cf=I("$ZodCheckNumberFormat",(t,e)=>{Ve.init(t,e),e.format=e.format||"float64";let n=e.format?.includes("int"),r=n?"int":"number",[o,i]=Fc[e.format];t._zod.onattach.push(a=>{let s=a._zod.bag;s.format=e.format,s.minimum=o,s.maximum=i,n&&(s.pattern=_f)}),t._zod.check=a=>{let s=a.value;if(n){if(!Number.isInteger(s)){a.issues.push({expected:r,format:e.format,code:"invalid_type",input:s,inst:t});return}if(!Number.isSafeInteger(s)){s>0?a.issues.push({input:s,code:"too_big",maximum:Number.MAX_SAFE_INTEGER,note:"Integers must be within the safe integer range.",inst:t,origin:r,continue:!e.abort}):a.issues.push({input:s,code:"too_small",minimum:Number.MIN_SAFE_INTEGER,note:"Integers must be within the safe integer range.",inst:t,origin:r,continue:!e.abort});return}}s<o&&a.issues.push({origin:"number",input:s,code:"too_small",minimum:o,inclusive:!0,inst:t,continue:!e.abort}),s>i&&a.issues.push({origin:"number",input:s,code:"too_big",maximum:i,inst:t})}});var Nf=I("$ZodCheckMaxLength",(t,e)=>{var n;Ve.init(t,e),(n=t._zod.def).when??(n.when=r=>{let o=r.value;return!Wr(o)&&o.length!==void 0}),t._zod.onattach.push(r=>{let o=r._zod.bag.maximum??Number.POSITIVE_INFINITY;e.maximum<o&&(r._zod.bag.maximum=e.maximum)}),t._zod.check=r=>{let o=r.value;if(o.length<=e.maximum)return;let a=Yr(o);r.issues.push({origin:a,code:"too_big",maximum:e.maximum,inclusive:!0,input:o,inst:t,continue:!e.abort})}}),Of=I("$ZodCheckMinLength",(t,e)=>{var n;Ve.init(t,e),(n=t._zod.def).when??(n.when=r=>{let o=r.value;return!Wr(o)&&o.length!==void 0}),t._zod.onattach.push(r=>{let o=r._zod.bag.minimum??Number.NEGATIVE_INFINITY;e.minimum>o&&(r._zod.bag.minimum=e.minimum)}),t._zod.check=r=>{let o=r.value;if(o.length>=e.minimum)return;let a=Yr(o);r.issues.push({origin:a,code:"too_small",minimum:e.minimum,inclusive:!0,input:o,inst:t,continue:!e.abort})}}),Mf=I("$ZodCheckLengthEquals",(t,e)=>{var n;Ve.init(t,e),(n=t._zod.def).when??(n.when=r=>{let o=r.value;return!Wr(o)&&o.length!==void 0}),t._zod.onattach.push(r=>{let o=r._zod.bag;o.minimum=e.length,o.maximum=e.length,o.length=e.length}),t._zod.check=r=>{let o=r.value,i=o.length;if(i===e.length)return;let a=Yr(o),s=i>e.length;r.issues.push({origin:a,...s?{code:"too_big",maximum:e.length}:{code:"too_small",minimum:e.length},inclusive:!0,exact:!0,input:r.value,inst:t,continue:!e.abort})}}),Kr=I("$ZodCheckStringFormat",(t,e)=>{var n,r;Ve.init(t,e),t._zod.onattach.push(o=>{let i=o._zod.bag;i.format=e.format,e.pattern&&(i.patterns??(i.patterns=new Set),i.patterns.add(e.pattern))}),e.pattern?(n=t._zod).check??(n.check=o=>{e.pattern.lastIndex=0,!e.pattern.test(o.value)&&o.issues.push({origin:"string",code:"invalid_format",format:e.format,input:o.value,...e.pattern?{pattern:e.pattern.toString()}:{},inst:t,continue:!e.abort})}):(r=t._zod).check??(r.check=()=>{})}),Pf=I("$ZodCheckRegex",(t,e)=>{Kr.init(t,e),t._zod.check=n=>{e.pattern.lastIndex=0,!e.pattern.test(n.value)&&n.issues.push({origin:"string",code:"invalid_format",format:"regex",input:n.value,pattern:e.pattern.toString(),inst:t,continue:!e.abort})}}),Lf=I("$ZodCheckLowerCase",(t,e)=>{e.pattern??(e.pattern=kf),Kr.init(t,e)}),zf=I("$ZodCheckUpperCase",(t,e)=>{e.pattern??(e.pattern=Af),Kr.init(t,e)}),Df=I("$ZodCheckIncludes",(t,e)=>{Ve.init(t,e);let n=Zt(e.includes),r=new RegExp(typeof e.position=="number"?`^.{${e.position}}${n}`:n);e.pattern=r,t._zod.onattach.push(o=>{let i=o._zod.bag;i.patterns??(i.patterns=new Set),i.patterns.add(r)}),t._zod.check=o=>{o.value.includes(e.includes,e.position)||o.issues.push({origin:"string",code:"invalid_format",format:"includes",includes:e.includes,input:o.value,inst:t,continue:!e.abort})}}),$f=I("$ZodCheckStartsWith",(t,e)=>{Ve.init(t,e);let n=new RegExp(`^${Zt(e.prefix)}.*`);e.pattern??(e.pattern=n),t._zod.onattach.push(r=>{let o=r._zod.bag;o.patterns??(o.patterns=new Set),o.patterns.add(n)}),t._zod.check=r=>{r.value.startsWith(e.prefix)||r.issues.push({origin:"string",code:"invalid_format",format:"starts_with",prefix:e.prefix,input:r.value,inst:t,continue:!e.abort})}}),Uf=I("$ZodCheckEndsWith",(t,e)=>{Ve.init(t,e);let n=new RegExp(`.*${Zt(e.suffix)}$`);e.pattern??(e.pattern=n),t._zod.onattach.push(r=>{let o=r._zod.bag;o.patterns??(o.patterns=new Set),o.patterns.add(n)}),t._zod.check=r=>{r.value.endsWith(e.suffix)||r.issues.push({origin:"string",code:"invalid_format",format:"ends_with",suffix:e.suffix,input:r.value,inst:t,continue:!e.abort})}});var Hf=I("$ZodCheckOverwrite",(t,e)=>{Ve.init(t,e),t._zod.check=n=>{n.value=e.tx(n.value)}});var Wi=class{constructor(e=[]){this.content=[],this.indent=0,this&&(this.args=e)}indented(e){this.indent+=1,e(this),this.indent-=1}write(e){if(typeof e=="function"){e(this,{execution:"sync"}),e(this,{execution:"async"});return}let r=e.split(`
`).filter(a=>a),o=Math.min(...r.map(a=>a.length-a.trimStart().length)),i=r.map(a=>a.slice(o)).map(a=>" ".repeat(this.indent*2)+a);for(let a of i)this.content.push(a)}compile(){let e=Function,n=this?.args,o=[...(this?.content??[""]).map(i=>`  ${i}`)];return new e(...n,o.join(`
`))}};var Ff={major:4,minor:0,patch:0};var pe=I("$ZodType",(t,e)=>{var n;t??(t={}),t._zod.def=e,t._zod.bag=t._zod.bag||{},t._zod.version=Ff;let r=[...t._zod.def.checks??[]];t._zod.traits.has("$ZodCheck")&&r.unshift(t);for(let o of r)for(let i of o._zod.onattach)i(t);if(r.length===0)(n=t._zod).deferred??(n.deferred=[]),t._zod.deferred?.push(()=>{t._zod.run=t._zod.parse});else{let o=(i,a,s)=>{let l=bn(i),c;for(let u of a){if(u._zod.def.when){if(!u._zod.def.when(i))continue}else if(l)continue;let p=i.issues.length,v=u._zod.check(i);if(v instanceof Promise&&s?.async===!1)throw new Dt;if(c||v instanceof Promise)c=(c??Promise.resolve()).then(async()=>{await v,i.issues.length!==p&&(l||(l=bn(i,p)))});else{if(i.issues.length===p)continue;l||(l=bn(i,p))}}return c?c.then(()=>i):i};t._zod.run=(i,a)=>{let s=t._zod.parse(i,a);if(s instanceof Promise){if(a.async===!1)throw new Dt;return s.then(l=>o(l,r,a))}return o(s,r,a)}}t["~standard"]={validate:o=>{try{let i=Xh(t,o);return i.success?{value:i.data}:{issues:i.error?.issues}}catch{return Jh(t,o).then(a=>a.success?{value:a.data}:{issues:a.error?.issues})}},vendor:"zod",version:1}}),Yi=I("$ZodString",(t,e)=>{pe.init(t,e),t._zod.pattern=[...t?._zod.bag?.patterns??[]].pop()??Ef(t._zod.bag),t._zod.parse=(n,r)=>{if(e.coerce)try{n.value=String(n.value)}catch{}return typeof n.value=="string"||n.issues.push({expected:"string",code:"invalid_type",input:n.value,inst:t}),n}}),we=I("$ZodStringFormat",(t,e)=>{Kr.init(t,e),Yi.init(t,e)}),Jf=I("$ZodGUID",(t,e)=>{e.pattern??(e.pattern=sf),we.init(t,e)}),Qf=I("$ZodUUID",(t,e)=>{if(e.version){let r={v1:1,v2:2,v3:3,v4:4,v5:5,v6:6,v7:7,v8:8}[e.version];if(r===void 0)throw new Error(`Invalid UUID version: "${e.version}"`);e.pattern??(e.pattern=Yc(r))}else e.pattern??(e.pattern=Yc());we.init(t,e)}),em=I("$ZodEmail",(t,e)=>{e.pattern??(e.pattern=lf),we.init(t,e)}),tm=I("$ZodURL",(t,e)=>{we.init(t,e),t._zod.check=n=>{try{let r=n.value,o=new URL(r),i=o.href;e.hostname&&(e.hostname.lastIndex=0,e.hostname.test(o.hostname)||n.issues.push({code:"invalid_format",format:"url",note:"Invalid hostname",pattern:mf.source,input:n.value,inst:t,continue:!e.abort})),e.protocol&&(e.protocol.lastIndex=0,e.protocol.test(o.protocol.endsWith(":")?o.protocol.slice(0,-1):o.protocol)||n.issues.push({code:"invalid_format",format:"url",note:"Invalid protocol",pattern:e.protocol.source,input:n.value,inst:t,continue:!e.abort})),!r.endsWith("/")&&i.endsWith("/")?n.value=i.slice(0,-1):n.value=i;return}catch{n.issues.push({code:"invalid_format",format:"url",input:n.value,inst:t,continue:!e.abort})}}}),nm=I("$ZodEmoji",(t,e)=>{e.pattern??(e.pattern=cf()),we.init(t,e)}),rm=I("$ZodNanoID",(t,e)=>{e.pattern??(e.pattern=of),we.init(t,e)}),om=I("$ZodCUID",(t,e)=>{e.pattern??(e.pattern=Qh),we.init(t,e)}),im=I("$ZodCUID2",(t,e)=>{e.pattern??(e.pattern=ef),we.init(t,e)}),am=I("$ZodULID",(t,e)=>{e.pattern??(e.pattern=tf),we.init(t,e)}),sm=I("$ZodXID",(t,e)=>{e.pattern??(e.pattern=nf),we.init(t,e)}),lm=I("$ZodKSUID",(t,e)=>{e.pattern??(e.pattern=rf),we.init(t,e)}),cm=I("$ZodISODateTime",(t,e)=>{e.pattern??(e.pattern=xf(e)),we.init(t,e)}),um=I("$ZodISODate",(t,e)=>{e.pattern??(e.pattern=bf),we.init(t,e)}),dm=I("$ZodISOTime",(t,e)=>{e.pattern??(e.pattern=wf(e)),we.init(t,e)}),pm=I("$ZodISODuration",(t,e)=>{e.pattern??(e.pattern=af),we.init(t,e)}),hm=I("$ZodIPv4",(t,e)=>{e.pattern??(e.pattern=uf),we.init(t,e),t._zod.onattach.push(n=>{let r=n._zod.bag;r.format="ipv4"})}),fm=I("$ZodIPv6",(t,e)=>{e.pattern??(e.pattern=df),we.init(t,e),t._zod.onattach.push(n=>{let r=n._zod.bag;r.format="ipv6"}),t._zod.check=n=>{try{new URL(`http://[${n.value}]`)}catch{n.issues.push({code:"invalid_format",format:"ipv6",input:n.value,inst:t,continue:!e.abort})}}}),mm=I("$ZodCIDRv4",(t,e)=>{e.pattern??(e.pattern=pf),we.init(t,e)}),gm=I("$ZodCIDRv6",(t,e)=>{e.pattern??(e.pattern=hf),we.init(t,e),t._zod.check=n=>{let[r,o]=n.value.split("/");try{if(!o)throw new Error;let i=Number(o);if(`${i}`!==o)throw new Error;if(i<0||i>128)throw new Error;new URL(`http://[${r}]`)}catch{n.issues.push({code:"invalid_format",format:"cidrv6",input:n.value,inst:t,continue:!e.abort})}}});function vm(t){if(t==="")return!0;if(t.length%4!==0)return!1;try{return atob(t),!0}catch{return!1}}var bm=I("$ZodBase64",(t,e)=>{e.pattern??(e.pattern=ff),we.init(t,e),t._zod.onattach.push(n=>{n._zod.bag.contentEncoding="base64"}),t._zod.check=n=>{vm(n.value)||n.issues.push({code:"invalid_format",format:"base64",input:n.value,inst:t,continue:!e.abort})}});function M_(t){if(!Kc.test(t))return!1;let e=t.replace(/[-_]/g,r=>r==="-"?"+":"/"),n=e.padEnd(Math.ceil(e.length/4)*4,"=");return vm(n)}var ym=I("$ZodBase64URL",(t,e)=>{e.pattern??(e.pattern=Kc),we.init(t,e),t._zod.onattach.push(n=>{n._zod.bag.contentEncoding="base64url"}),t._zod.check=n=>{M_(n.value)||n.issues.push({code:"invalid_format",format:"base64url",input:n.value,inst:t,continue:!e.abort})}}),wm=I("$ZodE164",(t,e)=>{e.pattern??(e.pattern=gf),we.init(t,e)});function P_(t,e=null){try{let n=t.split(".");if(n.length!==3)return!1;let[r]=n;if(!r)return!1;let o=JSON.parse(atob(r));return!("typ"in o&&o?.typ!=="JWT"||!o.alg||e&&(!("alg"in o)||o.alg!==e))}catch{return!1}}var xm=I("$ZodJWT",(t,e)=>{we.init(t,e),t._zod.check=n=>{P_(n.value,e.alg)||n.issues.push({code:"invalid_format",format:"jwt",input:n.value,inst:t,continue:!e.abort})}});var eu=I("$ZodNumber",(t,e)=>{pe.init(t,e),t._zod.pattern=t._zod.bag.pattern??Sf,t._zod.parse=(n,r)=>{if(e.coerce)try{n.value=Number(n.value)}catch{}let o=n.value;if(typeof o=="number"&&!Number.isNaN(o)&&Number.isFinite(o))return n;let i=typeof o=="number"?Number.isNaN(o)?"NaN":Number.isFinite(o)?void 0:"Infinity":void 0;return n.issues.push({expected:"number",code:"invalid_type",input:o,inst:t,...i?{received:i}:{}}),n}}),Em=I("$ZodNumber",(t,e)=>{Cf.init(t,e),eu.init(t,e)}),_m=I("$ZodBoolean",(t,e)=>{pe.init(t,e),t._zod.pattern=Tf,t._zod.parse=(n,r)=>{if(e.coerce)try{n.value=!!n.value}catch{}let o=n.value;return typeof o=="boolean"||n.issues.push({expected:"boolean",code:"invalid_type",input:o,inst:t}),n}});var Sm=I("$ZodAny",(t,e)=>{pe.init(t,e),t._zod.parse=n=>n}),Tm=I("$ZodUnknown",(t,e)=>{pe.init(t,e),t._zod.parse=n=>n}),km=I("$ZodNever",(t,e)=>{pe.init(t,e),t._zod.parse=(n,r)=>(n.issues.push({expected:"never",code:"invalid_type",input:n.value,inst:t}),n)});function Bf(t,e,n){t.issues.length&&e.issues.push(...Rt(n,t.issues)),e.value[n]=t.value}var Am=I("$ZodArray",(t,e)=>{pe.init(t,e),t._zod.parse=(n,r)=>{let o=n.value;if(!Array.isArray(o))return n.issues.push({expected:"array",code:"invalid_type",input:o,inst:t}),n;n.value=Array(o.length);let i=[];for(let a=0;a<o.length;a++){let s=o[a],l=e.element._zod.run({value:s,issues:[]},r);l instanceof Promise?i.push(l.then(c=>Bf(c,n,a))):Bf(l,n,a)}return i.length?Promise.all(i).then(()=>n):n}});function qi(t,e,n){t.issues.length&&e.issues.push(...Rt(n,t.issues)),e.value[n]=t.value}function Zf(t,e,n,r){t.issues.length?r[n]===void 0?n in r?e.value[n]=void 0:e.value[n]=t.value:e.issues.push(...Rt(n,t.issues)):t.value===void 0?n in r&&(e.value[n]=void 0):e.value[n]=t.value}var Im=I("$ZodObject",(t,e)=>{pe.init(t,e);let n=jr(()=>{let p=Object.keys(e.shape);for(let m of p)if(!(e.shape[m]instanceof pe))throw new Error(`Invalid element at key "${m}": expected a Zod schema`);let v=Gc(e.shape);return{shape:e.shape,keys:p,keySet:new Set(p),numKeys:p.length,optionalKeys:new Set(v)}});ce(t._zod,"propValues",()=>{let p=e.shape,v={};for(let m in p){let h=p[m]._zod;if(h.values){v[m]??(v[m]=new Set);for(let y of h.values)v[m].add(y)}}return v});let r=p=>{let v=new Wi(["shape","payload","ctx"]),m=n.value,h=E=>{let H=vn(E);return`shape[${H}]._zod.run({ value: input[${H}], issues: [] }, ctx)`};v.write("const input = payload.value;");let y=Object.create(null),k=0;for(let E of m.keys)y[E]=`key_${k++}`;v.write("const newResult = {}");for(let E of m.keys)if(m.optionalKeys.has(E)){let H=y[E];v.write(`const ${H} = ${h(E)};`);let _=vn(E);v.write(`
        if (${H}.issues.length) {
          if (input[${_}] === undefined) {
            if (${_} in input) {
              newResult[${_}] = undefined;
            }
          } else {
            payload.issues = payload.issues.concat(
              ${H}.issues.map((iss) => ({
                ...iss,
                path: iss.path ? [${_}, ...iss.path] : [${_}],
              }))
            );
          }
        } else if (${H}.value === undefined) {
          if (${_} in input) newResult[${_}] = undefined;
        } else {
          newResult[${_}] = ${H}.value;
        }
        `)}else{let H=y[E];v.write(`const ${H} = ${h(E)};`),v.write(`
          if (${H}.issues.length) payload.issues = payload.issues.concat(${H}.issues.map(iss => ({
            ...iss,
            path: iss.path ? [${vn(E)}, ...iss.path] : [${vn(E)}]
          })));`),v.write(`newResult[${vn(E)}] = ${H}.value`)}v.write("payload.value = newResult;"),v.write("return payload;");let T=v.compile();return(E,H)=>T(p,E,H)},o,i=sr,a=!Gi.jitless,l=a&&Uc.value,c=e.catchall,u;t._zod.parse=(p,v)=>{u??(u=n.value);let m=p.value;if(!i(m))return p.issues.push({expected:"object",code:"invalid_type",input:m,inst:t}),p;let h=[];if(a&&l&&v?.async===!1&&v.jitless!==!0)o||(o=r(e.shape)),p=o(p,v);else{p.value={};let H=u.shape;for(let _ of u.keys){let f=H[_],w=f._zod.run({value:m[_],issues:[]},v),g=f._zod.optin==="optional"&&f._zod.optout==="optional";w instanceof Promise?h.push(w.then(S=>g?Zf(S,p,_,m):qi(S,p,_))):g?Zf(w,p,_,m):qi(w,p,_)}}if(!c)return h.length?Promise.all(h).then(()=>p):p;let y=[],k=u.keySet,T=c._zod,E=T.def.type;for(let H of Object.keys(m)){if(k.has(H))continue;if(E==="never"){y.push(H);continue}let _=T.run({value:m[H],issues:[]},v);_ instanceof Promise?h.push(_.then(f=>qi(f,p,H))):qi(_,p,H)}return y.length&&p.issues.push({code:"unrecognized_keys",keys:y,input:m,inst:t}),h.length?Promise.all(h).then(()=>p):p}});function Vf(t,e,n,r){for(let o of t)if(o.issues.length===0)return e.value=o.value,e;return e.issues.push({code:"invalid_union",input:e.value,inst:n,errors:t.map(o=>o.issues.map(i=>ft(i,r,Ge())))}),e}var tu=I("$ZodUnion",(t,e)=>{pe.init(t,e),ce(t._zod,"optin",()=>e.options.some(n=>n._zod.optin==="optional")?"optional":void 0),ce(t._zod,"optout",()=>e.options.some(n=>n._zod.optout==="optional")?"optional":void 0),ce(t._zod,"values",()=>{if(e.options.every(n=>n._zod.values))return new Set(e.options.flatMap(n=>Array.from(n._zod.values)))}),ce(t._zod,"pattern",()=>{if(e.options.every(n=>n._zod.pattern)){let n=e.options.map(r=>r._zod.pattern);return new RegExp(`^(${n.map(r=>qr(r.source)).join("|")})$`)}}),t._zod.parse=(n,r)=>{let o=!1,i=[];for(let a of e.options){let s=a._zod.run({value:n.value,issues:[]},r);if(s instanceof Promise)i.push(s),o=!0;else{if(s.issues.length===0)return s;i.push(s)}}return o?Promise.all(i).then(a=>Vf(a,n,t,r)):Vf(i,n,t,r)}}),Rm=I("$ZodDiscriminatedUnion",(t,e)=>{tu.init(t,e);let n=t._zod.parse;ce(t._zod,"propValues",()=>{let o={};for(let i of e.options){let a=i._zod.propValues;if(!a||Object.keys(a).length===0)throw new Error(`Invalid discriminated union option at index "${e.options.indexOf(i)}"`);for(let[s,l]of Object.entries(a)){o[s]||(o[s]=new Set);for(let c of l)o[s].add(c)}}return o});let r=jr(()=>{let o=e.options,i=new Map;for(let a of o){let s=a._zod.propValues[e.discriminator];if(!s||s.size===0)throw new Error(`Invalid discriminated union option at index "${e.options.indexOf(a)}"`);for(let l of s){if(i.has(l))throw new Error(`Duplicate discriminator value "${String(l)}"`);i.set(l,a)}}return i});t._zod.parse=(o,i)=>{let a=o.value;if(!sr(a))return o.issues.push({code:"invalid_type",expected:"object",input:a,inst:t}),o;let s=r.value.get(a?.[e.discriminator]);return s?s._zod.run(o,i):e.unionFallback?n(o,i):(o.issues.push({code:"invalid_union",errors:[],note:"No matching discriminator",input:a,path:[e.discriminator],inst:t}),o)}}),Cm=I("$ZodIntersection",(t,e)=>{pe.init(t,e),t._zod.parse=(n,r)=>{let o=n.value,i=e.left._zod.run({value:o,issues:[]},r),a=e.right._zod.run({value:o,issues:[]},r);return i instanceof Promise||a instanceof Promise?Promise.all([i,a]).then(([l,c])=>jf(n,l,c)):jf(n,i,a)}});function Qc(t,e){if(t===e)return{valid:!0,data:t};if(t instanceof Date&&e instanceof Date&&+t==+e)return{valid:!0,data:t};if(lr(t)&&lr(e)){let n=Object.keys(e),r=Object.keys(t).filter(i=>n.indexOf(i)!==-1),o={...t,...e};for(let i of r){let a=Qc(t[i],e[i]);if(!a.valid)return{valid:!1,mergeErrorPath:[i,...a.mergeErrorPath]};o[i]=a.data}return{valid:!0,data:o}}if(Array.isArray(t)&&Array.isArray(e)){if(t.length!==e.length)return{valid:!1,mergeErrorPath:[]};let n=[];for(let r=0;r<t.length;r++){let o=t[r],i=e[r],a=Qc(o,i);if(!a.valid)return{valid:!1,mergeErrorPath:[r,...a.mergeErrorPath]};n.push(a.data)}return{valid:!0,data:n}}return{valid:!1,mergeErrorPath:[]}}function jf(t,e,n){if(e.issues.length&&t.issues.push(...e.issues),n.issues.length&&t.issues.push(...n.issues),bn(t))return t;let r=Qc(e.value,n.value);if(!r.valid)throw new Error(`Unmergable intersection. Error path: ${JSON.stringify(r.mergeErrorPath)}`);return t.value=r.data,t}var Nm=I("$ZodRecord",(t,e)=>{pe.init(t,e),t._zod.parse=(n,r)=>{let o=n.value;if(!lr(o))return n.issues.push({expected:"record",code:"invalid_type",input:o,inst:t}),n;let i=[];if(e.keyType._zod.values){let a=e.keyType._zod.values;n.value={};for(let l of a)if(typeof l=="string"||typeof l=="number"||typeof l=="symbol"){let c=e.valueType._zod.run({value:o[l],issues:[]},r);c instanceof Promise?i.push(c.then(u=>{u.issues.length&&n.issues.push(...Rt(l,u.issues)),n.value[l]=u.value})):(c.issues.length&&n.issues.push(...Rt(l,c.issues)),n.value[l]=c.value)}let s;for(let l in o)a.has(l)||(s=s??[],s.push(l));s&&s.length>0&&n.issues.push({code:"unrecognized_keys",input:o,inst:t,keys:s})}else{n.value={};for(let a of Reflect.ownKeys(o)){if(a==="__proto__")continue;let s=e.keyType._zod.run({value:a,issues:[]},r);if(s instanceof Promise)throw new Error("Async schemas not supported in object keys currently");if(s.issues.length){n.issues.push({origin:"record",code:"invalid_key",issues:s.issues.map(c=>ft(c,r,Ge())),input:a,path:[a],inst:t}),n.value[s.value]=s.value;continue}let l=e.valueType._zod.run({value:o[a],issues:[]},r);l instanceof Promise?i.push(l.then(c=>{c.issues.length&&n.issues.push(...Rt(a,c.issues)),n.value[s.value]=c.value})):(l.issues.length&&n.issues.push(...Rt(a,l.issues)),n.value[s.value]=l.value)}}return i.length?Promise.all(i).then(()=>n):n}});var Om=I("$ZodEnum",(t,e)=>{pe.init(t,e);let n=Lc(e.entries);t._zod.values=new Set(n),t._zod.pattern=new RegExp(`^(${n.filter(r=>Hc.has(typeof r)).map(r=>typeof r=="string"?Zt(r):r.toString()).join("|")})$`),t._zod.parse=(r,o)=>{let i=r.value;return t._zod.values.has(i)||r.issues.push({code:"invalid_value",values:n,input:i,inst:t}),r}}),Mm=I("$ZodLiteral",(t,e)=>{pe.init(t,e),t._zod.values=new Set(e.values),t._zod.pattern=new RegExp(`^(${e.values.map(n=>typeof n=="string"?Zt(n):n?n.toString():String(n)).join("|")})$`),t._zod.parse=(n,r)=>{let o=n.value;return t._zod.values.has(o)||n.issues.push({code:"invalid_value",values:e.values,input:o,inst:t}),n}});var Pm=I("$ZodTransform",(t,e)=>{pe.init(t,e),t._zod.parse=(n,r)=>{let o=e.transform(n.value,n);if(r.async)return(o instanceof Promise?o:Promise.resolve(o)).then(a=>(n.value=a,n));if(o instanceof Promise)throw new Dt;return n.value=o,n}}),Lm=I("$ZodOptional",(t,e)=>{pe.init(t,e),t._zod.optin="optional",t._zod.optout="optional",ce(t._zod,"values",()=>e.innerType._zod.values?new Set([...e.innerType._zod.values,void 0]):void 0),ce(t._zod,"pattern",()=>{let n=e.innerType._zod.pattern;return n?new RegExp(`^(${qr(n.source)})?$`):void 0}),t._zod.parse=(n,r)=>e.innerType._zod.optin==="optional"?e.innerType._zod.run(n,r):n.value===void 0?n:e.innerType._zod.run(n,r)}),zm=I("$ZodNullable",(t,e)=>{pe.init(t,e),ce(t._zod,"optin",()=>e.innerType._zod.optin),ce(t._zod,"optout",()=>e.innerType._zod.optout),ce(t._zod,"pattern",()=>{let n=e.innerType._zod.pattern;return n?new RegExp(`^(${qr(n.source)}|null)$`):void 0}),ce(t._zod,"values",()=>e.innerType._zod.values?new Set([...e.innerType._zod.values,null]):void 0),t._zod.parse=(n,r)=>n.value===null?n:e.innerType._zod.run(n,r)}),Dm=I("$ZodDefault",(t,e)=>{pe.init(t,e),t._zod.optin="optional",ce(t._zod,"values",()=>e.innerType._zod.values),t._zod.parse=(n,r)=>{if(n.value===void 0)return n.value=e.defaultValue,n;let o=e.innerType._zod.run(n,r);return o instanceof Promise?o.then(i=>Wf(i,e)):Wf(o,e)}});function Wf(t,e){return t.value===void 0&&(t.value=e.defaultValue),t}var $m=I("$ZodPrefault",(t,e)=>{pe.init(t,e),t._zod.optin="optional",ce(t._zod,"values",()=>e.innerType._zod.values),t._zod.parse=(n,r)=>(n.value===void 0&&(n.value=e.defaultValue),e.innerType._zod.run(n,r))}),Um=I("$ZodNonOptional",(t,e)=>{pe.init(t,e),ce(t._zod,"values",()=>{let n=e.innerType._zod.values;return n?new Set([...n].filter(r=>r!==void 0)):void 0}),t._zod.parse=(n,r)=>{let o=e.innerType._zod.run(n,r);return o instanceof Promise?o.then(i=>qf(i,t)):qf(o,t)}});function qf(t,e){return!t.issues.length&&t.value===void 0&&t.issues.push({code:"invalid_type",expected:"nonoptional",input:t.value,inst:e}),t}var Hm=I("$ZodCatch",(t,e)=>{pe.init(t,e),t._zod.optin="optional",ce(t._zod,"optout",()=>e.innerType._zod.optout),ce(t._zod,"values",()=>e.innerType._zod.values),t._zod.parse=(n,r)=>{let o=e.innerType._zod.run(n,r);return o instanceof Promise?o.then(i=>(n.value=i.value,i.issues.length&&(n.value=e.catchValue({...n,error:{issues:i.issues.map(a=>ft(a,r,Ge()))},input:n.value}),n.issues=[]),n)):(n.value=o.value,o.issues.length&&(n.value=e.catchValue({...n,error:{issues:o.issues.map(i=>ft(i,r,Ge()))},input:n.value}),n.issues=[]),n)}});var Gm=I("$ZodPipe",(t,e)=>{pe.init(t,e),ce(t._zod,"values",()=>e.in._zod.values),ce(t._zod,"optin",()=>e.in._zod.optin),ce(t._zod,"optout",()=>e.out._zod.optout),t._zod.parse=(n,r)=>{let o=e.in._zod.run(n,r);return o instanceof Promise?o.then(i=>Yf(i,e,r)):Yf(o,e,r)}});function Yf(t,e,n){return bn(t)?t:e.out._zod.run({value:t.value,issues:t.issues},n)}var Fm=I("$ZodReadonly",(t,e)=>{pe.init(t,e),ce(t._zod,"propValues",()=>e.innerType._zod.propValues),ce(t._zod,"values",()=>e.innerType._zod.values),ce(t._zod,"optin",()=>e.innerType._zod.optin),ce(t._zod,"optout",()=>e.innerType._zod.optout),t._zod.parse=(n,r)=>{let o=e.innerType._zod.run(n,r);return o instanceof Promise?o.then(Kf):Kf(o)}});function Kf(t){return t.value=Object.freeze(t.value),t}var Bm=I("$ZodLazy",(t,e)=>{pe.init(t,e),ce(t._zod,"innerType",()=>e.getter()),ce(t._zod,"pattern",()=>t._zod.innerType._zod.pattern),ce(t._zod,"propValues",()=>t._zod.innerType._zod.propValues),ce(t._zod,"optin",()=>t._zod.innerType._zod.optin),ce(t._zod,"optout",()=>t._zod.innerType._zod.optout),t._zod.parse=(n,r)=>t._zod.innerType._zod.run(n,r)}),Zm=I("$ZodCustom",(t,e)=>{Ve.init(t,e),pe.init(t,e),t._zod.parse=(n,r)=>n,t._zod.check=n=>{let r=n.value,o=e.fn(r);if(o instanceof Promise)return o.then(i=>Xf(i,n,r,t));Xf(o,n,r,t)}});function Xf(t,e,n,r){if(!t){let o={code:"custom",input:n,inst:r,path:[...r._zod.def.path??[]],continue:!r._zod.def.abort};r._zod.def.params&&(o.params=r._zod.def.params),e.issues.push(Bc(o))}}var L_=t=>{let e=typeof t;switch(e){case"number":return Number.isNaN(t)?"NaN":"number";case"object":{if(Array.isArray(t))return"array";if(t===null)return"null";if(Object.getPrototypeOf(t)!==Object.prototype&&t.constructor)return t.constructor.name}}return e},z_=()=>{let t={string:{unit:"characters",verb:"to have"},file:{unit:"bytes",verb:"to have"},array:{unit:"items",verb:"to have"},set:{unit:"items",verb:"to have"}};function e(r){return t[r]??null}let n={regex:"input",email:"email address",url:"URL",emoji:"emoji",uuid:"UUID",uuidv4:"UUIDv4",uuidv6:"UUIDv6",nanoid:"nanoid",guid:"GUID",cuid:"cuid",cuid2:"cuid2",ulid:"ULID",xid:"XID",ksuid:"KSUID",datetime:"ISO datetime",date:"ISO date",time:"ISO time",duration:"ISO duration",ipv4:"IPv4 address",ipv6:"IPv6 address",cidrv4:"IPv4 range",cidrv6:"IPv6 range",base64:"base64-encoded string",base64url:"base64url-encoded string",json_string:"JSON string",e164:"E.164 number",jwt:"JWT",template_literal:"input"};return r=>{switch(r.code){case"invalid_type":return`Invalid input: expected ${r.expected}, received ${L_(r.input)}`;case"invalid_value":return r.values.length===1?`Invalid input: expected ${Zi(r.values[0])}`:`Invalid option: expected one of ${Fi(r.values,"|")}`;case"too_big":{let o=r.inclusive?"<=":"<",i=e(r.origin);return i?`Too big: expected ${r.origin??"value"} to have ${o}${r.maximum.toString()} ${i.unit??"elements"}`:`Too big: expected ${r.origin??"value"} to be ${o}${r.maximum.toString()}`}case"too_small":{let o=r.inclusive?">=":">",i=e(r.origin);return i?`Too small: expected ${r.origin} to have ${o}${r.minimum.toString()} ${i.unit}`:`Too small: expected ${r.origin} to be ${o}${r.minimum.toString()}`}case"invalid_format":{let o=r;return o.format==="starts_with"?`Invalid string: must start with "${o.prefix}"`:o.format==="ends_with"?`Invalid string: must end with "${o.suffix}"`:o.format==="includes"?`Invalid string: must include "${o.includes}"`:o.format==="regex"?`Invalid string: must match pattern ${o.pattern}`:`Invalid ${n[o.format]??r.format}`}case"not_multiple_of":return`Invalid number: must be a multiple of ${r.divisor}`;case"unrecognized_keys":return`Unrecognized key${r.keys.length>1?"s":""}: ${Fi(r.keys,", ")}`;case"invalid_key":return`Invalid key in ${r.origin}`;case"invalid_union":return"Invalid input";case"invalid_element":return`Invalid value in ${r.origin}`;default:return"Invalid input"}}};function cr(){return{localeError:z_()}}var nu=class{constructor(){this._map=new Map,this._idmap=new Map}add(e,...n){let r=n[0];if(this._map.set(e,r),r&&typeof r=="object"&&"id"in r){if(this._idmap.has(r.id))throw new Error(`ID ${r.id} already exists in the registry`);this._idmap.set(r.id,e)}return this}clear(){return this._map=new Map,this._idmap=new Map,this}remove(e){let n=this._map.get(e);return n&&typeof n=="object"&&"id"in n&&this._idmap.delete(n.id),this._map.delete(e),this}get(e){let n=e._zod.parent;if(n){let r={...this.get(n)??{}};return delete r.id,{...r,...this._map.get(e)}}return this._map.get(e)}has(e){return this._map.has(e)}};function Vm(){return new nu}var ur=Vm();function jm(t,e){return new t({type:"string",...V(e)})}function Wm(t,e){return new t({type:"string",format:"email",check:"string_format",abort:!1,...V(e)})}function ru(t,e){return new t({type:"string",format:"guid",check:"string_format",abort:!1,...V(e)})}function qm(t,e){return new t({type:"string",format:"uuid",check:"string_format",abort:!1,...V(e)})}function Ym(t,e){return new t({type:"string",format:"uuid",check:"string_format",abort:!1,version:"v4",...V(e)})}function Km(t,e){return new t({type:"string",format:"uuid",check:"string_format",abort:!1,version:"v6",...V(e)})}function Xm(t,e){return new t({type:"string",format:"uuid",check:"string_format",abort:!1,version:"v7",...V(e)})}function Jm(t,e){return new t({type:"string",format:"url",check:"string_format",abort:!1,...V(e)})}function Qm(t,e){return new t({type:"string",format:"emoji",check:"string_format",abort:!1,...V(e)})}function eg(t,e){return new t({type:"string",format:"nanoid",check:"string_format",abort:!1,...V(e)})}function tg(t,e){return new t({type:"string",format:"cuid",check:"string_format",abort:!1,...V(e)})}function ng(t,e){return new t({type:"string",format:"cuid2",check:"string_format",abort:!1,...V(e)})}function rg(t,e){return new t({type:"string",format:"ulid",check:"string_format",abort:!1,...V(e)})}function og(t,e){return new t({type:"string",format:"xid",check:"string_format",abort:!1,...V(e)})}function ig(t,e){return new t({type:"string",format:"ksuid",check:"string_format",abort:!1,...V(e)})}function ag(t,e){return new t({type:"string",format:"ipv4",check:"string_format",abort:!1,...V(e)})}function sg(t,e){return new t({type:"string",format:"ipv6",check:"string_format",abort:!1,...V(e)})}function lg(t,e){return new t({type:"string",format:"cidrv4",check:"string_format",abort:!1,...V(e)})}function cg(t,e){return new t({type:"string",format:"cidrv6",check:"string_format",abort:!1,...V(e)})}function ug(t,e){return new t({type:"string",format:"base64",check:"string_format",abort:!1,...V(e)})}function dg(t,e){return new t({type:"string",format:"base64url",check:"string_format",abort:!1,...V(e)})}function pg(t,e){return new t({type:"string",format:"e164",check:"string_format",abort:!1,...V(e)})}function hg(t,e){return new t({type:"string",format:"jwt",check:"string_format",abort:!1,...V(e)})}function fg(t,e){return new t({type:"string",format:"datetime",check:"string_format",offset:!1,local:!1,precision:null,...V(e)})}function mg(t,e){return new t({type:"string",format:"date",check:"string_format",...V(e)})}function gg(t,e){return new t({type:"string",format:"time",check:"string_format",precision:null,...V(e)})}function vg(t,e){return new t({type:"string",format:"duration",check:"string_format",...V(e)})}function bg(t,e){return new t({type:"number",check:"number_format",abort:!1,format:"safeint",...V(e)})}function yg(t,e){return new t({type:"boolean",...V(e)})}function wg(t){return new t({type:"any"})}function xg(t){return new t({type:"unknown"})}function Eg(t,e){return new t({type:"never",...V(e)})}function Ki(t,e){return new Xc({check:"less_than",...V(e),value:t,inclusive:!1})}function Xr(t,e){return new Xc({check:"less_than",...V(e),value:t,inclusive:!0})}function Xi(t,e){return new Jc({check:"greater_than",...V(e),value:t,inclusive:!1})}function Jr(t,e){return new Jc({check:"greater_than",...V(e),value:t,inclusive:!0})}function Ji(t,e){return new Rf({check:"multiple_of",...V(e),value:t})}function Qi(t,e){return new Nf({check:"max_length",...V(e),maximum:t})}function dr(t,e){return new Of({check:"min_length",...V(e),minimum:t})}function ea(t,e){return new Mf({check:"length_equals",...V(e),length:t})}function ou(t,e){return new Pf({check:"string_format",format:"regex",...V(e),pattern:t})}function iu(t){return new Lf({check:"string_format",format:"lowercase",...V(t)})}function au(t){return new zf({check:"string_format",format:"uppercase",...V(t)})}function su(t,e){return new Df({check:"string_format",format:"includes",...V(e),includes:t})}function lu(t,e){return new $f({check:"string_format",format:"starts_with",...V(e),prefix:t})}function cu(t,e){return new Uf({check:"string_format",format:"ends_with",...V(e),suffix:t})}function yn(t){return new Hf({check:"overwrite",tx:t})}function uu(t){return yn(e=>e.normalize(t))}function du(){return yn(t=>t.trim())}function pu(){return yn(t=>t.toLowerCase())}function hu(){return yn(t=>t.toUpperCase())}function _g(t,e,n){return new t({type:"array",element:e,...V(n)})}function Sg(t,e,n){let r=V(n);return r.abort??(r.abort=!0),new t({type:"custom",check:"custom",fn:e,...r})}function Tg(t,e,n){return new t({type:"custom",check:"custom",fn:e,...V(n)})}var B_=I("ZodISODateTime",(t,e)=>{cm.init(t,e),Se.init(t,e)});function kg(t){return fg(B_,t)}var Z_=I("ZodISODate",(t,e)=>{um.init(t,e),Se.init(t,e)});function Ag(t){return mg(Z_,t)}var V_=I("ZodISOTime",(t,e)=>{dm.init(t,e),Se.init(t,e)});function Ig(t){return gg(V_,t)}var j_=I("ZodISODuration",(t,e)=>{pm.init(t,e),Se.init(t,e)});function Rg(t){return vg(j_,t)}var Ng=(t,e)=>{Vi.init(t,e),t.name="ZodError",Object.defineProperties(t,{format:{value:n=>jc(t,n)},flatten:{value:n=>Vc(t,n)},addIssue:{value:n=>t.issues.push(n)},addIssues:{value:n=>t.issues.push(...n)},isEmpty:{get(){return t.issues.length===0}}})},hL=I("ZodError",Ng),eo=I("ZodError",Ng,{Parent:Error});var Og=Yh(eo),Mg=Kh(eo),Pg=Wc(eo),Lg=qc(eo);var Te=I("ZodType",(t,e)=>(pe.init(t,e),t.def=e,Object.defineProperty(t,"_def",{value:e}),t.check=(...n)=>t.clone({...e,checks:[...e.checks??[],...n.map(r=>typeof r=="function"?{_zod:{check:r,def:{check:"custom"},onattach:[]}}:r)]}),t.clone=(n,r)=>ht(t,n,r),t.brand=()=>t,t.register=((n,r)=>(n.add(t,r),t)),t.parse=(n,r)=>Og(t,n,r,{callee:t.parse}),t.safeParse=(n,r)=>Pg(t,n,r),t.parseAsync=async(n,r)=>Mg(t,n,r,{callee:t.parseAsync}),t.safeParseAsync=async(n,r)=>Lg(t,n,r),t.spa=t.safeParseAsync,t.refine=(n,r)=>t.check(O0(n,r)),t.superRefine=n=>t.check(M0(n)),t.overwrite=n=>t.check(yn(n)),t.optional=()=>Dg(t),t.nullable=()=>$g(t),t.nullish=()=>Dg($g(t)),t.nonoptional=n=>I0(t,n),t.array=()=>Oe(t),t.or=n=>to([t,n]),t.and=n=>E0(t,n),t.transform=n=>Ug(t,S0(n)),t.default=n=>T0(t,n),t.prefault=n=>A0(t,n),t.catch=n=>R0(t,n),t.pipe=n=>Ug(t,n),t.readonly=()=>C0(t),t.describe=n=>{let r=t.clone();return ur.add(r,{description:n}),r},Object.defineProperty(t,"description",{get(){return ur.get(t)?.description},configurable:!0}),t.meta=(...n)=>{if(n.length===0)return ur.get(t);let r=t.clone();return ur.add(r,n[0]),r},t.isOptional=()=>t.safeParse(void 0).success,t.isNullable=()=>t.safeParse(null).success,t)),Hg=I("_ZodString",(t,e)=>{Yi.init(t,e),Te.init(t,e);let n=t._zod.bag;t.format=n.format??null,t.minLength=n.minimum??null,t.maxLength=n.maximum??null,t.regex=(...r)=>t.check(ou(...r)),t.includes=(...r)=>t.check(su(...r)),t.startsWith=(...r)=>t.check(lu(...r)),t.endsWith=(...r)=>t.check(cu(...r)),t.min=(...r)=>t.check(dr(...r)),t.max=(...r)=>t.check(Qi(...r)),t.length=(...r)=>t.check(ea(...r)),t.nonempty=(...r)=>t.check(dr(1,...r)),t.lowercase=r=>t.check(iu(r)),t.uppercase=r=>t.check(au(r)),t.trim=()=>t.check(du()),t.normalize=(...r)=>t.check(uu(...r)),t.toLowerCase=()=>t.check(pu()),t.toUpperCase=()=>t.check(hu())}),Y_=I("ZodString",(t,e)=>{Yi.init(t,e),Hg.init(t,e),t.email=n=>t.check(Wm(K_,n)),t.url=n=>t.check(Jm(X_,n)),t.jwt=n=>t.check(hg(p0,n)),t.emoji=n=>t.check(Qm(J_,n)),t.guid=n=>t.check(ru(zg,n)),t.uuid=n=>t.check(qm(ta,n)),t.uuidv4=n=>t.check(Ym(ta,n)),t.uuidv6=n=>t.check(Km(ta,n)),t.uuidv7=n=>t.check(Xm(ta,n)),t.nanoid=n=>t.check(eg(Q_,n)),t.guid=n=>t.check(ru(zg,n)),t.cuid=n=>t.check(tg(e0,n)),t.cuid2=n=>t.check(ng(t0,n)),t.ulid=n=>t.check(rg(n0,n)),t.base64=n=>t.check(ug(c0,n)),t.base64url=n=>t.check(dg(u0,n)),t.xid=n=>t.check(og(r0,n)),t.ksuid=n=>t.check(ig(o0,n)),t.ipv4=n=>t.check(ag(i0,n)),t.ipv6=n=>t.check(sg(a0,n)),t.cidrv4=n=>t.check(lg(s0,n)),t.cidrv6=n=>t.check(cg(l0,n)),t.e164=n=>t.check(pg(d0,n)),t.datetime=n=>t.check(kg(n)),t.date=n=>t.check(Ag(n)),t.time=n=>t.check(Ig(n)),t.duration=n=>t.check(Rg(n))});function A(t){return jm(Y_,t)}var Se=I("ZodStringFormat",(t,e)=>{we.init(t,e),Hg.init(t,e)}),K_=I("ZodEmail",(t,e)=>{em.init(t,e),Se.init(t,e)});var zg=I("ZodGUID",(t,e)=>{Jf.init(t,e),Se.init(t,e)});var ta=I("ZodUUID",(t,e)=>{Qf.init(t,e),Se.init(t,e)});var X_=I("ZodURL",(t,e)=>{tm.init(t,e),Se.init(t,e)});var J_=I("ZodEmoji",(t,e)=>{nm.init(t,e),Se.init(t,e)});var Q_=I("ZodNanoID",(t,e)=>{rm.init(t,e),Se.init(t,e)});var e0=I("ZodCUID",(t,e)=>{om.init(t,e),Se.init(t,e)});var t0=I("ZodCUID2",(t,e)=>{im.init(t,e),Se.init(t,e)});var n0=I("ZodULID",(t,e)=>{am.init(t,e),Se.init(t,e)});var r0=I("ZodXID",(t,e)=>{sm.init(t,e),Se.init(t,e)});var o0=I("ZodKSUID",(t,e)=>{lm.init(t,e),Se.init(t,e)});var i0=I("ZodIPv4",(t,e)=>{hm.init(t,e),Se.init(t,e)});var a0=I("ZodIPv6",(t,e)=>{fm.init(t,e),Se.init(t,e)});var s0=I("ZodCIDRv4",(t,e)=>{mm.init(t,e),Se.init(t,e)});var l0=I("ZodCIDRv6",(t,e)=>{gm.init(t,e),Se.init(t,e)});var c0=I("ZodBase64",(t,e)=>{bm.init(t,e),Se.init(t,e)});var u0=I("ZodBase64URL",(t,e)=>{ym.init(t,e),Se.init(t,e)});var d0=I("ZodE164",(t,e)=>{wm.init(t,e),Se.init(t,e)});var p0=I("ZodJWT",(t,e)=>{xm.init(t,e),Se.init(t,e)});var h0=I("ZodNumber",(t,e)=>{eu.init(t,e),Te.init(t,e),t.gt=(r,o)=>t.check(Xi(r,o)),t.gte=(r,o)=>t.check(Jr(r,o)),t.min=(r,o)=>t.check(Jr(r,o)),t.lt=(r,o)=>t.check(Ki(r,o)),t.lte=(r,o)=>t.check(Xr(r,o)),t.max=(r,o)=>t.check(Xr(r,o)),t.int=r=>t.check(K(r)),t.safe=r=>t.check(K(r)),t.positive=r=>t.check(Xi(0,r)),t.nonnegative=r=>t.check(Jr(0,r)),t.negative=r=>t.check(Ki(0,r)),t.nonpositive=r=>t.check(Xr(0,r)),t.multipleOf=(r,o)=>t.check(Ji(r,o)),t.step=(r,o)=>t.check(Ji(r,o)),t.finite=()=>t;let n=t._zod.bag;t.minValue=Math.max(n.minimum??Number.NEGATIVE_INFINITY,n.exclusiveMinimum??Number.NEGATIVE_INFINITY)??null,t.maxValue=Math.min(n.maximum??Number.POSITIVE_INFINITY,n.exclusiveMaximum??Number.POSITIVE_INFINITY)??null,t.isInt=(n.format??"").includes("int")||Number.isSafeInteger(n.multipleOf??.5),t.isFinite=!0,t.format=n.format??null});var f0=I("ZodNumberFormat",(t,e)=>{Em.init(t,e),h0.init(t,e)});function K(t){return bg(f0,t)}var m0=I("ZodBoolean",(t,e)=>{_m.init(t,e),Te.init(t,e)});function re(t){return yg(m0,t)}var g0=I("ZodAny",(t,e)=>{Sm.init(t,e),Te.init(t,e)});function j(){return wg(g0)}var v0=I("ZodUnknown",(t,e)=>{Tm.init(t,e),Te.init(t,e)});function fu(){return xg(v0)}var b0=I("ZodNever",(t,e)=>{km.init(t,e),Te.init(t,e)});function y0(t){return Eg(b0,t)}var na=I("ZodArray",(t,e)=>{Am.init(t,e),Te.init(t,e),t.element=e.element,t.min=(n,r)=>t.check(dr(n,r)),t.nonempty=n=>t.check(dr(1,n)),t.max=(n,r)=>t.check(Qi(n,r)),t.length=(n,r)=>t.check(ea(n,r)),t.unwrap=()=>t.element});function Oe(t,e){return _g(na,t,e)}var pr=I("ZodObject",(t,e)=>{Im.init(t,e),Te.init(t,e),ue.defineLazy(t,"shape",()=>e.shape),t.keyof=()=>wn(Object.keys(t._zod.def.shape)),t.catchall=n=>t.clone({...t._zod.def,catchall:n}),t.passthrough=()=>t.clone({...t._zod.def,catchall:fu()}),t.loose=()=>t.clone({...t._zod.def,catchall:fu()}),t.strict=()=>t.clone({...t._zod.def,catchall:y0()}),t.strip=()=>t.clone({...t._zod.def,catchall:void 0}),t.extend=n=>ue.extend(t,n),t.merge=n=>ue.merge(t,n),t.pick=n=>ue.pick(t,n),t.omit=n=>ue.omit(t,n),t.partial=(...n)=>ue.partial(oa,t,n[0]),t.required=(...n)=>ue.required(Fg,t,n[0])});function z(t,e){return new pr({type:"object",get shape(){return ue.assignProp(this,"shape",{...t}),this.shape},catchall:fu(),...ue.normalizeParams(e)})}var ra=I("ZodUnion",(t,e)=>{tu.init(t,e),Te.init(t,e),t.options=e.options});function to(t,e){return new ra({type:"union",options:t,...ue.normalizeParams(e)})}var w0=I("ZodDiscriminatedUnion",(t,e)=>{ra.init(t,e),Rm.init(t,e)});function Vt(t,e,n){return new w0({type:"union",options:e,discriminator:t,...ue.normalizeParams(n)})}var x0=I("ZodIntersection",(t,e)=>{Cm.init(t,e),Te.init(t,e)});function E0(t,e){return new x0({type:"intersection",left:t,right:e})}var Gg=I("ZodRecord",(t,e)=>{Nm.init(t,e),Te.init(t,e),t.keyType=e.keyType,t.valueType=e.valueType});var mu=I("ZodEnum",(t,e)=>{Om.init(t,e),Te.init(t,e),t.enum=e.entries,t.options=Object.values(e.entries);let n=new Set(Object.keys(e.entries));t.extract=(r,o)=>{let i={};for(let a of r)if(n.has(a))i[a]=e.entries[a];else throw new Error(`Key ${a} not found in enum`);return new mu({...e,checks:[],...ue.normalizeParams(o),entries:i})},t.exclude=(r,o)=>{let i={...e.entries};for(let a of r)if(n.has(a))delete i[a];else throw new Error(`Key ${a} not found in enum`);return new mu({...e,checks:[],...ue.normalizeParams(o),entries:i})}});function wn(t,e){let n=Array.isArray(t)?Object.fromEntries(t.map(r=>[r,r])):t;return new mu({type:"enum",entries:n,...ue.normalizeParams(e)})}var gu=I("ZodLiteral",(t,e)=>{Mm.init(t,e),Te.init(t,e),t.values=new Set(e.values),Object.defineProperty(t,"value",{get(){if(e.values.length>1)throw new Error("This schema contains multiple valid literal values. Use `.values` instead.");return e.values[0]}})});function G(t,e){return new gu({type:"literal",values:Array.isArray(t)?t:[t],...ue.normalizeParams(e)})}var _0=I("ZodTransform",(t,e)=>{Pm.init(t,e),Te.init(t,e),t._zod.parse=(n,r)=>{n.addIssue=i=>{if(typeof i=="string")n.issues.push(ue.issue(i,n.value,e));else{let a=i;a.fatal&&(a.continue=!1),a.code??(a.code="custom"),a.input??(a.input=n.value),a.inst??(a.inst=t),a.continue??(a.continue=!0),n.issues.push(ue.issue(a))}};let o=e.transform(n.value,n);return o instanceof Promise?o.then(i=>(n.value=i,n)):(n.value=o,n)}});function S0(t){return new _0({type:"transform",transform:t})}var oa=I("ZodOptional",(t,e)=>{Lm.init(t,e),Te.init(t,e),t.unwrap=()=>t._zod.def.innerType});function Dg(t){return new oa({type:"optional",innerType:t})}var vu=I("ZodNullable",(t,e)=>{zm.init(t,e),Te.init(t,e),t.unwrap=()=>t._zod.def.innerType});function $g(t){return new vu({type:"nullable",innerType:t})}var bu=I("ZodDefault",(t,e)=>{Dm.init(t,e),Te.init(t,e),t.unwrap=()=>t._zod.def.innerType,t.removeDefault=t.unwrap});function T0(t,e){return new bu({type:"default",innerType:t,get defaultValue(){return typeof e=="function"?e():e}})}var k0=I("ZodPrefault",(t,e)=>{$m.init(t,e),Te.init(t,e),t.unwrap=()=>t._zod.def.innerType});function A0(t,e){return new k0({type:"prefault",innerType:t,get defaultValue(){return typeof e=="function"?e():e}})}var Fg=I("ZodNonOptional",(t,e)=>{Um.init(t,e),Te.init(t,e),t.unwrap=()=>t._zod.def.innerType});function I0(t,e){return new Fg({type:"nonoptional",innerType:t,...ue.normalizeParams(e)})}var yu=I("ZodCatch",(t,e)=>{Hm.init(t,e),Te.init(t,e),t.unwrap=()=>t._zod.def.innerType,t.removeCatch=t.unwrap});function R0(t,e){return new yu({type:"catch",innerType:t,catchValue:typeof e=="function"?e:()=>e})}var wu=I("ZodPipe",(t,e)=>{Gm.init(t,e),Te.init(t,e),t.in=e.in,t.out=e.out});function Ug(t,e){return new wu({type:"pipe",in:t,out:e})}var xu=I("ZodReadonly",(t,e)=>{Fm.init(t,e),Te.init(t,e)});function C0(t){return new xu({type:"readonly",innerType:t})}var Bg=I("ZodLazy",(t,e)=>{Bm.init(t,e),Te.init(t,e),t.unwrap=()=>t._zod.def.getter()});var Zg=I("ZodCustom",(t,e)=>{Zm.init(t,e),Te.init(t,e)});function N0(t){let e=new Ve({check:"custom"});return e._zod.check=t,e}function hr(t,e){return Sg(Zg,t??(()=>!0),e)}function O0(t,e={}){return Tg(Zg,t,e)}function M0(t){let e=N0(n=>(n.addIssue=r=>{if(typeof r=="string")n.issues.push(ue.issue(r,n.value,e._zod.def));else{let o=r;o.fatal&&(o.continue=!1),o.code??(o.code="custom"),o.input??(o.input=n.value),o.inst??(o.inst=e),o.continue??(o.continue=!e._zod.def.abort),n.issues.push(ue.issue(o))}},t(n.value,n)));return e}Ge(cr());var L0=wn(b),q=hr(t=>typeof t=="object"&&t!==null&&!Array.isArray(t)),ne=A(),Vg=wn(["developer","system","assistant","user"]),z0=z({type:G(b.TEXT_MESSAGE_START),timestamp:K().min(-9007199254740991).max(9007199254740991).optional(),rawEvent:j().refine(t=>t!==null).optional(),metadata:q.optional(),subagentRunId:ne.optional(),messageId:A(),role:Vg.optional(),name:A().optional()}),D0=z({type:G(b.TEXT_MESSAGE_CONTENT),timestamp:K().min(-9007199254740991).max(9007199254740991).optional(),rawEvent:j().refine(t=>t!==null).optional(),metadata:q.optional(),subagentRunId:ne.optional(),messageId:A(),delta:A()}),$0=z({type:G(b.TEXT_MESSAGE_END),timestamp:K().min(-9007199254740991).max(9007199254740991).optional(),rawEvent:j().refine(t=>t!==null).optional(),metadata:q.optional(),subagentRunId:ne.optional(),messageId:A()}),Eu=z({type:G(b.TEXT_MESSAGE_CHUNK),timestamp:K().min(-9007199254740991).max(9007199254740991).optional(),rawEvent:j().refine(t=>t!==null).optional(),metadata:q.optional(),subagentRunId:ne.optional(),messageId:A().optional(),role:Vg.optional(),delta:A().optional(),name:A().optional()}),U0=z({type:G(b.TOOL_CALL_START),timestamp:K().min(-9007199254740991).max(9007199254740991).optional(),rawEvent:j().refine(t=>t!==null).optional(),metadata:q.optional(),subagentRunId:ne.optional(),toolCallId:A(),toolCallName:A(),parentMessageId:A().optional()}),H0=z({type:G(b.TOOL_CALL_ARGS),timestamp:K().min(-9007199254740991).max(9007199254740991).optional(),rawEvent:j().refine(t=>t!==null).optional(),metadata:q.optional(),subagentRunId:ne.optional(),toolCallId:A(),delta:A()}),G0=z({type:G(b.TOOL_CALL_END),timestamp:K().min(-9007199254740991).max(9007199254740991).optional(),rawEvent:j().refine(t=>t!==null).optional(),metadata:q.optional(),subagentRunId:ne.optional(),toolCallId:A()}),_u=z({type:G(b.TOOL_CALL_CHUNK),timestamp:K().min(-9007199254740991).max(9007199254740991).optional(),rawEvent:j().refine(t=>t!==null).optional(),metadata:q.optional(),subagentRunId:ne.optional(),toolCallId:A().optional(),toolCallName:A().optional(),parentMessageId:A().optional(),delta:A().optional()}),F0=z({type:G("text"),id:A().optional(),text:A(),metadata:j().refine(t=>t!==null).optional()}),B0=z({type:G("data"),value:A(),mimeType:A()}),Z0=z({type:G("url"),value:A(),mimeType:A().optional()}),V0=z({type:G("file"),value:A(),provider:A().optional(),mimeType:A().optional()}),ia=Vt("type",[B0,Z0,V0]),j0=z({type:G("image"),id:A().optional(),source:ia,metadata:j().refine(t=>t!==null).optional()}),W0=z({type:G("audio"),id:A().optional(),source:ia,metadata:j().refine(t=>t!==null).optional()}),q0=z({type:G("video"),id:A().optional(),source:ia,metadata:j().refine(t=>t!==null).optional()}),Y0=z({type:G("document"),id:A().optional(),source:ia,metadata:j().refine(t=>t!==null).optional()}),Su=Vt("type",[F0,j0,W0,q0,Y0]),K0=z({type:G(b.TOOL_CALL_RESULT),timestamp:K().min(-9007199254740991).max(9007199254740991).optional(),rawEvent:j().refine(t=>t!==null).optional(),metadata:q.optional(),subagentRunId:ne.optional(),messageId:A(),toolCallId:A(),content:to([A(),Oe(Su)]),role:G("tool").optional()}),jg=j(),X0=z({type:G(b.STATE_SNAPSHOT),timestamp:K().min(-9007199254740991).max(9007199254740991).optional(),rawEvent:j().refine(t=>t!==null).optional(),metadata:q.optional(),subagentRunId:ne.optional(),snapshot:jg.refine(t=>t!==void 0)}),jt=A().regex(new RegExp("^(/([^/~]|~[01])*)*$")),J0=z({op:G("add"),path:jt,value:j().refine(t=>t!==void 0)}).meta({specOpen:!0}),Q0=z({op:G("remove"),path:jt}).meta({specOpen:!0}),eS=z({op:G("replace"),path:jt,value:j().refine(t=>t!==void 0)}).meta({specOpen:!0}),tS=z({op:G("move"),from:jt,path:jt}).meta({specOpen:!0}),nS=z({op:G("copy"),from:jt,path:jt}).meta({specOpen:!0}),rS=z({op:G("test"),path:jt,value:j().refine(t=>t!==void 0)}).meta({specOpen:!0}),oS=Vt("op",[J0,Q0,eS,tS,nS,rS]),Wg=Oe(oS),iS=z({type:G(b.STATE_DELTA),timestamp:K().min(-9007199254740991).max(9007199254740991).optional(),rawEvent:j().refine(t=>t!==null).optional(),metadata:q.optional(),subagentRunId:ne.optional(),delta:Wg}),aS=z({subagentRunId:ne.optional(),id:A(),role:G("developer"),name:A().optional(),encryptedValue:A().optional(),metadata:q.optional(),content:A()}),sS=z({subagentRunId:ne.optional(),id:A(),role:G("system"),name:A().optional(),encryptedValue:A().optional(),metadata:q.optional(),content:A()}),lS=z({name:A(),arguments:A()}),cS=z({id:A(),type:G("function"),function:lS,encryptedValue:A().optional(),metadata:q.optional()}),uS=z({subagentRunId:ne.optional(),id:A(),role:G("assistant"),name:A().optional(),encryptedValue:A().optional(),metadata:q.optional(),content:A().optional(),toolCalls:Oe(cS).optional()}),dS=z({subagentRunId:ne.optional(),id:A(),role:G("user"),name:A().optional(),encryptedValue:A().optional(),metadata:q.optional(),content:to([A(),Oe(Su)])}),pS=z({subagentRunId:ne.optional(),id:A(),role:G("tool"),content:to([A(),Oe(Su)]),toolCallId:A(),error:A().optional(),encryptedValue:A().optional(),metadata:q.optional()}),hS=z({subagentRunId:ne.optional(),id:A(),role:G("activity"),activityType:A(),content:hr(t=>typeof t=="object"&&t!==null&&!Array.isArray(t)),metadata:q.optional()}),fS=z({subagentRunId:ne.optional(),id:A(),role:G("reasoning"),content:A(),encryptedValue:A().optional(),metadata:q.optional()}),qg=Vt("role",[aS,sS,uS,dS,pS,hS,fS]),mS=z({type:G(b.MESSAGES_SNAPSHOT),timestamp:K().min(-9007199254740991).max(9007199254740991).optional(),rawEvent:j().refine(t=>t!==null).optional(),metadata:q.optional(),messages:Oe(qg)}),gS=z({type:G(b.ACTIVITY_SNAPSHOT),timestamp:K().min(-9007199254740991).max(9007199254740991).optional(),rawEvent:j().refine(t=>t!==null).optional(),metadata:q.optional(),subagentRunId:ne.optional(),messageId:A(),activityType:A(),content:hr(t=>typeof t=="object"&&t!==null&&!Array.isArray(t)),replace:re().optional()}),vS=z({type:G(b.ACTIVITY_DELTA),timestamp:K().min(-9007199254740991).max(9007199254740991).optional(),rawEvent:j().refine(t=>t!==null).optional(),metadata:q.optional(),subagentRunId:ne.optional(),messageId:A(),activityType:A(),patch:Wg}),bS=z({type:G(b.RAW),timestamp:K().min(-9007199254740991).max(9007199254740991).optional(),rawEvent:j().refine(t=>t!==null).optional(),metadata:q.optional(),subagentRunId:ne.optional(),event:j().refine(t=>t!==void 0),source:A().optional()}),yS=z({type:G(b.CUSTOM),timestamp:K().min(-9007199254740991).max(9007199254740991).optional(),rawEvent:j().refine(t=>t!==null).optional(),metadata:q.optional(),subagentRunId:ne.optional(),name:A(),value:j().refine(t=>t!==void 0)}),Yg=z({name:A(),description:A(),parameters:j().refine(t=>t!==null).optional(),metadata:q.optional()}),wS=z({description:A(),value:A()}),xS=z({interruptId:A(),status:wn(["resolved","cancelled"]),payload:j().refine(t=>t!==null).optional(),metadata:q.optional()}),aa=z({threadId:A(),runId:A(),protocolVersion:A().optional(),parentRunId:A().optional(),state:jg.refine(t=>t!==null).nullable().transform(t=>t??void 0).optional(),messages:Oe(qg),tools:Oe(Yg).default(()=>[]),context:Oe(wS).default(()=>[]),forwardedProps:j().refine(t=>t!==null).optional(),resume:Oe(xS).optional()}),ES=z({type:G(b.RUN_STARTED),timestamp:K().min(-9007199254740991).max(9007199254740991).optional(),rawEvent:j().refine(t=>t!==null).optional(),metadata:q.optional(),threadId:A(),runId:A(),protocolVersion:A().optional(),parentRunId:A().optional(),input:aa.optional()}),_S=z({type:G("success"),pendingToolCallIds:Oe(A()).optional()}),SS=z({subagentRunId:ne.optional(),id:A(),reason:A(),message:A().optional(),toolCallId:A().optional(),responseSchema:hr(t=>typeof t=="object"&&t!==null&&!Array.isArray(t)).optional(),expiresAt:A().optional(),metadata:q.optional()}),TS=z({type:G("interrupt"),interrupts:Oe(SS).min(1)}),kS=z({type:G("cancelled")}),AS=Vt("type",[_S,TS,kS]),Kg=z({provider:A().optional(),model:A().optional(),inputTokens:K().min(0).max(9007199254740991).optional(),outputTokens:K().min(0).max(9007199254740991).optional(),totalTokens:K().min(0).max(9007199254740991).optional(),reasoningTokens:K().min(0).max(9007199254740991).optional(),cachedInputTokens:K().min(0).max(9007199254740991).optional(),cacheWriteInputTokens:K().min(0).max(9007199254740991).optional()}),IS=z({type:G(b.RUN_FINISHED),timestamp:K().min(-9007199254740991).max(9007199254740991).optional(),rawEvent:j().refine(t=>t!==null).optional(),metadata:q.optional(),threadId:A(),runId:A(),result:j().refine(t=>t!==null).optional(),outcome:AS.optional(),usage:Oe(Kg).optional()}),RS=z({type:G(b.RUN_ERROR),timestamp:K().min(-9007199254740991).max(9007199254740991).optional(),rawEvent:j().refine(t=>t!==null).optional(),metadata:q.optional(),message:A(),code:A().optional(),usage:Oe(Kg).optional()}),CS=z({type:G(b.STEP_STARTED),timestamp:K().min(-9007199254740991).max(9007199254740991).optional(),rawEvent:j().refine(t=>t!==null).optional(),metadata:q.optional(),subagentRunId:ne.optional(),stepName:A()}),NS=z({type:G(b.STEP_FINISHED),timestamp:K().min(-9007199254740991).max(9007199254740991).optional(),rawEvent:j().refine(t=>t!==null).optional(),metadata:q.optional(),subagentRunId:ne.optional(),stepName:A()}),OS=z({type:G(b.REASONING_START),timestamp:K().min(-9007199254740991).max(9007199254740991).optional(),rawEvent:j().refine(t=>t!==null).optional(),metadata:q.optional(),subagentRunId:ne.optional(),messageId:A()}),MS=z({type:G(b.REASONING_MESSAGE_START),timestamp:K().min(-9007199254740991).max(9007199254740991).optional(),rawEvent:j().refine(t=>t!==null).optional(),metadata:q.optional(),subagentRunId:ne.optional(),messageId:A(),role:G("reasoning")}),PS=z({type:G(b.REASONING_MESSAGE_CONTENT),timestamp:K().min(-9007199254740991).max(9007199254740991).optional(),rawEvent:j().refine(t=>t!==null).optional(),metadata:q.optional(),subagentRunId:ne.optional(),messageId:A(),delta:A()}),LS=z({type:G(b.REASONING_MESSAGE_END),timestamp:K().min(-9007199254740991).max(9007199254740991).optional(),rawEvent:j().refine(t=>t!==null).optional(),metadata:q.optional(),subagentRunId:ne.optional(),messageId:A()}),Tu=z({type:G(b.REASONING_MESSAGE_CHUNK),timestamp:K().min(-9007199254740991).max(9007199254740991).optional(),rawEvent:j().refine(t=>t!==null).optional(),metadata:q.optional(),subagentRunId:ne.optional(),messageId:A().optional(),delta:A().optional()}),zS=z({type:G(b.REASONING_END),timestamp:K().min(-9007199254740991).max(9007199254740991).optional(),rawEvent:j().refine(t=>t!==null).optional(),metadata:q.optional(),subagentRunId:ne.optional(),messageId:A()}),DS=wn(["tool-call","message"]),$S=z({type:G(b.REASONING_ENCRYPTED_VALUE),timestamp:K().min(-9007199254740991).max(9007199254740991).optional(),rawEvent:j().refine(t=>t!==null).optional(),metadata:q.optional(),subagentRunId:ne.optional(),subtype:DS,entityId:A(),encryptedValue:A()}),US=z({type:G(b.SUBAGENT_STARTED),timestamp:K().min(-9007199254740991).max(9007199254740991).optional(),rawEvent:j().refine(t=>t!==null).optional(),metadata:q.optional(),subagentRunId:ne,name:A(),description:A().optional(),parentSubagentRunId:ne.optional(),parentToolCallId:A().optional(),parentMessageId:A().optional()}),HS=z({type:G("success")}),GS=z({type:G("suspended"),interruptIds:Oe(A()).optional()}),FS=Vt("type",[HS,GS]),BS=z({type:G(b.SUBAGENT_FINISHED),timestamp:K().min(-9007199254740991).max(9007199254740991).optional(),rawEvent:j().refine(t=>t!==null).optional(),metadata:q.optional(),subagentRunId:ne,result:j().refine(t=>t!==null).optional(),outcome:FS.optional()}),ZS=z({type:G(b.SUBAGENT_ERROR),timestamp:K().min(-9007199254740991).max(9007199254740991).optional(),rawEvent:j().refine(t=>t!==null).optional(),metadata:q.optional(),subagentRunId:ne,message:A(),code:A().optional()}),ku=Vt("type",[z0,D0,$0,Eu,U0,H0,G0,_u,K0,X0,iS,mS,gS,vS,bS,yS,ES,IS,RS,CS,NS,OS,MS,PS,LS,Tu,zS,$S,US,BS,ZS]),mz=wn(["developer","system","assistant","user","tool","activity","reasoning"]),VS=z({name:A(),description:A().optional()}),jS=z({name:A().optional(),type:A().optional(),description:A().optional(),version:A().optional(),provider:A().optional(),documentationUrl:A().optional(),metadata:q.optional()}),WS=z({streaming:re().optional(),websocket:re().optional(),httpBinary:re().optional(),pushNotifications:re().optional(),resumable:re().optional()}),qS=z({supported:re().optional(),items:Oe(Yg).optional(),parallelCalls:re().optional(),clientProvided:re().optional()}),YS=z({structuredOutput:re().optional(),supportedMimeTypes:Oe(A()).optional()}),KS=z({snapshots:re().optional(),deltas:re().optional(),memory:re().optional(),persistentState:re().optional()}),XS=z({supported:re().optional(),delegation:re().optional(),handoffs:re().optional(),subagents:Oe(VS).optional()}),JS=z({supported:re().optional(),streaming:re().optional(),encrypted:re().optional()}),QS=z({image:re().optional(),audio:re().optional(),video:re().optional(),pdf:re().optional(),file:re().optional()}),eT=z({image:re().optional(),audio:re().optional()}),tT=z({input:QS.optional(),output:eT.optional()}),nT=z({codeExecution:re().optional(),sandboxed:re().optional(),maxIterations:K().min(0).max(9007199254740991).optional(),maxExecutionTime:K().min(0).max(9007199254740991).optional()}),rT=z({supported:re().optional(),approvals:re().optional(),interventions:re().optional(),feedback:re().optional(),interrupts:re().optional(),approveWithEdits:re().optional()}),gz=z({identity:jS.optional(),transport:WS.optional(),tools:qS.optional(),output:YS.optional(),state:KS.optional(),multiAgent:XS.optional(),reasoning:JS.optional(),multimodal:tT.optional(),execution:nT.optional(),humanInTheLoop:rT.optional(),custom:hr(t=>typeof t=="object"&&t!==null&&!Array.isArray(t)).optional()}),vz=z({subagentRunId:ne.optional()}),bz=z({type:L0,timestamp:K().min(-9007199254740991).max(9007199254740991).optional(),rawEvent:j().refine(t=>t!==null).optional(),metadata:q.optional()}),yz=z({subagentRunId:ne.optional(),id:A(),role:A(),name:A().optional(),encryptedValue:A().optional(),metadata:q.optional()}),wz=q.optional();Ge(cr());function Jg(){let t=this.buf,e=this.pos,n=0,r=0;for(let i=0;i<28;i+=7){let a=t[e++];if(n|=(a&127)<<i,(a&128)==0){this.pos=e,this.assertBounds(),this.varint64Lo=n,this.varint64Hi=r;return}}let o=t[e++];if(n|=(o&15)<<28,r=(o&112)>>4,(o&128)==0){this.pos=e,this.assertBounds(),this.varint64Lo=n,this.varint64Hi=r;return}for(let i=3;i<=31;i+=7){let a=t[e++];if(r|=(a&127)<<i,(a&128)==0){this.pos=e,this.assertBounds(),this.varint64Lo=n,this.varint64Hi=r;return}}throw new Error("invalid varint")}var sa=4294967296;function Au(t){let e=t[0]==="-";e&&(t=t.slice(1));let n=1e6,r=0,o=0;function i(a,s){let l=Number(t.slice(a,s));o*=n,r=r*n+l,r>=sa&&(o=o+(r/sa|0),r=r%sa)}return i(-24,-18),i(-18,-12),i(-12,-6),i(-6),e?ev(r,o):Ru(r,o)}function Qg(t,e){let n=Ru(t,e),r=n.hi&2147483648;r&&(n=ev(n.lo,n.hi));let o=Iu(n.lo,n.hi);return r?"-"+o:o}function Iu(t,e){if({lo:t,hi:e}=oT(t,e),e<=2097151)return String(sa*e+t);let n=t&16777215,r=(t>>>24|e<<8)&16777215,o=e>>16&65535,i=n+r*6777216+o*6710656,a=r+o*8147497,s=o*2,l=1e7;return i>=l&&(a+=Math.floor(i/l),i%=l),a>=l&&(s+=Math.floor(a/l),a%=l),s.toString()+Xg(a)+Xg(i)}function oT(t,e){return{lo:t>>>0,hi:e>>>0}}function Ru(t,e){return{lo:t|0,hi:e|0}}function ev(t,e){return e=~e,t?t=~t+1:e+=1,Ru(t,e)}var Xg=t=>{let e=String(t);return"0000000".slice(e.length)+e};function tv(){let t=this.buf[this.pos++];if((t&128)===0)return this.assertBounds(),t;let e=t&127;if(t=this.buf[this.pos++],e|=(t&127)<<7,(t&128)===0)return this.assertBounds(),e;if(t=this.buf[this.pos++],e|=(t&127)<<14,(t&128)===0)return this.assertBounds(),e;if(t=this.buf[this.pos++],e|=(t&127)<<21,(t&128)===0)return this.assertBounds(),e;t=this.buf[this.pos++],e|=(t&15)<<28;for(let n=5;(t&128)!==0&&n<10;n++)t=this.buf[this.pos++];if((t&128)!==0)throw new Error("invalid varint");return this.assertBounds(),e>>>0}var mt=iT();function iT(){let t=new DataView(new ArrayBuffer(8));if(typeof BigInt=="function"&&typeof t.getBigInt64=="function"&&typeof t.getBigUint64=="function"&&typeof t.setBigInt64=="function"&&typeof t.setBigUint64=="function"&&(!!globalThis.Deno||!!globalThis.Bun||typeof process!="object"||typeof process.env!="object"||process.env.BUF_BIGINT_DISABLE!=="1")){let n=BigInt("-9223372036854775808"),r=BigInt("9223372036854775807"),o=BigInt("0"),i=BigInt("18446744073709551615");return{zero:BigInt(0),supported:!0,parse(a){let s=typeof a=="bigint"?a:BigInt(a);if(s>r||s<n)throw new Error(`invalid int64: ${a}`);return s},uParse(a){let s=typeof a=="bigint"?a:BigInt(a);if(s>i||s<o)throw new Error(`invalid uint64: ${a}`);return s},enc(a){return t.setBigInt64(0,this.parse(a),!0),{lo:t.getInt32(0,!0),hi:t.getInt32(4,!0)}},uEnc(a){return t.setBigInt64(0,this.uParse(a),!0),{lo:t.getInt32(0,!0),hi:t.getInt32(4,!0)}},dec(a,s){return t.setInt32(0,a,!0),t.setInt32(4,s,!0),t.getBigInt64(0,!0)},uDec(a,s){return t.setInt32(0,a,!0),t.setInt32(4,s,!0),t.getBigUint64(0,!0)}}}return{zero:"0",supported:!1,parse(n){return typeof n!="string"&&(n=n.toString()),nv(n),n},uParse(n){return typeof n!="string"&&(n=n.toString()),rv(n),n},enc(n){return typeof n!="string"&&(n=n.toString()),nv(n),Au(n)},uEnc(n){return typeof n!="string"&&(n=n.toString()),rv(n),Au(n)},dec(n,r){return Qg(n,r)},uDec(n,r){return Iu(n,r)}}}function nv(t){if(!/^-?[0-9]+$/.test(t))throw new Error("invalid int64: "+t)}function rv(t){if(!/^[0-9]+$/.test(t))throw new Error("invalid uint64: "+t)}var Cu;function aT(t){var e;Cu=Object.assign(Object.assign({},t),{encodeUtf8Into:(e=t.encodeUtf8Into)!==null&&e!==void 0?e:Ou(t.encodeUtf8.bind(t))})}function Nu(){if(!Cu){let t=globalThis;if(!t.TextEncoder||!t.TextDecoder)throw new Error("encoding API missing: install TextEncoder and TextDecoder on globalThis");let e=new t.TextEncoder,n=new t.TextDecoder("utf-8",{ignoreBOM:!0}),r,o={encodeUtf8(a){return e.encode(a)},decodeUtf8(a,s){return s?(r||(r=new t.TextDecoder("utf-8",{fatal:!0,ignoreBOM:!0})),r.decode(a)):n.decode(a)},checkUtf8(a){try{return encodeURIComponent(a),!0}catch{return!1}}};e.encodeInto&&(o.encodeUtf8Into=e.encodeInto.bind(e));let i=String.prototype.isWellFormed;i&&(o.checkUtf8=a=>i.call(a)),aT(o)}return Cu}function Ou(t){return(e,n)=>{let r=t(e);return n.set(r),{written:r.byteLength}}}var Wt;(function(t){t[t.Varint=0]="Varint",t[t.Bit64=1]="Bit64",t[t.LengthDelimited=2]="LengthDelimited",t[t.StartGroup=3]="StartGroup",t[t.EndGroup=4]="EndGroup",t[t.Bit32=5]="Bit32"})(Wt||(Wt={}));var sT=4294967295,lT=2147483647,cT=-2147483648,F=class{constructor(e){this.stackPos=[],this.encodeUtf8Into=e?Ou(e):Nu().encodeUtf8Into,this.buffer=iv,this.viewCache=dT,this.pos=0}ensureCapacity(e){let n=this.pos+e;if(n>this.buffer.length){let r=this.buffer.length||uT;for(;r<n;)r*=2;let o=new Uint8Array(r);this.pos>0&&o.set(this.buffer),this.buffer=o}}view(){let e=this.buffer,n=this.viewCache;if(n.byteLength===e.byteLength)return n;let r=new DataView(e.buffer);return this.viewCache=r,r}finish(){let e=this.buffer.slice(0,this.pos);return this.pos=0,this.stackPos=[],e}fork(){return this.stackPos.push(this.pos),this.ensureCapacity(no),this.buffer[this.pos++]=0,this}join(){let e=this.stackPos.pop();if(e===void 0)throw new Error("invalid state, fork stack empty");let n=this.pos-e-no,r=Mu(n);return r>no&&(this.ensureCapacity(r-no),this.buffer.copyWithin(e+r,e+no,this.pos)),this.pos=e,this.uint32(n),this.pos+=n,this}tag(e,n){return this.uint32((e<<3|n)>>>0)}raw(e){return this.ensureCapacity(e.length),this.buffer.set(e,this.pos),this.pos+=e.length,this}uint32(e){if(ov(e),this.ensureCapacity(5),e<128)return this.buffer[this.pos++]=e,this;for(;e>127;)this.buffer[this.pos++]=e&127|128,e>>>=7;return this.buffer[this.pos++]=e,this}int32(e){if(Pu(e),e>=0)return this.uint32(e);this.ensureCapacity(10);for(let n=0;n<9;n++)this.buffer[this.pos++]=e&127|128,e>>=7;return this.buffer[this.pos++]=1,this}bool(e){return this.ensureCapacity(1),this.buffer[this.pos++]=e?1:0,this}bytes(e){return this.uint32(e.byteLength),this.raw(e)}string(e){typeof e!="string"&&(e=String(e));let n=e.length;if(n<=av){this.ensureCapacity(n+1);let l=this.buffer,c=this.pos;l[c++]=n;let u=0;for(;u<n;u++){let p=e.charCodeAt(u);if(p>127)break;l[c++]=p}if(u==n)return this.pos=c,this}this.ensureCapacity(n*3+5);let r=Mu(n),o=this.buffer,i=this.pos,{written:a}=this.encodeUtf8Into(e,o.subarray(i+r)),s=Mu(a);return s!=r&&o.copyWithin(i+s,i+r,i+r+a),this.uint32(a),this.pos+=a,this}float(e){return pT(e),this.ensureCapacity(4),this.view().setFloat32(this.pos,e,!0),this.pos+=4,this}double(e){return this.ensureCapacity(8),this.view().setFloat64(this.pos,e,!0),this.pos+=8,this}fixed32(e){return ov(e),this.ensureCapacity(4),this.view().setUint32(this.pos,e,!0),this.pos+=4,this}sfixed32(e){return Pu(e),this.ensureCapacity(4),this.view().setInt32(this.pos,e,!0),this.pos+=4,this}sint32(e){return Pu(e),this.uint32((e<<1^e>>31)>>>0)}sfixed64(e){let n=mt.enc(e);this.ensureCapacity(8);let r=this.view();return r.setInt32(this.pos,n.lo,!0),r.setInt32(this.pos+4,n.hi,!0),this.pos+=8,this}fixed64(e){let n=mt.uEnc(e);this.ensureCapacity(8);let r=this.view();return r.setInt32(this.pos,n.lo,!0),r.setInt32(this.pos+4,n.hi,!0),this.pos+=8,this}int64(e){let n=mt.enc(e);return this.writeVarint64(n.lo,n.hi)}sint64(e){let n=mt.enc(e),r=n.hi>>31,o=n.lo<<1^r,i=(n.hi<<1|n.lo>>>31)^r;return this.writeVarint64(o,i)}uint64(e){let n=mt.uEnc(e);return this.writeVarint64(n.lo,n.hi)}writeVarint64(e,n){this.ensureCapacity(10);let r=this.buffer,o=this.pos;for(let s=0;s<28;s=s+7){let l=e>>>s,c=!(!(l>>>7)&&n==0);if(r[o++]=(c?l|128:l)&255,!c)return this.pos=o,this}let i=e>>>28&15|(n&7)<<4,a=n>>3!=0;if(r[o++]=(a?i|128:i)&255,!a)return this.pos=o,this;for(let s=3;s<31;s=s+7){let l=n>>>s,c=!!(l>>>7);if(r[o++]=(c?l|128:l)&255,!c)return this.pos=o,this}return r[o++]=n>>>31&1,this.pos=o,this}},uT=128,no=1,iv=new Uint8Array(0),dT=new DataView(iv.buffer),av=32;function Mu(t){return t<128?1:t<16384?2:t<2097152?3:t<268435456?4:5}var R=class{constructor(e,n=Nu().decodeUtf8){this.decodeUtf8=n,this.varint64Lo=0,this.varint64Hi=0,this.varint64=Jg,this.uint32=tv,this.buf=e,this.len=e.length,this.pos=0,this.view=new DataView(e.buffer,e.byteOffset,e.byteLength)}tag(){let e=this.pos,n=this.uint32(),r=this.pos-e;if(r>5||r==5&&this.buf[this.pos-1]>15)throw new Error("illegal tag: varint overflows uint32");let o=n>>>3,i=n&7;if(o<=0||i>5)throw new Error("illegal tag: field no "+o+" wire type "+i);return[o,i]}skip(e,n,r=100){let o=this.pos;switch(e){case Wt.Varint:for(;this.buf[this.pos++]&128;);break;case Wt.Bit64:this.pos+=4;case Wt.Bit32:this.pos+=4;break;case Wt.LengthDelimited:let i=this.uint32();this.pos+=i;break;case Wt.StartGroup:if(r<=0)throw new Error("maximum recursion depth reached");for(;;){let[a,s]=this.tag();if(s===Wt.EndGroup){if(n!==void 0&&a!==n)throw new Error("invalid end group tag");break}this.skip(s,a,r-1)}break;default:throw new Error("cant skip wire type "+e)}return this.assertBounds(),this.buf.subarray(o,this.pos)}assertBounds(){if(this.pos>this.len)throw new RangeError("premature EOF")}int32(){return this.uint32()|0}sint32(){let e=this.uint32();return e>>>1^-(e&1)}int64(){return this.varint64(),mt.dec(this.varint64Lo,this.varint64Hi)}uint64(){return this.varint64(),mt.uDec(this.varint64Lo,this.varint64Hi)}sint64(){this.varint64();let e=this.varint64Lo,n=this.varint64Hi,r=-(e&1);return e=(e>>>1|(n&1)<<31)^r,n=n>>>1^r,mt.dec(e,n)}bool(){let e=this.buf[this.pos];return e<128?(this.pos++,e!==0):(this.varint64(),this.varint64Lo!==0||this.varint64Hi!==0)}fixed32(){return this.view.getUint32((this.pos+=4)-4,!0)}sfixed32(){return this.view.getInt32((this.pos+=4)-4,!0)}fixed64(){return mt.uDec(this.sfixed32(),this.sfixed32())}sfixed64(){return mt.dec(this.sfixed32(),this.sfixed32())}float(){return this.view.getFloat32((this.pos+=4)-4,!0)}double(){return this.view.getFloat64((this.pos+=8)-8,!0)}bytes(){let e=this.uint32(),n=this.pos;return this.pos+=e,this.assertBounds(),this.buf.subarray(n,n+e)}string(e){let n=this.uint32(),r=this.pos;this.pos+=n,this.assertBounds();let o=this.buf;if(n<=av){let i=new Array(n);for(let a=0;a<n;a++){let s=o[r+a];if(s>127)return this.decodeUtf8(o.subarray(r,this.pos),e);i[a]=s}return String.fromCharCode.apply(String,i)}return this.decodeUtf8(o.subarray(r,this.pos),e)}};function Pu(t){if(typeof t=="string")t=Number(t);else if(typeof t!="number")throw new Error("invalid int32: "+typeof t);if(!Number.isInteger(t)||t>lT||t<cT)throw new Error("invalid int32: "+t)}function ov(t){if(typeof t=="string")t=Number(t);else if(typeof t!="number")throw new Error("invalid uint32: "+typeof t);if(!Number.isInteger(t)||t>sT||t<0)throw new Error("invalid uint32: "+t)}function pT(t){if(typeof t=="string"){let e=t;if(t=Number(t),Number.isNaN(t)&&e!=="NaN")throw new Error("invalid float32: "+e)}else if(typeof t!="number")throw new Error("invalid float32: "+typeof t);if(!Number.isFinite(Math.fround(t))&&Number.isFinite(t))throw new Error("invalid float32: "+t)}var hT=(function(t){return t[t.NULL_VALUE=0]="NULL_VALUE",t[t.UNRECOGNIZED=-1]="UNRECOGNIZED",t})({});function Lu(){return{fields:{}}}var ie={encode(t,e=new F){return Object.entries(t.fields).forEach(([n,r])=>{r!==void 0&&$u.encode({key:n,value:r},e.uint32(10).fork()).join()}),e},decode(t,e){let n=t instanceof R?t:new R(t),r=e===void 0?n.len:n.pos+e,o=Lu();for(;n.pos<r;){let i=n.uint32();switch(i>>>3){case 1:{if(i!==10)break;let a=$u.decode(n,n.uint32());a.value!==void 0&&(o.fields[a.key]=a.value);continue}}if((i&7)===4||i===0)break;n.skip(i&7)}return o},create(t){return ie.fromPartial(t??{})},fromPartial(t){let e=Lu();return e.fields=Object.entries(t.fields??{}).reduce((n,[r,o])=>(o!==void 0&&(n[r]=o),n),{}),e},wrap(t){let e=Lu();if(t!==void 0)for(let n of Object.keys(t))e.fields[n]=t[n];return e},unwrap(t){let e={};if(t.fields)for(let n of Object.keys(t.fields))e[n]=t.fields[n];return e}};function sv(){return{key:"",value:void 0}}var $u={encode(t,e=new F){return t.key!==""&&e.uint32(10).string(t.key),t.value!==void 0&&D.encode(D.wrap(t.value),e.uint32(18).fork()).join(),e},decode(t,e){let n=t instanceof R?t:new R(t),r=e===void 0?n.len:n.pos+e,o=sv();for(;n.pos<r;){let i=n.uint32();switch(i>>>3){case 1:if(i!==10)break;o.key=n.string();continue;case 2:if(i!==18)break;o.value=D.unwrap(D.decode(n,n.uint32()));continue}if((i&7)===4||i===0)break;n.skip(i&7)}return o},create(t){return $u.fromPartial(t??{})},fromPartial(t){let e=sv();return e.key=t.key??"",e.value=t.value??void 0,e}};function zu(){return{nullValue:void 0,numberValue:void 0,stringValue:void 0,boolValue:void 0,structValue:void 0,listValue:void 0}}var D={encode(t,e=new F){return t.nullValue!==void 0&&e.uint32(8).int32(t.nullValue),t.numberValue!==void 0&&e.uint32(17).double(t.numberValue),t.stringValue!==void 0&&e.uint32(26).string(t.stringValue),t.boolValue!==void 0&&e.uint32(32).bool(t.boolValue),t.structValue!==void 0&&ie.encode(ie.wrap(t.structValue),e.uint32(42).fork()).join(),t.listValue!==void 0&&ro.encode(ro.wrap(t.listValue),e.uint32(50).fork()).join(),e},decode(t,e){let n=t instanceof R?t:new R(t),r=e===void 0?n.len:n.pos+e,o=zu();for(;n.pos<r;){let i=n.uint32();switch(i>>>3){case 1:if(i!==8)break;o.nullValue=n.int32();continue;case 2:if(i!==17)break;o.numberValue=n.double();continue;case 3:if(i!==26)break;o.stringValue=n.string();continue;case 4:if(i!==32)break;o.boolValue=n.bool();continue;case 5:if(i!==42)break;o.structValue=ie.unwrap(ie.decode(n,n.uint32()));continue;case 6:if(i!==50)break;o.listValue=ro.unwrap(ro.decode(n,n.uint32()));continue}if((i&7)===4||i===0)break;n.skip(i&7)}return o},create(t){return D.fromPartial(t??{})},fromPartial(t){let e=zu();return e.nullValue=t.nullValue??void 0,e.numberValue=t.numberValue??void 0,e.stringValue=t.stringValue??void 0,e.boolValue=t.boolValue??void 0,e.structValue=t.structValue??void 0,e.listValue=t.listValue??void 0,e},wrap(t){let e=zu();if(t===null)e.nullValue=hT.NULL_VALUE;else if(typeof t=="boolean")e.boolValue=t;else if(typeof t=="number")e.numberValue=t;else if(typeof t=="string")e.stringValue=t;else if(globalThis.Array.isArray(t))e.listValue=t;else if(typeof t=="object")e.structValue=t;else if(typeof t<"u")throw new globalThis.Error("Unsupported any value type: "+typeof t);return e},unwrap(t){if(t.stringValue!==void 0)return t.stringValue;if(t?.numberValue!==void 0)return t.numberValue;if(t?.boolValue!==void 0)return t.boolValue;if(t?.structValue!==void 0)return t.structValue;if(t?.listValue!==void 0)return t.listValue;if(t?.nullValue!==void 0)return null}};function Du(){return{values:[]}}var ro={encode(t,e=new F){for(let n of t.values)D.encode(D.wrap(n),e.uint32(10).fork()).join();return e},decode(t,e){let n=t instanceof R?t:new R(t),r=e===void 0?n.len:n.pos+e,o=Du();for(;n.pos<r;){let i=n.uint32();switch(i>>>3){case 1:if(i!==10)break;o.values.push(D.unwrap(D.decode(n,n.uint32())));continue}if((i&7)===4||i===0)break;n.skip(i&7)}return o},create(t){return ro.fromPartial(t??{})},fromPartial(t){let e=Du();return e.values=t.values?.map(n=>n)||[],e},wrap(t){let e=Du();return e.values=t??[],e},unwrap(t){return t?.hasOwnProperty("values")&&globalThis.Array.isArray(t.values)?t.values:t}},lv=(function(t){return t[t.ADD=0]="ADD",t[t.REMOVE=1]="REMOVE",t[t.REPLACE=2]="REPLACE",t[t.MOVE=3]="MOVE",t[t.COPY=4]="COPY",t[t.TEST=5]="TEST",t[t.UNRECOGNIZED=-1]="UNRECOGNIZED",t})({});function cv(){return{op:0,path:"",from:void 0,value:void 0}}var _n={encode(t,e=new F){return t.op!==0&&e.uint32(8).int32(t.op),t.path!==""&&e.uint32(18).string(t.path),t.from!==void 0&&e.uint32(26).string(t.from),t.value!==void 0&&D.encode(D.wrap(t.value),e.uint32(34).fork()).join(),e},decode(t,e){let n=t instanceof R?t:new R(t),r=e===void 0?n.len:n.pos+e,o=cv();for(;n.pos<r;){let i=n.uint32();switch(i>>>3){case 1:if(i!==8)break;o.op=n.int32();continue;case 2:if(i!==18)break;o.path=n.string();continue;case 3:if(i!==26)break;o.from=n.string();continue;case 4:if(i!==34)break;o.value=D.unwrap(D.decode(n,n.uint32()));continue}if((i&7)===4||i===0)break;n.skip(i&7)}return o},create(t){return _n.fromPartial(t??{})},fromPartial(t){let e=cv();return e.op=t.op??0,e.path=t.path??"",e.from=t.from??void 0,e.value=t.value??void 0,e}};function uv(){return{text:"",id:void 0,metadata:void 0}}var la={encode(t,e=new F){return t.text!==""&&e.uint32(10).string(t.text),t.id!==void 0&&e.uint32(18).string(t.id),t.metadata!==void 0&&D.encode(D.wrap(t.metadata),e.uint32(26).fork()).join(),e},decode(t,e){let n=t instanceof R?t:new R(t),r=e===void 0?n.len:n.pos+e,o=uv();for(;n.pos<r;){let i=n.uint32();switch(i>>>3){case 1:if(i!==10)break;o.text=n.string();continue;case 2:if(i!==18)break;o.id=n.string();continue;case 3:if(i!==26)break;o.metadata=D.unwrap(D.decode(n,n.uint32()));continue}if((i&7)===4||i===0)break;n.skip(i&7)}return o},create(t){return la.fromPartial(t??{})},fromPartial(t){let e=uv();return e.text=t.text??"",e.id=t.id??void 0,e.metadata=t.metadata??void 0,e}};function dv(){return{source:void 0,metadata:void 0,id:void 0}}var ca={encode(t,e=new F){return t.source!==void 0&&et.encode(t.source,e.uint32(10).fork()).join(),t.metadata!==void 0&&D.encode(D.wrap(t.metadata),e.uint32(18).fork()).join(),t.id!==void 0&&e.uint32(26).string(t.id),e},decode(t,e){let n=t instanceof R?t:new R(t),r=e===void 0?n.len:n.pos+e,o=dv();for(;n.pos<r;){let i=n.uint32();switch(i>>>3){case 1:if(i!==10)break;o.source=et.decode(n,n.uint32());continue;case 2:if(i!==18)break;o.metadata=D.unwrap(D.decode(n,n.uint32()));continue;case 3:if(i!==26)break;o.id=n.string();continue}if((i&7)===4||i===0)break;n.skip(i&7)}return o},create(t){return ca.fromPartial(t??{})},fromPartial(t){let e=dv();return e.source=t.source!==void 0&&t.source!==null?et.fromPartial(t.source):void 0,e.metadata=t.metadata??void 0,e.id=t.id??void 0,e}};function pv(){return{value:"",mimeType:""}}var ua={encode(t,e=new F){return t.value!==""&&e.uint32(10).string(t.value),t.mimeType!==""&&e.uint32(18).string(t.mimeType),e},decode(t,e){let n=t instanceof R?t:new R(t),r=e===void 0?n.len:n.pos+e,o=pv();for(;n.pos<r;){let i=n.uint32();switch(i>>>3){case 1:if(i!==10)break;o.value=n.string();continue;case 2:if(i!==18)break;o.mimeType=n.string();continue}if((i&7)===4||i===0)break;n.skip(i&7)}return o},create(t){return ua.fromPartial(t??{})},fromPartial(t){let e=pv();return e.value=t.value??"",e.mimeType=t.mimeType??"",e}};function hv(){return{value:"",mimeType:void 0}}var da={encode(t,e=new F){return t.value!==""&&e.uint32(10).string(t.value),t.mimeType!==void 0&&e.uint32(18).string(t.mimeType),e},decode(t,e){let n=t instanceof R?t:new R(t),r=e===void 0?n.len:n.pos+e,o=hv();for(;n.pos<r;){let i=n.uint32();switch(i>>>3){case 1:if(i!==10)break;o.value=n.string();continue;case 2:if(i!==18)break;o.mimeType=n.string();continue}if((i&7)===4||i===0)break;n.skip(i&7)}return o},create(t){return da.fromPartial(t??{})},fromPartial(t){let e=hv();return e.value=t.value??"",e.mimeType=t.mimeType??void 0,e}};function fv(){return{value:"",provider:void 0,mimeType:void 0}}var pa={encode(t,e=new F){return t.value!==""&&e.uint32(10).string(t.value),t.provider!==void 0&&e.uint32(18).string(t.provider),t.mimeType!==void 0&&e.uint32(26).string(t.mimeType),e},decode(t,e){let n=t instanceof R?t:new R(t),r=e===void 0?n.len:n.pos+e,o=fv();for(;n.pos<r;){let i=n.uint32();switch(i>>>3){case 1:if(i!==10)break;o.value=n.string();continue;case 2:if(i!==18)break;o.provider=n.string();continue;case 3:if(i!==26)break;o.mimeType=n.string();continue}if((i&7)===4||i===0)break;n.skip(i&7)}return o},create(t){return pa.fromPartial(t??{})},fromPartial(t){let e=fv();return e.value=t.value??"",e.provider=t.provider??void 0,e.mimeType=t.mimeType??void 0,e}};function mv(){return{data:void 0,url:void 0,file:void 0}}var et={encode(t,e=new F){return t.data!==void 0&&ua.encode(t.data,e.uint32(10).fork()).join(),t.url!==void 0&&da.encode(t.url,e.uint32(18).fork()).join(),t.file!==void 0&&pa.encode(t.file,e.uint32(26).fork()).join(),e},decode(t,e){let n=t instanceof R?t:new R(t),r=e===void 0?n.len:n.pos+e,o=mv();for(;n.pos<r;){let i=n.uint32();switch(i>>>3){case 1:if(i!==10)break;o.data=ua.decode(n,n.uint32());continue;case 2:if(i!==18)break;o.url=da.decode(n,n.uint32());continue;case 3:if(i!==26)break;o.file=pa.decode(n,n.uint32());continue}if((i&7)===4||i===0)break;n.skip(i&7)}return o},create(t){return et.fromPartial(t??{})},fromPartial(t){let e=mv();return e.data=t.data!==void 0&&t.data!==null?ua.fromPartial(t.data):void 0,e.url=t.url!==void 0&&t.url!==null?da.fromPartial(t.url):void 0,e.file=t.file!==void 0&&t.file!==null?pa.fromPartial(t.file):void 0,e}};function gv(){return{source:void 0,metadata:void 0,id:void 0}}var ha={encode(t,e=new F){return t.source!==void 0&&et.encode(t.source,e.uint32(10).fork()).join(),t.metadata!==void 0&&D.encode(D.wrap(t.metadata),e.uint32(18).fork()).join(),t.id!==void 0&&e.uint32(26).string(t.id),e},decode(t,e){let n=t instanceof R?t:new R(t),r=e===void 0?n.len:n.pos+e,o=gv();for(;n.pos<r;){let i=n.uint32();switch(i>>>3){case 1:if(i!==10)break;o.source=et.decode(n,n.uint32());continue;case 2:if(i!==18)break;o.metadata=D.unwrap(D.decode(n,n.uint32()));continue;case 3:if(i!==26)break;o.id=n.string();continue}if((i&7)===4||i===0)break;n.skip(i&7)}return o},create(t){return ha.fromPartial(t??{})},fromPartial(t){let e=gv();return e.source=t.source!==void 0&&t.source!==null?et.fromPartial(t.source):void 0,e.metadata=t.metadata??void 0,e.id=t.id??void 0,e}};function vv(){return{source:void 0,metadata:void 0,id:void 0}}var fa={encode(t,e=new F){return t.source!==void 0&&et.encode(t.source,e.uint32(10).fork()).join(),t.metadata!==void 0&&D.encode(D.wrap(t.metadata),e.uint32(18).fork()).join(),t.id!==void 0&&e.uint32(26).string(t.id),e},decode(t,e){let n=t instanceof R?t:new R(t),r=e===void 0?n.len:n.pos+e,o=vv();for(;n.pos<r;){let i=n.uint32();switch(i>>>3){case 1:if(i!==10)break;o.source=et.decode(n,n.uint32());continue;case 2:if(i!==18)break;o.metadata=D.unwrap(D.decode(n,n.uint32()));continue;case 3:if(i!==26)break;o.id=n.string();continue}if((i&7)===4||i===0)break;n.skip(i&7)}return o},create(t){return fa.fromPartial(t??{})},fromPartial(t){let e=vv();return e.source=t.source!==void 0&&t.source!==null?et.fromPartial(t.source):void 0,e.metadata=t.metadata??void 0,e.id=t.id??void 0,e}};function bv(){return{source:void 0,metadata:void 0,id:void 0}}var ma={encode(t,e=new F){return t.source!==void 0&&et.encode(t.source,e.uint32(10).fork()).join(),t.metadata!==void 0&&D.encode(D.wrap(t.metadata),e.uint32(18).fork()).join(),t.id!==void 0&&e.uint32(26).string(t.id),e},decode(t,e){let n=t instanceof R?t:new R(t),r=e===void 0?n.len:n.pos+e,o=bv();for(;n.pos<r;){let i=n.uint32();switch(i>>>3){case 1:if(i!==10)break;o.source=et.decode(n,n.uint32());continue;case 2:if(i!==18)break;o.metadata=D.unwrap(D.decode(n,n.uint32()));continue;case 3:if(i!==26)break;o.id=n.string();continue}if((i&7)===4||i===0)break;n.skip(i&7)}return o},create(t){return ma.fromPartial(t??{})},fromPartial(t){let e=bv();return e.source=t.source!==void 0&&t.source!==null?et.fromPartial(t.source):void 0,e.metadata=t.metadata??void 0,e.id=t.id??void 0,e}};function yv(){return{text:void 0,image:void 0,audio:void 0,video:void 0,document:void 0}}var Sn={encode(t,e=new F){return t.text!==void 0&&la.encode(t.text,e.uint32(10).fork()).join(),t.image!==void 0&&ca.encode(t.image,e.uint32(18).fork()).join(),t.audio!==void 0&&ha.encode(t.audio,e.uint32(26).fork()).join(),t.video!==void 0&&fa.encode(t.video,e.uint32(34).fork()).join(),t.document!==void 0&&ma.encode(t.document,e.uint32(42).fork()).join(),e},decode(t,e){let n=t instanceof R?t:new R(t),r=e===void 0?n.len:n.pos+e,o=yv();for(;n.pos<r;){let i=n.uint32();switch(i>>>3){case 1:if(i!==10)break;o.text=la.decode(n,n.uint32());continue;case 2:if(i!==18)break;o.image=ca.decode(n,n.uint32());continue;case 3:if(i!==26)break;o.audio=ha.decode(n,n.uint32());continue;case 4:if(i!==34)break;o.video=fa.decode(n,n.uint32());continue;case 5:if(i!==42)break;o.document=ma.decode(n,n.uint32());continue}if((i&7)===4||i===0)break;n.skip(i&7)}return o},create(t){return Sn.fromPartial(t??{})},fromPartial(t){let e=yv();return e.text=t.text!==void 0&&t.text!==null?la.fromPartial(t.text):void 0,e.image=t.image!==void 0&&t.image!==null?ca.fromPartial(t.image):void 0,e.audio=t.audio!==void 0&&t.audio!==null?ha.fromPartial(t.audio):void 0,e.video=t.video!==void 0&&t.video!==null?fa.fromPartial(t.video):void 0,e.document=t.document!==void 0&&t.document!==null?ma.fromPartial(t.document):void 0,e}};function wv(){return{id:"",type:"",function:void 0,metadata:void 0,encryptedValue:void 0}}var ga={encode(t,e=new F){return t.id!==""&&e.uint32(10).string(t.id),t.type!==""&&e.uint32(18).string(t.type),t.function!==void 0&&va.encode(t.function,e.uint32(26).fork()).join(),t.metadata!==void 0&&ie.encode(ie.wrap(t.metadata),e.uint32(34).fork()).join(),t.encryptedValue!==void 0&&e.uint32(42).string(t.encryptedValue),e},decode(t,e){let n=t instanceof R?t:new R(t),r=e===void 0?n.len:n.pos+e,o=wv();for(;n.pos<r;){let i=n.uint32();switch(i>>>3){case 1:if(i!==10)break;o.id=n.string();continue;case 2:if(i!==18)break;o.type=n.string();continue;case 3:if(i!==26)break;o.function=va.decode(n,n.uint32());continue;case 4:if(i!==34)break;o.metadata=ie.unwrap(ie.decode(n,n.uint32()));continue;case 5:if(i!==42)break;o.encryptedValue=n.string();continue}if((i&7)===4||i===0)break;n.skip(i&7)}return o},create(t){return ga.fromPartial(t??{})},fromPartial(t){let e=wv();return e.id=t.id??"",e.type=t.type??"",e.function=t.function!==void 0&&t.function!==null?va.fromPartial(t.function):void 0,e.metadata=t.metadata??void 0,e.encryptedValue=t.encryptedValue??void 0,e}};function xv(){return{name:"",arguments:""}}var va={encode(t,e=new F){return t.name!==""&&e.uint32(10).string(t.name),t.arguments!==""&&e.uint32(18).string(t.arguments),e},decode(t,e){let n=t instanceof R?t:new R(t),r=e===void 0?n.len:n.pos+e,o=xv();for(;n.pos<r;){let i=n.uint32();switch(i>>>3){case 1:if(i!==10)break;o.name=n.string();continue;case 2:if(i!==18)break;o.arguments=n.string();continue}if((i&7)===4||i===0)break;n.skip(i&7)}return o},create(t){return va.fromPartial(t??{})},fromPartial(t){let e=xv();return e.name=t.name??"",e.arguments=t.arguments??"",e}};function Ev(){return{id:"",role:"",content:void 0,name:void 0,toolCalls:[],toolCallId:void 0,error:void 0,contentParts:[],metadata:void 0,subagentRunId:void 0,encryptedValue:void 0,activityType:void 0,activityContent:void 0}}var Tn={encode(t,e=new F){t.id!==""&&e.uint32(10).string(t.id),t.role!==""&&e.uint32(18).string(t.role),t.content!==void 0&&e.uint32(26).string(t.content),t.name!==void 0&&e.uint32(34).string(t.name);for(let n of t.toolCalls)ga.encode(n,e.uint32(42).fork()).join();t.toolCallId!==void 0&&e.uint32(50).string(t.toolCallId),t.error!==void 0&&e.uint32(58).string(t.error);for(let n of t.contentParts)Sn.encode(n,e.uint32(66).fork()).join();return t.metadata!==void 0&&ie.encode(ie.wrap(t.metadata),e.uint32(74).fork()).join(),t.subagentRunId!==void 0&&e.uint32(82).string(t.subagentRunId),t.encryptedValue!==void 0&&e.uint32(90).string(t.encryptedValue),t.activityType!==void 0&&e.uint32(98).string(t.activityType),t.activityContent!==void 0&&ie.encode(ie.wrap(t.activityContent),e.uint32(106).fork()).join(),e},decode(t,e){let n=t instanceof R?t:new R(t),r=e===void 0?n.len:n.pos+e,o=Ev();for(;n.pos<r;){let i=n.uint32();switch(i>>>3){case 1:if(i!==10)break;o.id=n.string();continue;case 2:if(i!==18)break;o.role=n.string();continue;case 3:if(i!==26)break;o.content=n.string();continue;case 4:if(i!==34)break;o.name=n.string();continue;case 5:if(i!==42)break;o.toolCalls.push(ga.decode(n,n.uint32()));continue;case 6:if(i!==50)break;o.toolCallId=n.string();continue;case 7:if(i!==58)break;o.error=n.string();continue;case 8:if(i!==66)break;o.contentParts.push(Sn.decode(n,n.uint32()));continue;case 9:if(i!==74)break;o.metadata=ie.unwrap(ie.decode(n,n.uint32()));continue;case 10:if(i!==82)break;o.subagentRunId=n.string();continue;case 11:if(i!==90)break;o.encryptedValue=n.string();continue;case 12:if(i!==98)break;o.activityType=n.string();continue;case 13:if(i!==106)break;o.activityContent=ie.unwrap(ie.decode(n,n.uint32()));continue}if((i&7)===4||i===0)break;n.skip(i&7)}return o},create(t){return Tn.fromPartial(t??{})},fromPartial(t){let e=Ev();return e.id=t.id??"",e.role=t.role??"",e.content=t.content??void 0,e.name=t.name??void 0,e.toolCalls=t.toolCalls?.map(n=>ga.fromPartial(n))||[],e.toolCallId=t.toolCallId??void 0,e.error=t.error??void 0,e.contentParts=t.contentParts?.map(n=>Sn.fromPartial(n))||[],e.metadata=t.metadata??void 0,e.subagentRunId=t.subagentRunId??void 0,e.encryptedValue=t.encryptedValue??void 0,e.activityType=t.activityType??void 0,e.activityContent=t.activityContent??void 0,e}};function _v(){return{name:"",description:"",parameters:void 0,metadata:void 0}}var ba={encode(t,e=new F){return t.name!==""&&e.uint32(10).string(t.name),t.description!==""&&e.uint32(18).string(t.description),t.parameters!==void 0&&D.encode(D.wrap(t.parameters),e.uint32(26).fork()).join(),t.metadata!==void 0&&ie.encode(ie.wrap(t.metadata),e.uint32(34).fork()).join(),e},decode(t,e){let n=t instanceof R?t:new R(t),r=e===void 0?n.len:n.pos+e,o=_v();for(;n.pos<r;){let i=n.uint32();switch(i>>>3){case 1:if(i!==10)break;o.name=n.string();continue;case 2:if(i!==18)break;o.description=n.string();continue;case 3:if(i!==26)break;o.parameters=D.unwrap(D.decode(n,n.uint32()));continue;case 4:if(i!==34)break;o.metadata=ie.unwrap(ie.decode(n,n.uint32()));continue}if((i&7)===4||i===0)break;n.skip(i&7)}return o},create(t){return ba.fromPartial(t??{})},fromPartial(t){let e=_v();return e.name=t.name??"",e.description=t.description??"",e.parameters=t.parameters??void 0,e.metadata=t.metadata??void 0,e}};function Sv(){return{description:"",value:""}}var ya={encode(t,e=new F){return t.description!==""&&e.uint32(10).string(t.description),t.value!==""&&e.uint32(18).string(t.value),e},decode(t,e){let n=t instanceof R?t:new R(t),r=e===void 0?n.len:n.pos+e,o=Sv();for(;n.pos<r;){let i=n.uint32();switch(i>>>3){case 1:if(i!==10)break;o.description=n.string();continue;case 2:if(i!==18)break;o.value=n.string();continue}if((i&7)===4||i===0)break;n.skip(i&7)}return o},create(t){return ya.fromPartial(t??{})},fromPartial(t){let e=Sv();return e.description=t.description??"",e.value=t.value??"",e}};function Tv(){return{interruptId:"",status:"",payload:void 0,metadata:void 0}}var wa={encode(t,e=new F){return t.interruptId!==""&&e.uint32(10).string(t.interruptId),t.status!==""&&e.uint32(18).string(t.status),t.payload!==void 0&&D.encode(D.wrap(t.payload),e.uint32(26).fork()).join(),t.metadata!==void 0&&ie.encode(ie.wrap(t.metadata),e.uint32(34).fork()).join(),e},decode(t,e){let n=t instanceof R?t:new R(t),r=e===void 0?n.len:n.pos+e,o=Tv();for(;n.pos<r;){let i=n.uint32();switch(i>>>3){case 1:if(i!==10)break;o.interruptId=n.string();continue;case 2:if(i!==18)break;o.status=n.string();continue;case 3:if(i!==26)break;o.payload=D.unwrap(D.decode(n,n.uint32()));continue;case 4:if(i!==34)break;o.metadata=ie.unwrap(ie.decode(n,n.uint32()));continue}if((i&7)===4||i===0)break;n.skip(i&7)}return o},create(t){return wa.fromPartial(t??{})},fromPartial(t){let e=Tv();return e.interruptId=t.interruptId??"",e.status=t.status??"",e.payload=t.payload??void 0,e.metadata=t.metadata??void 0,e}};function kv(){return{threadId:"",runId:"",parentRunId:void 0,state:void 0,messages:[],tools:[],context:[],forwardedProps:void 0,resume:[],protocolVersion:void 0}}var xa={encode(t,e=new F){t.threadId!==""&&e.uint32(10).string(t.threadId),t.runId!==""&&e.uint32(18).string(t.runId),t.parentRunId!==void 0&&e.uint32(26).string(t.parentRunId),t.state!==void 0&&D.encode(D.wrap(t.state),e.uint32(34).fork()).join();for(let n of t.messages)Tn.encode(n,e.uint32(42).fork()).join();for(let n of t.tools)ba.encode(n,e.uint32(50).fork()).join();for(let n of t.context)ya.encode(n,e.uint32(58).fork()).join();t.forwardedProps!==void 0&&D.encode(D.wrap(t.forwardedProps),e.uint32(66).fork()).join();for(let n of t.resume)wa.encode(n,e.uint32(74).fork()).join();return t.protocolVersion!==void 0&&e.uint32(82).string(t.protocolVersion),e},decode(t,e){let n=t instanceof R?t:new R(t),r=e===void 0?n.len:n.pos+e,o=kv();for(;n.pos<r;){let i=n.uint32();switch(i>>>3){case 1:if(i!==10)break;o.threadId=n.string();continue;case 2:if(i!==18)break;o.runId=n.string();continue;case 3:if(i!==26)break;o.parentRunId=n.string();continue;case 4:if(i!==34)break;o.state=D.unwrap(D.decode(n,n.uint32()));continue;case 5:if(i!==42)break;o.messages.push(Tn.decode(n,n.uint32()));continue;case 6:if(i!==50)break;o.tools.push(ba.decode(n,n.uint32()));continue;case 7:if(i!==58)break;o.context.push(ya.decode(n,n.uint32()));continue;case 8:if(i!==66)break;o.forwardedProps=D.unwrap(D.decode(n,n.uint32()));continue;case 9:if(i!==74)break;o.resume.push(wa.decode(n,n.uint32()));continue;case 10:if(i!==82)break;o.protocolVersion=n.string();continue}if((i&7)===4||i===0)break;n.skip(i&7)}return o},create(t){return xa.fromPartial(t??{})},fromPartial(t){let e=kv();return e.threadId=t.threadId??"",e.runId=t.runId??"",e.parentRunId=t.parentRunId??void 0,e.state=t.state??void 0,e.messages=t.messages?.map(n=>Tn.fromPartial(n))||[],e.tools=t.tools?.map(n=>ba.fromPartial(n))||[],e.context=t.context?.map(n=>ya.fromPartial(n))||[],e.forwardedProps=t.forwardedProps??void 0,e.resume=t.resume?.map(n=>wa.fromPartial(n))||[],e.protocolVersion=t.protocolVersion??void 0,e}};function Av(){return{id:"",reason:"",message:void 0,toolCallId:void 0,responseSchema:void 0,expiresAt:void 0,metadata:void 0,subagentRunId:void 0}}var Ea={encode(t,e=new F){return t.id!==""&&e.uint32(10).string(t.id),t.reason!==""&&e.uint32(18).string(t.reason),t.message!==void 0&&e.uint32(26).string(t.message),t.toolCallId!==void 0&&e.uint32(34).string(t.toolCallId),t.responseSchema!==void 0&&D.encode(D.wrap(t.responseSchema),e.uint32(42).fork()).join(),t.expiresAt!==void 0&&e.uint32(50).string(t.expiresAt),t.metadata!==void 0&&D.encode(D.wrap(t.metadata),e.uint32(58).fork()).join(),t.subagentRunId!==void 0&&e.uint32(66).string(t.subagentRunId),e},decode(t,e){let n=t instanceof R?t:new R(t),r=e===void 0?n.len:n.pos+e,o=Av();for(;n.pos<r;){let i=n.uint32();switch(i>>>3){case 1:if(i!==10)break;o.id=n.string();continue;case 2:if(i!==18)break;o.reason=n.string();continue;case 3:if(i!==26)break;o.message=n.string();continue;case 4:if(i!==34)break;o.toolCallId=n.string();continue;case 5:if(i!==42)break;o.responseSchema=D.unwrap(D.decode(n,n.uint32()));continue;case 6:if(i!==50)break;o.expiresAt=n.string();continue;case 7:if(i!==58)break;o.metadata=D.unwrap(D.decode(n,n.uint32()));continue;case 8:if(i!==66)break;o.subagentRunId=n.string();continue}if((i&7)===4||i===0)break;n.skip(i&7)}return o},create(t){return Ea.fromPartial(t??{})},fromPartial(t){let e=Av();return e.id=t.id??"",e.reason=t.reason??"",e.message=t.message??void 0,e.toolCallId=t.toolCallId??void 0,e.responseSchema=t.responseSchema??void 0,e.expiresAt=t.expiresAt??void 0,e.metadata=t.metadata??void 0,e.subagentRunId=t.subagentRunId??void 0,e}},fT=(function(t){return t[t.TEXT_MESSAGE_START=0]="TEXT_MESSAGE_START",t[t.TEXT_MESSAGE_CONTENT=1]="TEXT_MESSAGE_CONTENT",t[t.TEXT_MESSAGE_END=2]="TEXT_MESSAGE_END",t[t.TOOL_CALL_START=3]="TOOL_CALL_START",t[t.TOOL_CALL_ARGS=4]="TOOL_CALL_ARGS",t[t.TOOL_CALL_END=5]="TOOL_CALL_END",t[t.STATE_SNAPSHOT=6]="STATE_SNAPSHOT",t[t.STATE_DELTA=7]="STATE_DELTA",t[t.MESSAGES_SNAPSHOT=8]="MESSAGES_SNAPSHOT",t[t.RAW=9]="RAW",t[t.CUSTOM=10]="CUSTOM",t[t.RUN_STARTED=11]="RUN_STARTED",t[t.RUN_FINISHED=12]="RUN_FINISHED",t[t.RUN_ERROR=13]="RUN_ERROR",t[t.STEP_STARTED=14]="STEP_STARTED",t[t.STEP_FINISHED=15]="STEP_FINISHED",t[t.SUBAGENT_STARTED=16]="SUBAGENT_STARTED",t[t.SUBAGENT_FINISHED=17]="SUBAGENT_FINISHED",t[t.SUBAGENT_ERROR=18]="SUBAGENT_ERROR",t[t.TEXT_MESSAGE_CHUNK=19]="TEXT_MESSAGE_CHUNK",t[t.TOOL_CALL_CHUNK=20]="TOOL_CALL_CHUNK",t[t.TOOL_CALL_RESULT=21]="TOOL_CALL_RESULT",t[t.ACTIVITY_SNAPSHOT=22]="ACTIVITY_SNAPSHOT",t[t.ACTIVITY_DELTA=23]="ACTIVITY_DELTA",t[t.REASONING_START=24]="REASONING_START",t[t.REASONING_MESSAGE_START=25]="REASONING_MESSAGE_START",t[t.REASONING_MESSAGE_CONTENT=26]="REASONING_MESSAGE_CONTENT",t[t.REASONING_MESSAGE_END=27]="REASONING_MESSAGE_END",t[t.REASONING_MESSAGE_CHUNK=28]="REASONING_MESSAGE_CHUNK",t[t.REASONING_END=29]="REASONING_END",t[t.REASONING_ENCRYPTED_VALUE=30]="REASONING_ENCRYPTED_VALUE",t[t.UNRECOGNIZED=-1]="UNRECOGNIZED",t})({});function Iv(){return{type:0,timestamp:void 0,rawEvent:void 0,metadata:void 0}}var P={encode(t,e=new F){return t.type!==0&&e.uint32(8).int32(t.type),t.timestamp!==void 0&&e.uint32(16).int64(t.timestamp),t.rawEvent!==void 0&&D.encode(D.wrap(t.rawEvent),e.uint32(26).fork()).join(),t.metadata!==void 0&&ie.encode(ie.wrap(t.metadata),e.uint32(34).fork()).join(),e},decode(t,e){let n=t instanceof R?t:new R(t),r=e===void 0?n.len:n.pos+e,o=Iv();for(;n.pos<r;){let i=n.uint32();switch(i>>>3){case 1:if(i!==8)break;o.type=n.int32();continue;case 2:if(i!==16)break;o.timestamp=xn(n.int64());continue;case 3:if(i!==26)break;o.rawEvent=D.unwrap(D.decode(n,n.uint32()));continue;case 4:if(i!==34)break;o.metadata=ie.unwrap(ie.decode(n,n.uint32()));continue}if((i&7)===4||i===0)break;n.skip(i&7)}return o},create(t){return P.fromPartial(t??{})},fromPartial(t){let e=Iv();return e.type=t.type??0,e.timestamp=t.timestamp??void 0,e.rawEvent=t.rawEvent??void 0,e.metadata=t.metadata??void 0,e}};function Rv(){return{baseEvent:void 0,messageId:"",role:void 0,name:void 0,subagentRunId:void 0}}var _a={encode(t,e=new F){return t.baseEvent!==void 0&&P.encode(t.baseEvent,e.uint32(10).fork()).join(),t.messageId!==""&&e.uint32(18).string(t.messageId),t.role!==void 0&&e.uint32(26).string(t.role),t.name!==void 0&&e.uint32(34).string(t.name),t.subagentRunId!==void 0&&e.uint32(42).string(t.subagentRunId),e},decode(t,e){let n=t instanceof R?t:new R(t),r=e===void 0?n.len:n.pos+e,o=Rv();for(;n.pos<r;){let i=n.uint32();switch(i>>>3){case 1:if(i!==10)break;o.baseEvent=P.decode(n,n.uint32());continue;case 2:if(i!==18)break;o.messageId=n.string();continue;case 3:if(i!==26)break;o.role=n.string();continue;case 4:if(i!==34)break;o.name=n.string();continue;case 5:if(i!==42)break;o.subagentRunId=n.string();continue}if((i&7)===4||i===0)break;n.skip(i&7)}return o},create(t){return _a.fromPartial(t??{})},fromPartial(t){let e=Rv();return e.baseEvent=t.baseEvent!==void 0&&t.baseEvent!==null?P.fromPartial(t.baseEvent):void 0,e.messageId=t.messageId??"",e.role=t.role??void 0,e.name=t.name??void 0,e.subagentRunId=t.subagentRunId??void 0,e}};function Cv(){return{baseEvent:void 0,messageId:"",delta:"",subagentRunId:void 0}}var Sa={encode(t,e=new F){return t.baseEvent!==void 0&&P.encode(t.baseEvent,e.uint32(10).fork()).join(),t.messageId!==""&&e.uint32(18).string(t.messageId),t.delta!==""&&e.uint32(26).string(t.delta),t.subagentRunId!==void 0&&e.uint32(34).string(t.subagentRunId),e},decode(t,e){let n=t instanceof R?t:new R(t),r=e===void 0?n.len:n.pos+e,o=Cv();for(;n.pos<r;){let i=n.uint32();switch(i>>>3){case 1:if(i!==10)break;o.baseEvent=P.decode(n,n.uint32());continue;case 2:if(i!==18)break;o.messageId=n.string();continue;case 3:if(i!==26)break;o.delta=n.string();continue;case 4:if(i!==34)break;o.subagentRunId=n.string();continue}if((i&7)===4||i===0)break;n.skip(i&7)}return o},create(t){return Sa.fromPartial(t??{})},fromPartial(t){let e=Cv();return e.baseEvent=t.baseEvent!==void 0&&t.baseEvent!==null?P.fromPartial(t.baseEvent):void 0,e.messageId=t.messageId??"",e.delta=t.delta??"",e.subagentRunId=t.subagentRunId??void 0,e}};function Nv(){return{baseEvent:void 0,messageId:"",subagentRunId:void 0}}var Ta={encode(t,e=new F){return t.baseEvent!==void 0&&P.encode(t.baseEvent,e.uint32(10).fork()).join(),t.messageId!==""&&e.uint32(18).string(t.messageId),t.subagentRunId!==void 0&&e.uint32(26).string(t.subagentRunId),e},decode(t,e){let n=t instanceof R?t:new R(t),r=e===void 0?n.len:n.pos+e,o=Nv();for(;n.pos<r;){let i=n.uint32();switch(i>>>3){case 1:if(i!==10)break;o.baseEvent=P.decode(n,n.uint32());continue;case 2:if(i!==18)break;o.messageId=n.string();continue;case 3:if(i!==26)break;o.subagentRunId=n.string();continue}if((i&7)===4||i===0)break;n.skip(i&7)}return o},create(t){return Ta.fromPartial(t??{})},fromPartial(t){let e=Nv();return e.baseEvent=t.baseEvent!==void 0&&t.baseEvent!==null?P.fromPartial(t.baseEvent):void 0,e.messageId=t.messageId??"",e.subagentRunId=t.subagentRunId??void 0,e}};function Ov(){return{baseEvent:void 0,messageId:void 0,role:void 0,delta:void 0,name:void 0,subagentRunId:void 0}}var ka={encode(t,e=new F){return t.baseEvent!==void 0&&P.encode(t.baseEvent,e.uint32(10).fork()).join(),t.messageId!==void 0&&e.uint32(18).string(t.messageId),t.role!==void 0&&e.uint32(26).string(t.role),t.delta!==void 0&&e.uint32(34).string(t.delta),t.name!==void 0&&e.uint32(42).string(t.name),t.subagentRunId!==void 0&&e.uint32(50).string(t.subagentRunId),e},decode(t,e){let n=t instanceof R?t:new R(t),r=e===void 0?n.len:n.pos+e,o=Ov();for(;n.pos<r;){let i=n.uint32();switch(i>>>3){case 1:if(i!==10)break;o.baseEvent=P.decode(n,n.uint32());continue;case 2:if(i!==18)break;o.messageId=n.string();continue;case 3:if(i!==26)break;o.role=n.string();continue;case 4:if(i!==34)break;o.delta=n.string();continue;case 5:if(i!==42)break;o.name=n.string();continue;case 6:if(i!==50)break;o.subagentRunId=n.string();continue}if((i&7)===4||i===0)break;n.skip(i&7)}return o},create(t){return ka.fromPartial(t??{})},fromPartial(t){let e=Ov();return e.baseEvent=t.baseEvent!==void 0&&t.baseEvent!==null?P.fromPartial(t.baseEvent):void 0,e.messageId=t.messageId??void 0,e.role=t.role??void 0,e.delta=t.delta??void 0,e.name=t.name??void 0,e.subagentRunId=t.subagentRunId??void 0,e}};function Mv(){return{baseEvent:void 0,toolCallId:"",toolCallName:"",parentMessageId:void 0,subagentRunId:void 0}}var Aa={encode(t,e=new F){return t.baseEvent!==void 0&&P.encode(t.baseEvent,e.uint32(10).fork()).join(),t.toolCallId!==""&&e.uint32(18).string(t.toolCallId),t.toolCallName!==""&&e.uint32(26).string(t.toolCallName),t.parentMessageId!==void 0&&e.uint32(34).string(t.parentMessageId),t.subagentRunId!==void 0&&e.uint32(42).string(t.subagentRunId),e},decode(t,e){let n=t instanceof R?t:new R(t),r=e===void 0?n.len:n.pos+e,o=Mv();for(;n.pos<r;){let i=n.uint32();switch(i>>>3){case 1:if(i!==10)break;o.baseEvent=P.decode(n,n.uint32());continue;case 2:if(i!==18)break;o.toolCallId=n.string();continue;case 3:if(i!==26)break;o.toolCallName=n.string();continue;case 4:if(i!==34)break;o.parentMessageId=n.string();continue;case 5:if(i!==42)break;o.subagentRunId=n.string();continue}if((i&7)===4||i===0)break;n.skip(i&7)}return o},create(t){return Aa.fromPartial(t??{})},fromPartial(t){let e=Mv();return e.baseEvent=t.baseEvent!==void 0&&t.baseEvent!==null?P.fromPartial(t.baseEvent):void 0,e.toolCallId=t.toolCallId??"",e.toolCallName=t.toolCallName??"",e.parentMessageId=t.parentMessageId??void 0,e.subagentRunId=t.subagentRunId??void 0,e}};function Pv(){return{baseEvent:void 0,toolCallId:"",delta:"",subagentRunId:void 0}}var Ia={encode(t,e=new F){return t.baseEvent!==void 0&&P.encode(t.baseEvent,e.uint32(10).fork()).join(),t.toolCallId!==""&&e.uint32(18).string(t.toolCallId),t.delta!==""&&e.uint32(26).string(t.delta),t.subagentRunId!==void 0&&e.uint32(34).string(t.subagentRunId),e},decode(t,e){let n=t instanceof R?t:new R(t),r=e===void 0?n.len:n.pos+e,o=Pv();for(;n.pos<r;){let i=n.uint32();switch(i>>>3){case 1:if(i!==10)break;o.baseEvent=P.decode(n,n.uint32());continue;case 2:if(i!==18)break;o.toolCallId=n.string();continue;case 3:if(i!==26)break;o.delta=n.string();continue;case 4:if(i!==34)break;o.subagentRunId=n.string();continue}if((i&7)===4||i===0)break;n.skip(i&7)}return o},create(t){return Ia.fromPartial(t??{})},fromPartial(t){let e=Pv();return e.baseEvent=t.baseEvent!==void 0&&t.baseEvent!==null?P.fromPartial(t.baseEvent):void 0,e.toolCallId=t.toolCallId??"",e.delta=t.delta??"",e.subagentRunId=t.subagentRunId??void 0,e}};function Lv(){return{baseEvent:void 0,toolCallId:"",subagentRunId:void 0}}var Ra={encode(t,e=new F){return t.baseEvent!==void 0&&P.encode(t.baseEvent,e.uint32(10).fork()).join(),t.toolCallId!==""&&e.uint32(18).string(t.toolCallId),t.subagentRunId!==void 0&&e.uint32(26).string(t.subagentRunId),e},decode(t,e){let n=t instanceof R?t:new R(t),r=e===void 0?n.len:n.pos+e,o=Lv();for(;n.pos<r;){let i=n.uint32();switch(i>>>3){case 1:if(i!==10)break;o.baseEvent=P.decode(n,n.uint32());continue;case 2:if(i!==18)break;o.toolCallId=n.string();continue;case 3:if(i!==26)break;o.subagentRunId=n.string();continue}if((i&7)===4||i===0)break;n.skip(i&7)}return o},create(t){return Ra.fromPartial(t??{})},fromPartial(t){let e=Lv();return e.baseEvent=t.baseEvent!==void 0&&t.baseEvent!==null?P.fromPartial(t.baseEvent):void 0,e.toolCallId=t.toolCallId??"",e.subagentRunId=t.subagentRunId??void 0,e}};function zv(){return{baseEvent:void 0,toolCallId:void 0,toolCallName:void 0,parentMessageId:void 0,delta:void 0,subagentRunId:void 0}}var Ca={encode(t,e=new F){return t.baseEvent!==void 0&&P.encode(t.baseEvent,e.uint32(10).fork()).join(),t.toolCallId!==void 0&&e.uint32(18).string(t.toolCallId),t.toolCallName!==void 0&&e.uint32(26).string(t.toolCallName),t.parentMessageId!==void 0&&e.uint32(34).string(t.parentMessageId),t.delta!==void 0&&e.uint32(42).string(t.delta),t.subagentRunId!==void 0&&e.uint32(50).string(t.subagentRunId),e},decode(t,e){let n=t instanceof R?t:new R(t),r=e===void 0?n.len:n.pos+e,o=zv();for(;n.pos<r;){let i=n.uint32();switch(i>>>3){case 1:if(i!==10)break;o.baseEvent=P.decode(n,n.uint32());continue;case 2:if(i!==18)break;o.toolCallId=n.string();continue;case 3:if(i!==26)break;o.toolCallName=n.string();continue;case 4:if(i!==34)break;o.parentMessageId=n.string();continue;case 5:if(i!==42)break;o.delta=n.string();continue;case 6:if(i!==50)break;o.subagentRunId=n.string();continue}if((i&7)===4||i===0)break;n.skip(i&7)}return o},create(t){return Ca.fromPartial(t??{})},fromPartial(t){let e=zv();return e.baseEvent=t.baseEvent!==void 0&&t.baseEvent!==null?P.fromPartial(t.baseEvent):void 0,e.toolCallId=t.toolCallId??void 0,e.toolCallName=t.toolCallName??void 0,e.parentMessageId=t.parentMessageId??void 0,e.delta=t.delta??void 0,e.subagentRunId=t.subagentRunId??void 0,e}};function Dv(){return{baseEvent:void 0,subagentRunId:void 0,messageId:"",toolCallId:"",content:void 0,role:void 0,contentParts:[]}}var Na={encode(t,e=new F){t.baseEvent!==void 0&&P.encode(t.baseEvent,e.uint32(10).fork()).join(),t.subagentRunId!==void 0&&e.uint32(18).string(t.subagentRunId),t.messageId!==""&&e.uint32(26).string(t.messageId),t.toolCallId!==""&&e.uint32(34).string(t.toolCallId),t.content!==void 0&&e.uint32(42).string(t.content),t.role!==void 0&&e.uint32(50).string(t.role);for(let n of t.contentParts)Sn.encode(n,e.uint32(58).fork()).join();return e},decode(t,e){let n=t instanceof R?t:new R(t),r=e===void 0?n.len:n.pos+e,o=Dv();for(;n.pos<r;){let i=n.uint32();switch(i>>>3){case 1:if(i!==10)break;o.baseEvent=P.decode(n,n.uint32());continue;case 2:if(i!==18)break;o.subagentRunId=n.string();continue;case 3:if(i!==26)break;o.messageId=n.string();continue;case 4:if(i!==34)break;o.toolCallId=n.string();continue;case 5:if(i!==42)break;o.content=n.string();continue;case 6:if(i!==50)break;o.role=n.string();continue;case 7:if(i!==58)break;o.contentParts.push(Sn.decode(n,n.uint32()));continue}if((i&7)===4||i===0)break;n.skip(i&7)}return o},create(t){return Na.fromPartial(t??{})},fromPartial(t){let e=Dv();return e.baseEvent=t.baseEvent!==void 0&&t.baseEvent!==null?P.fromPartial(t.baseEvent):void 0,e.subagentRunId=t.subagentRunId??void 0,e.messageId=t.messageId??"",e.toolCallId=t.toolCallId??"",e.content=t.content??void 0,e.role=t.role??void 0,e.contentParts=t.contentParts?.map(n=>Sn.fromPartial(n))||[],e}};function $v(){return{baseEvent:void 0,snapshot:void 0,subagentRunId:void 0}}var Oa={encode(t,e=new F){return t.baseEvent!==void 0&&P.encode(t.baseEvent,e.uint32(10).fork()).join(),t.snapshot!==void 0&&D.encode(D.wrap(t.snapshot),e.uint32(18).fork()).join(),t.subagentRunId!==void 0&&e.uint32(26).string(t.subagentRunId),e},decode(t,e){let n=t instanceof R?t:new R(t),r=e===void 0?n.len:n.pos+e,o=$v();for(;n.pos<r;){let i=n.uint32();switch(i>>>3){case 1:if(i!==10)break;o.baseEvent=P.decode(n,n.uint32());continue;case 2:if(i!==18)break;o.snapshot=D.unwrap(D.decode(n,n.uint32()));continue;case 3:if(i!==26)break;o.subagentRunId=n.string();continue}if((i&7)===4||i===0)break;n.skip(i&7)}return o},create(t){return Oa.fromPartial(t??{})},fromPartial(t){let e=$v();return e.baseEvent=t.baseEvent!==void 0&&t.baseEvent!==null?P.fromPartial(t.baseEvent):void 0,e.snapshot=t.snapshot??void 0,e.subagentRunId=t.subagentRunId??void 0,e}};function Uv(){return{baseEvent:void 0,delta:[],subagentRunId:void 0}}var Ma={encode(t,e=new F){t.baseEvent!==void 0&&P.encode(t.baseEvent,e.uint32(10).fork()).join();for(let n of t.delta)_n.encode(n,e.uint32(18).fork()).join();return t.subagentRunId!==void 0&&e.uint32(26).string(t.subagentRunId),e},decode(t,e){let n=t instanceof R?t:new R(t),r=e===void 0?n.len:n.pos+e,o=Uv();for(;n.pos<r;){let i=n.uint32();switch(i>>>3){case 1:if(i!==10)break;o.baseEvent=P.decode(n,n.uint32());continue;case 2:if(i!==18)break;o.delta.push(_n.decode(n,n.uint32()));continue;case 3:if(i!==26)break;o.subagentRunId=n.string();continue}if((i&7)===4||i===0)break;n.skip(i&7)}return o},create(t){return Ma.fromPartial(t??{})},fromPartial(t){let e=Uv();return e.baseEvent=t.baseEvent!==void 0&&t.baseEvent!==null?P.fromPartial(t.baseEvent):void 0,e.delta=t.delta?.map(n=>_n.fromPartial(n))||[],e.subagentRunId=t.subagentRunId??void 0,e}};function Hv(){return{baseEvent:void 0,messages:[]}}var Pa={encode(t,e=new F){t.baseEvent!==void 0&&P.encode(t.baseEvent,e.uint32(10).fork()).join();for(let n of t.messages)Tn.encode(n,e.uint32(18).fork()).join();return e},decode(t,e){let n=t instanceof R?t:new R(t),r=e===void 0?n.len:n.pos+e,o=Hv();for(;n.pos<r;){let i=n.uint32();switch(i>>>3){case 1:if(i!==10)break;o.baseEvent=P.decode(n,n.uint32());continue;case 2:if(i!==18)break;o.messages.push(Tn.decode(n,n.uint32()));continue}if((i&7)===4||i===0)break;n.skip(i&7)}return o},create(t){return Pa.fromPartial(t??{})},fromPartial(t){let e=Hv();return e.baseEvent=t.baseEvent!==void 0&&t.baseEvent!==null?P.fromPartial(t.baseEvent):void 0,e.messages=t.messages?.map(n=>Tn.fromPartial(n))||[],e}};function Gv(){return{baseEvent:void 0,subagentRunId:void 0,messageId:"",activityType:"",content:void 0,replace:void 0}}var La={encode(t,e=new F){return t.baseEvent!==void 0&&P.encode(t.baseEvent,e.uint32(10).fork()).join(),t.subagentRunId!==void 0&&e.uint32(18).string(t.subagentRunId),t.messageId!==""&&e.uint32(26).string(t.messageId),t.activityType!==""&&e.uint32(34).string(t.activityType),t.content!==void 0&&ie.encode(ie.wrap(t.content),e.uint32(42).fork()).join(),t.replace!==void 0&&e.uint32(48).bool(t.replace),e},decode(t,e){let n=t instanceof R?t:new R(t),r=e===void 0?n.len:n.pos+e,o=Gv();for(;n.pos<r;){let i=n.uint32();switch(i>>>3){case 1:if(i!==10)break;o.baseEvent=P.decode(n,n.uint32());continue;case 2:if(i!==18)break;o.subagentRunId=n.string();continue;case 3:if(i!==26)break;o.messageId=n.string();continue;case 4:if(i!==34)break;o.activityType=n.string();continue;case 5:if(i!==42)break;o.content=ie.unwrap(ie.decode(n,n.uint32()));continue;case 6:if(i!==48)break;o.replace=n.bool();continue}if((i&7)===4||i===0)break;n.skip(i&7)}return o},create(t){return La.fromPartial(t??{})},fromPartial(t){let e=Gv();return e.baseEvent=t.baseEvent!==void 0&&t.baseEvent!==null?P.fromPartial(t.baseEvent):void 0,e.subagentRunId=t.subagentRunId??void 0,e.messageId=t.messageId??"",e.activityType=t.activityType??"",e.content=t.content??void 0,e.replace=t.replace??void 0,e}};function Fv(){return{baseEvent:void 0,subagentRunId:void 0,messageId:"",activityType:"",patch:[]}}var za={encode(t,e=new F){t.baseEvent!==void 0&&P.encode(t.baseEvent,e.uint32(10).fork()).join(),t.subagentRunId!==void 0&&e.uint32(18).string(t.subagentRunId),t.messageId!==""&&e.uint32(26).string(t.messageId),t.activityType!==""&&e.uint32(34).string(t.activityType);for(let n of t.patch)_n.encode(n,e.uint32(42).fork()).join();return e},decode(t,e){let n=t instanceof R?t:new R(t),r=e===void 0?n.len:n.pos+e,o=Fv();for(;n.pos<r;){let i=n.uint32();switch(i>>>3){case 1:if(i!==10)break;o.baseEvent=P.decode(n,n.uint32());continue;case 2:if(i!==18)break;o.subagentRunId=n.string();continue;case 3:if(i!==26)break;o.messageId=n.string();continue;case 4:if(i!==34)break;o.activityType=n.string();continue;case 5:if(i!==42)break;o.patch.push(_n.decode(n,n.uint32()));continue}if((i&7)===4||i===0)break;n.skip(i&7)}return o},create(t){return za.fromPartial(t??{})},fromPartial(t){let e=Fv();return e.baseEvent=t.baseEvent!==void 0&&t.baseEvent!==null?P.fromPartial(t.baseEvent):void 0,e.subagentRunId=t.subagentRunId??void 0,e.messageId=t.messageId??"",e.activityType=t.activityType??"",e.patch=t.patch?.map(n=>_n.fromPartial(n))||[],e}};function Bv(){return{baseEvent:void 0,event:void 0,source:void 0,subagentRunId:void 0}}var Da={encode(t,e=new F){return t.baseEvent!==void 0&&P.encode(t.baseEvent,e.uint32(10).fork()).join(),t.event!==void 0&&D.encode(D.wrap(t.event),e.uint32(18).fork()).join(),t.source!==void 0&&e.uint32(26).string(t.source),t.subagentRunId!==void 0&&e.uint32(34).string(t.subagentRunId),e},decode(t,e){let n=t instanceof R?t:new R(t),r=e===void 0?n.len:n.pos+e,o=Bv();for(;n.pos<r;){let i=n.uint32();switch(i>>>3){case 1:if(i!==10)break;o.baseEvent=P.decode(n,n.uint32());continue;case 2:if(i!==18)break;o.event=D.unwrap(D.decode(n,n.uint32()));continue;case 3:if(i!==26)break;o.source=n.string();continue;case 4:if(i!==34)break;o.subagentRunId=n.string();continue}if((i&7)===4||i===0)break;n.skip(i&7)}return o},create(t){return Da.fromPartial(t??{})},fromPartial(t){let e=Bv();return e.baseEvent=t.baseEvent!==void 0&&t.baseEvent!==null?P.fromPartial(t.baseEvent):void 0,e.event=t.event??void 0,e.source=t.source??void 0,e.subagentRunId=t.subagentRunId??void 0,e}};function Zv(){return{baseEvent:void 0,name:"",value:void 0,subagentRunId:void 0}}var $a={encode(t,e=new F){return t.baseEvent!==void 0&&P.encode(t.baseEvent,e.uint32(10).fork()).join(),t.name!==""&&e.uint32(18).string(t.name),t.value!==void 0&&D.encode(D.wrap(t.value),e.uint32(26).fork()).join(),t.subagentRunId!==void 0&&e.uint32(34).string(t.subagentRunId),e},decode(t,e){let n=t instanceof R?t:new R(t),r=e===void 0?n.len:n.pos+e,o=Zv();for(;n.pos<r;){let i=n.uint32();switch(i>>>3){case 1:if(i!==10)break;o.baseEvent=P.decode(n,n.uint32());continue;case 2:if(i!==18)break;o.name=n.string();continue;case 3:if(i!==26)break;o.value=D.unwrap(D.decode(n,n.uint32()));continue;case 4:if(i!==34)break;o.subagentRunId=n.string();continue}if((i&7)===4||i===0)break;n.skip(i&7)}return o},create(t){return $a.fromPartial(t??{})},fromPartial(t){let e=Zv();return e.baseEvent=t.baseEvent!==void 0&&t.baseEvent!==null?P.fromPartial(t.baseEvent):void 0,e.name=t.name??"",e.value=t.value??void 0,e.subagentRunId=t.subagentRunId??void 0,e}};function Vv(){return{baseEvent:void 0,threadId:"",runId:"",parentRunId:void 0,input:void 0,protocolVersion:void 0}}var Ua={encode(t,e=new F){return t.baseEvent!==void 0&&P.encode(t.baseEvent,e.uint32(10).fork()).join(),t.threadId!==""&&e.uint32(18).string(t.threadId),t.runId!==""&&e.uint32(26).string(t.runId),t.parentRunId!==void 0&&e.uint32(34).string(t.parentRunId),t.input!==void 0&&xa.encode(t.input,e.uint32(42).fork()).join(),t.protocolVersion!==void 0&&e.uint32(50).string(t.protocolVersion),e},decode(t,e){let n=t instanceof R?t:new R(t),r=e===void 0?n.len:n.pos+e,o=Vv();for(;n.pos<r;){let i=n.uint32();switch(i>>>3){case 1:if(i!==10)break;o.baseEvent=P.decode(n,n.uint32());continue;case 2:if(i!==18)break;o.threadId=n.string();continue;case 3:if(i!==26)break;o.runId=n.string();continue;case 4:if(i!==34)break;o.parentRunId=n.string();continue;case 5:if(i!==42)break;o.input=xa.decode(n,n.uint32());continue;case 6:if(i!==50)break;o.protocolVersion=n.string();continue}if((i&7)===4||i===0)break;n.skip(i&7)}return o},create(t){return Ua.fromPartial(t??{})},fromPartial(t){let e=Vv();return e.baseEvent=t.baseEvent!==void 0&&t.baseEvent!==null?P.fromPartial(t.baseEvent):void 0,e.threadId=t.threadId??"",e.runId=t.runId??"",e.parentRunId=t.parentRunId??void 0,e.input=t.input!==void 0&&t.input!==null?xa.fromPartial(t.input):void 0,e.protocolVersion=t.protocolVersion??void 0,e}};function jv(){return{baseEvent:void 0,threadId:"",runId:"",result:void 0,outcome:"",interrupts:[],usage:[],pendingToolCallIds:[]}}var Ha={encode(t,e=new F){t.baseEvent!==void 0&&P.encode(t.baseEvent,e.uint32(10).fork()).join(),t.threadId!==""&&e.uint32(18).string(t.threadId),t.runId!==""&&e.uint32(26).string(t.runId),t.result!==void 0&&D.encode(D.wrap(t.result),e.uint32(34).fork()).join(),t.outcome!==""&&e.uint32(42).string(t.outcome);for(let n of t.interrupts)Ea.encode(n,e.uint32(50).fork()).join();for(let n of t.usage)kn.encode(n,e.uint32(58).fork()).join();for(let n of t.pendingToolCallIds)e.uint32(66).string(n);return e},decode(t,e){let n=t instanceof R?t:new R(t),r=e===void 0?n.len:n.pos+e,o=jv();for(;n.pos<r;){let i=n.uint32();switch(i>>>3){case 1:if(i!==10)break;o.baseEvent=P.decode(n,n.uint32());continue;case 2:if(i!==18)break;o.threadId=n.string();continue;case 3:if(i!==26)break;o.runId=n.string();continue;case 4:if(i!==34)break;o.result=D.unwrap(D.decode(n,n.uint32()));continue;case 5:if(i!==42)break;o.outcome=n.string();continue;case 6:if(i!==50)break;o.interrupts.push(Ea.decode(n,n.uint32()));continue;case 7:if(i!==58)break;o.usage.push(kn.decode(n,n.uint32()));continue;case 8:if(i!==66)break;o.pendingToolCallIds.push(n.string());continue}if((i&7)===4||i===0)break;n.skip(i&7)}return o},create(t){return Ha.fromPartial(t??{})},fromPartial(t){let e=jv();return e.baseEvent=t.baseEvent!==void 0&&t.baseEvent!==null?P.fromPartial(t.baseEvent):void 0,e.threadId=t.threadId??"",e.runId=t.runId??"",e.result=t.result??void 0,e.outcome=t.outcome??"",e.interrupts=t.interrupts?.map(n=>Ea.fromPartial(n))||[],e.usage=t.usage?.map(n=>kn.fromPartial(n))||[],e.pendingToolCallIds=t.pendingToolCallIds?.map(n=>n)||[],e}};function Wv(){return{baseEvent:void 0,code:void 0,message:"",usage:[]}}var Ga={encode(t,e=new F){t.baseEvent!==void 0&&P.encode(t.baseEvent,e.uint32(10).fork()).join(),t.code!==void 0&&e.uint32(18).string(t.code),t.message!==""&&e.uint32(26).string(t.message);for(let n of t.usage)kn.encode(n,e.uint32(34).fork()).join();return e},decode(t,e){let n=t instanceof R?t:new R(t),r=e===void 0?n.len:n.pos+e,o=Wv();for(;n.pos<r;){let i=n.uint32();switch(i>>>3){case 1:if(i!==10)break;o.baseEvent=P.decode(n,n.uint32());continue;case 2:if(i!==18)break;o.code=n.string();continue;case 3:if(i!==26)break;o.message=n.string();continue;case 4:if(i!==34)break;o.usage.push(kn.decode(n,n.uint32()));continue}if((i&7)===4||i===0)break;n.skip(i&7)}return o},create(t){return Ga.fromPartial(t??{})},fromPartial(t){let e=Wv();return e.baseEvent=t.baseEvent!==void 0&&t.baseEvent!==null?P.fromPartial(t.baseEvent):void 0,e.code=t.code??void 0,e.message=t.message??"",e.usage=t.usage?.map(n=>kn.fromPartial(n))||[],e}};function qv(){return{baseEvent:void 0,stepName:"",subagentRunId:void 0}}var Fa={encode(t,e=new F){return t.baseEvent!==void 0&&P.encode(t.baseEvent,e.uint32(10).fork()).join(),t.stepName!==""&&e.uint32(18).string(t.stepName),t.subagentRunId!==void 0&&e.uint32(26).string(t.subagentRunId),e},decode(t,e){let n=t instanceof R?t:new R(t),r=e===void 0?n.len:n.pos+e,o=qv();for(;n.pos<r;){let i=n.uint32();switch(i>>>3){case 1:if(i!==10)break;o.baseEvent=P.decode(n,n.uint32());continue;case 2:if(i!==18)break;o.stepName=n.string();continue;case 3:if(i!==26)break;o.subagentRunId=n.string();continue}if((i&7)===4||i===0)break;n.skip(i&7)}return o},create(t){return Fa.fromPartial(t??{})},fromPartial(t){let e=qv();return e.baseEvent=t.baseEvent!==void 0&&t.baseEvent!==null?P.fromPartial(t.baseEvent):void 0,e.stepName=t.stepName??"",e.subagentRunId=t.subagentRunId??void 0,e}};function Yv(){return{baseEvent:void 0,stepName:"",subagentRunId:void 0}}var Ba={encode(t,e=new F){return t.baseEvent!==void 0&&P.encode(t.baseEvent,e.uint32(10).fork()).join(),t.stepName!==""&&e.uint32(18).string(t.stepName),t.subagentRunId!==void 0&&e.uint32(26).string(t.subagentRunId),e},decode(t,e){let n=t instanceof R?t:new R(t),r=e===void 0?n.len:n.pos+e,o=Yv();for(;n.pos<r;){let i=n.uint32();switch(i>>>3){case 1:if(i!==10)break;o.baseEvent=P.decode(n,n.uint32());continue;case 2:if(i!==18)break;o.stepName=n.string();continue;case 3:if(i!==26)break;o.subagentRunId=n.string();continue}if((i&7)===4||i===0)break;n.skip(i&7)}return o},create(t){return Ba.fromPartial(t??{})},fromPartial(t){let e=Yv();return e.baseEvent=t.baseEvent!==void 0&&t.baseEvent!==null?P.fromPartial(t.baseEvent):void 0,e.stepName=t.stepName??"",e.subagentRunId=t.subagentRunId??void 0,e}};function Kv(){return{baseEvent:void 0,subagentRunId:void 0,messageId:""}}var Za={encode(t,e=new F){return t.baseEvent!==void 0&&P.encode(t.baseEvent,e.uint32(10).fork()).join(),t.subagentRunId!==void 0&&e.uint32(18).string(t.subagentRunId),t.messageId!==""&&e.uint32(26).string(t.messageId),e},decode(t,e){let n=t instanceof R?t:new R(t),r=e===void 0?n.len:n.pos+e,o=Kv();for(;n.pos<r;){let i=n.uint32();switch(i>>>3){case 1:if(i!==10)break;o.baseEvent=P.decode(n,n.uint32());continue;case 2:if(i!==18)break;o.subagentRunId=n.string();continue;case 3:if(i!==26)break;o.messageId=n.string();continue}if((i&7)===4||i===0)break;n.skip(i&7)}return o},create(t){return Za.fromPartial(t??{})},fromPartial(t){let e=Kv();return e.baseEvent=t.baseEvent!==void 0&&t.baseEvent!==null?P.fromPartial(t.baseEvent):void 0,e.subagentRunId=t.subagentRunId??void 0,e.messageId=t.messageId??"",e}};function Xv(){return{baseEvent:void 0,subagentRunId:void 0,messageId:"",role:""}}var Va={encode(t,e=new F){return t.baseEvent!==void 0&&P.encode(t.baseEvent,e.uint32(10).fork()).join(),t.subagentRunId!==void 0&&e.uint32(18).string(t.subagentRunId),t.messageId!==""&&e.uint32(26).string(t.messageId),t.role!==""&&e.uint32(34).string(t.role),e},decode(t,e){let n=t instanceof R?t:new R(t),r=e===void 0?n.len:n.pos+e,o=Xv();for(;n.pos<r;){let i=n.uint32();switch(i>>>3){case 1:if(i!==10)break;o.baseEvent=P.decode(n,n.uint32());continue;case 2:if(i!==18)break;o.subagentRunId=n.string();continue;case 3:if(i!==26)break;o.messageId=n.string();continue;case 4:if(i!==34)break;o.role=n.string();continue}if((i&7)===4||i===0)break;n.skip(i&7)}return o},create(t){return Va.fromPartial(t??{})},fromPartial(t){let e=Xv();return e.baseEvent=t.baseEvent!==void 0&&t.baseEvent!==null?P.fromPartial(t.baseEvent):void 0,e.subagentRunId=t.subagentRunId??void 0,e.messageId=t.messageId??"",e.role=t.role??"",e}};function Jv(){return{baseEvent:void 0,subagentRunId:void 0,messageId:"",delta:""}}var ja={encode(t,e=new F){return t.baseEvent!==void 0&&P.encode(t.baseEvent,e.uint32(10).fork()).join(),t.subagentRunId!==void 0&&e.uint32(18).string(t.subagentRunId),t.messageId!==""&&e.uint32(26).string(t.messageId),t.delta!==""&&e.uint32(34).string(t.delta),e},decode(t,e){let n=t instanceof R?t:new R(t),r=e===void 0?n.len:n.pos+e,o=Jv();for(;n.pos<r;){let i=n.uint32();switch(i>>>3){case 1:if(i!==10)break;o.baseEvent=P.decode(n,n.uint32());continue;case 2:if(i!==18)break;o.subagentRunId=n.string();continue;case 3:if(i!==26)break;o.messageId=n.string();continue;case 4:if(i!==34)break;o.delta=n.string();continue}if((i&7)===4||i===0)break;n.skip(i&7)}return o},create(t){return ja.fromPartial(t??{})},fromPartial(t){let e=Jv();return e.baseEvent=t.baseEvent!==void 0&&t.baseEvent!==null?P.fromPartial(t.baseEvent):void 0,e.subagentRunId=t.subagentRunId??void 0,e.messageId=t.messageId??"",e.delta=t.delta??"",e}};function Qv(){return{baseEvent:void 0,subagentRunId:void 0,messageId:""}}var Wa={encode(t,e=new F){return t.baseEvent!==void 0&&P.encode(t.baseEvent,e.uint32(10).fork()).join(),t.subagentRunId!==void 0&&e.uint32(18).string(t.subagentRunId),t.messageId!==""&&e.uint32(26).string(t.messageId),e},decode(t,e){let n=t instanceof R?t:new R(t),r=e===void 0?n.len:n.pos+e,o=Qv();for(;n.pos<r;){let i=n.uint32();switch(i>>>3){case 1:if(i!==10)break;o.baseEvent=P.decode(n,n.uint32());continue;case 2:if(i!==18)break;o.subagentRunId=n.string();continue;case 3:if(i!==26)break;o.messageId=n.string();continue}if((i&7)===4||i===0)break;n.skip(i&7)}return o},create(t){return Wa.fromPartial(t??{})},fromPartial(t){let e=Qv();return e.baseEvent=t.baseEvent!==void 0&&t.baseEvent!==null?P.fromPartial(t.baseEvent):void 0,e.subagentRunId=t.subagentRunId??void 0,e.messageId=t.messageId??"",e}};function eb(){return{baseEvent:void 0,subagentRunId:void 0,messageId:void 0,delta:void 0}}var qa={encode(t,e=new F){return t.baseEvent!==void 0&&P.encode(t.baseEvent,e.uint32(10).fork()).join(),t.subagentRunId!==void 0&&e.uint32(18).string(t.subagentRunId),t.messageId!==void 0&&e.uint32(26).string(t.messageId),t.delta!==void 0&&e.uint32(34).string(t.delta),e},decode(t,e){let n=t instanceof R?t:new R(t),r=e===void 0?n.len:n.pos+e,o=eb();for(;n.pos<r;){let i=n.uint32();switch(i>>>3){case 1:if(i!==10)break;o.baseEvent=P.decode(n,n.uint32());continue;case 2:if(i!==18)break;o.subagentRunId=n.string();continue;case 3:if(i!==26)break;o.messageId=n.string();continue;case 4:if(i!==34)break;o.delta=n.string();continue}if((i&7)===4||i===0)break;n.skip(i&7)}return o},create(t){return qa.fromPartial(t??{})},fromPartial(t){let e=eb();return e.baseEvent=t.baseEvent!==void 0&&t.baseEvent!==null?P.fromPartial(t.baseEvent):void 0,e.subagentRunId=t.subagentRunId??void 0,e.messageId=t.messageId??void 0,e.delta=t.delta??void 0,e}};function tb(){return{baseEvent:void 0,subagentRunId:void 0,messageId:""}}var Ya={encode(t,e=new F){return t.baseEvent!==void 0&&P.encode(t.baseEvent,e.uint32(10).fork()).join(),t.subagentRunId!==void 0&&e.uint32(18).string(t.subagentRunId),t.messageId!==""&&e.uint32(26).string(t.messageId),e},decode(t,e){let n=t instanceof R?t:new R(t),r=e===void 0?n.len:n.pos+e,o=tb();for(;n.pos<r;){let i=n.uint32();switch(i>>>3){case 1:if(i!==10)break;o.baseEvent=P.decode(n,n.uint32());continue;case 2:if(i!==18)break;o.subagentRunId=n.string();continue;case 3:if(i!==26)break;o.messageId=n.string();continue}if((i&7)===4||i===0)break;n.skip(i&7)}return o},create(t){return Ya.fromPartial(t??{})},fromPartial(t){let e=tb();return e.baseEvent=t.baseEvent!==void 0&&t.baseEvent!==null?P.fromPartial(t.baseEvent):void 0,e.subagentRunId=t.subagentRunId??void 0,e.messageId=t.messageId??"",e}};function nb(){return{baseEvent:void 0,subagentRunId:void 0,subtype:"",entityId:"",encryptedValue:""}}var Ka={encode(t,e=new F){return t.baseEvent!==void 0&&P.encode(t.baseEvent,e.uint32(10).fork()).join(),t.subagentRunId!==void 0&&e.uint32(18).string(t.subagentRunId),t.subtype!==""&&e.uint32(26).string(t.subtype),t.entityId!==""&&e.uint32(34).string(t.entityId),t.encryptedValue!==""&&e.uint32(42).string(t.encryptedValue),e},decode(t,e){let n=t instanceof R?t:new R(t),r=e===void 0?n.len:n.pos+e,o=nb();for(;n.pos<r;){let i=n.uint32();switch(i>>>3){case 1:if(i!==10)break;o.baseEvent=P.decode(n,n.uint32());continue;case 2:if(i!==18)break;o.subagentRunId=n.string();continue;case 3:if(i!==26)break;o.subtype=n.string();continue;case 4:if(i!==34)break;o.entityId=n.string();continue;case 5:if(i!==42)break;o.encryptedValue=n.string();continue}if((i&7)===4||i===0)break;n.skip(i&7)}return o},create(t){return Ka.fromPartial(t??{})},fromPartial(t){let e=nb();return e.baseEvent=t.baseEvent!==void 0&&t.baseEvent!==null?P.fromPartial(t.baseEvent):void 0,e.subagentRunId=t.subagentRunId??void 0,e.subtype=t.subtype??"",e.entityId=t.entityId??"",e.encryptedValue=t.encryptedValue??"",e}};function rb(){return{baseEvent:void 0,subagentRunId:"",name:"",description:void 0,parentSubagentRunId:void 0,parentToolCallId:void 0,parentMessageId:void 0}}var Xa={encode(t,e=new F){return t.baseEvent!==void 0&&P.encode(t.baseEvent,e.uint32(10).fork()).join(),t.subagentRunId!==""&&e.uint32(18).string(t.subagentRunId),t.name!==""&&e.uint32(26).string(t.name),t.description!==void 0&&e.uint32(34).string(t.description),t.parentSubagentRunId!==void 0&&e.uint32(42).string(t.parentSubagentRunId),t.parentToolCallId!==void 0&&e.uint32(50).string(t.parentToolCallId),t.parentMessageId!==void 0&&e.uint32(58).string(t.parentMessageId),e},decode(t,e){let n=t instanceof R?t:new R(t),r=e===void 0?n.len:n.pos+e,o=rb();for(;n.pos<r;){let i=n.uint32();switch(i>>>3){case 1:if(i!==10)break;o.baseEvent=P.decode(n,n.uint32());continue;case 2:if(i!==18)break;o.subagentRunId=n.string();continue;case 3:if(i!==26)break;o.name=n.string();continue;case 4:if(i!==34)break;o.description=n.string();continue;case 5:if(i!==42)break;o.parentSubagentRunId=n.string();continue;case 6:if(i!==50)break;o.parentToolCallId=n.string();continue;case 7:if(i!==58)break;o.parentMessageId=n.string();continue}if((i&7)===4||i===0)break;n.skip(i&7)}return o},create(t){return Xa.fromPartial(t??{})},fromPartial(t){let e=rb();return e.baseEvent=t.baseEvent!==void 0&&t.baseEvent!==null?P.fromPartial(t.baseEvent):void 0,e.subagentRunId=t.subagentRunId??"",e.name=t.name??"",e.description=t.description??void 0,e.parentSubagentRunId=t.parentSubagentRunId??void 0,e.parentToolCallId=t.parentToolCallId??void 0,e.parentMessageId=t.parentMessageId??void 0,e}};function ob(){return{baseEvent:void 0,subagentRunId:"",result:void 0,outcome:"",interruptIds:[]}}var Ja={encode(t,e=new F){t.baseEvent!==void 0&&P.encode(t.baseEvent,e.uint32(10).fork()).join(),t.subagentRunId!==""&&e.uint32(18).string(t.subagentRunId),t.result!==void 0&&D.encode(D.wrap(t.result),e.uint32(26).fork()).join(),t.outcome!==""&&e.uint32(34).string(t.outcome);for(let n of t.interruptIds)e.uint32(42).string(n);return e},decode(t,e){let n=t instanceof R?t:new R(t),r=e===void 0?n.len:n.pos+e,o=ob();for(;n.pos<r;){let i=n.uint32();switch(i>>>3){case 1:if(i!==10)break;o.baseEvent=P.decode(n,n.uint32());continue;case 2:if(i!==18)break;o.subagentRunId=n.string();continue;case 3:if(i!==26)break;o.result=D.unwrap(D.decode(n,n.uint32()));continue;case 4:if(i!==34)break;o.outcome=n.string();continue;case 5:if(i!==42)break;o.interruptIds.push(n.string());continue}if((i&7)===4||i===0)break;n.skip(i&7)}return o},create(t){return Ja.fromPartial(t??{})},fromPartial(t){let e=ob();return e.baseEvent=t.baseEvent!==void 0&&t.baseEvent!==null?P.fromPartial(t.baseEvent):void 0,e.subagentRunId=t.subagentRunId??"",e.result=t.result??void 0,e.outcome=t.outcome??"",e.interruptIds=t.interruptIds?.map(n=>n)||[],e}};function ib(){return{baseEvent:void 0,subagentRunId:"",message:"",code:void 0}}var Qa={encode(t,e=new F){return t.baseEvent!==void 0&&P.encode(t.baseEvent,e.uint32(10).fork()).join(),t.subagentRunId!==""&&e.uint32(18).string(t.subagentRunId),t.message!==""&&e.uint32(26).string(t.message),t.code!==void 0&&e.uint32(34).string(t.code),e},decode(t,e){let n=t instanceof R?t:new R(t),r=e===void 0?n.len:n.pos+e,o=ib();for(;n.pos<r;){let i=n.uint32();switch(i>>>3){case 1:if(i!==10)break;o.baseEvent=P.decode(n,n.uint32());continue;case 2:if(i!==18)break;o.subagentRunId=n.string();continue;case 3:if(i!==26)break;o.message=n.string();continue;case 4:if(i!==34)break;o.code=n.string();continue}if((i&7)===4||i===0)break;n.skip(i&7)}return o},create(t){return Qa.fromPartial(t??{})},fromPartial(t){let e=ib();return e.baseEvent=t.baseEvent!==void 0&&t.baseEvent!==null?P.fromPartial(t.baseEvent):void 0,e.subagentRunId=t.subagentRunId??"",e.message=t.message??"",e.code=t.code??void 0,e}};function ab(){return{textMessageStart:void 0,textMessageContent:void 0,textMessageEnd:void 0,toolCallStart:void 0,toolCallArgs:void 0,toolCallEnd:void 0,stateSnapshot:void 0,stateDelta:void 0,messagesSnapshot:void 0,raw:void 0,custom:void 0,runStarted:void 0,runFinished:void 0,runError:void 0,stepStarted:void 0,stepFinished:void 0,textMessageChunk:void 0,toolCallChunk:void 0,subagentStarted:void 0,subagentFinished:void 0,subagentError:void 0,toolCallResult:void 0,activitySnapshot:void 0,activityDelta:void 0,reasoningStart:void 0,reasoningMessageStart:void 0,reasoningMessageContent:void 0,reasoningMessageEnd:void 0,reasoningMessageChunk:void 0,reasoningEnd:void 0,reasoningEncryptedValue:void 0}}var cb={encode(t,e=new F){return t.textMessageStart!==void 0&&_a.encode(t.textMessageStart,e.uint32(10).fork()).join(),t.textMessageContent!==void 0&&Sa.encode(t.textMessageContent,e.uint32(18).fork()).join(),t.textMessageEnd!==void 0&&Ta.encode(t.textMessageEnd,e.uint32(26).fork()).join(),t.toolCallStart!==void 0&&Aa.encode(t.toolCallStart,e.uint32(34).fork()).join(),t.toolCallArgs!==void 0&&Ia.encode(t.toolCallArgs,e.uint32(42).fork()).join(),t.toolCallEnd!==void 0&&Ra.encode(t.toolCallEnd,e.uint32(50).fork()).join(),t.stateSnapshot!==void 0&&Oa.encode(t.stateSnapshot,e.uint32(58).fork()).join(),t.stateDelta!==void 0&&Ma.encode(t.stateDelta,e.uint32(66).fork()).join(),t.messagesSnapshot!==void 0&&Pa.encode(t.messagesSnapshot,e.uint32(74).fork()).join(),t.raw!==void 0&&Da.encode(t.raw,e.uint32(82).fork()).join(),t.custom!==void 0&&$a.encode(t.custom,e.uint32(90).fork()).join(),t.runStarted!==void 0&&Ua.encode(t.runStarted,e.uint32(98).fork()).join(),t.runFinished!==void 0&&Ha.encode(t.runFinished,e.uint32(106).fork()).join(),t.runError!==void 0&&Ga.encode(t.runError,e.uint32(114).fork()).join(),t.stepStarted!==void 0&&Fa.encode(t.stepStarted,e.uint32(122).fork()).join(),t.stepFinished!==void 0&&Ba.encode(t.stepFinished,e.uint32(130).fork()).join(),t.textMessageChunk!==void 0&&ka.encode(t.textMessageChunk,e.uint32(138).fork()).join(),t.toolCallChunk!==void 0&&Ca.encode(t.toolCallChunk,e.uint32(146).fork()).join(),t.subagentStarted!==void 0&&Xa.encode(t.subagentStarted,e.uint32(154).fork()).join(),t.subagentFinished!==void 0&&Ja.encode(t.subagentFinished,e.uint32(162).fork()).join(),t.subagentError!==void 0&&Qa.encode(t.subagentError,e.uint32(170).fork()).join(),t.toolCallResult!==void 0&&Na.encode(t.toolCallResult,e.uint32(178).fork()).join(),t.activitySnapshot!==void 0&&La.encode(t.activitySnapshot,e.uint32(186).fork()).join(),t.activityDelta!==void 0&&za.encode(t.activityDelta,e.uint32(194).fork()).join(),t.reasoningStart!==void 0&&Za.encode(t.reasoningStart,e.uint32(202).fork()).join(),t.reasoningMessageStart!==void 0&&Va.encode(t.reasoningMessageStart,e.uint32(210).fork()).join(),t.reasoningMessageContent!==void 0&&ja.encode(t.reasoningMessageContent,e.uint32(218).fork()).join(),t.reasoningMessageEnd!==void 0&&Wa.encode(t.reasoningMessageEnd,e.uint32(226).fork()).join(),t.reasoningMessageChunk!==void 0&&qa.encode(t.reasoningMessageChunk,e.uint32(234).fork()).join(),t.reasoningEnd!==void 0&&Ya.encode(t.reasoningEnd,e.uint32(242).fork()).join(),t.reasoningEncryptedValue!==void 0&&Ka.encode(t.reasoningEncryptedValue,e.uint32(250).fork()).join(),e},decode(t,e){let n=t instanceof R?t:new R(t),r=e===void 0?n.len:n.pos+e,o=ab();for(;n.pos<r;){let i=n.uint32();switch(i>>>3){case 1:if(i!==10)break;o.textMessageStart=_a.decode(n,n.uint32());continue;case 2:if(i!==18)break;o.textMessageContent=Sa.decode(n,n.uint32());continue;case 3:if(i!==26)break;o.textMessageEnd=Ta.decode(n,n.uint32());continue;case 4:if(i!==34)break;o.toolCallStart=Aa.decode(n,n.uint32());continue;case 5:if(i!==42)break;o.toolCallArgs=Ia.decode(n,n.uint32());continue;case 6:if(i!==50)break;o.toolCallEnd=Ra.decode(n,n.uint32());continue;case 7:if(i!==58)break;o.stateSnapshot=Oa.decode(n,n.uint32());continue;case 8:if(i!==66)break;o.stateDelta=Ma.decode(n,n.uint32());continue;case 9:if(i!==74)break;o.messagesSnapshot=Pa.decode(n,n.uint32());continue;case 10:if(i!==82)break;o.raw=Da.decode(n,n.uint32());continue;case 11:if(i!==90)break;o.custom=$a.decode(n,n.uint32());continue;case 12:if(i!==98)break;o.runStarted=Ua.decode(n,n.uint32());continue;case 13:if(i!==106)break;o.runFinished=Ha.decode(n,n.uint32());continue;case 14:if(i!==114)break;o.runError=Ga.decode(n,n.uint32());continue;case 15:if(i!==122)break;o.stepStarted=Fa.decode(n,n.uint32());continue;case 16:if(i!==130)break;o.stepFinished=Ba.decode(n,n.uint32());continue;case 17:if(i!==138)break;o.textMessageChunk=ka.decode(n,n.uint32());continue;case 18:if(i!==146)break;o.toolCallChunk=Ca.decode(n,n.uint32());continue;case 19:if(i!==154)break;o.subagentStarted=Xa.decode(n,n.uint32());continue;case 20:if(i!==162)break;o.subagentFinished=Ja.decode(n,n.uint32());continue;case 21:if(i!==170)break;o.subagentError=Qa.decode(n,n.uint32());continue;case 22:if(i!==178)break;o.toolCallResult=Na.decode(n,n.uint32());continue;case 23:if(i!==186)break;o.activitySnapshot=La.decode(n,n.uint32());continue;case 24:if(i!==194)break;o.activityDelta=za.decode(n,n.uint32());continue;case 25:if(i!==202)break;o.reasoningStart=Za.decode(n,n.uint32());continue;case 26:if(i!==210)break;o.reasoningMessageStart=Va.decode(n,n.uint32());continue;case 27:if(i!==218)break;o.reasoningMessageContent=ja.decode(n,n.uint32());continue;case 28:if(i!==226)break;o.reasoningMessageEnd=Wa.decode(n,n.uint32());continue;case 29:if(i!==234)break;o.reasoningMessageChunk=qa.decode(n,n.uint32());continue;case 30:if(i!==242)break;o.reasoningEnd=Ya.decode(n,n.uint32());continue;case 31:if(i!==250)break;o.reasoningEncryptedValue=Ka.decode(n,n.uint32());continue}if((i&7)===4||i===0)break;n.skip(i&7)}return o},create(t){return cb.fromPartial(t??{})},fromPartial(t){let e=ab();return e.textMessageStart=t.textMessageStart!==void 0&&t.textMessageStart!==null?_a.fromPartial(t.textMessageStart):void 0,e.textMessageContent=t.textMessageContent!==void 0&&t.textMessageContent!==null?Sa.fromPartial(t.textMessageContent):void 0,e.textMessageEnd=t.textMessageEnd!==void 0&&t.textMessageEnd!==null?Ta.fromPartial(t.textMessageEnd):void 0,e.toolCallStart=t.toolCallStart!==void 0&&t.toolCallStart!==null?Aa.fromPartial(t.toolCallStart):void 0,e.toolCallArgs=t.toolCallArgs!==void 0&&t.toolCallArgs!==null?Ia.fromPartial(t.toolCallArgs):void 0,e.toolCallEnd=t.toolCallEnd!==void 0&&t.toolCallEnd!==null?Ra.fromPartial(t.toolCallEnd):void 0,e.stateSnapshot=t.stateSnapshot!==void 0&&t.stateSnapshot!==null?Oa.fromPartial(t.stateSnapshot):void 0,e.stateDelta=t.stateDelta!==void 0&&t.stateDelta!==null?Ma.fromPartial(t.stateDelta):void 0,e.messagesSnapshot=t.messagesSnapshot!==void 0&&t.messagesSnapshot!==null?Pa.fromPartial(t.messagesSnapshot):void 0,e.raw=t.raw!==void 0&&t.raw!==null?Da.fromPartial(t.raw):void 0,e.custom=t.custom!==void 0&&t.custom!==null?$a.fromPartial(t.custom):void 0,e.runStarted=t.runStarted!==void 0&&t.runStarted!==null?Ua.fromPartial(t.runStarted):void 0,e.runFinished=t.runFinished!==void 0&&t.runFinished!==null?Ha.fromPartial(t.runFinished):void 0,e.runError=t.runError!==void 0&&t.runError!==null?Ga.fromPartial(t.runError):void 0,e.stepStarted=t.stepStarted!==void 0&&t.stepStarted!==null?Fa.fromPartial(t.stepStarted):void 0,e.stepFinished=t.stepFinished!==void 0&&t.stepFinished!==null?Ba.fromPartial(t.stepFinished):void 0,e.textMessageChunk=t.textMessageChunk!==void 0&&t.textMessageChunk!==null?ka.fromPartial(t.textMessageChunk):void 0,e.toolCallChunk=t.toolCallChunk!==void 0&&t.toolCallChunk!==null?Ca.fromPartial(t.toolCallChunk):void 0,e.subagentStarted=t.subagentStarted!==void 0&&t.subagentStarted!==null?Xa.fromPartial(t.subagentStarted):void 0,e.subagentFinished=t.subagentFinished!==void 0&&t.subagentFinished!==null?Ja.fromPartial(t.subagentFinished):void 0,e.subagentError=t.subagentError!==void 0&&t.subagentError!==null?Qa.fromPartial(t.subagentError):void 0,e.toolCallResult=t.toolCallResult!==void 0&&t.toolCallResult!==null?Na.fromPartial(t.toolCallResult):void 0,e.activitySnapshot=t.activitySnapshot!==void 0&&t.activitySnapshot!==null?La.fromPartial(t.activitySnapshot):void 0,e.activityDelta=t.activityDelta!==void 0&&t.activityDelta!==null?za.fromPartial(t.activityDelta):void 0,e.reasoningStart=t.reasoningStart!==void 0&&t.reasoningStart!==null?Za.fromPartial(t.reasoningStart):void 0,e.reasoningMessageStart=t.reasoningMessageStart!==void 0&&t.reasoningMessageStart!==null?Va.fromPartial(t.reasoningMessageStart):void 0,e.reasoningMessageContent=t.reasoningMessageContent!==void 0&&t.reasoningMessageContent!==null?ja.fromPartial(t.reasoningMessageContent):void 0,e.reasoningMessageEnd=t.reasoningMessageEnd!==void 0&&t.reasoningMessageEnd!==null?Wa.fromPartial(t.reasoningMessageEnd):void 0,e.reasoningMessageChunk=t.reasoningMessageChunk!==void 0&&t.reasoningMessageChunk!==null?qa.fromPartial(t.reasoningMessageChunk):void 0,e.reasoningEnd=t.reasoningEnd!==void 0&&t.reasoningEnd!==null?Ya.fromPartial(t.reasoningEnd):void 0,e.reasoningEncryptedValue=t.reasoningEncryptedValue!==void 0&&t.reasoningEncryptedValue!==null?Ka.fromPartial(t.reasoningEncryptedValue):void 0,e}};function sb(){return{provider:void 0,model:void 0,inputTokens:void 0,outputTokens:void 0,totalTokens:void 0,reasoningTokens:void 0,cachedInputTokens:void 0,cacheWriteInputTokens:void 0}}var kn={encode(t,e=new F){return t.provider!==void 0&&e.uint32(10).string(t.provider),t.model!==void 0&&e.uint32(18).string(t.model),t.inputTokens!==void 0&&e.uint32(24).int64(t.inputTokens),t.outputTokens!==void 0&&e.uint32(32).int64(t.outputTokens),t.totalTokens!==void 0&&e.uint32(40).int64(t.totalTokens),t.reasoningTokens!==void 0&&e.uint32(48).int64(t.reasoningTokens),t.cachedInputTokens!==void 0&&e.uint32(56).int64(t.cachedInputTokens),t.cacheWriteInputTokens!==void 0&&e.uint32(64).int64(t.cacheWriteInputTokens),e},decode(t,e){let n=t instanceof R?t:new R(t),r=e===void 0?n.len:n.pos+e,o=sb();for(;n.pos<r;){let i=n.uint32();switch(i>>>3){case 1:if(i!==10)break;o.provider=n.string();continue;case 2:if(i!==18)break;o.model=n.string();continue;case 3:if(i!==24)break;o.inputTokens=xn(n.int64());continue;case 4:if(i!==32)break;o.outputTokens=xn(n.int64());continue;case 5:if(i!==40)break;o.totalTokens=xn(n.int64());continue;case 6:if(i!==48)break;o.reasoningTokens=xn(n.int64());continue;case 7:if(i!==56)break;o.cachedInputTokens=xn(n.int64());continue;case 8:if(i!==64)break;o.cacheWriteInputTokens=xn(n.int64());continue}if((i&7)===4||i===0)break;n.skip(i&7)}return o},create(t){return kn.fromPartial(t??{})},fromPartial(t){let e=sb();return e.provider=t.provider??void 0,e.model=t.model??void 0,e.inputTokens=t.inputTokens??void 0,e.outputTokens=t.outputTokens??void 0,e.totalTokens=t.totalTokens??void 0,e.reasoningTokens=t.reasoningTokens??void 0,e.cachedInputTokens=t.cachedInputTokens??void 0,e.cacheWriteInputTokens=t.cacheWriteInputTokens??void 0,e}};function xn(t){let e=globalThis.Number(t.toString());if(e>globalThis.Number.MAX_SAFE_INTEGER)throw new globalThis.Error("Value is larger than Number.MAX_SAFE_INTEGER");if(e<globalThis.Number.MIN_SAFE_INTEGER)throw new globalThis.Error("Value is smaller than Number.MIN_SAFE_INTEGER");return e}var mr=t=>t&&typeof t=="object"?t:void 0,me=t=>Array.isArray(t)?t:[],mT=()=>typeof process<"u"&&typeof process.env<"u"&&!!process.env.SUPPRESS_TRANSFORMATION_WARNINGS,ub=()=>{mT()||console.warn("[ag-ui][proto] Dropped a content part this build does not know: the protocol has a variant this SDK predates.")};var Pz=new Set(Object.values(b)),gT={textMessageStart:"TEXT_MESSAGE_START",textMessageContent:"TEXT_MESSAGE_CONTENT",textMessageEnd:"TEXT_MESSAGE_END",textMessageChunk:"TEXT_MESSAGE_CHUNK",toolCallStart:"TOOL_CALL_START",toolCallArgs:"TOOL_CALL_ARGS",toolCallEnd:"TOOL_CALL_END",toolCallChunk:"TOOL_CALL_CHUNK",toolCallResult:"TOOL_CALL_RESULT",stateSnapshot:"STATE_SNAPSHOT",stateDelta:"STATE_DELTA",messagesSnapshot:"MESSAGES_SNAPSHOT",activitySnapshot:"ACTIVITY_SNAPSHOT",activityDelta:"ACTIVITY_DELTA",raw:"RAW",custom:"CUSTOM",runStarted:"RUN_STARTED",runFinished:"RUN_FINISHED",runError:"RUN_ERROR",stepStarted:"STEP_STARTED",stepFinished:"STEP_FINISHED",reasoningStart:"REASONING_START",reasoningMessageStart:"REASONING_MESSAGE_START",reasoningMessageContent:"REASONING_MESSAGE_CONTENT",reasoningMessageEnd:"REASONING_MESSAGE_END",reasoningMessageChunk:"REASONING_MESSAGE_CHUNK",reasoningEnd:"REASONING_END",reasoningEncryptedValue:"REASONING_ENCRYPTED_VALUE",subagentStarted:"SUBAGENT_STARTED",subagentFinished:"SUBAGENT_FINISHED",subagentError:"SUBAGENT_ERROR"},En=new Set([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31]);var qt=t=>{let e=mr(t);if(e){if([e.data,e.url,e.file].filter(Boolean).length>1)throw new Error("Invalid event: source carries more than one arm");if(e.data){let n=e.data;return{type:"data",value:n.value,mimeType:n.mimeType}}if(e.url){let n=e.url;return{type:"url",value:n.value,mimeType:n.mimeType}}if(e.file){let n=e.file;return{type:"file",value:n.value,provider:n.provider,mimeType:n.mimeType}}}};var db=t=>{let e=mr(t);if(e){if([e.text,e.image,e.audio,e.video,e.document].filter(Boolean).length>1)throw new Error("Invalid event: content part carries more than one arm");if(e.text){let n=e.text;return{type:"text",id:n.id,text:n.text,metadata:n.metadata}}if(e.image){let n=e.image;return n.source!==void 0&&qt(n.source)===void 0?void 0:{type:"image",id:n.id,source:qt(n.source),metadata:n.metadata}}if(e.audio){let n=e.audio;return n.source!==void 0&&qt(n.source)===void 0?void 0:{type:"audio",id:n.id,source:qt(n.source),metadata:n.metadata}}if(e.video){let n=e.video;return n.source!==void 0&&qt(n.source)===void 0?void 0:{type:"video",id:n.id,source:qt(n.source),metadata:n.metadata}}if(e.document){let n=e.document;return n.source!==void 0&&qt(n.source)===void 0?void 0:{type:"document",id:n.id,source:qt(n.source),metadata:n.metadata}}}},vT=new Set(["activity"]),bT=new Set(["user","tool"]),yT=new Set(["developer","system","assistant","user","tool","activity","reasoning"]);var pb=t=>{let e=mr(t)??{},n={...e},r=typeof e.role=="string"?e.role:"",o=yT.has(r),i=o?bT.has(r):me(e.contentParts).length>0,a=o?vT.has(r):!i&&e.activityContent!==void 0;if(!o&&(e.content!==void 0?1:0)+(me(e.contentParts).length>0?1:0)+(e.activityContent!==void 0?1:0)>1)throw new Error("Invalid event: message carries more than one content form");if(o){if(!i&&me(e.contentParts).length>0)throw new Error("Invalid event: message carries content parts for a role that has none");if(e.activityContent!==void 0&&!a)throw new Error("Invalid event: message carries activity content for a non-activity role");if(a&&e.content!==void 0)throw new Error("Invalid event: activity content cannot ride with other content forms");if(i&&e.content!==void 0&&me(e.contentParts).length>0)throw new Error("Invalid event: message carries both string content and content parts")}return i&&e.content===void 0&&(n.content=me(e.contentParts).map(s=>{let l=db(s);return l===void 0&&ub(),l}).filter(s=>s!==void 0)),a&&e.activityContent!==void 0&&(n.content=e.activityContent),delete n.activityContent,delete n.contentParts,me(e.toolCalls).length===0&&delete n.toolCalls,Object.keys(n).forEach(s=>{n[s]===void 0&&delete n[s]}),n},Uu=t=>{if(Array.isArray(t)){for(let n of t)Uu(n);return}let e=mr(t);if(e)for(let n of Object.keys(e))e[n]===void 0?delete e[n]:Uu(e[n])};var wT=t=>{let e=mr(t);if(!e)return;let n={};return e.threadId!==void 0&&(n.threadId=e.threadId),e.runId!==void 0&&(n.runId=e.runId),e.protocolVersion!==void 0&&(n.protocolVersion=e.protocolVersion),e.parentRunId!==void 0&&(n.parentRunId=e.parentRunId),e.state!==void 0&&(n.state=e.state),n.messages=me(e.messages).map(pb).filter(r=>r!==void 0),n.tools=me(e.tools),n.context=me(e.context),e.forwardedProps!==void 0&&(n.forwardedProps=e.forwardedProps),n.resume=me(e.resume),n};var Hu={TextMessageStartEvent:{singular:new Set([1]),descend:{1:"BaseEvent"}},BaseEvent:{singular:new Set([3,4]),descend:{},google:{3:"google.protobuf.Value",4:"google.protobuf.Struct"}},TextMessageContentEvent:{singular:new Set([1]),descend:{1:"BaseEvent"}},TextMessageEndEvent:{singular:new Set([1]),descend:{1:"BaseEvent"}},ToolCallStartEvent:{singular:new Set([1]),descend:{1:"BaseEvent"}},ToolCallArgsEvent:{singular:new Set([1]),descend:{1:"BaseEvent"}},ToolCallEndEvent:{singular:new Set([1]),descend:{1:"BaseEvent"}},StateSnapshotEvent:{singular:new Set([1,2]),descend:{1:"BaseEvent"},google:{2:"google.protobuf.Value"}},StateDeltaEvent:{singular:new Set([1]),descend:{1:"BaseEvent",2:"JsonPatchOperation"}},JsonPatchOperation:{singular:new Set([4]),descend:{},google:{4:"google.protobuf.Value"}},MessagesSnapshotEvent:{singular:new Set([1]),descend:{1:"BaseEvent",2:"Message"}},Message:{singular:new Set([9,13]),descend:{5:"ToolCall",8:"InputContent"},google:{9:"google.protobuf.Struct",13:"google.protobuf.Struct"}},ToolCall:{singular:new Set([3,4]),descend:{},google:{4:"google.protobuf.Struct"}},InputContent:{singular:new Set([1,2,3,4,5]),descend:{1:"TextInputPart",2:"ImageInputPart",3:"AudioInputPart",4:"VideoInputPart",5:"DocumentInputPart"},arms:new Set([1,2,3,4,5])},TextInputPart:{singular:new Set([3]),descend:{},google:{3:"google.protobuf.Value"}},ImageInputPart:{singular:new Set([1,2]),descend:{1:"InputContentSource"},google:{2:"google.protobuf.Value"}},InputContentSource:{singular:new Set([1,2,3]),descend:{},arms:new Set([1,2,3])},AudioInputPart:{singular:new Set([1,2]),descend:{1:"InputContentSource"},google:{2:"google.protobuf.Value"}},VideoInputPart:{singular:new Set([1,2]),descend:{1:"InputContentSource"},google:{2:"google.protobuf.Value"}},DocumentInputPart:{singular:new Set([1,2]),descend:{1:"InputContentSource"},google:{2:"google.protobuf.Value"}},RawEvent:{singular:new Set([1,2]),descend:{1:"BaseEvent"},google:{2:"google.protobuf.Value"}},CustomEvent:{singular:new Set([1,3]),descend:{1:"BaseEvent"},google:{3:"google.protobuf.Value"}},RunStartedEvent:{singular:new Set([1,5]),descend:{1:"BaseEvent",5:"RunAgentInput"}},RunAgentInput:{singular:new Set([4,8]),descend:{5:"Message",6:"Tool",9:"ResumeEntry"},google:{4:"google.protobuf.Value",8:"google.protobuf.Value"}},Tool:{singular:new Set([3,4]),descend:{},google:{3:"google.protobuf.Value",4:"google.protobuf.Struct"}},ResumeEntry:{singular:new Set([3,4]),descend:{},google:{3:"google.protobuf.Value",4:"google.protobuf.Struct"}},RunFinishedEvent:{singular:new Set([1,4]),descend:{1:"BaseEvent",6:"Interrupt"},google:{4:"google.protobuf.Value"}},Interrupt:{singular:new Set([5,7]),descend:{},google:{5:"google.protobuf.Value",7:"google.protobuf.Value"}},RunErrorEvent:{singular:new Set([1]),descend:{1:"BaseEvent"}},StepStartedEvent:{singular:new Set([1]),descend:{1:"BaseEvent"}},StepFinishedEvent:{singular:new Set([1]),descend:{1:"BaseEvent"}},TextMessageChunkEvent:{singular:new Set([1]),descend:{1:"BaseEvent"}},ToolCallChunkEvent:{singular:new Set([1]),descend:{1:"BaseEvent"}},SubagentStartedEvent:{singular:new Set([1]),descend:{1:"BaseEvent"}},SubagentFinishedEvent:{singular:new Set([1,3]),descend:{1:"BaseEvent"},google:{3:"google.protobuf.Value"}},SubagentErrorEvent:{singular:new Set([1]),descend:{1:"BaseEvent"}},ToolCallResultEvent:{singular:new Set([1]),descend:{1:"BaseEvent",7:"InputContent"}},ActivitySnapshotEvent:{singular:new Set([1,5]),descend:{1:"BaseEvent"},google:{5:"google.protobuf.Struct"}},ActivityDeltaEvent:{singular:new Set([1]),descend:{1:"BaseEvent",5:"JsonPatchOperation"}},ReasoningStartEvent:{singular:new Set([1]),descend:{1:"BaseEvent"}},ReasoningMessageStartEvent:{singular:new Set([1]),descend:{1:"BaseEvent"}},ReasoningMessageContentEvent:{singular:new Set([1]),descend:{1:"BaseEvent"}},ReasoningMessageEndEvent:{singular:new Set([1]),descend:{1:"BaseEvent"}},ReasoningMessageChunkEvent:{singular:new Set([1]),descend:{1:"BaseEvent"}},ReasoningEndEvent:{singular:new Set([1]),descend:{1:"BaseEvent"}},ReasoningEncryptedValueEvent:{singular:new Set([1]),descend:{1:"BaseEvent"}},"google.protobuf.Struct":{singular:new Set,descend:{1:"google.protobuf.Struct.FieldsEntry"}},"google.protobuf.Struct.FieldsEntry":{singular:new Set([2]),descend:{2:"google.protobuf.Value"}},"google.protobuf.Value":{singular:new Set([5,6]),descend:{5:"google.protobuf.Struct",6:"google.protobuf.ListValue"},arms:new Set([1,2,3,4,5,6]),armWireTypes:{1:0,2:1,3:2,4:0,5:2,6:2}},"google.protobuf.ListValue":{singular:new Set,descend:{1:"google.protobuf.Value"}}},hb={1:"TextMessageStartEvent",2:"TextMessageContentEvent",3:"TextMessageEndEvent",4:"ToolCallStartEvent",5:"ToolCallArgsEvent",6:"ToolCallEndEvent",7:"StateSnapshotEvent",8:"StateDeltaEvent",9:"MessagesSnapshotEvent",10:"RawEvent",11:"CustomEvent",12:"RunStartedEvent",13:"RunFinishedEvent",14:"RunErrorEvent",15:"StepStartedEvent",16:"StepFinishedEvent",17:"TextMessageChunkEvent",18:"ToolCallChunkEvent",19:"SubagentStartedEvent",20:"SubagentFinishedEvent",21:"SubagentErrorEvent",22:"ToolCallResultEvent",23:"ActivitySnapshotEvent",24:"ActivityDeltaEvent",25:"ReasoningStartEvent",26:"ReasoningMessageStartEvent",27:"ReasoningMessageContentEvent",28:"ReasoningMessageEndEvent",29:"ReasoningMessageChunkEvent",30:"ReasoningEndEvent",31:"ReasoningEncryptedValueEvent"};function fr(t,e){let n=0,r=0;for(;;){if(e.offset>=t.length)throw new Error("Invalid event");let o=t[e.offset++];if(r<28?n+=(o&127)*2**r:r===28&&(n+=(o&15)*2**28),r+=7,(o&128)===0)return n}}function fb(t,e){let n={offset:0},r=0,o=0;for(;n.offset<t.length;){let i=fr(t,n),a=Math.floor(i/8),s=i%8;if(a===0)throw new Error("Invalid event");if(s===3){r+=1;continue}if(s===4){if(r-=1,r<0)throw new Error("Invalid event");continue}if(s===0)fr(t,n);else if(s===1)n.offset+=8;else if(s===2){let l=fr(t,n);if(n.offset+l>t.length)throw new Error("Invalid event");if(r===0){if(e.arms?.has(a)){if(o!==0&&o!==a)throw new Error("Invalid event");o=a}let c=e.descend[a];if(c!==void 0){let u=Hu[c];u!==void 0&&fb(t.subarray(n.offset,n.offset+l),u)}}n.offset+=l}else if(s===5)n.offset+=4;else throw new Error("Invalid event");if(n.offset>t.length)throw new Error("Invalid event")}if(r!==0)throw new Error("Invalid event")}function xT(t){let e=new Set,n={offset:0},r=0;for(;n.offset<t.length;){let o=fr(t,n),i=Math.floor(o/8),a=o%8;if(i===0)throw new Error("Invalid event");if(a===3){r+=1;continue}if(a===4){if(r-=1,r<0)throw new Error("Invalid event");continue}if(r===0&&En.has(i)){if(e.size>0&&!e.has(i))throw new Error("Invalid event");e.add(i)}if(a===0)fr(t,n);else if(a===1)n.offset+=8;else if(a===2){let s=fr(t,n);if(n.offset+s>t.length)throw new Error("Invalid event");if(r===0){let l=hb[i];if(l!==void 0){let c=Hu[l];c!==void 0&&fb(t.subarray(n.offset,n.offset+s),c)}}n.offset+=s}else if(a===5)n.offset+=4;else throw new Error("Invalid event");if(n.offset>t.length)throw new Error("Invalid event")}if(r!==0)throw new Error("Invalid event")}function lb(t){if(t.length===1)return t[0];let e=new Uint8Array(t.reduce((r,o)=>r+o.length,0)),n=0;for(let r of t)e.set(r,n),n+=r.length;return e}function mb(t,e){let n=new R(t),r=[],o=new Map,i,a=!1;for(;n.pos<n.len;){let l=n.pos,[c,u]=n.tag(),p=u===2?n.bytes():void 0;p===void 0&&n.skip(u,c);let v=e.arms?.has(c)&&u===(e.armWireTypes?.[c]??2);if(v){if(i!==void 0&&i!==c){let T=o.get(i);T!==void 0&&(r[T]=void 0),o.delete(i),a=!0}if(i=c,!e.singular.has(c)){let T=o.get(c);T!==void 0&&(r[T]=void 0,o.delete(c),a=!0)}}let m=e.descend[c]??e.google?.[c],h=p!==void 0&&(e.singular.has(c)||m!==void 0),y=o.get(c),k=y===void 0?void 0:r[y]?.payloads;if(h&&e.singular.has(c)&&k!==void 0){k.push(p),a=!0;continue}(h||v)&&o.set(c,r.length),r.push({number:c,raw:t.subarray(l,n.pos),...h&&{payloads:[p]},child:m===void 0?void 0:Hu[m]})}let s=[];for(let l of r)if(l!==void 0){if(l.payloads!==void 0){let c=lb(l.payloads),u=l.child===void 0?c:mb(c,l.child);if(l.payloads.length>1||u!==c){s.push(new F().uint32(l.number*8+2).bytes(u).finish()),a=!0;continue}}s.push(l.raw)}return a?lb(s):t}var Gu=class extends Error{constructor(t="Unknown event type"){super(t),this.name="AGUIUnknownEventTypeError"}};function gb(t,e,n,r){let o=0,i=0,a=0;for(;;){if(e.offset>=t.length||a>=n)return-1;let s=t[e.offset++];if(a+=1,a===n&&s>r)return-1;if(o+=(s&127)*2**i,i+=7,(s&128)===0)return o}}var es=(t,e)=>gb(t,e,5,15),vb=(t,e)=>gb(t,e,10,1);function ET(t){let e={offset:0},n=[];for(;e.offset<t.length;){let r=es(t,e);if(r<0)return!1;let o=Math.floor(r/8),i=r%8;if(o===0)return!1;if(i===3)n.push(o);else if(i===4){if(n.pop()!==o)return!1}else if(i===0){if(vb(t,e)<0)return!1}else if(i===1)e.offset+=8;else if(i===5)e.offset+=4;else if(i===2){let a=es(t,e);if(a<0||e.offset+a>t.length)return!1;e.offset+=a}else return!1;if(e.offset>t.length)return!1}return n.length===0}function _T(t){let e={offset:0},n=[],r=0;for(;e.offset<t.length;){let o=es(t,e);if(o<0)return!1;let i=Math.floor(o/8),a=o%8;if(i===0)return!1;let s=n.length===0;if(a===3){if(s&&En.has(i))return!1;n.push(i)}else if(a===4){if(n.pop()!==i)return!1}else if(a===0){if(s&&En.has(i)||vb(t,e)<0)return!1}else if(a===1){if(s&&En.has(i))return!1;e.offset+=8}else if(a===5){if(s&&En.has(i))return!1;e.offset+=4}else if(a===2){let l=es(t,e);if(l<0||e.offset+l>t.length)return!1;if(s){if(En.has(i)||!ET(t.subarray(e.offset,e.offset+l)))return!1;r+=1}e.offset+=l}else return!1;if(e.offset>t.length)return!1}return n.length===0&&r>0}function bb(t){xT(t);let e=cb.decode(mb(t,{singular:En,descend:hb})),n=Object.entries(e).filter(([,l])=>l!==void 0);if(n.length!==1)throw n.length===0&&_T(t)?new Gu:new Error("Invalid event");let r=n[0],o=gT[r[0]];if(o===void 0)throw new Error("Invalid event");let i=r[1],a=mr(i.baseEvent);if(!a)throw new Error("Invalid event");let s=fT[a.type];if(s!==o)throw new Error("Invalid event: envelope carries "+o+" but the base event declares "+String(s));if(i.type=o,i.timestamp=a.timestamp,i.rawEvent=a.rawEvent,a.metadata!==void 0&&(i.metadata=a.metadata),delete i.baseEvent,i.type==="MESSAGES_SNAPSHOT"&&Array.isArray(i.messages)&&(i.messages=i.messages.map(pb).filter(l=>l!==void 0)),i.type==="RUN_FINISHED"){let l=i,c=typeof l.outcome=="string"&&l.outcome!==""?l.outcome:void 0,u={};u.pendingToolCallIds=l.pendingToolCallIds,delete l.pendingToolCallIds,u.interrupts=l.interrupts,delete l.interrupts,delete l.outcome,c===void 0&&(me(u.pendingToolCallIds).length>0&&(l.pendingToolCallIds=u.pendingToolCallIds),me(u.interrupts).length>0&&(l.interrupts=u.interrupts)),c==="success"&&(l.outcome={type:"success",...me(u.pendingToolCallIds).length>0?{pendingToolCallIds:u.pendingToolCallIds}:{},...me(u.interrupts).length>0?{interrupts:u.interrupts}:{}}),c==="interrupt"&&(l.outcome={type:"interrupt",interrupts:me(u.interrupts),...me(u.pendingToolCallIds).length>0?{pendingToolCallIds:u.pendingToolCallIds}:{}}),c==="cancelled"&&(l.outcome={type:"cancelled",...me(u.pendingToolCallIds).length>0?{pendingToolCallIds:u.pendingToolCallIds}:{},...me(u.interrupts).length>0?{interrupts:u.interrupts}:{}}),c!==void 0&&!["success","interrupt","cancelled"].includes(c)&&(l.outcome={type:c,...me(u.pendingToolCallIds).length>0?{pendingToolCallIds:u.pendingToolCallIds}:{},...me(u.interrupts).length>0?{interrupts:u.interrupts}:{}})}if(i.type==="SUBAGENT_FINISHED"){let l=i,c=typeof l.outcome=="string"&&l.outcome!==""?l.outcome:void 0,u={};u.interruptIds=l.interruptIds,delete l.interruptIds,delete l.outcome,c===void 0&&me(u.interruptIds).length>0&&(l.interruptIds=u.interruptIds),c==="success"&&(l.outcome={type:"success",...me(u.interruptIds).length>0?{interruptIds:u.interruptIds}:{}}),c==="suspended"&&(l.outcome={type:"suspended",...me(u.interruptIds).length>0?{interruptIds:u.interruptIds}:{}}),c!==void 0&&!["success","suspended"].includes(c)&&(l.outcome={type:c,...me(u.interruptIds).length>0?{interruptIds:u.interruptIds}:{}})}if(i.type==="STATE_DELTA"&&Array.isArray(i.delta)&&(i.delta=i.delta.map(l=>{let c=lv[l.op];return l.op=typeof c=="string"&&c!=="UNRECOGNIZED"?c.toLowerCase():String(l.op),Object.keys(l).forEach(u=>{l[u]===void 0&&delete l[u]}),l})),i.type==="ACTIVITY_DELTA"&&Array.isArray(i.patch)&&(i.patch=i.patch.map(l=>{let c=lv[l.op];return l.op=typeof c=="string"&&c!=="UNRECOGNIZED"?c.toLowerCase():String(l.op),Object.keys(l).forEach(u=>{l[u]===void 0&&delete l[u]}),l})),i.type==="RUN_FINISHED"&&Array.isArray(i.usage)&&i.usage.length===0&&delete i.usage,i.type==="RUN_ERROR"&&Array.isArray(i.usage)&&i.usage.length===0&&delete i.usage,i.type==="TOOL_CALL_RESULT"){let l=i;if(l.content!==void 0&&me(l.contentParts).length>0)throw new Error("Invalid event: content carries both string content and content parts");l.content===void 0&&(l.content=me(l.contentParts).map(c=>{let u=db(c);return u===void 0&&ub(),u}).filter(c=>c!==void 0)),delete l.contentParts}return i.type==="RUN_STARTED"&&i.input!==void 0&&(i.input=wT(i.input)),Uu(i),i}var Fu="application/vnd.ag-ui.event+proto";var Bu=/^[v^~<>=]*?(\d+)(?:\.([x*]|\d+)(?:\.([x*]|\d+)(?:\.([x*]|\d+))?(?:-([\da-z\-]+(?:\.[\da-z\-]+)*))?(?:\+[\da-z\-]+(?:\.[\da-z\-]+)*)?)?)?$/i,Zu=t=>{if(typeof t!="string")throw new TypeError("Invalid argument expected string");let e=t.match(Bu);if(!e)throw new Error(`Invalid argument not valid semver ('${t}' received)`);return e.shift(),e},yb=t=>t==="*"||t==="x"||t==="X",wb=t=>{let e=parseInt(t,10);return isNaN(e)?t:e},TT=(t,e)=>typeof t!=typeof e?[String(t),String(e)]:[t,e],kT=(t,e)=>{if(yb(t)||yb(e))return 0;let[n,r]=TT(wb(t),wb(e));return n>r?1:n<r?-1:0},Vu=(t,e)=>{for(let n=0;n<Math.max(t.length,e.length);n++){let r=kT(t[n]||"0",e[n]||"0");if(r!==0)return r}return 0};var An=(t,e)=>{let n=Zu(t),r=Zu(e),o=n.pop(),i=r.pop(),a=Vu(n,r);return a!==0?a:o&&i?Vu(o.split("."),i.split(".")):o||i?o?-1:1:0};var ju=t=>typeof t=="string"&&/^[v\d]/.test(t)&&Bu.test(t);var xb="@ag-ui/client";function AT(t){if(!t.metadata||!Object.prototype.hasOwnProperty.call(t.metadata,xb))return;let e=t.metadata?.[xb];if(!e||typeof e!="object"||Array.isArray(e))return[];if(!Object.prototype.hasOwnProperty.call(e,"authoritativeActivityTypes"))return;let n=e.authoritativeActivityTypes;return n===null?null:Array.isArray(n)&&n.every(r=>typeof r=="string")?n:[]}var Q=t=>{if(typeof structuredClone=="function")return structuredClone(t);try{return JSON.parse(JSON.stringify(t))}catch{return Array.isArray(t)?[...t]:{...t}}};function ke(){return Bt()}function IT(t){return t instanceof TypeError?/read[- ]?only|not extensible|cannot add property|cannot delete property|can't be deleted|unable to delete property|object is frozen|is not writable/i.test(t.message):!1}function od(t){if(Object.freeze(t),typeof t=="object"&&t)for(let e of Object.values(t))typeof e=="object"&&e&&!Object.isFrozen(e)&&od(e);return t}var Eb=512*1024;function _b(t,e,n){let r=0,o=[t,e],i=new WeakSet;for(;o.length>0;){let a=o.pop();if(typeof a=="string"){if(r+=a.length,r>n)return!0}else if(typeof a=="object"&&a){if(i.has(a))continue;if(i.add(a),Array.isArray(a))for(let s=0;s<a.length;s++)o.push(a[s]);else{let s=Object.keys(a);for(let l=0;l<s.length;l++){let c=s[l];if(r+=c.length,r>n)return!0;o.push(a[c])}}}}return!1}async function se(t,e,n,r){let o=typeof process<"u"&&process.env!==void 0,i=o&&!!process.env.VITEST_WORKER_ID,a=o&&!!process.env.VITEST_WORKER_ID,s=a&&!_b(e,n,Eb),l=s?Q(e):e,c=s?Q(n):n,u=!1,p=!1,v;for(let m of t)try{s&&(od(l),od(c));let h=await r(m,l,c);if(h===void 0)continue;let y=!1;if(h.messages!==void 0&&h.messages!==l&&(l=Q(h.messages),u=!0,y=!0),h.state!==void 0&&h.state!==c&&(c=Q(h.state),p=!0,y=!0),s&&y&&_b(l,c,Eb)&&(s=!1),v=h.stopPropagation,v===!0)break}catch(h){if(i&&h instanceof TypeError)throw h;s&&a&&IT(h)?console.error("AG-UI: Subscriber attempted to mutate frozen inputs in-place. Return mutations via AgentStateMutation instead of mutating directly.",h):console.error("Subscriber error:",h);continue}return{...u?{messages:Object.isFrozen(l)?Q(l):l}:{},...p?{state:Object.isFrozen(c)?Q(c):c}:{},...v===void 0?{}:{stopPropagation:v}}}function rs(t){if(!t)return{enabled:!1,events:!1,lifecycle:!1,verbose:!1};if(t===!0)return{enabled:!0,events:!0,lifecycle:!0,verbose:!0};let e=t.events??!0,n=t.lifecycle??!0,r=t.verbose??!1;return{enabled:e||n,events:e,lifecycle:n,verbose:r}}function Cn(t){if(t instanceof id)return t;if(t===!0)return new id(rs(!0))}var id=class{constructor(t){this.config=t}event(t,e,n,r){this.config.events&&(this.config.verbose?console.debug(`[${t}] ${e}`,typeof n=="string"?n:JSON.stringify(n)):console.debug(`[${t}] ${e}`,r??n))}lifecycle(t,e,n){this.config.lifecycle&&(n?console.debug(`[${t}] ${e}`,n):console.debug(`[${t}] ${e}`))}get eventsEnabled(){return this.config.events}get lifecycleEnabled(){return this.config.lifecycle}get enabled(){return this.config.enabled}};function Wu(t){return t.enabled?new id(t):void 0}function RT(t,e,n){if(e){let o=t.find(a=>a.id===e);if(o?.role==="assistant")return o;o&&console.warn(`TOOL_CALL_START: parentMessageId '${e}' matches a '${o.role}' message, not assistant \u2014 falling back to toolCallId`);let i={id:o?n:e,role:"assistant",toolCalls:[]};return t.push(i),i}let r={id:n,role:"assistant",toolCalls:[]};return t.push(r),r}function tt(t,e){return!t||e.metadata===void 0?!1:(t.metadata=vh(t.metadata,Q(e.metadata)),!0)}var In=t=>typeof t=="object"&&t?t.role:void 0;function Hb(t){if(In(t)!=="assistant")return[];let e=t.toolCalls;if(!Array.isArray(e))return[];let n=[];for(let r of e){if(typeof r!="object"||!r)continue;let o=r.id;typeof o=="string"&&n.push(o)}return n}function ad(t){let e=new Map,n=new Map,r=(h,y)=>{y.answered=!0,n.set(h,n.get(h)-1)},o=new Map,i=new Map,a=(h,y,k)=>{let T=h.get(y);T?T.push(k):h.set(y,[k])},s=-1;for(let h=0;h<t.length;h++){let y=t[h];if(typeof y!="object"||!y)continue;let k=In(y);if(k==="tool"){let T=y.toolCallId;if(typeof T!="string")continue;let E=e.get(T);if(!E){a(i,T,h);continue}let H;for(let _=E.length-1;_>=0&&E[_].issuer===s;_--)E[_].answered||(H=E[_]);if(H){r(T,H);continue}n.get(T)>0&&a(o,T,h)}else if(k!=="activity"&&k!=="reasoning"){s=h;for(let T of Hb(y))a(e,T,{issuer:h,answered:!1}),n.set(T,(n.get(T)??0)+1)}}let l=new Map,c=[],u=(h,y,k)=>{r(h,k),a(l,k.issuer,y),c[y]=!0};for(let[h,y]of o){let k=e.get(h),T=k.length-1;for(let E=y.length-1;E>=0;E--){let H=y[E];for(;T>=0&&(k[T].answered||k[T].issuer>=H);)T--;if(T<0)break;u(h,H,k[T])}}for(let[h,y]of i){let k=e.get(h);k?.length!==1||k[0].answered||u(h,y[0],k[0])}if(l.size===0)return t;for(let h of l.values())h.sort((y,k)=>y-k);let p=[],v,m=()=>{if(v){let h=p.length;for(let k=p.length-1;k>=0;k--){let T=p[k],E=In(T);if(typeof T=="object"&&T&&E!=="activity"&&E!=="reasoning")break;E==="reasoning"&&(h=k)}let y=p.splice(h);for(let k of v)p.push(t[k]);for(let k of y)p.push(k)}v=void 0};for(let h=0;h<t.length;h++){if(c[h])continue;let y=t[h],k=In(y);typeof y=="object"&&y&&k!=="tool"&&k!=="activity"&&k!=="reasoning"&&m(),p.push(y),v=l.get(h)??v}return m(),p}function CT(t){let e={...t};t.role==="activity"&&(e.content=Q(t.content));let n=t.toolCalls;return Array.isArray(n)&&(e.toolCalls=n.map(r=>r?.function?{...r,function:{...r.function}}:{...r})),e}function NT(t,e,n){let r=Object.keys(t);if(r.length!==Object.keys(e).length)return!1;for(let o of r){let i=o==="content"?n:t[o],a=e[o];if(o==="toolCalls"&&Array.isArray(i)&&Array.isArray(a)){if(!OT(i,a))return!1}else if(i!==a)return!1}return!0}function OT(t,e){if(t.length!==e.length)return!1;for(let n=0;n<t.length;n+=1){let r=t[n],o=e[n],i=Object.keys(r);if(i.length!==Object.keys(o).length)return!1;for(let a of i)if(a==="function"&&r.function&&o.function){let s=r.function,l=o.function,c=Object.keys(s);if(c.length!==Object.keys(l).length)return!1;for(let u of c)if(s[u]!==l[u])return!1}else if(r[a]!==o[a])return!1}return!0}var Gb=(t,e,n,r,o)=>{let i=Cn(o),a=Q(n.messages),s=Q(t.state),l={},c=new Set,u=new Set,p=[],v=new Set,m=E=>{let H=E.outcome?.type==="success"?E.outcome.pendingToolCallIds:void 0;return H!==void 0&&H.length>0?[...H]:p.filter(_=>!v.has(_))},h=E=>{E.messages!==void 0&&(a=E.messages,l.messages=E.messages),E.state!==void 0&&(s=E.state,l.state=E.state)},y=new WeakMap,k=E=>E.map(H=>{let _=y.get(H);if(_!==void 0&&NT(_.copy,H,_.content))return _.copy;let f=CT(H);return y.set(H,{copy:f,content:H.content}),f}),T=()=>{let E={};return l.messages!==void 0&&(E.messages=k(l.messages)),l.state!==void 0&&(E.state=Q(l.state)),l={},E.messages!==void 0||E.state!==void 0?de(E):fn};return e.pipe(Di(async E=>{let H=await se(r,a,s,(_,f,w)=>_.onEvent?.({event:E,agent:n,input:t,messages:f,state:w}));if(h(H),H.stopPropagation===!0?i?.event("APPLY","Event dropped:",E,{type:E.type,reason:"stopPropagation by subscriber"}):i?.event("APPLY","Event applied:",E,{type:E.type,subscribers:r.length}),H.stopPropagation===!0)return T();switch(E.type){case b.TEXT_MESSAGE_START:{let _=await se(r,a,s,(f,w,g)=>f.onTextMessageStartEvent?.({event:E,messages:w,state:g,agent:n,input:t}));if(h(_),_.stopPropagation!==!0){let{messageId:f,role:w="assistant",name:g,subagentRunId:S}=E,M=a.find($=>$.id===f);if(M?.role==="activity")return console.warn(`TEXT_MESSAGE_START: Message '${f}' is an activity message \u2014 message ids must be unique across activity and text messages`),T();let L=M;if(!L){let $={id:f,role:w,content:"",...g!==void 0&&{name:g},...S!=null&&{subagentRunId:S}};a.push($),L=$}let U=tt(L,E);(!M||U)&&h({messages:a})}return T()}case b.TEXT_MESSAGE_CONTENT:{let{messageId:_,delta:f}=E,w=a.find(S=>S.id===_);if(!w)return console.warn(`TEXT_MESSAGE_CONTENT: No message found with ID '${_}'`),T();if(w.role==="activity")return console.warn(`TEXT_MESSAGE_CONTENT: Message '${_}' is an activity message \u2014 message ids must be unique across activity and text messages`),T();let g=await se(r,a,s,(S,M,L)=>S.onTextMessageContentEvent?.({event:E,messages:M,state:L,agent:n,input:t,textMessageBuffer:typeof w.content=="string"?w.content:""}));return h(g),g.stopPropagation!==!0&&(w.content=`${typeof w.content=="string"?w.content:""}${f}`,tt(w,E),h({messages:a})),T()}case b.TEXT_MESSAGE_END:{let{messageId:_}=E,f=a.find(g=>g.id===_);if(!f)return console.warn(`TEXT_MESSAGE_END: No message found with ID '${_}'`),T();if(f.role==="activity")return console.warn(`TEXT_MESSAGE_END: Message '${_}' is an activity message \u2014 message ids must be unique across activity and text messages`),T();let w=await se(r,a,s,(g,S,M)=>g.onTextMessageEndEvent?.({event:E,messages:S,state:M,agent:n,input:t,textMessageBuffer:typeof f.content=="string"?f.content:""}));return h(w),w.stopPropagation!==!0&&tt(f,E)&&h({messages:a}),await Promise.all(r.map(g=>g.onNewMessage?.({message:f,messages:a,state:s,agent:n,input:t}))),T()}case b.TOOL_CALL_START:{let _=await se(r,a,s,(f,w,g)=>f.onToolCallStartEvent?.({event:E,messages:w,state:g,agent:n,input:t}));if(h(_),_.stopPropagation!==!0){let{toolCallId:f,toolCallName:w,parentMessageId:g,subagentRunId:S}=E;p.includes(f)||p.push(f);let M=a.find(fe=>fe.toolCalls?.some(ct=>ct.id===f))?.toolCalls?.find(fe=>fe.id===f);if(c.has(f)||(c.add(f),M&&u.add(f)),M){let fe=M.function.name!==w;return fe&&(console.warn(`TOOL_CALL_START: tool call '${f}' already exists with name '${M.function.name}' \u2014 updating it to '${w}'`),M.function.name=w),(tt(M,E)||fe)&&h({messages:a}),T()}let L=new Set(a.map(fe=>fe.id)),U=RT(a,g,f);!L.has(U.id)&&S!=null&&U.subagentRunId===void 0&&(U.subagentRunId=S),U.toolCalls??=[];let $={id:f,type:"function",function:{name:w,arguments:""}};U.toolCalls.push($),tt($,E),h({messages:a})}return T()}case b.TOOL_CALL_ARGS:{let{toolCallId:_,delta:f}=E,w=a.find(M=>M.toolCalls?.some(L=>L.id===_));if(!w)return console.warn(`TOOL_CALL_ARGS: No message found containing tool call with ID '${_}'`),T();let g=w.toolCalls?.find(M=>M.id===_);if(!g)return console.warn(`TOOL_CALL_ARGS: No tool call found with ID '${_}'`),T();let S=await se(r,a,s,(M,L,U)=>{let $=u.has(_)?"":g.function.arguments,fe=g.function.name,ct={};try{ct=Hi($)}catch{}return M.onToolCallArgsEvent?.({event:E,messages:L,state:U,agent:n,input:t,toolCallBuffer:$,toolCallName:fe,partialToolCallArgs:ct})});return h(S),S.stopPropagation!==!0&&(u.delete(_)?g.function.arguments=f:g.function.arguments+=f,tt(g,E),h({messages:a})),T()}case b.TOOL_CALL_END:{let{toolCallId:_}=E,f=a.find(S=>S.toolCalls?.some(M=>M.id===_));if(!f)return console.warn(`TOOL_CALL_END: No message found containing tool call with ID '${_}'`),T();let w=f.toolCalls?.find(S=>S.id===_);if(!w)return console.warn(`TOOL_CALL_END: No tool call found with ID '${_}'`),T();let g=await se(r,a,s,(S,M,L)=>{let U=w.function.arguments,$=w.function.name,fe={};try{fe=JSON.parse(U)}catch{}return S.onToolCallEndEvent?.({event:E,messages:M,state:L,agent:n,input:t,toolCallName:$,toolCallArgs:fe})});return h(g),g.stopPropagation!==!0&&(c.delete(_),u.delete(_)),g.stopPropagation!==!0&&tt(w,E)&&h({messages:a}),await Promise.all(r.map(S=>S.onNewToolCall?.({toolCall:w,messages:a,state:s,agent:n,input:t}))),T()}case b.TOOL_CALL_RESULT:{let _=await se(r,a,s,(f,w,g)=>f.onToolCallResultEvent?.({event:E,messages:w,state:g,agent:n,input:t}));if(h(_),_.stopPropagation!==!0){let{messageId:f,toolCallId:w,content:g,role:S,subagentRunId:M}=E;v.add(w);let L=a.findIndex($=>$.id===f&&$.role==="tool"&&$.toolCallId===w),U={...L===-1?{}:a[L],id:f,toolCallId:w,role:S||"tool",content:g,...M!=null&&{subagentRunId:M}};if(M??delete U.subagentRunId,tt(U,E),L!==-1)a[L]=U;else{let $=-1,fe=-1,ct=!1;for(let Ce=a.length-1;Ce>=0;Ce--){let Un=a[Ce];if(In(Un)==="tool"&&Un.toolCallId===w)ct=!0;else if(Hb(Un).includes(w)){if(fe===-1&&(fe=Ce),!ct){$=Ce;break}ct=!1}}if($===-1&&($=fe),$===-1)a.push(U);else{let Ce=$+1;for(;Ce<a.length&&(typeof a[Ce]!="object"||In(a[Ce])==="tool"||In(a[Ce])==="activity");)Ce++;a.splice(Ce,0,U)}await Promise.all(r.map(Ce=>Ce.onNewMessage?.({message:U,messages:a,state:s,agent:n,input:t})))}h({messages:a})}return T()}case b.STATE_SNAPSHOT:{let _=await se(r,a,s,(f,w,g)=>f.onStateSnapshotEvent?.({event:E,messages:w,state:g,agent:n,input:t}));if(h(_),_.stopPropagation!==!0){let{snapshot:f}=E;s=Q(f),h({state:s})}return T()}case b.STATE_DELTA:{let _=await se(r,a,s,(f,w,g)=>f.onStateDeltaEvent?.({event:E,messages:w,state:g,agent:n,input:t}));if(h(_),_.stopPropagation!==!0){let{delta:f}=E;try{s=fi.applyPatch(s,Q(f),!0,!1).newDocument,h({state:s})}catch(w){let g=w instanceof Error?w.message:String(w);console.warn(`Failed to apply state patch:
Current state: ${JSON.stringify(s,null,2)}
Patch operations: ${JSON.stringify(f,null,2)}
Error: ${g}`)}}return T()}case b.MESSAGES_SNAPSHOT:{let _=await se(r,a,s,(f,w,g)=>f.onMessagesSnapshotEvent?.({event:E,messages:w,state:g,agent:n,input:t}));if(h(_),_.stopPropagation!==!0){let f=Q(E.messages).map($=>{if($.subagentRunId!==null)return $;let fe={...$};return delete fe.subagentRunId,fe}),w=new Map(f.map($=>[$.id,$])),g=AT(E),S=f.some($=>$.role==="activity"),M=f.some($=>$.role==="reasoning"),L=$=>$.role==="activity"&&(g?!g.includes($.activityType):g!==null&&!S)||$.role==="reasoning"&&!M;a=a.filter($=>w.has($.id)||L($)).map($=>w.get($.id)??$);let U=new Set(a.map($=>$.id));for(let $ of f)U.has($.id)||a.push($);a=ad(a),h({messages:a})}return T()}case b.ACTIVITY_SNAPSHOT:{let _=E,f=a.findIndex(L=>L.id===_.messageId),w=f>=0?a[f]:void 0,g=w?.role==="activity"?w:void 0,S=_.replace??!0,M=await se(r,a,s,(L,U,$)=>L.onActivitySnapshotEvent?.({event:_,messages:U,state:$,agent:n,input:t,activityMessage:g,existingMessage:w}));if(h(M),M.stopPropagation!==!0){let L={id:_.messageId,role:"activity",activityType:_.activityType,content:Q(_.content),..._.subagentRunId!=null&&{subagentRunId:_.subagentRunId}},U,$;f===-1?(a.push(L),U=L,$=L):g?(S&&(a[f]={...g,activityType:_.activityType,content:Q(_.content),subagentRunId:_.subagentRunId},_.subagentRunId??delete a[f].subagentRunId),$=a[f]):S&&(a[f]=L,U=L,$=L),tt($,_),h({messages:a}),U&&await Promise.all(r.map(fe=>fe.onNewMessage?.({message:U,messages:a,state:s,agent:n,input:t})))}return T()}case b.ACTIVITY_DELTA:{let _=E,f=a.findIndex(M=>M.id===_.messageId);if(f===-1)return T();let w=a[f];if(w.role!=="activity")return console.warn(`ACTIVITY_DELTA: Message '${_.messageId}' is not an activity message`),T();let g=w,S=await se(r,a,s,(M,L,U)=>M.onActivityDeltaEvent?.({event:_,messages:L,state:U,agent:n,input:t,activityMessage:g}));if(h(S),S.stopPropagation!==!0)try{tt(g,_)&&h({messages:a});let M=Q(g.content??{}),L=fi.applyPatch(M,_.patch??[],!0,!1).newDocument;a[f]={...g,content:Q(L),activityType:_.activityType},h({messages:a})}catch(M){let L=M instanceof Error?M.message:String(M);console.warn(`Failed to apply activity patch for '${_.messageId}': ${L}`)}return T()}case b.RAW:return h(await se(r,a,s,(_,f,w)=>_.onRawEvent?.({event:E,messages:f,state:w,agent:n,input:t}))),T();case b.CUSTOM:return h(await se(r,a,s,(_,f,w)=>_.onCustomEvent?.({event:E,messages:f,state:w,agent:n,input:t}))),T();case b.RUN_STARTED:{let _=await se(r,a,s,(f,w,g)=>f.onRunStartedEvent?.({event:E,messages:w,state:g,agent:n,input:t}));if(h(_),p=[],v=new Set,_.stopPropagation!==!0){c.clear(),u.clear();let f=E;if(f.input?.messages){for(let w of f.input.messages){let g=w;if(w.subagentRunId===null){let S={...w};delete S.subagentRunId,g=S}a.find(S=>S.id===g.id)||a.push(g)}h({messages:a})}}return T()}case b.RUN_FINISHED:{let _=E,f=_.outcome?.type==="interrupt"?{event:_,outcome:"interrupt",interrupts:_.outcome.interrupts}:_.outcome?.type==="cancelled"?{event:_,outcome:"cancelled"}:{event:_,outcome:"success",result:_.result,pendingToolCallIds:m(_)},w=await se(r,a,s,(g,S,M)=>g.onRunFinishedEvent?.({...f,messages:S,state:M,agent:n,input:t}));return h(w),w.stopPropagation!==!0&&(n.pendingInterrupts=f.outcome==="interrupt"?f.interrupts.map(g=>{if(g.subagentRunId!==null)return g;let S={...g};return delete S.subagentRunId,S}):[]),T()}case b.RUN_ERROR:return h(await se(r,a,s,(_,f,w)=>_.onRunErrorEvent?.({event:E,messages:f,state:w,agent:n,input:t}))),T();case b.STEP_STARTED:return h(await se(r,a,s,(_,f,w)=>_.onStepStartedEvent?.({event:E,messages:f,state:w,agent:n,input:t}))),T();case b.STEP_FINISHED:return h(await se(r,a,s,(_,f,w)=>_.onStepFinishedEvent?.({event:E,messages:f,state:w,agent:n,input:t}))),T();case b.TEXT_MESSAGE_CHUNK:throw Error("TEXT_MESSAGE_CHUNK must be transformed before being applied");case b.TOOL_CALL_CHUNK:throw Error("TOOL_CALL_CHUNK must be transformed before being applied");case b.REASONING_START:return h(await se(r,a,s,(_,f,w)=>_.onReasoningStartEvent?.({event:E,messages:f,state:w,agent:n,input:t}))),T();case b.REASONING_MESSAGE_START:{let _=await se(r,a,s,(f,w,g)=>f.onReasoningMessageStartEvent?.({event:E,messages:w,state:g,agent:n,input:t}));if(h(_),_.stopPropagation!==!0){let{messageId:f,subagentRunId:w}=E,g=a.find(L=>L.id===f);if(g?.role==="activity")return console.warn(`REASONING_MESSAGE_START: Message '${f}' is an activity message \u2014 message ids must be unique across activity and reasoning messages`),T();let S=g;if(!S){let L={id:f,role:"reasoning",content:"",...w!=null&&{subagentRunId:w}};a.push(L),S=L}let M=tt(S,E);(!g||M)&&h({messages:a})}return T()}case b.REASONING_MESSAGE_CONTENT:{let{messageId:_,delta:f}=E,w=a.find(S=>S.id===_);if(!w)return console.warn(`REASONING_MESSAGE_CONTENT: No message found with ID '${_}'`),T();if(w.role==="activity")return console.warn(`REASONING_MESSAGE_CONTENT: Message '${_}' is an activity message \u2014 message ids must be unique across activity and reasoning messages`),T();let g=await se(r,a,s,(S,M,L)=>S.onReasoningMessageContentEvent?.({event:E,messages:M,state:L,agent:n,input:t,reasoningMessageBuffer:typeof w.content=="string"?w.content:""}));return h(g),g.stopPropagation!==!0&&(w.content=`${typeof w.content=="string"?w.content:""}${f}`,tt(w,E),h({messages:a})),T()}case b.REASONING_MESSAGE_END:{let{messageId:_}=E,f=a.find(g=>g.id===_);if(!f)return console.warn(`REASONING_MESSAGE_END: No message found with ID '${_}'`),T();if(f.role==="activity")return console.warn(`REASONING_MESSAGE_END: Message '${_}' is an activity message \u2014 message ids must be unique across activity and reasoning messages`),T();let w=await se(r,a,s,(g,S,M)=>g.onReasoningMessageEndEvent?.({event:E,messages:S,state:M,agent:n,input:t,reasoningMessageBuffer:typeof f.content=="string"?f.content:""}));return h(w),w.stopPropagation!==!0&&tt(f,E)&&h({messages:a}),await Promise.all(r.map(g=>g.onNewMessage?.({message:f,messages:a,state:s,agent:n,input:t}))),T()}case b.REASONING_MESSAGE_CHUNK:throw Error("REASONING_MESSAGE_CHUNK must be transformed before being applied");case b.REASONING_END:return h(await se(r,a,s,(_,f,w)=>_.onReasoningEndEvent?.({event:E,messages:f,state:w,agent:n,input:t}))),T();case b.REASONING_ENCRYPTED_VALUE:{let{subtype:_,entityId:f,encryptedValue:w}=E,g=await se(r,a,s,(S,M,L)=>S.onReasoningEncryptedValueEvent?.({event:E,messages:M,state:L,agent:n,input:t}));if(h(g),g.stopPropagation!==!0){let S=!1;if(_==="tool-call"){for(let M of a)if(M.role==="assistant"&&M.toolCalls){let L=M.toolCalls.find(U=>U.id===f);if(L){L.encryptedValue=w,S=!0;break}}}else{let M=a.find(L=>L.id===f);M?.role!=="activity"&&M&&(M.encryptedValue=w,S=!0)}S&&(l.messages=a)}return T()}case b.SUBAGENT_STARTED:return h(await se(r,a,s,(_,f,w)=>_.onSubagentStartedEvent?.({event:E,messages:f,state:w,agent:n,input:t}))),T();case b.SUBAGENT_FINISHED:return h(await se(r,a,s,(_,f,w)=>_.onSubagentFinishedEvent?.({event:E,messages:f,state:w,agent:n,input:t}))),T();case b.SUBAGENT_ERROR:return h(await se(r,a,s,(_,f,w)=>_.onSubagentErrorEvent?.({event:E,messages:f,state:w,agent:n,input:t}))),T()}return E.type,T()}),Zr(),r.length>0?Nc({}):E=>E)};function ss(t,e){typeof process<"u"&&process.env!==void 0&&process.env.SUPPRESS_TRANSFORMATION_WARNINGS||console.warn(`[ag-ui][compat] Converting deprecated ${t} to ${e}. The old shape leaves the protocol after its shim window \u2014 see the repo-root DEPRECATIONS.md. Set SUPPRESS_TRANSFORMATION_WARNINGS=true to silence.`)}var qu=t=>e=>{let n=Cn(t),r=new Set,o=new Set,i=new Set,a=new Set,s={message:new Map,toolCall:new Map,activity:new Map,reasoning:new Map},l=!1,c=!1,u=!1,p=new Map,v=f=>{let w=p.get(f);return w||(w=new Map,p.set(f,w)),w},m=()=>{for(let f of p.values())if(f.size>0)return!0;return!1},h=new Map,y=new Set,k=!1,T=!1,E=()=>{T=!1,r.clear(),o.clear(),i.clear(),a.clear(),s.message.clear(),s.toolCall.clear(),s.activity.clear(),s.reasoning.clear(),p.clear(),h.clear(),y.clear(),l=!1,c=!1,k=!0},H=(f,w)=>{let g=f??[];if(Array.isArray(g))for(let S of g){if(!S||typeof S.id!="string")continue;if(S.subagentRunId===null)return new Y(`Cannot send a message (id '${S.id}') with 'subagentRunId: null'. The field is optional \u2014 omit it entirely.`);let M=S.role==="reasoning"?s.reasoning:S.role==="activity"?s.activity:s.message;(w||!M.has(S.id))&&M.set(S.id,{subagentRunId:S.subagentRunId});for(let L of S.toolCalls??[])L&&typeof L.id=="string"&&(w||!s.toolCall.has(L.id))&&s.toolCall.set(L.id,{subagentRunId:S.subagentRunId??void 0})}},_=(f,w,g,S,M)=>{if(w!==void 0&&g&&g.subagentRunId!==w)return new Y(`Cannot send '${f}': subagentRunId '${w}' does not match the ${S} '${M}' opener's subagent '${g.subagentRunId??"(the parent agent)"}'.`)};return e.pipe(Ye(f=>{let w=f.type;if(n?.event("VERIFY","Event:",f,{type:f.type}),c&&w!==b.RUN_STARTED)return Z(()=>new Y(`Cannot send event type '${w}': The run has already errored with 'RUN_ERROR'. No further events can be sent.`));if(l&&w!==b.RUN_ERROR&&w!==b.RUN_STARTED)return Z(()=>new Y(`Cannot send event type '${w}': The run has already finished with 'RUN_FINISHED'. Start a new run with 'RUN_STARTED'.`));if(u){if(w===b.RUN_STARTED){if(k&&!l&&!c)return Z(()=>new Y("Cannot send 'RUN_STARTED' while a run is still active. The previous run must be finished with 'RUN_FINISHED' before starting a new run."));(l||c)&&E()}}else if(u=!0,w!==b.RUN_STARTED&&w!==b.RUN_ERROR)return Z(()=>new Y("First event must be 'RUN_STARTED'"));if(f.subagentRunId===null){T||(T=!0,ss("subagentRunId: null","an absent field"));let{subagentRunId:g,...S}=f;f=S}if(w===b.SUBAGENT_STARTED||w===b.SUBAGENT_FINISHED||w===b.SUBAGENT_ERROR){let g=w===b.SUBAGENT_STARTED?["description","parentSubagentRunId","parentToolCallId","parentMessageId"]:w===b.SUBAGENT_FINISHED?["outcome"]:["code"];for(let M of g)if(f[M]===null)return Z(()=>new Y(`Cannot send '${w}' with '${M}: null'. The field is optional \u2014 omit it entirely.`));let S=f.outcome;if(S!=null&&S.type!=="success"&&S.type!=="suspended")return Z(()=>new Y(`Cannot send '${w}' with outcome type '${String(S.type)}'. The outcome is either { type: "success" } or { type: "suspended" }.`));if(S&&S.interruptIds===null)return Z(()=>new Y(`Cannot send '${w}' with 'outcome.interruptIds: null'. The field is optional \u2014 omit it entirely.`));if(S&&Array.isArray(S.interruptIds)&&S.interruptIds.some(M=>typeof M!="string"))return Z(()=>new Y(`Cannot send '${w}' with a non-string entry in 'outcome.interruptIds'. Interrupt ids are strings.`))}if(w===b.RUN_FINISHED){let g=f.outcome;if(g?.type==="interrupt"&&Array.isArray(g.interrupts)){for(let S of g.interrupts)if(S&&S.subagentRunId===null)return Z(()=>new Y(`Cannot send 'RUN_FINISHED' with an interrupt (id '${S.id}') carrying 'subagentRunId: null'. The field is optional \u2014 omit it entirely.`))}}switch(w){case b.TEXT_MESSAGE_START:{let g=f.messageId;if(r.has(g))return Z(()=>new Y(`Cannot send 'TEXT_MESSAGE_START' event: A text message with ID '${g}' is already in progress. Complete it with 'TEXT_MESSAGE_END' first.`));let S=s.message.get(g);if(S){let M=_(w,f.subagentRunId,S,"message",g);if(M)return Z(()=>M)}return r.add(g),S||s.message.set(g,{subagentRunId:f.subagentRunId}),de(f)}case b.TEXT_MESSAGE_CONTENT:{let g=f.messageId;if(!r.has(g))return Z(()=>new Y(`Cannot send 'TEXT_MESSAGE_CONTENT' event: No active text message found with ID '${g}'. Start a text message with 'TEXT_MESSAGE_START' first.`));let S=_(w,f.subagentRunId,s.message.get(g),"message",g);return S?Z(()=>S):de(f)}case b.TEXT_MESSAGE_END:{let g=f.messageId;if(!r.has(g))return Z(()=>new Y(`Cannot send 'TEXT_MESSAGE_END' event: No active text message found with ID '${g}'. A 'TEXT_MESSAGE_START' event must be sent first.`));let S=_(w,f.subagentRunId,s.message.get(g),"message",g);return S?Z(()=>S):(r.delete(g),de(f))}case b.TOOL_CALL_START:{let g=f.toolCallId;if(o.has(g))return Z(()=>new Y(`Cannot send 'TOOL_CALL_START' event: A tool call with ID '${g}' is already in progress. Complete it with 'TOOL_CALL_END' first.`));let S=f.parentMessageId,M=f.subagentRunId,L;if(S!==void 0){let $=s.message.get(S);if($){if(M!==void 0&&M!==$.subagentRunId)return Z(()=>new Y(`Cannot send 'TOOL_CALL_START': subagentRunId '${M}' does not match its parent message '${S}' owner '${$.subagentRunId??"(the parent agent)"}'. A tool call belongs to the message that carries it.`));L=$}}let U=s.toolCall.get(g);if(U){let $=_(w,M,U,"tool call",g);if($)return Z(()=>$);if(M===void 0&&L&&L.subagentRunId!==U.subagentRunId)return Z(()=>new Y(`Cannot send 'TOOL_CALL_START': tool call '${g}' is owned by '${U.subagentRunId??"(the parent agent)"}' but its parent message '${S}' is owned by '${L.subagentRunId??"(the parent agent)"}'. A tool call belongs to the message that carries it.`))}return o.add(g),U||s.toolCall.set(g,M===void 0?L??{subagentRunId:void 0}:{subagentRunId:M}),de(f)}case b.TOOL_CALL_ARGS:{let g=f.toolCallId;if(!o.has(g))return Z(()=>new Y(`Cannot send 'TOOL_CALL_ARGS' event: No active tool call found with ID '${g}'. Start a tool call with 'TOOL_CALL_START' first.`));let S=_(w,f.subagentRunId,s.toolCall.get(g),"tool call",g);return S?Z(()=>S):de(f)}case b.TOOL_CALL_END:{let g=f.toolCallId;if(!o.has(g))return Z(()=>new Y(`Cannot send 'TOOL_CALL_END' event: No active tool call found with ID '${g}'. A 'TOOL_CALL_START' event must be sent first.`));let S=_(w,f.subagentRunId,s.toolCall.get(g),"tool call",g);return S?Z(()=>S):(o.delete(g),de(f))}case b.STEP_STARTED:{let g=f.stepName,S=f.subagentRunId;return v(S).has(g)?Z(()=>new Y(`Step "${g}" is already active for 'STEP_STARTED'${S===void 0?"":` in subagent '${S}'`}`)):(v(S).set(g,!0),de(f))}case b.STEP_FINISHED:{let g=f.stepName,S=f.subagentRunId;if(!v(S).has(g)){let M,L=!1;for(let[U,$]of p)if(U!==S&&$.has(g)){M=U,L=!0;break}return Z(L?()=>new Y(`Cannot send 'STEP_FINISHED' for step "${g}" attributed to ${S===void 0?"the parent agent":`subagent '${S}'`}: that step is open under ${M===void 0?"the parent agent":`subagent '${M}'`}. A step must be finished by whoever started it.`):()=>new Y(`Cannot send 'STEP_FINISHED' for step "${g}" that was not started`))}return v(S).delete(g),de(f)}case b.ACTIVITY_SNAPSHOT:{let g=f.messageId;return(!s.activity.has(g)||f.replace!==!1)&&s.activity.set(g,{subagentRunId:f.subagentRunId}),de(f)}case b.TOOL_CALL_RESULT:{let g=f.messageId;return typeof g=="string"&&s.message.set(g,{subagentRunId:f.subagentRunId}),de(f)}case b.REASONING_START:case b.REASONING_MESSAGE_START:{let g=f.messageId,S=w===b.REASONING_START,M=S?i:a;if(M.has(g))return Z(()=>new Y(S?`Cannot send 'REASONING_START' event: A reasoning span with ID '${g}' is already in progress. Complete it with 'REASONING_END' first.`:`Cannot send 'REASONING_MESSAGE_START' event: A reasoning message with ID '${g}' is already in progress. Complete it with 'REASONING_MESSAGE_END' first.`));let L=s.reasoning.get(g);if(L){let U=_(w,f.subagentRunId,L,"reasoning message",g);if(U)return Z(()=>U)}return M.add(g),L||s.reasoning.set(g,{subagentRunId:f.subagentRunId}),de(f)}case b.REASONING_MESSAGE_CONTENT:case b.REASONING_MESSAGE_END:case b.REASONING_END:{let g=f.messageId,S=w===b.REASONING_END,M=S?i:a;if(!M.has(g))return Z(()=>new Y(S?`Cannot send 'REASONING_END' event: No active reasoning span found with ID '${g}'. A 'REASONING_START' event must be sent first.`:`Cannot send '${w}' event: No active reasoning message found with ID '${g}'. Start a reasoning message with 'REASONING_MESSAGE_START' first.`));let L=_(w,f.subagentRunId,s.reasoning.get(g),"reasoning message",g);return L?Z(()=>L):((w===b.REASONING_END||w===b.REASONING_MESSAGE_END)&&M.delete(g),de(f))}case b.REASONING_ENCRYPTED_VALUE:{let g=f.entityId,S=f.subtype,M=S==="tool-call"?s.toolCall.get(g):S==="message"?s.message.get(g)??s.reasoning.get(g):s.reasoning.get(g),L=S==="tool-call"?"tool call":S==="message"?"message":"reasoning message",U=_(w,f.subagentRunId,M,L,g);return U?Z(()=>U):de(f)}case b.ACTIVITY_DELTA:{let g=f.messageId,S=_(w,f.subagentRunId,s.activity.get(g),"activity",g);return S?Z(()=>S):de(f)}case b.SUBAGENT_STARTED:{if(typeof f.subagentRunId!="string")return Z(()=>new Y("Cannot send 'SUBAGENT_STARTED' without a 'subagentRunId'."));if(typeof f.name!="string")return Z(()=>new Y("Cannot send 'SUBAGENT_STARTED' without a 'name'."));let g=f.subagentRunId,S=f.parentSubagentRunId;return h.has(g)?Z(()=>new Y(`Cannot send 'SUBAGENT_STARTED': subagent '${g}' is already active. Finish it with 'SUBAGENT_FINISHED' first.`)):y.has(g)?Z(()=>new Y(`Cannot send 'SUBAGENT_STARTED': subagent '${g}' has already finished in this run. Subagent IDs are per-invocation and cannot be reused.`)):S!==void 0&&!h.has(S)&&!y.has(S)?Z(()=>new Y(`Cannot send 'SUBAGENT_STARTED': parentSubagentRunId '${S}' has not been started in this run.`)):(h.set(g,!0),de(f))}case b.SUBAGENT_FINISHED:case b.SUBAGENT_ERROR:{if(typeof f.subagentRunId!="string")return Z(()=>new Y(`Cannot send '${w}' without a 'subagentRunId'.`));if(w===b.SUBAGENT_ERROR&&typeof f.message!="string")return Z(()=>new Y("Cannot send 'SUBAGENT_ERROR' without a 'message'."));let g=f.subagentRunId;return h.has(g)?(h.delete(g),y.add(g),de(f)):Z(()=>new Y(`Cannot send '${w}': no active subagent found with ID '${g}'. A 'SUBAGENT_STARTED' event must be sent first.`))}case b.MESSAGES_SNAPSHOT:{let g=H(f.messages,!0);if(g)return Z(()=>g)}return de(f);case b.RUN_STARTED:k=!0;{let g=H((f.input??{}).messages,!1);if(g)return Z(()=>g)}return de(f);case b.RUN_FINISHED:if(m()){let g=[];for(let[M,L]of p)for(let U of L.keys())g.push(M===void 0?U:`${U} (subagent '${M}')`);let S=g.join(", ");return Z(()=>new Y(`Cannot send 'RUN_FINISHED' while steps are still active: ${S}`))}if(r.size>0){let g=Array.from(r.keys()).join(", ");return Z(()=>new Y(`Cannot send 'RUN_FINISHED' while text messages are still active: ${g}`))}if(a.size>0){let g=Array.from(a.keys()).join(", ");return Z(()=>new Y(`Cannot send 'RUN_FINISHED' while reasoning messages are still active: ${g}`))}if(i.size>0){let g=Array.from(i.keys()).join(", ");return Z(()=>new Y(`Cannot send 'RUN_FINISHED' while reasoning spans are still active: ${g}`))}if(o.size>0){let g=Array.from(o.keys()).join(", ");return Z(()=>new Y(`Cannot send 'RUN_FINISHED' while tool calls are still active: ${g}`))}if(h.size>0){let g=Array.from(h.keys()).join(", ");return Z(()=>new Y(`Cannot send 'RUN_FINISHED' while subagents are still active: ${g}`))}return l=!0,de(f);case b.RUN_ERROR:return c=!0,de(f);case b.CUSTOM:return de(f);default:return de(f)}}))},Rn=(function(t){return t.HEADERS="headers",t.DATA="data",t})({}),MT=t=>mn(()=>zt(t())).pipe(Oc(e=>{if(!e.ok){let o=e.headers.get("content-type")||"";return zt(e.text()).pipe(Ye(i=>{let a=i;if(o.includes("application/json"))try{a=JSON.parse(i)}catch{}let s=Error(`HTTP ${e.status}: ${typeof a=="string"?a:JSON.stringify(a)}`);return s.status=e.status,s.payload=a,Z(()=>s)}))}let n={type:Rn.HEADERS,status:e.status,headers:e.headers},r=e.body?.getReader();return r?new ye(o=>{let i=!1;return o.next(n),(async()=>{try{for(;!o.closed;){let{done:a,value:s}=await r.read();if(a){i=!0;break}let l={type:Rn.DATA,data:s};o.next(l)}o.complete()}catch(a){i=!0,o.error(a)}})(),()=>{i||r.cancel().catch(a=>{a?.name!=="AbortError"&&console.warn("Failed to cancel HTTP response stream:",a)})}}):Z(()=>Error("Failed to getReader() from response"))})),Sb=10*1024*1024,PT=(t,e)=>{let n=Cn(e),r=new At,o=new TextDecoder("utf-8",{fatal:!1}),i="";t.subscribe({next:s=>{if(s.type!==Rn.HEADERS&&s.type===Rn.DATA&&s.data){let l=o.decode(s.data,{stream:!0});i+=l;let c=i.split(/\n\n/);i=c.pop()||"";for(let u of c)a(u);if(i.length>Sb){r.error(Error(`SSE buffer size exceeded maximum limit of ${Sb/(1024*1024)} MB`));return}}},error:s=>r.error(s),complete:()=>{i&&(i+=o.decode(),a(i)),r.complete()}});function a(s){let l=s.split(`
`),c=[];for(let u of l)u.startsWith("data:")&&c.push(u.slice(5).replace(/^ /,""));if(c.length>0)try{let u=c.join(`
`),p=JSON.parse(u);n?.event("SSE","Event received:",p,{type:p?.type}),r.next(p)}catch(u){r.error(u)}}return r.asObservable()},Tb=10*1024*1024,LT=()=>typeof process<"u"&&process.env!==void 0&&!!process.env.SUPPRESS_TRANSFORMATION_WARNINGS,zT=(t,e)=>{let n=Cn(e),r=new At,o=new Uint8Array,i=!1;t.subscribe({next:s=>{if(s.type!==Rn.HEADERS&&s.type===Rn.DATA&&s.data){let l=new Uint8Array(o.length+s.data.length);l.set(o,0),l.set(s.data,o.length),o=l,a()}},error:s=>r.error(s),complete:()=>{if(a(),!i){if(o.length>0){r.error(Error(`The binary stream ended mid-frame: ${o.length} trailing bytes could not be read as a complete message.`));return}r.complete()}}});function a(){if(!i)for(;o.length>=4;){let s=4+new DataView(o.buffer,o.byteOffset,4).getUint32(0,!1);if(s>Tb){r.error(Error(`Protobuf message size exceeded maximum limit of ${Tb/(1024*1024)} MB`));return}if(o.length<s)break;try{let l=o.slice(4,s),c=bb(l);n?.event("PROTO","Event received:",c,{type:c.type}),r.next(c)}catch(l){if(l instanceof Gu)LT()||console.warn("[ag-ui][proto] Dropped an event this build does not know: the protocol has a variant this SDK predates.");else{let c=l instanceof Error?l.message:String(l);i=!0,r.error(Error(`Failed to decode protocol buffer message: ${c}`));return}}o=o.slice(s)}}return r.asObservable()},DT=(t,e)=>{let n=Cn(e),r=new At,o=new Ei(1),i=!1,a,s=!1,l=()=>{s=!0,a?.unsubscribe()},c=p=>{l(),r.error(p)},u=()=>{l(),r.complete()};return a=t.subscribe({next:p=>{if(o.next(p),p.type===Rn.HEADERS&&!i){i=!0;let v=p.headers.get("content-type");n?.lifecycle("HTTP","Stream format detected:",{contentType:v,parser:v===Fu?"protobuf":"sse"}),v===Fu?zT(o,n).subscribe({next:m=>r.next(m),error:m=>c(m),complete:()=>u()}):PT(o,n).subscribe({next:m=>{if(typeof m!="object"||!m||Array.isArray(m)){let y=Error("Invalid event: the frame is not a JSON object.");n?.event("HTTP","Event invalid:",{json:m,error:String(y)}),c(y);return}let h=m;if(typeof h.type!="string"||h.type.length===0){let y=Error("Invalid event: the frame carries no event type.");n?.event("HTTP","Event invalid:",{json:m,error:String(y)}),c(y);return}n?.event("HTTP","Event received:",m,{type:h.type}),r.next(m)},error:m=>{if(m?.name==="AbortError"){r.next({type:b.RUN_ERROR,message:m.message||"Request aborted",code:"abort",rawEvent:m}),u();return}return c(m)},complete:()=>u()})}else i||c(Error("No headers event received before data events"))},error:p=>{o.error(p),c(p)},complete:()=>{o.complete()}}),s&&a.unsubscribe(),r.asObservable()},Fe={TextMessageStart:"TextMessageStart",TextMessageContent:"TextMessageContent",TextMessageEnd:"TextMessageEnd",ActionExecutionStart:"ActionExecutionStart",ActionExecutionArgs:"ActionExecutionArgs",ActionExecutionEnd:"ActionExecutionEnd",ActionExecutionResult:"ActionExecutionResult",AgentStateMessage:"AgentStateMessage",MetaEvent:"MetaEvent",RunStarted:"RunStarted",RunFinished:"RunFinished",RunError:"RunError",NodeStarted:"NodeStarted",NodeFinished:"NodeFinished"},$T=t=>{if(typeof t=="string")return t;if(!Array.isArray(t))return;let e=t.filter(n=>n.type==="text").map(n=>n.text).filter(n=>n.length>0);if(e.length!==0)return e.join(`
`)};function Fb(t,e){return bh(e)&&oo(`[ag-ui][legacy] The result of tool call '${t}' carries content parts the legacy protocol cannot represent; only its text parts are bridged and the rest is dropped.`),Jn(e)}var oo=t=>{typeof process<"u"&&process.env!==void 0&&process.env.SUPPRESS_TRANSFORMATION_WARNINGS||console.warn(t)},UT=(t,e,n)=>r=>{let o={},i=!0,a=!0,s="",l=null,c=null,u=[],p={},v=!1,m=h=>{typeof h=="object"&&h&&("messages"in h&&delete h.messages,o=h)};return r.pipe(Ye(h=>{switch(h.type){case b.TEXT_MESSAGE_START:{let y=h;return[{type:Fe.TextMessageStart,messageId:y.messageId,role:y.role}]}case b.TEXT_MESSAGE_CONTENT:{let y=h;return[{type:Fe.TextMessageContent,messageId:y.messageId,content:y.delta}]}case b.TEXT_MESSAGE_END:{let y=h;return[{type:Fe.TextMessageEnd,messageId:y.messageId}]}case b.TOOL_CALL_START:{let y=h;return u.push({id:y.toolCallId,type:"function",function:{name:y.toolCallName,arguments:""}}),a=!0,p[y.toolCallId]=y.toolCallName,[{type:Fe.ActionExecutionStart,actionExecutionId:y.toolCallId,actionName:y.toolCallName,parentMessageId:y.parentMessageId}]}case b.TOOL_CALL_ARGS:{let y=h,k=u.find(E=>E.id===y.toolCallId);if(!k)return oo(`[ag-ui][legacy] TOOL_CALL_ARGS: No tool call found with ID '${y.toolCallId}'`),[];k.function.arguments+=y.delta;let T=!1;if(c){let E=c.find(H=>H.tool==k.function.name);if(E)try{let H=JSON.parse(Hi(k.function.arguments));E.tool_argument&&E.tool_argument in H?(m({...o,[E.state_key]:H[E.tool_argument]}),T=!0):E.tool_argument||(m({...o,[E.state_key]:H}),T=!0)}catch{}}return[{type:Fe.ActionExecutionArgs,actionExecutionId:y.toolCallId,args:y.delta},...T?[{type:Fe.AgentStateMessage,threadId:t,agentName:n,nodeName:s,runId:e,running:i,role:"assistant",state:JSON.stringify(o),active:a}]:[]]}case b.TOOL_CALL_END:{let y=h;return[{type:Fe.ActionExecutionEnd,actionExecutionId:y.toolCallId}]}case b.TOOL_CALL_RESULT:{let y=h,k=p[y.toolCallId];return(k===void 0||k==="")&&oo(`[ag-ui][legacy] No usable tool name was seen for tool call '${y.toolCallId}' (${k===void 0?"no TOOL_CALL_START reached this bridge":"its TOOL_CALL_START carried an empty toolCallName"}), so its result is being bridged with the fabricated action name "unknown". Downstream consumers route on that name.`),[{type:Fe.ActionExecutionResult,actionExecutionId:y.toolCallId,result:Fb(y.toolCallId,y.content),actionName:k||"unknown"}]}case b.RAW:return v||(v=!0,oo("[ag-ui][legacy] Dropping RAW events: the legacy runtime protocol has no equivalent, so the provider payloads they carry do not reach the legacy stream. Reported once per stream.")),[];case b.CUSTOM:{let y=h;switch(y.name){case"Exit":i=!1;break;case"PredictState":c=y.value;break}return[{type:Fe.MetaEvent,name:y.name,value:y.value}]}case b.STATE_SNAPSHOT:return m(h.snapshot),[{type:Fe.AgentStateMessage,threadId:t,agentName:n,nodeName:s,runId:e,running:i,role:"assistant",state:JSON.stringify(o),active:a}];case b.STATE_DELTA:{let y=h,k;try{k=fi.applyPatch(o,y.delta,!0,!1).newDocument}catch(T){let E=T instanceof Error?T.message:String(T);return oo(`[ag-ui][legacy] Failed to apply state patch:
Current state: ${JSON.stringify(o,null,2)}
Patch operations: ${JSON.stringify(y.delta,null,2)}
Error: ${E}`),[]}return m(k),[{type:Fe.AgentStateMessage,threadId:t,agentName:n,nodeName:s,runId:e,running:i,role:"assistant",state:JSON.stringify(o),active:a}]}case b.MESSAGES_SNAPSHOT:return l=h.messages,[{type:Fe.AgentStateMessage,threadId:t,agentName:n,nodeName:s,runId:e,running:i,role:"assistant",state:JSON.stringify({...o,...l?{messages:l}:{}}),active:!0}];case b.RUN_STARTED:return[];case b.RUN_FINISHED:{if(l&&(o.messages=l),Object.keys(o).length===0)return[];let y=null;if(l)try{y=HT(l)}catch(k){return[{type:Fe.RunError,message:k.message}]}return[{type:Fe.AgentStateMessage,threadId:t,agentName:n,nodeName:s,runId:e,running:i,role:"assistant",state:JSON.stringify({...o,...y?{messages:y}:{}}),active:!1}]}case b.RUN_ERROR:{let y=h;return[{type:Fe.RunError,message:y.message,code:y.code}]}case b.STEP_STARTED:return s=h.stepName,u=[],c=null,[{type:Fe.AgentStateMessage,threadId:t,agentName:n,nodeName:s,runId:e,running:i,role:"assistant",state:JSON.stringify(o),active:!0}];case b.STEP_FINISHED:return u=[],c=null,[{type:Fe.AgentStateMessage,threadId:t,agentName:n,nodeName:s,runId:e,running:i,role:"assistant",state:JSON.stringify(o),active:!1}];default:return[]}}))};function HT(t){let e=[];for(let n of t)if(n.role==="assistant"||n.role==="user"||n.role==="system"){let r=$T(n.content);if(r){let o={id:n.id,role:n.role,content:r};e.push(o)}if(n.role==="assistant"&&n.toolCalls&&n.toolCalls.length>0)for(let o of n.toolCalls){let i;try{i=JSON.parse(o.function.arguments)}catch(s){throw Error(`Failed to parse arguments for tool call '${o.id}' (${o.function.name}): ${s.message}`)}let a={id:o.id,name:o.function.name,arguments:i,parentMessageId:n.id};e.push(a)}}else if(n.role==="tool"){let r="unknown";for(let i of t)if(i.role==="assistant"&&i.toolCalls?.length){for(let a of i.toolCalls)if(a.id===n.toolCallId){r=a.function.name;break}}let o={id:n.id,result:Fb(n.toolCallId,n.content),actionExecutionId:n.toolCallId,actionName:r};e.push(o)}return e}var GT=t=>t.kind==="tool"?t.fields.toolCallId:t.fields.messageId,FT=t=>t==="tool"?"toolCallId":"messageId",ts=(t,e,n,r,o)=>{if(r!==void 0&&r!==o)throw Error(`Cannot continue ${t} '${e}': chunk ${n} '${r}' does not match the open stream's ${n} ${o===void 0?"(absent)":`'${o}'`}.`)},os=(t,e)=>e.metadata===void 0?t:{...t,metadata:e.metadata},Yu=(t,e)=>{let n=os(t,e);return e.rawEvent===void 0?n:{...n,rawEvent:e.rawEvent}},cd=t=>new Set(Object.keys(t.shape)),BT=cd(Eu),ZT=cd(_u),VT=cd(Tu),Ku=(t,e)=>{let n;for(let r of Object.keys(t))e.has(r)||((n??={})[r]=t[r]);return n},jT=t=>{typeof process<"u"&&process.env!==void 0&&process.env.SUPPRESS_TRANSFORMATION_WARNINGS||console.warn(`[ag-ui][transform] ${t} Set SUPPRESS_TRANSFORMATION_WARNINGS=true to silence.`)},Xu=(t,e,n,r)=>{if(e===void 0||n||t.length===0)return;let o=t[t.length-1],i=Object.keys(e).filter(a=>Object.prototype.hasOwnProperty.call(o,a));i.length>0&&jT(`A ${r} carried ${i.map(a=>`'${a}'`).join(", ")}, which the synthesized ${String(o.type)} already describes. The synthesized value is kept and the chunk's is dropped \u2014 this stage does not judge a described field, so the producer's value cannot be substituted for its own.`),t[t.length-1]={...e,...o}},is=t=>e=>{let n=Cn(t),r=new Map,o=l=>{let c=r.get(l);if(!c)return[];switch(r.delete(l),c.kind){case"text":{let u={type:b.TEXT_MESSAGE_END,messageId:c.fields.messageId,...c.fields.subagentRunId!==void 0&&{subagentRunId:c.fields.subagentRunId}};return n?.event("TRANSFORM","TEXT_MESSAGE_END",u,{messageId:u.messageId}),[u]}case"tool":{let u={type:b.TOOL_CALL_END,toolCallId:c.fields.toolCallId,...c.fields.subagentRunId!==void 0&&{subagentRunId:c.fields.subagentRunId}};return n?.event("TRANSFORM","TOOL_CALL_END",u,{toolCallId:u.toolCallId}),[u]}case"reasoning":{let u={type:b.REASONING_MESSAGE_END,messageId:c.fields.messageId,...c.fields.subagentRunId!==void 0&&{subagentRunId:c.fields.subagentRunId}};return n?.event("TRANSFORM","REASONING_MESSAGE_END",u,{messageId:u.messageId}),[u]}}},i=()=>[...r.keys()].flatMap(l=>o(l)),a=(l,c)=>{for(let[u,p]of r)if(p.kind===l&&GT(p)===c)return{owner:u}},s=(l,c,u,p,v)=>{if(c!==void 0){let h=a(l,c);if(h){if(u!==void 0&&u!==h.owner)throw Error(`Cannot continue ${v} '${c}': chunk subagentRunId '${u}' does not match the open stream's subagent '${h.owner??"(the parent agent)"}'.`);return h.owner}return u}if(u!==void 0)return u;if(r.get(void 0)?.kind===l)return;let m=[...r.entries()].filter(([,h])=>h.kind===l);if(m.length===1)return m[0][0];if(m.length>1)throw Error(`Ambiguous ${p}: it carries neither a ${FT(l)} nor a subagentRunId, but ${m.length} lanes have an open ${v}. Attribute the chunk to the subagent it belongs to.`)};return e.pipe(Ye(l=>{switch(l.type){case b.TEXT_MESSAGE_START:case b.TEXT_MESSAGE_CONTENT:case b.TEXT_MESSAGE_END:case b.TOOL_CALL_START:case b.TOOL_CALL_ARGS:case b.TOOL_CALL_END:case b.TOOL_CALL_RESULT:case b.STATE_SNAPSHOT:case b.STATE_DELTA:case b.CUSTOM:case b.STEP_STARTED:case b.STEP_FINISHED:case b.REASONING_START:case b.REASONING_MESSAGE_START:case b.REASONING_MESSAGE_CONTENT:case b.REASONING_MESSAGE_END:case b.REASONING_END:return[...o(l.subagentRunId??void 0),l];case b.RUN_STARTED:case b.RUN_FINISHED:case b.RUN_ERROR:case b.MESSAGES_SNAPSHOT:return[...i(),l];case b.RAW:case b.ACTIVITY_SNAPSHOT:case b.ACTIVITY_DELTA:case b.REASONING_ENCRYPTED_VALUE:case b.SUBAGENT_STARTED:return[l];case b.SUBAGENT_FINISHED:case b.SUBAGENT_ERROR:{let c=l.subagentRunId;return c==null?[l]:[...o(c),l]}case b.TEXT_MESSAGE_CHUNK:{let c=l,u=Ku(l,BT),p=s("text",c.messageId,c.subagentRunId??void 0,"TEXT_MESSAGE_CHUNK","text message"),v=r.get(p),m=[],h=!1,y;if(v?.kind==="text"&&(c.messageId===void 0||c.messageId===v.fields.messageId))ts("text message",v.fields.messageId,"role",c.role,v.fields.role),ts("text message",v.fields.messageId,"name",c.name,v.fields.name),y=v.fields;else{if(m.push(...o(p)),c.messageId===void 0)throw Error("First TEXT_MESSAGE_CHUNK must have a messageId");y={messageId:c.messageId,role:c.role===void 0?"assistant":c.role,name:c.name,subagentRunId:c.subagentRunId},r.set(p,{kind:"text",fields:y});let k=os({type:b.TEXT_MESSAGE_START,messageId:c.messageId,role:y.role,...c.name!==void 0&&{name:c.name},...c.subagentRunId!==void 0&&{subagentRunId:c.subagentRunId}},c);m.push(k),n?.event("TRANSFORM","TEXT_MESSAGE_START",k,{messageId:c.messageId})}if(c.delta!==void 0||c.rawEvent!==void 0){let k=c.subagentRunId===void 0?y.subagentRunId:c.subagentRunId,T=Yu({...u,type:b.TEXT_MESSAGE_CONTENT,messageId:y.messageId,delta:c.delta===void 0?"":c.delta,...k!==void 0&&{subagentRunId:k}},c);m.push(T),h=!0,n?.event("TRANSFORM","TEXT_MESSAGE_CONTENT",T,{messageId:y.messageId})}if(m.length===0&&(c.metadata!==void 0||c.rawEvent!==void 0||c.subagentRunId===null||u!==void 0)){let k=c.subagentRunId===void 0?y.subagentRunId:c.subagentRunId;m.push({...u,type:b.TEXT_MESSAGE_CONTENT,messageId:y.messageId,delta:"",...c.metadata!==void 0&&{metadata:c.metadata},...c.rawEvent!==void 0&&{rawEvent:c.rawEvent},...k!==void 0&&{subagentRunId:k}}),h=!0}return Xu(m,u,h,"TEXT_MESSAGE_CHUNK"),m}case b.TOOL_CALL_CHUNK:{let c=l,u=Ku(l,ZT),p=s("tool",c.toolCallId,c.subagentRunId??void 0,"TOOL_CALL_CHUNK","tool call"),v=r.get(p),m=[],h=!1,y;if(v?.kind==="tool"&&(c.toolCallId===void 0||c.toolCallId===v.fields.toolCallId))ts("tool call",v.fields.toolCallId,"toolCallName",c.toolCallName,v.fields.toolCallName),ts("tool call",v.fields.toolCallId,"parentMessageId",c.parentMessageId,v.fields.parentMessageId),y=v.fields;else{if(m.push(...o(p)),c.toolCallId===void 0)throw Error("First TOOL_CALL_CHUNK must have a toolCallId");if(c.toolCallName===void 0)throw Error("First TOOL_CALL_CHUNK must have a toolCallName");y={toolCallId:c.toolCallId,toolCallName:c.toolCallName,parentMessageId:c.parentMessageId,subagentRunId:c.subagentRunId},r.set(p,{kind:"tool",fields:y});let k=os({type:b.TOOL_CALL_START,toolCallId:c.toolCallId,toolCallName:c.toolCallName,...c.parentMessageId!==void 0&&{parentMessageId:c.parentMessageId},...c.subagentRunId!==void 0&&{subagentRunId:c.subagentRunId}},c);m.push(k),n?.event("TRANSFORM","TOOL_CALL_START",k,{toolCallId:c.toolCallId,toolCallName:c.toolCallName})}if(c.delta!==void 0||c.rawEvent!==void 0){let k=c.subagentRunId===void 0?y.subagentRunId:c.subagentRunId,T=Yu({...u,type:b.TOOL_CALL_ARGS,toolCallId:y.toolCallId,delta:c.delta===void 0?"":c.delta,...k!==void 0&&{subagentRunId:k}},c);m.push(T),h=!0,n?.event("TRANSFORM","TOOL_CALL_ARGS",T,{toolCallId:y.toolCallId})}if(m.length===0&&(c.metadata!==void 0||c.rawEvent!==void 0||c.subagentRunId===null||u!==void 0)){let k=c.subagentRunId===void 0?y.subagentRunId:c.subagentRunId;m.push({...u,type:b.TOOL_CALL_ARGS,toolCallId:y.toolCallId,delta:"",...c.metadata!==void 0&&{metadata:c.metadata},...c.rawEvent!==void 0&&{rawEvent:c.rawEvent},...k!==void 0&&{subagentRunId:k}}),h=!0}return Xu(m,u,h,"TOOL_CALL_CHUNK"),m}case b.REASONING_MESSAGE_CHUNK:{let c=l,u=Ku(l,VT),p=s("reasoning",c.messageId,c.subagentRunId??void 0,"REASONING_MESSAGE_CHUNK","reasoning message"),v=r.get(p),m=[],h=!1,y;if(v?.kind==="reasoning"&&(c.messageId===void 0||c.messageId===v.fields.messageId))y=v.fields;else{if(m.push(...o(p)),c.messageId===void 0)throw Error("First REASONING_MESSAGE_CHUNK must have a messageId");y={messageId:c.messageId,subagentRunId:c.subagentRunId},r.set(p,{kind:"reasoning",fields:y});let k=os({type:b.REASONING_MESSAGE_START,messageId:c.messageId,role:"reasoning",...c.subagentRunId!==void 0&&{subagentRunId:c.subagentRunId}},c);m.push(k),n?.event("TRANSFORM","REASONING_MESSAGE_START",k,{messageId:c.messageId})}if(c.delta!==void 0||c.rawEvent!==void 0){let k=c.subagentRunId===void 0?y.subagentRunId:c.subagentRunId,T=Yu({...u,type:b.REASONING_MESSAGE_CONTENT,messageId:y.messageId,delta:c.delta===void 0?"":c.delta,...k!==void 0&&{subagentRunId:k}},c);m.push(T),h=!0,n?.event("TRANSFORM","REASONING_MESSAGE_CONTENT",T,{messageId:y.messageId})}if(m.length===0&&(c.metadata!==void 0||c.rawEvent!==void 0||c.subagentRunId===null||u!==void 0)){let k=c.subagentRunId===void 0?y.subagentRunId:c.subagentRunId;m.push({...u,type:b.REASONING_MESSAGE_CONTENT,messageId:y.messageId,delta:"",...c.metadata!==void 0&&{metadata:c.metadata},...c.rawEvent!==void 0&&{rawEvent:c.rawEvent},...k!==void 0&&{subagentRunId:k}}),h=!0}return Xu(m,u,h,"REASONING_MESSAGE_CHUNK"),m}}return l.type,[l]}),gn(()=>{i()}))},WT=1e6;function so(t){if(t===void 0)return WT;if(t===1/0||Number.isSafeInteger(t)&&t>0)return t;throw new Y(`Invalid enforcement entry budget ${String(t)}: expected a positive integer, or Infinity to disable it.`)}var qT=class extends Y{constructor(t,e){super(`Enforcement limit exceeded at '${e||"(root)"}': the payload has more than ${t} entries to validate. If it is legitimate, raise or disable the limit (maxEnforcedEntries on the agent, or maxEntries in the enforcement options).`),this.name="AGUIEnforcementLimitError",this.limit=t,this.path=e}},gr=Symbol("agui.strip.drop");function Ju(t,e,n){if(t.used+=e,t.used>t.max)throw new qT(t.max,n)}function io(t){let e=t;for(;;){if(e instanceof oa||e instanceof vu||e instanceof bu||e instanceof xu||e instanceof yu){e=e.unwrap();continue}if(e instanceof wu){e=e.def.in;continue}if(e instanceof Bg){e=e.def.getter();continue}return e}}function YT(t){let e=t.def;return typeof e?.discriminator=="string"?e.discriminator:void 0}function Bb(t){let e=t,n=Array.isArray(e.def?.values)?e.def.values:e.values?Array.from(e.values):void 0;return n&&n.length===1?n[0]:e.value}function KT(t){let e=io(t);return e instanceof gu?Bb(e):void 0}function vr(t,e,n,r,o){let i=io(e);if(i instanceof pr){if(typeof t!="object"||!t||Array.isArray(t))return t;let a=i.shape,s=t,l={},c=i.meta()?.specOpen===!0,u=Object.keys(s);Ju(o,u.length,n);for(let p of u){let v=Object.prototype.hasOwnProperty.call(a,p)?a[p]:void 0;if(v===void 0){if(c){l[p]=s[p];continue}r.push(`${n}/${p}`);continue}let m=r.length,h=vr(s[p],v,`${n}/${p}`,r,o);if(h===gr){if(r.length=m,v.safeParse(void 0).success){r.push(`${n}/${p}`);continue}return gr}l[p]=h}return l}if(i instanceof na){if(!Array.isArray(t))return t;Ju(o,t.length,n);let a=i.element,s=[];return t.forEach((l,c)=>{let u=r.length,p=vr(l,a,`${n}/${c}`,r,o);if(p===gr){r.length=u,r.push(`${n}/${c}`);return}s.push(p)}),s}if(i instanceof Gg){if(typeof t!="object"||!t||Array.isArray(t))return t;let a=i.def.valueType,s=t,l={},c=Object.keys(s);Ju(o,c.length,n);for(let u of c){let p=r.length,v=vr(s[u],a,`${n}/${u}`,r,o);if(v===gr){r.length=p,r.push(`${n}/${u}`);continue}l[u]=v}return l}if(i instanceof ra){let a=i.options,s=YT(i);if(s!==void 0){if(typeof t!="object"||!t||Array.isArray(t))return t;let u=t[s];for(let p of a){let v=io(p);if(!(v instanceof pr))continue;let m=v.shape;if(KT(m[s])===u)return vr(t,p,n,r,o)}return gr}let l=a.filter(u=>io(u)instanceof pr),c=typeof t=="object"&&!!t&&!Array.isArray(t);if(l.length>1&&c)return t;for(let u of a){let p=io(u);if(p instanceof na&&Array.isArray(t)||p instanceof pr&&c)return vr(t,u,n,r,o)}return t}return t}function Zb(t,e,n){let r=[],o=vr(t,e,"",r,{used:0,max:so(n?.maxEntries)});if(o===gr)throw Error("Internal error: the stripper found the whole value unrecognisable, which the schemas are not supposed to allow \u2014 schema/stripper mismatch.");return{value:o,stripped:r}}var XT=new Set(Object.values(b));function JT(t){return XT.has(t.type)}var QT=new Map(ku.options.map(t=>{let e=t.shape;return[String(Bb(e.type)),t]})),ek=()=>typeof process<"u"&&process.env!==void 0&&!!process.env.SUPPRESS_TRANSFORMATION_WARNINGS;function sd(t){ek()||console.warn(`[ag-ui][enforce] ${t}`)}var Qu=(t,e)=>{let n=so(e?.maxEntries);return r=>{let o=Cn(t);return r.pipe(Ye(i=>{if(!JT(i)){sd(`Dropping unrecognised event '${String(i.type)}': no middleware translated it and the protocol does not describe it.`);let c={type:i.type};return o?.event("ENFORCE","Unrecognised event dropped:",c,c),fn}let a=QT.get(i.type);if(a===void 0)throw Error(`No validator for recognised event type '${String(i.type)}'`);let{value:s,stripped:l}=Zb(i,a,{maxEntries:n});for(let c of l)sd(`Removed unrecognised material at '${c}' on ${String(i.type)}. Nothing handled it; see the repo-root DEPRECATIONS.md if it is a retired shape.`);return de(a.parse(s))}))}};function tk(t,e){let n=so(e?.maxEntries),{value:r,stripped:o}=Zb(mc(t,"RunAgentInput"),aa,{maxEntries:n});for(let i of o)sd(`Removed unrecognised material at '${i}' from the outgoing input.`);return aa.parse(r)}var lo=class{runNext(t,e){return e.run(t).pipe(is(!1))}runNextWithState(t,e){let n=Q(t.messages||[]),r=Q(t.state===void 0?{}:t.state),o=new Ei;return Gb(t,o,e,[]).subscribe({next:i=>{i.messages!==void 0&&(n=i.messages),i.state!==void 0&&(r=i.state)},error:()=>{}}),this.runNext(t,e).pipe(Di(async i=>(o.next(i),await new Promise(a=>setTimeout(a,0)),{event:i,messages:Q(n),state:Q(r)})))}},nk=class extends lo{constructor(t){super(),this.fn=t}run(t,e){return this.fn(t,e)}};function rk(t){return t.startsWith("image/")?"image":t.startsWith("audio/")?"audio":t.startsWith("video/")?"video":"document"}function ok(t){return typeof t=="object"&&!!t&&"type"in t&&t.type==="binary"&&"mimeType"in t&&typeof t.mimeType=="string"}function ik(t){let e=rk(t.mimeType);return t.data?{type:e,source:{type:"data",value:t.data,mimeType:t.mimeType},...t.filename?{metadata:{filename:t.filename}}:{}}:t.url?{type:e,source:{type:"url",value:t.url,mimeType:t.mimeType},...t.filename?{metadata:{filename:t.filename}}:{}}:((typeof process>"u"||process.env===void 0||!process.env.SUPPRESS_TRANSFORMATION_WARNINGS)&&console.warn(`[ag-ui][compat] A binary content part carries only an id ('${t.id??""}') and cannot be converted to a modern media part; a 1.0 peer will not accept it. Provide data or a url. See the repo-root DEPRECATIONS.md.`),t)}function ak(t,e,n){if(typeof t!="object"||!t||!("type"in t)||t.type!==e.type||!("source"in t))return!1;let r=t.source;return typeof r!="object"||!r||!("type"in r)||r.type!==e.source.type||!("value"in r)||r.value!==e.source.value||!("mimeType"in r)||r.mimeType!==e.source.mimeType?!1:!n||"metadata"in t&&typeof t.metadata=="object"&&t.metadata!==null&&"filename"in t.metadata&&t.metadata.filename===n}function kb(t){let e=t.content;if(!Array.isArray(e))return t;let n=e.flatMap(r=>{if(ok(r)){let o=ik(r);return o.type!=="binary"&&e.some(i=>ak(i,o,r.filename))?[]:[o]}return[r]});return{...t,content:n}}var ed="THINKING_START",td="THINKING_END",Ab="THINKING_TEXT_MESSAGE_START",nd="THINKING_TEXT_MESSAGE_CONTENT",rd="THINKING_TEXT_MESSAGE_END";function ud(t){return typeof t=="object"&&!!t&&!Array.isArray(t)}var Kt={event:["rawEvent","subagentRunId"],[b.RUN_STARTED]:["parentRunId","input"],[b.RUN_FINISHED]:["result","outcome"],[b.RUN_ERROR]:["usage"],[b.SUBAGENT_FINISHED]:["result"],[b.TOOL_CALL_START]:["parentMessageId"],[b.TOOL_CALL_CHUNK]:["parentMessageId"],[b.TOOL_CALL_RESULT]:["role"],"RUN_FINISHED.outcome":["pendingToolCallIds"],"RUN_FINISHED.usage[]":["provider","reasoningTokens","cachedInputTokens","cacheWriteInputTokens"],RunAgentInput:["forwardedProps"],Tool:["parameters"],ResumeEntry:["payload"],"input content":["metadata"]},sk=new Map(Object.entries(Kt).filter(([t])=>Object.values(b).includes(t))),lk=t=>ss(t,"an absent field");function Yt(t,e,n,r){if(!ud(t))return t;let o;for(let i of e)t[i]===null&&(r(n===void 0?`${i}: null`:`${n}.${i}: null`),o??={...t},delete o[i]);return o??t}function ao(t,e,n){if(!ud(t)||!Array.isArray(t[e]))return t;let r=t[e],o=r.map(n);return o.some((i,a)=>i!==r[a])?{...t,[e]:o}:t}function Vb(t,e){return ao(t,"content",n=>{if(!ud(n))return n;switch(n.type){case"image":case"audio":case"video":case"document":return Yt(n,Kt["input content"],`${n.type} input content`,e);default:return n}})}function ck(t,e=lk){let n=Yt(t,Kt.RunAgentInput,"RunAgentInput",e);return n=ao(n,"tools",r=>Yt(r,Kt.Tool,"Tool",e)),n=ao(n,"resume",r=>Yt(r,Kt.ResumeEntry,"ResumeEntry",e)),ao(n,"messages",r=>Vb(r,e))}var ld=class extends lo{constructor(...t){super(...t),this.currentReasoningId=null,this.currentMessageId=null,this.nullsNoticedThisRun=new Set,this.noticeNullOncePerRun=e=>{this.nullsNoticedThisRun.has(e)||(this.nullsNoticedThisRun.add(e),ss(e,"an absent field"))}}warn(t,e){ss(t,e)}mintedContinuationId(t,e){if(e!==null)return e;let n=ke();return this.warnAside(`Minting a messageId ('${n}') for ${t}: no THINKING opener preceded it, so there was no id to continue. The id is this client's invention, not the producer's, and verification will reject the translated event for naming something nothing opened.`),n}warnAside(t){typeof process<"u"&&process.env!==void 0&&process.env.SUPPRESS_TRANSFORMATION_WARNINGS||console.warn(`[ag-ui][compat] ${t} Set SUPPRESS_TRANSFORMATION_WARNINGS=true to silence.`)}run(t,e){return this.currentReasoningId=null,this.currentMessageId=null,this.nullsNoticedThisRun.clear(),t.messages=t.messages.map(kb),e.run(t).pipe(It(n=>this.transformEvent(n)))}transformEvent(t){let e=this.noticeNullOncePerRun;t.type===b.RUN_STARTED&&this.nullsNoticedThisRun.clear(),t=Yt(t,Kt.event,void 0,e);let n=sk.get(t.type);switch(n&&(t=Yt(t,n,t.type,e)),t.type){case ed:{this.currentReasoningId=ke();let{title:r,...o}=t;return this.warn(ed,b.REASONING_START),r!==void 0&&this.warnAside(`Dropping ${ed}.title ${JSON.stringify(r)}: ${b.REASONING_START} has no title field, so the span's label cannot be carried and nothing downstream can recover it.`),{...o,type:b.REASONING_START,messageId:this.currentReasoningId}}case Ab:return this.currentMessageId=ke(),this.warn(Ab,b.REASONING_MESSAGE_START),{...t,type:b.REASONING_MESSAGE_START,messageId:this.currentMessageId,role:"reasoning"};case nd:{let{delta:r,...o}=t;return this.warn(nd,b.REASONING_MESSAGE_CONTENT),{...o,type:b.REASONING_MESSAGE_CONTENT,messageId:this.mintedContinuationId(nd,this.currentMessageId),delta:r}}case rd:{let r=this.mintedContinuationId(rd,this.currentMessageId);return this.currentMessageId=null,this.warn(rd,b.REASONING_MESSAGE_END),{...t,type:b.REASONING_MESSAGE_END,messageId:r}}case td:{let r=this.mintedContinuationId(td,this.currentReasoningId);return this.currentReasoningId=null,this.warn(td,b.REASONING_END),{...t,type:b.REASONING_END,messageId:r}}case b.RUN_FINISHED:{let r=t,o=Yt(r.outcome,Kt["RUN_FINISHED.outcome"],"RUN_FINISHED.outcome",e);return ao(o===r.outcome?r:{...r,outcome:o},"usage",i=>Yt(i,Kt["RUN_FINISHED.usage[]"],"RUN_FINISHED.usage[]",e))}case b.MESSAGES_SNAPSHOT:{let r=t;return Array.isArray(r.messages)?{...r,messages:r.messages.map(o=>this.upgradeInboundMessage(o))}:t}case b.RUN_STARTED:{let r=ck(t.input,e),o=r===t.input?t:{...t,input:r},i=o;return!i.input||!Array.isArray(i.input.messages)?o:{...i,input:{...i.input,messages:i.input.messages.map(a=>this.upgradeInboundMessage(a))}}}default:return t}}upgradeInboundMessage(t){t=Vb(t,this.noticeNullOncePerRun);let e=t.content;return!Array.isArray(e)||!e.some(n=>typeof n=="object"&&!!n&&n.type==="binary")?t:(this.warn("binary input content","the modern media content parts"),kb(t))}},uk=()=>t=>mn(()=>{let e=new ld;return t.pipe(It(n=>e.transformEvent(n)))});function dk(t,e=new Date){return t.expiresAt===void 0?!1:new Date(t.expiresAt)<=e}function jb(t,e){let n=new Set(t.map(a=>a.id)),r=new Set(Object.keys(e)),o=[...n].filter(a=>!r.has(a));if(o.length>0)throw Error(`buildResumeArray: missing responses for open interrupts: ${o.join(", ")}`);let i=[...r].filter(a=>!n.has(a));if(i.length>0)throw Error(`buildResumeArray: responses reference unknown interrupt ids: ${i.join(", ")}`);return t.map(a=>{let s=e[a.id],l={interruptId:a.id,status:s.status};return s.status==="resolved"&&s.payload!==void 0&&(l.payload=s.payload),s.metadata!==void 0&&(l.metadata=s.metadata),l})}function Wb(){return typeof process<"u"&&process.env!==void 0&&!!process.env.SUPPRESS_TRANSFORMATION_WARNINGS}function pk(t){Wb()||console.warn(`[ag-ui][compat] Flattening message content for a <=0.0.39 peer DROPS non-text parts (${t.join(", ")}). The peer cannot receive them; upgrade it to keep media content. See the repo-root DEPRECATIONS.md.`)}function hk(t){Wb()||console.warn(`[ag-ui][compat] Not flattening message content for a <=0.0.39 peer: ${t} content part(s) claim type "text" but carry a malformed 'text' value. That is a defect in the message, not media the peer cannot represent, and a downgrade must not repair it \u2014 the content is passed on unchanged so the outgoing enforcement boundary reports it. See the repo-root DEPRECATIONS.md.`)}function fk(t){let e=t.content;if(Array.isArray(e)){let n=s=>typeof s=="object"&&!!s&&"type"in s&&s.type==="text",r=s=>n(s)&&typeof s.text=="string",o=e.filter(s=>n(s)&&!r(s));if(o.length>0)return hk(o.length),t;let i=e.filter(s=>!r(s)).map(s=>typeof s=="object"&&s&&"type"in s?String(s.type):typeof s);i.length>0&&pk(i);let a=e.filter(r).map(s=>s.text).join("");return{...t,content:a}}return typeof e=="string"?t:e===void 0?{...t,content:""}:t}var mk=class extends lo{run(t,e){let{parentRunId:n,...r}=t,o={...r,messages:r.messages.map(fk)};return this.runNext(o,e)}},Ib="THINKING_START",Rb="THINKING_END",Cb="THINKING_TEXT_MESSAGE_START",Nb="THINKING_TEXT_MESSAGE_CONTENT",Ob="THINKING_TEXT_MESSAGE_END",gk=class extends lo{constructor(...t){super(...t),this.currentReasoningId=null,this.currentMessageId=null}warnAboutTransformation(t,e){typeof process<"u"&&process.env!==void 0&&process.env.SUPPRESS_TRANSFORMATION_WARNINGS||console.warn(`AG-UI is converting ${t} to ${e}. To remove this warning, upgrade your AG-UI integration package (e.g. @ag-ui/langgraph). To surpress it, set SUPPRESS_TRANSFORMATION_WARNINGS=true in your .env file.`)}run(t,e){return this.currentReasoningId=null,this.currentMessageId=null,this.runNext(t,e).pipe(It(n=>this.transformEvent(n)))}transformEvent(t){switch(t.type){case Ib:{this.currentReasoningId=ke();let{title:e,...n}=t;return this.warnAboutTransformation(Ib,b.REASONING_START),{...n,type:b.REASONING_START,messageId:this.currentReasoningId}}case Cb:return this.currentMessageId=ke(),this.warnAboutTransformation(Cb,b.REASONING_MESSAGE_START),{...t,type:b.REASONING_MESSAGE_START,messageId:this.currentMessageId,role:"reasoning"};case Nb:{let{delta:e,...n}=t;return this.warnAboutTransformation(Nb,b.REASONING_MESSAGE_CONTENT),{...n,type:b.REASONING_MESSAGE_CONTENT,messageId:this.currentMessageId??ke(),delta:e}}case Ob:{let e=this.currentMessageId??ke();return this.warnAboutTransformation(Ob,b.REASONING_MESSAGE_END),{...t,type:b.REASONING_MESSAGE_END,messageId:e}}case Rb:{let e=this.currentReasoningId??ke();return this.warnAboutTransformation(Rb,b.REASONING_END),{...t,type:b.REASONING_END,messageId:e}}default:return t}}},Mb="SUBAGENT_STARTED",Pb="SUBAGENT_FINISHED",Lb="SUBAGENT_ERROR";function as(t){if(t&&typeof t=="object"&&"subagentRunId"in t){let{subagentRunId:e,...n}=t;return n}return t}function zb(t){return t.map(e=>as(e))}var vk=class extends lo{warnDroppedLifecycleEvent(t){typeof process<"u"&&process.env!==void 0&&process.env.SUPPRESS_TRANSFORMATION_WARNINGS||console.warn(`AG-UI is dropping ${t} because the target agent predates subagent support. To remove this warning, upgrade your AG-UI integration package. To suppress it, set SUPPRESS_TRANSFORMATION_WARNINGS=true in your .env file.`)}run(t,e){let n={...t,messages:(t.messages??[]).map(r=>as(r))};return this.runNext(n,e).pipe(Ui(r=>{let o=r.type;(o===Mb||o===Pb||o===Lb)&&this.warnDroppedLifecycleEvent(o)}),Rc(r=>{let o=r.type;return o!==Mb&&o!==Pb&&o!==Lb}),It(r=>{let o=as(r);if(o.type===b.MESSAGES_SNAPSHOT){let i=o;if(Array.isArray(i.messages))return{...i,messages:zb(i.messages)}}if(o.type===b.RUN_FINISHED){let i=o;if(i.outcome&&Array.isArray(i.outcome.interrupts))return{...i,outcome:{...i.outcome,interrupts:i.outcome.interrupts.map(a=>as(a))}}}if(o.type===b.RUN_STARTED){let i=o;if(i.input&&Array.isArray(i.input.messages))return{...i,input:{...i.input,messages:zb(i.input.messages)}}}return o}))}},ns="1.0.4",Db=!1,$b=new WeakSet,bk=(t,e)=>/^\d+\.\d+$/.test(t)?An(t,e)>0?"newer":"not-newer":"uninterpretable",Ub=t=>{let e=t.protocolVersion;if(!(e===void 0||e===un))switch(bk(e,un)){case"uninterpretable":console.warn(`[ag-ui] The producer declared protocol version '${e}', which this client cannot interpret.`);return;case"newer":console.warn(`[ag-ui] The producer speaks protocol ${e}; this client speaks ${un}. Unrecognised material will be stripped with warnings.`);return;case"not-newer":return}},yk=class qb{resolvePeerCeiling(e){if(this.resolvingPeerCeiling)return ns;let n=Object.getOwnPropertyDescriptor(this,"maxVersion"),r=Object.getOwnPropertyDescriptor(this,"maxProtocolVersion"),o=Object.getPrototypeOf(this);for(;o&&o!==qb.prototype;)n??=Object.getOwnPropertyDescriptor(o,"maxVersion"),r??=Object.getOwnPropertyDescriptor(o,"maxProtocolVersion"),o=Object.getPrototypeOf(o);if(e==="maxVersion"&&n)return ns;let i=e==="maxProtocolVersion"?n:r;if(!i)return ns;this.resolvingPeerCeiling=!0;try{return i.get?i.get.call(this):i.value}finally{this.resolvingPeerCeiling=!1}}get maxProtocolVersion(){return this.resolvePeerCeiling("maxProtocolVersion")}get maxVersion(){return!this.resolvingPeerCeiling&&!Db&&(Db=!0,console.warn("[ag-ui] AbstractAgent.maxVersion is deprecated \u2014 use maxProtocolVersion. Same value; the new name says whose version it is and that it is a ceiling.")),this.resolvePeerCeiling("maxVersion")}get debug(){return this._debug}set debug(e){this._debug=rs(e),this._debugLogger=Wu(this._debug)}get threadId(){return this._threadId??=Bt()}set threadId(e){this._threadId=e}get maxEnforcedEntries(){return this._maxEnforcedEntries}set maxEnforcedEntries(e){this._maxEnforcedEntries=so(e)}get debugLogger(){return this._debugLogger}set debugLogger(e){typeof e=="boolean"?this._debugLogger=e?Wu(rs(!0)):void 0:this._debugLogger=e}resolvedCeilingDuringConstruction(){let e=this.maxProtocolVersion;if(typeof e!="string"||!ju(e))throw new Y(`maxProtocolVersion resolved to ${JSON.stringify(e)} during construction, which is not a version this client can compare. A ceiling read from an instance field is not available yet \u2014 return a literal from the getter.`);return e}constructor({agentId:e,description:n,threadId:r,initialMessages:o,initialState:i,debug:a,maxEnforcedEntries:s}={}){this.subscribers=[],this.isRunning=!1,this.pendingInterrupts=[],this.middlewares=[],this.resolvingPeerCeiling=!1,this.agentId=e,this.description=n??"",this._threadId=r,this.messages=Q(o??[]),this.state=Q(i??{}),this._debug=rs(a),this._debugLogger=Wu(this._debug),this._maxEnforcedEntries=so(s);let l=this.resolvedCeilingDuringConstruction();An(l,"0.0.39")<=0&&this.middlewares.unshift(new mk),An(l,"0.0.45")<=0&&this.middlewares.unshift(new gk),An(l,"0.0.57")<=0&&this.middlewares.unshift(new vk)}subscribe(e){return this.subscribers.push(e),{unsubscribe:()=>{this.subscribers=this.subscribers.filter(n=>n!==e)}}}use(...e){let n=e.map(r=>typeof r=="function"?new nk(r):r);return this.middlewares.push(...n),this}async runAgent(e,n){try{this.isRunning=!0,this.agentId=this.agentId??Bt();let r=this.prepareRunAgentInput(e);this.debugLogger?.lifecycle("LIFECYCLE","Run started:",{agentId:this.agentId,threadId:this.threadId});let o,i=new Set(this.messages.map(c=>c.id)),a=[{onRunStartedEvent:({event:c})=>Ub(c),onRunFinishedEvent:c=>{c.outcome==="success"&&(o=c.result)}},...this.subscribers,n??{}];$b.add(r),await this.onInitialize(r,a),this.activeRunDetach$=new At;let s;this.activeRunCompletionPromise=new Promise(c=>{s=c}),await zi(xi(()=>[...this.middlewares,new ld].reduceRight((c,u)=>({run:p=>u.run(p,c),get messages(){return c.messages},get state(){return c.state}}),this).run(r),Qu(this.debugLogger,{maxEntries:this.maxEnforcedEntries}),is(this.debugLogger),qu(this.debugLogger),c=>c.pipe($i(this.activeRunDetach$)),c=>this.applyBeforeSourceError(r,c,a),ar(c=>(this.debugLogger?.lifecycle("LIFECYCLE","Run errored:",{agentId:this.agentId,error:c instanceof Error?c.message:String(c)}),this.isRunning=!1,this.onError(r,c,a))),gn(()=>{this.debugLogger?.lifecycle("LIFECYCLE","Run finished:",{agentId:this.agentId,threadId:this.threadId}),this.isRunning=!1,this.onFinalize(r,a),s?.(),s=void 0,this.activeRunCompletionPromise=void 0,this.activeRunDetach$=void 0}))(de(null)));let l=Q(this.messages).filter(c=>!i.has(c.id));return{result:o,newMessages:l}}finally{this.isRunning=!1}}connect(e){throw new gc}async connectAgent(e,n){try{this.isRunning=!0,this.agentId=this.agentId??Bt();let r=this.prepareRunAgentInput(e),o,i=new Set(this.messages.map(c=>c.id)),a=[{onRunStartedEvent:({event:c})=>Ub(c),onRunFinishedEvent:c=>{c.outcome==="success"&&(o=c.result)}},...this.subscribers,n??{}];await this.onInitialize(r,a),this.activeRunDetach$=new At;let s;this.activeRunCompletionPromise=new Promise(c=>{s=c}),await zi(xi(()=>mn(()=>this.connect(r)),c=>Qu(this.debugLogger,{maxEntries:this.maxEnforcedEntries})(uk()(c)),is(this.debugLogger),qu(this.debugLogger),c=>c.pipe($i(this.activeRunDetach$)),c=>this.applyBeforeSourceError(r,c,a),ar(c=>(this.isRunning=!1,c instanceof gc?fn:this.onError(r,c,a))),gn(()=>{this.isRunning=!1,this.onFinalize(r,a),s?.(),s=void 0,this.activeRunCompletionPromise=void 0,this.activeRunDetach$=void 0}))(de(null)),{defaultValue:void 0});let l=Q(this.messages).filter(c=>!i.has(c.id));return{result:o,newMessages:l}}finally{this.isRunning=!1}}abortRun(){}async detachActiveRun(){if(!this.activeRunDetach$)return;let e=this.activeRunCompletionPromise??Promise.resolve();this.activeRunDetach$.next(),this.activeRunDetach$?.complete(),await e}applyBeforeSourceError(e,n,r){return mn(()=>{let o,i=n.pipe(ar(a=>(o={error:a},fn)));return this.processApplyEvents(e,this.apply(e,i,r),r).pipe(Cc(mn(()=>{let a=o;return a?Z(()=>a.error):fn})))})}apply(e,n,r){return Gb(e,n,this,r,this.debugLogger)}processApplyEvents(e,n,r){return n.pipe(Ui(o=>{o.messages&&(this.messages=o.messages,r.forEach(i=>{i.onMessagesChanged?.({messages:this.messages,state:this.state,agent:this,input:e})})),o.state!==void 0&&(this.state=o.state,r.forEach(i=>{i.onStateChanged?.({state:this.state,messages:this.messages,agent:this,input:e})}))}))}prepareRunAgentInput(e){let n=Q(this.messages);for(let o of n)o.subagentRunId===null&&delete o.subagentRunId;let r=ad(n.filter(o=>o.role!=="activity"));return{threadId:this.threadId,runId:e?.runId||Bt(),...An(this.maxProtocolVersion,ns)>=0&&{protocolVersion:un},tools:Q(e?.tools??[]),context:Q(e?.context??[]),forwardedProps:Q(e?.forwardedProps??{}),state:Q(this.state),messages:r,...e?.resume===void 0?{}:{resume:Q(e.resume)}}}async onInitialize(e,n){if($b.has(e)&&this.pendingInterrupts.length>0){let o=new Set((e.resume??[]).map(a=>a.interruptId)),i=this.pendingInterrupts.map(a=>a.id).filter(a=>!o.has(a));if(i.length>0)throw new Y(`Thread has ${i.length} pending interrupt(s) not addressed by resume: ${i.join(", ")}`);for(let a of this.pendingInterrupts)if(dk(a)&&(e.resume??[]).find(s=>s.interruptId===a.id)?.status!=="cancelled")throw new Y(`Interrupt ${a.id} expired at ${a.expiresAt} and can no longer be answered. Cancel it to continue the thread.`)}let r=await se(n,this.messages,this.state,(o,i,a)=>o.onRunInitialized?.({messages:i,state:a,agent:this,input:e}));if(r.messages!==void 0||r.state!==void 0){if(r.messages){this.messages=r.messages;for(let o of r.messages)o.subagentRunId===null&&delete o.subagentRunId;e.messages=ad(r.messages.filter(o=>o.role!=="activity")),n.forEach(o=>{o.onMessagesChanged?.({messages:this.messages,state:this.state,agent:this,input:e})})}r.state!==void 0&&(this.state=r.state,e.state=r.state,n.forEach(o=>{o.onStateChanged?.({state:this.state,messages:this.messages,agent:this,input:e})}))}}onError(e,n,r){return zt(se(r,this.messages,this.state,(o,i,a)=>o.onRunFailed?.({error:n,messages:i,state:a,agent:this,input:e}))).pipe(It(o=>{let i=o;if((i.messages!==void 0||i.state!==void 0)&&(i.messages!==void 0&&(this.messages=i.messages,r.forEach(a=>{a.onMessagesChanged?.({messages:this.messages,state:this.state,agent:this,input:e})})),i.state!==void 0&&(this.state=i.state,r.forEach(a=>{a.onStateChanged?.({state:this.state,messages:this.messages,agent:this,input:e})}))),i.stopPropagation!==!0){let a=String(n);if(!(n.name==="AbortError"||n.message==="Fetch is aborted"||n.message==="signal is aborted without reason"||n.message==="component unmounted"||a==="component unmounted"))throw console.error("Agent execution failed:",n),n}return{}}))}async onFinalize(e,n){let r=await se(n,this.messages,this.state,(o,i,a)=>o.onRunFinalized?.({messages:i,state:a,agent:this,input:e}));(r.messages!==void 0||r.state!==void 0)&&(r.messages!==void 0&&(this.messages=r.messages,n.forEach(o=>{o.onMessagesChanged?.({messages:this.messages,state:this.state,agent:this,input:e})})),r.state!==void 0&&(this.state=r.state,n.forEach(o=>{o.onStateChanged?.({state:this.state,messages:this.messages,agent:this,input:e})})))}clone(){let e=Object.create(Object.getPrototypeOf(this));return e.agentId=this.agentId,e.description=this.description,e.threadId=this.threadId,e.messages=Q(this.messages),e.state=Q(this.state),e._debug=this._debug,e._debugLogger=this._debugLogger,e._maxEnforcedEntries=this._maxEnforcedEntries,e.isRunning=this.isRunning,e.subscribers=[...this.subscribers],e.middlewares=[...this.middlewares],e.pendingInterrupts=Q(this.pendingInterrupts),e}addMessage(e){this.messages.push(e),(async()=>{for(let n of this.subscribers)await n.onNewMessage?.({message:e,messages:this.messages,state:this.state,agent:this});if(e.role==="assistant"&&e.toolCalls)for(let n of e.toolCalls)for(let r of this.subscribers)await r.onNewToolCall?.({toolCall:n,messages:this.messages,state:this.state,agent:this});for(let n of this.subscribers)await n.onMessagesChanged?.({messages:this.messages,state:this.state,agent:this})})()}addMessages(e){this.messages.push(...e),(async()=>{for(let n of e){for(let r of this.subscribers)await r.onNewMessage?.({message:n,messages:this.messages,state:this.state,agent:this});if(n.role==="assistant"&&n.toolCalls)for(let r of n.toolCalls)for(let o of this.subscribers)await o.onNewToolCall?.({toolCall:r,messages:this.messages,state:this.state,agent:this})}for(let n of this.subscribers)await n.onMessagesChanged?.({messages:this.messages,state:this.state,agent:this})})()}setMessages(e){this.messages=Q(e),(async()=>{for(let n of this.subscribers)await n.onMessagesChanged?.({messages:this.messages,state:this.state,agent:this})})()}setState(e){this.state=Q(e),(async()=>{for(let n of this.subscribers)await n.onStateChanged?.({messages:this.messages,state:this.state,agent:this})})()}legacy_to_be_removed_runAgentBridged(e){this.agentId=this.agentId??Bt();let n=this.prepareRunAgentInput(e);return[...this.middlewares,new ld].reduceRight((r,o)=>({run:i=>o.run(i,r),get messages(){return r.messages},get state(){return r.state}}),this).run(n).pipe(Qu(this.debugLogger,{maxEntries:this.maxEnforcedEntries}),is(this.debugLogger),qu(this.debugLogger),UT(this.threadId,n.runId,this.agentId),r=>r.pipe(It(o=>(this.debugLogger?.event("LEGACY","Event:",o,{type:o.type}),o))))}};function wk(t){if(!Array.isArray(t.messages))return t;let e=!1,n=t.messages.map(r=>{if(r.subagentRunId===null){e=!0;let o={...r};return delete o.subagentRunId,o}return r});return e?{...t,messages:n}:t}var Yb=class extends yk{requestInit(t){return{method:"POST",headers:{...this.headers,"Content-Type":"application/json",Accept:"text/event-stream"},body:JSON.stringify(wk(t)),signal:this.abortController.signal}}runAgent(t,e){return this.abortController=t?.abortController??new AbortController,super.runAgent(t,e)}abortRun(){this.abortController.abort(),super.abortRun()}constructor(t){super(t),this.abortController=new AbortController,this.url=t.url,this.headers=Q(t.headers??{}),this.fetch=t.fetch??((e,n)=>fetch(e,n))}run(t){return DT(MT(()=>this.fetch(this.url,this.requestInit(tk(t,{maxEntries:this.maxEnforcedEntries})))),this.debugLogger)}clone(){let t=super.clone();t.url=this.url,t.headers=Q(this.headers??{}),t.fetch=this.fetch;let e=new AbortController,n=this.abortController.signal;return n.aborted&&e.abort(n.reason),t.abortController=e,t}};Ge(cr());function st(t,e){return e===void 0?t:{...t,credentials:e}}function ls(t){if(t.newThread!==void 0)return t.newThread();let e=ke();return t.setActiveThread(e),e}function cs(t,e,n,r){if(e.length===0)return;let o=new URL(String(t),location.href).origin;o===location.origin||n.includes(o)||r.has(o)||(r.add(o),console.warn(`<ag-ui-chat>: sending host credentials (${e.join(", ")}) to ${o}, which is not this page's origin (${location.origin}). Those headers are the page's own authentication, and whichever server answers the browser's preflight receives them \u2014 so a URL attribute built from a query parameter or from tenant-authored configuration is a channel for the token to leave on. If this destination is deliberate, name it in \`trustedOrigins\` to confirm it and silence this notice. Reported once per origin.`))}function br(t){return t.split(",").map(e=>e.trim()).filter(e=>e!=="")}function us(t,e,n=new Set){let r=new Set(n);for(let s of t)s.role==="tool"&&r.add(s.toolCallId);let o=[],i=[],a=!1;for(let s of t){let l=s.role==="assistant"?xk(s.toolCalls):[];s.role==="tool"||l.length>0&&!a||(o.push(...i.map(e)),i=[]),o.push(s),a=s.role==="tool";for(let u of l)r.has(u)||(r.add(u),i.push(u))}return o.length+i.length===t.length?t:(o.push(...i.map(e)),o)}function xk(t){return Array.isArray(t)?t.map(e=>Object(e).id).filter(e=>typeof e=="string"):[]}function ds(t,e){return Object(t.metadata)[e]??t[e]}var ge={title:"Assistant",chatHistory:"Chat history",closeHistory:"Close history",searchConversations:"Search conversations",queued:"Waiting to send",removeQueued:'Do not send "{text}"',noMatches:"No conversations match that.",chatMoved:"Moved this panel out of the way",chatMinimised:"Minimised this panel",undo:"Undo",newChat:"New chat",collapse:"Collapse",expand:"Expand",expandUnread:"Expand \u2014 {count} unread",toggleTheme:"Toggle theme",copyCode:"Copy",copied:"Copied",copyFailed:"Copy failed",checkpoints:"Continue a run",noCheckpoints:"Nothing to continue yet.",resumeRun:"Resume",forkRun:"Fork",forkedRun:"branched",greeting:"Hello, {name}",greetingNoName:"Hello there",conversation:"Conversation",jumpToLatest:"Jump to latest",announceResponding:"Assistant is responding",announceAnswerReady:"Assistant answered",announceAwaitingDecision:"{count} action is waiting for your approval",announceStopped:"Response stopped",announceFailed:"The response failed",thinking:"Assistant is thinking\u2026",thoughts:"Thoughts",stopped:"\u23F9 Stopped",connectionLost:"Connection lost",noResult:"No result returned.",callNotFinished:"Not finished: the run ended or moved on before this tool call returned a result.",declinedAction:"User declined the action.",confirmCheckFailed:"Not run: the check that decides whether this action needs the user's confirmation failed.",navigating:"Navigating\u2026",historyReplaced:"The server replaced this conversation's history. Reload to see the updated transcript.",chartUndrawable:"A chart could not be drawn from the data sent, so it was removed.",historyCompacted:"Earlier turns condensed to fit the context window ({count} removed)",usingSkill:"Using skill {name}",runInterrupted:"The previous response didn\u2019t finish \u2014 the page changed before it arrived.",pageMoved:"The page changed since you last looked at it. Call read_page to see the current page, then retry.",attachmentsStillUploading:"{n} file still uploading \u2014 it was not sent with this message and is still attached.",notConnected:"This chat isn\u2019t connected to an agent, so the message wasn\u2019t sent.",continueNeedsTurn:"Type the next turn in the composer first, then pick a run to continue.",continueWhileRunning:"Wait for the current answer or stop it, then pick a run to continue.",continueWhileLoading:"Wait for the conversation to finish loading, then pick a run to continue.",skillNeeds:"\u201C{title}\u201D needs {fields} \u2014 fill it in below, then send.",message:"Message",inputPlaceholder:"Ask anything\u2026",send:"Send",stop:"Stop",attachFiles:"Attach files",recordVoice:"Record voice",stopRecording:"Stop recording",transcribing:"Transcribing\u2026",transcriptionFailed:"Transcription failed",recordingLimit:"Stopped at the {n}-minute limit \u2014 transcribing what was recorded.",toolRunning:"running\u2026",toolDeferred:"waiting for you",toolDone:"\u2713 done",toolError:"\u26A0 error",toolDeclined:"\u2298 declined",toolInterrupted:"\u25CC not finished",resizePanel:"Resize the chat panel",decisionApproved:"approved by you",decisionDeclined:"declined by you",argumentsLabel:"Arguments",resultLabel:"Result",errorLabel:"Error",declinedLabel:"Declined",interruptedLabel:"Not finished",details:"Details",toolGroupSteps:"{count} steps",toolGroupWorking:"Working through {count} steps",toolGroupWorked:"Worked through {count} steps",toolGroupWaiting:"{count} waiting for you",toolGroupFailed:"{count} failed",toolGroupDeclined:"{count} declined",toolStepRepeat:"({n})",subAgentWorking:"Working\u2026",subAgentDelegatedTo:"Delegated to {agent}",subAgentFinished:"{agent} finished",subAgentFailed:"The sub-agent failed",subAgentSteps:"Steps the sub-agent took",approvalEditArgs:"Edit the arguments before approving",approvalArgsInvalid:"That is not valid JSON, so nothing was sent.",approvalArgsNotAnObject:"Arguments have to be a JSON object.",suggestions:"Suggested follow-ups",messageActions:"Message actions",quoteSelection:"Quote",copyMessage:"Copy message",retryMessage:"Try again",feedbackUp:"Good answer",feedbackDown:"Poor answer",confirmAction:"Confirm action",confirmAlways:"Always allow",confirmRun:"Run \u201C{tool}\u201D?",confirm:"Confirm",cancel:"Cancel",approveAction:"Approve action",approvalPrompt:"Approve this action?",approve:"Approve",deny:"Deny",askUserAction:"Question",otherOption:"Other\u2026",answerPlaceholder:"Type your answer\u2026",submit:"Submit",chats:"Chats",noConversations:"No conversations yet.",rename:"Rename",renameConversation:"Rename conversation",delete:"Delete",deleteConversation:"Delete conversation",deletePrompt:"Delete?",tooLarge:"Too large (max {size})",fileTypeNotAllowed:"File type not allowed",uploadFailed:"upload failed",retry:"Retry",retryUpload:"Retry upload",remove:"Remove",removeAttachment:"Remove attachment",justNow:"just now",minutesAgo:"{n}m ago",hoursAgo:"{n}h ago",daysAgo:"{n}d ago",weeksAgo:"{n}w ago"};function dd(t){let e={...ge};for(let n of Object.keys(t)){let r=t[n];r!==void 0&&(e[n]=r)}return e}function Ek(t){let e=document.createElement("input");return e.type="text",e.className="question-input",e.setAttribute("part","question-input"),e.placeholder=t,e}function pd(t,e,n={}){let r=n.strings??ge,o=e.options??[],i=o.length>0,a=!i||e.allowCustom===!0;return new Promise(s=>{let l=document.createElement("div");l.className="question",l.setAttribute("part","question"),l.setAttribute("role","group"),l.setAttribute("aria-label",r.askUserAction);let c=document.createElement("div");c.className="question-body",c.setAttribute("part","question-body"),c.textContent=e.question;let u=document.createElement("div");u.className="question-options",u.setAttribute("part","question-options");let p=`q-${o.length}-${e.question.length}`,v=[];for(let f of o){let w=document.createElement("label");w.className="question-choice",w.setAttribute("part","question-choice");let g=document.createElement("input");g.type="radio",g.name=p,g.value=f,g.setAttribute("part","question-radio");let S=document.createElement("span");S.setAttribute("part","question-choice-text"),S.textContent=f,w.append(g,S),u.appendChild(w),v.push(g)}let m=null,h=null;if(a){if(h=Ek(r.answerPlaceholder),i){let f=document.createElement("label");f.className="question-choice",f.setAttribute("part","question-choice"),m=document.createElement("input"),m.type="radio",m.name=p,m.value="",m.setAttribute("part","question-radio");let w=document.createElement("span");w.setAttribute("part","question-choice-text"),w.textContent=r.otherOption,f.append(m,w),u.appendChild(f),h.disabled=!0}u.appendChild(h)}let y=document.createElement("div");y.className="question-actions",y.setAttribute("part","question-actions");let k=document.createElement("button");k.type="button",k.className="question-btn",k.setAttribute("part","question-button"),k.textContent=r.submit,y.appendChild(k);let T=!1,E=()=>{let f=v.find(w=>w.checked);if(f!==void 0)return f.value;if(h!==null&&(m===null||m.checked)){let w=h.value.trim();return w===""?null:w}return null},H=()=>{h!==null&&m!==null&&(h.disabled=!m.checked),k.disabled=E()===null},_=f=>{if(!T){T=!0,k.disabled=!0;for(let w of v)w.disabled=!0;m!==null&&(m.disabled=!0),h!==null&&(h.disabled=!0),l.setAttribute("data-resolved",f===""?"cancelled":"answered"),s(f)}};for(let f of[...v,...m!==null?[m]:[]])f.addEventListener("change",H);if(h?.addEventListener("input",H),h?.addEventListener("keydown",f=>{if(f.key==="Enter"){f.preventDefault();let w=E();w!==null&&_(w)}}),k.addEventListener("click",()=>{let f=E();f!==null&&_(f)}),n.signal?.addEventListener("abort",()=>_(""),{once:!0}),l.append(c,u,y),t.appendChild(l),n.signal?.aborted===!0){_("");return}H(),(i?v[0]:h)?.focus()})}function hd(t){let e={};if(!Array.isArray(t))return e;for(let n of t){if(n===null||typeof n!="object")continue;let r=n,o=r.name,i=r.summary,a=r.description;typeof o=="string"&&typeof i=="string"&&(e[o]=typeof a=="string"?{name:o,summary:i,description:a}:{name:o,summary:i})}return e}var ps=class{#e;#t={};#n=new Set;#o=new Or;constructor(e){this.#e=e}register(e){this.#o.register(e)}registerPageState(e){for(let n of ai(e))this.#o.register(n)}has(e){return this.#o.has(e)}defaultTools(){return[...this.#s().map(e=>({name:e.name,description:e.description,parameters:e.parameters})),...this.#o.tools()]}advertise(){let e=this.#e.getTools();return this.#n=new Set(e.map(n=>n.name)),e}wasAdvertised(e){return this.#n.has(e)}resolve(e){let n=this.#s().find(r=>r.name===e);return n!==void 0?n:this.#o.has(e)?this.#o.get(e):null}summary(e){return this.#t[e]?.summary}async fetchCatalog(){let e=this.#e.element.getAttribute("data-tools-url");if(e!==null)try{let n=await fetch(e,this.#e.fetchInit(e));this.#t=hd(await n.json())}catch{}}#r(){return this.#e.routeMap().length===0?[]:dc(()=>this.#e.routeMap(),()=>this.#e.navigate())}#i(){let e=this.#e.getPageMap();return e===null?[]:[{name:Jo,description:"Read the current page's structure (fields, buttons, route). Call after acting to observe the result within the same turn.",parameters:{type:"object",properties:{},required:[],[Le]:"Read the page"},handler:()=>e()}]}#a(){let e=this.#e.element.getAttribute("data-page-actions");if(e===null)return[];let n=new Set(br(e));return[...cc(n,r=>this.#e.resolvePageTarget(r)),...n.has(zr.CHAT)?ql(this.#e.element):[]]}#s(){return[...this.#r(),...this.#i(),...this.#a(),...this.#l()]}#l(){return this.#e.askUser()?[{name:"ask_user",description:"Ask the user a question and wait for their answer. Provide `options` for a multiple-choice prompt; set `allow_custom` to also accept a free-text answer.",parameters:{type:"object",properties:{question:{type:"string",description:"The question to ask the user."},options:{type:"array",items:{type:"string"},description:"Preset choices offered as radio buttons."},allow_custom:{type:"boolean",description:"Allow a free-text answer in addition to any options."}},required:["question"]},handler:(e,n)=>this.#c(e,n)}]:[]}async#c(e,n){let o={question:typeof e.question=="string"?e.question:""},i=e.options;Array.isArray(i)&&(o.options=i.filter(u=>typeof u=="string")),e.allow_custom===!0&&(o.allowCustom=!0);let a=this.#e.decision.open();this.#e.hidePending();let s=()=>pd(this.#e.ensureGroup(),o,{signal:a,strings:this.#e.strings()}),l=this.#e.askUserRenderer(),c;this.#e.setAsking(n,!0);try{if(l===null)c=await s();else try{c=await l.call(this.#e.element,o,{signal:a})}catch(u){c=await this.#u(u,a,n,s)}}finally{this.#e.setAsking(n,!1)}return this.#e.decision.close(),this.#e.updateEmptyState(),this.#e.follow(),c}#u(e,n,r,o){return n.aborted?Promise.resolve(""):(console.warn(`ag-ui-chat: askUserRenderer failed for tool call ${r}, so the built-in question card asks instead`,e),o())}};function hs(t){if(t.name!==jl)return null;let e=t.args?.id;return typeof e=="string"&&e!==""?e:null}function Kb(t,e){let n=document.createElement("button");return n.type="button",n.className=`approval-btn approval-btn--${t}`,n.setAttribute("part",`approval-button approval-${t}`),n.textContent=e,n}function fd(t,e,n={}){let r=n.strings??ge;return new Promise(o=>{let i=document.createElement("div");i.className="approval",i.setAttribute("part","approval"),e.toolName!==void 0&&i.setAttribute("data-tool-name",e.toolName),i.setAttribute("role","group"),i.setAttribute("aria-label",r.approveAction);let a=document.createElement("div");a.className="approval-body",a.setAttribute("part","approval-body"),a.textContent=e.message??r.approvalPrompt;let s=_k(e,n,r),l=document.createElement("div");l.className="approval-actions",l.setAttribute("part","approval-actions");let c=Kb("deny",r.deny),u=Kb("approve",r.approve),p=!1,v=m=>{p||(p=!0,c.disabled=!0,u.disabled=!0,i.setAttribute("data-resolved",m?"approved":"denied"),o(m))};if(c.addEventListener("click",()=>v(!1)),u.addEventListener("click",()=>{s!==null&&!s.commit()||v(!0)}),n.signal?.addEventListener("abort",()=>v(!1),{once:!0}),l.append(c,u),i.append(a,...s===null?[]:[s.root],l),t.appendChild(i),n.signal?.aborted===!0){v(!1);return}u.focus()})}function _k(t,e,n){let{onEdit:r}=e;if(r===void 0||t.args===void 0)return null;let o=JSON.stringify(t.args,null,2),i=document.createElement("div");i.className="approval-edit",i.setAttribute("part","approval-edit");let a=document.createElement("textarea");a.className="approval-args",a.setAttribute("part","approval-args"),a.setAttribute("aria-label",n.approvalEditArgs),a.rows=Math.min(10,o.split(`
`).length),a.value=o;let s=document.createElement("div");return s.className="approval-error",s.setAttribute("part","approval-error"),s.setAttribute("role","alert"),s.hidden=!0,i.append(a,s),{root:i,commit:()=>{if(a.value===o)return!0;let l;try{l=JSON.parse(a.value)}catch{return s.textContent=n.approvalArgsInvalid,s.hidden=!1,a.focus(),!1}return typeof l!="object"||l===null||Array.isArray(l)?(s.textContent=n.approvalArgsNotAnObject,s.hidden=!1,a.focus(),!1):(s.hidden=!0,r(l),!0)}}}function md(t,e){let n=document.createElement("button");return n.type="button",n.className=`confirm-btn confirm-btn--${t}`,n.setAttribute("part",`confirm-button confirm-${t}`),n.textContent=e,n}function gd(t,e,n={}){let r=n.strings??ge;return new Promise(o=>{let i=document.createElement("div");i.className="confirm",i.setAttribute("part","confirm"),i.setAttribute("data-tool-name",e.toolName),i.setAttribute("role","group"),i.setAttribute("aria-label",r.confirmAction);let a=document.createElement("div");a.className="confirm-body",a.setAttribute("part","confirm-body"),a.textContent=e.message??oe(r.confirmRun,{tool:e.toolName});let s=document.createElement("pre");s.className="confirm-args",s.setAttribute("part","confirm-args"),s.textContent=JSON.stringify(e.args,null,2),s.hidden=Object.keys(e.args).length===0;let l=document.createElement("div");l.className="confirm-actions",l.setAttribute("part","confirm-actions");let c=md("cancel",r.cancel),u=n.onAlwaysAllow===void 0?null:md("always",oe(r.confirmAlways,{tool:e.toolName})),p=md("confirm",r.confirm),v=!1,m=h=>{v||(v=!0,i.remove(),o(h))};if(c.addEventListener("click",()=>m(!1)),p.addEventListener("click",()=>m(!0)),u?.addEventListener("click",()=>{n.onAlwaysAllow?.(),m(!0)}),n.signal?.addEventListener("abort",()=>m(!1),{once:!0}),l.append(c,...u===null?[]:[u],p),i.append(a,s,l),t.appendChild(i),n.signal?.aborted===!0){m(!1);return}p.focus()})}function vd(t){return t[Cr]===!0}function fs(t){return t[Nr]===!0}var ms=class{#e;#t=new Set;#n=null;constructor(e){this.#e=e}forgetWaivers(){this.#t.clear()}buildContext(){return this.#n=window.location.href,this.#e.getContext()}async execute(e){if(hs(e)!==null)return null;let n=this.#e.tenure(),r=this.#e.conversation(),o=this.#e.threadId(),i=this.#e.transcript.cardFor(e);this.#e.transcript.forgetCard(e.id),this.#e.transcript.setCardElement(e.id,i.element),this.#e.transcript.holdRunning(e.id,i);let a=this.#e.tools.wasAdvertised(e.name)?this.#e.tools.resolve(e.name):null;if(a===null)return this.#e.transcript.isServerSettled(e.id)||i.settle(J.INTERRUPTED,this.#e.strings().callNotFinished),null;if(this.#e.getPageMap()!==null&&e.name!==Jo&&!fs(a.parameters)&&this.#a()){let u=this.#e.strings().pageMoved;return i.settle(J.ERROR,u),this.#e.transcript.showPending(),{content:`Error: ${u}`,error:u,outcome:qe.FAILED}}let s=this.#e.decision.open(),l=await this.#r(e,a);if(this.#e.decision.close(),s.aborted)return this.#i(i);if(l==="unanswered"){let u=this.#e.strings().confirmCheckFailed;return i.settle(J.DECLINED,u),this.#e.transcript.showPending(),{content:u,outcome:qe.DENIED}}if(l!==null){let u={toolName:e.name,args:e.args},p=a.parameters[Xo];typeof p=="string"&&(u.message=p);let v=this.#e.decision.open();i.setAsking(!0);let m;try{let h=gd(this.#e.transcript.ensureGroup(),u,{signal:v,strings:this.#e.strings(),...l==="destructive"?{onAlwaysAllow:()=>this.#t.add(e.name)}:{}});this.#e.transcript.updateEmptyState(),this.#e.transcript.follow(),m=await h}finally{i.setAsking(!1)}if(this.#e.decision.close(),this.#e.tenure()!==n)return null;if(i.recordDecision(m?"approved":"declined"),!m){let h=this.#e.strings().declinedAction;return i.settle(J.DECLINED,h),this.#e.conversation()===r&&this.#e.transcript.showPending(),{content:h,outcome:qe.DENIED}}if(v.aborted)return this.#i(i)}let c=fs(a.parameters)&&this.#e.navigate()===null;c&&this.#e.conversationStore().saveCheckpoint(o,{toolCallId:e.id});try{let u=await a.handler(e.args,e.id);if(this.#e.tenure()!==n)return null;if(a.render!==void 0&&this.#e.transcript.renderToolOutput(a.render,e),c)return i.settle(J.DONE,this.#e.strings().navigating),{content:"",halt:!0};let p=JSON.stringify(u??null);return i.settle(J.DONE,p),this.#e.conversation()===r&&this.#e.transcript.showPending(),{content:p}}catch(u){if(this.#e.tenure()!==n)return null;c&&this.#e.conversationStore().saveCheckpoint(o,null);let p=u instanceof Error?u.message:String(u);return i.settle(J.ERROR,p),this.#e.conversation()===r&&this.#e.transcript.showPending(),{content:`Error: ${p}`,error:p,outcome:qe.FAILED}}}async resolveInterrupts(e){let n=this.#e.decision.open();this.#e.announce(oe(this.#e.strings().announceAwaitingDecision,{count:e.length})),this.#e.transcript.hidePending();let r=await Promise.all(e.map(async i=>{let a=i.toolCallId!==void 0?this.#e.transcript.card(i.toolCallId):void 0,s={},l=Sk(i)??i.message;l!==void 0&&(s.message=l);let c=a?.element.getAttribute("data-tool-name");c!=null&&(s.toolName=c);let u,p=this.#e.approveWithEdits()&&a!==void 0;p&&(s.args=a.args),a?.mark(J.DEFERRED),a!==void 0&&this.#e.transcript.revealStep(a);let v=()=>fd(a?.approvalSlot??this.#e.transcript.ensureGroup(),s,{signal:n,strings:this.#e.strings(),...p?{onEdit:y=>{u=y}}:{}}),m=this.#e.approvalRenderer(),h;if(m===null)h=await v();else try{h=await m.call(this.#e.element,s,{signal:n})}catch(y){h=await this.#o(y,n,i.id,v)}return a?.recordDecision(h?"approved":"declined"),h?a?.mark(J.PENDING):a?.settle(J.DECLINED,this.#e.strings().declinedAction),{id:i.id,approved:h,editedArgs:u}}));this.#e.transcript.updateEmptyState(),this.#e.transcript.follow(),this.#e.decision.close();let o={};for(let{id:i,approved:a,editedArgs:s}of r)o[i]=a?{status:"resolved",payload:s===void 0?{approved:!0}:{approved:!0,editedArgs:s}}:{status:"cancelled"};return o}#o(e,n,r,o){return n.aborted?Promise.resolve(!1):(console.warn(`ag-ui-chat: approvalRenderer failed for interrupt ${r}, so the built-in approval card asks instead`,e),o())}async#r(e,n){if(this.#e.autoConfirm())return null;let r=this.#e.confirmPredicate();if(r!==null)try{return await r.call(this.#e.element,e.name,e.args)===!0?"predicate":null}catch(o){return console.warn(`ag-ui-chat: confirmPredicate failed for tool ${e.name}, so the call was refused`,o),"unanswered"}return this.#t.has(e.name)?null:vd(n.parameters)?"destructive":null}#i(e){return e.settle(J.INTERRUPTED,this.#e.strings().callNotFinished),null}#a(){return this.#n!==null&&this.#n!==window.location.href}};function Sk(t){let e=t.metadata?.[Xo];return typeof e=="string"&&e.trim()!==""?e:void 0}var Tk="http://www.w3.org/2000/svg",nt={top:20,right:12,bottom:30,left:44},kk=480,Ak=220,Ik=220/480,Rk=160,Ck=320,Xb=8,Nk=5.6,Jb=["var(--_chart-1)","var(--_chart-2)","var(--_chart-3)","var(--_chart-4)","var(--_chart-5)","var(--_chart-6)"];function Nn(t){return Jb[t%Jb.length]}function Qb(t){let e=Math.max(Ak,t),n=Math.min(Ck,Math.max(Rk,Math.round(e*Ik)));return{width:e,height:n,plotW:e-nt.left-nt.right,plotH:n-nt.top-nt.bottom}}function Ct(t,e){let n=document.createElementNS(Tk,t);for(let[r,o]of Object.entries(e))n.setAttribute(r,String(o));return n}function ey(t,e){let n=Ct("text",{"font-size":10,fill:"currentColor","fill-opacity":.65,...e});return n.textContent=t,n}function Ok(t){let e=[];return t.labels.forEach((n,r)=>{let o=0;for(let i of t.series)o+=i.points[r]??0,e.push(o)}),e}function Mk(t){let e=t.kind==="stacked"?Ok(t):t.series.flatMap(o=>[...o.points]),n=Math.max(0,...e),r=Math.min(0,...e);return n===r?{min:r,max:n+1}:{min:r,max:n}}function On(t,e,n,r){return nt.top+r.plotH-(t-e)/(n-e)*r.plotH}function bd(t,e,n){let r=n.plotW/e;return nt.left+r*t+r/2}function Pk(t,e){let n=e.plotW/t.length,r=Math.max(...t.map(o=>o.length))*Nk;return Math.max(1,Math.ceil(r/n))}function Lk(t,e,n,r,o){for(let a of[r,o]){let s=On(a,r,o,n);t.appendChild(Ct("line",{x1:nt.left,y1:s,x2:n.width-nt.right,y2:s,stroke:"currentColor","stroke-opacity":a===r?.35:.12})),t.appendChild(ey(String(Math.round(a)),{x:nt.left-6,y:s+4,"text-anchor":"end"}))}let i=Pk(e.labels,n);e.labels.forEach((a,s)=>{s%i===0&&t.appendChild(ey(a,{x:bd(s,e.labels.length,n),y:n.height-nt.bottom+16,"text-anchor":"middle"}))})}function zk(t,e,n,r,o){let i=n.plotW/e.labels.length,a=i*.7/e.series.length,s=On(r,r,o,n);e.series.forEach((l,c)=>{l.points.forEach((u,p)=>{let v=On(u,r,o,n);t.appendChild(Ct("rect",{x:nt.left+i*p+i*.15+a*c,y:v,width:a,height:Math.max(1,s-v),fill:Nn(c),rx:2}))})})}function Dk(t,e,n,r,o){let i=n.plotW/e.labels.length,a=i*.7,s=e.labels.map(()=>0);e.series.forEach((l,c)=>{l.points.forEach((u,p)=>{let v=s[p]??0,m=v+u;s[p]=m;let h=On(m,r,o,n);t.appendChild(Ct("rect",{x:nt.left+i*p+i*.15,y:h,width:a,height:Math.max(1,On(v,r,o,n)-h),fill:Nn(c)}))})})}function $k(t,e,n,r,o){e.series.forEach((i,a)=>{let s=i.points.map((l,c)=>`${bd(c,e.labels.length,n)},${On(l,r,o,n)}`).join(" ");t.appendChild(Ct("polyline",{points:s,fill:"none",stroke:Nn(a),"stroke-width":2,"stroke-linejoin":"round"}))})}function Uk(t,e,n,r,o){e.series.forEach((i,a)=>{i.points.forEach((s,l)=>{t.appendChild(Ct("circle",{cx:bd(l,e.labels.length,n),cy:On(s,r,o,n),r:4,fill:Nn(a),"fill-opacity":.85}))})})}function Hk(t,e,n){let r=e.reduce((l,c)=>l+c,0),o=n.width/2,i=nt.top+n.plotH/2,a=Math.min(n.plotW,n.plotH)/2;if(r===0){t.appendChild(Ct("circle",{cx:o,cy:i,r:a,fill:"none",stroke:"currentColor","stroke-opacity":.3}));return}let s=-Math.PI/2;e.forEach((l,c)=>{let u=l/r*Math.PI*2,p=s+u;if(u>=Math.PI*2)t.appendChild(Ct("circle",{cx:o,cy:i,r:a,fill:Nn(c)}));else{let v=o+a*Math.cos(s),m=i+a*Math.sin(s),h=o+a*Math.cos(p),y=i+a*Math.sin(p),k=u>Math.PI?1:0;t.appendChild(Ct("path",{d:`M ${o} ${i} L ${v} ${m} A ${a} ${a} 0 ${k} 1 ${h} ${y} Z`,fill:Nn(c)}))}s=p})}function ty(t,e){let n=Ct("svg",{viewBox:`0 0 ${e.width} ${e.height}`,width:"100%",role:"img"});if(n.setAttribute("aria-label",t.title??`${t.kind} chart`),t.kind==="pie"){let i=t.series[0];return Hk(n,i.points.map(a=>Math.max(0,a)),e),n}let{min:r,max:o}=Mk(t);return Lk(n,t,e,r,o),t.kind==="bar"?zk(n,t,e,r,o):t.kind==="stacked"?Dk(n,t,e,r,o):t.kind==="line"?$k(n,t,e,r,o):Uk(n,t,e,r,o),n}function Gk(t){if(t.length<2)return null;let e=document.createElement("div");return e.className="chart-legend",e.setAttribute("part","chart-legend"),t.forEach((n,r)=>{let o=document.createElement("span");o.className="chart-legend-item";let i=document.createElement("span");i.className="chart-legend-swatch",i.style.background=Nn(r),o.append(i,document.createTextNode(n)),e.appendChild(o)}),e}function Fk(t,e){new ResizeObserver(()=>{e(Math.round(t.clientWidth/Xb)*Xb)}).observe(t)}function co(t){if(t.labels.length===0||t.series.length===0)return null;let e=document.createElement("div");if(e.className="chart-block",e.setAttribute("part","chart-block"),t.title!==void 0&&t.title!==""){let i=document.createElement("div");i.className="chart-title",i.setAttribute("part","chart-title"),i.textContent=t.title,e.appendChild(i)}let n=kk,r=ty(t,Qb(n));e.appendChild(r);let o=Gk(t.kind==="pie"?t.labels:t.series.map(i=>i.label));return o!==null&&e.appendChild(o),Fk(e,i=>{if(i===n)return;n=i;let a=ty(t,Qb(n));r.replaceWith(a),r=a}),e}var Bk=["bar","line","pie","scatter","stacked"];function Zk(t){return Bk.includes(t)?t:"bar"}function Vk(t){if(!Array.isArray(t))return null;let e=[];for(let n of t){if(typeof n!="number"||!Number.isFinite(n)||Math.abs(n)>1e15)return null;e.push(n)}return e}function jk(t){if(!Array.isArray(t))return null;for(let e=0;e<t.length;e+=1)if(typeof t[e]!="string")return null;return t}function yr(t){if(typeof t!="object"||t===null)return null;let e=t,n=jk(e.labels);if(n===null||!Array.isArray(e.series))return null;let r=[];for(let a of e.series){if(typeof a!="object"||a===null)return null;let s=a,l=Vk(s.points);if(l===null||l.length!==n.length)return null;r.push({label:typeof s.label=="string"?s.label:"",points:l})}if(r.length===0||r.length*n.length>2e4||n.length>2e3)return null;let o=Zk(e.kind),i=e.title;return typeof i=="string"?{kind:o,title:i,labels:n,series:r}:{kind:o,labels:n,series:r}}var gs="render_chart";function Wk(t){let e=yr(t);return e===null?null:co(e)}function qk(t){let e=yr(t);return e!==null&&e.labels.length>0&&e.series.length>0}var Yk="chart not rendered: expected labels (strings) and series, each with one finite number per label";function ny(){return{name:gs,description:"Show a chart in the conversation. Supply the data and the page draws it. Every series must have exactly one point per label.",parameters:{type:"object",properties:{kind:{type:"string",enum:["bar","line","pie","scatter","stacked"]},title:{type:"string"},labels:{type:"array",items:{type:"string"}},series:{type:"array",items:{type:"object",properties:{label:{type:"string"},points:{type:"array",items:{type:"number"}}},required:["points"]}}},required:["labels","series"],"x-summary":"Draw a chart"},handler:t=>qk(t)?"chart rendered":Yk,render:Wk}}function Xt(t){t.style.height="auto",t.style.height=`${t.scrollHeight}px`}function vs(t,e,n){let r=document.createElement("slot");return r.name=t,r.className=e,r.innerHTML=n,r}function ry(t){let{input:e,send:n,attachButton:r,fileInput:o,strings:i,signal:a}=t,s=t.queuedRow;s.className="queued",s.setAttribute("part","queued"),s.setAttribute("role","group"),s.setAttribute("aria-label",i.queued),s.hidden=!0;let l=document.createElement("div");l.className="input-row",l.setAttribute("part","composer");let c=document.createElement("div");c.className="composer",c.setAttribute("part","composer-surface");let u=document.createElement("div");u.className="composer-tools",u.setAttribute("part","composer-tools"),e.className="input",e.setAttribute("part","input"),e.setAttribute("aria-label",i.message),e.rows=1,e.placeholder=i.inputPlaceholder,e.addEventListener("keydown",t.onKeydown,{signal:a}),e.addEventListener("input",t.onInput,{signal:a}),n.className="send",n.type="button",n.setAttribute("part","send"),n.replaceChildren(vs("icon-send","send-send",Bp),vs("icon-stop","send-stop",Zp)),n.title=i.send,n.setAttribute("aria-label",i.send),n.dataset.state="idle",n.addEventListener("click",t.onSend,{signal:a});let p=t.hint;return p.className="skill-hint",p.setAttribute("part","skill-hint"),p.hidden=!0,r.className="attach-btn",r.type="button",r.setAttribute("part","attach-button"),r.replaceChildren(vs("icon-attach","attach-glyph",Vp)),r.title=i.attachFiles,r.setAttribute("aria-label",i.attachFiles),r.hidden=!0,r.addEventListener("click",()=>o.click(),{signal:a}),o.className="attach-input",o.type="file",o.multiple=!0,o.hidden=!0,o.addEventListener("change",t.onFilesPicked,{signal:a}),t.attachSlot.className="attachment-slot",t.voiceSlot.className="voice-slot",u.append(r,t.voiceSlot,n),c.append(e,u),l.append(c,o),l}function yd(t,e){return new Promise((n,r)=>{let o=new FormData;o.append("file",t);let i=new XMLHttpRequest;i.open("POST",e.url),i.withCredentials=e.credentials==="include";for(let[l,c]of Object.entries(e.headers??{}))i.setRequestHeader(l,c);let a=e.onProgress;a!==void 0&&i.upload.addEventListener("progress",l=>{l.lengthComputable&&a(l.total===0?0:l.loaded/l.total)}),i.addEventListener("load",()=>{if(i.status>=200&&i.status<300)try{n(Kk(JSON.parse(i.responseText)))}catch{r(new Error("upload returned an unreadable response"))}else r(new Error(Xk(i)))}),i.addEventListener("error",()=>r(new Error("upload failed"))),i.addEventListener("abort",()=>r(new Error("upload cancelled")));let s=e.signal;s!==void 0&&s.addEventListener("abort",()=>i.abort()),i.send(o)})}function Kk(t){if(typeof t!="object"||t===null)throw new Error("not an object");let e=t,n=e.id,r=e.name,o=e.mime,i=e.size,a=e.url;if(typeof n!="string"||typeof r!="string"||typeof o!="string"||typeof i!="number")throw new Error("missing fields");return typeof a=="string"?{id:n,name:r,mime:o,size:i,url:a}:{id:n,name:r,mime:o,size:i}}function Xk(t){try{let e=JSON.parse(t.responseText);if(typeof e.error=="string")return e.error}catch{}return`upload failed (${t.status})`}function bs(t){let e=document.createElement("div");e.className="attachment-chips",e.setAttribute("part","attachment-chips");for(let n of t)e.appendChild(Jk(n));return e}function Jk(t){let e=document.createElement("div");e.className="attachment-chip attachment-chip--ready",e.setAttribute("part","attachment-chip");let n=document.createElement("span");n.className="attachment-chip-icon",n.setAttribute("part","attachment-chip-icon"),n.innerHTML=wd(t.mime),n.setAttribute("aria-hidden","true");let r=document.createElement("span");r.className="attachment-chip-name",r.setAttribute("part","attachment-chip-name"),r.textContent=t.name,r.title=t.name;let o=document.createElement("span");return o.className="attachment-chip-size",o.setAttribute("part","attachment-chip-size"),o.textContent=ys(t.size),e.append(n,r,o),e}function wd(t){return t.startsWith("image/")?th:t==="application/pdf"?nh:t.startsWith("text/")?rh:eh}function ys(t){if(t<1024)return`${t} B`;let e=["KB","MB","GB"],n=t/1024,r=0;for(;n>=1024&&r<e.length-1;)n/=1024,r+=1;return`${n<10?Math.round(n*10)/10:Math.round(n)} ${e[r]}`}var ws=class{element;#e;#t;#n=[];constructor(e){this.#e=e,this.#t=e.strings??ge,this.element=document.createElement("div"),this.element.className="attachment-tray",this.element.setAttribute("part","attachment-tray"),this.element.hidden=!0}add(e){let n={localId:ke(),file:e,status:Qe.UPLOADING,progress:0,ref:null,error:"",controller:null};this.#n.push(n);let r=this.#o(e);if(r!==null){n.status=Qe.ERROR,n.error=r,this.#a(),this.#e.onChange?.();return}this.#a(),this.#e.onChange?.(),this.#r(n)}readyRefs(){let e=[];for(let n of this.#n)n.ref!==null&&e.push(n.ref);return e}hasPending(){return this.#n.some(e=>e.status===Qe.UPLOADING)}pendingCount(){return this.#n.filter(e=>e.status===Qe.UPLOADING).length}isEmpty(){return this.#n.length===0}clearReady(){this.#n=this.#n.filter(e=>e.status===Qe.UPLOADING),this.#a()}clear(){for(let e of this.#n)e.controller?.abort();this.#n=[],this.#a()}dispose(){for(let e of this.#n)e.controller?.abort()}#o(e){return this.#e.maxBytes>0&&e.size>this.#e.maxBytes?oe(this.#t.tooLarge,{size:ys(this.#e.maxBytes)}):Qk(this.#e.accept,e)?null:this.#t.fileTypeNotAllowed}#r(e){let n=this.#o(e.file);if(n!==null){e.status=Qe.ERROR,e.error=n,this.#a(),this.#e.onChange?.();return}e.status=Qe.UPLOADING,e.progress=0,e.error="";let r=new AbortController;e.controller=r,this.#a(),this.#e.upload(e.file,o=>{e.progress=o,this.#a()},r.signal).then(o=>{e.status=Qe.READY,e.ref=o}).catch(o=>{e.status=Qe.ERROR,e.error=o instanceof Error?o.message:this.#t.uploadFailed}).finally(()=>{e.controller=null,this.#a(),this.#e.onChange?.()})}#i(e){e.controller?.abort(),this.#n=this.#n.filter(n=>n!==e),this.#a(),this.#e.onChange?.()}#a(){this.element.replaceChildren(),this.element.hidden=this.#n.length===0;for(let e of this.#n)this.element.appendChild(this.#s(e))}#s(e){let n=document.createElement("div");n.className=`attachment-chip attachment-chip--${e.status}`,n.setAttribute("part","attachment-chip");let r=document.createElement("span");r.className="attachment-chip-icon",r.setAttribute("part","attachment-chip-icon"),r.innerHTML=wd(e.file.type),r.setAttribute("aria-hidden","true");let o=document.createElement("span");o.className="attachment-chip-name",o.setAttribute("part","attachment-chip-name"),o.textContent=e.file.name,o.title=e.file.name;let i=document.createElement("span");if(i.className="attachment-chip-size",i.setAttribute("part","attachment-chip-size"),i.textContent=e.status===Qe.ERROR?e.error:ys(e.file.size),n.append(r,o,i),e.status===Qe.UPLOADING){let s=document.createElement("div");s.className="attachment-chip-bar",s.setAttribute("part","attachment-chip-bar");let l=document.createElement("div");l.className="attachment-chip-bar-fill",l.setAttribute("part","attachment-chip-bar-fill"),l.style.width=`${Math.round(e.progress*100)}%`,s.appendChild(l),n.appendChild(s)}if(e.status===Qe.ERROR){let s=document.createElement("button");s.type="button",s.className="attachment-chip-retry",s.setAttribute("part","attachment-chip-retry"),s.title=this.#t.retry,s.setAttribute("aria-label",this.#t.retryUpload),s.textContent="\u21BB",s.addEventListener("click",()=>this.#r(e)),n.appendChild(s)}let a=document.createElement("button");return a.type="button",a.className="attachment-chip-remove",a.setAttribute("part","attachment-chip-remove"),a.title=this.#t.remove,a.setAttribute("aria-label",this.#t.removeAttachment),a.textContent="\u2715",a.addEventListener("click",()=>this.#i(e)),n.appendChild(a),n}};function Qk(t,e){let n=br(t).map(i=>i.toLowerCase());if(n.length===0)return!0;let r=e.type.toLowerCase(),o=e.name.toLowerCase();return n.some(i=>i.startsWith(".")?o.endsWith(i):i.endsWith("/*")?r.startsWith(i.slice(0,-1)):r===i)}var xs=class{#e;#t=null;constructor(e){this.#e=e}get tray(){return this.#t}wire(e){this.#t?.element.remove(),this.#t=null;let n=this.#e.element.getAttribute("data-attachments-url"),r=this.#e.uploadHandler()??this.#n(n);if(r===null)return;let o=this.#e.element.getAttribute("data-attachment-accept")??"",i=new ws({upload:r,maxBytes:this.#o(),accept:o,strings:this.#e.strings(),onChange:()=>this.#l(i)});this.#t=i,this.#e.slot.appendChild(this.#t.element),this.#e.fileInput.accept=o,this.#e.button.hidden=!1,this.#r(e),this.#s(i,e)}attach(e){return this.#t===null?!1:(this.#t.add(e),!0)}onFilesPicked(){let e=this.#e.fileInput,n=e.files;if(n!==null)for(let r of Array.from(n))this.#t?.add(r);e.value=""}#n(e){return e===null?null:(n,r,o)=>yd(n,{url:e,headers:this.#e.headersFor(e),...this.#e.credentialsOption(),onProgress:r,signal:o})}#o(){let e=this.#e.element.getAttribute("data-attachment-max-bytes");if(e===null)return Zl;let n=Number.parseInt(e,10);return Number.isFinite(n)&&n>=0?n:Zl}#r(e){let n=this.#e.chat;n.addEventListener("dragover",r=>{r.preventDefault(),n.classList.add("chat--dragover")},{signal:e}),n.addEventListener("dragleave",()=>{n.classList.remove("chat--dragover")},{signal:e}),n.addEventListener("drop",r=>{r.preventDefault(),n.classList.remove("chat--dragover");let o=r.dataTransfer?.files;if(o!==void 0)for(let i of Array.from(o))this.#t?.add(i)},{signal:e})}#i(e,n,r){let o=this.#a(),i=n.getData("text/plain");o===null||i.length<o||(e.preventDefault(),r.add(new File([i],`pasted-${oy()}.txt`,{type:"text/plain"})))}#a(){let e=this.#e.element.getAttribute("data-paste-attach");if(e===null)return ei;if(e==="off")return null;let n=Number.parseInt(e,10);return Number.isNaN(n)||n<=0?(console.warn(`<ag-ui-chat>: data-paste-attach="${e}" is neither "off" nor a positive number of characters, so the default of ${ei} is used.`),ei):n}#s(e,n){this.#e.chat.addEventListener("paste",r=>{let o=r.clipboardData??null;if(o===null)return;let i=Array.from(o.files);if(i.length===0){this.#i(r,o,e);return}o.getData("text/plain")===""&&r.preventDefault();for(let a of i)this.#t?.add(eA(a))},{signal:n})}#l(e){this.#e.element.dispatchEvent(new CustomEvent(zl,{detail:{attachments:e.readyRefs(),pending:e.pendingCount()},bubbles:!0,composed:!0}))}};function oy(){return new Date().toISOString().replace(/[:.]/g,"-")}function eA(t){if(t.name!=="")return t;let e=t.type.split("/")[1]??t.type,n=oy();return new File([t],e===""?`pasted-${n}`:`pasted-${n}.${e}`,{type:t.type})}async function xd(t,e){let n=new FormData;n.append("audio",t,"recording.webm");let r=await fetch(e.url,st({method:"POST",headers:{...e.headers??{}},body:n},e.credentials));if(!r.ok)throw new Error(await tA(r));let o=await r.json();if(typeof o=="object"&&o!==null&&typeof o.text=="string")return o.text;throw new Error("transcription returned an unreadable response")}async function tA(t){try{let e=await t.json();if(typeof e.error=="string")return e.error}catch{}return`transcription failed (${t.status})`}var iy=12e4,Es=class{element;#e;#t;#n;#o="idle";#r=null;#i=null;#a=[];#s=null;#l=!1;#c=!1;#u={};constructor(e){this.#e=e.transcribe,this.#t=e.onText,this.#n=e.strings??ge,this.element=document.createElement("button"),this.element.type="button",this.element.className="voice-btn",this.element.setAttribute("part","voice-button");let n=document.createElement("slot");n.name="icon-voice",n.innerHTML=jp,this.element.append(n),this.#y("idle"),this.element.addEventListener("click",()=>{this.toggle()})}async toggle(){if(this.#o==="recording"){this.#p();return}this.#o!=="transcribing"&&await this.#f()}async#f(){let e={};this.#u=e;let n;try{n=await navigator.mediaDevices.getUserMedia({audio:!0})}catch{n=null}if(e!==this.#u||this.#c){for(let o of n?.getTracks()??[])o.stop();return}if(n===null){this.#g(this.#n.transcriptionFailed);return}this.#i=n,this.#a=[],this.#l=!1;let r;try{r=new MediaRecorder(n),r.addEventListener("dataavailable",o=>{this.#a.push(o.data)}),r.addEventListener("stop",()=>{this.#d(r.mimeType)}),this.#r=r,r.start()}catch{this.#g(this.#n.transcriptionFailed);return}this.#s=setTimeout(()=>{this.#l=!0,this.#p()},iy),this.#y("recording")}#p(){this.#v(),this.#r?.stop()}#v(){this.#s!==null&&(clearTimeout(this.#s),this.#s=null)}dispose(){this.#c=!0,this.#v(),this.#r!==null&&this.#r.state!=="inactive"&&this.#r.stop(),this.#r=null,this.#b()}async#d(e){if(this.#c)return;this.#b(),this.#y("transcribing");let n=new Blob(this.#a,{type:e||"audio/webm"});try{let r=await this.#e(n);if(this.#c)return;this.#y("idle"),this.#l&&(this.element.title=oe(this.#n.recordingLimit,{n:iy/6e4})),r!==""&&this.#t(r)}catch(r){this.#g(r instanceof Error?r.message:this.#n.transcriptionFailed)}finally{this.#r=null}}#b(){for(let e of this.#i?.getTracks()??[])e.stop();this.#i=null}#g(e){this.#c||(this.#b(),this.#r=null,this.#y("idle"),this.element.title=e)}#y(e){this.#o=e,this.element.dataset.state=e;let n=this.#m(e);this.element.title=n,this.element.setAttribute("aria-label",n),this.element.setAttribute("aria-pressed",String(e==="recording")),this.element.disabled=e==="transcribing"}#m(e){return e==="recording"?this.#n.stopRecording:e==="transcribing"?this.#n.transcribing:this.#n.recordVoice}};var _s=class{#e;#t=null;constructor(e){this.#e=e}wire(){this.#t?.element.remove(),this.#t=null;let e=this.#e.element.getAttribute("data-transcribe-url"),n=this.#e.transcribeHandler()??this.#n(e);n!==null&&(this.#t=new Es({transcribe:n,onText:r=>this.#o(r),strings:this.#e.strings()}),this.#e.slot.appendChild(this.#t.element))}dispose(){this.#t?.dispose()}#n(e){return e===null?null:n=>xd(n,{url:e,headers:this.#e.headersFor(e),...this.#e.credentialsOption()})}#o(e){let n=this.#e.input,r=n.value.trim();n.value=r===""?e:`${r} ${e}`,this.#e.onInput(),n.focus()}};var Ss=class{chips;palette;#e;#t=[];#n=!1;#o=!1;#r=[];#i=0;constructor(e){this.#e=e,this.chips=document.createElement("div"),this.chips.className="skill-chips",this.chips.setAttribute("part","skill-chips"),this.chips.hidden=!0,this.palette=document.createElement("div"),this.palette.className="skill-palette",this.palette.setAttribute("part","skill-palette"),this.palette.setAttribute("role","listbox"),this.palette.hidden=!0}setSkills(e){this.#t=e,this.#c()}enableChips(e){this.#n=e,this.#c()}enableSlash(e){this.#o=e}isOpen(){return!this.palette.hidden}onInput(e){this.#o&&e.startsWith("/")?this.#a(e.slice(1)):this.close()}onKeydown(e){return this.isOpen()?e.key==="ArrowDown"?(this.#s(1),!0):e.key==="ArrowUp"?(this.#s(-1),!0):e.key==="Escape"?(this.close(),!0):e.key==="Enter"?(this.#r.slice(this.#i,this.#i+1).forEach(n=>{this.#l(n)}),!0):!1:!1}close(){this.palette.hidden=!0,this.palette.replaceChildren()}#a(e){let n=e.trim().toLowerCase(),r=this.#t.filter(o=>o.name.toLowerCase().includes(n)||o.title.toLowerCase().includes(n));if(r.length===0){this.close();return}this.#r=r,this.#i=0,this.#u(),this.palette.hidden=!1}#s(e){let n=this.#r.length;this.#i=(this.#i+e+n)%n,this.#u()}#l(e){this.close(),this.#e(e)}#c(){this.chips.replaceChildren();let e=this.#n?this.#t.filter(n=>n.chip===!0):[];this.chips.hidden=e.length===0;for(let n of e){let r=document.createElement("button");r.type="button",r.className="skill-chip",r.setAttribute("part","skill-chip"),r.textContent=n.title,r.title=`/${n.name}`,r.addEventListener("click",()=>this.#l(n)),this.chips.appendChild(r)}}#u(){this.palette.replaceChildren(),this.#r.forEach((e,n)=>{let r=document.createElement("button");r.type="button",r.className="skill-item",r.setAttribute("part","skill-item"),r.setAttribute("role","option"),r.setAttribute("aria-selected",n===this.#i?"true":"false");let o=document.createElement("span");o.className="skill-item-title",o.setAttribute("part","skill-item-title");let i=document.createElement("code");if(i.className="skill-item-token",i.setAttribute("part","skill-item-token"),i.textContent=`/${e.name}`,o.append(i,document.createTextNode(` ${e.title}`)),r.appendChild(o),e.description!==void 0){let a=document.createElement("span");a.className="skill-item-desc",a.setAttribute("part","skill-item-desc"),a.textContent=e.description,r.appendChild(a)}r.addEventListener("click",()=>this.#l(e)),this.palette.appendChild(r)})}};var nA=500;function uo(t,e=[],n){for(let r of hA(e)){if(!t.contains(r.startContainer)||!t.contains(r.endContainer))continue;let o=document.createRange();o.setStart(r.startContainer,r.startOffset),o.setEnd(r.endContainer,r.endOffset);let i=aA(o).trim();if(i!=="")return{text:i,rect:pA(o,n)}}return null}function Ed(t){let e=rA(t);return e.length===0?"":`${iA(e.join(`
`)).split(`
`).map(o=>`> ${o}`.trimEnd()).join(`
`)}

`}function rA(t){let e=t.split(/\r\n?|\n/).map(i=>i.trimEnd()),n=e.filter(i=>i!=="").map(oA),r=n.length===0?0:Math.min(...n),o=[];for(let i of e){let a=i.slice(r);a===""&&(o.length===0||o[o.length-1]==="")||o.push(a)}for(;o[o.length-1]==="";)o.pop();return o}function oA(t){return t.length-t.trimStart().length}function iA(t){return t.length>500?`${t.slice(0,500).trimEnd()}...`:t}function aA(t){let e="";for(let n of uA(t)){let r=n.parentElement;if(!dA(r))continue;let o=n===t.startContainer?t.startOffset:0,i=n===t.endContainer?t.endOffset:n.data.length;e+=sA(n.data.slice(o,i),r)}return e}function sA(t,e){return lA.has(cA(e))?t:t.replace(/[^\S\n]*\n[^\S\n]*/g,`
`).replace(/[^\S\n]+/g," ")}var lA=new Set(["pre","pre-wrap","break-spaces"]);function cA(t){return window.getComputedStyle(t).whiteSpace}function uA(t){let e=t.commonAncestorContainer;if(e.nodeType===Node.TEXT_NODE)return[e];let n=[],r=document.createTreeWalker(e,NodeFilter.SHOW_TEXT);for(let o=r.nextNode();o!==null;o=r.nextNode())t.intersectsNode(o)&&n.push(o);return n}function dA(t){return typeof t.checkVisibility!="function"?!0:t.checkVisibility({contentVisibilityAuto:!0,opacityProperty:!0,visibilityProperty:!0})}function pA(t,e){let n=[...t.getClientRects()];if(n.length===0)return t.getBoundingClientRect();if(e===void 0)return n[0];let r=n[0],o=ay(r,e);for(let i of n.slice(1)){let a=ay(i,e);a<o&&(o=a,r=i)}return r}function ay(t,e){let n=Math.max(t.left-e.x,0,e.x-t.right),r=Math.max(t.top-e.y,0,e.y-t.bottom);return Math.hypot(n,r)}function hA(t){let e=window.getSelection();if(e===null)return[];let n=[...fA(e,t)];return e.rangeCount>0&&n.push(e.getRangeAt(0)),n}function fA(t,e){let n=t.getComposedRanges;if(n===void 0)return[];try{return n.call(t,{shadowRoots:e})}catch{return n.call(t,...e)}}var _d=6,mA=`
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
`;function Sd(t){let{within:e,exclude:n,onQuote:r}=t,o=new CSSStyleSheet;o.replaceSync(mA),document.adoptedStyleSheets=[...document.adoptedStyleSheets,o];let i=document.createElement("button");i.type="button",i.className="ag-ui-quote-offer",i.textContent=t.label,i.hidden=!0,document.body.append(i);let a="",s=()=>{i.hidden=!0,a=""},l=u=>{if(u.composedPath().includes(n)){s();return}if(gA()){s();return}let p=u instanceof MouseEvent?{x:u.clientX,y:u.clientY}:void 0,v=uo(e,[],p);if(v===null){s();return}a=v.text,vA(i,v.rect)},c=u=>{i.contains(u.target)||s()};return e.addEventListener("mouseup",l),e.addEventListener("keyup",l),e.addEventListener("mousedown",c),document.addEventListener("scroll",s,!0),window.addEventListener("resize",s),i.addEventListener("mousedown",u=>{u.preventDefault()}),i.addEventListener("click",()=>{let u=a;window.getSelection()?.removeAllRanges(),s(),r(u)}),{element:i,detach(){e.removeEventListener("mouseup",l),e.removeEventListener("keyup",l),e.removeEventListener("mousedown",c),document.removeEventListener("scroll",s,!0),window.removeEventListener("resize",s),i.remove(),document.adoptedStyleSheets=document.adoptedStyleSheets.filter(u=>u!==o)}}}function gA(){let t=document.activeElement;return t===null?!1:t.tagName==="INPUT"||t.tagName==="TEXTAREA"||t.isContentEditable===!0}function vA(t,e){t.hidden=!1;let n=e.top<_d+t.offsetHeight;t.dataset.below=String(n),t.style.top=`${n?e.bottom+_d:e.top-_d}px`;let r=t.offsetWidth/2,o=e.left+e.width/2,i=document.documentElement.clientWidth;t.style.left=`${Math.min(Math.max(o,r),i-r)}px`}var Td=6,Ts=class{button=document.createElement("button");#e;#t="";#n=null;constructor(e){this.#e=e}insert(e){let n=Ed(e);if(n==="")return;let r=this.#e.input,o=r.value.replace(/\s+$/,"");r.value=o===""?n:`${o}

${n}`,this.#e.autoGrow(),r.focus();let i=r.value.length;r.setSelectionRange(i,i)}offerInPage(e){this.#n?.detach();let n=Sd({within:e,label:this.#e.strings().quoteSelection,exclude:this.#e.element,onQuote:r=>this.#e.quote(r)});return this.#n=n,()=>{n.detach(),this.#n===n&&(this.#n=null)}}detachPageOffer(){this.#n?.detach(),this.#n=null}mount(e){let n=this.button;n.className="quote-selection",n.type="button",n.setAttribute("part","quote-selection"),n.textContent=this.#e.strings().quoteSelection,n.hidden=!0,n.addEventListener("mousedown",o=>{o.preventDefault()},{signal:e}),n.addEventListener("click",()=>{this.#e.quote(this.#t),window.getSelection()?.removeAllRanges(),this.#a()},{signal:e});let r=this.#e.messages;r.addEventListener("mouseup",o=>this.#r(o),{signal:e}),r.addEventListener("keyup",()=>this.#r(),{signal:e}),r.addEventListener("mousedown",()=>this.#a(),{signal:e})}#o(){return this.#e.element.getAttribute("data-quote-selection")!=="false"}#r(e){if(!this.#o())return;let n=e===void 0?void 0:{x:e.clientX,y:e.clientY},r=uo(this.#e.messages,[this.#e.root],n);if(r===null){this.#a();return}this.#t=r.text,this.#i(r.rect)}#i(e){let n=this.button;n.hidden=!1;let r=this.#e.messagesWrap.getBoundingClientRect(),o=e.top-r.top,i=o<Td+n.offsetHeight;n.dataset.below=String(i),n.style.top=`${i?e.bottom-r.top+Td:o-Td}px`;let a=n.offsetWidth/2,s=e.left+e.width/2-r.left;n.style.left=`${Math.min(Math.max(s,a),r.width-a)}px`}#a(){this.button.hidden=!0,this.#t=""}};function po(t,e=Date.now(),n=ge){if(!Number.isFinite(t))return n.justNow;let r=Math.round((e-t)/1e3);if(r<60)return n.justNow;let o=Math.round(r/60);if(o<60)return oe(n.minutesAgo,{n:o});let i=Math.round(o/60);if(i<24)return oe(n.hoursAgo,{n:i});let a=Math.round(i/24);return a<7?oe(n.daysAgo,{n:a}):oe(n.weeksAgo,{n:Math.round(a/7)})}function sy(t){return t.preview!==void 0&&t.preview!==null&&t.preview!==""?t.preview:null}function ly(t){return t.replace(/\s+/g," ").trim()}var ho=class{element;#e;#t;#n;#o=null;#r=null;#i;#a=[];constructor(e,n=ge){this.#e=e,this.#i=n,this.element=document.createElement("div"),this.element.className="checkpoints",this.element.setAttribute("part","checkpoints"),this.element.setAttribute("role","dialog"),this.element.setAttribute("aria-label",n.checkpoints),this.element.tabIndex=-1,this.element.hidden=!0;let r=document.createElement("div");r.className="checkpoints-header",r.setAttribute("part","checkpoints-header"),this.#n=document.createElement("span"),this.#n.className="checkpoints-title",this.#n.setAttribute("part","checkpoints-title"),this.#n.textContent=n.checkpoints,r.append(this.#n),this.#t=document.createElement("div"),this.#t.className="checkpoints-list",this.#t.setAttribute("part","checkpoints-list"),this.element.append(r,this.#t),this.element.addEventListener("keydown",o=>this.#u(o))}setRuns(e){this.#a=e,this.#f()}setRelativeTimeFormatter(e){this.#r=e}#s(e){return this.#r!==null?this.#r(e):po(e,Date.now(),this.#i)}setStrings(e){this.#i=e,this.element.setAttribute("aria-label",e.checkpoints),this.#n.textContent=e.checkpoints,this.#f()}open(){this.open_||(this.#o=this.#l(),this.element.hidden=!1,(this.#c()[0]??this.element).focus())}close(){this.open_&&(this.element.hidden=!0,this.#o?.focus(),this.#o=null)}#l(){return this.element.getRootNode().activeElement}#c(){return Array.from(this.element.querySelectorAll("button, [tabindex]")).filter(e=>!e.hidden)}#u(e){if(e.key==="Escape"){e.stopPropagation(),this.close();return}if(e.key!=="Tab")return;let n=this.#c(),r=n[0],o=n[n.length-1],i=this.#l();e.shiftKey&&i===r?(e.preventDefault(),o?.focus()):!e.shiftKey&&i===o&&(e.preventDefault(),r?.focus())}get open_(){return!this.element.hidden}#f(){if(this.#t.replaceChildren(),this.#a.length===0){let n=document.createElement("div");n.className="checkpoints-empty",n.setAttribute("part","checkpoints-empty"),n.textContent=this.#i.noCheckpoints,this.#t.append(n);return}let e=this.#p();for(let n of this.#a)this.#t.append(this.#v(n,e))}#p(){let e=new Set,n=new Set;for(let r of this.#a){let o=sy(r);if(o===null)continue;let i=ly(o);e.has(i)&&n.add(i),e.add(i)}return n}#v(e,n){let r=document.createElement("div");r.className="checkpoint-row",r.setAttribute("part","checkpoint-row");let o=sy(e),i=e.started_at===null?null:this.#s(Date.parse(e.started_at)),a=document.createElement("span");if(a.className="checkpoint-label",a.setAttribute("part","checkpoint-label"),a.textContent=o??i??e.run_id,r.append(a),o!==null&&i!==null){let l=document.createElement("span");l.className="checkpoint-time",l.setAttribute("part","checkpoint-time"),l.textContent=i,r.append(l)}if((o===null?i!==null:n.has(ly(o)))&&e.run_id!==""){let l=document.createElement("span");l.className="checkpoint-id",l.setAttribute("part","checkpoint-id"),l.textContent=e.run_id.slice(0,8),l.title=e.run_id,r.append(l)}if(e.parent_run_id!==null){let l=document.createElement("span");l.className="checkpoint-branch",l.setAttribute("part","checkpoint-branch"),l.textContent=this.#i.forkedRun,l.title=e.parent_run_id,r.append(l)}return r.append(this.#d(e.run_id,"resume",this.#i.resumeRun),this.#d(e.run_id,"fork",this.#i.forkRun)),r}#d(e,n,r){let o=document.createElement("button");return o.type="button",o.className=`checkpoint-action checkpoint-${n}`,o.setAttribute("part",`checkpoint-action checkpoint-${n}`),o.textContent=r,o.addEventListener("click",()=>{this.close(),this.#e(e,n)}),o}};function kd(t){let e=ds(t,"attachments");return Array.isArray(e)?e.filter(bA):[]}function bA(t){if(typeof t!="object"||t===null)return!1;let e=t;return typeof e.id=="string"&&typeof e.name=="string"&&typeof e.mime=="string"&&typeof e.size=="number"&&(e.url===void 0||typeof e.url=="string")}var fo=class{#e;#t;#n;constructor(e,n=()=>({}),r=()=>{}){this.#e=e.endsWith("/")?e:`${e}/`,this.#t=n,this.#n=r}async list(){try{let e=await fetch(this.#e,st({method:"GET",headers:{Accept:"application/json",...this.#t()}},this.#n()));return e.ok?(await e.json()).runs??[]:[]}catch{return[]}}async continuable(){return(await this.list()).filter(e=>e.continuable)}resumeUrl(e){return this.#o("resume",e)}forkUrl(e){return this.#o("fork",e)}#o(e,n){return`${this.#e.slice(0,-5)}${e}/${encodeURIComponent(n)}/`}};function mo(t){return t===qe.FAILED?J.ERROR:t===qe.DENIED?J.DECLINED:t===qe.INTERRUPTED?J.INTERRUPTED:J.DONE}var ks=class{#e;#t="";#n=[];#o=0;#r=0;#i=null;#a=null;#s=null;#l=null;#c=null;constructor(e){this.#e=e}get threadId(){return this.#t}get restored(){return this.#n}get continuation(){return this.#s}adoptActiveThread(){this.#t=this.#e.conversationStore().threadId()}startThread(){this.#t=ls(this.#e.conversationStore())}stopContinuation(){this.#s?.cancel(),this.#s=null}forgetRestored(){this.#n=[],this.#o+=1,this.#r+=1,this.#u()}#u(){let e=this.#l;this.#l=null,e?.()}reapUnsent(){this.#e.conversationStore().isUnsent?.(this.#t)===!0&&this.#e.conversationStore().clear(this.#t)}runs(){let e=this.#e.element.getAttribute("data-runs-url");return e===null||e===""?null:(this.#a===null&&(this.#a=new fo(e,()=>this.#e.headersFor(e),()=>this.#e.requestCredentials())),this.#a)}openThreads(){this.#e.checkpoints.close(),this.refreshDrawer(),this.#e.drawer.open()}openCheckpoints(){this.#e.drawer.close(),this.#p(),this.#e.checkpoints.open()}switchThread(e){if(e===this.#t)return this.#c?.threadId===e?this.#c.done:Promise.resolve();let n=this.#t,r=this.#f(e,n).finally(()=>{this.#c===o&&(this.#c=null)}),o={threadId:e,done:r};return this.#c=o,r}async#f(e,n){this.#e.cancelRun(),this.#e.resetState(),this.#e.conversationStore().setActiveThread(e),this.#t=e,this.#e.setRunning(!1);try{await this.rehydrate("switch")}catch(r){throw this.#t===e&&(this.#t=n,this.#e.conversationStore().setActiveThread(n),await this.rehydrate(null).catch(()=>{})),r}}renameThread(e,n){this.#e.conversationStore().renameThread(e,n),this.refreshDrawer()}deleteThread(e){let n=e===this.#t;n&&this.#e.cancelRun(),this.#e.conversationStore().clear(e),n&&(this.#e.resetState(),this.adoptActiveThread(),this.#e.setRunning(!1),this.#e.threadChanged(this.#t,"delete")),this.refreshDrawer()}async refreshDrawer(){this.#e.drawer.setRelativeTimeFormatter(this.#e.formatRelativeTime()),this.#e.drawer.setThreads(await this.#e.conversationStore().listThreads(),this.#t)}async#p(){let e=this.runs();this.#e.checkpoints.setRelativeTimeFormatter(this.#e.formatRelativeTime()),this.#e.checkpoints.setRuns(e===null?[]:await e.continuable())}async continueRun(e,n){let r=this.runs();if(r===null)return;if(this.#e.running()||this.#s!==null){let s=this.#e.strings();this.#v(this.#l===null?s.continueWhileRunning:s.continueWhileLoading);return}let o=this.#e.input.value.trim();if(o===""){this.#v(this.#e.strings().continueNeedsTurn);return}this.#e.recordTurn(o),this.#e.input.value="",this.#e.autoGrow();let i=this.#o,a=this.#e.buildClient({endpoint:n==="resume"?r.resumeUrl(e):r.forkUrl(e),initialMessages:[],follows:this.#e.client()?.messages??this.#n,onSaved:s=>{i===this.#o&&(this.#n=s,this.#e.releaseClient())}});this.#s=a;try{if(this.#e.announceTurn(o),this.#s!==a)return;await a.send(o)}finally{this.#s===a&&(this.#s=null,this.#e.continuationEnded())}}#v(e){this.#e.hint.textContent=e,this.#e.hint.hidden=!1,this.#e.input.focus()}async rehydrate(e){this.#r+=1;let n=this.#r,r=this.#t,o=this.#e.conversationStore();this.#i={generation:n,store:o,threadId:r};let i=o.loadCheckpoint(r),a=i===null?new Promise(c=>{this.#l=c}):null,s=this.#l,l=this.#e.holdRun(a);try{this.#e.element.setAttribute("data-restoring","");let c;try{c=await o.loadMessages(r)}finally{n===this.#r&&this.#e.element.removeAttribute("data-restoring")}if(!this.#d(n)){this.#b(o,r,i);return}if(c!==null){let u=this.#e.strings().callNotFinished,p=us(c,v=>({id:ke(),role:"tool",content:u,toolCallId:v,metadata:{outcome:qe.INTERRUPTED}}),new Set(i===null?[]:[i.toolCallId]));this.#n=p;for(let v of p)if(this.replay(v),!this.#d(n)){this.#b(o,r,i);return}}if(i===null&&this.#y(c),e!==null&&this.#e.threadChanged(r,e),i!==null){if(!this.#d(n)){this.#b(o,r,i);return}await this.#E(i,n)}}finally{l.release(),this.#l===s&&this.#u()}}#d(e){return e===this.#r&&this.#e.element.isConnected}#b(e,n,r){r!==null&&!this.#g(e,n)&&e.saveCheckpoint(n,null)}#g(e,n){let r=this.#i;return r?.generation===this.#r&&r.store===e&&r.threadId===n}#y(e){let n=e?.at(-1);n===void 0||n.role!==We.USER||this.#e.transcript.appendNotice("\u26A0",this.#e.strings().runInterrupted,"interrupted")}replay(e){let n=typeof e.content=="string"?e.content:"";if(e.role===We.USER){let r=kd(e);if(n!==""||r.length>0){let o=this.#e.appendMessage(We.USER,n);r.length>0&&o.appendChild(bs(r))}return}if(e.role===We.ASSISTANT){if(n!==""){let r=this.#e.appendMessage(We.ASSISTANT,n);r.classList.add("message--restored");let o=e.id;this.#e.actions.attach(r,typeof o=="string"&&o!==""?{messageId:o}:{rateable:!1})}for(let r of yA(e.toolCalls)){let o={id:r.id,name:r.function.name,args:this.#m(r.function.arguments)};if(this.#e.transcript.noticeIfSkillLoad(o))continue;this.#e.transcript.setCardElement(o.id,this.#e.transcript.cardFor(o).element);let i=this.#e.tools.resolve(o.name)?.render;i!==void 0&&this.#e.transcript.renderToolOutput(i,o)}return}if(e.role==="activity"){let r=e;typeof r.activityType=="string"&&this.#e.activities.draw(e.id,r.activityType,r.content);return}if(e.role==="tool"){let r=this.#e.transcript.card(e.toolCallId);r!==void 0&&r.settle(mo(ds(e,"outcome")),Jn(e.content))}}#m(e){if(typeof e!="string")return{};try{let n=JSON.parse(e);if(typeof n=="object"&&n!==null)return n}catch{}return{}}async#E(e,n){this.#e.conversationStore().saveCheckpoint(this.#t,null);let r=this.#e.ensureClient(),o=JSON.stringify(this.#e.navigationResult().call(this.#e.element,e));this.#d(n)&&(r.addToolResult(e.toolCallId,o),this.#e.transcript.card(e.toolCallId)?.settle(J.DONE,o),await r.resume())}};function yA(t){return Array.isArray(t)?t.filter(wA):[]}function wA(t){if(typeof t!="object"||t===null)return!1;let e=t;return typeof e.id=="string"&&typeof e.function?.name=="string"}var xA=8,As=class{element;#e;#t;#n;#o;#r;#i=null;#a;#s=[];#l="";#c;#u;#f="";#p=null;constructor(e,n=ge){this.#e=e,this.#a=n,this.element=document.createElement("div"),this.element.className="drawer",this.element.setAttribute("part","drawer"),this.element.hidden=!0;let r=document.createElement("div");r.className="drawer-backdrop",r.setAttribute("part","drawer-backdrop"),r.addEventListener("click",()=>this.close()),this.#t=document.createElement("div"),this.#t.className="drawer-panel",this.#t.setAttribute("part","drawer-panel"),this.#t.setAttribute("role","dialog"),this.#t.setAttribute("aria-modal","true"),this.#t.setAttribute("aria-label",n.chatHistory),this.#t.addEventListener("keydown",i=>this.#b(i));let o=document.createElement("div");o.className="drawer-header",o.setAttribute("part","drawer-header"),this.#n=document.createElement("span"),this.#n.className="drawer-title",this.#n.setAttribute("part","drawer-title"),this.#n.textContent=n.chats,this.#o=document.createElement("button"),this.#o.type="button",this.#o.className="drawer-new",this.#o.setAttribute("part","drawer-new"),this.#o.textContent=n.newChat,this.#o.addEventListener("click",()=>{this.close(),this.#e.onNew()}),this.#c=document.createElement("button"),this.#c.type="button",this.#c.className="drawer-close",this.#c.setAttribute("part","drawer-close"),this.#c.title=n.closeHistory,this.#c.setAttribute("aria-label",n.closeHistory),this.#c.append(document.createTextNode("\xD7")),this.#c.addEventListener("click",()=>this.close()),o.append(this.#n,this.#o,this.#c),this.#u=document.createElement("input"),this.#u.type="search",this.#u.className="drawer-filter",this.#u.setAttribute("part","drawer-filter"),this.#u.placeholder=n.searchConversations,this.#u.setAttribute("aria-label",n.searchConversations),this.#u.addEventListener("input",()=>{this.#f=this.#u.value.trim().toLowerCase(),this.#g()}),this.#r=document.createElement("div"),this.#r.className="drawer-list",this.#r.setAttribute("part","drawer-list"),this.#t.append(o,this.#u,this.#r),this.element.append(r,this.#t)}setRelativeTimeFormatter(e){this.#i=e}#v(e){return this.#i!==null?this.#i(e):po(e,void 0,this.#a)}setStrings(e){this.#a=e,this.#t.setAttribute("aria-label",e.chatHistory),this.#n.textContent=e.chats,this.#o.textContent=e.newChat,this.#c.title=e.closeHistory,this.#c.setAttribute("aria-label",e.closeHistory),this.#u.placeholder=e.searchConversations,this.#u.setAttribute("aria-label",e.searchConversations),this.#g()}isOpen(){return!this.element.hidden}open(){this.isOpen()||(this.#p=this.#d(),this.element.hidden=!1,this.#o.focus())}close(){this.isOpen()&&(this.element.hidden=!0,this.#p?.focus(),this.#p=null)}toggle(){this.isOpen()?this.close():this.open()}#d(){return this.element.getRootNode().activeElement}#b(e){if(e.key==="Escape"){e.preventDefault(),this.close();return}if(e.key!=="Tab")return;let n=Array.from(this.#t.querySelectorAll("button, input, [tabindex]")).filter(a=>!a.hidden),r=n[0],o=n[n.length-1],i=this.#d();e.shiftKey&&i===r?(e.preventDefault(),o?.focus()):!e.shiftKey&&i===o&&(e.preventDefault(),r?.focus())}setThreads(e,n){this.#s=e,this.#l=n,this.#g()}#g(){this.#r.replaceChildren();let e=this.#s.length<xA;this.#u.hidden=e,e&&this.#f!==""&&(this.#u.value="",this.#f="");let n=this.#y();if(n.length===0){let r=document.createElement("div");r.className="drawer-empty",r.setAttribute("part","drawer-empty"),r.textContent=this.#s.length===0?this.#a.noConversations:this.#a.noMatches,this.#r.appendChild(r);return}for(let r of n)this.#r.appendChild(this.#m(r))}#y(){return this.#f===""?this.#s:this.#s.filter(e=>e.title.toLowerCase().includes(this.#f)||e.preview.toLowerCase().includes(this.#f))}#m(e){let n=document.createElement("div");n.className="drawer-row",n.setAttribute("part","drawer-row"),e.threadId===this.#l&&n.classList.add("drawer-row--active");let r=document.createElement("button");r.type="button",r.className="drawer-row-select",r.setAttribute("part","drawer-row-select");let o=document.createElement("span");o.className="drawer-row-title",o.setAttribute("part","drawer-row-title"),o.textContent=e.title;let i=document.createElement("span");i.className="drawer-row-time",i.setAttribute("part","drawer-row-time"),i.textContent=this.#v(e.updatedAt);let a=document.createElement("span");a.className="drawer-row-preview",a.setAttribute("part","drawer-row-preview"),a.textContent=e.preview,r.append(o,i,a),r.addEventListener("click",()=>{this.close(),this.#e.onSelect(e.threadId)});let s=document.createElement("button");s.type="button",s.className="drawer-row-rename",s.setAttribute("part","drawer-row-rename"),s.title=this.#a.rename,s.setAttribute("aria-label",this.#a.renameConversation),s.textContent="\u270E",s.addEventListener("click",()=>this.#E(n,e));let l=document.createElement("button");l.type="button",l.className="drawer-row-delete",l.setAttribute("part","drawer-row-delete"),l.title=this.#a.delete,l.setAttribute("aria-label",this.#a.deleteConversation),l.textContent="\u{1F5D1}",l.addEventListener("click",()=>this.#h(n,e));let c=document.createElement("div");return c.className="drawer-row-actions",c.setAttribute("part","drawer-row-actions"),c.append(s,l),n.append(r,c),n}#E(e,n){let r=document.createElement("input");r.type="text",r.className="drawer-rename-input",r.setAttribute("part","drawer-rename-input"),r.value=n.title;let o=!1,i=()=>{if(o)return;o=!0;let s=r.value.trim();s===""||s===n.title?this.#g():this.#e.onRename(n.threadId,s)},a=()=>{o||(o=!0,this.#g())};r.addEventListener("keydown",s=>{s.key==="Enter"?(s.preventDefault(),i()):s.key==="Escape"&&(s.preventDefault(),s.stopPropagation(),a())}),r.addEventListener("blur",()=>i()),e.replaceChildren(r),r.focus(),r.select()}#h(e,n){let r=document.createElement("div");r.className="drawer-confirm",r.setAttribute("part","drawer-confirm");let o=document.createElement("span");o.className="drawer-confirm-label",o.setAttribute("part","drawer-confirm-label"),o.textContent=this.#a.deletePrompt;let i=document.createElement("button");i.type="button",i.className="drawer-confirm-yes",i.setAttribute("part","drawer-confirm-yes"),i.textContent=this.#a.delete,i.addEventListener("click",()=>this.#e.onDelete(n.threadId));let a=document.createElement("button");a.type="button",a.className="drawer-confirm-no",a.setAttribute("part","drawer-confirm-no"),a.textContent=this.#a.cancel,a.addEventListener("click",()=>this.#g()),r.append(o,i,a),e.replaceChildren(r)}};var Is=class{#e=null;open(){return this.#e=new AbortController,this.#e.signal}close(){this.#e=null}abort(){this.#e?.abort()}};function Jt(t,e,n=dt){let r=Math.min(n,Math.max(0,(e.width-t.width)/2)),o=Math.min(n,Math.max(0,(e.height-t.height)/2));return{left:Math.max(e.left+r,Math.min(t.left,e.left+e.width-t.width-r)),top:Math.max(e.top+o,Math.min(t.top,e.top+e.height-t.height-o))}}function go(t,e,n=sn){let r=t.right-t.left,o=t.bottom-t.top,i=Math.max(e.left+n,Math.min(t.left,e.left+e.width-n-r)),a=Math.max(e.top+n,Math.min(t.top,e.top+e.height-n-o));return{left:i,top:a,right:i+r,bottom:a+o}}var EA=4,_A=16,SA=64;function cy(t,e){let n=!1,{signal:r}=e;t.addEventListener("click",a=>{!n||a.detail===0||(n=!1,a.stopPropagation(),a.preventDefault())},{capture:!0,signal:r}),t.addEventListener("pointerdown",a=>{if(n=!1,!e.enabled())return;let s=e.rect(),l=a.clientX,c=a.clientY,u=!1,p=m=>{let h=m.clientX-l,y=m.clientY-c;if(!u&&Math.hypot(h,y)<EA)return;u=!0,t.setAttribute("data-dragging","true");let k=Jt({...s,left:s.left+h,top:s.top+y},e.viewport());e.apply(k.left,k.top)},v=m=>{if(window.removeEventListener("pointermove",p),window.removeEventListener("pointerup",v),window.removeEventListener("pointercancel",v),!u)return;t.removeAttribute("data-dragging"),n=!0;let h=Jt({...s,left:s.left+(m.clientX-l),top:s.top+(m.clientY-c)},e.viewport());e.commit(h.left,h.top)};window.addEventListener("pointermove",p),window.addEventListener("pointerup",v),window.addEventListener("pointercancel",v)},{signal:r});let o=null,i=()=>{if(o===null)return;let{left:a,top:s}=o;o=null,e.commit(a,s)};t.addEventListener("keydown",a=>{if(!e.enabled())return;let s=a.shiftKey?SA:_A,l=e.rect(),c=null;if(a.key==="ArrowLeft"?c={left:l.left-s,top:l.top}:a.key==="ArrowRight"?c={left:l.left+s,top:l.top}:a.key==="ArrowUp"?c={left:l.left,top:l.top-s}:a.key==="ArrowDown"&&(c={left:l.left,top:l.top+s}),c===null)return;a.preventDefault();let u=Jt({...l,...c},e.viewport());e.apply(u.left,u.top),o=u},{signal:r}),t.addEventListener("keyup",i,{signal:r}),t.addEventListener("blur",i,{signal:r})}function vo(t,e,n,r){return{hostInset:uy({top:n.y==="top"?t.top:null,right:n.x==="right"?r.width-t.right:null,bottom:n.y==="bottom"?r.height-t.bottom:null,left:n.x==="left"?t.left:null}),launcherInset:uy({top:n.y==="top"?e.top-t.top:null,right:n.x==="right"?t.right-(e.left+e.width):null,bottom:n.y==="bottom"?t.bottom-(e.top+e.height):null,left:n.x==="left"?e.left-t.left:null})}}function uy(t){let e=n=>n===null?"auto":`${Math.round(n)}px`;return`${e(t.top)} ${e(t.right)} ${e(t.bottom)} ${e(t.left)}`}function Ad(t,e,n,r,o=dt){let i=n.left+n.width-t.left,a=t.left+t.width-n.left,s=n.top+n.height-t.top,l=t.top+t.height-n.top,c={x:i>=a?"left":"right",y:s>=l?"top":"bottom"},u=c.x==="left"?t.left:t.left+t.width-e.width,p=c.y==="top"?t.top:t.top+t.height-e.height,v=go({left:u,top:p,right:u+e.width,bottom:p+e.height},n,o);return{corner:c,...vo(v,t,c,r)}}var TA="button, a[href], input, select, textarea, [contenteditable]";function dy(t,e){t.addEventListener("pointerdown",n=>{if(n.button!==0||!e.enabled()||kA(n,t))return;let r=e.rect(),o=n.clientX,i=n.clientY,a=!1,s=(u,p)=>{let v=u-o,m=p-i;return{left:r.left+v,top:r.top+m,right:r.right+v,bottom:r.bottom+m}},l=u=>{!a&&Math.hypot(u.clientX-o,u.clientY-i)<4||(a=!0,t.setAttribute("data-dragging","true"),e.apply(s(u.clientX,u.clientY),r))},c=u=>{window.removeEventListener("pointermove",l),window.removeEventListener("pointerup",c),window.removeEventListener("pointercancel",c),a&&(t.removeAttribute("data-dragging"),e.commit(s(u.clientX,u.clientY),r))};n.preventDefault(),window.addEventListener("pointermove",l),window.addEventListener("pointerup",c),window.addEventListener("pointercancel",c)})}function kA(t,e){let n=t.composedPath();return n.slice(0,n.indexOf(e)).some(r=>r instanceof Element&&r.matches(TA))}function hy(t,e){let n=document.createElement("div");n.className=`resize-handle resize-handle--${Rs(t)}`,n.setAttribute("part",`resize-handle resize-handle-${Rs(t)}`),n.setAttribute("role","separator"),t.x===void 0?n.setAttribute("aria-orientation","horizontal"):t.y===void 0&&n.setAttribute("aria-orientation","vertical"),n.setAttribute("aria-label",e.label),n.tabIndex=0,n.addEventListener("pointerdown",i=>{let a=e.axis();if(a==="none"||!py(t,a))return;let s=e.rect(),l=u=>{e.apply(Id(t,a,s,u.clientX,u.clientY))},c=u=>{window.removeEventListener("pointermove",l),window.removeEventListener("pointerup",c),n.removeAttribute("data-dragging"),e.commit(Id(t,a,s,u.clientX,u.clientY))};n.setAttribute("data-dragging","true"),window.addEventListener("pointermove",l),window.addEventListener("pointerup",c),i.preventDefault()});let r=null,o=()=>{if(r===null)return;let i=r;r=null,e.commit(i)};return n.addEventListener("keydown",i=>{let a=e.axis();if(a==="none"||!py(t,a))return;let s=i.shiftKey?64:16,l=e.rect(),c=AA[i.key];if(c===void 0||c.x!==0&&t.x===void 0||c.y!==0&&t.y===void 0)return;i.preventDefault();let u=(t.x==="left"?l.left:l.right)+c.x*s,p=(t.y==="top"?l.top:l.bottom)+c.y*s,v=Id(t,a,l,u,p);e.apply(v),r=v}),n.addEventListener("keyup",o),n.addEventListener("blur",o),n}var AA={ArrowLeft:{x:-1,y:0},ArrowRight:{x:1,y:0},ArrowUp:{x:0,y:-1},ArrowDown:{x:0,y:1}};function Rs(t){return[t.y,t.x].filter(e=>e!==void 0).join("-")}function py(t,e){return e==="both"||t.x!==void 0}function Id(t,e,n,r,o){let i=t.x==="left"?Math.min(r,n.right-280):n.left,a=t.x==="right"?Math.max(r,n.left+280):n.right,s=e==="both",l=s&&t.y==="top"?Math.min(o,n.bottom-240):n.top,c=s&&t.y==="bottom"?Math.max(o,n.top+240):n.bottom;return{left:i,top:l,right:a,bottom:c}}var Cs={collapseTo:"launcher",launcherDraggable:!0,resizeAxis:"both",startsCollapsed:!0},fy={collapseTo:"launcher",launcherDraggable:!1,resizeAxis:"width",startsCollapsed:!1},IA=new Map([[null,Cs],["",Cs],["floating",Cs],["bottom-left",Cs],["side",fy],["sidebar",{...fy,collapseTo:"rail"}],["full",{collapseTo:"launcher",launcherDraggable:!1,resizeAxis:"none",startsCollapsed:!1}],["page",{collapseTo:null,launcherDraggable:!1,resizeAxis:"none",startsCollapsed:!1}],["embedded",{collapseTo:"header",launcherDraggable:!1,resizeAxis:"both",startsCollapsed:!1}]]),RA={collapseTo:"launcher",launcherDraggable:!1,resizeAxis:"both",startsCollapsed:!1};function Ns(t,e=null){let n=IA.get(t)??RA;return e==="bar"&&n.collapseTo==="launcher"?{...n,collapseTo:"bar",launcherDraggable:!1}:e==="none"&&n.collapseTo!==null?{...n,collapseTo:"none",launcherDraggable:!1}:n}var Rd="ag-ui-chat:size",bo="--_drag-width",yo="--_drag-height",Cd="--_dock-bottom",my="--_dock-right",Nd="ag-ui-chat:launcher";function CA(t){if(typeof t!="object"||t===null)return null;let{left:e,top:n}=t;return typeof e=="number"&&typeof n=="number"?{left:e,top:n}:null}function gy(t,e){return t.width>=e.width-1&&t.height>=e.height-1}function vy(t,e,n){let r=o=>`${Math.round(o)}px`;return[t.y==="top"?r(e.top):"auto",t.x==="right"?r(n.width-e.right):"auto",t.y==="bottom"?r(n.height-e.bottom):"auto",t.x==="left"?r(e.left):"auto"].join(" ")}var NA=[{y:"top"},{y:"bottom"},{x:"left"},{x:"right"},{x:"left",y:"top"},{x:"right",y:"top"},{x:"left",y:"bottom"},{x:"right",y:"bottom"}],Os=class{#e;constructor(e){this.#e=e}enablePanelDrag(e){dy(e,{enabled:()=>!this.#e.collapsed()&&this.#b(),rect:()=>this.#e.element.getBoundingClientRect(),apply:(n,r)=>this.#G(n,r),commit:(n,r)=>this.#V(n,r)})}enableLauncherDrag(e){cy(this.#e.launcher,{signal:e,enabled:()=>this.#e.collapsed()&&this.#b(),rect:()=>this.#m(),viewport:()=>this.#g(),apply:(n,r)=>this.#h(n,r),commit:(n,r)=>this.#O(n,r)})}mountResizeGrips(e){for(let n of NA){let r=hy(n,{axis:()=>this.#l(),rect:()=>this.#e.element.getBoundingClientRect(),apply:o=>this.#W(n,o),commit:o=>this.#R(n,o),label:this.#e.strings().resizePanel});r.tabIndex=-1,r.setAttribute("aria-hidden","true"),this.#i.set(Rs(n),r),e.appendChild(r)}this.#re()}restoreSize(){this.#p(this.#P())}resetSize(){this.#e.element.style.removeProperty(bo),this.#e.element.style.removeProperty(yo),this.#e.clearPreference(Rd),this.syncResizeAnchor()}probe=document.createElement("div");#t=null;#n=null;#o=null;#r={x:"right",y:"bottom"};#i=new Map;#a(e){let n=this.#g(),r=n.left+dt,o=n.top+dt,i=n.left+n.width-dt,a=n.top+n.height-dt;return{left:Math.min(Math.max(e.left,r),e.right),top:Math.min(Math.max(e.top,o),e.bottom),right:Math.max(Math.min(e.right,i),e.left),bottom:Math.max(Math.min(e.bottom,a),e.top)}}dragging(){return this.#e.launcher.hasAttribute("data-dragging")||this.#e.root.querySelector(".header[data-dragging]")!==null}describeSurface(){let e=this.#e.element.getBoundingClientRect(),n=this.#g(),r=gy(e,n);return{placement:this.#e.element.getAttribute("placement"),collapseTo:this.#v().collapseTo,collapsed:this.#e.collapsed(),collapsible:this.#e.collapsible(),movable:this.#b()&&!r,draggable:this.#b(),fullBleed:r,box:{left:Math.round(e.left),top:Math.round(e.top),width:Math.round(e.width),height:Math.round(e.height)},viewport:{left:Math.round(n.left),top:Math.round(n.top),width:Math.round(n.width),height:Math.round(n.height)}}}moveTo(e,n={}){if(!this.#b())return!1;let r=n.announce===!0?this.#s():null,o=this.#g(),i=this.#e.element.getBoundingClientRect();if(gy(i,o))return!1;let[a,s]=e.split("-"),l=o.left+sn,c=o.top+sn,u=s==="left"?l:Math.max(l,o.left+o.width-sn-i.width),p=a==="top"?c:Math.max(c,o.top+o.height-sn-i.height),v={left:u,top:p,right:u+i.width,bottom:p+i.height},m=this.#e.launcher.offsetWidth,h=this.#e.launcher.offsetHeight;return this.#M(v,{left:s==="left"?v.left:v.right-m,top:a==="top"?v.top:v.bottom-h,width:m,height:h}),this.#T(),r!==null&&this.#e.announceSurfaceChange(this.#e.strings().chatMoved,r),!0}#s(){let e=this.#e.element.style.getPropertyValue("--ag-ui-inset"),n=this.#e.element.style.getPropertyValue("--ag-ui-launcher-inset"),r=this.#e.element.getAttribute("data-expand-corner"),o=this.#t,i=this.#n,a=this.#o;return()=>{this.#f("--ag-ui-inset",e),this.#f("--ag-ui-launcher-inset",n),r===null?this.#e.element.removeAttribute("data-expand-corner"):this.#e.element.setAttribute("data-expand-corner",r),this.#t=o,this.#n=i,this.#o=a,o===null?this.#e.clearPreference(Nd):this.#T(),this.syncResizeAnchor()}}#l(){return this.#v().resizeAxis}#c(){let e=this.#e.element.getBoundingClientRect(),n=this.#e.element.style.getPropertyValue(bo),r=this.#e.element.style.getPropertyValue(yo),o=this.#u(e,-1),i=o.x===null||o.y===null?this.#u(e,1):o;return this.#f(bo,n),this.#f(yo,r),{x:o.x??i.x??"right",y:o.y??i.y??"bottom"}}#u(e,n){this.#p({width:e.width+n,height:e.height+n});let r=this.#e.element.getBoundingClientRect(),o=(i,a)=>Math.abs(i-a)>=.5;return{x:o(r.width,e.width)?o(r.left,e.left)?"right":"left":null,y:o(r.height,e.height)?o(r.top,e.top)?"bottom":"top":null}}syncResizeAnchor(){if(!this.#e.connected())return;let e=this.#o??this.#c();this.#r=e,this.#e.element.setAttribute("data-resize-anchor",`${e.y}-${e.x}`),this.#re()}#f(e,n){if(n===""){this.#e.element.style.removeProperty(e);return}this.#e.element.style.setProperty(e,n)}#p(e){let n=this.#l();n!=="none"&&(e.width!==void 0&&this.#e.element.style.setProperty(bo,`${e.width}px`),e.height!==void 0&&n==="both"&&this.#e.element.style.setProperty(yo,`${e.height}px`))}releaseOwnedAxes(){let e=this.#l();e!=="both"&&this.#e.element.style.removeProperty(yo),e==="none"&&this.#e.element.style.removeProperty(bo)}#v(){let e=this.#e.element;return Ns(e.getAttribute("placement"),e.getAttribute("collapse-to"))}#d(){let e=this.#v().collapseTo;return e==="bar"||e==="none"}syncDock(e,n){let r=this.#e.element,o=this.#v().collapseTo,i=o==="bar"?e.offsetHeight:0;if(o==="bar")r.style.setProperty(Cd,`${i}px`);else if(o==="none"&&n!==null){let a=n.getBoundingClientRect(),s=this.#y();r.style.setProperty(Cd,`${Math.max(0,s.height-a.top)}px`),r.style.setProperty(my,`${Math.max(0,s.width-a.right)}px`)}else r.style.removeProperty(Cd);return(o!=="none"||n===null)&&r.style.removeProperty(my),r.toggleAttribute("data-dock-anchored",o==="none"&&n!==null),i}#b(){return this.#e.element.getAttribute("data-launcher-drag")!=="false"&&this.#v().launcherDraggable}#g(){let e=window.visualViewport,n=e?.width??window.innerWidth,r=e?.height??window.innerHeight,o=getComputedStyle(this.probe),i=l=>{let c=Number.parseFloat(o.getPropertyValue(l));return Number.isFinite(c)?c:0},a=i("padding-left"),s=i("padding-top");return{left:a,top:s,width:Math.max(0,n-a-i("padding-right")),height:Math.max(0,r-s-i("padding-bottom"))}}#y(){let e=document.documentElement;return{width:e.clientWidth||window.innerWidth,height:e.clientHeight||window.innerHeight}}publishVisualViewport(){let e=window.visualViewport;if(e==null)return;let n=this.#y().height;if(Math.abs(e.height-n)<1){this.#e.element.style.removeProperty("--ag-ui-visual-viewport-height"),this.#e.element.style.removeProperty("--ag-ui-visual-viewport-inset-bottom"),this.#e.element.style.removeProperty("--ag-ui-visual-viewport-inset-top");return}this.#e.element.style.setProperty("--ag-ui-visual-viewport-height",`${Math.round(e.height)}px`);let r=n-e.height-e.offsetTop;this.#e.element.style.setProperty("--ag-ui-visual-viewport-inset-bottom",`${Math.max(0,Math.round(r))}px`),this.#e.element.style.setProperty("--ag-ui-visual-viewport-inset-top",`${Math.max(0,Math.round(e.offsetTop))}px`)}#m(){let e=this.#e.launcher.offsetWidth,n=this.#e.launcher.offsetHeight,r=this.#t;if(r!==null)return{left:r.left,top:r.top,width:e,height:n};let o=this.#e.launcher.getBoundingClientRect();return{left:o.left+o.width/2-e/2,top:o.top+o.height/2-n/2,width:e,height:n}}#E(e){if(!this.#b())return;this.#t=e,this.#n=null;let n=this.#e.element.getBoundingClientRect(),r=Ad(this.#m(),{width:n.width,height:n.height},this.#g(),this.#y());this.#e.element.style.setProperty("--ag-ui-inset",r.hostInset),this.#e.element.style.setProperty("--ag-ui-launcher-inset",r.launcherInset),this.#o=r.corner,this.#e.element.setAttribute("data-expand-corner",`${r.corner.y}-${r.corner.x}`),this.syncResizeAnchor()}#h(e,n){this.#E({left:e,top:n})}#O(e,n){this.#h(e,n),this.#T()}#G(e,n){if(!this.#b())return{held:e,launcher:null};if(this.#t===null){let l=this.#m();this.#t={left:l.left,top:l.top}}let r=this.#t,o=go(e,this.#g(),dt),i=this.#o??this.#r;this.#e.element.style.setProperty("--ag-ui-inset",vy(i,o,this.#y())),this.#n={left:o.left,top:o.top};let a={...this.#m(),left:r.left+(o.left-n.left),top:r.top+(o.top-n.top)},s={...a,...Jt(a,this.#g())};return this.#e.element.style.setProperty("--ag-ui-launcher-inset",vo(o,s,i,this.#y()).launcherInset),{held:o,launcher:s}}#V(e,n){let{held:r,launcher:o}=this.#G(e,n);o!==null&&(this.#M(r,o),this.#T())}#M(e,n){let r=this.#g(),o=this.#y(),i={width:e.right-e.left,height:e.bottom-e.top},{corner:a}=Ad(n,i,r,o),s=vo(e,n,a,o);this.#e.element.style.setProperty("--ag-ui-inset",s.hostInset),this.#e.element.style.setProperty("--ag-ui-launcher-inset",s.launcherInset),this.#t={left:n.left,top:n.top},this.#n={left:e.left,top:e.top},this.#o=a,this.#e.element.setAttribute("data-expand-corner",`${a.y}-${a.x}`),this.syncResizeAnchor()}#j(e){if(!this.#b())return;let n=this.#e.element.getBoundingClientRect(),r=go({left:e.left,top:e.top,right:e.left+n.width,bottom:e.top+n.height},this.#g(),dt),o=this.#m(),i={...o,left:o.left+(r.left-e.left),top:o.top+(r.top-e.top)};this.#M(r,{...i,...Jt(i,this.#g())})}#T(){let e=this.#t;if(e===null)return;let n=this.#n;this.#e.writePreference(Nd,JSON.stringify(n===null?e:{...e,panel:n}))}restoreLauncherPosition(){let e=this.#D(),n=this.#t??e;if(n===null)return;let r=this.#n??e?.panel??null;if(r!==null){this.#t={left:n.left,top:n.top},this.#j(r);return}let o=this.#m();this.#E(Jt({...o,left:n.left,top:n.top},this.#g()))}#D(){let e=this.#e.readPreference(Nd);if(e===null)return null;try{let n=JSON.parse(e);if(typeof n!="object"||n===null)return null;let{left:r,top:o,panel:i}=n;if(typeof r!="number"||typeof o!="number")return null;let a=CA(i);return a===null?{left:r,top:o}:{left:r,top:o,panel:a}}catch{return null}}releaseLauncherPosition(){this.#b()||(this.#t=null,this.#n=null,this.#o=null,this.#e.element.style.removeProperty("--ag-ui-inset"),this.#e.element.style.removeProperty("--ag-ui-launcher-inset"),this.#e.element.removeAttribute("data-expand-corner"))}#W(e,n){if(n=this.#a(n),this.#d()){let o=this.#e.element.getBoundingClientRect();return n={left:e.x===this.#r.x?o.left:n.left,right:e.x===this.#r.x?o.right:n.right,top:e.y===this.#r.y?o.top:n.top,bottom:e.y===this.#r.y?o.bottom:n.bottom},this.#p({width:n.right-n.left,height:n.bottom-n.top}),n}if(this.#p({width:n.right-n.left,height:n.bottom-n.top}),e.x!==this.#r.x&&e.y!==this.#r.y)return n;let r=this.#r;if(this.#e.element.style.setProperty("--ag-ui-inset",vy(r,n,this.#y())),this.#t!==null){let o=this.#e.launcher.offsetWidth;this.#t={left:r.x==="left"?n.left:n.right-o,top:r.y==="top"?n.top:n.bottom-o}}return this.#n!==null&&(this.#n={left:n.left,top:n.top}),n}#R(e,n){let r=this.#W(e,n);this.#q({width:r.right-r.left,height:r.bottom-r.top}),this.#T(),this.syncResizeAnchor()}#re(){let e=`${this.#r.y==="top"?"bottom":"top"}-${this.#r.x==="left"?"right":"left"}`;for(let[n,r]of this.#i){let o=n===e;r.tabIndex=o?0:-1,o?r.removeAttribute("aria-hidden"):r.setAttribute("aria-hidden","true")}}#q(e){let n={...this.#P(),...e};this.#e.writePreference(Rd,JSON.stringify(n))}#P(){let e=this.#e.readPreference(Rd);if(e===null)return{};try{let n=JSON.parse(e);return typeof n=="object"&&n!==null?n:{}}catch{return{}}}};var Ms=class{region=document.createElement("div");#e=null;mount(){this.region.className="sr-only",this.region.setAttribute("role","status"),this.region.setAttribute("aria-live","polite"),this.region.setAttribute("aria-atomic","true")}announce(e){this.#e!==null&&clearTimeout(this.#e),this.region.textContent=e,this.#e=setTimeout(()=>{this.#e=null,this.region.textContent=""},oh)}dispose(){this.#e!==null&&(clearTimeout(this.#e),this.#e=null)}};function Ps(t,e,n,r){let o=document.createElement("div");o.className=`run-notice run-notice--${n}`,o.setAttribute("part",`run-notice run-notice-${n}`),o.setAttribute("role","status");let i=document.createElement("span");i.className="run-notice-icon",i.setAttribute("part","run-notice-icon"),i.textContent=t,i.setAttribute("aria-hidden","true");let a=document.createElement("span");if(a.className="run-notice-text",a.setAttribute("part","run-notice-text"),a.textContent=e,o.append(i,a),r!==void 0){let s=document.createElement("button");s.type="button",s.className="run-notice-undo",s.setAttribute("part","run-notice-undo"),s.textContent=r.label,s.addEventListener("click",()=>{s.disabled=!0,r.onActivate()}),o.append(s)}return o}var Ls=class{element;get agent(){return this.#r}#e;#t;#n;#o=new Map;#r=null;constructor(e=ge){this.element=document.createElement("div"),this.element.className="subagent",this.element.setAttribute("part","subagent"),this.#e=document.createElement("button"),this.#e.type="button",this.#e.className="subagent-row",this.#e.setAttribute("part","subagent-row"),this.#e.setAttribute("aria-expanded","false"),this.#e.disabled=!0;let n=document.createElement("span");n.className="subagent-icon",n.setAttribute("part","subagent-icon"),n.setAttribute("aria-hidden","true"),this.#t=document.createElement("span"),this.#t.className="subagent-status",this.#t.setAttribute("part","subagent-status"),this.#t.textContent=e.subAgentWorking,this.#e.append(n,this.#t),this.#n=document.createElement("div"),this.#n.className="subagent-steps",this.#n.setAttribute("part","subagent-steps"),this.#n.setAttribute("role","list"),this.#n.setAttribute("aria-label",e.subAgentSteps),this.#n.hidden=!0,this.#e.addEventListener("click",()=>{this.#s(this.#e.getAttribute("aria-expanded")!=="true")}),this.element.append(this.#e,this.#n)}report(e){this.element.setAttribute("data-phase",e.phase),e.agent!==null&&(this.#r=e.agent,this.element.setAttribute("data-agent",e.agent)),e.status!==null&&(this.#t.textContent=e.status),e.tool!==null&&this.#i(e.tool)}#i(e){let n=this.#o.get(e.toolCallId)??this.#a(e);if(e.ok===null){n.removeAttribute("data-ok");return}n.setAttribute("data-ok",String(e.ok))}#a(e){let n=document.createElement("div");n.className="subagent-step",n.setAttribute("part","subagent-step"),n.setAttribute("role","listitem"),n.setAttribute("data-tool-call-id",e.toolCallId);let r=document.createElement("span");r.className="subagent-step-icon",r.setAttribute("part","subagent-step-icon"),r.setAttribute("aria-hidden","true");let o=document.createElement("span");return o.className="subagent-step-name",o.setAttribute("part","subagent-step-name"),o.textContent=e.name,n.append(r,o),this.#n.appendChild(n),this.#o.set(e.toolCallId,n),this.#e.disabled=!1,n}#s(e){this.#n.hidden=!e,this.#e.setAttribute("aria-expanded",String(e))}};var OA=Object.values(Et);function by(t){return typeof t!="object"||t===null||Array.isArray(t)?null:t}function wo(t){return typeof t=="string"&&t!==""?t:null}function MA(t){let e=by(t);if(e===null)return null;let n=wo(e.toolCallId),r=wo(e.name),o=e.ok;return n===null||r===null||o!==null&&typeof o!="boolean"?null:{toolCallId:n,name:r,ok:o}}function yy(t){let e=by(t);if(e===null)return null;let n=wo(e.delegationId),r=e.phase;return n===null||typeof r!="string"||!OA.includes(r)?null:{delegationId:n,phase:r,agent:wo(e.agent),status:wo(e.status),tool:MA(e.tool)}}var zs=class{#e;#t=new Map;#n=new Map;constructor(e){this.#e=e}report(e){let n=yy(e);n!==null&&this.#i(n)}start(e,n,r){r!==null&&(this.#n.set(e,r),this.#i({delegationId:r,agent:n===""?null:n,phase:Et.STARTED,status:oe(this.#e.strings().subAgentDelegatedTo,{agent:n}),tool:null}))}finish(e){this.#o(e,Et.FINISHED,null)}fail(e,n){this.#o(e,Et.FAILED,n===""?this.#e.strings().subAgentFailed:n)}clear(){this.#t.clear(),this.#n.clear()}#o(e,n,r){let o=this.#n.get(e);if(o===void 0)return;let i=this.#t.get(o)?.agent??null;this.#i({delegationId:o,agent:i,phase:n,status:r===null?this.#r(i):r,tool:null})}#r(e){let n=this.#e.strings();return e===null?n.subAgentWorking:oe(n.subAgentFinished,{agent:e})}#i(e){let n=this.#e.card(e.delegationId);if(n===void 0)return;let r=this.#t.get(e.delegationId);r===void 0&&(r=new Ls(this.#e.strings()),this.#t.set(e.delegationId,r),n.subagentSlot.appendChild(r.element)),r.report(e),this.#e.follow()}};function PA(t){return{[J.PENDING]:t.toolRunning,[J.DEFERRED]:t.toolDeferred,[J.DONE]:t.toolDone,[J.ERROR]:t.toolError,[J.DECLINED]:t.toolDeclined,[J.INTERRUPTED]:t.toolInterrupted}}function LA(t){return{[J.DONE]:t.resultLabel,[J.ERROR]:t.errorLabel,[J.DECLINED]:t.declinedLabel,[J.INTERRUPTED]:t.interruptedLabel}}function zA(t){try{return JSON.stringify(JSON.parse(t),null,2)}catch{return t}}var xo=class{element;approvalSlot;subagentSlot;#e;#t;#n;#o;#r;#i;#a;args;#s;#l;#c=!1;constructor(e,n,r,o=ge,i={}){this.#a=o,this.args=n,this.#s=e,this.#l=i.formatPayload??null,this.element=document.createElement("div"),this.element.className="tool-call",this.element.setAttribute("data-tool-name",e),this.element.setAttribute("data-expanded","false");let a=document.createElement("div");a.className="tool-call-head",a.setAttribute("part","tool-card-head");let s=document.createElement("span");s.className="tool-call-icon",s.setAttribute("part","tool-card-icon"),s.setAttribute("aria-hidden","true");let l=document.createElement("span");l.className="tool-call-name",l.setAttribute("part","tool-card-name"),l.textContent=r??e,this.#e=document.createElement("span"),this.#e.className="tool-call-status",this.#u(J.PENDING),this.#t=document.createElement("span"),this.#t.className="tool-call-decision",this.#t.setAttribute("part","tool-card-decision"),this.#t.hidden=!0,a.append(s,l,this.#e,this.#t);let c=this.#p("args",o.argumentsLabel);this.#f(c.body,{kind:"arguments",toolName:e,args:n},JSON.stringify(n,null,2)),c.root.hidden=Object.keys(n).length===0;let u=this.#p("result",o.resultLabel);this.#o=u.root,this.#r=u.label,this.#i=u.body,u.root.hidden=!0,this.#n=document.createElement("button"),this.#n.type="button",this.#n.className="tool-call-toggle",this.#n.setAttribute("part","tool-card-toggle"),this.#n.setAttribute("aria-expanded","false"),this.#n.textContent=o.details,this.#n.addEventListener("click",()=>this.#d(!this.#v()));let p=document.createElement("div");p.className="tool-call-body",p.setAttribute("part","tool-card-body"),p.append(c.root,u.root),this.approvalSlot=document.createElement("div"),this.approvalSlot.className="tool-call-approval",this.approvalSlot.setAttribute("part","tool-card-approval"),this.subagentSlot=document.createElement("div"),this.subagentSlot.className="tool-call-subagent",this.subagentSlot.setAttribute("part","tool-card-subagent"),this.element.append(a,this.subagentSlot,this.#n,p,this.approvalSlot)}mark(e){this.#c||this.#u(e)}setAsking(e){this.element.toggleAttribute("data-asking",e)}recordDecision(e){this.element.setAttribute("data-decision",e),this.#t.textContent=e==="approved"?this.#a.decisionApproved:this.#a.decisionDeclined,this.#t.hidden=!1}get settled(){return this.#c}settle(e,n){this.#c||(this.#c=!0,this.#u(e),this.#r.textContent=LA(this.#a)[e],this.#f(this.#i,{kind:"result",toolName:this.#s,status:e,text:n},zA(n)),this.#o.hidden=!1)}#u(e){this.element.setAttribute("data-status",e),this.element.setAttribute("part",`tool-card tool-card-${e}`),this.#e.setAttribute("part",`tool-card-status tool-card-status-${e}`),this.#e.textContent=PA(this.#a)[e]}#f(e,n,r){let o=this.#l===null?null:this.#l(n);if(o===null){e.textContent=r;return}if(e.setAttribute("data-formatted","true"),typeof o=="string"){e.textContent=o;return}e.replaceChildren(o)}#p(e,n){let r=document.createElement("div");r.className=`tool-call-section tool-call-section--${e}`,r.setAttribute("part",`tool-card-section tool-card-${e}-section`);let o=document.createElement("span");o.className="tool-call-section-label",o.setAttribute("part",`tool-card-section-label tool-card-${e}-label`),o.textContent=n;let i=document.createElement("pre");return i.className=`tool-call-${e}`,i.setAttribute("part",`tool-card-${e}`),r.append(o,i),{root:r,label:o,body:i}}#v(){return this.element.getAttribute("data-expanded")==="true"}#d(e){this.element.setAttribute("data-expanded",String(e)),this.#n.setAttribute("aria-expanded",String(e))}};var wy=`
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
`;var xy=`
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
`;var Ey=`
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
`;var _y=`
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
`;var Sy=`
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
`;var Ty=`
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
`;var ky=`
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
`;var Ay=`
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
`;var Iy=`
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
:host([collapsed][placement="embedded"]) slot[name="above-composer"],
:host([collapsed][placement="embedded"]) .skill-chips,
:host([collapsed][placement="embedded"]) .skill-palette,
:host([collapsed][placement="embedded"]) .skill-hint {
  display: none;
}

/* The above-composer slot is in the list above because it is the host's content
   against the composer: a bare slot has no box of its own, so hiding the input
   row alone left the slotted row showing under the header bar. Its sibling slot
   below the composer is a footer and is left to the host. */

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

/* \u2500\u2500 Bottom bar (collapse-to="bar") \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
   The round launcher drawn as a strip along the bottom edge: the title, the
   unread badge and a running mark, with a history button beside it. The
   wrapper draws no box anywhere else, so the launcher lays out against the
   host as it always has; under the bar it is fixed to the bottom of the
   viewport, outside the host's box, which sits where the panel opens.

   Here rather than with the launcher because it restyles the launcher's
   collapsed and pressed states, which this module follows in the cascade.
   The strip stays drawn while the panel is open on a wide viewport, as the
   way to minimise it; the phone block hides it then. */
.dock-bar {
  display: contents;
}

.bar-history {
  display: none;
}

:host([data-collapsed-to="bar"]) .dock-bar {
  position: fixed;
  inset: auto var(--_viewport-inset-right) var(--_viewport-inset-bottom) var(--_viewport-inset-left);
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 4px;
  box-sizing: border-box;
  min-height: 40px;
  padding: 4px 8px;
  border-top: 1px solid var(--_border);
  background: var(--_bg);
  color: var(--_fg);
  pointer-events: auto;
}

/* A left-hand chat keeps its side: its controls and its panel at the left end. */
:host([data-collapsed-to="bar"][placement="bottom-left"]) .dock-bar {
  justify-content: flex-start;
}

/* The launcher as the strip's title button. Its resting state hides it behind
   an open panel; the bar keeps it on screen, so every part of that state is
   restated, and the hover and press scales are cancelled at the weight of the
   rules that set them. The title truncates rather than taking a fixed width,
   leaving room beside it for whatever a later release adds to the row. */
:host([data-collapsed-to="bar"]) .launcher {
  position: static;
  inset: auto;
  flex: 0 1 auto;
  justify-content: flex-start;
  gap: 8px;
  width: auto;
  min-width: 0;
  max-width: 100%;
  height: auto;
  min-height: 32px;
  padding: 4px 10px;
  border-radius: 8px;
  background: transparent;
  color: var(--_fg);
  box-shadow: none;
  touch-action: manipulation;
  opacity: 1;
  transform: none;
  visibility: visible;
}

:host([data-collapsed-to="bar"]) .launcher:hover {
  background: var(--_wash);
}

/* Bare at rest, like the history button beside it. The themes frame the
   round launcher with a border or a shadow at the weight of the rule above
   and later in the cascade, so the child combinator on the bar is there for
   weight, not scope: the launcher is always the bar's direct child. */
:host([data-collapsed-to="bar"]) .dock-bar > .launcher {
  border: 0;
  box-shadow: none;
}

:host([data-collapsed-to="bar"][collapsed]) .launcher:hover,
:host([data-collapsed-to="bar"][collapsed]) .launcher:active {
  transform: none;
}

:host([data-collapsed-to="bar"]) .launcher .icon-holder {
  flex: none;
  width: 18px;
  height: 18px;
}

:host([data-collapsed-to="bar"]) .rail-label {
  display: block;
  min-width: 0;
  overflow: hidden;
  font-size: 0.9em;
  font-weight: 600;
  white-space: nowrap;
  text-overflow: ellipsis;
}

:host([data-collapsed-to="bar"]) .launcher-badge {
  position: static;
  flex: none;
  box-shadow: none;
}

/* The running mark: the element already reflects a run as data-running, so
   the bar shows one without a state of its own. */
:host([data-collapsed-to="bar"][data-running]) .launcher::after {
  content: "";
  flex: none;
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: var(--_accent);
  animation: ag-ui-dock-running 1.2s ease-in-out infinite;
}

@keyframes ag-ui-dock-running {
  50% {
    opacity: 0.35;
  }
}

@media (prefers-reduced-motion: reduce) {
  :host([data-collapsed-to="bar"][data-running]) .launcher::after {
    animation: none;
  }
}

:host([data-collapsed-to="bar"]) .bar-history {
  display: inline-flex;
  flex: none;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  padding: 0;
  border: 0;
  border-radius: 8px;
  background: transparent;
  color: var(--_muted);
  font: inherit;
  cursor: pointer;
}

:host([data-collapsed-to="bar"]) .bar-history:hover {
  background: var(--_wash);
  color: var(--_fg);
}

/* Both declare a display of their own, so each needs its own hidden rule. */
:host([data-collapsed-to]) .dock-bar[hidden],
:host([data-collapsed-to]) .bar-history[hidden] {
  display: none;
}

/* History from the bar: the panel's own drawer, moved beside the bar while
   the panel is away, drawn as a popover standing on the bar's end. There is
   no backdrop; a press outside the bar closes it, as Escape does.

   Its outer edge keeps the panel's gutter, so the popover and the panel line
   up on the side they share. The bar is already inset by the host's reserved
   edges, so the gutter alone is the whole offset from it, and the width cap
   leaves the gutter free on both sides. A phone keeps a narrow margin
   instead, in the block below: the panel there is the whole screen, so there
   is no edge to line up with. */
:host([data-collapsed-to="bar"]) .dock-bar > .drawer {
  inset: auto var(--_edge-gutter) calc(100% + 8px) auto;
  width: min(320px, calc(var(--_viewport-width) - 2 * var(--_edge-gutter)));
  height: min(440px, calc(var(--_viewport-height) - var(--_dock-bottom, 0px) - 16px));
  border-radius: var(--_panel-radius);
  box-shadow: var(--_shadow);
  overflow: hidden;
}

:host([data-collapsed-to="bar"][placement="bottom-left"]) .dock-bar > .drawer {
  inset: auto auto calc(100% + 8px) var(--_edge-gutter);
}

@media (max-width: 600px) {
  :host([data-collapsed-to="bar"]:not([data-small-viewport="off"])) .dock-bar > .drawer {
    inset: auto 8px calc(100% + 8px) auto;
    width: min(320px, calc(100vw - 16px));
  }

  :host([data-collapsed-to="bar"][placement="bottom-left"]:not([data-small-viewport="off"])) .dock-bar > .drawer {
    inset: auto auto calc(100% + 8px) 8px;
  }
}

:host([data-collapsed-to="bar"]) .dock-bar > .drawer .drawer-backdrop {
  display: none;
}

/* The popover closes in one step. The in-panel drawer slides its panel out
   and holds the overlay's visibility until the slide ends; here the overlay
   is the popover's own box, rounded and clipped, so the slide moved the list
   inside a box that stayed put (read as a shrink) and the box went only once
   the slide had finished. This outweighs the drawer's own hidden rule, so the
   box hides at once, and whatever the list inside does is out of sight. The
   way in needs no rule: the drawer is moved into the bar as it opens, and a
   moved element starts no transition. Nothing is left for reduced motion. */
:host([data-collapsed-to="bar"]) .dock-bar > .drawer {
  transition: none;
}

/* Border-box, so the list's own border sits inside the popover's clipped box
   rather than 2px past its bottom edge. */
:host([data-collapsed-to="bar"]) .dock-bar > .drawer .drawer-panel {
  box-sizing: border-box;
  width: 100%;
  border: 1px solid var(--_border);
  border-radius: inherit;
  box-shadow: none;
}

/* \u2500\u2500 The host's own bar (collapse-to="none") \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
   Collapsed is hidden: no launcher, no rail, no header bar. The host's control
   calls the public API, and the panel rises from its anchor (the dock module)
   or from the placement's corner. Each placement's own collapsed rule is
   overridden at its weight or above, later in the cascade. */
:host([data-collapsed-to="none"][collapsed]) {
  pointer-events: none;
}

:host([data-collapsed-to="none"][collapsed]) .launcher {
  display: none;
}

:host([data-collapsed-to="none"][collapsed][placement="sidebar"]) {
  width: 0;
}

:host([data-collapsed-to="none"][collapsed][placement="embedded"]) {
  display: none;
}
`;var Ry=`
/* \u2500\u2500 Dock \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
   A docked panel rises from the bar along the bottom edge, or from the host's
   own control, instead of resting in a corner of its own. The element stamps
   what it collapses to as data-collapsed-to, and writes where the dock is as
   two private properties: --_dock-bottom, the bar's height or the distance
   from the layout viewport's bottom to the anchor's top, and --_dock-right,
   the anchor's distance from the right edge. Both are read with a 0px
   fallback, so a panel measured before the bar has laid out stands where a
   bar of no height would put it.

   The cap follows the token block's rule: what the host left free less the
   one gutter the anchored edge spends, so a panel grown to the cap runs from
   just above the bar to the far edge. A host therefore needs no inset to keep
   the panel off its bar; --ag-ui-inset still wins when set.

   These blocks restate tokens and nothing else, and sit ahead of the phone
   block at no more weight than it has, so on a phone the panel is the screen
   as every other placement is there. The bar measures 0 while it is not drawn
   (a phone with the panel open), which is what lets the side and full shapes
   below fall back to the whole height without a phone rule of their own.

   Each placement keeps its own side and shape; only the bottom edge moves. */
:host([data-collapsed-to="bar"]) {
  --_inset: var(
    --ag-ui-inset,
    auto calc(var(--_edge-gutter) + var(--_viewport-inset-right))
      calc(
        var(--_edge-gutter) + var(--_viewport-inset-bottom) +
          max(var(--_dock-bottom, 0px), var(--_keyboard-inset))
      )
      auto
  );
  --_max-height: var(--ag-ui-max-height, calc(var(--_viewport-height) - var(--_dock-bottom, 0px) - var(--_edge-gutter)));
}

:host([data-collapsed-to="bar"][placement="bottom-left"]) {
  --_inset: var(
    --ag-ui-inset,
    auto auto
      calc(
        var(--_edge-gutter) + var(--_viewport-inset-bottom) +
          max(var(--_dock-bottom, 0px), var(--_keyboard-inset))
      )
      calc(var(--_edge-gutter) + var(--_viewport-inset-left))
  );
}

/* The column and the full-screen panel stop at the bar rather than covering
   it, so the bar stays where the user minimises from. */
:host([data-collapsed-to="bar"][placement="side"]) {
  --_inset: var(
    --ag-ui-inset,
    calc(var(--_viewport-inset-top) + var(--_keyboard-inset-top)) var(--_viewport-inset-right)
      calc(var(--_viewport-inset-bottom) + var(--_dock-bottom, 0px)) auto
  );
  --_height: var(--ag-ui-height, calc(var(--_viewport-height) - var(--_dock-bottom, 0px)));
  --_max-height: var(--ag-ui-max-height, calc(var(--_viewport-height) - var(--_dock-bottom, 0px)));
}

:host([data-collapsed-to="bar"][placement="full"]) {
  --_inset: var(
    --ag-ui-inset,
    calc(var(--_viewport-inset-top) + var(--_keyboard-inset-top)) var(--_viewport-inset-right)
      calc(var(--_viewport-inset-bottom) + var(--_dock-bottom, 0px)) var(--_viewport-inset-left)
  );
  --_height: var(--ag-ui-height, calc(var(--_viewport-height) - var(--_dock-bottom, 0px)));
  --_max-height: var(--ag-ui-max-height, calc(var(--_viewport-height) - var(--_dock-bottom, 0px)));
}

/* The host's own bar: the panel stands the anchor gap (8px unless the host
   says otherwise) above the anchor and lines up with its right edge. Only
   once the element found the anchor; until then, and when it never does, the
   placement's own corner stands.

   The cap spends the larger of the gap and the gutter. The gutter alone is
   what this always spent, so the default is unchanged; but a host that opens
   the gap past the gutter to clear a tall toolbar would otherwise push a
   panel grown to the cap off the top of the window by the difference. */
:host([data-collapsed-to="none"][data-dock-anchored]) {
  --_inset: var(--ag-ui-inset, auto var(--_dock-right, 0px) calc(var(--_dock-bottom, 0px) + var(--_anchor-gap)) auto);
  --_max-height: var(
    --ag-ui-max-height,
    calc(var(--_viewport-height) - var(--_dock-bottom, 0px) - max(var(--_edge-gutter), var(--_anchor-gap)))
  );
}
`;var Cy=`
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
`;var Ny=`
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
`;var Oy=`
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
`;var My=`
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
`;var Py=`
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
`;var Ly=`
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
`;var zy=`
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

  /* The bottom bar shows only while collapsed. With the panel open the panel
     is the screen, its header's minimise control is the way back, and a
     second strip fixed to the bottom edge would sit under the keyboard while
     the composer has focus. Hidden by display, so the bar measures 0 and the
     host's padding goes with it. */
  :host([data-collapsed-to="bar"]:not([collapsed]):not([data-small-viewport="off"])) .dock-bar {
    display: none;
  }
}
`;var Dy=`
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
`;var $y=`
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
`;var Od=['[data-tool-display="inline"]','[data-tool-display="minimal"]','[data-tool-display="compact"]','[data-tool-display="full"]'].join(", "),ve=`:host(:where(:not(${Od})))`,Ds=`:host(:is(${Od}))`;function Mn(t){return`:host(:where(:not(${Od}))[data-tool-group-display="${t}"]) .tool-group-list .tool-call`}var Uy=`
/* \u2500\u2500 The folded tool-step group \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
   One quiet row per run of consecutive calls, the cards one click down as
   plain lines rather than boxes. Every rule is scoped to grouped mode, so
   none of it reaches a group drawn earlier once the host moves to a card
   mode. */
${ve} .tool-group {
  align-self: stretch;
  display: flex;
  flex-direction: column;
  min-width: 0;
}

${ve} .tool-group-head {
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

${ve} .tool-group-head:hover {
  background: var(--_hover);
  color: var(--_fg);
}

${ve} .tool-group-head:focus-visible {
  outline: 2px solid var(--_ring);
  outline-offset: 1px;
}

${ve} .tool-group-label {
  min-width: 0;
  font-weight: 500;
  color: var(--_ink-2);
  overflow-wrap: anywhere;
}

${ve} .tool-group-meta {
  min-width: 0;
  color: var(--_muted);
  overflow-wrap: anywhere;
}

/* Each note opens with a middle dot, which also parts the first note from
   the label. */
${ve} .tool-group-note::before {
  content: "\\00B7";
  margin: 0 6px 0 2px;
}

${ve} .tool-group[data-state="error"] .tool-group-meta {
  color: var(--_danger);
}

${ve} .tool-group-icon {
  flex: none;
  box-sizing: border-box;
  width: 14px;
  height: 14px;
  background: currentColor;
  mask: var(--_ico-check) center / contain no-repeat;
  color: var(--_success);
}

${ve} .tool-group[data-state="error"] .tool-group-icon {
  mask-image: var(--_ico-error);
  color: var(--_danger);
}

${ve} .tool-group[data-state="running"] .tool-group-icon {
  mask: none;
  background: none;
  border: 2px solid var(--_muted);
  border-top-color: transparent;
  border-radius: 50%;
  animation: ag-ui-tool-spin var(--_tool-spin-duration) linear infinite;
}

/* Waiting on the user: a steady accent dot rather than a spinner, and the
   count in the accent's ink. */
${ve} .tool-group[data-state="waiting"] .tool-group-icon {
  mask: none;
  border-radius: 50%;
  transform: scale(0.6);
  background: var(--_accent);
}

${ve} .tool-group[data-state="waiting"] .tool-group-meta {
  color: var(--_accent-ink);
  font-weight: 500;
}

${ve} .tool-group-chevron {
  flex: none;
  width: 12px;
  height: 12px;
  background: currentColor;
  mask: var(--_ico-chevron) center / contain no-repeat;
  opacity: 0.7;
  transition: transform var(--_motion) var(--_ease);
}

${ve} .tool-group[data-open="true"] .tool-group-chevron {
  transform: rotate(90deg);
}

@media (prefers-reduced-motion: reduce) {
  ${ve} .tool-group[data-state="running"] .tool-group-icon {
    animation: none;
  }
}

${ve} .tool-group-list {
  display: flex;
  flex-direction: column;
  gap: 2px;
  margin: 2px 0 4px 6px;
  padding-left: 13px;
  border-left: 1px solid var(--_border);
}

${ve} .tool-group[data-open="false"] .tool-group-list {
  display: none;
}

/* A card inside the group is one line of the list: icon, name, and its
   Details control at the end, with the arguments and result opening under
   the whole row. */
${ve} .tool-group .tool-call {
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

${ve} .tool-group .tool-call-head {
  flex: 1 1 auto;
  justify-content: flex-start;
}

${ve} .tool-group .tool-call-name {
  flex: 0 1 auto;
  font-weight: 450;
}

/* The repeat ordinal on a step whose label an earlier step has. */
${ve} .tool-call-repeat {
  color: var(--_muted);
  font-variant-numeric: tabular-nums;
}

${ve} .tool-group .tool-call-toggle {
  font-family: inherit;
  font-size: var(--_text-xs);
  color: var(--_muted);
}

${ve} .tool-group .tool-call-body,
${ve} .tool-group .tool-call-approval,
${ve} .tool-group .tool-call-subagent {
  flex-basis: 100%;
}

/* The inner display mode: how an opened group draws its calls. The same
   visibility rules the card modes apply to a flat card, so a call inside the
   group shows the regions the flat card of that mode shows. The flat inline
   mode's chrome rule is left out on purpose: a card in the group has already
   lost its box and is laid out as a row of the list, and that rule's padding
   and gap would undo the row. Selected from the host attribute, so changing it
   restyles groups already on screen. */
${Mn("compact")}[data-expanded="false"] .tool-call-section {
  display: none;
}

${Mn("inline")} .tool-call-section--args {
  display: none;
}

${Mn("minimal")} .tool-call-toggle,
${Mn("minimal")} .tool-call-body {
  display: none;
}

/* A call waiting on an approval shows its arguments in every inner mode, as it
   does in every card mode, and for the same reason: the arguments are what
   tell three gated calls of one tool apart. These come after the hides above,
   which they tie with on weight. The arguments region only, never every
   section, since the result region carries the hidden attribute until a
   result exists and a display value here would override it. The arguments
   region carries it too when the call has none, so it is excluded while
   hidden rather than framed empty. */
${Mn("minimal")}[data-status="deferred"] .tool-call-body {
  display: flex;
}

${Mn("compact")}[data-status="deferred"] .tool-call-section--args:not([hidden]),
${Mn("inline")}[data-status="deferred"] .tool-call-section--args:not([hidden]) {
  display: flex;
}

/* Grouping is decided as each card is built, so a card mode set afterwards
   finds groups already drawn. It flattens them: the group and its list stop
   generating boxes, the row and the repeat ordinals go, and every card lays
   out as a direct child of the answer, exactly as a card built in that mode
   does. */
${Ds} .tool-group,
${Ds} .tool-group-list {
  display: contents;
}

${Ds} .tool-group-head,
${Ds} .tool-call-repeat {
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
`;var Hy=`
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
   framing an empty RESULT heading under the question. The arguments region is
   hidden too when the call has none, and is left alone then, or it would frame
   an empty ARGUMENTS heading. */
:host([data-tool-display="compact"]) .tool-call[data-status="deferred"] .tool-call-section--args:not([hidden]),
:host([data-tool-display="inline"]) .tool-call[data-status="deferred"] .tool-call-section--args:not([hidden]) {
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
`;var Gy=`
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
`;var Fy=`
/* \u2500\u2500 Density \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */
:host([density="compact"]) {
  --_font-size: var(--ag-ui-font-size, 13px);
  --_space: var(--ag-ui-space, 6px);
  --_pad: var(--ag-ui-pad, 10px);
  --_msg-pad: var(--ag-ui-msg-pad, 5px 9px);
  --_msg-radius: var(--ag-ui-msg-radius, 10px);
}
`;var By=`
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
  /* The focus ring is drawn on the panel, so it has to hold 3:1 against
     --_bg whatever accent a host brings (WCAG 2.4.13). Two parts accent to
     three parts ink does that at the worst case, an accent at the far end
     from the ink (white on a light panel, black on a dark one): the ink
     alone sits far above 3:1, and three fifths of it keeps the mix there
     while the hue still reads as the accent. Half and half fell to 2.3:1
     for black on the code theme. The accent over transparent, as before,
     measured only the accent, and a light host accent fell to 1.6:1. */
  --_ring: var(--ag-ui-ring, color-mix(in oklch, var(--_accent) 40%, var(--_fg)));
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
  /* A size the user dragged, written inline on the host by the placement
     code, and read ahead of the host's tokens so the drag wins. There is no
     public token behind it; it is declared initial here only so a chat that
     was never dragged does not inherit one, from a dragged chat it is
     slotted into or from any page rule naming it. The inline value still
     beats this default. */
  --_drag-width: initial;
  --_drag-height: initial;
  /* Where a docked panel stands, written inline the same way by the placement
     code: the bottom bar's height, or the host anchor's distance from the
     bottom and right edges. Read only by the dock rules, each with a 0px
     fallback; declared initial so it never inherits either. */
  --_dock-bottom: initial;
  --_dock-right: initial;
  /* The gap between a panel and the host's own button it rises from under
     collapse-to="none". The button usually sits inside a taller toolbar, so a
     host sets this to the button's distance from the toolbar's top plus the
     clearance it wants, and the panel stands clear of the toolbar. */
  --_anchor-gap: var(--ag-ui-anchor-gap, 8px);
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
`;var Zy=`
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
`;var Vy=`
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
`;var jy=`
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
`;var Wy=`
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
`;var qy=`
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
`;var le={modern:':host(:not([theme~="classic"], [theme~="code"]))',quiet:':host(:not([theme~="classic"], [theme~="code"], [theme~="soft"], [theme~="ledger"]))'};var Yy=`
/* \u2500\u2500 status as an icon, never a pill \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
   The word stays for assistive technology through the card's own label; the
   pill only ever repeated what the icon said. */
${le.modern} .tool-call-status {
  position: absolute;
  width: 1px;
  height: 1px;
  overflow: hidden;
  clip-path: inset(50%);
  white-space: nowrap;
}

${le.modern} .tool-call:is([data-status="done"], [data-status="error"], [data-status="declined"]) .tool-call-icon::before {
  content: "";
  width: 14px;
  height: 14px;
  background: currentColor;
  mask: var(--_ico-check) center / contain no-repeat;
}

${le.modern} .tool-call[data-status="done"] .tool-call-icon {
  color: var(--_success);
}

${le.modern} .tool-call[data-status="error"] .tool-call-icon {
  color: var(--_danger);
}

${le.modern} .tool-call[data-status="error"] .tool-call-icon::before {
  mask-image: var(--_ico-error);
}

/* An interrupted call is muted like a declined one but keeps the base glyph
   rather than taking the declined mark: nobody refused it, it only did not
   finish. */
${le.modern} .tool-call:is([data-status="declined"], [data-status="interrupted"]) .tool-call-icon {
  color: var(--_muted);
}

${le.modern} .tool-call[data-status="declined"] .tool-call-icon::before {
  mask-image: var(--_ico-declined);
}

/* The settled icon inherits colour from the icon box, so the box's own glyph
   colour from the base rules must not win. */
${le.modern} .tool-call .tool-call-icon::before {
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
${le.modern} .message-actions:has(~ .message--assistant) {
  display: none;
}

${le.modern} .chart-block {
  box-sizing: border-box;
}

/* The baseline placeholder is the browser default, which measured under
   4.5:1 on every dark surface. A derived ink clears it in both schemes. */
${le.modern} .input::placeholder {
  color: var(--_ink-3);
  opacity: 1;
}
`;var Ky=`
/* \u2500\u2500 Quiet \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
   The default. Its tokens are the token defaults; this is the little
   structure it adds on top: no bubble for the agent, hairlines, and a
   composer that sits on the panel rather than in a band. */

${le.quiet} .chat {
  font-feature-settings: "cv11", "ss01";
  letter-spacing: -0.003em;
  line-height: var(--_leading);
}

${le.quiet} .header {
  padding: 12px 14px 12px 18px;
}

${le.quiet} .header-title {
  font-size: var(--_text-md);
  font-weight: 600;
  letter-spacing: -0.01em;
}

${le.quiet} .header-btn {
  color: var(--_ink-3);
  border-radius: 8px;
}

${le.quiet} .header-btn:hover {
  color: var(--_fg);
  background: var(--_hover);
}

${le.quiet} .message--user {
  border-radius: var(--_msg-radius);
  padding: 8px 12px;
}

${le.quiet} .message--assistant {
  padding: 0;
  max-width: 100%;
}

${le.quiet} .message--assistant a {
  color: inherit;
  text-decoration: underline;
  text-decoration-color: var(--_line-strong);
  text-underline-offset: 3px;
}

${le.quiet} .thoughts-toggle {
  color: var(--_muted);
  font-size: var(--_text-sm);
}

${le.quiet} .input-row {
  border-top: 0;
  padding-top: 4px;
}

${le.quiet} .composer {
  border-color: var(--_line-strong);
  box-shadow: 0 1px 2px rgb(0 0 0 / 0.04);
}

${le.quiet} .composer:focus-within {
  border-color: var(--_ink-3);
  box-shadow: 0 0 0 3px var(--_wash);
}

${le.quiet} .send {
  border-radius: 9px;
}

${le.quiet} :is(.suggestion-chip, .skill-chip) {
  background: transparent;
  border: 1px solid var(--_line);
  color: var(--_ink-2);
  border-radius: 999px;
}

${le.quiet} :is(.suggestion-chip, .skill-chip):hover {
  background: var(--_hover);
  color: var(--_fg);
}

${le.quiet} .confirm {
  border: 1px solid var(--_line-strong);
  border-radius: var(--_radius);
  padding: 14px;
  gap: 12px;
  box-shadow: 0 1px 2px rgb(0 0 0 / 0.04);
}

${le.quiet} .confirm-btn {
  border-radius: 8px;
  padding: 7px 14px;
  font-weight: 500;
  font-size: var(--_text-sm);
  border-color: var(--_line-strong);
}

${le.quiet} .confirm-btn--confirm {
  border-color: var(--_accent);
  font-weight: 600;
}

${le.quiet} .launcher {
  border: 1px solid var(--_line-strong);
  box-shadow: 0 1px 2px rgb(0 0 0 / 0.06), 0 8px 24px -10px rgb(0 0 0 / 0.25);
}
`;var Xy=`
/* \u2500\u2500 Scheme \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
   Every theme declares its colours with light-dark, so the scheme is one
   property. Matched as a word, so dark works alone (the default theme,
   dark) and beside a theme name (soft dark). auto follows the operating
   system through color-scheme itself, with no media query to keep in step.
   code is a dark-only theme and has no light half. */
/* Important, so a scheme word holds against a host rule that sets the
   element's color-scheme (a page that follows its own dark mode). A rule
   from outside the shadow tree beats every :host rule at normal weight, and
   the theme toggle writes the word; without this its press changed nothing.
   code stays last, so code light is still dark. */
:host([theme~="light"]) {
  color-scheme: light !important;
}

:host([theme~="dark"]),
:host([theme~="code"]) {
  color-scheme: dark !important;
}

:host([theme~="auto"]) {
  color-scheme: light dark;
}
`;var Jy=`
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
`;var Qy=`
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
`;var ew=`
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
`;var tw=`
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
`;var nw=`
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
`;var rw=`
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
`;var ow=`
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
`;var iw=[By,Vy,jy,Qy,qy,Xy,Fy,My,Oy,Ry,zy,Ly,Ny,Cy,Gy,Iy,ow,tw,rw,$y,Hy,Py,Ey,xy,wy,Dy,ew,ky,nw,Ty,Ay,_y,Sy,Uy,Zy,Yy,Ky,Jy,Wy].join("");function aw(t,e=[]){let n=new CSSStyleSheet;return n.replaceSync(iw),t.adoptedStyleSheets=[n,...e],n}function Eo(t,e,n){let r=document.createElement("button");r.type="button",r.className=`header-btn header-btn--${t}`,r.setAttribute("part",`header-button ${t}-button`),r.title=e,r.setAttribute("aria-label",e);let o=document.createElement("slot");return o.name=`icon-${t}`,o.append(document.createTextNode(n)),r.append(o),r}function wr(t,e,n,r){let o=document.createElement("span");o.className="icon-holder",o.setAttribute("part",e);let i=document.createElement("slot");if(i.name=t,r!==null){let a=document.createElement("img");a.className="icon-img",a.src=r,a.alt="",i.append(a)}else n!==null&&(i.innerHTML=n);return o.append(i),o}function sw(t){let{strings:e}=t,n=document.createElement("div");n.className="header",n.setAttribute("part","header");let r=t.title;r.className="header-title",r.setAttribute("part","title"),r.textContent=t.titleText,(t.host.querySelector('[slot="icon"]')!==null||t.iconUrl!==null)&&n.append(wr("icon","icon",null,t.iconUrl));let o=document.createElement("slot");o.name="header-actions";let i=document.createElement("div");i.className="header-controls",i.setAttribute("part","header-controls");let a=Eo("history",e.chatHistory,"\u2630");a.addEventListener("click",t.onHistory);let s=Eo("checkpoints",e.checkpoints,"\u21BA");s.addEventListener("click",t.onCheckpoints);let l=Eo("new",e.newChat,"\u271A");l.addEventListener("click",t.onNewChat);let c=Eo("collapse",e.collapse,"\u2014");c.addEventListener("click",t.onCollapse),t.withCheckpoints?i.append(a,s,l):i.append(a,l);let u=t.themeToggle;return u!==null&&(u.type="button",u.className="header-btn header-btn--theme",u.setAttribute("part","header-button theme-toggle"),u.title=e.toggleTheme,u.setAttribute("aria-label",e.toggleTheme),u.addEventListener("click",t.onToggleTheme,{signal:t.signal}),i.append(u)),i.append(c),n.append(r,o,i),{header:n,checkpoints:s}}function lw(t){let{launcher:e,badge:n,railLabel:r,bar:o,barHistory:i}=t;e.className="launcher",e.type="button",e.setAttribute("part","launcher"),e.setAttribute("aria-label",t.strings.expand),n.className="launcher-badge",n.setAttribute("part","launcher-badge"),n.setAttribute("aria-hidden","true"),n.hidden=!0,r.className="rail-label",r.setAttribute("part","rail-label"),r.setAttribute("aria-hidden","true"),r.textContent=t.titleText,e.replaceChildren(wr("launcher","launcher-icon",Yp,t.iconUrl),r,n),e.addEventListener("click",t.onOpen,{signal:t.signal}),o.className="dock-bar",o.setAttribute("part","bar"),i.className="bar-history",i.type="button",i.setAttribute("part","bar-history"),i.title=t.strings.chatHistory,i.setAttribute("aria-label",t.strings.chatHistory);let a=document.createElement("span");a.className="bar-history-glyph",a.setAttribute("aria-hidden","true"),a.textContent="\u2630",i.replaceChildren(a),i.addEventListener("click",t.onHistory,{signal:t.signal}),o.replaceChildren(e,i)}function cw(t){return t.getAttribute("data-unread-badge")!=="false"}function uw(t){return t.getAttribute("data-launcher-icon-url")??t.getAttribute("data-icon-url")}var DA=new Set(["ADDRESS","ARTICLE","ASIDE","BLOCKQUOTE","DD","DIV","DL","DT","FIGCAPTION","FIGURE","FOOTER","H1","H2","H3","H4","H5","H6","HEADER","HR","MAIN","NAV","OL","P","SECTION","UL"]);function $s(t){let e=t.cloneNode(!0);for(let n of Array.from(e.querySelectorAll("button")))n.remove();return{text:HA(dw(e)),html:e.innerHTML}}function dw(t){if(t.nodeType===Node.TEXT_NODE)return t.nodeValue.replace(/\s+/g," ");if(t.nodeType!==Node.ELEMENT_NODE)return"";let e=t,n=e.tagName;if(n==="BR")return`
`;if(n==="PRE")return`

${hw(e)}

`;if(n==="TABLE")return`

${UA(e)}

`;if(n==="UL"||n==="OL")return`

${$A(e,n==="OL")}

`;let r=pw(e);return DA.has(n)?`

${r}

`:r}function pw(t){let e="";for(let n of Array.from(t.childNodes))e+=dw(n);return e}function $A(t,e){return Array.from(t.children).map((n,r)=>`${e?`${r+1}. `:"- "}${pw(n).trim()}`).join(`
`)}function UA(t){return Array.from(t.querySelectorAll("tr")).map(e=>Array.from(e.children).map(n=>hw(n).replace(/\s+/g," ").trim()).join("	")).join(`
`)}function hw(t){return t.textContent}function HA(t){return t.replace(/[^\S\n]+\n/g,`
`).replace(/\n{3,}/g,`

`).trim()}var GA=1500;function Pd(t,e){if(mw(t)!==null)return;let n=Us(t,e.strings),r=e.text;r!==void 0&&n.appendChild(FA(e.strings,r,e.html)),e.onFeedback!==void 0&&n.append(fw("up",e.strings.feedbackUp,e.onFeedback),fw("down",e.strings.feedbackDown,e.onFeedback))}function Us(t,e){let n=mw(t);if(n!==null)return n;let r=document.createElement("div");return r.className="message-actions",r.setAttribute("part","message-actions"),r.setAttribute("role","group"),r.setAttribute("aria-label",e.messageActions),t.after(r),r}function mw(t){let e=t.nextElementSibling;return e?.classList.contains("message-actions")===!0?e:null}function Hs(t,e,n){let r=document.createElement("button");r.type="button",r.className=`message-action message-action--${t}`,r.setAttribute("part",`message-action message-action-${t}`),Md(r,e);let o=document.createElement("span");return o.className="message-action-icon",o.setAttribute("part",`message-action-icon message-action-icon-${t}`),o.setAttribute("aria-hidden","true"),o.innerHTML=n,r.appendChild(o),r}function Md(t,e){t.title=e,t.setAttribute("aria-label",e),t.dataset.tooltip=e}function FA(t,e,n){let r=Hs("copy",t.copyMessage,Kp);return r.addEventListener("click",()=>{BA(e(),n?.()).then(o=>{ZA(r,o?t.copied:t.copyFailed,t.copyMessage)})}),r}async function BA(t,e){let n=navigator.clipboard;if(n===void 0)return!1;if(e!==void 0&&typeof ClipboardItem=="function")try{return await n.write([new ClipboardItem({"text/plain":new Blob([t],{type:"text/plain"}),"text/html":new Blob([e],{type:"text/html"})})]),!0}catch{}try{return await n.writeText(t),!0}catch{return!1}}function fw(t,e,n){let r=Hs(t==="up"?"up":"down",e,t==="up"?Jp:Qp);return r.addEventListener("click",()=>{let o=r.getAttribute("aria-pressed")==="true";r.setAttribute("aria-pressed",o?"false":"true"),n(t)}),r.setAttribute("aria-pressed","false"),r}function ZA(t,e,n){Md(t,e),t.classList.add("message-action--confirmed"),setTimeout(()=>{Md(t,n),t.classList.remove("message-action--confirmed")},GA)}var Gs=class{#e;#t=null;constructor(e){this.#e=e}forget(){this.#t=null}attach(e,n){let r=this.#o(),o=r.has(an.COPY),i="messageId"in n?n:null,a=i!==null&&r.has(an.FEEDBACK),s=this.#e.threadId();(o||a)&&Pd(e,{strings:this.#e.strings(),...o?{text:()=>$s(e).text,html:()=>$s(e).html}:{},...a?{onFeedback:l=>{this.#e.element.dispatchEvent(new CustomEvent(Gl,{detail:{content:$s(e).text,rating:l,messageId:i.messageId,threadId:s,...i.runId===void 0?{}:{runId:i.runId}},bubbles:!0,composed:!0}))}}:{}}),r.has(an.RETRY)&&this.#n(Us(e,this.#e.strings()))}#n(e){this.#t?.querySelector(".message-action--retry")?.remove();let n=Hs("retry",this.#e.strings().retryMessage,Xp);n.addEventListener("click",()=>{this.#e.retry()}),e.prepend(n),this.#t=e}#o(){let e=this.#e.element.getAttribute("data-message-actions");return e===null?new Set([an.COPY,an.RETRY]):new Set(br(e))}};function VA(t,e){this.v=t,this.k=e}function gw(t,e){(e==null||e>t.length)&&(e=t.length);for(var n=0,r=Array(e);n<e;n++)r[n]=t[n];return r}function jA(t){if(Array.isArray(t))return t}function WA(t,e){var n=t==null?null:typeof Symbol<"u"&&t[Symbol.iterator]||t["@@iterator"];if(n!=null){var r,o,i,a,s=[],l=!0,c=!1;try{if(i=(n=n.call(t)).next,e===0){if(Object(n)!==n)return;l=!1}else for(;!(l=(r=i.call(n)).done)&&(s.push(r.value),s.length!==e);l=!0);}catch(u){c=!0,o=u}finally{try{if(!l&&n.return!=null&&(a=n.return(),Object(a)!==a))return}finally{if(c)throw o}}return s}}function qA(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function YA(t,e){return jA(t)||WA(t,e)||KA(t,e)||qA()}function KA(t,e){if(t){if(typeof t=="string")return gw(t,e);var n={}.toString.call(t).slice(8,-1);return n==="Object"&&t.constructor&&(n=t.constructor.name),n==="Map"||n==="Set"?Array.from(t):n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?gw(t,e):void 0}}function Fs(t){var e,n;function r(i,a){try{var s=t[i](a),l=s.value,c=l instanceof VA;Promise.resolve(c?l.v:l).then(function(u){if(c){var p=i==="return"&&l.k?i:"next";if(!l.k||u.done)return r(p,u);u=t[p](u).value}o(!!s.done,u)},function(u){r("throw",u)})}catch(u){o(2,u)}}function o(i,a){i===2?e.reject(a):e.resolve({value:a,done:i}),(e=e.next)?r(e.key,e.arg):n=null}this._invoke=function(i,a){return new Promise(function(s,l){var c={key:i,arg:a,resolve:s,reject:l,next:null};n?n=n.next=c:(e=n=c,r(i,a))})},typeof t.return!="function"&&(this.return=void 0)}Fs.prototype[typeof Symbol=="function"&&Symbol.asyncIterator||"@@asyncIterator"]=function(){return this},Fs.prototype.next=function(t){return this._invoke("next",t)},Fs.prototype.throw=function(t){return this._invoke("throw",t)},Fs.prototype.return=function(t){return this._invoke("return",t)};var Nw=Object.entries,vw=Object.setPrototypeOf,XA=Object.isFrozen,Ow=Object.getPrototypeOf,Mw=Object.getOwnPropertyDescriptor,De=Object.freeze,Ze=Object.seal,xr=Object.create,Pw=typeof Reflect<"u"&&Reflect,Zd=Pw.apply,Vd=Pw.construct;De||(De=function(e){return e});Ze||(Ze=function(e){return e});Zd||(Zd=function(e,n){for(var r=arguments.length,o=new Array(r>2?r-2:0),i=2;i<r;i++)o[i-2]=arguments[i];return e.apply(n,o)});Vd||(Vd=function(e){for(var n=arguments.length,r=new Array(n>1?n-1:0),o=1;o<n;o++)r[o-1]=arguments[o];return new e(...r)});var $t=Ae(Array.prototype.forEach);Array.prototype.indexOf;var JA=Ae(Array.prototype.lastIndexOf),bw=Ae(Array.prototype.pop),_o=Ae(Array.prototype.push),QA=Ae(Array.prototype.slice),eI=Ae(Array.prototype.splice),Er=Array.isArray,Ld=Lw(Set),zd=Ae(Set.prototype.add),So=Ae(Set.prototype.has),Pn=Ae(String.prototype.toLowerCase),Dd=Ae(String.prototype.toString),yw=Ae(String.prototype.match),To=Ae(String.prototype.replace),ww=Ae(String.prototype.indexOf),tI=Ae(String.prototype.trim),nI=Ae(Number.prototype.toString),rI=Ae(Boolean.prototype.toString),xw=typeof BigInt>"u"?null:Ae(BigInt.prototype.toString),Ew=typeof Symbol>"u"?null:Ae(Symbol.prototype.toString),Je=Ae(Object.prototype.hasOwnProperty),ko=Ae(Object.prototype.toString),Be=Ae(RegExp.prototype.test),Ut=Lw(TypeError);function Ae(t){return function(e){e instanceof RegExp&&(e.lastIndex=0);for(var n=arguments.length,r=new Array(n>1?n-1:0),o=1;o<n;o++)r[o-1]=arguments[o];return Zd(t,e,r)}}function Lw(t){return function(){for(var e=arguments.length,n=new Array(e),r=0;r<e;r++)n[r]=arguments[r];return Vd(t,n)}}function ae(t,e){let n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:Pn;if(vw&&vw(t,null),!Er(e))return t;let r=e.length;for(;r--;){let o=e[r];if(typeof o=="string"){let i=n(o);i!==o&&(XA(e)||(e[r]=i),o=i)}t[o]=!0}return t}function oI(t){for(let e=0;e<t.length;e++)Je(t,e)||(t[e]=null);return t}function rt(t){let e=xr(null);for(let r of Nw(t)){var n=YA(r,2);let o=n[0],i=n[1];Je(t,o)&&(Er(i)?e[o]=oI(i):i&&typeof i=="object"&&i.constructor===Object?e[o]=rt(i):e[o]=i)}return e}function iI(t){switch(typeof t){case"string":return t;case"number":return nI(t);case"boolean":return rI(t);case"bigint":return xw?xw(t):"0";case"symbol":return Ew?Ew(t):"Symbol()";case"undefined":return ko(t);case"function":case"object":{if(t===null)return ko(t);let e=t,n=lt(e,"toString");if(typeof n=="function"){let r=n(e);return typeof r=="string"?r:ko(r)}return ko(t)}default:return ko(t)}}function lt(t,e){for(;t!==null;){let r=Mw(t,e);if(r){if(r.get)return Ae(r.get);if(typeof r.value=="function")return Ae(r.value)}t=Ow(t)}function n(){return null}return n}function aI(t,e){for(;t!==null;){let n=Mw(t,e);if(n)return n.get?Ae(n.get):null;t=Ow(t)}return null}function sI(t){try{return Be(t,""),!0}catch{return!1}}var _w=De(["a","abbr","acronym","address","area","article","aside","audio","b","bdi","bdo","big","blink","blockquote","body","br","button","canvas","caption","center","cite","code","col","colgroup","content","data","datalist","dd","decorator","del","details","dfn","dialog","dir","div","dl","dt","element","em","fieldset","figcaption","figure","font","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","img","input","ins","kbd","label","legend","li","main","map","mark","marquee","menu","menuitem","meter","nav","nobr","ol","optgroup","option","output","p","picture","pre","progress","q","rp","rt","ruby","s","samp","search","section","select","shadow","slot","small","source","spacer","span","strike","strong","style","sub","summary","sup","table","tbody","td","template","textarea","tfoot","th","thead","time","tr","track","tt","u","ul","var","video","wbr"]),$d=De(["svg","a","altglyph","altglyphdef","altglyphitem","animatecolor","animatemotion","animatetransform","circle","clippath","defs","desc","ellipse","enterkeyhint","exportparts","filter","font","g","glyph","glyphref","hkern","image","inputmode","line","lineargradient","marker","mask","metadata","mpath","part","path","pattern","polygon","polyline","radialgradient","rect","stop","style","switch","symbol","text","textpath","title","tref","tspan","view","vkern"]),Ud=De(["feBlend","feColorMatrix","feComponentTransfer","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feDistantLight","feDropShadow","feFlood","feFuncA","feFuncB","feFuncG","feFuncR","feGaussianBlur","feImage","feMerge","feMergeNode","feMorphology","feOffset","fePointLight","feSpecularLighting","feSpotLight","feTile","feTurbulence"]),lI=De(["animate","color-profile","cursor","discard","font-face","font-face-format","font-face-name","font-face-src","font-face-uri","foreignobject","hatch","hatchpath","mesh","meshgradient","meshpatch","meshrow","missing-glyph","script","set","solidcolor","unknown","use"]),Hd=De(["math","menclose","merror","mfenced","mfrac","mglyph","mi","mlabeledtr","mmultiscripts","mn","mo","mover","mpadded","mphantom","mroot","mrow","ms","mspace","msqrt","mstyle","msub","msup","msubsup","mtable","mtd","mtext","mtr","munder","munderover","mprescripts"]),cI=De(["maction","maligngroup","malignmark","mlongdiv","mscarries","mscarry","msgroup","mstack","msline","msrow","semantics","annotation","annotation-xml","mprescripts","none"]),Sw=De(["#text"]),Tw=De(["accept","action","align","alt","autocapitalize","autocomplete","autopictureinpicture","autoplay","background","bgcolor","border","capture","cellpadding","cellspacing","checked","cite","class","clear","color","cols","colspan","command","commandfor","controls","controlslist","coords","crossorigin","datetime","decoding","default","dir","disabled","disablepictureinpicture","disableremoteplayback","download","draggable","enctype","enterkeyhint","exportparts","face","for","headers","height","hidden","high","href","hreflang","id","inert","inputmode","integrity","ismap","kind","label","lang","list","loading","loop","low","max","maxlength","media","method","min","minlength","multiple","muted","name","nonce","noshade","novalidate","nowrap","open","optimum","part","pattern","placeholder","playsinline","popover","popovertarget","popovertargetaction","poster","preload","pubdate","radiogroup","readonly","rel","required","rev","reversed","role","rows","rowspan","spellcheck","scope","selected","shape","size","sizes","slot","span","srclang","start","src","srcset","step","style","summary","tabindex","title","translate","type","usemap","valign","value","width","wrap","xmlns"]),Gd=De(["accent-height","accumulate","additive","alignment-baseline","amplitude","ascent","attributename","attributetype","azimuth","basefrequency","baseline-shift","begin","bias","by","class","clip","clippathunits","clip-path","clip-rule","color","color-interpolation","color-interpolation-filters","color-profile","color-rendering","cx","cy","d","dx","dy","diffuseconstant","direction","display","divisor","dominant-baseline","dur","edgemode","elevation","end","exponent","fill","fill-opacity","fill-rule","filter","filterunits","flood-color","flood-opacity","font-family","font-size","font-size-adjust","font-stretch","font-style","font-variant","font-weight","fx","fy","g1","g2","glyph-name","glyphref","gradientunits","gradienttransform","height","href","id","image-rendering","in","in2","intercept","k","k1","k2","k3","k4","kerning","keypoints","keysplines","keytimes","lang","lengthadjust","letter-spacing","kernelmatrix","kernelunitlength","lighting-color","local","marker-end","marker-mid","marker-start","markerheight","markerunits","markerwidth","maskcontentunits","maskunits","max","mask","mask-type","media","method","mode","min","name","numoctaves","offset","operator","opacity","order","orient","orientation","origin","overflow","paint-order","path","pathlength","patterncontentunits","patterntransform","patternunits","pointer-events","points","preservealpha","preserveaspectratio","primitiveunits","r","rx","ry","radius","refx","refy","repeatcount","repeatdur","restart","result","rotate","scale","seed","shape-rendering","slope","specularconstant","specularexponent","spreadmethod","startoffset","stddeviation","stitchtiles","stop-color","stop-opacity","stroke-dasharray","stroke-dashoffset","stroke-linecap","stroke-linejoin","stroke-miterlimit","stroke-opacity","stroke","stroke-width","style","surfacescale","systemlanguage","tabindex","tablevalues","targetx","targety","transform","transform-origin","text-anchor","text-decoration","text-orientation","text-rendering","textlength","type","u1","u2","unicode","values","vector-effect","viewbox","visibility","version","vert-adv-y","vert-origin-x","vert-origin-y","width","word-spacing","wrap","writing-mode","xchannelselector","ychannelselector","x","x1","x2","xmlns","y","y1","y2","z","zoomandpan"]),kw=De(["accent","accentunder","align","bevelled","close","columnalign","columnlines","columnspacing","columnspan","denomalign","depth","dir","display","displaystyle","encoding","fence","frame","height","href","id","largeop","length","linethickness","lquote","lspace","mathbackground","mathcolor","mathsize","mathvariant","maxsize","minsize","movablelimits","notation","numalign","open","rowalign","rowlines","rowspacing","rowspan","rspace","rquote","scriptlevel","scriptminsize","scriptsizemultiplier","selection","separator","separators","stretchy","subscriptshift","supscriptshift","symmetric","voffset","width","xmlns"]),Bs=De(["xlink:href","xml:id","xlink:title","xml:space","xmlns:xlink"]),uI=Ze(/{{[\w\W]*|^[\w\W]*}}/g),dI=Ze(/<%[\w\W]*|^[\w\W]*%>/g),pI=Ze(/\${[\w\W]*/g),hI=Ze(/^data-[\-\w.\u00B7-\uFFFF]+$/),fI=Ze(/^aria-[\-\w]+$/),Aw=Ze(/^(?:(?:(?:f|ht)tps?|mailto|tel|callto|sms|cid|xmpp|matrix):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i),mI=Ze(/^(?:\w+script|data):/i),gI=Ze(/[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g),vI=Ze(/^html$/i),bI=Ze(/^[a-z][.\w]*(-[.\w]+)+$/i),Fd=Ze(/<[/\w!]/g),Iw=Ze(/<[/\w]/g),yI=Ze(/<\/no(script|embed|frames)/i),Rw=Ze(/\/>/i),Me={element:1,attribute:2,text:3,cdataSection:4,entityReference:5,entityNode:6,processingInstruction:7,comment:8,document:9,documentType:10,documentFragment:11,notation:12},wI=De(ae({},["style","script","xmp","iframe","noembed","noframes","plaintext","noscript"])),xI=function(){return typeof window>"u"?null:window},EI=function(e,n){if(typeof e!="object"||typeof e.createPolicy!="function")return null;let r=null,o="data-tt-policy-suffix";n&&n.hasAttribute(o)&&(r=n.getAttribute(o));let i="dompurify"+(r?"#"+r:"");try{return e.createPolicy(i,{createHTML(a){return a},createScriptURL(a){return a}})}catch{return console.warn("TrustedTypes policy "+i+" could not be created."),null}},Cw=function(){return{afterSanitizeAttributes:[],afterSanitizeElements:[],afterSanitizeShadowDOM:[],beforeSanitizeAttributes:[],beforeSanitizeElements:[],beforeSanitizeShadowDOM:[],uponSanitizeAttribute:[],uponSanitizeElement:[],uponSanitizeShadowNode:[]}},Qt=function(e,n,r,o){return Je(e,n)&&Er(e[n])?ae(o.base?rt(o.base):{},e[n],o.transform):r},Bd=function(e,n,r){let o=Je(e,n)?e[n]:void 0;return o&&typeof o=="object"?rt(o):r()};function zw(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:xI(),e=O=>zw(O);if(e.version="3.4.17",e.removed=[],!t||!t.document||t.document.nodeType!==Me.document||!t.Element)return e.isSupported=!1,e;let n=t.document,r=n,o=r.currentScript;t.DocumentFragment;let i=t.HTMLTemplateElement,a=t.Node,s=t.Element,l=t.NodeFilter;t.NamedNodeMap===void 0&&(t.NamedNodeMap||t.MozNamedAttrMap),t.HTMLFormElement;let c=t.DOMParser,u=t.trustedTypes,p=s.prototype,v=lt(p,"cloneNode"),m=lt(p,"remove"),h=lt(p,"removeAttributeNode"),y=lt(p,"nextSibling"),k=lt(p,"childNodes"),T=lt(p,"parentNode"),E=lt(p,"shadowRoot"),H=lt(p,"attributes"),_=a&&a.prototype?lt(a.prototype,"nodeType"):null,f=a&&a.prototype?lt(a.prototype,"nodeName"):null,w=a&&a.prototype?lt(a.prototype,"ownerDocument"):null,g=function(d){return _?_(d):d.nodeType},S=function(d){return f?f(d):d.nodeName},M=aI(p,"namespaceURI"),L=function(d){return M?M(d):d.namespaceURI};if(typeof i=="function"){let O=n.createElement("template");O.content&&O.content.ownerDocument&&(n=O.content.ownerDocument)}let U,$="",fe,ct=!1,Ce=0,Un=function(){if(Ce>0)throw Ut('A configured TRUSTED_TYPES_POLICY callback (createHTML or createScriptURL) must not call DOMPurify.sanitize, as that causes infinite recursion. Do not pass a policy whose callbacks wrap DOMPurify as TRUSTED_TYPES_POLICY; see the "DOMPurify and Trusted Types" section of the README.')},Hn=function(d){Un(),Ce++;try{return U.createHTML(d)}finally{Ce--}},kx=function(d){Un(),Ce++;try{return U.createScriptURL(d)}finally{Ce--}},Ax=function(){return ct||(fe=EI(u,o),ct=!0),fe},Uo=n,ll=Uo.implementation,pp=Uo.createNodeIterator,Ix=Uo.createDocumentFragment,Rx=Uo.getElementsByTagName,Cx=r.importNode,be=Cw();e.isSupported=typeof Nw=="function"&&typeof T=="function"&&ll&&ll.createHTMLDocument!==void 0;let Nx=uI,Ox=dI,Mx=pI,Px=hI,Lx=fI,zx=mI,hp=gI,Dx=bI,fp=Aw,xe=null,cl=ae({},[..._w,...$d,...Ud,...Hd,...Sw]),Ee=null,ul=ae({},[...Tw,...Gd,...kw,...Bs]),yt=Object.seal(xr(null,{tagNameCheck:{writable:!0,configurable:!1,enumerable:!0,value:null},attributeNameCheck:{writable:!0,configurable:!1,enumerable:!0,value:null},allowCustomizedBuiltInElements:{writable:!0,configurable:!1,enumerable:!0,value:!1}})),kr=null,mp=null,Ht=Object.seal(xr(null,{tagCheck:{writable:!0,configurable:!1,enumerable:!0,value:null},attributeCheck:{writable:!0,configurable:!1,enumerable:!0,value:null}})),gp=!0,dl=!0,vp=!1,pl=!0,Ot=!1,tn=!0,nn=!1,hl=!1,Ho=null,Go=null,fl=!1,Gn=!1,Fo=!1,Bo=!1,bp=!0,yp=!1,wp="user-content-",ml=!0,gl=!1,rn=null,Fn={},on=null,xp=ae({},["annotation-xml","audio","colgroup","desc","foreignobject","head","iframe","math","mi","mn","mo","ms","mtext","noembed","noframes","noscript","plaintext","script","selectedcontent","style","svg","template","thead","title","video","xmp"]),Ep=null,_p=ae({},["audio","video","img","source","image","track"]),Sp=null,Tp=ae({},["alt","class","for","id","label","name","pattern","placeholder","role","summary","title","value","style","xmlns"]),Zo="http://www.w3.org/1998/Math/MathML",Vo="http://www.w3.org/2000/svg",wt="http://www.w3.org/1999/xhtml",Bn=wt,vl=!1,bl=null,$x=ae({},[Zo,Vo,wt],Dd),kp=De(["mi","mo","mn","ms","mtext"]),yl=ae({},kp),Ap=De(["annotation-xml"]),wl=ae({},Ap),Ux=ae({},["title","style","font","a","script"]),Ar=null,Hx=["application/xhtml+xml","text/html"],Gx="text/html",Re=null,Zn=null,Fx=n.createElement("form"),Ip=function(d){return d instanceof RegExp||d instanceof Function},xl=function(){let d=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};if(Zn&&Zn===d)return;(!d||typeof d!="object")&&(d={}),d=rt(d),Ar=Hx.indexOf(d.PARSER_MEDIA_TYPE)===-1?Gx:d.PARSER_MEDIA_TYPE,Re=Ar==="application/xhtml+xml"?Dd:Pn,xe=Qt(d,"ALLOWED_TAGS",cl,{transform:Re}),Ee=Qt(d,"ALLOWED_ATTR",ul,{transform:Re}),bl=Qt(d,"ALLOWED_NAMESPACES",$x,{transform:Dd}),Sp=Qt(d,"ADD_URI_SAFE_ATTR",Tp,{transform:Re,base:Tp}),Ep=Qt(d,"ADD_DATA_URI_TAGS",_p,{transform:Re,base:_p}),on=Qt(d,"FORBID_CONTENTS",xp,{transform:Re}),kr=Qt(d,"FORBID_TAGS",rt({}),{transform:Re}),mp=Qt(d,"FORBID_ATTR",rt({}),{transform:Re}),Fn=Je(d,"USE_PROFILES")?d.USE_PROFILES&&typeof d.USE_PROFILES=="object"?rt(d.USE_PROFILES):d.USE_PROFILES:!1,gp=d.ALLOW_ARIA_ATTR!==!1,dl=d.ALLOW_DATA_ATTR!==!1,vp=d.ALLOW_UNKNOWN_PROTOCOLS||!1,pl=d.ALLOW_SELF_CLOSE_IN_ATTR!==!1,Ot=d.SAFE_FOR_TEMPLATES||!1,tn=d.SAFE_FOR_XML!==!1,nn=d.WHOLE_DOCUMENT||!1,Gn=d.RETURN_DOM||!1,Fo=d.RETURN_DOM_FRAGMENT||!1,Bo=d.RETURN_TRUSTED_TYPE||!1,fl=d.FORCE_BODY||!1,bp=d.SANITIZE_DOM!==!1,yp=d.SANITIZE_NAMED_PROPS||!1,ml=d.KEEP_CONTENT!==!1,gl=d.IN_PLACE||!1,fp=sI(d.ALLOWED_URI_REGEXP)?d.ALLOWED_URI_REGEXP:Aw,Bn=typeof d.NAMESPACE=="string"?d.NAMESPACE:wt,yl=Bd(d,"MATHML_TEXT_INTEGRATION_POINTS",()=>ae({},kp)),wl=Bd(d,"HTML_INTEGRATION_POINTS",()=>ae({},Ap));let x=Bd(d,"CUSTOM_ELEMENT_HANDLING",()=>xr(null));if(yt=xr(null),Je(x,"tagNameCheck")&&Ip(x.tagNameCheck)&&(yt.tagNameCheck=x.tagNameCheck),Je(x,"attributeNameCheck")&&Ip(x.attributeNameCheck)&&(yt.attributeNameCheck=x.attributeNameCheck),Je(x,"allowCustomizedBuiltInElements")&&typeof x.allowCustomizedBuiltInElements=="boolean"&&(yt.allowCustomizedBuiltInElements=x.allowCustomizedBuiltInElements),Ze(yt),Ot&&(dl=!1),Fo&&(Gn=!0),Fn&&(xe=ae({},Sw),Ee=xr(null),Fn.html===!0&&(ae(xe,_w),ae(Ee,Tw)),Fn.svg===!0&&(ae(xe,$d),ae(Ee,Gd),ae(Ee,Bs)),Fn.svgFilters===!0&&(ae(xe,Ud),ae(Ee,Gd),ae(Ee,Bs)),Fn.mathMl===!0&&(ae(xe,Hd),ae(Ee,kw),ae(Ee,Bs))),Ht.tagCheck=null,Ht.attributeCheck=null,Je(d,"ADD_TAGS")&&(typeof d.ADD_TAGS=="function"?Ht.tagCheck=d.ADD_TAGS:Er(d.ADD_TAGS)&&(xe===cl&&(xe=rt(xe)),ae(xe,d.ADD_TAGS,Re))),Je(d,"ADD_ATTR")&&(typeof d.ADD_ATTR=="function"?Ht.attributeCheck=d.ADD_ATTR:Er(d.ADD_ATTR)&&(Ee===ul&&(Ee=rt(Ee)),ae(Ee,d.ADD_ATTR,Re))),Je(d,"ADD_FORBID_CONTENTS")&&Er(d.ADD_FORBID_CONTENTS)&&(on===xp&&(on=rt(on)),ae(on,d.ADD_FORBID_CONTENTS,Re)),ml&&(xe["#text"]=!0),nn&&ae(xe,["html","head","body"]),xe.table&&(ae(xe,["tbody"]),delete kr.tbody),d.TRUSTED_TYPES_POLICY){if(typeof d.TRUSTED_TYPES_POLICY.createHTML!="function")throw Ut('TRUSTED_TYPES_POLICY configuration option must provide a "createHTML" hook.');if(typeof d.TRUSTED_TYPES_POLICY.createScriptURL!="function")throw Ut('TRUSTED_TYPES_POLICY configuration option must provide a "createScriptURL" hook.');let C=U;U=d.TRUSTED_TYPES_POLICY;try{$=Hn("")}catch(N){throw U=C,N}}else d.TRUSTED_TYPES_POLICY===null?(U=void 0,$=""):(U===void 0&&(U=Ax()),U&&typeof $=="string"&&($=Hn("")));De&&De(d),Zn=d},Rp=ae({},[...$d,...Ud,...lI]),Cp=ae({},[...Hd,...cI]),Bx=function(d,x,C){return x.namespaceURI===wt?d==="svg":x.namespaceURI===Zo?d==="svg"&&(C==="annotation-xml"||yl[C]):!!Rp[d]},Zx=function(d,x,C){return x.namespaceURI===wt?d==="math":x.namespaceURI===Vo?d==="math"&&wl[C]:!!Cp[d]},Vx=function(d,x,C){return x.namespaceURI===Vo&&!wl[C]||x.namespaceURI===Zo&&!yl[C]?!1:!Cp[d]&&(Ux[d]||!Rp[d])},jx=function(d){let x=L(d),C=Pn(S(d)),N=T(d),B,W;return N&&g(N)===Me.element?(B={namespaceURI:L(N)},W=Pn(S(N))):(B={namespaceURI:Bn},W="template"),bl[x]?x===Vo?Bx(C,B,W):x===Zo?Zx(C,B,W):x===wt?Vx(C,B,W):!!(Ar==="application/xhtml+xml"&&bl[x]):!1},Gt=function(d){_o(e.removed,{element:d});try{T(d).removeChild(d)}catch{if(m(d),!T(d))throw Ut("a node selected for removal could not be detached from its tree and cannot be safely returned; refusing to sanitize in place")}},Np=function(d,x,C){try{h(d,x)}catch{try{d.removeAttribute(C)}catch{}}},El=function(d){Sl(d);let x=k(d);x&&$t(QA(x),N=>{try{m(N)}catch{}});let C=g(d)===Me.element?H(d):null;if(C)for(let N=C.length-1;N>=0;--N){let B=C[N],W=B&&B.name;typeof W=="string"&&Np(d,B,W)}},Vn=function(d,x,C){if(!C)try{C=x.getAttributeNode(d)}catch{C=null}_o(e.removed,{attribute:C||null,from:x});try{C?h(x,C):x.removeAttribute(d)}catch{try{x.removeAttribute(d)}catch{}}if(d==="is")if(Gn||Fo)try{Gt(x)}catch{}else try{x.setAttribute(d,"")}catch{}},Op=function(d){let x=H(d);if(x)for(let C=x.length-1;C>=0;--C){let N=x[C],B=N&&N.name;typeof B!="string"||Ee[Re(B)]||Np(d,N,B)}},_l=function(d,x){let C=arguments.length>2&&arguments[2]!==void 0?arguments[2]:!1,N=[d];for(;N.length>0;){let B=N.pop();if(x(B)===!1)continue;if(C&&g(B)===Me.element){let ee=E(B);Ft(ee)&&N.push(ee)}let W=k(B);if(W)for(let ee=W.length-1;ee>=0;--ee)N.push(W[ee])}},Sl=function(d){_l(d,x=>{g(x)===Me.element&&Op(x)})},Tl=function(d){let x=[];return _l(d,C=>{x.push(C)},!0),x},Wx=function(d,x){let C=Ld();$t(Tl(d),N=>{g(N)===Me.element&&zd(C,N)}),$t(x,N=>{g(N)===Me.element&&!So(C,N)&&Op(N)})},Mp=function(d,x){let C=!1;return $t(e.removed,N=>{N.element&&(C=C||N.element===d,Sl(N.element))}),Wx(d,x),C},qx=8,Yx=function(d,x){let C=rn,N=null,B=()=>(N||(N=Ld(),$t(x,W=>{zd(N,W)})),N);for(let W=0;;W++){let ee=Tl(d),Pe=[d],xt=!1;if($t(ee,je=>{g(je)===Me.documentFragment?_o(Pe,je):!xt&&!So(C,je)&&(xt=So(B(),je))}),!xt)return;if(W>=qx)throw Ut("the tree kept changing during in-place sanitization; refusing to return it");$t(Pe,(je,Ke)=>{Kx(je,Ke>0,d,B())})}},Kx=function(d,x,C,N){let B=kl(d),W;for(;W=B.nextNode();)!So(N,W)||So(rn,W)||(x&&ut(be.uponSanitizeShadowNode,W,null),Il(W,C),Rl(W,C),Ft(W.content)&&Rr(W.content))},Xx=function(d){rn&&zd(rn,d)},Pp=function(d,x){return tn?d==="patchsrc"?!0:d==="for"&&x!=="label"&&x!=="output":!1},Jx=function(d){tn&&_l(d,x=>{let C=g(x);if(C===Me.processingInstruction||C===Me.comment&&Be(Iw,x.data)){try{m(x)}catch{}return!1}if(C===Me.element){let N=x,B=Re(S(x));try{N.hasAttribute&&N.hasAttribute("patchsrc")&&N.removeAttribute("patchsrc"),N.hasAttribute&&N.hasAttribute("for")&&Pp("for",B)&&N.removeAttribute("for")}catch{}}return!0})},Lp=function(d){let x=null,C=null;if(fl)d="<remove></remove>"+d;else{let W=yw(d,/^[\r\n\t ]+/);C=W&&W[0]}Ar==="application/xhtml+xml"&&Bn===wt&&(d='<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>'+d+"</body></html>");let N=U?Hn(d):d;if(Bn===wt)try{x=new c().parseFromString(N,Ar)}catch{}if(!x||!x.documentElement){x=ll.createDocument(Bn,"template",null);try{x.documentElement.innerHTML=vl?$:N}catch{}}let B=x.body||x.documentElement;return d&&C&&B.insertBefore(n.createTextNode(C),B.childNodes[0]||null),Bn===wt?Rx.call(x,nn?"html":"body")[0]:nn?x.documentElement:B},kl=function(d){let x=w?w(d):d.ownerDocument;return pp.call(x||d,d,l.SHOW_ELEMENT|l.SHOW_COMMENT|l.SHOW_TEXT|l.SHOW_PROCESSING_INSTRUCTION|l.SHOW_CDATA_SECTION,null)},jo=function(d){return d=To(d,Nx," "),d=To(d,Ox," "),d=To(d,Mx," "),d},Al=function(d){var x;zp(d);let C=(x=d.querySelectorAll)===null||x===void 0?void 0:x.call(d,"template");C&&$t(C,N=>{Ft(N.content)&&Al(N.content)})},zp=function(d){d.normalize();let x=w?w(d):d.ownerDocument,C=pp.call(x||d,d,l.SHOW_TEXT|l.SHOW_COMMENT|l.SHOW_CDATA_SECTION|l.SHOW_PROCESSING_INSTRUCTION,null),N=C.nextNode();for(;N;)N.data=jo(N.data),N=C.nextNode()},Wo=function(d){let x=f?f(d):null;return typeof x!="string"||Re(x)!=="form"?!1:typeof d.nodeName!="string"||typeof d.textContent!="string"||typeof d.removeChild!="function"||d.attributes!==H(d)||typeof d.removeAttribute!="function"||typeof d.removeAttributeNode!="function"||typeof d.getAttributeNode!="function"||typeof d.setAttribute!="function"||typeof d.namespaceURI!="string"||typeof d.insertBefore!="function"||typeof d.hasChildNodes!="function"||d.nodeType!==_(d)||d.childNodes!==k(d)},Ft=function(d){if(!_||typeof d!="object"||d===null)return!1;try{return _(d)===Me.documentFragment}catch{return!1}},Ir=function(d){if(!_||typeof d!="object"||d===null)return!1;try{return typeof _(d)=="number"}catch{return!1}};function ut(O,d,x){O.length!==0&&$t(O,C=>{C.call(e,d,x,Zn)})}let Qx=function(d,x){return!!(tn&&d.hasChildNodes()&&!Ir(d.firstElementChild)&&Be(Fd,d.textContent)&&Be(Fd,d.innerHTML)||tn&&wI[x]&&g(d)===Me.element&&L(d)===wt&&(Ir(d.firstElementChild)||typeof d.textContent=="string"&&Be(Fd,d.textContent))||d.nodeType===Me.processingInstruction||tn&&d.nodeType===Me.comment&&Be(Iw,d.data))},qo=function(d,x){if(d instanceof RegExp)return Be(d,x);if(d instanceof Function){for(var C=arguments.length,N=new Array(C>2?C-2:0),B=2;B<C;B++)N[B-2]=arguments[B];return!!d(x,...N)}return!1},eE=function(d,x,C){if(!kr[x]&&Up(x)&&qo(yt.tagNameCheck,x))return!1;if(ml&&!on[x]&&!on[Pn(x)]){let N=T(d),B=k(d);if(B&&N){let W=B.length;for(let ee=W-1;ee>=0;--ee){let Pe=d===C?v(B[ee],!0):B[ee];N.insertBefore(Pe,y(d))}}}return Gt(d),!0},Dp=function(d,x,C,N){return d.length===0?x:x===C||x===N?rt(x):x},jn=function(d,x){return d===x||T(d)!==null?!1:(gl&&Sl(d),!0)},Il=function(d,x){if(Xx(d),ut(be.beforeSanitizeElements,d,null),jn(d,x))return!0;if(Wo(d))return Gt(d),!0;let C=Re(S(d));if(xe=Dp(be.uponSanitizeElement,xe,cl,Ho),ut(be.uponSanitizeElement,d,{tagName:C,allowedTags:xe}),jn(d,x))return!0;if(Qx(d,C))return Gt(d),!0;if(kr[C]||!(Ht.tagCheck instanceof Function&&Ht.tagCheck(C))&&!xe[C]){let N=eE(d,C,x);return N===!1&&(ut(be.afterSanitizeElements,d,null),jn(d,x))?!0:N}if(g(d)===Me.element&&!jx(d)||(C==="noscript"||C==="noembed"||C==="noframes")&&Be(yI,d.innerHTML))return Gt(d),!0;if(Ot&&d.nodeType===Me.text){let N=jo(d.textContent);d.textContent!==N&&(_o(e.removed,{element:d.cloneNode()}),d.textContent=N)}return ut(be.afterSanitizeElements,d,null),jn(d,x)},$p=function(d,x,C){if(mp[x]||Pp(x,d)||bp&&(x==="id"||x==="name")&&(C in n||C in Fx))return!1;let N=Ee[x]||Ht.attributeCheck instanceof Function&&Ht.attributeCheck(x,d);return dl&&Be(Px,x)||gp&&Be(Lx,x)?!0:N?Sp[x]||Be(fp,To(C,hp,""))||(x==="src"||x==="xlink:href"||x==="href")&&d!=="script"&&ww(C,"data:")===0&&Ep[d]||vp&&!Be(zx,To(C,hp,""))?!0:!C:Up(d)&&qo(yt.tagNameCheck,d)&&qo(yt.attributeNameCheck,x,d)||x==="is"&&yt.allowCustomizedBuiltInElements&&qo(yt.tagNameCheck,C)},tE=ae({},["annotation-xml","color-profile","font-face","font-face-format","font-face-name","font-face-src","font-face-uri","missing-glyph"]),Up=function(d){return!tE[Pn(d)]&&Be(Dx,d)},nE=function(d,x,C,N){if(U&&typeof u=="object"&&typeof u.getAttributeType=="function"&&!C)switch(u.getAttributeType(d,x)){case"TrustedHTML":return Hn(N);case"TrustedScriptURL":return kx(N)}return N},rE=function(d,x,C,N){try{return C?d.setAttributeNS(C,x,N):d.setAttribute(x,N),Wo(d)?(Gt(d),!1):!0}catch{return Vn(x,d),!1}},Hp=function(d,x){return tn&&Be(/((--!?|])>)|<\/(style|script|title|xmp|textarea|noscript|iframe|noembed|noframes)/i,x)?!0:Pn(d)==="attributename"&&yw(x,"href")!==null},Rl=function(d,x){if(ut(be.beforeSanitizeAttributes,d,null),jn(d,x))return;let C=d.attributes;if(!C||Wo(d))return;Ee=Dp(be.uponSanitizeAttribute,Ee,ul,Go);let N={attrName:"",attrValue:"",keepAttr:!0,allowedAttributes:Ee,forceKeepAttr:void 0},B=C.length,W=Re(d.nodeName);for(;B--;){let ee=C[B],Pe=ee.name,xt=ee.namespaceURI,je=ee.value,Ke=Re(Pe),Wn=je,Xe=Pe==="value"?Wn:tI(Wn),Gp=!1;if(N.attrName=Ke,N.attrValue=Xe,N.keepAttr=!0,N.forceKeepAttr=void 0,ut(be.uponSanitizeAttribute,d,N),Xe=N.attrValue,yp&&(Ke==="id"||Ke==="name")&&ww(Xe,wp)!==0&&(Vn(Pe,d,ee),Xe=wp+Xe,Gp=!0),Hp(Pe,Xe)){Vn(Pe,d,ee);continue}if(!N.forceKeepAttr){if(!N.keepAttr){Vn(Pe,d,ee);continue}if(!pl&&Be(Rw,Xe)){Vn(Pe,d,ee);continue}if(Ot&&(Xe=jo(Xe)),!$p(W,Ke,Xe)){Vn(Pe,d,ee);continue}Xe=nE(W,Ke,xt,Xe),Xe!==Wn&&rE(d,Pe,xt,Xe)&&Gp&&bw(e.removed)}}ut(be.afterSanitizeAttributes,d,null),jn(d,x)},Rr=function(d){let x=null,C=kl(d);for(ut(be.beforeSanitizeShadowDOM,d,null);x=C.nextNode();)if(ut(be.uponSanitizeShadowNode,x,null),Il(x,d),Rl(x,d),Ft(x.content)&&Rr(x.content),g(x)===Me.element){let N=E(x);Ft(N)&&(Cl(N),Rr(N))}Ot&&zp(d),ut(be.afterSanitizeShadowDOM,d,null)},Cl=function(d){let x=[{node:d,shadow:null}];for(;x.length>0;){let C=x.pop();if(C.shadow){Rr(C.shadow);continue}let N=C.node,B=g(N)===Me.element,W=k(N);if(W)for(let ee=W.length-1;ee>=0;--ee)x.push({node:W[ee],shadow:null});if(B){let ee=f?f(N):null;if(typeof ee=="string"&&Re(ee)==="template"){let Pe=N.content;Ft(Pe)&&x.push({node:Pe,shadow:null})}}if(B){let ee=E(N);Ft(ee)&&x.push({node:null,shadow:ee},{node:ee,shadow:null})}}};return e.sanitize=function(O){let d=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},x=null,C=null,N=null,B=null;if(vl=!O,vl&&(O="<!-->"),typeof O!="string"&&!Ir(O)&&(O=iI(O),typeof O!="string"))throw Ut("dirty is not a string, aborting");if(!e.isSupported)return O;hl?(xe=Ho,Ee=Go):xl(d),(be.uponSanitizeElement.length>0||be.uponSanitizeAttribute.length>0)&&(xe=rt(xe)),be.uponSanitizeAttribute.length>0&&(Ee=rt(Ee)),e.removed=[];let W=gl&&typeof O!="string"&&Ir(O),ee=[],Pe=rn;if(W){Jx(O);let Ke=S(O);if(typeof Ke=="string"){let Wn=Re(Ke);if(!xe[Wn]||kr[Wn])throw El(O),Ut("root node is forbidden and cannot be sanitized in-place")}if(Wo(O))throw El(O),Ut("root node is clobbered and cannot be sanitized in-place");ee=Tl(O),rn=Ld()}else if(Ir(O))x=Lp("<!---->"),C=x.ownerDocument.importNode(O,!0),C.nodeType===Me.element&&C.nodeName==="BODY"||C.nodeName==="HTML"?x=C:x.appendChild(C),Cl(x);else{if(!Gn&&!Ot&&!nn&&O.indexOf("<")===-1)return U&&Bo?Hn(O):O;if(x=Lp(O),!x)return Gn?null:Bo?$:""}x&&fl&&Gt(x.firstChild);let xt=W?O:x;try{W&&Cl(O);let Ke=kl(xt);for(;N=Ke.nextNode();)Il(N,xt),Rl(N,xt),Ft(N.content)&&Rr(N.content);W&&Yx(O,ee)}catch(Ke){throw W&&(El(O),Mp(O,ee)),Ke}finally{rn=Pe}if(W){if(Mp(O,ee))throw Ut("a node selected for removal could not be safely returned; refusing to sanitize in place");return Ot&&Al(O),O}if(Gn){if(Ot&&Al(x),Fo)for(B=Ix.call(x.ownerDocument);x.firstChild;)B.appendChild(x.firstChild);else B=x;return(Ee.shadowroot||Ee.shadowrootmode)&&(B=Cx.call(r,B,!0)),B}let je=nn?x.outerHTML:x.innerHTML;return nn&&xe["!doctype"]&&x.ownerDocument&&x.ownerDocument.doctype&&x.ownerDocument.doctype.name&&Be(vI,x.ownerDocument.doctype.name)&&(je="<!DOCTYPE "+x.ownerDocument.doctype.name+`>
`+je),Ot&&(je=jo(je)),U&&Bo?Hn(je):je},e.setConfig=function(){let O=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};xl(O),hl=!0,Ho=xe,Go=Ee},e.clearConfig=function(){Zn=null,hl=!1,Ho=null,Go=null,U=fe,$=""},e.isValidAttribute=function(O,d,x){Zn||xl({});let C=Re(O),N=Re(d);return typeof x=="string"&&(Hp(d,x)||!pl&&Be(Rw,x))?!1:$p(C,N,x)},e.addHook=function(O,d){typeof d=="function"&&Je(be,O)&&_o(be[O],d)},e.removeHook=function(O,d){if(Je(be,O)){if(d!==void 0){let x=JA(be[O],d);return x===-1?void 0:eI(be[O],x,1)[0]}return bw(be[O])}},e.removeHooks=function(O){Je(be,O)&&(be[O]=[])},e.removeAllHooks=function(){be=Cw()},e}var Dw=zw();function Kd(){return{async:!1,breaks:!1,extensions:null,gfm:!0,hooks:null,pedantic:!1,renderer:null,silent:!1,tokenizer:null,walkTokens:null}}var $n=Kd();function qw(t){$n=t}var zn={exec:()=>null};function _r(t){let e=[];return n=>{let r=Math.max(0,Math.min(3,n-1)),o=e[r];return o||(o=t(r),e[r]=o),o}}function X(t,e=""){let n=typeof t=="string"?t:t.source,r={replace:(o,i)=>{let a=typeof i=="string"?i:i.source;return a=a.replace($e.caret,"$1"),n=n.replace(o,a),r},getRegex:()=>new RegExp(n,e)};return r}var _I=((t="")=>{try{return!!new RegExp("(?<=1)(?<!1)"+t)}catch{return!1}})(),$e={codeRemoveIndent:/^(?: {0,3}\t| {1,4})/gm,outputLinkReplace:/\\([\[\]])/g,indentCodeCompensation:/^(\s+)(?:```)/,beginningSpace:/^\s+/,endingHash:/#$/,startingSpaceChar:/^ /,endingSpaceChar:/ $/,endingSpaceTabChar:/[ \t]$/,nonSpaceChar:/[^ ]/,newLineCharGlobal:/\n/g,tabCharGlobal:/\t/g,leadingSpaceTab:/^[ \t]+/,multipleSpaceGlobal:/\s+/g,blankLine:/^[ \t]*$/,doubleBlankLine:/\n[ \t]*\n[ \t]*$/,blockquoteStart:/^ {0,3}>/,blockquoteSetextReplace:/\n {0,3}((?:=+|-+) *)(?=\n|$)/g,blockquoteSetextReplace2:/^ {0,3}>[ \t]?/gm,listReplaceNesting:/^ {1,4}(?=( {4})*[^ ])/g,listIsTask:/^\[[ xX]\] +\S/,listReplaceTask:/^\[[ xX]\] +/,listTaskCheckbox:/\[[ xX]\]/,anyLine:/\n.*\n/,hrefBrackets:/^<(.*)>$/,tableDelimiter:/[:|]/,tableAlignChars:/^\||\| *$/g,tableRowBlankLine:/\n[ \t]*$/,tableAlignRight:/^ *-+: *$/,tableAlignCenter:/^ *:-+: *$/,tableAlignLeft:/^ *:-+ *$/,startATag:/^<a /i,endATag:/^<\/a>/i,startPreScriptTag:/^<(pre|code|kbd|script)(\s|>)/i,endPreScriptTag:/^<\/(pre|code|kbd|script)(\s|>)/i,startAngleBracket:/^</,endAngleBracket:/>$/,pedanticHrefTitle:/^([^'"]*[^\s])\s+(['"])(.*)\2/,unicodeAlphaNumeric:/[\p{L}\p{N}]/u,numericCharacterReference:/&#(?:(\d{1,7})|[Xx]([A-Fa-f0-9]{1,6}));/,numericCharacterReferenceOrAmpersand:/&#(?:(\d{1,7})|[Xx]([A-Fa-f0-9]{1,6}));|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/g,escapeTest:/[&<>"']/,escapeReplace:/[&<>"']/g,escapeTestNoEncode:/[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/,escapeReplaceNoEncode:/[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/g,caret:/(^|[^\[])\^/g,percentDecode:/%25/g,findPipe:/\|/g,splitPipe:/ \|/,slashPipe:/\\\|/g,carriageReturn:/\r\n|\r/g,spaceLine:/^ +$/gm,notSpaceStart:/^\S*/,endingNewline:/\n$/,listItemRegex:t=>new RegExp(`^( {0,3}${t})((?:[	 ][^\\n]*)?(?:\\n|$))`),nextBulletRegex:_r(t=>new RegExp(`^ {0,${t}}(?:[*+-]|\\d{1,9}[.)])((?:[ 	][^\\n]*)?(?:\\n|$))`)),hrRegex:_r(t=>new RegExp(`^ {0,${t}}((?:-[ 	]*){3,}|(?:_[ 	]*){3,}|(?:\\*[ 	]*){3,})(?:\\n+|$)`)),fencesBeginRegex:_r(t=>new RegExp(`^ {0,${t}}(?:\`\`\`|~~~)`)),headingBeginRegex:_r(t=>new RegExp(`^ {0,${t}}#`)),htmlBeginRegex:_r(t=>new RegExp(`^ {0,${t}}(?:</?(?:${Co})(?: +|$|/?>)|<(?:(?:script|pre|style|textarea)(?:[\\s>]|$)|!--)|<\\?|<![A-Za-z]|<!\\[CDATA\\[)`,"i")),blockquoteBeginRegex:_r(t=>new RegExp(`^ {0,${t}}>`))},SI=/^(?:[ \t]*(?:\n|$))+/,TI=/^((?: {4}| {0,3}\t)[^\n]+(?:\n(?:[ \t]*(?:\n|$))*)?)+/,kI=/^ {0,3}(`{3,}(?=[^`\n]*(?:\n|$))|~{3,})([^\n]*)(?:\n|$)(?:|([\s\S]*?)(?:\n|$))(?: {0,3}\1[~`]* *(?=\n|$)|$)/,Ro=/^ {0,3}((?:-[\t ]*){3,}|(?:_[ \t]*){3,}|(?:\*[ \t]*){3,})(?:\n+|$)/,AI=/^ {0,3}(#{1,6})(?=\s|$)(.*)(?:\n+|$)/,Xd=/ {0,3}(?:[*+-]|\d{1,9}[.)])/,Yw=/^(?!bull |blockCode|fences|blockquote|heading|html|table)((?:.|\n(?!\s*?\n|bull |fences|blockquote|heading|hr|html|table))+?)\n {0,3}(=+|-+) *(?:\n+|$)/,Kw=X(Yw).replace(/bull/g,Xd).replace(/blockCode/g,/(?: {4}| {0,3}\t)/).replace(/fences/g,/ {0,3}(?:`{3,}|~{3,})/).replace(/blockquote/g,/ {0,3}>/).replace(/heading/g,/ {0,3}#{1,6}(?:\s|$)/).replace(/hr/g,/ {0,3}(?:(?:-[\t ]*){3,}|(?:_[ \t]*){3,}|(?:\*[ \t]*){3,})(?:\n+|$)/).replace(/html/g,/ {0,3}<[^\n>]+>\n/).replace(/\|table/g,"").getRegex(),II=X(Yw).replace(/bull/g,Xd).replace(/blockCode/g,/(?: {4}| {0,3}\t)/).replace(/fences/g,/ {0,3}(?:`{3,}|~{3,})/).replace(/blockquote/g,/ {0,3}>/).replace(/heading/g,/ {0,3}#{1,6}(?:\s|$)/).replace(/hr/g,/ {0,3}(?:(?:-[\t ]*){3,}|(?:_[ \t]*){3,}|(?:\*[ \t]*){3,})(?:\n+|$)/).replace(/html/g,/ {0,3}<[^\n>]+>\n/).replace(/table/g,/ {0,3}\|?(?:[:\- ]*\|)+[\:\- ]*\n/).getRegex(),Jd=/^([^\n]+(?:\n(?!hr|heading|lheading|blockquote|fences|list|html|table|[ \t]+\n)[^\n]+)*)/,RI=/^[^\n]+/,Qd=/(?!\s*\])(?:\\[\s\S]|[^\[\]\\])+/,CI=X(/^ {0,3}\[(label)\]: *(?:\n[ \t]*)?([^<\s][^\s]*|<.*?>)(?:(?: +(?:\n[ \t]*)?| *\n[ \t]*)(title))? *(?:\n+|$)/).replace("label",Qd).replace("title",/(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/).getRegex(),NI=X(/^(bull)([ \t][^\n]*?)?(?:\n|$)/).replace(/bull/g,Xd).getRegex(),Co="address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option|p|param|search|section|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul",ep=/<!--(?:-?>|[\s\S]*?(?:-->|$))/,OI=X("^ {0,3}(?:<(script|pre|style|textarea)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n*|$)|comment[^\\n]*(\\n+|$)|<\\?[\\s\\S]*?(?:\\?>[^\\n]*\\n*|$)|<![A-Z][\\s\\S]*?(?:>[^\\n]*\\n*|$)|<!\\[CDATA\\[[\\s\\S]*?(?:\\]\\]>[^\\n]*\\n*|$)|</?(tag)(?: +|\\n|/?>)[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$)|<(?!(?:script|pre|style|textarea)(?![a-z0-9-]))([a-z][a-z0-9-]*)(?:attribute)*? */?>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$)|</[a-z][a-z0-9-]*\\s*>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$))","i").replace("comment",ep).replace("tag",Co).replace("attribute",/ +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/).getRegex(),Xw=t=>X(Jd).replace("hr",Ro).replace("heading"," {0,3}#{1,6}(?:\\s|$)").replace("|lheading","").replace("|table","").replace("blockquote"," {0,3}>").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*(?:\\n|$))|~~~)[^\\n]*(?:\\n|$)").replace("list",t).replace("html"," {0,3}(?:</?(?:tag)(?: +|\\n|/?>)|<(?:(?:script|pre|style|textarea)(?:[\\s>]|$)|!--)|<\\?|<![A-Za-z]|<!\\[CDATA\\[)").replace("tag",Co).getRegex(),MI=Xw(/ {0,3}(?:[*+-]|1[.)])[ \t]+[^ \t\n]/),PI=Xw(/ {0,3}(?:[*+-]|\d{1,9}[.)])(?:[ \t]|\n|$)/),LI=X(/^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/).replace("paragraph",PI).getRegex(),tp={blockquote:LI,code:TI,def:CI,fences:kI,heading:AI,hr:Ro,html:OI,lheading:Kw,list:NI,newline:SI,paragraph:MI,table:zn,text:RI},$w=X("^ *([^\\n ].*)\\n {0,3}((?:\\| *)?:?-+:? *(?:\\| *:?-+:? *)*(?:\\| *)?)(?:\\n((?:(?! *\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)").replace("hr",Ro).replace("heading"," {0,3}#{1,6}(?:\\s|$)").replace("blockquote"," {0,3}>").replace("code","(?: {4}| {0,3}	)[^\\n]").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*(?:\\n|$))|~~~)[^\\n]*(?:\\n|$)").replace("list"," {0,3}(?:[*+-]|1[.)])[ \\t]").replace("html"," {0,3}(?:</?(?:tag)(?: +|\\n|/?>)|<(?:(?:script|pre|style|textarea)(?:[\\s>]|$)|!--)|<\\?|<![A-Za-z]|<!\\[CDATA\\[)").replace("tag",Co).getRegex(),zI={...tp,lheading:II,table:$w,paragraph:X(Jd).replace("hr",Ro).replace("heading"," {0,3}#{1,6}(?:\\s|$)").replace("|lheading","").replace("table",$w).replace("blockquote"," {0,3}>").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*(?:\\n|$))|~~~)[^\\n]*(?:\\n|$)").replace("list"," {0,3}(?:[*+-]|1[.)])[ \\t]+[^ \\t\\n]").replace("html"," {0,3}(?:</?(?:tag)(?: +|\\n|/?>)|<(?:(?:script|pre|style|textarea)(?:[\\s>]|$)|!--)|<\\?|<![A-Za-z]|<!\\[CDATA\\[)").replace("tag",Co).getRegex()},DI={...tp,html:X(`^ *(?:comment *(?:\\n|\\s*$)|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)|<tag(?:"[^"]*"|'[^']*'|\\s[^'"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))`).replace("comment",ep).replace(/tag/g,"(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:|[^\\w\\s@]*@)\\b").getRegex(),def:/^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/,heading:/^(#{1,6})(.*)(?:\n+|$)/,fences:zn,lheading:/^(.+?)\n {0,3}(=+|-+) *(?:\n+|$)/,paragraph:X(Jd).replace("hr",Ro).replace("heading",` *#{1,6} *[^
]`).replace("lheading",Kw).replace("|table","").replace("blockquote"," {0,3}>").replace("|fences","").replace("|list","").replace("|html","").replace("|tag","").getRegex()},$I=/^\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/,UI=/^(`+)([^`]|[^`][\s\S]*?[^`])\1(?!`)/,Jw=/^( {2,}|\\)\n(?!\s*$)[ \t]*/,HI=/^(`+|[^`])(?:(?= {2,}\n)|[\s\S]*?(?:(?=[\\<!\[`*_]|\b_|$)|[^ ](?= {2,}\n)))/,Nt=/[\p{P}\p{S}]/u,Sr=/[\s\p{P}\p{S}]/u,No=/[^\s\p{P}\p{S}]/u,GI=X(/^((?![*_])punctSpace)/,"u").replace(/punctSpace/g,Sr).getRegex(),FI=/[\p{Pi}\p{Ps}"']/u,Qw=/(?!~)[\p{P}\p{S}]/u,BI=/(?!~)[\s\p{P}\p{S}]/u,ZI=/(?:[^\s\p{P}\p{S}]|~)/u,VI=X(/link|precode-code|html/,"g").replace("link",/\[(?:[^\[\]`]|(?<a>`+)[^`]+\k<a>(?!`))*?\]\((?:\\[\s\S]|[^\\\(\)]|\((?:\\[\s\S]|[^\\\(\)])*\))*\)/).replace("precode-",_I?"(?<!`)()":"(^^|[^`])").replace("code",/(?<b>`+)[^`]+\k<b>(?!`)/).replace("html",/<(?! )[^<>]*?>/).getRegex(),ex=/^(?:\*+(?:((?!\*)punct)|([^\s*]))?)|^_+(?:((?!_)punct)|([^\s_]))?/,jI=X(ex,"u").replace(/punct/g,Nt).getRegex(),WI=X(ex,"u").replace(/punct/g,Qw).getRegex(),qI=/^(?:\*+(?:((?!\*)(?!openQuote)punct)|([^\s*]))?)|^_+(?:((?!_)(?!openQuote)punct)|([^\s_]))?/,YI=X(qI,"u").replace(/openQuote/g,FI).replace(/punct/g,Nt).getRegex(),tx="^[^_*]*?__[^_*]*?\\*[^_*]*?(?=__)|[^*]+(?=[^*])|(?!\\*)punct(\\*+)(?=[\\s]|$)|notPunctSpace(\\*+)(?!\\*)(?=punctSpace|$)|(?!\\*)punctSpace(\\*+)(?=notPunctSpace)|[\\s](\\*+)(?!\\*)(?=punct)|(?!\\*)punct(\\*+)(?!\\*)(?=punct)|notPunctSpace(\\*+)(?=notPunctSpace)",KI=X(tx,"gu").replace(/notPunctSpace/g,No).replace(/punctSpace/g,Sr).replace(/punct/g,Nt).getRegex(),XI=X(tx,"gu").replace(/notPunctSpace/g,ZI).replace(/punctSpace/g,BI).replace(/punct/g,Qw).getRegex(),JI="^[^_*]*?__[^_*]*?\\*[^_*]*?(?=__)|[^*]+(?=[^*])|(?!\\*)punct(\\*+)(?=[\\s]|$)|notPunctSpace(\\*+)(?!\\*)(?=punctSpace|$)|(?!\\*)[\\s](\\*+)(?=notPunctSpace)|[\\s](\\*+)(?!\\*)(?=punct)|(?!\\*)punct(\\*+)(?!\\*)(?=punct)|(?:(?!\\*)punct|notPunctSpace)(\\*+)(?!\\*)(?=notPunctSpace)",QI=X(JI,"gu").replace(/notPunctSpace/g,No).replace(/punctSpace/g,Sr).replace(/punct/g,Nt).getRegex(),eR=X("^[^_*]*?\\*\\*[^_*]*?_[^_*]*?(?=\\*\\*)|[^_]+(?=[^_])|(?!_)punct(_+)(?=[\\s]|$)|notPunctSpace(_+)(?!_)(?=punctSpace|$)|(?!_)punctSpace(_+)(?=notPunctSpace)|[\\s](_+)(?!_)(?=punct)|(?!_)punct(_+)(?!_)(?=punct)","gu").replace(/notPunctSpace/g,No).replace(/punctSpace/g,Sr).replace(/punct/g,Nt).getRegex(),tR="^[^_*]*?\\*\\*[^_*]*?_[^_*]*?(?=\\*\\*)|[^_]+(?=[^_])|(?!_)punct(_+)(?=[\\s]|$)|notPunctSpace(_+)(?!_)(?=punctSpace|$)|(?!_)[\\s](_+)(?=notPunctSpace)|[\\s](_+)(?!_)(?=punct)|(?!_)punct(_+)(?!_)(?=punct)|(?:(?!_)punct|notPunctSpace)(_+)(?!_)(?=notPunctSpace)",nR=X(tR,"gu").replace(/notPunctSpace/g,No).replace(/punctSpace/g,Sr).replace(/punct/g,Nt).getRegex(),rR=X(/^~~?(?:((?!~)punct)|[^\s~])/,"u").replace(/punct/g,Nt).getRegex(),oR="^[^~]+(?=[^~])|(?!~)punct(~~?)(?=[\\s]|$)|notPunctSpace(~~?)(?!~)(?=punctSpace|$)|(?!~)punctSpace(~~?)(?=notPunctSpace)|[\\s](~~?)(?!~)(?=punct)|(?!~)punct(~~?)(?!~)(?=punct)|notPunctSpace(~~?)(?=notPunctSpace)",iR=X(oR,"gu").replace(/notPunctSpace/g,No).replace(/punctSpace/g,Sr).replace(/punct/g,Nt).getRegex(),aR=X(/\\(punct)/,"gu").replace(/punct/g,Nt).getRegex(),sR=X(/(`+)(?:[^`]|[^`][\s\S]*?[^`])\1(?!`)|`+|\\(punct)/,"gu").replace(/punct/g,Nt).getRegex(),lR=X(/^<(scheme:[^\s\x00-\x1f<>]*|email)>/).replace("scheme",/[a-zA-Z][a-zA-Z0-9+.-]{1,31}/).replace("email",/[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/).getRegex(),cR=X(ep).replace("(?:-->|$)","-->").getRegex(),uR=X("^comment|^</[a-zA-Z][a-zA-Z0-9-]*\\s*>|^<[a-zA-Z][a-zA-Z0-9-]*(?:attribute)*?\\s*/?>|^<\\?[\\s\\S]*?\\?>|^<![a-zA-Z]+\\s[\\s\\S]*?>|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>").replace("comment",cR).replace("attribute",/\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/).getRegex(),nx=/\[(?:\\[\s\S]|[^\[\]\\])*\]/,Vs=X(/(?:\[(?:brackets|\\[\s\S]|[^\[\]\\])*\]|\\[\s\S]|`+(?!`)[^`]*?`+(?!`)|``+(?=\])|[^\[\]\\`])*?/).replace("brackets",nx).getRegex(),dR=X(/^!?\[(label)\]\([ \t\n]*(href)(?:(?:[ \t]+(?:\n[ \t]*)?|\n[ \t]*)(title))?[ \t\n]*\)/).replace("label",Vs).replace("href",/<(?:\\.|[^\n<>\\])+>|[^ \t\n\x00-\x1f]+|(?=\))/).replace("title",/"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/).getRegex(),pR=X(/^!?\[(label)\]\[(ref)\]/).replace("label",Vs).replace("ref",Qd).getRegex(),hR=X(/^!?\[(ref)\](?:\[\])?/).replace("ref",Qd).getRegex(),Uw=/(?!\s*\])(?:\\[\s\S]|[^\[\]\\]){1,999}/,fR=X(/(?:[^\[\]\\`]*(?:\[(?:brackets|\\[\s\S]|[^\[\]\\])*\]|\\[\s\S]|`+(?!`)[^`]*?`+(?!`)|``+(?=\]))){0,999}?[^\[\]\\`]*?/).replace("brackets",nx).getRegex(),mR=X("reflink|nolink(?!\\()","g").replace("reflink",X(/^!?\[(label)\]\[(ref)\]/).replace("label",fR).replace("ref",Uw).getRegex()).replace("nolink",X(/^!?\[(ref)\](?:\[\])?/).replace("ref",Uw).getRegex()).getRegex(),Hw=/[hH][tT][tT][pP][sS]?|[fF][tT][pP]/,gR=/[A-Za-z0-9._+-]+@[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![\w-])/,vR=X(/(?:mailto:email|xmpp:email(?:\/[A-Za-z0-9@.]+)?)/).replace(/email/g,gR).getRegex(),np={_backpedal:zn,anyPunctuation:aR,anyPunctuationOutsideCode:sR,autolink:lR,blockSkip:VI,br:Jw,code:UI,del:zn,delLDelim:zn,delRDelim:zn,emStrongLDelim:jI,emStrongRDelimAst:KI,emStrongRDelimUnd:eR,escape:$I,link:dR,nolink:hR,punctuation:GI,reflink:pR,reflinkSearch:mR,tag:uR,text:HI,url:zn},bR={...np,emStrongLDelim:YI,emStrongRDelimAst:QI,emStrongRDelimUnd:nR,link:X(/^!?\[(label)\]\((.*?)\)/).replace("label",Vs).getRegex(),reflink:X(/^!?\[(label)\]\s*\[([^\]]*)\]/).replace("label",Vs).getRegex()},Wd={...np,emStrongRDelimAst:XI,emStrongLDelim:WI,delLDelim:rR,delRDelim:iR,url:X(/^emailProtocol|^((?:protocol):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/).replace("emailProtocol",vR).replace("protocol",Hw).replace("email",/[A-Za-z0-9._+-]+(@)[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![\w-])/).getRegex(),_backpedal:/(?:[^?!.,:;*_'"~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_'"~)]+(?!$))+/,del:/^(~~?)(?=[^\s~])((?:\\[\s\S]|[^\\])*?(?:\\[\s\S]|[^\s~\\]))\1(?=[^~]|$)/,text:X(/^(?:[^a-zA-Z0-9](?=emailProtocol)|(`+|~+|[^`~])(?:(?=[`~])|(?= {2,}\n)|(?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)|[\s\S]*?(?:(?=[\\<!\[`*~_]|\b_|protocol:\/\/|www\.|$)|[^ ](?= {2,}\n)|[^a-zA-Z0-9](?=emailProtocol)|[^a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-](?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@))))/).replace("protocol",Hw).replace(/emailProtocol/g,/(?:mailto|xmpp):/).getRegex()},yR={...Wd,br:X(Jw).replace("{2,}","*").getRegex(),text:X(Wd.text).replace("\\b_","\\b_| {2,}\\n").replace(/\{2,\}/g,"*").getRegex()},Zs={normal:tp,gfm:zI,pedantic:DI},Ao={normal:np,gfm:Wd,breaks:yR,pedantic:bR},wR={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"},Gw=t=>wR[t];function ot(t,e){if(e){if($e.escapeTest.test(t))return t.replace($e.escapeReplace,Gw)}else if($e.escapeTestNoEncode.test(t))return t.replace($e.escapeReplaceNoEncode,Gw);return t}function xR(t){return $e.numericCharacterReference.test(t)?t.replace($e.numericCharacterReferenceOrAmpersand,(e,n,r)=>{if(n===void 0&&r===void 0)return"&amp;";let o=n===void 0?Number.parseInt(r,16):Number.parseInt(n,10);return o===0||o>1114111||o>=55296&&o<=57343?"\uFFFD":o===38?"&amp;":String.fromCodePoint(o)}):t}function Fw(t){try{t=encodeURI(t).replace($e.percentDecode,"%")}catch{return null}return t}function Bw(t,e){let n=t.replace($e.findPipe,(i,a,s)=>{let l=!1,c=a;for(;--c>=0&&s[c]==="\\";)l=!l;return l?"|":" |"}),r=n.split($e.splitPipe),o=0;if(r[0].trim()||r.shift(),r.length>0&&!r.at(-1)?.trim()&&r.pop(),e)if(r.length>e)r.splice(e);else for(;r.length<e;)r.push("");for(;o<r.length;o++)r[o]=r[o].trim().replace($e.slashPipe,"|");return r}function en(t,e,n){let r=t.length;if(r===0)return"";let o=0;for(;o<r;){let i=t.charAt(r-o-1);if(i===e&&!n)o++;else if(i!==e&&n)o++;else break}return t.slice(0,r-o)}function Zw(t){let e=t.split(`
`),n=e.length-1;for(;n>=0&&$e.blankLine.test(e[n]);)n--;return e.length-n<=2?t:e.slice(0,n+1).join(`
`)}function js(t){return t.trim().toLowerCase().toUpperCase().toLowerCase()}function Vw(t,e){if(t.indexOf(e[0])===-1&&t.indexOf(e[1])===-1)return-1;let n=0;for(let r=0;r<t.length;r++)if(t[r]==="\\")r++;else if(t[r]===e[0])n++;else if(t[r]===e[1]&&(n--,n<0))return r;return n>0?-2:-1}function jd(t,e=0){let n=e,r="";for(let o of t)if(o==="	"){let i=4-n%4;r+=" ".repeat(i),n+=i}else r+=o,n++;return r}function jw(t,e,n,r,o){let i=e.href,a=e.title||null,s=t[1].replace(o.other.outputLinkReplace,"$1"),l=t[0].charAt(0)==="!",c=r.state.inLink,u=r.state.linkEmitted,p=r.state.inRawBlock;r.state.inLink=!0,r.state.linkEmitted=!1;let v=r.inlineTokens(s),m=r.state.linkEmitted;if(r.state.linkEmitted=u,r.state.inLink=c,!l){if(m){r.state.inRawBlock=p;return}r.state.linkEmitted=!0}return{type:l?"image":"link",raw:n,href:i,title:a,text:s,tokens:v}}function ER(t,e,n){let r=t.match(n.other.indentCodeCompensation);if(r===null)return e;let o=r[1];return e.split(`
`).map(i=>{let a=i.match(n.other.beginningSpace);if(a===null)return i;let[s]=a;return i.slice(Math.min(s.length,o.length))}).join(`
`)}function Ww(t,e,n,r){if(!e.includes("<"))return!1;for(let o=0;o<e.length;o++){if(e[o]==="\\"){o++;continue}if(e[o]==="`"){let s=r.inline.code.exec(e.slice(o));if(s){o+=s[0].length-1;continue}}if(e[o]!=="<")continue;let i=t.slice(n+o),a=r.inline.tag.exec(i)||r.inline.autolink.exec(i);if(a){if(a[0].length>e.length-o)return!0;o+=a[0].length-1}}return!1}var Ws=class{options;rules;lexer;constructor(t){this.options=t||$n}space(t){let e=this.rules.block.newline.exec(t);if(e&&e[0].length>0)return{type:"space",raw:e[0]}}code(t){let e=this.rules.block.code.exec(t);if(e){let n=this.options.pedantic?e[0]:Zw(e[0]),r=n.replace(this.rules.other.codeRemoveIndent,"");return{type:"code",raw:n,codeBlockStyle:"indented",text:r}}}fences(t){let e=this.rules.block.fences.exec(t);if(e){let n=e[0],r=ER(n,e[3]||"",this.rules);return{type:"code",raw:n,lang:e[2]?e[2].trim().replace(this.rules.inline.anyPunctuation,"$1"):e[2],text:r}}}heading(t){let e=this.rules.block.heading.exec(t);if(e){let n=e[2].trim();if(this.rules.other.endingHash.test(n)){let r=en(n,"#");(this.options.pedantic||!r||this.rules.other.endingSpaceTabChar.test(r))&&(n=r.trim())}return{type:"heading",raw:en(e[0],`
`),depth:e[1].length,text:n,tokens:this.lexer.inline(n)}}}hr(t){let e=this.rules.block.hr.exec(t);if(e)return{type:"hr",raw:en(e[0],`
`)}}blockquote(t){let e=this.rules.block.blockquote.exec(t);if(e){let n=en(e[0],`
`).split(`
`),r="",o="",i=[];for(;n.length>0;){let a=!1,s=[],l;for(l=0;l<n.length;l++)if(this.rules.other.blockquoteStart.test(n[l]))s.push(n[l]),a=!0;else if(!a)s.push(n[l]);else break;n=n.slice(l);let c=s.join(`
`),u=c.replace(this.rules.other.blockquoteSetextReplace,`
    $1`).replace(this.rules.other.blockquoteSetextReplace2,"");r=r?`${r}
${c}`:c,o=o?`${o}
${u}`:u;let p=this.lexer.state.top;if(this.lexer.state.top=!0,this.lexer.blockTokens(u,i,!0),this.lexer.state.top=p,n.length===0)break;let v=i.at(-1);if(v?.type==="code"||v?.type==="heading"||v?.type==="hr"||v?.type==="html")break;if(v?.type==="blockquote"){let m=v,h=n.join(`
`),y=m.raw+`
`+h.replace(this.rules.other.blockquoteSetextReplace2,""),k=this.blockquote(y);i[i.length-1]=k;let T=y.substring(k.raw.length).replace(/^\n/,""),E=T?T.split(`
`).length:0,H=E?n.slice(0,-E):n;H.length>0&&(r=`${r}
${H.join(`
`)}`),o=o.substring(0,o.length-m.text.length)+k.text;break}else if(v?.type==="list"){let m=v,h=m.raw+`
`+n.join(`
`),y=this.list(h);i[i.length-1]=y,r=r.substring(0,r.length-v.raw.length)+y.raw,o=o.substring(0,o.length-m.raw.length)+y.raw,n=h.substring(i.at(-1).raw.length).split(`
`);continue}}return{type:"blockquote",raw:r,tokens:i,text:o}}}list(t){let e=this.rules.block.list.exec(t);if(e){let n=t,r=()=>n.length-t.length,o=e[1].trim(),i=o.length>1,a={type:"list",raw:"",ordered:i,start:i?+o.slice(0,-1):"",loose:!1,items:[]};o=i?`\\d{1,9}\\${o.slice(-1)}`:`\\${o}`,this.options.pedantic&&(o=i?o:"[*+-]");let s=this.rules.other.listItemRegex(o),l=!1;for(;t;){let u=!1,p="";if(!(e=s.exec(t))||this.rules.block.hr.test(t))break;let v=r();t=t.substring(e[0].length);let m=e[2].split(`
`,1)[0],h=e[1].length,y=this.options.pedantic?jd(m,h):m.replace(this.rules.other.leadingSpaceTab,_=>jd(_,h)),k=t.split(`
`,1)[0],T=!y.trim(),E=0;if(this.options.pedantic?(E=2,p=y.trimStart()):T?E=h+1:(E=y.search(this.rules.other.nonSpaceChar),E=E>4?1:E,p=y.slice(E),E+=h),T&&this.rules.other.blankLine.test(k)&&(t=t.substring(k.length+1),u=!0),!u){let _=this.rules.other.nextBulletRegex(E),f=this.rules.other.hrRegex(E),w=this.rules.other.fencesBeginRegex(E),g=this.rules.other.headingBeginRegex(E),S=this.rules.other.htmlBeginRegex(E),M=this.rules.other.blockquoteBeginRegex(E);for(;t;){let L=t.split(`
`,1)[0],U;if(k=L,this.options.pedantic?(k=k.replace(this.rules.other.listReplaceNesting,"  "),U=k):U=k.replace(this.rules.other.leadingSpaceTab,$=>jd($)),w.test(k)||g.test(k)||S.test(k)||M.test(k)||_.test(k)||f.test(k))break;if(U.search(this.rules.other.nonSpaceChar)>=E||!k.trim())p+=`
`+U.slice(E);else{if(T||y.replace(this.rules.other.tabCharGlobal,"    ").search(this.rules.other.nonSpaceChar)>=4||w.test(y)||g.test(y)||f.test(y))break;p+=`
`+k}T=!k.trim(),t=t.substring(L.length+1),y=U.slice(E)}}let H=n.slice(v,r());a.loose||(l?a.loose=!0:this.rules.other.doubleBlankLine.test(H)&&(l=!0)),a.items.push({type:"list_item",raw:H,task:!!this.options.gfm&&this.rules.other.listIsTask.test(p),loose:!1,text:p,tokens:[]})}let c=a.items.at(-1);if(c)c.raw=c.raw.trimEnd(),c.text=c.text.trimEnd();else return;a.raw=n.slice(0,r()).trimEnd();for(let u of a.items)if(this.lexer.state.top=!1,u.tokens=this.lexer.blockTokens(u.text,[]),!a.loose){let p=u.tokens.filter(m=>m.type==="space"),v=p.length>0&&p.some(m=>this.rules.other.anyLine.test(m.raw));a.loose=v}for(let u of a.items){let p=u.tokens[0];if(u.task&&(p?.type==="text"||p?.type==="paragraph")){u.text=u.text.replace(this.rules.other.listReplaceTask,""),p.raw=p.raw.replace(this.rules.other.listReplaceTask,""),p.text=p.text.replace(this.rules.other.listReplaceTask,"");for(let m=this.lexer.inlineQueue.length-1;m>=0;m--)if(this.rules.other.listIsTask.test(this.lexer.inlineQueue[m].src)){this.lexer.inlineQueue[m].src=this.lexer.inlineQueue[m].src.replace(this.rules.other.listReplaceTask,"");break}let v=this.rules.other.listTaskCheckbox.exec(u.raw);if(v){let m={type:"checkbox",raw:v[0]+" ",checked:v[0]!=="[ ]"};u.checked=m.checked,a.loose?u.tokens[0]&&["paragraph","text"].includes(u.tokens[0].type)&&"tokens"in u.tokens[0]&&u.tokens[0].tokens?(u.tokens[0].raw=m.raw+u.tokens[0].raw,u.tokens[0].text=m.raw+u.tokens[0].text,u.tokens[0].tokens.unshift(m)):u.tokens.unshift({type:"paragraph",raw:m.raw,text:m.raw,tokens:[m]}):u.tokens.unshift(m)}}else u.task&&(u.task=!1)}if(a.loose)for(let u of a.items){u.loose=!0;for(let p of u.tokens)p.type==="text"&&(p.type="paragraph")}return a}}html(t){let e=this.rules.block.html.exec(t);if(e){let n=Zw(e[0]);return{type:"html",block:!0,raw:n,pre:e[1]==="pre"||e[1]==="script"||e[1]==="style",text:n}}}def(t){let e=this.rules.block.def.exec(t);if(e){if(!this.rules.other.startAngleBracket.test(e[2])&&Vw(e[2],"()")!==-1)return;let n=js(e[1]).replace(this.rules.other.multipleSpaceGlobal," "),r=e[2]?e[2].replace(this.rules.other.hrefBrackets,"$1").replace(this.rules.inline.anyPunctuation,"$1"):"",o=e[3]?e[3].substring(1,e[3].length-1).replace(this.rules.inline.anyPunctuation,"$1"):e[3];return{type:"def",tag:n,raw:en(e[0],`
`),href:r,title:o}}}table(t){let e=this.rules.block.table.exec(t);if(!e||!this.rules.other.tableDelimiter.test(e[2]))return;let n=Bw(e[1]),r=e[2].replace(this.rules.other.tableAlignChars,"").split("|"),o=e[3]?.trim()?e[3].replace(this.rules.other.tableRowBlankLine,"").split(`
`):[],i={type:"table",raw:en(e[0],`
`),header:[],align:[],rows:[]};if(n.length===r.length){for(let a of r)this.rules.other.tableAlignRight.test(a)?i.align.push("right"):this.rules.other.tableAlignCenter.test(a)?i.align.push("center"):this.rules.other.tableAlignLeft.test(a)?i.align.push("left"):i.align.push(null);for(let a=0;a<n.length;a++)i.header.push({text:n[a],tokens:this.lexer.inline(n[a]),header:!0,align:i.align[a]});for(let a of o)i.rows.push(Bw(a,i.header.length).map((s,l)=>({text:s,tokens:this.lexer.inline(s),header:!1,align:i.align[l]})));return i}}lheading(t){let e=this.rules.block.lheading.exec(t);if(e){let n=e[1].trim();return{type:"heading",raw:en(e[0],`
`),depth:e[2].charAt(0)==="="?1:2,text:n,tokens:this.lexer.inline(n)}}}paragraph(t){let e=this.rules.block.paragraph.exec(t);if(e){let n=e[1].charAt(e[1].length-1)===`
`?e[1].slice(0,-1):e[1];return{type:"paragraph",raw:e[0],text:n,tokens:this.lexer.inline(n)}}}text(t){let e=this.rules.block.text.exec(t);if(e)return{type:"text",raw:e[0],text:e[0],tokens:this.lexer.inline(e[0])}}escape(t){let e=this.rules.inline.escape.exec(t);if(e)return{type:"escape",raw:e[0],text:e[1]}}tag(t){let e=this.rules.inline.tag.exec(t);if(e)return!this.lexer.state.inLink&&this.rules.other.startATag.test(e[0])?this.lexer.state.inLink=!0:this.lexer.state.inLink&&this.rules.other.endATag.test(e[0])&&(this.lexer.state.inLink=!1),!this.lexer.state.inRawBlock&&this.rules.other.startPreScriptTag.test(e[0])?this.lexer.state.inRawBlock=!0:this.lexer.state.inRawBlock&&this.rules.other.endPreScriptTag.test(e[0])&&(this.lexer.state.inRawBlock=!1),{type:"html",raw:e[0],inLink:this.lexer.state.inLink,inRawBlock:this.lexer.state.inRawBlock,block:!1,text:e[0]}}link(t){if(this.lexer.state.linkParenPossible===!1)return;let e=this.rules.inline.link.exec(t);if(e){let n=e[0].charAt(0)==="!"?2:1;if(!this.options.pedantic&&Ww(t,e[1],n,this.rules))return;let r=e[2].trim();if(!this.options.pedantic&&this.rules.other.startAngleBracket.test(r)){if(!this.rules.other.endAngleBracket.test(r))return;let a=en(r.slice(0,-1),"\\");if((r.length-a.length)%2===0)return}else{let a=Vw(e[2],"()");if(a===-2)return;if(a>-1){let s=(e[0].indexOf("!")===0?5:4)+e[1].length+a;e[2]=e[2].substring(0,a),e[0]=e[0].substring(0,s).trim(),e[3]=""}}let o=e[2],i="";if(this.options.pedantic){let a=this.rules.other.pedanticHrefTitle.exec(o);a&&(o=a[1],i=a[3])}else i=e[3]?e[3].slice(1,-1):"";return o=o.trim(),this.rules.other.startAngleBracket.test(o)&&(this.options.pedantic&&!this.rules.other.endAngleBracket.test(r)?o=o.slice(1):o=o.slice(1,-1)),jw(e,{href:o&&o.replace(this.rules.inline.anyPunctuation,"$1"),title:i&&i.replace(this.rules.inline.anyPunctuation,"$1")},e[0],this.lexer,this.rules)}}reflink(t,e){let n;if((n=this.rules.inline.reflink.exec(t))||(n=this.rules.inline.nolink.exec(t))){let r=n[0].charAt(0)==="!"?2:1;if(!this.options.pedantic&&Ww(t,n[1],r,this.rules))return;let o=(n[2]||n[1]).replace(this.rules.other.multipleSpaceGlobal," "),i=e[js(o)];if(!i){let a=n[0].charAt(0);return{type:"text",raw:a,text:a}}return jw(n,i,n[0],this.lexer,this.rules)}}emStrong(t,e,n=""){let r=this.rules.inline.emStrongLDelim.exec(t);if(!(!r||!r[1]&&!r[2]&&!r[3]&&!r[4]||r[4]&&n.match(this.rules.other.unicodeAlphaNumeric))&&(!(r[1]||r[3])||!n||this.rules.inline.punctuation.exec(n))){let o=[...r[0]].length-1,i,a,s=o,l=0,c=r[0][0],u=n===c,p=c==="*"?this.rules.inline.emStrongRDelimAst:this.rules.inline.emStrongRDelimUnd;for(p.lastIndex=0,e=e.slice(-1*t.length+o);(r=p.exec(e))!==null;){if(i=r[1]||r[2]||r[3]||r[4]||r[5]||r[6],!i)continue;if(a=[...i].length,r[3]||r[4]){s+=a;continue}else if(r[5]||r[6]){if(o%3&&!((o+a)%3)){l+=a;continue}if(u)break}if(s-=a,s>0)continue;a=Math.min(a,a+s+l);let v=[...r[0]][0].length,m=t.slice(0,o+r.index+v+a);if(Math.min(o,a)%2){let y=m.slice(1,-1);return{type:"em",raw:m,text:y,tokens:this.lexer.inlineTokens(y)}}let h=m.slice(2,-2);return{type:"strong",raw:m,text:h,tokens:this.lexer.inlineTokens(h)}}}}codespan(t){let e=this.rules.inline.code.exec(t);if(e){let n=e[2].replace(this.rules.other.newLineCharGlobal," "),r=this.rules.other.nonSpaceChar.test(n),o=this.rules.other.startingSpaceChar.test(n)&&this.rules.other.endingSpaceChar.test(n);return r&&o&&(n=n.substring(1,n.length-1)),{type:"codespan",raw:e[0],text:n}}}br(t){let e=this.rules.inline.br.exec(t);if(e)return{type:"br",raw:e[0]}}del(t,e,n=""){let r=this.rules.inline.delLDelim.exec(t);if(r&&(!r[1]||!n||this.rules.inline.punctuation.exec(n))){let o=[...r[0]].length-1,i,a,s=o,l=this.rules.inline.delRDelim;for(l.lastIndex=0,e=e.slice(-1*t.length+o);(r=l.exec(e))!==null;){if(i=r[1]||r[2]||r[3]||r[4]||r[5]||r[6],!i||(a=[...i].length,a!==o))continue;if(r[3]||r[4]){s+=a;continue}if(s-=a,s>0)continue;a=Math.min(a,a+s);let c=[...r[0]][0].length,u=t.slice(0,o+r.index+c+a),p=u.slice(o,-o);return{type:"del",raw:u,text:p,tokens:this.lexer.inlineTokens(p)}}}}autolink(t){let e=this.rules.inline.autolink.exec(t);if(e){let n,r;return e[2]==="@"?(n=e[1],r="mailto:"+n):(n=e[1],r=n),{type:"link",raw:e[0],text:n,href:r,autolink:!0,tokens:[{type:"text",raw:n,text:n}]}}}url(t){let e;if(e=this.rules.inline.url.exec(t)){let n,r;if(e[2]==="@")n=e[0],r="mailto:"+n;else{let o;do o=e[0],e[0]=this.rules.inline._backpedal.exec(e[0])?.[0]??"";while(o!==e[0]);n=e[0],e[1]==="www."?r="http://"+e[0]:r=e[0]}return{type:"link",raw:e[0],text:n,href:r,autolink:!0,tokens:[{type:"text",raw:n,text:n}]}}}inlineText(t){let e=this.rules.inline.text.exec(t);if(e){let n=this.lexer.state.inRawBlock;return{type:"text",raw:e[0],text:n?e[0]:xR(e[0]),escaped:n}}}},gt=class qd{tokens;options;state;inlineQueue;tokenizer;constructor(e){this.tokens=[],this.tokens.links=Object.create(null),this.options=e||$n,this.options.tokenizer=this.options.tokenizer||new Ws,this.tokenizer=this.options.tokenizer,this.tokenizer.options=this.options,this.tokenizer.lexer=this,this.inlineQueue=[],this.state={inLink:!1,inRawBlock:!1,linkEmitted:!1,linkParenPossible:!0,top:!0};let n={other:$e,block:Zs.normal,inline:Ao.normal};this.options.pedantic?(n.block=Zs.pedantic,n.inline=Ao.pedantic):this.options.gfm&&(n.block=Zs.gfm,this.options.breaks?n.inline=Ao.breaks:n.inline=Ao.gfm),this.tokenizer.rules=n}static get rules(){return{block:Zs,inline:Ao}}static lex(e,n){return new qd(n).lex(e)}static lexInline(e,n){return new qd(n).inlineTokens(e)}lex(e){e=e.replace($e.carriageReturn,`
`),this.blockTokens(e,this.tokens);for(let n=0;n<this.inlineQueue.length;n++){let r=this.inlineQueue[n];this.inlineTokens(r.src,r.tokens)}return this.inlineQueue=[],this.tokens}blockTokens(e,n=[],r=!1){this.tokenizer.lexer=this,this.options.pedantic&&(e=e.replace($e.tabCharGlobal,"    ").replace($e.spaceLine,""));let o=1/0;for(;e;){if(e.length<o)o=e.length;else{this.infiniteLoopError(e.charCodeAt(0));break}let i;if(this.options.extensions?.block?.some(s=>(i=s.call({lexer:this},e,n))?(e=e.substring(i.raw.length),n.push(i),!0):!1))continue;if(i=this.tokenizer.space(e)){e=e.substring(i.raw.length);let s=n.at(-1);i.raw.length===1&&s!==void 0?s.raw+=`
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
`+i.text,this.inlineQueue.pop(),this.inlineQueue.at(-1).src=s.text):n.push(i);continue}if(e){this.infiniteLoopError(e.charCodeAt(0));break}}return this.state.top=!0,n}inline(e,n=[]){return this.inlineQueue.push({src:e,tokens:n}),n}linkInText(e){if(!e.includes("["))return!1;let n=this.tokenizer.rules.inline.link;for(let r of e.matchAll(this.tokenizer.rules.inline.blockSkip))if(n.test(r[0])&&e.charAt(r.index-1)!=="!")return!0;for(let r of e.matchAll(this.tokenizer.rules.inline.reflinkSearch)){let o=r[0],i=o.lastIndexOf("[");if(!(o.charAt(0)==="!"||!Object.hasOwn(this.tokens.links,js(o.slice(i+1,-1))))&&!(i>1&&this.linkInText(o.slice(1,i-1))))return!0}return!1}inlineTokens(e,n=[]){this.tokenizer.lexer=this;let r=this.state.linkParenPossible;this.state.linkParenPossible=r&&e.includes(")");try{return this.#e(e,n)}finally{this.state.linkParenPossible=r}}#e(e,n){let r=e;if(this.tokens.links&&e.includes("[")){let s=this.tokenizer.rules.inline.reflinkSearch,l=c=>{let u=c.lastIndexOf("[");if(!Object.hasOwn(this.tokens.links,js(c.slice(u+1,-1))))return c;if(u>1&&c.charAt(0)!=="!"){let p=c.slice(1,u-1);if(this.linkInText(p))return"["+p.replace(s,l)+"]["+"a".repeat(c.length-u-2)+"]"}return"["+"a".repeat(c.length-2)+"]"};r=r.replace(s,l)}r=r.replace(this.tokenizer.rules.inline.anyPunctuationOutsideCode,(s,l,c)=>c?"+".repeat(s.length):l?l+s.slice(l.length,-l.length).replace(/`/g,"+")+l:s),r=r.replace(this.tokenizer.rules.inline.blockSkip,(s,l,c)=>{let u=c?c.length:0;return s.slice(0,u)+"["+"a".repeat(s.length-u-2)+"]"}),r=this.options.hooks?.emStrongMask?.call({lexer:this},r)??r;let o=!1,i="",a=1/0;for(;e;){if(e.length<a)a=e.length;else{this.infiniteLoopError(e.charCodeAt(0));break}o||(i=""),o=!1;let s;if(this.options.extensions?.inline?.some(c=>(s=c.call({lexer:this},e,n))?(e=e.substring(s.raw.length),n.push(s),!0):!1))continue;if(s=this.tokenizer.escape(e)){e=e.substring(s.raw.length),n.push(s);continue}if(s=this.tokenizer.tag(e)){e=e.substring(s.raw.length),n.push(s);continue}if(s=this.tokenizer.link(e)){e=e.substring(s.raw.length),n.push(s);continue}if(s=this.tokenizer.reflink(e,this.tokens.links)){e=e.substring(s.raw.length);let c=n.at(-1);s.type==="text"&&c?.type==="text"?(c.raw+=s.raw,c.text+=s.text):n.push(s);continue}if(s=this.tokenizer.emStrong(e,r,i)){e=e.substring(s.raw.length),n.push(s);continue}if(s=this.tokenizer.codespan(e)){e=e.substring(s.raw.length),n.push(s);continue}if(s=this.tokenizer.br(e)){e=e.substring(s.raw.length),n.push(s);continue}if(s=this.tokenizer.del(e,r,i)){e=e.substring(s.raw.length),n.push(s);continue}if(s=this.tokenizer.autolink(e)){e=e.substring(s.raw.length),n.push(s);continue}if(!this.state.inLink&&(s=this.tokenizer.url(e))){e=e.substring(s.raw.length),n.push(s);continue}let l=e;if(this.options.extensions?.startInline){let c=1/0,u=e.slice(1),p;this.options.extensions.startInline.forEach(v=>{p=v.call({lexer:this},u),typeof p=="number"&&p>=0&&(c=Math.min(c,p))}),c<1/0&&c>=0&&(l=e.substring(0,c+1))}if(s=this.tokenizer.inlineText(l)){e=e.substring(s.raw.length),s.raw.slice(-1)!=="_"&&(i=s.raw.slice(-1)),o=!0;let c=n.at(-1);c?.type==="text"?(c.raw+=s.raw,c.text+=s.text):n.push(s);continue}if(e){this.infiniteLoopError(e.charCodeAt(0));break}}return n}infiniteLoopError(e){let n="Infinite loop on byte: "+e;if(this.options.silent)console.error(n);else throw new Error(n)}},qs=class{options;parser;constructor(t){this.options=t||$n}space(t){return""}code({text:t,lang:e,escaped:n}){let r=(e||"").match($e.notSpaceStart)?.[0],o=t?t.replace($e.endingNewline,"")+`
`:"";return r?'<pre><code class="language-'+ot(r)+'">'+(n?o:ot(o,!0))+`</code></pre>
`:"<pre><code>"+(n?o:ot(o,!0))+`</code></pre>
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
`}strong({tokens:t}){return`<strong>${this.parser.parseInline(t)}</strong>`}em({tokens:t}){return`<em>${this.parser.parseInline(t)}</em>`}codespan({text:t}){return`<code>${ot(t,!0)}</code>`}br(t){return"<br>"}del({tokens:t}){return`<del>${this.parser.parseInline(t)}</del>`}link({href:t,title:e,text:n,tokens:r,autolink:o}){let i=o?ot(n,!0):this.parser.parseInline(r),a=Fw(t);if(a===null)return i;t=ot(a,o);let s='<a href="'+t+'"';return e&&(s+=' title="'+ot(e)+'"'),s+=">"+i+"</a>",s}image({href:t,title:e,text:n,tokens:r}){r&&(n=this.parser.parseInline(r,this.parser.textRenderer));let o=Fw(t);if(o===null)return ot(n);t=o;let i=`<img src="${ot(t)}" alt="${ot(n)}"`;return e&&(i+=` title="${ot(e)}"`),i+=">",i}text(t){return"tokens"in t&&t.tokens?this.parser.parseInline(t.tokens):"escaped"in t&&t.escaped?t.text:ot(t.text)}},rp=class{strong({text:t}){return t}em({text:t}){return t}codespan({text:t}){return t}del({text:t}){return t}html({text:t}){return t}text({text:t}){return t}link({text:t}){return""+t}image({text:t}){return""+t}br(){return""}checkbox({raw:t}){return t}},vt=class Yd{options;renderer;textRenderer;constructor(e){this.options=e||$n,this.options.renderer=this.options.renderer||new qs,this.renderer=this.options.renderer,this.renderer.options=this.options,this.renderer.parser=this,this.textRenderer=new rp}static parse(e,n){return new Yd(n).parse(e)}static parseInline(e,n){return new Yd(n).parseInline(e)}parse(e){this.renderer.parser=this;let n="";for(let r=0;r<e.length;r++){let o=e[r];if(this.options.extensions?.renderers?.[o.type]){let a=o,s=this.options.extensions.renderers[a.type].call({parser:this},a);if(s!==!1||!["space","hr","heading","code","table","blockquote","list","checkbox","html","def","paragraph","text"].includes(a.type)){n+=s||"";continue}}let i=o;switch(i.type){case"space":{n+=this.renderer.space(i);break}case"hr":{n+=this.renderer.hr(i);break}case"heading":{n+=this.renderer.heading(i);break}case"code":{n+=this.renderer.code(i);break}case"table":{n+=this.renderer.table(i);break}case"blockquote":{n+=this.renderer.blockquote(i);break}case"list":{n+=this.renderer.list(i);break}case"checkbox":{n+=this.renderer.checkbox(i);break}case"html":{n+=this.renderer.html(i);break}case"def":{n+=this.renderer.def(i);break}case"paragraph":{n+=this.renderer.paragraph(i);break}case"text":{n+=this.renderer.text(i);break}default:{let a='Token with "'+i.type+'" type was not found.';if(this.options.silent)return console.error(a),"";throw new Error(a)}}}return n}parseInline(e,n=this.renderer){this.renderer.parser=this;let r="";for(let o=0;o<e.length;o++){let i=e[o];if(this.options.extensions?.renderers?.[i.type]){let s=this.options.extensions.renderers[i.type].call({parser:this},i);if(s!==!1||!["escape","html","link","image","checkbox","strong","em","codespan","br","del","text"].includes(i.type)){r+=s||"";continue}}let a=i;switch(a.type){case"escape":{r+=n.text(a);break}case"html":{r+=n.html(a);break}case"link":{r+=n.link(a);break}case"image":{r+=n.image(a);break}case"checkbox":{r+=n.checkbox(a);break}case"strong":{r+=n.strong(a);break}case"em":{r+=n.em(a);break}case"codespan":{r+=n.codespan(a);break}case"br":{r+=n.br(a);break}case"del":{r+=n.del(a);break}case"text":{r+=n.text(a);break}default:{let s='Token with "'+a.type+'" type was not found.';if(this.options.silent)return console.error(s),"";throw new Error(s)}}}return r}},Io=class{options;block;constructor(t){this.options=t||$n}static passThroughHooks=new Set(["preprocess","postprocess","processAllTokens","emStrongMask"]);static passThroughHooksRespectAsync=new Set(["preprocess","postprocess","processAllTokens"]);preprocess(t){return t}postprocess(t){return t}processAllTokens(t){return t}emStrongMask(t){return t}provideLexer(t=this.block){return t?gt.lex:gt.lexInline}provideParser(t=this.block){return t?vt.parse:vt.parseInline}};function Ln(t,e){if(Array.isArray(e))for(let n=0;n<e.length;n++)t.push(e[n]);else t.push(e)}var op=class{defaults=Kd();options=this.setOptions;parse=this.parseMarkdown(!0);parseInline=this.parseMarkdown(!1);Parser=vt;Renderer=qs;TextRenderer=rp;Lexer=gt;Tokenizer=Ws;Hooks=Io;constructor(...t){this.use(...t)}walkTokens(t,e){let n=[];for(let r of t)switch(Ln(n,e.call(this,r)),r.type){case"table":{let o=r;for(let i of o.header)Ln(n,this.walkTokens(i.tokens,e));for(let i of o.rows)for(let a of i)Ln(n,this.walkTokens(a.tokens,e));break}case"list":{let o=r;Ln(n,this.walkTokens(o.items,e));break}default:{let o=r;this.defaults.extensions?.childTokens?.[o.type]?this.defaults.extensions.childTokens[o.type].forEach(i=>{let a=o[i].flat(1/0);Ln(n,this.walkTokens(a,e))}):o.tokens&&Ln(n,this.walkTokens(o.tokens,e))}}return n}use(...t){let e=this.defaults.extensions||{renderers:{},childTokens:{}};return t.forEach(n=>{let r={...n};if(r.async=this.defaults.async||r.async||!1,n.extensions&&(n.extensions.forEach(o=>{if(!o.name)throw new Error("extension name required");if("renderer"in o){let i=e.renderers[o.name];i?e.renderers[o.name]=function(...a){let s=o.renderer.apply(this,a);return s===!1&&(s=i.apply(this,a)),s}:e.renderers[o.name]=o.renderer}if("tokenizer"in o){if(!o.level||o.level!=="block"&&o.level!=="inline")throw new Error("extension level must be 'block' or 'inline'");let i=e[o.level];i?i.unshift(o.tokenizer):e[o.level]=[o.tokenizer],o.start&&(o.level==="block"?e.startBlock?e.startBlock.push(o.start):e.startBlock=[o.start]:o.level==="inline"&&(e.startInline?e.startInline.push(o.start):e.startInline=[o.start]))}"childTokens"in o&&o.childTokens&&(e.childTokens[o.name]=o.childTokens)}),r.extensions=e),n.renderer){let o=this.defaults.renderer||new qs(this.defaults);for(let i in n.renderer){if(!(i in o))throw new Error(`renderer '${i}' does not exist`);if(["options","parser"].includes(i))continue;let a=i,s=n.renderer[a],l=o[a];o[a]=(...c)=>{let u=s.apply(o,c);return u===!1&&(u=l.apply(o,c)),u||""}}r.renderer=o}if(n.tokenizer){let o=this.defaults.tokenizer||new Ws(this.defaults);for(let i in n.tokenizer){if(!(i in o))throw new Error(`tokenizer '${i}' does not exist`);if(["options","rules","lexer"].includes(i))continue;let a=i,s=n.tokenizer[a],l=o[a];o[a]=(...c)=>{let u=s.apply(o,c);return u===!1&&(u=l.apply(o,c)),u}}r.tokenizer=o}if(n.hooks){let o=this.defaults.hooks||new Io;for(let i in n.hooks){if(!(i in o))throw new Error(`hook '${i}' does not exist`);if(["options","block"].includes(i))continue;let a=i,s=n.hooks[a],l=o[a];Io.passThroughHooks.has(i)?o[a]=c=>{if(this.defaults.async&&Io.passThroughHooksRespectAsync.has(i))return(async()=>{let p=await s.call(o,c);return l.call(o,p)})();let u=s.call(o,c);return l.call(o,u)}:o[a]=(...c)=>{if(this.defaults.async)return(async()=>{let p=await s.apply(o,c);return p===!1&&(p=await l.apply(o,c)),p})();let u=s.apply(o,c);return u===!1&&(u=l.apply(o,c)),u}}r.hooks=o}if(n.walkTokens){let o=this.defaults.walkTokens,i=n.walkTokens;r.walkTokens=function(a){let s=[];return s.push(i.call(this,a)),o&&Ln(s,o.call(this,a)),s}}this.defaults={...this.defaults,...r}}),this}setOptions(t){return this.defaults={...this.defaults,...t},this}lexer(t,e){return gt.lex(t,e??this.defaults)}parser(t,e){return vt.parse(t,e??this.defaults)}parseMarkdown(t){return(e,n)=>{let r={...n},o={...this.defaults,...r},i=this.onError(!!o.silent,!!o.async);if(this.defaults.async===!0&&r.async===!1)return i(new Error("marked(): The async option was set to true by an extension. Remove async: false from the parse options object to return a Promise."));if(typeof e>"u"||e===null)return i(new Error("marked(): input parameter is undefined or null"));if(typeof e!="string")return i(new Error("marked(): input parameter is of type "+Object.prototype.toString.call(e)+", string expected"));if(o.hooks&&(o.hooks.options=o,o.hooks.block=t),o.async)return(async()=>{let a=o.hooks?await o.hooks.preprocess(e):e,s=await(o.hooks?await o.hooks.provideLexer(t):t?gt.lex:gt.lexInline)(a,o),l=o.hooks?await o.hooks.processAllTokens(s):s;o.walkTokens&&await Promise.all(this.walkTokens(l,o.walkTokens));let c=await(o.hooks?await o.hooks.provideParser(t):t?vt.parse:vt.parseInline)(l,o);return o.hooks?await o.hooks.postprocess(c):c})().catch(i);try{o.hooks&&(e=o.hooks.preprocess(e));let a=(o.hooks?o.hooks.provideLexer(t):t?gt.lex:gt.lexInline)(e,o);o.hooks&&(a=o.hooks.processAllTokens(a)),o.walkTokens&&this.walkTokens(a,o.walkTokens);let s=(o.hooks?o.hooks.provideParser(t):t?vt.parse:vt.parseInline)(a,o);return o.hooks&&(s=o.hooks.postprocess(s)),s}catch(a){return i(a)}}}onError(t,e){return n=>{if(n.message+=`
Please report this to https://github.com/markedjs/marked.`,t){let r="<p>An error occurred:</p><pre>"+ot(n.message+"",!0)+"</pre>";return e?Promise.resolve(r):r}if(e)return Promise.reject(n);throw n}}},Dn=new op;function he(t,e){return Dn.parse(t,e)}he.options=he.setOptions=function(t){return Dn.setOptions(t),he.defaults=Dn.defaults,qw(he.defaults),he};he.getDefaults=Kd;he.defaults=$n;function _R(...t){return Dn.use(...t),he.defaults=Dn.defaults,qw(he.defaults),he}he.use=_R;he.walkTokens=function(t,e){return Dn.walkTokens(t,e)};he.parseInline=Dn.parseInline;he.Parser=vt;he.parser=vt.parse;he.Renderer=qs;he.TextRenderer=rp;he.Lexer=gt;he.lexer=gt.lex;he.Tokenizer=Ws;he.Hooks=Io;he.parse=he;var DU=he.options,$U=he.setOptions,UU=he.walkTokens,HU=he.parseInline;var GU=vt.parse,FU=gt.lex;var SR=new op({gfm:!0,breaks:!0}),rx=["a","p","br","strong","em","b","i","u","s","del","code","pre","ul","ol","li","blockquote","h1","h2","h3","h4","h5","h6","hr","span","table","thead","tbody","tr","th","td"],ox=["href","title","class","target","rel"],ix={ALLOWED_TAGS:rx,ALLOWED_ATTR:ox,ALLOW_DATA_ATTR:!1,ALLOW_ARIA_ATTR:!1},TR={...ix,ALLOWED_TAGS:[...rx,"img"],ALLOWED_ATTR:[...ox,"src","alt","width","height"]},kR=/^language-[A-Za-z0-9_+#.-]+$/,AR=new Set(["CODE","PRE"]);function IR(t){t.nodeName==="A"&&t.hasAttribute("href")?(t.setAttribute("target","_blank"),t.setAttribute("rel","noopener noreferrer")):(t.removeAttribute("target"),t.removeAttribute("rel"));let e=t.getAttribute("class");if(e===null)return;let n=AR.has(t.nodeName)?e.split(/\s+/).filter(r=>kR.test(r)):[];if(n.length===0){t.removeAttribute("class");return}t.setAttribute("class",n.join(" "))}var Ys=null;function RR(){return Ys===null&&(Ys=Dw(),Ys.addHook("afterSanitizeAttributes",IR)),Ys}function Oo(t,e){let n=e?.allowImages===!0,r=SR.parse(t,{async:!1});return RR().sanitize(r,n?TR:ix).trim()}var Ks=class{#e;#t=null;#n=0;#o="";#r=null;constructor(e){this.#e=e}get deltas(){return this.#n}countDelta(){this.#n+=1}queue(e){this.#o=e,this.#i(),this.#r===null&&(this.#r=requestAnimationFrame(()=>{this.#r=null,this.into(this.#o)}))}into(e){this.#r!==null&&(cancelAnimationFrame(this.#r),this.#r=null),this.#o=e;let n=this.#i();return n.innerHTML=Oo(e,{allowImages:this.#e.allowImages()}),this.#e.follow(),n}end(){this.#r!==null&&this.into(this.#o),this.#t=null}#i(){return this.#t===null&&(this.#t=this.#e.openBubble(),this.#n=0),this.#t}};function ax(t){let{messages:e,jumpButton:n,emptyWrap:r,strings:o}=t;e.className="messages",e.setAttribute("part","messages"),e.setAttribute("role","log"),e.setAttribute("aria-live","off"),e.setAttribute("aria-label",o.conversation),n.className="jump-latest",n.type="button",n.setAttribute("part","jump-latest"),n.textContent=o.jumpToLatest,r.className="empty",r.setAttribute("part","empty");let i=document.createElement("div");i.className="greeting",i.setAttribute("part","greeting");let a=document.createElement("slot");a.name="greeting",a.append(t.greetingText),i.append(a);let s=document.createElement("slot");s.name="empty",t.starters!==null&&s.append(t.starters),r.replaceChildren(i,s)}var CR=4,NR=120;function sx(t){if(typeof t!="object"||t===null)return null;let e=t.prompts;if(!Array.isArray(e))return null;let n=e.filter(r=>typeof r=="string").map(r=>r.trim()).filter(r=>r!==""&&r.length<=120).slice(0,4);return n.length===0?null:n}function Mo(t,e,n){let r=sx(t);if(r===null)return null;let o=document.createElement("div");o.className="suggestions",o.setAttribute("part","suggestions"),o.setAttribute("role","group"),o.setAttribute("aria-label",e.suggestions);for(let i of r){let a=document.createElement("button");a.type="button",a.className="suggestion-chip",a.setAttribute("part","suggestion-chip"),a.textContent=i,a.addEventListener("click",()=>n(i)),o.appendChild(a)}return o}function lx(t,e,n){let r=t.getAttribute("data-starters");if(r===null)return null;let o;try{o=JSON.parse(r)}catch{return console.warn(`<ag-ui-chat>: data-starters is not valid JSON, so no starters are shown. It takes an array of strings, e.g. data-starters='["Summarise this page"]'.`),null}return Mo({prompts:o},e,n)}function Xs(t,e){for(let n of Array.from(t.querySelectorAll("pre"))){let r=n.querySelector("code");r===null||n.querySelector(".code-copy")!==null||(n.classList.add("has-copy"),n.append(OR(r,e)))}}function OR(t,e){let n=t.textContent,r=document.createElement("button");return r.type="button",r.className="code-copy",r.setAttribute("part","code-copy"),r.textContent=e.copyCode,r.title=e.copyCode,r.setAttribute("aria-label",e.copyCode),r.addEventListener("click",()=>{MR(n).then(o=>{PR(r,o?e.copied:e.copyFailed,e)})}),r}async function MR(t){let e=navigator.clipboard;if(e===void 0)return!1;try{return await e.writeText(t),!0}catch{return!1}}function PR(t,e,n){t.textContent=e,t.dataset.state=e===n.copied?"copied":"failed",setTimeout(()=>{t.textContent=n.copyCode,delete t.dataset.state},1500)}function ip(t){let e=t.replace(/[._-]+/g," ").trim();return e===""?t:e.charAt(0).toUpperCase()+e.slice(1)}var Js=class{element;#e;#t;#n;#o;#r=!1;constructor(e=ge){this.#o=e,this.element=document.createElement("div"),this.element.className="thoughts",this.element.setAttribute("part","thoughts"),this.element.setAttribute("data-streaming",""),this.#n=document.createElement("button"),this.#n.type="button",this.#n.className="thoughts-toggle",this.#n.setAttribute("part","thoughts-toggle"),this.#n.setAttribute("aria-expanded","true"),this.#e=document.createElement("span"),this.#e.className="thoughts-label",this.#e.setAttribute("part","thoughts-label"),this.#e.textContent=e.thinking,this.#n.append(this.#e),this.#t=document.createElement("pre"),this.#t.className="thoughts-body",this.#t.setAttribute("part","thoughts-body"),this.#n.addEventListener("click",()=>{this.#i(!this.#r)}),this.element.append(this.#n,this.#t)}stream(e){this.#t.textContent=e}collapse(){this.#r||(this.element.removeAttribute("data-streaming"),this.#e.textContent=this.#o.thoughts,this.#i(!0))}#i(e){this.#r=e,this.#t.hidden=e,this.#n.setAttribute("aria-expanded",String(!e))}};var LR=new Set([J.PENDING,J.DEFERRED]),zR=`.tool-call-subagent > .subagent:is(${[Et.STARTED,Et.TOOL_CALL,Et.TOOL_RESULT].map(t=>`[data-phase="${t}"]`).join(", ")})`,DR=["data-status","data-asking","data-phase","data-agent"],Qs=class{element;#e;#t;#n;#o;#r;#i=[];#a=!1;constructor(e){this.#e=e,this.element=document.createElement("div"),this.element.className="tool-group",this.element.setAttribute("part","tool-group"),this.element.setAttribute("data-open","false"),this.#n=document.createElement("button"),this.#n.type="button",this.#n.className="tool-group-head",this.#n.setAttribute("part","tool-group-head"),this.#n.setAttribute("aria-expanded","false");let n=document.createElement("span");n.className="tool-group-icon",n.setAttribute("part","tool-group-icon"),n.setAttribute("aria-hidden","true"),this.#o=document.createElement("span"),this.#o.className="tool-group-label",this.#o.setAttribute("part","tool-group-label"),this.#r=document.createElement("span"),this.#r.className="tool-group-meta",this.#r.setAttribute("part","tool-group-meta");let r=document.createElement("span");r.className="tool-group-chevron",r.setAttribute("aria-hidden","true"),this.#n.append(n,this.#o,this.#r,r),this.#n.addEventListener("click",()=>{this.setOpen(this.element.getAttribute("data-open")!=="true")}),this.#t=document.createElement("div"),this.#t.className="tool-group-list",this.#t.setAttribute("part","tool-group-list"),this.element.append(this.#n,this.#t),new MutationObserver(()=>{this.#l()}).observe(this.#t,{attributes:!0,attributeFilter:[...DR],subtree:!0})}add(e,n){let r=this.#i.filter(i=>i.name===n).length+1,o=n;if(r>1){let i=document.createElement("span");i.className="tool-call-repeat",i.setAttribute("part","tool-card-repeat"),i.textContent=oe(this.#e.toolStepRepeat,{n:r}),e.querySelector(".tool-call-name")?.after(i),o=`${n} ${i.textContent}`}this.#i.push({element:e,name:n,label:o}),this.#t.append(e),this.#l()}setOpen(e){this.element.setAttribute("data-open",String(e)),this.#n.setAttribute("aria-expanded",String(e))}reveal(){this.#a=!0,this.setOpen(!0)}#s(){for(let{element:e}of this.#i){let n=e.getAttribute("data-status")===J.PENDING?e.querySelector(zR):null;if(n!==null){let r=n.getAttribute("data-agent");return r===null?this.#e.subAgentWorking:oe(this.#e.subAgentDelegatedTo,{agent:r})}}return null}#l(){let e=this.#e,n=this.#i,r=n.map(T=>T.element.getAttribute("data-status")??""),o=n.filter((T,E)=>LR.has(r[E])),i=T=>r.filter(E=>E===T).length,a=i(J.ERROR),s=i(J.DECLINED),l=i(J.DEFERRED),c=n.filter(T=>T.element.hasAttribute("data-asking")).length,u=l+c,p=n.length;l>0&&!this.#a?(this.#a=!0,this.setOpen(!0)):l===0&&(this.#a=!1);let v="done";u>0?v="waiting":o.length>0?v="running":a>0&&(v="error"),this.element.setAttribute("data-state",v),this.element.setAttribute("part",`tool-group tool-group-${v}`),this.element.setAttribute("data-count",String(p));let m=p===1?n[0]:void 0;if(m!==void 0)this.#o.textContent=m.label;else{let T=v==="waiting"?e.toolGroupSteps:v==="running"?e.toolGroupWorking:e.toolGroupWorked;this.#o.textContent=oe(T,{count:p})}let h=[],y=this.#s(),k=o[0];u>0?h.push(oe(e.toolGroupWaiting,{count:u})):y!==null?h.push(y):k!==void 0&&p>1&&h.push(k.label),a>0&&h.push(oe(e.toolGroupFailed,{count:a})),s>0&&h.push(oe(e.toolGroupDeclined,{count:s})),this.#r.replaceChildren(...h.map(T=>{let E=document.createElement("span");return E.className="tool-group-note",E.textContent=T,E})),this.#r.hidden=h.length===0}};function cx(t){return t===Mt.GROUPED}function el(t,e){try{return t()}catch(n){return console.warn(`ag-ui-chat: render failed for ${e}`,n),null}}function ux(t,e){for(let n of Array.from(t.childNodes))n.nodeType===Node.TEXT_NODE?e.push({node:n,parent:t}):ux(n,e)}function dx(t){let e=[];ux(t,e);let n=0;for(let{node:r,parent:o}of e){let i=document.createDocumentFragment();for(let a of r.data.split(/(\s+)/)){if(a==="")continue;if(/\s/.test(a)){i.appendChild(document.createTextNode(a));continue}let s=document.createElement("span");s.className="word",s.style.setProperty("--ag-ui-word-index",String(n)),s.textContent=a,i.appendChild(s),n+=1}o.replaceChild(i,r)}}function px({viewport:t,onMissedContent:e}){let n=!0,r=!1,o=()=>t.scrollHeight-t.scrollTop-t.clientHeight<=4,i=u=>{u!==r&&(r=u,e(r))},a=()=>{t.scrollTop=t.scrollHeight},s=()=>{n=o(),n&&i(!1)},l=()=>{if(n){a();return}i(!0)};t.addEventListener("scroll",s,{passive:!0});let c=new ResizeObserver(()=>{n&&a()});return c.observe(t),{follow:l,jump:()=>{n=!0,i(!1),a()},following:()=>n,dispose:()=>{t.removeEventListener("scroll",s),c.disconnect()}}}var tl=class{#e;#t=new Map;#n=new Map;#o=new Map;#r=new Set;#i;#a=null;#s=null;#l=null;#c=new WeakMap;#u=new WeakMap;#f=new WeakMap;constructor(e){this.#e=e}mountScroller(e,n){e.addEventListener("click",()=>{this.jump()},{signal:n}),this.#i=px({viewport:this.#e.messages,onMissedContent:r=>{e.dataset.missed=String(r)}})}disposeScroller(){this.#i.dispose()}follow(){this.#i.follow()}jump(){this.#i.jump()}isEmpty(){return!this.#e.emptyWrap.hidden}card(e){return this.#t.get(e)}cards(){return this.#t.values()}forgetCard(e){this.#t.delete(e)}setCardElement(e,n){this.#n.set(e,n)}markServerSettled(e){this.#r.add(e)}isServerSettled(e){return this.#r.has(e)}collapseThoughts(){this.#l?.collapse()}closeGroup(){this.#s!==null&&this.#s.childElementCount===0&&(this.#s.remove(),this.updateEmptyState()),this.#s=null,this.#l=null}releaseTurn(){this.#s=null,this.#l=null,this.hidePending(),this.#t.clear()}forgetCards(){this.#r.clear(),this.#n.clear(),this.#o.clear()}holdRunning(e,n){this.#o.set(e,n)}setAsking(e,n){this.#o.get(e)?.setAsking(n)}empty(){this.#e.messages.replaceChildren(this.#e.emptyWrap),this.updateEmptyState()}append(e,n){let r=document.createElement("div");return r.className=`message message--${e}`,r.setAttribute("part",`message message-${e}`),e===We.ASSISTANT?(r.innerHTML=Oo(n,{allowImages:this.#e.allowImages()}),Xs(r,this.#e.strings()),this.ensureGroup().appendChild(r)):(this.#s=null,r.textContent=n,this.#e.messages.appendChild(r)),this.updateEmptyState(),e===We.USER?this.jump():this.follow(),r}ensureGroup(){if(this.#s===null){let e=document.createElement("div");e.className="answer",e.setAttribute("part","answer"),this.#s=e,this.#e.messages.appendChild(e),this.updateEmptyState()}return this.#s}revealWords(e){this.#e.element.getAttribute("data-text-animation")==="word"&&dx(e)}updateEmptyState(){this.#e.emptyWrap.hidden=this.#e.messages.childElementCount>1,this.#e.element.toggleAttribute("data-empty",!this.#e.emptyWrap.hidden)}appendStoppedNote(){let e=document.createElement("div");e.className="stopped-note",e.setAttribute("part","stopped"),e.setAttribute("role","status"),e.textContent=this.#e.strings().stopped,this.ensureGroup().appendChild(e),this.updateEmptyState(),this.follow()}showPending(){if(this.#a!==null)return;let e=document.createElement("div");e.className="pending",e.setAttribute("part","pending"),e.setAttribute("role","status"),e.setAttribute("aria-label",this.#e.strings().thinking);for(let n=0;n<3;n+=1){let r=document.createElement("span");r.className="pending-dot",e.appendChild(r)}this.#a=e,this.ensureGroup().appendChild(e),this.updateEmptyState(),this.follow()}hidePending(){this.#a?.remove(),this.#a=null}showThoughts(){if(this.#l===null){this.#l=new Js(this.#e.strings());let e=this.ensureGroup();e.insertBefore(this.#l.element,e.firstChild),this.updateEmptyState(),this.follow()}return this.#l}noticeIfSkillLoad(e){let n=hs(e);return n===null?!1:(this.appendNotice("\u2728",oe(this.#e.strings().usingSkill,{name:n}),"skill"),!0)}appendNotice(e,n,r,o){this.ensureGroup().appendChild(Ps(e,n,r,o)),this.updateEmptyState(),this.follow()}renderToolOutput(e,n){let r=el(()=>e(n.args),`tool ${n.name}`);if(r===null)return;let o=this.#n.get(n.id),i=o?.closest(".tool-group");if(i==null)o?.after(r);else{let a=this.#u.get(i);a===void 0&&(a=document.createComment(""),i.after(a),this.#u.set(i,a));let s=r instanceof DocumentFragment?[...r.children]:[r];a.before(r);for(let l of s)this.#f.set(l,i)}this.afterGrew()}afterGrew(){this.updateEmptyState(),this.follow()}cardFor(e){let n=this.#t.get(e.id);if(n!==void 0)return n;let r=this.#e.resolveTool(e.name)?.parameters[Le],o=typeof r=="string"?r:this.#e.toolSummaries()[e.name]??this.#e.serverSummary(e.name)??ip(e.name),i=new xo(e.name,e.args,o,this.#e.strings(),{formatPayload:a=>this.#e.formatToolPayload(a)});return this.#t.set(e.id,i),cx(this.#e.toolDisplay())?this.#p().add(i.element,o):this.ensureGroup().appendChild(i.element),this.updateEmptyState(),this.follow(),i}revealStep(e){let n=e.element.closest(".tool-group");(n===null?void 0:this.#c.get(n))?.reveal()}#p(){let e=this.ensureGroup(),n=e.lastElementChild,r=n===null?void 0:this.#c.get(this.#f.get(n)??n);if(r!==void 0)return r;let o=new Qs(this.#e.strings());return this.#c.set(o.element,o),n===null?e.prepend(o.element):n.after(o.element),o}};var nl=class{#e;#t=new Map;#n=new Set;#o=new Map;constructor(e){this.#e=e}register(e){this.#t.set(e.type,e),this.#n.delete(e.type)}has(e){return this.#t.has(e)}unhandledTypes(){return[...this.#n]}clearBlocks(){this.#o.clear()}draw(e,n,r){let o=this.#t.get(n);if(o===void 0){this.#n.add(n);return}let i=el(()=>o.render(r),`activity ${n}`);if(i===null){this.#r(e,n,o.removedNotice,r);return}let a=this.#o.get(e);a===void 0?this.#e.ensureGroup().appendChild(i):a.replaceWith(i),this.#o.set(e,i),this.#e.afterTranscriptGrew()}#r(e,n,r,o){let i=this.#o.has(e);this.#o.get(e)?.remove(),this.#o.delete(e),console.warn(`ag-ui-chat: activity ${e} (${n}) was not drawable and has been removed. A chart's points must each be a finite JSON number; a numeric column serialised as a string (a Decimal, typically) is rejected rather than coerced.`,o),i&&r!==void 0&&this.#e.appendNotice("\u{1F4C9}",r,"chart-undrawable")}};var rl=class extends Error{constructor(e){super(e),this.name="ConnectionLostError"}},Po=class{#e;#t;#n;#o;#r;#i;#a;#s=new Set;#l;#c;#u;#f;#p=!1;constructor(e){this.#e=e.agent,this.#t=e.handlers,this.#n=e.getTools??(()=>[]),this.#o=e.getContext??(()=>[]),this.#r=e.executeTool??null,this.#i=e.resolveInterrupts??null,this.#a=e.onPersist??(()=>{}),this.#l=e.connectionLostMessage??"Connection lost",this.#c=e.unfinishedMessage??"Not finished: the run ended or moved on before this tool call returned a result.",this.#u=e.declinedMessage??"User declined the action.";let n=e.maxToolRounds??qn;this.#f=n>=1?Math.floor(n):qn,this.#b();let r=e.onStateChanged;r!==void 0&&this.#e.subscribe({onStateChanged:({state:o})=>{r(o)}})}get state(){return this.#e.state}setState(e){this.#e.setState({...e})}get running(){return this.#e.isRunning}get messages(){return this.#e.messages}async send(e,n=[]){this.#p=!1;let r={id:ke(),role:"user",content:e,...n.length>0?{metadata:{attachments:n}}:{}};this.#e.addMessage(r),this.#m(),await this.#v()}truncateToLastUser(){let e=[...this.#e.messages],n=-1;for(let[o,i]of e.entries())i.role==="user"&&(n=o);if(n===-1)return null;let r=e.slice(0,n+1);return this.#a(r),this.#e.setMessages(r),r}async resume(){this.#p=!1,await this.#v()}addToolResult(e,n){this.#e.addMessage({id:ke(),role:"tool",content:n,toolCallId:e}),this.#m()}cancel(){this.#p=!0,this.#e.abortRun()}async#v(){try{await this.#E(),this.#p&&this.#d()}catch(e){this.#p||$R(e)?this.#d():this.#t.onError(e instanceof Error?e.message:String(e))}finally{this.#t.onSettled()}}#d(){this.#m(),this.#t.onCancelled()}#b(){let e=this.#e.messages,n=e.map(UR);n.some((r,o)=>r!==e[o])&&this.#e.setMessages(n)}#g(e){let n=this.#e.messages,r=us(n,o=>({id:ke(),role:"tool",content:this.#c,toolCallId:o,metadata:{outcome:qe.INTERRUPTED}}),e);r!==n&&(this.#e.setMessages([...r]),this.#m())}#y(e,n){for(let r of e){let o=r.toolCallId;o!==void 0&&n[r.id]?.status==="cancelled"&&this.#e.addMessage({id:ke(),role:"tool",content:this.#u,toolCallId:o,metadata:{outcome:qe.DENIED}})}this.#m()}#m(){this.#a(this.#e.messages)}get annotatedMessages(){return this.messages}async#E(){let e,n=new Set;for(let r=0;r<this.#f;r+=1){if(this.#p)return;let o=[],i={terminal:!1,errored:!1,interrupts:[]},a={tools:this.#n(),context:this.#o()};if(e!==void 0&&(a.resume=e),this.#g(n),this.#p||(await this.#e.runAgent(a,this.#h(o,i)),e=void 0,n=new Set,this.#m(),this.#p))return;if(!i.terminal)throw new rl(this.#l);if(i.errored)return;if(i.interrupts.length>0){if(this.#i===null)return;let l=await this.#i(i.interrupts);if(this.#p){this.#y(i.interrupts,l);return}e=jb(i.interrupts,l),n=new Set(i.interrupts.flatMap(({toolCallId:c})=>c??[]));continue}if(this.#r===null||o.length===0)return;let s=!1;for(let l of o){if(this.#p)return;let c=await this.#r(l);if(c!==null){if(c.halt===!0)return;this.#e.addMessage({id:ke(),role:"tool",content:c.content,toolCallId:l.id,...c.outcome===void 0?{}:{metadata:{outcome:c.outcome}}}),this.#m(),s=!0}}if(!s)return}}#h(e,n){let r=this.#t,o=this.#s,i=()=>this.#p,a=new Set,s;return{onRunInitialized(){r.onRunStart()},onRunStartedEvent({event:l}){s=l.runId},onTextMessageStartEvent({event:l}){o.has(l.messageId)&&console.warn(`<ag-ui-chat>: the server reused message id "${l.messageId}", which was already closed. Its content will be appended to that earlier message rather than starting a new one, and the merged result is what gets persisted. Issue a fresh id per message.`)},onTextMessageContentEvent({textMessageBuffer:l}){r.onTextDelta(l)},onTextMessageEndEvent({event:l,textMessageBuffer:c}){o.add(l.messageId),r.onTextEnd(c,{messageId:l.messageId,...s===void 0?{}:{runId:s}})},onToolCallEndEvent({event:l,toolCallName:c,toolCallArgs:u}){let p={id:l.toolCallId,name:c,args:u};e.push(p),r.onToolCall(p)},onToolCallResultEvent({event:l}){let c=l.metadata?.outcome;r.onToolResult(l.toolCallId,Jn(l.content),c)},onActivitySnapshotEvent({event:l,messages:c}){if(c.some(p=>p.id===l.messageId&&p.role==="activity")){r.onActivityChanged(l.messageId,l.activityType,l.content);return}r.onActivity(l.activityType,l.content,l.messageId)},onActivityDeltaEvent({event:l}){a.add(l.messageId)},onCustomEvent({event:l}){r.onCustomEvent(l.name,l.value)},onSubagentStartedEvent({event:l}){r.onSubAgentStarted(l.subagentRunId,l.name,l.parentToolCallId??null)},onSubagentFinishedEvent({event:l}){r.onSubAgentFinished(l.subagentRunId)},onSubagentErrorEvent({event:l}){r.onSubAgentError(l.subagentRunId,l.message)},onMessagesSnapshotEvent({event:l}){r.onMessagesSnapshot(l.messages)},onMessagesChanged({messages:l}){if(a.size!==0){for(let c of a){let u=l.find(p=>p.id===c);u!==void 0&&u.role==="activity"&&r.onActivityChanged(c,u.activityType,u.content)}a.clear()}},onReasoningStartEvent(){r.onReasoningStart()},onReasoningMessageContentEvent({reasoningMessageBuffer:l}){r.onReasoningDelta(l)},onReasoningMessageEndEvent({reasoningMessageBuffer:l}){r.onReasoningDelta(l)},onReasoningEndEvent(){r.onReasoningEnd()},onRunFinishedEvent(l){n.terminal=!0,l.outcome==="interrupt"&&(n.interrupts=l.interrupts)},onRunErrorEvent({event:l}){n.terminal=!0,n.errored=!0,!i()&&r.onError(l.message)},onRunFinalized(){n.terminal=!0,r.onRunEnd()}}}};function $R(t){return t instanceof Error?t.name==="AbortError"||t instanceof TypeError&&/abort/i.test(t.message):!1}function UR(t){let{outcome:e,attachments:n,...r}=t;if(e===void 0&&n===void 0)return t;let o=r.metadata;return{...r,metadata:{...e===void 0?{}:{outcome:e},...n===void 0?{}:{attachments:n},...typeof o=="object"?o:{}}}}var hx="ag-ui-chat",Tr="thread",ap="threads",Lo="messages:",il="checkpoint:",zo="minted:",HR=60,GR=100,FR="New conversation",fx=!1;function bt(t,e){try{sessionStorage.setItem(t,e)}catch{if(fx)return;fx=!0,console.warn("<ag-ui-chat>: the browser refused a sessionStorage write \u2014 the quota is full, or storage is disabled for this context. The conversation continues, but it will not survive a page reload. Deleting a long conversation from the history drawer frees the quota.")}}function ol(t){return t===""?hx:`${hx}@${t}`}var it=class t{#e;constructor(e=""){this.#e=ol(e),e!==""&&t.adopt("",e)}static adopt(e,n){let r=`${ol(e)}:`,o=`${ol(n)}:`;for(let[i,a]of mx(r)){let s=sessionStorage.getItem(i),l=o+a;s!==null&&sessionStorage.getItem(l)===null&&bt(l,s),sessionStorage.removeItem(i)}}static purge(e){for(let[n]of mx(`${ol(e)}:`))sessionStorage.removeItem(n)}threadId(){return sessionStorage.getItem(this.#r(Tr))??this.newThread()}newThread(){let e=ke();return bt(this.#r(Tr),e),bt(this.#r(zo+e),"1"),e}isUnsent(e){return sessionStorage.getItem(this.#r(zo+e))!==null&&sessionStorage.getItem(this.#r(Lo+e))===null}loadMessages(e){return Promise.resolve(this.#i(this.#r(Lo+e)))}saveMessages(e,n){bt(this.#r(Lo+e),JSON.stringify(n)),sessionStorage.removeItem(this.#r(zo+e)),this.#t(e,n)}loadCheckpoint(e){return this.#i(this.#r(il+e))}saveCheckpoint(e,n){let r=this.#r(il+e);if(n===null){sessionStorage.removeItem(r);return}bt(r,JSON.stringify(n))}clear(e){sessionStorage.removeItem(this.#r(Lo+e)),sessionStorage.removeItem(this.#r(il+e)),sessionStorage.removeItem(this.#r(zo+e)),this.#o(this.#n().filter(n=>n.threadId!==e)),sessionStorage.getItem(this.#r(Tr))===e&&sessionStorage.removeItem(this.#r(Tr))}listThreads(){let e=this.#n().sort((n,r)=>r.updatedAt-n.updatedAt).map(({threadId:n,title:r,updatedAt:o,preview:i})=>({threadId:n,title:r,updatedAt:o,preview:i}));return Promise.resolve(e)}setActiveThread(e){bt(this.#r(Tr),e)}renameThread(e,n){let r=this.#n(),o=r.find(i=>i.threadId===e);o!==void 0&&(o.title=n,o.titleCustom=!0,this.#o(r))}#t(e,n){let r=this.#n(),o=r.find(s=>s.threadId===e),i=ZR(n),a=Date.now();o===void 0?r.push({threadId:e,title:gx(n),titleCustom:!1,preview:i,updatedAt:a}):(o.preview=i,o.updatedAt=a,o.titleCustom||(o.title=gx(n))),this.#o(r)}#n(){return this.#i(this.#r(ap))??[]}#o(e){let n=this.#r(ap);if(e.length===0){sessionStorage.removeItem(n);return}bt(n,JSON.stringify(e))}#r(e){return`${this.#e}:${e}`}#i(e){let n=sessionStorage.getItem(e);if(n===null)return null;try{return JSON.parse(n)}catch{return null}}};function mx(t){let e=[];for(let n=0;n<sessionStorage.length;n+=1){let r=sessionStorage.key(n);if(r===null||!r.startsWith(t))continue;let o=r.slice(t.length);BR(o)&&e.push([r,o])}return e}function BR(t){return t===Tr||t===ap||t.startsWith(Lo)||t.startsWith(il)||t.startsWith(zo)}function gx(t){for(let e of t)if(e.role==="user"){let n=vx(e.content);if(n!=="")return bx(n,HR)}return FR}function ZR(t){for(let e of[...t].reverse()){let n=vx(e.content);if(n!=="")return bx(n,GR)}return""}function vx(t){return typeof t=="string"?t.replace(/\s+/g," ").trim():""}function bx(t,e){return t.length<=e?t:`${t.slice(0,e-1).trimEnd()}\u2026`}function sp(t){let e=t.headers??{},n=new Set;return new Yb({url:t.endpoint,headers:e,initialState:{...t.initialState??{}},fetch:(r,o)=>{let i=t.getHeaders?.(),a=[...new Set([...Object.keys(e),...Object.keys(i??{})])].sort();if(cs(r,a,t.trustedOrigins??[],n),i===void 0)return fetch(r,st(o,t.credentials));let s=new Headers(o?.headers);for(let[l,c]of Object.entries(i))s.set(l,c);return fetch(r,st({...o,headers:s},t.credentials))},...t.threadId!==void 0?{threadId:t.threadId}:{},...t.initialMessages!==void 0?{initialMessages:[...t.initialMessages]}:{}})}function yx(t,e){let n=t.getAttribute(e);return n!==null&&n!=="false"}function lp(t,e){let n=t.getAttribute(e);if(n===null)return null;try{return JSON.parse(n)}catch{return console.warn(`<ag-ui-chat>: ${e} is not valid JSON, so it was ignored entirely and the built-in default is being used. Check the quoting -- JSON inside an HTML attribute needs single quotes around the attribute value, or its own double quotes escaped.`),null}}function wx(t){let e=t.getAttribute("data-max-tool-rounds");return e===null?qn:Number.parseInt(e,10)}var Do=class{#e;#t;#n;#o;#r;#i=new Set;#a=new Map;constructor(e,n=()=>({}),r=new it,o=()=>{},i=!0){this.#e=e.endsWith("/")?e:`${e}/`,this.#t=n,this.#n=r,this.#o=o,this.#r=i}threadId(){return this.#n.threadId()}setActiveThread(e){this.#n.setActiveThread(e)}newThread(){return ls(this.#n)}isUnsent(e){return this.#n.isUnsent?.(e)===!0}saveMessages(e,n){this.#n.saveMessages(e,this.#r?n:[])}loadCheckpoint(e){return this.#n.loadCheckpoint(e)}saveCheckpoint(e,n){this.#n.saveCheckpoint(e,n)}renameThread(e,n){this.#n.renameThread(e,n),this.#a.set(e,n),this.#f(e,"PATCH",{title:n})}clear(e){this.#n.clear(e),this.#i.add(e),this.#f(e,"DELETE")}async listThreads(){let e=await this.#s();return e===null?this.#n.listThreads():e.filter(n=>!this.#i.has(n.thread_id)).map(n=>this.#c(n))}async loadMessages(e){if(this.#n.isUnsent?.(e)===!0)return null;let n=await this.#u(`${this.#e}${encodeURIComponent(e)}/`);if(n===null||!n.ok)return this.#n.loadMessages(e);let r=await this.#l(n);return r===null?this.#n.loadMessages(e):r.messages??null}async#s(){let e=await this.#u(this.#e);if(e===null||!e.ok)return null;let n=await this.#l(e);return n===null?null:n.threads??[]}async#l(e){try{return await e.json()}catch{return null}}#c(e){return{threadId:e.thread_id,title:this.#a.get(e.thread_id)??e.title,updatedAt:e.updated_at===null?Number.NaN:Date.parse(e.updated_at),preview:e.preview}}async#u(e){try{return await fetch(e,st({headers:this.#t()},this.#o()))}catch{return null}}async#f(e,n,r){let o=this.#t();try{await fetch(`${this.#e}${encodeURIComponent(e)}/`,st({method:n,headers:r===void 0?o:{...o,"content-type":"application/json"},body:r===void 0?null:JSON.stringify(r)},this.#o()))}catch{}}};function xx(){return{tools:[],serverSettled:new Set,invalidated:new Set,announcedOutcome:!1}}function VR(t,e){let n={};for(let[r,o]of Object.entries(t))n[r]=(...i)=>{e()&&o(...i)};return n}var al=class{#e;#t=xx();constructor(e){this.#e=e}detach(){this.#t=xx()}forClient(e){let n=this.#t,r=()=>n===this.#t,{onSettled:o,...i}=this.#n(n);return{...VR(i,r),onSettled:()=>{r()&&o(),this.#o(n,e)}}}#n(e){return{onRunStart:()=>{this.#e.running()||(e.announcedOutcome=!1,this.#e.announcer.announce(this.#e.strings().announceResponding)),this.#e.setRunning(!0),this.#e.transcript.ensureGroup(),this.#e.transcript.showPending()},onReasoningStart:()=>{this.#e.transcript.hidePending(),this.#e.transcript.showThoughts()},onReasoningDelta:n=>{this.#e.transcript.showThoughts().stream(n)},onReasoningEnd:()=>{},onTextDelta:n=>{this.#e.transcript.hidePending(),this.#e.transcript.collapseThoughts(),this.#e.stream.queue(n),this.#e.stream.countDelta()},onTextEnd:(n,r)=>{if(n===""){this.#e.stream.end();return}let o=this.#e.stream.into(n);this.#e.stream.deltas<=1&&this.#e.transcript.revealWords(o),Xs(o,this.#e.strings()),this.#e.actions.attach(o,r),this.#e.stream.end(),this.#e.noteUnread()},onToolCall:n=>{this.#e.transcript.hidePending(),!this.#e.transcript.noticeIfSkillLoad(n)&&(e.tools.push({id:n.id,name:n.name}),this.#e.transcript.cardFor(n))},onActivity:(n,r,o)=>{this.#e.activities.draw(o,n,r)},onCustomEvent:(n,r)=>{if(n===Bl){this.#r(e,r);return}if(n===Fp){this.#e.subagents.report(r);return}this.#e.element.dispatchEvent(new CustomEvent(Ul,{detail:{name:n,value:r},bubbles:!0,composed:!0}))},onSubAgentStarted:(n,r,o)=>{this.#e.subagents.start(n,r,o)},onSubAgentFinished:n=>{this.#e.subagents.finish(n)},onSubAgentError:(n,r)=>{this.#e.subagents.fail(n,r)},onMessagesSnapshot:()=>{this.#e.transcript.appendNotice("\u{1F504}",this.#e.strings().historyReplaced,"history-replaced")},onToolResult:(n,r,o)=>{let i=this.#e.transcript.card(n);i!==void 0&&(i.settle(mo(o),r),this.#e.transcript.markServerSettled(n),e.serverSettled.add(n),this.#e.transcript.showPending())},onActivityChanged:(n,r,o)=>{this.#e.activities.draw(n,r,o)},onRunEnd:()=>{this.#e.transcript.hidePending(),this.#e.stream.end()},onError:n=>{e.announcedOutcome=!0,this.#e.announcer.announce(this.#e.strings().announceFailed),this.#e.transcript.hidePending();let r=this.#e.appendMessage(We.ASSISTANT,`\u26A0\uFE0F ${n}`);r.classList.add("message--failed"),this.#e.actions.attach(r,{rateable:!1}),this.#e.transcript.revealWords(r),this.#e.stream.end()},onCancelled:()=>{e.announcedOutcome=!0,this.#e.announcer.announce(this.#e.strings().announceStopped),this.#e.transcript.hidePending(),this.#e.transcript.appendStoppedNote(),this.#e.stream.end()},onSettled:()=>{e.announcedOutcome||this.#e.announcer.announce(this.#e.strings().announceAnswerReady),this.#e.transcript.hidePending(),this.#e.setRunning(!1),this.#e.stream.end();for(let n of this.#e.transcript.cards())n.settled||n.settle(J.INTERRUPTED,this.#e.strings().callNotFinished);this.#e.transcript.closeGroup()}}}#o(e,n){let r=e.tools.map(({id:i,name:a})=>({name:a,side:e.serverSettled.has(i)?"server":"client"})),o=[...e.invalidated];e.tools.length=0,e.serverSettled.clear(),e.invalidated.clear(),this.#e.element.dispatchEvent(new CustomEvent(Dl,{detail:{threadId:n,tools:r,invalidated:o},bubbles:!0,composed:!0}))}#r(e,n){let r=n??{},o=Array.isArray(r.keys)?r.keys.filter(i=>typeof i=="string"):[];if(o.length!==0){for(let i of o)e.invalidated.add(i);this.#e.element.dispatchEvent(new CustomEvent(Hl,{detail:{keys:o,reason:typeof r.reason=="string"?r.reason:null},bubbles:!0,composed:!0}))}}};var cp=new Set,sl=class{#e;#t="";#n=null;#o="";#r="";#i=null;constructor(e){this.#e=e}claim(){this.#t=this.#a()}release(){this.#n!==null&&(cp.delete(this.#n),this.#n=null)}conversationNamespace(e){return e===""?this.#t:`${this.#t}#${e}`}scopeStore(e,n){if(!(e instanceof it))return e;let r=this.conversationNamespace(n);return this.#i=r===""?e:new it(r),this.#i}rescopeStore(e,n){return e!==this.#i?null:(this.#i=new it(n),this.#i)}key(e){return this.#t===""?e:`${e}:${this.#t}`}readScopedItem(e){let n=sessionStorage.getItem(this.key(e));return n!==null||this.#t===""?n:sessionStorage.getItem(e)}readPreference(e){try{let n=localStorage.getItem(this.key(e));if(n!==null)return n}catch{}return this.readScopedItem(e)}writePreference(e,n){let r=this.key(e);try{localStorage.setItem(r,n)}catch{}bt(r,n)}clearPreference(e){let n=this.key(e);try{localStorage.removeItem(n)}catch{}try{sessionStorage.removeItem(n)}catch{}}#a(){let e=this.#e.id(),n=e!==""?e:this.#e.endpoint();return n===""?"":this.#r===n?this.#o:cp.has(n)?(this.#r=n,this.#o=`${n}~${ke()}`,console.warn(`<ag-ui-chat>: another element on this page already stores its conversation under "${n}", so this one has been given a throwaway namespace of its own \u2014 the two would otherwise share a thread pointer, a history drawer and every message. Give each <ag-ui-chat> its own id to keep them apart and let this one restore its conversation across reloads.`),this.#o):(cp.add(n),this.#n=n,n)}};var jR=["data-attachments-url","data-attachment-accept","data-attachment-max-bytes","data-transcribe-url","data-threads-url","data-threads-cache","data-tools-url","data-skills-url","data-skills","data-prompt-chips","data-slash-commands","data-theme-toggle","data-strings","data-icon-url"],dp=["omit","same-origin","include"];function up(t){return dp.includes(t)}var Ex="ag-ui-chat:collapsed",_x="ag-ui-chat:theme",Tx=["light","dark","auto"];function WR(t){return t.split(/\s+/).filter(e=>Tx.includes(e)).at(-1)}function Sx(t,e){return[...t.split(/\s+/).filter(r=>r!==""&&!Tx.includes(r)),e].join(" ")}function qR(t,e){try{return(t instanceof ShadowRoot?t:document).querySelector(e)??document.querySelector(e)}catch{return null}}var $o=class extends HTMLElement{agentFactory=sp;headers={};getHeaders=null;trustedOrigins=[];allowImages=!1;formatRelativeTime=null;autoConfirm=!1;askUser=!1;askUserRenderer=null;approvalRenderer=null;approveWithEdits=!1;confirmPredicate=null;getTools=()=>this.#I.defaultTools();getContext=()=>[...uc(this.getPageMap,this.autoInjectPageMap)];routeMap=[];navigate=null;getPageMap=null;autoInjectPageMap=!0;conversationStore=new it;uploadHandler=null;transcribeHandler=null;navigationResult=()=>({navigated:!0,url:window.location.href});skillContext=()=>({});toolSummaries={};formatToolPayload=null;strings={};resolvePageTarget=e=>document.querySelector(e);#e=new Set;#t=ge;#n=new zs({card:e=>this.#w.card(e),strings:()=>this.#t,follow:()=>this.#w.follow()});#o=new nl({ensureGroup:()=>this.#w.ensureGroup(),afterTranscriptGrew:()=>this.#w.afterGrew(),appendNotice:(e,n,r)=>this.#w.appendNotice(e,n,r)});#r=new Gs({element:this,strings:()=>this.#t,retry:()=>{this.retryLastTurn()},threadId:()=>this.#h.threadId});#i;#a=null;#s=[];#l=new Ms;#c=document.createElement("button");#u;#f=document.createElement("div");#p;#v;#d;#b;#g;#y;#m;#E;#h;#O;#G;#V;#M;#j;#T;#D;#W=document.createElement("span");#R=document.createElement("div");#re=document.createElement("button");#q=0;#P=null;#oe=!1;#ie=0;#ae;#w;#Y;#pe;#Te=document.createElement("span");#C;#_;#se=[];#F=[];#K=document.createElement("div");#L=null;#ke="";#B=()=>{this.#_.publishVisualViewport(),this.#U(),!this.#_.dragging()&&this.#_.restoreLauncherPosition()};#he;#X;#N=!1;#fe=!1;#J=new AbortController;#Ae=!1;#me=null;#Q={};#Ie={};#ge=null;#z=null;#$={};#A=!1;#x=null;#Re=null;#Ce=null;#ve=new Is;#I=new ps({element:this,routeMap:()=>this.routeMap,navigate:()=>this.navigate,getPageMap:()=>this.getPageMap,resolvePageTarget:e=>this.resolvePageTarget(e),getTools:()=>this.getTools(),askUser:()=>this.askUser,askUserRenderer:()=>this.askUserRenderer,decision:this.#ve,setAsking:(e,n)=>this.#w.setAsking(e,n),ensureGroup:()=>this.#w.ensureGroup(),strings:()=>this.#t,hidePending:()=>this.#w.hidePending(),updateEmptyState:()=>this.#w.updateEmptyState(),follow:()=>this.#w.follow(),fetchInit:e=>this.#Le(e)});#Ne=new Ks({openBubble:()=>this.appendMessage(We.ASSISTANT,""),allowImages:()=>this.allowImages,follow:()=>this.#w.follow()});#Oe=new Kn(this);#S=new sl({id:()=>this.id,endpoint:()=>this.endpoint});#Z;constructor(){super(),this.#i=this.attachShadow({mode:"open"}),this.#p=document.createElement("div"),this.#v=document.createElement("div"),this.#d=document.createElement("textarea"),this.#b=document.createElement("button"),this.#g=document.createElement("span"),this.#O=document.createElement("div"),this.#G=document.createElement("button"),this.#V=document.createElement("input"),this.#M=document.createElement("div"),this.#he=document.createElement("span"),this.#j=document.createElement("button"),this.#T=document.createElement("button"),this.#D=document.createElement("span"),this.#ae=document.createElement("div"),this.#w=new tl({element:this,messages:this.#v,emptyWrap:this.#ae,strings:()=>this.#t,allowImages:()=>this.allowImages,resolveTool:e=>this.#I.resolve(e),toolSummaries:()=>this.toolSummaries,serverSummary:e=>this.#I.summary(e),toolDisplay:()=>this.toolDisplay,formatToolPayload:e=>this.formatToolPayload?.(e)??null}),this.#Y=new ms({element:this,transcript:this.#w,tools:this.#I,decision:this.#ve,strings:()=>this.#t,announce:e=>this.#l.announce(e),autoConfirm:()=>this.autoConfirm,confirmPredicate:()=>this.confirmPredicate,getPageMap:()=>this.getPageMap,navigate:()=>this.navigate,approveWithEdits:()=>this.approveWithEdits,approvalRenderer:()=>this.approvalRenderer,getContext:()=>this.getContext(),conversationStore:()=>this.conversationStore,threadId:()=>this.#h.threadId,tenure:()=>this.#Q,conversation:()=>this.#Ie}),this.#pe=new al({element:this,transcript:this.#w,stream:this.#Ne,actions:this.#r,activities:this.#o,subagents:this.#n,announcer:this.#l,strings:()=>this.#t,running:()=>this.#A,setRunning:e=>this.#te(e),appendMessage:(e,n)=>this.appendMessage(e,n),noteUnread:()=>this.#tt()}),this.#_=new Os({element:this,launcher:this.#T,root:this.#i,connected:()=>this.#N,collapsed:()=>this.collapsed,collapsible:()=>this.#k().collapseTo!==null,strings:()=>this.#t,readPreference:e=>this.#S.readPreference(e),writePreference:(e,n)=>this.#S.writePreference(e,n),clearPreference:e=>this.#S.clearPreference(e),announceSurfaceChange:(e,n)=>this.#Ye(e,n)}),this.#u=new Ts({element:this,root:this.#i,messages:this.#v,messagesWrap:this.#f,input:this.#d,strings:()=>this.#t,autoGrow:()=>Xt(this.#d),quote:e=>this.quote(e)}),this.#C=new xs({element:this,chat:this.#p,slot:this.#M,fileInput:this.#V,button:this.#G,strings:()=>this.#t,uploadHandler:()=>this.uploadHandler,headersFor:e=>this.#ee(e),credentialsOption:()=>this.#ye()}),this.#X=new _s({element:this,slot:this.#he,input:this.#d,strings:()=>this.#t,transcribeHandler:()=>this.transcribeHandler,headersFor:e=>this.#ee(e),credentialsOption:()=>this.#ye(),onInput:()=>this.#Ee()}),this.registerActivityRenderer({type:Vl,render:e=>{let n=YR(e);return n===null?null:Ps("\u{1F5DC}",oe(this.#t.historyCompacted,{count:n}),"compaction")}}),this.registerActivityRenderer({type:Fl,render:e=>Mo(e,this.#t,n=>{this.sendMessage(n)})}),this.#y=new Ss(e=>this.#Z.apply(e)),this.#Z=new ti({element:this,menu:this.#y,input:this.#d,hint:this.#O,strings:()=>this.#t,context:()=>this.skillContext(),flag:e=>yx(this,e),readJsonAttribute:e=>lp(this,e),fetchInit:e=>this.#Le(e),send:e=>{this.sendMessage(e)},submit:()=>{this.#_e()},autoGrow:()=>Xt(this.#d)}),this.#m=new As({onSelect:e=>{this.#h.switchThread(e).catch(()=>{})},onNew:()=>{this.newChat(),this.#h.refreshDrawer()},onRename:(e,n)=>{this.#h.renameThread(e,n)},onDelete:e=>{this.#h.deleteThread(e)}}),this.#E=new ho((e,n)=>{this.#h.continueRun(e,n).catch(r=>{console.warn("<ag-ui-chat>: continuing a run failed",r)})}),this.#h=new ks({element:this,drawer:this.#m,checkpoints:this.#E,transcript:this.#w,actions:this.#r,activities:this.#o,tools:this.#I,input:this.#d,hint:this.#O,strings:()=>this.#t,conversationStore:()=>this.conversationStore,formatRelativeTime:()=>this.formatRelativeTime,navigationResult:()=>this.navigationResult,headersFor:e=>this.#ee(e),requestCredentials:()=>this.#le(),appendMessage:(e,n)=>this.appendMessage(e,n),announceTurn:e=>this.#We(e,[]),recordTurn:e=>this.#je(e),autoGrow:()=>Xt(this.#d),continuationEnded:()=>this.#ne(),client:()=>this.#z,ensureClient:()=>this.#Se(),buildClient:e=>this.#qe(e),releaseClient:()=>{this.#z=null},running:()=>this.#A||this.#x!==null,holdRun:e=>{let n={};return this.#x=n,this.#Re=e===null?null:{hold:n,restored:e},{release:()=>{this.#x===n&&(this.#x=null,this.#ne())}}},cancelRun:()=>this.#H(),resetState:()=>this.#ce(),setRunning:e=>this.#te(e),threadChanged:(e,n)=>this.#Ve(e,n)})}static get observedAttributes(){return["title-text","placement","collapse-to","anchor","credentials","user-key","user-name",...jR]}attributeChangedCallback(e,n,r){if(e==="credentials"){r!==null&&!up(r)&&console.error(`<ag-ui-chat>: credentials="${r}" is not a fetch credentials mode (${dp.join(" / ")}) \u2014 it is being ignored, so requests use the browser default and cross-origin cookies will not be sent.`);return}if(e==="anchor"){this.#oe=!1,this.#U();return}if(e==="placement"||e==="collapse-to"){this.#_.releaseOwnedAxes(),this.#_.releaseLauncherPosition(),this.#k().collapseTo===null&&this.collapsed&&this.setCollapsed(!1),this.#$e(),e==="collapse-to"&&(this.#xe(),this.#k().collapseTo!=="bar"&&this.#we()),this.#U(),requestAnimationFrame(()=>this.#_.syncResizeAnchor());return}if(e==="title-text"){this.#g.textContent=r??this.#t.title,this.#W.textContent=this.#g.textContent;return}if(e==="user-name"){this.#Pe();return}if(e==="user-key"){this.#N&&(n??"")!==(r??"")&&this.#Ue(n??"",r??"");return}n===r||!this.#N||console.warn(`<ag-ui-chat>: "${e}" was changed after the element connected, and is read only while connecting \u2014 this assignment has no effect. Set it before the element enters the DOM (in the markup, or on the element before appending it); frameworks that patch attributes after mount should bind it at creation. To apply a new value now, remove and re-insert the element.`)}registerTool(e){this.#I.register(e)}get sharedState(){return this.#Me()?.state??this.#$}set sharedState(e){this.#$={...e},this.#Me()?.setState(this.#$)}#Me(){return this.#h.continuation??this.#z}registerPageState(e){this.#I.registerPageState(e)}registerStateHook(e){this.registerPageState(e)}get endpoint(){return this.getAttribute("endpoint")??""}set endpoint(e){this.setAttribute("endpoint",e)}get userKey(){return this.getAttribute("user-key")??""}set userKey(e){this.setAttribute("user-key",e)}get userName(){return this.getAttribute("user-name")??""}set userName(e){this.setAttribute("user-name",e)}#Pe(){let e=this.userName.trim();this.#Te.textContent=e===""?this.#t.greetingNoName:oe(this.#t.greeting,{name:e})}get credentials(){let e=this.getAttribute("credentials");return e!==null&&up(e)?e:null}set credentials(e){if(e===null){this.removeAttribute("credentials");return}if(!up(e))throw new TypeError(`<ag-ui-chat>: credentials must be one of ${dp.map(n=>`"${n}"`).join(", ")} (got ${JSON.stringify(e)}).`);this.setAttribute("credentials",e)}#be(){return{...this.headers,...this.getHeaders?.()}}#ee(e){let n=this.#be();return cs(e,Object.keys(n),this.trustedOrigins,this.#e),n}#le(){return this.credentials??void 0}#ye(){let e=this.#le();return e===void 0?{}:{credentials:e}}#Le(e){return st({headers:this.#ee(e)},this.#le())}get toolDisplay(){let e=this.getAttribute("data-tool-display");return e===Mt.INLINE||e===Mt.MINIMAL||e===Mt.COMPACT||e===Mt.FULL?e:Mt.GROUPED}set toolDisplay(e){this.setAttribute("data-tool-display",e)}get toolGroupDisplay(){let e=this.getAttribute("data-tool-group-display");return e===Yn.INLINE||e===Yn.MINIMAL||e===Yn.COMPACT?e:Yn.FULL}set toolGroupDisplay(e){this.setAttribute("data-tool-group-display",e)}get extraStyles(){return this.#s}set extraStyles(e){this.#s=[...e],this.#a!==null&&(this.#i.adoptedStyleSheets=[this.#a,...this.#s])}connectedCallback(){if(this.#J=new AbortController,this.#Ae&&this.#Be(),this.#Ae=!0,this.#S.claim(),this.#Oe.join(),this.#_.restoreSize(),requestAnimationFrame(()=>{this.#_.restoreLauncherPosition(),this.#_.syncResizeAnchor()}),this.#t=dd({...this.#Xe(),...this.strings}),this.getAttribute("data-theme-toggle")!==null){let o=this.#S.readPreference(_x),i=o===null?void 0:WR(o);i!==void 0&&this.setAttribute("theme",Sx(this.getAttribute("theme")??"",i))}this.#et(),this.#m.setStrings(this.#t),this.#E.setStrings(this.#t),this.#k().collapseTo!==null&&this.#Qe()&&this.setAttribute("collapsed",""),this.#xe(),this.#$e();let e=new ResizeObserver(()=>this.#U());e.observe(this.#R),this.#J.signal.addEventListener("abort",()=>e.disconnect()),this.#U(),this.#k().collapseTo==="none"&&this.dispatchEvent(new CustomEvent(Ko,{detail:{collapsed:this.collapsed},bubbles:!0,composed:!0})),this.#Z.init();let n=this.#me,r=n!==null&&n!==this.userKey;r&&this.#Ue(n,this.userKey),this.#me=this.userKey,this.conversationStore=this.#S.scopeStore(this.#De(),this.userKey),window.addEventListener("resize",this.#B),window.visualViewport?.addEventListener("resize",this.#B),window.visualViewport?.addEventListener("scroll",this.#B),this.#_.publishVisualViewport(),this.#ze(),this.#C.wire(this.#J.signal),this.#X.wire(),this.#h.adoptActiveThread(),queueMicrotask(()=>this.#Ke()),this.#h.rehydrate(r&&n!==""?"rescope":"restore"),r&&this.#h.refreshDrawer(),this.#N=!0,this.#fe&&(this.#fe=!1,this.newChat())}#Ke(){this.#N&&(this.#I.fetchCatalog(),this.#Z.fetch())}async reload(){this.#H(),this.#ce(),this.#te(!1),await Promise.all([this.#I.fetchCatalog(),this.#Z.fetch(),this.#h.rehydrate("restore")])}disconnectedCallback(){this.#N=!1,this.#J.abort(),window.removeEventListener("resize",this.#B),window.visualViewport?.removeEventListener("resize",this.#B),window.visualViewport?.removeEventListener("scroll",this.#B),this.#S.release(),this.#Oe.leave(),this.#H(),this.#u.detachPageOffer(),this.#C.tray?.dispose(),this.#X.dispose(),this.#w.disposeScroller(),this.#l.dispose()}#Xe(){let e=lp(this,"data-strings");return typeof e=="object"&&e!==null?e:{}}quote(e){this.#u.insert(e)}offerQuoteInPage(e=document.body){return this.#u.offerInPage(e)}#ze(){this.#ge=null;let e=this.getAttribute("data-threads-url");if(e!==null){let n=this.conversationStore,r=new Do(e,()=>this.#ee(e),n,()=>this.#le(),this.getAttribute("data-threads-cache")!=="false");this.#ge={remote:r,inner:n},this.conversationStore=r}}#De(){let e=this.#ge;return e!==null&&this.conversationStore===e.remote?e.inner:this.conversationStore}setSkills(e){this.#Z.setClientSkills(e)}get collapsed(){return this.hasAttribute("collapsed")}set collapsed(e){this.setCollapsed(e)}setCollapsed(e,n={}){e&&this.#k().collapseTo===null||(n.announce===!0&&e&&!this.collapsed&&this.#Ye(this.#t.chatMinimised,null),e||this.#_.restoreLauncherPosition(),e?this.setAttribute("collapsed",""):(this.#we(),this.removeAttribute("collapsed")),this.#U(),bt(this.#S.key(Ex),e?"1":"0"),this.#ue(0),this.dispatchEvent(new CustomEvent(Ko,{detail:{collapsed:e},bubbles:!0,composed:!0})))}get unread(){return this.#ie}get threadId(){let e=this.#h.threadId;return e===""?null:e}get running(){return this.#A}get barHeight(){return this.#q}get anchor(){return this.#P}set anchor(e){this.#P=e,this.#oe=!1,this.#U()}#k(){return Ns(this.getAttribute("placement"),this.getAttribute("collapse-to"))}#$e(){let e=this.#k().collapseTo;e===null?this.removeAttribute("data-collapsed-to"):this.setAttribute("data-collapsed-to",e)}#U(){if(!this.isConnected)return;let e=this.#_.syncDock(this.#R,this.#Je());e!==this.#q&&(this.#q=e,this.dispatchEvent(new CustomEvent(Ml,{detail:{height:e},bubbles:!0,composed:!0})))}#Je(){if(this.#k().collapseTo!=="none")return null;let e=this.getAttribute("anchor")??"";if(this.#P===null&&e==="")return null;let n=this.#P??qR(this.getRootNode(),e);return n?.isConnected===!0?n:(this.#oe||(this.#oe=!0,console.warn(`<ag-ui-chat>: the anchor ${this.#P===null?`"${e}"`:"element"} is not in the document, so the panel opens from its placement's own corner.`)),null)}#Qe(){let e=this.#S.readScopedItem(Ex);return e!==null?e==="1":this.#k().startsCollapsed&&!this.hasAttribute("data-start-open")}describeSurface(){return this.#_.describeSurface()}moveTo(e,n={}){return this.#_.moveTo(e,n)}resetSize(){this.#_.resetSize()}toggleCollapsed(){this.setCollapsed(!this.collapsed)}toggleTheme(){let e=this.getAttribute("theme")??"",n=this.#Ge()==="dark"?"light":"dark";this.setAttribute("theme",Sx(e,n)),this.#S.writePreference(_x,n),this.#Fe()}#Ue(e,n){this.#me=n;let r=this.#N,o=this.#S.conversationNamespace(e),i=this.#S.conversationNamespace(n);if(e===""){it.adopt(o,i),r&&this.#He(i);return}this.#Q={},it.purge(o),r&&this.#He(i),this.#Y.forgetWaivers(),this.#H(),this.#ce(),this.#$={},this.#d.value="",this.#Ee(),this.#te(!1),this.#ue(0),r&&(this.#X.dispose(),this.#X.wire(),this.#h.adoptActiveThread(),this.#h.rehydrate("rescope"),this.#h.refreshDrawer())}#He(e){let n=this.#S.rescopeStore(this.#De(),e);n!==null&&(this.conversationStore=n,this.#ze())}#Ge(){let e=(this.getAttribute("theme")??"").split(/\s+/);if(e.includes("dark"))return"dark";if(e.includes("light"))return"light";let n=getComputedStyle(this).colorScheme.split(/\s+/),r=n.includes("dark");return r!==n.includes("light")?r?"dark":"light":(r||e.includes("auto"))&&window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light"}#Fe(){let e=this.#Ge()==="dark";this.#j.replaceChildren(wr("theme","theme-icon",e?qp:Wp,null))}openThreads(){this.collapsed&&this.#k().collapseTo==="bar"?this.#R.append(this.#m.element):this.#we(),this.#h.openThreads()}#we(){this.#m.element.parentNode===this.#R&&(this.#m.close(),this.#p.insertBefore(this.#m.element,this.#E.element))}openCheckpoints(){this.#h.openCheckpoints()}closeThreads(){this.#m.close()}closeCheckpoints(){this.#E.close()}switchThread(e){return this.#N?this.#h.switchThread(e):Promise.resolve()}deleteThread(e){this.#N&&this.#h.deleteThread(e)}toggleCheckpoints(){if(this.#E.open_){this.#E.close();return}this.openCheckpoints()}newChat(){if(!this.#N){this.#fe=!0;return}this.#H(),this.#h.reapUnsent(),this.#ce(),this.#h.startThread(),this.#te(!1),this.#ue(0),this.#Ve(this.#h.threadId,"new"),this.collapsed||this.#d.focus({preventScroll:!0})}#ce(){this.#Be(),this.#se.length=0,this.#L=null}#Be(){this.#z=null,this.#pe.detach(),this.#Ie={},this.#Ze(),this.#h.forgetRestored()}#Ze(){this.#Ne.end(),this.#w.releaseTurn(),this.#n.clear(),this.#w.forgetCards(),this.#o.clearBlocks(),this.#r.forget(),this.#C.tray?.clear(),this.removeAttribute("data-composer-settling"),this.removeAttribute("data-restoring"),this.#w.empty()}async retryLastTurn(){if(this.#A||this.#x!==null||this.#h.continuation!==null)return!1;let e={};this.#x=e;try{let n=this.#Se(),r=n.truncateToLastUser();if(r===null||this.#x!==e)return!1;this.#Ze();for(let o of r)if(this.#h.replay(o),this.#x!==e)return!1;return await n.resume(),!0}finally{this.#x===e&&(this.#x=null,this.#ne())}}appendMessage(e,n){return this.#w.append(e,n)}#et(){let{signal:e}=this.#J;this.#p.className="chat",this.#p.setAttribute("part","panel");let n=this.getAttribute("title-text")??this.#t.title,r=this.getAttribute("data-theme-toggle")!==null,{header:o,checkpoints:i}=sw({host:this,title:this.#g,titleText:n,iconUrl:this.getAttribute("data-icon-url"),strings:this.#t,withCheckpoints:this.#h.runs()!==null,themeToggle:r?this.#j:null,signal:e,onHistory:()=>this.openThreads(),onCheckpoints:()=>this.toggleCheckpoints(),onNewChat:()=>this.newChat(),onCollapse:()=>this.toggleCollapsed(),onToggleTheme:()=>this.toggleTheme()});r&&this.#Fe(),this.#_.enablePanelDrag(o),ax({messages:this.#v,jumpButton:this.#c,emptyWrap:this.#ae,greetingText:this.#Te,starters:lx(this,this.#t,u=>{this.sendMessage(u)}),strings:this.#t}),this.#Pe(),this.#u.mount(e),this.#w.mountScroller(this.#c,e),this.#l.mount(),this.#v.append(this.#ae),this.#w.updateEmptyState();let a=ry({input:this.#d,send:this.#b,attachButton:this.#G,fileInput:this.#V,voiceSlot:this.#he,hint:this.#O,queuedRow:this.#K,attachSlot:this.#M,strings:this.#t,signal:e,onKeydown:u=>this.#nt(u),onInput:()=>this.#Ee(),onSend:()=>{if(this.#A){this.#H();return}this.#_e()},onFilesPicked:()=>this.#C.onFilesPicked()}),s=document.createElement("slot");s.name="above-composer";let l=document.createElement("slot");l.name="footer",this.#f.className="messages-wrap",this.#f.replaceChildren(this.#v,this.#c,this.#u.button),this.#p.replaceChildren(o,this.#f,this.#y.palette,this.#y.chips,this.#O,this.#K,this.#M,s,a,l,this.#m.element,this.#E.element),this.#p.addEventListener("pointerdown",u=>{if(!this.#E.open_)return;let p=u.composedPath();p.includes(this.#E.element)||p.includes(i)||this.#E.close()},{signal:e}),lw({launcher:this.#T,badge:this.#D,railLabel:this.#W,bar:this.#R,barHistory:this.#re,titleText:n,iconUrl:uw(this),strings:this.#t,signal:e,onOpen:()=>this.setCollapsed(this.#k().collapseTo==="bar"&&!this.collapsed),onHistory:()=>{this.#m.isOpen()?this.#m.close():this.openThreads()}}),document.addEventListener("pointerdown",u=>{this.#m.element.parentNode===this.#R&&this.#m.isOpen()&&(u.composedPath().includes(this.#R)||this.#m.close())},{signal:e}),this.#_.enableLauncherDrag(e),this.#_.mountResizeGrips(this.#p),this.#a=aw(this.#i,this.#s);let c=this.#_.probe;c.className="viewport-probe",c.setAttribute("aria-hidden","true"),this.#i.replaceChildren(c,this.#l.region,this.#p,this.#R)}#xe(){this.#T.setAttribute("aria-expanded",String(!this.collapsed));let e=this.#ie;this.#D.textContent=e>9?"9+":String(e),this.#D.hidden=e===0||!cw(this);let n=!this.collapsed&&this.#k().collapseTo==="bar"?this.#t.collapse:this.#D.hidden?this.#t.expand:oe(this.#t.expandUnread,{count:e});this.#T.setAttribute("aria-label",n),this.#T.title=n}#ue(e){this.#ie=e,this.#xe(),this.dispatchEvent(new CustomEvent(Pl,{detail:{unread:e},bubbles:!0,composed:!0}))}#tt(){this.collapsed&&this.#ue(this.#ie+1)}#Ee(){this.#y.onInput(this.#d.value),this.#O.hidden=!0,Xt(this.#d),this.#L=null}#nt(e){if(this.#y.onKeydown(e)){e.preventDefault();return}if(e.key==="Escape"&&this.#A){e.preventDefault(),this.#H();return}if(e.key==="Enter"&&!e.shiftKey){e.preventDefault(),this.#_e();return}this.#rt(e)}#rt(e){let n=e.key==="ArrowUp";if(!n&&e.key!=="ArrowDown"||this.#y.isOpen())return;let r=this.#se;if(r.length===0||(this.#d.value!==this.#ke&&(this.#L=null),this.#L===null&&(!n||this.#d.value!=="")))return;let o=this.#L===null?0:this.#L+(n?1:-1);o>=r.length||(e.preventDefault(),this.#L=o<0?null:o,this.#d.value=o<0?"":r[o],this.#ke=this.#d.value,this.#d.setSelectionRange(this.#d.value.length,this.#d.value.length),Xt(this.#d))}#H(){this.#F.length=0,this.#de(),this.#ve.abort(),this.#z?.cancel(),this.#x=null,this.#h.stopContinuation()}#Ve(e,n){let r={threadId:e,previousThreadId:this.#Ce,reason:n};this.#Ce=e,this.dispatchEvent(new CustomEvent($l,{detail:r,bubbles:!0,composed:!0}))}#te(e){let n=this.#A&&!e;this.#A=e,e&&(this.#x=null);let r=e?this.#t.stop:this.#t.send;this.#b.title=r,this.#b.setAttribute("aria-label",r),this.#b.dataset.state=e?"running":"idle",this.toggleAttribute("data-running",e),n&&this.#ne()}#ne(){if(this.#A||this.#h.continuation!==null)return;let e=this.#F.shift();this.#de(),e!==void 0&&this.sendMessage(e)}#de(){this.#K.replaceChildren(),this.#K.hidden=this.#F.length===0;for(let[e,n]of this.#F.entries()){let r=document.createElement("button");r.type="button",r.className="queued-chip",r.setAttribute("part","queued-chip"),r.textContent=n,r.title=oe(this.#t.removeQueued,{text:n}),r.setAttribute("aria-label",r.title),r.addEventListener("click",()=>{this.#F.splice(e,1),this.#de()}),this.#K.appendChild(r)}}#je(e){e!==""&&this.#se[0]!==e&&this.#se.unshift(e),this.#L=null}async#_e(){let e=this.#d.value.trim(),n=this.#C.tray?.readyRefs()??[];if(!(e===""&&n.length===0)){if(this.#je(e),this.#A||this.#x!==null||this.#h.continuation!==null){e!==""&&(this.#F.push(e),this.#de(),this.#d.value="",Xt(this.#d));return}this.#d.value="",Xt(this.#d),this.#C.tray?.hasPending()===!0&&this.#w.appendNotice("\u{1F4CE}",oe(this.#t.attachmentsStillUploading,{n:this.#C.tray.pendingCount()}),"attachment-pending"),this.#C.tray?.clearReady(),await this.sendMessage(e,n)}}async sendMessage(e,n=[]){if(e===""&&n.length===0)return!1;let r=this.#Re;if(r!==null&&this.#x===r.hold){let i={};return this.#x=i,await r.restored,this.#x!==i?!1:(this.#x=null,this.sendMessage(e,n))}if(this.#A||this.#x!==null||this.#h.continuation!==null)return!1;let o={};this.#x=o;try{if(this.#w.isEmpty()&&this.setAttribute("data-composer-settling",""),this.#We(e,n),this.#x!==o)return!1;let i=this.endpoint!=="";return await this.#ot(e,n),i}finally{this.#x===o&&(this.#x=null,this.#ne())}}#We(e,n){let r=this.appendMessage(We.USER,e);n.length>0&&r.appendChild(bs(n)),this.dispatchEvent(new CustomEvent(Ol,{detail:{content:e,attachments:n},bubbles:!0,composed:!0}))}attachFile(e){return this.#C.attach(e)}async#ot(e,n){if(this.endpoint===""){console.error('<ag-ui-chat>: no endpoint is set, so this message was not sent and no request was made. Point the element at your AG-UI mount with the endpoint attribute (endpoint="/agent/"), or assign chat.endpoint before sending.'),this.#w.appendNotice("\u26A0",this.#t.notConnected,"not-connected");return}await this.#Se().send(e,n)}#Se(){return this.#z===null&&(this.#z=this.#qe({endpoint:this.endpoint,initialMessages:this.#h.restored,follows:[]})),this.#z}#qe(e){let n=this.#h.threadId,r=this.#Q,o=this.agentFactory({endpoint:e.endpoint,headers:this.#be(),getHeaders:()=>this.#be(),trustedOrigins:this.trustedOrigins,...this.#ye(),threadId:n,initialMessages:e.initialMessages,initialState:this.#$});return new Po({agent:o,handlers:this.#pe.forClient(n),getTools:()=>this.#I.advertise(),getContext:()=>this.#Y.buildContext(),executeTool:i=>this.#Y.execute(i),resolveInterrupts:i=>this.#Y.resolveInterrupts(i),onPersist:i=>{if(r!==this.#Q)return;let a=[...e.follows,...i];this.conversationStore.saveMessages(n,a),e.onSaved?.(a)},onStateChanged:i=>{r===this.#Q&&this.#it(i)},connectionLostMessage:this.#t.connectionLost,unfinishedMessage:this.#t.callNotFinished,declinedMessage:this.#t.declinedAction,maxToolRounds:wx(this)})}#it(e){this.#$={...e},this.dispatchEvent(new CustomEvent(Ll,{detail:{state:this.#$},bubbles:!0,composed:!0}))}#Ye(e,n){this.#w.appendNotice("\u2922",e,"surface",n===null?void 0:{label:this.#t.undo,onActivate:n})}enableCharts(e=["tool","activity"]){let n=!this.#o.has(Qo)&&!this.#I.has(gs);e.includes("activity")&&this.registerActivityRenderer({type:Qo,render:r=>{let o=yr(r);return o===null?null:co(o)},removedNotice:this.#t.chartUndrawable}),e.includes("tool")&&this.registerTool(ny()),n&&this.isConnected&&this.reload()}registerActivityRenderer(e){this.#o.register(e)}get unhandledActivityTypes(){return this.#o.unhandledTypes()}};function YR(t){let e=t?.removed;return typeof e=="number"?e:null}function KR(){customElements.get(Yo)===void 0&&customElements.define(Yo,$o)}async function XR(t,e,n={}){await Pt(t),await ic(t,{...n,flashMs:n.flashMs??0}),await rc(t,e,n)}async function JR(t,e={}){await Pt(t),await oc(t,e)}async function QR(t,e={}){await Pt(t),await ac(t,e)}async function eC(t,e,n={}){await Pt(t),await sc(t,e,n)}async function tC(t,e,n={}){await Pt(t),await lc(t,e,n)}function nC(t,e){t instanceof HTMLInputElement&&t.type==="checkbox"?Pr(t,!!e):cn(t,String(e)),t.dispatchEvent(new Event("input",{bubbles:!0})),t.dispatchEvent(new Event("change",{bubbles:!0}))}var rC="0.48.0";export{zl as ATTACHMENT_EVENT,$o as AgUiChat,Po as AgUiClient,Ml as BAR_HEIGHT_EVENT,Qo as CHART_ACTIVITY_TYPE,gs as CHART_TOOL_NAME,ni as CHAT_CORNERS,Vl as COMPACTION_ACTIVITY_TYPE,Ul as CUSTOM_AGENT_EVENT,ho as CheckpointMenu,Or as ClientToolRegistry,rl as ConnectionLostError,ge as DEFAULT_UI_STRINGS,Yo as ELEMENT_TAG,Gl as FEEDBACK_EVENT,Bl as INVALIDATE_CUSTOM_NAME,Hl as INVALIDATE_EVENT,jl as LOAD_CAPABILITY_TOOL,nA as MAX_QUOTE_CHARS,CR as MAX_SUGGESTIONS,NR as MAX_SUGGESTION_CHARS,qn as MAX_TOOL_ROUNDS,an as MESSAGE_ACTIONS,We as MESSAGE_ROLE,zr as PAGE_ACTIONS,Dl as RUN_FINISHED_EVENT,Do as RemoteConversationStore,fo as RunIndex,Ll as STATE_EVENT,Ol as SUBMIT_EVENT,Fl as SUGGESTIONS_ACTIVITY_TYPE,it as SessionStorageStore,$l as THREAD_EVENT,Ko as TOGGLE_EVENT,J as TOOL_CALL_STATUS,Mt as TOOL_DISPLAY,Yn as TOOL_GROUP_DISPLAY,qe as TOOL_OUTCOME,xo as ToolCallCard,Pl as UNREAD_EVENT,rC as VERSION,Xo as X_CONFIRM_KEY,Cr as X_DESTRUCTIVE_KEY,Nr as X_NAVIGATES_KEY,Le as X_SUMMARY_KEY,Ed as asQuote,Pd as attachMessageActions,Sd as attachQuoteOffer,yr as chartSpecFrom,JR as clickElement,ql as createChatSurfaceTools,sp as createHttpAgent,cc as createPageActionTools,uc as createPageMapContext,ai as createPageStateTools,dc as createRouteTools,RE as createStateHookTools,KR as defineAgUiChat,XR as fillField,SE as flash,ic as focusWithFlash,oc as highlightThenClick,sh as isChatCorner,vd as isDestructive,fs as isNavigates,dd as mergeUiStrings,Us as messageActionBar,kd as messageAttachments,hd as parseToolCatalog,ii as prefersReducedMotion,QR as pressButton,ac as pressThenClick,ip as prettifyToolName,uo as quotableSelection,po as relativeTime,co as renderChart,Oo as renderMarkdown,Mo as renderSuggestionChips,fd as requestApproval,gd as requestConfirmation,pd as requestQuestion,Pt as scrollIntoCenterView,eC as selectControl,sc as selectOption,nC as setControlValue,Pr as setNativeChecked,cn as setNativeValue,tc as showHighlightOverlay,sx as suggestionPrompts,tC as toggleCheckbox,lc as toggleControl,mo as toolStatusFromOutcome,xd as transcribeAudio,rc as typeInto,yd as uploadAttachment};
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
