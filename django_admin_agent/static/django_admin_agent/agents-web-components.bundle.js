var cT=Object.defineProperty;var kc=(t,e)=>{for(var n in e)cT(t,n,{get:e[n],enumerable:!0})};var gt="agents-web-components",yn="ag-ui-chat",Ac="ag-ui-submit",_i="ag-ui-toggle",Rc="ag-ui-maximize",Ic="ag-ui-bar-height",Cc="ag-ui-dock-width",Nc="ag-ui-unread",Oc="ag-ui-theme",Mc="ag-ui-state",Pc="ag-ui-attachments",Lc="ag-ui-run-finished",zc="ag-ui-thread",Dc="ag-ui-thread-title",$c="ag-ui-custom",Uc="ag-ui-invalidate",Hc="ag-ui-feedback",Fc="suggestions",Gc="ag_ui.invalidate",of="ag_ui.skills_changed",sf="ag_ui.subagent",It={STARTED:"started",TOOL_CALL:"tool_call",TOOL_RESULT:"tool_result",FINISHED:"finished",FAILED:"failed"},et={USER:"user",ASSISTANT:"assistant"},ro="x-destructive",Ti="x-confirm",Ue="x-summary",oo="x-navigates",io="read_page",Si="page_map",af="place",dr=10,wn={COPY:"copy",RETRY:"retry",FEEDBACK:"feedback"},Q={PENDING:"pending",DEFERRED:"deferred",DONE:"done",ERROR:"error",DECLINED:"declined",INTERRUPTED:"interrupted"},tt={SUCCESS:"success",FAILED:"failed",DENIED:"denied",INTERRUPTED:"interrupted"},st={UPLOADING:"uploading",READY:"ready",ERROR:"error"},Bc=10*1024*1024,Ft={GROUPED:"grouped",INLINE:"inline",MINIMAL:"minimal",COMPACT:"compact",FULL:"full"},Gt={INLINE:"inline",MINIMAL:"minimal",COMPACT:"compact",FULL:"full"},Vc="compaction",Zc="load_capability",lf='<svg class="glyph" viewBox="0 0 24 24" aria-hidden="true"><path d="M12 19.5V5m-6.5 6.5L12 5l6.5 6.5"/></svg>',cf='<svg class="glyph glyph--solid" viewBox="0 0 24 24" aria-hidden="true"><rect x="7" y="7" width="10" height="10" rx="2.5"/></svg>',df='<svg class="glyph" viewBox="0 0 24 24" aria-hidden="true"><path d="M17 8.5V15a5 5 0 0 1-10 0V7a3 3 0 0 1 6 0v7.5a1 1 0 0 1-2 0V8.5"/></svg>',uf='<svg class="glyph" viewBox="0 0 24 24" aria-hidden="true"><path d="M12 4a3 3 0 0 1 3 3v5a3 3 0 0 1-6 0V7a3 3 0 0 1 3-3z"/><path d="M5 11v1a7 7 0 0 0 14 0v-1"/><path d="M12 19v3"/></svg>',hf='<svg class="glyph" viewBox="0 0 24 24" aria-hidden="true"><path d="M12 21s-6.5-5.6-6.5-11a6.5 6.5 0 0 1 13 0c0 5.4-6.5 11-6.5 11z"/><circle cx="12" cy="10" r="2.3"/></svg>',pf='<svg class="glyph" viewBox="0 0 24 24" aria-hidden="true"><path d="M2.5 12s3.5-6.5 9.5-6.5 9.5 6.5 9.5 6.5-3.5 6.5-9.5 6.5S2.5 12 2.5 12z"/><circle cx="12" cy="12" r="2.8"/></svg>',ff='<svg class="glyph" viewBox="0 0 24 24" aria-hidden="true"><path d="M2.5 12s3.5-6.5 9.5-6.5c2 0 3.7.7 5.1 1.7M21.5 12s-3.5 6.5-9.5 6.5c-2 0-3.7-.7-5.1-1.7"/><path d="M4 20 20 4"/></svg>',mf='<svg class="glyph" viewBox="0 0 24 24" aria-hidden="true"><path d="M20 14.5A8.5 8.5 0 0 1 9.5 4a8.5 8.5 0 1 0 10.5 10.5z"/></svg>',gf='<svg class="glyph" viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"/></svg>',ki='<svg class="glyph" viewBox="0 0 24 24" aria-hidden="true"><path d="M14 10l6-6M15 4h5v5M10 14l-6 6M4 15v5h5"/></svg>',vf='<svg class="glyph" viewBox="0 0 24 24" aria-hidden="true"><path d="M20 4l-6 6M14 5v5h5M4 20l6-6M5 14h5v5"/></svg>',bf='<svg class="glyph" viewBox="0 0 24 24" aria-hidden="true"><rect x="3" y="4" width="18" height="16" rx="2.5"/><path d="M15 4v16"/><path d="M8 9.5l2.5 2.5L8 14.5"/></svg>',yf='<svg class="glyph" viewBox="0 0 24 24" aria-hidden="true"><rect x="3" y="4" width="18" height="16" rx="2.5"/><path d="M9 4v16"/><path d="M16 9.5L13.5 12l2.5 2.5"/></svg>',so='<svg class="glyph" viewBox="0 0 24 24" aria-hidden="true"><path d="M6 9.5l6 6 6-6"/></svg>',wf='<svg class="glyph" viewBox="0 0 24 24" aria-hidden="true"><path d="M6 14.5l6-6 6 6"/></svg>',xf='<svg class="glyph" viewBox="0 0 24 24" aria-hidden="true"><path d="M9.5 6l6 6-6 6"/></svg>',Ef='<svg class="glyph" viewBox="0 0 24 24" aria-hidden="true"><path d="M14.5 6l-6 6 6 6"/></svg>',_f='<svg class="glyph" viewBox="0 0 24 24" aria-hidden="true"><path d="M11 4.5H6.5a2 2 0 0 0-2 2v11a2 2 0 0 0 2 2h11a2 2 0 0 0 2-2V13"/><path d="M17.5 3.5a2.1 2.1 0 0 1 3 3L12 15l-3.5 1 1-3.5z"/></svg>',Tf='<svg class="glyph" viewBox="0 0 24 24" aria-hidden="true"><path d="M3.5 12A8.5 8.5 0 1 0 6 6L3.5 8.5"/><path d="M3.5 4v4.5H8"/><path d="M12 7.5V12l3 2"/></svg>',Sf='<svg class="glyph" viewBox="0 0 24 24" aria-hidden="true"><path d="M5 4h10l4 4v12H5z"/><path d="M9 12h6M9 16h4"/></svg>',jc='<svg class="glyph" viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="13" r="7"/><path d="M12 9v4l2.5 2.5M9 3h6"/></svg>',kf='<svg class="glyph" viewBox="0 0 24 24" aria-hidden="true"><path d="M15 18l-6-6 6-6"/></svg>',Ai='<svg class="glyph" viewBox="0 0 24 24" aria-hidden="true"><path d="M12 5v14M5 12h14"/></svg>',Af='<svg class="glyph" viewBox="0 0 24 24" aria-hidden="true"><path d="M9 14L4 9l5-5"/><path d="M4 9h10.5a5.5 5.5 0 0 1 0 11H11"/></svg>',Rf='<svg class="glyph" viewBox="0 0 24 24" aria-hidden="true"><path d="M4 5.5A2.5 2.5 0 0 1 6.5 3h11A2.5 2.5 0 0 1 20 5.5v8a2.5 2.5 0 0 1-2.5 2.5H9l-5 4z"/></svg>',If='<svg class="glyph" viewBox="0 0 24 24" aria-hidden="true"><rect x="9" y="9" width="11" height="11" rx="2"/><path d="M5 15V6a2 2 0 0 1 2-2h8"/></svg>',Cf='<svg class="glyph" viewBox="0 0 24 24" aria-hidden="true"><path d="M20 12a8 8 0 1 1-2.5-5.8"/><path d="M20 4v4h-4"/></svg>',Nf='<svg class="glyph" viewBox="0 0 24 24" aria-hidden="true"><path d="M7 10v10H4V10z"/><path d="M7 10l4.5-7a2 2 0 0 1 3.4 2L13.5 9H19a2 2 0 0 1 2 2.3l-1.1 6.4A2 2 0 0 1 17.9 20H7"/></svg>',Of='<svg class="glyph" viewBox="0 0 24 24" aria-hidden="true"><path d="M17 14V4h3v10z"/><path d="M17 14l-4.5 7a2 2 0 0 1-3.4-2l1.4-4H5a2 2 0 0 1-2-2.3l1.1-6.4A2 2 0 0 1 6.1 4H17"/></svg>',Mf='<svg class="glyph" viewBox="0 0 24 24" aria-hidden="true"><path d="M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8z"/><path d="M14 3v5h5"/></svg>',Pf='<svg class="glyph" viewBox="0 0 24 24" aria-hidden="true"><rect x="3.5" y="4.5" width="17" height="15" rx="2.5"/><circle cx="9" cy="10" r="1.5"/><path d="M4.5 17.5 9 13.5l3.5 3 3-2.5 4.5 4"/></svg>',Lf='<svg class="glyph" viewBox="0 0 24 24" aria-hidden="true"><path d="M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8z"/><path d="M14 3v5h5"/><rect class="glyph--solid" x="7.5" y="13.5" width="9" height="4.5" rx="1"/></svg>',zf='<svg class="glyph" viewBox="0 0 24 24" aria-hidden="true"><path d="M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8z"/><path d="M14 3v5h5"/><path d="M8.5 13.5h7M8.5 17h4.5"/></svg>',Ri="chart",xn={ENQUEUED_MESSAGES:"pydantic_ai_enqueued_messages",COMPACTION:"pydantic_ai_compaction",TOOL_AVAILABILITY_DELTA:"pydantic_ai_tool_availability_delta",MODEL_SETTINGS_DELTA:"pydantic_ai_model_settings_delta",CAPABILITY_LOAD_DELTA:"pydantic_ai_capability_load_delta",MCP_APPS:"mcp-apps"},Bt=24,Df=150,$f=2147483001,Ii=5e3,at=8;var Wc="ag-ui-threads-change";var ur="ag-ui-open-thread",ao="ag-ui-agents",qc="ag-ui-agents-change",Yc="ag-ui-inbox-change",Kc="ag-ui-agent-change",Xc="ag-ui-tabs",Jc=`${gt}.open-threads`;var Uf='<svg class="glyph" viewBox="0 0 24 24" aria-hidden="true"><circle cx="5" cy="12" r="1.3"/><circle cx="12" cy="12" r="1.3"/><circle cx="19" cy="12" r="1.3"/></svg>';var Qc="ag-ui-open-editor";var dT=/\{([a-zA-Z_][a-zA-Z0-9_]*)\}/g;function F(t,e){return t.replace(dT,(n,r)=>Object.hasOwn(e,r)?String(e[r]):n)}var uT=/\{([a-zA-Z_][a-zA-Z0-9_]*)\}/g;function Hf(t,e){let n=[];return{text:t.replace(uT,(o,i)=>{let s=e[i];return s==null||s===""?(n.includes(i)||n.push(i),o):String(s)}),missing:n}}function hT(t){if(typeof t!="object"||t===null)return!1;let e=t;return typeof e.name=="string"&&typeof e.title=="string"&&(e.prompt===void 0||typeof e.prompt=="string")}function ed(t){return Array.isArray(t)?t.filter(hT):[]}var Ci=class{#e;#t=[];#n=[];#r=[];#o=new Map;#s=0;constructor(e){this.#e=e}setClientSkills(e){this.#r=e,this.#a()}init(){this.#e.menu.enableChips(this.#e.flag("data-prompt-chips")),this.#e.menu.enableSlash(this.#e.flag("data-slash-commands")),this.#n=this.#i(),this.#a()}async fetch(){let e=this.#e.element.getAttribute("data-skills-url");if(e===null)return;this.#s+=1;let n=this.#s;try{let r=await fetch(e,this.#e.fetchInit(e)),o=ed(await r.json());n===this.#s&&(this.#t=o,this.#a())}catch{}}forget(){this.#s+=1,this.#t=[],this.#a()}apply(e){let{input:n,hint:r}=this.#e;if(e.prompt===void 0){r.hidden=!0,this.#e.send(`/${e.name}`);return}let{text:o,missing:i}=Hf(e.prompt,this.#e.context());if(i.length>0){r.textContent=F(this.#e.strings().skillNeeds,{title:e.title,fields:i.join(", ")}),r.hidden=!1,n.value=o,this.#e.autoGrow(),n.focus(),this.#l(o);return}if(r.hidden=!0,n.value=o,this.#e.autoGrow(),e.sendImmediately===!1){n.focus();return}this.#e.submit()}#i(){return ed(this.#e.readJsonAttribute("data-skills"))}title(e){return this.#o.get(e)?.title}#a(){this.#o.clear();for(let e of[...this.#t,...this.#n,...this.#r])this.#o.set(e.name,e);this.#e.menu.setSkills([...this.#o.values()])}#l(e){let n=e.indexOf("{");this.#e.input.setSelectionRange(n,e.indexOf("}",n)+1)}};function td(t){if(typeof t!="object"||t===null)return null;let e=t,{id:n,name:r,description:o,body:i,userInvocable:s,modelInvocable:a,enabled:c}=e;return typeof n!="string"||typeof r!="string"||typeof o!="string"||typeof i!="string"||typeof s!="boolean"||typeof a!="boolean"||typeof c!="boolean"?null:{id:n,name:r,description:o,body:i,userInvocable:s,modelInvocable:a,enabled:c}}var Ni=class{#e;#t;constructor(e,n){this.#e=e.endsWith("/")?e:`${e}/`,this.#t=n}list(){return this.#o(this.#e,{method:"GET"},e=>{let n=e?.skills;return Array.isArray(n)?n.map(td).filter(r=>r!==null):null})}create(e){return this.#r(this.#e,"POST",e)}update(e,n){return this.#r(this.#n(e),"PUT",n)}setEnabled(e,n){return this.#r(this.#n(e),"PATCH",{enabled:n})}#n(e){return`${this.#e}${encodeURIComponent(e)}/`}#r(e,n,r){let o={method:n,headers:{"Content-Type":"application/json"},body:JSON.stringify(r)};return this.#o(e,o,td)}async#o(e,n,r){let o;try{o=await this.#t(e,n)}catch{return{ok:!1,status:0,message:null,field:null}}let i=await o.json().catch(()=>null);if(o.ok){let l=r(i);if(l!==null)return{ok:!0,value:l}}let s=typeof i=="object"&&i!==null?i:{},{error:a,field:c}=s;return{ok:!1,status:o.status,message:typeof a=="string"?a:null,field:typeof c=="string"?c:null}}};var Oi=["top-left","top-right","bottom-left","bottom-right"];function Ff(t){return Oi.includes(t)}function nd(t){return[{name:"read_chat_surface",description:"Describe the chat panel you are speaking from: its placement, whether it is collapsed, whether it can be moved, and the box it occupies. Read this before moving or minimising yourself, since a full-screen panel has nowhere to move to. Read-only.",parameters:{type:"object",properties:{},required:[],[Ue]:"Read the chat's own position"},handler:()=>t.describeSurface()},{name:"move_chat",description:"Move your own panel to a corner, to uncover something the user needs to see. `corner` is top-left, top-right, bottom-left or bottom-right. Answers `moved: false` with a reason when the placement owns its position or the panel fills the screen; check `read_chat_surface` first, and prefer minimise_chat when there is nowhere to move to.",parameters:{type:"object",properties:{corner:{type:"string",enum:[...Oi]}},required:["corner"],[Ue]:"Move the chat out of the way"},handler:e=>{let n=String(e.corner??""),r=t.describeSurface();return Ff(n)?r.movable?{moved:t.moveTo(n,{announce:!0}),corner:n}:{moved:!1,reason:r.fullBleed?"the panel fills the screen, so there is nowhere to move it to":r.draggable===!1?"this page has turned off moving the panel":`the "${r.placement??""}" placement owns the panel's position`,suggestion:r.collapsible?"minimise_chat":null}:{moved:!1,reason:`"${n}" is not a corner; use one of ${Oi.join(", ")}`}}},{name:"minimise_chat",description:"Collapse your own panel, so the user can see the whole page. The user reopens it from where it collapsed to (a launcher, a rail, a bottom bar or the page's own control). Answers `minimised: false` when the placement has no collapsed state, which is the case for a full-page chat.",parameters:{type:"object",properties:{},required:[],[Ue]:"Minimise the chat"},handler:()=>t.describeSurface().collapsible?(t.setCollapsed(!0,{announce:!0}),{minimised:!0}):{minimised:!1,reason:"this placement has no collapsed state, so there is nothing to minimise to"}},{name:"restore_chat",description:"Open your own panel again after minimising it.",parameters:{type:"object",properties:{},required:[],[Ue]:"Restore the chat"},handler:()=>(t.setCollapsed(!1),{restored:!0})}]}var lo=class{#e=new Map;register(e){this.#e.set(e.name,e)}has(e){return this.#e.has(e)}get(e){let n=this.#e.get(e);if(n===void 0)throw new Error(`tool "${e}" is not registered`);return n}tools(){return[...this.#e.values()].map(e=>({name:e.name,description:e.description,parameters:e.parameters}))}};var rd=new Set,hr=class{#e;constructor(e){this.#e=e}join(){rd.add(this.#e)}leave(){rd.delete(this.#e)}static latest(){let e=null;for(let n of rd)e=n;return e}};var Gf="--ag-ui-highlight-ring-color",pT="--ag-ui-accent",id="--_accent",Bf="#4f46e5";function pr(t,e){let n=ld(t,Gf);if(n!=="")return n;let r=e??hr.latest(),o=r===null?"":Mi(r,Gf);if(o!=="")return o;let i=ld(t,pT);if(i!=="")return i;if(r===null)return Bf;let s=Mi(r,id);return s===""?Bf:mT(r,s,t)}var fT=3,Vf=.1;function mT(t,e,n){let r=document.createElement("canvas").getContext("2d",{willReadFrequently:!0});if(r===null)return e;let o=T=>{r.clearRect(0,0,1,1),r.fillStyle="rgb(0 0 0 / 0)",r.fillStyle=T,r.fillRect(0,0,1,1);let[w=0,D=0,S=0,g=0]=r.getImageData(0,0,1,1).data;return[w,D,S,g/255]},i=gT(n,o),s=T=>od(sd(T,i),i)>=fT,c=[e,Mi(t,id,"light"),Mi(t,id,"dark")].find(T=>s(o(T)));if(c!==void 0)return c;let l=sd(o(e),i),d=[0,0,0,1],h=[255,255,255,1],m=od(d,i)>od(h,i)?d:h,f=1;for(;!s(ad(l,m,f*Vf));)f+=1;let[u,v,E]=ad(l,m,f*Vf);return`rgb(${u}, ${v}, ${E})`}function gT(t,e){let n=[];for(let i=Zf(t);i!==null;i=Zf(i)){let s=e(window.getComputedStyle(i).backgroundColor);if(n.push(s),s[3]===1)break}let r=document.createElement("span");r.hidden=!0,r.style.color="Canvas",document.documentElement.appendChild(r);let o=e(window.getComputedStyle(r).color);r.remove();for(let i of n.reverse())o=sd(i,o);return o}function Zf(t){if(t.parentElement!==null)return t.parentElement;let e=t.getRootNode();return e instanceof ShadowRoot?e.host:null}function sd(t,e){return ad(e,t,t[3])}function ad(t,e,n){let r=o=>Math.round(t[o]+(e[o]-t[o])*n);return[r(0),r(1),r(2),1]}function jf([t,e,n]){let r=o=>{let i=o/255;return i<=.04045?i/12.92:((i+.055)/1.055)**2.4};return .2126*r(t)+.7152*r(e)+.0722*r(n)}function od(t,e){let[n,r]=[jf(t),jf(e)];return(Math.max(n,r)+.05)/(Math.min(n,r)+.05)}function ld(t,e){return window.getComputedStyle(t).getPropertyValue(e).trim()}function Mi(t,e,n){let r=ld(t,e),o=t.shadowRoot;if(r===""||o===null)return r;let i=document.createElement("span");if(i.hidden=!0,n!==void 0&&(i.style.colorScheme=n),i.style.color=r,i.style.color==="")return"";o.appendChild(i);let s=window.getComputedStyle(i).color;return i.remove(),s}function co(t,e,n){let r=window.getComputedStyle(t).getPropertyValue(e).trim();return r===""?n:r}var vT=4;function cd(t,e={}){let n=document.createElement("div");n.setAttribute("data-ag-ui-highlight",""),n.setAttribute("aria-hidden","true"),n.style.cssText=["position: fixed","inset: 0","pointer-events: none",`z-index: ${co(t,"--ag-ui-highlight-z-index",String($f))}`].join(";");let r=document.createElement("div"),o=document.createElement("div");n.className="ag-ui-highlight",r.className="ag-ui-highlight-scrim",o.className="ag-ui-highlight-ring",e.scrim===!0&&n.append(r),n.append(o);let i=e.ringWidth??Number.parseFloat(co(t,"--ag-ui-highlight-ring-width","3")),s=e.flowMs??Number.parseFloat(co(t,"--ag-ui-highlight-flow-ms","2400")),a=()=>{let d=t.getBoundingClientRect(),h=e.padding??vT,m=e.radius??Number.parseFloat(getComputedStyle(t).borderRadius),f=d.left-h,u=d.top-h,v=d.width+h*2,E=d.height+h*2;e.scrim===!0&&(r.style.cssText=["position: absolute","inset: 0",`background: ${co(t,"--ag-ui-highlight-scrim","rgba(15, 15, 25, 0.45)")}`,`clip-path: path(evenodd, '${wT(f,u,v,E,m+h)}')`].join(";")),o.style.cssText=["position: absolute",`left: ${f}px`,`top: ${u}px`,`width: ${v}px`,`height: ${E}px`,`border-radius: ${m+h}px`,`border: ${i}px solid transparent`,"box-sizing: border-box",yT(t,e)].join(";")};a();let c=null;e.gradient===!0&&!window.matchMedia("(prefers-reduced-motion: reduce)").matches&&(c=o.animate([{backgroundPosition:"100% 0"},{backgroundPosition:"-100% 0"}],{duration:s,iterations:Number.POSITIVE_INFINITY,easing:"linear"}));let l={capture:!0,passive:!0};return window.addEventListener("scroll",a,l),window.addEventListener("resize",a,l),document.body.appendChild(n),()=>{window.removeEventListener("scroll",a,l),window.removeEventListener("resize",a,l),c?.cancel(),n.remove()}}function bT(t){return t===void 0?null:CSS.supports("color",t)?t:null}function yT(t,e){let n=bT(e.color)??pr(t,e.chat);if(e.gradient!==!0)return`border-color: ${n}`;let r=co(t,"--ag-ui-highlight-gradient",`linear-gradient(115deg, transparent 20%, ${n} 50%, transparent 80%)`),o="linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0)";return[`background-image: ${r}`,"background-origin: border-box","background-size: 300% 100%",`-webkit-mask: ${o}`,`mask: ${o}`,"-webkit-mask-composite: xor","mask-composite: exclude","background-position: 50% 0"].join(";")}function wT(t,e,n,r,o){let i=Math.max(0,Math.min(o,n/2,r/2)),s=t+n,a=e+r,c=`M 0 0 H ${window.innerWidth} V ${window.innerHeight} H 0 Z`,l=[`M ${t+i} ${e}`,`H ${s-i}`,`A ${i} ${i} 0 0 1 ${s} ${e+i}`,`V ${a-i}`,`A ${i} ${i} 0 0 1 ${s-i} ${a}`,`H ${t+i}`,`A ${i} ${i} 0 0 1 ${t} ${a-i}`,`V ${e+i}`,`A ${i} ${i} 0 0 1 ${t+i} ${e}`,"Z"].join(" ");return`${c} ${l}`}function Pi(t,e){return Object.getOwnPropertyDescriptor(t,e).set}var xT=Pi(HTMLInputElement.prototype,"value"),ET=Pi(HTMLTextAreaElement.prototype,"value"),_T=Pi(HTMLSelectElement.prototype,"value"),TT=Pi(HTMLInputElement.prototype,"checked");function En(t,e){t instanceof HTMLTextAreaElement?ET.call(t,e):t instanceof HTMLSelectElement?_T.call(t,e):xT.call(t,e)}function uo(t,e){TT.call(t,e)}function ho(t){t.dispatchEvent(new Event("input",{bubbles:!0})),t.dispatchEvent(new Event("change",{bubbles:!0}))}function fr(t){return new Promise(e=>{setTimeout(e,t)})}function Li(){return window.matchMedia("(prefers-reduced-motion: reduce)").matches}function dd(t){return t<=0||Li()?Promise.resolve():fr(t)}function Wf(t,e){return`0 0 0 3px color-mix(in srgb, ${pr(t,e)} 40%, transparent)`}function qf(t,e){let n=t.style.outline,r=t.style.outlineOffset;return t.style.outline=`2px solid ${pr(t,e)}`,t.style.outlineOffset="2px",()=>{t.style.outline=n,t.style.outlineOffset=r}}async function ud(t,e,n={}){let r=n.charDelayMs??35;En(t,""),t.dispatchEvent(new Event("input",{bubbles:!0}));for(let o of e)En(t,t.value+o),t.dispatchEvent(new Event("input",{bubbles:!0})),r>0&&await fr(r);t.dispatchEvent(new Event("change",{bubbles:!0}))}async function hd(t,e={}){let n=qf(t,e.chat);await fr(e.highlightMs??280),n(),t.click()}var ST=600,kT=100;function Vt(t,e={}){let n=Li();return t.scrollIntoView({block:"center",inline:"nearest",behavior:n?"auto":"smooth"}),n?Promise.resolve():new Promise(r=>{let o,i=()=>{clearTimeout(o),document.removeEventListener("scroll",s,!0),document.removeEventListener("scrollend",i,!0),r()},s=()=>{document.removeEventListener("scroll",s,!0),clearTimeout(o),o=setTimeout(i,e.settleMs??ST)};o=setTimeout(i,kT),document.addEventListener("scroll",s,!0),document.addEventListener("scrollend",i,!0)})}var AT=1200,RT=1/3;async function Yf(t,e,n){(e.focus??n)&&t.focus({preventScroll:!0});let r=e.flashMs??AT;if(r<=0)return;if(e.scrim===!0||e.gradient===!0){let l=cd(t,{scrim:e.scrim===!0,gradient:e.gradient===!0,...e.color===void 0?{}:{color:e.color},...e.ringPadding===void 0?{}:{padding:e.ringPadding},...e.chat===void 0?{}:{chat:e.chat}});await fr(r),l();return}let o=t.style.outline,i=t.style.outlineOffset,s=t.style.transition,a=e.color??pr(t,e.chat);t.style.outline=`3px solid ${a}`,t.style.outlineOffset="2px";let c=Li()?0:Math.round(r*RT);await fr(r-c),c>0&&(t.style.transition=`outline-color ${c}ms ease-out`,t.style.outline="3px solid transparent",await fr(c)),t.style.outline=o,t.style.outlineOffset=i,t.style.transition=s}function IT(t,e={}){return Yf(t,e,!1)}function pd(t,e={}){return Yf(t,e,!0)}async function fd(t,e={}){let n=e.pressMs??140,r=t.style.transform,o=t.style.transition,i=t.style.boxShadow;t.style.transition="transform 80ms ease",t.style.transform="scale(0.96)",t.style.boxShadow=Wf(t,e.chat),await dd(n),t.style.transform=r,t.style.transition=o,t.style.boxShadow=i,t.click()}function CT(t,e){for(let n of Array.from(t.options))if(n.value===e||n.text===e)return n;return null}async function md(t,e,n={}){let r=CT(t,e);if(r===null)throw new Error(`no <option> matching "${e}"`);let o=qf(t,n.chat);await dd(n.highlightMs??220),En(t,r.value),ho(t),o()}async function gd(t,e,n={}){let r=n.flashMs??200,o=t.style.boxShadow;t.style.boxShadow=Wf(t,n.chat),await dd(r),uo(t,e),ho(t),t.style.boxShadow=o}var fo={SCROLL:"scroll",DRAG:"drag",CHAT:"chat"};function vd(t,e){let n=[];return t.has(fo.SCROLL)&&n.push(NT(e)),t.has(fo.DRAG)&&n.push(OT(e)),n}function NT(t){return{name:"scroll_to",description:"Scroll a target into view. `target` is `top`, `bottom`, or a CSS selector / page-map element id. Read-only: it changes nothing on the page.",parameters:{type:"object",properties:{target:{type:"string"}},required:["target"],[Ue]:"Scroll into view"},handler:e=>{let n=String(e.target??"");if(n==="top"||n==="bottom"){let o=n==="top"?0:document.body.scrollHeight;return window.scrollTo({top:o,behavior:"smooth"}),{scrolled:!0,target:n}}let r=t(n);if(r===null)throw new Error(`no element matching "${n}"`);return Vt(r),{scrolled:!0,target:n}}}}function OT(t){return{name:"drag_and_drop",description:"Drag the `from` element onto the `to` element (CSS selectors or page-map element ids), firing the page's native drag-and-drop. Use for reordering sortable lists. The page decides what the drop commits.",parameters:{type:"object",properties:{from:{type:"string"},to:{type:"string"}},required:["from","to"],[Ue]:"Drag and drop"},handler:e=>{let n=String(e.from??""),r=String(e.to??""),o=t(n);if(o===null)throw new Error(`no element matching "${n}"`);let i=t(r);if(i===null)throw new Error(`no element matching "${r}"`);return MT(o,i),{dragged:!0,from:n,to:r}}}}function MT(t,e){let n=new DataTransfer;po(t,"dragstart",n),po(e,"dragenter",n),po(e,"dragover",n),po(e,"drop",n),po(t,"dragend",n)}function po(t,e,n){let r=new Event(e,{bubbles:!0,cancelable:!0});r.dataTransfer=n,t.dispatchEvent(r)}function bd(t,e){return!e||t===null?[]:[{description:Si,value:JSON.stringify(t())}]}function yd(t){let e=[{name:`read_${t.name}`,description:`Read the "${t.name}" state.`,parameters:{type:"object",properties:{},required:[],[Ue]:`Read ${t.name}`},handler:()=>t.read()}],n=t.write;return n!==void 0&&e.push({name:`set_${t.name}`,description:`Update the "${t.name}" state.`,parameters:{...t.schema??{type:"object"},[ro]:!0,[Ue]:`Update ${t.name}`},handler:r=>n(r)}),e}var Kf=/:([A-Za-z_][A-Za-z0-9_]*)/g;function PT(t){return[...t.matchAll(Kf)].map(e=>e[0].slice(1))}function LT(t,e,n){let r={...n};return{path:e.replace(Kf,(i,s)=>{let a=n[s];if(a==null||String(a)==="")throw new Error(`route "${t}" requires path param "${s}"`);return delete r[s],encodeURIComponent(String(a))}),leftover:r}}function zT(t,e){let n=new URLSearchParams;for(let[o,i]of Object.entries(e))n.set(o,String(i));let r=n.toString();return r===""?t:`${t}?${r}`}function wd(t,e){return[{name:"list_routes",description:"List the routes the app can navigate to. Each route's `pathParams` names the dynamic segments to pass as `params` to `navigate_to_route`.",parameters:{type:"object",properties:{},required:[],[Ue]:"List pages"},handler:()=>t().map(n=>({...n,pathParams:PT(n.path)}))},{name:"navigate_to_route",description:"Navigate to one of the app's routes by its id, filling any dynamic `:name` path segments (and extra query params) from `params`.",parameters:{type:"object",properties:{route_id:{type:"string"},params:{type:"object"}},required:["route_id"],[oo]:!0,[Ue]:"Navigate"},handler:n=>{let r=n.route_id,o=t().find(d=>d.id===r);if(o===void 0)throw new Error(`unknown route "${String(r)}"`);let i=n.params??{},{path:s,leftover:a}=LT(o.id,o.path,i),c=zT(s,a),l=e();return l!==null?l(c):window.location.assign(c),{navigated:!0,path:c}}}]}var Ze=[];for(let t=0;t<256;++t)Ze.push((t+256).toString(16).slice(1));function Xf(t,e=0){return(Ze[t[e+0]]+Ze[t[e+1]]+Ze[t[e+2]]+Ze[t[e+3]]+"-"+Ze[t[e+4]]+Ze[t[e+5]]+"-"+Ze[t[e+6]]+Ze[t[e+7]]+"-"+Ze[t[e+8]]+Ze[t[e+9]]+"-"+Ze[t[e+10]]+Ze[t[e+11]]+Ze[t[e+12]]+Ze[t[e+13]]+Ze[t[e+14]]+Ze[t[e+15]]).toLowerCase()}var xd,DT=new Uint8Array(16);function Ed(){if(!xd){if(typeof crypto>"u"||!crypto.getRandomValues)throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");xd=crypto.getRandomValues.bind(crypto)}return xd(DT)}var $T=typeof crypto<"u"&&crypto.randomUUID&&crypto.randomUUID.bind(crypto),_d={randomUUID:$T};function UT(t,e,n){if(_d.randomUUID&&!e&&!t)return _d.randomUUID();t=t||{};let r=t.random??t.rng?.()??Ed();if(r.length<16)throw new Error("Random bytes length must be >= 16");if(r[6]=r[6]&15|64,r[8]=r[8]&63|128,e){if(n=n||0,n<0||n+16>e.length)throw new RangeError(`UUID byte range ${n}:${n+15} is out of buffer bounds`);for(let o=0;o<16;++o)e[n+o]=r[o];return e}return Xf(r)}var tn=UT;var y=(function(t){return t.TEXT_MESSAGE_START="TEXT_MESSAGE_START",t.TEXT_MESSAGE_CONTENT="TEXT_MESSAGE_CONTENT",t.TEXT_MESSAGE_END="TEXT_MESSAGE_END",t.TEXT_MESSAGE_CHUNK="TEXT_MESSAGE_CHUNK",t.TOOL_CALL_START="TOOL_CALL_START",t.TOOL_CALL_ARGS="TOOL_CALL_ARGS",t.TOOL_CALL_END="TOOL_CALL_END",t.TOOL_CALL_CHUNK="TOOL_CALL_CHUNK",t.TOOL_CALL_RESULT="TOOL_CALL_RESULT",t.STATE_SNAPSHOT="STATE_SNAPSHOT",t.STATE_DELTA="STATE_DELTA",t.MESSAGES_SNAPSHOT="MESSAGES_SNAPSHOT",t.ACTIVITY_SNAPSHOT="ACTIVITY_SNAPSHOT",t.ACTIVITY_DELTA="ACTIVITY_DELTA",t.RAW="RAW",t.CUSTOM="CUSTOM",t.RUN_STARTED="RUN_STARTED",t.RUN_FINISHED="RUN_FINISHED",t.RUN_ERROR="RUN_ERROR",t.STEP_STARTED="STEP_STARTED",t.STEP_FINISHED="STEP_FINISHED",t.REASONING_START="REASONING_START",t.REASONING_MESSAGE_START="REASONING_MESSAGE_START",t.REASONING_MESSAGE_CONTENT="REASONING_MESSAGE_CONTENT",t.REASONING_MESSAGE_END="REASONING_MESSAGE_END",t.REASONING_MESSAGE_CHUNK="REASONING_MESSAGE_CHUNK",t.REASONING_END="REASONING_END",t.REASONING_ENCRYPTED_VALUE="REASONING_ENCRYPTED_VALUE",t.SUBAGENT_STARTED="SUBAGENT_STARTED",t.SUBAGENT_FINISHED="SUBAGENT_FINISHED",t.SUBAGENT_ERROR="SUBAGENT_ERROR",t})({}),_n="1.0";var HT={TextMessageStartEvent:{optional:["timestamp","rawEvent","metadata","subagentRunId","role","name"],fields:{}},TextMessageContentEvent:{optional:["timestamp","rawEvent","metadata","subagentRunId"],fields:{}},TextMessageEndEvent:{optional:["timestamp","rawEvent","metadata","subagentRunId"],fields:{}},TextMessageChunkEvent:{optional:["timestamp","rawEvent","metadata","subagentRunId","messageId","role","delta","name"],fields:{}},ToolCallStartEvent:{optional:["timestamp","rawEvent","metadata","subagentRunId","parentMessageId"],fields:{}},ToolCallArgsEvent:{optional:["timestamp","rawEvent","metadata","subagentRunId"],fields:{}},ToolCallEndEvent:{optional:["timestamp","rawEvent","metadata","subagentRunId"],fields:{}},ToolCallChunkEvent:{optional:["timestamp","rawEvent","metadata","subagentRunId","toolCallId","toolCallName","parentMessageId","delta"],fields:{}},TextPart:{optional:["id","metadata"],fields:{}},DataSource:{optional:[],fields:{}},UrlSource:{optional:["mimeType"],fields:{}},FileSource:{optional:["provider","mimeType"],fields:{}},PartSource:{discriminator:"type",variants:{data:"DataSource",url:"UrlSource",file:"FileSource"}},ImagePart:{optional:["id","metadata"],fields:{source:"PartSource"}},AudioPart:{optional:["id","metadata"],fields:{source:"PartSource"}},VideoPart:{optional:["id","metadata"],fields:{source:"PartSource"}},DocumentPart:{optional:["id","metadata"],fields:{source:"PartSource"}},ContentPart:{discriminator:"type",variants:{text:"TextPart",image:"ImagePart",audio:"AudioPart",video:"VideoPart",document:"DocumentPart"}},ToolCallResultEvent:{optional:["timestamp","rawEvent","metadata","subagentRunId","role"],fields:{content:{array:"ContentPart"}}},StateSnapshotEvent:{optional:["timestamp","rawEvent","metadata","subagentRunId"],fields:{}},AddOperation:{optional:[],fields:{}},RemoveOperation:{optional:[],fields:{}},ReplaceOperation:{optional:[],fields:{}},MoveOperation:{optional:[],fields:{}},CopyOperation:{optional:[],fields:{}},TestOperation:{optional:[],fields:{}},JsonPatchOperation:{discriminator:"op",variants:{add:"AddOperation",remove:"RemoveOperation",replace:"ReplaceOperation",move:"MoveOperation",copy:"CopyOperation",test:"TestOperation"}},StateDeltaEvent:{optional:["timestamp","rawEvent","metadata","subagentRunId"],fields:{delta:{array:"JsonPatchOperation"}}},DeveloperMessage:{optional:["subagentRunId","name","encryptedValue","metadata"],fields:{}},SystemMessage:{optional:["subagentRunId","name","encryptedValue","metadata"],fields:{}},FunctionCall:{optional:[],fields:{}},ToolCall:{optional:["encryptedValue","metadata"],fields:{function:"FunctionCall"}},AssistantMessage:{optional:["subagentRunId","name","encryptedValue","metadata","content","toolCalls"],fields:{toolCalls:{array:"ToolCall"}}},UserMessage:{optional:["subagentRunId","name","encryptedValue","metadata"],fields:{content:{array:"ContentPart"}}},ToolMessage:{optional:["subagentRunId","error","encryptedValue","metadata"],fields:{content:{array:"ContentPart"}}},ActivityMessage:{optional:["subagentRunId","metadata"],fields:{}},ReasoningMessage:{optional:["subagentRunId","encryptedValue","metadata"],fields:{}},Message:{discriminator:"role",variants:{developer:"DeveloperMessage",system:"SystemMessage",assistant:"AssistantMessage",user:"UserMessage",tool:"ToolMessage",activity:"ActivityMessage",reasoning:"ReasoningMessage"}},MessagesSnapshotEvent:{optional:["timestamp","rawEvent","metadata"],fields:{messages:{array:"Message"}}},ActivitySnapshotEvent:{optional:["timestamp","rawEvent","metadata","subagentRunId","replace"],fields:{}},ActivityDeltaEvent:{optional:["timestamp","rawEvent","metadata","subagentRunId"],fields:{patch:{array:"JsonPatchOperation"}}},RawEvent:{optional:["timestamp","rawEvent","metadata","subagentRunId","source"],fields:{}},CustomEvent:{optional:["timestamp","rawEvent","metadata","subagentRunId"],fields:{}},Tool:{optional:["parameters","metadata"],fields:{}},Context:{optional:[],fields:{}},ResumeEntry:{optional:["payload","metadata"],fields:{}},RunAgentInput:{optional:["protocolVersion","parentRunId","state","tools","context","forwardedProps","resume"],fields:{messages:{array:"Message"},tools:{array:"Tool"},context:{array:"Context"},resume:{array:"ResumeEntry"}}},RunStartedEvent:{optional:["timestamp","rawEvent","metadata","protocolVersion","parentRunId","input"],fields:{input:"RunAgentInput"}},RunFinishedSuccessOutcome:{optional:["pendingToolCallIds"],fields:{}},Interrupt:{optional:["subagentRunId","message","toolCallId","responseSchema","expiresAt","metadata"],fields:{}},RunFinishedInterruptOutcome:{optional:[],fields:{interrupts:{array:"Interrupt"}}},RunFinishedCancelledOutcome:{optional:[],fields:{}},RunFinishedOutcome:{discriminator:"type",variants:{success:"RunFinishedSuccessOutcome",interrupt:"RunFinishedInterruptOutcome",cancelled:"RunFinishedCancelledOutcome"}},TokenUsage:{optional:["provider","model","inputTokens","outputTokens","totalTokens","reasoningTokens","cachedInputTokens","cacheWriteInputTokens"],fields:{}},RunFinishedEvent:{optional:["timestamp","rawEvent","metadata","result","outcome","usage"],fields:{outcome:"RunFinishedOutcome",usage:{array:"TokenUsage"}}},RunErrorEvent:{optional:["timestamp","rawEvent","metadata","code","usage"],fields:{usage:{array:"TokenUsage"}}},StepStartedEvent:{optional:["timestamp","rawEvent","metadata","subagentRunId"],fields:{}},StepFinishedEvent:{optional:["timestamp","rawEvent","metadata","subagentRunId"],fields:{}},ReasoningStartEvent:{optional:["timestamp","rawEvent","metadata","subagentRunId"],fields:{}},ReasoningMessageStartEvent:{optional:["timestamp","rawEvent","metadata","subagentRunId"],fields:{}},ReasoningMessageContentEvent:{optional:["timestamp","rawEvent","metadata","subagentRunId"],fields:{}},ReasoningMessageEndEvent:{optional:["timestamp","rawEvent","metadata","subagentRunId"],fields:{}},ReasoningMessageChunkEvent:{optional:["timestamp","rawEvent","metadata","subagentRunId","messageId","delta"],fields:{}},ReasoningEndEvent:{optional:["timestamp","rawEvent","metadata","subagentRunId"],fields:{}},ReasoningEncryptedValueEvent:{optional:["timestamp","rawEvent","metadata","subagentRunId"],fields:{}},SubagentStartedEvent:{optional:["timestamp","rawEvent","metadata","description","parentSubagentRunId","parentToolCallId","parentMessageId"],fields:{}},SubagentFinishedSuccessOutcome:{optional:[],fields:{}},SubagentFinishedSuspendedOutcome:{optional:["interruptIds"],fields:{}},SubagentFinishedOutcome:{discriminator:"type",variants:{success:"SubagentFinishedSuccessOutcome",suspended:"SubagentFinishedSuspendedOutcome"}},SubagentFinishedEvent:{optional:["timestamp","rawEvent","metadata","result","outcome"],fields:{outcome:"SubagentFinishedOutcome"}},SubagentErrorEvent:{optional:["timestamp","rawEvent","metadata","code"],fields:{}},Event:{discriminator:"type",variants:{TEXT_MESSAGE_START:"TextMessageStartEvent",TEXT_MESSAGE_CONTENT:"TextMessageContentEvent",TEXT_MESSAGE_END:"TextMessageEndEvent",TEXT_MESSAGE_CHUNK:"TextMessageChunkEvent",TOOL_CALL_START:"ToolCallStartEvent",TOOL_CALL_ARGS:"ToolCallArgsEvent",TOOL_CALL_END:"ToolCallEndEvent",TOOL_CALL_CHUNK:"ToolCallChunkEvent",TOOL_CALL_RESULT:"ToolCallResultEvent",STATE_SNAPSHOT:"StateSnapshotEvent",STATE_DELTA:"StateDeltaEvent",MESSAGES_SNAPSHOT:"MessagesSnapshotEvent",ACTIVITY_SNAPSHOT:"ActivitySnapshotEvent",ACTIVITY_DELTA:"ActivityDeltaEvent",RAW:"RawEvent",CUSTOM:"CustomEvent",RUN_STARTED:"RunStartedEvent",RUN_FINISHED:"RunFinishedEvent",RUN_ERROR:"RunErrorEvent",STEP_STARTED:"StepStartedEvent",STEP_FINISHED:"StepFinishedEvent",REASONING_START:"ReasoningStartEvent",REASONING_MESSAGE_START:"ReasoningMessageStartEvent",REASONING_MESSAGE_CONTENT:"ReasoningMessageContentEvent",REASONING_MESSAGE_END:"ReasoningMessageEndEvent",REASONING_MESSAGE_CHUNK:"ReasoningMessageChunkEvent",REASONING_END:"ReasoningEndEvent",REASONING_ENCRYPTED_VALUE:"ReasoningEncryptedValueEvent",SUBAGENT_STARTED:"SubagentStartedEvent",SUBAGENT_FINISHED:"SubagentFinishedEvent",SUBAGENT_ERROR:"SubagentErrorEvent"}},SubagentInfo:{optional:["description"],fields:{}},IdentityCapabilities:{optional:["name","type","description","version","provider","documentationUrl","metadata"],fields:{}},TransportCapabilities:{optional:["streaming","websocket","httpBinary","pushNotifications","resumable"],fields:{}},ToolsCapabilities:{optional:["supported","items","parallelCalls","clientProvided"],fields:{items:{array:"Tool"}}},OutputCapabilities:{optional:["structuredOutput","supportedMimeTypes"],fields:{}},StateCapabilities:{optional:["snapshots","deltas","memory","persistentState"],fields:{}},MultiAgentCapabilities:{optional:["supported","delegation","handoffs","subagents"],fields:{subagents:{array:"SubagentInfo"}}},ReasoningCapabilities:{optional:["supported","streaming","encrypted"],fields:{}},MultimodalInputCapabilities:{optional:["image","audio","video","pdf","file"],fields:{}},MultimodalOutputCapabilities:{optional:["image","audio"],fields:{}},MultimodalCapabilities:{optional:["input","output"],fields:{input:"MultimodalInputCapabilities",output:"MultimodalOutputCapabilities"}},ExecutionCapabilities:{optional:["codeExecution","sandboxed","maxIterations","maxExecutionTime"],fields:{}},HumanInTheLoopCapabilities:{optional:["supported","approvals","interventions","feedback","interrupts","approveWithEdits"],fields:{}},AgentCapabilities:{optional:["identity","transport","tools","output","state","multiAgent","reasoning","multimodal","execution","humanInTheLoop","custom"],fields:{identity:"IdentityCapabilities",transport:"TransportCapabilities",tools:"ToolsCapabilities",output:"OutputCapabilities",state:"StateCapabilities",multiAgent:"MultiAgentCapabilities",reasoning:"ReasoningCapabilities",multimodal:"MultimodalCapabilities",execution:"ExecutionCapabilities",humanInTheLoop:"HumanInTheLoopCapabilities"}}};function mo(t,e){if(typeof e=="string")return mo(t,HT[e]);if("array"in e){if(!Array.isArray(t))return t;let o=t.map(i=>mo(i,e.array));return o.every((i,s)=>i===t[s])?t:o}if(typeof t!="object"||t===null||Array.isArray(t))return t;let n=t;if("discriminator"in e){let o=n[e.discriminator];return typeof o=="string"&&Object.prototype.hasOwnProperty.call(e.variants,o)?mo(t,e.variants[o]):t}let r=n;for(let o of e.optional)Object.prototype.hasOwnProperty.call(n,o)&&n[o]===null&&(r===n&&(r={...n}),delete r[o]);for(let[o,i]of Object.entries(e.fields)){if(!Object.prototype.hasOwnProperty.call(r,o))continue;let s=mo(r[o],i);s!==r[o]&&(r===n&&(r={...n}),r[o]=s)}return r}function Td(t,e){return mo(t,e)}var K=class extends Error{constructor(t){super(t)}},Sd=class extends K{constructor(){super("Connect not implemented. This method is not supported by the current agent.")}};function Jf(t,e){return e===void 0?t:t===void 0?{...e}:{...t,...e}}function mr(t){return t===void 0?"":typeof t=="string"?t:t.filter(e=>e.type==="text").map(e=>e.text).join("")}function Qf(t){return Array.isArray(t)&&t.some(e=>e.type!=="text")}var kd={};kc(kd,{JsonPatchError:()=>Ne,_areEquals:()=>bo,applyOperation:()=>Tn,applyPatch:()=>Gi,applyReducer:()=>ZT,deepClone:()=>BT,getValueByPointer:()=>Hi,validate:()=>tm,validator:()=>Fi});var FT=(function(){var t=function(e,n){return t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(r,o){r.__proto__=o}||function(r,o){for(var i in o)o.hasOwnProperty(i)&&(r[i]=o[i])},t(e,n)};return function(e,n){t(e,n);function r(){this.constructor=e}e.prototype=n===null?Object.create(n):(r.prototype=n.prototype,new r)}})(),GT=Object.prototype.hasOwnProperty;function Di(t,e){return GT.call(t,e)}function $i(t){if(Array.isArray(t)){for(var e=new Array(t.length),n=0;n<e.length;n++)e[n]=""+n;return e}if(Object.keys)return Object.keys(t);var r=[];for(var o in t)Di(t,o)&&r.push(o);return r}function je(t){switch(typeof t){case"object":return JSON.parse(JSON.stringify(t));case"undefined":return null;default:return t}}function Ui(t){for(var e=0,n=t.length,r;e<n;){if(r=t.charCodeAt(e),r>=48&&r<=57){e++;continue}return!1}return!0}function Ct(t){return t.indexOf("/")===-1&&t.indexOf("~")===-1?t:t.replace(/~/g,"~0").replace(/\//g,"~1")}function go(t){return t.replace(/~1/g,"/").replace(/~0/g,"~")}function zi(t){if(t===void 0)return!0;if(t){if(Array.isArray(t)){for(var e=0,n=t.length;e<n;e++)if(zi(t[e]))return!0}else if(typeof t=="object"){for(var r=$i(t),o=r.length,i=0;i<o;i++)if(zi(t[r[i]]))return!0}}return!1}function em(t,e){var n=[t];for(var r in e){var o=typeof e[r]=="object"?JSON.stringify(e[r],null,2):e[r];typeof o<"u"&&n.push(r+": "+o)}return n.join(`
`)}var vo=(function(t){FT(e,t);function e(n,r,o,i,s){var a=this.constructor,c=t.call(this,em(n,{name:r,index:o,operation:i,tree:s}))||this;return c.name=r,c.index=o,c.operation=i,c.tree=s,Object.setPrototypeOf(c,a.prototype),c.message=em(n,{name:r,index:o,operation:i,tree:s}),c}return e})(Error);var Ne=vo,BT=je,gr={add:function(t,e,n){return t[e]=this.value,{newDocument:n}},remove:function(t,e,n){var r=t[e];return delete t[e],{newDocument:n,removed:r}},replace:function(t,e,n){var r=t[e];return t[e]=this.value,{newDocument:n,removed:r}},move:function(t,e,n){var r=Hi(n,this.path);r&&(r=je(r));var o=Tn(n,{op:"remove",path:this.from}).removed;return Tn(n,{op:"add",path:this.path,value:o}),{newDocument:n,removed:r}},copy:function(t,e,n){var r=Hi(n,this.from);return Tn(n,{op:"add",path:this.path,value:je(r)}),{newDocument:n}},test:function(t,e,n){return{newDocument:n,test:bo(t[e],this.value)}},_get:function(t,e,n){return this.value=t[e],{newDocument:n}}},VT={add:function(t,e,n){return Ui(e)?t.splice(e,0,this.value):t[e]=this.value,{newDocument:n,index:e}},remove:function(t,e,n){var r=t.splice(e,1);return{newDocument:n,removed:r[0]}},replace:function(t,e,n){var r=t[e];return t[e]=this.value,{newDocument:n,removed:r}},move:gr.move,copy:gr.copy,test:gr.test,_get:gr._get};function Hi(t,e){if(e=="")return t;var n={op:"_get",path:e};return Tn(t,n),n.value}function Tn(t,e,n,r,o,i){if(n===void 0&&(n=!1),r===void 0&&(r=!0),o===void 0&&(o=!0),i===void 0&&(i=0),n&&(typeof n=="function"?n(e,0,t,e.path):Fi(e,0)),e.path===""){var s={newDocument:t};if(e.op==="add")return s.newDocument=e.value,s;if(e.op==="replace")return s.newDocument=e.value,s.removed=t,s;if(e.op==="move"||e.op==="copy")return s.newDocument=Hi(t,e.from),e.op==="move"&&(s.removed=t),s;if(e.op==="test"){if(s.test=bo(t,e.value),s.test===!1)throw new Ne("Test operation failed","TEST_OPERATION_FAILED",i,e,t);return s.newDocument=t,s}else{if(e.op==="remove")return s.removed=t,s.newDocument=null,s;if(e.op==="_get")return e.value=t,s;if(n)throw new Ne("Operation `op` property is not one of operations defined in RFC-6902","OPERATION_OP_INVALID",i,e,t);return s}}else{r||(t=je(t));var a=e.path||"",c=a.split("/"),l=t,d=1,h=c.length,m=void 0,f=void 0,u=void 0;for(typeof n=="function"?u=n:u=Fi;;){if(f=c[d],f&&f.indexOf("~")!=-1&&(f=go(f)),o&&(f=="__proto__"||f=="prototype"&&d>0&&c[d-1]=="constructor"))throw new TypeError("JSON-Patch: modifying `__proto__` or `constructor/prototype` prop is banned for security reasons, if this was on purpose, please set `banPrototypeModifications` flag false and pass it to this function. More info in fast-json-patch README");if(n&&m===void 0&&(l[f]===void 0?m=c.slice(0,d).join("/"):d==h-1&&(m=e.path),m!==void 0&&u(e,0,t,m)),d++,Array.isArray(l)){if(f==="-")f=l.length;else{if(n&&!Ui(f))throw new Ne("Expected an unsigned base-10 integer value, making the new referenced value the array element with the zero-based index","OPERATION_PATH_ILLEGAL_ARRAY_INDEX",i,e,t);Ui(f)&&(f=~~f)}if(d>=h){if(n&&e.op==="add"&&f>l.length)throw new Ne("The specified index MUST NOT be greater than the number of elements in the array","OPERATION_VALUE_OUT_OF_BOUNDS",i,e,t);var s=VT[e.op].call(e,l,f,t);if(s.test===!1)throw new Ne("Test operation failed","TEST_OPERATION_FAILED",i,e,t);return s}}else if(d>=h){var s=gr[e.op].call(e,l,f,t);if(s.test===!1)throw new Ne("Test operation failed","TEST_OPERATION_FAILED",i,e,t);return s}if(l=l[f],n&&d<h&&(!l||typeof l!="object"))throw new Ne("Cannot perform operation at the desired path","OPERATION_PATH_UNRESOLVABLE",i,e,t)}}}function Gi(t,e,n,r,o){if(r===void 0&&(r=!0),o===void 0&&(o=!0),n&&!Array.isArray(e))throw new Ne("Patch sequence must be an array","SEQUENCE_NOT_AN_ARRAY");r||(t=je(t));for(var i=new Array(e.length),s=0,a=e.length;s<a;s++)i[s]=Tn(t,e[s],n,!0,o,s),t=i[s].newDocument;return i.newDocument=t,i}function ZT(t,e,n){var r=Tn(t,e);if(r.test===!1)throw new Ne("Test operation failed","TEST_OPERATION_FAILED",n,e,t);return r.newDocument}function Fi(t,e,n,r){if(typeof t!="object"||t===null||Array.isArray(t))throw new Ne("Operation is not an object","OPERATION_NOT_AN_OBJECT",e,t,n);if(gr[t.op]){if(typeof t.path!="string")throw new Ne("Operation `path` property is not a string","OPERATION_PATH_INVALID",e,t,n);if(t.path.indexOf("/")!==0&&t.path.length>0)throw new Ne('Operation `path` property must start with "/"',"OPERATION_PATH_INVALID",e,t,n);if((t.op==="move"||t.op==="copy")&&typeof t.from!="string")throw new Ne("Operation `from` property is not present (applicable in `move` and `copy` operations)","OPERATION_FROM_REQUIRED",e,t,n);if((t.op==="add"||t.op==="replace"||t.op==="test")&&t.value===void 0)throw new Ne("Operation `value` property is not present (applicable in `add`, `replace` and `test` operations)","OPERATION_VALUE_REQUIRED",e,t,n);if((t.op==="add"||t.op==="replace"||t.op==="test")&&zi(t.value))throw new Ne("Operation `value` property is not present (applicable in `add`, `replace` and `test` operations)","OPERATION_VALUE_CANNOT_CONTAIN_UNDEFINED",e,t,n);if(n){if(t.op=="add"){var o=t.path.split("/").length,i=r.split("/").length;if(o!==i+1&&o!==i)throw new Ne("Cannot perform an `add` operation at the desired path","OPERATION_PATH_CANNOT_ADD",e,t,n)}else if(t.op==="replace"||t.op==="remove"||t.op==="_get"){if(t.path!==r)throw new Ne("Cannot perform the operation at a path that does not exist","OPERATION_PATH_UNRESOLVABLE",e,t,n)}else if(t.op==="move"||t.op==="copy"){var s={op:"_get",path:t.from,value:void 0},a=tm([s],n);if(a&&a.name==="OPERATION_PATH_UNRESOLVABLE")throw new Ne("Cannot perform the operation from a path that does not exist","OPERATION_FROM_UNRESOLVABLE",e,t,n)}}}else throw new Ne("Operation `op` property is not one of operations defined in RFC-6902","OPERATION_OP_INVALID",e,t,n)}function tm(t,e,n){try{if(!Array.isArray(t))throw new Ne("Patch sequence must be an array","SEQUENCE_NOT_AN_ARRAY");if(e)Gi(je(e),je(t),n||!0);else{n=n||Fi;for(var r=0;r<t.length;r++)n(t[r],r,e,void 0)}}catch(o){if(o instanceof Ne)return o;throw o}}function bo(t,e){if(t===e)return!0;if(t&&e&&typeof t=="object"&&typeof e=="object"){var n=Array.isArray(t),r=Array.isArray(e),o,i,s;if(n&&r){if(i=t.length,i!=e.length)return!1;for(o=i;o--!==0;)if(!bo(t[o],e[o]))return!1;return!0}if(n!=r)return!1;var a=Object.keys(t);if(i=a.length,i!==Object.keys(e).length)return!1;for(o=i;o--!==0;)if(!e.hasOwnProperty(a[o]))return!1;for(o=i;o--!==0;)if(s=a[o],!bo(t[s],e[s]))return!1;return!0}return t!==t&&e!==e}var Cd={};kc(Cd,{compare:()=>QT,generate:()=>Ad,observe:()=>JT,unobserve:()=>XT});var Rd=new WeakMap,jT=(function(){function t(e){this.observers=new Map,this.obj=e}return t})(),WT=(function(){function t(e,n){this.callback=e,this.observer=n}return t})();function qT(t){return Rd.get(t)}function YT(t,e){return t.observers.get(e)}function KT(t,e){t.observers.delete(e.callback)}function XT(t,e){e.unobserve()}function JT(t,e){var n=[],r,o=qT(t);if(!o)o=new jT(t),Rd.set(t,o);else{var i=YT(o,e);r=i&&i.observer}if(r)return r;if(r={},o.value=je(t),e){r.callback=e,r.next=null;var s=function(){Ad(r)},a=function(){clearTimeout(r.next),r.next=setTimeout(s)};typeof window<"u"&&(window.addEventListener("mouseup",a),window.addEventListener("keyup",a),window.addEventListener("mousedown",a),window.addEventListener("keydown",a),window.addEventListener("change",a))}return r.patches=n,r.object=t,r.unobserve=function(){Ad(r),clearTimeout(r.next),KT(o,r),typeof window<"u"&&(window.removeEventListener("mouseup",a),window.removeEventListener("keyup",a),window.removeEventListener("mousedown",a),window.removeEventListener("keydown",a),window.removeEventListener("change",a))},o.observers.set(e,new WT(e,r)),r}function Ad(t,e){e===void 0&&(e=!1);var n=Rd.get(t.object);Id(n.value,t.object,t.patches,"",e),t.patches.length&&Gi(n.value,t.patches);var r=t.patches;return r.length>0&&(t.patches=[],t.callback&&t.callback(r)),r}function Id(t,e,n,r,o){if(e!==t){typeof e.toJSON=="function"&&(e=e.toJSON());for(var i=$i(e),s=$i(t),a=!1,c=!1,l=s.length-1;l>=0;l--){var d=s[l],h=t[d];if(Di(e,d)&&!(e[d]===void 0&&h!==void 0&&Array.isArray(e)===!1)){var m=e[d];typeof h=="object"&&h!=null&&typeof m=="object"&&m!=null&&Array.isArray(h)===Array.isArray(m)?Id(h,m,n,r+"/"+Ct(d),o):h!==m&&(a=!0,o&&n.push({op:"test",path:r+"/"+Ct(d),value:je(h)}),n.push({op:"replace",path:r+"/"+Ct(d),value:je(m)}))}else Array.isArray(t)===Array.isArray(e)?(o&&n.push({op:"test",path:r+"/"+Ct(d),value:je(h)}),n.push({op:"remove",path:r+"/"+Ct(d)}),c=!0):(o&&n.push({op:"test",path:r,value:t}),n.push({op:"replace",path:r,value:e}),a=!0)}if(!(!c&&i.length==s.length))for(var l=0;l<i.length;l++){var d=i[l];!Di(t,d)&&e[d]!==void 0&&n.push({op:"add",path:r+"/"+Ct(d),value:je(e[d])})}}}function QT(t,e,n){n===void 0&&(n=!1);var r=[];return Id(t,e,r,"",n),r}var Bi=Object.assign({},kd,Cd,{JsonPatchError:vo,deepClone:je,escapePathComponent:Ct,unescapePathComponent:go});var Nd=function(t,e){return Nd=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(n,r){n.__proto__=r}||function(n,r){for(var o in r)Object.prototype.hasOwnProperty.call(r,o)&&(n[o]=r[o])},Nd(t,e)};function Nt(t,e){if(typeof e!="function"&&e!==null)throw new TypeError("Class extends value "+String(e)+" is not a constructor or null");Nd(t,e);function n(){this.constructor=t}t.prototype=e===null?Object.create(e):(n.prototype=e.prototype,new n)}function nm(t,e,n,r){function o(i){return i instanceof n?i:new n(function(s){s(i)})}return new(n||(n=Promise))(function(i,s){function a(d){try{l(r.next(d))}catch(h){s(h)}}function c(d){try{l(r.throw(d))}catch(h){s(h)}}function l(d){d.done?i(d.value):o(d.value).then(a,c)}l((r=r.apply(t,e||[])).next())})}function Vi(t,e){var n={label:0,sent:function(){if(i[0]&1)throw i[1];return i[1]},trys:[],ops:[]},r,o,i,s=Object.create((typeof Iterator=="function"?Iterator:Object).prototype);return s.next=a(0),s.throw=a(1),s.return=a(2),typeof Symbol=="function"&&(s[Symbol.iterator]=function(){return this}),s;function a(l){return function(d){return c([l,d])}}function c(l){if(r)throw new TypeError("Generator is already executing.");for(;s&&(s=0,l[0]&&(n=0)),n;)try{if(r=1,o&&(i=l[0]&2?o.return:l[0]?o.throw||((i=o.return)&&i.call(o),0):o.next)&&!(i=i.call(o,l[1])).done)return i;switch(o=0,i&&(l=[l[0]&2,i.value]),l[0]){case 0:case 1:i=l;break;case 4:return n.label++,{value:l[1],done:!1};case 5:n.label++,o=l[1],l=[0];continue;case 7:l=n.ops.pop(),n.trys.pop();continue;default:if(i=n.trys,!(i=i.length>0&&i[i.length-1])&&(l[0]===6||l[0]===2)){n=0;continue}if(l[0]===3&&(!i||l[1]>i[0]&&l[1]<i[3])){n.label=l[1];break}if(l[0]===6&&n.label<i[1]){n.label=i[1],i=l;break}if(i&&n.label<i[2]){n.label=i[2],n.ops.push(l);break}i[2]&&n.ops.pop(),n.trys.pop();continue}l=e.call(t,n)}catch(d){l=[6,d],o=0}finally{r=i=0}if(l[0]&5)throw l[1];return{value:l[0]?l[1]:void 0,done:!0}}}function Zt(t){var e=typeof Symbol=="function"&&Symbol.iterator,n=e&&t[e],r=0;if(n)return n.call(t);if(t&&typeof t.length=="number")return{next:function(){return t&&r>=t.length&&(t=void 0),{value:t&&t[r++],done:!t}}};throw new TypeError(e?"Object is not iterable.":"Symbol.iterator is not defined.")}function Ot(t,e){var n=typeof Symbol=="function"&&t[Symbol.iterator];if(!n)return t;var r=n.call(t),o,i=[],s;try{for(;(e===void 0||e-- >0)&&!(o=r.next()).done;)i.push(o.value)}catch(a){s={error:a}}finally{try{o&&!o.done&&(n=r.return)&&n.call(r)}finally{if(s)throw s.error}}return i}function Mt(t,e,n){if(n||arguments.length===2)for(var r=0,o=e.length,i;r<o;r++)(i||!(r in e))&&(i||(i=Array.prototype.slice.call(e,0,r)),i[r]=e[r]);return t.concat(i||Array.prototype.slice.call(e))}function Sn(t){return this instanceof Sn?(this.v=t,this):new Sn(t)}function rm(t,e,n){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var r=n.apply(t,e||[]),o,i=[];return o=Object.create((typeof AsyncIterator=="function"?AsyncIterator:Object).prototype),a("next"),a("throw"),a("return",s),o[Symbol.asyncIterator]=function(){return this},o;function s(f){return function(u){return Promise.resolve(u).then(f,h)}}function a(f,u){r[f]&&(o[f]=function(v){return new Promise(function(E,T){i.push([f,v,E,T])>1||c(f,v)})},u&&(o[f]=u(o[f])))}function c(f,u){try{l(r[f](u))}catch(v){m(i[0][3],v)}}function l(f){f.value instanceof Sn?Promise.resolve(f.value.v).then(d,h):m(i[0][2],f)}function d(f){c("next",f)}function h(f){c("throw",f)}function m(f,u){f(u),i.shift(),i.length&&c(i[0][0],i[0][1])}}function om(t){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var e=t[Symbol.asyncIterator],n;return e?e.call(t):(t=typeof Zt=="function"?Zt(t):t[Symbol.iterator](),n={},r("next"),r("throw"),r("return"),n[Symbol.asyncIterator]=function(){return this},n);function r(i){n[i]=t[i]&&function(s){return new Promise(function(a,c){s=t[i](s),o(a,c,s.done,s.value)})}}function o(i,s,a,c){Promise.resolve(c).then(function(l){i({value:l,done:a})},s)}}function ne(t){return typeof t=="function"}function vr(t){var e=function(r){Error.call(r),r.stack=new Error().stack},n=t(e);return n.prototype=Object.create(Error.prototype),n.prototype.constructor=n,n}var Zi=vr(function(t){return function(n){t(this),this.message=n?n.length+` errors occurred during unsubscription:
`+n.map(function(r,o){return o+1+") "+r.toString()}).join(`
  `):"",this.name="UnsubscriptionError",this.errors=n}});function yo(t,e){if(t){var n=t.indexOf(e);0<=n&&t.splice(n,1)}}var br=(function(){function t(e){this.initialTeardown=e,this.closed=!1,this._parentage=null,this._finalizers=null}return t.prototype.unsubscribe=function(){var e,n,r,o,i;if(!this.closed){this.closed=!0;var s=this._parentage;if(s)if(this._parentage=null,Array.isArray(s))try{for(var a=Zt(s),c=a.next();!c.done;c=a.next()){var l=c.value;l.remove(this)}}catch(v){e={error:v}}finally{try{c&&!c.done&&(n=a.return)&&n.call(a)}finally{if(e)throw e.error}}else s.remove(this);var d=this.initialTeardown;if(ne(d))try{d()}catch(v){i=v instanceof Zi?v.errors:[v]}var h=this._finalizers;if(h){this._finalizers=null;try{for(var m=Zt(h),f=m.next();!f.done;f=m.next()){var u=f.value;try{im(u)}catch(v){i=i??[],v instanceof Zi?i=Mt(Mt([],Ot(i)),Ot(v.errors)):i.push(v)}}}catch(v){r={error:v}}finally{try{f&&!f.done&&(o=m.return)&&o.call(m)}finally{if(r)throw r.error}}}if(i)throw new Zi(i)}},t.prototype.add=function(e){var n;if(e&&e!==this)if(this.closed)im(e);else{if(e instanceof t){if(e.closed||e._hasParent(this))return;e._addParent(this)}(this._finalizers=(n=this._finalizers)!==null&&n!==void 0?n:[]).push(e)}},t.prototype._hasParent=function(e){var n=this._parentage;return n===e||Array.isArray(n)&&n.includes(e)},t.prototype._addParent=function(e){var n=this._parentage;this._parentage=Array.isArray(n)?(n.push(e),n):n?[n,e]:e},t.prototype._removeParent=function(e){var n=this._parentage;n===e?this._parentage=null:Array.isArray(n)&&yo(n,e)},t.prototype.remove=function(e){var n=this._finalizers;n&&yo(n,e),e instanceof t&&e._removeParent(this)},t.EMPTY=(function(){var e=new t;return e.closed=!0,e})(),t})();var Od=br.EMPTY;function ji(t){return t instanceof br||t&&"closed"in t&&ne(t.remove)&&ne(t.add)&&ne(t.unsubscribe)}function im(t){ne(t)?t():t.unsubscribe()}var vt={onUnhandledError:null,onStoppedNotification:null,Promise:void 0,useDeprecatedSynchronousErrorHandling:!1,useDeprecatedNextContext:!1};var yr={setTimeout:function(t,e){for(var n=[],r=2;r<arguments.length;r++)n[r-2]=arguments[r];var o=yr.delegate;return o?.setTimeout?o.setTimeout.apply(o,Mt([t,e],Ot(n))):setTimeout.apply(void 0,Mt([t,e],Ot(n)))},clearTimeout:function(t){var e=yr.delegate;return(e?.clearTimeout||clearTimeout)(t)},delegate:void 0};function Wi(t){yr.setTimeout(function(){var e=vt.onUnhandledError;if(e)e(t);else throw t})}function wo(){}var sm=(function(){return Md("C",void 0,void 0)})();function am(t){return Md("E",void 0,t)}function lm(t){return Md("N",t,void 0)}function Md(t,e,n){return{kind:t,value:e,error:n}}var kn=null;function wr(t){if(vt.useDeprecatedSynchronousErrorHandling){var e=!kn;if(e&&(kn={errorThrown:!1,error:null}),t(),e){var n=kn,r=n.errorThrown,o=n.error;if(kn=null,r)throw o}}else t()}function cm(t){vt.useDeprecatedSynchronousErrorHandling&&kn&&(kn.errorThrown=!0,kn.error=t)}var xo=(function(t){Nt(e,t);function e(n){var r=t.call(this)||this;return r.isStopped=!1,n?(r.destination=n,ji(n)&&n.add(r)):r.destination=rS,r}return e.create=function(n,r,o){return new Yi(n,r,o)},e.prototype.next=function(n){this.isStopped?Ld(lm(n),this):this._next(n)},e.prototype.error=function(n){this.isStopped?Ld(am(n),this):(this.isStopped=!0,this._error(n))},e.prototype.complete=function(){this.isStopped?Ld(sm,this):(this.isStopped=!0,this._complete())},e.prototype.unsubscribe=function(){this.closed||(this.isStopped=!0,t.prototype.unsubscribe.call(this),this.destination=null)},e.prototype._next=function(n){this.destination.next(n)},e.prototype._error=function(n){try{this.destination.error(n)}finally{this.unsubscribe()}},e.prototype._complete=function(){try{this.destination.complete()}finally{this.unsubscribe()}},e})(br);var eS=Function.prototype.bind;function Pd(t,e){return eS.call(t,e)}var tS=(function(){function t(e){this.partialObserver=e}return t.prototype.next=function(e){var n=this.partialObserver;if(n.next)try{n.next(e)}catch(r){qi(r)}},t.prototype.error=function(e){var n=this.partialObserver;if(n.error)try{n.error(e)}catch(r){qi(r)}else qi(e)},t.prototype.complete=function(){var e=this.partialObserver;if(e.complete)try{e.complete()}catch(n){qi(n)}},t})(),Yi=(function(t){Nt(e,t);function e(n,r,o){var i=t.call(this)||this,s;if(ne(n)||!n)s={next:n??void 0,error:r??void 0,complete:o??void 0};else{var a;i&&vt.useDeprecatedNextContext?(a=Object.create(n),a.unsubscribe=function(){return i.unsubscribe()},s={next:n.next&&Pd(n.next,a),error:n.error&&Pd(n.error,a),complete:n.complete&&Pd(n.complete,a)}):s=n}return i.destination=new tS(s),i}return e})(xo);function qi(t){vt.useDeprecatedSynchronousErrorHandling?cm(t):Wi(t)}function nS(t){throw t}function Ld(t,e){var n=vt.onStoppedNotification;n&&yr.setTimeout(function(){return n(t,e)})}var rS={closed:!0,next:wo,error:nS,complete:wo};var xr=(function(){return typeof Symbol=="function"&&Symbol.observable||"@@observable"})();function Er(t){return t}function Ki(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];return zd(t)}function zd(t){return t.length===0?Er:t.length===1?t[0]:function(n){return t.reduce(function(r,o){return o(r)},n)}}var Ee=(function(){function t(e){e&&(this._subscribe=e)}return t.prototype.lift=function(e){var n=new t;return n.source=this,n.operator=e,n},t.prototype.subscribe=function(e,n,r){var o=this,i=iS(e)?e:new Yi(e,n,r);return wr(function(){var s=o,a=s.operator,c=s.source;i.add(a?a.call(i,c):c?o._subscribe(i):o._trySubscribe(i))}),i},t.prototype._trySubscribe=function(e){try{return this._subscribe(e)}catch(n){e.error(n)}},t.prototype.forEach=function(e,n){var r=this;return n=dm(n),new n(function(o,i){var s=new Yi({next:function(a){try{e(a)}catch(c){i(c),s.unsubscribe()}},error:i,complete:o});r.subscribe(s)})},t.prototype._subscribe=function(e){var n;return(n=this.source)===null||n===void 0?void 0:n.subscribe(e)},t.prototype[xr]=function(){return this},t.prototype.pipe=function(){for(var e=[],n=0;n<arguments.length;n++)e[n]=arguments[n];return zd(e)(this)},t.prototype.toPromise=function(e){var n=this;return e=dm(e),new e(function(r,o){var i;n.subscribe(function(s){return i=s},function(s){return o(s)},function(){return r(i)})})},t.create=function(e){return new t(e)},t})();function dm(t){var e;return(e=t??vt.Promise)!==null&&e!==void 0?e:Promise}function oS(t){return t&&ne(t.next)&&ne(t.error)&&ne(t.complete)}function iS(t){return t&&t instanceof xo||oS(t)&&ji(t)}function sS(t){return ne(t?.lift)}function ke(t){return function(e){if(sS(e))return e.lift(function(n){try{return t(n,this)}catch(r){this.error(r)}});throw new TypeError("Unable to lift unknown Observable type")}}function Pe(t,e,n,r,o){return new aS(t,e,n,r,o)}var aS=(function(t){Nt(e,t);function e(n,r,o,i,s,a){var c=t.call(this,n)||this;return c.onFinalize=s,c.shouldUnsubscribe=a,c._next=r?function(l){try{r(l)}catch(d){n.error(d)}}:t.prototype._next,c._error=i?function(l){try{i(l)}catch(d){n.error(d)}finally{this.unsubscribe()}}:t.prototype._error,c._complete=o?function(){try{o()}catch(l){n.error(l)}finally{this.unsubscribe()}}:t.prototype._complete,c}return e.prototype.unsubscribe=function(){var n;if(!this.shouldUnsubscribe||this.shouldUnsubscribe()){var r=this.closed;t.prototype.unsubscribe.call(this),!r&&((n=this.onFinalize)===null||n===void 0||n.call(this))}},e})(xo);var um=vr(function(t){return function(){t(this),this.name="ObjectUnsubscribedError",this.message="object unsubscribed"}});var Pt=(function(t){Nt(e,t);function e(){var n=t.call(this)||this;return n.closed=!1,n.currentObservers=null,n.observers=[],n.isStopped=!1,n.hasError=!1,n.thrownError=null,n}return e.prototype.lift=function(n){var r=new hm(this,this);return r.operator=n,r},e.prototype._throwIfClosed=function(){if(this.closed)throw new um},e.prototype.next=function(n){var r=this;wr(function(){var o,i;if(r._throwIfClosed(),!r.isStopped){r.currentObservers||(r.currentObservers=Array.from(r.observers));try{for(var s=Zt(r.currentObservers),a=s.next();!a.done;a=s.next()){var c=a.value;c.next(n)}}catch(l){o={error:l}}finally{try{a&&!a.done&&(i=s.return)&&i.call(s)}finally{if(o)throw o.error}}}})},e.prototype.error=function(n){var r=this;wr(function(){if(r._throwIfClosed(),!r.isStopped){r.hasError=r.isStopped=!0,r.thrownError=n;for(var o=r.observers;o.length;)o.shift().error(n)}})},e.prototype.complete=function(){var n=this;wr(function(){if(n._throwIfClosed(),!n.isStopped){n.isStopped=!0;for(var r=n.observers;r.length;)r.shift().complete()}})},e.prototype.unsubscribe=function(){this.isStopped=this.closed=!0,this.observers=this.currentObservers=null},Object.defineProperty(e.prototype,"observed",{get:function(){var n;return((n=this.observers)===null||n===void 0?void 0:n.length)>0},enumerable:!1,configurable:!0}),e.prototype._trySubscribe=function(n){return this._throwIfClosed(),t.prototype._trySubscribe.call(this,n)},e.prototype._subscribe=function(n){return this._throwIfClosed(),this._checkFinalizedStatuses(n),this._innerSubscribe(n)},e.prototype._innerSubscribe=function(n){var r=this,o=this,i=o.hasError,s=o.isStopped,a=o.observers;return i||s?Od:(this.currentObservers=null,a.push(n),new br(function(){r.currentObservers=null,yo(a,n)}))},e.prototype._checkFinalizedStatuses=function(n){var r=this,o=r.hasError,i=r.thrownError,s=r.isStopped;o?n.error(i):s&&n.complete()},e.prototype.asObservable=function(){var n=new Ee;return n.source=this,n},e.create=function(n,r){return new hm(n,r)},e})(Ee);var hm=(function(t){Nt(e,t);function e(n,r){var o=t.call(this)||this;return o.destination=n,o.source=r,o}return e.prototype.next=function(n){var r,o;(o=(r=this.destination)===null||r===void 0?void 0:r.next)===null||o===void 0||o.call(r,n)},e.prototype.error=function(n){var r,o;(o=(r=this.destination)===null||r===void 0?void 0:r.error)===null||o===void 0||o.call(r,n)},e.prototype.complete=function(){var n,r;(r=(n=this.destination)===null||n===void 0?void 0:n.complete)===null||r===void 0||r.call(n)},e.prototype._subscribe=function(n){var r,o;return(o=(r=this.source)===null||r===void 0?void 0:r.subscribe(n))!==null&&o!==void 0?o:Od},e})(Pt);var Dd={now:function(){return(Dd.delegate||Date).now()},delegate:void 0};var Xi=(function(t){Nt(e,t);function e(n,r,o){n===void 0&&(n=1/0),r===void 0&&(r=1/0),o===void 0&&(o=Dd);var i=t.call(this)||this;return i._bufferSize=n,i._windowTime=r,i._timestampProvider=o,i._buffer=[],i._infiniteTimeWindow=!0,i._infiniteTimeWindow=r===1/0,i._bufferSize=Math.max(1,n),i._windowTime=Math.max(1,r),i}return e.prototype.next=function(n){var r=this,o=r.isStopped,i=r._buffer,s=r._infiniteTimeWindow,a=r._timestampProvider,c=r._windowTime;o||(i.push(n),!s&&i.push(a.now()+c)),this._trimBuffer(),t.prototype.next.call(this,n)},e.prototype._subscribe=function(n){this._throwIfClosed(),this._trimBuffer();for(var r=this._innerSubscribe(n),o=this,i=o._infiniteTimeWindow,s=o._buffer,a=s.slice(),c=0;c<a.length&&!n.closed;c+=i?1:2)n.next(a[c]);return this._checkFinalizedStatuses(n),r},e.prototype._trimBuffer=function(){var n=this,r=n._bufferSize,o=n._timestampProvider,i=n._buffer,s=n._infiniteTimeWindow,a=(s?1:2)*r;if(r<1/0&&a<i.length&&i.splice(0,i.length-a),!s){for(var c=o.now(),l=0,d=1;d<i.length&&i[d]<=c;d+=2)l=d;l&&i.splice(0,l+1)}},e})(Pt);var An=new Ee(function(t){return t.complete()});function pm(t){return t&&ne(t.schedule)}function lS(t){return t[t.length-1]}function Ji(t){return pm(lS(t))?t.pop():void 0}var Qi=(function(t){return t&&typeof t.length=="number"&&typeof t!="function"});function es(t){return ne(t?.then)}function ts(t){return ne(t[xr])}function ns(t){return Symbol.asyncIterator&&ne(t?.[Symbol.asyncIterator])}function rs(t){return new TypeError("You provided "+(t!==null&&typeof t=="object"?"an invalid object":"'"+t+"'")+" where a stream was expected. You can provide an Observable, Promise, ReadableStream, Array, AsyncIterable, or Iterable.")}function cS(){return typeof Symbol!="function"||!Symbol.iterator?"@@iterator":Symbol.iterator}var os=cS();function is(t){return ne(t?.[os])}function ss(t){return rm(this,arguments,function(){var n,r,o,i;return Vi(this,function(s){switch(s.label){case 0:n=t.getReader(),s.label=1;case 1:s.trys.push([1,,9,10]),s.label=2;case 2:return[4,Sn(n.read())];case 3:return r=s.sent(),o=r.value,i=r.done,i?[4,Sn(void 0)]:[3,5];case 4:return[2,s.sent()];case 5:return[4,Sn(o)];case 6:return[4,s.sent()];case 7:return s.sent(),[3,2];case 8:return[3,10];case 9:return n.releaseLock(),[7];case 10:return[2]}})})}function as(t){return ne(t?.getReader)}function Ge(t){if(t instanceof Ee)return t;if(t!=null){if(ts(t))return dS(t);if(Qi(t))return uS(t);if(es(t))return hS(t);if(ns(t))return fm(t);if(is(t))return pS(t);if(as(t))return fS(t)}throw rs(t)}function dS(t){return new Ee(function(e){var n=t[xr]();if(ne(n.subscribe))return n.subscribe(e);throw new TypeError("Provided object does not correctly implement Symbol.observable")})}function uS(t){return new Ee(function(e){for(var n=0;n<t.length&&!e.closed;n++)e.next(t[n]);e.complete()})}function hS(t){return new Ee(function(e){t.then(function(n){e.closed||(e.next(n),e.complete())},function(n){return e.error(n)}).then(null,Wi)})}function pS(t){return new Ee(function(e){var n,r;try{for(var o=Zt(t),i=o.next();!i.done;i=o.next()){var s=i.value;if(e.next(s),e.closed)return}}catch(a){n={error:a}}finally{try{i&&!i.done&&(r=o.return)&&r.call(o)}finally{if(n)throw n.error}}e.complete()})}function fm(t){return new Ee(function(e){mS(t,e).catch(function(n){return e.error(n)})})}function fS(t){return fm(ss(t))}function mS(t,e){var n,r,o,i;return nm(this,void 0,void 0,function(){var s,a;return Vi(this,function(c){switch(c.label){case 0:c.trys.push([0,5,6,11]),n=om(t),c.label=1;case 1:return[4,n.next()];case 2:if(r=c.sent(),!!r.done)return[3,4];if(s=r.value,e.next(s),e.closed)return[2];c.label=3;case 3:return[3,1];case 4:return[3,11];case 5:return a=c.sent(),o={error:a},[3,11];case 6:return c.trys.push([6,,9,10]),r&&!r.done&&(i=n.return)?[4,i.call(n)]:[3,8];case 7:c.sent(),c.label=8;case 8:return[3,10];case 9:if(o)throw o.error;return[7];case 10:return[7];case 11:return e.complete(),[2]}})})}function pt(t,e,n,r,o){r===void 0&&(r=0),o===void 0&&(o=!1);var i=e.schedule(function(){n(),o?t.add(this.schedule(null,r)):this.unsubscribe()},r);if(t.add(i),!o)return i}function ls(t,e){return e===void 0&&(e=0),ke(function(n,r){n.subscribe(Pe(r,function(o){return pt(r,t,function(){return r.next(o)},e)},function(){return pt(r,t,function(){return r.complete()},e)},function(o){return pt(r,t,function(){return r.error(o)},e)}))})}function cs(t,e){return e===void 0&&(e=0),ke(function(n,r){r.add(t.schedule(function(){return n.subscribe(r)},e))})}function mm(t,e){return Ge(t).pipe(cs(e),ls(e))}function gm(t,e){return Ge(t).pipe(cs(e),ls(e))}function vm(t,e){return new Ee(function(n){var r=0;return e.schedule(function(){r===t.length?n.complete():(n.next(t[r++]),n.closed||this.schedule())})})}function bm(t,e){return new Ee(function(n){var r;return pt(n,e,function(){r=t[os](),pt(n,e,function(){var o,i,s;try{o=r.next(),i=o.value,s=o.done}catch(a){n.error(a);return}s?n.complete():n.next(i)},0,!0)}),function(){return ne(r?.return)&&r.return()}})}function ds(t,e){if(!t)throw new Error("Iterable cannot be null");return new Ee(function(n){pt(n,e,function(){var r=t[Symbol.asyncIterator]();pt(n,e,function(){r.next().then(function(o){o.done?n.complete():n.next(o.value)})},0,!0)})})}function ym(t,e){return ds(ss(t),e)}function wm(t,e){if(t!=null){if(ts(t))return mm(t,e);if(Qi(t))return vm(t,e);if(es(t))return gm(t,e);if(ns(t))return ds(t,e);if(is(t))return bm(t,e);if(as(t))return ym(t,e)}throw rs(t)}function jt(t,e){return e?wm(t,e):Ge(t)}function ge(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];var n=Ji(t);return jt(t,n)}function Z(t,e){var n=ne(t)?t:function(){return t},r=function(o){return o.error(n())};return new Ee(e?function(o){return e.schedule(r,0,o)}:r)}var xm=vr(function(t){return function(){t(this),this.name="EmptyError",this.message="no elements in sequence"}});function us(t,e){var n=typeof e=="object";return new Promise(function(r,o){var i=!1,s;t.subscribe({next:function(a){s=a,i=!0},error:o,complete:function(){i?r(s):n?r(e.defaultValue):o(new xm)}})})}function Lt(t,e){return ke(function(n,r){var o=0;n.subscribe(Pe(r,function(i){r.next(t.call(e,i,o++))}))})}function Em(t,e,n,r,o,i,s,a){var c=[],l=0,d=0,h=!1,m=function(){h&&!c.length&&!l&&e.complete()},f=function(v){return l<r?u(v):c.push(v)},u=function(v){i&&e.next(v),l++;var E=!1;Ge(n(v,d++)).subscribe(Pe(e,function(T){o?.(T),i?f(T):e.next(T)},function(){E=!0},void 0,function(){if(E)try{l--;for(var T=function(){var w=c.shift();s?pt(e,s,function(){return u(w)}):u(w)};c.length&&l<r;)T();m()}catch(w){e.error(w)}}))};return t.subscribe(Pe(e,f,function(){h=!0,m()})),function(){a?.()}}function nt(t,e,n){return n===void 0&&(n=1/0),ne(e)?nt(function(r,o){return Lt(function(i,s){return e(r,i,o,s)})(Ge(t(r,o)))},n):(typeof e=="number"&&(n=e),ke(function(r,o){return Em(r,o,t,n)}))}function Eo(t){return t===void 0&&(t=1/0),nt(Er,t)}function _m(){return Eo(1)}function Rn(t){return new Ee(function(e){Ge(t()).subscribe(e)})}function $d(t,e){return ke(function(n,r){var o=0;n.subscribe(Pe(r,function(i){return t.call(e,i,o++)&&r.next(i)}))})}function _r(t){return ke(function(e,n){var r=null,o=!1,i;r=e.subscribe(Pe(n,void 0,void 0,function(s){i=Ge(t(s,_r(t)(e))),r?(r.unsubscribe(),r=null,i.subscribe(n)):o=!0})),o&&(r.unsubscribe(),r=null,i.subscribe(n))})}function hs(t,e){return ne(e)?nt(t,e,1):nt(t,1)}function Tm(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];var n=Ji(t);return ke(function(r,o){_m()(jt(Mt([r],Ot(t)),n)).subscribe(o)})}function Ud(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];return Tm.apply(void 0,Mt([],Ot(t)))}function Hd(t){return ke(function(e,n){var r=!1;e.subscribe(Pe(n,function(o){r=!0,n.next(o)},function(){r||n.next(t),n.complete()}))})}function In(t){return ke(function(e,n){try{e.subscribe(n)}finally{n.add(t)}})}function Fd(t,e){return ke(function(n,r){var o=null,i=0,s=!1,a=function(){return s&&!o&&r.complete()};n.subscribe(Pe(r,function(c){o?.unsubscribe();var l=0,d=i++;Ge(t(c,d)).subscribe(o=Pe(r,function(h){return r.next(e?e(c,h,d,l++):h)},function(){o=null,a()}))},function(){s=!0,a()}))})}function ps(t){return ke(function(e,n){Ge(t).subscribe(Pe(n,function(){return n.complete()},wo)),!n.closed&&e.subscribe(n)})}function fs(t,e,n){var r=ne(t)||e||n?{next:t,error:e,complete:n}:t;return r?ke(function(o,i){var s;(s=r.subscribe)===null||s===void 0||s.call(r);var a=!0;o.subscribe(Pe(i,function(c){var l;(l=r.next)===null||l===void 0||l.call(r,c),i.next(c)},function(){var c;a=!1,(c=r.complete)===null||c===void 0||c.call(r),i.complete()},function(c){var l;a=!1,(l=r.error)===null||l===void 0||l.call(r,c),i.error(c)},function(){var c,l;a&&((c=r.unsubscribe)===null||c===void 0||c.call(r)),(l=r.finalize)===null||l===void 0||l.call(r)}))}):Er}function Sm(t){return` \r
	`.indexOf(t)>=0}function ms(t){for(var e=["topLevel"],n=0,r,o,i,s=function(w){return e.push(w)},a=function(w){return e[e.length-1]=w},c=function(w){r==null&&(r=n,o=e.length,i=w)},l=function(w){w===i&&(r=void 0,o=void 0,i=void 0)},d=function(){return e.pop()},h=function(){return n--},m=function(w){if("0"<=w&&w<="9"){s("number");return}switch(w){case'"':s("string");return;case"-":s("numberNeedsDigit");return;case"t":s("true");return;case"f":s("false");return;case"n":s("null");return;case"[":s("arrayNeedsValue");return;case"{":s("objectNeedsKey");return}},f=t.length;n<f;n++){var u=t[n];switch(e[e.length-1]){case"topLevel":m(u);break;case"string":switch(u){case'"':d();break;case"\\":c("stringEscape"),s("stringEscaped");break}break;case"stringEscaped":u==="u"?s("stringUnicode"):(l("stringEscape"),d());break;case"stringUnicode":n-t.lastIndexOf("u",n)===4&&(l("stringEscape"),d());break;case"number":u==="."?a("numberNeedsDigit"):u==="e"||u==="E"?a("numberNeedsExponent"):(u<"0"||u>"9")&&(h(),d());break;case"numberNeedsDigit":a("number");break;case"numberNeedsExponent":a(u==="+"||u==="-"?"numberNeedsDigit":"number");break;case"true":case"false":case"null":(u<"a"||u>"z")&&(h(),d());break;case"arrayNeedsValue":u==="]"?d():Sm(u)||(l("collectionItem"),a("arrayNeedsComma"),m(u));break;case"arrayNeedsComma":u==="]"?d():u===","&&(c("collectionItem"),a("arrayNeedsValue"));break;case"objectNeedsKey":u==="}"?d():u==='"'&&(c("collectionItem"),a("objectNeedsColon"),s("string"));break;case"objectNeedsColon":u===":"&&a("objectNeedsValue");break;case"objectNeedsValue":Sm(u)||(l("collectionItem"),a("objectNeedsComma"),m(u));break;case"objectNeedsComma":u==="}"?d():u===","&&(c("collectionItem"),a("objectNeedsKey"));break}}o!=null&&(e.length=o);for(var v=[r!=null?t.slice(0,r):t],E=function(w){return v.push(w.slice(t.length-t.lastIndexOf(w[0])))},T=e.length-1;T>=0;T--)switch(e[T]){case"string":v.push('"');break;case"numberNeedsDigit":case"numberNeedsExponent":v.push("0");break;case"true":E("true");break;case"false":E("false");break;case"null":E("null");break;case"arrayNeedsValue":case"arrayNeedsComma":v.push("]");break;case"objectNeedsKey":case"objectNeedsColon":case"objectNeedsValue":case"objectNeedsComma":v.push("}");break}return v.join("")}var gS=Object.freeze({status:"aborted"});function R(t,e,n){function r(a,c){var l;Object.defineProperty(a,"_zod",{value:a._zod??{},enumerable:!1}),(l=a._zod).traits??(l.traits=new Set),a._zod.traits.add(t),e(a,c);for(let d in s.prototype)d in a||Object.defineProperty(a,d,{value:s.prototype[d].bind(a)});a._zod.constr=s,a._zod.def=c}let o=n?.Parent??Object;class i extends o{}Object.defineProperty(i,"name",{value:t});function s(a){var c;let l=n?.Parent?new i:this;r(l,a),(c=l._zod).deferred??(c.deferred=[]);for(let d of l._zod.deferred)d();return l}return Object.defineProperty(s,"init",{value:r}),Object.defineProperty(s,Symbol.hasInstance,{value:a=>n?.Parent&&a instanceof n.Parent?!0:a?._zod?.traits?.has(t)}),Object.defineProperty(s,"name",{value:t}),s}var Wt=class extends Error{constructor(){super("Encountered Promise during synchronous parse. Use .parseAsync() instead.")}},gs={};function We(t){return t&&Object.assign(gs,t),gs}var fe={};kc(fe,{BIGINT_FORMAT_RANGES:()=>Am,Class:()=>Bd,NUMBER_FORMAT_RANGES:()=>Xd,aborted:()=>Nn,allowsEval:()=>qd,assert:()=>xS,assertEqual:()=>vS,assertIs:()=>yS,assertNever:()=>wS,assertNotEqual:()=>bS,assignProp:()=>Wd,cached:()=>To,captureStackTrace:()=>bs,cleanEnum:()=>PS,cleanRegex:()=>ko,clone:()=>bt,createTransparentProxy:()=>AS,defineLazy:()=>ue,esc:()=>Cn,escapeRegex:()=>nn,extend:()=>CS,finalizeIssue:()=>yt,floatSafeRemainder:()=>jd,getElementAtPath:()=>ES,getEnumValues:()=>Vd,getLengthableOrigin:()=>Ao,getParsedType:()=>kS,getSizableOrigin:()=>Rm,isObject:()=>Tr,isPlainObject:()=>Sr,issue:()=>Jd,joinValues:()=>vs,jsonStringifyReplacer:()=>Zd,merge:()=>NS,normalizeParams:()=>j,nullish:()=>So,numKeys:()=>SS,omit:()=>IS,optionalKeys:()=>Kd,partial:()=>OS,pick:()=>RS,prefixIssues:()=>zt,primitiveTypes:()=>km,promiseAllObject:()=>_S,propertyKeyTypes:()=>Yd,randomString:()=>TS,required:()=>MS,stringifyPrimitive:()=>ys,unwrapMessage:()=>_o});function vS(t){return t}function bS(t){return t}function yS(t){}function wS(t){throw new Error}function xS(t){}function Vd(t){let e=Object.values(t).filter(r=>typeof r=="number");return Object.entries(t).filter(([r,o])=>e.indexOf(+r)===-1).map(([r,o])=>o)}function vs(t,e="|"){return t.map(n=>ys(n)).join(e)}function Zd(t,e){return typeof e=="bigint"?e.toString():e}function To(t){return{get value(){{let n=t();return Object.defineProperty(this,"value",{value:n}),n}throw new Error("cached value already set")}}}function So(t){return t==null}function ko(t){let e=t.startsWith("^")?1:0,n=t.endsWith("$")?t.length-1:t.length;return t.slice(e,n)}function jd(t,e){let n=(t.toString().split(".")[1]||"").length,r=(e.toString().split(".")[1]||"").length,o=n>r?n:r,i=Number.parseInt(t.toFixed(o).replace(".","")),s=Number.parseInt(e.toFixed(o).replace(".",""));return i%s/10**o}function ue(t,e,n){Object.defineProperty(t,e,{get(){{let o=n();return t[e]=o,o}throw new Error("cached value already set")},set(o){Object.defineProperty(t,e,{value:o})},configurable:!0})}function Wd(t,e,n){Object.defineProperty(t,e,{value:n,writable:!0,enumerable:!0,configurable:!0})}function ES(t,e){return e?e.reduce((n,r)=>n?.[r],t):t}function _S(t){let e=Object.keys(t),n=e.map(r=>t[r]);return Promise.all(n).then(r=>{let o={};for(let i=0;i<e.length;i++)o[e[i]]=r[i];return o})}function TS(t=10){let e="abcdefghijklmnopqrstuvwxyz",n="";for(let r=0;r<t;r++)n+=e[Math.floor(Math.random()*e.length)];return n}function Cn(t){return JSON.stringify(t)}var bs=Error.captureStackTrace?Error.captureStackTrace:(...t)=>{};function Tr(t){return typeof t=="object"&&t!==null&&!Array.isArray(t)}var qd=To(()=>{if(typeof navigator<"u"&&navigator?.userAgent?.includes("Cloudflare"))return!1;try{let t=Function;return new t(""),!0}catch{return!1}});function Sr(t){if(Tr(t)===!1)return!1;let e=t.constructor;if(e===void 0)return!0;let n=e.prototype;return!(Tr(n)===!1||Object.prototype.hasOwnProperty.call(n,"isPrototypeOf")===!1)}function SS(t){let e=0;for(let n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}var kS=t=>{let e=typeof t;switch(e){case"undefined":return"undefined";case"string":return"string";case"number":return Number.isNaN(t)?"nan":"number";case"boolean":return"boolean";case"function":return"function";case"bigint":return"bigint";case"symbol":return"symbol";case"object":return Array.isArray(t)?"array":t===null?"null":t.then&&typeof t.then=="function"&&t.catch&&typeof t.catch=="function"?"promise":typeof Map<"u"&&t instanceof Map?"map":typeof Set<"u"&&t instanceof Set?"set":typeof Date<"u"&&t instanceof Date?"date":typeof File<"u"&&t instanceof File?"file":"object";default:throw new Error(`Unknown data type: ${e}`)}},Yd=new Set(["string","number","symbol"]),km=new Set(["string","number","bigint","boolean","symbol","undefined"]);function nn(t){return t.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")}function bt(t,e,n){let r=new t._zod.constr(e??t._zod.def);return(!e||n?.parent)&&(r._zod.parent=t),r}function j(t){let e=t;if(!e)return{};if(typeof e=="string")return{error:()=>e};if(e?.message!==void 0){if(e?.error!==void 0)throw new Error("Cannot specify both `message` and `error` params");e.error=e.message}return delete e.message,typeof e.error=="string"?{...e,error:()=>e.error}:e}function AS(t){let e;return new Proxy({},{get(n,r,o){return e??(e=t()),Reflect.get(e,r,o)},set(n,r,o,i){return e??(e=t()),Reflect.set(e,r,o,i)},has(n,r){return e??(e=t()),Reflect.has(e,r)},deleteProperty(n,r){return e??(e=t()),Reflect.deleteProperty(e,r)},ownKeys(n){return e??(e=t()),Reflect.ownKeys(e)},getOwnPropertyDescriptor(n,r){return e??(e=t()),Reflect.getOwnPropertyDescriptor(e,r)},defineProperty(n,r,o){return e??(e=t()),Reflect.defineProperty(e,r,o)}})}function ys(t){return typeof t=="bigint"?t.toString()+"n":typeof t=="string"?`"${t}"`:`${t}`}function Kd(t){return Object.keys(t).filter(e=>t[e]._zod.optin==="optional"&&t[e]._zod.optout==="optional")}var Xd={safeint:[Number.MIN_SAFE_INTEGER,Number.MAX_SAFE_INTEGER],int32:[-2147483648,2147483647],uint32:[0,4294967295],float32:[-34028234663852886e22,34028234663852886e22],float64:[-Number.MAX_VALUE,Number.MAX_VALUE]},Am={int64:[BigInt("-9223372036854775808"),BigInt("9223372036854775807")],uint64:[BigInt(0),BigInt("18446744073709551615")]};function RS(t,e){let n={},r=t._zod.def;for(let o in e){if(!(o in r.shape))throw new Error(`Unrecognized key: "${o}"`);e[o]&&(n[o]=r.shape[o])}return bt(t,{...t._zod.def,shape:n,checks:[]})}function IS(t,e){let n={...t._zod.def.shape},r=t._zod.def;for(let o in e){if(!(o in r.shape))throw new Error(`Unrecognized key: "${o}"`);e[o]&&delete n[o]}return bt(t,{...t._zod.def,shape:n,checks:[]})}function CS(t,e){if(!Sr(e))throw new Error("Invalid input to extend: expected a plain object");let n={...t._zod.def,get shape(){let r={...t._zod.def.shape,...e};return Wd(this,"shape",r),r},checks:[]};return bt(t,n)}function NS(t,e){return bt(t,{...t._zod.def,get shape(){let n={...t._zod.def.shape,...e._zod.def.shape};return Wd(this,"shape",n),n},catchall:e._zod.def.catchall,checks:[]})}function OS(t,e,n){let r=e._zod.def.shape,o={...r};if(n)for(let i in n){if(!(i in r))throw new Error(`Unrecognized key: "${i}"`);n[i]&&(o[i]=t?new t({type:"optional",innerType:r[i]}):r[i])}else for(let i in r)o[i]=t?new t({type:"optional",innerType:r[i]}):r[i];return bt(e,{...e._zod.def,shape:o,checks:[]})}function MS(t,e,n){let r=e._zod.def.shape,o={...r};if(n)for(let i in n){if(!(i in o))throw new Error(`Unrecognized key: "${i}"`);n[i]&&(o[i]=new t({type:"nonoptional",innerType:r[i]}))}else for(let i in r)o[i]=new t({type:"nonoptional",innerType:r[i]});return bt(e,{...e._zod.def,shape:o,checks:[]})}function Nn(t,e=0){for(let n=e;n<t.issues.length;n++)if(t.issues[n]?.continue!==!0)return!0;return!1}function zt(t,e){return e.map(n=>{var r;return(r=n).path??(r.path=[]),n.path.unshift(t),n})}function _o(t){return typeof t=="string"?t:t?.message}function yt(t,e,n){let r={...t,path:t.path??[]};if(!t.message){let o=_o(t.inst?._zod.def?.error?.(t))??_o(e?.error?.(t))??_o(n.customError?.(t))??_o(n.localeError?.(t))??"Invalid input";r.message=o}return delete r.inst,delete r.continue,e?.reportInput||delete r.input,r}function Rm(t){return t instanceof Set?"set":t instanceof Map?"map":t instanceof File?"file":"unknown"}function Ao(t){return Array.isArray(t)?"array":typeof t=="string"?"string":"unknown"}function Jd(...t){let[e,n,r]=t;return typeof e=="string"?{message:e,code:"custom",input:n,inst:r}:{...e}}function PS(t){return Object.entries(t).filter(([e,n])=>Number.isNaN(Number.parseInt(e,10))).map(e=>e[1])}var Bd=class{constructor(...e){}};var Im=(t,e)=>{t.name="$ZodError",Object.defineProperty(t,"_zod",{value:t._zod,enumerable:!1}),Object.defineProperty(t,"issues",{value:e,enumerable:!1}),Object.defineProperty(t,"message",{get(){return JSON.stringify(e,Zd,2)},enumerable:!0}),Object.defineProperty(t,"toString",{value:()=>t.message,enumerable:!1})},ws=R("$ZodError",Im),Qd=R("$ZodError",Im,{Parent:Error});function eu(t,e=n=>n.message){let n={},r=[];for(let o of t.issues)o.path.length>0?(n[o.path[0]]=n[o.path[0]]||[],n[o.path[0]].push(e(o))):r.push(e(o));return{formErrors:r,fieldErrors:n}}function tu(t,e){let n=e||function(i){return i.message},r={_errors:[]},o=i=>{for(let s of i.issues)if(s.code==="invalid_union"&&s.errors.length)s.errors.map(a=>o({issues:a}));else if(s.code==="invalid_key")o({issues:s.issues});else if(s.code==="invalid_element")o({issues:s.issues});else if(s.path.length===0)r._errors.push(n(s));else{let a=r,c=0;for(;c<s.path.length;){let l=s.path[c];c===s.path.length-1?(a[l]=a[l]||{_errors:[]},a[l]._errors.push(n(s))):a[l]=a[l]||{_errors:[]},a=a[l],c++}}};return o(t),r}var Cm=t=>(e,n,r,o)=>{let i=r?Object.assign(r,{async:!1}):{async:!1},s=e._zod.run({value:n,issues:[]},i);if(s instanceof Promise)throw new Wt;if(s.issues.length){let a=new(o?.Err??t)(s.issues.map(c=>yt(c,i,We())));throw bs(a,o?.callee),a}return s.value};var Nm=t=>async(e,n,r,o)=>{let i=r?Object.assign(r,{async:!0}):{async:!0},s=e._zod.run({value:n,issues:[]},i);if(s instanceof Promise&&(s=await s),s.issues.length){let a=new(o?.Err??t)(s.issues.map(c=>yt(c,i,We())));throw bs(a,o?.callee),a}return s.value};var nu=t=>(e,n,r)=>{let o=r?{...r,async:!1}:{async:!1},i=e._zod.run({value:n,issues:[]},o);if(i instanceof Promise)throw new Wt;return i.issues.length?{success:!1,error:new(t??ws)(i.issues.map(s=>yt(s,o,We())))}:{success:!0,data:i.value}},Om=nu(Qd),ru=t=>async(e,n,r)=>{let o=r?Object.assign(r,{async:!0}):{async:!0},i=e._zod.run({value:n,issues:[]},o);return i instanceof Promise&&(i=await i),i.issues.length?{success:!1,error:new t(i.issues.map(s=>yt(s,o,We())))}:{success:!0,data:i.value}},Mm=ru(Qd);var Pm=/^[cC][^\s-]{8,}$/,Lm=/^[0-9a-z]+$/,zm=/^[0-9A-HJKMNP-TV-Za-hjkmnp-tv-z]{26}$/,Dm=/^[0-9a-vA-V]{20}$/,$m=/^[A-Za-z0-9]{27}$/,Um=/^[a-zA-Z0-9_-]{21}$/,Hm=/^P(?:(\d+W)|(?!.*W)(?=\d|T\d)(\d+Y)?(\d+M)?(\d+D)?(T(?=\d)(\d+H)?(\d+M)?(\d+([.,]\d+)?S)?)?)$/;var Fm=/^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12})$/,ou=t=>t?new RegExp(`^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-${t}[0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12})$`):/^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[1-8][0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12}|00000000-0000-0000-0000-000000000000)$/;var Gm=/^(?!\.)(?!.*\.\.)([A-Za-z0-9_'+\-\.]*)[A-Za-z0-9_+-]@([A-Za-z0-9][A-Za-z0-9\-]*\.)+[A-Za-z]{2,}$/;var zS="^(\\p{Extended_Pictographic}|\\p{Emoji_Component})+$";function Bm(){return new RegExp(zS,"u")}var Vm=/^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])$/,Zm=/^(([0-9a-fA-F]{1,4}:){7}[0-9a-fA-F]{1,4}|::|([0-9a-fA-F]{1,4})?::([0-9a-fA-F]{1,4}:?){0,6})$/,jm=/^((25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\/([0-9]|[1-2][0-9]|3[0-2])$/,Wm=/^(([0-9a-fA-F]{1,4}:){7}[0-9a-fA-F]{1,4}|::|([0-9a-fA-F]{1,4})?::([0-9a-fA-F]{1,4}:?){0,6})\/(12[0-8]|1[01][0-9]|[1-9]?[0-9])$/,qm=/^$|^(?:[0-9a-zA-Z+/]{4})*(?:(?:[0-9a-zA-Z+/]{2}==)|(?:[0-9a-zA-Z+/]{3}=))?$/,iu=/^[A-Za-z0-9_-]*$/,Ym=/^([a-zA-Z0-9-]+\.)*[a-zA-Z0-9-]+$/;var Km=/^\+(?:[0-9]){6,14}[0-9]$/,Xm="(?:(?:\\d\\d[2468][048]|\\d\\d[13579][26]|\\d\\d0[48]|[02468][048]00|[13579][26]00)-02-29|\\d{4}-(?:(?:0[13578]|1[02])-(?:0[1-9]|[12]\\d|3[01])|(?:0[469]|11)-(?:0[1-9]|[12]\\d|30)|(?:02)-(?:0[1-9]|1\\d|2[0-8])))",Jm=new RegExp(`^${Xm}$`);function Qm(t){let e="(?:[01]\\d|2[0-3]):[0-5]\\d";return typeof t.precision=="number"?t.precision===-1?`${e}`:t.precision===0?`${e}:[0-5]\\d`:`${e}:[0-5]\\d\\.\\d{${t.precision}}`:`${e}(?::[0-5]\\d(?:\\.\\d+)?)?`}function eg(t){return new RegExp(`^${Qm(t)}$`)}function tg(t){let e=Qm({precision:t.precision}),n=["Z"];t.local&&n.push(""),t.offset&&n.push("([+-]\\d{2}:\\d{2})");let r=`${e}(?:${n.join("|")})`;return new RegExp(`^${Xm}T(?:${r})$`)}var ng=t=>{let e=t?`[\\s\\S]{${t?.minimum??0},${t?.maximum??""}}`:"[\\s\\S]*";return new RegExp(`^${e}$`)};var rg=/^\d+$/,og=/^-?\d+(?:\.\d+)?/i,ig=/true|false/i;var sg=/^[^A-Z]*$/,ag=/^[^a-z]*$/;var Je=R("$ZodCheck",(t,e)=>{var n;t._zod??(t._zod={}),t._zod.def=e,(n=t._zod).onattach??(n.onattach=[])}),lg={number:"number",bigint:"bigint",object:"date"},su=R("$ZodCheckLessThan",(t,e)=>{Je.init(t,e);let n=lg[typeof e.value];t._zod.onattach.push(r=>{let o=r._zod.bag,i=(e.inclusive?o.maximum:o.exclusiveMaximum)??Number.POSITIVE_INFINITY;e.value<i&&(e.inclusive?o.maximum=e.value:o.exclusiveMaximum=e.value)}),t._zod.check=r=>{(e.inclusive?r.value<=e.value:r.value<e.value)||r.issues.push({origin:n,code:"too_big",maximum:e.value,input:r.value,inclusive:e.inclusive,inst:t,continue:!e.abort})}}),au=R("$ZodCheckGreaterThan",(t,e)=>{Je.init(t,e);let n=lg[typeof e.value];t._zod.onattach.push(r=>{let o=r._zod.bag,i=(e.inclusive?o.minimum:o.exclusiveMinimum)??Number.NEGATIVE_INFINITY;e.value>i&&(e.inclusive?o.minimum=e.value:o.exclusiveMinimum=e.value)}),t._zod.check=r=>{(e.inclusive?r.value>=e.value:r.value>e.value)||r.issues.push({origin:n,code:"too_small",minimum:e.value,input:r.value,inclusive:e.inclusive,inst:t,continue:!e.abort})}}),cg=R("$ZodCheckMultipleOf",(t,e)=>{Je.init(t,e),t._zod.onattach.push(n=>{var r;(r=n._zod.bag).multipleOf??(r.multipleOf=e.value)}),t._zod.check=n=>{if(typeof n.value!=typeof e.value)throw new Error("Cannot mix number and bigint in multiple_of check.");(typeof n.value=="bigint"?n.value%e.value===BigInt(0):jd(n.value,e.value)===0)||n.issues.push({origin:typeof n.value,code:"not_multiple_of",divisor:e.value,input:n.value,inst:t,continue:!e.abort})}}),dg=R("$ZodCheckNumberFormat",(t,e)=>{Je.init(t,e),e.format=e.format||"float64";let n=e.format?.includes("int"),r=n?"int":"number",[o,i]=Xd[e.format];t._zod.onattach.push(s=>{let a=s._zod.bag;a.format=e.format,a.minimum=o,a.maximum=i,n&&(a.pattern=rg)}),t._zod.check=s=>{let a=s.value;if(n){if(!Number.isInteger(a)){s.issues.push({expected:r,format:e.format,code:"invalid_type",input:a,inst:t});return}if(!Number.isSafeInteger(a)){a>0?s.issues.push({input:a,code:"too_big",maximum:Number.MAX_SAFE_INTEGER,note:"Integers must be within the safe integer range.",inst:t,origin:r,continue:!e.abort}):s.issues.push({input:a,code:"too_small",minimum:Number.MIN_SAFE_INTEGER,note:"Integers must be within the safe integer range.",inst:t,origin:r,continue:!e.abort});return}}a<o&&s.issues.push({origin:"number",input:a,code:"too_small",minimum:o,inclusive:!0,inst:t,continue:!e.abort}),a>i&&s.issues.push({origin:"number",input:a,code:"too_big",maximum:i,inst:t})}});var ug=R("$ZodCheckMaxLength",(t,e)=>{var n;Je.init(t,e),(n=t._zod.def).when??(n.when=r=>{let o=r.value;return!So(o)&&o.length!==void 0}),t._zod.onattach.push(r=>{let o=r._zod.bag.maximum??Number.POSITIVE_INFINITY;e.maximum<o&&(r._zod.bag.maximum=e.maximum)}),t._zod.check=r=>{let o=r.value;if(o.length<=e.maximum)return;let s=Ao(o);r.issues.push({origin:s,code:"too_big",maximum:e.maximum,inclusive:!0,input:o,inst:t,continue:!e.abort})}}),hg=R("$ZodCheckMinLength",(t,e)=>{var n;Je.init(t,e),(n=t._zod.def).when??(n.when=r=>{let o=r.value;return!So(o)&&o.length!==void 0}),t._zod.onattach.push(r=>{let o=r._zod.bag.minimum??Number.NEGATIVE_INFINITY;e.minimum>o&&(r._zod.bag.minimum=e.minimum)}),t._zod.check=r=>{let o=r.value;if(o.length>=e.minimum)return;let s=Ao(o);r.issues.push({origin:s,code:"too_small",minimum:e.minimum,inclusive:!0,input:o,inst:t,continue:!e.abort})}}),pg=R("$ZodCheckLengthEquals",(t,e)=>{var n;Je.init(t,e),(n=t._zod.def).when??(n.when=r=>{let o=r.value;return!So(o)&&o.length!==void 0}),t._zod.onattach.push(r=>{let o=r._zod.bag;o.minimum=e.length,o.maximum=e.length,o.length=e.length}),t._zod.check=r=>{let o=r.value,i=o.length;if(i===e.length)return;let s=Ao(o),a=i>e.length;r.issues.push({origin:s,...a?{code:"too_big",maximum:e.length}:{code:"too_small",minimum:e.length},inclusive:!0,exact:!0,input:r.value,inst:t,continue:!e.abort})}}),Ro=R("$ZodCheckStringFormat",(t,e)=>{var n,r;Je.init(t,e),t._zod.onattach.push(o=>{let i=o._zod.bag;i.format=e.format,e.pattern&&(i.patterns??(i.patterns=new Set),i.patterns.add(e.pattern))}),e.pattern?(n=t._zod).check??(n.check=o=>{e.pattern.lastIndex=0,!e.pattern.test(o.value)&&o.issues.push({origin:"string",code:"invalid_format",format:e.format,input:o.value,...e.pattern?{pattern:e.pattern.toString()}:{},inst:t,continue:!e.abort})}):(r=t._zod).check??(r.check=()=>{})}),fg=R("$ZodCheckRegex",(t,e)=>{Ro.init(t,e),t._zod.check=n=>{e.pattern.lastIndex=0,!e.pattern.test(n.value)&&n.issues.push({origin:"string",code:"invalid_format",format:"regex",input:n.value,pattern:e.pattern.toString(),inst:t,continue:!e.abort})}}),mg=R("$ZodCheckLowerCase",(t,e)=>{e.pattern??(e.pattern=sg),Ro.init(t,e)}),gg=R("$ZodCheckUpperCase",(t,e)=>{e.pattern??(e.pattern=ag),Ro.init(t,e)}),vg=R("$ZodCheckIncludes",(t,e)=>{Je.init(t,e);let n=nn(e.includes),r=new RegExp(typeof e.position=="number"?`^.{${e.position}}${n}`:n);e.pattern=r,t._zod.onattach.push(o=>{let i=o._zod.bag;i.patterns??(i.patterns=new Set),i.patterns.add(r)}),t._zod.check=o=>{o.value.includes(e.includes,e.position)||o.issues.push({origin:"string",code:"invalid_format",format:"includes",includes:e.includes,input:o.value,inst:t,continue:!e.abort})}}),bg=R("$ZodCheckStartsWith",(t,e)=>{Je.init(t,e);let n=new RegExp(`^${nn(e.prefix)}.*`);e.pattern??(e.pattern=n),t._zod.onattach.push(r=>{let o=r._zod.bag;o.patterns??(o.patterns=new Set),o.patterns.add(n)}),t._zod.check=r=>{r.value.startsWith(e.prefix)||r.issues.push({origin:"string",code:"invalid_format",format:"starts_with",prefix:e.prefix,input:r.value,inst:t,continue:!e.abort})}}),yg=R("$ZodCheckEndsWith",(t,e)=>{Je.init(t,e);let n=new RegExp(`.*${nn(e.suffix)}$`);e.pattern??(e.pattern=n),t._zod.onattach.push(r=>{let o=r._zod.bag;o.patterns??(o.patterns=new Set),o.patterns.add(n)}),t._zod.check=r=>{r.value.endsWith(e.suffix)||r.issues.push({origin:"string",code:"invalid_format",format:"ends_with",suffix:e.suffix,input:r.value,inst:t,continue:!e.abort})}});var wg=R("$ZodCheckOverwrite",(t,e)=>{Je.init(t,e),t._zod.check=n=>{n.value=e.tx(n.value)}});var Es=class{constructor(e=[]){this.content=[],this.indent=0,this&&(this.args=e)}indented(e){this.indent+=1,e(this),this.indent-=1}write(e){if(typeof e=="function"){e(this,{execution:"sync"}),e(this,{execution:"async"});return}let r=e.split(`
`).filter(s=>s),o=Math.min(...r.map(s=>s.length-s.trimStart().length)),i=r.map(s=>s.slice(o)).map(s=>" ".repeat(this.indent*2)+s);for(let s of i)this.content.push(s)}compile(){let e=Function,n=this?.args,o=[...(this?.content??[""]).map(i=>`  ${i}`)];return new e(...n,o.join(`
`))}};var Eg={major:4,minor:0,patch:0};var be=R("$ZodType",(t,e)=>{var n;t??(t={}),t._zod.def=e,t._zod.bag=t._zod.bag||{},t._zod.version=Eg;let r=[...t._zod.def.checks??[]];t._zod.traits.has("$ZodCheck")&&r.unshift(t);for(let o of r)for(let i of o._zod.onattach)i(t);if(r.length===0)(n=t._zod).deferred??(n.deferred=[]),t._zod.deferred?.push(()=>{t._zod.run=t._zod.parse});else{let o=(i,s,a)=>{let c=Nn(i),l;for(let d of s){if(d._zod.def.when){if(!d._zod.def.when(i))continue}else if(c)continue;let h=i.issues.length,m=d._zod.check(i);if(m instanceof Promise&&a?.async===!1)throw new Wt;if(l||m instanceof Promise)l=(l??Promise.resolve()).then(async()=>{await m,i.issues.length!==h&&(c||(c=Nn(i,h)))});else{if(i.issues.length===h)continue;c||(c=Nn(i,h))}}return l?l.then(()=>i):i};t._zod.run=(i,s)=>{let a=t._zod.parse(i,s);if(a instanceof Promise){if(s.async===!1)throw new Wt;return a.then(c=>o(c,r,s))}return o(a,r,s)}}t["~standard"]={validate:o=>{try{let i=Om(t,o);return i.success?{value:i.data}:{issues:i.error?.issues}}catch{return Mm(t,o).then(s=>s.success?{value:s.data}:{issues:s.error?.issues})}},vendor:"zod",version:1}}),Ts=R("$ZodString",(t,e)=>{be.init(t,e),t._zod.pattern=[...t?._zod.bag?.patterns??[]].pop()??ng(t._zod.bag),t._zod.parse=(n,r)=>{if(e.coerce)try{n.value=String(n.value)}catch{}return typeof n.value=="string"||n.issues.push({expected:"string",code:"invalid_type",input:n.value,inst:t}),n}}),_e=R("$ZodStringFormat",(t,e)=>{Ro.init(t,e),Ts.init(t,e)}),Og=R("$ZodGUID",(t,e)=>{e.pattern??(e.pattern=Fm),_e.init(t,e)}),Mg=R("$ZodUUID",(t,e)=>{if(e.version){let r={v1:1,v2:2,v3:3,v4:4,v5:5,v6:6,v7:7,v8:8}[e.version];if(r===void 0)throw new Error(`Invalid UUID version: "${e.version}"`);e.pattern??(e.pattern=ou(r))}else e.pattern??(e.pattern=ou());_e.init(t,e)}),Pg=R("$ZodEmail",(t,e)=>{e.pattern??(e.pattern=Gm),_e.init(t,e)}),Lg=R("$ZodURL",(t,e)=>{_e.init(t,e),t._zod.check=n=>{try{let r=n.value,o=new URL(r),i=o.href;e.hostname&&(e.hostname.lastIndex=0,e.hostname.test(o.hostname)||n.issues.push({code:"invalid_format",format:"url",note:"Invalid hostname",pattern:Ym.source,input:n.value,inst:t,continue:!e.abort})),e.protocol&&(e.protocol.lastIndex=0,e.protocol.test(o.protocol.endsWith(":")?o.protocol.slice(0,-1):o.protocol)||n.issues.push({code:"invalid_format",format:"url",note:"Invalid protocol",pattern:e.protocol.source,input:n.value,inst:t,continue:!e.abort})),!r.endsWith("/")&&i.endsWith("/")?n.value=i.slice(0,-1):n.value=i;return}catch{n.issues.push({code:"invalid_format",format:"url",input:n.value,inst:t,continue:!e.abort})}}}),zg=R("$ZodEmoji",(t,e)=>{e.pattern??(e.pattern=Bm()),_e.init(t,e)}),Dg=R("$ZodNanoID",(t,e)=>{e.pattern??(e.pattern=Um),_e.init(t,e)}),$g=R("$ZodCUID",(t,e)=>{e.pattern??(e.pattern=Pm),_e.init(t,e)}),Ug=R("$ZodCUID2",(t,e)=>{e.pattern??(e.pattern=Lm),_e.init(t,e)}),Hg=R("$ZodULID",(t,e)=>{e.pattern??(e.pattern=zm),_e.init(t,e)}),Fg=R("$ZodXID",(t,e)=>{e.pattern??(e.pattern=Dm),_e.init(t,e)}),Gg=R("$ZodKSUID",(t,e)=>{e.pattern??(e.pattern=$m),_e.init(t,e)}),Bg=R("$ZodISODateTime",(t,e)=>{e.pattern??(e.pattern=tg(e)),_e.init(t,e)}),Vg=R("$ZodISODate",(t,e)=>{e.pattern??(e.pattern=Jm),_e.init(t,e)}),Zg=R("$ZodISOTime",(t,e)=>{e.pattern??(e.pattern=eg(e)),_e.init(t,e)}),jg=R("$ZodISODuration",(t,e)=>{e.pattern??(e.pattern=Hm),_e.init(t,e)}),Wg=R("$ZodIPv4",(t,e)=>{e.pattern??(e.pattern=Vm),_e.init(t,e),t._zod.onattach.push(n=>{let r=n._zod.bag;r.format="ipv4"})}),qg=R("$ZodIPv6",(t,e)=>{e.pattern??(e.pattern=Zm),_e.init(t,e),t._zod.onattach.push(n=>{let r=n._zod.bag;r.format="ipv6"}),t._zod.check=n=>{try{new URL(`http://[${n.value}]`)}catch{n.issues.push({code:"invalid_format",format:"ipv6",input:n.value,inst:t,continue:!e.abort})}}}),Yg=R("$ZodCIDRv4",(t,e)=>{e.pattern??(e.pattern=jm),_e.init(t,e)}),Kg=R("$ZodCIDRv6",(t,e)=>{e.pattern??(e.pattern=Wm),_e.init(t,e),t._zod.check=n=>{let[r,o]=n.value.split("/");try{if(!o)throw new Error;let i=Number(o);if(`${i}`!==o)throw new Error;if(i<0||i>128)throw new Error;new URL(`http://[${r}]`)}catch{n.issues.push({code:"invalid_format",format:"cidrv6",input:n.value,inst:t,continue:!e.abort})}}});function Xg(t){if(t==="")return!0;if(t.length%4!==0)return!1;try{return atob(t),!0}catch{return!1}}var Jg=R("$ZodBase64",(t,e)=>{e.pattern??(e.pattern=qm),_e.init(t,e),t._zod.onattach.push(n=>{n._zod.bag.contentEncoding="base64"}),t._zod.check=n=>{Xg(n.value)||n.issues.push({code:"invalid_format",format:"base64",input:n.value,inst:t,continue:!e.abort})}});function DS(t){if(!iu.test(t))return!1;let e=t.replace(/[-_]/g,r=>r==="-"?"+":"/"),n=e.padEnd(Math.ceil(e.length/4)*4,"=");return Xg(n)}var Qg=R("$ZodBase64URL",(t,e)=>{e.pattern??(e.pattern=iu),_e.init(t,e),t._zod.onattach.push(n=>{n._zod.bag.contentEncoding="base64url"}),t._zod.check=n=>{DS(n.value)||n.issues.push({code:"invalid_format",format:"base64url",input:n.value,inst:t,continue:!e.abort})}}),ev=R("$ZodE164",(t,e)=>{e.pattern??(e.pattern=Km),_e.init(t,e)});function $S(t,e=null){try{let n=t.split(".");if(n.length!==3)return!1;let[r]=n;if(!r)return!1;let o=JSON.parse(atob(r));return!("typ"in o&&o?.typ!=="JWT"||!o.alg||e&&(!("alg"in o)||o.alg!==e))}catch{return!1}}var tv=R("$ZodJWT",(t,e)=>{_e.init(t,e),t._zod.check=n=>{$S(n.value,e.alg)||n.issues.push({code:"invalid_format",format:"jwt",input:n.value,inst:t,continue:!e.abort})}});var cu=R("$ZodNumber",(t,e)=>{be.init(t,e),t._zod.pattern=t._zod.bag.pattern??og,t._zod.parse=(n,r)=>{if(e.coerce)try{n.value=Number(n.value)}catch{}let o=n.value;if(typeof o=="number"&&!Number.isNaN(o)&&Number.isFinite(o))return n;let i=typeof o=="number"?Number.isNaN(o)?"NaN":Number.isFinite(o)?void 0:"Infinity":void 0;return n.issues.push({expected:"number",code:"invalid_type",input:o,inst:t,...i?{received:i}:{}}),n}}),nv=R("$ZodNumber",(t,e)=>{dg.init(t,e),cu.init(t,e)}),rv=R("$ZodBoolean",(t,e)=>{be.init(t,e),t._zod.pattern=ig,t._zod.parse=(n,r)=>{if(e.coerce)try{n.value=!!n.value}catch{}let o=n.value;return typeof o=="boolean"||n.issues.push({expected:"boolean",code:"invalid_type",input:o,inst:t}),n}});var ov=R("$ZodAny",(t,e)=>{be.init(t,e),t._zod.parse=n=>n}),iv=R("$ZodUnknown",(t,e)=>{be.init(t,e),t._zod.parse=n=>n}),sv=R("$ZodNever",(t,e)=>{be.init(t,e),t._zod.parse=(n,r)=>(n.issues.push({expected:"never",code:"invalid_type",input:n.value,inst:t}),n)});function _g(t,e,n){t.issues.length&&e.issues.push(...zt(n,t.issues)),e.value[n]=t.value}var av=R("$ZodArray",(t,e)=>{be.init(t,e),t._zod.parse=(n,r)=>{let o=n.value;if(!Array.isArray(o))return n.issues.push({expected:"array",code:"invalid_type",input:o,inst:t}),n;n.value=Array(o.length);let i=[];for(let s=0;s<o.length;s++){let a=o[s],c=e.element._zod.run({value:a,issues:[]},r);c instanceof Promise?i.push(c.then(l=>_g(l,n,s))):_g(c,n,s)}return i.length?Promise.all(i).then(()=>n):n}});function _s(t,e,n){t.issues.length&&e.issues.push(...zt(n,t.issues)),e.value[n]=t.value}function Tg(t,e,n,r){t.issues.length?r[n]===void 0?n in r?e.value[n]=void 0:e.value[n]=t.value:e.issues.push(...zt(n,t.issues)):t.value===void 0?n in r&&(e.value[n]=void 0):e.value[n]=t.value}var lv=R("$ZodObject",(t,e)=>{be.init(t,e);let n=To(()=>{let h=Object.keys(e.shape);for(let f of h)if(!(e.shape[f]instanceof be))throw new Error(`Invalid element at key "${f}": expected a Zod schema`);let m=Kd(e.shape);return{shape:e.shape,keys:h,keySet:new Set(h),numKeys:h.length,optionalKeys:new Set(m)}});ue(t._zod,"propValues",()=>{let h=e.shape,m={};for(let f in h){let u=h[f]._zod;if(u.values){m[f]??(m[f]=new Set);for(let v of u.values)m[f].add(v)}}return m});let r=h=>{let m=new Es(["shape","payload","ctx"]),f=n.value,u=w=>{let D=Cn(w);return`shape[${D}]._zod.run({ value: input[${D}], issues: [] }, ctx)`};m.write("const input = payload.value;");let v=Object.create(null),E=0;for(let w of f.keys)v[w]=`key_${E++}`;m.write("const newResult = {}");for(let w of f.keys)if(f.optionalKeys.has(w)){let D=v[w];m.write(`const ${D} = ${u(w)};`);let S=Cn(w);m.write(`
        if (${D}.issues.length) {
          if (input[${S}] === undefined) {
            if (${S} in input) {
              newResult[${S}] = undefined;
            }
          } else {
            payload.issues = payload.issues.concat(
              ${D}.issues.map((iss) => ({
                ...iss,
                path: iss.path ? [${S}, ...iss.path] : [${S}],
              }))
            );
          }
        } else if (${D}.value === undefined) {
          if (${S} in input) newResult[${S}] = undefined;
        } else {
          newResult[${S}] = ${D}.value;
        }
        `)}else{let D=v[w];m.write(`const ${D} = ${u(w)};`),m.write(`
          if (${D}.issues.length) payload.issues = payload.issues.concat(${D}.issues.map(iss => ({
            ...iss,
            path: iss.path ? [${Cn(w)}, ...iss.path] : [${Cn(w)}]
          })));`),m.write(`newResult[${Cn(w)}] = ${D}.value`)}m.write("payload.value = newResult;"),m.write("return payload;");let T=m.compile();return(w,D)=>T(h,w,D)},o,i=Tr,s=!gs.jitless,c=s&&qd.value,l=e.catchall,d;t._zod.parse=(h,m)=>{d??(d=n.value);let f=h.value;if(!i(f))return h.issues.push({expected:"object",code:"invalid_type",input:f,inst:t}),h;let u=[];if(s&&c&&m?.async===!1&&m.jitless!==!0)o||(o=r(e.shape)),h=o(h,m);else{h.value={};let D=d.shape;for(let S of d.keys){let g=D[S],x=g._zod.run({value:f[S],issues:[]},m),b=g._zod.optin==="optional"&&g._zod.optout==="optional";x instanceof Promise?u.push(x.then(k=>b?Tg(k,h,S,f):_s(k,h,S))):b?Tg(x,h,S,f):_s(x,h,S)}}if(!l)return u.length?Promise.all(u).then(()=>h):h;let v=[],E=d.keySet,T=l._zod,w=T.def.type;for(let D of Object.keys(f)){if(E.has(D))continue;if(w==="never"){v.push(D);continue}let S=T.run({value:f[D],issues:[]},m);S instanceof Promise?u.push(S.then(g=>_s(g,h,D))):_s(S,h,D)}return v.length&&h.issues.push({code:"unrecognized_keys",keys:v,input:f,inst:t}),u.length?Promise.all(u).then(()=>h):h}});function Sg(t,e,n,r){for(let o of t)if(o.issues.length===0)return e.value=o.value,e;return e.issues.push({code:"invalid_union",input:e.value,inst:n,errors:t.map(o=>o.issues.map(i=>yt(i,r,We())))}),e}var du=R("$ZodUnion",(t,e)=>{be.init(t,e),ue(t._zod,"optin",()=>e.options.some(n=>n._zod.optin==="optional")?"optional":void 0),ue(t._zod,"optout",()=>e.options.some(n=>n._zod.optout==="optional")?"optional":void 0),ue(t._zod,"values",()=>{if(e.options.every(n=>n._zod.values))return new Set(e.options.flatMap(n=>Array.from(n._zod.values)))}),ue(t._zod,"pattern",()=>{if(e.options.every(n=>n._zod.pattern)){let n=e.options.map(r=>r._zod.pattern);return new RegExp(`^(${n.map(r=>ko(r.source)).join("|")})$`)}}),t._zod.parse=(n,r)=>{let o=!1,i=[];for(let s of e.options){let a=s._zod.run({value:n.value,issues:[]},r);if(a instanceof Promise)i.push(a),o=!0;else{if(a.issues.length===0)return a;i.push(a)}}return o?Promise.all(i).then(s=>Sg(s,n,t,r)):Sg(i,n,t,r)}}),cv=R("$ZodDiscriminatedUnion",(t,e)=>{du.init(t,e);let n=t._zod.parse;ue(t._zod,"propValues",()=>{let o={};for(let i of e.options){let s=i._zod.propValues;if(!s||Object.keys(s).length===0)throw new Error(`Invalid discriminated union option at index "${e.options.indexOf(i)}"`);for(let[a,c]of Object.entries(s)){o[a]||(o[a]=new Set);for(let l of c)o[a].add(l)}}return o});let r=To(()=>{let o=e.options,i=new Map;for(let s of o){let a=s._zod.propValues[e.discriminator];if(!a||a.size===0)throw new Error(`Invalid discriminated union option at index "${e.options.indexOf(s)}"`);for(let c of a){if(i.has(c))throw new Error(`Duplicate discriminator value "${String(c)}"`);i.set(c,s)}}return i});t._zod.parse=(o,i)=>{let s=o.value;if(!Tr(s))return o.issues.push({code:"invalid_type",expected:"object",input:s,inst:t}),o;let a=r.value.get(s?.[e.discriminator]);return a?a._zod.run(o,i):e.unionFallback?n(o,i):(o.issues.push({code:"invalid_union",errors:[],note:"No matching discriminator",input:s,path:[e.discriminator],inst:t}),o)}}),dv=R("$ZodIntersection",(t,e)=>{be.init(t,e),t._zod.parse=(n,r)=>{let o=n.value,i=e.left._zod.run({value:o,issues:[]},r),s=e.right._zod.run({value:o,issues:[]},r);return i instanceof Promise||s instanceof Promise?Promise.all([i,s]).then(([c,l])=>kg(n,c,l)):kg(n,i,s)}});function lu(t,e){if(t===e)return{valid:!0,data:t};if(t instanceof Date&&e instanceof Date&&+t==+e)return{valid:!0,data:t};if(Sr(t)&&Sr(e)){let n=Object.keys(e),r=Object.keys(t).filter(i=>n.indexOf(i)!==-1),o={...t,...e};for(let i of r){let s=lu(t[i],e[i]);if(!s.valid)return{valid:!1,mergeErrorPath:[i,...s.mergeErrorPath]};o[i]=s.data}return{valid:!0,data:o}}if(Array.isArray(t)&&Array.isArray(e)){if(t.length!==e.length)return{valid:!1,mergeErrorPath:[]};let n=[];for(let r=0;r<t.length;r++){let o=t[r],i=e[r],s=lu(o,i);if(!s.valid)return{valid:!1,mergeErrorPath:[r,...s.mergeErrorPath]};n.push(s.data)}return{valid:!0,data:n}}return{valid:!1,mergeErrorPath:[]}}function kg(t,e,n){if(e.issues.length&&t.issues.push(...e.issues),n.issues.length&&t.issues.push(...n.issues),Nn(t))return t;let r=lu(e.value,n.value);if(!r.valid)throw new Error(`Unmergable intersection. Error path: ${JSON.stringify(r.mergeErrorPath)}`);return t.value=r.data,t}var uv=R("$ZodRecord",(t,e)=>{be.init(t,e),t._zod.parse=(n,r)=>{let o=n.value;if(!Sr(o))return n.issues.push({expected:"record",code:"invalid_type",input:o,inst:t}),n;let i=[];if(e.keyType._zod.values){let s=e.keyType._zod.values;n.value={};for(let c of s)if(typeof c=="string"||typeof c=="number"||typeof c=="symbol"){let l=e.valueType._zod.run({value:o[c],issues:[]},r);l instanceof Promise?i.push(l.then(d=>{d.issues.length&&n.issues.push(...zt(c,d.issues)),n.value[c]=d.value})):(l.issues.length&&n.issues.push(...zt(c,l.issues)),n.value[c]=l.value)}let a;for(let c in o)s.has(c)||(a=a??[],a.push(c));a&&a.length>0&&n.issues.push({code:"unrecognized_keys",input:o,inst:t,keys:a})}else{n.value={};for(let s of Reflect.ownKeys(o)){if(s==="__proto__")continue;let a=e.keyType._zod.run({value:s,issues:[]},r);if(a instanceof Promise)throw new Error("Async schemas not supported in object keys currently");if(a.issues.length){n.issues.push({origin:"record",code:"invalid_key",issues:a.issues.map(l=>yt(l,r,We())),input:s,path:[s],inst:t}),n.value[a.value]=a.value;continue}let c=e.valueType._zod.run({value:o[s],issues:[]},r);c instanceof Promise?i.push(c.then(l=>{l.issues.length&&n.issues.push(...zt(s,l.issues)),n.value[a.value]=l.value})):(c.issues.length&&n.issues.push(...zt(s,c.issues)),n.value[a.value]=c.value)}}return i.length?Promise.all(i).then(()=>n):n}});var hv=R("$ZodEnum",(t,e)=>{be.init(t,e);let n=Vd(e.entries);t._zod.values=new Set(n),t._zod.pattern=new RegExp(`^(${n.filter(r=>Yd.has(typeof r)).map(r=>typeof r=="string"?nn(r):r.toString()).join("|")})$`),t._zod.parse=(r,o)=>{let i=r.value;return t._zod.values.has(i)||r.issues.push({code:"invalid_value",values:n,input:i,inst:t}),r}}),pv=R("$ZodLiteral",(t,e)=>{be.init(t,e),t._zod.values=new Set(e.values),t._zod.pattern=new RegExp(`^(${e.values.map(n=>typeof n=="string"?nn(n):n?n.toString():String(n)).join("|")})$`),t._zod.parse=(n,r)=>{let o=n.value;return t._zod.values.has(o)||n.issues.push({code:"invalid_value",values:e.values,input:o,inst:t}),n}});var fv=R("$ZodTransform",(t,e)=>{be.init(t,e),t._zod.parse=(n,r)=>{let o=e.transform(n.value,n);if(r.async)return(o instanceof Promise?o:Promise.resolve(o)).then(s=>(n.value=s,n));if(o instanceof Promise)throw new Wt;return n.value=o,n}}),mv=R("$ZodOptional",(t,e)=>{be.init(t,e),t._zod.optin="optional",t._zod.optout="optional",ue(t._zod,"values",()=>e.innerType._zod.values?new Set([...e.innerType._zod.values,void 0]):void 0),ue(t._zod,"pattern",()=>{let n=e.innerType._zod.pattern;return n?new RegExp(`^(${ko(n.source)})?$`):void 0}),t._zod.parse=(n,r)=>e.innerType._zod.optin==="optional"?e.innerType._zod.run(n,r):n.value===void 0?n:e.innerType._zod.run(n,r)}),gv=R("$ZodNullable",(t,e)=>{be.init(t,e),ue(t._zod,"optin",()=>e.innerType._zod.optin),ue(t._zod,"optout",()=>e.innerType._zod.optout),ue(t._zod,"pattern",()=>{let n=e.innerType._zod.pattern;return n?new RegExp(`^(${ko(n.source)}|null)$`):void 0}),ue(t._zod,"values",()=>e.innerType._zod.values?new Set([...e.innerType._zod.values,null]):void 0),t._zod.parse=(n,r)=>n.value===null?n:e.innerType._zod.run(n,r)}),vv=R("$ZodDefault",(t,e)=>{be.init(t,e),t._zod.optin="optional",ue(t._zod,"values",()=>e.innerType._zod.values),t._zod.parse=(n,r)=>{if(n.value===void 0)return n.value=e.defaultValue,n;let o=e.innerType._zod.run(n,r);return o instanceof Promise?o.then(i=>Ag(i,e)):Ag(o,e)}});function Ag(t,e){return t.value===void 0&&(t.value=e.defaultValue),t}var bv=R("$ZodPrefault",(t,e)=>{be.init(t,e),t._zod.optin="optional",ue(t._zod,"values",()=>e.innerType._zod.values),t._zod.parse=(n,r)=>(n.value===void 0&&(n.value=e.defaultValue),e.innerType._zod.run(n,r))}),yv=R("$ZodNonOptional",(t,e)=>{be.init(t,e),ue(t._zod,"values",()=>{let n=e.innerType._zod.values;return n?new Set([...n].filter(r=>r!==void 0)):void 0}),t._zod.parse=(n,r)=>{let o=e.innerType._zod.run(n,r);return o instanceof Promise?o.then(i=>Rg(i,t)):Rg(o,t)}});function Rg(t,e){return!t.issues.length&&t.value===void 0&&t.issues.push({code:"invalid_type",expected:"nonoptional",input:t.value,inst:e}),t}var wv=R("$ZodCatch",(t,e)=>{be.init(t,e),t._zod.optin="optional",ue(t._zod,"optout",()=>e.innerType._zod.optout),ue(t._zod,"values",()=>e.innerType._zod.values),t._zod.parse=(n,r)=>{let o=e.innerType._zod.run(n,r);return o instanceof Promise?o.then(i=>(n.value=i.value,i.issues.length&&(n.value=e.catchValue({...n,error:{issues:i.issues.map(s=>yt(s,r,We()))},input:n.value}),n.issues=[]),n)):(n.value=o.value,o.issues.length&&(n.value=e.catchValue({...n,error:{issues:o.issues.map(i=>yt(i,r,We()))},input:n.value}),n.issues=[]),n)}});var xv=R("$ZodPipe",(t,e)=>{be.init(t,e),ue(t._zod,"values",()=>e.in._zod.values),ue(t._zod,"optin",()=>e.in._zod.optin),ue(t._zod,"optout",()=>e.out._zod.optout),t._zod.parse=(n,r)=>{let o=e.in._zod.run(n,r);return o instanceof Promise?o.then(i=>Ig(i,e,r)):Ig(o,e,r)}});function Ig(t,e,n){return Nn(t)?t:e.out._zod.run({value:t.value,issues:t.issues},n)}var Ev=R("$ZodReadonly",(t,e)=>{be.init(t,e),ue(t._zod,"propValues",()=>e.innerType._zod.propValues),ue(t._zod,"values",()=>e.innerType._zod.values),ue(t._zod,"optin",()=>e.innerType._zod.optin),ue(t._zod,"optout",()=>e.innerType._zod.optout),t._zod.parse=(n,r)=>{let o=e.innerType._zod.run(n,r);return o instanceof Promise?o.then(Cg):Cg(o)}});function Cg(t){return t.value=Object.freeze(t.value),t}var _v=R("$ZodLazy",(t,e)=>{be.init(t,e),ue(t._zod,"innerType",()=>e.getter()),ue(t._zod,"pattern",()=>t._zod.innerType._zod.pattern),ue(t._zod,"propValues",()=>t._zod.innerType._zod.propValues),ue(t._zod,"optin",()=>t._zod.innerType._zod.optin),ue(t._zod,"optout",()=>t._zod.innerType._zod.optout),t._zod.parse=(n,r)=>t._zod.innerType._zod.run(n,r)}),Tv=R("$ZodCustom",(t,e)=>{Je.init(t,e),be.init(t,e),t._zod.parse=(n,r)=>n,t._zod.check=n=>{let r=n.value,o=e.fn(r);if(o instanceof Promise)return o.then(i=>Ng(i,n,r,t));Ng(o,n,r,t)}});function Ng(t,e,n,r){if(!t){let o={code:"custom",input:n,inst:r,path:[...r._zod.def.path??[]],continue:!r._zod.def.abort};r._zod.def.params&&(o.params=r._zod.def.params),e.issues.push(Jd(o))}}var US=t=>{let e=typeof t;switch(e){case"number":return Number.isNaN(t)?"NaN":"number";case"object":{if(Array.isArray(t))return"array";if(t===null)return"null";if(Object.getPrototypeOf(t)!==Object.prototype&&t.constructor)return t.constructor.name}}return e},HS=()=>{let t={string:{unit:"characters",verb:"to have"},file:{unit:"bytes",verb:"to have"},array:{unit:"items",verb:"to have"},set:{unit:"items",verb:"to have"}};function e(r){return t[r]??null}let n={regex:"input",email:"email address",url:"URL",emoji:"emoji",uuid:"UUID",uuidv4:"UUIDv4",uuidv6:"UUIDv6",nanoid:"nanoid",guid:"GUID",cuid:"cuid",cuid2:"cuid2",ulid:"ULID",xid:"XID",ksuid:"KSUID",datetime:"ISO datetime",date:"ISO date",time:"ISO time",duration:"ISO duration",ipv4:"IPv4 address",ipv6:"IPv6 address",cidrv4:"IPv4 range",cidrv6:"IPv6 range",base64:"base64-encoded string",base64url:"base64url-encoded string",json_string:"JSON string",e164:"E.164 number",jwt:"JWT",template_literal:"input"};return r=>{switch(r.code){case"invalid_type":return`Invalid input: expected ${r.expected}, received ${US(r.input)}`;case"invalid_value":return r.values.length===1?`Invalid input: expected ${ys(r.values[0])}`:`Invalid option: expected one of ${vs(r.values,"|")}`;case"too_big":{let o=r.inclusive?"<=":"<",i=e(r.origin);return i?`Too big: expected ${r.origin??"value"} to have ${o}${r.maximum.toString()} ${i.unit??"elements"}`:`Too big: expected ${r.origin??"value"} to be ${o}${r.maximum.toString()}`}case"too_small":{let o=r.inclusive?">=":">",i=e(r.origin);return i?`Too small: expected ${r.origin} to have ${o}${r.minimum.toString()} ${i.unit}`:`Too small: expected ${r.origin} to be ${o}${r.minimum.toString()}`}case"invalid_format":{let o=r;return o.format==="starts_with"?`Invalid string: must start with "${o.prefix}"`:o.format==="ends_with"?`Invalid string: must end with "${o.suffix}"`:o.format==="includes"?`Invalid string: must include "${o.includes}"`:o.format==="regex"?`Invalid string: must match pattern ${o.pattern}`:`Invalid ${n[o.format]??r.format}`}case"not_multiple_of":return`Invalid number: must be a multiple of ${r.divisor}`;case"unrecognized_keys":return`Unrecognized key${r.keys.length>1?"s":""}: ${vs(r.keys,", ")}`;case"invalid_key":return`Invalid key in ${r.origin}`;case"invalid_union":return"Invalid input";case"invalid_element":return`Invalid value in ${r.origin}`;default:return"Invalid input"}}};function kr(){return{localeError:HS()}}var uu=class{constructor(){this._map=new Map,this._idmap=new Map}add(e,...n){let r=n[0];if(this._map.set(e,r),r&&typeof r=="object"&&"id"in r){if(this._idmap.has(r.id))throw new Error(`ID ${r.id} already exists in the registry`);this._idmap.set(r.id,e)}return this}clear(){return this._map=new Map,this._idmap=new Map,this}remove(e){let n=this._map.get(e);return n&&typeof n=="object"&&"id"in n&&this._idmap.delete(n.id),this._map.delete(e),this}get(e){let n=e._zod.parent;if(n){let r={...this.get(n)??{}};return delete r.id,{...r,...this._map.get(e)}}return this._map.get(e)}has(e){return this._map.has(e)}};function Sv(){return new uu}var Ar=Sv();function kv(t,e){return new t({type:"string",...j(e)})}function Av(t,e){return new t({type:"string",format:"email",check:"string_format",abort:!1,...j(e)})}function hu(t,e){return new t({type:"string",format:"guid",check:"string_format",abort:!1,...j(e)})}function Rv(t,e){return new t({type:"string",format:"uuid",check:"string_format",abort:!1,...j(e)})}function Iv(t,e){return new t({type:"string",format:"uuid",check:"string_format",abort:!1,version:"v4",...j(e)})}function Cv(t,e){return new t({type:"string",format:"uuid",check:"string_format",abort:!1,version:"v6",...j(e)})}function Nv(t,e){return new t({type:"string",format:"uuid",check:"string_format",abort:!1,version:"v7",...j(e)})}function Ov(t,e){return new t({type:"string",format:"url",check:"string_format",abort:!1,...j(e)})}function Mv(t,e){return new t({type:"string",format:"emoji",check:"string_format",abort:!1,...j(e)})}function Pv(t,e){return new t({type:"string",format:"nanoid",check:"string_format",abort:!1,...j(e)})}function Lv(t,e){return new t({type:"string",format:"cuid",check:"string_format",abort:!1,...j(e)})}function zv(t,e){return new t({type:"string",format:"cuid2",check:"string_format",abort:!1,...j(e)})}function Dv(t,e){return new t({type:"string",format:"ulid",check:"string_format",abort:!1,...j(e)})}function $v(t,e){return new t({type:"string",format:"xid",check:"string_format",abort:!1,...j(e)})}function Uv(t,e){return new t({type:"string",format:"ksuid",check:"string_format",abort:!1,...j(e)})}function Hv(t,e){return new t({type:"string",format:"ipv4",check:"string_format",abort:!1,...j(e)})}function Fv(t,e){return new t({type:"string",format:"ipv6",check:"string_format",abort:!1,...j(e)})}function Gv(t,e){return new t({type:"string",format:"cidrv4",check:"string_format",abort:!1,...j(e)})}function Bv(t,e){return new t({type:"string",format:"cidrv6",check:"string_format",abort:!1,...j(e)})}function Vv(t,e){return new t({type:"string",format:"base64",check:"string_format",abort:!1,...j(e)})}function Zv(t,e){return new t({type:"string",format:"base64url",check:"string_format",abort:!1,...j(e)})}function jv(t,e){return new t({type:"string",format:"e164",check:"string_format",abort:!1,...j(e)})}function Wv(t,e){return new t({type:"string",format:"jwt",check:"string_format",abort:!1,...j(e)})}function qv(t,e){return new t({type:"string",format:"datetime",check:"string_format",offset:!1,local:!1,precision:null,...j(e)})}function Yv(t,e){return new t({type:"string",format:"date",check:"string_format",...j(e)})}function Kv(t,e){return new t({type:"string",format:"time",check:"string_format",precision:null,...j(e)})}function Xv(t,e){return new t({type:"string",format:"duration",check:"string_format",...j(e)})}function Jv(t,e){return new t({type:"number",check:"number_format",abort:!1,format:"safeint",...j(e)})}function Qv(t,e){return new t({type:"boolean",...j(e)})}function eb(t){return new t({type:"any"})}function tb(t){return new t({type:"unknown"})}function nb(t,e){return new t({type:"never",...j(e)})}function Ss(t,e){return new su({check:"less_than",...j(e),value:t,inclusive:!1})}function Io(t,e){return new su({check:"less_than",...j(e),value:t,inclusive:!0})}function ks(t,e){return new au({check:"greater_than",...j(e),value:t,inclusive:!1})}function Co(t,e){return new au({check:"greater_than",...j(e),value:t,inclusive:!0})}function As(t,e){return new cg({check:"multiple_of",...j(e),value:t})}function Rs(t,e){return new ug({check:"max_length",...j(e),maximum:t})}function Rr(t,e){return new hg({check:"min_length",...j(e),minimum:t})}function Is(t,e){return new pg({check:"length_equals",...j(e),length:t})}function pu(t,e){return new fg({check:"string_format",format:"regex",...j(e),pattern:t})}function fu(t){return new mg({check:"string_format",format:"lowercase",...j(t)})}function mu(t){return new gg({check:"string_format",format:"uppercase",...j(t)})}function gu(t,e){return new vg({check:"string_format",format:"includes",...j(e),includes:t})}function vu(t,e){return new bg({check:"string_format",format:"starts_with",...j(e),prefix:t})}function bu(t,e){return new yg({check:"string_format",format:"ends_with",...j(e),suffix:t})}function On(t){return new wg({check:"overwrite",tx:t})}function yu(t){return On(e=>e.normalize(t))}function wu(){return On(t=>t.trim())}function xu(){return On(t=>t.toLowerCase())}function Eu(){return On(t=>t.toUpperCase())}function rb(t,e,n){return new t({type:"array",element:e,...j(n)})}function ob(t,e,n){let r=j(n);return r.abort??(r.abort=!0),new t({type:"custom",check:"custom",fn:e,...r})}function ib(t,e,n){return new t({type:"custom",check:"custom",fn:e,...j(n)})}var WS=R("ZodISODateTime",(t,e)=>{Bg.init(t,e),Ae.init(t,e)});function sb(t){return qv(WS,t)}var qS=R("ZodISODate",(t,e)=>{Vg.init(t,e),Ae.init(t,e)});function ab(t){return Yv(qS,t)}var YS=R("ZodISOTime",(t,e)=>{Zg.init(t,e),Ae.init(t,e)});function lb(t){return Kv(YS,t)}var KS=R("ZodISODuration",(t,e)=>{jg.init(t,e),Ae.init(t,e)});function cb(t){return Xv(KS,t)}var ub=(t,e)=>{ws.init(t,e),t.name="ZodError",Object.defineProperties(t,{format:{value:n=>tu(t,n)},flatten:{value:n=>eu(t,n)},addIssue:{value:n=>t.issues.push(n)},addIssues:{value:n=>t.issues.push(...n)},isEmpty:{get(){return t.issues.length===0}}})},sD=R("ZodError",ub),Oo=R("ZodError",ub,{Parent:Error});var hb=Cm(Oo),pb=Nm(Oo),fb=nu(Oo),mb=ru(Oo);var Re=R("ZodType",(t,e)=>(be.init(t,e),t.def=e,Object.defineProperty(t,"_def",{value:e}),t.check=(...n)=>t.clone({...e,checks:[...e.checks??[],...n.map(r=>typeof r=="function"?{_zod:{check:r,def:{check:"custom"},onattach:[]}}:r)]}),t.clone=(n,r)=>bt(t,n,r),t.brand=()=>t,t.register=((n,r)=>(n.add(t,r),t)),t.parse=(n,r)=>hb(t,n,r,{callee:t.parse}),t.safeParse=(n,r)=>fb(t,n,r),t.parseAsync=async(n,r)=>pb(t,n,r,{callee:t.parseAsync}),t.safeParseAsync=async(n,r)=>mb(t,n,r),t.spa=t.safeParseAsync,t.refine=(n,r)=>t.check(z0(n,r)),t.superRefine=n=>t.check(D0(n)),t.overwrite=n=>t.check(On(n)),t.optional=()=>vb(t),t.nullable=()=>bb(t),t.nullish=()=>vb(bb(t)),t.nonoptional=n=>O0(t,n),t.array=()=>Le(t),t.or=n=>Mo([t,n]),t.and=n=>k0(t,n),t.transform=n=>yb(t,R0(n)),t.default=n=>I0(t,n),t.prefault=n=>N0(t,n),t.catch=n=>M0(t,n),t.pipe=n=>yb(t,n),t.readonly=()=>P0(t),t.describe=n=>{let r=t.clone();return Ar.add(r,{description:n}),r},Object.defineProperty(t,"description",{get(){return Ar.get(t)?.description},configurable:!0}),t.meta=(...n)=>{if(n.length===0)return Ar.get(t);let r=t.clone();return Ar.add(r,n[0]),r},t.isOptional=()=>t.safeParse(void 0).success,t.isNullable=()=>t.safeParse(null).success,t)),wb=R("_ZodString",(t,e)=>{Ts.init(t,e),Re.init(t,e);let n=t._zod.bag;t.format=n.format??null,t.minLength=n.minimum??null,t.maxLength=n.maximum??null,t.regex=(...r)=>t.check(pu(...r)),t.includes=(...r)=>t.check(gu(...r)),t.startsWith=(...r)=>t.check(vu(...r)),t.endsWith=(...r)=>t.check(bu(...r)),t.min=(...r)=>t.check(Rr(...r)),t.max=(...r)=>t.check(Rs(...r)),t.length=(...r)=>t.check(Is(...r)),t.nonempty=(...r)=>t.check(Rr(1,...r)),t.lowercase=r=>t.check(fu(r)),t.uppercase=r=>t.check(mu(r)),t.trim=()=>t.check(wu()),t.normalize=(...r)=>t.check(yu(...r)),t.toLowerCase=()=>t.check(xu()),t.toUpperCase=()=>t.check(Eu())}),QS=R("ZodString",(t,e)=>{Ts.init(t,e),wb.init(t,e),t.email=n=>t.check(Av(e0,n)),t.url=n=>t.check(Ov(t0,n)),t.jwt=n=>t.check(Wv(g0,n)),t.emoji=n=>t.check(Mv(n0,n)),t.guid=n=>t.check(hu(gb,n)),t.uuid=n=>t.check(Rv(Cs,n)),t.uuidv4=n=>t.check(Iv(Cs,n)),t.uuidv6=n=>t.check(Cv(Cs,n)),t.uuidv7=n=>t.check(Nv(Cs,n)),t.nanoid=n=>t.check(Pv(r0,n)),t.guid=n=>t.check(hu(gb,n)),t.cuid=n=>t.check(Lv(o0,n)),t.cuid2=n=>t.check(zv(i0,n)),t.ulid=n=>t.check(Dv(s0,n)),t.base64=n=>t.check(Vv(p0,n)),t.base64url=n=>t.check(Zv(f0,n)),t.xid=n=>t.check($v(a0,n)),t.ksuid=n=>t.check(Uv(l0,n)),t.ipv4=n=>t.check(Hv(c0,n)),t.ipv6=n=>t.check(Fv(d0,n)),t.cidrv4=n=>t.check(Gv(u0,n)),t.cidrv6=n=>t.check(Bv(h0,n)),t.e164=n=>t.check(jv(m0,n)),t.datetime=n=>t.check(sb(n)),t.date=n=>t.check(ab(n)),t.time=n=>t.check(lb(n)),t.duration=n=>t.check(cb(n))});function A(t){return kv(QS,t)}var Ae=R("ZodStringFormat",(t,e)=>{_e.init(t,e),wb.init(t,e)}),e0=R("ZodEmail",(t,e)=>{Pg.init(t,e),Ae.init(t,e)});var gb=R("ZodGUID",(t,e)=>{Og.init(t,e),Ae.init(t,e)});var Cs=R("ZodUUID",(t,e)=>{Mg.init(t,e),Ae.init(t,e)});var t0=R("ZodURL",(t,e)=>{Lg.init(t,e),Ae.init(t,e)});var n0=R("ZodEmoji",(t,e)=>{zg.init(t,e),Ae.init(t,e)});var r0=R("ZodNanoID",(t,e)=>{Dg.init(t,e),Ae.init(t,e)});var o0=R("ZodCUID",(t,e)=>{$g.init(t,e),Ae.init(t,e)});var i0=R("ZodCUID2",(t,e)=>{Ug.init(t,e),Ae.init(t,e)});var s0=R("ZodULID",(t,e)=>{Hg.init(t,e),Ae.init(t,e)});var a0=R("ZodXID",(t,e)=>{Fg.init(t,e),Ae.init(t,e)});var l0=R("ZodKSUID",(t,e)=>{Gg.init(t,e),Ae.init(t,e)});var c0=R("ZodIPv4",(t,e)=>{Wg.init(t,e),Ae.init(t,e)});var d0=R("ZodIPv6",(t,e)=>{qg.init(t,e),Ae.init(t,e)});var u0=R("ZodCIDRv4",(t,e)=>{Yg.init(t,e),Ae.init(t,e)});var h0=R("ZodCIDRv6",(t,e)=>{Kg.init(t,e),Ae.init(t,e)});var p0=R("ZodBase64",(t,e)=>{Jg.init(t,e),Ae.init(t,e)});var f0=R("ZodBase64URL",(t,e)=>{Qg.init(t,e),Ae.init(t,e)});var m0=R("ZodE164",(t,e)=>{ev.init(t,e),Ae.init(t,e)});var g0=R("ZodJWT",(t,e)=>{tv.init(t,e),Ae.init(t,e)});var v0=R("ZodNumber",(t,e)=>{cu.init(t,e),Re.init(t,e),t.gt=(r,o)=>t.check(ks(r,o)),t.gte=(r,o)=>t.check(Co(r,o)),t.min=(r,o)=>t.check(Co(r,o)),t.lt=(r,o)=>t.check(Ss(r,o)),t.lte=(r,o)=>t.check(Io(r,o)),t.max=(r,o)=>t.check(Io(r,o)),t.int=r=>t.check(X(r)),t.safe=r=>t.check(X(r)),t.positive=r=>t.check(ks(0,r)),t.nonnegative=r=>t.check(Co(0,r)),t.negative=r=>t.check(Ss(0,r)),t.nonpositive=r=>t.check(Io(0,r)),t.multipleOf=(r,o)=>t.check(As(r,o)),t.step=(r,o)=>t.check(As(r,o)),t.finite=()=>t;let n=t._zod.bag;t.minValue=Math.max(n.minimum??Number.NEGATIVE_INFINITY,n.exclusiveMinimum??Number.NEGATIVE_INFINITY)??null,t.maxValue=Math.min(n.maximum??Number.POSITIVE_INFINITY,n.exclusiveMaximum??Number.POSITIVE_INFINITY)??null,t.isInt=(n.format??"").includes("int")||Number.isSafeInteger(n.multipleOf??.5),t.isFinite=!0,t.format=n.format??null});var b0=R("ZodNumberFormat",(t,e)=>{nv.init(t,e),v0.init(t,e)});function X(t){return Jv(b0,t)}var y0=R("ZodBoolean",(t,e)=>{rv.init(t,e),Re.init(t,e)});function oe(t){return Qv(y0,t)}var w0=R("ZodAny",(t,e)=>{ov.init(t,e),Re.init(t,e)});function W(){return eb(w0)}var x0=R("ZodUnknown",(t,e)=>{iv.init(t,e),Re.init(t,e)});function _u(){return tb(x0)}var E0=R("ZodNever",(t,e)=>{sv.init(t,e),Re.init(t,e)});function _0(t){return nb(E0,t)}var Ns=R("ZodArray",(t,e)=>{av.init(t,e),Re.init(t,e),t.element=e.element,t.min=(n,r)=>t.check(Rr(n,r)),t.nonempty=n=>t.check(Rr(1,n)),t.max=(n,r)=>t.check(Rs(n,r)),t.length=(n,r)=>t.check(Is(n,r)),t.unwrap=()=>t.element});function Le(t,e){return rb(Ns,t,e)}var Ir=R("ZodObject",(t,e)=>{lv.init(t,e),Re.init(t,e),fe.defineLazy(t,"shape",()=>e.shape),t.keyof=()=>Mn(Object.keys(t._zod.def.shape)),t.catchall=n=>t.clone({...t._zod.def,catchall:n}),t.passthrough=()=>t.clone({...t._zod.def,catchall:_u()}),t.loose=()=>t.clone({...t._zod.def,catchall:_u()}),t.strict=()=>t.clone({...t._zod.def,catchall:_0()}),t.strip=()=>t.clone({...t._zod.def,catchall:void 0}),t.extend=n=>fe.extend(t,n),t.merge=n=>fe.merge(t,n),t.pick=n=>fe.pick(t,n),t.omit=n=>fe.omit(t,n),t.partial=(...n)=>fe.partial(Ms,t,n[0]),t.required=(...n)=>fe.required(Eb,t,n[0])});function U(t,e){return new Ir({type:"object",get shape(){return fe.assignProp(this,"shape",{...t}),this.shape},catchall:_u(),...fe.normalizeParams(e)})}var Os=R("ZodUnion",(t,e)=>{du.init(t,e),Re.init(t,e),t.options=e.options});function Mo(t,e){return new Os({type:"union",options:t,...fe.normalizeParams(e)})}var T0=R("ZodDiscriminatedUnion",(t,e)=>{Os.init(t,e),cv.init(t,e)});function rn(t,e,n){return new T0({type:"union",options:e,discriminator:t,...fe.normalizeParams(n)})}var S0=R("ZodIntersection",(t,e)=>{dv.init(t,e),Re.init(t,e)});function k0(t,e){return new S0({type:"intersection",left:t,right:e})}var xb=R("ZodRecord",(t,e)=>{uv.init(t,e),Re.init(t,e),t.keyType=e.keyType,t.valueType=e.valueType});var Tu=R("ZodEnum",(t,e)=>{hv.init(t,e),Re.init(t,e),t.enum=e.entries,t.options=Object.values(e.entries);let n=new Set(Object.keys(e.entries));t.extract=(r,o)=>{let i={};for(let s of r)if(n.has(s))i[s]=e.entries[s];else throw new Error(`Key ${s} not found in enum`);return new Tu({...e,checks:[],...fe.normalizeParams(o),entries:i})},t.exclude=(r,o)=>{let i={...e.entries};for(let s of r)if(n.has(s))delete i[s];else throw new Error(`Key ${s} not found in enum`);return new Tu({...e,checks:[],...fe.normalizeParams(o),entries:i})}});function Mn(t,e){let n=Array.isArray(t)?Object.fromEntries(t.map(r=>[r,r])):t;return new Tu({type:"enum",entries:n,...fe.normalizeParams(e)})}var Su=R("ZodLiteral",(t,e)=>{pv.init(t,e),Re.init(t,e),t.values=new Set(e.values),Object.defineProperty(t,"value",{get(){if(e.values.length>1)throw new Error("This schema contains multiple valid literal values. Use `.values` instead.");return e.values[0]}})});function G(t,e){return new Su({type:"literal",values:Array.isArray(t)?t:[t],...fe.normalizeParams(e)})}var A0=R("ZodTransform",(t,e)=>{fv.init(t,e),Re.init(t,e),t._zod.parse=(n,r)=>{n.addIssue=i=>{if(typeof i=="string")n.issues.push(fe.issue(i,n.value,e));else{let s=i;s.fatal&&(s.continue=!1),s.code??(s.code="custom"),s.input??(s.input=n.value),s.inst??(s.inst=t),s.continue??(s.continue=!0),n.issues.push(fe.issue(s))}};let o=e.transform(n.value,n);return o instanceof Promise?o.then(i=>(n.value=i,n)):(n.value=o,n)}});function R0(t){return new A0({type:"transform",transform:t})}var Ms=R("ZodOptional",(t,e)=>{mv.init(t,e),Re.init(t,e),t.unwrap=()=>t._zod.def.innerType});function vb(t){return new Ms({type:"optional",innerType:t})}var ku=R("ZodNullable",(t,e)=>{gv.init(t,e),Re.init(t,e),t.unwrap=()=>t._zod.def.innerType});function bb(t){return new ku({type:"nullable",innerType:t})}var Au=R("ZodDefault",(t,e)=>{vv.init(t,e),Re.init(t,e),t.unwrap=()=>t._zod.def.innerType,t.removeDefault=t.unwrap});function I0(t,e){return new Au({type:"default",innerType:t,get defaultValue(){return typeof e=="function"?e():e}})}var C0=R("ZodPrefault",(t,e)=>{bv.init(t,e),Re.init(t,e),t.unwrap=()=>t._zod.def.innerType});function N0(t,e){return new C0({type:"prefault",innerType:t,get defaultValue(){return typeof e=="function"?e():e}})}var Eb=R("ZodNonOptional",(t,e)=>{yv.init(t,e),Re.init(t,e),t.unwrap=()=>t._zod.def.innerType});function O0(t,e){return new Eb({type:"nonoptional",innerType:t,...fe.normalizeParams(e)})}var Ru=R("ZodCatch",(t,e)=>{wv.init(t,e),Re.init(t,e),t.unwrap=()=>t._zod.def.innerType,t.removeCatch=t.unwrap});function M0(t,e){return new Ru({type:"catch",innerType:t,catchValue:typeof e=="function"?e:()=>e})}var Iu=R("ZodPipe",(t,e)=>{xv.init(t,e),Re.init(t,e),t.in=e.in,t.out=e.out});function yb(t,e){return new Iu({type:"pipe",in:t,out:e})}var Cu=R("ZodReadonly",(t,e)=>{Ev.init(t,e),Re.init(t,e)});function P0(t){return new Cu({type:"readonly",innerType:t})}var _b=R("ZodLazy",(t,e)=>{_v.init(t,e),Re.init(t,e),t.unwrap=()=>t._zod.def.getter()});var Tb=R("ZodCustom",(t,e)=>{Tv.init(t,e),Re.init(t,e)});function L0(t){let e=new Je({check:"custom"});return e._zod.check=t,e}function Cr(t,e){return ob(Tb,t??(()=>!0),e)}function z0(t,e={}){return ib(Tb,t,e)}function D0(t){let e=L0(n=>(n.addIssue=r=>{if(typeof r=="string")n.issues.push(fe.issue(r,n.value,e._zod.def));else{let o=r;o.fatal&&(o.continue=!1),o.code??(o.code="custom"),o.input??(o.input=n.value),o.inst??(o.inst=e),o.continue??(o.continue=!e._zod.def.abort),n.issues.push(fe.issue(o))}},t(n.value,n)));return e}We(kr());var U0=Mn(y),Y=Cr(t=>typeof t=="object"&&t!==null&&!Array.isArray(t)),re=A(),Sb=Mn(["developer","system","assistant","user"]),H0=U({type:G(y.TEXT_MESSAGE_START),timestamp:X().min(-9007199254740991).max(9007199254740991).optional(),rawEvent:W().refine(t=>t!==null).optional(),metadata:Y.optional(),subagentRunId:re.optional(),messageId:A(),role:Sb.optional(),name:A().optional()}),F0=U({type:G(y.TEXT_MESSAGE_CONTENT),timestamp:X().min(-9007199254740991).max(9007199254740991).optional(),rawEvent:W().refine(t=>t!==null).optional(),metadata:Y.optional(),subagentRunId:re.optional(),messageId:A(),delta:A()}),G0=U({type:G(y.TEXT_MESSAGE_END),timestamp:X().min(-9007199254740991).max(9007199254740991).optional(),rawEvent:W().refine(t=>t!==null).optional(),metadata:Y.optional(),subagentRunId:re.optional(),messageId:A()}),Nu=U({type:G(y.TEXT_MESSAGE_CHUNK),timestamp:X().min(-9007199254740991).max(9007199254740991).optional(),rawEvent:W().refine(t=>t!==null).optional(),metadata:Y.optional(),subagentRunId:re.optional(),messageId:A().optional(),role:Sb.optional(),delta:A().optional(),name:A().optional()}),B0=U({type:G(y.TOOL_CALL_START),timestamp:X().min(-9007199254740991).max(9007199254740991).optional(),rawEvent:W().refine(t=>t!==null).optional(),metadata:Y.optional(),subagentRunId:re.optional(),toolCallId:A(),toolCallName:A(),parentMessageId:A().optional()}),V0=U({type:G(y.TOOL_CALL_ARGS),timestamp:X().min(-9007199254740991).max(9007199254740991).optional(),rawEvent:W().refine(t=>t!==null).optional(),metadata:Y.optional(),subagentRunId:re.optional(),toolCallId:A(),delta:A()}),Z0=U({type:G(y.TOOL_CALL_END),timestamp:X().min(-9007199254740991).max(9007199254740991).optional(),rawEvent:W().refine(t=>t!==null).optional(),metadata:Y.optional(),subagentRunId:re.optional(),toolCallId:A()}),Ou=U({type:G(y.TOOL_CALL_CHUNK),timestamp:X().min(-9007199254740991).max(9007199254740991).optional(),rawEvent:W().refine(t=>t!==null).optional(),metadata:Y.optional(),subagentRunId:re.optional(),toolCallId:A().optional(),toolCallName:A().optional(),parentMessageId:A().optional(),delta:A().optional()}),j0=U({type:G("text"),id:A().optional(),text:A(),metadata:W().refine(t=>t!==null).optional()}),W0=U({type:G("data"),value:A(),mimeType:A()}),q0=U({type:G("url"),value:A(),mimeType:A().optional()}),Y0=U({type:G("file"),value:A(),provider:A().optional(),mimeType:A().optional()}),Ps=rn("type",[W0,q0,Y0]),K0=U({type:G("image"),id:A().optional(),source:Ps,metadata:W().refine(t=>t!==null).optional()}),X0=U({type:G("audio"),id:A().optional(),source:Ps,metadata:W().refine(t=>t!==null).optional()}),J0=U({type:G("video"),id:A().optional(),source:Ps,metadata:W().refine(t=>t!==null).optional()}),Q0=U({type:G("document"),id:A().optional(),source:Ps,metadata:W().refine(t=>t!==null).optional()}),Mu=rn("type",[j0,K0,X0,J0,Q0]),ek=U({type:G(y.TOOL_CALL_RESULT),timestamp:X().min(-9007199254740991).max(9007199254740991).optional(),rawEvent:W().refine(t=>t!==null).optional(),metadata:Y.optional(),subagentRunId:re.optional(),messageId:A(),toolCallId:A(),content:Mo([A(),Le(Mu)]),role:G("tool").optional()}),kb=W(),tk=U({type:G(y.STATE_SNAPSHOT),timestamp:X().min(-9007199254740991).max(9007199254740991).optional(),rawEvent:W().refine(t=>t!==null).optional(),metadata:Y.optional(),subagentRunId:re.optional(),snapshot:kb.refine(t=>t!==void 0)}),on=A().regex(new RegExp("^(/([^/~]|~[01])*)*$")),nk=U({op:G("add"),path:on,value:W().refine(t=>t!==void 0)}).meta({specOpen:!0}),rk=U({op:G("remove"),path:on}).meta({specOpen:!0}),ok=U({op:G("replace"),path:on,value:W().refine(t=>t!==void 0)}).meta({specOpen:!0}),ik=U({op:G("move"),from:on,path:on}).meta({specOpen:!0}),sk=U({op:G("copy"),from:on,path:on}).meta({specOpen:!0}),ak=U({op:G("test"),path:on,value:W().refine(t=>t!==void 0)}).meta({specOpen:!0}),lk=rn("op",[nk,rk,ok,ik,sk,ak]),Ab=Le(lk),ck=U({type:G(y.STATE_DELTA),timestamp:X().min(-9007199254740991).max(9007199254740991).optional(),rawEvent:W().refine(t=>t!==null).optional(),metadata:Y.optional(),subagentRunId:re.optional(),delta:Ab}),dk=U({subagentRunId:re.optional(),id:A(),role:G("developer"),name:A().optional(),encryptedValue:A().optional(),metadata:Y.optional(),content:A()}),uk=U({subagentRunId:re.optional(),id:A(),role:G("system"),name:A().optional(),encryptedValue:A().optional(),metadata:Y.optional(),content:A()}),hk=U({name:A(),arguments:A()}),pk=U({id:A(),type:G("function"),function:hk,encryptedValue:A().optional(),metadata:Y.optional()}),fk=U({subagentRunId:re.optional(),id:A(),role:G("assistant"),name:A().optional(),encryptedValue:A().optional(),metadata:Y.optional(),content:A().optional(),toolCalls:Le(pk).optional()}),mk=U({subagentRunId:re.optional(),id:A(),role:G("user"),name:A().optional(),encryptedValue:A().optional(),metadata:Y.optional(),content:Mo([A(),Le(Mu)])}),gk=U({subagentRunId:re.optional(),id:A(),role:G("tool"),content:Mo([A(),Le(Mu)]),toolCallId:A(),error:A().optional(),encryptedValue:A().optional(),metadata:Y.optional()}),vk=U({subagentRunId:re.optional(),id:A(),role:G("activity"),activityType:A(),content:Cr(t=>typeof t=="object"&&t!==null&&!Array.isArray(t)),metadata:Y.optional()}),bk=U({subagentRunId:re.optional(),id:A(),role:G("reasoning"),content:A(),encryptedValue:A().optional(),metadata:Y.optional()}),Rb=rn("role",[dk,uk,fk,mk,gk,vk,bk]),yk=U({type:G(y.MESSAGES_SNAPSHOT),timestamp:X().min(-9007199254740991).max(9007199254740991).optional(),rawEvent:W().refine(t=>t!==null).optional(),metadata:Y.optional(),messages:Le(Rb)}),wk=U({type:G(y.ACTIVITY_SNAPSHOT),timestamp:X().min(-9007199254740991).max(9007199254740991).optional(),rawEvent:W().refine(t=>t!==null).optional(),metadata:Y.optional(),subagentRunId:re.optional(),messageId:A(),activityType:A(),content:Cr(t=>typeof t=="object"&&t!==null&&!Array.isArray(t)),replace:oe().optional()}),xk=U({type:G(y.ACTIVITY_DELTA),timestamp:X().min(-9007199254740991).max(9007199254740991).optional(),rawEvent:W().refine(t=>t!==null).optional(),metadata:Y.optional(),subagentRunId:re.optional(),messageId:A(),activityType:A(),patch:Ab}),Ek=U({type:G(y.RAW),timestamp:X().min(-9007199254740991).max(9007199254740991).optional(),rawEvent:W().refine(t=>t!==null).optional(),metadata:Y.optional(),subagentRunId:re.optional(),event:W().refine(t=>t!==void 0),source:A().optional()}),_k=U({type:G(y.CUSTOM),timestamp:X().min(-9007199254740991).max(9007199254740991).optional(),rawEvent:W().refine(t=>t!==null).optional(),metadata:Y.optional(),subagentRunId:re.optional(),name:A(),value:W().refine(t=>t!==void 0)}),Ib=U({name:A(),description:A(),parameters:W().refine(t=>t!==null).optional(),metadata:Y.optional()}),Tk=U({description:A(),value:A()}),Sk=U({interruptId:A(),status:Mn(["resolved","cancelled"]),payload:W().refine(t=>t!==null).optional(),metadata:Y.optional()}),Ls=U({threadId:A(),runId:A(),protocolVersion:A().optional(),parentRunId:A().optional(),state:kb.refine(t=>t!==null).nullable().transform(t=>t??void 0).optional(),messages:Le(Rb),tools:Le(Ib).default(()=>[]),context:Le(Tk).default(()=>[]),forwardedProps:W().refine(t=>t!==null).optional(),resume:Le(Sk).optional()}),kk=U({type:G(y.RUN_STARTED),timestamp:X().min(-9007199254740991).max(9007199254740991).optional(),rawEvent:W().refine(t=>t!==null).optional(),metadata:Y.optional(),threadId:A(),runId:A(),protocolVersion:A().optional(),parentRunId:A().optional(),input:Ls.optional()}),Ak=U({type:G("success"),pendingToolCallIds:Le(A()).optional()}),Rk=U({subagentRunId:re.optional(),id:A(),reason:A(),message:A().optional(),toolCallId:A().optional(),responseSchema:Cr(t=>typeof t=="object"&&t!==null&&!Array.isArray(t)).optional(),expiresAt:A().optional(),metadata:Y.optional()}),Ik=U({type:G("interrupt"),interrupts:Le(Rk).min(1)}),Ck=U({type:G("cancelled")}),Nk=rn("type",[Ak,Ik,Ck]),Cb=U({provider:A().optional(),model:A().optional(),inputTokens:X().min(0).max(9007199254740991).optional(),outputTokens:X().min(0).max(9007199254740991).optional(),totalTokens:X().min(0).max(9007199254740991).optional(),reasoningTokens:X().min(0).max(9007199254740991).optional(),cachedInputTokens:X().min(0).max(9007199254740991).optional(),cacheWriteInputTokens:X().min(0).max(9007199254740991).optional()}),Ok=U({type:G(y.RUN_FINISHED),timestamp:X().min(-9007199254740991).max(9007199254740991).optional(),rawEvent:W().refine(t=>t!==null).optional(),metadata:Y.optional(),threadId:A(),runId:A(),result:W().refine(t=>t!==null).optional(),outcome:Nk.optional(),usage:Le(Cb).optional()}),Mk=U({type:G(y.RUN_ERROR),timestamp:X().min(-9007199254740991).max(9007199254740991).optional(),rawEvent:W().refine(t=>t!==null).optional(),metadata:Y.optional(),message:A(),code:A().optional(),usage:Le(Cb).optional()}),Pk=U({type:G(y.STEP_STARTED),timestamp:X().min(-9007199254740991).max(9007199254740991).optional(),rawEvent:W().refine(t=>t!==null).optional(),metadata:Y.optional(),subagentRunId:re.optional(),stepName:A()}),Lk=U({type:G(y.STEP_FINISHED),timestamp:X().min(-9007199254740991).max(9007199254740991).optional(),rawEvent:W().refine(t=>t!==null).optional(),metadata:Y.optional(),subagentRunId:re.optional(),stepName:A()}),zk=U({type:G(y.REASONING_START),timestamp:X().min(-9007199254740991).max(9007199254740991).optional(),rawEvent:W().refine(t=>t!==null).optional(),metadata:Y.optional(),subagentRunId:re.optional(),messageId:A()}),Dk=U({type:G(y.REASONING_MESSAGE_START),timestamp:X().min(-9007199254740991).max(9007199254740991).optional(),rawEvent:W().refine(t=>t!==null).optional(),metadata:Y.optional(),subagentRunId:re.optional(),messageId:A(),role:G("reasoning")}),$k=U({type:G(y.REASONING_MESSAGE_CONTENT),timestamp:X().min(-9007199254740991).max(9007199254740991).optional(),rawEvent:W().refine(t=>t!==null).optional(),metadata:Y.optional(),subagentRunId:re.optional(),messageId:A(),delta:A()}),Uk=U({type:G(y.REASONING_MESSAGE_END),timestamp:X().min(-9007199254740991).max(9007199254740991).optional(),rawEvent:W().refine(t=>t!==null).optional(),metadata:Y.optional(),subagentRunId:re.optional(),messageId:A()}),Pu=U({type:G(y.REASONING_MESSAGE_CHUNK),timestamp:X().min(-9007199254740991).max(9007199254740991).optional(),rawEvent:W().refine(t=>t!==null).optional(),metadata:Y.optional(),subagentRunId:re.optional(),messageId:A().optional(),delta:A().optional()}),Hk=U({type:G(y.REASONING_END),timestamp:X().min(-9007199254740991).max(9007199254740991).optional(),rawEvent:W().refine(t=>t!==null).optional(),metadata:Y.optional(),subagentRunId:re.optional(),messageId:A()}),Fk=Mn(["tool-call","message"]),Gk=U({type:G(y.REASONING_ENCRYPTED_VALUE),timestamp:X().min(-9007199254740991).max(9007199254740991).optional(),rawEvent:W().refine(t=>t!==null).optional(),metadata:Y.optional(),subagentRunId:re.optional(),subtype:Fk,entityId:A(),encryptedValue:A()}),Bk=U({type:G(y.SUBAGENT_STARTED),timestamp:X().min(-9007199254740991).max(9007199254740991).optional(),rawEvent:W().refine(t=>t!==null).optional(),metadata:Y.optional(),subagentRunId:re,name:A(),description:A().optional(),parentSubagentRunId:re.optional(),parentToolCallId:A().optional(),parentMessageId:A().optional()}),Vk=U({type:G("success")}),Zk=U({type:G("suspended"),interruptIds:Le(A()).optional()}),jk=rn("type",[Vk,Zk]),Wk=U({type:G(y.SUBAGENT_FINISHED),timestamp:X().min(-9007199254740991).max(9007199254740991).optional(),rawEvent:W().refine(t=>t!==null).optional(),metadata:Y.optional(),subagentRunId:re,result:W().refine(t=>t!==null).optional(),outcome:jk.optional()}),qk=U({type:G(y.SUBAGENT_ERROR),timestamp:X().min(-9007199254740991).max(9007199254740991).optional(),rawEvent:W().refine(t=>t!==null).optional(),metadata:Y.optional(),subagentRunId:re,message:A(),code:A().optional()}),Lu=rn("type",[H0,F0,G0,Nu,B0,V0,Z0,Ou,ek,tk,ck,yk,wk,xk,Ek,_k,kk,Ok,Mk,Pk,Lk,zk,Dk,$k,Uk,Pu,Hk,Gk,Bk,Wk,qk]),l$=Mn(["developer","system","assistant","user","tool","activity","reasoning"]),Yk=U({name:A(),description:A().optional()}),Kk=U({name:A().optional(),type:A().optional(),description:A().optional(),version:A().optional(),provider:A().optional(),documentationUrl:A().optional(),metadata:Y.optional()}),Xk=U({streaming:oe().optional(),websocket:oe().optional(),httpBinary:oe().optional(),pushNotifications:oe().optional(),resumable:oe().optional()}),Jk=U({supported:oe().optional(),items:Le(Ib).optional(),parallelCalls:oe().optional(),clientProvided:oe().optional()}),Qk=U({structuredOutput:oe().optional(),supportedMimeTypes:Le(A()).optional()}),eA=U({snapshots:oe().optional(),deltas:oe().optional(),memory:oe().optional(),persistentState:oe().optional()}),tA=U({supported:oe().optional(),delegation:oe().optional(),handoffs:oe().optional(),subagents:Le(Yk).optional()}),nA=U({supported:oe().optional(),streaming:oe().optional(),encrypted:oe().optional()}),rA=U({image:oe().optional(),audio:oe().optional(),video:oe().optional(),pdf:oe().optional(),file:oe().optional()}),oA=U({image:oe().optional(),audio:oe().optional()}),iA=U({input:rA.optional(),output:oA.optional()}),sA=U({codeExecution:oe().optional(),sandboxed:oe().optional(),maxIterations:X().min(0).max(9007199254740991).optional(),maxExecutionTime:X().min(0).max(9007199254740991).optional()}),aA=U({supported:oe().optional(),approvals:oe().optional(),interventions:oe().optional(),feedback:oe().optional(),interrupts:oe().optional(),approveWithEdits:oe().optional()}),c$=U({identity:Kk.optional(),transport:Xk.optional(),tools:Jk.optional(),output:Qk.optional(),state:eA.optional(),multiAgent:tA.optional(),reasoning:nA.optional(),multimodal:iA.optional(),execution:sA.optional(),humanInTheLoop:aA.optional(),custom:Cr(t=>typeof t=="object"&&t!==null&&!Array.isArray(t)).optional()}),d$=U({subagentRunId:re.optional()}),u$=U({type:U0,timestamp:X().min(-9007199254740991).max(9007199254740991).optional(),rawEvent:W().refine(t=>t!==null).optional(),metadata:Y.optional()}),h$=U({subagentRunId:re.optional(),id:A(),role:A(),name:A().optional(),encryptedValue:A().optional(),metadata:Y.optional()}),p$=Y.optional();We(kr());function Ob(){let t=this.buf,e=this.pos,n=0,r=0;for(let i=0;i<28;i+=7){let s=t[e++];if(n|=(s&127)<<i,(s&128)==0){this.pos=e,this.assertBounds(),this.varint64Lo=n,this.varint64Hi=r;return}}let o=t[e++];if(n|=(o&15)<<28,r=(o&112)>>4,(o&128)==0){this.pos=e,this.assertBounds(),this.varint64Lo=n,this.varint64Hi=r;return}for(let i=3;i<=31;i+=7){let s=t[e++];if(r|=(s&127)<<i,(s&128)==0){this.pos=e,this.assertBounds(),this.varint64Lo=n,this.varint64Hi=r;return}}throw new Error("invalid varint")}var zs=4294967296;function zu(t){let e=t[0]==="-";e&&(t=t.slice(1));let n=1e6,r=0,o=0;function i(s,a){let c=Number(t.slice(s,a));o*=n,r=r*n+c,r>=zs&&(o=o+(r/zs|0),r=r%zs)}return i(-24,-18),i(-18,-12),i(-12,-6),i(-6),e?Pb(r,o):$u(r,o)}function Mb(t,e){let n=$u(t,e),r=n.hi&2147483648;r&&(n=Pb(n.lo,n.hi));let o=Du(n.lo,n.hi);return r?"-"+o:o}function Du(t,e){if({lo:t,hi:e}=lA(t,e),e<=2097151)return String(zs*e+t);let n=t&16777215,r=(t>>>24|e<<8)&16777215,o=e>>16&65535,i=n+r*6777216+o*6710656,s=r+o*8147497,a=o*2,c=1e7;return i>=c&&(s+=Math.floor(i/c),i%=c),s>=c&&(a+=Math.floor(s/c),s%=c),a.toString()+Nb(s)+Nb(i)}function lA(t,e){return{lo:t>>>0,hi:e>>>0}}function $u(t,e){return{lo:t|0,hi:e|0}}function Pb(t,e){return e=~e,t?t=~t+1:e+=1,$u(t,e)}var Nb=t=>{let e=String(t);return"0000000".slice(e.length)+e};function Lb(){let t=this.buf[this.pos++];if((t&128)===0)return this.assertBounds(),t;let e=t&127;if(t=this.buf[this.pos++],e|=(t&127)<<7,(t&128)===0)return this.assertBounds(),e;if(t=this.buf[this.pos++],e|=(t&127)<<14,(t&128)===0)return this.assertBounds(),e;if(t=this.buf[this.pos++],e|=(t&127)<<21,(t&128)===0)return this.assertBounds(),e;t=this.buf[this.pos++],e|=(t&15)<<28;for(let n=5;(t&128)!==0&&n<10;n++)t=this.buf[this.pos++];if((t&128)!==0)throw new Error("invalid varint");return this.assertBounds(),e>>>0}var wt=cA();function cA(){let t=new DataView(new ArrayBuffer(8));if(typeof BigInt=="function"&&typeof t.getBigInt64=="function"&&typeof t.getBigUint64=="function"&&typeof t.setBigInt64=="function"&&typeof t.setBigUint64=="function"&&(!!globalThis.Deno||!!globalThis.Bun||typeof process!="object"||typeof process.env!="object"||process.env.BUF_BIGINT_DISABLE!=="1")){let n=BigInt("-9223372036854775808"),r=BigInt("9223372036854775807"),o=BigInt("0"),i=BigInt("18446744073709551615");return{zero:BigInt(0),supported:!0,parse(s){let a=typeof s=="bigint"?s:BigInt(s);if(a>r||a<n)throw new Error(`invalid int64: ${s}`);return a},uParse(s){let a=typeof s=="bigint"?s:BigInt(s);if(a>i||a<o)throw new Error(`invalid uint64: ${s}`);return a},enc(s){return t.setBigInt64(0,this.parse(s),!0),{lo:t.getInt32(0,!0),hi:t.getInt32(4,!0)}},uEnc(s){return t.setBigInt64(0,this.uParse(s),!0),{lo:t.getInt32(0,!0),hi:t.getInt32(4,!0)}},dec(s,a){return t.setInt32(0,s,!0),t.setInt32(4,a,!0),t.getBigInt64(0,!0)},uDec(s,a){return t.setInt32(0,s,!0),t.setInt32(4,a,!0),t.getBigUint64(0,!0)}}}return{zero:"0",supported:!1,parse(n){return typeof n!="string"&&(n=n.toString()),zb(n),n},uParse(n){return typeof n!="string"&&(n=n.toString()),Db(n),n},enc(n){return typeof n!="string"&&(n=n.toString()),zb(n),zu(n)},uEnc(n){return typeof n!="string"&&(n=n.toString()),Db(n),zu(n)},dec(n,r){return Mb(n,r)},uDec(n,r){return Du(n,r)}}}function zb(t){if(!/^-?[0-9]+$/.test(t))throw new Error("invalid int64: "+t)}function Db(t){if(!/^[0-9]+$/.test(t))throw new Error("invalid uint64: "+t)}var Uu;function dA(t){var e;Uu=Object.assign(Object.assign({},t),{encodeUtf8Into:(e=t.encodeUtf8Into)!==null&&e!==void 0?e:Fu(t.encodeUtf8.bind(t))})}function Hu(){if(!Uu){let t=globalThis;if(!t.TextEncoder||!t.TextDecoder)throw new Error("encoding API missing: install TextEncoder and TextDecoder on globalThis");let e=new t.TextEncoder,n=new t.TextDecoder("utf-8",{ignoreBOM:!0}),r,o={encodeUtf8(s){return e.encode(s)},decodeUtf8(s,a){return a?(r||(r=new t.TextDecoder("utf-8",{fatal:!0,ignoreBOM:!0})),r.decode(s)):n.decode(s)},checkUtf8(s){try{return encodeURIComponent(s),!0}catch{return!1}}};e.encodeInto&&(o.encodeUtf8Into=e.encodeInto.bind(e));let i=String.prototype.isWellFormed;i&&(o.checkUtf8=s=>i.call(s)),dA(o)}return Uu}function Fu(t){return(e,n)=>{let r=t(e);return n.set(r),{written:r.byteLength}}}var sn;(function(t){t[t.Varint=0]="Varint",t[t.Bit64=1]="Bit64",t[t.LengthDelimited=2]="LengthDelimited",t[t.StartGroup=3]="StartGroup",t[t.EndGroup=4]="EndGroup",t[t.Bit32=5]="Bit32"})(sn||(sn={}));var uA=4294967295,hA=2147483647,pA=-2147483648,B=class{constructor(e){this.stackPos=[],this.encodeUtf8Into=e?Fu(e):Hu().encodeUtf8Into,this.buffer=Ub,this.viewCache=mA,this.pos=0}ensureCapacity(e){let n=this.pos+e;if(n>this.buffer.length){let r=this.buffer.length||fA;for(;r<n;)r*=2;let o=new Uint8Array(r);this.pos>0&&o.set(this.buffer),this.buffer=o}}view(){let e=this.buffer,n=this.viewCache;if(n.byteLength===e.byteLength)return n;let r=new DataView(e.buffer);return this.viewCache=r,r}finish(){let e=this.buffer.slice(0,this.pos);return this.pos=0,this.stackPos=[],e}fork(){return this.stackPos.push(this.pos),this.ensureCapacity(Po),this.buffer[this.pos++]=0,this}join(){let e=this.stackPos.pop();if(e===void 0)throw new Error("invalid state, fork stack empty");let n=this.pos-e-Po,r=Gu(n);return r>Po&&(this.ensureCapacity(r-Po),this.buffer.copyWithin(e+r,e+Po,this.pos)),this.pos=e,this.uint32(n),this.pos+=n,this}tag(e,n){return this.uint32((e<<3|n)>>>0)}raw(e){return this.ensureCapacity(e.length),this.buffer.set(e,this.pos),this.pos+=e.length,this}uint32(e){if($b(e),this.ensureCapacity(5),e<128)return this.buffer[this.pos++]=e,this;for(;e>127;)this.buffer[this.pos++]=e&127|128,e>>>=7;return this.buffer[this.pos++]=e,this}int32(e){if(Bu(e),e>=0)return this.uint32(e);this.ensureCapacity(10);for(let n=0;n<9;n++)this.buffer[this.pos++]=e&127|128,e>>=7;return this.buffer[this.pos++]=1,this}bool(e){return this.ensureCapacity(1),this.buffer[this.pos++]=e?1:0,this}bytes(e){return this.uint32(e.byteLength),this.raw(e)}string(e){typeof e!="string"&&(e=String(e));let n=e.length;if(n<=Hb){this.ensureCapacity(n+1);let c=this.buffer,l=this.pos;c[l++]=n;let d=0;for(;d<n;d++){let h=e.charCodeAt(d);if(h>127)break;c[l++]=h}if(d==n)return this.pos=l,this}this.ensureCapacity(n*3+5);let r=Gu(n),o=this.buffer,i=this.pos,{written:s}=this.encodeUtf8Into(e,o.subarray(i+r)),a=Gu(s);return a!=r&&o.copyWithin(i+a,i+r,i+r+s),this.uint32(s),this.pos+=s,this}float(e){return gA(e),this.ensureCapacity(4),this.view().setFloat32(this.pos,e,!0),this.pos+=4,this}double(e){return this.ensureCapacity(8),this.view().setFloat64(this.pos,e,!0),this.pos+=8,this}fixed32(e){return $b(e),this.ensureCapacity(4),this.view().setUint32(this.pos,e,!0),this.pos+=4,this}sfixed32(e){return Bu(e),this.ensureCapacity(4),this.view().setInt32(this.pos,e,!0),this.pos+=4,this}sint32(e){return Bu(e),this.uint32((e<<1^e>>31)>>>0)}sfixed64(e){let n=wt.enc(e);this.ensureCapacity(8);let r=this.view();return r.setInt32(this.pos,n.lo,!0),r.setInt32(this.pos+4,n.hi,!0),this.pos+=8,this}fixed64(e){let n=wt.uEnc(e);this.ensureCapacity(8);let r=this.view();return r.setInt32(this.pos,n.lo,!0),r.setInt32(this.pos+4,n.hi,!0),this.pos+=8,this}int64(e){let n=wt.enc(e);return this.writeVarint64(n.lo,n.hi)}sint64(e){let n=wt.enc(e),r=n.hi>>31,o=n.lo<<1^r,i=(n.hi<<1|n.lo>>>31)^r;return this.writeVarint64(o,i)}uint64(e){let n=wt.uEnc(e);return this.writeVarint64(n.lo,n.hi)}writeVarint64(e,n){this.ensureCapacity(10);let r=this.buffer,o=this.pos;for(let a=0;a<28;a=a+7){let c=e>>>a,l=!(!(c>>>7)&&n==0);if(r[o++]=(l?c|128:c)&255,!l)return this.pos=o,this}let i=e>>>28&15|(n&7)<<4,s=n>>3!=0;if(r[o++]=(s?i|128:i)&255,!s)return this.pos=o,this;for(let a=3;a<31;a=a+7){let c=n>>>a,l=!!(c>>>7);if(r[o++]=(l?c|128:c)&255,!l)return this.pos=o,this}return r[o++]=n>>>31&1,this.pos=o,this}},fA=128,Po=1,Ub=new Uint8Array(0),mA=new DataView(Ub.buffer),Hb=32;function Gu(t){return t<128?1:t<16384?2:t<2097152?3:t<268435456?4:5}var C=class{constructor(e,n=Hu().decodeUtf8){this.decodeUtf8=n,this.varint64Lo=0,this.varint64Hi=0,this.varint64=Ob,this.uint32=Lb,this.buf=e,this.len=e.length,this.pos=0,this.view=new DataView(e.buffer,e.byteOffset,e.byteLength)}tag(){let e=this.pos,n=this.uint32(),r=this.pos-e;if(r>5||r==5&&this.buf[this.pos-1]>15)throw new Error("illegal tag: varint overflows uint32");let o=n>>>3,i=n&7;if(o<=0||i>5)throw new Error("illegal tag: field no "+o+" wire type "+i);return[o,i]}skip(e,n,r=100){let o=this.pos;switch(e){case sn.Varint:for(;this.buf[this.pos++]&128;);break;case sn.Bit64:this.pos+=4;case sn.Bit32:this.pos+=4;break;case sn.LengthDelimited:let i=this.uint32();this.pos+=i;break;case sn.StartGroup:if(r<=0)throw new Error("maximum recursion depth reached");for(;;){let[s,a]=this.tag();if(a===sn.EndGroup){if(n!==void 0&&s!==n)throw new Error("invalid end group tag");break}this.skip(a,s,r-1)}break;default:throw new Error("cant skip wire type "+e)}return this.assertBounds(),this.buf.subarray(o,this.pos)}assertBounds(){if(this.pos>this.len)throw new RangeError("premature EOF")}int32(){return this.uint32()|0}sint32(){let e=this.uint32();return e>>>1^-(e&1)}int64(){return this.varint64(),wt.dec(this.varint64Lo,this.varint64Hi)}uint64(){return this.varint64(),wt.uDec(this.varint64Lo,this.varint64Hi)}sint64(){this.varint64();let e=this.varint64Lo,n=this.varint64Hi,r=-(e&1);return e=(e>>>1|(n&1)<<31)^r,n=n>>>1^r,wt.dec(e,n)}bool(){let e=this.buf[this.pos];return e<128?(this.pos++,e!==0):(this.varint64(),this.varint64Lo!==0||this.varint64Hi!==0)}fixed32(){return this.view.getUint32((this.pos+=4)-4,!0)}sfixed32(){return this.view.getInt32((this.pos+=4)-4,!0)}fixed64(){return wt.uDec(this.sfixed32(),this.sfixed32())}sfixed64(){return wt.dec(this.sfixed32(),this.sfixed32())}float(){return this.view.getFloat32((this.pos+=4)-4,!0)}double(){return this.view.getFloat64((this.pos+=8)-8,!0)}bytes(){let e=this.uint32(),n=this.pos;return this.pos+=e,this.assertBounds(),this.buf.subarray(n,n+e)}string(e){let n=this.uint32(),r=this.pos;this.pos+=n,this.assertBounds();let o=this.buf;if(n<=Hb){let i=new Array(n);for(let s=0;s<n;s++){let a=o[r+s];if(a>127)return this.decodeUtf8(o.subarray(r,this.pos),e);i[s]=a}return String.fromCharCode.apply(String,i)}return this.decodeUtf8(o.subarray(r,this.pos),e)}};function Bu(t){if(typeof t=="string")t=Number(t);else if(typeof t!="number")throw new Error("invalid int32: "+typeof t);if(!Number.isInteger(t)||t>hA||t<pA)throw new Error("invalid int32: "+t)}function $b(t){if(typeof t=="string")t=Number(t);else if(typeof t!="number")throw new Error("invalid uint32: "+typeof t);if(!Number.isInteger(t)||t>uA||t<0)throw new Error("invalid uint32: "+t)}function gA(t){if(typeof t=="string"){let e=t;if(t=Number(t),Number.isNaN(t)&&e!=="NaN")throw new Error("invalid float32: "+e)}else if(typeof t!="number")throw new Error("invalid float32: "+typeof t);if(!Number.isFinite(Math.fround(t))&&Number.isFinite(t))throw new Error("invalid float32: "+t)}var vA=(function(t){return t[t.NULL_VALUE=0]="NULL_VALUE",t[t.UNRECOGNIZED=-1]="UNRECOGNIZED",t})({});function Vu(){return{fields:{}}}var se={encode(t,e=new B){return Object.entries(t.fields).forEach(([n,r])=>{r!==void 0&&Wu.encode({key:n,value:r},e.uint32(10).fork()).join()}),e},decode(t,e){let n=t instanceof C?t:new C(t),r=e===void 0?n.len:n.pos+e,o=Vu();for(;n.pos<r;){let i=n.uint32();switch(i>>>3){case 1:{if(i!==10)break;let s=Wu.decode(n,n.uint32());s.value!==void 0&&(o.fields[s.key]=s.value);continue}}if((i&7)===4||i===0)break;n.skip(i&7)}return o},create(t){return se.fromPartial(t??{})},fromPartial(t){let e=Vu();return e.fields=Object.entries(t.fields??{}).reduce((n,[r,o])=>(o!==void 0&&(n[r]=o),n),{}),e},wrap(t){let e=Vu();if(t!==void 0)for(let n of Object.keys(t))e.fields[n]=t[n];return e},unwrap(t){let e={};if(t.fields)for(let n of Object.keys(t.fields))e[n]=t.fields[n];return e}};function Fb(){return{key:"",value:void 0}}var Wu={encode(t,e=new B){return t.key!==""&&e.uint32(10).string(t.key),t.value!==void 0&&H.encode(H.wrap(t.value),e.uint32(18).fork()).join(),e},decode(t,e){let n=t instanceof C?t:new C(t),r=e===void 0?n.len:n.pos+e,o=Fb();for(;n.pos<r;){let i=n.uint32();switch(i>>>3){case 1:if(i!==10)break;o.key=n.string();continue;case 2:if(i!==18)break;o.value=H.unwrap(H.decode(n,n.uint32()));continue}if((i&7)===4||i===0)break;n.skip(i&7)}return o},create(t){return Wu.fromPartial(t??{})},fromPartial(t){let e=Fb();return e.key=t.key??"",e.value=t.value??void 0,e}};function Zu(){return{nullValue:void 0,numberValue:void 0,stringValue:void 0,boolValue:void 0,structValue:void 0,listValue:void 0}}var H={encode(t,e=new B){return t.nullValue!==void 0&&e.uint32(8).int32(t.nullValue),t.numberValue!==void 0&&e.uint32(17).double(t.numberValue),t.stringValue!==void 0&&e.uint32(26).string(t.stringValue),t.boolValue!==void 0&&e.uint32(32).bool(t.boolValue),t.structValue!==void 0&&se.encode(se.wrap(t.structValue),e.uint32(42).fork()).join(),t.listValue!==void 0&&Lo.encode(Lo.wrap(t.listValue),e.uint32(50).fork()).join(),e},decode(t,e){let n=t instanceof C?t:new C(t),r=e===void 0?n.len:n.pos+e,o=Zu();for(;n.pos<r;){let i=n.uint32();switch(i>>>3){case 1:if(i!==8)break;o.nullValue=n.int32();continue;case 2:if(i!==17)break;o.numberValue=n.double();continue;case 3:if(i!==26)break;o.stringValue=n.string();continue;case 4:if(i!==32)break;o.boolValue=n.bool();continue;case 5:if(i!==42)break;o.structValue=se.unwrap(se.decode(n,n.uint32()));continue;case 6:if(i!==50)break;o.listValue=Lo.unwrap(Lo.decode(n,n.uint32()));continue}if((i&7)===4||i===0)break;n.skip(i&7)}return o},create(t){return H.fromPartial(t??{})},fromPartial(t){let e=Zu();return e.nullValue=t.nullValue??void 0,e.numberValue=t.numberValue??void 0,e.stringValue=t.stringValue??void 0,e.boolValue=t.boolValue??void 0,e.structValue=t.structValue??void 0,e.listValue=t.listValue??void 0,e},wrap(t){let e=Zu();if(t===null)e.nullValue=vA.NULL_VALUE;else if(typeof t=="boolean")e.boolValue=t;else if(typeof t=="number")e.numberValue=t;else if(typeof t=="string")e.stringValue=t;else if(globalThis.Array.isArray(t))e.listValue=t;else if(typeof t=="object")e.structValue=t;else if(typeof t<"u")throw new globalThis.Error("Unsupported any value type: "+typeof t);return e},unwrap(t){if(t.stringValue!==void 0)return t.stringValue;if(t?.numberValue!==void 0)return t.numberValue;if(t?.boolValue!==void 0)return t.boolValue;if(t?.structValue!==void 0)return t.structValue;if(t?.listValue!==void 0)return t.listValue;if(t?.nullValue!==void 0)return null}};function ju(){return{values:[]}}var Lo={encode(t,e=new B){for(let n of t.values)H.encode(H.wrap(n),e.uint32(10).fork()).join();return e},decode(t,e){let n=t instanceof C?t:new C(t),r=e===void 0?n.len:n.pos+e,o=ju();for(;n.pos<r;){let i=n.uint32();switch(i>>>3){case 1:if(i!==10)break;o.values.push(H.unwrap(H.decode(n,n.uint32())));continue}if((i&7)===4||i===0)break;n.skip(i&7)}return o},create(t){return Lo.fromPartial(t??{})},fromPartial(t){let e=ju();return e.values=t.values?.map(n=>n)||[],e},wrap(t){let e=ju();return e.values=t??[],e},unwrap(t){return t?.hasOwnProperty("values")&&globalThis.Array.isArray(t.values)?t.values:t}},Gb=(function(t){return t[t.ADD=0]="ADD",t[t.REMOVE=1]="REMOVE",t[t.REPLACE=2]="REPLACE",t[t.MOVE=3]="MOVE",t[t.COPY=4]="COPY",t[t.TEST=5]="TEST",t[t.UNRECOGNIZED=-1]="UNRECOGNIZED",t})({});function Bb(){return{op:0,path:"",from:void 0,value:void 0}}var zn={encode(t,e=new B){return t.op!==0&&e.uint32(8).int32(t.op),t.path!==""&&e.uint32(18).string(t.path),t.from!==void 0&&e.uint32(26).string(t.from),t.value!==void 0&&H.encode(H.wrap(t.value),e.uint32(34).fork()).join(),e},decode(t,e){let n=t instanceof C?t:new C(t),r=e===void 0?n.len:n.pos+e,o=Bb();for(;n.pos<r;){let i=n.uint32();switch(i>>>3){case 1:if(i!==8)break;o.op=n.int32();continue;case 2:if(i!==18)break;o.path=n.string();continue;case 3:if(i!==26)break;o.from=n.string();continue;case 4:if(i!==34)break;o.value=H.unwrap(H.decode(n,n.uint32()));continue}if((i&7)===4||i===0)break;n.skip(i&7)}return o},create(t){return zn.fromPartial(t??{})},fromPartial(t){let e=Bb();return e.op=t.op??0,e.path=t.path??"",e.from=t.from??void 0,e.value=t.value??void 0,e}};function Vb(){return{text:"",id:void 0,metadata:void 0}}var Ds={encode(t,e=new B){return t.text!==""&&e.uint32(10).string(t.text),t.id!==void 0&&e.uint32(18).string(t.id),t.metadata!==void 0&&H.encode(H.wrap(t.metadata),e.uint32(26).fork()).join(),e},decode(t,e){let n=t instanceof C?t:new C(t),r=e===void 0?n.len:n.pos+e,o=Vb();for(;n.pos<r;){let i=n.uint32();switch(i>>>3){case 1:if(i!==10)break;o.text=n.string();continue;case 2:if(i!==18)break;o.id=n.string();continue;case 3:if(i!==26)break;o.metadata=H.unwrap(H.decode(n,n.uint32()));continue}if((i&7)===4||i===0)break;n.skip(i&7)}return o},create(t){return Ds.fromPartial(t??{})},fromPartial(t){let e=Vb();return e.text=t.text??"",e.id=t.id??void 0,e.metadata=t.metadata??void 0,e}};function Zb(){return{source:void 0,metadata:void 0,id:void 0}}var $s={encode(t,e=new B){return t.source!==void 0&&lt.encode(t.source,e.uint32(10).fork()).join(),t.metadata!==void 0&&H.encode(H.wrap(t.metadata),e.uint32(18).fork()).join(),t.id!==void 0&&e.uint32(26).string(t.id),e},decode(t,e){let n=t instanceof C?t:new C(t),r=e===void 0?n.len:n.pos+e,o=Zb();for(;n.pos<r;){let i=n.uint32();switch(i>>>3){case 1:if(i!==10)break;o.source=lt.decode(n,n.uint32());continue;case 2:if(i!==18)break;o.metadata=H.unwrap(H.decode(n,n.uint32()));continue;case 3:if(i!==26)break;o.id=n.string();continue}if((i&7)===4||i===0)break;n.skip(i&7)}return o},create(t){return $s.fromPartial(t??{})},fromPartial(t){let e=Zb();return e.source=t.source!==void 0&&t.source!==null?lt.fromPartial(t.source):void 0,e.metadata=t.metadata??void 0,e.id=t.id??void 0,e}};function jb(){return{value:"",mimeType:""}}var Us={encode(t,e=new B){return t.value!==""&&e.uint32(10).string(t.value),t.mimeType!==""&&e.uint32(18).string(t.mimeType),e},decode(t,e){let n=t instanceof C?t:new C(t),r=e===void 0?n.len:n.pos+e,o=jb();for(;n.pos<r;){let i=n.uint32();switch(i>>>3){case 1:if(i!==10)break;o.value=n.string();continue;case 2:if(i!==18)break;o.mimeType=n.string();continue}if((i&7)===4||i===0)break;n.skip(i&7)}return o},create(t){return Us.fromPartial(t??{})},fromPartial(t){let e=jb();return e.value=t.value??"",e.mimeType=t.mimeType??"",e}};function Wb(){return{value:"",mimeType:void 0}}var Hs={encode(t,e=new B){return t.value!==""&&e.uint32(10).string(t.value),t.mimeType!==void 0&&e.uint32(18).string(t.mimeType),e},decode(t,e){let n=t instanceof C?t:new C(t),r=e===void 0?n.len:n.pos+e,o=Wb();for(;n.pos<r;){let i=n.uint32();switch(i>>>3){case 1:if(i!==10)break;o.value=n.string();continue;case 2:if(i!==18)break;o.mimeType=n.string();continue}if((i&7)===4||i===0)break;n.skip(i&7)}return o},create(t){return Hs.fromPartial(t??{})},fromPartial(t){let e=Wb();return e.value=t.value??"",e.mimeType=t.mimeType??void 0,e}};function qb(){return{value:"",provider:void 0,mimeType:void 0}}var Fs={encode(t,e=new B){return t.value!==""&&e.uint32(10).string(t.value),t.provider!==void 0&&e.uint32(18).string(t.provider),t.mimeType!==void 0&&e.uint32(26).string(t.mimeType),e},decode(t,e){let n=t instanceof C?t:new C(t),r=e===void 0?n.len:n.pos+e,o=qb();for(;n.pos<r;){let i=n.uint32();switch(i>>>3){case 1:if(i!==10)break;o.value=n.string();continue;case 2:if(i!==18)break;o.provider=n.string();continue;case 3:if(i!==26)break;o.mimeType=n.string();continue}if((i&7)===4||i===0)break;n.skip(i&7)}return o},create(t){return Fs.fromPartial(t??{})},fromPartial(t){let e=qb();return e.value=t.value??"",e.provider=t.provider??void 0,e.mimeType=t.mimeType??void 0,e}};function Yb(){return{data:void 0,url:void 0,file:void 0}}var lt={encode(t,e=new B){return t.data!==void 0&&Us.encode(t.data,e.uint32(10).fork()).join(),t.url!==void 0&&Hs.encode(t.url,e.uint32(18).fork()).join(),t.file!==void 0&&Fs.encode(t.file,e.uint32(26).fork()).join(),e},decode(t,e){let n=t instanceof C?t:new C(t),r=e===void 0?n.len:n.pos+e,o=Yb();for(;n.pos<r;){let i=n.uint32();switch(i>>>3){case 1:if(i!==10)break;o.data=Us.decode(n,n.uint32());continue;case 2:if(i!==18)break;o.url=Hs.decode(n,n.uint32());continue;case 3:if(i!==26)break;o.file=Fs.decode(n,n.uint32());continue}if((i&7)===4||i===0)break;n.skip(i&7)}return o},create(t){return lt.fromPartial(t??{})},fromPartial(t){let e=Yb();return e.data=t.data!==void 0&&t.data!==null?Us.fromPartial(t.data):void 0,e.url=t.url!==void 0&&t.url!==null?Hs.fromPartial(t.url):void 0,e.file=t.file!==void 0&&t.file!==null?Fs.fromPartial(t.file):void 0,e}};function Kb(){return{source:void 0,metadata:void 0,id:void 0}}var Gs={encode(t,e=new B){return t.source!==void 0&&lt.encode(t.source,e.uint32(10).fork()).join(),t.metadata!==void 0&&H.encode(H.wrap(t.metadata),e.uint32(18).fork()).join(),t.id!==void 0&&e.uint32(26).string(t.id),e},decode(t,e){let n=t instanceof C?t:new C(t),r=e===void 0?n.len:n.pos+e,o=Kb();for(;n.pos<r;){let i=n.uint32();switch(i>>>3){case 1:if(i!==10)break;o.source=lt.decode(n,n.uint32());continue;case 2:if(i!==18)break;o.metadata=H.unwrap(H.decode(n,n.uint32()));continue;case 3:if(i!==26)break;o.id=n.string();continue}if((i&7)===4||i===0)break;n.skip(i&7)}return o},create(t){return Gs.fromPartial(t??{})},fromPartial(t){let e=Kb();return e.source=t.source!==void 0&&t.source!==null?lt.fromPartial(t.source):void 0,e.metadata=t.metadata??void 0,e.id=t.id??void 0,e}};function Xb(){return{source:void 0,metadata:void 0,id:void 0}}var Bs={encode(t,e=new B){return t.source!==void 0&&lt.encode(t.source,e.uint32(10).fork()).join(),t.metadata!==void 0&&H.encode(H.wrap(t.metadata),e.uint32(18).fork()).join(),t.id!==void 0&&e.uint32(26).string(t.id),e},decode(t,e){let n=t instanceof C?t:new C(t),r=e===void 0?n.len:n.pos+e,o=Xb();for(;n.pos<r;){let i=n.uint32();switch(i>>>3){case 1:if(i!==10)break;o.source=lt.decode(n,n.uint32());continue;case 2:if(i!==18)break;o.metadata=H.unwrap(H.decode(n,n.uint32()));continue;case 3:if(i!==26)break;o.id=n.string();continue}if((i&7)===4||i===0)break;n.skip(i&7)}return o},create(t){return Bs.fromPartial(t??{})},fromPartial(t){let e=Xb();return e.source=t.source!==void 0&&t.source!==null?lt.fromPartial(t.source):void 0,e.metadata=t.metadata??void 0,e.id=t.id??void 0,e}};function Jb(){return{source:void 0,metadata:void 0,id:void 0}}var Vs={encode(t,e=new B){return t.source!==void 0&&lt.encode(t.source,e.uint32(10).fork()).join(),t.metadata!==void 0&&H.encode(H.wrap(t.metadata),e.uint32(18).fork()).join(),t.id!==void 0&&e.uint32(26).string(t.id),e},decode(t,e){let n=t instanceof C?t:new C(t),r=e===void 0?n.len:n.pos+e,o=Jb();for(;n.pos<r;){let i=n.uint32();switch(i>>>3){case 1:if(i!==10)break;o.source=lt.decode(n,n.uint32());continue;case 2:if(i!==18)break;o.metadata=H.unwrap(H.decode(n,n.uint32()));continue;case 3:if(i!==26)break;o.id=n.string();continue}if((i&7)===4||i===0)break;n.skip(i&7)}return o},create(t){return Vs.fromPartial(t??{})},fromPartial(t){let e=Jb();return e.source=t.source!==void 0&&t.source!==null?lt.fromPartial(t.source):void 0,e.metadata=t.metadata??void 0,e.id=t.id??void 0,e}};function Qb(){return{text:void 0,image:void 0,audio:void 0,video:void 0,document:void 0}}var Dn={encode(t,e=new B){return t.text!==void 0&&Ds.encode(t.text,e.uint32(10).fork()).join(),t.image!==void 0&&$s.encode(t.image,e.uint32(18).fork()).join(),t.audio!==void 0&&Gs.encode(t.audio,e.uint32(26).fork()).join(),t.video!==void 0&&Bs.encode(t.video,e.uint32(34).fork()).join(),t.document!==void 0&&Vs.encode(t.document,e.uint32(42).fork()).join(),e},decode(t,e){let n=t instanceof C?t:new C(t),r=e===void 0?n.len:n.pos+e,o=Qb();for(;n.pos<r;){let i=n.uint32();switch(i>>>3){case 1:if(i!==10)break;o.text=Ds.decode(n,n.uint32());continue;case 2:if(i!==18)break;o.image=$s.decode(n,n.uint32());continue;case 3:if(i!==26)break;o.audio=Gs.decode(n,n.uint32());continue;case 4:if(i!==34)break;o.video=Bs.decode(n,n.uint32());continue;case 5:if(i!==42)break;o.document=Vs.decode(n,n.uint32());continue}if((i&7)===4||i===0)break;n.skip(i&7)}return o},create(t){return Dn.fromPartial(t??{})},fromPartial(t){let e=Qb();return e.text=t.text!==void 0&&t.text!==null?Ds.fromPartial(t.text):void 0,e.image=t.image!==void 0&&t.image!==null?$s.fromPartial(t.image):void 0,e.audio=t.audio!==void 0&&t.audio!==null?Gs.fromPartial(t.audio):void 0,e.video=t.video!==void 0&&t.video!==null?Bs.fromPartial(t.video):void 0,e.document=t.document!==void 0&&t.document!==null?Vs.fromPartial(t.document):void 0,e}};function ey(){return{id:"",type:"",function:void 0,metadata:void 0,encryptedValue:void 0}}var Zs={encode(t,e=new B){return t.id!==""&&e.uint32(10).string(t.id),t.type!==""&&e.uint32(18).string(t.type),t.function!==void 0&&js.encode(t.function,e.uint32(26).fork()).join(),t.metadata!==void 0&&se.encode(se.wrap(t.metadata),e.uint32(34).fork()).join(),t.encryptedValue!==void 0&&e.uint32(42).string(t.encryptedValue),e},decode(t,e){let n=t instanceof C?t:new C(t),r=e===void 0?n.len:n.pos+e,o=ey();for(;n.pos<r;){let i=n.uint32();switch(i>>>3){case 1:if(i!==10)break;o.id=n.string();continue;case 2:if(i!==18)break;o.type=n.string();continue;case 3:if(i!==26)break;o.function=js.decode(n,n.uint32());continue;case 4:if(i!==34)break;o.metadata=se.unwrap(se.decode(n,n.uint32()));continue;case 5:if(i!==42)break;o.encryptedValue=n.string();continue}if((i&7)===4||i===0)break;n.skip(i&7)}return o},create(t){return Zs.fromPartial(t??{})},fromPartial(t){let e=ey();return e.id=t.id??"",e.type=t.type??"",e.function=t.function!==void 0&&t.function!==null?js.fromPartial(t.function):void 0,e.metadata=t.metadata??void 0,e.encryptedValue=t.encryptedValue??void 0,e}};function ty(){return{name:"",arguments:""}}var js={encode(t,e=new B){return t.name!==""&&e.uint32(10).string(t.name),t.arguments!==""&&e.uint32(18).string(t.arguments),e},decode(t,e){let n=t instanceof C?t:new C(t),r=e===void 0?n.len:n.pos+e,o=ty();for(;n.pos<r;){let i=n.uint32();switch(i>>>3){case 1:if(i!==10)break;o.name=n.string();continue;case 2:if(i!==18)break;o.arguments=n.string();continue}if((i&7)===4||i===0)break;n.skip(i&7)}return o},create(t){return js.fromPartial(t??{})},fromPartial(t){let e=ty();return e.name=t.name??"",e.arguments=t.arguments??"",e}};function ny(){return{id:"",role:"",content:void 0,name:void 0,toolCalls:[],toolCallId:void 0,error:void 0,contentParts:[],metadata:void 0,subagentRunId:void 0,encryptedValue:void 0,activityType:void 0,activityContent:void 0}}var $n={encode(t,e=new B){t.id!==""&&e.uint32(10).string(t.id),t.role!==""&&e.uint32(18).string(t.role),t.content!==void 0&&e.uint32(26).string(t.content),t.name!==void 0&&e.uint32(34).string(t.name);for(let n of t.toolCalls)Zs.encode(n,e.uint32(42).fork()).join();t.toolCallId!==void 0&&e.uint32(50).string(t.toolCallId),t.error!==void 0&&e.uint32(58).string(t.error);for(let n of t.contentParts)Dn.encode(n,e.uint32(66).fork()).join();return t.metadata!==void 0&&se.encode(se.wrap(t.metadata),e.uint32(74).fork()).join(),t.subagentRunId!==void 0&&e.uint32(82).string(t.subagentRunId),t.encryptedValue!==void 0&&e.uint32(90).string(t.encryptedValue),t.activityType!==void 0&&e.uint32(98).string(t.activityType),t.activityContent!==void 0&&se.encode(se.wrap(t.activityContent),e.uint32(106).fork()).join(),e},decode(t,e){let n=t instanceof C?t:new C(t),r=e===void 0?n.len:n.pos+e,o=ny();for(;n.pos<r;){let i=n.uint32();switch(i>>>3){case 1:if(i!==10)break;o.id=n.string();continue;case 2:if(i!==18)break;o.role=n.string();continue;case 3:if(i!==26)break;o.content=n.string();continue;case 4:if(i!==34)break;o.name=n.string();continue;case 5:if(i!==42)break;o.toolCalls.push(Zs.decode(n,n.uint32()));continue;case 6:if(i!==50)break;o.toolCallId=n.string();continue;case 7:if(i!==58)break;o.error=n.string();continue;case 8:if(i!==66)break;o.contentParts.push(Dn.decode(n,n.uint32()));continue;case 9:if(i!==74)break;o.metadata=se.unwrap(se.decode(n,n.uint32()));continue;case 10:if(i!==82)break;o.subagentRunId=n.string();continue;case 11:if(i!==90)break;o.encryptedValue=n.string();continue;case 12:if(i!==98)break;o.activityType=n.string();continue;case 13:if(i!==106)break;o.activityContent=se.unwrap(se.decode(n,n.uint32()));continue}if((i&7)===4||i===0)break;n.skip(i&7)}return o},create(t){return $n.fromPartial(t??{})},fromPartial(t){let e=ny();return e.id=t.id??"",e.role=t.role??"",e.content=t.content??void 0,e.name=t.name??void 0,e.toolCalls=t.toolCalls?.map(n=>Zs.fromPartial(n))||[],e.toolCallId=t.toolCallId??void 0,e.error=t.error??void 0,e.contentParts=t.contentParts?.map(n=>Dn.fromPartial(n))||[],e.metadata=t.metadata??void 0,e.subagentRunId=t.subagentRunId??void 0,e.encryptedValue=t.encryptedValue??void 0,e.activityType=t.activityType??void 0,e.activityContent=t.activityContent??void 0,e}};function ry(){return{name:"",description:"",parameters:void 0,metadata:void 0}}var Ws={encode(t,e=new B){return t.name!==""&&e.uint32(10).string(t.name),t.description!==""&&e.uint32(18).string(t.description),t.parameters!==void 0&&H.encode(H.wrap(t.parameters),e.uint32(26).fork()).join(),t.metadata!==void 0&&se.encode(se.wrap(t.metadata),e.uint32(34).fork()).join(),e},decode(t,e){let n=t instanceof C?t:new C(t),r=e===void 0?n.len:n.pos+e,o=ry();for(;n.pos<r;){let i=n.uint32();switch(i>>>3){case 1:if(i!==10)break;o.name=n.string();continue;case 2:if(i!==18)break;o.description=n.string();continue;case 3:if(i!==26)break;o.parameters=H.unwrap(H.decode(n,n.uint32()));continue;case 4:if(i!==34)break;o.metadata=se.unwrap(se.decode(n,n.uint32()));continue}if((i&7)===4||i===0)break;n.skip(i&7)}return o},create(t){return Ws.fromPartial(t??{})},fromPartial(t){let e=ry();return e.name=t.name??"",e.description=t.description??"",e.parameters=t.parameters??void 0,e.metadata=t.metadata??void 0,e}};function oy(){return{description:"",value:""}}var qs={encode(t,e=new B){return t.description!==""&&e.uint32(10).string(t.description),t.value!==""&&e.uint32(18).string(t.value),e},decode(t,e){let n=t instanceof C?t:new C(t),r=e===void 0?n.len:n.pos+e,o=oy();for(;n.pos<r;){let i=n.uint32();switch(i>>>3){case 1:if(i!==10)break;o.description=n.string();continue;case 2:if(i!==18)break;o.value=n.string();continue}if((i&7)===4||i===0)break;n.skip(i&7)}return o},create(t){return qs.fromPartial(t??{})},fromPartial(t){let e=oy();return e.description=t.description??"",e.value=t.value??"",e}};function iy(){return{interruptId:"",status:"",payload:void 0,metadata:void 0}}var Ys={encode(t,e=new B){return t.interruptId!==""&&e.uint32(10).string(t.interruptId),t.status!==""&&e.uint32(18).string(t.status),t.payload!==void 0&&H.encode(H.wrap(t.payload),e.uint32(26).fork()).join(),t.metadata!==void 0&&se.encode(se.wrap(t.metadata),e.uint32(34).fork()).join(),e},decode(t,e){let n=t instanceof C?t:new C(t),r=e===void 0?n.len:n.pos+e,o=iy();for(;n.pos<r;){let i=n.uint32();switch(i>>>3){case 1:if(i!==10)break;o.interruptId=n.string();continue;case 2:if(i!==18)break;o.status=n.string();continue;case 3:if(i!==26)break;o.payload=H.unwrap(H.decode(n,n.uint32()));continue;case 4:if(i!==34)break;o.metadata=se.unwrap(se.decode(n,n.uint32()));continue}if((i&7)===4||i===0)break;n.skip(i&7)}return o},create(t){return Ys.fromPartial(t??{})},fromPartial(t){let e=iy();return e.interruptId=t.interruptId??"",e.status=t.status??"",e.payload=t.payload??void 0,e.metadata=t.metadata??void 0,e}};function sy(){return{threadId:"",runId:"",parentRunId:void 0,state:void 0,messages:[],tools:[],context:[],forwardedProps:void 0,resume:[],protocolVersion:void 0}}var Ks={encode(t,e=new B){t.threadId!==""&&e.uint32(10).string(t.threadId),t.runId!==""&&e.uint32(18).string(t.runId),t.parentRunId!==void 0&&e.uint32(26).string(t.parentRunId),t.state!==void 0&&H.encode(H.wrap(t.state),e.uint32(34).fork()).join();for(let n of t.messages)$n.encode(n,e.uint32(42).fork()).join();for(let n of t.tools)Ws.encode(n,e.uint32(50).fork()).join();for(let n of t.context)qs.encode(n,e.uint32(58).fork()).join();t.forwardedProps!==void 0&&H.encode(H.wrap(t.forwardedProps),e.uint32(66).fork()).join();for(let n of t.resume)Ys.encode(n,e.uint32(74).fork()).join();return t.protocolVersion!==void 0&&e.uint32(82).string(t.protocolVersion),e},decode(t,e){let n=t instanceof C?t:new C(t),r=e===void 0?n.len:n.pos+e,o=sy();for(;n.pos<r;){let i=n.uint32();switch(i>>>3){case 1:if(i!==10)break;o.threadId=n.string();continue;case 2:if(i!==18)break;o.runId=n.string();continue;case 3:if(i!==26)break;o.parentRunId=n.string();continue;case 4:if(i!==34)break;o.state=H.unwrap(H.decode(n,n.uint32()));continue;case 5:if(i!==42)break;o.messages.push($n.decode(n,n.uint32()));continue;case 6:if(i!==50)break;o.tools.push(Ws.decode(n,n.uint32()));continue;case 7:if(i!==58)break;o.context.push(qs.decode(n,n.uint32()));continue;case 8:if(i!==66)break;o.forwardedProps=H.unwrap(H.decode(n,n.uint32()));continue;case 9:if(i!==74)break;o.resume.push(Ys.decode(n,n.uint32()));continue;case 10:if(i!==82)break;o.protocolVersion=n.string();continue}if((i&7)===4||i===0)break;n.skip(i&7)}return o},create(t){return Ks.fromPartial(t??{})},fromPartial(t){let e=sy();return e.threadId=t.threadId??"",e.runId=t.runId??"",e.parentRunId=t.parentRunId??void 0,e.state=t.state??void 0,e.messages=t.messages?.map(n=>$n.fromPartial(n))||[],e.tools=t.tools?.map(n=>Ws.fromPartial(n))||[],e.context=t.context?.map(n=>qs.fromPartial(n))||[],e.forwardedProps=t.forwardedProps??void 0,e.resume=t.resume?.map(n=>Ys.fromPartial(n))||[],e.protocolVersion=t.protocolVersion??void 0,e}};function ay(){return{id:"",reason:"",message:void 0,toolCallId:void 0,responseSchema:void 0,expiresAt:void 0,metadata:void 0,subagentRunId:void 0}}var Xs={encode(t,e=new B){return t.id!==""&&e.uint32(10).string(t.id),t.reason!==""&&e.uint32(18).string(t.reason),t.message!==void 0&&e.uint32(26).string(t.message),t.toolCallId!==void 0&&e.uint32(34).string(t.toolCallId),t.responseSchema!==void 0&&H.encode(H.wrap(t.responseSchema),e.uint32(42).fork()).join(),t.expiresAt!==void 0&&e.uint32(50).string(t.expiresAt),t.metadata!==void 0&&H.encode(H.wrap(t.metadata),e.uint32(58).fork()).join(),t.subagentRunId!==void 0&&e.uint32(66).string(t.subagentRunId),e},decode(t,e){let n=t instanceof C?t:new C(t),r=e===void 0?n.len:n.pos+e,o=ay();for(;n.pos<r;){let i=n.uint32();switch(i>>>3){case 1:if(i!==10)break;o.id=n.string();continue;case 2:if(i!==18)break;o.reason=n.string();continue;case 3:if(i!==26)break;o.message=n.string();continue;case 4:if(i!==34)break;o.toolCallId=n.string();continue;case 5:if(i!==42)break;o.responseSchema=H.unwrap(H.decode(n,n.uint32()));continue;case 6:if(i!==50)break;o.expiresAt=n.string();continue;case 7:if(i!==58)break;o.metadata=H.unwrap(H.decode(n,n.uint32()));continue;case 8:if(i!==66)break;o.subagentRunId=n.string();continue}if((i&7)===4||i===0)break;n.skip(i&7)}return o},create(t){return Xs.fromPartial(t??{})},fromPartial(t){let e=ay();return e.id=t.id??"",e.reason=t.reason??"",e.message=t.message??void 0,e.toolCallId=t.toolCallId??void 0,e.responseSchema=t.responseSchema??void 0,e.expiresAt=t.expiresAt??void 0,e.metadata=t.metadata??void 0,e.subagentRunId=t.subagentRunId??void 0,e}},bA=(function(t){return t[t.TEXT_MESSAGE_START=0]="TEXT_MESSAGE_START",t[t.TEXT_MESSAGE_CONTENT=1]="TEXT_MESSAGE_CONTENT",t[t.TEXT_MESSAGE_END=2]="TEXT_MESSAGE_END",t[t.TOOL_CALL_START=3]="TOOL_CALL_START",t[t.TOOL_CALL_ARGS=4]="TOOL_CALL_ARGS",t[t.TOOL_CALL_END=5]="TOOL_CALL_END",t[t.STATE_SNAPSHOT=6]="STATE_SNAPSHOT",t[t.STATE_DELTA=7]="STATE_DELTA",t[t.MESSAGES_SNAPSHOT=8]="MESSAGES_SNAPSHOT",t[t.RAW=9]="RAW",t[t.CUSTOM=10]="CUSTOM",t[t.RUN_STARTED=11]="RUN_STARTED",t[t.RUN_FINISHED=12]="RUN_FINISHED",t[t.RUN_ERROR=13]="RUN_ERROR",t[t.STEP_STARTED=14]="STEP_STARTED",t[t.STEP_FINISHED=15]="STEP_FINISHED",t[t.SUBAGENT_STARTED=16]="SUBAGENT_STARTED",t[t.SUBAGENT_FINISHED=17]="SUBAGENT_FINISHED",t[t.SUBAGENT_ERROR=18]="SUBAGENT_ERROR",t[t.TEXT_MESSAGE_CHUNK=19]="TEXT_MESSAGE_CHUNK",t[t.TOOL_CALL_CHUNK=20]="TOOL_CALL_CHUNK",t[t.TOOL_CALL_RESULT=21]="TOOL_CALL_RESULT",t[t.ACTIVITY_SNAPSHOT=22]="ACTIVITY_SNAPSHOT",t[t.ACTIVITY_DELTA=23]="ACTIVITY_DELTA",t[t.REASONING_START=24]="REASONING_START",t[t.REASONING_MESSAGE_START=25]="REASONING_MESSAGE_START",t[t.REASONING_MESSAGE_CONTENT=26]="REASONING_MESSAGE_CONTENT",t[t.REASONING_MESSAGE_END=27]="REASONING_MESSAGE_END",t[t.REASONING_MESSAGE_CHUNK=28]="REASONING_MESSAGE_CHUNK",t[t.REASONING_END=29]="REASONING_END",t[t.REASONING_ENCRYPTED_VALUE=30]="REASONING_ENCRYPTED_VALUE",t[t.UNRECOGNIZED=-1]="UNRECOGNIZED",t})({});function ly(){return{type:0,timestamp:void 0,rawEvent:void 0,metadata:void 0}}var z={encode(t,e=new B){return t.type!==0&&e.uint32(8).int32(t.type),t.timestamp!==void 0&&e.uint32(16).int64(t.timestamp),t.rawEvent!==void 0&&H.encode(H.wrap(t.rawEvent),e.uint32(26).fork()).join(),t.metadata!==void 0&&se.encode(se.wrap(t.metadata),e.uint32(34).fork()).join(),e},decode(t,e){let n=t instanceof C?t:new C(t),r=e===void 0?n.len:n.pos+e,o=ly();for(;n.pos<r;){let i=n.uint32();switch(i>>>3){case 1:if(i!==8)break;o.type=n.int32();continue;case 2:if(i!==16)break;o.timestamp=Pn(n.int64());continue;case 3:if(i!==26)break;o.rawEvent=H.unwrap(H.decode(n,n.uint32()));continue;case 4:if(i!==34)break;o.metadata=se.unwrap(se.decode(n,n.uint32()));continue}if((i&7)===4||i===0)break;n.skip(i&7)}return o},create(t){return z.fromPartial(t??{})},fromPartial(t){let e=ly();return e.type=t.type??0,e.timestamp=t.timestamp??void 0,e.rawEvent=t.rawEvent??void 0,e.metadata=t.metadata??void 0,e}};function cy(){return{baseEvent:void 0,messageId:"",role:void 0,name:void 0,subagentRunId:void 0}}var Js={encode(t,e=new B){return t.baseEvent!==void 0&&z.encode(t.baseEvent,e.uint32(10).fork()).join(),t.messageId!==""&&e.uint32(18).string(t.messageId),t.role!==void 0&&e.uint32(26).string(t.role),t.name!==void 0&&e.uint32(34).string(t.name),t.subagentRunId!==void 0&&e.uint32(42).string(t.subagentRunId),e},decode(t,e){let n=t instanceof C?t:new C(t),r=e===void 0?n.len:n.pos+e,o=cy();for(;n.pos<r;){let i=n.uint32();switch(i>>>3){case 1:if(i!==10)break;o.baseEvent=z.decode(n,n.uint32());continue;case 2:if(i!==18)break;o.messageId=n.string();continue;case 3:if(i!==26)break;o.role=n.string();continue;case 4:if(i!==34)break;o.name=n.string();continue;case 5:if(i!==42)break;o.subagentRunId=n.string();continue}if((i&7)===4||i===0)break;n.skip(i&7)}return o},create(t){return Js.fromPartial(t??{})},fromPartial(t){let e=cy();return e.baseEvent=t.baseEvent!==void 0&&t.baseEvent!==null?z.fromPartial(t.baseEvent):void 0,e.messageId=t.messageId??"",e.role=t.role??void 0,e.name=t.name??void 0,e.subagentRunId=t.subagentRunId??void 0,e}};function dy(){return{baseEvent:void 0,messageId:"",delta:"",subagentRunId:void 0}}var Qs={encode(t,e=new B){return t.baseEvent!==void 0&&z.encode(t.baseEvent,e.uint32(10).fork()).join(),t.messageId!==""&&e.uint32(18).string(t.messageId),t.delta!==""&&e.uint32(26).string(t.delta),t.subagentRunId!==void 0&&e.uint32(34).string(t.subagentRunId),e},decode(t,e){let n=t instanceof C?t:new C(t),r=e===void 0?n.len:n.pos+e,o=dy();for(;n.pos<r;){let i=n.uint32();switch(i>>>3){case 1:if(i!==10)break;o.baseEvent=z.decode(n,n.uint32());continue;case 2:if(i!==18)break;o.messageId=n.string();continue;case 3:if(i!==26)break;o.delta=n.string();continue;case 4:if(i!==34)break;o.subagentRunId=n.string();continue}if((i&7)===4||i===0)break;n.skip(i&7)}return o},create(t){return Qs.fromPartial(t??{})},fromPartial(t){let e=dy();return e.baseEvent=t.baseEvent!==void 0&&t.baseEvent!==null?z.fromPartial(t.baseEvent):void 0,e.messageId=t.messageId??"",e.delta=t.delta??"",e.subagentRunId=t.subagentRunId??void 0,e}};function uy(){return{baseEvent:void 0,messageId:"",subagentRunId:void 0}}var ea={encode(t,e=new B){return t.baseEvent!==void 0&&z.encode(t.baseEvent,e.uint32(10).fork()).join(),t.messageId!==""&&e.uint32(18).string(t.messageId),t.subagentRunId!==void 0&&e.uint32(26).string(t.subagentRunId),e},decode(t,e){let n=t instanceof C?t:new C(t),r=e===void 0?n.len:n.pos+e,o=uy();for(;n.pos<r;){let i=n.uint32();switch(i>>>3){case 1:if(i!==10)break;o.baseEvent=z.decode(n,n.uint32());continue;case 2:if(i!==18)break;o.messageId=n.string();continue;case 3:if(i!==26)break;o.subagentRunId=n.string();continue}if((i&7)===4||i===0)break;n.skip(i&7)}return o},create(t){return ea.fromPartial(t??{})},fromPartial(t){let e=uy();return e.baseEvent=t.baseEvent!==void 0&&t.baseEvent!==null?z.fromPartial(t.baseEvent):void 0,e.messageId=t.messageId??"",e.subagentRunId=t.subagentRunId??void 0,e}};function hy(){return{baseEvent:void 0,messageId:void 0,role:void 0,delta:void 0,name:void 0,subagentRunId:void 0}}var ta={encode(t,e=new B){return t.baseEvent!==void 0&&z.encode(t.baseEvent,e.uint32(10).fork()).join(),t.messageId!==void 0&&e.uint32(18).string(t.messageId),t.role!==void 0&&e.uint32(26).string(t.role),t.delta!==void 0&&e.uint32(34).string(t.delta),t.name!==void 0&&e.uint32(42).string(t.name),t.subagentRunId!==void 0&&e.uint32(50).string(t.subagentRunId),e},decode(t,e){let n=t instanceof C?t:new C(t),r=e===void 0?n.len:n.pos+e,o=hy();for(;n.pos<r;){let i=n.uint32();switch(i>>>3){case 1:if(i!==10)break;o.baseEvent=z.decode(n,n.uint32());continue;case 2:if(i!==18)break;o.messageId=n.string();continue;case 3:if(i!==26)break;o.role=n.string();continue;case 4:if(i!==34)break;o.delta=n.string();continue;case 5:if(i!==42)break;o.name=n.string();continue;case 6:if(i!==50)break;o.subagentRunId=n.string();continue}if((i&7)===4||i===0)break;n.skip(i&7)}return o},create(t){return ta.fromPartial(t??{})},fromPartial(t){let e=hy();return e.baseEvent=t.baseEvent!==void 0&&t.baseEvent!==null?z.fromPartial(t.baseEvent):void 0,e.messageId=t.messageId??void 0,e.role=t.role??void 0,e.delta=t.delta??void 0,e.name=t.name??void 0,e.subagentRunId=t.subagentRunId??void 0,e}};function py(){return{baseEvent:void 0,toolCallId:"",toolCallName:"",parentMessageId:void 0,subagentRunId:void 0}}var na={encode(t,e=new B){return t.baseEvent!==void 0&&z.encode(t.baseEvent,e.uint32(10).fork()).join(),t.toolCallId!==""&&e.uint32(18).string(t.toolCallId),t.toolCallName!==""&&e.uint32(26).string(t.toolCallName),t.parentMessageId!==void 0&&e.uint32(34).string(t.parentMessageId),t.subagentRunId!==void 0&&e.uint32(42).string(t.subagentRunId),e},decode(t,e){let n=t instanceof C?t:new C(t),r=e===void 0?n.len:n.pos+e,o=py();for(;n.pos<r;){let i=n.uint32();switch(i>>>3){case 1:if(i!==10)break;o.baseEvent=z.decode(n,n.uint32());continue;case 2:if(i!==18)break;o.toolCallId=n.string();continue;case 3:if(i!==26)break;o.toolCallName=n.string();continue;case 4:if(i!==34)break;o.parentMessageId=n.string();continue;case 5:if(i!==42)break;o.subagentRunId=n.string();continue}if((i&7)===4||i===0)break;n.skip(i&7)}return o},create(t){return na.fromPartial(t??{})},fromPartial(t){let e=py();return e.baseEvent=t.baseEvent!==void 0&&t.baseEvent!==null?z.fromPartial(t.baseEvent):void 0,e.toolCallId=t.toolCallId??"",e.toolCallName=t.toolCallName??"",e.parentMessageId=t.parentMessageId??void 0,e.subagentRunId=t.subagentRunId??void 0,e}};function fy(){return{baseEvent:void 0,toolCallId:"",delta:"",subagentRunId:void 0}}var ra={encode(t,e=new B){return t.baseEvent!==void 0&&z.encode(t.baseEvent,e.uint32(10).fork()).join(),t.toolCallId!==""&&e.uint32(18).string(t.toolCallId),t.delta!==""&&e.uint32(26).string(t.delta),t.subagentRunId!==void 0&&e.uint32(34).string(t.subagentRunId),e},decode(t,e){let n=t instanceof C?t:new C(t),r=e===void 0?n.len:n.pos+e,o=fy();for(;n.pos<r;){let i=n.uint32();switch(i>>>3){case 1:if(i!==10)break;o.baseEvent=z.decode(n,n.uint32());continue;case 2:if(i!==18)break;o.toolCallId=n.string();continue;case 3:if(i!==26)break;o.delta=n.string();continue;case 4:if(i!==34)break;o.subagentRunId=n.string();continue}if((i&7)===4||i===0)break;n.skip(i&7)}return o},create(t){return ra.fromPartial(t??{})},fromPartial(t){let e=fy();return e.baseEvent=t.baseEvent!==void 0&&t.baseEvent!==null?z.fromPartial(t.baseEvent):void 0,e.toolCallId=t.toolCallId??"",e.delta=t.delta??"",e.subagentRunId=t.subagentRunId??void 0,e}};function my(){return{baseEvent:void 0,toolCallId:"",subagentRunId:void 0}}var oa={encode(t,e=new B){return t.baseEvent!==void 0&&z.encode(t.baseEvent,e.uint32(10).fork()).join(),t.toolCallId!==""&&e.uint32(18).string(t.toolCallId),t.subagentRunId!==void 0&&e.uint32(26).string(t.subagentRunId),e},decode(t,e){let n=t instanceof C?t:new C(t),r=e===void 0?n.len:n.pos+e,o=my();for(;n.pos<r;){let i=n.uint32();switch(i>>>3){case 1:if(i!==10)break;o.baseEvent=z.decode(n,n.uint32());continue;case 2:if(i!==18)break;o.toolCallId=n.string();continue;case 3:if(i!==26)break;o.subagentRunId=n.string();continue}if((i&7)===4||i===0)break;n.skip(i&7)}return o},create(t){return oa.fromPartial(t??{})},fromPartial(t){let e=my();return e.baseEvent=t.baseEvent!==void 0&&t.baseEvent!==null?z.fromPartial(t.baseEvent):void 0,e.toolCallId=t.toolCallId??"",e.subagentRunId=t.subagentRunId??void 0,e}};function gy(){return{baseEvent:void 0,toolCallId:void 0,toolCallName:void 0,parentMessageId:void 0,delta:void 0,subagentRunId:void 0}}var ia={encode(t,e=new B){return t.baseEvent!==void 0&&z.encode(t.baseEvent,e.uint32(10).fork()).join(),t.toolCallId!==void 0&&e.uint32(18).string(t.toolCallId),t.toolCallName!==void 0&&e.uint32(26).string(t.toolCallName),t.parentMessageId!==void 0&&e.uint32(34).string(t.parentMessageId),t.delta!==void 0&&e.uint32(42).string(t.delta),t.subagentRunId!==void 0&&e.uint32(50).string(t.subagentRunId),e},decode(t,e){let n=t instanceof C?t:new C(t),r=e===void 0?n.len:n.pos+e,o=gy();for(;n.pos<r;){let i=n.uint32();switch(i>>>3){case 1:if(i!==10)break;o.baseEvent=z.decode(n,n.uint32());continue;case 2:if(i!==18)break;o.toolCallId=n.string();continue;case 3:if(i!==26)break;o.toolCallName=n.string();continue;case 4:if(i!==34)break;o.parentMessageId=n.string();continue;case 5:if(i!==42)break;o.delta=n.string();continue;case 6:if(i!==50)break;o.subagentRunId=n.string();continue}if((i&7)===4||i===0)break;n.skip(i&7)}return o},create(t){return ia.fromPartial(t??{})},fromPartial(t){let e=gy();return e.baseEvent=t.baseEvent!==void 0&&t.baseEvent!==null?z.fromPartial(t.baseEvent):void 0,e.toolCallId=t.toolCallId??void 0,e.toolCallName=t.toolCallName??void 0,e.parentMessageId=t.parentMessageId??void 0,e.delta=t.delta??void 0,e.subagentRunId=t.subagentRunId??void 0,e}};function vy(){return{baseEvent:void 0,subagentRunId:void 0,messageId:"",toolCallId:"",content:void 0,role:void 0,contentParts:[]}}var sa={encode(t,e=new B){t.baseEvent!==void 0&&z.encode(t.baseEvent,e.uint32(10).fork()).join(),t.subagentRunId!==void 0&&e.uint32(18).string(t.subagentRunId),t.messageId!==""&&e.uint32(26).string(t.messageId),t.toolCallId!==""&&e.uint32(34).string(t.toolCallId),t.content!==void 0&&e.uint32(42).string(t.content),t.role!==void 0&&e.uint32(50).string(t.role);for(let n of t.contentParts)Dn.encode(n,e.uint32(58).fork()).join();return e},decode(t,e){let n=t instanceof C?t:new C(t),r=e===void 0?n.len:n.pos+e,o=vy();for(;n.pos<r;){let i=n.uint32();switch(i>>>3){case 1:if(i!==10)break;o.baseEvent=z.decode(n,n.uint32());continue;case 2:if(i!==18)break;o.subagentRunId=n.string();continue;case 3:if(i!==26)break;o.messageId=n.string();continue;case 4:if(i!==34)break;o.toolCallId=n.string();continue;case 5:if(i!==42)break;o.content=n.string();continue;case 6:if(i!==50)break;o.role=n.string();continue;case 7:if(i!==58)break;o.contentParts.push(Dn.decode(n,n.uint32()));continue}if((i&7)===4||i===0)break;n.skip(i&7)}return o},create(t){return sa.fromPartial(t??{})},fromPartial(t){let e=vy();return e.baseEvent=t.baseEvent!==void 0&&t.baseEvent!==null?z.fromPartial(t.baseEvent):void 0,e.subagentRunId=t.subagentRunId??void 0,e.messageId=t.messageId??"",e.toolCallId=t.toolCallId??"",e.content=t.content??void 0,e.role=t.role??void 0,e.contentParts=t.contentParts?.map(n=>Dn.fromPartial(n))||[],e}};function by(){return{baseEvent:void 0,snapshot:void 0,subagentRunId:void 0}}var aa={encode(t,e=new B){return t.baseEvent!==void 0&&z.encode(t.baseEvent,e.uint32(10).fork()).join(),t.snapshot!==void 0&&H.encode(H.wrap(t.snapshot),e.uint32(18).fork()).join(),t.subagentRunId!==void 0&&e.uint32(26).string(t.subagentRunId),e},decode(t,e){let n=t instanceof C?t:new C(t),r=e===void 0?n.len:n.pos+e,o=by();for(;n.pos<r;){let i=n.uint32();switch(i>>>3){case 1:if(i!==10)break;o.baseEvent=z.decode(n,n.uint32());continue;case 2:if(i!==18)break;o.snapshot=H.unwrap(H.decode(n,n.uint32()));continue;case 3:if(i!==26)break;o.subagentRunId=n.string();continue}if((i&7)===4||i===0)break;n.skip(i&7)}return o},create(t){return aa.fromPartial(t??{})},fromPartial(t){let e=by();return e.baseEvent=t.baseEvent!==void 0&&t.baseEvent!==null?z.fromPartial(t.baseEvent):void 0,e.snapshot=t.snapshot??void 0,e.subagentRunId=t.subagentRunId??void 0,e}};function yy(){return{baseEvent:void 0,delta:[],subagentRunId:void 0}}var la={encode(t,e=new B){t.baseEvent!==void 0&&z.encode(t.baseEvent,e.uint32(10).fork()).join();for(let n of t.delta)zn.encode(n,e.uint32(18).fork()).join();return t.subagentRunId!==void 0&&e.uint32(26).string(t.subagentRunId),e},decode(t,e){let n=t instanceof C?t:new C(t),r=e===void 0?n.len:n.pos+e,o=yy();for(;n.pos<r;){let i=n.uint32();switch(i>>>3){case 1:if(i!==10)break;o.baseEvent=z.decode(n,n.uint32());continue;case 2:if(i!==18)break;o.delta.push(zn.decode(n,n.uint32()));continue;case 3:if(i!==26)break;o.subagentRunId=n.string();continue}if((i&7)===4||i===0)break;n.skip(i&7)}return o},create(t){return la.fromPartial(t??{})},fromPartial(t){let e=yy();return e.baseEvent=t.baseEvent!==void 0&&t.baseEvent!==null?z.fromPartial(t.baseEvent):void 0,e.delta=t.delta?.map(n=>zn.fromPartial(n))||[],e.subagentRunId=t.subagentRunId??void 0,e}};function wy(){return{baseEvent:void 0,messages:[]}}var ca={encode(t,e=new B){t.baseEvent!==void 0&&z.encode(t.baseEvent,e.uint32(10).fork()).join();for(let n of t.messages)$n.encode(n,e.uint32(18).fork()).join();return e},decode(t,e){let n=t instanceof C?t:new C(t),r=e===void 0?n.len:n.pos+e,o=wy();for(;n.pos<r;){let i=n.uint32();switch(i>>>3){case 1:if(i!==10)break;o.baseEvent=z.decode(n,n.uint32());continue;case 2:if(i!==18)break;o.messages.push($n.decode(n,n.uint32()));continue}if((i&7)===4||i===0)break;n.skip(i&7)}return o},create(t){return ca.fromPartial(t??{})},fromPartial(t){let e=wy();return e.baseEvent=t.baseEvent!==void 0&&t.baseEvent!==null?z.fromPartial(t.baseEvent):void 0,e.messages=t.messages?.map(n=>$n.fromPartial(n))||[],e}};function xy(){return{baseEvent:void 0,subagentRunId:void 0,messageId:"",activityType:"",content:void 0,replace:void 0}}var da={encode(t,e=new B){return t.baseEvent!==void 0&&z.encode(t.baseEvent,e.uint32(10).fork()).join(),t.subagentRunId!==void 0&&e.uint32(18).string(t.subagentRunId),t.messageId!==""&&e.uint32(26).string(t.messageId),t.activityType!==""&&e.uint32(34).string(t.activityType),t.content!==void 0&&se.encode(se.wrap(t.content),e.uint32(42).fork()).join(),t.replace!==void 0&&e.uint32(48).bool(t.replace),e},decode(t,e){let n=t instanceof C?t:new C(t),r=e===void 0?n.len:n.pos+e,o=xy();for(;n.pos<r;){let i=n.uint32();switch(i>>>3){case 1:if(i!==10)break;o.baseEvent=z.decode(n,n.uint32());continue;case 2:if(i!==18)break;o.subagentRunId=n.string();continue;case 3:if(i!==26)break;o.messageId=n.string();continue;case 4:if(i!==34)break;o.activityType=n.string();continue;case 5:if(i!==42)break;o.content=se.unwrap(se.decode(n,n.uint32()));continue;case 6:if(i!==48)break;o.replace=n.bool();continue}if((i&7)===4||i===0)break;n.skip(i&7)}return o},create(t){return da.fromPartial(t??{})},fromPartial(t){let e=xy();return e.baseEvent=t.baseEvent!==void 0&&t.baseEvent!==null?z.fromPartial(t.baseEvent):void 0,e.subagentRunId=t.subagentRunId??void 0,e.messageId=t.messageId??"",e.activityType=t.activityType??"",e.content=t.content??void 0,e.replace=t.replace??void 0,e}};function Ey(){return{baseEvent:void 0,subagentRunId:void 0,messageId:"",activityType:"",patch:[]}}var ua={encode(t,e=new B){t.baseEvent!==void 0&&z.encode(t.baseEvent,e.uint32(10).fork()).join(),t.subagentRunId!==void 0&&e.uint32(18).string(t.subagentRunId),t.messageId!==""&&e.uint32(26).string(t.messageId),t.activityType!==""&&e.uint32(34).string(t.activityType);for(let n of t.patch)zn.encode(n,e.uint32(42).fork()).join();return e},decode(t,e){let n=t instanceof C?t:new C(t),r=e===void 0?n.len:n.pos+e,o=Ey();for(;n.pos<r;){let i=n.uint32();switch(i>>>3){case 1:if(i!==10)break;o.baseEvent=z.decode(n,n.uint32());continue;case 2:if(i!==18)break;o.subagentRunId=n.string();continue;case 3:if(i!==26)break;o.messageId=n.string();continue;case 4:if(i!==34)break;o.activityType=n.string();continue;case 5:if(i!==42)break;o.patch.push(zn.decode(n,n.uint32()));continue}if((i&7)===4||i===0)break;n.skip(i&7)}return o},create(t){return ua.fromPartial(t??{})},fromPartial(t){let e=Ey();return e.baseEvent=t.baseEvent!==void 0&&t.baseEvent!==null?z.fromPartial(t.baseEvent):void 0,e.subagentRunId=t.subagentRunId??void 0,e.messageId=t.messageId??"",e.activityType=t.activityType??"",e.patch=t.patch?.map(n=>zn.fromPartial(n))||[],e}};function _y(){return{baseEvent:void 0,event:void 0,source:void 0,subagentRunId:void 0}}var ha={encode(t,e=new B){return t.baseEvent!==void 0&&z.encode(t.baseEvent,e.uint32(10).fork()).join(),t.event!==void 0&&H.encode(H.wrap(t.event),e.uint32(18).fork()).join(),t.source!==void 0&&e.uint32(26).string(t.source),t.subagentRunId!==void 0&&e.uint32(34).string(t.subagentRunId),e},decode(t,e){let n=t instanceof C?t:new C(t),r=e===void 0?n.len:n.pos+e,o=_y();for(;n.pos<r;){let i=n.uint32();switch(i>>>3){case 1:if(i!==10)break;o.baseEvent=z.decode(n,n.uint32());continue;case 2:if(i!==18)break;o.event=H.unwrap(H.decode(n,n.uint32()));continue;case 3:if(i!==26)break;o.source=n.string();continue;case 4:if(i!==34)break;o.subagentRunId=n.string();continue}if((i&7)===4||i===0)break;n.skip(i&7)}return o},create(t){return ha.fromPartial(t??{})},fromPartial(t){let e=_y();return e.baseEvent=t.baseEvent!==void 0&&t.baseEvent!==null?z.fromPartial(t.baseEvent):void 0,e.event=t.event??void 0,e.source=t.source??void 0,e.subagentRunId=t.subagentRunId??void 0,e}};function Ty(){return{baseEvent:void 0,name:"",value:void 0,subagentRunId:void 0}}var pa={encode(t,e=new B){return t.baseEvent!==void 0&&z.encode(t.baseEvent,e.uint32(10).fork()).join(),t.name!==""&&e.uint32(18).string(t.name),t.value!==void 0&&H.encode(H.wrap(t.value),e.uint32(26).fork()).join(),t.subagentRunId!==void 0&&e.uint32(34).string(t.subagentRunId),e},decode(t,e){let n=t instanceof C?t:new C(t),r=e===void 0?n.len:n.pos+e,o=Ty();for(;n.pos<r;){let i=n.uint32();switch(i>>>3){case 1:if(i!==10)break;o.baseEvent=z.decode(n,n.uint32());continue;case 2:if(i!==18)break;o.name=n.string();continue;case 3:if(i!==26)break;o.value=H.unwrap(H.decode(n,n.uint32()));continue;case 4:if(i!==34)break;o.subagentRunId=n.string();continue}if((i&7)===4||i===0)break;n.skip(i&7)}return o},create(t){return pa.fromPartial(t??{})},fromPartial(t){let e=Ty();return e.baseEvent=t.baseEvent!==void 0&&t.baseEvent!==null?z.fromPartial(t.baseEvent):void 0,e.name=t.name??"",e.value=t.value??void 0,e.subagentRunId=t.subagentRunId??void 0,e}};function Sy(){return{baseEvent:void 0,threadId:"",runId:"",parentRunId:void 0,input:void 0,protocolVersion:void 0}}var fa={encode(t,e=new B){return t.baseEvent!==void 0&&z.encode(t.baseEvent,e.uint32(10).fork()).join(),t.threadId!==""&&e.uint32(18).string(t.threadId),t.runId!==""&&e.uint32(26).string(t.runId),t.parentRunId!==void 0&&e.uint32(34).string(t.parentRunId),t.input!==void 0&&Ks.encode(t.input,e.uint32(42).fork()).join(),t.protocolVersion!==void 0&&e.uint32(50).string(t.protocolVersion),e},decode(t,e){let n=t instanceof C?t:new C(t),r=e===void 0?n.len:n.pos+e,o=Sy();for(;n.pos<r;){let i=n.uint32();switch(i>>>3){case 1:if(i!==10)break;o.baseEvent=z.decode(n,n.uint32());continue;case 2:if(i!==18)break;o.threadId=n.string();continue;case 3:if(i!==26)break;o.runId=n.string();continue;case 4:if(i!==34)break;o.parentRunId=n.string();continue;case 5:if(i!==42)break;o.input=Ks.decode(n,n.uint32());continue;case 6:if(i!==50)break;o.protocolVersion=n.string();continue}if((i&7)===4||i===0)break;n.skip(i&7)}return o},create(t){return fa.fromPartial(t??{})},fromPartial(t){let e=Sy();return e.baseEvent=t.baseEvent!==void 0&&t.baseEvent!==null?z.fromPartial(t.baseEvent):void 0,e.threadId=t.threadId??"",e.runId=t.runId??"",e.parentRunId=t.parentRunId??void 0,e.input=t.input!==void 0&&t.input!==null?Ks.fromPartial(t.input):void 0,e.protocolVersion=t.protocolVersion??void 0,e}};function ky(){return{baseEvent:void 0,threadId:"",runId:"",result:void 0,outcome:"",interrupts:[],usage:[],pendingToolCallIds:[]}}var ma={encode(t,e=new B){t.baseEvent!==void 0&&z.encode(t.baseEvent,e.uint32(10).fork()).join(),t.threadId!==""&&e.uint32(18).string(t.threadId),t.runId!==""&&e.uint32(26).string(t.runId),t.result!==void 0&&H.encode(H.wrap(t.result),e.uint32(34).fork()).join(),t.outcome!==""&&e.uint32(42).string(t.outcome);for(let n of t.interrupts)Xs.encode(n,e.uint32(50).fork()).join();for(let n of t.usage)Un.encode(n,e.uint32(58).fork()).join();for(let n of t.pendingToolCallIds)e.uint32(66).string(n);return e},decode(t,e){let n=t instanceof C?t:new C(t),r=e===void 0?n.len:n.pos+e,o=ky();for(;n.pos<r;){let i=n.uint32();switch(i>>>3){case 1:if(i!==10)break;o.baseEvent=z.decode(n,n.uint32());continue;case 2:if(i!==18)break;o.threadId=n.string();continue;case 3:if(i!==26)break;o.runId=n.string();continue;case 4:if(i!==34)break;o.result=H.unwrap(H.decode(n,n.uint32()));continue;case 5:if(i!==42)break;o.outcome=n.string();continue;case 6:if(i!==50)break;o.interrupts.push(Xs.decode(n,n.uint32()));continue;case 7:if(i!==58)break;o.usage.push(Un.decode(n,n.uint32()));continue;case 8:if(i!==66)break;o.pendingToolCallIds.push(n.string());continue}if((i&7)===4||i===0)break;n.skip(i&7)}return o},create(t){return ma.fromPartial(t??{})},fromPartial(t){let e=ky();return e.baseEvent=t.baseEvent!==void 0&&t.baseEvent!==null?z.fromPartial(t.baseEvent):void 0,e.threadId=t.threadId??"",e.runId=t.runId??"",e.result=t.result??void 0,e.outcome=t.outcome??"",e.interrupts=t.interrupts?.map(n=>Xs.fromPartial(n))||[],e.usage=t.usage?.map(n=>Un.fromPartial(n))||[],e.pendingToolCallIds=t.pendingToolCallIds?.map(n=>n)||[],e}};function Ay(){return{baseEvent:void 0,code:void 0,message:"",usage:[]}}var ga={encode(t,e=new B){t.baseEvent!==void 0&&z.encode(t.baseEvent,e.uint32(10).fork()).join(),t.code!==void 0&&e.uint32(18).string(t.code),t.message!==""&&e.uint32(26).string(t.message);for(let n of t.usage)Un.encode(n,e.uint32(34).fork()).join();return e},decode(t,e){let n=t instanceof C?t:new C(t),r=e===void 0?n.len:n.pos+e,o=Ay();for(;n.pos<r;){let i=n.uint32();switch(i>>>3){case 1:if(i!==10)break;o.baseEvent=z.decode(n,n.uint32());continue;case 2:if(i!==18)break;o.code=n.string();continue;case 3:if(i!==26)break;o.message=n.string();continue;case 4:if(i!==34)break;o.usage.push(Un.decode(n,n.uint32()));continue}if((i&7)===4||i===0)break;n.skip(i&7)}return o},create(t){return ga.fromPartial(t??{})},fromPartial(t){let e=Ay();return e.baseEvent=t.baseEvent!==void 0&&t.baseEvent!==null?z.fromPartial(t.baseEvent):void 0,e.code=t.code??void 0,e.message=t.message??"",e.usage=t.usage?.map(n=>Un.fromPartial(n))||[],e}};function Ry(){return{baseEvent:void 0,stepName:"",subagentRunId:void 0}}var va={encode(t,e=new B){return t.baseEvent!==void 0&&z.encode(t.baseEvent,e.uint32(10).fork()).join(),t.stepName!==""&&e.uint32(18).string(t.stepName),t.subagentRunId!==void 0&&e.uint32(26).string(t.subagentRunId),e},decode(t,e){let n=t instanceof C?t:new C(t),r=e===void 0?n.len:n.pos+e,o=Ry();for(;n.pos<r;){let i=n.uint32();switch(i>>>3){case 1:if(i!==10)break;o.baseEvent=z.decode(n,n.uint32());continue;case 2:if(i!==18)break;o.stepName=n.string();continue;case 3:if(i!==26)break;o.subagentRunId=n.string();continue}if((i&7)===4||i===0)break;n.skip(i&7)}return o},create(t){return va.fromPartial(t??{})},fromPartial(t){let e=Ry();return e.baseEvent=t.baseEvent!==void 0&&t.baseEvent!==null?z.fromPartial(t.baseEvent):void 0,e.stepName=t.stepName??"",e.subagentRunId=t.subagentRunId??void 0,e}};function Iy(){return{baseEvent:void 0,stepName:"",subagentRunId:void 0}}var ba={encode(t,e=new B){return t.baseEvent!==void 0&&z.encode(t.baseEvent,e.uint32(10).fork()).join(),t.stepName!==""&&e.uint32(18).string(t.stepName),t.subagentRunId!==void 0&&e.uint32(26).string(t.subagentRunId),e},decode(t,e){let n=t instanceof C?t:new C(t),r=e===void 0?n.len:n.pos+e,o=Iy();for(;n.pos<r;){let i=n.uint32();switch(i>>>3){case 1:if(i!==10)break;o.baseEvent=z.decode(n,n.uint32());continue;case 2:if(i!==18)break;o.stepName=n.string();continue;case 3:if(i!==26)break;o.subagentRunId=n.string();continue}if((i&7)===4||i===0)break;n.skip(i&7)}return o},create(t){return ba.fromPartial(t??{})},fromPartial(t){let e=Iy();return e.baseEvent=t.baseEvent!==void 0&&t.baseEvent!==null?z.fromPartial(t.baseEvent):void 0,e.stepName=t.stepName??"",e.subagentRunId=t.subagentRunId??void 0,e}};function Cy(){return{baseEvent:void 0,subagentRunId:void 0,messageId:""}}var ya={encode(t,e=new B){return t.baseEvent!==void 0&&z.encode(t.baseEvent,e.uint32(10).fork()).join(),t.subagentRunId!==void 0&&e.uint32(18).string(t.subagentRunId),t.messageId!==""&&e.uint32(26).string(t.messageId),e},decode(t,e){let n=t instanceof C?t:new C(t),r=e===void 0?n.len:n.pos+e,o=Cy();for(;n.pos<r;){let i=n.uint32();switch(i>>>3){case 1:if(i!==10)break;o.baseEvent=z.decode(n,n.uint32());continue;case 2:if(i!==18)break;o.subagentRunId=n.string();continue;case 3:if(i!==26)break;o.messageId=n.string();continue}if((i&7)===4||i===0)break;n.skip(i&7)}return o},create(t){return ya.fromPartial(t??{})},fromPartial(t){let e=Cy();return e.baseEvent=t.baseEvent!==void 0&&t.baseEvent!==null?z.fromPartial(t.baseEvent):void 0,e.subagentRunId=t.subagentRunId??void 0,e.messageId=t.messageId??"",e}};function Ny(){return{baseEvent:void 0,subagentRunId:void 0,messageId:"",role:""}}var wa={encode(t,e=new B){return t.baseEvent!==void 0&&z.encode(t.baseEvent,e.uint32(10).fork()).join(),t.subagentRunId!==void 0&&e.uint32(18).string(t.subagentRunId),t.messageId!==""&&e.uint32(26).string(t.messageId),t.role!==""&&e.uint32(34).string(t.role),e},decode(t,e){let n=t instanceof C?t:new C(t),r=e===void 0?n.len:n.pos+e,o=Ny();for(;n.pos<r;){let i=n.uint32();switch(i>>>3){case 1:if(i!==10)break;o.baseEvent=z.decode(n,n.uint32());continue;case 2:if(i!==18)break;o.subagentRunId=n.string();continue;case 3:if(i!==26)break;o.messageId=n.string();continue;case 4:if(i!==34)break;o.role=n.string();continue}if((i&7)===4||i===0)break;n.skip(i&7)}return o},create(t){return wa.fromPartial(t??{})},fromPartial(t){let e=Ny();return e.baseEvent=t.baseEvent!==void 0&&t.baseEvent!==null?z.fromPartial(t.baseEvent):void 0,e.subagentRunId=t.subagentRunId??void 0,e.messageId=t.messageId??"",e.role=t.role??"",e}};function Oy(){return{baseEvent:void 0,subagentRunId:void 0,messageId:"",delta:""}}var xa={encode(t,e=new B){return t.baseEvent!==void 0&&z.encode(t.baseEvent,e.uint32(10).fork()).join(),t.subagentRunId!==void 0&&e.uint32(18).string(t.subagentRunId),t.messageId!==""&&e.uint32(26).string(t.messageId),t.delta!==""&&e.uint32(34).string(t.delta),e},decode(t,e){let n=t instanceof C?t:new C(t),r=e===void 0?n.len:n.pos+e,o=Oy();for(;n.pos<r;){let i=n.uint32();switch(i>>>3){case 1:if(i!==10)break;o.baseEvent=z.decode(n,n.uint32());continue;case 2:if(i!==18)break;o.subagentRunId=n.string();continue;case 3:if(i!==26)break;o.messageId=n.string();continue;case 4:if(i!==34)break;o.delta=n.string();continue}if((i&7)===4||i===0)break;n.skip(i&7)}return o},create(t){return xa.fromPartial(t??{})},fromPartial(t){let e=Oy();return e.baseEvent=t.baseEvent!==void 0&&t.baseEvent!==null?z.fromPartial(t.baseEvent):void 0,e.subagentRunId=t.subagentRunId??void 0,e.messageId=t.messageId??"",e.delta=t.delta??"",e}};function My(){return{baseEvent:void 0,subagentRunId:void 0,messageId:""}}var Ea={encode(t,e=new B){return t.baseEvent!==void 0&&z.encode(t.baseEvent,e.uint32(10).fork()).join(),t.subagentRunId!==void 0&&e.uint32(18).string(t.subagentRunId),t.messageId!==""&&e.uint32(26).string(t.messageId),e},decode(t,e){let n=t instanceof C?t:new C(t),r=e===void 0?n.len:n.pos+e,o=My();for(;n.pos<r;){let i=n.uint32();switch(i>>>3){case 1:if(i!==10)break;o.baseEvent=z.decode(n,n.uint32());continue;case 2:if(i!==18)break;o.subagentRunId=n.string();continue;case 3:if(i!==26)break;o.messageId=n.string();continue}if((i&7)===4||i===0)break;n.skip(i&7)}return o},create(t){return Ea.fromPartial(t??{})},fromPartial(t){let e=My();return e.baseEvent=t.baseEvent!==void 0&&t.baseEvent!==null?z.fromPartial(t.baseEvent):void 0,e.subagentRunId=t.subagentRunId??void 0,e.messageId=t.messageId??"",e}};function Py(){return{baseEvent:void 0,subagentRunId:void 0,messageId:void 0,delta:void 0}}var _a={encode(t,e=new B){return t.baseEvent!==void 0&&z.encode(t.baseEvent,e.uint32(10).fork()).join(),t.subagentRunId!==void 0&&e.uint32(18).string(t.subagentRunId),t.messageId!==void 0&&e.uint32(26).string(t.messageId),t.delta!==void 0&&e.uint32(34).string(t.delta),e},decode(t,e){let n=t instanceof C?t:new C(t),r=e===void 0?n.len:n.pos+e,o=Py();for(;n.pos<r;){let i=n.uint32();switch(i>>>3){case 1:if(i!==10)break;o.baseEvent=z.decode(n,n.uint32());continue;case 2:if(i!==18)break;o.subagentRunId=n.string();continue;case 3:if(i!==26)break;o.messageId=n.string();continue;case 4:if(i!==34)break;o.delta=n.string();continue}if((i&7)===4||i===0)break;n.skip(i&7)}return o},create(t){return _a.fromPartial(t??{})},fromPartial(t){let e=Py();return e.baseEvent=t.baseEvent!==void 0&&t.baseEvent!==null?z.fromPartial(t.baseEvent):void 0,e.subagentRunId=t.subagentRunId??void 0,e.messageId=t.messageId??void 0,e.delta=t.delta??void 0,e}};function Ly(){return{baseEvent:void 0,subagentRunId:void 0,messageId:""}}var Ta={encode(t,e=new B){return t.baseEvent!==void 0&&z.encode(t.baseEvent,e.uint32(10).fork()).join(),t.subagentRunId!==void 0&&e.uint32(18).string(t.subagentRunId),t.messageId!==""&&e.uint32(26).string(t.messageId),e},decode(t,e){let n=t instanceof C?t:new C(t),r=e===void 0?n.len:n.pos+e,o=Ly();for(;n.pos<r;){let i=n.uint32();switch(i>>>3){case 1:if(i!==10)break;o.baseEvent=z.decode(n,n.uint32());continue;case 2:if(i!==18)break;o.subagentRunId=n.string();continue;case 3:if(i!==26)break;o.messageId=n.string();continue}if((i&7)===4||i===0)break;n.skip(i&7)}return o},create(t){return Ta.fromPartial(t??{})},fromPartial(t){let e=Ly();return e.baseEvent=t.baseEvent!==void 0&&t.baseEvent!==null?z.fromPartial(t.baseEvent):void 0,e.subagentRunId=t.subagentRunId??void 0,e.messageId=t.messageId??"",e}};function zy(){return{baseEvent:void 0,subagentRunId:void 0,subtype:"",entityId:"",encryptedValue:""}}var Sa={encode(t,e=new B){return t.baseEvent!==void 0&&z.encode(t.baseEvent,e.uint32(10).fork()).join(),t.subagentRunId!==void 0&&e.uint32(18).string(t.subagentRunId),t.subtype!==""&&e.uint32(26).string(t.subtype),t.entityId!==""&&e.uint32(34).string(t.entityId),t.encryptedValue!==""&&e.uint32(42).string(t.encryptedValue),e},decode(t,e){let n=t instanceof C?t:new C(t),r=e===void 0?n.len:n.pos+e,o=zy();for(;n.pos<r;){let i=n.uint32();switch(i>>>3){case 1:if(i!==10)break;o.baseEvent=z.decode(n,n.uint32());continue;case 2:if(i!==18)break;o.subagentRunId=n.string();continue;case 3:if(i!==26)break;o.subtype=n.string();continue;case 4:if(i!==34)break;o.entityId=n.string();continue;case 5:if(i!==42)break;o.encryptedValue=n.string();continue}if((i&7)===4||i===0)break;n.skip(i&7)}return o},create(t){return Sa.fromPartial(t??{})},fromPartial(t){let e=zy();return e.baseEvent=t.baseEvent!==void 0&&t.baseEvent!==null?z.fromPartial(t.baseEvent):void 0,e.subagentRunId=t.subagentRunId??void 0,e.subtype=t.subtype??"",e.entityId=t.entityId??"",e.encryptedValue=t.encryptedValue??"",e}};function Dy(){return{baseEvent:void 0,subagentRunId:"",name:"",description:void 0,parentSubagentRunId:void 0,parentToolCallId:void 0,parentMessageId:void 0}}var ka={encode(t,e=new B){return t.baseEvent!==void 0&&z.encode(t.baseEvent,e.uint32(10).fork()).join(),t.subagentRunId!==""&&e.uint32(18).string(t.subagentRunId),t.name!==""&&e.uint32(26).string(t.name),t.description!==void 0&&e.uint32(34).string(t.description),t.parentSubagentRunId!==void 0&&e.uint32(42).string(t.parentSubagentRunId),t.parentToolCallId!==void 0&&e.uint32(50).string(t.parentToolCallId),t.parentMessageId!==void 0&&e.uint32(58).string(t.parentMessageId),e},decode(t,e){let n=t instanceof C?t:new C(t),r=e===void 0?n.len:n.pos+e,o=Dy();for(;n.pos<r;){let i=n.uint32();switch(i>>>3){case 1:if(i!==10)break;o.baseEvent=z.decode(n,n.uint32());continue;case 2:if(i!==18)break;o.subagentRunId=n.string();continue;case 3:if(i!==26)break;o.name=n.string();continue;case 4:if(i!==34)break;o.description=n.string();continue;case 5:if(i!==42)break;o.parentSubagentRunId=n.string();continue;case 6:if(i!==50)break;o.parentToolCallId=n.string();continue;case 7:if(i!==58)break;o.parentMessageId=n.string();continue}if((i&7)===4||i===0)break;n.skip(i&7)}return o},create(t){return ka.fromPartial(t??{})},fromPartial(t){let e=Dy();return e.baseEvent=t.baseEvent!==void 0&&t.baseEvent!==null?z.fromPartial(t.baseEvent):void 0,e.subagentRunId=t.subagentRunId??"",e.name=t.name??"",e.description=t.description??void 0,e.parentSubagentRunId=t.parentSubagentRunId??void 0,e.parentToolCallId=t.parentToolCallId??void 0,e.parentMessageId=t.parentMessageId??void 0,e}};function $y(){return{baseEvent:void 0,subagentRunId:"",result:void 0,outcome:"",interruptIds:[]}}var Aa={encode(t,e=new B){t.baseEvent!==void 0&&z.encode(t.baseEvent,e.uint32(10).fork()).join(),t.subagentRunId!==""&&e.uint32(18).string(t.subagentRunId),t.result!==void 0&&H.encode(H.wrap(t.result),e.uint32(26).fork()).join(),t.outcome!==""&&e.uint32(34).string(t.outcome);for(let n of t.interruptIds)e.uint32(42).string(n);return e},decode(t,e){let n=t instanceof C?t:new C(t),r=e===void 0?n.len:n.pos+e,o=$y();for(;n.pos<r;){let i=n.uint32();switch(i>>>3){case 1:if(i!==10)break;o.baseEvent=z.decode(n,n.uint32());continue;case 2:if(i!==18)break;o.subagentRunId=n.string();continue;case 3:if(i!==26)break;o.result=H.unwrap(H.decode(n,n.uint32()));continue;case 4:if(i!==34)break;o.outcome=n.string();continue;case 5:if(i!==42)break;o.interruptIds.push(n.string());continue}if((i&7)===4||i===0)break;n.skip(i&7)}return o},create(t){return Aa.fromPartial(t??{})},fromPartial(t){let e=$y();return e.baseEvent=t.baseEvent!==void 0&&t.baseEvent!==null?z.fromPartial(t.baseEvent):void 0,e.subagentRunId=t.subagentRunId??"",e.result=t.result??void 0,e.outcome=t.outcome??"",e.interruptIds=t.interruptIds?.map(n=>n)||[],e}};function Uy(){return{baseEvent:void 0,subagentRunId:"",message:"",code:void 0}}var Ra={encode(t,e=new B){return t.baseEvent!==void 0&&z.encode(t.baseEvent,e.uint32(10).fork()).join(),t.subagentRunId!==""&&e.uint32(18).string(t.subagentRunId),t.message!==""&&e.uint32(26).string(t.message),t.code!==void 0&&e.uint32(34).string(t.code),e},decode(t,e){let n=t instanceof C?t:new C(t),r=e===void 0?n.len:n.pos+e,o=Uy();for(;n.pos<r;){let i=n.uint32();switch(i>>>3){case 1:if(i!==10)break;o.baseEvent=z.decode(n,n.uint32());continue;case 2:if(i!==18)break;o.subagentRunId=n.string();continue;case 3:if(i!==26)break;o.message=n.string();continue;case 4:if(i!==34)break;o.code=n.string();continue}if((i&7)===4||i===0)break;n.skip(i&7)}return o},create(t){return Ra.fromPartial(t??{})},fromPartial(t){let e=Uy();return e.baseEvent=t.baseEvent!==void 0&&t.baseEvent!==null?z.fromPartial(t.baseEvent):void 0,e.subagentRunId=t.subagentRunId??"",e.message=t.message??"",e.code=t.code??void 0,e}};function Hy(){return{textMessageStart:void 0,textMessageContent:void 0,textMessageEnd:void 0,toolCallStart:void 0,toolCallArgs:void 0,toolCallEnd:void 0,stateSnapshot:void 0,stateDelta:void 0,messagesSnapshot:void 0,raw:void 0,custom:void 0,runStarted:void 0,runFinished:void 0,runError:void 0,stepStarted:void 0,stepFinished:void 0,textMessageChunk:void 0,toolCallChunk:void 0,subagentStarted:void 0,subagentFinished:void 0,subagentError:void 0,toolCallResult:void 0,activitySnapshot:void 0,activityDelta:void 0,reasoningStart:void 0,reasoningMessageStart:void 0,reasoningMessageContent:void 0,reasoningMessageEnd:void 0,reasoningMessageChunk:void 0,reasoningEnd:void 0,reasoningEncryptedValue:void 0}}var By={encode(t,e=new B){return t.textMessageStart!==void 0&&Js.encode(t.textMessageStart,e.uint32(10).fork()).join(),t.textMessageContent!==void 0&&Qs.encode(t.textMessageContent,e.uint32(18).fork()).join(),t.textMessageEnd!==void 0&&ea.encode(t.textMessageEnd,e.uint32(26).fork()).join(),t.toolCallStart!==void 0&&na.encode(t.toolCallStart,e.uint32(34).fork()).join(),t.toolCallArgs!==void 0&&ra.encode(t.toolCallArgs,e.uint32(42).fork()).join(),t.toolCallEnd!==void 0&&oa.encode(t.toolCallEnd,e.uint32(50).fork()).join(),t.stateSnapshot!==void 0&&aa.encode(t.stateSnapshot,e.uint32(58).fork()).join(),t.stateDelta!==void 0&&la.encode(t.stateDelta,e.uint32(66).fork()).join(),t.messagesSnapshot!==void 0&&ca.encode(t.messagesSnapshot,e.uint32(74).fork()).join(),t.raw!==void 0&&ha.encode(t.raw,e.uint32(82).fork()).join(),t.custom!==void 0&&pa.encode(t.custom,e.uint32(90).fork()).join(),t.runStarted!==void 0&&fa.encode(t.runStarted,e.uint32(98).fork()).join(),t.runFinished!==void 0&&ma.encode(t.runFinished,e.uint32(106).fork()).join(),t.runError!==void 0&&ga.encode(t.runError,e.uint32(114).fork()).join(),t.stepStarted!==void 0&&va.encode(t.stepStarted,e.uint32(122).fork()).join(),t.stepFinished!==void 0&&ba.encode(t.stepFinished,e.uint32(130).fork()).join(),t.textMessageChunk!==void 0&&ta.encode(t.textMessageChunk,e.uint32(138).fork()).join(),t.toolCallChunk!==void 0&&ia.encode(t.toolCallChunk,e.uint32(146).fork()).join(),t.subagentStarted!==void 0&&ka.encode(t.subagentStarted,e.uint32(154).fork()).join(),t.subagentFinished!==void 0&&Aa.encode(t.subagentFinished,e.uint32(162).fork()).join(),t.subagentError!==void 0&&Ra.encode(t.subagentError,e.uint32(170).fork()).join(),t.toolCallResult!==void 0&&sa.encode(t.toolCallResult,e.uint32(178).fork()).join(),t.activitySnapshot!==void 0&&da.encode(t.activitySnapshot,e.uint32(186).fork()).join(),t.activityDelta!==void 0&&ua.encode(t.activityDelta,e.uint32(194).fork()).join(),t.reasoningStart!==void 0&&ya.encode(t.reasoningStart,e.uint32(202).fork()).join(),t.reasoningMessageStart!==void 0&&wa.encode(t.reasoningMessageStart,e.uint32(210).fork()).join(),t.reasoningMessageContent!==void 0&&xa.encode(t.reasoningMessageContent,e.uint32(218).fork()).join(),t.reasoningMessageEnd!==void 0&&Ea.encode(t.reasoningMessageEnd,e.uint32(226).fork()).join(),t.reasoningMessageChunk!==void 0&&_a.encode(t.reasoningMessageChunk,e.uint32(234).fork()).join(),t.reasoningEnd!==void 0&&Ta.encode(t.reasoningEnd,e.uint32(242).fork()).join(),t.reasoningEncryptedValue!==void 0&&Sa.encode(t.reasoningEncryptedValue,e.uint32(250).fork()).join(),e},decode(t,e){let n=t instanceof C?t:new C(t),r=e===void 0?n.len:n.pos+e,o=Hy();for(;n.pos<r;){let i=n.uint32();switch(i>>>3){case 1:if(i!==10)break;o.textMessageStart=Js.decode(n,n.uint32());continue;case 2:if(i!==18)break;o.textMessageContent=Qs.decode(n,n.uint32());continue;case 3:if(i!==26)break;o.textMessageEnd=ea.decode(n,n.uint32());continue;case 4:if(i!==34)break;o.toolCallStart=na.decode(n,n.uint32());continue;case 5:if(i!==42)break;o.toolCallArgs=ra.decode(n,n.uint32());continue;case 6:if(i!==50)break;o.toolCallEnd=oa.decode(n,n.uint32());continue;case 7:if(i!==58)break;o.stateSnapshot=aa.decode(n,n.uint32());continue;case 8:if(i!==66)break;o.stateDelta=la.decode(n,n.uint32());continue;case 9:if(i!==74)break;o.messagesSnapshot=ca.decode(n,n.uint32());continue;case 10:if(i!==82)break;o.raw=ha.decode(n,n.uint32());continue;case 11:if(i!==90)break;o.custom=pa.decode(n,n.uint32());continue;case 12:if(i!==98)break;o.runStarted=fa.decode(n,n.uint32());continue;case 13:if(i!==106)break;o.runFinished=ma.decode(n,n.uint32());continue;case 14:if(i!==114)break;o.runError=ga.decode(n,n.uint32());continue;case 15:if(i!==122)break;o.stepStarted=va.decode(n,n.uint32());continue;case 16:if(i!==130)break;o.stepFinished=ba.decode(n,n.uint32());continue;case 17:if(i!==138)break;o.textMessageChunk=ta.decode(n,n.uint32());continue;case 18:if(i!==146)break;o.toolCallChunk=ia.decode(n,n.uint32());continue;case 19:if(i!==154)break;o.subagentStarted=ka.decode(n,n.uint32());continue;case 20:if(i!==162)break;o.subagentFinished=Aa.decode(n,n.uint32());continue;case 21:if(i!==170)break;o.subagentError=Ra.decode(n,n.uint32());continue;case 22:if(i!==178)break;o.toolCallResult=sa.decode(n,n.uint32());continue;case 23:if(i!==186)break;o.activitySnapshot=da.decode(n,n.uint32());continue;case 24:if(i!==194)break;o.activityDelta=ua.decode(n,n.uint32());continue;case 25:if(i!==202)break;o.reasoningStart=ya.decode(n,n.uint32());continue;case 26:if(i!==210)break;o.reasoningMessageStart=wa.decode(n,n.uint32());continue;case 27:if(i!==218)break;o.reasoningMessageContent=xa.decode(n,n.uint32());continue;case 28:if(i!==226)break;o.reasoningMessageEnd=Ea.decode(n,n.uint32());continue;case 29:if(i!==234)break;o.reasoningMessageChunk=_a.decode(n,n.uint32());continue;case 30:if(i!==242)break;o.reasoningEnd=Ta.decode(n,n.uint32());continue;case 31:if(i!==250)break;o.reasoningEncryptedValue=Sa.decode(n,n.uint32());continue}if((i&7)===4||i===0)break;n.skip(i&7)}return o},create(t){return By.fromPartial(t??{})},fromPartial(t){let e=Hy();return e.textMessageStart=t.textMessageStart!==void 0&&t.textMessageStart!==null?Js.fromPartial(t.textMessageStart):void 0,e.textMessageContent=t.textMessageContent!==void 0&&t.textMessageContent!==null?Qs.fromPartial(t.textMessageContent):void 0,e.textMessageEnd=t.textMessageEnd!==void 0&&t.textMessageEnd!==null?ea.fromPartial(t.textMessageEnd):void 0,e.toolCallStart=t.toolCallStart!==void 0&&t.toolCallStart!==null?na.fromPartial(t.toolCallStart):void 0,e.toolCallArgs=t.toolCallArgs!==void 0&&t.toolCallArgs!==null?ra.fromPartial(t.toolCallArgs):void 0,e.toolCallEnd=t.toolCallEnd!==void 0&&t.toolCallEnd!==null?oa.fromPartial(t.toolCallEnd):void 0,e.stateSnapshot=t.stateSnapshot!==void 0&&t.stateSnapshot!==null?aa.fromPartial(t.stateSnapshot):void 0,e.stateDelta=t.stateDelta!==void 0&&t.stateDelta!==null?la.fromPartial(t.stateDelta):void 0,e.messagesSnapshot=t.messagesSnapshot!==void 0&&t.messagesSnapshot!==null?ca.fromPartial(t.messagesSnapshot):void 0,e.raw=t.raw!==void 0&&t.raw!==null?ha.fromPartial(t.raw):void 0,e.custom=t.custom!==void 0&&t.custom!==null?pa.fromPartial(t.custom):void 0,e.runStarted=t.runStarted!==void 0&&t.runStarted!==null?fa.fromPartial(t.runStarted):void 0,e.runFinished=t.runFinished!==void 0&&t.runFinished!==null?ma.fromPartial(t.runFinished):void 0,e.runError=t.runError!==void 0&&t.runError!==null?ga.fromPartial(t.runError):void 0,e.stepStarted=t.stepStarted!==void 0&&t.stepStarted!==null?va.fromPartial(t.stepStarted):void 0,e.stepFinished=t.stepFinished!==void 0&&t.stepFinished!==null?ba.fromPartial(t.stepFinished):void 0,e.textMessageChunk=t.textMessageChunk!==void 0&&t.textMessageChunk!==null?ta.fromPartial(t.textMessageChunk):void 0,e.toolCallChunk=t.toolCallChunk!==void 0&&t.toolCallChunk!==null?ia.fromPartial(t.toolCallChunk):void 0,e.subagentStarted=t.subagentStarted!==void 0&&t.subagentStarted!==null?ka.fromPartial(t.subagentStarted):void 0,e.subagentFinished=t.subagentFinished!==void 0&&t.subagentFinished!==null?Aa.fromPartial(t.subagentFinished):void 0,e.subagentError=t.subagentError!==void 0&&t.subagentError!==null?Ra.fromPartial(t.subagentError):void 0,e.toolCallResult=t.toolCallResult!==void 0&&t.toolCallResult!==null?sa.fromPartial(t.toolCallResult):void 0,e.activitySnapshot=t.activitySnapshot!==void 0&&t.activitySnapshot!==null?da.fromPartial(t.activitySnapshot):void 0,e.activityDelta=t.activityDelta!==void 0&&t.activityDelta!==null?ua.fromPartial(t.activityDelta):void 0,e.reasoningStart=t.reasoningStart!==void 0&&t.reasoningStart!==null?ya.fromPartial(t.reasoningStart):void 0,e.reasoningMessageStart=t.reasoningMessageStart!==void 0&&t.reasoningMessageStart!==null?wa.fromPartial(t.reasoningMessageStart):void 0,e.reasoningMessageContent=t.reasoningMessageContent!==void 0&&t.reasoningMessageContent!==null?xa.fromPartial(t.reasoningMessageContent):void 0,e.reasoningMessageEnd=t.reasoningMessageEnd!==void 0&&t.reasoningMessageEnd!==null?Ea.fromPartial(t.reasoningMessageEnd):void 0,e.reasoningMessageChunk=t.reasoningMessageChunk!==void 0&&t.reasoningMessageChunk!==null?_a.fromPartial(t.reasoningMessageChunk):void 0,e.reasoningEnd=t.reasoningEnd!==void 0&&t.reasoningEnd!==null?Ta.fromPartial(t.reasoningEnd):void 0,e.reasoningEncryptedValue=t.reasoningEncryptedValue!==void 0&&t.reasoningEncryptedValue!==null?Sa.fromPartial(t.reasoningEncryptedValue):void 0,e}};function Fy(){return{provider:void 0,model:void 0,inputTokens:void 0,outputTokens:void 0,totalTokens:void 0,reasoningTokens:void 0,cachedInputTokens:void 0,cacheWriteInputTokens:void 0}}var Un={encode(t,e=new B){return t.provider!==void 0&&e.uint32(10).string(t.provider),t.model!==void 0&&e.uint32(18).string(t.model),t.inputTokens!==void 0&&e.uint32(24).int64(t.inputTokens),t.outputTokens!==void 0&&e.uint32(32).int64(t.outputTokens),t.totalTokens!==void 0&&e.uint32(40).int64(t.totalTokens),t.reasoningTokens!==void 0&&e.uint32(48).int64(t.reasoningTokens),t.cachedInputTokens!==void 0&&e.uint32(56).int64(t.cachedInputTokens),t.cacheWriteInputTokens!==void 0&&e.uint32(64).int64(t.cacheWriteInputTokens),e},decode(t,e){let n=t instanceof C?t:new C(t),r=e===void 0?n.len:n.pos+e,o=Fy();for(;n.pos<r;){let i=n.uint32();switch(i>>>3){case 1:if(i!==10)break;o.provider=n.string();continue;case 2:if(i!==18)break;o.model=n.string();continue;case 3:if(i!==24)break;o.inputTokens=Pn(n.int64());continue;case 4:if(i!==32)break;o.outputTokens=Pn(n.int64());continue;case 5:if(i!==40)break;o.totalTokens=Pn(n.int64());continue;case 6:if(i!==48)break;o.reasoningTokens=Pn(n.int64());continue;case 7:if(i!==56)break;o.cachedInputTokens=Pn(n.int64());continue;case 8:if(i!==64)break;o.cacheWriteInputTokens=Pn(n.int64());continue}if((i&7)===4||i===0)break;n.skip(i&7)}return o},create(t){return Un.fromPartial(t??{})},fromPartial(t){let e=Fy();return e.provider=t.provider??void 0,e.model=t.model??void 0,e.inputTokens=t.inputTokens??void 0,e.outputTokens=t.outputTokens??void 0,e.totalTokens=t.totalTokens??void 0,e.reasoningTokens=t.reasoningTokens??void 0,e.cachedInputTokens=t.cachedInputTokens??void 0,e.cacheWriteInputTokens=t.cacheWriteInputTokens??void 0,e}};function Pn(t){let e=globalThis.Number(t.toString());if(e>globalThis.Number.MAX_SAFE_INTEGER)throw new globalThis.Error("Value is larger than Number.MAX_SAFE_INTEGER");if(e<globalThis.Number.MIN_SAFE_INTEGER)throw new globalThis.Error("Value is smaller than Number.MIN_SAFE_INTEGER");return e}var Or=t=>t&&typeof t=="object"?t:void 0,we=t=>Array.isArray(t)?t:[],yA=()=>typeof process<"u"&&typeof process.env<"u"&&!!process.env.SUPPRESS_TRANSFORMATION_WARNINGS,Vy=()=>{yA()||console.warn("[ag-ui][proto] Dropped a content part this build does not know: the protocol has a variant this SDK predates.")};var A$=new Set(Object.values(y)),wA={textMessageStart:"TEXT_MESSAGE_START",textMessageContent:"TEXT_MESSAGE_CONTENT",textMessageEnd:"TEXT_MESSAGE_END",textMessageChunk:"TEXT_MESSAGE_CHUNK",toolCallStart:"TOOL_CALL_START",toolCallArgs:"TOOL_CALL_ARGS",toolCallEnd:"TOOL_CALL_END",toolCallChunk:"TOOL_CALL_CHUNK",toolCallResult:"TOOL_CALL_RESULT",stateSnapshot:"STATE_SNAPSHOT",stateDelta:"STATE_DELTA",messagesSnapshot:"MESSAGES_SNAPSHOT",activitySnapshot:"ACTIVITY_SNAPSHOT",activityDelta:"ACTIVITY_DELTA",raw:"RAW",custom:"CUSTOM",runStarted:"RUN_STARTED",runFinished:"RUN_FINISHED",runError:"RUN_ERROR",stepStarted:"STEP_STARTED",stepFinished:"STEP_FINISHED",reasoningStart:"REASONING_START",reasoningMessageStart:"REASONING_MESSAGE_START",reasoningMessageContent:"REASONING_MESSAGE_CONTENT",reasoningMessageEnd:"REASONING_MESSAGE_END",reasoningMessageChunk:"REASONING_MESSAGE_CHUNK",reasoningEnd:"REASONING_END",reasoningEncryptedValue:"REASONING_ENCRYPTED_VALUE",subagentStarted:"SUBAGENT_STARTED",subagentFinished:"SUBAGENT_FINISHED",subagentError:"SUBAGENT_ERROR"},Ln=new Set([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31]);var an=t=>{let e=Or(t);if(e){if([e.data,e.url,e.file].filter(Boolean).length>1)throw new Error("Invalid event: source carries more than one arm");if(e.data){let n=e.data;return{type:"data",value:n.value,mimeType:n.mimeType}}if(e.url){let n=e.url;return{type:"url",value:n.value,mimeType:n.mimeType}}if(e.file){let n=e.file;return{type:"file",value:n.value,provider:n.provider,mimeType:n.mimeType}}}};var Zy=t=>{let e=Or(t);if(e){if([e.text,e.image,e.audio,e.video,e.document].filter(Boolean).length>1)throw new Error("Invalid event: content part carries more than one arm");if(e.text){let n=e.text;return{type:"text",id:n.id,text:n.text,metadata:n.metadata}}if(e.image){let n=e.image;return n.source!==void 0&&an(n.source)===void 0?void 0:{type:"image",id:n.id,source:an(n.source),metadata:n.metadata}}if(e.audio){let n=e.audio;return n.source!==void 0&&an(n.source)===void 0?void 0:{type:"audio",id:n.id,source:an(n.source),metadata:n.metadata}}if(e.video){let n=e.video;return n.source!==void 0&&an(n.source)===void 0?void 0:{type:"video",id:n.id,source:an(n.source),metadata:n.metadata}}if(e.document){let n=e.document;return n.source!==void 0&&an(n.source)===void 0?void 0:{type:"document",id:n.id,source:an(n.source),metadata:n.metadata}}}},xA=new Set(["activity"]),EA=new Set(["user","tool"]),_A=new Set(["developer","system","assistant","user","tool","activity","reasoning"]);var jy=t=>{let e=Or(t)??{},n={...e},r=typeof e.role=="string"?e.role:"",o=_A.has(r),i=o?EA.has(r):we(e.contentParts).length>0,s=o?xA.has(r):!i&&e.activityContent!==void 0;if(!o&&(e.content!==void 0?1:0)+(we(e.contentParts).length>0?1:0)+(e.activityContent!==void 0?1:0)>1)throw new Error("Invalid event: message carries more than one content form");if(o){if(!i&&we(e.contentParts).length>0)throw new Error("Invalid event: message carries content parts for a role that has none");if(e.activityContent!==void 0&&!s)throw new Error("Invalid event: message carries activity content for a non-activity role");if(s&&e.content!==void 0)throw new Error("Invalid event: activity content cannot ride with other content forms");if(i&&e.content!==void 0&&we(e.contentParts).length>0)throw new Error("Invalid event: message carries both string content and content parts")}return i&&e.content===void 0&&(n.content=we(e.contentParts).map(a=>{let c=Zy(a);return c===void 0&&Vy(),c}).filter(a=>a!==void 0)),s&&e.activityContent!==void 0&&(n.content=e.activityContent),delete n.activityContent,delete n.contentParts,we(e.toolCalls).length===0&&delete n.toolCalls,Object.keys(n).forEach(a=>{n[a]===void 0&&delete n[a]}),n},qu=t=>{if(Array.isArray(t)){for(let n of t)qu(n);return}let e=Or(t);if(e)for(let n of Object.keys(e))e[n]===void 0?delete e[n]:qu(e[n])};var TA=t=>{let e=Or(t);if(!e)return;let n={};return e.threadId!==void 0&&(n.threadId=e.threadId),e.runId!==void 0&&(n.runId=e.runId),e.protocolVersion!==void 0&&(n.protocolVersion=e.protocolVersion),e.parentRunId!==void 0&&(n.parentRunId=e.parentRunId),e.state!==void 0&&(n.state=e.state),n.messages=we(e.messages).map(jy).filter(r=>r!==void 0),n.tools=we(e.tools),n.context=we(e.context),e.forwardedProps!==void 0&&(n.forwardedProps=e.forwardedProps),n.resume=we(e.resume),n};var Yu={TextMessageStartEvent:{singular:new Set([1]),descend:{1:"BaseEvent"}},BaseEvent:{singular:new Set([3,4]),descend:{},google:{3:"google.protobuf.Value",4:"google.protobuf.Struct"}},TextMessageContentEvent:{singular:new Set([1]),descend:{1:"BaseEvent"}},TextMessageEndEvent:{singular:new Set([1]),descend:{1:"BaseEvent"}},ToolCallStartEvent:{singular:new Set([1]),descend:{1:"BaseEvent"}},ToolCallArgsEvent:{singular:new Set([1]),descend:{1:"BaseEvent"}},ToolCallEndEvent:{singular:new Set([1]),descend:{1:"BaseEvent"}},StateSnapshotEvent:{singular:new Set([1,2]),descend:{1:"BaseEvent"},google:{2:"google.protobuf.Value"}},StateDeltaEvent:{singular:new Set([1]),descend:{1:"BaseEvent",2:"JsonPatchOperation"}},JsonPatchOperation:{singular:new Set([4]),descend:{},google:{4:"google.protobuf.Value"}},MessagesSnapshotEvent:{singular:new Set([1]),descend:{1:"BaseEvent",2:"Message"}},Message:{singular:new Set([9,13]),descend:{5:"ToolCall",8:"InputContent"},google:{9:"google.protobuf.Struct",13:"google.protobuf.Struct"}},ToolCall:{singular:new Set([3,4]),descend:{},google:{4:"google.protobuf.Struct"}},InputContent:{singular:new Set([1,2,3,4,5]),descend:{1:"TextInputPart",2:"ImageInputPart",3:"AudioInputPart",4:"VideoInputPart",5:"DocumentInputPart"},arms:new Set([1,2,3,4,5])},TextInputPart:{singular:new Set([3]),descend:{},google:{3:"google.protobuf.Value"}},ImageInputPart:{singular:new Set([1,2]),descend:{1:"InputContentSource"},google:{2:"google.protobuf.Value"}},InputContentSource:{singular:new Set([1,2,3]),descend:{},arms:new Set([1,2,3])},AudioInputPart:{singular:new Set([1,2]),descend:{1:"InputContentSource"},google:{2:"google.protobuf.Value"}},VideoInputPart:{singular:new Set([1,2]),descend:{1:"InputContentSource"},google:{2:"google.protobuf.Value"}},DocumentInputPart:{singular:new Set([1,2]),descend:{1:"InputContentSource"},google:{2:"google.protobuf.Value"}},RawEvent:{singular:new Set([1,2]),descend:{1:"BaseEvent"},google:{2:"google.protobuf.Value"}},CustomEvent:{singular:new Set([1,3]),descend:{1:"BaseEvent"},google:{3:"google.protobuf.Value"}},RunStartedEvent:{singular:new Set([1,5]),descend:{1:"BaseEvent",5:"RunAgentInput"}},RunAgentInput:{singular:new Set([4,8]),descend:{5:"Message",6:"Tool",9:"ResumeEntry"},google:{4:"google.protobuf.Value",8:"google.protobuf.Value"}},Tool:{singular:new Set([3,4]),descend:{},google:{3:"google.protobuf.Value",4:"google.protobuf.Struct"}},ResumeEntry:{singular:new Set([3,4]),descend:{},google:{3:"google.protobuf.Value",4:"google.protobuf.Struct"}},RunFinishedEvent:{singular:new Set([1,4]),descend:{1:"BaseEvent",6:"Interrupt"},google:{4:"google.protobuf.Value"}},Interrupt:{singular:new Set([5,7]),descend:{},google:{5:"google.protobuf.Value",7:"google.protobuf.Value"}},RunErrorEvent:{singular:new Set([1]),descend:{1:"BaseEvent"}},StepStartedEvent:{singular:new Set([1]),descend:{1:"BaseEvent"}},StepFinishedEvent:{singular:new Set([1]),descend:{1:"BaseEvent"}},TextMessageChunkEvent:{singular:new Set([1]),descend:{1:"BaseEvent"}},ToolCallChunkEvent:{singular:new Set([1]),descend:{1:"BaseEvent"}},SubagentStartedEvent:{singular:new Set([1]),descend:{1:"BaseEvent"}},SubagentFinishedEvent:{singular:new Set([1,3]),descend:{1:"BaseEvent"},google:{3:"google.protobuf.Value"}},SubagentErrorEvent:{singular:new Set([1]),descend:{1:"BaseEvent"}},ToolCallResultEvent:{singular:new Set([1]),descend:{1:"BaseEvent",7:"InputContent"}},ActivitySnapshotEvent:{singular:new Set([1,5]),descend:{1:"BaseEvent"},google:{5:"google.protobuf.Struct"}},ActivityDeltaEvent:{singular:new Set([1]),descend:{1:"BaseEvent",5:"JsonPatchOperation"}},ReasoningStartEvent:{singular:new Set([1]),descend:{1:"BaseEvent"}},ReasoningMessageStartEvent:{singular:new Set([1]),descend:{1:"BaseEvent"}},ReasoningMessageContentEvent:{singular:new Set([1]),descend:{1:"BaseEvent"}},ReasoningMessageEndEvent:{singular:new Set([1]),descend:{1:"BaseEvent"}},ReasoningMessageChunkEvent:{singular:new Set([1]),descend:{1:"BaseEvent"}},ReasoningEndEvent:{singular:new Set([1]),descend:{1:"BaseEvent"}},ReasoningEncryptedValueEvent:{singular:new Set([1]),descend:{1:"BaseEvent"}},"google.protobuf.Struct":{singular:new Set,descend:{1:"google.protobuf.Struct.FieldsEntry"}},"google.protobuf.Struct.FieldsEntry":{singular:new Set([2]),descend:{2:"google.protobuf.Value"}},"google.protobuf.Value":{singular:new Set([5,6]),descend:{5:"google.protobuf.Struct",6:"google.protobuf.ListValue"},arms:new Set([1,2,3,4,5,6]),armWireTypes:{1:0,2:1,3:2,4:0,5:2,6:2}},"google.protobuf.ListValue":{singular:new Set,descend:{1:"google.protobuf.Value"}}},Wy={1:"TextMessageStartEvent",2:"TextMessageContentEvent",3:"TextMessageEndEvent",4:"ToolCallStartEvent",5:"ToolCallArgsEvent",6:"ToolCallEndEvent",7:"StateSnapshotEvent",8:"StateDeltaEvent",9:"MessagesSnapshotEvent",10:"RawEvent",11:"CustomEvent",12:"RunStartedEvent",13:"RunFinishedEvent",14:"RunErrorEvent",15:"StepStartedEvent",16:"StepFinishedEvent",17:"TextMessageChunkEvent",18:"ToolCallChunkEvent",19:"SubagentStartedEvent",20:"SubagentFinishedEvent",21:"SubagentErrorEvent",22:"ToolCallResultEvent",23:"ActivitySnapshotEvent",24:"ActivityDeltaEvent",25:"ReasoningStartEvent",26:"ReasoningMessageStartEvent",27:"ReasoningMessageContentEvent",28:"ReasoningMessageEndEvent",29:"ReasoningMessageChunkEvent",30:"ReasoningEndEvent",31:"ReasoningEncryptedValueEvent"};function Nr(t,e){let n=0,r=0;for(;;){if(e.offset>=t.length)throw new Error("Invalid event");let o=t[e.offset++];if(r<28?n+=(o&127)*2**r:r===28&&(n+=(o&15)*2**28),r+=7,(o&128)===0)return n}}function qy(t,e){let n={offset:0},r=0,o=0;for(;n.offset<t.length;){let i=Nr(t,n),s=Math.floor(i/8),a=i%8;if(s===0)throw new Error("Invalid event");if(a===3){r+=1;continue}if(a===4){if(r-=1,r<0)throw new Error("Invalid event");continue}if(a===0)Nr(t,n);else if(a===1)n.offset+=8;else if(a===2){let c=Nr(t,n);if(n.offset+c>t.length)throw new Error("Invalid event");if(r===0){if(e.arms?.has(s)){if(o!==0&&o!==s)throw new Error("Invalid event");o=s}let l=e.descend[s];if(l!==void 0){let d=Yu[l];d!==void 0&&qy(t.subarray(n.offset,n.offset+c),d)}}n.offset+=c}else if(a===5)n.offset+=4;else throw new Error("Invalid event");if(n.offset>t.length)throw new Error("Invalid event")}if(r!==0)throw new Error("Invalid event")}function SA(t){let e=new Set,n={offset:0},r=0;for(;n.offset<t.length;){let o=Nr(t,n),i=Math.floor(o/8),s=o%8;if(i===0)throw new Error("Invalid event");if(s===3){r+=1;continue}if(s===4){if(r-=1,r<0)throw new Error("Invalid event");continue}if(r===0&&Ln.has(i)){if(e.size>0&&!e.has(i))throw new Error("Invalid event");e.add(i)}if(s===0)Nr(t,n);else if(s===1)n.offset+=8;else if(s===2){let a=Nr(t,n);if(n.offset+a>t.length)throw new Error("Invalid event");if(r===0){let c=Wy[i];if(c!==void 0){let l=Yu[c];l!==void 0&&qy(t.subarray(n.offset,n.offset+a),l)}}n.offset+=a}else if(s===5)n.offset+=4;else throw new Error("Invalid event");if(n.offset>t.length)throw new Error("Invalid event")}if(r!==0)throw new Error("Invalid event")}function Gy(t){if(t.length===1)return t[0];let e=new Uint8Array(t.reduce((r,o)=>r+o.length,0)),n=0;for(let r of t)e.set(r,n),n+=r.length;return e}function Yy(t,e){let n=new C(t),r=[],o=new Map,i,s=!1;for(;n.pos<n.len;){let c=n.pos,[l,d]=n.tag(),h=d===2?n.bytes():void 0;h===void 0&&n.skip(d,l);let m=e.arms?.has(l)&&d===(e.armWireTypes?.[l]??2);if(m){if(i!==void 0&&i!==l){let T=o.get(i);T!==void 0&&(r[T]=void 0),o.delete(i),s=!0}if(i=l,!e.singular.has(l)){let T=o.get(l);T!==void 0&&(r[T]=void 0,o.delete(l),s=!0)}}let f=e.descend[l]??e.google?.[l],u=h!==void 0&&(e.singular.has(l)||f!==void 0),v=o.get(l),E=v===void 0?void 0:r[v]?.payloads;if(u&&e.singular.has(l)&&E!==void 0){E.push(h),s=!0;continue}(u||m)&&o.set(l,r.length),r.push({number:l,raw:t.subarray(c,n.pos),...u&&{payloads:[h]},child:f===void 0?void 0:Yu[f]})}let a=[];for(let c of r)if(c!==void 0){if(c.payloads!==void 0){let l=Gy(c.payloads),d=c.child===void 0?l:Yy(l,c.child);if(c.payloads.length>1||d!==l){a.push(new B().uint32(c.number*8+2).bytes(d).finish()),s=!0;continue}}a.push(c.raw)}return s?Gy(a):t}var Ku=class extends Error{constructor(t="Unknown event type"){super(t),this.name="AGUIUnknownEventTypeError"}};function Ky(t,e,n,r){let o=0,i=0,s=0;for(;;){if(e.offset>=t.length||s>=n)return-1;let a=t[e.offset++];if(s+=1,s===n&&a>r)return-1;if(o+=(a&127)*2**i,i+=7,(a&128)===0)return o}}var Ia=(t,e)=>Ky(t,e,5,15),Xy=(t,e)=>Ky(t,e,10,1);function kA(t){let e={offset:0},n=[];for(;e.offset<t.length;){let r=Ia(t,e);if(r<0)return!1;let o=Math.floor(r/8),i=r%8;if(o===0)return!1;if(i===3)n.push(o);else if(i===4){if(n.pop()!==o)return!1}else if(i===0){if(Xy(t,e)<0)return!1}else if(i===1)e.offset+=8;else if(i===5)e.offset+=4;else if(i===2){let s=Ia(t,e);if(s<0||e.offset+s>t.length)return!1;e.offset+=s}else return!1;if(e.offset>t.length)return!1}return n.length===0}function AA(t){let e={offset:0},n=[],r=0;for(;e.offset<t.length;){let o=Ia(t,e);if(o<0)return!1;let i=Math.floor(o/8),s=o%8;if(i===0)return!1;let a=n.length===0;if(s===3){if(a&&Ln.has(i))return!1;n.push(i)}else if(s===4){if(n.pop()!==i)return!1}else if(s===0){if(a&&Ln.has(i)||Xy(t,e)<0)return!1}else if(s===1){if(a&&Ln.has(i))return!1;e.offset+=8}else if(s===5){if(a&&Ln.has(i))return!1;e.offset+=4}else if(s===2){let c=Ia(t,e);if(c<0||e.offset+c>t.length)return!1;if(a){if(Ln.has(i)||!kA(t.subarray(e.offset,e.offset+c)))return!1;r+=1}e.offset+=c}else return!1;if(e.offset>t.length)return!1}return n.length===0&&r>0}function Jy(t){SA(t);let e=By.decode(Yy(t,{singular:Ln,descend:Wy})),n=Object.entries(e).filter(([,c])=>c!==void 0);if(n.length!==1)throw n.length===0&&AA(t)?new Ku:new Error("Invalid event");let r=n[0],o=wA[r[0]];if(o===void 0)throw new Error("Invalid event");let i=r[1],s=Or(i.baseEvent);if(!s)throw new Error("Invalid event");let a=bA[s.type];if(a!==o)throw new Error("Invalid event: envelope carries "+o+" but the base event declares "+String(a));if(i.type=o,i.timestamp=s.timestamp,i.rawEvent=s.rawEvent,s.metadata!==void 0&&(i.metadata=s.metadata),delete i.baseEvent,i.type==="MESSAGES_SNAPSHOT"&&Array.isArray(i.messages)&&(i.messages=i.messages.map(jy).filter(c=>c!==void 0)),i.type==="RUN_FINISHED"){let c=i,l=typeof c.outcome=="string"&&c.outcome!==""?c.outcome:void 0,d={};d.pendingToolCallIds=c.pendingToolCallIds,delete c.pendingToolCallIds,d.interrupts=c.interrupts,delete c.interrupts,delete c.outcome,l===void 0&&(we(d.pendingToolCallIds).length>0&&(c.pendingToolCallIds=d.pendingToolCallIds),we(d.interrupts).length>0&&(c.interrupts=d.interrupts)),l==="success"&&(c.outcome={type:"success",...we(d.pendingToolCallIds).length>0?{pendingToolCallIds:d.pendingToolCallIds}:{},...we(d.interrupts).length>0?{interrupts:d.interrupts}:{}}),l==="interrupt"&&(c.outcome={type:"interrupt",interrupts:we(d.interrupts),...we(d.pendingToolCallIds).length>0?{pendingToolCallIds:d.pendingToolCallIds}:{}}),l==="cancelled"&&(c.outcome={type:"cancelled",...we(d.pendingToolCallIds).length>0?{pendingToolCallIds:d.pendingToolCallIds}:{},...we(d.interrupts).length>0?{interrupts:d.interrupts}:{}}),l!==void 0&&!["success","interrupt","cancelled"].includes(l)&&(c.outcome={type:l,...we(d.pendingToolCallIds).length>0?{pendingToolCallIds:d.pendingToolCallIds}:{},...we(d.interrupts).length>0?{interrupts:d.interrupts}:{}})}if(i.type==="SUBAGENT_FINISHED"){let c=i,l=typeof c.outcome=="string"&&c.outcome!==""?c.outcome:void 0,d={};d.interruptIds=c.interruptIds,delete c.interruptIds,delete c.outcome,l===void 0&&we(d.interruptIds).length>0&&(c.interruptIds=d.interruptIds),l==="success"&&(c.outcome={type:"success",...we(d.interruptIds).length>0?{interruptIds:d.interruptIds}:{}}),l==="suspended"&&(c.outcome={type:"suspended",...we(d.interruptIds).length>0?{interruptIds:d.interruptIds}:{}}),l!==void 0&&!["success","suspended"].includes(l)&&(c.outcome={type:l,...we(d.interruptIds).length>0?{interruptIds:d.interruptIds}:{}})}if(i.type==="STATE_DELTA"&&Array.isArray(i.delta)&&(i.delta=i.delta.map(c=>{let l=Gb[c.op];return c.op=typeof l=="string"&&l!=="UNRECOGNIZED"?l.toLowerCase():String(c.op),Object.keys(c).forEach(d=>{c[d]===void 0&&delete c[d]}),c})),i.type==="ACTIVITY_DELTA"&&Array.isArray(i.patch)&&(i.patch=i.patch.map(c=>{let l=Gb[c.op];return c.op=typeof l=="string"&&l!=="UNRECOGNIZED"?l.toLowerCase():String(c.op),Object.keys(c).forEach(d=>{c[d]===void 0&&delete c[d]}),c})),i.type==="RUN_FINISHED"&&Array.isArray(i.usage)&&i.usage.length===0&&delete i.usage,i.type==="RUN_ERROR"&&Array.isArray(i.usage)&&i.usage.length===0&&delete i.usage,i.type==="TOOL_CALL_RESULT"){let c=i;if(c.content!==void 0&&we(c.contentParts).length>0)throw new Error("Invalid event: content carries both string content and content parts");c.content===void 0&&(c.content=we(c.contentParts).map(l=>{let d=Zy(l);return d===void 0&&Vy(),d}).filter(l=>l!==void 0)),delete c.contentParts}return i.type==="RUN_STARTED"&&i.input!==void 0&&(i.input=TA(i.input)),qu(i),i}var Xu="application/vnd.ag-ui.event+proto";var Ju=/^[v^~<>=]*?(\d+)(?:\.([x*]|\d+)(?:\.([x*]|\d+)(?:\.([x*]|\d+))?(?:-([\da-z\-]+(?:\.[\da-z\-]+)*))?(?:\+[\da-z\-]+(?:\.[\da-z\-]+)*)?)?)?$/i,Qu=t=>{if(typeof t!="string")throw new TypeError("Invalid argument expected string");let e=t.match(Ju);if(!e)throw new Error(`Invalid argument not valid semver ('${t}' received)`);return e.shift(),e},Qy=t=>t==="*"||t==="x"||t==="X",ew=t=>{let e=parseInt(t,10);return isNaN(e)?t:e},IA=(t,e)=>typeof t!=typeof e?[String(t),String(e)]:[t,e],CA=(t,e)=>{if(Qy(t)||Qy(e))return 0;let[n,r]=IA(ew(t),ew(e));return n>r?1:n<r?-1:0},eh=(t,e)=>{for(let n=0;n<Math.max(t.length,e.length);n++){let r=CA(t[n]||"0",e[n]||"0");if(r!==0)return r}return 0};var Hn=(t,e)=>{let n=Qu(t),r=Qu(e),o=n.pop(),i=r.pop(),s=eh(n,r);return s!==0?s:o&&i?eh(o.split("."),i.split(".")):o||i?o?-1:1:0};var th=t=>typeof t=="string"&&/^[v\d]/.test(t)&&Ju.test(t);var tw="@ag-ui/client";function NA(t){if(!t.metadata||!Object.prototype.hasOwnProperty.call(t.metadata,tw))return;let e=t.metadata?.[tw];if(!e||typeof e!="object"||Array.isArray(e))return[];if(!Object.prototype.hasOwnProperty.call(e,"authoritativeActivityTypes"))return;let n=e.authoritativeActivityTypes;return n===null?null:Array.isArray(n)&&n.every(r=>typeof r=="string")?n:[]}var ee=t=>{if(typeof structuredClone=="function")return structuredClone(t);try{return JSON.parse(JSON.stringify(t))}catch{return Array.isArray(t)?[...t]:{...t}}};function Ie(){return tn()}function OA(t){return t instanceof TypeError?/read[- ]?only|not extensible|cannot add property|cannot delete property|can't be deleted|unable to delete property|object is frozen|is not writable/i.test(t.message):!1}function ph(t){if(Object.freeze(t),typeof t=="object"&&t)for(let e of Object.values(t))typeof e=="object"&&e&&!Object.isFrozen(e)&&ph(e);return t}var nw=512*1024;function rw(t,e,n){let r=0,o=[t,e],i=new WeakSet;for(;o.length>0;){let s=o.pop();if(typeof s=="string"){if(r+=s.length,r>n)return!0}else if(typeof s=="object"&&s){if(i.has(s))continue;if(i.add(s),Array.isArray(s))for(let a=0;a<s.length;a++)o.push(s[a]);else{let a=Object.keys(s);for(let c=0;c<a.length;c++){let l=a[c];if(r+=l.length,r>n)return!0;o.push(s[l])}}}}return!1}async function le(t,e,n,r){let o=typeof process<"u"&&process.env!==void 0,i=o&&!!process.env.VITEST_WORKER_ID,s=o&&!!process.env.VITEST_WORKER_ID,a=s&&!rw(e,n,nw),c=a?ee(e):e,l=a?ee(n):n,d=!1,h=!1,m;for(let f of t)try{a&&(ph(c),ph(l));let u=await r(f,c,l);if(u===void 0)continue;let v=!1;if(u.messages!==void 0&&u.messages!==c&&(c=ee(u.messages),d=!0,v=!0),u.state!==void 0&&u.state!==l&&(l=ee(u.state),h=!0,v=!0),a&&v&&rw(c,l,nw)&&(a=!1),m=u.stopPropagation,m===!0)break}catch(u){if(i&&u instanceof TypeError)throw u;a&&s&&OA(u)?console.error("AG-UI: Subscriber attempted to mutate frozen inputs in-place. Return mutations via AgentStateMutation instead of mutating directly.",u):console.error("Subscriber error:",u);continue}return{...d?{messages:Object.isFrozen(c)?ee(c):c}:{},...h?{state:Object.isFrozen(l)?ee(l):l}:{},...m===void 0?{}:{stopPropagation:m}}}function Oa(t){if(!t)return{enabled:!1,events:!1,lifecycle:!1,verbose:!1};if(t===!0)return{enabled:!0,events:!0,lifecycle:!0,verbose:!0};let e=t.events??!0,n=t.lifecycle??!0,r=t.verbose??!1;return{enabled:e||n,events:e,lifecycle:n,verbose:r}}function Bn(t){if(t instanceof fh)return t;if(t===!0)return new fh(Oa(!0))}var fh=class{constructor(t){this.config=t}event(t,e,n,r){this.config.events&&(this.config.verbose?console.debug(`[${t}] ${e}`,typeof n=="string"?n:JSON.stringify(n)):console.debug(`[${t}] ${e}`,r??n))}lifecycle(t,e,n){this.config.lifecycle&&(n?console.debug(`[${t}] ${e}`,n):console.debug(`[${t}] ${e}`))}get eventsEnabled(){return this.config.events}get lifecycleEnabled(){return this.config.lifecycle}get enabled(){return this.config.enabled}};function nh(t){return t.enabled?new fh(t):void 0}function MA(t,e,n){if(e){let o=t.find(s=>s.id===e);if(o?.role==="assistant")return o;o&&console.warn(`TOOL_CALL_START: parentMessageId '${e}' matches a '${o.role}' message, not assistant \u2014 falling back to toolCallId`);let i={id:o?n:e,role:"assistant",toolCalls:[]};return t.push(i),i}let r={id:n,role:"assistant",toolCalls:[]};return t.push(r),r}function ct(t,e){return!t||e.metadata===void 0?!1:(t.metadata=Jf(t.metadata,ee(e.metadata)),!0)}var Fn=t=>typeof t=="object"&&t?t.role:void 0;function ww(t){if(Fn(t)!=="assistant")return[];let e=t.toolCalls;if(!Array.isArray(e))return[];let n=[];for(let r of e){if(typeof r!="object"||!r)continue;let o=r.id;typeof o=="string"&&n.push(o)}return n}function mh(t){let e=new Map,n=new Map,r=(u,v)=>{v.answered=!0,n.set(u,n.get(u)-1)},o=new Map,i=new Map,s=(u,v,E)=>{let T=u.get(v);T?T.push(E):u.set(v,[E])},a=-1;for(let u=0;u<t.length;u++){let v=t[u];if(typeof v!="object"||!v)continue;let E=Fn(v);if(E==="tool"){let T=v.toolCallId;if(typeof T!="string")continue;let w=e.get(T);if(!w){s(i,T,u);continue}let D;for(let S=w.length-1;S>=0&&w[S].issuer===a;S--)w[S].answered||(D=w[S]);if(D){r(T,D);continue}n.get(T)>0&&s(o,T,u)}else if(E!=="activity"&&E!=="reasoning"){a=u;for(let T of ww(v))s(e,T,{issuer:u,answered:!1}),n.set(T,(n.get(T)??0)+1)}}let c=new Map,l=[],d=(u,v,E)=>{r(u,E),s(c,E.issuer,v),l[v]=!0};for(let[u,v]of o){let E=e.get(u),T=E.length-1;for(let w=v.length-1;w>=0;w--){let D=v[w];for(;T>=0&&(E[T].answered||E[T].issuer>=D);)T--;if(T<0)break;d(u,D,E[T])}}for(let[u,v]of i){let E=e.get(u);E?.length!==1||E[0].answered||d(u,v[0],E[0])}if(c.size===0)return t;for(let u of c.values())u.sort((v,E)=>v-E);let h=[],m,f=()=>{if(m){let u=h.length;for(let E=h.length-1;E>=0;E--){let T=h[E],w=Fn(T);if(typeof T=="object"&&T&&w!=="activity"&&w!=="reasoning")break;w==="reasoning"&&(u=E)}let v=h.splice(u);for(let E of m)h.push(t[E]);for(let E of v)h.push(E)}m=void 0};for(let u=0;u<t.length;u++){if(l[u])continue;let v=t[u],E=Fn(v);typeof v=="object"&&v&&E!=="tool"&&E!=="activity"&&E!=="reasoning"&&f(),h.push(v),m=c.get(u)??m}return f(),h}function PA(t){let e={...t};t.role==="activity"&&(e.content=ee(t.content));let n=t.toolCalls;return Array.isArray(n)&&(e.toolCalls=n.map(r=>r?.function?{...r,function:{...r.function}}:{...r})),e}function LA(t,e,n){let r=Object.keys(t);if(r.length!==Object.keys(e).length)return!1;for(let o of r){let i=o==="content"?n:t[o],s=e[o];if(o==="toolCalls"&&Array.isArray(i)&&Array.isArray(s)){if(!zA(i,s))return!1}else if(i!==s)return!1}return!0}function zA(t,e){if(t.length!==e.length)return!1;for(let n=0;n<t.length;n+=1){let r=t[n],o=e[n],i=Object.keys(r);if(i.length!==Object.keys(o).length)return!1;for(let s of i)if(s==="function"&&r.function&&o.function){let a=r.function,c=o.function,l=Object.keys(a);if(l.length!==Object.keys(c).length)return!1;for(let d of l)if(a[d]!==c[d])return!1}else if(r[s]!==o[s])return!1}return!0}var xw=(t,e,n,r,o)=>{let i=Bn(o),s=ee(n.messages),a=ee(t.state),c={},l=new Set,d=new Set,h=[],m=new Set,f=w=>{let D=w.outcome?.type==="success"?w.outcome.pendingToolCallIds:void 0;return D!==void 0&&D.length>0?[...D]:h.filter(S=>!m.has(S))},u=w=>{w.messages!==void 0&&(s=w.messages,c.messages=w.messages),w.state!==void 0&&(a=w.state,c.state=w.state)},v=new WeakMap,E=w=>w.map(D=>{let S=v.get(D);if(S!==void 0&&LA(S.copy,D,S.content))return S.copy;let g=PA(D);return v.set(D,{copy:g,content:D.content}),g}),T=()=>{let w={};return c.messages!==void 0&&(w.messages=E(c.messages)),c.state!==void 0&&(w.state=ee(c.state)),c={},w.messages!==void 0||w.state!==void 0?ge(w):An};return e.pipe(hs(async w=>{let D=await le(r,s,a,(S,g,x)=>S.onEvent?.({event:w,agent:n,input:t,messages:g,state:x}));if(u(D),D.stopPropagation===!0?i?.event("APPLY","Event dropped:",w,{type:w.type,reason:"stopPropagation by subscriber"}):i?.event("APPLY","Event applied:",w,{type:w.type,subscribers:r.length}),D.stopPropagation===!0)return T();switch(w.type){case y.TEXT_MESSAGE_START:{let S=await le(r,s,a,(g,x,b)=>g.onTextMessageStartEvent?.({event:w,messages:x,state:b,agent:n,input:t}));if(u(S),S.stopPropagation!==!0){let{messageId:g,role:x="assistant",name:b,subagentRunId:k}=w,I=s.find(L=>L.id===g);if(I?.role==="activity")return console.warn(`TEXT_MESSAGE_START: Message '${g}' is an activity message \u2014 message ids must be unique across activity and text messages`),T();let P=I;if(!P){let L={id:g,role:x,content:"",...b!==void 0&&{name:b},...k!=null&&{subagentRunId:k}};s.push(L),P=L}let $=ct(P,w);(!I||$)&&u({messages:s})}return T()}case y.TEXT_MESSAGE_CONTENT:{let{messageId:S,delta:g}=w,x=s.find(k=>k.id===S);if(!x)return console.warn(`TEXT_MESSAGE_CONTENT: No message found with ID '${S}'`),T();if(x.role==="activity")return console.warn(`TEXT_MESSAGE_CONTENT: Message '${S}' is an activity message \u2014 message ids must be unique across activity and text messages`),T();let b=await le(r,s,a,(k,I,P)=>k.onTextMessageContentEvent?.({event:w,messages:I,state:P,agent:n,input:t,textMessageBuffer:typeof x.content=="string"?x.content:""}));return u(b),b.stopPropagation!==!0&&(x.content=`${typeof x.content=="string"?x.content:""}${g}`,ct(x,w),u({messages:s})),T()}case y.TEXT_MESSAGE_END:{let{messageId:S}=w,g=s.find(b=>b.id===S);if(!g)return console.warn(`TEXT_MESSAGE_END: No message found with ID '${S}'`),T();if(g.role==="activity")return console.warn(`TEXT_MESSAGE_END: Message '${S}' is an activity message \u2014 message ids must be unique across activity and text messages`),T();let x=await le(r,s,a,(b,k,I)=>b.onTextMessageEndEvent?.({event:w,messages:k,state:I,agent:n,input:t,textMessageBuffer:typeof g.content=="string"?g.content:""}));return u(x),x.stopPropagation!==!0&&ct(g,w)&&u({messages:s}),await Promise.all(r.map(b=>b.onNewMessage?.({message:g,messages:s,state:a,agent:n,input:t}))),T()}case y.TOOL_CALL_START:{let S=await le(r,s,a,(g,x,b)=>g.onToolCallStartEvent?.({event:w,messages:x,state:b,agent:n,input:t}));if(u(S),S.stopPropagation!==!0){let{toolCallId:g,toolCallName:x,parentMessageId:b,subagentRunId:k}=w;h.includes(g)||h.push(g);let I=s.find(ie=>ie.toolCalls?.some(De=>De.id===g))?.toolCalls?.find(ie=>ie.id===g);if(l.has(g)||(l.add(g),I&&d.add(g)),I){let ie=I.function.name!==x;return ie&&(console.warn(`TOOL_CALL_START: tool call '${g}' already exists with name '${I.function.name}' \u2014 updating it to '${x}'`),I.function.name=x),(ct(I,w)||ie)&&u({messages:s}),T()}let P=new Set(s.map(ie=>ie.id)),$=MA(s,b,g);!P.has($.id)&&k!=null&&$.subagentRunId===void 0&&($.subagentRunId=k),$.toolCalls??=[];let L={id:g,type:"function",function:{name:x,arguments:""}};$.toolCalls.push(L),ct(L,w),u({messages:s})}return T()}case y.TOOL_CALL_ARGS:{let{toolCallId:S,delta:g}=w,x=s.find(I=>I.toolCalls?.some(P=>P.id===S));if(!x)return console.warn(`TOOL_CALL_ARGS: No message found containing tool call with ID '${S}'`),T();let b=x.toolCalls?.find(I=>I.id===S);if(!b)return console.warn(`TOOL_CALL_ARGS: No tool call found with ID '${S}'`),T();let k=await le(r,s,a,(I,P,$)=>{let L=d.has(S)?"":b.function.arguments,ie=b.function.name,De={};try{De=ms(L)}catch{}return I.onToolCallArgsEvent?.({event:w,messages:P,state:$,agent:n,input:t,toolCallBuffer:L,toolCallName:ie,partialToolCallArgs:De})});return u(k),k.stopPropagation!==!0&&(d.delete(S)?b.function.arguments=g:b.function.arguments+=g,ct(b,w),u({messages:s})),T()}case y.TOOL_CALL_END:{let{toolCallId:S}=w,g=s.find(k=>k.toolCalls?.some(I=>I.id===S));if(!g)return console.warn(`TOOL_CALL_END: No message found containing tool call with ID '${S}'`),T();let x=g.toolCalls?.find(k=>k.id===S);if(!x)return console.warn(`TOOL_CALL_END: No tool call found with ID '${S}'`),T();let b=await le(r,s,a,(k,I,P)=>{let $=x.function.arguments,L=x.function.name,ie={};try{ie=JSON.parse($)}catch{}return k.onToolCallEndEvent?.({event:w,messages:I,state:P,agent:n,input:t,toolCallName:L,toolCallArgs:ie})});return u(b),b.stopPropagation!==!0&&(l.delete(S),d.delete(S)),b.stopPropagation!==!0&&ct(x,w)&&u({messages:s}),await Promise.all(r.map(k=>k.onNewToolCall?.({toolCall:x,messages:s,state:a,agent:n,input:t}))),T()}case y.TOOL_CALL_RESULT:{let S=await le(r,s,a,(g,x,b)=>g.onToolCallResultEvent?.({event:w,messages:x,state:b,agent:n,input:t}));if(u(S),S.stopPropagation!==!0){let{messageId:g,toolCallId:x,content:b,role:k,subagentRunId:I}=w;m.add(x);let P=s.findIndex(L=>L.id===g&&L.role==="tool"&&L.toolCallId===x),$={...P===-1?{}:s[P],id:g,toolCallId:x,role:k||"tool",content:b,...I!=null&&{subagentRunId:I}};if(I??delete $.subagentRunId,ct($,w),P!==-1)s[P]=$;else{let L=-1,ie=-1,De=!1;for(let pe=s.length-1;pe>=0;pe--){let _t=s[pe];if(Fn(_t)==="tool"&&_t.toolCallId===x)De=!0;else if(ww(_t).includes(x)){if(ie===-1&&(ie=pe),!De){L=pe;break}De=!1}}if(L===-1&&(L=ie),L===-1)s.push($);else{let pe=L+1;for(;pe<s.length&&(typeof s[pe]!="object"||Fn(s[pe])==="tool"||Fn(s[pe])==="activity");)pe++;s.splice(pe,0,$)}await Promise.all(r.map(pe=>pe.onNewMessage?.({message:$,messages:s,state:a,agent:n,input:t})))}u({messages:s})}return T()}case y.STATE_SNAPSHOT:{let S=await le(r,s,a,(g,x,b)=>g.onStateSnapshotEvent?.({event:w,messages:x,state:b,agent:n,input:t}));if(u(S),S.stopPropagation!==!0){let{snapshot:g}=w;a=ee(g),u({state:a})}return T()}case y.STATE_DELTA:{let S=await le(r,s,a,(g,x,b)=>g.onStateDeltaEvent?.({event:w,messages:x,state:b,agent:n,input:t}));if(u(S),S.stopPropagation!==!0){let{delta:g}=w;try{a=Bi.applyPatch(a,ee(g),!0,!1).newDocument,u({state:a})}catch(x){let b=x instanceof Error?x.message:String(x);console.warn(`Failed to apply state patch:
Current state: ${JSON.stringify(a,null,2)}
Patch operations: ${JSON.stringify(g,null,2)}
Error: ${b}`)}}return T()}case y.MESSAGES_SNAPSHOT:{let S=await le(r,s,a,(g,x,b)=>g.onMessagesSnapshotEvent?.({event:w,messages:x,state:b,agent:n,input:t}));if(u(S),S.stopPropagation!==!0){let g=ee(w.messages).map(L=>{if(L.subagentRunId!==null)return L;let ie={...L};return delete ie.subagentRunId,ie}),x=new Map(g.map(L=>[L.id,L])),b=NA(w),k=g.some(L=>L.role==="activity"),I=g.some(L=>L.role==="reasoning"),P=L=>L.role==="activity"&&(b?!b.includes(L.activityType):b!==null&&!k)||L.role==="reasoning"&&!I;s=s.filter(L=>x.has(L.id)||P(L)).map(L=>x.get(L.id)??L);let $=new Set(s.map(L=>L.id));for(let L of g)$.has(L.id)||s.push(L);s=mh(s),u({messages:s})}return T()}case y.ACTIVITY_SNAPSHOT:{let S=w,g=s.findIndex(P=>P.id===S.messageId),x=g>=0?s[g]:void 0,b=x?.role==="activity"?x:void 0,k=S.replace??!0,I=await le(r,s,a,(P,$,L)=>P.onActivitySnapshotEvent?.({event:S,messages:$,state:L,agent:n,input:t,activityMessage:b,existingMessage:x}));if(u(I),I.stopPropagation!==!0){let P={id:S.messageId,role:"activity",activityType:S.activityType,content:ee(S.content),...S.subagentRunId!=null&&{subagentRunId:S.subagentRunId}},$,L;g===-1?(s.push(P),$=P,L=P):b?(k&&(s[g]={...b,activityType:S.activityType,content:ee(S.content),subagentRunId:S.subagentRunId},S.subagentRunId??delete s[g].subagentRunId),L=s[g]):k&&(s[g]=P,$=P,L=P),ct(L,S),u({messages:s}),$&&await Promise.all(r.map(ie=>ie.onNewMessage?.({message:$,messages:s,state:a,agent:n,input:t})))}return T()}case y.ACTIVITY_DELTA:{let S=w,g=s.findIndex(I=>I.id===S.messageId);if(g===-1)return T();let x=s[g];if(x.role!=="activity")return console.warn(`ACTIVITY_DELTA: Message '${S.messageId}' is not an activity message`),T();let b=x,k=await le(r,s,a,(I,P,$)=>I.onActivityDeltaEvent?.({event:S,messages:P,state:$,agent:n,input:t,activityMessage:b}));if(u(k),k.stopPropagation!==!0)try{ct(b,S)&&u({messages:s});let I=ee(b.content??{}),P=Bi.applyPatch(I,S.patch??[],!0,!1).newDocument;s[g]={...b,content:ee(P),activityType:S.activityType},u({messages:s})}catch(I){let P=I instanceof Error?I.message:String(I);console.warn(`Failed to apply activity patch for '${S.messageId}': ${P}`)}return T()}case y.RAW:return u(await le(r,s,a,(S,g,x)=>S.onRawEvent?.({event:w,messages:g,state:x,agent:n,input:t}))),T();case y.CUSTOM:return u(await le(r,s,a,(S,g,x)=>S.onCustomEvent?.({event:w,messages:g,state:x,agent:n,input:t}))),T();case y.RUN_STARTED:{let S=await le(r,s,a,(g,x,b)=>g.onRunStartedEvent?.({event:w,messages:x,state:b,agent:n,input:t}));if(u(S),h=[],m=new Set,S.stopPropagation!==!0){l.clear(),d.clear();let g=w;if(g.input?.messages){for(let x of g.input.messages){let b=x;if(x.subagentRunId===null){let k={...x};delete k.subagentRunId,b=k}s.find(k=>k.id===b.id)||s.push(b)}u({messages:s})}}return T()}case y.RUN_FINISHED:{let S=w,g=S.outcome?.type==="interrupt"?{event:S,outcome:"interrupt",interrupts:S.outcome.interrupts}:S.outcome?.type==="cancelled"?{event:S,outcome:"cancelled"}:{event:S,outcome:"success",result:S.result,pendingToolCallIds:f(S)},x=await le(r,s,a,(b,k,I)=>b.onRunFinishedEvent?.({...g,messages:k,state:I,agent:n,input:t}));return u(x),x.stopPropagation!==!0&&(n.pendingInterrupts=g.outcome==="interrupt"?g.interrupts.map(b=>{if(b.subagentRunId!==null)return b;let k={...b};return delete k.subagentRunId,k}):[]),T()}case y.RUN_ERROR:return u(await le(r,s,a,(S,g,x)=>S.onRunErrorEvent?.({event:w,messages:g,state:x,agent:n,input:t}))),T();case y.STEP_STARTED:return u(await le(r,s,a,(S,g,x)=>S.onStepStartedEvent?.({event:w,messages:g,state:x,agent:n,input:t}))),T();case y.STEP_FINISHED:return u(await le(r,s,a,(S,g,x)=>S.onStepFinishedEvent?.({event:w,messages:g,state:x,agent:n,input:t}))),T();case y.TEXT_MESSAGE_CHUNK:throw Error("TEXT_MESSAGE_CHUNK must be transformed before being applied");case y.TOOL_CALL_CHUNK:throw Error("TOOL_CALL_CHUNK must be transformed before being applied");case y.REASONING_START:return u(await le(r,s,a,(S,g,x)=>S.onReasoningStartEvent?.({event:w,messages:g,state:x,agent:n,input:t}))),T();case y.REASONING_MESSAGE_START:{let S=await le(r,s,a,(g,x,b)=>g.onReasoningMessageStartEvent?.({event:w,messages:x,state:b,agent:n,input:t}));if(u(S),S.stopPropagation!==!0){let{messageId:g,subagentRunId:x}=w,b=s.find(P=>P.id===g);if(b?.role==="activity")return console.warn(`REASONING_MESSAGE_START: Message '${g}' is an activity message \u2014 message ids must be unique across activity and reasoning messages`),T();let k=b;if(!k){let P={id:g,role:"reasoning",content:"",...x!=null&&{subagentRunId:x}};s.push(P),k=P}let I=ct(k,w);(!b||I)&&u({messages:s})}return T()}case y.REASONING_MESSAGE_CONTENT:{let{messageId:S,delta:g}=w,x=s.find(k=>k.id===S);if(!x)return console.warn(`REASONING_MESSAGE_CONTENT: No message found with ID '${S}'`),T();if(x.role==="activity")return console.warn(`REASONING_MESSAGE_CONTENT: Message '${S}' is an activity message \u2014 message ids must be unique across activity and reasoning messages`),T();let b=await le(r,s,a,(k,I,P)=>k.onReasoningMessageContentEvent?.({event:w,messages:I,state:P,agent:n,input:t,reasoningMessageBuffer:typeof x.content=="string"?x.content:""}));return u(b),b.stopPropagation!==!0&&(x.content=`${typeof x.content=="string"?x.content:""}${g}`,ct(x,w),u({messages:s})),T()}case y.REASONING_MESSAGE_END:{let{messageId:S}=w,g=s.find(b=>b.id===S);if(!g)return console.warn(`REASONING_MESSAGE_END: No message found with ID '${S}'`),T();if(g.role==="activity")return console.warn(`REASONING_MESSAGE_END: Message '${S}' is an activity message \u2014 message ids must be unique across activity and reasoning messages`),T();let x=await le(r,s,a,(b,k,I)=>b.onReasoningMessageEndEvent?.({event:w,messages:k,state:I,agent:n,input:t,reasoningMessageBuffer:typeof g.content=="string"?g.content:""}));return u(x),x.stopPropagation!==!0&&ct(g,w)&&u({messages:s}),await Promise.all(r.map(b=>b.onNewMessage?.({message:g,messages:s,state:a,agent:n,input:t}))),T()}case y.REASONING_MESSAGE_CHUNK:throw Error("REASONING_MESSAGE_CHUNK must be transformed before being applied");case y.REASONING_END:return u(await le(r,s,a,(S,g,x)=>S.onReasoningEndEvent?.({event:w,messages:g,state:x,agent:n,input:t}))),T();case y.REASONING_ENCRYPTED_VALUE:{let{subtype:S,entityId:g,encryptedValue:x}=w,b=await le(r,s,a,(k,I,P)=>k.onReasoningEncryptedValueEvent?.({event:w,messages:I,state:P,agent:n,input:t}));if(u(b),b.stopPropagation!==!0){let k=!1;if(S==="tool-call"){for(let I of s)if(I.role==="assistant"&&I.toolCalls){let P=I.toolCalls.find($=>$.id===g);if(P){P.encryptedValue=x,k=!0;break}}}else{let I=s.find(P=>P.id===g);I?.role!=="activity"&&I&&(I.encryptedValue=x,k=!0)}k&&(c.messages=s)}return T()}case y.SUBAGENT_STARTED:return u(await le(r,s,a,(S,g,x)=>S.onSubagentStartedEvent?.({event:w,messages:g,state:x,agent:n,input:t}))),T();case y.SUBAGENT_FINISHED:return u(await le(r,s,a,(S,g,x)=>S.onSubagentFinishedEvent?.({event:w,messages:g,state:x,agent:n,input:t}))),T();case y.SUBAGENT_ERROR:return u(await le(r,s,a,(S,g,x)=>S.onSubagentErrorEvent?.({event:w,messages:g,state:x,agent:n,input:t}))),T()}return w.type,T()}),Eo(),r.length>0?Hd({}):w=>w)};function za(t,e){typeof process<"u"&&process.env!==void 0&&process.env.SUPPRESS_TRANSFORMATION_WARNINGS||console.warn(`[ag-ui][compat] Converting deprecated ${t} to ${e}. The old shape leaves the protocol after its shim window \u2014 see the repo-root DEPRECATIONS.md. Set SUPPRESS_TRANSFORMATION_WARNINGS=true to silence.`)}var rh=t=>e=>{let n=Bn(t),r=new Set,o=new Set,i=new Set,s=new Set,a={message:new Map,toolCall:new Map,activity:new Map,reasoning:new Map},c=!1,l=!1,d=!1,h=new Map,m=g=>{let x=h.get(g);return x||(x=new Map,h.set(g,x)),x},f=()=>{for(let g of h.values())if(g.size>0)return!0;return!1},u=new Map,v=new Set,E=!1,T=!1,w=()=>{T=!1,r.clear(),o.clear(),i.clear(),s.clear(),a.message.clear(),a.toolCall.clear(),a.activity.clear(),a.reasoning.clear(),h.clear(),u.clear(),v.clear(),c=!1,l=!1,E=!0},D=(g,x)=>{let b=g??[];if(Array.isArray(b))for(let k of b){if(!k||typeof k.id!="string")continue;if(k.subagentRunId===null)return new K(`Cannot send a message (id '${k.id}') with 'subagentRunId: null'. The field is optional \u2014 omit it entirely.`);let I=k.role==="reasoning"?a.reasoning:k.role==="activity"?a.activity:a.message;(x||!I.has(k.id))&&I.set(k.id,{subagentRunId:k.subagentRunId});for(let P of k.toolCalls??[])P&&typeof P.id=="string"&&(x||!a.toolCall.has(P.id))&&a.toolCall.set(P.id,{subagentRunId:k.subagentRunId??void 0})}},S=(g,x,b,k,I)=>{if(x!==void 0&&b&&b.subagentRunId!==x)return new K(`Cannot send '${g}': subagentRunId '${x}' does not match the ${k} '${I}' opener's subagent '${b.subagentRunId??"(the parent agent)"}'.`)};return e.pipe(nt(g=>{let x=g.type;if(n?.event("VERIFY","Event:",g,{type:g.type}),l&&x!==y.RUN_STARTED)return Z(()=>new K(`Cannot send event type '${x}': The run has already errored with 'RUN_ERROR'. No further events can be sent.`));if(c&&x!==y.RUN_ERROR&&x!==y.RUN_STARTED)return Z(()=>new K(`Cannot send event type '${x}': The run has already finished with 'RUN_FINISHED'. Start a new run with 'RUN_STARTED'.`));if(d){if(x===y.RUN_STARTED){if(E&&!c&&!l)return Z(()=>new K("Cannot send 'RUN_STARTED' while a run is still active. The previous run must be finished with 'RUN_FINISHED' before starting a new run."));(c||l)&&w()}}else if(d=!0,x!==y.RUN_STARTED&&x!==y.RUN_ERROR)return Z(()=>new K("First event must be 'RUN_STARTED'"));if(g.subagentRunId===null){T||(T=!0,za("subagentRunId: null","an absent field"));let{subagentRunId:b,...k}=g;g=k}if(x===y.SUBAGENT_STARTED||x===y.SUBAGENT_FINISHED||x===y.SUBAGENT_ERROR){let b=x===y.SUBAGENT_STARTED?["description","parentSubagentRunId","parentToolCallId","parentMessageId"]:x===y.SUBAGENT_FINISHED?["outcome"]:["code"];for(let I of b)if(g[I]===null)return Z(()=>new K(`Cannot send '${x}' with '${I}: null'. The field is optional \u2014 omit it entirely.`));let k=g.outcome;if(k!=null&&k.type!=="success"&&k.type!=="suspended")return Z(()=>new K(`Cannot send '${x}' with outcome type '${String(k.type)}'. The outcome is either { type: "success" } or { type: "suspended" }.`));if(k&&k.interruptIds===null)return Z(()=>new K(`Cannot send '${x}' with 'outcome.interruptIds: null'. The field is optional \u2014 omit it entirely.`));if(k&&Array.isArray(k.interruptIds)&&k.interruptIds.some(I=>typeof I!="string"))return Z(()=>new K(`Cannot send '${x}' with a non-string entry in 'outcome.interruptIds'. Interrupt ids are strings.`))}if(x===y.RUN_FINISHED){let b=g.outcome;if(b?.type==="interrupt"&&Array.isArray(b.interrupts)){for(let k of b.interrupts)if(k&&k.subagentRunId===null)return Z(()=>new K(`Cannot send 'RUN_FINISHED' with an interrupt (id '${k.id}') carrying 'subagentRunId: null'. The field is optional \u2014 omit it entirely.`))}}switch(x){case y.TEXT_MESSAGE_START:{let b=g.messageId;if(r.has(b))return Z(()=>new K(`Cannot send 'TEXT_MESSAGE_START' event: A text message with ID '${b}' is already in progress. Complete it with 'TEXT_MESSAGE_END' first.`));let k=a.message.get(b);if(k){let I=S(x,g.subagentRunId,k,"message",b);if(I)return Z(()=>I)}return r.add(b),k||a.message.set(b,{subagentRunId:g.subagentRunId}),ge(g)}case y.TEXT_MESSAGE_CONTENT:{let b=g.messageId;if(!r.has(b))return Z(()=>new K(`Cannot send 'TEXT_MESSAGE_CONTENT' event: No active text message found with ID '${b}'. Start a text message with 'TEXT_MESSAGE_START' first.`));let k=S(x,g.subagentRunId,a.message.get(b),"message",b);return k?Z(()=>k):ge(g)}case y.TEXT_MESSAGE_END:{let b=g.messageId;if(!r.has(b))return Z(()=>new K(`Cannot send 'TEXT_MESSAGE_END' event: No active text message found with ID '${b}'. A 'TEXT_MESSAGE_START' event must be sent first.`));let k=S(x,g.subagentRunId,a.message.get(b),"message",b);return k?Z(()=>k):(r.delete(b),ge(g))}case y.TOOL_CALL_START:{let b=g.toolCallId;if(o.has(b))return Z(()=>new K(`Cannot send 'TOOL_CALL_START' event: A tool call with ID '${b}' is already in progress. Complete it with 'TOOL_CALL_END' first.`));let k=g.parentMessageId,I=g.subagentRunId,P;if(k!==void 0){let L=a.message.get(k);if(L){if(I!==void 0&&I!==L.subagentRunId)return Z(()=>new K(`Cannot send 'TOOL_CALL_START': subagentRunId '${I}' does not match its parent message '${k}' owner '${L.subagentRunId??"(the parent agent)"}'. A tool call belongs to the message that carries it.`));P=L}}let $=a.toolCall.get(b);if($){let L=S(x,I,$,"tool call",b);if(L)return Z(()=>L);if(I===void 0&&P&&P.subagentRunId!==$.subagentRunId)return Z(()=>new K(`Cannot send 'TOOL_CALL_START': tool call '${b}' is owned by '${$.subagentRunId??"(the parent agent)"}' but its parent message '${k}' is owned by '${P.subagentRunId??"(the parent agent)"}'. A tool call belongs to the message that carries it.`))}return o.add(b),$||a.toolCall.set(b,I===void 0?P??{subagentRunId:void 0}:{subagentRunId:I}),ge(g)}case y.TOOL_CALL_ARGS:{let b=g.toolCallId;if(!o.has(b))return Z(()=>new K(`Cannot send 'TOOL_CALL_ARGS' event: No active tool call found with ID '${b}'. Start a tool call with 'TOOL_CALL_START' first.`));let k=S(x,g.subagentRunId,a.toolCall.get(b),"tool call",b);return k?Z(()=>k):ge(g)}case y.TOOL_CALL_END:{let b=g.toolCallId;if(!o.has(b))return Z(()=>new K(`Cannot send 'TOOL_CALL_END' event: No active tool call found with ID '${b}'. A 'TOOL_CALL_START' event must be sent first.`));let k=S(x,g.subagentRunId,a.toolCall.get(b),"tool call",b);return k?Z(()=>k):(o.delete(b),ge(g))}case y.STEP_STARTED:{let b=g.stepName,k=g.subagentRunId;return m(k).has(b)?Z(()=>new K(`Step "${b}" is already active for 'STEP_STARTED'${k===void 0?"":` in subagent '${k}'`}`)):(m(k).set(b,!0),ge(g))}case y.STEP_FINISHED:{let b=g.stepName,k=g.subagentRunId;if(!m(k).has(b)){let I,P=!1;for(let[$,L]of h)if($!==k&&L.has(b)){I=$,P=!0;break}return Z(P?()=>new K(`Cannot send 'STEP_FINISHED' for step "${b}" attributed to ${k===void 0?"the parent agent":`subagent '${k}'`}: that step is open under ${I===void 0?"the parent agent":`subagent '${I}'`}. A step must be finished by whoever started it.`):()=>new K(`Cannot send 'STEP_FINISHED' for step "${b}" that was not started`))}return m(k).delete(b),ge(g)}case y.ACTIVITY_SNAPSHOT:{let b=g.messageId;return(!a.activity.has(b)||g.replace!==!1)&&a.activity.set(b,{subagentRunId:g.subagentRunId}),ge(g)}case y.TOOL_CALL_RESULT:{let b=g.messageId;return typeof b=="string"&&a.message.set(b,{subagentRunId:g.subagentRunId}),ge(g)}case y.REASONING_START:case y.REASONING_MESSAGE_START:{let b=g.messageId,k=x===y.REASONING_START,I=k?i:s;if(I.has(b))return Z(()=>new K(k?`Cannot send 'REASONING_START' event: A reasoning span with ID '${b}' is already in progress. Complete it with 'REASONING_END' first.`:`Cannot send 'REASONING_MESSAGE_START' event: A reasoning message with ID '${b}' is already in progress. Complete it with 'REASONING_MESSAGE_END' first.`));let P=a.reasoning.get(b);if(P){let $=S(x,g.subagentRunId,P,"reasoning message",b);if($)return Z(()=>$)}return I.add(b),P||a.reasoning.set(b,{subagentRunId:g.subagentRunId}),ge(g)}case y.REASONING_MESSAGE_CONTENT:case y.REASONING_MESSAGE_END:case y.REASONING_END:{let b=g.messageId,k=x===y.REASONING_END,I=k?i:s;if(!I.has(b))return Z(()=>new K(k?`Cannot send 'REASONING_END' event: No active reasoning span found with ID '${b}'. A 'REASONING_START' event must be sent first.`:`Cannot send '${x}' event: No active reasoning message found with ID '${b}'. Start a reasoning message with 'REASONING_MESSAGE_START' first.`));let P=S(x,g.subagentRunId,a.reasoning.get(b),"reasoning message",b);return P?Z(()=>P):((x===y.REASONING_END||x===y.REASONING_MESSAGE_END)&&I.delete(b),ge(g))}case y.REASONING_ENCRYPTED_VALUE:{let b=g.entityId,k=g.subtype,I=k==="tool-call"?a.toolCall.get(b):k==="message"?a.message.get(b)??a.reasoning.get(b):a.reasoning.get(b),P=k==="tool-call"?"tool call":k==="message"?"message":"reasoning message",$=S(x,g.subagentRunId,I,P,b);return $?Z(()=>$):ge(g)}case y.ACTIVITY_DELTA:{let b=g.messageId,k=S(x,g.subagentRunId,a.activity.get(b),"activity",b);return k?Z(()=>k):ge(g)}case y.SUBAGENT_STARTED:{if(typeof g.subagentRunId!="string")return Z(()=>new K("Cannot send 'SUBAGENT_STARTED' without a 'subagentRunId'."));if(typeof g.name!="string")return Z(()=>new K("Cannot send 'SUBAGENT_STARTED' without a 'name'."));let b=g.subagentRunId,k=g.parentSubagentRunId;return u.has(b)?Z(()=>new K(`Cannot send 'SUBAGENT_STARTED': subagent '${b}' is already active. Finish it with 'SUBAGENT_FINISHED' first.`)):v.has(b)?Z(()=>new K(`Cannot send 'SUBAGENT_STARTED': subagent '${b}' has already finished in this run. Subagent IDs are per-invocation and cannot be reused.`)):k!==void 0&&!u.has(k)&&!v.has(k)?Z(()=>new K(`Cannot send 'SUBAGENT_STARTED': parentSubagentRunId '${k}' has not been started in this run.`)):(u.set(b,!0),ge(g))}case y.SUBAGENT_FINISHED:case y.SUBAGENT_ERROR:{if(typeof g.subagentRunId!="string")return Z(()=>new K(`Cannot send '${x}' without a 'subagentRunId'.`));if(x===y.SUBAGENT_ERROR&&typeof g.message!="string")return Z(()=>new K("Cannot send 'SUBAGENT_ERROR' without a 'message'."));let b=g.subagentRunId;return u.has(b)?(u.delete(b),v.add(b),ge(g)):Z(()=>new K(`Cannot send '${x}': no active subagent found with ID '${b}'. A 'SUBAGENT_STARTED' event must be sent first.`))}case y.MESSAGES_SNAPSHOT:{let b=D(g.messages,!0);if(b)return Z(()=>b)}return ge(g);case y.RUN_STARTED:E=!0;{let b=D((g.input??{}).messages,!1);if(b)return Z(()=>b)}return ge(g);case y.RUN_FINISHED:if(f()){let b=[];for(let[I,P]of h)for(let $ of P.keys())b.push(I===void 0?$:`${$} (subagent '${I}')`);let k=b.join(", ");return Z(()=>new K(`Cannot send 'RUN_FINISHED' while steps are still active: ${k}`))}if(r.size>0){let b=Array.from(r.keys()).join(", ");return Z(()=>new K(`Cannot send 'RUN_FINISHED' while text messages are still active: ${b}`))}if(s.size>0){let b=Array.from(s.keys()).join(", ");return Z(()=>new K(`Cannot send 'RUN_FINISHED' while reasoning messages are still active: ${b}`))}if(i.size>0){let b=Array.from(i.keys()).join(", ");return Z(()=>new K(`Cannot send 'RUN_FINISHED' while reasoning spans are still active: ${b}`))}if(o.size>0){let b=Array.from(o.keys()).join(", ");return Z(()=>new K(`Cannot send 'RUN_FINISHED' while tool calls are still active: ${b}`))}if(u.size>0){let b=Array.from(u.keys()).join(", ");return Z(()=>new K(`Cannot send 'RUN_FINISHED' while subagents are still active: ${b}`))}return c=!0,ge(g);case y.RUN_ERROR:return l=!0,ge(g);case y.CUSTOM:return ge(g);default:return ge(g)}}))},Gn=(function(t){return t.HEADERS="headers",t.DATA="data",t})({}),bh=t=>Rn(()=>jt(t())).pipe(Fd(e=>{if(!e.ok){let o=e.headers.get("content-type")||"";return jt(e.text()).pipe(nt(i=>{let s=i;if(o.includes("application/json"))try{s=JSON.parse(i)}catch{}let a=Error(`HTTP ${e.status}: ${typeof s=="string"?s:JSON.stringify(s)}`);return a.status=e.status,a.payload=s,Z(()=>a)}))}let n={type:Gn.HEADERS,status:e.status,headers:e.headers},r=e.body?.getReader();return r?new Ee(o=>{let i=!1;return o.next(n),(async()=>{try{for(;!o.closed;){let{done:s,value:a}=await r.read();if(s){i=!0;break}let c={type:Gn.DATA,data:a};o.next(c)}o.complete()}catch(s){i=!0,o.error(s)}})(),()=>{i||r.cancel().catch(s=>{s?.name!=="AbortError"&&console.warn("Failed to cancel HTTP response stream:",s)})}}):Z(()=>Error("Failed to getReader() from response"))})),ow=10*1024*1024,DA=(t,e)=>{let n=Bn(e),r=new Pt,o=new TextDecoder("utf-8",{fatal:!1}),i="";t.subscribe({next:a=>{if(a.type!==Gn.HEADERS&&a.type===Gn.DATA&&a.data){let c=o.decode(a.data,{stream:!0});i+=c;let l=i.split(/\n\n/);i=l.pop()||"";for(let d of l)s(d);if(i.length>ow){r.error(Error(`SSE buffer size exceeded maximum limit of ${ow/(1024*1024)} MB`));return}}},error:a=>r.error(a),complete:()=>{i&&(i+=o.decode(),s(i)),r.complete()}});function s(a){let c=a.split(`
`),l=[];for(let d of c)d.startsWith("data:")&&l.push(d.slice(5).replace(/^ /,""));if(l.length>0)try{let d=l.join(`
`),h=JSON.parse(d);n?.event("SSE","Event received:",h,{type:h?.type}),r.next(h)}catch(d){r.error(d)}}return r.asObservable()},iw=10*1024*1024,$A=()=>typeof process<"u"&&process.env!==void 0&&!!process.env.SUPPRESS_TRANSFORMATION_WARNINGS,UA=(t,e)=>{let n=Bn(e),r=new Pt,o=new Uint8Array,i=!1;t.subscribe({next:a=>{if(a.type!==Gn.HEADERS&&a.type===Gn.DATA&&a.data){let c=new Uint8Array(o.length+a.data.length);c.set(o,0),c.set(a.data,o.length),o=c,s()}},error:a=>r.error(a),complete:()=>{if(s(),!i){if(o.length>0){r.error(Error(`The binary stream ended mid-frame: ${o.length} trailing bytes could not be read as a complete message.`));return}r.complete()}}});function s(){if(!i)for(;o.length>=4;){let a=4+new DataView(o.buffer,o.byteOffset,4).getUint32(0,!1);if(a>iw){r.error(Error(`Protobuf message size exceeded maximum limit of ${iw/(1024*1024)} MB`));return}if(o.length<a)break;try{let c=o.slice(4,a),l=Jy(c);n?.event("PROTO","Event received:",l,{type:l.type}),r.next(l)}catch(c){if(c instanceof Ku)$A()||console.warn("[ag-ui][proto] Dropped an event this build does not know: the protocol has a variant this SDK predates.");else{let l=c instanceof Error?c.message:String(c);i=!0,r.error(Error(`Failed to decode protocol buffer message: ${l}`));return}}o=o.slice(a)}}return r.asObservable()},yh=(t,e)=>{let n=Bn(e),r=new Pt,o=new Xi(1),i=!1,s,a=!1,c=()=>{a=!0,s?.unsubscribe()},l=h=>{c(),r.error(h)},d=()=>{c(),r.complete()};return s=t.subscribe({next:h=>{if(o.next(h),h.type===Gn.HEADERS&&!i){i=!0;let m=h.headers.get("content-type");n?.lifecycle("HTTP","Stream format detected:",{contentType:m,parser:m===Xu?"protobuf":"sse"}),m===Xu?UA(o,n).subscribe({next:f=>r.next(f),error:f=>l(f),complete:()=>d()}):DA(o,n).subscribe({next:f=>{if(typeof f!="object"||!f||Array.isArray(f)){let v=Error("Invalid event: the frame is not a JSON object.");n?.event("HTTP","Event invalid:",{json:f,error:String(v)}),l(v);return}let u=f;if(typeof u.type!="string"||u.type.length===0){let v=Error("Invalid event: the frame carries no event type.");n?.event("HTTP","Event invalid:",{json:f,error:String(v)}),l(v);return}n?.event("HTTP","Event received:",f,{type:u.type}),r.next(f)},error:f=>{if(f?.name==="AbortError"){r.next({type:y.RUN_ERROR,message:f.message||"Request aborted",code:"abort",rawEvent:f}),d();return}return l(f)},complete:()=>d()})}else i||l(Error("No headers event received before data events"))},error:h=>{o.error(h),l(h)},complete:()=>{o.complete()}}),a&&s.unsubscribe(),r.asObservable()},qe={TextMessageStart:"TextMessageStart",TextMessageContent:"TextMessageContent",TextMessageEnd:"TextMessageEnd",ActionExecutionStart:"ActionExecutionStart",ActionExecutionArgs:"ActionExecutionArgs",ActionExecutionEnd:"ActionExecutionEnd",ActionExecutionResult:"ActionExecutionResult",AgentStateMessage:"AgentStateMessage",MetaEvent:"MetaEvent",RunStarted:"RunStarted",RunFinished:"RunFinished",RunError:"RunError",NodeStarted:"NodeStarted",NodeFinished:"NodeFinished"},HA=t=>{if(typeof t=="string")return t;if(!Array.isArray(t))return;let e=t.filter(n=>n.type==="text").map(n=>n.text).filter(n=>n.length>0);if(e.length!==0)return e.join(`
`)};function Ew(t,e){return Qf(e)&&zo(`[ag-ui][legacy] The result of tool call '${t}' carries content parts the legacy protocol cannot represent; only its text parts are bridged and the rest is dropped.`),mr(e)}var zo=t=>{typeof process<"u"&&process.env!==void 0&&process.env.SUPPRESS_TRANSFORMATION_WARNINGS||console.warn(t)},FA=(t,e,n)=>r=>{let o={},i=!0,s=!0,a="",c=null,l=null,d=[],h={},m=!1,f=u=>{typeof u=="object"&&u&&("messages"in u&&delete u.messages,o=u)};return r.pipe(nt(u=>{switch(u.type){case y.TEXT_MESSAGE_START:{let v=u;return[{type:qe.TextMessageStart,messageId:v.messageId,role:v.role}]}case y.TEXT_MESSAGE_CONTENT:{let v=u;return[{type:qe.TextMessageContent,messageId:v.messageId,content:v.delta}]}case y.TEXT_MESSAGE_END:{let v=u;return[{type:qe.TextMessageEnd,messageId:v.messageId}]}case y.TOOL_CALL_START:{let v=u;return d.push({id:v.toolCallId,type:"function",function:{name:v.toolCallName,arguments:""}}),s=!0,h[v.toolCallId]=v.toolCallName,[{type:qe.ActionExecutionStart,actionExecutionId:v.toolCallId,actionName:v.toolCallName,parentMessageId:v.parentMessageId}]}case y.TOOL_CALL_ARGS:{let v=u,E=d.find(w=>w.id===v.toolCallId);if(!E)return zo(`[ag-ui][legacy] TOOL_CALL_ARGS: No tool call found with ID '${v.toolCallId}'`),[];E.function.arguments+=v.delta;let T=!1;if(l){let w=l.find(D=>D.tool==E.function.name);if(w)try{let D=JSON.parse(ms(E.function.arguments));w.tool_argument&&w.tool_argument in D?(f({...o,[w.state_key]:D[w.tool_argument]}),T=!0):w.tool_argument||(f({...o,[w.state_key]:D}),T=!0)}catch{}}return[{type:qe.ActionExecutionArgs,actionExecutionId:v.toolCallId,args:v.delta},...T?[{type:qe.AgentStateMessage,threadId:t,agentName:n,nodeName:a,runId:e,running:i,role:"assistant",state:JSON.stringify(o),active:s}]:[]]}case y.TOOL_CALL_END:{let v=u;return[{type:qe.ActionExecutionEnd,actionExecutionId:v.toolCallId}]}case y.TOOL_CALL_RESULT:{let v=u,E=h[v.toolCallId];return(E===void 0||E==="")&&zo(`[ag-ui][legacy] No usable tool name was seen for tool call '${v.toolCallId}' (${E===void 0?"no TOOL_CALL_START reached this bridge":"its TOOL_CALL_START carried an empty toolCallName"}), so its result is being bridged with the fabricated action name "unknown". Downstream consumers route on that name.`),[{type:qe.ActionExecutionResult,actionExecutionId:v.toolCallId,result:Ew(v.toolCallId,v.content),actionName:E||"unknown"}]}case y.RAW:return m||(m=!0,zo("[ag-ui][legacy] Dropping RAW events: the legacy runtime protocol has no equivalent, so the provider payloads they carry do not reach the legacy stream. Reported once per stream.")),[];case y.CUSTOM:{let v=u;switch(v.name){case"Exit":i=!1;break;case"PredictState":l=v.value;break}return[{type:qe.MetaEvent,name:v.name,value:v.value}]}case y.STATE_SNAPSHOT:return f(u.snapshot),[{type:qe.AgentStateMessage,threadId:t,agentName:n,nodeName:a,runId:e,running:i,role:"assistant",state:JSON.stringify(o),active:s}];case y.STATE_DELTA:{let v=u,E;try{E=Bi.applyPatch(o,v.delta,!0,!1).newDocument}catch(T){let w=T instanceof Error?T.message:String(T);return zo(`[ag-ui][legacy] Failed to apply state patch:
Current state: ${JSON.stringify(o,null,2)}
Patch operations: ${JSON.stringify(v.delta,null,2)}
Error: ${w}`),[]}return f(E),[{type:qe.AgentStateMessage,threadId:t,agentName:n,nodeName:a,runId:e,running:i,role:"assistant",state:JSON.stringify(o),active:s}]}case y.MESSAGES_SNAPSHOT:return c=u.messages,[{type:qe.AgentStateMessage,threadId:t,agentName:n,nodeName:a,runId:e,running:i,role:"assistant",state:JSON.stringify({...o,...c?{messages:c}:{}}),active:!0}];case y.RUN_STARTED:return[];case y.RUN_FINISHED:{if(c&&(o.messages=c),Object.keys(o).length===0)return[];let v=null;if(c)try{v=GA(c)}catch(E){return[{type:qe.RunError,message:E.message}]}return[{type:qe.AgentStateMessage,threadId:t,agentName:n,nodeName:a,runId:e,running:i,role:"assistant",state:JSON.stringify({...o,...v?{messages:v}:{}}),active:!1}]}case y.RUN_ERROR:{let v=u;return[{type:qe.RunError,message:v.message,code:v.code}]}case y.STEP_STARTED:return a=u.stepName,d=[],l=null,[{type:qe.AgentStateMessage,threadId:t,agentName:n,nodeName:a,runId:e,running:i,role:"assistant",state:JSON.stringify(o),active:!0}];case y.STEP_FINISHED:return d=[],l=null,[{type:qe.AgentStateMessage,threadId:t,agentName:n,nodeName:a,runId:e,running:i,role:"assistant",state:JSON.stringify(o),active:!1}];default:return[]}}))};function GA(t){let e=[];for(let n of t)if(n.role==="assistant"||n.role==="user"||n.role==="system"){let r=HA(n.content);if(r){let o={id:n.id,role:n.role,content:r};e.push(o)}if(n.role==="assistant"&&n.toolCalls&&n.toolCalls.length>0)for(let o of n.toolCalls){let i;try{i=JSON.parse(o.function.arguments)}catch(a){throw Error(`Failed to parse arguments for tool call '${o.id}' (${o.function.name}): ${a.message}`)}let s={id:o.id,name:o.function.name,arguments:i,parentMessageId:n.id};e.push(s)}}else if(n.role==="tool"){let r="unknown";for(let i of t)if(i.role==="assistant"&&i.toolCalls?.length){for(let s of i.toolCalls)if(s.id===n.toolCallId){r=s.function.name;break}}let o={id:n.id,result:Ew(n.toolCallId,n.content),actionExecutionId:n.toolCallId,actionName:r};e.push(o)}return e}var BA=t=>t.kind==="tool"?t.fields.toolCallId:t.fields.messageId,VA=t=>t==="tool"?"toolCallId":"messageId",Ca=(t,e,n,r,o)=>{if(r!==void 0&&r!==o)throw Error(`Cannot continue ${t} '${e}': chunk ${n} '${r}' does not match the open stream's ${n} ${o===void 0?"(absent)":`'${o}'`}.`)},Ma=(t,e)=>e.metadata===void 0?t:{...t,metadata:e.metadata},oh=(t,e)=>{let n=Ma(t,e);return e.rawEvent===void 0?n:{...n,rawEvent:e.rawEvent}},wh=t=>new Set(Object.keys(t.shape)),ZA=wh(Nu),jA=wh(Ou),WA=wh(Pu),ih=(t,e)=>{let n;for(let r of Object.keys(t))e.has(r)||((n??={})[r]=t[r]);return n},qA=t=>{typeof process<"u"&&process.env!==void 0&&process.env.SUPPRESS_TRANSFORMATION_WARNINGS||console.warn(`[ag-ui][transform] ${t} Set SUPPRESS_TRANSFORMATION_WARNINGS=true to silence.`)},sh=(t,e,n,r)=>{if(e===void 0||n||t.length===0)return;let o=t[t.length-1],i=Object.keys(e).filter(s=>Object.prototype.hasOwnProperty.call(o,s));i.length>0&&qA(`A ${r} carried ${i.map(s=>`'${s}'`).join(", ")}, which the synthesized ${String(o.type)} already describes. The synthesized value is kept and the chunk's is dropped \u2014 this stage does not judge a described field, so the producer's value cannot be substituted for its own.`),t[t.length-1]={...e,...o}},Pa=t=>e=>{let n=Bn(t),r=new Map,o=c=>{let l=r.get(c);if(!l)return[];switch(r.delete(c),l.kind){case"text":{let d={type:y.TEXT_MESSAGE_END,messageId:l.fields.messageId,...l.fields.subagentRunId!==void 0&&{subagentRunId:l.fields.subagentRunId}};return n?.event("TRANSFORM","TEXT_MESSAGE_END",d,{messageId:d.messageId}),[d]}case"tool":{let d={type:y.TOOL_CALL_END,toolCallId:l.fields.toolCallId,...l.fields.subagentRunId!==void 0&&{subagentRunId:l.fields.subagentRunId}};return n?.event("TRANSFORM","TOOL_CALL_END",d,{toolCallId:d.toolCallId}),[d]}case"reasoning":{let d={type:y.REASONING_MESSAGE_END,messageId:l.fields.messageId,...l.fields.subagentRunId!==void 0&&{subagentRunId:l.fields.subagentRunId}};return n?.event("TRANSFORM","REASONING_MESSAGE_END",d,{messageId:d.messageId}),[d]}}},i=()=>[...r.keys()].flatMap(c=>o(c)),s=(c,l)=>{for(let[d,h]of r)if(h.kind===c&&BA(h)===l)return{owner:d}},a=(c,l,d,h,m)=>{if(l!==void 0){let u=s(c,l);if(u){if(d!==void 0&&d!==u.owner)throw Error(`Cannot continue ${m} '${l}': chunk subagentRunId '${d}' does not match the open stream's subagent '${u.owner??"(the parent agent)"}'.`);return u.owner}return d}if(d!==void 0)return d;if(r.get(void 0)?.kind===c)return;let f=[...r.entries()].filter(([,u])=>u.kind===c);if(f.length===1)return f[0][0];if(f.length>1)throw Error(`Ambiguous ${h}: it carries neither a ${VA(c)} nor a subagentRunId, but ${f.length} lanes have an open ${m}. Attribute the chunk to the subagent it belongs to.`)};return e.pipe(nt(c=>{switch(c.type){case y.TEXT_MESSAGE_START:case y.TEXT_MESSAGE_CONTENT:case y.TEXT_MESSAGE_END:case y.TOOL_CALL_START:case y.TOOL_CALL_ARGS:case y.TOOL_CALL_END:case y.TOOL_CALL_RESULT:case y.STATE_SNAPSHOT:case y.STATE_DELTA:case y.CUSTOM:case y.STEP_STARTED:case y.STEP_FINISHED:case y.REASONING_START:case y.REASONING_MESSAGE_START:case y.REASONING_MESSAGE_CONTENT:case y.REASONING_MESSAGE_END:case y.REASONING_END:return[...o(c.subagentRunId??void 0),c];case y.RUN_STARTED:case y.RUN_FINISHED:case y.RUN_ERROR:case y.MESSAGES_SNAPSHOT:return[...i(),c];case y.RAW:case y.ACTIVITY_SNAPSHOT:case y.ACTIVITY_DELTA:case y.REASONING_ENCRYPTED_VALUE:case y.SUBAGENT_STARTED:return[c];case y.SUBAGENT_FINISHED:case y.SUBAGENT_ERROR:{let l=c.subagentRunId;return l==null?[c]:[...o(l),c]}case y.TEXT_MESSAGE_CHUNK:{let l=c,d=ih(c,ZA),h=a("text",l.messageId,l.subagentRunId??void 0,"TEXT_MESSAGE_CHUNK","text message"),m=r.get(h),f=[],u=!1,v;if(m?.kind==="text"&&(l.messageId===void 0||l.messageId===m.fields.messageId))Ca("text message",m.fields.messageId,"role",l.role,m.fields.role),Ca("text message",m.fields.messageId,"name",l.name,m.fields.name),v=m.fields;else{if(f.push(...o(h)),l.messageId===void 0)throw Error("First TEXT_MESSAGE_CHUNK must have a messageId");v={messageId:l.messageId,role:l.role===void 0?"assistant":l.role,name:l.name,subagentRunId:l.subagentRunId},r.set(h,{kind:"text",fields:v});let E=Ma({type:y.TEXT_MESSAGE_START,messageId:l.messageId,role:v.role,...l.name!==void 0&&{name:l.name},...l.subagentRunId!==void 0&&{subagentRunId:l.subagentRunId}},l);f.push(E),n?.event("TRANSFORM","TEXT_MESSAGE_START",E,{messageId:l.messageId})}if(l.delta!==void 0||l.rawEvent!==void 0){let E=l.subagentRunId===void 0?v.subagentRunId:l.subagentRunId,T=oh({...d,type:y.TEXT_MESSAGE_CONTENT,messageId:v.messageId,delta:l.delta===void 0?"":l.delta,...E!==void 0&&{subagentRunId:E}},l);f.push(T),u=!0,n?.event("TRANSFORM","TEXT_MESSAGE_CONTENT",T,{messageId:v.messageId})}if(f.length===0&&(l.metadata!==void 0||l.rawEvent!==void 0||l.subagentRunId===null||d!==void 0)){let E=l.subagentRunId===void 0?v.subagentRunId:l.subagentRunId;f.push({...d,type:y.TEXT_MESSAGE_CONTENT,messageId:v.messageId,delta:"",...l.metadata!==void 0&&{metadata:l.metadata},...l.rawEvent!==void 0&&{rawEvent:l.rawEvent},...E!==void 0&&{subagentRunId:E}}),u=!0}return sh(f,d,u,"TEXT_MESSAGE_CHUNK"),f}case y.TOOL_CALL_CHUNK:{let l=c,d=ih(c,jA),h=a("tool",l.toolCallId,l.subagentRunId??void 0,"TOOL_CALL_CHUNK","tool call"),m=r.get(h),f=[],u=!1,v;if(m?.kind==="tool"&&(l.toolCallId===void 0||l.toolCallId===m.fields.toolCallId))Ca("tool call",m.fields.toolCallId,"toolCallName",l.toolCallName,m.fields.toolCallName),Ca("tool call",m.fields.toolCallId,"parentMessageId",l.parentMessageId,m.fields.parentMessageId),v=m.fields;else{if(f.push(...o(h)),l.toolCallId===void 0)throw Error("First TOOL_CALL_CHUNK must have a toolCallId");if(l.toolCallName===void 0)throw Error("First TOOL_CALL_CHUNK must have a toolCallName");v={toolCallId:l.toolCallId,toolCallName:l.toolCallName,parentMessageId:l.parentMessageId,subagentRunId:l.subagentRunId},r.set(h,{kind:"tool",fields:v});let E=Ma({type:y.TOOL_CALL_START,toolCallId:l.toolCallId,toolCallName:l.toolCallName,...l.parentMessageId!==void 0&&{parentMessageId:l.parentMessageId},...l.subagentRunId!==void 0&&{subagentRunId:l.subagentRunId}},l);f.push(E),n?.event("TRANSFORM","TOOL_CALL_START",E,{toolCallId:l.toolCallId,toolCallName:l.toolCallName})}if(l.delta!==void 0||l.rawEvent!==void 0){let E=l.subagentRunId===void 0?v.subagentRunId:l.subagentRunId,T=oh({...d,type:y.TOOL_CALL_ARGS,toolCallId:v.toolCallId,delta:l.delta===void 0?"":l.delta,...E!==void 0&&{subagentRunId:E}},l);f.push(T),u=!0,n?.event("TRANSFORM","TOOL_CALL_ARGS",T,{toolCallId:v.toolCallId})}if(f.length===0&&(l.metadata!==void 0||l.rawEvent!==void 0||l.subagentRunId===null||d!==void 0)){let E=l.subagentRunId===void 0?v.subagentRunId:l.subagentRunId;f.push({...d,type:y.TOOL_CALL_ARGS,toolCallId:v.toolCallId,delta:"",...l.metadata!==void 0&&{metadata:l.metadata},...l.rawEvent!==void 0&&{rawEvent:l.rawEvent},...E!==void 0&&{subagentRunId:E}}),u=!0}return sh(f,d,u,"TOOL_CALL_CHUNK"),f}case y.REASONING_MESSAGE_CHUNK:{let l=c,d=ih(c,WA),h=a("reasoning",l.messageId,l.subagentRunId??void 0,"REASONING_MESSAGE_CHUNK","reasoning message"),m=r.get(h),f=[],u=!1,v;if(m?.kind==="reasoning"&&(l.messageId===void 0||l.messageId===m.fields.messageId))v=m.fields;else{if(f.push(...o(h)),l.messageId===void 0)throw Error("First REASONING_MESSAGE_CHUNK must have a messageId");v={messageId:l.messageId,subagentRunId:l.subagentRunId},r.set(h,{kind:"reasoning",fields:v});let E=Ma({type:y.REASONING_MESSAGE_START,messageId:l.messageId,role:"reasoning",...l.subagentRunId!==void 0&&{subagentRunId:l.subagentRunId}},l);f.push(E),n?.event("TRANSFORM","REASONING_MESSAGE_START",E,{messageId:l.messageId})}if(l.delta!==void 0||l.rawEvent!==void 0){let E=l.subagentRunId===void 0?v.subagentRunId:l.subagentRunId,T=oh({...d,type:y.REASONING_MESSAGE_CONTENT,messageId:v.messageId,delta:l.delta===void 0?"":l.delta,...E!==void 0&&{subagentRunId:E}},l);f.push(T),u=!0,n?.event("TRANSFORM","REASONING_MESSAGE_CONTENT",T,{messageId:v.messageId})}if(f.length===0&&(l.metadata!==void 0||l.rawEvent!==void 0||l.subagentRunId===null||d!==void 0)){let E=l.subagentRunId===void 0?v.subagentRunId:l.subagentRunId;f.push({...d,type:y.REASONING_MESSAGE_CONTENT,messageId:v.messageId,delta:"",...l.metadata!==void 0&&{metadata:l.metadata},...l.rawEvent!==void 0&&{rawEvent:l.rawEvent},...E!==void 0&&{subagentRunId:E}}),u=!0}return sh(f,d,u,"REASONING_MESSAGE_CHUNK"),f}}return c.type,[c]}),In(()=>{i()}))},YA=1e6;function Uo(t){if(t===void 0)return YA;if(t===1/0||Number.isSafeInteger(t)&&t>0)return t;throw new K(`Invalid enforcement entry budget ${String(t)}: expected a positive integer, or Infinity to disable it.`)}var KA=class extends K{constructor(t,e){super(`Enforcement limit exceeded at '${e||"(root)"}': the payload has more than ${t} entries to validate. If it is legitimate, raise or disable the limit (maxEnforcedEntries on the agent, or maxEntries in the enforcement options).`),this.name="AGUIEnforcementLimitError",this.limit=t,this.path=e}},Mr=Symbol("agui.strip.drop");function ah(t,e,n){if(t.used+=e,t.used>t.max)throw new KA(t.max,n)}function Do(t){let e=t;for(;;){if(e instanceof Ms||e instanceof ku||e instanceof Au||e instanceof Cu||e instanceof Ru){e=e.unwrap();continue}if(e instanceof Iu){e=e.def.in;continue}if(e instanceof _b){e=e.def.getter();continue}return e}}function XA(t){let e=t.def;return typeof e?.discriminator=="string"?e.discriminator:void 0}function _w(t){let e=t,n=Array.isArray(e.def?.values)?e.def.values:e.values?Array.from(e.values):void 0;return n&&n.length===1?n[0]:e.value}function JA(t){let e=Do(t);return e instanceof Su?_w(e):void 0}function Pr(t,e,n,r,o){let i=Do(e);if(i instanceof Ir){if(typeof t!="object"||!t||Array.isArray(t))return t;let s=i.shape,a=t,c={},l=i.meta()?.specOpen===!0,d=Object.keys(a);ah(o,d.length,n);for(let h of d){let m=Object.prototype.hasOwnProperty.call(s,h)?s[h]:void 0;if(m===void 0){if(l){c[h]=a[h];continue}r.push(`${n}/${h}`);continue}let f=r.length,u=Pr(a[h],m,`${n}/${h}`,r,o);if(u===Mr){if(r.length=f,m.safeParse(void 0).success){r.push(`${n}/${h}`);continue}return Mr}c[h]=u}return c}if(i instanceof Ns){if(!Array.isArray(t))return t;ah(o,t.length,n);let s=i.element,a=[];return t.forEach((c,l)=>{let d=r.length,h=Pr(c,s,`${n}/${l}`,r,o);if(h===Mr){r.length=d,r.push(`${n}/${l}`);return}a.push(h)}),a}if(i instanceof xb){if(typeof t!="object"||!t||Array.isArray(t))return t;let s=i.def.valueType,a=t,c={},l=Object.keys(a);ah(o,l.length,n);for(let d of l){let h=r.length,m=Pr(a[d],s,`${n}/${d}`,r,o);if(m===Mr){r.length=h,r.push(`${n}/${d}`);continue}c[d]=m}return c}if(i instanceof Os){let s=i.options,a=XA(i);if(a!==void 0){if(typeof t!="object"||!t||Array.isArray(t))return t;let d=t[a];for(let h of s){let m=Do(h);if(!(m instanceof Ir))continue;let f=m.shape;if(JA(f[a])===d)return Pr(t,h,n,r,o)}return Mr}let c=s.filter(d=>Do(d)instanceof Ir),l=typeof t=="object"&&!!t&&!Array.isArray(t);if(c.length>1&&l)return t;for(let d of s){let h=Do(d);if(h instanceof Ns&&Array.isArray(t)||h instanceof Ir&&l)return Pr(t,d,n,r,o)}return t}return t}function Tw(t,e,n){let r=[],o=Pr(t,e,"",r,{used:0,max:Uo(n?.maxEntries)});if(o===Mr)throw Error("Internal error: the stripper found the whole value unrecognisable, which the schemas are not supposed to allow \u2014 schema/stripper mismatch.");return{value:o,stripped:r}}var QA=new Set(Object.values(y));function eR(t){return QA.has(t.type)}var tR=new Map(Lu.options.map(t=>{let e=t.shape;return[String(_w(e.type)),t]})),nR=()=>typeof process<"u"&&process.env!==void 0&&!!process.env.SUPPRESS_TRANSFORMATION_WARNINGS;function gh(t){nR()||console.warn(`[ag-ui][enforce] ${t}`)}var lh=(t,e)=>{let n=Uo(e?.maxEntries);return r=>{let o=Bn(t);return r.pipe(nt(i=>{if(!eR(i)){gh(`Dropping unrecognised event '${String(i.type)}': no middleware translated it and the protocol does not describe it.`);let l={type:i.type};return o?.event("ENFORCE","Unrecognised event dropped:",l,l),An}let s=tR.get(i.type);if(s===void 0)throw Error(`No validator for recognised event type '${String(i.type)}'`);let{value:a,stripped:c}=Tw(i,s,{maxEntries:n});for(let l of c)gh(`Removed unrecognised material at '${l}' on ${String(i.type)}. Nothing handled it; see the repo-root DEPRECATIONS.md if it is a retired shape.`);return ge(s.parse(a))}))}};function rR(t,e){let n=Uo(e?.maxEntries),{value:r,stripped:o}=Tw(Td(t,"RunAgentInput"),Ls,{maxEntries:n});for(let i of o)gh(`Removed unrecognised material at '${i}' from the outgoing input.`);return Ls.parse(r)}var Ho=class{runNext(t,e){return e.run(t).pipe(Pa(!1))}runNextWithState(t,e){let n=ee(t.messages||[]),r=ee(t.state===void 0?{}:t.state),o=new Xi;return xw(t,o,e,[]).subscribe({next:i=>{i.messages!==void 0&&(n=i.messages),i.state!==void 0&&(r=i.state)},error:()=>{}}),this.runNext(t,e).pipe(hs(async i=>(o.next(i),await new Promise(s=>setTimeout(s,0)),{event:i,messages:ee(n),state:ee(r)})))}},oR=class extends Ho{constructor(t){super(),this.fn=t}run(t,e){return this.fn(t,e)}};function iR(t){return t.startsWith("image/")?"image":t.startsWith("audio/")?"audio":t.startsWith("video/")?"video":"document"}function sR(t){return typeof t=="object"&&!!t&&"type"in t&&t.type==="binary"&&"mimeType"in t&&typeof t.mimeType=="string"}function aR(t){let e=iR(t.mimeType);return t.data?{type:e,source:{type:"data",value:t.data,mimeType:t.mimeType},...t.filename?{metadata:{filename:t.filename}}:{}}:t.url?{type:e,source:{type:"url",value:t.url,mimeType:t.mimeType},...t.filename?{metadata:{filename:t.filename}}:{}}:((typeof process>"u"||process.env===void 0||!process.env.SUPPRESS_TRANSFORMATION_WARNINGS)&&console.warn(`[ag-ui][compat] A binary content part carries only an id ('${t.id??""}') and cannot be converted to a modern media part; a 1.0 peer will not accept it. Provide data or a url. See the repo-root DEPRECATIONS.md.`),t)}function lR(t,e,n){if(typeof t!="object"||!t||!("type"in t)||t.type!==e.type||!("source"in t))return!1;let r=t.source;return typeof r!="object"||!r||!("type"in r)||r.type!==e.source.type||!("value"in r)||r.value!==e.source.value||!("mimeType"in r)||r.mimeType!==e.source.mimeType?!1:!n||"metadata"in t&&typeof t.metadata=="object"&&t.metadata!==null&&"filename"in t.metadata&&t.metadata.filename===n}function sw(t){let e=t.content;if(!Array.isArray(e))return t;let n=e.flatMap(r=>{if(sR(r)){let o=aR(r);return o.type!=="binary"&&e.some(i=>lR(i,o,r.filename))?[]:[o]}return[r]});return{...t,content:n}}var ch="THINKING_START",dh="THINKING_END",aw="THINKING_TEXT_MESSAGE_START",uh="THINKING_TEXT_MESSAGE_CONTENT",hh="THINKING_TEXT_MESSAGE_END";function xh(t){return typeof t=="object"&&!!t&&!Array.isArray(t)}var cn={event:["rawEvent","subagentRunId"],[y.RUN_STARTED]:["parentRunId","input"],[y.RUN_FINISHED]:["result","outcome"],[y.RUN_ERROR]:["usage"],[y.SUBAGENT_FINISHED]:["result"],[y.TOOL_CALL_START]:["parentMessageId"],[y.TOOL_CALL_CHUNK]:["parentMessageId"],[y.TOOL_CALL_RESULT]:["role"],"RUN_FINISHED.outcome":["pendingToolCallIds"],"RUN_FINISHED.usage[]":["provider","reasoningTokens","cachedInputTokens","cacheWriteInputTokens"],RunAgentInput:["forwardedProps"],Tool:["parameters"],ResumeEntry:["payload"],"input content":["metadata"]},cR=new Map(Object.entries(cn).filter(([t])=>Object.values(y).includes(t))),dR=t=>za(t,"an absent field");function ln(t,e,n,r){if(!xh(t))return t;let o;for(let i of e)t[i]===null&&(r(n===void 0?`${i}: null`:`${n}.${i}: null`),o??={...t},delete o[i]);return o??t}function $o(t,e,n){if(!xh(t)||!Array.isArray(t[e]))return t;let r=t[e],o=r.map(n);return o.some((i,s)=>i!==r[s])?{...t,[e]:o}:t}function Sw(t,e){return $o(t,"content",n=>{if(!xh(n))return n;switch(n.type){case"image":case"audio":case"video":case"document":return ln(n,cn["input content"],`${n.type} input content`,e);default:return n}})}function uR(t,e=dR){let n=ln(t,cn.RunAgentInput,"RunAgentInput",e);return n=$o(n,"tools",r=>ln(r,cn.Tool,"Tool",e)),n=$o(n,"resume",r=>ln(r,cn.ResumeEntry,"ResumeEntry",e)),$o(n,"messages",r=>Sw(r,e))}var vh=class extends Ho{constructor(...t){super(...t),this.currentReasoningId=null,this.currentMessageId=null,this.nullsNoticedThisRun=new Set,this.noticeNullOncePerRun=e=>{this.nullsNoticedThisRun.has(e)||(this.nullsNoticedThisRun.add(e),za(e,"an absent field"))}}warn(t,e){za(t,e)}mintedContinuationId(t,e){if(e!==null)return e;let n=Ie();return this.warnAside(`Minting a messageId ('${n}') for ${t}: no THINKING opener preceded it, so there was no id to continue. The id is this client's invention, not the producer's, and verification will reject the translated event for naming something nothing opened.`),n}warnAside(t){typeof process<"u"&&process.env!==void 0&&process.env.SUPPRESS_TRANSFORMATION_WARNINGS||console.warn(`[ag-ui][compat] ${t} Set SUPPRESS_TRANSFORMATION_WARNINGS=true to silence.`)}run(t,e){return this.currentReasoningId=null,this.currentMessageId=null,this.nullsNoticedThisRun.clear(),t.messages=t.messages.map(sw),e.run(t).pipe(Lt(n=>this.transformEvent(n)))}transformEvent(t){let e=this.noticeNullOncePerRun;t.type===y.RUN_STARTED&&this.nullsNoticedThisRun.clear(),t=ln(t,cn.event,void 0,e);let n=cR.get(t.type);switch(n&&(t=ln(t,n,t.type,e)),t.type){case ch:{this.currentReasoningId=Ie();let{title:r,...o}=t;return this.warn(ch,y.REASONING_START),r!==void 0&&this.warnAside(`Dropping ${ch}.title ${JSON.stringify(r)}: ${y.REASONING_START} has no title field, so the span's label cannot be carried and nothing downstream can recover it.`),{...o,type:y.REASONING_START,messageId:this.currentReasoningId}}case aw:return this.currentMessageId=Ie(),this.warn(aw,y.REASONING_MESSAGE_START),{...t,type:y.REASONING_MESSAGE_START,messageId:this.currentMessageId,role:"reasoning"};case uh:{let{delta:r,...o}=t;return this.warn(uh,y.REASONING_MESSAGE_CONTENT),{...o,type:y.REASONING_MESSAGE_CONTENT,messageId:this.mintedContinuationId(uh,this.currentMessageId),delta:r}}case hh:{let r=this.mintedContinuationId(hh,this.currentMessageId);return this.currentMessageId=null,this.warn(hh,y.REASONING_MESSAGE_END),{...t,type:y.REASONING_MESSAGE_END,messageId:r}}case dh:{let r=this.mintedContinuationId(dh,this.currentReasoningId);return this.currentReasoningId=null,this.warn(dh,y.REASONING_END),{...t,type:y.REASONING_END,messageId:r}}case y.RUN_FINISHED:{let r=t,o=ln(r.outcome,cn["RUN_FINISHED.outcome"],"RUN_FINISHED.outcome",e);return $o(o===r.outcome?r:{...r,outcome:o},"usage",i=>ln(i,cn["RUN_FINISHED.usage[]"],"RUN_FINISHED.usage[]",e))}case y.MESSAGES_SNAPSHOT:{let r=t;return Array.isArray(r.messages)?{...r,messages:r.messages.map(o=>this.upgradeInboundMessage(o))}:t}case y.RUN_STARTED:{let r=uR(t.input,e),o=r===t.input?t:{...t,input:r},i=o;return!i.input||!Array.isArray(i.input.messages)?o:{...i,input:{...i.input,messages:i.input.messages.map(s=>this.upgradeInboundMessage(s))}}}default:return t}}upgradeInboundMessage(t){t=Sw(t,this.noticeNullOncePerRun);let e=t.content;return!Array.isArray(e)||!e.some(n=>typeof n=="object"&&!!n&&n.type==="binary")?t:(this.warn("binary input content","the modern media content parts"),sw(t))}},hR=()=>t=>Rn(()=>{let e=new vh;return t.pipe(Lt(n=>e.transformEvent(n)))});function pR(t,e=new Date){return t.expiresAt===void 0?!1:new Date(t.expiresAt)<=e}function Eh(t,e){let n=new Set(t.map(s=>s.id)),r=new Set(Object.keys(e)),o=[...n].filter(s=>!r.has(s));if(o.length>0)throw Error(`buildResumeArray: missing responses for open interrupts: ${o.join(", ")}`);let i=[...r].filter(s=>!n.has(s));if(i.length>0)throw Error(`buildResumeArray: responses reference unknown interrupt ids: ${i.join(", ")}`);return t.map(s=>{let a=e[s.id],c={interruptId:s.id,status:a.status};return a.status==="resolved"&&a.payload!==void 0&&(c.payload=a.payload),a.metadata!==void 0&&(c.metadata=a.metadata),c})}function kw(){return typeof process<"u"&&process.env!==void 0&&!!process.env.SUPPRESS_TRANSFORMATION_WARNINGS}function fR(t){kw()||console.warn(`[ag-ui][compat] Flattening message content for a <=0.0.39 peer DROPS non-text parts (${t.join(", ")}). The peer cannot receive them; upgrade it to keep media content. See the repo-root DEPRECATIONS.md.`)}function mR(t){kw()||console.warn(`[ag-ui][compat] Not flattening message content for a <=0.0.39 peer: ${t} content part(s) claim type "text" but carry a malformed 'text' value. That is a defect in the message, not media the peer cannot represent, and a downgrade must not repair it \u2014 the content is passed on unchanged so the outgoing enforcement boundary reports it. See the repo-root DEPRECATIONS.md.`)}function gR(t){let e=t.content;if(Array.isArray(e)){let n=a=>typeof a=="object"&&!!a&&"type"in a&&a.type==="text",r=a=>n(a)&&typeof a.text=="string",o=e.filter(a=>n(a)&&!r(a));if(o.length>0)return mR(o.length),t;let i=e.filter(a=>!r(a)).map(a=>typeof a=="object"&&a&&"type"in a?String(a.type):typeof a);i.length>0&&fR(i);let s=e.filter(r).map(a=>a.text).join("");return{...t,content:s}}return typeof e=="string"?t:e===void 0?{...t,content:""}:t}var vR=class extends Ho{run(t,e){let{parentRunId:n,...r}=t,o={...r,messages:r.messages.map(gR)};return this.runNext(o,e)}},lw="THINKING_START",cw="THINKING_END",dw="THINKING_TEXT_MESSAGE_START",uw="THINKING_TEXT_MESSAGE_CONTENT",hw="THINKING_TEXT_MESSAGE_END",bR=class extends Ho{constructor(...t){super(...t),this.currentReasoningId=null,this.currentMessageId=null}warnAboutTransformation(t,e){typeof process<"u"&&process.env!==void 0&&process.env.SUPPRESS_TRANSFORMATION_WARNINGS||console.warn(`AG-UI is converting ${t} to ${e}. To remove this warning, upgrade your AG-UI integration package (e.g. @ag-ui/langgraph). To surpress it, set SUPPRESS_TRANSFORMATION_WARNINGS=true in your .env file.`)}run(t,e){return this.currentReasoningId=null,this.currentMessageId=null,this.runNext(t,e).pipe(Lt(n=>this.transformEvent(n)))}transformEvent(t){switch(t.type){case lw:{this.currentReasoningId=Ie();let{title:e,...n}=t;return this.warnAboutTransformation(lw,y.REASONING_START),{...n,type:y.REASONING_START,messageId:this.currentReasoningId}}case dw:return this.currentMessageId=Ie(),this.warnAboutTransformation(dw,y.REASONING_MESSAGE_START),{...t,type:y.REASONING_MESSAGE_START,messageId:this.currentMessageId,role:"reasoning"};case uw:{let{delta:e,...n}=t;return this.warnAboutTransformation(uw,y.REASONING_MESSAGE_CONTENT),{...n,type:y.REASONING_MESSAGE_CONTENT,messageId:this.currentMessageId??Ie(),delta:e}}case hw:{let e=this.currentMessageId??Ie();return this.warnAboutTransformation(hw,y.REASONING_MESSAGE_END),{...t,type:y.REASONING_MESSAGE_END,messageId:e}}case cw:{let e=this.currentReasoningId??Ie();return this.warnAboutTransformation(cw,y.REASONING_END),{...t,type:y.REASONING_END,messageId:e}}default:return t}}},pw="SUBAGENT_STARTED",fw="SUBAGENT_FINISHED",mw="SUBAGENT_ERROR";function La(t){if(t&&typeof t=="object"&&"subagentRunId"in t){let{subagentRunId:e,...n}=t;return n}return t}function gw(t){return t.map(e=>La(e))}var yR=class extends Ho{warnDroppedLifecycleEvent(t){typeof process<"u"&&process.env!==void 0&&process.env.SUPPRESS_TRANSFORMATION_WARNINGS||console.warn(`AG-UI is dropping ${t} because the target agent predates subagent support. To remove this warning, upgrade your AG-UI integration package. To suppress it, set SUPPRESS_TRANSFORMATION_WARNINGS=true in your .env file.`)}run(t,e){let n={...t,messages:(t.messages??[]).map(r=>La(r))};return this.runNext(n,e).pipe(fs(r=>{let o=r.type;(o===pw||o===fw||o===mw)&&this.warnDroppedLifecycleEvent(o)}),$d(r=>{let o=r.type;return o!==pw&&o!==fw&&o!==mw}),Lt(r=>{let o=La(r);if(o.type===y.MESSAGES_SNAPSHOT){let i=o;if(Array.isArray(i.messages))return{...i,messages:gw(i.messages)}}if(o.type===y.RUN_FINISHED){let i=o;if(i.outcome&&Array.isArray(i.outcome.interrupts))return{...i,outcome:{...i.outcome,interrupts:i.outcome.interrupts.map(s=>La(s))}}}if(o.type===y.RUN_STARTED){let i=o;if(i.input&&Array.isArray(i.input.messages))return{...i,input:{...i.input,messages:gw(i.input.messages)}}}return o}))}},Na="1.0.4",vw=!1,bw=new WeakSet,wR=(t,e)=>/^\d+\.\d+$/.test(t)?Hn(t,e)>0?"newer":"not-newer":"uninterpretable",yw=t=>{let e=t.protocolVersion;if(!(e===void 0||e===_n))switch(wR(e,_n)){case"uninterpretable":console.warn(`[ag-ui] The producer declared protocol version '${e}', which this client cannot interpret.`);return;case"newer":console.warn(`[ag-ui] The producer speaks protocol ${e}; this client speaks ${_n}. Unrecognised material will be stripped with warnings.`);return;case"not-newer":return}},_h=class Aw{resolvePeerCeiling(e){if(this.resolvingPeerCeiling)return Na;let n=Object.getOwnPropertyDescriptor(this,"maxVersion"),r=Object.getOwnPropertyDescriptor(this,"maxProtocolVersion"),o=Object.getPrototypeOf(this);for(;o&&o!==Aw.prototype;)n??=Object.getOwnPropertyDescriptor(o,"maxVersion"),r??=Object.getOwnPropertyDescriptor(o,"maxProtocolVersion"),o=Object.getPrototypeOf(o);if(e==="maxVersion"&&n)return Na;let i=e==="maxProtocolVersion"?n:r;if(!i)return Na;this.resolvingPeerCeiling=!0;try{return i.get?i.get.call(this):i.value}finally{this.resolvingPeerCeiling=!1}}get maxProtocolVersion(){return this.resolvePeerCeiling("maxProtocolVersion")}get maxVersion(){return!this.resolvingPeerCeiling&&!vw&&(vw=!0,console.warn("[ag-ui] AbstractAgent.maxVersion is deprecated \u2014 use maxProtocolVersion. Same value; the new name says whose version it is and that it is a ceiling.")),this.resolvePeerCeiling("maxVersion")}get debug(){return this._debug}set debug(e){this._debug=Oa(e),this._debugLogger=nh(this._debug)}get threadId(){return this._threadId??=tn()}set threadId(e){this._threadId=e}get maxEnforcedEntries(){return this._maxEnforcedEntries}set maxEnforcedEntries(e){this._maxEnforcedEntries=Uo(e)}get debugLogger(){return this._debugLogger}set debugLogger(e){typeof e=="boolean"?this._debugLogger=e?nh(Oa(!0)):void 0:this._debugLogger=e}resolvedCeilingDuringConstruction(){let e=this.maxProtocolVersion;if(typeof e!="string"||!th(e))throw new K(`maxProtocolVersion resolved to ${JSON.stringify(e)} during construction, which is not a version this client can compare. A ceiling read from an instance field is not available yet \u2014 return a literal from the getter.`);return e}constructor({agentId:e,description:n,threadId:r,initialMessages:o,initialState:i,debug:s,maxEnforcedEntries:a}={}){this.subscribers=[],this.isRunning=!1,this.pendingInterrupts=[],this.middlewares=[],this.resolvingPeerCeiling=!1,this.agentId=e,this.description=n??"",this._threadId=r,this.messages=ee(o??[]),this.state=ee(i??{}),this._debug=Oa(s),this._debugLogger=nh(this._debug),this._maxEnforcedEntries=Uo(a);let c=this.resolvedCeilingDuringConstruction();Hn(c,"0.0.39")<=0&&this.middlewares.unshift(new vR),Hn(c,"0.0.45")<=0&&this.middlewares.unshift(new bR),Hn(c,"0.0.57")<=0&&this.middlewares.unshift(new yR)}subscribe(e){return this.subscribers.push(e),{unsubscribe:()=>{this.subscribers=this.subscribers.filter(n=>n!==e)}}}use(...e){let n=e.map(r=>typeof r=="function"?new oR(r):r);return this.middlewares.push(...n),this}async runAgent(e,n){try{this.isRunning=!0,this.agentId=this.agentId??tn();let r=this.prepareRunAgentInput(e);this.debugLogger?.lifecycle("LIFECYCLE","Run started:",{agentId:this.agentId,threadId:this.threadId});let o,i=new Set(this.messages.map(l=>l.id)),s=[{onRunStartedEvent:({event:l})=>yw(l),onRunFinishedEvent:l=>{l.outcome==="success"&&(o=l.result)}},...this.subscribers,n??{}];bw.add(r),await this.onInitialize(r,s),this.activeRunDetach$=new Pt;let a;this.activeRunCompletionPromise=new Promise(l=>{a=l}),await us(Ki(()=>[...this.middlewares,new vh].reduceRight((l,d)=>({run:h=>d.run(h,l),get messages(){return l.messages},get state(){return l.state}}),this).run(r),lh(this.debugLogger,{maxEntries:this.maxEnforcedEntries}),Pa(this.debugLogger),rh(this.debugLogger),l=>l.pipe(ps(this.activeRunDetach$)),l=>this.applyBeforeSourceError(r,l,s),_r(l=>(this.debugLogger?.lifecycle("LIFECYCLE","Run errored:",{agentId:this.agentId,error:l instanceof Error?l.message:String(l)}),this.isRunning=!1,this.onError(r,l,s))),In(()=>{this.debugLogger?.lifecycle("LIFECYCLE","Run finished:",{agentId:this.agentId,threadId:this.threadId}),this.isRunning=!1,this.onFinalize(r,s),a?.(),a=void 0,this.activeRunCompletionPromise=void 0,this.activeRunDetach$=void 0}))(ge(null)));let c=ee(this.messages).filter(l=>!i.has(l.id));return{result:o,newMessages:c}}finally{this.isRunning=!1}}connect(e){throw new Sd}async connectAgent(e,n){try{this.isRunning=!0,this.agentId=this.agentId??tn();let r=this.prepareRunAgentInput(e),o,i=new Set(this.messages.map(l=>l.id)),s=[{onRunStartedEvent:({event:l})=>yw(l),onRunFinishedEvent:l=>{l.outcome==="success"&&(o=l.result)}},...this.subscribers,n??{}];await this.onInitialize(r,s),this.activeRunDetach$=new Pt;let a;this.activeRunCompletionPromise=new Promise(l=>{a=l}),await us(Ki(()=>Rn(()=>this.connect(r)),l=>lh(this.debugLogger,{maxEntries:this.maxEnforcedEntries})(hR()(l)),Pa(this.debugLogger),rh(this.debugLogger),l=>l.pipe(ps(this.activeRunDetach$)),l=>this.applyBeforeSourceError(r,l,s),_r(l=>(this.isRunning=!1,l instanceof Sd?An:this.onError(r,l,s))),In(()=>{this.isRunning=!1,this.onFinalize(r,s),a?.(),a=void 0,this.activeRunCompletionPromise=void 0,this.activeRunDetach$=void 0}))(ge(null)),{defaultValue:void 0});let c=ee(this.messages).filter(l=>!i.has(l.id));return{result:o,newMessages:c}}finally{this.isRunning=!1}}abortRun(){}async detachActiveRun(){if(!this.activeRunDetach$)return;let e=this.activeRunCompletionPromise??Promise.resolve();this.activeRunDetach$.next(),this.activeRunDetach$?.complete(),await e}applyBeforeSourceError(e,n,r){return Rn(()=>{let o,i=n.pipe(_r(s=>(o={error:s},An)));return this.processApplyEvents(e,this.apply(e,i,r),r).pipe(Ud(Rn(()=>{let s=o;return s?Z(()=>s.error):An})))})}apply(e,n,r){return xw(e,n,this,r,this.debugLogger)}processApplyEvents(e,n,r){return n.pipe(fs(o=>{o.messages&&(this.messages=o.messages,r.forEach(i=>{i.onMessagesChanged?.({messages:this.messages,state:this.state,agent:this,input:e})})),o.state!==void 0&&(this.state=o.state,r.forEach(i=>{i.onStateChanged?.({state:this.state,messages:this.messages,agent:this,input:e})}))}))}prepareRunAgentInput(e){let n=ee(this.messages);for(let o of n)o.subagentRunId===null&&delete o.subagentRunId;let r=mh(n.filter(o=>o.role!=="activity"));return{threadId:this.threadId,runId:e?.runId||tn(),...Hn(this.maxProtocolVersion,Na)>=0&&{protocolVersion:_n},tools:ee(e?.tools??[]),context:ee(e?.context??[]),forwardedProps:ee(e?.forwardedProps??{}),state:ee(this.state),messages:r,...e?.resume===void 0?{}:{resume:ee(e.resume)}}}async onInitialize(e,n){if(bw.has(e)&&this.pendingInterrupts.length>0){let o=new Set((e.resume??[]).map(s=>s.interruptId)),i=this.pendingInterrupts.map(s=>s.id).filter(s=>!o.has(s));if(i.length>0)throw new K(`Thread has ${i.length} pending interrupt(s) not addressed by resume: ${i.join(", ")}`);for(let s of this.pendingInterrupts)if(pR(s)&&(e.resume??[]).find(a=>a.interruptId===s.id)?.status!=="cancelled")throw new K(`Interrupt ${s.id} expired at ${s.expiresAt} and can no longer be answered. Cancel it to continue the thread.`)}let r=await le(n,this.messages,this.state,(o,i,s)=>o.onRunInitialized?.({messages:i,state:s,agent:this,input:e}));if(r.messages!==void 0||r.state!==void 0){if(r.messages){this.messages=r.messages;for(let o of r.messages)o.subagentRunId===null&&delete o.subagentRunId;e.messages=mh(r.messages.filter(o=>o.role!=="activity")),n.forEach(o=>{o.onMessagesChanged?.({messages:this.messages,state:this.state,agent:this,input:e})})}r.state!==void 0&&(this.state=r.state,e.state=r.state,n.forEach(o=>{o.onStateChanged?.({state:this.state,messages:this.messages,agent:this,input:e})}))}}onError(e,n,r){return jt(le(r,this.messages,this.state,(o,i,s)=>o.onRunFailed?.({error:n,messages:i,state:s,agent:this,input:e}))).pipe(Lt(o=>{let i=o;if((i.messages!==void 0||i.state!==void 0)&&(i.messages!==void 0&&(this.messages=i.messages,r.forEach(s=>{s.onMessagesChanged?.({messages:this.messages,state:this.state,agent:this,input:e})})),i.state!==void 0&&(this.state=i.state,r.forEach(s=>{s.onStateChanged?.({state:this.state,messages:this.messages,agent:this,input:e})}))),i.stopPropagation!==!0){let s=String(n);if(!(n.name==="AbortError"||n.message==="Fetch is aborted"||n.message==="signal is aborted without reason"||n.message==="component unmounted"||s==="component unmounted"))throw console.error("Agent execution failed:",n),n}return{}}))}async onFinalize(e,n){let r=await le(n,this.messages,this.state,(o,i,s)=>o.onRunFinalized?.({messages:i,state:s,agent:this,input:e}));(r.messages!==void 0||r.state!==void 0)&&(r.messages!==void 0&&(this.messages=r.messages,n.forEach(o=>{o.onMessagesChanged?.({messages:this.messages,state:this.state,agent:this,input:e})})),r.state!==void 0&&(this.state=r.state,n.forEach(o=>{o.onStateChanged?.({state:this.state,messages:this.messages,agent:this,input:e})})))}clone(){let e=Object.create(Object.getPrototypeOf(this));return e.agentId=this.agentId,e.description=this.description,e.threadId=this.threadId,e.messages=ee(this.messages),e.state=ee(this.state),e._debug=this._debug,e._debugLogger=this._debugLogger,e._maxEnforcedEntries=this._maxEnforcedEntries,e.isRunning=this.isRunning,e.subscribers=[...this.subscribers],e.middlewares=[...this.middlewares],e.pendingInterrupts=ee(this.pendingInterrupts),e}addMessage(e){this.messages.push(e),(async()=>{for(let n of this.subscribers)await n.onNewMessage?.({message:e,messages:this.messages,state:this.state,agent:this});if(e.role==="assistant"&&e.toolCalls)for(let n of e.toolCalls)for(let r of this.subscribers)await r.onNewToolCall?.({toolCall:n,messages:this.messages,state:this.state,agent:this});for(let n of this.subscribers)await n.onMessagesChanged?.({messages:this.messages,state:this.state,agent:this})})()}addMessages(e){this.messages.push(...e),(async()=>{for(let n of e){for(let r of this.subscribers)await r.onNewMessage?.({message:n,messages:this.messages,state:this.state,agent:this});if(n.role==="assistant"&&n.toolCalls)for(let r of n.toolCalls)for(let o of this.subscribers)await o.onNewToolCall?.({toolCall:r,messages:this.messages,state:this.state,agent:this})}for(let n of this.subscribers)await n.onMessagesChanged?.({messages:this.messages,state:this.state,agent:this})})()}setMessages(e){this.messages=ee(e),(async()=>{for(let n of this.subscribers)await n.onMessagesChanged?.({messages:this.messages,state:this.state,agent:this})})()}setState(e){this.state=ee(e),(async()=>{for(let n of this.subscribers)await n.onStateChanged?.({messages:this.messages,state:this.state,agent:this})})()}legacy_to_be_removed_runAgentBridged(e){this.agentId=this.agentId??tn();let n=this.prepareRunAgentInput(e);return[...this.middlewares,new vh].reduceRight((r,o)=>({run:i=>o.run(i,r),get messages(){return r.messages},get state(){return r.state}}),this).run(n).pipe(lh(this.debugLogger,{maxEntries:this.maxEnforcedEntries}),Pa(this.debugLogger),rh(this.debugLogger),FA(this.threadId,n.runId,this.agentId),r=>r.pipe(Lt(o=>(this.debugLogger?.event("LEGACY","Event:",o,{type:o.type}),o))))}};function xR(t){if(!Array.isArray(t.messages))return t;let e=!1,n=t.messages.map(r=>{if(r.subagentRunId===null){e=!0;let o={...r};return delete o.subagentRunId,o}return r});return e?{...t,messages:n}:t}var Rw=class extends _h{requestInit(t){return{method:"POST",headers:{...this.headers,"Content-Type":"application/json",Accept:"text/event-stream"},body:JSON.stringify(xR(t)),signal:this.abortController.signal}}runAgent(t,e){return this.abortController=t?.abortController??new AbortController,super.runAgent(t,e)}abortRun(){this.abortController.abort(),super.abortRun()}constructor(t){super(t),this.abortController=new AbortController,this.url=t.url,this.headers=ee(t.headers??{}),this.fetch=t.fetch??((e,n)=>fetch(e,n))}run(t){return yh(bh(()=>this.fetch(this.url,this.requestInit(rR(t,{maxEntries:this.maxEnforcedEntries})))),this.debugLogger)}clone(){let t=super.clone();t.url=this.url,t.headers=ee(this.headers??{}),t.fetch=this.fetch;let e=new AbortController,n=this.abortController.signal;return n.aborted&&e.abort(n.reason),t.abortController=e,t}};We(kr());function He(t,e){return e===void 0?t:{...t,credentials:e}}function Da(t){if(t.newThread!==void 0)return t.newThread();let e=Ie();return t.setActiveThread(e),e}function $a(t,e,n,r){if(e.length===0)return;let o=new URL(String(t),location.href).origin;o===location.origin||n.includes(o)||r.has(o)||(r.add(o),console.warn(`<ag-ui-chat>: sending host credentials (${e.join(", ")}) to ${o}, which is not this page's origin (${location.origin}). Those headers are the page's own authentication, and whichever server answers the browser's preflight receives them \u2014 so a URL attribute built from a query parameter or from tenant-authored configuration is a channel for the token to leave on. If this destination is deliberate, name it in \`trustedOrigins\` to confirm it and silence this notice. Reported once per origin.`))}function Lr(t){return t.split(",").map(e=>e.trim()).filter(e=>e!=="")}function Ua(t,e,n=new Set){let r=new Set(n);for(let a of t)a.role==="tool"&&r.add(a.toolCallId);let o=[],i=[],s=!1;for(let a of t){let c=a.role==="assistant"?ER(a.toolCalls):[];a.role==="tool"||c.length>0&&!s||(o.push(...i.map(e)),i=[]),o.push(a),s=a.role==="tool";for(let d of c)r.has(d)||(r.add(d),i.push(d))}return o.length+i.length===t.length?t:(o.push(...i.map(e)),o)}function ER(t){return Array.isArray(t)?t.map(e=>Object(e).id).filter(e=>typeof e=="string"):[]}function Ha(t,e){return Object(t.metadata)[e]??t[e]}var ve={title:"Assistant",chatHistory:"Chat history",closeHistory:"Close history",searchConversations:"Search conversations",queued:"Waiting to send",removeQueued:'Do not send "{text}"',noMatches:"No conversations match that.",threadsToday:"Today",threadsPreviousWeek:"Previous 7 days",threadsOlder:"Older",chatMoved:"Moved this panel out of the way",chatMinimised:"Minimised this panel",undo:"Undo",newChat:"New chat",collapse:"Collapse",expand:"Expand",maximize:"Maximize",restore:"Restore",expandUnread:"Expand \u2014 {count} unread",toggleTheme:"Toggle theme",copyCode:"Copy",copied:"Copied",copyFailed:"Copy failed",checkpoints:"Continue a run",noCheckpoints:"Nothing to continue yet.",resumeRun:"Resume",forkRun:"Fork",forkedRun:"branched",greeting:"Hello, {name}",greetingNoName:"Hello there",conversation:"Conversation",jumpToLatest:"Jump to latest",announceResponding:"Assistant is responding",announceAnswerReady:"Assistant answered",announceAwaitingDecision:"{count} action is waiting for your approval",announceStopped:"Response stopped",announceFailed:"The response failed",thinking:"Assistant is thinking\u2026",thoughts:"Thoughts",thoughtFor:"Thought for {seconds}s",stopped:"\u23F9 Stopped",connectionLost:"Connection lost",runErrorFailed:"The response failed. Try again in a moment.",runErrorTimedOut:"The response took too long and was stopped.",runErrorInterrupted:"The response was interrupted before it finished.",runErrorNewChat:"Start a new conversation",usageBoth:"{input} in \xB7 {output} out tokens",usageInput:"{input} in tokens",usageOutput:"{output} out tokens",callNotFinished:"Not finished: the run ended or moved on before this tool call returned a result.",declinedAction:"User declined the action.",confirmCheckFailed:"Not run: the check that decides whether this action needs the user's confirmation failed.",navigating:"Navigating\u2026",historyReplaced:"The server replaced this conversation's history. Reload to see the updated transcript.",chartUndrawable:"A chart could not be drawn from the data sent, so it was removed.",historyCompacted:"Earlier turns condensed to fit the context window ({count} removed)",usingSkill:"Using skill {name}",enqueuedMessages:"Added during the run",mcpAppUnsupported:"An app view can't be shown here: {uri}",mcpAppExitFullscreen:"Exit full screen",mcpAppConfirmMessage:"This app wants to send this message for you:",mcpAppConfirmTool:"This app wants to run \u201C{tool}\u201D",runInterrupted:"The previous response didn\u2019t finish \u2014 the page changed before it arrived.",pageMoved:"The page changed since you last looked at it. Call read_page to see the current page, then retry.",attachmentsStillUploading:"{n} file still uploading \u2014 it was not sent with this message and is still attached.",notConnected:"This chat isn\u2019t connected to an agent, so the message wasn\u2019t sent.",continueNeedsTurn:"Type the next turn in the composer first, then pick a run to continue.",continueWhileRunning:"Wait for the current answer or stop it, then pick a run to continue.",continueWhileLoading:"Wait for the conversation to finish loading, then pick a run to continue.",skillNeeds:"\u201C{title}\u201D needs {fields} \u2014 fill it in below, then send.",message:"Message",inputPlaceholder:"Ask anything\u2026",send:"Send",stop:"Stop",attachFiles:"Attach files",recordVoice:"Record voice",stopRecording:"Stop recording",transcribing:"Transcribing\u2026",transcriptionFailed:"Transcription failed",recordingLimit:"Stopped at the {n}-minute limit \u2014 transcribing what was recorded.",placeShared:"The agent is told you are on {label}",placeWithheld:"{label} is not sent with your next message",placeStopSharing:"Stop sharing this page",placeShareAgain:"Share this page again",toolRunning:"running\u2026",toolDeferred:"waiting for you",toolDone:"\u2713 done",toolError:"\u26A0 error",toolDeclined:"\u2298 declined",toolInterrupted:"\u25CC not finished",resizePanel:"Resize the chat panel",decisionApproved:"approved by you",decisionDeclined:"declined by you",answeredByReviewer:"Approved by a reviewer model",answeredByRoutine:"Approved by a routine",argumentsLabel:"Arguments",resultLabel:"Result",errorLabel:"Error",declinedLabel:"Declined",interruptedLabel:"Not finished",details:"Details",toolGroupSteps:"{count} steps",toolGroupWorking:"Working through {count} steps",toolGroupWorked:"Worked through {count} steps",toolGroupWaiting:"{count} waiting for you",toolGroupFailed:"{count} failed",toolGroupDeclined:"{count} declined",toolStepRepeat:"({n})",subAgentWorking:"Working\u2026",subAgentDelegatedTo:"Delegated to {agent}",subAgentFinished:"{agent} finished",subAgentFailed:"The sub-agent failed",subAgentSteps:"Steps the sub-agent took",childSessionOpen:"Open the {agent} task",childSessionNeedsYou:"The {agent} task needs you",parentThread:"From {title}",parentThreadUnlisted:"From the conversation that started this one",approvalEditArgs:"Edit the arguments before approving",approvalArgsInvalid:"That is not valid JSON, so nothing was sent.",approvalArgsNotAnObject:"Arguments have to be a JSON object.",suggestions:"Suggested follow-ups",messageActions:"Message actions",quoteSelection:"Quote",copyMessage:"Copy message",retryMessage:"Try again",feedbackUp:"Good answer",feedbackDown:"Poor answer",confirmAction:"Confirm action",confirmAlways:"Always allow",confirmRun:"Run \u201C{tool}\u201D?",confirm:"Confirm",cancel:"Cancel",approveAction:"Approve action",approvalPrompt:"Approve this action?",approve:"Approve",deny:"Deny",askUserAction:"Question",otherOption:"Other\u2026",answerPlaceholder:"Type your answer\u2026",submit:"Submit",chats:"Chats",noConversations:"No conversations yet.",rename:"Rename",renameConversation:"Rename conversation",delete:"Delete",deleteConversation:"Delete conversation",deletePrompt:"Delete?",skills:"Skills",manageSkills:"Manage skills",backToConversation:"Back to the conversation",newSkill:"New skill",newSkillTitle:"New skill",editSkillTitle:"Edit skill",noSkills:"No skills yet",noSkillsBody:"A skill is a set of instructions you or the agent can call up by name, like {example}.",draftSkill:"Draft one with the agent",writeSkill:"Write it yourself",skillName:"Name",skillNameHint:"Lowercase words joined by hyphens. It is what you type after /.",skillDescription:"Description",skillDescriptionHint:"The agent reads only this until it loads the skill, so say when to use it.",skillBody:"Instructions",skillBodyHint:"Markdown. A skill grants no tools: approvals still apply.",skillReach:"Who can use it",skillInMenu:"In the / menu",skillInMenuHint:"You pick it from the palette.",skillAgentMayLoad:"Agent may load it on its own",skillAgentMayLoadHint:"When the description matches the request.",skillUnreachable:"With both off nobody can reach this skill. Turn it off instead if that is the intent.",skillOff:"Off",turnOn:"Turn on",turnOff:"Turn off",create:"Create",save:"Save",skillSaved:"Saved /{name}",skillTurnedOn:"/{name} is on again",skillTurnedOff:"/{name} is off",skillsUnavailable:"Skills could not be loaded.",skillSaveFailed:"The skill could not be saved.",routines:"Routines",newRoutine:"New routine",newRoutineTitle:"New routine",editRoutineTitle:"Edit routine",noRoutines:"No routines yet",noRoutinesBody:"A routine asks the agent the same thing on a schedule. Each run is a conversation of its own.",routinesUnavailable:"Routines could not be loaded.",routineSaveFailed:"The routine could not be saved.",makeRoutine:"Make this a routine",routineName:"Name",routinePrompt:"Prompt",routinePromptHint:"What the agent is asked each time the routine runs.",routineSchedule:"When it runs",routineWeekly:"On days of the week",routineInterval:"Every few hours",routineAt:"At",routineEvery:"Every (hours)",routineTimezone:"Timezone",routineTools:"Pre-approved tools",routineToolsHint:"A run uses these without asking. Every other tool still waits for you.",routineNoTools:"This agent has no tools to pre-approve.",routineDestructive:"Destructive",routineGrantDestructive:"{name} is destructive: every run may use it without asking you. Grant it anyway?",routineGrant:"Grant",routineDaily:"Every day at {time}",routineWeekdays:"Weekdays at {time}",routineOnDays:"{days} at {time}",routineHourly:"Every hour",routineEveryHours:"Every {n} hours",routineInZone:"{schedule} ({zone})",routineNext:"Next {time}",routinePaused:"Paused",routinePausedBecause:"Paused: {reason}",routineLastNever:"Not run yet",routineLastPending:"Running",routineLastLapsed:"Lapsed",routineLastFinished:"Finished",routineLastUnknown:"Ran",pause:"Pause",resume:"Resume",runNow:"Run now",routineSaved:"Saved {name}",routinePausedStatus:"{name} is paused",routineResumedStatus:"{name} is on again",routineStarted:"{name} is running",routineBadge:"Run by the routine {name}",tooLarge:"Too large (max {size})",fileTypeNotAllowed:"File type not allowed",uploadFailed:"upload failed",retry:"Retry",retryUpload:"Retry upload",remove:"Remove",removeAttachment:"Remove attachment",justNow:"just now",minutesAgo:"{n}m ago",hoursAgo:"{n}h ago",daysAgo:"{n}d ago",weeksAgo:"{n}w ago",moreControls:"More",routineHour:"Hour",routineMinute:"Minute"};function Th(t){let e={...ve};for(let n of Object.keys(t)){let r=t[n];r!==void 0&&(e[n]=r)}return e}function _R(t){let e=document.createElement("input");return e.type="text",e.className="question-input",e.setAttribute("part","question-input"),e.placeholder=t,e}function Sh(t,e,n={}){let r=n.strings??ve,o=e.options??[],i=o.length>0,s=!i||e.allowCustom===!0;return new Promise(a=>{let c=document.createElement("div");c.className="question",c.setAttribute("part","question"),c.setAttribute("role","group"),c.setAttribute("aria-label",r.askUserAction);let l=document.createElement("div");l.className="question-body",l.setAttribute("part","question-body"),l.textContent=e.question;let d=document.createElement("div");d.className="question-options",d.setAttribute("part","question-options");let h=`q-${o.length}-${e.question.length}`,m=[];for(let g of o){let x=document.createElement("label");x.className="question-choice",x.setAttribute("part","question-choice");let b=document.createElement("input");b.type="radio",b.name=h,b.value=g,b.setAttribute("part","question-radio");let k=document.createElement("span");k.setAttribute("part","question-choice-text"),k.textContent=g,x.append(b,k),d.appendChild(x),m.push(b)}let f=null,u=null;if(s){if(u=_R(r.answerPlaceholder),i){let g=document.createElement("label");g.className="question-choice",g.setAttribute("part","question-choice"),f=document.createElement("input"),f.type="radio",f.name=h,f.value="",f.setAttribute("part","question-radio");let x=document.createElement("span");x.setAttribute("part","question-choice-text"),x.textContent=r.otherOption,g.append(f,x),d.appendChild(g),u.disabled=!0}d.appendChild(u)}let v=document.createElement("div");v.className="question-actions",v.setAttribute("part","question-actions");let E=document.createElement("button");E.type="button",E.className="question-btn",E.setAttribute("part","question-button"),E.textContent=r.submit,v.appendChild(E);let T=!1,w=()=>{let g=m.find(x=>x.checked);if(g!==void 0)return g.value;if(u!==null&&(f===null||f.checked)){let x=u.value.trim();return x===""?null:x}return null},D=()=>{u!==null&&f!==null&&(u.disabled=!f.checked),E.disabled=w()===null},S=g=>{if(!T){T=!0,E.disabled=!0;for(let x of m)x.disabled=!0;f!==null&&(f.disabled=!0),u!==null&&(u.disabled=!0),c.setAttribute("data-resolved",g===""?"cancelled":"answered"),a(g)}};for(let g of[...m,...f!==null?[f]:[]])g.addEventListener("change",D);if(u?.addEventListener("input",D),u?.addEventListener("keydown",g=>{if(g.key==="Enter"){g.preventDefault();let x=w();x!==null&&S(x)}}),E.addEventListener("click",()=>{let g=w();g!==null&&S(g)}),n.signal?.addEventListener("abort",()=>S(""),{once:!0}),c.append(l,d,v),t.appendChild(c),n.signal?.aborted===!0){S("");return}D(),(i?m[0]:u)?.focus()})}function kh(t){let e={};if(!Array.isArray(t))return e;for(let n of t){if(n===null||typeof n!="object")continue;let r=n,o=r.name,i=r.summary,s=r.description;typeof o=="string"&&typeof i=="string"&&(e[o]=typeof s=="string"?{name:o,summary:i,description:s}:{name:o,summary:i})}return e}var Fa=class{#e;#t={};#n=new Set;#r=new lo;constructor(e){this.#e=e}register(e){this.#r.register(e)}registerPageState(e){for(let n of yd(e))this.#r.register(n)}has(e){return this.#r.has(e)}defaultTools(){return[...this.#a().map(e=>({name:e.name,description:e.description,parameters:e.parameters})),...this.#r.tools()]}advertise(){let e=this.#e.getTools();return this.#n=new Set(e.map(n=>n.name)),e}wasAdvertised(e){return this.#n.has(e)}resolve(e){let n=this.#a().find(r=>r.name===e);return n!==void 0?n:this.#r.has(e)?this.#r.get(e):null}summary(e){return this.#t[e]?.summary}async fetchCatalog(){let e=this.#e.element.getAttribute("data-tools-url");if(e!==null)try{let n=await fetch(e,this.#e.fetchInit(e));this.#t=kh(await n.json())}catch{}}#o(){return this.#e.routeMap().length===0?[]:wd(()=>this.#e.routeMap(),()=>this.#e.navigate())}#s(){let e=this.#e.getPageMap();return e===null||this.#e.pageWithheld()?[]:[{name:io,description:"Read the current page's structure (fields, buttons, route). Call after acting to observe the result within the same turn.",parameters:{type:"object",properties:{},required:[],[Ue]:"Read the page"},handler:()=>e()}]}#i(){let e=this.#e.element.getAttribute("data-page-actions");if(e===null)return[];let n=new Set(Lr(e));return[...vd(n,r=>this.#e.resolvePageTarget(r)),...n.has(fo.CHAT)?nd(this.#e.element):[]]}#a(){return[...this.#o(),...this.#s(),...this.#i(),...this.#l()]}#l(){return this.#e.askUser()?[{name:"ask_user",description:"Ask the user a question and wait for their answer. Provide `options` for a multiple-choice prompt; set `allow_custom` to also accept a free-text answer.",parameters:{type:"object",properties:{question:{type:"string",description:"The question to ask the user."},options:{type:"array",items:{type:"string"},description:"Preset choices offered as radio buttons."},allow_custom:{type:"boolean",description:"Allow a free-text answer in addition to any options."}},required:["question"]},handler:(e,n)=>this.#c(e,n)}]:[]}async#c(e,n){let o={question:typeof e.question=="string"?e.question:""},i=e.options;Array.isArray(i)&&(o.options=i.filter(d=>typeof d=="string")),e.allow_custom===!0&&(o.allowCustom=!0);let s=this.#e.decision.open();this.#e.hidePending();let a=()=>Sh(this.#e.ensureGroup(),o,{signal:s,strings:this.#e.strings()}),c=this.#e.askUserRenderer(),l;this.#e.setAsking(n,!0);try{if(c===null)l=await a();else try{l=await c.call(this.#e.element,o,{signal:s})}catch(d){l=await this.#d(d,s,n,a)}}finally{this.#e.setAsking(n,!1)}return this.#e.decision.close(),this.#e.updateEmptyState(),this.#e.follow(),l}#d(e,n,r,o){return n.aborted?Promise.resolve(""):(console.warn(`ag-ui-chat: askUserRenderer failed for tool call ${r}, so the built-in question card asks instead`,e),o())}};function Ga(t){if(t.name!==Zc)return null;let e=t.args?.id;return typeof e=="string"&&e!==""?e:null}function Iw(t,e){let n=document.createElement("button");return n.type="button",n.className=`approval-btn approval-btn--${t}`,n.setAttribute("part",`approval-button approval-${t}`),n.textContent=e,n}function Ah(t,e,n={}){let r=n.strings??ve;return new Promise(o=>{let i=document.createElement("div");i.className="approval",i.setAttribute("part","approval"),e.toolName!==void 0&&i.setAttribute("data-tool-name",e.toolName),i.setAttribute("role","group"),i.setAttribute("aria-label",r.approveAction);let s=document.createElement("div");s.className="approval-body",s.setAttribute("part","approval-body"),s.textContent=e.message??r.approvalPrompt;let a=TR(e,n,r),c=document.createElement("div");c.className="approval-actions",c.setAttribute("part","approval-actions");let l=Iw("deny",r.deny),d=Iw("approve",r.approve),h=!1,m=f=>{h||(h=!0,l.disabled=!0,d.disabled=!0,i.setAttribute("data-resolved",f?"approved":"denied"),o(f))};if(l.addEventListener("click",()=>m(!1)),d.addEventListener("click",()=>{a!==null&&!a.commit()||m(!0)}),n.signal?.addEventListener("abort",()=>m(!1),{once:!0}),c.append(l,d),i.append(s,...a===null?[]:[a.root],c),t.appendChild(i),n.signal?.aborted===!0){m(!1);return}d.focus()})}function TR(t,e,n){let{onEdit:r}=e;if(r===void 0||t.args===void 0)return null;let o=JSON.stringify(t.args,null,2),i=document.createElement("div");i.className="approval-edit",i.setAttribute("part","approval-edit");let s=document.createElement("textarea");s.className="approval-args",s.setAttribute("part","approval-args"),s.setAttribute("aria-label",n.approvalEditArgs),s.rows=Math.min(10,o.split(`
`).length),s.value=o;let a=document.createElement("div");return a.className="approval-error",a.setAttribute("part","approval-error"),a.setAttribute("role","alert"),a.hidden=!0,i.append(s,a),{root:i,commit:()=>{if(s.value===o)return!0;let c;try{c=JSON.parse(s.value)}catch{return a.textContent=n.approvalArgsInvalid,a.hidden=!1,s.focus(),!1}return typeof c!="object"||c===null||Array.isArray(c)?(a.textContent=n.approvalArgsNotAnObject,a.hidden=!1,s.focus(),!1):(a.hidden=!0,r(c),!0)}}}function Rh(t,e){let n=document.createElement("button");return n.type="button",n.className=`confirm-btn confirm-btn--${t}`,n.setAttribute("part",`confirm-button confirm-${t}`),n.textContent=e,n}function Ih(t,e,n={}){let r=n.strings??ve;return new Promise(o=>{let i=document.createElement("div");i.className="confirm",i.setAttribute("part","confirm"),i.setAttribute("data-tool-name",e.toolName),i.setAttribute("role","group"),i.setAttribute("aria-label",r.confirmAction);let s=document.createElement("div");s.className="confirm-body",s.setAttribute("part","confirm-body"),s.textContent=e.message??F(r.confirmRun,{tool:e.toolName});let a=document.createElement("pre");a.className="confirm-args",a.setAttribute("part","confirm-args"),a.textContent=JSON.stringify(e.args,null,2),a.hidden=Object.keys(e.args).length===0;let c=document.createElement("div");c.className="confirm-actions",c.setAttribute("part","confirm-actions");let l=Rh("cancel",r.cancel),d=n.onAlwaysAllow===void 0?null:Rh("always",F(r.confirmAlways,{tool:e.toolName})),h=Rh("confirm",r.confirm),m=!1,f=u=>{m||(m=!0,i.remove(),o(u))};if(l.addEventListener("click",()=>f(!1)),h.addEventListener("click",()=>f(!0)),d?.addEventListener("click",()=>{n.onAlwaysAllow?.(),f(!0)}),n.signal?.addEventListener("abort",()=>f(!1),{once:!0}),c.append(l,...d===null?[]:[d],h),i.append(s,a,c),t.appendChild(i),n.signal?.aborted===!0){f(!1);return}h.focus()})}function Ch(t){return t[ro]===!0}function Ba(t){return t[oo]===!0}var Va=class{#e;#t=new Set;#n=null;constructor(e){this.#e=e}forgetWaivers(){this.#t.clear()}buildContext(){return this.#n=window.location.href,this.#e.getContext()}async execute(e){if(Ga(e)!==null)return null;let n=this.#e.tenure(),r=this.#e.conversation(),o=this.#e.threadId(),i=this.#e.transcript.cardFor(e);this.#e.transcript.forgetCard(e.id),this.#e.transcript.setCardElement(e.id,i.element),this.#e.transcript.holdRunning(e.id,i);let s=this.#e.tools.wasAdvertised(e.name)?this.#e.tools.resolve(e.name):null;if(s===null)return this.#e.transcript.isServerSettled(e.id)||i.settle(Q.INTERRUPTED,this.#e.strings().callNotFinished),null;if(this.#e.tools.wasAdvertised(io)&&e.name!==io&&!Ba(s.parameters)&&this.#i()){let d=this.#e.strings().pageMoved;return i.settle(Q.ERROR,d),this.#e.transcript.showPending(),{content:`Error: ${d}`,error:d,outcome:tt.FAILED}}let a=this.#e.decision.open(),c=await this.#o(e,s);if(this.#e.decision.close(),a.aborted)return this.#s(i);if(c==="unanswered"){let d=this.#e.strings().confirmCheckFailed;return i.settle(Q.DECLINED,d),this.#e.transcript.showPending(),{content:d,outcome:tt.DENIED}}if(c!==null){let d={toolName:e.name,args:e.args},h=s.parameters[Ti];typeof h=="string"&&(d.message=h);let m=this.#e.decision.open();i.setAsking(!0);let f;try{let u=Ih(this.#e.transcript.ensureGroup(),d,{signal:m,strings:this.#e.strings(),...c==="destructive"?{onAlwaysAllow:()=>this.#t.add(e.name)}:{}});this.#e.transcript.updateEmptyState(),this.#e.transcript.follow(),f=await u}finally{i.setAsking(!1)}if(this.#e.decision.close(),this.#e.tenure()!==n)return null;if(i.recordDecision(f?"approved":"declined"),!f){let u=this.#e.strings().declinedAction;return i.settle(Q.DECLINED,u),this.#e.conversation()===r&&this.#e.transcript.showPending(),{content:u,outcome:tt.DENIED}}if(m.aborted)return this.#s(i)}let l=Ba(s.parameters)&&this.#e.navigate()===null;l&&this.#e.conversationStore().saveCheckpoint(o,{toolCallId:e.id});try{let d=await s.handler(e.args,e.id);if(this.#e.tenure()!==n)return null;if(s.render!==void 0&&this.#e.transcript.renderToolOutput(s.render,e),l)return i.settle(Q.DONE,this.#e.strings().navigating),{content:"",halt:!0};let h=JSON.stringify(d??null);return i.settle(Q.DONE,h),this.#e.conversation()===r&&this.#e.transcript.showPending(),{content:h}}catch(d){if(this.#e.tenure()!==n)return null;l&&this.#e.conversationStore().saveCheckpoint(o,null);let h=d instanceof Error?d.message:String(d);return i.settle(Q.ERROR,h),this.#e.conversation()===r&&this.#e.transcript.showPending(),{content:`Error: ${h}`,error:h,outcome:tt.FAILED}}}async resolveInterrupts(e){let n=this.#e.decision.open();this.#e.announce(F(this.#e.strings().announceAwaitingDecision,{count:e.length})),this.#e.transcript.hidePending();let r=await Promise.all(e.map(async i=>{let s=i.toolCallId!==void 0?this.#e.transcript.card(i.toolCallId):void 0,a={},c=SR(i)??i.message;c!==void 0&&(a.message=c);let l=s?.element.getAttribute("data-tool-name");l!=null&&(a.toolName=l);let d,h=this.#e.approveWithEdits()&&s!==void 0;h&&(a.args=s.args),s?.mark(Q.DEFERRED),s!==void 0&&this.#e.transcript.revealStep(s);let m=()=>Ah(s?.approvalSlot??this.#e.transcript.ensureGroup(),a,{signal:n,strings:this.#e.strings(),...h?{onEdit:v=>{d=v}}:{}}),f=this.#e.approvalRenderer(),u;if(f===null)u=await m();else try{u=await f.call(this.#e.element,a,{signal:n})}catch(v){u=await this.#r(v,n,i.id,m)}return s?.recordDecision(u?"approved":"declined"),u?s?.mark(Q.PENDING):s?.settle(Q.DECLINED,this.#e.strings().declinedAction),{id:i.id,approved:u,editedArgs:d}}));this.#e.transcript.updateEmptyState(),this.#e.transcript.follow(),this.#e.decision.close();let o={};for(let{id:i,approved:s,editedArgs:a}of r)o[i]=s?{status:"resolved",payload:a===void 0?{approved:!0}:{approved:!0,editedArgs:a}}:{status:"cancelled"};return o}#r(e,n,r,o){return n.aborted?Promise.resolve(!1):(console.warn(`ag-ui-chat: approvalRenderer failed for interrupt ${r}, so the built-in approval card asks instead`,e),o())}async#o(e,n){if(this.#e.autoConfirm())return null;let r=this.#e.confirmPredicate();if(r!==null)try{return await r.call(this.#e.element,e.name,e.args)===!0?"predicate":null}catch(o){return console.warn(`ag-ui-chat: confirmPredicate failed for tool ${e.name}, so the call was refused`,o),"unanswered"}return this.#t.has(e.name)?null:Ch(n.parameters)?"destructive":null}#s(e){return e.settle(Q.INTERRUPTED,this.#e.strings().callNotFinished),null}#i(){return this.#n!==null&&this.#n!==window.location.href}};function SR(t){let e=t.metadata?.[Ti];return typeof e=="string"&&e.trim()!==""?e:void 0}var kR="http://www.w3.org/2000/svg",dt={top:20,right:12,bottom:30,left:44},AR=480,RR=220,IR=220/480,CR=160,NR=320,Cw=8,OR=5.6,Nw=["var(--_chart-1)","var(--_chart-2)","var(--_chart-3)","var(--_chart-4)","var(--_chart-5)","var(--_chart-6)"];function Vn(t){return Nw[t%Nw.length]}function Ow(t){let e=Math.max(RR,t),n=Math.min(NR,Math.max(CR,Math.round(e*IR)));return{width:e,height:n,plotW:e-dt.left-dt.right,plotH:n-dt.top-dt.bottom}}function Dt(t,e){let n=document.createElementNS(kR,t);for(let[r,o]of Object.entries(e))n.setAttribute(r,String(o));return n}function Mw(t,e){let n=Dt("text",{"font-size":10,fill:"currentColor","fill-opacity":.65,...e});return n.textContent=t,n}function MR(t){let e=[];return t.labels.forEach((n,r)=>{let o=0;for(let i of t.series)o+=i.points[r]??0,e.push(o)}),e}function PR(t){let e=t.kind==="stacked"?MR(t):t.series.flatMap(o=>[...o.points]),n=Math.max(0,...e),r=Math.min(0,...e);return n===r?{min:r,max:n+1}:{min:r,max:n}}function Zn(t,e,n,r){return dt.top+r.plotH-(t-e)/(n-e)*r.plotH}function Nh(t,e,n){let r=n.plotW/e;return dt.left+r*t+r/2}function LR(t,e){let n=e.plotW/t.length,r=Math.max(...t.map(o=>o.length))*OR;return Math.max(1,Math.ceil(r/n))}function zR(t,e,n,r,o){for(let s of[r,o]){let a=Zn(s,r,o,n);t.appendChild(Dt("line",{x1:dt.left,y1:a,x2:n.width-dt.right,y2:a,stroke:"currentColor","stroke-opacity":s===r?.35:.12})),t.appendChild(Mw(String(Math.round(s)),{x:dt.left-6,y:a+4,"text-anchor":"end"}))}let i=LR(e.labels,n);e.labels.forEach((s,a)=>{a%i===0&&t.appendChild(Mw(s,{x:Nh(a,e.labels.length,n),y:n.height-dt.bottom+16,"text-anchor":"middle"}))})}function DR(t,e,n,r,o){let i=n.plotW/e.labels.length,s=i*.7/e.series.length,a=Zn(r,r,o,n);e.series.forEach((c,l)=>{c.points.forEach((d,h)=>{let m=Zn(d,r,o,n);t.appendChild(Dt("rect",{x:dt.left+i*h+i*.15+s*l,y:m,width:s,height:Math.max(1,a-m),fill:Vn(l),rx:2}))})})}function $R(t,e,n,r,o){let i=n.plotW/e.labels.length,s=i*.7,a=e.labels.map(()=>0);e.series.forEach((c,l)=>{c.points.forEach((d,h)=>{let m=a[h]??0,f=m+d;a[h]=f;let u=Zn(f,r,o,n);t.appendChild(Dt("rect",{x:dt.left+i*h+i*.15,y:u,width:s,height:Math.max(1,Zn(m,r,o,n)-u),fill:Vn(l)}))})})}function UR(t,e,n,r,o){e.series.forEach((i,s)=>{let a=i.points.map((c,l)=>`${Nh(l,e.labels.length,n)},${Zn(c,r,o,n)}`).join(" ");t.appendChild(Dt("polyline",{points:a,fill:"none",stroke:Vn(s),"stroke-width":2,"stroke-linejoin":"round"}))})}function HR(t,e,n,r,o){e.series.forEach((i,s)=>{i.points.forEach((a,c)=>{t.appendChild(Dt("circle",{cx:Nh(c,e.labels.length,n),cy:Zn(a,r,o,n),r:4,fill:Vn(s),"fill-opacity":.85}))})})}function FR(t,e,n){let r=e.reduce((c,l)=>c+l,0),o=n.width/2,i=dt.top+n.plotH/2,s=Math.min(n.plotW,n.plotH)/2;if(r===0){t.appendChild(Dt("circle",{cx:o,cy:i,r:s,fill:"none",stroke:"currentColor","stroke-opacity":.3}));return}let a=-Math.PI/2;e.forEach((c,l)=>{let d=c/r*Math.PI*2,h=a+d;if(d>=Math.PI*2)t.appendChild(Dt("circle",{cx:o,cy:i,r:s,fill:Vn(l)}));else{let m=o+s*Math.cos(a),f=i+s*Math.sin(a),u=o+s*Math.cos(h),v=i+s*Math.sin(h),E=d>Math.PI?1:0;t.appendChild(Dt("path",{d:`M ${o} ${i} L ${m} ${f} A ${s} ${s} 0 ${E} 1 ${u} ${v} Z`,fill:Vn(l)}))}a=h})}function Pw(t,e){let n=Dt("svg",{viewBox:`0 0 ${e.width} ${e.height}`,width:"100%",role:"img"});if(n.setAttribute("aria-label",t.title??`${t.kind} chart`),t.kind==="pie"){let i=t.series[0];return FR(n,i.points.map(s=>Math.max(0,s)),e),n}let{min:r,max:o}=PR(t);return zR(n,t,e,r,o),t.kind==="bar"?DR(n,t,e,r,o):t.kind==="stacked"?$R(n,t,e,r,o):t.kind==="line"?UR(n,t,e,r,o):HR(n,t,e,r,o),n}function GR(t){if(t.length<2)return null;let e=document.createElement("div");return e.className="chart-legend",e.setAttribute("part","chart-legend"),t.forEach((n,r)=>{let o=document.createElement("span");o.className="chart-legend-item";let i=document.createElement("span");i.className="chart-legend-swatch",i.style.background=Vn(r),o.append(i,document.createTextNode(n)),e.appendChild(o)}),e}function BR(t,e){new ResizeObserver(()=>{e(Math.round(t.clientWidth/Cw)*Cw)}).observe(t)}function Fo(t){if(t.labels.length===0||t.series.length===0)return null;let e=document.createElement("div");if(e.className="chart-block",e.setAttribute("part","chart-block"),t.title!==void 0&&t.title!==""){let i=document.createElement("div");i.className="chart-title",i.setAttribute("part","chart-title"),i.textContent=t.title,e.appendChild(i)}let n=AR,r=Pw(t,Ow(n));e.appendChild(r);let o=GR(t.kind==="pie"?t.labels:t.series.map(i=>i.label));return o!==null&&e.appendChild(o),BR(e,i=>{if(i===n)return;n=i;let s=Pw(t,Ow(n));r.replaceWith(s),r=s}),e}var VR=["bar","line","pie","scatter","stacked"];function ZR(t){return VR.includes(t)?t:"bar"}function jR(t){if(!Array.isArray(t))return null;let e=[];for(let n of t){if(typeof n!="number"||!Number.isFinite(n)||Math.abs(n)>1e15)return null;e.push(n)}return e}function WR(t){if(!Array.isArray(t))return null;for(let e=0;e<t.length;e+=1)if(typeof t[e]!="string")return null;return t}function zr(t){if(typeof t!="object"||t===null)return null;let e=t,n=WR(e.labels);if(n===null||!Array.isArray(e.series))return null;let r=[];for(let s of e.series){if(typeof s!="object"||s===null)return null;let a=s,c=jR(a.points);if(c===null||c.length!==n.length)return null;r.push({label:typeof a.label=="string"?a.label:"",points:c})}if(r.length===0||r.length*n.length>2e4||n.length>2e3)return null;let o=ZR(e.kind),i=e.title;return typeof i=="string"?{kind:o,title:i,labels:n,series:r}:{kind:o,labels:n,series:r}}var Za="render_chart";function qR(t){let e=zr(t);return e===null?null:Fo(e)}function YR(t){let e=zr(t);return e!==null&&e.labels.length>0&&e.series.length>0}var KR="chart not rendered: expected labels (strings) and series, each with one finite number per label";function Lw(){return{name:Za,description:"Show a chart in the conversation. Supply the data and the page draws it. Every series must have exactly one point per label.",parameters:{type:"object",properties:{kind:{type:"string",enum:["bar","line","pie","scatter","stacked"]},title:{type:"string"},labels:{type:"array",items:{type:"string"}},series:{type:"array",items:{type:"object",properties:{label:{type:"string"},points:{type:"array",items:{type:"number"}}},required:["points"]}}},required:["labels","series"],"x-summary":"Draw a chart"},handler:t=>YR(t)?"chart rendered":KR,render:qR}}function dn(t){t.style.height="auto",t.style.height=`${t.scrollHeight}px`}function ja(t,e,n){let r=document.createElement("slot");return r.name=t,r.className=e,r.innerHTML=n,r}function zw(t){let{input:e,send:n,attachButton:r,fileInput:o,strings:i,signal:s}=t,a=t.queuedRow;a.className="queued",a.setAttribute("part","queued"),a.setAttribute("role","group"),a.setAttribute("aria-label",i.queued),a.hidden=!0;let c=document.createElement("div");c.className="input-row",c.setAttribute("part","composer");let l=document.createElement("div");l.className="composer",l.setAttribute("part","composer-surface");let d=document.createElement("div");d.className="composer-tools",d.setAttribute("part","composer-tools"),e.className="input",e.setAttribute("part","input"),e.setAttribute("aria-label",i.message),e.rows=1,e.placeholder=i.inputPlaceholder,e.addEventListener("keydown",t.onKeydown,{signal:s}),e.addEventListener("input",t.onInput,{signal:s}),n.className="send",n.type="button",n.setAttribute("part","send"),n.replaceChildren(ja("icon-send","send-send",lf),ja("icon-stop","send-stop",cf)),n.title=i.send,n.setAttribute("aria-label",i.send),n.dataset.state="idle",n.addEventListener("click",t.onSend,{signal:s});let h=t.hint;return h.className="skill-hint",h.setAttribute("part","skill-hint"),h.hidden=!0,r.className="attach-btn",r.type="button",r.setAttribute("part","attach-button"),r.replaceChildren(ja("icon-attach","attach-glyph",df)),r.title=i.attachFiles,r.setAttribute("aria-label",i.attachFiles),r.hidden=!0,r.addEventListener("click",()=>o.click(),{signal:s}),o.className="attach-input",o.type="file",o.multiple=!0,o.hidden=!0,o.addEventListener("change",t.onFilesPicked,{signal:s}),t.attachSlot.className="attachment-slot",t.voiceSlot.className="voice-slot",d.append(r,t.voiceSlot,t.place,n),l.append(e,d),c.append(l,o),c}function Oh(t,e){return new Promise((n,r)=>{let o=new FormData;o.append("file",t);let i=new XMLHttpRequest;i.open("POST",e.url),i.withCredentials=e.credentials==="include";for(let[c,l]of Object.entries(e.headers??{}))i.setRequestHeader(c,l);let s=e.onProgress;s!==void 0&&i.upload.addEventListener("progress",c=>{c.lengthComputable&&s(c.total===0?0:c.loaded/c.total)}),i.addEventListener("load",()=>{if(i.status>=200&&i.status<300)try{n(XR(JSON.parse(i.responseText)))}catch{r(new Error("upload returned an unreadable response"))}else r(new Error(JR(i)))}),i.addEventListener("error",()=>r(new Error("upload failed"))),i.addEventListener("abort",()=>r(new Error("upload cancelled")));let a=e.signal;a!==void 0&&a.addEventListener("abort",()=>i.abort()),i.send(o)})}function XR(t){if(typeof t!="object"||t===null)throw new Error("not an object");let e=t,n=e.id,r=e.name,o=e.mime,i=e.size,s=e.url;if(typeof n!="string"||typeof r!="string"||typeof o!="string"||typeof i!="number")throw new Error("missing fields");return typeof s=="string"?{id:n,name:r,mime:o,size:i,url:s}:{id:n,name:r,mime:o,size:i}}function JR(t){try{let e=JSON.parse(t.responseText);if(typeof e.error=="string")return e.error}catch{}return`upload failed (${t.status})`}function Wa(t){let e=document.createElement("div");e.className="attachment-chips",e.setAttribute("part","attachment-chips");for(let n of t)e.appendChild(QR(n));return e}function QR(t){let e=document.createElement("div");e.className="attachment-chip attachment-chip--ready",e.setAttribute("part","attachment-chip");let n=document.createElement("span");n.className="attachment-chip-icon",n.setAttribute("part","attachment-chip-icon"),n.innerHTML=Mh(t.mime),n.setAttribute("aria-hidden","true");let r=document.createElement("span");r.className="attachment-chip-name",r.setAttribute("part","attachment-chip-name"),r.textContent=t.name,r.title=t.name;let o=document.createElement("span");return o.className="attachment-chip-size",o.setAttribute("part","attachment-chip-size"),o.textContent=qa(t.size),e.append(n,r,o),e}function Mh(t){return t.startsWith("image/")?Pf:t==="application/pdf"?Lf:t.startsWith("text/")?zf:Mf}function qa(t){if(t<1024)return`${t} B`;let e=["KB","MB","GB"],n=t/1024,r=0;for(;n>=1024&&r<e.length-1;)n/=1024,r+=1;return`${n<10?Math.round(n*10)/10:Math.round(n)} ${e[r]}`}var Ya=class{element;#e;#t;#n=[];constructor(e){this.#e=e,this.#t=e.strings??ve,this.element=document.createElement("div"),this.element.className="attachment-tray",this.element.setAttribute("part","attachment-tray"),this.element.hidden=!0}add(e){let n={localId:Ie(),file:e,status:st.UPLOADING,progress:0,ref:null,error:"",controller:null};this.#n.push(n);let r=this.#r(e);if(r!==null){n.status=st.ERROR,n.error=r,this.#i(),this.#e.onChange?.();return}this.#i(),this.#e.onChange?.(),this.#o(n)}readyRefs(){let e=[];for(let n of this.#n)n.ref!==null&&e.push(n.ref);return e}hasPending(){return this.#n.some(e=>e.status===st.UPLOADING)}pendingCount(){return this.#n.filter(e=>e.status===st.UPLOADING).length}isEmpty(){return this.#n.length===0}clearReady(){this.#n=this.#n.filter(e=>e.status===st.UPLOADING),this.#i()}clear(){for(let e of this.#n)e.controller?.abort();this.#n=[],this.#i()}dispose(){for(let e of this.#n)e.controller?.abort()}#r(e){return this.#e.maxBytes>0&&e.size>this.#e.maxBytes?F(this.#t.tooLarge,{size:qa(this.#e.maxBytes)}):eI(this.#e.accept,e)?null:this.#t.fileTypeNotAllowed}#o(e){let n=this.#r(e.file);if(n!==null){e.status=st.ERROR,e.error=n,this.#i(),this.#e.onChange?.();return}e.status=st.UPLOADING,e.progress=0,e.error="";let r=new AbortController;e.controller=r,this.#i(),this.#e.upload(e.file,o=>{e.progress=o,this.#i()},r.signal).then(o=>{e.status=st.READY,e.ref=o}).catch(o=>{e.status=st.ERROR,e.error=o instanceof Error?o.message:this.#t.uploadFailed}).finally(()=>{e.controller=null,this.#i(),this.#e.onChange?.()})}#s(e){e.controller?.abort(),this.#n=this.#n.filter(n=>n!==e),this.#i(),this.#e.onChange?.()}#i(){this.element.replaceChildren(),this.element.hidden=this.#n.length===0;for(let e of this.#n)this.element.appendChild(this.#a(e))}#a(e){let n=document.createElement("div");n.className=`attachment-chip attachment-chip--${e.status}`,n.setAttribute("part","attachment-chip");let r=document.createElement("span");r.className="attachment-chip-icon",r.setAttribute("part","attachment-chip-icon"),r.innerHTML=Mh(e.file.type),r.setAttribute("aria-hidden","true");let o=document.createElement("span");o.className="attachment-chip-name",o.setAttribute("part","attachment-chip-name"),o.textContent=e.file.name,o.title=e.file.name;let i=document.createElement("span");if(i.className="attachment-chip-size",i.setAttribute("part","attachment-chip-size"),i.textContent=e.status===st.ERROR?e.error:qa(e.file.size),n.append(r,o,i),e.status===st.UPLOADING){let a=document.createElement("div");a.className="attachment-chip-bar",a.setAttribute("part","attachment-chip-bar");let c=document.createElement("div");c.className="attachment-chip-bar-fill",c.setAttribute("part","attachment-chip-bar-fill"),c.style.width=`${Math.round(e.progress*100)}%`,a.appendChild(c),n.appendChild(a)}if(e.status===st.ERROR){let a=document.createElement("button");a.type="button",a.className="attachment-chip-retry",a.setAttribute("part","attachment-chip-retry"),a.title=this.#t.retry,a.setAttribute("aria-label",this.#t.retryUpload),a.textContent="\u21BB",a.addEventListener("click",()=>this.#o(e)),n.appendChild(a)}let s=document.createElement("button");return s.type="button",s.className="attachment-chip-remove",s.setAttribute("part","attachment-chip-remove"),s.title=this.#t.remove,s.setAttribute("aria-label",this.#t.removeAttachment),s.textContent="\u2715",s.addEventListener("click",()=>this.#s(e)),n.appendChild(s),n}};function eI(t,e){let n=Lr(t).map(i=>i.toLowerCase());if(n.length===0)return!0;let r=e.type.toLowerCase(),o=e.name.toLowerCase();return n.some(i=>i.startsWith(".")?o.endsWith(i):i.endsWith("/*")?r.startsWith(i.slice(0,-1)):r===i)}var Ka=class{#e;#t=null;constructor(e){this.#e=e}get tray(){return this.#t}wire(e){this.#t?.element.remove(),this.#t=null;let n=this.#e.element.getAttribute("data-attachments-url"),r=this.#e.uploadHandler()??this.#n(n);if(r===null)return;let o=this.#e.element.getAttribute("data-attachment-accept")??"",i=new Ya({upload:r,maxBytes:this.#r(),accept:o,strings:this.#e.strings(),onChange:()=>this.#l(i)});this.#t=i,this.#e.slot.appendChild(this.#t.element),this.#e.fileInput.accept=o,this.#e.button.hidden=!1,this.#o(e),this.#a(i,e)}attach(e){return this.#t===null?!1:(this.#t.add(e),!0)}onFilesPicked(){let e=this.#e.fileInput,n=e.files;if(n!==null)for(let r of Array.from(n))this.#t?.add(r);e.value=""}#n(e){return e===null?null:(n,r,o)=>Oh(n,{url:e,headers:this.#e.headersFor(e),...this.#e.credentialsOption(),onProgress:r,signal:o})}#r(){let e=this.#e.element.getAttribute("data-attachment-max-bytes");if(e===null)return Bc;let n=Number.parseInt(e,10);return Number.isFinite(n)&&n>=0?n:Bc}#o(e){let n=this.#e.chat;n.addEventListener("dragover",r=>{r.preventDefault(),n.classList.add("chat--dragover")},{signal:e}),n.addEventListener("dragleave",()=>{n.classList.remove("chat--dragover")},{signal:e}),n.addEventListener("drop",r=>{r.preventDefault(),n.classList.remove("chat--dragover");let o=r.dataTransfer?.files;if(o!==void 0)for(let i of Array.from(o))this.#t?.add(i)},{signal:e})}#s(e,n,r){let o=this.#i(),i=n.getData("text/plain");o===null||i.length<o||(e.preventDefault(),r.add(new File([i],`pasted-${Dw()}.txt`,{type:"text/plain"})))}#i(){let e=this.#e.element.getAttribute("data-paste-attach");if(e===null)return Ii;if(e==="off")return null;let n=Number.parseInt(e,10);return Number.isNaN(n)||n<=0?(console.warn(`<ag-ui-chat>: data-paste-attach="${e}" is neither "off" nor a positive number of characters, so the default of ${Ii} is used.`),Ii):n}#a(e,n){this.#e.chat.addEventListener("paste",r=>{let o=r.clipboardData??null;if(o===null)return;let i=Array.from(o.files);if(i.length===0){this.#s(r,o,e);return}o.getData("text/plain")===""&&r.preventDefault();for(let s of i)this.#t?.add(tI(s))},{signal:n})}#l(e){this.#e.element.dispatchEvent(new CustomEvent(Pc,{detail:{attachments:e.readyRefs(),pending:e.pendingCount()},bubbles:!0,composed:!0}))}};function Dw(){return new Date().toISOString().replace(/[:.]/g,"-")}function tI(t){if(t.name!=="")return t;let e=t.type.split("/")[1]??t.type,n=Dw();return new File([t],e===""?`pasted-${n}`:`pasted-${n}.${e}`,{type:t.type})}async function Ph(t,e){let n=new FormData;n.append("audio",t,"recording.webm");let r=await fetch(e.url,He({method:"POST",headers:{...e.headers??{}},body:n},e.credentials));if(!r.ok)throw new Error(await nI(r));let o=await r.json();if(typeof o=="object"&&o!==null&&typeof o.text=="string")return o.text;throw new Error("transcription returned an unreadable response")}async function nI(t){try{let e=await t.json();if(typeof e.error=="string")return e.error}catch{}return`transcription failed (${t.status})`}var $w=12e4,Xa=class{element;#e;#t;#n;#r="idle";#o=null;#s=null;#i=[];#a=null;#l=!1;#c=!1;#d={};constructor(e){this.#e=e.transcribe,this.#t=e.onText,this.#n=e.strings??ve,this.element=document.createElement("button"),this.element.type="button",this.element.className="voice-btn",this.element.setAttribute("part","voice-button");let n=document.createElement("slot");n.name="icon-voice",n.innerHTML=uf,this.element.append(n),this.#b("idle"),this.element.addEventListener("click",()=>{this.toggle()})}async toggle(){if(this.#r==="recording"){this.#g();return}this.#r!=="transcribing"&&await this.#f()}async#f(){let e={};this.#d=e;let n;try{n=await navigator.mediaDevices.getUserMedia({audio:!0})}catch{n=null}if(e!==this.#d||this.#c){for(let o of n?.getTracks()??[])o.stop();return}if(n===null){this.#p(this.#n.transcriptionFailed);return}this.#s=n,this.#i=[],this.#l=!1;let r;try{r=new MediaRecorder(n),r.addEventListener("dataavailable",o=>{this.#i.push(o.data)}),r.addEventListener("stop",()=>{this.#u(r.mimeType)}),this.#o=r,r.start()}catch{this.#p(this.#n.transcriptionFailed);return}this.#a=setTimeout(()=>{this.#l=!0,this.#g()},$w),this.#b("recording")}#g(){this.#v(),this.#o?.stop()}#v(){this.#a!==null&&(clearTimeout(this.#a),this.#a=null)}dispose(){this.#c=!0,this.#v(),this.#o!==null&&this.#o.state!=="inactive"&&this.#o.stop(),this.#o=null,this.#m()}async#u(e){if(this.#c)return;this.#m(),this.#b("transcribing");let n=new Blob(this.#i,{type:e||"audio/webm"});try{let r=await this.#e(n);if(this.#c)return;this.#b("idle"),this.#l&&(this.element.title=F(this.#n.recordingLimit,{n:$w/6e4})),r!==""&&this.#t(r)}catch(r){this.#p(r instanceof Error?r.message:this.#n.transcriptionFailed)}finally{this.#o=null}}#m(){for(let e of this.#s?.getTracks()??[])e.stop();this.#s=null}#p(e){this.#c||(this.#m(),this.#o=null,this.#b("idle"),this.element.title=e)}#b(e){this.#r=e,this.element.dataset.state=e;let n=this.#T(e);this.element.title=n,this.element.setAttribute("aria-label",n),this.element.setAttribute("aria-pressed",String(e==="recording")),this.element.disabled=e==="transcribing"}#T(e){return e==="recording"?this.#n.stopRecording:e==="transcribing"?this.#n.transcribing:this.#n.recordVoice}};var Ja=class{#e;#t=null;constructor(e){this.#e=e}wire(){this.#t?.element.remove(),this.#t=null;let e=this.#e.element.getAttribute("data-transcribe-url"),n=this.#e.transcribeHandler()??this.#n(e);n!==null&&(this.#t=new Xa({transcribe:n,onText:r=>this.#r(r),strings:this.#e.strings()}),this.#e.slot.appendChild(this.#t.element))}dispose(){this.#t?.dispose()}#n(e){return e===null?null:n=>Ph(n,{url:e,headers:this.#e.headersFor(e),...this.#e.credentialsOption()})}#r(e){let n=this.#e.input,r=n.value.trim();n.value=r===""?e:`${r} ${e}`,this.#e.onInput(),n.focus()}};var Qa=class{chips;palette;#e;#t=[];#n=!1;#r=!1;#o=[];#s=0;#i=null;constructor(e){this.#e=e,this.chips=document.createElement("div"),this.chips.className="skill-chips",this.chips.setAttribute("part","skill-chips"),this.chips.hidden=!0,this.palette=document.createElement("div"),this.palette.className="skill-palette",this.palette.setAttribute("part","skill-palette"),this.palette.setAttribute("role","listbox"),this.palette.hidden=!0}setSkills(e){this.#t=e,this.#f()}enableChips(e){this.#n=e,this.#f()}enableSlash(e){this.#r=e}setManage(e,n){this.#i=e===null?null:{label:e,onManage:n}}isOpen(){return!this.palette.hidden}onInput(e){this.#r&&e.startsWith("/")?this.#a(e.slice(1)):this.close()}onKeydown(e){return this.isOpen()?e.key==="ArrowDown"?(this.#l(1),!0):e.key==="ArrowUp"?(this.#l(-1),!0):e.key==="Escape"?(this.close(),!0):e.key==="Enter"?this.#s===this.#o.length?(this.#d(),!0):(this.#o.slice(this.#s,this.#s+1).forEach(n=>{this.#c(n)}),!0):!1:!1}close(){this.palette.hidden=!0,this.palette.replaceChildren()}#a(e){let n=e.trim().toLowerCase(),r=this.#t.filter(o=>o.name.toLowerCase().includes(n)||o.title.toLowerCase().includes(n));if(r.length===0&&(this.#i===null||n!=="")){this.close();return}this.#o=r,this.#s=0,this.#g(),this.palette.hidden=!1}#l(e){let n=this.#o.length+(this.#i===null?0:1);this.#s=(this.#s+e+n)%n,this.#g()}#c(e){this.close(),this.#e(e)}#d(){let e=this.#i;this.close(),e.onManage()}#f(){this.chips.replaceChildren();let e=this.#n?this.#t.filter(n=>n.chip===!0):[];this.chips.hidden=e.length===0;for(let n of e){let r=document.createElement("button");r.type="button",r.className="skill-chip",r.setAttribute("part","skill-chip"),r.textContent=n.title,r.title=`/${n.name}`,r.addEventListener("click",()=>this.#c(n)),this.chips.appendChild(r)}}#g(){if(this.palette.replaceChildren(),this.#o.forEach((e,n)=>{let r=document.createElement("button");r.type="button",r.className="skill-item",r.setAttribute("part","skill-item"),r.setAttribute("role","option"),r.setAttribute("aria-selected",n===this.#s?"true":"false");let o=document.createElement("span");o.className="skill-item-title",o.setAttribute("part","skill-item-title");let i=document.createElement("code");if(i.className="skill-item-token",i.setAttribute("part","skill-item-token"),i.textContent=`/${e.name}`,o.append(i,document.createTextNode(` ${e.title}`)),r.appendChild(o),e.description!==void 0){let s=document.createElement("span");s.className="skill-item-desc",s.setAttribute("part","skill-item-desc"),s.textContent=e.description,r.appendChild(s)}r.addEventListener("click",()=>this.#c(e)),this.palette.appendChild(r)}),this.#i!==null){let e=document.createElement("button");e.type="button",e.className="skill-item skill-item--manage",e.setAttribute("part","skill-item skill-manage"),e.setAttribute("role","option");let n=this.#s===this.#o.length;e.setAttribute("aria-selected",n?"true":"false"),e.textContent=this.#i.label,e.addEventListener("click",()=>this.#d()),this.palette.appendChild(e)}}};function el(t,e,n){t.hidden=!1;let r=e.top-n.top,o=r<6+t.offsetHeight;t.dataset.below=String(o),t.style.top=`${o?e.bottom-n.top+6:r-6}px`;let i=t.offsetWidth/2,s=e.left+e.width/2-n.left;t.style.left=`${Math.min(Math.max(s,i),n.width-i)}px`}var rI=500;function Go(t,e=[],n){for(let r of fI(e)){if(!t.contains(r.startContainer)||!t.contains(r.endContainer))continue;let o=document.createRange();o.setStart(r.startContainer,r.startOffset),o.setEnd(r.endContainer,r.endOffset);let i=aI(o).trim();if(i!=="")return{text:i,rect:pI(o,n)}}return null}function Lh(t){let e=oI(t);return e.length===0?"":`${sI(e.join(`
`)).split(`
`).map(o=>`> ${o}`.trimEnd()).join(`
`)}

`}function oI(t){let e=t.split(/\r\n?|\n/).map(i=>i.trimEnd()),n=e.filter(i=>i!=="").map(iI),r=n.length===0?0:Math.min(...n),o=[];for(let i of e){let s=i.slice(r);s===""&&(o.length===0||o[o.length-1]==="")||o.push(s)}for(;o[o.length-1]==="";)o.pop();return o}function iI(t){return t.length-t.trimStart().length}function sI(t){return t.length>500?`${t.slice(0,500).trimEnd()}...`:t}function aI(t){let e="";for(let n of uI(t)){let r=n.parentElement;if(!hI(r))continue;let o=n===t.startContainer?t.startOffset:0,i=n===t.endContainer?t.endOffset:n.data.length;e+=lI(n.data.slice(o,i),r)}return e}function lI(t,e){return cI.has(dI(e))?t:t.replace(/[^\S\n]*\n[^\S\n]*/g,`
`).replace(/[^\S\n]+/g," ")}var cI=new Set(["pre","pre-wrap","break-spaces"]);function dI(t){return window.getComputedStyle(t).whiteSpace}function uI(t){let e=t.commonAncestorContainer;if(e.nodeType===Node.TEXT_NODE)return[e];let n=[],r=document.createTreeWalker(e,NodeFilter.SHOW_TEXT);for(let o=r.nextNode();o!==null;o=r.nextNode())t.intersectsNode(o)&&n.push(o);return n}function hI(t){return typeof t.checkVisibility!="function"?!0:t.checkVisibility({contentVisibilityAuto:!0,opacityProperty:!0,visibilityProperty:!0})}function pI(t,e){let n=[...t.getClientRects()];if(n.length===0)return t.getBoundingClientRect();if(e===void 0)return n[0];let r=n[0],o=Uw(r,e);for(let i of n.slice(1)){let s=Uw(i,e);s<o&&(o=s,r=i)}return r}function Uw(t,e){let n=Math.max(t.left-e.x,0,e.x-t.right),r=Math.max(t.top-e.y,0,e.y-t.bottom);return Math.hypot(n,r)}function fI(t){let e=window.getSelection();if(e===null)return[];let n=[...mI(e,t)];return e.rangeCount>0&&n.push(e.getRangeAt(0)),n}function mI(t,e){let n=t.getComposedRanges;if(n===void 0)return[];try{return n.call(t,{shadowRoots:e})}catch{return n.call(t,...e)}}var gI=`
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
`;function zh(t){let{within:e,exclude:n,onQuote:r}=t,o=new CSSStyleSheet;o.replaceSync(gI),document.adoptedStyleSheets=[...document.adoptedStyleSheets,o];let i=document.createElement("button");i.type="button",i.className="ag-ui-quote-offer",i.textContent=t.label,i.hidden=!0,document.body.append(i);let s="",a=()=>{i.hidden=!0,s=""},c=d=>{if(d.composedPath().includes(n)){a();return}if(vI()){a();return}let h=d instanceof MouseEvent?{x:d.clientX,y:d.clientY}:void 0,m=Go(e,[],h);if(m===null){a();return}s=m.text,el(i,m.rect,{top:0,left:0,width:document.documentElement.clientWidth})},l=d=>{i.contains(d.target)||a()};return e.addEventListener("mouseup",c),e.addEventListener("keyup",c),e.addEventListener("mousedown",l),document.addEventListener("scroll",a,!0),window.addEventListener("resize",a),i.addEventListener("mousedown",d=>{d.preventDefault()}),i.addEventListener("click",()=>{let d=s;window.getSelection()?.removeAllRanges(),a(),r(d)}),{element:i,detach(){e.removeEventListener("mouseup",c),e.removeEventListener("keyup",c),e.removeEventListener("mousedown",l),document.removeEventListener("scroll",a,!0),window.removeEventListener("resize",a),i.remove(),document.adoptedStyleSheets=document.adoptedStyleSheets.filter(d=>d!==o)}}}function vI(){let t=document.activeElement;return t===null?!1:t.tagName==="INPUT"||t.tagName==="TEXTAREA"||t.isContentEditable===!0}var tl=class{button=document.createElement("button");#e;#t="";#n=null;constructor(e){this.#e=e}insert(e){let n=Lh(e);if(n==="")return;let r=this.#e.input,o=r.value.replace(/\s+$/,"");r.value=o===""?n:`${o}

${n}`,this.#e.autoGrow(),r.focus();let i=r.value.length;r.setSelectionRange(i,i)}offerInPage(e){this.#n?.detach();let n=zh({within:e,label:this.#e.strings().quoteSelection,exclude:this.#e.element,onQuote:r=>this.#e.quote(r)});return this.#n=n,()=>{n.detach(),this.#n===n&&(this.#n=null)}}detachPageOffer(){this.#n?.detach(),this.#n=null}mount(e){let n=this.button;n.className="quote-selection",n.type="button",n.setAttribute("part","quote-selection"),n.textContent=this.#e.strings().quoteSelection,n.hidden=!0,n.addEventListener("mousedown",o=>{o.preventDefault()},{signal:e}),n.addEventListener("click",()=>{this.#e.quote(this.#t),window.getSelection()?.removeAllRanges(),this.#s()},{signal:e});let r=this.#e.messages;r.addEventListener("mouseup",o=>this.#o(o),{signal:e}),r.addEventListener("keyup",()=>this.#o(),{signal:e}),r.addEventListener("mousedown",()=>this.#s(),{signal:e})}#r(){return this.#e.element.getAttribute("data-quote-selection")!=="false"}#o(e){if(!this.#r())return;let n=e===void 0?void 0:{x:e.clientX,y:e.clientY},r=Go(this.#e.messages,[this.#e.root],n);if(r===null){this.#s();return}this.#t=r.text,el(this.button,r.rect,this.#e.messagesWrap.getBoundingClientRect())}#s(){this.button.hidden=!0,this.#t=""}};function Bo(t,e=Date.now(),n=ve){if(!Number.isFinite(t))return n.justNow;let r=Math.round((e-t)/1e3);if(r<60)return n.justNow;let o=Math.round(r/60);if(o<60)return F(n.minutesAgo,{n:o});let i=Math.round(o/60);if(i<24)return F(n.hoursAgo,{n:i});let s=Math.round(i/24);return s<7?F(n.daysAgo,{n:s}):F(n.weeksAgo,{n:Math.round(s/7)})}function nl(t){let e=t.activeElement;if(e!==null)return e;let n=document.activeElement;for(;n?.shadowRoot?.activeElement;)n=n.shadowRoot.activeElement;return n===document.body?null:n}function Hw(t){return t.preview!==void 0&&t.preview!==null&&t.preview!==""?t.preview:null}function Fw(t){return t.replace(/\s+/g," ").trim()}var Vo=class{element;#e;#t;#n;#r=null;#o=null;#s;#i=[];constructor(e,n=ve){this.#e=e,this.#s=n,this.element=document.createElement("div"),this.element.className="checkpoints",this.element.setAttribute("part","checkpoints"),this.element.setAttribute("role","dialog"),this.element.setAttribute("aria-label",n.checkpoints),this.element.tabIndex=-1,this.element.hidden=!0;let r=document.createElement("div");r.className="checkpoints-header",r.setAttribute("part","checkpoints-header"),this.#n=document.createElement("span"),this.#n.className="checkpoints-title",this.#n.setAttribute("part","checkpoints-title"),this.#n.textContent=n.checkpoints,r.append(this.#n),this.#t=document.createElement("div"),this.#t.className="checkpoints-list",this.#t.setAttribute("part","checkpoints-list"),this.element.append(r,this.#t),this.element.addEventListener("keydown",o=>this.#d(o))}setRuns(e){this.#i=e,this.#f()}setRelativeTimeFormatter(e){this.#o=e}#a(e){return this.#o!==null?this.#o(e):Bo(e,Date.now(),this.#s)}setStrings(e){this.#s=e,this.element.setAttribute("aria-label",e.checkpoints),this.#n.textContent=e.checkpoints,this.#f()}open(){this.open_||(this.#r=nl(this.element.getRootNode()),this.element.hidden=!1,(this.#c()[0]??this.element).focus())}close(){this.open_&&(this.element.hidden=!0,this.#r?.focus(),this.#r=null)}#l(){return this.element.getRootNode().activeElement}#c(){return Array.from(this.element.querySelectorAll("button, [tabindex]")).filter(e=>!e.hidden)}#d(e){if(e.key==="Escape"){e.stopPropagation(),this.close();return}if(e.key!=="Tab")return;let n=this.#c(),r=n[0],o=n[n.length-1],i=this.#l();e.shiftKey&&i===r?(e.preventDefault(),o?.focus()):!e.shiftKey&&i===o&&(e.preventDefault(),r?.focus())}get open_(){return!this.element.hidden}#f(){if(this.#t.replaceChildren(),this.#i.length===0){let n=document.createElement("div");n.className="checkpoints-empty",n.setAttribute("part","checkpoints-empty"),n.textContent=this.#s.noCheckpoints,this.#t.append(n);return}let e=this.#g();for(let n of this.#i)this.#t.append(this.#v(n,e))}#g(){let e=new Set,n=new Set;for(let r of this.#i){let o=Hw(r);if(o===null)continue;let i=Fw(o);e.has(i)&&n.add(i),e.add(i)}return n}#v(e,n){let r=document.createElement("div");r.className="checkpoint-row",r.setAttribute("part","checkpoint-row");let o=Hw(e),i=e.started_at===null?null:this.#a(Date.parse(e.started_at)),s=document.createElement("span");if(s.className="checkpoint-label",s.setAttribute("part","checkpoint-label"),s.textContent=o??i??e.run_id,r.append(s),o!==null&&i!==null){let l=document.createElement("span");l.className="checkpoint-time",l.setAttribute("part","checkpoint-time"),l.textContent=i,r.append(l)}if((o===null?i!==null:n.has(Fw(o)))&&e.run_id!==""){let l=document.createElement("span");l.className="checkpoint-id",l.setAttribute("part","checkpoint-id"),l.textContent=e.run_id.slice(0,8),l.title=e.run_id,r.append(l)}if(e.parent_run_id!==null){let l=document.createElement("span");l.className="checkpoint-branch",l.setAttribute("part","checkpoint-branch"),l.textContent=this.#s.forkedRun,l.title=e.parent_run_id,r.append(l)}let c=document.createElement("span");return c.className="checkpoint-actions",c.setAttribute("part","checkpoint-actions"),c.append(this.#u(e.run_id,"resume",this.#s.resumeRun),this.#u(e.run_id,"fork",this.#s.forkRun)),r.append(c),r}#u(e,n,r){let o=document.createElement("button");return o.type="button",o.className=`checkpoint-action checkpoint-${n}`,o.setAttribute("part",`checkpoint-action checkpoint-${n}`),o.textContent=r,o.addEventListener("click",()=>{this.close(),this.#e(e,n)}),o}};function Dh(t){let e=Ha(t,"attachments");return Array.isArray(e)?e.filter(bI):[]}function bI(t){if(typeof t!="object"||t===null)return!1;let e=t;return typeof e.id=="string"&&typeof e.name=="string"&&typeof e.mime=="string"&&typeof e.size=="number"&&(e.url===void 0||typeof e.url=="string")}var Zo=class{#e;#t;#n;constructor(e,n=()=>({}),r=()=>{}){this.#e=e.endsWith("/")?e:`${e}/`,this.#t=n,this.#n=r}async list(){try{let e=await fetch(this.#e,He({method:"GET",headers:{Accept:"application/json",...this.#t()}},this.#n()));return e.ok?(await e.json()).runs??[]:[]}catch{return[]}}async continuable(){return(await this.list()).filter(e=>e.continuable)}resumeUrl(e){return this.#r("resume",e)}forkUrl(e){return this.#r("fork",e)}#r(e,n){return`${this.#e.slice(0,-5)}${e}/${encodeURIComponent(n)}/`}};function jo(t){return t===tt.FAILED?Q.ERROR:t===tt.DENIED?Q.DECLINED:t===tt.INTERRUPTED?Q.INTERRUPTED:Q.DONE}var rl=class{#e;#t="";#n=[];#r=0;#o=0;#s=null;#i=null;#a=null;#l=null;#c=null;constructor(e){this.#e=e}get threadId(){return this.#t}get restored(){return this.#n}get continuation(){return this.#a}adoptActiveThread(){this.#t=this.#e.conversationStore().threadId()}startThread(){this.#t=Da(this.#e.conversationStore())}stopContinuation(){this.#a?.cancel(),this.#a=null}forgetRestored(){this.#n=[],this.#r+=1,this.#o+=1,this.#d()}#d(){let e=this.#l;this.#l=null,e?.()}reapUnsent(){this.#e.conversationStore().isUnsent?.(this.#t)===!0&&this.#e.conversationStore().clear(this.#t)}runs(){let e=this.#e.element.getAttribute("data-runs-url");return e===null||e===""?null:(this.#i===null&&(this.#i=new Zo(e,()=>this.#e.headersFor(e),()=>this.#e.requestCredentials())),this.#i)}openThreads(){this.#e.checkpoints.close(),this.refreshDrawer(),this.#e.drawer.open()}openCheckpoints(){this.#e.drawer.close(),this.#g(),this.#e.checkpoints.open()}switchThread(e){if(e===this.#t)return this.#c?.threadId===e?this.#c.done:Promise.resolve();let n=this.#t,r=this.#f(e,n).finally(()=>{this.#c===o&&(this.#c=null)}),o={threadId:e,done:r};return this.#c=o,r}async#f(e,n){this.#e.cancelRun(),this.#e.resetState(),this.#e.conversationStore().setActiveThread(e),this.#t=e,this.#e.setRunning(!1);try{await this.rehydrate("switch")}catch(r){throw this.#t===e&&(this.#t=n,this.#e.conversationStore().setActiveThread(n),await this.rehydrate(null).catch(()=>{})),r}}renameThread(e,n){this.#e.conversationStore().renameThread(e,n),this.refreshDrawer()}deleteThread(e){let n=e===this.#t;n&&this.#e.stopRun(),this.#e.conversationStore().clear(e),this.#e.threadDeleted(e),n&&(this.#e.resetState(),this.adoptActiveThread(),this.#e.setRunning(!1),this.#e.threadChanged(this.#t,"delete")),this.refreshDrawer()}async refreshDrawer(){this.#e.drawer.setRelativeTimeFormatter(this.#e.formatRelativeTime());let e=await this.#e.conversationStore().listThreads();this.#e.drawer.setThreads(e,this.#t),this.#e.threadsListed(e)}async#g(){let e=this.runs();this.#e.checkpoints.setRelativeTimeFormatter(this.#e.formatRelativeTime()),this.#e.checkpoints.setRuns(e===null?[]:await e.continuable())}async continueRun(e,n){let r=this.runs();if(r===null)return;if(this.#e.running()||this.#a!==null){let a=this.#e.strings();this.#v(this.#l===null?a.continueWhileRunning:a.continueWhileLoading);return}let o=this.#e.input.value.trim();if(o===""){this.#v(this.#e.strings().continueNeedsTurn);return}this.#e.recordTurn(o),this.#e.input.value="",this.#e.autoGrow();let i=this.#r,s=this.#e.buildClient({endpoint:n==="resume"?r.resumeUrl(e):r.forkUrl(e),initialMessages:[],follows:this.#e.client()?.messages??this.#n,onSaved:a=>{i===this.#r&&(this.#n=a,this.#e.releaseClient())}});this.#a=s;try{if(this.#e.announceTurn(o),this.#a!==s)return;await s.send(o)}finally{this.#a===s&&(this.#a=null,this.#e.continuationEnded())}}#v(e){this.#e.hint.textContent=e,this.#e.hint.hidden=!1,this.#e.input.focus()}async rehydrate(e){this.#o+=1;let n=this.#o,r=this.#t,o=this.#e.conversationStore();this.#s={generation:n,store:o,threadId:r};let i=o.loadCheckpoint(r),s=i===null&&o.isUnsent?.(r)!==!0,a=s?this.#e.runningOnServer(r):null,c=s?o.waitingInterrupts?.(r).then(xI,()=>$h)??null:null,l=i===null?new Promise(m=>{this.#l=m}):null,d=this.#l,h=this.#e.holdRun(l);try{this.#e.element.setAttribute("data-restoring","");let m;try{m=await o.loadMessages(r)}finally{n===this.#o&&this.#e.element.removeAttribute("data-restoring")}let f=$h;if(c!==null&&(f=await c),!this.#u(n)){this.#m(o,r,i);return}if(m!==null){let v=this.#e.strings().callNotFinished,E=Ua(m,T=>({id:Ie(),role:"tool",content:v,toolCallId:T,metadata:{outcome:tt.INTERRUPTED}}),new Set(i===null?f.map(({toolCallId:T})=>T):[i.toolCallId]));this.#n=E;for(let T of E)if(this.replay(T),!this.#u(n)){this.#m(o,r,i);return}}let u=a!==null&&await a;if(!this.#u(n)){this.#m(o,r,i);return}if(i===null&&!u&&this.#b(r,m),e!==null&&this.#e.threadChanged(r,e),i!==null){if(!this.#u(n)){this.#m(o,r,i);return}await this.#x(i,n)}else u&&this.#u(n)?this.#e.reattach():f.length>0&&this.#u(n)&&this.#e.answerParked(f)}finally{h.release(),this.#l===d&&this.#d()}}#u(e){return e===this.#o&&this.#e.element.isConnected}#m(e,n,r){r!==null&&!this.#p(e,n)&&e.saveCheckpoint(n,null)}#p(e,n){let r=this.#s;return r?.generation===this.#o&&r.store===e&&r.threadId===n}#b(e,n){let r=n?.at(-1);if(r===void 0||r.role!==et.USER)return;let o=this.#e.listedStatus(e);o==="running"||o==="waiting"||this.#e.transcript.appendNotice("\u26A0",this.#e.strings().runInterrupted,"interrupted")}replay(e){let n=typeof e.content=="string"?e.content:"";if(e.role===et.USER){let r=Dh(e);if(n!==""||r.length>0){let o=this.#e.appendMessage(et.USER,n);r.length>0&&o.appendChild(Wa(r))}return}if(e.role===et.ASSISTANT){if(n!==""){let r=this.#e.appendMessage(et.ASSISTANT,n);r.classList.add("message--restored");let o=e.id;this.#e.actions.attach(r,typeof o=="string"&&o!==""?{messageId:o}:{rateable:!1})}for(let r of yI(e.toolCalls)){let o={id:r.id,name:r.function.name,args:this.#T(r.function.arguments)};if(this.#e.transcript.noticeIfSkillLoad(o))continue;this.#e.transcript.setCardElement(o.id,this.#e.transcript.cardFor(o).element);let i=this.#e.tools.resolve(o.name)?.render;i!==void 0&&this.#e.transcript.renderToolOutput(i,o)}return}if(e.role==="activity"){let r=e;typeof r.activityType=="string"&&this.#e.activities.draw(e.id,r.activityType,r.content,!1);return}if(e.role==="tool"){let r=this.#e.transcript.card(e.toolCallId);if(r!==void 0){let o=mr(e.content);r.settle(jo(Ha(e,"outcome")),o,Object(e.metadata).answered_by),this.#e.childSessions.attach(r,o)}}}#T(e){if(typeof e!="string")return{};try{let n=JSON.parse(e);if(typeof n=="object"&&n!==null)return n}catch{}return{}}async#x(e,n){this.#e.conversationStore().saveCheckpoint(this.#t,null);let r=this.#e.ensureClient(),o=JSON.stringify(this.#e.navigationResult().call(this.#e.element,e));this.#u(n)&&(r.addToolResult(e.toolCallId,o),this.#e.transcript.card(e.toolCallId)?.settle(Q.DONE,o),await r.resume())}};function yI(t){return Array.isArray(t)?t.filter(wI):[]}function wI(t){if(typeof t!="object"||t===null)return!1;let e=t;return typeof e.id=="string"&&typeof e.function?.name=="string"}var $h=[];function xI(t){return t.every(n=>n.toolCallId!==void 0&&n.metadata?.kind==="approval")?t:$h}var EI=8,_I=1440*60*1e3,ol=class{element;#e;#t;#n;#r;#o;#s=null;#i;#a=[];#l="";#c;#d;#f="";#g="auto";#v=null;constructor(e,n=ve){this.#e=e,this.#i=n,this.element=document.createElement("div"),this.element.className="drawer",this.element.setAttribute("part","drawer"),this.element.hidden=!0;let r=document.createElement("div");r.className="drawer-backdrop",r.setAttribute("part","drawer-backdrop"),r.addEventListener("click",()=>this.close()),this.#t=document.createElement("div"),this.#t.className="drawer-panel",this.#t.setAttribute("part","drawer-panel"),this.#t.setAttribute("role","dialog"),this.#t.setAttribute("aria-modal","true"),this.#t.setAttribute("aria-label",n.chatHistory),this.#t.addEventListener("keydown",i=>this.#p(i));let o=document.createElement("div");o.className="drawer-header",o.setAttribute("part","drawer-header"),this.#n=document.createElement("span"),this.#n.className="drawer-title",this.#n.setAttribute("part","drawer-title"),this.#n.textContent=n.chats,this.#r=document.createElement("button"),this.#r.type="button",this.#r.className="drawer-new",this.#r.setAttribute("part","drawer-new"),this.#r.textContent=n.newChat,this.#r.addEventListener("click",()=>{this.close(),this.#e.onNew()}),this.#c=document.createElement("button"),this.#c.type="button",this.#c.className="drawer-close",this.#c.setAttribute("part","drawer-close"),this.#c.title=n.closeHistory,this.#c.setAttribute("aria-label",n.closeHistory),this.#c.append(document.createTextNode("\xD7")),this.#c.addEventListener("click",()=>this.close()),o.append(this.#n,this.#r,this.#c),this.#d=document.createElement("input"),this.#d.type="search",this.#d.className="drawer-filter",this.#d.setAttribute("part","drawer-filter"),this.#d.placeholder=n.searchConversations,this.#d.setAttribute("aria-label",n.searchConversations),this.#d.addEventListener("input",()=>{this.#f=this.#d.value.trim().toLowerCase(),this.#b()}),this.#o=document.createElement("div"),this.#o.className="drawer-list",this.#o.setAttribute("part","drawer-list"),this.#t.append(o,this.#d,this.#o),this.element.append(r,this.#t)}setRelativeTimeFormatter(e){this.#s=e}#u(e){return this.#s!==null?this.#s(e):Bo(e,void 0,this.#i)}setStrings(e){this.#i=e,this.#t.setAttribute("aria-label",e.chatHistory),this.#n.textContent=e.chats,this.#r.textContent=e.newChat,this.#c.title=e.closeHistory,this.#c.setAttribute("aria-label",e.closeHistory),this.#d.placeholder=e.searchConversations,this.#d.setAttribute("aria-label",e.searchConversations),this.#b()}isOpen(){return!this.element.hidden}open(){this.isOpen()||(this.#v=nl(this.element.getRootNode()),this.element.hidden=!1,this.#r.focus())}close(){this.isOpen()&&(this.element.hidden=!0,this.#v?.focus(),this.#v=null)}toggle(){this.isOpen()?this.close():this.open()}#m(){return this.element.getRootNode().activeElement}#p(e){if(e.key==="Escape"){e.preventDefault(),this.close();return}if(e.key!=="Tab")return;let n=Array.from(this.#t.querySelectorAll("button, input, [tabindex]")).filter(s=>!s.hidden),r=n[0],o=n[n.length-1],i=this.#m();e.shiftKey&&i===r?(e.preventDefault(),o?.focus()):!e.shiftKey&&i===o&&(e.preventDefault(),r?.focus())}setSearchMode(e){this.#g=e,this.#b()}setThreads(e,n){this.#a=e,this.#l=n,this.#b()}#b(){this.#o.replaceChildren();let e=this.#g==="auto"?this.#a.length<EI:this.#g==="never";this.#d.hidden=e,e&&this.#f!==""&&(this.#d.value="",this.#f="");let n=this.#R();if(n.length===0){let a=document.createElement("div");a.className="drawer-empty",a.setAttribute("part","drawer-empty"),a.textContent=this.#a.length===0?this.#i.noConversations:this.#i.noMatches,this.#o.appendChild(a);return}let{roots:r,children:o}=this.#x(n),i=this.#E(r),s=new Set;for(let[a,c]of i){if(i.length>1){let l=document.createElement("div");l.className="drawer-group-label",l.setAttribute("part","drawer-group-label"),l.setAttribute("role","heading"),l.setAttribute("aria-level","3"),l.textContent=a,this.#o.appendChild(l)}for(let l of c)this.#T(l,o,s,this.#o,!1)}}#T(e,n,r,o,i){r.add(e.threadId),o.appendChild(this.#h(e,i));let s=(n.get(e.threadId)??[]).filter(c=>!r.has(c.threadId));if(s.length===0)return;let a=document.createElement("div");a.className="drawer-children",a.setAttribute("part","drawer-children"),o.appendChild(a);for(let c of s)this.#T(c,n,r,a,!0)}#x(e){let n=new Set(e.map(a=>a.threadId)),r=[],o=new Map;for(let a of e){let c=a.parent?.threadId;if(c===void 0||!n.has(c)){r.push(a);continue}let l=o.get(c);l===void 0?o.set(c,[a]):l.push(a)}let i=new Set,s=a=>{if(!i.has(a.threadId)){i.add(a.threadId);for(let c of o.get(a.threadId)??[])s(c)}};for(let a of r)s(a);for(let a of e)i.has(a.threadId)||(r.push(a),s(a));return{roots:r,children:o}}#E(e){let n=new Date,r=new Date(n.getFullYear(),n.getMonth(),n.getDate()).getTime(),o=[],i=[],s=[];for(let c of e){let l=c.updatedAt;(l>=r?o:l>=r-7*_I?i:s).push(c)}return[[this.#i.threadsToday,o],[this.#i.threadsPreviousWeek,i],[this.#i.threadsOlder,s]].filter(([,c])=>c.length>0)}#R(){return this.#f===""?this.#a:this.#a.filter(e=>e.title.toLowerCase().includes(this.#f)||e.preview.toLowerCase().includes(this.#f))}#h(e,n){let r=document.createElement("div");r.className="drawer-row",r.setAttribute("part","drawer-row"),n&&(r.classList.add("drawer-row--child"),r.setAttribute("part","drawer-row drawer-row-child")),e.threadId===this.#l&&r.classList.add("drawer-row--active");let o=document.createElement("button");o.type="button",o.className="drawer-row-select",o.setAttribute("part","drawer-row-select");let i=document.createElement("span");i.className="drawer-row-title",i.setAttribute("part","drawer-row-title"),i.textContent=e.title;let s=document.createElement("span");s.className="drawer-row-time",s.setAttribute("part","drawer-row-time"),s.textContent=this.#u(e.updatedAt);let a=document.createElement("span");if(a.className="drawer-row-preview",a.setAttribute("part","drawer-row-preview"),a.textContent=e.preview,o.append(i),e.routine!==void 0){let h=document.createElement("span");h.className="drawer-row-routine",h.setAttribute("part","drawer-row-routine"),h.title=F(this.#i.routineBadge,{name:e.routine.name}),h.textContent=e.routine.name,o.append(h)}o.append(s,a),o.addEventListener("click",()=>{this.close(),this.#e.onSelect(e.threadId)});let c=document.createElement("button");c.type="button",c.className="drawer-row-rename",c.setAttribute("part","drawer-row-rename"),c.title=this.#i.rename,c.setAttribute("aria-label",this.#i.renameConversation),c.textContent="\u270E",c.addEventListener("click",()=>this.#k(r,e));let l=document.createElement("button");l.type="button",l.className="drawer-row-delete",l.setAttribute("part","drawer-row-delete"),l.title=this.#i.delete,l.setAttribute("aria-label",this.#i.deleteConversation),l.textContent="\u{1F5D1}",l.addEventListener("click",()=>this.#H(r,e));let d=document.createElement("div");return d.className="drawer-row-actions",d.setAttribute("part","drawer-row-actions"),d.append(c,l),r.append(o,d),r}#k(e,n){let r=document.createElement("input");r.type="text",r.className="drawer-rename-input",r.setAttribute("part","drawer-rename-input"),r.value=n.title;let o=!1,i=()=>{if(o)return;o=!0;let a=r.value.trim();a===""||a===n.title?this.#b():this.#e.onRename(n.threadId,a)},s=()=>{o||(o=!0,this.#b())};r.addEventListener("keydown",a=>{a.key==="Enter"?(a.preventDefault(),i()):a.key==="Escape"&&(a.preventDefault(),a.stopPropagation(),s())}),r.addEventListener("blur",()=>i()),e.replaceChildren(r),r.focus(),r.select()}#H(e,n){let r=document.createElement("div");r.className="drawer-confirm",r.setAttribute("part","drawer-confirm");let o=document.createElement("span");o.className="drawer-confirm-label",o.setAttribute("part","drawer-confirm-label"),o.textContent=this.#i.deletePrompt;let i=document.createElement("button");i.type="button",i.className="drawer-confirm-yes",i.setAttribute("part","drawer-confirm-yes"),i.textContent=this.#i.delete,i.addEventListener("click",()=>this.#e.onDelete(n.threadId));let s=document.createElement("button");s.type="button",s.className="drawer-confirm-no",s.setAttribute("part","drawer-confirm-no"),s.textContent=this.#i.cancel,s.addEventListener("click",()=>this.#b()),r.append(o,i,s),e.replaceChildren(r)}};var il=class{#e=null;open(){return this.#e=new AbortController,this.#e.signal}close(){this.#e=null}abort(){this.#e?.abort()}};function Gw(t){return t.href??`${t.label}\0${t.detail??""}`}function sl(t,e){t.textContent=e??"",t.hidden=e===void 0}var al=class{element=document.createElement("div");barElement=document.createElement("span");#e=document.createElement("span");#t=document.createElement("span");#n=document.createElement("span");#r=document.createElement("span");#o=document.createElement("span");#s=document.createElement("button");#i=null;#a=null;#l=ve;constructor(){this.element.className="place",this.element.setAttribute("part","place"),this.element.hidden=!0,this.#n.className="place-icon",this.#n.setAttribute("part","place-icon"),this.#r.className="place-label",this.#r.setAttribute("part","place-label"),this.#o.className="place-detail",this.#o.setAttribute("part","place-detail"),this.#s.type="button",this.#s.className="place-toggle",this.#s.setAttribute("part","place-toggle");let e=document.createElement("span");e.className="place-text",e.append(this.#r,this.#o),this.element.append(this.#n,e,this.#s),this.barElement.className="bar-place",this.barElement.setAttribute("part","bar-place"),this.barElement.hidden=!0,this.#e.className="place-label",this.#e.setAttribute("part","place-label"),this.#t.className="place-detail",this.#t.setAttribute("part","place-detail"),this.barElement.append(this.#e,this.#t)}mount(e,n){this.#l=n,this.#s.addEventListener("click",()=>this.#c(),{signal:e}),this.#d()}update(e){e!==null&&this.#a!==null&&this.#a!==Gw(e)&&(this.#a=null),this.#i=e,this.#d()}get withheld(){return this.#i!==null&&this.#a!==null}context(){let e=this.#i;if(e===null||this.#a!==null)return[];let n={label:e.label,...e.detail===void 0?{}:{detail:e.detail},...e.href===void 0?{}:{href:e.href}};return[{description:af,value:JSON.stringify(n)}]}#c(){let e=this.#i;e!==null&&(this.#a=this.#a===null?Gw(e):null,this.#d())}#d(){let e=this.#i;if(this.element.hidden=e===null,this.barElement.hidden=e===null,e===null)return;let n=this.#a===null;if(this.element.toggleAttribute("data-excluded",!n),this.barElement.toggleAttribute("data-excluded",!n),e.icon===void 0)this.#n.innerHTML=hf;else{let o=document.createElement("img");o.src=e.icon,o.alt="",this.#n.replaceChildren(o)}sl(this.#r,e.label),sl(this.#o,e.detail),sl(this.#e,e.label),sl(this.#t,e.detail),this.element.title=F(n?this.#l.placeShared:this.#l.placeWithheld,{label:e.label});let r=n?this.#l.placeStopSharing:this.#l.placeShareAgain;this.#s.innerHTML=n?pf:ff,this.#s.title=r,this.#s.setAttribute("aria-label",r)}};function TI(t){let e=t.replace(/[.*+?^${}()|[\]\\]/g,"\\$&").replace(/:[A-Za-z_][A-Za-z0-9_]*/g,"[^/]+");return new RegExp(`^${e}$`)}function Bw(t,e){let n=t.find(r=>TI(r.path).test(e));return n===void 0?null:{label:n.title??n.id,...n.group===void 0?{}:{detail:n.group},href:e}}function qt(t,e,n=at){let r=Math.min(n,Math.max(0,(e.width-t.width)/2)),o=Math.min(n,Math.max(0,(e.height-t.height)/2));return{left:Math.max(e.left+r,Math.min(t.left,e.left+e.width-t.width-r)),top:Math.max(e.top+o,Math.min(t.top,e.top+e.height-t.height-o))}}function jn(t,e,n=Bt){let r=t.right-t.left,o=t.bottom-t.top,i=Math.max(e.left+n,Math.min(t.left,e.left+e.width-n-r)),s=Math.max(e.top+n,Math.min(t.top,e.top+e.height-n-o));return{left:i,top:s,right:i+r,bottom:s+o}}var SI=4,kI=16,AI=64;function Vw(t,e){let n=!1,{signal:r}=e;t.addEventListener("click",s=>{!n||s.detail===0||(n=!1,s.stopPropagation(),s.preventDefault())},{capture:!0,signal:r}),t.addEventListener("pointerdown",s=>{if(n=!1,!e.enabled())return;let a=e.rect(),c=s.clientX,l=s.clientY,d=!1,h=f=>{let u=f.clientX-c,v=f.clientY-l;if(!d&&Math.hypot(u,v)<SI)return;d=!0,t.setAttribute("data-dragging","true");let E=qt({...a,left:a.left+u,top:a.top+v},e.viewport());e.apply(E.left,E.top)},m=f=>{if(window.removeEventListener("pointermove",h),window.removeEventListener("pointerup",m),window.removeEventListener("pointercancel",m),!d)return;t.removeAttribute("data-dragging"),n=!0;let u=qt({...a,left:a.left+(f.clientX-c),top:a.top+(f.clientY-l)},e.viewport());e.commit(u.left,u.top)};window.addEventListener("pointermove",h),window.addEventListener("pointerup",m),window.addEventListener("pointercancel",m)},{signal:r});let o=null,i=()=>{if(o===null)return;let{left:s,top:a}=o;o=null,e.commit(s,a)};t.addEventListener("keydown",s=>{if(!e.enabled())return;let a=s.shiftKey?AI:kI,c=e.rect(),l=null;if(s.key==="ArrowLeft"?l={left:c.left-a,top:c.top}:s.key==="ArrowRight"?l={left:c.left+a,top:c.top}:s.key==="ArrowUp"?l={left:c.left,top:c.top-a}:s.key==="ArrowDown"&&(l={left:c.left,top:c.top+a}),l===null)return;s.preventDefault();let d=qt({...c,...l},e.viewport());e.apply(d.left,d.top),o=d},{signal:r}),t.addEventListener("keyup",i,{signal:r}),t.addEventListener("blur",i,{signal:r})}function Wo(t,e,n,r){return{hostInset:Zw({top:n.y==="top"?t.top:null,right:n.x==="right"?r.width-t.right:null,bottom:n.y==="bottom"?r.height-t.bottom:null,left:n.x==="left"?t.left:null}),launcherInset:Zw({top:n.y==="top"?e.top-t.top:null,right:n.x==="right"?t.right-(e.left+e.width):null,bottom:n.y==="bottom"?t.bottom-(e.top+e.height):null,left:n.x==="left"?e.left-t.left:null})}}function Zw(t){let e=n=>n===null?"auto":`${Math.round(n)}px`;return`${e(t.top)} ${e(t.right)} ${e(t.bottom)} ${e(t.left)}`}function Uh(t,e,n,r,o=at){let i=n.left+n.width-t.left,s=t.left+t.width-n.left,a=n.top+n.height-t.top,c=t.top+t.height-n.top,l={x:i>=s?"left":"right",y:a>=c?"top":"bottom"},d=l.x==="left"?t.left:t.left+t.width-e.width,h=l.y==="top"?t.top:t.top+t.height-e.height,m=jn({left:d,top:h,right:d+e.width,bottom:h+e.height},n,o);return{corner:l,...Wo(m,t,l,r)}}var RI="button, a[href], input, select, textarea, [contenteditable]";function jw(t,e){t.addEventListener("pointerdown",n=>{if(n.button!==0||!e.enabled()||II(n,t))return;let r=e.rect(),o=n.clientX,i=n.clientY,s=!1,a=(d,h)=>{let m=d-o,f=h-i;return{left:r.left+m,top:r.top+f,right:r.right+m,bottom:r.bottom+f}},c=d=>{!s&&Math.hypot(d.clientX-o,d.clientY-i)<4||(s=!0,t.setAttribute("data-dragging","true"),e.apply(a(d.clientX,d.clientY),r))},l=d=>{window.removeEventListener("pointermove",c),window.removeEventListener("pointerup",l),window.removeEventListener("pointercancel",l),s&&(t.removeAttribute("data-dragging"),e.commit(a(d.clientX,d.clientY),r))};n.preventDefault(),window.addEventListener("pointermove",c),window.addEventListener("pointerup",l),window.addEventListener("pointercancel",l)})}function II(t,e){let n=t.composedPath();return n.slice(0,n.indexOf(e)).some(r=>r instanceof Element&&r.matches(RI))}function qw(t,e){let n=document.createElement("div");n.className=`resize-handle resize-handle--${ll(t)}`,n.setAttribute("part",`resize-handle resize-handle-${ll(t)}`),n.setAttribute("role","separator"),t.x===void 0?n.setAttribute("aria-orientation","horizontal"):t.y===void 0&&n.setAttribute("aria-orientation","vertical"),n.setAttribute("aria-label",e.label),n.tabIndex=0,n.addEventListener("pointerdown",i=>{let s=e.axis();if(s==="none"||!Ww(t,s))return;let a=e.rect(),c=d=>{e.apply(Hh(t,s,a,d.clientX,d.clientY))},l=d=>{window.removeEventListener("pointermove",c),window.removeEventListener("pointerup",l),n.removeAttribute("data-dragging"),e.commit(Hh(t,s,a,d.clientX,d.clientY))};n.setAttribute("data-dragging","true"),window.addEventListener("pointermove",c),window.addEventListener("pointerup",l),i.preventDefault()});let r=null,o=()=>{if(r===null)return;let i=r;r=null,e.commit(i)};return n.addEventListener("keydown",i=>{let s=e.axis();if(s==="none"||!Ww(t,s))return;let a=i.shiftKey?64:16,c=e.rect(),l=CI[i.key];if(l===void 0||l.x!==0&&t.x===void 0||l.y!==0&&t.y===void 0)return;i.preventDefault();let d=(t.x==="left"?c.left:c.right)+l.x*a,h=(t.y==="top"?c.top:c.bottom)+l.y*a,m=Hh(t,s,c,d,h);e.apply(m),r=m}),n.addEventListener("keyup",o),n.addEventListener("blur",o),n}var CI={ArrowLeft:{x:-1,y:0},ArrowRight:{x:1,y:0},ArrowUp:{x:0,y:-1},ArrowDown:{x:0,y:1}};function ll(t){return[t.y,t.x].filter(e=>e!==void 0).join("-")}function Ww(t,e){return e==="both"||t.x!==void 0}function Hh(t,e,n,r,o){let i=t.x==="left"?Math.min(r,n.right-280):n.left,s=t.x==="right"?Math.max(r,n.left+280):n.right,a=e==="both",c=a&&t.y==="top"?Math.min(o,n.bottom-240):n.top,l=a&&t.y==="bottom"?Math.max(o,n.top+240):n.bottom;return{left:i,top:c,right:s,bottom:l}}var cl={collapseTo:"launcher",launcherDraggable:!0,panelMovable:!0,resizeAxis:"both",startsCollapsed:!0,maximizes:"both"},Yw={collapseTo:"launcher",launcherDraggable:!1,panelMovable:!1,resizeAxis:"width",startsCollapsed:!1,maximizes:"width"},NI=new Map([[null,cl],["",cl],["floating",cl],["bottom-left",cl],["side",Yw],["sidebar",{...Yw,collapseTo:"rail"}],["full",{collapseTo:"launcher",launcherDraggable:!1,panelMovable:!1,resizeAxis:"none",startsCollapsed:!1,maximizes:null}],["page",{collapseTo:null,launcherDraggable:!1,panelMovable:!1,resizeAxis:"none",startsCollapsed:!1,maximizes:null}],["embedded",{collapseTo:"header",launcherDraggable:!1,panelMovable:!1,resizeAxis:"both",startsCollapsed:!1,maximizes:null}]]),OI={collapseTo:"launcher",launcherDraggable:!1,panelMovable:!1,resizeAxis:"both",startsCollapsed:!1,maximizes:null};function qo(t,e=null){let n=NI.get(t)??OI;return e==="bar"&&n.collapseTo==="launcher"?{...n,collapseTo:"bar",launcherDraggable:!1}:e==="none"&&n.collapseTo!==null?{...n,collapseTo:"none",launcherDraggable:!1}:n}var Fh=`${gt}:size`,Wn="--_drag-width",qn="--_drag-height",Gh="--_dock-bottom",Kw="--_dock-right",Xw="--_dock-top",Bh=`${gt}:launcher`,Vh=`${gt}:dock`;function Jw(t){if(typeof t!="object"||t===null)return null;let{left:e,top:n}=t;return typeof e=="number"&&typeof n=="number"?{left:e,top:n}:null}function Dr(t,e){return t.width>=e.width-1&&t.height>=e.height-1}function Yo(t,e){let n=Number.parseFloat(t.getPropertyValue(e));return Number.isFinite(n)?n:0}function dl(t,e,n){return t.left<e.left-.5||t.top<e.top-.5||t.right>n.width+.5||t.bottom>n.height+.5}function Qw(t,e){return{left:t.left,top:t.top,right:t.left+(e.right-e.left),bottom:t.top+(e.bottom-e.top)}}function ul(t,e,n){let r=o=>`${Math.round(o)}px`;return[t.y==="top"?r(e.top):"auto",t.x==="right"?r(n.width-e.right):"auto",t.y==="bottom"?r(n.height-e.bottom):"auto",t.x==="left"?r(e.left):"auto"].join(" ")}var MI=[{y:"top"},{y:"bottom"},{x:"left"},{x:"right"},{x:"left",y:"top"},{x:"right",y:"top"},{x:"left",y:"bottom"},{x:"right",y:"bottom"}],hl=class{#e;constructor(e){this.#e=e}enablePanelDrag(e){this.#p=e,jw(e,{enabled:()=>!this.#e.collapsed()&&this.#_e(),rect:()=>this.#e.element.getBoundingClientRect(),apply:(n,r)=>this.#Le(n,r),commit:(n,r)=>this.#ze(n,r)})}enableLauncherDrag(e){Vw(this.#e.launcher,{signal:e,enabled:()=>this.#e.collapsed()&&this.#y(),rect:()=>this.#K(),viewport:()=>this.#_(),apply:(n,r)=>this.#w(n,r),commit:(n,r)=>this.#V(n,r)})}mountResizeGrips(e){this.#b=!1;for(let n of MI){let r=qw(n,{axis:()=>this.#h(),rect:()=>this.#e.element.getBoundingClientRect(),apply:o=>{this.#b=!0,this.#me(n,o)},commit:o=>{this.#b=!1,this.#Ze(n,o)},label:this.#e.strings().resizePanel});r.tabIndex=-1,r.setAttribute("aria-hidden","true"),this.#T.set(ll(n),r),e.appendChild(r)}this.#Se()}restoreSize(){this.#e.element.style.removeProperty(Wn),this.#e.element.style.removeProperty(qn),this.#z(this.#ge())}switchPlacement(e){let n=this.#e.element,r=n.getBoundingClientRect();n.style.removeProperty(Wn),n.style.removeProperty(qn),this.#e.connected()&&(this.#z(this.#ge()),qo(e,n.getAttribute("collapse-to")).launcherDraggable&&this.#n(r))}resetSize(){let e=this.#e.element.getBoundingClientRect();this.#e.element.style.removeProperty(Wn),this.#e.element.style.removeProperty(qn),this.#ke(this.#ie(),null),this.#I()?(this.#l!==null&&this.#e.element.style.removeProperty("--ag-ui-inset"),this.#l=null,this.#ne(null),this.#te()):this.#n(e),this.syncResizeAnchor()}enterMaximized(){this.#t()}leaveMaximized(){this.restoreSize(),this.#t()}#t(){this.#I()?this.#te():this.restoreLauncherPosition(),this.syncResizeAnchor()}#n(e){let n=this.#e.element,r=n.getBoundingClientRect(),o=this.#s??this.#Te(),i=getComputedStyle(n);o?.panel===void 0||!this.#y()||i.getPropertyValue("--ag-ui-width")!==""||i.getPropertyValue("--ag-ui-height")!==""||this.#Z({...o,panel:{left:o.panel.left+r.left-e.left,top:o.panel.top+r.top-e.top}})}probe=document.createElement("div");#r=null;#o=null;#s=null;#i=null;#a=null;#l=null;#c=Number.POSITIVE_INFINITY;#d=Number.NEGATIVE_INFINITY;#f="above";#g=0;#v=null;#u=null;#m={x:"right",y:"bottom"};#p=null;#b=!1;#T=new Map;#x(e){let n=this.#I()&&this.#F()?this.#P():this.#_(),r=n.left+at,o=n.top+at,i=n.left+n.width-at,s=n.top+n.height-at;return{left:Math.min(Math.max(e.left,r),e.right),top:Math.min(Math.max(e.top,o),e.bottom),right:Math.max(Math.min(e.right,i),e.left),bottom:Math.max(Math.min(e.bottom,s),e.top)}}dragging(){return this.#b||this.#e.launcher.hasAttribute("data-dragging")||this.#e.root.querySelector(".header[data-dragging], .resize-handle[data-dragging]")!==null}describeSurface(){let e=this.#e.element.getBoundingClientRect(),n=this.#_(),r=Dr(e,this.#ce());return{placement:this.#e.element.getAttribute("placement"),collapseTo:this.#N().collapseTo,collapsed:this.#e.collapsed(),collapsible:this.#e.collapsible(),maximized:this.#e.element.hasAttribute("maximized"),movable:this.#F()&&!r,draggable:this.#e.element.getAttribute("data-launcher-drag")!=="false",fullBleed:r,box:{left:Math.round(e.left),top:Math.round(e.top),width:Math.round(e.width),height:Math.round(e.height)},viewport:{left:Math.round(n.left),top:Math.round(n.top),width:Math.round(n.width),height:Math.round(n.height)}}}moveTo(e,n={}){if(!this.#F())return!1;let r=n.announce===!0?this.#E():null,o=this.#_(),i=this.#e.element.getBoundingClientRect();if(Dr(i,this.#ce()))return!1;let[s,a]=e.split("-"),c=this.#I(),l=c?this.#P():o,d=l.left+Bt,h=l.top+Bt,m=a==="left"?d:Math.max(d,l.left+l.width-Bt-i.width),f=s==="top"?h:Math.max(h,l.top+l.height-Bt-i.height),u={left:m,top:f,right:m+i.width,bottom:f+i.height};if(c)return this.#l={left:m,top:f},this.#pe(u),this.#ne(this.#l),r!==null&&this.#e.announceSurfaceChange(this.#e.strings().chatMoved,r),!0;let v=this.#e.launcher.offsetWidth,E=this.#e.launcher.offsetHeight;return this.#de(u,{left:a==="left"?u.left:u.right-v,top:s==="top"?u.top:u.bottom-E,width:v,height:E}),this.#re(),r!==null&&this.#e.announceSurfaceChange(this.#e.strings().chatMoved,r),!0}#E(){let e=this.#e.element.style.getPropertyValue("--ag-ui-inset"),n=this.#e.element.style.getPropertyValue("--ag-ui-launcher-inset"),r=this.#e.element.getAttribute("data-expand-corner"),o=this.#r,i=this.#o,s=this.#l??this.#Pe(),a=this.#u,c=this.#i,l=this.#a,d=this.#s??this.#Te(),h=this.#R();return()=>{this.#l=s,this.#ne(s),d===null?(this.#s=null,this.#e.clearPreference(Bh)):this.#Z(d),h===this.#R()?(this.#Y("--ag-ui-inset",e),this.#Y("--ag-ui-launcher-inset",n),r===null?this.#e.element.removeAttribute("data-expand-corner"):this.#e.element.setAttribute("data-expand-corner",r),this.#r=o,this.#o=i,this.#u=a,this.#i=c,this.#a=l):this.#$e(),this.restoreLauncherPosition(),this.syncResizeAnchor()}}#R(){return this.#I()?"dock":this.#N().launcherDraggable?"corner":"placement"}#h(){return this.#e.element.hasAttribute("maximized")?"none":this.#N().resizeAxis}#k(){let e=this.#e.element.getBoundingClientRect(),n=this.#e.element.style.getPropertyValue(Wn),r=this.#e.element.style.getPropertyValue(qn),o=this.#H(e,-1),i=o.x===null||o.y===null?this.#H(e,1):o;return this.#Y(Wn,n),this.#Y(qn,r),{x:o.x??i.x??"right",y:o.y??i.y??"bottom"}}#H(e,n){this.#z({width:e.width+n,height:e.height+n});let r=this.#e.element.getBoundingClientRect(),o=(i,s)=>Math.abs(i-s)>=.5;return{x:o(r.width,e.width)?o(r.left,e.left)?"right":"left":null,y:o(r.height,e.height)?o(r.top,e.top)?"bottom":"top":null}}syncResizeAnchor(){if(!this.#e.connected())return;let e=this.#u??this.#k();this.#m=e,this.#e.element.setAttribute("data-resize-anchor",`${e.y}-${e.x}`),this.#Se(),this.#ee()}#ee(){this.#p?.toggleAttribute("data-fills-screen",this.#G());let e=this.#e.element;this.#he()!==e.hasAttribute("data-fills-window")&&requestAnimationFrame(()=>{let n=this.#he();n!==e.hasAttribute("data-fills-window")&&(this.#v=n?{room:this.#_().height,window:this.#S().height,bar:this.#g}:null,e.toggleAttribute("data-fills-window",n))})}#he(){return this.#G()&&this.#N().panelMovable}#Y(e,n){if(n===""){this.#e.element.style.removeProperty(e);return}this.#e.element.style.setProperty(e,n)}#z(e){let n=this.#h();n!=="none"&&(e.width!==void 0&&this.#e.element.style.setProperty(Wn,`${e.width}px`),e.height!==void 0&&n==="both"&&this.#e.element.style.setProperty(qn,`${e.height}px`))}releaseOwnedAxes(){let e=this.#h();e!=="both"&&this.#e.element.style.removeProperty(qn),e==="none"&&this.#e.element.style.removeProperty(Wn)}#N(){let e=this.#e.element;return qo(e.getAttribute("placement"),e.getAttribute("collapse-to"))}#I(){let e=this.#N().collapseTo;return e==="bar"||e==="none"}syncDock(e,n){let r=this.#e.element,o=this.#N().collapseTo,i=o==="bar"?e.offsetHeight:0,s=o==="none"&&n!==null?n.getBoundingClientRect():null,a=s===null?null:this.#et(s);return o==="bar"?r.style.setProperty(Gh,`${i}px`):s!==null&&a==="above"?r.style.setProperty(Gh,`${Math.max(0,this.#S().height-s.top)}px`):r.style.removeProperty(Gh),s!==null&&a==="below"?r.style.setProperty(Xw,`${Math.max(0,s.bottom)}px`):r.style.removeProperty(Xw),s!==null?r.style.setProperty(Kw,`${this.#le(s)}px`):r.style.removeProperty(Kw),a===null?r.removeAttribute("data-dock-anchored"):r.setAttribute("data-dock-anchored",a),this.#g=i,o!=="bar"&&(this.#v=null),this.#c=o==="bar"&&i>0?e.getBoundingClientRect().top:s!==null&&a==="above"?s.top:Number.POSITIVE_INFINITY,this.#d=s!==null&&a==="below"?s.bottom:Number.NEGATIVE_INFINITY,this.#te(),i}#P(){let e=this.#_(),n=Math.max(e.top,this.#d),r=Math.min(e.top+e.height,this.#c);return{...e,top:n,height:Math.max(0,r-n)}}#et(e){let n=this.#e.element.getAttribute("anchor-side");if(n==="above"||n==="below")this.#f=n;else if(!this.dragging()){let r=this.#_(),o=r.top+r.height-e.bottom;this.#f=o>e.top-r.top?"below":"above"}return this.#f}#le(e){let n=this.#S(),r=n.width-this.#_().left-Bt-this.#e.element.offsetWidth,o=Bt+Yo(getComputedStyle(this.probe),"padding-right");return Math.max(o,Math.min(n.width-e.right,r))}#te(){if(!this.#I()||!this.#N().panelMovable||this.dragging())return;let e=this.#e.element,n=this.#F()?this.#l??this.#Pe():null;if(n===null){if(this.#l!==null){if(!(e.style.getPropertyValue("--ag-ui-inset")===this.#a)&&!this.#fe())return;this.#l=null,e.style.removeProperty("--ag-ui-inset")}this.#De();return}this.#l=n,e.style.removeProperty("--ag-ui-inset");let r=e.getBoundingClientRect(),o=this.#_();if(Dr(r,this.#ce())){dl(r,o,this.#S())&&this.#oe(r);return}this.syncResizeAnchor(),this.#pe(jn({left:n.left,top:n.top,right:n.left+r.width,bottom:n.top+r.height},this.#P(),at))}#pe(e){this.#e.element.style.setProperty("--ag-ui-inset",ul(this.#m,e,this.#S()))}#ne(e){if(e===null){this.#e.clearPreference(Vh);return}this.#e.writePreference(Vh,JSON.stringify({left:e.left,top:e.top}))}#Pe(){let e=this.#e.readPreference(Vh);if(e===null)return null;try{return Jw(JSON.parse(e))}catch{return null}}#F(){return this.#e.element.getAttribute("data-launcher-drag")!=="false"&&this.#N().panelMovable}#_e(){return this.#F()&&!this.#G()}#G(){return Dr(this.#e.element.getBoundingClientRect(),this.#ce())}#ce(){let e=this.#_(),n=this.#v;return n!==null&&n.window===this.#S().height&&Math.abs(e.height-n.room-n.bar)<=1?{...e,height:n.room}:e}#fe(){let e=this.#S();return dl(this.#e.element.getBoundingClientRect(),{left:0,top:0,...e},e)}#y(){return this.#e.element.getAttribute("data-launcher-drag")!=="false"&&this.#N().launcherDraggable}#_(){let e=window.visualViewport,n=e?.width??window.innerWidth,r=e?.height??window.innerHeight,o=getComputedStyle(this.probe),i=Yo(o,"padding-left"),s=Yo(o,"padding-top");return{left:i,top:s,width:Math.max(0,n-i-Yo(o,"padding-right")),height:Math.max(0,r-s-Yo(o,"padding-bottom"))}}#S(){let e=document.documentElement;return{width:e.clientWidth||window.innerWidth,height:e.clientHeight||window.innerHeight}}publishVisualViewport(){let e=window.visualViewport;if(e==null)return;let n=this.#S().height;if(Math.abs(e.height-n)<1){this.#e.element.style.removeProperty("--ag-ui-visual-viewport-height"),this.#e.element.style.removeProperty("--ag-ui-visual-viewport-inset-bottom"),this.#e.element.style.removeProperty("--ag-ui-visual-viewport-inset-top");return}this.#e.element.style.setProperty("--ag-ui-visual-viewport-height",`${Math.round(e.height)}px`);let r=n-e.height-e.offsetTop;this.#e.element.style.setProperty("--ag-ui-visual-viewport-inset-bottom",`${Math.max(0,Math.round(r))}px`),this.#e.element.style.setProperty("--ag-ui-visual-viewport-inset-top",`${Math.max(0,Math.round(e.offsetTop))}px`)}#K(){let e=this.#e.launcher.offsetWidth,n=this.#e.launcher.offsetHeight,r=this.#r;if(r!==null)return{left:r.left,top:r.top,width:e,height:n};let o=this.#e.launcher.getBoundingClientRect();return{left:o.left+o.width/2-e/2,top:o.top+o.height/2-n/2,width:e,height:n}}#D(e){this.#r=e,this.#o=null;let n=this.#e.element.getBoundingClientRect(),r=Uh(this.#K(),{width:n.width,height:n.height},this.#_(),this.#S());this.#e.element.style.setProperty("--ag-ui-inset",r.hostInset),this.#e.element.style.setProperty("--ag-ui-launcher-inset",r.launcherInset),this.#u=r.corner,this.#e.element.setAttribute("data-expand-corner",`${r.corner.y}-${r.corner.x}`),this.syncResizeAnchor()}#w(e,n){this.#s={left:e,top:n},this.#D({left:e,top:n})}#V(e,n){this.#w(e,n),this.#re()}#Le(e,n){if(this.#I()){let c=jn(e,this.#P(),at);return this.#l={left:c.left,top:c.top},this.#pe(c),{held:c,launcher:null}}if(!this.#y())return{held:e,launcher:null};if(this.#r===null){let c=this.#K();this.#r={left:c.left,top:c.top}}let r=this.#r,o=jn(e,this.#_(),at),i=this.#u??this.#m;this.#e.element.style.setProperty("--ag-ui-inset",ul(i,o,this.#S())),this.#o={left:o.left,top:o.top};let s={...this.#K(),left:r.left+(o.left-n.left),top:r.top+(o.top-n.top)},a={...s,...qt(s,this.#_())};return this.#e.element.style.setProperty("--ag-ui-launcher-inset",Wo(o,a,i,this.#S()).launcherInset),{held:o,launcher:a}}#ze(e,n){let{held:r,launcher:o}=this.#Le(e,n);if(this.#I()){this.#ne({left:r.left,top:r.top});return}o!==null&&(this.#de(r,o),this.#re())}#de(e,n){let r=this.#_(),o=this.#S(),i={width:e.right-e.left,height:e.bottom-e.top},{corner:s}=Uh(n,i,r,o),a=Wo(e,n,s,o);this.#e.element.style.setProperty("--ag-ui-inset",a.hostInset),this.#e.element.style.setProperty("--ag-ui-launcher-inset",a.launcherInset),this.#r={left:n.left,top:n.top},this.#o={left:e.left,top:e.top},this.#u=s,this.#e.element.setAttribute("data-expand-corner",`${s.y}-${s.x}`),this.syncResizeAnchor()}#Ve(e){let n=this.#e.element.getBoundingClientRect(),r=jn({left:e.left,top:e.top,right:e.left+n.width,bottom:e.top+n.height},this.#_(),at),o=this.#K(),i={...o,left:o.left+(r.left-e.left),top:o.top+(r.top-e.top)};this.#de(r,{...i,...qt(i,this.#_())})}#re(){let e=this.#r;if(e===null)return;let n=this.#o;this.#Z(n===null?e:{...e,panel:n})}#Z(e){this.#s=e,this.#e.writePreference(Bh,JSON.stringify(e))}restoreLauncherPosition(){this.#ue(!0),this.#ee()}settleLauncherPosition(){this.#ue(!1),this.#ee()}#ue(e){if(this.#I()){this.#te();return}if(!this.#N().launcherDraggable)return;let n=this.#y();if(!n&&this.#r!==null){if(!e&&!this.#fe())return;this.releaseLauncherPosition()}let r=n?this.#s??this.#Te():null;if(r===null){this.#De();return}if(this.#X(r))return;if(r.panel!==void 0){this.#r={left:r.left,top:r.top},this.#Ve(r.panel);return}let o=this.#K();this.#D(qt({...o,left:r.left,top:r.top},this.#_()))}#X(e){let n=this.#e.element,r=this.#_();if(!Dr(n.getBoundingClientRect(),r))return!1;n.style.removeProperty("--ag-ui-inset");let o=n.getBoundingClientRect(),i=dl(o,r,this.#S()),s=i?Qw(r,o):o,a={...this.#K(),left:e.left,top:e.top};return this.#de(s,{...a,...qt(a,r)}),i||n.style.removeProperty("--ag-ui-inset"),!0}#De(){let e=this.#e.element,n=e.style.getPropertyValue("--ag-ui-inset"),r=this.#_();if(!Dr(e.getBoundingClientRect(),this.#ce())){(n===""||n===this.#a)&&(this.#Y("--ag-ui-inset",this.#i??""),this.syncResizeAnchor()),this.#a=null;return}(n===this.#i||n===this.#a)&&e.style.removeProperty("--ag-ui-inset");let o=e.getBoundingClientRect(),i=this.#S();e.style.getPropertyValue("--ag-ui-inset")===""&&dl(o,r,i)&&this.#oe(o)}#oe(e){this.#a=ul({x:"left",y:"top"},Qw(this.#_(),e),this.#S()),this.#e.element.style.setProperty("--ag-ui-inset",this.#a),this.syncResizeAnchor()}#Te(){let e=this.#e.readPreference(Bh);if(e===null)return null;try{let n=JSON.parse(e);if(typeof n!="object"||n===null)return null;let{left:r,top:o,panel:i}=n;if(typeof r!="number"||typeof o!="number")return null;let s=Jw(i);return s===null?{left:r,top:o}:{left:r,top:o,panel:s}}catch{return null}}releaseLauncherPosition(){this.#l!==null&&!(this.#I()&&this.#F())&&(this.#l=null,this.#e.element.style.removeProperty("--ag-ui-inset")),!this.#y()&&this.#$e()}#$e(){this.#r=null,this.#o=null,this.#u=null,this.#i=null,this.#a=null,this.#e.element.style.removeProperty("--ag-ui-inset"),this.#e.element.style.removeProperty("--ag-ui-launcher-inset"),this.#e.element.removeAttribute("data-expand-corner")}#me(e,n){if(n=this.#x(n),this.#I()&&this.#l===null){let r=this.#e.element.getBoundingClientRect();return n={left:e.x===this.#m.x?r.left:n.left,right:e.x===this.#m.x?r.right:n.right,top:e.y===this.#m.y?r.top:n.top,bottom:e.y===this.#m.y?r.bottom:n.bottom},this.#z({width:n.right-n.left,height:n.bottom-n.top}),n}if(this.#z({width:n.right-n.left,height:n.bottom-n.top}),this.#I()&&(this.#l={left:n.left,top:n.top}),e.x===this.#m.x||e.y===this.#m.y){let r=this.#m,o=ul(r,n,this.#S());if(this.#e.element.style.setProperty("--ag-ui-inset",o),this.#i=this.#r===null&&!this.#I()?o:null,this.#r!==null){let i=this.#e.launcher.offsetWidth;this.#r={left:r.x==="left"?n.left:n.right-i,top:r.y==="top"?n.top:n.bottom-i}}}if(this.#o!==null&&!this.#I()){let r=this.#e.element.getBoundingClientRect();this.#o={left:r.left,top:r.top}}return n}#Ze(e,n){let r=this.#me(e,n);this.#e.element.style.getPropertyValue("--ag-ui-inset")===this.#a&&(this.#i=this.#a,this.#a=null),this.#C({width:r.right-r.left,height:r.bottom-r.top}),this.#re(),this.#l!==null&&this.#ne(this.#l),this.syncResizeAnchor()}#Se(){let e=`${this.#m.y==="top"?"bottom":"top"}-${this.#m.x==="left"?"right":"left"}`;for(let[n,r]of this.#T){let o=n===e;r.tabIndex=o?0:-1,o?r.removeAttribute("aria-hidden"):r.setAttribute("aria-hidden","true")}}#ie(){let e=this.#e.element.getAttribute("placement");return e===null||e===""?"floating":e}#C(e){this.#ke(this.#ie(),{...this.#ge(),...e})}#ke(e,n){let r={...this.#B()};if(n===null?delete r[e]:r[e]=n,Object.keys(r).length===0){this.#e.clearPreference(Fh);return}let o={v:2,placements:r};this.#e.writePreference(Fh,JSON.stringify(o))}#ge(){return this.#B()[this.#ie()]??{}}#B(){let e=this.#e.readPreference(Fh);if(e===null)return{};try{let n=JSON.parse(e);if(typeof n!="object"||n===null)return{};let r=n;return r.v===2&&typeof r.placements=="object"&&r.placements!==null?r.placements:{floating:n}}catch{return{}}}};var pl=class{element;#e;#t=null;constructor(e){this.element=document.createElement("div"),this.element.className="parent-breadcrumb",this.element.setAttribute("part","parent-breadcrumb"),this.element.hidden=!0,this.#e=document.createElement("button"),this.#e.type="button",this.#e.className="parent-breadcrumb-link",this.#e.setAttribute("part","parent-breadcrumb-link"),this.#e.addEventListener("click",()=>{this.#t!==null&&e(this.#t)}),this.element.append(this.#e)}show(e,n,r){let o=e.find(s=>s.threadId===n)?.parent??null;if(this.#t=o,this.element.hidden=o===null,o===null){this.#e.textContent="";return}let i=e.find(s=>s.threadId===o.threadId)?.title;this.#e.textContent=i===void 0?r.parentThreadUnlisted:F(r.parentThread,{title:i})}};var fl=class{element;receipt;constructor(e,n){this.receipt=e,this.element=document.createElement("button"),this.element.type="button",this.element.className="child-session-link",this.element.setAttribute("part","child-session-link"),this.element.setAttribute("data-thread-id",e.threadId),this.element.setAttribute("data-agent-id",e.agentId),this.element.addEventListener("click",()=>n(this.receipt))}update(e,n){let r=n==="waiting";n===null?this.element.removeAttribute("data-status"):this.element.setAttribute("data-status",n),this.element.textContent=F(r?e.childSessionNeedsYou:e.childSessionOpen,{agent:this.receipt.agentId})}};var PI="start_session";function ex(t,e){if(t!==PI)return null;let n;try{n=JSON.parse(e)}catch{return null}if(typeof n!="object"||n===null)return null;let{agent_id:r,thread_id:o}=n;return typeof r!="string"||typeof o!="string"||o===""?null:{agentId:r,threadId:o}}var ml=class{#e;#t;#n=new Set;#r=[];#o=new Set;constructor(e){this.#e=e,this.#t=new pl(n=>this.#i(n.scope,n.threadId))}get breadcrumb(){return this.#t.element}attach(e,n){let r=ex(e.element.getAttribute("data-tool-name"),n);if(r===null)return;let o=new fl(r,i=>this.#i(i.agentId,i.threadId));this.#s(o),e.subagentSlot.appendChild(o.element),this.#n.add(o)}listed(e){this.#r=e.map(n=>n.parent!==void 0&&this.#o.has(n.parent.threadId)?LI(n):n),this.relocalize()}status(e){return this.#r.find(n=>n.threadId===e)?.status??null}deleted(e){this.#o.add(e),this.listed(this.#r)}shown(){this.#t.show(this.#r,this.#e.activeThread(),this.#e.strings())}relocalize(){let e=this.#e.transcript();for(let n of this.#n)e.contains(n.element)?this.#s(n):this.#n.delete(n);this.shown()}#s(e){let n=this.#r.find(r=>r.threadId===e.receipt.threadId);e.update(this.#e.strings(),n?.status??null)}#i(e,n){let r=new CustomEvent(ur,{detail:{agentId:e,threadId:n},bubbles:!0,composed:!0,cancelable:!0});this.#e.element.dispatchEvent(r)&&this.#e.open(n)}};function LI(t){let{parent:e,...n}=t;return n}var gl=class{region=document.createElement("div");#e=null;mount(){this.region.className="sr-only",this.region.setAttribute("role","status"),this.region.setAttribute("aria-live","polite"),this.region.setAttribute("aria-atomic","true")}announce(e){this.#e!==null&&clearTimeout(this.#e),this.region.textContent=e,this.#e=setTimeout(()=>{this.#e=null,this.region.textContent=""},Df)}dispose(){this.#e!==null&&(clearTimeout(this.#e),this.#e=null)}};function $r(t,e,n,r){let o=document.createElement("div");o.className=`run-notice run-notice--${n}`,o.setAttribute("part",`run-notice run-notice-${n}`),o.setAttribute("role","status");let i=document.createElement("span");i.className="run-notice-icon",i.setAttribute("part","run-notice-icon"),i.textContent=t,i.setAttribute("aria-hidden","true");let s=document.createElement("span");if(s.className="run-notice-text",s.setAttribute("part","run-notice-text"),s.textContent=e,o.append(i,s),r!==void 0){let a=document.createElement("button");a.type="button",a.className="run-notice-undo",a.setAttribute("part","run-notice-undo"),a.textContent=r.label,a.addEventListener("click",()=>{a.disabled=!0,r.onActivate()}),o.append(a)}return o}var vl=class{element;get agent(){return this.#o}#e;#t;#n;#r=new Map;#o=null;constructor(e=ve){this.element=document.createElement("div"),this.element.className="subagent",this.element.setAttribute("part","subagent"),this.#e=document.createElement("button"),this.#e.type="button",this.#e.className="subagent-row",this.#e.setAttribute("part","subagent-row"),this.#e.setAttribute("aria-expanded","false"),this.#e.disabled=!0;let n=document.createElement("span");n.className="subagent-icon",n.setAttribute("part","subagent-icon"),n.setAttribute("aria-hidden","true"),this.#t=document.createElement("span"),this.#t.className="subagent-status",this.#t.setAttribute("part","subagent-status"),this.#t.textContent=e.subAgentWorking,this.#e.append(n,this.#t),this.#n=document.createElement("div"),this.#n.className="subagent-steps",this.#n.setAttribute("part","subagent-steps"),this.#n.setAttribute("role","list"),this.#n.setAttribute("aria-label",e.subAgentSteps),this.#n.hidden=!0,this.#e.addEventListener("click",()=>{this.#a(this.#e.getAttribute("aria-expanded")!=="true")}),this.element.append(this.#e,this.#n)}report(e){this.element.setAttribute("data-phase",e.phase),e.agent!==null&&(this.#o=e.agent,this.element.setAttribute("data-agent",e.agent)),e.status!==null&&(this.#t.textContent=e.status),e.tool!==null&&this.#s(e.tool)}#s(e){let n=this.#r.get(e.toolCallId)??this.#i(e);if(e.ok===null){n.removeAttribute("data-ok");return}n.setAttribute("data-ok",String(e.ok))}#i(e){let n=document.createElement("div");n.className="subagent-step",n.setAttribute("part","subagent-step"),n.setAttribute("role","listitem"),n.setAttribute("data-tool-call-id",e.toolCallId);let r=document.createElement("span");r.className="subagent-step-icon",r.setAttribute("part","subagent-step-icon"),r.setAttribute("aria-hidden","true");let o=document.createElement("span");return o.className="subagent-step-name",o.setAttribute("part","subagent-step-name"),o.textContent=e.name,n.append(r,o),this.#n.appendChild(n),this.#r.set(e.toolCallId,n),this.#e.disabled=!1,n}#a(e){this.#n.hidden=!e,this.#e.setAttribute("aria-expanded",String(e))}};var zI=Object.values(It);function tx(t){return typeof t!="object"||t===null||Array.isArray(t)?null:t}function Ko(t){return typeof t=="string"&&t!==""?t:null}function DI(t){let e=tx(t);if(e===null)return null;let n=Ko(e.toolCallId),r=Ko(e.name),o=e.ok;return n===null||r===null||o!==null&&typeof o!="boolean"?null:{toolCallId:n,name:r,ok:o}}function nx(t){let e=tx(t);if(e===null)return null;let n=Ko(e.delegationId),r=e.phase;return n===null||typeof r!="string"||!zI.includes(r)?null:{delegationId:n,phase:r,agent:Ko(e.agent),status:Ko(e.status),tool:DI(e.tool)}}var bl=class{#e;#t=new Map;#n=new Map;constructor(e){this.#e=e}report(e){let n=nx(e);n!==null&&this.#s(n)}start(e,n,r){r!==null&&(this.#n.set(e,r),this.#s({delegationId:r,agent:n===""?null:n,phase:It.STARTED,status:F(this.#e.strings().subAgentDelegatedTo,{agent:n}),tool:null}))}finish(e){this.#r(e,It.FINISHED,null)}fail(e,n){this.#r(e,It.FAILED,n===""?this.#e.strings().subAgentFailed:n)}clear(){this.#t.clear(),this.#n.clear()}#r(e,n,r){let o=this.#n.get(e);if(o===void 0)return;let i=this.#t.get(o)?.agent??null;this.#s({delegationId:o,agent:i,phase:n,status:r===null?this.#o(i):r,tool:null})}#o(e){let n=this.#e.strings();return e===null?n.subAgentWorking:F(n.subAgentFinished,{agent:e})}#s(e){let n=this.#e.card(e.delegationId);if(n===void 0)return;let r=this.#t.get(e.delegationId);r===void 0&&(r=new vl(this.#e.strings()),this.#t.set(e.delegationId,r),n.subagentSlot.appendChild(r.element)),r.report(e),this.#e.follow()}};function $I(t){return{[Q.PENDING]:t.toolRunning,[Q.DEFERRED]:t.toolDeferred,[Q.DONE]:t.toolDone,[Q.ERROR]:t.toolError,[Q.DECLINED]:t.toolDeclined,[Q.INTERRUPTED]:t.toolInterrupted}}function UI(t){return{[Q.DONE]:t.resultLabel,[Q.ERROR]:t.errorLabel,[Q.DECLINED]:t.declinedLabel,[Q.INTERRUPTED]:t.interruptedLabel}}function HI(t){return new Map([["reviewer",t.answeredByReviewer],["routine",t.answeredByRoutine]])}function FI(t){try{return JSON.stringify(JSON.parse(t),null,2)}catch{return t}}var Xo=class{element;approvalSlot;subagentSlot;#e;#t;#n;#r;#o;#s;#i;args;#a;#l;#c=!1;constructor(e,n,r,o=ve,i={}){this.#i=o,this.args=n,this.#a=e,this.#l=i.formatPayload??null,this.element=document.createElement("div"),this.element.className="tool-call",this.element.setAttribute("data-tool-name",e),this.element.setAttribute("data-expanded","false");let s=document.createElement("div");s.className="tool-call-head",s.setAttribute("part","tool-card-head");let a=document.createElement("span");a.className="tool-call-icon",a.setAttribute("part","tool-card-icon"),a.setAttribute("aria-hidden","true");let c=document.createElement("span");c.className="tool-call-name",c.setAttribute("part","tool-card-name"),c.textContent=r??e,this.#e=document.createElement("span"),this.#e.className="tool-call-status",this.#f(Q.PENDING),this.#t=document.createElement("span"),this.#t.className="tool-call-decision",this.#t.setAttribute("part","tool-card-decision"),this.#t.hidden=!0,s.append(a,c,this.#e,this.#t);let l=this.#v("args",o.argumentsLabel);this.#g(l.body,{kind:"arguments",toolName:e,args:n},JSON.stringify(n,null,2));let d=Object.keys(n).length>0;l.root.hidden=!d,this.element.toggleAttribute("data-has-args",d);let h=this.#v("result",o.resultLabel);this.#r=h.root,this.#o=h.label,this.#s=h.body,h.root.hidden=!0,this.#n=document.createElement("button"),this.#n.type="button",this.#n.className="tool-call-toggle",this.#n.setAttribute("part","tool-card-toggle"),this.#n.setAttribute("aria-expanded","false"),this.#n.textContent=o.details,this.#n.addEventListener("click",()=>this.#m(!this.#u()));let m=document.createElement("div");m.className="tool-call-body",m.setAttribute("part","tool-card-body"),m.append(l.root,h.root),this.approvalSlot=document.createElement("div"),this.approvalSlot.className="tool-call-approval",this.approvalSlot.setAttribute("part","tool-card-approval"),this.subagentSlot=document.createElement("div"),this.subagentSlot.className="tool-call-subagent",this.subagentSlot.setAttribute("part","tool-card-subagent"),this.element.append(s,this.subagentSlot,this.#n,m,this.approvalSlot)}mark(e){this.#c||this.#f(e)}setAsking(e){this.element.toggleAttribute("data-asking",e)}recordDecision(e){this.element.setAttribute("data-decision",e),this.#t.textContent=e==="approved"?this.#i.decisionApproved:this.#i.decisionDeclined,this.#t.hidden=!1}#d(e){if(typeof e!="string")return;let n=e.indexOf(":"),r=e.slice(0,n),o=n<0?void 0:HI(this.#i).get(r);if(o===void 0)return;this.element.setAttribute("data-answered-by",r);let i=document.createElement("span");i.className="tool-call-answered-by",i.setAttribute("part","tool-card-answered-by"),i.textContent=o,this.#t.after(i)}get settled(){return this.#c}settle(e,n,r){this.#c||(this.#c=!0,this.#f(e),this.#d(r),n.trim()!==""&&(this.#o.textContent=UI(this.#i)[e],this.#g(this.#s,{kind:"result",toolName:this.#a,status:e,text:n},FI(n)),this.#r.hidden=!1,this.element.setAttribute("data-has-result","")))}#f(e){this.element.setAttribute("data-status",e),this.element.setAttribute("part",`tool-card tool-card-${e}`),this.#e.setAttribute("part",`tool-card-status tool-card-status-${e}`),this.#e.textContent=$I(this.#i)[e]}#g(e,n,r){let o=this.#l===null?null:this.#l(n);if(o===null){e.textContent=r;return}if(e.setAttribute("data-formatted","true"),typeof o=="string"){e.textContent=o;return}e.replaceChildren(o)}#v(e,n){let r=document.createElement("div");r.className=`tool-call-section tool-call-section--${e}`,r.setAttribute("part",`tool-card-section tool-card-${e}-section`);let o=document.createElement("span");o.className="tool-call-section-label",o.setAttribute("part",`tool-card-section-label tool-card-${e}-label`),o.textContent=n;let i=document.createElement("pre");return i.className=`tool-call-${e}`,i.setAttribute("part",`tool-card-${e}`),r.append(o,i),{root:r,label:o,body:i}}#u(){return this.element.getAttribute("data-expanded")==="true"}#m(e){this.element.setAttribute("data-expanded",String(e)),this.#n.setAttribute("aria-expanded",String(e))}};var wl=class{#e;#t;constructor(e,n){this.#e=e.endsWith("/")?e:`${e}/`,this.#t=n}list(){return this.#o(this.#e,{method:"GET"},e=>{let{routines:n,grantable:r}=e??{};return Array.isArray(n)?{routines:n.map(yl).filter(o=>o!==null),grantable:Array.isArray(r)?rx(r):[]}:null})}create(e){return this.#r(this.#e,"POST",e,yl)}update(e,n){return this.#r(this.#n(e),"PUT",n,yl)}setEnabled(e,n){return this.#r(this.#n(e),"PATCH",{enabled:n},yl)}runNow(e){return this.#r(`${this.#n(e)}run/`,"POST",{},n=>{let r=n?.threadId;return typeof r=="string"?r:null})}runs(e){return this.#o(`${this.#n(e)}runs/`,{method:"GET"},n=>{let r=n?.runs;return Array.isArray(r)?r.map(o=>{let{threadId:i,state:s}=o??{};return{threadId:typeof i=="string"?i:null,state:typeof s=="string"?s:null}}):null})}#n(e){return`${this.#e}${encodeURIComponent(e)}/`}#r(e,n,r,o){let i={method:n,headers:{"Content-Type":"application/json"},body:JSON.stringify(r)};return this.#o(e,i,o)}async#o(e,n,r){let o;try{o=await this.#t(e,n)}catch{return{ok:!1,status:0,message:null,destructive:[]}}let i=await o.json().catch(()=>null);if(o.ok){let c=r(i);if(c!==null)return{ok:!0,value:c}}let{error:s,destructive:a}=i??{};return{ok:!1,status:o.status,message:typeof s=="string"?s:null,destructive:Array.isArray(a)?a.filter(c=>typeof c=="string"):[]}}};function rx(t){let e=[];for(let n of t){let{name:r,destructive:o}=n??{};typeof r=="string"&&e.push({name:r,destructive:o===!0})}return e}function GI(t){let e=t??{},{kind:n,weekdays:r,at:o}=e,i=e.every_hours;if(n==="weekly"&&Array.isArray(r)&&typeof o=="string"){let s=r.filter(a=>Number.isInteger(a));return{kind:n,weekdays:s,at:o}}return n==="interval"&&typeof i=="number"?{kind:n,every_hours:i}:null}function yl(t){let e=t??{},{id:n,name:r,prompt:o,timezone:i,pausedReason:s,nextFireAt:a,lastThreadId:c}=e,l=GI(e.schedule);if(typeof n!="string"||typeof r!="string"||typeof o!="string"||typeof i!="string"||l===null)return null;let d=e.preapprovedTools;return{id:n,name:r,prompt:o,schedule:l,timezone:i,enabled:e.enabled!==!1,pausedReason:typeof s=="string"?s:"",nextFireAt:typeof a=="string"?a:null,preapprovedTools:Array.isArray(d)?rx(d):[],lastThreadId:typeof c=="string"?c:null}}function Ye(t,e,n){let r=document.createElement("button");r.type="button",r.className=`header-btn header-btn--${t}`,r.setAttribute("part",`header-button ${t}-button`),r.title=e,r.setAttribute("aria-label",e);let o=document.createElement("slot");return o.name=`icon-${t}`,o.innerHTML=n,r.append(o),r}function Zh(t,e,n,r){let o=document.createElement("slot");o.name=t,o.append(...n);let i=new WeakSet,s=a=>{let c=a===void 0?o.assignedElements():[...a.children].filter(l=>l.slot===t);for(let l of c)i.has(l)||(i.add(l),l.value=e)};return o.addEventListener("slotchange",()=>s()),{slot:o,bind:s,value:()=>{let[a]=o.assignedElements();return a===void 0?r():String(a.value)}}}function ix(t,e,n){let[r="",o=""]=t.split(":"),i=document.createElement("div");i.className="routine-time",i.setAttribute("part","routine-time"),i.setAttribute("role","group"),i.setAttribute("aria-labelledby",e);let s=ox("hour",n.routineHour),a=ox("minute",n.routineMinute);jh(s,1,24,r),jh(a,5,60,o);let c=document.createElement("span");return c.className="routine-time-colon",c.setAttribute("aria-hidden","true"),c.textContent=":",i.append(s,c,a),{element:i,value:()=>`${s.value}:${a.value}`,useStep:l=>{let d=Number(l);Number.isInteger(d)&&d>=1&&d<=30&&jh(a,d,60,a.value)}}}function ox(t,e){let n=document.createElement("select");return n.id=`routine-field-at-${t}`,n.setAttribute("aria-label",e),n}function jh(t,e,n,r){let o=[];for(let i=0;i<n;i+=e)o.push(String(i).padStart(2,"0"));o.includes(r)||(o.push(r),o.sort()),t.replaceChildren(...o.map(i=>BI(i))),t.value=r}function BI(t){let e=document.createElement("option");return e.value=t,e.textContent=t,e}function sx(t){let e=Intl.DateTimeFormat().resolvedOptions().timeZone,n=document.createElement("input");n.type="text",n.autocomplete="off",n.spellcheck=!1,n.value=t===""?e:t;let r=document.createElement("datalist");r.id="routine-zones";let o=new Set([...Intl.supportedValuesOf("timeZone"),n.value,e]);return r.append(...[...o].sort().map(i=>VI(i))),n.setAttribute("list",r.id),{input:n,list:r}}function VI(t){let e=document.createElement("option");return e.value=t,e.textContent=t,e}var Wh=Date.UTC(2024,0,1),ZI=864e5;function xl(t,e){return new Intl.DateTimeFormat(e,{weekday:"short",timeZone:"UTC"}).format(Wh+t*ZI)}function ax(t,e,n,r,o=null){let i=document.createElement("form");i.className="skill-form routine-form",i.setAttribute("part","routine-form"),i.noValidate=!0,i.addEventListener("submit",de=>{de.preventDefault(),r()});let s=document.createElement("div");s.className="skill-form-error",s.setAttribute("role","alert"),s.hidden=!0;let a=(de,xe,Me,St,rc=Me)=>{let fn=document.createElement("div");fn.className="skill-field",fn.dataset.field=de;let he=document.createElement("label");if(he.className="skill-field-label",he.textContent=xe,Me.id=`routine-field-${de}`,he.htmlFor=Me.id,fn.append(he,rc),St!==void 0){let Jr=document.createElement("div");Jr.className="skill-field-hint",Jr.textContent=St,fn.append(Jr)}return fn},c=(de,xe)=>{let Me=document.createElement("input");return Me.type=de,Me.autocomplete="off",Me.value=xe,Me},l=c("text",t.name),d=document.createElement("textarea");d.rows=4,d.value=t.prompt;let h=document.createElement("fieldset");h.className="skill-field routine-when";let m=document.createElement("legend");m.className="skill-field-label",m.textContent=n.routineSchedule;let f=document.createElement("div");f.className="routine-kinds";let u=(de,xe)=>{let Me=document.createElement("label"),St=c("radio",de);return St.name="routine-kind",St.checked=t.schedule.kind===de,St.addEventListener("change",ie),Me.append(St,xe),f.append(Me),St},v=u("weekly",n.routineWeekly);u("interval",n.routineInterval);let E=document.createElement("div");E.className="routine-weekly";let T=document.createElement("div");T.className="routine-days";let w=t.schedule.kind==="weekly"?t.schedule.weekdays:[0,1,2,3,4],D=[0,1,2,3,4,5,6].map(de=>{let xe=document.createElement("label");xe.className="routine-day",xe.setAttribute("part","routine-day");let Me=c("checkbox",String(de));return Me.checked=w.includes(de),xe.append(Me,xl(de)),T.append(xe),Me}),S=t.schedule.kind==="weekly"?t.schedule.at:"09:00",g=document.createElement("span");g.className="skill-field-label",g.id="routine-label-at",g.textContent=n.routineAt;let x=ix(S,g.id,n),b=Zh("routine-time",S,[x.element],x.value),k=document.createElement("div");k.className="skill-field",k.dataset.field="at",k.append(g,b.slot),E.append(T,k);let I=c("number",String(t.schedule.kind==="interval"?t.schedule.every_hours:24));I.min="1",I.max="8784";let P=a("every",n.routineEvery,I);P.classList.add("routine-interval");let $=sx(t.timezone),L=Zh("routine-timezone",$.input.value,[$.input,$.list],()=>$.input.value);h.append(m,f,E,P,a("timezone",n.routineTimezone,$.input,void 0,L.slot));function ie(){E.hidden=!v.checked,P.hidden=v.checked}ie();let De=de=>{x.useStep(de.getAttribute("data-routine-minute-step")),b.bind(de),L.bind(de)};o!==null?De(o):queueMicrotask(()=>{let de=i.getRootNode();de instanceof ShadowRoot&&De(de.host)});let pe=document.createElement("fieldset");pe.className="skill-field routine-tools",pe.setAttribute("part","routine-tools");let _t=document.createElement("legend");_t.className="skill-field-label",_t.textContent=n.routineTools;let Tt=document.createElement("div");Tt.className="skill-field-hint",Tt.textContent=e.length===0?n.routineNoTools:n.routineToolsHint,pe.append(_t,Tt);let Xr=new Set(t.preapprovedTools),nc=new Set(t.confirmDestructive);for(let de of e)pe.append(jI(de,Xr,nc,n));return i.append(s,a("name",n.routineName,l),a("prompt",n.routinePrompt,d,n.routinePromptHint),h,pe),{form:i,read:()=>{let de=e.map(xe=>xe.name).filter(xe=>Xr.has(xe));return{name:l.value,prompt:d.value,schedule:v.checked?{kind:"weekly",weekdays:D.flatMap((xe,Me)=>xe.checked?[Me]:[]),at:b.value()}:{kind:"interval",every_hours:Number(I.value)},timezone:L.value(),enabled:t.enabled,preapprovedTools:de,confirmDestructive:e.filter(xe=>xe.destructive&&Xr.has(xe.name)).map(xe=>xe.name)}},showError:de=>{s.textContent=de,s.hidden=!1,s.scrollIntoView({block:"nearest"})}}}function jI(t,e,n,r){let o=document.createElement("div");o.className="routine-tool",o.setAttribute("part","routine-tool");let i=document.createElement("label");i.className="skill-switch";let s=document.createElement("span"),a=document.createElement("code");if(a.textContent=t.name,s.append(a),t.destructive){let u=document.createElement("span");u.className="routine-destructive",u.setAttribute("part","routine-destructive"),u.textContent=r.routineDestructive,s.append(u)}let c=document.createElement("input");c.type="checkbox",c.name=t.name,c.checked=e.has(t.name),i.append(s,c),o.append(i);let l=document.createElement("div");l.className="routine-confirm",l.setAttribute("role","alertdialog"),l.hidden=!0;let d=document.createElement("p"),h=F(r.routineGrantDestructive,{name:t.name});d.textContent=h;let m=document.createElement("button");m.type="button",m.className="skill-editor-btn skill-editor-btn--danger",m.textContent=r.routineGrant;let f=document.createElement("button");return f.type="button",f.className="skill-editor-btn skill-editor-btn--ghost",f.textContent=r.cancel,l.append(d,m,f),l.setAttribute("aria-label",h),o.append(l),c.addEventListener("change",()=>{if(!c.checked){e.delete(t.name),n.delete(t.name),l.hidden=!0;return}if(t.destructive&&!n.has(t.name)){c.checked=!1,l.hidden=!1,m.focus();return}e.add(t.name)}),m.addEventListener("click",()=>{n.add(t.name),e.add(t.name),c.checked=!0,l.hidden=!0,c.focus()}),f.addEventListener("click",()=>{l.hidden=!0,c.focus()}),o}function lx(t,e,n,r=Intl.DateTimeFormat().resolvedOptions().timeZone,o){if(t.kind==="interval")return t.every_hours===1?n.routineHourly:F(n.routineEveryHours,{n:t.every_hours});let i=/^(\d{1,2}):(\d{2})$/.exec(t.at),s=i===null?0:Number(i[1])*60+Number(i[2]),a=new Intl.DateTimeFormat(o,{hour:"numeric",minute:"2-digit",timeZone:"UTC"}).format(Wh+s*6e4),c=[...new Set(t.weekdays)].sort((h,m)=>h-m),l=c.join(","),d;if(l==="0,1,2,3,4,5,6")d=F(n.routineDaily,{time:a});else if(l==="0,1,2,3,4")d=F(n.routineWeekdays,{time:a});else{let h=new Intl.ListFormat(o,{style:"long"}).format(c.map(m=>xl(m,o)));d=F(n.routineOnDays,{days:h,time:a})}return e===r?d:F(n.routineInZone,{schedule:d,zone:e})}var El=class{#e;#t=[];#n=[];#r=new Map;#o="closed";#s=0;#i=null;#a=!1;constructor(e){this.#e=e}get isOpen(){return this.#o!=="closed"}get atRoot(){return this.#o!=="edit"}refresh(){this.#o==="list"&&this.#a&&this.#d()}open(e){this.#l(e),this.#c(!1)}openFromConversation(e){this.#l(e),this.#c(!0)}back(){if(this.#o==="edit"){this.#o="list",this.#d();return}this.#e.onClose()}reset(){this.#s+=1,this.#t=[],this.#n=[],this.#r=new Map,this.#i=null,this.#a=!1,this.#o="closed"}#l(e){this.reset(),this.#i=e,this.#o="list"}async#c(e){let n=this.#s,r=this.#i,o=await r.list();if(n!==this.#s)return;if(!o.ok){let s=this.#e.strings(),a=document.createElement("p");a.className="skill-editor-unavailable",a.setAttribute("role","alert"),a.textContent=s.routinesUnavailable,this.#e.view.show({title:s.routines,body:[a]});return}this.#t=o.value.routines,this.#n=o.value.grantable,this.#a=!0;let i=e?this.#e.fromConversation():null;i===null?this.#d():this.#g(null,i);for(let s of this.#t)r.runs(s.id).then(a=>{n!==this.#s||!a.ok||(this.#r.set(s.id,a.value[0]??null),this.#o==="list"&&this.#d())})}#d(){let e=this.#e.strings(),n=Ye("new-routine",e.newRoutine,Ai);n.addEventListener("click",()=>this.#g(null,null));let r=[];if(this.#e.fromConversation()!==null){let i=document.createElement("button");i.type="button",i.className="skill-editor-btn skill-editor-btn--block",i.setAttribute("part","make-routine"),i.textContent=e.makeRoutine,i.addEventListener("click",()=>this.#g(null,this.#e.fromConversation())),r.push(i)}if(this.#t.length===0){let i=document.createElement("div");i.className="skill-empty",i.setAttribute("part","routine-empty");let s=document.createElement("h3");s.textContent=e.noRoutines;let a=document.createElement("p");a.textContent=e.noRoutinesBody,i.append(s,a),this.#e.view.show({title:e.routines,actions:[n],body:[i],footer:r});return}let o=document.createElement("div");o.className="skill-rows",o.setAttribute("part","routine-rows");for(let i of this.#t)o.append(this.#f(i));this.#e.view.show({title:e.routines,sub:String(this.#t.length),actions:[n],body:[o],footer:r})}#f(e){let n=this.#e.strings(),r=document.createElement("div");r.className=e.enabled?"skill-row routine-row":"skill-row routine-row skill-row--off",r.setAttribute("part","routine-row"),r.dataset.routineId=e.id;let o=document.createElement("button");o.type="button",o.className="skill-row-open";let i=document.createElement("span");i.className="skill-row-name routine-row-name",i.textContent=e.name;let s=document.createElement("span");s.className="skill-row-desc routine-schedule",s.textContent=lx(e.schedule,e.timezone,n);let a=document.createElement("span");a.className="routine-next",a.textContent=WI(e,n);let c=document.createElement("span");c.className="skill-row-meta",c.append(a),o.append(i,s,c),o.addEventListener("click",()=>this.#g(e,null));let l=this.#r.get(e.id),d=qI(e,l,n),h=l?.threadId??e.lastThreadId,m=document.createElement(h===null?"span":"button");m.className="routine-last",m.setAttribute("part","routine-last"),m.textContent=d,m instanceof HTMLButtonElement&&h!==null&&(m.type="button",m.addEventListener("click",()=>this.#e.onOpenThread(h)));let f=document.createElement("button");f.type="button",f.className="skill-editor-btn skill-editor-btn--ghost",f.setAttribute("part","routine-toggle"),f.textContent=e.enabled?n.pause:n.resume,f.addEventListener("click",()=>{this.#m(e,!e.enabled)});let u=document.createElement("button");u.type="button",u.className="skill-editor-btn skill-editor-btn--ghost",u.setAttribute("part","routine-run"),u.textContent=n.runNow,u.addEventListener("click",()=>{this.#p(e)});let v=document.createElement("div");return v.className="routine-actions",v.append(m,f,u),r.append(o,v),r}#g(e,n){let r=this.#e.strings();this.#o="edit";let o=this.#v(e),i=e===null?{name:n?.name??"",prompt:n?.prompt??"",schedule:{kind:"weekly",weekdays:[0,1,2,3,4],at:"09:00"},timezone:Intl.DateTimeFormat().resolvedOptions().timeZone,enabled:!0,preapprovedTools:[],confirmDestructive:[]}:{name:e.name,prompt:e.prompt,schedule:e.schedule,timezone:e.timezone,enabled:e.enabled,preapprovedTools:e.preapprovedTools.map(d=>d.name),confirmDestructive:e.preapprovedTools.filter(d=>d.destructive).map(d=>d.name)},s=document.createElement("button"),a=ax(i,o,r,()=>s.click(),this.#e.element),c=document.createElement("button");c.type="button",c.className="skill-editor-btn skill-editor-btn--ghost",c.textContent=r.cancel,c.addEventListener("click",()=>this.back()),s.type="button",s.className="skill-editor-btn skill-editor-btn--primary",s.textContent=e===null?r.create:r.save,s.addEventListener("click",()=>{this.#u(e,a.read(),d=>a.showError(d))});let l=document.createElement("span");l.className="skill-editor-grow",this.#e.view.show({title:e===null?r.newRoutineTitle:r.editRoutineTitle,...e===null?{}:{sub:e.name},body:[a.form],footer:[l,c,s]})}#v(e){let n=new Map;for(let r of[...this.#n,...e?.preapprovedTools??[]])n.set(r.name,(n.get(r.name)??!1)||r.destructive);return[...n].map(([r,o])=>({name:r,destructive:o}))}async#u(e,n,r){let o=this.#i,i=this.#s,s=e===null?await o.create(n):await o.update(e.id,n);if(i===this.#s){if(!s.ok){r(s.message??this.#e.strings().routineSaveFailed);return}this.#b(s.value,this.#e.strings().routineSaved)}}async#m(e,n){let r=this.#i,o=this.#s,i=await r.setEnabled(e.id,n);if(o!==this.#s)return;let s=this.#e.strings();if(!i.ok){this.#e.view.announce(i.message??s.routineSaveFailed);return}this.#b(i.value,n?s.routineResumedStatus:s.routinePausedStatus,!1)}async#p(e){let n=this.#i,r=this.#s,o=await n.runNow(e.id);if(r!==this.#s)return;let i=this.#e.strings();if(!o.ok){this.#e.view.announce(o.message??i.routineSaveFailed);return}this.#r.set(e.id,{threadId:o.value,state:"pending"}),this.#o==="list"&&this.#d(),this.#e.view.announce(F(i.routineStarted,{name:e.name}))}#b(e,n,r=!0){let o=this.#t.some(i=>i.id===e.id);this.#t=o?this.#t.map(i=>i.id===e.id?e:i):[e,...this.#t],r&&(this.#o="list"),this.#o==="list"&&this.#d(),this.#e.view.announce(F(n,{name:e.name}))}};function WI(t,e){if(!t.enabled||t.nextFireAt===null)return t.pausedReason===""?e.routinePaused:F(e.routinePausedBecause,{reason:t.pausedReason});let n=new Intl.DateTimeFormat(void 0,{weekday:"short",month:"short",day:"numeric",hour:"numeric",minute:"2-digit"}).format(new Date(t.nextFireAt));return F(e.routineNext,{time:n})}function qI(t,e,n){let r=e?.state??null;return r==="pending"?n.routineLastPending:r==="lapsed"?n.routineLastLapsed:r==="finished"?n.routineLastFinished:(e??null)===null&&t.lastThreadId===null?n.routineLastNever:n.routineLastUnknown}var cx=`
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
`;var dx=`
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
`;var ux=`
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

/* Icon buttons: quiet at rest, so the field is what the eye lands on. They
   keep their size when the row is short of width: the place chip beside them
   is what gives way. */
.attach-btn,
.voice-btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex: none;
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
`;var hx=`
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

/* The way out to the skill editor, at the foot and set apart from the skills. */
.skill-item--manage {
  border-top: 1px solid var(--_border);
  color: var(--_accent);
  font-size: 0.9em;
}

.skill-item--manage:first-child {
  border-top: none;
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
`;var px=`
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
  /* It floats over the transcript, so it is the panel's own colour first, with
     the theme's answer tint over it; a theme that draws answers with no bubble
     leaves that tint transparent, and the panel showed what it covered. */
  background: linear-gradient(var(--_assistant-bg), var(--_assistant-bg)) var(--_bg);
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

/* The rows sit in this list, not in the panel, so the panel's gap only parted
   the title from them and each row's surface ran into the next. */
.checkpoints-list {
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
}

.checkpoints-empty {
  padding: 0.5rem 0.25rem;
  font-size: 0.8125rem;
  opacity: 0.7;
}

/* A row is a label and two buttons, and nothing about the row itself is
   pressable. Hover is the affordance of something clickable, and a lit-up row made the
   buttons look like decoration on a clickable strip, so the resting surface
   groups the row and only the buttons respond to hover.

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
  background: linear-gradient(var(--_assistant-bg), var(--_assistant-bg)) var(--_bg);
  opacity: 0.8;
}

/* The pair is one flex item, so a narrow row wraps it whole and never parts
   Resume from Fork. It rides the trailing edge on either line. */
.checkpoint-actions {
  display: flex;
  flex: 0 0 auto;
  gap: 0.5rem;
  margin-inline-start: auto;
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

/* An age group's heading: quieter than the rows it heads, and not a stop for Tab. */
.drawer-group-label {
  padding: 0.75rem var(--_pad) 0.25rem;
  border-bottom: 1px solid var(--_border);
  font-size: 0.75em;
  font-weight: 600;
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

/* Child sessions' rows, in a group under their parent's row. The groups nest,
   so a grandchild steps in again without a rule per level. */
.drawer-children {
  padding-inline-start: 14px;
}

/* The breadcrumb from a child session back to its parent: one muted line
   between the header and the transcript. */
.parent-breadcrumb {
  display: flex;
  min-width: 0;
  padding: 4px 14px;
  border-bottom: 1px solid var(--_border);
}

.parent-breadcrumb[hidden] {
  display: none;
}

.parent-breadcrumb-link {
  min-width: 0;
  max-width: 100%;
  padding: 0;
  border: none;
  background: none;
  font: inherit;
  font-size: var(--_text-xs);
  color: var(--_muted);
  text-align: left;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  cursor: pointer;
}

.parent-breadcrumb-link::before {
  content: "\\2190\\00a0";
}

.parent-breadcrumb-link:hover {
  color: var(--_fg);
  text-decoration: underline;
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
`;var fx=`
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
`;var mx=`
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
`;var gx=`
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
`;var vx=`
/* One quiet pill: a mark, the place, its detail, and the eye toggle. Muted at
   rest so it reads as a fact about the message rather than a control. It takes
   what the row's buttons leave and shrinks before Send can leave the row: the
   label truncates with an ellipsis and the chip's title carries it in full. */
.place {
  display: inline-flex;
  align-items: center;
  flex: 0 1 auto;
  gap: 6px;
  min-width: 0;
  height: var(--_tool-btn-size);
  box-sizing: border-box;
  margin-inline-start: 4px;
  padding: 0 2px 0 8px;
  border: 1px solid var(--_border);
  border-radius: 999px;
  color: var(--_muted);
  font-size: 0.85em;
  line-height: 1;
}

.place-icon {
  display: inline-flex;
  flex: none;
}

.place-icon .glyph,
.place-toggle .glyph,
.place-icon img {
  width: 14px;
  height: 14px;
}

.place-icon img {
  border-radius: 3px;
}

.place-text {
  display: inline-flex;
  gap: 6px;
  min-width: 0;
  overflow: hidden;
}

.place-label,
.place-detail {
  flex: 0 1 auto;
  min-width: 0;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.place-label {
  color: var(--_fg);
}

.place-detail::before {
  content: "\\00B7";
  margin-inline-end: 6px;
}

.place-toggle {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex: none;
  width: 22px;
  height: 22px;
  padding: 0;
  border: none;
  border-radius: 50%;
  background: transparent;
  color: var(--_muted);
  cursor: pointer;
}

.place-toggle:hover {
  background: var(--_hover);
  color: var(--_fg);
}

/* An author display beats the user-agent rule for the hidden property, so each
   class above that sets one says it again for the hidden state: a chip with no
   place takes no space in the row. */
.place[hidden],
.place-icon[hidden],
.place-text[hidden],
.place-detail[hidden],
.place-toggle[hidden] {
  display: none;
}

/* Withheld from the next message: dashed and struck through, so the chip still
   says where the user is while saying plainly the agent is not told. */
.place[data-excluded] {
  border-style: dashed;
}

.place[data-excluded] .place-label,
.place[data-excluded] .place-detail {
  color: var(--_muted);
  text-decoration: line-through;
}
`;var bx=`
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

.bar-history,
.bar-place {
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

/* The place beside the title, secondary text that truncates first so the
   history button never leaves the strip. Its shrink factor is large so that
   it gives way before the title does, which is the strip's first word.
   Withheld places keep the chip's
   dashed, struck-through look: the bar must not claim the page is sent. */
:host([data-collapsed-to="bar"]) .bar-place {
  display: inline-flex;
  flex: 0 100 auto;
  gap: 6px;
  min-width: 0;
  overflow: hidden;
  padding: 2px 0;
  border-bottom: 1px solid transparent;
  color: var(--_muted);
  font-size: 0.85em;
  line-height: 1.2;
}

:host([data-collapsed-to="bar"]) .bar-place[hidden],
:host([data-collapsed-to="bar"]) .bar-place .place-detail[hidden] {
  display: none;
}

:host([data-collapsed-to="bar"]) .bar-place[data-excluded] {
  border-bottom-style: dashed;
  border-bottom-color: var(--_border);
}

:host([data-collapsed-to="bar"]) .bar-place[data-excluded] .place-label,
:host([data-collapsed-to="bar"]) .bar-place[data-excluded] .place-detail {
  text-decoration: line-through;
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

/* A panel a host sized to the whole window stands on the strip, whose fixed box would
   draw over the composer's foot. So it goes as it does on a phone, by display, so the
   bar measures 0 and the host's padding goes with it, and the header's minimise
   control is the way back. Collapsed, the strip is the way back, so it stays. */
:host([data-collapsed-to="bar"][data-fills-window]:not([collapsed])) .dock-bar {
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

/* The conversation list from the host's button: the panel's own drawer, moved
   out of the hidden panel and stood beside the button, below one in the top half
   of the viewport and above one in the bottom half. The element writes where,
   from the button's box. No backdrop: a press outside closes it, as Escape does.
   The wrapper draws no box; the host stops taking presses while collapsed, so
   the list takes its own back. A phone keeps a narrow margin on both sides. */
.threads-popover {
  display: contents;
}

:host([data-collapsed-to="none"]) .threads-popover > .drawer {
  position: fixed;
  inset: var(--_threads-top, auto) var(--_threads-right, 8px) var(--_threads-bottom, auto) auto;
  width: min(320px, calc(var(--_viewport-width) - 16px));
  height: min(440px, var(--_threads-room, 440px));
  border-radius: var(--_panel-radius);
  box-shadow: var(--_shadow);
  overflow: hidden;
  pointer-events: auto;
  transition: none;
}

:host([data-collapsed-to="none"]) .threads-popover > .drawer[hidden] {
  pointer-events: none;
}

@media (max-width: 600px) {
  :host([data-collapsed-to="none"]:not([data-small-viewport="off"])) .threads-popover > .drawer {
    right: 8px;
    left: 8px;
    width: auto;
  }
}

:host([data-collapsed-to="none"]) .threads-popover > .drawer .drawer-backdrop {
  display: none;
}

:host([data-collapsed-to="none"]) .threads-popover > .drawer .drawer-panel {
  box-sizing: border-box;
  width: 100%;
  border: 1px solid var(--_border);
  border-radius: inherit;
  box-shadow: none;
}
`;var yx=`
/* \u2500\u2500 Dock \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
   A docked panel rises from the bar along the bottom edge, or from the host's
   own control, instead of resting in a corner of its own. The element stamps
   what it collapses to as data-collapsed-to, and writes where the dock is as
   two private properties: --_dock-bottom, the bar's height or the distance
   from the layout viewport's bottom to the anchor's top, and --_dock-right,
   the anchor's distance from the right edge (a third, --_dock-top, for a
   panel below its anchor). Both are read with a 0px
   fallback, so a panel measured before the bar has laid out stands where a
   bar of no height would put it.

   The cap follows the token block's rule: what the host left free less the
   one gutter the anchored edge spends, so a panel grown to the cap runs from
   just above the bar to the far edge. A host therefore needs no inset to keep
   the panel off its bar; --ag-ui-inset still wins when set. A panel the user
   dragged off its dock is written there inline, which is how the dragged spot
   outranks every rule below, the anchor gap included; the element holds that
   spot above the bar or the anchor itself, and drops it on a phone, where the
   small-viewport block reads the same property first.

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
   panel grown to the cap off the top of the window by the difference.

   The width cap spends a gutter on each side: the panel is held off both
   window edges, so one gutter would leave a panel grown to the cap flush
   against the edge the anchor holds it to. */
:host([data-collapsed-to="none"][data-dock-anchored]) {
  --_inset: var(--ag-ui-inset, auto var(--_dock-right, 0px) calc(var(--_dock-bottom, 0px) + var(--_anchor-gap)) auto);
  --_max-width: var(--ag-ui-max-width, calc(var(--_viewport-width) - 2 * var(--_edge-gutter)));
  --_max-height: var(
    --ag-ui-max-height,
    calc(var(--_viewport-height) - var(--_dock-bottom, 0px) - max(var(--_edge-gutter), var(--_anchor-gap)))
  );
}

/* The same, below the anchor, for a host whose control sits in a header: the
   element stamps the side it resolved from anchor-side as the attribute's
   value and writes the anchor's bottom as --_dock-top. Keyed on that value
   rather than on another attribute, so the rule weighs what the one above
   weighs and the phone block after it still wins by order. --_dock-right is
   the anchor's right edge unless the panel would then cross the left gutter,
   on either side. */
:host([data-collapsed-to="none"][data-dock-anchored="below"]) {
  --_inset: var(--ag-ui-inset, calc(var(--_dock-top, 0px) + var(--_anchor-gap)) var(--_dock-right, 0px) auto auto);
  --_max-height: var(
    --ag-ui-max-height,
    calc(var(--_viewport-height) - var(--_dock-top, 0px) - max(var(--_edge-gutter), var(--_anchor-gap)))
  );
}
`;var wx=`
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
`;var xx=`
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
`;var Ex=`
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
`;var _x=`
/* \u2500\u2500 Placement presets \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */
/* Maximized, from the header control: a corner or docked panel takes the
   maximized size on both axes. Set on the box rather than the size aliases, so
   the size the user dragged is not read and the aliases stay the host's. The
   element refuses the state on page, full, embedded and at 600px or less, so
   no rule here has to. A collapsed attribute written straight on, which the
   element is not told of, still draws the collapsed box. A side column grows
   its width only, below and in the sidebar module. */
:host([maximized]:not([collapsed]):not([placement="side"]):not([placement="sidebar"])) {
  width: var(--_maximized-width);
  height: var(--_maximized-height);
}

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

:host([placement="side"][maximized]:not([collapsed])) {
  width: var(--_maximized-width);
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
`;var Tx=`
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

/* No grips while maximized: the element refuses the resize, so restore always
   lands on the size stored before it. */
:host([maximized]) .resize-handle {
  display: none;
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

/* A docked panel a host sized to the whole window has nothing to give a grip: its size
   is the host's, and a place a grip left would outlast that size with the bar back
   under it. They go as they do on a phone. A corner panel keeps them, since it has no
   bar to stand clear of and a grip's place is its own. */
:host([data-collapsed-to="bar"][data-fills-window]) .resize-handle,
:host([data-collapsed-to="none"][data-fills-window]) .resize-handle {
  display: none;
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
`;var Sx=`
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

/* Maximized grows the column's width only: the host and the panel pinned
   inside it, which reads its own width. */
:host([placement="sidebar"][maximized]:not([collapsed])),
:host([placement="sidebar"][maximized]:not([collapsed])) .chat {
  width: var(--_maximized-width);
}

/* A side column leaves --ag-ui-min-page-width of the page beside it, whatever
   its width came from: a drag, the token or maximize. Unset, the host keeps its
   own cap (the fallback makes the second term endless) and the panel reads no
   cap at all. Above the phone width only, where the column is the screen. */
@media (min-width: 601px) {
  :host([placement="sidebar"]),
  :host([placement="side"]) {
    max-width: min(
      var(--_max-width),
      calc(var(--_viewport-width) - var(--_min-page-width-set, calc(-1px * infinity)))
    );
  }

  :host([placement="sidebar"]) .chat {
    max-width: calc(var(--_viewport-width) - var(--_min-page-width-set));
  }
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
`;var kx=`
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
`;var Ax=`
.mcp-app-view-stage[data-display-mode="fullscreen"] {
  position: fixed;
  inset: 0;
  width: auto;
  height: auto;
  max-width: none;
  max-height: none;
  margin: 0;
  padding: 0;
  border: 0;
  overflow: hidden;
  color: var(--_fg);
  z-index: var(--_z-index);
  display: flex;
  flex-direction: column;
  background: var(--_bg);
}

/* The bridge keeps the view's own height inline for the return; the sheet
   outweighs it only while fullscreen. */
.mcp-app-view-stage[data-display-mode="fullscreen"] > .mcp-app-view-frame {
  flex: 1 1 0;
  min-height: 0;
  height: auto !important;
}

.mcp-app-view-exit {
  display: block;
  flex: none;
  align-self: flex-end;
  margin: 8px;
  padding: 4px 12px;
  border: 1px solid var(--_border);
  border-radius: var(--_radius);
  background: var(--_bg);
  color: var(--_fg);
  font: inherit;
  font-size: 0.9em;
  cursor: pointer;
}

.mcp-app-view-exit[hidden] {
  display: none;
}

.mcp-app-view-exit:hover {
  background: var(--_hover);
}

.mcp-app-view-exit:focus-visible {
  outline: 2px solid var(--_ring);
  outline-offset: 2px;
}

/* The card that asks whether a view may send a message or run a tool: under
   the frame inline, and pinned under it in the fullscreen sheet. Its look is
   the confirmation card's own. */
.mcp-app-view-stage > .mcp-app-consent {
  margin-top: 8px;
}

.mcp-app-view-stage[data-display-mode="fullscreen"] > .mcp-app-consent {
  flex: none;
  margin: 8px;
}
`;var Rx=`
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
`;var Ix=`
/* \u2500\u2500 Thoughts region \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
   A muted, collapsible chain-of-thought at the top of the answer group: open
   while the model reasons, folded once the answer text starts. A block with
   no text is a label alone, with no toggle and no body. */
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

/* The label is the whole header while the reasoning has no text, a plain line
   with nothing to open; once there is text it sits inside the toggle, which
   sets the same weight. */
.thoughts-label {
  align-self: flex-start;
  font-weight: 600;
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
`;var Jo=['[data-tool-display="inline"]','[data-tool-display="minimal"]','[data-tool-display="compact"]','[data-tool-display="full"]'].join(", "),me=`:host(:where(:not(${Jo})))`,_l=`:host(:is(${Jo}))`;function Yn(t){return`:host(:where(:not(${Jo}))[data-tool-group-display="${t}"]) .tool-group-list .tool-call`}var Cx=`
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

${me} .tool-group-head:not(:disabled):hover {
  background: var(--_hover);
  color: var(--_fg);
}

/* A one-step row with nothing behind it -- a call with no arguments and no
   result yet, or a blank one -- is a label, not a control: the step group
   disables it and drops its expanded state, and this drops the pointer and
   the chevron. Disabled rather than enabled-and-inert, so it takes no focus. */
${me} .tool-group-head:disabled {
  cursor: default;
}

${me} .tool-group-head:disabled .tool-group-chevron {
  display: none;
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
   the whole row. Its ink is the second ink in every theme, unless the host
   set the tool token, which then reaches the grouped calls too. */
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
  color: var(--_tool-fg-set, var(--_ink-2));
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

/* The inner display mode: how an opened group draws its calls. The same
   visibility rules the card modes apply to a flat card, so a call inside the
   group shows the regions the flat card of that mode shows. The flat inline
   mode's chrome rule is left out on purpose: a card in the group has already
   lost its box and is laid out as a row of the list, and that rule's padding
   and gap would undo the row. Selected from the host attribute, so changing it
   restyles groups already on screen. */
${Yn("compact")}[data-expanded="false"] .tool-call-section {
  display: none;
}

${Yn("inline")} .tool-call-section--args {
  display: none;
}

${Yn("minimal")} .tool-call-toggle,
${Yn("minimal")} .tool-call-body {
  display: none;
}

/* The toggle over nothing, as the card modes refuse it: under every inner mode
   but compact the arguments are not behind the toggle, so a call whose result
   is missing or blank has nothing for it to open. */
:host(:where(:not(${Jo})):not([data-tool-group-display="compact"])) .tool-group-list .tool-call:not([data-has-result]) .tool-call-toggle {
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
${Yn("minimal")}[data-status="deferred"] .tool-call-body {
  display: flex;
}

${Yn("compact")}[data-status="deferred"] .tool-call-section--args:not([hidden]),
${Yn("inline")}[data-status="deferred"] .tool-call-section--args:not([hidden]) {
  display: flex;
}

/* A one-step group already names its call in the row, so the card's own head
   is not drawn inside it. Under the minimal inner mode a card is only its head,
   so the row has nothing to open onto and draws no chevron. Grouped-only, so a
   card mode keeps the head. data-count is rewritten live as a run grows. */
${me} .tool-group[data-count="1"] .tool-call-head {
  display: none;
}

:host(:where(:not(${Jo}))[data-tool-group-display="minimal"]) .tool-group[data-count="1"] .tool-group-chevron {
  display: none;
}

/* Grouping is decided as each card is built, so a card mode set afterwards
   finds groups already drawn. It flattens them: the group and its list stop
   generating boxes, the row and the repeat ordinals go, and every card lays
   out as a direct child of the answer, exactly as a card built in that mode
   does. */
${_l} .tool-group,
${_l} .tool-group-list {
  display: contents;
}

${_l} .tool-group-head,
${_l} .tool-call-repeat {
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
`;var Nx=`
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
   approved call looks exactly like one that was never gated. The answered-by
   mark is the same record for a call a reviewer model or a routine approved
   with no person asked, so it wears the same note. Neither declares a display,
   so the hidden attribute on the decision still hides it. */
.tool-call-decision,
.tool-call-answered-by {
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

/* A settled card offers the toggle only over something. The card marks
   non-empty arguments with data-has-args and a non-blank result with
   data-has-result, and a call with neither has nothing behind it in any
   mode. Full shows the arguments without the toggle and inline never shows
   them, so there only a result is worth opening; compact folds both. A
   step group restates the full and inline half for the calls inside it. */
.tool-call:not([data-has-args]):not([data-has-result]) .tool-call-toggle,
:host([data-tool-display="full"]) .tool-call:not([data-has-result]) .tool-call-toggle,
:host([data-tool-display="inline"]) .tool-call:not([data-has-result]) .tool-call-toggle {
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
.child-session-link {
  display: flex;
  align-self: flex-start;
  max-width: 100%;
  padding: 2px 0;
  border: none;
  background: none;
  font: inherit;
  text-align: left;
  color: var(--_accent);
  text-decoration: underline;
  text-underline-offset: 2px;
  cursor: pointer;
  overflow-wrap: anywhere;
}

.child-session-link[hidden] {
  display: none;
}

/* Underlined at rest, because the default accent is close to the body colour
   and the line is what says it is a link; hover thickens the line. */
.child-session-link:hover {
  text-decoration-thickness: 2px;
}

/* A child parked on a person: worded so, and drawn in the danger colour so it
   is seen. Still only a link; the answer is given in the child's thread. */
.child-session-link[data-status="waiting"] {
  color: var(--_danger);
  font-weight: 600;
}

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
`;var Ox=`
.routine-row {
  flex-direction: column;
  align-items: stretch;
  gap: 0;
}

.routine-row-name {
  font-family: inherit;
}

.routine-actions {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 4px;
  padding: 0 10px 8px;
}

.routine-last {
  margin-inline-end: auto;
  padding: 0;
  border: none;
  background: none;
  color: var(--_muted);
  font: inherit;
  font-size: var(--_text-xs);
}

button.routine-last {
  text-decoration: underline;
  cursor: pointer;
}

.routine-actions .skill-editor-btn {
  padding: 4px 8px;
}

.routine-kinds,
.routine-days {
  display: flex;
  flex-wrap: wrap;
  gap: 4px 12px;
  font-size: var(--_text-sm);
}

.routine-days {
  gap: 4px;
}

.routine-kinds label,
.routine-day {
  display: inline-flex;
  align-items: center;
  gap: 4px;
  cursor: pointer;
}

/* A day is a toggle pill: its checkbox stays in the tab order and the
   accessibility tree, out of sight, and the pill shows its state. */
.routine-day {
  position: relative;
  padding: 2px 10px;
  border: 1px solid var(--_border);
  border-radius: 999px;
  color: var(--_muted);
}

.routine-day:has(:checked) {
  border-color: var(--_accent);
  background: var(--_accent);
  color: var(--_on-accent);
}

.routine-day:has(:focus-visible) {
  outline: 2px solid var(--_ring);
  outline-offset: 1px;
}

.routine-day input {
  position: absolute;
  width: 1px;
  height: 1px;
  margin: 0;
  overflow: hidden;
  clip-path: inset(50%);
  white-space: nowrap;
}

.routine-weekly {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.routine-time[hidden],
.routine-weekly[hidden],
.routine-interval[hidden],
.routine-confirm[hidden] {
  display: none;
}

.routine-form select,
.routine-form input[type="number"] {
  box-sizing: border-box;
  width: 100%;
  max-width: 12em;
  padding: 6px 8px;
  border: 1px solid var(--_border);
  border-radius: 6px;
  background: var(--_input-bg);
  color: inherit;
  font: inherit;
}

/* The time is two selects drawn by the panel's tokens, not the browser's
   time popup; they size to their two digits. */
.routine-time {
  display: flex;
  align-items: center;
  gap: 4px;
}

.routine-time select {
  width: auto;
}

.routine-tool .skill-switch span {
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  gap: 6px;
  min-width: 0;
}

.routine-tool code {
  font-family: var(--_code-font);
  font-size: var(--_text-sm);
  overflow-wrap: anywhere;
}

.routine-destructive {
  padding: 0 6px;
  border: 1px solid currentColor;
  border-radius: 999px;
  color: var(--_danger);
  font-size: var(--_text-xs);
}

.routine-confirm {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 4px 8px;
  padding: 8px 10px;
  border-radius: 6px;
  background: var(--_wash);
  font-size: var(--_text-sm);
}

.routine-confirm p {
  flex-basis: 100%;
  margin: 0;
}

.drawer-row-routine {
  align-self: flex-start;
  max-width: 100%;
  padding: 0 6px;
  border-radius: 999px;
  background: var(--_wash);
  color: var(--_muted);
  font-size: 0.72em;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
`;var Mx=`
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

/* A panel that is the screen has nowhere to go, so its header refuses the drag
   and must not offer it. No selector can see that a host has sized the panel to
   the window, so the placement stamps this from the measurement that refuses the
   drag. :host is carried for the specificity, not the scope, as below. Before the
   dragging rule, so a drag the header did take keeps its grabbing cursor. */
:host .header[data-fills-screen] {
  cursor: auto;
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

/* Under every theme: once the host sets the header text, the header behind the
   buttons is the host's colour, so their rest opacity goes. The frame's 0.85
   lets the header through the glyph, which took white on a mid-blue header from
   5.1:1 to 4.2:1. With the header text set, the opacity below reads a colour,
   which no opacity can be, so it is invalid at computed-value time and falls to
   the initial 1; unset, it reads the fallback. The glyph is each theme's own
   business: this inherits the header text, and a theme that draws the buttons
   in another ink reads the same switch to yield. */
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
  opacity: var(--_header-fg-set, 0.85);
}

/* The square is the host's own when it set one; otherwise it is mixed from the
   header text when the host set that, so it reads on any header the host
   painted; otherwise it is the theme's own. See the alias in the token defaults. */
.header-btn:hover {
  opacity: 1;
  background: var(--_header-btn-hover);
}

/* Every built-in header mark is a drawn glyph at the composer's size; the theme
   toggle's holder takes that size too, so its moon matches its neighbours. */
.header-btn .glyph,
.header-btn .icon-holder {
  width: var(--_glyph-size);
  height: var(--_glyph-size);
}
`;var Px=`
/* A sibling of the header rather than inside it, so a press on its padding never
   starts a panel drag; placed under the header by an inline inset the menu sets
   as it opens. */
.header-menu {
  position: absolute;
  inset-inline-end: 8px;
  z-index: 7;
  display: flex;
  flex-direction: column;
  min-width: 11rem;
  max-width: calc(100% - 16px);
  padding: 4px;
  border: 1px solid var(--_border);
  border-radius: 8px;
  background: var(--_bg);
  color: var(--_fg);
  box-shadow: 0 6px 24px rgb(0 0 0 / 16%);
}

/* The display above beats the user-agent rule for the hidden attribute. */
.header-menu[hidden] {
  display: none;
}

/* A control in the menu is a row: its glyph, then its name, in the panel's ink
   rather than the header's, since the menu sits on the panel. The leading :host
   is there for weight, not scope: each theme restates the header button's ink
   at this weight, and this module comes after the themes. */
:host .header-menu .header-btn {
  width: auto;
  height: 32px;
  justify-content: flex-start;
  gap: 10px;
  padding: 0 10px;
  border-radius: 6px;
  color: var(--_fg);
  opacity: 1;
  font-size: 0.875rem;
  text-align: start;
}

:host .header-menu .header-btn:hover,
:host .header-menu .header-btn:focus-visible {
  color: var(--_fg);
  background: var(--_hover);
}

/* The header button's line-height is one font size, which the clip would cut
   the descenders at. */
.header-menu .header-btn::after {
  content: attr(aria-label);
  line-height: 1.4;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
`;var Lx=`
/* While a full-panel view is open, everything under the header but the view
   is out of the layout. Hidden, not detached: a live view in the transcript
   keeps its frame, and the scroll position survives the visit. The attribute
   selector outranks the display each of these siblings sets at rest. */
.chat[data-panel-view] > :not(.header, .header-menu, .panel-view, .resize-handle) {
  display: none;
}

.panel-view {
  display: flex;
  flex-direction: column;
  flex: 1;
  min-height: 0;
  background: var(--_bg);
  color: var(--_fg);
}

/* The display above beats the user-agent rule for the hidden attribute. */
.panel-view[hidden] {
  display: none;
}

.panel-view-bar {
  display: flex;
  align-items: center;
  gap: 4px;
  padding: 6px 8px;
  border-bottom: 1px solid var(--_border);
}

.panel-view-heading {
  display: flex;
  align-items: baseline;
  gap: 8px;
  flex: 1;
  min-width: 0;
}

.panel-view-title {
  margin: 0;
  font-size: var(--_text-md);
  font-weight: 600;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.panel-view-sub {
  color: var(--_muted);
  font-size: var(--_text-sm);
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.panel-view-sub[hidden] {
  display: none;
}

.panel-view-actions {
  display: flex;
  gap: 4px;
}

.panel-view-body {
  flex: 1;
  min-height: 0;
  overflow: auto;
  overscroll-behavior: contain;
  padding: 12px;
}

.panel-view-footer {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 10px 12px;
  border-top: 1px solid var(--_border);
}

.panel-view-footer[hidden] {
  display: none;
}

.panel-view-status {
  position: absolute;
  width: 1px;
  height: 1px;
  overflow: hidden;
  clip-path: inset(50%);
  white-space: nowrap;
}

.panel-view-status:not(:empty) {
  position: static;
  width: auto;
  height: auto;
  clip-path: none;
  padding: 6px 12px;
  font-size: var(--_text-sm);
  color: var(--_muted);
  border-top: 1px solid var(--_border);
}
`;var zx=`
/* \u2500\u2500 Density \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */
:host([density="compact"]) {
  --_font-size: var(--ag-ui-font-size, 13px);
  --_space: var(--ag-ui-space, 6px);
  --_pad: var(--ag-ui-pad, 10px);
  --_msg-pad: var(--ag-ui-msg-pad, 5px 9px);
  --_msg-radius: var(--ag-ui-msg-radius, 10px);
}
`;var Dx=`
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
  /* Switches: a public token read with no fallback, named for it with -set.
     With the token unset the switch computes to the guaranteed-invalid value,
     so a rule that reads it with a fallback gets the fallback; that is how a
     rule tells a token the host set from the theme's default for it. Every
     theme's header buttons follow the header text only once a host sets it,
     and a step group's calls follow the tool token only once a host sets it
     (classic defaults --_tool-fg to the accent, which a group never drew). */
  --_header-fg-set: var(--ag-ui-header-fg);
  --_tool-fg-set: var(--ag-ui-tool-fg);
  /* The header buttons' hover square, by default, once the header text is
     set. Here it is the text at about a fifth, which every browser can mix;
     where relative colour syntax is supported (see the block at the end) it
     is the text's opposite instead. It reads the switch, so it is unset with
     it, and the square below falls to the theme's own: the panel's hover shade
     here, restated by each theme that draws another, so one rule in the frame
     paints them all. */
  --_header-btn-hover-auto: color-mix(in srgb, var(--_header-fg-set) 18%, transparent);
  --_header-btn-hover: var(--ag-ui-header-btn-hover, var(--_header-btn-hover-auto, var(--_hover)));
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
     bottom and right edges, or from the top to its bottom for a panel opening
     below it. Read only by the dock rules, each with a 0px fallback; declared
     initial so it never inherits any of them. */
  --_dock-bottom: initial;
  --_dock-right: initial;
  --_dock-top: initial;
  /* Where the conversation list stands beside the host's button under
     collapse-to="none", written inline by the element from the button's box.
     Declared initial for the same reason. */
  --_threads-top: initial;
  --_threads-bottom: initial;
  --_threads-right: initial;
  --_threads-room: initial;
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
  /* The size the header's maximize control grows the panel to: the cap above
     unless the host names one. A side column reads the width only. */
  --_maximized-width: var(--ag-ui-maximized-width, var(--_max-width));
  --_maximized-height: var(--ag-ui-maximized-height, var(--_max-height));
  /* The page a side column must leave beside it. A switch, as above: unset, a
     cap that reads it with no fallback drops out and caps nothing. */
  --_min-page-width-set: var(--ag-ui-min-page-width);
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

/* The header buttons' default hover square as the header text's opposite,
   so white text gets a darker square and dark text a lighter one. A square
   mixed from the text itself moves the ground toward the glyph: white on a
   mid-blue header fell from 5.1:1 to 3.75:1 under the pointer. Moving away
   from it can only raise what the host's own pair reads. Gated on this
   exact expression, so a browser that cannot compute it keeps the square
   mixed from the text rather than losing the square altogether. */
@supports (color: rgb(from red calc(255 - r) calc(255 - g) calc(255 - b))) {
  :host {
    --_header-btn-hover-auto: color-mix(in srgb, rgb(from var(--_header-fg-set) calc(255 - r) calc(255 - g) calc(255 - b)) 18%, transparent);
  }
}
`;var $x=`
.skill-rows {
  display: flex;
  flex-direction: column;
  gap: 2px;
}

.skill-row {
  display: flex;
  align-items: flex-start;
  gap: 8px;
  border-radius: 8px;
}

.skill-row:hover {
  background: var(--_hover);
}

.skill-row-open {
  display: grid;
  gap: 2px;
  flex: 1;
  min-width: 0;
  padding: 8px 10px;
  border: none;
  background: transparent;
  color: inherit;
  font: inherit;
  text-align: left;
  cursor: pointer;
}

.skill-row-name {
  font-family: var(--_code-font);
  font-size: var(--_text-sm);
  font-weight: 600;
}

.skill-row-desc {
  color: var(--_muted);
  font-size: var(--_text-sm);
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.skill-row-meta {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  color: var(--_muted);
  font-size: var(--_text-xs);
}

.skill-row--off .skill-row-name,
.skill-row--off .skill-row-desc {
  opacity: 0.6;
}

.skill-row > .skill-editor-btn {
  margin: 8px 8px 0 0;
  flex: 0 0 auto;
}

.skill-empty {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  padding: 32px 12px;
  text-align: center;
}

.skill-empty h3 {
  margin: 0;
  font-size: var(--_text-md);
}

.skill-empty p {
  margin: 0;
  color: var(--_muted);
  max-width: 32ch;
}

.skill-empty code {
  white-space: nowrap;
}

.skill-editor-unavailable {
  margin: 0;
  color: var(--_muted);
}

.skill-form {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.skill-field {
  display: flex;
  flex-direction: column;
  gap: 4px;
  margin: 0;
  padding: 0;
  border: none;
  min-width: 0;
}

.skill-field-label {
  padding: 0;
  font-size: var(--_text-sm);
  font-weight: 600;
}

.skill-field input[type="text"],
.skill-field textarea {
  box-sizing: border-box;
  width: 100%;
  padding: 6px 8px;
  border: 1px solid var(--_border);
  border-radius: 6px;
  background: var(--_input-bg);
  color: inherit;
  font: inherit;
}

.skill-field-slash {
  display: flex;
  align-items: center;
  gap: 2px;
  font-family: var(--_code-font);
}

.skill-form-body {
  min-height: 160px;
  font-family: var(--_code-font);
  font-size: var(--_text-sm);
  resize: vertical;
}

.skill-field--bad input[type="text"],
.skill-field--bad textarea {
  border-color: var(--_danger);
}

.skill-field-hint {
  color: var(--_muted);
  font-size: var(--_text-xs);
}

.skill-field-error,
.skill-form-error {
  color: var(--_danger);
  font-size: var(--_text-sm);
}

.skill-field-error[hidden],
.skill-form-error[hidden],
.skill-notice[hidden] {
  display: none;
}

.skill-switch {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  padding: 6px 0;
  cursor: pointer;
}

.skill-switch span {
  display: flex;
  flex-direction: column;
}

.skill-switch b {
  font-weight: 500;
}

.skill-switch small {
  color: var(--_muted);
  font-size: var(--_text-xs);
}

.skill-notice {
  padding: 8px 10px;
  border-radius: 6px;
  background: var(--_wash);
  font-size: var(--_text-sm);
}

.skill-editor-grow {
  flex: 1;
}

.skill-editor-btn {
  padding: 6px 12px;
  border: 1px solid var(--_border);
  border-radius: 6px;
  background: var(--_bg);
  color: var(--_fg);
  font: inherit;
  font-size: var(--_text-sm);
  cursor: pointer;
  white-space: nowrap;
}

.skill-editor-btn:hover {
  border-color: var(--_accent);
}

.skill-editor-btn--primary {
  border-color: var(--_accent);
  background: var(--_accent);
  color: var(--_on-accent);
}

.skill-editor-btn--ghost {
  border-color: transparent;
  background: transparent;
}

.skill-editor-btn--danger {
  border-color: transparent;
  background: transparent;
  color: var(--_danger);
}

.skill-editor-btn--block {
  flex: 1;
}
`;var Ux=`
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
`;var Hx=`
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
  --_header-btn-hover: var(--ag-ui-header-btn-hover, var(--_header-btn-hover-auto, rgba(255, 255, 255, 0.18)));
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
`;var Fx=`
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
`;var Gx=`
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

/* Both inks yield once the host sets the header text, since the header behind
   them is then the host's colour (see the switches in the token defaults). */
:host([theme~="ledger"]) .header-btn {
  color: var(--_header-fg-set, var(--_ink-3));
  border-radius: 3px;
}

:host([theme~="ledger"]) .header-btn:hover {
  color: var(--_header-fg-set, var(--_fg));
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
`;var Bx=`
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
  --_header-btn-hover: var(--ag-ui-header-btn-hover, var(--_header-btn-hover-auto, var(--_hover)));
  --_frame-shadow: var(--ag-ui-frame-shadow, 0 0 0 1px var(--_line-strong), 0 20px 40px -28px rgb(0 0 0 / 0.45));
  --_launcher-bg: var(--ag-ui-launcher-bg, var(--_fg));
  --_launcher-fg: var(--ag-ui-launcher-fg, var(--_bg));
  --_launcher-radius: var(--ag-ui-launcher-radius, 6px);
  --_launcher-size: var(--ag-ui-launcher-size, 44px);
  --_launcher-icon-size: var(--ag-ui-launcher-icon-size, 20px);
  --_chart-1: var(--ag-ui-chart-1, var(--_fg));
  --_chart-2: var(--ag-ui-chart-2, var(--_accent));
}
`;var ce={modern:':host(:not([theme~="classic"], [theme~="code"]))',quiet:':host(:not([theme~="classic"], [theme~="code"], [theme~="soft"], [theme~="ledger"]))'};var Vx=`
/* \u2500\u2500 status as an icon, never a pill \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
   The word stays for assistive technology through the card's own label; the
   pill only ever repeated what the icon said. */
${ce.modern} .tool-call-status {
  position: absolute;
  width: 1px;
  height: 1px;
  overflow: hidden;
  clip-path: inset(50%);
  white-space: nowrap;
}

${ce.modern} .tool-call:is([data-status="done"], [data-status="error"], [data-status="declined"]) .tool-call-icon::before {
  content: "";
  width: 14px;
  height: 14px;
  background: currentColor;
  mask: var(--_ico-check) center / contain no-repeat;
}

${ce.modern} .tool-call[data-status="done"] .tool-call-icon {
  color: var(--_success);
}

${ce.modern} .tool-call[data-status="error"] .tool-call-icon {
  color: var(--_danger);
}

${ce.modern} .tool-call[data-status="error"] .tool-call-icon::before {
  mask-image: var(--_ico-error);
}

/* An interrupted call is muted like a declined one but keeps the base glyph
   rather than taking the declined mark: nobody refused it, it only did not
   finish. */
${ce.modern} .tool-call:is([data-status="declined"], [data-status="interrupted"]) .tool-call-icon {
  color: var(--_muted);
}

${ce.modern} .tool-call[data-status="declined"] .tool-call-icon::before {
  mask-image: var(--_ico-declined);
}

/* The settled icon inherits colour from the icon box, so the box's own glyph
   colour from the base rules must not win. */
${ce.modern} .tool-call .tool-call-icon::before {
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
${ce.modern} .message-actions:has(~ .message--assistant) {
  display: none;
}

${ce.modern} .chart-block {
  box-sizing: border-box;
}

/* The baseline placeholder is the browser default, which measured under
   4.5:1 on every dark surface. A derived ink clears it in both schemes. */
${ce.modern} .input::placeholder {
  color: var(--_ink-3);
  opacity: 1;
}
`;var Zx=`
/* \u2500\u2500 Quiet \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
   The default. Its tokens are the token defaults; this is the little
   structure it adds on top: no bubble for the agent, hairlines, and a
   composer that sits on the panel rather than in a band. */

${ce.quiet} .chat {
  font-feature-settings: "cv11", "ss01";
  letter-spacing: -0.003em;
  line-height: var(--_leading);
}

${ce.quiet} .header {
  padding: 12px 14px 12px 18px;
}

${ce.quiet} .header-title {
  font-size: var(--_text-md);
  font-weight: 600;
  letter-spacing: -0.01em;
}

/* The buttons sit back in the third ink on the panel. Once the host sets the
   header text they draw in it instead, since the header behind them is then
   the host's colour (see the switches in the token defaults). */
${ce.quiet} .header-btn {
  color: var(--_header-fg-set, var(--_ink-3));
  border-radius: 8px;
}

/* The glyph takes the header text, which is the full ink when that is unset. */
${ce.quiet} .header-btn:hover {
  color: var(--_header-fg);
}

${ce.quiet} .message--user {
  border-radius: var(--_msg-radius);
  padding: 8px 12px;
}

${ce.quiet} .message--assistant {
  padding: 0;
  max-width: 100%;
}

${ce.quiet} .message--assistant a {
  color: inherit;
  text-decoration: underline;
  text-decoration-color: var(--_line-strong);
  text-underline-offset: 3px;
}

${ce.quiet} .thoughts-toggle {
  color: var(--_muted);
  font-size: var(--_text-sm);
}

${ce.quiet} .input-row {
  border-top: 0;
  padding-top: 4px;
}

${ce.quiet} .composer {
  border-color: var(--_line-strong);
  box-shadow: 0 1px 2px rgb(0 0 0 / 0.04);
}

${ce.quiet} .composer:focus-within {
  border-color: var(--_ink-3);
  box-shadow: 0 0 0 3px var(--_wash);
}

${ce.quiet} .send {
  border-radius: 9px;
}

${ce.quiet} :is(.suggestion-chip, .skill-chip) {
  background: transparent;
  border: 1px solid var(--_line);
  color: var(--_ink-2);
  border-radius: 999px;
}

${ce.quiet} :is(.suggestion-chip, .skill-chip):hover {
  background: var(--_hover);
  color: var(--_fg);
}

${ce.quiet} .confirm {
  border: 1px solid var(--_line-strong);
  border-radius: var(--_radius);
  padding: 14px;
  gap: 12px;
  box-shadow: 0 1px 2px rgb(0 0 0 / 0.04);
}

${ce.quiet} .confirm-btn {
  border-radius: 8px;
  padding: 7px 14px;
  font-weight: 500;
  font-size: var(--_text-sm);
  border-color: var(--_line-strong);
}

${ce.quiet} .confirm-btn--confirm {
  border-color: var(--_accent);
  font-weight: 600;
}

${ce.quiet} .launcher {
  border: 1px solid var(--_line-strong);
  box-shadow: 0 1px 2px rgb(0 0 0 / 0.06), 0 8px 24px -10px rgb(0 0 0 / 0.25);
}
`;var jx=`
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
`;var Wx=`
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

/* Both inks yield once the host sets the header text, since the header behind
   them is then the host's colour (see the switches in the token defaults). */
:host([theme~="soft"]) .header-btn {
  color: var(--_header-fg-set, var(--_ink-3));
  border-radius: 10px;
}

:host([theme~="soft"]) .header-btn:hover {
  color: var(--_header-fg-set, var(--_accent-ink));
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
`;var qx=`
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
  --_header-btn-hover: var(--ag-ui-header-btn-hover, var(--_header-btn-hover-auto, var(--_tint-2)));
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
`;var Yx=`
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
.stopped-note,
.usage-line {
  align-self: flex-start;
  color: var(--_muted);
  font-size: 12px;
  padding: 2px 4px;
}
`;var Kx=`
/* Empty-state region (slot): at the foot of the transcript, over the composer
   it starts, while it's the only thing in the list; hidden as soon as a
   message, card, or pending indicator renders. */
.empty {
  margin: auto auto 0;
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
`;var Xx=`
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

/* The offer borrows the suggestion chip's look; its own rule only keeps it at
   its natural width at the start of the column, as the stopped note sits. */
.run-error-offer {
  align-self: flex-start;
  margin-top: 4px;
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
`;var Jx=`
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

/* User messages a run took in while it was working, drawn inside the answer
   group they were delivered into. A column of its own, stretched to the group,
   because the user bubble right-aligns by align-self, which only a flex
   container honours. */
.enqueued-messages {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  align-self: stretch;
  gap: calc(var(--_space) / 2);
  min-width: 0;
}

.enqueued-messages[hidden] {
  display: none;
}

.enqueued-messages-note {
  color: var(--_muted);
  font-size: 0.8em;
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
`;var Qx=`
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
   inert, so it costs nothing but the read.

   The padding gives that box the size of the tokens, which a card narrower than
   one of them would scroll to reach. Scrollable overflow counts a box as its
   transform draws it, so a scale of nothing takes it out of that count on every
   side and in either direction, and leaves what is read: the padding's used values,
   and the containing block a percentage resolves against. Position fixed would add
   no scroll either, and would change that block.

   From its own corner, which is inside whatever holds it where the centre of the
   padding need not be: kept for an engine that counts a point with no area. Chromium
   does not, so the suite cannot pin the origin. */
.viewport-probe {
  position: absolute;
  top: 0;
  left: 0;
  width: 0;
  height: 0;
  visibility: hidden;
  pointer-events: none;
  transform: scale(0);
  transform-origin: 0 0;
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
`;var eE=[Dx,Hx,Fx,qx,Bx,jx,zx,_x,Ex,yx,kx,Sx,xx,wx,Mx,bx,Qx,Kx,Jx,Ix,Nx,Tx,ux,vx,dx,cx,Rx,Ax,Yx,mx,Xx,fx,gx,hx,px,Lx,$x,Ox,Cx,Ux,Vx,Zx,Wx,Gx,Px].join("");function tE(t,e=[]){let n=new CSSStyleSheet;return n.replaceSync(eE),t.adoptedStyleSheets=[n,...e],n}var nE=4,YI=64,Tl=class{trigger;menu;#e;#t=!1;constructor(e){this.#e=e,this.trigger=Ye("more",e.label,Uf),this.trigger.setAttribute("aria-haspopup","menu"),this.trigger.setAttribute("aria-expanded","false"),this.trigger.setAttribute("aria-controls","ag-ui-header-menu"),this.menu=document.createElement("div"),this.menu.className="header-menu",this.menu.id="ag-ui-header-menu",this.menu.setAttribute("part","header-menu"),this.menu.setAttribute("role","menu"),this.menu.setAttribute("aria-label",e.label),this.menu.hidden=!0;let{signal:n}=e;this.trigger.addEventListener("click",o=>this.toggle(o.detail===0),{signal:n}),this.trigger.addEventListener("keydown",o=>this.#l(o),{signal:n}),this.menu.addEventListener("keydown",o=>this.#c(o),{signal:n}),this.menu.addEventListener("click",()=>this.close(),{signal:n}),this.menu.addEventListener("focusout",o=>this.#d(o),{signal:n}),document.addEventListener("pointerdown",o=>this.#f(o),{signal:n});let r=new ResizeObserver(()=>this.fit());r.observe(e.header),n.addEventListener("abort",()=>r.disconnect())}get open(){return!this.menu.hidden}fit(){let{controls:e,row:n,movable:r,header:o,title:i}=this.#e,s=this.open,a=this.#n(),c=a!==null&&(e.contains(a)||this.menu.contains(a))?a:null;this.close();let l=n.filter(E=>r.includes(E)||E.parentElement===e);e.replaceChildren(...l);for(let E of r)E.removeAttribute("role"),E.removeAttribute("tabindex");this.menu.replaceChildren();let d=this.#e.menuOnly??null;d!==null&&(d.setAttribute("role","menuitem"),d.tabIndex=-1);let h=d!==null&&this.#t;h&&this.#i();let m=o.clientWidth>0,f=()=>m&&(o.scrollWidth>o.clientWidth+1||i.clientWidth<YI),u=l.length,v=()=>u>nE+1||(h||this.#o())&&u>nE;for(let E of r){if(!v()&&!f())break;this.#s(E),u-=1}h&&this.menu.append(d),s&&this.#o()&&this.show(!1),this.#r(c)}offer(e){this.#t!==e&&(this.#t=e,this.fit())}#n(){try{return this.#e.controls.getRootNode().activeElement??null}catch{return null}}#r(e){if(e===null)return;(this.menu.contains(e)&&!this.open||!e.isConnected?this.trigger:e).focus()}toggle(e=!1){this.open?this.close():this.show(e)}show(e){let n=this.#a();if(n.length===0)return;let{header:r}=this.#e;this.menu.style.insetBlockStart=`${r.offsetTop+r.offsetHeight+4}px`,this.menu.hidden=!1,this.trigger.setAttribute("aria-expanded","true"),e!==!1&&(e==="last"?n[n.length-1]:n[0])?.focus()}close(e=!1){this.open&&(this.menu.hidden=!0,this.trigger.setAttribute("aria-expanded","false"),e&&this.trigger.focus())}#o(){return this.menu.childElementCount>0}#s(e){let{row:n}=this.#e;this.#i(),e.setAttribute("role","menuitem"),e.tabIndex=-1;let r=this.#a().find(o=>n.indexOf(o)>n.indexOf(e));this.menu.insertBefore(e,r??null)}#i(){let{controls:e}=this.#e;if(this.trigger.parentElement!==e){let n=e.querySelector(".header-btn--maximize")??e.lastElementChild;e.insertBefore(this.trigger,n)}}#a(){return[...this.menu.children]}#l(e){(e.key==="ArrowDown"||e.key==="ArrowUp")&&(e.preventDefault(),this.show(e.key==="ArrowUp"?"last":!0))}#c(e){let n=this.#a(),r=n.indexOf(e.target),i={ArrowDown:(r+1)%n.length,ArrowUp:(r-1+n.length)%n.length,Home:0,End:n.length-1}[e.key];i!==void 0?(e.preventDefault(),n[i]?.focus()):e.key==="Escape"&&(e.preventDefault(),e.stopPropagation(),this.close(!0))}#d(e){let n=e.relatedTarget;n!==null&&!this.menu.contains(n)&&n!==this.trigger&&this.close()}#f(e){let n=e.composedPath();this.open&&!n.includes(this.menu)&&!n.includes(this.trigger)&&this.close()}};function Ur(t,e,n,r){let o=document.createElement("span");o.className="icon-holder",o.setAttribute("part",e);let i=document.createElement("slot");if(i.name=t,r!==null){let s=document.createElement("img");s.className="icon-img",s.src=r,s.alt="",i.append(s)}else n!==null&&(i.innerHTML=n);return o.append(i),o}function rE(t){let{strings:e}=t,n=document.createElement("div");n.className="header",n.setAttribute("part","header");let r=t.title;r.className="header-title",r.setAttribute("part","title"),r.textContent=t.titleText,(t.host.querySelector('[slot="icon"]')!==null||t.iconUrl!==null)&&n.append(Ur("icon","icon",null,t.iconUrl));let o=document.createElement("slot");o.name="header-actions";let i=document.createElement("div");i.className="header-controls",i.setAttribute("part","header-controls");let s=Ye("history",e.chatHistory,Tf);s.addEventListener("click",t.onHistory);let a=Ye("checkpoints",e.checkpoints,Af);a.addEventListener("click",t.onCheckpoints);let c=Ye("new",e.newChat,_f);c.addEventListener("click",t.onNewChat);let l=Ye("collapse",e.collapse,so);l.addEventListener("click",t.onCollapse);let d=Ye("maximize",e.maximize,ki);d.addEventListener("click",t.onMaximize);let h=null;t.onSkills!==null&&(h=Ye("skills",e.skills,Sf),h.addEventListener("click",t.onSkills));let m=null;t.onRoutines!==null&&(m=Ye("routines",e.routines,jc),m.addEventListener("click",t.onRoutines));let f=null;t.onMakeRoutine!==null&&(f=Ye("make-routine",e.makeRoutine,jc),f.addEventListener("click",t.onMakeRoutine));let u=t.themeToggle;u!==null&&(u.type="button",u.className="header-btn header-btn--theme",u.setAttribute("part","header-button theme-toggle"),u.title=e.toggleTheme,u.setAttribute("aria-label",e.toggleTheme),u.addEventListener("click",t.onToggleTheme,{signal:t.signal}));let v=t.withCheckpoints?a:null,E=D=>D.filter(S=>S!==null),T=E([h,m,s,v,c,u,d,l]);i.append(...E([h,m,s,v,c,u,l])),n.append(r,o,i);let w=new Tl({header:n,title:r,controls:i,row:T,movable:E([u,h,m,v,s]),menuOnly:f,label:e.moreControls,signal:t.signal});return w.fit(),{header:n,checkpoints:a,maximize:d,collapse:l,overflow:w}}function oE(t){let{launcher:e,badge:n,railLabel:r,bar:o,barHistory:i,barPlace:s}=t;e.className="launcher",e.type="button",e.setAttribute("part","launcher"),e.setAttribute("aria-label",t.strings.expand),n.className="launcher-badge",n.setAttribute("part","launcher-badge"),n.setAttribute("aria-hidden","true"),n.hidden=!0,r.className="rail-label",r.setAttribute("part","rail-label"),r.setAttribute("aria-hidden","true"),r.textContent=t.titleText,e.replaceChildren(Ur("launcher","launcher-icon",Rf,t.iconUrl),r,n),e.addEventListener("click",t.onOpen,{signal:t.signal}),o.className="dock-bar",o.setAttribute("part","bar"),i.className="bar-history",i.type="button",i.setAttribute("part","bar-history"),i.title=t.strings.chatHistory,i.setAttribute("aria-label",t.strings.chatHistory);let a=document.createElement("span");a.className="bar-history-glyph",a.setAttribute("aria-hidden","true"),a.textContent="\u2630",i.replaceChildren(a),i.addEventListener("click",t.onHistory,{signal:t.signal}),o.replaceChildren(e,s,i)}function iE(t,e,n){switch(t){case"chevron-up":return wf;case"chevron-down":return so;case"chevron-left":return Ef;case"chevron-right":return xf}let r=e==="sidebar"||e==="side";return t!=="panel-close"&&!r?so:r&&n==="left"?yf:bf}function sE(t){return t.getAttribute("data-unread-badge")!=="false"}var Sl=class{element;#e;#t;#n;#r;#o;#s;#i;#a;#l;constructor(e,n,r={}){this.#a=e,this.#l=r.atRoot??null,this.element=document.createElement("div"),this.element.className="panel-view",this.element.setAttribute("part","panel-view"),this.element.setAttribute("role","region"),this.element.hidden=!0;let o=document.createElement("div");o.className="panel-view-bar",o.setAttribute("part","panel-view-bar"),this.#e=Ye("back",e(),kf),this.#e.addEventListener("click",n);let i=document.createElement("div");i.className="panel-view-heading",this.#t=document.createElement("h2"),this.#t.className="panel-view-title",this.#t.setAttribute("part","panel-view-title"),this.#l!==null&&(this.#t.tabIndex=-1),this.#n=document.createElement("span"),this.#n.className="panel-view-sub",i.append(this.#t,this.#n),this.#r=document.createElement("div"),this.#r.className="panel-view-actions",o.append(this.#e,i,this.#r),this.#o=document.createElement("div"),this.#o.className="panel-view-body",this.#o.setAttribute("part","panel-view-body"),this.#s=document.createElement("div"),this.#s.className="panel-view-footer",this.#s.setAttribute("part","panel-view-footer"),this.#i=document.createElement("div"),this.#i.className="panel-view-status",this.#i.setAttribute("role","status"),this.element.append(o,this.#o,this.#s,this.#i),this.element.addEventListener("keydown",s=>{s.key==="Escape"&&(s.stopPropagation(),n())})}get isOpen(){return!this.element.hidden}show(e){let n=this.#l?.()??!1,r=this.element.getRootNode().activeElement,o=r!==null&&this.element.contains(r);this.#e.hidden=n;let i=this.#a();this.#e.title=i,this.#e.setAttribute("aria-label",i),this.#t.textContent=e.title,this.#n.textContent=e.sub??"",this.#n.hidden=e.sub===void 0,this.#r.replaceChildren(...e.actions??[]),this.#o.replaceChildren(...e.body),this.#o.scrollTop=0,this.#s.replaceChildren(...e.footer??[]),this.#s.hidden=e.footer===void 0||e.footer.length===0,this.element.setAttribute("aria-label",e.title),this.#i.textContent="",this.element.hidden=!1,this.#l===null?this.#e.focus():o&&(n?this.#t:this.#e).focus()}focusHeading(){this.#t.focus()}announce(e){this.#i.textContent=e}close(){this.element.hidden=!0,this.#r.replaceChildren(),this.#o.replaceChildren(),this.#s.replaceChildren(),this.#i.textContent=""}};function aE(t){return t.getAttribute("data-launcher-icon-url")??t.getAttribute("data-icon-url")}var KI=["name","description","body"];function lE(t,e,n){let r=document.createElement("form");r.className="skill-form",r.setAttribute("part","skill-form"),r.noValidate=!0,r.addEventListener("submit",g=>{g.preventDefault(),n()});let o=document.createElement("div");o.className="skill-form-error",o.setAttribute("role","alert"),o.hidden=!0;let i=document.createElement("input");i.type="text",i.spellcheck=!1,i.autocomplete="off",i.value=t.name;let s=document.createElement("textarea");s.rows=3,s.value=t.description;let a=document.createElement("textarea");a.className="skill-form-body",a.spellcheck=!1,a.value=t.body;let c=new Map,l=(g,x,b,k)=>{let I=document.createElement("div");I.className="skill-field",I.dataset.field=g;let P=document.createElement("label");P.className="skill-field-label",P.textContent=x;let $=`skill-field-${g}`;b.id=$,P.htmlFor=$;let L=document.createElement("div");L.className="skill-field-error",L.setAttribute("role","alert"),L.hidden=!0;let ie=document.createElement("div");ie.className="skill-field-hint",ie.textContent=k;let De=b;if(g==="name"){De=document.createElement("div"),De.className="skill-field-slash";let pe=document.createElement("span");pe.textContent="/",De.append(pe,b)}return I.append(P,De,L,ie),c.set(g,{wrap:I,error:L}),I},d=l("name",e.skillName,i,e.skillNameHint),h=l("description",e.skillDescription,s,e.skillDescriptionHint),m=document.createElement("fieldset");m.className="skill-field skill-reach";let f=document.createElement("legend");f.className="skill-field-label",f.textContent=e.skillReach;let u=document.createElement("div");u.className="skill-notice",u.textContent=e.skillUnreachable;let v=(g,x,b)=>{let k=document.createElement("label");k.className="skill-switch";let I=document.createElement("span"),P=document.createElement("b");P.textContent=g;let $=document.createElement("small");$.textContent=x,I.append(P,$);let L=document.createElement("input");return L.type="checkbox",L.checked=b,L.addEventListener("change",w),k.append(I,L),m.append(k),L};m.append(f);let E=v(e.skillInMenu,e.skillInMenuHint,t.userInvocable),T=v(e.skillAgentMayLoad,e.skillAgentMayLoadHint,t.modelInvocable);m.append(u);function w(){u.hidden=E.checked||T.checked}w();let D=l("body",e.skillBody,a,e.skillBodyHint);r.append(o,d,h,m,D);let S={name:i,description:s,body:a};return{form:r,read:()=>({name:i.value,description:s.value,body:a.value,userInvocable:E.checked,modelInvocable:T.checked}),showError:(g,x)=>{o.hidden=!0;for(let[P,{wrap:$,error:L}]of c)L.hidden=!0,$.classList.remove("skill-field--bad"),S[P].removeAttribute("aria-invalid");let b=KI.find(P=>P===x);if(b===void 0){o.textContent=g,o.hidden=!1;return}let{wrap:k,error:I}=c.get(b);I.textContent=g,I.hidden=!1,k.classList.add("skill-field--bad"),S[b].setAttribute("aria-invalid","true"),S[b].focus()}}}var XI={name:"",description:"",body:"",userInvocable:!0,modelInvocable:!0},kl=class{#e;#t=[];#n="closed";#r=0;#o=null;constructor(e){this.#e=e}get isOpen(){return this.#n!=="closed"}get atRoot(){return this.#n!=="edit"}open(e){this.#o=e,this.#r+=1,this.#n="list",this.#s()}back(){if(this.#n==="edit"){this.#n="list",this.#a();return}this.#e.onClose()}refresh(){this.#n==="list"&&(this.#r+=1,this.#s())}reset(){this.#r+=1,this.#t=[],this.#o=null,this.#n="closed"}async#s(){let e=this.#r,n=await this.#o.list();if(e===this.#r){if(!n.ok){this.#i();return}this.#t=n.value,this.#a()}}#i(){let e=this.#e.strings(),n=document.createElement("p");n.className="skill-editor-unavailable",n.setAttribute("role","alert"),n.textContent=e.skillsUnavailable,this.#e.view.show({title:e.skills,body:[n]})}#a(){let e=this.#e.strings(),n=Ye("new-skill",e.newSkill,Ai);if(n.addEventListener("click",()=>this.#f(null)),this.#t.length===0){this.#e.view.show({title:e.skills,actions:[n],body:[this.#c()]});return}let r=document.createElement("div");r.className="skill-rows",r.setAttribute("part","skill-rows");for(let o of this.#t)r.append(this.#l(o));this.#e.view.show({title:e.skills,sub:String(this.#t.length),actions:[n],body:[r],footer:this.#d("skill-editor-btn skill-editor-btn--block")})}#l(e){let n=this.#e.strings(),r=document.createElement("div");r.className=e.enabled?"skill-row":"skill-row skill-row--off",r.setAttribute("part","skill-row");let o=document.createElement("button");o.type="button",o.className="skill-row-open";let i=document.createElement("span");i.className="skill-row-name",i.textContent=`/${e.name}`;let s=document.createElement("span");s.className="skill-row-desc",s.textContent=e.description;let a=document.createElement("span");a.className="skill-row-meta";let c=[e.enabled?null:n.skillOff,e.userInvocable?n.skillInMenu:null,e.modelInvocable?n.skillAgentMayLoad:null];for(let l of c)if(l!==null){let d=document.createElement("span");d.textContent=l,a.append(d)}if(o.append(i,s,a),o.addEventListener("click",()=>this.#f(e)),r.append(o),!e.enabled){let l=document.createElement("button");l.type="button",l.className="skill-editor-btn skill-editor-btn--ghost",l.textContent=n.turnOn,l.addEventListener("click",()=>{this.#v(e,!0)}),r.append(l)}return r}#c(){let e=this.#e.strings(),n=document.createElement("div");n.className="skill-empty",n.setAttribute("part","skill-empty");let r=document.createElement("h3");r.textContent=e.noSkills;let o=document.createElement("p"),i=e.noSkillsBody,s=i.indexOf("{example}");if(s<0)o.textContent=i;else{let c=document.createElement("code");c.textContent="/weekly-report",o.append(i.slice(0,s),c,i.slice(s+9))}let a=document.createElement("button");return a.type="button",a.className="skill-editor-btn skill-editor-btn--ghost",a.textContent=e.writeSkill,a.addEventListener("click",()=>this.#f(null)),n.append(r,o,...this.#d("skill-editor-btn skill-editor-btn--primary"),a),n}#d(e){let n=this.#e.onDraft;if(n===null)return[];let r=document.createElement("button");return r.type="button",r.className=e,r.textContent=this.#e.strings().draftSkill,r.addEventListener("click",()=>n()),[r]}#f(e){let n=this.#e.strings();this.#n="edit";let r=document.createElement("button"),o=lE(e??XI,n,()=>r.click()),i=document.createElement("button");i.type="button",i.className="skill-editor-btn skill-editor-btn--ghost",i.textContent=n.cancel,i.addEventListener("click",()=>this.back()),r.type="button",r.className="skill-editor-btn skill-editor-btn--primary",r.textContent=e===null?n.create:n.save,r.addEventListener("click",()=>{this.#g(e,o.read(),c=>{o.showError(c.message??n.skillSaveFailed,c.field)})});let s=document.createElement("span");s.className="skill-editor-grow";let a=[];if(e?.enabled===!0){let c=document.createElement("button");c.type="button",c.className="skill-editor-btn skill-editor-btn--danger",c.textContent=n.turnOff,c.addEventListener("click",()=>{this.#v(e,!1)}),a.push(c)}a.push(s,i,r),this.#e.view.show({title:e===null?n.newSkillTitle:n.editSkillTitle,...e===null?{}:{sub:`/${e.name}`},body:[o.form],footer:a})}async#g(e,n,r){let o=this.#o,i=this.#r,s=e===null?await o.create(n):await o.update(e.id,n);if(i===this.#r){if(!s.ok){r(s);return}this.#u(s.value,this.#e.strings().skillSaved)}}async#v(e,n){let r=this.#o,o=this.#r,i=await r.setEnabled(e.id,n);if(o!==this.#r)return;let s=this.#e.strings();if(!i.ok){this.#n="list",this.#a(),this.#e.view.announce(i.message??s.skillSaveFailed);return}this.#u(i.value,n?s.skillTurnedOn:s.skillTurnedOff)}#u(e,n){let r=this.#t.some(o=>o.id===e.id);this.#t=r?this.#t.map(o=>o.id===e.id?e:o):[e,...this.#t],this.#n="list",this.#a(),this.#e.view.announce(F(n,{name:e.name})),this.#e.onChanged()}};var JI=new Set(["ADDRESS","ARTICLE","ASIDE","BLOCKQUOTE","DD","DIV","DL","DT","FIGCAPTION","FIGURE","FOOTER","H1","H2","H3","H4","H5","H6","HEADER","HR","MAIN","NAV","OL","P","SECTION","UL"]);function Al(t){let e=t.cloneNode(!0);for(let n of Array.from(e.querySelectorAll("button")))n.remove();return{text:tC(cE(e)),html:e.innerHTML}}function cE(t){if(t.nodeType===Node.TEXT_NODE)return t.nodeValue.replace(/\s+/g," ");if(t.nodeType!==Node.ELEMENT_NODE)return"";let e=t,n=e.tagName;if(n==="BR")return`
`;if(n==="PRE")return`

${uE(e)}

`;if(n==="TABLE")return`

${eC(e)}

`;if(n==="UL"||n==="OL")return`

${QI(e,n==="OL")}

`;let r=dE(e);return JI.has(n)?`

${r}

`:r}function dE(t){let e="";for(let n of Array.from(t.childNodes))e+=cE(n);return e}function QI(t,e){return Array.from(t.children).map((n,r)=>`${e?`${r+1}. `:"- "}${dE(n).trim()}`).join(`
`)}function eC(t){return Array.from(t.querySelectorAll("tr")).map(e=>Array.from(e.children).map(n=>uE(n).replace(/\s+/g," ").trim()).join("	")).join(`
`)}function uE(t){return t.textContent}function tC(t){return t.replace(/[^\S\n]+\n/g,`
`).replace(/\n{3,}/g,`

`).trim()}var nC=1500;function Yh(t,e){if(pE(t)!==null)return;let n=Rl(t,e.strings),r=e.text;r!==void 0&&n.appendChild(rC(e.strings,r,e.html)),e.onFeedback!==void 0&&n.append(hE("up",e.strings.feedbackUp,e.onFeedback),hE("down",e.strings.feedbackDown,e.onFeedback))}function Rl(t,e){let n=pE(t);if(n!==null)return n;let r=document.createElement("div");return r.className="message-actions",r.setAttribute("part","message-actions"),r.setAttribute("role","group"),r.setAttribute("aria-label",e.messageActions),t.after(r),r}function pE(t){let e=t.nextElementSibling;return e?.classList.contains("message-actions")===!0?e:null}function Il(t,e,n){let r=document.createElement("button");r.type="button",r.className=`message-action message-action--${t}`,r.setAttribute("part",`message-action message-action-${t}`),qh(r,e);let o=document.createElement("span");return o.className="message-action-icon",o.setAttribute("part",`message-action-icon message-action-icon-${t}`),o.setAttribute("aria-hidden","true"),o.innerHTML=n,r.appendChild(o),r}function qh(t,e){t.title=e,t.setAttribute("aria-label",e),t.dataset.tooltip=e}function rC(t,e,n){let r=Il("copy",t.copyMessage,If);return r.addEventListener("click",()=>{oC(e(),n?.()).then(o=>{iC(r,o?t.copied:t.copyFailed,t.copyMessage)})}),r}async function oC(t,e){let n=navigator.clipboard;if(n===void 0)return!1;if(e!==void 0&&typeof ClipboardItem=="function")try{return await n.write([new ClipboardItem({"text/plain":new Blob([t],{type:"text/plain"}),"text/html":new Blob([e],{type:"text/html"})})]),!0}catch{}try{return await n.writeText(t),!0}catch{return!1}}function hE(t,e,n){let r=Il(t,e,t==="up"?Nf:Of);return r.addEventListener("click",()=>{let o=r.getAttribute("aria-pressed")==="true";r.setAttribute("aria-pressed",o?"false":"true"),n(t)}),r.setAttribute("aria-pressed","false"),r}function iC(t,e,n){qh(t,e),t.classList.add("message-action--confirmed"),setTimeout(()=>{qh(t,n),t.classList.remove("message-action--confirmed")},nC)}var Cl=class{#e;#t=null;constructor(e){this.#e=e}forget(){this.#t=null}attach(e,n){let r=this.#r(),o=r.has(wn.COPY),i="messageId"in n?n:null,s=i!==null&&r.has(wn.FEEDBACK),a=this.#e.threadId();(o||s)&&Yh(e,{strings:this.#e.strings(),...o?{text:()=>Al(e).text,html:()=>Al(e).html}:{},...s?{onFeedback:c=>{this.#e.element.dispatchEvent(new CustomEvent(Hc,{detail:{content:Al(e).text,rating:c,messageId:i.messageId,threadId:a,...i.runId===void 0?{}:{runId:i.runId}},bubbles:!0,composed:!0}))}}:{}}),r.has(wn.RETRY)&&this.#e.retryable()&&this.#n(Rl(e,this.#e.strings())),this.#e.follow()}withdrawRetry(){this.#t?.querySelector(".message-action--retry")?.remove(),this.#t=null}#n(e){this.withdrawRetry();let n=Il("retry",this.#e.strings().retryMessage,Cf);n.addEventListener("click",()=>{this.#e.retry()}),e.prepend(n),this.#t=e}#r(){let e=this.#e.element.getAttribute("data-message-actions");return e===null?new Set([wn.COPY,wn.RETRY]):new Set(Lr(e))}};function sC(t,e){this.v=t,this.k=e}function fE(t,e){(e==null||e>t.length)&&(e=t.length);for(var n=0,r=Array(e);n<e;n++)r[n]=t[n];return r}function aC(t){if(Array.isArray(t))return t}function lC(t,e){var n=t==null?null:typeof Symbol<"u"&&t[Symbol.iterator]||t["@@iterator"];if(n!=null){var r,o,i,s,a=[],c=!0,l=!1;try{if(i=(n=n.call(t)).next,e===0){if(Object(n)!==n)return;c=!1}else for(;!(c=(r=i.call(n)).done)&&(a.push(r.value),a.length!==e);c=!0);}catch(d){l=!0,o=d}finally{try{if(!c&&n.return!=null&&(s=n.return(),Object(s)!==s))return}finally{if(l)throw o}}return a}}function cC(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function dC(t,e){return aC(t)||lC(t,e)||uC(t,e)||cC()}function uC(t,e){if(t){if(typeof t=="string")return fE(t,e);var n={}.toString.call(t).slice(8,-1);return n==="Object"&&t.constructor&&(n=t.constructor.name),n==="Map"||n==="Set"?Array.from(t):n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?fE(t,e):void 0}}function Nl(t){var e,n;function r(i,s){try{var a=t[i](s),c=a.value,l=c instanceof sC;Promise.resolve(l?c.v:c).then(function(d){if(l){var h=i==="return"&&c.k?i:"next";if(!c.k||d.done)return r(h,d);d=t[h](d).value}o(!!a.done,d)},function(d){r("throw",d)})}catch(d){o(2,d)}}function o(i,s){i===2?e.reject(s):e.resolve({value:s,done:i}),(e=e.next)?r(e.key,e.arg):n=null}this._invoke=function(i,s){return new Promise(function(a,c){var l={key:i,arg:s,resolve:a,reject:c,next:null};n?n=n.next=l:(e=n=l,r(i,s))})},typeof t.return!="function"&&(this.return=void 0)}Nl.prototype[typeof Symbol=="function"&&Symbol.asyncIterator||"@@asyncIterator"]=function(){return this},Nl.prototype.next=function(t){return this._invoke("next",t)},Nl.prototype.throw=function(t){return this._invoke("throw",t)},Nl.prototype.return=function(t){return this._invoke("return",t)};var IE=Object.entries,mE=Object.setPrototypeOf,hC=Object.isFrozen,CE=Object.getPrototypeOf,NE=Object.getOwnPropertyDescriptor,Be=Object.freeze,Xe=Object.seal,Hr=Object.create,OE=typeof Reflect<"u"&&Reflect,ip=OE.apply,sp=OE.construct;Be||(Be=function(e){return e});Xe||(Xe=function(e){return e});ip||(ip=function(e,n){for(var r=arguments.length,o=new Array(r>2?r-2:0),i=2;i<r;i++)o[i-2]=arguments[i];return e.apply(n,o)});sp||(sp=function(e){for(var n=arguments.length,r=new Array(n>1?n-1:0),o=1;o<n;o++)r[o-1]=arguments[o];return new e(...r)});var Yt=Ce(Array.prototype.forEach);Array.prototype.indexOf;var pC=Ce(Array.prototype.lastIndexOf),gE=Ce(Array.prototype.pop),Qo=Ce(Array.prototype.push),fC=Ce(Array.prototype.slice),mC=Ce(Array.prototype.splice),Fr=Array.isArray,Kh=ME(Set),Xh=Ce(Set.prototype.add),ei=Ce(Set.prototype.has),Kn=Ce(String.prototype.toLowerCase),Jh=Ce(String.prototype.toString),vE=Ce(String.prototype.match),ti=Ce(String.prototype.replace),bE=Ce(String.prototype.indexOf),gC=Ce(String.prototype.trim),vC=Ce(Number.prototype.toString),bC=Ce(Boolean.prototype.toString),yE=typeof BigInt>"u"?null:Ce(BigInt.prototype.toString),wE=typeof Symbol>"u"?null:Ce(Symbol.prototype.toString),it=Ce(Object.prototype.hasOwnProperty),ni=Ce(Object.prototype.toString),Ke=Ce(RegExp.prototype.test),Kt=ME(TypeError);function Ce(t){return function(e){e instanceof RegExp&&(e.lastIndex=0);for(var n=arguments.length,r=new Array(n>1?n-1:0),o=1;o<n;o++)r[o-1]=arguments[o];return ip(t,e,r)}}function ME(t){return function(){for(var e=arguments.length,n=new Array(e),r=0;r<e;r++)n[r]=arguments[r];return sp(t,n)}}function ae(t,e){let n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:Kn;if(mE&&mE(t,null),!Fr(e))return t;let r=e.length;for(;r--;){let o=e[r];if(typeof o=="string"){let i=n(o);i!==o&&(hC(e)||(e[r]=i),o=i)}t[o]=!0}return t}function yC(t){for(let e=0;e<t.length;e++)it(t,e)||(t[e]=null);return t}function ut(t){let e=Hr(null);for(let r of IE(t)){var n=dC(r,2);let o=n[0],i=n[1];it(t,o)&&(Fr(i)?e[o]=yC(i):i&&typeof i=="object"&&i.constructor===Object?e[o]=ut(i):e[o]=i)}return e}function wC(t){switch(typeof t){case"string":return t;case"number":return vC(t);case"boolean":return bC(t);case"bigint":return yE?yE(t):"0";case"symbol":return wE?wE(t):"Symbol()";case"undefined":return ni(t);case"function":case"object":{if(t===null)return ni(t);let e=t,n=ft(e,"toString");if(typeof n=="function"){let r=n(e);return typeof r=="string"?r:ni(r)}return ni(t)}default:return ni(t)}}function ft(t,e){for(;t!==null;){let r=NE(t,e);if(r){if(r.get)return Ce(r.get);if(typeof r.value=="function")return Ce(r.value)}t=CE(t)}function n(){return null}return n}function xC(t,e){for(;t!==null;){let n=NE(t,e);if(n)return n.get?Ce(n.get):null;t=CE(t)}return null}function EC(t){try{return Ke(t,""),!0}catch{return!1}}var xE=Be(["a","abbr","acronym","address","area","article","aside","audio","b","bdi","bdo","big","blink","blockquote","body","br","button","canvas","caption","center","cite","code","col","colgroup","content","data","datalist","dd","decorator","del","details","dfn","dialog","dir","div","dl","dt","element","em","fieldset","figcaption","figure","font","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","img","input","ins","kbd","label","legend","li","main","map","mark","marquee","menu","menuitem","meter","nav","nobr","ol","optgroup","option","output","p","picture","pre","progress","q","rp","rt","ruby","s","samp","search","section","select","shadow","slot","small","source","spacer","span","strike","strong","style","sub","summary","sup","table","tbody","td","template","textarea","tfoot","th","thead","time","tr","track","tt","u","ul","var","video","wbr"]),Qh=Be(["svg","a","altglyph","altglyphdef","altglyphitem","animatecolor","animatemotion","animatetransform","circle","clippath","defs","desc","ellipse","enterkeyhint","exportparts","filter","font","g","glyph","glyphref","hkern","image","inputmode","line","lineargradient","marker","mask","metadata","mpath","part","path","pattern","polygon","polyline","radialgradient","rect","stop","style","switch","symbol","text","textpath","title","tref","tspan","view","vkern"]),ep=Be(["feBlend","feColorMatrix","feComponentTransfer","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feDistantLight","feDropShadow","feFlood","feFuncA","feFuncB","feFuncG","feFuncR","feGaussianBlur","feImage","feMerge","feMergeNode","feMorphology","feOffset","fePointLight","feSpecularLighting","feSpotLight","feTile","feTurbulence"]),_C=Be(["animate","color-profile","cursor","discard","font-face","font-face-format","font-face-name","font-face-src","font-face-uri","foreignobject","hatch","hatchpath","mesh","meshgradient","meshpatch","meshrow","missing-glyph","script","set","solidcolor","unknown","use"]),tp=Be(["math","menclose","merror","mfenced","mfrac","mglyph","mi","mlabeledtr","mmultiscripts","mn","mo","mover","mpadded","mphantom","mroot","mrow","ms","mspace","msqrt","mstyle","msub","msup","msubsup","mtable","mtd","mtext","mtr","munder","munderover","mprescripts"]),TC=Be(["maction","maligngroup","malignmark","mlongdiv","mscarries","mscarry","msgroup","mstack","msline","msrow","semantics","annotation","annotation-xml","mprescripts","none"]),EE=Be(["#text"]),_E=Be(["accept","action","align","alt","autocapitalize","autocomplete","autopictureinpicture","autoplay","background","bgcolor","border","capture","cellpadding","cellspacing","checked","cite","class","clear","color","cols","colspan","command","commandfor","controls","controlslist","coords","crossorigin","datetime","decoding","default","dir","disabled","disablepictureinpicture","disableremoteplayback","download","draggable","enctype","enterkeyhint","exportparts","face","for","headers","height","hidden","high","href","hreflang","id","inert","inputmode","integrity","ismap","kind","label","lang","list","loading","loop","low","max","maxlength","media","method","min","minlength","multiple","muted","name","nonce","noshade","novalidate","nowrap","open","optimum","part","pattern","placeholder","playsinline","popover","popovertarget","popovertargetaction","poster","preload","pubdate","radiogroup","readonly","rel","required","rev","reversed","role","rows","rowspan","spellcheck","scope","selected","shape","size","sizes","slot","span","srclang","start","src","srcset","step","style","summary","tabindex","title","translate","type","usemap","valign","value","width","wrap","xmlns"]),np=Be(["accent-height","accumulate","additive","alignment-baseline","amplitude","ascent","attributename","attributetype","azimuth","basefrequency","baseline-shift","begin","bias","by","class","clip","clippathunits","clip-path","clip-rule","color","color-interpolation","color-interpolation-filters","color-profile","color-rendering","cx","cy","d","dx","dy","diffuseconstant","direction","display","divisor","dominant-baseline","dur","edgemode","elevation","end","exponent","fill","fill-opacity","fill-rule","filter","filterunits","flood-color","flood-opacity","font-family","font-size","font-size-adjust","font-stretch","font-style","font-variant","font-weight","fx","fy","g1","g2","glyph-name","glyphref","gradientunits","gradienttransform","height","href","id","image-rendering","in","in2","intercept","k","k1","k2","k3","k4","kerning","keypoints","keysplines","keytimes","lang","lengthadjust","letter-spacing","kernelmatrix","kernelunitlength","lighting-color","local","marker-end","marker-mid","marker-start","markerheight","markerunits","markerwidth","maskcontentunits","maskunits","max","mask","mask-type","media","method","mode","min","name","numoctaves","offset","operator","opacity","order","orient","orientation","origin","overflow","paint-order","path","pathlength","patterncontentunits","patterntransform","patternunits","pointer-events","points","preservealpha","preserveaspectratio","primitiveunits","r","rx","ry","radius","refx","refy","repeatcount","repeatdur","restart","result","rotate","scale","seed","shape-rendering","slope","specularconstant","specularexponent","spreadmethod","startoffset","stddeviation","stitchtiles","stop-color","stop-opacity","stroke-dasharray","stroke-dashoffset","stroke-linecap","stroke-linejoin","stroke-miterlimit","stroke-opacity","stroke","stroke-width","style","surfacescale","systemlanguage","tabindex","tablevalues","targetx","targety","transform","transform-origin","text-anchor","text-decoration","text-orientation","text-rendering","textlength","type","u1","u2","unicode","values","vector-effect","viewbox","visibility","version","vert-adv-y","vert-origin-x","vert-origin-y","width","word-spacing","wrap","writing-mode","xchannelselector","ychannelselector","x","x1","x2","xmlns","y","y1","y2","z","zoomandpan"]),TE=Be(["accent","accentunder","align","bevelled","close","columnalign","columnlines","columnspacing","columnspan","denomalign","depth","dir","display","displaystyle","encoding","fence","frame","height","href","id","largeop","length","linethickness","lquote","lspace","mathbackground","mathcolor","mathsize","mathvariant","maxsize","minsize","movablelimits","notation","numalign","open","rowalign","rowlines","rowspacing","rowspan","rspace","rquote","scriptlevel","scriptminsize","scriptsizemultiplier","selection","separator","separators","stretchy","subscriptshift","supscriptshift","symmetric","voffset","width","xmlns"]),Ol=Be(["xlink:href","xml:id","xlink:title","xml:space","xmlns:xlink"]),SC=Xe(/{{[\w\W]*|^[\w\W]*}}/g),kC=Xe(/<%[\w\W]*|^[\w\W]*%>/g),AC=Xe(/\${[\w\W]*/g),RC=Xe(/^data-[\-\w.\u00B7-\uFFFF]+$/),IC=Xe(/^aria-[\-\w]+$/),SE=Xe(/^(?:(?:(?:f|ht)tps?|mailto|tel|callto|sms|cid|xmpp|matrix):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i),CC=Xe(/^(?:\w+script|data):/i),NC=Xe(/[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g),OC=Xe(/^html$/i),MC=Xe(/^[a-z][.\w]*(-[.\w]+)+$/i),rp=Xe(/<[/\w!]/g),kE=Xe(/<[/\w]/g),PC=Xe(/<\/no(script|embed|frames)/i),AE=Xe(/\/>/i),ze={element:1,attribute:2,text:3,cdataSection:4,entityReference:5,entityNode:6,processingInstruction:7,comment:8,document:9,documentType:10,documentFragment:11,notation:12},LC=Be(ae({},["style","script","xmp","iframe","noembed","noframes","plaintext","noscript"])),zC=function(){return typeof window>"u"?null:window},DC=function(e,n){if(typeof e!="object"||typeof e.createPolicy!="function")return null;let r=null,o="data-tt-policy-suffix";n&&n.hasAttribute(o)&&(r=n.getAttribute(o));let i="dompurify"+(r?"#"+r:"");try{return e.createPolicy(i,{createHTML(s){return s},createScriptURL(s){return s}})}catch{return console.warn("TrustedTypes policy "+i+" could not be created."),null}},RE=function(){return{afterSanitizeAttributes:[],afterSanitizeElements:[],afterSanitizeShadowDOM:[],beforeSanitizeAttributes:[],beforeSanitizeElements:[],beforeSanitizeShadowDOM:[],uponSanitizeAttribute:[],uponSanitizeElement:[],uponSanitizeShadowNode:[]}},un=function(e,n,r,o){return it(e,n)&&Fr(e[n])?ae(o.base?ut(o.base):{},e[n],o.transform):r},op=function(e,n,r){let o=it(e,n)?e[n]:void 0;return o&&typeof o=="object"?ut(o):r()};function PE(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:zC(),e=M=>PE(M);if(e.version="3.4.17",e.removed=[],!t||!t.document||t.document.nodeType!==ze.document||!t.Element)return e.isSupported=!1,e;let n=t.document,r=n,o=r.currentScript;t.DocumentFragment;let i=t.HTMLTemplateElement,s=t.Node,a=t.Element,c=t.NodeFilter;t.NamedNodeMap===void 0&&(t.NamedNodeMap||t.MozNamedAttrMap),t.HTMLFormElement;let l=t.DOMParser,d=t.trustedTypes,h=a.prototype,m=ft(h,"cloneNode"),f=ft(h,"remove"),u=ft(h,"removeAttributeNode"),v=ft(h,"nextSibling"),E=ft(h,"childNodes"),T=ft(h,"parentNode"),w=ft(h,"shadowRoot"),D=ft(h,"attributes"),S=s&&s.prototype?ft(s.prototype,"nodeType"):null,g=s&&s.prototype?ft(s.prototype,"nodeName"):null,x=s&&s.prototype?ft(s.prototype,"ownerDocument"):null,b=function(p){return S?S(p):p.nodeType},k=function(p){return g?g(p):p.nodeName},I=xC(h,"namespaceURI"),P=function(p){return I?I(p):p.namespaceURI};if(typeof i=="function"){let M=n.createElement("template");M.content&&M.content.ownerDocument&&(n=M.content.ownerDocument)}let $,L="",ie,De=!1,pe=0,_t=function(){if(pe>0)throw Kt('A configured TRUSTED_TYPES_POLICY callback (createHTML or createScriptURL) must not call DOMPurify.sanitize, as that causes infinite recursion. Do not pass a policy whose callbacks wrap DOMPurify as TRUSTED_TYPES_POLICY; see the "DOMPurify and Trusted Types" section of the README.')},Tt=function(p){_t(),pe++;try{return $.createHTML(p)}finally{pe--}},Xr=function(p){_t(),pe++;try{return $.createScriptURL(p)}finally{pe--}},nc=function(){return De||(ie=DC(d,o),De=!0),ie},de=n,xe=de.implementation,Me=de.createNodeIterator,St=de.createDocumentFragment,rc=de.getElementsByTagName,fn=r.importNode,he=RE();e.isSupported=typeof IE=="function"&&typeof T=="function"&&xe&&xe.createHTMLDocument!==void 0;let Jr=SC,D_=kC,$_=AC,U_=RC,H_=IC,F_=CC,Ip=NC,G_=MC,Cp=SE,Te=null,oc=ae({},[...xE,...Qh,...ep,...tp,...EE]),Se=null,ic=ae({},[..._E,...np,...TE,...Ol]),kt=Object.seal(Hr(null,{tagNameCheck:{writable:!0,configurable:!1,enumerable:!0,value:null},attributeNameCheck:{writable:!0,configurable:!1,enumerable:!0,value:null},allowCustomizedBuiltInElements:{writable:!0,configurable:!1,enumerable:!0,value:!1}})),Qr=null,Np=null,Jt=Object.seal(Hr(null,{tagCheck:{writable:!0,configurable:!1,enumerable:!0,value:null},attributeCheck:{writable:!0,configurable:!1,enumerable:!0,value:null}})),Op=!0,sc=!0,Mp=!1,ac=!0,Ht=!1,mn=!0,gn=!1,lc=!1,fi=null,mi=null,cc=!1,rr=!1,gi=!1,vi=!1,Pp=!0,Lp=!1,zp="user-content-",dc=!0,uc=!1,vn=null,or={},bn=null,Dp=ae({},["annotation-xml","audio","colgroup","desc","foreignobject","head","iframe","math","mi","mn","mo","ms","mtext","noembed","noframes","noscript","plaintext","script","selectedcontent","style","svg","template","thead","title","video","xmp"]),$p=null,Up=ae({},["audio","video","img","source","image","track"]),Hp=null,Fp=ae({},["alt","class","for","id","label","name","pattern","placeholder","role","summary","title","value","style","xmlns"]),bi="http://www.w3.org/1998/Math/MathML",yi="http://www.w3.org/2000/svg",At="http://www.w3.org/1999/xhtml",ir=At,hc=!1,pc=null,B_=ae({},[bi,yi,At],Jh),Gp=Be(["mi","mo","mn","ms","mtext"]),fc=ae({},Gp),Bp=Be(["annotation-xml"]),mc=ae({},Bp),V_=ae({},["title","style","font","a","script"]),eo=null,Z_=["application/xhtml+xml","text/html"],j_="text/html",Oe=null,sr=null,W_=n.createElement("form"),Vp=function(p){return p instanceof RegExp||p instanceof Function},gc=function(){let p=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};if(sr&&sr===p)return;(!p||typeof p!="object")&&(p={}),p=ut(p),eo=Z_.indexOf(p.PARSER_MEDIA_TYPE)===-1?j_:p.PARSER_MEDIA_TYPE,Oe=eo==="application/xhtml+xml"?Jh:Kn,Te=un(p,"ALLOWED_TAGS",oc,{transform:Oe}),Se=un(p,"ALLOWED_ATTR",ic,{transform:Oe}),pc=un(p,"ALLOWED_NAMESPACES",B_,{transform:Jh}),Hp=un(p,"ADD_URI_SAFE_ATTR",Fp,{transform:Oe,base:Fp}),$p=un(p,"ADD_DATA_URI_TAGS",Up,{transform:Oe,base:Up}),bn=un(p,"FORBID_CONTENTS",Dp,{transform:Oe}),Qr=un(p,"FORBID_TAGS",ut({}),{transform:Oe}),Np=un(p,"FORBID_ATTR",ut({}),{transform:Oe}),or=it(p,"USE_PROFILES")?p.USE_PROFILES&&typeof p.USE_PROFILES=="object"?ut(p.USE_PROFILES):p.USE_PROFILES:!1,Op=p.ALLOW_ARIA_ATTR!==!1,sc=p.ALLOW_DATA_ATTR!==!1,Mp=p.ALLOW_UNKNOWN_PROTOCOLS||!1,ac=p.ALLOW_SELF_CLOSE_IN_ATTR!==!1,Ht=p.SAFE_FOR_TEMPLATES||!1,mn=p.SAFE_FOR_XML!==!1,gn=p.WHOLE_DOCUMENT||!1,rr=p.RETURN_DOM||!1,gi=p.RETURN_DOM_FRAGMENT||!1,vi=p.RETURN_TRUSTED_TYPE||!1,cc=p.FORCE_BODY||!1,Pp=p.SANITIZE_DOM!==!1,Lp=p.SANITIZE_NAMED_PROPS||!1,dc=p.KEEP_CONTENT!==!1,uc=p.IN_PLACE||!1,Cp=EC(p.ALLOWED_URI_REGEXP)?p.ALLOWED_URI_REGEXP:SE,ir=typeof p.NAMESPACE=="string"?p.NAMESPACE:At,fc=op(p,"MATHML_TEXT_INTEGRATION_POINTS",()=>ae({},Gp)),mc=op(p,"HTML_INTEGRATION_POINTS",()=>ae({},Bp));let _=op(p,"CUSTOM_ELEMENT_HANDLING",()=>Hr(null));if(kt=Hr(null),it(_,"tagNameCheck")&&Vp(_.tagNameCheck)&&(kt.tagNameCheck=_.tagNameCheck),it(_,"attributeNameCheck")&&Vp(_.attributeNameCheck)&&(kt.attributeNameCheck=_.attributeNameCheck),it(_,"allowCustomizedBuiltInElements")&&typeof _.allowCustomizedBuiltInElements=="boolean"&&(kt.allowCustomizedBuiltInElements=_.allowCustomizedBuiltInElements),Xe(kt),Ht&&(sc=!1),gi&&(rr=!0),or&&(Te=ae({},EE),Se=Hr(null),or.html===!0&&(ae(Te,xE),ae(Se,_E)),or.svg===!0&&(ae(Te,Qh),ae(Se,np),ae(Se,Ol)),or.svgFilters===!0&&(ae(Te,ep),ae(Se,np),ae(Se,Ol)),or.mathMl===!0&&(ae(Te,tp),ae(Se,TE),ae(Se,Ol))),Jt.tagCheck=null,Jt.attributeCheck=null,it(p,"ADD_TAGS")&&(typeof p.ADD_TAGS=="function"?Jt.tagCheck=p.ADD_TAGS:Fr(p.ADD_TAGS)&&(Te===oc&&(Te=ut(Te)),ae(Te,p.ADD_TAGS,Oe))),it(p,"ADD_ATTR")&&(typeof p.ADD_ATTR=="function"?Jt.attributeCheck=p.ADD_ATTR:Fr(p.ADD_ATTR)&&(Se===ic&&(Se=ut(Se)),ae(Se,p.ADD_ATTR,Oe))),it(p,"ADD_FORBID_CONTENTS")&&Fr(p.ADD_FORBID_CONTENTS)&&(bn===Dp&&(bn=ut(bn)),ae(bn,p.ADD_FORBID_CONTENTS,Oe)),dc&&(Te["#text"]=!0),gn&&ae(Te,["html","head","body"]),Te.table&&(ae(Te,["tbody"]),delete Qr.tbody),p.TRUSTED_TYPES_POLICY){if(typeof p.TRUSTED_TYPES_POLICY.createHTML!="function")throw Kt('TRUSTED_TYPES_POLICY configuration option must provide a "createHTML" hook.');if(typeof p.TRUSTED_TYPES_POLICY.createScriptURL!="function")throw Kt('TRUSTED_TYPES_POLICY configuration option must provide a "createScriptURL" hook.');let N=$;$=p.TRUSTED_TYPES_POLICY;try{L=Tt("")}catch(O){throw $=N,O}}else p.TRUSTED_TYPES_POLICY===null?($=void 0,L=""):($===void 0&&($=nc()),$&&typeof L=="string"&&(L=Tt("")));Be&&Be(p),sr=p},Zp=ae({},[...Qh,...ep,..._C]),jp=ae({},[...tp,...TC]),q_=function(p,_,N){return _.namespaceURI===At?p==="svg":_.namespaceURI===bi?p==="svg"&&(N==="annotation-xml"||fc[N]):!!Zp[p]},Y_=function(p,_,N){return _.namespaceURI===At?p==="math":_.namespaceURI===yi?p==="math"&&mc[N]:!!jp[p]},K_=function(p,_,N){return _.namespaceURI===yi&&!mc[N]||_.namespaceURI===bi&&!fc[N]?!1:!jp[p]&&(V_[p]||!Zp[p])},X_=function(p){let _=P(p),N=Kn(k(p)),O=T(p),V,q;return O&&b(O)===ze.element?(V={namespaceURI:P(O)},q=Kn(k(O))):(V={namespaceURI:ir},q="template"),pc[_]?_===yi?q_(N,V,q):_===bi?Y_(N,V,q):_===At?K_(N,V,q):!!(eo==="application/xhtml+xml"&&pc[_]):!1},Qt=function(p){Qo(e.removed,{element:p});try{T(p).removeChild(p)}catch{if(f(p),!T(p))throw Kt("a node selected for removal could not be detached from its tree and cannot be safely returned; refusing to sanitize in place")}},Wp=function(p,_,N){try{u(p,_)}catch{try{p.removeAttribute(N)}catch{}}},vc=function(p){yc(p);let _=E(p);_&&Yt(fC(_),O=>{try{f(O)}catch{}});let N=b(p)===ze.element?D(p):null;if(N)for(let O=N.length-1;O>=0;--O){let V=N[O],q=V&&V.name;typeof q=="string"&&Wp(p,V,q)}},ar=function(p,_,N){if(!N)try{N=_.getAttributeNode(p)}catch{N=null}Qo(e.removed,{attribute:N||null,from:_});try{N?u(_,N):_.removeAttribute(p)}catch{try{_.removeAttribute(p)}catch{}}if(p==="is")if(rr||gi)try{Qt(_)}catch{}else try{_.setAttribute(p,"")}catch{}},qp=function(p){let _=D(p);if(_)for(let N=_.length-1;N>=0;--N){let O=_[N],V=O&&O.name;typeof V!="string"||Se[Oe(V)]||Wp(p,O,V)}},bc=function(p,_){let N=arguments.length>2&&arguments[2]!==void 0?arguments[2]:!1,O=[p];for(;O.length>0;){let V=O.pop();if(_(V)===!1)continue;if(N&&b(V)===ze.element){let te=w(V);en(te)&&O.push(te)}let q=E(V);if(q)for(let te=q.length-1;te>=0;--te)O.push(q[te])}},yc=function(p){bc(p,_=>{b(_)===ze.element&&qp(_)})},wc=function(p){let _=[];return bc(p,N=>{_.push(N)},!0),_},J_=function(p,_){let N=Kh();Yt(wc(p),O=>{b(O)===ze.element&&Xh(N,O)}),Yt(_,O=>{b(O)===ze.element&&!ei(N,O)&&qp(O)})},Yp=function(p,_){let N=!1;return Yt(e.removed,O=>{O.element&&(N=N||O.element===p,yc(O.element))}),J_(p,_),N},Q_=8,eT=function(p,_){let N=vn,O=null,V=()=>(O||(O=Kh(),Yt(_,q=>{Xh(O,q)})),O);for(let q=0;;q++){let te=wc(p),$e=[p],Rt=!1;if(Yt(te,Qe=>{b(Qe)===ze.documentFragment?Qo($e,Qe):!Rt&&!ei(N,Qe)&&(Rt=ei(V(),Qe))}),!Rt)return;if(q>=Q_)throw Kt("the tree kept changing during in-place sanitization; refusing to return it");Yt($e,(Qe,rt)=>{tT(Qe,rt>0,p,V())})}},tT=function(p,_,N,O){let V=xc(p),q;for(;q=V.nextNode();)!ei(O,q)||ei(vn,q)||(_&&mt(he.uponSanitizeShadowNode,q,null),_c(q,N),Tc(q,N),en(q.content)&&no(q.content))},nT=function(p){vn&&Xh(vn,p)},Kp=function(p,_){return mn?p==="patchsrc"?!0:p==="for"&&_!=="label"&&_!=="output":!1},rT=function(p){mn&&bc(p,_=>{let N=b(_);if(N===ze.processingInstruction||N===ze.comment&&Ke(kE,_.data)){try{f(_)}catch{}return!1}if(N===ze.element){let O=_,V=Oe(k(_));try{O.hasAttribute&&O.hasAttribute("patchsrc")&&O.removeAttribute("patchsrc"),O.hasAttribute&&O.hasAttribute("for")&&Kp("for",V)&&O.removeAttribute("for")}catch{}}return!0})},Xp=function(p){let _=null,N=null;if(cc)p="<remove></remove>"+p;else{let q=vE(p,/^[\r\n\t ]+/);N=q&&q[0]}eo==="application/xhtml+xml"&&ir===At&&(p='<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>'+p+"</body></html>");let O=$?Tt(p):p;if(ir===At)try{_=new l().parseFromString(O,eo)}catch{}if(!_||!_.documentElement){_=xe.createDocument(ir,"template",null);try{_.documentElement.innerHTML=hc?L:O}catch{}}let V=_.body||_.documentElement;return p&&N&&V.insertBefore(n.createTextNode(N),V.childNodes[0]||null),ir===At?rc.call(_,gn?"html":"body")[0]:gn?_.documentElement:V},xc=function(p){let _=x?x(p):p.ownerDocument;return Me.call(_||p,p,c.SHOW_ELEMENT|c.SHOW_COMMENT|c.SHOW_TEXT|c.SHOW_PROCESSING_INSTRUCTION|c.SHOW_CDATA_SECTION,null)},wi=function(p){return p=ti(p,Jr," "),p=ti(p,D_," "),p=ti(p,$_," "),p},Ec=function(p){var _;Jp(p);let N=(_=p.querySelectorAll)===null||_===void 0?void 0:_.call(p,"template");N&&Yt(N,O=>{en(O.content)&&Ec(O.content)})},Jp=function(p){p.normalize();let _=x?x(p):p.ownerDocument,N=Me.call(_||p,p,c.SHOW_TEXT|c.SHOW_COMMENT|c.SHOW_CDATA_SECTION|c.SHOW_PROCESSING_INSTRUCTION,null),O=N.nextNode();for(;O;)O.data=wi(O.data),O=N.nextNode()},xi=function(p){let _=g?g(p):null;return typeof _!="string"||Oe(_)!=="form"?!1:typeof p.nodeName!="string"||typeof p.textContent!="string"||typeof p.removeChild!="function"||p.attributes!==D(p)||typeof p.removeAttribute!="function"||typeof p.removeAttributeNode!="function"||typeof p.getAttributeNode!="function"||typeof p.setAttribute!="function"||typeof p.namespaceURI!="string"||typeof p.insertBefore!="function"||typeof p.hasChildNodes!="function"||p.nodeType!==S(p)||p.childNodes!==E(p)},en=function(p){if(!S||typeof p!="object"||p===null)return!1;try{return S(p)===ze.documentFragment}catch{return!1}},to=function(p){if(!S||typeof p!="object"||p===null)return!1;try{return typeof S(p)=="number"}catch{return!1}};function mt(M,p,_){M.length!==0&&Yt(M,N=>{N.call(e,p,_,sr)})}let oT=function(p,_){return!!(mn&&p.hasChildNodes()&&!to(p.firstElementChild)&&Ke(rp,p.textContent)&&Ke(rp,p.innerHTML)||mn&&LC[_]&&b(p)===ze.element&&P(p)===At&&(to(p.firstElementChild)||typeof p.textContent=="string"&&Ke(rp,p.textContent))||p.nodeType===ze.processingInstruction||mn&&p.nodeType===ze.comment&&Ke(kE,p.data))},Ei=function(p,_){if(p instanceof RegExp)return Ke(p,_);if(p instanceof Function){for(var N=arguments.length,O=new Array(N>2?N-2:0),V=2;V<N;V++)O[V-2]=arguments[V];return!!p(_,...O)}return!1},iT=function(p,_,N){if(!Qr[_]&&tf(_)&&Ei(kt.tagNameCheck,_))return!1;if(dc&&!bn[_]&&!bn[Kn(_)]){let O=T(p),V=E(p);if(V&&O){let q=V.length;for(let te=q-1;te>=0;--te){let $e=p===N?m(V[te],!0):V[te];O.insertBefore($e,v(p))}}}return Qt(p),!0},Qp=function(p,_,N,O){return p.length===0?_:_===N||_===O?ut(_):_},lr=function(p,_){return p===_||T(p)!==null?!1:(uc&&yc(p),!0)},_c=function(p,_){if(nT(p),mt(he.beforeSanitizeElements,p,null),lr(p,_))return!0;if(xi(p))return Qt(p),!0;let N=Oe(k(p));if(Te=Qp(he.uponSanitizeElement,Te,oc,fi),mt(he.uponSanitizeElement,p,{tagName:N,allowedTags:Te}),lr(p,_))return!0;if(oT(p,N))return Qt(p),!0;if(Qr[N]||!(Jt.tagCheck instanceof Function&&Jt.tagCheck(N))&&!Te[N]){let O=iT(p,N,_);return O===!1&&(mt(he.afterSanitizeElements,p,null),lr(p,_))?!0:O}if(b(p)===ze.element&&!X_(p)||(N==="noscript"||N==="noembed"||N==="noframes")&&Ke(PC,p.innerHTML))return Qt(p),!0;if(Ht&&p.nodeType===ze.text){let O=wi(p.textContent);p.textContent!==O&&(Qo(e.removed,{element:p.cloneNode()}),p.textContent=O)}return mt(he.afterSanitizeElements,p,null),lr(p,_)},ef=function(p,_,N){if(Np[_]||Kp(_,p)||Pp&&(_==="id"||_==="name")&&(N in n||N in W_))return!1;let O=Se[_]||Jt.attributeCheck instanceof Function&&Jt.attributeCheck(_,p);return sc&&Ke(U_,_)||Op&&Ke(H_,_)?!0:O?Hp[_]||Ke(Cp,ti(N,Ip,""))||(_==="src"||_==="xlink:href"||_==="href")&&p!=="script"&&bE(N,"data:")===0&&$p[p]||Mp&&!Ke(F_,ti(N,Ip,""))?!0:!N:tf(p)&&Ei(kt.tagNameCheck,p)&&Ei(kt.attributeNameCheck,_,p)||_==="is"&&kt.allowCustomizedBuiltInElements&&Ei(kt.tagNameCheck,N)},sT=ae({},["annotation-xml","color-profile","font-face","font-face-format","font-face-name","font-face-src","font-face-uri","missing-glyph"]),tf=function(p){return!sT[Kn(p)]&&Ke(G_,p)},aT=function(p,_,N,O){if($&&typeof d=="object"&&typeof d.getAttributeType=="function"&&!N)switch(d.getAttributeType(p,_)){case"TrustedHTML":return Tt(O);case"TrustedScriptURL":return Xr(O)}return O},lT=function(p,_,N,O){try{return N?p.setAttributeNS(N,_,O):p.setAttribute(_,O),xi(p)?(Qt(p),!1):!0}catch{return ar(_,p),!1}},nf=function(p,_){return mn&&Ke(/((--!?|])>)|<\/(style|script|title|xmp|textarea|noscript|iframe|noembed|noframes)/i,_)?!0:Kn(p)==="attributename"&&vE(_,"href")!==null},Tc=function(p,_){if(mt(he.beforeSanitizeAttributes,p,null),lr(p,_))return;let N=p.attributes;if(!N||xi(p))return;Se=Qp(he.uponSanitizeAttribute,Se,ic,mi);let O={attrName:"",attrValue:"",keepAttr:!0,allowedAttributes:Se,forceKeepAttr:void 0},V=N.length,q=Oe(p.nodeName);for(;V--;){let te=N[V],$e=te.name,Rt=te.namespaceURI,Qe=te.value,rt=Oe($e),cr=Qe,ot=$e==="value"?cr:gC(cr),rf=!1;if(O.attrName=rt,O.attrValue=ot,O.keepAttr=!0,O.forceKeepAttr=void 0,mt(he.uponSanitizeAttribute,p,O),ot=O.attrValue,Lp&&(rt==="id"||rt==="name")&&bE(ot,zp)!==0&&(ar($e,p,te),ot=zp+ot,rf=!0),nf($e,ot)){ar($e,p,te);continue}if(!O.forceKeepAttr){if(!O.keepAttr){ar($e,p,te);continue}if(!ac&&Ke(AE,ot)){ar($e,p,te);continue}if(Ht&&(ot=wi(ot)),!ef(q,rt,ot)){ar($e,p,te);continue}ot=aT(q,rt,Rt,ot),ot!==cr&&lT(p,$e,Rt,ot)&&rf&&gE(e.removed)}}mt(he.afterSanitizeAttributes,p,null),lr(p,_)},no=function(p){let _=null,N=xc(p);for(mt(he.beforeSanitizeShadowDOM,p,null);_=N.nextNode();)if(mt(he.uponSanitizeShadowNode,_,null),_c(_,p),Tc(_,p),en(_.content)&&no(_.content),b(_)===ze.element){let O=w(_);en(O)&&(Sc(O),no(O))}Ht&&Jp(p),mt(he.afterSanitizeShadowDOM,p,null)},Sc=function(p){let _=[{node:p,shadow:null}];for(;_.length>0;){let N=_.pop();if(N.shadow){no(N.shadow);continue}let O=N.node,V=b(O)===ze.element,q=E(O);if(q)for(let te=q.length-1;te>=0;--te)_.push({node:q[te],shadow:null});if(V){let te=g?g(O):null;if(typeof te=="string"&&Oe(te)==="template"){let $e=O.content;en($e)&&_.push({node:$e,shadow:null})}}if(V){let te=w(O);en(te)&&_.push({node:null,shadow:te},{node:te,shadow:null})}}};return e.sanitize=function(M){let p=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},_=null,N=null,O=null,V=null;if(hc=!M,hc&&(M="<!-->"),typeof M!="string"&&!to(M)&&(M=wC(M),typeof M!="string"))throw Kt("dirty is not a string, aborting");if(!e.isSupported)return M;lc?(Te=fi,Se=mi):gc(p),(he.uponSanitizeElement.length>0||he.uponSanitizeAttribute.length>0)&&(Te=ut(Te)),he.uponSanitizeAttribute.length>0&&(Se=ut(Se)),e.removed=[];let q=uc&&typeof M!="string"&&to(M),te=[],$e=vn;if(q){rT(M);let rt=k(M);if(typeof rt=="string"){let cr=Oe(rt);if(!Te[cr]||Qr[cr])throw vc(M),Kt("root node is forbidden and cannot be sanitized in-place")}if(xi(M))throw vc(M),Kt("root node is clobbered and cannot be sanitized in-place");te=wc(M),vn=Kh()}else if(to(M))_=Xp("<!---->"),N=_.ownerDocument.importNode(M,!0),N.nodeType===ze.element&&N.nodeName==="BODY"||N.nodeName==="HTML"?_=N:_.appendChild(N),Sc(_);else{if(!rr&&!Ht&&!gn&&M.indexOf("<")===-1)return $&&vi?Tt(M):M;if(_=Xp(M),!_)return rr?null:vi?L:""}_&&cc&&Qt(_.firstChild);let Rt=q?M:_;try{q&&Sc(M);let rt=xc(Rt);for(;O=rt.nextNode();)_c(O,Rt),Tc(O,Rt),en(O.content)&&no(O.content);q&&eT(M,te)}catch(rt){throw q&&(vc(M),Yp(M,te)),rt}finally{vn=$e}if(q){if(Yp(M,te))throw Kt("a node selected for removal could not be safely returned; refusing to sanitize in place");return Ht&&Ec(M),M}if(rr){if(Ht&&Ec(_),gi)for(V=St.call(_.ownerDocument);_.firstChild;)V.appendChild(_.firstChild);else V=_;return(Se.shadowroot||Se.shadowrootmode)&&(V=fn.call(r,V,!0)),V}let Qe=gn?_.outerHTML:_.innerHTML;return gn&&Te["!doctype"]&&_.ownerDocument&&_.ownerDocument.doctype&&_.ownerDocument.doctype.name&&Ke(OC,_.ownerDocument.doctype.name)&&(Qe="<!DOCTYPE "+_.ownerDocument.doctype.name+`>
`+Qe),Ht&&(Qe=wi(Qe)),$&&vi?Tt(Qe):Qe},e.setConfig=function(){let M=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};gc(M),lc=!0,fi=Te,mi=Se},e.clearConfig=function(){sr=null,lc=!1,fi=null,mi=null,$=ie,L=""},e.isValidAttribute=function(M,p,_){sr||gc({});let N=Oe(M),O=Oe(p);return typeof _=="string"&&(nf(p,_)||!ac&&Ke(AE,_))?!1:ef(N,O,_)},e.addHook=function(M,p){typeof p=="function"&&it(he,M)&&Qo(he[M],p)},e.removeHook=function(M,p){if(it(he,M)){if(p!==void 0){let _=pC(he[M],p);return _===-1?void 0:mC(he[M],_,1)[0]}return gE(he[M])}},e.removeHooks=function(M){it(he,M)&&(he[M]=[])},e.removeAllHooks=function(){he=RE()},e}var LE=PE();function dp(){return{async:!1,breaks:!1,extensions:null,gfm:!0,hooks:null,pedantic:!1,renderer:null,silent:!1,tokenizer:null,walkTokens:null}}var er=dp();function jE(t){er=t}var Jn={exec:()=>null};function Xn(t){let e=[];return n=>{let r=Math.max(0,Math.min(3,n-1)),o=e[r];return o||(o=t(r),e[r]=o),o}}function J(t,e=""){let n=typeof t=="string"?t:t.source,r={replace:(o,i)=>{let s=typeof i=="string"?i:i.source;return s=s.replace(Fe.caret,"$1"),n=n.replace(o,s),r},getRegex:()=>new RegExp(n,e)};return r}var WE=((t="")=>{try{return!!new RegExp("(?<=1)(?<!1)"+t)}catch{return!1}})(),Fe={codeRemoveIndent:/^(?: {0,3}\t| {1,4})/gm,outputLinkReplace:/\\([\[\]])/g,indentCodeCompensation:/^(\s+)(?:```)/,beginningSpace:/^\s+/,endingHash:/#$/,startingSpaceChar:/^ /,endingSpaceChar:/ $/,endingSpaceTabChar:/[ \t]$/,nonSpaceChar:/[^ ]/,newLineCharGlobal:/\n/g,tabCharGlobal:/\t/g,leadingSpaceTab:/^[ \t]+/,multipleSpaceGlobal:/\s+/g,blankLine:/^[ \t]*$/,doubleBlankLine:/\n[ \t]*\n[ \t]*$/,blockquoteStart:/^ {0,3}>/,blockquoteSetextReplace:/\n {0,3}((?:=+|-+)[ \t]*)(?=\n|$)/g,blockquoteSetextReplace2:/^ {0,3}>[ \t]?/gm,blockquoteMarkerWhitespace:/^( {0,3}>)([ \t]+)/gm,listReplaceNesting:/^ {1,4}(?=( {4})*[^ ])/g,listIsTask:/^\[[ xX]\][ \t]+\S/,listReplaceTask:/^\[[ xX]\][ \t]+/,listTaskCheckbox:/\[[ xX]\]/,anyLine:/\n.*\n/,hrefBrackets:/^<(.*)>$/,tableDelimiter:/[:|]/,tableAlignChars:/^\||\| *$/g,tableRowBlankLine:/\n[ \t]*$/,tableAlignRight:/^ *-+: *$/,tableAlignCenter:/^ *:-+: *$/,tableAlignLeft:/^ *:-+ *$/,startATag:/^<a /i,endATag:/^<\/a>/i,startPreScriptTag:/^<(pre|code|kbd|script)(\s|>)/i,endPreScriptTag:/^<\/(pre|code|kbd|script)(\s|>)/i,startAngleBracket:/^</,endAngleBracket:/>$/,pedanticHrefTitle:/^([^'"]*[^\s])\s+(['"])(.*)\2/,unicodeAlphaNumeric:/[\p{L}\p{N}]/u,numericCharacterReference:/&#(?:(\d{1,7})|[Xx]([A-Fa-f0-9]{1,6}));/,numericCharacterReferenceOrAmpersand:/&#(?:(\d{1,7})|[Xx]([A-Fa-f0-9]{1,6}));|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/g,escapeTest:/[&<>"']/,escapeReplace:/[&<>"']/g,escapeTestNoEncode:/[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/,escapeReplaceNoEncode:/[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/g,caret:/(^|[^\[])\^/g,percentDecode:/%25/g,findPipe:/\|/g,splitPipe:/ \|/,slashPipe:/\\\|/g,carriageReturn:/\r\n|\r/g,spaceLine:/^ +$/gm,notSpaceStart:/^\S*/,endingNewline:/\n$/,listItemRegex:t=>new RegExp(`^( {0,3}${t})((?:[	 ][^\\n]*)?(?:\\n|$))`),nextBulletRegex:Xn(t=>new RegExp(`^ {0,${t}}(?:[*+-]|\\d{1,9}[.)])((?:[ 	][^\\n]*)?(?:\\n|$))`)),hrRegex:Xn(t=>new RegExp(`^ {0,${t}}((?:-[ 	]*){3,}|(?:_[ 	]*){3,}|(?:\\*[ 	]*){3,})(?:\\n+|$)`)),fencesBeginRegex:Xn(t=>new RegExp(`^ {0,${t}}(?:\`\`\`|~~~)`)),headingBeginRegex:Xn(t=>new RegExp(`^ {0,${t}}#{1,6}(?:\\s|$)`)),pedanticHeadingBeginRegex:Xn(t=>new RegExp(`^ {0,${t}}#`)),htmlBeginRegex:Xn(t=>new RegExp(`^ {0,${t}}(?:</?(?:${si})(?: +|$|/?>)|<(?:(?:script|pre|style|textarea)(?:[\\s>]|$)|!--)|<\\?|<![A-Za-z]|<!\\[CDATA\\[)`,"i")),blockquoteBeginRegex:Xn(t=>new RegExp(`^ {0,${t}}>`))},$C=/^(?:[ \t]*(?:\n|$))+/,UC=/^((?: {4}| {0,3}\t)[^\n]+(?:\n(?:[ \t]*(?:\n|$))*)?)+/,HC=/^ {0,3}(`{3,}(?=[^`\n]*(?:\n|$))|~{3,})([^\n]*)(?:\n|$)(?:|([\s\S]*?)(?:\n|$))(?: {0,3}(?:(?=`)\1`*|(?=~)\1~*) *(?=\n|$)|$)/,ii=/^ {0,3}((?:-[\t ]*){3,}|(?:_[ \t]*){3,}|(?:\*[ \t]*){3,})(?:\n+|$)/,FC=/^ {0,3}(#{1,6})(?=\s|$)(.*)(?:\n+|$)/,up=/ {0,3}(?:[*+-]|\d{1,9}[.)])/,qE=/^(?!bull |blockCode|fences|blockquote|heading|html|table)((?:.|\n(?!\s*?\n|bull |fences|blockquote|heading|hr|html|table))+?)\n {0,3}(=+|-+)[ \t]*(?:\n+|$)/,YE=J(qE).replace(/bull/g,up).replace(/blockCode/g,/(?: {4}| {0,3}\t)/).replace(/fences/g,/ {0,3}(?:`{3,}|~{3,})/).replace(/blockquote/g,/ {0,3}>/).replace(/heading/g,/ {0,3}#{1,6}(?:\s|$)/).replace(/hr/g,/ {0,3}(?:(?:-[\t ]*){3,}|(?:_[ \t]*){3,}|(?:\*[ \t]*){3,})(?:\n+|$)/).replace(/html/g,/ {0,3}<[^\n>]+>\n/).replace(/\|table/g,"").getRegex(),GC=J(qE).replace(/bull/g,up).replace(/blockCode/g,/(?: {4}| {0,3}\t)/).replace(/fences/g,/ {0,3}(?:`{3,}|~{3,})/).replace(/blockquote/g,/ {0,3}>/).replace(/heading/g,/ {0,3}#{1,6}(?:\s|$)/).replace(/hr/g,/ {0,3}(?:(?:-[\t ]*){3,}|(?:_[ \t]*){3,}|(?:\*[ \t]*){3,})(?:\n+|$)/).replace(/html/g,/ {0,3}<[^\n>]+>\n/).replace(/table/g,/ {0,3}\|?(?:[:\- ]*\|)+[\:\- ]*\n/).getRegex(),hp=/^([^\n]+(?:\n(?!hr|heading|lheading|blockquote|fences|list|html|table|[ \t]+\n)[^\n]+)*)/,BC=/^[^\n]+/,pp=/(?!\s*\])(?:\\[\s\S]|[^\[\]\\\n]|\n(?![ \t]*\n))+/,VC=J(/^ {0,3}\[(label)\]: *(?:\n[ \t]*)?([^<\s][^\s]*|<.*?>)(?:(?: +(?:\n[ \t]*)?| *\n[ \t]*)(title))? *(?:\n+|$)/).replace("label",pp).replace("title",/(?:"(?:\\[\s\S]|[^"\\])*"|'(?:\\[\s\S]|[^'\\\n]|\n(?!\n))*'|\((?:\\[\s\S]|[^()\\])*\))/).getRegex(),ZC=J(/^(bull)([ \t][^\n]*?)?(?:\n|$)/).replace(/bull/g,up).getRegex(),si="address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option|p|param|search|section|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul",fp=/<!--(?:-?>|[\s\S]*?(?:-->|$))/,jC=J("^ {0,3}(?:<(script|pre|style|textarea)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n*|$)|comment[^\\n]*(\\n+|$)|<\\?[\\s\\S]*?(?:\\?>[^\\n]*\\n*|$)|<![A-Z][\\s\\S]*?(?:>[^\\n]*\\n*|$)|<!\\[CDATA\\[[\\s\\S]*?(?:\\]\\]>[^\\n]*\\n*|$)|</?(tag)(?:[ \\t]+|\\n|/?>|$)[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$)|<(?!(?:script|pre|style|textarea)(?![a-z0-9-]))([a-z][a-z0-9-]*)(?:attribute)*? */?>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$)|</[a-z][a-z0-9-]*\\s*>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$))","i").replace("comment",fp).replace("tag",si).replace("attribute",/ +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/).getRegex(),KE=t=>J(hp).replace("hr",ii).replace("heading"," {0,3}#{1,6}(?:\\s|$)").replace("|lheading","").replace("|table","").replace("blockquote"," {0,3}>").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*(?:\\n|$))|~~~)[^\\n]*(?:\\n|$)").replace("list",t).replace("html"," {0,3}(?:</?(?:tag)(?: +|\\n|/?>)|<(?:(?:script|pre|style|textarea)(?:[\\s>]|$)|!--)|<\\?|<![A-Za-z]|<!\\[CDATA\\[)").replace("tag",si).getRegex(),WC=KE(/ {0,3}(?:[*+-]|1[.)])[ \t]+[^ \t\n]/),qC=KE(/ {0,3}(?:[*+-]|\d{1,9}[.)])(?:[ \t]|\n|$)/),YC=J(/^( {0,3}> ?(?:(?![ \t]*(?:\n|$))(paragraph)|[^\n]*)(?:\n|$))+/).replace("paragraph",qC).getRegex(),mp={blockquote:YC,code:UC,def:VC,fences:HC,heading:FC,hr:ii,html:jC,lheading:YE,list:ZC,newline:$C,paragraph:WC,table:Jn,text:BC},zE=J("^ *([^\\n ].*)\\n {0,3}((?:\\| *)?:?-+:? *(?:\\| *:?-+:? *)*(?:\\| *)?)(?:\\n((?:(?! *\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)").replace("hr",ii).replace("heading"," {0,3}#{1,6}(?:\\s|$)").replace("blockquote"," {0,3}>").replace("code","(?: {4}| {0,3}	)[^\\n]").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*(?:\\n|$))|~~~)[^\\n]*(?:\\n|$)").replace("list"," {0,3}(?:[*+-]|1[.)])[ \\t]").replace("html"," {0,3}(?:</?(?:tag)(?: +|\\n|/?>)|<(?:(?:script|pre|style|textarea)(?:[\\s>]|$)|!--)|<\\?|<![A-Za-z]|<!\\[CDATA\\[)").replace("tag",si).getRegex(),KC={...mp,lheading:GC,table:zE,paragraph:J(hp).replace("hr",ii).replace("heading"," {0,3}#{1,6}(?:\\s|$)").replace("|lheading","").replace("table",zE).replace("blockquote"," {0,3}>").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*(?:\\n|$))|~~~)[^\\n]*(?:\\n|$)").replace("list"," {0,3}(?:[*+-]|1[.)])[ \\t]+[^ \\t\\n]").replace("html"," {0,3}(?:</?(?:tag)(?: +|\\n|/?>)|<(?:(?:script|pre|style|textarea)(?:[\\s>]|$)|!--)|<\\?|<![A-Za-z]|<!\\[CDATA\\[)").replace("tag",si).getRegex()},XC={...mp,html:J(`^ *(?:comment(?: *\\n|\\s*$)|<(tag)[\\s\\S]+?</\\1>(?: *\\n{2,}|\\s*$)|<tag(?:"[^"]*"|'[^']*'|\\s[^'"/>\\s]*)*?/?>(?: *\\n{2,}|\\s*$))`).replace("comment",fp).replace(/tag/g,"(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:|[^\\w\\s@]*@)\\b").getRegex(),def:/^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/,heading:/^(#{1,6})(.*)(?:\n+|$)/,fences:Jn,lheading:/^(.+?)\n {0,3}(=+|-+) *(?:\n+|$)/,paragraph:J(hp).replace("hr",ii).replace("heading",` *#{1,6} *[^
]`).replace("lheading",YE).replace("|table","").replace("blockquote"," {0,3}>").replace("|fences","").replace("|list","").replace("|html","").replace("|tag","").getRegex()},JC=/^\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/,QC=/^(`+)([^`]|[^`][\s\S]*?[^`])\1(?!`)/,XE=/^( {2,}|\\)\n(?!\s*$)[ \t]*/,eN=/^(`+|[^`])(?:(?= {2,}\n)|[\s\S]*?(?:(?=[\\<!\[`*_]|\b_|$)|[^ ](?= {2,}\n)))/,$t=/[\p{P}\p{S}]/u,Vr=/[\s\p{P}\p{S}]/u,ai=/[^\s\p{P}\p{S}]/u,tN=J(/^((?![*_])punctSpace)/,"u").replace(/punctSpace/g,Vr).getRegex(),nN=/[\p{Pi}\p{Ps}"']/u,JE=/(?!~)[\p{P}\p{S}]/u,rN=/(?!~)[\s\p{P}\p{S}]/u,oN=/(?:[^\s\p{P}\p{S}]|~)/u,iN=J(/link|precode-code|html/,"g").replace("link",/\[(?:[^\[\]`]|(?<a>`+)[^`]+\k<a>(?!`))*?\]\((?:\\[\s\S]|[^\\\(\)]|\((?:\\[\s\S]|[^\\\(\)])*\))*\)/).replace("precode-",WE?"(?<!`)()":"(^^|[^`])").replace("code",/(?<b>`+)[^`]+\k<b>(?!`)/).replace("html",/<(?! )[^<>]*?>/).getRegex(),QE=/^(?:\*+(?:((?!\*)punct)|([^\s*]))?)|^_+(?:((?!_)punct)|([^\s_]))?/,sN=J(QE,"u").replace(/punct/g,$t).getRegex(),aN=J(QE,"u").replace(/punct/g,JE).getRegex(),lN=/^(?:\*+(?:((?!\*)(?!openQuote)punct)|([^\s*]))?)|^_+(?:((?!_)(?!openQuote)punct)|([^\s_]))?/,cN=J(lN,"u").replace(/openQuote/g,nN).replace(/punct/g,$t).getRegex(),e_="^[^_*]*?__[^_*]*?\\*[^_*]*?(?=__)|[^*]+(?=[^*])|(?!\\*)punct(\\*+)(?=[\\s]|$)|notPunctSpace(\\*+)(?!\\*)(?=punctSpace|$)|(?!\\*)punctSpace(\\*+)(?=notPunctSpace)|[\\s](\\*+)(?!\\*)(?=punct)|(?!\\*)punct(\\*+)(?!\\*)(?=punct)|notPunctSpace(\\*+)(?=notPunctSpace)",dN=J(e_,"gu").replace(/notPunctSpace/g,ai).replace(/punctSpace/g,Vr).replace(/punct/g,$t).getRegex(),uN=J(e_,"gu").replace(/notPunctSpace/g,oN).replace(/punctSpace/g,rN).replace(/punct/g,JE).getRegex(),hN="^[^_*]*?__[^_*]*?\\*[^_*]*?(?=__)|[^*]+(?=[^*])|(?!\\*)punct(\\*+)(?=[\\s]|$)|notPunctSpace(\\*+)(?!\\*)(?=punctSpace|$)|(?!\\*)[\\s](\\*+)(?=notPunctSpace)|[\\s](\\*+)(?!\\*)(?=punct)|(?!\\*)punct(\\*+)(?!\\*)(?=punct)|(?:(?!\\*)punct|notPunctSpace)(\\*+)(?!\\*)(?=notPunctSpace)",pN=J(hN,"gu").replace(/notPunctSpace/g,ai).replace(/punctSpace/g,Vr).replace(/punct/g,$t).getRegex(),fN=J("^[^_*]*?\\*\\*[^_*]*?_[^_*]*?(?=\\*\\*)|[^_]+(?=[^_])|(?!_)punct(_+)(?=[\\s]|$)|notPunctSpace(_+)(?!_)(?=punctSpace|$)|(?!_)punctSpace(_+)(?=notPunctSpace)|[\\s](_+)(?!_)(?=punct)|(?!_)punct(_+)(?!_)(?=punct)","gu").replace(/notPunctSpace/g,ai).replace(/punctSpace/g,Vr).replace(/punct/g,$t).getRegex(),mN="^[^_*]*?\\*\\*[^_*]*?_[^_*]*?(?=\\*\\*)|[^_]+(?=[^_])|(?!_)punct(_+)(?=[\\s]|$)|notPunctSpace(_+)(?!_)(?=punctSpace|$)|(?!_)[\\s](_+)(?=notPunctSpace)|[\\s](_+)(?!_)(?=punct)|(?!_)punct(_+)(?!_)(?=punct)|(?:(?!_)punct|notPunctSpace)(_+)(?!_)(?=notPunctSpace)",gN=J(mN,"gu").replace(/notPunctSpace/g,ai).replace(/punctSpace/g,Vr).replace(/punct/g,$t).getRegex(),vN=J(/^~~?(?:((?!~)punct)|[^\s~])/,"u").replace(/punct/g,$t).getRegex(),bN="^[^~]+(?=[^~])|(?!~)punct(~~?)(?=[\\s]|$)|notPunctSpace(~~?)(?!~)(?=punctSpace|$)|(?!~)punctSpace(~~?)(?=notPunctSpace)|[\\s](~~?)(?!~)(?=punct)|(?!~)punct(~~?)(?!~)(?=punct)|notPunctSpace(~~?)(?=notPunctSpace)",yN=J(bN,"gu").replace(/notPunctSpace/g,ai).replace(/punctSpace/g,Vr).replace(/punct/g,$t).getRegex(),wN=J(/\\(punct)/,"gu").replace(/punct/g,$t).getRegex(),xN=J(/(`+)(?:[^`]|[^`][\s\S]*?[^`])\1(?!`)|`+|\\(punct)/,"gu").replace(/punct/g,$t).getRegex(),EN=J(/^<(scheme:[^\s\x00-\x1f<>]*|email)>/).replace("scheme",/[a-zA-Z][a-zA-Z0-9+.-]{1,31}/).replace("email",/[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/).getRegex(),_N=J(fp).replace("(?:-->|$)","-->").getRegex(),TN=J("^comment|^</[a-zA-Z][a-zA-Z0-9-]*\\s*>|^<[a-zA-Z][a-zA-Z0-9-]*(?:attribute)*?\\s*/?>|^<\\?[\\s\\S]*?\\?>|^<![a-zA-Z]+\\s[\\s\\S]*?>|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>").replace("comment",_N).replace("attribute",/\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/).getRegex(),t_=/\[(?:\\[\s\S]|[^\[\]\\])*\]/,Ll=J(/(?:\[(?:brackets|\\[\s\S]|[^\[\]\\])*\]|\\[\s\S]|`+(?!`)[^`]*?`+(?!`)|``+(?=\])|[^\[\]\\`])*?/).replace("brackets",t_).getRegex(),SN=J(/^!?\[(label)\]\([ \t\n]*(href)(?:(?:[ \t]+(?:\n[ \t]*)?|\n[ \t]*)(title))?[ \t\n]*\)/).replace("label",Ll).replace("href",/<(?:\\.|[^\n<>\\])+>|[^ \t\n\x00-\x1f]+|(?=\))/).replace("title",/"(?:\\[\s\S]|[^"\\])*"|'(?:\\[\s\S]|[^'\\])*'|\((?:\\[\s\S]|[^)\\])*\)/).getRegex(),kN=J(/^!?\[(label)\]\[(ref)\]/).replace("label",Ll).replace("ref",pp).getRegex(),AN=J(/^!?\[(ref)\](?:\[\])?/).replace("ref",pp).getRegex(),DE=/(?!\s*\])(?:\\[\s\S]|[^\[\]\\]){1,999}/,RN=J(/(?:[^\[\]\\`]*(?:\[(?:brackets|\\[\s\S]|[^\[\]\\])*\]|\\[\s\S]|`+(?!`)[^`]*?`+(?!`)|``+(?=\]))){0,999}?[^\[\]\\`]*?/).replace("brackets",t_).getRegex(),IN=J("reflink|nolink(?!\\()","g").replace("reflink",J(/^!?\[(label)\]\[(ref)\]/).replace("label",RN).replace("ref",DE).getRegex()).replace("nolink",J(/^!?\[(ref)\](?:\[\])?/).replace("ref",DE).getRegex()).getRegex(),$E=/[hH][tT][tT][pP][sS]?|[fF][tT][pP]/,CN=/[A-Za-z0-9._+-]+@[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![\w-])/,NN=J(/(?:mailto:email|xmpp:email(?:\/[A-Za-z0-9@.]+)?)/).replace(/email/g,CN).getRegex(),gp={_backpedal:Jn,anyPunctuation:wN,anyPunctuationOutsideCode:xN,autolink:EN,blockSkip:iN,br:XE,code:QC,del:Jn,delLDelim:Jn,delRDelim:Jn,emStrongLDelim:sN,emStrongRDelimAst:dN,emStrongRDelimUnd:fN,escape:JC,link:SN,nolink:AN,punctuation:tN,reflink:kN,reflinkSearch:IN,tag:TN,text:eN,url:Jn},ON={...gp,emStrongLDelim:cN,emStrongRDelimAst:pN,emStrongRDelimUnd:gN,link:J(/^!?\[(label)\]\((.*?)\)/).replace("label",Ll).getRegex(),reflink:J(/^!?\[(label)\]\s*\[([^\]]*)\]/).replace("label",Ll).getRegex()},ap={...gp,emStrongRDelimAst:uN,emStrongLDelim:aN,delLDelim:vN,delRDelim:yN,url:J(/^emailProtocol|^((?:protocol):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/).replace("emailProtocol",NN).replace("protocol",$E).replace("email",/[A-Za-z0-9._+-]+(@)[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![\w-])/).getRegex(),_backpedal:/(?:[^?!.,:;*_'"~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_'"~)]+(?!$))+/,del:/^(~~?)(?=[^\s~])((?:\\[\s\S]|[^\\])*?(?:\\[\s\S]|[^\s~\\]))\1(?=[^~]|$)/,text:J(/^(?:[^a-zA-Z0-9](?=emailProtocol)|(`+|~+|[^`~])(?:(?=[`~])|(?= {2,}\n)|(?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)|[\s\S]*?(?:(?=[\\<!\[`*~_]|\b_|protocol:\/\/|wwwStart|$)|[^ ](?= {2,}\n)|[^a-zA-Z0-9](?=emailProtocol)|[^a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-](?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@))))/).replace("protocol",$E).replace(/emailProtocol/g,/(?:mailto|xmpp):/).replace("wwwStart",WE?"(?<![^\\s*_~(])www\\.":"www\\.").getRegex()},MN={...ap,br:J(XE).replace("{2,}","*").getRegex(),text:J(ap.text).replace("\\b_","\\b_| {2,}\\n").replace(/\{2,\}/g,"*").getRegex()},Ml={normal:mp,gfm:KC,pedantic:XC},ri={normal:gp,gfm:ap,breaks:MN,pedantic:ON},PN={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"},UE=t=>PN[t];function ht(t,e){if(e){if(Fe.escapeTest.test(t))return t.replace(Fe.escapeReplace,UE)}else if(Fe.escapeTestNoEncode.test(t))return t.replace(Fe.escapeReplaceNoEncode,UE);return t}function LN(t){return Fe.numericCharacterReference.test(t)?t.replace(Fe.numericCharacterReferenceOrAmpersand,(e,n,r)=>{if(n===void 0&&r===void 0)return"&amp;";let o=n===void 0?Number.parseInt(r,16):Number.parseInt(n,10);return o===0||o>1114111||o>=55296&&o<=57343?"\uFFFD":o===38?"&amp;":String.fromCodePoint(o)}):t}function HE(t){try{t=encodeURI(t).replace(Fe.percentDecode,"%")}catch{return null}return t}function FE(t,e){let n=t.replace(Fe.findPipe,(i,s,a)=>{let c=!1,l=s;for(;--l>=0&&a[l]==="\\";)c=!c;return c?"|":" |"}),r=n.split(Fe.splitPipe),o=0;if(r[0].trim()||r.shift(),r.length>0&&!r.at(-1)?.trim()&&r.pop(),e)if(r.length>e)r.splice(e);else for(;r.length<e;)r.push("");for(;o<r.length;o++)r[o]=r[o].trim().replace(Fe.slashPipe,"|");return r}function Xt(t,e,n){let r=t.length;if(r===0)return"";let o=0;for(;o<r;){let i=t.charAt(r-o-1);if(i===e&&!n)o++;else if(i!==e&&n)o++;else break}return t.slice(0,r-o)}function GE(t){let e=t.split(`
`),n=e.length-1;for(;n>=0&&Fe.blankLine.test(e[n]);)n--;return e.length-n<=2?t:e.slice(0,n+1).join(`
`)}function zl(t){return t.trim().replace(Fe.multipleSpaceGlobal," ").toLowerCase().toUpperCase().toLowerCase()}function BE(t,e){if(t.indexOf(e[0])===-1&&t.indexOf(e[1])===-1)return-1;let n=0;for(let r=0;r<t.length;r++)if(t[r]==="\\")r++;else if(t[r]===e[0])n++;else if(t[r]===e[1]&&(n--,n<0))return r;return n>0?-2:-1}var Br=new WeakMap;function vp(t){let e={"*":-1,_:-1},n=-1,r=t.length;for(let o=0;o<r;o++){let i=t[o];if(i!=="*"&&i!=="_"&&i!=="~")continue;let s=o===0?`
`:t[o-1],a=o+1;for(;a<r&&t[a]===i;)a++;s!==" "&&s!=="	"&&s!==`
`&&s!=="\r"&&s!=="\f"&&(i==="~"?n=o:e[i]=o),o=a-1}return{maskedSrc:t,lastPossibleEmStrongCloserIndex:e,lastPossibleDelCloserIndex:n}}function zN(t,e){let n=vp(e),r=Br.get(t);r?r.push(n):Br.set(t,[n])}function DN(t){let e=Br.get(t);e&&(e.pop(),e.length===0&&Br.delete(t))}function $N(t,e,n){let r=Br.get(t)?.at(-1);return r&&r.maskedSrc===e?r.lastPossibleEmStrongCloserIndex[n]:vp(e).lastPossibleEmStrongCloserIndex[n]}function UN(t,e){let n=Br.get(t)?.at(-1);return n&&n.maskedSrc===e?n.lastPossibleDelCloserIndex:vp(e).lastPossibleDelCloserIndex}function Pl(t,e=0){let n=e,r="";for(let o of t)if(o==="	"){let i=4-n%4;r+=" ".repeat(i),n+=i}else r+=o,n++;return r}function VE(t,e,n,r,o){let i=e.href,s=e.title||null,a=t[1].replace(o.other.outputLinkReplace,"$1"),c=t[0].charAt(0)==="!",l=r.state.inLink,d=r.state.linkEmitted,h=r.state.inRawBlock;r.state.inLink=!0,r.state.linkEmitted=!1;let m=r.inlineTokens(a),f=r.state.linkEmitted;if(r.state.linkEmitted=d,r.state.inLink=l,!c){if(f){r.state.inRawBlock=h;return}r.state.linkEmitted=!0}return{type:c?"image":"link",raw:n,href:i,title:s,text:a,tokens:m}}function HN(t,e,n){let r=t.match(n.other.indentCodeCompensation);if(r===null)return e;let o=r[1];return e.split(`
`).map(i=>{let s=i.match(n.other.beginningSpace);if(s===null)return i;let[a]=s;return i.slice(Math.min(a.length,o.length))}).join(`
`)}function ZE(t,e,n,r){if(!e.includes("<"))return!1;for(let o=0;o<e.length;o++){if(e[o]==="\\"){o++;continue}if(e[o]==="`"){let a=r.inline.code.exec(e.slice(o));if(a){o+=a[0].length-1;continue}}if(e[o]!=="<")continue;let i=t.slice(n+o),s=r.inline.tag.exec(i)||r.inline.autolink.exec(i);if(s){if(s[0].length>e.length-o)return!0;o+=s[0].length-1}}return!1}var Gr=class{options;rules;lexer;constructor(t){this.options=t||er}space(t){let e=this.rules.block.newline.exec(t);if(e&&e[0].length>0)return{type:"space",raw:e[0]}}code(t){let e=this.rules.block.code.exec(t);if(e){let n=this.options.pedantic?e[0]:GE(e[0]),r=n.replace(this.rules.other.codeRemoveIndent,"");return{type:"code",raw:n,codeBlockStyle:"indented",text:r}}}fences(t){let e=this.rules.block.fences.exec(t);if(e){let n=e[0],r=HN(n,e[3]||"",this.rules);return{type:"code",raw:n,lang:e[2]?e[2].trim().replace(this.rules.inline.anyPunctuation,"$1"):e[2],text:r}}}heading(t){let e=this.rules.block.heading.exec(t);if(e){let n=e[2].trim();if(this.rules.other.endingHash.test(n)){let r=Xt(n,"#");(this.options.pedantic||!r||this.rules.other.endingSpaceTabChar.test(r))&&(n=r.trim())}return{type:"heading",raw:Xt(e[0],`
`),depth:e[1].length,text:n,tokens:this.lexer.inline(n)}}}hr(t){let e=this.rules.block.hr.exec(t);if(e)return{type:"hr",raw:Xt(e[0],`
`)}}blockquote(t){let e=this.rules.block.blockquote.exec(t);if(e){let n=Xt(e[0],`
`).split(`
`),r="",o="",i=[];for(;n.length>0;){let s=!1,a=[],c;for(c=0;c<n.length;c++)if(this.rules.other.blockquoteStart.test(n[c]))a.push(n[c]),s=!0;else if(!s)a.push(n[c]);else break;n=n.slice(c);let l=a.join(`
`),d=l.replace(this.rules.other.blockquoteMarkerWhitespace,(f,u,v)=>u+Pl(v,u.length)).replace(this.rules.other.blockquoteSetextReplace,`
    $1`).replace(this.rules.other.blockquoteSetextReplace2,"");r=r?`${r}
${l}`:l,o=o?`${o}
${d}`:d;let h=this.lexer.state.top;if(this.lexer.state.top=!0,this.lexer.blockTokens(d,i,!0),this.lexer.state.top=h,n.length===0)break;let m=i.at(-1);if(m?.type==="code"||m?.type==="heading"||m?.type==="hr"||m?.type==="html"||m?.type==="table")break;if(m?.type==="blockquote"){let f=m,u=n.join(`
`),v=f.raw+`
`+u.replace(this.rules.other.blockquoteSetextReplace2,""),E=this.blockquote(v);i[i.length-1]=E;let T=v.substring(E.raw.length).replace(/^\n/,""),w=T?T.split(`
`).length:0,D=w?n.slice(0,-w):n;if(D.length>0&&(r=`${r}
${D.join(`
`)}`),o=o.substring(0,o.length-f.text.length)+E.text,n=n.slice(D.length),n.length>0&&this.rules.other.blockquoteStart.test(n[0]))continue;break}else if(m?.type==="list"){let f=m,u=f.raw+`
`+n.join(`
`),v=this.list(u);i[i.length-1]=v;let E=v.raw.length>f.raw.length?u.slice(f.raw.length+1,v.raw.length).split(`
`).length:0;if(E>0){let T=n.slice(0,E).join(`
`);r=`${r}
${T}`,o=`${o}
${T}`}n=n.slice(E);continue}}return{type:"blockquote",raw:r,tokens:i,text:o}}}list(t){let e=this.rules.block.list.exec(t);if(e){let n=t,r=()=>n.length-t.length,o=e[1].trim(),i=o.length>1,s={type:"list",raw:"",ordered:i,start:i?+o.slice(0,-1):"",loose:!1,items:[]};o=i?`\\d{1,9}\\${o.slice(-1)}`:`\\${o}`,this.options.pedantic&&(o=i?o:"[*+-]");let a=this.rules.other.listItemRegex(o),c=!1;for(;t;){let d=!1,h="";if(!(e=a.exec(t))||this.rules.block.hr.test(t))break;let m=r();t=t.substring(e[0].length);let f=e[2].split(`
`,1)[0],u=e[1].length,v=this.options.pedantic?Pl(f,u):f.replace(this.rules.other.leadingSpaceTab,S=>Pl(S,u)),E=t.split(`
`,1)[0],T=!v.trim(),w=0;if(this.options.pedantic?(w=2,h=v.trimStart()):T?w=u+1:(w=v.search(this.rules.other.nonSpaceChar),w=w>4?1:w,h=v.slice(w),w+=u),T&&this.rules.other.blankLine.test(E)&&(t=t.substring(E.length+1),d=!0),!d){let S=this.rules.other.nextBulletRegex(w),g=this.rules.other.hrRegex(w),x=this.rules.other.fencesBeginRegex(w),b=this.options.pedantic?this.rules.other.pedanticHeadingBeginRegex(w):this.rules.other.headingBeginRegex(w),k=this.rules.other.htmlBeginRegex(w),I=this.rules.other.blockquoteBeginRegex(w);for(;t;){let P=t.split(`
`,1)[0],$;if(E=P,this.options.pedantic?(E=E.replace(this.rules.other.listReplaceNesting,"  "),$=E):$=E.replace(this.rules.other.leadingSpaceTab,L=>Pl(L)),x.test(E)||b.test(E)||k.test(E)||I.test(E)||S.test(E)||g.test(E))break;if($.search(this.rules.other.nonSpaceChar)>=w||!E.trim())h+=`
`+$.slice(w);else{if(T||v.replace(this.rules.other.tabCharGlobal,"    ").search(this.rules.other.nonSpaceChar)>=4||x.test(v)||b.test(v)||k.test(v)||g.test(v))break;let L=!this.options.pedantic&&/^ {0,3}(?:=+|-+) *$/.test(E)&&this.rules.block.lheading.test(`${v}
${E}`)?`    ${$.replace(/^ {0,3}/,"")}`:E;h+=`
`+L}T=!E.trim(),t=t.substring(P.length+1),v=$.slice(w)}}let D=n.slice(m,r());s.loose||(c?s.loose=!0:this.rules.other.doubleBlankLine.test(D)&&(c=!0)),s.items.push({type:"list_item",raw:D,task:!!this.options.gfm&&this.rules.other.listIsTask.test(h),loose:!1,text:h,tokens:[]})}let l=s.items.at(-1);if(l)l.raw=l.raw.trimEnd(),l.text=l.text.trimEnd();else return;s.raw=n.slice(0,r()).trimEnd();for(let d of s.items)if(this.lexer.state.top=!1,d.tokens=this.lexer.blockTokens(d.text,[]),!s.loose){let h=d.tokens.filter(f=>f.type==="space"),m=h.length>0&&h.some(f=>this.rules.other.anyLine.test(f.raw));s.loose=m}for(let d of s.items){let h=d.tokens[0];if(d.task&&(h?.type==="text"||h?.type==="paragraph")){d.text=d.text.replace(this.rules.other.listReplaceTask,""),h.raw=h.raw.replace(this.rules.other.listReplaceTask,""),h.text=h.text.replace(this.rules.other.listReplaceTask,"");for(let f=this.lexer.inlineQueue.length-1;f>=0;f--)if(this.rules.other.listIsTask.test(this.lexer.inlineQueue[f].src)){this.lexer.inlineQueue[f].src=this.lexer.inlineQueue[f].src.replace(this.rules.other.listReplaceTask,"");break}let m=this.rules.other.listTaskCheckbox.exec(d.raw);if(m){let f={type:"checkbox",raw:m[0]+" ",checked:m[0]!=="[ ]"};d.checked=f.checked,s.loose?d.tokens[0]&&["paragraph","text"].includes(d.tokens[0].type)&&"tokens"in d.tokens[0]&&d.tokens[0].tokens?(d.tokens[0].raw=f.raw+d.tokens[0].raw,d.tokens[0].text=f.raw+d.tokens[0].text,d.tokens[0].tokens.unshift(f)):d.tokens.unshift({type:"paragraph",raw:f.raw,text:f.raw,tokens:[f]}):d.tokens.unshift(f)}}else d.task&&(d.task=!1)}if(s.loose)for(let d of s.items){d.loose=!0;for(let h of d.tokens)h.type==="text"&&(h.type="paragraph")}return s}}html(t){let e=this.rules.block.html.exec(t);if(e){let n=GE(e[0]);return{type:"html",block:!0,raw:n,pre:e[1]==="pre"||e[1]==="script"||e[1]==="style",text:n}}}def(t){let e=this.rules.block.def.exec(t);if(e){if(!this.rules.other.startAngleBracket.test(e[2])&&BE(e[2],"()")!==-1)return;let n=zl(e[1]),r=e[2]?e[2].replace(this.rules.other.hrefBrackets,"$1").replace(this.rules.inline.anyPunctuation,"$1"):"",o=e[3]?e[3].substring(1,e[3].length-1).replace(this.rules.inline.anyPunctuation,"$1"):e[3];return{type:"def",tag:n,raw:Xt(e[0],`
`),href:r,title:o}}}table(t){let e=this.rules.block.table.exec(t);if(!e||!this.rules.other.tableDelimiter.test(e[2]))return;let n=FE(e[1]),r=e[2].replace(this.rules.other.tableAlignChars,"").split("|"),o=e[3]?.trim()?e[3].replace(this.rules.other.tableRowBlankLine,"").split(`
`):[],i={type:"table",raw:Xt(e[0],`
`),header:[],align:[],rows:[]};if(n.length===r.length){for(let s of r)this.rules.other.tableAlignRight.test(s)?i.align.push("right"):this.rules.other.tableAlignCenter.test(s)?i.align.push("center"):this.rules.other.tableAlignLeft.test(s)?i.align.push("left"):i.align.push(null);for(let s=0;s<n.length;s++)i.header.push({text:n[s],tokens:this.lexer.inline(n[s]),header:!0,align:i.align[s]});for(let s of o)i.rows.push(FE(s,i.header.length).map((a,c)=>({text:a,tokens:this.lexer.inline(a),header:!1,align:i.align[c]})));return i}}lheading(t){let e=this.rules.block.lheading.exec(t);if(e){let n=e[1].trim();return{type:"heading",raw:Xt(e[0],`
`),depth:e[2].charAt(0)==="="?1:2,text:n,tokens:this.lexer.inline(n)}}}paragraph(t){let e=this.rules.block.paragraph.exec(t);if(e){let n=e[1].charAt(e[1].length-1)===`
`?e[1].slice(0,-1):e[1];return{type:"paragraph",raw:e[0],text:n,tokens:this.lexer.inline(n)}}}text(t){let e=this.rules.block.text.exec(t);if(e)return{type:"text",raw:e[0],text:e[0],tokens:this.lexer.inline(e[0])}}escape(t){let e=this.rules.inline.escape.exec(t);if(e)return{type:"escape",raw:e[0],text:e[1]}}tag(t){let e=this.rules.inline.tag.exec(t);if(e)return!this.lexer.state.inLink&&this.rules.other.startATag.test(e[0])?this.lexer.state.inLink=!0:this.lexer.state.inLink&&this.rules.other.endATag.test(e[0])&&(this.lexer.state.inLink=!1),!this.lexer.state.inRawBlock&&this.rules.other.startPreScriptTag.test(e[0])?this.lexer.state.inRawBlock=!0:this.lexer.state.inRawBlock&&this.rules.other.endPreScriptTag.test(e[0])&&(this.lexer.state.inRawBlock=!1),{type:"html",raw:e[0],inLink:this.lexer.state.inLink,inRawBlock:this.lexer.state.inRawBlock,block:!1,text:e[0]}}link(t){if(this.lexer.state.linkParenPossible===!1)return;let e=this.rules.inline.link.exec(t);if(e){let n=e[0].charAt(0)==="!"?2:1;if(!this.options.pedantic&&ZE(t,e[1],n,this.rules))return;let r=e[2].trim();if(!this.options.pedantic&&this.rules.other.startAngleBracket.test(r)){if(!this.rules.other.endAngleBracket.test(r))return;let a=Xt(r.slice(0,-1),"\\");if((r.length-a.length)%2===0)return}else{let a=BE(e[2],"()");if(a===-2)return;if(a>-1){let c=(e[0].indexOf("!")===0?5:4)+e[1].length+a;e[2]=e[2].substring(0,a),e[0]=e[0].substring(0,c).trim(),e[3]=""}}let o=Xt(e[0].slice(0,-1),"\\");if((e[0].length-o.length)%2===0)return;let i=e[2],s="";if(this.options.pedantic){let a=this.rules.other.pedanticHrefTitle.exec(i);a&&(i=a[1],s=a[3])}else s=e[3]?e[3].slice(1,-1):"";return i=i.trim(),this.rules.other.startAngleBracket.test(i)&&(this.options.pedantic&&!this.rules.other.endAngleBracket.test(r)?i=i.slice(1):i=i.slice(1,-1)),VE(e,{href:i&&i.replace(this.rules.inline.anyPunctuation,"$1"),title:s&&s.replace(this.rules.inline.anyPunctuation,"$1")},e[0],this.lexer,this.rules)}}reflink(t,e){let n;if((n=this.rules.inline.reflink.exec(t))||(n=this.rules.inline.nolink.exec(t))){let r=n[0].charAt(0)==="!"?2:1;if(!this.options.pedantic&&ZE(t,n[1],r,this.rules))return;let o=e[zl(n[2]||n[1])];if(!o){let i=n[0].charAt(0);return{type:"text",raw:i,text:i}}return VE(n,o,n[0],this.lexer,this.rules)}}emStrong(t,e,n=""){let r=this.rules.inline.emStrongLDelim.exec(t);if(!r||!r[1]&&!r[2]&&!r[3]&&!r[4])return;let o=r[0][0],i=n===o,s=e.length-t.length,a=s;for(;!this.options.pedantic&&a>0&&e[a-1]===o;)a--;let c=[...e.slice(Math.max(0,a-2),a)].at(-1)??"",l=c==="*"||c==="_"||!!this.rules.inline.punctuation.exec(c);a<s&&(n=c);let d=a<s?l:!!this.rules.inline.punctuation.exec(n);if(r[4]&&n.match(this.rules.other.unicodeAlphaNumeric))return;let h=r[1]||r[3]||"";if(!h||!n||d){let m=[...r[0]].length-1,f,u,v=m,E=0,T=s-a+m,w=!this.options.pedantic&&!!c.trim()&&(!!h||o==="*"&&!l);if(o!=="*"&&o!=="_")return;let D=o==="*"?this.rules.inline.emStrongRDelimAst:this.rules.inline.emStrongRDelimUnd,S=$N(this,e,o),g=e.length-t.length+m;if(S<g)return;e=e.slice(-1*t.length+m);let x=S-g;for(D.lastIndex=0;(r=D.exec(e))!==null&&!(r.index>x);){if(f=r[1]||r[2]||r[3]||r[4]||r[5]||r[6],!f)continue;if(u=[...f].length,r[3]||r[4]){v+=u;continue}else if(r[5]||r[6]||w){if(i&&(r[5]||r[6]))break;if(T%3&&!((T+u)%3)){E+=u;continue}}if(v-=u,v>0)continue;u=Math.min(u,u+v+E);let b=[...r[0]][0].length,k=t.slice(0,m+r.index+b+u);if(Math.min(m,u)%2){let P=k.slice(1,-1);return{type:"em",raw:k,text:P,tokens:this.lexer.inlineTokens(P)}}let I=k.slice(2,-2);return{type:"strong",raw:k,text:I,tokens:this.lexer.inlineTokens(I)}}}}codespan(t){let e=this.rules.inline.code.exec(t);if(e){let n=e[2].replace(this.rules.other.newLineCharGlobal," "),r=this.rules.other.nonSpaceChar.test(n),o=this.rules.other.startingSpaceChar.test(n)&&this.rules.other.endingSpaceChar.test(n);return r&&o&&(n=n.substring(1,n.length-1)),{type:"codespan",raw:e[0],text:n}}}br(t){let e=this.rules.inline.br.exec(t);if(e)return{type:"br",raw:e[0]}}del(t,e,n=""){let r=this.rules.inline.delLDelim.exec(t);if(r&&(!r[1]||!n||this.rules.inline.punctuation.exec(n))){let o=[...r[0]].length-1,i,s,a=o,c=this.rules.inline.delRDelim,l=UN(this,e),d=e.length-t.length+o;if(l<d)return;e=e.slice(-1*t.length+o);let h=l-d;for(c.lastIndex=0;(r=c.exec(e))!==null&&!(r.index>h);){if(i=r[1]||r[2]||r[3]||r[4]||r[5]||r[6],!i||(s=[...i].length,s!==o))continue;if(r[3]||r[4]){a+=s;continue}if(a-=s,a>0)continue;s=Math.min(s,s+a);let m=[...r[0]][0].length,f=t.slice(0,o+r.index+m+s),u=f.slice(o,-o);return{type:"del",raw:f,text:u,tokens:this.lexer.inlineTokens(u)}}}}autolink(t){let e=this.rules.inline.autolink.exec(t);if(e){let n,r;return e[2]==="@"?(n=e[1],r="mailto:"+n):(n=e[1],r=n),{type:"link",raw:e[0],text:n,href:r,autolink:!0,tokens:[{type:"text",raw:n,text:n}]}}}url(t){let e;if(e=this.rules.inline.url.exec(t)){let n,r;if(e[2]==="@")n=e[0],r="mailto:"+n;else{let o;do o=e[0],e[0]=this.rules.inline._backpedal.exec(e[0])?.[0]??"";while(o!==e[0]);n=e[0],e[1]==="www."?r="http://"+e[0]:r=e[0]}return{type:"link",raw:e[0],text:n,href:r,autolink:!0,tokens:[{type:"text",raw:n,text:n}]}}}inlineText(t){let e=this.rules.inline.text.exec(t);if(e){let n=this.lexer.state.inRawBlock;return{type:"text",raw:e[0],text:n?e[0]:LN(e[0]),escaped:n}}}},xt=class lp{tokens;options;state;inlineQueue;tokenizer;constructor(e){this.tokens=[],this.tokens.links=Object.create(null),this.options=e||er,this.options.tokenizer=this.options.tokenizer||new Gr,this.tokenizer=this.options.tokenizer,this.tokenizer.options=this.options,this.tokenizer.lexer=this,this.inlineQueue=[],this.state={inLink:!1,inRawBlock:!1,linkEmitted:!1,linkParenPossible:!0,top:!0};let n={other:Fe,block:Ml.normal,inline:ri.normal};this.options.pedantic?(n.block=Ml.pedantic,n.inline=ri.pedantic):this.options.gfm&&(n.block=Ml.gfm,this.options.breaks?n.inline=ri.breaks:n.inline=ri.gfm),this.tokenizer.rules=n}static get rules(){return{block:Ml,inline:ri}}static lex(e,n){return new lp(n).lex(e)}static lexInline(e,n){return new lp(n).inlineTokens(e)}lex(e){e=e.replace(Fe.carriageReturn,`
`),this.blockTokens(e,this.tokens);for(let n=0;n<this.inlineQueue.length;n++){let r=this.inlineQueue[n];this.state.inRawBlock=!1,this.inlineTokens(r.src,r.tokens)}return this.inlineQueue=[],this.tokens}blockTokens(e,n=[],r=!1){this.tokenizer.lexer=this,this.options.pedantic&&(e=e.replace(Fe.tabCharGlobal,"    ").replace(Fe.spaceLine,""));let o=1/0;for(;e;){if(e.length<o)o=e.length;else{this.infiniteLoopError(e.charCodeAt(0));break}let i;if(this.options.extensions?.block?.some(a=>(i=a.call({lexer:this},e,n))?(e=e.substring(i.raw.length),n.push(i),!0):!1))continue;if(i=this.tokenizer.space(e)){e=e.substring(i.raw.length);let a=n.at(-1);i.raw.length===1&&a!==void 0?a.raw+=`
`:n.push(i);continue}if(i=this.tokenizer.code(e)){e=e.substring(i.raw.length);let a=n.at(-1);a?.type==="paragraph"||a?.type==="text"?(a.raw+=(a.raw.endsWith(`
`)?"":`
`)+i.raw,a.text+=`
`+i.text,this.inlineQueue.at(-1).src=a.text):n.push(i);continue}if(i=this.tokenizer.fences(e)){e=e.substring(i.raw.length),n.push(i);continue}if(i=this.tokenizer.heading(e)){e=e.substring(i.raw.length),n.push(i);continue}if(i=this.tokenizer.hr(e)){e=e.substring(i.raw.length),n.push(i);continue}if(i=this.tokenizer.blockquote(e)){e=e.substring(i.raw.length),n.push(i);continue}if(i=this.tokenizer.list(e)){e=e.substring(i.raw.length),n.push(i);continue}if(i=this.tokenizer.html(e)){e=e.substring(i.raw.length),n.push(i);continue}if(i=this.tokenizer.def(e)){e=e.substring(i.raw.length);let a=n.at(-1);a?.type==="paragraph"||a?.type==="text"?(a.raw+=(a.raw.endsWith(`
`)?"":`
`)+i.raw,a.text+=`
`+i.raw,this.inlineQueue.at(-1).src=a.text):(this.tokens.links[i.tag]||(this.tokens.links[i.tag]={href:i.href,title:i.title}),n.push(i));continue}if(i=this.tokenizer.table(e)){e=e.substring(i.raw.length),n.push(i);continue}if(i=this.tokenizer.lheading(e)){e=e.substring(i.raw.length),n.push(i);continue}let s=e;if(this.options.extensions?.startBlock){let a=1/0,c=e.slice(1),l;this.options.extensions.startBlock.forEach(d=>{l=d.call({lexer:this},c),typeof l=="number"&&l>=0&&(a=Math.min(a,l))}),a<1/0&&a>=0&&(s=e.substring(0,a+1))}if(this.state.top&&(i=this.tokenizer.paragraph(s))){let a=n.at(-1);r&&a?.type==="paragraph"?(a.raw+=(a.raw.endsWith(`
`)?"":`
`)+i.raw,a.text+=`
`+i.text,this.inlineQueue.pop(),this.inlineQueue.at(-1).src=a.text):n.push(i),r=s.length!==e.length,e=e.substring(i.raw.length);continue}if(i=this.tokenizer.text(e)){e=e.substring(i.raw.length);let a=n.at(-1);a?.type==="text"?(a.raw+=(a.raw.endsWith(`
`)?"":`
`)+i.raw,a.text+=`
`+i.text,this.inlineQueue.pop(),this.inlineQueue.at(-1).src=a.text):n.push(i);continue}if(e){this.infiniteLoopError(e.charCodeAt(0));break}}return this.state.top=!0,n}inline(e,n=[]){return this.inlineQueue.push({src:e,tokens:n}),n}linkInText(e){if(!e.includes("["))return!1;let n=this.tokenizer.rules.inline.link;for(let r of e.matchAll(this.tokenizer.rules.inline.blockSkip))if(n.test(r[0])&&e.charAt(r.index-1)!=="!")return!0;for(let r of e.matchAll(this.tokenizer.rules.inline.reflinkSearch)){let o=r[0],i=o.lastIndexOf("[");if(!(o.charAt(0)==="!"||!Object.hasOwn(this.tokens.links,zl(o.slice(i+1,-1))))&&!(i>1&&this.linkInText(o.slice(1,i-1))))return!0}return!1}inlineTokens(e,n=[]){this.tokenizer.lexer=this;let r=this.state.linkParenPossible;this.state.linkParenPossible=r&&e.includes(")");try{return this.#e(e,n)}finally{this.state.linkParenPossible=r}}#e(e,n){let r=e.includes("*")||e.includes("_")||e.includes("~")||this.options.hooks?.emStrongMask||this.tokenizer.emStrong!==Gr.prototype.emStrong||this.tokenizer.del!==Gr.prototype.del?this.#n(e):e;zN(this.tokenizer,r);try{return this.#t(e,r,n)}finally{DN(this.tokenizer)}}#t(e,n,r){let o=!1,i="",s=1/0;for(;e;){if(e.length<s)s=e.length;else{this.infiniteLoopError(e.charCodeAt(0));break}o||(i=""),o=!1;let a;if(this.options.extensions?.inline?.some(l=>(a=l.call({lexer:this},e,r))?(e=e.substring(a.raw.length),r.push(a),!0):!1))continue;if(a=this.tokenizer.escape(e)){e=e.substring(a.raw.length),r.push(a);continue}if(a=this.tokenizer.tag(e)){e=e.substring(a.raw.length),r.push(a);continue}if(a=this.tokenizer.link(e)){e=e.substring(a.raw.length),r.push(a);continue}if(a=this.tokenizer.reflink(e,this.tokens.links)){e=e.substring(a.raw.length);let l=r.at(-1);a.type==="text"&&l?.type==="text"?(l.raw+=a.raw,l.text+=a.text):r.push(a);continue}if(a=this.tokenizer.emStrong(e,n,i)){e=e.substring(a.raw.length),r.push(a);continue}if(a=this.tokenizer.codespan(e)){e=e.substring(a.raw.length),r.push(a);continue}if(a=this.tokenizer.br(e)){e=e.substring(a.raw.length),r.push(a);continue}if(a=this.tokenizer.del(e,n,i)){e=e.substring(a.raw.length),r.push(a);continue}if(a=this.tokenizer.autolink(e)){e=e.substring(a.raw.length),r.push(a);continue}if(!this.state.inLink&&(a=this.tokenizer.url(e))){e=e.substring(a.raw.length),r.push(a);continue}let c=e;if(this.options.extensions?.startInline){let l=1/0,d=e.slice(1),h;this.options.extensions.startInline.forEach(m=>{h=m.call({lexer:this},d),typeof h=="number"&&h>=0&&(l=Math.min(l,h))}),l<1/0&&l>=0&&(c=e.substring(0,l+1))}if(a=this.tokenizer.inlineText(c)){e=e.substring(a.raw.length),a.raw.slice(-1)!=="_"&&(i=a.raw.slice(-1)),o=!0;let l=r.at(-1);l?.type==="text"?(l.raw+=a.raw,l.text+=a.text):r.push(a);continue}if(e){this.infiniteLoopError(e.charCodeAt(0));break}}return r}#n(e){let n=e;if(this.tokens.links&&e.includes("[")){let r=this.tokenizer.rules.inline.reflinkSearch,o=i=>{let s=i.lastIndexOf("[");if(!Object.hasOwn(this.tokens.links,zl(i.slice(s+1,-1))))return i;if(s>1&&i.charAt(0)!=="!"){let a=i.slice(1,s-1);if(this.linkInText(a))return"["+a.replace(r,o)+"]["+"a".repeat(i.length-s-2)+"]"}return"["+"a".repeat(i.length-2)+"]"};n=n.replace(r,o)}return n=n.replace(this.tokenizer.rules.inline.anyPunctuationOutsideCode,(r,o,i)=>i?"+".repeat(r.length):o?o+r.slice(o.length,-o.length).replace(/`/g,"+")+o:r),n=n.replace(this.tokenizer.rules.inline.blockSkip,(r,o,i)=>{let s=i?i.length:0;return r.slice(0,s)+"["+"a".repeat(r.length-s-2)+"]"}),n=this.options.hooks?.emStrongMask?.call({lexer:this},n)??n,n}infiniteLoopError(e){let n="Infinite loop on byte: "+e;if(this.options.silent)console.error(n);else throw new Error(n)}},Dl=class{options;parser;constructor(t){this.options=t||er}space(t){return""}code({text:t,lang:e,escaped:n}){let r=(e||"").match(Fe.notSpaceStart)?.[0],o=t?t.replace(Fe.endingNewline,"")+`
`:"";return r?'<pre><code class="language-'+ht(r)+'">'+(n?o:ht(o,!0))+`</code></pre>
`:"<pre><code>"+(n?o:ht(o,!0))+`</code></pre>
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
`}strong({tokens:t}){return`<strong>${this.parser.parseInline(t)}</strong>`}em({tokens:t}){return`<em>${this.parser.parseInline(t)}</em>`}codespan({text:t}){return`<code>${ht(t,!0)}</code>`}br(t){return"<br>"}del({tokens:t}){return`<del>${this.parser.parseInline(t)}</del>`}link({href:t,title:e,text:n,tokens:r,autolink:o}){let i=o?ht(n,!0):this.parser.parseInline(r),s=HE(t);if(s===null)return i;t=ht(s,o);let a='<a href="'+t+'"';return e&&(a+=' title="'+ht(e)+'"'),a+=">"+i+"</a>",a}image({href:t,title:e,text:n,tokens:r}){r&&(n=this.parser.parseInline(r,this.parser.textRenderer));let o=HE(t);if(o===null)return ht(n);t=o;let i=`<img src="${ht(t)}" alt="${ht(n)}"`;return e&&(i+=` title="${ht(e)}"`),i+=">",i}text(t){return"tokens"in t&&t.tokens?this.parser.parseInline(t.tokens):"escaped"in t&&t.escaped?t.text:ht(t.text)}},bp=class{parser;strong({text:t,tokens:e}){return e?this.parser.parseInline(e,this):t}em({text:t,tokens:e}){return e?this.parser.parseInline(e,this):t}codespan({text:t}){return t}del({text:t,tokens:e}){return e?this.parser.parseInline(e,this):t}html({text:t}){return t}text({text:t}){return t}link({text:t,tokens:e}){return e?this.parser.parseInline(e,this):t}image({text:t,tokens:e}){return e?this.parser.parseInline(e,this):t}br(){return""}checkbox({raw:t}){return t}},Et=class cp{options;renderer;textRenderer;constructor(e){this.options=e||er,this.options.renderer=this.options.renderer||new Dl,this.renderer=this.options.renderer,this.renderer.options=this.options,this.renderer.parser=this,this.textRenderer=new bp,this.textRenderer.parser=this}static parse(e,n){return new cp(n).parse(e)}static parseInline(e,n){return new cp(n).parseInline(e)}parse(e){this.renderer.parser=this;let n="";for(let r=0;r<e.length;r++){let o=e[r];if(this.options.extensions?.renderers?.[o.type]){let s=o,a=this.options.extensions.renderers[s.type].call({parser:this},s);if(a!==!1||!["space","hr","heading","code","table","blockquote","list","checkbox","html","def","paragraph","text"].includes(s.type)){n+=a||"";continue}}let i=o;switch(i.type){case"space":{n+=this.renderer.space(i);break}case"hr":{n+=this.renderer.hr(i);break}case"heading":{n+=this.renderer.heading(i);break}case"code":{n+=this.renderer.code(i);break}case"table":{n+=this.renderer.table(i);break}case"blockquote":{n+=this.renderer.blockquote(i);break}case"list":{n+=this.renderer.list(i);break}case"checkbox":{n+=this.renderer.checkbox(i);break}case"html":{n+=this.renderer.html(i);break}case"def":{n+=this.renderer.def(i);break}case"paragraph":{n+=this.renderer.paragraph(i);break}case"text":{n+=this.renderer.text(i);break}default:{let s='Token with "'+i.type+'" type was not found.';if(this.options.silent)return console.error(s),"";throw new Error(s)}}}return n}parseInline(e,n=this.renderer){this.renderer.parser=this;let r="";for(let o=0;o<e.length;o++){let i=e[o];if(this.options.extensions?.renderers?.[i.type]){let a=this.options.extensions.renderers[i.type].call({parser:this},i);if(a!==!1||!["escape","html","link","image","checkbox","strong","em","codespan","br","del","text"].includes(i.type)){r+=a||"";continue}}let s=i;switch(s.type){case"escape":{r+=n.text(s);break}case"html":{r+=n.html(s);break}case"link":{r+=n.link(s);break}case"image":{r+=n.image(s);break}case"checkbox":{r+=n.checkbox(s);break}case"strong":{r+=n.strong(s);break}case"em":{r+=n.em(s);break}case"codespan":{r+=n.codespan(s);break}case"br":{r+=n.br(s);break}case"del":{r+=n.del(s);break}case"text":{r+=n.text(s);break}default:{let a='Token with "'+s.type+'" type was not found.';if(this.options.silent)return console.error(a),"";throw new Error(a)}}}return r}},oi=class{options;block;constructor(t){this.options=t||er}static passThroughHooks=new Set(["preprocess","postprocess","processAllTokens","emStrongMask"]);static passThroughHooksRespectAsync=new Set(["preprocess","postprocess","processAllTokens"]);preprocess(t){return t}postprocess(t){return t}processAllTokens(t){return t}emStrongMask(t){return t}provideLexer(t=this.block){return t?xt.lex:xt.lexInline}provideParser(t=this.block){return t?Et.parse:Et.parseInline}};function hn(t,e){if(Array.isArray(e))for(let n=0;n<e.length;n++)t.push(e[n]);else t.push(e)}var yp=class{defaults=dp();options=this.setOptions;parse=this.parseMarkdown(!0);parseInline=this.parseMarkdown(!1);Parser=Et;Renderer=Dl;TextRenderer=bp;Lexer=xt;Tokenizer=Gr;Hooks=oi;constructor(...t){this.use(...t)}walkTokens(t,e){let n=[];for(let r of t)switch(hn(n,e.call(this,r)),r.type){case"table":{let o=r;for(let i of o.header)hn(n,this.walkTokens(i.tokens,e));for(let i of o.rows)for(let s of i)hn(n,this.walkTokens(s.tokens,e));break}case"list":{let o=r;hn(n,this.walkTokens(o.items,e));break}default:{let o=r;this.defaults.extensions?.childTokens?.[o.type]?this.defaults.extensions.childTokens[o.type].forEach(i=>{let s=o[i].flat(1/0);hn(n,this.walkTokens(s,e))}):o.tokens&&hn(n,this.walkTokens(o.tokens,e))}}return n}use(...t){let e=this.defaults.extensions||{renderers:Object.create(null),childTokens:Object.create(null)};return t.forEach(n=>{let r={...n};if(r.async=this.defaults.async||r.async||!1,n.extensions&&(n.extensions.forEach(o=>{if(!o.name)throw new Error("extension name required");if("renderer"in o){let i=e.renderers[o.name];i?e.renderers[o.name]=function(...s){let a=o.renderer.apply(this,s);return a===!1&&(a=i.apply(this,s)),a}:e.renderers[o.name]=o.renderer}if("tokenizer"in o){if(!o.level||o.level!=="block"&&o.level!=="inline")throw new Error("extension level must be 'block' or 'inline'");let i=e[o.level];i?i.unshift(o.tokenizer):e[o.level]=[o.tokenizer],o.start&&(o.level==="block"?e.startBlock?e.startBlock.push(o.start):e.startBlock=[o.start]:o.level==="inline"&&(e.startInline?e.startInline.push(o.start):e.startInline=[o.start]))}"childTokens"in o&&o.childTokens&&(e.childTokens[o.name]=o.childTokens)}),r.extensions=e),n.renderer){let o=this.defaults.renderer||new Dl(this.defaults);for(let i in n.renderer){if(!(i in o))throw new Error(`renderer '${i}' does not exist`);if(["options","parser"].includes(i))continue;let s=i,a=n.renderer[s],c=o[s];o[s]=(...l)=>{let d=a.apply(o,l);return d===!1&&(d=c.apply(o,l)),d===!1?"":d??""}}r.renderer=o}if(n.tokenizer){let o=this.defaults.tokenizer||new Gr(this.defaults);for(let i in n.tokenizer){if(!(i in o))throw new Error(`tokenizer '${i}' does not exist`);if(["options","rules","lexer"].includes(i))continue;let s=i,a=n.tokenizer[s],c=o[s];o[s]=(...l)=>{let d=a.apply(o,l);return d===!1&&(d=c.apply(o,l)),d}}r.tokenizer=o}if(n.hooks){let o=this.defaults.hooks||new oi;for(let i in n.hooks){if(!(i in o))throw new Error(`hook '${i}' does not exist`);if(["options","block"].includes(i))continue;let s=i,a=n.hooks[s],c=o[s];oi.passThroughHooks.has(i)?o[s]=l=>{if(o.options.async&&oi.passThroughHooksRespectAsync.has(i))return(async()=>{let h=await a.call(o,l);return c.call(o,h)})();let d=a.call(o,l);return c.call(o,d)}:o[s]=(...l)=>{if(o.options.async)return(async()=>{let h=await a.apply(o,l);return h===!1&&(h=await c.apply(o,l)),h})();let d=a.apply(o,l);return d===!1&&(d=c.apply(o,l)),d}}r.hooks=o}if(n.walkTokens){let o=this.defaults.walkTokens,i=n.walkTokens;r.walkTokens=function(s){let a=[];return hn(a,i.call(this,s)),o&&hn(a,o.call(this,s)),a}}this.defaults={...this.defaults,...r}}),this}setOptions(t){return this.defaults={...this.defaults,...t},this}lexer(t,e){return xt.lex(t,e??this.defaults)}parser(t,e){return Et.parse(t,e??this.defaults)}parseMarkdown(t){return(e,n)=>{let r={...n},o={...this.defaults,...r},i=this.onError(!!o.silent,!!o.async);if(this.defaults.async===!0&&r.async===!1)return i(new Error("marked(): The async option was set to true by an extension. Remove async: false from the parse options object to return a Promise."));if(typeof e>"u"||e===null)return i(new Error("marked(): input parameter is undefined or null"));if(typeof e!="string")return i(new Error("marked(): input parameter is of type "+Object.prototype.toString.call(e)+", string expected"));if(o.hooks&&(o.hooks.options=o,o.hooks.block=t),o.async)return(async()=>{let s=o.hooks?await o.hooks.preprocess(e):e,a=await(o.hooks?await o.hooks.provideLexer(t):t?xt.lex:xt.lexInline)(s,o),c=o.hooks?await o.hooks.processAllTokens(a):a;o.walkTokens&&await Promise.all(this.walkTokens(c,o.walkTokens));let l=await(o.hooks?await o.hooks.provideParser(t):t?Et.parse:Et.parseInline)(c,o);return o.hooks?await o.hooks.postprocess(l):l})().catch(i);try{o.hooks&&(e=o.hooks.preprocess(e));let s=(o.hooks?o.hooks.provideLexer(t):t?xt.lex:xt.lexInline)(e,o);o.hooks&&(s=o.hooks.processAllTokens(s)),o.walkTokens&&this.walkTokens(s,o.walkTokens);let a=(o.hooks?o.hooks.provideParser(t):t?Et.parse:Et.parseInline)(s,o);return o.hooks&&(a=o.hooks.postprocess(a)),a}catch(s){return i(s)}}}onError(t,e){return n=>{if(n.message+=`
Please report this to https://github.com/markedjs/marked.`,t){let r="<p>An error occurred:</p><pre>"+ht(n.message+"",!0)+"</pre>";return e?Promise.resolve(r):r}if(e)return Promise.reject(n);throw n}}},Qn=new yp;function ye(t,e){return Qn.parse(t,e)}ye.options=ye.setOptions=function(t){return Qn.setOptions(t),ye.defaults=Qn.defaults,jE(ye.defaults),ye};ye.getDefaults=dp;ye.defaults=er;function FN(...t){return Qn.use(...t),ye.defaults=Qn.defaults,jE(ye.defaults),ye}ye.use=FN;ye.walkTokens=function(t,e){return Qn.walkTokens(t,e)};ye.parseInline=Qn.parseInline;ye.Parser=Et;ye.parser=Et.parse;ye.Renderer=Dl;ye.TextRenderer=bp;ye.Lexer=xt;ye.lexer=xt.lex;ye.Tokenizer=Gr;ye.Hooks=oi;ye.parse=ye;var jG=ye.options,WG=ye.setOptions,qG=ye.walkTokens,YG=ye.parseInline;var KG=Et.parse,XG=xt.lex;var GN=new yp({gfm:!0,breaks:!0}),n_=["a","p","br","strong","em","b","i","u","s","del","code","pre","ul","ol","li","blockquote","h1","h2","h3","h4","h5","h6","hr","span","table","thead","tbody","tr","th","td"],r_=["href","title","class","target","rel"],o_={ALLOWED_TAGS:n_,ALLOWED_ATTR:r_,ALLOW_DATA_ATTR:!1,ALLOW_ARIA_ATTR:!1},BN={...o_,ALLOWED_TAGS:[...n_,"img"],ALLOWED_ATTR:[...r_,"src","alt","width","height"]},VN=/^language-[A-Za-z0-9_+#.-]+$/,ZN=new Set(["CODE","PRE"]);function jN(t){t.nodeName==="A"&&t.hasAttribute("href")?(t.setAttribute("target","_blank"),t.setAttribute("rel","noopener noreferrer")):(t.removeAttribute("target"),t.removeAttribute("rel"));let e=t.getAttribute("class");if(e===null)return;let n=ZN.has(t.nodeName)?e.split(/\s+/).filter(r=>VN.test(r)):[];if(n.length===0){t.removeAttribute("class");return}t.setAttribute("class",n.join(" "))}var wp;function WN(){if(wp===void 0){let t=LE();t.addHook("afterSanitizeAttributes",jN),wp=t}return wp}function li(t,e){let n=e?.allowImages===!0,r=GN.parse(t,{async:!1});return WN().sanitize(r,n?BN:o_).trim()}var $l=class{#e;#t=null;#n=0;#r="";#o=null;constructor(e){this.#e=e}get deltas(){return this.#n}countDelta(){this.#n+=1}queue(e){this.#r=e,this.#s(),this.#o===null&&(this.#o=requestAnimationFrame(()=>{this.#o=null,this.into(this.#r)}))}into(e){this.#o!==null&&(cancelAnimationFrame(this.#o),this.#o=null),this.#r=e;let n=this.#s();return n.innerHTML=li(e,{allowImages:this.#e.allowImages()}),this.#e.follow(),n}end(){this.#o!==null&&this.into(this.#r),this.#t=null}#s(){return this.#t===null&&(this.#t=this.#e.openBubble(),this.#n=0),this.#t}};function i_(t){let{messages:e,jumpButton:n,emptyWrap:r,strings:o}=t;e.className="messages",e.setAttribute("part","messages"),e.setAttribute("role","log"),e.setAttribute("aria-live","off"),e.setAttribute("aria-label",o.conversation),n.className="jump-latest",n.type="button",n.setAttribute("part","jump-latest"),n.textContent=o.jumpToLatest,r.className="empty",r.setAttribute("part","empty");let i=document.createElement("div");i.className="greeting",i.setAttribute("part","greeting");let s=document.createElement("slot");s.name="greeting",s.append(t.greetingText),i.append(s);let a=document.createElement("slot");a.name="empty",t.starters!==null&&a.append(t.starters),r.replaceChildren(i,a)}var qN=4,YN=120;function s_(t){if(typeof t!="object"||t===null)return null;let e=t.prompts;if(!Array.isArray(e))return null;let n=e.filter(r=>typeof r=="string").map(r=>r.trim()).filter(r=>r!==""&&r.length<=120).slice(0,4);return n.length===0?null:n}function ci(t,e,n){let r=s_(t);if(r===null)return null;let o=document.createElement("div");o.className="suggestions",o.setAttribute("part","suggestions"),o.setAttribute("role","group"),o.setAttribute("aria-label",e.suggestions);for(let i of r){let s=document.createElement("button");s.type="button",s.className="suggestion-chip",s.setAttribute("part","suggestion-chip"),s.textContent=i,s.addEventListener("click",()=>n(i)),o.appendChild(s)}return o}function a_(t,e,n){let r=t.getAttribute("data-starters");if(r===null)return null;let o;try{o=JSON.parse(r)}catch{return console.warn(`<ag-ui-chat>: data-starters is not valid JSON, so no starters are shown. It takes an array of strings, e.g. data-starters='["Summarise this page"]'.`),null}return ci({prompts:o},e,n)}function Ul(t,e){for(let n of Array.from(t.querySelectorAll("pre"))){let r=n.querySelector("code");r===null||n.querySelector(".code-copy")!==null||(n.classList.add("has-copy"),n.append(KN(r,e)))}}function KN(t,e){let n=t.textContent,r=document.createElement("button");return r.type="button",r.className="code-copy",r.setAttribute("part","code-copy"),r.textContent=e.copyCode,r.title=e.copyCode,r.setAttribute("aria-label",e.copyCode),r.addEventListener("click",()=>{XN(n).then(o=>{JN(r,o?e.copied:e.copyFailed,e)})}),r}async function XN(t){let e=navigator.clipboard;if(e===void 0)return!1;try{return await e.writeText(t),!0}catch{return!1}}function JN(t,e,n){t.textContent=e,t.dataset.state=e===n.copied?"copied":"failed",setTimeout(()=>{t.textContent=n.copyCode,delete t.dataset.state},1500)}function di(t){let e=t.replace(/[._-]+/g," ").trim();return e===""?t:e.charAt(0).toUpperCase()+e.slice(1)}var l_=1e3,Hl=class{element;#e;#t;#n;#r;#o;#s;#i=0;#a=!1;#l=!1;constructor(e=ve,n=()=>performance.now()){this.#r=e,this.#o=n,this.#s=n(),this.element=document.createElement("div"),this.element.className="thoughts",this.element.setAttribute("part","thoughts"),this.element.setAttribute("data-streaming",""),this.#n=document.createElement("button"),this.#n.type="button",this.#n.className="thoughts-toggle",this.#n.setAttribute("part","thoughts-toggle"),this.#n.setAttribute("aria-expanded","true"),this.#e=document.createElement("span"),this.#e.className="thoughts-label",this.#e.setAttribute("part","thoughts-label"),this.#e.textContent=e.thinking,this.#t=document.createElement("pre"),this.#t.className="thoughts-body",this.#t.setAttribute("part","thoughts-body"),this.#t.hidden=!0,this.#n.addEventListener("click",()=>{this.#d(!this.#a)}),this.element.append(this.#e,this.#t)}begin(){this.#s===null&&(this.#s=this.#o(),this.element.setAttribute("data-streaming",""),this.#e.textContent=this.#r.thinking)}stream(e){this.#t.textContent=e,this.#c(e.trim()!=="")}settle(){this.#s!==null&&(this.#i+=this.#o()-this.#s,this.#s=null,this.element.removeAttribute("data-streaming"),this.#e.textContent=this.#i<l_?this.#r.thoughts:F(this.#r.thoughtFor,{seconds:Math.round(this.#i/l_)}))}collapse(){this.settle(),!this.#a&&this.#d(!0)}#c(e){e!==this.#l&&(this.#l=e,e?(this.#n.append(this.#e),this.element.prepend(this.#n)):(this.#n.remove(),this.element.prepend(this.#e)),this.#d(this.#a))}#d(e){this.#a=e,this.#t.hidden=e||!this.#l,this.#n.setAttribute("aria-expanded",String(!e))}};var QN=new Set([Q.PENDING,Q.DEFERRED]),eO=`.tool-call-subagent > .subagent:is(${[It.STARTED,It.TOOL_CALL,It.TOOL_RESULT].map(t=>`[data-phase="${t}"]`).join(", ")})`,tO=["data-status","data-asking","data-has-result","data-phase","data-agent"];function nO(t,e){let n=e===Gt.MINIMAL;return!n&&e!==Gt.INLINE&&t.hasAttribute("data-has-args")||!n&&t.hasAttribute("data-has-result")||t.getAttribute("data-status")===Q.DEFERRED||t.querySelector(".tool-call-subagent > *")!==null}var Fl=class{element;#e;#t;#n;#r;#o;#s;#i=[];#a=!1;constructor(e,n){this.#e=e,this.#t=n,this.element=document.createElement("div"),this.element.className="tool-group",this.element.setAttribute("part","tool-group"),this.element.setAttribute("data-open","false"),this.#r=document.createElement("button"),this.#r.type="button",this.#r.className="tool-group-head",this.#r.setAttribute("part","tool-group-head"),this.#r.setAttribute("aria-expanded","false");let r=document.createElement("span");r.className="tool-group-icon",r.setAttribute("part","tool-group-icon"),r.setAttribute("aria-hidden","true"),this.#o=document.createElement("span"),this.#o.className="tool-group-label",this.#o.setAttribute("part","tool-group-label"),this.#s=document.createElement("span"),this.#s.className="tool-group-meta",this.#s.setAttribute("part","tool-group-meta");let o=document.createElement("span");o.className="tool-group-chevron",o.setAttribute("aria-hidden","true"),this.#r.append(r,this.#o,this.#s,o),this.#r.addEventListener("click",()=>{this.setOpen(this.element.getAttribute("data-open")!=="true")}),this.#n=document.createElement("div"),this.#n.className="tool-group-list",this.#n.setAttribute("part","tool-group-list"),this.element.append(this.#r,this.#n),new MutationObserver(()=>{this.refresh()}).observe(this.#n,{attributes:!0,attributeFilter:[...tO],subtree:!0})}add(e,n){let r=this.#i.filter(i=>i.name===n).length+1,o=n;if(r>1){let i=document.createElement("span");i.className="tool-call-repeat",i.setAttribute("part","tool-card-repeat"),i.textContent=F(this.#e.toolStepRepeat,{n:r}),e.querySelector(".tool-call-name")?.after(i),o=`${n} ${i.textContent}`}this.#i.push({element:e,name:n,label:o}),this.#n.append(e),this.refresh()}setOpen(e){this.element.setAttribute("data-open",String(e)),this.#r.setAttribute("aria-expanded",String(e))}#l(e){if(this.#r.disabled=!e,e){this.#r.setAttribute("aria-expanded",this.element.getAttribute("data-open"));return}this.element.setAttribute("data-open","false"),this.#r.removeAttribute("aria-expanded")}reveal(){this.#a=!0,this.setOpen(!0)}#c(){for(let{element:e}of this.#i){let n=e.getAttribute("data-status")===Q.PENDING?e.querySelector(eO):null;if(n!==null){let r=n.getAttribute("data-agent");return r===null?this.#e.subAgentWorking:F(this.#e.subAgentDelegatedTo,{agent:r})}}return null}refresh(){let e=this.#e,n=this.#i,r=n.map(T=>T.element.getAttribute("data-status")??""),o=n.filter((T,w)=>QN.has(r[w])),i=T=>r.filter(w=>w===T).length,s=i(Q.ERROR),a=i(Q.DECLINED),c=i(Q.DEFERRED),l=n.filter(T=>T.element.hasAttribute("data-asking")).length,d=c+l,h=n.length;c>0&&!this.#a?(this.#a=!0,this.setOpen(!0)):c===0&&(this.#a=!1);let m="done";d>0?m="waiting":o.length>0?m="running":s>0&&(m="error"),this.element.setAttribute("data-state",m),this.element.setAttribute("part",`tool-group tool-group-${m}`),this.element.setAttribute("data-count",String(h));let f=h===1?n[0]:void 0;if(this.#l(f===void 0||nO(f.element,this.#t())),f!==void 0)this.#o.textContent=f.label;else{let T=m==="waiting"?e.toolGroupSteps:m==="running"?e.toolGroupWorking:e.toolGroupWorked;this.#o.textContent=F(T,{count:h})}let u=[],v=this.#c(),E=o[0];d>0?u.push(F(e.toolGroupWaiting,{count:d})):v!==null?u.push(v):E!==void 0&&h>1&&u.push(E.label),s>0&&u.push(F(e.toolGroupFailed,{count:s})),a>0&&u.push(F(e.toolGroupDeclined,{count:a})),this.#s.replaceChildren(...u.map(T=>{let w=document.createElement("span");return w.className="tool-group-note",w.textContent=T,w})),this.#s.hidden=u.length===0}};function c_(t){return t===Ft.GROUPED}function Gl(t,e){try{return t()}catch(n){return console.warn(`ag-ui-chat: render failed for ${e}`,n),null}}function d_(t,e){for(let n of Array.from(t.childNodes))n.nodeType===Node.TEXT_NODE?e.push({node:n,parent:t}):d_(n,e)}function u_(t){let e=[];d_(t,e);let n=0;for(let{node:r,parent:o}of e){let i=document.createDocumentFragment();for(let s of r.data.split(/(\s+)/)){if(s==="")continue;if(/\s/.test(s)){i.appendChild(document.createTextNode(s));continue}let a=document.createElement("span");a.className="word",a.style.setProperty("--ag-ui-word-index",String(n)),a.textContent=s,i.appendChild(a),n+=1}o.replaceChild(i,r)}}function h_({viewport:t,onMissedContent:e}){let n=!0,r=!1,o=()=>t.scrollHeight-t.scrollTop-t.clientHeight<=4,i=d=>{d!==r&&(r=d,e(r))},s=()=>{t.scrollTop=t.scrollHeight},a=()=>{n=o(),n&&i(!1)},c=()=>{if(n){s();return}i(!0)};t.addEventListener("scroll",a,{passive:!0});let l=new ResizeObserver(()=>{n&&s()});return l.observe(t),{follow:c,jump:()=>{n=!0,i(!1),s()},following:()=>n,dispose:()=>{t.removeEventListener("scroll",a),l.disconnect()}}}var Bl=class{#e;#t=new Map;#n=new Map;#r=new Map;#o=new Set;#s;#i=null;#a=null;#l=null;#c=new WeakMap;#d=new WeakMap;#f=new WeakMap;constructor(e){this.#e=e}mountScroller(e,n){e.addEventListener("click",()=>{this.jump()},{signal:n}),this.#s=h_({viewport:this.#e.messages,onMissedContent:r=>{e.dataset.missed=String(r)}})}disposeScroller(){this.#s.dispose()}follow(){this.#s.follow()}jump(){this.#s.jump()}isEmpty(){return!this.#e.emptyWrap.hidden}card(e){return this.#t.get(e)}cards(){return this.#t.values()}forgetCard(e){this.#t.delete(e)}setCardElement(e,n){this.#n.set(e,n)}markServerSettled(e){this.#o.add(e)}isServerSettled(e){return this.#o.has(e)}collapseThoughts(){this.#l?.collapse()}settleThoughts(){this.#l?.settle()}closeGroup(){this.#a!==null&&this.#a.childElementCount===0&&(this.#a.remove(),this.updateEmptyState()),this.settleThoughts(),this.#a=null,this.#l=null}releaseTurn(){this.#a=null,this.#l=null,this.hidePending(),this.#t.clear()}forgetCards(){this.#o.clear(),this.#n.clear(),this.#r.clear()}holdRunning(e,n){this.#r.set(e,n)}setAsking(e,n){this.#r.get(e)?.setAsking(n)}empty(){this.#e.messages.replaceChildren(this.#e.emptyWrap),this.updateEmptyState()}append(e,n){let r=document.createElement("div");return r.className=`message message--${e}`,r.setAttribute("part",`message message-${e}`),e===et.ASSISTANT?(r.innerHTML=li(n,{allowImages:this.#e.allowImages()}),Ul(r,this.#e.strings()),this.ensureGroup().appendChild(r)):(this.#a=null,r.textContent=n,this.#e.messages.appendChild(r)),this.updateEmptyState(),e===et.USER?this.jump():this.follow(),r}ensureGroup(){if(this.#a===null){let e=document.createElement("div");e.className="answer",e.setAttribute("part","answer"),this.#a=e,this.#e.messages.appendChild(e),this.updateEmptyState()}return this.#a}revealWords(e){this.#e.element.getAttribute("data-text-animation")==="word"&&u_(e)}updateEmptyState(){this.#e.emptyWrap.hidden=this.#e.messages.childElementCount>1,this.#e.element.toggleAttribute("data-empty",!this.#e.emptyWrap.hidden),this.#e.changed()}appendStoppedNote(){let e=document.createElement("div");e.className="stopped-note",e.setAttribute("part","stopped"),e.setAttribute("role","status"),e.textContent=this.#e.strings().stopped,this.ensureGroup().appendChild(e),this.updateEmptyState(),this.follow()}appendUsageLine(e){let n=document.createElement("div");n.className="usage-line",n.setAttribute("part","usage-line"),n.textContent=e,this.ensureGroup().appendChild(n),this.follow()}showPending(){if(this.#i!==null)return;let e=document.createElement("div");e.className="pending",e.setAttribute("part","pending"),e.setAttribute("role","status"),e.setAttribute("aria-label",this.#e.strings().thinking);for(let n=0;n<3;n+=1){let r=document.createElement("span");r.className="pending-dot",e.appendChild(r)}this.#i=e,this.ensureGroup().appendChild(e),this.updateEmptyState(),this.follow()}hidePending(){this.#i?.remove(),this.#i=null}showThoughts(){if(this.#l===null){this.#l=new Hl(this.#e.strings());let e=this.ensureGroup();e.insertBefore(this.#l.element,e.firstChild),this.updateEmptyState(),this.follow()}return this.#l}noticeIfSkillLoad(e){let n=Ga(e);return n===null?!1:(this.appendNotice("\u2728",F(this.#e.strings().usingSkill,{name:n}),"skill"),!0)}appendNotice(e,n,r,o){this.ensureGroup().appendChild($r(e,n,r,o)),this.updateEmptyState(),this.follow()}renderToolOutput(e,n){let r=Gl(()=>e(n.args),`tool ${n.name}`);if(r===null)return;let o=this.#n.get(n.id),i=o?.closest(".tool-group");if(i==null)o?.after(r);else{let s=this.#d.get(i);s===void 0&&(s=document.createComment(""),i.after(s),this.#d.set(i,s));let a=r instanceof DocumentFragment?[...r.children]:[r];s.before(r);for(let c of a)this.#f.set(c,i)}this.afterGrew()}afterGrew(){this.updateEmptyState(),this.follow()}cardFor(e){let n=this.#t.get(e.id);if(n!==void 0)return n;let r=this.#e.resolveTool(e.name)?.parameters[Ue],o=typeof r=="string"?r:this.#e.toolSummaries()[e.name]??this.#e.serverSummary(e.name)??di(e.name),i=new Xo(e.name,e.args,o,this.#e.strings(),{formatPayload:s=>this.#e.formatToolPayload(s)});return this.#t.set(e.id,i),c_(this.#e.toolDisplay())?this.#g().add(i.element,o):this.ensureGroup().appendChild(i.element),this.updateEmptyState(),this.follow(),i}refreshStepGroups(){for(let e of this.#e.messages.querySelectorAll(".tool-group"))this.#c.get(e)?.refresh()}revealStep(e){let n=e.element.closest(".tool-group");(n===null?void 0:this.#c.get(n))?.reveal()}#g(){let e=this.ensureGroup(),n=e.lastElementChild,r=n===null?void 0:this.#c.get(this.#f.get(n)??n);if(r!==void 0)return r;let o=new Fl(this.#e.strings(),this.#e.toolGroupDisplay);return this.#c.set(o.element,o),n===null?e.prepend(o.element):n.after(o.element),o}};var Vl=class{#e;#t=new Map;#n=new Set;#r=new Map;constructor(e){this.#e=e}register(e){this.#t.set(e.type,e),this.#n.delete(e.type)}has(e){return this.#t.has(e)}unhandledTypes(){return[...this.#n]}clearBlocks(){this.#r.clear()}draw(e,n,r,o){let i=this.#t.get(n);if(i===void 0){this.#n.add(n);return}let s=this.#r.get(e)??null,a=Gl(()=>i.render(r,{messageId:e,previous:s,live:o}),`activity ${n}`);if(a===null){this.#o(e,n,i.removedNotice,r);return}if(oO(a)){this.#r.get(e)?.remove(),this.#r.delete(e);return}let c=a.nodeType===Node.DOCUMENT_FRAGMENT_NODE?rO(a):a;if(c===s){this.#e.afterTranscriptGrew();return}s===null?this.#e.ensureGroup().appendChild(c):s.replaceWith(c),this.#r.set(e,c),this.#e.afterTranscriptGrew()}#o(e,n,r,o){let i=this.#r.has(e);this.#r.get(e)?.remove(),this.#r.delete(e),console.warn(`ag-ui-chat: activity ${e} (${n}) was not drawable and has been removed. A chart's points must each be a finite JSON number; a numeric column serialised as a string (a Decimal, typically) is rejected rather than coerced.`,o),i&&r!==void 0&&this.#e.appendNotice("\u{1F4C9}",r,"chart-undrawable")}};function rO(t){let e=document.createElement("div");return e.style.display="contents",e.append(t),e}function oO(t){return t.nodeType===Node.DOCUMENT_FRAGMENT_NODE&&!t.hasChildNodes()}function p_(t,e){let n=t?.resourceUri;return $r("\u{1F5BC}",F(e,{uri:typeof n=="string"?n:""}),"mcp-app")}function f_(t,e){let n=iO(t);if(n.length===0)return document.createDocumentFragment();let r=document.createElement("div");r.className="enqueued-messages",r.setAttribute("part","enqueued-messages");for(let i of n){let s=document.createElement("div");s.className="message message--user",s.setAttribute("part","message message-user"),s.textContent=i,r.append(s)}let o=document.createElement("div");return o.className="enqueued-messages-note",o.setAttribute("part","enqueued-messages-note"),o.textContent=e,r.append(o),r}function iO(t){let e=xp(t)?.messages;if(!Array.isArray(e))return[];let n=[];for(let r of e){let o=xp(r);if(o?.role!=="user")continue;let i=sO(o.content);i.trim()!==""&&n.push(i)}return n}function sO(t){if(typeof t=="string")return t;if(!Array.isArray(t))return"";let e=[];for(let n of t){let r=xp(n),o=r?.text;r?.type==="text"&&typeof o=="string"&&e.push(o)}return e.join(`
`)}function xp(t){return typeof t=="object"&&t!==null?t:null}function m_(t){let e=()=>document.createDocumentFragment();return[{type:xn.ENQUEUED_MESSAGES,render:n=>f_(n,t().enqueuedMessages)},{type:xn.MCP_APPS,render:n=>p_(n,t().mcpAppUnsupported)},{type:xn.COMPACTION,render:e},{type:xn.TOOL_AVAILABILITY_DELTA,render:e},{type:xn.MODEL_SETTINGS_DELTA,render:e},{type:xn.CAPABILITY_LOAD_DELTA,render:e}]}var Zr=class extends Rw{runLog;followed=!1;constructor(e){super(e);let n=e.eventsUrl;this.runLog=typeof n=="function"?n:()=>n;let r=this.fetch,o=this;this.fetch=function(i,s){return aO(this??o,r,i,s)}}get eventsUrl(){return this.runLog()}connectAgent(e,n){return this.abortController=new AbortController,super.connectAgent(e,n)}connect(e){let n=this.eventsUrl;return n===void 0?super.connect(e):yh(bh(()=>g_(this,(r,o)=>this.fetch(r,o),n)),this.debugLogger)}clone(){let e=super.clone();return e.runLog=this.runLog,e.followed=!1,e}};function g_(t,e,n){return e(`${n}?after=0`,{method:"GET",headers:{...t.headers,Accept:"text/event-stream"},signal:t.abortController.signal})}async function aO(t,e,n,r){if(r.method!=="POST")return e(n,r);t.followed=!1;let o=await e(n,r),i=o.headers.get("Content-Type")??"";if(!o.ok||!i.includes("application/json"))return o;let s=await o.json(),a=t.eventsUrl;if(a===void 0||s.thread_id!==t.threadId)throw new Error(`The server queued the run on thread "${String(s.thread_id)}" for a worker, and this agent has no run log of that thread to follow it in: data-threads-url is unset, or the answer names another thread.`);return t.followed=!0,g_(t,e,a)}var lO=250,Zl=class extends Error{constructor(e){super(e),this.name="ConnectionLostError"}},ui=class{#e;#t;#n;#r;#o;#s;#i;#a=new Set;#l;#c;#d;#f;#g;#v=null;#u=!1;constructor(e){this.#e=e.agent,this.#t=e.handlers,this.#n=e.getTools??(()=>[]),this.#r=e.getContext??(()=>[]),this.#o=e.executeTool??null,this.#s=e.resolveInterrupts??null,this.#i=e.onPersist??(()=>{}),this.#l=e.connectionLostMessage??"Connection lost",this.#c=e.unfinishedMessage??"Not finished: the run ended or moved on before this tool call returned a result.",this.#d=e.declinedMessage??"User declined the action.",this.#g=e.detach??(()=>!1);let n=e.maxToolRounds??dr;this.#f=n>=1?Math.floor(n):dr,this.#E();let r=e.onStateChanged;r!==void 0&&this.#e.subscribe({onStateChanged:({state:o})=>{r(o)}})}get state(){return this.#e.state}setState(e){this.#e.setState({...e})}get running(){return this.#e.isRunning}get canReattach(){return Reflect.get(this.#e,"connect")!==Reflect.get(_h.prototype,"connect")}get messages(){return this.#e.messages}async send(e,n=[]){this.#u=!1;let r={id:Ie(),role:"user",content:e,...n.length>0?{metadata:{attachments:n}}:{}};this.#e.addMessage(r),this.#k(),await this.#m(void 0,{id:r.id,content:e,attachments:n})}async reattach(){this.#u=!1,await this.#m(void 0,null,!0)}async run(e,n){this.#u=!1,await this.#m({request:e,onStarted:n},null)}truncateToLastUser(){let e=[...this.#e.messages],n=-1;for(let[o,i]of e.entries())i.role==="user"&&(n=o);if(n===-1)return null;let r=e.slice(0,n+1);return this.#i(r),this.#e.setMessages(r),r}async resume(){this.#u=!1,await this.#m(void 0,null)}async answerParked(e){this.#u=!1;let n=this.#s,r;await this.#m({onStarted:void 0,parked:{interrupts:e,answers:()=>(r??=n===null?Promise.resolve(null):n(e),r)}},null)}addToolResult(e,n){this.#e.addMessage({id:Ie(),role:"tool",content:n,toolCallId:e}),this.#k()}cancel(){this.#u=!0,this.#e.abortRun()}async#m(e,n,r=!1){try{try{await this.#H(e,r)}catch(o){if(!r&&this.#b(o))await new Promise(i=>setTimeout(i,lO)),this.#u||await this.#H(e,!1);else{if(r||!this.#p(o,n))throw o;await this.#H(void 0,!0)}}this.#u&&this.#x()}catch(o){if(this.#u||dO(o))this.#x();else{let i=o instanceof Error?o.message:String(o),s=cO(o);s===null?this.#t.onError(i):this.#t.onError(s.message??i,{code:s.code})}}finally{this.#t.onSettled()}}#p(e,n){let r=this.#T(e);return r===null||r===this.#v||!this.#g()?!1:(this.#v=r,n!==null&&(this.#e.setMessages(this.#e.messages.filter(o=>o.id!==n.id)),this.#k(),this.#t.onTurnRefused?.(n.content,n.attachments)),!0)}#b(e){return this.#v!==null&&this.#T(e)===this.#v}#T(e){if(!(e instanceof Error)||Reflect.get(e,"status")!==409)return null;let n=Reflect.get(e,"payload");if(typeof n!="object"||n===null||!this.canReattach)return null;let r=Reflect.get(n,"run_id"),o=Reflect.get(n,"thread_id");return typeof r=="string"&&o===this.#e.threadId?r:null}#x(){this.#k(),this.#t.onCancelled()}#E(){let e=this.#e.messages,n=e.map(uO);n.some((r,o)=>r!==e[o])&&this.#e.setMessages(n)}#R(e){let n=this.#e.messages,r=Ua(n,o=>({id:Ie(),role:"tool",content:this.#c,toolCallId:o,metadata:{outcome:tt.INTERRUPTED}}),e);r!==n&&(this.#e.setMessages([...r]),this.#k())}#h(e,n){for(let r of e){let o=r.toolCallId;o!==void 0&&n[r.id]?.status==="cancelled"&&this.#e.addMessage({id:Ie(),role:"tool",content:this.#d,toolCallId:o,metadata:{outcome:tt.DENIED}})}this.#k()}#k(){this.#i(this.#e.messages)}async#H(e,n=!1){let r,o=new Set,i=e?.parked;if(i!==void 0){let s=await i.answers();if(s===null||this.#u)return;r=Eh([...i.interrupts],s),o=new Set(i.interrupts.flatMap(({toolCallId:a})=>a??[]))}for(let s=0;s<this.#f;s+=1){if(this.#u)return;let a=[],c={terminal:!1,errored:!1,cancelled:!1,interrupts:[]},l={tools:this.#n(),context:this.#r()};r!==void 0&&(l.resume=r);let d=s===0?e?.request:void 0,h=this.#g()?{detach:!0}:null;if((d!==void 0||h!==null)&&(l.forwardedProps={...d?.forwardedProps,...h}),d?.runId!==void 0&&(l.runId=d.runId),this.#R(o),this.#u)return;let m=d?.message,f=m===void 0?void 0:{id:m.id,role:"user",content:m.content},u=s===0?e?.onStarted:void 0,v=n&&s===0,E=this.#ee(a,c,f,u,v);if(await(v?this.#e.connectAgent(l,E):this.#e.runAgent(l,E)),r=void 0,o=new Set,this.#k(),this.#u)return;if(!c.terminal)throw new Zl(this.#l);if(c.errored)return;if(c.cancelled){this.#u=!0;return}if(c.interrupts.length>0){if(this.#s===null)return;let w=await this.#s(c.interrupts);if(this.#u){this.#h(c.interrupts,w);return}r=Eh(c.interrupts,w),o=new Set(c.interrupts.flatMap(({toolCallId:D})=>D??[]));continue}if(this.#o===null||a.length===0)return;let T=!1;for(let w of a){if(this.#u)return;let D=await this.#o(w);if(D!==null){if(D.halt===!0)return;this.#e.addMessage({id:Ie(),role:"tool",content:D.content,toolCallId:w.id,...D.outcome===void 0?{}:{metadata:{outcome:D.outcome}}}),this.#k(),T=!0}}if(!T)return}}#ee(e,n,r,o,i){let s=this.#t,a=this.#a,c=()=>this.#u,l=new Set,d,h=!i,m=i,f=this.#e;return{onRunInitialized(){s.onRunStart()},onRunStartedEvent({event:u,messages:v}){return d=u.runId,o?.(),r===void 0?void 0:{messages:[...v,r]}},onTextMessageStartEvent({event:u}){!i&&a.has(u.messageId)&&console.warn(`<ag-ui-chat>: the server reused message id "${u.messageId}", which was already closed. Its content will be appended to that earlier message rather than starting a new one, and the merged result is what gets persisted. Issue a fresh id per message.`)},onTextMessageContentEvent({textMessageBuffer:u}){s.onTextDelta(u)},onTextMessageEndEvent({event:u,textMessageBuffer:v}){a.add(u.messageId),s.onTextEnd(v,{messageId:u.messageId,...d===void 0?{}:{runId:d}})},onToolCallEndEvent({event:u,toolCallName:v,toolCallArgs:E}){let T={id:u.toolCallId,name:v,args:E};e.push(T),s.onToolCall(T)},onToolCallResultEvent({event:u}){let v=u.metadata?.outcome;s.onToolResult(u.toolCallId,mr(u.content),v,u.metadata?.answered_by)},onActivitySnapshotEvent({event:u,messages:v}){if(v.some(T=>T.id===u.messageId&&T.role==="activity")){s.onActivityChanged(u.messageId,u.activityType,u.content);return}s.onActivity(u.activityType,u.content,u.messageId)},onActivityDeltaEvent({event:u}){l.add(u.messageId)},onCustomEvent({event:u}){s.onCustomEvent(u.name,u.value)},onSubagentStartedEvent({event:u}){s.onSubAgentStarted(u.subagentRunId,u.name,u.parentToolCallId??null)},onSubagentFinishedEvent({event:u}){s.onSubAgentFinished(u.subagentRunId)},onSubagentErrorEvent({event:u}){s.onSubAgentError(u.subagentRunId,u.message)},onMessagesSnapshotEvent({event:u}){let v=!m&&f instanceof Zr&&f.followed;if(m=!0,v)return{stopPropagation:!0};s.onMessagesSnapshot(u.messages,!h),h=!0},onMessagesChanged({messages:u}){for(let v of l){let E=u.find(T=>T.id===v);E!==void 0&&E.role==="activity"&&s.onActivityChanged(v,E.activityType,E.content)}l.clear()},onReasoningStartEvent(){s.onReasoningStart()},onReasoningMessageContentEvent({reasoningMessageBuffer:u}){s.onReasoningDelta(u)},onReasoningMessageEndEvent({reasoningMessageBuffer:u}){s.onReasoningDelta(u)},onReasoningEndEvent(){s.onReasoningEnd()},onRunFinishedEvent(u){n.terminal=!0;let v=u.event.usage;v!==void 0&&s.onUsage?.(v),u.outcome==="interrupt"&&(n.interrupts=u.interrupts),u.outcome==="cancelled"&&(n.cancelled=!0)},onRunErrorEvent({event:u}){n.terminal=!0,n.errored=!0,!c()&&s.onError(u.message,u.code===void 0?{}:{code:u.code})},onRunFinalized(){n.terminal=!0,s.onRunEnd()}}}};function cO(t){let e=t instanceof Error?Reflect.get(t,"payload"):void 0;if(typeof e!="object"||e===null)return null;let n=Reflect.get(e,"code");if(typeof n!="string")return null;let r=Reflect.get(e,"error");return typeof r=="string"?{code:n,message:r}:{code:n}}function dO(t){return t instanceof Error?t.name==="AbortError"||t instanceof TypeError&&/abort/i.test(t.message):!1}function uO(t){let{outcome:e,attachments:n,...r}=t;if(e===void 0&&n===void 0)return t;let o=r.metadata;return{...r,metadata:{...e===void 0?{}:{outcome:e},...n===void 0?{}:{attachments:n},...typeof o=="object"?o:{}}}}var jr="thread",Ep="threads",hi="messages:",Wl="checkpoint:",pi="minted:",hO=60,pO=100,fO="New conversation",mO=/^\/([A-Za-z0-9][\w.-]*)$/;function pn(t,e,n={reported:!1}){try{sessionStorage.setItem(t,e)}catch{if(n.reported)return;n.reported=!0,console.warn("<ag-ui-chat>: the browser refused a sessionStorage write \u2014 the quota is full, or storage is disabled for this context. The conversation continues, but it will not survive a page reload. Deleting a long conversation from the history drawer frees the quota.")}}function jl(t){return t===""?gt:`${gt}@${t}`}var Ve=class{#e;#t={reported:!1};constructor(e=""){this.#e=jl(e)}static adopt(e,n){let r=`${jl(e)}:`,o=`${jl(n)}:`,i={reported:!1};for(let[s,a]of v_(r)){let c=sessionStorage.getItem(s),l=o+a;c!==null&&sessionStorage.getItem(l)===null&&pn(l,c,i),sessionStorage.removeItem(s)}}static purge(e){for(let[n]of v_(`${jl(e)}:`))sessionStorage.removeItem(n)}threadId(){return sessionStorage.getItem(this.#i(jr))??this.newThread()}newThread(){let e=Ie();return this.#s(this.#i(jr),e),this.#s(this.#i(pi+e),"1"),e}isUnsent(e){return sessionStorage.getItem(this.#i(pi+e))!==null&&sessionStorage.getItem(this.#i(hi+e))===null}loadMessages(e){return Promise.resolve(this.#a(this.#i(hi+e)))}saveMessages(e,n){this.#s(this.#i(hi+e),JSON.stringify(n)),sessionStorage.removeItem(this.#i(pi+e)),this.#n(e,n)}loadCheckpoint(e){return this.#a(this.#i(Wl+e))}saveCheckpoint(e,n){let r=this.#i(Wl+e);if(n===null){sessionStorage.removeItem(r);return}this.#s(r,JSON.stringify(n))}clear(e){sessionStorage.removeItem(this.#i(hi+e)),sessionStorage.removeItem(this.#i(Wl+e)),sessionStorage.removeItem(this.#i(pi+e)),this.#o(this.#r().filter(n=>n.threadId!==e)),sessionStorage.getItem(this.#i(jr))===e&&sessionStorage.removeItem(this.#i(jr))}listThreads(){let e=this.#r().sort((n,r)=>r.updatedAt-n.updatedAt).map(({threadId:n,title:r,updatedAt:o,preview:i})=>({threadId:n,title:r,updatedAt:o,preview:i}));return Promise.resolve(e)}setActiveThread(e){this.#s(this.#i(jr),e)}renameThread(e,n){let r=this.#r(),o=r.find(i=>i.threadId===e);o!==void 0&&(o.title=n,o.titleCustom=!0,this.#o(r))}#n(e,n){let r=this.#r(),o=r.find(a=>a.threadId===e),i=vO(n),s=Date.now();o===void 0?r.push({threadId:e,title:b_(n),titleCustom:!1,preview:i,updatedAt:s}):(o.preview=i,o.updatedAt=s,o.titleCustom||(o.title=b_(n))),this.#o(r)}#r(){return this.#a(this.#i(Ep))??[]}#o(e){let n=this.#i(Ep);if(e.length===0){sessionStorage.removeItem(n);return}this.#s(n,JSON.stringify(e))}#s(e,n){pn(e,n,this.#t)}#i(e){return`${this.#e}:${e}`}#a(e){let n=sessionStorage.getItem(e);if(n===null)return null;try{return JSON.parse(n)}catch{return null}}};function v_(t){let e=[];for(let n=0;n<sessionStorage.length;n+=1){let r=sessionStorage.key(n);if(r===null||!r.startsWith(t))continue;let o=r.slice(t.length);gO(o)&&e.push([r,o])}return e}function gO(t){return t===jr||t===Ep||t.startsWith(hi)||t.startsWith(Wl)||t.startsWith(pi)}function b_(t){let e=Wr(t);return e===""?fO:e}function Wr(t,e=()=>{}){for(let n of t)if(n.role==="user"){let r=y_(n.content);if(r!==""){let o=mO.exec(r)?.[1],i=o===void 0?r:e(o)??di(o);return w_(i,hO)}}return""}function vO(t){for(let e of[...t].reverse()){let n=y_(e.content);if(n!=="")return w_(n,pO)}return""}function y_(t){return typeof t=="string"?t.replace(/\s+/g," ").trim():""}function w_(t,e){return t.length<=e?t:`${t.slice(0,e-1).trimEnd()}\u2026`}function _p(t){let e=t.headers??{},n=new Set;return new Zr({url:t.endpoint,headers:e,initialState:{...t.initialState??{}},fetch:(r,o)=>{let i=t.getHeaders?.(),s=[...new Set([...Object.keys(e),...Object.keys(i??{})])].sort();if($a(r,s,t.trustedOrigins??[],n),i===void 0)return fetch(r,He(o,t.credentials));let a=new Headers(o?.headers);for(let[c,l]of Object.entries(i))a.set(c,l);return fetch(r,He({...o,headers:a},t.credentials))},...t.threadId!==void 0?{threadId:t.threadId}:{},...t.getEventsUrl!==void 0?{eventsUrl:t.getEventsUrl}:t.eventsUrl!==void 0?{eventsUrl:t.eventsUrl}:{},...t.initialMessages!==void 0?{initialMessages:[...t.initialMessages]}:{}})}var ql=class{#e;#t;#n;constructor(e,n,r){this.#e=e.endsWith("/")?e:`${e}/`,this.#t=n,this.#n=r}eventsUrl(e){return`${this.#e}${encodeURIComponent(e)}/events/`}async running(e){let n=`${this.eventsUrl(e)}?after=0&limit=1`;try{let r=await fetch(n,He({method:"GET",headers:{...this.#t(n),Accept:"application/json"}},this.#n()));return r.ok?(await r.json()).status==="running":!1}catch{return!1}}async cancel(e){let n=`${this.#e}${encodeURIComponent(e)}/cancel/`;try{await fetch(n,He({method:"POST",headers:this.#t(n)},this.#n()))}catch{}}};function Yl(t,e){let n=t.getAttribute(e);return n!==null&&n!=="false"}function Tp(t,e){let n=t.getAttribute(e);if(n===null)return null;try{return JSON.parse(n)}catch{return console.warn(`<ag-ui-chat>: ${e} is not valid JSON, so it was ignored entirely and the built-in default is being used. Check the quoting -- JSON inside an HTML attribute needs single quotes around the attribute value, or its own double quotes escaped.`),null}}function x_(t){let e=t.getAttribute("data-max-tool-rounds");return e===null?dr:Number.parseInt(e,10)}var E_=5e3,__="text/event-stream",qr=class{#e;#t=new AbortController;#n;#r=null;constructor(e){this.#e=e,this.#n=e.transport}start(){return this.#o(0),()=>{this.#t.abort(),this.#r!==null&&clearTimeout(this.#r)}}#o(e){this.#r=setTimeout(()=>{this.#r=null,this.#n==="stream"?this.#i():this.#s()},e)}async#s(){let e=await this.#e.poll();this.#t.signal.aborted||(e!=null&&this.#e.changed(e),this.#o(E_))}async#i(){let e=this.#e.etag(),n={...this.#e.headers(),Accept:__,...e===null?{}:{"Last-Event-ID":e}};try{let r=await fetch(this.#e.url,He({headers:n,signal:this.#t.signal},this.#e.credentials()));r.ok&&r.body!==null&&await this.#a(r)}catch{}this.#t.signal.aborted||this.#o(E_)}async#a(e){if(!(e.headers.get("content-type")??"").startsWith(__)){this.#n="poll";let i=await e.json();this.#c(e.headers.get("ETag"),i.threads??[]);return}let n=e.body.getReader(),r=new TextDecoder,o="";for(;;){let{value:i,done:s}=await n.read();if(s)return;o+=r.decode(i,{stream:!0});let a=o.indexOf(`

`);for(;a!==-1;)this.#l(o.slice(0,a)),o=o.slice(a+2),a=o.indexOf(`

`)}}#l(e){let n=null,r=[];for(let i of e.split(`
`))i.startsWith("id:")?n=i.slice(3).trim():i.startsWith("data:")&&r.push(i.slice(5).trimStart());if(r.length===0)return;let o=JSON.parse(r.join(`
`));this.#c(n,o.threads??[])}#c(e,n){this.#e.seen(e,n),this.#e.changed(n)}};var bO="New conversation",tr=class{#e;#t;#n;#r;#o;#s=new Set;#i=new Map;#a=new Map;#l=null;#c=null;#d=!1;#f=new Map;constructor(e,n=()=>({}),r=new Ve,o=()=>{},i=!0){this.#e=e.endsWith("/")?e:`${e}/`,this.#t=n,this.#n=r,this.#r=o,this.#o=i}get local(){return this.#n}threadId(){return this.#l=this.#n.threadId(),this.#l}setActiveThread(e){this.#n.setActiveThread(e),this.#l=e}newThread(){return this.#l=Da(this.#n),this.#l}isUnsent(e){return this.#n.isUnsent?.(e)===!0}saveMessages(e,n){this.#n.saveMessages(e,this.#o?n:[]),this.#a.set(e,{threadId:e,title:Wr(n)||bO,updatedAt:Date.now(),preview:""})}loadCheckpoint(e){return this.#n.loadCheckpoint(e)}saveCheckpoint(e,n){this.#n.saveCheckpoint(e,n)}renameThread(e,n){this.#n.renameThread(e,n),this.#i.set(e,n),this.#E(e,"PATCH",{title:n})}clear(e){this.#n.clear(e),this.#s.add(e),this.#a.delete(e),this.#E(e,"DELETE")}async listThreads(){let e=await this.#m();return e===null?this.#n.listThreads():this.#v(e)}markRead(e){let n=this.#c?.rows.find(r=>r.thread_id===e);n!==void 0&&this.#f.set(e,T_(n)),this.#d&&this.#E(e,"POST",void 0,"read/")}watchThreads(e,n){let r;return new qr({url:this.#e,transport:n,headers:this.#t,credentials:this.#r,poll:async()=>{let i=await this.#m(),s=this.#c;if(i===null)return null;if(s===null)return r=null,i;if(s.etag!==r)return r=s.etag,s.rows},seen:(i,s)=>{this.#g(i,s),r=i},changed:i=>e(this.#v(i)),etag:()=>r??null}).start()}async waitingInterrupts(e){return this.#c!==null&&!this.#d?[]:(await this.#m())?.find(r=>r.thread_id===e)?.interrupts??[]}#g(e,n){this.#d=n.some(r=>r.status!==void 0),this.#c=e===null?null:{etag:e,rows:n}}#v(e){let n=e.filter(o=>!this.#s.has(o.thread_id)).map(o=>this.#b(o)),r=this.#u(e);return r===null?n:[r,...n]}#u(e){for(let r of e)this.#a.delete(r.thread_id);let n=this.#l===null?void 0:this.#a.get(this.#l);return n===void 0?null:{...n,title:this.#i.get(n.threadId)??n.title}}async loadMessages(e){if(this.#n.isUnsent?.(e)===!0)return null;let n=await this.#x(`${this.#e}${encodeURIComponent(e)}/`);if(n===null||!n.ok)return this.#n.loadMessages(e);let r=await this.#p(n);return r===null?this.#n.loadMessages(e):r.messages??null}async#m(){let e=this.#c,n=await this.#x(this.#e,e===null?{}:{"If-None-Match":e.etag});if(n!==null&&n.status===304&&e!==null)return e.rows;if(n===null||!n.ok)return null;let r=await this.#p(n);if(r===null)return null;let o=r.threads??[];return this.#g(n.headers.get("ETag"),o),o}async#p(e){try{return await e.json()}catch{return null}}#b(e){let n=T_(e),r={threadId:e.thread_id,title:this.#i.get(e.thread_id)??e.title,updatedAt:n,preview:e.preview,...yO(e),...wO(e)};return e.status===void 0?r:{...r,status:e.status,unread:this.#T(e,n),...e.status==="failed"&&typeof e.reason=="string"?{reason:e.reason}:{},...e.status==="waiting"&&e.interrupts!==void 0?{interrupts:e.interrupts}:{}}}#T(e,n){let r=e.last_read_at;if(e.status==="running"||r===null||r===void 0)return!1;let o=this.#f.get(e.thread_id);return o!==void 0&&n<=o?!1:n>Date.parse(r)}async#x(e,n={}){try{return await fetch(e,He({headers:{...this.#t(),...n}},this.#r()))}catch{return null}}async#E(e,n,r,o=""){let i=this.#t();try{await fetch(`${this.#e}${encodeURIComponent(e)}/${o}`,He({method:n,headers:r===void 0?i:{...i,"content-type":"application/json"},body:r===void 0?null:JSON.stringify(r)},this.#r()))}catch{}}};function T_(t){return t.updated_at===null?Number.NaN:Date.parse(t.updated_at)}function yO(t){let e=t.parent;if(typeof e!="object"||e===null)return{};let{thread_id:n,scope:r}=e;return typeof n!="string"||n===""?{}:{parent:{threadId:n,scope:typeof r=="string"?r:null}}}function wO(t){let e=t.routine;if(typeof e!="object"||e===null)return{};let{id:n,name:r}=e;return typeof n!="string"||typeof r!="string"?{}:{routine:{id:n,name:r}}}function S_(t,e){let{input:n,output:r}=e;return n!==null&&r!==null?F(t.usageBoth,{input:Kl(n),output:Kl(r)}):n!==null?F(t.usageInput,{input:Kl(n)}):r!==null?F(t.usageOutput,{output:Kl(r)}):null}function Kl(t){return String(t).replace(/\B(?=(\d{3})+(?!\d))/g,",")}var k_="identifier_too_long";function A_(){return{tools:[],serverSettled:new Set,invalidated:new Set,announcedOutcome:!1,outcome:"completed",usage:{input:null,output:null}}}function R_(t,e){return e===void 0?t:(t??0)+e}function I_(t,e){let n={};for(let[r,o]of Object.entries(t))n[r]=(...i)=>{e()&&o(...i)};return n}var Xl=class{#e;#t=A_();constructor(e){this.#e=e}detach(){this.#t=A_()}forClient(e){let n=this.#t,r=()=>n===this.#t,{onSettled:o,onError:i,onCancelled:s,...a}=this.#n(n,e),c=I_({onError:i,onCancelled:s},r);return{...I_(a,r),onError:(l,d)=>{n.outcome="failed",c.onError(l,d)},onCancelled:()=>{n.outcome="stopped",c.onCancelled()},onSettled:()=>{r()&&o(),n.usage={input:null,output:null},this.#e.runSettled(e),this.#s(n,e)}}}#n(e,n){return{onRunStart:()=>{this.#e.running()||(e.announcedOutcome=!1,this.#e.announcer.announce(this.#e.strings().announceResponding)),this.#e.setRunning(!0),this.#e.transcript.ensureGroup(),this.#e.transcript.showPending()},onReasoningStart:()=>{this.#e.transcript.hidePending(),this.#e.transcript.showThoughts().begin()},onReasoningDelta:r=>{this.#e.transcript.showThoughts().stream(r)},onReasoningEnd:()=>{this.#e.transcript.settleThoughts()},onTextDelta:r=>{this.#e.transcript.hidePending(),this.#e.transcript.collapseThoughts(),this.#e.stream.queue(r),this.#e.stream.countDelta()},onTextEnd:(r,o)=>{if(r===""){this.#e.stream.end();return}let i=this.#e.stream.into(r);this.#e.stream.deltas<=1&&this.#e.transcript.revealWords(i),Ul(i,this.#e.strings()),this.#e.actions.attach(i,o),this.#e.stream.end(),this.#e.noteUnread(n)},onToolCall:r=>{this.#e.transcript.hidePending(),this.#e.transcript.settleThoughts(),!this.#e.transcript.noticeIfSkillLoad(r)&&(e.tools.push({id:r.id,name:r.name}),this.#e.transcript.cardFor(r))},onActivity:(r,o,i)=>{this.#e.activities.draw(i,r,o,!0)},onCustomEvent:(r,o)=>{if(r===Gc){this.#i(e,o);return}if(r===sf){this.#e.subagents.report(o);return}r===of&&this.#e.skillsChanged(),this.#e.element.dispatchEvent(new CustomEvent($c,{detail:{name:r,value:o},bubbles:!0,composed:!0}))},onSubAgentStarted:(r,o,i)=>{this.#e.subagents.start(r,o,i)},onSubAgentFinished:r=>{this.#e.subagents.finish(r)},onSubAgentError:(r,o)=>{this.#e.subagents.fail(r,o)},onMessagesSnapshot:(r,o)=>{if(o){this.#e.redraw(r);return}this.#e.transcript.appendNotice("\u{1F504}",this.#e.strings().historyReplaced,"history-replaced")},onToolResult:(r,o,i,s)=>{let a=this.#e.transcript.card(r);a!==void 0&&(a.settle(jo(i),o,s),this.#e.childSessions.attach(a,o),this.#e.transcript.markServerSettled(r),e.serverSettled.add(r),this.#e.transcript.showPending())},onTurnRefused:(r,o)=>{this.#e.park(r,o)},onActivityChanged:(r,o,i)=>{this.#e.activities.draw(r,o,i,!0)},onRunEnd:()=>{this.#e.transcript.hidePending(),this.#e.stream.end()},onUsage:r=>{e.usage=xO(e.usage,r)},onError:(r,o)=>{e.announcedOutcome=!0,this.#e.announcer.announce(this.#e.strings().announceFailed),this.#e.transcript.hidePending();let i=this.#r(r,o),s=this.#e.appendMessage(et.ASSISTANT,`\u26A0\uFE0F ${i}`);s.classList.add("message--failed"),this.#e.actions.attach(s,{rateable:!1}),o?.code===k_&&this.#o(s),this.#e.transcript.revealWords(s),this.#e.stream.end()},onCancelled:()=>{e.announcedOutcome=!0,this.#e.announcer.announce(this.#e.strings().announceStopped),this.#e.transcript.hidePending(),this.#e.transcript.appendStoppedNote(),this.#e.stream.end()},onSettled:()=>{e.announcedOutcome||this.#e.announcer.announce(this.#e.strings().announceAnswerReady);let r=S_(this.#e.strings(),e.usage);r!==null&&e.outcome==="completed"&&this.#e.showUsage()&&this.#e.transcript.appendUsageLine(r),this.#e.transcript.hidePending(),this.#e.setRunning(!1),this.#e.stream.end();for(let o of this.#e.transcript.cards())o.settled||o.settle(Q.INTERRUPTED,this.#e.strings().callNotFinished);this.#e.transcript.closeGroup()}}}#r(e,n){let r=n?.code;if(r===void 0||r===k_)return e;let o=this.#e.strings();switch(r){case"timed_out":return o.runErrorTimedOut;case"interrupted":return o.runErrorInterrupted;default:return o.runErrorFailed}}#o(e){let n=document.createElement("button");n.type="button",n.className="suggestion-chip run-error-offer",n.setAttribute("part","run-error-offer"),n.textContent=this.#e.strings().runErrorNewChat,n.addEventListener("click",()=>{this.#e.newChat()});let r=e.nextElementSibling;(r?.classList.contains("message-actions")===!0?r:e).after(n),this.#e.transcript.follow()}#s(e,n){let r=e.tools.map(({id:s,name:a})=>({name:a,side:e.serverSettled.has(s)?"server":"client"})),o=[...e.invalidated];e.tools.length=0,e.serverSettled.clear(),e.invalidated.clear();let i=e.outcome;e.outcome="completed",this.#e.element.dispatchEvent(new CustomEvent(Lc,{detail:{threadId:n,tools:r,invalidated:o,outcome:i},bubbles:!0,composed:!0}))}#i(e,n){let r=n??{},o=Array.isArray(r.keys)?r.keys.filter(i=>typeof i=="string"):[];if(o.length!==0){for(let i of o)e.invalidated.add(i);this.#e.element.dispatchEvent(new CustomEvent(Uc,{detail:{keys:o,reason:typeof r.reason=="string"?r.reason:null},bubbles:!0,composed:!0}))}}};function xO(t,e){let{input:n,output:r}=t;for(let o of e)n=R_(n,o.inputTokens),r=R_(r,o.outputTokens);return{input:n,output:r}}var EO="agent:",Ut=class t extends Ve{agentId;constructor(e,n=t.namespaceOf(e)){super(n),this.agentId=e}static namespaceOf(e){return`${EO}${e}`}};var Sp=new Set,Jl=class{#e=null;#t="";#n="";take(e,n){return this.give(),this.#t===e?this.#n:Sp.has(e)?(this.#t=e,this.#n=`${e}~${Ie()}`,n(e),this.#n):(Sp.add(e),this.#e=e,e)}give(){this.#e!==null&&(Sp.delete(this.#e),this.#e=null)}},Ql=class{#e;#t="";#n=new Jl;#r=null;#o={reported:!1};#s=null;#i=new Jl;#a="";constructor(e){this.#e=e}claim(){this.#t=this.#l()}release(){this.#n.give(),this.#i.give()}conversationNamespace(e){let n=this.#s===null?this.#t:this.#a;return e===""?n:`${n}#${e}`}scopeStore(e,n){if(this.#s=e instanceof Ut?e.agentId:null,this.#s===null?this.#i.give():this.#a=this.#i.take(Ut.namespaceOf(this.#s),_O),!(e instanceof Ve))return e;let r=this.conversationNamespace(n);return this.#s!==null?(this.#r=new Ut(this.#s,r),this.#r):(this.#r=r===""?e:new Ve(r),this.#r)}rescopeStore(e,n){return e!==this.#r?null:(this.#r=this.#s===null?new Ve(n):new Ut(this.#s,n),this.#r)}key(e){return this.#t===""?e:`${e}:${this.#t}`}readScopedItem(e){return sessionStorage.getItem(this.key(e))}readPreference(e){try{let n=localStorage.getItem(this.key(e));if(n!==null)return n}catch{}return this.readScopedItem(e)}writePreference(e,n){let r=this.key(e);try{localStorage.setItem(r,n)}catch{}pn(r,n,this.#o)}writeSession(e,n){pn(this.key(e),n,this.#o)}clearPreference(e){let n=this.key(e);try{localStorage.removeItem(n)}catch{}try{sessionStorage.removeItem(n)}catch{}}#l(){let e=this.#e.id(),n=e!==""?e:this.#e.endpoint();return n===""?"":this.#n.take(n,r=>console.warn(`<ag-ui-chat>: another element on this page already stores its conversation under "${r}", so this one has been given a throwaway namespace of its own \u2014 the two would otherwise share a thread pointer, a history drawer and every message. Give each <ag-ui-chat> its own id to keep them apart and let this one restore its conversation across reloads.`))}};function _O(t){console.warn(`<ag-ui-chat>: another chat on this page already stores its conversation under "${t}", the same directory entry, so this one has been given a throwaway namespace of its own \u2014 the two would otherwise share a thread pointer, a history drawer and every message. Mount each entry in one <ag-ui-agents> to let its conversation restore across reloads.`)}var tc=class{#e;#t=Object.freeze([]);constructor(e){this.#e=e}get tabs(){return this.#t}load(){this.#t=Object.freeze(TO(this.#e.read()))}has(e){return this.#t.some(n=>n.threadId===e)}open(e,n){return this.has(e)?!1:(this.#n([...this.#t,ec(e,n)]),!0)}close(e){return this.has(e)?(this.#n(this.#t.filter(n=>n.threadId!==e)),!0):!1}retitle(e,n){return this.#t.some(r=>r.threadId===e&&r.title!==n)?(this.#n(this.#t.map(r=>r.threadId===e?ec(e,n):r)),!0):!1}replace(e,n,r){return this.has(e)?(this.#n(this.#t.map(o=>o.threadId===e?ec(n,r):o)),!0):!1}neighbour(e){let n=this.#t.findIndex(r=>r.threadId===e);return n===-1?null:(this.#t[n+1]??this.#t[n-1])?.threadId??null}untitled(e){return this.#t.filter(n=>n.title===""&&n.threadId!==e).map(n=>n.threadId)}#n(e){this.#t=Object.freeze(e),this.#e.write(JSON.stringify(e))}};function ec(t,e){return Object.freeze({threadId:t,title:e})}function TO(t){let e;try{e=JSON.parse(t??"[]")}catch{return[]}if(!Array.isArray(e))return[];let n=[];for(let r of e){if(typeof r!="object"||r===null)continue;let{threadId:o,title:i}=r;typeof o=="string"&&o!==""&&typeof i=="string"&&!n.some(s=>s.threadId===o)&&n.push(ec(o,i))}return n}var SO=["data-attachments-url","data-attachment-accept","data-attachment-max-bytes","data-transcribe-url","data-threads-url","data-threads-cache","data-tools-url","data-skills-url","data-skill-editor-url","data-skill-editor-button","data-routines-url","data-skills","data-prompt-chips","data-slash-commands","data-theme-toggle","data-strings","data-icon-url"],Rp=["omit","same-origin","include"],kO="New conversation";function C_(t){for(let e of t){let n=typeof e.content=="string"?e.content.split(/\s+/).join(" ").trim():"";if(e.role==="user"&&n!==""){let r=Array.from(n);return r.length<=60?n:`${r.slice(0,59).join("").trimEnd()}\u2026`}}return""}function kp(t){return Rp.includes(t)}var AO="auto",Ap="(max-width: 600px)",RO=320,nr=8,N_=`${gt}:collapsed`,O_=`${gt}:theme`,L_=["light","dark","auto"];function IO(t){return t.split(/\s+/).filter(e=>L_.includes(e)).at(-1)}function M_(t,e){return[...t.split(/\s+/).filter(r=>r!==""&&!L_.includes(r)),e].join(" ")}function CO(t,e){try{return(t instanceof ShadowRoot?t:document).querySelector(e)??document.querySelector(e)}catch{return null}}var Yr=class extends HTMLElement{agentFactory=_p;headers={};getHeaders=null;trustedOrigins=[];allowImages=!1;formatRelativeTime=null;autoConfirm=!1;askUser=!1;askUserRenderer=null;approvalRenderer=null;approveWithEdits=!1;confirmPredicate=null;getTools=()=>this.#W.defaultTools();getContext=()=>[...bd(this.getPageMap,this.autoInjectPageMap)];routeMap=[];navigate=null;getPageMap=null;autoInjectPageMap=!0;getPlace=null;conversationStore=new Ve;uploadHandler=null;transcribeHandler=null;navigationResult=()=>({navigated:!0,url:window.location.href});skillContext=()=>({});toolSummaries={};formatToolPayload=null;strings={};get uiStrings(){return this.#t}get colorScheme(){return this.#ht()}get locale(){let e=this;for(;e!==null;){let n=e.closest("[lang]");if(n!==null)return n.lang||navigator.language;let r=e.getRootNode();e=r instanceof ShadowRoot?r.host:null}return navigator.language}tokenValues(e){let n=getComputedStyle(this),r=document.createElement("span");this.#a.append(r);let o={};for(let i of e){let s=n.getPropertyValue(i).trim();s!==""&&(CSS.supports("color",s)?(r.style.color=`var(${i})`,o[i]=getComputedStyle(r).color):o[i]=s)}return r.remove(),o}resolvePageTarget=e=>document.querySelector(e);#e=new Set;#t=ve;#n=new bl({card:e=>this.#y.card(e),strings:()=>this.#t,follow:()=>this.#y.follow()});#r=new ml({element:this,transcript:()=>this.#v,strings:()=>this.#t,activeThread:()=>this.#h.threadId,open:e=>this.#h.switchThread(e).catch(()=>{})});#o=[];#s=new Vl({ensureGroup:()=>this.#y.ensureGroup(),afterTranscriptGrew:()=>this.#y.afterGrew(),appendNotice:(e,n,r)=>this.#y.appendNotice(e,n,r)});#i=new Cl({element:this,strings:()=>this.#t,retry:()=>{this.retryLastTurn()},retryable:()=>this.#Q===null||this.#Q.request!==null,threadId:()=>this.#h.threadId,follow:()=>this.#y.follow()});#a;#l=null;#c=[];#d=new gl;#f=document.createElement("button");#g;#v=document.createElement("div");#u;#m;#p;#b;#T;#x;#E;#R;#h;#k;#H;#ee;#he;#Y;#z;#N;#I=document.createElement("span");#P=document.createElement("div");#et=document.createElement("button");#le=document.createElement("div");#te=null;#pe=0;#ne=0;#Pe="right";#F=null;#_e=!1;#G=new Map;#ce=new Set;#fe;#y;#_;#S;#K=document.createElement("span");#D;#w;#V=!1;#Le=!1;#ze=null;#de=null;#Ve=null;#re=[];#Z=[];#ue=document.createElement("div");#X=null;#De="";#oe=()=>{this.#$e()&&this.#w.restoreLauncherPosition()};#Te=()=>{this.#$e()&&this.#w.settleLauncherPosition()};#$e(){return this.#w.publishVisualViewport(),this.#q(),!this.#w.dragging()&&this.#me()}#me(){return this.getClientRects().length>0}#Ze(){this.#me()&&this.#w.restoreLauncherPosition()}#Se;#ie;#C=!1;#ke=null;#ge=!1;#B=new AbortController;#tt=!1;#nt=null;#Ae={};#At={};#rt=null;#se=null;#ve={};#J=!1;#A=null;#Q=null;#je=null;#be=null;#We=null;#Re=[];#ot=new Map;#j={threadId:"",title:""};#it=new il;#ye=new al;#W=new Fa({element:this,routeMap:()=>this.routeMap,navigate:()=>this.navigate,getPageMap:()=>this.getPageMap,pageWithheld:()=>this.#ye.withheld,resolvePageTarget:e=>this.resolvePageTarget(e),getTools:()=>this.getTools(),askUser:()=>this.askUser,askUserRenderer:()=>this.askUserRenderer,decision:this.#it,setAsking:(e,n)=>this.#y.setAsking(e,n),ensureGroup:()=>this.#y.ensureGroup(),strings:()=>this.#t,hidePending:()=>this.#y.hidePending(),updateEmptyState:()=>this.#y.updateEmptyState(),follow:()=>this.#y.follow(),fetchInit:e=>this.#Mt(e)});#Rt=new $l({openBubble:()=>this.appendMessage(et.ASSISTANT,""),allowImages:()=>this.allowImages,follow:()=>this.#y.follow()});#It=new hr(this);#O=new Ql({id:()=>this.id,endpoint:()=>this.endpoint});#M=new tc({read:()=>sessionStorage.getItem(this.#Oe(this.userKey)),write:e=>pn(this.#Oe(this.userKey),e,this.#Ct)});#Ct={reported:!1};#st=null;#Ue=!1;#$;#He;#Ie;#we;constructor(){super(),this.#a=this.attachShadow({mode:"open"}),this.#u=document.createElement("div"),this.#m=document.createElement("div"),this.#p=document.createElement("textarea"),this.#b=document.createElement("button"),this.#T=document.createElement("span"),this.#k=document.createElement("div"),this.#H=document.createElement("button"),this.#ee=document.createElement("input"),this.#he=document.createElement("div"),this.#Se=document.createElement("span"),this.#Y=document.createElement("button"),this.#z=document.createElement("button"),this.#N=document.createElement("span"),this.#fe=document.createElement("div"),this.#y=new Bl({element:this,messages:this.#m,emptyWrap:this.#fe,changed:()=>this.#ct(),strings:()=>this.#t,allowImages:()=>this.allowImages,resolveTool:e=>this.#W.resolve(e),toolSummaries:()=>this.toolSummaries,serverSummary:e=>this.#W.summary(e),toolDisplay:()=>this.toolDisplay,toolGroupDisplay:()=>this.toolGroupDisplay,formatToolPayload:e=>this.formatToolPayload?.(e)??null}),this.#_=new Va({element:this,transcript:this.#y,tools:this.#W,decision:this.#it,strings:()=>this.#t,announce:e=>this.#d.announce(e),autoConfirm:()=>this.autoConfirm,confirmPredicate:()=>this.confirmPredicate,navigate:()=>this.navigate,approveWithEdits:()=>this.approveWithEdits,approvalRenderer:()=>this.approvalRenderer,getContext:()=>this.#fn(),conversationStore:()=>this.conversationStore,threadId:()=>this.#h.threadId,tenure:()=>this.#Ae,conversation:()=>this.#At}),this.#S=new Xl({element:this,transcript:this.#y,stream:this.#Rt,actions:this.#i,activities:this.#s,subagents:this.#n,childSessions:this.#r,announcer:this.#d,strings:()=>this.#t,running:()=>this.#J,setRunning:e=>this.#Ee(e),appendMessage:(e,n)=>this.appendMessage(e,n),noteUnread:e=>this.#xn(e),runSettled:e=>{this.#ce.delete(e)&&this.conversationStore.markRead?.(e)},newChat:()=>this.newChat(),showUsage:()=>Yl(this,"show-usage"),skillsChanged:()=>{this.#$.fetch(),this.#Ie.refresh()},redraw:e=>{this.#Je();for(let n of e)this.#h.replay(n);this.#y.ensureGroup(),this.#y.showPending()},park:(e,n)=>{this.#Z.push({content:e,attachments:n}),this.#Ge()}}),this.#w=new hl({element:this,launcher:this.#z,root:this.#a,connected:()=>this.#C,collapsed:()=>this.collapsed,collapsible:()=>this.#L().collapseTo!==null,strings:()=>this.#t,readPreference:e=>this.#O.readPreference(e),writePreference:(e,n)=>this.#O.writePreference(e,n),clearPreference:e=>this.#O.clearPreference(e),announceSurfaceChange:(e,n)=>this.#un(e,n)}),this.#g=new tl({element:this,root:this.#a,messages:this.#m,messagesWrap:this.#v,input:this.#p,strings:()=>this.#t,autoGrow:()=>dn(this.#p),quote:e=>this.quote(e)}),this.#D=new Ka({element:this,chat:this.#u,slot:this.#he,fileInput:this.#ee,button:this.#H,strings:()=>this.#t,uploadHandler:()=>this.uploadHandler,headersFor:e=>this.#xe(e),credentialsOption:()=>this.#lt()}),this.#ie=new Ja({element:this,slot:this.#Se,input:this.#p,strings:()=>this.#t,transcribeHandler:()=>this.transcribeHandler,headersFor:e=>this.#xe(e),credentialsOption:()=>this.#lt(),onInput:()=>this.#vt()}),this.registerActivityRenderer({type:Vc,render:e=>{let n=NO(e);return n===null?null:$r("\u{1F5DC}",F(this.#t.historyCompacted,{count:n}),"compaction")}}),this.registerActivityRenderer({type:Fc,render:e=>ci(e,this.#t,n=>{this.sendMessage(n)})});for(let e of m_(()=>this.#t))this.registerActivityRenderer(e);this.#x=new Qa(e=>this.#$.apply(e)),this.#$=new Ci({element:this,menu:this.#x,input:this.#p,hint:this.#k,strings:()=>this.#t,context:()=>this.skillContext(),flag:e=>Yl(this,e),readJsonAttribute:e=>Tp(this,e),fetchInit:e=>this.#Mt(e),send:e=>{this.sendMessage(e)},submit:()=>{this.#kt()},autoGrow:()=>dn(this.#p)}),this.#He=new Sl(()=>this.#t.backToConversation,()=>this.#we.isOpen?this.#we.back():this.#Ie.back()),this.#Ie=new kl({view:this.#He,strings:()=>this.#t,onDraft:()=>{this.closeSkillEditor(),this.sendMessage("/create-skill")},onChanged:()=>{this.#$.fetch()},onClose:()=>this.closeSkillEditor()}),this.#we=new El({view:this.#He,element:this,strings:()=>this.#t,fromConversation:()=>this.routineSeed(),onOpenThread:e=>{this.closeRoutines(),this.switchThread(e).catch(()=>{})},onClose:()=>this.closeRoutines()}),this.#E=new ol({onSelect:e=>{this.#h.switchThread(e).catch(()=>{})},onNew:()=>{this.newChat(),this.#h.refreshDrawer()},onRename:(e,n)=>{this.#on(e,n),this.#ot.set(e,n),this.#Et(),this.#h.renameThread(e,n)},onDelete:e=>{this.#rn(e)}}),this.#R=new Vo((e,n)=>{this.#h.continueRun(e,n).catch(r=>{console.warn("<ag-ui-chat>: continuing a run failed",r)})}),this.#h=new rl({element:this,drawer:this.#E,checkpoints:this.#R,transcript:this.#y,actions:this.#i,activities:this.#s,tools:this.#W,childSessions:this.#r,input:this.#p,hint:this.#k,strings:()=>this.#t,conversationStore:()=>this.conversationStore,formatRelativeTime:()=>this.formatRelativeTime,navigationResult:()=>this.navigationResult,headersFor:e=>this.#xe(e),requestCredentials:()=>this.#Ce(),appendMessage:(e,n)=>this.appendMessage(e,n),announceTurn:e=>this.#cn(e,[]),recordTurn:e=>this.#an(e),autoGrow:()=>dn(this.#p),continuationEnded:()=>this.#St(),client:()=>this.#se,ensureClient:()=>this.#Be(),buildClient:e=>(this.#Q=null,this.#dn(e)),releaseClient:()=>{this.#se=null},running:()=>this.#J||this.#A!==null,holdRun:e=>{let n={};return this.#A=n,this.#je=e===null?null:{hold:n,restored:e},{release:()=>this.#_t(n)}},cancelRun:()=>this.#Ne(),stopRun:()=>this.#bt(),runningOnServer:e=>this.#yt()?.running(e)??null,reattach:()=>{let e=this.#Be();if(e.canReattach){let n=this.#A!==this.#je?.hold;this.#Ee(!0);let r=e.reattach();this.#be=n?r:null}},answerParked:e=>{let n=this.#A!==this.#je?.hold;this.#Ee(!0);let r=this.#Be().answerParked(e);this.#be=n?r:null},resetState:()=>this.#Xe(),setRunning:e=>this.#Ee(e),threadChanged:(e,n)=>this.#Xt(e,n),threadsListed:e=>{this.#kn(e),this.#Kt(e),this.#r.listed(e)},listedStatus:e=>this.#r.status(e),threadDeleted:e=>{this.#Yt([e]),this.#r.deleted(e)}})}static get observedAttributes(){return["title-text","placement","collapse-to","anchor","anchor-side","maximized","data-side","data-small-viewport","data-threads-search","data-thread-status","credentials","user-key","user-name","data-tool-group-display","data-collapse-icon","theme",...SO]}attributeChangedCallback(e,n,r){if(e==="credentials"){r!==null&&!kp(r)&&console.error(`<ag-ui-chat>: credentials="${r}" is not a fetch credentials mode (${Rp.join(" / ")}) \u2014 it is being ignored, so requests use the browser default and cross-origin cookies will not be sent.`);return}if(e==="data-tool-group-display"){this.#y.refreshStepGroups();return}if(e==="data-thread-status"){this.#Lt();return}if(e==="data-threads-search"){let o=this.getAttribute("data-threads-search");this.#E.setSearchMode(o==="always"||o==="never"?o:"auto");return}if(e==="anchor"){this.#_e=!1,this.#q();return}if(e==="maximized"){this.#bn(r!==null);return}if(e==="data-collapse-icon"){this.#Ke();return}if(e==="theme"){this.#Y.isConnected&&this.#pt(),this.#U(Oc,{scheme:this.colorScheme});return}if(e==="anchor-side"||e==="data-side"||e==="data-small-viewport"){this.#Ke(),this.#q();return}if(e==="placement"||e==="collapse-to"){this.#ut(),this.#w.releaseOwnedAxes(),e==="placement"&&this.#w.switchPlacement(n),this.#w.releaseLauncherPosition(),this.#L().collapseTo===null&&this.collapsed&&this.setCollapsed(!1),this.#Ut(),this.#Ke(),e==="collapse-to"&&(this.#mt(),this.#ft(this.#L().collapseTo==="bar"?this.#P:null)),this.#q(),requestAnimationFrame(()=>this.#w.syncResizeAnchor());return}if(e==="title-text"){this.#Qt();return}if(e==="user-name"){this.#Ot();return}if(e==="user-key"){this.#C&&(n??"")!==(r??"")&&this.#Vt(n??"",r??"");return}if(e==="data-threads-url"){this.#C&&n!==r&&console.warn('<ag-ui-chat>: "data-threads-url" was changed after the element connected. The next run replay and cancel go to the new URL, but the thread list and its store keep the one read while connecting. To move them too, remove and re-insert the element.');return}n===r||!this.#C||console.warn(`<ag-ui-chat>: "${e}" was changed after the element connected, and is read only while connecting \u2014 this assignment has no effect. Set it before the element enters the DOM (in the markup, or on the element before appending it); frameworks that patch attributes after mount should bind it at creation. To apply a new value now, remove and re-insert the element.`)}registerTool(e){this.#W.register(e)}get sharedState(){return this.#Nt()?.state??this.#ve}set sharedState(e){this.#ve={...e},this.#Nt()?.setState(this.#ve)}#Nt(){return this.#h.continuation??this.#se}registerPageState(e){this.#W.registerPageState(e)}registerContext(e){let n={read:e};return this.#o=[...this.#o,n],()=>{this.#o=this.#o.filter(r=>r!==n)}}get endpoint(){return this.getAttribute("endpoint")??""}set endpoint(e){this.setAttribute("endpoint",e)}get userKey(){return this.getAttribute("user-key")??""}set userKey(e){this.setAttribute("user-key",e)}get userName(){return this.getAttribute("user-name")??""}set userName(e){this.setAttribute("user-name",e)}#Ot(){let e=this.userName.trim();this.#K.textContent=e===""?this.#t.greetingNoName:F(this.#t.greeting,{name:e})}get credentials(){let e=this.getAttribute("credentials");return e!==null&&kp(e)?e:null}set credentials(e){if(e===null){this.removeAttribute("credentials");return}if(!kp(e))throw new TypeError(`<ag-ui-chat>: credentials must be one of ${Rp.map(n=>`"${n}"`).join(", ")} (got ${JSON.stringify(e)}).`);this.setAttribute("credentials",e)}#at(){return{...this.headers,...this.getHeaders?.()}}#xe(e){let n=this.#at();return $a(e,Object.keys(n),this.trustedOrigins,this.#e),n}#Ce(){return this.credentials??void 0}#lt(){let e=this.#Ce();return e===void 0?{}:{credentials:e}}#Mt(e){return He({headers:this.#xe(e)},this.#Ce())}request(e,n={}){let r=new Headers(this.#xe(e));new Headers(n.headers).forEach((i,s)=>{r.set(s,i)});let o=n.credentials??this.#Ce();return fetch(e,{...n,headers:r,...o===void 0?{}:{credentials:o}})}get toolDisplay(){let e=this.getAttribute("data-tool-display");return e===Ft.INLINE||e===Ft.MINIMAL||e===Ft.COMPACT||e===Ft.FULL?e:Ft.GROUPED}set toolDisplay(e){this.setAttribute("data-tool-display",e)}get toolGroupDisplay(){let e=this.getAttribute("data-tool-group-display");return e===Gt.INLINE||e===Gt.MINIMAL||e===Gt.COMPACT?e:Gt.FULL}set toolGroupDisplay(e){this.setAttribute("data-tool-group-display",e)}get extraStyles(){return this.#c}set extraStyles(e){this.#c=[...e],this.#l!==null&&(this.#a.adoptedStyleSheets=[this.#l,...this.#c])}connectedCallback(){this.#B=new AbortController,this.#tt&&this.#Wt();let e=this.#tt?this.#O.conversationNamespace(""):null;if(this.#tt=!0,this.#O.claim(),this.#It.join(),this.#w.restoreSize(),requestAnimationFrame(()=>{this.#Ze(),this.#w.syncResizeAnchor()}),this.#t=Th({...this.#pn(),...this.strings}),this.getAttribute("data-theme-toggle")!==null){let a=this.#O.readPreference(O_),c=a===null?void 0:IO(a);c!==void 0&&this.setAttribute("theme",M_(this.getAttribute("theme")??"",c))}this.#wn(),this.#E.setStrings(this.#t),this.#r.relocalize(),this.#R.setStrings(this.#t),this.#L().collapseTo!==null&&this.#vn()&&this.setAttribute("collapsed",""),this.#mt(),this.#Ut();let n=new ResizeObserver(()=>this.#q());n.observe(this.#P),this.#B.signal.addEventListener("abort",()=>n.disconnect());let r=new ResizeObserver(this.#Te);r.observe(this.#m),this.#B.signal.addEventListener("abort",()=>r.disconnect()),this.#w.probe.addEventListener("transitionrun",this.#Te,{signal:this.#B.signal});let o=()=>{requestAnimationFrame(()=>this.#q())};window.addEventListener("pointerup",o,{signal:this.#B.signal}),window.addEventListener("keyup",o,{signal:this.#B.signal}),this.#q(),this.collapsed&&this.setMaximized(!1),this.#L().collapseTo==="none"&&this.#U(_i,{collapsed:this.collapsed}),this.#$.init(),this.#x.setManage(this.#dt()===null?null:this.#t.manageSkills,()=>this.#qe("skills",!1,()=>this.openSkillEditor()));let i=this.#nt,s=i!==null&&i!==this.userKey;s&&this.#Vt(i,this.userKey),this.#nt=this.userKey,this.conversationStore=this.#O.scopeStore(this.#Dt(),this.userKey),e!==null&&e!==this.#O.conversationNamespace("")&&(this.#Ae={}),this.#xt(),window.addEventListener("resize",this.#oe),window.visualViewport?.addEventListener("resize",this.#oe),window.visualViewport?.addEventListener("scroll",this.#oe),this.#w.publishVisualViewport(),this.#Pt(),this.#D.wire(this.#B.signal),this.#ie.wire(),this.#h.adoptActiveThread(),queueMicrotask(()=>this.#hn()),this.#h.rehydrate(s&&i!==""?"rescope":"restore"),s&&this.#h.refreshDrawer(),this.#C=!0,this.#Gt(),this.#ge&&(this.#ge=!1,this.newChat())}#hn(){this.#C&&(this.#W.fetchCatalog(),this.#$.fetch())}async reload(){this.#Ne(),this.#Xe(),this.#Ee(!1),await Promise.all([this.#W.fetchCatalog(),this.#$.fetch(),this.#h.rehydrate("restore")])}disconnectedCallback(){this.#C=!1,this.#B.abort(),window.removeEventListener("resize",this.#oe),window.visualViewport?.removeEventListener("resize",this.#oe),window.visualViewport?.removeEventListener("scroll",this.#oe),this.#O.release(),this.#It.leave(),this.#zt(),this.#Ne(),this.#g.detachPageOffer(),this.#D.tray?.dispose(),this.#ie.dispose(),this.#y.disposeScroller(),this.#d.dispose()}#pn(){let e=Tp(this,"data-strings");return typeof e=="object"&&e!==null?e:{}}quote(e){this.#g.insert(e)}offerQuoteInPage(e=document.body){return this.#g.offerInPage(e)}#Pt(){this.#rt=null;let e=this.getAttribute("data-threads-url");if(e!==null){let n=this.conversationStore,r=new tr(e,()=>this.#xe(e),n,()=>this.#Ce(),this.getAttribute("data-threads-cache")!=="false");this.#rt={remote:r,inner:n},this.conversationStore=r}this.#Lt()}#Lt(){this.#zt();let e=this.getAttribute("data-thread-status"),n=this.conversationStore;!this.isConnected||e!=="poll"&&e!=="stream"||(this.#ke=n.watchThreads?.(r=>{this.#Kt(r),this.#r.listed(r),this.#sn(r),this.#U(Wc,{threads:r})},e)??null)}#zt(){this.#ke?.(),this.#ke=null}#Dt(){let e=this.#rt;return e!==null&&this.conversationStore===e.remote?e.inner:this.conversationStore}setSkills(e){this.#$.setClientSkills(e)}openSkillEditor(){let e=this.#dt();e!==null&&(this.#x.close(),this.#ae(),this.#u.toggleAttribute("data-panel-view",!0),this.#Ie.open(new Ni(e,(n,r)=>this.request(n,r))))}refreshSkills(){return this.#$.fetch()}#qe(e,n,r){if(this.getAttribute("data-editors")!=="external"){r();return}this.#x.close(),this.dispatchEvent(new CustomEvent(Qc,{detail:{editor:e,fromConversation:n},bubbles:!0,composed:!0,cancelable:!0}))}closeSkillEditor(){this.#Ie.isOpen&&(this.#ae(),this.#p.focus())}#ae(){this.#Ie.reset(),this.#we.reset(),this.#He.close(),this.#u.toggleAttribute("data-panel-view",!1)}openRoutines(){this.#$t(!1)}makeRoutine(){this.#$t(!0)}closeRoutines(){this.#we.isOpen&&(this.#ae(),this.#p.focus())}#$t(e){let n=this.#Ye();if(n===null)return;this.#x.close(),this.#ae(),this.#u.toggleAttribute("data-panel-view",!0);let r=new wl(n,(o,i)=>this.request(o,i));e?this.#we.openFromConversation(r):this.#we.open(r)}#Ye(){let e=this.getAttribute("data-routines-url");return e===null||e===""?null:e}#ct(){this.#Ye()!==null&&this.#ze?.offer(this.routineSeed()!==null)}routineSeed(){let e=this.#se?.messages??this.#h.restored,n=e.flatMap(r=>r.role==="user"&&typeof r.content=="string"&&r.content.trim()?[r.content.trim()]:[]);return n.length===0?null:{prompt:n.join(`

`),name:C_(e)}}#dt(){let e=this.getAttribute("data-skill-editor-url");return e===null||e===""?null:e}get collapsed(){return this.hasAttribute("collapsed")}set collapsed(e){this.setCollapsed(e)}refreshPlace(){this.isConnected&&this.#ye.update(this.getPlace===null?Bw(this.routeMap,window.location.pathname):this.getPlace())}#fn(){let e=[...this.getContext(),...this.#o.flatMap(r=>r.read())];return[...this.#ye.withheld?e.filter(r=>r.description!==Si):e,...this.#ye.context()]}setCollapsed(e,n={}){e&&this.#L().collapseTo===null||(e&&this.setMaximized(!1),n.announce===!0&&e&&!this.collapsed&&this.#un(this.#t.chatMinimised,null),e||(this.refreshPlace(),this.#Ze()),e?this.setAttribute("collapsed",""):(this.#ft(),this.removeAttribute("collapsed")),this.#q(),this.#O.writeSession(N_,e?"1":"0"),this.#Fe(this.#qt()),this.#U(_i,{collapsed:e}))}get unread(){let e=0;for(let n of this.#G.values())e+=n;return e}get threadId(){let e=this.#h.threadId;return e===""?null:e}get threadTitle(){return this.#j.title}get running(){return this.#J}get detachRuns(){return Yl(this,"data-detach-runs")}set detachRuns(e){this.toggleAttribute("data-detach-runs",e)}get barHeight(){return this.#pe}get dockWidth(){return this.#ne}get anchor(){return this.#F}set anchor(e){this.#F=e,this.#_e=!1,this.#q()}#L(){return qo(this.getAttribute("placement"),this.getAttribute("collapse-to"))}#Ut(){let e=this.#L().collapseTo;e===null?this.removeAttribute("data-collapsed-to"):this.setAttribute("data-collapsed-to",e)}#mn(){let e=this.getAttribute("placement");return e!=="sidebar"&&e!=="side"||!this.#me()||getComputedStyle(this).position==="static"?0:this.collapsed?this.#L().collapseTo==="rail"?this.#z.offsetWidth:0:this.getAttribute("data-small-viewport")!=="off"&&window.matchMedia(Ap).matches?0:this.#u.offsetWidth}#gn(){if(this.#w.dragging())return;let e=this.#mn(),n=this.getAttribute("data-side")==="left"?"left":"right";e===this.#ne&&(e===0||n===this.#Pe)||(this.#ne=e,this.#Pe=n,this.#U(Cc,{width:e,side:n}))}#q(){if(!this.isConnected)return;let e=this.#me()?this.#w.syncDock(this.#P,this.#Ht()):0;this.#gn(),e!==this.#pe&&(this.#pe=e,this.#U(Ic,{height:e}))}#Ht(){if(this.#L().collapseTo!=="none")return null;let e=this.getAttribute("anchor")??"";if(this.#F===null&&e==="")return null;let n=this.#F??CO(this.getRootNode(),e);return n?.isConnected===!0?n:(this.#_e||(this.#_e=!0,console.warn(`<ag-ui-chat>: the anchor ${this.#F===null?`"${e}"`:"element"} is not in the document, so the panel opens from its placement's own corner.`)),null)}#vn(){let e=this.#O.readScopedItem(N_);return e!==null?e==="1":this.#L().startsCollapsed&&!this.hasAttribute("data-start-open")}describeSurface(){return this.#w.describeSurface()}moveTo(e,n={}){return this.#w.moveTo(e,n)}resetSize(){this.#w.resetSize(),this.#q()}get maximized(){return this.#V}set maximized(e){this.setMaximized(e)}setMaximized(e){e?this.setAttribute("maximized",""):this.removeAttribute("maximized")}toggleMaximized(){this.setMaximized(!this.#V)}#Ft(){return this.#L().maximizes!==null&&!window.matchMedia(Ap).matches}#bn(e){let n=e&&this.#Ft()&&!this.collapsed;if(e&&!n){this.removeAttribute("maximized");return}n!==this.#V&&(this.#V=n,this.#C&&(n?this.#w.enterMaximized():this.#w.leaveMaximized(),this.#q()),this.#Bt(),this.#Gt())}#Gt(){!this.#C||this.#V===this.#Le||(this.#Le=this.#V,this.#U(Rc,{maximized:this.#V}))}#ut(){let e=this.#Ft();e||this.setMaximized(!1);let n=this.#de;n!==null&&(e?n.button.isConnected||n.before.before(n.button):n.button.remove(),this.#ze?.fit())}#Bt(){let e=this.#de?.button;if(e===void 0)return;let n=this.#V?this.#t.restore:this.#t.maximize;e.title=n,e.setAttribute("aria-label",n),P_(e,this.#V?vf:ki)}#Ke(){let e=this.#Ve;if(e===null)return;let n=iE(this.getAttribute("data-collapse-icon"),this.getAttribute("placement"),this.getAttribute("data-side"));P_(e,n)}toggleCollapsed(){this.setCollapsed(!this.collapsed)}toggleTheme(){let e=this.getAttribute("theme")??"",n=this.#ht()==="dark"?"light":"dark";this.setAttribute("theme",M_(e,n)),this.#O.writePreference(O_,n)}#Vt(e,n){this.#nt=n;let r=this.#C,o=this.#O.conversationNamespace(e),i=this.#O.conversationNamespace(n);if(e===""){Ve.adopt(o,i),this.#Tn(e,n),r&&(this.#Zt(i),this.#$.fetch());return}this.#Ae={},Ve.purge(o),sessionStorage.removeItem(this.#Oe(e)),this.#xt(),r&&this.#Zt(i),this.#_.forgetWaivers(),this.#Ne(),this.#Xe(),this.#ve={},this.#p.value="",this.#vt(),this.#Ee(!1),this.#Yt([...this.#G.keys()],!0),this.#$.forget(),this.#ae(),r&&(this.#ie.dispose(),this.#ie.wire(),this.#h.adoptActiveThread(),this.#h.rehydrate("rescope"),this.#h.refreshDrawer(),this.#$.fetch())}#Zt(e){let n=this.#O.rescopeStore(this.#Dt(),e);n!==null&&(this.conversationStore=n,this.#Pt())}#ht(){let e=(this.getAttribute("theme")??"").split(/\s+/);if(e.includes("dark"))return"dark";if(e.includes("light"))return"light";let n=getComputedStyle(this).colorScheme.split(/\s+/),r=n.includes("dark");return r!==n.includes("light")?r?"dark":"light":(r||e.includes("auto"))&&window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light"}#pt(){let e=this.#ht()==="dark";this.#Y.replaceChildren(Ur("theme","theme-icon",e?gf:mf,null))}openThreads(e={}){this.#ae();let n=this.#L().collapseTo,r=e.anchor??this.#Ht(),o=this.getAttribute("placement")!=="embedded";this.collapsed&&n==="bar"?this.#P.append(this.#E.element):this.collapsed&&n==="none"&&r!==null&&o?(this.#te=r,this.#le.append(this.#E.element),this.#jt()):(this.collapsed&&n==="none"&&console.warn(o?'<ag-ui-chat>: openThreads() under collapse-to="none" needs an anchor to open beside; pass openThreads({ anchor }) or set the anchor attribute.':'<ag-ui-chat>: openThreads() under placement="embedded" and collapse-to="none" has no popover: the collapsed chat is not drawn. Expand it first.'),this.#ft()),this.#h.openThreads()}#jt(){let e=this.#te;if(e===null||this.#E.element.parentNode!==this.#le)return;let n=e.getBoundingClientRect(),r=document.documentElement.clientWidth,o=document.documentElement.clientHeight,i=n.top+n.height/2<o/2,s=Math.min(RO,r-2*nr),a=Math.min(Math.max(nr,r-n.right),r-nr-s),c=(i?o-n.bottom:n.top)-2*nr;this.style.setProperty("--_threads-top",i?`${n.bottom+nr}px`:"auto"),this.style.setProperty("--_threads-bottom",i?"auto":`${o-n.top+nr}px`),this.style.setProperty("--_threads-right",`${Math.max(nr,a)}px`),this.style.setProperty("--_threads-room",`${Math.max(0,c)}px`)}#ft(e=null){let n=this.#E.element.parentNode;if(n!==e&&(n===this.#P||n===this.#le)){this.#E.close(),this.#u.insertBefore(this.#E.element,this.#R.element),this.#te=null;for(let r of["top","bottom","right","room"])this.style.removeProperty(`--_threads-${r}`)}}openCheckpoints(){this.#ae(),this.#h.openCheckpoints()}closeThreads(){this.#E.close()}closeCheckpoints(){this.#R.close()}switchThread(e){return this.#C?this.#h.switchThread(e):Promise.resolve()}deleteThread(e){this.#C&&this.#rn(e)}get tabs(){return this.#M.tabs}openTab(e,n){if(!this.#C)return;let r=n??this.#nn(e),o=!1;if(!this.#Ue){this.#Ue=!0;let i=this.#h.threadId;o=this.#M.open(i,this.#nn(i))}o=this.#M.open(e,r)||o,o&&(this.#Me("open"),r===""&&this.#in())}closeTab(e){if(!this.#C)return;let n=this.#M.neighbour(e);if(this.#M.close(e)&&(this.#Me("close"),e===this.#h.threadId)){if(n===null){this.newChat();return}this.switchThread(n).catch(()=>{})}}toggleCheckpoints(){if(this.#R.open_){this.#R.close();return}this.openCheckpoints()}newChat(){if(!this.#C){this.#ge=!0;return}this.#Ne(),this.#ae();let e=this.#h.threadId;this.#st=this.conversationStore.isUnsent?.(e)===!0?e:null,this.#h.reapUnsent(),this.#Xe(),this.#h.startThread(),this.#Ee(!1),this.#Xt(this.#h.threadId,"new"),this.collapsed||this.#p.focus({preventScroll:!0})}#Xe(){this.#Wt(),this.#re.length=0,this.#X=null}#Wt(){this.#se=null,this.#Q=null,this.#S.detach(),this.#At={},this.#Je(),this.#h.forgetRestored()}#Je(){this.#Rt.end(),this.#y.releaseTurn(),this.#n.clear(),this.#y.forgetCards(),this.#s.clearBlocks(),this.#i.forget(),this.#D.tray?.clear(),this.removeAttribute("data-composer-settling"),this.removeAttribute("data-restoring"),this.#y.empty()}async retryLastTurn(){if(this.#Tt())return!1;let e={};this.#A=e;try{let n=this.#Be(),r=this.#Q;if(r!==null)return await this.#yn(n,r.request,e);let o=n.truncateToLastUser();if(o===null||this.#A!==e)return!1;this.#Je();for(let i of o)if(this.#h.replay(i),this.#A!==e)return!1;return await n.resume(),!0}finally{this.#_t(e)}}async#yn(e,n,r){if(n===null)return!1;let{message:o}=n,i=o===void 0?[]:[{id:o.id,role:"user",content:o.content}];this.#Je();for(let s of[...e.messages,...i])if(this.#h.replay(s),this.#A!==r)return!1;return await this.#ln(e,n),!0}appendMessage(e,n){return this.#y.append(e,n)}#wn(){let{signal:e}=this.#B;this.#u.className="chat",this.#u.setAttribute("part","panel");let n=this.#Jt(),r=this.getAttribute("data-theme-toggle")!==null,{header:o,checkpoints:i,maximize:s,collapse:a,overflow:c}=rE({host:this,title:this.#T,titleText:n,iconUrl:this.getAttribute("data-icon-url"),strings:this.#t,withCheckpoints:this.#h.runs()!==null,themeToggle:r?this.#Y:null,signal:e,onSkills:this.#dt()===null||!this.hasAttribute("data-skill-editor-button")?null:()=>this.#qe("skills",!1,()=>this.openSkillEditor()),onRoutines:this.#Ye()===null?null:()=>this.#qe("routines",!1,()=>this.openRoutines()),onMakeRoutine:this.#Ye()===null?null:()=>this.#qe("routines",!0,()=>this.makeRoutine()),onHistory:()=>this.openThreads(),onCheckpoints:()=>this.toggleCheckpoints(),onNewChat:()=>this.newChat(),onCollapse:()=>this.toggleCollapsed(),onMaximize:()=>this.toggleMaximized(),onToggleTheme:()=>this.toggleTheme()});r&&(this.#pt(),window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change",()=>this.#pt(),{signal:e})),this.#w.enablePanelDrag(o),this.#ze=c,this.#ct(),this.#de={button:s,before:a},this.#Ve=a,this.#Ke(),this.#ut(),this.#Bt(),window.matchMedia(Ap).addEventListener("change",()=>this.#ut(),{signal:e}),i_({messages:this.#m,jumpButton:this.#f,emptyWrap:this.#fe,greetingText:this.#K,starters:a_(this,this.#t,f=>{this.sendMessage(f)}),strings:this.#t}),this.#Ot(),this.#g.mount(e),this.#y.mountScroller(this.#f,e),this.#d.mount(),this.#m.append(this.#fe),this.#y.updateEmptyState();let l=zw({input:this.#p,send:this.#b,attachButton:this.#H,fileInput:this.#ee,voiceSlot:this.#Se,place:this.#ye.element,hint:this.#k,queuedRow:this.#ue,attachSlot:this.#he,strings:this.#t,signal:e,onKeydown:f=>this.#En(f),onInput:()=>this.#vt(),onSend:()=>{if(this.#J){this.#bt();return}this.#kt()},onFilesPicked:()=>this.#D.onFilesPicked()});this.#ye.mount(e,this.#t),this.#p.addEventListener("focus",()=>this.refreshPlace(),{signal:e}),window.addEventListener("popstate",()=>this.refreshPlace(),{signal:e}),window.addEventListener("hashchange",()=>this.refreshPlace(),{signal:e}),this.refreshPlace();let d=document.createElement("slot");d.name="above-composer";let h=document.createElement("slot");h.name="footer",this.#v.className="messages-wrap",this.#v.replaceChildren(this.#m,this.#f,this.#g.button),this.#ae(),this.#u.replaceChildren(o,c.menu,this.#r.breadcrumb,this.#He.element,this.#v,this.#x.palette,this.#x.chips,this.#k,this.#ue,this.#he,d,l,h,this.#E.element,this.#R.element),this.#u.addEventListener("pointerdown",f=>{if(!this.#R.open_)return;let u=f.composedPath();u.includes(this.#R.element)||u.includes(i)||this.#R.close()},{signal:e}),oE({launcher:this.#z,badge:this.#N,railLabel:this.#I,bar:this.#P,barHistory:this.#et,barPlace:this.#ye.barElement,titleText:n,iconUrl:aE(this),strings:this.#t,signal:e,onOpen:()=>this.setCollapsed(this.#L().collapseTo==="bar"&&!this.collapsed),onHistory:()=>{this.#E.isOpen()?this.#E.close():this.openThreads()}}),document.addEventListener("pointerdown",f=>{let u=this.#E.element.parentNode;if(!this.#E.isOpen()||u!==this.#P&&u!==this.#le)return;let v=f.composedPath(),E=u===this.#P?[u]:[u,this.#te];v.some(T=>E.includes(T))||this.#E.close()},{signal:e}),window.addEventListener("resize",()=>this.#jt(),{signal:e}),this.#w.enableLauncherDrag(e),this.#w.mountResizeGrips(this.#u),this.#l=tE(this.#a,this.#c);let m=this.#w.probe;m.className="viewport-probe",m.setAttribute("aria-hidden","true"),m.style.borderRadius="var(--_viewport-inset-top) var(--_viewport-inset-right) var(--_viewport-inset-bottom) var(--_viewport-inset-left)",m.style.transition="border-radius 1ms",this.#le.className="threads-popover",this.#a.replaceChildren(m,this.#d.region,this.#u,this.#P,this.#le)}#mt(){this.#z.setAttribute("aria-expanded",String(!this.collapsed));let e=this.unread;this.#N.textContent=e>9?"9+":String(e),this.#N.hidden=e===0||!this.collapsed||!sE(this);let n=!this.collapsed&&this.#L().collapseTo==="bar"?this.#t.collapse:this.#N.hidden?this.#t.expand:F(this.#t.expandUnread,{count:e});this.#z.setAttribute("aria-label",n),this.#z.title=n}#U(e,n){this.dispatchEvent(new CustomEvent(e,{detail:n,bubbles:!0,composed:!0}))}#Fe(e){this.#mt(),this.#U(Nc,{unread:this.unread,threadIds:e})}#xn(e){if(this.#gt(e)){this.#ce.add(e);return}this.#G.set(e,(this.#G.get(e)??0)+1),this.#Fe([e])}#gt(e){return!this.collapsed&&e===this.#We&&e===this.#h.threadId}#qt(){let e=this.#We;return e===null||!this.#gt(e)||!this.#G.delete(e)?[]:(this.conversationStore.markRead?.(e),[e])}#Yt(e,n=!1){let r=e.filter(o=>this.#G.delete(o));(r.length>0||n)&&this.#Fe(r)}#Kt(e){let n=[];for(let{threadId:r,unread:o}of e)o!==!0||this.#G.has(r)||(this.#gt(r)?this.conversationStore.markRead?.(r):(this.#G.set(r,1),n.push(r)));n.length>0&&this.#Fe(n)}#vt(){this.#x.onInput(this.#p.value),this.#k.hidden=!0,dn(this.#p),this.#X=null}#En(e){if(this.#x.onKeydown(e)){e.preventDefault();return}if(e.key==="Escape"&&this.#J){e.preventDefault(),this.#bt();return}if(e.key==="Enter"&&!e.shiftKey){e.preventDefault(),this.#kt();return}this.#_n(e)}#_n(e){let n=e.key==="ArrowUp";if(!n&&e.key!=="ArrowDown"||this.#x.isOpen())return;let r=this.#re;if(r.length===0||(this.#p.value!==this.#De&&(this.#X=null),this.#X===null&&(!n||this.#p.value!=="")))return;let o=this.#X===null?0:this.#X+(n?1:-1);o>=r.length||(e.preventDefault(),this.#X=o<0?null:o,this.#p.value=o<0?"":r[o],this.#De=this.#p.value,this.#p.setSelectionRange(this.#p.value.length,this.#p.value.length),dn(this.#p))}#Ne(){this.#Z.length=0,this.#Ge(),this.#it.abort(),this.#se?.cancel(),this.#Q!==null&&(this.#Q.request=null,this.#i.withdrawRetry()),this.#A=null,this.#be=null,this.#h.stopContinuation()}#bt(){let e=this.#yt();e!==null&&this.#J&&e.cancel(this.#h.threadId),this.#Ne()}#yt(){return this.detachRuns?this.#wt():null}#wt(){let e=this.getAttribute("data-threads-url");return e===null?null:new ql(e,n=>this.#xe(n),()=>this.#Ce())}#Xt(e,n){let r={threadId:e,previousThreadId:this.#We,reason:n};this.#We=e,this.#r.shown();let o=this.#qt();o.length>0&&this.#Fe(o),this.refreshPlace(),this.#Re=this.#h.restored;let i=this.#en(),s=this.#Sn(e,n);this.#U(zc,r),s!==null&&this.#Me(s),i&&this.#tn(),(n==="switch"||n==="restore"&&this.conversationStore instanceof Ve)&&this.#h.refreshDrawer()}#Jt(){let e=this.getAttribute("title-text");return e!==AO?e??this.#t.title:this.#j.title===""?this.#t.title:this.#j.title}#Qt(){this.#T.textContent=this.#Jt(),this.#I.textContent=this.#T.textContent}#en(){let e=this.#h.threadId,n=this.#ot.get(e)??Wr(this.#Re,o=>this.#$.title(o)),r=this.#j;return n===r.title&&(e===r.threadId||n==="")?!1:(this.#j={threadId:e,title:n},this.#Qt(),!0)}#tn(){this.#U(Dc,{...this.#j}),this.#on(this.#j.threadId,this.#j.title)}#Oe(e){let n=this.#O.conversationNamespace(e);return n===""?Jc:`${Jc}@${n}`}#Tn(e,n){let r=sessionStorage.getItem(this.#Oe(e));r!==null&&(pn(this.#Oe(n),r,this.#Ct),sessionStorage.removeItem(this.#Oe(e)))}#nn(e){return e===this.#j.threadId?this.#j.title:""}#xt(){this.#M.load(),this.#Ue||=this.#M.tabs.length>0}#Me(e){this.#U(Xc,{tabs:this.#M.tabs,reason:e})}#rn(e){this.#M.close(e)&&this.#Me("delete"),this.#h.deleteThread(e)}#Sn(e,n){let r=this.#j.title,o=n==="new"?this.#st:null;return this.#st=null,n==="restore"||n==="rescope"?(this.#xt(),this.#Ue?(this.#M.open(e,r),this.#in(),n):null):this.#Ue&&(o!==null&&this.#M.replace(o,e,r)||this.#M.open(e,r))?"open":null}#on(e,n){this.#M.retitle(e,n)&&this.#Me("title")}async#in(){if(this.#M.untitled(this.#h.threadId).length!==0)try{this.#sn(await this.conversationStore.listThreads())}catch{}}#sn(e){let n=this.#h.threadId,r=!1;for(let{threadId:o,title:i}of e)o!==n&&this.#M.retitle(o,i)&&(r=!0);r&&this.#Me("title")}#Et(){this.#en()&&this.#tn()}#kn(e){let n=this.#h.threadId,r=e.find(i=>i.threadId===n);r===void 0||this.#Re.length===0||[Wr(this.#Re),C_(this.#Re),kO].includes(r.title)||(this.#ot.set(n,r.title),this.#Et())}#Ee(e){let n=this.#J&&!e;this.#J=e,this.#ct(),e&&(this.#A=null);let r=e?this.#t.stop:this.#t.send;this.#b.title=r,this.#b.setAttribute("aria-label",r),this.#b.dataset.state=e?"running":"idle",this.toggleAttribute("data-running",e),n&&this.#St()}#_t(e){this.#A===e&&(this.#A=null,this.#St())}#Tt(){return this.#J||this.#A!==null||this.#h.continuation!==null}#St(){if(this.#J||this.#be!==null||this.#h.continuation!==null)return;let e=this.#Z.shift();this.#Ge(),e!==void 0&&this.sendMessage(e.content,e.attachments)}#Ge(){this.#ue.replaceChildren(),this.#ue.hidden=this.#Z.length===0;for(let[e,n]of this.#Z.entries()){let r=n.content||n.attachments.map(i=>i.name).join(", "),o=document.createElement("button");o.type="button",o.className="queued-chip",o.setAttribute("part","queued-chip"),o.textContent=r,o.title=F(this.#t.removeQueued,{text:r}),o.setAttribute("aria-label",o.title),o.addEventListener("click",()=>{this.#Z.splice(e,1),this.#Ge()}),this.#ue.appendChild(o)}}#an(e){e!==""&&this.#re[0]!==e&&this.#re.unshift(e),this.#X=null}async#kt(){let e=this.#p.value.trim(),n=this.#D.tray?.readyRefs()??[];if(!(e===""&&n.length===0)){if(this.#an(e),this.#Tt()){e!==""&&(this.#Z.push({content:e,attachments:[]}),this.#Ge(),this.#p.value="",dn(this.#p));return}this.#p.value="",dn(this.#p),this.#D.tray?.hasPending()===!0&&this.#y.appendNotice("\u{1F4CE}",F(this.#t.attachmentsStillUploading,{n:this.#D.tray.pendingCount()}),"attachment-pending"),this.#D.tray?.clearReady(),await this.sendMessage(e,n)}}async sendMessage(e,n=[]){return this.#Qe({content:e,attachments:n},r=>(this.#Q=null,r.send(e,n)))}run(e){let{message:n}=e;return this.#Qe(n===void 0?null:{content:n.content,attachments:[]},r=>this.#ln(r,e))}#ln(e,n){let r={request:n};return this.#Q=r,e.run(n,()=>{this.#Q===r&&(r.request=null,this.#i.withdrawRetry())})}async#Qe(e,n){if(e!==null&&e.content===""&&e.attachments.length===0)return!1;let r=this.#je;if(r!==null&&this.#A===r.hold){let i={};this.#A=i,await r.restored;let s=this.#be;return s!==null?(await Promise.allSettled([s]),this.#be!==s?!1:(this.#be=null,this.#Qe(e,n))):this.#A!==i?!1:(this.#A=null,this.#Qe(e,n))}if(this.#Tt())return!1;let o={};this.#A=o;try{if(e!==null&&(this.#y.isEmpty()&&this.setAttribute("data-composer-settling",""),this.#cn(e.content,e.attachments)),this.#A!==o)return!1;let i=this.endpoint!=="";return await this.#An(n),i}finally{this.#_t(o)}}#cn(e,n){let r=this.appendMessage(et.USER,e);n.length>0&&r.appendChild(Wa(n)),this.#U(Ac,{content:e,attachments:n})}attachFile(e){return this.#D.attach(e)}async#An(e){if(this.endpoint===""){console.error('<ag-ui-chat>: no endpoint is set, so nothing was sent and no request was made. Point the element at your AG-UI mount with the endpoint attribute (endpoint="/agent/"), or assign chat.endpoint before sending.'),this.#y.appendNotice("\u26A0",this.#t.notConnected,"not-connected");return}await e(this.#Be())}#Be(){return this.#se===null&&(this.#se=this.#dn({endpoint:this.endpoint,initialMessages:this.#h.restored,follows:[]})),this.#se}#dn(e){let n=this.#h.threadId,r=this.#Ae,o=this.#wt(),i=this.agentFactory({endpoint:e.endpoint,headers:this.#at(),getHeaders:()=>this.#at(),trustedOrigins:this.trustedOrigins,...this.#lt(),threadId:n,initialMessages:e.initialMessages,initialState:this.#ve,...o===null?{}:{eventsUrl:o.eventsUrl(n)},getEventsUrl:()=>this.#wt()?.eventsUrl(n)});return new ui({agent:i,handlers:this.#S.forClient(n),getTools:()=>(this.refreshPlace(),this.#W.advertise()),getContext:()=>this.#_.buildContext(),executeTool:s=>this.#_.execute(s),resolveInterrupts:s=>this.#_.resolveInterrupts(s),onPersist:s=>{if(r!==this.#Ae)return;let a=[...e.follows,...s];this.conversationStore.saveMessages(n,a),n===this.#h.threadId&&(this.#Re=a,this.#Et()),e.onSaved?.(a)},onStateChanged:s=>{r===this.#Ae&&this.#Rn(s)},connectionLostMessage:this.#t.connectionLost,unfinishedMessage:this.#t.callNotFinished,declinedMessage:this.#t.declinedAction,maxToolRounds:x_(this),detach:()=>this.#yt()!==null})}#Rn(e){this.#ve={...e},this.#U(Mc,{state:this.#ve})}#un(e,n){this.#y.appendNotice("\u2922",e,"surface",n===null?void 0:{label:this.#t.undo,onActivate:n})}enableCharts(e=["tool","activity"]){let n=!this.#s.has(Ri)&&!this.#W.has(Za);e.includes("activity")&&this.registerActivityRenderer({type:Ri,render:r=>{let o=zr(r);return o===null?null:Fo(o)},removedNotice:this.#t.chartUndrawable}),e.includes("tool")&&this.registerTool(Lw()),n&&this.isConnected&&this.reload()}registerActivityRenderer(e){this.#s.register(e)}get unhandledActivityTypes(){return this.#s.unhandledTypes()}};function P_(t,e){for(let n of t.querySelectorAll("slot"))n.innerHTML=e}function NO(t){let e=t?.removed;return typeof e=="number"?e:null}function OO(){let t=customElements.get(yn);if(t===void 0)customElements.define(yn,Yr);else if(t!==Yr)throw new Error(`<${yn}> is already defined by another class: a second copy of this package, or another package, is on the page`)}var z_=[["endpoint","endpoint"],["tools_url","data-tools-url"],["threads_url","data-threads-url"],["runs_url","data-runs-url"],["skills_url","data-skills-url"],["skill_editor_url","data-skill-editor-url"],["routines_url","data-routines-url"],["attachments_url","data-attachments-url"],["transcribe_url","data-transcribe-url"]],MO=["omit","same-origin","include"],Kr=class extends HTMLElement{static observedAttributes=["agent","data-agents-url","data-inbox-url","data-inbox-transport"];headers={};getHeaders=null;#e=[];#t=[];#n=null;#r=null;#o=null;#s=null;#i=null;#a=0;#l=null;#c=null;get agents(){return this.#e}get inbox(){return this.#t}get agent(){return this.#r?.id??null}set agent(e){this.setAttribute("agent",e)}get chat(){return this.#n??this.querySelector(yn)}set chat(e){this.#n=e,this.#g()}get credentials(){let e=this.getAttribute("credentials");return e!==null&&MO.includes(e)?e:null}connectedCallback(){this.#d(),this.refresh(),this.#u()}disconnectedCallback(){this.#a+=1,this.#m(),this.#d()}attributeChangedCallback(e){e==="agent"?this.#g():e==="data-agents-url"?(this.#s=null,this.isConnected&&this.refresh()):this.#u()}async refresh(){let e=this.getAttribute("data-agents-url");if(e===null||e==="")return;this.#a+=1;let n=this.#a,r=await this.#b(e,this.#s),o=null;if(r?.ok===!0)try{o=(await r.json()).agents??[]}catch{o=null}o===null||n!==this.#a||(this.#s=r.headers.get("ETag"),this.#e=o,this.#x(qc,{agents:o}),this.#g())}async openThread(e,n){this.agent=e,this.agent===e&&await this.chat?.switchThread(n)}request(e,n={}){let r=new Headers(this.#T());new Headers(n.headers).forEach((i,s)=>{r.set(s,i)});let o=n.credentials??this.credentials??void 0;return fetch(e,{...n,headers:r,...o===void 0?{}:{credentials:o}})}async getCapabilities(){return this.#r?.capabilities}#d(){let e=this.isConnected?this.chat:null;e!==this.#c&&(this.#c?.removeEventListener(ur,this.#f),e?.addEventListener(ur,this.#f),this.#c=e)}#f=e=>{let{agentId:n,threadId:r}=e.detail,o=this.#e.find(i=>i.id===n);!e.defaultPrevented&&o!==void 0&&o.id!==this.#r?.id&&(e.preventDefault(),this.openThread(o.id,r))};#g(){this.#d();let e=this.getAttribute("agent"),n=e===null?this.#e[0]:this.#e.find(i=>i.id===e);if(n===void 0){e!==null&&this.#e.length>0&&console.warn(`<ag-ui-agents>: agent="${e}" is not in the directory.`);return}let r=this.chat,o=!PO(n,this.#r)||r!==this.#o;this.#r=n,o&&(this.#o=r,r!==null&&this.#v(r,n),this.#x(Kc,{agent:n}))}#v(e,n){let r=e.parentNode,o=e.nextSibling;e.remove();for(let[i,s]of z_){let a=n[i];a==null?e.removeAttribute(s):e.setAttribute(s,a)}LO(e.conversationStore)&&(e.conversationStore=new Ut(n.id)),r?.insertBefore(e,o)}#u(){this.#m();let e=this.getAttribute("data-inbox-url");if(!this.isConnected||e===null||e==="")return;let n=this.getAttribute("data-inbox-transport")==="stream"?"stream":"poll";this.#l=new qr({url:e,transport:n,headers:()=>this.#T(),credentials:()=>this.credentials??void 0,poll:()=>this.#p(e),seen:r=>{this.#i=r},changed:r=>{this.#t=r.map(zO),this.#x(Yc,{threads:this.#t})},etag:()=>this.#i}).start()}#m(){this.#l?.(),this.#l=null}async#p(e){let n=await this.#b(e,this.#i);if(n?.status!==304){if(n?.ok!==!0)return null;try{let r=await n.json();return this.#i=n.headers.get("ETag"),r.threads??[]}catch{return null}}}async#b(e,n){let r={...this.#T(),...n===null?{}:{"If-None-Match":n}};try{return await fetch(e,He({headers:r},this.credentials??void 0))}catch{return null}}#T(){return{...this.headers,...this.getHeaders?.()}}#x(e,n){this.dispatchEvent(new CustomEvent(e,{detail:n,bubbles:!0,composed:!0}))}};function PO(t,e){return e!==null&&t.id===e.id&&z_.every(([n])=>t[n]===e[n])}function LO(t){return t instanceof Ve||t instanceof tr&&t.local instanceof Ut}function zO(t){let e=t.updated_at===null?Number.NaN:Date.parse(t.updated_at),n={threadId:t.thread_id,agentId:t.agent_id,title:t.title,updatedAt:e,preview:t.preview};if(t.status===void 0)return n;let r=t.last_read_at,o=t.status!=="running"&&r!==null&&r!==void 0&&e>Date.parse(r);return{...n,status:t.status,unread:o,...t.status==="failed"&&typeof t.reason=="string"?{reason:t.reason}:{},...t.status==="waiting"&&t.interrupts!==void 0?{interrupts:t.interrupts}:{},...t.status==="waiting"&&typeof t.run_id=="string"?{runId:t.run_id}:{}}}function DO(){let t=customElements.get(ao);if(t===void 0)customElements.define(ao,Kr);else if(t!==Kr)throw new Error(`<${ao}> is already defined by another class: a second copy of this package, or another package, is on the page`)}async function $O(t,e,n={}){await Vt(t),await pd(t,{...n,flashMs:n.flashMs??0}),await ud(t,e,n)}async function UO(t,e={}){await Vt(t),await hd(t,e)}async function HO(t,e={}){await Vt(t),await fd(t,e)}async function FO(t,e,n={}){await Vt(t),await md(t,e,n)}async function GO(t,e,n={}){await Vt(t),await gd(t,e,n)}function BO(t,e){t instanceof HTMLInputElement&&t.type==="checkbox"?uo(t,!!e):En(t,String(e)),ho(t)}var VO="0.14.0";export{qc as AGENTS_CHANGE_EVENT,ao as AGENTS_TAG,Kc as AGENT_CHANGE_EVENT,Pc as ATTACHMENT_EVENT,Kr as AgUiAgents,Yr as AgUiChat,ui as AgUiClient,Ic as BAR_HEIGHT_EVENT,Ri as CHART_ACTIVITY_TYPE,Za as CHART_TOOL_NAME,Oi as CHAT_CORNERS,Vc as COMPACTION_ACTIVITY_TYPE,$c as CUSTOM_AGENT_EVENT,Vo as CheckpointMenu,lo as ClientToolRegistry,Zl as ConnectionLostError,ve as DEFAULT_UI_STRINGS,Cc as DOCK_WIDTH_EVENT,yn as ELEMENT_TAG,Hc as FEEDBACK_EVENT,Yc as INBOX_CHANGE_EVENT,Gc as INVALIDATE_CUSTOM_NAME,Uc as INVALIDATE_EVENT,Zc as LOAD_CAPABILITY_TOOL,Rc as MAXIMIZE_EVENT,rI as MAX_QUOTE_CHARS,qN as MAX_SUGGESTIONS,YN as MAX_SUGGESTION_CHARS,dr as MAX_TOOL_ROUNDS,wn as MESSAGE_ACTIONS,et as MESSAGE_ROLE,Qc as OPEN_EDITOR_EVENT,ur as OPEN_THREAD_EVENT,fo as PAGE_ACTIONS,Lc as RUN_FINISHED_EVENT,tr as RemoteConversationStore,Zo as RunIndex,Mc as STATE_EVENT,Ac as SUBMIT_EVENT,Fc as SUGGESTIONS_ACTIVITY_TYPE,Ve as SessionStorageStore,Xc as TABS_EVENT,Oc as THEME_EVENT,Wc as THREADS_CHANGE_EVENT,zc as THREAD_EVENT,Dc as THREAD_TITLE_EVENT,_i as TOGGLE_EVENT,Q as TOOL_CALL_STATUS,Ft as TOOL_DISPLAY,Gt as TOOL_GROUP_DISPLAY,tt as TOOL_OUTCOME,Xo as ToolCallCard,Nc as UNREAD_EVENT,VO as VERSION,Ti as X_CONFIRM_KEY,ro as X_DESTRUCTIVE_KEY,oo as X_NAVIGATES_KEY,Ue as X_SUMMARY_KEY,Lh as asQuote,Yh as attachMessageActions,zh as attachQuoteOffer,zr as chartSpecFrom,UO as clickElement,nd as createChatSurfaceTools,_p as createHttpAgent,vd as createPageActionTools,bd as createPageMapContext,yd as createPageStateTools,wd as createRouteTools,DO as defineAgents,OO as defineChat,$O as fillField,IT as flash,pd as focusWithFlash,hd as highlightThenClick,Ff as isChatCorner,Ch as isDestructive,Ba as isNavigates,Th as mergeUiStrings,Rl as messageActionBar,Dh as messageAttachments,kh as parseToolCatalog,Li as prefersReducedMotion,HO as pressButton,fd as pressThenClick,di as prettifyToolName,Go as quotableSelection,Bo as relativeTime,Fo as renderChart,li as renderMarkdown,ci as renderSuggestionChips,Ah as requestApproval,Ih as requestConfirmation,Sh as requestQuestion,Vt as scrollIntoCenterView,FO as selectControl,md as selectOption,BO as setControlValue,uo as setNativeChecked,En as setNativeValue,cd as showHighlightOverlay,s_ as suggestionPrompts,GO as toggleCheckbox,gd as toggleControl,jo as toolStatusFromOutcome,Ph as transcribeAudio,ud as typeInto,Oh as uploadAttachment};
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
