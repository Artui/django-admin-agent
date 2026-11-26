var sS=Object.defineProperty;var Zd=(t,e)=>{for(var n in e)sS(t,n,{get:e[n],enumerable:!0})};var yt="agents-web-components",kn="ag-ui-chat",Wd="ag-ui-submit",Ni="ag-ui-toggle",qd="ag-ui-maximize",Yd="ag-ui-bar-height",Kd="ag-ui-dock-width",Xd="ag-ui-unread",Jd="ag-ui-theme",Qd="ag-ui-state",ec="ag-ui-attachments",tc="ag-ui-run-finished",nc="ag-ui-thread",rc="ag-ui-thread-title",oc="ag-ui-custom",ic="ag-ui-invalidate",sc="ag-ui-feedback",ac="suggestions",lc="ag_ui.invalidate",Mf="ag_ui.skills_changed",Pf="ag_ui.subagent",Se={STARTED:"started",TOOL_CALL:"tool_call",TOOL_RESULT:"tool_result",FINISHED:"finished",FAILED:"failed",BACKGROUNDED:"backgrounded",STEERED:"steered",QUESTION:"question",ANSWERED:"answered",CANCEL_REQUESTED:"cancel_requested",RETRIED:"retried",CANCELLED:"cancelled",UNFINISHED:"unfinished"},Lf=new Map([["cancelled",Se.CANCELLED],["unfinished",Se.UNFINISHED]]),it={USER:"user",ASSISTANT:"assistant"},uo="x-destructive",ho="x-confirm",Fe="x-summary",po="x-navigates",fo="read_page",Oi="page_map",jt="data-agent-handle",Mi="data-agent-ignore",mo="ag-ui-",dc={headings:30,landmarks:20,tabs:30,fields:50,buttons:50,links:50,tables:10,dialogs:5},cc=80,zf=20,Df="place",wr=10,An={COPY:"copy",RETRY:"retry",FEEDBACK:"feedback"},Q={PENDING:"pending",DEFERRED:"deferred",DONE:"done",ERROR:"error",DECLINED:"declined",INTERRUPTED:"interrupted"},st={SUCCESS:"success",FAILED:"failed",DENIED:"denied",INTERRUPTED:"interrupted"},dt={UPLOADING:"uploading",READY:"ready",ERROR:"error"},uc=10*1024*1024,Zt={GROUPED:"grouped",INLINE:"inline",MINIMAL:"minimal",COMPACT:"compact",FULL:"full"},Wt={INLINE:"inline",MINIMAL:"minimal",COMPACT:"compact",FULL:"full"},hc="compaction",pc="load_capability",$f='<svg class="glyph" viewBox="0 0 24 24" aria-hidden="true"><path d="M12 19.5V5m-6.5 6.5L12 5l6.5 6.5"/></svg>',Uf='<svg class="glyph glyph--solid" viewBox="0 0 24 24" aria-hidden="true"><rect x="7" y="7" width="10" height="10" rx="2.5"/></svg>',Hf='<svg class="glyph" viewBox="0 0 24 24" aria-hidden="true"><path d="M17 8.5V15a5 5 0 0 1-10 0V7a3 3 0 0 1 6 0v7.5a1 1 0 0 1-2 0V8.5"/></svg>',Ff='<svg class="glyph" viewBox="0 0 24 24" aria-hidden="true"><path d="M12 4a3 3 0 0 1 3 3v5a3 3 0 0 1-6 0V7a3 3 0 0 1 3-3z"/><path d="M5 11v1a7 7 0 0 0 14 0v-1"/><path d="M12 19v3"/></svg>',Gf='<svg class="glyph" viewBox="0 0 24 24" aria-hidden="true"><path d="M12 21s-6.5-5.6-6.5-11a6.5 6.5 0 0 1 13 0c0 5.4-6.5 11-6.5 11z"/><circle cx="12" cy="10" r="2.3"/></svg>',Bf='<svg class="glyph" viewBox="0 0 24 24" aria-hidden="true"><path d="M2.5 12s3.5-6.5 9.5-6.5 9.5 6.5 9.5 6.5-3.5 6.5-9.5 6.5S2.5 12 2.5 12z"/><circle cx="12" cy="12" r="2.8"/></svg>',Vf='<svg class="glyph" viewBox="0 0 24 24" aria-hidden="true"><path d="M2.5 12s3.5-6.5 9.5-6.5c2 0 3.7.7 5.1 1.7M21.5 12s-3.5 6.5-9.5 6.5c-2 0-3.7-.7-5.1-1.7"/><path d="M4 20 20 4"/></svg>',jf='<svg class="glyph" viewBox="0 0 24 24" aria-hidden="true"><path d="M20 14.5A8.5 8.5 0 0 1 9.5 4a8.5 8.5 0 1 0 10.5 10.5z"/></svg>',Zf='<svg class="glyph" viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"/></svg>',Pi='<svg class="glyph" viewBox="0 0 24 24" aria-hidden="true"><path d="M14 10l6-6M15 4h5v5M10 14l-6 6M4 15v5h5"/></svg>',Wf='<svg class="glyph" viewBox="0 0 24 24" aria-hidden="true"><path d="M20 4l-6 6M14 5v5h5M4 20l6-6M5 14h5v5"/></svg>',qf='<svg class="glyph" viewBox="0 0 24 24" aria-hidden="true"><rect x="3" y="4" width="18" height="16" rx="2.5"/><path d="M15 4v16"/><path d="M8 9.5l2.5 2.5L8 14.5"/></svg>',Yf='<svg class="glyph" viewBox="0 0 24 24" aria-hidden="true"><rect x="3" y="4" width="18" height="16" rx="2.5"/><path d="M9 4v16"/><path d="M16 9.5L13.5 12l2.5 2.5"/></svg>',go='<svg class="glyph" viewBox="0 0 24 24" aria-hidden="true"><path d="M6 9.5l6 6 6-6"/></svg>',Kf='<svg class="glyph" viewBox="0 0 24 24" aria-hidden="true"><path d="M6 14.5l6-6 6 6"/></svg>',Xf='<svg class="glyph" viewBox="0 0 24 24" aria-hidden="true"><path d="M9.5 6l6 6-6 6"/></svg>',Jf='<svg class="glyph" viewBox="0 0 24 24" aria-hidden="true"><path d="M14.5 6l-6 6 6 6"/></svg>',Qf='<svg class="glyph" viewBox="0 0 24 24" aria-hidden="true"><path d="M11 4.5H6.5a2 2 0 0 0-2 2v11a2 2 0 0 0 2 2h11a2 2 0 0 0 2-2V13"/><path d="M17.5 3.5a2.1 2.1 0 0 1 3 3L12 15l-3.5 1 1-3.5z"/></svg>',em='<svg class="glyph" viewBox="0 0 24 24" aria-hidden="true"><path d="M3.5 12A8.5 8.5 0 1 0 6 6L3.5 8.5"/><path d="M3.5 4v4.5H8"/><path d="M12 7.5V12l3 2"/></svg>',tm='<svg class="glyph" viewBox="0 0 24 24" aria-hidden="true"><path d="M5 4h10l4 4v12H5z"/><path d="M9 12h6M9 16h4"/></svg>',fc='<svg class="glyph" viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="13" r="7"/><path d="M12 9v4l2.5 2.5M9 3h6"/></svg>',nm='<svg class="glyph" viewBox="0 0 24 24" aria-hidden="true"><path d="M15 18l-6-6 6-6"/></svg>',Li='<svg class="glyph" viewBox="0 0 24 24" aria-hidden="true"><path d="M12 5v14M5 12h14"/></svg>',rm='<svg class="glyph" viewBox="0 0 24 24" aria-hidden="true"><path d="M9 14L4 9l5-5"/><path d="M4 9h10.5a5.5 5.5 0 0 1 0 11H11"/></svg>',om='<svg class="glyph" viewBox="0 0 24 24" aria-hidden="true"><path d="M4 5.5A2.5 2.5 0 0 1 6.5 3h11A2.5 2.5 0 0 1 20 5.5v8a2.5 2.5 0 0 1-2.5 2.5H9l-5 4z"/></svg>',im='<svg class="glyph" viewBox="0 0 24 24" aria-hidden="true"><rect x="9" y="9" width="11" height="11" rx="2"/><path d="M5 15V6a2 2 0 0 1 2-2h8"/></svg>',sm='<svg class="glyph" viewBox="0 0 24 24" aria-hidden="true"><path d="M20 12a8 8 0 1 1-2.5-5.8"/><path d="M20 4v4h-4"/></svg>',am='<svg class="glyph" viewBox="0 0 24 24" aria-hidden="true"><path d="M7 10v10H4V10z"/><path d="M7 10l4.5-7a2 2 0 0 1 3.4 2L13.5 9H19a2 2 0 0 1 2 2.3l-1.1 6.4A2 2 0 0 1 17.9 20H7"/></svg>',lm='<svg class="glyph" viewBox="0 0 24 24" aria-hidden="true"><path d="M17 14V4h3v10z"/><path d="M17 14l-4.5 7a2 2 0 0 1-3.4-2l1.4-4H5a2 2 0 0 1-2-2.3l1.1-6.4A2 2 0 0 1 6.1 4H17"/></svg>',dm='<svg class="glyph" viewBox="0 0 24 24" aria-hidden="true"><path d="M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8z"/><path d="M14 3v5h5"/></svg>',cm='<svg class="glyph" viewBox="0 0 24 24" aria-hidden="true"><rect x="3.5" y="4.5" width="17" height="15" rx="2.5"/><circle cx="9" cy="10" r="1.5"/><path d="M4.5 17.5 9 13.5l3.5 3 3-2.5 4.5 4"/></svg>',um='<svg class="glyph" viewBox="0 0 24 24" aria-hidden="true"><path d="M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8z"/><path d="M14 3v5h5"/><rect class="glyph--solid" x="7.5" y="13.5" width="9" height="4.5" rx="1"/></svg>',hm='<svg class="glyph" viewBox="0 0 24 24" aria-hidden="true"><path d="M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8z"/><path d="M14 3v5h5"/><path d="M8.5 13.5h7M8.5 17h4.5"/></svg>',zi="chart",Rn={ENQUEUED_MESSAGES:"pydantic_ai_enqueued_messages",COMPACTION:"pydantic_ai_compaction",TOOL_AVAILABILITY_DELTA:"pydantic_ai_tool_availability_delta",MODEL_SETTINGS_DELTA:"pydantic_ai_model_settings_delta",CAPABILITY_LOAD_DELTA:"pydantic_ai_capability_load_delta",MCP_APPS:"mcp-apps"},qt=24,pm=150,fm=2147483001,Di=5e3,ct=8;var mc="ag-ui-threads-change";var Er="ag-ui-open-thread",vo="ag-ui-agents",gc="ag-ui-agents-change",vc="ag-ui-inbox-change",bc="ag-ui-agent-change",yc="ag-ui-tabs",wc=`${yt}.open-threads`;var mm='<svg class="glyph" viewBox="0 0 24 24" aria-hidden="true"><circle cx="5" cy="12" r="1.3"/><circle cx="12" cy="12" r="1.3"/><circle cx="19" cy="12" r="1.3"/></svg>';var Ec="ag-ui-open-editor";var aS=/\{([a-zA-Z_][a-zA-Z0-9_]*)\}/g;function F(t,e){return t.replace(aS,(n,r)=>Object.hasOwn(e,r)?String(e[r]):n)}var lS=/\{([a-zA-Z_][a-zA-Z0-9_]*)\}/g;function gm(t,e){let n=[];return{text:t.replace(lS,(o,i)=>{let s=e[i];return s==null||s===""?(n.includes(i)||n.push(i),o):String(s)}),missing:n}}function dS(t){if(typeof t!="object"||t===null)return!1;let e=t;return typeof e.name=="string"&&typeof e.title=="string"&&(e.prompt===void 0||typeof e.prompt=="string")}function xc(t){return Array.isArray(t)?t.filter(dS):[]}var $i=class{#e;#t=[];#n=[];#r=[];#o=new Map;#i=0;constructor(e){this.#e=e}setClientSkills(e){this.#r=e,this.#a()}init(){this.#e.menu.enableChips(this.#e.flag("data-prompt-chips")),this.#e.menu.enableSlash(this.#e.flag("data-slash-commands")),this.#n=this.#s(),this.#a()}async fetch(){let e=this.#e.element.getAttribute("data-skills-url");if(e===null)return;this.#i+=1;let n=this.#i;try{let r=await this.#e.request(e),o=xc(await r.json());n===this.#i&&(this.#t=o,this.#a())}catch{}}forget(){this.#i+=1,this.#t=[],this.#a()}apply(e){let{input:n,hint:r}=this.#e;if(e.prompt===void 0){r.hidden=!0,n.value.startsWith("/")&&(n.value="",this.#e.autoGrow()),this.#e.send(`/${e.name}`);return}let{text:o,missing:i}=gm(e.prompt,this.#e.context());if(i.length>0){r.textContent=F(this.#e.strings().skillNeeds,{title:e.title,fields:i.join(", ")}),r.hidden=!1,n.value=o,this.#e.autoGrow(),n.focus(),this.#l(o);return}if(r.hidden=!0,n.value=o,this.#e.autoGrow(),e.sendImmediately===!1){n.focus();return}this.#e.submit()}#s(){return xc(this.#e.readJsonAttribute("data-skills"))}title(e){return this.#o.get(e)?.title}#a(){this.#o.clear();for(let e of[...this.#t,...this.#n,...this.#r])this.#o.set(e.name,e);this.#e.menu.setSkills([...this.#o.values()])}#l(e){let n=e.indexOf("{");this.#e.input.setSelectionRange(n,e.indexOf("}",n)+1)}};function _c(t){if(typeof t!="object"||t===null)return null;let e=t,{id:n,name:r,description:o,body:i,userInvocable:s,modelInvocable:a,enabled:l}=e;if(typeof n!="string"||typeof r!="string"||typeof o!="string"||typeof i!="string"||typeof s!="boolean"||typeof a!="boolean"||typeof l!="boolean")return null;let{scope:d}=e;return{id:n,name:r,description:o,body:i,userInvocable:s,modelInvocable:a,enabled:l,...typeof d=="string"&&d!==""?{scope:d}:{}}}var Ui=class{#e;#t;constructor(e,n){this.#e=e.endsWith("/")?e:`${e}/`,this.#t=n}list(){return this.#o(this.#e,{method:"GET"},e=>{let n=e?.skills;return Array.isArray(n)?n.map(_c).filter(r=>r!==null):null})}create(e){return this.#r(this.#e,"POST",e)}update(e,n){return this.#r(this.#n(e),"PUT",n)}setEnabled(e,n){return this.#r(this.#n(e),"PATCH",{enabled:n})}#n(e){return`${this.#e}${encodeURIComponent(e)}/`}#r(e,n,r){let o={method:n,headers:{"Content-Type":"application/json"},body:JSON.stringify(r)};return this.#o(e,o,_c)}async#o(e,n,r){let o;try{o=await this.#t(e,n)}catch{return{ok:!1,status:0,message:null,field:null}}let i=await o.json().catch(()=>null);if(o.ok){let d=r(i);if(d!==null)return{ok:!0,value:d}}let s=typeof i=="object"&&i!==null?i:{},{error:a,field:l}=s;return{ok:!1,status:o.status,message:typeof a=="string"?a:null,field:typeof l=="string"?l:null}}};var Hi=["top-left","top-right","bottom-left","bottom-right"];function vm(t){return Hi.includes(t)}function Tc(t){return[{name:"read_chat_surface",description:"Describe the chat panel you are speaking from: its placement, whether it is collapsed, whether it can be moved, and the box it occupies. Read this before moving or minimising yourself, since a full-screen panel has nowhere to move to. Read-only.",parameters:{type:"object",properties:{},required:[],[Fe]:"Read the chat's own position"},handler:()=>t.describeSurface()},{name:"move_chat",description:"Move your own panel to a corner, to uncover something the user needs to see. `corner` is top-left, top-right, bottom-left or bottom-right. Answers `moved: false` with a reason when the placement owns its position or the panel fills the screen; check `read_chat_surface` first, and prefer minimise_chat when there is nowhere to move to.",parameters:{type:"object",properties:{corner:{type:"string",enum:[...Hi]}},required:["corner"],[Fe]:"Move the chat out of the way"},handler:e=>{let n=String(e.corner??""),r=t.describeSurface();return vm(n)?r.movable?{moved:t.moveTo(n,{announce:!0}),corner:n}:{moved:!1,reason:r.fullBleed?"the panel fills the screen, so there is nowhere to move it to":r.draggable===!1?"this page has turned off moving the panel":`the "${r.placement??""}" placement owns the panel's position`,suggestion:r.collapsible?"minimise_chat":null}:{moved:!1,reason:`"${n}" is not a corner; use one of ${Hi.join(", ")}`}}},{name:"minimise_chat",description:"Collapse your own panel, so the user can see the whole page. The user reopens it from where it collapsed to (a launcher, a rail, a bottom bar or the page's own control). Answers `minimised: false` when the placement has no collapsed state, which is the case for a full-page chat.",parameters:{type:"object",properties:{},required:[],[Fe]:"Minimise the chat"},handler:()=>t.describeSurface().collapsible?(t.setCollapsed(!0,{announce:!0}),{minimised:!0}):{minimised:!1,reason:"this placement has no collapsed state, so there is nothing to minimise to"}},{name:"restore_chat",description:"Open your own panel again after minimising it.",parameters:{type:"object",properties:{},required:[],[Fe]:"Restore the chat"},handler:()=>(t.setCollapsed(!1),{restored:!0})}]}var bo=class{#e=new Map;register(e){this.#e.set(e.name,e)}has(e){return this.#e.has(e)}get(e){let n=this.#e.get(e);if(n===void 0)throw new Error(`tool "${e}" is not registered`);return n}tools(){return[...this.#e.values()].map(e=>({name:e.name,description:e.description,parameters:e.parameters}))}};var Sc=new Set,xr=class{#e;constructor(e){this.#e=e}join(){Sc.add(this.#e)}leave(){Sc.delete(this.#e)}static latest(){let e=null;for(let n of Sc)e=n;return e}};var bm="--ag-ui-highlight-ring-color",cS="--ag-ui-accent",Ac="--_accent",ym="#4f46e5";function _r(t,e){let n=Cc(t,bm);if(n!=="")return n;let r=e??xr.latest(),o=r===null?"":Fi(r,bm);if(o!=="")return o;let i=Cc(t,cS);if(i!=="")return i;if(r===null)return ym;let s=Fi(r,Ac);return s===""?ym:hS(r,s,t)}var uS=3,wm=.1;function hS(t,e,n){let r=document.createElement("canvas").getContext("2d",{willReadFrequently:!0});if(r===null)return e;let o=x=>{r.clearRect(0,0,1,1),r.fillStyle="rgb(0 0 0 / 0)",r.fillStyle=x,r.fillRect(0,0,1,1);let[T=0,O=0,S=0,g=0]=r.getImageData(0,0,1,1).data;return[T,O,S,g/255]},i=pS(n,o),s=x=>kc(Rc(x,i),i)>=uS,l=[e,Fi(t,Ac,"light"),Fi(t,Ac,"dark")].find(x=>s(o(x)));if(l!==void 0)return l;let d=Rc(o(e),i),c=[0,0,0,1],h=[255,255,255,1],p=kc(c,i)>kc(h,i)?c:h,m=1;for(;!s(Ic(d,p,m*wm));)m+=1;let[u,v,E]=Ic(d,p,m*wm);return`rgb(${u}, ${v}, ${E})`}function pS(t,e){let n=[];for(let i=Em(t);i!==null;i=Em(i)){let s=e(window.getComputedStyle(i).backgroundColor);if(n.push(s),s[3]===1)break}let r=document.createElement("span");r.hidden=!0,r.style.color="Canvas",document.documentElement.appendChild(r);let o=e(window.getComputedStyle(r).color);r.remove();for(let i of n.reverse())o=Rc(i,o);return o}function Em(t){if(t.parentElement!==null)return t.parentElement;let e=t.getRootNode();return e instanceof ShadowRoot?e.host:null}function Rc(t,e){return Ic(e,t,t[3])}function Ic(t,e,n){let r=o=>Math.round(t[o]+(e[o]-t[o])*n);return[r(0),r(1),r(2),1]}function xm([t,e,n]){let r=o=>{let i=o/255;return i<=.04045?i/12.92:((i+.055)/1.055)**2.4};return .2126*r(t)+.7152*r(e)+.0722*r(n)}function kc(t,e){let[n,r]=[xm(t),xm(e)];return(Math.max(n,r)+.05)/(Math.min(n,r)+.05)}function Cc(t,e){return window.getComputedStyle(t).getPropertyValue(e).trim()}function Fi(t,e,n){let r=Cc(t,e),o=t.shadowRoot;if(r===""||o===null)return r;let i=document.createElement("span");if(i.hidden=!0,n!==void 0&&(i.style.colorScheme=n),i.style.color=r,i.style.color==="")return"";o.appendChild(i);let s=window.getComputedStyle(i).color;return i.remove(),s}function yo(t,e,n){let r=window.getComputedStyle(t).getPropertyValue(e).trim();return r===""?n:r}var fS=4;function Nc(t,e={}){let n=document.createElement("div");n.setAttribute("data-ag-ui-highlight",""),n.setAttribute("aria-hidden","true"),n.style.cssText=["position: fixed","inset: 0","pointer-events: none",`z-index: ${yo(t,"--ag-ui-highlight-z-index",String(fm))}`].join(";");let r=document.createElement("div"),o=document.createElement("div");n.className="ag-ui-highlight",r.className="ag-ui-highlight-scrim",o.className="ag-ui-highlight-ring",e.scrim===!0&&n.append(r),n.append(o);let i=e.ringWidth??Number.parseFloat(yo(t,"--ag-ui-highlight-ring-width","3")),s=e.flowMs??Number.parseFloat(yo(t,"--ag-ui-highlight-flow-ms","2400")),a=()=>{let c=t.getBoundingClientRect(),h=e.padding??fS,p=e.radius??Number.parseFloat(getComputedStyle(t).borderRadius),m=c.left-h,u=c.top-h,v=c.width+h*2,E=c.height+h*2;e.scrim===!0&&(r.style.cssText=["position: absolute","inset: 0",`background: ${yo(t,"--ag-ui-highlight-scrim","rgba(15, 15, 25, 0.45)")}`,`clip-path: path(evenodd, '${vS(m,u,v,E,p+h)}')`].join(";")),o.style.cssText=["position: absolute",`left: ${m}px`,`top: ${u}px`,`width: ${v}px`,`height: ${E}px`,`border-radius: ${p+h}px`,`border: ${i}px solid transparent`,"box-sizing: border-box",gS(t,e)].join(";")};a();let l=null;e.gradient===!0&&!window.matchMedia("(prefers-reduced-motion: reduce)").matches&&(l=o.animate([{backgroundPosition:"100% 0"},{backgroundPosition:"-100% 0"}],{duration:s,iterations:Number.POSITIVE_INFINITY,easing:"linear"}));let d={capture:!0,passive:!0};return window.addEventListener("scroll",a,d),window.addEventListener("resize",a,d),document.body.appendChild(n),()=>{window.removeEventListener("scroll",a,d),window.removeEventListener("resize",a,d),l?.cancel(),n.remove()}}function mS(t){return t===void 0?null:CSS.supports("color",t)?t:null}function gS(t,e){let n=mS(e.color)??_r(t,e.chat);if(e.gradient!==!0)return`border-color: ${n}`;let r=yo(t,"--ag-ui-highlight-gradient",`linear-gradient(115deg, transparent 20%, ${n} 50%, transparent 80%)`),o="linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0)";return[`background-image: ${r}`,"background-origin: border-box","background-size: 300% 100%",`-webkit-mask: ${o}`,`mask: ${o}`,"-webkit-mask-composite: xor","mask-composite: exclude","background-position: 50% 0"].join(";")}function vS(t,e,n,r,o){let i=Math.max(0,Math.min(o,n/2,r/2)),s=t+n,a=e+r,l=`M 0 0 H ${window.innerWidth} V ${window.innerHeight} H 0 Z`,d=[`M ${t+i} ${e}`,`H ${s-i}`,`A ${i} ${i} 0 0 1 ${s} ${e+i}`,`V ${a-i}`,`A ${i} ${i} 0 0 1 ${s-i} ${a}`,`H ${t+i}`,`A ${i} ${i} 0 0 1 ${t} ${a-i}`,`V ${e+i}`,`A ${i} ${i} 0 0 1 ${t+i} ${e}`,"Z"].join(" ");return`${l} ${d}`}function Gi(t,e){return Object.getOwnPropertyDescriptor(t,e).set}var bS=Gi(HTMLInputElement.prototype,"value"),yS=Gi(HTMLTextAreaElement.prototype,"value"),wS=Gi(HTMLSelectElement.prototype,"value"),ES=Gi(HTMLInputElement.prototype,"checked");function In(t,e){t instanceof HTMLTextAreaElement?yS.call(t,e):t instanceof HTMLSelectElement?wS.call(t,e):bS.call(t,e)}function wo(t,e){ES.call(t,e)}function Eo(t){t.dispatchEvent(new Event("input",{bubbles:!0})),t.dispatchEvent(new Event("change",{bubbles:!0}))}function Tr(t){return new Promise(e=>{setTimeout(e,t)})}function Bi(){return window.matchMedia("(prefers-reduced-motion: reduce)").matches}function Oc(t){return t<=0||Bi()?Promise.resolve():Tr(t)}function _m(t,e){return`0 0 0 3px color-mix(in srgb, ${_r(t,e)} 40%, transparent)`}function Tm(t,e){let n=t.style.outline,r=t.style.outlineOffset;return t.style.outline=`2px solid ${_r(t,e)}`,t.style.outlineOffset="2px",()=>{t.style.outline=n,t.style.outlineOffset=r}}async function Mc(t,e,n={}){let r=n.charDelayMs??35;In(t,""),t.dispatchEvent(new Event("input",{bubbles:!0}));for(let o of e)In(t,t.value+o),t.dispatchEvent(new Event("input",{bubbles:!0})),r>0&&await Tr(r);t.dispatchEvent(new Event("change",{bubbles:!0}))}function Sm(t){if(typeof t.click=="function"){t.click();return}t.dispatchEvent(new MouseEvent("click",{bubbles:!0,cancelable:!0,composed:!0}))}async function Pc(t,e={}){let n=Tm(t,e.chat);await Tr(e.highlightMs??280),n(),Sm(t)}var xS=600,_S=100;function Yt(t,e={}){let n=Bi();return t.scrollIntoView({block:"center",inline:"nearest",behavior:n?"auto":"smooth"}),n?Promise.resolve():new Promise(r=>{let o,i=()=>{clearTimeout(o),document.removeEventListener("scroll",s,!0),document.removeEventListener("scrollend",i,!0),r()},s=()=>{document.removeEventListener("scroll",s,!0),clearTimeout(o),o=setTimeout(i,e.settleMs??xS)};o=setTimeout(i,_S),document.addEventListener("scroll",s,!0),document.addEventListener("scrollend",i,!0)})}var TS=1200,SS=1/3;async function km(t,e,n){(e.focus??n)&&t.focus({preventScroll:!0});let r=e.flashMs??TS;if(r<=0)return;if(e.scrim===!0||e.gradient===!0){let d=Nc(t,{scrim:e.scrim===!0,gradient:e.gradient===!0,...e.color===void 0?{}:{color:e.color},...e.ringPadding===void 0?{}:{padding:e.ringPadding},...e.chat===void 0?{}:{chat:e.chat}});await Tr(r),d();return}let o=t.style.outline,i=t.style.outlineOffset,s=t.style.transition,a=e.color??_r(t,e.chat);t.style.outline=`3px solid ${a}`,t.style.outlineOffset="2px";let l=Bi()?0:Math.round(r*SS);await Tr(r-l),l>0&&(t.style.transition=`outline-color ${l}ms ease-out`,t.style.outline="3px solid transparent",await Tr(l)),t.style.outline=o,t.style.outlineOffset=i,t.style.transition=s}function kS(t,e={}){return km(t,e,!1)}function Lc(t,e={}){return km(t,e,!0)}async function zc(t,e={}){let n=e.pressMs??140,r=t.style.transform,o=t.style.transition,i=t.style.boxShadow;t.style.transition="transform 80ms ease",t.style.transform="scale(0.96)",t.style.boxShadow=_m(t,e.chat),await Oc(n),t.style.transform=r,t.style.transition=o,t.style.boxShadow=i,Sm(t)}function AS(t,e){for(let n of Array.from(t.options))if(n.value===e||n.text===e)return n;return null}async function Dc(t,e,n={}){let r=AS(t,e);if(r===null)throw new Error(`no <option> matching "${e}"`);let o=Tm(t,n.chat);await Oc(n.highlightMs??220),In(t,r.value),Eo(t),o()}async function $c(t,e,n={}){let r=n.flashMs??200,o=t.style.boxShadow;t.style.boxShadow=_m(t,n.chat),await Oc(r),wo(t,e),Eo(t),t.style.boxShadow=o}var _o={SCROLL:"scroll",DRAG:"drag",CHAT:"chat"};function Uc(t,e){let n=[];return t.has(_o.SCROLL)&&n.push(RS(e)),t.has(_o.DRAG)&&n.push(IS(e)),n}function RS(t){return{name:"scroll_to",description:"Scroll a target into view. `target` is `top`, `bottom`, or a CSS selector / page-map element id. Read-only: it changes nothing on the page.",parameters:{type:"object",properties:{target:{type:"string"}},required:["target"],[Fe]:"Scroll into view"},handler:e=>{let n=String(e.target??"");if(n==="top"||n==="bottom"){let o=n==="top"?0:document.body.scrollHeight;return window.scrollTo({top:o,behavior:"smooth"}),{scrolled:!0,target:n}}let r=t(n);if(r===null)throw new Error(`no element matching "${n}"`);return Yt(r),{scrolled:!0,target:n}}}}function IS(t){return{name:"drag_and_drop",description:"Drag the `from` element onto the `to` element (CSS selectors or page-map element ids), firing the page's native drag-and-drop. Use for reordering sortable lists. The page decides what the drop commits.",parameters:{type:"object",properties:{from:{type:"string"},to:{type:"string"}},required:["from","to"],[Fe]:"Drag and drop"},handler:e=>{let n=String(e.from??""),r=String(e.to??""),o=t(n);if(o===null)throw new Error(`no element matching "${n}"`);let i=t(r);if(i===null)throw new Error(`no element matching "${r}"`);return CS(o,i),{dragged:!0,from:n,to:r}}}}function CS(t,e){let n=new DataTransfer;xo(t,"dragstart",n),xo(e,"dragenter",n),xo(e,"dragover",n),xo(e,"drop",n),xo(t,"dragend",n)}function xo(t,e,n){let r=new Event(e,{bubbles:!0,cancelable:!0});r.dataTransfer=n,t.dispatchEvent(r)}function Hc(t,e){return!e||t===null?[]:[{description:Oi,value:JSON.stringify(t())}]}function Fc(t){let e=[{name:`read_${t.name}`,description:`Read the "${t.name}" state.`,parameters:{type:"object",properties:{},required:[],[Fe]:`Read ${t.name}`},handler:()=>t.read()}],n=t.write;return n!==void 0&&e.push({name:`set_${t.name}`,description:`Update the "${t.name}" state.`,parameters:{...t.schema??{type:"object"},[uo]:!0,[Fe]:`Update ${t.name}`},handler:r=>n(r)}),e}var NS=new RegExp(`^\\[${jt}="\\d+"\\]$`);function Gc(t){let e=document.querySelector(t);return e===null&&NS.test(t)?Am(document,t):e}function Am(t,e){for(let n of t.querySelectorAll("*"))if(n.shadowRoot!==null&&!n.localName.startsWith(mo)){let r=n.shadowRoot.querySelector(e)??Am(n.shadowRoot,e);if(r!==null)return r}return null}var Rm=/:([A-Za-z_][A-Za-z0-9_]*)/g;function OS(t){return[...t.matchAll(Rm)].map(e=>e[0].slice(1))}function MS(t,e,n){let r={...n};return{path:e.replace(Rm,(i,s)=>{let a=n[s];if(a==null||String(a)==="")throw new Error(`route "${t}" requires path param "${s}"`);return delete r[s],encodeURIComponent(String(a))}),leftover:r}}function PS(t,e){let n=new URLSearchParams;for(let[o,i]of Object.entries(e))n.set(o,String(i));let r=n.toString();return r===""?t:`${t}?${r}`}function Bc(t,e){return[{name:"list_routes",description:"List the routes the app can navigate to. Each route's `pathParams` names the dynamic segments to pass as `params` to `navigate_to_route`.",parameters:{type:"object",properties:{},required:[],[Fe]:"List pages"},handler:()=>t().map(n=>({...n,pathParams:OS(n.path)}))},{name:"navigate_to_route",description:"Navigate to one of the app's routes by its id, filling any dynamic `:name` path segments (and extra query params) from `params`.",parameters:{type:"object",properties:{route_id:{type:"string"},params:{type:"object"}},required:["route_id"],[po]:!0,[Fe]:"Navigate"},handler:n=>{let r=n.route_id,o=t().find(c=>c.id===r);if(o===void 0)throw new Error(`unknown route "${String(r)}"`);let i=n.params??{},{path:s,leftover:a}=MS(o.id,o.path,i),l=PS(s,a),d=e();return d!==null?d(l):window.location.assign(l),{navigated:!0,path:l}}}]}var Ke=[];for(let t=0;t<256;++t)Ke.push((t+256).toString(16).slice(1));function Im(t,e=0){return(Ke[t[e+0]]+Ke[t[e+1]]+Ke[t[e+2]]+Ke[t[e+3]]+"-"+Ke[t[e+4]]+Ke[t[e+5]]+"-"+Ke[t[e+6]]+Ke[t[e+7]]+"-"+Ke[t[e+8]]+Ke[t[e+9]]+"-"+Ke[t[e+10]]+Ke[t[e+11]]+Ke[t[e+12]]+Ke[t[e+13]]+Ke[t[e+14]]+Ke[t[e+15]]).toLowerCase()}var Vc,LS=new Uint8Array(16);function jc(){if(!Vc){if(typeof crypto>"u"||!crypto.getRandomValues)throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");Vc=crypto.getRandomValues.bind(crypto)}return Vc(LS)}var zS=typeof crypto<"u"&&crypto.randomUUID&&crypto.randomUUID.bind(crypto),Zc={randomUUID:zS};function DS(t,e,n){if(Zc.randomUUID&&!e&&!t)return Zc.randomUUID();t=t||{};let r=t.random??t.rng?.()??jc();if(r.length<16)throw new Error("Random bytes length must be >= 16");if(r[6]=r[6]&15|64,r[8]=r[8]&63|128,e){if(n=n||0,n<0||n+16>e.length)throw new RangeError(`UUID byte range ${n}:${n+15} is out of buffer bounds`);for(let o=0;o<16;++o)e[n+o]=r[o];return e}return Im(r)}var sn=DS;var y=(function(t){return t.TEXT_MESSAGE_START="TEXT_MESSAGE_START",t.TEXT_MESSAGE_CONTENT="TEXT_MESSAGE_CONTENT",t.TEXT_MESSAGE_END="TEXT_MESSAGE_END",t.TEXT_MESSAGE_CHUNK="TEXT_MESSAGE_CHUNK",t.TOOL_CALL_START="TOOL_CALL_START",t.TOOL_CALL_ARGS="TOOL_CALL_ARGS",t.TOOL_CALL_END="TOOL_CALL_END",t.TOOL_CALL_CHUNK="TOOL_CALL_CHUNK",t.TOOL_CALL_RESULT="TOOL_CALL_RESULT",t.STATE_SNAPSHOT="STATE_SNAPSHOT",t.STATE_DELTA="STATE_DELTA",t.MESSAGES_SNAPSHOT="MESSAGES_SNAPSHOT",t.ACTIVITY_SNAPSHOT="ACTIVITY_SNAPSHOT",t.ACTIVITY_DELTA="ACTIVITY_DELTA",t.RAW="RAW",t.CUSTOM="CUSTOM",t.RUN_STARTED="RUN_STARTED",t.RUN_FINISHED="RUN_FINISHED",t.RUN_ERROR="RUN_ERROR",t.STEP_STARTED="STEP_STARTED",t.STEP_FINISHED="STEP_FINISHED",t.REASONING_START="REASONING_START",t.REASONING_MESSAGE_START="REASONING_MESSAGE_START",t.REASONING_MESSAGE_CONTENT="REASONING_MESSAGE_CONTENT",t.REASONING_MESSAGE_END="REASONING_MESSAGE_END",t.REASONING_MESSAGE_CHUNK="REASONING_MESSAGE_CHUNK",t.REASONING_END="REASONING_END",t.REASONING_ENCRYPTED_VALUE="REASONING_ENCRYPTED_VALUE",t.SUBAGENT_STARTED="SUBAGENT_STARTED",t.SUBAGENT_FINISHED="SUBAGENT_FINISHED",t.SUBAGENT_ERROR="SUBAGENT_ERROR",t})({}),Cn="1.0";var $S={TextMessageStartEvent:{optional:["timestamp","rawEvent","metadata","subagentRunId","role","name"],fields:{}},TextMessageContentEvent:{optional:["timestamp","rawEvent","metadata","subagentRunId"],fields:{}},TextMessageEndEvent:{optional:["timestamp","rawEvent","metadata","subagentRunId"],fields:{}},TextMessageChunkEvent:{optional:["timestamp","rawEvent","metadata","subagentRunId","messageId","role","delta","name"],fields:{}},ToolCallStartEvent:{optional:["timestamp","rawEvent","metadata","subagentRunId","parentMessageId"],fields:{}},ToolCallArgsEvent:{optional:["timestamp","rawEvent","metadata","subagentRunId"],fields:{}},ToolCallEndEvent:{optional:["timestamp","rawEvent","metadata","subagentRunId"],fields:{}},ToolCallChunkEvent:{optional:["timestamp","rawEvent","metadata","subagentRunId","toolCallId","toolCallName","parentMessageId","delta"],fields:{}},TextPart:{optional:["id","metadata"],fields:{}},DataSource:{optional:[],fields:{}},UrlSource:{optional:["mimeType"],fields:{}},FileSource:{optional:["provider","mimeType"],fields:{}},PartSource:{discriminator:"type",variants:{data:"DataSource",url:"UrlSource",file:"FileSource"}},ImagePart:{optional:["id","metadata"],fields:{source:"PartSource"}},AudioPart:{optional:["id","metadata"],fields:{source:"PartSource"}},VideoPart:{optional:["id","metadata"],fields:{source:"PartSource"}},DocumentPart:{optional:["id","metadata"],fields:{source:"PartSource"}},ContentPart:{discriminator:"type",variants:{text:"TextPart",image:"ImagePart",audio:"AudioPart",video:"VideoPart",document:"DocumentPart"}},ToolCallResultEvent:{optional:["timestamp","rawEvent","metadata","subagentRunId","role"],fields:{content:{array:"ContentPart"}}},StateSnapshotEvent:{optional:["timestamp","rawEvent","metadata","subagentRunId"],fields:{}},AddOperation:{optional:[],fields:{}},RemoveOperation:{optional:[],fields:{}},ReplaceOperation:{optional:[],fields:{}},MoveOperation:{optional:[],fields:{}},CopyOperation:{optional:[],fields:{}},TestOperation:{optional:[],fields:{}},JsonPatchOperation:{discriminator:"op",variants:{add:"AddOperation",remove:"RemoveOperation",replace:"ReplaceOperation",move:"MoveOperation",copy:"CopyOperation",test:"TestOperation"}},StateDeltaEvent:{optional:["timestamp","rawEvent","metadata","subagentRunId"],fields:{delta:{array:"JsonPatchOperation"}}},DeveloperMessage:{optional:["subagentRunId","name","encryptedValue","metadata"],fields:{}},SystemMessage:{optional:["subagentRunId","name","encryptedValue","metadata"],fields:{}},FunctionCall:{optional:[],fields:{}},ToolCall:{optional:["encryptedValue","metadata"],fields:{function:"FunctionCall"}},AssistantMessage:{optional:["subagentRunId","name","encryptedValue","metadata","content","toolCalls"],fields:{toolCalls:{array:"ToolCall"}}},UserMessage:{optional:["subagentRunId","name","encryptedValue","metadata"],fields:{content:{array:"ContentPart"}}},ToolMessage:{optional:["subagentRunId","error","encryptedValue","metadata"],fields:{content:{array:"ContentPart"}}},ActivityMessage:{optional:["subagentRunId","metadata"],fields:{}},ReasoningMessage:{optional:["subagentRunId","encryptedValue","metadata"],fields:{}},Message:{discriminator:"role",variants:{developer:"DeveloperMessage",system:"SystemMessage",assistant:"AssistantMessage",user:"UserMessage",tool:"ToolMessage",activity:"ActivityMessage",reasoning:"ReasoningMessage"}},MessagesSnapshotEvent:{optional:["timestamp","rawEvent","metadata"],fields:{messages:{array:"Message"}}},ActivitySnapshotEvent:{optional:["timestamp","rawEvent","metadata","subagentRunId","replace"],fields:{}},ActivityDeltaEvent:{optional:["timestamp","rawEvent","metadata","subagentRunId"],fields:{patch:{array:"JsonPatchOperation"}}},RawEvent:{optional:["timestamp","rawEvent","metadata","subagentRunId","source"],fields:{}},CustomEvent:{optional:["timestamp","rawEvent","metadata","subagentRunId"],fields:{}},Tool:{optional:["parameters","metadata"],fields:{}},Context:{optional:[],fields:{}},ResumeEntry:{optional:["payload","metadata"],fields:{}},RunAgentInput:{optional:["protocolVersion","parentRunId","state","tools","context","forwardedProps","resume"],fields:{messages:{array:"Message"},tools:{array:"Tool"},context:{array:"Context"},resume:{array:"ResumeEntry"}}},RunStartedEvent:{optional:["timestamp","rawEvent","metadata","protocolVersion","parentRunId","input"],fields:{input:"RunAgentInput"}},RunFinishedSuccessOutcome:{optional:["pendingToolCallIds"],fields:{}},Interrupt:{optional:["subagentRunId","message","toolCallId","responseSchema","expiresAt","metadata"],fields:{}},RunFinishedInterruptOutcome:{optional:[],fields:{interrupts:{array:"Interrupt"}}},RunFinishedCancelledOutcome:{optional:[],fields:{}},RunFinishedOutcome:{discriminator:"type",variants:{success:"RunFinishedSuccessOutcome",interrupt:"RunFinishedInterruptOutcome",cancelled:"RunFinishedCancelledOutcome"}},TokenUsage:{optional:["provider","model","inputTokens","outputTokens","totalTokens","reasoningTokens","cachedInputTokens","cacheWriteInputTokens"],fields:{}},RunFinishedEvent:{optional:["timestamp","rawEvent","metadata","result","outcome","usage"],fields:{outcome:"RunFinishedOutcome",usage:{array:"TokenUsage"}}},RunErrorEvent:{optional:["timestamp","rawEvent","metadata","code","usage"],fields:{usage:{array:"TokenUsage"}}},StepStartedEvent:{optional:["timestamp","rawEvent","metadata","subagentRunId"],fields:{}},StepFinishedEvent:{optional:["timestamp","rawEvent","metadata","subagentRunId"],fields:{}},ReasoningStartEvent:{optional:["timestamp","rawEvent","metadata","subagentRunId"],fields:{}},ReasoningMessageStartEvent:{optional:["timestamp","rawEvent","metadata","subagentRunId"],fields:{}},ReasoningMessageContentEvent:{optional:["timestamp","rawEvent","metadata","subagentRunId"],fields:{}},ReasoningMessageEndEvent:{optional:["timestamp","rawEvent","metadata","subagentRunId"],fields:{}},ReasoningMessageChunkEvent:{optional:["timestamp","rawEvent","metadata","subagentRunId","messageId","delta"],fields:{}},ReasoningEndEvent:{optional:["timestamp","rawEvent","metadata","subagentRunId"],fields:{}},ReasoningEncryptedValueEvent:{optional:["timestamp","rawEvent","metadata","subagentRunId"],fields:{}},SubagentStartedEvent:{optional:["timestamp","rawEvent","metadata","description","parentSubagentRunId","parentToolCallId","parentMessageId"],fields:{}},SubagentFinishedSuccessOutcome:{optional:[],fields:{}},SubagentFinishedSuspendedOutcome:{optional:["interruptIds"],fields:{}},SubagentFinishedOutcome:{discriminator:"type",variants:{success:"SubagentFinishedSuccessOutcome",suspended:"SubagentFinishedSuspendedOutcome"}},SubagentFinishedEvent:{optional:["timestamp","rawEvent","metadata","result","outcome"],fields:{outcome:"SubagentFinishedOutcome"}},SubagentErrorEvent:{optional:["timestamp","rawEvent","metadata","code"],fields:{}},Event:{discriminator:"type",variants:{TEXT_MESSAGE_START:"TextMessageStartEvent",TEXT_MESSAGE_CONTENT:"TextMessageContentEvent",TEXT_MESSAGE_END:"TextMessageEndEvent",TEXT_MESSAGE_CHUNK:"TextMessageChunkEvent",TOOL_CALL_START:"ToolCallStartEvent",TOOL_CALL_ARGS:"ToolCallArgsEvent",TOOL_CALL_END:"ToolCallEndEvent",TOOL_CALL_CHUNK:"ToolCallChunkEvent",TOOL_CALL_RESULT:"ToolCallResultEvent",STATE_SNAPSHOT:"StateSnapshotEvent",STATE_DELTA:"StateDeltaEvent",MESSAGES_SNAPSHOT:"MessagesSnapshotEvent",ACTIVITY_SNAPSHOT:"ActivitySnapshotEvent",ACTIVITY_DELTA:"ActivityDeltaEvent",RAW:"RawEvent",CUSTOM:"CustomEvent",RUN_STARTED:"RunStartedEvent",RUN_FINISHED:"RunFinishedEvent",RUN_ERROR:"RunErrorEvent",STEP_STARTED:"StepStartedEvent",STEP_FINISHED:"StepFinishedEvent",REASONING_START:"ReasoningStartEvent",REASONING_MESSAGE_START:"ReasoningMessageStartEvent",REASONING_MESSAGE_CONTENT:"ReasoningMessageContentEvent",REASONING_MESSAGE_END:"ReasoningMessageEndEvent",REASONING_MESSAGE_CHUNK:"ReasoningMessageChunkEvent",REASONING_END:"ReasoningEndEvent",REASONING_ENCRYPTED_VALUE:"ReasoningEncryptedValueEvent",SUBAGENT_STARTED:"SubagentStartedEvent",SUBAGENT_FINISHED:"SubagentFinishedEvent",SUBAGENT_ERROR:"SubagentErrorEvent"}},SubagentInfo:{optional:["description"],fields:{}},IdentityCapabilities:{optional:["name","type","description","version","provider","documentationUrl","metadata"],fields:{}},TransportCapabilities:{optional:["streaming","websocket","httpBinary","pushNotifications","resumable"],fields:{}},ToolsCapabilities:{optional:["supported","items","parallelCalls","clientProvided"],fields:{items:{array:"Tool"}}},OutputCapabilities:{optional:["structuredOutput","supportedMimeTypes"],fields:{}},StateCapabilities:{optional:["snapshots","deltas","memory","persistentState"],fields:{}},MultiAgentCapabilities:{optional:["supported","delegation","handoffs","subagents"],fields:{subagents:{array:"SubagentInfo"}}},ReasoningCapabilities:{optional:["supported","streaming","encrypted"],fields:{}},MultimodalInputCapabilities:{optional:["image","audio","video","pdf","file"],fields:{}},MultimodalOutputCapabilities:{optional:["image","audio"],fields:{}},MultimodalCapabilities:{optional:["input","output"],fields:{input:"MultimodalInputCapabilities",output:"MultimodalOutputCapabilities"}},ExecutionCapabilities:{optional:["codeExecution","sandboxed","maxIterations","maxExecutionTime"],fields:{}},HumanInTheLoopCapabilities:{optional:["supported","approvals","interventions","feedback","interrupts","approveWithEdits"],fields:{}},AgentCapabilities:{optional:["identity","transport","tools","output","state","multiAgent","reasoning","multimodal","execution","humanInTheLoop","custom"],fields:{identity:"IdentityCapabilities",transport:"TransportCapabilities",tools:"ToolsCapabilities",output:"OutputCapabilities",state:"StateCapabilities",multiAgent:"MultiAgentCapabilities",reasoning:"ReasoningCapabilities",multimodal:"MultimodalCapabilities",execution:"ExecutionCapabilities",humanInTheLoop:"HumanInTheLoopCapabilities"}}};function To(t,e){if(typeof e=="string")return To(t,$S[e]);if("array"in e){if(!Array.isArray(t))return t;let o=t.map(i=>To(i,e.array));return o.every((i,s)=>i===t[s])?t:o}if(typeof t!="object"||t===null||Array.isArray(t))return t;let n=t;if("discriminator"in e){let o=n[e.discriminator];return typeof o=="string"&&Object.prototype.hasOwnProperty.call(e.variants,o)?To(t,e.variants[o]):t}let r=n;for(let o of e.optional)Object.prototype.hasOwnProperty.call(n,o)&&n[o]===null&&(r===n&&(r={...n}),delete r[o]);for(let[o,i]of Object.entries(e.fields)){if(!Object.prototype.hasOwnProperty.call(r,o))continue;let s=To(r[o],i);s!==r[o]&&(r===n&&(r={...n}),r[o]=s)}return r}function Wc(t,e){return To(t,e)}var K=class extends Error{constructor(t){super(t)}},qc=class extends K{constructor(){super("Connect not implemented. This method is not supported by the current agent.")}};function Cm(t,e){return e===void 0?t:t===void 0?{...e}:{...t,...e}}function Sr(t){return t===void 0?"":typeof t=="string"?t:t.filter(e=>e.type==="text").map(e=>e.text).join("")}function Nm(t){return Array.isArray(t)&&t.some(e=>e.type!=="text")}var Yc={};Zd(Yc,{JsonPatchError:()=>Me,_areEquals:()=>Ao,applyOperation:()=>Nn,applyPatch:()=>Ki,applyReducer:()=>BS,deepClone:()=>FS,getValueByPointer:()=>qi,validate:()=>Mm,validator:()=>Yi});var US=(function(){var t=function(e,n){return t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(r,o){r.__proto__=o}||function(r,o){for(var i in o)o.hasOwnProperty(i)&&(r[i]=o[i])},t(e,n)};return function(e,n){t(e,n);function r(){this.constructor=e}e.prototype=n===null?Object.create(n):(r.prototype=n.prototype,new r)}})(),HS=Object.prototype.hasOwnProperty;function ji(t,e){return HS.call(t,e)}function Zi(t){if(Array.isArray(t)){for(var e=new Array(t.length),n=0;n<e.length;n++)e[n]=""+n;return e}if(Object.keys)return Object.keys(t);var r=[];for(var o in t)ji(t,o)&&r.push(o);return r}function Xe(t){switch(typeof t){case"object":return JSON.parse(JSON.stringify(t));case"undefined":return null;default:return t}}function Wi(t){for(var e=0,n=t.length,r;e<n;){if(r=t.charCodeAt(e),r>=48&&r<=57){e++;continue}return!1}return!0}function Ot(t){return t.indexOf("/")===-1&&t.indexOf("~")===-1?t:t.replace(/~/g,"~0").replace(/\//g,"~1")}function So(t){return t.replace(/~1/g,"/").replace(/~0/g,"~")}function Vi(t){if(t===void 0)return!0;if(t){if(Array.isArray(t)){for(var e=0,n=t.length;e<n;e++)if(Vi(t[e]))return!0}else if(typeof t=="object"){for(var r=Zi(t),o=r.length,i=0;i<o;i++)if(Vi(t[r[i]]))return!0}}return!1}function Om(t,e){var n=[t];for(var r in e){var o=typeof e[r]=="object"?JSON.stringify(e[r],null,2):e[r];typeof o<"u"&&n.push(r+": "+o)}return n.join(`
`)}var ko=(function(t){US(e,t);function e(n,r,o,i,s){var a=this.constructor,l=t.call(this,Om(n,{name:r,index:o,operation:i,tree:s}))||this;return l.name=r,l.index=o,l.operation=i,l.tree=s,Object.setPrototypeOf(l,a.prototype),l.message=Om(n,{name:r,index:o,operation:i,tree:s}),l}return e})(Error);var Me=ko,FS=Xe,kr={add:function(t,e,n){return t[e]=this.value,{newDocument:n}},remove:function(t,e,n){var r=t[e];return delete t[e],{newDocument:n,removed:r}},replace:function(t,e,n){var r=t[e];return t[e]=this.value,{newDocument:n,removed:r}},move:function(t,e,n){var r=qi(n,this.path);r&&(r=Xe(r));var o=Nn(n,{op:"remove",path:this.from}).removed;return Nn(n,{op:"add",path:this.path,value:o}),{newDocument:n,removed:r}},copy:function(t,e,n){var r=qi(n,this.from);return Nn(n,{op:"add",path:this.path,value:Xe(r)}),{newDocument:n}},test:function(t,e,n){return{newDocument:n,test:Ao(t[e],this.value)}},_get:function(t,e,n){return this.value=t[e],{newDocument:n}}},GS={add:function(t,e,n){return Wi(e)?t.splice(e,0,this.value):t[e]=this.value,{newDocument:n,index:e}},remove:function(t,e,n){var r=t.splice(e,1);return{newDocument:n,removed:r[0]}},replace:function(t,e,n){var r=t[e];return t[e]=this.value,{newDocument:n,removed:r}},move:kr.move,copy:kr.copy,test:kr.test,_get:kr._get};function qi(t,e){if(e=="")return t;var n={op:"_get",path:e};return Nn(t,n),n.value}function Nn(t,e,n,r,o,i){if(n===void 0&&(n=!1),r===void 0&&(r=!0),o===void 0&&(o=!0),i===void 0&&(i=0),n&&(typeof n=="function"?n(e,0,t,e.path):Yi(e,0)),e.path===""){var s={newDocument:t};if(e.op==="add")return s.newDocument=e.value,s;if(e.op==="replace")return s.newDocument=e.value,s.removed=t,s;if(e.op==="move"||e.op==="copy")return s.newDocument=qi(t,e.from),e.op==="move"&&(s.removed=t),s;if(e.op==="test"){if(s.test=Ao(t,e.value),s.test===!1)throw new Me("Test operation failed","TEST_OPERATION_FAILED",i,e,t);return s.newDocument=t,s}else{if(e.op==="remove")return s.removed=t,s.newDocument=null,s;if(e.op==="_get")return e.value=t,s;if(n)throw new Me("Operation `op` property is not one of operations defined in RFC-6902","OPERATION_OP_INVALID",i,e,t);return s}}else{r||(t=Xe(t));var a=e.path||"",l=a.split("/"),d=t,c=1,h=l.length,p=void 0,m=void 0,u=void 0;for(typeof n=="function"?u=n:u=Yi;;){if(m=l[c],m&&m.indexOf("~")!=-1&&(m=So(m)),o&&(m=="__proto__"||m=="prototype"&&c>0&&l[c-1]=="constructor"))throw new TypeError("JSON-Patch: modifying `__proto__` or `constructor/prototype` prop is banned for security reasons, if this was on purpose, please set `banPrototypeModifications` flag false and pass it to this function. More info in fast-json-patch README");if(n&&p===void 0&&(d[m]===void 0?p=l.slice(0,c).join("/"):c==h-1&&(p=e.path),p!==void 0&&u(e,0,t,p)),c++,Array.isArray(d)){if(m==="-")m=d.length;else{if(n&&!Wi(m))throw new Me("Expected an unsigned base-10 integer value, making the new referenced value the array element with the zero-based index","OPERATION_PATH_ILLEGAL_ARRAY_INDEX",i,e,t);Wi(m)&&(m=~~m)}if(c>=h){if(n&&e.op==="add"&&m>d.length)throw new Me("The specified index MUST NOT be greater than the number of elements in the array","OPERATION_VALUE_OUT_OF_BOUNDS",i,e,t);var s=GS[e.op].call(e,d,m,t);if(s.test===!1)throw new Me("Test operation failed","TEST_OPERATION_FAILED",i,e,t);return s}}else if(c>=h){var s=kr[e.op].call(e,d,m,t);if(s.test===!1)throw new Me("Test operation failed","TEST_OPERATION_FAILED",i,e,t);return s}if(d=d[m],n&&c<h&&(!d||typeof d!="object"))throw new Me("Cannot perform operation at the desired path","OPERATION_PATH_UNRESOLVABLE",i,e,t)}}}function Ki(t,e,n,r,o){if(r===void 0&&(r=!0),o===void 0&&(o=!0),n&&!Array.isArray(e))throw new Me("Patch sequence must be an array","SEQUENCE_NOT_AN_ARRAY");r||(t=Xe(t));for(var i=new Array(e.length),s=0,a=e.length;s<a;s++)i[s]=Nn(t,e[s],n,!0,o,s),t=i[s].newDocument;return i.newDocument=t,i}function BS(t,e,n){var r=Nn(t,e);if(r.test===!1)throw new Me("Test operation failed","TEST_OPERATION_FAILED",n,e,t);return r.newDocument}function Yi(t,e,n,r){if(typeof t!="object"||t===null||Array.isArray(t))throw new Me("Operation is not an object","OPERATION_NOT_AN_OBJECT",e,t,n);if(kr[t.op]){if(typeof t.path!="string")throw new Me("Operation `path` property is not a string","OPERATION_PATH_INVALID",e,t,n);if(t.path.indexOf("/")!==0&&t.path.length>0)throw new Me('Operation `path` property must start with "/"',"OPERATION_PATH_INVALID",e,t,n);if((t.op==="move"||t.op==="copy")&&typeof t.from!="string")throw new Me("Operation `from` property is not present (applicable in `move` and `copy` operations)","OPERATION_FROM_REQUIRED",e,t,n);if((t.op==="add"||t.op==="replace"||t.op==="test")&&t.value===void 0)throw new Me("Operation `value` property is not present (applicable in `add`, `replace` and `test` operations)","OPERATION_VALUE_REQUIRED",e,t,n);if((t.op==="add"||t.op==="replace"||t.op==="test")&&Vi(t.value))throw new Me("Operation `value` property is not present (applicable in `add`, `replace` and `test` operations)","OPERATION_VALUE_CANNOT_CONTAIN_UNDEFINED",e,t,n);if(n){if(t.op=="add"){var o=t.path.split("/").length,i=r.split("/").length;if(o!==i+1&&o!==i)throw new Me("Cannot perform an `add` operation at the desired path","OPERATION_PATH_CANNOT_ADD",e,t,n)}else if(t.op==="replace"||t.op==="remove"||t.op==="_get"){if(t.path!==r)throw new Me("Cannot perform the operation at a path that does not exist","OPERATION_PATH_UNRESOLVABLE",e,t,n)}else if(t.op==="move"||t.op==="copy"){var s={op:"_get",path:t.from,value:void 0},a=Mm([s],n);if(a&&a.name==="OPERATION_PATH_UNRESOLVABLE")throw new Me("Cannot perform the operation from a path that does not exist","OPERATION_FROM_UNRESOLVABLE",e,t,n)}}}else throw new Me("Operation `op` property is not one of operations defined in RFC-6902","OPERATION_OP_INVALID",e,t,n)}function Mm(t,e,n){try{if(!Array.isArray(t))throw new Me("Patch sequence must be an array","SEQUENCE_NOT_AN_ARRAY");if(e)Ki(Xe(e),Xe(t),n||!0);else{n=n||Yi;for(var r=0;r<t.length;r++)n(t[r],r,e,void 0)}}catch(o){if(o instanceof Me)return o;throw o}}function Ao(t,e){if(t===e)return!0;if(t&&e&&typeof t=="object"&&typeof e=="object"){var n=Array.isArray(t),r=Array.isArray(e),o,i,s;if(n&&r){if(i=t.length,i!=e.length)return!1;for(o=i;o--!==0;)if(!Ao(t[o],e[o]))return!1;return!0}if(n!=r)return!1;var a=Object.keys(t);if(i=a.length,i!==Object.keys(e).length)return!1;for(o=i;o--!==0;)if(!e.hasOwnProperty(a[o]))return!1;for(o=i;o--!==0;)if(s=a[o],!Ao(t[s],e[s]))return!1;return!0}return t!==t&&e!==e}var Qc={};Zd(Qc,{compare:()=>XS,generate:()=>Kc,observe:()=>KS,unobserve:()=>YS});var Xc=new WeakMap,VS=(function(){function t(e){this.observers=new Map,this.obj=e}return t})(),jS=(function(){function t(e,n){this.callback=e,this.observer=n}return t})();function ZS(t){return Xc.get(t)}function WS(t,e){return t.observers.get(e)}function qS(t,e){t.observers.delete(e.callback)}function YS(t,e){e.unobserve()}function KS(t,e){var n=[],r,o=ZS(t);if(!o)o=new VS(t),Xc.set(t,o);else{var i=WS(o,e);r=i&&i.observer}if(r)return r;if(r={},o.value=Xe(t),e){r.callback=e,r.next=null;var s=function(){Kc(r)},a=function(){clearTimeout(r.next),r.next=setTimeout(s)};typeof window<"u"&&(window.addEventListener("mouseup",a),window.addEventListener("keyup",a),window.addEventListener("mousedown",a),window.addEventListener("keydown",a),window.addEventListener("change",a))}return r.patches=n,r.object=t,r.unobserve=function(){Kc(r),clearTimeout(r.next),qS(o,r),typeof window<"u"&&(window.removeEventListener("mouseup",a),window.removeEventListener("keyup",a),window.removeEventListener("mousedown",a),window.removeEventListener("keydown",a),window.removeEventListener("change",a))},o.observers.set(e,new jS(e,r)),r}function Kc(t,e){e===void 0&&(e=!1);var n=Xc.get(t.object);Jc(n.value,t.object,t.patches,"",e),t.patches.length&&Ki(n.value,t.patches);var r=t.patches;return r.length>0&&(t.patches=[],t.callback&&t.callback(r)),r}function Jc(t,e,n,r,o){if(e!==t){typeof e.toJSON=="function"&&(e=e.toJSON());for(var i=Zi(e),s=Zi(t),a=!1,l=!1,d=s.length-1;d>=0;d--){var c=s[d],h=t[c];if(ji(e,c)&&!(e[c]===void 0&&h!==void 0&&Array.isArray(e)===!1)){var p=e[c];typeof h=="object"&&h!=null&&typeof p=="object"&&p!=null&&Array.isArray(h)===Array.isArray(p)?Jc(h,p,n,r+"/"+Ot(c),o):h!==p&&(a=!0,o&&n.push({op:"test",path:r+"/"+Ot(c),value:Xe(h)}),n.push({op:"replace",path:r+"/"+Ot(c),value:Xe(p)}))}else Array.isArray(t)===Array.isArray(e)?(o&&n.push({op:"test",path:r+"/"+Ot(c),value:Xe(h)}),n.push({op:"remove",path:r+"/"+Ot(c)}),l=!0):(o&&n.push({op:"test",path:r,value:t}),n.push({op:"replace",path:r,value:e}),a=!0)}if(!(!l&&i.length==s.length))for(var d=0;d<i.length;d++){var c=i[d];!ji(t,c)&&e[c]!==void 0&&n.push({op:"add",path:r+"/"+Ot(c),value:Xe(e[c])})}}}function XS(t,e,n){n===void 0&&(n=!1);var r=[];return Jc(t,e,r,"",n),r}var Xi=Object.assign({},Yc,Qc,{JsonPatchError:ko,deepClone:Xe,escapePathComponent:Ot,unescapePathComponent:So});var eu=function(t,e){return eu=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(n,r){n.__proto__=r}||function(n,r){for(var o in r)Object.prototype.hasOwnProperty.call(r,o)&&(n[o]=r[o])},eu(t,e)};function Mt(t,e){if(typeof e!="function"&&e!==null)throw new TypeError("Class extends value "+String(e)+" is not a constructor or null");eu(t,e);function n(){this.constructor=t}t.prototype=e===null?Object.create(e):(n.prototype=e.prototype,new n)}function Pm(t,e,n,r){function o(i){return i instanceof n?i:new n(function(s){s(i)})}return new(n||(n=Promise))(function(i,s){function a(c){try{d(r.next(c))}catch(h){s(h)}}function l(c){try{d(r.throw(c))}catch(h){s(h)}}function d(c){c.done?i(c.value):o(c.value).then(a,l)}d((r=r.apply(t,e||[])).next())})}function Ji(t,e){var n={label:0,sent:function(){if(i[0]&1)throw i[1];return i[1]},trys:[],ops:[]},r,o,i,s=Object.create((typeof Iterator=="function"?Iterator:Object).prototype);return s.next=a(0),s.throw=a(1),s.return=a(2),typeof Symbol=="function"&&(s[Symbol.iterator]=function(){return this}),s;function a(d){return function(c){return l([d,c])}}function l(d){if(r)throw new TypeError("Generator is already executing.");for(;s&&(s=0,d[0]&&(n=0)),n;)try{if(r=1,o&&(i=d[0]&2?o.return:d[0]?o.throw||((i=o.return)&&i.call(o),0):o.next)&&!(i=i.call(o,d[1])).done)return i;switch(o=0,i&&(d=[d[0]&2,i.value]),d[0]){case 0:case 1:i=d;break;case 4:return n.label++,{value:d[1],done:!1};case 5:n.label++,o=d[1],d=[0];continue;case 7:d=n.ops.pop(),n.trys.pop();continue;default:if(i=n.trys,!(i=i.length>0&&i[i.length-1])&&(d[0]===6||d[0]===2)){n=0;continue}if(d[0]===3&&(!i||d[1]>i[0]&&d[1]<i[3])){n.label=d[1];break}if(d[0]===6&&n.label<i[1]){n.label=i[1],i=d;break}if(i&&n.label<i[2]){n.label=i[2],n.ops.push(d);break}i[2]&&n.ops.pop(),n.trys.pop();continue}d=e.call(t,n)}catch(c){d=[6,c],o=0}finally{r=i=0}if(d[0]&5)throw d[1];return{value:d[0]?d[1]:void 0,done:!0}}}function Kt(t){var e=typeof Symbol=="function"&&Symbol.iterator,n=e&&t[e],r=0;if(n)return n.call(t);if(t&&typeof t.length=="number")return{next:function(){return t&&r>=t.length&&(t=void 0),{value:t&&t[r++],done:!t}}};throw new TypeError(e?"Object is not iterable.":"Symbol.iterator is not defined.")}function Pt(t,e){var n=typeof Symbol=="function"&&t[Symbol.iterator];if(!n)return t;var r=n.call(t),o,i=[],s;try{for(;(e===void 0||e-- >0)&&!(o=r.next()).done;)i.push(o.value)}catch(a){s={error:a}}finally{try{o&&!o.done&&(n=r.return)&&n.call(r)}finally{if(s)throw s.error}}return i}function Lt(t,e,n){if(n||arguments.length===2)for(var r=0,o=e.length,i;r<o;r++)(i||!(r in e))&&(i||(i=Array.prototype.slice.call(e,0,r)),i[r]=e[r]);return t.concat(i||Array.prototype.slice.call(e))}function On(t){return this instanceof On?(this.v=t,this):new On(t)}function Lm(t,e,n){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var r=n.apply(t,e||[]),o,i=[];return o=Object.create((typeof AsyncIterator=="function"?AsyncIterator:Object).prototype),a("next"),a("throw"),a("return",s),o[Symbol.asyncIterator]=function(){return this},o;function s(m){return function(u){return Promise.resolve(u).then(m,h)}}function a(m,u){r[m]&&(o[m]=function(v){return new Promise(function(E,x){i.push([m,v,E,x])>1||l(m,v)})},u&&(o[m]=u(o[m])))}function l(m,u){try{d(r[m](u))}catch(v){p(i[0][3],v)}}function d(m){m.value instanceof On?Promise.resolve(m.value.v).then(c,h):p(i[0][2],m)}function c(m){l("next",m)}function h(m){l("throw",m)}function p(m,u){m(u),i.shift(),i.length&&l(i[0][0],i[0][1])}}function zm(t){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var e=t[Symbol.asyncIterator],n;return e?e.call(t):(t=typeof Kt=="function"?Kt(t):t[Symbol.iterator](),n={},r("next"),r("throw"),r("return"),n[Symbol.asyncIterator]=function(){return this},n);function r(i){n[i]=t[i]&&function(s){return new Promise(function(a,l){s=t[i](s),o(a,l,s.done,s.value)})}}function o(i,s,a,l){Promise.resolve(l).then(function(d){i({value:d,done:a})},s)}}function re(t){return typeof t=="function"}function Ar(t){var e=function(r){Error.call(r),r.stack=new Error().stack},n=t(e);return n.prototype=Object.create(Error.prototype),n.prototype.constructor=n,n}var Qi=Ar(function(t){return function(n){t(this),this.message=n?n.length+` errors occurred during unsubscription:
`+n.map(function(r,o){return o+1+") "+r.toString()}).join(`
  `):"",this.name="UnsubscriptionError",this.errors=n}});function Ro(t,e){if(t){var n=t.indexOf(e);0<=n&&t.splice(n,1)}}var Rr=(function(){function t(e){this.initialTeardown=e,this.closed=!1,this._parentage=null,this._finalizers=null}return t.prototype.unsubscribe=function(){var e,n,r,o,i;if(!this.closed){this.closed=!0;var s=this._parentage;if(s)if(this._parentage=null,Array.isArray(s))try{for(var a=Kt(s),l=a.next();!l.done;l=a.next()){var d=l.value;d.remove(this)}}catch(v){e={error:v}}finally{try{l&&!l.done&&(n=a.return)&&n.call(a)}finally{if(e)throw e.error}}else s.remove(this);var c=this.initialTeardown;if(re(c))try{c()}catch(v){i=v instanceof Qi?v.errors:[v]}var h=this._finalizers;if(h){this._finalizers=null;try{for(var p=Kt(h),m=p.next();!m.done;m=p.next()){var u=m.value;try{Dm(u)}catch(v){i=i??[],v instanceof Qi?i=Lt(Lt([],Pt(i)),Pt(v.errors)):i.push(v)}}}catch(v){r={error:v}}finally{try{m&&!m.done&&(o=p.return)&&o.call(p)}finally{if(r)throw r.error}}}if(i)throw new Qi(i)}},t.prototype.add=function(e){var n;if(e&&e!==this)if(this.closed)Dm(e);else{if(e instanceof t){if(e.closed||e._hasParent(this))return;e._addParent(this)}(this._finalizers=(n=this._finalizers)!==null&&n!==void 0?n:[]).push(e)}},t.prototype._hasParent=function(e){var n=this._parentage;return n===e||Array.isArray(n)&&n.includes(e)},t.prototype._addParent=function(e){var n=this._parentage;this._parentage=Array.isArray(n)?(n.push(e),n):n?[n,e]:e},t.prototype._removeParent=function(e){var n=this._parentage;n===e?this._parentage=null:Array.isArray(n)&&Ro(n,e)},t.prototype.remove=function(e){var n=this._finalizers;n&&Ro(n,e),e instanceof t&&e._removeParent(this)},t.EMPTY=(function(){var e=new t;return e.closed=!0,e})(),t})();var tu=Rr.EMPTY;function es(t){return t instanceof Rr||t&&"closed"in t&&re(t.remove)&&re(t.add)&&re(t.unsubscribe)}function Dm(t){re(t)?t():t.unsubscribe()}var wt={onUnhandledError:null,onStoppedNotification:null,Promise:void 0,useDeprecatedSynchronousErrorHandling:!1,useDeprecatedNextContext:!1};var Ir={setTimeout:function(t,e){for(var n=[],r=2;r<arguments.length;r++)n[r-2]=arguments[r];var o=Ir.delegate;return o?.setTimeout?o.setTimeout.apply(o,Lt([t,e],Pt(n))):setTimeout.apply(void 0,Lt([t,e],Pt(n)))},clearTimeout:function(t){var e=Ir.delegate;return(e?.clearTimeout||clearTimeout)(t)},delegate:void 0};function ts(t){Ir.setTimeout(function(){var e=wt.onUnhandledError;if(e)e(t);else throw t})}function Io(){}var $m=(function(){return nu("C",void 0,void 0)})();function Um(t){return nu("E",void 0,t)}function Hm(t){return nu("N",t,void 0)}function nu(t,e,n){return{kind:t,value:e,error:n}}var Mn=null;function Cr(t){if(wt.useDeprecatedSynchronousErrorHandling){var e=!Mn;if(e&&(Mn={errorThrown:!1,error:null}),t(),e){var n=Mn,r=n.errorThrown,o=n.error;if(Mn=null,r)throw o}}else t()}function Fm(t){wt.useDeprecatedSynchronousErrorHandling&&Mn&&(Mn.errorThrown=!0,Mn.error=t)}var Co=(function(t){Mt(e,t);function e(n){var r=t.call(this)||this;return r.isStopped=!1,n?(r.destination=n,es(n)&&n.add(r)):r.destination=t0,r}return e.create=function(n,r,o){return new rs(n,r,o)},e.prototype.next=function(n){this.isStopped?ou(Hm(n),this):this._next(n)},e.prototype.error=function(n){this.isStopped?ou(Um(n),this):(this.isStopped=!0,this._error(n))},e.prototype.complete=function(){this.isStopped?ou($m,this):(this.isStopped=!0,this._complete())},e.prototype.unsubscribe=function(){this.closed||(this.isStopped=!0,t.prototype.unsubscribe.call(this),this.destination=null)},e.prototype._next=function(n){this.destination.next(n)},e.prototype._error=function(n){try{this.destination.error(n)}finally{this.unsubscribe()}},e.prototype._complete=function(){try{this.destination.complete()}finally{this.unsubscribe()}},e})(Rr);var JS=Function.prototype.bind;function ru(t,e){return JS.call(t,e)}var QS=(function(){function t(e){this.partialObserver=e}return t.prototype.next=function(e){var n=this.partialObserver;if(n.next)try{n.next(e)}catch(r){ns(r)}},t.prototype.error=function(e){var n=this.partialObserver;if(n.error)try{n.error(e)}catch(r){ns(r)}else ns(e)},t.prototype.complete=function(){var e=this.partialObserver;if(e.complete)try{e.complete()}catch(n){ns(n)}},t})(),rs=(function(t){Mt(e,t);function e(n,r,o){var i=t.call(this)||this,s;if(re(n)||!n)s={next:n??void 0,error:r??void 0,complete:o??void 0};else{var a;i&&wt.useDeprecatedNextContext?(a=Object.create(n),a.unsubscribe=function(){return i.unsubscribe()},s={next:n.next&&ru(n.next,a),error:n.error&&ru(n.error,a),complete:n.complete&&ru(n.complete,a)}):s=n}return i.destination=new QS(s),i}return e})(Co);function ns(t){wt.useDeprecatedSynchronousErrorHandling?Fm(t):ts(t)}function e0(t){throw t}function ou(t,e){var n=wt.onStoppedNotification;n&&Ir.setTimeout(function(){return n(t,e)})}var t0={closed:!0,next:Io,error:e0,complete:Io};var Nr=(function(){return typeof Symbol=="function"&&Symbol.observable||"@@observable"})();function Or(t){return t}function os(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];return iu(t)}function iu(t){return t.length===0?Or:t.length===1?t[0]:function(n){return t.reduce(function(r,o){return o(r)},n)}}var _e=(function(){function t(e){e&&(this._subscribe=e)}return t.prototype.lift=function(e){var n=new t;return n.source=this,n.operator=e,n},t.prototype.subscribe=function(e,n,r){var o=this,i=r0(e)?e:new rs(e,n,r);return Cr(function(){var s=o,a=s.operator,l=s.source;i.add(a?a.call(i,l):l?o._subscribe(i):o._trySubscribe(i))}),i},t.prototype._trySubscribe=function(e){try{return this._subscribe(e)}catch(n){e.error(n)}},t.prototype.forEach=function(e,n){var r=this;return n=Gm(n),new n(function(o,i){var s=new rs({next:function(a){try{e(a)}catch(l){i(l),s.unsubscribe()}},error:i,complete:o});r.subscribe(s)})},t.prototype._subscribe=function(e){var n;return(n=this.source)===null||n===void 0?void 0:n.subscribe(e)},t.prototype[Nr]=function(){return this},t.prototype.pipe=function(){for(var e=[],n=0;n<arguments.length;n++)e[n]=arguments[n];return iu(e)(this)},t.prototype.toPromise=function(e){var n=this;return e=Gm(e),new e(function(r,o){var i;n.subscribe(function(s){return i=s},function(s){return o(s)},function(){return r(i)})})},t.create=function(e){return new t(e)},t})();function Gm(t){var e;return(e=t??wt.Promise)!==null&&e!==void 0?e:Promise}function n0(t){return t&&re(t.next)&&re(t.error)&&re(t.complete)}function r0(t){return t&&t instanceof Co||n0(t)&&es(t)}function o0(t){return re(t?.lift)}function ke(t){return function(e){if(o0(e))return e.lift(function(n){try{return t(n,this)}catch(r){this.error(r)}});throw new TypeError("Unable to lift unknown Observable type")}}function De(t,e,n,r,o){return new i0(t,e,n,r,o)}var i0=(function(t){Mt(e,t);function e(n,r,o,i,s,a){var l=t.call(this,n)||this;return l.onFinalize=s,l.shouldUnsubscribe=a,l._next=r?function(d){try{r(d)}catch(c){n.error(c)}}:t.prototype._next,l._error=i?function(d){try{i(d)}catch(c){n.error(c)}finally{this.unsubscribe()}}:t.prototype._error,l._complete=o?function(){try{o()}catch(d){n.error(d)}finally{this.unsubscribe()}}:t.prototype._complete,l}return e.prototype.unsubscribe=function(){var n;if(!this.shouldUnsubscribe||this.shouldUnsubscribe()){var r=this.closed;t.prototype.unsubscribe.call(this),!r&&((n=this.onFinalize)===null||n===void 0||n.call(this))}},e})(Co);var Bm=Ar(function(t){return function(){t(this),this.name="ObjectUnsubscribedError",this.message="object unsubscribed"}});var zt=(function(t){Mt(e,t);function e(){var n=t.call(this)||this;return n.closed=!1,n.currentObservers=null,n.observers=[],n.isStopped=!1,n.hasError=!1,n.thrownError=null,n}return e.prototype.lift=function(n){var r=new Vm(this,this);return r.operator=n,r},e.prototype._throwIfClosed=function(){if(this.closed)throw new Bm},e.prototype.next=function(n){var r=this;Cr(function(){var o,i;if(r._throwIfClosed(),!r.isStopped){r.currentObservers||(r.currentObservers=Array.from(r.observers));try{for(var s=Kt(r.currentObservers),a=s.next();!a.done;a=s.next()){var l=a.value;l.next(n)}}catch(d){o={error:d}}finally{try{a&&!a.done&&(i=s.return)&&i.call(s)}finally{if(o)throw o.error}}}})},e.prototype.error=function(n){var r=this;Cr(function(){if(r._throwIfClosed(),!r.isStopped){r.hasError=r.isStopped=!0,r.thrownError=n;for(var o=r.observers;o.length;)o.shift().error(n)}})},e.prototype.complete=function(){var n=this;Cr(function(){if(n._throwIfClosed(),!n.isStopped){n.isStopped=!0;for(var r=n.observers;r.length;)r.shift().complete()}})},e.prototype.unsubscribe=function(){this.isStopped=this.closed=!0,this.observers=this.currentObservers=null},Object.defineProperty(e.prototype,"observed",{get:function(){var n;return((n=this.observers)===null||n===void 0?void 0:n.length)>0},enumerable:!1,configurable:!0}),e.prototype._trySubscribe=function(n){return this._throwIfClosed(),t.prototype._trySubscribe.call(this,n)},e.prototype._subscribe=function(n){return this._throwIfClosed(),this._checkFinalizedStatuses(n),this._innerSubscribe(n)},e.prototype._innerSubscribe=function(n){var r=this,o=this,i=o.hasError,s=o.isStopped,a=o.observers;return i||s?tu:(this.currentObservers=null,a.push(n),new Rr(function(){r.currentObservers=null,Ro(a,n)}))},e.prototype._checkFinalizedStatuses=function(n){var r=this,o=r.hasError,i=r.thrownError,s=r.isStopped;o?n.error(i):s&&n.complete()},e.prototype.asObservable=function(){var n=new _e;return n.source=this,n},e.create=function(n,r){return new Vm(n,r)},e})(_e);var Vm=(function(t){Mt(e,t);function e(n,r){var o=t.call(this)||this;return o.destination=n,o.source=r,o}return e.prototype.next=function(n){var r,o;(o=(r=this.destination)===null||r===void 0?void 0:r.next)===null||o===void 0||o.call(r,n)},e.prototype.error=function(n){var r,o;(o=(r=this.destination)===null||r===void 0?void 0:r.error)===null||o===void 0||o.call(r,n)},e.prototype.complete=function(){var n,r;(r=(n=this.destination)===null||n===void 0?void 0:n.complete)===null||r===void 0||r.call(n)},e.prototype._subscribe=function(n){var r,o;return(o=(r=this.source)===null||r===void 0?void 0:r.subscribe(n))!==null&&o!==void 0?o:tu},e})(zt);var su={now:function(){return(su.delegate||Date).now()},delegate:void 0};var is=(function(t){Mt(e,t);function e(n,r,o){n===void 0&&(n=1/0),r===void 0&&(r=1/0),o===void 0&&(o=su);var i=t.call(this)||this;return i._bufferSize=n,i._windowTime=r,i._timestampProvider=o,i._buffer=[],i._infiniteTimeWindow=!0,i._infiniteTimeWindow=r===1/0,i._bufferSize=Math.max(1,n),i._windowTime=Math.max(1,r),i}return e.prototype.next=function(n){var r=this,o=r.isStopped,i=r._buffer,s=r._infiniteTimeWindow,a=r._timestampProvider,l=r._windowTime;o||(i.push(n),!s&&i.push(a.now()+l)),this._trimBuffer(),t.prototype.next.call(this,n)},e.prototype._subscribe=function(n){this._throwIfClosed(),this._trimBuffer();for(var r=this._innerSubscribe(n),o=this,i=o._infiniteTimeWindow,s=o._buffer,a=s.slice(),l=0;l<a.length&&!n.closed;l+=i?1:2)n.next(a[l]);return this._checkFinalizedStatuses(n),r},e.prototype._trimBuffer=function(){var n=this,r=n._bufferSize,o=n._timestampProvider,i=n._buffer,s=n._infiniteTimeWindow,a=(s?1:2)*r;if(r<1/0&&a<i.length&&i.splice(0,i.length-a),!s){for(var l=o.now(),d=0,c=1;c<i.length&&i[c]<=l;c+=2)d=c;d&&i.splice(0,d+1)}},e})(zt);var Pn=new _e(function(t){return t.complete()});function jm(t){return t&&re(t.schedule)}function s0(t){return t[t.length-1]}function ss(t){return jm(s0(t))?t.pop():void 0}var as=(function(t){return t&&typeof t.length=="number"&&typeof t!="function"});function ls(t){return re(t?.then)}function ds(t){return re(t[Nr])}function cs(t){return Symbol.asyncIterator&&re(t?.[Symbol.asyncIterator])}function us(t){return new TypeError("You provided "+(t!==null&&typeof t=="object"?"an invalid object":"'"+t+"'")+" where a stream was expected. You can provide an Observable, Promise, ReadableStream, Array, AsyncIterable, or Iterable.")}function a0(){return typeof Symbol!="function"||!Symbol.iterator?"@@iterator":Symbol.iterator}var hs=a0();function ps(t){return re(t?.[hs])}function fs(t){return Lm(this,arguments,function(){var n,r,o,i;return Ji(this,function(s){switch(s.label){case 0:n=t.getReader(),s.label=1;case 1:s.trys.push([1,,9,10]),s.label=2;case 2:return[4,On(n.read())];case 3:return r=s.sent(),o=r.value,i=r.done,i?[4,On(void 0)]:[3,5];case 4:return[2,s.sent()];case 5:return[4,On(o)];case 6:return[4,s.sent()];case 7:return s.sent(),[3,2];case 8:return[3,10];case 9:return n.releaseLock(),[7];case 10:return[2]}})})}function ms(t){return re(t?.getReader)}function Ve(t){if(t instanceof _e)return t;if(t!=null){if(ds(t))return l0(t);if(as(t))return d0(t);if(ls(t))return c0(t);if(cs(t))return Zm(t);if(ps(t))return u0(t);if(ms(t))return h0(t)}throw us(t)}function l0(t){return new _e(function(e){var n=t[Nr]();if(re(n.subscribe))return n.subscribe(e);throw new TypeError("Provided object does not correctly implement Symbol.observable")})}function d0(t){return new _e(function(e){for(var n=0;n<t.length&&!e.closed;n++)e.next(t[n]);e.complete()})}function c0(t){return new _e(function(e){t.then(function(n){e.closed||(e.next(n),e.complete())},function(n){return e.error(n)}).then(null,ts)})}function u0(t){return new _e(function(e){var n,r;try{for(var o=Kt(t),i=o.next();!i.done;i=o.next()){var s=i.value;if(e.next(s),e.closed)return}}catch(a){n={error:a}}finally{try{i&&!i.done&&(r=o.return)&&r.call(o)}finally{if(n)throw n.error}}e.complete()})}function Zm(t){return new _e(function(e){p0(t,e).catch(function(n){return e.error(n)})})}function h0(t){return Zm(fs(t))}function p0(t,e){var n,r,o,i;return Pm(this,void 0,void 0,function(){var s,a;return Ji(this,function(l){switch(l.label){case 0:l.trys.push([0,5,6,11]),n=zm(t),l.label=1;case 1:return[4,n.next()];case 2:if(r=l.sent(),!!r.done)return[3,4];if(s=r.value,e.next(s),e.closed)return[2];l.label=3;case 3:return[3,1];case 4:return[3,11];case 5:return a=l.sent(),o={error:a},[3,11];case 6:return l.trys.push([6,,9,10]),r&&!r.done&&(i=n.return)?[4,i.call(n)]:[3,8];case 7:l.sent(),l.label=8;case 8:return[3,10];case 9:if(o)throw o.error;return[7];case 10:return[7];case 11:return e.complete(),[2]}})})}function mt(t,e,n,r,o){r===void 0&&(r=0),o===void 0&&(o=!1);var i=e.schedule(function(){n(),o?t.add(this.schedule(null,r)):this.unsubscribe()},r);if(t.add(i),!o)return i}function gs(t,e){return e===void 0&&(e=0),ke(function(n,r){n.subscribe(De(r,function(o){return mt(r,t,function(){return r.next(o)},e)},function(){return mt(r,t,function(){return r.complete()},e)},function(o){return mt(r,t,function(){return r.error(o)},e)}))})}function vs(t,e){return e===void 0&&(e=0),ke(function(n,r){r.add(t.schedule(function(){return n.subscribe(r)},e))})}function Wm(t,e){return Ve(t).pipe(vs(e),gs(e))}function qm(t,e){return Ve(t).pipe(vs(e),gs(e))}function Ym(t,e){return new _e(function(n){var r=0;return e.schedule(function(){r===t.length?n.complete():(n.next(t[r++]),n.closed||this.schedule())})})}function Km(t,e){return new _e(function(n){var r;return mt(n,e,function(){r=t[hs](),mt(n,e,function(){var o,i,s;try{o=r.next(),i=o.value,s=o.done}catch(a){n.error(a);return}s?n.complete():n.next(i)},0,!0)}),function(){return re(r?.return)&&r.return()}})}function bs(t,e){if(!t)throw new Error("Iterable cannot be null");return new _e(function(n){mt(n,e,function(){var r=t[Symbol.asyncIterator]();mt(n,e,function(){r.next().then(function(o){o.done?n.complete():n.next(o.value)})},0,!0)})})}function Xm(t,e){return bs(fs(t),e)}function Jm(t,e){if(t!=null){if(ds(t))return Wm(t,e);if(as(t))return Ym(t,e);if(ls(t))return qm(t,e);if(cs(t))return bs(t,e);if(ps(t))return Km(t,e);if(ms(t))return Xm(t,e)}throw us(t)}function Xt(t,e){return e?Jm(t,e):Ve(t)}function ge(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];var n=ss(t);return Xt(t,n)}function j(t,e){var n=re(t)?t:function(){return t},r=function(o){return o.error(n())};return new _e(e?function(o){return e.schedule(r,0,o)}:r)}var Qm=Ar(function(t){return function(){t(this),this.name="EmptyError",this.message="no elements in sequence"}});function ys(t,e){var n=typeof e=="object";return new Promise(function(r,o){var i=!1,s;t.subscribe({next:function(a){s=a,i=!0},error:o,complete:function(){i?r(s):n?r(e.defaultValue):o(new Qm)}})})}function Dt(t,e){return ke(function(n,r){var o=0;n.subscribe(De(r,function(i){r.next(t.call(e,i,o++))}))})}function eg(t,e,n,r,o,i,s,a){var l=[],d=0,c=0,h=!1,p=function(){h&&!l.length&&!d&&e.complete()},m=function(v){return d<r?u(v):l.push(v)},u=function(v){i&&e.next(v),d++;var E=!1;Ve(n(v,c++)).subscribe(De(e,function(x){o?.(x),i?m(x):e.next(x)},function(){E=!0},void 0,function(){if(E)try{d--;for(var x=function(){var T=l.shift();s?mt(e,s,function(){return u(T)}):u(T)};l.length&&d<r;)x();p()}catch(T){e.error(T)}}))};return t.subscribe(De(e,m,function(){h=!0,p()})),function(){a?.()}}function at(t,e,n){return n===void 0&&(n=1/0),re(e)?at(function(r,o){return Dt(function(i,s){return e(r,i,o,s)})(Ve(t(r,o)))},n):(typeof e=="number"&&(n=e),ke(function(r,o){return eg(r,o,t,n)}))}function No(t){return t===void 0&&(t=1/0),at(Or,t)}function tg(){return No(1)}function Ln(t){return new _e(function(e){Ve(t()).subscribe(e)})}function au(t,e){return ke(function(n,r){var o=0;n.subscribe(De(r,function(i){return t.call(e,i,o++)&&r.next(i)}))})}function Mr(t){return ke(function(e,n){var r=null,o=!1,i;r=e.subscribe(De(n,void 0,void 0,function(s){i=Ve(t(s,Mr(t)(e))),r?(r.unsubscribe(),r=null,i.subscribe(n)):o=!0})),o&&(r.unsubscribe(),r=null,i.subscribe(n))})}function ws(t,e){return re(e)?at(t,e,1):at(t,1)}function ng(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];var n=ss(t);return ke(function(r,o){tg()(Xt(Lt([r],Pt(t)),n)).subscribe(o)})}function lu(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];return ng.apply(void 0,Lt([],Pt(t)))}function du(t){return ke(function(e,n){var r=!1;e.subscribe(De(n,function(o){r=!0,n.next(o)},function(){r||n.next(t),n.complete()}))})}function zn(t){return ke(function(e,n){try{e.subscribe(n)}finally{n.add(t)}})}function cu(t,e){return ke(function(n,r){var o=null,i=0,s=!1,a=function(){return s&&!o&&r.complete()};n.subscribe(De(r,function(l){o?.unsubscribe();var d=0,c=i++;Ve(t(l,c)).subscribe(o=De(r,function(h){return r.next(e?e(l,h,c,d++):h)},function(){o=null,a()}))},function(){s=!0,a()}))})}function Es(t){return ke(function(e,n){Ve(t).subscribe(De(n,function(){return n.complete()},Io)),!n.closed&&e.subscribe(n)})}function xs(t,e,n){var r=re(t)||e||n?{next:t,error:e,complete:n}:t;return r?ke(function(o,i){var s;(s=r.subscribe)===null||s===void 0||s.call(r);var a=!0;o.subscribe(De(i,function(l){var d;(d=r.next)===null||d===void 0||d.call(r,l),i.next(l)},function(){var l;a=!1,(l=r.complete)===null||l===void 0||l.call(r),i.complete()},function(l){var d;a=!1,(d=r.error)===null||d===void 0||d.call(r,l),i.error(l)},function(){var l,d;a&&((l=r.unsubscribe)===null||l===void 0||l.call(r)),(d=r.finalize)===null||d===void 0||d.call(r)}))}):Or}function rg(t){return` \r
	`.indexOf(t)>=0}function _s(t){for(var e=["topLevel"],n=0,r,o,i,s=function(T){return e.push(T)},a=function(T){return e[e.length-1]=T},l=function(T){r==null&&(r=n,o=e.length,i=T)},d=function(T){T===i&&(r=void 0,o=void 0,i=void 0)},c=function(){return e.pop()},h=function(){return n--},p=function(T){if("0"<=T&&T<="9"){s("number");return}switch(T){case'"':s("string");return;case"-":s("numberNeedsDigit");return;case"t":s("true");return;case"f":s("false");return;case"n":s("null");return;case"[":s("arrayNeedsValue");return;case"{":s("objectNeedsKey");return}},m=t.length;n<m;n++){var u=t[n];switch(e[e.length-1]){case"topLevel":p(u);break;case"string":switch(u){case'"':c();break;case"\\":l("stringEscape"),s("stringEscaped");break}break;case"stringEscaped":u==="u"?s("stringUnicode"):(d("stringEscape"),c());break;case"stringUnicode":n-t.lastIndexOf("u",n)===4&&(d("stringEscape"),c());break;case"number":u==="."?a("numberNeedsDigit"):u==="e"||u==="E"?a("numberNeedsExponent"):(u<"0"||u>"9")&&(h(),c());break;case"numberNeedsDigit":a("number");break;case"numberNeedsExponent":a(u==="+"||u==="-"?"numberNeedsDigit":"number");break;case"true":case"false":case"null":(u<"a"||u>"z")&&(h(),c());break;case"arrayNeedsValue":u==="]"?c():rg(u)||(d("collectionItem"),a("arrayNeedsComma"),p(u));break;case"arrayNeedsComma":u==="]"?c():u===","&&(l("collectionItem"),a("arrayNeedsValue"));break;case"objectNeedsKey":u==="}"?c():u==='"'&&(l("collectionItem"),a("objectNeedsColon"),s("string"));break;case"objectNeedsColon":u===":"&&a("objectNeedsValue");break;case"objectNeedsValue":rg(u)||(d("collectionItem"),a("objectNeedsComma"),p(u));break;case"objectNeedsComma":u==="}"?c():u===","&&(l("collectionItem"),a("objectNeedsKey"));break}}o!=null&&(e.length=o);for(var v=[r!=null?t.slice(0,r):t],E=function(T){return v.push(T.slice(t.length-t.lastIndexOf(T[0])))},x=e.length-1;x>=0;x--)switch(e[x]){case"string":v.push('"');break;case"numberNeedsDigit":case"numberNeedsExponent":v.push("0");break;case"true":E("true");break;case"false":E("false");break;case"null":E("null");break;case"arrayNeedsValue":case"arrayNeedsComma":v.push("]");break;case"objectNeedsKey":case"objectNeedsColon":case"objectNeedsValue":case"objectNeedsComma":v.push("}");break}return v.join("")}var f0=Object.freeze({status:"aborted"});function R(t,e,n){function r(a,l){var d;Object.defineProperty(a,"_zod",{value:a._zod??{},enumerable:!1}),(d=a._zod).traits??(d.traits=new Set),a._zod.traits.add(t),e(a,l);for(let c in s.prototype)c in a||Object.defineProperty(a,c,{value:s.prototype[c].bind(a)});a._zod.constr=s,a._zod.def=l}let o=n?.Parent??Object;class i extends o{}Object.defineProperty(i,"name",{value:t});function s(a){var l;let d=n?.Parent?new i:this;r(d,a),(l=d._zod).deferred??(l.deferred=[]);for(let c of d._zod.deferred)c();return d}return Object.defineProperty(s,"init",{value:r}),Object.defineProperty(s,Symbol.hasInstance,{value:a=>n?.Parent&&a instanceof n.Parent?!0:a?._zod?.traits?.has(t)}),Object.defineProperty(s,"name",{value:t}),s}var Jt=class extends Error{constructor(){super("Encountered Promise during synchronous parse. Use .parseAsync() instead.")}},Ts={};function Je(t){return t&&Object.assign(Ts,t),Ts}var fe={};Zd(fe,{BIGINT_FORMAT_RANGES:()=>ig,Class:()=>hu,NUMBER_FORMAT_RANGES:()=>wu,aborted:()=>$n,allowsEval:()=>vu,assert:()=>y0,assertEqual:()=>m0,assertIs:()=>v0,assertNever:()=>b0,assertNotEqual:()=>g0,assignProp:()=>gu,cached:()=>Mo,captureStackTrace:()=>ks,cleanEnum:()=>O0,cleanRegex:()=>Lo,clone:()=>Et,createTransparentProxy:()=>S0,defineLazy:()=>he,esc:()=>Dn,escapeRegex:()=>an,extend:()=>R0,finalizeIssue:()=>xt,floatSafeRemainder:()=>mu,getElementAtPath:()=>w0,getEnumValues:()=>pu,getLengthableOrigin:()=>zo,getParsedType:()=>T0,getSizableOrigin:()=>sg,isObject:()=>Pr,isPlainObject:()=>Lr,issue:()=>Eu,joinValues:()=>Ss,jsonStringifyReplacer:()=>fu,merge:()=>I0,normalizeParams:()=>Z,nullish:()=>Po,numKeys:()=>_0,omit:()=>A0,optionalKeys:()=>yu,partial:()=>C0,pick:()=>k0,prefixIssues:()=>$t,primitiveTypes:()=>og,promiseAllObject:()=>E0,propertyKeyTypes:()=>bu,randomString:()=>x0,required:()=>N0,stringifyPrimitive:()=>As,unwrapMessage:()=>Oo});function m0(t){return t}function g0(t){return t}function v0(t){}function b0(t){throw new Error}function y0(t){}function pu(t){let e=Object.values(t).filter(r=>typeof r=="number");return Object.entries(t).filter(([r,o])=>e.indexOf(+r)===-1).map(([r,o])=>o)}function Ss(t,e="|"){return t.map(n=>As(n)).join(e)}function fu(t,e){return typeof e=="bigint"?e.toString():e}function Mo(t){return{get value(){{let n=t();return Object.defineProperty(this,"value",{value:n}),n}throw new Error("cached value already set")}}}function Po(t){return t==null}function Lo(t){let e=t.startsWith("^")?1:0,n=t.endsWith("$")?t.length-1:t.length;return t.slice(e,n)}function mu(t,e){let n=(t.toString().split(".")[1]||"").length,r=(e.toString().split(".")[1]||"").length,o=n>r?n:r,i=Number.parseInt(t.toFixed(o).replace(".","")),s=Number.parseInt(e.toFixed(o).replace(".",""));return i%s/10**o}function he(t,e,n){Object.defineProperty(t,e,{get(){{let o=n();return t[e]=o,o}throw new Error("cached value already set")},set(o){Object.defineProperty(t,e,{value:o})},configurable:!0})}function gu(t,e,n){Object.defineProperty(t,e,{value:n,writable:!0,enumerable:!0,configurable:!0})}function w0(t,e){return e?e.reduce((n,r)=>n?.[r],t):t}function E0(t){let e=Object.keys(t),n=e.map(r=>t[r]);return Promise.all(n).then(r=>{let o={};for(let i=0;i<e.length;i++)o[e[i]]=r[i];return o})}function x0(t=10){let e="abcdefghijklmnopqrstuvwxyz",n="";for(let r=0;r<t;r++)n+=e[Math.floor(Math.random()*e.length)];return n}function Dn(t){return JSON.stringify(t)}var ks=Error.captureStackTrace?Error.captureStackTrace:(...t)=>{};function Pr(t){return typeof t=="object"&&t!==null&&!Array.isArray(t)}var vu=Mo(()=>{if(typeof navigator<"u"&&navigator?.userAgent?.includes("Cloudflare"))return!1;try{let t=Function;return new t(""),!0}catch{return!1}});function Lr(t){if(Pr(t)===!1)return!1;let e=t.constructor;if(e===void 0)return!0;let n=e.prototype;return!(Pr(n)===!1||Object.prototype.hasOwnProperty.call(n,"isPrototypeOf")===!1)}function _0(t){let e=0;for(let n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}var T0=t=>{let e=typeof t;switch(e){case"undefined":return"undefined";case"string":return"string";case"number":return Number.isNaN(t)?"nan":"number";case"boolean":return"boolean";case"function":return"function";case"bigint":return"bigint";case"symbol":return"symbol";case"object":return Array.isArray(t)?"array":t===null?"null":t.then&&typeof t.then=="function"&&t.catch&&typeof t.catch=="function"?"promise":typeof Map<"u"&&t instanceof Map?"map":typeof Set<"u"&&t instanceof Set?"set":typeof Date<"u"&&t instanceof Date?"date":typeof File<"u"&&t instanceof File?"file":"object";default:throw new Error(`Unknown data type: ${e}`)}},bu=new Set(["string","number","symbol"]),og=new Set(["string","number","bigint","boolean","symbol","undefined"]);function an(t){return t.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")}function Et(t,e,n){let r=new t._zod.constr(e??t._zod.def);return(!e||n?.parent)&&(r._zod.parent=t),r}function Z(t){let e=t;if(!e)return{};if(typeof e=="string")return{error:()=>e};if(e?.message!==void 0){if(e?.error!==void 0)throw new Error("Cannot specify both `message` and `error` params");e.error=e.message}return delete e.message,typeof e.error=="string"?{...e,error:()=>e.error}:e}function S0(t){let e;return new Proxy({},{get(n,r,o){return e??(e=t()),Reflect.get(e,r,o)},set(n,r,o,i){return e??(e=t()),Reflect.set(e,r,o,i)},has(n,r){return e??(e=t()),Reflect.has(e,r)},deleteProperty(n,r){return e??(e=t()),Reflect.deleteProperty(e,r)},ownKeys(n){return e??(e=t()),Reflect.ownKeys(e)},getOwnPropertyDescriptor(n,r){return e??(e=t()),Reflect.getOwnPropertyDescriptor(e,r)},defineProperty(n,r,o){return e??(e=t()),Reflect.defineProperty(e,r,o)}})}function As(t){return typeof t=="bigint"?t.toString()+"n":typeof t=="string"?`"${t}"`:`${t}`}function yu(t){return Object.keys(t).filter(e=>t[e]._zod.optin==="optional"&&t[e]._zod.optout==="optional")}var wu={safeint:[Number.MIN_SAFE_INTEGER,Number.MAX_SAFE_INTEGER],int32:[-2147483648,2147483647],uint32:[0,4294967295],float32:[-34028234663852886e22,34028234663852886e22],float64:[-Number.MAX_VALUE,Number.MAX_VALUE]},ig={int64:[BigInt("-9223372036854775808"),BigInt("9223372036854775807")],uint64:[BigInt(0),BigInt("18446744073709551615")]};function k0(t,e){let n={},r=t._zod.def;for(let o in e){if(!(o in r.shape))throw new Error(`Unrecognized key: "${o}"`);e[o]&&(n[o]=r.shape[o])}return Et(t,{...t._zod.def,shape:n,checks:[]})}function A0(t,e){let n={...t._zod.def.shape},r=t._zod.def;for(let o in e){if(!(o in r.shape))throw new Error(`Unrecognized key: "${o}"`);e[o]&&delete n[o]}return Et(t,{...t._zod.def,shape:n,checks:[]})}function R0(t,e){if(!Lr(e))throw new Error("Invalid input to extend: expected a plain object");let n={...t._zod.def,get shape(){let r={...t._zod.def.shape,...e};return gu(this,"shape",r),r},checks:[]};return Et(t,n)}function I0(t,e){return Et(t,{...t._zod.def,get shape(){let n={...t._zod.def.shape,...e._zod.def.shape};return gu(this,"shape",n),n},catchall:e._zod.def.catchall,checks:[]})}function C0(t,e,n){let r=e._zod.def.shape,o={...r};if(n)for(let i in n){if(!(i in r))throw new Error(`Unrecognized key: "${i}"`);n[i]&&(o[i]=t?new t({type:"optional",innerType:r[i]}):r[i])}else for(let i in r)o[i]=t?new t({type:"optional",innerType:r[i]}):r[i];return Et(e,{...e._zod.def,shape:o,checks:[]})}function N0(t,e,n){let r=e._zod.def.shape,o={...r};if(n)for(let i in n){if(!(i in o))throw new Error(`Unrecognized key: "${i}"`);n[i]&&(o[i]=new t({type:"nonoptional",innerType:r[i]}))}else for(let i in r)o[i]=new t({type:"nonoptional",innerType:r[i]});return Et(e,{...e._zod.def,shape:o,checks:[]})}function $n(t,e=0){for(let n=e;n<t.issues.length;n++)if(t.issues[n]?.continue!==!0)return!0;return!1}function $t(t,e){return e.map(n=>{var r;return(r=n).path??(r.path=[]),n.path.unshift(t),n})}function Oo(t){return typeof t=="string"?t:t?.message}function xt(t,e,n){let r={...t,path:t.path??[]};if(!t.message){let o=Oo(t.inst?._zod.def?.error?.(t))??Oo(e?.error?.(t))??Oo(n.customError?.(t))??Oo(n.localeError?.(t))??"Invalid input";r.message=o}return delete r.inst,delete r.continue,e?.reportInput||delete r.input,r}function sg(t){return t instanceof Set?"set":t instanceof Map?"map":t instanceof File?"file":"unknown"}function zo(t){return Array.isArray(t)?"array":typeof t=="string"?"string":"unknown"}function Eu(...t){let[e,n,r]=t;return typeof e=="string"?{message:e,code:"custom",input:n,inst:r}:{...e}}function O0(t){return Object.entries(t).filter(([e,n])=>Number.isNaN(Number.parseInt(e,10))).map(e=>e[1])}var hu=class{constructor(...e){}};var ag=(t,e)=>{t.name="$ZodError",Object.defineProperty(t,"_zod",{value:t._zod,enumerable:!1}),Object.defineProperty(t,"issues",{value:e,enumerable:!1}),Object.defineProperty(t,"message",{get(){return JSON.stringify(e,fu,2)},enumerable:!0}),Object.defineProperty(t,"toString",{value:()=>t.message,enumerable:!1})},Rs=R("$ZodError",ag),xu=R("$ZodError",ag,{Parent:Error});function _u(t,e=n=>n.message){let n={},r=[];for(let o of t.issues)o.path.length>0?(n[o.path[0]]=n[o.path[0]]||[],n[o.path[0]].push(e(o))):r.push(e(o));return{formErrors:r,fieldErrors:n}}function Tu(t,e){let n=e||function(i){return i.message},r={_errors:[]},o=i=>{for(let s of i.issues)if(s.code==="invalid_union"&&s.errors.length)s.errors.map(a=>o({issues:a}));else if(s.code==="invalid_key")o({issues:s.issues});else if(s.code==="invalid_element")o({issues:s.issues});else if(s.path.length===0)r._errors.push(n(s));else{let a=r,l=0;for(;l<s.path.length;){let d=s.path[l];l===s.path.length-1?(a[d]=a[d]||{_errors:[]},a[d]._errors.push(n(s))):a[d]=a[d]||{_errors:[]},a=a[d],l++}}};return o(t),r}var lg=t=>(e,n,r,o)=>{let i=r?Object.assign(r,{async:!1}):{async:!1},s=e._zod.run({value:n,issues:[]},i);if(s instanceof Promise)throw new Jt;if(s.issues.length){let a=new(o?.Err??t)(s.issues.map(l=>xt(l,i,Je())));throw ks(a,o?.callee),a}return s.value};var dg=t=>async(e,n,r,o)=>{let i=r?Object.assign(r,{async:!0}):{async:!0},s=e._zod.run({value:n,issues:[]},i);if(s instanceof Promise&&(s=await s),s.issues.length){let a=new(o?.Err??t)(s.issues.map(l=>xt(l,i,Je())));throw ks(a,o?.callee),a}return s.value};var Su=t=>(e,n,r)=>{let o=r?{...r,async:!1}:{async:!1},i=e._zod.run({value:n,issues:[]},o);if(i instanceof Promise)throw new Jt;return i.issues.length?{success:!1,error:new(t??Rs)(i.issues.map(s=>xt(s,o,Je())))}:{success:!0,data:i.value}},cg=Su(xu),ku=t=>async(e,n,r)=>{let o=r?Object.assign(r,{async:!0}):{async:!0},i=e._zod.run({value:n,issues:[]},o);return i instanceof Promise&&(i=await i),i.issues.length?{success:!1,error:new t(i.issues.map(s=>xt(s,o,Je())))}:{success:!0,data:i.value}},ug=ku(xu);var hg=/^[cC][^\s-]{8,}$/,pg=/^[0-9a-z]+$/,fg=/^[0-9A-HJKMNP-TV-Za-hjkmnp-tv-z]{26}$/,mg=/^[0-9a-vA-V]{20}$/,gg=/^[A-Za-z0-9]{27}$/,vg=/^[a-zA-Z0-9_-]{21}$/,bg=/^P(?:(\d+W)|(?!.*W)(?=\d|T\d)(\d+Y)?(\d+M)?(\d+D)?(T(?=\d)(\d+H)?(\d+M)?(\d+([.,]\d+)?S)?)?)$/;var yg=/^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12})$/,Au=t=>t?new RegExp(`^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-${t}[0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12})$`):/^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[1-8][0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12}|00000000-0000-0000-0000-000000000000)$/;var wg=/^(?!\.)(?!.*\.\.)([A-Za-z0-9_'+\-\.]*)[A-Za-z0-9_+-]@([A-Za-z0-9][A-Za-z0-9\-]*\.)+[A-Za-z]{2,}$/;var P0="^(\\p{Extended_Pictographic}|\\p{Emoji_Component})+$";function Eg(){return new RegExp(P0,"u")}var xg=/^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])$/,_g=/^(([0-9a-fA-F]{1,4}:){7}[0-9a-fA-F]{1,4}|::|([0-9a-fA-F]{1,4})?::([0-9a-fA-F]{1,4}:?){0,6})$/,Tg=/^((25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\/([0-9]|[1-2][0-9]|3[0-2])$/,Sg=/^(([0-9a-fA-F]{1,4}:){7}[0-9a-fA-F]{1,4}|::|([0-9a-fA-F]{1,4})?::([0-9a-fA-F]{1,4}:?){0,6})\/(12[0-8]|1[01][0-9]|[1-9]?[0-9])$/,kg=/^$|^(?:[0-9a-zA-Z+/]{4})*(?:(?:[0-9a-zA-Z+/]{2}==)|(?:[0-9a-zA-Z+/]{3}=))?$/,Ru=/^[A-Za-z0-9_-]*$/,Ag=/^([a-zA-Z0-9-]+\.)*[a-zA-Z0-9-]+$/;var Rg=/^\+(?:[0-9]){6,14}[0-9]$/,Ig="(?:(?:\\d\\d[2468][048]|\\d\\d[13579][26]|\\d\\d0[48]|[02468][048]00|[13579][26]00)-02-29|\\d{4}-(?:(?:0[13578]|1[02])-(?:0[1-9]|[12]\\d|3[01])|(?:0[469]|11)-(?:0[1-9]|[12]\\d|30)|(?:02)-(?:0[1-9]|1\\d|2[0-8])))",Cg=new RegExp(`^${Ig}$`);function Ng(t){let e="(?:[01]\\d|2[0-3]):[0-5]\\d";return typeof t.precision=="number"?t.precision===-1?`${e}`:t.precision===0?`${e}:[0-5]\\d`:`${e}:[0-5]\\d\\.\\d{${t.precision}}`:`${e}(?::[0-5]\\d(?:\\.\\d+)?)?`}function Og(t){return new RegExp(`^${Ng(t)}$`)}function Mg(t){let e=Ng({precision:t.precision}),n=["Z"];t.local&&n.push(""),t.offset&&n.push("([+-]\\d{2}:\\d{2})");let r=`${e}(?:${n.join("|")})`;return new RegExp(`^${Ig}T(?:${r})$`)}var Pg=t=>{let e=t?`[\\s\\S]{${t?.minimum??0},${t?.maximum??""}}`:"[\\s\\S]*";return new RegExp(`^${e}$`)};var Lg=/^\d+$/,zg=/^-?\d+(?:\.\d+)?/i,Dg=/true|false/i;var $g=/^[^A-Z]*$/,Ug=/^[^a-z]*$/;var tt=R("$ZodCheck",(t,e)=>{var n;t._zod??(t._zod={}),t._zod.def=e,(n=t._zod).onattach??(n.onattach=[])}),Hg={number:"number",bigint:"bigint",object:"date"},Iu=R("$ZodCheckLessThan",(t,e)=>{tt.init(t,e);let n=Hg[typeof e.value];t._zod.onattach.push(r=>{let o=r._zod.bag,i=(e.inclusive?o.maximum:o.exclusiveMaximum)??Number.POSITIVE_INFINITY;e.value<i&&(e.inclusive?o.maximum=e.value:o.exclusiveMaximum=e.value)}),t._zod.check=r=>{(e.inclusive?r.value<=e.value:r.value<e.value)||r.issues.push({origin:n,code:"too_big",maximum:e.value,input:r.value,inclusive:e.inclusive,inst:t,continue:!e.abort})}}),Cu=R("$ZodCheckGreaterThan",(t,e)=>{tt.init(t,e);let n=Hg[typeof e.value];t._zod.onattach.push(r=>{let o=r._zod.bag,i=(e.inclusive?o.minimum:o.exclusiveMinimum)??Number.NEGATIVE_INFINITY;e.value>i&&(e.inclusive?o.minimum=e.value:o.exclusiveMinimum=e.value)}),t._zod.check=r=>{(e.inclusive?r.value>=e.value:r.value>e.value)||r.issues.push({origin:n,code:"too_small",minimum:e.value,input:r.value,inclusive:e.inclusive,inst:t,continue:!e.abort})}}),Fg=R("$ZodCheckMultipleOf",(t,e)=>{tt.init(t,e),t._zod.onattach.push(n=>{var r;(r=n._zod.bag).multipleOf??(r.multipleOf=e.value)}),t._zod.check=n=>{if(typeof n.value!=typeof e.value)throw new Error("Cannot mix number and bigint in multiple_of check.");(typeof n.value=="bigint"?n.value%e.value===BigInt(0):mu(n.value,e.value)===0)||n.issues.push({origin:typeof n.value,code:"not_multiple_of",divisor:e.value,input:n.value,inst:t,continue:!e.abort})}}),Gg=R("$ZodCheckNumberFormat",(t,e)=>{tt.init(t,e),e.format=e.format||"float64";let n=e.format?.includes("int"),r=n?"int":"number",[o,i]=wu[e.format];t._zod.onattach.push(s=>{let a=s._zod.bag;a.format=e.format,a.minimum=o,a.maximum=i,n&&(a.pattern=Lg)}),t._zod.check=s=>{let a=s.value;if(n){if(!Number.isInteger(a)){s.issues.push({expected:r,format:e.format,code:"invalid_type",input:a,inst:t});return}if(!Number.isSafeInteger(a)){a>0?s.issues.push({input:a,code:"too_big",maximum:Number.MAX_SAFE_INTEGER,note:"Integers must be within the safe integer range.",inst:t,origin:r,continue:!e.abort}):s.issues.push({input:a,code:"too_small",minimum:Number.MIN_SAFE_INTEGER,note:"Integers must be within the safe integer range.",inst:t,origin:r,continue:!e.abort});return}}a<o&&s.issues.push({origin:"number",input:a,code:"too_small",minimum:o,inclusive:!0,inst:t,continue:!e.abort}),a>i&&s.issues.push({origin:"number",input:a,code:"too_big",maximum:i,inst:t})}});var Bg=R("$ZodCheckMaxLength",(t,e)=>{var n;tt.init(t,e),(n=t._zod.def).when??(n.when=r=>{let o=r.value;return!Po(o)&&o.length!==void 0}),t._zod.onattach.push(r=>{let o=r._zod.bag.maximum??Number.POSITIVE_INFINITY;e.maximum<o&&(r._zod.bag.maximum=e.maximum)}),t._zod.check=r=>{let o=r.value;if(o.length<=e.maximum)return;let s=zo(o);r.issues.push({origin:s,code:"too_big",maximum:e.maximum,inclusive:!0,input:o,inst:t,continue:!e.abort})}}),Vg=R("$ZodCheckMinLength",(t,e)=>{var n;tt.init(t,e),(n=t._zod.def).when??(n.when=r=>{let o=r.value;return!Po(o)&&o.length!==void 0}),t._zod.onattach.push(r=>{let o=r._zod.bag.minimum??Number.NEGATIVE_INFINITY;e.minimum>o&&(r._zod.bag.minimum=e.minimum)}),t._zod.check=r=>{let o=r.value;if(o.length>=e.minimum)return;let s=zo(o);r.issues.push({origin:s,code:"too_small",minimum:e.minimum,inclusive:!0,input:o,inst:t,continue:!e.abort})}}),jg=R("$ZodCheckLengthEquals",(t,e)=>{var n;tt.init(t,e),(n=t._zod.def).when??(n.when=r=>{let o=r.value;return!Po(o)&&o.length!==void 0}),t._zod.onattach.push(r=>{let o=r._zod.bag;o.minimum=e.length,o.maximum=e.length,o.length=e.length}),t._zod.check=r=>{let o=r.value,i=o.length;if(i===e.length)return;let s=zo(o),a=i>e.length;r.issues.push({origin:s,...a?{code:"too_big",maximum:e.length}:{code:"too_small",minimum:e.length},inclusive:!0,exact:!0,input:r.value,inst:t,continue:!e.abort})}}),Do=R("$ZodCheckStringFormat",(t,e)=>{var n,r;tt.init(t,e),t._zod.onattach.push(o=>{let i=o._zod.bag;i.format=e.format,e.pattern&&(i.patterns??(i.patterns=new Set),i.patterns.add(e.pattern))}),e.pattern?(n=t._zod).check??(n.check=o=>{e.pattern.lastIndex=0,!e.pattern.test(o.value)&&o.issues.push({origin:"string",code:"invalid_format",format:e.format,input:o.value,...e.pattern?{pattern:e.pattern.toString()}:{},inst:t,continue:!e.abort})}):(r=t._zod).check??(r.check=()=>{})}),Zg=R("$ZodCheckRegex",(t,e)=>{Do.init(t,e),t._zod.check=n=>{e.pattern.lastIndex=0,!e.pattern.test(n.value)&&n.issues.push({origin:"string",code:"invalid_format",format:"regex",input:n.value,pattern:e.pattern.toString(),inst:t,continue:!e.abort})}}),Wg=R("$ZodCheckLowerCase",(t,e)=>{e.pattern??(e.pattern=$g),Do.init(t,e)}),qg=R("$ZodCheckUpperCase",(t,e)=>{e.pattern??(e.pattern=Ug),Do.init(t,e)}),Yg=R("$ZodCheckIncludes",(t,e)=>{tt.init(t,e);let n=an(e.includes),r=new RegExp(typeof e.position=="number"?`^.{${e.position}}${n}`:n);e.pattern=r,t._zod.onattach.push(o=>{let i=o._zod.bag;i.patterns??(i.patterns=new Set),i.patterns.add(r)}),t._zod.check=o=>{o.value.includes(e.includes,e.position)||o.issues.push({origin:"string",code:"invalid_format",format:"includes",includes:e.includes,input:o.value,inst:t,continue:!e.abort})}}),Kg=R("$ZodCheckStartsWith",(t,e)=>{tt.init(t,e);let n=new RegExp(`^${an(e.prefix)}.*`);e.pattern??(e.pattern=n),t._zod.onattach.push(r=>{let o=r._zod.bag;o.patterns??(o.patterns=new Set),o.patterns.add(n)}),t._zod.check=r=>{r.value.startsWith(e.prefix)||r.issues.push({origin:"string",code:"invalid_format",format:"starts_with",prefix:e.prefix,input:r.value,inst:t,continue:!e.abort})}}),Xg=R("$ZodCheckEndsWith",(t,e)=>{tt.init(t,e);let n=new RegExp(`.*${an(e.suffix)}$`);e.pattern??(e.pattern=n),t._zod.onattach.push(r=>{let o=r._zod.bag;o.patterns??(o.patterns=new Set),o.patterns.add(n)}),t._zod.check=r=>{r.value.endsWith(e.suffix)||r.issues.push({origin:"string",code:"invalid_format",format:"ends_with",suffix:e.suffix,input:r.value,inst:t,continue:!e.abort})}});var Jg=R("$ZodCheckOverwrite",(t,e)=>{tt.init(t,e),t._zod.check=n=>{n.value=e.tx(n.value)}});var Cs=class{constructor(e=[]){this.content=[],this.indent=0,this&&(this.args=e)}indented(e){this.indent+=1,e(this),this.indent-=1}write(e){if(typeof e=="function"){e(this,{execution:"sync"}),e(this,{execution:"async"});return}let r=e.split(`
`).filter(s=>s),o=Math.min(...r.map(s=>s.length-s.trimStart().length)),i=r.map(s=>s.slice(o)).map(s=>" ".repeat(this.indent*2)+s);for(let s of i)this.content.push(s)}compile(){let e=Function,n=this?.args,o=[...(this?.content??[""]).map(i=>`  ${i}`)];return new e(...n,o.join(`
`))}};var ev={major:4,minor:0,patch:0};var be=R("$ZodType",(t,e)=>{var n;t??(t={}),t._zod.def=e,t._zod.bag=t._zod.bag||{},t._zod.version=ev;let r=[...t._zod.def.checks??[]];t._zod.traits.has("$ZodCheck")&&r.unshift(t);for(let o of r)for(let i of o._zod.onattach)i(t);if(r.length===0)(n=t._zod).deferred??(n.deferred=[]),t._zod.deferred?.push(()=>{t._zod.run=t._zod.parse});else{let o=(i,s,a)=>{let l=$n(i),d;for(let c of s){if(c._zod.def.when){if(!c._zod.def.when(i))continue}else if(l)continue;let h=i.issues.length,p=c._zod.check(i);if(p instanceof Promise&&a?.async===!1)throw new Jt;if(d||p instanceof Promise)d=(d??Promise.resolve()).then(async()=>{await p,i.issues.length!==h&&(l||(l=$n(i,h)))});else{if(i.issues.length===h)continue;l||(l=$n(i,h))}}return d?d.then(()=>i):i};t._zod.run=(i,s)=>{let a=t._zod.parse(i,s);if(a instanceof Promise){if(s.async===!1)throw new Jt;return a.then(l=>o(l,r,s))}return o(a,r,s)}}t["~standard"]={validate:o=>{try{let i=cg(t,o);return i.success?{value:i.data}:{issues:i.error?.issues}}catch{return ug(t,o).then(s=>s.success?{value:s.data}:{issues:s.error?.issues})}},vendor:"zod",version:1}}),Os=R("$ZodString",(t,e)=>{be.init(t,e),t._zod.pattern=[...t?._zod.bag?.patterns??[]].pop()??Pg(t._zod.bag),t._zod.parse=(n,r)=>{if(e.coerce)try{n.value=String(n.value)}catch{}return typeof n.value=="string"||n.issues.push({expected:"string",code:"invalid_type",input:n.value,inst:t}),n}}),Te=R("$ZodStringFormat",(t,e)=>{Do.init(t,e),Os.init(t,e)}),cv=R("$ZodGUID",(t,e)=>{e.pattern??(e.pattern=yg),Te.init(t,e)}),uv=R("$ZodUUID",(t,e)=>{if(e.version){let r={v1:1,v2:2,v3:3,v4:4,v5:5,v6:6,v7:7,v8:8}[e.version];if(r===void 0)throw new Error(`Invalid UUID version: "${e.version}"`);e.pattern??(e.pattern=Au(r))}else e.pattern??(e.pattern=Au());Te.init(t,e)}),hv=R("$ZodEmail",(t,e)=>{e.pattern??(e.pattern=wg),Te.init(t,e)}),pv=R("$ZodURL",(t,e)=>{Te.init(t,e),t._zod.check=n=>{try{let r=n.value,o=new URL(r),i=o.href;e.hostname&&(e.hostname.lastIndex=0,e.hostname.test(o.hostname)||n.issues.push({code:"invalid_format",format:"url",note:"Invalid hostname",pattern:Ag.source,input:n.value,inst:t,continue:!e.abort})),e.protocol&&(e.protocol.lastIndex=0,e.protocol.test(o.protocol.endsWith(":")?o.protocol.slice(0,-1):o.protocol)||n.issues.push({code:"invalid_format",format:"url",note:"Invalid protocol",pattern:e.protocol.source,input:n.value,inst:t,continue:!e.abort})),!r.endsWith("/")&&i.endsWith("/")?n.value=i.slice(0,-1):n.value=i;return}catch{n.issues.push({code:"invalid_format",format:"url",input:n.value,inst:t,continue:!e.abort})}}}),fv=R("$ZodEmoji",(t,e)=>{e.pattern??(e.pattern=Eg()),Te.init(t,e)}),mv=R("$ZodNanoID",(t,e)=>{e.pattern??(e.pattern=vg),Te.init(t,e)}),gv=R("$ZodCUID",(t,e)=>{e.pattern??(e.pattern=hg),Te.init(t,e)}),vv=R("$ZodCUID2",(t,e)=>{e.pattern??(e.pattern=pg),Te.init(t,e)}),bv=R("$ZodULID",(t,e)=>{e.pattern??(e.pattern=fg),Te.init(t,e)}),yv=R("$ZodXID",(t,e)=>{e.pattern??(e.pattern=mg),Te.init(t,e)}),wv=R("$ZodKSUID",(t,e)=>{e.pattern??(e.pattern=gg),Te.init(t,e)}),Ev=R("$ZodISODateTime",(t,e)=>{e.pattern??(e.pattern=Mg(e)),Te.init(t,e)}),xv=R("$ZodISODate",(t,e)=>{e.pattern??(e.pattern=Cg),Te.init(t,e)}),_v=R("$ZodISOTime",(t,e)=>{e.pattern??(e.pattern=Og(e)),Te.init(t,e)}),Tv=R("$ZodISODuration",(t,e)=>{e.pattern??(e.pattern=bg),Te.init(t,e)}),Sv=R("$ZodIPv4",(t,e)=>{e.pattern??(e.pattern=xg),Te.init(t,e),t._zod.onattach.push(n=>{let r=n._zod.bag;r.format="ipv4"})}),kv=R("$ZodIPv6",(t,e)=>{e.pattern??(e.pattern=_g),Te.init(t,e),t._zod.onattach.push(n=>{let r=n._zod.bag;r.format="ipv6"}),t._zod.check=n=>{try{new URL(`http://[${n.value}]`)}catch{n.issues.push({code:"invalid_format",format:"ipv6",input:n.value,inst:t,continue:!e.abort})}}}),Av=R("$ZodCIDRv4",(t,e)=>{e.pattern??(e.pattern=Tg),Te.init(t,e)}),Rv=R("$ZodCIDRv6",(t,e)=>{e.pattern??(e.pattern=Sg),Te.init(t,e),t._zod.check=n=>{let[r,o]=n.value.split("/");try{if(!o)throw new Error;let i=Number(o);if(`${i}`!==o)throw new Error;if(i<0||i>128)throw new Error;new URL(`http://[${r}]`)}catch{n.issues.push({code:"invalid_format",format:"cidrv6",input:n.value,inst:t,continue:!e.abort})}}});function Iv(t){if(t==="")return!0;if(t.length%4!==0)return!1;try{return atob(t),!0}catch{return!1}}var Cv=R("$ZodBase64",(t,e)=>{e.pattern??(e.pattern=kg),Te.init(t,e),t._zod.onattach.push(n=>{n._zod.bag.contentEncoding="base64"}),t._zod.check=n=>{Iv(n.value)||n.issues.push({code:"invalid_format",format:"base64",input:n.value,inst:t,continue:!e.abort})}});function L0(t){if(!Ru.test(t))return!1;let e=t.replace(/[-_]/g,r=>r==="-"?"+":"/"),n=e.padEnd(Math.ceil(e.length/4)*4,"=");return Iv(n)}var Nv=R("$ZodBase64URL",(t,e)=>{e.pattern??(e.pattern=Ru),Te.init(t,e),t._zod.onattach.push(n=>{n._zod.bag.contentEncoding="base64url"}),t._zod.check=n=>{L0(n.value)||n.issues.push({code:"invalid_format",format:"base64url",input:n.value,inst:t,continue:!e.abort})}}),Ov=R("$ZodE164",(t,e)=>{e.pattern??(e.pattern=Rg),Te.init(t,e)});function z0(t,e=null){try{let n=t.split(".");if(n.length!==3)return!1;let[r]=n;if(!r)return!1;let o=JSON.parse(atob(r));return!("typ"in o&&o?.typ!=="JWT"||!o.alg||e&&(!("alg"in o)||o.alg!==e))}catch{return!1}}var Mv=R("$ZodJWT",(t,e)=>{Te.init(t,e),t._zod.check=n=>{z0(n.value,e.alg)||n.issues.push({code:"invalid_format",format:"jwt",input:n.value,inst:t,continue:!e.abort})}});var Ou=R("$ZodNumber",(t,e)=>{be.init(t,e),t._zod.pattern=t._zod.bag.pattern??zg,t._zod.parse=(n,r)=>{if(e.coerce)try{n.value=Number(n.value)}catch{}let o=n.value;if(typeof o=="number"&&!Number.isNaN(o)&&Number.isFinite(o))return n;let i=typeof o=="number"?Number.isNaN(o)?"NaN":Number.isFinite(o)?void 0:"Infinity":void 0;return n.issues.push({expected:"number",code:"invalid_type",input:o,inst:t,...i?{received:i}:{}}),n}}),Pv=R("$ZodNumber",(t,e)=>{Gg.init(t,e),Ou.init(t,e)}),Lv=R("$ZodBoolean",(t,e)=>{be.init(t,e),t._zod.pattern=Dg,t._zod.parse=(n,r)=>{if(e.coerce)try{n.value=!!n.value}catch{}let o=n.value;return typeof o=="boolean"||n.issues.push({expected:"boolean",code:"invalid_type",input:o,inst:t}),n}});var zv=R("$ZodAny",(t,e)=>{be.init(t,e),t._zod.parse=n=>n}),Dv=R("$ZodUnknown",(t,e)=>{be.init(t,e),t._zod.parse=n=>n}),$v=R("$ZodNever",(t,e)=>{be.init(t,e),t._zod.parse=(n,r)=>(n.issues.push({expected:"never",code:"invalid_type",input:n.value,inst:t}),n)});function tv(t,e,n){t.issues.length&&e.issues.push(...$t(n,t.issues)),e.value[n]=t.value}var Uv=R("$ZodArray",(t,e)=>{be.init(t,e),t._zod.parse=(n,r)=>{let o=n.value;if(!Array.isArray(o))return n.issues.push({expected:"array",code:"invalid_type",input:o,inst:t}),n;n.value=Array(o.length);let i=[];for(let s=0;s<o.length;s++){let a=o[s],l=e.element._zod.run({value:a,issues:[]},r);l instanceof Promise?i.push(l.then(d=>tv(d,n,s))):tv(l,n,s)}return i.length?Promise.all(i).then(()=>n):n}});function Ns(t,e,n){t.issues.length&&e.issues.push(...$t(n,t.issues)),e.value[n]=t.value}function nv(t,e,n,r){t.issues.length?r[n]===void 0?n in r?e.value[n]=void 0:e.value[n]=t.value:e.issues.push(...$t(n,t.issues)):t.value===void 0?n in r&&(e.value[n]=void 0):e.value[n]=t.value}var Hv=R("$ZodObject",(t,e)=>{be.init(t,e);let n=Mo(()=>{let h=Object.keys(e.shape);for(let m of h)if(!(e.shape[m]instanceof be))throw new Error(`Invalid element at key "${m}": expected a Zod schema`);let p=yu(e.shape);return{shape:e.shape,keys:h,keySet:new Set(h),numKeys:h.length,optionalKeys:new Set(p)}});he(t._zod,"propValues",()=>{let h=e.shape,p={};for(let m in h){let u=h[m]._zod;if(u.values){p[m]??(p[m]=new Set);for(let v of u.values)p[m].add(v)}}return p});let r=h=>{let p=new Cs(["shape","payload","ctx"]),m=n.value,u=T=>{let O=Dn(T);return`shape[${O}]._zod.run({ value: input[${O}], issues: [] }, ctx)`};p.write("const input = payload.value;");let v=Object.create(null),E=0;for(let T of m.keys)v[T]=`key_${E++}`;p.write("const newResult = {}");for(let T of m.keys)if(m.optionalKeys.has(T)){let O=v[T];p.write(`const ${O} = ${u(T)};`);let S=Dn(T);p.write(`
        if (${O}.issues.length) {
          if (input[${S}] === undefined) {
            if (${S} in input) {
              newResult[${S}] = undefined;
            }
          } else {
            payload.issues = payload.issues.concat(
              ${O}.issues.map((iss) => ({
                ...iss,
                path: iss.path ? [${S}, ...iss.path] : [${S}],
              }))
            );
          }
        } else if (${O}.value === undefined) {
          if (${S} in input) newResult[${S}] = undefined;
        } else {
          newResult[${S}] = ${O}.value;
        }
        `)}else{let O=v[T];p.write(`const ${O} = ${u(T)};`),p.write(`
          if (${O}.issues.length) payload.issues = payload.issues.concat(${O}.issues.map(iss => ({
            ...iss,
            path: iss.path ? [${Dn(T)}, ...iss.path] : [${Dn(T)}]
          })));`),p.write(`newResult[${Dn(T)}] = ${O}.value`)}p.write("payload.value = newResult;"),p.write("return payload;");let x=p.compile();return(T,O)=>x(h,T,O)},o,i=Pr,s=!Ts.jitless,l=s&&vu.value,d=e.catchall,c;t._zod.parse=(h,p)=>{c??(c=n.value);let m=h.value;if(!i(m))return h.issues.push({expected:"object",code:"invalid_type",input:m,inst:t}),h;let u=[];if(s&&l&&p?.async===!1&&p.jitless!==!0)o||(o=r(e.shape)),h=o(h,p);else{h.value={};let O=c.shape;for(let S of c.keys){let g=O[S],w=g._zod.run({value:m[S],issues:[]},p),b=g._zod.optin==="optional"&&g._zod.optout==="optional";w instanceof Promise?u.push(w.then(k=>b?nv(k,h,S,m):Ns(k,h,S))):b?nv(w,h,S,m):Ns(w,h,S)}}if(!d)return u.length?Promise.all(u).then(()=>h):h;let v=[],E=c.keySet,x=d._zod,T=x.def.type;for(let O of Object.keys(m)){if(E.has(O))continue;if(T==="never"){v.push(O);continue}let S=x.run({value:m[O],issues:[]},p);S instanceof Promise?u.push(S.then(g=>Ns(g,h,O))):Ns(S,h,O)}return v.length&&h.issues.push({code:"unrecognized_keys",keys:v,input:m,inst:t}),u.length?Promise.all(u).then(()=>h):h}});function rv(t,e,n,r){for(let o of t)if(o.issues.length===0)return e.value=o.value,e;return e.issues.push({code:"invalid_union",input:e.value,inst:n,errors:t.map(o=>o.issues.map(i=>xt(i,r,Je())))}),e}var Mu=R("$ZodUnion",(t,e)=>{be.init(t,e),he(t._zod,"optin",()=>e.options.some(n=>n._zod.optin==="optional")?"optional":void 0),he(t._zod,"optout",()=>e.options.some(n=>n._zod.optout==="optional")?"optional":void 0),he(t._zod,"values",()=>{if(e.options.every(n=>n._zod.values))return new Set(e.options.flatMap(n=>Array.from(n._zod.values)))}),he(t._zod,"pattern",()=>{if(e.options.every(n=>n._zod.pattern)){let n=e.options.map(r=>r._zod.pattern);return new RegExp(`^(${n.map(r=>Lo(r.source)).join("|")})$`)}}),t._zod.parse=(n,r)=>{let o=!1,i=[];for(let s of e.options){let a=s._zod.run({value:n.value,issues:[]},r);if(a instanceof Promise)i.push(a),o=!0;else{if(a.issues.length===0)return a;i.push(a)}}return o?Promise.all(i).then(s=>rv(s,n,t,r)):rv(i,n,t,r)}}),Fv=R("$ZodDiscriminatedUnion",(t,e)=>{Mu.init(t,e);let n=t._zod.parse;he(t._zod,"propValues",()=>{let o={};for(let i of e.options){let s=i._zod.propValues;if(!s||Object.keys(s).length===0)throw new Error(`Invalid discriminated union option at index "${e.options.indexOf(i)}"`);for(let[a,l]of Object.entries(s)){o[a]||(o[a]=new Set);for(let d of l)o[a].add(d)}}return o});let r=Mo(()=>{let o=e.options,i=new Map;for(let s of o){let a=s._zod.propValues[e.discriminator];if(!a||a.size===0)throw new Error(`Invalid discriminated union option at index "${e.options.indexOf(s)}"`);for(let l of a){if(i.has(l))throw new Error(`Duplicate discriminator value "${String(l)}"`);i.set(l,s)}}return i});t._zod.parse=(o,i)=>{let s=o.value;if(!Pr(s))return o.issues.push({code:"invalid_type",expected:"object",input:s,inst:t}),o;let a=r.value.get(s?.[e.discriminator]);return a?a._zod.run(o,i):e.unionFallback?n(o,i):(o.issues.push({code:"invalid_union",errors:[],note:"No matching discriminator",input:s,path:[e.discriminator],inst:t}),o)}}),Gv=R("$ZodIntersection",(t,e)=>{be.init(t,e),t._zod.parse=(n,r)=>{let o=n.value,i=e.left._zod.run({value:o,issues:[]},r),s=e.right._zod.run({value:o,issues:[]},r);return i instanceof Promise||s instanceof Promise?Promise.all([i,s]).then(([l,d])=>ov(n,l,d)):ov(n,i,s)}});function Nu(t,e){if(t===e)return{valid:!0,data:t};if(t instanceof Date&&e instanceof Date&&+t==+e)return{valid:!0,data:t};if(Lr(t)&&Lr(e)){let n=Object.keys(e),r=Object.keys(t).filter(i=>n.indexOf(i)!==-1),o={...t,...e};for(let i of r){let s=Nu(t[i],e[i]);if(!s.valid)return{valid:!1,mergeErrorPath:[i,...s.mergeErrorPath]};o[i]=s.data}return{valid:!0,data:o}}if(Array.isArray(t)&&Array.isArray(e)){if(t.length!==e.length)return{valid:!1,mergeErrorPath:[]};let n=[];for(let r=0;r<t.length;r++){let o=t[r],i=e[r],s=Nu(o,i);if(!s.valid)return{valid:!1,mergeErrorPath:[r,...s.mergeErrorPath]};n.push(s.data)}return{valid:!0,data:n}}return{valid:!1,mergeErrorPath:[]}}function ov(t,e,n){if(e.issues.length&&t.issues.push(...e.issues),n.issues.length&&t.issues.push(...n.issues),$n(t))return t;let r=Nu(e.value,n.value);if(!r.valid)throw new Error(`Unmergable intersection. Error path: ${JSON.stringify(r.mergeErrorPath)}`);return t.value=r.data,t}var Bv=R("$ZodRecord",(t,e)=>{be.init(t,e),t._zod.parse=(n,r)=>{let o=n.value;if(!Lr(o))return n.issues.push({expected:"record",code:"invalid_type",input:o,inst:t}),n;let i=[];if(e.keyType._zod.values){let s=e.keyType._zod.values;n.value={};for(let l of s)if(typeof l=="string"||typeof l=="number"||typeof l=="symbol"){let d=e.valueType._zod.run({value:o[l],issues:[]},r);d instanceof Promise?i.push(d.then(c=>{c.issues.length&&n.issues.push(...$t(l,c.issues)),n.value[l]=c.value})):(d.issues.length&&n.issues.push(...$t(l,d.issues)),n.value[l]=d.value)}let a;for(let l in o)s.has(l)||(a=a??[],a.push(l));a&&a.length>0&&n.issues.push({code:"unrecognized_keys",input:o,inst:t,keys:a})}else{n.value={};for(let s of Reflect.ownKeys(o)){if(s==="__proto__")continue;let a=e.keyType._zod.run({value:s,issues:[]},r);if(a instanceof Promise)throw new Error("Async schemas not supported in object keys currently");if(a.issues.length){n.issues.push({origin:"record",code:"invalid_key",issues:a.issues.map(d=>xt(d,r,Je())),input:s,path:[s],inst:t}),n.value[a.value]=a.value;continue}let l=e.valueType._zod.run({value:o[s],issues:[]},r);l instanceof Promise?i.push(l.then(d=>{d.issues.length&&n.issues.push(...$t(s,d.issues)),n.value[a.value]=d.value})):(l.issues.length&&n.issues.push(...$t(s,l.issues)),n.value[a.value]=l.value)}}return i.length?Promise.all(i).then(()=>n):n}});var Vv=R("$ZodEnum",(t,e)=>{be.init(t,e);let n=pu(e.entries);t._zod.values=new Set(n),t._zod.pattern=new RegExp(`^(${n.filter(r=>bu.has(typeof r)).map(r=>typeof r=="string"?an(r):r.toString()).join("|")})$`),t._zod.parse=(r,o)=>{let i=r.value;return t._zod.values.has(i)||r.issues.push({code:"invalid_value",values:n,input:i,inst:t}),r}}),jv=R("$ZodLiteral",(t,e)=>{be.init(t,e),t._zod.values=new Set(e.values),t._zod.pattern=new RegExp(`^(${e.values.map(n=>typeof n=="string"?an(n):n?n.toString():String(n)).join("|")})$`),t._zod.parse=(n,r)=>{let o=n.value;return t._zod.values.has(o)||n.issues.push({code:"invalid_value",values:e.values,input:o,inst:t}),n}});var Zv=R("$ZodTransform",(t,e)=>{be.init(t,e),t._zod.parse=(n,r)=>{let o=e.transform(n.value,n);if(r.async)return(o instanceof Promise?o:Promise.resolve(o)).then(s=>(n.value=s,n));if(o instanceof Promise)throw new Jt;return n.value=o,n}}),Wv=R("$ZodOptional",(t,e)=>{be.init(t,e),t._zod.optin="optional",t._zod.optout="optional",he(t._zod,"values",()=>e.innerType._zod.values?new Set([...e.innerType._zod.values,void 0]):void 0),he(t._zod,"pattern",()=>{let n=e.innerType._zod.pattern;return n?new RegExp(`^(${Lo(n.source)})?$`):void 0}),t._zod.parse=(n,r)=>e.innerType._zod.optin==="optional"?e.innerType._zod.run(n,r):n.value===void 0?n:e.innerType._zod.run(n,r)}),qv=R("$ZodNullable",(t,e)=>{be.init(t,e),he(t._zod,"optin",()=>e.innerType._zod.optin),he(t._zod,"optout",()=>e.innerType._zod.optout),he(t._zod,"pattern",()=>{let n=e.innerType._zod.pattern;return n?new RegExp(`^(${Lo(n.source)}|null)$`):void 0}),he(t._zod,"values",()=>e.innerType._zod.values?new Set([...e.innerType._zod.values,null]):void 0),t._zod.parse=(n,r)=>n.value===null?n:e.innerType._zod.run(n,r)}),Yv=R("$ZodDefault",(t,e)=>{be.init(t,e),t._zod.optin="optional",he(t._zod,"values",()=>e.innerType._zod.values),t._zod.parse=(n,r)=>{if(n.value===void 0)return n.value=e.defaultValue,n;let o=e.innerType._zod.run(n,r);return o instanceof Promise?o.then(i=>iv(i,e)):iv(o,e)}});function iv(t,e){return t.value===void 0&&(t.value=e.defaultValue),t}var Kv=R("$ZodPrefault",(t,e)=>{be.init(t,e),t._zod.optin="optional",he(t._zod,"values",()=>e.innerType._zod.values),t._zod.parse=(n,r)=>(n.value===void 0&&(n.value=e.defaultValue),e.innerType._zod.run(n,r))}),Xv=R("$ZodNonOptional",(t,e)=>{be.init(t,e),he(t._zod,"values",()=>{let n=e.innerType._zod.values;return n?new Set([...n].filter(r=>r!==void 0)):void 0}),t._zod.parse=(n,r)=>{let o=e.innerType._zod.run(n,r);return o instanceof Promise?o.then(i=>sv(i,t)):sv(o,t)}});function sv(t,e){return!t.issues.length&&t.value===void 0&&t.issues.push({code:"invalid_type",expected:"nonoptional",input:t.value,inst:e}),t}var Jv=R("$ZodCatch",(t,e)=>{be.init(t,e),t._zod.optin="optional",he(t._zod,"optout",()=>e.innerType._zod.optout),he(t._zod,"values",()=>e.innerType._zod.values),t._zod.parse=(n,r)=>{let o=e.innerType._zod.run(n,r);return o instanceof Promise?o.then(i=>(n.value=i.value,i.issues.length&&(n.value=e.catchValue({...n,error:{issues:i.issues.map(s=>xt(s,r,Je()))},input:n.value}),n.issues=[]),n)):(n.value=o.value,o.issues.length&&(n.value=e.catchValue({...n,error:{issues:o.issues.map(i=>xt(i,r,Je()))},input:n.value}),n.issues=[]),n)}});var Qv=R("$ZodPipe",(t,e)=>{be.init(t,e),he(t._zod,"values",()=>e.in._zod.values),he(t._zod,"optin",()=>e.in._zod.optin),he(t._zod,"optout",()=>e.out._zod.optout),t._zod.parse=(n,r)=>{let o=e.in._zod.run(n,r);return o instanceof Promise?o.then(i=>av(i,e,r)):av(o,e,r)}});function av(t,e,n){return $n(t)?t:e.out._zod.run({value:t.value,issues:t.issues},n)}var eb=R("$ZodReadonly",(t,e)=>{be.init(t,e),he(t._zod,"propValues",()=>e.innerType._zod.propValues),he(t._zod,"values",()=>e.innerType._zod.values),he(t._zod,"optin",()=>e.innerType._zod.optin),he(t._zod,"optout",()=>e.innerType._zod.optout),t._zod.parse=(n,r)=>{let o=e.innerType._zod.run(n,r);return o instanceof Promise?o.then(lv):lv(o)}});function lv(t){return t.value=Object.freeze(t.value),t}var tb=R("$ZodLazy",(t,e)=>{be.init(t,e),he(t._zod,"innerType",()=>e.getter()),he(t._zod,"pattern",()=>t._zod.innerType._zod.pattern),he(t._zod,"propValues",()=>t._zod.innerType._zod.propValues),he(t._zod,"optin",()=>t._zod.innerType._zod.optin),he(t._zod,"optout",()=>t._zod.innerType._zod.optout),t._zod.parse=(n,r)=>t._zod.innerType._zod.run(n,r)}),nb=R("$ZodCustom",(t,e)=>{tt.init(t,e),be.init(t,e),t._zod.parse=(n,r)=>n,t._zod.check=n=>{let r=n.value,o=e.fn(r);if(o instanceof Promise)return o.then(i=>dv(i,n,r,t));dv(o,n,r,t)}});function dv(t,e,n,r){if(!t){let o={code:"custom",input:n,inst:r,path:[...r._zod.def.path??[]],continue:!r._zod.def.abort};r._zod.def.params&&(o.params=r._zod.def.params),e.issues.push(Eu(o))}}var D0=t=>{let e=typeof t;switch(e){case"number":return Number.isNaN(t)?"NaN":"number";case"object":{if(Array.isArray(t))return"array";if(t===null)return"null";if(Object.getPrototypeOf(t)!==Object.prototype&&t.constructor)return t.constructor.name}}return e},$0=()=>{let t={string:{unit:"characters",verb:"to have"},file:{unit:"bytes",verb:"to have"},array:{unit:"items",verb:"to have"},set:{unit:"items",verb:"to have"}};function e(r){return t[r]??null}let n={regex:"input",email:"email address",url:"URL",emoji:"emoji",uuid:"UUID",uuidv4:"UUIDv4",uuidv6:"UUIDv6",nanoid:"nanoid",guid:"GUID",cuid:"cuid",cuid2:"cuid2",ulid:"ULID",xid:"XID",ksuid:"KSUID",datetime:"ISO datetime",date:"ISO date",time:"ISO time",duration:"ISO duration",ipv4:"IPv4 address",ipv6:"IPv6 address",cidrv4:"IPv4 range",cidrv6:"IPv6 range",base64:"base64-encoded string",base64url:"base64url-encoded string",json_string:"JSON string",e164:"E.164 number",jwt:"JWT",template_literal:"input"};return r=>{switch(r.code){case"invalid_type":return`Invalid input: expected ${r.expected}, received ${D0(r.input)}`;case"invalid_value":return r.values.length===1?`Invalid input: expected ${As(r.values[0])}`:`Invalid option: expected one of ${Ss(r.values,"|")}`;case"too_big":{let o=r.inclusive?"<=":"<",i=e(r.origin);return i?`Too big: expected ${r.origin??"value"} to have ${o}${r.maximum.toString()} ${i.unit??"elements"}`:`Too big: expected ${r.origin??"value"} to be ${o}${r.maximum.toString()}`}case"too_small":{let o=r.inclusive?">=":">",i=e(r.origin);return i?`Too small: expected ${r.origin} to have ${o}${r.minimum.toString()} ${i.unit}`:`Too small: expected ${r.origin} to be ${o}${r.minimum.toString()}`}case"invalid_format":{let o=r;return o.format==="starts_with"?`Invalid string: must start with "${o.prefix}"`:o.format==="ends_with"?`Invalid string: must end with "${o.suffix}"`:o.format==="includes"?`Invalid string: must include "${o.includes}"`:o.format==="regex"?`Invalid string: must match pattern ${o.pattern}`:`Invalid ${n[o.format]??r.format}`}case"not_multiple_of":return`Invalid number: must be a multiple of ${r.divisor}`;case"unrecognized_keys":return`Unrecognized key${r.keys.length>1?"s":""}: ${Ss(r.keys,", ")}`;case"invalid_key":return`Invalid key in ${r.origin}`;case"invalid_union":return"Invalid input";case"invalid_element":return`Invalid value in ${r.origin}`;default:return"Invalid input"}}};function zr(){return{localeError:$0()}}var Pu=class{constructor(){this._map=new Map,this._idmap=new Map}add(e,...n){let r=n[0];if(this._map.set(e,r),r&&typeof r=="object"&&"id"in r){if(this._idmap.has(r.id))throw new Error(`ID ${r.id} already exists in the registry`);this._idmap.set(r.id,e)}return this}clear(){return this._map=new Map,this._idmap=new Map,this}remove(e){let n=this._map.get(e);return n&&typeof n=="object"&&"id"in n&&this._idmap.delete(n.id),this._map.delete(e),this}get(e){let n=e._zod.parent;if(n){let r={...this.get(n)??{}};return delete r.id,{...r,...this._map.get(e)}}return this._map.get(e)}has(e){return this._map.has(e)}};function rb(){return new Pu}var Dr=rb();function ob(t,e){return new t({type:"string",...Z(e)})}function ib(t,e){return new t({type:"string",format:"email",check:"string_format",abort:!1,...Z(e)})}function Lu(t,e){return new t({type:"string",format:"guid",check:"string_format",abort:!1,...Z(e)})}function sb(t,e){return new t({type:"string",format:"uuid",check:"string_format",abort:!1,...Z(e)})}function ab(t,e){return new t({type:"string",format:"uuid",check:"string_format",abort:!1,version:"v4",...Z(e)})}function lb(t,e){return new t({type:"string",format:"uuid",check:"string_format",abort:!1,version:"v6",...Z(e)})}function db(t,e){return new t({type:"string",format:"uuid",check:"string_format",abort:!1,version:"v7",...Z(e)})}function cb(t,e){return new t({type:"string",format:"url",check:"string_format",abort:!1,...Z(e)})}function ub(t,e){return new t({type:"string",format:"emoji",check:"string_format",abort:!1,...Z(e)})}function hb(t,e){return new t({type:"string",format:"nanoid",check:"string_format",abort:!1,...Z(e)})}function pb(t,e){return new t({type:"string",format:"cuid",check:"string_format",abort:!1,...Z(e)})}function fb(t,e){return new t({type:"string",format:"cuid2",check:"string_format",abort:!1,...Z(e)})}function mb(t,e){return new t({type:"string",format:"ulid",check:"string_format",abort:!1,...Z(e)})}function gb(t,e){return new t({type:"string",format:"xid",check:"string_format",abort:!1,...Z(e)})}function vb(t,e){return new t({type:"string",format:"ksuid",check:"string_format",abort:!1,...Z(e)})}function bb(t,e){return new t({type:"string",format:"ipv4",check:"string_format",abort:!1,...Z(e)})}function yb(t,e){return new t({type:"string",format:"ipv6",check:"string_format",abort:!1,...Z(e)})}function wb(t,e){return new t({type:"string",format:"cidrv4",check:"string_format",abort:!1,...Z(e)})}function Eb(t,e){return new t({type:"string",format:"cidrv6",check:"string_format",abort:!1,...Z(e)})}function xb(t,e){return new t({type:"string",format:"base64",check:"string_format",abort:!1,...Z(e)})}function _b(t,e){return new t({type:"string",format:"base64url",check:"string_format",abort:!1,...Z(e)})}function Tb(t,e){return new t({type:"string",format:"e164",check:"string_format",abort:!1,...Z(e)})}function Sb(t,e){return new t({type:"string",format:"jwt",check:"string_format",abort:!1,...Z(e)})}function kb(t,e){return new t({type:"string",format:"datetime",check:"string_format",offset:!1,local:!1,precision:null,...Z(e)})}function Ab(t,e){return new t({type:"string",format:"date",check:"string_format",...Z(e)})}function Rb(t,e){return new t({type:"string",format:"time",check:"string_format",precision:null,...Z(e)})}function Ib(t,e){return new t({type:"string",format:"duration",check:"string_format",...Z(e)})}function Cb(t,e){return new t({type:"number",check:"number_format",abort:!1,format:"safeint",...Z(e)})}function Nb(t,e){return new t({type:"boolean",...Z(e)})}function Ob(t){return new t({type:"any"})}function Mb(t){return new t({type:"unknown"})}function Pb(t,e){return new t({type:"never",...Z(e)})}function Ms(t,e){return new Iu({check:"less_than",...Z(e),value:t,inclusive:!1})}function $o(t,e){return new Iu({check:"less_than",...Z(e),value:t,inclusive:!0})}function Ps(t,e){return new Cu({check:"greater_than",...Z(e),value:t,inclusive:!1})}function Uo(t,e){return new Cu({check:"greater_than",...Z(e),value:t,inclusive:!0})}function Ls(t,e){return new Fg({check:"multiple_of",...Z(e),value:t})}function zs(t,e){return new Bg({check:"max_length",...Z(e),maximum:t})}function $r(t,e){return new Vg({check:"min_length",...Z(e),minimum:t})}function Ds(t,e){return new jg({check:"length_equals",...Z(e),length:t})}function zu(t,e){return new Zg({check:"string_format",format:"regex",...Z(e),pattern:t})}function Du(t){return new Wg({check:"string_format",format:"lowercase",...Z(t)})}function $u(t){return new qg({check:"string_format",format:"uppercase",...Z(t)})}function Uu(t,e){return new Yg({check:"string_format",format:"includes",...Z(e),includes:t})}function Hu(t,e){return new Kg({check:"string_format",format:"starts_with",...Z(e),prefix:t})}function Fu(t,e){return new Xg({check:"string_format",format:"ends_with",...Z(e),suffix:t})}function Un(t){return new Jg({check:"overwrite",tx:t})}function Gu(t){return Un(e=>e.normalize(t))}function Bu(){return Un(t=>t.trim())}function Vu(){return Un(t=>t.toLowerCase())}function ju(){return Un(t=>t.toUpperCase())}function Lb(t,e,n){return new t({type:"array",element:e,...Z(n)})}function zb(t,e,n){let r=Z(n);return r.abort??(r.abort=!0),new t({type:"custom",check:"custom",fn:e,...r})}function Db(t,e,n){return new t({type:"custom",check:"custom",fn:e,...Z(n)})}var j0=R("ZodISODateTime",(t,e)=>{Ev.init(t,e),Ae.init(t,e)});function $b(t){return kb(j0,t)}var Z0=R("ZodISODate",(t,e)=>{xv.init(t,e),Ae.init(t,e)});function Ub(t){return Ab(Z0,t)}var W0=R("ZodISOTime",(t,e)=>{_v.init(t,e),Ae.init(t,e)});function Hb(t){return Rb(W0,t)}var q0=R("ZodISODuration",(t,e)=>{Tv.init(t,e),Ae.init(t,e)});function Fb(t){return Ib(q0,t)}var Bb=(t,e)=>{Rs.init(t,e),t.name="ZodError",Object.defineProperties(t,{format:{value:n=>Tu(t,n)},flatten:{value:n=>_u(t,n)},addIssue:{value:n=>t.issues.push(n)},addIssues:{value:n=>t.issues.push(...n)},isEmpty:{get(){return t.issues.length===0}}})},G$=R("ZodError",Bb),Fo=R("ZodError",Bb,{Parent:Error});var Vb=lg(Fo),jb=dg(Fo),Zb=Su(Fo),Wb=ku(Fo);var Re=R("ZodType",(t,e)=>(be.init(t,e),t.def=e,Object.defineProperty(t,"_def",{value:e}),t.check=(...n)=>t.clone({...e,checks:[...e.checks??[],...n.map(r=>typeof r=="function"?{_zod:{check:r,def:{check:"custom"},onattach:[]}}:r)]}),t.clone=(n,r)=>Et(t,n,r),t.brand=()=>t,t.register=((n,r)=>(n.add(t,r),t)),t.parse=(n,r)=>Vb(t,n,r,{callee:t.parse}),t.safeParse=(n,r)=>Zb(t,n,r),t.parseAsync=async(n,r)=>jb(t,n,r,{callee:t.parseAsync}),t.safeParseAsync=async(n,r)=>Wb(t,n,r),t.spa=t.safeParseAsync,t.refine=(n,r)=>t.check(Pk(n,r)),t.superRefine=n=>t.check(Lk(n)),t.overwrite=n=>t.check(Un(n)),t.optional=()=>Yb(t),t.nullable=()=>Kb(t),t.nullish=()=>Yb(Kb(t)),t.nonoptional=n=>Ck(t,n),t.array=()=>$e(t),t.or=n=>Go([t,n]),t.and=n=>Tk(t,n),t.transform=n=>Xb(t,kk(n)),t.default=n=>Ak(t,n),t.prefault=n=>Ik(t,n),t.catch=n=>Nk(t,n),t.pipe=n=>Xb(t,n),t.readonly=()=>Ok(t),t.describe=n=>{let r=t.clone();return Dr.add(r,{description:n}),r},Object.defineProperty(t,"description",{get(){return Dr.get(t)?.description},configurable:!0}),t.meta=(...n)=>{if(n.length===0)return Dr.get(t);let r=t.clone();return Dr.add(r,n[0]),r},t.isOptional=()=>t.safeParse(void 0).success,t.isNullable=()=>t.safeParse(null).success,t)),Jb=R("_ZodString",(t,e)=>{Os.init(t,e),Re.init(t,e);let n=t._zod.bag;t.format=n.format??null,t.minLength=n.minimum??null,t.maxLength=n.maximum??null,t.regex=(...r)=>t.check(zu(...r)),t.includes=(...r)=>t.check(Uu(...r)),t.startsWith=(...r)=>t.check(Hu(...r)),t.endsWith=(...r)=>t.check(Fu(...r)),t.min=(...r)=>t.check($r(...r)),t.max=(...r)=>t.check(zs(...r)),t.length=(...r)=>t.check(Ds(...r)),t.nonempty=(...r)=>t.check($r(1,...r)),t.lowercase=r=>t.check(Du(r)),t.uppercase=r=>t.check($u(r)),t.trim=()=>t.check(Bu()),t.normalize=(...r)=>t.check(Gu(...r)),t.toLowerCase=()=>t.check(Vu()),t.toUpperCase=()=>t.check(ju())}),X0=R("ZodString",(t,e)=>{Os.init(t,e),Jb.init(t,e),t.email=n=>t.check(ib(J0,n)),t.url=n=>t.check(cb(Q0,n)),t.jwt=n=>t.check(Sb(fk,n)),t.emoji=n=>t.check(ub(ek,n)),t.guid=n=>t.check(Lu(qb,n)),t.uuid=n=>t.check(sb($s,n)),t.uuidv4=n=>t.check(ab($s,n)),t.uuidv6=n=>t.check(lb($s,n)),t.uuidv7=n=>t.check(db($s,n)),t.nanoid=n=>t.check(hb(tk,n)),t.guid=n=>t.check(Lu(qb,n)),t.cuid=n=>t.check(pb(nk,n)),t.cuid2=n=>t.check(fb(rk,n)),t.ulid=n=>t.check(mb(ok,n)),t.base64=n=>t.check(xb(uk,n)),t.base64url=n=>t.check(_b(hk,n)),t.xid=n=>t.check(gb(ik,n)),t.ksuid=n=>t.check(vb(sk,n)),t.ipv4=n=>t.check(bb(ak,n)),t.ipv6=n=>t.check(yb(lk,n)),t.cidrv4=n=>t.check(wb(dk,n)),t.cidrv6=n=>t.check(Eb(ck,n)),t.e164=n=>t.check(Tb(pk,n)),t.datetime=n=>t.check($b(n)),t.date=n=>t.check(Ub(n)),t.time=n=>t.check(Hb(n)),t.duration=n=>t.check(Fb(n))});function A(t){return ob(X0,t)}var Ae=R("ZodStringFormat",(t,e)=>{Te.init(t,e),Jb.init(t,e)}),J0=R("ZodEmail",(t,e)=>{hv.init(t,e),Ae.init(t,e)});var qb=R("ZodGUID",(t,e)=>{cv.init(t,e),Ae.init(t,e)});var $s=R("ZodUUID",(t,e)=>{uv.init(t,e),Ae.init(t,e)});var Q0=R("ZodURL",(t,e)=>{pv.init(t,e),Ae.init(t,e)});var ek=R("ZodEmoji",(t,e)=>{fv.init(t,e),Ae.init(t,e)});var tk=R("ZodNanoID",(t,e)=>{mv.init(t,e),Ae.init(t,e)});var nk=R("ZodCUID",(t,e)=>{gv.init(t,e),Ae.init(t,e)});var rk=R("ZodCUID2",(t,e)=>{vv.init(t,e),Ae.init(t,e)});var ok=R("ZodULID",(t,e)=>{bv.init(t,e),Ae.init(t,e)});var ik=R("ZodXID",(t,e)=>{yv.init(t,e),Ae.init(t,e)});var sk=R("ZodKSUID",(t,e)=>{wv.init(t,e),Ae.init(t,e)});var ak=R("ZodIPv4",(t,e)=>{Sv.init(t,e),Ae.init(t,e)});var lk=R("ZodIPv6",(t,e)=>{kv.init(t,e),Ae.init(t,e)});var dk=R("ZodCIDRv4",(t,e)=>{Av.init(t,e),Ae.init(t,e)});var ck=R("ZodCIDRv6",(t,e)=>{Rv.init(t,e),Ae.init(t,e)});var uk=R("ZodBase64",(t,e)=>{Cv.init(t,e),Ae.init(t,e)});var hk=R("ZodBase64URL",(t,e)=>{Nv.init(t,e),Ae.init(t,e)});var pk=R("ZodE164",(t,e)=>{Ov.init(t,e),Ae.init(t,e)});var fk=R("ZodJWT",(t,e)=>{Mv.init(t,e),Ae.init(t,e)});var mk=R("ZodNumber",(t,e)=>{Ou.init(t,e),Re.init(t,e),t.gt=(r,o)=>t.check(Ps(r,o)),t.gte=(r,o)=>t.check(Uo(r,o)),t.min=(r,o)=>t.check(Uo(r,o)),t.lt=(r,o)=>t.check(Ms(r,o)),t.lte=(r,o)=>t.check($o(r,o)),t.max=(r,o)=>t.check($o(r,o)),t.int=r=>t.check(J(r)),t.safe=r=>t.check(J(r)),t.positive=r=>t.check(Ps(0,r)),t.nonnegative=r=>t.check(Uo(0,r)),t.negative=r=>t.check(Ms(0,r)),t.nonpositive=r=>t.check($o(0,r)),t.multipleOf=(r,o)=>t.check(Ls(r,o)),t.step=(r,o)=>t.check(Ls(r,o)),t.finite=()=>t;let n=t._zod.bag;t.minValue=Math.max(n.minimum??Number.NEGATIVE_INFINITY,n.exclusiveMinimum??Number.NEGATIVE_INFINITY)??null,t.maxValue=Math.min(n.maximum??Number.POSITIVE_INFINITY,n.exclusiveMaximum??Number.POSITIVE_INFINITY)??null,t.isInt=(n.format??"").includes("int")||Number.isSafeInteger(n.multipleOf??.5),t.isFinite=!0,t.format=n.format??null});var gk=R("ZodNumberFormat",(t,e)=>{Pv.init(t,e),mk.init(t,e)});function J(t){return Cb(gk,t)}var vk=R("ZodBoolean",(t,e)=>{Lv.init(t,e),Re.init(t,e)});function ie(t){return Nb(vk,t)}var bk=R("ZodAny",(t,e)=>{zv.init(t,e),Re.init(t,e)});function W(){return Ob(bk)}var yk=R("ZodUnknown",(t,e)=>{Dv.init(t,e),Re.init(t,e)});function Zu(){return Mb(yk)}var wk=R("ZodNever",(t,e)=>{$v.init(t,e),Re.init(t,e)});function Ek(t){return Pb(wk,t)}var Us=R("ZodArray",(t,e)=>{Uv.init(t,e),Re.init(t,e),t.element=e.element,t.min=(n,r)=>t.check($r(n,r)),t.nonempty=n=>t.check($r(1,n)),t.max=(n,r)=>t.check(zs(n,r)),t.length=(n,r)=>t.check(Ds(n,r)),t.unwrap=()=>t.element});function $e(t,e){return Lb(Us,t,e)}var Ur=R("ZodObject",(t,e)=>{Hv.init(t,e),Re.init(t,e),fe.defineLazy(t,"shape",()=>e.shape),t.keyof=()=>Hn(Object.keys(t._zod.def.shape)),t.catchall=n=>t.clone({...t._zod.def,catchall:n}),t.passthrough=()=>t.clone({...t._zod.def,catchall:Zu()}),t.loose=()=>t.clone({...t._zod.def,catchall:Zu()}),t.strict=()=>t.clone({...t._zod.def,catchall:Ek()}),t.strip=()=>t.clone({...t._zod.def,catchall:void 0}),t.extend=n=>fe.extend(t,n),t.merge=n=>fe.merge(t,n),t.pick=n=>fe.pick(t,n),t.omit=n=>fe.omit(t,n),t.partial=(...n)=>fe.partial(Fs,t,n[0]),t.required=(...n)=>fe.required(ey,t,n[0])});function $(t,e){return new Ur({type:"object",get shape(){return fe.assignProp(this,"shape",{...t}),this.shape},catchall:Zu(),...fe.normalizeParams(e)})}var Hs=R("ZodUnion",(t,e)=>{Mu.init(t,e),Re.init(t,e),t.options=e.options});function Go(t,e){return new Hs({type:"union",options:t,...fe.normalizeParams(e)})}var xk=R("ZodDiscriminatedUnion",(t,e)=>{Hs.init(t,e),Fv.init(t,e)});function ln(t,e,n){return new xk({type:"union",options:e,discriminator:t,...fe.normalizeParams(n)})}var _k=R("ZodIntersection",(t,e)=>{Gv.init(t,e),Re.init(t,e)});function Tk(t,e){return new _k({type:"intersection",left:t,right:e})}var Qb=R("ZodRecord",(t,e)=>{Bv.init(t,e),Re.init(t,e),t.keyType=e.keyType,t.valueType=e.valueType});var Wu=R("ZodEnum",(t,e)=>{Vv.init(t,e),Re.init(t,e),t.enum=e.entries,t.options=Object.values(e.entries);let n=new Set(Object.keys(e.entries));t.extract=(r,o)=>{let i={};for(let s of r)if(n.has(s))i[s]=e.entries[s];else throw new Error(`Key ${s} not found in enum`);return new Wu({...e,checks:[],...fe.normalizeParams(o),entries:i})},t.exclude=(r,o)=>{let i={...e.entries};for(let s of r)if(n.has(s))delete i[s];else throw new Error(`Key ${s} not found in enum`);return new Wu({...e,checks:[],...fe.normalizeParams(o),entries:i})}});function Hn(t,e){let n=Array.isArray(t)?Object.fromEntries(t.map(r=>[r,r])):t;return new Wu({type:"enum",entries:n,...fe.normalizeParams(e)})}var qu=R("ZodLiteral",(t,e)=>{jv.init(t,e),Re.init(t,e),t.values=new Set(e.values),Object.defineProperty(t,"value",{get(){if(e.values.length>1)throw new Error("This schema contains multiple valid literal values. Use `.values` instead.");return e.values[0]}})});function G(t,e){return new qu({type:"literal",values:Array.isArray(t)?t:[t],...fe.normalizeParams(e)})}var Sk=R("ZodTransform",(t,e)=>{Zv.init(t,e),Re.init(t,e),t._zod.parse=(n,r)=>{n.addIssue=i=>{if(typeof i=="string")n.issues.push(fe.issue(i,n.value,e));else{let s=i;s.fatal&&(s.continue=!1),s.code??(s.code="custom"),s.input??(s.input=n.value),s.inst??(s.inst=t),s.continue??(s.continue=!0),n.issues.push(fe.issue(s))}};let o=e.transform(n.value,n);return o instanceof Promise?o.then(i=>(n.value=i,n)):(n.value=o,n)}});function kk(t){return new Sk({type:"transform",transform:t})}var Fs=R("ZodOptional",(t,e)=>{Wv.init(t,e),Re.init(t,e),t.unwrap=()=>t._zod.def.innerType});function Yb(t){return new Fs({type:"optional",innerType:t})}var Yu=R("ZodNullable",(t,e)=>{qv.init(t,e),Re.init(t,e),t.unwrap=()=>t._zod.def.innerType});function Kb(t){return new Yu({type:"nullable",innerType:t})}var Ku=R("ZodDefault",(t,e)=>{Yv.init(t,e),Re.init(t,e),t.unwrap=()=>t._zod.def.innerType,t.removeDefault=t.unwrap});function Ak(t,e){return new Ku({type:"default",innerType:t,get defaultValue(){return typeof e=="function"?e():e}})}var Rk=R("ZodPrefault",(t,e)=>{Kv.init(t,e),Re.init(t,e),t.unwrap=()=>t._zod.def.innerType});function Ik(t,e){return new Rk({type:"prefault",innerType:t,get defaultValue(){return typeof e=="function"?e():e}})}var ey=R("ZodNonOptional",(t,e)=>{Xv.init(t,e),Re.init(t,e),t.unwrap=()=>t._zod.def.innerType});function Ck(t,e){return new ey({type:"nonoptional",innerType:t,...fe.normalizeParams(e)})}var Xu=R("ZodCatch",(t,e)=>{Jv.init(t,e),Re.init(t,e),t.unwrap=()=>t._zod.def.innerType,t.removeCatch=t.unwrap});function Nk(t,e){return new Xu({type:"catch",innerType:t,catchValue:typeof e=="function"?e:()=>e})}var Ju=R("ZodPipe",(t,e)=>{Qv.init(t,e),Re.init(t,e),t.in=e.in,t.out=e.out});function Xb(t,e){return new Ju({type:"pipe",in:t,out:e})}var Qu=R("ZodReadonly",(t,e)=>{eb.init(t,e),Re.init(t,e)});function Ok(t){return new Qu({type:"readonly",innerType:t})}var ty=R("ZodLazy",(t,e)=>{tb.init(t,e),Re.init(t,e),t.unwrap=()=>t._zod.def.getter()});var ny=R("ZodCustom",(t,e)=>{nb.init(t,e),Re.init(t,e)});function Mk(t){let e=new tt({check:"custom"});return e._zod.check=t,e}function Hr(t,e){return zb(ny,t??(()=>!0),e)}function Pk(t,e={}){return Db(ny,t,e)}function Lk(t){let e=Mk(n=>(n.addIssue=r=>{if(typeof r=="string")n.issues.push(fe.issue(r,n.value,e._zod.def));else{let o=r;o.fatal&&(o.continue=!1),o.code??(o.code="custom"),o.input??(o.input=n.value),o.inst??(o.inst=e),o.continue??(o.continue=!e._zod.def.abort),n.issues.push(fe.issue(o))}},t(n.value,n)));return e}Je(zr());var Dk=Hn(y),Y=Hr(t=>typeof t=="object"&&t!==null&&!Array.isArray(t)),oe=A(),ry=Hn(["developer","system","assistant","user"]),$k=$({type:G(y.TEXT_MESSAGE_START),timestamp:J().min(-9007199254740991).max(9007199254740991).optional(),rawEvent:W().refine(t=>t!==null).optional(),metadata:Y.optional(),subagentRunId:oe.optional(),messageId:A(),role:ry.optional(),name:A().optional()}),Uk=$({type:G(y.TEXT_MESSAGE_CONTENT),timestamp:J().min(-9007199254740991).max(9007199254740991).optional(),rawEvent:W().refine(t=>t!==null).optional(),metadata:Y.optional(),subagentRunId:oe.optional(),messageId:A(),delta:A()}),Hk=$({type:G(y.TEXT_MESSAGE_END),timestamp:J().min(-9007199254740991).max(9007199254740991).optional(),rawEvent:W().refine(t=>t!==null).optional(),metadata:Y.optional(),subagentRunId:oe.optional(),messageId:A()}),eh=$({type:G(y.TEXT_MESSAGE_CHUNK),timestamp:J().min(-9007199254740991).max(9007199254740991).optional(),rawEvent:W().refine(t=>t!==null).optional(),metadata:Y.optional(),subagentRunId:oe.optional(),messageId:A().optional(),role:ry.optional(),delta:A().optional(),name:A().optional()}),Fk=$({type:G(y.TOOL_CALL_START),timestamp:J().min(-9007199254740991).max(9007199254740991).optional(),rawEvent:W().refine(t=>t!==null).optional(),metadata:Y.optional(),subagentRunId:oe.optional(),toolCallId:A(),toolCallName:A(),parentMessageId:A().optional()}),Gk=$({type:G(y.TOOL_CALL_ARGS),timestamp:J().min(-9007199254740991).max(9007199254740991).optional(),rawEvent:W().refine(t=>t!==null).optional(),metadata:Y.optional(),subagentRunId:oe.optional(),toolCallId:A(),delta:A()}),Bk=$({type:G(y.TOOL_CALL_END),timestamp:J().min(-9007199254740991).max(9007199254740991).optional(),rawEvent:W().refine(t=>t!==null).optional(),metadata:Y.optional(),subagentRunId:oe.optional(),toolCallId:A()}),th=$({type:G(y.TOOL_CALL_CHUNK),timestamp:J().min(-9007199254740991).max(9007199254740991).optional(),rawEvent:W().refine(t=>t!==null).optional(),metadata:Y.optional(),subagentRunId:oe.optional(),toolCallId:A().optional(),toolCallName:A().optional(),parentMessageId:A().optional(),delta:A().optional()}),Vk=$({type:G("text"),id:A().optional(),text:A(),metadata:W().refine(t=>t!==null).optional()}),jk=$({type:G("data"),value:A(),mimeType:A()}),Zk=$({type:G("url"),value:A(),mimeType:A().optional()}),Wk=$({type:G("file"),value:A(),provider:A().optional(),mimeType:A().optional()}),Gs=ln("type",[jk,Zk,Wk]),qk=$({type:G("image"),id:A().optional(),source:Gs,metadata:W().refine(t=>t!==null).optional()}),Yk=$({type:G("audio"),id:A().optional(),source:Gs,metadata:W().refine(t=>t!==null).optional()}),Kk=$({type:G("video"),id:A().optional(),source:Gs,metadata:W().refine(t=>t!==null).optional()}),Xk=$({type:G("document"),id:A().optional(),source:Gs,metadata:W().refine(t=>t!==null).optional()}),nh=ln("type",[Vk,qk,Yk,Kk,Xk]),Jk=$({type:G(y.TOOL_CALL_RESULT),timestamp:J().min(-9007199254740991).max(9007199254740991).optional(),rawEvent:W().refine(t=>t!==null).optional(),metadata:Y.optional(),subagentRunId:oe.optional(),messageId:A(),toolCallId:A(),content:Go([A(),$e(nh)]),role:G("tool").optional()}),oy=W(),Qk=$({type:G(y.STATE_SNAPSHOT),timestamp:J().min(-9007199254740991).max(9007199254740991).optional(),rawEvent:W().refine(t=>t!==null).optional(),metadata:Y.optional(),subagentRunId:oe.optional(),snapshot:oy.refine(t=>t!==void 0)}),dn=A().regex(new RegExp("^(/([^/~]|~[01])*)*$")),eA=$({op:G("add"),path:dn,value:W().refine(t=>t!==void 0)}).meta({specOpen:!0}),tA=$({op:G("remove"),path:dn}).meta({specOpen:!0}),nA=$({op:G("replace"),path:dn,value:W().refine(t=>t!==void 0)}).meta({specOpen:!0}),rA=$({op:G("move"),from:dn,path:dn}).meta({specOpen:!0}),oA=$({op:G("copy"),from:dn,path:dn}).meta({specOpen:!0}),iA=$({op:G("test"),path:dn,value:W().refine(t=>t!==void 0)}).meta({specOpen:!0}),sA=ln("op",[eA,tA,nA,rA,oA,iA]),iy=$e(sA),aA=$({type:G(y.STATE_DELTA),timestamp:J().min(-9007199254740991).max(9007199254740991).optional(),rawEvent:W().refine(t=>t!==null).optional(),metadata:Y.optional(),subagentRunId:oe.optional(),delta:iy}),lA=$({subagentRunId:oe.optional(),id:A(),role:G("developer"),name:A().optional(),encryptedValue:A().optional(),metadata:Y.optional(),content:A()}),dA=$({subagentRunId:oe.optional(),id:A(),role:G("system"),name:A().optional(),encryptedValue:A().optional(),metadata:Y.optional(),content:A()}),cA=$({name:A(),arguments:A()}),uA=$({id:A(),type:G("function"),function:cA,encryptedValue:A().optional(),metadata:Y.optional()}),hA=$({subagentRunId:oe.optional(),id:A(),role:G("assistant"),name:A().optional(),encryptedValue:A().optional(),metadata:Y.optional(),content:A().optional(),toolCalls:$e(uA).optional()}),pA=$({subagentRunId:oe.optional(),id:A(),role:G("user"),name:A().optional(),encryptedValue:A().optional(),metadata:Y.optional(),content:Go([A(),$e(nh)])}),fA=$({subagentRunId:oe.optional(),id:A(),role:G("tool"),content:Go([A(),$e(nh)]),toolCallId:A(),error:A().optional(),encryptedValue:A().optional(),metadata:Y.optional()}),mA=$({subagentRunId:oe.optional(),id:A(),role:G("activity"),activityType:A(),content:Hr(t=>typeof t=="object"&&t!==null&&!Array.isArray(t)),metadata:Y.optional()}),gA=$({subagentRunId:oe.optional(),id:A(),role:G("reasoning"),content:A(),encryptedValue:A().optional(),metadata:Y.optional()}),sy=ln("role",[lA,dA,hA,pA,fA,mA,gA]),vA=$({type:G(y.MESSAGES_SNAPSHOT),timestamp:J().min(-9007199254740991).max(9007199254740991).optional(),rawEvent:W().refine(t=>t!==null).optional(),metadata:Y.optional(),messages:$e(sy)}),bA=$({type:G(y.ACTIVITY_SNAPSHOT),timestamp:J().min(-9007199254740991).max(9007199254740991).optional(),rawEvent:W().refine(t=>t!==null).optional(),metadata:Y.optional(),subagentRunId:oe.optional(),messageId:A(),activityType:A(),content:Hr(t=>typeof t=="object"&&t!==null&&!Array.isArray(t)),replace:ie().optional()}),yA=$({type:G(y.ACTIVITY_DELTA),timestamp:J().min(-9007199254740991).max(9007199254740991).optional(),rawEvent:W().refine(t=>t!==null).optional(),metadata:Y.optional(),subagentRunId:oe.optional(),messageId:A(),activityType:A(),patch:iy}),wA=$({type:G(y.RAW),timestamp:J().min(-9007199254740991).max(9007199254740991).optional(),rawEvent:W().refine(t=>t!==null).optional(),metadata:Y.optional(),subagentRunId:oe.optional(),event:W().refine(t=>t!==void 0),source:A().optional()}),EA=$({type:G(y.CUSTOM),timestamp:J().min(-9007199254740991).max(9007199254740991).optional(),rawEvent:W().refine(t=>t!==null).optional(),metadata:Y.optional(),subagentRunId:oe.optional(),name:A(),value:W().refine(t=>t!==void 0)}),ay=$({name:A(),description:A(),parameters:W().refine(t=>t!==null).optional(),metadata:Y.optional()}),xA=$({description:A(),value:A()}),_A=$({interruptId:A(),status:Hn(["resolved","cancelled"]),payload:W().refine(t=>t!==null).optional(),metadata:Y.optional()}),Bs=$({threadId:A(),runId:A(),protocolVersion:A().optional(),parentRunId:A().optional(),state:oy.refine(t=>t!==null).nullable().transform(t=>t??void 0).optional(),messages:$e(sy),tools:$e(ay).default(()=>[]),context:$e(xA).default(()=>[]),forwardedProps:W().refine(t=>t!==null).optional(),resume:$e(_A).optional()}),TA=$({type:G(y.RUN_STARTED),timestamp:J().min(-9007199254740991).max(9007199254740991).optional(),rawEvent:W().refine(t=>t!==null).optional(),metadata:Y.optional(),threadId:A(),runId:A(),protocolVersion:A().optional(),parentRunId:A().optional(),input:Bs.optional()}),SA=$({type:G("success"),pendingToolCallIds:$e(A()).optional()}),kA=$({subagentRunId:oe.optional(),id:A(),reason:A(),message:A().optional(),toolCallId:A().optional(),responseSchema:Hr(t=>typeof t=="object"&&t!==null&&!Array.isArray(t)).optional(),expiresAt:A().optional(),metadata:Y.optional()}),AA=$({type:G("interrupt"),interrupts:$e(kA).min(1)}),RA=$({type:G("cancelled")}),IA=ln("type",[SA,AA,RA]),ly=$({provider:A().optional(),model:A().optional(),inputTokens:J().min(0).max(9007199254740991).optional(),outputTokens:J().min(0).max(9007199254740991).optional(),totalTokens:J().min(0).max(9007199254740991).optional(),reasoningTokens:J().min(0).max(9007199254740991).optional(),cachedInputTokens:J().min(0).max(9007199254740991).optional(),cacheWriteInputTokens:J().min(0).max(9007199254740991).optional()}),CA=$({type:G(y.RUN_FINISHED),timestamp:J().min(-9007199254740991).max(9007199254740991).optional(),rawEvent:W().refine(t=>t!==null).optional(),metadata:Y.optional(),threadId:A(),runId:A(),result:W().refine(t=>t!==null).optional(),outcome:IA.optional(),usage:$e(ly).optional()}),NA=$({type:G(y.RUN_ERROR),timestamp:J().min(-9007199254740991).max(9007199254740991).optional(),rawEvent:W().refine(t=>t!==null).optional(),metadata:Y.optional(),message:A(),code:A().optional(),usage:$e(ly).optional()}),OA=$({type:G(y.STEP_STARTED),timestamp:J().min(-9007199254740991).max(9007199254740991).optional(),rawEvent:W().refine(t=>t!==null).optional(),metadata:Y.optional(),subagentRunId:oe.optional(),stepName:A()}),MA=$({type:G(y.STEP_FINISHED),timestamp:J().min(-9007199254740991).max(9007199254740991).optional(),rawEvent:W().refine(t=>t!==null).optional(),metadata:Y.optional(),subagentRunId:oe.optional(),stepName:A()}),PA=$({type:G(y.REASONING_START),timestamp:J().min(-9007199254740991).max(9007199254740991).optional(),rawEvent:W().refine(t=>t!==null).optional(),metadata:Y.optional(),subagentRunId:oe.optional(),messageId:A()}),LA=$({type:G(y.REASONING_MESSAGE_START),timestamp:J().min(-9007199254740991).max(9007199254740991).optional(),rawEvent:W().refine(t=>t!==null).optional(),metadata:Y.optional(),subagentRunId:oe.optional(),messageId:A(),role:G("reasoning")}),zA=$({type:G(y.REASONING_MESSAGE_CONTENT),timestamp:J().min(-9007199254740991).max(9007199254740991).optional(),rawEvent:W().refine(t=>t!==null).optional(),metadata:Y.optional(),subagentRunId:oe.optional(),messageId:A(),delta:A()}),DA=$({type:G(y.REASONING_MESSAGE_END),timestamp:J().min(-9007199254740991).max(9007199254740991).optional(),rawEvent:W().refine(t=>t!==null).optional(),metadata:Y.optional(),subagentRunId:oe.optional(),messageId:A()}),rh=$({type:G(y.REASONING_MESSAGE_CHUNK),timestamp:J().min(-9007199254740991).max(9007199254740991).optional(),rawEvent:W().refine(t=>t!==null).optional(),metadata:Y.optional(),subagentRunId:oe.optional(),messageId:A().optional(),delta:A().optional()}),$A=$({type:G(y.REASONING_END),timestamp:J().min(-9007199254740991).max(9007199254740991).optional(),rawEvent:W().refine(t=>t!==null).optional(),metadata:Y.optional(),subagentRunId:oe.optional(),messageId:A()}),UA=Hn(["tool-call","message"]),HA=$({type:G(y.REASONING_ENCRYPTED_VALUE),timestamp:J().min(-9007199254740991).max(9007199254740991).optional(),rawEvent:W().refine(t=>t!==null).optional(),metadata:Y.optional(),subagentRunId:oe.optional(),subtype:UA,entityId:A(),encryptedValue:A()}),FA=$({type:G(y.SUBAGENT_STARTED),timestamp:J().min(-9007199254740991).max(9007199254740991).optional(),rawEvent:W().refine(t=>t!==null).optional(),metadata:Y.optional(),subagentRunId:oe,name:A(),description:A().optional(),parentSubagentRunId:oe.optional(),parentToolCallId:A().optional(),parentMessageId:A().optional()}),GA=$({type:G("success")}),BA=$({type:G("suspended"),interruptIds:$e(A()).optional()}),VA=ln("type",[GA,BA]),jA=$({type:G(y.SUBAGENT_FINISHED),timestamp:J().min(-9007199254740991).max(9007199254740991).optional(),rawEvent:W().refine(t=>t!==null).optional(),metadata:Y.optional(),subagentRunId:oe,result:W().refine(t=>t!==null).optional(),outcome:VA.optional()}),ZA=$({type:G(y.SUBAGENT_ERROR),timestamp:J().min(-9007199254740991).max(9007199254740991).optional(),rawEvent:W().refine(t=>t!==null).optional(),metadata:Y.optional(),subagentRunId:oe,message:A(),code:A().optional()}),oh=ln("type",[$k,Uk,Hk,eh,Fk,Gk,Bk,th,Jk,Qk,aA,vA,bA,yA,wA,EA,TA,CA,NA,OA,MA,PA,LA,zA,DA,rh,$A,HA,FA,jA,ZA]),VU=Hn(["developer","system","assistant","user","tool","activity","reasoning"]),WA=$({name:A(),description:A().optional()}),qA=$({name:A().optional(),type:A().optional(),description:A().optional(),version:A().optional(),provider:A().optional(),documentationUrl:A().optional(),metadata:Y.optional()}),YA=$({streaming:ie().optional(),websocket:ie().optional(),httpBinary:ie().optional(),pushNotifications:ie().optional(),resumable:ie().optional()}),KA=$({supported:ie().optional(),items:$e(ay).optional(),parallelCalls:ie().optional(),clientProvided:ie().optional()}),XA=$({structuredOutput:ie().optional(),supportedMimeTypes:$e(A()).optional()}),JA=$({snapshots:ie().optional(),deltas:ie().optional(),memory:ie().optional(),persistentState:ie().optional()}),QA=$({supported:ie().optional(),delegation:ie().optional(),handoffs:ie().optional(),subagents:$e(WA).optional()}),eR=$({supported:ie().optional(),streaming:ie().optional(),encrypted:ie().optional()}),tR=$({image:ie().optional(),audio:ie().optional(),video:ie().optional(),pdf:ie().optional(),file:ie().optional()}),nR=$({image:ie().optional(),audio:ie().optional()}),rR=$({input:tR.optional(),output:nR.optional()}),oR=$({codeExecution:ie().optional(),sandboxed:ie().optional(),maxIterations:J().min(0).max(9007199254740991).optional(),maxExecutionTime:J().min(0).max(9007199254740991).optional()}),iR=$({supported:ie().optional(),approvals:ie().optional(),interventions:ie().optional(),feedback:ie().optional(),interrupts:ie().optional(),approveWithEdits:ie().optional()}),jU=$({identity:qA.optional(),transport:YA.optional(),tools:KA.optional(),output:XA.optional(),state:JA.optional(),multiAgent:QA.optional(),reasoning:eR.optional(),multimodal:rR.optional(),execution:oR.optional(),humanInTheLoop:iR.optional(),custom:Hr(t=>typeof t=="object"&&t!==null&&!Array.isArray(t)).optional()}),ZU=$({subagentRunId:oe.optional()}),WU=$({type:Dk,timestamp:J().min(-9007199254740991).max(9007199254740991).optional(),rawEvent:W().refine(t=>t!==null).optional(),metadata:Y.optional()}),qU=$({subagentRunId:oe.optional(),id:A(),role:A(),name:A().optional(),encryptedValue:A().optional(),metadata:Y.optional()}),YU=Y.optional();Je(zr());function cy(){let t=this.buf,e=this.pos,n=0,r=0;for(let i=0;i<28;i+=7){let s=t[e++];if(n|=(s&127)<<i,(s&128)==0){this.pos=e,this.assertBounds(),this.varint64Lo=n,this.varint64Hi=r;return}}let o=t[e++];if(n|=(o&15)<<28,r=(o&112)>>4,(o&128)==0){this.pos=e,this.assertBounds(),this.varint64Lo=n,this.varint64Hi=r;return}for(let i=3;i<=31;i+=7){let s=t[e++];if(r|=(s&127)<<i,(s&128)==0){this.pos=e,this.assertBounds(),this.varint64Lo=n,this.varint64Hi=r;return}}throw new Error("invalid varint")}var Vs=4294967296;function ih(t){let e=t[0]==="-";e&&(t=t.slice(1));let n=1e6,r=0,o=0;function i(s,a){let l=Number(t.slice(s,a));o*=n,r=r*n+l,r>=Vs&&(o=o+(r/Vs|0),r=r%Vs)}return i(-24,-18),i(-18,-12),i(-12,-6),i(-6),e?hy(r,o):ah(r,o)}function uy(t,e){let n=ah(t,e),r=n.hi&2147483648;r&&(n=hy(n.lo,n.hi));let o=sh(n.lo,n.hi);return r?"-"+o:o}function sh(t,e){if({lo:t,hi:e}=sR(t,e),e<=2097151)return String(Vs*e+t);let n=t&16777215,r=(t>>>24|e<<8)&16777215,o=e>>16&65535,i=n+r*6777216+o*6710656,s=r+o*8147497,a=o*2,l=1e7;return i>=l&&(s+=Math.floor(i/l),i%=l),s>=l&&(a+=Math.floor(s/l),s%=l),a.toString()+dy(s)+dy(i)}function sR(t,e){return{lo:t>>>0,hi:e>>>0}}function ah(t,e){return{lo:t|0,hi:e|0}}function hy(t,e){return e=~e,t?t=~t+1:e+=1,ah(t,e)}var dy=t=>{let e=String(t);return"0000000".slice(e.length)+e};function py(){let t=this.buf[this.pos++];if((t&128)===0)return this.assertBounds(),t;let e=t&127;if(t=this.buf[this.pos++],e|=(t&127)<<7,(t&128)===0)return this.assertBounds(),e;if(t=this.buf[this.pos++],e|=(t&127)<<14,(t&128)===0)return this.assertBounds(),e;if(t=this.buf[this.pos++],e|=(t&127)<<21,(t&128)===0)return this.assertBounds(),e;t=this.buf[this.pos++],e|=(t&15)<<28;for(let n=5;(t&128)!==0&&n<10;n++)t=this.buf[this.pos++];if((t&128)!==0)throw new Error("invalid varint");return this.assertBounds(),e>>>0}var _t=aR();function aR(){let t=new DataView(new ArrayBuffer(8));if(typeof BigInt=="function"&&typeof t.getBigInt64=="function"&&typeof t.getBigUint64=="function"&&typeof t.setBigInt64=="function"&&typeof t.setBigUint64=="function"&&(!!globalThis.Deno||!!globalThis.Bun||typeof process!="object"||typeof process.env!="object"||process.env.BUF_BIGINT_DISABLE!=="1")){let n=BigInt("-9223372036854775808"),r=BigInt("9223372036854775807"),o=BigInt("0"),i=BigInt("18446744073709551615");return{zero:BigInt(0),supported:!0,parse(s){let a=typeof s=="bigint"?s:BigInt(s);if(a>r||a<n)throw new Error(`invalid int64: ${s}`);return a},uParse(s){let a=typeof s=="bigint"?s:BigInt(s);if(a>i||a<o)throw new Error(`invalid uint64: ${s}`);return a},enc(s){return t.setBigInt64(0,this.parse(s),!0),{lo:t.getInt32(0,!0),hi:t.getInt32(4,!0)}},uEnc(s){return t.setBigInt64(0,this.uParse(s),!0),{lo:t.getInt32(0,!0),hi:t.getInt32(4,!0)}},dec(s,a){return t.setInt32(0,s,!0),t.setInt32(4,a,!0),t.getBigInt64(0,!0)},uDec(s,a){return t.setInt32(0,s,!0),t.setInt32(4,a,!0),t.getBigUint64(0,!0)}}}return{zero:"0",supported:!1,parse(n){return typeof n!="string"&&(n=n.toString()),fy(n),n},uParse(n){return typeof n!="string"&&(n=n.toString()),my(n),n},enc(n){return typeof n!="string"&&(n=n.toString()),fy(n),ih(n)},uEnc(n){return typeof n!="string"&&(n=n.toString()),my(n),ih(n)},dec(n,r){return uy(n,r)},uDec(n,r){return sh(n,r)}}}function fy(t){if(!/^-?[0-9]+$/.test(t))throw new Error("invalid int64: "+t)}function my(t){if(!/^[0-9]+$/.test(t))throw new Error("invalid uint64: "+t)}var lh;function lR(t){var e;lh=Object.assign(Object.assign({},t),{encodeUtf8Into:(e=t.encodeUtf8Into)!==null&&e!==void 0?e:ch(t.encodeUtf8.bind(t))})}function dh(){if(!lh){let t=globalThis;if(!t.TextEncoder||!t.TextDecoder)throw new Error("encoding API missing: install TextEncoder and TextDecoder on globalThis");let e=new t.TextEncoder,n=new t.TextDecoder("utf-8",{ignoreBOM:!0}),r,o={encodeUtf8(s){return e.encode(s)},decodeUtf8(s,a){return a?(r||(r=new t.TextDecoder("utf-8",{fatal:!0,ignoreBOM:!0})),r.decode(s)):n.decode(s)},checkUtf8(s){try{return encodeURIComponent(s),!0}catch{return!1}}};e.encodeInto&&(o.encodeUtf8Into=e.encodeInto.bind(e));let i=String.prototype.isWellFormed;i&&(o.checkUtf8=s=>i.call(s)),lR(o)}return lh}function ch(t){return(e,n)=>{let r=t(e);return n.set(r),{written:r.byteLength}}}var cn;(function(t){t[t.Varint=0]="Varint",t[t.Bit64=1]="Bit64",t[t.LengthDelimited=2]="LengthDelimited",t[t.StartGroup=3]="StartGroup",t[t.EndGroup=4]="EndGroup",t[t.Bit32=5]="Bit32"})(cn||(cn={}));var dR=4294967295,cR=2147483647,uR=-2147483648,B=class{constructor(e){this.stackPos=[],this.encodeUtf8Into=e?ch(e):dh().encodeUtf8Into,this.buffer=vy,this.viewCache=pR,this.pos=0}ensureCapacity(e){let n=this.pos+e;if(n>this.buffer.length){let r=this.buffer.length||hR;for(;r<n;)r*=2;let o=new Uint8Array(r);this.pos>0&&o.set(this.buffer),this.buffer=o}}view(){let e=this.buffer,n=this.viewCache;if(n.byteLength===e.byteLength)return n;let r=new DataView(e.buffer);return this.viewCache=r,r}finish(){let e=this.buffer.slice(0,this.pos);return this.pos=0,this.stackPos=[],e}fork(){return this.stackPos.push(this.pos),this.ensureCapacity(Bo),this.buffer[this.pos++]=0,this}join(){let e=this.stackPos.pop();if(e===void 0)throw new Error("invalid state, fork stack empty");let n=this.pos-e-Bo,r=uh(n);return r>Bo&&(this.ensureCapacity(r-Bo),this.buffer.copyWithin(e+r,e+Bo,this.pos)),this.pos=e,this.uint32(n),this.pos+=n,this}tag(e,n){return this.uint32((e<<3|n)>>>0)}raw(e){return this.ensureCapacity(e.length),this.buffer.set(e,this.pos),this.pos+=e.length,this}uint32(e){if(gy(e),this.ensureCapacity(5),e<128)return this.buffer[this.pos++]=e,this;for(;e>127;)this.buffer[this.pos++]=e&127|128,e>>>=7;return this.buffer[this.pos++]=e,this}int32(e){if(hh(e),e>=0)return this.uint32(e);this.ensureCapacity(10);for(let n=0;n<9;n++)this.buffer[this.pos++]=e&127|128,e>>=7;return this.buffer[this.pos++]=1,this}bool(e){return this.ensureCapacity(1),this.buffer[this.pos++]=e?1:0,this}bytes(e){return this.uint32(e.byteLength),this.raw(e)}string(e){typeof e!="string"&&(e=String(e));let n=e.length;if(n<=by){this.ensureCapacity(n+1);let l=this.buffer,d=this.pos;l[d++]=n;let c=0;for(;c<n;c++){let h=e.charCodeAt(c);if(h>127)break;l[d++]=h}if(c==n)return this.pos=d,this}this.ensureCapacity(n*3+5);let r=uh(n),o=this.buffer,i=this.pos,{written:s}=this.encodeUtf8Into(e,o.subarray(i+r)),a=uh(s);return a!=r&&o.copyWithin(i+a,i+r,i+r+s),this.uint32(s),this.pos+=s,this}float(e){return fR(e),this.ensureCapacity(4),this.view().setFloat32(this.pos,e,!0),this.pos+=4,this}double(e){return this.ensureCapacity(8),this.view().setFloat64(this.pos,e,!0),this.pos+=8,this}fixed32(e){return gy(e),this.ensureCapacity(4),this.view().setUint32(this.pos,e,!0),this.pos+=4,this}sfixed32(e){return hh(e),this.ensureCapacity(4),this.view().setInt32(this.pos,e,!0),this.pos+=4,this}sint32(e){return hh(e),this.uint32((e<<1^e>>31)>>>0)}sfixed64(e){let n=_t.enc(e);this.ensureCapacity(8);let r=this.view();return r.setInt32(this.pos,n.lo,!0),r.setInt32(this.pos+4,n.hi,!0),this.pos+=8,this}fixed64(e){let n=_t.uEnc(e);this.ensureCapacity(8);let r=this.view();return r.setInt32(this.pos,n.lo,!0),r.setInt32(this.pos+4,n.hi,!0),this.pos+=8,this}int64(e){let n=_t.enc(e);return this.writeVarint64(n.lo,n.hi)}sint64(e){let n=_t.enc(e),r=n.hi>>31,o=n.lo<<1^r,i=(n.hi<<1|n.lo>>>31)^r;return this.writeVarint64(o,i)}uint64(e){let n=_t.uEnc(e);return this.writeVarint64(n.lo,n.hi)}writeVarint64(e,n){this.ensureCapacity(10);let r=this.buffer,o=this.pos;for(let a=0;a<28;a=a+7){let l=e>>>a,d=!(!(l>>>7)&&n==0);if(r[o++]=(d?l|128:l)&255,!d)return this.pos=o,this}let i=e>>>28&15|(n&7)<<4,s=n>>3!=0;if(r[o++]=(s?i|128:i)&255,!s)return this.pos=o,this;for(let a=3;a<31;a=a+7){let l=n>>>a,d=!!(l>>>7);if(r[o++]=(d?l|128:l)&255,!d)return this.pos=o,this}return r[o++]=n>>>31&1,this.pos=o,this}},hR=128,Bo=1,vy=new Uint8Array(0),pR=new DataView(vy.buffer),by=32;function uh(t){return t<128?1:t<16384?2:t<2097152?3:t<268435456?4:5}var N=class{constructor(e,n=dh().decodeUtf8){this.decodeUtf8=n,this.varint64Lo=0,this.varint64Hi=0,this.varint64=cy,this.uint32=py,this.buf=e,this.len=e.length,this.pos=0,this.view=new DataView(e.buffer,e.byteOffset,e.byteLength)}tag(){let e=this.pos,n=this.uint32(),r=this.pos-e;if(r>5||r==5&&this.buf[this.pos-1]>15)throw new Error("illegal tag: varint overflows uint32");let o=n>>>3,i=n&7;if(o<=0||i>5)throw new Error("illegal tag: field no "+o+" wire type "+i);return[o,i]}skip(e,n,r=100){let o=this.pos;switch(e){case cn.Varint:for(;this.buf[this.pos++]&128;);break;case cn.Bit64:this.pos+=4;case cn.Bit32:this.pos+=4;break;case cn.LengthDelimited:let i=this.uint32();this.pos+=i;break;case cn.StartGroup:if(r<=0)throw new Error("maximum recursion depth reached");for(;;){let[s,a]=this.tag();if(a===cn.EndGroup){if(n!==void 0&&s!==n)throw new Error("invalid end group tag");break}this.skip(a,s,r-1)}break;default:throw new Error("cant skip wire type "+e)}return this.assertBounds(),this.buf.subarray(o,this.pos)}assertBounds(){if(this.pos>this.len)throw new RangeError("premature EOF")}int32(){return this.uint32()|0}sint32(){let e=this.uint32();return e>>>1^-(e&1)}int64(){return this.varint64(),_t.dec(this.varint64Lo,this.varint64Hi)}uint64(){return this.varint64(),_t.uDec(this.varint64Lo,this.varint64Hi)}sint64(){this.varint64();let e=this.varint64Lo,n=this.varint64Hi,r=-(e&1);return e=(e>>>1|(n&1)<<31)^r,n=n>>>1^r,_t.dec(e,n)}bool(){let e=this.buf[this.pos];return e<128?(this.pos++,e!==0):(this.varint64(),this.varint64Lo!==0||this.varint64Hi!==0)}fixed32(){return this.view.getUint32((this.pos+=4)-4,!0)}sfixed32(){return this.view.getInt32((this.pos+=4)-4,!0)}fixed64(){return _t.uDec(this.sfixed32(),this.sfixed32())}sfixed64(){return _t.dec(this.sfixed32(),this.sfixed32())}float(){return this.view.getFloat32((this.pos+=4)-4,!0)}double(){return this.view.getFloat64((this.pos+=8)-8,!0)}bytes(){let e=this.uint32(),n=this.pos;return this.pos+=e,this.assertBounds(),this.buf.subarray(n,n+e)}string(e){let n=this.uint32(),r=this.pos;this.pos+=n,this.assertBounds();let o=this.buf;if(n<=by){let i=new Array(n);for(let s=0;s<n;s++){let a=o[r+s];if(a>127)return this.decodeUtf8(o.subarray(r,this.pos),e);i[s]=a}return String.fromCharCode.apply(String,i)}return this.decodeUtf8(o.subarray(r,this.pos),e)}};function hh(t){if(typeof t=="string")t=Number(t);else if(typeof t!="number")throw new Error("invalid int32: "+typeof t);if(!Number.isInteger(t)||t>cR||t<uR)throw new Error("invalid int32: "+t)}function gy(t){if(typeof t=="string")t=Number(t);else if(typeof t!="number")throw new Error("invalid uint32: "+typeof t);if(!Number.isInteger(t)||t>dR||t<0)throw new Error("invalid uint32: "+t)}function fR(t){if(typeof t=="string"){let e=t;if(t=Number(t),Number.isNaN(t)&&e!=="NaN")throw new Error("invalid float32: "+e)}else if(typeof t!="number")throw new Error("invalid float32: "+typeof t);if(!Number.isFinite(Math.fround(t))&&Number.isFinite(t))throw new Error("invalid float32: "+t)}var mR=(function(t){return t[t.NULL_VALUE=0]="NULL_VALUE",t[t.UNRECOGNIZED=-1]="UNRECOGNIZED",t})({});function ph(){return{fields:{}}}var se={encode(t,e=new B){return Object.entries(t.fields).forEach(([n,r])=>{r!==void 0&&gh.encode({key:n,value:r},e.uint32(10).fork()).join()}),e},decode(t,e){let n=t instanceof N?t:new N(t),r=e===void 0?n.len:n.pos+e,o=ph();for(;n.pos<r;){let i=n.uint32();switch(i>>>3){case 1:{if(i!==10)break;let s=gh.decode(n,n.uint32());s.value!==void 0&&(o.fields[s.key]=s.value);continue}}if((i&7)===4||i===0)break;n.skip(i&7)}return o},create(t){return se.fromPartial(t??{})},fromPartial(t){let e=ph();return e.fields=Object.entries(t.fields??{}).reduce((n,[r,o])=>(o!==void 0&&(n[r]=o),n),{}),e},wrap(t){let e=ph();if(t!==void 0)for(let n of Object.keys(t))e.fields[n]=t[n];return e},unwrap(t){let e={};if(t.fields)for(let n of Object.keys(t.fields))e[n]=t.fields[n];return e}};function yy(){return{key:"",value:void 0}}var gh={encode(t,e=new B){return t.key!==""&&e.uint32(10).string(t.key),t.value!==void 0&&H.encode(H.wrap(t.value),e.uint32(18).fork()).join(),e},decode(t,e){let n=t instanceof N?t:new N(t),r=e===void 0?n.len:n.pos+e,o=yy();for(;n.pos<r;){let i=n.uint32();switch(i>>>3){case 1:if(i!==10)break;o.key=n.string();continue;case 2:if(i!==18)break;o.value=H.unwrap(H.decode(n,n.uint32()));continue}if((i&7)===4||i===0)break;n.skip(i&7)}return o},create(t){return gh.fromPartial(t??{})},fromPartial(t){let e=yy();return e.key=t.key??"",e.value=t.value??void 0,e}};function fh(){return{nullValue:void 0,numberValue:void 0,stringValue:void 0,boolValue:void 0,structValue:void 0,listValue:void 0}}var H={encode(t,e=new B){return t.nullValue!==void 0&&e.uint32(8).int32(t.nullValue),t.numberValue!==void 0&&e.uint32(17).double(t.numberValue),t.stringValue!==void 0&&e.uint32(26).string(t.stringValue),t.boolValue!==void 0&&e.uint32(32).bool(t.boolValue),t.structValue!==void 0&&se.encode(se.wrap(t.structValue),e.uint32(42).fork()).join(),t.listValue!==void 0&&Vo.encode(Vo.wrap(t.listValue),e.uint32(50).fork()).join(),e},decode(t,e){let n=t instanceof N?t:new N(t),r=e===void 0?n.len:n.pos+e,o=fh();for(;n.pos<r;){let i=n.uint32();switch(i>>>3){case 1:if(i!==8)break;o.nullValue=n.int32();continue;case 2:if(i!==17)break;o.numberValue=n.double();continue;case 3:if(i!==26)break;o.stringValue=n.string();continue;case 4:if(i!==32)break;o.boolValue=n.bool();continue;case 5:if(i!==42)break;o.structValue=se.unwrap(se.decode(n,n.uint32()));continue;case 6:if(i!==50)break;o.listValue=Vo.unwrap(Vo.decode(n,n.uint32()));continue}if((i&7)===4||i===0)break;n.skip(i&7)}return o},create(t){return H.fromPartial(t??{})},fromPartial(t){let e=fh();return e.nullValue=t.nullValue??void 0,e.numberValue=t.numberValue??void 0,e.stringValue=t.stringValue??void 0,e.boolValue=t.boolValue??void 0,e.structValue=t.structValue??void 0,e.listValue=t.listValue??void 0,e},wrap(t){let e=fh();if(t===null)e.nullValue=mR.NULL_VALUE;else if(typeof t=="boolean")e.boolValue=t;else if(typeof t=="number")e.numberValue=t;else if(typeof t=="string")e.stringValue=t;else if(globalThis.Array.isArray(t))e.listValue=t;else if(typeof t=="object")e.structValue=t;else if(typeof t<"u")throw new globalThis.Error("Unsupported any value type: "+typeof t);return e},unwrap(t){if(t.stringValue!==void 0)return t.stringValue;if(t?.numberValue!==void 0)return t.numberValue;if(t?.boolValue!==void 0)return t.boolValue;if(t?.structValue!==void 0)return t.structValue;if(t?.listValue!==void 0)return t.listValue;if(t?.nullValue!==void 0)return null}};function mh(){return{values:[]}}var Vo={encode(t,e=new B){for(let n of t.values)H.encode(H.wrap(n),e.uint32(10).fork()).join();return e},decode(t,e){let n=t instanceof N?t:new N(t),r=e===void 0?n.len:n.pos+e,o=mh();for(;n.pos<r;){let i=n.uint32();switch(i>>>3){case 1:if(i!==10)break;o.values.push(H.unwrap(H.decode(n,n.uint32())));continue}if((i&7)===4||i===0)break;n.skip(i&7)}return o},create(t){return Vo.fromPartial(t??{})},fromPartial(t){let e=mh();return e.values=t.values?.map(n=>n)||[],e},wrap(t){let e=mh();return e.values=t??[],e},unwrap(t){return t?.hasOwnProperty("values")&&globalThis.Array.isArray(t.values)?t.values:t}},wy=(function(t){return t[t.ADD=0]="ADD",t[t.REMOVE=1]="REMOVE",t[t.REPLACE=2]="REPLACE",t[t.MOVE=3]="MOVE",t[t.COPY=4]="COPY",t[t.TEST=5]="TEST",t[t.UNRECOGNIZED=-1]="UNRECOGNIZED",t})({});function Ey(){return{op:0,path:"",from:void 0,value:void 0}}var Bn={encode(t,e=new B){return t.op!==0&&e.uint32(8).int32(t.op),t.path!==""&&e.uint32(18).string(t.path),t.from!==void 0&&e.uint32(26).string(t.from),t.value!==void 0&&H.encode(H.wrap(t.value),e.uint32(34).fork()).join(),e},decode(t,e){let n=t instanceof N?t:new N(t),r=e===void 0?n.len:n.pos+e,o=Ey();for(;n.pos<r;){let i=n.uint32();switch(i>>>3){case 1:if(i!==8)break;o.op=n.int32();continue;case 2:if(i!==18)break;o.path=n.string();continue;case 3:if(i!==26)break;o.from=n.string();continue;case 4:if(i!==34)break;o.value=H.unwrap(H.decode(n,n.uint32()));continue}if((i&7)===4||i===0)break;n.skip(i&7)}return o},create(t){return Bn.fromPartial(t??{})},fromPartial(t){let e=Ey();return e.op=t.op??0,e.path=t.path??"",e.from=t.from??void 0,e.value=t.value??void 0,e}};function xy(){return{text:"",id:void 0,metadata:void 0}}var js={encode(t,e=new B){return t.text!==""&&e.uint32(10).string(t.text),t.id!==void 0&&e.uint32(18).string(t.id),t.metadata!==void 0&&H.encode(H.wrap(t.metadata),e.uint32(26).fork()).join(),e},decode(t,e){let n=t instanceof N?t:new N(t),r=e===void 0?n.len:n.pos+e,o=xy();for(;n.pos<r;){let i=n.uint32();switch(i>>>3){case 1:if(i!==10)break;o.text=n.string();continue;case 2:if(i!==18)break;o.id=n.string();continue;case 3:if(i!==26)break;o.metadata=H.unwrap(H.decode(n,n.uint32()));continue}if((i&7)===4||i===0)break;n.skip(i&7)}return o},create(t){return js.fromPartial(t??{})},fromPartial(t){let e=xy();return e.text=t.text??"",e.id=t.id??void 0,e.metadata=t.metadata??void 0,e}};function _y(){return{source:void 0,metadata:void 0,id:void 0}}var Zs={encode(t,e=new B){return t.source!==void 0&&ut.encode(t.source,e.uint32(10).fork()).join(),t.metadata!==void 0&&H.encode(H.wrap(t.metadata),e.uint32(18).fork()).join(),t.id!==void 0&&e.uint32(26).string(t.id),e},decode(t,e){let n=t instanceof N?t:new N(t),r=e===void 0?n.len:n.pos+e,o=_y();for(;n.pos<r;){let i=n.uint32();switch(i>>>3){case 1:if(i!==10)break;o.source=ut.decode(n,n.uint32());continue;case 2:if(i!==18)break;o.metadata=H.unwrap(H.decode(n,n.uint32()));continue;case 3:if(i!==26)break;o.id=n.string();continue}if((i&7)===4||i===0)break;n.skip(i&7)}return o},create(t){return Zs.fromPartial(t??{})},fromPartial(t){let e=_y();return e.source=t.source!==void 0&&t.source!==null?ut.fromPartial(t.source):void 0,e.metadata=t.metadata??void 0,e.id=t.id??void 0,e}};function Ty(){return{value:"",mimeType:""}}var Ws={encode(t,e=new B){return t.value!==""&&e.uint32(10).string(t.value),t.mimeType!==""&&e.uint32(18).string(t.mimeType),e},decode(t,e){let n=t instanceof N?t:new N(t),r=e===void 0?n.len:n.pos+e,o=Ty();for(;n.pos<r;){let i=n.uint32();switch(i>>>3){case 1:if(i!==10)break;o.value=n.string();continue;case 2:if(i!==18)break;o.mimeType=n.string();continue}if((i&7)===4||i===0)break;n.skip(i&7)}return o},create(t){return Ws.fromPartial(t??{})},fromPartial(t){let e=Ty();return e.value=t.value??"",e.mimeType=t.mimeType??"",e}};function Sy(){return{value:"",mimeType:void 0}}var qs={encode(t,e=new B){return t.value!==""&&e.uint32(10).string(t.value),t.mimeType!==void 0&&e.uint32(18).string(t.mimeType),e},decode(t,e){let n=t instanceof N?t:new N(t),r=e===void 0?n.len:n.pos+e,o=Sy();for(;n.pos<r;){let i=n.uint32();switch(i>>>3){case 1:if(i!==10)break;o.value=n.string();continue;case 2:if(i!==18)break;o.mimeType=n.string();continue}if((i&7)===4||i===0)break;n.skip(i&7)}return o},create(t){return qs.fromPartial(t??{})},fromPartial(t){let e=Sy();return e.value=t.value??"",e.mimeType=t.mimeType??void 0,e}};function ky(){return{value:"",provider:void 0,mimeType:void 0}}var Ys={encode(t,e=new B){return t.value!==""&&e.uint32(10).string(t.value),t.provider!==void 0&&e.uint32(18).string(t.provider),t.mimeType!==void 0&&e.uint32(26).string(t.mimeType),e},decode(t,e){let n=t instanceof N?t:new N(t),r=e===void 0?n.len:n.pos+e,o=ky();for(;n.pos<r;){let i=n.uint32();switch(i>>>3){case 1:if(i!==10)break;o.value=n.string();continue;case 2:if(i!==18)break;o.provider=n.string();continue;case 3:if(i!==26)break;o.mimeType=n.string();continue}if((i&7)===4||i===0)break;n.skip(i&7)}return o},create(t){return Ys.fromPartial(t??{})},fromPartial(t){let e=ky();return e.value=t.value??"",e.provider=t.provider??void 0,e.mimeType=t.mimeType??void 0,e}};function Ay(){return{data:void 0,url:void 0,file:void 0}}var ut={encode(t,e=new B){return t.data!==void 0&&Ws.encode(t.data,e.uint32(10).fork()).join(),t.url!==void 0&&qs.encode(t.url,e.uint32(18).fork()).join(),t.file!==void 0&&Ys.encode(t.file,e.uint32(26).fork()).join(),e},decode(t,e){let n=t instanceof N?t:new N(t),r=e===void 0?n.len:n.pos+e,o=Ay();for(;n.pos<r;){let i=n.uint32();switch(i>>>3){case 1:if(i!==10)break;o.data=Ws.decode(n,n.uint32());continue;case 2:if(i!==18)break;o.url=qs.decode(n,n.uint32());continue;case 3:if(i!==26)break;o.file=Ys.decode(n,n.uint32());continue}if((i&7)===4||i===0)break;n.skip(i&7)}return o},create(t){return ut.fromPartial(t??{})},fromPartial(t){let e=Ay();return e.data=t.data!==void 0&&t.data!==null?Ws.fromPartial(t.data):void 0,e.url=t.url!==void 0&&t.url!==null?qs.fromPartial(t.url):void 0,e.file=t.file!==void 0&&t.file!==null?Ys.fromPartial(t.file):void 0,e}};function Ry(){return{source:void 0,metadata:void 0,id:void 0}}var Ks={encode(t,e=new B){return t.source!==void 0&&ut.encode(t.source,e.uint32(10).fork()).join(),t.metadata!==void 0&&H.encode(H.wrap(t.metadata),e.uint32(18).fork()).join(),t.id!==void 0&&e.uint32(26).string(t.id),e},decode(t,e){let n=t instanceof N?t:new N(t),r=e===void 0?n.len:n.pos+e,o=Ry();for(;n.pos<r;){let i=n.uint32();switch(i>>>3){case 1:if(i!==10)break;o.source=ut.decode(n,n.uint32());continue;case 2:if(i!==18)break;o.metadata=H.unwrap(H.decode(n,n.uint32()));continue;case 3:if(i!==26)break;o.id=n.string();continue}if((i&7)===4||i===0)break;n.skip(i&7)}return o},create(t){return Ks.fromPartial(t??{})},fromPartial(t){let e=Ry();return e.source=t.source!==void 0&&t.source!==null?ut.fromPartial(t.source):void 0,e.metadata=t.metadata??void 0,e.id=t.id??void 0,e}};function Iy(){return{source:void 0,metadata:void 0,id:void 0}}var Xs={encode(t,e=new B){return t.source!==void 0&&ut.encode(t.source,e.uint32(10).fork()).join(),t.metadata!==void 0&&H.encode(H.wrap(t.metadata),e.uint32(18).fork()).join(),t.id!==void 0&&e.uint32(26).string(t.id),e},decode(t,e){let n=t instanceof N?t:new N(t),r=e===void 0?n.len:n.pos+e,o=Iy();for(;n.pos<r;){let i=n.uint32();switch(i>>>3){case 1:if(i!==10)break;o.source=ut.decode(n,n.uint32());continue;case 2:if(i!==18)break;o.metadata=H.unwrap(H.decode(n,n.uint32()));continue;case 3:if(i!==26)break;o.id=n.string();continue}if((i&7)===4||i===0)break;n.skip(i&7)}return o},create(t){return Xs.fromPartial(t??{})},fromPartial(t){let e=Iy();return e.source=t.source!==void 0&&t.source!==null?ut.fromPartial(t.source):void 0,e.metadata=t.metadata??void 0,e.id=t.id??void 0,e}};function Cy(){return{source:void 0,metadata:void 0,id:void 0}}var Js={encode(t,e=new B){return t.source!==void 0&&ut.encode(t.source,e.uint32(10).fork()).join(),t.metadata!==void 0&&H.encode(H.wrap(t.metadata),e.uint32(18).fork()).join(),t.id!==void 0&&e.uint32(26).string(t.id),e},decode(t,e){let n=t instanceof N?t:new N(t),r=e===void 0?n.len:n.pos+e,o=Cy();for(;n.pos<r;){let i=n.uint32();switch(i>>>3){case 1:if(i!==10)break;o.source=ut.decode(n,n.uint32());continue;case 2:if(i!==18)break;o.metadata=H.unwrap(H.decode(n,n.uint32()));continue;case 3:if(i!==26)break;o.id=n.string();continue}if((i&7)===4||i===0)break;n.skip(i&7)}return o},create(t){return Js.fromPartial(t??{})},fromPartial(t){let e=Cy();return e.source=t.source!==void 0&&t.source!==null?ut.fromPartial(t.source):void 0,e.metadata=t.metadata??void 0,e.id=t.id??void 0,e}};function Ny(){return{text:void 0,image:void 0,audio:void 0,video:void 0,document:void 0}}var Vn={encode(t,e=new B){return t.text!==void 0&&js.encode(t.text,e.uint32(10).fork()).join(),t.image!==void 0&&Zs.encode(t.image,e.uint32(18).fork()).join(),t.audio!==void 0&&Ks.encode(t.audio,e.uint32(26).fork()).join(),t.video!==void 0&&Xs.encode(t.video,e.uint32(34).fork()).join(),t.document!==void 0&&Js.encode(t.document,e.uint32(42).fork()).join(),e},decode(t,e){let n=t instanceof N?t:new N(t),r=e===void 0?n.len:n.pos+e,o=Ny();for(;n.pos<r;){let i=n.uint32();switch(i>>>3){case 1:if(i!==10)break;o.text=js.decode(n,n.uint32());continue;case 2:if(i!==18)break;o.image=Zs.decode(n,n.uint32());continue;case 3:if(i!==26)break;o.audio=Ks.decode(n,n.uint32());continue;case 4:if(i!==34)break;o.video=Xs.decode(n,n.uint32());continue;case 5:if(i!==42)break;o.document=Js.decode(n,n.uint32());continue}if((i&7)===4||i===0)break;n.skip(i&7)}return o},create(t){return Vn.fromPartial(t??{})},fromPartial(t){let e=Ny();return e.text=t.text!==void 0&&t.text!==null?js.fromPartial(t.text):void 0,e.image=t.image!==void 0&&t.image!==null?Zs.fromPartial(t.image):void 0,e.audio=t.audio!==void 0&&t.audio!==null?Ks.fromPartial(t.audio):void 0,e.video=t.video!==void 0&&t.video!==null?Xs.fromPartial(t.video):void 0,e.document=t.document!==void 0&&t.document!==null?Js.fromPartial(t.document):void 0,e}};function Oy(){return{id:"",type:"",function:void 0,metadata:void 0,encryptedValue:void 0}}var Qs={encode(t,e=new B){return t.id!==""&&e.uint32(10).string(t.id),t.type!==""&&e.uint32(18).string(t.type),t.function!==void 0&&ea.encode(t.function,e.uint32(26).fork()).join(),t.metadata!==void 0&&se.encode(se.wrap(t.metadata),e.uint32(34).fork()).join(),t.encryptedValue!==void 0&&e.uint32(42).string(t.encryptedValue),e},decode(t,e){let n=t instanceof N?t:new N(t),r=e===void 0?n.len:n.pos+e,o=Oy();for(;n.pos<r;){let i=n.uint32();switch(i>>>3){case 1:if(i!==10)break;o.id=n.string();continue;case 2:if(i!==18)break;o.type=n.string();continue;case 3:if(i!==26)break;o.function=ea.decode(n,n.uint32());continue;case 4:if(i!==34)break;o.metadata=se.unwrap(se.decode(n,n.uint32()));continue;case 5:if(i!==42)break;o.encryptedValue=n.string();continue}if((i&7)===4||i===0)break;n.skip(i&7)}return o},create(t){return Qs.fromPartial(t??{})},fromPartial(t){let e=Oy();return e.id=t.id??"",e.type=t.type??"",e.function=t.function!==void 0&&t.function!==null?ea.fromPartial(t.function):void 0,e.metadata=t.metadata??void 0,e.encryptedValue=t.encryptedValue??void 0,e}};function My(){return{name:"",arguments:""}}var ea={encode(t,e=new B){return t.name!==""&&e.uint32(10).string(t.name),t.arguments!==""&&e.uint32(18).string(t.arguments),e},decode(t,e){let n=t instanceof N?t:new N(t),r=e===void 0?n.len:n.pos+e,o=My();for(;n.pos<r;){let i=n.uint32();switch(i>>>3){case 1:if(i!==10)break;o.name=n.string();continue;case 2:if(i!==18)break;o.arguments=n.string();continue}if((i&7)===4||i===0)break;n.skip(i&7)}return o},create(t){return ea.fromPartial(t??{})},fromPartial(t){let e=My();return e.name=t.name??"",e.arguments=t.arguments??"",e}};function Py(){return{id:"",role:"",content:void 0,name:void 0,toolCalls:[],toolCallId:void 0,error:void 0,contentParts:[],metadata:void 0,subagentRunId:void 0,encryptedValue:void 0,activityType:void 0,activityContent:void 0}}var jn={encode(t,e=new B){t.id!==""&&e.uint32(10).string(t.id),t.role!==""&&e.uint32(18).string(t.role),t.content!==void 0&&e.uint32(26).string(t.content),t.name!==void 0&&e.uint32(34).string(t.name);for(let n of t.toolCalls)Qs.encode(n,e.uint32(42).fork()).join();t.toolCallId!==void 0&&e.uint32(50).string(t.toolCallId),t.error!==void 0&&e.uint32(58).string(t.error);for(let n of t.contentParts)Vn.encode(n,e.uint32(66).fork()).join();return t.metadata!==void 0&&se.encode(se.wrap(t.metadata),e.uint32(74).fork()).join(),t.subagentRunId!==void 0&&e.uint32(82).string(t.subagentRunId),t.encryptedValue!==void 0&&e.uint32(90).string(t.encryptedValue),t.activityType!==void 0&&e.uint32(98).string(t.activityType),t.activityContent!==void 0&&se.encode(se.wrap(t.activityContent),e.uint32(106).fork()).join(),e},decode(t,e){let n=t instanceof N?t:new N(t),r=e===void 0?n.len:n.pos+e,o=Py();for(;n.pos<r;){let i=n.uint32();switch(i>>>3){case 1:if(i!==10)break;o.id=n.string();continue;case 2:if(i!==18)break;o.role=n.string();continue;case 3:if(i!==26)break;o.content=n.string();continue;case 4:if(i!==34)break;o.name=n.string();continue;case 5:if(i!==42)break;o.toolCalls.push(Qs.decode(n,n.uint32()));continue;case 6:if(i!==50)break;o.toolCallId=n.string();continue;case 7:if(i!==58)break;o.error=n.string();continue;case 8:if(i!==66)break;o.contentParts.push(Vn.decode(n,n.uint32()));continue;case 9:if(i!==74)break;o.metadata=se.unwrap(se.decode(n,n.uint32()));continue;case 10:if(i!==82)break;o.subagentRunId=n.string();continue;case 11:if(i!==90)break;o.encryptedValue=n.string();continue;case 12:if(i!==98)break;o.activityType=n.string();continue;case 13:if(i!==106)break;o.activityContent=se.unwrap(se.decode(n,n.uint32()));continue}if((i&7)===4||i===0)break;n.skip(i&7)}return o},create(t){return jn.fromPartial(t??{})},fromPartial(t){let e=Py();return e.id=t.id??"",e.role=t.role??"",e.content=t.content??void 0,e.name=t.name??void 0,e.toolCalls=t.toolCalls?.map(n=>Qs.fromPartial(n))||[],e.toolCallId=t.toolCallId??void 0,e.error=t.error??void 0,e.contentParts=t.contentParts?.map(n=>Vn.fromPartial(n))||[],e.metadata=t.metadata??void 0,e.subagentRunId=t.subagentRunId??void 0,e.encryptedValue=t.encryptedValue??void 0,e.activityType=t.activityType??void 0,e.activityContent=t.activityContent??void 0,e}};function Ly(){return{name:"",description:"",parameters:void 0,metadata:void 0}}var ta={encode(t,e=new B){return t.name!==""&&e.uint32(10).string(t.name),t.description!==""&&e.uint32(18).string(t.description),t.parameters!==void 0&&H.encode(H.wrap(t.parameters),e.uint32(26).fork()).join(),t.metadata!==void 0&&se.encode(se.wrap(t.metadata),e.uint32(34).fork()).join(),e},decode(t,e){let n=t instanceof N?t:new N(t),r=e===void 0?n.len:n.pos+e,o=Ly();for(;n.pos<r;){let i=n.uint32();switch(i>>>3){case 1:if(i!==10)break;o.name=n.string();continue;case 2:if(i!==18)break;o.description=n.string();continue;case 3:if(i!==26)break;o.parameters=H.unwrap(H.decode(n,n.uint32()));continue;case 4:if(i!==34)break;o.metadata=se.unwrap(se.decode(n,n.uint32()));continue}if((i&7)===4||i===0)break;n.skip(i&7)}return o},create(t){return ta.fromPartial(t??{})},fromPartial(t){let e=Ly();return e.name=t.name??"",e.description=t.description??"",e.parameters=t.parameters??void 0,e.metadata=t.metadata??void 0,e}};function zy(){return{description:"",value:""}}var na={encode(t,e=new B){return t.description!==""&&e.uint32(10).string(t.description),t.value!==""&&e.uint32(18).string(t.value),e},decode(t,e){let n=t instanceof N?t:new N(t),r=e===void 0?n.len:n.pos+e,o=zy();for(;n.pos<r;){let i=n.uint32();switch(i>>>3){case 1:if(i!==10)break;o.description=n.string();continue;case 2:if(i!==18)break;o.value=n.string();continue}if((i&7)===4||i===0)break;n.skip(i&7)}return o},create(t){return na.fromPartial(t??{})},fromPartial(t){let e=zy();return e.description=t.description??"",e.value=t.value??"",e}};function Dy(){return{interruptId:"",status:"",payload:void 0,metadata:void 0}}var ra={encode(t,e=new B){return t.interruptId!==""&&e.uint32(10).string(t.interruptId),t.status!==""&&e.uint32(18).string(t.status),t.payload!==void 0&&H.encode(H.wrap(t.payload),e.uint32(26).fork()).join(),t.metadata!==void 0&&se.encode(se.wrap(t.metadata),e.uint32(34).fork()).join(),e},decode(t,e){let n=t instanceof N?t:new N(t),r=e===void 0?n.len:n.pos+e,o=Dy();for(;n.pos<r;){let i=n.uint32();switch(i>>>3){case 1:if(i!==10)break;o.interruptId=n.string();continue;case 2:if(i!==18)break;o.status=n.string();continue;case 3:if(i!==26)break;o.payload=H.unwrap(H.decode(n,n.uint32()));continue;case 4:if(i!==34)break;o.metadata=se.unwrap(se.decode(n,n.uint32()));continue}if((i&7)===4||i===0)break;n.skip(i&7)}return o},create(t){return ra.fromPartial(t??{})},fromPartial(t){let e=Dy();return e.interruptId=t.interruptId??"",e.status=t.status??"",e.payload=t.payload??void 0,e.metadata=t.metadata??void 0,e}};function $y(){return{threadId:"",runId:"",parentRunId:void 0,state:void 0,messages:[],tools:[],context:[],forwardedProps:void 0,resume:[],protocolVersion:void 0}}var oa={encode(t,e=new B){t.threadId!==""&&e.uint32(10).string(t.threadId),t.runId!==""&&e.uint32(18).string(t.runId),t.parentRunId!==void 0&&e.uint32(26).string(t.parentRunId),t.state!==void 0&&H.encode(H.wrap(t.state),e.uint32(34).fork()).join();for(let n of t.messages)jn.encode(n,e.uint32(42).fork()).join();for(let n of t.tools)ta.encode(n,e.uint32(50).fork()).join();for(let n of t.context)na.encode(n,e.uint32(58).fork()).join();t.forwardedProps!==void 0&&H.encode(H.wrap(t.forwardedProps),e.uint32(66).fork()).join();for(let n of t.resume)ra.encode(n,e.uint32(74).fork()).join();return t.protocolVersion!==void 0&&e.uint32(82).string(t.protocolVersion),e},decode(t,e){let n=t instanceof N?t:new N(t),r=e===void 0?n.len:n.pos+e,o=$y();for(;n.pos<r;){let i=n.uint32();switch(i>>>3){case 1:if(i!==10)break;o.threadId=n.string();continue;case 2:if(i!==18)break;o.runId=n.string();continue;case 3:if(i!==26)break;o.parentRunId=n.string();continue;case 4:if(i!==34)break;o.state=H.unwrap(H.decode(n,n.uint32()));continue;case 5:if(i!==42)break;o.messages.push(jn.decode(n,n.uint32()));continue;case 6:if(i!==50)break;o.tools.push(ta.decode(n,n.uint32()));continue;case 7:if(i!==58)break;o.context.push(na.decode(n,n.uint32()));continue;case 8:if(i!==66)break;o.forwardedProps=H.unwrap(H.decode(n,n.uint32()));continue;case 9:if(i!==74)break;o.resume.push(ra.decode(n,n.uint32()));continue;case 10:if(i!==82)break;o.protocolVersion=n.string();continue}if((i&7)===4||i===0)break;n.skip(i&7)}return o},create(t){return oa.fromPartial(t??{})},fromPartial(t){let e=$y();return e.threadId=t.threadId??"",e.runId=t.runId??"",e.parentRunId=t.parentRunId??void 0,e.state=t.state??void 0,e.messages=t.messages?.map(n=>jn.fromPartial(n))||[],e.tools=t.tools?.map(n=>ta.fromPartial(n))||[],e.context=t.context?.map(n=>na.fromPartial(n))||[],e.forwardedProps=t.forwardedProps??void 0,e.resume=t.resume?.map(n=>ra.fromPartial(n))||[],e.protocolVersion=t.protocolVersion??void 0,e}};function Uy(){return{id:"",reason:"",message:void 0,toolCallId:void 0,responseSchema:void 0,expiresAt:void 0,metadata:void 0,subagentRunId:void 0}}var ia={encode(t,e=new B){return t.id!==""&&e.uint32(10).string(t.id),t.reason!==""&&e.uint32(18).string(t.reason),t.message!==void 0&&e.uint32(26).string(t.message),t.toolCallId!==void 0&&e.uint32(34).string(t.toolCallId),t.responseSchema!==void 0&&H.encode(H.wrap(t.responseSchema),e.uint32(42).fork()).join(),t.expiresAt!==void 0&&e.uint32(50).string(t.expiresAt),t.metadata!==void 0&&H.encode(H.wrap(t.metadata),e.uint32(58).fork()).join(),t.subagentRunId!==void 0&&e.uint32(66).string(t.subagentRunId),e},decode(t,e){let n=t instanceof N?t:new N(t),r=e===void 0?n.len:n.pos+e,o=Uy();for(;n.pos<r;){let i=n.uint32();switch(i>>>3){case 1:if(i!==10)break;o.id=n.string();continue;case 2:if(i!==18)break;o.reason=n.string();continue;case 3:if(i!==26)break;o.message=n.string();continue;case 4:if(i!==34)break;o.toolCallId=n.string();continue;case 5:if(i!==42)break;o.responseSchema=H.unwrap(H.decode(n,n.uint32()));continue;case 6:if(i!==50)break;o.expiresAt=n.string();continue;case 7:if(i!==58)break;o.metadata=H.unwrap(H.decode(n,n.uint32()));continue;case 8:if(i!==66)break;o.subagentRunId=n.string();continue}if((i&7)===4||i===0)break;n.skip(i&7)}return o},create(t){return ia.fromPartial(t??{})},fromPartial(t){let e=Uy();return e.id=t.id??"",e.reason=t.reason??"",e.message=t.message??void 0,e.toolCallId=t.toolCallId??void 0,e.responseSchema=t.responseSchema??void 0,e.expiresAt=t.expiresAt??void 0,e.metadata=t.metadata??void 0,e.subagentRunId=t.subagentRunId??void 0,e}},gR=(function(t){return t[t.TEXT_MESSAGE_START=0]="TEXT_MESSAGE_START",t[t.TEXT_MESSAGE_CONTENT=1]="TEXT_MESSAGE_CONTENT",t[t.TEXT_MESSAGE_END=2]="TEXT_MESSAGE_END",t[t.TOOL_CALL_START=3]="TOOL_CALL_START",t[t.TOOL_CALL_ARGS=4]="TOOL_CALL_ARGS",t[t.TOOL_CALL_END=5]="TOOL_CALL_END",t[t.STATE_SNAPSHOT=6]="STATE_SNAPSHOT",t[t.STATE_DELTA=7]="STATE_DELTA",t[t.MESSAGES_SNAPSHOT=8]="MESSAGES_SNAPSHOT",t[t.RAW=9]="RAW",t[t.CUSTOM=10]="CUSTOM",t[t.RUN_STARTED=11]="RUN_STARTED",t[t.RUN_FINISHED=12]="RUN_FINISHED",t[t.RUN_ERROR=13]="RUN_ERROR",t[t.STEP_STARTED=14]="STEP_STARTED",t[t.STEP_FINISHED=15]="STEP_FINISHED",t[t.SUBAGENT_STARTED=16]="SUBAGENT_STARTED",t[t.SUBAGENT_FINISHED=17]="SUBAGENT_FINISHED",t[t.SUBAGENT_ERROR=18]="SUBAGENT_ERROR",t[t.TEXT_MESSAGE_CHUNK=19]="TEXT_MESSAGE_CHUNK",t[t.TOOL_CALL_CHUNK=20]="TOOL_CALL_CHUNK",t[t.TOOL_CALL_RESULT=21]="TOOL_CALL_RESULT",t[t.ACTIVITY_SNAPSHOT=22]="ACTIVITY_SNAPSHOT",t[t.ACTIVITY_DELTA=23]="ACTIVITY_DELTA",t[t.REASONING_START=24]="REASONING_START",t[t.REASONING_MESSAGE_START=25]="REASONING_MESSAGE_START",t[t.REASONING_MESSAGE_CONTENT=26]="REASONING_MESSAGE_CONTENT",t[t.REASONING_MESSAGE_END=27]="REASONING_MESSAGE_END",t[t.REASONING_MESSAGE_CHUNK=28]="REASONING_MESSAGE_CHUNK",t[t.REASONING_END=29]="REASONING_END",t[t.REASONING_ENCRYPTED_VALUE=30]="REASONING_ENCRYPTED_VALUE",t[t.UNRECOGNIZED=-1]="UNRECOGNIZED",t})({});function Hy(){return{type:0,timestamp:void 0,rawEvent:void 0,metadata:void 0}}var D={encode(t,e=new B){return t.type!==0&&e.uint32(8).int32(t.type),t.timestamp!==void 0&&e.uint32(16).int64(t.timestamp),t.rawEvent!==void 0&&H.encode(H.wrap(t.rawEvent),e.uint32(26).fork()).join(),t.metadata!==void 0&&se.encode(se.wrap(t.metadata),e.uint32(34).fork()).join(),e},decode(t,e){let n=t instanceof N?t:new N(t),r=e===void 0?n.len:n.pos+e,o=Hy();for(;n.pos<r;){let i=n.uint32();switch(i>>>3){case 1:if(i!==8)break;o.type=n.int32();continue;case 2:if(i!==16)break;o.timestamp=Fn(n.int64());continue;case 3:if(i!==26)break;o.rawEvent=H.unwrap(H.decode(n,n.uint32()));continue;case 4:if(i!==34)break;o.metadata=se.unwrap(se.decode(n,n.uint32()));continue}if((i&7)===4||i===0)break;n.skip(i&7)}return o},create(t){return D.fromPartial(t??{})},fromPartial(t){let e=Hy();return e.type=t.type??0,e.timestamp=t.timestamp??void 0,e.rawEvent=t.rawEvent??void 0,e.metadata=t.metadata??void 0,e}};function Fy(){return{baseEvent:void 0,messageId:"",role:void 0,name:void 0,subagentRunId:void 0}}var sa={encode(t,e=new B){return t.baseEvent!==void 0&&D.encode(t.baseEvent,e.uint32(10).fork()).join(),t.messageId!==""&&e.uint32(18).string(t.messageId),t.role!==void 0&&e.uint32(26).string(t.role),t.name!==void 0&&e.uint32(34).string(t.name),t.subagentRunId!==void 0&&e.uint32(42).string(t.subagentRunId),e},decode(t,e){let n=t instanceof N?t:new N(t),r=e===void 0?n.len:n.pos+e,o=Fy();for(;n.pos<r;){let i=n.uint32();switch(i>>>3){case 1:if(i!==10)break;o.baseEvent=D.decode(n,n.uint32());continue;case 2:if(i!==18)break;o.messageId=n.string();continue;case 3:if(i!==26)break;o.role=n.string();continue;case 4:if(i!==34)break;o.name=n.string();continue;case 5:if(i!==42)break;o.subagentRunId=n.string();continue}if((i&7)===4||i===0)break;n.skip(i&7)}return o},create(t){return sa.fromPartial(t??{})},fromPartial(t){let e=Fy();return e.baseEvent=t.baseEvent!==void 0&&t.baseEvent!==null?D.fromPartial(t.baseEvent):void 0,e.messageId=t.messageId??"",e.role=t.role??void 0,e.name=t.name??void 0,e.subagentRunId=t.subagentRunId??void 0,e}};function Gy(){return{baseEvent:void 0,messageId:"",delta:"",subagentRunId:void 0}}var aa={encode(t,e=new B){return t.baseEvent!==void 0&&D.encode(t.baseEvent,e.uint32(10).fork()).join(),t.messageId!==""&&e.uint32(18).string(t.messageId),t.delta!==""&&e.uint32(26).string(t.delta),t.subagentRunId!==void 0&&e.uint32(34).string(t.subagentRunId),e},decode(t,e){let n=t instanceof N?t:new N(t),r=e===void 0?n.len:n.pos+e,o=Gy();for(;n.pos<r;){let i=n.uint32();switch(i>>>3){case 1:if(i!==10)break;o.baseEvent=D.decode(n,n.uint32());continue;case 2:if(i!==18)break;o.messageId=n.string();continue;case 3:if(i!==26)break;o.delta=n.string();continue;case 4:if(i!==34)break;o.subagentRunId=n.string();continue}if((i&7)===4||i===0)break;n.skip(i&7)}return o},create(t){return aa.fromPartial(t??{})},fromPartial(t){let e=Gy();return e.baseEvent=t.baseEvent!==void 0&&t.baseEvent!==null?D.fromPartial(t.baseEvent):void 0,e.messageId=t.messageId??"",e.delta=t.delta??"",e.subagentRunId=t.subagentRunId??void 0,e}};function By(){return{baseEvent:void 0,messageId:"",subagentRunId:void 0}}var la={encode(t,e=new B){return t.baseEvent!==void 0&&D.encode(t.baseEvent,e.uint32(10).fork()).join(),t.messageId!==""&&e.uint32(18).string(t.messageId),t.subagentRunId!==void 0&&e.uint32(26).string(t.subagentRunId),e},decode(t,e){let n=t instanceof N?t:new N(t),r=e===void 0?n.len:n.pos+e,o=By();for(;n.pos<r;){let i=n.uint32();switch(i>>>3){case 1:if(i!==10)break;o.baseEvent=D.decode(n,n.uint32());continue;case 2:if(i!==18)break;o.messageId=n.string();continue;case 3:if(i!==26)break;o.subagentRunId=n.string();continue}if((i&7)===4||i===0)break;n.skip(i&7)}return o},create(t){return la.fromPartial(t??{})},fromPartial(t){let e=By();return e.baseEvent=t.baseEvent!==void 0&&t.baseEvent!==null?D.fromPartial(t.baseEvent):void 0,e.messageId=t.messageId??"",e.subagentRunId=t.subagentRunId??void 0,e}};function Vy(){return{baseEvent:void 0,messageId:void 0,role:void 0,delta:void 0,name:void 0,subagentRunId:void 0}}var da={encode(t,e=new B){return t.baseEvent!==void 0&&D.encode(t.baseEvent,e.uint32(10).fork()).join(),t.messageId!==void 0&&e.uint32(18).string(t.messageId),t.role!==void 0&&e.uint32(26).string(t.role),t.delta!==void 0&&e.uint32(34).string(t.delta),t.name!==void 0&&e.uint32(42).string(t.name),t.subagentRunId!==void 0&&e.uint32(50).string(t.subagentRunId),e},decode(t,e){let n=t instanceof N?t:new N(t),r=e===void 0?n.len:n.pos+e,o=Vy();for(;n.pos<r;){let i=n.uint32();switch(i>>>3){case 1:if(i!==10)break;o.baseEvent=D.decode(n,n.uint32());continue;case 2:if(i!==18)break;o.messageId=n.string();continue;case 3:if(i!==26)break;o.role=n.string();continue;case 4:if(i!==34)break;o.delta=n.string();continue;case 5:if(i!==42)break;o.name=n.string();continue;case 6:if(i!==50)break;o.subagentRunId=n.string();continue}if((i&7)===4||i===0)break;n.skip(i&7)}return o},create(t){return da.fromPartial(t??{})},fromPartial(t){let e=Vy();return e.baseEvent=t.baseEvent!==void 0&&t.baseEvent!==null?D.fromPartial(t.baseEvent):void 0,e.messageId=t.messageId??void 0,e.role=t.role??void 0,e.delta=t.delta??void 0,e.name=t.name??void 0,e.subagentRunId=t.subagentRunId??void 0,e}};function jy(){return{baseEvent:void 0,toolCallId:"",toolCallName:"",parentMessageId:void 0,subagentRunId:void 0}}var ca={encode(t,e=new B){return t.baseEvent!==void 0&&D.encode(t.baseEvent,e.uint32(10).fork()).join(),t.toolCallId!==""&&e.uint32(18).string(t.toolCallId),t.toolCallName!==""&&e.uint32(26).string(t.toolCallName),t.parentMessageId!==void 0&&e.uint32(34).string(t.parentMessageId),t.subagentRunId!==void 0&&e.uint32(42).string(t.subagentRunId),e},decode(t,e){let n=t instanceof N?t:new N(t),r=e===void 0?n.len:n.pos+e,o=jy();for(;n.pos<r;){let i=n.uint32();switch(i>>>3){case 1:if(i!==10)break;o.baseEvent=D.decode(n,n.uint32());continue;case 2:if(i!==18)break;o.toolCallId=n.string();continue;case 3:if(i!==26)break;o.toolCallName=n.string();continue;case 4:if(i!==34)break;o.parentMessageId=n.string();continue;case 5:if(i!==42)break;o.subagentRunId=n.string();continue}if((i&7)===4||i===0)break;n.skip(i&7)}return o},create(t){return ca.fromPartial(t??{})},fromPartial(t){let e=jy();return e.baseEvent=t.baseEvent!==void 0&&t.baseEvent!==null?D.fromPartial(t.baseEvent):void 0,e.toolCallId=t.toolCallId??"",e.toolCallName=t.toolCallName??"",e.parentMessageId=t.parentMessageId??void 0,e.subagentRunId=t.subagentRunId??void 0,e}};function Zy(){return{baseEvent:void 0,toolCallId:"",delta:"",subagentRunId:void 0}}var ua={encode(t,e=new B){return t.baseEvent!==void 0&&D.encode(t.baseEvent,e.uint32(10).fork()).join(),t.toolCallId!==""&&e.uint32(18).string(t.toolCallId),t.delta!==""&&e.uint32(26).string(t.delta),t.subagentRunId!==void 0&&e.uint32(34).string(t.subagentRunId),e},decode(t,e){let n=t instanceof N?t:new N(t),r=e===void 0?n.len:n.pos+e,o=Zy();for(;n.pos<r;){let i=n.uint32();switch(i>>>3){case 1:if(i!==10)break;o.baseEvent=D.decode(n,n.uint32());continue;case 2:if(i!==18)break;o.toolCallId=n.string();continue;case 3:if(i!==26)break;o.delta=n.string();continue;case 4:if(i!==34)break;o.subagentRunId=n.string();continue}if((i&7)===4||i===0)break;n.skip(i&7)}return o},create(t){return ua.fromPartial(t??{})},fromPartial(t){let e=Zy();return e.baseEvent=t.baseEvent!==void 0&&t.baseEvent!==null?D.fromPartial(t.baseEvent):void 0,e.toolCallId=t.toolCallId??"",e.delta=t.delta??"",e.subagentRunId=t.subagentRunId??void 0,e}};function Wy(){return{baseEvent:void 0,toolCallId:"",subagentRunId:void 0}}var ha={encode(t,e=new B){return t.baseEvent!==void 0&&D.encode(t.baseEvent,e.uint32(10).fork()).join(),t.toolCallId!==""&&e.uint32(18).string(t.toolCallId),t.subagentRunId!==void 0&&e.uint32(26).string(t.subagentRunId),e},decode(t,e){let n=t instanceof N?t:new N(t),r=e===void 0?n.len:n.pos+e,o=Wy();for(;n.pos<r;){let i=n.uint32();switch(i>>>3){case 1:if(i!==10)break;o.baseEvent=D.decode(n,n.uint32());continue;case 2:if(i!==18)break;o.toolCallId=n.string();continue;case 3:if(i!==26)break;o.subagentRunId=n.string();continue}if((i&7)===4||i===0)break;n.skip(i&7)}return o},create(t){return ha.fromPartial(t??{})},fromPartial(t){let e=Wy();return e.baseEvent=t.baseEvent!==void 0&&t.baseEvent!==null?D.fromPartial(t.baseEvent):void 0,e.toolCallId=t.toolCallId??"",e.subagentRunId=t.subagentRunId??void 0,e}};function qy(){return{baseEvent:void 0,toolCallId:void 0,toolCallName:void 0,parentMessageId:void 0,delta:void 0,subagentRunId:void 0}}var pa={encode(t,e=new B){return t.baseEvent!==void 0&&D.encode(t.baseEvent,e.uint32(10).fork()).join(),t.toolCallId!==void 0&&e.uint32(18).string(t.toolCallId),t.toolCallName!==void 0&&e.uint32(26).string(t.toolCallName),t.parentMessageId!==void 0&&e.uint32(34).string(t.parentMessageId),t.delta!==void 0&&e.uint32(42).string(t.delta),t.subagentRunId!==void 0&&e.uint32(50).string(t.subagentRunId),e},decode(t,e){let n=t instanceof N?t:new N(t),r=e===void 0?n.len:n.pos+e,o=qy();for(;n.pos<r;){let i=n.uint32();switch(i>>>3){case 1:if(i!==10)break;o.baseEvent=D.decode(n,n.uint32());continue;case 2:if(i!==18)break;o.toolCallId=n.string();continue;case 3:if(i!==26)break;o.toolCallName=n.string();continue;case 4:if(i!==34)break;o.parentMessageId=n.string();continue;case 5:if(i!==42)break;o.delta=n.string();continue;case 6:if(i!==50)break;o.subagentRunId=n.string();continue}if((i&7)===4||i===0)break;n.skip(i&7)}return o},create(t){return pa.fromPartial(t??{})},fromPartial(t){let e=qy();return e.baseEvent=t.baseEvent!==void 0&&t.baseEvent!==null?D.fromPartial(t.baseEvent):void 0,e.toolCallId=t.toolCallId??void 0,e.toolCallName=t.toolCallName??void 0,e.parentMessageId=t.parentMessageId??void 0,e.delta=t.delta??void 0,e.subagentRunId=t.subagentRunId??void 0,e}};function Yy(){return{baseEvent:void 0,subagentRunId:void 0,messageId:"",toolCallId:"",content:void 0,role:void 0,contentParts:[]}}var fa={encode(t,e=new B){t.baseEvent!==void 0&&D.encode(t.baseEvent,e.uint32(10).fork()).join(),t.subagentRunId!==void 0&&e.uint32(18).string(t.subagentRunId),t.messageId!==""&&e.uint32(26).string(t.messageId),t.toolCallId!==""&&e.uint32(34).string(t.toolCallId),t.content!==void 0&&e.uint32(42).string(t.content),t.role!==void 0&&e.uint32(50).string(t.role);for(let n of t.contentParts)Vn.encode(n,e.uint32(58).fork()).join();return e},decode(t,e){let n=t instanceof N?t:new N(t),r=e===void 0?n.len:n.pos+e,o=Yy();for(;n.pos<r;){let i=n.uint32();switch(i>>>3){case 1:if(i!==10)break;o.baseEvent=D.decode(n,n.uint32());continue;case 2:if(i!==18)break;o.subagentRunId=n.string();continue;case 3:if(i!==26)break;o.messageId=n.string();continue;case 4:if(i!==34)break;o.toolCallId=n.string();continue;case 5:if(i!==42)break;o.content=n.string();continue;case 6:if(i!==50)break;o.role=n.string();continue;case 7:if(i!==58)break;o.contentParts.push(Vn.decode(n,n.uint32()));continue}if((i&7)===4||i===0)break;n.skip(i&7)}return o},create(t){return fa.fromPartial(t??{})},fromPartial(t){let e=Yy();return e.baseEvent=t.baseEvent!==void 0&&t.baseEvent!==null?D.fromPartial(t.baseEvent):void 0,e.subagentRunId=t.subagentRunId??void 0,e.messageId=t.messageId??"",e.toolCallId=t.toolCallId??"",e.content=t.content??void 0,e.role=t.role??void 0,e.contentParts=t.contentParts?.map(n=>Vn.fromPartial(n))||[],e}};function Ky(){return{baseEvent:void 0,snapshot:void 0,subagentRunId:void 0}}var ma={encode(t,e=new B){return t.baseEvent!==void 0&&D.encode(t.baseEvent,e.uint32(10).fork()).join(),t.snapshot!==void 0&&H.encode(H.wrap(t.snapshot),e.uint32(18).fork()).join(),t.subagentRunId!==void 0&&e.uint32(26).string(t.subagentRunId),e},decode(t,e){let n=t instanceof N?t:new N(t),r=e===void 0?n.len:n.pos+e,o=Ky();for(;n.pos<r;){let i=n.uint32();switch(i>>>3){case 1:if(i!==10)break;o.baseEvent=D.decode(n,n.uint32());continue;case 2:if(i!==18)break;o.snapshot=H.unwrap(H.decode(n,n.uint32()));continue;case 3:if(i!==26)break;o.subagentRunId=n.string();continue}if((i&7)===4||i===0)break;n.skip(i&7)}return o},create(t){return ma.fromPartial(t??{})},fromPartial(t){let e=Ky();return e.baseEvent=t.baseEvent!==void 0&&t.baseEvent!==null?D.fromPartial(t.baseEvent):void 0,e.snapshot=t.snapshot??void 0,e.subagentRunId=t.subagentRunId??void 0,e}};function Xy(){return{baseEvent:void 0,delta:[],subagentRunId:void 0}}var ga={encode(t,e=new B){t.baseEvent!==void 0&&D.encode(t.baseEvent,e.uint32(10).fork()).join();for(let n of t.delta)Bn.encode(n,e.uint32(18).fork()).join();return t.subagentRunId!==void 0&&e.uint32(26).string(t.subagentRunId),e},decode(t,e){let n=t instanceof N?t:new N(t),r=e===void 0?n.len:n.pos+e,o=Xy();for(;n.pos<r;){let i=n.uint32();switch(i>>>3){case 1:if(i!==10)break;o.baseEvent=D.decode(n,n.uint32());continue;case 2:if(i!==18)break;o.delta.push(Bn.decode(n,n.uint32()));continue;case 3:if(i!==26)break;o.subagentRunId=n.string();continue}if((i&7)===4||i===0)break;n.skip(i&7)}return o},create(t){return ga.fromPartial(t??{})},fromPartial(t){let e=Xy();return e.baseEvent=t.baseEvent!==void 0&&t.baseEvent!==null?D.fromPartial(t.baseEvent):void 0,e.delta=t.delta?.map(n=>Bn.fromPartial(n))||[],e.subagentRunId=t.subagentRunId??void 0,e}};function Jy(){return{baseEvent:void 0,messages:[]}}var va={encode(t,e=new B){t.baseEvent!==void 0&&D.encode(t.baseEvent,e.uint32(10).fork()).join();for(let n of t.messages)jn.encode(n,e.uint32(18).fork()).join();return e},decode(t,e){let n=t instanceof N?t:new N(t),r=e===void 0?n.len:n.pos+e,o=Jy();for(;n.pos<r;){let i=n.uint32();switch(i>>>3){case 1:if(i!==10)break;o.baseEvent=D.decode(n,n.uint32());continue;case 2:if(i!==18)break;o.messages.push(jn.decode(n,n.uint32()));continue}if((i&7)===4||i===0)break;n.skip(i&7)}return o},create(t){return va.fromPartial(t??{})},fromPartial(t){let e=Jy();return e.baseEvent=t.baseEvent!==void 0&&t.baseEvent!==null?D.fromPartial(t.baseEvent):void 0,e.messages=t.messages?.map(n=>jn.fromPartial(n))||[],e}};function Qy(){return{baseEvent:void 0,subagentRunId:void 0,messageId:"",activityType:"",content:void 0,replace:void 0}}var ba={encode(t,e=new B){return t.baseEvent!==void 0&&D.encode(t.baseEvent,e.uint32(10).fork()).join(),t.subagentRunId!==void 0&&e.uint32(18).string(t.subagentRunId),t.messageId!==""&&e.uint32(26).string(t.messageId),t.activityType!==""&&e.uint32(34).string(t.activityType),t.content!==void 0&&se.encode(se.wrap(t.content),e.uint32(42).fork()).join(),t.replace!==void 0&&e.uint32(48).bool(t.replace),e},decode(t,e){let n=t instanceof N?t:new N(t),r=e===void 0?n.len:n.pos+e,o=Qy();for(;n.pos<r;){let i=n.uint32();switch(i>>>3){case 1:if(i!==10)break;o.baseEvent=D.decode(n,n.uint32());continue;case 2:if(i!==18)break;o.subagentRunId=n.string();continue;case 3:if(i!==26)break;o.messageId=n.string();continue;case 4:if(i!==34)break;o.activityType=n.string();continue;case 5:if(i!==42)break;o.content=se.unwrap(se.decode(n,n.uint32()));continue;case 6:if(i!==48)break;o.replace=n.bool();continue}if((i&7)===4||i===0)break;n.skip(i&7)}return o},create(t){return ba.fromPartial(t??{})},fromPartial(t){let e=Qy();return e.baseEvent=t.baseEvent!==void 0&&t.baseEvent!==null?D.fromPartial(t.baseEvent):void 0,e.subagentRunId=t.subagentRunId??void 0,e.messageId=t.messageId??"",e.activityType=t.activityType??"",e.content=t.content??void 0,e.replace=t.replace??void 0,e}};function ew(){return{baseEvent:void 0,subagentRunId:void 0,messageId:"",activityType:"",patch:[]}}var ya={encode(t,e=new B){t.baseEvent!==void 0&&D.encode(t.baseEvent,e.uint32(10).fork()).join(),t.subagentRunId!==void 0&&e.uint32(18).string(t.subagentRunId),t.messageId!==""&&e.uint32(26).string(t.messageId),t.activityType!==""&&e.uint32(34).string(t.activityType);for(let n of t.patch)Bn.encode(n,e.uint32(42).fork()).join();return e},decode(t,e){let n=t instanceof N?t:new N(t),r=e===void 0?n.len:n.pos+e,o=ew();for(;n.pos<r;){let i=n.uint32();switch(i>>>3){case 1:if(i!==10)break;o.baseEvent=D.decode(n,n.uint32());continue;case 2:if(i!==18)break;o.subagentRunId=n.string();continue;case 3:if(i!==26)break;o.messageId=n.string();continue;case 4:if(i!==34)break;o.activityType=n.string();continue;case 5:if(i!==42)break;o.patch.push(Bn.decode(n,n.uint32()));continue}if((i&7)===4||i===0)break;n.skip(i&7)}return o},create(t){return ya.fromPartial(t??{})},fromPartial(t){let e=ew();return e.baseEvent=t.baseEvent!==void 0&&t.baseEvent!==null?D.fromPartial(t.baseEvent):void 0,e.subagentRunId=t.subagentRunId??void 0,e.messageId=t.messageId??"",e.activityType=t.activityType??"",e.patch=t.patch?.map(n=>Bn.fromPartial(n))||[],e}};function tw(){return{baseEvent:void 0,event:void 0,source:void 0,subagentRunId:void 0}}var wa={encode(t,e=new B){return t.baseEvent!==void 0&&D.encode(t.baseEvent,e.uint32(10).fork()).join(),t.event!==void 0&&H.encode(H.wrap(t.event),e.uint32(18).fork()).join(),t.source!==void 0&&e.uint32(26).string(t.source),t.subagentRunId!==void 0&&e.uint32(34).string(t.subagentRunId),e},decode(t,e){let n=t instanceof N?t:new N(t),r=e===void 0?n.len:n.pos+e,o=tw();for(;n.pos<r;){let i=n.uint32();switch(i>>>3){case 1:if(i!==10)break;o.baseEvent=D.decode(n,n.uint32());continue;case 2:if(i!==18)break;o.event=H.unwrap(H.decode(n,n.uint32()));continue;case 3:if(i!==26)break;o.source=n.string();continue;case 4:if(i!==34)break;o.subagentRunId=n.string();continue}if((i&7)===4||i===0)break;n.skip(i&7)}return o},create(t){return wa.fromPartial(t??{})},fromPartial(t){let e=tw();return e.baseEvent=t.baseEvent!==void 0&&t.baseEvent!==null?D.fromPartial(t.baseEvent):void 0,e.event=t.event??void 0,e.source=t.source??void 0,e.subagentRunId=t.subagentRunId??void 0,e}};function nw(){return{baseEvent:void 0,name:"",value:void 0,subagentRunId:void 0}}var Ea={encode(t,e=new B){return t.baseEvent!==void 0&&D.encode(t.baseEvent,e.uint32(10).fork()).join(),t.name!==""&&e.uint32(18).string(t.name),t.value!==void 0&&H.encode(H.wrap(t.value),e.uint32(26).fork()).join(),t.subagentRunId!==void 0&&e.uint32(34).string(t.subagentRunId),e},decode(t,e){let n=t instanceof N?t:new N(t),r=e===void 0?n.len:n.pos+e,o=nw();for(;n.pos<r;){let i=n.uint32();switch(i>>>3){case 1:if(i!==10)break;o.baseEvent=D.decode(n,n.uint32());continue;case 2:if(i!==18)break;o.name=n.string();continue;case 3:if(i!==26)break;o.value=H.unwrap(H.decode(n,n.uint32()));continue;case 4:if(i!==34)break;o.subagentRunId=n.string();continue}if((i&7)===4||i===0)break;n.skip(i&7)}return o},create(t){return Ea.fromPartial(t??{})},fromPartial(t){let e=nw();return e.baseEvent=t.baseEvent!==void 0&&t.baseEvent!==null?D.fromPartial(t.baseEvent):void 0,e.name=t.name??"",e.value=t.value??void 0,e.subagentRunId=t.subagentRunId??void 0,e}};function rw(){return{baseEvent:void 0,threadId:"",runId:"",parentRunId:void 0,input:void 0,protocolVersion:void 0}}var xa={encode(t,e=new B){return t.baseEvent!==void 0&&D.encode(t.baseEvent,e.uint32(10).fork()).join(),t.threadId!==""&&e.uint32(18).string(t.threadId),t.runId!==""&&e.uint32(26).string(t.runId),t.parentRunId!==void 0&&e.uint32(34).string(t.parentRunId),t.input!==void 0&&oa.encode(t.input,e.uint32(42).fork()).join(),t.protocolVersion!==void 0&&e.uint32(50).string(t.protocolVersion),e},decode(t,e){let n=t instanceof N?t:new N(t),r=e===void 0?n.len:n.pos+e,o=rw();for(;n.pos<r;){let i=n.uint32();switch(i>>>3){case 1:if(i!==10)break;o.baseEvent=D.decode(n,n.uint32());continue;case 2:if(i!==18)break;o.threadId=n.string();continue;case 3:if(i!==26)break;o.runId=n.string();continue;case 4:if(i!==34)break;o.parentRunId=n.string();continue;case 5:if(i!==42)break;o.input=oa.decode(n,n.uint32());continue;case 6:if(i!==50)break;o.protocolVersion=n.string();continue}if((i&7)===4||i===0)break;n.skip(i&7)}return o},create(t){return xa.fromPartial(t??{})},fromPartial(t){let e=rw();return e.baseEvent=t.baseEvent!==void 0&&t.baseEvent!==null?D.fromPartial(t.baseEvent):void 0,e.threadId=t.threadId??"",e.runId=t.runId??"",e.parentRunId=t.parentRunId??void 0,e.input=t.input!==void 0&&t.input!==null?oa.fromPartial(t.input):void 0,e.protocolVersion=t.protocolVersion??void 0,e}};function ow(){return{baseEvent:void 0,threadId:"",runId:"",result:void 0,outcome:"",interrupts:[],usage:[],pendingToolCallIds:[]}}var _a={encode(t,e=new B){t.baseEvent!==void 0&&D.encode(t.baseEvent,e.uint32(10).fork()).join(),t.threadId!==""&&e.uint32(18).string(t.threadId),t.runId!==""&&e.uint32(26).string(t.runId),t.result!==void 0&&H.encode(H.wrap(t.result),e.uint32(34).fork()).join(),t.outcome!==""&&e.uint32(42).string(t.outcome);for(let n of t.interrupts)ia.encode(n,e.uint32(50).fork()).join();for(let n of t.usage)Zn.encode(n,e.uint32(58).fork()).join();for(let n of t.pendingToolCallIds)e.uint32(66).string(n);return e},decode(t,e){let n=t instanceof N?t:new N(t),r=e===void 0?n.len:n.pos+e,o=ow();for(;n.pos<r;){let i=n.uint32();switch(i>>>3){case 1:if(i!==10)break;o.baseEvent=D.decode(n,n.uint32());continue;case 2:if(i!==18)break;o.threadId=n.string();continue;case 3:if(i!==26)break;o.runId=n.string();continue;case 4:if(i!==34)break;o.result=H.unwrap(H.decode(n,n.uint32()));continue;case 5:if(i!==42)break;o.outcome=n.string();continue;case 6:if(i!==50)break;o.interrupts.push(ia.decode(n,n.uint32()));continue;case 7:if(i!==58)break;o.usage.push(Zn.decode(n,n.uint32()));continue;case 8:if(i!==66)break;o.pendingToolCallIds.push(n.string());continue}if((i&7)===4||i===0)break;n.skip(i&7)}return o},create(t){return _a.fromPartial(t??{})},fromPartial(t){let e=ow();return e.baseEvent=t.baseEvent!==void 0&&t.baseEvent!==null?D.fromPartial(t.baseEvent):void 0,e.threadId=t.threadId??"",e.runId=t.runId??"",e.result=t.result??void 0,e.outcome=t.outcome??"",e.interrupts=t.interrupts?.map(n=>ia.fromPartial(n))||[],e.usage=t.usage?.map(n=>Zn.fromPartial(n))||[],e.pendingToolCallIds=t.pendingToolCallIds?.map(n=>n)||[],e}};function iw(){return{baseEvent:void 0,code:void 0,message:"",usage:[]}}var Ta={encode(t,e=new B){t.baseEvent!==void 0&&D.encode(t.baseEvent,e.uint32(10).fork()).join(),t.code!==void 0&&e.uint32(18).string(t.code),t.message!==""&&e.uint32(26).string(t.message);for(let n of t.usage)Zn.encode(n,e.uint32(34).fork()).join();return e},decode(t,e){let n=t instanceof N?t:new N(t),r=e===void 0?n.len:n.pos+e,o=iw();for(;n.pos<r;){let i=n.uint32();switch(i>>>3){case 1:if(i!==10)break;o.baseEvent=D.decode(n,n.uint32());continue;case 2:if(i!==18)break;o.code=n.string();continue;case 3:if(i!==26)break;o.message=n.string();continue;case 4:if(i!==34)break;o.usage.push(Zn.decode(n,n.uint32()));continue}if((i&7)===4||i===0)break;n.skip(i&7)}return o},create(t){return Ta.fromPartial(t??{})},fromPartial(t){let e=iw();return e.baseEvent=t.baseEvent!==void 0&&t.baseEvent!==null?D.fromPartial(t.baseEvent):void 0,e.code=t.code??void 0,e.message=t.message??"",e.usage=t.usage?.map(n=>Zn.fromPartial(n))||[],e}};function sw(){return{baseEvent:void 0,stepName:"",subagentRunId:void 0}}var Sa={encode(t,e=new B){return t.baseEvent!==void 0&&D.encode(t.baseEvent,e.uint32(10).fork()).join(),t.stepName!==""&&e.uint32(18).string(t.stepName),t.subagentRunId!==void 0&&e.uint32(26).string(t.subagentRunId),e},decode(t,e){let n=t instanceof N?t:new N(t),r=e===void 0?n.len:n.pos+e,o=sw();for(;n.pos<r;){let i=n.uint32();switch(i>>>3){case 1:if(i!==10)break;o.baseEvent=D.decode(n,n.uint32());continue;case 2:if(i!==18)break;o.stepName=n.string();continue;case 3:if(i!==26)break;o.subagentRunId=n.string();continue}if((i&7)===4||i===0)break;n.skip(i&7)}return o},create(t){return Sa.fromPartial(t??{})},fromPartial(t){let e=sw();return e.baseEvent=t.baseEvent!==void 0&&t.baseEvent!==null?D.fromPartial(t.baseEvent):void 0,e.stepName=t.stepName??"",e.subagentRunId=t.subagentRunId??void 0,e}};function aw(){return{baseEvent:void 0,stepName:"",subagentRunId:void 0}}var ka={encode(t,e=new B){return t.baseEvent!==void 0&&D.encode(t.baseEvent,e.uint32(10).fork()).join(),t.stepName!==""&&e.uint32(18).string(t.stepName),t.subagentRunId!==void 0&&e.uint32(26).string(t.subagentRunId),e},decode(t,e){let n=t instanceof N?t:new N(t),r=e===void 0?n.len:n.pos+e,o=aw();for(;n.pos<r;){let i=n.uint32();switch(i>>>3){case 1:if(i!==10)break;o.baseEvent=D.decode(n,n.uint32());continue;case 2:if(i!==18)break;o.stepName=n.string();continue;case 3:if(i!==26)break;o.subagentRunId=n.string();continue}if((i&7)===4||i===0)break;n.skip(i&7)}return o},create(t){return ka.fromPartial(t??{})},fromPartial(t){let e=aw();return e.baseEvent=t.baseEvent!==void 0&&t.baseEvent!==null?D.fromPartial(t.baseEvent):void 0,e.stepName=t.stepName??"",e.subagentRunId=t.subagentRunId??void 0,e}};function lw(){return{baseEvent:void 0,subagentRunId:void 0,messageId:""}}var Aa={encode(t,e=new B){return t.baseEvent!==void 0&&D.encode(t.baseEvent,e.uint32(10).fork()).join(),t.subagentRunId!==void 0&&e.uint32(18).string(t.subagentRunId),t.messageId!==""&&e.uint32(26).string(t.messageId),e},decode(t,e){let n=t instanceof N?t:new N(t),r=e===void 0?n.len:n.pos+e,o=lw();for(;n.pos<r;){let i=n.uint32();switch(i>>>3){case 1:if(i!==10)break;o.baseEvent=D.decode(n,n.uint32());continue;case 2:if(i!==18)break;o.subagentRunId=n.string();continue;case 3:if(i!==26)break;o.messageId=n.string();continue}if((i&7)===4||i===0)break;n.skip(i&7)}return o},create(t){return Aa.fromPartial(t??{})},fromPartial(t){let e=lw();return e.baseEvent=t.baseEvent!==void 0&&t.baseEvent!==null?D.fromPartial(t.baseEvent):void 0,e.subagentRunId=t.subagentRunId??void 0,e.messageId=t.messageId??"",e}};function dw(){return{baseEvent:void 0,subagentRunId:void 0,messageId:"",role:""}}var Ra={encode(t,e=new B){return t.baseEvent!==void 0&&D.encode(t.baseEvent,e.uint32(10).fork()).join(),t.subagentRunId!==void 0&&e.uint32(18).string(t.subagentRunId),t.messageId!==""&&e.uint32(26).string(t.messageId),t.role!==""&&e.uint32(34).string(t.role),e},decode(t,e){let n=t instanceof N?t:new N(t),r=e===void 0?n.len:n.pos+e,o=dw();for(;n.pos<r;){let i=n.uint32();switch(i>>>3){case 1:if(i!==10)break;o.baseEvent=D.decode(n,n.uint32());continue;case 2:if(i!==18)break;o.subagentRunId=n.string();continue;case 3:if(i!==26)break;o.messageId=n.string();continue;case 4:if(i!==34)break;o.role=n.string();continue}if((i&7)===4||i===0)break;n.skip(i&7)}return o},create(t){return Ra.fromPartial(t??{})},fromPartial(t){let e=dw();return e.baseEvent=t.baseEvent!==void 0&&t.baseEvent!==null?D.fromPartial(t.baseEvent):void 0,e.subagentRunId=t.subagentRunId??void 0,e.messageId=t.messageId??"",e.role=t.role??"",e}};function cw(){return{baseEvent:void 0,subagentRunId:void 0,messageId:"",delta:""}}var Ia={encode(t,e=new B){return t.baseEvent!==void 0&&D.encode(t.baseEvent,e.uint32(10).fork()).join(),t.subagentRunId!==void 0&&e.uint32(18).string(t.subagentRunId),t.messageId!==""&&e.uint32(26).string(t.messageId),t.delta!==""&&e.uint32(34).string(t.delta),e},decode(t,e){let n=t instanceof N?t:new N(t),r=e===void 0?n.len:n.pos+e,o=cw();for(;n.pos<r;){let i=n.uint32();switch(i>>>3){case 1:if(i!==10)break;o.baseEvent=D.decode(n,n.uint32());continue;case 2:if(i!==18)break;o.subagentRunId=n.string();continue;case 3:if(i!==26)break;o.messageId=n.string();continue;case 4:if(i!==34)break;o.delta=n.string();continue}if((i&7)===4||i===0)break;n.skip(i&7)}return o},create(t){return Ia.fromPartial(t??{})},fromPartial(t){let e=cw();return e.baseEvent=t.baseEvent!==void 0&&t.baseEvent!==null?D.fromPartial(t.baseEvent):void 0,e.subagentRunId=t.subagentRunId??void 0,e.messageId=t.messageId??"",e.delta=t.delta??"",e}};function uw(){return{baseEvent:void 0,subagentRunId:void 0,messageId:""}}var Ca={encode(t,e=new B){return t.baseEvent!==void 0&&D.encode(t.baseEvent,e.uint32(10).fork()).join(),t.subagentRunId!==void 0&&e.uint32(18).string(t.subagentRunId),t.messageId!==""&&e.uint32(26).string(t.messageId),e},decode(t,e){let n=t instanceof N?t:new N(t),r=e===void 0?n.len:n.pos+e,o=uw();for(;n.pos<r;){let i=n.uint32();switch(i>>>3){case 1:if(i!==10)break;o.baseEvent=D.decode(n,n.uint32());continue;case 2:if(i!==18)break;o.subagentRunId=n.string();continue;case 3:if(i!==26)break;o.messageId=n.string();continue}if((i&7)===4||i===0)break;n.skip(i&7)}return o},create(t){return Ca.fromPartial(t??{})},fromPartial(t){let e=uw();return e.baseEvent=t.baseEvent!==void 0&&t.baseEvent!==null?D.fromPartial(t.baseEvent):void 0,e.subagentRunId=t.subagentRunId??void 0,e.messageId=t.messageId??"",e}};function hw(){return{baseEvent:void 0,subagentRunId:void 0,messageId:void 0,delta:void 0}}var Na={encode(t,e=new B){return t.baseEvent!==void 0&&D.encode(t.baseEvent,e.uint32(10).fork()).join(),t.subagentRunId!==void 0&&e.uint32(18).string(t.subagentRunId),t.messageId!==void 0&&e.uint32(26).string(t.messageId),t.delta!==void 0&&e.uint32(34).string(t.delta),e},decode(t,e){let n=t instanceof N?t:new N(t),r=e===void 0?n.len:n.pos+e,o=hw();for(;n.pos<r;){let i=n.uint32();switch(i>>>3){case 1:if(i!==10)break;o.baseEvent=D.decode(n,n.uint32());continue;case 2:if(i!==18)break;o.subagentRunId=n.string();continue;case 3:if(i!==26)break;o.messageId=n.string();continue;case 4:if(i!==34)break;o.delta=n.string();continue}if((i&7)===4||i===0)break;n.skip(i&7)}return o},create(t){return Na.fromPartial(t??{})},fromPartial(t){let e=hw();return e.baseEvent=t.baseEvent!==void 0&&t.baseEvent!==null?D.fromPartial(t.baseEvent):void 0,e.subagentRunId=t.subagentRunId??void 0,e.messageId=t.messageId??void 0,e.delta=t.delta??void 0,e}};function pw(){return{baseEvent:void 0,subagentRunId:void 0,messageId:""}}var Oa={encode(t,e=new B){return t.baseEvent!==void 0&&D.encode(t.baseEvent,e.uint32(10).fork()).join(),t.subagentRunId!==void 0&&e.uint32(18).string(t.subagentRunId),t.messageId!==""&&e.uint32(26).string(t.messageId),e},decode(t,e){let n=t instanceof N?t:new N(t),r=e===void 0?n.len:n.pos+e,o=pw();for(;n.pos<r;){let i=n.uint32();switch(i>>>3){case 1:if(i!==10)break;o.baseEvent=D.decode(n,n.uint32());continue;case 2:if(i!==18)break;o.subagentRunId=n.string();continue;case 3:if(i!==26)break;o.messageId=n.string();continue}if((i&7)===4||i===0)break;n.skip(i&7)}return o},create(t){return Oa.fromPartial(t??{})},fromPartial(t){let e=pw();return e.baseEvent=t.baseEvent!==void 0&&t.baseEvent!==null?D.fromPartial(t.baseEvent):void 0,e.subagentRunId=t.subagentRunId??void 0,e.messageId=t.messageId??"",e}};function fw(){return{baseEvent:void 0,subagentRunId:void 0,subtype:"",entityId:"",encryptedValue:""}}var Ma={encode(t,e=new B){return t.baseEvent!==void 0&&D.encode(t.baseEvent,e.uint32(10).fork()).join(),t.subagentRunId!==void 0&&e.uint32(18).string(t.subagentRunId),t.subtype!==""&&e.uint32(26).string(t.subtype),t.entityId!==""&&e.uint32(34).string(t.entityId),t.encryptedValue!==""&&e.uint32(42).string(t.encryptedValue),e},decode(t,e){let n=t instanceof N?t:new N(t),r=e===void 0?n.len:n.pos+e,o=fw();for(;n.pos<r;){let i=n.uint32();switch(i>>>3){case 1:if(i!==10)break;o.baseEvent=D.decode(n,n.uint32());continue;case 2:if(i!==18)break;o.subagentRunId=n.string();continue;case 3:if(i!==26)break;o.subtype=n.string();continue;case 4:if(i!==34)break;o.entityId=n.string();continue;case 5:if(i!==42)break;o.encryptedValue=n.string();continue}if((i&7)===4||i===0)break;n.skip(i&7)}return o},create(t){return Ma.fromPartial(t??{})},fromPartial(t){let e=fw();return e.baseEvent=t.baseEvent!==void 0&&t.baseEvent!==null?D.fromPartial(t.baseEvent):void 0,e.subagentRunId=t.subagentRunId??void 0,e.subtype=t.subtype??"",e.entityId=t.entityId??"",e.encryptedValue=t.encryptedValue??"",e}};function mw(){return{baseEvent:void 0,subagentRunId:"",name:"",description:void 0,parentSubagentRunId:void 0,parentToolCallId:void 0,parentMessageId:void 0}}var Pa={encode(t,e=new B){return t.baseEvent!==void 0&&D.encode(t.baseEvent,e.uint32(10).fork()).join(),t.subagentRunId!==""&&e.uint32(18).string(t.subagentRunId),t.name!==""&&e.uint32(26).string(t.name),t.description!==void 0&&e.uint32(34).string(t.description),t.parentSubagentRunId!==void 0&&e.uint32(42).string(t.parentSubagentRunId),t.parentToolCallId!==void 0&&e.uint32(50).string(t.parentToolCallId),t.parentMessageId!==void 0&&e.uint32(58).string(t.parentMessageId),e},decode(t,e){let n=t instanceof N?t:new N(t),r=e===void 0?n.len:n.pos+e,o=mw();for(;n.pos<r;){let i=n.uint32();switch(i>>>3){case 1:if(i!==10)break;o.baseEvent=D.decode(n,n.uint32());continue;case 2:if(i!==18)break;o.subagentRunId=n.string();continue;case 3:if(i!==26)break;o.name=n.string();continue;case 4:if(i!==34)break;o.description=n.string();continue;case 5:if(i!==42)break;o.parentSubagentRunId=n.string();continue;case 6:if(i!==50)break;o.parentToolCallId=n.string();continue;case 7:if(i!==58)break;o.parentMessageId=n.string();continue}if((i&7)===4||i===0)break;n.skip(i&7)}return o},create(t){return Pa.fromPartial(t??{})},fromPartial(t){let e=mw();return e.baseEvent=t.baseEvent!==void 0&&t.baseEvent!==null?D.fromPartial(t.baseEvent):void 0,e.subagentRunId=t.subagentRunId??"",e.name=t.name??"",e.description=t.description??void 0,e.parentSubagentRunId=t.parentSubagentRunId??void 0,e.parentToolCallId=t.parentToolCallId??void 0,e.parentMessageId=t.parentMessageId??void 0,e}};function gw(){return{baseEvent:void 0,subagentRunId:"",result:void 0,outcome:"",interruptIds:[]}}var La={encode(t,e=new B){t.baseEvent!==void 0&&D.encode(t.baseEvent,e.uint32(10).fork()).join(),t.subagentRunId!==""&&e.uint32(18).string(t.subagentRunId),t.result!==void 0&&H.encode(H.wrap(t.result),e.uint32(26).fork()).join(),t.outcome!==""&&e.uint32(34).string(t.outcome);for(let n of t.interruptIds)e.uint32(42).string(n);return e},decode(t,e){let n=t instanceof N?t:new N(t),r=e===void 0?n.len:n.pos+e,o=gw();for(;n.pos<r;){let i=n.uint32();switch(i>>>3){case 1:if(i!==10)break;o.baseEvent=D.decode(n,n.uint32());continue;case 2:if(i!==18)break;o.subagentRunId=n.string();continue;case 3:if(i!==26)break;o.result=H.unwrap(H.decode(n,n.uint32()));continue;case 4:if(i!==34)break;o.outcome=n.string();continue;case 5:if(i!==42)break;o.interruptIds.push(n.string());continue}if((i&7)===4||i===0)break;n.skip(i&7)}return o},create(t){return La.fromPartial(t??{})},fromPartial(t){let e=gw();return e.baseEvent=t.baseEvent!==void 0&&t.baseEvent!==null?D.fromPartial(t.baseEvent):void 0,e.subagentRunId=t.subagentRunId??"",e.result=t.result??void 0,e.outcome=t.outcome??"",e.interruptIds=t.interruptIds?.map(n=>n)||[],e}};function vw(){return{baseEvent:void 0,subagentRunId:"",message:"",code:void 0}}var za={encode(t,e=new B){return t.baseEvent!==void 0&&D.encode(t.baseEvent,e.uint32(10).fork()).join(),t.subagentRunId!==""&&e.uint32(18).string(t.subagentRunId),t.message!==""&&e.uint32(26).string(t.message),t.code!==void 0&&e.uint32(34).string(t.code),e},decode(t,e){let n=t instanceof N?t:new N(t),r=e===void 0?n.len:n.pos+e,o=vw();for(;n.pos<r;){let i=n.uint32();switch(i>>>3){case 1:if(i!==10)break;o.baseEvent=D.decode(n,n.uint32());continue;case 2:if(i!==18)break;o.subagentRunId=n.string();continue;case 3:if(i!==26)break;o.message=n.string();continue;case 4:if(i!==34)break;o.code=n.string();continue}if((i&7)===4||i===0)break;n.skip(i&7)}return o},create(t){return za.fromPartial(t??{})},fromPartial(t){let e=vw();return e.baseEvent=t.baseEvent!==void 0&&t.baseEvent!==null?D.fromPartial(t.baseEvent):void 0,e.subagentRunId=t.subagentRunId??"",e.message=t.message??"",e.code=t.code??void 0,e}};function bw(){return{textMessageStart:void 0,textMessageContent:void 0,textMessageEnd:void 0,toolCallStart:void 0,toolCallArgs:void 0,toolCallEnd:void 0,stateSnapshot:void 0,stateDelta:void 0,messagesSnapshot:void 0,raw:void 0,custom:void 0,runStarted:void 0,runFinished:void 0,runError:void 0,stepStarted:void 0,stepFinished:void 0,textMessageChunk:void 0,toolCallChunk:void 0,subagentStarted:void 0,subagentFinished:void 0,subagentError:void 0,toolCallResult:void 0,activitySnapshot:void 0,activityDelta:void 0,reasoningStart:void 0,reasoningMessageStart:void 0,reasoningMessageContent:void 0,reasoningMessageEnd:void 0,reasoningMessageChunk:void 0,reasoningEnd:void 0,reasoningEncryptedValue:void 0}}var Ew={encode(t,e=new B){return t.textMessageStart!==void 0&&sa.encode(t.textMessageStart,e.uint32(10).fork()).join(),t.textMessageContent!==void 0&&aa.encode(t.textMessageContent,e.uint32(18).fork()).join(),t.textMessageEnd!==void 0&&la.encode(t.textMessageEnd,e.uint32(26).fork()).join(),t.toolCallStart!==void 0&&ca.encode(t.toolCallStart,e.uint32(34).fork()).join(),t.toolCallArgs!==void 0&&ua.encode(t.toolCallArgs,e.uint32(42).fork()).join(),t.toolCallEnd!==void 0&&ha.encode(t.toolCallEnd,e.uint32(50).fork()).join(),t.stateSnapshot!==void 0&&ma.encode(t.stateSnapshot,e.uint32(58).fork()).join(),t.stateDelta!==void 0&&ga.encode(t.stateDelta,e.uint32(66).fork()).join(),t.messagesSnapshot!==void 0&&va.encode(t.messagesSnapshot,e.uint32(74).fork()).join(),t.raw!==void 0&&wa.encode(t.raw,e.uint32(82).fork()).join(),t.custom!==void 0&&Ea.encode(t.custom,e.uint32(90).fork()).join(),t.runStarted!==void 0&&xa.encode(t.runStarted,e.uint32(98).fork()).join(),t.runFinished!==void 0&&_a.encode(t.runFinished,e.uint32(106).fork()).join(),t.runError!==void 0&&Ta.encode(t.runError,e.uint32(114).fork()).join(),t.stepStarted!==void 0&&Sa.encode(t.stepStarted,e.uint32(122).fork()).join(),t.stepFinished!==void 0&&ka.encode(t.stepFinished,e.uint32(130).fork()).join(),t.textMessageChunk!==void 0&&da.encode(t.textMessageChunk,e.uint32(138).fork()).join(),t.toolCallChunk!==void 0&&pa.encode(t.toolCallChunk,e.uint32(146).fork()).join(),t.subagentStarted!==void 0&&Pa.encode(t.subagentStarted,e.uint32(154).fork()).join(),t.subagentFinished!==void 0&&La.encode(t.subagentFinished,e.uint32(162).fork()).join(),t.subagentError!==void 0&&za.encode(t.subagentError,e.uint32(170).fork()).join(),t.toolCallResult!==void 0&&fa.encode(t.toolCallResult,e.uint32(178).fork()).join(),t.activitySnapshot!==void 0&&ba.encode(t.activitySnapshot,e.uint32(186).fork()).join(),t.activityDelta!==void 0&&ya.encode(t.activityDelta,e.uint32(194).fork()).join(),t.reasoningStart!==void 0&&Aa.encode(t.reasoningStart,e.uint32(202).fork()).join(),t.reasoningMessageStart!==void 0&&Ra.encode(t.reasoningMessageStart,e.uint32(210).fork()).join(),t.reasoningMessageContent!==void 0&&Ia.encode(t.reasoningMessageContent,e.uint32(218).fork()).join(),t.reasoningMessageEnd!==void 0&&Ca.encode(t.reasoningMessageEnd,e.uint32(226).fork()).join(),t.reasoningMessageChunk!==void 0&&Na.encode(t.reasoningMessageChunk,e.uint32(234).fork()).join(),t.reasoningEnd!==void 0&&Oa.encode(t.reasoningEnd,e.uint32(242).fork()).join(),t.reasoningEncryptedValue!==void 0&&Ma.encode(t.reasoningEncryptedValue,e.uint32(250).fork()).join(),e},decode(t,e){let n=t instanceof N?t:new N(t),r=e===void 0?n.len:n.pos+e,o=bw();for(;n.pos<r;){let i=n.uint32();switch(i>>>3){case 1:if(i!==10)break;o.textMessageStart=sa.decode(n,n.uint32());continue;case 2:if(i!==18)break;o.textMessageContent=aa.decode(n,n.uint32());continue;case 3:if(i!==26)break;o.textMessageEnd=la.decode(n,n.uint32());continue;case 4:if(i!==34)break;o.toolCallStart=ca.decode(n,n.uint32());continue;case 5:if(i!==42)break;o.toolCallArgs=ua.decode(n,n.uint32());continue;case 6:if(i!==50)break;o.toolCallEnd=ha.decode(n,n.uint32());continue;case 7:if(i!==58)break;o.stateSnapshot=ma.decode(n,n.uint32());continue;case 8:if(i!==66)break;o.stateDelta=ga.decode(n,n.uint32());continue;case 9:if(i!==74)break;o.messagesSnapshot=va.decode(n,n.uint32());continue;case 10:if(i!==82)break;o.raw=wa.decode(n,n.uint32());continue;case 11:if(i!==90)break;o.custom=Ea.decode(n,n.uint32());continue;case 12:if(i!==98)break;o.runStarted=xa.decode(n,n.uint32());continue;case 13:if(i!==106)break;o.runFinished=_a.decode(n,n.uint32());continue;case 14:if(i!==114)break;o.runError=Ta.decode(n,n.uint32());continue;case 15:if(i!==122)break;o.stepStarted=Sa.decode(n,n.uint32());continue;case 16:if(i!==130)break;o.stepFinished=ka.decode(n,n.uint32());continue;case 17:if(i!==138)break;o.textMessageChunk=da.decode(n,n.uint32());continue;case 18:if(i!==146)break;o.toolCallChunk=pa.decode(n,n.uint32());continue;case 19:if(i!==154)break;o.subagentStarted=Pa.decode(n,n.uint32());continue;case 20:if(i!==162)break;o.subagentFinished=La.decode(n,n.uint32());continue;case 21:if(i!==170)break;o.subagentError=za.decode(n,n.uint32());continue;case 22:if(i!==178)break;o.toolCallResult=fa.decode(n,n.uint32());continue;case 23:if(i!==186)break;o.activitySnapshot=ba.decode(n,n.uint32());continue;case 24:if(i!==194)break;o.activityDelta=ya.decode(n,n.uint32());continue;case 25:if(i!==202)break;o.reasoningStart=Aa.decode(n,n.uint32());continue;case 26:if(i!==210)break;o.reasoningMessageStart=Ra.decode(n,n.uint32());continue;case 27:if(i!==218)break;o.reasoningMessageContent=Ia.decode(n,n.uint32());continue;case 28:if(i!==226)break;o.reasoningMessageEnd=Ca.decode(n,n.uint32());continue;case 29:if(i!==234)break;o.reasoningMessageChunk=Na.decode(n,n.uint32());continue;case 30:if(i!==242)break;o.reasoningEnd=Oa.decode(n,n.uint32());continue;case 31:if(i!==250)break;o.reasoningEncryptedValue=Ma.decode(n,n.uint32());continue}if((i&7)===4||i===0)break;n.skip(i&7)}return o},create(t){return Ew.fromPartial(t??{})},fromPartial(t){let e=bw();return e.textMessageStart=t.textMessageStart!==void 0&&t.textMessageStart!==null?sa.fromPartial(t.textMessageStart):void 0,e.textMessageContent=t.textMessageContent!==void 0&&t.textMessageContent!==null?aa.fromPartial(t.textMessageContent):void 0,e.textMessageEnd=t.textMessageEnd!==void 0&&t.textMessageEnd!==null?la.fromPartial(t.textMessageEnd):void 0,e.toolCallStart=t.toolCallStart!==void 0&&t.toolCallStart!==null?ca.fromPartial(t.toolCallStart):void 0,e.toolCallArgs=t.toolCallArgs!==void 0&&t.toolCallArgs!==null?ua.fromPartial(t.toolCallArgs):void 0,e.toolCallEnd=t.toolCallEnd!==void 0&&t.toolCallEnd!==null?ha.fromPartial(t.toolCallEnd):void 0,e.stateSnapshot=t.stateSnapshot!==void 0&&t.stateSnapshot!==null?ma.fromPartial(t.stateSnapshot):void 0,e.stateDelta=t.stateDelta!==void 0&&t.stateDelta!==null?ga.fromPartial(t.stateDelta):void 0,e.messagesSnapshot=t.messagesSnapshot!==void 0&&t.messagesSnapshot!==null?va.fromPartial(t.messagesSnapshot):void 0,e.raw=t.raw!==void 0&&t.raw!==null?wa.fromPartial(t.raw):void 0,e.custom=t.custom!==void 0&&t.custom!==null?Ea.fromPartial(t.custom):void 0,e.runStarted=t.runStarted!==void 0&&t.runStarted!==null?xa.fromPartial(t.runStarted):void 0,e.runFinished=t.runFinished!==void 0&&t.runFinished!==null?_a.fromPartial(t.runFinished):void 0,e.runError=t.runError!==void 0&&t.runError!==null?Ta.fromPartial(t.runError):void 0,e.stepStarted=t.stepStarted!==void 0&&t.stepStarted!==null?Sa.fromPartial(t.stepStarted):void 0,e.stepFinished=t.stepFinished!==void 0&&t.stepFinished!==null?ka.fromPartial(t.stepFinished):void 0,e.textMessageChunk=t.textMessageChunk!==void 0&&t.textMessageChunk!==null?da.fromPartial(t.textMessageChunk):void 0,e.toolCallChunk=t.toolCallChunk!==void 0&&t.toolCallChunk!==null?pa.fromPartial(t.toolCallChunk):void 0,e.subagentStarted=t.subagentStarted!==void 0&&t.subagentStarted!==null?Pa.fromPartial(t.subagentStarted):void 0,e.subagentFinished=t.subagentFinished!==void 0&&t.subagentFinished!==null?La.fromPartial(t.subagentFinished):void 0,e.subagentError=t.subagentError!==void 0&&t.subagentError!==null?za.fromPartial(t.subagentError):void 0,e.toolCallResult=t.toolCallResult!==void 0&&t.toolCallResult!==null?fa.fromPartial(t.toolCallResult):void 0,e.activitySnapshot=t.activitySnapshot!==void 0&&t.activitySnapshot!==null?ba.fromPartial(t.activitySnapshot):void 0,e.activityDelta=t.activityDelta!==void 0&&t.activityDelta!==null?ya.fromPartial(t.activityDelta):void 0,e.reasoningStart=t.reasoningStart!==void 0&&t.reasoningStart!==null?Aa.fromPartial(t.reasoningStart):void 0,e.reasoningMessageStart=t.reasoningMessageStart!==void 0&&t.reasoningMessageStart!==null?Ra.fromPartial(t.reasoningMessageStart):void 0,e.reasoningMessageContent=t.reasoningMessageContent!==void 0&&t.reasoningMessageContent!==null?Ia.fromPartial(t.reasoningMessageContent):void 0,e.reasoningMessageEnd=t.reasoningMessageEnd!==void 0&&t.reasoningMessageEnd!==null?Ca.fromPartial(t.reasoningMessageEnd):void 0,e.reasoningMessageChunk=t.reasoningMessageChunk!==void 0&&t.reasoningMessageChunk!==null?Na.fromPartial(t.reasoningMessageChunk):void 0,e.reasoningEnd=t.reasoningEnd!==void 0&&t.reasoningEnd!==null?Oa.fromPartial(t.reasoningEnd):void 0,e.reasoningEncryptedValue=t.reasoningEncryptedValue!==void 0&&t.reasoningEncryptedValue!==null?Ma.fromPartial(t.reasoningEncryptedValue):void 0,e}};function yw(){return{provider:void 0,model:void 0,inputTokens:void 0,outputTokens:void 0,totalTokens:void 0,reasoningTokens:void 0,cachedInputTokens:void 0,cacheWriteInputTokens:void 0}}var Zn={encode(t,e=new B){return t.provider!==void 0&&e.uint32(10).string(t.provider),t.model!==void 0&&e.uint32(18).string(t.model),t.inputTokens!==void 0&&e.uint32(24).int64(t.inputTokens),t.outputTokens!==void 0&&e.uint32(32).int64(t.outputTokens),t.totalTokens!==void 0&&e.uint32(40).int64(t.totalTokens),t.reasoningTokens!==void 0&&e.uint32(48).int64(t.reasoningTokens),t.cachedInputTokens!==void 0&&e.uint32(56).int64(t.cachedInputTokens),t.cacheWriteInputTokens!==void 0&&e.uint32(64).int64(t.cacheWriteInputTokens),e},decode(t,e){let n=t instanceof N?t:new N(t),r=e===void 0?n.len:n.pos+e,o=yw();for(;n.pos<r;){let i=n.uint32();switch(i>>>3){case 1:if(i!==10)break;o.provider=n.string();continue;case 2:if(i!==18)break;o.model=n.string();continue;case 3:if(i!==24)break;o.inputTokens=Fn(n.int64());continue;case 4:if(i!==32)break;o.outputTokens=Fn(n.int64());continue;case 5:if(i!==40)break;o.totalTokens=Fn(n.int64());continue;case 6:if(i!==48)break;o.reasoningTokens=Fn(n.int64());continue;case 7:if(i!==56)break;o.cachedInputTokens=Fn(n.int64());continue;case 8:if(i!==64)break;o.cacheWriteInputTokens=Fn(n.int64());continue}if((i&7)===4||i===0)break;n.skip(i&7)}return o},create(t){return Zn.fromPartial(t??{})},fromPartial(t){let e=yw();return e.provider=t.provider??void 0,e.model=t.model??void 0,e.inputTokens=t.inputTokens??void 0,e.outputTokens=t.outputTokens??void 0,e.totalTokens=t.totalTokens??void 0,e.reasoningTokens=t.reasoningTokens??void 0,e.cachedInputTokens=t.cachedInputTokens??void 0,e.cacheWriteInputTokens=t.cacheWriteInputTokens??void 0,e}};function Fn(t){let e=globalThis.Number(t.toString());if(e>globalThis.Number.MAX_SAFE_INTEGER)throw new globalThis.Error("Value is larger than Number.MAX_SAFE_INTEGER");if(e<globalThis.Number.MIN_SAFE_INTEGER)throw new globalThis.Error("Value is smaller than Number.MIN_SAFE_INTEGER");return e}var Gr=t=>t&&typeof t=="object"?t:void 0,xe=t=>Array.isArray(t)?t:[],vR=()=>typeof process<"u"&&typeof process.env<"u"&&!!process.env.SUPPRESS_TRANSFORMATION_WARNINGS,xw=()=>{vR()||console.warn("[ag-ui][proto] Dropped a content part this build does not know: the protocol has a variant this SDK predates.")};var dH=new Set(Object.values(y)),bR={textMessageStart:"TEXT_MESSAGE_START",textMessageContent:"TEXT_MESSAGE_CONTENT",textMessageEnd:"TEXT_MESSAGE_END",textMessageChunk:"TEXT_MESSAGE_CHUNK",toolCallStart:"TOOL_CALL_START",toolCallArgs:"TOOL_CALL_ARGS",toolCallEnd:"TOOL_CALL_END",toolCallChunk:"TOOL_CALL_CHUNK",toolCallResult:"TOOL_CALL_RESULT",stateSnapshot:"STATE_SNAPSHOT",stateDelta:"STATE_DELTA",messagesSnapshot:"MESSAGES_SNAPSHOT",activitySnapshot:"ACTIVITY_SNAPSHOT",activityDelta:"ACTIVITY_DELTA",raw:"RAW",custom:"CUSTOM",runStarted:"RUN_STARTED",runFinished:"RUN_FINISHED",runError:"RUN_ERROR",stepStarted:"STEP_STARTED",stepFinished:"STEP_FINISHED",reasoningStart:"REASONING_START",reasoningMessageStart:"REASONING_MESSAGE_START",reasoningMessageContent:"REASONING_MESSAGE_CONTENT",reasoningMessageEnd:"REASONING_MESSAGE_END",reasoningMessageChunk:"REASONING_MESSAGE_CHUNK",reasoningEnd:"REASONING_END",reasoningEncryptedValue:"REASONING_ENCRYPTED_VALUE",subagentStarted:"SUBAGENT_STARTED",subagentFinished:"SUBAGENT_FINISHED",subagentError:"SUBAGENT_ERROR"},Gn=new Set([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31]);var un=t=>{let e=Gr(t);if(e){if([e.data,e.url,e.file].filter(Boolean).length>1)throw new Error("Invalid event: source carries more than one arm");if(e.data){let n=e.data;return{type:"data",value:n.value,mimeType:n.mimeType}}if(e.url){let n=e.url;return{type:"url",value:n.value,mimeType:n.mimeType}}if(e.file){let n=e.file;return{type:"file",value:n.value,provider:n.provider,mimeType:n.mimeType}}}};var _w=t=>{let e=Gr(t);if(e){if([e.text,e.image,e.audio,e.video,e.document].filter(Boolean).length>1)throw new Error("Invalid event: content part carries more than one arm");if(e.text){let n=e.text;return{type:"text",id:n.id,text:n.text,metadata:n.metadata}}if(e.image){let n=e.image;return n.source!==void 0&&un(n.source)===void 0?void 0:{type:"image",id:n.id,source:un(n.source),metadata:n.metadata}}if(e.audio){let n=e.audio;return n.source!==void 0&&un(n.source)===void 0?void 0:{type:"audio",id:n.id,source:un(n.source),metadata:n.metadata}}if(e.video){let n=e.video;return n.source!==void 0&&un(n.source)===void 0?void 0:{type:"video",id:n.id,source:un(n.source),metadata:n.metadata}}if(e.document){let n=e.document;return n.source!==void 0&&un(n.source)===void 0?void 0:{type:"document",id:n.id,source:un(n.source),metadata:n.metadata}}}},yR=new Set(["activity"]),wR=new Set(["user","tool"]),ER=new Set(["developer","system","assistant","user","tool","activity","reasoning"]);var Tw=t=>{let e=Gr(t)??{},n={...e},r=typeof e.role=="string"?e.role:"",o=ER.has(r),i=o?wR.has(r):xe(e.contentParts).length>0,s=o?yR.has(r):!i&&e.activityContent!==void 0;if(!o&&(e.content!==void 0?1:0)+(xe(e.contentParts).length>0?1:0)+(e.activityContent!==void 0?1:0)>1)throw new Error("Invalid event: message carries more than one content form");if(o){if(!i&&xe(e.contentParts).length>0)throw new Error("Invalid event: message carries content parts for a role that has none");if(e.activityContent!==void 0&&!s)throw new Error("Invalid event: message carries activity content for a non-activity role");if(s&&e.content!==void 0)throw new Error("Invalid event: activity content cannot ride with other content forms");if(i&&e.content!==void 0&&xe(e.contentParts).length>0)throw new Error("Invalid event: message carries both string content and content parts")}return i&&e.content===void 0&&(n.content=xe(e.contentParts).map(a=>{let l=_w(a);return l===void 0&&xw(),l}).filter(a=>a!==void 0)),s&&e.activityContent!==void 0&&(n.content=e.activityContent),delete n.activityContent,delete n.contentParts,xe(e.toolCalls).length===0&&delete n.toolCalls,Object.keys(n).forEach(a=>{n[a]===void 0&&delete n[a]}),n},vh=t=>{if(Array.isArray(t)){for(let n of t)vh(n);return}let e=Gr(t);if(e)for(let n of Object.keys(e))e[n]===void 0?delete e[n]:vh(e[n])};var xR=t=>{let e=Gr(t);if(!e)return;let n={};return e.threadId!==void 0&&(n.threadId=e.threadId),e.runId!==void 0&&(n.runId=e.runId),e.protocolVersion!==void 0&&(n.protocolVersion=e.protocolVersion),e.parentRunId!==void 0&&(n.parentRunId=e.parentRunId),e.state!==void 0&&(n.state=e.state),n.messages=xe(e.messages).map(Tw).filter(r=>r!==void 0),n.tools=xe(e.tools),n.context=xe(e.context),e.forwardedProps!==void 0&&(n.forwardedProps=e.forwardedProps),n.resume=xe(e.resume),n};var bh={TextMessageStartEvent:{singular:new Set([1]),descend:{1:"BaseEvent"}},BaseEvent:{singular:new Set([3,4]),descend:{},google:{3:"google.protobuf.Value",4:"google.protobuf.Struct"}},TextMessageContentEvent:{singular:new Set([1]),descend:{1:"BaseEvent"}},TextMessageEndEvent:{singular:new Set([1]),descend:{1:"BaseEvent"}},ToolCallStartEvent:{singular:new Set([1]),descend:{1:"BaseEvent"}},ToolCallArgsEvent:{singular:new Set([1]),descend:{1:"BaseEvent"}},ToolCallEndEvent:{singular:new Set([1]),descend:{1:"BaseEvent"}},StateSnapshotEvent:{singular:new Set([1,2]),descend:{1:"BaseEvent"},google:{2:"google.protobuf.Value"}},StateDeltaEvent:{singular:new Set([1]),descend:{1:"BaseEvent",2:"JsonPatchOperation"}},JsonPatchOperation:{singular:new Set([4]),descend:{},google:{4:"google.protobuf.Value"}},MessagesSnapshotEvent:{singular:new Set([1]),descend:{1:"BaseEvent",2:"Message"}},Message:{singular:new Set([9,13]),descend:{5:"ToolCall",8:"InputContent"},google:{9:"google.protobuf.Struct",13:"google.protobuf.Struct"}},ToolCall:{singular:new Set([3,4]),descend:{},google:{4:"google.protobuf.Struct"}},InputContent:{singular:new Set([1,2,3,4,5]),descend:{1:"TextInputPart",2:"ImageInputPart",3:"AudioInputPart",4:"VideoInputPart",5:"DocumentInputPart"},arms:new Set([1,2,3,4,5])},TextInputPart:{singular:new Set([3]),descend:{},google:{3:"google.protobuf.Value"}},ImageInputPart:{singular:new Set([1,2]),descend:{1:"InputContentSource"},google:{2:"google.protobuf.Value"}},InputContentSource:{singular:new Set([1,2,3]),descend:{},arms:new Set([1,2,3])},AudioInputPart:{singular:new Set([1,2]),descend:{1:"InputContentSource"},google:{2:"google.protobuf.Value"}},VideoInputPart:{singular:new Set([1,2]),descend:{1:"InputContentSource"},google:{2:"google.protobuf.Value"}},DocumentInputPart:{singular:new Set([1,2]),descend:{1:"InputContentSource"},google:{2:"google.protobuf.Value"}},RawEvent:{singular:new Set([1,2]),descend:{1:"BaseEvent"},google:{2:"google.protobuf.Value"}},CustomEvent:{singular:new Set([1,3]),descend:{1:"BaseEvent"},google:{3:"google.protobuf.Value"}},RunStartedEvent:{singular:new Set([1,5]),descend:{1:"BaseEvent",5:"RunAgentInput"}},RunAgentInput:{singular:new Set([4,8]),descend:{5:"Message",6:"Tool",9:"ResumeEntry"},google:{4:"google.protobuf.Value",8:"google.protobuf.Value"}},Tool:{singular:new Set([3,4]),descend:{},google:{3:"google.protobuf.Value",4:"google.protobuf.Struct"}},ResumeEntry:{singular:new Set([3,4]),descend:{},google:{3:"google.protobuf.Value",4:"google.protobuf.Struct"}},RunFinishedEvent:{singular:new Set([1,4]),descend:{1:"BaseEvent",6:"Interrupt"},google:{4:"google.protobuf.Value"}},Interrupt:{singular:new Set([5,7]),descend:{},google:{5:"google.protobuf.Value",7:"google.protobuf.Value"}},RunErrorEvent:{singular:new Set([1]),descend:{1:"BaseEvent"}},StepStartedEvent:{singular:new Set([1]),descend:{1:"BaseEvent"}},StepFinishedEvent:{singular:new Set([1]),descend:{1:"BaseEvent"}},TextMessageChunkEvent:{singular:new Set([1]),descend:{1:"BaseEvent"}},ToolCallChunkEvent:{singular:new Set([1]),descend:{1:"BaseEvent"}},SubagentStartedEvent:{singular:new Set([1]),descend:{1:"BaseEvent"}},SubagentFinishedEvent:{singular:new Set([1,3]),descend:{1:"BaseEvent"},google:{3:"google.protobuf.Value"}},SubagentErrorEvent:{singular:new Set([1]),descend:{1:"BaseEvent"}},ToolCallResultEvent:{singular:new Set([1]),descend:{1:"BaseEvent",7:"InputContent"}},ActivitySnapshotEvent:{singular:new Set([1,5]),descend:{1:"BaseEvent"},google:{5:"google.protobuf.Struct"}},ActivityDeltaEvent:{singular:new Set([1]),descend:{1:"BaseEvent",5:"JsonPatchOperation"}},ReasoningStartEvent:{singular:new Set([1]),descend:{1:"BaseEvent"}},ReasoningMessageStartEvent:{singular:new Set([1]),descend:{1:"BaseEvent"}},ReasoningMessageContentEvent:{singular:new Set([1]),descend:{1:"BaseEvent"}},ReasoningMessageEndEvent:{singular:new Set([1]),descend:{1:"BaseEvent"}},ReasoningMessageChunkEvent:{singular:new Set([1]),descend:{1:"BaseEvent"}},ReasoningEndEvent:{singular:new Set([1]),descend:{1:"BaseEvent"}},ReasoningEncryptedValueEvent:{singular:new Set([1]),descend:{1:"BaseEvent"}},"google.protobuf.Struct":{singular:new Set,descend:{1:"google.protobuf.Struct.FieldsEntry"}},"google.protobuf.Struct.FieldsEntry":{singular:new Set([2]),descend:{2:"google.protobuf.Value"}},"google.protobuf.Value":{singular:new Set([5,6]),descend:{5:"google.protobuf.Struct",6:"google.protobuf.ListValue"},arms:new Set([1,2,3,4,5,6]),armWireTypes:{1:0,2:1,3:2,4:0,5:2,6:2}},"google.protobuf.ListValue":{singular:new Set,descend:{1:"google.protobuf.Value"}}},Sw={1:"TextMessageStartEvent",2:"TextMessageContentEvent",3:"TextMessageEndEvent",4:"ToolCallStartEvent",5:"ToolCallArgsEvent",6:"ToolCallEndEvent",7:"StateSnapshotEvent",8:"StateDeltaEvent",9:"MessagesSnapshotEvent",10:"RawEvent",11:"CustomEvent",12:"RunStartedEvent",13:"RunFinishedEvent",14:"RunErrorEvent",15:"StepStartedEvent",16:"StepFinishedEvent",17:"TextMessageChunkEvent",18:"ToolCallChunkEvent",19:"SubagentStartedEvent",20:"SubagentFinishedEvent",21:"SubagentErrorEvent",22:"ToolCallResultEvent",23:"ActivitySnapshotEvent",24:"ActivityDeltaEvent",25:"ReasoningStartEvent",26:"ReasoningMessageStartEvent",27:"ReasoningMessageContentEvent",28:"ReasoningMessageEndEvent",29:"ReasoningMessageChunkEvent",30:"ReasoningEndEvent",31:"ReasoningEncryptedValueEvent"};function Fr(t,e){let n=0,r=0;for(;;){if(e.offset>=t.length)throw new Error("Invalid event");let o=t[e.offset++];if(r<28?n+=(o&127)*2**r:r===28&&(n+=(o&15)*2**28),r+=7,(o&128)===0)return n}}function kw(t,e){let n={offset:0},r=0,o=0;for(;n.offset<t.length;){let i=Fr(t,n),s=Math.floor(i/8),a=i%8;if(s===0)throw new Error("Invalid event");if(a===3){r+=1;continue}if(a===4){if(r-=1,r<0)throw new Error("Invalid event");continue}if(a===0)Fr(t,n);else if(a===1)n.offset+=8;else if(a===2){let l=Fr(t,n);if(n.offset+l>t.length)throw new Error("Invalid event");if(r===0){if(e.arms?.has(s)){if(o!==0&&o!==s)throw new Error("Invalid event");o=s}let d=e.descend[s];if(d!==void 0){let c=bh[d];c!==void 0&&kw(t.subarray(n.offset,n.offset+l),c)}}n.offset+=l}else if(a===5)n.offset+=4;else throw new Error("Invalid event");if(n.offset>t.length)throw new Error("Invalid event")}if(r!==0)throw new Error("Invalid event")}function _R(t){let e=new Set,n={offset:0},r=0;for(;n.offset<t.length;){let o=Fr(t,n),i=Math.floor(o/8),s=o%8;if(i===0)throw new Error("Invalid event");if(s===3){r+=1;continue}if(s===4){if(r-=1,r<0)throw new Error("Invalid event");continue}if(r===0&&Gn.has(i)){if(e.size>0&&!e.has(i))throw new Error("Invalid event");e.add(i)}if(s===0)Fr(t,n);else if(s===1)n.offset+=8;else if(s===2){let a=Fr(t,n);if(n.offset+a>t.length)throw new Error("Invalid event");if(r===0){let l=Sw[i];if(l!==void 0){let d=bh[l];d!==void 0&&kw(t.subarray(n.offset,n.offset+a),d)}}n.offset+=a}else if(s===5)n.offset+=4;else throw new Error("Invalid event");if(n.offset>t.length)throw new Error("Invalid event")}if(r!==0)throw new Error("Invalid event")}function ww(t){if(t.length===1)return t[0];let e=new Uint8Array(t.reduce((r,o)=>r+o.length,0)),n=0;for(let r of t)e.set(r,n),n+=r.length;return e}function Aw(t,e){let n=new N(t),r=[],o=new Map,i,s=!1;for(;n.pos<n.len;){let l=n.pos,[d,c]=n.tag(),h=c===2?n.bytes():void 0;h===void 0&&n.skip(c,d);let p=e.arms?.has(d)&&c===(e.armWireTypes?.[d]??2);if(p){if(i!==void 0&&i!==d){let x=o.get(i);x!==void 0&&(r[x]=void 0),o.delete(i),s=!0}if(i=d,!e.singular.has(d)){let x=o.get(d);x!==void 0&&(r[x]=void 0,o.delete(d),s=!0)}}let m=e.descend[d]??e.google?.[d],u=h!==void 0&&(e.singular.has(d)||m!==void 0),v=o.get(d),E=v===void 0?void 0:r[v]?.payloads;if(u&&e.singular.has(d)&&E!==void 0){E.push(h),s=!0;continue}(u||p)&&o.set(d,r.length),r.push({number:d,raw:t.subarray(l,n.pos),...u&&{payloads:[h]},child:m===void 0?void 0:bh[m]})}let a=[];for(let l of r)if(l!==void 0){if(l.payloads!==void 0){let d=ww(l.payloads),c=l.child===void 0?d:Aw(d,l.child);if(l.payloads.length>1||c!==d){a.push(new B().uint32(l.number*8+2).bytes(c).finish()),s=!0;continue}}a.push(l.raw)}return s?ww(a):t}var yh=class extends Error{constructor(t="Unknown event type"){super(t),this.name="AGUIUnknownEventTypeError"}};function Rw(t,e,n,r){let o=0,i=0,s=0;for(;;){if(e.offset>=t.length||s>=n)return-1;let a=t[e.offset++];if(s+=1,s===n&&a>r)return-1;if(o+=(a&127)*2**i,i+=7,(a&128)===0)return o}}var Da=(t,e)=>Rw(t,e,5,15),Iw=(t,e)=>Rw(t,e,10,1);function TR(t){let e={offset:0},n=[];for(;e.offset<t.length;){let r=Da(t,e);if(r<0)return!1;let o=Math.floor(r/8),i=r%8;if(o===0)return!1;if(i===3)n.push(o);else if(i===4){if(n.pop()!==o)return!1}else if(i===0){if(Iw(t,e)<0)return!1}else if(i===1)e.offset+=8;else if(i===5)e.offset+=4;else if(i===2){let s=Da(t,e);if(s<0||e.offset+s>t.length)return!1;e.offset+=s}else return!1;if(e.offset>t.length)return!1}return n.length===0}function SR(t){let e={offset:0},n=[],r=0;for(;e.offset<t.length;){let o=Da(t,e);if(o<0)return!1;let i=Math.floor(o/8),s=o%8;if(i===0)return!1;let a=n.length===0;if(s===3){if(a&&Gn.has(i))return!1;n.push(i)}else if(s===4){if(n.pop()!==i)return!1}else if(s===0){if(a&&Gn.has(i)||Iw(t,e)<0)return!1}else if(s===1){if(a&&Gn.has(i))return!1;e.offset+=8}else if(s===5){if(a&&Gn.has(i))return!1;e.offset+=4}else if(s===2){let l=Da(t,e);if(l<0||e.offset+l>t.length)return!1;if(a){if(Gn.has(i)||!TR(t.subarray(e.offset,e.offset+l)))return!1;r+=1}e.offset+=l}else return!1;if(e.offset>t.length)return!1}return n.length===0&&r>0}function Cw(t){_R(t);let e=Ew.decode(Aw(t,{singular:Gn,descend:Sw})),n=Object.entries(e).filter(([,l])=>l!==void 0);if(n.length!==1)throw n.length===0&&SR(t)?new yh:new Error("Invalid event");let r=n[0],o=bR[r[0]];if(o===void 0)throw new Error("Invalid event");let i=r[1],s=Gr(i.baseEvent);if(!s)throw new Error("Invalid event");let a=gR[s.type];if(a!==o)throw new Error("Invalid event: envelope carries "+o+" but the base event declares "+String(a));if(i.type=o,i.timestamp=s.timestamp,i.rawEvent=s.rawEvent,s.metadata!==void 0&&(i.metadata=s.metadata),delete i.baseEvent,i.type==="MESSAGES_SNAPSHOT"&&Array.isArray(i.messages)&&(i.messages=i.messages.map(Tw).filter(l=>l!==void 0)),i.type==="RUN_FINISHED"){let l=i,d=typeof l.outcome=="string"&&l.outcome!==""?l.outcome:void 0,c={};c.pendingToolCallIds=l.pendingToolCallIds,delete l.pendingToolCallIds,c.interrupts=l.interrupts,delete l.interrupts,delete l.outcome,d===void 0&&(xe(c.pendingToolCallIds).length>0&&(l.pendingToolCallIds=c.pendingToolCallIds),xe(c.interrupts).length>0&&(l.interrupts=c.interrupts)),d==="success"&&(l.outcome={type:"success",...xe(c.pendingToolCallIds).length>0?{pendingToolCallIds:c.pendingToolCallIds}:{},...xe(c.interrupts).length>0?{interrupts:c.interrupts}:{}}),d==="interrupt"&&(l.outcome={type:"interrupt",interrupts:xe(c.interrupts),...xe(c.pendingToolCallIds).length>0?{pendingToolCallIds:c.pendingToolCallIds}:{}}),d==="cancelled"&&(l.outcome={type:"cancelled",...xe(c.pendingToolCallIds).length>0?{pendingToolCallIds:c.pendingToolCallIds}:{},...xe(c.interrupts).length>0?{interrupts:c.interrupts}:{}}),d!==void 0&&!["success","interrupt","cancelled"].includes(d)&&(l.outcome={type:d,...xe(c.pendingToolCallIds).length>0?{pendingToolCallIds:c.pendingToolCallIds}:{},...xe(c.interrupts).length>0?{interrupts:c.interrupts}:{}})}if(i.type==="SUBAGENT_FINISHED"){let l=i,d=typeof l.outcome=="string"&&l.outcome!==""?l.outcome:void 0,c={};c.interruptIds=l.interruptIds,delete l.interruptIds,delete l.outcome,d===void 0&&xe(c.interruptIds).length>0&&(l.interruptIds=c.interruptIds),d==="success"&&(l.outcome={type:"success",...xe(c.interruptIds).length>0?{interruptIds:c.interruptIds}:{}}),d==="suspended"&&(l.outcome={type:"suspended",...xe(c.interruptIds).length>0?{interruptIds:c.interruptIds}:{}}),d!==void 0&&!["success","suspended"].includes(d)&&(l.outcome={type:d,...xe(c.interruptIds).length>0?{interruptIds:c.interruptIds}:{}})}if(i.type==="STATE_DELTA"&&Array.isArray(i.delta)&&(i.delta=i.delta.map(l=>{let d=wy[l.op];return l.op=typeof d=="string"&&d!=="UNRECOGNIZED"?d.toLowerCase():String(l.op),Object.keys(l).forEach(c=>{l[c]===void 0&&delete l[c]}),l})),i.type==="ACTIVITY_DELTA"&&Array.isArray(i.patch)&&(i.patch=i.patch.map(l=>{let d=wy[l.op];return l.op=typeof d=="string"&&d!=="UNRECOGNIZED"?d.toLowerCase():String(l.op),Object.keys(l).forEach(c=>{l[c]===void 0&&delete l[c]}),l})),i.type==="RUN_FINISHED"&&Array.isArray(i.usage)&&i.usage.length===0&&delete i.usage,i.type==="RUN_ERROR"&&Array.isArray(i.usage)&&i.usage.length===0&&delete i.usage,i.type==="TOOL_CALL_RESULT"){let l=i;if(l.content!==void 0&&xe(l.contentParts).length>0)throw new Error("Invalid event: content carries both string content and content parts");l.content===void 0&&(l.content=xe(l.contentParts).map(d=>{let c=_w(d);return c===void 0&&xw(),c}).filter(d=>d!==void 0)),delete l.contentParts}return i.type==="RUN_STARTED"&&i.input!==void 0&&(i.input=xR(i.input)),vh(i),i}var wh="application/vnd.ag-ui.event+proto";var Eh=/^[v^~<>=]*?(\d+)(?:\.([x*]|\d+)(?:\.([x*]|\d+)(?:\.([x*]|\d+))?(?:-([\da-z\-]+(?:\.[\da-z\-]+)*))?(?:\+[\da-z\-]+(?:\.[\da-z\-]+)*)?)?)?$/i,xh=t=>{if(typeof t!="string")throw new TypeError("Invalid argument expected string");let e=t.match(Eh);if(!e)throw new Error(`Invalid argument not valid semver ('${t}' received)`);return e.shift(),e},Nw=t=>t==="*"||t==="x"||t==="X",Ow=t=>{let e=parseInt(t,10);return isNaN(e)?t:e},AR=(t,e)=>typeof t!=typeof e?[String(t),String(e)]:[t,e],RR=(t,e)=>{if(Nw(t)||Nw(e))return 0;let[n,r]=AR(Ow(t),Ow(e));return n>r?1:n<r?-1:0},_h=(t,e)=>{for(let n=0;n<Math.max(t.length,e.length);n++){let r=RR(t[n]||"0",e[n]||"0");if(r!==0)return r}return 0};var Wn=(t,e)=>{let n=xh(t),r=xh(e),o=n.pop(),i=r.pop(),s=_h(n,r);return s!==0?s:o&&i?_h(o.split("."),i.split(".")):o||i?o?-1:1:0};var Th=t=>typeof t=="string"&&/^[v\d]/.test(t)&&Eh.test(t);var Mw="@ag-ui/client";function IR(t){if(!t.metadata||!Object.prototype.hasOwnProperty.call(t.metadata,Mw))return;let e=t.metadata?.[Mw];if(!e||typeof e!="object"||Array.isArray(e))return[];if(!Object.prototype.hasOwnProperty.call(e,"authoritativeActivityTypes"))return;let n=e.authoritativeActivityTypes;return n===null?null:Array.isArray(n)&&n.every(r=>typeof r=="string")?n:[]}var te=t=>{if(typeof structuredClone=="function")return structuredClone(t);try{return JSON.parse(JSON.stringify(t))}catch{return Array.isArray(t)?[...t]:{...t}}};function Ie(){return sn()}function CR(t){return t instanceof TypeError?/read[- ]?only|not extensible|cannot add property|cannot delete property|can't be deleted|unable to delete property|object is frozen|is not writable/i.test(t.message):!1}function zh(t){if(Object.freeze(t),typeof t=="object"&&t)for(let e of Object.values(t))typeof e=="object"&&e&&!Object.isFrozen(e)&&zh(e);return t}var Pw=512*1024;function Lw(t,e,n){let r=0,o=[t,e],i=new WeakSet;for(;o.length>0;){let s=o.pop();if(typeof s=="string"){if(r+=s.length,r>n)return!0}else if(typeof s=="object"&&s){if(i.has(s))continue;if(i.add(s),Array.isArray(s))for(let a=0;a<s.length;a++)o.push(s[a]);else{let a=Object.keys(s);for(let l=0;l<a.length;l++){let d=a[l];if(r+=d.length,r>n)return!0;o.push(s[d])}}}}return!1}async function le(t,e,n,r){let o=typeof process<"u"&&process.env!==void 0,i=o&&!!process.env.VITEST_WORKER_ID,s=o&&!!process.env.VITEST_WORKER_ID,a=s&&!Lw(e,n,Pw),l=a?te(e):e,d=a?te(n):n,c=!1,h=!1,p;for(let m of t)try{a&&(zh(l),zh(d));let u=await r(m,l,d);if(u===void 0)continue;let v=!1;if(u.messages!==void 0&&u.messages!==l&&(l=te(u.messages),c=!0,v=!0),u.state!==void 0&&u.state!==d&&(d=te(u.state),h=!0,v=!0),a&&v&&Lw(l,d,Pw)&&(a=!1),p=u.stopPropagation,p===!0)break}catch(u){if(i&&u instanceof TypeError)throw u;a&&s&&CR(u)?console.error("AG-UI: Subscriber attempted to mutate frozen inputs in-place. Return mutations via AgentStateMutation instead of mutating directly.",u):console.error("Subscriber error:",u);continue}return{...c?{messages:Object.isFrozen(l)?te(l):l}:{},...h?{state:Object.isFrozen(d)?te(d):d}:{},...p===void 0?{}:{stopPropagation:p}}}function Ha(t){if(!t)return{enabled:!1,events:!1,lifecycle:!1,verbose:!1};if(t===!0)return{enabled:!0,events:!0,lifecycle:!0,verbose:!0};let e=t.events??!0,n=t.lifecycle??!0,r=t.verbose??!1;return{enabled:e||n,events:e,lifecycle:n,verbose:r}}function Kn(t){if(t instanceof Dh)return t;if(t===!0)return new Dh(Ha(!0))}var Dh=class{constructor(t){this.config=t}event(t,e,n,r){this.config.events&&(this.config.verbose?console.debug(`[${t}] ${e}`,typeof n=="string"?n:JSON.stringify(n)):console.debug(`[${t}] ${e}`,r??n))}lifecycle(t,e,n){this.config.lifecycle&&(n?console.debug(`[${t}] ${e}`,n):console.debug(`[${t}] ${e}`))}get eventsEnabled(){return this.config.events}get lifecycleEnabled(){return this.config.lifecycle}get enabled(){return this.config.enabled}};function Sh(t){return t.enabled?new Dh(t):void 0}function NR(t,e,n){if(e){let o=t.find(s=>s.id===e);if(o?.role==="assistant")return o;o&&console.warn(`TOOL_CALL_START: parentMessageId '${e}' matches a '${o.role}' message, not assistant \u2014 falling back to toolCallId`);let i={id:o?n:e,role:"assistant",toolCalls:[]};return t.push(i),i}let r={id:n,role:"assistant",toolCalls:[]};return t.push(r),r}function ht(t,e){return!t||e.metadata===void 0?!1:(t.metadata=Cm(t.metadata,te(e.metadata)),!0)}var qn=t=>typeof t=="object"&&t?t.role:void 0;function Jw(t){if(qn(t)!=="assistant")return[];let e=t.toolCalls;if(!Array.isArray(e))return[];let n=[];for(let r of e){if(typeof r!="object"||!r)continue;let o=r.id;typeof o=="string"&&n.push(o)}return n}function $h(t){let e=new Map,n=new Map,r=(u,v)=>{v.answered=!0,n.set(u,n.get(u)-1)},o=new Map,i=new Map,s=(u,v,E)=>{let x=u.get(v);x?x.push(E):u.set(v,[E])},a=-1;for(let u=0;u<t.length;u++){let v=t[u];if(typeof v!="object"||!v)continue;let E=qn(v);if(E==="tool"){let x=v.toolCallId;if(typeof x!="string")continue;let T=e.get(x);if(!T){s(i,x,u);continue}let O;for(let S=T.length-1;S>=0&&T[S].issuer===a;S--)T[S].answered||(O=T[S]);if(O){r(x,O);continue}n.get(x)>0&&s(o,x,u)}else if(E!=="activity"&&E!=="reasoning"){a=u;for(let x of Jw(v))s(e,x,{issuer:u,answered:!1}),n.set(x,(n.get(x)??0)+1)}}let l=new Map,d=[],c=(u,v,E)=>{r(u,E),s(l,E.issuer,v),d[v]=!0};for(let[u,v]of o){let E=e.get(u),x=E.length-1;for(let T=v.length-1;T>=0;T--){let O=v[T];for(;x>=0&&(E[x].answered||E[x].issuer>=O);)x--;if(x<0)break;c(u,O,E[x])}}for(let[u,v]of i){let E=e.get(u);E?.length!==1||E[0].answered||c(u,v[0],E[0])}if(l.size===0)return t;for(let u of l.values())u.sort((v,E)=>v-E);let h=[],p,m=()=>{if(p){let u=h.length;for(let E=h.length-1;E>=0;E--){let x=h[E],T=qn(x);if(typeof x=="object"&&x&&T!=="activity"&&T!=="reasoning")break;T==="reasoning"&&(u=E)}let v=h.splice(u);for(let E of p)h.push(t[E]);for(let E of v)h.push(E)}p=void 0};for(let u=0;u<t.length;u++){if(d[u])continue;let v=t[u],E=qn(v);typeof v=="object"&&v&&E!=="tool"&&E!=="activity"&&E!=="reasoning"&&m(),h.push(v),p=l.get(u)??p}return m(),h}function OR(t){let e={...t};t.role==="activity"&&(e.content=te(t.content));let n=t.toolCalls;return Array.isArray(n)&&(e.toolCalls=n.map(r=>r?.function?{...r,function:{...r.function}}:{...r})),e}function MR(t,e,n){let r=Object.keys(t);if(r.length!==Object.keys(e).length)return!1;for(let o of r){let i=o==="content"?n:t[o],s=e[o];if(o==="toolCalls"&&Array.isArray(i)&&Array.isArray(s)){if(!PR(i,s))return!1}else if(i!==s)return!1}return!0}function PR(t,e){if(t.length!==e.length)return!1;for(let n=0;n<t.length;n+=1){let r=t[n],o=e[n],i=Object.keys(r);if(i.length!==Object.keys(o).length)return!1;for(let s of i)if(s==="function"&&r.function&&o.function){let a=r.function,l=o.function,d=Object.keys(a);if(d.length!==Object.keys(l).length)return!1;for(let c of d)if(a[c]!==l[c])return!1}else if(r[s]!==o[s])return!1}return!0}var Qw=(t,e,n,r,o)=>{let i=Kn(o),s=te(n.messages),a=te(t.state),l={},d=new Set,c=new Set,h=[],p=new Set,m=T=>{let O=T.outcome?.type==="success"?T.outcome.pendingToolCallIds:void 0;return O!==void 0&&O.length>0?[...O]:h.filter(S=>!p.has(S))},u=T=>{T.messages!==void 0&&(s=T.messages,l.messages=T.messages),T.state!==void 0&&(a=T.state,l.state=T.state)},v=new WeakMap,E=T=>T.map(O=>{let S=v.get(O);if(S!==void 0&&MR(S.copy,O,S.content))return S.copy;let g=OR(O);return v.set(O,{copy:g,content:O.content}),g}),x=()=>{let T={};return l.messages!==void 0&&(T.messages=E(l.messages)),l.state!==void 0&&(T.state=te(l.state)),l={},T.messages!==void 0||T.state!==void 0?ge(T):Pn};return e.pipe(ws(async T=>{let O=await le(r,s,a,(S,g,w)=>S.onEvent?.({event:T,agent:n,input:t,messages:g,state:w}));if(u(O),O.stopPropagation===!0?i?.event("APPLY","Event dropped:",T,{type:T.type,reason:"stopPropagation by subscriber"}):i?.event("APPLY","Event applied:",T,{type:T.type,subscribers:r.length}),O.stopPropagation===!0)return x();switch(T.type){case y.TEXT_MESSAGE_START:{let S=await le(r,s,a,(g,w,b)=>g.onTextMessageStartEvent?.({event:T,messages:w,state:b,agent:n,input:t}));if(u(S),S.stopPropagation!==!0){let{messageId:g,role:w="assistant",name:b,subagentRunId:k}=T,I=s.find(z=>z.id===g);if(I?.role==="activity")return console.warn(`TEXT_MESSAGE_START: Message '${g}' is an activity message \u2014 message ids must be unique across activity and text messages`),x();let P=I;if(!P){let z={id:g,role:w,content:"",...b!==void 0&&{name:b},...k!=null&&{subagentRunId:k}};s.push(z),P=z}let U=ht(P,T);(!I||U)&&u({messages:s})}return x()}case y.TEXT_MESSAGE_CONTENT:{let{messageId:S,delta:g}=T,w=s.find(k=>k.id===S);if(!w)return console.warn(`TEXT_MESSAGE_CONTENT: No message found with ID '${S}'`),x();if(w.role==="activity")return console.warn(`TEXT_MESSAGE_CONTENT: Message '${S}' is an activity message \u2014 message ids must be unique across activity and text messages`),x();let b=await le(r,s,a,(k,I,P)=>k.onTextMessageContentEvent?.({event:T,messages:I,state:P,agent:n,input:t,textMessageBuffer:typeof w.content=="string"?w.content:""}));return u(b),b.stopPropagation!==!0&&(w.content=`${typeof w.content=="string"?w.content:""}${g}`,ht(w,T),u({messages:s})),x()}case y.TEXT_MESSAGE_END:{let{messageId:S}=T,g=s.find(b=>b.id===S);if(!g)return console.warn(`TEXT_MESSAGE_END: No message found with ID '${S}'`),x();if(g.role==="activity")return console.warn(`TEXT_MESSAGE_END: Message '${S}' is an activity message \u2014 message ids must be unique across activity and text messages`),x();let w=await le(r,s,a,(b,k,I)=>b.onTextMessageEndEvent?.({event:T,messages:k,state:I,agent:n,input:t,textMessageBuffer:typeof g.content=="string"?g.content:""}));return u(w),w.stopPropagation!==!0&&ht(g,T)&&u({messages:s}),await Promise.all(r.map(b=>b.onNewMessage?.({message:g,messages:s,state:a,agent:n,input:t}))),x()}case y.TOOL_CALL_START:{let S=await le(r,s,a,(g,w,b)=>g.onToolCallStartEvent?.({event:T,messages:w,state:b,agent:n,input:t}));if(u(S),S.stopPropagation!==!0){let{toolCallId:g,toolCallName:w,parentMessageId:b,subagentRunId:k}=T;h.includes(g)||h.push(g);let I=s.find(ee=>ee.toolCalls?.some(ae=>ae.id===g))?.toolCalls?.find(ee=>ee.id===g);if(d.has(g)||(d.add(g),I&&c.add(g)),I){let ee=I.function.name!==w;return ee&&(console.warn(`TOOL_CALL_START: tool call '${g}' already exists with name '${I.function.name}' \u2014 updating it to '${w}'`),I.function.name=w),(ht(I,T)||ee)&&u({messages:s}),x()}let P=new Set(s.map(ee=>ee.id)),U=NR(s,b,g);!P.has(U.id)&&k!=null&&U.subagentRunId===void 0&&(U.subagentRunId=k),U.toolCalls??=[];let z={id:g,type:"function",function:{name:w,arguments:""}};U.toolCalls.push(z),ht(z,T),u({messages:s})}return x()}case y.TOOL_CALL_ARGS:{let{toolCallId:S,delta:g}=T,w=s.find(I=>I.toolCalls?.some(P=>P.id===S));if(!w)return console.warn(`TOOL_CALL_ARGS: No message found containing tool call with ID '${S}'`),x();let b=w.toolCalls?.find(I=>I.id===S);if(!b)return console.warn(`TOOL_CALL_ARGS: No tool call found with ID '${S}'`),x();let k=await le(r,s,a,(I,P,U)=>{let z=c.has(S)?"":b.function.arguments,ee=b.function.name,ae={};try{ae=_s(z)}catch{}return I.onToolCallArgsEvent?.({event:T,messages:P,state:U,agent:n,input:t,toolCallBuffer:z,toolCallName:ee,partialToolCallArgs:ae})});return u(k),k.stopPropagation!==!0&&(c.delete(S)?b.function.arguments=g:b.function.arguments+=g,ht(b,T),u({messages:s})),x()}case y.TOOL_CALL_END:{let{toolCallId:S}=T,g=s.find(k=>k.toolCalls?.some(I=>I.id===S));if(!g)return console.warn(`TOOL_CALL_END: No message found containing tool call with ID '${S}'`),x();let w=g.toolCalls?.find(k=>k.id===S);if(!w)return console.warn(`TOOL_CALL_END: No tool call found with ID '${S}'`),x();let b=await le(r,s,a,(k,I,P)=>{let U=w.function.arguments,z=w.function.name,ee={};try{ee=JSON.parse(U)}catch{}return k.onToolCallEndEvent?.({event:T,messages:I,state:P,agent:n,input:t,toolCallName:z,toolCallArgs:ee})});return u(b),b.stopPropagation!==!0&&(d.delete(S),c.delete(S)),b.stopPropagation!==!0&&ht(w,T)&&u({messages:s}),await Promise.all(r.map(k=>k.onNewToolCall?.({toolCall:w,messages:s,state:a,agent:n,input:t}))),x()}case y.TOOL_CALL_RESULT:{let S=await le(r,s,a,(g,w,b)=>g.onToolCallResultEvent?.({event:T,messages:w,state:b,agent:n,input:t}));if(u(S),S.stopPropagation!==!0){let{messageId:g,toolCallId:w,content:b,role:k,subagentRunId:I}=T;p.add(w);let P=s.findIndex(z=>z.id===g&&z.role==="tool"&&z.toolCallId===w),U={...P===-1?{}:s[P],id:g,toolCallId:w,role:k||"tool",content:b,...I!=null&&{subagentRunId:I}};if(I??delete U.subagentRunId,ht(U,T),P!==-1)s[P]=U;else{let z=-1,ee=-1,ae=!1;for(let ue=s.length-1;ue>=0;ue--){let qe=s[ue];if(qn(qe)==="tool"&&qe.toolCallId===w)ae=!0;else if(Jw(qe).includes(w)){if(ee===-1&&(ee=ue),!ae){z=ue;break}ae=!1}}if(z===-1&&(z=ee),z===-1)s.push(U);else{let ue=z+1;for(;ue<s.length&&(typeof s[ue]!="object"||qn(s[ue])==="tool"||qn(s[ue])==="activity");)ue++;s.splice(ue,0,U)}await Promise.all(r.map(ue=>ue.onNewMessage?.({message:U,messages:s,state:a,agent:n,input:t})))}u({messages:s})}return x()}case y.STATE_SNAPSHOT:{let S=await le(r,s,a,(g,w,b)=>g.onStateSnapshotEvent?.({event:T,messages:w,state:b,agent:n,input:t}));if(u(S),S.stopPropagation!==!0){let{snapshot:g}=T;a=te(g),u({state:a})}return x()}case y.STATE_DELTA:{let S=await le(r,s,a,(g,w,b)=>g.onStateDeltaEvent?.({event:T,messages:w,state:b,agent:n,input:t}));if(u(S),S.stopPropagation!==!0){let{delta:g}=T;try{a=Xi.applyPatch(a,te(g),!0,!1).newDocument,u({state:a})}catch(w){let b=w instanceof Error?w.message:String(w);console.warn(`Failed to apply state patch:
Current state: ${JSON.stringify(a,null,2)}
Patch operations: ${JSON.stringify(g,null,2)}
Error: ${b}`)}}return x()}case y.MESSAGES_SNAPSHOT:{let S=await le(r,s,a,(g,w,b)=>g.onMessagesSnapshotEvent?.({event:T,messages:w,state:b,agent:n,input:t}));if(u(S),S.stopPropagation!==!0){let g=te(T.messages).map(z=>{if(z.subagentRunId!==null)return z;let ee={...z};return delete ee.subagentRunId,ee}),w=new Map(g.map(z=>[z.id,z])),b=IR(T),k=g.some(z=>z.role==="activity"),I=g.some(z=>z.role==="reasoning"),P=z=>z.role==="activity"&&(b?!b.includes(z.activityType):b!==null&&!k)||z.role==="reasoning"&&!I;s=s.filter(z=>w.has(z.id)||P(z)).map(z=>w.get(z.id)??z);let U=new Set(s.map(z=>z.id));for(let z of g)U.has(z.id)||s.push(z);s=$h(s),u({messages:s})}return x()}case y.ACTIVITY_SNAPSHOT:{let S=T,g=s.findIndex(P=>P.id===S.messageId),w=g>=0?s[g]:void 0,b=w?.role==="activity"?w:void 0,k=S.replace??!0,I=await le(r,s,a,(P,U,z)=>P.onActivitySnapshotEvent?.({event:S,messages:U,state:z,agent:n,input:t,activityMessage:b,existingMessage:w}));if(u(I),I.stopPropagation!==!0){let P={id:S.messageId,role:"activity",activityType:S.activityType,content:te(S.content),...S.subagentRunId!=null&&{subagentRunId:S.subagentRunId}},U,z;g===-1?(s.push(P),U=P,z=P):b?(k&&(s[g]={...b,activityType:S.activityType,content:te(S.content),subagentRunId:S.subagentRunId},S.subagentRunId??delete s[g].subagentRunId),z=s[g]):k&&(s[g]=P,U=P,z=P),ht(z,S),u({messages:s}),U&&await Promise.all(r.map(ee=>ee.onNewMessage?.({message:U,messages:s,state:a,agent:n,input:t})))}return x()}case y.ACTIVITY_DELTA:{let S=T,g=s.findIndex(I=>I.id===S.messageId);if(g===-1)return x();let w=s[g];if(w.role!=="activity")return console.warn(`ACTIVITY_DELTA: Message '${S.messageId}' is not an activity message`),x();let b=w,k=await le(r,s,a,(I,P,U)=>I.onActivityDeltaEvent?.({event:S,messages:P,state:U,agent:n,input:t,activityMessage:b}));if(u(k),k.stopPropagation!==!0)try{ht(b,S)&&u({messages:s});let I=te(b.content??{}),P=Xi.applyPatch(I,S.patch??[],!0,!1).newDocument;s[g]={...b,content:te(P),activityType:S.activityType},u({messages:s})}catch(I){let P=I instanceof Error?I.message:String(I);console.warn(`Failed to apply activity patch for '${S.messageId}': ${P}`)}return x()}case y.RAW:return u(await le(r,s,a,(S,g,w)=>S.onRawEvent?.({event:T,messages:g,state:w,agent:n,input:t}))),x();case y.CUSTOM:return u(await le(r,s,a,(S,g,w)=>S.onCustomEvent?.({event:T,messages:g,state:w,agent:n,input:t}))),x();case y.RUN_STARTED:{let S=await le(r,s,a,(g,w,b)=>g.onRunStartedEvent?.({event:T,messages:w,state:b,agent:n,input:t}));if(u(S),h=[],p=new Set,S.stopPropagation!==!0){d.clear(),c.clear();let g=T;if(g.input?.messages){for(let w of g.input.messages){let b=w;if(w.subagentRunId===null){let k={...w};delete k.subagentRunId,b=k}s.find(k=>k.id===b.id)||s.push(b)}u({messages:s})}}return x()}case y.RUN_FINISHED:{let S=T,g=S.outcome?.type==="interrupt"?{event:S,outcome:"interrupt",interrupts:S.outcome.interrupts}:S.outcome?.type==="cancelled"?{event:S,outcome:"cancelled"}:{event:S,outcome:"success",result:S.result,pendingToolCallIds:m(S)},w=await le(r,s,a,(b,k,I)=>b.onRunFinishedEvent?.({...g,messages:k,state:I,agent:n,input:t}));return u(w),w.stopPropagation!==!0&&(n.pendingInterrupts=g.outcome==="interrupt"?g.interrupts.map(b=>{if(b.subagentRunId!==null)return b;let k={...b};return delete k.subagentRunId,k}):[]),x()}case y.RUN_ERROR:return u(await le(r,s,a,(S,g,w)=>S.onRunErrorEvent?.({event:T,messages:g,state:w,agent:n,input:t}))),x();case y.STEP_STARTED:return u(await le(r,s,a,(S,g,w)=>S.onStepStartedEvent?.({event:T,messages:g,state:w,agent:n,input:t}))),x();case y.STEP_FINISHED:return u(await le(r,s,a,(S,g,w)=>S.onStepFinishedEvent?.({event:T,messages:g,state:w,agent:n,input:t}))),x();case y.TEXT_MESSAGE_CHUNK:throw Error("TEXT_MESSAGE_CHUNK must be transformed before being applied");case y.TOOL_CALL_CHUNK:throw Error("TOOL_CALL_CHUNK must be transformed before being applied");case y.REASONING_START:return u(await le(r,s,a,(S,g,w)=>S.onReasoningStartEvent?.({event:T,messages:g,state:w,agent:n,input:t}))),x();case y.REASONING_MESSAGE_START:{let S=await le(r,s,a,(g,w,b)=>g.onReasoningMessageStartEvent?.({event:T,messages:w,state:b,agent:n,input:t}));if(u(S),S.stopPropagation!==!0){let{messageId:g,subagentRunId:w}=T,b=s.find(P=>P.id===g);if(b?.role==="activity")return console.warn(`REASONING_MESSAGE_START: Message '${g}' is an activity message \u2014 message ids must be unique across activity and reasoning messages`),x();let k=b;if(!k){let P={id:g,role:"reasoning",content:"",...w!=null&&{subagentRunId:w}};s.push(P),k=P}let I=ht(k,T);(!b||I)&&u({messages:s})}return x()}case y.REASONING_MESSAGE_CONTENT:{let{messageId:S,delta:g}=T,w=s.find(k=>k.id===S);if(!w)return console.warn(`REASONING_MESSAGE_CONTENT: No message found with ID '${S}'`),x();if(w.role==="activity")return console.warn(`REASONING_MESSAGE_CONTENT: Message '${S}' is an activity message \u2014 message ids must be unique across activity and reasoning messages`),x();let b=await le(r,s,a,(k,I,P)=>k.onReasoningMessageContentEvent?.({event:T,messages:I,state:P,agent:n,input:t,reasoningMessageBuffer:typeof w.content=="string"?w.content:""}));return u(b),b.stopPropagation!==!0&&(w.content=`${typeof w.content=="string"?w.content:""}${g}`,ht(w,T),u({messages:s})),x()}case y.REASONING_MESSAGE_END:{let{messageId:S}=T,g=s.find(b=>b.id===S);if(!g)return console.warn(`REASONING_MESSAGE_END: No message found with ID '${S}'`),x();if(g.role==="activity")return console.warn(`REASONING_MESSAGE_END: Message '${S}' is an activity message \u2014 message ids must be unique across activity and reasoning messages`),x();let w=await le(r,s,a,(b,k,I)=>b.onReasoningMessageEndEvent?.({event:T,messages:k,state:I,agent:n,input:t,reasoningMessageBuffer:typeof g.content=="string"?g.content:""}));return u(w),w.stopPropagation!==!0&&ht(g,T)&&u({messages:s}),await Promise.all(r.map(b=>b.onNewMessage?.({message:g,messages:s,state:a,agent:n,input:t}))),x()}case y.REASONING_MESSAGE_CHUNK:throw Error("REASONING_MESSAGE_CHUNK must be transformed before being applied");case y.REASONING_END:return u(await le(r,s,a,(S,g,w)=>S.onReasoningEndEvent?.({event:T,messages:g,state:w,agent:n,input:t}))),x();case y.REASONING_ENCRYPTED_VALUE:{let{subtype:S,entityId:g,encryptedValue:w}=T,b=await le(r,s,a,(k,I,P)=>k.onReasoningEncryptedValueEvent?.({event:T,messages:I,state:P,agent:n,input:t}));if(u(b),b.stopPropagation!==!0){let k=!1;if(S==="tool-call"){for(let I of s)if(I.role==="assistant"&&I.toolCalls){let P=I.toolCalls.find(U=>U.id===g);if(P){P.encryptedValue=w,k=!0;break}}}else{let I=s.find(P=>P.id===g);I?.role!=="activity"&&I&&(I.encryptedValue=w,k=!0)}k&&(l.messages=s)}return x()}case y.SUBAGENT_STARTED:return u(await le(r,s,a,(S,g,w)=>S.onSubagentStartedEvent?.({event:T,messages:g,state:w,agent:n,input:t}))),x();case y.SUBAGENT_FINISHED:return u(await le(r,s,a,(S,g,w)=>S.onSubagentFinishedEvent?.({event:T,messages:g,state:w,agent:n,input:t}))),x();case y.SUBAGENT_ERROR:return u(await le(r,s,a,(S,g,w)=>S.onSubagentErrorEvent?.({event:T,messages:g,state:w,agent:n,input:t}))),x()}return T.type,x()}),No(),r.length>0?du({}):T=>T)};function Va(t,e){typeof process<"u"&&process.env!==void 0&&process.env.SUPPRESS_TRANSFORMATION_WARNINGS||console.warn(`[ag-ui][compat] Converting deprecated ${t} to ${e}. The old shape leaves the protocol after its shim window \u2014 see the repo-root DEPRECATIONS.md. Set SUPPRESS_TRANSFORMATION_WARNINGS=true to silence.`)}var kh=t=>e=>{let n=Kn(t),r=new Set,o=new Set,i=new Set,s=new Set,a={message:new Map,toolCall:new Map,activity:new Map,reasoning:new Map},l=!1,d=!1,c=!1,h=new Map,p=g=>{let w=h.get(g);return w||(w=new Map,h.set(g,w)),w},m=()=>{for(let g of h.values())if(g.size>0)return!0;return!1},u=new Map,v=new Set,E=!1,x=!1,T=()=>{x=!1,r.clear(),o.clear(),i.clear(),s.clear(),a.message.clear(),a.toolCall.clear(),a.activity.clear(),a.reasoning.clear(),h.clear(),u.clear(),v.clear(),l=!1,d=!1,E=!0},O=(g,w)=>{let b=g??[];if(Array.isArray(b))for(let k of b){if(!k||typeof k.id!="string")continue;if(k.subagentRunId===null)return new K(`Cannot send a message (id '${k.id}') with 'subagentRunId: null'. The field is optional \u2014 omit it entirely.`);let I=k.role==="reasoning"?a.reasoning:k.role==="activity"?a.activity:a.message;(w||!I.has(k.id))&&I.set(k.id,{subagentRunId:k.subagentRunId});for(let P of k.toolCalls??[])P&&typeof P.id=="string"&&(w||!a.toolCall.has(P.id))&&a.toolCall.set(P.id,{subagentRunId:k.subagentRunId??void 0})}},S=(g,w,b,k,I)=>{if(w!==void 0&&b&&b.subagentRunId!==w)return new K(`Cannot send '${g}': subagentRunId '${w}' does not match the ${k} '${I}' opener's subagent '${b.subagentRunId??"(the parent agent)"}'.`)};return e.pipe(at(g=>{let w=g.type;if(n?.event("VERIFY","Event:",g,{type:g.type}),d&&w!==y.RUN_STARTED)return j(()=>new K(`Cannot send event type '${w}': The run has already errored with 'RUN_ERROR'. No further events can be sent.`));if(l&&w!==y.RUN_ERROR&&w!==y.RUN_STARTED)return j(()=>new K(`Cannot send event type '${w}': The run has already finished with 'RUN_FINISHED'. Start a new run with 'RUN_STARTED'.`));if(c){if(w===y.RUN_STARTED){if(E&&!l&&!d)return j(()=>new K("Cannot send 'RUN_STARTED' while a run is still active. The previous run must be finished with 'RUN_FINISHED' before starting a new run."));(l||d)&&T()}}else if(c=!0,w!==y.RUN_STARTED&&w!==y.RUN_ERROR)return j(()=>new K("First event must be 'RUN_STARTED'"));if(g.subagentRunId===null){x||(x=!0,Va("subagentRunId: null","an absent field"));let{subagentRunId:b,...k}=g;g=k}if(w===y.SUBAGENT_STARTED||w===y.SUBAGENT_FINISHED||w===y.SUBAGENT_ERROR){let b=w===y.SUBAGENT_STARTED?["description","parentSubagentRunId","parentToolCallId","parentMessageId"]:w===y.SUBAGENT_FINISHED?["outcome"]:["code"];for(let I of b)if(g[I]===null)return j(()=>new K(`Cannot send '${w}' with '${I}: null'. The field is optional \u2014 omit it entirely.`));let k=g.outcome;if(k!=null&&k.type!=="success"&&k.type!=="suspended")return j(()=>new K(`Cannot send '${w}' with outcome type '${String(k.type)}'. The outcome is either { type: "success" } or { type: "suspended" }.`));if(k&&k.interruptIds===null)return j(()=>new K(`Cannot send '${w}' with 'outcome.interruptIds: null'. The field is optional \u2014 omit it entirely.`));if(k&&Array.isArray(k.interruptIds)&&k.interruptIds.some(I=>typeof I!="string"))return j(()=>new K(`Cannot send '${w}' with a non-string entry in 'outcome.interruptIds'. Interrupt ids are strings.`))}if(w===y.RUN_FINISHED){let b=g.outcome;if(b?.type==="interrupt"&&Array.isArray(b.interrupts)){for(let k of b.interrupts)if(k&&k.subagentRunId===null)return j(()=>new K(`Cannot send 'RUN_FINISHED' with an interrupt (id '${k.id}') carrying 'subagentRunId: null'. The field is optional \u2014 omit it entirely.`))}}switch(w){case y.TEXT_MESSAGE_START:{let b=g.messageId;if(r.has(b))return j(()=>new K(`Cannot send 'TEXT_MESSAGE_START' event: A text message with ID '${b}' is already in progress. Complete it with 'TEXT_MESSAGE_END' first.`));let k=a.message.get(b);if(k){let I=S(w,g.subagentRunId,k,"message",b);if(I)return j(()=>I)}return r.add(b),k||a.message.set(b,{subagentRunId:g.subagentRunId}),ge(g)}case y.TEXT_MESSAGE_CONTENT:{let b=g.messageId;if(!r.has(b))return j(()=>new K(`Cannot send 'TEXT_MESSAGE_CONTENT' event: No active text message found with ID '${b}'. Start a text message with 'TEXT_MESSAGE_START' first.`));let k=S(w,g.subagentRunId,a.message.get(b),"message",b);return k?j(()=>k):ge(g)}case y.TEXT_MESSAGE_END:{let b=g.messageId;if(!r.has(b))return j(()=>new K(`Cannot send 'TEXT_MESSAGE_END' event: No active text message found with ID '${b}'. A 'TEXT_MESSAGE_START' event must be sent first.`));let k=S(w,g.subagentRunId,a.message.get(b),"message",b);return k?j(()=>k):(r.delete(b),ge(g))}case y.TOOL_CALL_START:{let b=g.toolCallId;if(o.has(b))return j(()=>new K(`Cannot send 'TOOL_CALL_START' event: A tool call with ID '${b}' is already in progress. Complete it with 'TOOL_CALL_END' first.`));let k=g.parentMessageId,I=g.subagentRunId,P;if(k!==void 0){let z=a.message.get(k);if(z){if(I!==void 0&&I!==z.subagentRunId)return j(()=>new K(`Cannot send 'TOOL_CALL_START': subagentRunId '${I}' does not match its parent message '${k}' owner '${z.subagentRunId??"(the parent agent)"}'. A tool call belongs to the message that carries it.`));P=z}}let U=a.toolCall.get(b);if(U){let z=S(w,I,U,"tool call",b);if(z)return j(()=>z);if(I===void 0&&P&&P.subagentRunId!==U.subagentRunId)return j(()=>new K(`Cannot send 'TOOL_CALL_START': tool call '${b}' is owned by '${U.subagentRunId??"(the parent agent)"}' but its parent message '${k}' is owned by '${P.subagentRunId??"(the parent agent)"}'. A tool call belongs to the message that carries it.`))}return o.add(b),U||a.toolCall.set(b,I===void 0?P??{subagentRunId:void 0}:{subagentRunId:I}),ge(g)}case y.TOOL_CALL_ARGS:{let b=g.toolCallId;if(!o.has(b))return j(()=>new K(`Cannot send 'TOOL_CALL_ARGS' event: No active tool call found with ID '${b}'. Start a tool call with 'TOOL_CALL_START' first.`));let k=S(w,g.subagentRunId,a.toolCall.get(b),"tool call",b);return k?j(()=>k):ge(g)}case y.TOOL_CALL_END:{let b=g.toolCallId;if(!o.has(b))return j(()=>new K(`Cannot send 'TOOL_CALL_END' event: No active tool call found with ID '${b}'. A 'TOOL_CALL_START' event must be sent first.`));let k=S(w,g.subagentRunId,a.toolCall.get(b),"tool call",b);return k?j(()=>k):(o.delete(b),ge(g))}case y.STEP_STARTED:{let b=g.stepName,k=g.subagentRunId;return p(k).has(b)?j(()=>new K(`Step "${b}" is already active for 'STEP_STARTED'${k===void 0?"":` in subagent '${k}'`}`)):(p(k).set(b,!0),ge(g))}case y.STEP_FINISHED:{let b=g.stepName,k=g.subagentRunId;if(!p(k).has(b)){let I,P=!1;for(let[U,z]of h)if(U!==k&&z.has(b)){I=U,P=!0;break}return j(P?()=>new K(`Cannot send 'STEP_FINISHED' for step "${b}" attributed to ${k===void 0?"the parent agent":`subagent '${k}'`}: that step is open under ${I===void 0?"the parent agent":`subagent '${I}'`}. A step must be finished by whoever started it.`):()=>new K(`Cannot send 'STEP_FINISHED' for step "${b}" that was not started`))}return p(k).delete(b),ge(g)}case y.ACTIVITY_SNAPSHOT:{let b=g.messageId;return(!a.activity.has(b)||g.replace!==!1)&&a.activity.set(b,{subagentRunId:g.subagentRunId}),ge(g)}case y.TOOL_CALL_RESULT:{let b=g.messageId;return typeof b=="string"&&a.message.set(b,{subagentRunId:g.subagentRunId}),ge(g)}case y.REASONING_START:case y.REASONING_MESSAGE_START:{let b=g.messageId,k=w===y.REASONING_START,I=k?i:s;if(I.has(b))return j(()=>new K(k?`Cannot send 'REASONING_START' event: A reasoning span with ID '${b}' is already in progress. Complete it with 'REASONING_END' first.`:`Cannot send 'REASONING_MESSAGE_START' event: A reasoning message with ID '${b}' is already in progress. Complete it with 'REASONING_MESSAGE_END' first.`));let P=a.reasoning.get(b);if(P){let U=S(w,g.subagentRunId,P,"reasoning message",b);if(U)return j(()=>U)}return I.add(b),P||a.reasoning.set(b,{subagentRunId:g.subagentRunId}),ge(g)}case y.REASONING_MESSAGE_CONTENT:case y.REASONING_MESSAGE_END:case y.REASONING_END:{let b=g.messageId,k=w===y.REASONING_END,I=k?i:s;if(!I.has(b))return j(()=>new K(k?`Cannot send 'REASONING_END' event: No active reasoning span found with ID '${b}'. A 'REASONING_START' event must be sent first.`:`Cannot send '${w}' event: No active reasoning message found with ID '${b}'. Start a reasoning message with 'REASONING_MESSAGE_START' first.`));let P=S(w,g.subagentRunId,a.reasoning.get(b),"reasoning message",b);return P?j(()=>P):((w===y.REASONING_END||w===y.REASONING_MESSAGE_END)&&I.delete(b),ge(g))}case y.REASONING_ENCRYPTED_VALUE:{let b=g.entityId,k=g.subtype,I=k==="tool-call"?a.toolCall.get(b):k==="message"?a.message.get(b)??a.reasoning.get(b):a.reasoning.get(b),P=k==="tool-call"?"tool call":k==="message"?"message":"reasoning message",U=S(w,g.subagentRunId,I,P,b);return U?j(()=>U):ge(g)}case y.ACTIVITY_DELTA:{let b=g.messageId,k=S(w,g.subagentRunId,a.activity.get(b),"activity",b);return k?j(()=>k):ge(g)}case y.SUBAGENT_STARTED:{if(typeof g.subagentRunId!="string")return j(()=>new K("Cannot send 'SUBAGENT_STARTED' without a 'subagentRunId'."));if(typeof g.name!="string")return j(()=>new K("Cannot send 'SUBAGENT_STARTED' without a 'name'."));let b=g.subagentRunId,k=g.parentSubagentRunId;return u.has(b)?j(()=>new K(`Cannot send 'SUBAGENT_STARTED': subagent '${b}' is already active. Finish it with 'SUBAGENT_FINISHED' first.`)):v.has(b)?j(()=>new K(`Cannot send 'SUBAGENT_STARTED': subagent '${b}' has already finished in this run. Subagent IDs are per-invocation and cannot be reused.`)):k!==void 0&&!u.has(k)&&!v.has(k)?j(()=>new K(`Cannot send 'SUBAGENT_STARTED': parentSubagentRunId '${k}' has not been started in this run.`)):(u.set(b,!0),ge(g))}case y.SUBAGENT_FINISHED:case y.SUBAGENT_ERROR:{if(typeof g.subagentRunId!="string")return j(()=>new K(`Cannot send '${w}' without a 'subagentRunId'.`));if(w===y.SUBAGENT_ERROR&&typeof g.message!="string")return j(()=>new K("Cannot send 'SUBAGENT_ERROR' without a 'message'."));let b=g.subagentRunId;return u.has(b)?(u.delete(b),v.add(b),ge(g)):j(()=>new K(`Cannot send '${w}': no active subagent found with ID '${b}'. A 'SUBAGENT_STARTED' event must be sent first.`))}case y.MESSAGES_SNAPSHOT:{let b=O(g.messages,!0);if(b)return j(()=>b)}return ge(g);case y.RUN_STARTED:E=!0;{let b=O((g.input??{}).messages,!1);if(b)return j(()=>b)}return ge(g);case y.RUN_FINISHED:if(m()){let b=[];for(let[I,P]of h)for(let U of P.keys())b.push(I===void 0?U:`${U} (subagent '${I}')`);let k=b.join(", ");return j(()=>new K(`Cannot send 'RUN_FINISHED' while steps are still active: ${k}`))}if(r.size>0){let b=Array.from(r.keys()).join(", ");return j(()=>new K(`Cannot send 'RUN_FINISHED' while text messages are still active: ${b}`))}if(s.size>0){let b=Array.from(s.keys()).join(", ");return j(()=>new K(`Cannot send 'RUN_FINISHED' while reasoning messages are still active: ${b}`))}if(i.size>0){let b=Array.from(i.keys()).join(", ");return j(()=>new K(`Cannot send 'RUN_FINISHED' while reasoning spans are still active: ${b}`))}if(o.size>0){let b=Array.from(o.keys()).join(", ");return j(()=>new K(`Cannot send 'RUN_FINISHED' while tool calls are still active: ${b}`))}if(u.size>0){let b=Array.from(u.keys()).join(", ");return j(()=>new K(`Cannot send 'RUN_FINISHED' while subagents are still active: ${b}`))}return l=!0,ge(g);case y.RUN_ERROR:return d=!0,ge(g);case y.CUSTOM:return ge(g);default:return ge(g)}}))},Yn=(function(t){return t.HEADERS="headers",t.DATA="data",t})({}),Fh=t=>Ln(()=>Xt(t())).pipe(cu(e=>{if(!e.ok){let o=e.headers.get("content-type")||"";return Xt(e.text()).pipe(at(i=>{let s=i;if(o.includes("application/json"))try{s=JSON.parse(i)}catch{}let a=Error(`HTTP ${e.status}: ${typeof s=="string"?s:JSON.stringify(s)}`);return a.status=e.status,a.payload=s,j(()=>a)}))}let n={type:Yn.HEADERS,status:e.status,headers:e.headers},r=e.body?.getReader();return r?new _e(o=>{let i=!1;return o.next(n),(async()=>{try{for(;!o.closed;){let{done:s,value:a}=await r.read();if(s){i=!0;break}let l={type:Yn.DATA,data:a};o.next(l)}o.complete()}catch(s){i=!0,o.error(s)}})(),()=>{i||r.cancel().catch(s=>{s?.name!=="AbortError"&&console.warn("Failed to cancel HTTP response stream:",s)})}}):j(()=>Error("Failed to getReader() from response"))})),zw=10*1024*1024,LR=(t,e)=>{let n=Kn(e),r=new zt,o=new TextDecoder("utf-8",{fatal:!1}),i="";t.subscribe({next:a=>{if(a.type!==Yn.HEADERS&&a.type===Yn.DATA&&a.data){let l=o.decode(a.data,{stream:!0});i+=l;let d=i.split(/\n\n/);i=d.pop()||"";for(let c of d)s(c);if(i.length>zw){r.error(Error(`SSE buffer size exceeded maximum limit of ${zw/(1024*1024)} MB`));return}}},error:a=>r.error(a),complete:()=>{i&&(i+=o.decode(),s(i)),r.complete()}});function s(a){let l=a.split(`
`),d=[];for(let c of l)c.startsWith("data:")&&d.push(c.slice(5).replace(/^ /,""));if(d.length>0)try{let c=d.join(`
`),h=JSON.parse(c);n?.event("SSE","Event received:",h,{type:h?.type}),r.next(h)}catch(c){r.error(c)}}return r.asObservable()},Dw=10*1024*1024,zR=()=>typeof process<"u"&&process.env!==void 0&&!!process.env.SUPPRESS_TRANSFORMATION_WARNINGS,DR=(t,e)=>{let n=Kn(e),r=new zt,o=new Uint8Array,i=!1;t.subscribe({next:a=>{if(a.type!==Yn.HEADERS&&a.type===Yn.DATA&&a.data){let l=new Uint8Array(o.length+a.data.length);l.set(o,0),l.set(a.data,o.length),o=l,s()}},error:a=>r.error(a),complete:()=>{if(s(),!i){if(o.length>0){r.error(Error(`The binary stream ended mid-frame: ${o.length} trailing bytes could not be read as a complete message.`));return}r.complete()}}});function s(){if(!i)for(;o.length>=4;){let a=4+new DataView(o.buffer,o.byteOffset,4).getUint32(0,!1);if(a>Dw){r.error(Error(`Protobuf message size exceeded maximum limit of ${Dw/(1024*1024)} MB`));return}if(o.length<a)break;try{let l=o.slice(4,a),d=Cw(l);n?.event("PROTO","Event received:",d,{type:d.type}),r.next(d)}catch(l){if(l instanceof yh)zR()||console.warn("[ag-ui][proto] Dropped an event this build does not know: the protocol has a variant this SDK predates.");else{let d=l instanceof Error?l.message:String(l);i=!0,r.error(Error(`Failed to decode protocol buffer message: ${d}`));return}}o=o.slice(a)}}return r.asObservable()},Gh=(t,e)=>{let n=Kn(e),r=new zt,o=new is(1),i=!1,s,a=!1,l=()=>{a=!0,s?.unsubscribe()},d=h=>{l(),r.error(h)},c=()=>{l(),r.complete()};return s=t.subscribe({next:h=>{if(o.next(h),h.type===Yn.HEADERS&&!i){i=!0;let p=h.headers.get("content-type");n?.lifecycle("HTTP","Stream format detected:",{contentType:p,parser:p===wh?"protobuf":"sse"}),p===wh?DR(o,n).subscribe({next:m=>r.next(m),error:m=>d(m),complete:()=>c()}):LR(o,n).subscribe({next:m=>{if(typeof m!="object"||!m||Array.isArray(m)){let v=Error("Invalid event: the frame is not a JSON object.");n?.event("HTTP","Event invalid:",{json:m,error:String(v)}),d(v);return}let u=m;if(typeof u.type!="string"||u.type.length===0){let v=Error("Invalid event: the frame carries no event type.");n?.event("HTTP","Event invalid:",{json:m,error:String(v)}),d(v);return}n?.event("HTTP","Event received:",m,{type:u.type}),r.next(m)},error:m=>{if(m?.name==="AbortError"){r.next({type:y.RUN_ERROR,message:m.message||"Request aborted",code:"abort",rawEvent:m}),c();return}return d(m)},complete:()=>c()})}else i||d(Error("No headers event received before data events"))},error:h=>{o.error(h),d(h)},complete:()=>{o.complete()}}),a&&s.unsubscribe(),r.asObservable()},Qe={TextMessageStart:"TextMessageStart",TextMessageContent:"TextMessageContent",TextMessageEnd:"TextMessageEnd",ActionExecutionStart:"ActionExecutionStart",ActionExecutionArgs:"ActionExecutionArgs",ActionExecutionEnd:"ActionExecutionEnd",ActionExecutionResult:"ActionExecutionResult",AgentStateMessage:"AgentStateMessage",MetaEvent:"MetaEvent",RunStarted:"RunStarted",RunFinished:"RunFinished",RunError:"RunError",NodeStarted:"NodeStarted",NodeFinished:"NodeFinished"},$R=t=>{if(typeof t=="string")return t;if(!Array.isArray(t))return;let e=t.filter(n=>n.type==="text").map(n=>n.text).filter(n=>n.length>0);if(e.length!==0)return e.join(`
`)};function eE(t,e){return Nm(e)&&jo(`[ag-ui][legacy] The result of tool call '${t}' carries content parts the legacy protocol cannot represent; only its text parts are bridged and the rest is dropped.`),Sr(e)}var jo=t=>{typeof process<"u"&&process.env!==void 0&&process.env.SUPPRESS_TRANSFORMATION_WARNINGS||console.warn(t)},UR=(t,e,n)=>r=>{let o={},i=!0,s=!0,a="",l=null,d=null,c=[],h={},p=!1,m=u=>{typeof u=="object"&&u&&("messages"in u&&delete u.messages,o=u)};return r.pipe(at(u=>{switch(u.type){case y.TEXT_MESSAGE_START:{let v=u;return[{type:Qe.TextMessageStart,messageId:v.messageId,role:v.role}]}case y.TEXT_MESSAGE_CONTENT:{let v=u;return[{type:Qe.TextMessageContent,messageId:v.messageId,content:v.delta}]}case y.TEXT_MESSAGE_END:{let v=u;return[{type:Qe.TextMessageEnd,messageId:v.messageId}]}case y.TOOL_CALL_START:{let v=u;return c.push({id:v.toolCallId,type:"function",function:{name:v.toolCallName,arguments:""}}),s=!0,h[v.toolCallId]=v.toolCallName,[{type:Qe.ActionExecutionStart,actionExecutionId:v.toolCallId,actionName:v.toolCallName,parentMessageId:v.parentMessageId}]}case y.TOOL_CALL_ARGS:{let v=u,E=c.find(T=>T.id===v.toolCallId);if(!E)return jo(`[ag-ui][legacy] TOOL_CALL_ARGS: No tool call found with ID '${v.toolCallId}'`),[];E.function.arguments+=v.delta;let x=!1;if(d){let T=d.find(O=>O.tool==E.function.name);if(T)try{let O=JSON.parse(_s(E.function.arguments));T.tool_argument&&T.tool_argument in O?(m({...o,[T.state_key]:O[T.tool_argument]}),x=!0):T.tool_argument||(m({...o,[T.state_key]:O}),x=!0)}catch{}}return[{type:Qe.ActionExecutionArgs,actionExecutionId:v.toolCallId,args:v.delta},...x?[{type:Qe.AgentStateMessage,threadId:t,agentName:n,nodeName:a,runId:e,running:i,role:"assistant",state:JSON.stringify(o),active:s}]:[]]}case y.TOOL_CALL_END:{let v=u;return[{type:Qe.ActionExecutionEnd,actionExecutionId:v.toolCallId}]}case y.TOOL_CALL_RESULT:{let v=u,E=h[v.toolCallId];return(E===void 0||E==="")&&jo(`[ag-ui][legacy] No usable tool name was seen for tool call '${v.toolCallId}' (${E===void 0?"no TOOL_CALL_START reached this bridge":"its TOOL_CALL_START carried an empty toolCallName"}), so its result is being bridged with the fabricated action name "unknown". Downstream consumers route on that name.`),[{type:Qe.ActionExecutionResult,actionExecutionId:v.toolCallId,result:eE(v.toolCallId,v.content),actionName:E||"unknown"}]}case y.RAW:return p||(p=!0,jo("[ag-ui][legacy] Dropping RAW events: the legacy runtime protocol has no equivalent, so the provider payloads they carry do not reach the legacy stream. Reported once per stream.")),[];case y.CUSTOM:{let v=u;switch(v.name){case"Exit":i=!1;break;case"PredictState":d=v.value;break}return[{type:Qe.MetaEvent,name:v.name,value:v.value}]}case y.STATE_SNAPSHOT:return m(u.snapshot),[{type:Qe.AgentStateMessage,threadId:t,agentName:n,nodeName:a,runId:e,running:i,role:"assistant",state:JSON.stringify(o),active:s}];case y.STATE_DELTA:{let v=u,E;try{E=Xi.applyPatch(o,v.delta,!0,!1).newDocument}catch(x){let T=x instanceof Error?x.message:String(x);return jo(`[ag-ui][legacy] Failed to apply state patch:
Current state: ${JSON.stringify(o,null,2)}
Patch operations: ${JSON.stringify(v.delta,null,2)}
Error: ${T}`),[]}return m(E),[{type:Qe.AgentStateMessage,threadId:t,agentName:n,nodeName:a,runId:e,running:i,role:"assistant",state:JSON.stringify(o),active:s}]}case y.MESSAGES_SNAPSHOT:return l=u.messages,[{type:Qe.AgentStateMessage,threadId:t,agentName:n,nodeName:a,runId:e,running:i,role:"assistant",state:JSON.stringify({...o,...l?{messages:l}:{}}),active:!0}];case y.RUN_STARTED:return[];case y.RUN_FINISHED:{if(l&&(o.messages=l),Object.keys(o).length===0)return[];let v=null;if(l)try{v=HR(l)}catch(E){return[{type:Qe.RunError,message:E.message}]}return[{type:Qe.AgentStateMessage,threadId:t,agentName:n,nodeName:a,runId:e,running:i,role:"assistant",state:JSON.stringify({...o,...v?{messages:v}:{}}),active:!1}]}case y.RUN_ERROR:{let v=u;return[{type:Qe.RunError,message:v.message,code:v.code}]}case y.STEP_STARTED:return a=u.stepName,c=[],d=null,[{type:Qe.AgentStateMessage,threadId:t,agentName:n,nodeName:a,runId:e,running:i,role:"assistant",state:JSON.stringify(o),active:!0}];case y.STEP_FINISHED:return c=[],d=null,[{type:Qe.AgentStateMessage,threadId:t,agentName:n,nodeName:a,runId:e,running:i,role:"assistant",state:JSON.stringify(o),active:!1}];default:return[]}}))};function HR(t){let e=[];for(let n of t)if(n.role==="assistant"||n.role==="user"||n.role==="system"){let r=$R(n.content);if(r){let o={id:n.id,role:n.role,content:r};e.push(o)}if(n.role==="assistant"&&n.toolCalls&&n.toolCalls.length>0)for(let o of n.toolCalls){let i;try{i=JSON.parse(o.function.arguments)}catch(a){throw Error(`Failed to parse arguments for tool call '${o.id}' (${o.function.name}): ${a.message}`)}let s={id:o.id,name:o.function.name,arguments:i,parentMessageId:n.id};e.push(s)}}else if(n.role==="tool"){let r="unknown";for(let i of t)if(i.role==="assistant"&&i.toolCalls?.length){for(let s of i.toolCalls)if(s.id===n.toolCallId){r=s.function.name;break}}let o={id:n.id,result:eE(n.toolCallId,n.content),actionExecutionId:n.toolCallId,actionName:r};e.push(o)}return e}var FR=t=>t.kind==="tool"?t.fields.toolCallId:t.fields.messageId,GR=t=>t==="tool"?"toolCallId":"messageId",$a=(t,e,n,r,o)=>{if(r!==void 0&&r!==o)throw Error(`Cannot continue ${t} '${e}': chunk ${n} '${r}' does not match the open stream's ${n} ${o===void 0?"(absent)":`'${o}'`}.`)},Fa=(t,e)=>e.metadata===void 0?t:{...t,metadata:e.metadata},Ah=(t,e)=>{let n=Fa(t,e);return e.rawEvent===void 0?n:{...n,rawEvent:e.rawEvent}},Bh=t=>new Set(Object.keys(t.shape)),BR=Bh(eh),VR=Bh(th),jR=Bh(rh),Rh=(t,e)=>{let n;for(let r of Object.keys(t))e.has(r)||((n??={})[r]=t[r]);return n},ZR=t=>{typeof process<"u"&&process.env!==void 0&&process.env.SUPPRESS_TRANSFORMATION_WARNINGS||console.warn(`[ag-ui][transform] ${t} Set SUPPRESS_TRANSFORMATION_WARNINGS=true to silence.`)},Ih=(t,e,n,r)=>{if(e===void 0||n||t.length===0)return;let o=t[t.length-1],i=Object.keys(e).filter(s=>Object.prototype.hasOwnProperty.call(o,s));i.length>0&&ZR(`A ${r} carried ${i.map(s=>`'${s}'`).join(", ")}, which the synthesized ${String(o.type)} already describes. The synthesized value is kept and the chunk's is dropped \u2014 this stage does not judge a described field, so the producer's value cannot be substituted for its own.`),t[t.length-1]={...e,...o}},Ga=t=>e=>{let n=Kn(t),r=new Map,o=l=>{let d=r.get(l);if(!d)return[];switch(r.delete(l),d.kind){case"text":{let c={type:y.TEXT_MESSAGE_END,messageId:d.fields.messageId,...d.fields.subagentRunId!==void 0&&{subagentRunId:d.fields.subagentRunId}};return n?.event("TRANSFORM","TEXT_MESSAGE_END",c,{messageId:c.messageId}),[c]}case"tool":{let c={type:y.TOOL_CALL_END,toolCallId:d.fields.toolCallId,...d.fields.subagentRunId!==void 0&&{subagentRunId:d.fields.subagentRunId}};return n?.event("TRANSFORM","TOOL_CALL_END",c,{toolCallId:c.toolCallId}),[c]}case"reasoning":{let c={type:y.REASONING_MESSAGE_END,messageId:d.fields.messageId,...d.fields.subagentRunId!==void 0&&{subagentRunId:d.fields.subagentRunId}};return n?.event("TRANSFORM","REASONING_MESSAGE_END",c,{messageId:c.messageId}),[c]}}},i=()=>[...r.keys()].flatMap(l=>o(l)),s=(l,d)=>{for(let[c,h]of r)if(h.kind===l&&FR(h)===d)return{owner:c}},a=(l,d,c,h,p)=>{if(d!==void 0){let u=s(l,d);if(u){if(c!==void 0&&c!==u.owner)throw Error(`Cannot continue ${p} '${d}': chunk subagentRunId '${c}' does not match the open stream's subagent '${u.owner??"(the parent agent)"}'.`);return u.owner}return c}if(c!==void 0)return c;if(r.get(void 0)?.kind===l)return;let m=[...r.entries()].filter(([,u])=>u.kind===l);if(m.length===1)return m[0][0];if(m.length>1)throw Error(`Ambiguous ${h}: it carries neither a ${GR(l)} nor a subagentRunId, but ${m.length} lanes have an open ${p}. Attribute the chunk to the subagent it belongs to.`)};return e.pipe(at(l=>{switch(l.type){case y.TEXT_MESSAGE_START:case y.TEXT_MESSAGE_CONTENT:case y.TEXT_MESSAGE_END:case y.TOOL_CALL_START:case y.TOOL_CALL_ARGS:case y.TOOL_CALL_END:case y.TOOL_CALL_RESULT:case y.STATE_SNAPSHOT:case y.STATE_DELTA:case y.CUSTOM:case y.STEP_STARTED:case y.STEP_FINISHED:case y.REASONING_START:case y.REASONING_MESSAGE_START:case y.REASONING_MESSAGE_CONTENT:case y.REASONING_MESSAGE_END:case y.REASONING_END:return[...o(l.subagentRunId??void 0),l];case y.RUN_STARTED:case y.RUN_FINISHED:case y.RUN_ERROR:case y.MESSAGES_SNAPSHOT:return[...i(),l];case y.RAW:case y.ACTIVITY_SNAPSHOT:case y.ACTIVITY_DELTA:case y.REASONING_ENCRYPTED_VALUE:case y.SUBAGENT_STARTED:return[l];case y.SUBAGENT_FINISHED:case y.SUBAGENT_ERROR:{let d=l.subagentRunId;return d==null?[l]:[...o(d),l]}case y.TEXT_MESSAGE_CHUNK:{let d=l,c=Rh(l,BR),h=a("text",d.messageId,d.subagentRunId??void 0,"TEXT_MESSAGE_CHUNK","text message"),p=r.get(h),m=[],u=!1,v;if(p?.kind==="text"&&(d.messageId===void 0||d.messageId===p.fields.messageId))$a("text message",p.fields.messageId,"role",d.role,p.fields.role),$a("text message",p.fields.messageId,"name",d.name,p.fields.name),v=p.fields;else{if(m.push(...o(h)),d.messageId===void 0)throw Error("First TEXT_MESSAGE_CHUNK must have a messageId");v={messageId:d.messageId,role:d.role===void 0?"assistant":d.role,name:d.name,subagentRunId:d.subagentRunId},r.set(h,{kind:"text",fields:v});let E=Fa({type:y.TEXT_MESSAGE_START,messageId:d.messageId,role:v.role,...d.name!==void 0&&{name:d.name},...d.subagentRunId!==void 0&&{subagentRunId:d.subagentRunId}},d);m.push(E),n?.event("TRANSFORM","TEXT_MESSAGE_START",E,{messageId:d.messageId})}if(d.delta!==void 0||d.rawEvent!==void 0){let E=d.subagentRunId===void 0?v.subagentRunId:d.subagentRunId,x=Ah({...c,type:y.TEXT_MESSAGE_CONTENT,messageId:v.messageId,delta:d.delta===void 0?"":d.delta,...E!==void 0&&{subagentRunId:E}},d);m.push(x),u=!0,n?.event("TRANSFORM","TEXT_MESSAGE_CONTENT",x,{messageId:v.messageId})}if(m.length===0&&(d.metadata!==void 0||d.rawEvent!==void 0||d.subagentRunId===null||c!==void 0)){let E=d.subagentRunId===void 0?v.subagentRunId:d.subagentRunId;m.push({...c,type:y.TEXT_MESSAGE_CONTENT,messageId:v.messageId,delta:"",...d.metadata!==void 0&&{metadata:d.metadata},...d.rawEvent!==void 0&&{rawEvent:d.rawEvent},...E!==void 0&&{subagentRunId:E}}),u=!0}return Ih(m,c,u,"TEXT_MESSAGE_CHUNK"),m}case y.TOOL_CALL_CHUNK:{let d=l,c=Rh(l,VR),h=a("tool",d.toolCallId,d.subagentRunId??void 0,"TOOL_CALL_CHUNK","tool call"),p=r.get(h),m=[],u=!1,v;if(p?.kind==="tool"&&(d.toolCallId===void 0||d.toolCallId===p.fields.toolCallId))$a("tool call",p.fields.toolCallId,"toolCallName",d.toolCallName,p.fields.toolCallName),$a("tool call",p.fields.toolCallId,"parentMessageId",d.parentMessageId,p.fields.parentMessageId),v=p.fields;else{if(m.push(...o(h)),d.toolCallId===void 0)throw Error("First TOOL_CALL_CHUNK must have a toolCallId");if(d.toolCallName===void 0)throw Error("First TOOL_CALL_CHUNK must have a toolCallName");v={toolCallId:d.toolCallId,toolCallName:d.toolCallName,parentMessageId:d.parentMessageId,subagentRunId:d.subagentRunId},r.set(h,{kind:"tool",fields:v});let E=Fa({type:y.TOOL_CALL_START,toolCallId:d.toolCallId,toolCallName:d.toolCallName,...d.parentMessageId!==void 0&&{parentMessageId:d.parentMessageId},...d.subagentRunId!==void 0&&{subagentRunId:d.subagentRunId}},d);m.push(E),n?.event("TRANSFORM","TOOL_CALL_START",E,{toolCallId:d.toolCallId,toolCallName:d.toolCallName})}if(d.delta!==void 0||d.rawEvent!==void 0){let E=d.subagentRunId===void 0?v.subagentRunId:d.subagentRunId,x=Ah({...c,type:y.TOOL_CALL_ARGS,toolCallId:v.toolCallId,delta:d.delta===void 0?"":d.delta,...E!==void 0&&{subagentRunId:E}},d);m.push(x),u=!0,n?.event("TRANSFORM","TOOL_CALL_ARGS",x,{toolCallId:v.toolCallId})}if(m.length===0&&(d.metadata!==void 0||d.rawEvent!==void 0||d.subagentRunId===null||c!==void 0)){let E=d.subagentRunId===void 0?v.subagentRunId:d.subagentRunId;m.push({...c,type:y.TOOL_CALL_ARGS,toolCallId:v.toolCallId,delta:"",...d.metadata!==void 0&&{metadata:d.metadata},...d.rawEvent!==void 0&&{rawEvent:d.rawEvent},...E!==void 0&&{subagentRunId:E}}),u=!0}return Ih(m,c,u,"TOOL_CALL_CHUNK"),m}case y.REASONING_MESSAGE_CHUNK:{let d=l,c=Rh(l,jR),h=a("reasoning",d.messageId,d.subagentRunId??void 0,"REASONING_MESSAGE_CHUNK","reasoning message"),p=r.get(h),m=[],u=!1,v;if(p?.kind==="reasoning"&&(d.messageId===void 0||d.messageId===p.fields.messageId))v=p.fields;else{if(m.push(...o(h)),d.messageId===void 0)throw Error("First REASONING_MESSAGE_CHUNK must have a messageId");v={messageId:d.messageId,subagentRunId:d.subagentRunId},r.set(h,{kind:"reasoning",fields:v});let E=Fa({type:y.REASONING_MESSAGE_START,messageId:d.messageId,role:"reasoning",...d.subagentRunId!==void 0&&{subagentRunId:d.subagentRunId}},d);m.push(E),n?.event("TRANSFORM","REASONING_MESSAGE_START",E,{messageId:d.messageId})}if(d.delta!==void 0||d.rawEvent!==void 0){let E=d.subagentRunId===void 0?v.subagentRunId:d.subagentRunId,x=Ah({...c,type:y.REASONING_MESSAGE_CONTENT,messageId:v.messageId,delta:d.delta===void 0?"":d.delta,...E!==void 0&&{subagentRunId:E}},d);m.push(x),u=!0,n?.event("TRANSFORM","REASONING_MESSAGE_CONTENT",x,{messageId:v.messageId})}if(m.length===0&&(d.metadata!==void 0||d.rawEvent!==void 0||d.subagentRunId===null||c!==void 0)){let E=d.subagentRunId===void 0?v.subagentRunId:d.subagentRunId;m.push({...c,type:y.REASONING_MESSAGE_CONTENT,messageId:v.messageId,delta:"",...d.metadata!==void 0&&{metadata:d.metadata},...d.rawEvent!==void 0&&{rawEvent:d.rawEvent},...E!==void 0&&{subagentRunId:E}}),u=!0}return Ih(m,c,u,"REASONING_MESSAGE_CHUNK"),m}}return l.type,[l]}),zn(()=>{i()}))},WR=1e6;function qo(t){if(t===void 0)return WR;if(t===1/0||Number.isSafeInteger(t)&&t>0)return t;throw new K(`Invalid enforcement entry budget ${String(t)}: expected a positive integer, or Infinity to disable it.`)}var qR=class extends K{constructor(t,e){super(`Enforcement limit exceeded at '${e||"(root)"}': the payload has more than ${t} entries to validate. If it is legitimate, raise or disable the limit (maxEnforcedEntries on the agent, or maxEntries in the enforcement options).`),this.name="AGUIEnforcementLimitError",this.limit=t,this.path=e}},Br=Symbol("agui.strip.drop");function Ch(t,e,n){if(t.used+=e,t.used>t.max)throw new qR(t.max,n)}function Zo(t){let e=t;for(;;){if(e instanceof Fs||e instanceof Yu||e instanceof Ku||e instanceof Qu||e instanceof Xu){e=e.unwrap();continue}if(e instanceof Ju){e=e.def.in;continue}if(e instanceof ty){e=e.def.getter();continue}return e}}function YR(t){let e=t.def;return typeof e?.discriminator=="string"?e.discriminator:void 0}function tE(t){let e=t,n=Array.isArray(e.def?.values)?e.def.values:e.values?Array.from(e.values):void 0;return n&&n.length===1?n[0]:e.value}function KR(t){let e=Zo(t);return e instanceof qu?tE(e):void 0}function Vr(t,e,n,r,o){let i=Zo(e);if(i instanceof Ur){if(typeof t!="object"||!t||Array.isArray(t))return t;let s=i.shape,a=t,l={},d=i.meta()?.specOpen===!0,c=Object.keys(a);Ch(o,c.length,n);for(let h of c){let p=Object.prototype.hasOwnProperty.call(s,h)?s[h]:void 0;if(p===void 0){if(d){l[h]=a[h];continue}r.push(`${n}/${h}`);continue}let m=r.length,u=Vr(a[h],p,`${n}/${h}`,r,o);if(u===Br){if(r.length=m,p.safeParse(void 0).success){r.push(`${n}/${h}`);continue}return Br}l[h]=u}return l}if(i instanceof Us){if(!Array.isArray(t))return t;Ch(o,t.length,n);let s=i.element,a=[];return t.forEach((l,d)=>{let c=r.length,h=Vr(l,s,`${n}/${d}`,r,o);if(h===Br){r.length=c,r.push(`${n}/${d}`);return}a.push(h)}),a}if(i instanceof Qb){if(typeof t!="object"||!t||Array.isArray(t))return t;let s=i.def.valueType,a=t,l={},d=Object.keys(a);Ch(o,d.length,n);for(let c of d){let h=r.length,p=Vr(a[c],s,`${n}/${c}`,r,o);if(p===Br){r.length=h,r.push(`${n}/${c}`);continue}l[c]=p}return l}if(i instanceof Hs){let s=i.options,a=YR(i);if(a!==void 0){if(typeof t!="object"||!t||Array.isArray(t))return t;let c=t[a];for(let h of s){let p=Zo(h);if(!(p instanceof Ur))continue;let m=p.shape;if(KR(m[a])===c)return Vr(t,h,n,r,o)}return Br}let l=s.filter(c=>Zo(c)instanceof Ur),d=typeof t=="object"&&!!t&&!Array.isArray(t);if(l.length>1&&d)return t;for(let c of s){let h=Zo(c);if(h instanceof Us&&Array.isArray(t)||h instanceof Ur&&d)return Vr(t,c,n,r,o)}return t}return t}function nE(t,e,n){let r=[],o=Vr(t,e,"",r,{used:0,max:qo(n?.maxEntries)});if(o===Br)throw Error("Internal error: the stripper found the whole value unrecognisable, which the schemas are not supposed to allow \u2014 schema/stripper mismatch.");return{value:o,stripped:r}}var XR=new Set(Object.values(y));function JR(t){return XR.has(t.type)}var QR=new Map(oh.options.map(t=>{let e=t.shape;return[String(tE(e.type)),t]})),eI=()=>typeof process<"u"&&process.env!==void 0&&!!process.env.SUPPRESS_TRANSFORMATION_WARNINGS;function Uh(t){eI()||console.warn(`[ag-ui][enforce] ${t}`)}var Nh=(t,e)=>{let n=qo(e?.maxEntries);return r=>{let o=Kn(t);return r.pipe(at(i=>{if(!JR(i)){Uh(`Dropping unrecognised event '${String(i.type)}': no middleware translated it and the protocol does not describe it.`);let d={type:i.type};return o?.event("ENFORCE","Unrecognised event dropped:",d,d),Pn}let s=QR.get(i.type);if(s===void 0)throw Error(`No validator for recognised event type '${String(i.type)}'`);let{value:a,stripped:l}=nE(i,s,{maxEntries:n});for(let d of l)Uh(`Removed unrecognised material at '${d}' on ${String(i.type)}. Nothing handled it; see the repo-root DEPRECATIONS.md if it is a retired shape.`);return ge(s.parse(a))}))}};function tI(t,e){let n=qo(e?.maxEntries),{value:r,stripped:o}=nE(Wc(t,"RunAgentInput"),Bs,{maxEntries:n});for(let i of o)Uh(`Removed unrecognised material at '${i}' from the outgoing input.`);return Bs.parse(r)}var Yo=class{runNext(t,e){return e.run(t).pipe(Ga(!1))}runNextWithState(t,e){let n=te(t.messages||[]),r=te(t.state===void 0?{}:t.state),o=new is;return Qw(t,o,e,[]).subscribe({next:i=>{i.messages!==void 0&&(n=i.messages),i.state!==void 0&&(r=i.state)},error:()=>{}}),this.runNext(t,e).pipe(ws(async i=>(o.next(i),await new Promise(s=>setTimeout(s,0)),{event:i,messages:te(n),state:te(r)})))}},nI=class extends Yo{constructor(t){super(),this.fn=t}run(t,e){return this.fn(t,e)}};function rI(t){return t.startsWith("image/")?"image":t.startsWith("audio/")?"audio":t.startsWith("video/")?"video":"document"}function oI(t){return typeof t=="object"&&!!t&&"type"in t&&t.type==="binary"&&"mimeType"in t&&typeof t.mimeType=="string"}function iI(t){let e=rI(t.mimeType);return t.data?{type:e,source:{type:"data",value:t.data,mimeType:t.mimeType},...t.filename?{metadata:{filename:t.filename}}:{}}:t.url?{type:e,source:{type:"url",value:t.url,mimeType:t.mimeType},...t.filename?{metadata:{filename:t.filename}}:{}}:((typeof process>"u"||process.env===void 0||!process.env.SUPPRESS_TRANSFORMATION_WARNINGS)&&console.warn(`[ag-ui][compat] A binary content part carries only an id ('${t.id??""}') and cannot be converted to a modern media part; a 1.0 peer will not accept it. Provide data or a url. See the repo-root DEPRECATIONS.md.`),t)}function sI(t,e,n){if(typeof t!="object"||!t||!("type"in t)||t.type!==e.type||!("source"in t))return!1;let r=t.source;return typeof r!="object"||!r||!("type"in r)||r.type!==e.source.type||!("value"in r)||r.value!==e.source.value||!("mimeType"in r)||r.mimeType!==e.source.mimeType?!1:!n||"metadata"in t&&typeof t.metadata=="object"&&t.metadata!==null&&"filename"in t.metadata&&t.metadata.filename===n}function $w(t){let e=t.content;if(!Array.isArray(e))return t;let n=e.flatMap(r=>{if(oI(r)){let o=iI(r);return o.type!=="binary"&&e.some(i=>sI(i,o,r.filename))?[]:[o]}return[r]});return{...t,content:n}}var Oh="THINKING_START",Mh="THINKING_END",Uw="THINKING_TEXT_MESSAGE_START",Ph="THINKING_TEXT_MESSAGE_CONTENT",Lh="THINKING_TEXT_MESSAGE_END";function Vh(t){return typeof t=="object"&&!!t&&!Array.isArray(t)}var pn={event:["rawEvent","subagentRunId"],[y.RUN_STARTED]:["parentRunId","input"],[y.RUN_FINISHED]:["result","outcome"],[y.RUN_ERROR]:["usage"],[y.SUBAGENT_FINISHED]:["result"],[y.TOOL_CALL_START]:["parentMessageId"],[y.TOOL_CALL_CHUNK]:["parentMessageId"],[y.TOOL_CALL_RESULT]:["role"],"RUN_FINISHED.outcome":["pendingToolCallIds"],"RUN_FINISHED.usage[]":["provider","reasoningTokens","cachedInputTokens","cacheWriteInputTokens"],RunAgentInput:["forwardedProps"],Tool:["parameters"],ResumeEntry:["payload"],"input content":["metadata"]},aI=new Map(Object.entries(pn).filter(([t])=>Object.values(y).includes(t))),lI=t=>Va(t,"an absent field");function hn(t,e,n,r){if(!Vh(t))return t;let o;for(let i of e)t[i]===null&&(r(n===void 0?`${i}: null`:`${n}.${i}: null`),o??={...t},delete o[i]);return o??t}function Wo(t,e,n){if(!Vh(t)||!Array.isArray(t[e]))return t;let r=t[e],o=r.map(n);return o.some((i,s)=>i!==r[s])?{...t,[e]:o}:t}function rE(t,e){return Wo(t,"content",n=>{if(!Vh(n))return n;switch(n.type){case"image":case"audio":case"video":case"document":return hn(n,pn["input content"],`${n.type} input content`,e);default:return n}})}function dI(t,e=lI){let n=hn(t,pn.RunAgentInput,"RunAgentInput",e);return n=Wo(n,"tools",r=>hn(r,pn.Tool,"Tool",e)),n=Wo(n,"resume",r=>hn(r,pn.ResumeEntry,"ResumeEntry",e)),Wo(n,"messages",r=>rE(r,e))}var Hh=class extends Yo{constructor(...t){super(...t),this.currentReasoningId=null,this.currentMessageId=null,this.nullsNoticedThisRun=new Set,this.noticeNullOncePerRun=e=>{this.nullsNoticedThisRun.has(e)||(this.nullsNoticedThisRun.add(e),Va(e,"an absent field"))}}warn(t,e){Va(t,e)}mintedContinuationId(t,e){if(e!==null)return e;let n=Ie();return this.warnAside(`Minting a messageId ('${n}') for ${t}: no THINKING opener preceded it, so there was no id to continue. The id is this client's invention, not the producer's, and verification will reject the translated event for naming something nothing opened.`),n}warnAside(t){typeof process<"u"&&process.env!==void 0&&process.env.SUPPRESS_TRANSFORMATION_WARNINGS||console.warn(`[ag-ui][compat] ${t} Set SUPPRESS_TRANSFORMATION_WARNINGS=true to silence.`)}run(t,e){return this.currentReasoningId=null,this.currentMessageId=null,this.nullsNoticedThisRun.clear(),t.messages=t.messages.map($w),e.run(t).pipe(Dt(n=>this.transformEvent(n)))}transformEvent(t){let e=this.noticeNullOncePerRun;t.type===y.RUN_STARTED&&this.nullsNoticedThisRun.clear(),t=hn(t,pn.event,void 0,e);let n=aI.get(t.type);switch(n&&(t=hn(t,n,t.type,e)),t.type){case Oh:{this.currentReasoningId=Ie();let{title:r,...o}=t;return this.warn(Oh,y.REASONING_START),r!==void 0&&this.warnAside(`Dropping ${Oh}.title ${JSON.stringify(r)}: ${y.REASONING_START} has no title field, so the span's label cannot be carried and nothing downstream can recover it.`),{...o,type:y.REASONING_START,messageId:this.currentReasoningId}}case Uw:return this.currentMessageId=Ie(),this.warn(Uw,y.REASONING_MESSAGE_START),{...t,type:y.REASONING_MESSAGE_START,messageId:this.currentMessageId,role:"reasoning"};case Ph:{let{delta:r,...o}=t;return this.warn(Ph,y.REASONING_MESSAGE_CONTENT),{...o,type:y.REASONING_MESSAGE_CONTENT,messageId:this.mintedContinuationId(Ph,this.currentMessageId),delta:r}}case Lh:{let r=this.mintedContinuationId(Lh,this.currentMessageId);return this.currentMessageId=null,this.warn(Lh,y.REASONING_MESSAGE_END),{...t,type:y.REASONING_MESSAGE_END,messageId:r}}case Mh:{let r=this.mintedContinuationId(Mh,this.currentReasoningId);return this.currentReasoningId=null,this.warn(Mh,y.REASONING_END),{...t,type:y.REASONING_END,messageId:r}}case y.RUN_FINISHED:{let r=t,o=hn(r.outcome,pn["RUN_FINISHED.outcome"],"RUN_FINISHED.outcome",e);return Wo(o===r.outcome?r:{...r,outcome:o},"usage",i=>hn(i,pn["RUN_FINISHED.usage[]"],"RUN_FINISHED.usage[]",e))}case y.MESSAGES_SNAPSHOT:{let r=t;return Array.isArray(r.messages)?{...r,messages:r.messages.map(o=>this.upgradeInboundMessage(o))}:t}case y.RUN_STARTED:{let r=dI(t.input,e),o=r===t.input?t:{...t,input:r},i=o;return!i.input||!Array.isArray(i.input.messages)?o:{...i,input:{...i.input,messages:i.input.messages.map(s=>this.upgradeInboundMessage(s))}}}default:return t}}upgradeInboundMessage(t){t=rE(t,this.noticeNullOncePerRun);let e=t.content;return!Array.isArray(e)||!e.some(n=>typeof n=="object"&&!!n&&n.type==="binary")?t:(this.warn("binary input content","the modern media content parts"),$w(t))}},cI=()=>t=>Ln(()=>{let e=new Hh;return t.pipe(Dt(n=>e.transformEvent(n)))});function uI(t,e=new Date){return t.expiresAt===void 0?!1:new Date(t.expiresAt)<=e}function jh(t,e){let n=new Set(t.map(s=>s.id)),r=new Set(Object.keys(e)),o=[...n].filter(s=>!r.has(s));if(o.length>0)throw Error(`buildResumeArray: missing responses for open interrupts: ${o.join(", ")}`);let i=[...r].filter(s=>!n.has(s));if(i.length>0)throw Error(`buildResumeArray: responses reference unknown interrupt ids: ${i.join(", ")}`);return t.map(s=>{let a=e[s.id],l={interruptId:s.id,status:a.status};return a.status==="resolved"&&a.payload!==void 0&&(l.payload=a.payload),a.metadata!==void 0&&(l.metadata=a.metadata),l})}function oE(){return typeof process<"u"&&process.env!==void 0&&!!process.env.SUPPRESS_TRANSFORMATION_WARNINGS}function hI(t){oE()||console.warn(`[ag-ui][compat] Flattening message content for a <=0.0.39 peer DROPS non-text parts (${t.join(", ")}). The peer cannot receive them; upgrade it to keep media content. See the repo-root DEPRECATIONS.md.`)}function pI(t){oE()||console.warn(`[ag-ui][compat] Not flattening message content for a <=0.0.39 peer: ${t} content part(s) claim type "text" but carry a malformed 'text' value. That is a defect in the message, not media the peer cannot represent, and a downgrade must not repair it \u2014 the content is passed on unchanged so the outgoing enforcement boundary reports it. See the repo-root DEPRECATIONS.md.`)}function fI(t){let e=t.content;if(Array.isArray(e)){let n=a=>typeof a=="object"&&!!a&&"type"in a&&a.type==="text",r=a=>n(a)&&typeof a.text=="string",o=e.filter(a=>n(a)&&!r(a));if(o.length>0)return pI(o.length),t;let i=e.filter(a=>!r(a)).map(a=>typeof a=="object"&&a&&"type"in a?String(a.type):typeof a);i.length>0&&hI(i);let s=e.filter(r).map(a=>a.text).join("");return{...t,content:s}}return typeof e=="string"?t:e===void 0?{...t,content:""}:t}var mI=class extends Yo{run(t,e){let{parentRunId:n,...r}=t,o={...r,messages:r.messages.map(fI)};return this.runNext(o,e)}},Hw="THINKING_START",Fw="THINKING_END",Gw="THINKING_TEXT_MESSAGE_START",Bw="THINKING_TEXT_MESSAGE_CONTENT",Vw="THINKING_TEXT_MESSAGE_END",gI=class extends Yo{constructor(...t){super(...t),this.currentReasoningId=null,this.currentMessageId=null}warnAboutTransformation(t,e){typeof process<"u"&&process.env!==void 0&&process.env.SUPPRESS_TRANSFORMATION_WARNINGS||console.warn(`AG-UI is converting ${t} to ${e}. To remove this warning, upgrade your AG-UI integration package (e.g. @ag-ui/langgraph). To surpress it, set SUPPRESS_TRANSFORMATION_WARNINGS=true in your .env file.`)}run(t,e){return this.currentReasoningId=null,this.currentMessageId=null,this.runNext(t,e).pipe(Dt(n=>this.transformEvent(n)))}transformEvent(t){switch(t.type){case Hw:{this.currentReasoningId=Ie();let{title:e,...n}=t;return this.warnAboutTransformation(Hw,y.REASONING_START),{...n,type:y.REASONING_START,messageId:this.currentReasoningId}}case Gw:return this.currentMessageId=Ie(),this.warnAboutTransformation(Gw,y.REASONING_MESSAGE_START),{...t,type:y.REASONING_MESSAGE_START,messageId:this.currentMessageId,role:"reasoning"};case Bw:{let{delta:e,...n}=t;return this.warnAboutTransformation(Bw,y.REASONING_MESSAGE_CONTENT),{...n,type:y.REASONING_MESSAGE_CONTENT,messageId:this.currentMessageId??Ie(),delta:e}}case Vw:{let e=this.currentMessageId??Ie();return this.warnAboutTransformation(Vw,y.REASONING_MESSAGE_END),{...t,type:y.REASONING_MESSAGE_END,messageId:e}}case Fw:{let e=this.currentReasoningId??Ie();return this.warnAboutTransformation(Fw,y.REASONING_END),{...t,type:y.REASONING_END,messageId:e}}default:return t}}},jw="SUBAGENT_STARTED",Zw="SUBAGENT_FINISHED",Ww="SUBAGENT_ERROR";function Ba(t){if(t&&typeof t=="object"&&"subagentRunId"in t){let{subagentRunId:e,...n}=t;return n}return t}function qw(t){return t.map(e=>Ba(e))}var vI=class extends Yo{warnDroppedLifecycleEvent(t){typeof process<"u"&&process.env!==void 0&&process.env.SUPPRESS_TRANSFORMATION_WARNINGS||console.warn(`AG-UI is dropping ${t} because the target agent predates subagent support. To remove this warning, upgrade your AG-UI integration package. To suppress it, set SUPPRESS_TRANSFORMATION_WARNINGS=true in your .env file.`)}run(t,e){let n={...t,messages:(t.messages??[]).map(r=>Ba(r))};return this.runNext(n,e).pipe(xs(r=>{let o=r.type;(o===jw||o===Zw||o===Ww)&&this.warnDroppedLifecycleEvent(o)}),au(r=>{let o=r.type;return o!==jw&&o!==Zw&&o!==Ww}),Dt(r=>{let o=Ba(r);if(o.type===y.MESSAGES_SNAPSHOT){let i=o;if(Array.isArray(i.messages))return{...i,messages:qw(i.messages)}}if(o.type===y.RUN_FINISHED){let i=o;if(i.outcome&&Array.isArray(i.outcome.interrupts))return{...i,outcome:{...i.outcome,interrupts:i.outcome.interrupts.map(s=>Ba(s))}}}if(o.type===y.RUN_STARTED){let i=o;if(i.input&&Array.isArray(i.input.messages))return{...i,input:{...i.input,messages:qw(i.input.messages)}}}return o}))}},Ua="1.0.4",Yw=!1,Kw=new WeakSet,bI=(t,e)=>/^\d+\.\d+$/.test(t)?Wn(t,e)>0?"newer":"not-newer":"uninterpretable",Xw=t=>{let e=t.protocolVersion;if(!(e===void 0||e===Cn))switch(bI(e,Cn)){case"uninterpretable":console.warn(`[ag-ui] The producer declared protocol version '${e}', which this client cannot interpret.`);return;case"newer":console.warn(`[ag-ui] The producer speaks protocol ${e}; this client speaks ${Cn}. Unrecognised material will be stripped with warnings.`);return;case"not-newer":return}},Zh=class iE{resolvePeerCeiling(e){if(this.resolvingPeerCeiling)return Ua;let n=Object.getOwnPropertyDescriptor(this,"maxVersion"),r=Object.getOwnPropertyDescriptor(this,"maxProtocolVersion"),o=Object.getPrototypeOf(this);for(;o&&o!==iE.prototype;)n??=Object.getOwnPropertyDescriptor(o,"maxVersion"),r??=Object.getOwnPropertyDescriptor(o,"maxProtocolVersion"),o=Object.getPrototypeOf(o);if(e==="maxVersion"&&n)return Ua;let i=e==="maxProtocolVersion"?n:r;if(!i)return Ua;this.resolvingPeerCeiling=!0;try{return i.get?i.get.call(this):i.value}finally{this.resolvingPeerCeiling=!1}}get maxProtocolVersion(){return this.resolvePeerCeiling("maxProtocolVersion")}get maxVersion(){return!this.resolvingPeerCeiling&&!Yw&&(Yw=!0,console.warn("[ag-ui] AbstractAgent.maxVersion is deprecated \u2014 use maxProtocolVersion. Same value; the new name says whose version it is and that it is a ceiling.")),this.resolvePeerCeiling("maxVersion")}get debug(){return this._debug}set debug(e){this._debug=Ha(e),this._debugLogger=Sh(this._debug)}get threadId(){return this._threadId??=sn()}set threadId(e){this._threadId=e}get maxEnforcedEntries(){return this._maxEnforcedEntries}set maxEnforcedEntries(e){this._maxEnforcedEntries=qo(e)}get debugLogger(){return this._debugLogger}set debugLogger(e){typeof e=="boolean"?this._debugLogger=e?Sh(Ha(!0)):void 0:this._debugLogger=e}resolvedCeilingDuringConstruction(){let e=this.maxProtocolVersion;if(typeof e!="string"||!Th(e))throw new K(`maxProtocolVersion resolved to ${JSON.stringify(e)} during construction, which is not a version this client can compare. A ceiling read from an instance field is not available yet \u2014 return a literal from the getter.`);return e}constructor({agentId:e,description:n,threadId:r,initialMessages:o,initialState:i,debug:s,maxEnforcedEntries:a}={}){this.subscribers=[],this.isRunning=!1,this.pendingInterrupts=[],this.middlewares=[],this.resolvingPeerCeiling=!1,this.agentId=e,this.description=n??"",this._threadId=r,this.messages=te(o??[]),this.state=te(i??{}),this._debug=Ha(s),this._debugLogger=Sh(this._debug),this._maxEnforcedEntries=qo(a);let l=this.resolvedCeilingDuringConstruction();Wn(l,"0.0.39")<=0&&this.middlewares.unshift(new mI),Wn(l,"0.0.45")<=0&&this.middlewares.unshift(new gI),Wn(l,"0.0.57")<=0&&this.middlewares.unshift(new vI)}subscribe(e){return this.subscribers.push(e),{unsubscribe:()=>{this.subscribers=this.subscribers.filter(n=>n!==e)}}}use(...e){let n=e.map(r=>typeof r=="function"?new nI(r):r);return this.middlewares.push(...n),this}async runAgent(e,n){try{this.isRunning=!0,this.agentId=this.agentId??sn();let r=this.prepareRunAgentInput(e);this.debugLogger?.lifecycle("LIFECYCLE","Run started:",{agentId:this.agentId,threadId:this.threadId});let o,i=new Set(this.messages.map(d=>d.id)),s=[{onRunStartedEvent:({event:d})=>Xw(d),onRunFinishedEvent:d=>{d.outcome==="success"&&(o=d.result)}},...this.subscribers,n??{}];Kw.add(r),await this.onInitialize(r,s),this.activeRunDetach$=new zt;let a;this.activeRunCompletionPromise=new Promise(d=>{a=d}),await ys(os(()=>[...this.middlewares,new Hh].reduceRight((d,c)=>({run:h=>c.run(h,d),get messages(){return d.messages},get state(){return d.state}}),this).run(r),Nh(this.debugLogger,{maxEntries:this.maxEnforcedEntries}),Ga(this.debugLogger),kh(this.debugLogger),d=>d.pipe(Es(this.activeRunDetach$)),d=>this.applyBeforeSourceError(r,d,s),Mr(d=>(this.debugLogger?.lifecycle("LIFECYCLE","Run errored:",{agentId:this.agentId,error:d instanceof Error?d.message:String(d)}),this.isRunning=!1,this.onError(r,d,s))),zn(()=>{this.debugLogger?.lifecycle("LIFECYCLE","Run finished:",{agentId:this.agentId,threadId:this.threadId}),this.isRunning=!1,this.onFinalize(r,s),a?.(),a=void 0,this.activeRunCompletionPromise=void 0,this.activeRunDetach$=void 0}))(ge(null)));let l=te(this.messages).filter(d=>!i.has(d.id));return{result:o,newMessages:l}}finally{this.isRunning=!1}}connect(e){throw new qc}async connectAgent(e,n){try{this.isRunning=!0,this.agentId=this.agentId??sn();let r=this.prepareRunAgentInput(e),o,i=new Set(this.messages.map(d=>d.id)),s=[{onRunStartedEvent:({event:d})=>Xw(d),onRunFinishedEvent:d=>{d.outcome==="success"&&(o=d.result)}},...this.subscribers,n??{}];await this.onInitialize(r,s),this.activeRunDetach$=new zt;let a;this.activeRunCompletionPromise=new Promise(d=>{a=d}),await ys(os(()=>Ln(()=>this.connect(r)),d=>Nh(this.debugLogger,{maxEntries:this.maxEnforcedEntries})(cI()(d)),Ga(this.debugLogger),kh(this.debugLogger),d=>d.pipe(Es(this.activeRunDetach$)),d=>this.applyBeforeSourceError(r,d,s),Mr(d=>(this.isRunning=!1,d instanceof qc?Pn:this.onError(r,d,s))),zn(()=>{this.isRunning=!1,this.onFinalize(r,s),a?.(),a=void 0,this.activeRunCompletionPromise=void 0,this.activeRunDetach$=void 0}))(ge(null)),{defaultValue:void 0});let l=te(this.messages).filter(d=>!i.has(d.id));return{result:o,newMessages:l}}finally{this.isRunning=!1}}abortRun(){}async detachActiveRun(){if(!this.activeRunDetach$)return;let e=this.activeRunCompletionPromise??Promise.resolve();this.activeRunDetach$.next(),this.activeRunDetach$?.complete(),await e}applyBeforeSourceError(e,n,r){return Ln(()=>{let o,i=n.pipe(Mr(s=>(o={error:s},Pn)));return this.processApplyEvents(e,this.apply(e,i,r),r).pipe(lu(Ln(()=>{let s=o;return s?j(()=>s.error):Pn})))})}apply(e,n,r){return Qw(e,n,this,r,this.debugLogger)}processApplyEvents(e,n,r){return n.pipe(xs(o=>{o.messages&&(this.messages=o.messages,r.forEach(i=>{i.onMessagesChanged?.({messages:this.messages,state:this.state,agent:this,input:e})})),o.state!==void 0&&(this.state=o.state,r.forEach(i=>{i.onStateChanged?.({state:this.state,messages:this.messages,agent:this,input:e})}))}))}prepareRunAgentInput(e){let n=te(this.messages);for(let o of n)o.subagentRunId===null&&delete o.subagentRunId;let r=$h(n.filter(o=>o.role!=="activity"));return{threadId:this.threadId,runId:e?.runId||sn(),...Wn(this.maxProtocolVersion,Ua)>=0&&{protocolVersion:Cn},tools:te(e?.tools??[]),context:te(e?.context??[]),forwardedProps:te(e?.forwardedProps??{}),state:te(this.state),messages:r,...e?.resume===void 0?{}:{resume:te(e.resume)}}}async onInitialize(e,n){if(Kw.has(e)&&this.pendingInterrupts.length>0){let o=new Set((e.resume??[]).map(s=>s.interruptId)),i=this.pendingInterrupts.map(s=>s.id).filter(s=>!o.has(s));if(i.length>0)throw new K(`Thread has ${i.length} pending interrupt(s) not addressed by resume: ${i.join(", ")}`);for(let s of this.pendingInterrupts)if(uI(s)&&(e.resume??[]).find(a=>a.interruptId===s.id)?.status!=="cancelled")throw new K(`Interrupt ${s.id} expired at ${s.expiresAt} and can no longer be answered. Cancel it to continue the thread.`)}let r=await le(n,this.messages,this.state,(o,i,s)=>o.onRunInitialized?.({messages:i,state:s,agent:this,input:e}));if(r.messages!==void 0||r.state!==void 0){if(r.messages){this.messages=r.messages;for(let o of r.messages)o.subagentRunId===null&&delete o.subagentRunId;e.messages=$h(r.messages.filter(o=>o.role!=="activity")),n.forEach(o=>{o.onMessagesChanged?.({messages:this.messages,state:this.state,agent:this,input:e})})}r.state!==void 0&&(this.state=r.state,e.state=r.state,n.forEach(o=>{o.onStateChanged?.({state:this.state,messages:this.messages,agent:this,input:e})}))}}onError(e,n,r){return Xt(le(r,this.messages,this.state,(o,i,s)=>o.onRunFailed?.({error:n,messages:i,state:s,agent:this,input:e}))).pipe(Dt(o=>{let i=o;if((i.messages!==void 0||i.state!==void 0)&&(i.messages!==void 0&&(this.messages=i.messages,r.forEach(s=>{s.onMessagesChanged?.({messages:this.messages,state:this.state,agent:this,input:e})})),i.state!==void 0&&(this.state=i.state,r.forEach(s=>{s.onStateChanged?.({state:this.state,messages:this.messages,agent:this,input:e})}))),i.stopPropagation!==!0){let s=String(n);if(!(n.name==="AbortError"||n.message==="Fetch is aborted"||n.message==="signal is aborted without reason"||n.message==="component unmounted"||s==="component unmounted"))throw console.error("Agent execution failed:",n),n}return{}}))}async onFinalize(e,n){let r=await le(n,this.messages,this.state,(o,i,s)=>o.onRunFinalized?.({messages:i,state:s,agent:this,input:e}));(r.messages!==void 0||r.state!==void 0)&&(r.messages!==void 0&&(this.messages=r.messages,n.forEach(o=>{o.onMessagesChanged?.({messages:this.messages,state:this.state,agent:this,input:e})})),r.state!==void 0&&(this.state=r.state,n.forEach(o=>{o.onStateChanged?.({state:this.state,messages:this.messages,agent:this,input:e})})))}clone(){let e=Object.create(Object.getPrototypeOf(this));return e.agentId=this.agentId,e.description=this.description,e.threadId=this.threadId,e.messages=te(this.messages),e.state=te(this.state),e._debug=this._debug,e._debugLogger=this._debugLogger,e._maxEnforcedEntries=this._maxEnforcedEntries,e.isRunning=this.isRunning,e.subscribers=[...this.subscribers],e.middlewares=[...this.middlewares],e.pendingInterrupts=te(this.pendingInterrupts),e}addMessage(e){this.messages.push(e),(async()=>{for(let n of this.subscribers)await n.onNewMessage?.({message:e,messages:this.messages,state:this.state,agent:this});if(e.role==="assistant"&&e.toolCalls)for(let n of e.toolCalls)for(let r of this.subscribers)await r.onNewToolCall?.({toolCall:n,messages:this.messages,state:this.state,agent:this});for(let n of this.subscribers)await n.onMessagesChanged?.({messages:this.messages,state:this.state,agent:this})})()}addMessages(e){this.messages.push(...e),(async()=>{for(let n of e){for(let r of this.subscribers)await r.onNewMessage?.({message:n,messages:this.messages,state:this.state,agent:this});if(n.role==="assistant"&&n.toolCalls)for(let r of n.toolCalls)for(let o of this.subscribers)await o.onNewToolCall?.({toolCall:r,messages:this.messages,state:this.state,agent:this})}for(let n of this.subscribers)await n.onMessagesChanged?.({messages:this.messages,state:this.state,agent:this})})()}setMessages(e){this.messages=te(e),(async()=>{for(let n of this.subscribers)await n.onMessagesChanged?.({messages:this.messages,state:this.state,agent:this})})()}setState(e){this.state=te(e),(async()=>{for(let n of this.subscribers)await n.onStateChanged?.({messages:this.messages,state:this.state,agent:this})})()}legacy_to_be_removed_runAgentBridged(e){this.agentId=this.agentId??sn();let n=this.prepareRunAgentInput(e);return[...this.middlewares,new Hh].reduceRight((r,o)=>({run:i=>o.run(i,r),get messages(){return r.messages},get state(){return r.state}}),this).run(n).pipe(Nh(this.debugLogger,{maxEntries:this.maxEnforcedEntries}),Ga(this.debugLogger),kh(this.debugLogger),UR(this.threadId,n.runId,this.agentId),r=>r.pipe(Dt(o=>(this.debugLogger?.event("LEGACY","Event:",o,{type:o.type}),o))))}};function yI(t){if(!Array.isArray(t.messages))return t;let e=!1,n=t.messages.map(r=>{if(r.subagentRunId===null){e=!0;let o={...r};return delete o.subagentRunId,o}return r});return e?{...t,messages:n}:t}var sE=class extends Zh{requestInit(t){return{method:"POST",headers:{...this.headers,"Content-Type":"application/json",Accept:"text/event-stream"},body:JSON.stringify(yI(t)),signal:this.abortController.signal}}runAgent(t,e){return this.abortController=t?.abortController??new AbortController,super.runAgent(t,e)}abortRun(){this.abortController.abort(),super.abortRun()}constructor(t){super(t),this.abortController=new AbortController,this.url=t.url,this.headers=te(t.headers??{}),this.fetch=t.fetch??((e,n)=>fetch(e,n))}run(t){return Gh(Fh(()=>this.fetch(this.url,this.requestInit(tI(t,{maxEntries:this.maxEnforcedEntries})))),this.debugLogger)}clone(){let t=super.clone();t.url=this.url,t.headers=te(this.headers??{}),t.fetch=this.fetch;let e=new AbortController,n=this.abortController.signal;return n.aborted&&e.abort(n.reason),t.abortController=e,t}};Je(zr());function nt(t,e){return wI(t)?Promise.resolve(t).then(e):e(t)}function wI(t){return typeof t=="object"&&t!==null&&typeof t.then=="function"}function Ge(t,e){return e===void 0?t:{...t,credentials:e}}function rt(t,e,n,r){let o=nt(t,n);return r?o.then(i=>i.status!==401?i:(i.body?.cancel().catch(Boolean),nt(e(),n))):o}function jr(t){let e=(t?.method??"GET").toUpperCase();return e==="GET"||e==="HEAD"}function ja(t){if(t.newThread!==void 0)return t.newThread();let e=Ie();return t.setActiveThread(e),e}function Za(t,e,n,r){if(e.length===0)return;let o=new URL(String(t),location.href).origin;o===location.origin||n.includes(o)||r.has(o)||(r.add(o),console.warn(`<ag-ui-chat>: sending host credentials (${e.join(", ")}) to ${o}, which is not this page's origin (${location.origin}). Those headers are the page's own authentication, and whichever server answers the browser's preflight receives them \u2014 so a URL attribute built from a query parameter or from tenant-authored configuration is a channel for the token to leave on. If this destination is deliberate, name it in \`trustedOrigins\` to confirm it and silence this notice. Reported once per origin.`))}function Zr(t){return t.split(",").map(e=>e.trim()).filter(e=>e!=="")}function Wa(t,e,n=new Set){let r=new Set(n);for(let a of t)a.role==="tool"&&r.add(a.toolCallId);let o=[],i=[],s=!1;for(let a of t){if(a.subagentRunId!==void 0){o.push(a);continue}let l=a.role==="assistant"?EI(a.toolCalls):[];a.role==="tool"||l.length>0&&!s||(o.push(...i.map(e)),i=[]),o.push(a),s=a.role==="tool";for(let c of l)r.has(c)||(r.add(c),i.push(c))}return o.length+i.length===t.length?t:(o.push(...i.map(e)),o)}function EI(t){return Array.isArray(t)?t.map(e=>Object(e).id).filter(e=>typeof e=="string"):[]}function qa(t,e){return Object(t.metadata)[e]??t[e]}var ve={title:"Assistant",chatHistory:"Chat history",closeHistory:"Close history",searchConversations:"Search conversations",queued:"Waiting to send",removeQueued:'Do not send "{text}"',noMatches:"No conversations match that.",threadsToday:"Today",threadsPreviousWeek:"Previous 7 days",threadsOlder:"Older",chatMoved:"Moved this panel out of the way",chatMinimised:"Minimised this panel",undo:"Undo",newChat:"New chat",collapse:"Collapse",expand:"Expand",maximize:"Maximize",restore:"Restore",expandUnread:"Expand \u2014 {count} unread",toggleTheme:"Toggle theme",copyCode:"Copy",copied:"Copied",copyFailed:"Copy failed",checkpoints:"Continue a run",noCheckpoints:"Nothing to continue yet.",resumeRun:"Resume",forkRun:"Fork",forkedRun:"branched",greeting:"Hello, {name}",greetingNoName:"Hello there",conversation:"Conversation",jumpToLatest:"Jump to latest",announceResponding:"Assistant is responding",announceAnswerReady:"Assistant answered",announceAwaitingDecision:"{count} action is waiting for your approval",announceStopped:"Response stopped",announceFailed:"The response failed",thinking:"Assistant is thinking\u2026",thoughts:"Thoughts",thoughtFor:"Thought for {seconds}s",stopped:"\u23F9 Stopped",connectionLost:"Connection lost",runErrorFailed:"The response failed. Try again in a moment.",runErrorTimedOut:"The response took too long and was stopped.",runErrorInterrupted:"The response was interrupted before it finished.",runErrorNewChat:"Start a new conversation",usageBoth:"{input} in \xB7 {output} out tokens",usageInput:"{input} in tokens",usageOutput:"{output} out tokens",callNotFinished:"Not finished: the run ended or moved on before this tool call returned a result.",declinedAction:"User declined the action.",confirmCheckFailed:"Not run: the check that decides whether this action needs the user's confirmation failed.",navigating:"Navigating\u2026",historyReplaced:"The server replaced this conversation's history. Reload to see the updated transcript.",chartUndrawable:"A chart could not be drawn from the data sent, so it was removed.",historyCompacted:"Earlier turns condensed to fit the context window ({count} removed)",usingSkill:"Using skill {name}",enqueuedMessages:"Added during the run",citations:"Sources ({count})",citationDocument:"Document",mcpAppUnsupported:"An app view can't be shown here: {uri}",mcpAppExitFullscreen:"Exit full screen",mcpAppConfirmMessage:"This app wants to send this message for you:",mcpAppConfirmTool:"This app wants to run \u201C{tool}\u201D",runInterrupted:"The previous response didn\u2019t finish \u2014 the page changed before it arrived.",pageMoved:"The page changed since you last looked at it. Call read_page to see the current page, then retry.",attachmentsStillUploading:"{n} file still uploading \u2014 it was not sent with this message and is still attached.",notConnected:"This chat isn\u2019t connected to an agent, so the message wasn\u2019t sent.",continueNeedsTurn:"Type the next turn in the composer first, then pick a run to continue.",continueWhileRunning:"Wait for the current answer or stop it, then pick a run to continue.",continueWhileLoading:"Wait for the conversation to finish loading, then pick a run to continue.",skillNeeds:"\u201C{title}\u201D needs {fields} \u2014 fill it in below, then send.",message:"Message",inputPlaceholder:"Ask anything\u2026",send:"Send",stop:"Stop",attachFiles:"Attach files",recordVoice:"Record voice",stopRecording:"Stop recording",transcribing:"Transcribing\u2026",transcriptionFailed:"Transcription failed",recordingLimit:"Stopped at the {n}-minute limit \u2014 transcribing what was recorded.",placeShared:"The agent is told you are on {label}",placeWithheld:"{label} is not sent with your next message",placeStopSharing:"Stop sharing this page",placeShareAgain:"Share this page again",toolRunning:"running\u2026",toolDeferred:"waiting for you",toolDone:"\u2713 done",toolError:"\u26A0 error",toolDeclined:"\u2298 declined",toolInterrupted:"\u25CC not finished",resizePanel:"Resize the chat panel",decisionApproved:"approved by you",decisionDeclined:"declined by you",answeredByReviewer:"Approved by a reviewer model",answeredByRoutine:"Approved by a routine",argumentsLabel:"Arguments",resultLabel:"Result",errorLabel:"Error",declinedLabel:"Declined",interruptedLabel:"Not finished",details:"Details",toolGroupSteps:"{count} steps",toolGroupWorking:"Working through {count} steps",toolGroupWorked:"Worked through {count} steps",toolGroupWaiting:"{count} waiting for you",toolGroupFailed:"{count} failed",toolGroupDeclined:"{count} declined",toolStepRepeat:"({n})",subAgentWorking:"Working\u2026",subAgentDelegatedTo:"Delegated to {agent}",subAgentFinished:"{agent} finished",subAgentCancelled:"{agent} was cancelled",subAgentUnfinished:"{agent} was still running when the run ended",subAgentFailed:"The sub-agent failed",subAgentSteps:"Steps the sub-agent took",subAgentControls:"Task controls",subAgentSteer:"Steer",subAgentAnswer:"Answer",subAgentCancelTask:"Cancel",subAgentForceCancel:"Stop now",subAgentSend:"Send",subAgentSteerPlaceholder:"Tell the task what to change",subAgentAnswerPlaceholder:"Your answer",subAgentControlFailed:"Couldn't reach the task. Try again.",subAgentControlFinished:"The task has already finished.",subAgentControlNotWaiting:"The task is no longer waiting on that question.",subAgentControlUnavailable:"This task can't be controlled from here.",childSessionOpen:"Open the {agent} task",childSessionNeedsYou:"The {agent} task needs you",parentThread:"From {title}",parentThreadUnlisted:"From the conversation that started this one",approvalEditArgs:"Edit the arguments before approving",approvalArgsInvalid:"That is not valid JSON, so nothing was sent.",approvalArgsNotAnObject:"Arguments have to be a JSON object.",suggestions:"Suggested follow-ups",messageActions:"Message actions",quoteSelection:"Quote",copyMessage:"Copy message",retryMessage:"Try again",feedbackUp:"Good answer",feedbackDown:"Poor answer",confirmAction:"Confirm action",confirmAlways:"Always allow",confirmRun:"Run \u201C{tool}\u201D?",confirm:"Confirm",cancel:"Cancel",approveAction:"Approve action",approvalPrompt:"Approve this action?",approve:"Approve",deny:"Deny",askUserAction:"Question",otherOption:"Other\u2026",answerPlaceholder:"Type your answer\u2026",submit:"Submit",chats:"Chats",noConversations:"No conversations yet.",rename:"Rename",renameConversation:"Rename conversation",delete:"Delete",deleteConversation:"Delete conversation",deletePrompt:"Delete?",skills:"Skills",manageSkills:"Manage skills",backToConversation:"Back to the conversation",newSkill:"New skill",newSkillTitle:"New skill",editSkillTitle:"Edit skill",noSkills:"No skills yet",noSkillsBody:"A skill is a set of instructions you or the agent can call up by name, like {example}.",draftSkill:"Draft one with the agent",writeSkill:"Write it yourself",skillName:"Name",skillNameHint:"Lowercase words joined by hyphens. It is what you type after /.",skillDescription:"Description",skillDescriptionHint:"The agent reads only this until it loads the skill, so say when to use it.",skillBody:"Instructions",skillBodyHint:"Markdown. A skill grants no tools: approvals still apply.",skillReach:"Who can use it",skillInMenu:"In the / menu",skillInMenuHint:"You pick it from the palette.",skillAgentMayLoad:"Agent may load it on its own",skillAgentMayLoadHint:"When the description matches the request.",skillUnreachable:"With both off nobody can reach this skill. Turn it off instead if that is the intent.",skillOff:"Off",turnOn:"Turn on",turnOff:"Turn off",create:"Create",save:"Save",skillSaved:"Saved /{name}",skillTurnedOn:"/{name} is on again",skillTurnedOff:"/{name} is off",skillsUnavailable:"Skills could not be loaded.",skillSaveFailed:"The skill could not be saved.",routines:"Routines",newRoutine:"New routine",newRoutineTitle:"New routine",editRoutineTitle:"Edit routine",noRoutines:"No routines yet",noRoutinesBody:"A routine asks the agent the same thing on a schedule. Each run is a conversation of its own.",routinesUnavailable:"Routines could not be loaded.",routineSaveFailed:"The routine could not be saved.",makeRoutine:"Make this a routine",routineName:"Name",routinePrompt:"Prompt",routinePromptHint:"What the agent is asked each time the routine runs.",routineSchedule:"When it runs",routineWeekly:"On days of the week",routineInterval:"Every few hours",routineAt:"At",routineEvery:"Every (hours)",routineTimezone:"Timezone",routineTools:"Pre-approved tools",routineToolsHint:"A run uses these without asking. Every other tool still waits for you.",routineNoTools:"This agent has no tools to pre-approve.",routineDestructive:"Destructive",routineGrantDestructive:"{name} is destructive: every run may use it without asking you. Grant it anyway?",routineGrant:"Grant",routineDaily:"Every day at {time}",routineWeekdays:"Weekdays at {time}",routineOnDays:"{days} at {time}",routineHourly:"Every hour",routineEveryHours:"Every {n} hours",routineInZone:"{schedule} ({zone})",routineNext:"Next {time}",routinePaused:"Paused",routinePausedBecause:"Paused: {reason}",routineLastNever:"Not run yet",routineLastPending:"Running",routineLastLapsed:"Lapsed",routineLastFinished:"Finished",routineLastUnknown:"Ran",pause:"Pause",resume:"Resume",runNow:"Run now",routineSaved:"Saved {name}",routinePausedStatus:"{name} is paused",routineResumedStatus:"{name} is on again",routineStarted:"{name} is running",routineBadge:"Run by the routine {name}",tooLarge:"Too large (max {size})",fileTypeNotAllowed:"File type not allowed",uploadFailed:"upload failed",retry:"Retry",retryUpload:"Retry upload",remove:"Remove",removeAttachment:"Remove attachment",justNow:"just now",minutesAgo:"{n}m ago",hoursAgo:"{n}h ago",daysAgo:"{n}d ago",weeksAgo:"{n}w ago",moreControls:"More",routineHour:"Hour",routineMinute:"Minute",toolGroupPreApproved:"{count} pre-approved",answeredByModel:"Answered by {model}",childReport:"Report from {agent}",childQuestion:"Question from {agent}","skillScope:personal":"Personal","skillScope:shared":"Company"};function Wh(t){let e={...ve};for(let n of Object.keys(t)){let r=t[n];r!==void 0&&(e[n]=r)}return e}function xI(t){let e=document.createElement("input");return e.type="text",e.className="question-input",e.setAttribute("part","question-input"),e.placeholder=t,e}function qh(t,e,n={}){let r=n.strings??ve,o=e.options??[],i=o.length>0,s=!i||e.allowCustom===!0;return new Promise(a=>{let l=document.createElement("div");l.className="question",l.setAttribute("part","question"),l.setAttribute("role","group"),l.setAttribute("aria-label",r.askUserAction);let d=document.createElement("div");d.className="question-body",d.setAttribute("part","question-body"),d.textContent=e.question;let c=document.createElement("div");c.className="question-options",c.setAttribute("part","question-options");let h=`q-${o.length}-${e.question.length}`,p=[];for(let g of o){let w=document.createElement("label");w.className="question-choice",w.setAttribute("part","question-choice");let b=document.createElement("input");b.type="radio",b.name=h,b.value=g,b.setAttribute("part","question-radio");let k=document.createElement("span");k.setAttribute("part","question-choice-text"),k.textContent=g,w.append(b,k),c.appendChild(w),p.push(b)}let m=null,u=null;if(s){if(u=xI(r.answerPlaceholder),i){let g=document.createElement("label");g.className="question-choice",g.setAttribute("part","question-choice"),m=document.createElement("input"),m.type="radio",m.name=h,m.value="",m.setAttribute("part","question-radio");let w=document.createElement("span");w.setAttribute("part","question-choice-text"),w.textContent=r.otherOption,g.append(m,w),c.appendChild(g),u.disabled=!0}c.appendChild(u)}let v=document.createElement("div");v.className="question-actions",v.setAttribute("part","question-actions");let E=document.createElement("button");E.type="button",E.className="question-btn",E.setAttribute("part","question-button"),E.textContent=r.submit,v.appendChild(E);let x=!1,T=()=>{let g=p.find(w=>w.checked);if(g!==void 0)return g.value;if(u!==null&&(m===null||m.checked)){let w=u.value.trim();return w===""?null:w}return null},O=()=>{u!==null&&m!==null&&(u.disabled=!m.checked),E.disabled=T()===null},S=g=>{if(!x){x=!0,E.disabled=!0;for(let w of p)w.disabled=!0;m!==null&&(m.disabled=!0),u!==null&&(u.disabled=!0),l.setAttribute("data-resolved",g===""?"cancelled":"answered"),a(g)}};for(let g of[...p,...m!==null?[m]:[]])g.addEventListener("change",O);if(u?.addEventListener("input",O),u?.addEventListener("keydown",g=>{if(g.key==="Enter"){g.preventDefault();let w=T();w!==null&&S(w)}}),E.addEventListener("click",()=>{let g=T();g!==null&&S(g)}),n.signal?.addEventListener("abort",()=>S(""),{once:!0}),l.append(d,c,v),t.appendChild(l),n.signal?.aborted===!0){S("");return}O(),(i?p[0]:u)?.focus()})}function Yh(t){let e={};if(!Array.isArray(t))return e;for(let n of t){if(n===null||typeof n!="object")continue;let r=n,o=r.name,i=r.summary,s=r.description;typeof o=="string"&&typeof i=="string"&&(e[o]=typeof s=="string"?{name:o,summary:i,description:s}:{name:o,summary:i})}return e}var Ya=class{#e;#t={};#n=new Set;#r=new bo;constructor(e){this.#e=e}register(e){this.#r.register(e)}registerPageState(e){for(let n of Fc(e))this.#r.register(n)}has(e){return this.#r.has(e)}defaultTools(){return[...this.#a().map(e=>({name:e.name,description:e.description,parameters:e.parameters})),...this.#r.tools()]}advertise(){let e=this.#e.getTools();return this.#n=new Set(e.map(n=>n.name)),e}wasAdvertised(e){return this.#n.has(e)}resolve(e){let n=this.#a().find(r=>r.name===e);return n!==void 0?n:this.#r.has(e)?this.#r.get(e):null}summary(e){return this.#t[e]?.summary}async fetchCatalog(){let e=this.#e.element.getAttribute("data-tools-url");if(e!==null)try{let n=await this.#e.request(e);this.#t=Yh(await n.json())}catch{}}#o(){return this.#e.routeMap().length===0?[]:Bc(()=>this.#e.routeMap(),()=>this.#e.navigate())}#i(){let e=this.#e.getPageMap();return e===null||this.#e.pageWithheld()?[]:[{name:fo,description:"Read the current page's structure (fields, buttons, route). Call after acting to observe the result within the same turn.",parameters:{type:"object",properties:{},required:[],[Fe]:"Read the page"},handler:()=>e()}]}#s(){let e=this.#e.element.getAttribute("data-page-actions");if(e===null)return[];let n=new Set(Zr(e));return[...Uc(n,r=>this.#e.resolvePageTarget(r)),...n.has(_o.CHAT)?Tc(this.#e.element):[]]}#a(){return[...this.#o(),...this.#i(),...this.#s(),...this.#l()]}#l(){return this.#e.askUser()?[{name:"ask_user",description:"Ask the user a question and wait for their answer. Provide `options` for a multiple-choice prompt; set `allow_custom` to also accept a free-text answer.",parameters:{type:"object",properties:{question:{type:"string",description:"The question to ask the user."},options:{type:"array",items:{type:"string"},description:"Preset choices offered as radio buttons."},allow_custom:{type:"boolean",description:"Allow a free-text answer in addition to any options."}},required:["question"]},handler:(e,n)=>this.#d(e,n)}]:[]}async#d(e,n){let o={question:typeof e.question=="string"?e.question:""},i=e.options;Array.isArray(i)&&(o.options=i.filter(c=>typeof c=="string")),e.allow_custom===!0&&(o.allowCustom=!0);let s=this.#e.decision.open();this.#e.hidePending();let a=()=>qh(this.#e.ensureGroup(),o,{signal:s,strings:this.#e.strings()}),l=this.#e.askUserRenderer(),d;this.#e.setAsking(n,!0);try{if(l===null)d=await a();else try{d=await l.call(this.#e.element,o,{signal:s})}catch(c){d=await this.#c(c,s,n,a)}}finally{this.#e.setAsking(n,!1)}return this.#e.decision.close(),this.#e.updateEmptyState(),this.#e.follow(),d}#c(e,n,r,o){return n.aborted?Promise.resolve(""):(console.warn(`ag-ui-chat: askUserRenderer failed for tool call ${r}, so the built-in question card asks instead`,e),o())}};function Ka(t){if(t.name!==pc)return null;let e=t.args?.id;return typeof e=="string"&&e!==""?e:null}function aE(t,e){let n=document.createElement("button");return n.type="button",n.className=`approval-btn approval-btn--${t}`,n.setAttribute("part",`approval-button approval-${t}`),n.textContent=e,n}function Kh(t,e,n={}){let r=n.strings??ve;return new Promise(o=>{let i=document.createElement("div");i.className="approval",i.setAttribute("part","approval"),e.toolName!==void 0&&i.setAttribute("data-tool-name",e.toolName),i.setAttribute("role","group"),i.setAttribute("aria-label",r.approveAction);let s=document.createElement("div");s.className="approval-body",s.setAttribute("part","approval-body"),s.textContent=e.message??r.approvalPrompt;let a=_I(e,n,r),l=document.createElement("div");l.className="approval-actions",l.setAttribute("part","approval-actions");let d=aE("deny",r.deny),c=aE("approve",r.approve),h=!1,p=m=>{h||(h=!0,d.disabled=!0,c.disabled=!0,i.setAttribute("data-resolved",m?"approved":"denied"),o(m))};if(d.addEventListener("click",()=>p(!1)),c.addEventListener("click",()=>{a!==null&&!a.commit()||p(!0)}),n.signal?.addEventListener("abort",()=>p(!1),{once:!0}),l.append(d,c),i.append(s,...a===null?[]:[a.root],l),t.appendChild(i),n.signal?.aborted===!0){p(!1);return}c.focus()})}function _I(t,e,n){let{onEdit:r}=e;if(r===void 0||t.args===void 0)return null;let o=JSON.stringify(t.args,null,2),i=document.createElement("div");i.className="approval-edit",i.setAttribute("part","approval-edit");let s=document.createElement("textarea");s.className="approval-args",s.setAttribute("part","approval-args"),s.setAttribute("aria-label",n.approvalEditArgs),s.rows=Math.min(10,o.split(`
`).length),s.value=o;let a=document.createElement("div");return a.className="approval-error",a.setAttribute("part","approval-error"),a.setAttribute("role","alert"),a.hidden=!0,i.append(s,a),{root:i,commit:()=>{if(s.value===o)return!0;let l;try{l=JSON.parse(s.value)}catch{return a.textContent=n.approvalArgsInvalid,a.hidden=!1,s.focus(),!1}return typeof l!="object"||l===null||Array.isArray(l)?(a.textContent=n.approvalArgsNotAnObject,a.hidden=!1,s.focus(),!1):(a.hidden=!0,r(l),!0)}}}function Xh(t,e){let n=document.createElement("button");return n.type="button",n.className=`confirm-btn confirm-btn--${t}`,n.setAttribute("part",`confirm-button confirm-${t}`),n.textContent=e,n}function Jh(t,e,n={}){let r=n.strings??ve;return new Promise(o=>{let i=document.createElement("div");i.className="confirm",i.setAttribute("part","confirm"),i.setAttribute("data-tool-name",e.toolName),i.setAttribute("role","group"),i.setAttribute("aria-label",r.confirmAction);let s=document.createElement("div");s.className="confirm-body",s.setAttribute("part","confirm-body"),s.textContent=e.message??F(r.confirmRun,{tool:e.toolName});let a=document.createElement("pre");a.className="confirm-args",a.setAttribute("part","confirm-args"),a.textContent=JSON.stringify(e.args,null,2),a.hidden=Object.keys(e.args).length===0;let l=document.createElement("div");l.className="confirm-actions",l.setAttribute("part","confirm-actions");let d=Xh("cancel",r.cancel),c=n.onAlwaysAllow===void 0?null:Xh("always",F(r.confirmAlways,{tool:e.toolName})),h=Xh("confirm",r.confirm),p=!1,m=u=>{p||(p=!0,i.remove(),o(u))};if(d.addEventListener("click",()=>m(!1)),h.addEventListener("click",()=>m(!0)),c?.addEventListener("click",()=>{n.onAlwaysAllow?.(),m(!0)}),n.signal?.addEventListener("abort",()=>m(!1),{once:!0}),l.append(d,...c===null?[]:[c],h),i.append(s,a,l),t.appendChild(i),n.signal?.aborted===!0){m(!1);return}h.focus()})}function lE(t){let e=t.metadata?.[ho];return typeof e=="string"&&e.trim()!==""?e:void 0}function Qh(t){return t[uo]===!0}function Xa(t){return t[po]===!0}var Ja=class{#e;#t=new Set;#n=null;constructor(e){this.#e=e}forgetWaivers(){this.#t.clear()}buildContext(){return this.#n=window.location.href,this.#e.getContext()}async execute(e){if(Ka(e)!==null)return null;let n=this.#e.tenure(),r=this.#e.conversation(),o=this.#e.threadId(),i=this.#e.transcript.cardFor(e);this.#e.transcript.forgetCard(e.id),this.#e.transcript.setCardElement(e.id,i.element),this.#e.transcript.holdRunning(e.id,i);let s=this.#e.tools.wasAdvertised(e.name)?this.#e.tools.resolve(e.name):null;if(s===null)return this.#e.transcript.isServerSettled(e.id)||i.settle(Q.INTERRUPTED,this.#e.strings().callNotFinished),null;if(this.#e.tools.wasAdvertised(fo)&&e.name!==fo&&!Xa(s.parameters)&&this.#s()){let c=this.#e.strings().pageMoved;return i.settle(Q.ERROR,c),this.#e.transcript.showPending(),{content:`Error: ${c}`,error:c,outcome:st.FAILED}}let a=this.#e.decision.open(),l=await this.#o(e,s);if(this.#e.decision.close(),a.aborted)return this.#i(i);if(l==="unanswered"){let c=this.#e.strings().confirmCheckFailed;return i.settle(Q.DECLINED,c),this.#e.transcript.showPending(),{content:c,outcome:st.DENIED}}if(l!==null){let c={toolName:e.name,args:e.args},h=s.parameters[ho];typeof h=="string"&&(c.message=h);let p=this.#e.decision.open();i.setAsking(!0);let m;try{let u=Jh(this.#e.transcript.ensureGroup(),c,{signal:p,strings:this.#e.strings(),...l==="destructive"?{onAlwaysAllow:()=>this.#t.add(e.name)}:{}});this.#e.transcript.updateEmptyState(),this.#e.transcript.follow(),m=await u}finally{i.setAsking(!1)}if(this.#e.decision.close(),this.#e.tenure()!==n)return null;if(i.recordDecision(m?"approved":"declined"),!m){let u=this.#e.strings().declinedAction;return i.settle(Q.DECLINED,u),this.#e.conversation()===r&&this.#e.transcript.showPending(),{content:u,outcome:st.DENIED}}if(p.aborted)return this.#i(i)}let d=Xa(s.parameters)&&this.#e.navigate()===null;d&&this.#e.conversationStore().saveCheckpoint(o,{toolCallId:e.id});try{let c=await s.handler(e.args,e.id);if(this.#e.tenure()!==n)return null;if(s.render!==void 0&&this.#e.transcript.renderToolOutput(s.render,e),d)return i.settle(Q.DONE,this.#e.strings().navigating),{content:"",halt:!0};let h=JSON.stringify(c??null);return i.settle(Q.DONE,h),this.#e.conversation()===r&&this.#e.transcript.showPending(),{content:h}}catch(c){if(this.#e.tenure()!==n)return null;d&&this.#e.conversationStore().saveCheckpoint(o,null);let h=c instanceof Error?c.message:String(c);return i.settle(Q.ERROR,h),this.#e.conversation()===r&&this.#e.transcript.showPending(),{content:`Error: ${h}`,error:h,outcome:st.FAILED}}}async resolveInterrupts(e){let n=this.#e.decision.open();this.#e.announce(F(this.#e.strings().announceAwaitingDecision,{count:e.length})),this.#e.transcript.hidePending();let r=await Promise.all(e.map(async i=>{let s=i.toolCallId!==void 0?this.#e.transcript.card(i.toolCallId):void 0,a={},l=lE(i)??i.message;l!==void 0&&(a.message=l);let d=s?.element.getAttribute("data-tool-name");d!=null&&(a.toolName=d);let c,h=this.#e.approveWithEdits()&&s!==void 0;h&&(a.args=s.args),s?.mark(Q.DEFERRED),s!==void 0&&this.#e.transcript.revealStep(s);let p=()=>Kh(s?.approvalSlot??this.#e.transcript.ensureGroup(),a,{signal:n,strings:this.#e.strings(),...h?{onEdit:v=>{c=v}}:{}}),m=this.#e.approvalRenderer(),u;if(m===null)u=await p();else try{u=await m.call(this.#e.element,a,{signal:n})}catch(v){u=await this.#r(v,n,i.id,p)}return s?.recordDecision(u?"approved":"declined"),u?s?.mark(Q.PENDING):s?.settle(Q.DECLINED,this.#e.strings().declinedAction),{id:i.id,approved:u,editedArgs:c}}));this.#e.transcript.updateEmptyState(),this.#e.transcript.follow(),this.#e.decision.close();let o={};for(let{id:i,approved:s,editedArgs:a}of r)o[i]=s?{status:"resolved",payload:a===void 0?{approved:!0}:{approved:!0,editedArgs:a}}:{status:"cancelled"};return o}#r(e,n,r,o){return n.aborted?Promise.resolve(!1):(console.warn(`ag-ui-chat: approvalRenderer failed for interrupt ${r}, so the built-in approval card asks instead`,e),o())}async#o(e,n){if(this.#e.autoConfirm())return null;let r=this.#e.confirmPredicate();if(r!==null)try{return await r.call(this.#e.element,e.name,e.args)===!0?"predicate":null}catch(o){return console.warn(`ag-ui-chat: confirmPredicate failed for tool ${e.name}, so the call was refused`,o),"unanswered"}return this.#t.has(e.name)?null:Qh(n.parameters)?"destructive":null}#i(e){return e.settle(Q.INTERRUPTED,this.#e.strings().callNotFinished),null}#s(){return this.#n!==null&&this.#n!==window.location.href}};var TI="http://www.w3.org/2000/svg",pt={top:20,right:12,bottom:30,left:44},SI=480,kI=220,AI=220/480,RI=160,II=320,dE=8,CI=5.6,cE=["var(--_chart-1)","var(--_chart-2)","var(--_chart-3)","var(--_chart-4)","var(--_chart-5)","var(--_chart-6)"];function Xn(t){return cE[t%cE.length]}function uE(t){let e=Math.max(kI,t),n=Math.min(II,Math.max(RI,Math.round(e*AI)));return{width:e,height:n,plotW:e-pt.left-pt.right,plotH:n-pt.top-pt.bottom}}function Ut(t,e){let n=document.createElementNS(TI,t);for(let[r,o]of Object.entries(e))n.setAttribute(r,String(o));return n}function hE(t,e){let n=Ut("text",{"font-size":10,fill:"currentColor","fill-opacity":.65,...e});return n.textContent=t,n}function NI(t){let e=[];return t.labels.forEach((n,r)=>{let o=0;for(let i of t.series)o+=i.points[r]??0,e.push(o)}),e}function OI(t){let e=t.kind==="stacked"?NI(t):t.series.flatMap(o=>[...o.points]),n=Math.max(0,...e),r=Math.min(0,...e);return n===r?{min:r,max:n+1}:{min:r,max:n}}function Jn(t,e,n,r){return pt.top+r.plotH-(t-e)/(n-e)*r.plotH}function ep(t,e,n){let r=n.plotW/e;return pt.left+r*t+r/2}function MI(t,e){let n=e.plotW/t.length,r=Math.max(...t.map(o=>o.length))*CI;return Math.max(1,Math.ceil(r/n))}function PI(t,e,n,r,o){for(let s of[r,o]){let a=Jn(s,r,o,n);t.appendChild(Ut("line",{x1:pt.left,y1:a,x2:n.width-pt.right,y2:a,stroke:"currentColor","stroke-opacity":s===r?.35:.12})),t.appendChild(hE(String(Math.round(s)),{x:pt.left-6,y:a+4,"text-anchor":"end"}))}let i=MI(e.labels,n);e.labels.forEach((s,a)=>{a%i===0&&t.appendChild(hE(s,{x:ep(a,e.labels.length,n),y:n.height-pt.bottom+16,"text-anchor":"middle"}))})}function LI(t,e,n,r,o){let i=n.plotW/e.labels.length,s=i*.7/e.series.length,a=Jn(r,r,o,n);e.series.forEach((l,d)=>{l.points.forEach((c,h)=>{let p=Jn(c,r,o,n);t.appendChild(Ut("rect",{x:pt.left+i*h+i*.15+s*d,y:p,width:s,height:Math.max(1,a-p),fill:Xn(d),rx:2}))})})}function zI(t,e,n,r,o){let i=n.plotW/e.labels.length,s=i*.7,a=e.labels.map(()=>0);e.series.forEach((l,d)=>{l.points.forEach((c,h)=>{let p=a[h]??0,m=p+c;a[h]=m;let u=Jn(m,r,o,n);t.appendChild(Ut("rect",{x:pt.left+i*h+i*.15,y:u,width:s,height:Math.max(1,Jn(p,r,o,n)-u),fill:Xn(d)}))})})}function DI(t,e,n,r,o){e.series.forEach((i,s)=>{let a=i.points.map((l,d)=>`${ep(d,e.labels.length,n)},${Jn(l,r,o,n)}`).join(" ");t.appendChild(Ut("polyline",{points:a,fill:"none",stroke:Xn(s),"stroke-width":2,"stroke-linejoin":"round"}))})}function $I(t,e,n,r,o){e.series.forEach((i,s)=>{i.points.forEach((a,l)=>{t.appendChild(Ut("circle",{cx:ep(l,e.labels.length,n),cy:Jn(a,r,o,n),r:4,fill:Xn(s),"fill-opacity":.85}))})})}function UI(t,e,n){let r=e.reduce((l,d)=>l+d,0),o=n.width/2,i=pt.top+n.plotH/2,s=Math.min(n.plotW,n.plotH)/2;if(r===0){t.appendChild(Ut("circle",{cx:o,cy:i,r:s,fill:"none",stroke:"currentColor","stroke-opacity":.3}));return}let a=-Math.PI/2;e.forEach((l,d)=>{let c=l/r*Math.PI*2,h=a+c;if(c>=Math.PI*2)t.appendChild(Ut("circle",{cx:o,cy:i,r:s,fill:Xn(d)}));else{let p=o+s*Math.cos(a),m=i+s*Math.sin(a),u=o+s*Math.cos(h),v=i+s*Math.sin(h),E=c>Math.PI?1:0;t.appendChild(Ut("path",{d:`M ${o} ${i} L ${p} ${m} A ${s} ${s} 0 ${E} 1 ${u} ${v} Z`,fill:Xn(d)}))}a=h})}function pE(t,e){let n=Ut("svg",{viewBox:`0 0 ${e.width} ${e.height}`,width:"100%",role:"img"});if(n.setAttribute("aria-label",t.title??`${t.kind} chart`),t.kind==="pie"){let i=t.series[0];return UI(n,i.points.map(s=>Math.max(0,s)),e),n}let{min:r,max:o}=OI(t);return PI(n,t,e,r,o),t.kind==="bar"?LI(n,t,e,r,o):t.kind==="stacked"?zI(n,t,e,r,o):t.kind==="line"?DI(n,t,e,r,o):$I(n,t,e,r,o),n}function HI(t){if(t.length<2)return null;let e=document.createElement("div");return e.className="chart-legend",e.setAttribute("part","chart-legend"),t.forEach((n,r)=>{let o=document.createElement("span");o.className="chart-legend-item";let i=document.createElement("span");i.className="chart-legend-swatch",i.style.background=Xn(r),o.append(i,document.createTextNode(n)),e.appendChild(o)}),e}function FI(t,e){new ResizeObserver(()=>{e(Math.round(t.clientWidth/dE)*dE)}).observe(t)}function Ko(t){if(t.labels.length===0||t.series.length===0)return null;let e=document.createElement("div");if(e.className="chart-block",e.setAttribute("part","chart-block"),t.title!==void 0&&t.title!==""){let i=document.createElement("div");i.className="chart-title",i.setAttribute("part","chart-title"),i.textContent=t.title,e.appendChild(i)}let n=SI,r=pE(t,uE(n));e.appendChild(r);let o=HI(t.kind==="pie"?t.labels:t.series.map(i=>i.label));return o!==null&&e.appendChild(o),FI(e,i=>{if(i===n)return;n=i;let s=pE(t,uE(n));r.replaceWith(s),r=s}),e}var GI=["bar","line","pie","scatter","stacked"];function BI(t){return GI.includes(t)?t:"bar"}function VI(t){if(!Array.isArray(t))return null;let e=[];for(let n of t){if(typeof n!="number"||!Number.isFinite(n)||Math.abs(n)>1e15)return null;e.push(n)}return e}function jI(t){if(!Array.isArray(t))return null;for(let e=0;e<t.length;e+=1)if(typeof t[e]!="string")return null;return t}function Wr(t){if(typeof t!="object"||t===null)return null;let e=t,n=jI(e.labels);if(n===null||!Array.isArray(e.series))return null;let r=[];for(let s of e.series){if(typeof s!="object"||s===null)return null;let a=s,l=VI(a.points);if(l===null||l.length!==n.length)return null;r.push({label:typeof a.label=="string"?a.label:"",points:l})}if(r.length===0||r.length*n.length>2e4||n.length>2e3)return null;let o=BI(e.kind),i=e.title;return typeof i=="string"?{kind:o,title:i,labels:n,series:r}:{kind:o,labels:n,series:r}}var Qa="render_chart";function ZI(t){let e=Wr(t);return e===null?null:Ko(e)}function WI(t){let e=Wr(t);return e!==null&&e.labels.length>0&&e.series.length>0}var qI="chart not rendered: expected labels (strings) and series, each with one finite number per label";function fE(){return{name:Qa,description:"Show a chart in the conversation. Supply the data and the page draws it. Every series must have exactly one point per label.",parameters:{type:"object",properties:{kind:{type:"string",enum:["bar","line","pie","scatter","stacked"]},title:{type:"string"},labels:{type:"array",items:{type:"string"}},series:{type:"array",items:{type:"object",properties:{label:{type:"string"},points:{type:"array",items:{type:"number"}}},required:["points"]}}},required:["labels","series"],"x-summary":"Draw a chart"},handler:t=>WI(t)?"chart rendered":qI,render:ZI}}function fn(t){t.style.height="auto",t.style.height=`${t.scrollHeight}px`}function el(t,e,n){let r=document.createElement("slot");return r.name=t,r.className=e,r.innerHTML=n,r}function mE(t){let{input:e,send:n,attachButton:r,fileInput:o,strings:i,signal:s}=t,a=t.queuedRow;a.className="queued",a.setAttribute("part","queued"),a.setAttribute("role","group"),a.setAttribute("aria-label",i.queued),a.hidden=!0;let l=document.createElement("div");l.className="input-row",l.setAttribute("part","composer");let d=document.createElement("div");d.className="composer",d.setAttribute("part","composer-surface");let c=document.createElement("div");c.className="composer-tools",c.setAttribute("part","composer-tools"),e.className="input",e.setAttribute("part","input"),e.setAttribute("aria-label",i.message),e.rows=1,e.placeholder=i.inputPlaceholder,e.addEventListener("keydown",t.onKeydown,{signal:s}),e.addEventListener("input",t.onInput,{signal:s}),n.className="send",n.type="button",n.setAttribute("part","send"),n.replaceChildren(el("icon-send","send-send",$f),el("icon-stop","send-stop",Uf)),n.title=i.send,n.setAttribute("aria-label",i.send),n.dataset.state="idle",n.addEventListener("click",t.onSend,{signal:s});let h=t.hint;return h.className="skill-hint",h.setAttribute("part","skill-hint"),h.hidden=!0,r.className="attach-btn",r.type="button",r.setAttribute("part","attach-button"),r.replaceChildren(el("icon-attach","attach-glyph",Hf)),r.title=i.attachFiles,r.setAttribute("aria-label",i.attachFiles),r.hidden=!0,r.addEventListener("click",()=>o.click(),{signal:s}),o.className="attach-input",o.type="file",o.multiple=!0,o.hidden=!0,o.addEventListener("change",t.onFilesPicked,{signal:s}),t.attachSlot.className="attachment-slot",t.voiceSlot.className="voice-slot",c.append(r,t.voiceSlot,t.place,n),d.append(e,c),l.append(d,o),l}function tp(t,e){return new Promise((n,r)=>{if(e.signal?.aborted===!0){r(new Error("upload cancelled"));return}let o=new FormData;o.append("file",t);let i=new XMLHttpRequest;i.open("POST",e.url),i.withCredentials=e.credentials==="include";for(let[l,d]of Object.entries(e.headers??{}))i.setRequestHeader(l,d);let s=e.onProgress;s!==void 0&&i.upload.addEventListener("progress",l=>{l.lengthComputable&&s(l.total===0?0:l.loaded/l.total)}),i.addEventListener("load",()=>{if(i.status>=200&&i.status<300)try{n(YI(JSON.parse(i.responseText)))}catch{r(new Error("upload returned an unreadable response"))}else r(new Error(KI(i)))}),i.addEventListener("error",()=>r(new Error("upload failed"))),i.addEventListener("abort",()=>r(new Error("upload cancelled")));let a=e.signal;a!==void 0&&a.addEventListener("abort",()=>i.abort()),i.send(o)})}function YI(t){if(typeof t!="object"||t===null)throw new Error("not an object");let e=t,n=e.id,r=e.name,o=e.mime,i=e.size,s=e.url;if(typeof n!="string"||typeof r!="string"||typeof o!="string"||typeof i!="number")throw new Error("missing fields");return typeof s=="string"?{id:n,name:r,mime:o,size:i,url:s}:{id:n,name:r,mime:o,size:i}}function KI(t){try{let e=JSON.parse(t.responseText);if(typeof e.error=="string")return e.error}catch{}return`upload failed (${t.status})`}function tl(t){let e=document.createElement("div");e.className="attachment-chips",e.setAttribute("part","attachment-chips");for(let n of t)e.appendChild(XI(n));return e}function XI(t){let e=document.createElement("div");e.className="attachment-chip attachment-chip--ready",e.setAttribute("part","attachment-chip");let n=document.createElement("span");n.className="attachment-chip-icon",n.setAttribute("part","attachment-chip-icon"),n.innerHTML=np(t.mime),n.setAttribute("aria-hidden","true");let r=document.createElement("span");r.className="attachment-chip-name",r.setAttribute("part","attachment-chip-name"),r.textContent=t.name,r.title=t.name;let o=document.createElement("span");return o.className="attachment-chip-size",o.setAttribute("part","attachment-chip-size"),o.textContent=nl(t.size),e.append(n,r,o),e}function np(t){return t.startsWith("image/")?cm:t==="application/pdf"?um:t.startsWith("text/")?hm:dm}function nl(t){if(t<1024)return`${t} B`;let e=["KB","MB","GB"],n=t/1024,r=0;for(;n>=1024&&r<e.length-1;)n/=1024,r+=1;return`${n<10?Math.round(n*10)/10:Math.round(n)} ${e[r]}`}var rl=class{element;#e;#t;#n=[];constructor(e){this.#e=e,this.#t=e.strings??ve,this.element=document.createElement("div"),this.element.className="attachment-tray",this.element.setAttribute("part","attachment-tray"),this.element.hidden=!0}add(e){let n={localId:Ie(),file:e,status:dt.UPLOADING,progress:0,ref:null,error:"",controller:null};this.#n.push(n);let r=this.#r(e);if(r!==null){n.status=dt.ERROR,n.error=r,this.#s(),this.#e.onChange?.();return}this.#s(),this.#e.onChange?.(),this.#o(n)}readyRefs(){let e=[];for(let n of this.#n)n.ref!==null&&e.push(n.ref);return e}hasPending(){return this.#n.some(e=>e.status===dt.UPLOADING)}pendingCount(){return this.#n.filter(e=>e.status===dt.UPLOADING).length}isEmpty(){return this.#n.length===0}clearReady(){this.#n=this.#n.filter(e=>e.status===dt.UPLOADING),this.#s()}clear(){for(let e of this.#n)e.controller?.abort();this.#n=[],this.#s()}dispose(){for(let e of this.#n)e.controller?.abort()}#r(e){return this.#e.maxBytes>0&&e.size>this.#e.maxBytes?F(this.#t.tooLarge,{size:nl(this.#e.maxBytes)}):JI(this.#e.accept,e)?null:this.#t.fileTypeNotAllowed}#o(e){let n=this.#r(e.file);if(n!==null){e.status=dt.ERROR,e.error=n,this.#s(),this.#e.onChange?.();return}e.status=dt.UPLOADING,e.progress=0,e.error="";let r=new AbortController;e.controller=r,this.#s(),this.#e.upload(e.file,o=>{e.progress=o,this.#s()},r.signal).then(o=>{e.status=dt.READY,e.ref=o}).catch(o=>{e.status=dt.ERROR,e.error=o instanceof Error?o.message:this.#t.uploadFailed}).finally(()=>{e.controller=null,this.#s(),this.#e.onChange?.()})}#i(e){e.controller?.abort(),this.#n=this.#n.filter(n=>n!==e),this.#s(),this.#e.onChange?.()}#s(){this.element.replaceChildren(),this.element.hidden=this.#n.length===0;for(let e of this.#n)this.element.appendChild(this.#a(e))}#a(e){let n=document.createElement("div");n.className=`attachment-chip attachment-chip--${e.status}`,n.setAttribute("part","attachment-chip");let r=document.createElement("span");r.className="attachment-chip-icon",r.setAttribute("part","attachment-chip-icon"),r.innerHTML=np(e.file.type),r.setAttribute("aria-hidden","true");let o=document.createElement("span");o.className="attachment-chip-name",o.setAttribute("part","attachment-chip-name"),o.textContent=e.file.name,o.title=e.file.name;let i=document.createElement("span");if(i.className="attachment-chip-size",i.setAttribute("part","attachment-chip-size"),i.textContent=e.status===dt.ERROR?e.error:nl(e.file.size),n.append(r,o,i),e.status===dt.UPLOADING){let a=document.createElement("div");a.className="attachment-chip-bar",a.setAttribute("part","attachment-chip-bar");let l=document.createElement("div");l.className="attachment-chip-bar-fill",l.setAttribute("part","attachment-chip-bar-fill"),l.style.width=`${Math.round(e.progress*100)}%`,a.appendChild(l),n.appendChild(a)}if(e.status===dt.ERROR){let a=document.createElement("button");a.type="button",a.className="attachment-chip-retry",a.setAttribute("part","attachment-chip-retry"),a.title=this.#t.retry,a.setAttribute("aria-label",this.#t.retryUpload),a.textContent="\u21BB",a.addEventListener("click",()=>this.#o(e)),n.appendChild(a)}let s=document.createElement("button");return s.type="button",s.className="attachment-chip-remove",s.setAttribute("part","attachment-chip-remove"),s.title=this.#t.remove,s.setAttribute("aria-label",this.#t.removeAttachment),s.textContent="\u2715",s.addEventListener("click",()=>this.#i(e)),n.appendChild(s),n}};function JI(t,e){let n=Zr(t).map(i=>i.toLowerCase());if(n.length===0)return!0;let r=e.type.toLowerCase(),o=e.name.toLowerCase();return n.some(i=>i.startsWith(".")?o.endsWith(i):i.endsWith("/*")?r.startsWith(i.slice(0,-1)):r===i)}var ol=class{#e;#t=null;constructor(e){this.#e=e}get tray(){return this.#t}wire(e){this.#t?.element.remove(),this.#t=null;let n=this.#e.element.getAttribute("data-attachments-url"),r=this.#e.uploadHandler()??this.#n(n);if(r===null)return;let o=this.#e.element.getAttribute("data-attachment-accept")??"",i=new rl({upload:r,maxBytes:this.#r(),accept:o,strings:this.#e.strings(),onChange:()=>this.#l(i)});this.#t=i,this.#e.slot.appendChild(this.#t.element),this.#e.fileInput.accept=o,this.#e.button.hidden=!1,this.#o(e),this.#a(i,e)}attach(e){return this.#t===null?!1:(this.#t.add(e),!0)}onFilesPicked(){let e=this.#e.fileInput,n=e.files;if(n!==null)for(let r of Array.from(n))this.#t?.add(r);e.value=""}#n(e){return e===null?null:(n,r,o)=>nt(this.#e.headersFor(e),i=>tp(n,{url:e,headers:i,...this.#e.credentialsOption(),onProgress:r,signal:o}))}#r(){let e=this.#e.element.getAttribute("data-attachment-max-bytes");if(e===null)return uc;let n=Number.parseInt(e,10);return Number.isFinite(n)&&n>=0?n:uc}#o(e){let n=this.#e.chat;n.addEventListener("dragover",r=>{r.preventDefault(),n.classList.add("chat--dragover")},{signal:e}),n.addEventListener("dragleave",()=>{n.classList.remove("chat--dragover")},{signal:e}),n.addEventListener("drop",r=>{r.preventDefault(),n.classList.remove("chat--dragover");let o=r.dataTransfer?.files;if(o!==void 0)for(let i of Array.from(o))this.#t?.add(i)},{signal:e})}#i(e,n,r){let o=this.#s(),i=n.getData("text/plain");o===null||i.length<o||(e.preventDefault(),r.add(new File([i],`pasted-${gE()}.txt`,{type:"text/plain"})))}#s(){let e=this.#e.element.getAttribute("data-paste-attach");if(e===null)return Di;if(e==="off")return null;let n=Number.parseInt(e,10);return Number.isNaN(n)||n<=0?(console.warn(`<ag-ui-chat>: data-paste-attach="${e}" is neither "off" nor a positive number of characters, so the default of ${Di} is used.`),Di):n}#a(e,n){this.#e.chat.addEventListener("paste",r=>{let o=r.clipboardData??null;if(o===null)return;let i=Array.from(o.files);if(i.length===0){this.#i(r,o,e);return}o.getData("text/plain")===""&&r.preventDefault();for(let s of i)this.#t?.add(QI(s))},{signal:n})}#l(e){this.#e.element.dispatchEvent(new CustomEvent(ec,{detail:{attachments:e.readyRefs(),pending:e.pendingCount()},bubbles:!0,composed:!0}))}};function gE(){return new Date().toISOString().replace(/[:.]/g,"-")}function QI(t){if(t.name!=="")return t;let e=t.type.split("/")[1]??t.type,n=gE();return new File([t],e===""?`pasted-${n}`:`pasted-${n}.${e}`,{type:t.type})}async function rp(t,e){let n=new FormData;n.append("audio",t,"recording.webm");let r=await fetch(e.url,Ge({method:"POST",headers:{...e.headers??{}},body:n},e.credentials));if(!r.ok)throw new Error(await eC(r));let o=await r.json();if(typeof o=="object"&&o!==null&&typeof o.text=="string")return o.text;throw new Error("transcription returned an unreadable response")}async function eC(t){try{let e=await t.json();if(typeof e.error=="string")return e.error}catch{}return`transcription failed (${t.status})`}var vE=12e4,il=class{element;#e;#t;#n;#r="idle";#o=null;#i=null;#s=[];#a=null;#l=!1;#d=!1;#c={};constructor(e){this.#e=e.transcribe,this.#t=e.onText,this.#n=e.strings??ve,this.element=document.createElement("button"),this.element.type="button",this.element.className="voice-btn",this.element.setAttribute("part","voice-button");let n=document.createElement("slot");n.name="icon-voice",n.innerHTML=Ff,this.element.append(n),this.#b("idle"),this.element.addEventListener("click",()=>{this.toggle()})}async toggle(){if(this.#r==="recording"){this.#p();return}this.#r!=="transcribing"&&await this.#f()}async#f(){let e={};this.#c=e;let n;try{n=await navigator.mediaDevices.getUserMedia({audio:!0})}catch{n=null}if(e!==this.#c||this.#d){for(let o of n?.getTracks()??[])o.stop();return}if(n===null){this.#v(this.#n.transcriptionFailed);return}this.#i=n,this.#s=[],this.#l=!1;let r;try{r=new MediaRecorder(n),r.addEventListener("dataavailable",o=>{this.#s.push(o.data)}),r.addEventListener("stop",()=>{this.#u(r.mimeType)}),this.#o=r,r.start()}catch{this.#v(this.#n.transcriptionFailed);return}this.#a=setTimeout(()=>{this.#l=!0,this.#p()},vE),this.#b("recording")}#p(){this.#g(),this.#o?.stop()}#g(){this.#a!==null&&(clearTimeout(this.#a),this.#a=null)}dispose(){this.#d=!0,this.#g(),this.#o!==null&&this.#o.state!=="inactive"&&this.#o.stop(),this.#o=null,this.#m()}async#u(e){if(this.#d)return;this.#m(),this.#b("transcribing");let n=new Blob(this.#s,{type:e||"audio/webm"});try{let r=await this.#e(n);if(this.#d)return;this.#b("idle"),this.#l&&(this.element.title=F(this.#n.recordingLimit,{n:vE/6e4})),r!==""&&this.#t(r)}catch(r){this.#v(r instanceof Error?r.message:this.#n.transcriptionFailed)}finally{this.#o=null}}#m(){for(let e of this.#i?.getTracks()??[])e.stop();this.#i=null}#v(e){this.#d||(this.#m(),this.#o=null,this.#b("idle"),this.element.title=e)}#b(e){this.#r=e,this.element.dataset.state=e;let n=this.#x(e);this.element.title=n,this.element.setAttribute("aria-label",n),this.element.setAttribute("aria-pressed",String(e==="recording")),this.element.disabled=e==="transcribing"}#x(e){return e==="recording"?this.#n.stopRecording:e==="transcribing"?this.#n.transcribing:this.#n.recordVoice}};var sl=class{#e;#t=null;constructor(e){this.#e=e}wire(){this.#t?.element.remove(),this.#t=null;let e=this.#e.element.getAttribute("data-transcribe-url"),n=this.#e.transcribeHandler()??this.#n(e);n!==null&&(this.#t=new il({transcribe:n,onText:r=>this.#r(r),strings:this.#e.strings()}),this.#e.slot.appendChild(this.#t.element))}dispose(){this.#t?.dispose()}#n(e){return e===null?null:n=>nt(this.#e.headersFor(e),r=>rp(n,{url:e,headers:r,...this.#e.credentialsOption()}))}#r(e){let n=this.#e.input,r=n.value.trim();n.value=r===""?e:`${r} ${e}`,this.#e.onInput(),n.focus()}};var al=class{chips;palette;#e;#t=[];#n=!1;#r=!1;#o=[];#i=0;#s=null;constructor(e){this.#e=e,this.chips=document.createElement("div"),this.chips.className="skill-chips",this.chips.setAttribute("part","skill-chips"),this.chips.hidden=!0,this.palette=document.createElement("div"),this.palette.className="skill-palette",this.palette.setAttribute("part","skill-palette"),this.palette.setAttribute("role","listbox"),this.palette.hidden=!0}setSkills(e){this.#t=e,this.#f()}enableChips(e){this.#n=e,this.#f()}enableSlash(e){this.#r=e}setManage(e,n){this.#s=e===null?null:{label:e,onManage:n}}isOpen(){return!this.palette.hidden}onInput(e){this.#r&&e.startsWith("/")?this.#a(e.slice(1)):this.close()}onKeydown(e){return this.isOpen()?e.key==="ArrowDown"?(this.#l(1),!0):e.key==="ArrowUp"?(this.#l(-1),!0):e.key==="Escape"?(this.close(),!0):e.key==="Enter"?this.#i===this.#o.length?(this.#c(),!0):(this.#o.slice(this.#i,this.#i+1).forEach(n=>{this.#d(n)}),!0):!1:!1}close(){this.palette.hidden=!0,this.palette.replaceChildren()}#a(e){let n=e.trim().toLowerCase(),r=this.#t.filter(o=>o.name.toLowerCase().includes(n)||o.title.toLowerCase().includes(n));if(r.length===0&&(this.#s===null||n!=="")){this.close();return}this.#o=r,this.#i=0,this.#p(),this.palette.hidden=!1}#l(e){let n=this.#o.length+(this.#s===null?0:1);this.#i=(this.#i+e+n)%n,this.#p()}#d(e){this.close(),this.#e(e)}#c(){let e=this.#s;this.close(),e.onManage()}#f(){this.chips.replaceChildren();let e=this.#n?this.#t.filter(n=>n.chip===!0):[];this.chips.hidden=e.length===0;for(let n of e){let r=document.createElement("button");r.type="button",r.className="skill-chip",r.setAttribute("part","skill-chip"),r.textContent=n.title,r.title=`/${n.name}`,r.addEventListener("click",()=>this.#d(n)),this.chips.appendChild(r)}}#p(){if(this.palette.replaceChildren(),this.#o.forEach((e,n)=>{let r=document.createElement("button");r.type="button",r.className="skill-item",r.setAttribute("part","skill-item"),r.setAttribute("role","option"),r.setAttribute("aria-selected",n===this.#i?"true":"false");let o=document.createElement("span");o.className="skill-item-title",o.setAttribute("part","skill-item-title");let i=document.createElement("code");if(i.className="skill-item-token",i.setAttribute("part","skill-item-token"),i.textContent=`/${e.name}`,o.append(i,document.createTextNode(` ${e.title}`)),r.appendChild(o),e.description!==void 0){let s=document.createElement("span");s.className="skill-item-desc",s.setAttribute("part","skill-item-desc"),s.textContent=e.description,r.appendChild(s)}r.addEventListener("click",()=>this.#d(e)),this.palette.appendChild(r)}),this.#s!==null){let e=document.createElement("button");e.type="button",e.className="skill-item skill-item--manage",e.setAttribute("part","skill-item skill-manage"),e.setAttribute("role","option");let n=this.#i===this.#o.length;e.setAttribute("aria-selected",n?"true":"false"),e.textContent=this.#s.label,e.addEventListener("click",()=>this.#c()),this.palette.appendChild(e)}}};function ll(t,e,n){t.hidden=!1;let r=e.top-n.top,o=r<6+t.offsetHeight;t.dataset.below=String(o),t.style.top=`${o?e.bottom-n.top+6:r-6}px`;let i=t.offsetWidth/2,s=e.left+e.width/2-n.left;t.style.left=`${Math.min(Math.max(s,i),n.width-i)}px`}var tC=500;function Xo(t,e=[],n){for(let r of hC(e)){if(!t.contains(r.startContainer)||!t.contains(r.endContainer))continue;let o=document.createRange();o.setStart(r.startContainer,r.startOffset),o.setEnd(r.endContainer,r.endOffset);let i=iC(o).trim();if(i!=="")return{text:i,rect:uC(o,n)}}return null}function op(t){let e=nC(t);return e.length===0?"":`${oC(e.join(`
`)).split(`
`).map(o=>`> ${o}`.trimEnd()).join(`
`)}

`}function nC(t){let e=t.split(/\r\n?|\n/).map(i=>i.trimEnd()),n=e.filter(i=>i!=="").map(rC),r=n.length===0?0:Math.min(...n),o=[];for(let i of e){let s=i.slice(r);s===""&&(o.length===0||o[o.length-1]==="")||o.push(s)}for(;o[o.length-1]==="";)o.pop();return o}function rC(t){return t.length-t.trimStart().length}function oC(t){return t.length>500?`${t.slice(0,500).trimEnd()}...`:t}function iC(t){let e="";for(let n of dC(t)){let r=n.parentElement;if(!cC(r))continue;let o=n===t.startContainer?t.startOffset:0,i=n===t.endContainer?t.endOffset:n.data.length;e+=sC(n.data.slice(o,i),r)}return e}function sC(t,e){return aC.has(lC(e))?t:t.replace(/[^\S\n]*\n[^\S\n]*/g,`
`).replace(/[^\S\n]+/g," ")}var aC=new Set(["pre","pre-wrap","break-spaces"]);function lC(t){return window.getComputedStyle(t).whiteSpace}function dC(t){let e=t.commonAncestorContainer;if(e.nodeType===Node.TEXT_NODE)return[e];let n=[],r=document.createTreeWalker(e,NodeFilter.SHOW_TEXT);for(let o=r.nextNode();o!==null;o=r.nextNode())t.intersectsNode(o)&&n.push(o);return n}function cC(t){return typeof t.checkVisibility!="function"?!0:t.checkVisibility({contentVisibilityAuto:!0,opacityProperty:!0,visibilityProperty:!0})}function uC(t,e){let n=[...t.getClientRects()];if(n.length===0)return t.getBoundingClientRect();if(e===void 0)return n[0];let r=n[0],o=bE(r,e);for(let i of n.slice(1)){let s=bE(i,e);s<o&&(o=s,r=i)}return r}function bE(t,e){let n=Math.max(t.left-e.x,0,e.x-t.right),r=Math.max(t.top-e.y,0,e.y-t.bottom);return Math.hypot(n,r)}function hC(t){let e=window.getSelection();if(e===null)return[];let n=[...pC(e,t)];return e.rangeCount>0&&n.push(e.getRangeAt(0)),n}function pC(t,e){let n=t.getComposedRanges;if(n===void 0)return[];try{return n.call(t,{shadowRoots:e})}catch{return n.call(t,...e)}}var fC=`
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
`;function ip(t){let{within:e,exclude:n,onQuote:r}=t,o=new CSSStyleSheet;o.replaceSync(fC),document.adoptedStyleSheets=[...document.adoptedStyleSheets,o];let i=document.createElement("button");i.type="button",i.className="ag-ui-quote-offer",i.textContent=t.label,i.hidden=!0,document.body.append(i);let s="",a=()=>{i.hidden=!0,s=""},l=c=>{if(c.composedPath().includes(n)){a();return}if(mC()){a();return}let h=c instanceof MouseEvent?{x:c.clientX,y:c.clientY}:void 0,p=Xo(e,[],h);if(p===null){a();return}s=p.text,ll(i,p.rect,{top:0,left:0,width:document.documentElement.clientWidth})},d=c=>{i.contains(c.target)||a()};return e.addEventListener("mouseup",l),e.addEventListener("keyup",l),e.addEventListener("mousedown",d),document.addEventListener("scroll",a,!0),window.addEventListener("resize",a),i.addEventListener("mousedown",c=>{c.preventDefault()}),i.addEventListener("click",()=>{let c=s;window.getSelection()?.removeAllRanges(),a(),r(c)}),{element:i,detach(){e.removeEventListener("mouseup",l),e.removeEventListener("keyup",l),e.removeEventListener("mousedown",d),document.removeEventListener("scroll",a,!0),window.removeEventListener("resize",a),i.remove(),document.adoptedStyleSheets=document.adoptedStyleSheets.filter(c=>c!==o)}}}function mC(){let t=document.activeElement;return t===null?!1:t.tagName==="INPUT"||t.tagName==="TEXTAREA"||t.isContentEditable===!0}var dl=class{button=document.createElement("button");#e;#t="";#n=null;constructor(e){this.#e=e}insert(e){let n=op(e);if(n==="")return;let r=this.#e.input,o=r.value.replace(/\s+$/,"");r.value=o===""?n:`${o}

${n}`,this.#e.autoGrow(),r.focus();let i=r.value.length;r.setSelectionRange(i,i)}offerInPage(e){this.#n?.detach();let n=ip({within:e,label:this.#e.strings().quoteSelection,exclude:this.#e.element,onQuote:r=>this.#e.quote(r)});return this.#n=n,()=>{n.detach(),this.#n===n&&(this.#n=null)}}detachPageOffer(){this.#n?.detach(),this.#n=null}mount(e){let n=this.button;n.className="quote-selection",n.type="button",n.setAttribute("part","quote-selection"),n.textContent=this.#e.strings().quoteSelection,n.hidden=!0,n.addEventListener("mousedown",o=>{o.preventDefault()},{signal:e}),n.addEventListener("click",()=>{this.#e.quote(this.#t),window.getSelection()?.removeAllRanges(),this.#i()},{signal:e});let r=this.#e.messages;r.addEventListener("mouseup",o=>this.#o(o),{signal:e}),r.addEventListener("keyup",()=>this.#o(),{signal:e}),r.addEventListener("mousedown",()=>this.#i(),{signal:e})}#r(){return this.#e.element.getAttribute("data-quote-selection")!=="false"}#o(e){if(!this.#r())return;let n=e===void 0?void 0:{x:e.clientX,y:e.clientY},r=Xo(this.#e.messages,[this.#e.root],n);if(r===null){this.#i();return}this.#t=r.text,ll(this.button,r.rect,this.#e.messagesWrap.getBoundingClientRect())}#i(){this.button.hidden=!0,this.#t=""}};function Jo(t,e=Date.now(),n=ve){if(!Number.isFinite(t))return n.justNow;let r=Math.round((e-t)/1e3);if(r<60)return n.justNow;let o=Math.round(r/60);if(o<60)return F(n.minutesAgo,{n:o});let i=Math.round(o/60);if(i<24)return F(n.hoursAgo,{n:i});let s=Math.round(i/24);return s<7?F(n.daysAgo,{n:s}):F(n.weeksAgo,{n:Math.round(s/7)})}function cl(t){let e=t.activeElement;if(e!==null)return e;let n=document.activeElement;for(;n?.shadowRoot?.activeElement;)n=n.shadowRoot.activeElement;return n===document.body?null:n}function yE(t){return t.preview!==void 0&&t.preview!==null&&t.preview!==""?t.preview:null}function wE(t){return t.replace(/\s+/g," ").trim()}var Qo=class{element;#e;#t;#n;#r=null;#o=null;#i;#s=[];constructor(e,n=ve){this.#e=e,this.#i=n,this.element=document.createElement("div"),this.element.className="checkpoints",this.element.setAttribute("part","checkpoints"),this.element.setAttribute("role","dialog"),this.element.setAttribute("aria-label",n.checkpoints),this.element.tabIndex=-1,this.element.hidden=!0;let r=document.createElement("div");r.className="checkpoints-header",r.setAttribute("part","checkpoints-header"),this.#n=document.createElement("span"),this.#n.className="checkpoints-title",this.#n.setAttribute("part","checkpoints-title"),this.#n.textContent=n.checkpoints,r.append(this.#n),this.#t=document.createElement("div"),this.#t.className="checkpoints-list",this.#t.setAttribute("part","checkpoints-list"),this.element.append(r,this.#t),this.element.addEventListener("keydown",o=>this.#c(o))}setRuns(e){this.#s=e,this.#f()}setRelativeTimeFormatter(e){this.#o=e}#a(e){return this.#o!==null?this.#o(e):Jo(e,Date.now(),this.#i)}setStrings(e){this.#i=e,this.element.setAttribute("aria-label",e.checkpoints),this.#n.textContent=e.checkpoints,this.#f()}open(){this.open_||(this.#r=cl(this.element.getRootNode()),this.element.hidden=!1,(this.#d()[0]??this.element).focus())}close(){this.open_&&(this.element.hidden=!0,this.#r?.focus(),this.#r=null)}#l(){return this.element.getRootNode().activeElement}#d(){return Array.from(this.element.querySelectorAll("button, [tabindex]")).filter(e=>!e.hidden)}#c(e){if(e.key==="Escape"){e.stopPropagation(),this.close();return}if(e.key!=="Tab")return;let n=this.#d(),r=n[0],o=n[n.length-1],i=this.#l();e.shiftKey&&i===r?(e.preventDefault(),o?.focus()):!e.shiftKey&&i===o&&(e.preventDefault(),r?.focus())}get open_(){return!this.element.hidden}#f(){if(this.#t.replaceChildren(),this.#s.length===0){let n=document.createElement("div");n.className="checkpoints-empty",n.setAttribute("part","checkpoints-empty"),n.textContent=this.#i.noCheckpoints,this.#t.append(n);return}let e=this.#p();for(let n of this.#s)this.#t.append(this.#g(n,e))}#p(){let e=new Set,n=new Set;for(let r of this.#s){let o=yE(r);if(o===null)continue;let i=wE(o);e.has(i)&&n.add(i),e.add(i)}return n}#g(e,n){let r=document.createElement("div");r.className="checkpoint-row",r.setAttribute("part","checkpoint-row");let o=yE(e),i=e.started_at===null?null:this.#a(Date.parse(e.started_at)),s=document.createElement("span");if(s.className="checkpoint-label",s.setAttribute("part","checkpoint-label"),s.textContent=o??i??e.run_id,r.append(s),o!==null&&i!==null){let d=document.createElement("span");d.className="checkpoint-time",d.setAttribute("part","checkpoint-time"),d.textContent=i,r.append(d)}if((o===null?i!==null:n.has(wE(o)))&&e.run_id!==""){let d=document.createElement("span");d.className="checkpoint-id",d.setAttribute("part","checkpoint-id"),d.textContent=e.run_id.slice(0,8),d.title=e.run_id,r.append(d)}if(e.parent_run_id!==null){let d=document.createElement("span");d.className="checkpoint-branch",d.setAttribute("part","checkpoint-branch"),d.textContent=this.#i.forkedRun,d.title=e.parent_run_id,r.append(d)}let l=document.createElement("span");return l.className="checkpoint-actions",l.setAttribute("part","checkpoint-actions"),l.append(this.#u(e.run_id,"resume",this.#i.resumeRun),this.#u(e.run_id,"fork",this.#i.forkRun)),r.append(l),r}#u(e,n,r){let o=document.createElement("button");return o.type="button",o.className=`checkpoint-action checkpoint-${n}`,o.setAttribute("part",`checkpoint-action checkpoint-${n}`),o.textContent=r,o.addEventListener("click",()=>{this.close(),this.#e(e,n)}),o}};function sp(t){let e=qa(t,"attachments");return Array.isArray(e)?e.filter(gC):[]}function gC(t){if(typeof t!="object"||t===null)return!1;let e=t;return typeof e.id=="string"&&typeof e.name=="string"&&typeof e.mime=="string"&&typeof e.size=="number"&&(e.url===void 0||typeof e.url=="string")}var ei=class{#e;#t;#n;#r;constructor(e,n=()=>({}),r=()=>{},o=()=>!1){this.#e=e.endsWith("/")?e:`${e}/`,this.#t=n,this.#n=r,this.#r=o}async list(){try{let e=await rt(this.#t(),this.#t,r=>fetch(this.#e,Ge({method:"GET",headers:{Accept:"application/json",...r}},this.#n())),this.#r());return e.ok?(await e.json()).runs??[]:[]}catch{return[]}}async continuable(){return(await this.list()).filter(e=>e.continuable)}resumeUrl(e){return this.#o("resume",e)}forkUrl(e){return this.#o("fork",e)}#o(e,n){return`${this.#e.slice(0,-5)}${e}/${encodeURIComponent(n)}/`}};function ti(t){return t===st.FAILED?Q.ERROR:t===st.DENIED?Q.DECLINED:t===st.INTERRUPTED?Q.INTERRUPTED:Q.DONE}var EE="wake";function ap(t){let e=Object(t).origin;return typeof e=="string"?e:null}function ul(t){let e=ap(t);if(e!=="task_output"&&e!=="task_question")return null;let n=Object(Object(t).task);return typeof n.body!="string"?null:{origin:e,agentName:typeof n.agentName=="string"?n.agentName:"",threadId:typeof n.threadId=="string"?n.threadId:"",body:n.body,outcome:typeof n.outcome=="string"?n.outcome:null}}function hl(t,e){let n=document.createElement("div");n.className="child-report",n.setAttribute("part","child-report"),n.setAttribute("data-origin",t.origin),t.outcome!==null&&n.setAttribute("data-outcome",t.outcome);let r={agent:t.agentName},o=document.createElement("div");o.className="child-report-title",o.textContent=F(t.origin==="task_output"?e.childReport:e.childQuestion,r);let i=document.createElement("div");if(i.className="child-report-body",i.textContent=t.body,n.append(o,i),t.threadId!==""){let s=document.createElement("button");s.type="button",s.className="child-report-link",s.setAttribute("part","child-report-link"),s.setAttribute("data-thread-id",t.threadId),s.setAttribute("data-agent-id",t.agentName),s.textContent=F(e.childSessionOpen,r),n.append(s)}return n}function pl(t,e){let n=Object(t);if(n.model_fallback!==!0||typeof n.model_id!="string"||n.model_id==="")return null;let r=document.createElement("p");return r.className="answered-by-model",r.setAttribute("part","answered-by-model"),r.textContent=F(e.answeredByModel,{model:n.model_id}),r}function fl(t,e,n){let r=yC(t,e);if(r.length===0)return null;let o=document.createElement("details");o.className="citations",o.setAttribute("part","citations");let i=document.createElement("summary");i.className="citations-summary",i.textContent=n.citations.replace("{count}",String(r.length));let s=document.createElement("ol");s.className="citation-list";for(let a of r)s.append(vC(a,n));return o.append(i,s),o}function vC(t,e){let n=document.createElement("li");if(n.className="citation",t.quote!==null){let r=document.createElement(t.quote.kind==="marker"?"code":"q");r.className=`citation-anchor citation-anchor--${t.quote.kind}`,r.textContent=t.quote.text,n.append(r)}for(let r of t.sources)n.append(bC(r,e));return n}function bC(t,e){let n=document.createElement("div");if(n.className="citation-source",t.href===null){let r=document.createElement("span");r.className="citation-title",r.textContent=t.label===""?e.citationDocument:t.label,n.append(r)}else{let r=document.createElement("a");r.className="citation-title",r.href=t.href,r.target="_blank",r.rel="noopener noreferrer",r.textContent=t.label,n.append(r)}for(let r of t.excerpts){let o=document.createElement("blockquote");o.className="citation-excerpt",o.textContent=r,n.append(o)}return n}function yC(t,e){if(!Array.isArray(t))return[];let n=[];for(let r of t){let o=dp(r),i=Array.isArray(o?.sources)?o.sources.flatMap(s=>wC(s)??[]):[];i.length>0&&n.push({sources:i,quote:EC(o?.anchor,e)})}return n}function wC(t){let e=dp(t),n=lp(e?.title),r=Array.isArray(e?.excerpts)?e.excerpts.filter(o=>typeof o=="string"&&o.trim()!==""):[];if(e?.kind==="web"){let o=lp(e.url),i=xC(o);return o===""?null:{label:n===""?o:n,href:i,excerpts:r}}return e?.kind==="document"?{label:n===""?lp(e.document_id):n,href:null,excerpts:r}:null}function EC(t,e){let n=dp(t),r=n?.kind,o=n?.start,i=n?.end;if(r!=="content"&&r!=="marker"||!Number.isInteger(o)||!Number.isInteger(i)||o<0||o>=i||i>e.length)return null;let s=e.slice(o,i).trim();return s===""?null:{kind:r,text:s}}function xC(t){try{let e=new URL(t);return e.protocol==="http:"||e.protocol==="https:"?e.href:null}catch{return null}}function lp(t){return typeof t=="string"?t.trim():""}function dp(t){return typeof t=="object"&&t!==null&&!Array.isArray(t)?t:null}var ml=class{#e;#t="";#n=[];#r=0;#o=0;#i=null;#s=null;#a=null;#l=null;#d=null;constructor(e){this.#e=e}get threadId(){return this.#t}get restored(){return this.#n}get continuation(){return this.#a}adoptActiveThread(){this.#t=this.#e.conversationStore().threadId()}startThread(){this.#t=ja(this.#e.conversationStore())}stopContinuation(){this.#a?.cancel(),this.#a=null}forgetRestored(){this.#n=[],this.#r+=1,this.#o+=1,this.#c()}#c(){let e=this.#l;this.#l=null,e?.()}reapUnsent(){this.#e.conversationStore().isUnsent?.(this.#t)===!0&&this.#e.conversationStore().clear(this.#t)}runs(){let e=this.#e.element.getAttribute("data-runs-url");return e===null||e===""?null:(this.#s===null&&(this.#s=new ei(e,()=>this.#e.headersFor(e),()=>this.#e.requestCredentials(),()=>this.#e.retryUnauthorized())),this.#s)}openThreads(){this.#e.checkpoints.close(),this.refreshDrawer(),this.#e.drawer.open()}openCheckpoints(){this.#e.drawer.close(),this.#p(),this.#e.checkpoints.open()}switchThread(e){if(e===this.#t)return this.#d?.threadId===e?this.#d.done:Promise.resolve();let n=this.#t,r=this.#f(e,n).finally(()=>{this.#d===o&&(this.#d=null)}),o={threadId:e,done:r};return this.#d=o,r}async#f(e,n){this.#e.cancelRun(),this.#e.resetState(),this.#e.conversationStore().setActiveThread(e),this.#t=e,this.#e.setRunning(!1);try{await this.rehydrate("switch")}catch(r){throw this.#t===e&&(this.#t=n,this.#e.conversationStore().setActiveThread(n),await this.rehydrate(null).catch(()=>{})),r}}renameThread(e,n){this.#e.conversationStore().renameThread(e,n),this.refreshDrawer()}deleteThread(e){let n=e===this.#t;n&&this.#e.stopRun(),this.#e.conversationStore().clear(e),this.#e.threadDeleted(e),n&&(this.#e.resetState(),this.adoptActiveThread(),this.#e.setRunning(!1),this.#e.threadChanged(this.#t,"delete")),this.refreshDrawer()}async refreshDrawer(){this.#e.drawer.setRelativeTimeFormatter(this.#e.formatRelativeTime());let e=await this.#e.conversationStore().listThreads();this.#e.drawer.setThreads(e,this.#t),this.#e.threadsListed(e)}async#p(){let e=this.runs();this.#e.checkpoints.setRelativeTimeFormatter(this.#e.formatRelativeTime()),this.#e.checkpoints.setRuns(e===null?[]:await e.continuable())}async continueRun(e,n){let r=this.runs();if(r===null)return;if(this.#e.running()||this.#a!==null){let a=this.#e.strings();this.#g(this.#l===null?a.continueWhileRunning:a.continueWhileLoading);return}let o=this.#e.input.value.trim();if(o===""){this.#g(this.#e.strings().continueNeedsTurn);return}this.#e.recordTurn(o),this.#e.input.value="",this.#e.autoGrow();let i=this.#r,s=this.#e.buildClient({endpoint:n==="resume"?r.resumeUrl(e):r.forkUrl(e),initialMessages:[],follows:this.#e.client()?.messages??this.#n,onSaved:a=>{i===this.#r&&(this.#n=a,this.#e.releaseClient())}});this.#a=s;try{if(this.#e.announceTurn(o),this.#a!==s)return;await s.send(o)}finally{this.#a===s&&(this.#a=null,this.#e.continuationEnded())}}#g(e){this.#e.hint.textContent=e,this.#e.hint.hidden=!1,this.#e.input.focus()}async rehydrate(e){this.#o+=1;let n=this.#o,r=this.#t,o=this.#e.conversationStore();this.#i={generation:n,store:o,threadId:r};let i=o.loadCheckpoint(r),s=i===null&&o.isUnsent?.(r)!==!0,a=s?this.#e.runningOnServer(r):null,l=s?o.waitingInterrupts?.(r).then(SC,()=>cp)??null:null,d=i===null?new Promise(p=>{this.#l=p}):null,c=this.#l,h=this.#e.holdRun(d);try{this.#e.element.setAttribute("data-restoring","");let p;try{p=await o.loadMessages(r)}finally{n===this.#o&&this.#e.element.removeAttribute("data-restoring")}let m=cp;if(l!==null&&(m=await l),!this.#u(n)){this.#m(o,r,i);return}if(p!==null){let v=this.#e.strings().callNotFinished,E=Wa(p,x=>({id:Ie(),role:"tool",content:v,toolCallId:x,metadata:{outcome:st.INTERRUPTED}}),new Set(i===null?m.map(({toolCallId:x})=>x):[i.toolCallId]));this.#n=E;for(let x of E)if(this.replay(x),!this.#u(n)){this.#m(o,r,i);return}}let u=a!==null&&await a;if(!this.#u(n)){this.#m(o,r,i);return}if(i===null&&!u&&this.#b(r,p),e!==null&&this.#e.threadChanged(r,e),i!==null){if(!this.#u(n)){this.#m(o,r,i);return}await this.#w(i,n)}else u&&this.#u(n)?this.#e.reattach():m.length>0&&this.#u(n)&&this.#e.answerParked(m)}finally{h.release(),this.#l===c&&this.#c()}}#u(e){return e===this.#o&&this.#e.element.isConnected}#m(e,n,r){r!==null&&!this.#v(e,n)&&e.saveCheckpoint(n,null)}#v(e,n){let r=this.#i;return r?.generation===this.#o&&r.store===e&&r.threadId===n}#b(e,n){let r=n?.at(-1);if(r===void 0||r.role!==it.USER)return;let o=this.#e.listedStatus(e);o==="running"||o==="waiting"||this.#e.transcript.appendNotice("\u26A0",this.#e.strings().runInterrupted,"interrupted")}replay(e){if(e.subagentRunId!==void 0)return;let n=typeof e.content=="string"?e.content:"";if(e.role===it.USER){let r=e.metadata,o=ul(r);if(o!==null){this.#e.transcript.ensureGroup().append(hl(o,this.#e.strings())),this.#e.transcript.afterGrew();return}if(ap(r)===EE)return;let i=sp(e);if(n!==""||i.length>0){let s=this.#e.appendMessage(it.USER,n);i.length>0&&s.appendChild(tl(i))}return}if(e.role===it.ASSISTANT){if(n!==""){let r=this.#e.appendMessage(it.ASSISTANT,n);r.classList.add("message--restored");let o=pl(e.metadata,this.#e.strings());o!==null&&r.append(o);let i=fl(e.metadata?.citations,n,this.#e.strings());i!==null&&r.append(i);let s=e.id;this.#e.actions.attach(r,typeof s=="string"&&s!==""?{messageId:s}:{rateable:!1})}for(let r of _C(e.toolCalls)){let o={id:r.id,name:r.function.name,args:this.#x(r.function.arguments)};if(this.#e.transcript.noticeIfSkillLoad(o))continue;this.#e.transcript.setCardElement(o.id,this.#e.transcript.cardFor(o).element);let i=this.#e.tools.resolve(o.name)?.render;i!==void 0&&this.#e.transcript.renderToolOutput(i,o)}return}if(e.role==="activity"){let r=e;typeof r.activityType=="string"&&this.#e.activities.draw(e.id,r.activityType,r.content,!1);return}if(e.role==="tool"){let r=this.#e.transcript.card(e.toolCallId);if(r!==void 0){let o=Sr(e.content);r.settle(ti(qa(e,"outcome")),o,Object(e.metadata).answered_by),this.#e.childSessions.attach(r,o)}}}#x(e){if(typeof e!="string")return{};try{let n=JSON.parse(e);if(typeof n=="object"&&n!==null)return n}catch{}return{}}async#w(e,n){this.#e.conversationStore().saveCheckpoint(this.#t,null);let r=this.#e.ensureClient(),o=JSON.stringify(this.#e.navigationResult().call(this.#e.element,e));this.#u(n)&&(r.addToolResult(e.toolCallId,o),this.#e.transcript.card(e.toolCallId)?.settle(Q.DONE,o),await r.resume())}};function _C(t){return Array.isArray(t)?t.filter(TC):[]}function TC(t){if(typeof t!="object"||t===null)return!1;let e=t;return typeof e.id=="string"&&typeof e.function?.name=="string"}var cp=[];function SC(t){return t.every(n=>n.toolCallId!==void 0&&n.metadata?.kind==="approval")?t:cp}var kC=8,AC=1440*60*1e3,gl=class{element;#e;#t;#n;#r;#o;#i=null;#s;#a=[];#l="";#d;#c;#f="";#p="auto";#g=null;constructor(e,n=ve){this.#e=e,this.#s=n,this.element=document.createElement("div"),this.element.className="drawer",this.element.setAttribute("part","drawer"),this.element.hidden=!0;let r=document.createElement("div");r.className="drawer-backdrop",r.setAttribute("part","drawer-backdrop"),r.addEventListener("click",()=>this.close()),this.#t=document.createElement("div"),this.#t.className="drawer-panel",this.#t.setAttribute("part","drawer-panel"),this.#t.setAttribute("role","dialog"),this.#t.setAttribute("aria-modal","true"),this.#t.setAttribute("aria-label",n.chatHistory),this.#t.addEventListener("keydown",i=>this.#v(i));let o=document.createElement("div");o.className="drawer-header",o.setAttribute("part","drawer-header"),this.#n=document.createElement("span"),this.#n.className="drawer-title",this.#n.setAttribute("part","drawer-title"),this.#n.textContent=n.chats,this.#r=document.createElement("button"),this.#r.type="button",this.#r.className="drawer-new",this.#r.setAttribute("part","drawer-new"),this.#r.textContent=n.newChat,this.#r.addEventListener("click",()=>{this.close(),this.#e.onNew()}),this.#d=document.createElement("button"),this.#d.type="button",this.#d.className="drawer-close",this.#d.setAttribute("part","drawer-close"),this.#d.title=n.closeHistory,this.#d.setAttribute("aria-label",n.closeHistory),this.#d.append(document.createTextNode("\xD7")),this.#d.addEventListener("click",()=>this.close()),o.append(this.#n,this.#r,this.#d),this.#c=document.createElement("input"),this.#c.type="search",this.#c.className="drawer-filter",this.#c.setAttribute("part","drawer-filter"),this.#c.placeholder=n.searchConversations,this.#c.setAttribute("aria-label",n.searchConversations),this.#c.addEventListener("input",()=>{this.#f=this.#c.value.trim().toLowerCase(),this.#b()}),this.#o=document.createElement("div"),this.#o.className="drawer-list",this.#o.setAttribute("part","drawer-list"),this.#t.append(o,this.#c,this.#o),this.element.append(r,this.#t)}setRelativeTimeFormatter(e){this.#i=e}#u(e){return this.#i!==null?this.#i(e):Jo(e,void 0,this.#s)}setStrings(e){this.#s=e,this.#t.setAttribute("aria-label",e.chatHistory),this.#n.textContent=e.chats,this.#r.textContent=e.newChat,this.#d.title=e.closeHistory,this.#d.setAttribute("aria-label",e.closeHistory),this.#c.placeholder=e.searchConversations,this.#c.setAttribute("aria-label",e.searchConversations),this.#b()}isOpen(){return!this.element.hidden}open(){this.isOpen()||(this.#g=cl(this.element.getRootNode()),this.element.hidden=!1,this.#r.focus())}close(){this.isOpen()&&(this.element.hidden=!0,this.#g?.focus(),this.#g=null)}toggle(){this.isOpen()?this.close():this.open()}#m(){return this.element.getRootNode().activeElement}#v(e){if(e.key==="Escape"){e.preventDefault(),this.close();return}if(e.key!=="Tab")return;let n=Array.from(this.#t.querySelectorAll("button, input, [tabindex]")).filter(s=>!s.hidden),r=n[0],o=n[n.length-1],i=this.#m();e.shiftKey&&i===r?(e.preventDefault(),o?.focus()):!e.shiftKey&&i===o&&(e.preventDefault(),r?.focus())}setSearchMode(e){this.#p=e,this.#b()}setThreads(e,n){this.#a=e,this.#l=n,this.#b()}#b(){this.#o.replaceChildren();let e=this.#p==="auto"?this.#a.length<kC:this.#p==="never";this.#c.hidden=e,e&&this.#f!==""&&(this.#c.value="",this.#f="");let n=this.#k();if(n.length===0){let a=document.createElement("div");a.className="drawer-empty",a.setAttribute("part","drawer-empty"),a.textContent=this.#a.length===0?this.#s.noConversations:this.#s.noMatches,this.#o.appendChild(a);return}let{roots:r,children:o}=this.#w(n),i=this.#E(r),s=new Set;for(let[a,l]of i){if(i.length>1){let d=document.createElement("div");d.className="drawer-group-label",d.setAttribute("part","drawer-group-label"),d.setAttribute("role","heading"),d.setAttribute("aria-level","3"),d.textContent=a,this.#o.appendChild(d)}for(let d of l)this.#x(d,o,s,this.#o,!1)}}#x(e,n,r,o,i){r.add(e.threadId),o.appendChild(this.#h(e,i));let s=(n.get(e.threadId)??[]).filter(l=>!r.has(l.threadId));if(s.length===0)return;let a=document.createElement("div");a.className="drawer-children",a.setAttribute("part","drawer-children"),o.appendChild(a);for(let l of s)this.#x(l,n,r,a,!0)}#w(e){let n=new Set(e.map(a=>a.threadId)),r=[],o=new Map;for(let a of e){let l=a.parent?.threadId;if(l===void 0||!n.has(l)){r.push(a);continue}let d=o.get(l);d===void 0?o.set(l,[a]):d.push(a)}let i=new Set,s=a=>{if(!i.has(a.threadId)){i.add(a.threadId);for(let l of o.get(a.threadId)??[])s(l)}};for(let a of r)s(a);for(let a of e)i.has(a.threadId)||(r.push(a),s(a));return{roots:r,children:o}}#E(e){let n=new Date,r=new Date(n.getFullYear(),n.getMonth(),n.getDate()).getTime(),o=[],i=[],s=[];for(let l of e){let d=l.updatedAt;(d>=r?o:d>=r-7*AC?i:s).push(l)}return[[this.#s.threadsToday,o],[this.#s.threadsPreviousWeek,i],[this.#s.threadsOlder,s]].filter(([,l])=>l.length>0)}#k(){return this.#f===""?this.#a:this.#a.filter(e=>e.title.toLowerCase().includes(this.#f)||e.preview.toLowerCase().includes(this.#f))}#h(e,n){let r=document.createElement("div");r.className="drawer-row",r.setAttribute("part","drawer-row"),n&&(r.classList.add("drawer-row--child"),r.setAttribute("part","drawer-row drawer-row-child")),e.threadId===this.#l&&r.classList.add("drawer-row--active");let o=document.createElement("button");o.type="button",o.className="drawer-row-select",o.setAttribute("part","drawer-row-select");let i=document.createElement("span");i.className="drawer-row-title",i.setAttribute("part","drawer-row-title"),i.textContent=e.title;let s=document.createElement("span");s.className="drawer-row-time",s.setAttribute("part","drawer-row-time"),s.textContent=this.#u(e.updatedAt);let a=document.createElement("span");if(a.className="drawer-row-preview",a.setAttribute("part","drawer-row-preview"),a.textContent=e.preview,o.append(i),e.routine!==void 0){let h=document.createElement("span");h.className="drawer-row-routine",h.setAttribute("part","drawer-row-routine"),h.title=F(this.#s.routineBadge,{name:e.routine.name}),h.textContent=e.routine.name,o.append(h)}o.append(s,a),o.addEventListener("click",()=>{this.close(),this.#e.onSelect(e.threadId)});let l=document.createElement("button");l.type="button",l.className="drawer-row-rename",l.setAttribute("part","drawer-row-rename"),l.title=this.#s.rename,l.setAttribute("aria-label",this.#s.renameConversation),l.textContent="\u270E",l.addEventListener("click",()=>this.#S(r,e));let d=document.createElement("button");d.type="button",d.className="drawer-row-delete",d.setAttribute("part","drawer-row-delete"),d.title=this.#s.delete,d.setAttribute("aria-label",this.#s.deleteConversation),d.textContent="\u{1F5D1}",d.addEventListener("click",()=>this.#R(r,e));let c=document.createElement("div");return c.className="drawer-row-actions",c.setAttribute("part","drawer-row-actions"),c.append(l,d),r.append(o,c),r}#S(e,n){let r=document.createElement("input");r.type="text",r.className="drawer-rename-input",r.setAttribute("part","drawer-rename-input"),r.value=n.title;let o=!1,i=()=>{if(o)return;o=!0;let a=r.value.trim();a===""||a===n.title?this.#b():this.#e.onRename(n.threadId,a)},s=()=>{o||(o=!0,this.#b())};r.addEventListener("keydown",a=>{a.key==="Enter"?(a.preventDefault(),i()):a.key==="Escape"&&(a.preventDefault(),a.stopPropagation(),s())}),r.addEventListener("blur",()=>i()),e.replaceChildren(r),r.focus(),r.select()}#R(e,n){let r=document.createElement("div");r.className="drawer-confirm",r.setAttribute("part","drawer-confirm");let o=document.createElement("span");o.className="drawer-confirm-label",o.setAttribute("part","drawer-confirm-label"),o.textContent=this.#s.deletePrompt;let i=document.createElement("button");i.type="button",i.className="drawer-confirm-yes",i.setAttribute("part","drawer-confirm-yes"),i.textContent=this.#s.delete,i.addEventListener("click",()=>this.#e.onDelete(n.threadId));let s=document.createElement("button");s.type="button",s.className="drawer-confirm-no",s.setAttribute("part","drawer-confirm-no"),s.textContent=this.#s.cancel,s.addEventListener("click",()=>this.#b()),r.append(o,i,s),e.replaceChildren(r)}};var vl=class{#e=null;open(){return this.#e=new AbortController,this.#e.signal}close(){this.#e=null}abort(){this.#e?.abort()}};function xE(t){return t.href??`${t.label}\0${t.detail??""}`}function bl(t,e){t.textContent=e??"",t.hidden=e===void 0}var yl=class{element=document.createElement("div");barElement=document.createElement("span");#e=document.createElement("span");#t=document.createElement("span");#n=document.createElement("span");#r=document.createElement("span");#o=document.createElement("span");#i=document.createElement("button");#s=null;#a=null;#l=ve;constructor(){this.element.className="place",this.element.setAttribute("part","place"),this.element.hidden=!0,this.#n.className="place-icon",this.#n.setAttribute("part","place-icon"),this.#r.className="place-label",this.#r.setAttribute("part","place-label"),this.#o.className="place-detail",this.#o.setAttribute("part","place-detail"),this.#i.type="button",this.#i.className="place-toggle",this.#i.setAttribute("part","place-toggle");let e=document.createElement("span");e.className="place-text",e.append(this.#r,this.#o),this.element.append(this.#n,e,this.#i),this.barElement.className="bar-place",this.barElement.setAttribute("part","bar-place"),this.barElement.hidden=!0,this.#e.className="place-label",this.#e.setAttribute("part","place-label"),this.#t.className="place-detail",this.#t.setAttribute("part","place-detail"),this.barElement.append(this.#e,this.#t)}mount(e,n){this.#l=n,this.#i.addEventListener("click",()=>this.#d(),{signal:e}),this.#c()}update(e){e!==null&&this.#a!==null&&this.#a!==xE(e)&&(this.#a=null),this.#s=e,this.#c()}get withheld(){return this.#s!==null&&this.#a!==null}context(){let e=this.#s;if(e===null||this.#a!==null)return[];let n={label:e.label,...e.detail===void 0?{}:{detail:e.detail},...e.href===void 0?{}:{href:e.href}};return[{description:Df,value:JSON.stringify(n)}]}#d(){let e=this.#s;e!==null&&(this.#a=this.#a===null?xE(e):null,this.#c())}#c(){let e=this.#s;if(this.element.hidden=e===null,this.barElement.hidden=e===null,e===null)return;let n=this.#a===null;if(this.element.toggleAttribute("data-excluded",!n),this.barElement.toggleAttribute("data-excluded",!n),e.icon===void 0)this.#n.innerHTML=Gf;else{let o=document.createElement("img");o.src=e.icon,o.alt="",this.#n.replaceChildren(o)}bl(this.#r,e.label),bl(this.#o,e.detail),bl(this.#e,e.label),bl(this.#t,e.detail),this.element.title=F(n?this.#l.placeShared:this.#l.placeWithheld,{label:e.label});let r=n?this.#l.placeStopSharing:this.#l.placeShareAgain;this.#i.innerHTML=n?Bf:Vf,this.#i.title=r,this.#i.setAttribute("aria-label",r)}};function RC(t){let e=t.replace(/[.*+?^${}()|[\]\\]/g,"\\$&").replace(/:[A-Za-z_][A-Za-z0-9_]*/g,"[^/]+");return new RegExp(`^${e}$`)}function _E(t,e){let n=t.find(r=>RC(r.path).test(e));return n===void 0?null:{label:n.title??n.id,...n.group===void 0?{}:{detail:n.group},href:e}}function Qt(t,e,n=ct){let r=Math.min(n,Math.max(0,(e.width-t.width)/2)),o=Math.min(n,Math.max(0,(e.height-t.height)/2));return{left:Math.max(e.left+r,Math.min(t.left,e.left+e.width-t.width-r)),top:Math.max(e.top+o,Math.min(t.top,e.top+e.height-t.height-o))}}function Qn(t,e,n=qt){let r=t.right-t.left,o=t.bottom-t.top,i=Math.max(e.left+n,Math.min(t.left,e.left+e.width-n-r)),s=Math.max(e.top+n,Math.min(t.top,e.top+e.height-n-o));return{left:i,top:s,right:i+r,bottom:s+o}}var IC=4,CC=16,NC=64;function TE(t,e){let n=!1,{signal:r}=e;t.addEventListener("click",s=>{!n||s.detail===0||(n=!1,s.stopPropagation(),s.preventDefault())},{capture:!0,signal:r}),t.addEventListener("pointerdown",s=>{if(n=!1,!e.enabled())return;let a=e.rect(),l=s.clientX,d=s.clientY,c=!1,h=m=>{let u=m.clientX-l,v=m.clientY-d;if(!c&&Math.hypot(u,v)<IC)return;c=!0,t.setAttribute("data-dragging","true");let E=Qt({...a,left:a.left+u,top:a.top+v},e.viewport());e.apply(E.left,E.top)},p=m=>{if(window.removeEventListener("pointermove",h),window.removeEventListener("pointerup",p),window.removeEventListener("pointercancel",p),!c)return;t.removeAttribute("data-dragging"),n=!0;let u=Qt({...a,left:a.left+(m.clientX-l),top:a.top+(m.clientY-d)},e.viewport());e.commit(u.left,u.top)};window.addEventListener("pointermove",h),window.addEventListener("pointerup",p),window.addEventListener("pointercancel",p)},{signal:r});let o=null,i=()=>{if(o===null)return;let{left:s,top:a}=o;o=null,e.commit(s,a)};t.addEventListener("keydown",s=>{if(!e.enabled())return;let a=s.shiftKey?NC:CC,l=e.rect(),d=null;if(s.key==="ArrowLeft"?d={left:l.left-a,top:l.top}:s.key==="ArrowRight"?d={left:l.left+a,top:l.top}:s.key==="ArrowUp"?d={left:l.left,top:l.top-a}:s.key==="ArrowDown"&&(d={left:l.left,top:l.top+a}),d===null)return;s.preventDefault();let c=Qt({...l,...d},e.viewport());e.apply(c.left,c.top),o=c},{signal:r}),t.addEventListener("keyup",i,{signal:r}),t.addEventListener("blur",i,{signal:r})}function ni(t,e,n,r){return{hostInset:SE({top:n.y==="top"?t.top:null,right:n.x==="right"?r.width-t.right:null,bottom:n.y==="bottom"?r.height-t.bottom:null,left:n.x==="left"?t.left:null}),launcherInset:SE({top:n.y==="top"?e.top-t.top:null,right:n.x==="right"?t.right-(e.left+e.width):null,bottom:n.y==="bottom"?t.bottom-(e.top+e.height):null,left:n.x==="left"?e.left-t.left:null})}}function SE(t){let e=n=>n===null?"auto":`${Math.round(n)}px`;return`${e(t.top)} ${e(t.right)} ${e(t.bottom)} ${e(t.left)}`}function up(t,e,n,r,o=ct){let i=n.left+n.width-t.left,s=t.left+t.width-n.left,a=n.top+n.height-t.top,l=t.top+t.height-n.top,d={x:i>=s?"left":"right",y:a>=l?"top":"bottom"},c=d.x==="left"?t.left:t.left+t.width-e.width,h=d.y==="top"?t.top:t.top+t.height-e.height,p=Qn({left:c,top:h,right:c+e.width,bottom:h+e.height},n,o);return{corner:d,...ni(p,t,d,r)}}var OC="button, a[href], input, select, textarea, [contenteditable]";function kE(t,e){t.addEventListener("pointerdown",n=>{if(n.button!==0||!e.enabled()||MC(n,t))return;let r=e.rect(),o=n.clientX,i=n.clientY,s=!1,a=(c,h)=>{let p=c-o,m=h-i;return{left:r.left+p,top:r.top+m,right:r.right+p,bottom:r.bottom+m}},l=c=>{!s&&Math.hypot(c.clientX-o,c.clientY-i)<4||(s=!0,t.setAttribute("data-dragging","true"),e.apply(a(c.clientX,c.clientY),r))},d=c=>{window.removeEventListener("pointermove",l),window.removeEventListener("pointerup",d),window.removeEventListener("pointercancel",d),s&&(t.removeAttribute("data-dragging"),e.commit(a(c.clientX,c.clientY),r))};n.preventDefault(),window.addEventListener("pointermove",l),window.addEventListener("pointerup",d),window.addEventListener("pointercancel",d)})}function MC(t,e){let n=t.composedPath();return n.slice(0,n.indexOf(e)).some(r=>r instanceof Element&&r.matches(OC))}function RE(t,e){let n=document.createElement("div");n.className=`resize-handle resize-handle--${wl(t)}`,n.setAttribute("part",`resize-handle resize-handle-${wl(t)}`),n.setAttribute("role","separator"),t.x===void 0?n.setAttribute("aria-orientation","horizontal"):t.y===void 0&&n.setAttribute("aria-orientation","vertical"),n.setAttribute("aria-label",e.label),n.tabIndex=0,n.addEventListener("pointerdown",i=>{let s=e.axis();if(s==="none"||!AE(t,s))return;let a=e.rect(),l=c=>{e.apply(hp(t,s,a,c.clientX,c.clientY))},d=c=>{window.removeEventListener("pointermove",l),window.removeEventListener("pointerup",d),n.removeAttribute("data-dragging"),e.commit(hp(t,s,a,c.clientX,c.clientY))};n.setAttribute("data-dragging","true"),window.addEventListener("pointermove",l),window.addEventListener("pointerup",d),i.preventDefault()});let r=null,o=()=>{if(r===null)return;let i=r;r=null,e.commit(i)};return n.addEventListener("keydown",i=>{let s=e.axis();if(s==="none"||!AE(t,s))return;let a=i.shiftKey?64:16,l=e.rect(),d=PC[i.key];if(d===void 0||d.x!==0&&t.x===void 0||d.y!==0&&t.y===void 0)return;i.preventDefault();let c=(t.x==="left"?l.left:l.right)+d.x*a,h=(t.y==="top"?l.top:l.bottom)+d.y*a,p=hp(t,s,l,c,h);e.apply(p),r=p}),n.addEventListener("keyup",o),n.addEventListener("blur",o),n}var PC={ArrowLeft:{x:-1,y:0},ArrowRight:{x:1,y:0},ArrowUp:{x:0,y:-1},ArrowDown:{x:0,y:1}};function wl(t){return[t.y,t.x].filter(e=>e!==void 0).join("-")}function AE(t,e){return e==="both"||t.x!==void 0}function hp(t,e,n,r,o){let i=t.x==="left"?Math.min(r,n.right-280):n.left,s=t.x==="right"?Math.max(r,n.left+280):n.right,a=e==="both",l=a&&t.y==="top"?Math.min(o,n.bottom-240):n.top,d=a&&t.y==="bottom"?Math.max(o,n.top+240):n.bottom;return{left:i,top:l,right:s,bottom:d}}var El={collapseTo:"launcher",launcherDraggable:!0,panelMovable:!0,resizeAxis:"both",startsCollapsed:!0,maximizes:"both"},IE={collapseTo:"launcher",launcherDraggable:!1,panelMovable:!1,resizeAxis:"width",startsCollapsed:!1,maximizes:"width"},LC=new Map([[null,El],["",El],["floating",El],["bottom-left",El],["side",IE],["sidebar",{...IE,collapseTo:"rail"}],["full",{collapseTo:"launcher",launcherDraggable:!1,panelMovable:!1,resizeAxis:"none",startsCollapsed:!1,maximizes:null}],["page",{collapseTo:null,launcherDraggable:!1,panelMovable:!1,resizeAxis:"none",startsCollapsed:!1,maximizes:null}],["embedded",{collapseTo:"header",launcherDraggable:!1,panelMovable:!1,resizeAxis:"both",startsCollapsed:!1,maximizes:null}]]),zC={collapseTo:"launcher",launcherDraggable:!1,panelMovable:!1,resizeAxis:"both",startsCollapsed:!1,maximizes:null};function ri(t,e=null){let n=LC.get(t)??zC;return e==="bar"&&n.collapseTo==="launcher"?{...n,collapseTo:"bar",launcherDraggable:!1}:e==="none"&&n.collapseTo!==null?{...n,collapseTo:"none",launcherDraggable:!1}:n}var pp=`${yt}:size`,er="--_drag-width",tr="--_drag-height",fp="--_dock-bottom",CE="--_dock-right",NE="--_dock-top",mp=`${yt}:launcher`,gp=`${yt}:dock`;function OE(t){if(typeof t!="object"||t===null)return null;let{left:e,top:n}=t;return typeof e=="number"&&typeof n=="number"?{left:e,top:n}:null}function qr(t,e){return t.width>=e.width-1&&t.height>=e.height-1}function oi(t,e){let n=Number.parseFloat(t.getPropertyValue(e));return Number.isFinite(n)?n:0}function xl(t,e,n){return t.left<e.left-.5||t.top<e.top-.5||t.right>n.width+.5||t.bottom>n.height+.5}function ME(t,e){return{left:t.left,top:t.top,right:t.left+(e.right-e.left),bottom:t.top+(e.bottom-e.top)}}function _l(t,e,n){let r=o=>`${Math.round(o)}px`;return[t.y==="top"?r(e.top):"auto",t.x==="right"?r(n.width-e.right):"auto",t.y==="bottom"?r(n.height-e.bottom):"auto",t.x==="left"?r(e.left):"auto"].join(" ")}var DC=[{y:"top"},{y:"bottom"},{x:"left"},{x:"right"},{x:"left",y:"top"},{x:"right",y:"top"},{x:"left",y:"bottom"},{x:"right",y:"bottom"}],Tl=class{#e;constructor(e){this.#e=e}enablePanelDrag(e){this.#v=e,kE(e,{enabled:()=>!this.#e.collapsed()&&this.#Te(),rect:()=>this.#e.element.getBoundingClientRect(),apply:(n,r)=>this.#De(n,r),commit:(n,r)=>this.#$e(n,r)})}enableLauncherDrag(e){TE(this.#e.launcher,{signal:e,enabled:()=>this.#e.collapsed()&&this.#y(),rect:()=>this.#X(),viewport:()=>this.#T(),apply:(n,r)=>this.#_(n,r),commit:(n,r)=>this.#Z(n,r)})}mountResizeGrips(e){this.#b=!1;for(let n of DC){let r=RE(n,{axis:()=>this.#h(),rect:()=>this.#e.element.getBoundingClientRect(),apply:o=>{this.#b=!0,this.#ye(n,o)},commit:o=>{this.#b=!1,this.#Ze(n,o)},label:this.#e.strings().resizePanel});r.tabIndex=-1,r.setAttribute("aria-hidden","true"),this.#x.set(wl(n),r),e.appendChild(r)}this.#ke()}restoreSize(){this.#e.element.style.removeProperty(er),this.#e.element.style.removeProperty(tr),this.#M(this.#we())}switchPlacement(e){let n=this.#e.element,r=n.getBoundingClientRect();n.style.removeProperty(er),n.style.removeProperty(tr),this.#e.connected()&&(this.#M(this.#we()),ri(e,n.getAttribute("collapse-to")).launcherDraggable&&this.#n(r))}resetSize(){let e=this.#e.element.getBoundingClientRect();this.#e.element.style.removeProperty(er),this.#e.element.style.removeProperty(tr),this.#Ae(this.#ie(),null),this.#I()?(this.#l!==null&&this.#e.element.style.removeProperty("--ag-ui-inset"),this.#l=null,this.#ne(null),this.#te()):this.#n(e),this.syncResizeAnchor()}enterMaximized(){this.#t()}leaveMaximized(){this.restoreSize(),this.#t()}#t(){this.#I()?this.#te():this.restoreLauncherPosition(),this.syncResizeAnchor()}#n(e){let n=this.#e.element,r=n.getBoundingClientRect(),o=this.#i??this.#Se(),i=getComputedStyle(n);o?.panel===void 0||!this.#y()||i.getPropertyValue("--ag-ui-width")!==""||i.getPropertyValue("--ag-ui-height")!==""||this.#W({...o,panel:{left:o.panel.left+r.left-e.left,top:o.panel.top+r.top-e.top}})}probe=document.createElement("div");#r=null;#o=null;#i=null;#s=null;#a=null;#l=null;#d=Number.POSITIVE_INFINITY;#c=Number.NEGATIVE_INFINITY;#f="above";#p=0;#g=null;#u=null;#m={x:"right",y:"bottom"};#v=null;#b=!1;#x=new Map;#w(e){let n=this.#I()&&this.#B()?this.#z():this.#T(),r=n.left+ct,o=n.top+ct,i=n.left+n.width-ct,s=n.top+n.height-ct;return{left:Math.min(Math.max(e.left,r),e.right),top:Math.min(Math.max(e.top,o),e.bottom),right:Math.max(Math.min(e.right,i),e.left),bottom:Math.max(Math.min(e.bottom,s),e.top)}}dragging(){return this.#b||this.#e.launcher.hasAttribute("data-dragging")||this.#e.root.querySelector(".header[data-dragging], .resize-handle[data-dragging]")!==null}describeSurface(){let e=this.#e.element.getBoundingClientRect(),n=this.#T(),r=qr(e,this.#ce());return{placement:this.#e.element.getAttribute("placement"),collapseTo:this.#N().collapseTo,collapsed:this.#e.collapsed(),collapsible:this.#e.collapsible(),maximized:this.#e.element.hasAttribute("maximized"),movable:this.#B()&&!r,draggable:this.#e.element.getAttribute("data-launcher-drag")!=="false",fullBleed:r,box:{left:Math.round(e.left),top:Math.round(e.top),width:Math.round(e.width),height:Math.round(e.height)},viewport:{left:Math.round(n.left),top:Math.round(n.top),width:Math.round(n.width),height:Math.round(n.height)}}}moveTo(e,n={}){if(!this.#B())return!1;let r=n.announce===!0?this.#E():null,o=this.#T(),i=this.#e.element.getBoundingClientRect();if(qr(i,this.#ce()))return!1;let[s,a]=e.split("-"),l=this.#I(),d=l?this.#z():o,c=d.left+qt,h=d.top+qt,p=a==="left"?c:Math.max(c,d.left+d.width-qt-i.width),m=s==="top"?h:Math.max(h,d.top+d.height-qt-i.height),u={left:p,top:m,right:p+i.width,bottom:m+i.height};if(l)return this.#l={left:p,top:m},this.#ve(u),this.#ne(this.#l),r!==null&&this.#e.announceSurfaceChange(this.#e.strings().chatMoved,r),!0;let v=this.#e.launcher.offsetWidth,E=this.#e.launcher.offsetHeight;return this.#ue(u,{left:a==="left"?u.left:u.right-v,top:s==="top"?u.top:u.bottom-E,width:v,height:E}),this.#re(),r!==null&&this.#e.announceSurfaceChange(this.#e.strings().chatMoved,r),!0}#E(){let e=this.#e.element.style.getPropertyValue("--ag-ui-inset"),n=this.#e.element.style.getPropertyValue("--ag-ui-launcher-inset"),r=this.#e.element.getAttribute("data-expand-corner"),o=this.#r,i=this.#o,s=this.#l??this.#ze(),a=this.#u,l=this.#s,d=this.#a,c=this.#i??this.#Se(),h=this.#k();return()=>{this.#l=s,this.#ne(s),c===null?(this.#i=null,this.#e.clearPreference(mp)):this.#W(c),h===this.#k()?(this.#G("--ag-ui-inset",e),this.#G("--ag-ui-launcher-inset",n),r===null?this.#e.element.removeAttribute("data-expand-corner"):this.#e.element.setAttribute("data-expand-corner",r),this.#r=o,this.#o=i,this.#u=a,this.#s=l,this.#a=d):this.#He(),this.restoreLauncherPosition(),this.syncResizeAnchor()}}#k(){return this.#I()?"dock":this.#N().launcherDraggable?"corner":"placement"}#h(){return this.#e.element.hasAttribute("maximized")?"none":this.#N().resizeAxis}#S(){let e=this.#e.element.getBoundingClientRect(),n=this.#e.element.style.getPropertyValue(er),r=this.#e.element.style.getPropertyValue(tr),o=this.#R(e,-1),i=o.x===null||o.y===null?this.#R(e,1):o;return this.#G(er,n),this.#G(tr,r),{x:o.x??i.x??"right",y:o.y??i.y??"bottom"}}#R(e,n){this.#M({width:e.width+n,height:e.height+n});let r=this.#e.element.getBoundingClientRect(),o=(i,s)=>Math.abs(i-s)>=.5;return{x:o(r.width,e.width)?o(r.left,e.left)?"right":"left":null,y:o(r.height,e.height)?o(r.top,e.top)?"bottom":"top":null}}syncResizeAnchor(){if(!this.#e.connected())return;let e=this.#u??this.#S();this.#m=e,this.#e.element.setAttribute("data-resize-anchor",`${e.y}-${e.x}`),this.#ke(),this.#F()}#F(){this.#v?.toggleAttribute("data-fills-screen",this.#V());let e=this.#e.element;this.#j()!==e.hasAttribute("data-fills-window")&&requestAnimationFrame(()=>{let n=this.#j();n!==e.hasAttribute("data-fills-window")&&(this.#g=n?{room:this.#T().height,window:this.#A().height,bar:this.#p}:null,e.toggleAttribute("data-fills-window",n))})}#j(){return this.#V()&&this.#N().panelMovable}#G(e,n){if(n===""){this.#e.element.style.removeProperty(e);return}this.#e.element.style.setProperty(e,n)}#M(e){let n=this.#h();n!=="none"&&(e.width!==void 0&&this.#e.element.style.setProperty(er,`${e.width}px`),e.height!==void 0&&n==="both"&&this.#e.element.style.setProperty(tr,`${e.height}px`))}releaseOwnedAxes(){let e=this.#h();e!=="both"&&this.#e.element.style.removeProperty(tr),e==="none"&&this.#e.element.style.removeProperty(er)}#N(){let e=this.#e.element;return ri(e.getAttribute("placement"),e.getAttribute("collapse-to"))}#I(){let e=this.#N().collapseTo;return e==="bar"||e==="none"}syncDock(e,n){let r=this.#e.element,o=this.#N().collapseTo,i=o==="bar"?e.offsetHeight:0,s=o==="none"&&n!==null?n.getBoundingClientRect():null,a=s===null?null:this.#rt(s);return o==="bar"?r.style.setProperty(fp,`${i}px`):s!==null&&a==="above"?r.style.setProperty(fp,`${Math.max(0,this.#A().height-s.top)}px`):r.style.removeProperty(fp),s!==null&&a==="below"?r.style.setProperty(NE,`${Math.max(0,s.bottom)}px`):r.style.removeProperty(NE),s!==null?r.style.setProperty(CE,`${this.#de(s)}px`):r.style.removeProperty(CE),a===null?r.removeAttribute("data-dock-anchored"):r.setAttribute("data-dock-anchored",a),this.#p=i,o!=="bar"&&(this.#g=null),this.#d=o==="bar"&&i>0?e.getBoundingClientRect().top:s!==null&&a==="above"?s.top:Number.POSITIVE_INFINITY,this.#c=s!==null&&a==="below"?s.bottom:Number.NEGATIVE_INFINITY,this.#te(),i}#z(){let e=this.#T(),n=Math.max(e.top,this.#c),r=Math.min(e.top+e.height,this.#d);return{...e,top:n,height:Math.max(0,r-n)}}#rt(e){let n=this.#e.element.getAttribute("anchor-side");if(n==="above"||n==="below")this.#f=n;else if(!this.dragging()){let r=this.#T(),o=r.top+r.height-e.bottom;this.#f=o>e.top-r.top?"below":"above"}return this.#f}#de(e){let n=this.#A(),r=n.width-this.#T().left-qt-this.#e.element.offsetWidth,o=qt+oi(getComputedStyle(this.probe),"padding-right");return Math.max(o,Math.min(n.width-e.right,r))}#te(){if(!this.#I()||!this.#N().panelMovable||this.dragging())return;let e=this.#e.element,n=this.#B()?this.#l??this.#ze():null;if(n===null){if(this.#l!==null){if(!(e.style.getPropertyValue("--ag-ui-inset")===this.#a)&&!this.#be())return;this.#l=null,e.style.removeProperty("--ag-ui-inset")}this.#Ue();return}this.#l=n,e.style.removeProperty("--ag-ui-inset");let r=e.getBoundingClientRect(),o=this.#T();if(qr(r,this.#ce())){xl(r,o,this.#A())&&this.#oe(r);return}this.syncResizeAnchor(),this.#ve(Qn({left:n.left,top:n.top,right:n.left+r.width,bottom:n.top+r.height},this.#z(),ct))}#ve(e){this.#e.element.style.setProperty("--ag-ui-inset",_l(this.#m,e,this.#A()))}#ne(e){if(e===null){this.#e.clearPreference(gp);return}this.#e.writePreference(gp,JSON.stringify({left:e.left,top:e.top}))}#ze(){let e=this.#e.readPreference(gp);if(e===null)return null;try{return OE(JSON.parse(e))}catch{return null}}#B(){return this.#e.element.getAttribute("data-launcher-drag")!=="false"&&this.#N().panelMovable}#Te(){return this.#B()&&!this.#V()}#V(){return qr(this.#e.element.getBoundingClientRect(),this.#ce())}#ce(){let e=this.#T(),n=this.#g;return n!==null&&n.window===this.#A().height&&Math.abs(e.height-n.room-n.bar)<=1?{...e,height:n.room}:e}#be(){let e=this.#A();return xl(this.#e.element.getBoundingClientRect(),{left:0,top:0,...e},e)}#y(){return this.#e.element.getAttribute("data-launcher-drag")!=="false"&&this.#N().launcherDraggable}#T(){let e=window.visualViewport,n=e?.width??window.innerWidth,r=e?.height??window.innerHeight,o=getComputedStyle(this.probe),i=oi(o,"padding-left"),s=oi(o,"padding-top");return{left:i,top:s,width:Math.max(0,n-i-oi(o,"padding-right")),height:Math.max(0,r-s-oi(o,"padding-bottom"))}}#A(){let e=document.documentElement;return{width:e.clientWidth||window.innerWidth,height:e.clientHeight||window.innerHeight}}publishVisualViewport(){let e=window.visualViewport;if(e==null)return;let n=this.#A().height;if(Math.abs(e.height-n)<1){this.#e.element.style.removeProperty("--ag-ui-visual-viewport-height"),this.#e.element.style.removeProperty("--ag-ui-visual-viewport-inset-bottom"),this.#e.element.style.removeProperty("--ag-ui-visual-viewport-inset-top");return}this.#e.element.style.setProperty("--ag-ui-visual-viewport-height",`${Math.round(e.height)}px`);let r=n-e.height-e.offsetTop;this.#e.element.style.setProperty("--ag-ui-visual-viewport-inset-bottom",`${Math.max(0,Math.round(r))}px`),this.#e.element.style.setProperty("--ag-ui-visual-viewport-inset-top",`${Math.max(0,Math.round(e.offsetTop))}px`)}#X(){let e=this.#e.launcher.offsetWidth,n=this.#e.launcher.offsetHeight,r=this.#r;if(r!==null)return{left:r.left,top:r.top,width:e,height:n};let o=this.#e.launcher.getBoundingClientRect();return{left:o.left+o.width/2-e/2,top:o.top+o.height/2-n/2,width:e,height:n}}#$(e){this.#r=e,this.#o=null;let n=this.#e.element.getBoundingClientRect(),r=up(this.#X(),{width:n.width,height:n.height},this.#T(),this.#A());this.#e.element.style.setProperty("--ag-ui-inset",r.hostInset),this.#e.element.style.setProperty("--ag-ui-launcher-inset",r.launcherInset),this.#u=r.corner,this.#e.element.setAttribute("data-expand-corner",`${r.corner.y}-${r.corner.x}`),this.syncResizeAnchor()}#_(e,n){this.#i={left:e,top:n},this.#$({left:e,top:n})}#Z(e,n){this.#_(e,n),this.#re()}#De(e,n){if(this.#I()){let l=Qn(e,this.#z(),ct);return this.#l={left:l.left,top:l.top},this.#ve(l),{held:l,launcher:null}}if(!this.#y())return{held:e,launcher:null};if(this.#r===null){let l=this.#X();this.#r={left:l.left,top:l.top}}let r=this.#r,o=Qn(e,this.#T(),ct),i=this.#u??this.#m;this.#e.element.style.setProperty("--ag-ui-inset",_l(i,o,this.#A())),this.#o={left:o.left,top:o.top};let s={...this.#X(),left:r.left+(o.left-n.left),top:r.top+(o.top-n.top)},a={...s,...Qt(s,this.#T())};return this.#e.element.style.setProperty("--ag-ui-launcher-inset",ni(o,a,i,this.#A()).launcherInset),{held:o,launcher:a}}#$e(e,n){let{held:r,launcher:o}=this.#De(e,n);if(this.#I()){this.#ne({left:r.left,top:r.top});return}o!==null&&(this.#ue(r,o),this.#re())}#ue(e,n){let r=this.#T(),o=this.#A(),i={width:e.right-e.left,height:e.bottom-e.top},{corner:s}=up(n,i,r,o),a=ni(e,n,s,o);this.#e.element.style.setProperty("--ag-ui-inset",a.hostInset),this.#e.element.style.setProperty("--ag-ui-launcher-inset",a.launcherInset),this.#r={left:n.left,top:n.top},this.#o={left:e.left,top:e.top},this.#u=s,this.#e.element.setAttribute("data-expand-corner",`${s.y}-${s.x}`),this.syncResizeAnchor()}#je(e){let n=this.#e.element.getBoundingClientRect(),r=Qn({left:e.left,top:e.top,right:e.left+n.width,bottom:e.top+n.height},this.#T(),ct),o=this.#X(),i={...o,left:o.left+(r.left-e.left),top:o.top+(r.top-e.top)};this.#ue(r,{...i,...Qt(i,this.#T())})}#re(){let e=this.#r;if(e===null)return;let n=this.#o;this.#W(n===null?e:{...e,panel:n})}#W(e){this.#i=e,this.#e.writePreference(mp,JSON.stringify(e))}restoreLauncherPosition(){this.#he(!0),this.#F()}settleLauncherPosition(){this.#he(!1),this.#F()}#he(e){if(this.#I()){this.#te();return}if(!this.#N().launcherDraggable)return;let n=this.#y();if(!n&&this.#r!==null){if(!e&&!this.#be())return;this.releaseLauncherPosition()}let r=n?this.#i??this.#Se():null;if(r===null){this.#Ue();return}if(this.#J(r))return;if(r.panel!==void 0){this.#r={left:r.left,top:r.top},this.#je(r.panel);return}let o=this.#X();this.#$(Qt({...o,left:r.left,top:r.top},this.#T()))}#J(e){let n=this.#e.element,r=this.#T();if(!qr(n.getBoundingClientRect(),r))return!1;n.style.removeProperty("--ag-ui-inset");let o=n.getBoundingClientRect(),i=xl(o,r,this.#A()),s=i?ME(r,o):o,a={...this.#X(),left:e.left,top:e.top};return this.#ue(s,{...a,...Qt(a,r)}),i||n.style.removeProperty("--ag-ui-inset"),!0}#Ue(){let e=this.#e.element,n=e.style.getPropertyValue("--ag-ui-inset"),r=this.#T();if(!qr(e.getBoundingClientRect(),this.#ce())){(n===""||n===this.#a)&&(this.#G("--ag-ui-inset",this.#s??""),this.syncResizeAnchor()),this.#a=null;return}(n===this.#s||n===this.#a)&&e.style.removeProperty("--ag-ui-inset");let o=e.getBoundingClientRect(),i=this.#A();e.style.getPropertyValue("--ag-ui-inset")===""&&xl(o,r,i)&&this.#oe(o)}#oe(e){this.#a=_l({x:"left",y:"top"},ME(this.#T(),e),this.#A()),this.#e.element.style.setProperty("--ag-ui-inset",this.#a),this.syncResizeAnchor()}#Se(){let e=this.#e.readPreference(mp);if(e===null)return null;try{let n=JSON.parse(e);if(typeof n!="object"||n===null)return null;let{left:r,top:o,panel:i}=n;if(typeof r!="number"||typeof o!="number")return null;let s=OE(i);return s===null?{left:r,top:o}:{left:r,top:o,panel:s}}catch{return null}}releaseLauncherPosition(){this.#l!==null&&!(this.#I()&&this.#B())&&(this.#l=null,this.#e.element.style.removeProperty("--ag-ui-inset")),!this.#y()&&this.#He()}#He(){this.#r=null,this.#o=null,this.#u=null,this.#s=null,this.#a=null,this.#e.element.style.removeProperty("--ag-ui-inset"),this.#e.element.style.removeProperty("--ag-ui-launcher-inset"),this.#e.element.removeAttribute("data-expand-corner")}#ye(e,n){if(n=this.#w(n),this.#I()&&this.#l===null){let r=this.#e.element.getBoundingClientRect();return n={left:e.x===this.#m.x?r.left:n.left,right:e.x===this.#m.x?r.right:n.right,top:e.y===this.#m.y?r.top:n.top,bottom:e.y===this.#m.y?r.bottom:n.bottom},this.#M({width:n.right-n.left,height:n.bottom-n.top}),n}if(this.#M({width:n.right-n.left,height:n.bottom-n.top}),this.#I()&&(this.#l={left:n.left,top:n.top}),e.x===this.#m.x||e.y===this.#m.y){let r=this.#m,o=_l(r,n,this.#A());if(this.#e.element.style.setProperty("--ag-ui-inset",o),this.#s=this.#r===null&&!this.#I()?o:null,this.#r!==null){let i=this.#e.launcher.offsetWidth;this.#r={left:r.x==="left"?n.left:n.right-i,top:r.y==="top"?n.top:n.bottom-i}}}if(this.#o!==null&&!this.#I()){let r=this.#e.element.getBoundingClientRect();this.#o={left:r.left,top:r.top}}return n}#Ze(e,n){let r=this.#ye(e,n);this.#e.element.style.getPropertyValue("--ag-ui-inset")===this.#a&&(this.#s=this.#a,this.#a=null),this.#O({width:r.right-r.left,height:r.bottom-r.top}),this.#re(),this.#l!==null&&this.#ne(this.#l),this.syncResizeAnchor()}#ke(){let e=`${this.#m.y==="top"?"bottom":"top"}-${this.#m.x==="left"?"right":"left"}`;for(let[n,r]of this.#x){let o=n===e;r.tabIndex=o?0:-1,o?r.removeAttribute("aria-hidden"):r.setAttribute("aria-hidden","true")}}#ie(){let e=this.#e.element.getAttribute("placement");return e===null||e===""?"floating":e}#O(e){this.#Ae(this.#ie(),{...this.#we(),...e})}#Ae(e,n){let r={...this.#pe()};if(n===null?delete r[e]:r[e]=n,Object.keys(r).length===0){this.#e.clearPreference(pp);return}let o={v:2,placements:r};this.#e.writePreference(pp,JSON.stringify(o))}#we(){return this.#pe()[this.#ie()]??{}}#pe(){let e=this.#e.readPreference(pp);if(e===null)return{};try{let n=JSON.parse(e);if(typeof n!="object"||n===null)return{};let r=n;return r.v===2&&typeof r.placements=="object"&&r.placements!==null?r.placements:{floating:n}}catch{return{}}}};var Sl=class{element;#e;#t=null;constructor(e){this.element=document.createElement("div"),this.element.className="parent-breadcrumb",this.element.setAttribute("part","parent-breadcrumb"),this.element.hidden=!0,this.#e=document.createElement("button"),this.#e.type="button",this.#e.className="parent-breadcrumb-link",this.#e.setAttribute("part","parent-breadcrumb-link"),this.#e.addEventListener("click",()=>{this.#t!==null&&e(this.#t)}),this.element.append(this.#e)}show(e,n,r){let o=e.find(s=>s.threadId===n)?.parent??null;if(this.#t=o,this.element.hidden=o===null,o===null){this.#e.textContent="";return}let i=e.find(s=>s.threadId===o.threadId)?.title;this.#e.textContent=i===void 0?r.parentThreadUnlisted:F(r.parentThread,{title:i})}};var kl=class{element;receipt;constructor(e,n){this.receipt=e,this.element=document.createElement("button"),this.element.type="button",this.element.className="child-session-link",this.element.setAttribute("part","child-session-link"),this.element.setAttribute("data-thread-id",e.threadId),this.element.setAttribute("data-agent-id",e.agentId),this.element.addEventListener("click",()=>n(this.receipt))}update(e,n){let r=n==="waiting";n===null?this.element.removeAttribute("data-status"):this.element.setAttribute("data-status",n),this.element.textContent=F(r?e.childSessionNeedsYou:e.childSessionOpen,{agent:this.receipt.agentId})}};var $C="start_session";function PE(t,e){if(t!==$C)return null;let n;try{n=JSON.parse(e)}catch{return null}if(typeof n!="object"||n===null)return null;let{agent_id:r,thread_id:o}=n;return typeof r!="string"||typeof o!="string"||o===""?null:{agentId:r,threadId:o}}var Al=class{#e;#t;#n=new Set;#r=[];#o=new Set;constructor(e){this.#e=e,this.#t=new Sl(n=>this.#a(n.scope,n.threadId)),e.element.addEventListener("click",n=>this.#s(n))}get breadcrumb(){return this.#t.element}attach(e,n){let r=PE(e.element.getAttribute("data-tool-name"),n);if(r===null)return;let o=new kl(r,i=>this.#a(i.agentId,i.threadId));this.#i(o),e.subagentSlot.appendChild(o.element),this.#n.add(o)}listed(e){this.#r=e.map(n=>n.parent!==void 0&&this.#o.has(n.parent.threadId)?UC(n):n),this.relocalize()}status(e){return this.#r.find(n=>n.threadId===e)?.status??null}deleted(e){this.#o.add(e),this.listed(this.#r)}shown(){this.#t.show(this.#r,this.#e.activeThread(),this.#e.strings())}relocalize(){let e=this.#e.transcript();for(let n of this.#n)e.contains(n.element)?this.#i(n):this.#n.delete(n);this.shown()}#i(e){let n=this.#r.find(r=>r.threadId===e.receipt.threadId);e.update(this.#e.strings(),n?.status??null)}#s(e){let n=e.composedPath()[0],r=n instanceof Element?n.closest(".child-report-link"):null;r!==null&&this.#a(r.getAttribute("data-agent-id")||null,String(r.getAttribute("data-thread-id")))}#a(e,n){let r=new CustomEvent(Er,{detail:{agentId:e,threadId:n},bubbles:!0,composed:!0,cancelable:!0});this.#e.element.dispatchEvent(r)&&this.#e.open(n)}};function UC(t){let{parent:e,...n}=t;return n}var Rl=class{region=document.createElement("div");#e=null;mount(){this.region.className="sr-only",this.region.setAttribute("role","status"),this.region.setAttribute("aria-live","polite"),this.region.setAttribute("aria-atomic","true")}announce(e){this.#e!==null&&clearTimeout(this.#e),this.region.textContent=e,this.#e=setTimeout(()=>{this.#e=null,this.region.textContent=""},pm)}dispose(){this.#e!==null&&(clearTimeout(this.#e),this.#e=null)}};function Yr(t,e,n,r){let o=document.createElement("div");o.className=`run-notice run-notice--${n}`,o.setAttribute("part",`run-notice run-notice-${n}`),o.setAttribute("role","status");let i=document.createElement("span");i.className="run-notice-icon",i.setAttribute("part","run-notice-icon"),i.textContent=t,i.setAttribute("aria-hidden","true");let s=document.createElement("span");if(s.className="run-notice-text",s.setAttribute("part","run-notice-text"),s.textContent=e,o.append(i,s),r!==void 0){let a=document.createElement("button");a.type="button",a.className="run-notice-undo",a.setAttribute("part","run-notice-undo"),a.textContent=r.label,a.addEventListener("click",()=>{a.disabled=!0,r.onActivate()}),o.append(a)}return o}var HC=8e3,FC=new Set(["not_running","no_task","no_run"]),GC=new Set(["not_live_here","remote"]),BC=new Set([Se.FINISHED,Se.FAILED,Se.CANCELLED,Se.UNFINISHED]),Cl=class{element;get agent(){return this.#o}#e;#t;#n;#r=new Map;#o=null;#i;#s;#a;#l;#d;#c;#f;#p;#g;#u;#m;#v=null;#b=null;#x=!1;#w=null;#E=null;constructor(e=ve,n=null){this.#i=e,this.#s=n,this.element=document.createElement("div"),this.element.className="subagent",this.element.setAttribute("part","subagent"),this.#e=document.createElement("button"),this.#e.type="button",this.#e.className="subagent-row",this.#e.setAttribute("part","subagent-row"),this.#e.setAttribute("aria-expanded","false"),this.#e.disabled=!0;let r=document.createElement("span");r.className="subagent-icon",r.setAttribute("part","subagent-icon"),r.setAttribute("aria-hidden","true"),this.#t=document.createElement("span"),this.#t.className="subagent-status",this.#t.setAttribute("part","subagent-status"),this.#t.textContent=e.subAgentWorking,this.#e.append(r,this.#t),this.#n=document.createElement("div"),this.#n.className="subagent-steps",this.#n.setAttribute("part","subagent-steps"),this.#n.setAttribute("role","list"),this.#n.setAttribute("aria-label",e.subAgentSteps),this.#n.hidden=!0,this.#e.addEventListener("click",()=>{this.#I(this.#e.getAttribute("aria-expanded")!=="true")}),this.#a=document.createElement("div"),this.#a.className="subagent-controls",this.#a.setAttribute("part","subagent-controls"),this.#a.setAttribute("role","group"),this.#a.setAttribute("aria-label",e.subAgentControls),this.#a.hidden=!0,this.#l=document.createElement("p"),this.#l.className="subagent-question",this.#l.setAttribute("part","subagent-question"),this.#l.hidden=!0;let o=document.createElement("div");o.className="subagent-actions",o.setAttribute("part","subagent-actions"),this.#d=Il("subagent-steer",e.subAgentSteer),this.#c=Il("subagent-answer",e.subAgentAnswer),this.#f=Il("subagent-cancel",e.subAgentCancelTask),this.#d.setAttribute("part","subagent-steer"),this.#c.setAttribute("part","subagent-answer"),this.#f.setAttribute("part","subagent-cancel"),this.#d.setAttribute("aria-expanded","false"),this.#c.setAttribute("aria-expanded","false"),o.append(this.#d,this.#c,this.#f),this.#p=document.createElement("form"),this.#p.className="subagent-reply",this.#p.setAttribute("part","subagent-reply"),this.#p.hidden=!0,this.#g=document.createElement("input"),this.#g.type="text",this.#g.className="subagent-reply-input",this.#g.setAttribute("part","subagent-reply-input"),this.#g.maxLength=HC,this.#u=Il("subagent-reply-send",e.subAgentSend),this.#u.setAttribute("part","subagent-reply-send"),this.#u.type="submit",this.#p.append(this.#g,this.#u),this.#m=document.createElement("p"),this.#m.className="subagent-control-error",this.#m.setAttribute("part","subagent-control-error"),this.#m.setAttribute("role","alert"),this.#m.hidden=!0,this.#a.append(this.#l,o,this.#p,this.#m),this.#d.addEventListener("click",()=>this.#F({kind:"steer"})),this.#c.addEventListener("click",()=>{let i=this.#b;i!==null&&this.#F({kind:"answer",questionId:i.id})}),this.#f.addEventListener("click",()=>{let i=this.#w==="requested";this.#M(this.#f,{kind:"cancel",force:i})}),this.#p.addEventListener("submit",i=>{i.preventDefault(),this.#G()}),this.element.append(this.#e,this.#a,this.#n)}report(e){this.element.setAttribute("data-phase",e.phase),e.agent!==null&&(this.#o=e.agent,this.element.setAttribute("data-agent",e.agent)),e.status!==null&&(this.#t.textContent=e.status),e.tool!==null&&this.#h(e.tool),e.task!==null&&this.#k(e.phase,e.task),BC.has(e.phase)&&(this.element.removeAttribute("data-awaiting-answer"),this.#x=!0,this.#b=null),this.#R()}#k(e,n){this.element.setAttribute("data-task-id",n.taskId),this.#v=n.taskId,n.source!==null&&this.element.setAttribute("data-source",n.source),e===Se.BACKGROUNDED?this.element.setAttribute("data-background",n.reason??""):e===Se.QUESTION?(this.element.setAttribute("data-awaiting-answer",""),this.#b=n.questionId===null?null:{id:n.questionId,text:n.question}):e===Se.ANSWERED?(this.element.removeAttribute("data-awaiting-answer"),this.#b=null):e===Se.CANCEL_REQUESTED?(this.#w=n.forced===!0?"forced":"requested",this.element.setAttribute("data-cancel",this.#w)):e===Se.RETRIED&&n.attempt!==null&&this.element.setAttribute("data-attempt",String(n.attempt))}#h(e){let n=this.#r.get(e.toolCallId)??this.#S(e);if(e.ok===null){n.removeAttribute("data-ok");return}n.setAttribute("data-ok",String(e.ok))}#S(e){let n=document.createElement("div");n.className="subagent-step",n.setAttribute("part","subagent-step"),n.setAttribute("role","listitem"),n.setAttribute("data-tool-call-id",e.toolCallId);let r=document.createElement("span");r.className="subagent-step-icon",r.setAttribute("part","subagent-step-icon"),r.setAttribute("aria-hidden","true");let o=document.createElement("span");return o.className="subagent-step-name",o.setAttribute("part","subagent-step-name"),o.textContent=e.name,n.append(r,o),this.#n.appendChild(n),this.#r.set(e.toolCallId,n),this.#e.disabled=!1,n}#R(){let e=this.#s?.available()&&this.#v!==null&&!this.#x;this.#a.hidden=!e;let n=this.#b;this.#c.hidden=n===null,e&&n!==null?this.element.setAttribute("data-answerable",n.id):this.element.removeAttribute("data-answerable"),this.#l.hidden=n?.text==null,this.#l.textContent=n?.text??"";let r=this.#w;this.#f.hidden=r==="forced",this.#f.textContent=r==="requested"?this.#i.subAgentForceCancel:this.#i.subAgentCancelTask,(!e||this.#E?.kind==="answer"&&this.#E.questionId!==n?.id)&&this.#j()}#F(e){if(this.#E?.kind===e.kind){this.#j();return}this.#E=e,this.#p.hidden=!1,this.#p.setAttribute("data-mode",e.kind);let n=e.kind==="steer"?this.#i.subAgentSteerPlaceholder:this.#i.subAgentAnswerPlaceholder;this.#g.placeholder=n,this.#g.setAttribute("aria-label",n),this.#d.setAttribute("aria-expanded",String(e.kind==="steer")),this.#c.setAttribute("aria-expanded",String(e.kind==="answer")),this.#g.focus()}#j(){this.#E=null,this.#p.hidden=!0,this.#p.removeAttribute("data-mode"),this.#d.setAttribute("aria-expanded","false"),this.#c.setAttribute("aria-expanded","false")}async#G(){let e=this.#g.value,n=this.#E;if(n===null||e.trim()==="")return;let r=n.kind==="steer"?{kind:"steer",message:e}:{kind:"answer",questionId:n.questionId,answer:e};await this.#M(this.#u,r)&&(this.#g.value="",this.#j())}async#M(e,n){let r=this.#v;if(this.#s===null||r===null)return!1;e.disabled=!0,this.#m.hidden=!0;let o=await this.#s.send(r,n);return e.disabled=!1,o.ok?!0:(this.#m.textContent=this.#N(o.status,o.reason),this.#m.hidden=!1,!1)}#N(e,n){return n!==null&&FC.has(n)?this.#i.subAgentControlFinished:n==="not_waiting"?this.#i.subAgentControlNotWaiting:n!==null&&GC.has(n)||n===null&&(e===404||e===405)?this.#i.subAgentControlUnavailable:this.#i.subAgentControlFailed}#I(e){this.#n.hidden=!e,this.#e.setAttribute("aria-expanded",String(e))}};function Il(t,e){let n=document.createElement("button");return n.type="button",n.className=t,n.textContent=e,n}var VC=Object.values(Se);function vp(t){return typeof t!="object"||t===null||Array.isArray(t)?null:t}function Tt(t){return typeof t=="string"&&t!==""?t:null}function jC(t){let e=vp(t);if(e===null)return null;let n=Tt(e.toolCallId),r=Tt(e.name),o=e.ok;return n===null||r===null||o!==null&&typeof o!="boolean"?null:{toolCallId:n,name:r,ok:o}}function ZC(t){let e=vp(t),n=e===null?null:Tt(e.taskId);if(e===null||n===null)return null;let r=e.forced,o=e.attempt,i=e.source;return{taskId:n,reason:Tt(e.reason),questionId:Tt(e.questionId),forced:typeof r=="boolean"?r:null,attempt:Number.isInteger(o)?o:null,message:Tt(e.message),question:Tt(e.question),answer:Tt(e.answer),source:i==="user"||i==="model"?i:null,truncated:e.truncated===!0}}function LE(t){let e=vp(t);if(e===null)return null;let n=Tt(e.delegationId),r=e.phase;return n===null||typeof r!="string"||!VC.includes(r)?null:{delegationId:n,phase:r,agent:Tt(e.agent),status:Tt(e.status),tool:jC(e.tool),task:ZC(e.task)}}var Nl=class{#e;#t=new Map;#n=new Map;constructor(e){this.#e=e}report(e){let n=LE(e);n!==null&&this.#s(n)}start(e,n,r){r!==null&&(this.#n.set(e,r),this.#s({delegationId:r,agent:n===""?null:n,phase:Se.STARTED,status:F(this.#e.strings().subAgentDelegatedTo,{agent:n}),tool:null,task:null}))}finish(e){this.#r(e,Se.FINISHED,null)}fail(e,n,r=null){let o=r===null?void 0:Lf.get(r),i=n===""?this.#e.strings().subAgentFailed:n;if(o===void 0){this.#r(e,Se.FAILED,i);return}this.#r(e,o,null,i)}clear(){this.#t.clear(),this.#n.clear()}#r(e,n,r,o=null){let i=this.#n.get(e);if(i===void 0)return;let s=this.#t.get(i)?.agent??null;this.#s({delegationId:i,agent:s,phase:n,status:r??this.#o(n,s,o),tool:null,task:null})}#o(e,n,r){let o=this.#e.strings();if(n===null)return r??o.subAgentWorking;let i=e===Se.CANCELLED?o.subAgentCancelled:e===Se.UNFINISHED?o.subAgentUnfinished:o.subAgentFinished;return F(i,{agent:n})}#i(){let e=this.#e.threadId();return{available:()=>this.#e.controls()!==null,send:async(n,r)=>{let o=this.#e.controls();return o===null?{ok:!1,status:0,reason:null}:o.send(e,n,r)}}}#s(e){let n=this.#e.card(e.delegationId);if(n===void 0)return;let r=this.#t.get(e.delegationId);r===void 0&&(r=new Cl(this.#e.strings(),this.#i()),this.#t.set(e.delegationId,r),n.subagentSlot.appendChild(r.element)),r.report(e),this.#e.follow()}};function WC(t){return{[Q.PENDING]:t.toolRunning,[Q.DEFERRED]:t.toolDeferred,[Q.DONE]:t.toolDone,[Q.ERROR]:t.toolError,[Q.DECLINED]:t.toolDeclined,[Q.INTERRUPTED]:t.toolInterrupted}}function qC(t){return{[Q.DONE]:t.resultLabel,[Q.ERROR]:t.errorLabel,[Q.DECLINED]:t.declinedLabel,[Q.INTERRUPTED]:t.interruptedLabel}}function YC(t){return new Map([["reviewer",t.answeredByReviewer],["routine",t.answeredByRoutine]])}function KC(t){try{return JSON.stringify(JSON.parse(t),null,2)}catch{return t}}var ii=class{element;approvalSlot;subagentSlot;#e;#t;#n;#r;#o;#i;#s;args;#a;#l;#d=!1;constructor(e,n,r,o=ve,i={}){this.#s=o,this.args=n,this.#a=e,this.#l=i.formatPayload??null,this.element=document.createElement("div"),this.element.className="tool-call",this.element.setAttribute("data-tool-name",e),this.element.setAttribute("data-expanded","false");let s=document.createElement("div");s.className="tool-call-head",s.setAttribute("part","tool-card-head");let a=document.createElement("span");a.className="tool-call-icon",a.setAttribute("part","tool-card-icon"),a.setAttribute("aria-hidden","true");let l=document.createElement("span");l.className="tool-call-name",l.setAttribute("part","tool-card-name"),l.textContent=r??e,this.#e=document.createElement("span"),this.#e.className="tool-call-status",this.#f(Q.PENDING),this.#t=document.createElement("span"),this.#t.className="tool-call-decision",this.#t.setAttribute("part","tool-card-decision"),this.#t.hidden=!0,s.append(a,l,this.#e,this.#t);let d=this.#g("args",o.argumentsLabel);this.#p(d.body,{kind:"arguments",toolName:e,args:n},JSON.stringify(n,null,2));let c=Object.keys(n).length>0;d.root.hidden=!c,this.element.toggleAttribute("data-has-args",c);let h=this.#g("result",o.resultLabel);this.#r=h.root,this.#o=h.label,this.#i=h.body,h.root.hidden=!0,this.#n=document.createElement("button"),this.#n.type="button",this.#n.className="tool-call-toggle",this.#n.setAttribute("part","tool-card-toggle"),this.#n.setAttribute("aria-expanded","false"),this.#n.textContent=o.details,this.#n.addEventListener("click",()=>this.#m(!this.#u()));let p=document.createElement("div");p.className="tool-call-body",p.setAttribute("part","tool-card-body"),p.append(d.root,h.root),this.approvalSlot=document.createElement("div"),this.approvalSlot.className="tool-call-approval",this.approvalSlot.setAttribute("part","tool-card-approval"),this.subagentSlot=document.createElement("div"),this.subagentSlot.className="tool-call-subagent",this.subagentSlot.setAttribute("part","tool-card-subagent"),this.element.append(s,this.subagentSlot,this.#n,p,this.approvalSlot)}mark(e){this.#d||this.#f(e)}setAsking(e){this.element.toggleAttribute("data-asking",e)}recordDecision(e){this.element.setAttribute("data-decision",e),this.#t.textContent=e==="approved"?this.#s.decisionApproved:this.#s.decisionDeclined,this.#t.hidden=!1}#c(e){if(typeof e!="string")return;let n=e.indexOf(":"),r=e.slice(0,n),o=n<0?void 0:YC(this.#s).get(r);if(o===void 0)return;this.element.setAttribute("data-answered-by",r);let i=document.createElement("span");i.className="tool-call-answered-by",i.setAttribute("part","tool-card-answered-by"),i.textContent=o,this.#t.after(i)}get settled(){return this.#d}settle(e,n,r){this.#d||(this.#d=!0,this.#f(e),this.#c(r),n.trim()!==""&&(this.#o.textContent=qC(this.#s)[e],this.#p(this.#i,{kind:"result",toolName:this.#a,status:e,text:n},KC(n)),this.#r.hidden=!1,this.element.setAttribute("data-has-result","")))}#f(e){this.element.setAttribute("data-status",e),this.element.setAttribute("part",`tool-card tool-card-${e}`),this.#e.setAttribute("part",`tool-card-status tool-card-status-${e}`),this.#e.textContent=WC(this.#s)[e]}#p(e,n,r){let o=this.#l===null?null:this.#l(n);if(o===null){e.textContent=r;return}if(e.setAttribute("data-formatted","true"),typeof o=="string"){e.textContent=o;return}e.replaceChildren(o)}#g(e,n){let r=document.createElement("div");r.className=`tool-call-section tool-call-section--${e}`,r.setAttribute("part",`tool-card-section tool-card-${e}-section`);let o=document.createElement("span");o.className="tool-call-section-label",o.setAttribute("part",`tool-card-section-label tool-card-${e}-label`),o.textContent=n;let i=document.createElement("pre");return i.className=`tool-call-${e}`,i.setAttribute("part",`tool-card-${e}`),r.append(o,i),{root:r,label:o,body:i}}#u(){return this.element.getAttribute("data-expanded")==="true"}#m(e){this.element.setAttribute("data-expanded",String(e)),this.#n.setAttribute("aria-expanded",String(e))}};var Ml=class{#e;#t;constructor(e,n){this.#e=e.endsWith("/")?e:`${e}/`,this.#t=n}list(){return this.#o(this.#e,{method:"GET"},e=>{let{routines:n,grantable:r}=e??{};return Array.isArray(n)?{routines:n.map(Ol).filter(o=>o!==null),grantable:Array.isArray(r)?zE(r):[]}:null})}create(e){return this.#r(this.#e,"POST",e,Ol)}update(e,n){return this.#r(this.#n(e),"PUT",n,Ol)}setEnabled(e,n){return this.#r(this.#n(e),"PATCH",{enabled:n},Ol)}runNow(e){return this.#r(`${this.#n(e)}run/`,"POST",{},n=>{let r=n?.threadId;return typeof r=="string"?r:null})}runs(e){return this.#o(`${this.#n(e)}runs/`,{method:"GET"},n=>{let r=n?.runs;return Array.isArray(r)?r.map(o=>{let{threadId:i,state:s}=o??{};return{threadId:typeof i=="string"?i:null,state:typeof s=="string"?s:null}}):null})}#n(e){return`${this.#e}${encodeURIComponent(e)}/`}#r(e,n,r,o){let i={method:n,headers:{"Content-Type":"application/json"},body:JSON.stringify(r)};return this.#o(e,i,o)}async#o(e,n,r){let o;try{o=await this.#t(e,n)}catch{return{ok:!1,status:0,message:null,destructive:[]}}let i=await o.json().catch(()=>null);if(o.ok){let l=r(i);if(l!==null)return{ok:!0,value:l}}let{error:s,destructive:a}=i??{};return{ok:!1,status:o.status,message:typeof s=="string"?s:null,destructive:Array.isArray(a)?a.filter(l=>typeof l=="string"):[]}}};function zE(t){let e=[];for(let n of t){let{name:r,destructive:o}=n??{};typeof r=="string"&&e.push({name:r,destructive:o===!0})}return e}function XC(t){let e=t??{},{kind:n,weekdays:r,at:o}=e,i=e.every_hours;if(n==="weekly"&&Array.isArray(r)&&typeof o=="string"){let s=r.filter(a=>Number.isInteger(a));return{kind:n,weekdays:s,at:o}}return n==="interval"&&typeof i=="number"?{kind:n,every_hours:i}:null}function Ol(t){let e=t??{},{id:n,name:r,prompt:o,timezone:i,pausedReason:s,nextFireAt:a,lastThreadId:l}=e,d=XC(e.schedule);if(typeof n!="string"||typeof r!="string"||typeof o!="string"||typeof i!="string"||d===null)return null;let c=e.preapprovedTools;return{id:n,name:r,prompt:o,schedule:d,timezone:i,enabled:e.enabled!==!1,pausedReason:typeof s=="string"?s:"",nextFireAt:typeof a=="string"?a:null,preapprovedTools:Array.isArray(c)?zE(c):[],lastThreadId:typeof l=="string"?l:null}}function et(t,e,n){let r=document.createElement("button");r.type="button",r.className=`header-btn header-btn--${t}`,r.setAttribute("part",`header-button ${t}-button`),r.title=e,r.setAttribute("aria-label",e);let o=document.createElement("slot");return o.name=`icon-${t}`,o.innerHTML=n,r.append(o),r}function bp(t,e,n,r){let o=document.createElement("slot");o.name=t,o.append(...n);let i=new WeakSet,s=a=>{let l=a===void 0?o.assignedElements():[...a.children].filter(d=>d.slot===t);for(let d of l)i.has(d)||(i.add(d),d.value=e)};return o.addEventListener("slotchange",()=>s()),{slot:o,bind:s,value:()=>{let[a]=o.assignedElements();return a===void 0?r():String(a.value)}}}function $E(t,e,n){let[r="",o=""]=t.split(":"),i=document.createElement("div");i.className="routine-time",i.setAttribute("part","routine-time"),i.setAttribute("role","group"),i.setAttribute("aria-labelledby",e);let s=DE("hour",n.routineHour),a=DE("minute",n.routineMinute);yp(s,1,24,r),yp(a,5,60,o);let l=document.createElement("span");return l.className="routine-time-colon",l.setAttribute("aria-hidden","true"),l.textContent=":",i.append(s,l,a),{element:i,value:()=>`${s.value}:${a.value}`,useStep:d=>{let c=Number(d);Number.isInteger(c)&&c>=1&&c<=30&&yp(a,c,60,a.value)}}}function DE(t,e){let n=document.createElement("select");return n.id=`routine-field-at-${t}`,n.setAttribute("aria-label",e),n}function yp(t,e,n,r){let o=[];for(let i=0;i<n;i+=e)o.push(String(i).padStart(2,"0"));o.includes(r)||(o.push(r),o.sort()),t.replaceChildren(...o.map(i=>JC(i))),t.value=r}function JC(t){let e=document.createElement("option");return e.value=t,e.textContent=t,e}function UE(t){let e=Intl.DateTimeFormat().resolvedOptions().timeZone,n=document.createElement("input");n.type="text",n.autocomplete="off",n.spellcheck=!1,n.value=t===""?e:t;let r=document.createElement("datalist");r.id="routine-zones";let o=new Set([...Intl.supportedValuesOf("timeZone"),n.value,e]);return r.append(...[...o].sort().map(i=>QC(i))),n.setAttribute("list",r.id),{input:n,list:r}}function QC(t){let e=document.createElement("option");return e.value=t,e.textContent=t,e}var wp=Date.UTC(2024,0,1),eN=864e5;function Pl(t,e){return new Intl.DateTimeFormat(e,{weekday:"short",timeZone:"UTC"}).format(wp+t*eN)}function HE(t,e,n,r,o=null){let i=document.createElement("form");i.className="skill-form routine-form",i.setAttribute("part","routine-form"),i.noValidate=!0,i.addEventListener("submit",me=>{me.preventDefault(),r()});let s=document.createElement("div");s.className="skill-form-error",s.setAttribute("role","alert"),s.hidden=!0;let a=(me,we,Pe,Rt,Ed=Pe)=>{let En=document.createElement("div");En.className="skill-field",En.dataset.field=me;let pr=document.createElement("label");if(pr.className="skill-field-label",pr.textContent=we,Pe.id=`routine-field-${me}`,pr.htmlFor=Pe.id,En.append(pr,Ed),Rt!==void 0){let Ee=document.createElement("div");Ee.className="skill-field-hint",Ee.textContent=Rt,En.append(Ee)}return En},l=(me,we)=>{let Pe=document.createElement("input");return Pe.type=me,Pe.autocomplete="off",Pe.value=we,Pe},d=l("text",t.name),c=document.createElement("textarea");c.rows=4,c.value=t.prompt;let h=document.createElement("fieldset");h.className="skill-field routine-when";let p=document.createElement("legend");p.className="skill-field-label",p.textContent=n.routineSchedule;let m=document.createElement("div");m.className="routine-kinds";let u=(me,we)=>{let Pe=document.createElement("label"),Rt=l("radio",me);return Rt.name="routine-kind",Rt.checked=t.schedule.kind===me,Rt.addEventListener("change",ee),Pe.append(Rt,we),m.append(Pe),Rt},v=u("weekly",n.routineWeekly);u("interval",n.routineInterval);let E=document.createElement("div");E.className="routine-weekly";let x=document.createElement("div");x.className="routine-days";let T=t.schedule.kind==="weekly"?t.schedule.weekdays:[0,1,2,3,4],O=[0,1,2,3,4,5,6].map(me=>{let we=document.createElement("label");we.className="routine-day",we.setAttribute("part","routine-day");let Pe=l("checkbox",String(me));return Pe.checked=T.includes(me),we.append(Pe,Pl(me)),x.append(we),Pe}),S=t.schedule.kind==="weekly"?t.schedule.at:"09:00",g=document.createElement("span");g.className="skill-field-label",g.id="routine-label-at",g.textContent=n.routineAt;let w=$E(S,g.id,n),b=bp("routine-time",S,[w.element],w.value),k=document.createElement("div");k.className="skill-field",k.dataset.field="at",k.append(g,b.slot),E.append(x,k);let I=l("number",String(t.schedule.kind==="interval"?t.schedule.every_hours:24));I.min="1",I.max="8784";let P=a("every",n.routineEvery,I);P.classList.add("routine-interval");let U=UE(t.timezone),z=bp("routine-timezone",U.input.value,[U.input,U.list],()=>U.input.value);h.append(p,m,E,P,a("timezone",n.routineTimezone,U.input,void 0,z.slot));function ee(){E.hidden=!v.checked,P.hidden=v.checked}ee();let ae=me=>{w.useStep(me.getAttribute("data-routine-minute-step")),b.bind(me),z.bind(me)};o!==null?ae(o):queueMicrotask(()=>{let me=i.getRootNode();me instanceof ShadowRoot&&ae(me.host)});let ue=document.createElement("fieldset");ue.className="skill-field routine-tools",ue.setAttribute("part","routine-tools");let qe=document.createElement("legend");qe.className="skill-field-label",qe.textContent=n.routineTools;let Gt=document.createElement("div");Gt.className="skill-field-hint",Gt.textContent=e.length===0?n.routineNoTools:n.routineToolsHint,ue.append(qe,Gt);let hr=new Set(t.preapprovedTools),wd=new Set(t.confirmDestructive);for(let me of e)ue.append(tN(me,hr,wd,n));return i.append(s,a("name",n.routineName,d),a("prompt",n.routinePrompt,c,n.routinePromptHint),h,ue),{form:i,read:()=>{let me=e.map(we=>we.name).filter(we=>hr.has(we));return{name:d.value,prompt:c.value,schedule:v.checked?{kind:"weekly",weekdays:O.flatMap((we,Pe)=>we.checked?[Pe]:[]),at:b.value()}:{kind:"interval",every_hours:Number(I.value)},timezone:z.value(),enabled:t.enabled,preapprovedTools:me,confirmDestructive:e.filter(we=>we.destructive&&hr.has(we.name)).map(we=>we.name)}},showError:me=>{s.textContent=me,s.hidden=!1,s.scrollIntoView({block:"nearest"})}}}function tN(t,e,n,r){let o=document.createElement("div");o.className="routine-tool",o.setAttribute("part","routine-tool");let i=document.createElement("label");i.className="skill-switch";let s=document.createElement("span"),a=document.createElement("code");if(a.textContent=t.name,s.append(a),t.destructive){let u=document.createElement("span");u.className="routine-destructive",u.setAttribute("part","routine-destructive"),u.textContent=r.routineDestructive,s.append(u)}let l=document.createElement("input");l.type="checkbox",l.name=t.name,l.checked=e.has(t.name),i.append(s,l),o.append(i);let d=document.createElement("div");d.className="routine-confirm",d.setAttribute("role","alertdialog"),d.hidden=!0;let c=document.createElement("p"),h=F(r.routineGrantDestructive,{name:t.name});c.textContent=h;let p=document.createElement("button");p.type="button",p.className="skill-editor-btn skill-editor-btn--danger",p.textContent=r.routineGrant;let m=document.createElement("button");return m.type="button",m.className="skill-editor-btn skill-editor-btn--ghost",m.textContent=r.cancel,d.append(c,p,m),d.setAttribute("aria-label",h),o.append(d),l.addEventListener("change",()=>{if(!l.checked){e.delete(t.name),n.delete(t.name),d.hidden=!0;return}if(t.destructive&&!n.has(t.name)){l.checked=!1,d.hidden=!1,p.focus();return}e.add(t.name)}),p.addEventListener("click",()=>{n.add(t.name),e.add(t.name),l.checked=!0,d.hidden=!0,l.focus()}),m.addEventListener("click",()=>{d.hidden=!0,l.focus()}),o}function FE(t,e,n,r=Intl.DateTimeFormat().resolvedOptions().timeZone,o){if(t.kind==="interval")return t.every_hours===1?n.routineHourly:F(n.routineEveryHours,{n:t.every_hours});let i=/^(\d{1,2}):(\d{2})$/.exec(t.at),s=i===null?0:Number(i[1])*60+Number(i[2]),a=new Intl.DateTimeFormat(o,{hour:"numeric",minute:"2-digit",timeZone:"UTC"}).format(wp+s*6e4),l=[...new Set(t.weekdays)].sort((h,p)=>h-p),d=l.join(","),c;if(d==="0,1,2,3,4,5,6")c=F(n.routineDaily,{time:a});else if(d==="0,1,2,3,4")c=F(n.routineWeekdays,{time:a});else{let h=new Intl.ListFormat(o,{style:"long"}).format(l.map(p=>Pl(p,o)));c=F(n.routineOnDays,{days:h,time:a})}return e===r?c:F(n.routineInZone,{schedule:c,zone:e})}var Ll=class{#e;#t=[];#n=[];#r=new Map;#o="closed";#i=0;#s=null;#a=!1;constructor(e){this.#e=e}get isOpen(){return this.#o!=="closed"}get atRoot(){return this.#o!=="edit"}refresh(){this.#o==="list"&&this.#a&&this.#c()}open(e){this.#l(e),this.#d(!1)}openFromConversation(e){this.#l(e),this.#d(!0)}back(){if(this.#o==="edit"){this.#o="list",this.#c();return}this.#e.onClose()}reset(){this.#i+=1,this.#t=[],this.#n=[],this.#r=new Map,this.#s=null,this.#a=!1,this.#o="closed"}#l(e){this.reset(),this.#s=e,this.#o="list"}async#d(e){let n=this.#i,r=this.#s,o=await r.list();if(n!==this.#i)return;if(!o.ok){let s=this.#e.strings(),a=document.createElement("p");a.className="skill-editor-unavailable",a.setAttribute("role","alert"),a.textContent=s.routinesUnavailable,this.#e.view.show({title:s.routines,body:[a]});return}this.#t=o.value.routines,this.#n=o.value.grantable,this.#a=!0;let i=e?this.#e.fromConversation():null;i===null?this.#c():this.#p(null,i);for(let s of this.#t)r.runs(s.id).then(a=>{n!==this.#i||!a.ok||(this.#r.set(s.id,a.value[0]??null),this.#o==="list"&&this.#c())})}#c(){let e=this.#e.strings(),n=et("new-routine",e.newRoutine,Li);n.addEventListener("click",()=>this.#p(null,null));let r=[];if(this.#e.fromConversation()!==null){let i=document.createElement("button");i.type="button",i.className="skill-editor-btn skill-editor-btn--block",i.setAttribute("part","make-routine"),i.textContent=e.makeRoutine,i.addEventListener("click",()=>this.#p(null,this.#e.fromConversation())),r.push(i)}if(this.#t.length===0){let i=document.createElement("div");i.className="skill-empty",i.setAttribute("part","routine-empty");let s=document.createElement("h3");s.textContent=e.noRoutines;let a=document.createElement("p");a.textContent=e.noRoutinesBody,i.append(s,a),this.#e.view.show({title:e.routines,actions:[n],body:[i],footer:r});return}let o=document.createElement("div");o.className="skill-rows",o.setAttribute("part","routine-rows");for(let i of this.#t)o.append(this.#f(i));this.#e.view.show({title:e.routines,sub:String(this.#t.length),actions:[n],body:[o],footer:r})}#f(e){let n=this.#e.strings(),r=document.createElement("div");r.className=e.enabled?"skill-row routine-row":"skill-row routine-row skill-row--off",r.setAttribute("part","routine-row"),r.dataset.routineId=e.id;let o=document.createElement("button");o.type="button",o.className="skill-row-open";let i=document.createElement("span");i.className="skill-row-name routine-row-name",i.textContent=e.name;let s=document.createElement("span");s.className="skill-row-desc routine-schedule",s.textContent=FE(e.schedule,e.timezone,n);let a=document.createElement("span");a.className="routine-next",a.textContent=nN(e,n);let l=document.createElement("span");l.className="skill-row-meta",l.append(a),o.append(i,s,l),o.addEventListener("click",()=>this.#p(e,null));let d=this.#r.get(e.id),c=rN(e,d,n),h=d?.threadId??e.lastThreadId,p=document.createElement(h===null?"span":"button");p.className="routine-last",p.setAttribute("part","routine-last"),p.textContent=c,p instanceof HTMLButtonElement&&h!==null&&(p.type="button",p.addEventListener("click",()=>this.#e.onOpenThread(h)));let m=document.createElement("button");m.type="button",m.className="skill-editor-btn skill-editor-btn--ghost",m.setAttribute("part","routine-toggle"),m.textContent=e.enabled?n.pause:n.resume,m.addEventListener("click",()=>{this.#m(e,!e.enabled)});let u=document.createElement("button");u.type="button",u.className="skill-editor-btn skill-editor-btn--ghost",u.setAttribute("part","routine-run"),u.textContent=n.runNow,u.addEventListener("click",()=>{this.#v(e)});let v=document.createElement("div");return v.className="routine-actions",v.append(p,m,u),r.append(o,v),r}#p(e,n){let r=this.#e.strings();this.#o="edit";let o=this.#g(e),i=e===null?{name:n?.name??"",prompt:n?.prompt??"",schedule:{kind:"weekly",weekdays:[0,1,2,3,4],at:"09:00"},timezone:Intl.DateTimeFormat().resolvedOptions().timeZone,enabled:!0,preapprovedTools:[],confirmDestructive:[]}:{name:e.name,prompt:e.prompt,schedule:e.schedule,timezone:e.timezone,enabled:e.enabled,preapprovedTools:e.preapprovedTools.map(c=>c.name),confirmDestructive:e.preapprovedTools.filter(c=>c.destructive).map(c=>c.name)},s=document.createElement("button"),a=HE(i,o,r,()=>s.click(),this.#e.element),l=document.createElement("button");l.type="button",l.className="skill-editor-btn skill-editor-btn--ghost",l.textContent=r.cancel,l.addEventListener("click",()=>this.back()),s.type="button",s.className="skill-editor-btn skill-editor-btn--primary",s.textContent=e===null?r.create:r.save,s.addEventListener("click",()=>{this.#u(e,a.read(),c=>a.showError(c))});let d=document.createElement("span");d.className="skill-editor-grow",this.#e.view.show({title:e===null?r.newRoutineTitle:r.editRoutineTitle,...e===null?{}:{sub:e.name},body:[a.form],footer:[d,l,s]})}#g(e){let n=new Map;for(let r of[...this.#n,...e?.preapprovedTools??[]])n.set(r.name,(n.get(r.name)??!1)||r.destructive);return[...n].map(([r,o])=>({name:r,destructive:o}))}async#u(e,n,r){let o=this.#s,i=this.#i,s=e===null?await o.create(n):await o.update(e.id,n);if(i===this.#i){if(!s.ok){r(s.message??this.#e.strings().routineSaveFailed);return}this.#b(s.value,this.#e.strings().routineSaved)}}async#m(e,n){let r=this.#s,o=this.#i,i=await r.setEnabled(e.id,n);if(o!==this.#i)return;let s=this.#e.strings();if(!i.ok){this.#e.view.announce(i.message??s.routineSaveFailed);return}this.#b(i.value,n?s.routineResumedStatus:s.routinePausedStatus,!1)}async#v(e){let n=this.#s,r=this.#i,o=await n.runNow(e.id);if(r!==this.#i)return;let i=this.#e.strings();if(!o.ok){this.#e.view.announce(o.message??i.routineSaveFailed);return}this.#r.set(e.id,{threadId:o.value,state:"pending"}),this.#o==="list"&&this.#c(),this.#e.view.announce(F(i.routineStarted,{name:e.name}))}#b(e,n,r=!0){let o=this.#t.some(i=>i.id===e.id);this.#t=o?this.#t.map(i=>i.id===e.id?e:i):[e,...this.#t],r&&(this.#o="list"),this.#o==="list"&&this.#c(),this.#e.view.announce(F(n,{name:e.name}))}};function nN(t,e){if(!t.enabled||t.nextFireAt===null)return t.pausedReason===""?e.routinePaused:F(e.routinePausedBecause,{reason:t.pausedReason});let n=new Intl.DateTimeFormat(void 0,{weekday:"short",month:"short",day:"numeric",hour:"numeric",minute:"2-digit"}).format(new Date(t.nextFireAt));return F(e.routineNext,{time:n})}function rN(t,e,n){let r=e?.state??null;return r==="pending"?n.routineLastPending:r==="lapsed"?n.routineLastLapsed:r==="finished"?n.routineLastFinished:(e??null)===null&&t.lastThreadId===null?n.routineLastNever:n.routineLastUnknown}var GE=`
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
`;var BE=`
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
`;var VE=`
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
`;var jE=`
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
`;var ZE=`
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
`;var WE=`
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
`;var qE=`
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
`;var YE=`
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
`;var KE=`
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
`;var XE=`
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
`;var JE=`
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
`;var QE=`
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
`;var ex=`
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
`;var tx=`
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
`;var nx=`
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
`;var rx=`
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
`;var ox=`
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
`;var ix=`
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
`;var sx=`
.child-report {
  display: flex;
  flex-direction: column;
  gap: 4px;
  align-self: flex-start;
  max-width: 100%;
  min-width: 0;
  padding: 8px 12px;
  border: 1px solid var(--_border);
  border-left: 3px solid var(--_accent);
  border-radius: 8px;
  overflow-wrap: anywhere;
}

.child-report[hidden] {
  display: none;
}

.child-report[data-outcome="failed"] {
  border-left-color: var(--_danger);
}

.child-report-title {
  color: var(--_muted);
  font-size: 0.85em;
}

.child-report-body {
  white-space: pre-wrap;
}

.child-report-link {
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

.child-report-link:hover {
  text-decoration-thickness: 2px;
}
`;var ax=`
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
`;var lx=`
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
`;var dx=`
.subagent-controls {
  display: flex;
  flex-direction: column;
  gap: 6px;
  min-width: 0;
  padding: 2px 0 4px;
}

.subagent-controls[hidden] {
  display: none;
}

.subagent-actions[hidden] {
  display: none;
}

.subagent-question {
  margin: 0;
  color: var(--_fg);
  overflow-wrap: anywhere;
  white-space: pre-wrap;
}

.subagent-actions {
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
  min-width: 0;
}

.subagent-steer,
.subagent-answer,
.subagent-cancel,
.subagent-reply-send {
  flex: none;
  padding: 3px 10px;
  border: 1px solid var(--_border);
  border-radius: 6px;
  background: var(--_bg);
  color: var(--_fg);
  font: inherit;
  font-size: 0.9em;
  cursor: pointer;
}

.subagent-steer[aria-expanded="true"],
.subagent-reply-send {
  border-color: var(--_accent);
  color: var(--_accent);
}

/* Answer is the control a waiting task needs, so it is the filled one. */
.subagent-answer {
  border-color: var(--_accent);
  background: var(--_accent);
  color: var(--_on-accent);
}

.subagent-cancel {
  color: var(--_danger);
}

.subagent-steer:disabled,
.subagent-answer:disabled,
.subagent-cancel:disabled,
.subagent-reply-send:disabled {
  cursor: default;
  opacity: 0.6;
}

.subagent-steer[hidden],
.subagent-answer[hidden],
.subagent-cancel[hidden] {
  display: none;
}

.subagent-reply {
  display: flex;
  gap: 6px;
  min-width: 0;
  margin: 0;
}

.subagent-reply[hidden] {
  display: none;
}

.subagent-reply-input {
  flex: 1 1 auto;
  min-width: 0;
  box-sizing: border-box;
  padding: 4px 8px;
  border: 1px solid var(--_border);
  border-radius: 6px;
  background: var(--_bg);
  color: var(--_fg);
  font: inherit;
}

.subagent-control-error {
  margin: 0;
  color: var(--_danger);
  font-size: 0.9em;
}
`;var cx=`
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
`;var si=['[data-tool-display="inline"]','[data-tool-display="minimal"]','[data-tool-display="compact"]','[data-tool-display="full"]'].join(", "),de=`:host(:where(:not(${si})))`,zl=`:host(:is(${si}))`;function nr(t){return`:host(:where(:not(${si}))[data-tool-group-display="${t}"]) .tool-group-list .tool-call`}var ux=`
/* \u2500\u2500 The folded tool-step group \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
   One quiet row per run of consecutive calls, the cards one click down as
   plain lines rather than boxes. Every rule is scoped to grouped mode, so
   none of it reaches a group drawn earlier once the host moves to a card
   mode. */
${de} .tool-group {
  align-self: stretch;
  display: flex;
  flex-direction: column;
  min-width: 0;
}

${de} .tool-group-head {
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

${de} .tool-group-head:not(:disabled):hover {
  background: var(--_hover);
  color: var(--_fg);
}

/* A one-step row with nothing behind it -- a call with no arguments and no
   result yet, or a blank one -- is a label, not a control: the step group
   disables it and drops its expanded state, and this drops the pointer and
   the chevron. Disabled rather than enabled-and-inert, so it takes no focus. */
${de} .tool-group-head:disabled {
  cursor: default;
}

${de} .tool-group-head:disabled .tool-group-chevron {
  display: none;
}

${de} .tool-group-head:focus-visible {
  outline: 2px solid var(--_ring);
  outline-offset: 1px;
}

${de} .tool-group-label {
  min-width: 0;
  font-weight: 500;
  color: var(--_ink-2);
  overflow-wrap: anywhere;
}

${de} .tool-group-meta {
  min-width: 0;
  color: var(--_muted);
  overflow-wrap: anywhere;
}

/* Each note opens with a middle dot, which also parts the first note from
   the label. */
${de} .tool-group-note::before {
  content: "\\00B7";
  margin: 0 6px 0 2px;
}

/* The pre-approved count belongs to the folded row: opened, each card says it.
   A meta holding nothing else goes with it, or its gap would stay. */
${de} .tool-group[data-open="true"] .tool-group-note--pre-approved,
${de} .tool-group[data-open="true"] .tool-group-meta:has(> .tool-group-note--pre-approved:only-child) {
  display: none;
}

${de} .tool-group[data-state="error"] .tool-group-meta {
  color: var(--_danger);
}

${de} .tool-group-icon {
  flex: none;
  box-sizing: border-box;
  width: 14px;
  height: 14px;
  background: currentColor;
  mask: var(--_ico-check) center / contain no-repeat;
  color: var(--_success);
}

${de} .tool-group[data-state="error"] .tool-group-icon {
  mask-image: var(--_ico-error);
  color: var(--_danger);
}

${de} .tool-group[data-state="running"] .tool-group-icon {
  mask: none;
  background: none;
  border: 2px solid var(--_muted);
  border-top-color: transparent;
  border-radius: 50%;
  animation: ag-ui-tool-spin var(--_tool-spin-duration) linear infinite;
}

/* Waiting on the user: a steady accent dot rather than a spinner, and the
   count in the accent's ink. */
${de} .tool-group[data-state="waiting"] .tool-group-icon {
  mask: none;
  border-radius: 50%;
  transform: scale(0.6);
  background: var(--_accent);
}

${de} .tool-group[data-state="waiting"] .tool-group-meta {
  color: var(--_accent-ink);
  font-weight: 500;
}

${de} .tool-group-chevron {
  flex: none;
  width: 12px;
  height: 12px;
  background: currentColor;
  mask: var(--_ico-chevron) center / contain no-repeat;
  opacity: 0.7;
  transition: transform var(--_motion) var(--_ease);
}

${de} .tool-group[data-open="true"] .tool-group-chevron {
  transform: rotate(90deg);
}

@media (prefers-reduced-motion: reduce) {
  ${de} .tool-group[data-state="running"] .tool-group-icon {
    animation: none;
  }
}

${de} .tool-group-list {
  display: flex;
  flex-direction: column;
  gap: 2px;
  margin: 2px 0 4px 6px;
  padding-left: 13px;
  border-left: 1px solid var(--_border);
}

${de} .tool-group[data-open="false"] .tool-group-list {
  display: none;
}

/* A card inside the group is one line of the list: icon, name, and its
   Details control at the end, with the arguments and result opening under
   the whole row. Its ink is the second ink in every theme, unless the host
   set the tool token, which then reaches the grouped calls too. */
${de} .tool-group .tool-call {
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

${de} .tool-group .tool-call-head {
  flex: 1 1 auto;
  justify-content: flex-start;
}

${de} .tool-group .tool-call-name {
  flex: 0 1 auto;
  font-weight: 450;
}

/* The repeat ordinal on a step whose label an earlier step has. */
${de} .tool-call-repeat {
  color: var(--_muted);
  font-variant-numeric: tabular-nums;
}

${de} .tool-group .tool-call-toggle {
  font-family: inherit;
  font-size: var(--_text-xs);
  color: var(--_muted);
}

${de} .tool-group .tool-call-body,
${de} .tool-group .tool-call-approval,
${de} .tool-group .tool-call-subagent {
  flex-basis: 100%;
}

/* The inner display mode: how an opened group draws its calls. The same
   visibility rules the card modes apply to a flat card, so a call inside the
   group shows the regions the flat card of that mode shows. The flat inline
   mode's chrome rule is left out on purpose: a card in the group has already
   lost its box and is laid out as a row of the list, and that rule's padding
   and gap would undo the row. Selected from the host attribute, so changing it
   restyles groups already on screen. */
${nr("compact")}[data-expanded="false"] .tool-call-section {
  display: none;
}

${nr("inline")} .tool-call-section--args {
  display: none;
}

${nr("minimal")} .tool-call-toggle,
${nr("minimal")} .tool-call-body {
  display: none;
}

/* The toggle over nothing, as the card modes refuse it: under every inner mode
   but compact the arguments are not behind the toggle, so a call whose result
   is missing or blank has nothing for it to open. */
:host(:where(:not(${si})):not([data-tool-group-display="compact"])) .tool-group-list .tool-call:not([data-has-result]) .tool-call-toggle {
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
${nr("minimal")}[data-status="deferred"] .tool-call-body {
  display: flex;
}

${nr("compact")}[data-status="deferred"] .tool-call-section--args:not([hidden]),
${nr("inline")}[data-status="deferred"] .tool-call-section--args:not([hidden]) {
  display: flex;
}

/* A one-step group already names its call in the row, so the card's own head
   is not drawn inside it. Under the minimal inner mode a card is only its head,
   so the row has nothing to open onto and draws no chevron. Grouped-only, so a
   card mode keeps the head. data-count is rewritten live as a run grows.

   A call that records who let it through, a person's decision or a reviewer's
   or routine's approval, keeps its head for that note alone, and keeps the
   chevron under minimal so the note can be reached. */
${de} .tool-group[data-count="1"] .tool-call:not([data-answered-by], [data-decision]) .tool-call-head,
${de} .tool-group[data-count="1"] .tool-call:is([data-answered-by], [data-decision]) .tool-call-head > :not(.tool-call-answered-by, .tool-call-decision) {
  display: none;
}

:host(:where(:not(${si}))[data-tool-group-display="minimal"]) .tool-group[data-count="1"]:not(:has(.tool-call:is([data-answered-by], [data-decision]))) .tool-group-chevron {
  display: none;
}

/* Grouping is decided as each card is built, so a card mode set afterwards
   finds groups already drawn. It flattens them: the group and its list stop
   generating boxes, the row and the repeat ordinals go, and every card lays
   out as a direct child of the answer, exactly as a card built in that mode
   does. */
${zl} .tool-group,
${zl} .tool-group-list {
  display: contents;
}

${zl} .tool-group-head,
${zl} .tool-call-repeat {
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
`;var hx=`
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
   than rendering as a blank. A task waiting on an answer is not working, so it
   is left out too and drawn below. */
.subagent[data-phase]:not([data-phase="finished"]):not([data-phase="failed"]):not(
    [data-phase="cancelled"]
  ):not([data-phase="unfinished"]):not([data-awaiting-answer])
  .subagent-icon {
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

/* A task the parent cancelled, or one still open when the run ended: nothing
   failed, so muted, on the card's own declined and interrupted glyphs. */
.subagent[data-phase="cancelled"] .subagent-icon::before {
  content: var(--_tool-icon-declined);
  color: var(--_muted);
}

.subagent[data-phase="unfinished"] .subagent-icon::before {
  content: var(--_tool-icon-interrupted);
  color: var(--_muted);
}

/* An open question: the task waits on the parent, so a still ring in the accent
   colour instead of the spinner. Cleared on the answer or the close. */
.subagent[data-awaiting-answer] .subagent-icon {
  border: 2px solid var(--_accent);
  border-radius: 50%;
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
`;var px=`
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
`;var fx=`
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
`;var mx=`
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
`;var gx=`
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
`;var vx=`
/* \u2500\u2500 Density \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */
:host([density="compact"]) {
  --_font-size: var(--ag-ui-font-size, 13px);
  --_space: var(--ag-ui-space, 6px);
  --_pad: var(--ag-ui-pad, 10px);
  --_msg-pad: var(--ag-ui-msg-pad, 5px 9px);
  --_msg-radius: var(--ag-ui-msg-radius, 10px);
}
`;var bx=`
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
`;var yx=`
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

/* The name and its scope badge share a line; a long name wraps rather than
   pushing the badge out of the row. */
.skill-row-line {
  display: flex;
  align-items: baseline;
  gap: 6px;
  min-width: 0;
}

.skill-row-line[hidden] {
  display: none;
}

.skill-row-line > .skill-row-name {
  min-width: 0;
  overflow-wrap: anywhere;
}

.skill-row-scope {
  flex: 0 0 auto;
  padding: 0 6px;
  border: 1px solid var(--_border);
  border-radius: 999px;
  color: var(--_muted);
  font-size: var(--_text-xs);
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
`;var wx=`
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
`;var Ex=`
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
`;var xx=`
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
`;var _x=`
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
`;var Tx=`
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
`;var ce={modern:':host(:not([theme~="classic"], [theme~="code"]))',quiet:':host(:not([theme~="classic"], [theme~="code"], [theme~="soft"], [theme~="ledger"]))'};var Sx=`
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
`;var kx=`
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
`;var Ax=`
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
`;var Rx=`
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
`;var Ix=`
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
`;var Cx=`
.answered-by-model {
  margin: 6px 0 0;
  font-size: 0.8em;
  color: var(--_muted);
  white-space: normal;
  overflow-wrap: anywhere;
}
`;var Nx=`
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
`;var Ox=`
.citations {
  margin-top: 8px;
  padding-top: 6px;
  border-top: 1px solid var(--_border);
  font-size: 0.85em;
  color: var(--_muted);
  white-space: normal;
}

.citations-summary {
  cursor: pointer;
  width: fit-content;
}

.citation-list {
  margin: 6px 0 0;
  padding-left: 1.4em;
}

.citation + .citation {
  margin-top: 6px;
}

/* A long URL standing in for a missing title would otherwise push the bubble
   wider than the transcript. */
.citation-title {
  color: var(--_text);
  overflow-wrap: anywhere;
}

.citation-anchor {
  display: block;
  color: var(--_text);
}

.citation-excerpt {
  margin: 2px 0 0;
  padding-left: 8px;
  border-left: 2px solid var(--_border);
  overflow-wrap: anywhere;
}
`;var Mx=`
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
`;var Px=`
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
`;var Lx=`
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
`;var zx=`
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
`;var Dx=[bx,Ex,xx,Ix,Tx,Ax,vx,nx,tx,JE,ix,ox,ex,QE,fx,XE,zx,Mx,Lx,cx,hx,dx,rx,VE,KE,BE,GE,lx,ax,Nx,qE,Px,WE,YE,jE,ZE,gx,yx,px,Cx,sx,Ox,ux,wx,Sx,kx,Rx,_x,mx].join("");function $x(t,e=[]){let n=new CSSStyleSheet;return n.replaceSync(Dx),t.adoptedStyleSheets=[n,...e],n}var Ux=4,oN=64,Dl=class{trigger;menu;#e;#t=!1;constructor(e){this.#e=e,this.trigger=et("more",e.label,mm),this.trigger.setAttribute("aria-haspopup","menu"),this.trigger.setAttribute("aria-expanded","false"),this.trigger.setAttribute("aria-controls","ag-ui-header-menu"),this.menu=document.createElement("div"),this.menu.className="header-menu",this.menu.id="ag-ui-header-menu",this.menu.setAttribute("part","header-menu"),this.menu.setAttribute("role","menu"),this.menu.setAttribute("aria-label",e.label),this.menu.hidden=!0;let{signal:n}=e;this.trigger.addEventListener("click",o=>this.toggle(o.detail===0),{signal:n}),this.trigger.addEventListener("keydown",o=>this.#l(o),{signal:n}),this.menu.addEventListener("keydown",o=>this.#d(o),{signal:n}),this.menu.addEventListener("click",()=>this.close(),{signal:n}),this.menu.addEventListener("focusout",o=>this.#c(o),{signal:n}),document.addEventListener("pointerdown",o=>this.#f(o),{signal:n});let r=new ResizeObserver(()=>this.fit());r.observe(e.header),n.addEventListener("abort",()=>r.disconnect())}get open(){return!this.menu.hidden}fit(){let{controls:e,row:n,movable:r,header:o,title:i}=this.#e,s=this.open,a=this.#n(),l=a!==null&&(e.contains(a)||this.menu.contains(a))?a:null;this.close();let d=n.filter(E=>r.includes(E)||E.parentElement===e);e.replaceChildren(...d);for(let E of r)E.removeAttribute("role"),E.removeAttribute("tabindex");this.menu.replaceChildren();let c=this.#e.menuOnly??null;c!==null&&(c.setAttribute("role","menuitem"),c.tabIndex=-1);let h=c!==null&&this.#t;h&&this.#s();let p=o.clientWidth>0,m=()=>p&&(o.scrollWidth>o.clientWidth+1||i.clientWidth<oN),u=d.length,v=()=>u>Ux+1||(h||this.#o())&&u>Ux;for(let E of r){if(!v()&&!m())break;this.#i(E),u-=1}h&&this.menu.append(c),s&&this.#o()&&this.show(!1),this.#r(l)}offer(e){this.#t!==e&&(this.#t=e,this.fit())}#n(){try{return this.#e.controls.getRootNode().activeElement??null}catch{return null}}#r(e){if(e===null)return;(this.menu.contains(e)&&!this.open||!e.isConnected?this.trigger:e).focus()}toggle(e=!1){this.open?this.close():this.show(e)}show(e){let n=this.#a();if(n.length===0)return;let{header:r}=this.#e;this.menu.style.insetBlockStart=`${r.offsetTop+r.offsetHeight+4}px`,this.menu.hidden=!1,this.trigger.setAttribute("aria-expanded","true"),e!==!1&&(e==="last"?n[n.length-1]:n[0])?.focus()}close(e=!1){this.open&&(this.menu.hidden=!0,this.trigger.setAttribute("aria-expanded","false"),e&&this.trigger.focus())}#o(){return this.menu.childElementCount>0}#i(e){let{row:n}=this.#e;this.#s(),e.setAttribute("role","menuitem"),e.tabIndex=-1;let r=this.#a().find(o=>n.indexOf(o)>n.indexOf(e));this.menu.insertBefore(e,r??null)}#s(){let{controls:e}=this.#e;if(this.trigger.parentElement!==e){let n=e.querySelector(".header-btn--maximize")??e.lastElementChild;e.insertBefore(this.trigger,n)}}#a(){return[...this.menu.children]}#l(e){(e.key==="ArrowDown"||e.key==="ArrowUp")&&(e.preventDefault(),this.show(e.key==="ArrowUp"?"last":!0))}#d(e){let n=this.#a(),r=n.indexOf(e.target),i={ArrowDown:(r+1)%n.length,ArrowUp:(r-1+n.length)%n.length,Home:0,End:n.length-1}[e.key];i!==void 0?(e.preventDefault(),n[i]?.focus()):e.key==="Escape"&&(e.preventDefault(),e.stopPropagation(),this.close(!0))}#c(e){let n=e.relatedTarget;n!==null&&!this.menu.contains(n)&&n!==this.trigger&&this.close()}#f(e){let n=e.composedPath();this.open&&!n.includes(this.menu)&&!n.includes(this.trigger)&&this.close()}};function Kr(t,e,n,r){let o=document.createElement("span");o.className="icon-holder",o.setAttribute("part",e);let i=document.createElement("slot");if(i.name=t,r!==null){let s=document.createElement("img");s.className="icon-img",s.src=r,s.alt="",i.append(s)}else n!==null&&(i.innerHTML=n);return o.append(i),o}function Hx(t){let{strings:e}=t,n=document.createElement("div");n.className="header",n.setAttribute("part","header");let r=t.title;r.className="header-title",r.setAttribute("part","title"),r.textContent=t.titleText,(t.host.querySelector('[slot="icon"]')!==null||t.iconUrl!==null)&&n.append(Kr("icon","icon",null,t.iconUrl));let o=document.createElement("slot");o.name="header-actions";let i=document.createElement("div");i.className="header-controls",i.setAttribute("part","header-controls");let s=et("history",e.chatHistory,em);s.addEventListener("click",t.onHistory);let a=et("checkpoints",e.checkpoints,rm);a.addEventListener("click",t.onCheckpoints);let l=et("new",e.newChat,Qf);l.addEventListener("click",t.onNewChat);let d=et("collapse",e.collapse,go);d.addEventListener("click",t.onCollapse);let c=et("maximize",e.maximize,Pi);c.addEventListener("click",t.onMaximize);let h=null;t.onSkills!==null&&(h=et("skills",e.skills,tm),h.addEventListener("click",t.onSkills));let p=null;t.onRoutines!==null&&(p=et("routines",e.routines,fc),p.addEventListener("click",t.onRoutines));let m=null;t.onMakeRoutine!==null&&(m=et("make-routine",e.makeRoutine,fc),m.addEventListener("click",t.onMakeRoutine));let u=t.themeToggle;u!==null&&(u.type="button",u.className="header-btn header-btn--theme",u.setAttribute("part","header-button theme-toggle"),u.title=e.toggleTheme,u.setAttribute("aria-label",e.toggleTheme),u.addEventListener("click",t.onToggleTheme,{signal:t.signal}));let v=t.withCheckpoints?a:null,E=O=>O.filter(S=>S!==null),x=E([h,p,s,v,l,u,c,d]);i.append(...E([h,p,s,v,l,u,d])),n.append(r,o,i);let T=new Dl({header:n,title:r,controls:i,row:x,movable:E([u,h,p,v,s]),menuOnly:m,label:e.moreControls,signal:t.signal});return T.fit(),{header:n,checkpoints:a,maximize:c,collapse:d,overflow:T}}function Fx(t){let{launcher:e,badge:n,railLabel:r,bar:o,barHistory:i,barPlace:s}=t;e.className="launcher",e.type="button",e.setAttribute("part","launcher"),e.setAttribute("aria-label",t.strings.expand),n.className="launcher-badge",n.setAttribute("part","launcher-badge"),n.setAttribute("aria-hidden","true"),n.hidden=!0,r.className="rail-label",r.setAttribute("part","rail-label"),r.setAttribute("aria-hidden","true"),r.textContent=t.titleText,e.replaceChildren(Kr("launcher","launcher-icon",om,t.iconUrl),r,n),e.addEventListener("click",t.onOpen,{signal:t.signal}),o.className="dock-bar",o.setAttribute("part","bar"),i.className="bar-history",i.type="button",i.setAttribute("part","bar-history"),i.title=t.strings.chatHistory,i.setAttribute("aria-label",t.strings.chatHistory);let a=document.createElement("span");a.className="bar-history-glyph",a.setAttribute("aria-hidden","true"),a.textContent="\u2630",i.replaceChildren(a),i.addEventListener("click",t.onHistory,{signal:t.signal}),o.replaceChildren(e,s,i)}function Gx(t,e,n){switch(t){case"chevron-up":return Kf;case"chevron-down":return go;case"chevron-left":return Jf;case"chevron-right":return Xf}let r=e==="sidebar"||e==="side";return t!=="panel-close"&&!r?go:r&&n==="left"?Yf:qf}function Bx(t){return t.getAttribute("data-unread-badge")!=="false"}var $l=class{element;#e;#t;#n;#r;#o;#i;#s;#a;#l;constructor(e,n,r={}){this.#a=e,this.#l=r.atRoot??null,this.element=document.createElement("div"),this.element.className="panel-view",this.element.setAttribute("part","panel-view"),this.element.setAttribute("role","region"),this.element.hidden=!0;let o=document.createElement("div");o.className="panel-view-bar",o.setAttribute("part","panel-view-bar"),this.#e=et("back",e(),nm),this.#e.addEventListener("click",n);let i=document.createElement("div");i.className="panel-view-heading",this.#t=document.createElement("h2"),this.#t.className="panel-view-title",this.#t.setAttribute("part","panel-view-title"),this.#l!==null&&(this.#t.tabIndex=-1),this.#n=document.createElement("span"),this.#n.className="panel-view-sub",i.append(this.#t,this.#n),this.#r=document.createElement("div"),this.#r.className="panel-view-actions",o.append(this.#e,i,this.#r),this.#o=document.createElement("div"),this.#o.className="panel-view-body",this.#o.setAttribute("part","panel-view-body"),this.#i=document.createElement("div"),this.#i.className="panel-view-footer",this.#i.setAttribute("part","panel-view-footer"),this.#s=document.createElement("div"),this.#s.className="panel-view-status",this.#s.setAttribute("role","status"),this.element.append(o,this.#o,this.#i,this.#s),this.element.addEventListener("keydown",s=>{s.key==="Escape"&&(s.stopPropagation(),n())})}get isOpen(){return!this.element.hidden}show(e){let n=this.#l?.()??!1,r=this.element.getRootNode().activeElement,o=r!==null&&this.element.contains(r);this.#e.hidden=n;let i=this.#a();this.#e.title=i,this.#e.setAttribute("aria-label",i),this.#t.textContent=e.title,this.#n.textContent=e.sub??"",this.#n.hidden=e.sub===void 0,this.#r.replaceChildren(...e.actions??[]),this.#o.replaceChildren(...e.body),this.#o.scrollTop=0,this.#i.replaceChildren(...e.footer??[]),this.#i.hidden=e.footer===void 0||e.footer.length===0,this.element.setAttribute("aria-label",e.title),this.#s.textContent="",this.element.hidden=!1,this.#l===null?this.#e.focus():o&&(n?this.#t:this.#e).focus()}focusHeading(){this.#t.focus()}announce(e){this.#s.textContent=e}close(){this.element.hidden=!0,this.#r.replaceChildren(),this.#o.replaceChildren(),this.#i.replaceChildren(),this.#s.textContent=""}};function Vx(t){return t.getAttribute("data-launcher-icon-url")??t.getAttribute("data-icon-url")}var iN=["name","description","body"];function jx(t,e,n){let r=document.createElement("form");r.className="skill-form",r.setAttribute("part","skill-form"),r.noValidate=!0,r.addEventListener("submit",g=>{g.preventDefault(),n()});let o=document.createElement("div");o.className="skill-form-error",o.setAttribute("role","alert"),o.hidden=!0;let i=document.createElement("input");i.type="text",i.spellcheck=!1,i.autocomplete="off",i.value=t.name;let s=document.createElement("textarea");s.rows=3,s.value=t.description;let a=document.createElement("textarea");a.className="skill-form-body",a.spellcheck=!1,a.value=t.body;let l=new Map,d=(g,w,b,k)=>{let I=document.createElement("div");I.className="skill-field",I.dataset.field=g;let P=document.createElement("label");P.className="skill-field-label",P.textContent=w;let U=`skill-field-${g}`;b.id=U,P.htmlFor=U;let z=document.createElement("div");z.className="skill-field-error",z.setAttribute("role","alert"),z.hidden=!0;let ee=document.createElement("div");ee.className="skill-field-hint",ee.textContent=k;let ae=b;if(g==="name"){ae=document.createElement("div"),ae.className="skill-field-slash";let ue=document.createElement("span");ue.textContent="/",ae.append(ue,b)}return I.append(P,ae,z,ee),l.set(g,{wrap:I,error:z}),I},c=d("name",e.skillName,i,e.skillNameHint),h=d("description",e.skillDescription,s,e.skillDescriptionHint),p=document.createElement("fieldset");p.className="skill-field skill-reach";let m=document.createElement("legend");m.className="skill-field-label",m.textContent=e.skillReach;let u=document.createElement("div");u.className="skill-notice",u.textContent=e.skillUnreachable;let v=(g,w,b)=>{let k=document.createElement("label");k.className="skill-switch";let I=document.createElement("span"),P=document.createElement("b");P.textContent=g;let U=document.createElement("small");U.textContent=w,I.append(P,U);let z=document.createElement("input");return z.type="checkbox",z.checked=b,z.addEventListener("change",T),k.append(I,z),p.append(k),z};p.append(m);let E=v(e.skillInMenu,e.skillInMenuHint,t.userInvocable),x=v(e.skillAgentMayLoad,e.skillAgentMayLoadHint,t.modelInvocable);p.append(u);function T(){u.hidden=E.checked||x.checked}T();let O=d("body",e.skillBody,a,e.skillBodyHint);r.append(o,c,h,p,O);let S={name:i,description:s,body:a};return{form:r,read:()=>({name:i.value,description:s.value,body:a.value,userInvocable:E.checked,modelInvocable:x.checked}),showError:(g,w)=>{o.hidden=!0;for(let[P,{wrap:U,error:z}]of l)z.hidden=!0,U.classList.remove("skill-field--bad"),S[P].removeAttribute("aria-invalid");let b=iN.find(P=>P===w);if(b===void 0){o.textContent=g,o.hidden=!1;return}let{wrap:k,error:I}=l.get(b);I.textContent=g,I.hidden=!1,k.classList.add("skill-field--bad"),S[b].setAttribute("aria-invalid","true"),S[b].focus()}}}function sN(t,e){let{scope:n}=t,r=n===void 0?void 0:e[`skillScope:${n}`];if(n===void 0||typeof r!="string")return[];let o=document.createElement("span");return o.className="skill-row-scope",o.setAttribute("part","skill-scope"),o.dataset.scope=n,o.textContent=r,[o]}var aN={name:"",description:"",body:"",userInvocable:!0,modelInvocable:!0},Ul=class{#e;#t=[];#n="closed";#r=0;#o=null;constructor(e){this.#e=e}get isOpen(){return this.#n!=="closed"}get atRoot(){return this.#n!=="edit"}open(e){this.#o=e,this.#r+=1,this.#n="list",this.#i()}back(){if(this.#n==="edit"){this.#n="list",this.#a();return}this.#e.onClose()}refresh(){this.#n==="list"&&(this.#r+=1,this.#i())}reset(){this.#r+=1,this.#t=[],this.#o=null,this.#n="closed"}async#i(){let e=this.#r,n=await this.#o.list();if(e===this.#r){if(!n.ok){this.#s();return}this.#t=n.value,this.#a()}}#s(){let e=this.#e.strings(),n=document.createElement("p");n.className="skill-editor-unavailable",n.setAttribute("role","alert"),n.textContent=e.skillsUnavailable,this.#e.view.show({title:e.skills,body:[n]})}#a(){let e=this.#e.strings(),n=et("new-skill",e.newSkill,Li);if(n.addEventListener("click",()=>this.#f(null)),this.#t.length===0){this.#e.view.show({title:e.skills,actions:[n],body:[this.#d()]});return}let r=document.createElement("div");r.className="skill-rows",r.setAttribute("part","skill-rows");for(let o of this.#t)r.append(this.#l(o));this.#e.view.show({title:e.skills,sub:String(this.#t.length),actions:[n],body:[r],footer:this.#c("skill-editor-btn skill-editor-btn--block")})}#l(e){let n=this.#e.strings(),r=document.createElement("div");r.className=e.enabled?"skill-row":"skill-row skill-row--off",r.setAttribute("part","skill-row");let o=document.createElement("button");o.type="button",o.className="skill-row-open";let i=document.createElement("span");i.className="skill-row-name",i.textContent=`/${e.name}`;let s=document.createElement("span");s.className="skill-row-desc",s.textContent=e.description;let a=document.createElement("span");a.className="skill-row-line",a.append(i,...sN(e,n));let l=document.createElement("span");l.className="skill-row-meta";let d=[e.enabled?null:n.skillOff,e.userInvocable?n.skillInMenu:null,e.modelInvocable?n.skillAgentMayLoad:null];for(let c of d)if(c!==null){let h=document.createElement("span");h.textContent=c,l.append(h)}if(o.append(a,s,l),o.addEventListener("click",()=>this.#f(e)),r.append(o),!e.enabled){let c=document.createElement("button");c.type="button",c.className="skill-editor-btn skill-editor-btn--ghost",c.textContent=n.turnOn,c.addEventListener("click",()=>{this.#g(e,!0)}),r.append(c)}return r}#d(){let e=this.#e.strings(),n=document.createElement("div");n.className="skill-empty",n.setAttribute("part","skill-empty");let r=document.createElement("h3");r.textContent=e.noSkills;let o=document.createElement("p"),i=e.noSkillsBody,s=i.indexOf("{example}");if(s<0)o.textContent=i;else{let l=document.createElement("code");l.textContent="/weekly-report",o.append(i.slice(0,s),l,i.slice(s+9))}let a=document.createElement("button");return a.type="button",a.className="skill-editor-btn skill-editor-btn--ghost",a.textContent=e.writeSkill,a.addEventListener("click",()=>this.#f(null)),n.append(r,o,...this.#c("skill-editor-btn skill-editor-btn--primary"),a),n}#c(e){let n=this.#e.onDraft;if(n===null)return[];let r=document.createElement("button");return r.type="button",r.className=e,r.textContent=this.#e.strings().draftSkill,r.addEventListener("click",()=>n()),[r]}#f(e){let n=this.#e.strings();this.#n="edit";let r=document.createElement("button"),o=jx(e??aN,n,()=>r.click()),i=document.createElement("button");i.type="button",i.className="skill-editor-btn skill-editor-btn--ghost",i.textContent=n.cancel,i.addEventListener("click",()=>this.back()),r.type="button",r.className="skill-editor-btn skill-editor-btn--primary",r.textContent=e===null?n.create:n.save,r.addEventListener("click",()=>{this.#p(e,o.read(),l=>{o.showError(l.message??n.skillSaveFailed,l.field)})});let s=document.createElement("span");s.className="skill-editor-grow";let a=[];if(e?.enabled===!0){let l=document.createElement("button");l.type="button",l.className="skill-editor-btn skill-editor-btn--danger",l.textContent=n.turnOff,l.addEventListener("click",()=>{this.#g(e,!1)}),a.push(l)}a.push(s,i,r),this.#e.view.show({title:e===null?n.newSkillTitle:n.editSkillTitle,...e===null?{}:{sub:`/${e.name}`},body:[o.form],footer:a})}async#p(e,n,r){let o=this.#o,i=this.#r,s=e===null?await o.create(n):await o.update(e.id,n);if(i===this.#r){if(!s.ok){r(s);return}this.#u(s.value,this.#e.strings().skillSaved)}}async#g(e,n){let r=this.#o,o=this.#r,i=await r.setEnabled(e.id,n);if(o!==this.#r)return;let s=this.#e.strings();if(!i.ok){this.#n="list",this.#a(),this.#e.view.announce(i.message??s.skillSaveFailed);return}this.#u(i.value,n?s.skillTurnedOn:s.skillTurnedOff)}#u(e,n){let r=this.#t.some(o=>o.id===e.id);this.#t=r?this.#t.map(o=>o.id===e.id?e:o):[e,...this.#t],this.#n="list",this.#a(),this.#e.view.announce(F(n,{name:e.name})),this.#e.onChanged()}};var lN=new Set(["ADDRESS","ARTICLE","ASIDE","BLOCKQUOTE","DD","DIV","DL","DT","FIGCAPTION","FIGURE","FOOTER","H1","H2","H3","H4","H5","H6","HEADER","HR","MAIN","NAV","OL","P","SECTION","UL"]);function Hl(t){let e=t.cloneNode(!0);for(let n of Array.from(e.querySelectorAll("button")))n.remove();for(let n of Array.from(e.querySelectorAll(":scope > .citations, :scope > .answered-by-model")))n.remove();return{text:uN(Zx(e)),html:e.innerHTML}}function Zx(t){if(t.nodeType===Node.TEXT_NODE)return t.nodeValue.replace(/\s+/g," ");if(t.nodeType!==Node.ELEMENT_NODE)return"";let e=t,n=e.tagName;if(n==="BR")return`
`;if(n==="PRE")return`

${qx(e)}

`;if(n==="TABLE")return`

${cN(e)}

`;if(n==="UL"||n==="OL")return`

${dN(e,n==="OL")}

`;let r=Wx(e);return lN.has(n)?`

${r}

`:r}function Wx(t){let e="";for(let n of Array.from(t.childNodes))e+=Zx(n);return e}function dN(t,e){return Array.from(t.children).map((n,r)=>`${e?`${r+1}. `:"- "}${Wx(n).trim()}`).join(`
`)}function cN(t){return Array.from(t.querySelectorAll("tr")).map(e=>Array.from(e.children).map(n=>qx(n).replace(/\s+/g," ").trim()).join("	")).join(`
`)}function qx(t){return t.textContent}function uN(t){return t.replace(/[^\S\n]+\n/g,`
`).replace(/\n{3,}/g,`

`).trim()}var hN=1500;function xp(t,e){if(Kx(t)!==null)return;let n=Fl(t,e.strings),r=e.text;r!==void 0&&n.appendChild(pN(e.strings,r,e.html)),e.onFeedback!==void 0&&n.append(Yx("up",e.strings.feedbackUp,e.onFeedback),Yx("down",e.strings.feedbackDown,e.onFeedback))}function Fl(t,e){let n=Kx(t);if(n!==null)return n;let r=document.createElement("div");return r.className="message-actions",r.setAttribute("part","message-actions"),r.setAttribute("role","group"),r.setAttribute("aria-label",e.messageActions),t.after(r),r}function Kx(t){let e=t.nextElementSibling;return e?.classList.contains("message-actions")===!0?e:null}function Gl(t,e,n){let r=document.createElement("button");r.type="button",r.className=`message-action message-action--${t}`,r.setAttribute("part",`message-action message-action-${t}`),Ep(r,e);let o=document.createElement("span");return o.className="message-action-icon",o.setAttribute("part",`message-action-icon message-action-icon-${t}`),o.setAttribute("aria-hidden","true"),o.innerHTML=n,r.appendChild(o),r}function Ep(t,e){t.title=e,t.setAttribute("aria-label",e),t.dataset.tooltip=e}function pN(t,e,n){let r=Gl("copy",t.copyMessage,im);return r.addEventListener("click",()=>{fN(e(),n?.()).then(o=>{mN(r,o?t.copied:t.copyFailed,t.copyMessage)})}),r}async function fN(t,e){let n=navigator.clipboard;if(n===void 0)return!1;if(e!==void 0&&typeof ClipboardItem=="function")try{return await n.write([new ClipboardItem({"text/plain":new Blob([t],{type:"text/plain"}),"text/html":new Blob([e],{type:"text/html"})})]),!0}catch{}try{return await n.writeText(t),!0}catch{return!1}}function Yx(t,e,n){let r=Gl(t,e,t==="up"?am:lm);return r.addEventListener("click",()=>{let o=r.getAttribute("aria-pressed")==="true";r.setAttribute("aria-pressed",o?"false":"true"),n(t)}),r.setAttribute("aria-pressed","false"),r}function mN(t,e,n){Ep(t,e),t.classList.add("message-action--confirmed"),setTimeout(()=>{Ep(t,n),t.classList.remove("message-action--confirmed")},hN)}var Bl=class{#e;#t=null;constructor(e){this.#e=e}forget(){this.#t=null}attach(e,n){let r=this.#r(),o=r.has(An.COPY),i="messageId"in n?n:null,s=i!==null&&r.has(An.FEEDBACK),a=this.#e.threadId();(o||s)&&xp(e,{strings:this.#e.strings(),...o?{text:()=>Hl(e).text,html:()=>Hl(e).html}:{},...s?{onFeedback:l=>{this.#e.element.dispatchEvent(new CustomEvent(sc,{detail:{content:Hl(e).text,rating:l,messageId:i.messageId,threadId:a,...i.runId===void 0?{}:{runId:i.runId}},bubbles:!0,composed:!0}))}}:{}}),r.has(An.RETRY)&&this.#e.retryable()&&this.#n(Fl(e,this.#e.strings())),this.#e.follow()}withdrawRetry(){this.#t?.querySelector(".message-action--retry")?.remove(),this.#t=null}#n(e){this.withdrawRetry();let n=Gl("retry",this.#e.strings().retryMessage,sm);n.addEventListener("click",()=>{this.#e.retry()}),e.prepend(n),this.#t=e}#r(){let e=this.#e.element.getAttribute("data-message-actions");return e===null?new Set([An.COPY,An.RETRY]):new Set(Zr(e))}};function gN(t,e){this.v=t,this.k=e}function Xx(t,e){(e==null||e>t.length)&&(e=t.length);for(var n=0,r=Array(e);n<e;n++)r[n]=t[n];return r}function vN(t){if(Array.isArray(t))return t}function bN(t,e){var n=t==null?null:typeof Symbol<"u"&&t[Symbol.iterator]||t["@@iterator"];if(n!=null){var r,o,i,s,a=[],l=!0,d=!1;try{if(i=(n=n.call(t)).next,e===0){if(Object(n)!==n)return;l=!1}else for(;!(l=(r=i.call(n)).done)&&(a.push(r.value),a.length!==e);l=!0);}catch(c){d=!0,o=c}finally{try{if(!l&&n.return!=null&&(s=n.return(),Object(s)!==s))return}finally{if(d)throw o}}return a}}function yN(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function wN(t,e){return vN(t)||bN(t,e)||EN(t,e)||yN()}function EN(t,e){if(t){if(typeof t=="string")return Xx(t,e);var n={}.toString.call(t).slice(8,-1);return n==="Object"&&t.constructor&&(n=t.constructor.name),n==="Map"||n==="Set"?Array.from(t):n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?Xx(t,e):void 0}}function Vl(t){var e,n;function r(i,s){try{var a=t[i](s),l=a.value,d=l instanceof gN;Promise.resolve(d?l.v:l).then(function(c){if(d){var h=i==="return"&&l.k?i:"next";if(!l.k||c.done)return r(h,c);c=t[h](c).value}o(!!a.done,c)},function(c){r("throw",c)})}catch(c){o(2,c)}}function o(i,s){i===2?e.reject(s):e.resolve({value:s,done:i}),(e=e.next)?r(e.key,e.arg):n=null}this._invoke=function(i,s){return new Promise(function(a,l){var d={key:i,arg:s,resolve:a,reject:l,next:null};n?n=n.next=d:(e=n=d,r(i,s))})},typeof t.return!="function"&&(this.return=void 0)}Vl.prototype[typeof Symbol=="function"&&Symbol.asyncIterator||"@@asyncIterator"]=function(){return this},Vl.prototype.next=function(t){return this._invoke("next",t)},Vl.prototype.throw=function(t){return this._invoke("throw",t)},Vl.prototype.return=function(t){return this._invoke("return",t)};var c_=Object.entries,xN=Object.keys,Jx=Object.setPrototypeOf,_N=Object.isFrozen,u_=Object.getPrototypeOf,h_=Object.getOwnPropertyDescriptor,Ze=Object.freeze,Ue=Object.seal,gn=Object.create,p_=typeof Reflect<"u"&&Reflect,Wl=p_.apply,Mp=p_.construct;Ze||(Ze=function(e){return e});Ue||(Ue=function(e){return e});Wl||(Wl=function(e,n){for(var r=arguments.length,o=new Array(r>2?r-2:0),i=2;i<r;i++)o[i-2]=arguments[i];return e.apply(n,o)});Mp||(Mp=function(e){for(var n=arguments.length,r=new Array(n>1?n-1:0),o=1;o<n;o++)r[o-1]=arguments[o];return new e(...r)});var en=Ce(Array.prototype.forEach),TN=Ce(Array.prototype.lastIndexOf),Qx=Ce(Array.prototype.pop),ai=Ce(Array.prototype.push),SN=Ce(Array.prototype.slice),kN=Ce(Array.prototype.splice),Xr=Array.isArray,_p=f_(Set),Tp=Ce(Set.prototype.add),li=Ce(Set.prototype.has),rr=Ce(String.prototype.toLowerCase),Sp=Ce(String.prototype.toString),AN=Ce(String.prototype.match),jl=Ce(String.prototype.replace),kp=Ce(String.prototype.indexOf),RN=Ce(String.prototype.trim),IN=Ce(Number.prototype.toString),CN=Ce(Boolean.prototype.toString),e_=typeof BigInt>"u"?null:Ce(BigInt.prototype.toString),t_=typeof Symbol>"u"?null:Ce(Symbol.prototype.toString),ot=Ce(Object.prototype.hasOwnProperty),di=Ce(Object.prototype.toString),NN=RegExp.prototype.test,je=function(e,n){return e instanceof RegExp&&(e.lastIndex=0),Wl(NN,e,[n])},tn=f_(TypeError);function Ce(t){return function(e){for(var n=arguments.length,r=new Array(n>1?n-1:0),o=1;o<n;o++)r[o-1]=arguments[o];return Wl(t,e,r)}}function f_(t){return function(){for(var e=arguments.length,n=new Array(e),r=0;r<e;r++)n[r]=arguments[r];return Mp(t,n)}}function pe(t,e){let n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:rr;if(Jx&&Jx(t,null),!Xr(e))return t;let r=e.length;for(;r--;){let o=e[r];if(typeof o=="string"){let i=n(o);i!==o&&(_N(e)||(e[r]=i),o=i)}t[o]=!0}return t}function ON(t){for(let e=0;e<t.length;e++)ot(t,e)||(t[e]=null);return t}function ql(t){let e=gn(null);for(let r of c_(t)){var n=wN(r,2);let o=n[0],i=n[1];ot(t,o)&&(Xr(i)?e[o]=ON(i):i&&typeof i=="object"&&i.constructor===Object?e[o]=ql(i):e[o]=i)}return e}function ci(t){let e=gn(null),n=xN(t),r=n.length;for(;r--;)e[n[r]]=t[n[r]];return e}function MN(t){switch(typeof t){case"string":return t;case"number":return IN(t);case"boolean":return CN(t);case"bigint":return e_?e_(t):"0";case"symbol":return t_?t_(t):"Symbol()";case"undefined":return di(t);case"function":case"object":{if(t===null)return di(t);let e=t,n=gt(e,"toString");if(typeof n=="function"){let r=n(e);return typeof r=="string"?r:di(r)}return di(t)}default:return di(t)}}function gt(t,e){for(;t!==null;){let r=h_(t,e);if(r){if(r.get)return Ce(r.get);if(typeof r.value=="function")return Ce(r.value)}t=u_(t)}function n(){return null}return n}function PN(t,e){for(;t!==null;){let n=h_(t,e);if(n)return n.get?Ce(n.get):null;t=u_(t)}return null}function LN(t){if(!t)return!1;try{return je(t,""),!0}catch{return!1}}var n_=Ze(["a","abbr","acronym","address","area","article","aside","audio","b","bdi","bdo","big","blink","blockquote","body","br","button","canvas","caption","center","cite","code","col","colgroup","content","data","datalist","dd","decorator","del","details","dfn","dialog","dir","div","dl","dt","element","em","fieldset","figcaption","figure","font","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","img","input","ins","kbd","label","legend","li","main","map","mark","marquee","menu","menuitem","meter","nav","nobr","ol","optgroup","option","output","p","picture","pre","progress","q","rp","rt","ruby","s","samp","search","section","select","shadow","slot","small","source","spacer","span","strike","strong","style","sub","summary","sup","table","tbody","td","template","textarea","tfoot","th","thead","time","tr","track","tt","u","ul","var","video","wbr"]),Ap=Ze(["svg","a","altglyph","altglyphdef","altglyphitem","animatecolor","animatemotion","animatetransform","circle","clippath","defs","desc","ellipse","filter","font","g","glyph","glyphref","hkern","image","line","lineargradient","marker","mask","metadata","mpath","path","pattern","polygon","polyline","radialgradient","rect","stop","style","switch","symbol","text","textpath","title","tref","tspan","view","vkern"]),Rp=Ze(["feBlend","feColorMatrix","feComponentTransfer","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feDistantLight","feDropShadow","feFlood","feFuncA","feFuncB","feFuncG","feFuncR","feGaussianBlur","feImage","feMerge","feMergeNode","feMorphology","feOffset","fePointLight","feSpecularLighting","feSpotLight","feTile","feTurbulence"]),zN=Ze(["animate","color-profile","cursor","discard","font-face","font-face-format","font-face-name","font-face-src","font-face-uri","foreignobject","hatch","hatchpath","mesh","meshgradient","meshpatch","meshrow","missing-glyph","script","set","solidcolor","unknown","use"]),Ip=Ze(["math","menclose","merror","mfenced","mfrac","mglyph","mi","mlabeledtr","mmultiscripts","mn","mo","mover","mpadded","mphantom","mroot","mrow","ms","mspace","msqrt","mstyle","msub","msup","msubsup","mtable","mtd","mtext","mtr","munder","munderover","mprescripts"]),DN=Ze(["maction","maligngroup","malignmark","mlongdiv","mscarries","mscarry","msgroup","mstack","msline","msrow","semantics","annotation","annotation-xml","mprescripts","none"]),r_=Ze(["#text"]),o_=Ze(["accept","action","align","alt","autocapitalize","autocomplete","autopictureinpicture","autoplay","background","bgcolor","border","capture","cellpadding","cellspacing","checked","cite","class","clear","color","cols","colspan","command","commandfor","controls","controlslist","coords","crossorigin","datetime","decoding","default","dir","disabled","disablepictureinpicture","disableremoteplayback","download","draggable","enctype","enterkeyhint","exportparts","face","for","headers","height","hidden","high","href","hreflang","id","inert","inputmode","integrity","ismap","kind","label","lang","list","loading","loop","low","max","maxlength","media","method","min","minlength","multiple","muted","name","nonce","noshade","novalidate","nowrap","open","optimum","part","pattern","placeholder","playsinline","popover","popovertarget","popovertargetaction","poster","preload","pubdate","radiogroup","readonly","rel","required","rev","reversed","role","rows","rowspan","spellcheck","scope","selected","shape","size","sizes","slot","span","srclang","start","src","srcset","step","style","summary","tabindex","title","translate","type","usemap","valign","value","width","wrap","xmlns"]),Cp=Ze(["accent-height","accumulate","additive","alignment-baseline","amplitude","ascent","attributename","attributetype","azimuth","basefrequency","baseline-shift","begin","bias","by","class","clip","clippathunits","clip-path","clip-rule","color","color-interpolation","color-interpolation-filters","color-profile","color-rendering","cx","cy","d","dx","dy","diffuseconstant","direction","display","divisor","dominant-baseline","dur","edgemode","elevation","end","exponent","fill","fill-opacity","fill-rule","filter","filterunits","flood-color","flood-opacity","font-family","font-size","font-size-adjust","font-stretch","font-style","font-variant","font-weight","fx","fy","g1","g2","glyph-name","glyphref","gradientunits","gradienttransform","height","href","id","image-rendering","in","in2","intercept","k","k1","k2","k3","k4","kerning","keypoints","keysplines","keytimes","lang","lengthadjust","letter-spacing","kernelmatrix","kernelunitlength","lighting-color","local","marker-end","marker-mid","marker-start","markerheight","markerunits","markerwidth","maskcontentunits","maskunits","max","mask","mask-type","media","method","mode","min","name","numoctaves","offset","operator","opacity","order","orient","orientation","origin","overflow","paint-order","path","pathlength","patterncontentunits","patterntransform","patternunits","pointer-events","points","preservealpha","preserveaspectratio","primitiveunits","r","rx","ry","radius","refx","refy","repeatcount","repeatdur","restart","result","rotate","scale","seed","shape-rendering","slope","specularconstant","specularexponent","spreadmethod","startoffset","stddeviation","stitchtiles","stop-color","stop-opacity","stroke-dasharray","stroke-dashoffset","stroke-linecap","stroke-linejoin","stroke-miterlimit","stroke-opacity","stroke","stroke-width","style","surfacescale","systemlanguage","tabindex","tablevalues","targetx","targety","transform","transform-origin","text-anchor","text-decoration","text-orientation","text-rendering","textlength","type","u1","u2","unicode","values","vector-effect","viewbox","visibility","version","vert-adv-y","vert-origin-x","vert-origin-y","width","word-spacing","wrap","writing-mode","xchannelselector","ychannelselector","x","x1","x2","xmlns","y","y1","y2","z","zoomandpan"]),i_=Ze(["accent","accentunder","align","bevelled","close","columnalign","columnlines","columnspacing","columnspan","denomalign","depth","dir","display","displaystyle","encoding","fence","frame","height","href","id","largeop","length","linethickness","lquote","lspace","mathbackground","mathcolor","mathsize","mathvariant","maxsize","minsize","movablelimits","notation","numalign","open","rowalign","rowlines","rowspacing","rowspan","rspace","rquote","scriptlevel","scriptminsize","scriptsizemultiplier","selection","separator","separators","stretchy","subscriptshift","supscriptshift","symmetric","voffset","width","xmlns"]),Zl=Ze(["xlink:href","xml:id","xlink:title","xml:space","xmlns:xlink"]),$N=Ue(/{{[\w\W]*|^[\w\W]*}}/g),UN=Ue(/<%[\w\W]*|^[\w\W]*%>/g),HN=Ue(/\${[\w\W]*/g),FN=Ue(/{{|}}|\${|<%|%>|&lt;%|%&gt;/),GN=Ue(/^data-[\-\w.\u00B7-\uFFFF]+$/),BN=Ue(/^aria-[\-\w]+$/),s_=Ue(/^(?:(?:(?:f|ht)tps?|mailto|tel|callto|sms|cid|xmpp|matrix):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i),VN=Ue(/^(?:\w+script|data):/i),jN=Ue(/[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g),ZN=Ue(/^html$/i),WN=Ue(/^[a-z][.\w]*(-[.\w]+)+$/i),Np=Ue(/<[/\w!]/g),a_=Ue(/<[/\w]/g),qN=Ue(/<\/no(script|embed|frames)/i),l_=Ue(/\/>/i),YN=Ue(/((--!?|])>)|<\/(style|script|title|xmp|textarea|noscript|iframe|noembed|noframes)/i),KN=Ue(/^[\r\n\t ]+/),ze={element:1,text:3,processingInstruction:7,comment:8,document:9,documentFragment:11},XN=Ze(pe({},["style","script","xmp","iframe","noembed","noframes","plaintext","noscript"])),JN=function(){return typeof window>"u"?null:window},QN=function(e,n){if(typeof e!="object"||typeof e.createPolicy!="function")return null;let r=null,o="data-tt-policy-suffix";n&&n.hasAttribute(o)&&(r=n.getAttribute(o));let i="dompurify"+(r?"#"+r:"");try{return e.createPolicy(i,{createHTML(s){return s},createScriptURL(s){return s}})}catch{return console.warn("TrustedTypes policy "+i+" could not be created."),null}},d_=function(){return{afterSanitizeAttributes:[],afterSanitizeElements:[],afterSanitizeShadowDOM:[],beforeSanitizeAttributes:[],beforeSanitizeElements:[],beforeSanitizeShadowDOM:[],uponSanitizeAttribute:[],uponSanitizeElement:[],uponSanitizeShadowNode:[]}},mn=function(e,n,r,o){return ot(e,n)&&Xr(e[n])?pe(o.base?ci(o.base):{},e[n],o.transform):r},Op=function(e,n,r){let o=ot(e,n)?e[n]:void 0;return o&&typeof o=="object"?ql(o):r};function m_(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:JN(),e=M=>m_(M);if(e.version="3.4.18",e.removed=[],!t||!t.document||t.document.nodeType!==ze.document||!t.Element)return e.isSupported=!1,e;let n=t.document,r=n,o=r.currentScript,i=t.HTMLTemplateElement,s=t.Node,a=t.Element,l=t.NodeFilter,d=t.DOMParser,c=t.trustedTypes,h=a.prototype,p=gt(h,"cloneNode"),m=gt(h,"remove"),u=gt(h,"removeAttributeNode"),v=gt(h,"nextSibling"),E=gt(h,"childNodes"),x=gt(h,"parentNode"),T=gt(h,"shadowRoot"),O=gt(h,"attributes"),S=s&&s.prototype?gt(s.prototype,"nodeType"):null,g=s&&s.prototype?gt(s.prototype,"nodeName"):null,w=s&&s.prototype?gt(s.prototype,"ownerDocument"):null,b=function(f){return S?S(f):f.nodeType},k=function(f){return g?g(f):f.nodeName},I=PN(h,"namespaceURI"),P=function(f){return I?I(f):f.namespaceURI};if(typeof i=="function"){let M=n.createElement("template");M.content&&M.content.ownerDocument&&(n=M.content.ownerDocument)}let U,z="",ee,ae=!1,ue=0,qe=function(){if(ue>0)throw tn('A configured TRUSTED_TYPES_POLICY callback (createHTML or createScriptURL) must not call DOMPurify.sanitize, as that causes infinite recursion. Do not pass a policy whose callbacks wrap DOMPurify as TRUSTED_TYPES_POLICY; see the "DOMPurify and Trusted Types" section of the README.')},Gt=function(f){qe(),ue++;try{return U.createHTML(f)}finally{ue--}},hr=function(f){return U&&Rd?Gt(f):f},wd=function(f){qe(),ue++;try{return U.createScriptURL(f)}finally{ue--}},me=function(){return ae||(ee=QN(c,o),ae=!0),ee},we=n,Pe=we.implementation,Rt=we.createNodeIterator,Ed=we.createDocumentFragment,En=we.getElementsByTagName,pr=r.importNode,Ee=d_();e.isSupported=typeof c_=="function"&&typeof x=="function"&&Pe&&Pe.createHTMLDocument!==void 0;let AT=$N,RT=UN,IT=HN,CT=GN,NT=BN,OT=VN,MT=jN,PT=WN,af=s_,Ne=null,xd=pe({},[...n_,...Ap,...Rp,...Ip,...r_]),Oe=null,_d=pe({},[...o_,...Cp,...i_,...Zl]),It=null,ao=null,lf=null,rn=Object.seal(gn(null,{tagCheck:{writable:!0,configurable:!1,enumerable:!0,value:null},attributeCheck:{writable:!0,configurable:!1,enumerable:!0,value:null}})),df=!0,Td=!0,cf=!1,Sd=!0,Bt=!1,xn=!0,_n=!1,kd=!1,xi=null,_i=null,Ad=!1,fr=!1,Ti=!1,Rd=!1,uf=!0,hf=!1,pf="user-content-",Id=!0,Cd=!1,Tn=null,mr=!1,Sn=null,ff=pe({},["annotation-xml","audio","colgroup","desc","foreignobject","head","iframe","math","mi","mn","mo","ms","mtext","noembed","noframes","noscript","plaintext","script","selectedcontent","style","svg","template","thead","title","video","xmp"]),mf=null,gf=pe({},["audio","video","img","source","image","track"]),vf=null,bf=pe({},["alt","class","for","id","label","name","pattern","placeholder","role","summary","title","value","style","xmlns"]),Si="http://www.w3.org/1998/Math/MathML",ki="http://www.w3.org/2000/svg",Ct="http://www.w3.org/1999/xhtml",gr=Ct,Nd=!1,yf=null,LT=pe({},[Si,ki,Ct],Sp),zT=Ze(pe({},["mi","mo","mn","ms","mtext"])),Od=null,DT=Ze(pe({},["annotation-xml"])),Md=null,$T=Ze(gn(null)),UT=pe({},["title","style","font","a","script"]),lo=null,HT=["application/xhtml+xml","text/html"],FT="text/html",Le=null,Ai=null,GT=n.createElement("form"),wf=function(f){return f instanceof RegExp||f instanceof Function},Pd=function(){let f=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};(!f||typeof f!="object")&&(f={}),f=ql(f),lo=HT.indexOf(f.PARSER_MEDIA_TYPE)===-1?FT:f.PARSER_MEDIA_TYPE,Le=lo==="application/xhtml+xml"?Sp:rr,Ne=mn(f,"ALLOWED_TAGS",xd,{transform:Le}),Oe=mn(f,"ALLOWED_ATTR",_d,{transform:Le}),yf=mn(f,"ALLOWED_NAMESPACES",LT,{transform:Sp}),vf=mn(f,"ADD_URI_SAFE_ATTR",bf,{transform:Le,base:bf}),mf=mn(f,"ADD_DATA_URI_TAGS",gf,{transform:Le,base:gf}),Sn=mn(f,"FORBID_CONTENTS",ff,{transform:Le}),ao=mn(f,"FORBID_TAGS",gn(null),{transform:Le}),lf=mn(f,"FORBID_ATTR",gn(null),{transform:Le}),mr=ot(f,"USE_PROFILES")?f.USE_PROFILES&&typeof f.USE_PROFILES=="object"?ql(f.USE_PROFILES):f.USE_PROFILES:!1,df=f.ALLOW_ARIA_ATTR!==!1,Td=f.ALLOW_DATA_ATTR!==!1,cf=f.ALLOW_UNKNOWN_PROTOCOLS||!1,Sd=f.ALLOW_SELF_CLOSE_IN_ATTR!==!1,Bt=f.SAFE_FOR_TEMPLATES||!1,xn=f.SAFE_FOR_XML!==!1,_n=f.WHOLE_DOCUMENT||!1,fr=f.RETURN_DOM||!1,Ti=f.RETURN_DOM_FRAGMENT||!1,Rd=f.RETURN_TRUSTED_TYPE||!1,Ad=f.FORCE_BODY||!1,uf=f.SANITIZE_DOM!==!1,hf=f.SANITIZE_NAMED_PROPS||!1,Id=f.KEEP_CONTENT!==!1,Cd=f.IN_PLACE||!1,af=LN(f.ALLOWED_URI_REGEXP)?f.ALLOWED_URI_REGEXP:s_,gr=typeof f.NAMESPACE=="string"?f.NAMESPACE:Ct,Od=Op(f,"MATHML_TEXT_INTEGRATION_POINTS",zT),Md=Op(f,"HTML_INTEGRATION_POINTS",DT);let _=Op(f,"CUSTOM_ELEMENT_HANDLING",$T);if(It=gn(null),ot(_,"tagNameCheck")&&wf(_.tagNameCheck)&&(It.tagNameCheck=_.tagNameCheck),ot(_,"attributeNameCheck")&&wf(_.attributeNameCheck)&&(It.attributeNameCheck=_.attributeNameCheck),ot(_,"allowCustomizedBuiltInElements")&&typeof _.allowCustomizedBuiltInElements=="boolean"&&(It.allowCustomizedBuiltInElements=_.allowCustomizedBuiltInElements),Ue(It),Bt&&(Td=!1),Ti&&(fr=!0),mr&&((ot(f,"ALLOWED_TAGS")||ot(f,"ALLOWED_ATTR"))&&typeof console<"u"&&typeof console.warn=="function"&&console.warn("DOMPurify: USE_PROFILES overrides ALLOWED_TAGS and ALLOWED_ATTR. Do not use these options together."),Ne=pe({},r_),Oe=gn(null),mr.html===!0&&(pe(Ne,n_),pe(Oe,o_)),mr.svg===!0&&(pe(Ne,Ap),pe(Oe,Cp),pe(Oe,Zl)),mr.svgFilters===!0&&(pe(Ne,Rp),pe(Oe,Cp),pe(Oe,Zl)),mr.mathMl===!0&&(pe(Ne,Ip),pe(Oe,i_),pe(Oe,Zl))),rn.tagCheck=null,rn.attributeCheck=null,ot(f,"ADD_TAGS")&&(typeof f.ADD_TAGS=="function"?rn.tagCheck=f.ADD_TAGS:Xr(f.ADD_TAGS)&&(Ne===xd&&(Ne=ci(Ne)),pe(Ne,f.ADD_TAGS,Le))),ot(f,"ADD_ATTR")&&(typeof f.ADD_ATTR=="function"?rn.attributeCheck=f.ADD_ATTR:Xr(f.ADD_ATTR)&&(Oe===_d&&(Oe=ci(Oe)),pe(Oe,f.ADD_ATTR,Le))),ot(f,"ADD_FORBID_CONTENTS")&&Xr(f.ADD_FORBID_CONTENTS)&&(Sn===ff&&(Sn=ci(Sn)),pe(Sn,f.ADD_FORBID_CONTENTS,Le)),Id&&(Ne["#text"]=!0),_n&&pe(Ne,["html","head","body"]),Ne.table&&(Ne.tbody=!0,delete ao.tbody),f.TRUSTED_TYPES_POLICY){if(typeof f.TRUSTED_TYPES_POLICY.createHTML!="function")throw tn('TRUSTED_TYPES_POLICY configuration option must provide a "createHTML" hook.');if(typeof f.TRUSTED_TYPES_POLICY.createScriptURL!="function")throw tn('TRUSTED_TYPES_POLICY configuration option must provide a "createScriptURL" hook.');let C=U;U=f.TRUSTED_TYPES_POLICY;try{z=Gt("")}catch(L){throw U=C,L}}else f.TRUSTED_TYPES_POLICY===null?(U=void 0,z=""):(U===void 0&&(U=me()),U&&typeof z=="string"&&(z=Gt("")));Ai=Ze(f)},Ef=pe({},[...Ap,...Rp,...zN]),xf=pe({},[...Ip,...DN]),BT=function(f,_,C){return _===Ct?f==="svg":_===Si?f==="svg"&&(C==="annotation-xml"||Od[C]):!!Ef[f]},VT=function(f,_,C){return _===Ct?f==="math":_===ki?f==="math"&&Md[C]:!!xf[f]},jT=function(f,_,C){return _===ki&&!Md[C]||_===Si&&!Od[C]?!1:!xf[f]&&(UT[f]||!Ef[f])},ZT=function(f){let _=P(f),C=rr(k(f)),L=x(f),V=gr,q="template";return L&&b(L)===ze.element&&(V=P(L),q=rr(k(L))),yf[_]?_===ki?BT(C,V,q):_===Si?VT(C,V,q):_===Ct?jT(C,V,q):lo==="application/xhtml+xml":!1},on=function(f){ai(e.removed,{element:f});try{x(f).removeChild(f)}catch{if(m(f),!x(f))throw tn("a node selected for removal could not be detached from its tree and cannot be safely returned; refusing to sanitize in place")}},_f=function(f,_,C){try{u(f,_)}catch{try{f.removeAttribute(C)}catch{}}},Ld=function(f){$d(f);let _=E(f);_&&en(SN(_),C=>{try{m(C)}catch{}}),b(f)===ze.element&&zd(f,!1)},vr=function(f,_,C){if(!C)try{C=_.getAttributeNode(f)}catch{C=null}if(ai(e.removed,{attribute:C||null,from:_}),C)_f(_,C,f);else try{_.removeAttribute(f)}catch{}if(f==="is")if(fr||Ti)try{on(_)}catch{}else try{_.setAttribute(f,"")}catch{}},zd=function(f,_){let C=O(f);if(C)for(let L=C.length-1;L>=0;--L){let V=C[L],q=V&&V.name;typeof q=="string"&&!(_&&Oe[Le(q)])&&_f(f,V,q)}},Dd=function(f,_){let C=arguments.length>2&&arguments[2]!==void 0?arguments[2]:!1,L=[f];for(;L.length>0;){let V=L.pop();if(_(V)===!1)continue;if(C&&b(V)===ze.element){let ne=T(V);br(ne)&&L.push(ne)}let q=E(V);if(q)for(let ne=q.length-1;ne>=0;--ne)L.push(q[ne])}},$d=function(f){Dd(f,_=>{b(_)===ze.element&&zd(_,!0)})},Ud=function(f){let _=[];return Dd(f,C=>{_.push(C)},!0),_},WT=function(f,_){let C=_p();en(Ud(f),L=>{b(L)===ze.element&&Tp(C,L)}),en(_,L=>{b(L)===ze.element&&!li(C,L)&&zd(L,!0)})},Tf=function(f,_){let C=!1;return en(e.removed,L=>{L.element&&(C=C||L.element===f,$d(L.element))}),WT(f,_),C},qT=8,YT=function(f,_){let C=Tn,L=null,V=()=>(L||(L=_p(),en(_,q=>{Tp(L,q)})),L);for(let q=0;;q++){let ne=Ud(f),He=[f],Vt=!1;if(en(ne,bt=>{b(bt)===ze.documentFragment?ai(He,bt):!Vt&&!li(C,bt)&&(Vt=li(V(),bt))}),!Vt)return;if(q>=qT)throw tn("the tree kept changing during in-place sanitization; refusing to return it");en(He,(bt,lt)=>{KT(bt,lt>0,f,V())})}},KT=function(f,_,C,L){let V=Ri(f),q;for(;q=V.nextNode();)!li(L,q)||li(Tn,q)||(_&&vt(Ee.uponSanitizeShadowNode,q,null),Bd(q,C))},XT=function(f){Tn&&Tp(Tn,f)},Sf=function(f,_){return xn?f==="patchsrc"?!0:f==="for"&&_!=="label"&&_!=="output":!1},JT=function(f){xn&&Dd(f,_=>{let C=b(_);if(C===ze.processingInstruction||C===ze.comment&&je(a_,_.data)){try{m(_)}catch{}return!1}if(C===ze.element){let L=_,V=Le(k(_));try{L.hasAttribute&&L.hasAttribute("patchsrc")&&L.removeAttribute("patchsrc"),L.hasAttribute&&L.hasAttribute("for")&&Sf("for",V)&&L.removeAttribute("for")}catch{}}return!0})},kf=function(f){let _=null,C=null;if(Ad)f="<remove></remove>"+f;else{let q=AN(f,KN);C=q&&q[0]}lo==="application/xhtml+xml"&&gr===Ct&&(f='<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>'+f+"</body></html>");let L=U?Gt(f):f;if(gr===Ct)try{_=new d().parseFromString(L,lo)}catch{}if(!_||!_.documentElement){_=Pe.createDocument(gr,"template",null);try{_.documentElement.innerHTML=Nd?z:L}catch{}}let V=_.body||_.documentElement;return f&&C&&V.insertBefore(n.createTextNode(C),V.childNodes[0]||null),gr===Ct?En.call(_,_n?"html":"body")[0]:_n?_.documentElement:V},Ri=function(f){let _=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,C=w?w(f):f.ownerDocument;return Rt.call(C||f,f,(_?0:l.SHOW_ELEMENT)|l.SHOW_COMMENT|l.SHOW_TEXT|l.SHOW_PROCESSING_INSTRUCTION|l.SHOW_CDATA_SECTION,null)},Hd=function(f){return f=jl(f,AT," "),f=jl(f,RT," "),f=jl(f,IT," "),f},Fd=function(f){var _;Gd(f);let C=(_=f.querySelectorAll)===null||_===void 0?void 0:_.call(f,"template");C&&en(C,L=>{br(L.content)&&Fd(L.content)})},Gd=function(f){f.normalize();let _=Ri(f,!0),C=_.nextNode();for(;C;)C.data=Hd(C.data),C=_.nextNode()},Ii=function(f){let _=g?g(f):null;return typeof _!="string"||Le(_)!=="form"?!1:typeof f.nodeName!="string"||typeof f.textContent!="string"||typeof f.removeChild!="function"||f.attributes!==O(f)||typeof f.removeAttribute!="function"||typeof f.removeAttributeNode!="function"||typeof f.getAttributeNode!="function"||typeof f.setAttribute!="function"||typeof f.namespaceURI!="string"||typeof f.insertBefore!="function"||typeof f.hasChildNodes!="function"||f.nodeType!==S(f)||f.childNodes!==E(f)},Af=function(f){if(!S||typeof f!="object"||f===null)return null;try{let _=S(f);return typeof _=="number"?_:null}catch{return null}},br=function(f){return Af(f)===ze.documentFragment},co=function(f){return Af(f)!==null};function vt(M,f,_){M.length!==0&&en(M,C=>{C.call(e,f,_,Ai)})}let QT=function(f,_,C){return!!(xn&&C===ze.element&&f.hasChildNodes()&&!co(f.firstElementChild)&&je(Np,f.textContent)&&je(Np,f.innerHTML)||xn&&XN[_]&&C===ze.element&&P(f)===Ct&&(co(f.firstElementChild)||typeof f.textContent=="string"&&je(Np,f.textContent))||C===ze.processingInstruction||xn&&C===ze.comment&&je(a_,f.data))},Ci=function(f,_){if(f instanceof RegExp)return je(f,_);if(f instanceof Function){for(var C=arguments.length,L=new Array(C>2?C-2:0),V=2;V<C;V++)L[V-2]=arguments[V];return!!f(_,...L)}return!1},eS=function(f,_,C){if(!ao[_]&&Cf(_)&&Ci(It.tagNameCheck,_))return!1;if(Id&&!Sn[_]&&!Sn[rr(_)]){let L=x(f),V=E(f);if(V&&L){let q=V.length;for(let ne=q-1;ne>=0;--ne){let He=f===C?p(V[ne],!0):V[ne];L.insertBefore(He,v(f))}}}return on(f),!0},Rf=function(f,_,C,L){return f.length===0?_:_===C||_===L?ci(_):_},yr=function(f,_){return f===_||x(f)!==null?!1:(Cd&&$d(f),!0)},tS=function(f,_){if(XT(f),vt(Ee.beforeSanitizeElements,f,null),yr(f,_))return!0;if(Ii(f))return on(f),!0;let C=Le(k(f)),L=b(f);if(Ne=Rf(Ee.uponSanitizeElement,Ne,xd,xi),vt(Ee.uponSanitizeElement,f,{tagName:C,allowedTags:Ne}),yr(f,_))return!0;if(QT(f,C,L))return on(f),!0;if(ao[C]||!(rn.tagCheck instanceof Function&&rn.tagCheck(C))&&!Ne[C]){let V=eS(f,C,_);return V===!1&&(vt(Ee.afterSanitizeElements,f,null),yr(f,_))?!0:V}if(L===ze.element&&!ZT(f)||(C==="noscript"||C==="noembed"||C==="noframes")&&je(qN,f.innerHTML))return on(f),!0;if(Bt&&L===ze.text){let V=f.textContent,q=Hd(V);V!==q&&(ai(e.removed,{element:f.cloneNode()}),f.textContent=q)}return vt(Ee.afterSanitizeElements,f,null),yr(f,_)},If=function(f,_,C){if(lf[_]||Sf(_,f)||uf&&(_==="id"||_==="name")&&(C in n||C in GT))return!1;let L=Oe[_]||rn.attributeCheck instanceof Function&&rn.attributeCheck(_,f);if(Td&&je(CT,_)||df&&je(NT,_))return!0;if(!L)return Cf(f)&&Ci(It.tagNameCheck,f)&&Ci(It.attributeNameCheck,_,f)||_==="is"&&It.allowCustomizedBuiltInElements&&Ci(It.tagNameCheck,C);if(vf[_])return!0;let V=jl(C,MT,"");return je(af,V)||(_==="src"||_==="xlink:href"||_==="href")&&f!=="script"&&kp(C,"data:")===0&&mf[f]||cf&&!je(OT,V)?!0:!C},nS=pe({},["annotation-xml","color-profile","font-face","font-face-format","font-face-name","font-face-src","font-face-uri","missing-glyph"]),Cf=function(f){return!nS[rr(f)]&&je(PT,f)},rS=function(f,_,C,L){if(U&&typeof c=="object"&&typeof c.getAttributeType=="function"&&!C)switch(c.getAttributeType(f,_)){case"TrustedHTML":return Gt(L);case"TrustedScriptURL":return wd(L)}return L},oS=function(f,_,C,L){try{return C?f.setAttributeNS(C,_,L):f.setAttribute(_,L),Ii(f)?(on(f),!1):!0}catch{return vr(_,f),!1}},Nf=function(f,_){return xn&&je(YN,_)?!0:rr(f)==="attributename"&&kp(_,"href")!==-1},iS=function(f,_){if(vt(Ee.beforeSanitizeAttributes,f,null),yr(f,_))return;let C=f.attributes;if(!C||Ii(f))return;Oe=Rf(Ee.uponSanitizeAttribute,Oe,_d,_i);let L={attrName:"",attrValue:"",keepAttr:!0,allowedAttributes:Oe,forceKeepAttr:void 0},V=C.length,q=Le(k(f));for(;V--;){let ne=C[V],He=ne.name,Vt=ne.namespaceURI,bt=ne.value,lt=Le(He),Nt=bt,Ye=He==="value"?Nt:RN(Nt),Of=!1;if(L.attrName=lt,L.attrValue=Ye,L.keepAttr=!0,L.forceKeepAttr=void 0,vt(Ee.uponSanitizeAttribute,f,L),Ye=L.attrValue,hf&&(lt==="id"||lt==="name")&&kp(Ye,pf)!==0&&(vr(He,f,ne),Ye=pf+Ye,Of=!0),Nf(He,Ye)){vr(He,f,ne);continue}if(!L.forceKeepAttr){if(!L.keepAttr){vr(He,f,ne);continue}if(!Sd&&je(l_,Ye)){vr(He,f,ne);continue}if(Bt&&(Ye=Hd(Ye)),!If(q,lt,Ye)){vr(He,f,ne);continue}Ye=rS(q,lt,Vt,Ye),Ye!==Nt&&oS(f,He,Vt,Ye)&&Of&&Qx(e.removed)}}vt(Ee.afterSanitizeAttributes,f,null),yr(f,_)},Bd=function(f,_){tS(f,_),iS(f,_),br(f.content)&&Vd(f.content)},Vd=function(f){let _=null,C=Ri(f);for(vt(Ee.beforeSanitizeShadowDOM,f,null);_=C.nextNode();)if(vt(Ee.uponSanitizeShadowNode,_,null),Bd(_,f),b(_)===ze.element){let L=T(_);br(L)&&(jd(L),Vd(L))}Bt&&Gd(f),vt(Ee.afterSanitizeShadowDOM,f,null)},jd=function(f){let _=[{node:f,shadow:null}];for(;_.length>0;){let C=_.pop();if(C.shadow){Vd(C.shadow);continue}let L=C.node,V=b(L)===ze.element,q=E(L);if(q)for(let ne=q.length-1;ne>=0;--ne)_.push({node:q[ne],shadow:null});if(V){let ne=g?g(L):null;if(typeof ne=="string"&&Le(ne)==="template"){let He=L.content;br(He)&&_.push({node:He,shadow:null})}}if(V){let ne=T(L);br(ne)&&_.push({node:null,shadow:ne},{node:ne,shadow:null})}}};return e.sanitize=function(M){let f=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},_=null,C=null,L=null,V=null;if(Nd=!M,Nd&&(M="<!-->"),typeof M!="string"&&!co(M)&&(M=MN(M),typeof M!="string"))throw tn("dirty is not a string, aborting");if(!e.isSupported)return M;kd?(Ne=xi,Oe=_i):Pd(f),e.removed=[];let q=Cd&&typeof M!="string"&&co(M),ne=[],He=Tn;if(q){JT(M);let Nt=k(M);if(typeof Nt=="string"){let Ye=Le(Nt);if(!Ne[Ye]||ao[Ye])throw Ld(M),tn("root node is forbidden and cannot be sanitized in-place")}if(Ii(M))throw Ld(M),tn("root node is clobbered and cannot be sanitized in-place");ne=Ud(M),Tn=_p()}else if(co(M))_=kf("<!---->"),C=_.ownerDocument.importNode(M,!0),C.nodeType===ze.element&&C.nodeName==="BODY"||C.nodeName==="HTML"?_=C:_.appendChild(C),jd(_);else{if(!fr&&!Bt&&!_n&&M.indexOf("<")===-1)return hr(M);if(_=kf(M),!_)return fr?null:Rd?z:""}_&&Ad&&on(_.firstChild);let Vt=q?M:_;try{q&&jd(M);let Nt=Ri(Vt);for(;L=Nt.nextNode();)Bd(L,Vt);q&&YT(M,ne)}catch(Nt){throw q&&(Ld(M),Tf(M,ne)),Nt}finally{Tn=He}if(q){if(Tf(M,ne))throw tn("a node selected for removal could not be safely returned; refusing to sanitize in place");return Bt&&Fd(M),M}if(fr){if(Bt&&Fd(_),Ti)for(V=Ed.call(_.ownerDocument);_.firstChild;)V.appendChild(_.firstChild);else V=_;return(Oe.shadowroot||Oe.shadowrootmode)&&(V=pr.call(r,V,!0)),V}let bt=()=>_n?_.outerHTML:_.innerHTML,lt=bt();return Bt&&je(FN,lt)&&(Gd(_),lt=bt()),_n&&Ne["!doctype"]&&_.ownerDocument&&_.ownerDocument.doctype&&_.ownerDocument.doctype.name&&je(ZN,_.ownerDocument.doctype.name)&&(lt="<!DOCTYPE "+_.ownerDocument.doctype.name+`>
`+lt),hr(lt)},e.setConfig=function(){let M=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};Pd(M),kd=!0,xi=Ne,_i=Oe},e.clearConfig=function(){Ai=null,kd=!1,xi=null,_i=null,U=ee,z=""},e.isValidAttribute=function(M,f,_){Ai||Pd({});let C=Le(M),L=Le(f);return typeof _=="string"&&(Nf(f,_)||!Sd&&je(l_,_))?!1:If(C,L,_)},e.addHook=function(M,f){typeof f=="function"&&ot(Ee,M)&&ai(Ee[M],f)},e.removeHook=function(M,f){if(ot(Ee,M)){if(f!==void 0){let _=TN(Ee[M],f);return _===-1?void 0:kN(Ee[M],_,1)[0]}return Qx(Ee[M])}},e.removeHooks=function(M){ot(Ee,M)&&(Ee[M]=[])},e.removeAllHooks=function(){Ee=d_()},e}var g_=m_();function Dp(){return{async:!1,breaks:!1,extensions:null,gfm:!0,hooks:null,pedantic:!1,renderer:null,silent:!1,tokenizer:null,walkTokens:null}}var lr=Dp();function A_(t){lr=t}var ir={exec:()=>null};function or(t){let e=[];return n=>{let r=Math.max(0,Math.min(3,n-1)),o=e[r];return o||(o=t(r),e[r]=o),o}}function X(t,e=""){let n=typeof t=="string"?t:t.source,r={replace:(o,i)=>{let s=typeof i=="string"?i:i.source;return s=s.replace(Be.caret,"$1"),n=n.replace(o,s),r},getRegex:()=>new RegExp(n,e)};return r}var R_=((t="")=>{try{return!!new RegExp("(?<=1)(?<!1)"+t)}catch{return!1}})(),Be={codeRemoveIndent:/^(?: {0,3}\t| {1,4})/gm,listInterruptsParagraph:/^ {0,3}(?:[*+-]|1[.)])[ \t]+[^ \t\n]/,outputLinkReplace:/\\([\[\]])/g,indentCodeCompensation:/^(\s+)(?:```)/,beginningSpace:/^\s+/,endingHash:/#$/,startingSpaceChar:/^ /,endingSpaceChar:/ $/,endingSpaceTabChar:/[ \t]$/,nonSpaceChar:/[^ ]/,newLineCharGlobal:/\n/g,tabCharGlobal:/\t/g,leadingSpaceTab:/^[ \t]+/,multipleSpaceGlobal:/\s+/g,blankLine:/^[ \t]*$/,doubleBlankLine:/\n[ \t]*\n[ \t]*$/,blockquoteStart:/^ {0,3}>/,blockquoteSetextReplace:/\n {0,3}((?:=+|-+)[ \t]*)(?=\n|$)/g,blockquoteSetextReplace2:/^ {0,3}>[ \t]?/gm,blockquoteMarkerWhitespace:/^( {0,3}>)(\t[ \t]*)/gm,nestedBlockMarker:/^ {0,3}(?:(?:[*+-]|\d{1,9}[.)])(?: |$)|> ?)/,listReplaceNesting:/^ {1,4}(?=( {4})*[^ ])/g,listIsTask:/^\[[ xX]\][ \t]+\S/,listReplaceTask:/^\[[ xX]\][ \t]+/,listTaskCheckbox:/\[[ xX]\]/,anyLine:/\n.*\n/,hrefBrackets:/^<(.*)>$/,tableDelimiter:/[:|]/,tableAlignChars:/^\||\| *$/g,tableRowBlankLine:/\n[ \t]*$/,tableAlignRight:/^ *-+: *$/,tableAlignCenter:/^ *:-+: *$/,tableAlignLeft:/^ *:-+ *$/,startATag:/^<a /i,endATag:/^<\/a>/i,startPreScriptTag:/^<(pre|code|kbd|script)(\s|>)/i,endPreScriptTag:/^<\/(pre|code|kbd|script)(\s|>)/i,startAngleBracket:/^</,endAngleBracket:/>$/,pedanticHrefTitle:/^([^'"]*[^\s])\s+(['"])(.*)\2/,unicodeAlphaNumeric:/[\p{L}\p{N}]/u,numericCharacterReference:/&#(?:(\d{1,7})|[Xx]([A-Fa-f0-9]{1,6}));/,numericCharacterReferenceOrAmpersand:/&#(?:(\d{1,7})|[Xx]([A-Fa-f0-9]{1,6}));|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/g,escapeTest:/[&<>"']/,escapeReplace:/[&<>"']/g,escapeTestNoEncode:/[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/,escapeReplaceNoEncode:/[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/g,caret:/(^|[^\[])\^/g,percentDecode:/%25/g,findPipe:/\|/g,splitPipe:/ \|/,slashPipe:/\\\|/g,carriageReturn:/\r\n|\r/g,spaceLine:/^ +$/gm,notSpaceStart:/^\S*/,endingNewline:/\n$/,listItemRegex:t=>new RegExp(`^( {0,3}${t})((?:[	 ][^\\n]*)?(?:\\n|$))`),nextBulletRegex:or(t=>new RegExp(`^ {0,${t}}(?:[*+-]|\\d{1,9}[.)])((?:[ 	][^\\n]*)?(?:\\n|$))`)),hrRegex:or(t=>new RegExp(`^ {0,${t}}((?:-[ 	]*){3,}|(?:_[ 	]*){3,}|(?:\\*[ 	]*){3,})(?:\\n+|$)`)),fencesBeginRegex:or(t=>new RegExp(`^ {0,${t}}(?:\`\`\`|~~~)`)),headingBeginRegex:or(t=>new RegExp(`^ {0,${t}}#{1,6}(?:\\s|$)`)),pedanticHeadingBeginRegex:or(t=>new RegExp(`^ {0,${t}}#`)),htmlBeginRegex:or(t=>new RegExp(`^ {0,${t}}(?:</?(?:${Up})(?:[ \\t]+|$|/?>)|<(?:(?:script|pre|style|textarea)(?:[\\s>]|$)|!--)|<\\?|<![A-Za-z]|<!\\[CDATA\\[)`,"i")),blockquoteBeginRegex:or(t=>new RegExp(`^ {0,${t}}>`)),nestedContainerMarkers:/^(?: {0,3}(?:(?:[*+-]|\d{1,9}[.)])[ \t]+|>[ \t]?))+/},eO=/^(?:[ \t]*(?:\n|$))+/,tO=/^((?: {4}| {0,3}\t)[^\n]+(?:\n(?:[ \t]*(?:\n|$))*)?)+/,nO=/^ {0,3}(`{3,}(?=[^`\n]*(?:\n|$))|~{3,})([^\n]*)(?:\n|$)(?:|([\s\S]*?)(?:\n|$))(?: {0,3}(?:(?=`)\1`*|(?=~)\1~*) *(?=\n|$)|$)/,pi=/^ {0,3}((?:-[\t ]*){3,}|(?:_[ \t]*){3,}|(?:\*[ \t]*){3,})(?:\n+|$)/,rO=/^ {0,3}(#{1,6})(?=\s|$)(.*)(?:\n+|$)/,$p=/ {0,3}(?:[*+-]|\d{1,9}[.)])/,Up="address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option|p|param|search|section|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul",fi=X(" {0,3}(?:</?(?:tag)(?:[ \\t]+|\\n|/?>)|<(?:(?:script|pre|style|textarea)(?:[\\s>]|$)|!--)|<\\?|<![A-Za-z]|<!\\[CDATA\\[)").replace("tag",Up).getRegex(),I_=/^(?!bull |blockCode|fences|blockquote|heading|html|table)((?:.|\n(?!\s*?\n|bull |fences|blockquote|heading|hr|html|table))+?)\n {0,3}(=+|-+)[ \t]*(?:\n+|$)/,C_=X(I_).replace(/bull/g,$p).replace(/blockCode/g,/(?: {4}| {0,3}\t)/).replace(/fences/g,/ {0,3}(?:`{3,}|~{3,})/).replace(/blockquote/g,/ {0,3}>/).replace(/heading/g,/ {0,3}#{1,6}(?:\s|$)/).replace(/hr/g,/ {0,3}(?:(?:-[\t ]*){3,}|(?:_[ \t]*){3,}|(?:\*[ \t]*){3,})(?:\n+|$)/).replace(/\|table/g,"").replace(/html/g,fi).getRegex(),oO=X(I_).replace(/bull/g,$p).replace(/blockCode/g,/(?: {4}| {0,3}\t)/).replace(/fences/g,/ {0,3}(?:`{3,}|~{3,})/).replace(/blockquote/g,/ {0,3}>/).replace(/heading/g,/ {0,3}#{1,6}(?:\s|$)/).replace(/hr/g,/ {0,3}(?:(?:-[\t ]*){3,}|(?:_[ \t]*){3,}|(?:\*[ \t]*){3,})(?:\n+|$)/).replace(/table/g,/ {0,3}\|?(?:[:\- ]*\|)+[\:\- ]*\n/).replace(/html/g,fi).getRegex(),Hp=/^([^\n]+(?:\n(?!hr|heading|lheading|blockquote|fences|list|html|table|[ \t]+\n)[^\n]+)*)/,iO=/^[^\n]+/,Fp=/(?!\s*\])(?:\\[\s\S]|[^\[\]\\\n]|\n(?![ \t]*\n))+/,sO=X(/^ {0,3}\[(label)\]: *(?:\n[ \t]*)?([^<\s][^\s]*|<(?:\\.|[^\n<>\\])*>)(?:(?: +(?:\n[ \t]*)?| *\n[ \t]*)(title))? *(?:\n+|$)/).replace("label",Fp).replace("title",/(?:"(?:\\[\s\S]|[^"\\])*"|'(?:\\[\s\S]|[^'\\\n]|\n(?!\n))*'|\((?:\\[\s\S]|[^()\\])*\))/).getRegex(),aO=X(/^(bull)([ \t][^\n]*?)?(?:\n|$)/).replace(/bull/g,$p).getRegex(),Gp=/<!--(?:-?>|[\s\S]*?(?:-->|$))/,lO=X("^ {0,3}(?:<(script|pre|style|textarea)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n*|$)|comment[^\\n]*(\\n+|$)|<\\?[\\s\\S]*?(?:\\?>[^\\n]*\\n*|$)|<![A-Z][\\s\\S]*?(?:>[^\\n]*\\n*|$)|<!\\[CDATA\\[[\\s\\S]*?(?:\\]\\]>[^\\n]*\\n*|$)|</?(tag)(?:[ \\t]+|\\n|/?>|$)[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$)|<(?!(?:script|pre|style|textarea)(?![a-z0-9-]))([a-z][a-z0-9-]*)(?:attribute)*?[ \\t]*/?>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$)|</[a-z][a-z0-9-]*\\s*>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$))","i").replace("comment",Gp).replace("tag",Up).replace("attribute",/[ \t]+[a-zA-Z:_][\w.:-]*(?:[ \t]*=[ \t]*"[^"\n]*"|[ \t]*=[ \t]*'[^'\n]*'|[ \t]*=[ \t]*[^\s"'=<>`]+)?/).getRegex(),N_=t=>X(Hp).replace("hr",pi).replace("heading"," {0,3}#{1,6}(?:\\s|$)").replace("|lheading","").replace("|table","").replace("blockquote"," {0,3}>").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*(?:\\n|$))|~~~)[^\\n]*(?:\\n|$)").replace("list",t).replace("html",fi).getRegex(),dO=N_(/ {0,3}(?:[*+-]|1[.)])[ \t]+[^ \t\n]/),cO=N_(/ {0,3}(?:[*+-]|\d{1,9}[.)])(?:[ \t]|\n|$)/),uO=X(/^( {0,3}> ?(?:(?![ \t]*(?:\n|$))(paragraph)|[^\n]*)(?:\n|$))+/).replace("paragraph",cO).getRegex(),Bp={blockquote:uO,code:tO,def:sO,fences:nO,heading:rO,hr:pi,html:lO,lheading:C_,list:aO,newline:eO,paragraph:dO,table:ir,text:iO},v_=X("^ *([^\\n ].*)\\n {0,3}((?:\\| *)?:?-+:? *(?:\\| *:?-+:? *)*(?:\\| *)?)(?:\\n((?:(?! *\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)").replace("hr",pi).replace("heading"," {0,3}#{1,6}(?:\\s|$)").replace("blockquote"," {0,3}>").replace("code","(?: {4}| {0,3}	)[^\\n]").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*(?:\\n|$))|~~~)[^\\n]*(?:\\n|$)").replace("list"," {0,3}(?:[*+-]|1[.)])[ \\t]").replace("html",fi).getRegex(),hO={...Bp,lheading:oO,table:v_,paragraph:X(Hp).replace("hr",pi).replace("heading"," {0,3}#{1,6}(?:\\s|$)").replace("|lheading","").replace("table",v_).replace("blockquote"," {0,3}>").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*(?:\\n|$))|~~~)[^\\n]*(?:\\n|$)").replace("list"," {0,3}(?:[*+-]|1[.)])[ \\t]+[^ \\t\\n]").replace("html",fi).getRegex()},pO={...Bp,html:X(`^ *(?:comment(?: *\\n|\\s*$)|<(tag)[\\s\\S]+?</\\1>(?: *\\n{2,}|\\s*$)|<tag(?:"[^"]*"|'[^']*'|\\s[^'"/>\\s]*)*?/?>(?: *\\n{2,}|\\s*$))`).replace("comment",Gp).replace(/tag/g,"(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:|[^\\w\\s@]*@)\\b").getRegex(),def:/^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/,heading:/^(#{1,6})(.*)(?:\n+|$)/,fences:ir,lheading:/^(.+?)\n {0,3}(=+|-+) *(?:\n+|$)/,paragraph:X(Hp).replace("hr",pi).replace("heading",` *#{1,6} *[^
]`).replace("|table","").replace("blockquote"," {0,3}>").replace("|fences","").replace("|list","").replace("|html","").replace("|tag","").replace("lheading",C_).getRegex()},fO=/^\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/,mO=/^(`+)([^`]|[^`][\s\S]*?[^`])\1(?!`)/,O_=/^( {2,}|\\)\n(?!\s*$)[ \t]*/,gO=/^(`+|[^`])(?:(?= {2,}\n)|[\s\S]*?(?:(?=[\\<!\[`*_]|\b_|$)|[^ ](?= {2,}\n)))/,Ht=/[\p{P}\p{S}]/u,Qr=/[\s\p{P}\p{S}]/u,mi=/[^\s\p{P}\p{S}]/u,vO=X(/^((?![*_])punctSpace)/,"u").replace(/punctSpace/g,Qr).getRegex(),bO=/[\p{Pi}\p{Ps}"']/u,M_=/(?!~)[\p{P}\p{S}]/u,yO=/(?!~)[\s\p{P}\p{S}]/u,wO=/(?:[^\s\p{P}\p{S}]|~)/u,EO=X(/link|precode-code|html/,"g").replace("link",/\[(?:[^\[\]`]|(?<a>`+)[^`]+\k<a>(?!`))*?\]\((?:\\[\s\S]|[^\\\(\)]|\((?:\\[\s\S]|[^\\\(\)])*\))*\)/).replace("precode-",R_?"(?<!`)()":"(^^|[^`])").replace("code",/(?<b>`+)[^`]+\k<b>(?!`)/).replace("html",/<(?! )[^<>]*?>/).getRegex(),P_=/^(?:\*+(?:((?!\*)punct)|([^\s*]))?)|^_+(?:((?!_)punct)|([^\s_]))?/,xO=X(P_,"u").replace(/punct/g,Ht).getRegex(),_O=X(P_,"u").replace(/punct/g,M_).getRegex(),TO=/^(?:\*+(?:((?!\*)(?!openQuote)punct)|([^\s*]))?)|^_+(?:((?!_)(?!openQuote)punct)|([^\s_]))?/,SO=X(TO,"u").replace(/openQuote/g,bO).replace(/punct/g,Ht).getRegex(),L_="^[^_*]*?__[^_*]*?\\*[^_*]*?(?=__)|[^*]+(?=[^*])|(?!\\*)punct(\\*+)(?=[\\s]|$)|notPunctSpace(\\*+)(?!\\*)(?=punctSpace|$)|(?!\\*)punctSpace(\\*+)(?=notPunctSpace)|[\\s](\\*+)(?!\\*)(?=punct)|(?!\\*)punct(\\*+)(?!\\*)(?=punct)|notPunctSpace(\\*+)(?=notPunctSpace)",kO=X(L_,"gu").replace(/notPunctSpace/g,mi).replace(/punctSpace/g,Qr).replace(/punct/g,Ht).getRegex(),AO=X(L_,"gu").replace(/notPunctSpace/g,wO).replace(/punctSpace/g,yO).replace(/punct/g,M_).getRegex(),RO="^[^_*]*?__[^_*]*?\\*[^_*]*?(?=__)|[^*]+(?=[^*])|(?!\\*)punct(\\*+)(?=[\\s]|$)|notPunctSpace(\\*+)(?!\\*)(?=punctSpace|$)|(?!\\*)[\\s](\\*+)(?=notPunctSpace)|[\\s](\\*+)(?!\\*)(?=punct)|(?!\\*)punct(\\*+)(?!\\*)(?=punct)|(?:(?!\\*)punct|notPunctSpace)(\\*+)(?!\\*)(?=notPunctSpace)",IO=X(RO,"gu").replace(/notPunctSpace/g,mi).replace(/punctSpace/g,Qr).replace(/punct/g,Ht).getRegex(),CO=X("^[^_*]*?\\*\\*[^_*]*?_[^_*]*?(?=\\*\\*)|[^_]+(?=[^_])|(?!_)punct(_+)(?=[\\s]|$)|notPunctSpace(_+)(?!_)(?=punctSpace|$)|(?!_)punctSpace(_+)(?=notPunctSpace)|[\\s](_+)(?!_)(?=punct)|(?!_)punct(_+)(?!_)(?=punct)","gu").replace(/notPunctSpace/g,mi).replace(/punctSpace/g,Qr).replace(/punct/g,Ht).getRegex(),NO="^[^_*]*?\\*\\*[^_*]*?_[^_*]*?(?=\\*\\*)|[^_]+(?=[^_])|(?!_)punct(_+)(?=[\\s]|$)|notPunctSpace(_+)(?!_)(?=punctSpace|$)|(?!_)[\\s](_+)(?=notPunctSpace)|[\\s](_+)(?!_)(?=punct)|(?!_)punct(_+)(?!_)(?=punct)|(?:(?!_)punct|notPunctSpace)(_+)(?!_)(?=notPunctSpace)",OO=X(NO,"gu").replace(/notPunctSpace/g,mi).replace(/punctSpace/g,Qr).replace(/punct/g,Ht).getRegex(),MO=X(/^~~?(?:((?!~)punct)|[^\s~])/,"u").replace(/punct/g,Ht).getRegex(),PO="^[^~]+(?=[^~])|(?!~)punct(~~?)(?=[\\s]|$)|notPunctSpace(~~?)(?!~)(?=punctSpace|$)|(?!~)punctSpace(~~?)(?=notPunctSpace)|[\\s](~~?)(?!~)(?=punct)|(?!~)punct(~~?)(?!~)(?=punct)|notPunctSpace(~~?)(?=notPunctSpace)",LO=X(PO,"gu").replace(/notPunctSpace/g,mi).replace(/punctSpace/g,Qr).replace(/punct/g,Ht).getRegex(),zO=X(/\\(punct)/,"gu").replace(/punct/g,Ht).getRegex(),DO=X(/(`+)(?:[^`]|[^`][\s\S]*?[^`])\1(?!`)|`+|\\(punct)/,"gu").replace(/punct/g,Ht).getRegex(),$O=X(/^<(scheme:[^\s\x00-\x1f<>]*|email)>/).replace("scheme",/[a-zA-Z][a-zA-Z0-9+.-]{1,31}/).replace("email",/[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/).getRegex(),UO=X(Gp).replace("(?:-->|$)","-->").getRegex(),HO=X("^comment|^</[a-zA-Z][a-zA-Z0-9-]*\\s*>|^<[a-zA-Z][a-zA-Z0-9-]*(?:attribute)*?\\s*/?>|^<\\?[\\s\\S]*?\\?>|^<![a-zA-Z]+\\s[\\s\\S]*?>|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>").replace("comment",UO).replace("attribute",/\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/).getRegex(),z_=/\[(?:\\[\s\S]|[^\[\]\\])*\]/,Xl=X(/(?:\[(?:brackets|\\[\s\S]|[^\[\]\\])*\]|\\[\s\S]|`+(?!`)[^`]*?`+(?!`)|``+(?=\])|[^\[\]\\`])*?/).replace("brackets",z_).getRegex(),FO=X(/^!?\[(label)\]\([ \t\n]*(href)(?:(?:[ \t]+(?:\n[ \t]*)?|\n[ \t]*)(title))?[ \t\n]*\)/).replace("label",Xl).replace("href",/<(?:\\.|[^\n<>\\])*>|(?!<)[^ \t\n\x00-\x1f]+|(?=\))/).replace("title",/"(?:\\[\s\S]|[^"\\])*"|'(?:\\[\s\S]|[^'\\])*'|\((?:\\[\s\S]|[^)\\])*\)/).getRegex(),GO=X(/^!?\[(label)\]\[(ref)\]/).replace("label",Xl).replace("ref",Fp).getRegex(),BO=X(/^!?\[(ref)\](?:\[\])?/).replace("ref",Fp).getRegex(),b_=/(?!\s*\])(?:\\[\s\S]|[^\[\]\\]){1,999}/,VO=X(/(?:[^\[\]\\`]*(?:\[(?:brackets|\\[\s\S]|[^\[\]\\])*\]|\\[\s\S]|`+(?!`)[^`]*?`+(?!`)|``+(?=\]))){0,999}?[^\[\]\\`]*?/).replace("brackets",z_).getRegex(),jO=X("reflink|nolink(?!\\()","g").replace("reflink",X(/^!?\[(label)\]\[(ref)\]/).replace("label",VO).replace("ref",b_).getRegex()).replace("nolink",X(/^!?\[(ref)\](?:\[\])?/).replace("ref",b_).getRegex()).getRegex(),y_=/[hH][tT][tT][pP][sS]?|[fF][tT][pP]/,ZO=/[A-Za-z0-9._+-]+@[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![\w-])/,WO=X(/(?:mailto:email|xmpp:email(?:\/[A-Za-z0-9@.]+)?)/).replace(/email/g,ZO).getRegex(),Vp={_backpedal:ir,anyPunctuation:zO,anyPunctuationOutsideCode:DO,autolink:$O,blockSkip:EO,br:O_,code:mO,del:ir,delLDelim:ir,delRDelim:ir,emStrongLDelim:xO,emStrongRDelimAst:kO,emStrongRDelimUnd:CO,escape:fO,link:FO,nolink:BO,punctuation:vO,reflink:GO,reflinkSearch:jO,tag:HO,text:gO,url:ir},qO={...Vp,emStrongLDelim:SO,emStrongRDelimAst:IO,emStrongRDelimUnd:OO,link:X(/^!?\[(label)\]\((.*?)\)/).replace("label",Xl).getRegex(),reflink:X(/^!?\[(label)\]\s*\[([^\]]*)\]/).replace("label",Xl).getRegex()},Pp={...Vp,emStrongRDelimAst:AO,emStrongLDelim:_O,delLDelim:MO,delRDelim:LO,url:X(/^emailProtocol|^((?:protocol):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/).replace("emailProtocol",WO).replace("protocol",y_).replace("email",/[A-Za-z0-9._+-]+(@)[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![\w-])/).getRegex(),_backpedal:/(?:[^?!.,:;*_'"~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_'"~)]+(?!$))+/,del:/^(~~?)(?=[^\s~])((?:\\[\s\S]|[^\\])*?(?:\\[\s\S]|[^\s~\\]))\1(?=[^~]|$)/,text:X(/^(?:[^a-zA-Z0-9](?=emailProtocol)|(`+|~+|[^`~])(?:(?=[`~])|(?= {2,}\n)|(?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)|[\s\S]*?(?:(?=[\\<!\[`*~_]|\b_|protocol:\/\/|wwwStart|$)|[^ ](?= {2,}\n)|[^a-zA-Z0-9](?=emailProtocol)|[^a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-](?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@))))/).replace("protocol",y_).replace(/emailProtocol/g,/(?:mailto|xmpp):/).replace("wwwStart",R_?"(?<![^\\s*_~(])www\\.":"www\\.").getRegex()},YO={...Pp,br:X(O_).replace("{2,}","*").getRegex(),text:X(Pp.text).replace("\\b_","\\b_| {2,}\\n").replace(/\{2,\}/g,"*").getRegex()},Yl={normal:Bp,gfm:hO,pedantic:pO},ui={normal:Vp,gfm:Pp,breaks:YO,pedantic:qO},KO={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"},w_=t=>KO[t];function ft(t,e){if(e){if(Be.escapeTest.test(t))return t.replace(Be.escapeReplace,w_)}else if(Be.escapeTestNoEncode.test(t))return t.replace(Be.escapeReplaceNoEncode,w_);return t}function XO(t){return Be.numericCharacterReference.test(t)?t.replace(Be.numericCharacterReferenceOrAmpersand,(e,n,r)=>{if(n===void 0&&r===void 0)return"&amp;";let o=n===void 0?Number.parseInt(r,16):Number.parseInt(n,10);return o===0||o>1114111||o>=55296&&o<=57343?"\uFFFD":o===38?"&amp;":String.fromCodePoint(o)}):t}function E_(t){try{t=encodeURI(t).replace(Be.percentDecode,"%")}catch{return null}return t}function x_(t,e){let n=t.replace(Be.findPipe,(i,s,a)=>{let l=!1,d=s;for(;--d>=0&&a[d]==="\\";)l=!l;return l?"|":" |"}),r=n.split(Be.splitPipe),o=0;if(r[0].trim()||r.shift(),r.length>0&&!r.at(-1)?.trim()&&r.pop(),e)if(r.length>e)r.splice(e);else for(;r.length<e;)r.push("");for(;o<r.length;o++)r[o]=r[o].trim().replace(Be.slashPipe,"|");return r}function nn(t,e,n){let r=t.length;if(r===0)return"";let o=0;for(;o<r;){let i=t.charAt(r-o-1);if(i===e&&!n)o++;else if(i!==e&&n)o++;else break}return t.slice(0,r-o)}function __(t){let e=t.split(`
`),n=e.length-1;for(;n>=0&&Be.blankLine.test(e[n]);)n--;return e.length-n<=2?t:e.slice(0,n+1).join(`
`)}function Jl(t){return t.trim().replace(Be.multipleSpaceGlobal," ").toLowerCase().toUpperCase().toLowerCase()}function T_(t,e){if(t.indexOf(e[0])===-1&&t.indexOf(e[1])===-1)return-1;let n=0;for(let r=0;r<t.length;r++)if(t[r]==="\\")r++;else if(t[r]===e[0])n++;else if(t[r]===e[1]&&(n--,n<0))return r;return n>0?-2:-1}var Jr=new WeakMap;function jp(t){let e={"*":-1,_:-1},n=-1,r=t.length;for(let o=0;o<r;o++){let i=t[o];if(i!=="*"&&i!=="_"&&i!=="~")continue;let s=o===0?`
`:t[o-1],a=o+1;for(;a<r&&t[a]===i;)a++;s!==" "&&s!=="	"&&s!==`
`&&s!=="\r"&&s!=="\f"&&(i==="~"?n=o:e[i]=o),o=a-1}return{maskedSrc:t,lastPossibleEmStrongCloserIndex:e,lastPossibleDelCloserIndex:n}}function JO(t,e){let n=jp(e),r=Jr.get(t);r?r.push(n):Jr.set(t,[n])}function QO(t){let e=Jr.get(t);e&&(e.pop(),e.length===0&&Jr.delete(t))}function D_(t,e,n){let r=Jr.get(t)?.at(-1);return r&&r.maskedSrc===e?r.lastPossibleEmStrongCloserIndex[n]:jp(e).lastPossibleEmStrongCloserIndex[n]}function $_(t,e){let n=Jr.get(t)?.at(-1);return n&&n.maskedSrc===e?n.lastPossibleDelCloserIndex:jp(e).lastPossibleDelCloserIndex}function Kl(t,e=0){let n=e,r="";for(let o of t)if(o==="	"){let i=4-n%4;r+=" ".repeat(i),n+=i}else r+=o,n++;return r}function e1(t,e){let n="";for(let r=0;r<t.length;r++){if(t[r]==="`"){let o=e.inline.code.exec(t.slice(r));if(o){n+=o[0],r+=o[0].length-1;continue}}if(t[r]==="\\"&&(t[r+1]==="["||t[r+1]==="]")){n+=t[r+1],r++;continue}n+=t[r]}return n}function S_(t,e,n,r,o){let i=e.href,s=e.title||null,a=e1(t[1],o),l=t[0].charAt(0)==="!",d=r.state.inLink,c=r.state.linkEmitted,h=r.state.inRawBlock;r.state.inLink=!0,r.state.linkEmitted=!1;let p=r.inlineTokens(a),m=r.state.linkEmitted;if(r.state.linkEmitted=c,r.state.inLink=d,!l){if(m){r.state.inRawBlock=h;return}r.state.linkEmitted=!0}return{type:l?"image":"link",raw:n,href:i,title:s,text:a,tokens:p}}function t1(t,e,n){let r=t.match(n.other.indentCodeCompensation);if(r===null)return e;let o=r[1];return e.split(`
`).map(i=>{let s=i.match(n.other.beginningSpace);if(s===null)return i;let[a]=s;return i.slice(Math.min(a.length,o.length))}).join(`
`)}function k_(t,e,n,r){if(!e.includes("<"))return!1;for(let o=0;o<e.length;o++){if(e[o]==="\\"){o++;continue}if(e[o]==="`"){let a=r.inline.code.exec(e.slice(o));if(a){o+=a[0].length-1;continue}}if(e[o]!=="<")continue;let i=t.slice(n+o),s=r.inline.tag.exec(i)||r.inline.autolink.exec(i);if(s){if(s[0].length>e.length-o)return!0;o+=s[0].length-1}}return!1}var sr=class{options;rules;lexer;constructor(t){this.options=t||lr}space(t){let e=this.rules.block.newline.exec(t);if(e&&e[0].length>0)return{type:"space",raw:e[0]}}code(t){let e=this.rules.block.code.exec(t);if(e){let n=this.options.pedantic?e[0]:__(e[0]),r=n.replace(this.rules.other.codeRemoveIndent,"");return{type:"code",raw:n,codeBlockStyle:"indented",text:r}}}fences(t){let e=this.rules.block.fences.exec(t);if(e){let n=e[0],r=t1(n,e[3]||"",this.rules);return e[3]!==void 0&&(r===""||r.endsWith(`
`))&&(r+=`
`),{type:"code",raw:n,lang:e[2]?e[2].trim().replace(this.rules.inline.anyPunctuation,"$1"):e[2],text:r}}}heading(t){let e=this.rules.block.heading.exec(t);if(e){let n=e[2].trim();if(this.rules.other.endingHash.test(n)){let r=nn(n,"#");(this.options.pedantic||!r||this.rules.other.endingSpaceTabChar.test(r))&&(n=r.trim())}return{type:"heading",raw:nn(e[0],`
`),depth:e[1].length,text:n,tokens:this.lexer.inline(n)}}}hr(t){let e=this.rules.block.hr.exec(t);if(e)return{type:"hr",raw:nn(e[0],`
`)}}blockquote(t){let e=this.rules.block.blockquote.exec(t);if(e){let n=nn(e[0],`
`).split(`
`),r="",o="",i=[];for(;n.length>0;){let s=!1,a=[],l;for(l=0;l<n.length;l++)if(this.rules.other.blockquoteStart.test(n[l]))a.push(n[l]),s=!0;else if(!s)a.push(n[l]);else break;n=n.slice(l);let d=a.join(`
`),c=d.replace(this.rules.other.blockquoteMarkerWhitespace,(m,u,v)=>v.startsWith(" ")?u+" "+v.slice(1):u+Kl(v,u.length)).replace(this.rules.other.blockquoteSetextReplace,`
    $1`).replace(this.rules.other.blockquoteSetextReplace2,"");r=r?`${r}
${d}`:d,o=o?`${o}
${c}`:c;let h=this.lexer.state.top;if(this.lexer.state.top=!0,this.lexer.blockTokens(c,i,!0),this.lexer.state.top=h,n.length===0)break;let p=i.at(-1);if(p?.type==="code"||p?.type==="heading"||p?.type==="hr"||p?.type==="html"||p?.type==="table")break;if(p?.type==="blockquote"){let m=p,u=n.join(`
`),v=m.raw+`
`+u.replace(this.rules.other.blockquoteSetextReplace2,""),E=this.blockquote(v);i[i.length-1]=E;let x=v.substring(E.raw.length).replace(/^\n/,""),T=x?x.split(`
`).length:0,O=T?n.slice(0,-T):n;if(O.length>0&&(r=`${r}
${O.join(`
`)}`),o=o.substring(0,o.length-m.text.length)+E.text,n=n.slice(O.length),n.length>0&&this.rules.other.blockquoteStart.test(n[0]))continue;break}else if(p?.type==="list"){let m=p,u=m.raw+`
`+n.join(`
`),v=this.list(u);i[i.length-1]=v;let E=v.raw.length>m.raw.length?u.slice(m.raw.length+1,v.raw.length).split(`
`).length:0;if(E>0){let x=n.slice(0,E).join(`
`);r=`${r}
${x}`,o=`${o}
${x}`}if(n=n.slice(E),n.length>0&&!this.rules.other.blockquoteStart.test(n[0]))break;continue}}return{type:"blockquote",raw:r,tokens:i,text:o}}}list(t){let e=this.rules.block.list.exec(t);if(e){if(!this.options.pedantic&&this.lexer.state.lastToken?.type==="text"&&!this.rules.other.listInterruptsParagraph.test(t))return;let n=t,r=()=>n.length-t.length,o=e[1].trim(),i=o.length>1,s={type:"list",raw:"",ordered:i,start:i?+o.slice(0,-1):"",loose:!1,items:[]};o=i?`\\d{1,9}\\${o.slice(-1)}`:`\\${o}`,this.options.pedantic&&(o=i?o:"[*+-]");let a=this.rules.other.listItemRegex(o),l=!1;for(;t;){let h=!1,p="";if(!(e=a.exec(t))||this.rules.block.hr.test(t))break;let m=r();t=t.substring(e[0].length);let u=e[2].split(`
`,1)[0],v=e[1].length,E=this.options.pedantic?Kl(u,v):u.replace(this.rules.other.leadingSpaceTab,g=>Kl(g,v)),x=t.split(`
`,1)[0],T=!E.trim(),O=0;if(this.options.pedantic?(O=2,p=E.trimStart()):T?O=v+1:(O=E.search(this.rules.other.nonSpaceChar),O=O>4?1:O,p=E.slice(O),O+=v),T&&this.rules.other.blankLine.test(x)&&(t=t.substring(x.length+1),h=!0),!h){let g=this.rules.other.nextBulletRegex(O),w=this.rules.other.hrRegex(O),b=this.rules.other.fencesBeginRegex(O),k=this.options.pedantic?this.rules.other.pedanticHeadingBeginRegex(O):this.rules.other.headingBeginRegex(O),I=this.rules.other.htmlBeginRegex(O),P=this.rules.other.blockquoteBeginRegex(O),U=!1;for(;t;){let z=t.split(`
`,1)[0],ee;if(x=z,this.options.pedantic?(x=x.replace(this.rules.other.listReplaceNesting,"  "),ee=x):ee=x.replace(this.rules.other.leadingSpaceTab,ae=>Kl(ae)),b.test(x)||k.test(x)||I.test(x)||P.test(x)||g.test(x)||w.test(x))break;if(ee.search(this.rules.other.nonSpaceChar)>=O||!x.trim())p+=`
`+ee.slice(O),U=!1;else{if(T)break;let ae=E;if(!this.options.pedantic&&!p.includes(`
`)&&!E.includes("	")){let qe;for(;!w.test(ae)&&(qe=this.rules.other.nestedBlockMarker.exec(ae));)ae=ae.slice(qe[0].length);if(!ae.trim())break}if(ae.replace(this.rules.other.tabCharGlobal,"    ").search(this.rules.other.nonSpaceChar)>=4||b.test(ae)||k.test(ae)||I.test(ae)||w.test(ae))break;if(!this.options.pedantic&&!U){let qe=E.replace(this.rules.other.nestedContainerMarkers,"");if(this.rules.block.fences.test(qe)||this.rules.block.heading.test(qe)||this.rules.block.hr.test(qe))break}let ue=!this.options.pedantic&&/^ {0,3}(?:=+|-+) *$/.test(x)&&this.rules.block.lheading.test(`${E}
${x}`)?`    ${ee.replace(/^ {0,3}/,"")}`:x;p+=`
`+ue,U=!0}T=!x.trim(),t=t.substring(z.length+1),E=ee.slice(O)}}let S=n.slice(m,r());s.loose||(l?s.loose=!0:this.rules.other.doubleBlankLine.test(S)&&(l=!0)),s.items.push({type:"list_item",raw:S,task:!!this.options.gfm&&this.rules.other.listIsTask.test(p),loose:!1,text:p,tokens:[]})}let d=s.items.at(-1);if(d)d.raw=d.raw.trimEnd(),d.text=d.text.trimEnd();else return;s.raw=n.slice(0,r()).trimEnd();let c=[];for(let h of s.items)if(this.lexer.state.top=!1,c.push(this.lexer.inlineQueue.length),h.tokens=this.lexer.blockTokens(h.text,[]),!s.loose){let p=h.tokens.filter(u=>u.type==="space"),m=p.length>0&&p.some(u=>this.rules.other.anyLine.test(u.raw));s.loose=m}for(let h=0;h<s.items.length;h++){let p=s.items[h],m=p.tokens[0];if(p.task&&(m?.type==="text"||m?.type==="paragraph")){p.text=p.text.replace(this.rules.other.listReplaceTask,""),m.raw=m.raw.replace(this.rules.other.listReplaceTask,""),m.text=m.text.replace(this.rules.other.listReplaceTask,"");let u=this.lexer.inlineQueue;for(let E=c[h];E<u.length;E++)if(u[E].tokens===m.tokens){u[E].src=u[E].src.replace(this.rules.other.listReplaceTask,"");break}let v=this.rules.other.listTaskCheckbox.exec(p.raw);if(v){let E={type:"checkbox",raw:v[0]+" ",checked:v[0]!=="[ ]"};p.checked=E.checked,s.loose?p.tokens[0]&&["paragraph","text"].includes(p.tokens[0].type)&&"tokens"in p.tokens[0]&&p.tokens[0].tokens?(p.tokens[0].raw=E.raw+p.tokens[0].raw,p.tokens[0].text=E.raw+p.tokens[0].text,p.tokens[0].tokens.unshift(E)):p.tokens.unshift({type:"paragraph",raw:E.raw,text:E.raw,tokens:[E]}):p.tokens.unshift(E)}}else p.task&&(p.task=!1)}if(s.loose)for(let h of s.items){h.loose=!0;for(let p of h.tokens)p.type==="text"&&(p.type="paragraph")}return s}}html(t){let e=this.rules.block.html.exec(t);if(e){if(this.lexer.state.lastToken?.type==="paragraph"&&!this.rules.other.htmlBeginRegex(4).test(t))return;let n=__(e[0]);return{type:"html",block:!0,raw:n,pre:e[1]==="pre"||e[1]==="script"||e[1]==="style",text:n}}}def(t){let e=this.rules.block.def.exec(t);if(e){if(!this.rules.other.startAngleBracket.test(e[2])&&T_(e[2],"()")!==-1)return;let n=Jl(e[1]),r=e[2]?e[2].replace(this.rules.other.hrefBrackets,"$1").replace(this.rules.inline.anyPunctuation,"$1"):"",o=e[3]?e[3].substring(1,e[3].length-1).replace(this.rules.inline.anyPunctuation,"$1"):e[3];return{type:"def",tag:n,raw:nn(e[0],`
`),href:r,title:o}}}table(t){let e=this.rules.block.table.exec(t);if(!e||!this.rules.other.tableDelimiter.test(e[2]))return;let n=x_(e[1]),r=e[2].replace(this.rules.other.tableAlignChars,"").split("|"),o=e[3]?.trim()?e[3].replace(this.rules.other.tableRowBlankLine,"").split(`
`):[],i={type:"table",raw:nn(e[0],`
`),header:[],align:[],rows:[]};if(n.length===r.length){for(let s of r)this.rules.other.tableAlignRight.test(s)?i.align.push("right"):this.rules.other.tableAlignCenter.test(s)?i.align.push("center"):this.rules.other.tableAlignLeft.test(s)?i.align.push("left"):i.align.push(null);for(let s=0;s<n.length;s++)i.header.push({text:n[s],tokens:this.lexer.inline(n[s]),header:!0,align:i.align[s]});for(let s of o)i.rows.push(x_(s,i.header.length).map((a,l)=>({text:a,tokens:this.lexer.inline(a),header:!1,align:i.align[l]})));return i}}lheading(t){let e=this.rules.block.lheading.exec(t);if(e){let n=e[1].trim();return{type:"heading",raw:nn(e[0],`
`),depth:e[2].charAt(0)==="="?1:2,text:n,tokens:this.lexer.inline(n)}}}paragraph(t){let e=this.rules.block.paragraph.exec(t);if(e){let n=e[1].charAt(e[1].length-1)===`
`?e[1].slice(0,-1):e[1];return{type:"paragraph",raw:e[0],text:n,tokens:this.lexer.inline(n)}}}text(t){let e=this.rules.block.text.exec(t);if(e)return{type:"text",raw:e[0],text:e[0],tokens:this.lexer.inline(e[0])}}escape(t){if(t.charCodeAt(0)!==92)return;let e=this.rules.inline.escape.exec(t);if(e)return{type:"escape",raw:e[0],text:e[1]}}tag(t){if(t.charCodeAt(0)!==60)return;let e=this.rules.inline.tag.exec(t);if(e)return!this.lexer.state.inLink&&this.rules.other.startATag.test(e[0])?this.lexer.state.inLink=!0:this.lexer.state.inLink&&this.rules.other.endATag.test(e[0])&&(this.lexer.state.inLink=!1),!this.lexer.state.inRawBlock&&this.rules.other.startPreScriptTag.test(e[0])?this.lexer.state.inRawBlock=!0:this.lexer.state.inRawBlock&&this.rules.other.endPreScriptTag.test(e[0])&&(this.lexer.state.inRawBlock=!1),{type:"html",raw:e[0],inLink:this.lexer.state.inLink,inRawBlock:this.lexer.state.inRawBlock,block:!1,text:e[0]}}link(t){if(this.lexer.state.linkParenPossible===!1)return;let e=t.charCodeAt(0);if(e!==91&&e!==33)return;let n=this.rules.inline.link.exec(t);if(n){let r=n[0].charAt(0)==="!"?2:1;if(!this.options.pedantic&&k_(t,n[1],r,this.rules))return;let o=n[2].trim();if(!this.options.pedantic&&this.rules.other.startAngleBracket.test(o)){if(!this.rules.other.endAngleBracket.test(o))return;let l=nn(o.slice(0,-1),"\\");if((o.length-l.length)%2===0)return}else{let l=T_(n[2],"()");if(l===-2)return;if(l>-1){let d=(n[0].indexOf("!")===0?5:4)+n[1].length+l;n[2]=n[2].substring(0,l),n[0]=n[0].substring(0,d).trim(),n[3]=""}}let i=nn(n[0].slice(0,-1),"\\");if((n[0].length-i.length)%2===0)return;let s=n[2],a="";if(this.options.pedantic){let l=this.rules.other.pedanticHrefTitle.exec(s);l&&(s=l[1],a=l[3])}else a=n[3]?n[3].slice(1,-1):"";return s=s.trim(),this.rules.other.startAngleBracket.test(s)&&(this.options.pedantic&&!this.rules.other.endAngleBracket.test(o)?s=s.slice(1):s=s.slice(1,-1)),S_(n,{href:s&&s.replace(this.rules.inline.anyPunctuation,"$1"),title:a&&a.replace(this.rules.inline.anyPunctuation,"$1")},n[0],this.lexer,this.rules)}}reflink(t,e){let n=t.charCodeAt(0);if(n!==91&&n!==33)return;let r;if((r=this.rules.inline.reflink.exec(t))||(r=this.rules.inline.nolink.exec(t))){let o=r[0].charAt(0)==="!"?2:1;if(!this.options.pedantic&&k_(t,r[1],o,this.rules))return;let i=e[Jl(r[2]||r[1])];if(!i){let s=r[0].charAt(0);return{type:"text",raw:s,text:s}}return S_(r,i,r[0],this.lexer,this.rules)}}emStrong(t,e,n=""){let r=this.rules.inline.emStrongLDelim.exec(t);if(!r||!r[1]&&!r[2]&&!r[3]&&!r[4])return;let o=r[0][0],i=n===o,s=e.length-t.length,a=s;for(;!this.options.pedantic&&a>0&&e[a-1]===o;)a--;let l=[...e.slice(Math.max(0,a-2),a)].at(-1)??"",d=l==="*"||l==="_"||!!this.rules.inline.punctuation.exec(l);a<s&&(n=l);let c=a<s?d:n==="*"||n==="_"||!!this.rules.inline.punctuation.exec(n);if(r[4]&&n.match(this.rules.other.unicodeAlphaNumeric))return;let h=r[1]||r[3]||"";if(!h||!n||c){let p=[...r[0]].length-1,m,u,v=p,E=0,x=s-a+p,T=!this.options.pedantic&&!!l.trim()&&(!!h||o==="*"&&!d);if(o!=="*"&&o!=="_")return;let O=o==="*"?this.rules.inline.emStrongRDelimAst:this.rules.inline.emStrongRDelimUnd,S=D_(this,e,o),g=e.length-t.length+p;if(S<g)return;e=e.slice(-1*t.length+p);let w=S-g;for(O.lastIndex=0;(r=O.exec(e))!==null&&!(r.index>w);){if(m=r[1]||r[2]||r[3]||r[4]||r[5]||r[6],!m)continue;if(u=[...m].length,r[3]||r[4]){v+=u;continue}else if((r[5]||r[6]||T)&&x%3&&!((x+u)%3)){if(i&&(r[5]||r[6]))break;E+=u;continue}if(v-=u,v>0)continue;u=Math.min(u,u+v+E);let b=[...r[0]][0].length,k=t.slice(0,p+r.index+b+u);if(Math.min(p,u)%2){let P=k.slice(1,-1);return{type:"em",raw:k,text:P,tokens:this.lexer.inlineTokens(P)}}let I=k.slice(2,-2);return{type:"strong",raw:k,text:I,tokens:this.lexer.inlineTokens(I)}}}}codespan(t){if(t.charCodeAt(0)!==96)return;let e=this.rules.inline.code.exec(t);if(e){let n=e[2].replace(this.rules.other.newLineCharGlobal," "),r=this.rules.other.nonSpaceChar.test(n),o=this.rules.other.startingSpaceChar.test(n)&&this.rules.other.endingSpaceChar.test(n);return r&&o&&(n=n.substring(1,n.length-1)),{type:"codespan",raw:e[0],text:n}}}br(t){let e=t.charCodeAt(0);if(e!==32&&e!==92&&e!==10)return;let n=this.rules.inline.br.exec(t);if(n)return{type:"br",raw:n[0]}}del(t,e,n=""){if(t.charCodeAt(0)!==126)return;let r=this.rules.inline.delLDelim.exec(t);if(r&&(!r[1]||!n||this.rules.inline.punctuation.exec(n))){let o=[...r[0]].length-1,i,s,a=o,l=this.rules.inline.delRDelim,d=$_(this,e),c=e.length-t.length+o;if(d<c)return;e=e.slice(-1*t.length+o);let h=d-c;for(l.lastIndex=0;(r=l.exec(e))!==null&&!(r.index>h);){if(i=r[1]||r[2]||r[3]||r[4]||r[5]||r[6],!i||(s=[...i].length,s!==o))continue;if(r[3]||r[4]){a+=s;continue}if(a-=s,a>0)continue;s=Math.min(s,s+a);let p=[...r[0]][0].length,m=t.slice(0,o+r.index+p+s),u=m.slice(o,-o);return{type:"del",raw:m,text:u,tokens:this.lexer.inlineTokens(u)}}}}autolink(t){if(t.charCodeAt(0)!==60)return;let e=this.rules.inline.autolink.exec(t);if(e){let n,r;return e[2]==="@"?(n=e[1],r="mailto:"+n):(n=e[1],r=n),{type:"link",raw:e[0],text:n,href:r,autolink:!0,tokens:[{type:"text",raw:n,text:n}]}}}url(t){let e;if(e=this.rules.inline.url.exec(t)){let n,r;if(e[2]==="@")n=e[0],r="mailto:"+n;else{let o;do o=e[0],e[0]=this.rules.inline._backpedal.exec(e[0])?.[0]??"";while(o!==e[0]);n=e[0],e[1]==="www."?r="http://"+e[0]:r=e[0]}return{type:"link",raw:e[0],text:n,href:r,autolink:!0,tokens:[{type:"text",raw:n,text:n}]}}}inlineText(t){let e=this.rules.inline.text.exec(t);if(e){let n=this.lexer.state.inRawBlock;return{type:"text",raw:e[0],text:n?e[0]:XO(e[0]),escaped:n}}}},St=class Lp{tokens;options;state;inlineQueue;tokenizer;constructor(e){this.tokens=[],this.tokens.links=Object.create(null),this.options=e||lr,this.options.tokenizer=this.options.tokenizer||new sr,this.tokenizer=this.options.tokenizer,this.tokenizer.options=this.options,this.tokenizer.lexer=this,this.inlineQueue=[],this.state={inLink:!1,inRawBlock:!1,linkEmitted:!1,linkParenPossible:!0,top:!0};let n={other:Be,block:Yl.normal,inline:ui.normal};this.options.pedantic?(n.block=Yl.pedantic,n.inline=ui.pedantic):this.options.gfm&&(n.block=Yl.gfm,this.options.breaks?n.inline=ui.breaks:n.inline=ui.gfm),this.tokenizer.rules=n}static get rules(){return{block:Yl,inline:ui}}static lex(e,n){return new Lp(n).lex(e)}static lexInline(e,n){return new Lp(n).inlineTokens(e)}lex(e){e=e.replace(Be.carriageReturn,`
`),this.blockTokens(e,this.tokens);for(let n=0;n<this.inlineQueue.length;n++){let r=this.inlineQueue[n];this.state.inRawBlock=!1,this.inlineTokens(r.src,r.tokens)}return this.inlineQueue=[],this.tokens}blockTokens(e,n=[],r=!1){this.tokenizer.lexer=this;let o=this.state.lastToken;this.options.pedantic&&(e=e.replace(Be.tabCharGlobal,"    ").replace(Be.spaceLine,""));let i=1/0,s,a=this.options.gfm&&!this.options.pedantic&&this.tokenizer.paragraph===sr.prototype.paragraph;for(;e;){if(e.length<i)i=e.length;else{this.infiniteLoopError(e.charCodeAt(0));break}this.state.lastToken=n.at(-1);let l;if(this.options.extensions?.block?.some(c=>(l=c.call({lexer:this},e,n))?(e=e.substring(l.raw.length),n.push(l),!0):!1))continue;if(l=this.tokenizer.space(e)){e=e.substring(l.raw.length);let c=n.at(-1);l.raw.length===1&&c!==void 0?c.raw+=`
`:n.push(l);continue}if(l=this.tokenizer.code(e)){e=e.substring(l.raw.length);let c=n.at(-1);c?.type==="paragraph"||c?.type==="text"?(c.raw+=(c.raw.endsWith(`
`)?"":`
`)+l.raw,c.text+=`
`+l.text,this.inlineQueue.at(-1).src=c.text):n.push(l);continue}if(l=this.tokenizer.fences(e)){e=e.substring(l.raw.length),n.push(l);continue}if(l=this.tokenizer.heading(e)){e=e.substring(l.raw.length),n.push(l);continue}if(l=this.tokenizer.hr(e)){e=e.substring(l.raw.length),n.push(l);continue}if(l=this.tokenizer.blockquote(e)){e=e.substring(l.raw.length),n.push(l);continue}if(l=this.tokenizer.list(e)){e=e.substring(l.raw.length),n.push(l);continue}if(l=this.tokenizer.html(e)){e=e.substring(l.raw.length),n.push(l);continue}if(l=this.tokenizer.def(e)){e=e.substring(l.raw.length);let c=n.at(-1);c?.type==="paragraph"||c?.type==="text"?(c.raw+=(c.raw.endsWith(`
`)?"":`
`)+l.raw,c.text+=`
`+l.raw,this.inlineQueue.at(-1).src=c.text):(this.tokens.links[l.tag]||(this.tokens.links[l.tag]={href:l.href,title:l.title}),n.push(l));continue}if(l=this.tokenizer.table(e)){e=e.substring(l.raw.length),n.push(l);continue}if(l=this.tokenizer.lheading(e)){e=e.substring(l.raw.length),n.push(l);continue}let d=e;if(this.options.extensions?.startBlock){let c=1/0,h=e.slice(1),p;this.options.extensions.startBlock.forEach(m=>{p=m.call({lexer:this},h),typeof p=="number"&&p>=0&&(c=Math.min(c,p))}),c<1/0&&c>=0&&(d=e.substring(0,c+1))}if(this.state.top&&(l=this.tokenizer.paragraph(d))){let c=n.at(-1);(r||c===s&&a)&&c?.type==="paragraph"?(c.raw+=(c.raw.endsWith(`
`)?"":`
`)+l.raw,c.text+=`
`+l.text,this.inlineQueue.pop(),this.inlineQueue.at(-1).src=c.text,s=c):(n.push(l),s=l),r=d.length!==e.length,e=e.substring(l.raw.length);continue}if(l=this.tokenizer.text(e)){e=e.substring(l.raw.length);let c=n.at(-1);c?.type==="text"?(c.raw+=(c.raw.endsWith(`
`)?"":`
`)+l.raw,c.text+=`
`+l.text,this.inlineQueue.pop(),this.inlineQueue.at(-1).src=c.text):n.push(l);continue}if(e){this.infiniteLoopError(e.charCodeAt(0));break}}return this.state.top=!0,this.state.lastToken=o,n}inline(e,n=[]){return this.inlineQueue.push({src:e,tokens:n}),n}linkInText(e){if(!e.includes("["))return!1;let n=this.tokenizer.rules.inline.link;for(let r of e.matchAll(this.tokenizer.rules.inline.blockSkip))if(n.test(r[0])&&e.charAt(r.index-1)!=="!")return!0;for(let r of e.matchAll(this.tokenizer.rules.inline.reflinkSearch)){let o=r[0],i=o.lastIndexOf("[");if(!(o.charAt(0)==="!"||!Object.hasOwn(this.tokens.links,Jl(o.slice(i+1,-1))))&&!(i>1&&this.linkInText(o.slice(1,i-1))))return!0}return!1}inlineTokens(e,n=[]){this.tokenizer.lexer=this;let r=this.state.linkParenPossible;this.state.linkParenPossible=e.includes(")");try{return this.#e(e,n)}finally{this.state.linkParenPossible=r}}#e(e,n){let r=e.includes("*")||e.includes("_")||e.includes("~"),o=r||this.options.hooks?.emStrongMask||this.tokenizer.emStrong!==sr.prototype.emStrong||this.tokenizer.del!==sr.prototype.del?this.#r(e):e;if(!r)return this.#t(e,o,n);JO(this.tokenizer,o);try{return this.#t(e,o,n)}finally{QO(this.tokenizer)}}#t(e,n,r){let o=!1,i="",s=1/0;for(;e;){if(e.length<s)s=e.length;else{this.infiniteLoopError(e.charCodeAt(0));break}o||(i=""),o=!1;let a;if(this.options.extensions?.inline?.some(c=>(a=c.call({lexer:this},e,r))?(e=e.substring(a.raw.length),r.push(a),!0):!1))continue;if(a=this.tokenizer.escape(e)){e=e.substring(a.raw.length),r.push(a);continue}if(a=this.tokenizer.tag(e)){e=e.substring(a.raw.length),r.push(a);continue}if(a=this.tokenizer.link(e)){e=e.substring(a.raw.length),r.push(a);continue}if(a=this.tokenizer.reflink(e,this.tokens.links)){e=e.substring(a.raw.length);let c=r.at(-1);a.type==="text"&&c?.type==="text"?(c.raw+=a.raw,c.text+=a.text):r.push(a);continue}let l=e[0];if(l==="*"||l==="_"){let c=n.length-e.length;if(D_(this.tokenizer,n,l)<=c){let h=1;for(;h<e.length&&e.charCodeAt(h)===l.charCodeAt(0);)h++;let p=e.substring(0,h),m=r.at(-1);m?.type==="text"&&!m.escaped?(m.raw+=p,m.text+=p):r.push({type:"text",raw:p,text:p,escaped:!1}),e=e.substring(h),i=l,o=!0;continue}}else if(l==="~"){let c=n.length-e.length;if($_(this.tokenizer,n)<=c){let h=1;for(;h<e.length&&e.charCodeAt(h)===126;)h++;let p=e.substring(0,h),m=r.at(-1);m?.type==="text"&&!m.escaped?(m.raw+=p,m.text+=p):r.push({type:"text",raw:p,text:p,escaped:!1}),e=e.substring(h),i=l,o=!0;continue}}if(a=this.tokenizer.emStrong(e,n,i)){e=e.substring(a.raw.length),r.push(a);continue}if(a=this.tokenizer.codespan(e)){e=e.substring(a.raw.length),r.push(a);continue}if(a=this.tokenizer.br(e)){e=e.substring(a.raw.length),r.push(a);continue}if(a=this.tokenizer.del(e,n,i)){e=e.substring(a.raw.length),r.push(a);continue}if(a=this.tokenizer.autolink(e)){e=e.substring(a.raw.length),r.push(a);continue}if(!this.state.inLink&&(a=this.tokenizer.url(e))){e=e.substring(a.raw.length),r.push(a);continue}let d=e;if(this.options.extensions?.startInline){let c=1/0,h=e.slice(1),p;this.options.extensions.startInline.forEach(m=>{p=m.call({lexer:this},h),typeof p=="number"&&p>=0&&(c=Math.min(c,p))}),c<1/0&&c>=0&&(d=e.substring(0,c+1))}if(a=this.tokenizer.inlineText(d)){e=e.substring(a.raw.length),a.raw.slice(-1)!=="_"&&(i=a.raw.slice(-1)),o=!0;let c=r.at(-1);c?.type==="text"?(c.raw+=a.raw,c.text+=a.text):r.push(a);continue}if(e){this.infiniteLoopError(e.charCodeAt(0));break}}return r}#n(e){let{blockSkip:n,tag:r,autolink:o}=this.tokenizer.rules.inline,i="",s=0,a;for(n.lastIndex=0;a=n.exec(e);){let l=a.index+(a[2]?a[2].length:0),d=a.index+a[0].length;if(e.charAt(l)==="<"){let c=e.slice(l),h=r.exec(c)||o.exec(c);if(!h){n.lastIndex=l+1;continue}d=l+h[0].length,n.lastIndex=d}i+=e.slice(s,l)+"["+"a".repeat(d-l-2)+"]",s=d}return i+e.slice(s)}#r(e){let n=e;if(this.tokens.links&&e.includes("[")){let r=this.tokenizer.rules.inline.reflinkSearch,o=i=>{let s=i.lastIndexOf("[");if(!Object.hasOwn(this.tokens.links,Jl(i.slice(s+1,-1))))return i;if(s>1&&i.charAt(0)!=="!"){let a=i.slice(1,s-1);if(this.linkInText(a))return"["+a.replace(r,o)+"]["+"a".repeat(i.length-s-2)+"]"}return"["+"a".repeat(i.length-2)+"]"};n=n.replace(r,o)}return n=n.replace(this.tokenizer.rules.inline.anyPunctuationOutsideCode,(r,o,i)=>i?"+".repeat(r.length):o?o+r.slice(o.length,-o.length).replace(/`/g,"+")+o:r),n=this.#n(n),n=this.options.hooks?.emStrongMask?.call({lexer:this},n)??n,n}infiniteLoopError(e){let n="Infinite loop on byte: "+e;if(this.options.silent)console.error(n);else throw new Error(n)}},Ql=class{options;parser;constructor(t){this.options=t||lr}space(t){return""}code({text:t,lang:e,escaped:n}){let r=(e||"").match(Be.notSpaceStart)?.[0],o=t?t.replace(Be.endingNewline,"")+`
`:"";return r?'<pre><code class="language-'+ft(r)+'">'+(n?o:ft(o,!0))+`</code></pre>
`:"<pre><code>"+(n?o:ft(o,!0))+`</code></pre>
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
`}strong({tokens:t}){return`<strong>${this.parser.parseInline(t)}</strong>`}em({tokens:t}){return`<em>${this.parser.parseInline(t)}</em>`}codespan({text:t}){return`<code>${ft(t,!0)}</code>`}br(t){return"<br>"}del({tokens:t}){return`<del>${this.parser.parseInline(t)}</del>`}link({href:t,title:e,text:n,tokens:r,autolink:o}){let i=o?ft(n,!0):this.parser.parseInline(r),s=E_(t);if(s===null)return i;t=ft(s,o);let a='<a href="'+t+'"';return e&&(a+=' title="'+ft(e)+'"'),a+=">"+i+"</a>",a}image({href:t,title:e,text:n,tokens:r}){r&&(n=this.parser.parseInline(r,this.parser.textRenderer));let o=E_(t);if(o===null)return ft(n);t=o;let i=`<img src="${ft(t)}" alt="${ft(n)}"`;return e&&(i+=` title="${ft(e)}"`),i+=">",i}text(t){return"tokens"in t&&t.tokens?this.parser.parseInline(t.tokens):"escaped"in t&&t.escaped?t.text:ft(t.text)}},Zp=class{parser;strong({text:t,tokens:e}){return e?this.parser.parseInline(e,this):t}em({text:t,tokens:e}){return e?this.parser.parseInline(e,this):t}codespan({text:t}){return t}del({text:t,tokens:e}){return e?this.parser.parseInline(e,this):t}html({text:t}){return t}text({text:t}){return t}link({text:t,tokens:e}){return e?this.parser.parseInline(e,this):t}image({text:t,tokens:e}){return e?this.parser.parseInline(e,this):t}br(){return`
`}checkbox({raw:t}){return t}},kt=class zp{options;renderer;textRenderer;constructor(e){this.options=e||lr,this.options.renderer=this.options.renderer||new Ql,this.renderer=this.options.renderer,this.renderer.options=this.options,this.renderer.parser=this,this.textRenderer=new Zp,this.textRenderer.parser=this}static parse(e,n){return new zp(n).parse(e)}static parseInline(e,n){return new zp(n).parseInline(e)}parse(e){this.renderer.parser=this;let n="";for(let r=0;r<e.length;r++){let o=e[r];if(this.options.extensions?.renderers?.[o.type]){let s=o,a=this.options.extensions.renderers[s.type].call({parser:this},s);if(a!==!1||!["space","hr","heading","code","table","blockquote","list","checkbox","html","def","paragraph","text"].includes(s.type)){n+=a===!1?"":a??"";continue}}let i=o;switch(i.type){case"space":{n+=this.renderer.space(i);break}case"hr":{n+=this.renderer.hr(i);break}case"heading":{n+=this.renderer.heading(i);break}case"code":{n+=this.renderer.code(i);break}case"table":{n+=this.renderer.table(i);break}case"blockquote":{n+=this.renderer.blockquote(i);break}case"list":{n+=this.renderer.list(i);break}case"checkbox":{n+=this.renderer.checkbox(i);break}case"html":{n+=this.renderer.html(i);break}case"def":{n+=this.renderer.def(i);break}case"paragraph":{n+=this.renderer.paragraph(i);break}case"text":{n+=this.renderer.text(i);break}default:{let s='Token with "'+i.type+'" type was not found.';if(this.options.silent)return console.error(s),"";throw new Error(s)}}}return n}parseInline(e,n=this.renderer){this.renderer.parser=this;let r="";for(let o=0;o<e.length;o++){let i=e[o];if(this.options.extensions?.renderers?.[i.type]){let a=this.options.extensions.renderers[i.type].call({parser:this},i);if(a!==!1||!["escape","html","link","image","checkbox","strong","em","codespan","br","del","text"].includes(i.type)){r+=a===!1?"":a??"";continue}}let s=i;switch(s.type){case"escape":{r+=n.text(s);break}case"html":{r+=n.html(s);break}case"link":{r+=n.link(s);break}case"image":{r+=n.image(s);break}case"checkbox":{r+=n.checkbox(s);break}case"strong":{r+=n.strong(s);break}case"em":{r+=n.em(s);break}case"codespan":{r+=n.codespan(s);break}case"br":{r+=n.br(s);break}case"del":{r+=n.del(s);break}case"text":{r+=n.text(s);break}default:{let a='Token with "'+s.type+'" type was not found.';if(this.options.silent)return console.error(a),"";throw new Error(a)}}}return r}},hi=class{options;block;constructor(t){this.options=t||lr}static passThroughHooks=new Set(["preprocess","postprocess","processAllTokens","emStrongMask"]);static passThroughHooksRespectAsync=new Set(["preprocess","postprocess","processAllTokens"]);preprocess(t){return t}postprocess(t){return t}processAllTokens(t){return t}emStrongMask(t){return t}provideLexer(t=this.block){return t?St.lex:St.lexInline}provideParser(t=this.block){return t?kt.parse:kt.parseInline}};function vn(t,e){if(Array.isArray(e))for(let n=0;n<e.length;n++)t.push(e[n]);else t.push(e)}var Wp=class{defaults=Dp();options=this.setOptions;parse=this.parseMarkdown(!0);parseInline=this.parseMarkdown(!1);Parser=kt;Renderer=Ql;TextRenderer=Zp;Lexer=St;Tokenizer=sr;Hooks=hi;constructor(...t){this.use(...t)}walkTokens(t,e){let n=[];for(let r of t)switch(vn(n,e.call(this,r)),r.type){case"table":{let o=r;for(let i of o.header)vn(n,this.walkTokens(i.tokens,e));for(let i of o.rows)for(let s of i)vn(n,this.walkTokens(s.tokens,e));break}case"list":{let o=r;vn(n,this.walkTokens(o.items,e));break}default:{let o=r;this.defaults.extensions?.childTokens?.[o.type]?this.defaults.extensions.childTokens[o.type].forEach(i=>{let s=o[i].flat(1/0);vn(n,this.walkTokens(s,e))}):o.tokens&&vn(n,this.walkTokens(o.tokens,e))}}return n}use(...t){let e=this.defaults.extensions||{renderers:Object.create(null),childTokens:Object.create(null)};return t.forEach(n=>{let r={...n};if(r.async=this.defaults.async||r.async||!1,n.extensions&&(n.extensions.forEach(o=>{if(!o.name)throw new Error("extension name required");if("renderer"in o){let i=e.renderers[o.name];i?e.renderers[o.name]=function(...s){let a=o.renderer.apply(this,s);return a===!1&&(a=i.apply(this,s)),a}:e.renderers[o.name]=o.renderer}if("tokenizer"in o){if(!o.level||o.level!=="block"&&o.level!=="inline")throw new Error("extension level must be 'block' or 'inline'");let i=e[o.level];i?i.unshift(o.tokenizer):e[o.level]=[o.tokenizer],o.start&&(o.level==="block"?e.startBlock?e.startBlock.push(o.start):e.startBlock=[o.start]:o.level==="inline"&&(e.startInline?e.startInline.push(o.start):e.startInline=[o.start]))}"childTokens"in o&&o.childTokens&&(e.childTokens[o.name]=o.childTokens)}),r.extensions=e),n.renderer){let o=this.defaults.renderer||new Ql(this.defaults);for(let i in n.renderer){if(!(i in o))throw new Error(`renderer '${i}' does not exist`);if(["options","parser"].includes(i))continue;let s=i,a=n.renderer[s],l=o[s];o[s]=(...d)=>{let c=a.apply(o,d);return c===!1&&(c=l.apply(o,d)),c===!1?"":c??""}}r.renderer=o}if(n.tokenizer){let o=this.defaults.tokenizer||new sr(this.defaults);for(let i in n.tokenizer){if(!(i in o))throw new Error(`tokenizer '${i}' does not exist`);if(["options","rules","lexer"].includes(i))continue;let s=i,a=n.tokenizer[s],l=o[s];o[s]=(...d)=>{let c=a.apply(o,d);return c===!1&&(c=l.apply(o,d)),c}}r.tokenizer=o}if(n.hooks){let o=this.defaults.hooks||new hi;for(let i in n.hooks){if(!(i in o))throw new Error(`hook '${i}' does not exist`);if(["options","block"].includes(i))continue;let s=i,a=n.hooks[s],l=o[s];hi.passThroughHooks.has(i)?o[s]=d=>{if(o.options.async&&hi.passThroughHooksRespectAsync.has(i))return(async()=>{let h=await a.call(o,d);return l.call(o,h)})();let c=a.call(o,d);return l.call(o,c)}:o[s]=(...d)=>{if(o.options.async)return(async()=>{let h=await a.apply(o,d);return h===!1&&(h=await l.apply(o,d)),h})();let c=a.apply(o,d);return c===!1&&(c=l.apply(o,d)),c}}r.hooks=o}if(n.walkTokens){let o=this.defaults.walkTokens,i=n.walkTokens;r.walkTokens=function(s){let a=[];return vn(a,i.call(this,s)),o&&vn(a,o.call(this,s)),a}}this.defaults={...this.defaults,...r}}),this}setOptions(t){return this.defaults={...this.defaults,...t},this}lexer(t,e){return St.lex(t,e??this.defaults)}parser(t,e){return kt.parse(t,e??this.defaults)}parseMarkdown(t){return(e,n)=>{let r={...n},o={...this.defaults,...r},i=this.onError(!!o.silent,!!o.async);if(this.defaults.async===!0&&r.async===!1)return i(new Error("marked(): The async option was set to true by an extension. Remove async: false from the parse options object to return a Promise."));if(typeof e>"u"||e===null)return i(new Error("marked(): input parameter is undefined or null"));if(typeof e!="string")return i(new Error("marked(): input parameter is of type "+Object.prototype.toString.call(e)+", string expected"));if(o.hooks&&(o.hooks.options=o,o.hooks.block=t),o.async)return(async()=>{let s=o.hooks?await o.hooks.preprocess(e):e,a=await(o.hooks?await o.hooks.provideLexer(t):t?St.lex:St.lexInline)(s,o),l=o.hooks?await o.hooks.processAllTokens(a):a;o.walkTokens&&await Promise.all(this.walkTokens(l,o.walkTokens));let d=await(o.hooks?await o.hooks.provideParser(t):t?kt.parse:kt.parseInline)(l,o);return o.hooks?await o.hooks.postprocess(d):d})().catch(i);try{o.hooks&&(e=o.hooks.preprocess(e));let s=(o.hooks?o.hooks.provideLexer(t):t?St.lex:St.lexInline)(e,o);o.hooks&&(s=o.hooks.processAllTokens(s)),o.walkTokens&&this.walkTokens(s,o.walkTokens);let a=(o.hooks?o.hooks.provideParser(t):t?kt.parse:kt.parseInline)(s,o);return o.hooks&&(a=o.hooks.postprocess(a)),a}catch(s){return i(s)}}}onError(t,e){return n=>{if(n.message+=`
Please report this to https://github.com/markedjs/marked.`,t){let r="<p>An error occurred:</p><pre>"+ft(n.message+"",!0)+"</pre>";return e?Promise.resolve(r):r}if(e)return Promise.reject(n);throw n}}},ar=new Wp;function ye(t,e){return ar.parse(t,e)}ye.options=ye.setOptions=function(t){return ar.setOptions(t),ye.defaults=ar.defaults,A_(ye.defaults),ye};ye.getDefaults=Dp;ye.defaults=lr;function n1(...t){return ar.use(...t),ye.defaults=ar.defaults,A_(ye.defaults),ye}ye.use=n1;ye.walkTokens=function(t,e){return ar.walkTokens(t,e)};ye.parseInline=ar.parseInline;ye.Parser=kt;ye.parser=kt.parse;ye.Renderer=Ql;ye.TextRenderer=Zp;ye.Lexer=St;ye.lexer=St.lex;ye.Tokenizer=sr;ye.Hooks=hi;ye.parse=ye;var JB=ye.options,QB=ye.setOptions,e9=ye.walkTokens,t9=ye.parseInline;var n9=kt.parse,r9=St.lex;var r1=new Wp({gfm:!0,breaks:!0}),U_=["a","p","br","strong","em","b","i","u","s","del","code","pre","ul","ol","li","blockquote","h1","h2","h3","h4","h5","h6","hr","span","table","thead","tbody","tr","th","td"],H_=["href","title","class","target","rel"],F_={ALLOWED_TAGS:U_,ALLOWED_ATTR:H_,ALLOW_DATA_ATTR:!1,ALLOW_ARIA_ATTR:!1},o1={...F_,ALLOWED_TAGS:[...U_,"img"],ALLOWED_ATTR:[...H_,"src","alt","width","height"]},i1=/^language-[A-Za-z0-9_+#.-]+$/,s1=new Set(["CODE","PRE"]);function a1(t){t.nodeName==="A"&&t.hasAttribute("href")?(t.setAttribute("target","_blank"),t.setAttribute("rel","noopener noreferrer")):(t.removeAttribute("target"),t.removeAttribute("rel"));let e=t.getAttribute("class");if(e===null)return;let n=s1.has(t.nodeName)?e.split(/\s+/).filter(r=>i1.test(r)):[];if(n.length===0){t.removeAttribute("class");return}t.setAttribute("class",n.join(" "))}var qp;function l1(){if(qp===void 0){let t=g_();t.addHook("afterSanitizeAttributes",a1),qp=t}return qp}function gi(t,e){let n=e?.allowImages===!0,r=r1.parse(t,{async:!1});return l1().sanitize(r,n?o1:F_).trim()}var ed=class{#e;#t=null;#n=0;#r="";#o=null;constructor(e){this.#e=e}get deltas(){return this.#n}countDelta(){this.#n+=1}queue(e){this.#r=e,this.#i(),this.#o===null&&(this.#o=requestAnimationFrame(()=>{this.#o=null,this.into(this.#r)}))}into(e){this.#o!==null&&(cancelAnimationFrame(this.#o),this.#o=null),this.#r=e;let n=this.#i();return n.innerHTML=gi(e,{allowImages:this.#e.allowImages()}),this.#e.follow(),n}end(){this.#o!==null&&this.into(this.#r),this.#t=null}#i(){return this.#t===null&&(this.#t=this.#e.openBubble(),this.#n=0),this.#t}};function G_(t){let{messages:e,jumpButton:n,emptyWrap:r,strings:o}=t;e.className="messages",e.setAttribute("part","messages"),e.setAttribute("role","log"),e.setAttribute("aria-live","off"),e.setAttribute("aria-label",o.conversation),n.className="jump-latest",n.type="button",n.setAttribute("part","jump-latest"),n.textContent=o.jumpToLatest,r.className="empty",r.setAttribute("part","empty");let i=document.createElement("div");i.className="greeting",i.setAttribute("part","greeting");let s=document.createElement("slot");s.name="greeting",s.append(t.greetingText),i.append(s);let a=document.createElement("slot");a.name="empty",t.starters!==null&&a.append(t.starters),r.replaceChildren(i,a)}var d1=4,c1=120;function B_(t){if(typeof t!="object"||t===null)return null;let e=t.prompts;if(!Array.isArray(e))return null;let n=e.filter(r=>typeof r=="string").map(r=>r.trim()).filter(r=>r!==""&&r.length<=120).slice(0,4);return n.length===0?null:n}function vi(t,e,n){let r=B_(t);if(r===null)return null;let o=document.createElement("div");o.className="suggestions",o.setAttribute("part","suggestions"),o.setAttribute("role","group"),o.setAttribute("aria-label",e.suggestions);for(let i of r){let s=document.createElement("button");s.type="button",s.className="suggestion-chip",s.setAttribute("part","suggestion-chip"),s.textContent=i,s.addEventListener("click",()=>n(i)),o.appendChild(s)}return o}function V_(t,e,n){let r=t.getAttribute("data-starters");if(r===null)return null;let o;try{o=JSON.parse(r)}catch{return console.warn(`<ag-ui-chat>: data-starters is not valid JSON, so no starters are shown. It takes an array of strings, e.g. data-starters='["Summarise this page"]'.`),null}return vi({prompts:o},e,n)}function td(t,e){for(let n of Array.from(t.querySelectorAll("pre"))){let r=n.querySelector("code");r===null||n.querySelector(".code-copy")!==null||(n.classList.add("has-copy"),n.append(u1(r,e)))}}function u1(t,e){let n=t.textContent,r=document.createElement("button");return r.type="button",r.className="code-copy",r.setAttribute("part","code-copy"),r.textContent=e.copyCode,r.title=e.copyCode,r.setAttribute("aria-label",e.copyCode),r.addEventListener("click",()=>{h1(n).then(o=>{p1(r,o?e.copied:e.copyFailed,e)})}),r}async function h1(t){let e=navigator.clipboard;if(e===void 0)return!1;try{return await e.writeText(t),!0}catch{return!1}}function p1(t,e,n){t.textContent=e,t.dataset.state=e===n.copied?"copied":"failed",setTimeout(()=>{t.textContent=n.copyCode,delete t.dataset.state},1500)}function bi(t){let e=t.replace(/[._-]+/g," ").trim();return e===""?t:e.charAt(0).toUpperCase()+e.slice(1)}var j_=1e3,nd=class{element;#e;#t;#n;#r;#o;#i;#s=0;#a=!1;#l=!1;constructor(e=ve,n=()=>performance.now()){this.#r=e,this.#o=n,this.#i=n(),this.element=document.createElement("div"),this.element.className="thoughts",this.element.setAttribute("part","thoughts"),this.element.setAttribute("data-streaming",""),this.#n=document.createElement("button"),this.#n.type="button",this.#n.className="thoughts-toggle",this.#n.setAttribute("part","thoughts-toggle"),this.#n.setAttribute("aria-expanded","true"),this.#e=document.createElement("span"),this.#e.className="thoughts-label",this.#e.setAttribute("part","thoughts-label"),this.#e.textContent=e.thinking,this.#t=document.createElement("pre"),this.#t.className="thoughts-body",this.#t.setAttribute("part","thoughts-body"),this.#t.hidden=!0,this.#n.addEventListener("click",()=>{this.#c(!this.#a)}),this.element.append(this.#e,this.#t)}begin(){this.#i===null&&(this.#i=this.#o(),this.element.setAttribute("data-streaming",""),this.#e.textContent=this.#r.thinking)}stream(e){this.#t.textContent=e,this.#d(e.trim()!=="")}settle(){this.#i!==null&&(this.#s+=this.#o()-this.#i,this.#i=null,this.element.removeAttribute("data-streaming"),this.#e.textContent=this.#s<j_?this.#r.thoughts:F(this.#r.thoughtFor,{seconds:Math.round(this.#s/j_)}))}collapse(){this.settle(),!this.#a&&this.#c(!0)}#d(e){e!==this.#l&&(this.#l=e,e?(this.#n.append(this.#e),this.element.prepend(this.#n)):(this.#n.remove(),this.element.prepend(this.#e)),this.#c(this.#a))}#c(e){this.#a=e,this.#t.hidden=e||!this.#l,this.#n.setAttribute("aria-expanded",String(!e))}};var f1=new Set([Q.PENDING,Q.DEFERRED]),m1=`.tool-call-subagent > .subagent:is(${[Se.STARTED,Se.TOOL_CALL,Se.TOOL_RESULT].map(t=>`[data-phase="${t}"]`).join(", ")})`,g1=["data-status","data-asking","data-has-result","data-decision","data-answered-by","data-phase","data-agent","data-answerable"];function v1(t,e){let n=e===Wt.MINIMAL;return!n&&e!==Wt.INLINE&&t.hasAttribute("data-has-args")||!n&&t.hasAttribute("data-has-result")||t.getAttribute("data-status")===Q.DEFERRED||t.hasAttribute("data-decision")||t.hasAttribute("data-answered-by")||t.querySelector(".tool-call-subagent > *")!==null}var rd=class{element;#e;#t;#n;#r;#o;#i;#s=[];#a=!1;#l=new Set;constructor(e,n){this.#e=e,this.#t=n,this.element=document.createElement("div"),this.element.className="tool-group",this.element.setAttribute("part","tool-group"),this.element.setAttribute("data-open","false"),this.#r=document.createElement("button"),this.#r.type="button",this.#r.className="tool-group-head",this.#r.setAttribute("part","tool-group-head"),this.#r.setAttribute("aria-expanded","false");let r=document.createElement("span");r.className="tool-group-icon",r.setAttribute("part","tool-group-icon"),r.setAttribute("aria-hidden","true"),this.#o=document.createElement("span"),this.#o.className="tool-group-label",this.#o.setAttribute("part","tool-group-label"),this.#i=document.createElement("span"),this.#i.className="tool-group-meta",this.#i.setAttribute("part","tool-group-meta");let o=document.createElement("span");o.className="tool-group-chevron",o.setAttribute("aria-hidden","true"),this.#r.append(r,this.#o,this.#i,o),this.#r.addEventListener("click",()=>{this.setOpen(this.element.getAttribute("data-open")!=="true")}),this.#n=document.createElement("div"),this.#n.className="tool-group-list",this.#n.setAttribute("part","tool-group-list"),this.element.append(this.#r,this.#n),new MutationObserver(()=>{this.refresh()}).observe(this.#n,{attributes:!0,attributeFilter:[...g1],subtree:!0})}add(e,n){let r=this.#s.filter(i=>i.name===n).length+1,o=n;if(r>1){let i=document.createElement("span");i.className="tool-call-repeat",i.setAttribute("part","tool-card-repeat"),i.textContent=F(this.#e.toolStepRepeat,{n:r}),e.querySelector(".tool-call-name")?.after(i),o=`${n} ${i.textContent}`}this.#s.push({element:e,name:n,label:o}),this.#n.append(e),this.refresh()}setOpen(e){this.element.setAttribute("data-open",String(e)),this.#r.setAttribute("aria-expanded",String(e))}#d(e){if(this.#r.disabled=!e,e){this.#r.setAttribute("aria-expanded",this.element.getAttribute("data-open"));return}this.element.setAttribute("data-open","false"),this.#r.removeAttribute("aria-expanded")}reveal(){this.#a=!0,this.setOpen(!0)}#c(){for(let{element:e}of this.#s){let n=e.getAttribute("data-status")===Q.PENDING?e.querySelector(m1):null;if(n!==null){let r=n.getAttribute("data-agent");return r===null?this.#e.subAgentWorking:F(this.#e.subAgentDelegatedTo,{agent:r})}}return null}#f(){let e=new Set;for(let{element:n}of this.#s){let r=n.querySelector(".tool-call-subagent > .subagent[data-answerable]");r!==null&&e.add(`${r.getAttribute("data-task-id")}/${r.getAttribute("data-answerable")}`)}return e}#p(e){let n=document.createElement("span");return n.className="tool-group-note",n.textContent=e,n}refresh(){let e=this.#e,n=this.#s,r=n.map(g=>g.element.getAttribute("data-status")??""),o=n.filter((g,w)=>f1.has(r[w])),i=g=>r.filter(w=>w===g).length,s=i(Q.ERROR),a=i(Q.DECLINED),l=i(Q.DEFERRED),d=n.filter(g=>g.element.hasAttribute("data-asking")).length,c=l+d,h=n.length;l>0&&!this.#a?(this.#a=!0,this.setOpen(!0)):l===0&&(this.#a=!1);let p=this.#f(),m=[...p].some(g=>!this.#l.has(g));this.#l=p,m&&this.setOpen(!0);let u="done";c>0?u="waiting":o.length>0?u="running":s>0&&(u="error"),this.element.setAttribute("data-state",u),this.element.setAttribute("part",`tool-group tool-group-${u}`),this.element.setAttribute("data-count",String(h));let v=h===1?n[0]:void 0;if(this.#d(v===void 0||v1(v.element,this.#t())),v!==void 0)this.#o.textContent=v.label;else{let g=u==="waiting"?e.toolGroupSteps:u==="running"?e.toolGroupWorking:e.toolGroupWorked;this.#o.textContent=F(g,{count:h})}let E=[],x=this.#c(),T=o[0];c>0?E.push(F(e.toolGroupWaiting,{count:c})):x!==null?E.push(x):T!==void 0&&h>1&&E.push(T.label),s>0&&E.push(F(e.toolGroupFailed,{count:s})),a>0&&E.push(F(e.toolGroupDeclined,{count:a}));let O=E.map(g=>this.#p(g)),S=n.filter(g=>g.element.hasAttribute("data-answered-by")).length;if(S>0){let g=this.#p(F(e.toolGroupPreApproved,{count:S}));g.classList.add("tool-group-note--pre-approved"),O.push(g)}this.#i.replaceChildren(...O),this.#i.hidden=O.length===0}};function Z_(t){return t===Zt.GROUPED}function od(t,e){try{return t()}catch(n){return console.warn(`ag-ui-chat: render failed for ${e}`,n),null}}function W_(t,e){for(let n of Array.from(t.childNodes))n.nodeType===Node.TEXT_NODE?e.push({node:n,parent:t}):W_(n,e)}function q_(t){let e=[];W_(t,e);let n=0;for(let{node:r,parent:o}of e){let i=document.createDocumentFragment();for(let s of r.data.split(/(\s+)/)){if(s==="")continue;if(/\s/.test(s)){i.appendChild(document.createTextNode(s));continue}let a=document.createElement("span");a.className="word",a.style.setProperty("--ag-ui-word-index",String(n)),a.textContent=s,i.appendChild(a),n+=1}o.replaceChild(i,r)}}function Y_({viewport:t,onMissedContent:e}){let n=!0,r=!1,o=()=>t.scrollHeight-t.scrollTop-t.clientHeight<=4,i=c=>{c!==r&&(r=c,e(r))},s=()=>{t.scrollTop=t.scrollHeight},a=()=>{n=o(),n&&i(!1)},l=()=>{if(n){s();return}i(!0)};t.addEventListener("scroll",a,{passive:!0});let d=new ResizeObserver(()=>{n&&s()});return d.observe(t),{follow:l,jump:()=>{n=!0,i(!1),s()},following:()=>n,dispose:()=>{t.removeEventListener("scroll",a),d.disconnect()}}}var id=class{#e;#t=new Map;#n=new Map;#r=new Map;#o=new Set;#i;#s=null;#a=null;#l=null;#d=new WeakMap;#c=new WeakMap;#f=new WeakMap;constructor(e){this.#e=e}mountScroller(e,n){e.addEventListener("click",()=>{this.jump()},{signal:n}),this.#i=Y_({viewport:this.#e.messages,onMissedContent:r=>{e.dataset.missed=String(r)}})}disposeScroller(){this.#i.dispose()}follow(){this.#i.follow()}jump(){this.#i.jump()}isEmpty(){return!this.#e.emptyWrap.hidden}card(e){return this.#t.get(e)}cards(){return this.#t.values()}forgetCard(e){this.#t.delete(e)}setCardElement(e,n){this.#n.set(e,n)}markServerSettled(e){this.#o.add(e)}isServerSettled(e){return this.#o.has(e)}collapseThoughts(){this.#l?.collapse()}settleThoughts(){this.#l?.settle()}closeGroup(){this.#a!==null&&this.#a.childElementCount===0&&(this.#a.remove(),this.updateEmptyState()),this.settleThoughts(),this.#a=null,this.#l=null}releaseTurn(){this.#a=null,this.#l=null,this.hidePending(),this.#t.clear()}forgetCards(){this.#o.clear(),this.#n.clear(),this.#r.clear()}holdRunning(e,n){this.#r.set(e,n)}setAsking(e,n){this.#r.get(e)?.setAsking(n)}empty(){this.#e.messages.replaceChildren(this.#e.emptyWrap),this.updateEmptyState()}append(e,n){let r=document.createElement("div");return r.className=`message message--${e}`,r.setAttribute("part",`message message-${e}`),e===it.ASSISTANT?(r.innerHTML=gi(n,{allowImages:this.#e.allowImages()}),td(r,this.#e.strings()),this.ensureGroup().appendChild(r)):(this.#a=null,r.textContent=n,this.#e.messages.appendChild(r)),this.updateEmptyState(),e===it.USER?this.jump():this.follow(),r}ensureGroup(){if(this.#a===null){let e=document.createElement("div");e.className="answer",e.setAttribute("part","answer"),this.#a=e,this.#e.messages.appendChild(e),this.updateEmptyState()}return this.#a}revealWords(e){this.#e.element.getAttribute("data-text-animation")==="word"&&q_(e)}updateEmptyState(){this.#e.emptyWrap.hidden=this.#e.messages.childElementCount>1,this.#e.element.toggleAttribute("data-empty",!this.#e.emptyWrap.hidden),this.#e.changed()}appendStoppedNote(){let e=document.createElement("div");e.className="stopped-note",e.setAttribute("part","stopped"),e.setAttribute("role","status"),e.textContent=this.#e.strings().stopped,this.ensureGroup().appendChild(e),this.updateEmptyState(),this.follow()}appendUsageLine(e){let n=document.createElement("div");n.className="usage-line",n.setAttribute("part","usage-line"),n.textContent=e,this.ensureGroup().appendChild(n),this.follow()}showPending(){if(this.#s!==null)return;let e=document.createElement("div");e.className="pending",e.setAttribute("part","pending"),e.setAttribute("role","status"),e.setAttribute("aria-label",this.#e.strings().thinking);for(let n=0;n<3;n+=1){let r=document.createElement("span");r.className="pending-dot",e.appendChild(r)}this.#s=e,this.ensureGroup().appendChild(e),this.updateEmptyState(),this.follow()}hidePending(){this.#s?.remove(),this.#s=null}showThoughts(){if(this.#l===null){this.#l=new nd(this.#e.strings());let e=this.ensureGroup();e.insertBefore(this.#l.element,e.firstChild),this.updateEmptyState(),this.follow()}return this.#l}noticeIfSkillLoad(e){let n=Ka(e);return n===null?!1:(this.appendNotice("\u2728",F(this.#e.strings().usingSkill,{name:n}),"skill"),!0)}appendNotice(e,n,r,o){this.ensureGroup().appendChild(Yr(e,n,r,o)),this.updateEmptyState(),this.follow()}renderToolOutput(e,n){let r=od(()=>e(n.args),`tool ${n.name}`);if(r===null)return;let o=this.#n.get(n.id),i=o?.closest(".tool-group");if(i==null)o?.after(r);else{let s=this.#c.get(i);s===void 0&&(s=document.createComment(""),i.after(s),this.#c.set(i,s));let a=r instanceof DocumentFragment?[...r.children]:[r];s.before(r);for(let l of a)this.#f.set(l,i)}this.afterGrew()}afterGrew(){this.updateEmptyState(),this.follow()}cardFor(e){let n=this.#t.get(e.id);if(n!==void 0)return n;let r=this.#e.resolveTool(e.name)?.parameters[Fe],o=typeof r=="string"?r:this.#e.toolSummaries()[e.name]??this.#e.serverSummary(e.name)??bi(e.name),i=new ii(e.name,e.args,o,this.#e.strings(),{formatPayload:s=>this.#e.formatToolPayload(s)});return this.#t.set(e.id,i),Z_(this.#e.toolDisplay())?this.#p().add(i.element,o):this.ensureGroup().appendChild(i.element),this.updateEmptyState(),this.follow(),i}refreshStepGroups(){for(let e of this.#e.messages.querySelectorAll(".tool-group"))this.#d.get(e)?.refresh()}revealStep(e){let n=e.element.closest(".tool-group");(n===null?void 0:this.#d.get(n))?.reveal()}#p(){let e=this.ensureGroup(),n=e.lastElementChild,r=n===null?void 0:this.#d.get(this.#f.get(n)??n);if(r!==void 0)return r;let o=new rd(this.#e.strings(),this.#e.toolGroupDisplay);return this.#d.set(o.element,o),n===null?e.prepend(o.element):n.after(o.element),o}};var sd=class{#e;#t=new Map;#n=new Set;#r=new Map;constructor(e){this.#e=e}register(e){this.#t.set(e.type,e),this.#n.delete(e.type)}has(e){return this.#t.has(e)}unhandledTypes(){return[...this.#n]}clearBlocks(){this.#r.clear()}draw(e,n,r,o){let i=this.#t.get(n);if(i===void 0){this.#n.add(n);return}let s=this.#r.get(e)??null,a=od(()=>i.render(r,{messageId:e,previous:s,live:o}),`activity ${n}`);if(a===null){this.#o(e,n,i.removedNotice,r);return}if(y1(a)){this.#r.get(e)?.remove(),this.#r.delete(e);return}let l=a.nodeType===Node.DOCUMENT_FRAGMENT_NODE?b1(a):a;if(l===s){this.#e.afterTranscriptGrew();return}s===null?this.#e.ensureGroup().appendChild(l):s.replaceWith(l),this.#r.set(e,l),this.#e.afterTranscriptGrew()}#o(e,n,r,o){let i=this.#r.has(e);this.#r.get(e)?.remove(),this.#r.delete(e),console.warn(`ag-ui-chat: activity ${e} (${n}) was not drawable and has been removed. A chart's points must each be a finite JSON number; a numeric column serialised as a string (a Decimal, typically) is rejected rather than coerced.`,o),i&&r!==void 0&&this.#e.appendNotice("\u{1F4C9}",r,"chart-undrawable")}};function b1(t){let e=document.createElement("div");return e.style.display="contents",e.append(t),e}function y1(t){return t.nodeType===Node.DOCUMENT_FRAGMENT_NODE&&!t.hasChildNodes()}function K_(t,e){let n=t?.resourceUri;return Yr("\u{1F5BC}",F(e,{uri:typeof n=="string"?n:""}),"mcp-app")}function X_(t,e,n){let r=w1(t);if(r.length===0)return document.createDocumentFragment();let o=document.createElement("div");o.className="enqueued-messages",o.setAttribute("part","enqueued-messages");let i=0;for(let s of r){if(typeof s!="string"){o.append(hl(s,n));continue}let a=document.createElement("div");a.className="message message--user",a.setAttribute("part","message message-user"),a.textContent=s,o.append(a),i+=1}if(i>0){let s=document.createElement("div");s.className="enqueued-messages-note",s.setAttribute("part","enqueued-messages-note"),s.textContent=e,o.append(s)}return o}function w1(t){let e=Yp(t)?.messages;if(!Array.isArray(e))return[];let n=[];for(let r of e){let o=Yp(r);if(o?.role!=="user")continue;let i=ul(o.metadata),s=E1(o.content);i!==null?n.push(i):s.trim()!==""&&n.push(s)}return n}function E1(t){if(typeof t=="string")return t;if(!Array.isArray(t))return"";let e=[];for(let n of t){let r=Yp(n),o=r?.text;r?.type==="text"&&typeof o=="string"&&e.push(o)}return e.join(`
`)}function Yp(t){return typeof t=="object"&&t!==null?t:null}function J_(t){let e=()=>document.createDocumentFragment();return[{type:Rn.ENQUEUED_MESSAGES,render:n=>X_(n,t().enqueuedMessages,t())},{type:Rn.MCP_APPS,render:n=>K_(n,t().mcpAppUnsupported)},{type:Rn.COMPACTION,render:e},{type:Rn.TOOL_AVAILABILITY_DELTA,render:e},{type:Rn.MODEL_SETTINGS_DELTA,render:e},{type:Rn.CAPABILITY_LOAD_DELTA,render:e}]}var eo=class extends sE{runLog;followed=!1;constructor(e){super(e);let n=e.eventsUrl;this.runLog=typeof n=="function"?n:()=>n;let r=this.fetch,o=this;this.fetch=function(i,s){return x1(this??o,r,i,s)}}get eventsUrl(){return this.runLog()}connectAgent(e,n){return this.abortController=new AbortController,super.connectAgent(e,n)}connect(e){let n=this.eventsUrl;return n===void 0?super.connect(e):Gh(Fh(()=>Q_(this,(r,o)=>this.fetch(r,o),n)),this.debugLogger)}clone(){let e=super.clone();return e.runLog=this.runLog,e.followed=!1,e}};function Q_(t,e,n){return e(`${n}?after=0`,{method:"GET",headers:{...t.headers,Accept:"text/event-stream"},signal:t.abortController.signal})}async function x1(t,e,n,r){if(r.method!=="POST")return e(n,r);t.followed=!1;let o=await e(n,r),i=o.headers.get("Content-Type")??"";if(!o.ok||!i.includes("application/json"))return o;let s=await o.json(),a=t.eventsUrl;if(a===void 0||s.thread_id!==t.threadId)throw new Error(`The server queued the run on thread "${String(s.thread_id)}" for a worker, and this agent has no run log of that thread to follow it in: data-threads-url is unset, or the answer names another thread.`);return t.followed=!0,Q_(t,e,a)}var _1=250,ad=class extends Error{constructor(e){super(e),this.name="ConnectionLostError"}},yi=class{#e;#t;#n;#r;#o;#i;#s;#a=new Set;#l;#d;#c;#f;#p;#g=null;#u=!1;constructor(e){this.#e=e.agent,this.#t=e.handlers,this.#n=e.getTools??(()=>[]),this.#r=e.getContext??(()=>[]),this.#o=e.executeTool??null,this.#i=e.resolveInterrupts??null,this.#s=e.onPersist??(()=>{}),this.#l=e.connectionLostMessage??"Connection lost",this.#d=e.unfinishedMessage??"Not finished: the run ended or moved on before this tool call returned a result.",this.#c=e.declinedMessage??"User declined the action.",this.#p=e.detach??(()=>!1);let n=e.maxToolRounds??wr;this.#f=n>=1?Math.floor(n):wr,this.#E();let r=e.onStateChanged;r!==void 0&&this.#e.subscribe({onStateChanged:({state:o})=>{r(o)}})}get state(){return this.#e.state}setState(e){this.#e.setState({...e})}get running(){return this.#e.isRunning}get canReattach(){return Reflect.get(this.#e,"connect")!==Reflect.get(Zh.prototype,"connect")}get messages(){return this.#e.messages}async send(e,n=[]){this.#u=!1;let r={id:Ie(),role:"user",content:e,...n.length>0?{metadata:{attachments:n}}:{}};this.#e.addMessage(r),this.#S(),await this.#m(void 0,{id:r.id,content:e,attachments:n})}async reattach(){this.#u=!1,await this.#m(void 0,null,!0)}async run(e,n){this.#u=!1,await this.#m({request:e,onStarted:n},null)}truncateToLastUser(){let e=[...this.#e.messages],n=-1;for(let[o,i]of e.entries())i.role==="user"&&(n=o);if(n===-1)return null;let r=e.slice(0,n+1);return this.#s(r),this.#e.setMessages(r),r}async resume(){this.#u=!1,await this.#m(void 0,null)}async answerParked(e){this.#u=!1;let n=this.#i,r;await this.#m({onStarted:void 0,parked:{interrupts:e,answers:()=>(r??=n===null?Promise.resolve(null):n(e),r)}},null)}addToolResult(e,n){this.#e.addMessage({id:Ie(),role:"tool",content:n,toolCallId:e}),this.#S()}cancel(){this.#u=!0,this.#e.abortRun()}async#m(e,n,r=!1){try{try{await this.#R(e,r)}catch(o){if(!r&&this.#b(o))await new Promise(i=>setTimeout(i,_1)),this.#u||await this.#R(e,!1);else{if(r||!this.#v(o,n))throw o;await this.#R(void 0,!0)}}this.#u&&this.#w()}catch(o){if(this.#u||S1(o))this.#w();else{let i=o instanceof Error?o.message:String(o),s=T1(o);s===null?this.#t.onError(i):this.#t.onError(s.message??i,{code:s.code})}}finally{this.#t.onSettled()}}#v(e,n){let r=this.#x(e);return r===null||r===this.#g||!this.#p()?!1:(this.#g=r,n!==null&&(this.#e.setMessages(this.#e.messages.filter(o=>o.id!==n.id)),this.#S(),this.#t.onTurnRefused?.(n.content,n.attachments)),!0)}#b(e){return this.#g!==null&&this.#x(e)===this.#g}#x(e){if(!(e instanceof Error)||Reflect.get(e,"status")!==409)return null;let n=Reflect.get(e,"payload");if(typeof n!="object"||n===null||!this.canReattach)return null;let r=Reflect.get(n,"run_id"),o=Reflect.get(n,"thread_id");return typeof r=="string"&&o===this.#e.threadId?r:null}#w(){this.#S(),this.#t.onCancelled()}#E(){let e=this.#e.messages,n=e.map(k1);n.some((r,o)=>r!==e[o])&&this.#e.setMessages(n)}#k(e){let n=this.#e.messages,r=Wa(n,o=>({id:Ie(),role:"tool",content:this.#d,toolCallId:o,metadata:{outcome:st.INTERRUPTED}}),e);r!==n&&(this.#e.setMessages([...r]),this.#S())}#h(e,n){for(let r of e){let o=r.toolCallId;o!==void 0&&n[r.id]?.status==="cancelled"&&this.#e.addMessage({id:Ie(),role:"tool",content:this.#c,toolCallId:o,metadata:{outcome:st.DENIED}})}this.#S()}#S(){this.#s(this.#e.messages)}async#R(e,n=!1){let r,o=new Set,i=e?.parked;if(i!==void 0){let s=await i.answers();if(s===null||this.#u)return;r=jh([...i.interrupts],s),o=new Set(i.interrupts.flatMap(({toolCallId:a})=>a??[]))}for(let s=0;s<this.#f;s+=1){if(this.#u)return;let a=[],l={terminal:!1,errored:!1,cancelled:!1,interrupts:[]},d={tools:this.#n(),context:this.#r()};r!==void 0&&(d.resume=r);let c=s===0?e?.request:void 0,h=this.#p()?{detach:!0}:null;if((c!==void 0||h!==null)&&(d.forwardedProps={...c?.forwardedProps,...h}),c?.runId!==void 0&&(d.runId=c.runId),this.#k(o),this.#u)return;let p=c?.message,m=p===void 0?void 0:{id:p.id,role:"user",content:p.content},u=s===0?e?.onStarted:void 0,v=n&&s===0,E=this.#F(a,l,m,u,v);if(await(v?this.#e.connectAgent(d,E):this.#e.runAgent(d,E)),r=void 0,o=new Set,this.#S(),this.#u)return;if(!l.terminal)throw new ad(this.#l);if(l.errored)return;if(l.cancelled){this.#u=!0;return}if(l.interrupts.length>0){if(this.#i===null)return;let T=await this.#i(l.interrupts);if(this.#u){this.#h(l.interrupts,T);return}r=jh(l.interrupts,T),o=new Set(l.interrupts.flatMap(({toolCallId:O})=>O??[]));continue}if(this.#o===null||a.length===0)return;let x=!1;for(let T of a){if(this.#u)return;let O=await this.#o(T);if(O!==null){if(O.halt===!0)return;this.#e.addMessage({id:Ie(),role:"tool",content:O.content,toolCallId:T.id,...O.outcome===void 0?{}:{metadata:{outcome:O.outcome}}}),this.#S(),x=!0}}if(!x)return}}#F(e,n,r,o,i){let s=this.#t,a=this.#a,l=()=>this.#u,d=new Set,c,h=!i,p=i,m=this.#e;return{onRunInitialized(){s.onRunStart()},onRunStartedEvent({event:u,messages:v}){return c=u.runId,o?.(),r===void 0?void 0:{messages:[...v,r]}},onTextMessageStartEvent({event:u}){!i&&a.has(u.messageId)&&console.warn(`<ag-ui-chat>: the server reused message id "${u.messageId}", which was already closed. Its content will be appended to that earlier message rather than starting a new one, and the merged result is what gets persisted. Issue a fresh id per message.`)},onTextMessageContentEvent({textMessageBuffer:u}){s.onTextDelta(u)},onTextMessageEndEvent({event:u,textMessageBuffer:v}){a.add(u.messageId),s.onTextEnd(v,{messageId:u.messageId,...c===void 0?{}:{runId:c}},u.metadata?.citations,u.metadata)},onToolCallEndEvent({event:u,toolCallName:v,toolCallArgs:E}){if(u.subagentRunId!==void 0)return;let x={id:u.toolCallId,name:v,args:E};e.push(x),s.onToolCall(x)},onToolCallResultEvent({event:u}){let v=u.metadata?.outcome;s.onToolResult(u.toolCallId,Sr(u.content),v,u.metadata?.answered_by)},onActivitySnapshotEvent({event:u,messages:v}){if(v.some(x=>x.id===u.messageId&&x.role==="activity")){s.onActivityChanged(u.messageId,u.activityType,u.content);return}s.onActivity(u.activityType,u.content,u.messageId)},onActivityDeltaEvent({event:u}){d.add(u.messageId)},onCustomEvent({event:u}){s.onCustomEvent(u.name,u.value)},onSubagentStartedEvent({event:u}){s.onSubAgentStarted(u.subagentRunId,u.name,u.parentToolCallId??null)},onSubagentFinishedEvent({event:u}){s.onSubAgentFinished(u.subagentRunId)},onSubagentErrorEvent({event:u}){s.onSubAgentError(u.subagentRunId,u.message,u.code??null)},onMessagesSnapshotEvent({event:u}){let v=!p&&m instanceof eo&&m.followed;if(p=!0,v)return{stopPropagation:!0};s.onMessagesSnapshot(u.messages,!h),h=!0},onMessagesChanged({messages:u}){for(let v of d){let E=u.find(x=>x.id===v);E!==void 0&&E.role==="activity"&&s.onActivityChanged(v,E.activityType,E.content)}d.clear()},onReasoningStartEvent(){s.onReasoningStart()},onReasoningMessageContentEvent({reasoningMessageBuffer:u}){s.onReasoningDelta(u)},onReasoningMessageEndEvent({reasoningMessageBuffer:u}){s.onReasoningDelta(u)},onReasoningEndEvent(){s.onReasoningEnd()},onRunFinishedEvent(u){n.terminal=!0;let v=u.event.usage;v!==void 0&&s.onUsage?.(v),u.outcome==="interrupt"&&(n.interrupts=u.interrupts),u.outcome==="cancelled"&&(n.cancelled=!0)},onRunErrorEvent({event:u}){n.terminal=!0,n.errored=!0,!l()&&s.onError(u.message,u.code===void 0?{}:{code:u.code})},onRunFinalized(){n.terminal=!0,s.onRunEnd()}}}};function T1(t){let e=t instanceof Error?Reflect.get(t,"payload"):void 0;if(typeof e!="object"||e===null)return null;let n=Reflect.get(e,"code");if(typeof n!="string")return null;let r=Reflect.get(e,"error");return typeof r=="string"?{code:n,message:r}:{code:n}}function S1(t){return t instanceof Error?t.name==="AbortError"||t instanceof TypeError&&/abort/i.test(t.message):!1}function k1(t){let{outcome:e,attachments:n,...r}=t;if(e===void 0&&n===void 0)return t;let o=r.metadata;return{...r,metadata:{...e===void 0?{}:{outcome:e},...n===void 0?{}:{attachments:n},...typeof o=="object"?o:{}}}}var to="thread",Kp="threads",wi="messages:",dd="checkpoint:",Ei="minted:",A1=60,R1=100,I1="New conversation",C1=/^\/([A-Za-z0-9][\w.-]*)$/;function bn(t,e,n={reported:!1}){try{sessionStorage.setItem(t,e)}catch{if(n.reported)return;n.reported=!0,console.warn("<ag-ui-chat>: the browser refused a sessionStorage write \u2014 the quota is full, or storage is disabled for this context. The conversation continues, but it will not survive a page reload. Deleting a long conversation from the history drawer frees the quota.")}}function ld(t){return t===""?yt:`${yt}@${t}`}var We=class{#e;#t={reported:!1};constructor(e=""){this.#e=ld(e)}static adopt(e,n){let r=`${ld(e)}:`,o=`${ld(n)}:`,i={reported:!1};for(let[s,a]of eT(r)){let l=sessionStorage.getItem(s),d=o+a;l!==null&&sessionStorage.getItem(d)===null&&bn(d,l,i),sessionStorage.removeItem(s)}}static purge(e){for(let[n]of eT(`${ld(e)}:`))sessionStorage.removeItem(n)}threadId(){return sessionStorage.getItem(this.#s(to))??this.newThread()}newThread(){let e=Ie();return this.#i(this.#s(to),e),this.#i(this.#s(Ei+e),"1"),e}isUnsent(e){return sessionStorage.getItem(this.#s(Ei+e))!==null&&sessionStorage.getItem(this.#s(wi+e))===null}loadMessages(e){return Promise.resolve(this.#a(this.#s(wi+e)))}saveMessages(e,n){this.#i(this.#s(wi+e),JSON.stringify(n)),sessionStorage.removeItem(this.#s(Ei+e)),this.#n(e,n)}loadCheckpoint(e){return this.#a(this.#s(dd+e))}saveCheckpoint(e,n){let r=this.#s(dd+e);if(n===null){sessionStorage.removeItem(r);return}this.#i(r,JSON.stringify(n))}clear(e){sessionStorage.removeItem(this.#s(wi+e)),sessionStorage.removeItem(this.#s(dd+e)),sessionStorage.removeItem(this.#s(Ei+e)),this.#o(this.#r().filter(n=>n.threadId!==e)),sessionStorage.getItem(this.#s(to))===e&&sessionStorage.removeItem(this.#s(to))}listThreads(){let e=this.#r().sort((n,r)=>r.updatedAt-n.updatedAt).map(({threadId:n,title:r,updatedAt:o,preview:i})=>({threadId:n,title:r,updatedAt:o,preview:i}));return Promise.resolve(e)}setActiveThread(e){this.#i(this.#s(to),e)}renameThread(e,n){let r=this.#r(),o=r.find(i=>i.threadId===e);o!==void 0&&(o.title=n,o.titleCustom=!0,this.#o(r))}#n(e,n){let r=this.#r(),o=r.find(a=>a.threadId===e),i=O1(n),s=Date.now();o===void 0?r.push({threadId:e,title:tT(n),titleCustom:!1,preview:i,updatedAt:s}):(o.preview=i,o.updatedAt=s,o.titleCustom||(o.title=tT(n))),this.#o(r)}#r(){return this.#a(this.#s(Kp))??[]}#o(e){let n=this.#s(Kp);if(e.length===0){sessionStorage.removeItem(n);return}this.#i(n,JSON.stringify(e))}#i(e,n){bn(e,n,this.#t)}#s(e){return`${this.#e}:${e}`}#a(e){let n=sessionStorage.getItem(e);if(n===null)return null;try{return JSON.parse(n)}catch{return null}}};function eT(t){let e=[];for(let n=0;n<sessionStorage.length;n+=1){let r=sessionStorage.key(n);if(r===null||!r.startsWith(t))continue;let o=r.slice(t.length);N1(o)&&e.push([r,o])}return e}function N1(t){return t===to||t===Kp||t.startsWith(wi)||t.startsWith(dd)||t.startsWith(Ei)}function tT(t){let e=no(t);return e===""?I1:e}function no(t,e=()=>{}){for(let n of t)if(n.role==="user"){let r=nT(n.content);if(r!==""){let o=C1.exec(r)?.[1],i=o===void 0?r:e(o)??bi(o);return rT(i,A1)}}return""}function O1(t){for(let e of[...t].reverse()){let n=nT(e.content);if(n!=="")return rT(n,R1)}return""}function nT(t){return typeof t=="string"?t.replace(/\s+/g," ").trim():""}function rT(t,e){return t.length<=e?t:`${t.slice(0,e-1).trimEnd()}\u2026`}function Xp(t){let e=t.headers??{},n=new Set;return new eo({url:t.endpoint,headers:e,initialState:{...t.initialState??{}},fetch:(r,o)=>rt(t.getHeaders?.(),()=>t.getHeaders?.(),i=>{let s=[...new Set([...Object.keys(e),...Object.keys(i??{})])].sort();if(Za(r,s,t.trustedOrigins??[],n),i===void 0)return fetch(r,Ge(o,t.credentials));let a=new Headers(o?.headers);for(let[l,d]of Object.entries(i))a.set(l,d);return fetch(r,Ge({...o,headers:a},t.credentials))},jr(o)&&t.retryUnauthorized?.()===!0),...t.threadId!==void 0?{threadId:t.threadId}:{},...t.getEventsUrl!==void 0?{eventsUrl:t.getEventsUrl}:t.eventsUrl!==void 0?{eventsUrl:t.eventsUrl}:{},...t.initialMessages!==void 0?{initialMessages:[...t.initialMessages]}:{}})}var cd=class{#e;#t;#n;#r;constructor(e,n,r,o=()=>!1){this.#e=e.endsWith("/")?e:`${e}/`,this.#t=n,this.#n=r,this.#r=o}eventsUrl(e){return`${this.#e}${encodeURIComponent(e)}/events/`}async probe(e){let n=`${this.eventsUrl(e)}?after=0&limit=1`;try{let r=await rt(this.#t(n),()=>this.#t(n),i=>fetch(n,Ge({method:"GET",headers:{...i,Accept:"application/json"}},this.#n())),this.#r());if(!r.ok)return null;let o=await r.json();return{runId:String(o.run_id),status:String(o.status)}}catch{return null}}async cancel(e){let n=`${this.#e}${encodeURIComponent(e)}/cancel/`;try{await nt(this.#t(n),r=>fetch(n,Ge({method:"POST",headers:r},this.#n())))}catch{}}};function dr(t,e){let n=t.getAttribute(e);return n!==null&&n!=="false"}function Jp(t,e){let n=t.getAttribute(e);if(n===null)return null;try{return JSON.parse(n)}catch{return console.warn(`<ag-ui-chat>: ${e} is not valid JSON, so it was ignored entirely and the built-in default is being used. Check the quoting -- JSON inside an HTML attribute needs single quotes around the attribute value, or its own double quotes escaped.`),null}}function oT(t){let e=t.getAttribute("data-max-tool-rounds");return e===null?wr:Number.parseInt(e,10)}var iT=5e3,sT="text/event-stream",ro=class{#e;#t=new AbortController;#n;#r=null;constructor(e){this.#e=e,this.#n=e.transport}start(){return this.#o(0),()=>{this.#t.abort(),this.#r!==null&&clearTimeout(this.#r)}}#o(e){this.#r=setTimeout(()=>{this.#r=null,this.#n==="stream"?this.#s():this.#i()},e)}async#i(){let e=await this.#e.poll();this.#t.signal.aborted||(e!=null&&this.#e.changed(e),this.#o(iT))}async#s(){let e=this.#e.etag(),n=this.#e.headers();try{let r=await rt(n,this.#e.headers,o=>{let i={...o,Accept:sT,...e===null?{}:{"Last-Event-ID":e}};return fetch(this.#e.url,Ge({headers:i,signal:this.#t.signal},this.#e.credentials()))},this.#e.retryUnauthorized?.()===!0);r.ok&&r.body!==null&&await this.#a(r)}catch{}this.#t.signal.aborted||this.#o(iT)}async#a(e){if(!(e.headers.get("content-type")??"").startsWith(sT)){this.#n="poll";let i=await e.json();this.#d(e.headers.get("ETag"),i.threads??[]);return}let n=e.body.getReader(),r=new TextDecoder,o="";for(;;){let{value:i,done:s}=await n.read();if(s)return;o+=r.decode(i,{stream:!0});let a=o.indexOf(`

`);for(;a!==-1;)this.#l(o.slice(0,a)),o=o.slice(a+2),a=o.indexOf(`

`)}}#l(e){let n=null,r=[];for(let i of e.split(`
`))i.startsWith("id:")?n=i.slice(3).trim():i.startsWith("data:")&&r.push(i.slice(5).trimStart());if(r.length===0)return;let o=JSON.parse(r.join(`
`));this.#d(n,o.threads??[])}#d(e,n){this.#e.seen(e,n),this.#e.changed(n)}};var M1="New conversation",cr=class{#e;#t;#n;#r;#o;#i;#s=new Set;#a=new Map;#l=new Map;#d=null;#c=null;#f=!1;#p=new Map;#g=new Set;constructor(e,n=()=>({}),r=new We,o=()=>{},i=!0,s=()=>!1){this.#e=e.endsWith("/")?e:`${e}/`,this.#t=n,this.#n=r,this.#r=o,this.#o=i,this.#i=s}get local(){return this.#n}threadId(){return this.#d=this.#n.threadId(),this.#d}setActiveThread(e){this.#n.setActiveThread(e),this.#d=e}newThread(){return this.#d=ja(this.#n),this.#d}isUnsent(e){return this.#n.isUnsent?.(e)===!0}saveMessages(e,n){this.#n.saveMessages(e,this.#o?n:[]),this.#l.set(e,{threadId:e,title:no(n)||M1,updatedAt:Date.now(),preview:""})}loadCheckpoint(e){return this.#n.loadCheckpoint(e)}saveCheckpoint(e,n){this.#n.saveCheckpoint(e,n)}renameThread(e,n){this.#n.renameThread(e,n),this.#a.set(e,n),this.#R(e,"PATCH",{title:n})}clear(e){this.#n.clear(e),this.#s.add(e),this.#l.delete(e),this.#g.delete(e),this.#R(e,"DELETE")}async listThreads(){let e=await this.#w();return e===null?this.#n.listThreads():this.#b(e)}markRead(e){this.#v(e,this.#c?.rows),this.#f?this.#R(e,"POST",void 0,"read/"):this.#g.add(e)}watchThreads(e,n){let r;return new ro({url:this.#e,transport:n,headers:this.#t,credentials:this.#r,retryUnauthorized:this.#i,poll:async()=>{let i=await this.#w(),s=this.#c;if(i===null)return null;if(s===null)return r=null,i;if(s.etag!==r)return r=s.etag,s.rows},seen:(i,s)=>{this.#u(i,s),r=i},changed:i=>e(this.#b(i)),etag:()=>r??null}).start()}async waitingInterrupts(e){return this.#c!==null&&!this.#f?[]:(await this.#w())?.find(r=>r.thread_id===e)?.interrupts??[]}#u(e,n){this.#f=n.some(r=>r.status!==void 0),this.#c=e===null?null:{etag:e,rows:n},this.#f&&this.#m(n)}#m(e){for(let n of this.#g)this.#v(n,e),this.#R(n,"POST",void 0,"read/");this.#g.clear()}#v(e,n){let r=n?.find(o=>o.thread_id===e);r!==void 0&&this.#p.set(e,aT(r))}#b(e){let n=e.filter(o=>!this.#s.has(o.thread_id)).map(o=>this.#k(o)),r=this.#x(e);return r===null?n:[r,...n]}#x(e){for(let r of e)this.#l.delete(r.thread_id);let n=this.#d===null?void 0:this.#l.get(this.#d);return n===void 0?null:{...n,title:this.#a.get(n.threadId)??n.title}}async loadMessages(e){if(this.#n.isUnsent?.(e)===!0)return null;let n=await this.#S(`${this.#e}${encodeURIComponent(e)}/`);if(n===null||!n.ok)return this.#n.loadMessages(e);let r=await this.#E(n);return r===null?this.#n.loadMessages(e):r.messages??null}async#w(){let e=this.#c,n=await this.#S(this.#e,e===null?{}:{"If-None-Match":e.etag});if(n!==null&&n.status===304&&e!==null)return e.rows;if(n===null||!n.ok)return null;let r=await this.#E(n);if(r===null)return null;let o=r.threads??[];return this.#u(n.headers.get("ETag"),o),o}async#E(e){try{return await e.json()}catch{return null}}#k(e){let n=aT(e),r={threadId:e.thread_id,title:this.#a.get(e.thread_id)??e.title,updatedAt:n,preview:e.preview,...P1(e),...L1(e)};return e.status===void 0?r:{...r,status:e.status,unread:this.#h(e,n),...e.status==="failed"&&typeof e.reason=="string"?{reason:e.reason}:{},...e.status==="waiting"&&e.interrupts!==void 0?{interrupts:e.interrupts}:{}}}#h(e,n){let r=e.last_read_at;if(e.status==="running"||r===void 0)return!1;let o=this.#p.get(e.thread_id);return o!==void 0&&!(n>o)?!1:r===null||n>Date.parse(r)}async#S(e,n={}){try{return await rt(this.#t(),this.#t,r=>fetch(e,Ge({headers:{...r,...n}},this.#r())),this.#i())}catch{return null}}async#R(e,n,r,o=""){let i=this.#t(),s=a=>fetch(`${this.#e}${encodeURIComponent(e)}/${o}`,Ge({method:n,headers:r===void 0?a:{...a,"content-type":"application/json"},body:r===void 0?null:JSON.stringify(r)},this.#r()));try{await rt(i,this.#t,s,this.#i())}catch{}}};function aT(t){return t.updated_at===null?Number.NaN:Date.parse(t.updated_at)}function P1(t){let e=t.parent;if(typeof e!="object"||e===null)return{};let{thread_id:n,scope:r}=e;return typeof n!="string"||n===""?{}:{parent:{threadId:n,scope:typeof r=="string"?r:null}}}function L1(t){let e=t.routine;if(typeof e!="object"||e===null)return{};let{id:n,name:r}=e;return typeof n!="string"||typeof r!="string"?{}:{routine:{id:n,name:r}}}var ud=class{#e;#t=null;#n=null;#r=Promise.resolve();constructor(e){this.#e=e}listed(e){let n=this.#e.threadId(),r=e.find(o=>o.threadId===n);r===void 0||!lT(r.status)||(this.#e.idle()?this.#o(()=>this.#i(r.threadId)):this.#n=r.threadId)}ran(e,n){this.#t={threadId:e,runId:n}}idled(){let e=this.#n;this.#n=null,e!==null&&this.#o(()=>this.#i(e))}start(){let e,n=()=>{e=setTimeout(()=>{let r=this.#e.threadId();r!==null&&this.#e.idle()&&this.#o(()=>this.#i(r)),n()},5e3)};return n(),()=>clearTimeout(e)}#o(e){this.#r=this.#r.then(e)}async#i(e){let n=this.#e.runs();if(n===null)return;let r=await n.probe(e),o=r?.status;if(r===null||!lT(o))return;let i=this.#t;if(!(i!==null&&i.threadId===e&&i.runId===r.runId)&&this.#e.threadId()===e){if(!this.#e.idle()){this.#n=e;return}this.#t={threadId:e,runId:r.runId},this.#e.join(o)}}};function lT(t){return t==="running"||t==="waiting"}function dT(t,e){let{input:n,output:r}=e;return n!==null&&r!==null?F(t.usageBoth,{input:hd(n),output:hd(r)}):n!==null?F(t.usageInput,{input:hd(n)}):r!==null?F(t.usageOutput,{output:hd(r)}):null}function hd(t){return String(t).replace(/\B(?=(\d{3})+(?!\d))/g,",")}var cT="identifier_too_long";function uT(){return{tools:[],serverSettled:new Set,invalidated:new Set,announcedOutcome:!1,outcome:"completed",usage:{input:null,output:null}}}function hT(t,e){return e===void 0?t:(t??0)+e}function pT(t,e){let n={};for(let[r,o]of Object.entries(t))n[r]=(...i)=>{e()&&o(...i)};return n}var pd=class{#e;#t=uT();constructor(e){this.#e=e}detach(){this.#t=uT()}forClient(e){let n=this.#t,r=()=>n===this.#t,{onSettled:o,onError:i,onCancelled:s,...a}=this.#n(n,e),l=pT({onError:i,onCancelled:s},r);return{...pT(a,r),onError:(d,c)=>{n.outcome="failed",l.onError(d,c)},onCancelled:()=>{n.outcome="stopped",l.onCancelled()},onSettled:()=>{r()&&o(),n.usage={input:null,output:null},this.#e.runSettled(e),this.#i(n,e)}}}#n(e,n){return{onRunStart:()=>{this.#e.running()||(e.announcedOutcome=!1,this.#e.announcer.announce(this.#e.strings().announceResponding)),this.#e.setRunning(!0),this.#e.transcript.ensureGroup(),this.#e.transcript.showPending()},onReasoningStart:()=>{this.#e.transcript.hidePending(),this.#e.transcript.showThoughts().begin()},onReasoningDelta:r=>{this.#e.transcript.showThoughts().stream(r)},onReasoningEnd:()=>{this.#e.transcript.settleThoughts()},onTextDelta:r=>{this.#e.transcript.hidePending(),this.#e.transcript.collapseThoughts(),this.#e.stream.queue(r),this.#e.stream.countDelta()},onTextEnd:(r,o,i,s)=>{if(r===""){this.#e.stream.end();return}let a=this.#e.stream.into(r);this.#e.stream.deltas<=1&&this.#e.transcript.revealWords(a),td(a,this.#e.strings());let l=pl(s,this.#e.strings());l!==null&&a.append(l);let d=fl(i,r,this.#e.strings());d!==null&&a.append(d),this.#e.actions.attach(a,o),this.#e.stream.end(),this.#e.noteUnread(n)},onToolCall:r=>{this.#e.transcript.hidePending(),this.#e.transcript.settleThoughts(),!this.#e.transcript.noticeIfSkillLoad(r)&&(e.tools.push({id:r.id,name:r.name}),this.#e.transcript.cardFor(r))},onActivity:(r,o,i)=>{this.#e.activities.draw(i,r,o,!0)},onCustomEvent:(r,o)=>{if(r===lc){this.#s(e,o);return}if(r===Pf){this.#e.subagents.report(o);return}r===Mf&&this.#e.skillsChanged(),this.#e.element.dispatchEvent(new CustomEvent(oc,{detail:{name:r,value:o},bubbles:!0,composed:!0}))},onSubAgentStarted:(r,o,i)=>{this.#e.subagents.start(r,o,i)},onSubAgentFinished:r=>{this.#e.subagents.finish(r)},onSubAgentError:(r,o,i)=>{this.#e.subagents.fail(r,o,i)},onMessagesSnapshot:(r,o)=>{if(o){this.#e.redraw(r);return}this.#e.transcript.appendNotice("\u{1F504}",this.#e.strings().historyReplaced,"history-replaced")},onToolResult:(r,o,i,s)=>{let a=this.#e.transcript.card(r);a!==void 0&&(a.settle(ti(i),o,s),this.#e.childSessions.attach(a,o),this.#e.transcript.markServerSettled(r),e.serverSettled.add(r),this.#e.transcript.showPending())},onTurnRefused:(r,o)=>{this.#e.park(r,o)},onActivityChanged:(r,o,i)=>{this.#e.activities.draw(r,o,i,!0)},onRunEnd:()=>{this.#e.transcript.hidePending(),this.#e.stream.end()},onUsage:r=>{e.usage=z1(e.usage,r)},onError:(r,o)=>{e.announcedOutcome=!0,this.#e.announcer.announce(this.#e.strings().announceFailed),this.#e.transcript.hidePending();let i=this.#r(r,o),s=this.#e.appendMessage(it.ASSISTANT,`\u26A0\uFE0F ${i}`);s.classList.add("message--failed"),this.#e.actions.attach(s,{rateable:!1}),o?.code===cT&&this.#o(s),this.#e.transcript.revealWords(s),this.#e.stream.end()},onCancelled:()=>{e.announcedOutcome=!0,this.#e.announcer.announce(this.#e.strings().announceStopped),this.#e.transcript.hidePending(),this.#e.transcript.appendStoppedNote(),this.#e.stream.end()},onSettled:()=>{e.announcedOutcome||this.#e.announcer.announce(this.#e.strings().announceAnswerReady);let r=dT(this.#e.strings(),e.usage);r!==null&&e.outcome==="completed"&&this.#e.showUsage()&&this.#e.transcript.appendUsageLine(r),this.#e.transcript.hidePending(),this.#e.setRunning(!1),this.#e.stream.end();for(let o of this.#e.transcript.cards())o.settled||o.settle(Q.INTERRUPTED,this.#e.strings().callNotFinished);this.#e.transcript.closeGroup()}}}#r(e,n){let r=n?.code;if(r===void 0||r===cT)return e;let o=this.#e.strings();switch(r){case"timed_out":return o.runErrorTimedOut;case"interrupted":return o.runErrorInterrupted;default:return o.runErrorFailed}}#o(e){let n=document.createElement("button");n.type="button",n.className="suggestion-chip run-error-offer",n.setAttribute("part","run-error-offer"),n.textContent=this.#e.strings().runErrorNewChat,n.addEventListener("click",()=>{this.#e.newChat()});let r=e.nextElementSibling;(r?.classList.contains("message-actions")===!0?r:e).after(n),this.#e.transcript.follow()}#i(e,n){let r=e.tools.map(({id:s,name:a})=>({name:a,side:e.serverSettled.has(s)?"server":"client"})),o=[...e.invalidated];e.tools.length=0,e.serverSettled.clear(),e.invalidated.clear();let i=e.outcome;e.outcome="completed",this.#e.element.dispatchEvent(new CustomEvent(tc,{detail:{threadId:n,tools:r,invalidated:o,outcome:i},bubbles:!0,composed:!0}))}#s(e,n){let r=n??{},o=Array.isArray(r.keys)?r.keys.filter(i=>typeof i=="string"):[];if(o.length!==0){for(let i of o)e.invalidated.add(i);this.#e.element.dispatchEvent(new CustomEvent(ic,{detail:{keys:o,reason:typeof r.reason=="string"?r.reason:null},bubbles:!0,composed:!0}))}}};function z1(t,e){let{input:n,output:r}=t;for(let o of e)n=hT(n,o.inputTokens),r=hT(r,o.outputTokens);return{input:n,output:r}}var D1="agent:",Ft=class t extends We{agentId;constructor(e,n=t.namespaceOf(e)){super(n),this.agentId=e}static namespaceOf(e){return`${D1}${e}`}};var Qp=new Set,fd=class{#e=null;#t="";#n="";take(e,n){return this.give(),this.#t===e?this.#n:Qp.has(e)?(this.#t=e,this.#n=`${e}~${Ie()}`,n(e),this.#n):(Qp.add(e),this.#e=e,e)}give(){this.#e!==null&&(Qp.delete(this.#e),this.#e=null)}},md=class{#e;#t="";#n=new fd;#r=null;#o={reported:!1};#i=null;#s=new fd;#a="";constructor(e){this.#e=e}claim(){this.#t=this.#l()}release(){this.#n.give(),this.#s.give()}conversationNamespace(e){let n=this.#i===null?this.#t:this.#a;return e===""?n:`${n}#${e}`}scopeStore(e,n){if(this.#i=e instanceof Ft?e.agentId:null,this.#i===null?this.#s.give():this.#a=this.#s.take(Ft.namespaceOf(this.#i),$1),!(e instanceof We))return e;let r=this.conversationNamespace(n);return this.#i!==null?(this.#r=new Ft(this.#i,r),this.#r):(this.#r=r===""?e:new We(r),this.#r)}rescopeStore(e,n){return e!==this.#r?null:(this.#r=this.#i===null?new We(n):new Ft(this.#i,n),this.#r)}key(e){return this.#t===""?e:`${e}:${this.#t}`}readScopedItem(e){return sessionStorage.getItem(this.key(e))}readPreference(e){try{let n=localStorage.getItem(this.key(e));if(n!==null)return n}catch{}return this.readScopedItem(e)}writePreference(e,n){let r=this.key(e);try{localStorage.setItem(r,n)}catch{}bn(r,n,this.#o)}writeSession(e,n){bn(this.key(e),n,this.#o)}clearPreference(e){let n=this.key(e);try{localStorage.removeItem(n)}catch{}try{sessionStorage.removeItem(n)}catch{}}#l(){let e=this.#e.id(),n=e!==""?e:this.#e.endpoint();return n===""?"":this.#n.take(n,r=>console.warn(`<ag-ui-chat>: another element on this page already stores its conversation under "${r}", so this one has been given a throwaway namespace of its own \u2014 the two would otherwise share a thread pointer, a history drawer and every message. Give each <ag-ui-chat> its own id to keep them apart and let this one restore its conversation across reloads.`))}};function $1(t){console.warn(`<ag-ui-chat>: another chat on this page already stores its conversation under "${t}", the same directory entry, so this one has been given a throwaway namespace of its own \u2014 the two would otherwise share a thread pointer, a history drawer and every message. Mount each entry in one <ag-ui-agents> to let its conversation restore across reloads.`)}var gd=class t{#e;#t;#n;constructor(e,n,r){this.#e=e.endsWith("/")?e:`${e}/`,this.#t=n,this.#n=r}static from(e,n,r){return e===null?null:new t(e,n,r)}async send(e,n,r){let o=`${this.#e}${encodeURIComponent(e)}/tasks/${encodeURIComponent(n)}/${r.kind}/`;try{let i=await nt(this.#t(o),s=>fetch(o,Ge({method:"POST",headers:{...s,"Content-Type":"application/json",Accept:"application/json"},body:JSON.stringify(U1(r))},this.#n())));return i.ok?{ok:!0}:{ok:!1,status:i.status,reason:await H1(i)}}catch{return{ok:!1,status:0,reason:null}}}};function U1(t){return t.kind==="steer"?{message:t.message}:t.kind==="answer"?{question_id:t.questionId,answer:t.answer}:{force:t.force}}async function H1(t){try{let n=(await t.json())?.reason;return typeof n=="string"?n:null}catch{return null}}var bd=class{#e;#t=Object.freeze([]);constructor(e){this.#e=e}get tabs(){return this.#t}load(){this.#t=Object.freeze(F1(this.#e.read()))}has(e){return this.#t.some(n=>n.threadId===e)}open(e,n){return this.has(e)?!1:(this.#n([...this.#t,vd(e,n)]),!0)}close(e){return this.has(e)?(this.#n(this.#t.filter(n=>n.threadId!==e)),!0):!1}retitle(e,n){return this.#t.some(r=>r.threadId===e&&r.title!==n)?(this.#n(this.#t.map(r=>r.threadId===e?vd(e,n):r)),!0):!1}replace(e,n,r){return this.has(e)?(this.#n(this.#t.map(o=>o.threadId===e?vd(n,r):o)),!0):!1}neighbour(e){let n=this.#t.findIndex(r=>r.threadId===e);return n===-1?null:(this.#t[n+1]??this.#t[n-1])?.threadId??null}untitled(e){return this.#t.filter(n=>n.title===""&&n.threadId!==e).map(n=>n.threadId)}#n(e){this.#t=Object.freeze(e),this.#e.write(JSON.stringify(e))}};function vd(t,e){return Object.freeze({threadId:t,title:e})}function F1(t){let e;try{e=JSON.parse(t??"[]")}catch{return[]}if(!Array.isArray(e))return[];let n=[];for(let r of e){if(typeof r!="object"||r===null)continue;let{threadId:o,title:i}=r;typeof o=="string"&&o!==""&&typeof i=="string"&&!n.some(s=>s.threadId===o)&&n.push(vd(o,i))}return n}var G1=["data-attachments-url","data-attachment-accept","data-attachment-max-bytes","data-transcribe-url","data-threads-url","data-threads-cache","data-tools-url","data-skills-url","data-skill-editor-url","data-skill-editor-button","data-routines-url","data-skills","data-prompt-chips","data-slash-commands","data-theme-toggle","data-strings","data-icon-url"],nf=["omit","same-origin","include"],B1="New conversation";function fT(t){for(let e of t){let n=typeof e.content=="string"?e.content.split(/\s+/).join(" ").trim():"";if(e.role==="user"&&n!==""){let r=Array.from(n);return r.length<=60?n:`${r.slice(0,59).join("").trimEnd()}\u2026`}}return""}function ef(t){return nf.includes(t)}var V1="auto",tf="(max-width: 600px)",j1=320,ur=8,mT=`${yt}:collapsed`,gT=`${yt}:theme`,yT=["light","dark","auto"];function Z1(t){return t.split(/\s+/).filter(e=>yT.includes(e)).at(-1)}function vT(t,e){return[...t.split(/\s+/).filter(r=>r!==""&&!yT.includes(r)),e].join(" ")}function W1(t,e){try{return(t instanceof ShadowRoot?t:document).querySelector(e)??document.querySelector(e)}catch{return null}}var oo=class extends HTMLElement{agentFactory=Xp;headers={};getHeaders=null;trustedOrigins=[];allowImages=!1;formatRelativeTime=null;autoConfirm=!1;askUser=!1;askUserRenderer=null;approvalRenderer=null;approveWithEdits=!1;confirmPredicate=null;getTools=()=>this.#Y.defaultTools();getContext=()=>[...Hc(this.getPageMap,this.autoInjectPageMap)];routeMap=[];navigate=null;getPageMap=null;autoInjectPageMap=!0;getPlace=null;conversationStore=new We;uploadHandler=null;transcribeHandler=null;navigationResult=()=>({navigated:!0,url:window.location.href});skillContext=()=>({});toolSummaries={};formatToolPayload=null;strings={};get uiStrings(){return this.#t}get colorScheme(){return this.#gt()}get locale(){let e=this;for(;e!==null;){let n=e.closest("[lang]");if(n!==null)return n.lang||navigator.language;let r=e.getRootNode();e=r instanceof ShadowRoot?r.host:null}return navigator.language}tokenValues(e){let n=getComputedStyle(this),r=document.createElement("span");this.#a.append(r);let o={};for(let i of e){let s=n.getPropertyValue(i).trim();s!==""&&(CSS.supports("color",s)?(r.style.color=`var(${i})`,o[i]=getComputedStyle(r).color):o[i]=s)}return r.remove(),o}resolvePageTarget=e=>Gc(e);#e=new Set;#t=ve;#n=new Nl({card:e=>this.#y.card(e),strings:()=>this.#t,follow:()=>this.#y.follow(),controls:()=>gd.from(this.getAttribute("data-threads-url"),e=>this.#me(e),()=>this.#Ne()),threadId:()=>this.#h.threadId});#r=new Al({element:this,transcript:()=>this.#g,strings:()=>this.#t,activeThread:()=>this.#h.threadId,open:e=>this.#h.switchThread(e).catch(()=>{})});#o=[];#i=new sd({ensureGroup:()=>this.#y.ensureGroup(),afterTranscriptGrew:()=>this.#y.afterGrew(),appendNotice:(e,n,r)=>this.#y.appendNotice(e,n,r)});#s=new Bl({element:this,strings:()=>this.#t,retry:()=>{this.retryLastTurn()},retryable:()=>this.#ee===null||this.#ee.request!==null,threadId:()=>this.#h.threadId,follow:()=>this.#y.follow()});#a;#l=null;#d=[];#c=new Rl;#f=document.createElement("button");#p;#g=document.createElement("div");#u;#m;#v;#b;#x;#w;#E;#k;#h;#S;#R;#F;#j;#G;#M;#N;#I=document.createElement("span");#z=document.createElement("div");#rt=document.createElement("button");#de=document.createElement("div");#te=null;#ve=0;#ne=0;#ze="right";#B=null;#Te=!1;#V=new Map;#ce=new Set;#be;#y;#T;#A;#X=document.createElement("span");#$;#_;#Z=!1;#De=!1;#$e=null;#ue=null;#je=null;#re=[];#W=[];#he=document.createElement("div");#J=null;#Ue="";#oe=()=>{this.#He()&&this.#_.restoreLauncherPosition()};#Se=()=>{this.#He()&&this.#_.settleLauncherPosition()};#He(){return this.#_.publishVisualViewport(),this.#K(),!this.#_.dragging()&&this.#ye()}#ye(){return this.getClientRects().length>0}#Ze(){this.#ye()&&this.#_.restoreLauncherPosition()}#ke;#ie;#O=!1;#Ae=null;#we=null;#pe=new ud({threadId:()=>{let e=this.#h.threadId;return this.conversationStore.isUnsent?.(e)===!0?null:e},runs:()=>this.#et(),idle:()=>!this.#tt()&&this.#fe===null,join:e=>this.#gn(e)});#ot=!1;#se=new AbortController;#it=!1;#st=null;#Re={};#Ct={};#at=null;#ae=null;#Ee={};#Q=!1;#C=null;#ee=null;#We=null;#fe=null;#qe=null;#Ie=[];#lt=new Map;#q={threadId:"",title:""};#dt=new vl;#xe=new yl;#Y=new Ya({element:this,routeMap:()=>this.routeMap,navigate:()=>this.navigate,getPageMap:()=>this.getPageMap,pageWithheld:()=>this.#xe.withheld,resolvePageTarget:e=>this.resolvePageTarget(e),getTools:()=>this.getTools(),askUser:()=>this.askUser,askUserRenderer:()=>this.askUserRenderer,decision:this.#dt,setAsking:(e,n)=>this.#y.setAsking(e,n),ensureGroup:()=>this.#y.ensureGroup(),strings:()=>this.#t,hidePending:()=>this.#y.hidePending(),updateEmptyState:()=>this.#y.updateEmptyState(),follow:()=>this.#y.follow(),request:e=>this.request(e)});#Nt=new ed({openBubble:()=>this.appendMessage(it.ASSISTANT,""),allowImages:()=>this.allowImages,follow:()=>this.#y.follow()});#Ot=new xr(this);#P=new md({id:()=>this.id,endpoint:()=>this.endpoint});#L=new bd({read:()=>sessionStorage.getItem(this.#Me(this.userKey)),write:e=>bn(this.#Me(this.userKey),e,this.#Mt)});#Mt={reported:!1};#ct=null;#Fe=!1;#U;#Ge;#Ce;#_e;constructor(){super(),this.#a=this.attachShadow({mode:"open"}),this.#u=document.createElement("div"),this.#m=document.createElement("div"),this.#v=document.createElement("textarea"),this.#b=document.createElement("button"),this.#x=document.createElement("span"),this.#S=document.createElement("div"),this.#R=document.createElement("button"),this.#F=document.createElement("input"),this.#j=document.createElement("div"),this.#ke=document.createElement("span"),this.#G=document.createElement("button"),this.#M=document.createElement("button"),this.#N=document.createElement("span"),this.#be=document.createElement("div"),this.#y=new id({element:this,messages:this.#m,emptyWrap:this.#be,changed:()=>this.#pt(),strings:()=>this.#t,allowImages:()=>this.allowImages,resolveTool:e=>this.#Y.resolve(e),toolSummaries:()=>this.toolSummaries,serverSummary:e=>this.#Y.summary(e),toolDisplay:()=>this.toolDisplay,toolGroupDisplay:()=>this.toolGroupDisplay,formatToolPayload:e=>this.formatToolPayload?.(e)??null}),this.#T=new Ja({element:this,transcript:this.#y,tools:this.#Y,decision:this.#dt,strings:()=>this.#t,announce:e=>this.#c.announce(e),autoConfirm:()=>this.autoConfirm,confirmPredicate:()=>this.confirmPredicate,navigate:()=>this.navigate,approveWithEdits:()=>this.approveWithEdits,approvalRenderer:()=>this.approvalRenderer,getContext:()=>this.#vn(),conversationStore:()=>this.conversationStore,threadId:()=>this.#h.threadId,tenure:()=>this.#Re,conversation:()=>this.#Ct}),this.#A=new pd({element:this,transcript:this.#y,stream:this.#Nt,actions:this.#s,activities:this.#i,subagents:this.#n,childSessions:this.#r,announcer:this.#c,strings:()=>this.#t,running:()=>this.#Q,setRunning:e=>this.#ge(e),appendMessage:(e,n)=>this.appendMessage(e,n),noteUnread:e=>this.#Tn(e),runSettled:e=>{this.#ce.delete(e)&&this.conversationStore.markRead?.(e)},newChat:()=>this.newChat(),showUsage:()=>dr(this,"show-usage"),skillsChanged:()=>{this.#U.fetch(),this.#Ce.refresh()},redraw:e=>{this.#Qe();for(let n of e)this.#h.replay(n);this.#y.ensureGroup(),this.#y.showPending()},park:(e,n)=>{this.#W.push({content:e,attachments:n}),this.#Ve()}}),this.#_=new Tl({element:this,launcher:this.#M,root:this.#a,connected:()=>this.#O,collapsed:()=>this.collapsed,collapsible:()=>this.#D().collapseTo!==null,strings:()=>this.#t,readPreference:e=>this.#P.readPreference(e),writePreference:(e,n)=>this.#P.writePreference(e,n),clearPreference:e=>this.#P.clearPreference(e),announceSurfaceChange:(e,n)=>this.#hn(e,n)}),this.#p=new dl({element:this,root:this.#a,messages:this.#m,messagesWrap:this.#g,input:this.#v,strings:()=>this.#t,autoGrow:()=>fn(this.#v),quote:e=>this.quote(e)}),this.#$=new ol({element:this,chat:this.#u,slot:this.#j,fileInput:this.#F,button:this.#R,strings:()=>this.#t,uploadHandler:()=>this.uploadHandler,headersFor:e=>this.#me(e),credentialsOption:()=>this.#ht()}),this.#ie=new sl({element:this,slot:this.#ke,input:this.#v,strings:()=>this.#t,transcribeHandler:()=>this.transcribeHandler,headersFor:e=>this.#me(e),credentialsOption:()=>this.#ht(),onInput:()=>this.#xt()}),this.registerActivityRenderer({type:hc,render:e=>{let n=q1(e);return n===null?null:Yr("\u{1F5DC}",F(this.#t.historyCompacted,{count:n}),"compaction")}}),this.registerActivityRenderer({type:ac,render:e=>vi(e,this.#t,n=>{this.sendMessage(n)})});for(let e of J_(()=>this.#t))this.registerActivityRenderer(e);this.#w=new al(e=>this.#U.apply(e)),this.#U=new $i({element:this,menu:this.#w,input:this.#v,hint:this.#S,strings:()=>this.#t,context:()=>this.skillContext(),flag:e=>dr(this,e),readJsonAttribute:e=>Jp(this,e),request:e=>this.request(e),send:e=>{this.sendMessage(e)},submit:()=>{this.#It()},autoGrow:()=>fn(this.#v)}),this.#Ge=new $l(()=>this.#t.backToConversation,()=>this.#_e.isOpen?this.#_e.back():this.#Ce.back()),this.#Ce=new Ul({view:this.#Ge,strings:()=>this.#t,onDraft:()=>{this.closeSkillEditor(),this.sendMessage("/create-skill")},onChanged:()=>{this.#U.fetch()},onClose:()=>this.closeSkillEditor()}),this.#_e=new Ll({view:this.#Ge,element:this,strings:()=>this.#t,fromConversation:()=>this.routineSeed(),onOpenThread:e=>{this.closeRoutines(),this.switchThread(e).catch(()=>{})},onClose:()=>this.closeRoutines()}),this.#E=new gl({onSelect:e=>{this.#h.switchThread(e).catch(()=>{})},onNew:()=>{this.newChat(),this.#h.refreshDrawer()},onRename:(e,n)=>{this.#in(e,n),this.#lt.set(e,n),this.#kt(),this.#h.renameThread(e,n)},onDelete:e=>{this.#on(e)}}),this.#k=new Qo((e,n)=>{this.#h.continueRun(e,n).catch(r=>{console.warn("<ag-ui-chat>: continuing a run failed",r)})}),this.#h=new ml({element:this,drawer:this.#E,checkpoints:this.#k,transcript:this.#y,actions:this.#s,activities:this.#i,tools:this.#Y,childSessions:this.#r,input:this.#v,hint:this.#S,strings:()=>this.#t,conversationStore:()=>this.conversationStore,formatRelativeTime:()=>this.formatRelativeTime,navigationResult:()=>this.navigationResult,headersFor:e=>this.#me(e),requestCredentials:()=>this.#Ne(),retryUnauthorized:()=>this.retryUnauthorized,appendMessage:(e,n)=>this.appendMessage(e,n),announceTurn:e=>this.#cn(e,[]),recordTurn:e=>this.#ln(e),autoGrow:()=>fn(this.#v),continuationEnded:()=>this.#Rt(),client:()=>this.#ae,ensureClient:()=>this.#Le(),buildClient:e=>(this.#ee=null,this.#un(e)),releaseClient:()=>{this.#ae=null},running:()=>this.#Q||this.#C!==null,holdRun:e=>{let n={};return this.#C=n,this.#We=e===null?null:{hold:n,restored:e},{release:()=>this.#At(n)}},cancelRun:()=>this.#Oe(),stopRun:()=>this.#_t(),runningOnServer:e=>this.#et()?.probe(e)?.then(r=>(r?.status==="waiting"&&this.#pe.ran(e,r.runId),r?.status==="running"))??null,reattach:()=>{let e=this.#Le();if(e.canReattach){let n=this.#C!==this.#We?.hold;this.#ge(!0);let r=e.reattach();this.#fe=n?r:null}},answerParked:e=>{let n=this.#C!==this.#We?.hold;this.#ge(!0);let r=this.#Le().answerParked(e);this.#fe=n?r:null},resetState:()=>this.#Je(),setRunning:e=>this.#ge(e),threadChanged:(e,n)=>this.#Jt(e,n),threadsListed:e=>{this.#In(e),this.#Xt(e),this.#r.listed(e)},listedStatus:e=>this.#r.status(e),threadDeleted:e=>{this.#Kt([e]),this.#r.deleted(e)}})}static get observedAttributes(){return["title-text","placement","collapse-to","anchor","anchor-side","maximized","data-side","data-small-viewport","data-threads-search","data-thread-status","data-poll-runs","credentials","user-key","user-name","data-tool-group-display","data-collapse-icon","theme",...G1]}attributeChangedCallback(e,n,r){if(e==="credentials"){r!==null&&!ef(r)&&console.error(`<ag-ui-chat>: credentials="${r}" is not a fetch credentials mode (${nf.join(" / ")}) \u2014 it is being ignored, so requests use the browser default and cross-origin cookies will not be sent.`);return}if(e==="data-tool-group-display"){this.#y.refreshStepGroups();return}if(e==="data-thread-status"||e==="data-poll-runs"){this.#Dt();return}if(e==="data-threads-search"){let o=this.getAttribute("data-threads-search");this.#E.setSearchMode(o==="always"||o==="never"?o:"auto");return}if(e==="anchor"){this.#Te=!1,this.#K();return}if(e==="maximized"){this.#En(r!==null);return}if(e==="data-collapse-icon"){this.#Xe();return}if(e==="theme"){this.#G.isConnected&&this.#vt(),this.#H(Jd,{scheme:this.colorScheme});return}if(e==="anchor-side"||e==="data-side"||e==="data-small-viewport"){this.#Xe(),this.#K();return}if(e==="placement"||e==="collapse-to"){this.#mt(),this.#_.releaseOwnedAxes(),e==="placement"&&this.#_.switchPlacement(n),this.#_.releaseLauncherPosition(),this.#D().collapseTo===null&&this.collapsed&&this.setCollapsed(!1),this.#Ft(),this.#Xe(),e==="collapse-to"&&(this.#wt(),this.#bt(this.#D().collapseTo==="bar"?this.#z:null)),this.#K(),requestAnimationFrame(()=>this.#_.syncResizeAnchor());return}if(e==="title-text"){this.#en();return}if(e==="user-name"){this.#Lt();return}if(e==="user-key"){this.#O&&(n??"")!==(r??"")&&this.#Zt(n??"",r??"");return}if(e==="data-threads-url"){this.#O&&n!==r&&console.warn('<ag-ui-chat>: "data-threads-url" was changed after the element connected. The next run replay and cancel go to the new URL, but the thread list and its store keep the one read while connecting. To move them too, remove and re-insert the element.');return}n===r||!this.#O||console.warn(`<ag-ui-chat>: "${e}" was changed after the element connected, and is read only while connecting \u2014 this assignment has no effect. Set it before the element enters the DOM (in the markup, or on the element before appending it); frameworks that patch attributes after mount should bind it at creation. To apply a new value now, remove and re-insert the element.`)}registerTool(e){this.#Y.register(e)}get sharedState(){return this.#Pt()?.state??this.#Ee}set sharedState(e){this.#Ee={...e},this.#Pt()?.setState(this.#Ee)}#Pt(){return this.#h.continuation??this.#ae}registerPageState(e){this.#Y.registerPageState(e)}registerContext(e){let n={read:e};return this.#o=[...this.#o,n],()=>{this.#o=this.#o.filter(r=>r!==n)}}get endpoint(){return this.getAttribute("endpoint")??""}set endpoint(e){this.setAttribute("endpoint",e)}get userKey(){return this.getAttribute("user-key")??""}set userKey(e){this.setAttribute("user-key",e)}get userName(){return this.getAttribute("user-name")??""}set userName(e){this.setAttribute("user-name",e)}#Lt(){let e=this.userName.trim();this.#X.textContent=e===""?this.#t.greetingNoName:F(this.#t.greeting,{name:e})}get credentials(){let e=this.getAttribute("credentials");return e!==null&&ef(e)?e:null}set credentials(e){if(e===null){this.removeAttribute("credentials");return}if(!ef(e))throw new TypeError(`<ag-ui-chat>: credentials must be one of ${nf.map(n=>`"${n}"`).join(", ")} (got ${JSON.stringify(e)}).`);this.setAttribute("credentials",e)}#ut(){return nt(this.getHeaders?.(),e=>({...this.headers,...e}))}#me(e){return nt(this.#ut(),n=>(Za(e,Object.keys(n),this.trustedOrigins,this.#e),n))}#pn(){let e=this.#ut();return e instanceof Promise?(e.catch(()=>{}),{...this.headers}):e}#Ne(){return this.credentials??void 0}#ht(){let e=this.#Ne();return e===void 0?{}:{credentials:e}}request(e,n={}){return rt(this.#me(e),()=>this.#me(e),r=>{let o=new Headers(r);new Headers(n.headers).forEach((s,a)=>{o.set(a,s)});let i=n.credentials??this.#Ne();return fetch(e,{...n,headers:o,...i===void 0?{}:{credentials:i}})},jr(n)&&this.retryUnauthorized)}get toolDisplay(){let e=this.getAttribute("data-tool-display");return e===Zt.INLINE||e===Zt.MINIMAL||e===Zt.COMPACT||e===Zt.FULL?e:Zt.GROUPED}set toolDisplay(e){this.setAttribute("data-tool-display",e)}get toolGroupDisplay(){let e=this.getAttribute("data-tool-group-display");return e===Wt.INLINE||e===Wt.MINIMAL||e===Wt.COMPACT?e:Wt.FULL}set toolGroupDisplay(e){this.setAttribute("data-tool-group-display",e)}get extraStyles(){return this.#d}set extraStyles(e){this.#d=[...e],this.#l!==null&&(this.#a.adoptedStyleSheets=[this.#l,...this.#d])}connectedCallback(){this.#se=new AbortController,this.#it&&this.#yt();let e=this.#it?this.#P.conversationNamespace(""):null;if(this.#it=!0,this.#P.claim(),this.#Ot.join(),this.#_.restoreSize(),requestAnimationFrame(()=>{this.#Ze(),this.#_.syncResizeAnchor()}),this.#t=Wh({...this.#mn(),...this.strings}),this.getAttribute("data-theme-toggle")!==null){let a=this.#P.readPreference(gT),l=a===null?void 0:Z1(a);l!==void 0&&this.setAttribute("theme",vT(this.getAttribute("theme")??"",l))}this.#_n(),this.#E.setStrings(this.#t),this.#r.relocalize(),this.#k.setStrings(this.#t),this.#D().collapseTo!==null&&this.#wn()&&this.setAttribute("collapsed",""),this.#wt(),this.#Ft();let n=new ResizeObserver(()=>this.#K());n.observe(this.#z),this.#se.signal.addEventListener("abort",()=>n.disconnect());let r=new ResizeObserver(this.#Se);r.observe(this.#m),this.#se.signal.addEventListener("abort",()=>r.disconnect()),this.#_.probe.addEventListener("transitionrun",this.#Se,{signal:this.#se.signal});let o=()=>{requestAnimationFrame(()=>this.#K())};window.addEventListener("pointerup",o,{signal:this.#se.signal}),window.addEventListener("keyup",o,{signal:this.#se.signal}),this.#K(),this.collapsed&&this.setMaximized(!1),this.#D().collapseTo==="none"&&this.#H(Ni,{collapsed:this.collapsed}),this.#U.init(),this.#w.setManage(this.#ft()===null?null:this.#t.manageSkills,()=>this.#Ye("skills",!1,()=>this.openSkillEditor()));let i=this.#st,s=i!==null&&i!==this.userKey;s&&this.#Zt(i,this.userKey),this.#st=this.userKey,this.conversationStore=this.#P.scopeStore(this.#Ut(),this.userKey),e!==null&&e!==this.#P.conversationNamespace("")&&(this.#Re={}),this.#St(),window.addEventListener("resize",this.#oe),window.visualViewport?.addEventListener("resize",this.#oe),window.visualViewport?.addEventListener("scroll",this.#oe),this.#_.publishVisualViewport(),this.#zt(),this.#$.wire(this.#se.signal),this.#ie.wire(),this.#h.adoptActiveThread(),queueMicrotask(()=>this.#fn()),this.#h.rehydrate(s&&i!==""?"rescope":"restore"),s&&this.#h.refreshDrawer(),this.#O=!0,this.#Vt(),this.#ot&&(this.#ot=!1,this.newChat())}#fn(){this.#O&&(this.#Y.fetchCatalog(),this.#U.fetch())}async reload(){this.#Oe(),this.#Je(),this.#ge(!1),await Promise.all([this.#Y.fetchCatalog(),this.#U.fetch(),this.#h.rehydrate("restore")])}disconnectedCallback(){this.#O=!1,this.#se.abort(),window.removeEventListener("resize",this.#oe),window.visualViewport?.removeEventListener("resize",this.#oe),window.visualViewport?.removeEventListener("scroll",this.#oe),this.#P.release(),this.#Ot.leave(),this.#$t(),this.#Oe(),this.#p.detachPageOffer(),this.#$.tray?.dispose(),this.#ie.dispose(),this.#y.disposeScroller(),this.#c.dispose()}#mn(){let e=Jp(this,"data-strings");return typeof e=="object"&&e!==null?e:{}}quote(e){this.#p.insert(e)}offerQuoteInPage(e=document.body){return this.#p.offerInPage(e)}#zt(){this.#at=null;let e=this.getAttribute("data-threads-url");if(e!==null){let n=this.conversationStore,r=new cr(e,()=>this.#me(e),n,()=>this.#Ne(),this.getAttribute("data-threads-cache")!=="false",()=>this.retryUnauthorized);this.#at={remote:r,inner:n},this.conversationStore=r}this.#Dt()}#Dt(){if(this.#$t(),!this.isConnected)return;this.hasAttribute("data-poll-runs")&&(this.#we=this.#pe.start());let e=this.getAttribute("data-thread-status"),n=this.conversationStore;e!=="poll"&&e!=="stream"||(this.#Ae=n.watchThreads?.(r=>{this.#Xt(r),this.#r.listed(r),this.#an(r),this.#pe.listed(r),this.#H(mc,{threads:r})},e)??null)}#$t(){this.#Ae?.(),this.#Ae=null,this.#we?.(),this.#we=null}#gn(e){if(e==="waiting"){this.#yt(),this.#h.rehydrate(null);return}let n=this.#Le();n.canReattach&&(this.#ge(!0),n.reattach())}#Ut(){let e=this.#at;return e!==null&&this.conversationStore===e.remote?e.inner:this.conversationStore}setSkills(e){this.#U.setClientSkills(e)}openSkillEditor(){let e=this.#ft();e!==null&&(this.#w.close(),this.#le(),this.#u.toggleAttribute("data-panel-view",!0),this.#Ce.open(new Ui(e,(n,r)=>this.request(n,r))))}refreshSkills(){return this.#U.fetch()}#Ye(e,n,r){if(this.getAttribute("data-editors")!=="external"){r();return}this.#w.close(),this.dispatchEvent(new CustomEvent(Ec,{detail:{editor:e,fromConversation:n},bubbles:!0,composed:!0,cancelable:!0}))}closeSkillEditor(){this.#Ce.isOpen&&(this.#le(),this.#v.focus())}#le(){this.#Ce.reset(),this.#_e.reset(),this.#Ge.close(),this.#u.toggleAttribute("data-panel-view",!1)}openRoutines(){this.#Ht(!1)}makeRoutine(){this.#Ht(!0)}closeRoutines(){this.#_e.isOpen&&(this.#le(),this.#v.focus())}#Ht(e){let n=this.#Ke();if(n===null)return;this.#w.close(),this.#le(),this.#u.toggleAttribute("data-panel-view",!0);let r=new Ml(n,(o,i)=>this.request(o,i));e?this.#_e.openFromConversation(r):this.#_e.open(r)}#Ke(){let e=this.getAttribute("data-routines-url");return e===null||e===""?null:e}#pt(){this.#Ke()!==null&&this.#$e?.offer(this.routineSeed()!==null)}routineSeed(){let e=this.#ae?.messages??this.#h.restored,n=e.flatMap(r=>r.role==="user"&&typeof r.content=="string"&&r.content.trim()?[r.content.trim()]:[]);return n.length===0?null:{prompt:n.join(`

`),name:fT(e)}}#ft(){let e=this.getAttribute("data-skill-editor-url");return e===null||e===""?null:e}get collapsed(){return this.hasAttribute("collapsed")}set collapsed(e){this.setCollapsed(e)}refreshPlace(){this.isConnected&&this.#xe.update(this.getPlace===null?_E(this.routeMap,window.location.pathname):this.getPlace())}#vn(){let e=[...this.getContext(),...this.#o.flatMap(r=>r.read())];return[...this.#xe.withheld?e.filter(r=>r.description!==Oi):e,...this.#xe.context()]}setCollapsed(e,n={}){e&&this.#D().collapseTo===null||(e&&this.setMaximized(!1),n.announce===!0&&e&&!this.collapsed&&this.#hn(this.#t.chatMinimised,null),e||(this.refreshPlace(),this.#Ze()),e?this.setAttribute("collapsed",""):(this.#bt(),this.removeAttribute("collapsed")),this.#K(),this.#P.writeSession(mT,e?"1":"0"),this.#Be(this.#Yt()),this.#H(Ni,{collapsed:e}))}get unread(){let e=0;for(let n of this.#V.values())e+=n;return e}get threadId(){let e=this.#h.threadId;return e===""?null:e}get threadTitle(){return this.#q.title}get running(){return this.#Q}get detachRuns(){return dr(this,"data-detach-runs")}set detachRuns(e){this.toggleAttribute("data-detach-runs",e)}get retryUnauthorized(){return dr(this,"data-retry-unauthorized")}set retryUnauthorized(e){this.toggleAttribute("data-retry-unauthorized",e)}get barHeight(){return this.#ve}get dockWidth(){return this.#ne}get anchor(){return this.#B}set anchor(e){this.#B=e,this.#Te=!1,this.#K()}#D(){return ri(this.getAttribute("placement"),this.getAttribute("collapse-to"))}#Ft(){let e=this.#D().collapseTo;e===null?this.removeAttribute("data-collapsed-to"):this.setAttribute("data-collapsed-to",e)}#bn(){let e=this.getAttribute("placement");return e!=="sidebar"&&e!=="side"||!this.#ye()||getComputedStyle(this).position==="static"?0:this.collapsed?this.#D().collapseTo==="rail"?this.#M.offsetWidth:0:this.getAttribute("data-small-viewport")!=="off"&&window.matchMedia(tf).matches?0:this.#u.offsetWidth}#yn(){if(this.#_.dragging())return;let e=this.#bn(),n=this.getAttribute("data-side")==="left"?"left":"right";e===this.#ne&&(e===0||n===this.#ze)||(this.#ne=e,this.#ze=n,this.#H(Kd,{width:e,side:n}))}#K(){if(!this.isConnected)return;let e=this.#ye()?this.#_.syncDock(this.#z,this.#Gt()):0;this.#yn(),e!==this.#ve&&(this.#ve=e,this.#H(Yd,{height:e}))}#Gt(){if(this.#D().collapseTo!=="none")return null;let e=this.getAttribute("anchor")??"";if(this.#B===null&&e==="")return null;let n=this.#B??W1(this.getRootNode(),e);return n?.isConnected===!0?n:(this.#Te||(this.#Te=!0,console.warn(`<ag-ui-chat>: the anchor ${this.#B===null?`"${e}"`:"element"} is not in the document, so the panel opens from its placement's own corner.`)),null)}#wn(){let e=this.#P.readScopedItem(mT);return e!==null?e==="1":this.#D().startsCollapsed&&!this.hasAttribute("data-start-open")}describeSurface(){return this.#_.describeSurface()}moveTo(e,n={}){return this.#_.moveTo(e,n)}resetSize(){this.#_.resetSize(),this.#K()}get maximized(){return this.#Z}set maximized(e){this.setMaximized(e)}setMaximized(e){e?this.setAttribute("maximized",""):this.removeAttribute("maximized")}toggleMaximized(){this.setMaximized(!this.#Z)}#Bt(){return this.#D().maximizes!==null&&!window.matchMedia(tf).matches}#En(e){let n=e&&this.#Bt()&&!this.collapsed;if(e&&!n){this.removeAttribute("maximized");return}n!==this.#Z&&(this.#Z=n,this.#O&&(n?this.#_.enterMaximized():this.#_.leaveMaximized(),this.#K()),this.#jt(),this.#Vt())}#Vt(){!this.#O||this.#Z===this.#De||(this.#De=this.#Z,this.#H(qd,{maximized:this.#Z}))}#mt(){let e=this.#Bt();e||this.setMaximized(!1);let n=this.#ue;n!==null&&(e?n.button.isConnected||n.before.before(n.button):n.button.remove(),this.#$e?.fit())}#jt(){let e=this.#ue?.button;if(e===void 0)return;let n=this.#Z?this.#t.restore:this.#t.maximize;e.title=n,e.setAttribute("aria-label",n),bT(e,this.#Z?Wf:Pi)}#Xe(){let e=this.#je;if(e===null)return;let n=Gx(this.getAttribute("data-collapse-icon"),this.getAttribute("placement"),this.getAttribute("data-side"));bT(e,n)}toggleCollapsed(){this.setCollapsed(!this.collapsed)}toggleTheme(){let e=this.getAttribute("theme")??"",n=this.#gt()==="dark"?"light":"dark";this.setAttribute("theme",vT(e,n)),this.#P.writePreference(gT,n)}#Zt(e,n){this.#st=n;let r=this.#O,o=this.#P.conversationNamespace(e),i=this.#P.conversationNamespace(n);if(e===""){We.adopt(o,i),this.#An(e,n),r&&(this.#Wt(i),this.#U.fetch());return}this.#Re={},We.purge(o),sessionStorage.removeItem(this.#Me(e)),this.#St(),r&&this.#Wt(i),this.#T.forgetWaivers(),this.#Oe(),this.#Je(),this.#Ee={},this.#v.value="",this.#xt(),this.#ge(!1),this.#Kt([...this.#V.keys()],!0),this.#U.forget(),this.#le(),r&&(this.#ie.dispose(),this.#ie.wire(),this.#h.adoptActiveThread(),this.#h.rehydrate("rescope"),this.#h.refreshDrawer(),this.#U.fetch())}#Wt(e){let n=this.#P.rescopeStore(this.#Ut(),e);n!==null&&(this.conversationStore=n,this.#zt())}#gt(){let e=(this.getAttribute("theme")??"").split(/\s+/);if(e.includes("dark"))return"dark";if(e.includes("light"))return"light";let n=getComputedStyle(this).colorScheme.split(/\s+/),r=n.includes("dark");return r!==n.includes("light")?r?"dark":"light":(r||e.includes("auto"))&&window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light"}#vt(){let e=this.#gt()==="dark";this.#G.replaceChildren(Kr("theme","theme-icon",e?Zf:jf,null))}openThreads(e={}){this.#le();let n=this.#D().collapseTo,r=e.anchor??this.#Gt(),o=this.getAttribute("placement")!=="embedded";this.collapsed&&n==="bar"?this.#z.append(this.#E.element):this.collapsed&&n==="none"&&r!==null&&o?(this.#te=r,this.#de.append(this.#E.element),this.#qt()):(this.collapsed&&n==="none"&&console.warn(o?'<ag-ui-chat>: openThreads() under collapse-to="none" needs an anchor to open beside; pass openThreads({ anchor }) or set the anchor attribute.':'<ag-ui-chat>: openThreads() under placement="embedded" and collapse-to="none" has no popover: the collapsed chat is not drawn. Expand it first.'),this.#bt()),this.#h.openThreads()}#qt(){let e=this.#te;if(e===null||this.#E.element.parentNode!==this.#de)return;let n=e.getBoundingClientRect(),r=document.documentElement.clientWidth,o=document.documentElement.clientHeight,i=n.top+n.height/2<o/2,s=Math.min(j1,r-2*ur),a=Math.min(Math.max(ur,r-n.right),r-ur-s),l=(i?o-n.bottom:n.top)-2*ur;this.style.setProperty("--_threads-top",i?`${n.bottom+ur}px`:"auto"),this.style.setProperty("--_threads-bottom",i?"auto":`${o-n.top+ur}px`),this.style.setProperty("--_threads-right",`${Math.max(ur,a)}px`),this.style.setProperty("--_threads-room",`${Math.max(0,l)}px`)}#bt(e=null){let n=this.#E.element.parentNode;if(n!==e&&(n===this.#z||n===this.#de)){this.#E.close(),this.#u.insertBefore(this.#E.element,this.#k.element),this.#te=null;for(let r of["top","bottom","right","room"])this.style.removeProperty(`--_threads-${r}`)}}openCheckpoints(){this.#le(),this.#h.openCheckpoints()}closeThreads(){this.#E.close()}closeCheckpoints(){this.#k.close()}switchThread(e){return this.#O?this.#h.switchThread(e):Promise.resolve()}deleteThread(e){this.#O&&this.#on(e)}get tabs(){return this.#L.tabs}openTab(e,n){if(!this.#O)return;let r=n??this.#rn(e),o=!1;if(!this.#Fe){this.#Fe=!0;let i=this.#h.threadId;o=this.#L.open(i,this.#rn(i))}o=this.#L.open(e,r)||o,o&&(this.#Pe("open"),r===""&&this.#sn())}closeTab(e){if(!this.#O)return;let n=this.#L.neighbour(e);if(this.#L.close(e)&&(this.#Pe("close"),e===this.#h.threadId)){if(n===null){this.newChat();return}this.switchThread(n).catch(()=>{})}}toggleCheckpoints(){if(this.#k.open_){this.#k.close();return}this.openCheckpoints()}newChat(){if(!this.#O){this.#ot=!0;return}this.#Oe(),this.#le();let e=this.#h.threadId;this.#ct=this.conversationStore.isUnsent?.(e)===!0?e:null,this.#h.reapUnsent(),this.#Je(),this.#h.startThread(),this.#ge(!1),this.#Jt(this.#h.threadId,"new"),this.collapsed||this.#v.focus({preventScroll:!0})}#Je(){this.#yt(),this.#re.length=0,this.#J=null}#yt(){this.#ae=null,this.#ee=null,this.#A.detach(),this.#Ct={},this.#Qe(),this.#h.forgetRestored()}#Qe(){this.#Nt.end(),this.#y.releaseTurn(),this.#n.clear(),this.#y.forgetCards(),this.#i.clearBlocks(),this.#s.forget(),this.#$.tray?.clear(),this.removeAttribute("data-composer-settling"),this.removeAttribute("data-restoring"),this.#y.empty()}async retryLastTurn(){if(this.#tt())return!1;let e={};this.#C=e;try{let n=this.#Le(),r=this.#ee;if(r!==null)return await this.#xn(n,r.request,e);let o=n.truncateToLastUser();if(o===null||this.#C!==e)return!1;this.#Qe();for(let i of o)if(this.#h.replay(i),this.#C!==e)return!1;return await n.resume(),!0}finally{this.#At(e)}}async#xn(e,n,r){if(n===null)return!1;let{message:o}=n,i=o===void 0?[]:[{id:o.id,role:"user",content:o.content}];this.#Qe();for(let s of[...e.messages,...i])if(this.#h.replay(s),this.#C!==r)return!1;return await this.#dn(e,n),!0}appendMessage(e,n){return this.#y.append(e,n)}#_n(){let{signal:e}=this.#se;this.#u.className="chat",this.#u.setAttribute("part","panel");let n=this.#Qt(),r=this.getAttribute("data-theme-toggle")!==null,{header:o,checkpoints:i,maximize:s,collapse:a,overflow:l}=Hx({host:this,title:this.#x,titleText:n,iconUrl:this.getAttribute("data-icon-url"),strings:this.#t,withCheckpoints:this.#h.runs()!==null,themeToggle:r?this.#G:null,signal:e,onSkills:this.#ft()===null||!this.hasAttribute("data-skill-editor-button")?null:()=>this.#Ye("skills",!1,()=>this.openSkillEditor()),onRoutines:this.#Ke()===null?null:()=>this.#Ye("routines",!1,()=>this.openRoutines()),onMakeRoutine:this.#Ke()===null?null:()=>this.#Ye("routines",!0,()=>this.makeRoutine()),onHistory:()=>this.openThreads(),onCheckpoints:()=>this.toggleCheckpoints(),onNewChat:()=>this.newChat(),onCollapse:()=>this.toggleCollapsed(),onMaximize:()=>this.toggleMaximized(),onToggleTheme:()=>this.toggleTheme()});r&&(this.#vt(),window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change",()=>this.#vt(),{signal:e})),this.#_.enablePanelDrag(o),this.#$e=l,this.#pt(),this.#ue={button:s,before:a},this.#je=a,this.#Xe(),this.#mt(),this.#jt(),window.matchMedia(tf).addEventListener("change",()=>this.#mt(),{signal:e}),G_({messages:this.#m,jumpButton:this.#f,emptyWrap:this.#be,greetingText:this.#X,starters:V_(this,this.#t,m=>{this.sendMessage(m)}),strings:this.#t}),this.#Lt(),this.#p.mount(e),this.#y.mountScroller(this.#f,e),this.#c.mount(),this.#m.append(this.#be),this.#y.updateEmptyState();let d=mE({input:this.#v,send:this.#b,attachButton:this.#R,fileInput:this.#F,voiceSlot:this.#ke,place:this.#xe.element,hint:this.#S,queuedRow:this.#he,attachSlot:this.#j,strings:this.#t,signal:e,onKeydown:m=>this.#Sn(m),onInput:()=>this.#xt(),onSend:()=>{if(this.#Q){this.#_t();return}this.#It()},onFilesPicked:()=>this.#$.onFilesPicked()});this.#xe.mount(e,this.#t),this.#v.addEventListener("focus",()=>this.refreshPlace(),{signal:e}),window.addEventListener("popstate",()=>this.refreshPlace(),{signal:e}),window.addEventListener("hashchange",()=>this.refreshPlace(),{signal:e}),window.navigation?.addEventListener("currententrychange",()=>this.refreshPlace(),{signal:e}),this.refreshPlace();let c=document.createElement("slot");c.name="above-composer";let h=document.createElement("slot");h.name="footer",this.#g.className="messages-wrap",this.#g.replaceChildren(this.#m,this.#f,this.#p.button),this.#le(),this.#u.replaceChildren(o,l.menu,this.#r.breadcrumb,this.#Ge.element,this.#g,this.#w.palette,this.#w.chips,this.#S,this.#he,this.#j,c,d,h,this.#E.element,this.#k.element),this.#u.addEventListener("pointerdown",m=>{if(!this.#k.open_)return;let u=m.composedPath();u.includes(this.#k.element)||u.includes(i)||this.#k.close()},{signal:e}),Fx({launcher:this.#M,badge:this.#N,railLabel:this.#I,bar:this.#z,barHistory:this.#rt,barPlace:this.#xe.barElement,titleText:n,iconUrl:Vx(this),strings:this.#t,signal:e,onOpen:()=>this.setCollapsed(this.#D().collapseTo==="bar"&&!this.collapsed),onHistory:()=>{this.#E.isOpen()?this.#E.close():this.openThreads()}}),document.addEventListener("pointerdown",m=>{let u=this.#E.element.parentNode;if(!this.#E.isOpen()||u!==this.#z&&u!==this.#de)return;let v=m.composedPath(),E=u===this.#z?[u]:[u,this.#te];v.some(x=>E.includes(x))||this.#E.close()},{signal:e}),window.addEventListener("resize",()=>this.#qt(),{signal:e}),this.#_.enableLauncherDrag(e),this.#_.mountResizeGrips(this.#u),this.#l=$x(this.#a,this.#d);let p=this.#_.probe;p.className="viewport-probe",p.setAttribute("aria-hidden","true"),p.style.borderRadius="var(--_viewport-inset-top) var(--_viewport-inset-right) var(--_viewport-inset-bottom) var(--_viewport-inset-left)",p.style.transition="border-radius 1ms",this.#de.className="threads-popover",this.#a.replaceChildren(p,this.#c.region,this.#u,this.#z,this.#de)}#wt(){this.#M.setAttribute("aria-expanded",String(!this.collapsed));let e=this.unread;this.#N.textContent=e>9?"9+":String(e),this.#N.hidden=e===0||!this.collapsed||!Bx(this);let n=!this.collapsed&&this.#D().collapseTo==="bar"?this.#t.collapse:this.#N.hidden?this.#t.expand:F(this.#t.expandUnread,{count:e});this.#M.setAttribute("aria-label",n),this.#M.title=n}#H(e,n){this.dispatchEvent(new CustomEvent(e,{detail:n,bubbles:!0,composed:!0}))}#Be(e){this.#wt(),this.#H(Xd,{unread:this.unread,threadIds:e})}#Tn(e){if(this.#Et(e)){this.#ce.add(e);return}this.#V.set(e,(this.#V.get(e)??0)+1),this.#Be([e])}#Et(e){return!this.collapsed&&e===this.#qe&&e===this.#h.threadId}#Yt(){let e=this.#qe;return e===null||!this.#Et(e)||!this.#V.delete(e)?[]:(this.conversationStore.markRead?.(e),[e])}#Kt(e,n=!1){let r=e.filter(o=>this.#V.delete(o));(r.length>0||n)&&this.#Be(r)}#Xt(e){let n=[];for(let{threadId:r,unread:o}of e)o!==!0||this.#V.has(r)||(this.#Et(r)?this.conversationStore.markRead?.(r):(this.#V.set(r,1),n.push(r)));n.length>0&&this.#Be(n)}#xt(){this.#w.onInput(this.#v.value),this.#S.hidden=!0,fn(this.#v),this.#J=null}#Sn(e){if(this.#w.onKeydown(e)){e.preventDefault();return}if(e.key==="Escape"&&this.#Q){e.preventDefault(),this.#_t();return}if(e.key==="Enter"&&!e.shiftKey){e.preventDefault(),this.#It();return}this.#kn(e)}#kn(e){let n=e.key==="ArrowUp";if(!n&&e.key!=="ArrowDown"||this.#w.isOpen())return;let r=this.#re;if(r.length===0||(this.#v.value!==this.#Ue&&(this.#J=null),this.#J===null&&(!n||this.#v.value!=="")))return;let o=this.#J===null?0:this.#J+(n?1:-1);o>=r.length||(e.preventDefault(),this.#J=o<0?null:o,this.#v.value=o<0?"":r[o],this.#Ue=this.#v.value,this.#v.setSelectionRange(this.#v.value.length,this.#v.value.length),fn(this.#v))}#Oe(){this.#W.length=0,this.#Ve(),this.#dt.abort(),this.#ae?.cancel(),this.#ee!==null&&(this.#ee.request=null,this.#s.withdrawRetry()),this.#C=null,this.#fe=null,this.#h.stopContinuation()}#_t(){let e=this.#et();e!==null&&this.#Q&&e.cancel(this.#h.threadId),this.#Oe()}#et(){return this.detachRuns?this.#Tt():null}#Tt(){let e=this.getAttribute("data-threads-url");return e===null?null:new cd(e,n=>this.#me(n),()=>this.#Ne(),()=>this.retryUnauthorized)}#Jt(e,n){let r={threadId:e,previousThreadId:this.#qe,reason:n};this.#qe=e,this.#r.shown();let o=this.#Yt();o.length>0&&this.#Be(o),this.refreshPlace(),this.#Ie=this.#h.restored;let i=this.#tn(),s=this.#Rn(e,n);this.#H(nc,r),s!==null&&this.#Pe(s),i&&this.#nn(),(n==="switch"||n==="restore"&&this.conversationStore instanceof We)&&this.#h.refreshDrawer()}#Qt(){let e=this.getAttribute("title-text");return e!==V1?e??this.#t.title:this.#q.title===""?this.#t.title:this.#q.title}#en(){this.#x.textContent=this.#Qt(),this.#I.textContent=this.#x.textContent}#tn(){let e=this.#h.threadId,n=this.#lt.get(e)??no(this.#Ie,o=>this.#U.title(o)),r=this.#q;return n===r.title&&(e===r.threadId||n==="")?!1:(this.#q={threadId:e,title:n},this.#en(),!0)}#nn(){this.#H(rc,{...this.#q}),this.#in(this.#q.threadId,this.#q.title)}#Me(e){let n=this.#P.conversationNamespace(e);return n===""?wc:`${wc}@${n}`}#An(e,n){let r=sessionStorage.getItem(this.#Me(e));r!==null&&(bn(this.#Me(n),r,this.#Mt),sessionStorage.removeItem(this.#Me(e)))}#rn(e){return e===this.#q.threadId?this.#q.title:""}#St(){this.#L.load(),this.#Fe||=this.#L.tabs.length>0}#Pe(e){this.#H(yc,{tabs:this.#L.tabs,reason:e})}#on(e){this.#L.close(e)&&this.#Pe("delete"),this.#h.deleteThread(e)}#Rn(e,n){let r=this.#q.title,o=n==="new"?this.#ct:null;return this.#ct=null,n==="restore"||n==="rescope"?(this.#St(),this.#Fe?(this.#L.open(e,r),this.#sn(),n):null):this.#Fe&&(o!==null&&this.#L.replace(o,e,r)||this.#L.open(e,r))?"open":null}#in(e,n){this.#L.retitle(e,n)&&this.#Pe("title")}async#sn(){if(this.#L.untitled(this.#h.threadId).length!==0)try{this.#an(await this.conversationStore.listThreads())}catch{}}#an(e){let n=this.#h.threadId,r=!1;for(let{threadId:o,title:i}of e)o!==n&&this.#L.retitle(o,i)&&(r=!0);r&&this.#Pe("title")}#kt(){this.#tn()&&this.#nn()}#In(e){let n=this.#h.threadId,r=e.find(i=>i.threadId===n);r===void 0||this.#Ie.length===0||[no(this.#Ie),fT(this.#Ie),B1].includes(r.title)||(this.#lt.set(n,r.title),this.#kt())}#ge(e){let n=this.#Q&&!e;this.#Q=e,this.#pt(),e&&(this.#C=null);let r=e?this.#t.stop:this.#t.send;this.#b.title=r,this.#b.setAttribute("aria-label",r),this.#b.dataset.state=e?"running":"idle",this.toggleAttribute("data-running",e),n&&this.#Rt()}#At(e){this.#C===e&&(this.#C=null,this.#Rt())}#tt(){return this.#Q||this.#C!==null||this.#h.continuation!==null}#Rt(){if(this.#Q||this.#fe!==null||this.#h.continuation!==null)return;this.#pe.idled();let e=this.#W.shift();this.#Ve(),e!==void 0&&this.sendMessage(e.content,e.attachments)}#Ve(){this.#he.replaceChildren(),this.#he.hidden=this.#W.length===0;for(let[e,n]of this.#W.entries()){let r=n.content||n.attachments.map(i=>i.name).join(", "),o=document.createElement("button");o.type="button",o.className="queued-chip",o.setAttribute("part","queued-chip"),o.textContent=r,o.title=F(this.#t.removeQueued,{text:r}),o.setAttribute("aria-label",o.title),o.addEventListener("click",()=>{this.#W.splice(e,1),this.#Ve()}),this.#he.appendChild(o)}}#ln(e){e!==""&&this.#re[0]!==e&&this.#re.unshift(e),this.#J=null}async#It(){let e=this.#v.value.trim(),n=this.#$.tray?.readyRefs()??[];if(!(e===""&&n.length===0)){if(this.#ln(e),this.#tt()){e!==""&&(this.#W.push({content:e,attachments:[]}),this.#Ve(),this.#v.value="",fn(this.#v));return}this.#v.value="",fn(this.#v),this.#$.tray?.hasPending()===!0&&this.#y.appendNotice("\u{1F4CE}",F(this.#t.attachmentsStillUploading,{n:this.#$.tray.pendingCount()}),"attachment-pending"),this.#$.tray?.clearReady(),await this.sendMessage(e,n)}}async sendMessage(e,n=[]){return this.#nt({content:e,attachments:n},r=>(this.#ee=null,r.send(e,n)))}run(e){let{message:n}=e;return this.#nt(n===void 0?null:{content:n.content,attachments:[]},r=>this.#dn(r,e))}#dn(e,n){let r={request:n};return this.#ee=r,e.run(n,()=>{this.#ee===r&&(r.request=null,this.#s.withdrawRetry())})}async#nt(e,n){if(e!==null&&e.content===""&&e.attachments.length===0)return!1;let r=this.#We;if(r!==null&&this.#C===r.hold){let i={};this.#C=i,await r.restored;let s=this.#fe;return s!==null?(await Promise.allSettled([s]),this.#fe!==s?!1:(this.#fe=null,this.#nt(e,n))):this.#C!==i?!1:(this.#C=null,this.#nt(e,n))}if(this.#tt())return!1;let o={};this.#C=o;try{if(e!==null&&(this.#y.isEmpty()&&this.setAttribute("data-composer-settling",""),this.#cn(e.content,e.attachments)),this.#C!==o)return!1;let i=this.endpoint!=="";return await this.#Cn(n),i}finally{this.#At(o)}}#cn(e,n){let r=this.appendMessage(it.USER,e);n.length>0&&r.appendChild(tl(n)),this.#H(Wd,{content:e,attachments:n})}attachFile(e){return this.#$.attach(e)}async#Cn(e){if(this.endpoint===""){console.error('<ag-ui-chat>: no endpoint is set, so nothing was sent and no request was made. Point the element at your AG-UI mount with the endpoint attribute (endpoint="/agent/"), or assign chat.endpoint before sending.'),this.#y.appendNotice("\u26A0",this.#t.notConnected,"not-connected");return}await e(this.#Le())}#Le(){return this.#ae===null&&(this.#ae=this.#un({endpoint:this.endpoint,initialMessages:this.#h.restored,follows:[]})),this.#ae}#un(e){let n=this.#h.threadId,r=this.#Re,o=this.#Tt(),i=this.agentFactory({endpoint:e.endpoint,headers:this.#pn(),getHeaders:()=>this.#ut(),retryUnauthorized:()=>this.retryUnauthorized,trustedOrigins:this.trustedOrigins,...this.#ht(),threadId:n,initialMessages:e.initialMessages,initialState:this.#Ee,...o===null?{}:{eventsUrl:o.eventsUrl(n)},getEventsUrl:()=>this.#Tt()?.eventsUrl(n)});return i.subscribe({onRunStartedEvent:({event:s})=>{this.#pe.ran(n,s.runId)}}),new yi({agent:i,handlers:this.#A.forClient(n),getTools:()=>(this.refreshPlace(),this.#Y.advertise()),getContext:()=>this.#T.buildContext(),executeTool:s=>this.#T.execute(s),resolveInterrupts:s=>this.#T.resolveInterrupts(s),onPersist:s=>{if(r!==this.#Re)return;let a=[...e.follows,...s];this.conversationStore.saveMessages(n,a),n===this.#h.threadId&&(this.#Ie=a,this.#kt()),e.onSaved?.(a)},onStateChanged:s=>{r===this.#Re&&this.#Nn(s)},connectionLostMessage:this.#t.connectionLost,unfinishedMessage:this.#t.callNotFinished,declinedMessage:this.#t.declinedAction,maxToolRounds:oT(this),detach:()=>this.#et()!==null})}#Nn(e){this.#Ee={...e},this.#H(Qd,{state:this.#Ee})}#hn(e,n){this.#y.appendNotice("\u2922",e,"surface",n===null?void 0:{label:this.#t.undo,onActivate:n})}enableCharts(e=["tool","activity"]){let n=!this.#i.has(zi)&&!this.#Y.has(Qa);e.includes("activity")&&this.registerActivityRenderer({type:zi,render:r=>{let o=Wr(r);return o===null?null:Ko(o)},removedNotice:this.#t.chartUndrawable}),e.includes("tool")&&this.registerTool(fE()),n&&this.isConnected&&this.reload()}registerActivityRenderer(e){this.#i.register(e)}get unhandledActivityTypes(){return this.#i.unhandledTypes()}};function bT(t,e){for(let n of t.querySelectorAll("slot"))n.innerHTML=e}function q1(t){let e=t?.removed;return typeof e=="number"?e:null}function Y1(){let t=customElements.get(kn);if(t===void 0)customElements.define(kn,oo);else if(t!==oo)throw new Error(`<${kn}> is already defined by another class: a second copy of this package, or another package, is on the page`)}var wT=[["endpoint","endpoint"],["tools_url","data-tools-url"],["threads_url","data-threads-url"],["runs_url","data-runs-url"],["skills_url","data-skills-url"],["skill_editor_url","data-skill-editor-url"],["routines_url","data-routines-url"],["attachments_url","data-attachments-url"],["transcribe_url","data-transcribe-url"]],K1=["omit","same-origin","include"],io=class extends HTMLElement{static observedAttributes=["agent","data-agents-url","data-inbox-url","data-inbox-transport"];headers={};getHeaders=null;#e=[];#t=[];#n=null;#r=null;#o=null;#i=null;#s=null;#a=0;#l=null;#d=null;get agents(){return this.#e}get inbox(){return this.#t}get agent(){return this.#r?.id??null}set agent(e){this.setAttribute("agent",e)}get chat(){return this.#n??this.querySelector(kn)}set chat(e){this.#n=e,this.#p()}get retryUnauthorized(){return dr(this,"data-retry-unauthorized")}set retryUnauthorized(e){this.toggleAttribute("data-retry-unauthorized",e)}get credentials(){let e=this.getAttribute("credentials");return e!==null&&K1.includes(e)?e:null}connectedCallback(){this.#c(),this.refresh(),this.#u()}disconnectedCallback(){this.#a+=1,this.#m(),this.#c()}attributeChangedCallback(e){e==="agent"?this.#p():e==="data-agents-url"?(this.#i=null,this.isConnected&&this.refresh()):this.#u()}async refresh(){let e=this.getAttribute("data-agents-url");if(e===null||e==="")return;this.#a+=1;let n=this.#a,r=await this.#b(e,this.#i),o=null;if(r?.ok===!0)try{o=(await r.json()).agents??[]}catch{o=null}o===null||n!==this.#a||(this.#i=r.headers.get("ETag"),this.#e=o,this.#w(gc,{agents:o}),this.#p())}async openThread(e,n){this.agent=e,this.agent===e&&await this.chat?.switchThread(n)}request(e,n={}){return rt(this.#x(),()=>this.#x(),r=>{let o=new Headers(r);new Headers(n.headers).forEach((s,a)=>{o.set(a,s)});let i=n.credentials??this.credentials??void 0;return fetch(e,{...n,headers:o,...i===void 0?{}:{credentials:i}})},jr(n)&&this.retryUnauthorized)}async getCapabilities(){return this.#r?.capabilities}#c(){let e=this.isConnected?this.chat:null;e!==this.#d&&(this.#d?.removeEventListener(Er,this.#f),e?.addEventListener(Er,this.#f),this.#d=e)}#f=e=>{let{agentId:n,threadId:r}=e.detail,o=this.#e.find(i=>i.id===n);!e.defaultPrevented&&o!==void 0&&o.id!==this.#r?.id&&(e.preventDefault(),this.openThread(o.id,r))};#p(){this.#c();let e=this.getAttribute("agent"),n=e===null?this.#e[0]:this.#e.find(i=>i.id===e);if(n===void 0){e!==null&&this.#e.length>0&&console.warn(`<ag-ui-agents>: agent="${e}" is not in the directory.`);return}let r=this.chat,o=!X1(n,this.#r)||r!==this.#o;this.#r=n,o&&(this.#o=r,r!==null&&this.#g(r,n),this.#w(bc,{agent:n}))}#g(e,n){let r=e.parentNode,o=e.nextSibling;e.remove();for(let[i,s]of wT){let a=n[i];a==null?e.removeAttribute(s):e.setAttribute(s,a)}J1(e.conversationStore)&&(e.conversationStore=new Ft(n.id)),r?.insertBefore(e,o)}#u(){this.#m();let e=this.getAttribute("data-inbox-url");if(!this.isConnected||e===null||e==="")return;let n=this.getAttribute("data-inbox-transport")==="stream"?"stream":"poll";this.#l=new ro({url:e,transport:n,headers:()=>this.#x(),credentials:()=>this.credentials??void 0,retryUnauthorized:()=>this.retryUnauthorized,poll:()=>this.#v(e),seen:r=>{this.#s=r},changed:r=>{this.#t=r.map(Q1),this.#w(vc,{threads:this.#t})},etag:()=>this.#s}).start()}#m(){this.#l?.(),this.#l=null}async#v(e){let n=await this.#b(e,this.#s);if(n?.status!==304){if(n?.ok!==!0)return null;try{let r=await n.json();return this.#s=n.headers.get("ETag"),r.threads??[]}catch{return null}}}async#b(e,n){let r=this.#x();try{return await rt(r,()=>this.#x(),o=>{let i={...o,...n===null?{}:{"If-None-Match":n}};return fetch(e,Ge({headers:i},this.credentials??void 0))},this.retryUnauthorized)}catch{return null}}#x(){return nt(this.getHeaders?.(),e=>({...this.headers,...e}))}#w(e,n){this.dispatchEvent(new CustomEvent(e,{detail:n,bubbles:!0,composed:!0}))}};function X1(t,e){return e!==null&&t.id===e.id&&wT.every(([n])=>t[n]===e[n])}function J1(t){return t instanceof We||t instanceof cr&&t.local instanceof Ft}function Q1(t){let e=t.updated_at===null?Number.NaN:Date.parse(t.updated_at),n={threadId:t.thread_id,agentId:t.agent_id,title:t.title,updatedAt:e,preview:t.preview};if(t.status===void 0)return n;let r=t.last_read_at,o=t.status!=="running"&&r!==void 0&&(r===null||e>Date.parse(r));return{...n,status:t.status,unread:o,...t.status==="failed"&&typeof t.reason=="string"?{reason:t.reason}:{},...t.status==="waiting"&&t.interrupts!==void 0?{interrupts:t.interrupts}:{},...t.status==="waiting"&&typeof t.run_id=="string"?{runId:t.run_id}:{}}}function eM(){let t=customElements.get(vo);if(t===void 0)customElements.define(vo,io);else if(t!==io)throw new Error(`<${vo}> is already defined by another class: a second copy of this package, or another package, is on the page`)}async function tM(t,e,n={}){await Yt(t),await Lc(t,{...n,flashMs:n.flashMs??0}),await Mc(t,e,n)}async function nM(t,e={}){await Yt(t),await Pc(t,e)}async function rM(t,e={}){await Yt(t),await zc(t,e)}async function oM(t,e,n={}){await Yt(t),await Dc(t,e,n)}async function iM(t,e,n={}){await Yt(t),await $c(t,e,n)}function sM(t,e){t instanceof HTMLInputElement&&t.type==="checkbox"?wo(t,!!e):In(t,String(e)),Eo(t)}var aM=new Set(["banner","complementary","contentinfo","form","main","navigation","region","search"]),lM=new Set(["checkbox","combobox","listbox","radio","searchbox","slider","spinbutton","switch","textbox"]),sf={button:"",image:"",reset:"Reset",submit:"Submit"},dM=new Set(["hidden","password"]),cM=new Set(["input","noscript","output","script","select","style","template","textarea"]),ET=/^\d+$/,uM="http://www.w3.org/1999/xlink",xT="article, aside, main, nav, section",_T=Symbol.for("agents-web-components.page-map.next-handle");function hM(t=document,e={}){let n={...dc,...e.limits},r=[],o={},i={},s=d=>{let c=i[d.kind]??0;i[d.kind]=c+1,c<n[d.kind]?r.push(d):o[d.kind]=(o[d.kind]??0)+1},a=t instanceof Element?[t]:Array.from(t.children);for(let d of a)of(d,s);let l={};for(let{item:d,handle:c}of _M(r)){let h=l[d.kind]??[];h.push({handle:c,...d.fields}),l[d.kind]=h}return Object.keys(o).length===0?l:{...l,truncated:o}}function of(t,e){if(!(!(t instanceof HTMLElement||t instanceof SVGElement)||t.localName.startsWith(mo)||t.hasAttribute(Mi)||t instanceof HTMLElement&&t.inert||t.getAttribute("aria-hidden")==="true")){if(ST(t)){if(t.checkVisibility({visibilityProperty:!0})){let n=t instanceof HTMLElement?pM(t):fM(t);if(n!==null&&(e(n),n.kind==="fields"))return}}else if(getComputedStyle(t).display!=="contents")return;for(let n of t.shadowRoot?.children??[])of(n,e);for(let n of t.children)of(n,e)}}function pM(t){let e=TT(t),n=t.localName,r=(s,a)=>({kind:s,element:t,fields:a}),o=gM(t,e);if(o!==null){let s=t.getAttribute("name");return r("fields",{...s===null?{}:{name:s},type:o,...At("label",yM(t)),...rf(t)})}if(e==="heading"||e===null&&/^h[1-6]$/.test(n)){let s=Number(t.getAttribute("aria-level")??(e===null?n.slice(1):"2"));return r("headings",{level:s,...At("text",so(t))})}if(e==="tab")return r("tabs",{...At("name",yd(t)),selected:t.getAttribute("aria-selected")==="true",...rf(t)});if(e==="dialog"||e==="alertdialog"||e===null&&n==="dialog"){let s=t.matches(":modal")||t.getAttribute("aria-modal")==="true";return r("dialogs",{...At("name",yn(t)),modal:s})}let i=mM(t,e);if(i!==null)return r("landmarks",{role:i,...At("name",yn(t))});if(e==="table"||e==="grid"||e===null&&n==="table")return r("tables",{...At("name",yn(t)),headers:wM(t)});if(e==="button"||e===null&&vM(t))return r("buttons",{...At("name",bM(t)),...rf(t)});if(e==="link"||e===null&&n==="a"&&t.hasAttribute("href")){let s=t instanceof HTMLAnchorElement&&t.hasAttribute("href")?kT(t.href):"";return r("links",{...At("name",yd(t)),...At("href",s)})}return null}function fM(t){let e=t.getAttribute("href")??t.getAttributeNS(uM,"href"),n=TT(t);if(t.localName!=="a"||(n===null?e===null:n!=="link"))return null;let r=e!==null&&URL.canParse(e,t.baseURI)?kT(new URL(e,t.baseURI).href):"",o={...At("name",yd(t)),...At("href",r)};return{kind:"links",element:t,fields:o}}function TT(t){let[e]=(t.getAttribute("role")??"").trim().split(/\s+/);return e||null}function mM(t,e){if(e!==null)return aM.has(e)?e:null;switch(t.localName){case"main":return"main";case"nav":return"navigation";case"aside":return"complementary";case"search":return"search";case"header":return t.parentElement?.closest(xT)?null:"banner";case"footer":return t.parentElement?.closest(xT)?null:"contentinfo";case"form":return yn(t)===""?null:"form";case"section":return yn(t)===""?null:"region";default:return null}}function gM(t,e){return t instanceof HTMLInputElement?dM.has(t.type)||t.type in sf?null:t.type:t instanceof HTMLTextAreaElement?"textarea":t instanceof HTMLSelectElement?t.multiple?"select-multiple":"select":e!==null&&lM.has(e)?e:t.isContentEditable?"contenteditable":null}function vM(t){return t instanceof HTMLButtonElement||t instanceof HTMLInputElement&&t.type in sf}function rf(t){let e=t.matches(":required")||t.getAttribute("aria-required")==="true",n=t.matches(":disabled")||t.getAttribute("aria-disabled")==="true";return{...e?{required:e}:{},...n?{disabled:n}:{}}}function At(t,e){return e===""?{}:{[t]:e}}function yn(t){let e=t.getAttribute("aria-labelledby");if(e!==null){let o=t.getRootNode(),i=e.split(/\s+/).map(s=>o.getElementById(s)).map(s=>s===null?"":so(s)).join(" ");if(i.trim()!=="")return wn(i)}let n=t.getAttribute("aria-label")?.trim()??"";if(n!=="")return wn(n);let r=t instanceof HTMLTableElement?t.caption:null;return wn(r===null?t.getAttribute("title")??"":so(r))}function yd(t){return yn(t)||so(t)}function bM(t){if(t instanceof HTMLInputElement){let e=yn(t);if(e!=="")return e;let n=t.type==="image"?t.getAttribute("alt")??"":sf[t.type];return wn(t.getAttribute("value")??n)}return yd(t)}function yM(t){let e=yn(t);if(e!=="")return e;let n="labels"in t?t.labels:null;return wn(Array.from(n??[],o=>so(o)).join(" "))||wn(t.getAttribute("placeholder")??"")}function wM(t){let e=t.querySelectorAll(":scope > thead th, [role=columnheader]");return(e.length>0?Array.from(e):Array.from(t.querySelector(":scope > tbody > tr, :scope > tr")?.children??[]).filter(r=>r.localName==="th")).map(r=>so(r)).filter(r=>r!=="").slice(0,zf)}function so(t){let e=[],n=r=>{if(r.nodeType===Node.TEXT_NODE){e.push(r.nodeValue);return}if(!(r instanceof Element)||EM(r))return;if(r.localName==="img"){e.push(` ${r.getAttribute("alt")??""} `);return}let o=r instanceof HTMLSlotElement?r.assignedNodes({flatten:!0}):xM(r);for(let i of o)n(i)};return n(t),wn(e.join(""))}function EM(t){return cM.has(t.localName)||t.localName.startsWith(mo)||t.hasAttribute(Mi)||t.getAttribute("aria-hidden")==="true"||t instanceof HTMLElement&&t.isContentEditable||!(t.checkVisibility({visibilityProperty:!0})&&ST(t))&&getComputedStyle(t).display!=="contents"}function ST(t){return t.checkVisibility()&&(!(t instanceof SVGElement)||t.getClientRects().length>0)}function xM(t){return(t instanceof Element&&t.shadowRoot!==null?t.shadowRoot:t).childNodes}function wn(t){let e=t.replace(/\s+/g," ").trim();return e.length>cc?`${e.slice(0,cc-1)}\u2026`:e}function kT(t){let e=new URL(t,location.href);return e.protocol!=="http:"&&e.protocol!=="https:"?e.protocol:wn(e.origin===location.origin?e.pathname:`${e.origin}${e.pathname}`)}function _M(t){let e=o=>`[${jt}="${o}"]`,n=Reflect.get(document,_T)??0;for(let o of[...document.querySelectorAll(`[${jt}]`),...t.map(({element:i})=>i)]){let i=o.getAttribute(jt)??"";ET.test(i)&&(n=Math.max(n,Number(i)+1))}let r=t.map(o=>{let{element:i}=o,s=i.getAttribute(jt)??"",a=i.getRootNode(),d=ET.test(s)&&a.querySelector(e(s))===i&&(a===document||document.querySelector(e(s))===null)?s:String(n++);return i.setAttribute(jt,d),{item:o,handle:e(d)}});return Reflect.set(document,_T,n),r}var TM="0.18.0";export{gc as AGENTS_CHANGE_EVENT,vo as AGENTS_TAG,bc as AGENT_CHANGE_EVENT,ec as ATTACHMENT_EVENT,io as AgUiAgents,oo as AgUiChat,yi as AgUiClient,Yd as BAR_HEIGHT_EVENT,zi as CHART_ACTIVITY_TYPE,Qa as CHART_TOOL_NAME,Hi as CHAT_CORNERS,hc as COMPACTION_ACTIVITY_TYPE,oc as CUSTOM_AGENT_EVENT,Qo as CheckpointMenu,bo as ClientToolRegistry,ad as ConnectionLostError,ve as DEFAULT_UI_STRINGS,Kd as DOCK_WIDTH_EVENT,kn as ELEMENT_TAG,sc as FEEDBACK_EVENT,vc as INBOX_CHANGE_EVENT,lc as INVALIDATE_CUSTOM_NAME,ic as INVALIDATE_EVENT,pc as LOAD_CAPABILITY_TOOL,qd as MAXIMIZE_EVENT,tC as MAX_QUOTE_CHARS,d1 as MAX_SUGGESTIONS,c1 as MAX_SUGGESTION_CHARS,wr as MAX_TOOL_ROUNDS,An as MESSAGE_ACTIONS,it as MESSAGE_ROLE,Ec as OPEN_EDITOR_EVENT,Er as OPEN_THREAD_EVENT,_o as PAGE_ACTIONS,jt as PAGE_MAP_HANDLE_ATTRIBUTE,Mi as PAGE_MAP_IGNORE_ATTRIBUTE,dc as PAGE_MAP_LIMITS,tc as RUN_FINISHED_EVENT,cr as RemoteConversationStore,ei as RunIndex,Qd as STATE_EVENT,Wd as SUBMIT_EVENT,ac as SUGGESTIONS_ACTIVITY_TYPE,We as SessionStorageStore,yc as TABS_EVENT,Jd as THEME_EVENT,mc as THREADS_CHANGE_EVENT,nc as THREAD_EVENT,rc as THREAD_TITLE_EVENT,Ni as TOGGLE_EVENT,Q as TOOL_CALL_STATUS,Zt as TOOL_DISPLAY,Wt as TOOL_GROUP_DISPLAY,st as TOOL_OUTCOME,ii as ToolCallCard,Xd as UNREAD_EVENT,TM as VERSION,ho as X_CONFIRM_KEY,uo as X_DESTRUCTIVE_KEY,po as X_NAVIGATES_KEY,Fe as X_SUMMARY_KEY,op as asQuote,xp as attachMessageActions,ip as attachQuoteOffer,Wr as chartSpecFrom,nM as clickElement,Tc as createChatSurfaceTools,Xp as createHttpAgent,Uc as createPageActionTools,Hc as createPageMapContext,Fc as createPageStateTools,Bc as createRouteTools,eM as defineAgents,Y1 as defineChat,tM as fillField,kS as flash,Lc as focusWithFlash,Pc as highlightThenClick,vm as isChatCorner,Qh as isDestructive,Xa as isNavigates,Wh as mergeUiStrings,Fl as messageActionBar,sp as messageAttachments,hM as pageMapFrom,Yh as parseToolCatalog,Bi as prefersReducedMotion,rM as pressButton,zc as pressThenClick,bi as prettifyToolName,Xo as quotableSelection,Jo as relativeTime,Ko as renderChart,gi as renderMarkdown,vi as renderSuggestionChips,Kh as requestApproval,Jh as requestConfirmation,qh as requestQuestion,Gc as resolvePageMapHandle,Yt as scrollIntoCenterView,oM as selectControl,Dc as selectOption,sM as setControlValue,wo as setNativeChecked,In as setNativeValue,Nc as showHighlightOverlay,B_ as suggestionPrompts,iM as toggleCheckbox,$c as toggleControl,ti as toolStatusFromOutcome,rp as transcribeAudio,Mc as typeInto,tp as uploadAttachment};
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
  (*! @license DOMPurify 3.4.18 | (c) Cure53 and other contributors | Released under the Apache license 2.0 and Mozilla Public License 2.0 | github.com/cure53/DOMPurify/blob/3.4.18/LICENSE *)
  (*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE *)
*/
