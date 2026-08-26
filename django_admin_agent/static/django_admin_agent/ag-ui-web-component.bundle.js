var dp=Object.defineProperty;var os=(t,e)=>{for(var n in e)dp(t,n,{get:e[n],enumerable:!0})};var Gr="ag-ui-chat",is="ag-ui-submit",ss="ag-ui-toggle",as="ag-ui-unread",ls="ag-ui-state",cs="ag-ui-attachments",ds="ag-ui-run-finished",qe={USER:"user",ASSISTANT:"assistant"},Wn="x-destructive",Fr="x-confirm",Pe="x-summary",Xn="x-navigates",us="read_page",ps=10,ee={PENDING:"pending",DEFERRED:"deferred",DONE:"done",ERROR:"error",DECLINED:"declined"},De={UPLOADING:"uploading",READY:"ready",ERROR:"error"},hs=10*1024*1024,gn={INLINE:"inline",MINIMAL:"minimal",COMPACT:"compact",FULL:"full"},fs="compaction",ms="load_capability",Cl='<svg class="glyph" viewBox="0 0 24 24" aria-hidden="true"><path d="M12 19.5V5m-6.5 6.5L12 5l6.5 6.5"/></svg>',Il='<svg class="glyph glyph--solid" viewBox="0 0 24 24" aria-hidden="true"><rect x="7" y="7" width="10" height="10" rx="2.5"/></svg>',Rl='<svg class="glyph" viewBox="0 0 24 24" aria-hidden="true"><path d="M17 8.5V15a5 5 0 0 1-10 0V7a3 3 0 0 1 6 0v7.5a1 1 0 0 1-2 0V8.5"/></svg>',Nl='<svg class="glyph" viewBox="0 0 24 24" aria-hidden="true"><path d="M12 4a3 3 0 0 1 3 3v5a3 3 0 0 1-6 0V7a3 3 0 0 1 3-3z"/><path d="M5 11v1a7 7 0 0 0 14 0v-1"/><path d="M12 19v3"/></svg>',Ol='<svg class="glyph" viewBox="0 0 24 24" aria-hidden="true"><path d="M4 5.5A2.5 2.5 0 0 1 6.5 3h11A2.5 2.5 0 0 1 20 5.5v8a2.5 2.5 0 0 1-2.5 2.5H9l-5 4z"/></svg>',Ml='<svg class="glyph" viewBox="0 0 24 24" aria-hidden="true"><path d="M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8z"/><path d="M14 3v5h5"/></svg>',Ll='<svg class="glyph" viewBox="0 0 24 24" aria-hidden="true"><rect x="3.5" y="4.5" width="17" height="15" rx="2.5"/><circle cx="9" cy="10" r="1.5"/><path d="M4.5 17.5 9 13.5l3.5 3 3-2.5 4.5 4"/></svg>',Pl='<svg class="glyph" viewBox="0 0 24 24" aria-hidden="true"><path d="M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8z"/><path d="M14 3v5h5"/><rect class="glyph--solid" x="7.5" y="13.5" width="9" height="4.5" rx="1"/></svg>',Dl='<svg class="glyph" viewBox="0 0 24 24" aria-hidden="true"><path d="M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8z"/><path d="M14 3v5h5"/><path d="M8.5 13.5h7M8.5 17h4.5"/></svg>',Kn="chart";var up=/\{([a-zA-Z_][a-zA-Z0-9_]*)\}/g;function Ul(t,e){let n=[];return{text:t.replace(up,(o,i)=>{let s=e[i];return s==null||s===""?(n.includes(i)||n.push(i),o):String(s)}),missing:n}}function pp(t){if(typeof t!="object"||t===null)return!1;let e=t;return typeof e.name=="string"&&typeof e.title=="string"&&(e.prompt===void 0||typeof e.prompt=="string")}function gs(t){return Array.isArray(t)?t.filter(pp):[]}var Yn=class{#n=new Map;register(e){this.#n.set(e.name,e)}has(e){return this.#n.has(e)}get(e){let n=this.#n.get(e);if(n===void 0)throw new Error(`tool "${e}" is not registered`);return n}tools(){return[...this.#n.values()].map(e=>({name:e.name,description:e.description,parameters:e.parameters}))}};function vs(t){return t[Wn]===!0}function $r(t){return t[Xn]===!0}function Vr(t,e){return Object.getOwnPropertyDescriptor(t,e).set}var hp=Vr(HTMLInputElement.prototype,"value"),fp=Vr(HTMLTextAreaElement.prototype,"value"),mp=Vr(HTMLSelectElement.prototype,"value"),gp=Vr(HTMLInputElement.prototype,"checked");function Mt(t,e){t instanceof HTMLTextAreaElement?fp.call(t,e):t instanceof HTMLSelectElement?mp.call(t,e):hp.call(t,e)}function Zn(t,e){gp.call(t,e)}var bs="#4f46e5",vp="rgba(79, 70, 229, 0.4)",bp="--ag-ui-accent";function Jn(t){return new Promise(e=>{setTimeout(e,t)})}function Br(){return window.matchMedia("(prefers-reduced-motion: reduce)").matches}function ys(t){return t<=0||Br()?Promise.resolve():Jn(t)}function jr(t,e){let n=window.getComputedStyle(t).getPropertyValue(bp).trim();return n===""?e:n}function Hl(t){return`0 0 0 3px ${jr(t,vp)}`}async function xs(t,e,n={}){let r=n.charDelayMs??35;Mt(t,""),t.dispatchEvent(new Event("input",{bubbles:!0}));for(let o of e)Mt(t,t.value+o),t.dispatchEvent(new Event("input",{bubbles:!0})),r>0&&await Jn(r);t.dispatchEvent(new Event("change",{bubbles:!0}))}async function _s(t,e={}){let n=e.highlightMs??280,r=t.style.outline,o=t.style.outlineOffset;t.style.outline=`2px solid ${jr(t,bs)}`,t.style.outlineOffset="2px",await Jn(n),t.style.outline=r,t.style.outlineOffset=o,t.click()}var yp=600,xp=100;function dt(t,e={}){let n=Br();return t.scrollIntoView({block:"center",inline:"nearest",behavior:n?"auto":"smooth"}),n?Promise.resolve():new Promise(r=>{let o,i=()=>{clearTimeout(o),document.removeEventListener("scroll",s,!0),document.removeEventListener("scrollend",i,!0),r()},s=()=>{document.removeEventListener("scroll",s,!0),clearTimeout(o),o=setTimeout(i,e.settleMs??yp)};o=setTimeout(i,xp),document.addEventListener("scroll",s,!0),document.addEventListener("scrollend",i,!0)})}var _p=1200,Ep=1/3;async function zl(t,e,n){(e.focus??n)&&t.focus({preventScroll:!0});let r=e.flashMs??_p;if(r<=0)return;let o=t.style.outline,i=t.style.outlineOffset,s=t.style.transition,a=e.color??jr(t,bs);t.style.outline=`3px solid ${a}`,t.style.outlineOffset="2px";let l=Br()?0:Math.round(r*Ep);await Jn(r-l),l>0&&(t.style.transition=`outline-color ${l}ms ease-out`,t.style.outline="3px solid transparent",await Jn(l)),t.style.outline=o,t.style.outlineOffset=i,t.style.transition=s}function wp(t,e={}){return zl(t,e,!1)}function Es(t,e={}){return zl(t,e,!0)}async function ws(t,e={}){let n=e.pressMs??140,r=t.style.transform,o=t.style.transition,i=t.style.boxShadow;t.style.transition="transform 80ms ease",t.style.transform="scale(0.96)",t.style.boxShadow=Hl(t),await ys(n),t.style.transform=r,t.style.transition=o,t.style.boxShadow=i,t.click()}function Tp(t,e){for(let n of Array.from(t.options))if(n.value===e||n.text===e)return n;return null}async function Ts(t,e,n={}){let r=Tp(t,e);if(r===null)throw new Error(`no <option> matching "${e}"`);let o=n.highlightMs??220,i=t.style.outline,s=t.style.outlineOffset;t.style.outline=`2px solid ${jr(t,bs)}`,t.style.outlineOffset="2px",await ys(o),Mt(t,r.value),t.dispatchEvent(new Event("input",{bubbles:!0})),t.dispatchEvent(new Event("change",{bubbles:!0})),t.style.outline=i,t.style.outlineOffset=s}async function Ss(t,e,n={}){let r=n.flashMs??200,o=t.style.boxShadow;t.style.boxShadow=Hl(t),await ys(r),Zn(t,e),t.dispatchEvent(new Event("input",{bubbles:!0})),t.dispatchEvent(new Event("change",{bubbles:!0})),t.style.boxShadow=o}var As={SCROLL:"scroll",DRAG:"drag"};function ks(t,e){let n=[];return t.has(As.SCROLL)&&n.push(Sp(e)),t.has(As.DRAG)&&n.push(Ap(e)),n}function Sp(t){return{name:"scroll_to",description:"Scroll a target into view. `target` is `top`, `bottom`, or a CSS selector / page-map element id. Read-only: it changes nothing on the page.",parameters:{type:"object",properties:{target:{type:"string"}},required:["target"],[Pe]:"Scroll into view"},handler:e=>{let n=String(e.target??"");if(n==="top"||n==="bottom"){let o=n==="top"?0:document.body.scrollHeight;return window.scrollTo({top:o,behavior:"smooth"}),{scrolled:!0,target:n}}let r=t(n);if(r===null)throw new Error(`no element matching "${n}"`);return dt(r),{scrolled:!0,target:n}}}}function Ap(t){return{name:"drag_and_drop",description:"Drag the `from` element onto the `to` element (CSS selectors or page-map element ids), firing the page's native drag-and-drop. Use for reordering sortable lists. The page decides what the drop commits.",parameters:{type:"object",properties:{from:{type:"string"},to:{type:"string"}},required:["from","to"],[Pe]:"Drag and drop"},handler:e=>{let n=String(e.from??""),r=String(e.to??""),o=t(n);if(o===null)throw new Error(`no element matching "${n}"`);let i=t(r);if(i===null)throw new Error(`no element matching "${r}"`);return kp(o,i),{dragged:!0,from:n,to:r}}}}function kp(t,e){let n=new DataTransfer;Qn(t,"dragstart",n),Qn(e,"dragenter",n),Qn(e,"dragover",n),Qn(e,"drop",n),Qn(t,"dragend",n)}function Qn(t,e,n){let r=new Event(e,{bubbles:!0,cancelable:!0});r.dataTransfer=n,t.dispatchEvent(r)}function Cs(t,e){return!e||t===null?[]:[{description:"page_map",value:JSON.stringify(t())}]}function qr(t){let e=[{name:`read_${t.name}`,description:`Read the "${t.name}" state.`,parameters:{type:"object",properties:{},required:[],[Pe]:`Read ${t.name}`},handler:()=>t.read()}],n=t.write;return n!==void 0&&e.push({name:`set_${t.name}`,description:`Update the "${t.name}" state.`,parameters:{...t.schema??{type:"object"},[Wn]:!0,[Pe]:`Update ${t.name}`},handler:r=>n(r)}),e}var Cp=qr;function Is(t){let e={};if(!Array.isArray(t))return e;for(let n of t){if(n===null||typeof n!="object")continue;let r=n,o=r.name,i=r.summary;typeof o=="string"&&typeof i=="string"&&(e[o]=i)}return e}var Gl=/:([A-Za-z_][A-Za-z0-9_]*)/g;function Ip(t){return[...t.matchAll(Gl)].map(e=>e[0].slice(1))}function Rp(t,e,n){let r={...n};return{path:e.replace(Gl,(i,s)=>{let a=n[s];if(a==null||String(a)==="")throw new Error(`route "${t}" requires path param "${s}"`);return delete r[s],encodeURIComponent(String(a))}),leftover:r}}function Np(t,e){let n=new URLSearchParams;for(let[o,i]of Object.entries(e))n.set(o,String(i));let r=n.toString();return r===""?t:`${t}?${r}`}function Rs(t,e){return[{name:"list_routes",description:"List the routes the app can navigate to. Each route's `pathParams` names the dynamic segments to pass as `params` to `navigate_to_route`.",parameters:{type:"object",properties:{},required:[],[Pe]:"List pages"},handler:()=>t().map(n=>({...n,pathParams:Ip(n.path)}))},{name:"navigate_to_route",description:"Navigate to one of the app's routes by its id, filling any dynamic `:name` path segments (and extra query params) from `params`.",parameters:{type:"object",properties:{route_id:{type:"string"},params:{type:"object"}},required:["route_id"],[Xn]:!0,[Pe]:"Navigate"},handler:n=>{let r=n.route_id,o=t().find(p=>p.id===r);if(o===void 0)throw new Error(`unknown route "${String(r)}"`);let i=n.params??{},{path:s,leftover:a}=Rp(o.id,o.path,i),l=Np(s,a),c=e();return c!==null?c(l):window.location.assign(l),{navigated:!0,path:l}}}]}var le={title:"Assistant",chatHistory:"Chat history",newChat:"New chat",collapse:"Collapse",expand:"Expand",expandUnread:"Expand \u2014 {count} unread",toggleTheme:"Toggle theme",copyCode:"Copy",copied:"Copied",copyFailed:"Copy failed",checkpoints:"Continue a run",noCheckpoints:"Nothing to continue yet.",resumeRun:"Resume",forkRun:"Fork",forkedRun:"branched",conversation:"Conversation",thinking:"Assistant is thinking\u2026",thoughts:"Thoughts",stopped:"\u23F9 Stopped",connectionLost:"Connection lost",noResult:"No result returned.",declinedAction:"User declined the action.",navigating:"Navigating\u2026",historyCompacted:"Earlier turns condensed to fit the context window ({count} removed)",usingSkill:"Using skill {name}",runInterrupted:"The previous response didn\u2019t finish \u2014 the page changed before it arrived.",pageMoved:"The page changed since you last looked at it. Call read_page to see the current page, then retry.",attachmentsStillUploading:"{n} file still uploading \u2014 it was not sent with this message and is still attached.",skillNeeds:"\u201C{title}\u201D needs {fields} \u2014 fill it in below, then send.",message:"Message",inputPlaceholder:"Ask anything\u2026",send:"Send",stop:"Stop",attachFiles:"Attach files",recordVoice:"Record voice",stopRecording:"Stop recording",transcribing:"Transcribing\u2026",transcriptionFailed:"Transcription failed",toolRunning:"running\u2026",toolDeferred:"waiting for you",toolDone:"\u2713 done",toolError:"\u26A0 error",toolDeclined:"\u2298 declined",resizePanel:"Resize the chat panel",decisionApproved:"approved by you",decisionDeclined:"declined by you",argumentsLabel:"Arguments",resultLabel:"Result",errorLabel:"Error",declinedLabel:"Declined",details:"Details",confirmAction:"Confirm action",confirmRun:"Run \u201C{tool}\u201D?",confirm:"Confirm",cancel:"Cancel",approveAction:"Approve action",approvalPrompt:"Approve this action?",approve:"Approve",deny:"Deny",askUserAction:"Question",otherOption:"Other\u2026",answerPlaceholder:"Type your answer\u2026",submit:"Submit",chats:"Chats",noConversations:"No conversations yet.",rename:"Rename",renameConversation:"Rename conversation",delete:"Delete",deleteConversation:"Delete conversation",deletePrompt:"Delete?",tooLarge:"Too large (max {size})",fileTypeNotAllowed:"File type not allowed",uploadFailed:"upload failed",retry:"Retry",retryUpload:"Retry upload",remove:"Remove",removeAttachment:"Remove attachment",justNow:"just now",minutesAgo:"{n}m ago",hoursAgo:"{n}h ago",daysAgo:"{n}d ago",weeksAgo:"{n}w ago"};function Ns(t){let e={...le};for(let n of Object.keys(t)){let r=t[n];r!==void 0&&(e[n]=r)}return e}function Fl(t,e){let n=document.createElement("button");return n.type="button",n.className=`approval-btn approval-btn--${t}`,n.setAttribute("part",`approval-button approval-${t}`),n.textContent=e,n}function Os(t,e,n={}){let r=n.strings??le;return new Promise(o=>{let i=document.createElement("div");i.className="approval",i.setAttribute("part","approval"),e.toolName!==void 0&&i.setAttribute("data-tool-name",e.toolName),i.setAttribute("role","group"),i.setAttribute("aria-label",r.approveAction);let s=document.createElement("div");s.className="approval-body",s.setAttribute("part","approval-body"),s.textContent=e.message??r.approvalPrompt;let a=document.createElement("div");a.className="approval-actions",a.setAttribute("part","approval-actions");let l=Fl("deny",r.deny),c=Fl("approve",r.approve),p=!1,m=y=>{p||(p=!0,l.disabled=!0,c.disabled=!0,i.setAttribute("data-resolved",y?"approved":"denied"),o(y))};if(l.addEventListener("click",()=>m(!1)),c.addEventListener("click",()=>m(!0)),n.signal?.addEventListener("abort",()=>m(!1),{once:!0}),a.append(l,c),i.append(s,a),t.appendChild(i),n.signal?.aborted===!0){m(!1);return}c.focus()})}function Ms(t,e){for(let n of Array.from(t.querySelectorAll("pre"))){let r=n.querySelector("code");r===null||n.querySelector(".code-copy")!==null||(n.classList.add("has-copy"),n.append(Op(r,e)))}}function Op(t,e){let n=t.textContent,r=document.createElement("button");return r.type="button",r.className="code-copy",r.setAttribute("part","code-copy"),r.textContent=e.copyCode,r.title=e.copyCode,r.setAttribute("aria-label",e.copyCode),r.addEventListener("click",()=>{Mp(n).then(o=>{Lp(r,o?e.copied:e.copyFailed,e)})}),r}async function Mp(t){let e=navigator.clipboard;if(e===void 0)return!1;try{return await e.writeText(t),!0}catch{return!1}}function Lp(t,e,n){t.textContent=e,t.dataset.state=e===n.copied?"copied":"failed",setTimeout(()=>{t.textContent=n.copyCode,delete t.dataset.state},1500)}function Ls(t){let e=document.createElement("div");e.className="attachment-chips",e.setAttribute("part","attachment-chips");for(let n of t)e.appendChild(Pp(n));return e}function Pp(t){let e=document.createElement("div");e.className="attachment-chip attachment-chip--ready",e.setAttribute("part","attachment-chip");let n=document.createElement("span");n.className="attachment-chip-icon",n.setAttribute("part","attachment-chip-icon"),n.innerHTML=Ps(t.mime),n.setAttribute("aria-hidden","true");let r=document.createElement("span");r.className="attachment-chip-name",r.setAttribute("part","attachment-chip-name"),r.textContent=t.name,r.title=t.name;let o=document.createElement("span");return o.className="attachment-chip-size",o.setAttribute("part","attachment-chip-size"),o.textContent=Wr(t.size),e.append(n,r,o),e}function Ps(t){return t.startsWith("image/")?Ll:t==="application/pdf"?Pl:t.startsWith("text/")?Dl:Ml}function Wr(t){if(t<1024)return`${t} B`;let e=["KB","MB","GB"],n=t/1024,r=0;for(;n>=1024&&r<e.length-1;)n/=1024,r+=1;return`${n<10?Math.round(n*10)/10:Math.round(n)} ${e[r]}`}var xe=[];for(let t=0;t<256;++t)xe.push((t+256).toString(16).slice(1));function $l(t,e=0){return(xe[t[e+0]]+xe[t[e+1]]+xe[t[e+2]]+xe[t[e+3]]+"-"+xe[t[e+4]]+xe[t[e+5]]+"-"+xe[t[e+6]]+xe[t[e+7]]+"-"+xe[t[e+8]]+xe[t[e+9]]+"-"+xe[t[e+10]]+xe[t[e+11]]+xe[t[e+12]]+xe[t[e+13]]+xe[t[e+14]]+xe[t[e+15]]).toLowerCase()}var Ds,Dp=new Uint8Array(16);function Us(){if(!Ds){if(typeof crypto>"u"||!crypto.getRandomValues)throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");Ds=crypto.getRandomValues.bind(crypto)}return Ds(Dp)}var Up=typeof crypto<"u"&&crypto.randomUUID&&crypto.randomUUID.bind(crypto),Hs={randomUUID:Up};function Hp(t,e,n){if(Hs.randomUUID&&!e&&!t)return Hs.randomUUID();t=t||{};let r=t.random??t.rng?.()??Us();if(r.length<16)throw new Error("Random bytes length must be >= 16");if(r[6]=r[6]&15|64,r[8]=r[8]&63|128,e){if(n=n||0,n<0||n+16>e.length)throw new RangeError(`UUID byte range ${n}:${n+15} is out of buffer bounds`);for(let o=0;o<16;++o)e[n+o]=r[o];return e}return $l(r)}var Et=Hp;var d={};os(d,{BRAND:()=>dh,DIRTY:()=>Lt,EMPTY_PATH:()=>$p,INVALID:()=>P,NEVER:()=>Xh,OK:()=>Se,ParseStatus:()=>_e,Schema:()=>$,ZodAny:()=>St,ZodArray:()=>ft,ZodBigInt:()=>Dt,ZodBoolean:()=>Ut,ZodBranded:()=>tr,ZodCatch:()=>Xt,ZodDate:()=>Ht,ZodDefault:()=>Wt,ZodDiscriminatedUnion:()=>Yr,ZodEffects:()=>$e,ZodEnum:()=>jt,ZodError:()=>Oe,ZodFirstPartyTypeKind:()=>D,ZodFunction:()=>Jr,ZodIntersection:()=>$t,ZodIssueCode:()=>E,ZodLazy:()=>Vt,ZodLiteral:()=>Bt,ZodMap:()=>En,ZodNaN:()=>Tn,ZodNativeEnum:()=>qt,ZodNever:()=>We,ZodNull:()=>Gt,ZodNullable:()=>ot,ZodNumber:()=>Pt,ZodObject:()=>Me,ZodOptional:()=>Ge,ZodParsedType:()=>C,ZodPipeline:()=>nr,ZodPromise:()=>At,ZodReadonly:()=>Kt,ZodRecord:()=>Zr,ZodSchema:()=>$,ZodSet:()=>wn,ZodString:()=>Tt,ZodSymbol:()=>xn,ZodTransformer:()=>$e,ZodTuple:()=>rt,ZodType:()=>$,ZodUndefined:()=>zt,ZodUnion:()=>Ft,ZodUnknown:()=>ht,ZodVoid:()=>_n,addIssueToContext:()=>k,any:()=>yh,array:()=>wh,bigint:()=>fh,boolean:()=>Ql,coerce:()=>Wh,custom:()=>Yl,date:()=>mh,datetimeRegex:()=>Xl,defaultErrorMap:()=>ut,discriminatedUnion:()=>kh,effect:()=>zh,enum:()=>Dh,function:()=>Mh,getErrorMap:()=>vn,getParsedType:()=>nt,instanceof:()=>ph,intersection:()=>Ch,isAborted:()=>Xr,isAsync:()=>bn,isDirty:()=>Kr,isValid:()=>wt,late:()=>uh,lazy:()=>Lh,literal:()=>Ph,makeIssue:()=>er,map:()=>Nh,nan:()=>hh,nativeEnum:()=>Uh,never:()=>_h,null:()=>bh,nullable:()=>Fh,number:()=>Jl,object:()=>Th,objectUtil:()=>zs,oboolean:()=>qh,onumber:()=>jh,optional:()=>Gh,ostring:()=>Bh,pipeline:()=>Vh,preprocess:()=>$h,promise:()=>Hh,quotelessJson:()=>zp,record:()=>Rh,set:()=>Oh,setErrorMap:()=>Fp,strictObject:()=>Sh,string:()=>Zl,symbol:()=>gh,transformer:()=>zh,tuple:()=>Ih,undefined:()=>vh,union:()=>Ah,unknown:()=>xh,util:()=>B,void:()=>Eh});var B;(function(t){t.assertEqual=o=>{};function e(o){}t.assertIs=e;function n(o){throw new Error}t.assertNever=n,t.arrayToEnum=o=>{let i={};for(let s of o)i[s]=s;return i},t.getValidEnumValues=o=>{let i=t.objectKeys(o).filter(a=>typeof o[o[a]]!="number"),s={};for(let a of i)s[a]=o[a];return t.objectValues(s)},t.objectValues=o=>t.objectKeys(o).map(function(i){return o[i]}),t.objectKeys=typeof Object.keys=="function"?o=>Object.keys(o):o=>{let i=[];for(let s in o)Object.prototype.hasOwnProperty.call(o,s)&&i.push(s);return i},t.find=(o,i)=>{for(let s of o)if(i(s))return s},t.isInteger=typeof Number.isInteger=="function"?o=>Number.isInteger(o):o=>typeof o=="number"&&Number.isFinite(o)&&Math.floor(o)===o;function r(o,i=" | "){return o.map(s=>typeof s=="string"?`'${s}'`:s).join(i)}t.joinValues=r,t.jsonStringifyReplacer=(o,i)=>typeof i=="bigint"?i.toString():i})(B||(B={}));var zs;(function(t){t.mergeShapes=(e,n)=>({...e,...n})})(zs||(zs={}));var C=B.arrayToEnum(["string","nan","number","integer","float","boolean","date","bigint","symbol","function","undefined","null","array","object","unknown","promise","void","never","map","set"]),nt=t=>{switch(typeof t){case"undefined":return C.undefined;case"string":return C.string;case"number":return Number.isNaN(t)?C.nan:C.number;case"boolean":return C.boolean;case"function":return C.function;case"bigint":return C.bigint;case"symbol":return C.symbol;case"object":return Array.isArray(t)?C.array:t===null?C.null:t.then&&typeof t.then=="function"&&t.catch&&typeof t.catch=="function"?C.promise:typeof Map<"u"&&t instanceof Map?C.map:typeof Set<"u"&&t instanceof Set?C.set:typeof Date<"u"&&t instanceof Date?C.date:C.object;default:return C.unknown}};var E=B.arrayToEnum(["invalid_type","invalid_literal","custom","invalid_union","invalid_union_discriminator","invalid_enum_value","unrecognized_keys","invalid_arguments","invalid_return_type","invalid_date","invalid_string","too_small","too_big","invalid_intersection_types","not_multiple_of","not_finite"]),zp=t=>JSON.stringify(t,null,2).replace(/"([^"]+)":/g,"$1:"),Oe=class t extends Error{get errors(){return this.issues}constructor(e){super(),this.issues=[],this.addIssue=r=>{this.issues=[...this.issues,r]},this.addIssues=(r=[])=>{this.issues=[...this.issues,...r]};let n=new.target.prototype;Object.setPrototypeOf?Object.setPrototypeOf(this,n):this.__proto__=n,this.name="ZodError",this.issues=e}format(e){let n=e||function(i){return i.message},r={_errors:[]},o=i=>{for(let s of i.issues)if(s.code==="invalid_union")s.unionErrors.map(o);else if(s.code==="invalid_return_type")o(s.returnTypeError);else if(s.code==="invalid_arguments")o(s.argumentsError);else if(s.path.length===0)r._errors.push(n(s));else{let a=r,l=0;for(;l<s.path.length;){let c=s.path[l];l===s.path.length-1?(a[c]=a[c]||{_errors:[]},a[c]._errors.push(n(s))):a[c]=a[c]||{_errors:[]},a=a[c],l++}}};return o(this),r}static assert(e){if(!(e instanceof t))throw new Error(`Not a ZodError: ${e}`)}toString(){return this.message}get message(){return JSON.stringify(this.issues,B.jsonStringifyReplacer,2)}get isEmpty(){return this.issues.length===0}flatten(e=n=>n.message){let n={},r=[];for(let o of this.issues)if(o.path.length>0){let i=o.path[0];n[i]=n[i]||[],n[i].push(e(o))}else r.push(e(o));return{formErrors:r,fieldErrors:n}}get formErrors(){return this.flatten()}};Oe.create=t=>new Oe(t);var Gp=(t,e)=>{let n;switch(t.code){case E.invalid_type:t.received===C.undefined?n="Required":n=`Expected ${t.expected}, received ${t.received}`;break;case E.invalid_literal:n=`Invalid literal value, expected ${JSON.stringify(t.expected,B.jsonStringifyReplacer)}`;break;case E.unrecognized_keys:n=`Unrecognized key(s) in object: ${B.joinValues(t.keys,", ")}`;break;case E.invalid_union:n="Invalid input";break;case E.invalid_union_discriminator:n=`Invalid discriminator value. Expected ${B.joinValues(t.options)}`;break;case E.invalid_enum_value:n=`Invalid enum value. Expected ${B.joinValues(t.options)}, received '${t.received}'`;break;case E.invalid_arguments:n="Invalid function arguments";break;case E.invalid_return_type:n="Invalid function return type";break;case E.invalid_date:n="Invalid date";break;case E.invalid_string:typeof t.validation=="object"?"includes"in t.validation?(n=`Invalid input: must include "${t.validation.includes}"`,typeof t.validation.position=="number"&&(n=`${n} at one or more positions greater than or equal to ${t.validation.position}`)):"startsWith"in t.validation?n=`Invalid input: must start with "${t.validation.startsWith}"`:"endsWith"in t.validation?n=`Invalid input: must end with "${t.validation.endsWith}"`:B.assertNever(t.validation):t.validation!=="regex"?n=`Invalid ${t.validation}`:n="Invalid";break;case E.too_small:t.type==="array"?n=`Array must contain ${t.exact?"exactly":t.inclusive?"at least":"more than"} ${t.minimum} element(s)`:t.type==="string"?n=`String must contain ${t.exact?"exactly":t.inclusive?"at least":"over"} ${t.minimum} character(s)`:t.type==="number"?n=`Number must be ${t.exact?"exactly equal to ":t.inclusive?"greater than or equal to ":"greater than "}${t.minimum}`:t.type==="bigint"?n=`Number must be ${t.exact?"exactly equal to ":t.inclusive?"greater than or equal to ":"greater than "}${t.minimum}`:t.type==="date"?n=`Date must be ${t.exact?"exactly equal to ":t.inclusive?"greater than or equal to ":"greater than "}${new Date(Number(t.minimum))}`:n="Invalid input";break;case E.too_big:t.type==="array"?n=`Array must contain ${t.exact?"exactly":t.inclusive?"at most":"less than"} ${t.maximum} element(s)`:t.type==="string"?n=`String must contain ${t.exact?"exactly":t.inclusive?"at most":"under"} ${t.maximum} character(s)`:t.type==="number"?n=`Number must be ${t.exact?"exactly":t.inclusive?"less than or equal to":"less than"} ${t.maximum}`:t.type==="bigint"?n=`BigInt must be ${t.exact?"exactly":t.inclusive?"less than or equal to":"less than"} ${t.maximum}`:t.type==="date"?n=`Date must be ${t.exact?"exactly":t.inclusive?"smaller than or equal to":"smaller than"} ${new Date(Number(t.maximum))}`:n="Invalid input";break;case E.custom:n="Invalid input";break;case E.invalid_intersection_types:n="Intersection results could not be merged";break;case E.not_multiple_of:n=`Number must be a multiple of ${t.multipleOf}`;break;case E.not_finite:n="Number must be finite";break;default:n=e.defaultError,B.assertNever(t)}return{message:n}},ut=Gp;var Vl=ut;function Fp(t){Vl=t}function vn(){return Vl}var er=t=>{let{data:e,path:n,errorMaps:r,issueData:o}=t,i=[...n,...o.path||[]],s={...o,path:i};if(o.message!==void 0)return{...o,path:i,message:o.message};let a="",l=r.filter(c=>!!c).slice().reverse();for(let c of l)a=c(s,{data:e,defaultError:a}).message;return{...o,path:i,message:a}},$p=[];function k(t,e){let n=vn(),r=er({issueData:e,data:t.data,path:t.path,errorMaps:[t.common.contextualErrorMap,t.schemaErrorMap,n,n===ut?void 0:ut].filter(o=>!!o)});t.common.issues.push(r)}var _e=class t{constructor(){this.value="valid"}dirty(){this.value==="valid"&&(this.value="dirty")}abort(){this.value!=="aborted"&&(this.value="aborted")}static mergeArray(e,n){let r=[];for(let o of n){if(o.status==="aborted")return P;o.status==="dirty"&&e.dirty(),r.push(o.value)}return{status:e.value,value:r}}static async mergeObjectAsync(e,n){let r=[];for(let o of n){let i=await o.key,s=await o.value;r.push({key:i,value:s})}return t.mergeObjectSync(e,r)}static mergeObjectSync(e,n){let r={};for(let o of n){let{key:i,value:s}=o;if(i.status==="aborted"||s.status==="aborted")return P;i.status==="dirty"&&e.dirty(),s.status==="dirty"&&e.dirty(),i.value!=="__proto__"&&(typeof s.value<"u"||o.alwaysSet)&&(r[i.value]=s.value)}return{status:e.value,value:r}}},P=Object.freeze({status:"aborted"}),Lt=t=>({status:"dirty",value:t}),Se=t=>({status:"valid",value:t}),Xr=t=>t.status==="aborted",Kr=t=>t.status==="dirty",wt=t=>t.status==="valid",bn=t=>typeof Promise<"u"&&t instanceof Promise;var R;(function(t){t.errToObj=e=>typeof e=="string"?{message:e}:e||{},t.toString=e=>typeof e=="string"?e:e?.message})(R||(R={}));var Fe=class{constructor(e,n,r,o){this._cachedPath=[],this.parent=e,this.data=n,this._path=r,this._key=o}get path(){return this._cachedPath.length||(Array.isArray(this._key)?this._cachedPath.push(...this._path,...this._key):this._cachedPath.push(...this._path,this._key)),this._cachedPath}},Bl=(t,e)=>{if(wt(e))return{success:!0,data:e.value};if(!t.common.issues.length)throw new Error("Validation failed but no issues detected.");return{success:!1,get error(){if(this._error)return this._error;let n=new Oe(t.common.issues);return this._error=n,this._error}}};function G(t){if(!t)return{};let{errorMap:e,invalid_type_error:n,required_error:r,description:o}=t;if(e&&(n||r))throw new Error(`Can't use "invalid_type_error" or "required_error" in conjunction with custom error map.`);return e?{errorMap:e,description:o}:{errorMap:(s,a)=>{let{message:l}=t;return s.code==="invalid_enum_value"?{message:l??a.defaultError}:typeof a.data>"u"?{message:l??r??a.defaultError}:s.code!=="invalid_type"?{message:a.defaultError}:{message:l??n??a.defaultError}},description:o}}var $=class{get description(){return this._def.description}_getType(e){return nt(e.data)}_getOrReturnCtx(e,n){return n||{common:e.parent.common,data:e.data,parsedType:nt(e.data),schemaErrorMap:this._def.errorMap,path:e.path,parent:e.parent}}_processInputParams(e){return{status:new _e,ctx:{common:e.parent.common,data:e.data,parsedType:nt(e.data),schemaErrorMap:this._def.errorMap,path:e.path,parent:e.parent}}}_parseSync(e){let n=this._parse(e);if(bn(n))throw new Error("Synchronous parse encountered promise.");return n}_parseAsync(e){let n=this._parse(e);return Promise.resolve(n)}parse(e,n){let r=this.safeParse(e,n);if(r.success)return r.data;throw r.error}safeParse(e,n){let r={common:{issues:[],async:n?.async??!1,contextualErrorMap:n?.errorMap},path:n?.path||[],schemaErrorMap:this._def.errorMap,parent:null,data:e,parsedType:nt(e)},o=this._parseSync({data:e,path:r.path,parent:r});return Bl(r,o)}"~validate"(e){let n={common:{issues:[],async:!!this["~standard"].async},path:[],schemaErrorMap:this._def.errorMap,parent:null,data:e,parsedType:nt(e)};if(!this["~standard"].async)try{let r=this._parseSync({data:e,path:[],parent:n});return wt(r)?{value:r.value}:{issues:n.common.issues}}catch(r){r?.message?.toLowerCase()?.includes("encountered")&&(this["~standard"].async=!0),n.common={issues:[],async:!0}}return this._parseAsync({data:e,path:[],parent:n}).then(r=>wt(r)?{value:r.value}:{issues:n.common.issues})}async parseAsync(e,n){let r=await this.safeParseAsync(e,n);if(r.success)return r.data;throw r.error}async safeParseAsync(e,n){let r={common:{issues:[],contextualErrorMap:n?.errorMap,async:!0},path:n?.path||[],schemaErrorMap:this._def.errorMap,parent:null,data:e,parsedType:nt(e)},o=this._parse({data:e,path:r.path,parent:r}),i=await(bn(o)?o:Promise.resolve(o));return Bl(r,i)}refine(e,n){let r=o=>typeof n=="string"||typeof n>"u"?{message:n}:typeof n=="function"?n(o):n;return this._refinement((o,i)=>{let s=e(o),a=()=>i.addIssue({code:E.custom,...r(o)});return typeof Promise<"u"&&s instanceof Promise?s.then(l=>l?!0:(a(),!1)):s?!0:(a(),!1)})}refinement(e,n){return this._refinement((r,o)=>e(r)?!0:(o.addIssue(typeof n=="function"?n(r,o):n),!1))}_refinement(e){return new $e({schema:this,typeName:D.ZodEffects,effect:{type:"refinement",refinement:e}})}superRefine(e){return this._refinement(e)}constructor(e){this.spa=this.safeParseAsync,this._def=e,this.parse=this.parse.bind(this),this.safeParse=this.safeParse.bind(this),this.parseAsync=this.parseAsync.bind(this),this.safeParseAsync=this.safeParseAsync.bind(this),this.spa=this.spa.bind(this),this.refine=this.refine.bind(this),this.refinement=this.refinement.bind(this),this.superRefine=this.superRefine.bind(this),this.optional=this.optional.bind(this),this.nullable=this.nullable.bind(this),this.nullish=this.nullish.bind(this),this.array=this.array.bind(this),this.promise=this.promise.bind(this),this.or=this.or.bind(this),this.and=this.and.bind(this),this.transform=this.transform.bind(this),this.brand=this.brand.bind(this),this.default=this.default.bind(this),this.catch=this.catch.bind(this),this.describe=this.describe.bind(this),this.pipe=this.pipe.bind(this),this.readonly=this.readonly.bind(this),this.isNullable=this.isNullable.bind(this),this.isOptional=this.isOptional.bind(this),this["~standard"]={version:1,vendor:"zod",validate:n=>this["~validate"](n)}}optional(){return Ge.create(this,this._def)}nullable(){return ot.create(this,this._def)}nullish(){return this.nullable().optional()}array(){return ft.create(this)}promise(){return At.create(this,this._def)}or(e){return Ft.create([this,e],this._def)}and(e){return $t.create(this,e,this._def)}transform(e){return new $e({...G(this._def),schema:this,typeName:D.ZodEffects,effect:{type:"transform",transform:e}})}default(e){let n=typeof e=="function"?e:()=>e;return new Wt({...G(this._def),innerType:this,defaultValue:n,typeName:D.ZodDefault})}brand(){return new tr({typeName:D.ZodBranded,type:this,...G(this._def)})}catch(e){let n=typeof e=="function"?e:()=>e;return new Xt({...G(this._def),innerType:this,catchValue:n,typeName:D.ZodCatch})}describe(e){let n=this.constructor;return new n({...this._def,description:e})}pipe(e){return nr.create(this,e)}readonly(){return Kt.create(this)}isOptional(){return this.safeParse(void 0).success}isNullable(){return this.safeParse(null).success}},Vp=/^c[^\s-]{8,}$/i,Bp=/^[0-9a-z]+$/,jp=/^[0-9A-HJKMNP-TV-Z]{26}$/i,qp=/^[0-9a-fA-F]{8}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{12}$/i,Wp=/^[a-z0-9_-]{21}$/i,Xp=/^[A-Za-z0-9-_]+\.[A-Za-z0-9-_]+\.[A-Za-z0-9-_]*$/,Kp=/^[-+]?P(?!$)(?:(?:[-+]?\d+Y)|(?:[-+]?\d+[.,]\d+Y$))?(?:(?:[-+]?\d+M)|(?:[-+]?\d+[.,]\d+M$))?(?:(?:[-+]?\d+W)|(?:[-+]?\d+[.,]\d+W$))?(?:(?:[-+]?\d+D)|(?:[-+]?\d+[.,]\d+D$))?(?:T(?=[\d+-])(?:(?:[-+]?\d+H)|(?:[-+]?\d+[.,]\d+H$))?(?:(?:[-+]?\d+M)|(?:[-+]?\d+[.,]\d+M$))?(?:[-+]?\d+(?:[.,]\d+)?S)?)??$/,Yp=/^(?!\.)(?!.*\.\.)([A-Z0-9_'+\-\.]*)[A-Z0-9_+-]@([A-Z0-9][A-Z0-9\-]*\.)+[A-Z]{2,}$/i,Zp="^(\\p{Extended_Pictographic}|\\p{Emoji_Component})+$",Gs,Jp=/^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])$/,Qp=/^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\/(3[0-2]|[12]?[0-9])$/,eh=/^(([0-9a-fA-F]{1,4}:){7,7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:)|fe80:(:[0-9a-fA-F]{0,4}){0,4}%[0-9a-zA-Z]{1,}|::(ffff(:0{1,4}){0,1}:){0,1}((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])|([0-9a-fA-F]{1,4}:){1,4}:((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9]))$/,th=/^(([0-9a-fA-F]{1,4}:){7,7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:)|fe80:(:[0-9a-fA-F]{0,4}){0,4}%[0-9a-zA-Z]{1,}|::(ffff(:0{1,4}){0,1}:){0,1}((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])|([0-9a-fA-F]{1,4}:){1,4}:((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9]))\/(12[0-8]|1[01][0-9]|[1-9]?[0-9])$/,nh=/^([0-9a-zA-Z+/]{4})*(([0-9a-zA-Z+/]{2}==)|([0-9a-zA-Z+/]{3}=))?$/,rh=/^([0-9a-zA-Z-_]{4})*(([0-9a-zA-Z-_]{2}(==)?)|([0-9a-zA-Z-_]{3}(=)?))?$/,ql="((\\d\\d[2468][048]|\\d\\d[13579][26]|\\d\\d0[48]|[02468][048]00|[13579][26]00)-02-29|\\d{4}-((0[13578]|1[02])-(0[1-9]|[12]\\d|3[01])|(0[469]|11)-(0[1-9]|[12]\\d|30)|(02)-(0[1-9]|1\\d|2[0-8])))",oh=new RegExp(`^${ql}$`);function Wl(t){let e="[0-5]\\d";t.precision?e=`${e}\\.\\d{${t.precision}}`:t.precision==null&&(e=`${e}(\\.\\d+)?`);let n=t.precision?"+":"?";return`([01]\\d|2[0-3]):[0-5]\\d(:${e})${n}`}function ih(t){return new RegExp(`^${Wl(t)}$`)}function Xl(t){let e=`${ql}T${Wl(t)}`,n=[];return n.push(t.local?"Z?":"Z"),t.offset&&n.push("([+-]\\d{2}:?\\d{2})"),e=`${e}(${n.join("|")})`,new RegExp(`^${e}$`)}function sh(t,e){return!!((e==="v4"||!e)&&Jp.test(t)||(e==="v6"||!e)&&eh.test(t))}function ah(t,e){if(!Xp.test(t))return!1;try{let[n]=t.split(".");if(!n)return!1;let r=n.replace(/-/g,"+").replace(/_/g,"/").padEnd(n.length+(4-n.length%4)%4,"="),o=JSON.parse(atob(r));return!(typeof o!="object"||o===null||"typ"in o&&o?.typ!=="JWT"||!o.alg||e&&o.alg!==e)}catch{return!1}}function lh(t,e){return!!((e==="v4"||!e)&&Qp.test(t)||(e==="v6"||!e)&&th.test(t))}var Tt=class t extends ${_parse(e){if(this._def.coerce&&(e.data=String(e.data)),this._getType(e)!==C.string){let i=this._getOrReturnCtx(e);return k(i,{code:E.invalid_type,expected:C.string,received:i.parsedType}),P}let r=new _e,o;for(let i of this._def.checks)if(i.kind==="min")e.data.length<i.value&&(o=this._getOrReturnCtx(e,o),k(o,{code:E.too_small,minimum:i.value,type:"string",inclusive:!0,exact:!1,message:i.message}),r.dirty());else if(i.kind==="max")e.data.length>i.value&&(o=this._getOrReturnCtx(e,o),k(o,{code:E.too_big,maximum:i.value,type:"string",inclusive:!0,exact:!1,message:i.message}),r.dirty());else if(i.kind==="length"){let s=e.data.length>i.value,a=e.data.length<i.value;(s||a)&&(o=this._getOrReturnCtx(e,o),s?k(o,{code:E.too_big,maximum:i.value,type:"string",inclusive:!0,exact:!0,message:i.message}):a&&k(o,{code:E.too_small,minimum:i.value,type:"string",inclusive:!0,exact:!0,message:i.message}),r.dirty())}else if(i.kind==="email")Yp.test(e.data)||(o=this._getOrReturnCtx(e,o),k(o,{validation:"email",code:E.invalid_string,message:i.message}),r.dirty());else if(i.kind==="emoji")Gs||(Gs=new RegExp(Zp,"u")),Gs.test(e.data)||(o=this._getOrReturnCtx(e,o),k(o,{validation:"emoji",code:E.invalid_string,message:i.message}),r.dirty());else if(i.kind==="uuid")qp.test(e.data)||(o=this._getOrReturnCtx(e,o),k(o,{validation:"uuid",code:E.invalid_string,message:i.message}),r.dirty());else if(i.kind==="nanoid")Wp.test(e.data)||(o=this._getOrReturnCtx(e,o),k(o,{validation:"nanoid",code:E.invalid_string,message:i.message}),r.dirty());else if(i.kind==="cuid")Vp.test(e.data)||(o=this._getOrReturnCtx(e,o),k(o,{validation:"cuid",code:E.invalid_string,message:i.message}),r.dirty());else if(i.kind==="cuid2")Bp.test(e.data)||(o=this._getOrReturnCtx(e,o),k(o,{validation:"cuid2",code:E.invalid_string,message:i.message}),r.dirty());else if(i.kind==="ulid")jp.test(e.data)||(o=this._getOrReturnCtx(e,o),k(o,{validation:"ulid",code:E.invalid_string,message:i.message}),r.dirty());else if(i.kind==="url")try{new URL(e.data)}catch{o=this._getOrReturnCtx(e,o),k(o,{validation:"url",code:E.invalid_string,message:i.message}),r.dirty()}else i.kind==="regex"?(i.regex.lastIndex=0,i.regex.test(e.data)||(o=this._getOrReturnCtx(e,o),k(o,{validation:"regex",code:E.invalid_string,message:i.message}),r.dirty())):i.kind==="trim"?e.data=e.data.trim():i.kind==="includes"?e.data.includes(i.value,i.position)||(o=this._getOrReturnCtx(e,o),k(o,{code:E.invalid_string,validation:{includes:i.value,position:i.position},message:i.message}),r.dirty()):i.kind==="toLowerCase"?e.data=e.data.toLowerCase():i.kind==="toUpperCase"?e.data=e.data.toUpperCase():i.kind==="startsWith"?e.data.startsWith(i.value)||(o=this._getOrReturnCtx(e,o),k(o,{code:E.invalid_string,validation:{startsWith:i.value},message:i.message}),r.dirty()):i.kind==="endsWith"?e.data.endsWith(i.value)||(o=this._getOrReturnCtx(e,o),k(o,{code:E.invalid_string,validation:{endsWith:i.value},message:i.message}),r.dirty()):i.kind==="datetime"?Xl(i).test(e.data)||(o=this._getOrReturnCtx(e,o),k(o,{code:E.invalid_string,validation:"datetime",message:i.message}),r.dirty()):i.kind==="date"?oh.test(e.data)||(o=this._getOrReturnCtx(e,o),k(o,{code:E.invalid_string,validation:"date",message:i.message}),r.dirty()):i.kind==="time"?ih(i).test(e.data)||(o=this._getOrReturnCtx(e,o),k(o,{code:E.invalid_string,validation:"time",message:i.message}),r.dirty()):i.kind==="duration"?Kp.test(e.data)||(o=this._getOrReturnCtx(e,o),k(o,{validation:"duration",code:E.invalid_string,message:i.message}),r.dirty()):i.kind==="ip"?sh(e.data,i.version)||(o=this._getOrReturnCtx(e,o),k(o,{validation:"ip",code:E.invalid_string,message:i.message}),r.dirty()):i.kind==="jwt"?ah(e.data,i.alg)||(o=this._getOrReturnCtx(e,o),k(o,{validation:"jwt",code:E.invalid_string,message:i.message}),r.dirty()):i.kind==="cidr"?lh(e.data,i.version)||(o=this._getOrReturnCtx(e,o),k(o,{validation:"cidr",code:E.invalid_string,message:i.message}),r.dirty()):i.kind==="base64"?nh.test(e.data)||(o=this._getOrReturnCtx(e,o),k(o,{validation:"base64",code:E.invalid_string,message:i.message}),r.dirty()):i.kind==="base64url"?rh.test(e.data)||(o=this._getOrReturnCtx(e,o),k(o,{validation:"base64url",code:E.invalid_string,message:i.message}),r.dirty()):B.assertNever(i);return{status:r.value,value:e.data}}_regex(e,n,r){return this.refinement(o=>e.test(o),{validation:n,code:E.invalid_string,...R.errToObj(r)})}_addCheck(e){return new t({...this._def,checks:[...this._def.checks,e]})}email(e){return this._addCheck({kind:"email",...R.errToObj(e)})}url(e){return this._addCheck({kind:"url",...R.errToObj(e)})}emoji(e){return this._addCheck({kind:"emoji",...R.errToObj(e)})}uuid(e){return this._addCheck({kind:"uuid",...R.errToObj(e)})}nanoid(e){return this._addCheck({kind:"nanoid",...R.errToObj(e)})}cuid(e){return this._addCheck({kind:"cuid",...R.errToObj(e)})}cuid2(e){return this._addCheck({kind:"cuid2",...R.errToObj(e)})}ulid(e){return this._addCheck({kind:"ulid",...R.errToObj(e)})}base64(e){return this._addCheck({kind:"base64",...R.errToObj(e)})}base64url(e){return this._addCheck({kind:"base64url",...R.errToObj(e)})}jwt(e){return this._addCheck({kind:"jwt",...R.errToObj(e)})}ip(e){return this._addCheck({kind:"ip",...R.errToObj(e)})}cidr(e){return this._addCheck({kind:"cidr",...R.errToObj(e)})}datetime(e){return typeof e=="string"?this._addCheck({kind:"datetime",precision:null,offset:!1,local:!1,message:e}):this._addCheck({kind:"datetime",precision:typeof e?.precision>"u"?null:e?.precision,offset:e?.offset??!1,local:e?.local??!1,...R.errToObj(e?.message)})}date(e){return this._addCheck({kind:"date",message:e})}time(e){return typeof e=="string"?this._addCheck({kind:"time",precision:null,message:e}):this._addCheck({kind:"time",precision:typeof e?.precision>"u"?null:e?.precision,...R.errToObj(e?.message)})}duration(e){return this._addCheck({kind:"duration",...R.errToObj(e)})}regex(e,n){return this._addCheck({kind:"regex",regex:e,...R.errToObj(n)})}includes(e,n){return this._addCheck({kind:"includes",value:e,position:n?.position,...R.errToObj(n?.message)})}startsWith(e,n){return this._addCheck({kind:"startsWith",value:e,...R.errToObj(n)})}endsWith(e,n){return this._addCheck({kind:"endsWith",value:e,...R.errToObj(n)})}min(e,n){return this._addCheck({kind:"min",value:e,...R.errToObj(n)})}max(e,n){return this._addCheck({kind:"max",value:e,...R.errToObj(n)})}length(e,n){return this._addCheck({kind:"length",value:e,...R.errToObj(n)})}nonempty(e){return this.min(1,R.errToObj(e))}trim(){return new t({...this._def,checks:[...this._def.checks,{kind:"trim"}]})}toLowerCase(){return new t({...this._def,checks:[...this._def.checks,{kind:"toLowerCase"}]})}toUpperCase(){return new t({...this._def,checks:[...this._def.checks,{kind:"toUpperCase"}]})}get isDatetime(){return!!this._def.checks.find(e=>e.kind==="datetime")}get isDate(){return!!this._def.checks.find(e=>e.kind==="date")}get isTime(){return!!this._def.checks.find(e=>e.kind==="time")}get isDuration(){return!!this._def.checks.find(e=>e.kind==="duration")}get isEmail(){return!!this._def.checks.find(e=>e.kind==="email")}get isURL(){return!!this._def.checks.find(e=>e.kind==="url")}get isEmoji(){return!!this._def.checks.find(e=>e.kind==="emoji")}get isUUID(){return!!this._def.checks.find(e=>e.kind==="uuid")}get isNANOID(){return!!this._def.checks.find(e=>e.kind==="nanoid")}get isCUID(){return!!this._def.checks.find(e=>e.kind==="cuid")}get isCUID2(){return!!this._def.checks.find(e=>e.kind==="cuid2")}get isULID(){return!!this._def.checks.find(e=>e.kind==="ulid")}get isIP(){return!!this._def.checks.find(e=>e.kind==="ip")}get isCIDR(){return!!this._def.checks.find(e=>e.kind==="cidr")}get isBase64(){return!!this._def.checks.find(e=>e.kind==="base64")}get isBase64url(){return!!this._def.checks.find(e=>e.kind==="base64url")}get minLength(){let e=null;for(let n of this._def.checks)n.kind==="min"&&(e===null||n.value>e)&&(e=n.value);return e}get maxLength(){let e=null;for(let n of this._def.checks)n.kind==="max"&&(e===null||n.value<e)&&(e=n.value);return e}};Tt.create=t=>new Tt({checks:[],typeName:D.ZodString,coerce:t?.coerce??!1,...G(t)});function ch(t,e){let n=(t.toString().split(".")[1]||"").length,r=(e.toString().split(".")[1]||"").length,o=n>r?n:r,i=Number.parseInt(t.toFixed(o).replace(".","")),s=Number.parseInt(e.toFixed(o).replace(".",""));return i%s/10**o}var Pt=class t extends ${constructor(){super(...arguments),this.min=this.gte,this.max=this.lte,this.step=this.multipleOf}_parse(e){if(this._def.coerce&&(e.data=Number(e.data)),this._getType(e)!==C.number){let i=this._getOrReturnCtx(e);return k(i,{code:E.invalid_type,expected:C.number,received:i.parsedType}),P}let r,o=new _e;for(let i of this._def.checks)i.kind==="int"?B.isInteger(e.data)||(r=this._getOrReturnCtx(e,r),k(r,{code:E.invalid_type,expected:"integer",received:"float",message:i.message}),o.dirty()):i.kind==="min"?(i.inclusive?e.data<i.value:e.data<=i.value)&&(r=this._getOrReturnCtx(e,r),k(r,{code:E.too_small,minimum:i.value,type:"number",inclusive:i.inclusive,exact:!1,message:i.message}),o.dirty()):i.kind==="max"?(i.inclusive?e.data>i.value:e.data>=i.value)&&(r=this._getOrReturnCtx(e,r),k(r,{code:E.too_big,maximum:i.value,type:"number",inclusive:i.inclusive,exact:!1,message:i.message}),o.dirty()):i.kind==="multipleOf"?ch(e.data,i.value)!==0&&(r=this._getOrReturnCtx(e,r),k(r,{code:E.not_multiple_of,multipleOf:i.value,message:i.message}),o.dirty()):i.kind==="finite"?Number.isFinite(e.data)||(r=this._getOrReturnCtx(e,r),k(r,{code:E.not_finite,message:i.message}),o.dirty()):B.assertNever(i);return{status:o.value,value:e.data}}gte(e,n){return this.setLimit("min",e,!0,R.toString(n))}gt(e,n){return this.setLimit("min",e,!1,R.toString(n))}lte(e,n){return this.setLimit("max",e,!0,R.toString(n))}lt(e,n){return this.setLimit("max",e,!1,R.toString(n))}setLimit(e,n,r,o){return new t({...this._def,checks:[...this._def.checks,{kind:e,value:n,inclusive:r,message:R.toString(o)}]})}_addCheck(e){return new t({...this._def,checks:[...this._def.checks,e]})}int(e){return this._addCheck({kind:"int",message:R.toString(e)})}positive(e){return this._addCheck({kind:"min",value:0,inclusive:!1,message:R.toString(e)})}negative(e){return this._addCheck({kind:"max",value:0,inclusive:!1,message:R.toString(e)})}nonpositive(e){return this._addCheck({kind:"max",value:0,inclusive:!0,message:R.toString(e)})}nonnegative(e){return this._addCheck({kind:"min",value:0,inclusive:!0,message:R.toString(e)})}multipleOf(e,n){return this._addCheck({kind:"multipleOf",value:e,message:R.toString(n)})}finite(e){return this._addCheck({kind:"finite",message:R.toString(e)})}safe(e){return this._addCheck({kind:"min",inclusive:!0,value:Number.MIN_SAFE_INTEGER,message:R.toString(e)})._addCheck({kind:"max",inclusive:!0,value:Number.MAX_SAFE_INTEGER,message:R.toString(e)})}get minValue(){let e=null;for(let n of this._def.checks)n.kind==="min"&&(e===null||n.value>e)&&(e=n.value);return e}get maxValue(){let e=null;for(let n of this._def.checks)n.kind==="max"&&(e===null||n.value<e)&&(e=n.value);return e}get isInt(){return!!this._def.checks.find(e=>e.kind==="int"||e.kind==="multipleOf"&&B.isInteger(e.value))}get isFinite(){let e=null,n=null;for(let r of this._def.checks){if(r.kind==="finite"||r.kind==="int"||r.kind==="multipleOf")return!0;r.kind==="min"?(n===null||r.value>n)&&(n=r.value):r.kind==="max"&&(e===null||r.value<e)&&(e=r.value)}return Number.isFinite(n)&&Number.isFinite(e)}};Pt.create=t=>new Pt({checks:[],typeName:D.ZodNumber,coerce:t?.coerce||!1,...G(t)});var Dt=class t extends ${constructor(){super(...arguments),this.min=this.gte,this.max=this.lte}_parse(e){if(this._def.coerce)try{e.data=BigInt(e.data)}catch{return this._getInvalidInput(e)}if(this._getType(e)!==C.bigint)return this._getInvalidInput(e);let r,o=new _e;for(let i of this._def.checks)i.kind==="min"?(i.inclusive?e.data<i.value:e.data<=i.value)&&(r=this._getOrReturnCtx(e,r),k(r,{code:E.too_small,type:"bigint",minimum:i.value,inclusive:i.inclusive,message:i.message}),o.dirty()):i.kind==="max"?(i.inclusive?e.data>i.value:e.data>=i.value)&&(r=this._getOrReturnCtx(e,r),k(r,{code:E.too_big,type:"bigint",maximum:i.value,inclusive:i.inclusive,message:i.message}),o.dirty()):i.kind==="multipleOf"?e.data%i.value!==BigInt(0)&&(r=this._getOrReturnCtx(e,r),k(r,{code:E.not_multiple_of,multipleOf:i.value,message:i.message}),o.dirty()):B.assertNever(i);return{status:o.value,value:e.data}}_getInvalidInput(e){let n=this._getOrReturnCtx(e);return k(n,{code:E.invalid_type,expected:C.bigint,received:n.parsedType}),P}gte(e,n){return this.setLimit("min",e,!0,R.toString(n))}gt(e,n){return this.setLimit("min",e,!1,R.toString(n))}lte(e,n){return this.setLimit("max",e,!0,R.toString(n))}lt(e,n){return this.setLimit("max",e,!1,R.toString(n))}setLimit(e,n,r,o){return new t({...this._def,checks:[...this._def.checks,{kind:e,value:n,inclusive:r,message:R.toString(o)}]})}_addCheck(e){return new t({...this._def,checks:[...this._def.checks,e]})}positive(e){return this._addCheck({kind:"min",value:BigInt(0),inclusive:!1,message:R.toString(e)})}negative(e){return this._addCheck({kind:"max",value:BigInt(0),inclusive:!1,message:R.toString(e)})}nonpositive(e){return this._addCheck({kind:"max",value:BigInt(0),inclusive:!0,message:R.toString(e)})}nonnegative(e){return this._addCheck({kind:"min",value:BigInt(0),inclusive:!0,message:R.toString(e)})}multipleOf(e,n){return this._addCheck({kind:"multipleOf",value:e,message:R.toString(n)})}get minValue(){let e=null;for(let n of this._def.checks)n.kind==="min"&&(e===null||n.value>e)&&(e=n.value);return e}get maxValue(){let e=null;for(let n of this._def.checks)n.kind==="max"&&(e===null||n.value<e)&&(e=n.value);return e}};Dt.create=t=>new Dt({checks:[],typeName:D.ZodBigInt,coerce:t?.coerce??!1,...G(t)});var Ut=class extends ${_parse(e){if(this._def.coerce&&(e.data=!!e.data),this._getType(e)!==C.boolean){let r=this._getOrReturnCtx(e);return k(r,{code:E.invalid_type,expected:C.boolean,received:r.parsedType}),P}return Se(e.data)}};Ut.create=t=>new Ut({typeName:D.ZodBoolean,coerce:t?.coerce||!1,...G(t)});var Ht=class t extends ${_parse(e){if(this._def.coerce&&(e.data=new Date(e.data)),this._getType(e)!==C.date){let i=this._getOrReturnCtx(e);return k(i,{code:E.invalid_type,expected:C.date,received:i.parsedType}),P}if(Number.isNaN(e.data.getTime())){let i=this._getOrReturnCtx(e);return k(i,{code:E.invalid_date}),P}let r=new _e,o;for(let i of this._def.checks)i.kind==="min"?e.data.getTime()<i.value&&(o=this._getOrReturnCtx(e,o),k(o,{code:E.too_small,message:i.message,inclusive:!0,exact:!1,minimum:i.value,type:"date"}),r.dirty()):i.kind==="max"?e.data.getTime()>i.value&&(o=this._getOrReturnCtx(e,o),k(o,{code:E.too_big,message:i.message,inclusive:!0,exact:!1,maximum:i.value,type:"date"}),r.dirty()):B.assertNever(i);return{status:r.value,value:new Date(e.data.getTime())}}_addCheck(e){return new t({...this._def,checks:[...this._def.checks,e]})}min(e,n){return this._addCheck({kind:"min",value:e.getTime(),message:R.toString(n)})}max(e,n){return this._addCheck({kind:"max",value:e.getTime(),message:R.toString(n)})}get minDate(){let e=null;for(let n of this._def.checks)n.kind==="min"&&(e===null||n.value>e)&&(e=n.value);return e!=null?new Date(e):null}get maxDate(){let e=null;for(let n of this._def.checks)n.kind==="max"&&(e===null||n.value<e)&&(e=n.value);return e!=null?new Date(e):null}};Ht.create=t=>new Ht({checks:[],coerce:t?.coerce||!1,typeName:D.ZodDate,...G(t)});var xn=class extends ${_parse(e){if(this._getType(e)!==C.symbol){let r=this._getOrReturnCtx(e);return k(r,{code:E.invalid_type,expected:C.symbol,received:r.parsedType}),P}return Se(e.data)}};xn.create=t=>new xn({typeName:D.ZodSymbol,...G(t)});var zt=class extends ${_parse(e){if(this._getType(e)!==C.undefined){let r=this._getOrReturnCtx(e);return k(r,{code:E.invalid_type,expected:C.undefined,received:r.parsedType}),P}return Se(e.data)}};zt.create=t=>new zt({typeName:D.ZodUndefined,...G(t)});var Gt=class extends ${_parse(e){if(this._getType(e)!==C.null){let r=this._getOrReturnCtx(e);return k(r,{code:E.invalid_type,expected:C.null,received:r.parsedType}),P}return Se(e.data)}};Gt.create=t=>new Gt({typeName:D.ZodNull,...G(t)});var St=class extends ${constructor(){super(...arguments),this._any=!0}_parse(e){return Se(e.data)}};St.create=t=>new St({typeName:D.ZodAny,...G(t)});var ht=class extends ${constructor(){super(...arguments),this._unknown=!0}_parse(e){return Se(e.data)}};ht.create=t=>new ht({typeName:D.ZodUnknown,...G(t)});var We=class extends ${_parse(e){let n=this._getOrReturnCtx(e);return k(n,{code:E.invalid_type,expected:C.never,received:n.parsedType}),P}};We.create=t=>new We({typeName:D.ZodNever,...G(t)});var _n=class extends ${_parse(e){if(this._getType(e)!==C.undefined){let r=this._getOrReturnCtx(e);return k(r,{code:E.invalid_type,expected:C.void,received:r.parsedType}),P}return Se(e.data)}};_n.create=t=>new _n({typeName:D.ZodVoid,...G(t)});var ft=class t extends ${_parse(e){let{ctx:n,status:r}=this._processInputParams(e),o=this._def;if(n.parsedType!==C.array)return k(n,{code:E.invalid_type,expected:C.array,received:n.parsedType}),P;if(o.exactLength!==null){let s=n.data.length>o.exactLength.value,a=n.data.length<o.exactLength.value;(s||a)&&(k(n,{code:s?E.too_big:E.too_small,minimum:a?o.exactLength.value:void 0,maximum:s?o.exactLength.value:void 0,type:"array",inclusive:!0,exact:!0,message:o.exactLength.message}),r.dirty())}if(o.minLength!==null&&n.data.length<o.minLength.value&&(k(n,{code:E.too_small,minimum:o.minLength.value,type:"array",inclusive:!0,exact:!1,message:o.minLength.message}),r.dirty()),o.maxLength!==null&&n.data.length>o.maxLength.value&&(k(n,{code:E.too_big,maximum:o.maxLength.value,type:"array",inclusive:!0,exact:!1,message:o.maxLength.message}),r.dirty()),n.common.async)return Promise.all([...n.data].map((s,a)=>o.type._parseAsync(new Fe(n,s,n.path,a)))).then(s=>_e.mergeArray(r,s));let i=[...n.data].map((s,a)=>o.type._parseSync(new Fe(n,s,n.path,a)));return _e.mergeArray(r,i)}get element(){return this._def.type}min(e,n){return new t({...this._def,minLength:{value:e,message:R.toString(n)}})}max(e,n){return new t({...this._def,maxLength:{value:e,message:R.toString(n)}})}length(e,n){return new t({...this._def,exactLength:{value:e,message:R.toString(n)}})}nonempty(e){return this.min(1,e)}};ft.create=(t,e)=>new ft({type:t,minLength:null,maxLength:null,exactLength:null,typeName:D.ZodArray,...G(e)});function yn(t){if(t instanceof Me){let e={};for(let n in t.shape){let r=t.shape[n];e[n]=Ge.create(yn(r))}return new Me({...t._def,shape:()=>e})}else return t instanceof ft?new ft({...t._def,type:yn(t.element)}):t instanceof Ge?Ge.create(yn(t.unwrap())):t instanceof ot?ot.create(yn(t.unwrap())):t instanceof rt?rt.create(t.items.map(e=>yn(e))):t}var Me=class t extends ${constructor(){super(...arguments),this._cached=null,this.nonstrict=this.passthrough,this.augment=this.extend}_getCached(){if(this._cached!==null)return this._cached;let e=this._def.shape(),n=B.objectKeys(e);return this._cached={shape:e,keys:n},this._cached}_parse(e){if(this._getType(e)!==C.object){let c=this._getOrReturnCtx(e);return k(c,{code:E.invalid_type,expected:C.object,received:c.parsedType}),P}let{status:r,ctx:o}=this._processInputParams(e),{shape:i,keys:s}=this._getCached(),a=[];if(!(this._def.catchall instanceof We&&this._def.unknownKeys==="strip"))for(let c in o.data)s.includes(c)||a.push(c);let l=[];for(let c of s){let p=i[c],m=o.data[c];l.push({key:{status:"valid",value:c},value:p._parse(new Fe(o,m,o.path,c)),alwaysSet:c in o.data})}if(this._def.catchall instanceof We){let c=this._def.unknownKeys;if(c==="passthrough")for(let p of a)l.push({key:{status:"valid",value:p},value:{status:"valid",value:o.data[p]}});else if(c==="strict")a.length>0&&(k(o,{code:E.unrecognized_keys,keys:a}),r.dirty());else if(c!=="strip")throw new Error("Internal ZodObject error: invalid unknownKeys value.")}else{let c=this._def.catchall;for(let p of a){let m=o.data[p];l.push({key:{status:"valid",value:p},value:c._parse(new Fe(o,m,o.path,p)),alwaysSet:p in o.data})}}return o.common.async?Promise.resolve().then(async()=>{let c=[];for(let p of l){let m=await p.key,y=await p.value;c.push({key:m,value:y,alwaysSet:p.alwaysSet})}return c}).then(c=>_e.mergeObjectSync(r,c)):_e.mergeObjectSync(r,l)}get shape(){return this._def.shape()}strict(e){return R.errToObj,new t({...this._def,unknownKeys:"strict",...e!==void 0?{errorMap:(n,r)=>{let o=this._def.errorMap?.(n,r).message??r.defaultError;return n.code==="unrecognized_keys"?{message:R.errToObj(e).message??o}:{message:o}}}:{}})}strip(){return new t({...this._def,unknownKeys:"strip"})}passthrough(){return new t({...this._def,unknownKeys:"passthrough"})}extend(e){return new t({...this._def,shape:()=>({...this._def.shape(),...e})})}merge(e){return new t({unknownKeys:e._def.unknownKeys,catchall:e._def.catchall,shape:()=>({...this._def.shape(),...e._def.shape()}),typeName:D.ZodObject})}setKey(e,n){return this.augment({[e]:n})}catchall(e){return new t({...this._def,catchall:e})}pick(e){let n={};for(let r of B.objectKeys(e))e[r]&&this.shape[r]&&(n[r]=this.shape[r]);return new t({...this._def,shape:()=>n})}omit(e){let n={};for(let r of B.objectKeys(this.shape))e[r]||(n[r]=this.shape[r]);return new t({...this._def,shape:()=>n})}deepPartial(){return yn(this)}partial(e){let n={};for(let r of B.objectKeys(this.shape)){let o=this.shape[r];e&&!e[r]?n[r]=o:n[r]=o.optional()}return new t({...this._def,shape:()=>n})}required(e){let n={};for(let r of B.objectKeys(this.shape))if(e&&!e[r])n[r]=this.shape[r];else{let i=this.shape[r];for(;i instanceof Ge;)i=i._def.innerType;n[r]=i}return new t({...this._def,shape:()=>n})}keyof(){return Kl(B.objectKeys(this.shape))}};Me.create=(t,e)=>new Me({shape:()=>t,unknownKeys:"strip",catchall:We.create(),typeName:D.ZodObject,...G(e)});Me.strictCreate=(t,e)=>new Me({shape:()=>t,unknownKeys:"strict",catchall:We.create(),typeName:D.ZodObject,...G(e)});Me.lazycreate=(t,e)=>new Me({shape:t,unknownKeys:"strip",catchall:We.create(),typeName:D.ZodObject,...G(e)});var Ft=class extends ${_parse(e){let{ctx:n}=this._processInputParams(e),r=this._def.options;function o(i){for(let a of i)if(a.result.status==="valid")return a.result;for(let a of i)if(a.result.status==="dirty")return n.common.issues.push(...a.ctx.common.issues),a.result;let s=i.map(a=>new Oe(a.ctx.common.issues));return k(n,{code:E.invalid_union,unionErrors:s}),P}if(n.common.async)return Promise.all(r.map(async i=>{let s={...n,common:{...n.common,issues:[]},parent:null};return{result:await i._parseAsync({data:n.data,path:n.path,parent:s}),ctx:s}})).then(o);{let i,s=[];for(let l of r){let c={...n,common:{...n.common,issues:[]},parent:null},p=l._parseSync({data:n.data,path:n.path,parent:c});if(p.status==="valid")return p;p.status==="dirty"&&!i&&(i={result:p,ctx:c}),c.common.issues.length&&s.push(c.common.issues)}if(i)return n.common.issues.push(...i.ctx.common.issues),i.result;let a=s.map(l=>new Oe(l));return k(n,{code:E.invalid_union,unionErrors:a}),P}}get options(){return this._def.options}};Ft.create=(t,e)=>new Ft({options:t,typeName:D.ZodUnion,...G(e)});var pt=t=>t instanceof Vt?pt(t.schema):t instanceof $e?pt(t.innerType()):t instanceof Bt?[t.value]:t instanceof jt?t.options:t instanceof qt?B.objectValues(t.enum):t instanceof Wt?pt(t._def.innerType):t instanceof zt?[void 0]:t instanceof Gt?[null]:t instanceof Ge?[void 0,...pt(t.unwrap())]:t instanceof ot?[null,...pt(t.unwrap())]:t instanceof tr||t instanceof Kt?pt(t.unwrap()):t instanceof Xt?pt(t._def.innerType):[],Yr=class t extends ${_parse(e){let{ctx:n}=this._processInputParams(e);if(n.parsedType!==C.object)return k(n,{code:E.invalid_type,expected:C.object,received:n.parsedType}),P;let r=this.discriminator,o=n.data[r],i=this.optionsMap.get(o);return i?n.common.async?i._parseAsync({data:n.data,path:n.path,parent:n}):i._parseSync({data:n.data,path:n.path,parent:n}):(k(n,{code:E.invalid_union_discriminator,options:Array.from(this.optionsMap.keys()),path:[r]}),P)}get discriminator(){return this._def.discriminator}get options(){return this._def.options}get optionsMap(){return this._def.optionsMap}static create(e,n,r){let o=new Map;for(let i of n){let s=pt(i.shape[e]);if(!s.length)throw new Error(`A discriminator value for key \`${e}\` could not be extracted from all schema options`);for(let a of s){if(o.has(a))throw new Error(`Discriminator property ${String(e)} has duplicate value ${String(a)}`);o.set(a,i)}}return new t({typeName:D.ZodDiscriminatedUnion,discriminator:e,options:n,optionsMap:o,...G(r)})}};function Fs(t,e){let n=nt(t),r=nt(e);if(t===e)return{valid:!0,data:t};if(n===C.object&&r===C.object){let o=B.objectKeys(e),i=B.objectKeys(t).filter(a=>o.indexOf(a)!==-1),s={...t,...e};for(let a of i){let l=Fs(t[a],e[a]);if(!l.valid)return{valid:!1};s[a]=l.data}return{valid:!0,data:s}}else if(n===C.array&&r===C.array){if(t.length!==e.length)return{valid:!1};let o=[];for(let i=0;i<t.length;i++){let s=t[i],a=e[i],l=Fs(s,a);if(!l.valid)return{valid:!1};o.push(l.data)}return{valid:!0,data:o}}else return n===C.date&&r===C.date&&+t==+e?{valid:!0,data:t}:{valid:!1}}var $t=class extends ${_parse(e){let{status:n,ctx:r}=this._processInputParams(e),o=(i,s)=>{if(Xr(i)||Xr(s))return P;let a=Fs(i.value,s.value);return a.valid?((Kr(i)||Kr(s))&&n.dirty(),{status:n.value,value:a.data}):(k(r,{code:E.invalid_intersection_types}),P)};return r.common.async?Promise.all([this._def.left._parseAsync({data:r.data,path:r.path,parent:r}),this._def.right._parseAsync({data:r.data,path:r.path,parent:r})]).then(([i,s])=>o(i,s)):o(this._def.left._parseSync({data:r.data,path:r.path,parent:r}),this._def.right._parseSync({data:r.data,path:r.path,parent:r}))}};$t.create=(t,e,n)=>new $t({left:t,right:e,typeName:D.ZodIntersection,...G(n)});var rt=class t extends ${_parse(e){let{status:n,ctx:r}=this._processInputParams(e);if(r.parsedType!==C.array)return k(r,{code:E.invalid_type,expected:C.array,received:r.parsedType}),P;if(r.data.length<this._def.items.length)return k(r,{code:E.too_small,minimum:this._def.items.length,inclusive:!0,exact:!1,type:"array"}),P;!this._def.rest&&r.data.length>this._def.items.length&&(k(r,{code:E.too_big,maximum:this._def.items.length,inclusive:!0,exact:!1,type:"array"}),n.dirty());let i=[...r.data].map((s,a)=>{let l=this._def.items[a]||this._def.rest;return l?l._parse(new Fe(r,s,r.path,a)):null}).filter(s=>!!s);return r.common.async?Promise.all(i).then(s=>_e.mergeArray(n,s)):_e.mergeArray(n,i)}get items(){return this._def.items}rest(e){return new t({...this._def,rest:e})}};rt.create=(t,e)=>{if(!Array.isArray(t))throw new Error("You must pass an array of schemas to z.tuple([ ... ])");return new rt({items:t,typeName:D.ZodTuple,rest:null,...G(e)})};var Zr=class t extends ${get keySchema(){return this._def.keyType}get valueSchema(){return this._def.valueType}_parse(e){let{status:n,ctx:r}=this._processInputParams(e);if(r.parsedType!==C.object)return k(r,{code:E.invalid_type,expected:C.object,received:r.parsedType}),P;let o=[],i=this._def.keyType,s=this._def.valueType;for(let a in r.data)o.push({key:i._parse(new Fe(r,a,r.path,a)),value:s._parse(new Fe(r,r.data[a],r.path,a)),alwaysSet:a in r.data});return r.common.async?_e.mergeObjectAsync(n,o):_e.mergeObjectSync(n,o)}get element(){return this._def.valueType}static create(e,n,r){return n instanceof $?new t({keyType:e,valueType:n,typeName:D.ZodRecord,...G(r)}):new t({keyType:Tt.create(),valueType:e,typeName:D.ZodRecord,...G(n)})}},En=class extends ${get keySchema(){return this._def.keyType}get valueSchema(){return this._def.valueType}_parse(e){let{status:n,ctx:r}=this._processInputParams(e);if(r.parsedType!==C.map)return k(r,{code:E.invalid_type,expected:C.map,received:r.parsedType}),P;let o=this._def.keyType,i=this._def.valueType,s=[...r.data.entries()].map(([a,l],c)=>({key:o._parse(new Fe(r,a,r.path,[c,"key"])),value:i._parse(new Fe(r,l,r.path,[c,"value"]))}));if(r.common.async){let a=new Map;return Promise.resolve().then(async()=>{for(let l of s){let c=await l.key,p=await l.value;if(c.status==="aborted"||p.status==="aborted")return P;(c.status==="dirty"||p.status==="dirty")&&n.dirty(),a.set(c.value,p.value)}return{status:n.value,value:a}})}else{let a=new Map;for(let l of s){let c=l.key,p=l.value;if(c.status==="aborted"||p.status==="aborted")return P;(c.status==="dirty"||p.status==="dirty")&&n.dirty(),a.set(c.value,p.value)}return{status:n.value,value:a}}}};En.create=(t,e,n)=>new En({valueType:e,keyType:t,typeName:D.ZodMap,...G(n)});var wn=class t extends ${_parse(e){let{status:n,ctx:r}=this._processInputParams(e);if(r.parsedType!==C.set)return k(r,{code:E.invalid_type,expected:C.set,received:r.parsedType}),P;let o=this._def;o.minSize!==null&&r.data.size<o.minSize.value&&(k(r,{code:E.too_small,minimum:o.minSize.value,type:"set",inclusive:!0,exact:!1,message:o.minSize.message}),n.dirty()),o.maxSize!==null&&r.data.size>o.maxSize.value&&(k(r,{code:E.too_big,maximum:o.maxSize.value,type:"set",inclusive:!0,exact:!1,message:o.maxSize.message}),n.dirty());let i=this._def.valueType;function s(l){let c=new Set;for(let p of l){if(p.status==="aborted")return P;p.status==="dirty"&&n.dirty(),c.add(p.value)}return{status:n.value,value:c}}let a=[...r.data.values()].map((l,c)=>i._parse(new Fe(r,l,r.path,c)));return r.common.async?Promise.all(a).then(l=>s(l)):s(a)}min(e,n){return new t({...this._def,minSize:{value:e,message:R.toString(n)}})}max(e,n){return new t({...this._def,maxSize:{value:e,message:R.toString(n)}})}size(e,n){return this.min(e,n).max(e,n)}nonempty(e){return this.min(1,e)}};wn.create=(t,e)=>new wn({valueType:t,minSize:null,maxSize:null,typeName:D.ZodSet,...G(e)});var Jr=class t extends ${constructor(){super(...arguments),this.validate=this.implement}_parse(e){let{ctx:n}=this._processInputParams(e);if(n.parsedType!==C.function)return k(n,{code:E.invalid_type,expected:C.function,received:n.parsedType}),P;function r(a,l){return er({data:a,path:n.path,errorMaps:[n.common.contextualErrorMap,n.schemaErrorMap,vn(),ut].filter(c=>!!c),issueData:{code:E.invalid_arguments,argumentsError:l}})}function o(a,l){return er({data:a,path:n.path,errorMaps:[n.common.contextualErrorMap,n.schemaErrorMap,vn(),ut].filter(c=>!!c),issueData:{code:E.invalid_return_type,returnTypeError:l}})}let i={errorMap:n.common.contextualErrorMap},s=n.data;if(this._def.returns instanceof At){let a=this;return Se(async function(...l){let c=new Oe([]),p=await a._def.args.parseAsync(l,i).catch(f=>{throw c.addIssue(r(l,f)),c}),m=await Reflect.apply(s,this,p);return await a._def.returns._def.type.parseAsync(m,i).catch(f=>{throw c.addIssue(o(m,f)),c})})}else{let a=this;return Se(function(...l){let c=a._def.args.safeParse(l,i);if(!c.success)throw new Oe([r(l,c.error)]);let p=Reflect.apply(s,this,c.data),m=a._def.returns.safeParse(p,i);if(!m.success)throw new Oe([o(p,m.error)]);return m.data})}}parameters(){return this._def.args}returnType(){return this._def.returns}args(...e){return new t({...this._def,args:rt.create(e).rest(ht.create())})}returns(e){return new t({...this._def,returns:e})}implement(e){return this.parse(e)}strictImplement(e){return this.parse(e)}static create(e,n,r){return new t({args:e||rt.create([]).rest(ht.create()),returns:n||ht.create(),typeName:D.ZodFunction,...G(r)})}},Vt=class extends ${get schema(){return this._def.getter()}_parse(e){let{ctx:n}=this._processInputParams(e);return this._def.getter()._parse({data:n.data,path:n.path,parent:n})}};Vt.create=(t,e)=>new Vt({getter:t,typeName:D.ZodLazy,...G(e)});var Bt=class extends ${_parse(e){if(e.data!==this._def.value){let n=this._getOrReturnCtx(e);return k(n,{received:n.data,code:E.invalid_literal,expected:this._def.value}),P}return{status:"valid",value:e.data}}get value(){return this._def.value}};Bt.create=(t,e)=>new Bt({value:t,typeName:D.ZodLiteral,...G(e)});function Kl(t,e){return new jt({values:t,typeName:D.ZodEnum,...G(e)})}var jt=class t extends ${_parse(e){if(typeof e.data!="string"){let n=this._getOrReturnCtx(e),r=this._def.values;return k(n,{expected:B.joinValues(r),received:n.parsedType,code:E.invalid_type}),P}if(this._cache||(this._cache=new Set(this._def.values)),!this._cache.has(e.data)){let n=this._getOrReturnCtx(e),r=this._def.values;return k(n,{received:n.data,code:E.invalid_enum_value,options:r}),P}return Se(e.data)}get options(){return this._def.values}get enum(){let e={};for(let n of this._def.values)e[n]=n;return e}get Values(){let e={};for(let n of this._def.values)e[n]=n;return e}get Enum(){let e={};for(let n of this._def.values)e[n]=n;return e}extract(e,n=this._def){return t.create(e,{...this._def,...n})}exclude(e,n=this._def){return t.create(this.options.filter(r=>!e.includes(r)),{...this._def,...n})}};jt.create=Kl;var qt=class extends ${_parse(e){let n=B.getValidEnumValues(this._def.values),r=this._getOrReturnCtx(e);if(r.parsedType!==C.string&&r.parsedType!==C.number){let o=B.objectValues(n);return k(r,{expected:B.joinValues(o),received:r.parsedType,code:E.invalid_type}),P}if(this._cache||(this._cache=new Set(B.getValidEnumValues(this._def.values))),!this._cache.has(e.data)){let o=B.objectValues(n);return k(r,{received:r.data,code:E.invalid_enum_value,options:o}),P}return Se(e.data)}get enum(){return this._def.values}};qt.create=(t,e)=>new qt({values:t,typeName:D.ZodNativeEnum,...G(e)});var At=class extends ${unwrap(){return this._def.type}_parse(e){let{ctx:n}=this._processInputParams(e);if(n.parsedType!==C.promise&&n.common.async===!1)return k(n,{code:E.invalid_type,expected:C.promise,received:n.parsedType}),P;let r=n.parsedType===C.promise?n.data:Promise.resolve(n.data);return Se(r.then(o=>this._def.type.parseAsync(o,{path:n.path,errorMap:n.common.contextualErrorMap})))}};At.create=(t,e)=>new At({type:t,typeName:D.ZodPromise,...G(e)});var $e=class extends ${innerType(){return this._def.schema}sourceType(){return this._def.schema._def.typeName===D.ZodEffects?this._def.schema.sourceType():this._def.schema}_parse(e){let{status:n,ctx:r}=this._processInputParams(e),o=this._def.effect||null,i={addIssue:s=>{k(r,s),s.fatal?n.abort():n.dirty()},get path(){return r.path}};if(i.addIssue=i.addIssue.bind(i),o.type==="preprocess"){let s=o.transform(r.data,i);if(r.common.async)return Promise.resolve(s).then(async a=>{if(n.value==="aborted")return P;let l=await this._def.schema._parseAsync({data:a,path:r.path,parent:r});return l.status==="aborted"?P:l.status==="dirty"?Lt(l.value):n.value==="dirty"?Lt(l.value):l});{if(n.value==="aborted")return P;let a=this._def.schema._parseSync({data:s,path:r.path,parent:r});return a.status==="aborted"?P:a.status==="dirty"?Lt(a.value):n.value==="dirty"?Lt(a.value):a}}if(o.type==="refinement"){let s=a=>{let l=o.refinement(a,i);if(r.common.async)return Promise.resolve(l);if(l instanceof Promise)throw new Error("Async refinement encountered during synchronous parse operation. Use .parseAsync instead.");return a};if(r.common.async===!1){let a=this._def.schema._parseSync({data:r.data,path:r.path,parent:r});return a.status==="aborted"?P:(a.status==="dirty"&&n.dirty(),s(a.value),{status:n.value,value:a.value})}else return this._def.schema._parseAsync({data:r.data,path:r.path,parent:r}).then(a=>a.status==="aborted"?P:(a.status==="dirty"&&n.dirty(),s(a.value).then(()=>({status:n.value,value:a.value}))))}if(o.type==="transform")if(r.common.async===!1){let s=this._def.schema._parseSync({data:r.data,path:r.path,parent:r});if(!wt(s))return P;let a=o.transform(s.value,i);if(a instanceof Promise)throw new Error("Asynchronous transform encountered during synchronous parse operation. Use .parseAsync instead.");return{status:n.value,value:a}}else return this._def.schema._parseAsync({data:r.data,path:r.path,parent:r}).then(s=>wt(s)?Promise.resolve(o.transform(s.value,i)).then(a=>({status:n.value,value:a})):P);B.assertNever(o)}};$e.create=(t,e,n)=>new $e({schema:t,typeName:D.ZodEffects,effect:e,...G(n)});$e.createWithPreprocess=(t,e,n)=>new $e({schema:e,effect:{type:"preprocess",transform:t},typeName:D.ZodEffects,...G(n)});var Ge=class extends ${_parse(e){return this._getType(e)===C.undefined?Se(void 0):this._def.innerType._parse(e)}unwrap(){return this._def.innerType}};Ge.create=(t,e)=>new Ge({innerType:t,typeName:D.ZodOptional,...G(e)});var ot=class extends ${_parse(e){return this._getType(e)===C.null?Se(null):this._def.innerType._parse(e)}unwrap(){return this._def.innerType}};ot.create=(t,e)=>new ot({innerType:t,typeName:D.ZodNullable,...G(e)});var Wt=class extends ${_parse(e){let{ctx:n}=this._processInputParams(e),r=n.data;return n.parsedType===C.undefined&&(r=this._def.defaultValue()),this._def.innerType._parse({data:r,path:n.path,parent:n})}removeDefault(){return this._def.innerType}};Wt.create=(t,e)=>new Wt({innerType:t,typeName:D.ZodDefault,defaultValue:typeof e.default=="function"?e.default:()=>e.default,...G(e)});var Xt=class extends ${_parse(e){let{ctx:n}=this._processInputParams(e),r={...n,common:{...n.common,issues:[]}},o=this._def.innerType._parse({data:r.data,path:r.path,parent:{...r}});return bn(o)?o.then(i=>({status:"valid",value:i.status==="valid"?i.value:this._def.catchValue({get error(){return new Oe(r.common.issues)},input:r.data})})):{status:"valid",value:o.status==="valid"?o.value:this._def.catchValue({get error(){return new Oe(r.common.issues)},input:r.data})}}removeCatch(){return this._def.innerType}};Xt.create=(t,e)=>new Xt({innerType:t,typeName:D.ZodCatch,catchValue:typeof e.catch=="function"?e.catch:()=>e.catch,...G(e)});var Tn=class extends ${_parse(e){if(this._getType(e)!==C.nan){let r=this._getOrReturnCtx(e);return k(r,{code:E.invalid_type,expected:C.nan,received:r.parsedType}),P}return{status:"valid",value:e.data}}};Tn.create=t=>new Tn({typeName:D.ZodNaN,...G(t)});var dh=Symbol("zod_brand"),tr=class extends ${_parse(e){let{ctx:n}=this._processInputParams(e),r=n.data;return this._def.type._parse({data:r,path:n.path,parent:n})}unwrap(){return this._def.type}},nr=class t extends ${_parse(e){let{status:n,ctx:r}=this._processInputParams(e);if(r.common.async)return(async()=>{let i=await this._def.in._parseAsync({data:r.data,path:r.path,parent:r});return i.status==="aborted"?P:i.status==="dirty"?(n.dirty(),Lt(i.value)):this._def.out._parseAsync({data:i.value,path:r.path,parent:r})})();{let o=this._def.in._parseSync({data:r.data,path:r.path,parent:r});return o.status==="aborted"?P:o.status==="dirty"?(n.dirty(),{status:"dirty",value:o.value}):this._def.out._parseSync({data:o.value,path:r.path,parent:r})}}static create(e,n){return new t({in:e,out:n,typeName:D.ZodPipeline})}},Kt=class extends ${_parse(e){let n=this._def.innerType._parse(e),r=o=>(wt(o)&&(o.value=Object.freeze(o.value)),o);return bn(n)?n.then(o=>r(o)):r(n)}unwrap(){return this._def.innerType}};Kt.create=(t,e)=>new Kt({innerType:t,typeName:D.ZodReadonly,...G(e)});function jl(t,e){let n=typeof t=="function"?t(e):typeof t=="string"?{message:t}:t;return typeof n=="string"?{message:n}:n}function Yl(t,e={},n){return t?St.create().superRefine((r,o)=>{let i=t(r);if(i instanceof Promise)return i.then(s=>{if(!s){let a=jl(e,r),l=a.fatal??n??!0;o.addIssue({code:"custom",...a,fatal:l})}});if(!i){let s=jl(e,r),a=s.fatal??n??!0;o.addIssue({code:"custom",...s,fatal:a})}}):St.create()}var uh={object:Me.lazycreate},D;(function(t){t.ZodString="ZodString",t.ZodNumber="ZodNumber",t.ZodNaN="ZodNaN",t.ZodBigInt="ZodBigInt",t.ZodBoolean="ZodBoolean",t.ZodDate="ZodDate",t.ZodSymbol="ZodSymbol",t.ZodUndefined="ZodUndefined",t.ZodNull="ZodNull",t.ZodAny="ZodAny",t.ZodUnknown="ZodUnknown",t.ZodNever="ZodNever",t.ZodVoid="ZodVoid",t.ZodArray="ZodArray",t.ZodObject="ZodObject",t.ZodUnion="ZodUnion",t.ZodDiscriminatedUnion="ZodDiscriminatedUnion",t.ZodIntersection="ZodIntersection",t.ZodTuple="ZodTuple",t.ZodRecord="ZodRecord",t.ZodMap="ZodMap",t.ZodSet="ZodSet",t.ZodFunction="ZodFunction",t.ZodLazy="ZodLazy",t.ZodLiteral="ZodLiteral",t.ZodEnum="ZodEnum",t.ZodEffects="ZodEffects",t.ZodNativeEnum="ZodNativeEnum",t.ZodOptional="ZodOptional",t.ZodNullable="ZodNullable",t.ZodDefault="ZodDefault",t.ZodCatch="ZodCatch",t.ZodPromise="ZodPromise",t.ZodBranded="ZodBranded",t.ZodPipeline="ZodPipeline",t.ZodReadonly="ZodReadonly"})(D||(D={}));var ph=(t,e={message:`Input not instance of ${t.name}`})=>Yl(n=>n instanceof t,e),Zl=Tt.create,Jl=Pt.create,hh=Tn.create,fh=Dt.create,Ql=Ut.create,mh=Ht.create,gh=xn.create,vh=zt.create,bh=Gt.create,yh=St.create,xh=ht.create,_h=We.create,Eh=_n.create,wh=ft.create,Th=Me.create,Sh=Me.strictCreate,Ah=Ft.create,kh=Yr.create,Ch=$t.create,Ih=rt.create,Rh=Zr.create,Nh=En.create,Oh=wn.create,Mh=Jr.create,Lh=Vt.create,Ph=Bt.create,Dh=jt.create,Uh=qt.create,Hh=At.create,zh=$e.create,Gh=Ge.create,Fh=ot.create,$h=$e.createWithPreprocess,Vh=nr.create,Bh=()=>Zl().optional(),jh=()=>Jl().optional(),qh=()=>Ql().optional(),Wh={string:(t=>Tt.create({...t,coerce:!0})),number:(t=>Pt.create({...t,coerce:!0})),boolean:(t=>Ut.create({...t,coerce:!0})),bigint:(t=>Dt.create({...t,coerce:!0})),date:(t=>Ht.create({...t,coerce:!0}))};var Xh=P;var Kh=d.object({name:d.string(),arguments:d.string()}),Yh=d.object({id:d.string(),type:d.literal("function"),function:Kh,encryptedValue:d.string().optional()}),Qr=d.object({id:d.string(),role:d.string(),content:d.string().optional(),name:d.string().optional(),encryptedValue:d.string().optional()}),Zh=d.object({type:d.literal("text"),text:d.string()}),Jh=d.object({type:d.literal("data"),value:d.string(),mimeType:d.string()}),Qh=d.object({type:d.literal("url"),value:d.string(),mimeType:d.string().optional()}),eo=d.discriminatedUnion("type",[Jh,Qh]),ef=d.object({type:d.literal("image"),source:eo,metadata:d.unknown().optional()}),tf=d.object({type:d.literal("audio"),source:eo,metadata:d.unknown().optional()}),nf=d.object({type:d.literal("video"),source:eo,metadata:d.unknown().optional()}),rf=d.object({type:d.literal("document"),source:eo,metadata:d.unknown().optional()});var ec=d.object({type:d.literal("binary"),mimeType:d.string(),id:d.string().optional(),url:d.string().optional(),data:d.string().optional(),filename:d.string().optional()}),tc=(t,e)=>{!t.id&&!t.url&&!t.data&&e.addIssue({code:d.ZodIssueCode.custom,message:"BinaryInputContent requires at least one of id, url, or data.",path:["id"]})},hx=ec.superRefine((t,e)=>{tc(t,e)}),of=d.discriminatedUnion("type",[Zh,ef,tf,nf,rf,ec]),sf=of.superRefine((t,e)=>{t.type==="binary"&&tc(t,e)}),af=Qr.extend({role:d.literal("developer"),content:d.string()}),lf=Qr.extend({role:d.literal("system"),content:d.string()}),cf=Qr.extend({role:d.literal("assistant"),content:d.string().optional(),toolCalls:d.array(Yh).optional()}),df=Qr.extend({role:d.literal("user"),content:d.union([d.string(),d.array(sf)])}),uf=d.object({id:d.string(),content:d.string(),role:d.literal("tool"),toolCallId:d.string(),error:d.string().optional(),encryptedValue:d.string().optional()}),pf=d.object({id:d.string(),role:d.literal("activity"),activityType:d.string(),content:d.record(d.any())}),hf=d.object({id:d.string(),role:d.literal("reasoning"),content:d.string(),encryptedValue:d.string().optional()}),nc=d.discriminatedUnion("role",[af,lf,cf,df,uf,pf,hf]),fx=d.union([d.literal("developer"),d.literal("system"),d.literal("assistant"),d.literal("user"),d.literal("tool"),d.literal("activity"),d.literal("reasoning")]),ff=d.object({description:d.string(),value:d.string()}),rc=d.object({name:d.string(),description:d.string(),parameters:d.any(),metadata:d.record(d.any()).optional()}),mf=d.object({id:d.string(),reason:d.string(),message:d.string().optional(),toolCallId:d.string().optional(),responseSchema:d.record(d.any()).optional(),expiresAt:d.string().optional(),metadata:d.record(d.any()).optional()}),gf=d.object({interruptId:d.string(),status:d.enum(["resolved","cancelled"]),payload:d.any().optional()}),vf=d.object({threadId:d.string(),runId:d.string(),parentRunId:d.string().optional(),state:d.any(),messages:d.array(nc),tools:d.array(rc),context:d.array(ff),forwardedProps:d.any(),resume:d.array(gf).optional()}),bf=d.any(),te=class extends Error{constructor(t){super(t)}},$s=class extends te{constructor(){super("Connect not implemented. This method is not supported by the current agent.")}},yf=d.object({name:d.string(),description:d.string().optional()}),xf=d.object({name:d.string().optional(),type:d.string().optional(),description:d.string().optional(),version:d.string().optional(),provider:d.string().optional(),documentationUrl:d.string().optional(),metadata:d.record(d.unknown()).optional()}),_f=d.object({streaming:d.boolean().optional(),websocket:d.boolean().optional(),httpBinary:d.boolean().optional(),pushNotifications:d.boolean().optional(),resumable:d.boolean().optional()}),Ef=d.object({supported:d.boolean().optional(),items:d.array(rc).optional(),parallelCalls:d.boolean().optional(),clientProvided:d.boolean().optional()}),wf=d.object({structuredOutput:d.boolean().optional(),supportedMimeTypes:d.array(d.string()).optional()}),Tf=d.object({snapshots:d.boolean().optional(),deltas:d.boolean().optional(),memory:d.boolean().optional(),persistentState:d.boolean().optional()}),Sf=d.object({supported:d.boolean().optional(),delegation:d.boolean().optional(),handoffs:d.boolean().optional(),subAgents:d.array(yf).optional()}),Af=d.object({supported:d.boolean().optional(),streaming:d.boolean().optional(),encrypted:d.boolean().optional()}),kf=d.object({image:d.boolean().optional(),audio:d.boolean().optional(),video:d.boolean().optional(),pdf:d.boolean().optional(),file:d.boolean().optional()}),Cf=d.object({image:d.boolean().optional(),audio:d.boolean().optional()}),If=d.object({input:kf.optional(),output:Cf.optional()}),Rf=d.object({codeExecution:d.boolean().optional(),sandboxed:d.boolean().optional(),maxIterations:d.number().optional(),maxExecutionTime:d.number().optional()}),Nf=d.object({supported:d.boolean().optional(),approvals:d.boolean().optional(),interventions:d.boolean().optional(),feedback:d.boolean().optional(),interrupts:d.boolean().optional(),approveWithEdits:d.boolean().optional()}),mx=d.object({identity:xf.optional(),transport:_f.optional(),tools:Ef.optional(),output:wf.optional(),state:Tf.optional(),multiAgent:Sf.optional(),reasoning:Af.optional(),multimodal:If.optional(),execution:Rf.optional(),humanInTheLoop:Nf.optional(),custom:d.record(d.unknown()).optional()}),oc=d.union([d.literal("developer"),d.literal("system"),d.literal("assistant"),d.literal("user")]),v=(function(t){return t.TEXT_MESSAGE_START="TEXT_MESSAGE_START",t.TEXT_MESSAGE_CONTENT="TEXT_MESSAGE_CONTENT",t.TEXT_MESSAGE_END="TEXT_MESSAGE_END",t.TEXT_MESSAGE_CHUNK="TEXT_MESSAGE_CHUNK",t.TOOL_CALL_START="TOOL_CALL_START",t.TOOL_CALL_ARGS="TOOL_CALL_ARGS",t.TOOL_CALL_END="TOOL_CALL_END",t.TOOL_CALL_CHUNK="TOOL_CALL_CHUNK",t.TOOL_CALL_RESULT="TOOL_CALL_RESULT",t.THINKING_START="THINKING_START",t.THINKING_END="THINKING_END",t.THINKING_TEXT_MESSAGE_START="THINKING_TEXT_MESSAGE_START",t.THINKING_TEXT_MESSAGE_CONTENT="THINKING_TEXT_MESSAGE_CONTENT",t.THINKING_TEXT_MESSAGE_END="THINKING_TEXT_MESSAGE_END",t.STATE_SNAPSHOT="STATE_SNAPSHOT",t.STATE_DELTA="STATE_DELTA",t.MESSAGES_SNAPSHOT="MESSAGES_SNAPSHOT",t.ACTIVITY_SNAPSHOT="ACTIVITY_SNAPSHOT",t.ACTIVITY_DELTA="ACTIVITY_DELTA",t.RAW="RAW",t.CUSTOM="CUSTOM",t.RUN_STARTED="RUN_STARTED",t.RUN_FINISHED="RUN_FINISHED",t.RUN_ERROR="RUN_ERROR",t.STEP_STARTED="STEP_STARTED",t.STEP_FINISHED="STEP_FINISHED",t.REASONING_START="REASONING_START",t.REASONING_MESSAGE_START="REASONING_MESSAGE_START",t.REASONING_MESSAGE_CONTENT="REASONING_MESSAGE_CONTENT",t.REASONING_MESSAGE_END="REASONING_MESSAGE_END",t.REASONING_MESSAGE_CHUNK="REASONING_MESSAGE_CHUNK",t.REASONING_END="REASONING_END",t.REASONING_ENCRYPTED_VALUE="REASONING_ENCRYPTED_VALUE",t})({}),X=d.object({type:d.nativeEnum(v),timestamp:d.number().optional(),rawEvent:d.any().optional()}).passthrough(),Of=X.extend({type:d.literal(v.TEXT_MESSAGE_START),messageId:d.string(),role:oc.default("assistant"),name:d.string().optional()}),ic=X.extend({type:d.literal(v.TEXT_MESSAGE_CONTENT),messageId:d.string(),delta:d.string()}),Mf=X.extend({type:d.literal(v.TEXT_MESSAGE_END),messageId:d.string()}),Lf=X.extend({type:d.literal(v.TEXT_MESSAGE_CHUNK),messageId:d.string().optional(),role:oc.optional(),delta:d.string().optional(),name:d.string().optional()}),Pf=X.extend({type:d.literal(v.THINKING_TEXT_MESSAGE_START)}),Df=ic.omit({messageId:!0,type:!0}).extend({type:d.literal(v.THINKING_TEXT_MESSAGE_CONTENT)}),Uf=X.extend({type:d.literal(v.THINKING_TEXT_MESSAGE_END)}),Hf=X.extend({type:d.literal(v.TOOL_CALL_START),toolCallId:d.string(),toolCallName:d.string(),parentMessageId:d.string().optional()}),zf=X.extend({type:d.literal(v.TOOL_CALL_ARGS),toolCallId:d.string(),delta:d.string()}),Gf=X.extend({type:d.literal(v.TOOL_CALL_END),toolCallId:d.string()}),Ff=X.extend({messageId:d.string(),type:d.literal(v.TOOL_CALL_RESULT),toolCallId:d.string(),content:d.string(),role:d.literal("tool").optional()}),$f=X.extend({type:d.literal(v.TOOL_CALL_CHUNK),toolCallId:d.string().optional(),toolCallName:d.string().optional(),parentMessageId:d.string().optional(),delta:d.string().optional()}),Vf=X.extend({type:d.literal(v.THINKING_START),title:d.string().optional()}),Bf=X.extend({type:d.literal(v.THINKING_END)}),jf=X.extend({type:d.literal(v.STATE_SNAPSHOT),snapshot:bf}),qf=X.extend({type:d.literal(v.STATE_DELTA),delta:d.array(d.any())}),Wf=X.extend({type:d.literal(v.MESSAGES_SNAPSHOT),messages:d.array(nc)}),Xf=X.extend({type:d.literal(v.ACTIVITY_SNAPSHOT),messageId:d.string(),activityType:d.string(),content:d.record(d.any()),replace:d.boolean().optional().default(!0)}),Kf=X.extend({type:d.literal(v.ACTIVITY_DELTA),messageId:d.string(),activityType:d.string(),patch:d.array(d.any())}),Yf=X.extend({type:d.literal(v.RAW),event:d.any(),source:d.string().optional()}),Zf=X.extend({type:d.literal(v.CUSTOM),name:d.string(),value:d.any()}),Jf=X.extend({type:d.literal(v.RUN_STARTED),threadId:d.string(),runId:d.string(),parentRunId:d.string().optional(),input:vf.optional()}),Qf=d.object({type:d.literal("success")}).strict(),em=d.object({type:d.literal("interrupt"),interrupts:d.array(mf).min(1)}).strict(),tm=d.discriminatedUnion("type",[Qf,em]),nm=X.extend({type:d.literal(v.RUN_FINISHED),threadId:d.string(),runId:d.string(),result:d.any().optional(),outcome:tm.nullable().optional().transform(t=>t??void 0)}),rm=X.extend({type:d.literal(v.RUN_ERROR),message:d.string(),code:d.string().optional()}),om=X.extend({type:d.literal(v.STEP_STARTED),stepName:d.string()}),im=X.extend({type:d.literal(v.STEP_FINISHED),stepName:d.string()}),sm=d.union([d.literal("tool-call"),d.literal("message")]),am=X.extend({type:d.literal(v.REASONING_START),messageId:d.string()}),lm=X.extend({type:d.literal(v.REASONING_MESSAGE_START),messageId:d.string(),role:d.literal("reasoning")}),cm=X.extend({type:d.literal(v.REASONING_MESSAGE_CONTENT),messageId:d.string(),delta:d.string()}),dm=X.extend({type:d.literal(v.REASONING_MESSAGE_END),messageId:d.string()}),um=X.extend({type:d.literal(v.REASONING_MESSAGE_CHUNK),messageId:d.string().optional(),delta:d.string().optional()}),pm=X.extend({type:d.literal(v.REASONING_END),messageId:d.string()}),hm=X.extend({type:d.literal(v.REASONING_ENCRYPTED_VALUE),subtype:sm,entityId:d.string(),encryptedValue:d.string()}),to=d.discriminatedUnion("type",[Of,ic,Mf,Lf,Vf,Bf,Pf,Df,Uf,Hf,zf,Gf,$f,Ff,jf,qf,Wf,Xf,Kf,Yf,Zf,Jf,nm,rm,om,im,am,lm,cm,dm,um,pm,hm]);var Vs={};os(Vs,{JsonPatchError:()=>he,_areEquals:()=>ir,applyOperation:()=>Yt,applyPatch:()=>lo,applyReducer:()=>bm,deepClone:()=>gm,getValueByPointer:()=>so,validate:()=>ac,validator:()=>ao});var fm=(function(){var t=function(e,n){return t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(r,o){r.__proto__=o}||function(r,o){for(var i in o)o.hasOwnProperty(i)&&(r[i]=o[i])},t(e,n)};return function(e,n){t(e,n);function r(){this.constructor=e}e.prototype=n===null?Object.create(n):(r.prototype=n.prototype,new r)}})(),mm=Object.prototype.hasOwnProperty;function ro(t,e){return mm.call(t,e)}function oo(t){if(Array.isArray(t)){for(var e=new Array(t.length),n=0;n<e.length;n++)e[n]=""+n;return e}if(Object.keys)return Object.keys(t);var r=[];for(var o in t)ro(t,o)&&r.push(o);return r}function Ee(t){switch(typeof t){case"object":return JSON.parse(JSON.stringify(t));case"undefined":return null;default:return t}}function io(t){for(var e=0,n=t.length,r;e<n;){if(r=t.charCodeAt(e),r>=48&&r<=57){e++;continue}return!1}return!0}function it(t){return t.indexOf("/")===-1&&t.indexOf("~")===-1?t:t.replace(/~/g,"~0").replace(/\//g,"~1")}function rr(t){return t.replace(/~1/g,"/").replace(/~0/g,"~")}function no(t){if(t===void 0)return!0;if(t){if(Array.isArray(t)){for(var e=0,n=t.length;e<n;e++)if(no(t[e]))return!0}else if(typeof t=="object"){for(var r=oo(t),o=r.length,i=0;i<o;i++)if(no(t[r[i]]))return!0}}return!1}function sc(t,e){var n=[t];for(var r in e){var o=typeof e[r]=="object"?JSON.stringify(e[r],null,2):e[r];typeof o<"u"&&n.push(r+": "+o)}return n.join(`
`)}var or=(function(t){fm(e,t);function e(n,r,o,i,s){var a=this.constructor,l=t.call(this,sc(n,{name:r,index:o,operation:i,tree:s}))||this;return l.name=r,l.index=o,l.operation=i,l.tree=s,Object.setPrototypeOf(l,a.prototype),l.message=sc(n,{name:r,index:o,operation:i,tree:s}),l}return e})(Error);var he=or,gm=Ee,Sn={add:function(t,e,n){return t[e]=this.value,{newDocument:n}},remove:function(t,e,n){var r=t[e];return delete t[e],{newDocument:n,removed:r}},replace:function(t,e,n){var r=t[e];return t[e]=this.value,{newDocument:n,removed:r}},move:function(t,e,n){var r=so(n,this.path);r&&(r=Ee(r));var o=Yt(n,{op:"remove",path:this.from}).removed;return Yt(n,{op:"add",path:this.path,value:o}),{newDocument:n,removed:r}},copy:function(t,e,n){var r=so(n,this.from);return Yt(n,{op:"add",path:this.path,value:Ee(r)}),{newDocument:n}},test:function(t,e,n){return{newDocument:n,test:ir(t[e],this.value)}},_get:function(t,e,n){return this.value=t[e],{newDocument:n}}},vm={add:function(t,e,n){return io(e)?t.splice(e,0,this.value):t[e]=this.value,{newDocument:n,index:e}},remove:function(t,e,n){var r=t.splice(e,1);return{newDocument:n,removed:r[0]}},replace:function(t,e,n){var r=t[e];return t[e]=this.value,{newDocument:n,removed:r}},move:Sn.move,copy:Sn.copy,test:Sn.test,_get:Sn._get};function so(t,e){if(e=="")return t;var n={op:"_get",path:e};return Yt(t,n),n.value}function Yt(t,e,n,r,o,i){if(n===void 0&&(n=!1),r===void 0&&(r=!0),o===void 0&&(o=!0),i===void 0&&(i=0),n&&(typeof n=="function"?n(e,0,t,e.path):ao(e,0)),e.path===""){var s={newDocument:t};if(e.op==="add")return s.newDocument=e.value,s;if(e.op==="replace")return s.newDocument=e.value,s.removed=t,s;if(e.op==="move"||e.op==="copy")return s.newDocument=so(t,e.from),e.op==="move"&&(s.removed=t),s;if(e.op==="test"){if(s.test=ir(t,e.value),s.test===!1)throw new he("Test operation failed","TEST_OPERATION_FAILED",i,e,t);return s.newDocument=t,s}else{if(e.op==="remove")return s.removed=t,s.newDocument=null,s;if(e.op==="_get")return e.value=t,s;if(n)throw new he("Operation `op` property is not one of operations defined in RFC-6902","OPERATION_OP_INVALID",i,e,t);return s}}else{r||(t=Ee(t));var a=e.path||"",l=a.split("/"),c=t,p=1,m=l.length,y=void 0,f=void 0,h=void 0;for(typeof n=="function"?h=n:h=ao;;){if(f=l[p],f&&f.indexOf("~")!=-1&&(f=rr(f)),o&&(f=="__proto__"||f=="prototype"&&p>0&&l[p-1]=="constructor"))throw new TypeError("JSON-Patch: modifying `__proto__` or `constructor/prototype` prop is banned for security reasons, if this was on purpose, please set `banPrototypeModifications` flag false and pass it to this function. More info in fast-json-patch README");if(n&&y===void 0&&(c[f]===void 0?y=l.slice(0,p).join("/"):p==m-1&&(y=e.path),y!==void 0&&h(e,0,t,y)),p++,Array.isArray(c)){if(f==="-")f=c.length;else{if(n&&!io(f))throw new he("Expected an unsigned base-10 integer value, making the new referenced value the array element with the zero-based index","OPERATION_PATH_ILLEGAL_ARRAY_INDEX",i,e,t);io(f)&&(f=~~f)}if(p>=m){if(n&&e.op==="add"&&f>c.length)throw new he("The specified index MUST NOT be greater than the number of elements in the array","OPERATION_VALUE_OUT_OF_BOUNDS",i,e,t);var s=vm[e.op].call(e,c,f,t);if(s.test===!1)throw new he("Test operation failed","TEST_OPERATION_FAILED",i,e,t);return s}}else if(p>=m){var s=Sn[e.op].call(e,c,f,t);if(s.test===!1)throw new he("Test operation failed","TEST_OPERATION_FAILED",i,e,t);return s}if(c=c[f],n&&p<m&&(!c||typeof c!="object"))throw new he("Cannot perform operation at the desired path","OPERATION_PATH_UNRESOLVABLE",i,e,t)}}}function lo(t,e,n,r,o){if(r===void 0&&(r=!0),o===void 0&&(o=!0),n&&!Array.isArray(e))throw new he("Patch sequence must be an array","SEQUENCE_NOT_AN_ARRAY");r||(t=Ee(t));for(var i=new Array(e.length),s=0,a=e.length;s<a;s++)i[s]=Yt(t,e[s],n,!0,o,s),t=i[s].newDocument;return i.newDocument=t,i}function bm(t,e,n){var r=Yt(t,e);if(r.test===!1)throw new he("Test operation failed","TEST_OPERATION_FAILED",n,e,t);return r.newDocument}function ao(t,e,n,r){if(typeof t!="object"||t===null||Array.isArray(t))throw new he("Operation is not an object","OPERATION_NOT_AN_OBJECT",e,t,n);if(Sn[t.op]){if(typeof t.path!="string")throw new he("Operation `path` property is not a string","OPERATION_PATH_INVALID",e,t,n);if(t.path.indexOf("/")!==0&&t.path.length>0)throw new he('Operation `path` property must start with "/"',"OPERATION_PATH_INVALID",e,t,n);if((t.op==="move"||t.op==="copy")&&typeof t.from!="string")throw new he("Operation `from` property is not present (applicable in `move` and `copy` operations)","OPERATION_FROM_REQUIRED",e,t,n);if((t.op==="add"||t.op==="replace"||t.op==="test")&&t.value===void 0)throw new he("Operation `value` property is not present (applicable in `add`, `replace` and `test` operations)","OPERATION_VALUE_REQUIRED",e,t,n);if((t.op==="add"||t.op==="replace"||t.op==="test")&&no(t.value))throw new he("Operation `value` property is not present (applicable in `add`, `replace` and `test` operations)","OPERATION_VALUE_CANNOT_CONTAIN_UNDEFINED",e,t,n);if(n){if(t.op=="add"){var o=t.path.split("/").length,i=r.split("/").length;if(o!==i+1&&o!==i)throw new he("Cannot perform an `add` operation at the desired path","OPERATION_PATH_CANNOT_ADD",e,t,n)}else if(t.op==="replace"||t.op==="remove"||t.op==="_get"){if(t.path!==r)throw new he("Cannot perform the operation at a path that does not exist","OPERATION_PATH_UNRESOLVABLE",e,t,n)}else if(t.op==="move"||t.op==="copy"){var s={op:"_get",path:t.from,value:void 0},a=ac([s],n);if(a&&a.name==="OPERATION_PATH_UNRESOLVABLE")throw new he("Cannot perform the operation from a path that does not exist","OPERATION_FROM_UNRESOLVABLE",e,t,n)}}}else throw new he("Operation `op` property is not one of operations defined in RFC-6902","OPERATION_OP_INVALID",e,t,n)}function ac(t,e,n){try{if(!Array.isArray(t))throw new he("Patch sequence must be an array","SEQUENCE_NOT_AN_ARRAY");if(e)lo(Ee(e),Ee(t),n||!0);else{n=n||ao;for(var r=0;r<t.length;r++)n(t[r],r,e,void 0)}}catch(o){if(o instanceof he)return o;throw o}}function ir(t,e){if(t===e)return!0;if(t&&e&&typeof t=="object"&&typeof e=="object"){var n=Array.isArray(t),r=Array.isArray(e),o,i,s;if(n&&r){if(i=t.length,i!=e.length)return!1;for(o=i;o--!==0;)if(!ir(t[o],e[o]))return!1;return!0}if(n!=r)return!1;var a=Object.keys(t);if(i=a.length,i!==Object.keys(e).length)return!1;for(o=i;o--!==0;)if(!e.hasOwnProperty(a[o]))return!1;for(o=i;o--!==0;)if(s=a[o],!ir(t[s],e[s]))return!1;return!0}return t!==t&&e!==e}var Ws={};os(Ws,{compare:()=>Am,generate:()=>Bs,observe:()=>Sm,unobserve:()=>Tm});var js=new WeakMap,ym=(function(){function t(e){this.observers=new Map,this.obj=e}return t})(),xm=(function(){function t(e,n){this.callback=e,this.observer=n}return t})();function _m(t){return js.get(t)}function Em(t,e){return t.observers.get(e)}function wm(t,e){t.observers.delete(e.callback)}function Tm(t,e){e.unobserve()}function Sm(t,e){var n=[],r,o=_m(t);if(!o)o=new ym(t),js.set(t,o);else{var i=Em(o,e);r=i&&i.observer}if(r)return r;if(r={},o.value=Ee(t),e){r.callback=e,r.next=null;var s=function(){Bs(r)},a=function(){clearTimeout(r.next),r.next=setTimeout(s)};typeof window<"u"&&(window.addEventListener("mouseup",a),window.addEventListener("keyup",a),window.addEventListener("mousedown",a),window.addEventListener("keydown",a),window.addEventListener("change",a))}return r.patches=n,r.object=t,r.unobserve=function(){Bs(r),clearTimeout(r.next),wm(o,r),typeof window<"u"&&(window.removeEventListener("mouseup",a),window.removeEventListener("keyup",a),window.removeEventListener("mousedown",a),window.removeEventListener("keydown",a),window.removeEventListener("change",a))},o.observers.set(e,new xm(e,r)),r}function Bs(t,e){e===void 0&&(e=!1);var n=js.get(t.object);qs(n.value,t.object,t.patches,"",e),t.patches.length&&lo(n.value,t.patches);var r=t.patches;return r.length>0&&(t.patches=[],t.callback&&t.callback(r)),r}function qs(t,e,n,r,o){if(e!==t){typeof e.toJSON=="function"&&(e=e.toJSON());for(var i=oo(e),s=oo(t),a=!1,l=!1,c=s.length-1;c>=0;c--){var p=s[c],m=t[p];if(ro(e,p)&&!(e[p]===void 0&&m!==void 0&&Array.isArray(e)===!1)){var y=e[p];typeof m=="object"&&m!=null&&typeof y=="object"&&y!=null&&Array.isArray(m)===Array.isArray(y)?qs(m,y,n,r+"/"+it(p),o):m!==y&&(a=!0,o&&n.push({op:"test",path:r+"/"+it(p),value:Ee(m)}),n.push({op:"replace",path:r+"/"+it(p),value:Ee(y)}))}else Array.isArray(t)===Array.isArray(e)?(o&&n.push({op:"test",path:r+"/"+it(p),value:Ee(m)}),n.push({op:"remove",path:r+"/"+it(p)}),l=!0):(o&&n.push({op:"test",path:r,value:t}),n.push({op:"replace",path:r,value:e}),a=!0)}if(!(!l&&i.length==s.length))for(var c=0;c<i.length;c++){var p=i[c];!ro(t,p)&&e[p]!==void 0&&n.push({op:"add",path:r+"/"+it(p),value:Ee(e[p])})}}}function Am(t,e,n){n===void 0&&(n=!1);var r=[];return qs(t,e,r,"",n),r}var co=Object.assign({},Vs,Ws,{JsonPatchError:or,deepClone:Ee,escapePathComponent:it,unescapePathComponent:rr});var Xs=function(t,e){return Xs=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(n,r){n.__proto__=r}||function(n,r){for(var o in r)Object.prototype.hasOwnProperty.call(r,o)&&(n[o]=r[o])},Xs(t,e)};function st(t,e){if(typeof e!="function"&&e!==null)throw new TypeError("Class extends value "+String(e)+" is not a constructor or null");Xs(t,e);function n(){this.constructor=t}t.prototype=e===null?Object.create(e):(n.prototype=e.prototype,new n)}function lc(t,e,n,r){function o(i){return i instanceof n?i:new n(function(s){s(i)})}return new(n||(n=Promise))(function(i,s){function a(p){try{c(r.next(p))}catch(m){s(m)}}function l(p){try{c(r.throw(p))}catch(m){s(m)}}function c(p){p.done?i(p.value):o(p.value).then(a,l)}c((r=r.apply(t,e||[])).next())})}function uo(t,e){var n={label:0,sent:function(){if(i[0]&1)throw i[1];return i[1]},trys:[],ops:[]},r,o,i,s=Object.create((typeof Iterator=="function"?Iterator:Object).prototype);return s.next=a(0),s.throw=a(1),s.return=a(2),typeof Symbol=="function"&&(s[Symbol.iterator]=function(){return this}),s;function a(c){return function(p){return l([c,p])}}function l(c){if(r)throw new TypeError("Generator is already executing.");for(;s&&(s=0,c[0]&&(n=0)),n;)try{if(r=1,o&&(i=c[0]&2?o.return:c[0]?o.throw||((i=o.return)&&i.call(o),0):o.next)&&!(i=i.call(o,c[1])).done)return i;switch(o=0,i&&(c=[c[0]&2,i.value]),c[0]){case 0:case 1:i=c;break;case 4:return n.label++,{value:c[1],done:!1};case 5:n.label++,o=c[1],c=[0];continue;case 7:c=n.ops.pop(),n.trys.pop();continue;default:if(i=n.trys,!(i=i.length>0&&i[i.length-1])&&(c[0]===6||c[0]===2)){n=0;continue}if(c[0]===3&&(!i||c[1]>i[0]&&c[1]<i[3])){n.label=c[1];break}if(c[0]===6&&n.label<i[1]){n.label=i[1],i=c;break}if(i&&n.label<i[2]){n.label=i[2],n.ops.push(c);break}i[2]&&n.ops.pop(),n.trys.pop();continue}c=e.call(t,n)}catch(p){c=[6,p],o=0}finally{r=i=0}if(c[0]&5)throw c[1];return{value:c[0]?c[1]:void 0,done:!0}}}function mt(t){var e=typeof Symbol=="function"&&Symbol.iterator,n=e&&t[e],r=0;if(n)return n.call(t);if(t&&typeof t.length=="number")return{next:function(){return t&&r>=t.length&&(t=void 0),{value:t&&t[r++],done:!t}}};throw new TypeError(e?"Object is not iterable.":"Symbol.iterator is not defined.")}function An(t,e){var n=typeof Symbol=="function"&&t[Symbol.iterator];if(!n)return t;var r=n.call(t),o,i=[],s;try{for(;(e===void 0||e-- >0)&&!(o=r.next()).done;)i.push(o.value)}catch(a){s={error:a}}finally{try{o&&!o.done&&(n=r.return)&&n.call(r)}finally{if(s)throw s.error}}return i}function kn(t,e,n){if(n||arguments.length===2)for(var r=0,o=e.length,i;r<o;r++)(i||!(r in e))&&(i||(i=Array.prototype.slice.call(e,0,r)),i[r]=e[r]);return t.concat(i||Array.prototype.slice.call(e))}function Zt(t){return this instanceof Zt?(this.v=t,this):new Zt(t)}function cc(t,e,n){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var r=n.apply(t,e||[]),o,i=[];return o=Object.create((typeof AsyncIterator=="function"?AsyncIterator:Object).prototype),a("next"),a("throw"),a("return",s),o[Symbol.asyncIterator]=function(){return this},o;function s(f){return function(h){return Promise.resolve(h).then(f,m)}}function a(f,h){r[f]&&(o[f]=function(g){return new Promise(function(x,S){i.push([f,g,x,S])>1||l(f,g)})},h&&(o[f]=h(o[f])))}function l(f,h){try{c(r[f](h))}catch(g){y(i[0][3],g)}}function c(f){f.value instanceof Zt?Promise.resolve(f.value.v).then(p,m):y(i[0][2],f)}function p(f){l("next",f)}function m(f){l("throw",f)}function y(f,h){f(h),i.shift(),i.length&&l(i[0][0],i[0][1])}}function dc(t){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var e=t[Symbol.asyncIterator],n;return e?e.call(t):(t=typeof mt=="function"?mt(t):t[Symbol.iterator](),n={},r("next"),r("throw"),r("return"),n[Symbol.asyncIterator]=function(){return this},n);function r(i){n[i]=t[i]&&function(s){return new Promise(function(a,l){s=t[i](s),o(a,l,s.done,s.value)})}}function o(i,s,a,l){Promise.resolve(l).then(function(c){i({value:c,done:a})},s)}}function V(t){return typeof t=="function"}function Cn(t){var e=function(r){Error.call(r),r.stack=new Error().stack},n=t(e);return n.prototype=Object.create(Error.prototype),n.prototype.constructor=n,n}var po=Cn(function(t){return function(n){t(this),this.message=n?n.length+` errors occurred during unsubscription:
`+n.map(function(r,o){return o+1+") "+r.toString()}).join(`
  `):"",this.name="UnsubscriptionError",this.errors=n}});function sr(t,e){if(t){var n=t.indexOf(e);0<=n&&t.splice(n,1)}}var In=(function(){function t(e){this.initialTeardown=e,this.closed=!1,this._parentage=null,this._finalizers=null}return t.prototype.unsubscribe=function(){var e,n,r,o,i;if(!this.closed){this.closed=!0;var s=this._parentage;if(s)if(this._parentage=null,Array.isArray(s))try{for(var a=mt(s),l=a.next();!l.done;l=a.next()){var c=l.value;c.remove(this)}}catch(g){e={error:g}}finally{try{l&&!l.done&&(n=a.return)&&n.call(a)}finally{if(e)throw e.error}}else s.remove(this);var p=this.initialTeardown;if(V(p))try{p()}catch(g){i=g instanceof po?g.errors:[g]}var m=this._finalizers;if(m){this._finalizers=null;try{for(var y=mt(m),f=y.next();!f.done;f=y.next()){var h=f.value;try{uc(h)}catch(g){i=i??[],g instanceof po?i=kn(kn([],An(i)),An(g.errors)):i.push(g)}}}catch(g){r={error:g}}finally{try{f&&!f.done&&(o=y.return)&&o.call(y)}finally{if(r)throw r.error}}}if(i)throw new po(i)}},t.prototype.add=function(e){var n;if(e&&e!==this)if(this.closed)uc(e);else{if(e instanceof t){if(e.closed||e._hasParent(this))return;e._addParent(this)}(this._finalizers=(n=this._finalizers)!==null&&n!==void 0?n:[]).push(e)}},t.prototype._hasParent=function(e){var n=this._parentage;return n===e||Array.isArray(n)&&n.includes(e)},t.prototype._addParent=function(e){var n=this._parentage;this._parentage=Array.isArray(n)?(n.push(e),n):n?[n,e]:e},t.prototype._removeParent=function(e){var n=this._parentage;n===e?this._parentage=null:Array.isArray(n)&&sr(n,e)},t.prototype.remove=function(e){var n=this._finalizers;n&&sr(n,e),e instanceof t&&e._removeParent(this)},t.EMPTY=(function(){var e=new t;return e.closed=!0,e})(),t})();var Ks=In.EMPTY;function ho(t){return t instanceof In||t&&"closed"in t&&V(t.remove)&&V(t.add)&&V(t.unsubscribe)}function uc(t){V(t)?t():t.unsubscribe()}var Xe={onUnhandledError:null,onStoppedNotification:null,Promise:void 0,useDeprecatedSynchronousErrorHandling:!1,useDeprecatedNextContext:!1};var Rn={setTimeout:function(t,e){for(var n=[],r=2;r<arguments.length;r++)n[r-2]=arguments[r];var o=Rn.delegate;return o?.setTimeout?o.setTimeout.apply(o,kn([t,e],An(n))):setTimeout.apply(void 0,kn([t,e],An(n)))},clearTimeout:function(t){var e=Rn.delegate;return(e?.clearTimeout||clearTimeout)(t)},delegate:void 0};function fo(t){Rn.setTimeout(function(){var e=Xe.onUnhandledError;if(e)e(t);else throw t})}function ar(){}var pc=(function(){return Ys("C",void 0,void 0)})();function hc(t){return Ys("E",void 0,t)}function fc(t){return Ys("N",t,void 0)}function Ys(t,e,n){return{kind:t,value:e,error:n}}var Jt=null;function Nn(t){if(Xe.useDeprecatedSynchronousErrorHandling){var e=!Jt;if(e&&(Jt={errorThrown:!1,error:null}),t(),e){var n=Jt,r=n.errorThrown,o=n.error;if(Jt=null,r)throw o}}else t()}function mc(t){Xe.useDeprecatedSynchronousErrorHandling&&Jt&&(Jt.errorThrown=!0,Jt.error=t)}var lr=(function(t){st(e,t);function e(n){var r=t.call(this)||this;return r.isStopped=!1,n?(r.destination=n,ho(n)&&n.add(r)):r.destination=Rm,r}return e.create=function(n,r,o){return new go(n,r,o)},e.prototype.next=function(n){this.isStopped?Js(fc(n),this):this._next(n)},e.prototype.error=function(n){this.isStopped?Js(hc(n),this):(this.isStopped=!0,this._error(n))},e.prototype.complete=function(){this.isStopped?Js(pc,this):(this.isStopped=!0,this._complete())},e.prototype.unsubscribe=function(){this.closed||(this.isStopped=!0,t.prototype.unsubscribe.call(this),this.destination=null)},e.prototype._next=function(n){this.destination.next(n)},e.prototype._error=function(n){try{this.destination.error(n)}finally{this.unsubscribe()}},e.prototype._complete=function(){try{this.destination.complete()}finally{this.unsubscribe()}},e})(In);var km=Function.prototype.bind;function Zs(t,e){return km.call(t,e)}var Cm=(function(){function t(e){this.partialObserver=e}return t.prototype.next=function(e){var n=this.partialObserver;if(n.next)try{n.next(e)}catch(r){mo(r)}},t.prototype.error=function(e){var n=this.partialObserver;if(n.error)try{n.error(e)}catch(r){mo(r)}else mo(e)},t.prototype.complete=function(){var e=this.partialObserver;if(e.complete)try{e.complete()}catch(n){mo(n)}},t})(),go=(function(t){st(e,t);function e(n,r,o){var i=t.call(this)||this,s;if(V(n)||!n)s={next:n??void 0,error:r??void 0,complete:o??void 0};else{var a;i&&Xe.useDeprecatedNextContext?(a=Object.create(n),a.unsubscribe=function(){return i.unsubscribe()},s={next:n.next&&Zs(n.next,a),error:n.error&&Zs(n.error,a),complete:n.complete&&Zs(n.complete,a)}):s=n}return i.destination=new Cm(s),i}return e})(lr);function mo(t){Xe.useDeprecatedSynchronousErrorHandling?mc(t):fo(t)}function Im(t){throw t}function Js(t,e){var n=Xe.onStoppedNotification;n&&Rn.setTimeout(function(){return n(t,e)})}var Rm={closed:!0,next:ar,error:Im,complete:ar};var On=(function(){return typeof Symbol=="function"&&Symbol.observable||"@@observable"})();function Mn(t){return t}function vo(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];return Qs(t)}function Qs(t){return t.length===0?Mn:t.length===1?t[0]:function(n){return t.reduce(function(r,o){return o(r)},n)}}var ne=(function(){function t(e){e&&(this._subscribe=e)}return t.prototype.lift=function(e){var n=new t;return n.source=this,n.operator=e,n},t.prototype.subscribe=function(e,n,r){var o=this,i=Om(e)?e:new go(e,n,r);return Nn(function(){var s=o,a=s.operator,l=s.source;i.add(a?a.call(i,l):l?o._subscribe(i):o._trySubscribe(i))}),i},t.prototype._trySubscribe=function(e){try{return this._subscribe(e)}catch(n){e.error(n)}},t.prototype.forEach=function(e,n){var r=this;return n=gc(n),new n(function(o,i){var s=new go({next:function(a){try{e(a)}catch(l){i(l),s.unsubscribe()}},error:i,complete:o});r.subscribe(s)})},t.prototype._subscribe=function(e){var n;return(n=this.source)===null||n===void 0?void 0:n.subscribe(e)},t.prototype[On]=function(){return this},t.prototype.pipe=function(){for(var e=[],n=0;n<arguments.length;n++)e[n]=arguments[n];return Qs(e)(this)},t.prototype.toPromise=function(e){var n=this;return e=gc(e),new e(function(r,o){var i;n.subscribe(function(s){return i=s},function(s){return o(s)},function(){return r(i)})})},t.create=function(e){return new t(e)},t})();function gc(t){var e;return(e=t??Xe.Promise)!==null&&e!==void 0?e:Promise}function Nm(t){return t&&V(t.next)&&V(t.error)&&V(t.complete)}function Om(t){return t&&t instanceof lr||Nm(t)&&ho(t)}function Mm(t){return V(t?.lift)}function fe(t){return function(e){if(Mm(e))return e.lift(function(n){try{return t(n,this)}catch(r){this.error(r)}});throw new TypeError("Unable to lift unknown Observable type")}}function ge(t,e,n,r,o){return new Lm(t,e,n,r,o)}var Lm=(function(t){st(e,t);function e(n,r,o,i,s,a){var l=t.call(this,n)||this;return l.onFinalize=s,l.shouldUnsubscribe=a,l._next=r?function(c){try{r(c)}catch(p){n.error(p)}}:t.prototype._next,l._error=i?function(c){try{i(c)}catch(p){n.error(p)}finally{this.unsubscribe()}}:t.prototype._error,l._complete=o?function(){try{o()}catch(c){n.error(c)}finally{this.unsubscribe()}}:t.prototype._complete,l}return e.prototype.unsubscribe=function(){var n;if(!this.shouldUnsubscribe||this.shouldUnsubscribe()){var r=this.closed;t.prototype.unsubscribe.call(this),!r&&((n=this.onFinalize)===null||n===void 0||n.call(this))}},e})(lr);var vc=Cn(function(t){return function(){t(this),this.name="ObjectUnsubscribedError",this.message="object unsubscribed"}});var at=(function(t){st(e,t);function e(){var n=t.call(this)||this;return n.closed=!1,n.currentObservers=null,n.observers=[],n.isStopped=!1,n.hasError=!1,n.thrownError=null,n}return e.prototype.lift=function(n){var r=new bc(this,this);return r.operator=n,r},e.prototype._throwIfClosed=function(){if(this.closed)throw new vc},e.prototype.next=function(n){var r=this;Nn(function(){var o,i;if(r._throwIfClosed(),!r.isStopped){r.currentObservers||(r.currentObservers=Array.from(r.observers));try{for(var s=mt(r.currentObservers),a=s.next();!a.done;a=s.next()){var l=a.value;l.next(n)}}catch(c){o={error:c}}finally{try{a&&!a.done&&(i=s.return)&&i.call(s)}finally{if(o)throw o.error}}}})},e.prototype.error=function(n){var r=this;Nn(function(){if(r._throwIfClosed(),!r.isStopped){r.hasError=r.isStopped=!0,r.thrownError=n;for(var o=r.observers;o.length;)o.shift().error(n)}})},e.prototype.complete=function(){var n=this;Nn(function(){if(n._throwIfClosed(),!n.isStopped){n.isStopped=!0;for(var r=n.observers;r.length;)r.shift().complete()}})},e.prototype.unsubscribe=function(){this.isStopped=this.closed=!0,this.observers=this.currentObservers=null},Object.defineProperty(e.prototype,"observed",{get:function(){var n;return((n=this.observers)===null||n===void 0?void 0:n.length)>0},enumerable:!1,configurable:!0}),e.prototype._trySubscribe=function(n){return this._throwIfClosed(),t.prototype._trySubscribe.call(this,n)},e.prototype._subscribe=function(n){return this._throwIfClosed(),this._checkFinalizedStatuses(n),this._innerSubscribe(n)},e.prototype._innerSubscribe=function(n){var r=this,o=this,i=o.hasError,s=o.isStopped,a=o.observers;return i||s?Ks:(this.currentObservers=null,a.push(n),new In(function(){r.currentObservers=null,sr(a,n)}))},e.prototype._checkFinalizedStatuses=function(n){var r=this,o=r.hasError,i=r.thrownError,s=r.isStopped;o?n.error(i):s&&n.complete()},e.prototype.asObservable=function(){var n=new ne;return n.source=this,n},e.create=function(n,r){return new bc(n,r)},e})(ne);var bc=(function(t){st(e,t);function e(n,r){var o=t.call(this)||this;return o.destination=n,o.source=r,o}return e.prototype.next=function(n){var r,o;(o=(r=this.destination)===null||r===void 0?void 0:r.next)===null||o===void 0||o.call(r,n)},e.prototype.error=function(n){var r,o;(o=(r=this.destination)===null||r===void 0?void 0:r.error)===null||o===void 0||o.call(r,n)},e.prototype.complete=function(){var n,r;(r=(n=this.destination)===null||n===void 0?void 0:n.complete)===null||r===void 0||r.call(n)},e.prototype._subscribe=function(n){var r,o;return(o=(r=this.source)===null||r===void 0?void 0:r.subscribe(n))!==null&&o!==void 0?o:Ks},e})(at);var ea={now:function(){return(ea.delegate||Date).now()},delegate:void 0};var bo=(function(t){st(e,t);function e(n,r,o){n===void 0&&(n=1/0),r===void 0&&(r=1/0),o===void 0&&(o=ea);var i=t.call(this)||this;return i._bufferSize=n,i._windowTime=r,i._timestampProvider=o,i._buffer=[],i._infiniteTimeWindow=!0,i._infiniteTimeWindow=r===1/0,i._bufferSize=Math.max(1,n),i._windowTime=Math.max(1,r),i}return e.prototype.next=function(n){var r=this,o=r.isStopped,i=r._buffer,s=r._infiniteTimeWindow,a=r._timestampProvider,l=r._windowTime;o||(i.push(n),!s&&i.push(a.now()+l)),this._trimBuffer(),t.prototype.next.call(this,n)},e.prototype._subscribe=function(n){this._throwIfClosed(),this._trimBuffer();for(var r=this._innerSubscribe(n),o=this,i=o._infiniteTimeWindow,s=o._buffer,a=s.slice(),l=0;l<a.length&&!n.closed;l+=i?1:2)n.next(a[l]);return this._checkFinalizedStatuses(n),r},e.prototype._trimBuffer=function(){var n=this,r=n._bufferSize,o=n._timestampProvider,i=n._buffer,s=n._infiniteTimeWindow,a=(s?1:2)*r;if(r<1/0&&a<i.length&&i.splice(0,i.length-a),!s){for(var l=o.now(),c=0,p=1;p<i.length&&i[p]<=l;p+=2)c=p;c&&i.splice(0,c+1)}},e})(at);var yo=new ne(function(t){return t.complete()});function yc(t){return t&&V(t.schedule)}function Pm(t){return t[t.length-1]}function xc(t){return yc(Pm(t))?t.pop():void 0}var xo=(function(t){return t&&typeof t.length=="number"&&typeof t!="function"});function _o(t){return V(t?.then)}function Eo(t){return V(t[On])}function wo(t){return Symbol.asyncIterator&&V(t?.[Symbol.asyncIterator])}function To(t){return new TypeError("You provided "+(t!==null&&typeof t=="object"?"an invalid object":"'"+t+"'")+" where a stream was expected. You can provide an Observable, Promise, ReadableStream, Array, AsyncIterable, or Iterable.")}function Dm(){return typeof Symbol!="function"||!Symbol.iterator?"@@iterator":Symbol.iterator}var So=Dm();function Ao(t){return V(t?.[So])}function ko(t){return cc(this,arguments,function(){var n,r,o,i;return uo(this,function(s){switch(s.label){case 0:n=t.getReader(),s.label=1;case 1:s.trys.push([1,,9,10]),s.label=2;case 2:return[4,Zt(n.read())];case 3:return r=s.sent(),o=r.value,i=r.done,i?[4,Zt(void 0)]:[3,5];case 4:return[2,s.sent()];case 5:return[4,Zt(o)];case 6:return[4,s.sent()];case 7:return s.sent(),[3,2];case 8:return[3,10];case 9:return n.releaseLock(),[7];case 10:return[2]}})})}function Co(t){return V(t?.getReader)}function ve(t){if(t instanceof ne)return t;if(t!=null){if(Eo(t))return Um(t);if(xo(t))return Hm(t);if(_o(t))return zm(t);if(wo(t))return _c(t);if(Ao(t))return Gm(t);if(Co(t))return Fm(t)}throw To(t)}function Um(t){return new ne(function(e){var n=t[On]();if(V(n.subscribe))return n.subscribe(e);throw new TypeError("Provided object does not correctly implement Symbol.observable")})}function Hm(t){return new ne(function(e){for(var n=0;n<t.length&&!e.closed;n++)e.next(t[n]);e.complete()})}function zm(t){return new ne(function(e){t.then(function(n){e.closed||(e.next(n),e.complete())},function(n){return e.error(n)}).then(null,fo)})}function Gm(t){return new ne(function(e){var n,r;try{for(var o=mt(t),i=o.next();!i.done;i=o.next()){var s=i.value;if(e.next(s),e.closed)return}}catch(a){n={error:a}}finally{try{i&&!i.done&&(r=o.return)&&r.call(o)}finally{if(n)throw n.error}}e.complete()})}function _c(t){return new ne(function(e){$m(t,e).catch(function(n){return e.error(n)})})}function Fm(t){return _c(ko(t))}function $m(t,e){var n,r,o,i;return lc(this,void 0,void 0,function(){var s,a;return uo(this,function(l){switch(l.label){case 0:l.trys.push([0,5,6,11]),n=dc(t),l.label=1;case 1:return[4,n.next()];case 2:if(r=l.sent(),!!r.done)return[3,4];if(s=r.value,e.next(s),e.closed)return[2];l.label=3;case 3:return[3,1];case 4:return[3,11];case 5:return a=l.sent(),o={error:a},[3,11];case 6:return l.trys.push([6,,9,10]),r&&!r.done&&(i=n.return)?[4,i.call(n)]:[3,8];case 7:l.sent(),l.label=8;case 8:return[3,10];case 9:if(o)throw o.error;return[7];case 10:return[7];case 11:return e.complete(),[2]}})})}function Ve(t,e,n,r,o){r===void 0&&(r=0),o===void 0&&(o=!1);var i=e.schedule(function(){n(),o?t.add(this.schedule(null,r)):this.unsubscribe()},r);if(t.add(i),!o)return i}function Io(t,e){return e===void 0&&(e=0),fe(function(n,r){n.subscribe(ge(r,function(o){return Ve(r,t,function(){return r.next(o)},e)},function(){return Ve(r,t,function(){return r.complete()},e)},function(o){return Ve(r,t,function(){return r.error(o)},e)}))})}function Ro(t,e){return e===void 0&&(e=0),fe(function(n,r){r.add(t.schedule(function(){return n.subscribe(r)},e))})}function Ec(t,e){return ve(t).pipe(Ro(e),Io(e))}function wc(t,e){return ve(t).pipe(Ro(e),Io(e))}function Tc(t,e){return new ne(function(n){var r=0;return e.schedule(function(){r===t.length?n.complete():(n.next(t[r++]),n.closed||this.schedule())})})}function Sc(t,e){return new ne(function(n){var r;return Ve(n,e,function(){r=t[So](),Ve(n,e,function(){var o,i,s;try{o=r.next(),i=o.value,s=o.done}catch(a){n.error(a);return}s?n.complete():n.next(i)},0,!0)}),function(){return V(r?.return)&&r.return()}})}function No(t,e){if(!t)throw new Error("Iterable cannot be null");return new ne(function(n){Ve(n,e,function(){var r=t[Symbol.asyncIterator]();Ve(n,e,function(){r.next().then(function(o){o.done?n.complete():n.next(o.value)})},0,!0)})})}function Ac(t,e){return No(ko(t),e)}function kc(t,e){if(t!=null){if(Eo(t))return Ec(t,e);if(xo(t))return Tc(t,e);if(_o(t))return wc(t,e);if(wo(t))return No(t,e);if(Ao(t))return Sc(t,e);if(Co(t))return Ac(t,e)}throw To(t)}function Qt(t,e){return e?kc(t,e):ve(t)}function ue(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];var n=xc(t);return Qt(t,n)}function re(t,e){var n=V(t)?t:function(){return t},r=function(o){return o.error(n())};return new ne(e?function(o){return e.schedule(r,0,o)}:r)}var Cc=Cn(function(t){return function(){t(this),this.name="EmptyError",this.message="no elements in sequence"}});function Oo(t,e){var n=typeof e=="object";return new Promise(function(r,o){var i=!1,s;t.subscribe({next:function(a){s=a,i=!0},error:o,complete:function(){i?r(s):n?r(e.defaultValue):o(new Cc)}})})}function en(t,e){return fe(function(n,r){var o=0;n.subscribe(ge(r,function(i){r.next(t.call(e,i,o++))}))})}function Ic(t,e,n,r,o,i,s,a){var l=[],c=0,p=0,m=!1,y=function(){m&&!l.length&&!c&&e.complete()},f=function(g){return c<r?h(g):l.push(g)},h=function(g){i&&e.next(g),c++;var x=!1;ve(n(g,p++)).subscribe(ge(e,function(S){o?.(S),i?f(S):e.next(S)},function(){x=!0},void 0,function(){if(x)try{c--;for(var S=function(){var w=l.shift();s?Ve(e,s,function(){return h(w)}):h(w)};l.length&&c<r;)S();y()}catch(w){e.error(w)}}))};return t.subscribe(ge(e,f,function(){m=!0,y()})),function(){a?.()}}function Le(t,e,n){return n===void 0&&(n=1/0),V(e)?Le(function(r,o){return en(function(i,s){return e(r,i,o,s)})(ve(t(r,o)))},n):(typeof e=="number"&&(n=e),fe(function(r,o){return Ic(r,o,t,n)}))}function ta(t){return t===void 0&&(t=1/0),Le(Mn,t)}function Mo(t){return new ne(function(e){ve(t()).subscribe(e)})}function cr(t){return fe(function(e,n){var r=null,o=!1,i;r=e.subscribe(ge(n,void 0,void 0,function(s){i=ve(t(s,cr(t)(e))),r?(r.unsubscribe(),r=null,i.subscribe(n)):o=!0})),o&&(r.unsubscribe(),r=null,i.subscribe(n))})}function Lo(t,e){return V(e)?Le(t,e,1):Le(t,1)}function na(t){return fe(function(e,n){var r=!1;e.subscribe(ge(n,function(o){r=!0,n.next(o)},function(){r||n.next(t),n.complete()}))})}function tn(t){return fe(function(e,n){try{e.subscribe(n)}finally{n.add(t)}})}function ra(t,e){return fe(function(n,r){var o=null,i=0,s=!1,a=function(){return s&&!o&&r.complete()};n.subscribe(ge(r,function(l){o?.unsubscribe();var c=0,p=i++;ve(t(l,p)).subscribe(o=ge(r,function(m){return r.next(e?e(l,m,p,c++):m)},function(){o=null,a()}))},function(){s=!0,a()}))})}function Po(t){return fe(function(e,n){ve(t).subscribe(ge(n,function(){return n.complete()},ar)),!n.closed&&e.subscribe(n)})}function oa(t,e,n){var r=V(t)||e||n?{next:t,error:e,complete:n}:t;return r?fe(function(o,i){var s;(s=r.subscribe)===null||s===void 0||s.call(r);var a=!0;o.subscribe(ge(i,function(l){var c;(c=r.next)===null||c===void 0||c.call(r,l),i.next(l)},function(){var l;a=!1,(l=r.complete)===null||l===void 0||l.call(r),i.complete()},function(l){var c;a=!1,(c=r.error)===null||c===void 0||c.call(r,l),i.error(l)},function(){var l,c;a&&((l=r.unsubscribe)===null||l===void 0||l.call(r)),(c=r.finalize)===null||c===void 0||c.call(r)}))}):Mn}function Rc(t){return` \r
	`.indexOf(t)>=0}function Do(t){for(var e=["topLevel"],n=0,r,o,i,s=function(w){return e.push(w)},a=function(w){return e[e.length-1]=w},l=function(w){r==null&&(r=n,o=e.length,i=w)},c=function(w){w===i&&(r=void 0,o=void 0,i=void 0)},p=function(){return e.pop()},m=function(){return n--},y=function(w){if("0"<=w&&w<="9"){s("number");return}switch(w){case'"':s("string");return;case"-":s("numberNeedsDigit");return;case"t":s("true");return;case"f":s("false");return;case"n":s("null");return;case"[":s("arrayNeedsValue");return;case"{":s("objectNeedsKey");return}},f=t.length;n<f;n++){var h=t[n];switch(e[e.length-1]){case"topLevel":y(h);break;case"string":switch(h){case'"':p();break;case"\\":l("stringEscape"),s("stringEscaped");break}break;case"stringEscaped":h==="u"?s("stringUnicode"):(c("stringEscape"),p());break;case"stringUnicode":n-t.lastIndexOf("u",n)===4&&(c("stringEscape"),p());break;case"number":h==="."?a("numberNeedsDigit"):h==="e"||h==="E"?a("numberNeedsExponent"):(h<"0"||h>"9")&&(m(),p());break;case"numberNeedsDigit":a("number");break;case"numberNeedsExponent":a(h==="+"||h==="-"?"numberNeedsDigit":"number");break;case"true":case"false":case"null":(h<"a"||h>"z")&&(m(),p());break;case"arrayNeedsValue":h==="]"?p():Rc(h)||(c("collectionItem"),a("arrayNeedsComma"),y(h));break;case"arrayNeedsComma":h==="]"?p():h===","&&(l("collectionItem"),a("arrayNeedsValue"));break;case"objectNeedsKey":h==="}"?p():h==='"'&&(l("collectionItem"),a("objectNeedsColon"),s("string"));break;case"objectNeedsColon":h===":"&&a("objectNeedsValue");break;case"objectNeedsValue":Rc(h)||(c("collectionItem"),a("objectNeedsComma"),y(h));break;case"objectNeedsComma":h==="}"?p():h===","&&(l("collectionItem"),a("objectNeedsKey"));break}}o!=null&&(e.length=o);for(var g=[r!=null?t.slice(0,r):t],x=function(w){return g.push(w.slice(t.length-t.lastIndexOf(w[0])))},S=e.length-1;S>=0;S--)switch(e[S]){case"string":g.push('"');break;case"numberNeedsDigit":case"numberNeedsExponent":g.push("0");break;case"true":x("true");break;case"false":x("false");break;case"null":x("null");break;case"arrayNeedsValue":case"arrayNeedsComma":g.push("]");break;case"objectNeedsKey":case"objectNeedsColon":case"objectNeedsValue":case"objectNeedsComma":g.push("}");break}return g.join("")}function Oc(){let t=0,e=0;for(let r=0;r<28;r+=7){let o=this.buf[this.pos++];if(t|=(o&127)<<r,(o&128)==0)return this.assertBounds(),[t,e]}let n=this.buf[this.pos++];if(t|=(n&15)<<28,e=(n&112)>>4,(n&128)==0)return this.assertBounds(),[t,e];for(let r=3;r<=31;r+=7){let o=this.buf[this.pos++];if(e|=(o&127)<<r,(o&128)==0)return this.assertBounds(),[t,e]}throw new Error("invalid varint")}function Ho(t,e,n){for(let i=0;i<28;i=i+7){let s=t>>>i,a=!(!(s>>>7)&&e==0),l=(a?s|128:s)&255;if(n.push(l),!a)return}let r=t>>>28&15|(e&7)<<4,o=e>>3!=0;if(n.push((o?r|128:r)&255),!!o){for(let i=3;i<31;i=i+7){let s=e>>>i,a=!!(s>>>7),l=(a?s|128:s)&255;if(n.push(l),!a)return}n.push(e>>>31&1)}}var Uo=4294967296;function ia(t){let e=t[0]==="-";e&&(t=t.slice(1));let n=1e6,r=0,o=0;function i(s,a){let l=Number(t.slice(s,a));o*=n,r=r*n+l,r>=Uo&&(o=o+(r/Uo|0),r=r%Uo)}return i(-24,-18),i(-18,-12),i(-12,-6),i(-6),e?Lc(r,o):aa(r,o)}function Mc(t,e){let n=aa(t,e),r=n.hi&2147483648;r&&(n=Lc(n.lo,n.hi));let o=sa(n.lo,n.hi);return r?"-"+o:o}function sa(t,e){if({lo:t,hi:e}=Vm(t,e),e<=2097151)return String(Uo*e+t);let n=t&16777215,r=(t>>>24|e<<8)&16777215,o=e>>16&65535,i=n+r*6777216+o*6710656,s=r+o*8147497,a=o*2,l=1e7;return i>=l&&(s+=Math.floor(i/l),i%=l),s>=l&&(a+=Math.floor(s/l),s%=l),a.toString()+Nc(s)+Nc(i)}function Vm(t,e){return{lo:t>>>0,hi:e>>>0}}function aa(t,e){return{lo:t|0,hi:e|0}}function Lc(t,e){return e=~e,t?t=~t+1:e+=1,aa(t,e)}var Nc=t=>{let e=String(t);return"0000000".slice(e.length)+e};function la(t,e){if(t>=0){for(;t>127;)e.push(t&127|128),t=t>>>7;e.push(t)}else{for(let n=0;n<9;n++)e.push(t&127|128),t=t>>7;e.push(1)}}function Pc(){let t=this.buf[this.pos++],e=t&127;if((t&128)==0)return this.assertBounds(),e;if(t=this.buf[this.pos++],e|=(t&127)<<7,(t&128)==0)return this.assertBounds(),e;if(t=this.buf[this.pos++],e|=(t&127)<<14,(t&128)==0)return this.assertBounds(),e;if(t=this.buf[this.pos++],e|=(t&127)<<21,(t&128)==0)return this.assertBounds(),e;t=this.buf[this.pos++],e|=(t&15)<<28;for(let n=5;(t&128)!==0&&n<10;n++)t=this.buf[this.pos++];if((t&128)!=0)throw new Error("invalid varint");return this.assertBounds(),e>>>0}var Ke=Bm();function Bm(){let t=new DataView(new ArrayBuffer(8));if(typeof BigInt=="function"&&typeof t.getBigInt64=="function"&&typeof t.getBigUint64=="function"&&typeof t.setBigInt64=="function"&&typeof t.setBigUint64=="function"&&(!!globalThis.Deno||!!globalThis.Bun||typeof process!="object"||typeof process.env!="object"||process.env.BUF_BIGINT_DISABLE!=="1")){let n=BigInt("-9223372036854775808"),r=BigInt("9223372036854775807"),o=BigInt("0"),i=BigInt("18446744073709551615");return{zero:BigInt(0),supported:!0,parse(s){let a=typeof s=="bigint"?s:BigInt(s);if(a>r||a<n)throw new Error(`invalid int64: ${s}`);return a},uParse(s){let a=typeof s=="bigint"?s:BigInt(s);if(a>i||a<o)throw new Error(`invalid uint64: ${s}`);return a},enc(s){return t.setBigInt64(0,this.parse(s),!0),{lo:t.getInt32(0,!0),hi:t.getInt32(4,!0)}},uEnc(s){return t.setBigInt64(0,this.uParse(s),!0),{lo:t.getInt32(0,!0),hi:t.getInt32(4,!0)}},dec(s,a){return t.setInt32(0,s,!0),t.setInt32(4,a,!0),t.getBigInt64(0,!0)},uDec(s,a){return t.setInt32(0,s,!0),t.setInt32(4,a,!0),t.getBigUint64(0,!0)}}}return{zero:"0",supported:!1,parse(n){return typeof n!="string"&&(n=n.toString()),Dc(n),n},uParse(n){return typeof n!="string"&&(n=n.toString()),Uc(n),n},enc(n){return typeof n!="string"&&(n=n.toString()),Dc(n),ia(n)},uEnc(n){return typeof n!="string"&&(n=n.toString()),Uc(n),ia(n)},dec(n,r){return Mc(n,r)},uDec(n,r){return sa(n,r)}}}function Dc(t){if(!/^-?[0-9]+$/.test(t))throw new Error("invalid int64: "+t)}function Uc(t){if(!/^[0-9]+$/.test(t))throw new Error("invalid uint64: "+t)}var ca=Symbol.for("@bufbuild/protobuf/text-encoding");function da(){if(globalThis[ca]==null){let t=new globalThis.TextEncoder,e=new globalThis.TextDecoder,n;globalThis[ca]={encodeUtf8(r){return t.encode(r)},decodeUtf8(r,o){return o?(n===void 0&&(n=new globalThis.TextDecoder("utf-8",{fatal:!0})),n.decode(r)):e.decode(r)},checkUtf8(r){try{return encodeURIComponent(r),!0}catch{return!1}}}}return globalThis[ca]}var kt;(function(t){t[t.Varint=0]="Varint",t[t.Bit64=1]="Bit64",t[t.LengthDelimited=2]="LengthDelimited",t[t.StartGroup=3]="StartGroup",t[t.EndGroup=4]="EndGroup",t[t.Bit32=5]="Bit32"})(kt||(kt={}));var jm=34028234663852886e22,qm=-34028234663852886e22,Wm=4294967295,Xm=2147483647,Km=-2147483648,F=class{constructor(e=da().encodeUtf8){this.encodeUtf8=e,this.stack=[],this.chunks=[],this.buf=[]}finish(){this.buf.length&&(this.chunks.push(new Uint8Array(this.buf)),this.buf=[]);let e=0;for(let o=0;o<this.chunks.length;o++)e+=this.chunks[o].length;let n=new Uint8Array(e),r=0;for(let o=0;o<this.chunks.length;o++)n.set(this.chunks[o],r),r+=this.chunks[o].length;return this.chunks=[],n}fork(){return this.stack.push({chunks:this.chunks,buf:this.buf}),this.chunks=[],this.buf=[],this}join(){let e=this.finish(),n=this.stack.pop();if(!n)throw new Error("invalid state, fork stack empty");return this.chunks=n.chunks,this.buf=n.buf,this.uint32(e.byteLength),this.raw(e)}tag(e,n){return this.uint32((e<<3|n)>>>0)}raw(e){return this.buf.length&&(this.chunks.push(new Uint8Array(this.buf)),this.buf=[]),this.chunks.push(e),this}uint32(e){for(Hc(e);e>127;)this.buf.push(e&127|128),e=e>>>7;return this.buf.push(e),this}int32(e){return ua(e),la(e,this.buf),this}bool(e){return this.buf.push(e?1:0),this}bytes(e){return this.uint32(e.byteLength),this.raw(e)}string(e){let n=this.encodeUtf8(e);return this.uint32(n.byteLength),this.raw(n)}float(e){Ym(e);let n=new Uint8Array(4);return new DataView(n.buffer).setFloat32(0,e,!0),this.raw(n)}double(e){let n=new Uint8Array(8);return new DataView(n.buffer).setFloat64(0,e,!0),this.raw(n)}fixed32(e){Hc(e);let n=new Uint8Array(4);return new DataView(n.buffer).setUint32(0,e,!0),this.raw(n)}sfixed32(e){ua(e);let n=new Uint8Array(4);return new DataView(n.buffer).setInt32(0,e,!0),this.raw(n)}sint32(e){return ua(e),e=(e<<1^e>>31)>>>0,la(e,this.buf),this}sfixed64(e){let n=new Uint8Array(8),r=new DataView(n.buffer),o=Ke.enc(e);return r.setInt32(0,o.lo,!0),r.setInt32(4,o.hi,!0),this.raw(n)}fixed64(e){let n=new Uint8Array(8),r=new DataView(n.buffer),o=Ke.uEnc(e);return r.setInt32(0,o.lo,!0),r.setInt32(4,o.hi,!0),this.raw(n)}int64(e){let n=Ke.enc(e);return Ho(n.lo,n.hi,this.buf),this}sint64(e){let n=Ke.enc(e),r=n.hi>>31,o=n.lo<<1^r,i=(n.hi<<1|n.lo>>>31)^r;return Ho(o,i,this.buf),this}uint64(e){let n=Ke.uEnc(e);return Ho(n.lo,n.hi,this.buf),this}},A=class{constructor(e,n=da().decodeUtf8){this.decodeUtf8=n,this.varint64=Oc,this.uint32=Pc,this.buf=e,this.len=e.length,this.pos=0,this.view=new DataView(e.buffer,e.byteOffset,e.byteLength)}tag(){let e=this.pos,n=this.uint32(),r=this.pos-e;if(r>5||r==5&&this.buf[this.pos-1]>15)throw new Error("illegal tag: varint overflows uint32");let o=n>>>3,i=n&7;if(o<=0||i>5)throw new Error("illegal tag: field no "+o+" wire type "+i);return[o,i]}skip(e,n,r=100){let o=this.pos;switch(e){case kt.Varint:for(;this.buf[this.pos++]&128;);break;case kt.Bit64:this.pos+=4;case kt.Bit32:this.pos+=4;break;case kt.LengthDelimited:let i=this.uint32();this.pos+=i;break;case kt.StartGroup:if(r<=0)throw new Error("maximum recursion depth reached");for(;;){let[s,a]=this.tag();if(a===kt.EndGroup){if(n!==void 0&&s!==n)throw new Error("invalid end group tag");break}this.skip(a,s,r-1)}break;default:throw new Error("cant skip wire type "+e)}return this.assertBounds(),this.buf.subarray(o,this.pos)}assertBounds(){if(this.pos>this.len)throw new RangeError("premature EOF")}int32(){return this.uint32()|0}sint32(){let e=this.uint32();return e>>>1^-(e&1)}int64(){return Ke.dec(...this.varint64())}uint64(){return Ke.uDec(...this.varint64())}sint64(){let[e,n]=this.varint64(),r=-(e&1);return e=(e>>>1|(n&1)<<31)^r,n=n>>>1^r,Ke.dec(e,n)}bool(){let[e,n]=this.varint64();return e!==0||n!==0}fixed32(){return this.view.getUint32((this.pos+=4)-4,!0)}sfixed32(){return this.view.getInt32((this.pos+=4)-4,!0)}fixed64(){return Ke.uDec(this.sfixed32(),this.sfixed32())}sfixed64(){return Ke.dec(this.sfixed32(),this.sfixed32())}float(){return this.view.getFloat32((this.pos+=4)-4,!0)}double(){return this.view.getFloat64((this.pos+=8)-8,!0)}bytes(){let e=this.uint32(),n=this.pos;return this.pos+=e,this.assertBounds(),this.buf.subarray(n,n+e)}string(e){return this.decodeUtf8(this.bytes(),e)}};function ua(t){if(typeof t=="string")t=Number(t);else if(typeof t!="number")throw new Error("invalid int32: "+typeof t);if(!Number.isInteger(t)||t>Xm||t<Km)throw new Error("invalid int32: "+t)}function Hc(t){if(typeof t=="string")t=Number(t);else if(typeof t!="number")throw new Error("invalid uint32: "+typeof t);if(!Number.isInteger(t)||t>Wm||t<0)throw new Error("invalid uint32: "+t)}function Ym(t){if(typeof t=="string"){let e=t;if(t=Number(t),Number.isNaN(t)&&e!=="NaN")throw new Error("invalid float32: "+e)}else if(typeof t!="number")throw new Error("invalid float32: "+typeof t);if(Number.isFinite(t)&&(t>jm||t<qm))throw new Error("invalid float32: "+t)}var Zm=(function(t){return t[t.NULL_VALUE=0]="NULL_VALUE",t[t.UNRECOGNIZED=-1]="UNRECOGNIZED",t})({});function pa(){return{fields:{}}}var dr={encode(t,e=new F){return Object.entries(t.fields).forEach(([n,r])=>{r!==void 0&&ma.encode({key:n,value:r},e.uint32(10).fork()).join()}),e},decode(t,e){let n=t instanceof A?t:new A(t),r=e===void 0?n.len:n.pos+e,o=pa();for(;n.pos<r;){let i=n.uint32();switch(i>>>3){case 1:{if(i!==10)break;let s=ma.decode(n,n.uint32());s.value!==void 0&&(o.fields[s.key]=s.value);continue}}if((i&7)===4||i===0)break;n.skip(i&7)}return o},create(t){return dr.fromPartial(t??{})},fromPartial(t){let e=pa();return e.fields=Object.entries(t.fields??{}).reduce((n,[r,o])=>(o!==void 0&&(n[r]=o),n),{}),e},wrap(t){let e=pa();if(t!==void 0)for(let n of Object.keys(t))e.fields[n]=t[n];return e},unwrap(t){let e={};if(t.fields)for(let n of Object.keys(t.fields))e[n]=t.fields[n];return e}};function zc(){return{key:"",value:void 0}}var ma={encode(t,e=new F){return t.key!==""&&e.uint32(10).string(t.key),t.value!==void 0&&O.encode(O.wrap(t.value),e.uint32(18).fork()).join(),e},decode(t,e){let n=t instanceof A?t:new A(t),r=e===void 0?n.len:n.pos+e,o=zc();for(;n.pos<r;){let i=n.uint32();switch(i>>>3){case 1:if(i!==10)break;o.key=n.string();continue;case 2:if(i!==18)break;o.value=O.unwrap(O.decode(n,n.uint32()));continue}if((i&7)===4||i===0)break;n.skip(i&7)}return o},create(t){return ma.fromPartial(t??{})},fromPartial(t){let e=zc();return e.key=t.key??"",e.value=t.value??void 0,e}};function ha(){return{nullValue:void 0,numberValue:void 0,stringValue:void 0,boolValue:void 0,structValue:void 0,listValue:void 0}}var O={encode(t,e=new F){return t.nullValue!==void 0&&e.uint32(8).int32(t.nullValue),t.numberValue!==void 0&&e.uint32(17).double(t.numberValue),t.stringValue!==void 0&&e.uint32(26).string(t.stringValue),t.boolValue!==void 0&&e.uint32(32).bool(t.boolValue),t.structValue!==void 0&&dr.encode(dr.wrap(t.structValue),e.uint32(42).fork()).join(),t.listValue!==void 0&&ur.encode(ur.wrap(t.listValue),e.uint32(50).fork()).join(),e},decode(t,e){let n=t instanceof A?t:new A(t),r=e===void 0?n.len:n.pos+e,o=ha();for(;n.pos<r;){let i=n.uint32();switch(i>>>3){case 1:if(i!==8)break;o.nullValue=n.int32();continue;case 2:if(i!==17)break;o.numberValue=n.double();continue;case 3:if(i!==26)break;o.stringValue=n.string();continue;case 4:if(i!==32)break;o.boolValue=n.bool();continue;case 5:if(i!==42)break;o.structValue=dr.unwrap(dr.decode(n,n.uint32()));continue;case 6:if(i!==50)break;o.listValue=ur.unwrap(ur.decode(n,n.uint32()));continue}if((i&7)===4||i===0)break;n.skip(i&7)}return o},create(t){return O.fromPartial(t??{})},fromPartial(t){let e=ha();return e.nullValue=t.nullValue??void 0,e.numberValue=t.numberValue??void 0,e.stringValue=t.stringValue??void 0,e.boolValue=t.boolValue??void 0,e.structValue=t.structValue??void 0,e.listValue=t.listValue??void 0,e},wrap(t){let e=ha();if(t===null)e.nullValue=Zm.NULL_VALUE;else if(typeof t=="boolean")e.boolValue=t;else if(typeof t=="number")e.numberValue=t;else if(typeof t=="string")e.stringValue=t;else if(globalThis.Array.isArray(t))e.listValue=t;else if(typeof t=="object")e.structValue=t;else if(typeof t<"u")throw new globalThis.Error("Unsupported any value type: "+typeof t);return e},unwrap(t){if(t.stringValue!==void 0)return t.stringValue;if(t?.numberValue!==void 0)return t.numberValue;if(t?.boolValue!==void 0)return t.boolValue;if(t?.structValue!==void 0)return t.structValue;if(t?.listValue!==void 0)return t.listValue;if(t?.nullValue!==void 0)return null}};function fa(){return{values:[]}}var ur={encode(t,e=new F){for(let n of t.values)O.encode(O.wrap(n),e.uint32(10).fork()).join();return e},decode(t,e){let n=t instanceof A?t:new A(t),r=e===void 0?n.len:n.pos+e,o=fa();for(;n.pos<r;){let i=n.uint32();switch(i>>>3){case 1:if(i!==10)break;o.values.push(O.unwrap(O.decode(n,n.uint32())));continue}if((i&7)===4||i===0)break;n.skip(i&7)}return o},create(t){return ur.fromPartial(t??{})},fromPartial(t){let e=fa();return e.values=t.values?.map(n=>n)||[],e},wrap(t){let e=fa();return e.values=t??[],e},unwrap(t){return t?.hasOwnProperty("values")&&globalThis.Array.isArray(t.values)?t.values:t}},Jm=(function(t){return t[t.ADD=0]="ADD",t[t.REMOVE=1]="REMOVE",t[t.REPLACE=2]="REPLACE",t[t.MOVE=3]="MOVE",t[t.COPY=4]="COPY",t[t.TEST=5]="TEST",t[t.UNRECOGNIZED=-1]="UNRECOGNIZED",t})({});function Gc(){return{op:0,path:"",from:void 0,value:void 0}}var Go={encode(t,e=new F){return t.op!==0&&e.uint32(8).int32(t.op),t.path!==""&&e.uint32(18).string(t.path),t.from!==void 0&&e.uint32(26).string(t.from),t.value!==void 0&&O.encode(O.wrap(t.value),e.uint32(34).fork()).join(),e},decode(t,e){let n=t instanceof A?t:new A(t),r=e===void 0?n.len:n.pos+e,o=Gc();for(;n.pos<r;){let i=n.uint32();switch(i>>>3){case 1:if(i!==8)break;o.op=n.int32();continue;case 2:if(i!==18)break;o.path=n.string();continue;case 3:if(i!==26)break;o.from=n.string();continue;case 4:if(i!==34)break;o.value=O.unwrap(O.decode(n,n.uint32()));continue}if((i&7)===4||i===0)break;n.skip(i&7)}return o},create(t){return Go.fromPartial(t??{})},fromPartial(t){let e=Gc();return e.op=t.op??0,e.path=t.path??"",e.from=t.from??void 0,e.value=t.value??void 0,e}};function Fc(){return{id:"",type:"",function:void 0}}var Fo={encode(t,e=new F){return t.id!==""&&e.uint32(10).string(t.id),t.type!==""&&e.uint32(18).string(t.type),t.function!==void 0&&$o.encode(t.function,e.uint32(26).fork()).join(),e},decode(t,e){let n=t instanceof A?t:new A(t),r=e===void 0?n.len:n.pos+e,o=Fc();for(;n.pos<r;){let i=n.uint32();switch(i>>>3){case 1:if(i!==10)break;o.id=n.string();continue;case 2:if(i!==18)break;o.type=n.string();continue;case 3:if(i!==26)break;o.function=$o.decode(n,n.uint32());continue}if((i&7)===4||i===0)break;n.skip(i&7)}return o},create(t){return Fo.fromPartial(t??{})},fromPartial(t){let e=Fc();return e.id=t.id??"",e.type=t.type??"",e.function=t.function!==void 0&&t.function!==null?$o.fromPartial(t.function):void 0,e}};function $c(){return{name:"",arguments:""}}var $o={encode(t,e=new F){return t.name!==""&&e.uint32(10).string(t.name),t.arguments!==""&&e.uint32(18).string(t.arguments),e},decode(t,e){let n=t instanceof A?t:new A(t),r=e===void 0?n.len:n.pos+e,o=$c();for(;n.pos<r;){let i=n.uint32();switch(i>>>3){case 1:if(i!==10)break;o.name=n.string();continue;case 2:if(i!==18)break;o.arguments=n.string();continue}if((i&7)===4||i===0)break;n.skip(i&7)}return o},create(t){return $o.fromPartial(t??{})},fromPartial(t){let e=$c();return e.name=t.name??"",e.arguments=t.arguments??"",e}};function Vc(){return{value:"",mimeType:""}}var Vo={encode(t,e=new F){return t.value!==""&&e.uint32(10).string(t.value),t.mimeType!==""&&e.uint32(18).string(t.mimeType),e},decode(t,e){let n=t instanceof A?t:new A(t),r=e===void 0?n.len:n.pos+e,o=Vc();for(;n.pos<r;){let i=n.uint32();switch(i>>>3){case 1:if(i!==10)break;o.value=n.string();continue;case 2:if(i!==18)break;o.mimeType=n.string();continue}if((i&7)===4||i===0)break;n.skip(i&7)}return o},create(t){return Vo.fromPartial(t??{})},fromPartial(t){let e=Vc();return e.value=t.value??"",e.mimeType=t.mimeType??"",e}};function Bc(){return{value:"",mimeType:void 0}}var Bo={encode(t,e=new F){return t.value!==""&&e.uint32(10).string(t.value),t.mimeType!==void 0&&e.uint32(18).string(t.mimeType),e},decode(t,e){let n=t instanceof A?t:new A(t),r=e===void 0?n.len:n.pos+e,o=Bc();for(;n.pos<r;){let i=n.uint32();switch(i>>>3){case 1:if(i!==10)break;o.value=n.string();continue;case 2:if(i!==18)break;o.mimeType=n.string();continue}if((i&7)===4||i===0)break;n.skip(i&7)}return o},create(t){return Bo.fromPartial(t??{})},fromPartial(t){let e=Bc();return e.value=t.value??"",e.mimeType=t.mimeType??void 0,e}};function jc(){return{data:void 0,url:void 0}}var Ue={encode(t,e=new F){return t.data!==void 0&&Vo.encode(t.data,e.uint32(10).fork()).join(),t.url!==void 0&&Bo.encode(t.url,e.uint32(18).fork()).join(),e},decode(t,e){let n=t instanceof A?t:new A(t),r=e===void 0?n.len:n.pos+e,o=jc();for(;n.pos<r;){let i=n.uint32();switch(i>>>3){case 1:if(i!==10)break;o.data=Vo.decode(n,n.uint32());continue;case 2:if(i!==18)break;o.url=Bo.decode(n,n.uint32());continue}if((i&7)===4||i===0)break;n.skip(i&7)}return o},create(t){return Ue.fromPartial(t??{})},fromPartial(t){let e=jc();return e.data=t.data!==void 0&&t.data!==null?Vo.fromPartial(t.data):void 0,e.url=t.url!==void 0&&t.url!==null?Bo.fromPartial(t.url):void 0,e}};function qc(){return{text:""}}var jo={encode(t,e=new F){return t.text!==""&&e.uint32(10).string(t.text),e},decode(t,e){let n=t instanceof A?t:new A(t),r=e===void 0?n.len:n.pos+e,o=qc();for(;n.pos<r;){let i=n.uint32();switch(i>>>3){case 1:if(i!==10)break;o.text=n.string();continue}if((i&7)===4||i===0)break;n.skip(i&7)}return o},create(t){return jo.fromPartial(t??{})},fromPartial(t){let e=qc();return e.text=t.text??"",e}};function Wc(){return{source:void 0,metadata:void 0}}var qo={encode(t,e=new F){return t.source!==void 0&&Ue.encode(t.source,e.uint32(10).fork()).join(),t.metadata!==void 0&&O.encode(O.wrap(t.metadata),e.uint32(18).fork()).join(),e},decode(t,e){let n=t instanceof A?t:new A(t),r=e===void 0?n.len:n.pos+e,o=Wc();for(;n.pos<r;){let i=n.uint32();switch(i>>>3){case 1:if(i!==10)break;o.source=Ue.decode(n,n.uint32());continue;case 2:if(i!==18)break;o.metadata=O.unwrap(O.decode(n,n.uint32()));continue}if((i&7)===4||i===0)break;n.skip(i&7)}return o},create(t){return qo.fromPartial(t??{})},fromPartial(t){let e=Wc();return e.source=t.source!==void 0&&t.source!==null?Ue.fromPartial(t.source):void 0,e.metadata=t.metadata??void 0,e}};function Xc(){return{source:void 0,metadata:void 0}}var Wo={encode(t,e=new F){return t.source!==void 0&&Ue.encode(t.source,e.uint32(10).fork()).join(),t.metadata!==void 0&&O.encode(O.wrap(t.metadata),e.uint32(18).fork()).join(),e},decode(t,e){let n=t instanceof A?t:new A(t),r=e===void 0?n.len:n.pos+e,o=Xc();for(;n.pos<r;){let i=n.uint32();switch(i>>>3){case 1:if(i!==10)break;o.source=Ue.decode(n,n.uint32());continue;case 2:if(i!==18)break;o.metadata=O.unwrap(O.decode(n,n.uint32()));continue}if((i&7)===4||i===0)break;n.skip(i&7)}return o},create(t){return Wo.fromPartial(t??{})},fromPartial(t){let e=Xc();return e.source=t.source!==void 0&&t.source!==null?Ue.fromPartial(t.source):void 0,e.metadata=t.metadata??void 0,e}};function Kc(){return{source:void 0,metadata:void 0}}var Xo={encode(t,e=new F){return t.source!==void 0&&Ue.encode(t.source,e.uint32(10).fork()).join(),t.metadata!==void 0&&O.encode(O.wrap(t.metadata),e.uint32(18).fork()).join(),e},decode(t,e){let n=t instanceof A?t:new A(t),r=e===void 0?n.len:n.pos+e,o=Kc();for(;n.pos<r;){let i=n.uint32();switch(i>>>3){case 1:if(i!==10)break;o.source=Ue.decode(n,n.uint32());continue;case 2:if(i!==18)break;o.metadata=O.unwrap(O.decode(n,n.uint32()));continue}if((i&7)===4||i===0)break;n.skip(i&7)}return o},create(t){return Xo.fromPartial(t??{})},fromPartial(t){let e=Kc();return e.source=t.source!==void 0&&t.source!==null?Ue.fromPartial(t.source):void 0,e.metadata=t.metadata??void 0,e}};function Yc(){return{source:void 0,metadata:void 0}}var Ko={encode(t,e=new F){return t.source!==void 0&&Ue.encode(t.source,e.uint32(10).fork()).join(),t.metadata!==void 0&&O.encode(O.wrap(t.metadata),e.uint32(18).fork()).join(),e},decode(t,e){let n=t instanceof A?t:new A(t),r=e===void 0?n.len:n.pos+e,o=Yc();for(;n.pos<r;){let i=n.uint32();switch(i>>>3){case 1:if(i!==10)break;o.source=Ue.decode(n,n.uint32());continue;case 2:if(i!==18)break;o.metadata=O.unwrap(O.decode(n,n.uint32()));continue}if((i&7)===4||i===0)break;n.skip(i&7)}return o},create(t){return Ko.fromPartial(t??{})},fromPartial(t){let e=Yc();return e.source=t.source!==void 0&&t.source!==null?Ue.fromPartial(t.source):void 0,e.metadata=t.metadata??void 0,e}};function Zc(){return{text:void 0,image:void 0,audio:void 0,video:void 0,document:void 0}}var Yo={encode(t,e=new F){return t.text!==void 0&&jo.encode(t.text,e.uint32(10).fork()).join(),t.image!==void 0&&qo.encode(t.image,e.uint32(18).fork()).join(),t.audio!==void 0&&Wo.encode(t.audio,e.uint32(26).fork()).join(),t.video!==void 0&&Xo.encode(t.video,e.uint32(34).fork()).join(),t.document!==void 0&&Ko.encode(t.document,e.uint32(42).fork()).join(),e},decode(t,e){let n=t instanceof A?t:new A(t),r=e===void 0?n.len:n.pos+e,o=Zc();for(;n.pos<r;){let i=n.uint32();switch(i>>>3){case 1:if(i!==10)break;o.text=jo.decode(n,n.uint32());continue;case 2:if(i!==18)break;o.image=qo.decode(n,n.uint32());continue;case 3:if(i!==26)break;o.audio=Wo.decode(n,n.uint32());continue;case 4:if(i!==34)break;o.video=Xo.decode(n,n.uint32());continue;case 5:if(i!==42)break;o.document=Ko.decode(n,n.uint32());continue}if((i&7)===4||i===0)break;n.skip(i&7)}return o},create(t){return Yo.fromPartial(t??{})},fromPartial(t){let e=Zc();return e.text=t.text!==void 0&&t.text!==null?jo.fromPartial(t.text):void 0,e.image=t.image!==void 0&&t.image!==null?qo.fromPartial(t.image):void 0,e.audio=t.audio!==void 0&&t.audio!==null?Wo.fromPartial(t.audio):void 0,e.video=t.video!==void 0&&t.video!==null?Xo.fromPartial(t.video):void 0,e.document=t.document!==void 0&&t.document!==null?Ko.fromPartial(t.document):void 0,e}};function Jc(){return{id:"",role:"",content:void 0,name:void 0,toolCalls:[],toolCallId:void 0,error:void 0,contentParts:[]}}var Zo={encode(t,e=new F){t.id!==""&&e.uint32(10).string(t.id),t.role!==""&&e.uint32(18).string(t.role),t.content!==void 0&&e.uint32(26).string(t.content),t.name!==void 0&&e.uint32(34).string(t.name);for(let n of t.toolCalls)Fo.encode(n,e.uint32(42).fork()).join();t.toolCallId!==void 0&&e.uint32(50).string(t.toolCallId),t.error!==void 0&&e.uint32(58).string(t.error);for(let n of t.contentParts)Yo.encode(n,e.uint32(66).fork()).join();return e},decode(t,e){let n=t instanceof A?t:new A(t),r=e===void 0?n.len:n.pos+e,o=Jc();for(;n.pos<r;){let i=n.uint32();switch(i>>>3){case 1:if(i!==10)break;o.id=n.string();continue;case 2:if(i!==18)break;o.role=n.string();continue;case 3:if(i!==26)break;o.content=n.string();continue;case 4:if(i!==34)break;o.name=n.string();continue;case 5:if(i!==42)break;o.toolCalls.push(Fo.decode(n,n.uint32()));continue;case 6:if(i!==50)break;o.toolCallId=n.string();continue;case 7:if(i!==58)break;o.error=n.string();continue;case 8:if(i!==66)break;o.contentParts.push(Yo.decode(n,n.uint32()));continue}if((i&7)===4||i===0)break;n.skip(i&7)}return o},create(t){return Zo.fromPartial(t??{})},fromPartial(t){let e=Jc();return e.id=t.id??"",e.role=t.role??"",e.content=t.content??void 0,e.name=t.name??void 0,e.toolCalls=t.toolCalls?.map(n=>Fo.fromPartial(n))||[],e.toolCallId=t.toolCallId??void 0,e.error=t.error??void 0,e.contentParts=t.contentParts?.map(n=>Yo.fromPartial(n))||[],e}};function Qc(){return{id:"",reason:"",message:void 0,toolCallId:void 0,responseSchema:void 0,expiresAt:void 0,metadata:void 0}}var Jo={encode(t,e=new F){return t.id!==""&&e.uint32(10).string(t.id),t.reason!==""&&e.uint32(18).string(t.reason),t.message!==void 0&&e.uint32(26).string(t.message),t.toolCallId!==void 0&&e.uint32(34).string(t.toolCallId),t.responseSchema!==void 0&&O.encode(O.wrap(t.responseSchema),e.uint32(42).fork()).join(),t.expiresAt!==void 0&&e.uint32(50).string(t.expiresAt),t.metadata!==void 0&&O.encode(O.wrap(t.metadata),e.uint32(58).fork()).join(),e},decode(t,e){let n=t instanceof A?t:new A(t),r=e===void 0?n.len:n.pos+e,o=Qc();for(;n.pos<r;){let i=n.uint32();switch(i>>>3){case 1:if(i!==10)break;o.id=n.string();continue;case 2:if(i!==18)break;o.reason=n.string();continue;case 3:if(i!==26)break;o.message=n.string();continue;case 4:if(i!==34)break;o.toolCallId=n.string();continue;case 5:if(i!==42)break;o.responseSchema=O.unwrap(O.decode(n,n.uint32()));continue;case 6:if(i!==50)break;o.expiresAt=n.string();continue;case 7:if(i!==58)break;o.metadata=O.unwrap(O.decode(n,n.uint32()));continue}if((i&7)===4||i===0)break;n.skip(i&7)}return o},create(t){return Jo.fromPartial(t??{})},fromPartial(t){let e=Qc();return e.id=t.id??"",e.reason=t.reason??"",e.message=t.message??void 0,e.toolCallId=t.toolCallId??void 0,e.responseSchema=t.responseSchema??void 0,e.expiresAt=t.expiresAt??void 0,e.metadata=t.metadata??void 0,e}},Qm=(function(t){return t[t.TEXT_MESSAGE_START=0]="TEXT_MESSAGE_START",t[t.TEXT_MESSAGE_CONTENT=1]="TEXT_MESSAGE_CONTENT",t[t.TEXT_MESSAGE_END=2]="TEXT_MESSAGE_END",t[t.TOOL_CALL_START=3]="TOOL_CALL_START",t[t.TOOL_CALL_ARGS=4]="TOOL_CALL_ARGS",t[t.TOOL_CALL_END=5]="TOOL_CALL_END",t[t.STATE_SNAPSHOT=6]="STATE_SNAPSHOT",t[t.STATE_DELTA=7]="STATE_DELTA",t[t.MESSAGES_SNAPSHOT=8]="MESSAGES_SNAPSHOT",t[t.RAW=9]="RAW",t[t.CUSTOM=10]="CUSTOM",t[t.RUN_STARTED=11]="RUN_STARTED",t[t.RUN_FINISHED=12]="RUN_FINISHED",t[t.RUN_ERROR=13]="RUN_ERROR",t[t.STEP_STARTED=14]="STEP_STARTED",t[t.STEP_FINISHED=15]="STEP_FINISHED",t[t.UNRECOGNIZED=-1]="UNRECOGNIZED",t})({});function ed(){return{type:0,timestamp:void 0,rawEvent:void 0}}var M={encode(t,e=new F){return t.type!==0&&e.uint32(8).int32(t.type),t.timestamp!==void 0&&e.uint32(16).int64(t.timestamp),t.rawEvent!==void 0&&O.encode(O.wrap(t.rawEvent),e.uint32(26).fork()).join(),e},decode(t,e){let n=t instanceof A?t:new A(t),r=e===void 0?n.len:n.pos+e,o=ed();for(;n.pos<r;){let i=n.uint32();switch(i>>>3){case 1:if(i!==8)break;o.type=n.int32();continue;case 2:if(i!==16)break;o.timestamp=eg(n.int64());continue;case 3:if(i!==26)break;o.rawEvent=O.unwrap(O.decode(n,n.uint32()));continue}if((i&7)===4||i===0)break;n.skip(i&7)}return o},create(t){return M.fromPartial(t??{})},fromPartial(t){let e=ed();return e.type=t.type??0,e.timestamp=t.timestamp??void 0,e.rawEvent=t.rawEvent??void 0,e}};function td(){return{baseEvent:void 0,messageId:"",role:void 0,name:void 0}}var Qo={encode(t,e=new F){return t.baseEvent!==void 0&&M.encode(t.baseEvent,e.uint32(10).fork()).join(),t.messageId!==""&&e.uint32(18).string(t.messageId),t.role!==void 0&&e.uint32(26).string(t.role),t.name!==void 0&&e.uint32(34).string(t.name),e},decode(t,e){let n=t instanceof A?t:new A(t),r=e===void 0?n.len:n.pos+e,o=td();for(;n.pos<r;){let i=n.uint32();switch(i>>>3){case 1:if(i!==10)break;o.baseEvent=M.decode(n,n.uint32());continue;case 2:if(i!==18)break;o.messageId=n.string();continue;case 3:if(i!==26)break;o.role=n.string();continue;case 4:if(i!==34)break;o.name=n.string();continue}if((i&7)===4||i===0)break;n.skip(i&7)}return o},create(t){return Qo.fromPartial(t??{})},fromPartial(t){let e=td();return e.baseEvent=t.baseEvent!==void 0&&t.baseEvent!==null?M.fromPartial(t.baseEvent):void 0,e.messageId=t.messageId??"",e.role=t.role??void 0,e.name=t.name??void 0,e}};function nd(){return{baseEvent:void 0,messageId:"",delta:""}}var ei={encode(t,e=new F){return t.baseEvent!==void 0&&M.encode(t.baseEvent,e.uint32(10).fork()).join(),t.messageId!==""&&e.uint32(18).string(t.messageId),t.delta!==""&&e.uint32(26).string(t.delta),e},decode(t,e){let n=t instanceof A?t:new A(t),r=e===void 0?n.len:n.pos+e,o=nd();for(;n.pos<r;){let i=n.uint32();switch(i>>>3){case 1:if(i!==10)break;o.baseEvent=M.decode(n,n.uint32());continue;case 2:if(i!==18)break;o.messageId=n.string();continue;case 3:if(i!==26)break;o.delta=n.string();continue}if((i&7)===4||i===0)break;n.skip(i&7)}return o},create(t){return ei.fromPartial(t??{})},fromPartial(t){let e=nd();return e.baseEvent=t.baseEvent!==void 0&&t.baseEvent!==null?M.fromPartial(t.baseEvent):void 0,e.messageId=t.messageId??"",e.delta=t.delta??"",e}};function rd(){return{baseEvent:void 0,messageId:""}}var ti={encode(t,e=new F){return t.baseEvent!==void 0&&M.encode(t.baseEvent,e.uint32(10).fork()).join(),t.messageId!==""&&e.uint32(18).string(t.messageId),e},decode(t,e){let n=t instanceof A?t:new A(t),r=e===void 0?n.len:n.pos+e,o=rd();for(;n.pos<r;){let i=n.uint32();switch(i>>>3){case 1:if(i!==10)break;o.baseEvent=M.decode(n,n.uint32());continue;case 2:if(i!==18)break;o.messageId=n.string();continue}if((i&7)===4||i===0)break;n.skip(i&7)}return o},create(t){return ti.fromPartial(t??{})},fromPartial(t){let e=rd();return e.baseEvent=t.baseEvent!==void 0&&t.baseEvent!==null?M.fromPartial(t.baseEvent):void 0,e.messageId=t.messageId??"",e}};function od(){return{baseEvent:void 0,toolCallId:"",toolCallName:"",parentMessageId:void 0}}var ni={encode(t,e=new F){return t.baseEvent!==void 0&&M.encode(t.baseEvent,e.uint32(10).fork()).join(),t.toolCallId!==""&&e.uint32(18).string(t.toolCallId),t.toolCallName!==""&&e.uint32(26).string(t.toolCallName),t.parentMessageId!==void 0&&e.uint32(34).string(t.parentMessageId),e},decode(t,e){let n=t instanceof A?t:new A(t),r=e===void 0?n.len:n.pos+e,o=od();for(;n.pos<r;){let i=n.uint32();switch(i>>>3){case 1:if(i!==10)break;o.baseEvent=M.decode(n,n.uint32());continue;case 2:if(i!==18)break;o.toolCallId=n.string();continue;case 3:if(i!==26)break;o.toolCallName=n.string();continue;case 4:if(i!==34)break;o.parentMessageId=n.string();continue}if((i&7)===4||i===0)break;n.skip(i&7)}return o},create(t){return ni.fromPartial(t??{})},fromPartial(t){let e=od();return e.baseEvent=t.baseEvent!==void 0&&t.baseEvent!==null?M.fromPartial(t.baseEvent):void 0,e.toolCallId=t.toolCallId??"",e.toolCallName=t.toolCallName??"",e.parentMessageId=t.parentMessageId??void 0,e}};function id(){return{baseEvent:void 0,toolCallId:"",delta:""}}var ri={encode(t,e=new F){return t.baseEvent!==void 0&&M.encode(t.baseEvent,e.uint32(10).fork()).join(),t.toolCallId!==""&&e.uint32(18).string(t.toolCallId),t.delta!==""&&e.uint32(26).string(t.delta),e},decode(t,e){let n=t instanceof A?t:new A(t),r=e===void 0?n.len:n.pos+e,o=id();for(;n.pos<r;){let i=n.uint32();switch(i>>>3){case 1:if(i!==10)break;o.baseEvent=M.decode(n,n.uint32());continue;case 2:if(i!==18)break;o.toolCallId=n.string();continue;case 3:if(i!==26)break;o.delta=n.string();continue}if((i&7)===4||i===0)break;n.skip(i&7)}return o},create(t){return ri.fromPartial(t??{})},fromPartial(t){let e=id();return e.baseEvent=t.baseEvent!==void 0&&t.baseEvent!==null?M.fromPartial(t.baseEvent):void 0,e.toolCallId=t.toolCallId??"",e.delta=t.delta??"",e}};function sd(){return{baseEvent:void 0,toolCallId:""}}var oi={encode(t,e=new F){return t.baseEvent!==void 0&&M.encode(t.baseEvent,e.uint32(10).fork()).join(),t.toolCallId!==""&&e.uint32(18).string(t.toolCallId),e},decode(t,e){let n=t instanceof A?t:new A(t),r=e===void 0?n.len:n.pos+e,o=sd();for(;n.pos<r;){let i=n.uint32();switch(i>>>3){case 1:if(i!==10)break;o.baseEvent=M.decode(n,n.uint32());continue;case 2:if(i!==18)break;o.toolCallId=n.string();continue}if((i&7)===4||i===0)break;n.skip(i&7)}return o},create(t){return oi.fromPartial(t??{})},fromPartial(t){let e=sd();return e.baseEvent=t.baseEvent!==void 0&&t.baseEvent!==null?M.fromPartial(t.baseEvent):void 0,e.toolCallId=t.toolCallId??"",e}};function ad(){return{baseEvent:void 0,snapshot:void 0}}var ii={encode(t,e=new F){return t.baseEvent!==void 0&&M.encode(t.baseEvent,e.uint32(10).fork()).join(),t.snapshot!==void 0&&O.encode(O.wrap(t.snapshot),e.uint32(18).fork()).join(),e},decode(t,e){let n=t instanceof A?t:new A(t),r=e===void 0?n.len:n.pos+e,o=ad();for(;n.pos<r;){let i=n.uint32();switch(i>>>3){case 1:if(i!==10)break;o.baseEvent=M.decode(n,n.uint32());continue;case 2:if(i!==18)break;o.snapshot=O.unwrap(O.decode(n,n.uint32()));continue}if((i&7)===4||i===0)break;n.skip(i&7)}return o},create(t){return ii.fromPartial(t??{})},fromPartial(t){let e=ad();return e.baseEvent=t.baseEvent!==void 0&&t.baseEvent!==null?M.fromPartial(t.baseEvent):void 0,e.snapshot=t.snapshot??void 0,e}};function ld(){return{baseEvent:void 0,delta:[]}}var si={encode(t,e=new F){t.baseEvent!==void 0&&M.encode(t.baseEvent,e.uint32(10).fork()).join();for(let n of t.delta)Go.encode(n,e.uint32(18).fork()).join();return e},decode(t,e){let n=t instanceof A?t:new A(t),r=e===void 0?n.len:n.pos+e,o=ld();for(;n.pos<r;){let i=n.uint32();switch(i>>>3){case 1:if(i!==10)break;o.baseEvent=M.decode(n,n.uint32());continue;case 2:if(i!==18)break;o.delta.push(Go.decode(n,n.uint32()));continue}if((i&7)===4||i===0)break;n.skip(i&7)}return o},create(t){return si.fromPartial(t??{})},fromPartial(t){let e=ld();return e.baseEvent=t.baseEvent!==void 0&&t.baseEvent!==null?M.fromPartial(t.baseEvent):void 0,e.delta=t.delta?.map(n=>Go.fromPartial(n))||[],e}};function cd(){return{baseEvent:void 0,messages:[]}}var ai={encode(t,e=new F){t.baseEvent!==void 0&&M.encode(t.baseEvent,e.uint32(10).fork()).join();for(let n of t.messages)Zo.encode(n,e.uint32(18).fork()).join();return e},decode(t,e){let n=t instanceof A?t:new A(t),r=e===void 0?n.len:n.pos+e,o=cd();for(;n.pos<r;){let i=n.uint32();switch(i>>>3){case 1:if(i!==10)break;o.baseEvent=M.decode(n,n.uint32());continue;case 2:if(i!==18)break;o.messages.push(Zo.decode(n,n.uint32()));continue}if((i&7)===4||i===0)break;n.skip(i&7)}return o},create(t){return ai.fromPartial(t??{})},fromPartial(t){let e=cd();return e.baseEvent=t.baseEvent!==void 0&&t.baseEvent!==null?M.fromPartial(t.baseEvent):void 0,e.messages=t.messages?.map(n=>Zo.fromPartial(n))||[],e}};function dd(){return{baseEvent:void 0,event:void 0,source:void 0}}var li={encode(t,e=new F){return t.baseEvent!==void 0&&M.encode(t.baseEvent,e.uint32(10).fork()).join(),t.event!==void 0&&O.encode(O.wrap(t.event),e.uint32(18).fork()).join(),t.source!==void 0&&e.uint32(26).string(t.source),e},decode(t,e){let n=t instanceof A?t:new A(t),r=e===void 0?n.len:n.pos+e,o=dd();for(;n.pos<r;){let i=n.uint32();switch(i>>>3){case 1:if(i!==10)break;o.baseEvent=M.decode(n,n.uint32());continue;case 2:if(i!==18)break;o.event=O.unwrap(O.decode(n,n.uint32()));continue;case 3:if(i!==26)break;o.source=n.string();continue}if((i&7)===4||i===0)break;n.skip(i&7)}return o},create(t){return li.fromPartial(t??{})},fromPartial(t){let e=dd();return e.baseEvent=t.baseEvent!==void 0&&t.baseEvent!==null?M.fromPartial(t.baseEvent):void 0,e.event=t.event??void 0,e.source=t.source??void 0,e}};function ud(){return{baseEvent:void 0,name:"",value:void 0}}var ci={encode(t,e=new F){return t.baseEvent!==void 0&&M.encode(t.baseEvent,e.uint32(10).fork()).join(),t.name!==""&&e.uint32(18).string(t.name),t.value!==void 0&&O.encode(O.wrap(t.value),e.uint32(26).fork()).join(),e},decode(t,e){let n=t instanceof A?t:new A(t),r=e===void 0?n.len:n.pos+e,o=ud();for(;n.pos<r;){let i=n.uint32();switch(i>>>3){case 1:if(i!==10)break;o.baseEvent=M.decode(n,n.uint32());continue;case 2:if(i!==18)break;o.name=n.string();continue;case 3:if(i!==26)break;o.value=O.unwrap(O.decode(n,n.uint32()));continue}if((i&7)===4||i===0)break;n.skip(i&7)}return o},create(t){return ci.fromPartial(t??{})},fromPartial(t){let e=ud();return e.baseEvent=t.baseEvent!==void 0&&t.baseEvent!==null?M.fromPartial(t.baseEvent):void 0,e.name=t.name??"",e.value=t.value??void 0,e}};function pd(){return{baseEvent:void 0,threadId:"",runId:""}}var di={encode(t,e=new F){return t.baseEvent!==void 0&&M.encode(t.baseEvent,e.uint32(10).fork()).join(),t.threadId!==""&&e.uint32(18).string(t.threadId),t.runId!==""&&e.uint32(26).string(t.runId),e},decode(t,e){let n=t instanceof A?t:new A(t),r=e===void 0?n.len:n.pos+e,o=pd();for(;n.pos<r;){let i=n.uint32();switch(i>>>3){case 1:if(i!==10)break;o.baseEvent=M.decode(n,n.uint32());continue;case 2:if(i!==18)break;o.threadId=n.string();continue;case 3:if(i!==26)break;o.runId=n.string();continue}if((i&7)===4||i===0)break;n.skip(i&7)}return o},create(t){return di.fromPartial(t??{})},fromPartial(t){let e=pd();return e.baseEvent=t.baseEvent!==void 0&&t.baseEvent!==null?M.fromPartial(t.baseEvent):void 0,e.threadId=t.threadId??"",e.runId=t.runId??"",e}};function hd(){return{baseEvent:void 0,threadId:"",runId:"",result:void 0,outcome:"",interrupts:[]}}var ui={encode(t,e=new F){t.baseEvent!==void 0&&M.encode(t.baseEvent,e.uint32(10).fork()).join(),t.threadId!==""&&e.uint32(18).string(t.threadId),t.runId!==""&&e.uint32(26).string(t.runId),t.result!==void 0&&O.encode(O.wrap(t.result),e.uint32(34).fork()).join(),t.outcome!==""&&e.uint32(42).string(t.outcome);for(let n of t.interrupts)Jo.encode(n,e.uint32(50).fork()).join();return e},decode(t,e){let n=t instanceof A?t:new A(t),r=e===void 0?n.len:n.pos+e,o=hd();for(;n.pos<r;){let i=n.uint32();switch(i>>>3){case 1:if(i!==10)break;o.baseEvent=M.decode(n,n.uint32());continue;case 2:if(i!==18)break;o.threadId=n.string();continue;case 3:if(i!==26)break;o.runId=n.string();continue;case 4:if(i!==34)break;o.result=O.unwrap(O.decode(n,n.uint32()));continue;case 5:if(i!==42)break;o.outcome=n.string();continue;case 6:if(i!==50)break;o.interrupts.push(Jo.decode(n,n.uint32()));continue}if((i&7)===4||i===0)break;n.skip(i&7)}return o},create(t){return ui.fromPartial(t??{})},fromPartial(t){let e=hd();return e.baseEvent=t.baseEvent!==void 0&&t.baseEvent!==null?M.fromPartial(t.baseEvent):void 0,e.threadId=t.threadId??"",e.runId=t.runId??"",e.result=t.result??void 0,e.outcome=t.outcome??"",e.interrupts=t.interrupts?.map(n=>Jo.fromPartial(n))||[],e}};function fd(){return{baseEvent:void 0,code:void 0,message:""}}var pi={encode(t,e=new F){return t.baseEvent!==void 0&&M.encode(t.baseEvent,e.uint32(10).fork()).join(),t.code!==void 0&&e.uint32(18).string(t.code),t.message!==""&&e.uint32(26).string(t.message),e},decode(t,e){let n=t instanceof A?t:new A(t),r=e===void 0?n.len:n.pos+e,o=fd();for(;n.pos<r;){let i=n.uint32();switch(i>>>3){case 1:if(i!==10)break;o.baseEvent=M.decode(n,n.uint32());continue;case 2:if(i!==18)break;o.code=n.string();continue;case 3:if(i!==26)break;o.message=n.string();continue}if((i&7)===4||i===0)break;n.skip(i&7)}return o},create(t){return pi.fromPartial(t??{})},fromPartial(t){let e=fd();return e.baseEvent=t.baseEvent!==void 0&&t.baseEvent!==null?M.fromPartial(t.baseEvent):void 0,e.code=t.code??void 0,e.message=t.message??"",e}};function md(){return{baseEvent:void 0,stepName:""}}var hi={encode(t,e=new F){return t.baseEvent!==void 0&&M.encode(t.baseEvent,e.uint32(10).fork()).join(),t.stepName!==""&&e.uint32(18).string(t.stepName),e},decode(t,e){let n=t instanceof A?t:new A(t),r=e===void 0?n.len:n.pos+e,o=md();for(;n.pos<r;){let i=n.uint32();switch(i>>>3){case 1:if(i!==10)break;o.baseEvent=M.decode(n,n.uint32());continue;case 2:if(i!==18)break;o.stepName=n.string();continue}if((i&7)===4||i===0)break;n.skip(i&7)}return o},create(t){return hi.fromPartial(t??{})},fromPartial(t){let e=md();return e.baseEvent=t.baseEvent!==void 0&&t.baseEvent!==null?M.fromPartial(t.baseEvent):void 0,e.stepName=t.stepName??"",e}};function gd(){return{baseEvent:void 0,stepName:""}}var fi={encode(t,e=new F){return t.baseEvent!==void 0&&M.encode(t.baseEvent,e.uint32(10).fork()).join(),t.stepName!==""&&e.uint32(18).string(t.stepName),e},decode(t,e){let n=t instanceof A?t:new A(t),r=e===void 0?n.len:n.pos+e,o=gd();for(;n.pos<r;){let i=n.uint32();switch(i>>>3){case 1:if(i!==10)break;o.baseEvent=M.decode(n,n.uint32());continue;case 2:if(i!==18)break;o.stepName=n.string();continue}if((i&7)===4||i===0)break;n.skip(i&7)}return o},create(t){return fi.fromPartial(t??{})},fromPartial(t){let e=gd();return e.baseEvent=t.baseEvent!==void 0&&t.baseEvent!==null?M.fromPartial(t.baseEvent):void 0,e.stepName=t.stepName??"",e}};function vd(){return{baseEvent:void 0,messageId:void 0,role:void 0,delta:void 0,name:void 0}}var mi={encode(t,e=new F){return t.baseEvent!==void 0&&M.encode(t.baseEvent,e.uint32(10).fork()).join(),t.messageId!==void 0&&e.uint32(18).string(t.messageId),t.role!==void 0&&e.uint32(26).string(t.role),t.delta!==void 0&&e.uint32(34).string(t.delta),t.name!==void 0&&e.uint32(42).string(t.name),e},decode(t,e){let n=t instanceof A?t:new A(t),r=e===void 0?n.len:n.pos+e,o=vd();for(;n.pos<r;){let i=n.uint32();switch(i>>>3){case 1:if(i!==10)break;o.baseEvent=M.decode(n,n.uint32());continue;case 2:if(i!==18)break;o.messageId=n.string();continue;case 3:if(i!==26)break;o.role=n.string();continue;case 4:if(i!==34)break;o.delta=n.string();continue;case 5:if(i!==42)break;o.name=n.string();continue}if((i&7)===4||i===0)break;n.skip(i&7)}return o},create(t){return mi.fromPartial(t??{})},fromPartial(t){let e=vd();return e.baseEvent=t.baseEvent!==void 0&&t.baseEvent!==null?M.fromPartial(t.baseEvent):void 0,e.messageId=t.messageId??void 0,e.role=t.role??void 0,e.delta=t.delta??void 0,e.name=t.name??void 0,e}};function bd(){return{baseEvent:void 0,toolCallId:void 0,toolCallName:void 0,parentMessageId:void 0,delta:void 0}}var gi={encode(t,e=new F){return t.baseEvent!==void 0&&M.encode(t.baseEvent,e.uint32(10).fork()).join(),t.toolCallId!==void 0&&e.uint32(18).string(t.toolCallId),t.toolCallName!==void 0&&e.uint32(26).string(t.toolCallName),t.parentMessageId!==void 0&&e.uint32(34).string(t.parentMessageId),t.delta!==void 0&&e.uint32(42).string(t.delta),e},decode(t,e){let n=t instanceof A?t:new A(t),r=e===void 0?n.len:n.pos+e,o=bd();for(;n.pos<r;){let i=n.uint32();switch(i>>>3){case 1:if(i!==10)break;o.baseEvent=M.decode(n,n.uint32());continue;case 2:if(i!==18)break;o.toolCallId=n.string();continue;case 3:if(i!==26)break;o.toolCallName=n.string();continue;case 4:if(i!==34)break;o.parentMessageId=n.string();continue;case 5:if(i!==42)break;o.delta=n.string();continue}if((i&7)===4||i===0)break;n.skip(i&7)}return o},create(t){return gi.fromPartial(t??{})},fromPartial(t){let e=bd();return e.baseEvent=t.baseEvent!==void 0&&t.baseEvent!==null?M.fromPartial(t.baseEvent):void 0,e.toolCallId=t.toolCallId??void 0,e.toolCallName=t.toolCallName??void 0,e.parentMessageId=t.parentMessageId??void 0,e.delta=t.delta??void 0,e}};function yd(){return{textMessageStart:void 0,textMessageContent:void 0,textMessageEnd:void 0,toolCallStart:void 0,toolCallArgs:void 0,toolCallEnd:void 0,stateSnapshot:void 0,stateDelta:void 0,messagesSnapshot:void 0,raw:void 0,custom:void 0,runStarted:void 0,runFinished:void 0,runError:void 0,stepStarted:void 0,stepFinished:void 0,textMessageChunk:void 0,toolCallChunk:void 0}}var xd={encode(t,e=new F){return t.textMessageStart!==void 0&&Qo.encode(t.textMessageStart,e.uint32(10).fork()).join(),t.textMessageContent!==void 0&&ei.encode(t.textMessageContent,e.uint32(18).fork()).join(),t.textMessageEnd!==void 0&&ti.encode(t.textMessageEnd,e.uint32(26).fork()).join(),t.toolCallStart!==void 0&&ni.encode(t.toolCallStart,e.uint32(34).fork()).join(),t.toolCallArgs!==void 0&&ri.encode(t.toolCallArgs,e.uint32(42).fork()).join(),t.toolCallEnd!==void 0&&oi.encode(t.toolCallEnd,e.uint32(50).fork()).join(),t.stateSnapshot!==void 0&&ii.encode(t.stateSnapshot,e.uint32(58).fork()).join(),t.stateDelta!==void 0&&si.encode(t.stateDelta,e.uint32(66).fork()).join(),t.messagesSnapshot!==void 0&&ai.encode(t.messagesSnapshot,e.uint32(74).fork()).join(),t.raw!==void 0&&li.encode(t.raw,e.uint32(82).fork()).join(),t.custom!==void 0&&ci.encode(t.custom,e.uint32(90).fork()).join(),t.runStarted!==void 0&&di.encode(t.runStarted,e.uint32(98).fork()).join(),t.runFinished!==void 0&&ui.encode(t.runFinished,e.uint32(106).fork()).join(),t.runError!==void 0&&pi.encode(t.runError,e.uint32(114).fork()).join(),t.stepStarted!==void 0&&hi.encode(t.stepStarted,e.uint32(122).fork()).join(),t.stepFinished!==void 0&&fi.encode(t.stepFinished,e.uint32(130).fork()).join(),t.textMessageChunk!==void 0&&mi.encode(t.textMessageChunk,e.uint32(138).fork()).join(),t.toolCallChunk!==void 0&&gi.encode(t.toolCallChunk,e.uint32(146).fork()).join(),e},decode(t,e){let n=t instanceof A?t:new A(t),r=e===void 0?n.len:n.pos+e,o=yd();for(;n.pos<r;){let i=n.uint32();switch(i>>>3){case 1:if(i!==10)break;o.textMessageStart=Qo.decode(n,n.uint32());continue;case 2:if(i!==18)break;o.textMessageContent=ei.decode(n,n.uint32());continue;case 3:if(i!==26)break;o.textMessageEnd=ti.decode(n,n.uint32());continue;case 4:if(i!==34)break;o.toolCallStart=ni.decode(n,n.uint32());continue;case 5:if(i!==42)break;o.toolCallArgs=ri.decode(n,n.uint32());continue;case 6:if(i!==50)break;o.toolCallEnd=oi.decode(n,n.uint32());continue;case 7:if(i!==58)break;o.stateSnapshot=ii.decode(n,n.uint32());continue;case 8:if(i!==66)break;o.stateDelta=si.decode(n,n.uint32());continue;case 9:if(i!==74)break;o.messagesSnapshot=ai.decode(n,n.uint32());continue;case 10:if(i!==82)break;o.raw=li.decode(n,n.uint32());continue;case 11:if(i!==90)break;o.custom=ci.decode(n,n.uint32());continue;case 12:if(i!==98)break;o.runStarted=di.decode(n,n.uint32());continue;case 13:if(i!==106)break;o.runFinished=ui.decode(n,n.uint32());continue;case 14:if(i!==114)break;o.runError=pi.decode(n,n.uint32());continue;case 15:if(i!==122)break;o.stepStarted=hi.decode(n,n.uint32());continue;case 16:if(i!==130)break;o.stepFinished=fi.decode(n,n.uint32());continue;case 17:if(i!==138)break;o.textMessageChunk=mi.decode(n,n.uint32());continue;case 18:if(i!==146)break;o.toolCallChunk=gi.decode(n,n.uint32());continue}if((i&7)===4||i===0)break;n.skip(i&7)}return o},create(t){return xd.fromPartial(t??{})},fromPartial(t){let e=yd();return e.textMessageStart=t.textMessageStart!==void 0&&t.textMessageStart!==null?Qo.fromPartial(t.textMessageStart):void 0,e.textMessageContent=t.textMessageContent!==void 0&&t.textMessageContent!==null?ei.fromPartial(t.textMessageContent):void 0,e.textMessageEnd=t.textMessageEnd!==void 0&&t.textMessageEnd!==null?ti.fromPartial(t.textMessageEnd):void 0,e.toolCallStart=t.toolCallStart!==void 0&&t.toolCallStart!==null?ni.fromPartial(t.toolCallStart):void 0,e.toolCallArgs=t.toolCallArgs!==void 0&&t.toolCallArgs!==null?ri.fromPartial(t.toolCallArgs):void 0,e.toolCallEnd=t.toolCallEnd!==void 0&&t.toolCallEnd!==null?oi.fromPartial(t.toolCallEnd):void 0,e.stateSnapshot=t.stateSnapshot!==void 0&&t.stateSnapshot!==null?ii.fromPartial(t.stateSnapshot):void 0,e.stateDelta=t.stateDelta!==void 0&&t.stateDelta!==null?si.fromPartial(t.stateDelta):void 0,e.messagesSnapshot=t.messagesSnapshot!==void 0&&t.messagesSnapshot!==null?ai.fromPartial(t.messagesSnapshot):void 0,e.raw=t.raw!==void 0&&t.raw!==null?li.fromPartial(t.raw):void 0,e.custom=t.custom!==void 0&&t.custom!==null?ci.fromPartial(t.custom):void 0,e.runStarted=t.runStarted!==void 0&&t.runStarted!==null?di.fromPartial(t.runStarted):void 0,e.runFinished=t.runFinished!==void 0&&t.runFinished!==null?ui.fromPartial(t.runFinished):void 0,e.runError=t.runError!==void 0&&t.runError!==null?pi.fromPartial(t.runError):void 0,e.stepStarted=t.stepStarted!==void 0&&t.stepStarted!==null?hi.fromPartial(t.stepStarted):void 0,e.stepFinished=t.stepFinished!==void 0&&t.stepFinished!==null?fi.fromPartial(t.stepFinished):void 0,e.textMessageChunk=t.textMessageChunk!==void 0&&t.textMessageChunk!==null?mi.fromPartial(t.textMessageChunk):void 0,e.toolCallChunk=t.toolCallChunk!==void 0&&t.toolCallChunk!==null?gi.fromPartial(t.toolCallChunk):void 0,e}};function eg(t){let e=globalThis.Number(t.toString());if(e>globalThis.Number.MAX_SAFE_INTEGER)throw new globalThis.Error("Value is larger than Number.MAX_SAFE_INTEGER");if(e<globalThis.Number.MIN_SAFE_INTEGER)throw new globalThis.Error("Value is smaller than Number.MIN_SAFE_INTEGER");return e}var zo=t=>{if(!(!t||typeof t!="object")){if(t.data)return{type:"data",value:t.data.value,mimeType:t.data.mimeType};if(t.url)return{type:"url",value:t.url.value,mimeType:t.url.mimeType}}},tg=t=>{if(!(!t||typeof t!="object")){if(t.text)return{type:"text",text:t.text.text};if(t.image)return{type:"image",source:zo(t.image.source),metadata:t.image.metadata};if(t.audio)return{type:"audio",source:zo(t.audio.source),metadata:t.audio.metadata};if(t.video)return{type:"video",source:zo(t.video.source),metadata:t.video.metadata};if(t.document)return{type:"document",source:zo(t.document.source),metadata:t.document.metadata}}};function _d(t){let e=xd.decode(t),n=Object.values(e).find(r=>r!==void 0);if(!n)throw new Error("Invalid event");if(n.type=Qm[n.baseEvent.type],n.timestamp=n.baseEvent.timestamp,n.rawEvent=n.baseEvent.rawEvent,delete n.baseEvent,n.type===v.MESSAGES_SNAPSHOT)for(let r of n.messages){let o=r;if(o.role==="user"&&Array.isArray(o.contentParts)){let i=o.contentParts.map(s=>tg(s)).filter(s=>s!==void 0);i.length>0&&(o.content=i)}Array.isArray(o.contentParts)&&o.contentParts.length===0&&(o.contentParts=void 0),o.toolCalls?.length===0&&(o.toolCalls=void 0)}if(n.type===v.RUN_FINISHED){let r=n,o=typeof r.outcome=="string"&&r.outcome!==""?r.outcome:void 0,i=Array.isArray(r.interrupts)?r.interrupts:[];delete r.interrupts,o==="interrupt"?r.outcome={type:"interrupt",interrupts:i}:o==="success"?r.outcome={type:"success"}:delete r.outcome}if(n.type===v.STATE_DELTA)for(let r of n.delta)r.op=Jm[r.op].toLowerCase(),Object.keys(r).forEach(o=>{r[o]===void 0&&delete r[o]});return Object.keys(n).forEach(r=>{n[r]===void 0&&delete n[r]}),to.parse(n)}var ga="application/vnd.ag-ui.event+proto";var rg=/^[v^~<>=]*?(\d+)(?:\.([x*]|\d+)(?:\.([x*]|\d+)(?:\.([x*]|\d+))?(?:-([\da-z\-]+(?:\.[\da-z\-]+)*))?(?:\+[\da-z\-]+(?:\.[\da-z\-]+)*)?)?)?$/i,va=t=>{if(typeof t!="string")throw new TypeError("Invalid argument expected string");let e=t.match(rg);if(!e)throw new Error(`Invalid argument not valid semver ('${t}' received)`);return e.shift(),e},Ed=t=>t==="*"||t==="x"||t==="X",wd=t=>{let e=parseInt(t,10);return isNaN(e)?t:e},og=(t,e)=>typeof t!=typeof e?[String(t),String(e)]:[t,e],ig=(t,e)=>{if(Ed(t)||Ed(e))return 0;let[n,r]=og(wd(t),wd(e));return n>r?1:n<r?-1:0},ba=(t,e)=>{for(let n=0;n<Math.max(t.length,e.length);n++){let r=ig(t[n]||"0",e[n]||"0");if(r!==0)return r}return 0};var pr=(t,e)=>{let n=va(t),r=va(e),o=n.pop(),i=r.pop(),s=ba(n,r);return s!==0?s:o&&i?ba(o.split("."),i.split(".")):o||i?o?-1:1:0};var q=t=>{if(typeof structuredClone=="function")return structuredClone(t);try{return JSON.parse(JSON.stringify(t))}catch{return Array.isArray(t)?[...t]:{...t}}};function Ie(){return Et()}function _a(t){if(Object.freeze(t),typeof t=="object"&&t)for(let e of Object.values(t))typeof e=="object"&&e&&!Object.isFrozen(e)&&_a(e);return t}var Td=512*1024;function Sd(t,e,n){let r=0,o=[t,e],i=new WeakSet;for(;o.length>0;){let s=o.pop();if(typeof s=="string"){if(r+=s.length,r>n)return!0}else if(typeof s=="object"&&s){if(i.has(s))continue;if(i.add(s),Array.isArray(s))for(let a=0;a<s.length;a++)o.push(s[a]);else{let a=Object.keys(s);for(let l=0;l<a.length;l++){let c=a[l];if(r+=c.length,r>n)return!0;o.push(s[c])}}}}return!1}async function Y(t,e,n,r){let o=typeof process<"u"&&process.env!==void 0,i=o&&!!process.env.VITEST_WORKER_ID,s=o&&!!process.env.VITEST_WORKER_ID,a=s&&!Sd(e,n,Td),l=a?q(e):e,c=a?q(n):n,p=!1,m=!1,y;for(let f of t)try{a&&(_a(l),_a(c));let h=await r(f,l,c);if(h===void 0)continue;let g=!1;if(h.messages!==void 0&&h.messages!==l&&(l=q(h.messages),p=!0,g=!0),h.state!==void 0&&h.state!==c&&(c=q(h.state),m=!0,g=!0),a&&g&&Sd(l,c,Td)&&(a=!1),y=h.stopPropagation,y===!0)break}catch(h){if(s&&h instanceof TypeError){if(i)throw h;console.error("AG-UI: Subscriber attempted to mutate frozen inputs in-place. Return mutations via AgentStateMutation instead of mutating directly.",h)}else i||console.error("Subscriber error:",h);continue}return{...p?{messages:Object.isFrozen(l)?q(l):l}:{},...m?{state:Object.isFrozen(c)?q(c):c}:{},...y===void 0?{}:{stopPropagation:y}}}function vi(t){if(!t)return{enabled:!1,events:!1,lifecycle:!1,verbose:!1};if(t===!0)return{enabled:!0,events:!0,lifecycle:!0,verbose:!0};let e=t.events??!0,n=t.lifecycle??!0,r=t.verbose??!1;return{enabled:e||n,events:e,lifecycle:n,verbose:r}}function hr(t){if(t instanceof Ea)return t;if(t===!0)return new Ea(vi(!0))}var Ea=class{constructor(t){this.config=t}event(t,e,n,r){this.config.events&&(this.config.verbose?console.debug(`[${t}] ${e}`,typeof n=="string"?n:JSON.stringify(n)):console.debug(`[${t}] ${e}`,r??n))}lifecycle(t,e,n){this.config.lifecycle&&(n?console.debug(`[${t}] ${e}`,n):console.debug(`[${t}] ${e}`))}get eventsEnabled(){return this.config.events}get lifecycleEnabled(){return this.config.lifecycle}get enabled(){return this.config.enabled}};function ya(t){return t.enabled?new Ea(t):void 0}function sg(t,e,n){if(e){let o=t.find(s=>s.id===e);if(o?.role==="assistant")return o;o&&console.warn(`TOOL_CALL_START: parentMessageId '${e}' matches a '${o.role}' message, not assistant \u2014 falling back to toolCallId`);let i={id:o?n:e,role:"assistant",toolCalls:[]};return t.push(i),i}let r={id:n,role:"assistant",toolCalls:[]};return t.push(r),r}var Nd=(t,e,n,r,o)=>{let i=hr(o),s=q(n.messages),a=q(t.state),l={},c=m=>{m.messages!==void 0&&(s=m.messages,l.messages=m.messages),m.state!==void 0&&(a=m.state,l.state=m.state)},p=()=>{let m=q(l);return l={},m.messages!==void 0||m.state!==void 0?ue(m):yo};return e.pipe(Lo(async m=>{let y=await Y(r,s,a,(f,h,g)=>f.onEvent?.({event:m,agent:n,input:t,messages:h,state:g}));if(c(y),y.stopPropagation===!0?i?.event("APPLY","Event dropped:",m,{type:m.type,reason:"stopPropagation by subscriber"}):i?.event("APPLY","Event applied:",m,{type:m.type,subscribers:r.length}),y.stopPropagation===!0)return p();switch(m.type){case v.TEXT_MESSAGE_START:{let f=await Y(r,s,a,(h,g,x)=>h.onTextMessageStartEvent?.({event:m,messages:g,state:x,agent:n,input:t}));if(c(f),f.stopPropagation!==!0){let{messageId:h,role:g="assistant",name:x}=m;if(!s.find(S=>S.id===h)){let S={id:h,role:g,content:"",...x!==void 0&&{name:x}};s.push(S),c({messages:s})}}return p()}case v.TEXT_MESSAGE_CONTENT:{let{messageId:f,delta:h}=m,g=s.find(S=>S.id===f);if(!g)return console.warn(`TEXT_MESSAGE_CONTENT: No message found with ID '${f}'`),p();let x=await Y(r,s,a,(S,w,I)=>S.onTextMessageContentEvent?.({event:m,messages:w,state:I,agent:n,input:t,textMessageBuffer:typeof g.content=="string"?g.content:""}));return c(x),x.stopPropagation!==!0&&(g.content=`${typeof g.content=="string"?g.content:""}${h}`,c({messages:s})),p()}case v.TEXT_MESSAGE_END:{let{messageId:f}=m,h=s.find(g=>g.id===f);return h?(c(await Y(r,s,a,(g,x,S)=>g.onTextMessageEndEvent?.({event:m,messages:x,state:S,agent:n,input:t,textMessageBuffer:typeof h.content=="string"?h.content:""}))),await Promise.all(r.map(g=>{g.onNewMessage?.({message:h,messages:s,state:a,agent:n,input:t})})),p()):(console.warn(`TEXT_MESSAGE_END: No message found with ID '${f}'`),p())}case v.TOOL_CALL_START:{let f=await Y(r,s,a,(h,g,x)=>h.onToolCallStartEvent?.({event:m,messages:g,state:x,agent:n,input:t}));if(c(f),f.stopPropagation!==!0){let{toolCallId:h,toolCallName:g,parentMessageId:x}=m,S=sg(s,x,h);S.toolCalls??=[],S.toolCalls.push({id:h,type:"function",function:{name:g,arguments:""}}),c({messages:s})}return p()}case v.TOOL_CALL_ARGS:{let{toolCallId:f,delta:h}=m,g=s.find(w=>w.toolCalls?.some(I=>I.id===f));if(!g)return console.warn(`TOOL_CALL_ARGS: No message found containing tool call with ID '${f}'`),p();let x=g.toolCalls?.find(w=>w.id===f);if(!x)return console.warn(`TOOL_CALL_ARGS: No tool call found with ID '${f}'`),p();let S=await Y(r,s,a,(w,I,H)=>{let U=x.function.arguments,K=x.function.name,oe={};try{oe=Do(U)}catch{}return w.onToolCallArgsEvent?.({event:m,messages:I,state:H,agent:n,input:t,toolCallBuffer:U,toolCallName:K,partialToolCallArgs:oe})});return c(S),S.stopPropagation!==!0&&(x.function.arguments+=h,c({messages:s})),p()}case v.TOOL_CALL_END:{let{toolCallId:f}=m,h=s.find(x=>x.toolCalls?.some(S=>S.id===f));if(!h)return console.warn(`TOOL_CALL_END: No message found containing tool call with ID '${f}'`),p();let g=h.toolCalls?.find(x=>x.id===f);return g?(c(await Y(r,s,a,(x,S,w)=>{let I=g.function.arguments,H=g.function.name,U={};try{U=JSON.parse(I)}catch{}return x.onToolCallEndEvent?.({event:m,messages:S,state:w,agent:n,input:t,toolCallName:H,toolCallArgs:U})})),await Promise.all(r.map(x=>{x.onNewToolCall?.({toolCall:g,messages:s,state:a,agent:n,input:t})})),p()):(console.warn(`TOOL_CALL_END: No tool call found with ID '${f}'`),p())}case v.TOOL_CALL_RESULT:{let f=await Y(r,s,a,(h,g,x)=>h.onToolCallResultEvent?.({event:m,messages:g,state:x,agent:n,input:t}));if(c(f),f.stopPropagation!==!0){let{messageId:h,toolCallId:g,content:x,role:S}=m,w={id:h,toolCallId:g,role:S||"tool",content:x},I=s.findIndex(H=>H.role==="assistant"&&H.toolCalls?.some(U=>U.id===g));if(I===-1)s.push(w);else{let H=I+1;for(;H<s.length&&s[H].role==="tool";)H++;s.splice(H,0,w)}await Promise.all(r.map(H=>{H.onNewMessage?.({message:w,messages:s,state:a,agent:n,input:t})})),c({messages:s})}return p()}case v.STATE_SNAPSHOT:{let f=await Y(r,s,a,(h,g,x)=>h.onStateSnapshotEvent?.({event:m,messages:g,state:x,agent:n,input:t}));if(c(f),f.stopPropagation!==!0){let{snapshot:h}=m;a=h,c({state:a})}return p()}case v.STATE_DELTA:{let f=await Y(r,s,a,(h,g,x)=>h.onStateDeltaEvent?.({event:m,messages:g,state:x,agent:n,input:t}));if(c(f),f.stopPropagation!==!0){let{delta:h}=m;try{a=co.applyPatch(a,h,!0,!1).newDocument,c({state:a})}catch(g){let x=g instanceof Error?g.message:String(g);console.warn(`Failed to apply state patch:
Current state: ${JSON.stringify(a,null,2)}
Patch operations: ${JSON.stringify(h,null,2)}
Error: ${x}`)}}return p()}case v.MESSAGES_SNAPSHOT:{let f=await Y(r,s,a,(h,g,x)=>h.onMessagesSnapshotEvent?.({event:m,messages:g,state:x,agent:n,input:t}));if(c(f),f.stopPropagation!==!0){let{messages:h}=m,g=new Map(h.map(I=>[I.id,I])),x=h.some(I=>I.role==="reasoning"),S=I=>I.role==="activity"||I.role==="reasoning"&&!x;s=s.filter(I=>S(I)||g.has(I.id)).map(I=>S(I)?I:g.get(I.id));let w=new Set(s.map(I=>I.id));for(let I of h)w.has(I.id)||s.push(I);c({messages:s})}return p()}case v.ACTIVITY_SNAPSHOT:{let f=m,h=s.findIndex(I=>I.id===f.messageId),g=h>=0?s[h]:void 0,x=g?.role==="activity"?g:void 0,S=f.replace??!0,w=await Y(r,s,a,(I,H,U)=>I.onActivitySnapshotEvent?.({event:f,messages:H,state:U,agent:n,input:t,activityMessage:x,existingMessage:g}));if(c(w),w.stopPropagation!==!0){let I={id:f.messageId,role:"activity",activityType:f.activityType,content:q(f.content)},H;h===-1?(s.push(I),H=I):x?S&&(s[h]={...x,activityType:f.activityType,content:q(f.content)}):S&&(s[h]=I,H=I),c({messages:s}),H&&await Promise.all(r.map(U=>U.onNewMessage?.({message:H,messages:s,state:a,agent:n,input:t})))}return p()}case v.ACTIVITY_DELTA:{let f=m,h=s.findIndex(w=>w.id===f.messageId);if(h===-1)return p();let g=s[h];if(g.role!=="activity")return console.warn(`ACTIVITY_DELTA: Message '${f.messageId}' is not an activity message`),p();let x=g,S=await Y(r,s,a,(w,I,H)=>w.onActivityDeltaEvent?.({event:f,messages:I,state:H,agent:n,input:t,activityMessage:x}));if(c(S),S.stopPropagation!==!0)try{let w=q(x.content??{}),I=co.applyPatch(w,f.patch??[],!0,!1).newDocument;s[h]={...x,content:q(I),activityType:f.activityType},c({messages:s})}catch(w){let I=w instanceof Error?w.message:String(w);console.warn(`Failed to apply activity patch for '${f.messageId}': ${I}`)}return p()}case v.RAW:return c(await Y(r,s,a,(f,h,g)=>f.onRawEvent?.({event:m,messages:h,state:g,agent:n,input:t}))),p();case v.CUSTOM:return c(await Y(r,s,a,(f,h,g)=>f.onCustomEvent?.({event:m,messages:h,state:g,agent:n,input:t}))),p();case v.RUN_STARTED:{let f=await Y(r,s,a,(h,g,x)=>h.onRunStartedEvent?.({event:m,messages:g,state:x,agent:n,input:t}));if(c(f),f.stopPropagation!==!0){let h=m;if(h.input?.messages){for(let g of h.input.messages)s.find(x=>x.id===g.id)||s.push(g);c({messages:s})}}return p()}case v.RUN_FINISHED:{let f=m,h=f.outcome?.type==="interrupt"?{event:f,outcome:"interrupt",interrupts:f.outcome.interrupts}:{event:f,outcome:"success",result:f.result},g=await Y(r,s,a,(x,S,w)=>x.onRunFinishedEvent?.({...h,messages:S,state:w,agent:n,input:t}));return c(g),g.stopPropagation!==!0&&(n.pendingInterrupts=h.outcome==="interrupt"?[...h.interrupts]:[]),p()}case v.RUN_ERROR:return c(await Y(r,s,a,(f,h,g)=>f.onRunErrorEvent?.({event:m,messages:h,state:g,agent:n,input:t}))),p();case v.STEP_STARTED:return c(await Y(r,s,a,(f,h,g)=>f.onStepStartedEvent?.({event:m,messages:h,state:g,agent:n,input:t}))),p();case v.STEP_FINISHED:return c(await Y(r,s,a,(f,h,g)=>f.onStepFinishedEvent?.({event:m,messages:h,state:g,agent:n,input:t}))),p();case v.TEXT_MESSAGE_CHUNK:throw Error("TEXT_MESSAGE_CHUNK must be tranformed before being applied");case v.TOOL_CALL_CHUNK:throw Error("TOOL_CALL_CHUNK must be tranformed before being applied");case v.THINKING_START:return p();case v.THINKING_END:return p();case v.THINKING_TEXT_MESSAGE_START:return p();case v.THINKING_TEXT_MESSAGE_CONTENT:return p();case v.THINKING_TEXT_MESSAGE_END:return p();case v.REASONING_START:return c(await Y(r,s,a,(f,h,g)=>f.onReasoningStartEvent?.({event:m,messages:h,state:g,agent:n,input:t}))),p();case v.REASONING_MESSAGE_START:{let f=await Y(r,s,a,(h,g,x)=>h.onReasoningMessageStartEvent?.({event:m,messages:g,state:x,agent:n,input:t}));if(c(f),f.stopPropagation!==!0){let{messageId:h}=m;if(!s.find(g=>g.id===h)){let g={id:h,role:"reasoning",content:""};s.push(g),c({messages:s})}}return p()}case v.REASONING_MESSAGE_CONTENT:{let{messageId:f,delta:h}=m,g=s.find(S=>S.id===f);if(!g)return console.warn(`REASONING_MESSAGE_CONTENT: No message found with ID '${f}'`),p();let x=await Y(r,s,a,(S,w,I)=>S.onReasoningMessageContentEvent?.({event:m,messages:w,state:I,agent:n,input:t,reasoningMessageBuffer:typeof g.content=="string"?g.content:""}));return c(x),x.stopPropagation!==!0&&(g.content=`${typeof g.content=="string"?g.content:""}${h}`,c({messages:s})),p()}case v.REASONING_MESSAGE_END:{let{messageId:f}=m,h=s.find(g=>g.id===f);return h?(c(await Y(r,s,a,(g,x,S)=>g.onReasoningMessageEndEvent?.({event:m,messages:x,state:S,agent:n,input:t,reasoningMessageBuffer:typeof h.content=="string"?h.content:""}))),await Promise.all(r.map(g=>{g.onNewMessage?.({message:h,messages:s,state:a,agent:n,input:t})})),p()):(console.warn(`REASONING_MESSAGE_END: No message found with ID '${f}'`),p())}case v.REASONING_MESSAGE_CHUNK:throw Error("REASONING_MESSAGE_CHUNK must be transformed before being applied");case v.REASONING_END:return c(await Y(r,s,a,(f,h,g)=>f.onReasoningEndEvent?.({event:m,messages:h,state:g,agent:n,input:t}))),p();case v.REASONING_ENCRYPTED_VALUE:{let{subtype:f,entityId:h,encryptedValue:g}=m,x=await Y(r,s,a,(S,w,I)=>S.onReasoningEncryptedValueEvent?.({event:m,messages:w,state:I,agent:n,input:t}));if(c(x),x.stopPropagation!==!0){let S=!1;if(f==="tool-call"){for(let w of s)if(w.role==="assistant"&&w.toolCalls){let I=w.toolCalls.find(H=>H.id===h);if(I){I.encryptedValue=g,S=!0;break}}}else{let w=s.find(I=>I.id===h);w?.role!=="activity"&&w&&(w.encryptedValue=g,S=!0)}S&&(l.messages=s)}return p()}}return m.type,p()}),ta(),r.length>0?na({}):m=>m)},xa=t=>e=>{let n=hr(t),r=new Map,o=new Map,i=!1,s=!1,a=!1,l=new Map,c=!1,p=!1,m=!1,y=()=>{r.clear(),o.clear(),l.clear(),c=!1,p=!1,i=!1,s=!1,m=!0};return e.pipe(Le(f=>{let h=f.type;if(n?.event("VERIFY","Event:",f,{type:f.type}),s)return re(()=>new te(`Cannot send event type '${h}': The run has already errored with 'RUN_ERROR'. No further events can be sent.`));if(i&&h!==v.RUN_ERROR&&h!==v.RUN_STARTED)return re(()=>new te(`Cannot send event type '${h}': The run has already finished with 'RUN_FINISHED'. Start a new run with 'RUN_STARTED'.`));if(a){if(h===v.RUN_STARTED){if(m&&!i)return re(()=>new te("Cannot send 'RUN_STARTED' while a run is still active. The previous run must be finished with 'RUN_FINISHED' before starting a new run."));i&&y()}}else if(a=!0,h!==v.RUN_STARTED&&h!==v.RUN_ERROR)return re(()=>new te("First event must be 'RUN_STARTED'"));switch(h){case v.TEXT_MESSAGE_START:{let g=f.messageId;return r.has(g)?re(()=>new te(`Cannot send 'TEXT_MESSAGE_START' event: A text message with ID '${g}' is already in progress. Complete it with 'TEXT_MESSAGE_END' first.`)):(r.set(g,!0),ue(f))}case v.TEXT_MESSAGE_CONTENT:{let g=f.messageId;return r.has(g)?ue(f):re(()=>new te(`Cannot send 'TEXT_MESSAGE_CONTENT' event: No active text message found with ID '${g}'. Start a text message with 'TEXT_MESSAGE_START' first.`))}case v.TEXT_MESSAGE_END:{let g=f.messageId;return r.has(g)?(r.delete(g),ue(f)):re(()=>new te(`Cannot send 'TEXT_MESSAGE_END' event: No active text message found with ID '${g}'. A 'TEXT_MESSAGE_START' event must be sent first.`))}case v.TOOL_CALL_START:{let g=f.toolCallId;return o.has(g)?re(()=>new te(`Cannot send 'TOOL_CALL_START' event: A tool call with ID '${g}' is already in progress. Complete it with 'TOOL_CALL_END' first.`)):(o.set(g,!0),ue(f))}case v.TOOL_CALL_ARGS:{let g=f.toolCallId;return o.has(g)?ue(f):re(()=>new te(`Cannot send 'TOOL_CALL_ARGS' event: No active tool call found with ID '${g}'. Start a tool call with 'TOOL_CALL_START' first.`))}case v.TOOL_CALL_END:{let g=f.toolCallId;return o.has(g)?(o.delete(g),ue(f)):re(()=>new te(`Cannot send 'TOOL_CALL_END' event: No active tool call found with ID '${g}'. A 'TOOL_CALL_START' event must be sent first.`))}case v.STEP_STARTED:{let g=f.stepName;return l.has(g)?re(()=>new te(`Step "${g}" is already active for 'STEP_STARTED'`)):(l.set(g,!0),ue(f))}case v.STEP_FINISHED:{let g=f.stepName;return l.has(g)?(l.delete(g),ue(f)):re(()=>new te(`Cannot send 'STEP_FINISHED' for step "${g}" that was not started`))}case v.RUN_STARTED:return m=!0,ue(f);case v.RUN_FINISHED:if(l.size>0){let g=Array.from(l.keys()).join(", ");return re(()=>new te(`Cannot send 'RUN_FINISHED' while steps are still active: ${g}`))}if(r.size>0){let g=Array.from(r.keys()).join(", ");return re(()=>new te(`Cannot send 'RUN_FINISHED' while text messages are still active: ${g}`))}if(o.size>0){let g=Array.from(o.keys()).join(", ");return re(()=>new te(`Cannot send 'RUN_FINISHED' while tool calls are still active: ${g}`))}return i=!0,ue(f);case v.RUN_ERROR:return s=!0,ue(f);case v.CUSTOM:return ue(f);case v.THINKING_TEXT_MESSAGE_START:return c?p?re(()=>new te("Cannot send 'THINKING_TEXT_MESSAGE_START' event: A thinking message is already in progress. Complete it with 'THINKING_TEXT_MESSAGE_END' first.")):(p=!0,ue(f)):re(()=>new te("Cannot send 'THINKING_TEXT_MESSAGE_START' event: A thinking step is not in progress. Create one with 'THINKING_START' first."));case v.THINKING_TEXT_MESSAGE_CONTENT:return p?ue(f):re(()=>new te("Cannot send 'THINKING_TEXT_MESSAGE_CONTENT' event: No active thinking message found. Start a message with 'THINKING_TEXT_MESSAGE_START' first."));case v.THINKING_TEXT_MESSAGE_END:return p?(p=!1,ue(f)):re(()=>new te("Cannot send 'THINKING_TEXT_MESSAGE_END' event: No active thinking message found. A 'THINKING_TEXT_MESSAGE_START' event must be sent first."));case v.THINKING_START:return c?re(()=>new te("Cannot send 'THINKING_START' event: A thinking step is already in progress. End it with 'THINKING_END' first.")):(c=!0,ue(f));case v.THINKING_END:return c?(c=!1,ue(f)):re(()=>new te("Cannot send 'THINKING_END' event: No active thinking step found. A 'THINKING_START' event must be sent first."));default:return ue(f)}}))},nn=(function(t){return t.HEADERS="headers",t.DATA="data",t})({}),ag=t=>Mo(()=>Qt(t())).pipe(ra(e=>{if(!e.ok){let o=e.headers.get("content-type")||"";return Qt(e.text()).pipe(Le(i=>{let s=i;if(o.includes("application/json"))try{s=JSON.parse(i)}catch{}let a=Error(`HTTP ${e.status}: ${typeof s=="string"?s:JSON.stringify(s)}`);return a.status=e.status,a.payload=s,re(()=>a)}))}let n={type:nn.HEADERS,status:e.status,headers:e.headers},r=e.body?.getReader();return r?new ne(o=>(o.next(n),(async()=>{try{for(;;){let{done:i,value:s}=await r.read();if(i)break;let a={type:nn.DATA,data:s};o.next(a)}o.complete()}catch(i){o.error(i)}})(),()=>{r.cancel().catch(i=>{if(i?.name!=="AbortError")throw i})})):re(()=>Error("Failed to getReader() from response"))})),lg=(t,e)=>{let n=hr(e),r=new at,o=new TextDecoder("utf-8",{fatal:!1}),i="";t.subscribe({next:a=>{if(a.type!==nn.HEADERS&&a.type===nn.DATA&&a.data){let l=o.decode(a.data,{stream:!0});i+=l;let c=i.split(/\n\n/);i=c.pop()||"";for(let p of c)s(p)}},error:a=>r.error(a),complete:()=>{i&&(i+=o.decode(),s(i)),r.complete()}});function s(a){let l=a.split(`
`),c=[];for(let p of l)p.startsWith("data:")&&c.push(p.slice(5).replace(/^ /,""));if(c.length>0)try{let p=c.join(`
`),m=JSON.parse(p);n?.event("SSE","Event received:",m,{type:m.type}),r.next(m)}catch(p){r.error(p)}}return r.asObservable()},cg=t=>{let e=new at,n=new Uint8Array;t.subscribe({next:o=>{if(o.type!==nn.HEADERS&&o.type===nn.DATA&&o.data){let i=new Uint8Array(n.length+o.data.length);i.set(n,0),i.set(o.data,n.length),n=i,r()}},error:o=>e.error(o),complete:()=>{if(n.length>0)try{r()}catch{console.warn("Incomplete or invalid protocol buffer data at stream end")}e.complete()}});function r(){for(;n.length>=4;){let o=4+new DataView(n.buffer,n.byteOffset,4).getUint32(0,!1);if(n.length<o)break;try{let i=n.slice(4,o),s=_d(i);e.next(s),n=n.slice(o)}catch(i){let s=i instanceof Error?i.message:String(i);e.error(Error(`Failed to decode protocol buffer message: ${s}`));return}}}return e.asObservable()},dg=(t,e)=>{let n=hr(e),r=new at,o=new bo,i=!1;return t.subscribe({next:s=>{if(o.next(s),s.type===nn.HEADERS&&!i){i=!0;let a=s.headers.get("content-type");n?.lifecycle("HTTP","Stream format detected:",{contentType:a,parser:a===ga?"protobuf":"sse"}),a===ga?cg(o).subscribe({next:l=>r.next(l),error:l=>r.error(l),complete:()=>r.complete()}):lg(o,n).subscribe({next:l=>{try{let c=to.parse(l);n?.event("HTTP","Event validated:",c,{type:c.type,valid:!0}),r.next(c)}catch(c){n?.event("HTTP","Event invalid:",{json:l,error:String(c)}),r.error(c)}},error:l=>{if(l?.name==="AbortError"){r.next({type:v.RUN_ERROR,message:l.message||"Request aborted",code:"abort",rawEvent:l}),r.complete();return}return r.error(l)},complete:()=>r.complete()})}else i||r.error(Error("No headers event received before data events"))},error:s=>{o.error(s),r.error(s)},complete:()=>{o.complete()}}),r.asObservable()},Q=d.enum(["TextMessageStart","TextMessageContent","TextMessageEnd","ActionExecutionStart","ActionExecutionArgs","ActionExecutionEnd","ActionExecutionResult","AgentStateMessage","MetaEvent","RunStarted","RunFinished","RunError","NodeStarted","NodeFinished"]),ug=d.enum(["LangGraphInterruptEvent","PredictState","Exit"]),pg=d.object({type:d.literal(Q.enum.TextMessageStart),messageId:d.string(),parentMessageId:d.string().optional(),role:d.string().optional()}),hg=d.object({type:d.literal(Q.enum.TextMessageContent),messageId:d.string(),content:d.string()}),fg=d.object({type:d.literal(Q.enum.TextMessageEnd),messageId:d.string()}),mg=d.object({type:d.literal(Q.enum.ActionExecutionStart),actionExecutionId:d.string(),actionName:d.string(),parentMessageId:d.string().optional()}),gg=d.object({type:d.literal(Q.enum.ActionExecutionArgs),actionExecutionId:d.string(),args:d.string()}),vg=d.object({type:d.literal(Q.enum.ActionExecutionEnd),actionExecutionId:d.string()}),bg=d.object({type:d.literal(Q.enum.ActionExecutionResult),actionName:d.string(),actionExecutionId:d.string(),result:d.string()}),yg=d.object({type:d.literal(Q.enum.AgentStateMessage),threadId:d.string(),agentName:d.string(),nodeName:d.string(),runId:d.string(),active:d.boolean(),role:d.string(),state:d.string(),running:d.boolean()}),xg=d.object({type:d.literal(Q.enum.MetaEvent),name:ug,value:d.any()}),_g=d.object({type:d.literal(Q.enum.RunError),message:d.string(),code:d.string().optional()});d.discriminatedUnion("type",[pg,hg,fg,mg,gg,vg,bg,yg,xg,_g]),d.object({id:d.string(),role:d.string(),content:d.string(),parentMessageId:d.string().optional()}),d.object({id:d.string(),name:d.string(),arguments:d.any(),parentMessageId:d.string().optional()}),d.object({id:d.string(),result:d.any(),actionExecutionId:d.string(),actionName:d.string()});var Eg=t=>{if(typeof t=="string")return t;if(!Array.isArray(t))return;let e=t.filter(n=>n.type==="text").map(n=>n.text).filter(n=>n.length>0);if(e.length!==0)return e.join(`
`)},wg=(t,e,n)=>r=>{let o={},i=!0,s=!0,a="",l=null,c=null,p=[],m={},y=f=>{typeof f=="object"&&f&&("messages"in f&&delete f.messages,o=f)};return r.pipe(Le(f=>{switch(f.type){case v.TEXT_MESSAGE_START:{let h=f;return[{type:Q.enum.TextMessageStart,messageId:h.messageId,role:h.role}]}case v.TEXT_MESSAGE_CONTENT:{let h=f;return[{type:Q.enum.TextMessageContent,messageId:h.messageId,content:h.delta}]}case v.TEXT_MESSAGE_END:{let h=f;return[{type:Q.enum.TextMessageEnd,messageId:h.messageId}]}case v.TOOL_CALL_START:{let h=f;return p.push({id:h.toolCallId,type:"function",function:{name:h.toolCallName,arguments:""}}),s=!0,m[h.toolCallId]=h.toolCallName,[{type:Q.enum.ActionExecutionStart,actionExecutionId:h.toolCallId,actionName:h.toolCallName,parentMessageId:h.parentMessageId}]}case v.TOOL_CALL_ARGS:{let h=f,g=p.find(S=>S.id===h.toolCallId);if(!g)return console.warn(`TOOL_CALL_ARGS: No tool call found with ID '${h.toolCallId}'`),[];g.function.arguments+=h.delta;let x=!1;if(c){let S=c.find(w=>w.tool==g.function.name);if(S)try{let w=JSON.parse(Do(g.function.arguments));S.tool_argument&&S.tool_argument in w?(y({...o,[S.state_key]:w[S.tool_argument]}),x=!0):S.tool_argument||(y({...o,[S.state_key]:w}),x=!0)}catch{}}return[{type:Q.enum.ActionExecutionArgs,actionExecutionId:h.toolCallId,args:h.delta},...x?[{type:Q.enum.AgentStateMessage,threadId:t,agentName:n,nodeName:a,runId:e,running:i,role:"assistant",state:JSON.stringify(o),active:s}]:[]]}case v.TOOL_CALL_END:{let h=f;return[{type:Q.enum.ActionExecutionEnd,actionExecutionId:h.toolCallId}]}case v.TOOL_CALL_RESULT:{let h=f;return[{type:Q.enum.ActionExecutionResult,actionExecutionId:h.toolCallId,result:h.content,actionName:m[h.toolCallId]||"unknown"}]}case v.RAW:return[];case v.CUSTOM:{let h=f;switch(h.name){case"Exit":i=!1;break;case"PredictState":c=h.value;break}return[{type:Q.enum.MetaEvent,name:h.name,value:h.value}]}case v.STATE_SNAPSHOT:return y(f.snapshot),[{type:Q.enum.AgentStateMessage,threadId:t,agentName:n,nodeName:a,runId:e,running:i,role:"assistant",state:JSON.stringify(o),active:s}];case v.STATE_DELTA:{let h=f,g=co.applyPatch(o,h.delta,!0,!1);return g?(y(g.newDocument),[{type:Q.enum.AgentStateMessage,threadId:t,agentName:n,nodeName:a,runId:e,running:i,role:"assistant",state:JSON.stringify(o),active:s}]):[]}case v.MESSAGES_SNAPSHOT:return l=f.messages,[{type:Q.enum.AgentStateMessage,threadId:t,agentName:n,nodeName:a,runId:e,running:i,role:"assistant",state:JSON.stringify({...o,...l?{messages:l}:{}}),active:!0}];case v.RUN_STARTED:return[];case v.RUN_FINISHED:return l&&(o.messages=l),Object.keys(o).length===0?[]:[{type:Q.enum.AgentStateMessage,threadId:t,agentName:n,nodeName:a,runId:e,running:i,role:"assistant",state:JSON.stringify({...o,...l?{messages:Tg(l)}:{}}),active:!1}];case v.RUN_ERROR:{let h=f;return[{type:Q.enum.RunError,message:h.message,code:h.code}]}case v.STEP_STARTED:return a=f.stepName,p=[],c=null,[{type:Q.enum.AgentStateMessage,threadId:t,agentName:n,nodeName:a,runId:e,running:i,role:"assistant",state:JSON.stringify(o),active:!0}];case v.STEP_FINISHED:return p=[],c=null,[{type:Q.enum.AgentStateMessage,threadId:t,agentName:n,nodeName:a,runId:e,running:i,role:"assistant",state:JSON.stringify(o),active:!1}];default:return[]}}))};function Tg(t){let e=[];for(let n of t)if(n.role==="assistant"||n.role==="user"||n.role==="system"){let r=Eg(n.content);if(r){let o={id:n.id,role:n.role,content:r};e.push(o)}if(n.role==="assistant"&&n.toolCalls&&n.toolCalls.length>0)for(let o of n.toolCalls){let i={id:o.id,name:o.function.name,arguments:JSON.parse(o.function.arguments),parentMessageId:n.id};e.push(i)}}else if(n.role==="tool"){let r="unknown";for(let i of t)if(i.role==="assistant"&&i.toolCalls?.length){for(let s of i.toolCalls)if(s.id===n.toolCallId){r=s.function.name;break}}let o={id:n.id,result:n.content,actionExecutionId:n.toolCallId,actionName:r};e.push(o)}return e}var bi=t=>e=>{let n=hr(t),r,o,i,s,a=()=>{if(!r||s!=="text")throw Error("No text message to close");let m={type:v.TEXT_MESSAGE_END,messageId:r.messageId};return s=void 0,r=void 0,n?.event("TRANSFORM","TEXT_MESSAGE_END",m,{messageId:m.messageId}),m},l=()=>{if(!o||s!=="tool")throw Error("No tool call to close");let m={type:v.TOOL_CALL_END,toolCallId:o.toolCallId};return s=void 0,o=void 0,n?.event("TRANSFORM","TOOL_CALL_END",m,{toolCallId:m.toolCallId}),m},c=()=>{if(!i||s!=="reasoning")throw Error("No reasoning message to close");let m={type:v.REASONING_MESSAGE_END,messageId:i.messageId};return s=void 0,i=void 0,n?.event("TRANSFORM","REASONING_MESSAGE_END",m,{messageId:m.messageId}),m},p=()=>s==="text"?[a()]:s==="tool"?[l()]:s==="reasoning"?[c()]:[];return e.pipe(Le(m=>{switch(m.type){case v.TEXT_MESSAGE_START:case v.TEXT_MESSAGE_CONTENT:case v.TEXT_MESSAGE_END:case v.TOOL_CALL_START:case v.TOOL_CALL_ARGS:case v.TOOL_CALL_END:case v.TOOL_CALL_RESULT:case v.STATE_SNAPSHOT:case v.STATE_DELTA:case v.MESSAGES_SNAPSHOT:case v.CUSTOM:case v.RUN_STARTED:case v.RUN_FINISHED:case v.RUN_ERROR:case v.STEP_STARTED:case v.STEP_FINISHED:case v.THINKING_START:case v.THINKING_END:case v.THINKING_TEXT_MESSAGE_START:case v.THINKING_TEXT_MESSAGE_CONTENT:case v.THINKING_TEXT_MESSAGE_END:case v.REASONING_START:case v.REASONING_MESSAGE_START:case v.REASONING_MESSAGE_CONTENT:case v.REASONING_MESSAGE_END:case v.REASONING_END:return[...p(),m];case v.RAW:case v.ACTIVITY_SNAPSHOT:case v.ACTIVITY_DELTA:case v.REASONING_ENCRYPTED_VALUE:return[m];case v.TEXT_MESSAGE_CHUNK:let y=m,f=[];if((s!=="text"||y.messageId!==void 0&&y.messageId!==r?.messageId)&&f.push(...p()),s!=="text"){if(y.messageId===void 0)throw Error("First TEXT_MESSAGE_CHUNK must have a messageId");r={messageId:y.messageId,name:y.name},s="text";let w={type:v.TEXT_MESSAGE_START,messageId:y.messageId,role:y.role||"assistant",...y.name!==void 0&&{name:y.name}};f.push(w),n?.event("TRANSFORM","TEXT_MESSAGE_START",w,{messageId:y.messageId})}if(y.delta!==void 0){let w={type:v.TEXT_MESSAGE_CONTENT,messageId:r.messageId,delta:y.delta};f.push(w),n?.event("TRANSFORM","TEXT_MESSAGE_CONTENT",w,{messageId:r.messageId})}return f;case v.TOOL_CALL_CHUNK:let h=m,g=[];if((s!=="tool"||h.toolCallId!==void 0&&h.toolCallId!==o?.toolCallId)&&g.push(...p()),s!=="tool"){if(h.toolCallId===void 0)throw Error("First TOOL_CALL_CHUNK must have a toolCallId");if(h.toolCallName===void 0)throw Error("First TOOL_CALL_CHUNK must have a toolCallName");o={toolCallId:h.toolCallId,toolCallName:h.toolCallName,parentMessageId:h.parentMessageId},s="tool";let w={type:v.TOOL_CALL_START,toolCallId:h.toolCallId,toolCallName:h.toolCallName,parentMessageId:h.parentMessageId};g.push(w),n?.event("TRANSFORM","TOOL_CALL_START",w,{toolCallId:h.toolCallId,toolCallName:h.toolCallName})}if(h.delta!==void 0){let w={type:v.TOOL_CALL_ARGS,toolCallId:o.toolCallId,delta:h.delta};g.push(w),n?.event("TRANSFORM","TOOL_CALL_ARGS",w,{toolCallId:o.toolCallId})}return g;case v.REASONING_MESSAGE_CHUNK:let x=m,S=[];if((s!=="reasoning"||x.messageId&&x.messageId!==i?.messageId)&&S.push(...p()),s!=="reasoning"){if(x.messageId===void 0)throw Error("First REASONING_MESSAGE_CHUNK must have a messageId");i={messageId:x.messageId},s="reasoning";let w={type:v.REASONING_MESSAGE_START,messageId:x.messageId};S.push(w),n?.event("TRANSFORM","REASONING_MESSAGE_START",w,{messageId:x.messageId})}if(x.delta!==void 0){let w={type:v.REASONING_MESSAGE_CONTENT,messageId:i.messageId,delta:x.delta};S.push(w),n?.event("TRANSFORM","REASONING_MESSAGE_CONTENT",w,{messageId:i.messageId})}return S}return m.type,[]}),tn(()=>{p()}))};function Sg(t,e=new Date){return t.expiresAt===void 0?!1:new Date(t.expiresAt)<=e}function Od(t,e){let n=new Set(t.map(s=>s.id)),r=new Set(Object.keys(e)),o=[...n].filter(s=>!r.has(s));if(o.length>0)throw Error(`buildResumeArray: missing responses for open interrupts: ${o.join(", ")}`);let i=[...r].filter(s=>!n.has(s));if(i.length>0)throw Error(`buildResumeArray: responses reference unknown interrupt ids: ${i.join(", ")}`);return t.map(s=>{let a=e[s.id];if(a.status==="resolved"){let l={interruptId:s.id,status:"resolved"};return a.payload!==void 0&&(l.payload=a.payload),l}return{interruptId:s.id,status:"cancelled"}})}var yi=class{runNext(t,e){return e.run(t).pipe(bi(!1))}runNextWithState(t,e){let n=q(t.messages||[]),r=q(t.state||{}),o=new bo;return Nd(t,o,e,[]).subscribe(i=>{i.messages!==void 0&&(n=i.messages),i.state!==void 0&&(r=i.state)}),this.runNext(t,e).pipe(Lo(async i=>(o.next(i),await new Promise(s=>setTimeout(s,0)),{event:i,messages:q(n),state:q(r)})))}},Ag=class extends yi{constructor(t){super(),this.fn=t}run(t,e){return this.fn(t,e)}};function kg(t){let e=t.content;if(Array.isArray(e)){let n=e.filter(r=>typeof r=="object"&&!!r&&"type"in r&&r.type==="text"&&typeof r.text=="string").map(r=>r.text).join("");return{...t,content:n}}return typeof e=="string"?t:{...t,content:""}}var Cg=class extends yi{run(t,e){let{parentRunId:n,...r}=t,o={...r,messages:r.messages.map(kg)};return this.runNext(o,e)}},Ad="THINKING_START",kd="THINKING_END",Cd="THINKING_TEXT_MESSAGE_START",Id="THINKING_TEXT_MESSAGE_CONTENT",Rd="THINKING_TEXT_MESSAGE_END",Ig=class extends yi{constructor(...t){super(...t),this.currentReasoningId=null,this.currentMessageId=null}warnAboutTransformation(t,e){typeof process<"u"&&process.env!==void 0&&process.env.SUPPRESS_TRANSFORMATION_WARNINGS||console.warn(`AG-UI is converting ${t} to ${e}. To remove this warning, upgrade your AG-UI integration package (e.g. @ag-ui/langgraph). To surpress it, set SUPPRESS_TRANSFORMATION_WARNINGS=true in your .env file.`)}run(t,e){return this.currentReasoningId=null,this.currentMessageId=null,this.runNext(t,e).pipe(en(n=>this.transformEvent(n)))}transformEvent(t){switch(t.type){case Ad:{this.currentReasoningId=Ie();let{title:e,...n}=t;return this.warnAboutTransformation(Ad,v.REASONING_START),{...n,type:v.REASONING_START,messageId:this.currentReasoningId}}case Cd:return this.currentMessageId=Ie(),this.warnAboutTransformation(Cd,v.REASONING_MESSAGE_START),{...t,type:v.REASONING_MESSAGE_START,messageId:this.currentMessageId,role:"assistant"};case Id:{let{delta:e,...n}=t;return this.warnAboutTransformation(Id,v.REASONING_MESSAGE_CONTENT),{...n,type:v.REASONING_MESSAGE_CONTENT,messageId:this.currentMessageId??Ie(),delta:e}}case Rd:{let e=this.currentMessageId??Ie();return this.warnAboutTransformation(Rd,v.REASONING_MESSAGE_END),{...t,type:v.REASONING_MESSAGE_END,messageId:e}}case kd:{let e=this.currentReasoningId??Ie();return this.warnAboutTransformation(kd,v.REASONING_END),{...t,type:v.REASONING_END,messageId:e}}default:return t}}};function Rg(t){return t.startsWith("image/")?"image":t.startsWith("audio/")?"audio":t.startsWith("video/")?"video":"document"}function Ng(t){return typeof t=="object"&&!!t&&"type"in t&&t.type==="binary"&&"mimeType"in t&&typeof t.mimeType=="string"}function Og(t){let e=Rg(t.mimeType);return t.data?{type:e,source:{type:"data",value:t.data,mimeType:t.mimeType},...t.filename?{metadata:{filename:t.filename}}:{}}:t.url?{type:e,source:{type:"url",value:t.url,mimeType:t.mimeType},...t.filename?{metadata:{filename:t.filename}}:{}}:t}function Mg(t){let e=t.content;if(!Array.isArray(e))return t;let n=e.map(r=>Ng(r)?Og(r):r);return{...t,content:n}}var Lg=class extends yi{run(t,e){let n={...t,messages:t.messages.map(Mg)};return this.runNext(n,e)}},Pg="0.0.57",Dg=class{get maxVersion(){return Pg}get debug(){return this._debug}set debug(t){this._debug=vi(t),this._debugLogger=ya(this._debug)}get debugLogger(){return this._debugLogger}set debugLogger(t){typeof t=="boolean"?this._debugLogger=t?ya(vi(!0)):void 0:this._debugLogger=t}constructor({agentId:t,description:e,threadId:n,initialMessages:r,initialState:o,debug:i}={}){this.subscribers=[],this.isRunning=!1,this.pendingInterrupts=[],this.middlewares=[],this.agentId=t,this.description=e??"",this.threadId=n??Et(),this.messages=q(r??[]),this.state=q(o??{}),this._debug=vi(i),this._debugLogger=ya(this._debug),pr(this.maxVersion,"0.0.39")<=0&&this.middlewares.unshift(new Cg),pr(this.maxVersion,"0.0.45")<=0&&this.middlewares.unshift(new Ig),pr(this.maxVersion,"0.0.47")<=0&&this.middlewares.unshift(new Lg)}subscribe(t){return this.subscribers.push(t),{unsubscribe:()=>{this.subscribers=this.subscribers.filter(e=>e!==t)}}}use(...t){let e=t.map(n=>typeof n=="function"?new Ag(n):n);return this.middlewares.push(...e),this}async runAgent(t,e){try{this.isRunning=!0,this.agentId=this.agentId??Et();let n=this.prepareRunAgentInput(t);this.debugLogger?.lifecycle("LIFECYCLE","Run started:",{agentId:this.agentId,threadId:this.threadId});let r,o=new Set(this.messages.map(l=>l.id)),i=[{onRunFinishedEvent:l=>{l.outcome==="success"&&(r=l.result)}},...this.subscribers,e??{}];await this.onInitialize(n,i),this.activeRunDetach$=new at;let s;this.activeRunCompletionPromise=new Promise(l=>{s=l}),await Oo(vo(()=>this.middlewares.length===0?this.run(n):this.middlewares.reduceRight((l,c)=>({run:p=>c.run(p,l),get messages(){return l.messages},get state(){return l.state}}),this).run(n),bi(this.debugLogger),xa(this.debugLogger),l=>l.pipe(Po(this.activeRunDetach$)),l=>this.apply(n,l,i),l=>this.processApplyEvents(n,l,i),cr(l=>(this.debugLogger?.lifecycle("LIFECYCLE","Run errored:",{agentId:this.agentId,error:l instanceof Error?l.message:String(l)}),this.isRunning=!1,this.onError(n,l,i))),tn(()=>{this.debugLogger?.lifecycle("LIFECYCLE","Run finished:",{agentId:this.agentId,threadId:this.threadId}),this.isRunning=!1,this.onFinalize(n,i),s?.(),s=void 0,this.activeRunCompletionPromise=void 0,this.activeRunDetach$=void 0}))(ue(null)));let a=q(this.messages).filter(l=>!o.has(l.id));return{result:r,newMessages:a}}finally{this.isRunning=!1}}connect(t){throw new $s}async connectAgent(t,e){try{this.isRunning=!0,this.agentId=this.agentId??Et();let n=this.prepareRunAgentInput(t),r,o=new Set(this.messages.map(l=>l.id)),i=[{onRunFinishedEvent:l=>{l.outcome==="success"&&(r=l.result)}},...this.subscribers,e??{}];await this.onInitialize(n,i),this.activeRunDetach$=new at;let s;this.activeRunCompletionPromise=new Promise(l=>{s=l}),await Oo(vo(()=>Mo(()=>this.connect(n)),bi(this.debugLogger),xa(this.debugLogger),l=>l.pipe(Po(this.activeRunDetach$)),l=>this.apply(n,l,i),l=>this.processApplyEvents(n,l,i),cr(l=>(this.isRunning=!1,l instanceof $s?yo:this.onError(n,l,i))),tn(()=>{this.isRunning=!1,this.onFinalize(n,i),s?.(),s=void 0,this.activeRunCompletionPromise=void 0,this.activeRunDetach$=void 0}))(ue(null)),{defaultValue:void 0});let a=q(this.messages).filter(l=>!o.has(l.id));return{result:r,newMessages:a}}finally{this.isRunning=!1}}abortRun(){}async detachActiveRun(){if(!this.activeRunDetach$)return;let t=this.activeRunCompletionPromise??Promise.resolve();this.activeRunDetach$.next(),this.activeRunDetach$?.complete(),await t}apply(t,e,n){return Nd(t,e,this,n,this.debugLogger)}processApplyEvents(t,e,n){return e.pipe(oa(r=>{r.messages&&(this.messages=r.messages,n.forEach(o=>{o.onMessagesChanged?.({messages:this.messages,state:this.state,agent:this,input:t})})),r.state&&(this.state=r.state,n.forEach(o=>{o.onStateChanged?.({state:this.state,messages:this.messages,agent:this,input:t})}))}))}prepareRunAgentInput(t){let e=q(this.messages).filter(n=>n.role!=="activity");return{threadId:this.threadId,runId:t?.runId||Et(),tools:q(t?.tools??[]),context:q(t?.context??[]),forwardedProps:q(t?.forwardedProps??{}),state:q(this.state),messages:e,...t?.resume===void 0?{}:{resume:q(t.resume)}}}async onInitialize(t,e){if(this.pendingInterrupts.length>0){let r=new Set((t.resume??[]).map(i=>i.interruptId)),o=this.pendingInterrupts.map(i=>i.id).filter(i=>!r.has(i));if(o.length>0)throw new te(`Thread has ${o.length} pending interrupt(s) not addressed by resume: ${o.join(", ")}`);for(let i of this.pendingInterrupts)if(Sg(i))throw new te(`Interrupt ${i.id} expired at ${i.expiresAt}`)}let n=await Y(e,this.messages,this.state,(r,o,i)=>r.onRunInitialized?.({messages:o,state:i,agent:this,input:t}));(n.messages!==void 0||n.state!==void 0)&&(n.messages&&(this.messages=n.messages,t.messages=n.messages,e.forEach(r=>{r.onMessagesChanged?.({messages:this.messages,state:this.state,agent:this,input:t})})),n.state&&(this.state=n.state,t.state=n.state,e.forEach(r=>{r.onStateChanged?.({state:this.state,messages:this.messages,agent:this,input:t})})))}onError(t,e,n){return Qt(Y(n,this.messages,this.state,(r,o,i)=>r.onRunFailed?.({error:e,messages:o,state:i,agent:this,input:t}))).pipe(en(r=>{let o=r;if((o.messages!==void 0||o.state!==void 0)&&(o.messages!==void 0&&(this.messages=o.messages,n.forEach(i=>{i.onMessagesChanged?.({messages:this.messages,state:this.state,agent:this,input:t})})),o.state!==void 0&&(this.state=o.state,n.forEach(i=>{i.onStateChanged?.({state:this.state,messages:this.messages,agent:this,input:t})}))),o.stopPropagation!==!0){let i=String(e);if(!(e.name==="AbortError"||e.message==="Fetch is aborted"||e.message==="signal is aborted without reason"||e.message==="component unmounted"||i==="component unmounted"))throw console.error("Agent execution failed:",e),e}return{}}))}async onFinalize(t,e){let n=await Y(e,this.messages,this.state,(r,o,i)=>r.onRunFinalized?.({messages:o,state:i,agent:this,input:t}));(n.messages!==void 0||n.state!==void 0)&&(n.messages!==void 0&&(this.messages=n.messages,e.forEach(r=>{r.onMessagesChanged?.({messages:this.messages,state:this.state,agent:this,input:t})})),n.state!==void 0&&(this.state=n.state,e.forEach(r=>{r.onStateChanged?.({state:this.state,messages:this.messages,agent:this,input:t})})))}clone(){let t=Object.create(Object.getPrototypeOf(this));return t.agentId=this.agentId,t.description=this.description,t.threadId=this.threadId,t.messages=q(this.messages),t.state=q(this.state),t._debug=this._debug,t._debugLogger=this._debugLogger,t.isRunning=this.isRunning,t.subscribers=[...this.subscribers],t.middlewares=[...this.middlewares],t.pendingInterrupts=q(this.pendingInterrupts),t}addMessage(t){this.messages.push(t),(async()=>{for(let e of this.subscribers)await e.onNewMessage?.({message:t,messages:this.messages,state:this.state,agent:this});if(t.role==="assistant"&&t.toolCalls)for(let e of t.toolCalls)for(let n of this.subscribers)await n.onNewToolCall?.({toolCall:e,messages:this.messages,state:this.state,agent:this});for(let e of this.subscribers)await e.onMessagesChanged?.({messages:this.messages,state:this.state,agent:this})})()}addMessages(t){this.messages.push(...t),(async()=>{for(let e of t){for(let n of this.subscribers)await n.onNewMessage?.({message:e,messages:this.messages,state:this.state,agent:this});if(e.role==="assistant"&&e.toolCalls)for(let n of e.toolCalls)for(let r of this.subscribers)await r.onNewToolCall?.({toolCall:n,messages:this.messages,state:this.state,agent:this})}for(let e of this.subscribers)await e.onMessagesChanged?.({messages:this.messages,state:this.state,agent:this})})()}setMessages(t){this.messages=q(t),(async()=>{for(let e of this.subscribers)await e.onMessagesChanged?.({messages:this.messages,state:this.state,agent:this})})()}setState(t){this.state=q(t),(async()=>{for(let e of this.subscribers)await e.onStateChanged?.({messages:this.messages,state:this.state,agent:this})})()}legacy_to_be_removed_runAgentBridged(t){this.agentId=this.agentId??Et();let e=this.prepareRunAgentInput(t);return(this.middlewares.length===0?this.run(e):this.middlewares.reduceRight((n,r)=>({run:o=>r.run(o,n),get messages(){return n.messages},get state(){return n.state}}),this).run(e)).pipe(bi(this.debugLogger),xa(this.debugLogger),wg(this.threadId,e.runId,this.agentId),n=>n.pipe(en(r=>(this.debugLogger?.event("LEGACY","Event:",r,{type:r.type}),r))))}},Md=class extends Dg{requestInit(t){return{method:"POST",headers:{...this.headers,"Content-Type":"application/json",Accept:"text/event-stream"},body:JSON.stringify(t),signal:this.abortController.signal}}runAgent(t,e){return this.abortController=t?.abortController??new AbortController,super.runAgent(t,e)}abortRun(){this.abortController.abort(),super.abortRun()}constructor(t){super(t),this.abortController=new AbortController,this.url=t.url,this.headers=q(t.headers??{}),this.fetch=t.fetch??((e,n)=>fetch(e,n))}run(t){return dg(ag(()=>this.fetch(this.url,this.requestInit(t))),this.debugLogger)}clone(){let t=super.clone();t.url=this.url,t.headers=q(this.headers??{}),t.fetch=this.fetch;let e=new AbortController,n=this.abortController.signal;return n.aborted&&e.abort(n.reason),t.abortController=e,t}};var xi=class{element;#n;#e;#t=[];constructor(e){this.#n=e,this.#e=e.strings??le,this.element=document.createElement("div"),this.element.className="attachment-tray",this.element.setAttribute("part","attachment-tray"),this.element.hidden=!0}add(e){let n={localId:Ie(),file:e,status:De.UPLOADING,progress:0,ref:null,error:"",controller:null};this.#t.push(n);let r=this.#o(e);if(r!==null){n.status=De.ERROR,n.error=r,this.#a(),this.#n.onChange?.();return}this.#a(),this.#n.onChange?.(),this.#r(n)}readyRefs(){let e=[];for(let n of this.#t)n.ref!==null&&e.push(n.ref);return e}hasPending(){return this.#t.some(e=>e.status===De.UPLOADING)}pendingCount(){return this.#t.filter(e=>e.status===De.UPLOADING).length}isEmpty(){return this.#t.length===0}clearReady(){this.#t=this.#t.filter(e=>e.status===De.UPLOADING),this.#a()}clear(){for(let e of this.#t)e.controller?.abort();this.#t=[],this.#a()}dispose(){for(let e of this.#t)e.controller?.abort()}#o(e){return this.#n.maxBytes>0&&e.size>this.#n.maxBytes?this.#e.tooLarge.replace("{size}",Wr(this.#n.maxBytes)):Ug(this.#n.accept,e)?null:this.#e.fileTypeNotAllowed}#r(e){let n=this.#o(e.file);if(n!==null){e.status=De.ERROR,e.error=n,this.#a(),this.#n.onChange?.();return}e.status=De.UPLOADING,e.progress=0,e.error="";let r=new AbortController;e.controller=r,this.#a(),this.#n.upload(e.file,o=>{e.progress=o,this.#a()},r.signal).then(o=>{e.status=De.READY,e.ref=o}).catch(o=>{e.status=De.ERROR,e.error=o instanceof Error?o.message:this.#e.uploadFailed}).finally(()=>{e.controller=null,this.#a(),this.#n.onChange?.()})}#i(e){e.controller?.abort(),this.#t=this.#t.filter(n=>n!==e),this.#a(),this.#n.onChange?.()}#a(){this.element.replaceChildren(),this.element.hidden=this.#t.length===0;for(let e of this.#t)this.element.appendChild(this.#d(e))}#d(e){let n=document.createElement("div");n.className=`attachment-chip attachment-chip--${e.status}`,n.setAttribute("part","attachment-chip");let r=document.createElement("span");r.className="attachment-chip-icon",r.setAttribute("part","attachment-chip-icon"),r.innerHTML=Ps(e.file.type),r.setAttribute("aria-hidden","true");let o=document.createElement("span");o.className="attachment-chip-name",o.setAttribute("part","attachment-chip-name"),o.textContent=e.file.name,o.title=e.file.name;let i=document.createElement("span");if(i.className="attachment-chip-size",i.setAttribute("part","attachment-chip-size"),i.textContent=e.status===De.ERROR?e.error:Wr(e.file.size),n.append(r,o,i),e.status===De.UPLOADING){let a=document.createElement("div");a.className="attachment-chip-bar",a.setAttribute("part","attachment-chip-bar");let l=document.createElement("div");l.className="attachment-chip-bar-fill",l.setAttribute("part","attachment-chip-bar-fill"),l.style.width=`${Math.round(e.progress*100)}%`,a.appendChild(l),n.appendChild(a)}if(e.status===De.ERROR){let a=document.createElement("button");a.type="button",a.className="attachment-chip-retry",a.setAttribute("part","attachment-chip-retry"),a.title=this.#e.retry,a.setAttribute("aria-label",this.#e.retryUpload),a.textContent="\u21BB",a.addEventListener("click",()=>this.#r(e)),n.appendChild(a)}let s=document.createElement("button");return s.type="button",s.className="attachment-chip-remove",s.setAttribute("part","attachment-chip-remove"),s.title=this.#e.remove,s.setAttribute("aria-label",this.#e.removeAttachment),s.textContent="\u2715",s.addEventListener("click",()=>this.#i(e)),n.appendChild(s),n}};function Ug(t,e){let n=t.split(",").map(i=>i.trim().toLowerCase()).filter(i=>i!=="");if(n.length===0)return!0;let r=e.type.toLowerCase(),o=e.name.toLowerCase();return n.some(i=>i.startsWith(".")?o.endsWith(i):i.endsWith("/*")?r.startsWith(i.slice(0,-1)):r===i)}var Hg="http://www.w3.org/2000/svg";var He={top:20,right:12,bottom:30,left:44},Ei=480-He.left-He.right,_i=220-He.top-He.bottom,Ld=["var(--ag-ui-chart-1, #4f7cff)","var(--ag-ui-chart-2, #21b573)","var(--ag-ui-chart-3, #e0803c)","var(--ag-ui-chart-4, #b563d8)","var(--ag-ui-chart-5, #d84f6e)","var(--ag-ui-chart-6, #3ba7c4)"];function rn(t){return Ld[t%Ld.length]}function lt(t,e){let n=document.createElementNS(Hg,t);for(let[r,o]of Object.entries(e))n.setAttribute(r,String(o));return n}function Pd(t,e){let n=lt("text",{"font-size":10,fill:"currentColor","fill-opacity":.65,...e});return n.textContent=t,n}function zg(t){let e=[];return t.labels.forEach((n,r)=>{let o=0;for(let i of t.series)o+=i.points[r]??0,e.push(o)}),e}function Gg(t){let e=t.kind==="stacked"?zg(t):t.series.flatMap(o=>[...o.points]),n=Math.max(0,...e),r=Math.min(0,...e);return n===r?{min:r,max:n+1}:{min:r,max:n}}function on(t,e,n){return He.top+_i-(t-e)/(n-e)*_i}function wa(t,e){let n=Ei/e;return He.left+n*t+n/2}function Fg(t,e,n,r){for(let o of[n,r]){let i=on(o,n,r);t.appendChild(lt("line",{x1:He.left,y1:i,x2:480-He.right,y2:i,stroke:"currentColor","stroke-opacity":o===n?.35:.12})),t.appendChild(Pd(String(Math.round(o)),{x:He.left-6,y:i+4,"text-anchor":"end"}))}e.labels.forEach((o,i)=>{t.appendChild(Pd(o,{x:wa(i,e.labels.length),y:220-He.bottom+16,"text-anchor":"middle"}))})}function $g(t,e,n,r){let o=Ei/e.labels.length,i=o*.7/e.series.length,s=on(n,n,r);e.series.forEach((a,l)=>{a.points.forEach((c,p)=>{let m=on(c,n,r);t.appendChild(lt("rect",{x:He.left+o*p+o*.15+i*l,y:m,width:i,height:Math.max(1,s-m),fill:rn(l),rx:2}))})})}function Vg(t,e,n,r){let o=Ei/e.labels.length,i=o*.7,s=e.labels.map(()=>0);e.series.forEach((a,l)=>{a.points.forEach((c,p)=>{let m=s[p]??0,y=m+c;s[p]=y;let f=on(y,n,r);t.appendChild(lt("rect",{x:He.left+o*p+o*.15,y:f,width:i,height:Math.max(1,on(m,n,r)-f),fill:rn(l)}))})})}function Bg(t,e,n,r){e.series.forEach((o,i)=>{let s=o.points.map((a,l)=>`${wa(l,e.labels.length)},${on(a,n,r)}`).join(" ");t.appendChild(lt("polyline",{points:s,fill:"none",stroke:rn(i),"stroke-width":2,"stroke-linejoin":"round"}))})}function jg(t,e,n,r){e.series.forEach((o,i)=>{o.points.forEach((s,a)=>{t.appendChild(lt("circle",{cx:wa(a,e.labels.length),cy:on(s,n,r),r:4,fill:rn(i),"fill-opacity":.85}))})})}function qg(t,e){let n=e.reduce((a,l)=>a+l,0),r=480/2,o=He.top+_i/2,i=Math.min(Ei,_i)/2;if(n===0){t.appendChild(lt("circle",{cx:r,cy:o,r:i,fill:"none",stroke:"currentColor","stroke-opacity":.3}));return}let s=-Math.PI/2;e.forEach((a,l)=>{let c=a/n*Math.PI*2,p=s+c;if(c>=Math.PI*2)t.appendChild(lt("circle",{cx:r,cy:o,r:i,fill:rn(l)}));else{let m=r+i*Math.cos(s),y=o+i*Math.sin(s),f=r+i*Math.cos(p),h=o+i*Math.sin(p),g=c>Math.PI?1:0;t.appendChild(lt("path",{d:`M ${r} ${o} L ${m} ${y} A ${i} ${i} 0 ${g} 1 ${f} ${h} Z`,fill:rn(l)}))}s=p})}function Wg(t){if(t.length<2)return null;let e=document.createElement("div");return e.className="chart-legend",e.setAttribute("part","chart-legend"),t.forEach((n,r)=>{let o=document.createElement("span");o.className="chart-legend-item";let i=document.createElement("span");i.className="chart-legend-swatch",i.style.background=rn(r),o.append(i,document.createTextNode(n)),e.appendChild(o)}),e}function fr(t){if(t.labels.length===0||t.series.length===0)return null;let e=document.createElement("div");if(e.className="chart-block",e.setAttribute("part","chart-block"),t.title!==void 0&&t.title!==""){let o=document.createElement("div");o.className="chart-title",o.setAttribute("part","chart-title"),o.textContent=t.title,e.appendChild(o)}let n=lt("svg",{viewBox:"0 0 480 220",width:"100%",role:"img"});if(n.setAttribute("aria-label",t.title??`${t.kind} chart`),t.kind==="pie"){let o=t.series[0];qg(n,o.points.map(i=>Math.max(0,i)))}else{let{min:o,max:i}=Gg(t);Fg(n,t,o,i),t.kind==="bar"?$g(n,t,o,i):t.kind==="stacked"?Vg(n,t,o,i):t.kind==="line"?Bg(n,t,o,i):jg(n,t,o,i)}e.appendChild(n);let r=Wg(t.kind==="pie"?t.labels:t.series.map(o=>o.label));return r!==null&&e.appendChild(r),e}var Xg=["bar","line","pie","scatter","stacked"];function Kg(t){return Xg.includes(t)?t:"bar"}function Yg(t){if(!Array.isArray(t))return null;let e=[];for(let n of t){if(typeof n!="number"||!Number.isFinite(n)||Math.abs(n)>1e15)return null;e.push(n)}return e}function Zg(t){if(!Array.isArray(t))return null;for(let e=0;e<t.length;e+=1)if(typeof t[e]!="string")return null;return t}function Ln(t){if(typeof t!="object"||t===null)return null;let e=t,n=Zg(e.labels);if(n===null||!Array.isArray(e.series))return null;let r=[];for(let s of e.series){if(typeof s!="object"||s===null)return null;let a=s,l=Yg(a.points);if(l===null||l.length!==n.length)return null;r.push({label:typeof a.label=="string"?a.label:"",points:l})}if(r.length===0||r.length*n.length>2e4||n.length>2e3)return null;let o=Kg(e.kind),i=e.title;return typeof i=="string"?{kind:o,title:i,labels:n,series:r}:{kind:o,labels:n,series:r}}var wi="render_chart";function Jg(t){let e=Ln(t);return e===null?null:fr(e)}function Qg(t){let e=Ln(t);return e!==null&&e.labels.length>0&&e.series.length>0}var ev="chart not rendered: expected labels (strings) and series, each with one finite number per label";function Dd(){return{name:wi,description:"Show a chart in the conversation. Supply the data and the page draws it. Every series must have exactly one point per label.",parameters:{type:"object",properties:{kind:{type:"string",enum:["bar","line","pie","scatter","stacked"]},title:{type:"string"},labels:{type:"array",items:{type:"string"}},series:{type:"array",items:{type:"object",properties:{label:{type:"string"},points:{type:"array",items:{type:"number"}}},required:["points"]}}},required:["labels","series"],"x-summary":"Draw a chart"},handler:t=>Qg(t)?"chart rendered":ev,render:Jg}}function Ti(t,e=Date.now(),n=le){if(!Number.isFinite(t))return n.justNow;let r=Math.round((e-t)/1e3);if(r<60)return n.justNow;let o=Math.round(r/60);if(o<60)return n.minutesAgo.replace("{n}",String(o));let i=Math.round(o/60);if(i<24)return n.hoursAgo.replace("{n}",String(i));let s=Math.round(i/24);return s<7?n.daysAgo.replace("{n}",String(s)):n.weeksAgo.replace("{n}",String(Math.round(s/7)))}function Ud(t){return t.preview!==void 0&&t.preview!==null&&t.preview!==""?t.preview:null}function Hd(t){return t.replace(/\s+/g," ").trim()}var mr=class{element;#n;#e;#t;#o=null;#r;#i=[];constructor(e,n=le){this.#n=e,this.#r=n,this.element=document.createElement("div"),this.element.className="checkpoints",this.element.setAttribute("part","checkpoints"),this.element.setAttribute("role","dialog"),this.element.setAttribute("aria-label",n.checkpoints),this.element.tabIndex=-1,this.element.hidden=!0;let r=document.createElement("div");r.className="checkpoints-header",r.setAttribute("part","checkpoints-header"),this.#t=document.createElement("span"),this.#t.className="checkpoints-title",this.#t.setAttribute("part","checkpoints-title"),this.#t.textContent=n.checkpoints,r.append(this.#t),this.#e=document.createElement("div"),this.#e.className="checkpoints-list",this.#e.setAttribute("part","checkpoints-list"),this.element.append(r,this.#e),this.element.addEventListener("keydown",o=>this.#p(o))}setRuns(e){this.#i=e,this.#u()}setStrings(e){this.#r=e,this.element.setAttribute("aria-label",e.checkpoints),this.#t.textContent=e.checkpoints,this.#u()}open(){this.open_||(this.#o=this.#a(),this.element.hidden=!1,(this.#d()[0]??this.element).focus())}close(){this.open_&&(this.element.hidden=!0,this.#o?.focus(),this.#o=null)}#a(){return this.element.getRootNode().activeElement}#d(){return Array.from(this.element.querySelectorAll("button, [tabindex]")).filter(e=>!e.hidden)}#p(e){if(e.key==="Escape"){e.stopPropagation(),this.close();return}if(e.key!=="Tab")return;let n=this.#d(),r=n[0],o=n[n.length-1],i=this.#a();e.shiftKey&&i===r?(e.preventDefault(),o?.focus()):!e.shiftKey&&i===o&&(e.preventDefault(),r?.focus())}get open_(){return!this.element.hidden}#u(){if(this.#e.replaceChildren(),this.#i.length===0){let n=document.createElement("div");n.className="checkpoints-empty",n.setAttribute("part","checkpoints-empty"),n.textContent=this.#r.noCheckpoints,this.#e.append(n);return}let e=this.#c();for(let n of this.#i)this.#e.append(this.#s(n,e))}#c(){let e=new Set,n=new Set;for(let r of this.#i){let o=Ud(r);if(o===null)continue;let i=Hd(o);e.has(i)&&n.add(i),e.add(i)}return n}#s(e,n){let r=document.createElement("div");r.className="checkpoint-row",r.setAttribute("part","checkpoint-row");let o=Ud(e),i=e.started_at===null?null:Ti(Date.parse(e.started_at),Date.now(),this.#r),s=document.createElement("span");if(s.className="checkpoint-label",s.setAttribute("part","checkpoint-label"),s.textContent=o??i??e.run_id,r.append(s),o!==null&&i!==null){let l=document.createElement("span");l.className="checkpoint-time",l.setAttribute("part","checkpoint-time"),l.textContent=i,r.append(l)}if((o===null?i!==null:n.has(Hd(o)))&&e.run_id!==""){let l=document.createElement("span");l.className="checkpoint-id",l.setAttribute("part","checkpoint-id"),l.textContent=e.run_id.slice(0,8),l.title=e.run_id,r.append(l)}if(e.parent_run_id!==null){let l=document.createElement("span");l.className="checkpoint-branch",l.setAttribute("part","checkpoint-branch"),l.textContent=this.#r.forkedRun,l.title=e.parent_run_id,r.append(l)}return r.append(this.#l(e.run_id,"resume",this.#r.resumeRun),this.#l(e.run_id,"fork",this.#r.forkRun)),r}#l(e,n,r){let o=document.createElement("button");return o.type="button",o.className=`checkpoint-action checkpoint-${n}`,o.setAttribute("part",`checkpoint-action checkpoint-${n}`),o.textContent=r,o.addEventListener("click",()=>{this.close(),this.#n(e,n)}),o}};function zd(t,e){let n=document.createElement("button");return n.type="button",n.className=`confirm-btn confirm-btn--${t}`,n.setAttribute("part",`confirm-button confirm-${t}`),n.textContent=e,n}function Ta(t,e,n={}){let r=n.strings??le;return new Promise(o=>{let i=document.createElement("div");i.className="confirm",i.setAttribute("part","confirm"),i.setAttribute("data-tool-name",e.toolName),i.setAttribute("role","group"),i.setAttribute("aria-label",r.confirmAction);let s=document.createElement("div");s.className="confirm-body",s.setAttribute("part","confirm-body"),s.textContent=e.message??r.confirmRun.replace("{tool}",e.toolName);let a=document.createElement("pre");a.className="confirm-args",a.setAttribute("part","confirm-args"),a.textContent=JSON.stringify(e.args,null,2),a.hidden=Object.keys(e.args).length===0;let l=document.createElement("div");l.className="confirm-actions",l.setAttribute("part","confirm-actions");let c=zd("cancel",r.cancel),p=zd("confirm",r.confirm),m=!1,y=f=>{m||(m=!0,i.remove(),o(f))};if(c.addEventListener("click",()=>y(!1)),p.addEventListener("click",()=>y(!0)),n.signal?.addEventListener("abort",()=>y(!1),{once:!0}),l.append(c,p),i.append(s,a,l),t.appendChild(i),n.signal?.aborted===!0){y(!1);return}p.focus()})}function Sa(t){let e=t.replace(/[._-]+/g," ").trim();return e===""?t:e.charAt(0).toUpperCase()+e.slice(1)}function tv(t){let e=document.createElement("input");return e.type="text",e.className="question-input",e.setAttribute("part","question-input"),e.placeholder=t,e}function Aa(t,e,n={}){let r=n.strings??le,o=e.options??[],i=o.length>0,s=!i||e.allowCustom===!0;return new Promise(a=>{let l=document.createElement("div");l.className="question",l.setAttribute("part","question"),l.setAttribute("role","group"),l.setAttribute("aria-label",r.askUserAction);let c=document.createElement("div");c.className="question-body",c.setAttribute("part","question-body"),c.textContent=e.question;let p=document.createElement("div");p.className="question-options",p.setAttribute("part","question-options");let m=`q-${o.length}-${e.question.length}`,y=[];for(let U of o){let K=document.createElement("label");K.className="question-choice",K.setAttribute("part","question-choice");let oe=document.createElement("input");oe.type="radio",oe.name=m,oe.value=U,oe.setAttribute("part","question-radio");let je=document.createElement("span");je.setAttribute("part","question-choice-text"),je.textContent=U,K.append(oe,je),p.appendChild(K),y.push(oe)}let f=null,h=null;if(s){if(h=tv(r.answerPlaceholder),i){let U=document.createElement("label");U.className="question-choice",U.setAttribute("part","question-choice"),f=document.createElement("input"),f.type="radio",f.name=m,f.value="",f.setAttribute("part","question-radio");let K=document.createElement("span");K.setAttribute("part","question-choice-text"),K.textContent=r.otherOption,U.append(f,K),p.appendChild(U),h.disabled=!0}p.appendChild(h)}let g=document.createElement("div");g.className="question-actions",g.setAttribute("part","question-actions");let x=document.createElement("button");x.type="button",x.className="question-btn",x.setAttribute("part","question-button"),x.textContent=r.submit,g.appendChild(x);let S=!1,w=()=>{let U=y.find(K=>K.checked);if(U!==void 0)return U.value;if(h!==null&&(f===null||f.checked)){let K=h.value.trim();return K===""?null:K}return null},I=()=>{h!==null&&f!==null&&(h.disabled=!f.checked),x.disabled=w()===null},H=U=>{if(!S){S=!0,x.disabled=!0;for(let K of y)K.disabled=!0;f!==null&&(f.disabled=!0),h!==null&&(h.disabled=!0),l.setAttribute("data-resolved",U===""?"cancelled":"answered"),a(U)}};for(let U of[...y,...f!==null?[f]:[]])U.addEventListener("change",I);if(h?.addEventListener("input",I),h?.addEventListener("keydown",U=>{if(U.key==="Enter"){U.preventDefault();let K=w();K!==null&&H(K)}}),x.addEventListener("click",()=>{let U=w();U!==null&&H(U)}),n.signal?.addEventListener("abort",()=>H(""),{once:!0}),l.append(c,p,g),t.appendChild(l),n.signal?.aborted===!0){H("");return}I(),(i?y[0]:h)?.focus()})}function Gd(t,e){(e==null||e>t.length)&&(e=t.length);for(var n=0,r=Array(e);n<e;n++)r[n]=t[n];return r}function nv(t){if(Array.isArray(t))return t}function rv(t,e){var n=t==null?null:typeof Symbol<"u"&&t[Symbol.iterator]||t["@@iterator"];if(n!=null){var r,o,i,s,a=[],l=!0,c=!1;try{if(i=(n=n.call(t)).next,e!==0)for(;!(l=(r=i.call(n)).done)&&(a.push(r.value),a.length!==e);l=!0);}catch(p){c=!0,o=p}finally{try{if(!l&&n.return!=null&&(s=n.return(),Object(s)!==s))return}finally{if(c)throw o}}return a}}function ov(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function iv(t,e){return nv(t)||rv(t,e)||sv(t,e)||ov()}function sv(t,e){if(t){if(typeof t=="string")return Gd(t,e);var n={}.toString.call(t).slice(8,-1);return n==="Object"&&t.constructor&&(n=t.constructor.name),n==="Map"||n==="Set"?Array.from(t):n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?Gd(t,e):void 0}}var tu=Object.entries,Fd=Object.setPrototypeOf,av=Object.isFrozen,lv=Object.getPrototypeOf,cv=Object.getOwnPropertyDescriptor,we=Object.freeze,Te=Object.seal,Un=Object.create,nu=typeof Reflect<"u"&&Reflect,Oa=nu.apply,Ma=nu.construct;we||(we=function(e){return e});Te||(Te=function(e){return e});Oa||(Oa=function(e,n){for(var r=arguments.length,o=new Array(r>2?r-2:0),i=2;i<r;i++)o[i-2]=arguments[i];return e.apply(n,o)});Ma||(Ma=function(e){for(var n=arguments.length,r=new Array(n>1?n-1:0),o=1;o<n;o++)r[o-1]=arguments[o];return new e(...r)});var Pn=me(Array.prototype.forEach),dv=me(Array.prototype.lastIndexOf),$d=me(Array.prototype.pop),Dn=me(Array.prototype.push),uv=me(Array.prototype.splice),It=Array.isArray,br=me(String.prototype.toLowerCase),ka=me(String.prototype.toString),Vd=me(String.prototype.match),gr=me(String.prototype.replace),Bd=me(String.prototype.indexOf),pv=me(String.prototype.trim),hv=me(Number.prototype.toString),fv=me(Boolean.prototype.toString),jd=typeof BigInt>"u"?null:me(BigInt.prototype.toString),qd=typeof Symbol>"u"?null:me(Symbol.prototype.toString),ye=me(Object.prototype.hasOwnProperty),vr=me(Object.prototype.toString),be=me(RegExp.prototype.test),sn=mv(TypeError);function me(t){return function(e){e instanceof RegExp&&(e.lastIndex=0);for(var n=arguments.length,r=new Array(n>1?n-1:0),o=1;o<n;o++)r[o-1]=arguments[o];return Oa(t,e,r)}}function mv(t){return function(){for(var e=arguments.length,n=new Array(e),r=0;r<e;r++)n[r]=arguments[r];return Ma(t,n)}}function W(t,e){let n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:br;if(Fd&&Fd(t,null),!It(e))return t;let r=e.length;for(;r--;){let o=e[r];if(typeof o=="string"){let i=n(o);i!==o&&(av(e)||(e[r]=i),o=i)}t[o]=!0}return t}function gv(t){for(let e=0;e<t.length;e++)ye(t,e)||(t[e]=null);return t}function Ae(t){let e=Un(null);for(let r of tu(t)){var n=iv(r,2);let o=n[0],i=n[1];ye(t,o)&&(It(i)?e[o]=gv(i):i&&typeof i=="object"&&i.constructor===Object?e[o]=Ae(i):e[o]=i)}return e}function vv(t){switch(typeof t){case"string":return t;case"number":return hv(t);case"boolean":return fv(t);case"bigint":return jd?jd(t):"0";case"symbol":return qd?qd(t):"Symbol()";case"undefined":return vr(t);case"function":case"object":{if(t===null)return vr(t);let e=t,n=Ye(e,"toString");if(typeof n=="function"){let r=n(e);return typeof r=="string"?r:vr(r)}return vr(t)}default:return vr(t)}}function Ye(t,e){for(;t!==null;){let r=cv(t,e);if(r){if(r.get)return me(r.get);if(typeof r.value=="function")return me(r.value)}t=lv(t)}function n(){return null}return n}function bv(t){try{return be(t,""),!0}catch{return!1}}var Wd=we(["a","abbr","acronym","address","area","article","aside","audio","b","bdi","bdo","big","blink","blockquote","body","br","button","canvas","caption","center","cite","code","col","colgroup","content","data","datalist","dd","decorator","del","details","dfn","dialog","dir","div","dl","dt","element","em","fieldset","figcaption","figure","font","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","img","input","ins","kbd","label","legend","li","main","map","mark","marquee","menu","menuitem","meter","nav","nobr","ol","optgroup","option","output","p","picture","pre","progress","q","rp","rt","ruby","s","samp","search","section","select","shadow","slot","small","source","spacer","span","strike","strong","style","sub","summary","sup","table","tbody","td","template","textarea","tfoot","th","thead","time","tr","track","tt","u","ul","var","video","wbr"]),Ca=we(["svg","a","altglyph","altglyphdef","altglyphitem","animatecolor","animatemotion","animatetransform","circle","clippath","defs","desc","ellipse","enterkeyhint","exportparts","filter","font","g","glyph","glyphref","hkern","image","inputmode","line","lineargradient","marker","mask","metadata","mpath","part","path","pattern","polygon","polyline","radialgradient","rect","stop","style","switch","symbol","text","textpath","title","tref","tspan","view","vkern"]),Ia=we(["feBlend","feColorMatrix","feComponentTransfer","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feDistantLight","feDropShadow","feFlood","feFuncA","feFuncB","feFuncG","feFuncR","feGaussianBlur","feImage","feMerge","feMergeNode","feMorphology","feOffset","fePointLight","feSpecularLighting","feSpotLight","feTile","feTurbulence"]),yv=we(["animate","color-profile","cursor","discard","font-face","font-face-format","font-face-name","font-face-src","font-face-uri","foreignobject","hatch","hatchpath","mesh","meshgradient","meshpatch","meshrow","missing-glyph","script","set","solidcolor","unknown","use"]),Ra=we(["math","menclose","merror","mfenced","mfrac","mglyph","mi","mlabeledtr","mmultiscripts","mn","mo","mover","mpadded","mphantom","mroot","mrow","ms","mspace","msqrt","mstyle","msub","msup","msubsup","mtable","mtd","mtext","mtr","munder","munderover","mprescripts"]),xv=we(["maction","maligngroup","malignmark","mlongdiv","mscarries","mscarry","msgroup","mstack","msline","msrow","semantics","annotation","annotation-xml","mprescripts","none"]),Xd=we(["#text"]),Kd=we(["accept","action","align","alt","autocapitalize","autocomplete","autopictureinpicture","autoplay","background","bgcolor","border","capture","cellpadding","cellspacing","checked","cite","class","clear","color","cols","colspan","command","commandfor","controls","controlslist","coords","crossorigin","datetime","decoding","default","dir","disabled","disablepictureinpicture","disableremoteplayback","download","draggable","enctype","enterkeyhint","exportparts","face","for","headers","height","hidden","high","href","hreflang","id","inert","inputmode","integrity","ismap","kind","label","lang","list","loading","loop","low","max","maxlength","media","method","min","minlength","multiple","muted","name","nonce","noshade","novalidate","nowrap","open","optimum","part","pattern","placeholder","playsinline","popover","popovertarget","popovertargetaction","poster","preload","pubdate","radiogroup","readonly","rel","required","rev","reversed","role","rows","rowspan","spellcheck","scope","selected","shape","size","sizes","slot","span","srclang","start","src","srcset","step","style","summary","tabindex","title","translate","type","usemap","valign","value","width","wrap","xmlns"]),Na=we(["accent-height","accumulate","additive","alignment-baseline","amplitude","ascent","attributename","attributetype","azimuth","basefrequency","baseline-shift","begin","bias","by","class","clip","clippathunits","clip-path","clip-rule","color","color-interpolation","color-interpolation-filters","color-profile","color-rendering","cx","cy","d","dx","dy","diffuseconstant","direction","display","divisor","dominant-baseline","dur","edgemode","elevation","end","exponent","fill","fill-opacity","fill-rule","filter","filterunits","flood-color","flood-opacity","font-family","font-size","font-size-adjust","font-stretch","font-style","font-variant","font-weight","fx","fy","g1","g2","glyph-name","glyphref","gradientunits","gradienttransform","height","href","id","image-rendering","in","in2","intercept","k","k1","k2","k3","k4","kerning","keypoints","keysplines","keytimes","lang","lengthadjust","letter-spacing","kernelmatrix","kernelunitlength","lighting-color","local","marker-end","marker-mid","marker-start","markerheight","markerunits","markerwidth","maskcontentunits","maskunits","max","mask","mask-type","media","method","mode","min","name","numoctaves","offset","operator","opacity","order","orient","orientation","origin","overflow","paint-order","path","pathlength","patterncontentunits","patterntransform","patternunits","points","preservealpha","preserveaspectratio","primitiveunits","r","rx","ry","radius","refx","refy","repeatcount","repeatdur","restart","result","rotate","scale","seed","shape-rendering","slope","specularconstant","specularexponent","spreadmethod","startoffset","stddeviation","stitchtiles","stop-color","stop-opacity","stroke-dasharray","stroke-dashoffset","stroke-linecap","stroke-linejoin","stroke-miterlimit","stroke-opacity","stroke","stroke-width","style","surfacescale","systemlanguage","tabindex","tablevalues","targetx","targety","transform","transform-origin","text-anchor","text-decoration","text-orientation","text-rendering","textlength","type","u1","u2","unicode","values","viewbox","visibility","version","vert-adv-y","vert-origin-x","vert-origin-y","width","word-spacing","wrap","writing-mode","xchannelselector","ychannelselector","x","x1","x2","xmlns","y","y1","y2","z","zoomandpan"]),Yd=we(["accent","accentunder","align","bevelled","close","columnalign","columnlines","columnspacing","columnspan","denomalign","depth","dir","display","displaystyle","encoding","fence","frame","height","href","id","largeop","length","linethickness","lquote","lspace","mathbackground","mathcolor","mathsize","mathvariant","maxsize","minsize","movablelimits","notation","numalign","open","rowalign","rowlines","rowspacing","rowspan","rspace","rquote","scriptlevel","scriptminsize","scriptsizemultiplier","selection","separator","separators","stretchy","subscriptshift","supscriptshift","symmetric","voffset","width","xmlns"]),Si=we(["xlink:href","xml:id","xlink:title","xml:space","xmlns:xlink"]),_v=Te(/{{[\w\W]*|^[\w\W]*}}/g),Ev=Te(/<%[\w\W]*|^[\w\W]*%>/g),wv=Te(/\${[\w\W]*/g),Tv=Te(/^data-[\-\w.\u00B7-\uFFFF]+$/),Sv=Te(/^aria-[\-\w]+$/),Zd=Te(/^(?:(?:(?:f|ht)tps?|mailto|tel|callto|sms|cid|xmpp|matrix):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i),Av=Te(/^(?:\w+script|data):/i),kv=Te(/[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g),Cv=Te(/^html$/i),Iv=Te(/^[a-z][.\w]*(-[.\w]+)+$/i),Jd=Te(/<[/\w!]/g),Qd=Te(/<[/\w]/g),Rv=Te(/<\/no(script|embed|frames)/i),Nv=Te(/\/>/i),ze={element:1,attribute:2,text:3,cdataSection:4,entityReference:5,entityNode:6,processingInstruction:7,comment:8,document:9,documentType:10,documentFragment:11,notation:12},Ov=function(){return typeof window>"u"?null:window},Mv=function(e,n){if(typeof e!="object"||typeof e.createPolicy!="function")return null;let r=null,o="data-tt-policy-suffix";n&&n.hasAttribute(o)&&(r=n.getAttribute(o));let i="dompurify"+(r?"#"+r:"");try{return e.createPolicy(i,{createHTML(s){return s},createScriptURL(s){return s}})}catch{return console.warn("TrustedTypes policy "+i+" could not be created."),null}},eu=function(){return{afterSanitizeAttributes:[],afterSanitizeElements:[],afterSanitizeShadowDOM:[],beforeSanitizeAttributes:[],beforeSanitizeElements:[],beforeSanitizeShadowDOM:[],uponSanitizeAttribute:[],uponSanitizeElement:[],uponSanitizeShadowNode:[]}},Ct=function(e,n,r,o){return ye(e,n)&&It(e[n])?W(o.base?Ae(o.base):{},e[n],o.transform):r};function ru(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:Ov(),e=T=>ru(T);if(e.version="3.4.13",e.removed=[],!t||!t.document||t.document.nodeType!==ze.document||!t.Element)return e.isSupported=!1,e;let n=t.document,r=n,o=r.currentScript;t.DocumentFragment;let i=t.HTMLTemplateElement,s=t.Node,a=t.Element,l=t.NodeFilter,c=t.NamedNodeMap;c===void 0&&(t.NamedNodeMap||t.MozNamedAttrMap),t.HTMLFormElement;let p=t.DOMParser,m=t.trustedTypes,y=a.prototype,f=Ye(y,"cloneNode"),h=Ye(y,"remove"),g=Ye(y,"nextSibling"),x=Ye(y,"childNodes"),S=Ye(y,"parentNode"),w=Ye(y,"shadowRoot"),I=Ye(y,"attributes"),H=s&&s.prototype?Ye(s.prototype,"nodeType"):null,U=s&&s.prototype?Ye(s.prototype,"nodeName"):null,K=s&&s.prototype?Ye(s.prototype,"ownerDocument"):null;if(typeof i=="function"){let T=n.createElement("template");T.content&&T.content.ownerDocument&&(n=T.content.ownerDocument)}let oe,je="",Gi,tl=!1,$n=0,nl=function(){if($n>0)throw sn('A configured TRUSTED_TYPES_POLICY callback (createHTML or createScriptURL) must not call DOMPurify.sanitize, as that causes infinite recursion. Do not pass a policy whose callbacks wrap DOMPurify as TRUSTED_TYPES_POLICY; see the "DOMPurify and Trusted Types" section of the README.')},dn=function(u){nl(),$n++;try{return oe.createHTML(u)}finally{$n--}},Du=function(u){nl(),$n++;try{return oe.createScriptURL(u)}finally{$n--}},Uu=function(){return tl||(Gi=Mv(m,o),tl=!0),Gi},Cr=n,Fi=Cr.implementation,rl=Cr.createNodeIterator,Hu=Cr.createDocumentFragment,zu=Cr.getElementsByTagName,Gu=r.importNode,ie=eu();e.isSupported=typeof tu=="function"&&typeof S=="function"&&Fi&&Fi.createHTMLDocument!==void 0;let Fu=_v,$u=Ev,Vu=wv,Bu=Tv,ju=Sv,qu=Av,ol=kv,Wu=Iv,il=Zd,se=null,$i=W({},[...Wd,...Ca,...Ia,...Ra,...Xd]),ae=null,Vi=W({},[...Kd,...Na,...Yd,...Si]),pe=Object.seal(Un(null,{tagNameCheck:{writable:!0,configurable:!1,enumerable:!0,value:null},attributeNameCheck:{writable:!0,configurable:!1,enumerable:!0,value:null},allowCustomizedBuiltInElements:{writable:!0,configurable:!1,enumerable:!0,value:!1}})),Vn=null,sl=null,bt=Object.seal(Un(null,{tagCheck:{writable:!0,configurable:!1,enumerable:!0,value:null},attributeCheck:{writable:!0,configurable:!1,enumerable:!0,value:null}})),al=!0,Bi=!0,ll=!1,cl=!0,yt=!1,xt=!0,Nt=!1,ji=!1,Ir=null,Rr=null,qi=!1,un=!1,Nr=!1,Or=!1,dl=!0,ul=!1,pl="user-content-",Wi=!0,Mr=!1,pn={},Qe=null,Xi=W({},["annotation-xml","audio","colgroup","desc","foreignobject","head","iframe","math","mi","mn","mo","ms","mtext","noembed","noframes","noscript","plaintext","script","selectedcontent","style","svg","template","thead","title","video","xmp"]),hl=null,fl=W({},["audio","video","img","source","image","track"]),Ki=null,ml=W({},["alt","class","for","id","label","name","pattern","placeholder","role","summary","title","value","style","xmlns"]),Lr="http://www.w3.org/1998/Math/MathML",Pr="http://www.w3.org/2000/svg",et="http://www.w3.org/1999/xhtml",hn=et,Yi=!1,Zi=null,Xu=W({},[Lr,Pr,et],ka),gl=we(["mi","mo","mn","ms","mtext"]),Ji=W({},gl),vl=we(["annotation-xml"]),Qi=W({},vl),Ku=W({},["title","style","font","a","script"]),Bn=null,Yu=["application/xhtml+xml","text/html"],Zu="text/html",ce=null,fn=null,Ju=n.createElement("form"),bl=function(u){return u instanceof RegExp||u instanceof Function},es=function(){let u=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};if(fn&&fn===u)return;(!u||typeof u!="object")&&(u={}),u=Ae(u),Bn=Yu.indexOf(u.PARSER_MEDIA_TYPE)===-1?Zu:u.PARSER_MEDIA_TYPE,ce=Bn==="application/xhtml+xml"?ka:br,se=Ct(u,"ALLOWED_TAGS",$i,{transform:ce}),ae=Ct(u,"ALLOWED_ATTR",Vi,{transform:ce}),Zi=Ct(u,"ALLOWED_NAMESPACES",Xu,{transform:ka}),Ki=Ct(u,"ADD_URI_SAFE_ATTR",ml,{transform:ce,base:ml}),hl=Ct(u,"ADD_DATA_URI_TAGS",fl,{transform:ce,base:fl}),Qe=Ct(u,"FORBID_CONTENTS",Xi,{transform:ce}),Vn=Ct(u,"FORBID_TAGS",Ae({}),{transform:ce}),sl=Ct(u,"FORBID_ATTR",Ae({}),{transform:ce}),pn=ye(u,"USE_PROFILES")?u.USE_PROFILES&&typeof u.USE_PROFILES=="object"?Ae(u.USE_PROFILES):u.USE_PROFILES:!1,al=u.ALLOW_ARIA_ATTR!==!1,Bi=u.ALLOW_DATA_ATTR!==!1,ll=u.ALLOW_UNKNOWN_PROTOCOLS||!1,cl=u.ALLOW_SELF_CLOSE_IN_ATTR!==!1,yt=u.SAFE_FOR_TEMPLATES||!1,xt=u.SAFE_FOR_XML!==!1,Nt=u.WHOLE_DOCUMENT||!1,un=u.RETURN_DOM||!1,Nr=u.RETURN_DOM_FRAGMENT||!1,Or=u.RETURN_TRUSTED_TYPE||!1,qi=u.FORCE_BODY||!1,dl=u.SANITIZE_DOM!==!1,ul=u.SANITIZE_NAMED_PROPS||!1,Wi=u.KEEP_CONTENT!==!1,Mr=u.IN_PLACE||!1,il=bv(u.ALLOWED_URI_REGEXP)?u.ALLOWED_URI_REGEXP:Zd,hn=typeof u.NAMESPACE=="string"?u.NAMESPACE:et,Ji=ye(u,"MATHML_TEXT_INTEGRATION_POINTS")&&u.MATHML_TEXT_INTEGRATION_POINTS&&typeof u.MATHML_TEXT_INTEGRATION_POINTS=="object"?Ae(u.MATHML_TEXT_INTEGRATION_POINTS):W({},gl),Qi=ye(u,"HTML_INTEGRATION_POINTS")&&u.HTML_INTEGRATION_POINTS&&typeof u.HTML_INTEGRATION_POINTS=="object"?Ae(u.HTML_INTEGRATION_POINTS):W({},vl);let b=ye(u,"CUSTOM_ELEMENT_HANDLING")&&u.CUSTOM_ELEMENT_HANDLING&&typeof u.CUSTOM_ELEMENT_HANDLING=="object"?Ae(u.CUSTOM_ELEMENT_HANDLING):Un(null);if(pe=Un(null),ye(b,"tagNameCheck")&&bl(b.tagNameCheck)&&(pe.tagNameCheck=b.tagNameCheck),ye(b,"attributeNameCheck")&&bl(b.attributeNameCheck)&&(pe.attributeNameCheck=b.attributeNameCheck),ye(b,"allowCustomizedBuiltInElements")&&typeof b.allowCustomizedBuiltInElements=="boolean"&&(pe.allowCustomizedBuiltInElements=b.allowCustomizedBuiltInElements),Te(pe),yt&&(Bi=!1),Nr&&(un=!0),pn&&(se=W({},Xd),ae=Un(null),pn.html===!0&&(W(se,Wd),W(ae,Kd)),pn.svg===!0&&(W(se,Ca),W(ae,Na),W(ae,Si)),pn.svgFilters===!0&&(W(se,Ia),W(ae,Na),W(ae,Si)),pn.mathMl===!0&&(W(se,Ra),W(ae,Yd),W(ae,Si))),bt.tagCheck=null,bt.attributeCheck=null,ye(u,"ADD_TAGS")&&(typeof u.ADD_TAGS=="function"?bt.tagCheck=u.ADD_TAGS:It(u.ADD_TAGS)&&(se===$i&&(se=Ae(se)),W(se,u.ADD_TAGS,ce))),ye(u,"ADD_ATTR")&&(typeof u.ADD_ATTR=="function"?bt.attributeCheck=u.ADD_ATTR:It(u.ADD_ATTR)&&(ae===Vi&&(ae=Ae(ae)),W(ae,u.ADD_ATTR,ce))),ye(u,"ADD_URI_SAFE_ATTR")&&It(u.ADD_URI_SAFE_ATTR)&&W(Ki,u.ADD_URI_SAFE_ATTR,ce),ye(u,"FORBID_CONTENTS")&&It(u.FORBID_CONTENTS)&&(Qe===Xi&&(Qe=Ae(Qe)),W(Qe,u.FORBID_CONTENTS,ce)),ye(u,"ADD_FORBID_CONTENTS")&&It(u.ADD_FORBID_CONTENTS)&&(Qe===Xi&&(Qe=Ae(Qe)),W(Qe,u.ADD_FORBID_CONTENTS,ce)),Wi&&(se["#text"]=!0),Nt&&W(se,["html","head","body"]),se.table&&(W(se,["tbody"]),delete Vn.tbody),u.TRUSTED_TYPES_POLICY){if(typeof u.TRUSTED_TYPES_POLICY.createHTML!="function")throw sn('TRUSTED_TYPES_POLICY configuration option must provide a "createHTML" hook.');if(typeof u.TRUSTED_TYPES_POLICY.createScriptURL!="function")throw sn('TRUSTED_TYPES_POLICY configuration option must provide a "createScriptURL" hook.');let _=oe;oe=u.TRUSTED_TYPES_POLICY;try{je=dn("")}catch(N){throw oe=_,N}}else u.TRUSTED_TYPES_POLICY===null?(oe=void 0,je=""):(oe===void 0&&(oe=Uu()),oe&&typeof je=="string"&&(je=dn("")));we&&we(u),fn=u},yl=W({},[...Ca,...Ia,...yv]),xl=W({},[...Ra,...xv]),Qu=function(u,b,_){return b.namespaceURI===et?u==="svg":b.namespaceURI===Lr?u==="svg"&&(_==="annotation-xml"||Ji[_]):!!yl[u]},ep=function(u,b,_){return b.namespaceURI===et?u==="math":b.namespaceURI===Pr?u==="math"&&Qi[_]:!!xl[u]},tp=function(u,b,_){return b.namespaceURI===Pr&&!Qi[_]||b.namespaceURI===Lr&&!Ji[_]?!1:!xl[u]&&(Ku[u]||!yl[u])},np=function(u){let b=S(u);(!b||!b.tagName)&&(b={namespaceURI:hn,tagName:"template"});let _=br(u.tagName),N=br(b.tagName);return Zi[u.namespaceURI]?u.namespaceURI===Pr?Qu(_,b,N):u.namespaceURI===Lr?ep(_,b,N):u.namespaceURI===et?tp(_,b,N):!!(Bn==="application/xhtml+xml"&&Zi[u.namespaceURI]):!1},_t=function(u){Dn(e.removed,{element:u});try{S(u).removeChild(u)}catch{if(h(u),!S(u))throw sn("a node selected for removal could not be detached from its tree and cannot be safely returned; refusing to sanitize in place")}},Dr=function(u){jn(u);let b=x(u);if(b){let N=[];Pn(b,L=>{Dn(N,L)}),Pn(N,L=>{try{h(L)}catch{}})}let _=I(u);if(_)for(let N=_.length-1;N>=0;--N){let L=_[N],z=L&&L.name;if(typeof z=="string")try{u.removeAttribute(z)}catch{}}},Ot=function(u,b){try{Dn(e.removed,{attribute:b.getAttributeNode(u),from:b})}catch{Dn(e.removed,{attribute:null,from:b})}if(b.removeAttribute(u),u==="is")if(un||Nr)try{_t(b)}catch{}else try{b.setAttribute(u,"")}catch{}},rp=function(u){let b=I(u);if(b)for(let _=b.length-1;_>=0;--_){let N=b[_],L=N&&N.name;if(!(typeof L!="string"||ae[ce(L)]))try{u.removeAttribute(L)}catch{}}},jn=function(u){let b=[u];for(;b.length>0;){let _=b.pop();(H?H(_):_.nodeType)===ze.element&&rp(_);let L=x(_);if(L)for(let z=L.length-1;z>=0;--z)b.push(L[z])}},op=function(u){if(!xt)return;let b=[u];for(;b.length>0;){let _=b.pop(),N=H?H(_):_.nodeType;if(N===ze.processingInstruction||N===ze.comment&&be(Qd,_.data)){try{h(_)}catch{}continue}if(N===ze.element){let z=_,Z=ce(U?U(_):_.nodeName);try{z.hasAttribute&&z.hasAttribute("patchsrc")&&z.removeAttribute("patchsrc"),z.hasAttribute&&z.hasAttribute("for")&&Z!=="label"&&Z!=="output"&&z.removeAttribute("for")}catch{}}let L=x(_);if(L)for(let z=L.length-1;z>=0;--z)b.push(L[z])}},_l=function(u){let b=null,_=null;if(qi)u="<remove></remove>"+u;else{let z=Vd(u,/^[\r\n\t ]+/);_=z&&z[0]}Bn==="application/xhtml+xml"&&hn===et&&(u='<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>'+u+"</body></html>");let N=oe?dn(u):u;if(hn===et)try{b=new p().parseFromString(N,Bn)}catch{}if(!b||!b.documentElement){b=Fi.createDocument(hn,"template",null);try{b.documentElement.innerHTML=Yi?je:N}catch{}}let L=b.body||b.documentElement;return u&&_&&L.insertBefore(n.createTextNode(_),L.childNodes[0]||null),hn===et?zu.call(b,Nt?"html":"body")[0]:Nt?b.documentElement:L},El=function(u){let b=K?K(u):u.ownerDocument;return rl.call(b||u,u,l.SHOW_ELEMENT|l.SHOW_COMMENT|l.SHOW_TEXT|l.SHOW_PROCESSING_INSTRUCTION|l.SHOW_CDATA_SECTION,null)},Ur=function(u){return u=gr(u,Fu," "),u=gr(u,$u," "),u=gr(u,Vu," "),u},ts=function(u){var b;u.normalize();let _=K?K(u):u.ownerDocument,N=rl.call(_||u,u,l.SHOW_TEXT|l.SHOW_COMMENT|l.SHOW_CDATA_SECTION|l.SHOW_PROCESSING_INSTRUCTION,null),L=N.nextNode();for(;L;)L.data=Ur(L.data),L=N.nextNode();let z=(b=u.querySelectorAll)===null||b===void 0?void 0:b.call(u,"template");z&&Pn(z,Z=>{mn(Z.content)&&ts(Z.content)})},Hr=function(u){let b=U?U(u):null;return typeof b!="string"||ce(b)!=="form"?!1:typeof u.nodeName!="string"||typeof u.textContent!="string"||typeof u.removeChild!="function"||u.attributes!==I(u)||typeof u.removeAttribute!="function"||typeof u.setAttribute!="function"||typeof u.namespaceURI!="string"||typeof u.insertBefore!="function"||typeof u.hasChildNodes!="function"||u.nodeType!==H(u)||u.childNodes!==x(u)},mn=function(u){if(!H||typeof u!="object"||u===null)return!1;try{return H(u)===ze.documentFragment}catch{return!1}},qn=function(u){if(!H||typeof u!="object"||u===null)return!1;try{return typeof H(u)=="number"}catch{return!1}};function tt(T,u,b){T.length!==0&&Pn(T,_=>{_.call(e,u,b,fn)})}let ip=function(u,b){return!!(xt&&u.hasChildNodes()&&!qn(u.firstElementChild)&&be(Jd,u.textContent)&&be(Jd,u.innerHTML)||xt&&u.namespaceURI===et&&b==="style"&&qn(u.firstElementChild)||u.nodeType===ze.processingInstruction||xt&&u.nodeType===ze.comment&&be(Qd,u.data))},sp=function(u,b,_){if(!Vn[b]&&Al(b)&&(pe.tagNameCheck instanceof RegExp&&be(pe.tagNameCheck,b)||pe.tagNameCheck instanceof Function&&pe.tagNameCheck(b)))return!1;if(Wi&&!Qe[b]){let N=S(u),L=x(u);if(L&&N){let z=L.length;for(let Z=z-1;Z>=0;--Z){let de=u===_?f(L[Z],!0):L[Z];N.insertBefore(de,g(u))}}}return _t(u),!0},wl=function(u,b,_,N){return u.length===0?b:b===_||b===N?Ae(b):b},Tl=function(u,b){if(tt(ie.beforeSanitizeElements,u,null),u!==b&&S(u)===null)return Mr&&jn(u),!0;if(Hr(u))return _t(u),!0;let _=ce(U?U(u):u.nodeName);if(se=wl(ie.uponSanitizeElement,se,$i,Ir),tt(ie.uponSanitizeElement,u,{tagName:_,allowedTags:se}),u!==b&&S(u)===null)return Mr&&jn(u),!0;if(ip(u,_))return _t(u),!0;if(Vn[_]||!(bt.tagCheck instanceof Function&&bt.tagCheck(_))&&!se[_]){let L=sp(u,_,b);return L===!1&&tt(ie.afterSanitizeElements,u,null),L}if((H?H(u):u.nodeType)===ze.element&&!np(u)||(_==="noscript"||_==="noembed"||_==="noframes")&&be(Rv,u.innerHTML))return _t(u),!0;if(yt&&u.nodeType===ze.text){let L=Ur(u.textContent);u.textContent!==L&&(Dn(e.removed,{element:u.cloneNode()}),u.textContent=L)}return tt(ie.afterSanitizeElements,u,null),!1},Sl=function(u,b,_){if(sl[b]||xt&&b==="patchsrc"||xt&&b==="for"&&u!=="label"&&u!=="output"||dl&&(b==="id"||b==="name")&&(_ in n||_ in Ju))return!1;let N=ae[b]||bt.attributeCheck instanceof Function&&bt.attributeCheck(b,u);if(!(Bi&&be(Bu,b))){if(!(al&&be(ju,b))){if(N){if(!Ki[b]){if(!be(il,gr(_,ol,""))){if(!((b==="src"||b==="xlink:href"||b==="href")&&u!=="script"&&Bd(_,"data:")===0&&hl[u])){if(!(ll&&!be(qu,gr(_,ol,"")))){if(_)return!1}}}}}else if(!(Al(u)&&(pe.tagNameCheck instanceof RegExp&&be(pe.tagNameCheck,u)||pe.tagNameCheck instanceof Function&&pe.tagNameCheck(u))&&(pe.attributeNameCheck instanceof RegExp&&be(pe.attributeNameCheck,b)||pe.attributeNameCheck instanceof Function&&pe.attributeNameCheck(b,u))||b==="is"&&pe.allowCustomizedBuiltInElements&&(pe.tagNameCheck instanceof RegExp&&be(pe.tagNameCheck,_)||pe.tagNameCheck instanceof Function&&pe.tagNameCheck(_))))return!1}}return!0},ap=W({},["annotation-xml","color-profile","font-face","font-face-format","font-face-name","font-face-src","font-face-uri","missing-glyph"]),Al=function(u){return!ap[br(u)]&&be(Wu,u)},lp=function(u,b,_,N){if(oe&&typeof m=="object"&&typeof m.getAttributeType=="function"&&!_)switch(m.getAttributeType(u,b)){case"TrustedHTML":return dn(N);case"TrustedScriptURL":return Du(N)}return N},cp=function(u,b,_,N){try{_?u.setAttributeNS(_,b,N):u.setAttribute(b,N),Hr(u)?_t(u):$d(e.removed)}catch{Ot(b,u)}},kl=function(u){tt(ie.beforeSanitizeAttributes,u,null);let b=u.attributes;if(!b||Hr(u))return;ae=wl(ie.uponSanitizeAttribute,ae,Vi,Rr);let _={attrName:"",attrValue:"",keepAttr:!0,allowedAttributes:ae,forceKeepAttr:void 0},N=b.length,L=ce(u.nodeName);for(;N--;){let z=b[N],Z=z.name,de=z.namespaceURI,Re=z.value,Ne=ce(Z),rs=Re,Ce=Z==="value"?rs:pv(rs);if(_.attrName=Ne,_.attrValue=Ce,_.keepAttr=!0,_.forceKeepAttr=void 0,tt(ie.uponSanitizeAttribute,u,_),Ce=_.attrValue,ul&&(Ne==="id"||Ne==="name")&&Bd(Ce,pl)!==0&&(Ot(Z,u),Ce=pl+Ce),xt&&be(/((--!?|])>)|<\/(style|script|title|xmp|textarea|noscript|iframe|noembed|noframes)/i,Ce)){Ot(Z,u);continue}if(Ne==="attributename"&&Vd(Ce,"href")){Ot(Z,u);continue}if(!_.forceKeepAttr){if(!_.keepAttr){Ot(Z,u);continue}if(!cl&&be(Nv,Ce)){Ot(Z,u);continue}if(yt&&(Ce=Ur(Ce)),!Sl(L,Ne,Ce)){Ot(Z,u);continue}Ce=lp(L,Ne,de,Ce),Ce!==rs&&cp(u,Z,de,Ce)}}tt(ie.afterSanitizeAttributes,u,null)},zr=function(u){let b=null,_=El(u);for(tt(ie.beforeSanitizeShadowDOM,u,null);b=_.nextNode();)if(tt(ie.uponSanitizeShadowNode,b,null),Tl(b,u),kl(b),mn(b.content)&&zr(b.content),(H?H(b):b.nodeType)===ze.element){let L=w(b);mn(L)&&(ns(L),zr(L))}tt(ie.afterSanitizeShadowDOM,u,null)},ns=function(u){let b=[{node:u,shadow:null}];for(;b.length>0;){let _=b.pop();if(_.shadow){zr(_.shadow);continue}let N=_.node,z=(H?H(N):N.nodeType)===ze.element,Z=x(N);if(Z)for(let de=Z.length-1;de>=0;--de)b.push({node:Z[de],shadow:null});if(z){let de=U?U(N):null;if(typeof de=="string"&&ce(de)==="template"){let Re=N.content;mn(Re)&&b.push({node:Re,shadow:null})}}if(z){let de=w(N);mn(de)&&b.push({node:null,shadow:de},{node:de,shadow:null})}}};return e.sanitize=function(T){let u=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},b=null,_=null,N=null,L=null;if(Yi=!T,Yi&&(T="<!-->"),typeof T!="string"&&!qn(T)&&(T=vv(T),typeof T!="string"))throw sn("dirty is not a string, aborting");if(!e.isSupported)return T;ji?(se=Ir,ae=Rr):es(u),(ie.uponSanitizeElement.length>0||ie.uponSanitizeAttribute.length>0)&&(se=Ae(se)),ie.uponSanitizeAttribute.length>0&&(ae=Ae(ae)),e.removed=[];let z=Mr&&typeof T!="string"&&qn(T);if(z){op(T);let Re=U?U(T):T.nodeName;if(typeof Re=="string"){let Ne=ce(Re);if(!se[Ne]||Vn[Ne])throw Dr(T),sn("root node is forbidden and cannot be sanitized in-place")}if(Hr(T))throw Dr(T),sn("root node is clobbered and cannot be sanitized in-place");try{ns(T)}catch(Ne){throw Dr(T),Ne}}else if(qn(T))b=_l("<!---->"),_=b.ownerDocument.importNode(T,!0),_.nodeType===ze.element&&_.nodeName==="BODY"||_.nodeName==="HTML"?b=_:b.appendChild(_),ns(_);else{if(!un&&!yt&&!Nt&&T.indexOf("<")===-1)return oe&&Or?dn(T):T;if(b=_l(T),!b)return un?null:Or?je:""}b&&qi&&_t(b.firstChild);let Z=z?T:b;try{let Re=El(Z);for(;N=Re.nextNode();)Tl(N,Z),kl(N),mn(N.content)&&zr(N.content)}catch(Re){throw z&&(Dr(T),Pn(e.removed,Ne=>{Ne.element&&jn(Ne.element)})),Re}if(z)return Pn(e.removed,Re=>{Re.element&&jn(Re.element)}),yt&&ts(T),T;if(un){if(yt&&ts(b),Nr)for(L=Hu.call(b.ownerDocument);b.firstChild;)L.appendChild(b.firstChild);else L=b;return(ae.shadowroot||ae.shadowrootmode)&&(L=Gu.call(r,L,!0)),L}let de=Nt?b.outerHTML:b.innerHTML;return Nt&&se["!doctype"]&&b.ownerDocument&&b.ownerDocument.doctype&&b.ownerDocument.doctype.name&&be(Cv,b.ownerDocument.doctype.name)&&(de="<!DOCTYPE "+b.ownerDocument.doctype.name+`>
`+de),yt&&(de=Ur(de)),oe&&Or?dn(de):de},e.setConfig=function(){let T=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};es(T),ji=!0,Ir=se,Rr=ae},e.clearConfig=function(){fn=null,ji=!1,Ir=null,Rr=null,oe=Gi,je=""},e.isValidAttribute=function(T,u,b){fn||es({});let _=ce(T),N=ce(u);return Sl(_,N,b)},e.addHook=function(T,u){typeof u=="function"&&ye(ie,T)&&Dn(ie[T],u)},e.removeHook=function(T,u){if(ye(ie,T)){if(u!==void 0){let b=dv(ie[T],u);return b===-1?void 0:uv(ie[T],b,1)[0]}return $d(ie[T])}},e.removeHooks=function(T){ye(ie,T)&&(ie[T]=[])},e.removeAllHooks=function(){ie=eu()},e}var ou=ru();function Ua(){return{async:!1,breaks:!1,extensions:null,gfm:!0,hooks:null,pedantic:!1,renderer:null,silent:!1,tokenizer:null,walkTokens:null}}var cn=Ua();function pu(t){cn=t}var an={exec:()=>null};function Hn(t){let e=[];return n=>{let r=Math.max(0,Math.min(3,n-1)),o=e[r];return o||(o=t(r),e[r]=o),o}}function j(t,e=""){let n=typeof t=="string"?t:t.source,r={replace:(o,i)=>{let s=typeof i=="string"?i:i.source;return s=s.replace(ke.caret,"$1"),n=n.replace(o,s),r},getRegex:()=>new RegExp(n,e)};return r}var Lv=((t="")=>{try{return!!new RegExp("(?<=1)(?<!1)"+t)}catch{return!1}})(),ke={codeRemoveIndent:/^(?: {1,4}| {0,3}\t)/gm,outputLinkReplace:/\\([\[\]])/g,indentCodeCompensation:/^(\s+)(?:```)/,beginningSpace:/^\s+/,endingHash:/#$/,startingSpaceChar:/^ /,endingSpaceChar:/ $/,nonSpaceChar:/[^ ]/,newLineCharGlobal:/\n/g,tabCharGlobal:/\t/g,multipleSpaceGlobal:/\s+/g,blankLine:/^[ \t]*$/,doubleBlankLine:/\n[ \t]*\n[ \t]*$/,blockquoteStart:/^ {0,3}>/,blockquoteSetextReplace:/\n {0,3}((?:=+|-+) *)(?=\n|$)/g,blockquoteSetextReplace2:/^ {0,3}>[ \t]?/gm,listReplaceNesting:/^ {1,4}(?=( {4})*[^ ])/g,listIsTask:/^\[[ xX]\] +\S/,listReplaceTask:/^\[[ xX]\] +/,listTaskCheckbox:/\[[ xX]\]/,anyLine:/\n.*\n/,hrefBrackets:/^<(.*)>$/,tableDelimiter:/[:|]/,tableAlignChars:/^\||\| *$/g,tableRowBlankLine:/\n[ \t]*$/,tableAlignRight:/^ *-+: *$/,tableAlignCenter:/^ *:-+: *$/,tableAlignLeft:/^ *:-+ *$/,startATag:/^<a /i,endATag:/^<\/a>/i,startPreScriptTag:/^<(pre|code|kbd|script)(\s|>)/i,endPreScriptTag:/^<\/(pre|code|kbd|script)(\s|>)/i,startAngleBracket:/^</,endAngleBracket:/>$/,pedanticHrefTitle:/^([^'"]*[^\s])\s+(['"])(.*)\2/,unicodeAlphaNumeric:/[\p{L}\p{N}]/u,escapeTest:/[&<>"']/,escapeReplace:/[&<>"']/g,escapeTestNoEncode:/[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/,escapeReplaceNoEncode:/[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/g,caret:/(^|[^\[])\^/g,percentDecode:/%25/g,findPipe:/\|/g,splitPipe:/ \|/,slashPipe:/\\\|/g,carriageReturn:/\r\n|\r/g,spaceLine:/^ +$/gm,notSpaceStart:/^\S*/,endingNewline:/\n$/,listItemRegex:t=>new RegExp(`^( {0,3}${t})((?:[	 ][^\\n]*)?(?:\\n|$))`),nextBulletRegex:Hn(t=>new RegExp(`^ {0,${t}}(?:[*+-]|\\d{1,9}[.)])((?:[ 	][^\\n]*)?(?:\\n|$))`)),hrRegex:Hn(t=>new RegExp(`^ {0,${t}}((?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$)`)),fencesBeginRegex:Hn(t=>new RegExp(`^ {0,${t}}(?:\`\`\`|~~~)`)),headingBeginRegex:Hn(t=>new RegExp(`^ {0,${t}}#`)),htmlBeginRegex:Hn(t=>new RegExp(`^ {0,${t}}<(?:[a-z].*>|!--)`,"i")),blockquoteBeginRegex:Hn(t=>new RegExp(`^ {0,${t}}>`))},Pv=/^(?:[ \t]*(?:\n|$))+/,Dv=/^((?: {4}| {0,3}\t)[^\n]+(?:\n(?:[ \t]*(?:\n|$))*)?)+/,Uv=/^ {0,3}(`{3,}(?=[^`\n]*(?:\n|$))|~{3,})([^\n]*)(?:\n|$)(?:|([\s\S]*?)(?:\n|$))(?: {0,3}\1[~`]* *(?=\n|$)|$)/,_r=/^ {0,3}((?:-[\t ]*){3,}|(?:_[ \t]*){3,}|(?:\*[ \t]*){3,})(?:\n+|$)/,Hv=/^ {0,3}(#{1,6})(?=\s|$)(.*)(?:\n+|$)/,Ha=/ {0,3}(?:[*+-]|\d{1,9}[.)])/,hu=/^(?!bull |blockCode|fences|blockquote|heading|html|table)((?:.|\n(?!\s*?\n|bull |blockCode|fences|blockquote|heading|html|table))+?)\n {0,3}(=+|-+) *(?:\n+|$)/,fu=j(hu).replace(/bull/g,Ha).replace(/blockCode/g,/(?: {4}| {0,3}\t)/).replace(/fences/g,/ {0,3}(?:`{3,}|~{3,})/).replace(/blockquote/g,/ {0,3}>/).replace(/heading/g,/ {0,3}#{1,6}(?:\s|$)/).replace(/html/g,/ {0,3}<[^\n>]+>\n/).replace(/\|table/g,"").getRegex(),zv=j(hu).replace(/bull/g,Ha).replace(/blockCode/g,/(?: {4}| {0,3}\t)/).replace(/fences/g,/ {0,3}(?:`{3,}|~{3,})/).replace(/blockquote/g,/ {0,3}>/).replace(/heading/g,/ {0,3}#{1,6}(?:\s|$)/).replace(/html/g,/ {0,3}<[^\n>]+>\n/).replace(/table/g,/ {0,3}\|?(?:[:\- ]*\|)+[\:\- ]*\n/).getRegex(),za=/^([^\n]+(?:\n(?!hr|heading|lheading|blockquote|fences|list|html|table|[ \t]+\n)[^\n]+)*)/,Gv=/^[^\n]+/,Ga=/(?!\s*\])(?:\\[\s\S]|[^\[\]\\])+/,Fv=j(/^ {0,3}\[(label)\]: *(?:\n[ \t]*)?([^<\s][^\s]*|<.*?>)(?:(?: +(?:\n[ \t]*)?| *\n[ \t]*)(title))? *(?:\n+|$)/).replace("label",Ga).replace("title",/(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/).getRegex(),$v=j(/^(bull)([ \t][^\n]*?)?(?:\n|$)/).replace(/bull/g,Ha).getRegex(),Ri="address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option|p|param|search|section|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul",Fa=/<!--(?:-?>|[\s\S]*?(?:-->|$))/,Vv=j("^ {0,3}(?:<(script|pre|style|textarea)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n*|$)|comment[^\\n]*(\\n+|$)|<\\?[\\s\\S]*?(?:\\?>[^\\n]*\\n*|$)|<![A-Z][\\s\\S]*?(?:>[^\\n]*\\n*|$)|<!\\[CDATA\\[[\\s\\S]*?(?:\\]\\]>[^\\n]*\\n*|$)|</?(tag)(?: +|\\n|/?>)[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$)|<(?!script|pre|style|textarea)([a-z][\\w-]*)(?:attribute)*? */?>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$)|</(?!script|pre|style|textarea)[a-z][\\w-]*\\s*>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$))","i").replace("comment",Fa).replace("tag",Ri).replace("attribute",/ +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/).getRegex(),mu=t=>j(za).replace("hr",_r).replace("heading"," {0,3}#{1,6}(?:\\s|$)").replace("|lheading","").replace("|table","").replace("blockquote"," {0,3}>").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~~~)[^\\n]*\\n").replace("list",t).replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",Ri).getRegex(),Bv=mu(/ {0,3}(?:[*+-]|1[.)])[ \t]+[^ \t\n]/),jv=mu(/ {0,3}(?:[*+-]|\d{1,9}[.)])(?:[ \t]|\n|$)/),qv=j(/^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/).replace("paragraph",jv).getRegex(),$a={blockquote:qv,code:Dv,def:Fv,fences:Uv,heading:Hv,hr:_r,html:Vv,lheading:fu,list:$v,newline:Pv,paragraph:Bv,table:an,text:Gv},iu=j("^ *([^\\n ].*)\\n {0,3}((?:\\| *)?:?-+:? *(?:\\| *:?-+:? *)*(?:\\| *)?)(?:\\n((?:(?! *\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)").replace("hr",_r).replace("heading"," {0,3}#{1,6}(?:\\s|$)").replace("blockquote"," {0,3}>").replace("code","(?: {4}| {0,3}	)[^\\n]").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~~~)[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)])[ \\t]").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",Ri).getRegex(),Wv={...$a,lheading:zv,table:iu,paragraph:j(za).replace("hr",_r).replace("heading"," {0,3}#{1,6}(?:\\s|$)").replace("|lheading","").replace("table",iu).replace("blockquote"," {0,3}>").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~~~)[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)])[ \\t]+[^ \\t\\n]").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",Ri).getRegex()},Xv={...$a,html:j(`^ *(?:comment *(?:\\n|\\s*$)|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)|<tag(?:"[^"]*"|'[^']*'|\\s[^'"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))`).replace("comment",Fa).replace(/tag/g,"(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:|[^\\w\\s@]*@)\\b").getRegex(),def:/^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/,heading:/^(#{1,6})(.*)(?:\n+|$)/,fences:an,lheading:/^(.+?)\n {0,3}(=+|-+) *(?:\n+|$)/,paragraph:j(za).replace("hr",_r).replace("heading",` *#{1,6} *[^
]`).replace("lheading",fu).replace("|table","").replace("blockquote"," {0,3}>").replace("|fences","").replace("|list","").replace("|html","").replace("|tag","").getRegex()},Kv=/^\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/,Yv=/^(`+)([^`]|[^`][\s\S]*?[^`])\1(?!`)/,gu=/^( {2,}|\\)\n(?!\s*$)/,Zv=/^(`+|[^`])(?:(?= {2,}\n)|[\s\S]*?(?:(?=[\\<!\[`*_]|\b_|$)|[^ ](?= {2,}\n)))/,gt=/[\p{P}\p{S}]/u,zn=/[\s\p{P}\p{S}]/u,Er=/[^\s\p{P}\p{S}]/u,Jv=j(/^((?![*_])punctSpace)/,"u").replace(/punctSpace/g,zn).getRegex(),Qv=/[\p{Pi}\p{Ps}"']/u,vu=/(?!~)[\p{P}\p{S}]/u,eb=/(?!~)[\s\p{P}\p{S}]/u,tb=/(?:[^\s\p{P}\p{S}]|~)/u,nb=j(/link|precode-code|html/,"g").replace("link",/\[(?:[^\[\]`]|(?<a>`+)[^`]+\k<a>(?!`))*?\]\((?:\\[\s\S]|[^\\\(\)]|\((?:\\[\s\S]|[^\\\(\)])*\))*\)/).replace("precode-",Lv?"(?<!`)()":"(^^|[^`])").replace("code",/(?<b>`+)[^`]+\k<b>(?!`)/).replace("html",/<(?! )[^<>]*?>/).getRegex(),bu=/^(?:\*+(?:((?!\*)punct)|([^\s*]))?)|^_+(?:((?!_)punct)|([^\s_]))?/,rb=j(bu,"u").replace(/punct/g,gt).getRegex(),ob=j(bu,"u").replace(/punct/g,vu).getRegex(),ib=/^(?:\*+(?:((?!\*)(?!openQuote)punct)|([^\s*]))?)|^_+(?:((?!_)(?!openQuote)punct)|([^\s_]))?/,sb=j(ib,"u").replace(/openQuote/g,Qv).replace(/punct/g,gt).getRegex(),yu="^[^_*]*?__[^_*]*?\\*[^_*]*?(?=__)|[^*]+(?=[^*])|(?!\\*)punct(\\*+)(?=[\\s]|$)|notPunctSpace(\\*+)(?!\\*)(?=punctSpace|$)|(?!\\*)punctSpace(\\*+)(?=notPunctSpace)|[\\s](\\*+)(?!\\*)(?=punct)|(?!\\*)punct(\\*+)(?!\\*)(?=punct)|notPunctSpace(\\*+)(?=notPunctSpace)",ab=j(yu,"gu").replace(/notPunctSpace/g,Er).replace(/punctSpace/g,zn).replace(/punct/g,gt).getRegex(),lb=j(yu,"gu").replace(/notPunctSpace/g,tb).replace(/punctSpace/g,eb).replace(/punct/g,vu).getRegex(),cb="^[^_*]*?__[^_*]*?\\*[^_*]*?(?=__)|[^*]+(?=[^*])|(?!\\*)punct(\\*+)(?=[\\s]|$)|notPunctSpace(\\*+)(?!\\*)(?=punctSpace|$)|(?!\\*)[\\s](\\*+)(?=notPunctSpace)|[\\s](\\*+)(?!\\*)(?=punct)|(?!\\*)punct(\\*+)(?!\\*)(?=punct)|(?:(?!\\*)punct|notPunctSpace)(\\*+)(?!\\*)(?=notPunctSpace)",db=j(cb,"gu").replace(/notPunctSpace/g,Er).replace(/punctSpace/g,zn).replace(/punct/g,gt).getRegex(),ub=j("^[^_*]*?\\*\\*[^_*]*?_[^_*]*?(?=\\*\\*)|[^_]+(?=[^_])|(?!_)punct(_+)(?=[\\s]|$)|notPunctSpace(_+)(?!_)(?=punctSpace|$)|(?!_)punctSpace(_+)(?=notPunctSpace)|[\\s](_+)(?!_)(?=punct)|(?!_)punct(_+)(?!_)(?=punct)","gu").replace(/notPunctSpace/g,Er).replace(/punctSpace/g,zn).replace(/punct/g,gt).getRegex(),pb="^[^_*]*?\\*\\*[^_*]*?_[^_*]*?(?=\\*\\*)|[^_]+(?=[^_])|(?!_)punct(_+)(?=[\\s]|$)|notPunctSpace(_+)(?!_)(?=punctSpace|$)|(?!_)[\\s](_+)(?=notPunctSpace)|[\\s](_+)(?!_)(?=punct)|(?!_)punct(_+)(?!_)(?=punct)|(?:(?!_)punct|notPunctSpace)(_+)(?!_)(?=notPunctSpace)",hb=j(pb,"gu").replace(/notPunctSpace/g,Er).replace(/punctSpace/g,zn).replace(/punct/g,gt).getRegex(),fb=j(/^~~?(?:((?!~)punct)|[^\s~])/,"u").replace(/punct/g,gt).getRegex(),mb="^[^~]+(?=[^~])|(?!~)punct(~~?)(?=[\\s]|$)|notPunctSpace(~~?)(?!~)(?=punctSpace|$)|(?!~)punctSpace(~~?)(?=notPunctSpace)|[\\s](~~?)(?!~)(?=punct)|(?!~)punct(~~?)(?!~)(?=punct)|notPunctSpace(~~?)(?=notPunctSpace)",gb=j(mb,"gu").replace(/notPunctSpace/g,Er).replace(/punctSpace/g,zn).replace(/punct/g,gt).getRegex(),vb=j(/\\(punct)/,"gu").replace(/punct/g,gt).getRegex(),bb=j(/^<(scheme:[^\s\x00-\x1f<>]*|email)>/).replace("scheme",/[a-zA-Z][a-zA-Z0-9+.-]{1,31}/).replace("email",/[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/).getRegex(),yb=j(Fa).replace("(?:-->|$)","-->").getRegex(),xb=j("^comment|^</[a-zA-Z][\\w:-]*\\s*>|^<[a-zA-Z][\\w-]*(?:attribute)*?\\s*/?>|^<\\?[\\s\\S]*?\\?>|^<![a-zA-Z]+\\s[\\s\\S]*?>|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>").replace("comment",yb).replace("attribute",/\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/).getRegex(),ki=/(?:\[(?:\\[\s\S]|[^\[\]\\])*\]|\\[\s\S]|`+(?!`)[^`]*?`+(?!`)|``+(?=\])|[^\[\]\\`])*?/,_b=j(/^!?\[(label)\]\(\s*(href)(?:(?:[ \t]+(?:\n[ \t]*)?|\n[ \t]*)(title))?\s*\)/).replace("label",ki).replace("href",/<(?:\\.|[^\n<>\\])+>|[^ \t\n\x00-\x1f]+|(?=\))/).replace("title",/"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/).getRegex(),xu=j(/^!?\[(label)\]\[(ref)\]/).replace("label",ki).replace("ref",Ga).getRegex(),_u=j(/^!?\[(ref)\](?:\[\])?/).replace("ref",Ga).getRegex(),Eb=j("reflink|nolink(?!\\()","g").replace("reflink",xu).replace("nolink",_u).getRegex(),su=/[hH][tT][tT][pP][sS]?|[fF][tT][pP]/,Va={_backpedal:an,anyPunctuation:vb,autolink:bb,blockSkip:nb,br:gu,code:Yv,del:an,delLDelim:an,delRDelim:an,emStrongLDelim:rb,emStrongRDelimAst:ab,emStrongRDelimUnd:ub,escape:Kv,link:_b,nolink:_u,punctuation:Jv,reflink:xu,reflinkSearch:Eb,tag:xb,text:Zv,url:an},wb={...Va,emStrongLDelim:sb,emStrongRDelimAst:db,emStrongRDelimUnd:hb,link:j(/^!?\[(label)\]\((.*?)\)/).replace("label",ki).getRegex(),reflink:j(/^!?\[(label)\]\s*\[([^\]]*)\]/).replace("label",ki).getRegex()},La={...Va,emStrongRDelimAst:lb,emStrongLDelim:ob,delLDelim:fb,delRDelim:gb,url:j(/^((?:protocol):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/).replace("protocol",su).replace("email",/[A-Za-z0-9._+-]+(@)[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![-_])/).getRegex(),_backpedal:/(?:[^?!.,:;*_'"~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_'"~)]+(?!$))+/,del:/^(~~?)(?=[^\s~])((?:\\[\s\S]|[^\\])*?(?:\\[\s\S]|[^\s~\\]))\1(?=[^~]|$)/,text:j(/^(`+|~+|[^`~])(?:(?=[`~])|(?= {2,}\n)|(?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)|[\s\S]*?(?:(?=[\\<!\[`*~_]|\b_|protocol:\/\/|www\.|$)|[^ ](?= {2,}\n)|[^a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-](?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)))/).replace("protocol",su).getRegex()},Tb={...La,br:j(gu).replace("{2,}","*").getRegex(),text:j(La.text).replace("\\b_","\\b_| {2,}\\n").replace(/\{2,\}/g,"*").getRegex()},Ai={normal:$a,gfm:Wv,pedantic:Xv},yr={normal:Va,gfm:La,breaks:Tb,pedantic:wb},Sb={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"},au=t=>Sb[t];function ct(t,e){if(e){if(ke.escapeTest.test(t))return t.replace(ke.escapeReplace,au)}else if(ke.escapeTestNoEncode.test(t))return t.replace(ke.escapeReplaceNoEncode,au);return t}function lu(t){try{t=encodeURI(t).replace(ke.percentDecode,"%")}catch{return null}return t}function cu(t,e){let n=t.replace(ke.findPipe,(i,s,a)=>{let l=!1,c=s;for(;--c>=0&&a[c]==="\\";)l=!l;return l?"|":" |"}),r=n.split(ke.splitPipe),o=0;if(r[0].trim()||r.shift(),r.length>0&&!r.at(-1)?.trim()&&r.pop(),e)if(r.length>e)r.splice(e);else for(;r.length<e;)r.push("");for(;o<r.length;o++)r[o]=r[o].trim().replace(ke.slashPipe,"|");return r}function Rt(t,e,n){let r=t.length;if(r===0)return"";let o=0;for(;o<r;){let i=t.charAt(r-o-1);if(i===e&&!n)o++;else if(i!==e&&n)o++;else break}return t.slice(0,r-o)}function du(t){let e=t.split(`
`),n=e.length-1;for(;n>=0&&ke.blankLine.test(e[n]);)n--;return e.length-n<=2?t:e.slice(0,n+1).join(`
`)}function Ab(t,e){if(t.indexOf(e[1])===-1)return-1;let n=0;for(let r=0;r<t.length;r++)if(t[r]==="\\")r++;else if(t[r]===e[0])n++;else if(t[r]===e[1]&&(n--,n<0))return r;return n>0?-2:-1}function kb(t,e=0){let n=e,r="";for(let o of t)if(o==="	"){let i=4-n%4;r+=" ".repeat(i),n+=i}else r+=o,n++;return r}function uu(t,e,n,r,o){let i=e.href,s=e.title||null,a=t[1].replace(o.other.outputLinkReplace,"$1");r.state.inLink=!0;let l={type:t[0].charAt(0)==="!"?"image":"link",raw:n,href:i,title:s,text:a,tokens:r.inlineTokens(a)};return r.state.inLink=!1,l}function Cb(t,e,n){let r=t.match(n.other.indentCodeCompensation);if(r===null)return e;let o=r[1];return e.split(`
`).map(i=>{let s=i.match(n.other.beginningSpace);if(s===null)return i;let[a]=s;return a.length>=o.length?i.slice(o.length):i}).join(`
`)}var Ci=class{options;rules;lexer;constructor(t){this.options=t||cn}space(t){let e=this.rules.block.newline.exec(t);if(e&&e[0].length>0)return{type:"space",raw:e[0]}}code(t){let e=this.rules.block.code.exec(t);if(e){let n=this.options.pedantic?e[0]:du(e[0]),r=n.replace(this.rules.other.codeRemoveIndent,"");return{type:"code",raw:n,codeBlockStyle:"indented",text:r}}}fences(t){let e=this.rules.block.fences.exec(t);if(e){let n=e[0],r=Cb(n,e[3]||"",this.rules);return{type:"code",raw:n,lang:e[2]?e[2].trim().replace(this.rules.inline.anyPunctuation,"$1"):e[2],text:r}}}heading(t){let e=this.rules.block.heading.exec(t);if(e){let n=e[2].trim();if(this.rules.other.endingHash.test(n)){let r=Rt(n,"#");(this.options.pedantic||!r||this.rules.other.endingSpaceChar.test(r))&&(n=r.trim())}return{type:"heading",raw:Rt(e[0],`
`),depth:e[1].length,text:n,tokens:this.lexer.inline(n)}}}hr(t){let e=this.rules.block.hr.exec(t);if(e)return{type:"hr",raw:Rt(e[0],`
`)}}blockquote(t){let e=this.rules.block.blockquote.exec(t);if(e){let n=Rt(e[0],`
`).split(`
`),r="",o="",i=[];for(;n.length>0;){let s=!1,a=[],l;for(l=0;l<n.length;l++)if(this.rules.other.blockquoteStart.test(n[l]))a.push(n[l]),s=!0;else if(!s)a.push(n[l]);else break;n=n.slice(l);let c=a.join(`
`),p=c.replace(this.rules.other.blockquoteSetextReplace,`
    $1`).replace(this.rules.other.blockquoteSetextReplace2,"");r=r?`${r}
${c}`:c,o=o?`${o}
${p}`:p;let m=this.lexer.state.top;if(this.lexer.state.top=!0,this.lexer.blockTokens(p,i,!0),this.lexer.state.top=m,n.length===0)break;let y=i.at(-1);if(y?.type==="code")break;if(y?.type==="blockquote"){let f=y,h=n.join(`
`),g=f.raw+`
`+h.replace(this.rules.other.blockquoteSetextReplace2,""),x=this.blockquote(g);i[i.length-1]=x,r=`${r}
${h}`,o=o.substring(0,o.length-f.text.length)+x.text;break}else if(y?.type==="list"){let f=y,h=f.raw+`
`+n.join(`
`),g=this.list(h);i[i.length-1]=g,r=r.substring(0,r.length-y.raw.length)+g.raw,o=o.substring(0,o.length-f.raw.length)+g.raw,n=h.substring(i.at(-1).raw.length).split(`
`);continue}}return{type:"blockquote",raw:r,tokens:i,text:o}}}list(t){let e=this.rules.block.list.exec(t);if(e){let n=e[1].trim(),r=n.length>1,o={type:"list",raw:"",ordered:r,start:r?+n.slice(0,-1):"",loose:!1,items:[]};n=r?`\\d{1,9}\\${n.slice(-1)}`:`\\${n}`,this.options.pedantic&&(n=r?n:"[*+-]");let i=this.rules.other.listItemRegex(n),s=!1;for(;t;){let l=!1,c="",p="";if(!(e=i.exec(t))||this.rules.block.hr.test(t))break;c=e[0],t=t.substring(c.length);let m=kb(e[2].split(`
`,1)[0],e[1].length),y=t.split(`
`,1)[0],f=!m.trim(),h=0;if(this.options.pedantic?(h=2,p=m.trimStart()):f?h=e[1].length+1:(h=m.search(this.rules.other.nonSpaceChar),h=h>4?1:h,p=m.slice(h),h+=e[1].length),f&&this.rules.other.blankLine.test(y)&&(c+=y+`
`,t=t.substring(y.length+1),l=!0),!l){let g=this.rules.other.nextBulletRegex(h),x=this.rules.other.hrRegex(h),S=this.rules.other.fencesBeginRegex(h),w=this.rules.other.headingBeginRegex(h),I=this.rules.other.htmlBeginRegex(h),H=this.rules.other.blockquoteBeginRegex(h);for(;t;){let U=t.split(`
`,1)[0],K;if(y=U,this.options.pedantic?(y=y.replace(this.rules.other.listReplaceNesting,"  "),K=y):K=y.replace(this.rules.other.tabCharGlobal,"    "),S.test(y)||w.test(y)||I.test(y)||H.test(y)||g.test(y)||x.test(y))break;if(K.search(this.rules.other.nonSpaceChar)>=h||!y.trim())p+=`
`+K.slice(h);else{if(f||m.replace(this.rules.other.tabCharGlobal,"    ").search(this.rules.other.nonSpaceChar)>=4||S.test(m)||w.test(m)||x.test(m))break;p+=`
`+y}f=!y.trim(),c+=U+`
`,t=t.substring(U.length+1),m=K.slice(h)}}o.loose||(s?o.loose=!0:this.rules.other.doubleBlankLine.test(c)&&(s=!0)),o.items.push({type:"list_item",raw:c,task:!!this.options.gfm&&this.rules.other.listIsTask.test(p),loose:!1,text:p,tokens:[]}),o.raw+=c}let a=o.items.at(-1);if(a)a.raw=a.raw.trimEnd(),a.text=a.text.trimEnd();else return;o.raw=o.raw.trimEnd();for(let l of o.items){this.lexer.state.top=!1,l.tokens=this.lexer.blockTokens(l.text,[]);let c=l.tokens[0];if(l.task&&(c?.type==="text"||c?.type==="paragraph")){l.text=l.text.replace(this.rules.other.listReplaceTask,""),c.raw=c.raw.replace(this.rules.other.listReplaceTask,""),c.text=c.text.replace(this.rules.other.listReplaceTask,"");for(let m=this.lexer.inlineQueue.length-1;m>=0;m--)if(this.rules.other.listIsTask.test(this.lexer.inlineQueue[m].src)){this.lexer.inlineQueue[m].src=this.lexer.inlineQueue[m].src.replace(this.rules.other.listReplaceTask,"");break}let p=this.rules.other.listTaskCheckbox.exec(l.raw);if(p){let m={type:"checkbox",raw:p[0]+" ",checked:p[0]!=="[ ]"};l.checked=m.checked,o.loose?l.tokens[0]&&["paragraph","text"].includes(l.tokens[0].type)&&"tokens"in l.tokens[0]&&l.tokens[0].tokens?(l.tokens[0].raw=m.raw+l.tokens[0].raw,l.tokens[0].text=m.raw+l.tokens[0].text,l.tokens[0].tokens.unshift(m)):l.tokens.unshift({type:"paragraph",raw:m.raw,text:m.raw,tokens:[m]}):l.tokens.unshift(m)}}else l.task&&(l.task=!1);if(!o.loose){let p=l.tokens.filter(y=>y.type==="space"),m=p.length>0&&p.some(y=>this.rules.other.anyLine.test(y.raw));o.loose=m}}if(o.loose)for(let l of o.items){l.loose=!0;for(let c of l.tokens)c.type==="text"&&(c.type="paragraph")}return o}}html(t){let e=this.rules.block.html.exec(t);if(e){let n=du(e[0]);return{type:"html",block:!0,raw:n,pre:e[1]==="pre"||e[1]==="script"||e[1]==="style",text:n}}}def(t){let e=this.rules.block.def.exec(t);if(e){let n=e[1].toLowerCase().replace(this.rules.other.multipleSpaceGlobal," "),r=e[2]?e[2].replace(this.rules.other.hrefBrackets,"$1").replace(this.rules.inline.anyPunctuation,"$1"):"",o=e[3]?e[3].substring(1,e[3].length-1).replace(this.rules.inline.anyPunctuation,"$1"):e[3];return{type:"def",tag:n,raw:Rt(e[0],`
`),href:r,title:o}}}table(t){let e=this.rules.block.table.exec(t);if(!e||!this.rules.other.tableDelimiter.test(e[2]))return;let n=cu(e[1]),r=e[2].replace(this.rules.other.tableAlignChars,"").split("|"),o=e[3]?.trim()?e[3].replace(this.rules.other.tableRowBlankLine,"").split(`
`):[],i={type:"table",raw:Rt(e[0],`
`),header:[],align:[],rows:[]};if(n.length===r.length){for(let s of r)this.rules.other.tableAlignRight.test(s)?i.align.push("right"):this.rules.other.tableAlignCenter.test(s)?i.align.push("center"):this.rules.other.tableAlignLeft.test(s)?i.align.push("left"):i.align.push(null);for(let s=0;s<n.length;s++)i.header.push({text:n[s],tokens:this.lexer.inline(n[s]),header:!0,align:i.align[s]});for(let s of o)i.rows.push(cu(s,i.header.length).map((a,l)=>({text:a,tokens:this.lexer.inline(a),header:!1,align:i.align[l]})));return i}}lheading(t){let e=this.rules.block.lheading.exec(t);if(e){let n=e[1].trim();return{type:"heading",raw:Rt(e[0],`
`),depth:e[2].charAt(0)==="="?1:2,text:n,tokens:this.lexer.inline(n)}}}paragraph(t){let e=this.rules.block.paragraph.exec(t);if(e){let n=e[1].charAt(e[1].length-1)===`
`?e[1].slice(0,-1):e[1];return{type:"paragraph",raw:e[0],text:n,tokens:this.lexer.inline(n)}}}text(t){let e=this.rules.block.text.exec(t);if(e)return{type:"text",raw:e[0],text:e[0],tokens:this.lexer.inline(e[0])}}escape(t){let e=this.rules.inline.escape.exec(t);if(e)return{type:"escape",raw:e[0],text:e[1]}}tag(t){let e=this.rules.inline.tag.exec(t);if(e)return!this.lexer.state.inLink&&this.rules.other.startATag.test(e[0])?this.lexer.state.inLink=!0:this.lexer.state.inLink&&this.rules.other.endATag.test(e[0])&&(this.lexer.state.inLink=!1),!this.lexer.state.inRawBlock&&this.rules.other.startPreScriptTag.test(e[0])?this.lexer.state.inRawBlock=!0:this.lexer.state.inRawBlock&&this.rules.other.endPreScriptTag.test(e[0])&&(this.lexer.state.inRawBlock=!1),{type:"html",raw:e[0],inLink:this.lexer.state.inLink,inRawBlock:this.lexer.state.inRawBlock,block:!1,text:e[0]}}link(t){let e=this.rules.inline.link.exec(t);if(e){let n=e[2].trim();if(!this.options.pedantic&&this.rules.other.startAngleBracket.test(n)){if(!this.rules.other.endAngleBracket.test(n))return;let i=Rt(n.slice(0,-1),"\\");if((n.length-i.length)%2===0)return}else{let i=Ab(e[2],"()");if(i===-2)return;if(i>-1){let s=(e[0].indexOf("!")===0?5:4)+e[1].length+i;e[2]=e[2].substring(0,i),e[0]=e[0].substring(0,s).trim(),e[3]=""}}let r=e[2],o="";if(this.options.pedantic){let i=this.rules.other.pedanticHrefTitle.exec(r);i&&(r=i[1],o=i[3])}else o=e[3]?e[3].slice(1,-1):"";return r=r.trim(),this.rules.other.startAngleBracket.test(r)&&(this.options.pedantic&&!this.rules.other.endAngleBracket.test(n)?r=r.slice(1):r=r.slice(1,-1)),uu(e,{href:r&&r.replace(this.rules.inline.anyPunctuation,"$1"),title:o&&o.replace(this.rules.inline.anyPunctuation,"$1")},e[0],this.lexer,this.rules)}}reflink(t,e){let n;if((n=this.rules.inline.reflink.exec(t))||(n=this.rules.inline.nolink.exec(t))){let r=(n[2]||n[1]).replace(this.rules.other.multipleSpaceGlobal," "),o=e[r.toLowerCase()];if(!o){let i=n[0].charAt(0);return{type:"text",raw:i,text:i}}return uu(n,o,n[0],this.lexer,this.rules)}}emStrong(t,e,n=""){let r=this.rules.inline.emStrongLDelim.exec(t);if(!(!r||!r[1]&&!r[2]&&!r[3]&&!r[4]||r[4]&&n.match(this.rules.other.unicodeAlphaNumeric))&&(!(r[1]||r[3])||!n||this.rules.inline.punctuation.exec(n))){let o=[...r[0]].length-1,i,s,a=o,l=0,c=r[0][0],p=n===c,m=c==="*"?this.rules.inline.emStrongRDelimAst:this.rules.inline.emStrongRDelimUnd;for(m.lastIndex=0,e=e.slice(-1*t.length+o);(r=m.exec(e))!==null;){if(i=r[1]||r[2]||r[3]||r[4]||r[5]||r[6],!i)continue;if(s=[...i].length,r[3]||r[4]){a+=s;continue}else if(r[5]||r[6]){if(o%3&&!((o+s)%3)){l+=s;continue}if(p)break}if(a-=s,a>0)continue;s=Math.min(s,s+a+l);let y=[...r[0]][0].length,f=t.slice(0,o+r.index+y+s);if(Math.min(o,s)%2){let g=f.slice(1,-1);return{type:"em",raw:f,text:g,tokens:this.lexer.inlineTokens(g)}}let h=f.slice(2,-2);return{type:"strong",raw:f,text:h,tokens:this.lexer.inlineTokens(h)}}}}codespan(t){let e=this.rules.inline.code.exec(t);if(e){let n=e[2].replace(this.rules.other.newLineCharGlobal," "),r=this.rules.other.nonSpaceChar.test(n),o=this.rules.other.startingSpaceChar.test(n)&&this.rules.other.endingSpaceChar.test(n);return r&&o&&(n=n.substring(1,n.length-1)),{type:"codespan",raw:e[0],text:n}}}br(t){let e=this.rules.inline.br.exec(t);if(e)return{type:"br",raw:e[0]}}del(t,e,n=""){let r=this.rules.inline.delLDelim.exec(t);if(r&&(!r[1]||!n||this.rules.inline.punctuation.exec(n))){let o=[...r[0]].length-1,i,s,a=o,l=this.rules.inline.delRDelim;for(l.lastIndex=0,e=e.slice(-1*t.length+o);(r=l.exec(e))!==null;){if(i=r[1]||r[2]||r[3]||r[4]||r[5]||r[6],!i||(s=[...i].length,s!==o))continue;if(r[3]||r[4]){a+=s;continue}if(a-=s,a>0)continue;s=Math.min(s,s+a);let c=[...r[0]][0].length,p=t.slice(0,o+r.index+c+s),m=p.slice(o,-o);return{type:"del",raw:p,text:m,tokens:this.lexer.inlineTokens(m)}}}}autolink(t){let e=this.rules.inline.autolink.exec(t);if(e){let n,r;return e[2]==="@"?(n=e[1],r="mailto:"+n):(n=e[1],r=n),{type:"link",raw:e[0],text:n,href:r,tokens:[{type:"text",raw:n,text:n}]}}}url(t){let e;if(e=this.rules.inline.url.exec(t)){let n,r;if(e[2]==="@")n=e[0],r="mailto:"+n;else{let o;do o=e[0],e[0]=this.rules.inline._backpedal.exec(e[0])?.[0]??"";while(o!==e[0]);n=e[0],e[1]==="www."?r="http://"+e[0]:r=e[0]}return{type:"link",raw:e[0],text:n,href:r,tokens:[{type:"text",raw:n,text:n}]}}}inlineText(t){let e=this.rules.inline.text.exec(t);if(e){let n=this.lexer.state.inRawBlock;return{type:"text",raw:e[0],text:e[0],escaped:n}}}},Ze=class Pa{tokens;options;state;inlineQueue;tokenizer;constructor(e){this.tokens=[],this.tokens.links=Object.create(null),this.options=e||cn,this.options.tokenizer=this.options.tokenizer||new Ci,this.tokenizer=this.options.tokenizer,this.tokenizer.options=this.options,this.tokenizer.lexer=this,this.inlineQueue=[],this.state={inLink:!1,inRawBlock:!1,top:!0};let n={other:ke,block:Ai.normal,inline:yr.normal};this.options.pedantic?(n.block=Ai.pedantic,n.inline=yr.pedantic):this.options.gfm&&(n.block=Ai.gfm,this.options.breaks?n.inline=yr.breaks:n.inline=yr.gfm),this.tokenizer.rules=n}static get rules(){return{block:Ai,inline:yr}}static lex(e,n){return new Pa(n).lex(e)}static lexInline(e,n){return new Pa(n).inlineTokens(e)}lex(e){e=e.replace(ke.carriageReturn,`
`),this.blockTokens(e,this.tokens);for(let n=0;n<this.inlineQueue.length;n++){let r=this.inlineQueue[n];this.inlineTokens(r.src,r.tokens)}return this.inlineQueue=[],this.tokens}blockTokens(e,n=[],r=!1){this.tokenizer.lexer=this,this.options.pedantic&&(e=e.replace(ke.tabCharGlobal,"    ").replace(ke.spaceLine,""));let o=1/0;for(;e;){if(e.length<o)o=e.length;else{this.infiniteLoopError(e.charCodeAt(0));break}let i;if(this.options.extensions?.block?.some(a=>(i=a.call({lexer:this},e,n))?(e=e.substring(i.raw.length),n.push(i),!0):!1))continue;if(i=this.tokenizer.space(e)){e=e.substring(i.raw.length);let a=n.at(-1);i.raw.length===1&&a!==void 0?a.raw+=`
`:n.push(i);continue}if(i=this.tokenizer.code(e)){e=e.substring(i.raw.length);let a=n.at(-1);a?.type==="paragraph"||a?.type==="text"?(a.raw+=(a.raw.endsWith(`
`)?"":`
`)+i.raw,a.text+=`
`+i.text,this.inlineQueue.at(-1).src=a.text):n.push(i);continue}if(i=this.tokenizer.fences(e)){e=e.substring(i.raw.length),n.push(i);continue}if(i=this.tokenizer.heading(e)){e=e.substring(i.raw.length),n.push(i);continue}if(i=this.tokenizer.hr(e)){e=e.substring(i.raw.length),n.push(i);continue}if(i=this.tokenizer.blockquote(e)){e=e.substring(i.raw.length),n.push(i);continue}if(i=this.tokenizer.list(e)){e=e.substring(i.raw.length),n.push(i);continue}if(i=this.tokenizer.html(e)){e=e.substring(i.raw.length),n.push(i);continue}if(i=this.tokenizer.def(e)){e=e.substring(i.raw.length);let a=n.at(-1);a?.type==="paragraph"||a?.type==="text"?(a.raw+=(a.raw.endsWith(`
`)?"":`
`)+i.raw,a.text+=`
`+i.raw,this.inlineQueue.at(-1).src=a.text):this.tokens.links[i.tag]||(this.tokens.links[i.tag]={href:i.href,title:i.title},n.push(i));continue}if(i=this.tokenizer.table(e)){e=e.substring(i.raw.length),n.push(i);continue}if(i=this.tokenizer.lheading(e)){e=e.substring(i.raw.length),n.push(i);continue}let s=e;if(this.options.extensions?.startBlock){let a=1/0,l=e.slice(1),c;this.options.extensions.startBlock.forEach(p=>{c=p.call({lexer:this},l),typeof c=="number"&&c>=0&&(a=Math.min(a,c))}),a<1/0&&a>=0&&(s=e.substring(0,a+1))}if(this.state.top&&(i=this.tokenizer.paragraph(s))){let a=n.at(-1);r&&a?.type==="paragraph"?(a.raw+=(a.raw.endsWith(`
`)?"":`
`)+i.raw,a.text+=`
`+i.text,this.inlineQueue.pop(),this.inlineQueue.at(-1).src=a.text):n.push(i),r=s.length!==e.length,e=e.substring(i.raw.length);continue}if(i=this.tokenizer.text(e)){e=e.substring(i.raw.length);let a=n.at(-1);a?.type==="text"?(a.raw+=(a.raw.endsWith(`
`)?"":`
`)+i.raw,a.text+=`
`+i.text,this.inlineQueue.pop(),this.inlineQueue.at(-1).src=a.text):n.push(i);continue}if(e){this.infiniteLoopError(e.charCodeAt(0));break}}return this.state.top=!0,n}inline(e,n=[]){return this.inlineQueue.push({src:e,tokens:n}),n}inlineTokens(e,n=[]){this.tokenizer.lexer=this;let r=e;if(this.tokens.links){let a=Object.keys(this.tokens.links);a.length>0&&(r=r.replace(this.tokenizer.rules.inline.reflinkSearch,l=>a.includes(l.slice(l.lastIndexOf("[")+1,-1))?"["+"a".repeat(l.length-2)+"]":l))}r=r.replace(this.tokenizer.rules.inline.anyPunctuation,"++"),r=r.replace(this.tokenizer.rules.inline.blockSkip,(a,l,c)=>{let p=c?c.length:0;return a.slice(0,p)+"["+"a".repeat(a.length-p-2)+"]"}),r=this.options.hooks?.emStrongMask?.call({lexer:this},r)??r;let o=!1,i="",s=1/0;for(;e;){if(e.length<s)s=e.length;else{this.infiniteLoopError(e.charCodeAt(0));break}o||(i=""),o=!1;let a;if(this.options.extensions?.inline?.some(c=>(a=c.call({lexer:this},e,n))?(e=e.substring(a.raw.length),n.push(a),!0):!1))continue;if(a=this.tokenizer.escape(e)){e=e.substring(a.raw.length),n.push(a);continue}if(a=this.tokenizer.tag(e)){e=e.substring(a.raw.length),n.push(a);continue}if(a=this.tokenizer.link(e)){e=e.substring(a.raw.length),n.push(a);continue}if(a=this.tokenizer.reflink(e,this.tokens.links)){e=e.substring(a.raw.length);let c=n.at(-1);a.type==="text"&&c?.type==="text"?(c.raw+=a.raw,c.text+=a.text):n.push(a);continue}if(a=this.tokenizer.emStrong(e,r,i)){e=e.substring(a.raw.length),n.push(a);continue}if(a=this.tokenizer.codespan(e)){e=e.substring(a.raw.length),n.push(a);continue}if(a=this.tokenizer.br(e)){e=e.substring(a.raw.length),n.push(a);continue}if(a=this.tokenizer.del(e,r,i)){e=e.substring(a.raw.length),n.push(a);continue}if(a=this.tokenizer.autolink(e)){e=e.substring(a.raw.length),n.push(a);continue}if(!this.state.inLink&&(a=this.tokenizer.url(e))){e=e.substring(a.raw.length),n.push(a);continue}let l=e;if(this.options.extensions?.startInline){let c=1/0,p=e.slice(1),m;this.options.extensions.startInline.forEach(y=>{m=y.call({lexer:this},p),typeof m=="number"&&m>=0&&(c=Math.min(c,m))}),c<1/0&&c>=0&&(l=e.substring(0,c+1))}if(a=this.tokenizer.inlineText(l)){e=e.substring(a.raw.length),a.raw.slice(-1)!=="_"&&(i=a.raw.slice(-1)),o=!0;let c=n.at(-1);c?.type==="text"?(c.raw+=a.raw,c.text+=a.text):n.push(a);continue}if(e){this.infiniteLoopError(e.charCodeAt(0));break}}return n}infiniteLoopError(e){let n="Infinite loop on byte: "+e;if(this.options.silent)console.error(n);else throw new Error(n)}},Ii=class{options;parser;constructor(t){this.options=t||cn}space(t){return""}code({text:t,lang:e,escaped:n}){let r=(e||"").match(ke.notSpaceStart)?.[0],o=t.replace(ke.endingNewline,"")+`
`;return r?'<pre><code class="language-'+ct(r)+'">'+(n?o:ct(o,!0))+`</code></pre>
`:"<pre><code>"+(n?o:ct(o,!0))+`</code></pre>
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
`}strong({tokens:t}){return`<strong>${this.parser.parseInline(t)}</strong>`}em({tokens:t}){return`<em>${this.parser.parseInline(t)}</em>`}codespan({text:t}){return`<code>${ct(t,!0)}</code>`}br(t){return"<br>"}del({tokens:t}){return`<del>${this.parser.parseInline(t)}</del>`}link({href:t,title:e,tokens:n}){let r=this.parser.parseInline(n),o=lu(t);if(o===null)return r;t=o;let i='<a href="'+t+'"';return e&&(i+=' title="'+ct(e)+'"'),i+=">"+r+"</a>",i}image({href:t,title:e,text:n,tokens:r}){r&&(n=this.parser.parseInline(r,this.parser.textRenderer));let o=lu(t);if(o===null)return ct(n);t=o;let i=`<img src="${t}" alt="${ct(n)}"`;return e&&(i+=` title="${ct(e)}"`),i+=">",i}text(t){return"tokens"in t&&t.tokens?this.parser.parseInline(t.tokens):"escaped"in t&&t.escaped?t.text:ct(t.text)}},Ba=class{strong({text:t}){return t}em({text:t}){return t}codespan({text:t}){return t}del({text:t}){return t}html({text:t}){return t}text({text:t}){return t}link({text:t}){return""+t}image({text:t}){return""+t}br(){return""}checkbox({raw:t}){return t}},Je=class Da{options;renderer;textRenderer;constructor(e){this.options=e||cn,this.options.renderer=this.options.renderer||new Ii,this.renderer=this.options.renderer,this.renderer.options=this.options,this.renderer.parser=this,this.textRenderer=new Ba}static parse(e,n){return new Da(n).parse(e)}static parseInline(e,n){return new Da(n).parseInline(e)}parse(e){this.renderer.parser=this;let n="";for(let r=0;r<e.length;r++){let o=e[r];if(this.options.extensions?.renderers?.[o.type]){let s=o,a=this.options.extensions.renderers[s.type].call({parser:this},s);if(a!==!1||!["space","hr","heading","code","table","blockquote","list","checkbox","html","def","paragraph","text"].includes(s.type)){n+=a||"";continue}}let i=o;switch(i.type){case"space":{n+=this.renderer.space(i);break}case"hr":{n+=this.renderer.hr(i);break}case"heading":{n+=this.renderer.heading(i);break}case"code":{n+=this.renderer.code(i);break}case"table":{n+=this.renderer.table(i);break}case"blockquote":{n+=this.renderer.blockquote(i);break}case"list":{n+=this.renderer.list(i);break}case"checkbox":{n+=this.renderer.checkbox(i);break}case"html":{n+=this.renderer.html(i);break}case"def":{n+=this.renderer.def(i);break}case"paragraph":{n+=this.renderer.paragraph(i);break}case"text":{n+=this.renderer.text(i);break}default:{let s='Token with "'+i.type+'" type was not found.';if(this.options.silent)return console.error(s),"";throw new Error(s)}}}return n}parseInline(e,n=this.renderer){this.renderer.parser=this;let r="";for(let o=0;o<e.length;o++){let i=e[o];if(this.options.extensions?.renderers?.[i.type]){let a=this.options.extensions.renderers[i.type].call({parser:this},i);if(a!==!1||!["escape","html","link","image","checkbox","strong","em","codespan","br","del","text"].includes(i.type)){r+=a||"";continue}}let s=i;switch(s.type){case"escape":{r+=n.text(s);break}case"html":{r+=n.html(s);break}case"link":{r+=n.link(s);break}case"image":{r+=n.image(s);break}case"checkbox":{r+=n.checkbox(s);break}case"strong":{r+=n.strong(s);break}case"em":{r+=n.em(s);break}case"codespan":{r+=n.codespan(s);break}case"br":{r+=n.br(s);break}case"del":{r+=n.del(s);break}case"text":{r+=n.text(s);break}default:{let a='Token with "'+s.type+'" type was not found.';if(this.options.silent)return console.error(a),"";throw new Error(a)}}}return r}},xr=class{options;block;constructor(t){this.options=t||cn}static passThroughHooks=new Set(["preprocess","postprocess","processAllTokens","emStrongMask"]);static passThroughHooksRespectAsync=new Set(["preprocess","postprocess","processAllTokens"]);preprocess(t){return t}postprocess(t){return t}processAllTokens(t){return t}emStrongMask(t){return t}provideLexer(t=this.block){return t?Ze.lex:Ze.lexInline}provideParser(t=this.block){return t?Je.parse:Je.parseInline}},ja=class{defaults=Ua();options=this.setOptions;parse=this.parseMarkdown(!0);parseInline=this.parseMarkdown(!1);Parser=Je;Renderer=Ii;TextRenderer=Ba;Lexer=Ze;Tokenizer=Ci;Hooks=xr;constructor(...t){this.use(...t)}walkTokens(t,e){let n=[];for(let r of t)switch(n=n.concat(e.call(this,r)),r.type){case"table":{let o=r;for(let i of o.header)n=n.concat(this.walkTokens(i.tokens,e));for(let i of o.rows)for(let s of i)n=n.concat(this.walkTokens(s.tokens,e));break}case"list":{let o=r;n=n.concat(this.walkTokens(o.items,e));break}default:{let o=r;this.defaults.extensions?.childTokens?.[o.type]?this.defaults.extensions.childTokens[o.type].forEach(i=>{let s=o[i].flat(1/0);n=n.concat(this.walkTokens(s,e))}):o.tokens&&(n=n.concat(this.walkTokens(o.tokens,e)))}}return n}use(...t){let e=this.defaults.extensions||{renderers:{},childTokens:{}};return t.forEach(n=>{let r={...n};if(r.async=this.defaults.async||r.async||!1,n.extensions&&(n.extensions.forEach(o=>{if(!o.name)throw new Error("extension name required");if("renderer"in o){let i=e.renderers[o.name];i?e.renderers[o.name]=function(...s){let a=o.renderer.apply(this,s);return a===!1&&(a=i.apply(this,s)),a}:e.renderers[o.name]=o.renderer}if("tokenizer"in o){if(!o.level||o.level!=="block"&&o.level!=="inline")throw new Error("extension level must be 'block' or 'inline'");let i=e[o.level];i?i.unshift(o.tokenizer):e[o.level]=[o.tokenizer],o.start&&(o.level==="block"?e.startBlock?e.startBlock.push(o.start):e.startBlock=[o.start]:o.level==="inline"&&(e.startInline?e.startInline.push(o.start):e.startInline=[o.start]))}"childTokens"in o&&o.childTokens&&(e.childTokens[o.name]=o.childTokens)}),r.extensions=e),n.renderer){let o=this.defaults.renderer||new Ii(this.defaults);for(let i in n.renderer){if(!(i in o))throw new Error(`renderer '${i}' does not exist`);if(["options","parser"].includes(i))continue;let s=i,a=n.renderer[s],l=o[s];o[s]=(...c)=>{let p=a.apply(o,c);return p===!1&&(p=l.apply(o,c)),p||""}}r.renderer=o}if(n.tokenizer){let o=this.defaults.tokenizer||new Ci(this.defaults);for(let i in n.tokenizer){if(!(i in o))throw new Error(`tokenizer '${i}' does not exist`);if(["options","rules","lexer"].includes(i))continue;let s=i,a=n.tokenizer[s],l=o[s];o[s]=(...c)=>{let p=a.apply(o,c);return p===!1&&(p=l.apply(o,c)),p}}r.tokenizer=o}if(n.hooks){let o=this.defaults.hooks||new xr;for(let i in n.hooks){if(!(i in o))throw new Error(`hook '${i}' does not exist`);if(["options","block"].includes(i))continue;let s=i,a=n.hooks[s],l=o[s];xr.passThroughHooks.has(i)?o[s]=c=>{if(this.defaults.async&&xr.passThroughHooksRespectAsync.has(i))return(async()=>{let m=await a.call(o,c);return l.call(o,m)})();let p=a.call(o,c);return l.call(o,p)}:o[s]=(...c)=>{if(this.defaults.async)return(async()=>{let m=await a.apply(o,c);return m===!1&&(m=await l.apply(o,c)),m})();let p=a.apply(o,c);return p===!1&&(p=l.apply(o,c)),p}}r.hooks=o}if(n.walkTokens){let o=this.defaults.walkTokens,i=n.walkTokens;r.walkTokens=function(s){let a=[];return a.push(i.call(this,s)),o&&(a=a.concat(o.call(this,s))),a}}this.defaults={...this.defaults,...r}}),this}setOptions(t){return this.defaults={...this.defaults,...t},this}lexer(t,e){return Ze.lex(t,e??this.defaults)}parser(t,e){return Je.parse(t,e??this.defaults)}parseMarkdown(t){return(e,n)=>{let r={...n},o={...this.defaults,...r},i=this.onError(!!o.silent,!!o.async);if(this.defaults.async===!0&&r.async===!1)return i(new Error("marked(): The async option was set to true by an extension. Remove async: false from the parse options object to return a Promise."));if(typeof e>"u"||e===null)return i(new Error("marked(): input parameter is undefined or null"));if(typeof e!="string")return i(new Error("marked(): input parameter is of type "+Object.prototype.toString.call(e)+", string expected"));if(o.hooks&&(o.hooks.options=o,o.hooks.block=t),o.async)return(async()=>{let s=o.hooks?await o.hooks.preprocess(e):e,a=await(o.hooks?await o.hooks.provideLexer(t):t?Ze.lex:Ze.lexInline)(s,o),l=o.hooks?await o.hooks.processAllTokens(a):a;o.walkTokens&&await Promise.all(this.walkTokens(l,o.walkTokens));let c=await(o.hooks?await o.hooks.provideParser(t):t?Je.parse:Je.parseInline)(l,o);return o.hooks?await o.hooks.postprocess(c):c})().catch(i);try{o.hooks&&(e=o.hooks.preprocess(e));let s=(o.hooks?o.hooks.provideLexer(t):t?Ze.lex:Ze.lexInline)(e,o);o.hooks&&(s=o.hooks.processAllTokens(s)),o.walkTokens&&this.walkTokens(s,o.walkTokens);let a=(o.hooks?o.hooks.provideParser(t):t?Je.parse:Je.parseInline)(s,o);return o.hooks&&(a=o.hooks.postprocess(a)),a}catch(s){return i(s)}}}onError(t,e){return n=>{if(n.message+=`
Please report this to https://github.com/markedjs/marked.`,t){let r="<p>An error occurred:</p><pre>"+ct(n.message+"",!0)+"</pre>";return e?Promise.resolve(r):r}if(e)return Promise.reject(n);throw n}}},ln=new ja;function J(t,e){return ln.parse(t,e)}J.options=J.setOptions=function(t){return ln.setOptions(t),J.defaults=ln.defaults,pu(J.defaults),J};J.getDefaults=Ua;J.defaults=cn;function Ib(...t){return ln.use(...t),J.defaults=ln.defaults,pu(J.defaults),J}J.use=Ib;J.walkTokens=function(t,e){return ln.walkTokens(t,e)};J.parseInline=ln.parseInline;J.Parser=Je;J.parser=Je.parse;J.Renderer=Ii;J.TextRenderer=Ba;J.Lexer=Ze;J.lexer=Ze.lex;J.Tokenizer=Ci;J.Hooks=xr;J.parse=J;var DS=J.options,US=J.setOptions,HS=J.walkTokens,zS=J.parseInline;var GS=Je.parse,FS=Ze.lex;var Rb=new ja({gfm:!0,breaks:!0}),Eu=["a","p","br","strong","em","b","i","u","s","del","code","pre","ul","ol","li","blockquote","h1","h2","h3","h4","h5","h6","hr","span","table","thead","tbody","tr","th","td"],wu=["href","title","class"],Nb=[...Eu,"img"],Ob=[...wu,"src","alt","width","height"];function Ni(t,e){let n=e?.allowImages===!0,r=Rb.parse(t,{async:!1}),o=ou.sanitize(r,{ALLOWED_TAGS:n?Nb:Eu,ALLOWED_ATTR:n?Ob:wu}),i=document.createElement("template");i.innerHTML=o;for(let s of i.content.querySelectorAll("a[href]"))s.setAttribute("target","_blank"),s.setAttribute("rel","noopener noreferrer");return i.innerHTML.trim()}function Tu(t){let e=document.createElement("div");e.className="resize-handle",e.setAttribute("part","resize-handle"),e.setAttribute("role","separator"),e.setAttribute("aria-label",t.label),e.tabIndex=0;let n=(r,o,i,s,a)=>{let l=o.x==="right"?i.right-s:s-i.left,c={width:Math.max(280,l)};if(r!=="both")return c;let p=o.y==="bottom"?i.bottom-a:a-i.top;return{...c,height:Math.max(240,p)}};return e.addEventListener("pointerdown",r=>{let o=t.axis();if(o==="none")return;let i=t.anchor(),s=t.rect(),a=c=>{t.apply(n(o,i,s,c.clientX,c.clientY))},l=c=>{window.removeEventListener("pointermove",a),window.removeEventListener("pointerup",l),e.removeAttribute("data-dragging"),t.commit(n(o,i,s,c.clientX,c.clientY))};e.setAttribute("data-dragging","true"),window.addEventListener("pointermove",a),window.addEventListener("pointerup",l),r.preventDefault()}),e.addEventListener("keydown",r=>{let o=t.axis();if(o==="none")return;let i=t.anchor(),s=t.rect(),a=r.shiftKey?64:16,l=i.x==="right"?-1:1,c=s.right-s.left,p=s.bottom-s.top,m=null;if(r.key==="ArrowLeft")m={width:Math.max(280,c-a*l)};else if(r.key==="ArrowRight")m={width:Math.max(280,c+a*l)};else if(o==="both"&&(r.key==="ArrowUp"||r.key==="ArrowDown")){let y=r.key===(i.y==="bottom"?"ArrowUp":"ArrowDown");m={height:Math.max(240,p+(y?a:-a))}}m!==null&&(r.preventDefault(),t.apply(m),t.commit(m))}),e}function Su(t,e){for(let n of Array.from(t.childNodes))n.nodeType===Node.TEXT_NODE?e.push({node:n,parent:t}):Su(n,e)}function Au(t){let e=[];Su(t,e);let n=0;for(let{node:r,parent:o}of e){let i=document.createDocumentFragment();for(let s of r.data.split(/(\s+)/)){if(s==="")continue;if(/\s/.test(s)){i.appendChild(document.createTextNode(s));continue}let a=document.createElement("span");a.className="word",a.style.setProperty("--ag-ui-word-index",String(n)),a.textContent=s,i.appendChild(a),n+=1}o.replaceChild(i,r)}}function ku(t,e,n){let r=document.createElement("div");r.className=`run-notice run-notice--${n}`,r.setAttribute("part",`run-notice run-notice-${n}`),r.setAttribute("role","status");let o=document.createElement("span");o.className="run-notice-icon",o.setAttribute("part","run-notice-icon"),o.textContent=t,o.setAttribute("aria-hidden","true");let i=document.createElement("span");return i.className="run-notice-text",i.setAttribute("part","run-notice-text"),i.textContent=e,r.append(o,i),r}var Oi=class{chips;palette;#n;#e=[];#t=!1;#o=!1;#r=[];#i=0;constructor(e){this.#n=e,this.chips=document.createElement("div"),this.chips.className="skill-chips",this.chips.setAttribute("part","skill-chips"),this.chips.hidden=!0,this.palette=document.createElement("div"),this.palette.className="skill-palette",this.palette.setAttribute("part","skill-palette"),this.palette.setAttribute("role","listbox"),this.palette.hidden=!0}setSkills(e){this.#e=e,this.#u()}enableChips(e){this.#t=e,this.#u()}enableSlash(e){this.#o=e}isOpen(){return!this.palette.hidden}onInput(e){this.#o&&e.startsWith("/")?this.#a(e.slice(1)):this.close()}onKeydown(e){return this.isOpen()?e.key==="ArrowDown"?(this.#d(1),!0):e.key==="ArrowUp"?(this.#d(-1),!0):e.key==="Escape"?(this.close(),!0):e.key==="Enter"?(this.#r.slice(this.#i,this.#i+1).forEach(n=>{this.#p(n)}),!0):!1:!1}close(){this.palette.hidden=!0,this.palette.replaceChildren()}#a(e){let n=e.trim().toLowerCase(),r=this.#e.filter(o=>o.name.toLowerCase().includes(n)||o.title.toLowerCase().includes(n));if(r.length===0){this.close();return}this.#r=r,this.#i=0,this.#c(),this.palette.hidden=!1}#d(e){let n=this.#r.length;this.#i=(this.#i+e+n)%n,this.#c()}#p(e){this.close(),this.#n(e)}#u(){this.chips.replaceChildren();let e=this.#t?this.#e.filter(n=>n.chip===!0):[];this.chips.hidden=e.length===0;for(let n of e){let r=document.createElement("button");r.type="button",r.className="skill-chip",r.setAttribute("part","skill-chip"),r.textContent=n.title,r.title=`/${n.name}`,r.addEventListener("click",()=>this.#p(n)),this.chips.appendChild(r)}}#c(){this.palette.replaceChildren(),this.#r.forEach((e,n)=>{let r=document.createElement("button");r.type="button",r.className="skill-item",r.setAttribute("part","skill-item"),r.setAttribute("role","option"),r.setAttribute("aria-selected",n===this.#i?"true":"false");let o=document.createElement("span");o.className="skill-item-title",o.setAttribute("part","skill-item-title");let i=document.createElement("code");if(i.className="skill-item-token",i.setAttribute("part","skill-item-token"),i.textContent=`/${e.name}`,o.append(i,document.createTextNode(` ${e.title}`)),r.appendChild(o),e.description!==void 0){let s=document.createElement("span");s.className="skill-item-desc",s.setAttribute("part","skill-item-desc"),s.textContent=e.description,r.appendChild(s)}r.addEventListener("click",()=>this.#p(e)),this.palette.appendChild(r)})}};var Cu=`
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

  /* Body text and raised chrome, read only by the code-block copy button.
     The defaults restate what it inherits, so a host that sets neither sees
     no repaint \u2014 see the note on .code-copy. */
  --_text: var(--ag-ui-text, var(--_fg));
  --_surface: var(--ag-ui-surface, transparent);

  /* Status accents for tool-call cards. */
  --_success: var(--ag-ui-success, #15803d);
  --_danger: var(--ag-ui-danger, #b91c1c);
  --_muted: var(--ag-ui-muted, #6b7280);

  /* Tool-call status icon glyphs (override to re-theme) + spinner speed.
     The pending state is the animated ring; the settled states use these. */
  --_tool-icon-done: var(--ag-ui-tool-icon-done, "\u2713");
  --_tool-icon-error: var(--ag-ui-tool-icon-error, "\u2715");
  --_tool-icon-declined: var(--ag-ui-tool-icon-declined, "\u2298");
  --_tool-spin-duration: var(--ag-ui-tool-spin-duration, 0.7s);

  /* Answer well (opt-in via data-answer-well) \u2014 boxes a whole assistant turn. */
  --_well-bg: var(--ag-ui-well-bg, transparent);
  --_well-border: var(--ag-ui-well-border, var(--_border));

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

  /* Layout \u2014 override from outside to dock the widget anywhere.
     Set --ag-ui-position: static (and place this element in your own
     grid/flex layout) to embed it in the page flow instead of floating. */
  --_position: var(--ag-ui-position, fixed);
  --_z-index: var(--ag-ui-z-index, 2147483000);
  --_width: var(--ag-ui-width, 380px);
  --_height: var(--ag-ui-height, 560px);
  --_inset: var(--ag-ui-inset, auto 24px 24px auto);
  --_max-width: var(--ag-ui-max-width, calc(100vw - 48px));
  --_max-height: var(--ag-ui-max-height, calc(100vh - 48px));
  /* Reading-column width for placement="page" (full-bleed, centred content). */
  --_content-max-width: var(--ag-ui-content-max-width, 820px);
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
  --_inset: var(--ag-ui-inset, auto auto 24px 24px);
}

:host([placement="side"]) {
  --_inset: var(--ag-ui-inset, 0 0 0 auto);
  --_width: var(--ag-ui-width, 420px);
  --_height: var(--ag-ui-height, 100vh);
  --_max-height: var(--ag-ui-max-height, 100vh);
  --_radius: var(--ag-ui-radius, 0);
}

:host([placement="full"]) {
  --_inset: var(--ag-ui-inset, 0);
  --_width: var(--ag-ui-width, 100vw);
  --_height: var(--ag-ui-height, 100vh);
  --_max-width: var(--ag-ui-max-width, 100vw);
  --_max-height: var(--ag-ui-max-height, 100vh);
  --_radius: var(--ag-ui-radius, 0);
}

/* Page: full-bleed background with a centred reading column capped at
   --ag-ui-content-max-width, where "full" is edge-to-edge and left-aligned.
   The column comes from symmetric auto padding on the scroll area and
   composer rather than a per-row wrapper, so user pills still right-align and
   the assistant well spans the column. */
:host([placement="page"]) {
  --_inset: var(--ag-ui-inset, 0);
  --_width: var(--ag-ui-width, 100vw);
  --_height: var(--ag-ui-height, 100vh);
  --_max-width: var(--ag-ui-max-width, 100vw);
  --_max-height: var(--ag-ui-max-height, 100vh);
  --_radius: var(--ag-ui-radius, 0);
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

/* Sidebar: a full-height docked panel that slides open/closed and
   collapses to a slim icon rail (not the floating launcher). Docked right by
   default; data-side="left" docks it left. Overlay by default \u2014 set
   --ag-ui-position: static (and place this element in your own layout) for a
   host-managed push instead. */
:host([placement="sidebar"]) {
  --_inset: var(--ag-ui-inset, 0 0 0 auto);
  --_width: var(--ag-ui-width, 420px);
  --_height: var(--ag-ui-height, 100vh);
  --_max-height: var(--ag-ui-max-height, 100vh);
  --_radius: var(--ag-ui-radius, 0);
  transition: width var(--_motion) var(--_ease);
}

:host([placement="sidebar"][data-side="left"]) {
  --_inset: var(--ag-ui-inset, 0 auto 0 0);
}

/* The docked panel is pinned to the edge it docks against rather than filling
   the host as a flex child. Collapsing shrinks the host to the rail width, and
   a flex child would be squashed to 52px on the way out instead of sliding out
   at full width. */
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
:host([placement="sidebar"][collapsed]) {
  width: var(--_rail-width);
  height: 100vh;
  max-height: 100vh;
  bottom: 0;
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
:host([placement="sidebar"][collapsed]) .launcher {
  inset: 0;
  width: auto;
  height: auto;
  align-items: flex-start;
  padding-top: 16px;
  border: 1px solid var(--_border);
  border-radius: 0;
  background: var(--_header-bg);
  color: var(--_header-fg);
  box-shadow: none;
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
  border-radius: var(--_radius);
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
  gap: 2px;
  flex: none;
}

.header-btn {
  border: none;
  background: transparent;
  color: inherit;
  font: inherit;
  line-height: 1;
  padding: 4px 7px;
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

   Two placements collapse differently: "sidebar" slides to its rail (below),
   while "embedded" and "page" keep the header bar, having no corner for a
   floating circle that would escape the host's layout. */
:host([collapsed]) {
  pointer-events: none;
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

/* The two in-flow placements keep the original collapse: hide the body, let
   the host shrink to the header bar. */
:host([collapsed]:is([placement="embedded"], [placement="page"])) {
  height: auto;
  max-height: none;
  pointer-events: auto;
}

:host([collapsed]:is([placement="embedded"], [placement="page"])) .chat {
  opacity: 1;
  transform: none;
  visibility: visible;
}

/* These two keep the header bar, so the launcher must stay out of the way: an
   embedded host is position: static, which would let an absolutely-positioned
   circle escape the layout and land against whatever the page positions. */
:host([collapsed]:is([placement="embedded"], [placement="page"])) .launcher {
  visibility: hidden;
  opacity: 0;
}

:host([collapsed]:is([placement="embedded"], [placement="page"])) .messages,
:host([collapsed]:is([placement="embedded"], [placement="page"])) .input-row,
:host([collapsed]:is([placement="embedded"], [placement="page"])) .skill-chips,
:host([collapsed]:is([placement="embedded"], [placement="page"])) .skill-palette,
:host([collapsed]:is([placement="embedded"], [placement="page"])) .skill-hint {
  display: none;
}

.messages {
  flex: 1;
  overflow-y: auto;
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
  border-radius: var(--_radius);
}

.message {
  max-width: 80%;
  padding: var(--_msg-pad);
  border-radius: var(--_msg-radius);
  line-height: 1.4;
  white-space: pre-wrap;
  word-break: break-word;
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
  content: "\u25BE ";
}

.thoughts-toggle[aria-expanded="false"]::before {
  content: "\u25B8 ";
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

.tool-call[data-status="declined"] .tool-call-status {
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
  content: "\u25B8 ";
}

.tool-call-toggle[aria-expanded="true"]::before {
  content: "\u25BE ";
}

/* Resize handle: a corner grip on a floating panel, an edge grip on a docked
   one. Absent entirely where the placement is full-bleed, since there is
   nothing to drag. */
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

/* The grip sits on the corner opposite the panel's anchor, because a resize
   measures from whichever edge is not moving.

   Default is floating: pinned bottom-right, so the grip is top-left. */
.resize-handle {
  top: 0;
  left: 0;
  width: 14px;
  height: 14px;
  cursor: nwse-resize;
}

/* Placement is only the opening guess, and these two rules are all it is good
   for. Embedded sits in normal flow, pinned top-left, so it grows bottom-right;
   bottom-left is pinned there, so its free corner is top-right. */
:host([placement="embedded"]) .resize-handle {
  top: auto;
  left: auto;
  right: 0;
  bottom: 0;
  cursor: nwse-resize;
}

:host([placement="bottom-left"]) .resize-handle {
  left: auto;
  right: 0;
  cursor: nesw-resize;
}

/* Then the measurement corrects it. Which edges are held still belongs to the
   host's layout, not to placement -- a floating panel a host right-aligns is
   anchored bottom-left -- so the element measures them and stamps a single
   hyphenated "<y>-<x>" token here. Equal specificity to the rules above, so
   source order is what lets the measured value win.

   Two traps, both of which silently draw the grip on the corner that moves:

   Never write these as [data-resize-anchor~="left"]. The stamped value is one
   hyphenated token and ~= matches whitespace-separated words, so it can never
   match.

   Each rule must set both sides of its axis, not only the side it moves, or it
   cannot undo a placement guess that flipped the other way. */
:host([data-resize-anchor$="-left"]) .resize-handle {
  left: auto;
  right: 0;
}

:host([data-resize-anchor$="-right"]) .resize-handle {
  left: 0;
  right: auto;
}

:host([data-resize-anchor^="top-"]) .resize-handle {
  top: auto;
  bottom: 0;
}

:host([data-resize-anchor^="bottom-"]) .resize-handle {
  top: 0;
  bottom: auto;
}

/* One axis flipped means the drag runs along the other diagonal. */
:host([data-resize-anchor="top-left"]) .resize-handle,
:host([data-resize-anchor="bottom-right"]) .resize-handle {
  cursor: nwse-resize;
}

:host([data-resize-anchor="top-right"]) .resize-handle,
:host([data-resize-anchor="bottom-left"]) .resize-handle {
  cursor: nesw-resize;
}

/* Docked: the placement owns the height, so only the inner edge is the user's --
   an edge, not a corner, so this outranks the measured anchor by coming after. */
:host([placement="sidebar"]) .resize-handle,
:host([placement="side"]) .resize-handle {
  top: 0;
  bottom: auto;
  width: 8px;
  height: 100%;
  cursor: ew-resize;
}

/* Docked to the left, so the inner edge is the right-hand one. */
:host([placement="sidebar"][data-side="left"]) .resize-handle {
  left: auto;
  right: 0;
}

/* Full-bleed: nothing to drag. */
:host([placement="full"]) .resize-handle,
:host([placement="page"]) .resize-handle {
  display: none;
}

.resize-handle[data-dragging] {
  background: var(--_accent);
  opacity: 0.35;
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
  color: #ffffff;
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

/* The mic button's mount point; filled only once #wireVoice mounts the
   control. */
.voice-slot {
  display: contents;
}

/* Recording: a red tint + a gentle pulse so it's clearly "live". */
.voice-btn[data-state="recording"] {
  background: var(--_danger);
  color: #ffffff;
  animation: ag-ui-voice-pulse 1.2s ease-in-out infinite;
}

.voice-btn[data-state="recording"]:hover {
  background: var(--_danger);
  color: #ffffff;
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
.chart-block {
  align-self: stretch;
  max-width: 100%;
  margin: 6px 0;
  color: var(--_fg);
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
  font-size: 12px;
  font-family: ui-monospace, "SF Mono", Menlo, monospace;
  background: var(--_assistant-bg);
  border-radius: 8px;
  white-space: pre-wrap;
  word-break: break-word;
}

.confirm-actions {
  display: flex;
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
  color: #ffffff;
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
  color: #ffffff;
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
  color: #ffffff;
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

.skill-palette {
  margin: 8px 12px 0;
  display: flex;
  flex-direction: column;
  max-height: 220px;
  overflow: auto;
  background: var(--_bg);
  border: 1px solid var(--_border);
  border-radius: 8px;
  box-shadow: 0 8px 24px rgba(20, 20, 50, 0.16);
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
  transition: visibility var(--_motion) var(--_ease);
}

/* Closed. The overlay keeps its box (display, not none) so the backdrop and
   panel inside it stay rendered and can transition both ways; visibility is
   what takes the whole subtree out of the tab order, the a11y tree and hit
   testing at rest, and it holds off until the slide has finished. */
.drawer[hidden] {
  display: flex;
  visibility: hidden;
  pointer-events: none;
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
  transform-origin: top center;
  transition:
    opacity var(--_motion) var(--_ease),
    transform var(--_motion) var(--_ease),
    visibility var(--_motion) var(--_ease);
}

/* Same idiom as the drawer: laid out at rest, hidden by visibility, so the
   popover can animate open and closed. */
.checkpoints[hidden] {
  display: flex;
  visibility: hidden;
  pointer-events: none;
  opacity: 0;
  transform: scale(0.96) translateY(-6px);
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
  color: #ffffff;
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
  font-weight: 600;
}

.drawer-new {
  border: 1px solid var(--_border);
  border-radius: var(--_radius);
  background: var(--_bg);
  color: var(--_accent);
  padding: 4px 10px;
  font: inherit;
  font-size: 0.85em;
  cursor: pointer;
}

.drawer-list {
  flex: 1;
  min-height: 0;
  overflow-y: auto;
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
  color: #ffffff;
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

:host([placement="embedded"]) .drawer-panel {
  width: 100%;
  border-right: none;
  box-shadow: none;
}
`;var Mi=class{element;#n;#e;#t;#o;#r=!1;constructor(e=le){this.#o=e,this.element=document.createElement("div"),this.element.className="thoughts",this.element.setAttribute("part","thoughts"),this.element.setAttribute("data-streaming",""),this.#t=document.createElement("button"),this.#t.type="button",this.#t.className="thoughts-toggle",this.#t.setAttribute("part","thoughts-toggle"),this.#t.setAttribute("aria-expanded","true"),this.#n=document.createElement("span"),this.#n.className="thoughts-label",this.#n.setAttribute("part","thoughts-label"),this.#n.textContent=e.thinking,this.#t.append(this.#n),this.#e=document.createElement("pre"),this.#e.className="thoughts-body",this.#e.setAttribute("part","thoughts-body"),this.#t.addEventListener("click",()=>{this.#i(!this.#r)}),this.element.append(this.#t,this.#e)}stream(e){this.#e.textContent=e}collapse(){this.#r||(this.element.removeAttribute("data-streaming"),this.#n.textContent=this.#o.thoughts,this.#i(!0))}#i(e){this.#r=e,this.#e.hidden=e,this.#t.setAttribute("aria-expanded",String(!e))}};var Li=class{element;#n;#e;#t;#o;#r;#i;#a=[];#d="";#p=null;constructor(e,n=le){this.#n=e,this.#i=n,this.element=document.createElement("div"),this.element.className="drawer",this.element.setAttribute("part","drawer"),this.element.hidden=!0;let r=document.createElement("div");r.className="drawer-backdrop",r.setAttribute("part","drawer-backdrop"),r.addEventListener("click",()=>this.close()),this.#e=document.createElement("div"),this.#e.className="drawer-panel",this.#e.setAttribute("part","drawer-panel"),this.#e.setAttribute("role","dialog"),this.#e.setAttribute("aria-modal","true"),this.#e.setAttribute("aria-label",n.chatHistory),this.#e.addEventListener("keydown",i=>this.#c(i));let o=document.createElement("div");o.className="drawer-header",o.setAttribute("part","drawer-header"),this.#t=document.createElement("span"),this.#t.className="drawer-title",this.#t.setAttribute("part","drawer-title"),this.#t.textContent=n.chats,this.#o=document.createElement("button"),this.#o.type="button",this.#o.className="drawer-new",this.#o.setAttribute("part","drawer-new"),this.#o.textContent=n.newChat,this.#o.addEventListener("click",()=>{this.close(),this.#n.onNew()}),o.append(this.#t,this.#o),this.#r=document.createElement("div"),this.#r.className="drawer-list",this.#r.setAttribute("part","drawer-list"),this.#e.append(o,this.#r),this.element.append(r,this.#e)}setStrings(e){this.#i=e,this.#e.setAttribute("aria-label",e.chatHistory),this.#t.textContent=e.chats,this.#o.textContent=e.newChat,this.#s()}isOpen(){return!this.element.hidden}open(){this.isOpen()||(this.#p=this.#u(),this.element.hidden=!1,this.#o.focus())}close(){this.isOpen()&&(this.element.hidden=!0,this.#p?.focus(),this.#p=null)}toggle(){this.isOpen()?this.close():this.open()}#u(){return this.element.getRootNode().activeElement}#c(e){if(e.key==="Escape"){e.preventDefault(),this.close();return}if(e.key!=="Tab")return;let n=Array.from(this.#e.querySelectorAll("button, input, [tabindex]")).filter(s=>!s.hidden),r=n[0],o=n[n.length-1],i=this.#u();e.shiftKey&&i===r?(e.preventDefault(),o?.focus()):!e.shiftKey&&i===o&&(e.preventDefault(),r?.focus())}setThreads(e,n){this.#a=e,this.#d=n,this.#s()}#s(){if(this.#r.replaceChildren(),this.#a.length===0){let e=document.createElement("div");e.className="drawer-empty",e.setAttribute("part","drawer-empty"),e.textContent=this.#i.noConversations,this.#r.appendChild(e);return}for(let e of this.#a)this.#r.appendChild(this.#l(e))}#l(e){let n=document.createElement("div");n.className="drawer-row",n.setAttribute("part","drawer-row"),e.threadId===this.#d&&n.classList.add("drawer-row--active");let r=document.createElement("button");r.type="button",r.className="drawer-row-select",r.setAttribute("part","drawer-row-select");let o=document.createElement("span");o.className="drawer-row-title",o.setAttribute("part","drawer-row-title"),o.textContent=e.title;let i=document.createElement("span");i.className="drawer-row-time",i.setAttribute("part","drawer-row-time"),i.textContent=Ti(e.updatedAt,void 0,this.#i);let s=document.createElement("span");s.className="drawer-row-preview",s.setAttribute("part","drawer-row-preview"),s.textContent=e.preview,r.append(o,i,s),r.addEventListener("click",()=>{this.close(),this.#n.onSelect(e.threadId)});let a=document.createElement("button");a.type="button",a.className="drawer-row-rename",a.setAttribute("part","drawer-row-rename"),a.title=this.#i.rename,a.setAttribute("aria-label",this.#i.renameConversation),a.textContent="\u270E",a.addEventListener("click",()=>this.#h(n,e));let l=document.createElement("button");l.type="button",l.className="drawer-row-delete",l.setAttribute("part","drawer-row-delete"),l.title=this.#i.delete,l.setAttribute("aria-label",this.#i.deleteConversation),l.textContent="\u{1F5D1}",l.addEventListener("click",()=>this.#N(n,e));let c=document.createElement("div");return c.className="drawer-row-actions",c.setAttribute("part","drawer-row-actions"),c.append(a,l),n.append(r,c),n}#h(e,n){let r=document.createElement("input");r.type="text",r.className="drawer-rename-input",r.setAttribute("part","drawer-rename-input"),r.value=n.title;let o=!1,i=()=>{if(o)return;o=!0;let a=r.value.trim();a===""||a===n.title?this.#s():this.#n.onRename(n.threadId,a)},s=()=>{o||(o=!0,this.#s())};r.addEventListener("keydown",a=>{a.key==="Enter"?(a.preventDefault(),i()):a.key==="Escape"&&(a.preventDefault(),a.stopPropagation(),s())}),r.addEventListener("blur",()=>i()),e.replaceChildren(r),r.focus(),r.select()}#N(e,n){let r=document.createElement("div");r.className="drawer-confirm",r.setAttribute("part","drawer-confirm");let o=document.createElement("span");o.className="drawer-confirm-label",o.setAttribute("part","drawer-confirm-label"),o.textContent=this.#i.deletePrompt;let i=document.createElement("button");i.type="button",i.className="drawer-confirm-yes",i.setAttribute("part","drawer-confirm-yes"),i.textContent=this.#i.delete,i.addEventListener("click",()=>this.#n.onDelete(n.threadId));let s=document.createElement("button");s.type="button",s.className="drawer-confirm-no",s.setAttribute("part","drawer-confirm-no"),s.textContent=this.#i.cancel,s.addEventListener("click",()=>this.#s()),r.append(o,i,s),e.replaceChildren(r)}};function qa(t){return{[ee.PENDING]:t.toolRunning,[ee.DEFERRED]:t.toolDeferred,[ee.DONE]:t.toolDone,[ee.ERROR]:t.toolError,[ee.DECLINED]:t.toolDeclined}}function Mb(t){return{[ee.DONE]:t.resultLabel,[ee.ERROR]:t.errorLabel,[ee.DECLINED]:t.declinedLabel}}function Lb(t){try{return JSON.stringify(JSON.parse(t),null,2)}catch{return t}}var wr=class{element;approvalSlot;#n;#e;#t;#o;#r;#i;#a;#d=!1;constructor(e,n,r,o=le){this.#a=o,this.element=document.createElement("div"),this.element.className="tool-call",this.element.setAttribute("part","tool-card"),this.element.setAttribute("data-tool-name",e),this.element.setAttribute("data-status",ee.PENDING),this.element.setAttribute("data-expanded","false");let i=document.createElement("div");i.className="tool-call-head",i.setAttribute("part","tool-card-head");let s=document.createElement("span");s.className="tool-call-icon",s.setAttribute("part","tool-card-icon"),s.setAttribute("aria-hidden","true");let a=document.createElement("span");a.className="tool-call-name",a.setAttribute("part","tool-card-name"),a.textContent=r??e,this.#n=document.createElement("span"),this.#n.className="tool-call-status",this.#n.setAttribute("part","tool-card-status"),this.#n.textContent=qa(o)[ee.PENDING],this.#e=document.createElement("span"),this.#e.className="tool-call-decision",this.#e.setAttribute("part","tool-card-decision"),this.#e.hidden=!0,i.append(s,a,this.#n,this.#e);let l=this.#p("args",o.argumentsLabel);l.body.textContent=JSON.stringify(n,null,2),l.root.hidden=Object.keys(n).length===0;let c=this.#p("result",o.resultLabel);this.#o=c.root,this.#r=c.label,this.#i=c.body,c.root.hidden=!0,this.#t=document.createElement("button"),this.#t.type="button",this.#t.className="tool-call-toggle",this.#t.setAttribute("part","tool-card-toggle"),this.#t.setAttribute("aria-expanded","false"),this.#t.textContent=o.details,this.#t.addEventListener("click",()=>this.#c(!this.#u()));let p=document.createElement("div");p.className="tool-call-body",p.setAttribute("part","tool-card-body"),p.append(l.root,c.root),this.approvalSlot=document.createElement("div"),this.approvalSlot.className="tool-call-approval",this.approvalSlot.setAttribute("part","tool-card-approval"),this.element.append(i,this.#t,p,this.approvalSlot)}mark(e){this.#d||(this.element.setAttribute("data-status",e),this.#n.textContent=qa(this.#a)[e])}recordDecision(e){this.element.setAttribute("data-decision",e),this.#e.textContent=e==="approved"?this.#a.decisionApproved:this.#a.decisionDeclined,this.#e.hidden=!1}get settled(){return this.#d}settle(e,n){this.#d||(this.#d=!0,this.element.setAttribute("data-status",e),this.#n.textContent=qa(this.#a)[e],this.#r.textContent=Mb(this.#a)[e],this.#i.textContent=Lb(n),this.#o.hidden=!1)}#p(e,n){let r=document.createElement("div");r.className=`tool-call-section tool-call-section--${e}`,r.setAttribute("part",`tool-card-section tool-card-${e}-section`);let o=document.createElement("span");o.className="tool-call-section-label",o.setAttribute("part",`tool-card-section-label tool-card-${e}-label`),o.textContent=n;let i=document.createElement("pre");return i.className=`tool-call-${e}`,i.setAttribute("part",`tool-card-${e}`),r.append(o,i),{root:r,label:o,body:i}}#u(){return this.element.getAttribute("data-expanded")==="true"}#c(e){this.element.setAttribute("data-expanded",String(e)),this.#t.setAttribute("aria-expanded",String(e))}};var Pi=class{element;#n;#e;#t;#o="idle";#r=null;#i=null;#a=[];#d=!1;constructor(e){this.#n=e.transcribe,this.#e=e.onText,this.#t=e.strings??le,this.element=document.createElement("button"),this.element.type="button",this.element.className="voice-btn",this.element.setAttribute("part","voice-button");let n=document.createElement("slot");n.name="icon-voice",n.innerHTML=Nl,this.element.append(n),this.#h("idle"),this.element.addEventListener("click",()=>{this.toggle()})}async toggle(){if(this.#o==="recording"){this.#u();return}this.#o!=="transcribing"&&await this.#p()}async#p(){let e;try{e=await navigator.mediaDevices.getUserMedia({audio:!0})}catch{this.#l(this.#t.transcriptionFailed);return}this.#i=e,this.#a=[];let n=new MediaRecorder(e);n.addEventListener("dataavailable",r=>{this.#a.push(r.data)}),n.addEventListener("stop",()=>{this.#c(n.mimeType)}),this.#r=n,n.start(),this.#h("recording")}#u(){this.#r?.stop()}dispose(){this.#d=!0,this.#r!==null&&this.#r.state!=="inactive"&&this.#r.stop(),this.#r=null,this.#s()}async#c(e){if(this.#d)return;this.#s(),this.#h("transcribing");let n=new Blob(this.#a,{type:e||"audio/webm"});try{let r=await this.#n(n);this.#h("idle"),r!==""&&this.#e(r)}catch(r){this.#l(r instanceof Error?r.message:this.#t.transcriptionFailed)}finally{this.#r=null}}#s(){for(let e of this.#i?.getTracks()??[])e.stop();this.#i=null}#l(e){this.#s(),this.#r=null,this.#h("idle"),this.element.title=e}#h(e){this.#o=e,this.element.dataset.state=e;let n=this.#N(e);this.element.title=n,this.element.setAttribute("aria-label",n),this.element.setAttribute("aria-pressed",String(e==="recording")),this.element.disabled=e==="transcribing"}#N(e){return e==="recording"?this.#t.stopRecording:e==="transcribing"?this.#t.transcribing:this.#t.recordVoice}};var Di=class extends Error{constructor(e){super(e),this.name="ConnectionLostError"}},Gn=class{#n;#e;#t;#o;#r;#i;#a;#d=new Set;#p;#u=!1;constructor(e){this.#n=e.agent,this.#e=e.handlers,this.#t=e.getTools??(()=>[]),this.#o=e.getContext??(()=>[]),this.#r=e.executeTool??null,this.#i=e.resolveInterrupts??null,this.#a=e.onPersist??(()=>{}),this.#p=e.connectionLostMessage??"Connection lost";let n=e.onStateChanged;n!==void 0&&this.#n.subscribe({onStateChanged:({state:r})=>{n(r)}})}get state(){return this.#n.state}setState(e){this.#n.setState({...e})}get running(){return this.#n.isRunning}get messages(){return this.#n.messages}async send(e,n=[]){let r={id:Ie(),role:"user",content:e};n.length>0&&(r.attachments=n),this.#n.addMessage(r),this.#a(this.#n.messages),await this.#c()}async resume(){await this.#c()}addToolResult(e,n){this.#n.addMessage({id:Ie(),role:"tool",content:n,toolCallId:e}),this.#a(this.#n.messages)}cancel(){this.#u=!0,this.#n.abortRun()}async#c(){this.#u=!1;try{await this.#l(),this.#u&&this.#s()}catch(e){this.#u||Pb(e)?this.#s():this.#e.onError(e instanceof Error?e.message:String(e))}finally{this.#e.onSettled()}}#s(){this.#a(this.#n.messages),this.#e.onCancelled()}async#l(){let e;for(let n=0;n<ps;n+=1){if(this.#u)return;let r=[],o={terminal:!1,errored:!1,interrupts:[]},i={tools:this.#t(),context:this.#o()};if(e!==void 0&&(i.resume=e),await this.#n.runAgent(i,this.#h(r,o)),e=void 0,this.#a(this.#n.messages),this.#u)return;if(!o.terminal)throw new Di(this.#p);if(o.errored)return;if(o.interrupts.length>0){if(this.#i===null)return;let a=await this.#i(o.interrupts);if(this.#u)return;e=Od(o.interrupts,a);continue}if(this.#r===null||r.length===0)return;let s=!1;for(let a of r){let l=await this.#r(a);if(l!==null){if(l.halt===!0)return;this.#n.addMessage({id:Ie(),role:"tool",content:l.content,toolCallId:a.id}),this.#a(this.#n.messages),s=!0}}if(!s)return}}#h(e,n){let r=this.#e,o=this.#d,i=()=>this.#u,s=new Set;return{onRunInitialized(){r.onRunStart()},onTextMessageStartEvent({event:a}){o.has(a.messageId)&&console.warn(`<ag-ui-chat>: the server reused message id "${a.messageId}", which was already closed. Its content will be appended to that earlier message rather than starting a new one, and the merged result is what gets persisted. Issue a fresh id per message.`)},onTextMessageContentEvent({textMessageBuffer:a}){r.onTextDelta(a)},onTextMessageEndEvent({event:a,textMessageBuffer:l}){o.add(a.messageId),r.onTextEnd(l)},onToolCallEndEvent({event:a,toolCallName:l,toolCallArgs:c}){let p={id:a.toolCallId,name:l,args:c};e.push(p),r.onToolCall(p)},onToolCallResultEvent({event:a}){r.onToolResult(a.toolCallId,a.content)},onActivitySnapshotEvent({event:a,messages:l}){if(l.some(p=>p.id===a.messageId&&p.role==="activity")){r.onActivityChanged(a.messageId,a.activityType,a.content);return}r.onActivity(a.activityType,a.content,a.messageId)},onActivityDeltaEvent({event:a}){s.add(a.messageId)},onMessagesChanged({messages:a}){if(s.size!==0){for(let l of s){let c=a.find(p=>p.id===l);c!==void 0&&c.role==="activity"&&r.onActivityChanged(l,c.activityType,c.content)}s.clear()}},onReasoningStartEvent(){r.onReasoningStart()},onReasoningMessageContentEvent({reasoningMessageBuffer:a}){r.onReasoningDelta(a)},onReasoningEndEvent(){r.onReasoningEnd()},onRunFinishedEvent(a){n.terminal=!0,a.outcome==="interrupt"&&(n.interrupts=a.interrupts)},onRunErrorEvent({event:a}){n.terminal=!0,n.errored=!0,!i()&&r.onError(a.message)},onRunFinalized(){n.terminal=!0,r.onRunEnd()}}}};function Pb(t){return t instanceof Error?t.name==="AbortError"||t instanceof TypeError&&/abort/i.test(t.message):!1}function Wa(t){let e=t.attachments;return Array.isArray(e)?e.filter(Db):[]}function Db(t){if(typeof t!="object"||t===null)return!1;let e=t;return typeof e.id=="string"&&typeof e.name=="string"&&typeof e.mime=="string"&&typeof e.size=="number"&&(e.url===void 0||typeof e.url=="string")}var Xa="ag-ui-chat",Fn="thread",Ka="threads",Tr="messages:",Hi="checkpoint:",Ui="minted:",Ub=60,Hb=100,zb="New conversation",vt=class{#n;constructor(e=""){this.#n=e===""?Xa:`${Xa}@${e}`,e!==""&&this.#i()}threadId(){return sessionStorage.getItem(this.#r(Fn))??this.newThread()}newThread(){let e=Ie();return sessionStorage.setItem(this.#r(Fn),e),sessionStorage.setItem(this.#r(Ui+e),"1"),e}isUnsent(e){return sessionStorage.getItem(this.#r(Ui+e))!==null&&sessionStorage.getItem(this.#r(Tr+e))===null}loadMessages(e){return Promise.resolve(this.#a(this.#r(Tr+e)))}saveMessages(e,n){sessionStorage.setItem(this.#r(Tr+e),JSON.stringify(n)),sessionStorage.removeItem(this.#r(Ui+e)),this.#e(e,n)}loadCheckpoint(e){return this.#a(this.#r(Hi+e))}saveCheckpoint(e,n){let r=this.#r(Hi+e);if(n===null){sessionStorage.removeItem(r);return}sessionStorage.setItem(r,JSON.stringify(n))}clear(e){sessionStorage.removeItem(this.#r(Tr+e)),sessionStorage.removeItem(this.#r(Hi+e)),sessionStorage.removeItem(this.#r(Ui+e)),this.#o(this.#t().filter(n=>n.threadId!==e)),sessionStorage.getItem(this.#r(Fn))===e&&sessionStorage.removeItem(this.#r(Fn))}listThreads(){let e=this.#t().sort((n,r)=>r.updatedAt-n.updatedAt).map(({threadId:n,title:r,updatedAt:o,preview:i})=>({threadId:n,title:r,updatedAt:o,preview:i}));return Promise.resolve(e)}setActiveThread(e){sessionStorage.setItem(this.#r(Fn),e)}renameThread(e,n){let r=this.#t(),o=r.find(i=>i.threadId===e);o!==void 0&&(o.title=n,o.titleCustom=!0,this.#o(r))}#e(e,n){let r=this.#t(),o=r.find(a=>a.threadId===e),i=Fb(n),s=Date.now();o===void 0?r.push({threadId:e,title:Iu(n),titleCustom:!1,preview:i,updatedAt:s}):(o.preview=i,o.updatedAt=s,o.titleCustom||(o.title=Iu(n))),this.#o(r)}#t(){return this.#a(this.#r(Ka))??[]}#o(e){let n=this.#r(Ka);if(e.length===0){sessionStorage.removeItem(n);return}sessionStorage.setItem(n,JSON.stringify(e))}#r(e){return`${this.#n}:${e}`}#i(){let e=`${Xa}:`,n=[];for(let r=0;r<sessionStorage.length;r+=1){let o=sessionStorage.key(r);if(o===null||!o.startsWith(e))continue;let i=o.slice(e.length);Gb(i)&&n.push([o,this.#r(i)])}for(let[r,o]of n){let i=sessionStorage.getItem(r);i!==null&&sessionStorage.getItem(o)===null&&sessionStorage.setItem(o,i),sessionStorage.removeItem(r)}}#a(e){let n=sessionStorage.getItem(e);if(n===null)return null;try{return JSON.parse(n)}catch{return null}}};function Gb(t){return t===Fn||t===Ka||t.startsWith(Tr)||t.startsWith(Hi)}function Iu(t){for(let e of t)if(e.role==="user"){let n=Ru(e.content);if(n!=="")return Nu(n,Ub)}return zb}function Fb(t){for(let e of[...t].reverse()){let n=Ru(e.content);if(n!=="")return Nu(n,Hb)}return""}function Ru(t){return typeof t=="string"?t.replace(/\s+/g," ").trim():""}function Nu(t,e){return t.length<=e?t:`${t.slice(0,e-1).trimEnd()}\u2026`}function Be(t,e){return e===void 0?t:{...t,credentials:e}}function zi(t){if(t.newThread!==void 0)return t.newThread();let e=Ie();return t.setActiveThread(e),e}function Ya(t){return new Md({url:t.endpoint,headers:t.headers??{},initialState:{...t.initialState??{}},fetch:(e,n)=>{let r=t.getHeaders?.();if(r===void 0)return fetch(e,Be(n,t.credentials));let o=new Headers(n?.headers);for(let[i,s]of Object.entries(r))o.set(i,s);return fetch(e,Be({...n,headers:o},t.credentials))},...t.threadId!==void 0?{threadId:t.threadId}:{},...t.initialMessages!==void 0?{initialMessages:[...t.initialMessages]}:{}})}var Sr=class{#n;#e;#t;#o;#r=new Set;#i=new Map;constructor(e,n=()=>({}),r=new vt,o=()=>{}){this.#n=e.endsWith("/")?e:`${e}/`,this.#e=n,this.#t=r,this.#o=o}threadId(){return this.#t.threadId()}setActiveThread(e){this.#t.setActiveThread(e)}newThread(){return zi(this.#t)}isUnsent(e){return this.#t.isUnsent?.(e)===!0}saveMessages(e,n){this.#t.saveMessages(e,n)}loadCheckpoint(e){return this.#t.loadCheckpoint(e)}saveCheckpoint(e,n){this.#t.saveCheckpoint(e,n)}renameThread(e,n){this.#t.renameThread(e,n),this.#i.set(e,n),this.#c(e,"PATCH",{title:n})}clear(e){this.#t.clear(e),this.#r.add(e),this.#c(e,"DELETE")}async listThreads(){let e=await this.#a();return e===null?this.#t.listThreads():e.filter(n=>!this.#r.has(n.thread_id)).map(n=>this.#p(n))}async loadMessages(e){if(this.#t.isUnsent?.(e)===!0)return null;let n=await this.#u(`${this.#n}${encodeURIComponent(e)}/`);if(n===null||!n.ok)return this.#t.loadMessages(e);let r=await this.#d(n);return r===null?this.#t.loadMessages(e):r.messages??null}async#a(){let e=await this.#u(this.#n);if(e===null||!e.ok)return null;let n=await this.#d(e);return n===null?null:n.threads??[]}async#d(e){try{return await e.json()}catch{return null}}#p(e){return{threadId:e.thread_id,title:this.#i.get(e.thread_id)??e.title,updatedAt:e.updated_at===null?Number.NaN:Date.parse(e.updated_at),preview:e.preview}}async#u(e){try{return await fetch(e,Be({headers:this.#e()},this.#o()))}catch{return null}}async#c(e,n,r){let o=this.#e();try{await fetch(`${this.#n}${encodeURIComponent(e)}/`,Be({method:n,headers:r===void 0?o:{...o,"content-type":"application/json"},body:r===void 0?null:JSON.stringify(r)},this.#o()))}catch{}}};var Ar=class{#n;#e;#t;constructor(e,n=()=>({}),r=()=>{}){this.#n=e.endsWith("/")?e:`${e}/`,this.#e=n,this.#t=r}async list(){try{let e=await fetch(this.#n,Be({method:"GET",headers:{Accept:"application/json",...this.#e()}},this.#t()));return e.ok?(await e.json()).runs??[]:[]}catch{return[]}}async continuable(){return(await this.list()).filter(e=>e.continuable)}resumeUrl(e){return this.#o("resume",e)}forkUrl(e){return this.#o("fork",e)}#o(e,n){return`${this.#n.slice(0,-5)}${e}/${encodeURIComponent(n)}/`}};async function Za(t,e){let n=new FormData;n.append("audio",t,"recording.webm");let r=await fetch(e.url,Be({method:"POST",headers:{...e.headers??{}},body:n},e.credentials));if(!r.ok)throw new Error(await $b(r));let o=await r.json();if(typeof o=="object"&&o!==null&&typeof o.text=="string")return o.text;throw new Error("transcription returned an unreadable response")}async function $b(t){try{let e=await t.json();if(typeof e.error=="string")return e.error}catch{}return`transcription failed (${t.status})`}function Ja(t,e){return new Promise((n,r)=>{let o=new FormData;o.append("file",t);let i=new XMLHttpRequest;i.open("POST",e.url),i.withCredentials=e.credentials==="include";for(let[l,c]of Object.entries(e.headers??{}))i.setRequestHeader(l,c);let s=e.onProgress;s!==void 0&&i.upload.addEventListener("progress",l=>{l.lengthComputable&&s(l.total===0?0:l.loaded/l.total)}),i.addEventListener("load",()=>{if(i.status>=200&&i.status<300)try{n(Vb(JSON.parse(i.responseText)))}catch{r(new Error("upload returned an unreadable response"))}else r(new Error(Bb(i)))}),i.addEventListener("error",()=>r(new Error("upload failed"))),i.addEventListener("abort",()=>r(new Error("upload cancelled")));let a=e.signal;a!==void 0&&a.addEventListener("abort",()=>i.abort()),i.send(o)})}function Vb(t){if(typeof t!="object"||t===null)throw new Error("not an object");let e=t,n=e.id,r=e.name,o=e.mime,i=e.size,s=e.url;if(typeof n!="string"||typeof r!="string"||typeof o!="string"||typeof i!="number")throw new Error("missing fields");return typeof s=="string"?{id:n,name:r,mime:o,size:i,url:s}:{id:n,name:r,mime:o,size:i}}function Bb(t){try{let e=JSON.parse(t.responseText);if(typeof e.error=="string")return e.error}catch{}return`upload failed (${t.status})`}var jb=["data-attachments-url","data-attachment-accept","data-attachment-max-bytes","data-transcribe-url","data-threads-url","data-tools-url","data-skills-url","data-skills","data-prompt-chips","data-slash-commands","data-theme-toggle","data-strings","data-icon-url"],el=["omit","same-origin","include"];function Qa(t){return el.includes(t)}var Ou="ag-ui-chat:collapsed",Mu="ag-ui-chat:size",Lu="ag-ui-chat:theme",kr=class extends HTMLElement{agentFactory=Ya;headers={};getHeaders=null;allowImages=!1;autoConfirm=!1;askUser=!1;askUserRenderer=null;approvalRenderer=null;confirmPredicate=null;getTools=()=>[...this.#we().map(e=>({name:e.name,description:e.description,parameters:e.parameters})),...this.#t.tools()];getContext=()=>[...Cs(this.getPageMap,this.autoInjectPageMap)];routeMap=[];navigate=null;getPageMap=null;autoInjectPageMap=!0;conversationStore=new vt;uploadHandler=null;transcribeHandler=null;navigationResult=()=>({navigated:!0,url:window.location.href});skillContext=()=>({});toolSummaries={};strings={};resolvePageTarget=e=>document.querySelector(e);#n={};#e=le;#t=new Yn;#o=new Map;#r=!1;#i=new Map;#a=new Map;#d=new Set;#p=[];#u;#c;#s;#l;#h;#N;#R;#D;#g;#te=null;#E;#b;#y;#B;#A;#x;#k;#j=0;#O;#v=null;#q;#ne=null;#F=!1;#M=null;#U={};#$=!1;#re=null;#w=null;#T=null;#oe=0;#W=null;#C=null;#L=null;#f="";#H="";#ie=0;#se=[];#xe=[];#_e=[];#Ee=[];constructor(){super(),this.#u=this.attachShadow({mode:"open"}),this.#c=document.createElement("div"),this.#s=document.createElement("div"),this.#l=document.createElement("textarea"),this.#h=document.createElement("button"),this.#N=document.createElement("span"),this.#E=document.createElement("div"),this.#b=document.createElement("button"),this.#y=document.createElement("input"),this.#B=document.createElement("div"),this.#q=document.createElement("span"),this.#A=document.createElement("button"),this.#x=document.createElement("button"),this.#k=document.createElement("span"),this.#O=document.createElement("div"),this.#R=new Oi(e=>this.#pt(e)),this.#D=new Li({onSelect:e=>{this.#gt(e)},onNew:()=>{this.newChat(),this.#J()},onRename:(e,n)=>{this.conversationStore.renameThread(e,n),this.#J()},onDelete:e=>{this.#vt(e)}}),this.#g=new mr((e,n)=>{this.#qe(e,n)})}#ae(){let e=this.getAttribute("data-runs-url");return e===null||e===""?null:(this.#te===null&&(this.#te=new Ar(e,()=>this.#I(),()=>this.#X())),this.#te)}async#qe(e,n){let r=this.#ae();if(r===null)return;let o=this.#l.value.trim();if(o==="")return;this.#l.value="",this.#V();let i=n==="resume"?r.resumeUrl(e):r.forkUrl(e),s=this.agentFactory({endpoint:i,headers:this.#I(),getHeaders:()=>this.#I(),...this.#K(),threadId:this.#f,initialMessages:[]});await new Gn({agent:s,handlers:this.#Ge(),getTools:()=>this.getTools(),getContext:()=>this.#Oe(),executeTool:l=>this.#He(l),resolveInterrupts:l=>this.#ze(l),connectionLostMessage:this.#e.connectionLost}).send(o)}async#We(){let e=this.#ae();this.#g.setRuns(e===null?[]:await e.continuable())}static get observedAttributes(){return["title-text","placement","credentials",...jb]}attributeChangedCallback(e,n,r){if(e==="credentials"){r!==null&&!Qa(r)&&console.error(`<ag-ui-chat>: credentials="${r}" is not a fetch credentials mode (${el.join(" / ")}) \u2014 it is being ignored, so requests use the browser default and cross-origin cookies will not be sent.`);return}if(e==="placement"){this.#ft(),requestAnimationFrame(()=>this.#ue());return}if(e==="title-text"){this.#N.textContent=r??this.#e.title;return}n===r||!this.#F||console.warn(`<ag-ui-chat>: "${e}" was changed after the element connected, and is read only while connecting \u2014 this assignment has no effect. Set it before the element enters the DOM (in the markup, or on the element before appending it); frameworks that patch attributes after mount should bind it at creation. To apply a new value now, remove and re-insert the element.`)}registerTool(e){this.#t.register(e)}get sharedState(){return this.#M?.state??this.#U}set sharedState(e){this.#U={...e},this.#M?.setState(this.#U)}registerPageState(e){for(let n of qr(e))this.#t.register(n)}registerStateHook(e){this.registerPageState(e)}#Xe(){return this.routeMap.length===0?[]:Rs(()=>this.routeMap,()=>this.navigate)}#Ke(){let e=this.getPageMap;return e===null?[]:[{name:us,description:"Read the current page's structure (fields, buttons, route). Call after acting to observe the result within the same turn.",parameters:{type:"object",properties:{},required:[],[Pe]:"Read the page"},handler:()=>e()}]}#Ye(){let e=this.getAttribute("data-page-actions");if(e===null)return[];let n=new Set(e.split(",").map(r=>r.trim()).filter(r=>r!==""));return ks(n,r=>this.resolvePageTarget(r))}#we(){return[...this.#Xe(),...this.#Ke(),...this.#Ye(),...this.#Ze()]}#Ze(){return this.askUser?[{name:"ask_user",description:"Ask the user a question and wait for their answer. Provide `options` for a multiple-choice prompt; set `allow_custom` to also accept a free-text answer.",parameters:{type:"object",properties:{question:{type:"string",description:"The question to ask the user."},options:{type:"array",items:{type:"string"},description:"Preset choices offered as radio buttons."},allow_custom:{type:"boolean",description:"Allow a free-text answer in addition to any options."}},required:["question"]},handler:e=>this.#Je(e)}]:[]}async#Je(e){let r={question:typeof e.question=="string"?e.question:""},o=e.options;Array.isArray(o)&&(r.options=o.filter(a=>typeof a=="string")),e.allow_custom===!0&&(r.allowCustom=!0),this.#w=new AbortController;let i=this.#w.signal;this.#S();let s=this.askUserRenderer!==null?await this.askUserRenderer(r,{signal:i}):await Aa(this.#_(),r,{signal:i,strings:this.#e});return this.#w=null,this.#m(),this.#s.scrollTop=this.#s.scrollHeight,s}#le(e){let n=this.#we().find(r=>r.name===e);return n!==void 0?n:this.#t.has(e)?this.#t.get(e):null}get endpoint(){return this.getAttribute("endpoint")??""}set endpoint(e){this.setAttribute("endpoint",e)}get credentials(){let e=this.getAttribute("credentials");return e!==null&&Qa(e)?e:null}set credentials(e){if(e===null){this.removeAttribute("credentials");return}if(!Qa(e))throw new TypeError(`<ag-ui-chat>: credentials must be one of ${el.map(n=>`"${n}"`).join(", ")} (got ${JSON.stringify(e)}).`);this.setAttribute("credentials",e)}#I(){return{...this.headers,...this.getHeaders?.()}}#X(){return this.credentials??void 0}#K(){let e=this.#X();return e===void 0?{}:{credentials:e}}#Te(){return Be({headers:this.#I()},this.#X())}get toolDisplay(){let e=this.getAttribute("data-tool-display");return e===gn.INLINE||e===gn.MINIMAL||e===gn.COMPACT?e:gn.FULL}set toolDisplay(e){this.setAttribute("data-tool-display",e)}connectedCallback(){if(this.#H=this.id!==""?this.id:this.endpoint,this.#pe(this.#Re()),requestAnimationFrame(()=>this.#ue()),this.#e=Ns({...this.#et(),...this.strings}),this.getAttribute("data-theme-toggle")!==null){let e=this.#he(Lu);e!==null&&this.setAttribute("theme",e)}this.#wt(),this.#D.setStrings(this.#e),this.#g.setStrings(this.#e),this.#he(Ou)==="1"&&this.setAttribute("collapsed",""),this.#Pe(),this.#dt(),this.#H!==""&&this.conversationStore instanceof vt&&(this.conversationStore=new vt(this.#H)),this.#ct(),this.#tt(),this.#rt(),this.#f=this.conversationStore.threadId(),queueMicrotask(()=>this.#Qe()),this.#fe(),this.#F=!0}#Qe(){this.#F&&(this.#Ae(),this.#ke())}async reload(){this.#P(),this.#Z(),this.#z(!1),await Promise.all([this.#Ae(),this.#ke(),this.#fe()])}disconnectedCallback(){this.#F=!1,this.#P(),this.#v?.dispose(),this.#ne?.dispose()}#Se(e){let n=this.getAttribute(e);return n!==null&&n!=="false"}#et(){let e=this.getAttribute("data-strings");if(e===null)return{};try{let n=JSON.parse(e);if(typeof n=="object"&&n!==null)return n}catch{}return{}}#tt(){let e=this.getAttribute("data-attachments-url"),n=this.uploadHandler??this.#nt(e);if(n===null)return;let r=this.getAttribute("data-attachment-accept")??"",o=new xi({upload:n,maxBytes:this.#st(),accept:r,strings:this.#e,onChange:()=>this.#Ct(o)});this.#v=o,this.#B.appendChild(this.#v.element),this.#y.accept=r,this.#b.hidden=!1,this.#lt()}#nt(e){return e===null?null:(n,r,o)=>Ja(n,{url:e,headers:this.#I(),...this.#K(),onProgress:r,signal:o})}#rt(){let e=this.getAttribute("data-transcribe-url"),n=this.transcribeHandler??this.#ot(e);n!==null&&(this.#ne=new Pi({transcribe:n,onText:r=>this.#it(r),strings:this.#e}),this.#q.appendChild(this.#ne.element))}#ot(e){return e===null?null:n=>Za(n,{url:e,headers:this.#I(),...this.#K()})}#it(e){let n=this.#l.value.trim();this.#l.value=n===""?e:`${n} ${e}`,this.#De(),this.#l.focus()}#st(){let e=this.getAttribute("data-attachment-max-bytes");if(e===null)return hs;let n=Number.parseInt(e,10);return Number.isFinite(n)&&n>=0?n:hs}#at(){let e=this.#y.files;if(e!==null)for(let n of Array.from(e))this.#v?.add(n);this.#y.value=""}#lt(){this.#c.addEventListener("dragover",e=>{e.preventDefault(),this.#c.classList.add("chat--dragover")}),this.#c.addEventListener("dragleave",()=>{this.#c.classList.remove("chat--dragover")}),this.#c.addEventListener("drop",e=>{e.preventDefault(),this.#c.classList.remove("chat--dragover");let n=e.dataTransfer?.files;if(n!==void 0)for(let r of Array.from(n))this.#v?.add(r)})}#ct(){let e=this.getAttribute("data-threads-url");e!==null&&(this.conversationStore=new Sr(e,()=>this.#I(),this.conversationStore,()=>this.#X()))}async#Ae(){let e=this.getAttribute("data-tools-url");if(e!==null)try{let n=await fetch(e,this.#Te());this.#n=Is(await n.json())}catch{}}setSkills(e){this.#Ee=e,this.#ce()}#dt(){this.#R.enableChips(this.#Se("data-prompt-chips")),this.#R.enableSlash(this.#Se("data-slash-commands")),this.#_e=this.#ut(),this.#ce()}#ut(){let e=this.getAttribute("data-skills");if(e===null)return[];try{return gs(JSON.parse(e))}catch{return[]}}async#ke(){let e=this.getAttribute("data-skills-url");if(e!==null)try{let n=await fetch(e,this.#Te());this.#xe=gs(await n.json()),this.#ce()}catch{}}#ce(){let e=new Map;for(let n of[...this.#xe,...this.#_e,...this.#Ee])e.set(n.name,n);this.#R.setSkills([...e.values()])}#pt(e){if(e.prompt===void 0){this.#E.hidden=!0,this.sendMessage(`/${e.name}`);return}let{text:n,missing:r}=Ul(e.prompt,this.skillContext());if(r.length>0){this.#E.textContent=this.#e.skillNeeds.replace("{title}",e.title).replace("{fields}",r.join(", ")),this.#E.hidden=!1,this.#l.value=n,this.#V(),this.#l.focus(),this.#ht(n);return}if(this.#E.hidden=!0,this.#l.value=n,this.#V(),e.sendImmediately===!1){this.#l.focus();return}this.#ve()}#ht(e){let n=e.indexOf("{");this.#l.setSelectionRange(n,e.indexOf("}",n)+1)}get collapsed(){return this.hasAttribute("collapsed")}set collapsed(e){this.setCollapsed(e)}setCollapsed(e){e?this.setAttribute("collapsed",""):this.removeAttribute("collapsed"),sessionStorage.setItem(this.#Y(Ou),e?"1":"0"),this.#ge(0),this.dispatchEvent(new CustomEvent(ss,{detail:{collapsed:e},bubbles:!0,composed:!0}))}get unread(){return this.#j}toggleCollapsed(){this.setCollapsed(!this.collapsed)}toggleTheme(){let e=this.getAttribute("theme")==="dark"?"light":"dark";this.setAttribute("theme",e),sessionStorage.setItem(this.#Y(Lu),e),this.#Ne()}#de(){switch(this.getAttribute("placement")){case"full":case"page":return"none";case"sidebar":case"side":return"width";default:return"both"}}#Ce(){let e=this.getBoundingClientRect(),n=this.style.getPropertyValue("--ag-ui-width"),r=this.style.getPropertyValue("--ag-ui-height");this.#pe({width:e.width+1,height:e.height+1});let o=this.getBoundingClientRect();return this.#Ie("--ag-ui-width",n),this.#Ie("--ag-ui-height",r),{x:Math.abs(o.left-e.left)<.5?"left":"right",y:Math.abs(o.top-e.top)<.5?"top":"bottom"}}#ue(){if(!this.#F)return;let e=this.#Ce();this.setAttribute("data-resize-anchor",`${e.y}-${e.x}`)}#Ie(e,n){if(n===""){this.style.removeProperty(e);return}this.style.setProperty(e,n)}#pe(e){let n=this.#de();n!=="none"&&(e.width!==void 0&&this.style.setProperty("--ag-ui-width",`${e.width}px`),e.height!==void 0&&n==="both"&&this.style.setProperty("--ag-ui-height",`${e.height}px`))}#ft(){let e=this.#de();e!=="both"&&this.style.removeProperty("--ag-ui-height"),e==="none"&&this.style.removeProperty("--ag-ui-width")}#mt(e){let n={...this.#Re(),...e};sessionStorage.setItem(this.#Y(Mu),JSON.stringify(n))}#Re(){let e=this.#he(Mu);if(e===null)return{};try{let n=JSON.parse(e);return typeof n=="object"&&n!==null?n:{}}catch{return{}}}#Y(e){return this.#H===""?e:`${e}:${this.#H}`}#he(e){let n=sessionStorage.getItem(this.#Y(e));return n!==null||this.#H===""?n:sessionStorage.getItem(e)}#Ne(){let e=this.getAttribute("theme")==="dark";this.#A.textContent=e?"\u2600\uFE0F":"\u{1F319}"}openThreads(){this.#g.close(),this.#J(),this.#D.open()}openCheckpoints(){this.#D.close(),this.#We(),this.#g.open()}closeCheckpoints(){this.#g.close()}toggleCheckpoints(){if(this.#g.open_){this.#g.close();return}this.openCheckpoints()}newChat(){this.#P(),this.conversationStore.isUnsent?.(this.#f)===!0&&this.conversationStore.clear(this.#f),this.#Z(),this.#f=zi(this.conversationStore),this.#z(!1),this.#ge(0)}#Z(){this.#M=null,this.#T=null,this.#C=null,this.#L=null,this.#S(),this.#o.clear(),this.#d.clear(),this.#i.clear(),this.#a.clear(),this.#se=[],this.#v?.clear(),this.#s.replaceChildren(this.#O),this.#m()}async#gt(e){e!==this.#f&&(this.#P(),this.#Z(),this.conversationStore.setActiveThread(e),this.#f=e,this.#z(!1),await this.#fe())}#vt(e){let n=e===this.#f;n&&this.#P(),this.conversationStore.clear(e),n&&(this.#Z(),this.#f=this.conversationStore.threadId(),this.#z(!1)),this.#J()}async#J(){this.#D.setThreads(await this.conversationStore.listThreads(),this.#f)}async#fe(){this.#ie+=1;let e=this.#ie,n=await this.conversationStore.loadMessages(this.#f);if(e!==this.#ie)return;if(n!==null){this.#se=n;for(let o of n)this.#xt(o)}let r=this.conversationStore.loadCheckpoint(this.#f);if(r!==null){await this.#Et(r);return}this.#yt(n)}#Oe(){return this.#re=window.location.href,this.getContext()}#bt(){return this.#re!==null&&this.#re!==window.location.href}#yt(e){let n=e?.at(-1);n===void 0||n.role!==qe.USER||this.#ee("\u26A0",this.#e.runInterrupted,"interrupted")}#xt(e){let n=typeof e.content=="string"?e.content:"";if(e.role===qe.USER){let r=Wa(e);if(n!==""||r.length>0){let o=this.appendMessage(qe.USER,n);r.length>0&&o.appendChild(Ls(r))}return}if(e.role===qe.ASSISTANT){n!==""&&this.appendMessage(qe.ASSISTANT,n).classList.add("message--restored");for(let r of Wb(e.toolCalls)){let o={id:r.id,name:r.function.name,args:this.#_t(r.function.arguments)};if(this.#Ve(o))continue;this.#i.set(o.id,this.#ye(o).element);let i=this.#le(o.name)?.render;i!==void 0&&this.#Be(i,o)}return}if(e.role==="activity"){let r=e;r.activityType===Kn&&this.#r&&this.#be(e.id,r.content);return}if(e.role==="tool"){let r=this.#o.get(e.toolCallId);r!==void 0&&r.settle(ee.DONE,e.content)}}#_t(e){if(typeof e!="string")return{};try{let n=JSON.parse(e);if(typeof n=="object"&&n!==null)return n}catch{}return{}}#Me(e){this.getAttribute("data-text-animation")==="word"&&Au(e)}async#Et(e){this.conversationStore.saveCheckpoint(this.#f,null);let n=this.#Ue();n.addToolResult(e.toolCallId,JSON.stringify(this.navigationResult(e))),await n.resume()}appendMessage(e,n){let r=document.createElement("div");return r.className=`message message--${e}`,r.setAttribute("part",`message message-${e}`),e===qe.ASSISTANT?(r.innerHTML=Ni(n,{allowImages:this.allowImages}),Ms(r,this.#e),this.#_().appendChild(r)):(this.#C=null,r.textContent=n,this.#s.appendChild(r)),this.#m(),this.#s.scrollTop=this.#s.scrollHeight,r}#_(){if(this.#C===null){let e=document.createElement("div");e.className="answer",e.setAttribute("part","answer"),this.#C=e,this.#s.appendChild(e),this.#m()}return this.#C}#wt(){let e=document.createElement("style");e.textContent=Cu,this.#c.className="chat",this.#c.setAttribute("part","panel");let n=document.createElement("div");n.className="header",n.setAttribute("part","header");let r=this.#N;r.className="header-title",r.setAttribute("part","title"),r.textContent=this.getAttribute("title-text")??this.#e.title,(this.querySelector('[slot="icon"]')!==null||this.getAttribute("data-icon-url")!==null)&&n.append(this.#Le("icon","icon",null));let o=document.createElement("slot");o.name="header-actions";let i=document.createElement("div");i.className="header-controls",i.setAttribute("part","header-controls");let s=this.#Q("history",this.#e.chatHistory,"\u2630");s.addEventListener("click",()=>this.openThreads());let a=this.#Q("checkpoints",this.#e.checkpoints,"\u21BA");a.addEventListener("click",()=>this.toggleCheckpoints());let l=this.#Q("new",this.#e.newChat,"\u271A");l.addEventListener("click",()=>this.newChat());let c=this.#Q("collapse",this.#e.collapse,"\u2014");c.addEventListener("click",()=>this.toggleCollapsed()),this.#ae()!==null?i.append(s,a,l):i.append(s,l),this.getAttribute("data-theme-toggle")!==null&&(this.#A.type="button",this.#A.className="header-btn header-btn--theme",this.#A.setAttribute("part","header-button theme-toggle"),this.#A.title=this.#e.toggleTheme,this.#A.setAttribute("aria-label",this.#e.toggleTheme),this.#A.addEventListener("click",()=>this.toggleTheme()),this.#Ne(),i.append(this.#A)),i.append(c),n.append(r,o,i),this.#s.className="messages",this.#s.setAttribute("part","messages"),this.#s.setAttribute("role","log"),this.#s.setAttribute("aria-live","polite"),this.#s.setAttribute("aria-label",this.#e.conversation),this.#O.className="empty",this.#O.setAttribute("part","empty");let p=document.createElement("slot");p.name="empty",this.#O.append(p),this.#s.append(this.#O);let m=document.createElement("div");m.className="input-row",m.setAttribute("part","composer");let y=document.createElement("div");y.className="composer",y.setAttribute("part","composer-surface");let f=document.createElement("div");f.className="composer-tools",f.setAttribute("part","composer-tools"),this.#l.className="input",this.#l.setAttribute("part","input"),this.#l.setAttribute("aria-label",this.#e.message),this.#l.rows=1,this.#l.placeholder=this.#e.inputPlaceholder,this.#l.addEventListener("keydown",g=>this.#kt(g)),this.#l.addEventListener("input",()=>this.#De()),this.#h.className="send",this.#h.type="button",this.#h.setAttribute("part","send"),this.#h.append(this.#me("icon-send","send-send",Cl),this.#me("icon-stop","send-stop",Il)),this.#h.title=this.#e.send,this.#h.setAttribute("aria-label",this.#e.send),this.#h.dataset.state="idle",this.#h.addEventListener("click",()=>{if(this.#$){this.#P();return}this.#ve()}),this.#E.className="skill-hint",this.#E.setAttribute("part","skill-hint"),this.#E.hidden=!0,this.#b.className="attach-btn",this.#b.type="button",this.#b.setAttribute("part","attach-button"),this.#b.append(this.#me("icon-attach","attach-glyph",Rl)),this.#b.title=this.#e.attachFiles,this.#b.setAttribute("aria-label",this.#e.attachFiles),this.#b.hidden=!0,this.#b.addEventListener("click",()=>this.#y.click()),this.#y.className="attach-input",this.#y.type="file",this.#y.multiple=!0,this.#y.hidden=!0,this.#y.addEventListener("change",()=>this.#at()),this.#B.className="attachment-slot",this.#q.className="voice-slot";let h=document.createElement("slot");h.name="footer",f.append(this.#b,this.#q,this.#h),y.append(this.#l,f),m.append(y,this.#y),this.#c.append(n,this.#s,this.#R.palette,this.#R.chips,this.#E,this.#B,m,h,this.#D.element,this.#g.element),this.#c.addEventListener("pointerdown",g=>{if(!this.#g.open_)return;let x=g.composedPath();x.includes(this.#g.element)||x.includes(a)||this.#g.close()}),this.#x.className="launcher",this.#x.type="button",this.#x.setAttribute("part","launcher"),this.#x.setAttribute("aria-label",this.#e.expand),this.#k.className="launcher-badge",this.#k.setAttribute("part","launcher-badge"),this.#k.setAttribute("aria-hidden","true"),this.#k.hidden=!0,this.#x.append(this.#Le("launcher","launcher-icon",Ol,this.#Tt()),this.#k),this.#x.addEventListener("click",()=>this.setCollapsed(!1)),this.#c.append(Tu({axis:()=>this.#de(),anchor:()=>this.#Ce(),rect:()=>this.getBoundingClientRect(),apply:g=>this.#pe(g),commit:g=>{this.#mt(g),this.#ue()},label:this.#e.resizePanel})),this.#u.append(e,this.#c,this.#x)}#Q(e,n,r){let o=document.createElement("button");o.type="button",o.className=`header-btn header-btn--${e}`,o.setAttribute("part",`header-button ${e}-button`),o.title=n,o.setAttribute("aria-label",n);let i=document.createElement("slot");return i.name=`icon-${e}`,i.append(document.createTextNode(r)),o.append(i),o}#me(e,n,r){let o=document.createElement("slot");return o.name=e,o.className=n,o.innerHTML=r,o}#Tt(){return this.getAttribute("data-launcher-icon-url")??this.getAttribute("data-icon-url")}#Le(e,n,r,o=this.getAttribute("data-icon-url")){let i=document.createElement("span");i.className="icon-holder",i.setAttribute("part",n);let s=document.createElement("slot");if(s.name=e,o!==null){let a=document.createElement("img");a.className="icon-img",a.src=o,a.alt="",s.append(a)}else r!==null&&(s.innerHTML=r);return i.append(s),i}#Pe(){this.#x.setAttribute("aria-expanded",String(!this.collapsed));let e=this.#j;this.#k.textContent=e>9?"9+":String(e),this.#k.hidden=e===0||!this.#St();let n=this.#k.hidden?this.#e.expand:this.#e.expandUnread.replace("{count}",String(e));this.#x.setAttribute("aria-label",n),this.#x.title=n}#St(){return this.getAttribute("data-unread-badge")!=="false"}#ge(e){this.#j=e,this.#Pe(),this.dispatchEvent(new CustomEvent(as,{detail:{unread:e},bubbles:!0,composed:!0}))}#At(){this.collapsed&&this.#ge(this.#j+1)}#m(){this.#O.hidden=this.#s.childElementCount>1}#De(){this.#R.onInput(this.#l.value),this.#E.hidden=!0,this.#V()}#kt(e){if(this.#R.onKeydown(e)){e.preventDefault();return}if(e.key==="Escape"&&this.#$){e.preventDefault(),this.#P();return}e.key==="Enter"&&!e.shiftKey&&(e.preventDefault(),this.#ve())}#P(){this.#w?.abort(),this.#M?.cancel()}#z(e){this.#$=e;let n=e?this.#e.stop:this.#e.send;this.#h.title=n,this.#h.setAttribute("aria-label",n),this.#h.dataset.state=e?"running":"idle"}#V(){this.#l.style.height="auto",this.#l.style.height=`${this.#l.scrollHeight}px`}async#ve(){if(this.#$)return;let e=this.#l.value.trim(),n=this.#v?.readyRefs()??[];e===""&&n.length===0||(this.#l.value="",this.#V(),this.#v?.hasPending()===!0&&this.#ee("\u{1F4CE}",this.#e.attachmentsStillUploading.replace("{n}",String(this.#v.pendingCount())),"attachment-pending"),this.#v?.clearReady(),await this.sendMessage(e,n))}async sendMessage(e,n=[]){if(this.#$||e===""&&n.length===0)return;let r=this.appendMessage(qe.USER,e);n.length>0&&r.appendChild(Ls(n)),this.dispatchEvent(new CustomEvent(is,{detail:{content:e,attachments:n},bubbles:!0,composed:!0})),await this.#It(e,n)}attachFile(e){return this.#v===null?!1:(this.#v.add(e),!0)}#Ct(e){this.dispatchEvent(new CustomEvent(cs,{detail:{attachments:e.readyRefs(),pending:e.pendingCount()},bubbles:!0,composed:!0}))}async#It(e,n){this.endpoint!==""&&await this.#Ue().send(e,n)}#Ue(){if(this.#M===null){let e=this.agentFactory({endpoint:this.endpoint,headers:this.#I(),getHeaders:()=>this.#I(),...this.#K(),threadId:this.#f,initialMessages:this.#se,initialState:this.#U});this.#M=new Gn({agent:e,handlers:this.#Ge(),getTools:()=>this.getTools(),getContext:()=>this.#Oe(),executeTool:n=>this.#He(n),resolveInterrupts:n=>this.#ze(n),onPersist:n=>this.conversationStore.saveMessages(this.#f,n),onStateChanged:n=>this.#Rt(n),connectionLostMessage:this.#e.connectionLost})}return this.#M}#Rt(e){this.#U={...e},this.dispatchEvent(new CustomEvent(ls,{detail:{state:this.#U},bubbles:!0,composed:!0}))}async#Nt(e,n){return this.autoConfirm?!1:this.confirmPredicate!==null?await this.confirmPredicate(e.name,e.args)===!0:vs(n.parameters)}async#He(e){if(Pu(e)!==null)return null;let n=this.#ye(e);this.#o.delete(e.id),this.#i.set(e.id,n.element);let r=this.#le(e.name);if(r===null)return this.#d.has(e.id)||n.settle(ee.DONE,this.#e.noResult),null;if(this.getPageMap!==null&&e.name!==us&&!$r(r.parameters)&&this.#bt()){let i=this.#e.pageMoved;return n.settle(ee.ERROR,i),this.#G(),{content:`Error: ${i}`,error:i}}if(await this.#Nt(e,r)){let i={toolName:e.name,args:e.args},s=r.parameters[Fr];typeof s=="string"&&(i.message=s),this.#w=new AbortController;let a=Ta(this.#_(),i,{signal:this.#w.signal,strings:this.#e});this.#m(),this.#s.scrollTop=this.#s.scrollHeight;let l=await a;if(this.#w=null,n.recordDecision(l?"approved":"declined"),!l){let c=this.#e.declinedAction;return n.settle(ee.DECLINED,c),this.#G(),{content:c}}}let o=$r(r.parameters)&&this.navigate===null;o&&this.conversationStore.saveCheckpoint(this.#f,{toolCallId:e.id});try{let i=await r.handler(e.args,e.id);if(r.render!==void 0&&this.#Be(r.render,e),o)return n.settle(ee.DONE,this.#e.navigating),{content:"",halt:!0};let s=JSON.stringify(i??null);return n.settle(ee.DONE,s),this.#G(),{content:s}}catch(i){o&&this.conversationStore.saveCheckpoint(this.#f,null);let s=i instanceof Error?i.message:String(i);return n.settle(ee.ERROR,s),this.#G(),{content:`Error: ${s}`,error:s}}}async#ze(e){this.#w=new AbortController,this.#S();let n=this.#w.signal,r=await Promise.all(e.map(async i=>{let s=i.toolCallId!==void 0?this.#o.get(i.toolCallId):void 0,a={},l=qb(i)??i.message;l!==void 0&&(a.message=l);let c=s?.element.getAttribute("data-tool-name");c!=null&&(a.toolName=c),s?.mark(ee.DEFERRED);let p=this.approvalRenderer!==null?await this.approvalRenderer(a,{signal:n}):await Os(s?.approvalSlot??this.#_(),a,{signal:n,strings:this.#e});return s?.recordDecision(p?"approved":"declined"),p?s?.mark(ee.PENDING):s?.settle(ee.DECLINED,this.#e.declinedAction),{id:i.id,approved:p}}));this.#m(),this.#s.scrollTop=this.#s.scrollHeight,this.#w=null;let o={};for(let{id:i,approved:s}of r)o[i]=s?{status:"resolved",payload:{approved:!0}}:{status:"cancelled"};return o}#Ge(){return{onRunStart:()=>{this.#z(!0),this.#_(),this.#G()},onReasoningStart:()=>{this.#S(),this.#Fe()},onReasoningDelta:e=>{this.#Fe().stream(e)},onReasoningEnd:()=>{},onTextDelta:e=>{this.#S(),this.#L?.collapse(),this.#$e(e),this.#oe+=1},onTextEnd:e=>{let n=this.#$e(e);this.#oe<=1&&this.#Me(n),Ms(n,this.#e),this.#T=null,this.#At()},onToolCall:e=>{this.#S(),!this.#Ve(e)&&(this.#p.push({id:e.id,name:e.name}),this.#ye(e))},onActivity:(e,n,r)=>{if(e===Kn){this.#r&&this.#be(r,n);return}if(e!==fs)return;let o=Kb(n);o!==null&&this.#ee("\u{1F5DC}",this.#e.historyCompacted.replace("{count}",String(o)),"compaction")},onToolResult:(e,n)=>{let r=this.#o.get(e);r!==void 0&&(r.settle(ee.DONE,n),this.#d.add(e),this.#G())},onActivityChanged:(e,n,r)=>{n===Kn&&this.#r&&this.#be(e,r)},onRunEnd:()=>{this.#S(),this.#T=null},onError:e=>{this.#S(),this.#Me(this.appendMessage(qe.ASSISTANT,`\u26A0\uFE0F ${e}`)),this.#T=null},onCancelled:()=>{this.#S(),this.#Mt(),this.#T=null},onSettled:()=>{this.#S(),this.#z(!1),this.#T=null;for(let e of this.#o.values())e.settled||e.settle(ee.DONE,this.#e.noResult);this.#C!==null&&this.#C.childElementCount===0&&(this.#C.remove(),this.#m()),this.#C=null,this.#L=null,this.#Ot()}}}#Ot(){let e=this.#p.map(({id:n,name:r})=>({name:r,side:this.#d.has(n)?"server":"client"}));this.#p=[],this.dispatchEvent(new CustomEvent(ds,{detail:{tools:e},bubbles:!0,composed:!0}))}#Mt(){let e=document.createElement("div");e.className="stopped-note",e.setAttribute("part","stopped"),e.setAttribute("role","status"),e.textContent=this.#e.stopped,this.#_().appendChild(e),this.#m(),this.#s.scrollTop=this.#s.scrollHeight}#G(){if(this.#W!==null)return;let e=document.createElement("div");e.className="pending",e.setAttribute("part","pending"),e.setAttribute("role","status"),e.setAttribute("aria-label",this.#e.thinking);for(let n=0;n<3;n+=1){let r=document.createElement("span");r.className="pending-dot",e.appendChild(r)}this.#W=e,this.#_().appendChild(e),this.#m(),this.#s.scrollTop=this.#s.scrollHeight}#S(){this.#W?.remove(),this.#W=null}#Fe(){if(this.#L===null){this.#L=new Mi(this.#e);let e=this.#_();e.insertBefore(this.#L.element,e.firstChild),this.#m(),this.#s.scrollTop=this.#s.scrollHeight}return this.#L}#$e(e){return this.#T===null&&(this.#T=this.appendMessage(qe.ASSISTANT,""),this.#oe=0),this.#T.innerHTML=Ni(e,{allowImages:this.allowImages}),this.#s.scrollTop=this.#s.scrollHeight,this.#T}#Ve(e){let n=Pu(e);return n===null?!1:(this.#ee("\u2728",this.#e.usingSkill.replace("{name}",n),"skill"),!0)}#ee(e,n,r){this.#_().appendChild(ku(e,n,r)),this.#m(),this.#s.scrollTop=this.#s.scrollHeight}enableCharts(e=["tool","activity"]){let n=!this.#r&&!this.#t.has(wi);e.includes("activity")&&(this.#r=!0),e.includes("tool")&&this.registerTool(Dd()),n&&this.isConnected&&this.reload()}#Be(e,n){let r;try{r=e(n.args)}catch(o){console.warn(`ag-ui-chat: render failed for tool ${n.name}`,o);return}r!==null&&(this.#i.get(n.id)?.after(r),this.#je())}#be(e,n){let r=Ln(n),o=r===null?null:fr(r);if(o===null){this.#a.get(e)?.remove(),this.#a.delete(e);return}let i=this.#a.get(e);i===void 0?this.#_().appendChild(o):i.replaceWith(o),this.#a.set(e,o),this.#je()}#je(){this.#m(),this.#s.scrollTop=this.#s.scrollHeight}#ye(e){let n=this.#o.get(e.id);if(n!==void 0)return n;let r=this.#le(e.name)?.parameters[Pe],o=typeof r=="string"?r:this.toolSummaries[e.name]??this.#n[e.name]??Sa(e.name),i=new wr(e.name,e.args,o,this.#e);return this.#o.set(e.id,i),this.#_().appendChild(i.element),this.#m(),this.#s.scrollTop=this.#s.scrollHeight,i}};function qb(t){let e=t.metadata?.[Fr];return typeof e=="string"&&e.trim()!==""?e:void 0}function Wb(t){return Array.isArray(t)?t.filter(Xb):[]}function Xb(t){if(typeof t!="object"||t===null)return!1;let e=t;return typeof e.id=="string"&&typeof e.function?.name=="string"}function Pu(t){if(t.name!==ms)return null;let e=t.args?.id;return typeof e=="string"&&e!==""?e:null}function Kb(t){let e=t?.removed;return typeof e=="number"?e:null}function Yb(){customElements.get(Gr)===void 0&&customElements.define(Gr,kr)}async function Zb(t,e,n={}){await dt(t),await Es(t,{...n,flashMs:n.flashMs??0}),await xs(t,e,n)}async function Jb(t,e={}){await dt(t),await _s(t,e)}async function Qb(t,e={}){await dt(t),await ws(t,e)}async function ey(t,e,n={}){await dt(t),await Ts(t,e,n)}async function ty(t,e,n={}){await dt(t),await Ss(t,e,n)}function ny(t,e){t instanceof HTMLInputElement&&t.type==="checkbox"?Zn(t,!!e):Mt(t,String(e)),t.dispatchEvent(new Event("input",{bubbles:!0})),t.dispatchEvent(new Event("change",{bubbles:!0}))}var ry="0.27.0";export{cs as ATTACHMENT_EVENT,kr as AgUiChat,Gn as AgUiClient,Kn as CHART_ACTIVITY_TYPE,wi as CHART_TOOL_NAME,fs as COMPACTION_ACTIVITY_TYPE,mr as CheckpointMenu,Yn as ClientToolRegistry,Di as ConnectionLostError,le as DEFAULT_UI_STRINGS,Gr as ELEMENT_TAG,ms as LOAD_CAPABILITY_TOOL,ps as MAX_TOOL_ROUNDS,qe as MESSAGE_ROLE,As as PAGE_ACTIONS,ds as RUN_FINISHED_EVENT,Sr as RemoteConversationStore,Ar as RunIndex,ls as STATE_EVENT,is as SUBMIT_EVENT,vt as SessionStorageStore,ss as TOGGLE_EVENT,ee as TOOL_CALL_STATUS,gn as TOOL_DISPLAY,wr as ToolCallCard,as as UNREAD_EVENT,ry as VERSION,Fr as X_CONFIRM_KEY,Wn as X_DESTRUCTIVE_KEY,Xn as X_NAVIGATES_KEY,Pe as X_SUMMARY_KEY,Ln as chartSpecFrom,Jb as clickElement,Ya as createHttpAgent,ks as createPageActionTools,Cs as createPageMapContext,qr as createPageStateTools,Rs as createRouteTools,Cp as createStateHookTools,Yb as defineAgUiChat,Zb as fillField,wp as flash,Es as focusWithFlash,_s as highlightThenClick,vs as isDestructive,$r as isNavigates,Ns as mergeUiStrings,Wa as messageAttachments,Is as parseToolCatalog,Br as prefersReducedMotion,Qb as pressButton,ws as pressThenClick,Sa as prettifyToolName,fr as renderChart,Ni as renderMarkdown,Os as requestApproval,Ta as requestConfirmation,Aa as requestQuestion,dt as scrollIntoCenterView,ey as selectControl,Ts as selectOption,ny as setControlValue,Zn as setNativeChecked,Mt as setNativeValue,ty as toggleCheckbox,Ss as toggleControl,Za as transcribeAudio,xs as typeInto,Ja as uploadAttachment};
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
  (*! @license DOMPurify 3.4.13 | (c) Cure53 and other contributors | Released under the Apache license 2.0 and Mozilla Public License 2.0 | github.com/cure53/DOMPurify/blob/3.4.13/LICENSE *)
*/
