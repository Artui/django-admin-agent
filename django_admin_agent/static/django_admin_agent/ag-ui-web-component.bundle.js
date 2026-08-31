var bh=Object.defineProperty;var Is=(t,e)=>{for(var n in e)bh(t,n,{get:e[n],enumerable:!0})};var ro="ag-ui-chat",Rs="ag-ui-submit",Cs="ag-ui-toggle",Ns="ag-ui-unread",Os="ag-ui-state",Ms="ag-ui-attachments",Ls="ag-ui-run-finished",Ps="ag-ui-custom",Ds="ag-ui-invalidate",Us="ag-ui-feedback",Hs="suggestions",Fs="ag_ui.invalidate",cc="ag_ui.subagent",An={STARTED:"started",TOOL_CALL:"tool_call",TOOL_RESULT:"tool_result",FINISHED:"finished",FAILED:"failed"},We={USER:"user",ASSISTANT:"assistant"},ar="x-destructive",oo="x-confirm",Ge="x-summary",lr="x-navigates",Gs="read_page",kn=10,zt={COPY:"copy",RETRY:"retry",FEEDBACK:"feedback"},ae={PENDING:"pending",DEFERRED:"deferred",DONE:"done",ERROR:"error",DECLINED:"declined"},ze={UPLOADING:"uploading",READY:"ready",ERROR:"error"},zs=10*1024*1024,In={INLINE:"inline",MINIMAL:"minimal",COMPACT:"compact",FULL:"full"},$s="compaction",Bs="load_capability",uc='<svg class="glyph" viewBox="0 0 24 24" aria-hidden="true"><path d="M12 19.5V5m-6.5 6.5L12 5l6.5 6.5"/></svg>',dc='<svg class="glyph glyph--solid" viewBox="0 0 24 24" aria-hidden="true"><rect x="7" y="7" width="10" height="10" rx="2.5"/></svg>',pc='<svg class="glyph" viewBox="0 0 24 24" aria-hidden="true"><path d="M17 8.5V15a5 5 0 0 1-10 0V7a3 3 0 0 1 6 0v7.5a1 1 0 0 1-2 0V8.5"/></svg>',hc='<svg class="glyph" viewBox="0 0 24 24" aria-hidden="true"><path d="M12 4a3 3 0 0 1 3 3v5a3 3 0 0 1-6 0V7a3 3 0 0 1 3-3z"/><path d="M5 11v1a7 7 0 0 0 14 0v-1"/><path d="M12 19v3"/></svg>',fc='<svg class="glyph" viewBox="0 0 24 24" aria-hidden="true"><path d="M4 5.5A2.5 2.5 0 0 1 6.5 3h11A2.5 2.5 0 0 1 20 5.5v8a2.5 2.5 0 0 1-2.5 2.5H9l-5 4z"/></svg>',mc='<svg class="glyph" viewBox="0 0 24 24" aria-hidden="true"><path d="M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8z"/><path d="M14 3v5h5"/></svg>',gc='<svg class="glyph" viewBox="0 0 24 24" aria-hidden="true"><rect x="3.5" y="4.5" width="17" height="15" rx="2.5"/><circle cx="9" cy="10" r="1.5"/><path d="M4.5 17.5 9 13.5l3.5 3 3-2.5 4.5 4"/></svg>',bc='<svg class="glyph" viewBox="0 0 24 24" aria-hidden="true"><path d="M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8z"/><path d="M14 3v5h5"/><rect class="glyph--solid" x="7.5" y="13.5" width="9" height="4.5" rx="1"/></svg>',vc='<svg class="glyph" viewBox="0 0 24 24" aria-hidden="true"><path d="M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8z"/><path d="M14 3v5h5"/><path d="M8.5 13.5h7M8.5 17h4.5"/></svg>',io="chart",yc=150;var _e=[];for(let t=0;t<256;++t)_e.push((t+256).toString(16).slice(1));function xc(t,e=0){return(_e[t[e+0]]+_e[t[e+1]]+_e[t[e+2]]+_e[t[e+3]]+"-"+_e[t[e+4]]+_e[t[e+5]]+"-"+_e[t[e+6]]+_e[t[e+7]]+"-"+_e[t[e+8]]+_e[t[e+9]]+"-"+_e[t[e+10]]+_e[t[e+11]]+_e[t[e+12]]+_e[t[e+13]]+_e[t[e+14]]+_e[t[e+15]]).toLowerCase()}var Vs,vh=new Uint8Array(16);function js(){if(!Vs){if(typeof crypto>"u"||!crypto.getRandomValues)throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");Vs=crypto.getRandomValues.bind(crypto)}return Vs(vh)}var yh=typeof crypto<"u"&&crypto.randomUUID&&crypto.randomUUID.bind(crypto),qs={randomUUID:yh};function xh(t,e,n){if(qs.randomUUID&&!e&&!t)return qs.randomUUID();t=t||{};let r=t.random??t.rng?.()??js();if(r.length<16)throw new Error("Random bytes length must be >= 16");if(r[6]=r[6]&15|64,r[8]=r[8]&63|128,e){if(n=n||0,n<0||n+16>e.length)throw new RangeError(`UUID byte range ${n}:${n+15} is out of buffer bounds`);for(let o=0;o<16;++o)e[n+o]=r[o];return e}return xc(r)}var Rt=xh;var u={};Is(u,{BRAND:()=>qh,DIRTY:()=>$t,EMPTY_PATH:()=>_h,INVALID:()=>z,NEVER:()=>Nf,OK:()=>Ne,ParseStatus:()=>Se,Schema:()=>W,ZodAny:()=>Ot,ZodArray:()=>Et,ZodBigInt:()=>Vt,ZodBoolean:()=>jt,ZodBranded:()=>ur,ZodCatch:()=>nn,ZodDate:()=>qt,ZodDefault:()=>tn,ZodDiscriminatedUnion:()=>lo,ZodEffects:()=>Ke,ZodEnum:()=>Jt,ZodError:()=>Ue,ZodFirstPartyTypeKind:()=>$,ZodFunction:()=>uo,ZodIntersection:()=>Kt,ZodIssueCode:()=>k,ZodLazy:()=>Zt,ZodLiteral:()=>Qt,ZodMap:()=>Ln,ZodNaN:()=>Dn,ZodNativeEnum:()=>en,ZodNever:()=>et,ZodNull:()=>Xt,ZodNullable:()=>pt,ZodNumber:()=>Bt,ZodObject:()=>He,ZodOptional:()=>Xe,ZodParsedType:()=>O,ZodPipeline:()=>dr,ZodPromise:()=>Mt,ZodReadonly:()=>rn,ZodRecord:()=>co,ZodSchema:()=>W,ZodSet:()=>Pn,ZodString:()=>Nt,ZodSymbol:()=>On,ZodTransformer:()=>Ke,ZodTuple:()=>dt,ZodType:()=>W,ZodUndefined:()=>Wt,ZodUnion:()=>Yt,ZodUnknown:()=>xt,ZodVoid:()=>Mn,addIssueToContext:()=>N,any:()=>tf,array:()=>sf,bigint:()=>Kh,boolean:()=>Nc,coerce:()=>Cf,custom:()=>Ic,date:()=>Zh,datetimeRegex:()=>Ac,defaultErrorMap:()=>vt,discriminatedUnion:()=>uf,effect:()=>wf,enum:()=>yf,function:()=>gf,getErrorMap:()=>Rn,getParsedType:()=>ut,instanceof:()=>Xh,intersection:()=>df,isAborted:()=>so,isAsync:()=>Cn,isDirty:()=>ao,isValid:()=>Ct,late:()=>Wh,lazy:()=>bf,literal:()=>vf,makeIssue:()=>cr,map:()=>ff,nan:()=>Yh,nativeEnum:()=>xf,never:()=>rf,null:()=>ef,nullable:()=>_f,number:()=>Cc,object:()=>af,objectUtil:()=>Ws,oboolean:()=>Rf,onumber:()=>If,optional:()=>Tf,ostring:()=>kf,pipeline:()=>Af,preprocess:()=>Sf,promise:()=>Ef,quotelessJson:()=>Eh,record:()=>hf,set:()=>mf,setErrorMap:()=>Th,strictObject:()=>lf,string:()=>Rc,symbol:()=>Qh,transformer:()=>wf,tuple:()=>pf,undefined:()=>Jh,union:()=>cf,unknown:()=>nf,util:()=>Y,void:()=>of});var Y;(function(t){t.assertEqual=o=>{};function e(o){}t.assertIs=e;function n(o){throw new Error}t.assertNever=n,t.arrayToEnum=o=>{let i={};for(let s of o)i[s]=s;return i},t.getValidEnumValues=o=>{let i=t.objectKeys(o).filter(a=>typeof o[o[a]]!="number"),s={};for(let a of i)s[a]=o[a];return t.objectValues(s)},t.objectValues=o=>t.objectKeys(o).map(function(i){return o[i]}),t.objectKeys=typeof Object.keys=="function"?o=>Object.keys(o):o=>{let i=[];for(let s in o)Object.prototype.hasOwnProperty.call(o,s)&&i.push(s);return i},t.find=(o,i)=>{for(let s of o)if(i(s))return s},t.isInteger=typeof Number.isInteger=="function"?o=>Number.isInteger(o):o=>typeof o=="number"&&Number.isFinite(o)&&Math.floor(o)===o;function r(o,i=" | "){return o.map(s=>typeof s=="string"?`'${s}'`:s).join(i)}t.joinValues=r,t.jsonStringifyReplacer=(o,i)=>typeof i=="bigint"?i.toString():i})(Y||(Y={}));var Ws;(function(t){t.mergeShapes=(e,n)=>({...e,...n})})(Ws||(Ws={}));var O=Y.arrayToEnum(["string","nan","number","integer","float","boolean","date","bigint","symbol","function","undefined","null","array","object","unknown","promise","void","never","map","set"]),ut=t=>{switch(typeof t){case"undefined":return O.undefined;case"string":return O.string;case"number":return Number.isNaN(t)?O.nan:O.number;case"boolean":return O.boolean;case"function":return O.function;case"bigint":return O.bigint;case"symbol":return O.symbol;case"object":return Array.isArray(t)?O.array:t===null?O.null:t.then&&typeof t.then=="function"&&t.catch&&typeof t.catch=="function"?O.promise:typeof Map<"u"&&t instanceof Map?O.map:typeof Set<"u"&&t instanceof Set?O.set:typeof Date<"u"&&t instanceof Date?O.date:O.object;default:return O.unknown}};var k=Y.arrayToEnum(["invalid_type","invalid_literal","custom","invalid_union","invalid_union_discriminator","invalid_enum_value","unrecognized_keys","invalid_arguments","invalid_return_type","invalid_date","invalid_string","too_small","too_big","invalid_intersection_types","not_multiple_of","not_finite"]),Eh=t=>JSON.stringify(t,null,2).replace(/"([^"]+)":/g,"$1:"),Ue=class t extends Error{get errors(){return this.issues}constructor(e){super(),this.issues=[],this.addIssue=r=>{this.issues=[...this.issues,r]},this.addIssues=(r=[])=>{this.issues=[...this.issues,...r]};let n=new.target.prototype;Object.setPrototypeOf?Object.setPrototypeOf(this,n):this.__proto__=n,this.name="ZodError",this.issues=e}format(e){let n=e||function(i){return i.message},r={_errors:[]},o=i=>{for(let s of i.issues)if(s.code==="invalid_union")s.unionErrors.map(o);else if(s.code==="invalid_return_type")o(s.returnTypeError);else if(s.code==="invalid_arguments")o(s.argumentsError);else if(s.path.length===0)r._errors.push(n(s));else{let a=r,l=0;for(;l<s.path.length;){let c=s.path[l];l===s.path.length-1?(a[c]=a[c]||{_errors:[]},a[c]._errors.push(n(s))):a[c]=a[c]||{_errors:[]},a=a[c],l++}}};return o(this),r}static assert(e){if(!(e instanceof t))throw new Error(`Not a ZodError: ${e}`)}toString(){return this.message}get message(){return JSON.stringify(this.issues,Y.jsonStringifyReplacer,2)}get isEmpty(){return this.issues.length===0}flatten(e=n=>n.message){let n={},r=[];for(let o of this.issues)if(o.path.length>0){let i=o.path[0];n[i]=n[i]||[],n[i].push(e(o))}else r.push(e(o));return{formErrors:r,fieldErrors:n}}get formErrors(){return this.flatten()}};Ue.create=t=>new Ue(t);var wh=(t,e)=>{let n;switch(t.code){case k.invalid_type:t.received===O.undefined?n="Required":n=`Expected ${t.expected}, received ${t.received}`;break;case k.invalid_literal:n=`Invalid literal value, expected ${JSON.stringify(t.expected,Y.jsonStringifyReplacer)}`;break;case k.unrecognized_keys:n=`Unrecognized key(s) in object: ${Y.joinValues(t.keys,", ")}`;break;case k.invalid_union:n="Invalid input";break;case k.invalid_union_discriminator:n=`Invalid discriminator value. Expected ${Y.joinValues(t.options)}`;break;case k.invalid_enum_value:n=`Invalid enum value. Expected ${Y.joinValues(t.options)}, received '${t.received}'`;break;case k.invalid_arguments:n="Invalid function arguments";break;case k.invalid_return_type:n="Invalid function return type";break;case k.invalid_date:n="Invalid date";break;case k.invalid_string:typeof t.validation=="object"?"includes"in t.validation?(n=`Invalid input: must include "${t.validation.includes}"`,typeof t.validation.position=="number"&&(n=`${n} at one or more positions greater than or equal to ${t.validation.position}`)):"startsWith"in t.validation?n=`Invalid input: must start with "${t.validation.startsWith}"`:"endsWith"in t.validation?n=`Invalid input: must end with "${t.validation.endsWith}"`:Y.assertNever(t.validation):t.validation!=="regex"?n=`Invalid ${t.validation}`:n="Invalid";break;case k.too_small:t.type==="array"?n=`Array must contain ${t.exact?"exactly":t.inclusive?"at least":"more than"} ${t.minimum} element(s)`:t.type==="string"?n=`String must contain ${t.exact?"exactly":t.inclusive?"at least":"over"} ${t.minimum} character(s)`:t.type==="number"?n=`Number must be ${t.exact?"exactly equal to ":t.inclusive?"greater than or equal to ":"greater than "}${t.minimum}`:t.type==="bigint"?n=`Number must be ${t.exact?"exactly equal to ":t.inclusive?"greater than or equal to ":"greater than "}${t.minimum}`:t.type==="date"?n=`Date must be ${t.exact?"exactly equal to ":t.inclusive?"greater than or equal to ":"greater than "}${new Date(Number(t.minimum))}`:n="Invalid input";break;case k.too_big:t.type==="array"?n=`Array must contain ${t.exact?"exactly":t.inclusive?"at most":"less than"} ${t.maximum} element(s)`:t.type==="string"?n=`String must contain ${t.exact?"exactly":t.inclusive?"at most":"under"} ${t.maximum} character(s)`:t.type==="number"?n=`Number must be ${t.exact?"exactly":t.inclusive?"less than or equal to":"less than"} ${t.maximum}`:t.type==="bigint"?n=`BigInt must be ${t.exact?"exactly":t.inclusive?"less than or equal to":"less than"} ${t.maximum}`:t.type==="date"?n=`Date must be ${t.exact?"exactly":t.inclusive?"smaller than or equal to":"smaller than"} ${new Date(Number(t.maximum))}`:n="Invalid input";break;case k.custom:n="Invalid input";break;case k.invalid_intersection_types:n="Intersection results could not be merged";break;case k.not_multiple_of:n=`Number must be a multiple of ${t.multipleOf}`;break;case k.not_finite:n="Number must be finite";break;default:n=e.defaultError,Y.assertNever(t)}return{message:n}},vt=wh;var Ec=vt;function Th(t){Ec=t}function Rn(){return Ec}var cr=t=>{let{data:e,path:n,errorMaps:r,issueData:o}=t,i=[...n,...o.path||[]],s={...o,path:i};if(o.message!==void 0)return{...o,path:i,message:o.message};let a="",l=r.filter(c=>!!c).slice().reverse();for(let c of l)a=c(s,{data:e,defaultError:a}).message;return{...o,path:i,message:a}},_h=[];function N(t,e){let n=Rn(),r=cr({issueData:e,data:t.data,path:t.path,errorMaps:[t.common.contextualErrorMap,t.schemaErrorMap,n,n===vt?void 0:vt].filter(o=>!!o)});t.common.issues.push(r)}var Se=class t{constructor(){this.value="valid"}dirty(){this.value==="valid"&&(this.value="dirty")}abort(){this.value!=="aborted"&&(this.value="aborted")}static mergeArray(e,n){let r=[];for(let o of n){if(o.status==="aborted")return z;o.status==="dirty"&&e.dirty(),r.push(o.value)}return{status:e.value,value:r}}static async mergeObjectAsync(e,n){let r=[];for(let o of n){let i=await o.key,s=await o.value;r.push({key:i,value:s})}return t.mergeObjectSync(e,r)}static mergeObjectSync(e,n){let r={};for(let o of n){let{key:i,value:s}=o;if(i.status==="aborted"||s.status==="aborted")return z;i.status==="dirty"&&e.dirty(),s.status==="dirty"&&e.dirty(),i.value!=="__proto__"&&(typeof s.value<"u"||o.alwaysSet)&&(r[i.value]=s.value)}return{status:e.value,value:r}}},z=Object.freeze({status:"aborted"}),$t=t=>({status:"dirty",value:t}),Ne=t=>({status:"valid",value:t}),so=t=>t.status==="aborted",ao=t=>t.status==="dirty",Ct=t=>t.status==="valid",Cn=t=>typeof Promise<"u"&&t instanceof Promise;var D;(function(t){t.errToObj=e=>typeof e=="string"?{message:e}:e||{},t.toString=e=>typeof e=="string"?e:e?.message})(D||(D={}));var Ye=class{constructor(e,n,r,o){this._cachedPath=[],this.parent=e,this.data=n,this._path=r,this._key=o}get path(){return this._cachedPath.length||(Array.isArray(this._key)?this._cachedPath.push(...this._path,...this._key):this._cachedPath.push(...this._path,this._key)),this._cachedPath}},wc=(t,e)=>{if(Ct(e))return{success:!0,data:e.value};if(!t.common.issues.length)throw new Error("Validation failed but no issues detected.");return{success:!1,get error(){if(this._error)return this._error;let n=new Ue(t.common.issues);return this._error=n,this._error}}};function q(t){if(!t)return{};let{errorMap:e,invalid_type_error:n,required_error:r,description:o}=t;if(e&&(n||r))throw new Error(`Can't use "invalid_type_error" or "required_error" in conjunction with custom error map.`);return e?{errorMap:e,description:o}:{errorMap:(s,a)=>{let{message:l}=t;return s.code==="invalid_enum_value"?{message:l??a.defaultError}:typeof a.data>"u"?{message:l??r??a.defaultError}:s.code!=="invalid_type"?{message:a.defaultError}:{message:l??n??a.defaultError}},description:o}}var W=class{get description(){return this._def.description}_getType(e){return ut(e.data)}_getOrReturnCtx(e,n){return n||{common:e.parent.common,data:e.data,parsedType:ut(e.data),schemaErrorMap:this._def.errorMap,path:e.path,parent:e.parent}}_processInputParams(e){return{status:new Se,ctx:{common:e.parent.common,data:e.data,parsedType:ut(e.data),schemaErrorMap:this._def.errorMap,path:e.path,parent:e.parent}}}_parseSync(e){let n=this._parse(e);if(Cn(n))throw new Error("Synchronous parse encountered promise.");return n}_parseAsync(e){let n=this._parse(e);return Promise.resolve(n)}parse(e,n){let r=this.safeParse(e,n);if(r.success)return r.data;throw r.error}safeParse(e,n){let r={common:{issues:[],async:n?.async??!1,contextualErrorMap:n?.errorMap},path:n?.path||[],schemaErrorMap:this._def.errorMap,parent:null,data:e,parsedType:ut(e)},o=this._parseSync({data:e,path:r.path,parent:r});return wc(r,o)}"~validate"(e){let n={common:{issues:[],async:!!this["~standard"].async},path:[],schemaErrorMap:this._def.errorMap,parent:null,data:e,parsedType:ut(e)};if(!this["~standard"].async)try{let r=this._parseSync({data:e,path:[],parent:n});return Ct(r)?{value:r.value}:{issues:n.common.issues}}catch(r){r?.message?.toLowerCase()?.includes("encountered")&&(this["~standard"].async=!0),n.common={issues:[],async:!0}}return this._parseAsync({data:e,path:[],parent:n}).then(r=>Ct(r)?{value:r.value}:{issues:n.common.issues})}async parseAsync(e,n){let r=await this.safeParseAsync(e,n);if(r.success)return r.data;throw r.error}async safeParseAsync(e,n){let r={common:{issues:[],contextualErrorMap:n?.errorMap,async:!0},path:n?.path||[],schemaErrorMap:this._def.errorMap,parent:null,data:e,parsedType:ut(e)},o=this._parse({data:e,path:r.path,parent:r}),i=await(Cn(o)?o:Promise.resolve(o));return wc(r,i)}refine(e,n){let r=o=>typeof n=="string"||typeof n>"u"?{message:n}:typeof n=="function"?n(o):n;return this._refinement((o,i)=>{let s=e(o),a=()=>i.addIssue({code:k.custom,...r(o)});return typeof Promise<"u"&&s instanceof Promise?s.then(l=>l?!0:(a(),!1)):s?!0:(a(),!1)})}refinement(e,n){return this._refinement((r,o)=>e(r)?!0:(o.addIssue(typeof n=="function"?n(r,o):n),!1))}_refinement(e){return new Ke({schema:this,typeName:$.ZodEffects,effect:{type:"refinement",refinement:e}})}superRefine(e){return this._refinement(e)}constructor(e){this.spa=this.safeParseAsync,this._def=e,this.parse=this.parse.bind(this),this.safeParse=this.safeParse.bind(this),this.parseAsync=this.parseAsync.bind(this),this.safeParseAsync=this.safeParseAsync.bind(this),this.spa=this.spa.bind(this),this.refine=this.refine.bind(this),this.refinement=this.refinement.bind(this),this.superRefine=this.superRefine.bind(this),this.optional=this.optional.bind(this),this.nullable=this.nullable.bind(this),this.nullish=this.nullish.bind(this),this.array=this.array.bind(this),this.promise=this.promise.bind(this),this.or=this.or.bind(this),this.and=this.and.bind(this),this.transform=this.transform.bind(this),this.brand=this.brand.bind(this),this.default=this.default.bind(this),this.catch=this.catch.bind(this),this.describe=this.describe.bind(this),this.pipe=this.pipe.bind(this),this.readonly=this.readonly.bind(this),this.isNullable=this.isNullable.bind(this),this.isOptional=this.isOptional.bind(this),this["~standard"]={version:1,vendor:"zod",validate:n=>this["~validate"](n)}}optional(){return Xe.create(this,this._def)}nullable(){return pt.create(this,this._def)}nullish(){return this.nullable().optional()}array(){return Et.create(this)}promise(){return Mt.create(this,this._def)}or(e){return Yt.create([this,e],this._def)}and(e){return Kt.create(this,e,this._def)}transform(e){return new Ke({...q(this._def),schema:this,typeName:$.ZodEffects,effect:{type:"transform",transform:e}})}default(e){let n=typeof e=="function"?e:()=>e;return new tn({...q(this._def),innerType:this,defaultValue:n,typeName:$.ZodDefault})}brand(){return new ur({typeName:$.ZodBranded,type:this,...q(this._def)})}catch(e){let n=typeof e=="function"?e:()=>e;return new nn({...q(this._def),innerType:this,catchValue:n,typeName:$.ZodCatch})}describe(e){let n=this.constructor;return new n({...this._def,description:e})}pipe(e){return dr.create(this,e)}readonly(){return rn.create(this)}isOptional(){return this.safeParse(void 0).success}isNullable(){return this.safeParse(null).success}},Sh=/^c[^\s-]{8,}$/i,Ah=/^[0-9a-z]+$/,kh=/^[0-9A-HJKMNP-TV-Z]{26}$/i,Ih=/^[0-9a-fA-F]{8}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{12}$/i,Rh=/^[a-z0-9_-]{21}$/i,Ch=/^[A-Za-z0-9-_]+\.[A-Za-z0-9-_]+\.[A-Za-z0-9-_]*$/,Nh=/^[-+]?P(?!$)(?:(?:[-+]?\d+Y)|(?:[-+]?\d+[.,]\d+Y$))?(?:(?:[-+]?\d+M)|(?:[-+]?\d+[.,]\d+M$))?(?:(?:[-+]?\d+W)|(?:[-+]?\d+[.,]\d+W$))?(?:(?:[-+]?\d+D)|(?:[-+]?\d+[.,]\d+D$))?(?:T(?=[\d+-])(?:(?:[-+]?\d+H)|(?:[-+]?\d+[.,]\d+H$))?(?:(?:[-+]?\d+M)|(?:[-+]?\d+[.,]\d+M$))?(?:[-+]?\d+(?:[.,]\d+)?S)?)??$/,Oh=/^(?!\.)(?!.*\.\.)([A-Z0-9_'+\-\.]*)[A-Z0-9_+-]@([A-Z0-9][A-Z0-9\-]*\.)+[A-Z]{2,}$/i,Mh="^(\\p{Extended_Pictographic}|\\p{Emoji_Component})+$",Xs,Lh=/^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])$/,Ph=/^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\/(3[0-2]|[12]?[0-9])$/,Dh=/^(([0-9a-fA-F]{1,4}:){7,7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:)|fe80:(:[0-9a-fA-F]{0,4}){0,4}%[0-9a-zA-Z]{1,}|::(ffff(:0{1,4}){0,1}:){0,1}((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])|([0-9a-fA-F]{1,4}:){1,4}:((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9]))$/,Uh=/^(([0-9a-fA-F]{1,4}:){7,7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:)|fe80:(:[0-9a-fA-F]{0,4}){0,4}%[0-9a-zA-Z]{1,}|::(ffff(:0{1,4}){0,1}:){0,1}((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])|([0-9a-fA-F]{1,4}:){1,4}:((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9]))\/(12[0-8]|1[01][0-9]|[1-9]?[0-9])$/,Hh=/^([0-9a-zA-Z+/]{4})*(([0-9a-zA-Z+/]{2}==)|([0-9a-zA-Z+/]{3}=))?$/,Fh=/^([0-9a-zA-Z-_]{4})*(([0-9a-zA-Z-_]{2}(==)?)|([0-9a-zA-Z-_]{3}(=)?))?$/,_c="((\\d\\d[2468][048]|\\d\\d[13579][26]|\\d\\d0[48]|[02468][048]00|[13579][26]00)-02-29|\\d{4}-((0[13578]|1[02])-(0[1-9]|[12]\\d|3[01])|(0[469]|11)-(0[1-9]|[12]\\d|30)|(02)-(0[1-9]|1\\d|2[0-8])))",Gh=new RegExp(`^${_c}$`);function Sc(t){let e="[0-5]\\d";t.precision?e=`${e}\\.\\d{${t.precision}}`:t.precision==null&&(e=`${e}(\\.\\d+)?`);let n=t.precision?"+":"?";return`([01]\\d|2[0-3]):[0-5]\\d(:${e})${n}`}function zh(t){return new RegExp(`^${Sc(t)}$`)}function Ac(t){let e=`${_c}T${Sc(t)}`,n=[];return n.push(t.local?"Z?":"Z"),t.offset&&n.push("([+-]\\d{2}:?\\d{2})"),e=`${e}(${n.join("|")})`,new RegExp(`^${e}$`)}function $h(t,e){return!!((e==="v4"||!e)&&Lh.test(t)||(e==="v6"||!e)&&Dh.test(t))}function Bh(t,e){if(!Ch.test(t))return!1;try{let[n]=t.split(".");if(!n)return!1;let r=n.replace(/-/g,"+").replace(/_/g,"/").padEnd(n.length+(4-n.length%4)%4,"="),o=JSON.parse(atob(r));return!(typeof o!="object"||o===null||"typ"in o&&o?.typ!=="JWT"||!o.alg||e&&o.alg!==e)}catch{return!1}}function Vh(t,e){return!!((e==="v4"||!e)&&Ph.test(t)||(e==="v6"||!e)&&Uh.test(t))}var Nt=class t extends W{_parse(e){if(this._def.coerce&&(e.data=String(e.data)),this._getType(e)!==O.string){let i=this._getOrReturnCtx(e);return N(i,{code:k.invalid_type,expected:O.string,received:i.parsedType}),z}let r=new Se,o;for(let i of this._def.checks)if(i.kind==="min")e.data.length<i.value&&(o=this._getOrReturnCtx(e,o),N(o,{code:k.too_small,minimum:i.value,type:"string",inclusive:!0,exact:!1,message:i.message}),r.dirty());else if(i.kind==="max")e.data.length>i.value&&(o=this._getOrReturnCtx(e,o),N(o,{code:k.too_big,maximum:i.value,type:"string",inclusive:!0,exact:!1,message:i.message}),r.dirty());else if(i.kind==="length"){let s=e.data.length>i.value,a=e.data.length<i.value;(s||a)&&(o=this._getOrReturnCtx(e,o),s?N(o,{code:k.too_big,maximum:i.value,type:"string",inclusive:!0,exact:!0,message:i.message}):a&&N(o,{code:k.too_small,minimum:i.value,type:"string",inclusive:!0,exact:!0,message:i.message}),r.dirty())}else if(i.kind==="email")Oh.test(e.data)||(o=this._getOrReturnCtx(e,o),N(o,{validation:"email",code:k.invalid_string,message:i.message}),r.dirty());else if(i.kind==="emoji")Xs||(Xs=new RegExp(Mh,"u")),Xs.test(e.data)||(o=this._getOrReturnCtx(e,o),N(o,{validation:"emoji",code:k.invalid_string,message:i.message}),r.dirty());else if(i.kind==="uuid")Ih.test(e.data)||(o=this._getOrReturnCtx(e,o),N(o,{validation:"uuid",code:k.invalid_string,message:i.message}),r.dirty());else if(i.kind==="nanoid")Rh.test(e.data)||(o=this._getOrReturnCtx(e,o),N(o,{validation:"nanoid",code:k.invalid_string,message:i.message}),r.dirty());else if(i.kind==="cuid")Sh.test(e.data)||(o=this._getOrReturnCtx(e,o),N(o,{validation:"cuid",code:k.invalid_string,message:i.message}),r.dirty());else if(i.kind==="cuid2")Ah.test(e.data)||(o=this._getOrReturnCtx(e,o),N(o,{validation:"cuid2",code:k.invalid_string,message:i.message}),r.dirty());else if(i.kind==="ulid")kh.test(e.data)||(o=this._getOrReturnCtx(e,o),N(o,{validation:"ulid",code:k.invalid_string,message:i.message}),r.dirty());else if(i.kind==="url")try{new URL(e.data)}catch{o=this._getOrReturnCtx(e,o),N(o,{validation:"url",code:k.invalid_string,message:i.message}),r.dirty()}else i.kind==="regex"?(i.regex.lastIndex=0,i.regex.test(e.data)||(o=this._getOrReturnCtx(e,o),N(o,{validation:"regex",code:k.invalid_string,message:i.message}),r.dirty())):i.kind==="trim"?e.data=e.data.trim():i.kind==="includes"?e.data.includes(i.value,i.position)||(o=this._getOrReturnCtx(e,o),N(o,{code:k.invalid_string,validation:{includes:i.value,position:i.position},message:i.message}),r.dirty()):i.kind==="toLowerCase"?e.data=e.data.toLowerCase():i.kind==="toUpperCase"?e.data=e.data.toUpperCase():i.kind==="startsWith"?e.data.startsWith(i.value)||(o=this._getOrReturnCtx(e,o),N(o,{code:k.invalid_string,validation:{startsWith:i.value},message:i.message}),r.dirty()):i.kind==="endsWith"?e.data.endsWith(i.value)||(o=this._getOrReturnCtx(e,o),N(o,{code:k.invalid_string,validation:{endsWith:i.value},message:i.message}),r.dirty()):i.kind==="datetime"?Ac(i).test(e.data)||(o=this._getOrReturnCtx(e,o),N(o,{code:k.invalid_string,validation:"datetime",message:i.message}),r.dirty()):i.kind==="date"?Gh.test(e.data)||(o=this._getOrReturnCtx(e,o),N(o,{code:k.invalid_string,validation:"date",message:i.message}),r.dirty()):i.kind==="time"?zh(i).test(e.data)||(o=this._getOrReturnCtx(e,o),N(o,{code:k.invalid_string,validation:"time",message:i.message}),r.dirty()):i.kind==="duration"?Nh.test(e.data)||(o=this._getOrReturnCtx(e,o),N(o,{validation:"duration",code:k.invalid_string,message:i.message}),r.dirty()):i.kind==="ip"?$h(e.data,i.version)||(o=this._getOrReturnCtx(e,o),N(o,{validation:"ip",code:k.invalid_string,message:i.message}),r.dirty()):i.kind==="jwt"?Bh(e.data,i.alg)||(o=this._getOrReturnCtx(e,o),N(o,{validation:"jwt",code:k.invalid_string,message:i.message}),r.dirty()):i.kind==="cidr"?Vh(e.data,i.version)||(o=this._getOrReturnCtx(e,o),N(o,{validation:"cidr",code:k.invalid_string,message:i.message}),r.dirty()):i.kind==="base64"?Hh.test(e.data)||(o=this._getOrReturnCtx(e,o),N(o,{validation:"base64",code:k.invalid_string,message:i.message}),r.dirty()):i.kind==="base64url"?Fh.test(e.data)||(o=this._getOrReturnCtx(e,o),N(o,{validation:"base64url",code:k.invalid_string,message:i.message}),r.dirty()):Y.assertNever(i);return{status:r.value,value:e.data}}_regex(e,n,r){return this.refinement(o=>e.test(o),{validation:n,code:k.invalid_string,...D.errToObj(r)})}_addCheck(e){return new t({...this._def,checks:[...this._def.checks,e]})}email(e){return this._addCheck({kind:"email",...D.errToObj(e)})}url(e){return this._addCheck({kind:"url",...D.errToObj(e)})}emoji(e){return this._addCheck({kind:"emoji",...D.errToObj(e)})}uuid(e){return this._addCheck({kind:"uuid",...D.errToObj(e)})}nanoid(e){return this._addCheck({kind:"nanoid",...D.errToObj(e)})}cuid(e){return this._addCheck({kind:"cuid",...D.errToObj(e)})}cuid2(e){return this._addCheck({kind:"cuid2",...D.errToObj(e)})}ulid(e){return this._addCheck({kind:"ulid",...D.errToObj(e)})}base64(e){return this._addCheck({kind:"base64",...D.errToObj(e)})}base64url(e){return this._addCheck({kind:"base64url",...D.errToObj(e)})}jwt(e){return this._addCheck({kind:"jwt",...D.errToObj(e)})}ip(e){return this._addCheck({kind:"ip",...D.errToObj(e)})}cidr(e){return this._addCheck({kind:"cidr",...D.errToObj(e)})}datetime(e){return typeof e=="string"?this._addCheck({kind:"datetime",precision:null,offset:!1,local:!1,message:e}):this._addCheck({kind:"datetime",precision:typeof e?.precision>"u"?null:e?.precision,offset:e?.offset??!1,local:e?.local??!1,...D.errToObj(e?.message)})}date(e){return this._addCheck({kind:"date",message:e})}time(e){return typeof e=="string"?this._addCheck({kind:"time",precision:null,message:e}):this._addCheck({kind:"time",precision:typeof e?.precision>"u"?null:e?.precision,...D.errToObj(e?.message)})}duration(e){return this._addCheck({kind:"duration",...D.errToObj(e)})}regex(e,n){return this._addCheck({kind:"regex",regex:e,...D.errToObj(n)})}includes(e,n){return this._addCheck({kind:"includes",value:e,position:n?.position,...D.errToObj(n?.message)})}startsWith(e,n){return this._addCheck({kind:"startsWith",value:e,...D.errToObj(n)})}endsWith(e,n){return this._addCheck({kind:"endsWith",value:e,...D.errToObj(n)})}min(e,n){return this._addCheck({kind:"min",value:e,...D.errToObj(n)})}max(e,n){return this._addCheck({kind:"max",value:e,...D.errToObj(n)})}length(e,n){return this._addCheck({kind:"length",value:e,...D.errToObj(n)})}nonempty(e){return this.min(1,D.errToObj(e))}trim(){return new t({...this._def,checks:[...this._def.checks,{kind:"trim"}]})}toLowerCase(){return new t({...this._def,checks:[...this._def.checks,{kind:"toLowerCase"}]})}toUpperCase(){return new t({...this._def,checks:[...this._def.checks,{kind:"toUpperCase"}]})}get isDatetime(){return!!this._def.checks.find(e=>e.kind==="datetime")}get isDate(){return!!this._def.checks.find(e=>e.kind==="date")}get isTime(){return!!this._def.checks.find(e=>e.kind==="time")}get isDuration(){return!!this._def.checks.find(e=>e.kind==="duration")}get isEmail(){return!!this._def.checks.find(e=>e.kind==="email")}get isURL(){return!!this._def.checks.find(e=>e.kind==="url")}get isEmoji(){return!!this._def.checks.find(e=>e.kind==="emoji")}get isUUID(){return!!this._def.checks.find(e=>e.kind==="uuid")}get isNANOID(){return!!this._def.checks.find(e=>e.kind==="nanoid")}get isCUID(){return!!this._def.checks.find(e=>e.kind==="cuid")}get isCUID2(){return!!this._def.checks.find(e=>e.kind==="cuid2")}get isULID(){return!!this._def.checks.find(e=>e.kind==="ulid")}get isIP(){return!!this._def.checks.find(e=>e.kind==="ip")}get isCIDR(){return!!this._def.checks.find(e=>e.kind==="cidr")}get isBase64(){return!!this._def.checks.find(e=>e.kind==="base64")}get isBase64url(){return!!this._def.checks.find(e=>e.kind==="base64url")}get minLength(){let e=null;for(let n of this._def.checks)n.kind==="min"&&(e===null||n.value>e)&&(e=n.value);return e}get maxLength(){let e=null;for(let n of this._def.checks)n.kind==="max"&&(e===null||n.value<e)&&(e=n.value);return e}};Nt.create=t=>new Nt({checks:[],typeName:$.ZodString,coerce:t?.coerce??!1,...q(t)});function jh(t,e){let n=(t.toString().split(".")[1]||"").length,r=(e.toString().split(".")[1]||"").length,o=n>r?n:r,i=Number.parseInt(t.toFixed(o).replace(".","")),s=Number.parseInt(e.toFixed(o).replace(".",""));return i%s/10**o}var Bt=class t extends W{constructor(){super(...arguments),this.min=this.gte,this.max=this.lte,this.step=this.multipleOf}_parse(e){if(this._def.coerce&&(e.data=Number(e.data)),this._getType(e)!==O.number){let i=this._getOrReturnCtx(e);return N(i,{code:k.invalid_type,expected:O.number,received:i.parsedType}),z}let r,o=new Se;for(let i of this._def.checks)i.kind==="int"?Y.isInteger(e.data)||(r=this._getOrReturnCtx(e,r),N(r,{code:k.invalid_type,expected:"integer",received:"float",message:i.message}),o.dirty()):i.kind==="min"?(i.inclusive?e.data<i.value:e.data<=i.value)&&(r=this._getOrReturnCtx(e,r),N(r,{code:k.too_small,minimum:i.value,type:"number",inclusive:i.inclusive,exact:!1,message:i.message}),o.dirty()):i.kind==="max"?(i.inclusive?e.data>i.value:e.data>=i.value)&&(r=this._getOrReturnCtx(e,r),N(r,{code:k.too_big,maximum:i.value,type:"number",inclusive:i.inclusive,exact:!1,message:i.message}),o.dirty()):i.kind==="multipleOf"?jh(e.data,i.value)!==0&&(r=this._getOrReturnCtx(e,r),N(r,{code:k.not_multiple_of,multipleOf:i.value,message:i.message}),o.dirty()):i.kind==="finite"?Number.isFinite(e.data)||(r=this._getOrReturnCtx(e,r),N(r,{code:k.not_finite,message:i.message}),o.dirty()):Y.assertNever(i);return{status:o.value,value:e.data}}gte(e,n){return this.setLimit("min",e,!0,D.toString(n))}gt(e,n){return this.setLimit("min",e,!1,D.toString(n))}lte(e,n){return this.setLimit("max",e,!0,D.toString(n))}lt(e,n){return this.setLimit("max",e,!1,D.toString(n))}setLimit(e,n,r,o){return new t({...this._def,checks:[...this._def.checks,{kind:e,value:n,inclusive:r,message:D.toString(o)}]})}_addCheck(e){return new t({...this._def,checks:[...this._def.checks,e]})}int(e){return this._addCheck({kind:"int",message:D.toString(e)})}positive(e){return this._addCheck({kind:"min",value:0,inclusive:!1,message:D.toString(e)})}negative(e){return this._addCheck({kind:"max",value:0,inclusive:!1,message:D.toString(e)})}nonpositive(e){return this._addCheck({kind:"max",value:0,inclusive:!0,message:D.toString(e)})}nonnegative(e){return this._addCheck({kind:"min",value:0,inclusive:!0,message:D.toString(e)})}multipleOf(e,n){return this._addCheck({kind:"multipleOf",value:e,message:D.toString(n)})}finite(e){return this._addCheck({kind:"finite",message:D.toString(e)})}safe(e){return this._addCheck({kind:"min",inclusive:!0,value:Number.MIN_SAFE_INTEGER,message:D.toString(e)})._addCheck({kind:"max",inclusive:!0,value:Number.MAX_SAFE_INTEGER,message:D.toString(e)})}get minValue(){let e=null;for(let n of this._def.checks)n.kind==="min"&&(e===null||n.value>e)&&(e=n.value);return e}get maxValue(){let e=null;for(let n of this._def.checks)n.kind==="max"&&(e===null||n.value<e)&&(e=n.value);return e}get isInt(){return!!this._def.checks.find(e=>e.kind==="int"||e.kind==="multipleOf"&&Y.isInteger(e.value))}get isFinite(){let e=null,n=null;for(let r of this._def.checks){if(r.kind==="finite"||r.kind==="int"||r.kind==="multipleOf")return!0;r.kind==="min"?(n===null||r.value>n)&&(n=r.value):r.kind==="max"&&(e===null||r.value<e)&&(e=r.value)}return Number.isFinite(n)&&Number.isFinite(e)}};Bt.create=t=>new Bt({checks:[],typeName:$.ZodNumber,coerce:t?.coerce||!1,...q(t)});var Vt=class t extends W{constructor(){super(...arguments),this.min=this.gte,this.max=this.lte}_parse(e){if(this._def.coerce)try{e.data=BigInt(e.data)}catch{return this._getInvalidInput(e)}if(this._getType(e)!==O.bigint)return this._getInvalidInput(e);let r,o=new Se;for(let i of this._def.checks)i.kind==="min"?(i.inclusive?e.data<i.value:e.data<=i.value)&&(r=this._getOrReturnCtx(e,r),N(r,{code:k.too_small,type:"bigint",minimum:i.value,inclusive:i.inclusive,message:i.message}),o.dirty()):i.kind==="max"?(i.inclusive?e.data>i.value:e.data>=i.value)&&(r=this._getOrReturnCtx(e,r),N(r,{code:k.too_big,type:"bigint",maximum:i.value,inclusive:i.inclusive,message:i.message}),o.dirty()):i.kind==="multipleOf"?e.data%i.value!==BigInt(0)&&(r=this._getOrReturnCtx(e,r),N(r,{code:k.not_multiple_of,multipleOf:i.value,message:i.message}),o.dirty()):Y.assertNever(i);return{status:o.value,value:e.data}}_getInvalidInput(e){let n=this._getOrReturnCtx(e);return N(n,{code:k.invalid_type,expected:O.bigint,received:n.parsedType}),z}gte(e,n){return this.setLimit("min",e,!0,D.toString(n))}gt(e,n){return this.setLimit("min",e,!1,D.toString(n))}lte(e,n){return this.setLimit("max",e,!0,D.toString(n))}lt(e,n){return this.setLimit("max",e,!1,D.toString(n))}setLimit(e,n,r,o){return new t({...this._def,checks:[...this._def.checks,{kind:e,value:n,inclusive:r,message:D.toString(o)}]})}_addCheck(e){return new t({...this._def,checks:[...this._def.checks,e]})}positive(e){return this._addCheck({kind:"min",value:BigInt(0),inclusive:!1,message:D.toString(e)})}negative(e){return this._addCheck({kind:"max",value:BigInt(0),inclusive:!1,message:D.toString(e)})}nonpositive(e){return this._addCheck({kind:"max",value:BigInt(0),inclusive:!0,message:D.toString(e)})}nonnegative(e){return this._addCheck({kind:"min",value:BigInt(0),inclusive:!0,message:D.toString(e)})}multipleOf(e,n){return this._addCheck({kind:"multipleOf",value:e,message:D.toString(n)})}get minValue(){let e=null;for(let n of this._def.checks)n.kind==="min"&&(e===null||n.value>e)&&(e=n.value);return e}get maxValue(){let e=null;for(let n of this._def.checks)n.kind==="max"&&(e===null||n.value<e)&&(e=n.value);return e}};Vt.create=t=>new Vt({checks:[],typeName:$.ZodBigInt,coerce:t?.coerce??!1,...q(t)});var jt=class extends W{_parse(e){if(this._def.coerce&&(e.data=!!e.data),this._getType(e)!==O.boolean){let r=this._getOrReturnCtx(e);return N(r,{code:k.invalid_type,expected:O.boolean,received:r.parsedType}),z}return Ne(e.data)}};jt.create=t=>new jt({typeName:$.ZodBoolean,coerce:t?.coerce||!1,...q(t)});var qt=class t extends W{_parse(e){if(this._def.coerce&&(e.data=new Date(e.data)),this._getType(e)!==O.date){let i=this._getOrReturnCtx(e);return N(i,{code:k.invalid_type,expected:O.date,received:i.parsedType}),z}if(Number.isNaN(e.data.getTime())){let i=this._getOrReturnCtx(e);return N(i,{code:k.invalid_date}),z}let r=new Se,o;for(let i of this._def.checks)i.kind==="min"?e.data.getTime()<i.value&&(o=this._getOrReturnCtx(e,o),N(o,{code:k.too_small,message:i.message,inclusive:!0,exact:!1,minimum:i.value,type:"date"}),r.dirty()):i.kind==="max"?e.data.getTime()>i.value&&(o=this._getOrReturnCtx(e,o),N(o,{code:k.too_big,message:i.message,inclusive:!0,exact:!1,maximum:i.value,type:"date"}),r.dirty()):Y.assertNever(i);return{status:r.value,value:new Date(e.data.getTime())}}_addCheck(e){return new t({...this._def,checks:[...this._def.checks,e]})}min(e,n){return this._addCheck({kind:"min",value:e.getTime(),message:D.toString(n)})}max(e,n){return this._addCheck({kind:"max",value:e.getTime(),message:D.toString(n)})}get minDate(){let e=null;for(let n of this._def.checks)n.kind==="min"&&(e===null||n.value>e)&&(e=n.value);return e!=null?new Date(e):null}get maxDate(){let e=null;for(let n of this._def.checks)n.kind==="max"&&(e===null||n.value<e)&&(e=n.value);return e!=null?new Date(e):null}};qt.create=t=>new qt({checks:[],coerce:t?.coerce||!1,typeName:$.ZodDate,...q(t)});var On=class extends W{_parse(e){if(this._getType(e)!==O.symbol){let r=this._getOrReturnCtx(e);return N(r,{code:k.invalid_type,expected:O.symbol,received:r.parsedType}),z}return Ne(e.data)}};On.create=t=>new On({typeName:$.ZodSymbol,...q(t)});var Wt=class extends W{_parse(e){if(this._getType(e)!==O.undefined){let r=this._getOrReturnCtx(e);return N(r,{code:k.invalid_type,expected:O.undefined,received:r.parsedType}),z}return Ne(e.data)}};Wt.create=t=>new Wt({typeName:$.ZodUndefined,...q(t)});var Xt=class extends W{_parse(e){if(this._getType(e)!==O.null){let r=this._getOrReturnCtx(e);return N(r,{code:k.invalid_type,expected:O.null,received:r.parsedType}),z}return Ne(e.data)}};Xt.create=t=>new Xt({typeName:$.ZodNull,...q(t)});var Ot=class extends W{constructor(){super(...arguments),this._any=!0}_parse(e){return Ne(e.data)}};Ot.create=t=>new Ot({typeName:$.ZodAny,...q(t)});var xt=class extends W{constructor(){super(...arguments),this._unknown=!0}_parse(e){return Ne(e.data)}};xt.create=t=>new xt({typeName:$.ZodUnknown,...q(t)});var et=class extends W{_parse(e){let n=this._getOrReturnCtx(e);return N(n,{code:k.invalid_type,expected:O.never,received:n.parsedType}),z}};et.create=t=>new et({typeName:$.ZodNever,...q(t)});var Mn=class extends W{_parse(e){if(this._getType(e)!==O.undefined){let r=this._getOrReturnCtx(e);return N(r,{code:k.invalid_type,expected:O.void,received:r.parsedType}),z}return Ne(e.data)}};Mn.create=t=>new Mn({typeName:$.ZodVoid,...q(t)});var Et=class t extends W{_parse(e){let{ctx:n,status:r}=this._processInputParams(e),o=this._def;if(n.parsedType!==O.array)return N(n,{code:k.invalid_type,expected:O.array,received:n.parsedType}),z;if(o.exactLength!==null){let s=n.data.length>o.exactLength.value,a=n.data.length<o.exactLength.value;(s||a)&&(N(n,{code:s?k.too_big:k.too_small,minimum:a?o.exactLength.value:void 0,maximum:s?o.exactLength.value:void 0,type:"array",inclusive:!0,exact:!0,message:o.exactLength.message}),r.dirty())}if(o.minLength!==null&&n.data.length<o.minLength.value&&(N(n,{code:k.too_small,minimum:o.minLength.value,type:"array",inclusive:!0,exact:!1,message:o.minLength.message}),r.dirty()),o.maxLength!==null&&n.data.length>o.maxLength.value&&(N(n,{code:k.too_big,maximum:o.maxLength.value,type:"array",inclusive:!0,exact:!1,message:o.maxLength.message}),r.dirty()),n.common.async)return Promise.all([...n.data].map((s,a)=>o.type._parseAsync(new Ye(n,s,n.path,a)))).then(s=>Se.mergeArray(r,s));let i=[...n.data].map((s,a)=>o.type._parseSync(new Ye(n,s,n.path,a)));return Se.mergeArray(r,i)}get element(){return this._def.type}min(e,n){return new t({...this._def,minLength:{value:e,message:D.toString(n)}})}max(e,n){return new t({...this._def,maxLength:{value:e,message:D.toString(n)}})}length(e,n){return new t({...this._def,exactLength:{value:e,message:D.toString(n)}})}nonempty(e){return this.min(1,e)}};Et.create=(t,e)=>new Et({type:t,minLength:null,maxLength:null,exactLength:null,typeName:$.ZodArray,...q(e)});function Nn(t){if(t instanceof He){let e={};for(let n in t.shape){let r=t.shape[n];e[n]=Xe.create(Nn(r))}return new He({...t._def,shape:()=>e})}else return t instanceof Et?new Et({...t._def,type:Nn(t.element)}):t instanceof Xe?Xe.create(Nn(t.unwrap())):t instanceof pt?pt.create(Nn(t.unwrap())):t instanceof dt?dt.create(t.items.map(e=>Nn(e))):t}var He=class t extends W{constructor(){super(...arguments),this._cached=null,this.nonstrict=this.passthrough,this.augment=this.extend}_getCached(){if(this._cached!==null)return this._cached;let e=this._def.shape(),n=Y.objectKeys(e);return this._cached={shape:e,keys:n},this._cached}_parse(e){if(this._getType(e)!==O.object){let c=this._getOrReturnCtx(e);return N(c,{code:k.invalid_type,expected:O.object,received:c.parsedType}),z}let{status:r,ctx:o}=this._processInputParams(e),{shape:i,keys:s}=this._getCached(),a=[];if(!(this._def.catchall instanceof et&&this._def.unknownKeys==="strip"))for(let c in o.data)s.includes(c)||a.push(c);let l=[];for(let c of s){let d=i[c],m=o.data[c];l.push({key:{status:"valid",value:c},value:d._parse(new Ye(o,m,o.path,c)),alwaysSet:c in o.data})}if(this._def.catchall instanceof et){let c=this._def.unknownKeys;if(c==="passthrough")for(let d of a)l.push({key:{status:"valid",value:d},value:{status:"valid",value:o.data[d]}});else if(c==="strict")a.length>0&&(N(o,{code:k.unrecognized_keys,keys:a}),r.dirty());else if(c!=="strip")throw new Error("Internal ZodObject error: invalid unknownKeys value.")}else{let c=this._def.catchall;for(let d of a){let m=o.data[d];l.push({key:{status:"valid",value:d},value:c._parse(new Ye(o,m,o.path,d)),alwaysSet:d in o.data})}}return o.common.async?Promise.resolve().then(async()=>{let c=[];for(let d of l){let m=await d.key,x=await d.value;c.push({key:m,value:x,alwaysSet:d.alwaysSet})}return c}).then(c=>Se.mergeObjectSync(r,c)):Se.mergeObjectSync(r,l)}get shape(){return this._def.shape()}strict(e){return D.errToObj,new t({...this._def,unknownKeys:"strict",...e!==void 0?{errorMap:(n,r)=>{let o=this._def.errorMap?.(n,r).message??r.defaultError;return n.code==="unrecognized_keys"?{message:D.errToObj(e).message??o}:{message:o}}}:{}})}strip(){return new t({...this._def,unknownKeys:"strip"})}passthrough(){return new t({...this._def,unknownKeys:"passthrough"})}extend(e){return new t({...this._def,shape:()=>({...this._def.shape(),...e})})}merge(e){return new t({unknownKeys:e._def.unknownKeys,catchall:e._def.catchall,shape:()=>({...this._def.shape(),...e._def.shape()}),typeName:$.ZodObject})}setKey(e,n){return this.augment({[e]:n})}catchall(e){return new t({...this._def,catchall:e})}pick(e){let n={};for(let r of Y.objectKeys(e))e[r]&&this.shape[r]&&(n[r]=this.shape[r]);return new t({...this._def,shape:()=>n})}omit(e){let n={};for(let r of Y.objectKeys(this.shape))e[r]||(n[r]=this.shape[r]);return new t({...this._def,shape:()=>n})}deepPartial(){return Nn(this)}partial(e){let n={};for(let r of Y.objectKeys(this.shape)){let o=this.shape[r];e&&!e[r]?n[r]=o:n[r]=o.optional()}return new t({...this._def,shape:()=>n})}required(e){let n={};for(let r of Y.objectKeys(this.shape))if(e&&!e[r])n[r]=this.shape[r];else{let i=this.shape[r];for(;i instanceof Xe;)i=i._def.innerType;n[r]=i}return new t({...this._def,shape:()=>n})}keyof(){return kc(Y.objectKeys(this.shape))}};He.create=(t,e)=>new He({shape:()=>t,unknownKeys:"strip",catchall:et.create(),typeName:$.ZodObject,...q(e)});He.strictCreate=(t,e)=>new He({shape:()=>t,unknownKeys:"strict",catchall:et.create(),typeName:$.ZodObject,...q(e)});He.lazycreate=(t,e)=>new He({shape:t,unknownKeys:"strip",catchall:et.create(),typeName:$.ZodObject,...q(e)});var Yt=class extends W{_parse(e){let{ctx:n}=this._processInputParams(e),r=this._def.options;function o(i){for(let a of i)if(a.result.status==="valid")return a.result;for(let a of i)if(a.result.status==="dirty")return n.common.issues.push(...a.ctx.common.issues),a.result;let s=i.map(a=>new Ue(a.ctx.common.issues));return N(n,{code:k.invalid_union,unionErrors:s}),z}if(n.common.async)return Promise.all(r.map(async i=>{let s={...n,common:{...n.common,issues:[]},parent:null};return{result:await i._parseAsync({data:n.data,path:n.path,parent:s}),ctx:s}})).then(o);{let i,s=[];for(let l of r){let c={...n,common:{...n.common,issues:[]},parent:null},d=l._parseSync({data:n.data,path:n.path,parent:c});if(d.status==="valid")return d;d.status==="dirty"&&!i&&(i={result:d,ctx:c}),c.common.issues.length&&s.push(c.common.issues)}if(i)return n.common.issues.push(...i.ctx.common.issues),i.result;let a=s.map(l=>new Ue(l));return N(n,{code:k.invalid_union,unionErrors:a}),z}}get options(){return this._def.options}};Yt.create=(t,e)=>new Yt({options:t,typeName:$.ZodUnion,...q(e)});var yt=t=>t instanceof Zt?yt(t.schema):t instanceof Ke?yt(t.innerType()):t instanceof Qt?[t.value]:t instanceof Jt?t.options:t instanceof en?Y.objectValues(t.enum):t instanceof tn?yt(t._def.innerType):t instanceof Wt?[void 0]:t instanceof Xt?[null]:t instanceof Xe?[void 0,...yt(t.unwrap())]:t instanceof pt?[null,...yt(t.unwrap())]:t instanceof ur||t instanceof rn?yt(t.unwrap()):t instanceof nn?yt(t._def.innerType):[],lo=class t extends W{_parse(e){let{ctx:n}=this._processInputParams(e);if(n.parsedType!==O.object)return N(n,{code:k.invalid_type,expected:O.object,received:n.parsedType}),z;let r=this.discriminator,o=n.data[r],i=this.optionsMap.get(o);return i?n.common.async?i._parseAsync({data:n.data,path:n.path,parent:n}):i._parseSync({data:n.data,path:n.path,parent:n}):(N(n,{code:k.invalid_union_discriminator,options:Array.from(this.optionsMap.keys()),path:[r]}),z)}get discriminator(){return this._def.discriminator}get options(){return this._def.options}get optionsMap(){return this._def.optionsMap}static create(e,n,r){let o=new Map;for(let i of n){let s=yt(i.shape[e]);if(!s.length)throw new Error(`A discriminator value for key \`${e}\` could not be extracted from all schema options`);for(let a of s){if(o.has(a))throw new Error(`Discriminator property ${String(e)} has duplicate value ${String(a)}`);o.set(a,i)}}return new t({typeName:$.ZodDiscriminatedUnion,discriminator:e,options:n,optionsMap:o,...q(r)})}};function Ys(t,e){let n=ut(t),r=ut(e);if(t===e)return{valid:!0,data:t};if(n===O.object&&r===O.object){let o=Y.objectKeys(e),i=Y.objectKeys(t).filter(a=>o.indexOf(a)!==-1),s={...t,...e};for(let a of i){let l=Ys(t[a],e[a]);if(!l.valid)return{valid:!1};s[a]=l.data}return{valid:!0,data:s}}else if(n===O.array&&r===O.array){if(t.length!==e.length)return{valid:!1};let o=[];for(let i=0;i<t.length;i++){let s=t[i],a=e[i],l=Ys(s,a);if(!l.valid)return{valid:!1};o.push(l.data)}return{valid:!0,data:o}}else return n===O.date&&r===O.date&&+t==+e?{valid:!0,data:t}:{valid:!1}}var Kt=class extends W{_parse(e){let{status:n,ctx:r}=this._processInputParams(e),o=(i,s)=>{if(so(i)||so(s))return z;let a=Ys(i.value,s.value);return a.valid?((ao(i)||ao(s))&&n.dirty(),{status:n.value,value:a.data}):(N(r,{code:k.invalid_intersection_types}),z)};return r.common.async?Promise.all([this._def.left._parseAsync({data:r.data,path:r.path,parent:r}),this._def.right._parseAsync({data:r.data,path:r.path,parent:r})]).then(([i,s])=>o(i,s)):o(this._def.left._parseSync({data:r.data,path:r.path,parent:r}),this._def.right._parseSync({data:r.data,path:r.path,parent:r}))}};Kt.create=(t,e,n)=>new Kt({left:t,right:e,typeName:$.ZodIntersection,...q(n)});var dt=class t extends W{_parse(e){let{status:n,ctx:r}=this._processInputParams(e);if(r.parsedType!==O.array)return N(r,{code:k.invalid_type,expected:O.array,received:r.parsedType}),z;if(r.data.length<this._def.items.length)return N(r,{code:k.too_small,minimum:this._def.items.length,inclusive:!0,exact:!1,type:"array"}),z;!this._def.rest&&r.data.length>this._def.items.length&&(N(r,{code:k.too_big,maximum:this._def.items.length,inclusive:!0,exact:!1,type:"array"}),n.dirty());let i=[...r.data].map((s,a)=>{let l=this._def.items[a]||this._def.rest;return l?l._parse(new Ye(r,s,r.path,a)):null}).filter(s=>!!s);return r.common.async?Promise.all(i).then(s=>Se.mergeArray(n,s)):Se.mergeArray(n,i)}get items(){return this._def.items}rest(e){return new t({...this._def,rest:e})}};dt.create=(t,e)=>{if(!Array.isArray(t))throw new Error("You must pass an array of schemas to z.tuple([ ... ])");return new dt({items:t,typeName:$.ZodTuple,rest:null,...q(e)})};var co=class t extends W{get keySchema(){return this._def.keyType}get valueSchema(){return this._def.valueType}_parse(e){let{status:n,ctx:r}=this._processInputParams(e);if(r.parsedType!==O.object)return N(r,{code:k.invalid_type,expected:O.object,received:r.parsedType}),z;let o=[],i=this._def.keyType,s=this._def.valueType;for(let a in r.data)o.push({key:i._parse(new Ye(r,a,r.path,a)),value:s._parse(new Ye(r,r.data[a],r.path,a)),alwaysSet:a in r.data});return r.common.async?Se.mergeObjectAsync(n,o):Se.mergeObjectSync(n,o)}get element(){return this._def.valueType}static create(e,n,r){return n instanceof W?new t({keyType:e,valueType:n,typeName:$.ZodRecord,...q(r)}):new t({keyType:Nt.create(),valueType:e,typeName:$.ZodRecord,...q(n)})}},Ln=class extends W{get keySchema(){return this._def.keyType}get valueSchema(){return this._def.valueType}_parse(e){let{status:n,ctx:r}=this._processInputParams(e);if(r.parsedType!==O.map)return N(r,{code:k.invalid_type,expected:O.map,received:r.parsedType}),z;let o=this._def.keyType,i=this._def.valueType,s=[...r.data.entries()].map(([a,l],c)=>({key:o._parse(new Ye(r,a,r.path,[c,"key"])),value:i._parse(new Ye(r,l,r.path,[c,"value"]))}));if(r.common.async){let a=new Map;return Promise.resolve().then(async()=>{for(let l of s){let c=await l.key,d=await l.value;if(c.status==="aborted"||d.status==="aborted")return z;(c.status==="dirty"||d.status==="dirty")&&n.dirty(),a.set(c.value,d.value)}return{status:n.value,value:a}})}else{let a=new Map;for(let l of s){let c=l.key,d=l.value;if(c.status==="aborted"||d.status==="aborted")return z;(c.status==="dirty"||d.status==="dirty")&&n.dirty(),a.set(c.value,d.value)}return{status:n.value,value:a}}}};Ln.create=(t,e,n)=>new Ln({valueType:e,keyType:t,typeName:$.ZodMap,...q(n)});var Pn=class t extends W{_parse(e){let{status:n,ctx:r}=this._processInputParams(e);if(r.parsedType!==O.set)return N(r,{code:k.invalid_type,expected:O.set,received:r.parsedType}),z;let o=this._def;o.minSize!==null&&r.data.size<o.minSize.value&&(N(r,{code:k.too_small,minimum:o.minSize.value,type:"set",inclusive:!0,exact:!1,message:o.minSize.message}),n.dirty()),o.maxSize!==null&&r.data.size>o.maxSize.value&&(N(r,{code:k.too_big,maximum:o.maxSize.value,type:"set",inclusive:!0,exact:!1,message:o.maxSize.message}),n.dirty());let i=this._def.valueType;function s(l){let c=new Set;for(let d of l){if(d.status==="aborted")return z;d.status==="dirty"&&n.dirty(),c.add(d.value)}return{status:n.value,value:c}}let a=[...r.data.values()].map((l,c)=>i._parse(new Ye(r,l,r.path,c)));return r.common.async?Promise.all(a).then(l=>s(l)):s(a)}min(e,n){return new t({...this._def,minSize:{value:e,message:D.toString(n)}})}max(e,n){return new t({...this._def,maxSize:{value:e,message:D.toString(n)}})}size(e,n){return this.min(e,n).max(e,n)}nonempty(e){return this.min(1,e)}};Pn.create=(t,e)=>new Pn({valueType:t,minSize:null,maxSize:null,typeName:$.ZodSet,...q(e)});var uo=class t extends W{constructor(){super(...arguments),this.validate=this.implement}_parse(e){let{ctx:n}=this._processInputParams(e);if(n.parsedType!==O.function)return N(n,{code:k.invalid_type,expected:O.function,received:n.parsedType}),z;function r(a,l){return cr({data:a,path:n.path,errorMaps:[n.common.contextualErrorMap,n.schemaErrorMap,Rn(),vt].filter(c=>!!c),issueData:{code:k.invalid_arguments,argumentsError:l}})}function o(a,l){return cr({data:a,path:n.path,errorMaps:[n.common.contextualErrorMap,n.schemaErrorMap,Rn(),vt].filter(c=>!!c),issueData:{code:k.invalid_return_type,returnTypeError:l}})}let i={errorMap:n.common.contextualErrorMap},s=n.data;if(this._def.returns instanceof Mt){let a=this;return Ne(async function(...l){let c=new Ue([]),d=await a._def.args.parseAsync(l,i).catch(f=>{throw c.addIssue(r(l,f)),c}),m=await Reflect.apply(s,this,d);return await a._def.returns._def.type.parseAsync(m,i).catch(f=>{throw c.addIssue(o(m,f)),c})})}else{let a=this;return Ne(function(...l){let c=a._def.args.safeParse(l,i);if(!c.success)throw new Ue([r(l,c.error)]);let d=Reflect.apply(s,this,c.data),m=a._def.returns.safeParse(d,i);if(!m.success)throw new Ue([o(d,m.error)]);return m.data})}}parameters(){return this._def.args}returnType(){return this._def.returns}args(...e){return new t({...this._def,args:dt.create(e).rest(xt.create())})}returns(e){return new t({...this._def,returns:e})}implement(e){return this.parse(e)}strictImplement(e){return this.parse(e)}static create(e,n,r){return new t({args:e||dt.create([]).rest(xt.create()),returns:n||xt.create(),typeName:$.ZodFunction,...q(r)})}},Zt=class extends W{get schema(){return this._def.getter()}_parse(e){let{ctx:n}=this._processInputParams(e);return this._def.getter()._parse({data:n.data,path:n.path,parent:n})}};Zt.create=(t,e)=>new Zt({getter:t,typeName:$.ZodLazy,...q(e)});var Qt=class extends W{_parse(e){if(e.data!==this._def.value){let n=this._getOrReturnCtx(e);return N(n,{received:n.data,code:k.invalid_literal,expected:this._def.value}),z}return{status:"valid",value:e.data}}get value(){return this._def.value}};Qt.create=(t,e)=>new Qt({value:t,typeName:$.ZodLiteral,...q(e)});function kc(t,e){return new Jt({values:t,typeName:$.ZodEnum,...q(e)})}var Jt=class t extends W{_parse(e){if(typeof e.data!="string"){let n=this._getOrReturnCtx(e),r=this._def.values;return N(n,{expected:Y.joinValues(r),received:n.parsedType,code:k.invalid_type}),z}if(this._cache||(this._cache=new Set(this._def.values)),!this._cache.has(e.data)){let n=this._getOrReturnCtx(e),r=this._def.values;return N(n,{received:n.data,code:k.invalid_enum_value,options:r}),z}return Ne(e.data)}get options(){return this._def.values}get enum(){let e={};for(let n of this._def.values)e[n]=n;return e}get Values(){let e={};for(let n of this._def.values)e[n]=n;return e}get Enum(){let e={};for(let n of this._def.values)e[n]=n;return e}extract(e,n=this._def){return t.create(e,{...this._def,...n})}exclude(e,n=this._def){return t.create(this.options.filter(r=>!e.includes(r)),{...this._def,...n})}};Jt.create=kc;var en=class extends W{_parse(e){let n=Y.getValidEnumValues(this._def.values),r=this._getOrReturnCtx(e);if(r.parsedType!==O.string&&r.parsedType!==O.number){let o=Y.objectValues(n);return N(r,{expected:Y.joinValues(o),received:r.parsedType,code:k.invalid_type}),z}if(this._cache||(this._cache=new Set(Y.getValidEnumValues(this._def.values))),!this._cache.has(e.data)){let o=Y.objectValues(n);return N(r,{received:r.data,code:k.invalid_enum_value,options:o}),z}return Ne(e.data)}get enum(){return this._def.values}};en.create=(t,e)=>new en({values:t,typeName:$.ZodNativeEnum,...q(e)});var Mt=class extends W{unwrap(){return this._def.type}_parse(e){let{ctx:n}=this._processInputParams(e);if(n.parsedType!==O.promise&&n.common.async===!1)return N(n,{code:k.invalid_type,expected:O.promise,received:n.parsedType}),z;let r=n.parsedType===O.promise?n.data:Promise.resolve(n.data);return Ne(r.then(o=>this._def.type.parseAsync(o,{path:n.path,errorMap:n.common.contextualErrorMap})))}};Mt.create=(t,e)=>new Mt({type:t,typeName:$.ZodPromise,...q(e)});var Ke=class extends W{innerType(){return this._def.schema}sourceType(){return this._def.schema._def.typeName===$.ZodEffects?this._def.schema.sourceType():this._def.schema}_parse(e){let{status:n,ctx:r}=this._processInputParams(e),o=this._def.effect||null,i={addIssue:s=>{N(r,s),s.fatal?n.abort():n.dirty()},get path(){return r.path}};if(i.addIssue=i.addIssue.bind(i),o.type==="preprocess"){let s=o.transform(r.data,i);if(r.common.async)return Promise.resolve(s).then(async a=>{if(n.value==="aborted")return z;let l=await this._def.schema._parseAsync({data:a,path:r.path,parent:r});return l.status==="aborted"?z:l.status==="dirty"?$t(l.value):n.value==="dirty"?$t(l.value):l});{if(n.value==="aborted")return z;let a=this._def.schema._parseSync({data:s,path:r.path,parent:r});return a.status==="aborted"?z:a.status==="dirty"?$t(a.value):n.value==="dirty"?$t(a.value):a}}if(o.type==="refinement"){let s=a=>{let l=o.refinement(a,i);if(r.common.async)return Promise.resolve(l);if(l instanceof Promise)throw new Error("Async refinement encountered during synchronous parse operation. Use .parseAsync instead.");return a};if(r.common.async===!1){let a=this._def.schema._parseSync({data:r.data,path:r.path,parent:r});return a.status==="aborted"?z:(a.status==="dirty"&&n.dirty(),s(a.value),{status:n.value,value:a.value})}else return this._def.schema._parseAsync({data:r.data,path:r.path,parent:r}).then(a=>a.status==="aborted"?z:(a.status==="dirty"&&n.dirty(),s(a.value).then(()=>({status:n.value,value:a.value}))))}if(o.type==="transform")if(r.common.async===!1){let s=this._def.schema._parseSync({data:r.data,path:r.path,parent:r});if(!Ct(s))return z;let a=o.transform(s.value,i);if(a instanceof Promise)throw new Error("Asynchronous transform encountered during synchronous parse operation. Use .parseAsync instead.");return{status:n.value,value:a}}else return this._def.schema._parseAsync({data:r.data,path:r.path,parent:r}).then(s=>Ct(s)?Promise.resolve(o.transform(s.value,i)).then(a=>({status:n.value,value:a})):z);Y.assertNever(o)}};Ke.create=(t,e,n)=>new Ke({schema:t,typeName:$.ZodEffects,effect:e,...q(n)});Ke.createWithPreprocess=(t,e,n)=>new Ke({schema:e,effect:{type:"preprocess",transform:t},typeName:$.ZodEffects,...q(n)});var Xe=class extends W{_parse(e){return this._getType(e)===O.undefined?Ne(void 0):this._def.innerType._parse(e)}unwrap(){return this._def.innerType}};Xe.create=(t,e)=>new Xe({innerType:t,typeName:$.ZodOptional,...q(e)});var pt=class extends W{_parse(e){return this._getType(e)===O.null?Ne(null):this._def.innerType._parse(e)}unwrap(){return this._def.innerType}};pt.create=(t,e)=>new pt({innerType:t,typeName:$.ZodNullable,...q(e)});var tn=class extends W{_parse(e){let{ctx:n}=this._processInputParams(e),r=n.data;return n.parsedType===O.undefined&&(r=this._def.defaultValue()),this._def.innerType._parse({data:r,path:n.path,parent:n})}removeDefault(){return this._def.innerType}};tn.create=(t,e)=>new tn({innerType:t,typeName:$.ZodDefault,defaultValue:typeof e.default=="function"?e.default:()=>e.default,...q(e)});var nn=class extends W{_parse(e){let{ctx:n}=this._processInputParams(e),r={...n,common:{...n.common,issues:[]}},o=this._def.innerType._parse({data:r.data,path:r.path,parent:{...r}});return Cn(o)?o.then(i=>({status:"valid",value:i.status==="valid"?i.value:this._def.catchValue({get error(){return new Ue(r.common.issues)},input:r.data})})):{status:"valid",value:o.status==="valid"?o.value:this._def.catchValue({get error(){return new Ue(r.common.issues)},input:r.data})}}removeCatch(){return this._def.innerType}};nn.create=(t,e)=>new nn({innerType:t,typeName:$.ZodCatch,catchValue:typeof e.catch=="function"?e.catch:()=>e.catch,...q(e)});var Dn=class extends W{_parse(e){if(this._getType(e)!==O.nan){let r=this._getOrReturnCtx(e);return N(r,{code:k.invalid_type,expected:O.nan,received:r.parsedType}),z}return{status:"valid",value:e.data}}};Dn.create=t=>new Dn({typeName:$.ZodNaN,...q(t)});var qh=Symbol("zod_brand"),ur=class extends W{_parse(e){let{ctx:n}=this._processInputParams(e),r=n.data;return this._def.type._parse({data:r,path:n.path,parent:n})}unwrap(){return this._def.type}},dr=class t extends W{_parse(e){let{status:n,ctx:r}=this._processInputParams(e);if(r.common.async)return(async()=>{let i=await this._def.in._parseAsync({data:r.data,path:r.path,parent:r});return i.status==="aborted"?z:i.status==="dirty"?(n.dirty(),$t(i.value)):this._def.out._parseAsync({data:i.value,path:r.path,parent:r})})();{let o=this._def.in._parseSync({data:r.data,path:r.path,parent:r});return o.status==="aborted"?z:o.status==="dirty"?(n.dirty(),{status:"dirty",value:o.value}):this._def.out._parseSync({data:o.value,path:r.path,parent:r})}}static create(e,n){return new t({in:e,out:n,typeName:$.ZodPipeline})}},rn=class extends W{_parse(e){let n=this._def.innerType._parse(e),r=o=>(Ct(o)&&(o.value=Object.freeze(o.value)),o);return Cn(n)?n.then(o=>r(o)):r(n)}unwrap(){return this._def.innerType}};rn.create=(t,e)=>new rn({innerType:t,typeName:$.ZodReadonly,...q(e)});function Tc(t,e){let n=typeof t=="function"?t(e):typeof t=="string"?{message:t}:t;return typeof n=="string"?{message:n}:n}function Ic(t,e={},n){return t?Ot.create().superRefine((r,o)=>{let i=t(r);if(i instanceof Promise)return i.then(s=>{if(!s){let a=Tc(e,r),l=a.fatal??n??!0;o.addIssue({code:"custom",...a,fatal:l})}});if(!i){let s=Tc(e,r),a=s.fatal??n??!0;o.addIssue({code:"custom",...s,fatal:a})}}):Ot.create()}var Wh={object:He.lazycreate},$;(function(t){t.ZodString="ZodString",t.ZodNumber="ZodNumber",t.ZodNaN="ZodNaN",t.ZodBigInt="ZodBigInt",t.ZodBoolean="ZodBoolean",t.ZodDate="ZodDate",t.ZodSymbol="ZodSymbol",t.ZodUndefined="ZodUndefined",t.ZodNull="ZodNull",t.ZodAny="ZodAny",t.ZodUnknown="ZodUnknown",t.ZodNever="ZodNever",t.ZodVoid="ZodVoid",t.ZodArray="ZodArray",t.ZodObject="ZodObject",t.ZodUnion="ZodUnion",t.ZodDiscriminatedUnion="ZodDiscriminatedUnion",t.ZodIntersection="ZodIntersection",t.ZodTuple="ZodTuple",t.ZodRecord="ZodRecord",t.ZodMap="ZodMap",t.ZodSet="ZodSet",t.ZodFunction="ZodFunction",t.ZodLazy="ZodLazy",t.ZodLiteral="ZodLiteral",t.ZodEnum="ZodEnum",t.ZodEffects="ZodEffects",t.ZodNativeEnum="ZodNativeEnum",t.ZodOptional="ZodOptional",t.ZodNullable="ZodNullable",t.ZodDefault="ZodDefault",t.ZodCatch="ZodCatch",t.ZodPromise="ZodPromise",t.ZodBranded="ZodBranded",t.ZodPipeline="ZodPipeline",t.ZodReadonly="ZodReadonly"})($||($={}));var Xh=(t,e={message:`Input not instance of ${t.name}`})=>Ic(n=>n instanceof t,e),Rc=Nt.create,Cc=Bt.create,Yh=Dn.create,Kh=Vt.create,Nc=jt.create,Zh=qt.create,Qh=On.create,Jh=Wt.create,ef=Xt.create,tf=Ot.create,nf=xt.create,rf=et.create,of=Mn.create,sf=Et.create,af=He.create,lf=He.strictCreate,cf=Yt.create,uf=lo.create,df=Kt.create,pf=dt.create,hf=co.create,ff=Ln.create,mf=Pn.create,gf=uo.create,bf=Zt.create,vf=Qt.create,yf=Jt.create,xf=en.create,Ef=Mt.create,wf=Ke.create,Tf=Xe.create,_f=pt.create,Sf=Ke.createWithPreprocess,Af=dr.create,kf=()=>Rc().optional(),If=()=>Cc().optional(),Rf=()=>Nc().optional(),Cf={string:(t=>Nt.create({...t,coerce:!0})),number:(t=>Bt.create({...t,coerce:!0})),boolean:(t=>jt.create({...t,coerce:!0})),bigint:(t=>Vt.create({...t,coerce:!0})),date:(t=>qt.create({...t,coerce:!0}))};var Nf=z;var Of=u.record(u.any()),on=Of.optional();function Oc(t,e){return e===void 0?t:t===void 0?{...e}:{...t,...e}}var Mf=u.object({name:u.string(),arguments:u.string()}),Lf=u.object({id:u.string(),type:u.literal("function"),function:Mf,encryptedValue:u.string().optional(),metadata:on}),po=u.object({id:u.string(),role:u.string(),content:u.string().optional(),name:u.string().optional(),encryptedValue:u.string().optional(),subagentRunId:u.string().optional(),metadata:on}),Pf=u.object({type:u.literal("text"),text:u.string()}),Df=u.object({type:u.literal("data"),value:u.string(),mimeType:u.string()}),Uf=u.object({type:u.literal("url"),value:u.string(),mimeType:u.string().optional()}),ho=u.discriminatedUnion("type",[Df,Uf]),Hf=u.object({type:u.literal("image"),source:ho,metadata:u.unknown().optional()}),Ff=u.object({type:u.literal("audio"),source:ho,metadata:u.unknown().optional()}),Gf=u.object({type:u.literal("video"),source:ho,metadata:u.unknown().optional()}),zf=u.object({type:u.literal("document"),source:ho,metadata:u.unknown().optional()});var Mc=u.object({type:u.literal("binary"),mimeType:u.string(),id:u.string().optional(),url:u.string().optional(),data:u.string().optional(),filename:u.string().optional()}),Lc=(t,e)=>{!t.id&&!t.url&&!t.data&&e.addIssue({code:u.ZodIssueCode.custom,message:"BinaryInputContent requires at least one of id, url, or data.",path:["id"]})},ME=Mc.superRefine((t,e)=>{Lc(t,e)}),$f=u.discriminatedUnion("type",[Pf,Hf,Ff,Gf,zf,Mc]),Bf=$f.superRefine((t,e)=>{t.type==="binary"&&Lc(t,e)}),Vf=po.extend({role:u.literal("developer"),content:u.string()}),jf=po.extend({role:u.literal("system"),content:u.string()}),qf=po.extend({role:u.literal("assistant"),content:u.string().optional(),toolCalls:u.array(Lf).optional()}),Wf=po.extend({role:u.literal("user"),content:u.union([u.string(),u.array(Bf)])}),Xf=u.object({id:u.string(),content:u.string(),role:u.literal("tool"),toolCallId:u.string(),error:u.string().optional(),encryptedValue:u.string().optional(),subagentRunId:u.string().optional(),metadata:on}),Yf=u.object({id:u.string(),role:u.literal("activity"),activityType:u.string(),content:u.record(u.any()),subagentRunId:u.string().optional(),metadata:on}),Kf=u.object({id:u.string(),role:u.literal("reasoning"),content:u.string(),encryptedValue:u.string().optional(),subagentRunId:u.string().optional(),metadata:on}),Pc=u.discriminatedUnion("role",[Vf,jf,qf,Wf,Xf,Yf,Kf]),LE=u.union([u.literal("developer"),u.literal("system"),u.literal("assistant"),u.literal("user"),u.literal("tool"),u.literal("activity"),u.literal("reasoning")]),Zf=u.object({description:u.string(),value:u.string()}),Dc=u.object({name:u.string(),description:u.string(),parameters:u.any(),metadata:u.record(u.any()).optional()}),Qf=u.object({id:u.string(),reason:u.string(),message:u.string().optional(),toolCallId:u.string().optional(),responseSchema:u.record(u.any()).optional(),expiresAt:u.string().optional(),metadata:u.record(u.any()).optional(),subagentRunId:u.string().optional()}),Jf=u.object({interruptId:u.string(),status:u.enum(["resolved","cancelled"]),payload:u.any().optional(),metadata:on}),em=u.object({threadId:u.string(),runId:u.string(),parentRunId:u.string().optional(),state:u.any().transform(t=>t??void 0),messages:u.array(Pc),tools:u.array(Dc),context:u.array(Zf),forwardedProps:u.any(),resume:u.array(Jf).optional()}),tm=u.any(),B=class extends Error{constructor(t){super(t)}},Ks=class extends B{constructor(){super("Connect not implemented. This method is not supported by the current agent.")}},nm=u.object({name:u.string(),description:u.string().optional()}),rm=u.object({name:u.string().optional(),type:u.string().optional(),description:u.string().optional(),version:u.string().optional(),provider:u.string().optional(),documentationUrl:u.string().optional(),metadata:u.record(u.unknown()).optional()}),om=u.object({streaming:u.boolean().optional(),websocket:u.boolean().optional(),httpBinary:u.boolean().optional(),pushNotifications:u.boolean().optional(),resumable:u.boolean().optional()}),im=u.object({supported:u.boolean().optional(),items:u.array(Dc).optional(),parallelCalls:u.boolean().optional(),clientProvided:u.boolean().optional()}),sm=u.object({structuredOutput:u.boolean().optional(),supportedMimeTypes:u.array(u.string()).optional()}),am=u.object({snapshots:u.boolean().optional(),deltas:u.boolean().optional(),memory:u.boolean().optional(),persistentState:u.boolean().optional()}),lm=u.object({supported:u.boolean().optional(),delegation:u.boolean().optional(),handoffs:u.boolean().optional(),subAgents:u.array(nm).optional()}),cm=u.object({supported:u.boolean().optional(),streaming:u.boolean().optional(),encrypted:u.boolean().optional()}),um=u.object({image:u.boolean().optional(),audio:u.boolean().optional(),video:u.boolean().optional(),pdf:u.boolean().optional(),file:u.boolean().optional()}),dm=u.object({image:u.boolean().optional(),audio:u.boolean().optional()}),pm=u.object({input:um.optional(),output:dm.optional()}),hm=u.object({codeExecution:u.boolean().optional(),sandboxed:u.boolean().optional(),maxIterations:u.number().optional(),maxExecutionTime:u.number().optional()}),fm=u.object({supported:u.boolean().optional(),approvals:u.boolean().optional(),interventions:u.boolean().optional(),feedback:u.boolean().optional(),interrupts:u.boolean().optional(),approveWithEdits:u.boolean().optional()}),PE=u.object({identity:rm.optional(),transport:om.optional(),tools:im.optional(),output:sm.optional(),state:am.optional(),multiAgent:lm.optional(),reasoning:cm.optional(),multimodal:pm.optional(),execution:hm.optional(),humanInTheLoop:fm.optional(),custom:u.record(u.unknown()).optional()}),Uc=u.union([u.literal("developer"),u.literal("system"),u.literal("assistant"),u.literal("user")]),g=(function(t){return t.TEXT_MESSAGE_START="TEXT_MESSAGE_START",t.TEXT_MESSAGE_CONTENT="TEXT_MESSAGE_CONTENT",t.TEXT_MESSAGE_END="TEXT_MESSAGE_END",t.TEXT_MESSAGE_CHUNK="TEXT_MESSAGE_CHUNK",t.TOOL_CALL_START="TOOL_CALL_START",t.TOOL_CALL_ARGS="TOOL_CALL_ARGS",t.TOOL_CALL_END="TOOL_CALL_END",t.TOOL_CALL_CHUNK="TOOL_CALL_CHUNK",t.TOOL_CALL_RESULT="TOOL_CALL_RESULT",t.THINKING_START="THINKING_START",t.THINKING_END="THINKING_END",t.THINKING_TEXT_MESSAGE_START="THINKING_TEXT_MESSAGE_START",t.THINKING_TEXT_MESSAGE_CONTENT="THINKING_TEXT_MESSAGE_CONTENT",t.THINKING_TEXT_MESSAGE_END="THINKING_TEXT_MESSAGE_END",t.STATE_SNAPSHOT="STATE_SNAPSHOT",t.STATE_DELTA="STATE_DELTA",t.MESSAGES_SNAPSHOT="MESSAGES_SNAPSHOT",t.ACTIVITY_SNAPSHOT="ACTIVITY_SNAPSHOT",t.ACTIVITY_DELTA="ACTIVITY_DELTA",t.RAW="RAW",t.CUSTOM="CUSTOM",t.RUN_STARTED="RUN_STARTED",t.RUN_FINISHED="RUN_FINISHED",t.RUN_ERROR="RUN_ERROR",t.STEP_STARTED="STEP_STARTED",t.STEP_FINISHED="STEP_FINISHED",t.REASONING_START="REASONING_START",t.REASONING_MESSAGE_START="REASONING_MESSAGE_START",t.REASONING_MESSAGE_CONTENT="REASONING_MESSAGE_CONTENT",t.REASONING_MESSAGE_END="REASONING_MESSAGE_END",t.REASONING_MESSAGE_CHUNK="REASONING_MESSAGE_CHUNK",t.REASONING_END="REASONING_END",t.REASONING_ENCRYPTED_VALUE="REASONING_ENCRYPTED_VALUE",t.SUBAGENT_STARTED="SUBAGENT_STARTED",t.SUBAGENT_FINISHED="SUBAGENT_FINISHED",t.SUBAGENT_ERROR="SUBAGENT_ERROR",t})({}),Q=u.object({type:u.nativeEnum(g),timestamp:u.number().optional(),rawEvent:u.any().optional(),metadata:on}).passthrough(),mm=Q.extend({type:u.literal(g.TEXT_MESSAGE_START),messageId:u.string(),role:Uc.default("assistant"),name:u.string().optional(),subagentRunId:u.string().optional()}),Hc=Q.extend({type:u.literal(g.TEXT_MESSAGE_CONTENT),messageId:u.string(),delta:u.string(),subagentRunId:u.string().optional()}),gm=Q.extend({type:u.literal(g.TEXT_MESSAGE_END),messageId:u.string(),subagentRunId:u.string().optional()}),bm=Q.extend({type:u.literal(g.TEXT_MESSAGE_CHUNK),messageId:u.string().optional(),role:Uc.optional(),delta:u.string().optional(),name:u.string().optional(),subagentRunId:u.string().optional()}),vm=Q.extend({type:u.literal(g.THINKING_TEXT_MESSAGE_START)}),ym=Hc.omit({messageId:!0,type:!0,subagentRunId:!0}).extend({type:u.literal(g.THINKING_TEXT_MESSAGE_CONTENT)}),xm=Q.extend({type:u.literal(g.THINKING_TEXT_MESSAGE_END)}),Em=Q.extend({type:u.literal(g.TOOL_CALL_START),toolCallId:u.string(),toolCallName:u.string(),parentMessageId:u.string().nullable().optional().transform(t=>t??void 0),subagentRunId:u.string().optional()}),wm=Q.extend({type:u.literal(g.TOOL_CALL_ARGS),toolCallId:u.string(),delta:u.string(),subagentRunId:u.string().optional()}),Tm=Q.extend({type:u.literal(g.TOOL_CALL_END),toolCallId:u.string(),subagentRunId:u.string().optional()}),_m=Q.extend({messageId:u.string(),type:u.literal(g.TOOL_CALL_RESULT),toolCallId:u.string(),content:u.string(),role:u.literal("tool").optional(),subagentRunId:u.string().optional()}),Sm=Q.extend({type:u.literal(g.TOOL_CALL_CHUNK),toolCallId:u.string().optional(),toolCallName:u.string().optional(),parentMessageId:u.string().nullable().optional().transform(t=>t??void 0),delta:u.string().optional(),subagentRunId:u.string().optional()}),Am=Q.extend({type:u.literal(g.THINKING_START),title:u.string().optional()}),km=Q.extend({type:u.literal(g.THINKING_END)}),Im=Q.extend({type:u.literal(g.STATE_SNAPSHOT),snapshot:tm,subagentRunId:u.string().optional()}),Rm=Q.extend({type:u.literal(g.STATE_DELTA),delta:u.array(u.any()),subagentRunId:u.string().optional()}),Cm=Q.extend({type:u.literal(g.MESSAGES_SNAPSHOT),messages:u.array(Pc)}),Nm=Q.extend({type:u.literal(g.ACTIVITY_SNAPSHOT),messageId:u.string(),activityType:u.string(),content:u.record(u.any()),replace:u.boolean().optional().default(!0),subagentRunId:u.string().optional()}),Om=Q.extend({type:u.literal(g.ACTIVITY_DELTA),messageId:u.string(),activityType:u.string(),patch:u.array(u.any()),subagentRunId:u.string().optional()}),Mm=Q.extend({type:u.literal(g.RAW),event:u.any(),source:u.string().optional(),subagentRunId:u.string().optional()}),Lm=Q.extend({type:u.literal(g.CUSTOM),name:u.string(),value:u.any(),subagentRunId:u.string().optional()}),Pm=Q.extend({type:u.literal(g.RUN_STARTED),threadId:u.string(),runId:u.string(),parentRunId:u.string().optional(),input:em.optional()}),Dm=u.object({type:u.literal("success")}).strict(),Um=u.object({type:u.literal("interrupt"),interrupts:u.array(Qf).min(1)}).strict(),Hm=u.discriminatedUnion("type",[Dm,Um]),Fc=u.object({provider:u.string().optional(),model:u.string().optional(),inputTokens:u.number().int().nonnegative().optional(),outputTokens:u.number().int().nonnegative().optional(),totalTokens:u.number().int().nonnegative().optional(),reasoningTokens:u.number().int().nonnegative().optional(),cachedInputTokens:u.number().int().nonnegative().optional()}),Fm=Q.extend({type:u.literal(g.RUN_FINISHED),threadId:u.string(),runId:u.string(),result:u.any().optional(),outcome:Hm.nullable().optional().transform(t=>t??void 0),usage:u.array(Fc).optional()}),Gm=Q.extend({type:u.literal(g.RUN_ERROR),message:u.string(),code:u.string().optional(),usage:u.array(Fc).optional()}),zm=Q.extend({type:u.literal(g.STEP_STARTED),stepName:u.string(),subagentRunId:u.string().optional()}),$m=Q.extend({type:u.literal(g.STEP_FINISHED),stepName:u.string(),subagentRunId:u.string().optional()}),Bm=u.union([u.literal("tool-call"),u.literal("message")]),Vm=Q.extend({type:u.literal(g.REASONING_START),messageId:u.string(),subagentRunId:u.string().optional()}),jm=Q.extend({type:u.literal(g.REASONING_MESSAGE_START),messageId:u.string(),role:u.literal("reasoning"),subagentRunId:u.string().optional()}),qm=Q.extend({type:u.literal(g.REASONING_MESSAGE_CONTENT),messageId:u.string(),delta:u.string(),subagentRunId:u.string().optional()}),Wm=Q.extend({type:u.literal(g.REASONING_MESSAGE_END),messageId:u.string(),subagentRunId:u.string().optional()}),Xm=Q.extend({type:u.literal(g.REASONING_MESSAGE_CHUNK),messageId:u.string().optional(),delta:u.string().optional(),subagentRunId:u.string().optional()}),Ym=Q.extend({type:u.literal(g.REASONING_END),messageId:u.string(),subagentRunId:u.string().optional()}),Km=Q.extend({type:u.literal(g.REASONING_ENCRYPTED_VALUE),subtype:Bm,entityId:u.string(),encryptedValue:u.string(),subagentRunId:u.string().optional()}),Zm=Q.extend({type:u.literal(g.SUBAGENT_STARTED),subagentRunId:u.string(),name:u.string(),description:u.string().optional(),parentSubagentRunId:u.string().optional(),parentToolCallId:u.string().optional(),parentMessageId:u.string().optional()}),Qm=u.object({type:u.literal("success")}).strict(),Jm=u.object({type:u.literal("suspended"),interruptIds:u.array(u.string()).optional()}).strict(),eg=u.discriminatedUnion("type",[Qm,Jm]),tg=Q.extend({type:u.literal(g.SUBAGENT_FINISHED),subagentRunId:u.string(),result:u.any().optional(),outcome:eg.optional()}),ng=Q.extend({type:u.literal(g.SUBAGENT_ERROR),subagentRunId:u.string(),message:u.string(),code:u.string().optional()}),fo=u.discriminatedUnion("type",[mm,Hc,gm,bm,Am,km,vm,ym,xm,Em,wm,Tm,Sm,_m,Im,Rm,Cm,Nm,Om,Mm,Lm,Pm,Fm,Gm,zm,$m,Vm,jm,qm,Wm,Xm,Ym,Km,Zm,tg,ng]);var Zs={};Is(Zs,{JsonPatchError:()=>me,_areEquals:()=>fr,applyOperation:()=>sn,applyPatch:()=>Eo,applyReducer:()=>ag,deepClone:()=>ig,getValueByPointer:()=>yo,validate:()=>zc,validator:()=>xo});var rg=(function(){var t=function(e,n){return t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(r,o){r.__proto__=o}||function(r,o){for(var i in o)o.hasOwnProperty(i)&&(r[i]=o[i])},t(e,n)};return function(e,n){t(e,n);function r(){this.constructor=e}e.prototype=n===null?Object.create(n):(r.prototype=n.prototype,new r)}})(),og=Object.prototype.hasOwnProperty;function go(t,e){return og.call(t,e)}function bo(t){if(Array.isArray(t)){for(var e=new Array(t.length),n=0;n<e.length;n++)e[n]=""+n;return e}if(Object.keys)return Object.keys(t);var r=[];for(var o in t)go(t,o)&&r.push(o);return r}function Ae(t){switch(typeof t){case"object":return JSON.parse(JSON.stringify(t));case"undefined":return null;default:return t}}function vo(t){for(var e=0,n=t.length,r;e<n;){if(r=t.charCodeAt(e),r>=48&&r<=57){e++;continue}return!1}return!0}function ht(t){return t.indexOf("/")===-1&&t.indexOf("~")===-1?t:t.replace(/~/g,"~0").replace(/\//g,"~1")}function pr(t){return t.replace(/~1/g,"/").replace(/~0/g,"~")}function mo(t){if(t===void 0)return!0;if(t){if(Array.isArray(t)){for(var e=0,n=t.length;e<n;e++)if(mo(t[e]))return!0}else if(typeof t=="object"){for(var r=bo(t),o=r.length,i=0;i<o;i++)if(mo(t[r[i]]))return!0}}return!1}function Gc(t,e){var n=[t];for(var r in e){var o=typeof e[r]=="object"?JSON.stringify(e[r],null,2):e[r];typeof o<"u"&&n.push(r+": "+o)}return n.join(`
`)}var hr=(function(t){rg(e,t);function e(n,r,o,i,s){var a=this.constructor,l=t.call(this,Gc(n,{name:r,index:o,operation:i,tree:s}))||this;return l.name=r,l.index=o,l.operation=i,l.tree=s,Object.setPrototypeOf(l,a.prototype),l.message=Gc(n,{name:r,index:o,operation:i,tree:s}),l}return e})(Error);var me=hr,ig=Ae,Un={add:function(t,e,n){return t[e]=this.value,{newDocument:n}},remove:function(t,e,n){var r=t[e];return delete t[e],{newDocument:n,removed:r}},replace:function(t,e,n){var r=t[e];return t[e]=this.value,{newDocument:n,removed:r}},move:function(t,e,n){var r=yo(n,this.path);r&&(r=Ae(r));var o=sn(n,{op:"remove",path:this.from}).removed;return sn(n,{op:"add",path:this.path,value:o}),{newDocument:n,removed:r}},copy:function(t,e,n){var r=yo(n,this.from);return sn(n,{op:"add",path:this.path,value:Ae(r)}),{newDocument:n}},test:function(t,e,n){return{newDocument:n,test:fr(t[e],this.value)}},_get:function(t,e,n){return this.value=t[e],{newDocument:n}}},sg={add:function(t,e,n){return vo(e)?t.splice(e,0,this.value):t[e]=this.value,{newDocument:n,index:e}},remove:function(t,e,n){var r=t.splice(e,1);return{newDocument:n,removed:r[0]}},replace:function(t,e,n){var r=t[e];return t[e]=this.value,{newDocument:n,removed:r}},move:Un.move,copy:Un.copy,test:Un.test,_get:Un._get};function yo(t,e){if(e=="")return t;var n={op:"_get",path:e};return sn(t,n),n.value}function sn(t,e,n,r,o,i){if(n===void 0&&(n=!1),r===void 0&&(r=!0),o===void 0&&(o=!0),i===void 0&&(i=0),n&&(typeof n=="function"?n(e,0,t,e.path):xo(e,0)),e.path===""){var s={newDocument:t};if(e.op==="add")return s.newDocument=e.value,s;if(e.op==="replace")return s.newDocument=e.value,s.removed=t,s;if(e.op==="move"||e.op==="copy")return s.newDocument=yo(t,e.from),e.op==="move"&&(s.removed=t),s;if(e.op==="test"){if(s.test=fr(t,e.value),s.test===!1)throw new me("Test operation failed","TEST_OPERATION_FAILED",i,e,t);return s.newDocument=t,s}else{if(e.op==="remove")return s.removed=t,s.newDocument=null,s;if(e.op==="_get")return e.value=t,s;if(n)throw new me("Operation `op` property is not one of operations defined in RFC-6902","OPERATION_OP_INVALID",i,e,t);return s}}else{r||(t=Ae(t));var a=e.path||"",l=a.split("/"),c=t,d=1,m=l.length,x=void 0,f=void 0,p=void 0;for(typeof n=="function"?p=n:p=xo;;){if(f=l[d],f&&f.indexOf("~")!=-1&&(f=pr(f)),o&&(f=="__proto__"||f=="prototype"&&d>0&&l[d-1]=="constructor"))throw new TypeError("JSON-Patch: modifying `__proto__` or `constructor/prototype` prop is banned for security reasons, if this was on purpose, please set `banPrototypeModifications` flag false and pass it to this function. More info in fast-json-patch README");if(n&&x===void 0&&(c[f]===void 0?x=l.slice(0,d).join("/"):d==m-1&&(x=e.path),x!==void 0&&p(e,0,t,x)),d++,Array.isArray(c)){if(f==="-")f=c.length;else{if(n&&!vo(f))throw new me("Expected an unsigned base-10 integer value, making the new referenced value the array element with the zero-based index","OPERATION_PATH_ILLEGAL_ARRAY_INDEX",i,e,t);vo(f)&&(f=~~f)}if(d>=m){if(n&&e.op==="add"&&f>c.length)throw new me("The specified index MUST NOT be greater than the number of elements in the array","OPERATION_VALUE_OUT_OF_BOUNDS",i,e,t);var s=sg[e.op].call(e,c,f,t);if(s.test===!1)throw new me("Test operation failed","TEST_OPERATION_FAILED",i,e,t);return s}}else if(d>=m){var s=Un[e.op].call(e,c,f,t);if(s.test===!1)throw new me("Test operation failed","TEST_OPERATION_FAILED",i,e,t);return s}if(c=c[f],n&&d<m&&(!c||typeof c!="object"))throw new me("Cannot perform operation at the desired path","OPERATION_PATH_UNRESOLVABLE",i,e,t)}}}function Eo(t,e,n,r,o){if(r===void 0&&(r=!0),o===void 0&&(o=!0),n&&!Array.isArray(e))throw new me("Patch sequence must be an array","SEQUENCE_NOT_AN_ARRAY");r||(t=Ae(t));for(var i=new Array(e.length),s=0,a=e.length;s<a;s++)i[s]=sn(t,e[s],n,!0,o,s),t=i[s].newDocument;return i.newDocument=t,i}function ag(t,e,n){var r=sn(t,e);if(r.test===!1)throw new me("Test operation failed","TEST_OPERATION_FAILED",n,e,t);return r.newDocument}function xo(t,e,n,r){if(typeof t!="object"||t===null||Array.isArray(t))throw new me("Operation is not an object","OPERATION_NOT_AN_OBJECT",e,t,n);if(Un[t.op]){if(typeof t.path!="string")throw new me("Operation `path` property is not a string","OPERATION_PATH_INVALID",e,t,n);if(t.path.indexOf("/")!==0&&t.path.length>0)throw new me('Operation `path` property must start with "/"',"OPERATION_PATH_INVALID",e,t,n);if((t.op==="move"||t.op==="copy")&&typeof t.from!="string")throw new me("Operation `from` property is not present (applicable in `move` and `copy` operations)","OPERATION_FROM_REQUIRED",e,t,n);if((t.op==="add"||t.op==="replace"||t.op==="test")&&t.value===void 0)throw new me("Operation `value` property is not present (applicable in `add`, `replace` and `test` operations)","OPERATION_VALUE_REQUIRED",e,t,n);if((t.op==="add"||t.op==="replace"||t.op==="test")&&mo(t.value))throw new me("Operation `value` property is not present (applicable in `add`, `replace` and `test` operations)","OPERATION_VALUE_CANNOT_CONTAIN_UNDEFINED",e,t,n);if(n){if(t.op=="add"){var o=t.path.split("/").length,i=r.split("/").length;if(o!==i+1&&o!==i)throw new me("Cannot perform an `add` operation at the desired path","OPERATION_PATH_CANNOT_ADD",e,t,n)}else if(t.op==="replace"||t.op==="remove"||t.op==="_get"){if(t.path!==r)throw new me("Cannot perform the operation at a path that does not exist","OPERATION_PATH_UNRESOLVABLE",e,t,n)}else if(t.op==="move"||t.op==="copy"){var s={op:"_get",path:t.from,value:void 0},a=zc([s],n);if(a&&a.name==="OPERATION_PATH_UNRESOLVABLE")throw new me("Cannot perform the operation from a path that does not exist","OPERATION_FROM_UNRESOLVABLE",e,t,n)}}}else throw new me("Operation `op` property is not one of operations defined in RFC-6902","OPERATION_OP_INVALID",e,t,n)}function zc(t,e,n){try{if(!Array.isArray(t))throw new me("Patch sequence must be an array","SEQUENCE_NOT_AN_ARRAY");if(e)Eo(Ae(e),Ae(t),n||!0);else{n=n||xo;for(var r=0;r<t.length;r++)n(t[r],r,e,void 0)}}catch(o){if(o instanceof me)return o;throw o}}function fr(t,e){if(t===e)return!0;if(t&&e&&typeof t=="object"&&typeof e=="object"){var n=Array.isArray(t),r=Array.isArray(e),o,i,s;if(n&&r){if(i=t.length,i!=e.length)return!1;for(o=i;o--!==0;)if(!fr(t[o],e[o]))return!1;return!0}if(n!=r)return!1;var a=Object.keys(t);if(i=a.length,i!==Object.keys(e).length)return!1;for(o=i;o--!==0;)if(!e.hasOwnProperty(a[o]))return!1;for(o=i;o--!==0;)if(s=a[o],!fr(t[s],e[s]))return!1;return!0}return t!==t&&e!==e}var ta={};Is(ta,{compare:()=>mg,generate:()=>Qs,observe:()=>fg,unobserve:()=>hg});var Js=new WeakMap,lg=(function(){function t(e){this.observers=new Map,this.obj=e}return t})(),cg=(function(){function t(e,n){this.callback=e,this.observer=n}return t})();function ug(t){return Js.get(t)}function dg(t,e){return t.observers.get(e)}function pg(t,e){t.observers.delete(e.callback)}function hg(t,e){e.unobserve()}function fg(t,e){var n=[],r,o=ug(t);if(!o)o=new lg(t),Js.set(t,o);else{var i=dg(o,e);r=i&&i.observer}if(r)return r;if(r={},o.value=Ae(t),e){r.callback=e,r.next=null;var s=function(){Qs(r)},a=function(){clearTimeout(r.next),r.next=setTimeout(s)};typeof window<"u"&&(window.addEventListener("mouseup",a),window.addEventListener("keyup",a),window.addEventListener("mousedown",a),window.addEventListener("keydown",a),window.addEventListener("change",a))}return r.patches=n,r.object=t,r.unobserve=function(){Qs(r),clearTimeout(r.next),pg(o,r),typeof window<"u"&&(window.removeEventListener("mouseup",a),window.removeEventListener("keyup",a),window.removeEventListener("mousedown",a),window.removeEventListener("keydown",a),window.removeEventListener("change",a))},o.observers.set(e,new cg(e,r)),r}function Qs(t,e){e===void 0&&(e=!1);var n=Js.get(t.object);ea(n.value,t.object,t.patches,"",e),t.patches.length&&Eo(n.value,t.patches);var r=t.patches;return r.length>0&&(t.patches=[],t.callback&&t.callback(r)),r}function ea(t,e,n,r,o){if(e!==t){typeof e.toJSON=="function"&&(e=e.toJSON());for(var i=bo(e),s=bo(t),a=!1,l=!1,c=s.length-1;c>=0;c--){var d=s[c],m=t[d];if(go(e,d)&&!(e[d]===void 0&&m!==void 0&&Array.isArray(e)===!1)){var x=e[d];typeof m=="object"&&m!=null&&typeof x=="object"&&x!=null&&Array.isArray(m)===Array.isArray(x)?ea(m,x,n,r+"/"+ht(d),o):m!==x&&(a=!0,o&&n.push({op:"test",path:r+"/"+ht(d),value:Ae(m)}),n.push({op:"replace",path:r+"/"+ht(d),value:Ae(x)}))}else Array.isArray(t)===Array.isArray(e)?(o&&n.push({op:"test",path:r+"/"+ht(d),value:Ae(m)}),n.push({op:"remove",path:r+"/"+ht(d)}),l=!0):(o&&n.push({op:"test",path:r,value:t}),n.push({op:"replace",path:r,value:e}),a=!0)}if(!(!l&&i.length==s.length))for(var c=0;c<i.length;c++){var d=i[c];!go(t,d)&&e[d]!==void 0&&n.push({op:"add",path:r+"/"+ht(d),value:Ae(e[d])})}}}function mg(t,e,n){n===void 0&&(n=!1);var r=[];return ea(t,e,r,"",n),r}var wo=Object.assign({},Zs,ta,{JsonPatchError:hr,deepClone:Ae,escapePathComponent:ht,unescapePathComponent:pr});var na=function(t,e){return na=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(n,r){n.__proto__=r}||function(n,r){for(var o in r)Object.prototype.hasOwnProperty.call(r,o)&&(n[o]=r[o])},na(t,e)};function ft(t,e){if(typeof e!="function"&&e!==null)throw new TypeError("Class extends value "+String(e)+" is not a constructor or null");na(t,e);function n(){this.constructor=t}t.prototype=e===null?Object.create(e):(n.prototype=e.prototype,new n)}function $c(t,e,n,r){function o(i){return i instanceof n?i:new n(function(s){s(i)})}return new(n||(n=Promise))(function(i,s){function a(d){try{c(r.next(d))}catch(m){s(m)}}function l(d){try{c(r.throw(d))}catch(m){s(m)}}function c(d){d.done?i(d.value):o(d.value).then(a,l)}c((r=r.apply(t,e||[])).next())})}function To(t,e){var n={label:0,sent:function(){if(i[0]&1)throw i[1];return i[1]},trys:[],ops:[]},r,o,i,s=Object.create((typeof Iterator=="function"?Iterator:Object).prototype);return s.next=a(0),s.throw=a(1),s.return=a(2),typeof Symbol=="function"&&(s[Symbol.iterator]=function(){return this}),s;function a(c){return function(d){return l([c,d])}}function l(c){if(r)throw new TypeError("Generator is already executing.");for(;s&&(s=0,c[0]&&(n=0)),n;)try{if(r=1,o&&(i=c[0]&2?o.return:c[0]?o.throw||((i=o.return)&&i.call(o),0):o.next)&&!(i=i.call(o,c[1])).done)return i;switch(o=0,i&&(c=[c[0]&2,i.value]),c[0]){case 0:case 1:i=c;break;case 4:return n.label++,{value:c[1],done:!1};case 5:n.label++,o=c[1],c=[0];continue;case 7:c=n.ops.pop(),n.trys.pop();continue;default:if(i=n.trys,!(i=i.length>0&&i[i.length-1])&&(c[0]===6||c[0]===2)){n=0;continue}if(c[0]===3&&(!i||c[1]>i[0]&&c[1]<i[3])){n.label=c[1];break}if(c[0]===6&&n.label<i[1]){n.label=i[1],i=c;break}if(i&&n.label<i[2]){n.label=i[2],n.ops.push(c);break}i[2]&&n.ops.pop(),n.trys.pop();continue}c=e.call(t,n)}catch(d){c=[6,d],o=0}finally{r=i=0}if(c[0]&5)throw c[1];return{value:c[0]?c[1]:void 0,done:!0}}}function wt(t){var e=typeof Symbol=="function"&&Symbol.iterator,n=e&&t[e],r=0;if(n)return n.call(t);if(t&&typeof t.length=="number")return{next:function(){return t&&r>=t.length&&(t=void 0),{value:t&&t[r++],done:!t}}};throw new TypeError(e?"Object is not iterable.":"Symbol.iterator is not defined.")}function Hn(t,e){var n=typeof Symbol=="function"&&t[Symbol.iterator];if(!n)return t;var r=n.call(t),o,i=[],s;try{for(;(e===void 0||e-- >0)&&!(o=r.next()).done;)i.push(o.value)}catch(a){s={error:a}}finally{try{o&&!o.done&&(n=r.return)&&n.call(r)}finally{if(s)throw s.error}}return i}function Fn(t,e,n){if(n||arguments.length===2)for(var r=0,o=e.length,i;r<o;r++)(i||!(r in e))&&(i||(i=Array.prototype.slice.call(e,0,r)),i[r]=e[r]);return t.concat(i||Array.prototype.slice.call(e))}function an(t){return this instanceof an?(this.v=t,this):new an(t)}function Bc(t,e,n){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var r=n.apply(t,e||[]),o,i=[];return o=Object.create((typeof AsyncIterator=="function"?AsyncIterator:Object).prototype),a("next"),a("throw"),a("return",s),o[Symbol.asyncIterator]=function(){return this},o;function s(f){return function(p){return Promise.resolve(p).then(f,m)}}function a(f,p){r[f]&&(o[f]=function(b){return new Promise(function(w,_){i.push([f,b,w,_])>1||l(f,b)})},p&&(o[f]=p(o[f])))}function l(f,p){try{c(r[f](p))}catch(b){x(i[0][3],b)}}function c(f){f.value instanceof an?Promise.resolve(f.value.v).then(d,m):x(i[0][2],f)}function d(f){l("next",f)}function m(f){l("throw",f)}function x(f,p){f(p),i.shift(),i.length&&l(i[0][0],i[0][1])}}function Vc(t){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var e=t[Symbol.asyncIterator],n;return e?e.call(t):(t=typeof wt=="function"?wt(t):t[Symbol.iterator](),n={},r("next"),r("throw"),r("return"),n[Symbol.asyncIterator]=function(){return this},n);function r(i){n[i]=t[i]&&function(s){return new Promise(function(a,l){s=t[i](s),o(a,l,s.done,s.value)})}}function o(i,s,a,l){Promise.resolve(l).then(function(c){i({value:c,done:a})},s)}}function X(t){return typeof t=="function"}function Gn(t){var e=function(r){Error.call(r),r.stack=new Error().stack},n=t(e);return n.prototype=Object.create(Error.prototype),n.prototype.constructor=n,n}var _o=Gn(function(t){return function(n){t(this),this.message=n?n.length+` errors occurred during unsubscription:
`+n.map(function(r,o){return o+1+") "+r.toString()}).join(`
  `):"",this.name="UnsubscriptionError",this.errors=n}});function mr(t,e){if(t){var n=t.indexOf(e);0<=n&&t.splice(n,1)}}var zn=(function(){function t(e){this.initialTeardown=e,this.closed=!1,this._parentage=null,this._finalizers=null}return t.prototype.unsubscribe=function(){var e,n,r,o,i;if(!this.closed){this.closed=!0;var s=this._parentage;if(s)if(this._parentage=null,Array.isArray(s))try{for(var a=wt(s),l=a.next();!l.done;l=a.next()){var c=l.value;c.remove(this)}}catch(b){e={error:b}}finally{try{l&&!l.done&&(n=a.return)&&n.call(a)}finally{if(e)throw e.error}}else s.remove(this);var d=this.initialTeardown;if(X(d))try{d()}catch(b){i=b instanceof _o?b.errors:[b]}var m=this._finalizers;if(m){this._finalizers=null;try{for(var x=wt(m),f=x.next();!f.done;f=x.next()){var p=f.value;try{jc(p)}catch(b){i=i??[],b instanceof _o?i=Fn(Fn([],Hn(i)),Hn(b.errors)):i.push(b)}}}catch(b){r={error:b}}finally{try{f&&!f.done&&(o=x.return)&&o.call(x)}finally{if(r)throw r.error}}}if(i)throw new _o(i)}},t.prototype.add=function(e){var n;if(e&&e!==this)if(this.closed)jc(e);else{if(e instanceof t){if(e.closed||e._hasParent(this))return;e._addParent(this)}(this._finalizers=(n=this._finalizers)!==null&&n!==void 0?n:[]).push(e)}},t.prototype._hasParent=function(e){var n=this._parentage;return n===e||Array.isArray(n)&&n.includes(e)},t.prototype._addParent=function(e){var n=this._parentage;this._parentage=Array.isArray(n)?(n.push(e),n):n?[n,e]:e},t.prototype._removeParent=function(e){var n=this._parentage;n===e?this._parentage=null:Array.isArray(n)&&mr(n,e)},t.prototype.remove=function(e){var n=this._finalizers;n&&mr(n,e),e instanceof t&&e._removeParent(this)},t.EMPTY=(function(){var e=new t;return e.closed=!0,e})(),t})();var ra=zn.EMPTY;function So(t){return t instanceof zn||t&&"closed"in t&&X(t.remove)&&X(t.add)&&X(t.unsubscribe)}function jc(t){X(t)?t():t.unsubscribe()}var tt={onUnhandledError:null,onStoppedNotification:null,Promise:void 0,useDeprecatedSynchronousErrorHandling:!1,useDeprecatedNextContext:!1};var $n={setTimeout:function(t,e){for(var n=[],r=2;r<arguments.length;r++)n[r-2]=arguments[r];var o=$n.delegate;return o?.setTimeout?o.setTimeout.apply(o,Fn([t,e],Hn(n))):setTimeout.apply(void 0,Fn([t,e],Hn(n)))},clearTimeout:function(t){var e=$n.delegate;return(e?.clearTimeout||clearTimeout)(t)},delegate:void 0};function Ao(t){$n.setTimeout(function(){var e=tt.onUnhandledError;if(e)e(t);else throw t})}function gr(){}var qc=(function(){return oa("C",void 0,void 0)})();function Wc(t){return oa("E",void 0,t)}function Xc(t){return oa("N",t,void 0)}function oa(t,e,n){return{kind:t,value:e,error:n}}var ln=null;function Bn(t){if(tt.useDeprecatedSynchronousErrorHandling){var e=!ln;if(e&&(ln={errorThrown:!1,error:null}),t(),e){var n=ln,r=n.errorThrown,o=n.error;if(ln=null,r)throw o}}else t()}function Yc(t){tt.useDeprecatedSynchronousErrorHandling&&ln&&(ln.errorThrown=!0,ln.error=t)}var br=(function(t){ft(e,t);function e(n){var r=t.call(this)||this;return r.isStopped=!1,n?(r.destination=n,So(n)&&n.add(r)):r.destination=yg,r}return e.create=function(n,r,o){return new Io(n,r,o)},e.prototype.next=function(n){this.isStopped?sa(Xc(n),this):this._next(n)},e.prototype.error=function(n){this.isStopped?sa(Wc(n),this):(this.isStopped=!0,this._error(n))},e.prototype.complete=function(){this.isStopped?sa(qc,this):(this.isStopped=!0,this._complete())},e.prototype.unsubscribe=function(){this.closed||(this.isStopped=!0,t.prototype.unsubscribe.call(this),this.destination=null)},e.prototype._next=function(n){this.destination.next(n)},e.prototype._error=function(n){try{this.destination.error(n)}finally{this.unsubscribe()}},e.prototype._complete=function(){try{this.destination.complete()}finally{this.unsubscribe()}},e})(zn);var gg=Function.prototype.bind;function ia(t,e){return gg.call(t,e)}var bg=(function(){function t(e){this.partialObserver=e}return t.prototype.next=function(e){var n=this.partialObserver;if(n.next)try{n.next(e)}catch(r){ko(r)}},t.prototype.error=function(e){var n=this.partialObserver;if(n.error)try{n.error(e)}catch(r){ko(r)}else ko(e)},t.prototype.complete=function(){var e=this.partialObserver;if(e.complete)try{e.complete()}catch(n){ko(n)}},t})(),Io=(function(t){ft(e,t);function e(n,r,o){var i=t.call(this)||this,s;if(X(n)||!n)s={next:n??void 0,error:r??void 0,complete:o??void 0};else{var a;i&&tt.useDeprecatedNextContext?(a=Object.create(n),a.unsubscribe=function(){return i.unsubscribe()},s={next:n.next&&ia(n.next,a),error:n.error&&ia(n.error,a),complete:n.complete&&ia(n.complete,a)}):s=n}return i.destination=new bg(s),i}return e})(br);function ko(t){tt.useDeprecatedSynchronousErrorHandling?Yc(t):Ao(t)}function vg(t){throw t}function sa(t,e){var n=tt.onStoppedNotification;n&&$n.setTimeout(function(){return n(t,e)})}var yg={closed:!0,next:gr,error:vg,complete:gr};var Vn=(function(){return typeof Symbol=="function"&&Symbol.observable||"@@observable"})();function jn(t){return t}function Ro(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];return aa(t)}function aa(t){return t.length===0?jn:t.length===1?t[0]:function(n){return t.reduce(function(r,o){return o(r)},n)}}var le=(function(){function t(e){e&&(this._subscribe=e)}return t.prototype.lift=function(e){var n=new t;return n.source=this,n.operator=e,n},t.prototype.subscribe=function(e,n,r){var o=this,i=Eg(e)?e:new Io(e,n,r);return Bn(function(){var s=o,a=s.operator,l=s.source;i.add(a?a.call(i,l):l?o._subscribe(i):o._trySubscribe(i))}),i},t.prototype._trySubscribe=function(e){try{return this._subscribe(e)}catch(n){e.error(n)}},t.prototype.forEach=function(e,n){var r=this;return n=Kc(n),new n(function(o,i){var s=new Io({next:function(a){try{e(a)}catch(l){i(l),s.unsubscribe()}},error:i,complete:o});r.subscribe(s)})},t.prototype._subscribe=function(e){var n;return(n=this.source)===null||n===void 0?void 0:n.subscribe(e)},t.prototype[Vn]=function(){return this},t.prototype.pipe=function(){for(var e=[],n=0;n<arguments.length;n++)e[n]=arguments[n];return aa(e)(this)},t.prototype.toPromise=function(e){var n=this;return e=Kc(e),new e(function(r,o){var i;n.subscribe(function(s){return i=s},function(s){return o(s)},function(){return r(i)})})},t.create=function(e){return new t(e)},t})();function Kc(t){var e;return(e=t??tt.Promise)!==null&&e!==void 0?e:Promise}function xg(t){return t&&X(t.next)&&X(t.error)&&X(t.complete)}function Eg(t){return t&&t instanceof br||xg(t)&&So(t)}function wg(t){return X(t?.lift)}function ge(t){return function(e){if(wg(e))return e.lift(function(n){try{return t(n,this)}catch(r){this.error(r)}});throw new TypeError("Unable to lift unknown Observable type")}}function ye(t,e,n,r,o){return new Tg(t,e,n,r,o)}var Tg=(function(t){ft(e,t);function e(n,r,o,i,s,a){var l=t.call(this,n)||this;return l.onFinalize=s,l.shouldUnsubscribe=a,l._next=r?function(c){try{r(c)}catch(d){n.error(d)}}:t.prototype._next,l._error=i?function(c){try{i(c)}catch(d){n.error(d)}finally{this.unsubscribe()}}:t.prototype._error,l._complete=o?function(){try{o()}catch(c){n.error(c)}finally{this.unsubscribe()}}:t.prototype._complete,l}return e.prototype.unsubscribe=function(){var n;if(!this.shouldUnsubscribe||this.shouldUnsubscribe()){var r=this.closed;t.prototype.unsubscribe.call(this),!r&&((n=this.onFinalize)===null||n===void 0||n.call(this))}},e})(br);var Zc=Gn(function(t){return function(){t(this),this.name="ObjectUnsubscribedError",this.message="object unsubscribed"}});var mt=(function(t){ft(e,t);function e(){var n=t.call(this)||this;return n.closed=!1,n.currentObservers=null,n.observers=[],n.isStopped=!1,n.hasError=!1,n.thrownError=null,n}return e.prototype.lift=function(n){var r=new Qc(this,this);return r.operator=n,r},e.prototype._throwIfClosed=function(){if(this.closed)throw new Zc},e.prototype.next=function(n){var r=this;Bn(function(){var o,i;if(r._throwIfClosed(),!r.isStopped){r.currentObservers||(r.currentObservers=Array.from(r.observers));try{for(var s=wt(r.currentObservers),a=s.next();!a.done;a=s.next()){var l=a.value;l.next(n)}}catch(c){o={error:c}}finally{try{a&&!a.done&&(i=s.return)&&i.call(s)}finally{if(o)throw o.error}}}})},e.prototype.error=function(n){var r=this;Bn(function(){if(r._throwIfClosed(),!r.isStopped){r.hasError=r.isStopped=!0,r.thrownError=n;for(var o=r.observers;o.length;)o.shift().error(n)}})},e.prototype.complete=function(){var n=this;Bn(function(){if(n._throwIfClosed(),!n.isStopped){n.isStopped=!0;for(var r=n.observers;r.length;)r.shift().complete()}})},e.prototype.unsubscribe=function(){this.isStopped=this.closed=!0,this.observers=this.currentObservers=null},Object.defineProperty(e.prototype,"observed",{get:function(){var n;return((n=this.observers)===null||n===void 0?void 0:n.length)>0},enumerable:!1,configurable:!0}),e.prototype._trySubscribe=function(n){return this._throwIfClosed(),t.prototype._trySubscribe.call(this,n)},e.prototype._subscribe=function(n){return this._throwIfClosed(),this._checkFinalizedStatuses(n),this._innerSubscribe(n)},e.prototype._innerSubscribe=function(n){var r=this,o=this,i=o.hasError,s=o.isStopped,a=o.observers;return i||s?ra:(this.currentObservers=null,a.push(n),new zn(function(){r.currentObservers=null,mr(a,n)}))},e.prototype._checkFinalizedStatuses=function(n){var r=this,o=r.hasError,i=r.thrownError,s=r.isStopped;o?n.error(i):s&&n.complete()},e.prototype.asObservable=function(){var n=new le;return n.source=this,n},e.create=function(n,r){return new Qc(n,r)},e})(le);var Qc=(function(t){ft(e,t);function e(n,r){var o=t.call(this)||this;return o.destination=n,o.source=r,o}return e.prototype.next=function(n){var r,o;(o=(r=this.destination)===null||r===void 0?void 0:r.next)===null||o===void 0||o.call(r,n)},e.prototype.error=function(n){var r,o;(o=(r=this.destination)===null||r===void 0?void 0:r.error)===null||o===void 0||o.call(r,n)},e.prototype.complete=function(){var n,r;(r=(n=this.destination)===null||n===void 0?void 0:n.complete)===null||r===void 0||r.call(n)},e.prototype._subscribe=function(n){var r,o;return(o=(r=this.source)===null||r===void 0?void 0:r.subscribe(n))!==null&&o!==void 0?o:ra},e})(mt);var la={now:function(){return(la.delegate||Date).now()},delegate:void 0};var Co=(function(t){ft(e,t);function e(n,r,o){n===void 0&&(n=1/0),r===void 0&&(r=1/0),o===void 0&&(o=la);var i=t.call(this)||this;return i._bufferSize=n,i._windowTime=r,i._timestampProvider=o,i._buffer=[],i._infiniteTimeWindow=!0,i._infiniteTimeWindow=r===1/0,i._bufferSize=Math.max(1,n),i._windowTime=Math.max(1,r),i}return e.prototype.next=function(n){var r=this,o=r.isStopped,i=r._buffer,s=r._infiniteTimeWindow,a=r._timestampProvider,l=r._windowTime;o||(i.push(n),!s&&i.push(a.now()+l)),this._trimBuffer(),t.prototype.next.call(this,n)},e.prototype._subscribe=function(n){this._throwIfClosed(),this._trimBuffer();for(var r=this._innerSubscribe(n),o=this,i=o._infiniteTimeWindow,s=o._buffer,a=s.slice(),l=0;l<a.length&&!n.closed;l+=i?1:2)n.next(a[l]);return this._checkFinalizedStatuses(n),r},e.prototype._trimBuffer=function(){var n=this,r=n._bufferSize,o=n._timestampProvider,i=n._buffer,s=n._infiniteTimeWindow,a=(s?1:2)*r;if(r<1/0&&a<i.length&&i.splice(0,i.length-a),!s){for(var l=o.now(),c=0,d=1;d<i.length&&i[d]<=l;d+=2)c=d;c&&i.splice(0,c+1)}},e})(mt);var No=new le(function(t){return t.complete()});function Jc(t){return t&&X(t.schedule)}function _g(t){return t[t.length-1]}function eu(t){return Jc(_g(t))?t.pop():void 0}var Oo=(function(t){return t&&typeof t.length=="number"&&typeof t!="function"});function Mo(t){return X(t?.then)}function Lo(t){return X(t[Vn])}function Po(t){return Symbol.asyncIterator&&X(t?.[Symbol.asyncIterator])}function Do(t){return new TypeError("You provided "+(t!==null&&typeof t=="object"?"an invalid object":"'"+t+"'")+" where a stream was expected. You can provide an Observable, Promise, ReadableStream, Array, AsyncIterable, or Iterable.")}function Sg(){return typeof Symbol!="function"||!Symbol.iterator?"@@iterator":Symbol.iterator}var Uo=Sg();function Ho(t){return X(t?.[Uo])}function Fo(t){return Bc(this,arguments,function(){var n,r,o,i;return To(this,function(s){switch(s.label){case 0:n=t.getReader(),s.label=1;case 1:s.trys.push([1,,9,10]),s.label=2;case 2:return[4,an(n.read())];case 3:return r=s.sent(),o=r.value,i=r.done,i?[4,an(void 0)]:[3,5];case 4:return[2,s.sent()];case 5:return[4,an(o)];case 6:return[4,s.sent()];case 7:return s.sent(),[3,2];case 8:return[3,10];case 9:return n.releaseLock(),[7];case 10:return[2]}})})}function Go(t){return X(t?.getReader)}function Ee(t){if(t instanceof le)return t;if(t!=null){if(Lo(t))return Ag(t);if(Oo(t))return kg(t);if(Mo(t))return Ig(t);if(Po(t))return tu(t);if(Ho(t))return Rg(t);if(Go(t))return Cg(t)}throw Do(t)}function Ag(t){return new le(function(e){var n=t[Vn]();if(X(n.subscribe))return n.subscribe(e);throw new TypeError("Provided object does not correctly implement Symbol.observable")})}function kg(t){return new le(function(e){for(var n=0;n<t.length&&!e.closed;n++)e.next(t[n]);e.complete()})}function Ig(t){return new le(function(e){t.then(function(n){e.closed||(e.next(n),e.complete())},function(n){return e.error(n)}).then(null,Ao)})}function Rg(t){return new le(function(e){var n,r;try{for(var o=wt(t),i=o.next();!i.done;i=o.next()){var s=i.value;if(e.next(s),e.closed)return}}catch(a){n={error:a}}finally{try{i&&!i.done&&(r=o.return)&&r.call(o)}finally{if(n)throw n.error}}e.complete()})}function tu(t){return new le(function(e){Ng(t,e).catch(function(n){return e.error(n)})})}function Cg(t){return tu(Fo(t))}function Ng(t,e){var n,r,o,i;return $c(this,void 0,void 0,function(){var s,a;return To(this,function(l){switch(l.label){case 0:l.trys.push([0,5,6,11]),n=Vc(t),l.label=1;case 1:return[4,n.next()];case 2:if(r=l.sent(),!!r.done)return[3,4];if(s=r.value,e.next(s),e.closed)return[2];l.label=3;case 3:return[3,1];case 4:return[3,11];case 5:return a=l.sent(),o={error:a},[3,11];case 6:return l.trys.push([6,,9,10]),r&&!r.done&&(i=n.return)?[4,i.call(n)]:[3,8];case 7:l.sent(),l.label=8;case 8:return[3,10];case 9:if(o)throw o.error;return[7];case 10:return[7];case 11:return e.complete(),[2]}})})}function Ze(t,e,n,r,o){r===void 0&&(r=0),o===void 0&&(o=!1);var i=e.schedule(function(){n(),o?t.add(this.schedule(null,r)):this.unsubscribe()},r);if(t.add(i),!o)return i}function zo(t,e){return e===void 0&&(e=0),ge(function(n,r){n.subscribe(ye(r,function(o){return Ze(r,t,function(){return r.next(o)},e)},function(){return Ze(r,t,function(){return r.complete()},e)},function(o){return Ze(r,t,function(){return r.error(o)},e)}))})}function $o(t,e){return e===void 0&&(e=0),ge(function(n,r){r.add(t.schedule(function(){return n.subscribe(r)},e))})}function nu(t,e){return Ee(t).pipe($o(e),zo(e))}function ru(t,e){return Ee(t).pipe($o(e),zo(e))}function ou(t,e){return new le(function(n){var r=0;return e.schedule(function(){r===t.length?n.complete():(n.next(t[r++]),n.closed||this.schedule())})})}function iu(t,e){return new le(function(n){var r;return Ze(n,e,function(){r=t[Uo](),Ze(n,e,function(){var o,i,s;try{o=r.next(),i=o.value,s=o.done}catch(a){n.error(a);return}s?n.complete():n.next(i)},0,!0)}),function(){return X(r?.return)&&r.return()}})}function Bo(t,e){if(!t)throw new Error("Iterable cannot be null");return new le(function(n){Ze(n,e,function(){var r=t[Symbol.asyncIterator]();Ze(n,e,function(){r.next().then(function(o){o.done?n.complete():n.next(o.value)})},0,!0)})})}function su(t,e){return Bo(Fo(t),e)}function au(t,e){if(t!=null){if(Lo(t))return nu(t,e);if(Oo(t))return ou(t,e);if(Mo(t))return ru(t,e);if(Po(t))return Bo(t,e);if(Ho(t))return iu(t,e);if(Go(t))return su(t,e)}throw Do(t)}function cn(t,e){return e?au(t,e):Ee(t)}function te(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];var n=eu(t);return cn(t,n)}function G(t,e){var n=X(t)?t:function(){return t},r=function(o){return o.error(n())};return new le(e?function(o){return e.schedule(r,0,o)}:r)}var lu=Gn(function(t){return function(){t(this),this.name="EmptyError",this.message="no elements in sequence"}});function Vo(t,e){var n=typeof e=="object";return new Promise(function(r,o){var i=!1,s;t.subscribe({next:function(a){s=a,i=!0},error:o,complete:function(){i?r(s):n?r(e.defaultValue):o(new lu)}})})}function Lt(t,e){return ge(function(n,r){var o=0;n.subscribe(ye(r,function(i){r.next(t.call(e,i,o++))}))})}function cu(t,e,n,r,o,i,s,a){var l=[],c=0,d=0,m=!1,x=function(){m&&!l.length&&!c&&e.complete()},f=function(b){return c<r?p(b):l.push(b)},p=function(b){i&&e.next(b),c++;var w=!1;Ee(n(b,d++)).subscribe(ye(e,function(_){o?.(_),i?f(_):e.next(_)},function(){w=!0},void 0,function(){if(w)try{c--;for(var _=function(){var S=l.shift();s?Ze(e,s,function(){return p(S)}):p(S)};l.length&&c<r;)_();x()}catch(S){e.error(S)}}))};return t.subscribe(ye(e,f,function(){m=!0,x()})),function(){a?.()}}function Fe(t,e,n){return n===void 0&&(n=1/0),X(e)?Fe(function(r,o){return Lt(function(i,s){return e(r,i,o,s)})(Ee(t(r,o)))},n):(typeof e=="number"&&(n=e),ge(function(r,o){return cu(r,o,t,n)}))}function ca(t){return t===void 0&&(t=1/0),Fe(jn,t)}function jo(t){return new le(function(e){Ee(t()).subscribe(e)})}function ua(t,e){return ge(function(n,r){var o=0;n.subscribe(ye(r,function(i){return t.call(e,i,o++)&&r.next(i)}))})}function vr(t){return ge(function(e,n){var r=null,o=!1,i;r=e.subscribe(ye(n,void 0,void 0,function(s){i=Ee(t(s,vr(t)(e))),r?(r.unsubscribe(),r=null,i.subscribe(n)):o=!0})),o&&(r.unsubscribe(),r=null,i.subscribe(n))})}function qo(t,e){return X(e)?Fe(t,e,1):Fe(t,1)}function da(t){return ge(function(e,n){var r=!1;e.subscribe(ye(n,function(o){r=!0,n.next(o)},function(){r||n.next(t),n.complete()}))})}function un(t){return ge(function(e,n){try{e.subscribe(n)}finally{n.add(t)}})}function pa(t,e){return ge(function(n,r){var o=null,i=0,s=!1,a=function(){return s&&!o&&r.complete()};n.subscribe(ye(r,function(l){o?.unsubscribe();var c=0,d=i++;Ee(t(l,d)).subscribe(o=ye(r,function(m){return r.next(e?e(l,m,d,c++):m)},function(){o=null,a()}))},function(){s=!0,a()}))})}function Wo(t){return ge(function(e,n){Ee(t).subscribe(ye(n,function(){return n.complete()},gr)),!n.closed&&e.subscribe(n)})}function Xo(t,e,n){var r=X(t)||e||n?{next:t,error:e,complete:n}:t;return r?ge(function(o,i){var s;(s=r.subscribe)===null||s===void 0||s.call(r);var a=!0;o.subscribe(ye(i,function(l){var c;(c=r.next)===null||c===void 0||c.call(r,l),i.next(l)},function(){var l;a=!1,(l=r.complete)===null||l===void 0||l.call(r),i.complete()},function(l){var c;a=!1,(c=r.error)===null||c===void 0||c.call(r,l),i.error(l)},function(){var l,c;a&&((l=r.unsubscribe)===null||l===void 0||l.call(r)),(c=r.finalize)===null||c===void 0||c.call(r)}))}):jn}function uu(t){return` \r
	`.indexOf(t)>=0}function Yo(t){for(var e=["topLevel"],n=0,r,o,i,s=function(S){return e.push(S)},a=function(S){return e[e.length-1]=S},l=function(S){r==null&&(r=n,o=e.length,i=S)},c=function(S){S===i&&(r=void 0,o=void 0,i=void 0)},d=function(){return e.pop()},m=function(){return n--},x=function(S){if("0"<=S&&S<="9"){s("number");return}switch(S){case'"':s("string");return;case"-":s("numberNeedsDigit");return;case"t":s("true");return;case"f":s("false");return;case"n":s("null");return;case"[":s("arrayNeedsValue");return;case"{":s("objectNeedsKey");return}},f=t.length;n<f;n++){var p=t[n];switch(e[e.length-1]){case"topLevel":x(p);break;case"string":switch(p){case'"':d();break;case"\\":l("stringEscape"),s("stringEscaped");break}break;case"stringEscaped":p==="u"?s("stringUnicode"):(c("stringEscape"),d());break;case"stringUnicode":n-t.lastIndexOf("u",n)===4&&(c("stringEscape"),d());break;case"number":p==="."?a("numberNeedsDigit"):p==="e"||p==="E"?a("numberNeedsExponent"):(p<"0"||p>"9")&&(m(),d());break;case"numberNeedsDigit":a("number");break;case"numberNeedsExponent":a(p==="+"||p==="-"?"numberNeedsDigit":"number");break;case"true":case"false":case"null":(p<"a"||p>"z")&&(m(),d());break;case"arrayNeedsValue":p==="]"?d():uu(p)||(c("collectionItem"),a("arrayNeedsComma"),x(p));break;case"arrayNeedsComma":p==="]"?d():p===","&&(l("collectionItem"),a("arrayNeedsValue"));break;case"objectNeedsKey":p==="}"?d():p==='"'&&(l("collectionItem"),a("objectNeedsColon"),s("string"));break;case"objectNeedsColon":p===":"&&a("objectNeedsValue");break;case"objectNeedsValue":uu(p)||(c("collectionItem"),a("objectNeedsComma"),x(p));break;case"objectNeedsComma":p==="}"?d():p===","&&(l("collectionItem"),a("objectNeedsKey"));break}}o!=null&&(e.length=o);for(var b=[r!=null?t.slice(0,r):t],w=function(S){return b.push(S.slice(t.length-t.lastIndexOf(S[0])))},_=e.length-1;_>=0;_--)switch(e[_]){case"string":b.push('"');break;case"numberNeedsDigit":case"numberNeedsExponent":b.push("0");break;case"true":w("true");break;case"false":w("false");break;case"null":w("null");break;case"arrayNeedsValue":case"arrayNeedsComma":b.push("]");break;case"objectNeedsKey":case"objectNeedsColon":case"objectNeedsValue":case"objectNeedsComma":b.push("}");break}return b.join("")}function pu(){let t=this.buf,e=this.pos,n=0,r=0;for(let i=0;i<28;i+=7){let s=t[e++];if(n|=(s&127)<<i,(s&128)==0){this.pos=e,this.assertBounds(),this.varint64Lo=n,this.varint64Hi=r;return}}let o=t[e++];if(n|=(o&15)<<28,r=(o&112)>>4,(o&128)==0){this.pos=e,this.assertBounds(),this.varint64Lo=n,this.varint64Hi=r;return}for(let i=3;i<=31;i+=7){let s=t[e++];if(r|=(s&127)<<i,(s&128)==0){this.pos=e,this.assertBounds(),this.varint64Lo=n,this.varint64Hi=r;return}}throw new Error("invalid varint")}var Ko=4294967296;function ha(t){let e=t[0]==="-";e&&(t=t.slice(1));let n=1e6,r=0,o=0;function i(s,a){let l=Number(t.slice(s,a));o*=n,r=r*n+l,r>=Ko&&(o=o+(r/Ko|0),r=r%Ko)}return i(-24,-18),i(-18,-12),i(-12,-6),i(-6),e?fu(r,o):ma(r,o)}function hu(t,e){let n=ma(t,e),r=n.hi&2147483648;r&&(n=fu(n.lo,n.hi));let o=fa(n.lo,n.hi);return r?"-"+o:o}function fa(t,e){if({lo:t,hi:e}=Og(t,e),e<=2097151)return String(Ko*e+t);let n=t&16777215,r=(t>>>24|e<<8)&16777215,o=e>>16&65535,i=n+r*6777216+o*6710656,s=r+o*8147497,a=o*2,l=1e7;return i>=l&&(s+=Math.floor(i/l),i%=l),s>=l&&(a+=Math.floor(s/l),s%=l),a.toString()+du(s)+du(i)}function Og(t,e){return{lo:t>>>0,hi:e>>>0}}function ma(t,e){return{lo:t|0,hi:e|0}}function fu(t,e){return e=~e,t?t=~t+1:e+=1,ma(t,e)}var du=t=>{let e=String(t);return"0000000".slice(e.length)+e};function mu(){let t=this.buf[this.pos++];if((t&128)===0)return this.assertBounds(),t;let e=t&127;if(t=this.buf[this.pos++],e|=(t&127)<<7,(t&128)===0)return this.assertBounds(),e;if(t=this.buf[this.pos++],e|=(t&127)<<14,(t&128)===0)return this.assertBounds(),e;if(t=this.buf[this.pos++],e|=(t&127)<<21,(t&128)===0)return this.assertBounds(),e;t=this.buf[this.pos++],e|=(t&15)<<28;for(let n=5;(t&128)!==0&&n<10;n++)t=this.buf[this.pos++];if((t&128)!==0)throw new Error("invalid varint");return this.assertBounds(),e>>>0}var nt=Mg();function Mg(){let t=new DataView(new ArrayBuffer(8));if(typeof BigInt=="function"&&typeof t.getBigInt64=="function"&&typeof t.getBigUint64=="function"&&typeof t.setBigInt64=="function"&&typeof t.setBigUint64=="function"&&(!!globalThis.Deno||!!globalThis.Bun||typeof process!="object"||typeof process.env!="object"||process.env.BUF_BIGINT_DISABLE!=="1")){let n=BigInt("-9223372036854775808"),r=BigInt("9223372036854775807"),o=BigInt("0"),i=BigInt("18446744073709551615");return{zero:BigInt(0),supported:!0,parse(s){let a=typeof s=="bigint"?s:BigInt(s);if(a>r||a<n)throw new Error(`invalid int64: ${s}`);return a},uParse(s){let a=typeof s=="bigint"?s:BigInt(s);if(a>i||a<o)throw new Error(`invalid uint64: ${s}`);return a},enc(s){return t.setBigInt64(0,this.parse(s),!0),{lo:t.getInt32(0,!0),hi:t.getInt32(4,!0)}},uEnc(s){return t.setBigInt64(0,this.uParse(s),!0),{lo:t.getInt32(0,!0),hi:t.getInt32(4,!0)}},dec(s,a){return t.setInt32(0,s,!0),t.setInt32(4,a,!0),t.getBigInt64(0,!0)},uDec(s,a){return t.setInt32(0,s,!0),t.setInt32(4,a,!0),t.getBigUint64(0,!0)}}}return{zero:"0",supported:!1,parse(n){return typeof n!="string"&&(n=n.toString()),gu(n),n},uParse(n){return typeof n!="string"&&(n=n.toString()),bu(n),n},enc(n){return typeof n!="string"&&(n=n.toString()),gu(n),ha(n)},uEnc(n){return typeof n!="string"&&(n=n.toString()),bu(n),ha(n)},dec(n,r){return hu(n,r)},uDec(n,r){return fa(n,r)}}}function gu(t){if(!/^-?[0-9]+$/.test(t))throw new Error("invalid int64: "+t)}function bu(t){if(!/^[0-9]+$/.test(t))throw new Error("invalid uint64: "+t)}var ga=Symbol.for("@bufbuild/protobuf/text-encoding");function Lg(t){var e;globalThis[ga]=Object.assign(Object.assign({},t),{encodeUtf8Into:(e=t.encodeUtf8Into)!==null&&e!==void 0?e:va(t.encodeUtf8.bind(t))})}function ba(){let t=globalThis;if(!t[ga]){let e=new t.TextEncoder,n=new t.TextDecoder,r,o={encodeUtf8(s){return e.encode(s)},decodeUtf8(s,a){return a?(r||(r=new t.TextDecoder("utf-8",{fatal:!0})),r.decode(s)):n.decode(s)},checkUtf8(s){try{return encodeURIComponent(s),!0}catch{return!1}}};e.encodeInto&&(o.encodeUtf8Into=e.encodeInto.bind(e));let i=String.prototype.isWellFormed;i&&(o.checkUtf8=s=>i.call(s)),Lg(o)}return t[ga]}function va(t){return(e,n)=>{let r=t(e);return n.set(r),{written:r.byteLength}}}var Pt;(function(t){t[t.Varint=0]="Varint",t[t.Bit64=1]="Bit64",t[t.LengthDelimited=2]="LengthDelimited",t[t.StartGroup=3]="StartGroup",t[t.EndGroup=4]="EndGroup",t[t.Bit32=5]="Bit32"})(Pt||(Pt={}));var Pg=34028234663852886e22,Dg=-34028234663852886e22,Ug=4294967295,Hg=2147483647,Fg=-2147483648,V=class{constructor(e){this.stackPos=[],this.encodeUtf8Into=e?va(e):ba().encodeUtf8Into,this.buffer=yu,this.viewCache=zg,this.pos=0}ensureCapacity(e){let n=this.pos+e;if(n>this.buffer.length){let r=this.buffer.length||Gg;for(;r<n;)r*=2;let o=new Uint8Array(r);this.pos>0&&o.set(this.buffer),this.buffer=o}}view(){let e=this.buffer,n=this.viewCache;if(n.byteLength===e.byteLength)return n;let r=new DataView(e.buffer);return this.viewCache=r,r}finish(){let e=this.buffer.slice(0,this.pos);return this.pos=0,this.stackPos=[],e}fork(){return this.stackPos.push(this.pos),this.ensureCapacity(yr),this.buffer[this.pos++]=0,this}join(){let e=this.stackPos.pop();if(e===void 0)throw new Error("invalid state, fork stack empty");let n=this.pos-e-yr,r=ya(n);return r>yr&&(this.ensureCapacity(r-yr),this.buffer.copyWithin(e+r,e+yr,this.pos)),this.pos=e,this.uint32(n),this.pos+=n,this}tag(e,n){return this.uint32((e<<3|n)>>>0)}raw(e){return this.ensureCapacity(e.length),this.buffer.set(e,this.pos),this.pos+=e.length,this}uint32(e){if(vu(e),this.ensureCapacity(5),e<128)return this.buffer[this.pos++]=e,this;for(;e>127;)this.buffer[this.pos++]=e&127|128,e>>>=7;return this.buffer[this.pos++]=e,this}int32(e){if(xa(e),e>=0)return this.uint32(e);this.ensureCapacity(10);for(let n=0;n<9;n++)this.buffer[this.pos++]=e&127|128,e>>=7;return this.buffer[this.pos++]=1,this}bool(e){return this.ensureCapacity(1),this.buffer[this.pos++]=e?1:0,this}bytes(e){return this.uint32(e.byteLength),this.raw(e)}string(e){typeof e!="string"&&(e=String(e));let n=e.length;if(n<=xu){this.ensureCapacity(n+1);let l=this.buffer,c=this.pos;l[c++]=n;let d=0;for(;d<n;d++){let m=e.charCodeAt(d);if(m>127)break;l[c++]=m}if(d==n)return this.pos=c,this}this.ensureCapacity(n*3+5);let r=ya(n),o=this.buffer,i=this.pos,{written:s}=this.encodeUtf8Into(e,o.subarray(i+r)),a=ya(s);return a!=r&&o.copyWithin(i+a,i+r,i+r+s),this.uint32(s),this.pos+=s,this}float(e){return $g(e),this.ensureCapacity(4),this.view().setFloat32(this.pos,e,!0),this.pos+=4,this}double(e){return this.ensureCapacity(8),this.view().setFloat64(this.pos,e,!0),this.pos+=8,this}fixed32(e){return vu(e),this.ensureCapacity(4),this.view().setUint32(this.pos,e,!0),this.pos+=4,this}sfixed32(e){return xa(e),this.ensureCapacity(4),this.view().setInt32(this.pos,e,!0),this.pos+=4,this}sint32(e){return xa(e),this.uint32((e<<1^e>>31)>>>0)}sfixed64(e){let n=nt.enc(e);this.ensureCapacity(8);let r=this.view();return r.setInt32(this.pos,n.lo,!0),r.setInt32(this.pos+4,n.hi,!0),this.pos+=8,this}fixed64(e){let n=nt.uEnc(e);this.ensureCapacity(8);let r=this.view();return r.setInt32(this.pos,n.lo,!0),r.setInt32(this.pos+4,n.hi,!0),this.pos+=8,this}int64(e){let n=nt.enc(e);return this.writeVarint64(n.lo,n.hi)}sint64(e){let n=nt.enc(e),r=n.hi>>31,o=n.lo<<1^r,i=(n.hi<<1|n.lo>>>31)^r;return this.writeVarint64(o,i)}uint64(e){let n=nt.uEnc(e);return this.writeVarint64(n.lo,n.hi)}writeVarint64(e,n){this.ensureCapacity(10);let r=this.buffer,o=this.pos;for(let a=0;a<28;a=a+7){let l=e>>>a,c=!(!(l>>>7)&&n==0);if(r[o++]=(c?l|128:l)&255,!c)return this.pos=o,this}let i=e>>>28&15|(n&7)<<4,s=n>>3!=0;if(r[o++]=(s?i|128:i)&255,!s)return this.pos=o,this;for(let a=3;a<31;a=a+7){let l=n>>>a,c=!!(l>>>7);if(r[o++]=(c?l|128:l)&255,!c)return this.pos=o,this}return r[o++]=n>>>31&1,this.pos=o,this}},Gg=128,yr=1,yu=new Uint8Array(0),zg=new DataView(yu.buffer),xu=32;function ya(t){return t<128?1:t<16384?2:t<2097152?3:t<268435456?4:5}var R=class{constructor(e,n=ba().decodeUtf8){this.decodeUtf8=n,this.varint64Lo=0,this.varint64Hi=0,this.varint64=pu,this.uint32=mu,this.buf=e,this.len=e.length,this.pos=0,this.view=new DataView(e.buffer,e.byteOffset,e.byteLength)}tag(){let e=this.pos,n=this.uint32(),r=this.pos-e;if(r>5||r==5&&this.buf[this.pos-1]>15)throw new Error("illegal tag: varint overflows uint32");let o=n>>>3,i=n&7;if(o<=0||i>5)throw new Error("illegal tag: field no "+o+" wire type "+i);return[o,i]}skip(e,n,r=100){let o=this.pos;switch(e){case Pt.Varint:for(;this.buf[this.pos++]&128;);break;case Pt.Bit64:this.pos+=4;case Pt.Bit32:this.pos+=4;break;case Pt.LengthDelimited:let i=this.uint32();this.pos+=i;break;case Pt.StartGroup:if(r<=0)throw new Error("maximum recursion depth reached");for(;;){let[s,a]=this.tag();if(a===Pt.EndGroup){if(n!==void 0&&s!==n)throw new Error("invalid end group tag");break}this.skip(a,s,r-1)}break;default:throw new Error("cant skip wire type "+e)}return this.assertBounds(),this.buf.subarray(o,this.pos)}assertBounds(){if(this.pos>this.len)throw new RangeError("premature EOF")}int32(){return this.uint32()|0}sint32(){let e=this.uint32();return e>>>1^-(e&1)}int64(){return this.varint64(),nt.dec(this.varint64Lo,this.varint64Hi)}uint64(){return this.varint64(),nt.uDec(this.varint64Lo,this.varint64Hi)}sint64(){this.varint64();let e=this.varint64Lo,n=this.varint64Hi,r=-(e&1);return e=(e>>>1|(n&1)<<31)^r,n=n>>>1^r,nt.dec(e,n)}bool(){let e=this.buf[this.pos];return e<128?(this.pos++,e!==0):(this.varint64(),this.varint64Lo!==0||this.varint64Hi!==0)}fixed32(){return this.view.getUint32((this.pos+=4)-4,!0)}sfixed32(){return this.view.getInt32((this.pos+=4)-4,!0)}fixed64(){return nt.uDec(this.sfixed32(),this.sfixed32())}sfixed64(){return nt.dec(this.sfixed32(),this.sfixed32())}float(){return this.view.getFloat32((this.pos+=4)-4,!0)}double(){return this.view.getFloat64((this.pos+=8)-8,!0)}bytes(){let e=this.uint32(),n=this.pos;return this.pos+=e,this.assertBounds(),this.buf.subarray(n,n+e)}string(e){let n=this.bytes(),r=n.length;if(r<=xu){let o=new Array(r);for(let i=0;i<r;i++){let s=n[i];if(s>127)return this.decodeUtf8(n,e);o[i]=s}return String.fromCharCode.apply(String,o)}return this.decodeUtf8(n,e)}};function xa(t){if(typeof t=="string")t=Number(t);else if(typeof t!="number")throw new Error("invalid int32: "+typeof t);if(!Number.isInteger(t)||t>Hg||t<Fg)throw new Error("invalid int32: "+t)}function vu(t){if(typeof t=="string")t=Number(t);else if(typeof t!="number")throw new Error("invalid uint32: "+typeof t);if(!Number.isInteger(t)||t>Ug||t<0)throw new Error("invalid uint32: "+t)}function $g(t){if(typeof t=="string"){let e=t;if(t=Number(t),Number.isNaN(t)&&e!=="NaN")throw new Error("invalid float32: "+e)}else if(typeof t!="number")throw new Error("invalid float32: "+typeof t);if(Number.isFinite(t)&&(t>Pg||t<Dg))throw new Error("invalid float32: "+t)}var Bg=(function(t){return t[t.NULL_VALUE=0]="NULL_VALUE",t[t.UNRECOGNIZED=-1]="UNRECOGNIZED",t})({});function Ea(){return{fields:{}}}var ke={encode(t,e=new V){return Object.entries(t.fields).forEach(([n,r])=>{r!==void 0&&_a.encode({key:n,value:r},e.uint32(10).fork()).join()}),e},decode(t,e){let n=t instanceof R?t:new R(t),r=e===void 0?n.len:n.pos+e,o=Ea();for(;n.pos<r;){let i=n.uint32();switch(i>>>3){case 1:{if(i!==10)break;let s=_a.decode(n,n.uint32());s.value!==void 0&&(o.fields[s.key]=s.value);continue}}if((i&7)===4||i===0)break;n.skip(i&7)}return o},create(t){return ke.fromPartial(t??{})},fromPartial(t){let e=Ea();return e.fields=Object.entries(t.fields??{}).reduce((n,[r,o])=>(o!==void 0&&(n[r]=o),n),{}),e},wrap(t){let e=Ea();if(t!==void 0)for(let n of Object.keys(t))e.fields[n]=t[n];return e},unwrap(t){let e={};if(t.fields)for(let n of Object.keys(t.fields))e[n]=t.fields[n];return e}};function Eu(){return{key:"",value:void 0}}var _a={encode(t,e=new V){return t.key!==""&&e.uint32(10).string(t.key),t.value!==void 0&&U.encode(U.wrap(t.value),e.uint32(18).fork()).join(),e},decode(t,e){let n=t instanceof R?t:new R(t),r=e===void 0?n.len:n.pos+e,o=Eu();for(;n.pos<r;){let i=n.uint32();switch(i>>>3){case 1:if(i!==10)break;o.key=n.string();continue;case 2:if(i!==18)break;o.value=U.unwrap(U.decode(n,n.uint32()));continue}if((i&7)===4||i===0)break;n.skip(i&7)}return o},create(t){return _a.fromPartial(t??{})},fromPartial(t){let e=Eu();return e.key=t.key??"",e.value=t.value??void 0,e}};function wa(){return{nullValue:void 0,numberValue:void 0,stringValue:void 0,boolValue:void 0,structValue:void 0,listValue:void 0}}var U={encode(t,e=new V){return t.nullValue!==void 0&&e.uint32(8).int32(t.nullValue),t.numberValue!==void 0&&e.uint32(17).double(t.numberValue),t.stringValue!==void 0&&e.uint32(26).string(t.stringValue),t.boolValue!==void 0&&e.uint32(32).bool(t.boolValue),t.structValue!==void 0&&ke.encode(ke.wrap(t.structValue),e.uint32(42).fork()).join(),t.listValue!==void 0&&xr.encode(xr.wrap(t.listValue),e.uint32(50).fork()).join(),e},decode(t,e){let n=t instanceof R?t:new R(t),r=e===void 0?n.len:n.pos+e,o=wa();for(;n.pos<r;){let i=n.uint32();switch(i>>>3){case 1:if(i!==8)break;o.nullValue=n.int32();continue;case 2:if(i!==17)break;o.numberValue=n.double();continue;case 3:if(i!==26)break;o.stringValue=n.string();continue;case 4:if(i!==32)break;o.boolValue=n.bool();continue;case 5:if(i!==42)break;o.structValue=ke.unwrap(ke.decode(n,n.uint32()));continue;case 6:if(i!==50)break;o.listValue=xr.unwrap(xr.decode(n,n.uint32()));continue}if((i&7)===4||i===0)break;n.skip(i&7)}return o},create(t){return U.fromPartial(t??{})},fromPartial(t){let e=wa();return e.nullValue=t.nullValue??void 0,e.numberValue=t.numberValue??void 0,e.stringValue=t.stringValue??void 0,e.boolValue=t.boolValue??void 0,e.structValue=t.structValue??void 0,e.listValue=t.listValue??void 0,e},wrap(t){let e=wa();if(t===null)e.nullValue=Bg.NULL_VALUE;else if(typeof t=="boolean")e.boolValue=t;else if(typeof t=="number")e.numberValue=t;else if(typeof t=="string")e.stringValue=t;else if(globalThis.Array.isArray(t))e.listValue=t;else if(typeof t=="object")e.structValue=t;else if(typeof t<"u")throw new globalThis.Error("Unsupported any value type: "+typeof t);return e},unwrap(t){if(t.stringValue!==void 0)return t.stringValue;if(t?.numberValue!==void 0)return t.numberValue;if(t?.boolValue!==void 0)return t.boolValue;if(t?.structValue!==void 0)return t.structValue;if(t?.listValue!==void 0)return t.listValue;if(t?.nullValue!==void 0)return null}};function Ta(){return{values:[]}}var xr={encode(t,e=new V){for(let n of t.values)U.encode(U.wrap(n),e.uint32(10).fork()).join();return e},decode(t,e){let n=t instanceof R?t:new R(t),r=e===void 0?n.len:n.pos+e,o=Ta();for(;n.pos<r;){let i=n.uint32();switch(i>>>3){case 1:if(i!==10)break;o.values.push(U.unwrap(U.decode(n,n.uint32())));continue}if((i&7)===4||i===0)break;n.skip(i&7)}return o},create(t){return xr.fromPartial(t??{})},fromPartial(t){let e=Ta();return e.values=t.values?.map(n=>n)||[],e},wrap(t){let e=Ta();return e.values=t??[],e},unwrap(t){return t?.hasOwnProperty("values")&&globalThis.Array.isArray(t.values)?t.values:t}},Vg=(function(t){return t[t.ADD=0]="ADD",t[t.REMOVE=1]="REMOVE",t[t.REPLACE=2]="REPLACE",t[t.MOVE=3]="MOVE",t[t.COPY=4]="COPY",t[t.TEST=5]="TEST",t[t.UNRECOGNIZED=-1]="UNRECOGNIZED",t})({});function wu(){return{op:0,path:"",from:void 0,value:void 0}}var Qo={encode(t,e=new V){return t.op!==0&&e.uint32(8).int32(t.op),t.path!==""&&e.uint32(18).string(t.path),t.from!==void 0&&e.uint32(26).string(t.from),t.value!==void 0&&U.encode(U.wrap(t.value),e.uint32(34).fork()).join(),e},decode(t,e){let n=t instanceof R?t:new R(t),r=e===void 0?n.len:n.pos+e,o=wu();for(;n.pos<r;){let i=n.uint32();switch(i>>>3){case 1:if(i!==8)break;o.op=n.int32();continue;case 2:if(i!==18)break;o.path=n.string();continue;case 3:if(i!==26)break;o.from=n.string();continue;case 4:if(i!==34)break;o.value=U.unwrap(U.decode(n,n.uint32()));continue}if((i&7)===4||i===0)break;n.skip(i&7)}return o},create(t){return Qo.fromPartial(t??{})},fromPartial(t){let e=wu();return e.op=t.op??0,e.path=t.path??"",e.from=t.from??void 0,e.value=t.value??void 0,e}};function Tu(){return{id:"",type:"",function:void 0,metadata:void 0}}var Jo={encode(t,e=new V){return t.id!==""&&e.uint32(10).string(t.id),t.type!==""&&e.uint32(18).string(t.type),t.function!==void 0&&ei.encode(t.function,e.uint32(26).fork()).join(),t.metadata!==void 0&&ke.encode(ke.wrap(t.metadata),e.uint32(34).fork()).join(),e},decode(t,e){let n=t instanceof R?t:new R(t),r=e===void 0?n.len:n.pos+e,o=Tu();for(;n.pos<r;){let i=n.uint32();switch(i>>>3){case 1:if(i!==10)break;o.id=n.string();continue;case 2:if(i!==18)break;o.type=n.string();continue;case 3:if(i!==26)break;o.function=ei.decode(n,n.uint32());continue;case 4:if(i!==34)break;o.metadata=ke.unwrap(ke.decode(n,n.uint32()));continue}if((i&7)===4||i===0)break;n.skip(i&7)}return o},create(t){return Jo.fromPartial(t??{})},fromPartial(t){let e=Tu();return e.id=t.id??"",e.type=t.type??"",e.function=t.function!==void 0&&t.function!==null?ei.fromPartial(t.function):void 0,e.metadata=t.metadata??void 0,e}};function _u(){return{name:"",arguments:""}}var ei={encode(t,e=new V){return t.name!==""&&e.uint32(10).string(t.name),t.arguments!==""&&e.uint32(18).string(t.arguments),e},decode(t,e){let n=t instanceof R?t:new R(t),r=e===void 0?n.len:n.pos+e,o=_u();for(;n.pos<r;){let i=n.uint32();switch(i>>>3){case 1:if(i!==10)break;o.name=n.string();continue;case 2:if(i!==18)break;o.arguments=n.string();continue}if((i&7)===4||i===0)break;n.skip(i&7)}return o},create(t){return ei.fromPartial(t??{})},fromPartial(t){let e=_u();return e.name=t.name??"",e.arguments=t.arguments??"",e}};function Su(){return{value:"",mimeType:""}}var ti={encode(t,e=new V){return t.value!==""&&e.uint32(10).string(t.value),t.mimeType!==""&&e.uint32(18).string(t.mimeType),e},decode(t,e){let n=t instanceof R?t:new R(t),r=e===void 0?n.len:n.pos+e,o=Su();for(;n.pos<r;){let i=n.uint32();switch(i>>>3){case 1:if(i!==10)break;o.value=n.string();continue;case 2:if(i!==18)break;o.mimeType=n.string();continue}if((i&7)===4||i===0)break;n.skip(i&7)}return o},create(t){return ti.fromPartial(t??{})},fromPartial(t){let e=Su();return e.value=t.value??"",e.mimeType=t.mimeType??"",e}};function Au(){return{value:"",mimeType:void 0}}var ni={encode(t,e=new V){return t.value!==""&&e.uint32(10).string(t.value),t.mimeType!==void 0&&e.uint32(18).string(t.mimeType),e},decode(t,e){let n=t instanceof R?t:new R(t),r=e===void 0?n.len:n.pos+e,o=Au();for(;n.pos<r;){let i=n.uint32();switch(i>>>3){case 1:if(i!==10)break;o.value=n.string();continue;case 2:if(i!==18)break;o.mimeType=n.string();continue}if((i&7)===4||i===0)break;n.skip(i&7)}return o},create(t){return ni.fromPartial(t??{})},fromPartial(t){let e=Au();return e.value=t.value??"",e.mimeType=t.mimeType??void 0,e}};function ku(){return{data:void 0,url:void 0}}var $e={encode(t,e=new V){return t.data!==void 0&&ti.encode(t.data,e.uint32(10).fork()).join(),t.url!==void 0&&ni.encode(t.url,e.uint32(18).fork()).join(),e},decode(t,e){let n=t instanceof R?t:new R(t),r=e===void 0?n.len:n.pos+e,o=ku();for(;n.pos<r;){let i=n.uint32();switch(i>>>3){case 1:if(i!==10)break;o.data=ti.decode(n,n.uint32());continue;case 2:if(i!==18)break;o.url=ni.decode(n,n.uint32());continue}if((i&7)===4||i===0)break;n.skip(i&7)}return o},create(t){return $e.fromPartial(t??{})},fromPartial(t){let e=ku();return e.data=t.data!==void 0&&t.data!==null?ti.fromPartial(t.data):void 0,e.url=t.url!==void 0&&t.url!==null?ni.fromPartial(t.url):void 0,e}};function Iu(){return{text:""}}var ri={encode(t,e=new V){return t.text!==""&&e.uint32(10).string(t.text),e},decode(t,e){let n=t instanceof R?t:new R(t),r=e===void 0?n.len:n.pos+e,o=Iu();for(;n.pos<r;){let i=n.uint32();switch(i>>>3){case 1:if(i!==10)break;o.text=n.string();continue}if((i&7)===4||i===0)break;n.skip(i&7)}return o},create(t){return ri.fromPartial(t??{})},fromPartial(t){let e=Iu();return e.text=t.text??"",e}};function Ru(){return{source:void 0,metadata:void 0}}var oi={encode(t,e=new V){return t.source!==void 0&&$e.encode(t.source,e.uint32(10).fork()).join(),t.metadata!==void 0&&U.encode(U.wrap(t.metadata),e.uint32(18).fork()).join(),e},decode(t,e){let n=t instanceof R?t:new R(t),r=e===void 0?n.len:n.pos+e,o=Ru();for(;n.pos<r;){let i=n.uint32();switch(i>>>3){case 1:if(i!==10)break;o.source=$e.decode(n,n.uint32());continue;case 2:if(i!==18)break;o.metadata=U.unwrap(U.decode(n,n.uint32()));continue}if((i&7)===4||i===0)break;n.skip(i&7)}return o},create(t){return oi.fromPartial(t??{})},fromPartial(t){let e=Ru();return e.source=t.source!==void 0&&t.source!==null?$e.fromPartial(t.source):void 0,e.metadata=t.metadata??void 0,e}};function Cu(){return{source:void 0,metadata:void 0}}var ii={encode(t,e=new V){return t.source!==void 0&&$e.encode(t.source,e.uint32(10).fork()).join(),t.metadata!==void 0&&U.encode(U.wrap(t.metadata),e.uint32(18).fork()).join(),e},decode(t,e){let n=t instanceof R?t:new R(t),r=e===void 0?n.len:n.pos+e,o=Cu();for(;n.pos<r;){let i=n.uint32();switch(i>>>3){case 1:if(i!==10)break;o.source=$e.decode(n,n.uint32());continue;case 2:if(i!==18)break;o.metadata=U.unwrap(U.decode(n,n.uint32()));continue}if((i&7)===4||i===0)break;n.skip(i&7)}return o},create(t){return ii.fromPartial(t??{})},fromPartial(t){let e=Cu();return e.source=t.source!==void 0&&t.source!==null?$e.fromPartial(t.source):void 0,e.metadata=t.metadata??void 0,e}};function Nu(){return{source:void 0,metadata:void 0}}var si={encode(t,e=new V){return t.source!==void 0&&$e.encode(t.source,e.uint32(10).fork()).join(),t.metadata!==void 0&&U.encode(U.wrap(t.metadata),e.uint32(18).fork()).join(),e},decode(t,e){let n=t instanceof R?t:new R(t),r=e===void 0?n.len:n.pos+e,o=Nu();for(;n.pos<r;){let i=n.uint32();switch(i>>>3){case 1:if(i!==10)break;o.source=$e.decode(n,n.uint32());continue;case 2:if(i!==18)break;o.metadata=U.unwrap(U.decode(n,n.uint32()));continue}if((i&7)===4||i===0)break;n.skip(i&7)}return o},create(t){return si.fromPartial(t??{})},fromPartial(t){let e=Nu();return e.source=t.source!==void 0&&t.source!==null?$e.fromPartial(t.source):void 0,e.metadata=t.metadata??void 0,e}};function Ou(){return{source:void 0,metadata:void 0}}var ai={encode(t,e=new V){return t.source!==void 0&&$e.encode(t.source,e.uint32(10).fork()).join(),t.metadata!==void 0&&U.encode(U.wrap(t.metadata),e.uint32(18).fork()).join(),e},decode(t,e){let n=t instanceof R?t:new R(t),r=e===void 0?n.len:n.pos+e,o=Ou();for(;n.pos<r;){let i=n.uint32();switch(i>>>3){case 1:if(i!==10)break;o.source=$e.decode(n,n.uint32());continue;case 2:if(i!==18)break;o.metadata=U.unwrap(U.decode(n,n.uint32()));continue}if((i&7)===4||i===0)break;n.skip(i&7)}return o},create(t){return ai.fromPartial(t??{})},fromPartial(t){let e=Ou();return e.source=t.source!==void 0&&t.source!==null?$e.fromPartial(t.source):void 0,e.metadata=t.metadata??void 0,e}};function Mu(){return{text:void 0,image:void 0,audio:void 0,video:void 0,document:void 0}}var li={encode(t,e=new V){return t.text!==void 0&&ri.encode(t.text,e.uint32(10).fork()).join(),t.image!==void 0&&oi.encode(t.image,e.uint32(18).fork()).join(),t.audio!==void 0&&ii.encode(t.audio,e.uint32(26).fork()).join(),t.video!==void 0&&si.encode(t.video,e.uint32(34).fork()).join(),t.document!==void 0&&ai.encode(t.document,e.uint32(42).fork()).join(),e},decode(t,e){let n=t instanceof R?t:new R(t),r=e===void 0?n.len:n.pos+e,o=Mu();for(;n.pos<r;){let i=n.uint32();switch(i>>>3){case 1:if(i!==10)break;o.text=ri.decode(n,n.uint32());continue;case 2:if(i!==18)break;o.image=oi.decode(n,n.uint32());continue;case 3:if(i!==26)break;o.audio=ii.decode(n,n.uint32());continue;case 4:if(i!==34)break;o.video=si.decode(n,n.uint32());continue;case 5:if(i!==42)break;o.document=ai.decode(n,n.uint32());continue}if((i&7)===4||i===0)break;n.skip(i&7)}return o},create(t){return li.fromPartial(t??{})},fromPartial(t){let e=Mu();return e.text=t.text!==void 0&&t.text!==null?ri.fromPartial(t.text):void 0,e.image=t.image!==void 0&&t.image!==null?oi.fromPartial(t.image):void 0,e.audio=t.audio!==void 0&&t.audio!==null?ii.fromPartial(t.audio):void 0,e.video=t.video!==void 0&&t.video!==null?si.fromPartial(t.video):void 0,e.document=t.document!==void 0&&t.document!==null?ai.fromPartial(t.document):void 0,e}};function Lu(){return{id:"",role:"",content:void 0,name:void 0,toolCalls:[],toolCallId:void 0,error:void 0,contentParts:[],metadata:void 0,subagentRunId:void 0}}var ci={encode(t,e=new V){t.id!==""&&e.uint32(10).string(t.id),t.role!==""&&e.uint32(18).string(t.role),t.content!==void 0&&e.uint32(26).string(t.content),t.name!==void 0&&e.uint32(34).string(t.name);for(let n of t.toolCalls)Jo.encode(n,e.uint32(42).fork()).join();t.toolCallId!==void 0&&e.uint32(50).string(t.toolCallId),t.error!==void 0&&e.uint32(58).string(t.error);for(let n of t.contentParts)li.encode(n,e.uint32(66).fork()).join();return t.metadata!==void 0&&ke.encode(ke.wrap(t.metadata),e.uint32(74).fork()).join(),t.subagentRunId!==void 0&&e.uint32(82).string(t.subagentRunId),e},decode(t,e){let n=t instanceof R?t:new R(t),r=e===void 0?n.len:n.pos+e,o=Lu();for(;n.pos<r;){let i=n.uint32();switch(i>>>3){case 1:if(i!==10)break;o.id=n.string();continue;case 2:if(i!==18)break;o.role=n.string();continue;case 3:if(i!==26)break;o.content=n.string();continue;case 4:if(i!==34)break;o.name=n.string();continue;case 5:if(i!==42)break;o.toolCalls.push(Jo.decode(n,n.uint32()));continue;case 6:if(i!==50)break;o.toolCallId=n.string();continue;case 7:if(i!==58)break;o.error=n.string();continue;case 8:if(i!==66)break;o.contentParts.push(li.decode(n,n.uint32()));continue;case 9:if(i!==74)break;o.metadata=ke.unwrap(ke.decode(n,n.uint32()));continue;case 10:if(i!==82)break;o.subagentRunId=n.string();continue}if((i&7)===4||i===0)break;n.skip(i&7)}return o},create(t){return ci.fromPartial(t??{})},fromPartial(t){let e=Lu();return e.id=t.id??"",e.role=t.role??"",e.content=t.content??void 0,e.name=t.name??void 0,e.toolCalls=t.toolCalls?.map(n=>Jo.fromPartial(n))||[],e.toolCallId=t.toolCallId??void 0,e.error=t.error??void 0,e.contentParts=t.contentParts?.map(n=>li.fromPartial(n))||[],e.metadata=t.metadata??void 0,e.subagentRunId=t.subagentRunId??void 0,e}};function Pu(){return{id:"",reason:"",message:void 0,toolCallId:void 0,responseSchema:void 0,expiresAt:void 0,metadata:void 0,subagentRunId:void 0}}var ui={encode(t,e=new V){return t.id!==""&&e.uint32(10).string(t.id),t.reason!==""&&e.uint32(18).string(t.reason),t.message!==void 0&&e.uint32(26).string(t.message),t.toolCallId!==void 0&&e.uint32(34).string(t.toolCallId),t.responseSchema!==void 0&&U.encode(U.wrap(t.responseSchema),e.uint32(42).fork()).join(),t.expiresAt!==void 0&&e.uint32(50).string(t.expiresAt),t.metadata!==void 0&&U.encode(U.wrap(t.metadata),e.uint32(58).fork()).join(),t.subagentRunId!==void 0&&e.uint32(66).string(t.subagentRunId),e},decode(t,e){let n=t instanceof R?t:new R(t),r=e===void 0?n.len:n.pos+e,o=Pu();for(;n.pos<r;){let i=n.uint32();switch(i>>>3){case 1:if(i!==10)break;o.id=n.string();continue;case 2:if(i!==18)break;o.reason=n.string();continue;case 3:if(i!==26)break;o.message=n.string();continue;case 4:if(i!==34)break;o.toolCallId=n.string();continue;case 5:if(i!==42)break;o.responseSchema=U.unwrap(U.decode(n,n.uint32()));continue;case 6:if(i!==50)break;o.expiresAt=n.string();continue;case 7:if(i!==58)break;o.metadata=U.unwrap(U.decode(n,n.uint32()));continue;case 8:if(i!==66)break;o.subagentRunId=n.string();continue}if((i&7)===4||i===0)break;n.skip(i&7)}return o},create(t){return ui.fromPartial(t??{})},fromPartial(t){let e=Pu();return e.id=t.id??"",e.reason=t.reason??"",e.message=t.message??void 0,e.toolCallId=t.toolCallId??void 0,e.responseSchema=t.responseSchema??void 0,e.expiresAt=t.expiresAt??void 0,e.metadata=t.metadata??void 0,e.subagentRunId=t.subagentRunId??void 0,e}},jg=(function(t){return t[t.TEXT_MESSAGE_START=0]="TEXT_MESSAGE_START",t[t.TEXT_MESSAGE_CONTENT=1]="TEXT_MESSAGE_CONTENT",t[t.TEXT_MESSAGE_END=2]="TEXT_MESSAGE_END",t[t.TOOL_CALL_START=3]="TOOL_CALL_START",t[t.TOOL_CALL_ARGS=4]="TOOL_CALL_ARGS",t[t.TOOL_CALL_END=5]="TOOL_CALL_END",t[t.STATE_SNAPSHOT=6]="STATE_SNAPSHOT",t[t.STATE_DELTA=7]="STATE_DELTA",t[t.MESSAGES_SNAPSHOT=8]="MESSAGES_SNAPSHOT",t[t.RAW=9]="RAW",t[t.CUSTOM=10]="CUSTOM",t[t.RUN_STARTED=11]="RUN_STARTED",t[t.RUN_FINISHED=12]="RUN_FINISHED",t[t.RUN_ERROR=13]="RUN_ERROR",t[t.STEP_STARTED=14]="STEP_STARTED",t[t.STEP_FINISHED=15]="STEP_FINISHED",t[t.SUBAGENT_STARTED=16]="SUBAGENT_STARTED",t[t.SUBAGENT_FINISHED=17]="SUBAGENT_FINISHED",t[t.SUBAGENT_ERROR=18]="SUBAGENT_ERROR",t[t.UNRECOGNIZED=-1]="UNRECOGNIZED",t})({});function Du(){return{type:0,timestamp:void 0,rawEvent:void 0,metadata:void 0}}var L={encode(t,e=new V){return t.type!==0&&e.uint32(8).int32(t.type),t.timestamp!==void 0&&e.uint32(16).int64(t.timestamp),t.rawEvent!==void 0&&U.encode(U.wrap(t.rawEvent),e.uint32(26).fork()).join(),t.metadata!==void 0&&ke.encode(ke.wrap(t.metadata),e.uint32(34).fork()).join(),e},decode(t,e){let n=t instanceof R?t:new R(t),r=e===void 0?n.len:n.pos+e,o=Du();for(;n.pos<r;){let i=n.uint32();switch(i>>>3){case 1:if(i!==8)break;o.type=n.int32();continue;case 2:if(i!==16)break;o.timestamp=qn(n.int64());continue;case 3:if(i!==26)break;o.rawEvent=U.unwrap(U.decode(n,n.uint32()));continue;case 4:if(i!==34)break;o.metadata=ke.unwrap(ke.decode(n,n.uint32()));continue}if((i&7)===4||i===0)break;n.skip(i&7)}return o},create(t){return L.fromPartial(t??{})},fromPartial(t){let e=Du();return e.type=t.type??0,e.timestamp=t.timestamp??void 0,e.rawEvent=t.rawEvent??void 0,e.metadata=t.metadata??void 0,e}};function Uu(){return{baseEvent:void 0,messageId:"",role:void 0,name:void 0,subagentRunId:void 0}}var di={encode(t,e=new V){return t.baseEvent!==void 0&&L.encode(t.baseEvent,e.uint32(10).fork()).join(),t.messageId!==""&&e.uint32(18).string(t.messageId),t.role!==void 0&&e.uint32(26).string(t.role),t.name!==void 0&&e.uint32(34).string(t.name),t.subagentRunId!==void 0&&e.uint32(42).string(t.subagentRunId),e},decode(t,e){let n=t instanceof R?t:new R(t),r=e===void 0?n.len:n.pos+e,o=Uu();for(;n.pos<r;){let i=n.uint32();switch(i>>>3){case 1:if(i!==10)break;o.baseEvent=L.decode(n,n.uint32());continue;case 2:if(i!==18)break;o.messageId=n.string();continue;case 3:if(i!==26)break;o.role=n.string();continue;case 4:if(i!==34)break;o.name=n.string();continue;case 5:if(i!==42)break;o.subagentRunId=n.string();continue}if((i&7)===4||i===0)break;n.skip(i&7)}return o},create(t){return di.fromPartial(t??{})},fromPartial(t){let e=Uu();return e.baseEvent=t.baseEvent!==void 0&&t.baseEvent!==null?L.fromPartial(t.baseEvent):void 0,e.messageId=t.messageId??"",e.role=t.role??void 0,e.name=t.name??void 0,e.subagentRunId=t.subagentRunId??void 0,e}};function Hu(){return{baseEvent:void 0,messageId:"",delta:"",subagentRunId:void 0}}var pi={encode(t,e=new V){return t.baseEvent!==void 0&&L.encode(t.baseEvent,e.uint32(10).fork()).join(),t.messageId!==""&&e.uint32(18).string(t.messageId),t.delta!==""&&e.uint32(26).string(t.delta),t.subagentRunId!==void 0&&e.uint32(34).string(t.subagentRunId),e},decode(t,e){let n=t instanceof R?t:new R(t),r=e===void 0?n.len:n.pos+e,o=Hu();for(;n.pos<r;){let i=n.uint32();switch(i>>>3){case 1:if(i!==10)break;o.baseEvent=L.decode(n,n.uint32());continue;case 2:if(i!==18)break;o.messageId=n.string();continue;case 3:if(i!==26)break;o.delta=n.string();continue;case 4:if(i!==34)break;o.subagentRunId=n.string();continue}if((i&7)===4||i===0)break;n.skip(i&7)}return o},create(t){return pi.fromPartial(t??{})},fromPartial(t){let e=Hu();return e.baseEvent=t.baseEvent!==void 0&&t.baseEvent!==null?L.fromPartial(t.baseEvent):void 0,e.messageId=t.messageId??"",e.delta=t.delta??"",e.subagentRunId=t.subagentRunId??void 0,e}};function Fu(){return{baseEvent:void 0,messageId:"",subagentRunId:void 0}}var hi={encode(t,e=new V){return t.baseEvent!==void 0&&L.encode(t.baseEvent,e.uint32(10).fork()).join(),t.messageId!==""&&e.uint32(18).string(t.messageId),t.subagentRunId!==void 0&&e.uint32(26).string(t.subagentRunId),e},decode(t,e){let n=t instanceof R?t:new R(t),r=e===void 0?n.len:n.pos+e,o=Fu();for(;n.pos<r;){let i=n.uint32();switch(i>>>3){case 1:if(i!==10)break;o.baseEvent=L.decode(n,n.uint32());continue;case 2:if(i!==18)break;o.messageId=n.string();continue;case 3:if(i!==26)break;o.subagentRunId=n.string();continue}if((i&7)===4||i===0)break;n.skip(i&7)}return o},create(t){return hi.fromPartial(t??{})},fromPartial(t){let e=Fu();return e.baseEvent=t.baseEvent!==void 0&&t.baseEvent!==null?L.fromPartial(t.baseEvent):void 0,e.messageId=t.messageId??"",e.subagentRunId=t.subagentRunId??void 0,e}};function Gu(){return{baseEvent:void 0,toolCallId:"",toolCallName:"",parentMessageId:void 0,subagentRunId:void 0}}var fi={encode(t,e=new V){return t.baseEvent!==void 0&&L.encode(t.baseEvent,e.uint32(10).fork()).join(),t.toolCallId!==""&&e.uint32(18).string(t.toolCallId),t.toolCallName!==""&&e.uint32(26).string(t.toolCallName),t.parentMessageId!==void 0&&e.uint32(34).string(t.parentMessageId),t.subagentRunId!==void 0&&e.uint32(42).string(t.subagentRunId),e},decode(t,e){let n=t instanceof R?t:new R(t),r=e===void 0?n.len:n.pos+e,o=Gu();for(;n.pos<r;){let i=n.uint32();switch(i>>>3){case 1:if(i!==10)break;o.baseEvent=L.decode(n,n.uint32());continue;case 2:if(i!==18)break;o.toolCallId=n.string();continue;case 3:if(i!==26)break;o.toolCallName=n.string();continue;case 4:if(i!==34)break;o.parentMessageId=n.string();continue;case 5:if(i!==42)break;o.subagentRunId=n.string();continue}if((i&7)===4||i===0)break;n.skip(i&7)}return o},create(t){return fi.fromPartial(t??{})},fromPartial(t){let e=Gu();return e.baseEvent=t.baseEvent!==void 0&&t.baseEvent!==null?L.fromPartial(t.baseEvent):void 0,e.toolCallId=t.toolCallId??"",e.toolCallName=t.toolCallName??"",e.parentMessageId=t.parentMessageId??void 0,e.subagentRunId=t.subagentRunId??void 0,e}};function zu(){return{baseEvent:void 0,toolCallId:"",delta:"",subagentRunId:void 0}}var mi={encode(t,e=new V){return t.baseEvent!==void 0&&L.encode(t.baseEvent,e.uint32(10).fork()).join(),t.toolCallId!==""&&e.uint32(18).string(t.toolCallId),t.delta!==""&&e.uint32(26).string(t.delta),t.subagentRunId!==void 0&&e.uint32(34).string(t.subagentRunId),e},decode(t,e){let n=t instanceof R?t:new R(t),r=e===void 0?n.len:n.pos+e,o=zu();for(;n.pos<r;){let i=n.uint32();switch(i>>>3){case 1:if(i!==10)break;o.baseEvent=L.decode(n,n.uint32());continue;case 2:if(i!==18)break;o.toolCallId=n.string();continue;case 3:if(i!==26)break;o.delta=n.string();continue;case 4:if(i!==34)break;o.subagentRunId=n.string();continue}if((i&7)===4||i===0)break;n.skip(i&7)}return o},create(t){return mi.fromPartial(t??{})},fromPartial(t){let e=zu();return e.baseEvent=t.baseEvent!==void 0&&t.baseEvent!==null?L.fromPartial(t.baseEvent):void 0,e.toolCallId=t.toolCallId??"",e.delta=t.delta??"",e.subagentRunId=t.subagentRunId??void 0,e}};function $u(){return{baseEvent:void 0,toolCallId:"",subagentRunId:void 0}}var gi={encode(t,e=new V){return t.baseEvent!==void 0&&L.encode(t.baseEvent,e.uint32(10).fork()).join(),t.toolCallId!==""&&e.uint32(18).string(t.toolCallId),t.subagentRunId!==void 0&&e.uint32(26).string(t.subagentRunId),e},decode(t,e){let n=t instanceof R?t:new R(t),r=e===void 0?n.len:n.pos+e,o=$u();for(;n.pos<r;){let i=n.uint32();switch(i>>>3){case 1:if(i!==10)break;o.baseEvent=L.decode(n,n.uint32());continue;case 2:if(i!==18)break;o.toolCallId=n.string();continue;case 3:if(i!==26)break;o.subagentRunId=n.string();continue}if((i&7)===4||i===0)break;n.skip(i&7)}return o},create(t){return gi.fromPartial(t??{})},fromPartial(t){let e=$u();return e.baseEvent=t.baseEvent!==void 0&&t.baseEvent!==null?L.fromPartial(t.baseEvent):void 0,e.toolCallId=t.toolCallId??"",e.subagentRunId=t.subagentRunId??void 0,e}};function Bu(){return{baseEvent:void 0,snapshot:void 0,subagentRunId:void 0}}var bi={encode(t,e=new V){return t.baseEvent!==void 0&&L.encode(t.baseEvent,e.uint32(10).fork()).join(),t.snapshot!==void 0&&U.encode(U.wrap(t.snapshot),e.uint32(18).fork()).join(),t.subagentRunId!==void 0&&e.uint32(26).string(t.subagentRunId),e},decode(t,e){let n=t instanceof R?t:new R(t),r=e===void 0?n.len:n.pos+e,o=Bu();for(;n.pos<r;){let i=n.uint32();switch(i>>>3){case 1:if(i!==10)break;o.baseEvent=L.decode(n,n.uint32());continue;case 2:if(i!==18)break;o.snapshot=U.unwrap(U.decode(n,n.uint32()));continue;case 3:if(i!==26)break;o.subagentRunId=n.string();continue}if((i&7)===4||i===0)break;n.skip(i&7)}return o},create(t){return bi.fromPartial(t??{})},fromPartial(t){let e=Bu();return e.baseEvent=t.baseEvent!==void 0&&t.baseEvent!==null?L.fromPartial(t.baseEvent):void 0,e.snapshot=t.snapshot??void 0,e.subagentRunId=t.subagentRunId??void 0,e}};function Vu(){return{baseEvent:void 0,delta:[],subagentRunId:void 0}}var vi={encode(t,e=new V){t.baseEvent!==void 0&&L.encode(t.baseEvent,e.uint32(10).fork()).join();for(let n of t.delta)Qo.encode(n,e.uint32(18).fork()).join();return t.subagentRunId!==void 0&&e.uint32(26).string(t.subagentRunId),e},decode(t,e){let n=t instanceof R?t:new R(t),r=e===void 0?n.len:n.pos+e,o=Vu();for(;n.pos<r;){let i=n.uint32();switch(i>>>3){case 1:if(i!==10)break;o.baseEvent=L.decode(n,n.uint32());continue;case 2:if(i!==18)break;o.delta.push(Qo.decode(n,n.uint32()));continue;case 3:if(i!==26)break;o.subagentRunId=n.string();continue}if((i&7)===4||i===0)break;n.skip(i&7)}return o},create(t){return vi.fromPartial(t??{})},fromPartial(t){let e=Vu();return e.baseEvent=t.baseEvent!==void 0&&t.baseEvent!==null?L.fromPartial(t.baseEvent):void 0,e.delta=t.delta?.map(n=>Qo.fromPartial(n))||[],e.subagentRunId=t.subagentRunId??void 0,e}};function ju(){return{baseEvent:void 0,messages:[]}}var yi={encode(t,e=new V){t.baseEvent!==void 0&&L.encode(t.baseEvent,e.uint32(10).fork()).join();for(let n of t.messages)ci.encode(n,e.uint32(18).fork()).join();return e},decode(t,e){let n=t instanceof R?t:new R(t),r=e===void 0?n.len:n.pos+e,o=ju();for(;n.pos<r;){let i=n.uint32();switch(i>>>3){case 1:if(i!==10)break;o.baseEvent=L.decode(n,n.uint32());continue;case 2:if(i!==18)break;o.messages.push(ci.decode(n,n.uint32()));continue}if((i&7)===4||i===0)break;n.skip(i&7)}return o},create(t){return yi.fromPartial(t??{})},fromPartial(t){let e=ju();return e.baseEvent=t.baseEvent!==void 0&&t.baseEvent!==null?L.fromPartial(t.baseEvent):void 0,e.messages=t.messages?.map(n=>ci.fromPartial(n))||[],e}};function qu(){return{baseEvent:void 0,event:void 0,source:void 0,subagentRunId:void 0}}var xi={encode(t,e=new V){return t.baseEvent!==void 0&&L.encode(t.baseEvent,e.uint32(10).fork()).join(),t.event!==void 0&&U.encode(U.wrap(t.event),e.uint32(18).fork()).join(),t.source!==void 0&&e.uint32(26).string(t.source),t.subagentRunId!==void 0&&e.uint32(34).string(t.subagentRunId),e},decode(t,e){let n=t instanceof R?t:new R(t),r=e===void 0?n.len:n.pos+e,o=qu();for(;n.pos<r;){let i=n.uint32();switch(i>>>3){case 1:if(i!==10)break;o.baseEvent=L.decode(n,n.uint32());continue;case 2:if(i!==18)break;o.event=U.unwrap(U.decode(n,n.uint32()));continue;case 3:if(i!==26)break;o.source=n.string();continue;case 4:if(i!==34)break;o.subagentRunId=n.string();continue}if((i&7)===4||i===0)break;n.skip(i&7)}return o},create(t){return xi.fromPartial(t??{})},fromPartial(t){let e=qu();return e.baseEvent=t.baseEvent!==void 0&&t.baseEvent!==null?L.fromPartial(t.baseEvent):void 0,e.event=t.event??void 0,e.source=t.source??void 0,e.subagentRunId=t.subagentRunId??void 0,e}};function Wu(){return{baseEvent:void 0,name:"",value:void 0,subagentRunId:void 0}}var Ei={encode(t,e=new V){return t.baseEvent!==void 0&&L.encode(t.baseEvent,e.uint32(10).fork()).join(),t.name!==""&&e.uint32(18).string(t.name),t.value!==void 0&&U.encode(U.wrap(t.value),e.uint32(26).fork()).join(),t.subagentRunId!==void 0&&e.uint32(34).string(t.subagentRunId),e},decode(t,e){let n=t instanceof R?t:new R(t),r=e===void 0?n.len:n.pos+e,o=Wu();for(;n.pos<r;){let i=n.uint32();switch(i>>>3){case 1:if(i!==10)break;o.baseEvent=L.decode(n,n.uint32());continue;case 2:if(i!==18)break;o.name=n.string();continue;case 3:if(i!==26)break;o.value=U.unwrap(U.decode(n,n.uint32()));continue;case 4:if(i!==34)break;o.subagentRunId=n.string();continue}if((i&7)===4||i===0)break;n.skip(i&7)}return o},create(t){return Ei.fromPartial(t??{})},fromPartial(t){let e=Wu();return e.baseEvent=t.baseEvent!==void 0&&t.baseEvent!==null?L.fromPartial(t.baseEvent):void 0,e.name=t.name??"",e.value=t.value??void 0,e.subagentRunId=t.subagentRunId??void 0,e}};function Xu(){return{baseEvent:void 0,threadId:"",runId:""}}var wi={encode(t,e=new V){return t.baseEvent!==void 0&&L.encode(t.baseEvent,e.uint32(10).fork()).join(),t.threadId!==""&&e.uint32(18).string(t.threadId),t.runId!==""&&e.uint32(26).string(t.runId),e},decode(t,e){let n=t instanceof R?t:new R(t),r=e===void 0?n.len:n.pos+e,o=Xu();for(;n.pos<r;){let i=n.uint32();switch(i>>>3){case 1:if(i!==10)break;o.baseEvent=L.decode(n,n.uint32());continue;case 2:if(i!==18)break;o.threadId=n.string();continue;case 3:if(i!==26)break;o.runId=n.string();continue}if((i&7)===4||i===0)break;n.skip(i&7)}return o},create(t){return wi.fromPartial(t??{})},fromPartial(t){let e=Xu();return e.baseEvent=t.baseEvent!==void 0&&t.baseEvent!==null?L.fromPartial(t.baseEvent):void 0,e.threadId=t.threadId??"",e.runId=t.runId??"",e}};function Yu(){return{provider:void 0,model:void 0,inputTokens:void 0,outputTokens:void 0,totalTokens:void 0,reasoningTokens:void 0,cachedInputTokens:void 0}}var dn={encode(t,e=new V){return t.provider!==void 0&&e.uint32(10).string(t.provider),t.model!==void 0&&e.uint32(18).string(t.model),t.inputTokens!==void 0&&e.uint32(24).int64(t.inputTokens),t.outputTokens!==void 0&&e.uint32(32).int64(t.outputTokens),t.totalTokens!==void 0&&e.uint32(40).int64(t.totalTokens),t.reasoningTokens!==void 0&&e.uint32(48).int64(t.reasoningTokens),t.cachedInputTokens!==void 0&&e.uint32(56).int64(t.cachedInputTokens),e},decode(t,e){let n=t instanceof R?t:new R(t),r=e===void 0?n.len:n.pos+e,o=Yu();for(;n.pos<r;){let i=n.uint32();switch(i>>>3){case 1:if(i!==10)break;o.provider=n.string();continue;case 2:if(i!==18)break;o.model=n.string();continue;case 3:if(i!==24)break;o.inputTokens=qn(n.int64());continue;case 4:if(i!==32)break;o.outputTokens=qn(n.int64());continue;case 5:if(i!==40)break;o.totalTokens=qn(n.int64());continue;case 6:if(i!==48)break;o.reasoningTokens=qn(n.int64());continue;case 7:if(i!==56)break;o.cachedInputTokens=qn(n.int64());continue}if((i&7)===4||i===0)break;n.skip(i&7)}return o},create(t){return dn.fromPartial(t??{})},fromPartial(t){let e=Yu();return e.provider=t.provider??void 0,e.model=t.model??void 0,e.inputTokens=t.inputTokens??void 0,e.outputTokens=t.outputTokens??void 0,e.totalTokens=t.totalTokens??void 0,e.reasoningTokens=t.reasoningTokens??void 0,e.cachedInputTokens=t.cachedInputTokens??void 0,e}};function Ku(){return{baseEvent:void 0,threadId:"",runId:"",result:void 0,outcome:"",interrupts:[],usage:[]}}var Ti={encode(t,e=new V){t.baseEvent!==void 0&&L.encode(t.baseEvent,e.uint32(10).fork()).join(),t.threadId!==""&&e.uint32(18).string(t.threadId),t.runId!==""&&e.uint32(26).string(t.runId),t.result!==void 0&&U.encode(U.wrap(t.result),e.uint32(34).fork()).join(),t.outcome!==""&&e.uint32(42).string(t.outcome);for(let n of t.interrupts)ui.encode(n,e.uint32(50).fork()).join();for(let n of t.usage)dn.encode(n,e.uint32(58).fork()).join();return e},decode(t,e){let n=t instanceof R?t:new R(t),r=e===void 0?n.len:n.pos+e,o=Ku();for(;n.pos<r;){let i=n.uint32();switch(i>>>3){case 1:if(i!==10)break;o.baseEvent=L.decode(n,n.uint32());continue;case 2:if(i!==18)break;o.threadId=n.string();continue;case 3:if(i!==26)break;o.runId=n.string();continue;case 4:if(i!==34)break;o.result=U.unwrap(U.decode(n,n.uint32()));continue;case 5:if(i!==42)break;o.outcome=n.string();continue;case 6:if(i!==50)break;o.interrupts.push(ui.decode(n,n.uint32()));continue;case 7:if(i!==58)break;o.usage.push(dn.decode(n,n.uint32()));continue}if((i&7)===4||i===0)break;n.skip(i&7)}return o},create(t){return Ti.fromPartial(t??{})},fromPartial(t){let e=Ku();return e.baseEvent=t.baseEvent!==void 0&&t.baseEvent!==null?L.fromPartial(t.baseEvent):void 0,e.threadId=t.threadId??"",e.runId=t.runId??"",e.result=t.result??void 0,e.outcome=t.outcome??"",e.interrupts=t.interrupts?.map(n=>ui.fromPartial(n))||[],e.usage=t.usage?.map(n=>dn.fromPartial(n))||[],e}};function Zu(){return{baseEvent:void 0,code:void 0,message:"",usage:[]}}var _i={encode(t,e=new V){t.baseEvent!==void 0&&L.encode(t.baseEvent,e.uint32(10).fork()).join(),t.code!==void 0&&e.uint32(18).string(t.code),t.message!==""&&e.uint32(26).string(t.message);for(let n of t.usage)dn.encode(n,e.uint32(34).fork()).join();return e},decode(t,e){let n=t instanceof R?t:new R(t),r=e===void 0?n.len:n.pos+e,o=Zu();for(;n.pos<r;){let i=n.uint32();switch(i>>>3){case 1:if(i!==10)break;o.baseEvent=L.decode(n,n.uint32());continue;case 2:if(i!==18)break;o.code=n.string();continue;case 3:if(i!==26)break;o.message=n.string();continue;case 4:if(i!==34)break;o.usage.push(dn.decode(n,n.uint32()));continue}if((i&7)===4||i===0)break;n.skip(i&7)}return o},create(t){return _i.fromPartial(t??{})},fromPartial(t){let e=Zu();return e.baseEvent=t.baseEvent!==void 0&&t.baseEvent!==null?L.fromPartial(t.baseEvent):void 0,e.code=t.code??void 0,e.message=t.message??"",e.usage=t.usage?.map(n=>dn.fromPartial(n))||[],e}};function Qu(){return{baseEvent:void 0,stepName:"",subagentRunId:void 0}}var Si={encode(t,e=new V){return t.baseEvent!==void 0&&L.encode(t.baseEvent,e.uint32(10).fork()).join(),t.stepName!==""&&e.uint32(18).string(t.stepName),t.subagentRunId!==void 0&&e.uint32(26).string(t.subagentRunId),e},decode(t,e){let n=t instanceof R?t:new R(t),r=e===void 0?n.len:n.pos+e,o=Qu();for(;n.pos<r;){let i=n.uint32();switch(i>>>3){case 1:if(i!==10)break;o.baseEvent=L.decode(n,n.uint32());continue;case 2:if(i!==18)break;o.stepName=n.string();continue;case 3:if(i!==26)break;o.subagentRunId=n.string();continue}if((i&7)===4||i===0)break;n.skip(i&7)}return o},create(t){return Si.fromPartial(t??{})},fromPartial(t){let e=Qu();return e.baseEvent=t.baseEvent!==void 0&&t.baseEvent!==null?L.fromPartial(t.baseEvent):void 0,e.stepName=t.stepName??"",e.subagentRunId=t.subagentRunId??void 0,e}};function Ju(){return{baseEvent:void 0,stepName:"",subagentRunId:void 0}}var Ai={encode(t,e=new V){return t.baseEvent!==void 0&&L.encode(t.baseEvent,e.uint32(10).fork()).join(),t.stepName!==""&&e.uint32(18).string(t.stepName),t.subagentRunId!==void 0&&e.uint32(26).string(t.subagentRunId),e},decode(t,e){let n=t instanceof R?t:new R(t),r=e===void 0?n.len:n.pos+e,o=Ju();for(;n.pos<r;){let i=n.uint32();switch(i>>>3){case 1:if(i!==10)break;o.baseEvent=L.decode(n,n.uint32());continue;case 2:if(i!==18)break;o.stepName=n.string();continue;case 3:if(i!==26)break;o.subagentRunId=n.string();continue}if((i&7)===4||i===0)break;n.skip(i&7)}return o},create(t){return Ai.fromPartial(t??{})},fromPartial(t){let e=Ju();return e.baseEvent=t.baseEvent!==void 0&&t.baseEvent!==null?L.fromPartial(t.baseEvent):void 0,e.stepName=t.stepName??"",e.subagentRunId=t.subagentRunId??void 0,e}};function ed(){return{baseEvent:void 0,messageId:void 0,role:void 0,delta:void 0,name:void 0,subagentRunId:void 0}}var ki={encode(t,e=new V){return t.baseEvent!==void 0&&L.encode(t.baseEvent,e.uint32(10).fork()).join(),t.messageId!==void 0&&e.uint32(18).string(t.messageId),t.role!==void 0&&e.uint32(26).string(t.role),t.delta!==void 0&&e.uint32(34).string(t.delta),t.name!==void 0&&e.uint32(42).string(t.name),t.subagentRunId!==void 0&&e.uint32(50).string(t.subagentRunId),e},decode(t,e){let n=t instanceof R?t:new R(t),r=e===void 0?n.len:n.pos+e,o=ed();for(;n.pos<r;){let i=n.uint32();switch(i>>>3){case 1:if(i!==10)break;o.baseEvent=L.decode(n,n.uint32());continue;case 2:if(i!==18)break;o.messageId=n.string();continue;case 3:if(i!==26)break;o.role=n.string();continue;case 4:if(i!==34)break;o.delta=n.string();continue;case 5:if(i!==42)break;o.name=n.string();continue;case 6:if(i!==50)break;o.subagentRunId=n.string();continue}if((i&7)===4||i===0)break;n.skip(i&7)}return o},create(t){return ki.fromPartial(t??{})},fromPartial(t){let e=ed();return e.baseEvent=t.baseEvent!==void 0&&t.baseEvent!==null?L.fromPartial(t.baseEvent):void 0,e.messageId=t.messageId??void 0,e.role=t.role??void 0,e.delta=t.delta??void 0,e.name=t.name??void 0,e.subagentRunId=t.subagentRunId??void 0,e}};function td(){return{baseEvent:void 0,toolCallId:void 0,toolCallName:void 0,parentMessageId:void 0,delta:void 0,subagentRunId:void 0}}var Ii={encode(t,e=new V){return t.baseEvent!==void 0&&L.encode(t.baseEvent,e.uint32(10).fork()).join(),t.toolCallId!==void 0&&e.uint32(18).string(t.toolCallId),t.toolCallName!==void 0&&e.uint32(26).string(t.toolCallName),t.parentMessageId!==void 0&&e.uint32(34).string(t.parentMessageId),t.delta!==void 0&&e.uint32(42).string(t.delta),t.subagentRunId!==void 0&&e.uint32(50).string(t.subagentRunId),e},decode(t,e){let n=t instanceof R?t:new R(t),r=e===void 0?n.len:n.pos+e,o=td();for(;n.pos<r;){let i=n.uint32();switch(i>>>3){case 1:if(i!==10)break;o.baseEvent=L.decode(n,n.uint32());continue;case 2:if(i!==18)break;o.toolCallId=n.string();continue;case 3:if(i!==26)break;o.toolCallName=n.string();continue;case 4:if(i!==34)break;o.parentMessageId=n.string();continue;case 5:if(i!==42)break;o.delta=n.string();continue;case 6:if(i!==50)break;o.subagentRunId=n.string();continue}if((i&7)===4||i===0)break;n.skip(i&7)}return o},create(t){return Ii.fromPartial(t??{})},fromPartial(t){let e=td();return e.baseEvent=t.baseEvent!==void 0&&t.baseEvent!==null?L.fromPartial(t.baseEvent):void 0,e.toolCallId=t.toolCallId??void 0,e.toolCallName=t.toolCallName??void 0,e.parentMessageId=t.parentMessageId??void 0,e.delta=t.delta??void 0,e.subagentRunId=t.subagentRunId??void 0,e}};function nd(){return{baseEvent:void 0,subagentRunId:"",name:"",description:void 0,parentSubagentRunId:void 0,parentToolCallId:void 0,parentMessageId:void 0}}var Ri={encode(t,e=new V){return t.baseEvent!==void 0&&L.encode(t.baseEvent,e.uint32(10).fork()).join(),t.subagentRunId!==""&&e.uint32(18).string(t.subagentRunId),t.name!==""&&e.uint32(26).string(t.name),t.description!==void 0&&e.uint32(34).string(t.description),t.parentSubagentRunId!==void 0&&e.uint32(42).string(t.parentSubagentRunId),t.parentToolCallId!==void 0&&e.uint32(50).string(t.parentToolCallId),t.parentMessageId!==void 0&&e.uint32(58).string(t.parentMessageId),e},decode(t,e){let n=t instanceof R?t:new R(t),r=e===void 0?n.len:n.pos+e,o=nd();for(;n.pos<r;){let i=n.uint32();switch(i>>>3){case 1:if(i!==10)break;o.baseEvent=L.decode(n,n.uint32());continue;case 2:if(i!==18)break;o.subagentRunId=n.string();continue;case 3:if(i!==26)break;o.name=n.string();continue;case 4:if(i!==34)break;o.description=n.string();continue;case 5:if(i!==42)break;o.parentSubagentRunId=n.string();continue;case 6:if(i!==50)break;o.parentToolCallId=n.string();continue;case 7:if(i!==58)break;o.parentMessageId=n.string();continue}if((i&7)===4||i===0)break;n.skip(i&7)}return o},create(t){return Ri.fromPartial(t??{})},fromPartial(t){let e=nd();return e.baseEvent=t.baseEvent!==void 0&&t.baseEvent!==null?L.fromPartial(t.baseEvent):void 0,e.subagentRunId=t.subagentRunId??"",e.name=t.name??"",e.description=t.description??void 0,e.parentSubagentRunId=t.parentSubagentRunId??void 0,e.parentToolCallId=t.parentToolCallId??void 0,e.parentMessageId=t.parentMessageId??void 0,e}};function rd(){return{baseEvent:void 0,subagentRunId:"",result:void 0,outcome:"",interruptIds:[]}}var Ci={encode(t,e=new V){t.baseEvent!==void 0&&L.encode(t.baseEvent,e.uint32(10).fork()).join(),t.subagentRunId!==""&&e.uint32(18).string(t.subagentRunId),t.result!==void 0&&U.encode(U.wrap(t.result),e.uint32(26).fork()).join(),t.outcome!==""&&e.uint32(34).string(t.outcome);for(let n of t.interruptIds)e.uint32(42).string(n);return e},decode(t,e){let n=t instanceof R?t:new R(t),r=e===void 0?n.len:n.pos+e,o=rd();for(;n.pos<r;){let i=n.uint32();switch(i>>>3){case 1:if(i!==10)break;o.baseEvent=L.decode(n,n.uint32());continue;case 2:if(i!==18)break;o.subagentRunId=n.string();continue;case 3:if(i!==26)break;o.result=U.unwrap(U.decode(n,n.uint32()));continue;case 4:if(i!==34)break;o.outcome=n.string();continue;case 5:if(i!==42)break;o.interruptIds.push(n.string());continue}if((i&7)===4||i===0)break;n.skip(i&7)}return o},create(t){return Ci.fromPartial(t??{})},fromPartial(t){let e=rd();return e.baseEvent=t.baseEvent!==void 0&&t.baseEvent!==null?L.fromPartial(t.baseEvent):void 0,e.subagentRunId=t.subagentRunId??"",e.result=t.result??void 0,e.outcome=t.outcome??"",e.interruptIds=t.interruptIds?.map(n=>n)||[],e}};function od(){return{baseEvent:void 0,subagentRunId:"",message:"",code:void 0}}var Ni={encode(t,e=new V){return t.baseEvent!==void 0&&L.encode(t.baseEvent,e.uint32(10).fork()).join(),t.subagentRunId!==""&&e.uint32(18).string(t.subagentRunId),t.message!==""&&e.uint32(26).string(t.message),t.code!==void 0&&e.uint32(34).string(t.code),e},decode(t,e){let n=t instanceof R?t:new R(t),r=e===void 0?n.len:n.pos+e,o=od();for(;n.pos<r;){let i=n.uint32();switch(i>>>3){case 1:if(i!==10)break;o.baseEvent=L.decode(n,n.uint32());continue;case 2:if(i!==18)break;o.subagentRunId=n.string();continue;case 3:if(i!==26)break;o.message=n.string();continue;case 4:if(i!==34)break;o.code=n.string();continue}if((i&7)===4||i===0)break;n.skip(i&7)}return o},create(t){return Ni.fromPartial(t??{})},fromPartial(t){let e=od();return e.baseEvent=t.baseEvent!==void 0&&t.baseEvent!==null?L.fromPartial(t.baseEvent):void 0,e.subagentRunId=t.subagentRunId??"",e.message=t.message??"",e.code=t.code??void 0,e}};function id(){return{textMessageStart:void 0,textMessageContent:void 0,textMessageEnd:void 0,toolCallStart:void 0,toolCallArgs:void 0,toolCallEnd:void 0,stateSnapshot:void 0,stateDelta:void 0,messagesSnapshot:void 0,raw:void 0,custom:void 0,runStarted:void 0,runFinished:void 0,runError:void 0,stepStarted:void 0,stepFinished:void 0,textMessageChunk:void 0,toolCallChunk:void 0,subagentStarted:void 0,subagentFinished:void 0,subagentError:void 0}}var sd={encode(t,e=new V){return t.textMessageStart!==void 0&&di.encode(t.textMessageStart,e.uint32(10).fork()).join(),t.textMessageContent!==void 0&&pi.encode(t.textMessageContent,e.uint32(18).fork()).join(),t.textMessageEnd!==void 0&&hi.encode(t.textMessageEnd,e.uint32(26).fork()).join(),t.toolCallStart!==void 0&&fi.encode(t.toolCallStart,e.uint32(34).fork()).join(),t.toolCallArgs!==void 0&&mi.encode(t.toolCallArgs,e.uint32(42).fork()).join(),t.toolCallEnd!==void 0&&gi.encode(t.toolCallEnd,e.uint32(50).fork()).join(),t.stateSnapshot!==void 0&&bi.encode(t.stateSnapshot,e.uint32(58).fork()).join(),t.stateDelta!==void 0&&vi.encode(t.stateDelta,e.uint32(66).fork()).join(),t.messagesSnapshot!==void 0&&yi.encode(t.messagesSnapshot,e.uint32(74).fork()).join(),t.raw!==void 0&&xi.encode(t.raw,e.uint32(82).fork()).join(),t.custom!==void 0&&Ei.encode(t.custom,e.uint32(90).fork()).join(),t.runStarted!==void 0&&wi.encode(t.runStarted,e.uint32(98).fork()).join(),t.runFinished!==void 0&&Ti.encode(t.runFinished,e.uint32(106).fork()).join(),t.runError!==void 0&&_i.encode(t.runError,e.uint32(114).fork()).join(),t.stepStarted!==void 0&&Si.encode(t.stepStarted,e.uint32(122).fork()).join(),t.stepFinished!==void 0&&Ai.encode(t.stepFinished,e.uint32(130).fork()).join(),t.textMessageChunk!==void 0&&ki.encode(t.textMessageChunk,e.uint32(138).fork()).join(),t.toolCallChunk!==void 0&&Ii.encode(t.toolCallChunk,e.uint32(146).fork()).join(),t.subagentStarted!==void 0&&Ri.encode(t.subagentStarted,e.uint32(154).fork()).join(),t.subagentFinished!==void 0&&Ci.encode(t.subagentFinished,e.uint32(162).fork()).join(),t.subagentError!==void 0&&Ni.encode(t.subagentError,e.uint32(170).fork()).join(),e},decode(t,e){let n=t instanceof R?t:new R(t),r=e===void 0?n.len:n.pos+e,o=id();for(;n.pos<r;){let i=n.uint32();switch(i>>>3){case 1:if(i!==10)break;o.textMessageStart=di.decode(n,n.uint32());continue;case 2:if(i!==18)break;o.textMessageContent=pi.decode(n,n.uint32());continue;case 3:if(i!==26)break;o.textMessageEnd=hi.decode(n,n.uint32());continue;case 4:if(i!==34)break;o.toolCallStart=fi.decode(n,n.uint32());continue;case 5:if(i!==42)break;o.toolCallArgs=mi.decode(n,n.uint32());continue;case 6:if(i!==50)break;o.toolCallEnd=gi.decode(n,n.uint32());continue;case 7:if(i!==58)break;o.stateSnapshot=bi.decode(n,n.uint32());continue;case 8:if(i!==66)break;o.stateDelta=vi.decode(n,n.uint32());continue;case 9:if(i!==74)break;o.messagesSnapshot=yi.decode(n,n.uint32());continue;case 10:if(i!==82)break;o.raw=xi.decode(n,n.uint32());continue;case 11:if(i!==90)break;o.custom=Ei.decode(n,n.uint32());continue;case 12:if(i!==98)break;o.runStarted=wi.decode(n,n.uint32());continue;case 13:if(i!==106)break;o.runFinished=Ti.decode(n,n.uint32());continue;case 14:if(i!==114)break;o.runError=_i.decode(n,n.uint32());continue;case 15:if(i!==122)break;o.stepStarted=Si.decode(n,n.uint32());continue;case 16:if(i!==130)break;o.stepFinished=Ai.decode(n,n.uint32());continue;case 17:if(i!==138)break;o.textMessageChunk=ki.decode(n,n.uint32());continue;case 18:if(i!==146)break;o.toolCallChunk=Ii.decode(n,n.uint32());continue;case 19:if(i!==154)break;o.subagentStarted=Ri.decode(n,n.uint32());continue;case 20:if(i!==162)break;o.subagentFinished=Ci.decode(n,n.uint32());continue;case 21:if(i!==170)break;o.subagentError=Ni.decode(n,n.uint32());continue}if((i&7)===4||i===0)break;n.skip(i&7)}return o},create(t){return sd.fromPartial(t??{})},fromPartial(t){let e=id();return e.textMessageStart=t.textMessageStart!==void 0&&t.textMessageStart!==null?di.fromPartial(t.textMessageStart):void 0,e.textMessageContent=t.textMessageContent!==void 0&&t.textMessageContent!==null?pi.fromPartial(t.textMessageContent):void 0,e.textMessageEnd=t.textMessageEnd!==void 0&&t.textMessageEnd!==null?hi.fromPartial(t.textMessageEnd):void 0,e.toolCallStart=t.toolCallStart!==void 0&&t.toolCallStart!==null?fi.fromPartial(t.toolCallStart):void 0,e.toolCallArgs=t.toolCallArgs!==void 0&&t.toolCallArgs!==null?mi.fromPartial(t.toolCallArgs):void 0,e.toolCallEnd=t.toolCallEnd!==void 0&&t.toolCallEnd!==null?gi.fromPartial(t.toolCallEnd):void 0,e.stateSnapshot=t.stateSnapshot!==void 0&&t.stateSnapshot!==null?bi.fromPartial(t.stateSnapshot):void 0,e.stateDelta=t.stateDelta!==void 0&&t.stateDelta!==null?vi.fromPartial(t.stateDelta):void 0,e.messagesSnapshot=t.messagesSnapshot!==void 0&&t.messagesSnapshot!==null?yi.fromPartial(t.messagesSnapshot):void 0,e.raw=t.raw!==void 0&&t.raw!==null?xi.fromPartial(t.raw):void 0,e.custom=t.custom!==void 0&&t.custom!==null?Ei.fromPartial(t.custom):void 0,e.runStarted=t.runStarted!==void 0&&t.runStarted!==null?wi.fromPartial(t.runStarted):void 0,e.runFinished=t.runFinished!==void 0&&t.runFinished!==null?Ti.fromPartial(t.runFinished):void 0,e.runError=t.runError!==void 0&&t.runError!==null?_i.fromPartial(t.runError):void 0,e.stepStarted=t.stepStarted!==void 0&&t.stepStarted!==null?Si.fromPartial(t.stepStarted):void 0,e.stepFinished=t.stepFinished!==void 0&&t.stepFinished!==null?Ai.fromPartial(t.stepFinished):void 0,e.textMessageChunk=t.textMessageChunk!==void 0&&t.textMessageChunk!==null?ki.fromPartial(t.textMessageChunk):void 0,e.toolCallChunk=t.toolCallChunk!==void 0&&t.toolCallChunk!==null?Ii.fromPartial(t.toolCallChunk):void 0,e.subagentStarted=t.subagentStarted!==void 0&&t.subagentStarted!==null?Ri.fromPartial(t.subagentStarted):void 0,e.subagentFinished=t.subagentFinished!==void 0&&t.subagentFinished!==null?Ci.fromPartial(t.subagentFinished):void 0,e.subagentError=t.subagentError!==void 0&&t.subagentError!==null?Ni.fromPartial(t.subagentError):void 0,e}};function qn(t){let e=globalThis.Number(t.toString());if(e>globalThis.Number.MAX_SAFE_INTEGER)throw new globalThis.Error("Value is larger than Number.MAX_SAFE_INTEGER");if(e<globalThis.Number.MIN_SAFE_INTEGER)throw new globalThis.Error("Value is smaller than Number.MIN_SAFE_INTEGER");return e}var ad=t=>t&&typeof t=="object"?t:void 0;var Zo=t=>{let e=ad(t);if(e){if(e.data){let n=e.data;return{type:"data",value:n.value,mimeType:n.mimeType}}if(e.url){let n=e.url;return{type:"url",value:n.value,mimeType:n.mimeType}}}},qg=t=>{let e=ad(t);if(e){if(e.text)return{type:"text",text:e.text.text};if(e.image){let n=e.image;return{type:"image",source:Zo(n.source),metadata:n.metadata}}if(e.audio){let n=e.audio;return{type:"audio",source:Zo(n.source),metadata:n.metadata}}if(e.video){let n=e.video;return{type:"video",source:Zo(n.source),metadata:n.metadata}}if(e.document){let n=e.document;return{type:"document",source:Zo(n.source),metadata:n.metadata}}}};function ld(t){let e=sd.decode(t),n=Object.values(e).find(r=>r!==void 0);if(!n)throw new Error("Invalid event");if(n.type=jg[n.baseEvent.type],n.timestamp=n.baseEvent.timestamp,n.rawEvent=n.baseEvent.rawEvent,n.baseEvent.metadata!==void 0&&(n.metadata=n.baseEvent.metadata),delete n.baseEvent,n.type===g.MESSAGES_SNAPSHOT)for(let r of n.messages){let o=r;if(o.role==="user"&&Array.isArray(o.contentParts)){let i=o.contentParts.map(s=>qg(s)).filter(s=>s!==void 0);i.length>0&&(o.content=i)}Array.isArray(o.contentParts)&&o.contentParts.length===0&&(o.contentParts=void 0),o.toolCalls?.length===0&&(o.toolCalls=void 0)}if(n.type===g.RUN_FINISHED){let r=n,o=typeof r.outcome=="string"&&r.outcome!==""?r.outcome:void 0,i=Array.isArray(r.interrupts)?r.interrupts:[];delete r.interrupts,o==="interrupt"?r.outcome={type:"interrupt",interrupts:i}:o==="success"?r.outcome={type:"success"}:delete r.outcome}if(n.type===g.SUBAGENT_FINISHED){let r=n,o=typeof r.outcome=="string"&&r.outcome!==""?r.outcome:void 0,i=Array.isArray(r.interruptIds)?r.interruptIds:[];delete r.interruptIds,o==="suspended"?r.outcome={type:"suspended",...i.length>0&&{interruptIds:i}}:o==="success"?r.outcome={type:"success"}:delete r.outcome}if((n.type===g.RUN_FINISHED||n.type===g.RUN_ERROR)&&Array.isArray(n.usage)&&n.usage.length===0&&delete n.usage,n.type===g.STATE_DELTA)for(let r of n.delta)r.op=Vg[r.op].toLowerCase(),Object.keys(r).forEach(o=>{r[o]===void 0&&delete r[o]});return Object.keys(n).forEach(r=>{n[r]===void 0&&delete n[r]}),fo.parse(n)}var Sa="application/vnd.ag-ui.event+proto";var Xg=/^[v^~<>=]*?(\d+)(?:\.([x*]|\d+)(?:\.([x*]|\d+)(?:\.([x*]|\d+))?(?:-([\da-z\-]+(?:\.[\da-z\-]+)*))?(?:\+[\da-z\-]+(?:\.[\da-z\-]+)*)?)?)?$/i,Aa=t=>{if(typeof t!="string")throw new TypeError("Invalid argument expected string");let e=t.match(Xg);if(!e)throw new Error(`Invalid argument not valid semver ('${t}' received)`);return e.shift(),e},cd=t=>t==="*"||t==="x"||t==="X",ud=t=>{let e=parseInt(t,10);return isNaN(e)?t:e},Yg=(t,e)=>typeof t!=typeof e?[String(t),String(e)]:[t,e],Kg=(t,e)=>{if(cd(t)||cd(e))return 0;let[n,r]=Yg(ud(t),ud(e));return n>r?1:n<r?-1:0},ka=(t,e)=>{for(let n=0;n<Math.max(t.length,e.length);n++){let r=Kg(t[n]||"0",e[n]||"0");if(r!==0)return r}return 0};var Wn=(t,e)=>{let n=Aa(t),r=Aa(e),o=n.pop(),i=r.pop(),s=ka(n,r);return s!==0?s:o&&i?ka(o.split("."),i.split(".")):o||i?o?-1:1:0};var J=t=>{if(typeof structuredClone=="function")return structuredClone(t);try{return JSON.parse(JSON.stringify(t))}catch{return Array.isArray(t)?[...t]:{...t}}};function Ie(){return Rt()}function Ca(t){if(Object.freeze(t),typeof t=="object"&&t)for(let e of Object.values(t))typeof e=="object"&&e&&!Object.isFrozen(e)&&Ca(e);return t}var dd=512*1024;function pd(t,e,n){let r=0,o=[t,e],i=new WeakSet;for(;o.length>0;){let s=o.pop();if(typeof s=="string"){if(r+=s.length,r>n)return!0}else if(typeof s=="object"&&s){if(i.has(s))continue;if(i.add(s),Array.isArray(s))for(let a=0;a<s.length;a++)o.push(s[a]);else{let a=Object.keys(s);for(let l=0;l<a.length;l++){let c=a[l];if(r+=c.length,r>n)return!0;o.push(s[c])}}}}return!1}async function ne(t,e,n,r){let o=typeof process<"u"&&process.env!==void 0,i=o&&!!process.env.VITEST_WORKER_ID,s=o&&!!process.env.VITEST_WORKER_ID,a=s&&!pd(e,n,dd),l=a?J(e):e,c=a?J(n):n,d=!1,m=!1,x;for(let f of t)try{a&&(Ca(l),Ca(c));let p=await r(f,l,c);if(p===void 0)continue;let b=!1;if(p.messages!==void 0&&p.messages!==l&&(l=J(p.messages),d=!0,b=!0),p.state!==void 0&&p.state!==c&&(c=J(p.state),m=!0,b=!0),a&&b&&pd(l,c,dd)&&(a=!1),x=p.stopPropagation,x===!0)break}catch(p){if(s&&p instanceof TypeError){if(i)throw p;console.error("AG-UI: Subscriber attempted to mutate frozen inputs in-place. Return mutations via AgentStateMutation instead of mutating directly.",p)}else i||console.error("Subscriber error:",p);continue}return{...d?{messages:Object.isFrozen(l)?J(l):l}:{},...m?{state:Object.isFrozen(c)?J(c):c}:{},...x===void 0?{}:{stopPropagation:x}}}function Oi(t){if(!t)return{enabled:!1,events:!1,lifecycle:!1,verbose:!1};if(t===!0)return{enabled:!0,events:!0,lifecycle:!0,verbose:!0};let e=t.events??!0,n=t.lifecycle??!0,r=t.verbose??!1;return{enabled:e||n,events:e,lifecycle:n,verbose:r}}function Er(t){if(t instanceof Na)return t;if(t===!0)return new Na(Oi(!0))}var Na=class{constructor(t){this.config=t}event(t,e,n,r){this.config.events&&(this.config.verbose?console.debug(`[${t}] ${e}`,typeof n=="string"?n:JSON.stringify(n)):console.debug(`[${t}] ${e}`,r??n))}lifecycle(t,e,n){this.config.lifecycle&&(n?console.debug(`[${t}] ${e}`,n):console.debug(`[${t}] ${e}`))}get eventsEnabled(){return this.config.events}get lifecycleEnabled(){return this.config.lifecycle}get enabled(){return this.config.enabled}};function Ia(t){return t.enabled?new Na(t):void 0}function Zg(t,e,n){if(e){let o=t.find(s=>s.id===e);if(o?.role==="assistant")return o;o&&console.warn(`TOOL_CALL_START: parentMessageId '${e}' matches a '${o.role}' message, not assistant \u2014 falling back to toolCallId`);let i={id:o?n:e,role:"assistant",toolCalls:[]};return t.push(i),i}let r={id:n,role:"assistant",toolCalls:[]};return t.push(r),r}function Be(t,e){return!t||e.metadata===void 0?!1:(t.metadata=Oc(t.metadata,J(e.metadata)),!0)}var wd=(t,e,n,r,o)=>{let i=Er(o),s=J(n.messages),a=J(t.state),l={},c=m=>{m.messages!==void 0&&(s=m.messages,l.messages=m.messages),m.state!==void 0&&(a=m.state,l.state=m.state)},d=()=>{let m=J(l);return l={},m.messages!==void 0||m.state!==void 0?te(m):No};return e.pipe(qo(async m=>{let x=await ne(r,s,a,(f,p,b)=>f.onEvent?.({event:m,agent:n,input:t,messages:p,state:b}));if(c(x),x.stopPropagation===!0?i?.event("APPLY","Event dropped:",m,{type:m.type,reason:"stopPropagation by subscriber"}):i?.event("APPLY","Event applied:",m,{type:m.type,subscribers:r.length}),x.stopPropagation===!0)return d();switch(m.type){case g.TEXT_MESSAGE_START:{let f=await ne(r,s,a,(p,b,w)=>p.onTextMessageStartEvent?.({event:m,messages:b,state:w,agent:n,input:t}));if(c(f),f.stopPropagation!==!0){let{messageId:p,role:b="assistant",name:w,subagentRunId:_}=m,S=s.find(v=>v.id===p);if(S?.role==="activity")return console.warn(`TEXT_MESSAGE_START: Message '${p}' is an activity message \u2014 message ids must be unique across activity and text messages`),d();let M=S;if(!M){let v={id:p,role:b,content:"",...w!==void 0&&{name:w},..._!=null&&{subagentRunId:_}};s.push(v),M=v}let P=Be(M,m);(!S||P)&&c({messages:s})}return d()}case g.TEXT_MESSAGE_CONTENT:{let{messageId:f,delta:p}=m,b=s.find(_=>_.id===f);if(!b)return console.warn(`TEXT_MESSAGE_CONTENT: No message found with ID '${f}'`),d();if(b.role==="activity")return console.warn(`TEXT_MESSAGE_CONTENT: Message '${f}' is an activity message \u2014 message ids must be unique across activity and text messages`),d();let w=await ne(r,s,a,(_,S,M)=>_.onTextMessageContentEvent?.({event:m,messages:S,state:M,agent:n,input:t,textMessageBuffer:typeof b.content=="string"?b.content:""}));return c(w),w.stopPropagation!==!0&&(b.content=`${typeof b.content=="string"?b.content:""}${p}`,Be(b,m),c({messages:s})),d()}case g.TEXT_MESSAGE_END:{let{messageId:f}=m,p=s.find(w=>w.id===f);if(!p)return console.warn(`TEXT_MESSAGE_END: No message found with ID '${f}'`),d();if(p.role==="activity")return console.warn(`TEXT_MESSAGE_END: Message '${f}' is an activity message \u2014 message ids must be unique across activity and text messages`),d();let b=await ne(r,s,a,(w,_,S)=>w.onTextMessageEndEvent?.({event:m,messages:_,state:S,agent:n,input:t,textMessageBuffer:typeof p.content=="string"?p.content:""}));return c(b),b.stopPropagation!==!0&&Be(p,m)&&c({messages:s}),await Promise.all(r.map(w=>{w.onNewMessage?.({message:p,messages:s,state:a,agent:n,input:t})})),d()}case g.TOOL_CALL_START:{let f=await ne(r,s,a,(p,b,w)=>p.onToolCallStartEvent?.({event:m,messages:b,state:w,agent:n,input:t}));if(c(f),f.stopPropagation!==!0){let{toolCallId:p,toolCallName:b,parentMessageId:w,subagentRunId:_}=m,S=s.find(A=>A.toolCalls?.some(E=>E.id===p))?.toolCalls?.find(A=>A.id===p);if(S){let A=S.function.name!==b;return A&&(console.warn(`TOOL_CALL_START: tool call '${p}' already exists with name '${S.function.name}' \u2014 updating it to '${b}'`),S.function.name=b),(Be(S,m)||A)&&c({messages:s}),d()}let M=new Set(s.map(A=>A.id)),P=Zg(s,w,p);!M.has(P.id)&&_!=null&&P.subagentRunId===void 0&&(P.subagentRunId=_),P.toolCalls??=[];let v={id:p,type:"function",function:{name:b,arguments:""}};P.toolCalls.push(v),Be(v,m),c({messages:s})}return d()}case g.TOOL_CALL_ARGS:{let{toolCallId:f,delta:p}=m,b=s.find(S=>S.toolCalls?.some(M=>M.id===f));if(!b)return console.warn(`TOOL_CALL_ARGS: No message found containing tool call with ID '${f}'`),d();let w=b.toolCalls?.find(S=>S.id===f);if(!w)return console.warn(`TOOL_CALL_ARGS: No tool call found with ID '${f}'`),d();let _=await ne(r,s,a,(S,M,P)=>{let v=w.function.arguments,A=w.function.name,E={};try{E=Yo(v)}catch{}return S.onToolCallArgsEvent?.({event:m,messages:M,state:P,agent:n,input:t,toolCallBuffer:v,toolCallName:A,partialToolCallArgs:E})});return c(_),_.stopPropagation!==!0&&(w.function.arguments+=p,Be(w,m),c({messages:s})),d()}case g.TOOL_CALL_END:{let{toolCallId:f}=m,p=s.find(_=>_.toolCalls?.some(S=>S.id===f));if(!p)return console.warn(`TOOL_CALL_END: No message found containing tool call with ID '${f}'`),d();let b=p.toolCalls?.find(_=>_.id===f);if(!b)return console.warn(`TOOL_CALL_END: No tool call found with ID '${f}'`),d();let w=await ne(r,s,a,(_,S,M)=>{let P=b.function.arguments,v=b.function.name,A={};try{A=JSON.parse(P)}catch{}return _.onToolCallEndEvent?.({event:m,messages:S,state:M,agent:n,input:t,toolCallName:v,toolCallArgs:A})});return c(w),w.stopPropagation!==!0&&Be(b,m)&&c({messages:s}),await Promise.all(r.map(_=>{_.onNewToolCall?.({toolCall:b,messages:s,state:a,agent:n,input:t})})),d()}case g.TOOL_CALL_RESULT:{let f=await ne(r,s,a,(p,b,w)=>p.onToolCallResultEvent?.({event:m,messages:b,state:w,agent:n,input:t}));if(c(f),f.stopPropagation!==!0){let{messageId:p,toolCallId:b,content:w,role:_,subagentRunId:S}=m,M={id:p,toolCallId:b,role:_||"tool",content:w,...S!=null&&{subagentRunId:S}};Be(M,m);let P=s.findIndex(v=>v.role==="assistant"&&v.toolCalls?.some(A=>A.id===b));if(P===-1)s.push(M);else{let v=P+1;for(;v<s.length&&s[v].role==="tool";)v++;s.splice(v,0,M)}await Promise.all(r.map(v=>{v.onNewMessage?.({message:M,messages:s,state:a,agent:n,input:t})})),c({messages:s})}return d()}case g.STATE_SNAPSHOT:{let f=await ne(r,s,a,(p,b,w)=>p.onStateSnapshotEvent?.({event:m,messages:b,state:w,agent:n,input:t}));if(c(f),f.stopPropagation!==!0){let{snapshot:p}=m;a=p,c({state:a})}return d()}case g.STATE_DELTA:{let f=await ne(r,s,a,(p,b,w)=>p.onStateDeltaEvent?.({event:m,messages:b,state:w,agent:n,input:t}));if(c(f),f.stopPropagation!==!0){let{delta:p}=m;try{a=wo.applyPatch(a,p,!0,!1).newDocument,c({state:a})}catch(b){let w=b instanceof Error?b.message:String(b);console.warn(`Failed to apply state patch:
Current state: ${JSON.stringify(a,null,2)}
Patch operations: ${JSON.stringify(p,null,2)}
Error: ${w}`)}}return d()}case g.MESSAGES_SNAPSHOT:{let f=await ne(r,s,a,(p,b,w)=>p.onMessagesSnapshotEvent?.({event:m,messages:b,state:w,agent:n,input:t}));if(c(f),f.stopPropagation!==!0){let{messages:p}=m,b=p.map(v=>{if(v.subagentRunId!==null)return v;let A={...v};return delete A.subagentRunId,A}),w=new Map(b.map(v=>[v.id,v])),_=b.some(v=>v.role==="activity"),S=b.some(v=>v.role==="reasoning"),M=v=>v.role==="activity"&&!_||v.role==="reasoning"&&!S;s=s.filter(v=>M(v)||w.has(v.id)).map(v=>M(v)?v:w.get(v.id));let P=new Set(s.map(v=>v.id));for(let v of b)P.has(v.id)||s.push(v);c({messages:s})}return d()}case g.ACTIVITY_SNAPSHOT:{let f=m,p=s.findIndex(M=>M.id===f.messageId),b=p>=0?s[p]:void 0,w=b?.role==="activity"?b:void 0,_=f.replace??!0,S=await ne(r,s,a,(M,P,v)=>M.onActivitySnapshotEvent?.({event:f,messages:P,state:v,agent:n,input:t,activityMessage:w,existingMessage:b}));if(c(S),S.stopPropagation!==!0){let M={id:f.messageId,role:"activity",activityType:f.activityType,content:J(f.content),...f.subagentRunId!=null&&{subagentRunId:f.subagentRunId}},P,v;p===-1?(s.push(M),P=M,v=M):w?(_&&(s[p]={...w,activityType:f.activityType,content:J(f.content),subagentRunId:f.subagentRunId},f.subagentRunId??delete s[p].subagentRunId),v=s[p]):_&&(s[p]=M,P=M,v=M),Be(v,f),c({messages:s}),P&&await Promise.all(r.map(A=>A.onNewMessage?.({message:P,messages:s,state:a,agent:n,input:t})))}return d()}case g.ACTIVITY_DELTA:{let f=m,p=s.findIndex(S=>S.id===f.messageId);if(p===-1)return d();let b=s[p];if(b.role!=="activity")return console.warn(`ACTIVITY_DELTA: Message '${f.messageId}' is not an activity message`),d();let w=b,_=await ne(r,s,a,(S,M,P)=>S.onActivityDeltaEvent?.({event:f,messages:M,state:P,agent:n,input:t,activityMessage:w}));if(c(_),_.stopPropagation!==!0)try{Be(w,f)&&c({messages:s});let S=J(w.content??{}),M=wo.applyPatch(S,f.patch??[],!0,!1).newDocument;s[p]={...w,content:J(M),activityType:f.activityType},c({messages:s})}catch(S){let M=S instanceof Error?S.message:String(S);console.warn(`Failed to apply activity patch for '${f.messageId}': ${M}`)}return d()}case g.RAW:return c(await ne(r,s,a,(f,p,b)=>f.onRawEvent?.({event:m,messages:p,state:b,agent:n,input:t}))),d();case g.CUSTOM:return c(await ne(r,s,a,(f,p,b)=>f.onCustomEvent?.({event:m,messages:p,state:b,agent:n,input:t}))),d();case g.RUN_STARTED:{let f=await ne(r,s,a,(p,b,w)=>p.onRunStartedEvent?.({event:m,messages:b,state:w,agent:n,input:t}));if(c(f),f.stopPropagation!==!0){let p=m;if(p.input?.messages){for(let b of p.input.messages){let w=b;if(b.subagentRunId===null){let _={...b};delete _.subagentRunId,w=_}s.find(_=>_.id===w.id)||s.push(w)}c({messages:s})}}return d()}case g.RUN_FINISHED:{let f=m,p=f.outcome?.type==="interrupt"?{event:f,outcome:"interrupt",interrupts:f.outcome.interrupts}:{event:f,outcome:"success",result:f.result},b=await ne(r,s,a,(w,_,S)=>w.onRunFinishedEvent?.({...p,messages:_,state:S,agent:n,input:t}));return c(b),b.stopPropagation!==!0&&(n.pendingInterrupts=p.outcome==="interrupt"?p.interrupts.map(w=>{if(w.subagentRunId!==null)return w;let _={...w};return delete _.subagentRunId,_}):[]),d()}case g.RUN_ERROR:return c(await ne(r,s,a,(f,p,b)=>f.onRunErrorEvent?.({event:m,messages:p,state:b,agent:n,input:t}))),d();case g.STEP_STARTED:return c(await ne(r,s,a,(f,p,b)=>f.onStepStartedEvent?.({event:m,messages:p,state:b,agent:n,input:t}))),d();case g.STEP_FINISHED:return c(await ne(r,s,a,(f,p,b)=>f.onStepFinishedEvent?.({event:m,messages:p,state:b,agent:n,input:t}))),d();case g.TEXT_MESSAGE_CHUNK:throw Error("TEXT_MESSAGE_CHUNK must be transformed before being applied");case g.TOOL_CALL_CHUNK:throw Error("TOOL_CALL_CHUNK must be transformed before being applied");case g.THINKING_START:return d();case g.THINKING_END:return d();case g.THINKING_TEXT_MESSAGE_START:return d();case g.THINKING_TEXT_MESSAGE_CONTENT:return d();case g.THINKING_TEXT_MESSAGE_END:return d();case g.REASONING_START:return c(await ne(r,s,a,(f,p,b)=>f.onReasoningStartEvent?.({event:m,messages:p,state:b,agent:n,input:t}))),d();case g.REASONING_MESSAGE_START:{let f=await ne(r,s,a,(p,b,w)=>p.onReasoningMessageStartEvent?.({event:m,messages:b,state:w,agent:n,input:t}));if(c(f),f.stopPropagation!==!0){let{messageId:p,subagentRunId:b}=m,w=s.find(M=>M.id===p),_=w;if(!_){let M={id:p,role:"reasoning",content:"",...b!=null&&{subagentRunId:b}};s.push(M),_=M}let S=Be(_,m);(!w||S)&&c({messages:s})}return d()}case g.REASONING_MESSAGE_CONTENT:{let{messageId:f,delta:p}=m,b=s.find(_=>_.id===f);if(!b)return console.warn(`REASONING_MESSAGE_CONTENT: No message found with ID '${f}'`),d();let w=await ne(r,s,a,(_,S,M)=>_.onReasoningMessageContentEvent?.({event:m,messages:S,state:M,agent:n,input:t,reasoningMessageBuffer:typeof b.content=="string"?b.content:""}));return c(w),w.stopPropagation!==!0&&(b.content=`${typeof b.content=="string"?b.content:""}${p}`,Be(b,m),c({messages:s})),d()}case g.REASONING_MESSAGE_END:{let{messageId:f}=m,p=s.find(w=>w.id===f);if(!p)return console.warn(`REASONING_MESSAGE_END: No message found with ID '${f}'`),d();let b=await ne(r,s,a,(w,_,S)=>w.onReasoningMessageEndEvent?.({event:m,messages:_,state:S,agent:n,input:t,reasoningMessageBuffer:typeof p.content=="string"?p.content:""}));return c(b),b.stopPropagation!==!0&&Be(p,m)&&c({messages:s}),await Promise.all(r.map(w=>{w.onNewMessage?.({message:p,messages:s,state:a,agent:n,input:t})})),d()}case g.REASONING_MESSAGE_CHUNK:throw Error("REASONING_MESSAGE_CHUNK must be transformed before being applied");case g.REASONING_END:return c(await ne(r,s,a,(f,p,b)=>f.onReasoningEndEvent?.({event:m,messages:p,state:b,agent:n,input:t}))),d();case g.REASONING_ENCRYPTED_VALUE:{let{subtype:f,entityId:p,encryptedValue:b}=m,w=await ne(r,s,a,(_,S,M)=>_.onReasoningEncryptedValueEvent?.({event:m,messages:S,state:M,agent:n,input:t}));if(c(w),w.stopPropagation!==!0){let _=!1;if(f==="tool-call"){for(let S of s)if(S.role==="assistant"&&S.toolCalls){let M=S.toolCalls.find(P=>P.id===p);if(M){M.encryptedValue=b,_=!0;break}}}else{let S=s.find(M=>M.id===p);S?.role!=="activity"&&S&&(S.encryptedValue=b,_=!0)}_&&(l.messages=s)}return d()}case g.SUBAGENT_STARTED:return c(await ne(r,s,a,(f,p,b)=>f.onSubagentStartedEvent?.({event:m,messages:p,state:b,agent:n,input:t}))),d();case g.SUBAGENT_FINISHED:return c(await ne(r,s,a,(f,p,b)=>f.onSubagentFinishedEvent?.({event:m,messages:p,state:b,agent:n,input:t}))),d();case g.SUBAGENT_ERROR:return c(await ne(r,s,a,(f,p,b)=>f.onSubagentErrorEvent?.({event:m,messages:p,state:b,agent:n,input:t}))),d()}return m.type,d()}),ca(),r.length>0?da({}):m=>m)},Ra=t=>e=>{let n=Er(t),r=new Set,o=new Set,i=new Set,s={message:new Map,toolCall:new Map,activity:new Map,reasoning:new Map},a=!1,l=!1,c=!1,d=new Map,m=v=>{let A=d.get(v);return A||(A=new Map,d.set(v,A)),A},x=()=>{for(let v of d.values())if(v.size>0)return!0;return!1},f=new Map,p=new Set,b=!1,w=!1,_=!1,S=()=>{r.clear(),o.clear(),i.clear(),s.message.clear(),s.toolCall.clear(),s.activity.clear(),s.reasoning.clear(),d.clear(),f.clear(),p.clear(),b=!1,w=!1,a=!1,l=!1,_=!0},M=(v,A)=>{let E=v??[];if(Array.isArray(E))for(let I of E){if(!I||typeof I.id!="string")continue;if(I.subagentRunId===null)return new B(`Cannot send a message (id '${I.id}') with 'subagentRunId: null'. The field is optional \u2014 omit it entirely.`);let Z=I.role==="reasoning"?s.reasoning:I.role==="activity"?s.activity:s.message;(A||!Z.has(I.id))&&Z.set(I.id,{subagentRunId:I.subagentRunId});for(let be of I.toolCalls??[])be&&typeof be.id=="string"&&(A||!s.toolCall.has(be.id))&&s.toolCall.set(be.id,{subagentRunId:I.subagentRunId??void 0})}},P=(v,A,E,I,Z)=>{if(A!==void 0&&E&&E.subagentRunId!==A)return new B(`Cannot send '${v}': subagentRunId '${A}' does not match the ${I} '${Z}' opener's subagent '${E.subagentRunId??"(the parent agent)"}'.`)};return e.pipe(Fe(v=>{let A=v.type;if(n?.event("VERIFY","Event:",v,{type:v.type}),l&&A!==g.RUN_STARTED)return G(()=>new B(`Cannot send event type '${A}': The run has already errored with 'RUN_ERROR'. No further events can be sent.`));if(a&&A!==g.RUN_ERROR&&A!==g.RUN_STARTED)return G(()=>new B(`Cannot send event type '${A}': The run has already finished with 'RUN_FINISHED'. Start a new run with 'RUN_STARTED'.`));if(c){if(A===g.RUN_STARTED){if(_&&!a&&!l)return G(()=>new B("Cannot send 'RUN_STARTED' while a run is still active. The previous run must be finished with 'RUN_FINISHED' before starting a new run."));(a||l)&&S()}}else if(c=!0,A!==g.RUN_STARTED&&A!==g.RUN_ERROR)return G(()=>new B("First event must be 'RUN_STARTED'"));if(v.subagentRunId===null)return G(()=>new B(`Cannot send '${A}' with 'subagentRunId: null'. The field is optional \u2014 omit it entirely.`));if(A===g.SUBAGENT_STARTED||A===g.SUBAGENT_FINISHED||A===g.SUBAGENT_ERROR){let E=A===g.SUBAGENT_STARTED?["description","parentSubagentRunId","parentToolCallId","parentMessageId"]:A===g.SUBAGENT_FINISHED?["outcome"]:["code"];for(let Z of E)if(v[Z]===null)return G(()=>new B(`Cannot send '${A}' with '${Z}: null'. The field is optional \u2014 omit it entirely.`));let I=v.outcome;if(I!=null&&I.type!=="success"&&I.type!=="suspended")return G(()=>new B(`Cannot send '${A}' with outcome type '${String(I.type)}'. The outcome is either { type: "success" } or { type: "suspended" }.`));if(I&&I.interruptIds===null)return G(()=>new B(`Cannot send '${A}' with 'outcome.interruptIds: null'. The field is optional \u2014 omit it entirely.`));if(I&&Array.isArray(I.interruptIds)&&I.interruptIds.some(Z=>typeof Z!="string"))return G(()=>new B(`Cannot send '${A}' with a non-string entry in 'outcome.interruptIds'. Interrupt ids are strings.`))}if(A===g.RUN_FINISHED){let E=v.outcome;if(E?.type==="interrupt"&&Array.isArray(E.interrupts)){for(let I of E.interrupts)if(I&&I.subagentRunId===null)return G(()=>new B(`Cannot send 'RUN_FINISHED' with an interrupt (id '${I.id}') carrying 'subagentRunId: null'. The field is optional \u2014 omit it entirely.`))}}switch(A){case g.TEXT_MESSAGE_START:{let E=v.messageId;if(r.has(E))return G(()=>new B(`Cannot send 'TEXT_MESSAGE_START' event: A text message with ID '${E}' is already in progress. Complete it with 'TEXT_MESSAGE_END' first.`));let I=s.message.get(E);if(I){let Z=P(A,v.subagentRunId,I,"message",E);if(Z)return G(()=>Z)}return r.add(E),I||s.message.set(E,{subagentRunId:v.subagentRunId}),te(v)}case g.TEXT_MESSAGE_CONTENT:{let E=v.messageId;if(!r.has(E))return G(()=>new B(`Cannot send 'TEXT_MESSAGE_CONTENT' event: No active text message found with ID '${E}'. Start a text message with 'TEXT_MESSAGE_START' first.`));let I=P(A,v.subagentRunId,s.message.get(E),"message",E);return I?G(()=>I):te(v)}case g.TEXT_MESSAGE_END:{let E=v.messageId;if(!r.has(E))return G(()=>new B(`Cannot send 'TEXT_MESSAGE_END' event: No active text message found with ID '${E}'. A 'TEXT_MESSAGE_START' event must be sent first.`));let I=P(A,v.subagentRunId,s.message.get(E),"message",E);return I?G(()=>I):(r.delete(E),te(v))}case g.TOOL_CALL_START:{let E=v.toolCallId;if(o.has(E))return G(()=>new B(`Cannot send 'TOOL_CALL_START' event: A tool call with ID '${E}' is already in progress. Complete it with 'TOOL_CALL_END' first.`));let I=v.parentMessageId,Z=v.subagentRunId,be;if(I!==void 0){let qe=s.message.get(I);if(qe){if(Z!==void 0&&Z!==qe.subagentRunId)return G(()=>new B(`Cannot send 'TOOL_CALL_START': subagentRunId '${Z}' does not match its parent message '${I}' owner '${qe.subagentRunId??"(the parent agent)"}'. A tool call belongs to the message that carries it.`));be=qe}}let ve=s.toolCall.get(E);if(ve){let qe=P(A,Z,ve,"tool call",E);if(qe)return G(()=>qe);if(Z===void 0&&be&&be.subagentRunId!==ve.subagentRunId)return G(()=>new B(`Cannot send 'TOOL_CALL_START': tool call '${E}' is owned by '${ve.subagentRunId??"(the parent agent)"}' but its parent message '${I}' is owned by '${be.subagentRunId??"(the parent agent)"}'. A tool call belongs to the message that carries it.`))}return o.add(E),ve||s.toolCall.set(E,Z===void 0?be??{subagentRunId:void 0}:{subagentRunId:Z}),te(v)}case g.TOOL_CALL_ARGS:{let E=v.toolCallId;if(!o.has(E))return G(()=>new B(`Cannot send 'TOOL_CALL_ARGS' event: No active tool call found with ID '${E}'. Start a tool call with 'TOOL_CALL_START' first.`));let I=P(A,v.subagentRunId,s.toolCall.get(E),"tool call",E);return I?G(()=>I):te(v)}case g.TOOL_CALL_END:{let E=v.toolCallId;if(!o.has(E))return G(()=>new B(`Cannot send 'TOOL_CALL_END' event: No active tool call found with ID '${E}'. A 'TOOL_CALL_START' event must be sent first.`));let I=P(A,v.subagentRunId,s.toolCall.get(E),"tool call",E);return I?G(()=>I):(o.delete(E),te(v))}case g.STEP_STARTED:{let E=v.stepName,I=v.subagentRunId;return m(I).has(E)?G(()=>new B(`Step "${E}" is already active for 'STEP_STARTED'${I===void 0?"":` in subagent '${I}'`}`)):(m(I).set(E,!0),te(v))}case g.STEP_FINISHED:{let E=v.stepName,I=v.subagentRunId;if(!m(I).has(E)){let Z,be=!1;for(let[ve,qe]of d)if(ve!==I&&qe.has(E)){Z=ve,be=!0;break}return G(be?()=>new B(`Cannot send 'STEP_FINISHED' for step "${E}" attributed to ${I===void 0?"the parent agent":`subagent '${I}'`}: that step is open under ${Z===void 0?"the parent agent":`subagent '${Z}'`}. A step must be finished by whoever started it.`):()=>new B(`Cannot send 'STEP_FINISHED' for step "${E}" that was not started`))}return m(I).delete(E),te(v)}case g.ACTIVITY_SNAPSHOT:{let E=v.messageId;return(!s.activity.has(E)||v.replace!==!1)&&s.activity.set(E,{subagentRunId:v.subagentRunId}),te(v)}case g.TOOL_CALL_RESULT:{let E=v.messageId;return typeof E=="string"&&s.message.set(E,{subagentRunId:v.subagentRunId}),te(v)}case g.REASONING_START:case g.REASONING_MESSAGE_START:{let E=v.messageId,I=s.reasoning.get(E);if(I){let Z=P(A,v.subagentRunId,I,"reasoning message",E);if(Z)return G(()=>Z)}return i.add(E),I||s.reasoning.set(E,{subagentRunId:v.subagentRunId}),te(v)}case g.REASONING_MESSAGE_CONTENT:case g.REASONING_MESSAGE_END:case g.REASONING_END:{let E=v.messageId,I=P(A,v.subagentRunId,s.reasoning.get(E),"reasoning message",E);return I?G(()=>I):(A===g.REASONING_END&&i.delete(E),te(v))}case g.REASONING_ENCRYPTED_VALUE:{let E=v.entityId,I=v.subtype,Z=I==="tool-call"?s.toolCall.get(E):I==="message"?s.message.get(E)??s.reasoning.get(E):s.reasoning.get(E),be=I==="tool-call"?"tool call":I==="message"?"message":"reasoning message",ve=P(A,v.subagentRunId,Z,be,E);return ve?G(()=>ve):te(v)}case g.ACTIVITY_DELTA:{let E=v.messageId,I=P(A,v.subagentRunId,s.activity.get(E),"activity",E);return I?G(()=>I):te(v)}case g.SUBAGENT_STARTED:{if(typeof v.subagentRunId!="string")return G(()=>new B("Cannot send 'SUBAGENT_STARTED' without a 'subagentRunId'."));if(typeof v.name!="string")return G(()=>new B("Cannot send 'SUBAGENT_STARTED' without a 'name'."));let E=v.subagentRunId,I=v.parentSubagentRunId;return f.has(E)?G(()=>new B(`Cannot send 'SUBAGENT_STARTED': subagent '${E}' is already active. Finish it with 'SUBAGENT_FINISHED' first.`)):p.has(E)?G(()=>new B(`Cannot send 'SUBAGENT_STARTED': subagent '${E}' has already finished in this run. Subagent IDs are per-invocation and cannot be reused.`)):I!==void 0&&!f.has(I)&&!p.has(I)?G(()=>new B(`Cannot send 'SUBAGENT_STARTED': parentSubagentRunId '${I}' has not been started in this run.`)):(f.set(E,!0),te(v))}case g.SUBAGENT_FINISHED:case g.SUBAGENT_ERROR:{if(typeof v.subagentRunId!="string")return G(()=>new B(`Cannot send '${A}' without a 'subagentRunId'.`));if(A===g.SUBAGENT_ERROR&&typeof v.message!="string")return G(()=>new B("Cannot send 'SUBAGENT_ERROR' without a 'message'."));let E=v.subagentRunId;return f.has(E)?(f.delete(E),p.add(E),te(v)):G(()=>new B(`Cannot send '${A}': no active subagent found with ID '${E}'. A 'SUBAGENT_STARTED' event must be sent first.`))}case g.MESSAGES_SNAPSHOT:{let E=M(v.messages,!0);if(E)return G(()=>E)}return te(v);case g.RUN_STARTED:_=!0;{let E=M((v.input??{}).messages,!1);if(E)return G(()=>E)}return te(v);case g.RUN_FINISHED:if(x()){let E=[];for(let[Z,be]of d)for(let ve of be.keys())E.push(Z===void 0?ve:`${ve} (subagent '${Z}')`);let I=E.join(", ");return G(()=>new B(`Cannot send 'RUN_FINISHED' while steps are still active: ${I}`))}if(r.size>0){let E=Array.from(r.keys()).join(", ");return G(()=>new B(`Cannot send 'RUN_FINISHED' while text messages are still active: ${E}`))}if(o.size>0){let E=Array.from(o.keys()).join(", ");return G(()=>new B(`Cannot send 'RUN_FINISHED' while tool calls are still active: ${E}`))}if(f.size>0){let E=Array.from(f.keys()).join(", ");return G(()=>new B(`Cannot send 'RUN_FINISHED' while subagents are still active: ${E}`))}return a=!0,te(v);case g.RUN_ERROR:return l=!0,te(v);case g.CUSTOM:return te(v);case g.THINKING_TEXT_MESSAGE_START:return b?w?G(()=>new B("Cannot send 'THINKING_TEXT_MESSAGE_START' event: A thinking message is already in progress. Complete it with 'THINKING_TEXT_MESSAGE_END' first.")):(w=!0,te(v)):G(()=>new B("Cannot send 'THINKING_TEXT_MESSAGE_START' event: A thinking step is not in progress. Create one with 'THINKING_START' first."));case g.THINKING_TEXT_MESSAGE_CONTENT:return w?te(v):G(()=>new B("Cannot send 'THINKING_TEXT_MESSAGE_CONTENT' event: No active thinking message found. Start a message with 'THINKING_TEXT_MESSAGE_START' first."));case g.THINKING_TEXT_MESSAGE_END:return w?(w=!1,te(v)):G(()=>new B("Cannot send 'THINKING_TEXT_MESSAGE_END' event: No active thinking message found. A 'THINKING_TEXT_MESSAGE_START' event must be sent first."));case g.THINKING_START:return b?G(()=>new B("Cannot send 'THINKING_START' event: A thinking step is already in progress. End it with 'THINKING_END' first.")):(b=!0,te(v));case g.THINKING_END:return b?(b=!1,te(v)):G(()=>new B("Cannot send 'THINKING_END' event: No active thinking step found. A 'THINKING_START' event must be sent first."));default:return te(v)}}))},pn=(function(t){return t.HEADERS="headers",t.DATA="data",t})({}),Qg=t=>jo(()=>cn(t())).pipe(pa(e=>{if(!e.ok){let o=e.headers.get("content-type")||"";return cn(e.text()).pipe(Fe(i=>{let s=i;if(o.includes("application/json"))try{s=JSON.parse(i)}catch{}let a=Error(`HTTP ${e.status}: ${typeof s=="string"?s:JSON.stringify(s)}`);return a.status=e.status,a.payload=s,G(()=>a)}))}let n={type:pn.HEADERS,status:e.status,headers:e.headers},r=e.body?.getReader();return r?new le(o=>(o.next(n),(async()=>{try{for(;;){let{done:i,value:s}=await r.read();if(i)break;let a={type:pn.DATA,data:s};o.next(a)}o.complete()}catch(i){o.error(i)}})(),()=>{r.cancel().catch(i=>{if(i?.name!=="AbortError")throw i})})):G(()=>Error("Failed to getReader() from response"))})),Jg=(t,e)=>{let n=Er(e),r=new mt,o=new TextDecoder("utf-8",{fatal:!1}),i="";t.subscribe({next:a=>{if(a.type!==pn.HEADERS&&a.type===pn.DATA&&a.data){let l=o.decode(a.data,{stream:!0});i+=l;let c=i.split(/\n\n/);i=c.pop()||"";for(let d of c)s(d)}},error:a=>r.error(a),complete:()=>{i&&(i+=o.decode(),s(i)),r.complete()}});function s(a){let l=a.split(`
`),c=[];for(let d of l)d.startsWith("data:")&&c.push(d.slice(5).replace(/^ /,""));if(c.length>0)try{let d=c.join(`
`),m=JSON.parse(d);n?.event("SSE","Event received:",m,{type:m.type}),r.next(m)}catch(d){r.error(d)}}return r.asObservable()},eb=t=>{let e=new mt,n=new Uint8Array;t.subscribe({next:o=>{if(o.type!==pn.HEADERS&&o.type===pn.DATA&&o.data){let i=new Uint8Array(n.length+o.data.length);i.set(n,0),i.set(o.data,n.length),n=i,r()}},error:o=>e.error(o),complete:()=>{if(n.length>0)try{r()}catch{console.warn("Incomplete or invalid protocol buffer data at stream end")}e.complete()}});function r(){for(;n.length>=4;){let o=4+new DataView(n.buffer,n.byteOffset,4).getUint32(0,!1);if(n.length<o)break;try{let i=n.slice(4,o),s=ld(i);e.next(s),n=n.slice(o)}catch(i){let s=i instanceof Error?i.message:String(i);e.error(Error(`Failed to decode protocol buffer message: ${s}`));return}}}return e.asObservable()},tb=(t,e)=>{let n=Er(e),r=new mt,o=new Co,i=!1;return t.subscribe({next:s=>{if(o.next(s),s.type===pn.HEADERS&&!i){i=!0;let a=s.headers.get("content-type");n?.lifecycle("HTTP","Stream format detected:",{contentType:a,parser:a===Sa?"protobuf":"sse"}),a===Sa?eb(o).subscribe({next:l=>r.next(l),error:l=>r.error(l),complete:()=>r.complete()}):Jg(o,n).subscribe({next:l=>{try{let c=fo.parse(l);n?.event("HTTP","Event validated:",c,{type:c.type,valid:!0}),r.next(c)}catch(c){n?.event("HTTP","Event invalid:",{json:l,error:String(c)}),r.error(c)}},error:l=>{if(l?.name==="AbortError"){r.next({type:g.RUN_ERROR,message:l.message||"Request aborted",code:"abort",rawEvent:l}),r.complete();return}return r.error(l)},complete:()=>r.complete()})}else i||r.error(Error("No headers event received before data events"))},error:s=>{o.error(s),r.error(s)},complete:()=>{o.complete()}}),r.asObservable()},ie=u.enum(["TextMessageStart","TextMessageContent","TextMessageEnd","ActionExecutionStart","ActionExecutionArgs","ActionExecutionEnd","ActionExecutionResult","AgentStateMessage","MetaEvent","RunStarted","RunFinished","RunError","NodeStarted","NodeFinished"]),nb=u.enum(["LangGraphInterruptEvent","PredictState","Exit"]),rb=u.object({type:u.literal(ie.enum.TextMessageStart),messageId:u.string(),parentMessageId:u.string().optional(),role:u.string().optional()}),ob=u.object({type:u.literal(ie.enum.TextMessageContent),messageId:u.string(),content:u.string()}),ib=u.object({type:u.literal(ie.enum.TextMessageEnd),messageId:u.string()}),sb=u.object({type:u.literal(ie.enum.ActionExecutionStart),actionExecutionId:u.string(),actionName:u.string(),parentMessageId:u.string().optional()}),ab=u.object({type:u.literal(ie.enum.ActionExecutionArgs),actionExecutionId:u.string(),args:u.string()}),lb=u.object({type:u.literal(ie.enum.ActionExecutionEnd),actionExecutionId:u.string()}),cb=u.object({type:u.literal(ie.enum.ActionExecutionResult),actionName:u.string(),actionExecutionId:u.string(),result:u.string()}),ub=u.object({type:u.literal(ie.enum.AgentStateMessage),threadId:u.string(),agentName:u.string(),nodeName:u.string(),runId:u.string(),active:u.boolean(),role:u.string(),state:u.string(),running:u.boolean()}),db=u.object({type:u.literal(ie.enum.MetaEvent),name:nb,value:u.any()}),pb=u.object({type:u.literal(ie.enum.RunError),message:u.string(),code:u.string().optional()});u.discriminatedUnion("type",[rb,ob,ib,sb,ab,lb,cb,ub,db,pb]),u.object({id:u.string(),role:u.string(),content:u.string(),parentMessageId:u.string().optional()}),u.object({id:u.string(),name:u.string(),arguments:u.any(),parentMessageId:u.string().optional()}),u.object({id:u.string(),result:u.any(),actionExecutionId:u.string(),actionName:u.string()});var hb=t=>{if(typeof t=="string")return t;if(!Array.isArray(t))return;let e=t.filter(n=>n.type==="text").map(n=>n.text).filter(n=>n.length>0);if(e.length!==0)return e.join(`
`)},fb=(t,e,n)=>r=>{let o={},i=!0,s=!0,a="",l=null,c=null,d=[],m={},x=f=>{typeof f=="object"&&f&&("messages"in f&&delete f.messages,o=f)};return r.pipe(Fe(f=>{switch(f.type){case g.TEXT_MESSAGE_START:{let p=f;return[{type:ie.enum.TextMessageStart,messageId:p.messageId,role:p.role}]}case g.TEXT_MESSAGE_CONTENT:{let p=f;return[{type:ie.enum.TextMessageContent,messageId:p.messageId,content:p.delta}]}case g.TEXT_MESSAGE_END:{let p=f;return[{type:ie.enum.TextMessageEnd,messageId:p.messageId}]}case g.TOOL_CALL_START:{let p=f;return d.push({id:p.toolCallId,type:"function",function:{name:p.toolCallName,arguments:""}}),s=!0,m[p.toolCallId]=p.toolCallName,[{type:ie.enum.ActionExecutionStart,actionExecutionId:p.toolCallId,actionName:p.toolCallName,parentMessageId:p.parentMessageId}]}case g.TOOL_CALL_ARGS:{let p=f,b=d.find(_=>_.id===p.toolCallId);if(!b)return console.warn(`TOOL_CALL_ARGS: No tool call found with ID '${p.toolCallId}'`),[];b.function.arguments+=p.delta;let w=!1;if(c){let _=c.find(S=>S.tool==b.function.name);if(_)try{let S=JSON.parse(Yo(b.function.arguments));_.tool_argument&&_.tool_argument in S?(x({...o,[_.state_key]:S[_.tool_argument]}),w=!0):_.tool_argument||(x({...o,[_.state_key]:S}),w=!0)}catch{}}return[{type:ie.enum.ActionExecutionArgs,actionExecutionId:p.toolCallId,args:p.delta},...w?[{type:ie.enum.AgentStateMessage,threadId:t,agentName:n,nodeName:a,runId:e,running:i,role:"assistant",state:JSON.stringify(o),active:s}]:[]]}case g.TOOL_CALL_END:{let p=f;return[{type:ie.enum.ActionExecutionEnd,actionExecutionId:p.toolCallId}]}case g.TOOL_CALL_RESULT:{let p=f;return[{type:ie.enum.ActionExecutionResult,actionExecutionId:p.toolCallId,result:p.content,actionName:m[p.toolCallId]||"unknown"}]}case g.RAW:return[];case g.CUSTOM:{let p=f;switch(p.name){case"Exit":i=!1;break;case"PredictState":c=p.value;break}return[{type:ie.enum.MetaEvent,name:p.name,value:p.value}]}case g.STATE_SNAPSHOT:return x(f.snapshot),[{type:ie.enum.AgentStateMessage,threadId:t,agentName:n,nodeName:a,runId:e,running:i,role:"assistant",state:JSON.stringify(o),active:s}];case g.STATE_DELTA:{let p=f,b=wo.applyPatch(o,p.delta,!0,!1);return b?(x(b.newDocument),[{type:ie.enum.AgentStateMessage,threadId:t,agentName:n,nodeName:a,runId:e,running:i,role:"assistant",state:JSON.stringify(o),active:s}]):[]}case g.MESSAGES_SNAPSHOT:return l=f.messages,[{type:ie.enum.AgentStateMessage,threadId:t,agentName:n,nodeName:a,runId:e,running:i,role:"assistant",state:JSON.stringify({...o,...l?{messages:l}:{}}),active:!0}];case g.RUN_STARTED:return[];case g.RUN_FINISHED:return l&&(o.messages=l),Object.keys(o).length===0?[]:[{type:ie.enum.AgentStateMessage,threadId:t,agentName:n,nodeName:a,runId:e,running:i,role:"assistant",state:JSON.stringify({...o,...l?{messages:mb(l)}:{}}),active:!1}];case g.RUN_ERROR:{let p=f;return[{type:ie.enum.RunError,message:p.message,code:p.code}]}case g.STEP_STARTED:return a=f.stepName,d=[],c=null,[{type:ie.enum.AgentStateMessage,threadId:t,agentName:n,nodeName:a,runId:e,running:i,role:"assistant",state:JSON.stringify(o),active:!0}];case g.STEP_FINISHED:return d=[],c=null,[{type:ie.enum.AgentStateMessage,threadId:t,agentName:n,nodeName:a,runId:e,running:i,role:"assistant",state:JSON.stringify(o),active:!1}];default:return[]}}))};function mb(t){let e=[];for(let n of t)if(n.role==="assistant"||n.role==="user"||n.role==="system"){let r=hb(n.content);if(r){let o={id:n.id,role:n.role,content:r};e.push(o)}if(n.role==="assistant"&&n.toolCalls&&n.toolCalls.length>0)for(let o of n.toolCalls){let i={id:o.id,name:o.function.name,arguments:JSON.parse(o.function.arguments),parentMessageId:n.id};e.push(i)}}else if(n.role==="tool"){let r="unknown";for(let i of t)if(i.role==="assistant"&&i.toolCalls?.length){for(let s of i.toolCalls)if(s.id===n.toolCallId){r=s.function.name;break}}let o={id:n.id,result:n.content,actionExecutionId:n.toolCallId,actionName:r};e.push(o)}return e}var gb=t=>t.kind==="tool"?t.fields.toolCallId:t.fields.messageId,bb=t=>t==="tool"?"toolCallId":"messageId",Xn=(t,e)=>e.metadata===void 0?t:{...t,metadata:e.metadata},Mi=t=>e=>{let n=Er(t),r=new Map,o=l=>{let c=r.get(l);if(!c)return[];switch(r.delete(l),c.kind){case"text":{let d={type:g.TEXT_MESSAGE_END,messageId:c.fields.messageId,...c.fields.subagentRunId!=null&&{subagentRunId:c.fields.subagentRunId}};return n?.event("TRANSFORM","TEXT_MESSAGE_END",d,{messageId:d.messageId}),[d]}case"tool":{let d={type:g.TOOL_CALL_END,toolCallId:c.fields.toolCallId,...c.fields.subagentRunId!=null&&{subagentRunId:c.fields.subagentRunId}};return n?.event("TRANSFORM","TOOL_CALL_END",d,{toolCallId:d.toolCallId}),[d]}case"reasoning":{let d={type:g.REASONING_MESSAGE_END,messageId:c.fields.messageId,...c.fields.subagentRunId!=null&&{subagentRunId:c.fields.subagentRunId}};return n?.event("TRANSFORM","REASONING_MESSAGE_END",d,{messageId:d.messageId}),[d]}}},i=()=>[...r.keys()].flatMap(l=>o(l)),s=(l,c)=>{for(let[d,m]of r)if(m.kind===l&&gb(m)===c)return{owner:d}},a=(l,c,d,m,x)=>{if(c!==void 0){let p=s(l,c);if(p){if(d!==void 0&&d!==p.owner)throw Error(`Cannot continue ${x} '${c}': chunk subagentRunId '${d}' does not match the open stream's subagent '${p.owner??"(the parent agent)"}'.`);return p.owner}return d}if(d!==void 0)return d;if(r.get(void 0)?.kind===l)return;let f=[...r.entries()].filter(([,p])=>p.kind===l);if(f.length===1)return f[0][0];if(f.length>1)throw Error(`Ambiguous ${m}: it carries neither a ${bb(l)} nor a subagentRunId, but ${f.length} lanes have an open ${x}. Attribute the chunk to the subagent it belongs to.`)};return e.pipe(Fe(l=>{switch(l.type){case g.TEXT_MESSAGE_START:case g.TEXT_MESSAGE_CONTENT:case g.TEXT_MESSAGE_END:case g.TOOL_CALL_START:case g.TOOL_CALL_ARGS:case g.TOOL_CALL_END:case g.TOOL_CALL_RESULT:case g.STATE_SNAPSHOT:case g.STATE_DELTA:case g.CUSTOM:case g.STEP_STARTED:case g.STEP_FINISHED:case g.THINKING_START:case g.THINKING_END:case g.THINKING_TEXT_MESSAGE_START:case g.THINKING_TEXT_MESSAGE_CONTENT:case g.THINKING_TEXT_MESSAGE_END:case g.REASONING_START:case g.REASONING_MESSAGE_START:case g.REASONING_MESSAGE_CONTENT:case g.REASONING_MESSAGE_END:case g.REASONING_END:return[...o(l.subagentRunId??void 0),l];case g.RUN_STARTED:case g.RUN_FINISHED:case g.RUN_ERROR:case g.MESSAGES_SNAPSHOT:return[...i(),l];case g.RAW:case g.ACTIVITY_SNAPSHOT:case g.ACTIVITY_DELTA:case g.REASONING_ENCRYPTED_VALUE:case g.SUBAGENT_STARTED:return[l];case g.SUBAGENT_FINISHED:case g.SUBAGENT_ERROR:{let c=l.subagentRunId;return c==null?[l]:[...o(c),l]}case g.TEXT_MESSAGE_CHUNK:{let c=l,d=a("text",c.messageId,c.subagentRunId??void 0,"TEXT_MESSAGE_CHUNK","text message"),m=r.get(d),x=[],f;if(m?.kind==="text"&&(c.messageId===void 0||c.messageId===m.fields.messageId))f=m.fields;else{if(x.push(...o(d)),c.messageId===void 0)throw Error("First TEXT_MESSAGE_CHUNK must have a messageId");f={messageId:c.messageId,name:c.name,subagentRunId:c.subagentRunId},r.set(d,{kind:"text",fields:f});let p=Xn({type:g.TEXT_MESSAGE_START,messageId:c.messageId,role:c.role||"assistant",...c.name!==void 0&&{name:c.name},...c.subagentRunId!=null&&{subagentRunId:c.subagentRunId}},c);x.push(p),n?.event("TRANSFORM","TEXT_MESSAGE_START",p,{messageId:c.messageId})}if(c.delta!==void 0){let p=c.subagentRunId??f.subagentRunId,b=Xn({type:g.TEXT_MESSAGE_CONTENT,messageId:f.messageId,delta:c.delta,...p!=null&&{subagentRunId:p}},c);x.push(b),n?.event("TRANSFORM","TEXT_MESSAGE_CONTENT",b,{messageId:f.messageId})}if(x.length===0&&c.metadata!==void 0){let p=c.subagentRunId??f.subagentRunId;x.push({type:g.TEXT_MESSAGE_CONTENT,messageId:f.messageId,delta:"",metadata:c.metadata,...p!=null&&{subagentRunId:p}})}return x}case g.TOOL_CALL_CHUNK:{let c=l,d=a("tool",c.toolCallId,c.subagentRunId??void 0,"TOOL_CALL_CHUNK","tool call"),m=r.get(d),x=[],f;if(m?.kind==="tool"&&(c.toolCallId===void 0||c.toolCallId===m.fields.toolCallId))f=m.fields;else{if(x.push(...o(d)),c.toolCallId===void 0)throw Error("First TOOL_CALL_CHUNK must have a toolCallId");if(c.toolCallName===void 0)throw Error("First TOOL_CALL_CHUNK must have a toolCallName");f={toolCallId:c.toolCallId,toolCallName:c.toolCallName,parentMessageId:c.parentMessageId,subagentRunId:c.subagentRunId},r.set(d,{kind:"tool",fields:f});let p=Xn({type:g.TOOL_CALL_START,toolCallId:c.toolCallId,toolCallName:c.toolCallName,parentMessageId:c.parentMessageId,...c.subagentRunId!=null&&{subagentRunId:c.subagentRunId}},c);x.push(p),n?.event("TRANSFORM","TOOL_CALL_START",p,{toolCallId:c.toolCallId,toolCallName:c.toolCallName})}if(c.delta!==void 0){let p=c.subagentRunId??f.subagentRunId,b=Xn({type:g.TOOL_CALL_ARGS,toolCallId:f.toolCallId,delta:c.delta,...p!=null&&{subagentRunId:p}},c);x.push(b),n?.event("TRANSFORM","TOOL_CALL_ARGS",b,{toolCallId:f.toolCallId})}if(x.length===0&&c.metadata!==void 0){let p=c.subagentRunId??f.subagentRunId;x.push({type:g.TOOL_CALL_ARGS,toolCallId:f.toolCallId,delta:"",metadata:c.metadata,...p!=null&&{subagentRunId:p}})}return x}case g.REASONING_MESSAGE_CHUNK:{let c=l,d=a("reasoning",c.messageId,c.subagentRunId??void 0,"REASONING_MESSAGE_CHUNK","reasoning message"),m=r.get(d),x=[],f;if(m?.kind==="reasoning"&&(c.messageId===void 0||c.messageId===m.fields.messageId))f=m.fields;else{if(x.push(...o(d)),c.messageId===void 0)throw Error("First REASONING_MESSAGE_CHUNK must have a messageId");f={messageId:c.messageId,subagentRunId:c.subagentRunId},r.set(d,{kind:"reasoning",fields:f});let p=Xn({type:g.REASONING_MESSAGE_START,messageId:c.messageId,role:"reasoning",...c.subagentRunId!=null&&{subagentRunId:c.subagentRunId}},c);x.push(p),n?.event("TRANSFORM","REASONING_MESSAGE_START",p,{messageId:c.messageId})}if(c.delta!==void 0){let p=c.subagentRunId??f.subagentRunId,b=Xn({type:g.REASONING_MESSAGE_CONTENT,messageId:f.messageId,delta:c.delta,...p!=null&&{subagentRunId:p}},c);x.push(b),n?.event("TRANSFORM","REASONING_MESSAGE_CONTENT",b,{messageId:f.messageId})}if(x.length===0&&c.metadata!==void 0){let p=c.subagentRunId??f.subagentRunId;x.push({type:g.REASONING_MESSAGE_CONTENT,messageId:f.messageId,delta:"",metadata:c.metadata,...p!=null&&{subagentRunId:p}})}return x}}return l.type,[]}),un(()=>{i()}))};function vb(t,e=new Date){return t.expiresAt===void 0?!1:new Date(t.expiresAt)<=e}function Td(t,e){let n=new Set(t.map(s=>s.id)),r=new Set(Object.keys(e)),o=[...n].filter(s=>!r.has(s));if(o.length>0)throw Error(`buildResumeArray: missing responses for open interrupts: ${o.join(", ")}`);let i=[...r].filter(s=>!n.has(s));if(i.length>0)throw Error(`buildResumeArray: responses reference unknown interrupt ids: ${i.join(", ")}`);return t.map(s=>{let a=e[s.id],l={interruptId:s.id,status:a.status};return a.status==="resolved"&&a.payload!==void 0&&(l.payload=a.payload),a.metadata!==void 0&&(l.metadata=a.metadata),l})}var wr=class{runNext(t,e){return e.run(t).pipe(Mi(!1))}runNextWithState(t,e){let n=J(t.messages||[]),r=J(t.state||{}),o=new Co;return wd(t,o,e,[]).subscribe(i=>{i.messages!==void 0&&(n=i.messages),i.state!==void 0&&(r=i.state)}),this.runNext(t,e).pipe(qo(async i=>(o.next(i),await new Promise(s=>setTimeout(s,0)),{event:i,messages:J(n),state:J(r)})))}},yb=class extends wr{constructor(t){super(),this.fn=t}run(t,e){return this.fn(t,e)}};function xb(t){let e=t.content;if(Array.isArray(e)){let n=e.filter(r=>typeof r=="object"&&!!r&&"type"in r&&r.type==="text"&&typeof r.text=="string").map(r=>r.text).join("");return{...t,content:n}}return typeof e=="string"?t:{...t,content:""}}var Eb=class extends wr{run(t,e){let{parentRunId:n,...r}=t,o={...r,messages:r.messages.map(xb)};return this.runNext(o,e)}},hd="THINKING_START",fd="THINKING_END",md="THINKING_TEXT_MESSAGE_START",gd="THINKING_TEXT_MESSAGE_CONTENT",bd="THINKING_TEXT_MESSAGE_END",wb=class extends wr{constructor(...t){super(...t),this.currentReasoningId=null,this.currentMessageId=null}warnAboutTransformation(t,e){typeof process<"u"&&process.env!==void 0&&process.env.SUPPRESS_TRANSFORMATION_WARNINGS||console.warn(`AG-UI is converting ${t} to ${e}. To remove this warning, upgrade your AG-UI integration package (e.g. @ag-ui/langgraph). To surpress it, set SUPPRESS_TRANSFORMATION_WARNINGS=true in your .env file.`)}run(t,e){return this.currentReasoningId=null,this.currentMessageId=null,this.runNext(t,e).pipe(Lt(n=>this.transformEvent(n)))}transformEvent(t){switch(t.type){case hd:{this.currentReasoningId=Ie();let{title:e,...n}=t;return this.warnAboutTransformation(hd,g.REASONING_START),{...n,type:g.REASONING_START,messageId:this.currentReasoningId}}case md:return this.currentMessageId=Ie(),this.warnAboutTransformation(md,g.REASONING_MESSAGE_START),{...t,type:g.REASONING_MESSAGE_START,messageId:this.currentMessageId,role:"assistant"};case gd:{let{delta:e,...n}=t;return this.warnAboutTransformation(gd,g.REASONING_MESSAGE_CONTENT),{...n,type:g.REASONING_MESSAGE_CONTENT,messageId:this.currentMessageId??Ie(),delta:e}}case bd:{let e=this.currentMessageId??Ie();return this.warnAboutTransformation(bd,g.REASONING_MESSAGE_END),{...t,type:g.REASONING_MESSAGE_END,messageId:e}}case fd:{let e=this.currentReasoningId??Ie();return this.warnAboutTransformation(fd,g.REASONING_END),{...t,type:g.REASONING_END,messageId:e}}default:return t}}};function Tb(t){return t.startsWith("image/")?"image":t.startsWith("audio/")?"audio":t.startsWith("video/")?"video":"document"}function _b(t){return typeof t=="object"&&!!t&&"type"in t&&t.type==="binary"&&"mimeType"in t&&typeof t.mimeType=="string"}function Sb(t){let e=Tb(t.mimeType);return t.data?{type:e,source:{type:"data",value:t.data,mimeType:t.mimeType},...t.filename?{metadata:{filename:t.filename}}:{}}:t.url?{type:e,source:{type:"url",value:t.url,mimeType:t.mimeType},...t.filename?{metadata:{filename:t.filename}}:{}}:t}function Ab(t){let e=t.content;if(!Array.isArray(e))return t;let n=e.map(r=>_b(r)?Sb(r):r);return{...t,content:n}}var kb=class extends wr{run(t,e){let n={...t,messages:t.messages.map(Ab)};return this.runNext(n,e)}},vd="SUBAGENT_STARTED",yd="SUBAGENT_FINISHED",xd="SUBAGENT_ERROR";function Li(t){if(t&&typeof t=="object"&&"subagentRunId"in t){let{subagentRunId:e,...n}=t;return n}return t}function Ed(t){return t.map(e=>Li(e))}var Ib=class extends wr{warnDroppedLifecycleEvent(t){typeof process<"u"&&process.env!==void 0&&process.env.SUPPRESS_TRANSFORMATION_WARNINGS||console.warn(`AG-UI is dropping ${t} because the target agent predates subagent support. To remove this warning, upgrade your AG-UI integration package. To suppress it, set SUPPRESS_TRANSFORMATION_WARNINGS=true in your .env file.`)}run(t,e){let n={...t,messages:(t.messages??[]).map(r=>Li(r))};return this.runNext(n,e).pipe(Xo(r=>{let o=r.type;(o===vd||o===yd||o===xd)&&this.warnDroppedLifecycleEvent(o)}),ua(r=>{let o=r.type;return o!==vd&&o!==yd&&o!==xd}),Lt(r=>{let o=Li(r);if(o.type===g.MESSAGES_SNAPSHOT){let i=o;if(Array.isArray(i.messages))return{...i,messages:Ed(i.messages)}}if(o.type===g.RUN_FINISHED){let i=o;if(i.outcome&&Array.isArray(i.outcome.interrupts))return{...i,outcome:{...i.outcome,interrupts:i.outcome.interrupts.map(s=>Li(s))}}}if(o.type===g.RUN_STARTED){let i=o;if(i.input&&Array.isArray(i.input.messages))return{...i,input:{...i.input,messages:Ed(i.input.messages)}}}return o}))}},Rb="0.0.59",Cb=class{get maxVersion(){return Rb}get debug(){return this._debug}set debug(t){this._debug=Oi(t),this._debugLogger=Ia(this._debug)}get debugLogger(){return this._debugLogger}set debugLogger(t){typeof t=="boolean"?this._debugLogger=t?Ia(Oi(!0)):void 0:this._debugLogger=t}constructor({agentId:t,description:e,threadId:n,initialMessages:r,initialState:o,debug:i}={}){this.subscribers=[],this.isRunning=!1,this.pendingInterrupts=[],this.middlewares=[],this.agentId=t,this.description=e??"",this.threadId=n??Rt(),this.messages=J(r??[]),this.state=J(o??{}),this._debug=Oi(i),this._debugLogger=Ia(this._debug),Wn(this.maxVersion,"0.0.39")<=0&&this.middlewares.unshift(new Eb),Wn(this.maxVersion,"0.0.45")<=0&&this.middlewares.unshift(new wb),Wn(this.maxVersion,"0.0.47")<=0&&this.middlewares.unshift(new kb),Wn(this.maxVersion,"0.0.57")<=0&&this.middlewares.unshift(new Ib)}subscribe(t){return this.subscribers.push(t),{unsubscribe:()=>{this.subscribers=this.subscribers.filter(e=>e!==t)}}}use(...t){let e=t.map(n=>typeof n=="function"?new yb(n):n);return this.middlewares.push(...e),this}async runAgent(t,e){try{this.isRunning=!0,this.agentId=this.agentId??Rt();let n=this.prepareRunAgentInput(t);this.debugLogger?.lifecycle("LIFECYCLE","Run started:",{agentId:this.agentId,threadId:this.threadId});let r,o=new Set(this.messages.map(l=>l.id)),i=[{onRunFinishedEvent:l=>{l.outcome==="success"&&(r=l.result)}},...this.subscribers,e??{}];await this.onInitialize(n,i),this.activeRunDetach$=new mt;let s;this.activeRunCompletionPromise=new Promise(l=>{s=l}),await Vo(Ro(()=>this.middlewares.length===0?this.run(n):this.middlewares.reduceRight((l,c)=>({run:d=>c.run(d,l),get messages(){return l.messages},get state(){return l.state}}),this).run(n),Mi(this.debugLogger),Ra(this.debugLogger),l=>l.pipe(Wo(this.activeRunDetach$)),l=>this.apply(n,l,i),l=>this.processApplyEvents(n,l,i),vr(l=>(this.debugLogger?.lifecycle("LIFECYCLE","Run errored:",{agentId:this.agentId,error:l instanceof Error?l.message:String(l)}),this.isRunning=!1,this.onError(n,l,i))),un(()=>{this.debugLogger?.lifecycle("LIFECYCLE","Run finished:",{agentId:this.agentId,threadId:this.threadId}),this.isRunning=!1,this.onFinalize(n,i),s?.(),s=void 0,this.activeRunCompletionPromise=void 0,this.activeRunDetach$=void 0}))(te(null)));let a=J(this.messages).filter(l=>!o.has(l.id));return{result:r,newMessages:a}}finally{this.isRunning=!1}}connect(t){throw new Ks}async connectAgent(t,e){try{this.isRunning=!0,this.agentId=this.agentId??Rt();let n=this.prepareRunAgentInput(t),r,o=new Set(this.messages.map(l=>l.id)),i=[{onRunFinishedEvent:l=>{l.outcome==="success"&&(r=l.result)}},...this.subscribers,e??{}];await this.onInitialize(n,i),this.activeRunDetach$=new mt;let s;this.activeRunCompletionPromise=new Promise(l=>{s=l}),await Vo(Ro(()=>jo(()=>this.connect(n)),Mi(this.debugLogger),Ra(this.debugLogger),l=>l.pipe(Wo(this.activeRunDetach$)),l=>this.apply(n,l,i),l=>this.processApplyEvents(n,l,i),vr(l=>(this.isRunning=!1,l instanceof Ks?No:this.onError(n,l,i))),un(()=>{this.isRunning=!1,this.onFinalize(n,i),s?.(),s=void 0,this.activeRunCompletionPromise=void 0,this.activeRunDetach$=void 0}))(te(null)),{defaultValue:void 0});let a=J(this.messages).filter(l=>!o.has(l.id));return{result:r,newMessages:a}}finally{this.isRunning=!1}}abortRun(){}async detachActiveRun(){if(!this.activeRunDetach$)return;let t=this.activeRunCompletionPromise??Promise.resolve();this.activeRunDetach$.next(),this.activeRunDetach$?.complete(),await t}apply(t,e,n){return wd(t,e,this,n,this.debugLogger)}processApplyEvents(t,e,n){return e.pipe(Xo(r=>{r.messages&&(this.messages=r.messages,n.forEach(o=>{o.onMessagesChanged?.({messages:this.messages,state:this.state,agent:this,input:t})})),r.state&&(this.state=r.state,n.forEach(o=>{o.onStateChanged?.({state:this.state,messages:this.messages,agent:this,input:t})}))}))}prepareRunAgentInput(t){let e=J(this.messages);for(let r of e)r.subagentRunId===null&&delete r.subagentRunId;let n=e.filter(r=>r.role!=="activity");return{threadId:this.threadId,runId:t?.runId||Rt(),tools:J(t?.tools??[]),context:J(t?.context??[]),forwardedProps:J(t?.forwardedProps??{}),state:J(this.state),messages:n,...t?.resume===void 0?{}:{resume:J(t.resume)}}}async onInitialize(t,e){if(this.pendingInterrupts.length>0){let r=new Set((t.resume??[]).map(i=>i.interruptId)),o=this.pendingInterrupts.map(i=>i.id).filter(i=>!r.has(i));if(o.length>0)throw new B(`Thread has ${o.length} pending interrupt(s) not addressed by resume: ${o.join(", ")}`);for(let i of this.pendingInterrupts)if(vb(i))throw new B(`Interrupt ${i.id} expired at ${i.expiresAt}`)}let n=await ne(e,this.messages,this.state,(r,o,i)=>r.onRunInitialized?.({messages:o,state:i,agent:this,input:t}));if(n.messages!==void 0||n.state!==void 0){if(n.messages){this.messages=n.messages;for(let r of n.messages)r.subagentRunId===null&&delete r.subagentRunId;t.messages=n.messages,e.forEach(r=>{r.onMessagesChanged?.({messages:this.messages,state:this.state,agent:this,input:t})})}n.state&&(this.state=n.state,t.state=n.state,e.forEach(r=>{r.onStateChanged?.({state:this.state,messages:this.messages,agent:this,input:t})}))}}onError(t,e,n){return cn(ne(n,this.messages,this.state,(r,o,i)=>r.onRunFailed?.({error:e,messages:o,state:i,agent:this,input:t}))).pipe(Lt(r=>{let o=r;if((o.messages!==void 0||o.state!==void 0)&&(o.messages!==void 0&&(this.messages=o.messages,n.forEach(i=>{i.onMessagesChanged?.({messages:this.messages,state:this.state,agent:this,input:t})})),o.state!==void 0&&(this.state=o.state,n.forEach(i=>{i.onStateChanged?.({state:this.state,messages:this.messages,agent:this,input:t})}))),o.stopPropagation!==!0){let i=String(e);if(!(e.name==="AbortError"||e.message==="Fetch is aborted"||e.message==="signal is aborted without reason"||e.message==="component unmounted"||i==="component unmounted"))throw console.error("Agent execution failed:",e),e}return{}}))}async onFinalize(t,e){let n=await ne(e,this.messages,this.state,(r,o,i)=>r.onRunFinalized?.({messages:o,state:i,agent:this,input:t}));(n.messages!==void 0||n.state!==void 0)&&(n.messages!==void 0&&(this.messages=n.messages,e.forEach(r=>{r.onMessagesChanged?.({messages:this.messages,state:this.state,agent:this,input:t})})),n.state!==void 0&&(this.state=n.state,e.forEach(r=>{r.onStateChanged?.({state:this.state,messages:this.messages,agent:this,input:t})})))}clone(){let t=Object.create(Object.getPrototypeOf(this));return t.agentId=this.agentId,t.description=this.description,t.threadId=this.threadId,t.messages=J(this.messages),t.state=J(this.state),t._debug=this._debug,t._debugLogger=this._debugLogger,t.isRunning=this.isRunning,t.subscribers=[...this.subscribers],t.middlewares=[...this.middlewares],t.pendingInterrupts=J(this.pendingInterrupts),t}addMessage(t){this.messages.push(t),(async()=>{for(let e of this.subscribers)await e.onNewMessage?.({message:t,messages:this.messages,state:this.state,agent:this});if(t.role==="assistant"&&t.toolCalls)for(let e of t.toolCalls)for(let n of this.subscribers)await n.onNewToolCall?.({toolCall:e,messages:this.messages,state:this.state,agent:this});for(let e of this.subscribers)await e.onMessagesChanged?.({messages:this.messages,state:this.state,agent:this})})()}addMessages(t){this.messages.push(...t),(async()=>{for(let e of t){for(let n of this.subscribers)await n.onNewMessage?.({message:e,messages:this.messages,state:this.state,agent:this});if(e.role==="assistant"&&e.toolCalls)for(let n of e.toolCalls)for(let r of this.subscribers)await r.onNewToolCall?.({toolCall:n,messages:this.messages,state:this.state,agent:this})}for(let e of this.subscribers)await e.onMessagesChanged?.({messages:this.messages,state:this.state,agent:this})})()}setMessages(t){this.messages=J(t),(async()=>{for(let e of this.subscribers)await e.onMessagesChanged?.({messages:this.messages,state:this.state,agent:this})})()}setState(t){this.state=J(t),(async()=>{for(let e of this.subscribers)await e.onStateChanged?.({messages:this.messages,state:this.state,agent:this})})()}legacy_to_be_removed_runAgentBridged(t){this.agentId=this.agentId??Rt();let e=this.prepareRunAgentInput(t);return(this.middlewares.length===0?this.run(e):this.middlewares.reduceRight((n,r)=>({run:o=>r.run(o,n),get messages(){return n.messages},get state(){return n.state}}),this).run(e)).pipe(Mi(this.debugLogger),Ra(this.debugLogger),fb(this.threadId,e.runId,this.agentId),n=>n.pipe(Lt(r=>(this.debugLogger?.event("LEGACY","Event:",r,{type:r.type}),r))))}};function Nb(t){if(!Array.isArray(t.messages))return t;let e=!1,n=t.messages.map(r=>{if(r.subagentRunId===null){e=!0;let o={...r};return delete o.subagentRunId,o}return r});return e?{...t,messages:n}:t}var _d=class extends Cb{requestInit(t){return{method:"POST",headers:{...this.headers,"Content-Type":"application/json",Accept:"text/event-stream"},body:JSON.stringify(Nb(t)),signal:this.abortController.signal}}runAgent(t,e){return this.abortController=t?.abortController??new AbortController,super.runAgent(t,e)}abortRun(){this.abortController.abort(),super.abortRun()}constructor(t){super(t),this.abortController=new AbortController,this.url=t.url,this.headers=J(t.headers??{}),this.fetch=t.fetch??((e,n)=>fetch(e,n))}run(t){return tb(Qg(()=>this.fetch(this.url,this.requestInit(t))),this.debugLogger)}clone(){let t=super.clone();t.url=this.url,t.headers=J(this.headers??{}),t.fetch=this.fetch;let e=new AbortController,n=this.abortController.signal;return n.aborted&&e.abort(n.reason),t.abortController=e,t}};var Ob=/\{([a-zA-Z_][a-zA-Z0-9_]*)\}/g;function Sd(t,e){let n=[];return{text:t.replace(Ob,(o,i)=>{let s=e[i];return s==null||s===""?(n.includes(i)||n.push(i),o):String(s)}),missing:n}}function Mb(t){if(typeof t!="object"||t===null)return!1;let e=t;return typeof e.name=="string"&&typeof e.title=="string"&&(e.prompt===void 0||typeof e.prompt=="string")}function Oa(t){return Array.isArray(t)?t.filter(Mb):[]}var Tr=class{#t=new Map;register(e){this.#t.set(e.name,e)}has(e){return this.#t.has(e)}get(e){let n=this.#t.get(e);if(n===void 0)throw new Error(`tool "${e}" is not registered`);return n}tools(){return[...this.#t.values()].map(e=>({name:e.name,description:e.description,parameters:e.parameters}))}};function Ma(t){return t[ar]===!0}function Pi(t){return t[lr]===!0}function Di(t,e){return Object.getOwnPropertyDescriptor(t,e).set}var Lb=Di(HTMLInputElement.prototype,"value"),Pb=Di(HTMLTextAreaElement.prototype,"value"),Db=Di(HTMLSelectElement.prototype,"value"),Ub=Di(HTMLInputElement.prototype,"checked");function hn(t,e){t instanceof HTMLTextAreaElement?Pb.call(t,e):t instanceof HTMLSelectElement?Db.call(t,e):Lb.call(t,e)}function _r(t,e){Ub.call(t,e)}var La="#4f46e5",Hb="rgba(79, 70, 229, 0.4)",Fb="--ag-ui-accent";function Sr(t){return new Promise(e=>{setTimeout(e,t)})}function Ui(){return window.matchMedia("(prefers-reduced-motion: reduce)").matches}function Pa(t){return t<=0||Ui()?Promise.resolve():Sr(t)}function Hi(t,e){let n=window.getComputedStyle(t).getPropertyValue(Fb).trim();return n===""?e:n}function Ad(t){return`0 0 0 3px ${Hi(t,Hb)}`}async function Da(t,e,n={}){let r=n.charDelayMs??35;hn(t,""),t.dispatchEvent(new Event("input",{bubbles:!0}));for(let o of e)hn(t,t.value+o),t.dispatchEvent(new Event("input",{bubbles:!0})),r>0&&await Sr(r);t.dispatchEvent(new Event("change",{bubbles:!0}))}async function Ua(t,e={}){let n=e.highlightMs??280,r=t.style.outline,o=t.style.outlineOffset;t.style.outline=`2px solid ${Hi(t,La)}`,t.style.outlineOffset="2px",await Sr(n),t.style.outline=r,t.style.outlineOffset=o,t.click()}var Gb=600,zb=100;function Tt(t,e={}){let n=Ui();return t.scrollIntoView({block:"center",inline:"nearest",behavior:n?"auto":"smooth"}),n?Promise.resolve():new Promise(r=>{let o,i=()=>{clearTimeout(o),document.removeEventListener("scroll",s,!0),document.removeEventListener("scrollend",i,!0),r()},s=()=>{document.removeEventListener("scroll",s,!0),clearTimeout(o),o=setTimeout(i,e.settleMs??Gb)};o=setTimeout(i,zb),document.addEventListener("scroll",s,!0),document.addEventListener("scrollend",i,!0)})}var $b=1200,Bb=1/3;async function kd(t,e,n){(e.focus??n)&&t.focus({preventScroll:!0});let r=e.flashMs??$b;if(r<=0)return;let o=t.style.outline,i=t.style.outlineOffset,s=t.style.transition,a=e.color??Hi(t,La);t.style.outline=`3px solid ${a}`,t.style.outlineOffset="2px";let l=Ui()?0:Math.round(r*Bb);await Sr(r-l),l>0&&(t.style.transition=`outline-color ${l}ms ease-out`,t.style.outline="3px solid transparent",await Sr(l)),t.style.outline=o,t.style.outlineOffset=i,t.style.transition=s}function Vb(t,e={}){return kd(t,e,!1)}function Ha(t,e={}){return kd(t,e,!0)}async function Fa(t,e={}){let n=e.pressMs??140,r=t.style.transform,o=t.style.transition,i=t.style.boxShadow;t.style.transition="transform 80ms ease",t.style.transform="scale(0.96)",t.style.boxShadow=Ad(t),await Pa(n),t.style.transform=r,t.style.transition=o,t.style.boxShadow=i,t.click()}function jb(t,e){for(let n of Array.from(t.options))if(n.value===e||n.text===e)return n;return null}async function Ga(t,e,n={}){let r=jb(t,e);if(r===null)throw new Error(`no <option> matching "${e}"`);let o=n.highlightMs??220,i=t.style.outline,s=t.style.outlineOffset;t.style.outline=`2px solid ${Hi(t,La)}`,t.style.outlineOffset="2px",await Pa(o),hn(t,r.value),t.dispatchEvent(new Event("input",{bubbles:!0})),t.dispatchEvent(new Event("change",{bubbles:!0})),t.style.outline=i,t.style.outlineOffset=s}async function za(t,e,n={}){let r=n.flashMs??200,o=t.style.boxShadow;t.style.boxShadow=Ad(t),await Pa(r),_r(t,e),t.dispatchEvent(new Event("input",{bubbles:!0})),t.dispatchEvent(new Event("change",{bubbles:!0})),t.style.boxShadow=o}var $a={SCROLL:"scroll",DRAG:"drag"};function Ba(t,e){let n=[];return t.has($a.SCROLL)&&n.push(qb(e)),t.has($a.DRAG)&&n.push(Wb(e)),n}function qb(t){return{name:"scroll_to",description:"Scroll a target into view. `target` is `top`, `bottom`, or a CSS selector / page-map element id. Read-only: it changes nothing on the page.",parameters:{type:"object",properties:{target:{type:"string"}},required:["target"],[Ge]:"Scroll into view"},handler:e=>{let n=String(e.target??"");if(n==="top"||n==="bottom"){let o=n==="top"?0:document.body.scrollHeight;return window.scrollTo({top:o,behavior:"smooth"}),{scrolled:!0,target:n}}let r=t(n);if(r===null)throw new Error(`no element matching "${n}"`);return Tt(r),{scrolled:!0,target:n}}}}function Wb(t){return{name:"drag_and_drop",description:"Drag the `from` element onto the `to` element (CSS selectors or page-map element ids), firing the page's native drag-and-drop. Use for reordering sortable lists. The page decides what the drop commits.",parameters:{type:"object",properties:{from:{type:"string"},to:{type:"string"}},required:["from","to"],[Ge]:"Drag and drop"},handler:e=>{let n=String(e.from??""),r=String(e.to??""),o=t(n);if(o===null)throw new Error(`no element matching "${n}"`);let i=t(r);if(i===null)throw new Error(`no element matching "${r}"`);return Xb(o,i),{dragged:!0,from:n,to:r}}}}function Xb(t,e){let n=new DataTransfer;Ar(t,"dragstart",n),Ar(e,"dragenter",n),Ar(e,"dragover",n),Ar(e,"drop",n),Ar(t,"dragend",n)}function Ar(t,e,n){let r=new Event(e,{bubbles:!0,cancelable:!0});r.dataTransfer=n,t.dispatchEvent(r)}function Va(t,e){return!e||t===null?[]:[{description:"page_map",value:JSON.stringify(t())}]}function Fi(t){let e=[{name:`read_${t.name}`,description:`Read the "${t.name}" state.`,parameters:{type:"object",properties:{},required:[],[Ge]:`Read ${t.name}`},handler:()=>t.read()}],n=t.write;return n!==void 0&&e.push({name:`set_${t.name}`,description:`Update the "${t.name}" state.`,parameters:{...t.schema??{type:"object"},[ar]:!0,[Ge]:`Update ${t.name}`},handler:r=>n(r)}),e}var Yb=Fi;function ja(t){let e={};if(!Array.isArray(t))return e;for(let n of t){if(n===null||typeof n!="object")continue;let r=n,o=r.name,i=r.summary,s=r.description;typeof o=="string"&&typeof i=="string"&&(e[o]=typeof s=="string"?{name:o,summary:i,description:s}:{name:o,summary:i})}return e}var Id=/:([A-Za-z_][A-Za-z0-9_]*)/g;function Kb(t){return[...t.matchAll(Id)].map(e=>e[0].slice(1))}function Zb(t,e,n){let r={...n};return{path:e.replace(Id,(i,s)=>{let a=n[s];if(a==null||String(a)==="")throw new Error(`route "${t}" requires path param "${s}"`);return delete r[s],encodeURIComponent(String(a))}),leftover:r}}function Qb(t,e){let n=new URLSearchParams;for(let[o,i]of Object.entries(e))n.set(o,String(i));let r=n.toString();return r===""?t:`${t}?${r}`}function qa(t,e){return[{name:"list_routes",description:"List the routes the app can navigate to. Each route's `pathParams` names the dynamic segments to pass as `params` to `navigate_to_route`.",parameters:{type:"object",properties:{},required:[],[Ge]:"List pages"},handler:()=>t().map(n=>({...n,pathParams:Kb(n.path)}))},{name:"navigate_to_route",description:"Navigate to one of the app's routes by its id, filling any dynamic `:name` path segments (and extra query params) from `params`.",parameters:{type:"object",properties:{route_id:{type:"string"},params:{type:"object"}},required:["route_id"],[lr]:!0,[Ge]:"Navigate"},handler:n=>{let r=n.route_id,o=t().find(d=>d.id===r);if(o===void 0)throw new Error(`unknown route "${String(r)}"`);let i=n.params??{},{path:s,leftover:a}=Zb(o.id,o.path,i),l=Qb(s,a),c=e();return c!==null?c(l):window.location.assign(l),{navigated:!0,path:l}}}]}var se={title:"Assistant",chatHistory:"Chat history",newChat:"New chat",collapse:"Collapse",expand:"Expand",expandUnread:"Expand \u2014 {count} unread",toggleTheme:"Toggle theme",copyCode:"Copy",copied:"Copied",copyFailed:"Copy failed",checkpoints:"Continue a run",noCheckpoints:"Nothing to continue yet.",resumeRun:"Resume",forkRun:"Fork",forkedRun:"branched",conversation:"Conversation",jumpToLatest:"Jump to latest",announceResponding:"Assistant is responding",announceAnswerReady:"Assistant answered",announceAwaitingDecision:"{count} action is waiting for your approval",announceStopped:"Response stopped",announceFailed:"The response failed",thinking:"Assistant is thinking\u2026",thoughts:"Thoughts",stopped:"\u23F9 Stopped",connectionLost:"Connection lost",noResult:"No result returned.",declinedAction:"User declined the action.",navigating:"Navigating\u2026",historyReplaced:"The server replaced this conversation's history. Reload to see the updated transcript.",chartUndrawable:"A chart could not be drawn from the data sent, so it was removed.",historyCompacted:"Earlier turns condensed to fit the context window ({count} removed)",usingSkill:"Using skill {name}",runInterrupted:"The previous response didn\u2019t finish \u2014 the page changed before it arrived.",pageMoved:"The page changed since you last looked at it. Call read_page to see the current page, then retry.",attachmentsStillUploading:"{n} file still uploading \u2014 it was not sent with this message and is still attached.",skillNeeds:"\u201C{title}\u201D needs {fields} \u2014 fill it in below, then send.",message:"Message",inputPlaceholder:"Ask anything\u2026",send:"Send",stop:"Stop",attachFiles:"Attach files",recordVoice:"Record voice",stopRecording:"Stop recording",transcribing:"Transcribing\u2026",transcriptionFailed:"Transcription failed",recordingLimit:"Stopped at the {n}-minute limit \u2014 transcribing what was recorded.",toolRunning:"running\u2026",toolDeferred:"waiting for you",toolDone:"\u2713 done",toolError:"\u26A0 error",toolDeclined:"\u2298 declined",resizePanel:"Resize the chat panel",decisionApproved:"approved by you",decisionDeclined:"declined by you",argumentsLabel:"Arguments",resultLabel:"Result",errorLabel:"Error",declinedLabel:"Declined",details:"Details",subAgentWorking:"Working\u2026",subAgentDelegatedTo:"Delegated to {agent}",subAgentFinished:"{agent} finished",subAgentFailed:"The sub-agent failed",subAgentSteps:"Steps the sub-agent took",approvalEditArgs:"Edit the arguments before approving",approvalArgsInvalid:"That is not valid JSON, so nothing was sent.",approvalArgsNotAnObject:"Arguments have to be a JSON object.",suggestions:"Suggested follow-ups",messageActions:"Message actions",quoteSelection:"Quote",copyMessage:"Copy message",retryMessage:"Try again",feedbackUp:"Good answer",feedbackDown:"Poor answer",confirmAction:"Confirm action",confirmAlways:"Always allow",confirmRun:"Run \u201C{tool}\u201D?",confirm:"Confirm",cancel:"Cancel",approveAction:"Approve action",approvalPrompt:"Approve this action?",approve:"Approve",deny:"Deny",askUserAction:"Question",otherOption:"Other\u2026",answerPlaceholder:"Type your answer\u2026",submit:"Submit",chats:"Chats",noConversations:"No conversations yet.",rename:"Rename",renameConversation:"Rename conversation",delete:"Delete",deleteConversation:"Delete conversation",deletePrompt:"Delete?",tooLarge:"Too large (max {size})",fileTypeNotAllowed:"File type not allowed",uploadFailed:"upload failed",retry:"Retry",retryUpload:"Retry upload",remove:"Remove",removeAttachment:"Remove attachment",justNow:"just now",minutesAgo:"{n}m ago",hoursAgo:"{n}h ago",daysAgo:"{n}d ago",weeksAgo:"{n}w ago"};function Wa(t){let e={...se};for(let n of Object.keys(t)){let r=t[n];r!==void 0&&(e[n]=r)}return e}function Rd(t,e){let n=document.createElement("button");return n.type="button",n.className=`approval-btn approval-btn--${t}`,n.setAttribute("part",`approval-button approval-${t}`),n.textContent=e,n}function Xa(t,e,n={}){let r=n.strings??se;return new Promise(o=>{let i=document.createElement("div");i.className="approval",i.setAttribute("part","approval"),e.toolName!==void 0&&i.setAttribute("data-tool-name",e.toolName),i.setAttribute("role","group"),i.setAttribute("aria-label",r.approveAction);let s=document.createElement("div");s.className="approval-body",s.setAttribute("part","approval-body"),s.textContent=e.message??r.approvalPrompt;let a=Jb(e,n,r),l=document.createElement("div");l.className="approval-actions",l.setAttribute("part","approval-actions");let c=Rd("deny",r.deny),d=Rd("approve",r.approve),m=!1,x=f=>{m||(m=!0,c.disabled=!0,d.disabled=!0,i.setAttribute("data-resolved",f?"approved":"denied"),o(f))};if(c.addEventListener("click",()=>x(!1)),d.addEventListener("click",()=>{a!==null&&!a.commit()||x(!0)}),n.signal?.addEventListener("abort",()=>x(!1),{once:!0}),l.append(c,d),i.append(s,...a===null?[]:[a.root],l),t.appendChild(i),n.signal?.aborted===!0){x(!1);return}d.focus()})}function Jb(t,e,n){let{onEdit:r}=e;if(r===void 0||t.args===void 0)return null;let o=JSON.stringify(t.args,null,2),i=document.createElement("div");i.className="approval-edit",i.setAttribute("part","approval-edit");let s=document.createElement("textarea");s.className="approval-args",s.setAttribute("part","approval-args"),s.setAttribute("aria-label",n.approvalEditArgs),s.rows=Math.min(10,o.split(`
`).length),s.value=o;let a=document.createElement("div");return a.className="approval-error",a.setAttribute("part","approval-error"),a.setAttribute("role","alert"),a.hidden=!0,i.append(s,a),{root:i,commit:()=>{if(s.value===o)return!0;let l;try{l=JSON.parse(s.value)}catch{return a.textContent=n.approvalArgsInvalid,a.hidden=!1,s.focus(),!1}return typeof l!="object"||l===null||Array.isArray(l)?(a.textContent=n.approvalArgsNotAnObject,a.hidden=!1,s.focus(),!1):(a.hidden=!0,r(l),!0)}}}function Ya(t,e){for(let n of Array.from(t.querySelectorAll("pre"))){let r=n.querySelector("code");r===null||n.querySelector(".code-copy")!==null||(n.classList.add("has-copy"),n.append(ev(r,e)))}}function ev(t,e){let n=t.textContent,r=document.createElement("button");return r.type="button",r.className="code-copy",r.setAttribute("part","code-copy"),r.textContent=e.copyCode,r.title=e.copyCode,r.setAttribute("aria-label",e.copyCode),r.addEventListener("click",()=>{tv(n).then(o=>{nv(r,o?e.copied:e.copyFailed,e)})}),r}async function tv(t){let e=navigator.clipboard;if(e===void 0)return!1;try{return await e.writeText(t),!0}catch{return!1}}function nv(t,e,n){t.textContent=e,t.dataset.state=e===n.copied?"copied":"failed",setTimeout(()=>{t.textContent=n.copyCode,delete t.dataset.state},1500)}function Ka(t){let e=document.createElement("div");e.className="attachment-chips",e.setAttribute("part","attachment-chips");for(let n of t)e.appendChild(rv(n));return e}function rv(t){let e=document.createElement("div");e.className="attachment-chip attachment-chip--ready",e.setAttribute("part","attachment-chip");let n=document.createElement("span");n.className="attachment-chip-icon",n.setAttribute("part","attachment-chip-icon"),n.innerHTML=Za(t.mime),n.setAttribute("aria-hidden","true");let r=document.createElement("span");r.className="attachment-chip-name",r.setAttribute("part","attachment-chip-name"),r.textContent=t.name,r.title=t.name;let o=document.createElement("span");return o.className="attachment-chip-size",o.setAttribute("part","attachment-chip-size"),o.textContent=Gi(t.size),e.append(n,r,o),e}function Za(t){return t.startsWith("image/")?gc:t==="application/pdf"?bc:t.startsWith("text/")?vc:mc}function Gi(t){if(t<1024)return`${t} B`;let e=["KB","MB","GB"],n=t/1024,r=0;for(;n>=1024&&r<e.length-1;)n/=1024,r+=1;return`${n<10?Math.round(n*10)/10:Math.round(n)} ${e[r]}`}var zi=class{element;#t;#n;#e=[];constructor(e){this.#t=e,this.#n=e.strings??se,this.element=document.createElement("div"),this.element.className="attachment-tray",this.element.setAttribute("part","attachment-tray"),this.element.hidden=!0}add(e){let n={localId:Ie(),file:e,status:ze.UPLOADING,progress:0,ref:null,error:"",controller:null};this.#e.push(n);let r=this.#s(e);if(r!==null){n.status=ze.ERROR,n.error=r,this.#o(),this.#t.onChange?.();return}this.#o(),this.#t.onChange?.(),this.#r(n)}readyRefs(){let e=[];for(let n of this.#e)n.ref!==null&&e.push(n.ref);return e}hasPending(){return this.#e.some(e=>e.status===ze.UPLOADING)}pendingCount(){return this.#e.filter(e=>e.status===ze.UPLOADING).length}isEmpty(){return this.#e.length===0}clearReady(){this.#e=this.#e.filter(e=>e.status===ze.UPLOADING),this.#o()}clear(){for(let e of this.#e)e.controller?.abort();this.#e=[],this.#o()}dispose(){for(let e of this.#e)e.controller?.abort()}#s(e){return this.#t.maxBytes>0&&e.size>this.#t.maxBytes?this.#n.tooLarge.replace("{size}",Gi(this.#t.maxBytes)):ov(this.#t.accept,e)?null:this.#n.fileTypeNotAllowed}#r(e){let n=this.#s(e.file);if(n!==null){e.status=ze.ERROR,e.error=n,this.#o(),this.#t.onChange?.();return}e.status=ze.UPLOADING,e.progress=0,e.error="";let r=new AbortController;e.controller=r,this.#o(),this.#t.upload(e.file,o=>{e.progress=o,this.#o()},r.signal).then(o=>{e.status=ze.READY,e.ref=o}).catch(o=>{e.status=ze.ERROR,e.error=o instanceof Error?o.message:this.#n.uploadFailed}).finally(()=>{e.controller=null,this.#o(),this.#t.onChange?.()})}#i(e){e.controller?.abort(),this.#e=this.#e.filter(n=>n!==e),this.#o(),this.#t.onChange?.()}#o(){this.element.replaceChildren(),this.element.hidden=this.#e.length===0;for(let e of this.#e)this.element.appendChild(this.#l(e))}#l(e){let n=document.createElement("div");n.className=`attachment-chip attachment-chip--${e.status}`,n.setAttribute("part","attachment-chip");let r=document.createElement("span");r.className="attachment-chip-icon",r.setAttribute("part","attachment-chip-icon"),r.innerHTML=Za(e.file.type),r.setAttribute("aria-hidden","true");let o=document.createElement("span");o.className="attachment-chip-name",o.setAttribute("part","attachment-chip-name"),o.textContent=e.file.name,o.title=e.file.name;let i=document.createElement("span");if(i.className="attachment-chip-size",i.setAttribute("part","attachment-chip-size"),i.textContent=e.status===ze.ERROR?e.error:Gi(e.file.size),n.append(r,o,i),e.status===ze.UPLOADING){let a=document.createElement("div");a.className="attachment-chip-bar",a.setAttribute("part","attachment-chip-bar");let l=document.createElement("div");l.className="attachment-chip-bar-fill",l.setAttribute("part","attachment-chip-bar-fill"),l.style.width=`${Math.round(e.progress*100)}%`,a.appendChild(l),n.appendChild(a)}if(e.status===ze.ERROR){let a=document.createElement("button");a.type="button",a.className="attachment-chip-retry",a.setAttribute("part","attachment-chip-retry"),a.title=this.#n.retry,a.setAttribute("aria-label",this.#n.retryUpload),a.textContent="\u21BB",a.addEventListener("click",()=>this.#r(e)),n.appendChild(a)}let s=document.createElement("button");return s.type="button",s.className="attachment-chip-remove",s.setAttribute("part","attachment-chip-remove"),s.title=this.#n.remove,s.setAttribute("aria-label",this.#n.removeAttachment),s.textContent="\u2715",s.addEventListener("click",()=>this.#i(e)),n.appendChild(s),n}};function ov(t,e){let n=t.split(",").map(i=>i.trim().toLowerCase()).filter(i=>i!=="");if(n.length===0)return!0;let r=e.type.toLowerCase(),o=e.name.toLowerCase();return n.some(i=>i.startsWith(".")?o.endsWith(i):i.endsWith("/*")?r.startsWith(i.slice(0,-1)):r===i)}var iv="http://www.w3.org/2000/svg";var Ve={top:20,right:12,bottom:30,left:44},Bi=480-Ve.left-Ve.right,$i=220-Ve.top-Ve.bottom,Cd=["var(--ag-ui-chart-1, #4f7cff)","var(--ag-ui-chart-2, #21b573)","var(--ag-ui-chart-3, #e0803c)","var(--ag-ui-chart-4, #b563d8)","var(--ag-ui-chart-5, #d84f6e)","var(--ag-ui-chart-6, #3ba7c4)"];function fn(t){return Cd[t%Cd.length]}function gt(t,e){let n=document.createElementNS(iv,t);for(let[r,o]of Object.entries(e))n.setAttribute(r,String(o));return n}function Nd(t,e){let n=gt("text",{"font-size":10,fill:"currentColor","fill-opacity":.65,...e});return n.textContent=t,n}function sv(t){let e=[];return t.labels.forEach((n,r)=>{let o=0;for(let i of t.series)o+=i.points[r]??0,e.push(o)}),e}function av(t){let e=t.kind==="stacked"?sv(t):t.series.flatMap(o=>[...o.points]),n=Math.max(0,...e),r=Math.min(0,...e);return n===r?{min:r,max:n+1}:{min:r,max:n}}function mn(t,e,n){return Ve.top+$i-(t-e)/(n-e)*$i}function Qa(t,e){let n=Bi/e;return Ve.left+n*t+n/2}function lv(t,e,n,r){for(let o of[n,r]){let i=mn(o,n,r);t.appendChild(gt("line",{x1:Ve.left,y1:i,x2:480-Ve.right,y2:i,stroke:"currentColor","stroke-opacity":o===n?.35:.12})),t.appendChild(Nd(String(Math.round(o)),{x:Ve.left-6,y:i+4,"text-anchor":"end"}))}e.labels.forEach((o,i)=>{t.appendChild(Nd(o,{x:Qa(i,e.labels.length),y:220-Ve.bottom+16,"text-anchor":"middle"}))})}function cv(t,e,n,r){let o=Bi/e.labels.length,i=o*.7/e.series.length,s=mn(n,n,r);e.series.forEach((a,l)=>{a.points.forEach((c,d)=>{let m=mn(c,n,r);t.appendChild(gt("rect",{x:Ve.left+o*d+o*.15+i*l,y:m,width:i,height:Math.max(1,s-m),fill:fn(l),rx:2}))})})}function uv(t,e,n,r){let o=Bi/e.labels.length,i=o*.7,s=e.labels.map(()=>0);e.series.forEach((a,l)=>{a.points.forEach((c,d)=>{let m=s[d]??0,x=m+c;s[d]=x;let f=mn(x,n,r);t.appendChild(gt("rect",{x:Ve.left+o*d+o*.15,y:f,width:i,height:Math.max(1,mn(m,n,r)-f),fill:fn(l)}))})})}function dv(t,e,n,r){e.series.forEach((o,i)=>{let s=o.points.map((a,l)=>`${Qa(l,e.labels.length)},${mn(a,n,r)}`).join(" ");t.appendChild(gt("polyline",{points:s,fill:"none",stroke:fn(i),"stroke-width":2,"stroke-linejoin":"round"}))})}function pv(t,e,n,r){e.series.forEach((o,i)=>{o.points.forEach((s,a)=>{t.appendChild(gt("circle",{cx:Qa(a,e.labels.length),cy:mn(s,n,r),r:4,fill:fn(i),"fill-opacity":.85}))})})}function hv(t,e){let n=e.reduce((a,l)=>a+l,0),r=480/2,o=Ve.top+$i/2,i=Math.min(Bi,$i)/2;if(n===0){t.appendChild(gt("circle",{cx:r,cy:o,r:i,fill:"none",stroke:"currentColor","stroke-opacity":.3}));return}let s=-Math.PI/2;e.forEach((a,l)=>{let c=a/n*Math.PI*2,d=s+c;if(c>=Math.PI*2)t.appendChild(gt("circle",{cx:r,cy:o,r:i,fill:fn(l)}));else{let m=r+i*Math.cos(s),x=o+i*Math.sin(s),f=r+i*Math.cos(d),p=o+i*Math.sin(d),b=c>Math.PI?1:0;t.appendChild(gt("path",{d:`M ${r} ${o} L ${m} ${x} A ${i} ${i} 0 ${b} 1 ${f} ${p} Z`,fill:fn(l)}))}s=d})}function fv(t){if(t.length<2)return null;let e=document.createElement("div");return e.className="chart-legend",e.setAttribute("part","chart-legend"),t.forEach((n,r)=>{let o=document.createElement("span");o.className="chart-legend-item";let i=document.createElement("span");i.className="chart-legend-swatch",i.style.background=fn(r),o.append(i,document.createTextNode(n)),e.appendChild(o)}),e}function kr(t){if(t.labels.length===0||t.series.length===0)return null;let e=document.createElement("div");if(e.className="chart-block",e.setAttribute("part","chart-block"),t.title!==void 0&&t.title!==""){let o=document.createElement("div");o.className="chart-title",o.setAttribute("part","chart-title"),o.textContent=t.title,e.appendChild(o)}let n=gt("svg",{viewBox:"0 0 480 220",width:"100%",role:"img"});if(n.setAttribute("aria-label",t.title??`${t.kind} chart`),t.kind==="pie"){let o=t.series[0];hv(n,o.points.map(i=>Math.max(0,i)))}else{let{min:o,max:i}=av(t);lv(n,t,o,i),t.kind==="bar"?cv(n,t,o,i):t.kind==="stacked"?uv(n,t,o,i):t.kind==="line"?dv(n,t,o,i):pv(n,t,o,i)}e.appendChild(n);let r=fv(t.kind==="pie"?t.labels:t.series.map(o=>o.label));return r!==null&&e.appendChild(r),e}var mv=["bar","line","pie","scatter","stacked"];function gv(t){return mv.includes(t)?t:"bar"}function bv(t){if(!Array.isArray(t))return null;let e=[];for(let n of t){if(typeof n!="number"||!Number.isFinite(n)||Math.abs(n)>1e15)return null;e.push(n)}return e}function vv(t){if(!Array.isArray(t))return null;for(let e=0;e<t.length;e+=1)if(typeof t[e]!="string")return null;return t}function Yn(t){if(typeof t!="object"||t===null)return null;let e=t,n=vv(e.labels);if(n===null||!Array.isArray(e.series))return null;let r=[];for(let s of e.series){if(typeof s!="object"||s===null)return null;let a=s,l=bv(a.points);if(l===null||l.length!==n.length)return null;r.push({label:typeof a.label=="string"?a.label:"",points:l})}if(r.length===0||r.length*n.length>2e4||n.length>2e3)return null;let o=gv(e.kind),i=e.title;return typeof i=="string"?{kind:o,title:i,labels:n,series:r}:{kind:o,labels:n,series:r}}var Vi="render_chart";function yv(t){let e=Yn(t);return e===null?null:kr(e)}function xv(t){let e=Yn(t);return e!==null&&e.labels.length>0&&e.series.length>0}var Ev="chart not rendered: expected labels (strings) and series, each with one finite number per label";function Od(){return{name:Vi,description:"Show a chart in the conversation. Supply the data and the page draws it. Every series must have exactly one point per label.",parameters:{type:"object",properties:{kind:{type:"string",enum:["bar","line","pie","scatter","stacked"]},title:{type:"string"},labels:{type:"array",items:{type:"string"}},series:{type:"array",items:{type:"object",properties:{label:{type:"string"},points:{type:"array",items:{type:"number"}}},required:["points"]}}},required:["labels","series"],"x-summary":"Draw a chart"},handler:t=>xv(t)?"chart rendered":Ev,render:yv}}function Ir(t,e=Date.now(),n=se){if(!Number.isFinite(t))return n.justNow;let r=Math.round((e-t)/1e3);if(r<60)return n.justNow;let o=Math.round(r/60);if(o<60)return n.minutesAgo.replace("{n}",String(o));let i=Math.round(o/60);if(i<24)return n.hoursAgo.replace("{n}",String(i));let s=Math.round(i/24);return s<7?n.daysAgo.replace("{n}",String(s)):n.weeksAgo.replace("{n}",String(Math.round(s/7)))}function Md(t){return t.preview!==void 0&&t.preview!==null&&t.preview!==""?t.preview:null}function Ld(t){return t.replace(/\s+/g," ").trim()}var Rr=class{element;#t;#n;#e;#s=null;#r=null;#i;#o=[];constructor(e,n=se){this.#t=e,this.#i=n,this.element=document.createElement("div"),this.element.className="checkpoints",this.element.setAttribute("part","checkpoints"),this.element.setAttribute("role","dialog"),this.element.setAttribute("aria-label",n.checkpoints),this.element.tabIndex=-1,this.element.hidden=!0;let r=document.createElement("div");r.className="checkpoints-header",r.setAttribute("part","checkpoints-header"),this.#e=document.createElement("span"),this.#e.className="checkpoints-title",this.#e.setAttribute("part","checkpoints-title"),this.#e.textContent=n.checkpoints,r.append(this.#e),this.#n=document.createElement("div"),this.#n.className="checkpoints-list",this.#n.setAttribute("part","checkpoints-list"),this.element.append(r,this.#n),this.element.addEventListener("keydown",o=>this.#c(o))}setRuns(e){this.#o=e,this.#p()}setRelativeTimeFormatter(e){this.#r=e}#l(e){return this.#r!==null?this.#r(e):Ir(e,Date.now(),this.#i)}setStrings(e){this.#i=e,this.element.setAttribute("aria-label",e.checkpoints),this.#e.textContent=e.checkpoints,this.#p()}open(){this.open_||(this.#s=this.#u(),this.element.hidden=!1,(this.#d()[0]??this.element).focus())}close(){this.open_&&(this.element.hidden=!0,this.#s?.focus(),this.#s=null)}#u(){return this.element.getRootNode().activeElement}#d(){return Array.from(this.element.querySelectorAll("button, [tabindex]")).filter(e=>!e.hidden)}#c(e){if(e.key==="Escape"){e.stopPropagation(),this.close();return}if(e.key!=="Tab")return;let n=this.#d(),r=n[0],o=n[n.length-1],i=this.#u();e.shiftKey&&i===r?(e.preventDefault(),o?.focus()):!e.shiftKey&&i===o&&(e.preventDefault(),r?.focus())}get open_(){return!this.element.hidden}#p(){if(this.#n.replaceChildren(),this.#o.length===0){let n=document.createElement("div");n.className="checkpoints-empty",n.setAttribute("part","checkpoints-empty"),n.textContent=this.#i.noCheckpoints,this.#n.append(n);return}let e=this.#g();for(let n of this.#o)this.#n.append(this.#f(n,e))}#g(){let e=new Set,n=new Set;for(let r of this.#o){let o=Md(r);if(o===null)continue;let i=Ld(o);e.has(i)&&n.add(i),e.add(i)}return n}#f(e,n){let r=document.createElement("div");r.className="checkpoint-row",r.setAttribute("part","checkpoint-row");let o=Md(e),i=e.started_at===null?null:this.#l(Date.parse(e.started_at)),s=document.createElement("span");if(s.className="checkpoint-label",s.setAttribute("part","checkpoint-label"),s.textContent=o??i??e.run_id,r.append(s),o!==null&&i!==null){let l=document.createElement("span");l.className="checkpoint-time",l.setAttribute("part","checkpoint-time"),l.textContent=i,r.append(l)}if((o===null?i!==null:n.has(Ld(o)))&&e.run_id!==""){let l=document.createElement("span");l.className="checkpoint-id",l.setAttribute("part","checkpoint-id"),l.textContent=e.run_id.slice(0,8),l.title=e.run_id,r.append(l)}if(e.parent_run_id!==null){let l=document.createElement("span");l.className="checkpoint-branch",l.setAttribute("part","checkpoint-branch"),l.textContent=this.#i.forkedRun,l.title=e.parent_run_id,r.append(l)}return r.append(this.#y(e.run_id,"resume",this.#i.resumeRun),this.#y(e.run_id,"fork",this.#i.forkRun)),r}#y(e,n,r){let o=document.createElement("button");return o.type="button",o.className=`checkpoint-action checkpoint-${n}`,o.setAttribute("part",`checkpoint-action checkpoint-${n}`),o.textContent=r,o.addEventListener("click",()=>{this.close(),this.#t(e,n)}),o}};function Ja(t,e){let n=document.createElement("button");return n.type="button",n.className=`confirm-btn confirm-btn--${t}`,n.setAttribute("part",`confirm-button confirm-${t}`),n.textContent=e,n}function el(t,e,n={}){let r=n.strings??se;return new Promise(o=>{let i=document.createElement("div");i.className="confirm",i.setAttribute("part","confirm"),i.setAttribute("data-tool-name",e.toolName),i.setAttribute("role","group"),i.setAttribute("aria-label",r.confirmAction);let s=document.createElement("div");s.className="confirm-body",s.setAttribute("part","confirm-body"),s.textContent=e.message??r.confirmRun.replace("{tool}",e.toolName);let a=document.createElement("pre");a.className="confirm-args",a.setAttribute("part","confirm-args"),a.textContent=JSON.stringify(e.args,null,2),a.hidden=Object.keys(e.args).length===0;let l=document.createElement("div");l.className="confirm-actions",l.setAttribute("part","confirm-actions");let c=Ja("cancel",r.cancel),d=n.onAlwaysAllow===void 0?null:Ja("always",r.confirmAlways.replace("{tool}",e.toolName)),m=Ja("confirm",r.confirm),x=!1,f=p=>{x||(x=!0,i.remove(),o(p))};if(c.addEventListener("click",()=>f(!1)),m.addEventListener("click",()=>f(!0)),d?.addEventListener("click",()=>{n.onAlwaysAllow?.(),f(!0)}),n.signal?.addEventListener("abort",()=>f(!1),{once:!0}),l.append(c,...d===null?[]:[d],m),i.append(s,a,l),t.appendChild(i),n.signal?.aborted===!0){f(!1);return}m.focus()})}function tl(t,e){if(Ud(t)!==null)return;let n=ji(t,e.strings),r=e.text;r!==void 0&&n.appendChild(wv(e.strings,r)),e.onFeedback!==void 0&&n.append(Pd("up",e.strings.feedbackUp,e.onFeedback),Pd("down",e.strings.feedbackDown,e.onFeedback))}function ji(t,e){let n=Ud(t);if(n!==null)return n;let r=document.createElement("div");return r.className="message-actions",r.setAttribute("part","message-actions"),r.setAttribute("role","group"),r.setAttribute("aria-label",e.messageActions),t.after(r),r}function Ud(t){let e=t.nextElementSibling;return e?.classList.contains("message-actions")===!0?e:null}function qi(t,e,n){let r=document.createElement("button");r.type="button",r.className=`message-action message-action--${t}`,r.setAttribute("part",`message-action message-action-${t}`),r.title=e,r.setAttribute("aria-label",e);let o=document.createElement("span");return o.setAttribute("aria-hidden","true"),o.textContent=n,r.appendChild(o),r}function wv(t,e){let n=qi("copy",t.copyMessage,"\u2398");return n.addEventListener("click",()=>{navigator.clipboard.writeText(e()).then(()=>Dd(n,t.copied,t.copyMessage),()=>Dd(n,t.copyFailed,t.copyMessage))}),n}function Pd(t,e,n){let r=qi(t==="up"?"up":"down",e,t==="up"?"\u{1F44D}":"\u{1F44E}");return r.addEventListener("click",()=>{let o=r.getAttribute("aria-pressed")==="true";r.setAttribute("aria-pressed",o?"false":"true"),n(t)}),r.setAttribute("aria-pressed","false"),r}function Dd(t,e,n){t.title=e,t.setAttribute("aria-label",e),t.classList.add("message-action--confirmed"),setTimeout(()=>{t.title=n,t.setAttribute("aria-label",n),t.classList.remove("message-action--confirmed")},1500)}var Tv=500;function Cr(t,e=[],n){for(let r of Lv(e)){if(!t.contains(r.startContainer)||!t.contains(r.endContainer))continue;let o=document.createRange();o.setStart(r.startContainer,r.startOffset),o.setEnd(r.endContainer,r.endOffset);let i=kv(o).trim();if(i!=="")return{text:i,rect:Mv(o,n)}}return null}function nl(t){let e=_v(t);return e.length===0?"":`${Av(e.join(`
`)).split(`
`).map(o=>`> ${o}`.trimEnd()).join(`
`)}

`}function _v(t){let e=t.split(/\r\n?|\n/).map(i=>i.trimEnd()),n=e.filter(i=>i!=="").map(Sv),r=n.length===0?0:Math.min(...n),o=[];for(let i of e){let s=i.slice(r);s===""&&(o.length===0||o[o.length-1]==="")||o.push(s)}for(;o[o.length-1]==="";)o.pop();return o}function Sv(t){return t.length-t.trimStart().length}function Av(t){return t.length>500?`${t.slice(0,500).trimEnd()}...`:t}function kv(t){let e="";for(let n of Nv(t)){let r=n.parentElement;if(!Ov(r))continue;let o=n===t.startContainer?t.startOffset:0,i=n===t.endContainer?t.endOffset:n.data.length;e+=Iv(n.data.slice(o,i),r)}return e}function Iv(t,e){return Rv.has(Cv(e))?t:t.replace(/[^\S\n]*\n[^\S\n]*/g,`
`).replace(/[^\S\n]+/g," ")}var Rv=new Set(["pre","pre-wrap","break-spaces"]);function Cv(t){return window.getComputedStyle(t).whiteSpace}function Nv(t){let e=t.commonAncestorContainer;if(e.nodeType===Node.TEXT_NODE)return[e];let n=[],r=document.createTreeWalker(e,NodeFilter.SHOW_TEXT);for(let o=r.nextNode();o!==null;o=r.nextNode())t.intersectsNode(o)&&n.push(o);return n}function Ov(t){return typeof t.checkVisibility!="function"?!0:t.checkVisibility({contentVisibilityAuto:!0,opacityProperty:!0,visibilityProperty:!0})}function Mv(t,e){let n=[...t.getClientRects()];if(n.length===0)return t.getBoundingClientRect();if(e===void 0)return n[0];let r=n[0],o=Hd(r,e);for(let i of n.slice(1)){let s=Hd(i,e);s<o&&(o=s,r=i)}return r}function Hd(t,e){let n=Math.max(t.left-e.x,0,e.x-t.right),r=Math.max(t.top-e.y,0,e.y-t.bottom);return Math.hypot(n,r)}function Lv(t){let e=window.getSelection();if(e===null)return[];let n=[...Pv(e,t)];return e.rangeCount>0&&n.push(e.getRangeAt(0)),n}function Pv(t,e){let n=t.getComposedRanges;if(n===void 0)return[];try{return n.call(t,{shadowRoots:e})}catch{return n.call(t,...e)}}var rl=6,Dv=`
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
`;function ol(t){let{within:e,exclude:n,onQuote:r}=t,o=new CSSStyleSheet;o.replaceSync(Dv),document.adoptedStyleSheets=[...document.adoptedStyleSheets,o];let i=document.createElement("button");i.type="button",i.className="ag-ui-quote-offer",i.textContent=t.label,i.hidden=!0,document.body.append(i);let s="",a=()=>{i.hidden=!0,s=""},l=d=>{if(d.composedPath().includes(n)){a();return}if(Uv()){a();return}let m=d instanceof MouseEvent?{x:d.clientX,y:d.clientY}:void 0,x=Cr(e,[],m);if(x===null){a();return}s=x.text,Hv(i,x.rect)},c=d=>{i.contains(d.target)||a()};return e.addEventListener("mouseup",l),e.addEventListener("keyup",l),e.addEventListener("mousedown",c),document.addEventListener("scroll",a,!0),window.addEventListener("resize",a),i.addEventListener("mousedown",d=>{d.preventDefault()}),i.addEventListener("click",()=>{let d=s;window.getSelection()?.removeAllRanges(),a(),r(d)}),{element:i,detach(){e.removeEventListener("mouseup",l),e.removeEventListener("keyup",l),e.removeEventListener("mousedown",c),document.removeEventListener("scroll",a,!0),window.removeEventListener("resize",a),i.remove(),document.adoptedStyleSheets=document.adoptedStyleSheets.filter(d=>d!==o)}}}function Uv(){let t=document.activeElement;return t===null?!1:t.tagName==="INPUT"||t.tagName==="TEXTAREA"||t.isContentEditable===!0}function Hv(t,e){t.hidden=!1;let n=e.top<rl+t.offsetHeight;t.dataset.below=String(n),t.style.top=`${n?e.bottom+rl:e.top-rl}px`;let r=t.offsetWidth/2,o=e.left+e.width/2,i=document.documentElement.clientWidth;t.style.left=`${Math.min(Math.max(o,r),i-r)}px`}function il(t){let e=t.replace(/[._-]+/g," ").trim();return e===""?t:e.charAt(0).toUpperCase()+e.slice(1)}function Fv(t){let e=document.createElement("input");return e.type="text",e.className="question-input",e.setAttribute("part","question-input"),e.placeholder=t,e}function sl(t,e,n={}){let r=n.strings??se,o=e.options??[],i=o.length>0,s=!i||e.allowCustom===!0;return new Promise(a=>{let l=document.createElement("div");l.className="question",l.setAttribute("part","question"),l.setAttribute("role","group"),l.setAttribute("aria-label",r.askUserAction);let c=document.createElement("div");c.className="question-body",c.setAttribute("part","question-body"),c.textContent=e.question;let d=document.createElement("div");d.className="question-options",d.setAttribute("part","question-options");let m=`q-${o.length}-${e.question.length}`,x=[];for(let v of o){let A=document.createElement("label");A.className="question-choice",A.setAttribute("part","question-choice");let E=document.createElement("input");E.type="radio",E.name=m,E.value=v,E.setAttribute("part","question-radio");let I=document.createElement("span");I.setAttribute("part","question-choice-text"),I.textContent=v,A.append(E,I),d.appendChild(A),x.push(E)}let f=null,p=null;if(s){if(p=Fv(r.answerPlaceholder),i){let v=document.createElement("label");v.className="question-choice",v.setAttribute("part","question-choice"),f=document.createElement("input"),f.type="radio",f.name=m,f.value="",f.setAttribute("part","question-radio");let A=document.createElement("span");A.setAttribute("part","question-choice-text"),A.textContent=r.otherOption,v.append(f,A),d.appendChild(v),p.disabled=!0}d.appendChild(p)}let b=document.createElement("div");b.className="question-actions",b.setAttribute("part","question-actions");let w=document.createElement("button");w.type="button",w.className="question-btn",w.setAttribute("part","question-button"),w.textContent=r.submit,b.appendChild(w);let _=!1,S=()=>{let v=x.find(A=>A.checked);if(v!==void 0)return v.value;if(p!==null&&(f===null||f.checked)){let A=p.value.trim();return A===""?null:A}return null},M=()=>{p!==null&&f!==null&&(p.disabled=!f.checked),w.disabled=S()===null},P=v=>{if(!_){_=!0,w.disabled=!0;for(let A of x)A.disabled=!0;f!==null&&(f.disabled=!0),p!==null&&(p.disabled=!0),l.setAttribute("data-resolved",v===""?"cancelled":"answered"),a(v)}};for(let v of[...x,...f!==null?[f]:[]])v.addEventListener("change",M);if(p?.addEventListener("input",M),p?.addEventListener("keydown",v=>{if(v.key==="Enter"){v.preventDefault();let A=S();A!==null&&P(A)}}),w.addEventListener("click",()=>{let v=S();v!==null&&P(v)}),n.signal?.addEventListener("abort",()=>P(""),{once:!0}),l.append(c,d,b),t.appendChild(l),n.signal?.aborted===!0){P("");return}M(),(i?x[0]:p)?.focus()})}function Fd(t,e){(e==null||e>t.length)&&(e=t.length);for(var n=0,r=Array(e);n<e;n++)r[n]=t[n];return r}function Gv(t){if(Array.isArray(t))return t}function zv(t,e){var n=t==null?null:typeof Symbol<"u"&&t[Symbol.iterator]||t["@@iterator"];if(n!=null){var r,o,i,s,a=[],l=!0,c=!1;try{if(i=(n=n.call(t)).next,e!==0)for(;!(l=(r=i.call(n)).done)&&(a.push(r.value),a.length!==e);l=!0);}catch(d){c=!0,o=d}finally{try{if(!l&&n.return!=null&&(s=n.return(),Object(s)!==s))return}finally{if(c)throw o}}return a}}function $v(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Bv(t,e){return Gv(t)||zv(t,e)||Vv(t,e)||$v()}function Vv(t,e){if(t){if(typeof t=="string")return Fd(t,e);var n={}.toString.call(t).slice(8,-1);return n==="Object"&&t.constructor&&(n=t.constructor.name),n==="Map"||n==="Set"?Array.from(t):n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?Fd(t,e):void 0}}var ep=Object.entries,Gd=Object.setPrototypeOf,jv=Object.isFrozen,qv=Object.getPrototypeOf,Wv=Object.getOwnPropertyDescriptor,Re=Object.freeze,Ce=Object.seal,Qn=Object.create,tp=typeof Reflect<"u"&&Reflect,pl=tp.apply,hl=tp.construct;Re||(Re=function(e){return e});Ce||(Ce=function(e){return e});pl||(pl=function(e,n){for(var r=arguments.length,o=new Array(r>2?r-2:0),i=2;i<r;i++)o[i-2]=arguments[i];return e.apply(n,o)});hl||(hl=function(e){for(var n=arguments.length,r=new Array(n>1?n-1:0),o=1;o<n;o++)r[o-1]=arguments[o];return new e(...r)});var Kn=xe(Array.prototype.forEach),Xv=xe(Array.prototype.lastIndexOf),zd=xe(Array.prototype.pop),Zn=xe(Array.prototype.push),Yv=xe(Array.prototype.splice),Ut=Array.isArray,Mr=xe(String.prototype.toLowerCase),al=xe(String.prototype.toString),$d=xe(String.prototype.match),Nr=xe(String.prototype.replace),Bd=xe(String.prototype.indexOf),Kv=xe(String.prototype.trim),Zv=xe(Number.prototype.toString),Qv=xe(Boolean.prototype.toString),Vd=typeof BigInt>"u"?null:xe(BigInt.prototype.toString),jd=typeof Symbol>"u"?null:xe(Symbol.prototype.toString),Te=xe(Object.prototype.hasOwnProperty),Or=xe(Object.prototype.toString),we=xe(RegExp.prototype.test),gn=Jv(TypeError);function xe(t){return function(e){e instanceof RegExp&&(e.lastIndex=0);for(var n=arguments.length,r=new Array(n>1?n-1:0),o=1;o<n;o++)r[o-1]=arguments[o];return pl(t,e,r)}}function Jv(t){return function(){for(var e=arguments.length,n=new Array(e),r=0;r<e;r++)n[r]=arguments[r];return hl(t,n)}}function ee(t,e){let n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:Mr;if(Gd&&Gd(t,null),!Ut(e))return t;let r=e.length;for(;r--;){let o=e[r];if(typeof o=="string"){let i=n(o);i!==o&&(jv(e)||(e[r]=i),o=i)}t[o]=!0}return t}function ey(t){for(let e=0;e<t.length;e++)Te(t,e)||(t[e]=null);return t}function Oe(t){let e=Qn(null);for(let r of ep(t)){var n=Bv(r,2);let o=n[0],i=n[1];Te(t,o)&&(Ut(i)?e[o]=ey(i):i&&typeof i=="object"&&i.constructor===Object?e[o]=Oe(i):e[o]=i)}return e}function ty(t){switch(typeof t){case"string":return t;case"number":return Zv(t);case"boolean":return Qv(t);case"bigint":return Vd?Vd(t):"0";case"symbol":return jd?jd(t):"Symbol()";case"undefined":return Or(t);case"function":case"object":{if(t===null)return Or(t);let e=t,n=rt(e,"toString");if(typeof n=="function"){let r=n(e);return typeof r=="string"?r:Or(r)}return Or(t)}default:return Or(t)}}function rt(t,e){for(;t!==null;){let r=Wv(t,e);if(r){if(r.get)return xe(r.get);if(typeof r.value=="function")return xe(r.value)}t=qv(t)}function n(){return null}return n}function ny(t){try{return we(t,""),!0}catch{return!1}}var qd=Re(["a","abbr","acronym","address","area","article","aside","audio","b","bdi","bdo","big","blink","blockquote","body","br","button","canvas","caption","center","cite","code","col","colgroup","content","data","datalist","dd","decorator","del","details","dfn","dialog","dir","div","dl","dt","element","em","fieldset","figcaption","figure","font","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","img","input","ins","kbd","label","legend","li","main","map","mark","marquee","menu","menuitem","meter","nav","nobr","ol","optgroup","option","output","p","picture","pre","progress","q","rp","rt","ruby","s","samp","search","section","select","shadow","slot","small","source","spacer","span","strike","strong","style","sub","summary","sup","table","tbody","td","template","textarea","tfoot","th","thead","time","tr","track","tt","u","ul","var","video","wbr"]),ll=Re(["svg","a","altglyph","altglyphdef","altglyphitem","animatecolor","animatemotion","animatetransform","circle","clippath","defs","desc","ellipse","enterkeyhint","exportparts","filter","font","g","glyph","glyphref","hkern","image","inputmode","line","lineargradient","marker","mask","metadata","mpath","part","path","pattern","polygon","polyline","radialgradient","rect","stop","style","switch","symbol","text","textpath","title","tref","tspan","view","vkern"]),cl=Re(["feBlend","feColorMatrix","feComponentTransfer","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feDistantLight","feDropShadow","feFlood","feFuncA","feFuncB","feFuncG","feFuncR","feGaussianBlur","feImage","feMerge","feMergeNode","feMorphology","feOffset","fePointLight","feSpecularLighting","feSpotLight","feTile","feTurbulence"]),ry=Re(["animate","color-profile","cursor","discard","font-face","font-face-format","font-face-name","font-face-src","font-face-uri","foreignobject","hatch","hatchpath","mesh","meshgradient","meshpatch","meshrow","missing-glyph","script","set","solidcolor","unknown","use"]),ul=Re(["math","menclose","merror","mfenced","mfrac","mglyph","mi","mlabeledtr","mmultiscripts","mn","mo","mover","mpadded","mphantom","mroot","mrow","ms","mspace","msqrt","mstyle","msub","msup","msubsup","mtable","mtd","mtext","mtr","munder","munderover","mprescripts"]),oy=Re(["maction","maligngroup","malignmark","mlongdiv","mscarries","mscarry","msgroup","mstack","msline","msrow","semantics","annotation","annotation-xml","mprescripts","none"]),Wd=Re(["#text"]),Xd=Re(["accept","action","align","alt","autocapitalize","autocomplete","autopictureinpicture","autoplay","background","bgcolor","border","capture","cellpadding","cellspacing","checked","cite","class","clear","color","cols","colspan","command","commandfor","controls","controlslist","coords","crossorigin","datetime","decoding","default","dir","disabled","disablepictureinpicture","disableremoteplayback","download","draggable","enctype","enterkeyhint","exportparts","face","for","headers","height","hidden","high","href","hreflang","id","inert","inputmode","integrity","ismap","kind","label","lang","list","loading","loop","low","max","maxlength","media","method","min","minlength","multiple","muted","name","nonce","noshade","novalidate","nowrap","open","optimum","part","pattern","placeholder","playsinline","popover","popovertarget","popovertargetaction","poster","preload","pubdate","radiogroup","readonly","rel","required","rev","reversed","role","rows","rowspan","spellcheck","scope","selected","shape","size","sizes","slot","span","srclang","start","src","srcset","step","style","summary","tabindex","title","translate","type","usemap","valign","value","width","wrap","xmlns"]),dl=Re(["accent-height","accumulate","additive","alignment-baseline","amplitude","ascent","attributename","attributetype","azimuth","basefrequency","baseline-shift","begin","bias","by","class","clip","clippathunits","clip-path","clip-rule","color","color-interpolation","color-interpolation-filters","color-profile","color-rendering","cx","cy","d","dx","dy","diffuseconstant","direction","display","divisor","dominant-baseline","dur","edgemode","elevation","end","exponent","fill","fill-opacity","fill-rule","filter","filterunits","flood-color","flood-opacity","font-family","font-size","font-size-adjust","font-stretch","font-style","font-variant","font-weight","fx","fy","g1","g2","glyph-name","glyphref","gradientunits","gradienttransform","height","href","id","image-rendering","in","in2","intercept","k","k1","k2","k3","k4","kerning","keypoints","keysplines","keytimes","lang","lengthadjust","letter-spacing","kernelmatrix","kernelunitlength","lighting-color","local","marker-end","marker-mid","marker-start","markerheight","markerunits","markerwidth","maskcontentunits","maskunits","max","mask","mask-type","media","method","mode","min","name","numoctaves","offset","operator","opacity","order","orient","orientation","origin","overflow","paint-order","path","pathlength","patterncontentunits","patterntransform","patternunits","points","preservealpha","preserveaspectratio","primitiveunits","r","rx","ry","radius","refx","refy","repeatcount","repeatdur","restart","result","rotate","scale","seed","shape-rendering","slope","specularconstant","specularexponent","spreadmethod","startoffset","stddeviation","stitchtiles","stop-color","stop-opacity","stroke-dasharray","stroke-dashoffset","stroke-linecap","stroke-linejoin","stroke-miterlimit","stroke-opacity","stroke","stroke-width","style","surfacescale","systemlanguage","tabindex","tablevalues","targetx","targety","transform","transform-origin","text-anchor","text-decoration","text-orientation","text-rendering","textlength","type","u1","u2","unicode","values","viewbox","visibility","version","vert-adv-y","vert-origin-x","vert-origin-y","width","word-spacing","wrap","writing-mode","xchannelselector","ychannelselector","x","x1","x2","xmlns","y","y1","y2","z","zoomandpan"]),Yd=Re(["accent","accentunder","align","bevelled","close","columnalign","columnlines","columnspacing","columnspan","denomalign","depth","dir","display","displaystyle","encoding","fence","frame","height","href","id","largeop","length","linethickness","lquote","lspace","mathbackground","mathcolor","mathsize","mathvariant","maxsize","minsize","movablelimits","notation","numalign","open","rowalign","rowlines","rowspacing","rowspan","rspace","rquote","scriptlevel","scriptminsize","scriptsizemultiplier","selection","separator","separators","stretchy","subscriptshift","supscriptshift","symmetric","voffset","width","xmlns"]),Wi=Re(["xlink:href","xml:id","xlink:title","xml:space","xmlns:xlink"]),iy=Ce(/{{[\w\W]*|^[\w\W]*}}/g),sy=Ce(/<%[\w\W]*|^[\w\W]*%>/g),ay=Ce(/\${[\w\W]*/g),ly=Ce(/^data-[\-\w.\u00B7-\uFFFF]+$/),cy=Ce(/^aria-[\-\w]+$/),Kd=Ce(/^(?:(?:(?:f|ht)tps?|mailto|tel|callto|sms|cid|xmpp|matrix):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i),uy=Ce(/^(?:\w+script|data):/i),dy=Ce(/[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g),py=Ce(/^html$/i),hy=Ce(/^[a-z][.\w]*(-[.\w]+)+$/i),Zd=Ce(/<[/\w!]/g),Qd=Ce(/<[/\w]/g),fy=Ce(/<\/no(script|embed|frames)/i),my=Ce(/\/>/i),je={element:1,attribute:2,text:3,cdataSection:4,entityReference:5,entityNode:6,processingInstruction:7,comment:8,document:9,documentType:10,documentFragment:11,notation:12},gy=function(){return typeof window>"u"?null:window},by=function(e,n){if(typeof e!="object"||typeof e.createPolicy!="function")return null;let r=null,o="data-tt-policy-suffix";n&&n.hasAttribute(o)&&(r=n.getAttribute(o));let i="dompurify"+(r?"#"+r:"");try{return e.createPolicy(i,{createHTML(s){return s},createScriptURL(s){return s}})}catch{return console.warn("TrustedTypes policy "+i+" could not be created."),null}},Jd=function(){return{afterSanitizeAttributes:[],afterSanitizeElements:[],afterSanitizeShadowDOM:[],beforeSanitizeAttributes:[],beforeSanitizeElements:[],beforeSanitizeShadowDOM:[],uponSanitizeAttribute:[],uponSanitizeElement:[],uponSanitizeShadowNode:[]}},Dt=function(e,n,r,o){return Te(e,n)&&Ut(e[n])?ee(o.base?Oe(o.base):{},e[n],o.transform):r};function np(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:gy(),e=C=>np(C);if(e.version="3.4.13",e.removed=[],!t||!t.document||t.document.nodeType!==je.document||!t.Element)return e.isSupported=!1,e;let n=t.document,r=n,o=r.currentScript;t.DocumentFragment;let i=t.HTMLTemplateElement,s=t.Node,a=t.Element,l=t.NodeFilter,c=t.NamedNodeMap;c===void 0&&(t.NamedNodeMap||t.MozNamedAttrMap),t.HTMLFormElement;let d=t.DOMParser,m=t.trustedTypes,x=a.prototype,f=rt(x,"cloneNode"),p=rt(x,"remove"),b=rt(x,"nextSibling"),w=rt(x,"childNodes"),_=rt(x,"parentNode"),S=rt(x,"shadowRoot"),M=rt(x,"attributes"),P=s&&s.prototype?rt(s.prototype,"nodeType"):null,v=s&&s.prototype?rt(s.prototype,"nodeName"):null,A=s&&s.prototype?rt(s.prototype,"ownerDocument"):null;if(typeof i=="function"){let C=n.createElement("template");C.content&&C.content.ownerDocument&&(n=C.content.ownerDocument)}let E,I="",Z,be=!1,ve=0,qe=function(){if(ve>0)throw gn('A configured TRUSTED_TYPES_POLICY callback (createHTML or createScriptURL) must not call DOMPurify.sanitize, as that causes infinite recursion. Do not pass a policy whose callbacks wrap DOMPurify as TRUSTED_TYPES_POLICY; see the "DOMPurify and Trusted Types" section of the README.')},xn=function(h){qe(),ve++;try{return E.createHTML(h)}finally{ve--}},Bp=function(h){qe(),ve++;try{return E.createScriptURL(h)}finally{ve--}},Vp=function(){return be||(Z=by(m,o),be=!0),Z},jr=n,ds=jr.implementation,Hl=jr.createNodeIterator,jp=jr.createDocumentFragment,qp=jr.getElementsByTagName,Wp=r.importNode,ce=Jd();e.isSupported=typeof ep=="function"&&typeof _=="function"&&ds&&ds.createHTMLDocument!==void 0;let Xp=iy,Yp=sy,Kp=ay,Zp=ly,Qp=cy,Jp=uy,Fl=dy,eh=hy,Gl=Kd,ue=null,ps=ee({},[...qd,...ll,...cl,...ul,...Wd]),de=null,hs=ee({},[...Xd,...dl,...Yd,...Wi]),fe=Object.seal(Qn(null,{tagNameCheck:{writable:!0,configurable:!1,enumerable:!0,value:null},attributeNameCheck:{writable:!0,configurable:!1,enumerable:!0,value:null},allowCustomizedBuiltInElements:{writable:!0,configurable:!1,enumerable:!0,value:!1}})),rr=null,zl=null,St=Object.seal(Qn(null,{tagCheck:{writable:!0,configurable:!1,enumerable:!0,value:null},attributeCheck:{writable:!0,configurable:!1,enumerable:!0,value:null}})),$l=!0,fs=!0,Bl=!1,Vl=!0,At=!1,kt=!0,Ft=!1,ms=!1,qr=null,Wr=null,gs=!1,En=!1,Xr=!1,Yr=!1,jl=!0,ql=!1,Wl="user-content-",bs=!0,Kr=!1,wn={},at=null,vs=ee({},["annotation-xml","audio","colgroup","desc","foreignobject","head","iframe","math","mi","mn","mo","ms","mtext","noembed","noframes","noscript","plaintext","script","selectedcontent","style","svg","template","thead","title","video","xmp"]),Xl=null,Yl=ee({},["audio","video","img","source","image","track"]),ys=null,Kl=ee({},["alt","class","for","id","label","name","pattern","placeholder","role","summary","title","value","style","xmlns"]),Zr="http://www.w3.org/1998/Math/MathML",Qr="http://www.w3.org/2000/svg",lt="http://www.w3.org/1999/xhtml",Tn=lt,xs=!1,Es=null,th=ee({},[Zr,Qr,lt],al),Zl=Re(["mi","mo","mn","ms","mtext"]),ws=ee({},Zl),Ql=Re(["annotation-xml"]),Ts=ee({},Ql),nh=ee({},["title","style","font","a","script"]),or=null,rh=["application/xhtml+xml","text/html"],oh="text/html",pe=null,_n=null,ih=n.createElement("form"),Jl=function(h){return h instanceof RegExp||h instanceof Function},_s=function(){let h=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};if(_n&&_n===h)return;(!h||typeof h!="object")&&(h={}),h=Oe(h),or=rh.indexOf(h.PARSER_MEDIA_TYPE)===-1?oh:h.PARSER_MEDIA_TYPE,pe=or==="application/xhtml+xml"?al:Mr,ue=Dt(h,"ALLOWED_TAGS",ps,{transform:pe}),de=Dt(h,"ALLOWED_ATTR",hs,{transform:pe}),Es=Dt(h,"ALLOWED_NAMESPACES",th,{transform:al}),ys=Dt(h,"ADD_URI_SAFE_ATTR",Kl,{transform:pe,base:Kl}),Xl=Dt(h,"ADD_DATA_URI_TAGS",Yl,{transform:pe,base:Yl}),at=Dt(h,"FORBID_CONTENTS",vs,{transform:pe}),rr=Dt(h,"FORBID_TAGS",Oe({}),{transform:pe}),zl=Dt(h,"FORBID_ATTR",Oe({}),{transform:pe}),wn=Te(h,"USE_PROFILES")?h.USE_PROFILES&&typeof h.USE_PROFILES=="object"?Oe(h.USE_PROFILES):h.USE_PROFILES:!1,$l=h.ALLOW_ARIA_ATTR!==!1,fs=h.ALLOW_DATA_ATTR!==!1,Bl=h.ALLOW_UNKNOWN_PROTOCOLS||!1,Vl=h.ALLOW_SELF_CLOSE_IN_ATTR!==!1,At=h.SAFE_FOR_TEMPLATES||!1,kt=h.SAFE_FOR_XML!==!1,Ft=h.WHOLE_DOCUMENT||!1,En=h.RETURN_DOM||!1,Xr=h.RETURN_DOM_FRAGMENT||!1,Yr=h.RETURN_TRUSTED_TYPE||!1,gs=h.FORCE_BODY||!1,jl=h.SANITIZE_DOM!==!1,ql=h.SANITIZE_NAMED_PROPS||!1,bs=h.KEEP_CONTENT!==!1,Kr=h.IN_PLACE||!1,Gl=ny(h.ALLOWED_URI_REGEXP)?h.ALLOWED_URI_REGEXP:Kd,Tn=typeof h.NAMESPACE=="string"?h.NAMESPACE:lt,ws=Te(h,"MATHML_TEXT_INTEGRATION_POINTS")&&h.MATHML_TEXT_INTEGRATION_POINTS&&typeof h.MATHML_TEXT_INTEGRATION_POINTS=="object"?Oe(h.MATHML_TEXT_INTEGRATION_POINTS):ee({},Zl),Ts=Te(h,"HTML_INTEGRATION_POINTS")&&h.HTML_INTEGRATION_POINTS&&typeof h.HTML_INTEGRATION_POINTS=="object"?Oe(h.HTML_INTEGRATION_POINTS):ee({},Ql);let y=Te(h,"CUSTOM_ELEMENT_HANDLING")&&h.CUSTOM_ELEMENT_HANDLING&&typeof h.CUSTOM_ELEMENT_HANDLING=="object"?Oe(h.CUSTOM_ELEMENT_HANDLING):Qn(null);if(fe=Qn(null),Te(y,"tagNameCheck")&&Jl(y.tagNameCheck)&&(fe.tagNameCheck=y.tagNameCheck),Te(y,"attributeNameCheck")&&Jl(y.attributeNameCheck)&&(fe.attributeNameCheck=y.attributeNameCheck),Te(y,"allowCustomizedBuiltInElements")&&typeof y.allowCustomizedBuiltInElements=="boolean"&&(fe.allowCustomizedBuiltInElements=y.allowCustomizedBuiltInElements),Ce(fe),At&&(fs=!1),Xr&&(En=!0),wn&&(ue=ee({},Wd),de=Qn(null),wn.html===!0&&(ee(ue,qd),ee(de,Xd)),wn.svg===!0&&(ee(ue,ll),ee(de,dl),ee(de,Wi)),wn.svgFilters===!0&&(ee(ue,cl),ee(de,dl),ee(de,Wi)),wn.mathMl===!0&&(ee(ue,ul),ee(de,Yd),ee(de,Wi))),St.tagCheck=null,St.attributeCheck=null,Te(h,"ADD_TAGS")&&(typeof h.ADD_TAGS=="function"?St.tagCheck=h.ADD_TAGS:Ut(h.ADD_TAGS)&&(ue===ps&&(ue=Oe(ue)),ee(ue,h.ADD_TAGS,pe))),Te(h,"ADD_ATTR")&&(typeof h.ADD_ATTR=="function"?St.attributeCheck=h.ADD_ATTR:Ut(h.ADD_ATTR)&&(de===hs&&(de=Oe(de)),ee(de,h.ADD_ATTR,pe))),Te(h,"ADD_URI_SAFE_ATTR")&&Ut(h.ADD_URI_SAFE_ATTR)&&ee(ys,h.ADD_URI_SAFE_ATTR,pe),Te(h,"FORBID_CONTENTS")&&Ut(h.FORBID_CONTENTS)&&(at===vs&&(at=Oe(at)),ee(at,h.FORBID_CONTENTS,pe)),Te(h,"ADD_FORBID_CONTENTS")&&Ut(h.ADD_FORBID_CONTENTS)&&(at===vs&&(at=Oe(at)),ee(at,h.ADD_FORBID_CONTENTS,pe)),bs&&(ue["#text"]=!0),Ft&&ee(ue,["html","head","body"]),ue.table&&(ee(ue,["tbody"]),delete rr.tbody),h.TRUSTED_TYPES_POLICY){if(typeof h.TRUSTED_TYPES_POLICY.createHTML!="function")throw gn('TRUSTED_TYPES_POLICY configuration option must provide a "createHTML" hook.');if(typeof h.TRUSTED_TYPES_POLICY.createScriptURL!="function")throw gn('TRUSTED_TYPES_POLICY configuration option must provide a "createScriptURL" hook.');let T=E;E=h.TRUSTED_TYPES_POLICY;try{I=xn("")}catch(H){throw E=T,H}}else h.TRUSTED_TYPES_POLICY===null?(E=void 0,I=""):(E===void 0&&(E=Vp()),E&&typeof I=="string"&&(I=xn("")));Re&&Re(h),_n=h},ec=ee({},[...ll,...cl,...ry]),tc=ee({},[...ul,...oy]),sh=function(h,y,T){return y.namespaceURI===lt?h==="svg":y.namespaceURI===Zr?h==="svg"&&(T==="annotation-xml"||ws[T]):!!ec[h]},ah=function(h,y,T){return y.namespaceURI===lt?h==="math":y.namespaceURI===Qr?h==="math"&&Ts[T]:!!tc[h]},lh=function(h,y,T){return y.namespaceURI===Qr&&!Ts[T]||y.namespaceURI===Zr&&!ws[T]?!1:!tc[h]&&(nh[h]||!ec[h])},ch=function(h){let y=_(h);(!y||!y.tagName)&&(y={namespaceURI:Tn,tagName:"template"});let T=Mr(h.tagName),H=Mr(y.tagName);return Es[h.namespaceURI]?h.namespaceURI===Qr?sh(T,y,H):h.namespaceURI===Zr?ah(T,y,H):h.namespaceURI===lt?lh(T,y,H):!!(or==="application/xhtml+xml"&&Es[h.namespaceURI]):!1},It=function(h){Zn(e.removed,{element:h});try{_(h).removeChild(h)}catch{if(p(h),!_(h))throw gn("a node selected for removal could not be detached from its tree and cannot be safely returned; refusing to sanitize in place")}},Jr=function(h){ir(h);let y=w(h);if(y){let H=[];Kn(y,F=>{Zn(H,F)}),Kn(H,F=>{try{p(F)}catch{}})}let T=M(h);if(T)for(let H=T.length-1;H>=0;--H){let F=T[H],j=F&&F.name;if(typeof j=="string")try{h.removeAttribute(j)}catch{}}},Gt=function(h,y){try{Zn(e.removed,{attribute:y.getAttributeNode(h),from:y})}catch{Zn(e.removed,{attribute:null,from:y})}if(y.removeAttribute(h),h==="is")if(En||Xr)try{It(y)}catch{}else try{y.setAttribute(h,"")}catch{}},uh=function(h){let y=M(h);if(y)for(let T=y.length-1;T>=0;--T){let H=y[T],F=H&&H.name;if(!(typeof F!="string"||de[pe(F)]))try{h.removeAttribute(F)}catch{}}},ir=function(h){let y=[h];for(;y.length>0;){let T=y.pop();(P?P(T):T.nodeType)===je.element&&uh(T);let F=w(T);if(F)for(let j=F.length-1;j>=0;--j)y.push(F[j])}},dh=function(h){if(!kt)return;let y=[h];for(;y.length>0;){let T=y.pop(),H=P?P(T):T.nodeType;if(H===je.processingInstruction||H===je.comment&&we(Qd,T.data)){try{p(T)}catch{}continue}if(H===je.element){let j=T,re=pe(v?v(T):T.nodeName);try{j.hasAttribute&&j.hasAttribute("patchsrc")&&j.removeAttribute("patchsrc"),j.hasAttribute&&j.hasAttribute("for")&&re!=="label"&&re!=="output"&&j.removeAttribute("for")}catch{}}let F=w(T);if(F)for(let j=F.length-1;j>=0;--j)y.push(F[j])}},nc=function(h){let y=null,T=null;if(gs)h="<remove></remove>"+h;else{let j=$d(h,/^[\r\n\t ]+/);T=j&&j[0]}or==="application/xhtml+xml"&&Tn===lt&&(h='<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>'+h+"</body></html>");let H=E?xn(h):h;if(Tn===lt)try{y=new d().parseFromString(H,or)}catch{}if(!y||!y.documentElement){y=ds.createDocument(Tn,"template",null);try{y.documentElement.innerHTML=xs?I:H}catch{}}let F=y.body||y.documentElement;return h&&T&&F.insertBefore(n.createTextNode(T),F.childNodes[0]||null),Tn===lt?qp.call(y,Ft?"html":"body")[0]:Ft?y.documentElement:F},rc=function(h){let y=A?A(h):h.ownerDocument;return Hl.call(y||h,h,l.SHOW_ELEMENT|l.SHOW_COMMENT|l.SHOW_TEXT|l.SHOW_PROCESSING_INSTRUCTION|l.SHOW_CDATA_SECTION,null)},eo=function(h){return h=Nr(h,Xp," "),h=Nr(h,Yp," "),h=Nr(h,Kp," "),h},Ss=function(h){var y;h.normalize();let T=A?A(h):h.ownerDocument,H=Hl.call(T||h,h,l.SHOW_TEXT|l.SHOW_COMMENT|l.SHOW_CDATA_SECTION|l.SHOW_PROCESSING_INSTRUCTION,null),F=H.nextNode();for(;F;)F.data=eo(F.data),F=H.nextNode();let j=(y=h.querySelectorAll)===null||y===void 0?void 0:y.call(h,"template");j&&Kn(j,re=>{Sn(re.content)&&Ss(re.content)})},to=function(h){let y=v?v(h):null;return typeof y!="string"||pe(y)!=="form"?!1:typeof h.nodeName!="string"||typeof h.textContent!="string"||typeof h.removeChild!="function"||h.attributes!==M(h)||typeof h.removeAttribute!="function"||typeof h.setAttribute!="function"||typeof h.namespaceURI!="string"||typeof h.insertBefore!="function"||typeof h.hasChildNodes!="function"||h.nodeType!==P(h)||h.childNodes!==w(h)},Sn=function(h){if(!P||typeof h!="object"||h===null)return!1;try{return P(h)===je.documentFragment}catch{return!1}},sr=function(h){if(!P||typeof h!="object"||h===null)return!1;try{return typeof P(h)=="number"}catch{return!1}};function ct(C,h,y){C.length!==0&&Kn(C,T=>{T.call(e,h,y,_n)})}let ph=function(h,y){return!!(kt&&h.hasChildNodes()&&!sr(h.firstElementChild)&&we(Zd,h.textContent)&&we(Zd,h.innerHTML)||kt&&h.namespaceURI===lt&&y==="style"&&sr(h.firstElementChild)||h.nodeType===je.processingInstruction||kt&&h.nodeType===je.comment&&we(Qd,h.data))},hh=function(h,y,T){if(!rr[y]&&ac(y)&&(fe.tagNameCheck instanceof RegExp&&we(fe.tagNameCheck,y)||fe.tagNameCheck instanceof Function&&fe.tagNameCheck(y)))return!1;if(bs&&!at[y]){let H=_(h),F=w(h);if(F&&H){let j=F.length;for(let re=j-1;re>=0;--re){let he=h===T?f(F[re],!0):F[re];H.insertBefore(he,b(h))}}}return It(h),!0},oc=function(h,y,T,H){return h.length===0?y:y===T||y===H?Oe(y):y},ic=function(h,y){if(ct(ce.beforeSanitizeElements,h,null),h!==y&&_(h)===null)return Kr&&ir(h),!0;if(to(h))return It(h),!0;let T=pe(v?v(h):h.nodeName);if(ue=oc(ce.uponSanitizeElement,ue,ps,qr),ct(ce.uponSanitizeElement,h,{tagName:T,allowedTags:ue}),h!==y&&_(h)===null)return Kr&&ir(h),!0;if(ph(h,T))return It(h),!0;if(rr[T]||!(St.tagCheck instanceof Function&&St.tagCheck(T))&&!ue[T]){let F=hh(h,T,y);return F===!1&&ct(ce.afterSanitizeElements,h,null),F}if((P?P(h):h.nodeType)===je.element&&!ch(h)||(T==="noscript"||T==="noembed"||T==="noframes")&&we(fy,h.innerHTML))return It(h),!0;if(At&&h.nodeType===je.text){let F=eo(h.textContent);h.textContent!==F&&(Zn(e.removed,{element:h.cloneNode()}),h.textContent=F)}return ct(ce.afterSanitizeElements,h,null),!1},sc=function(h,y,T){if(zl[y]||kt&&y==="patchsrc"||kt&&y==="for"&&h!=="label"&&h!=="output"||jl&&(y==="id"||y==="name")&&(T in n||T in ih))return!1;let H=de[y]||St.attributeCheck instanceof Function&&St.attributeCheck(y,h);if(!(fs&&we(Zp,y))){if(!($l&&we(Qp,y))){if(H){if(!ys[y]){if(!we(Gl,Nr(T,Fl,""))){if(!((y==="src"||y==="xlink:href"||y==="href")&&h!=="script"&&Bd(T,"data:")===0&&Xl[h])){if(!(Bl&&!we(Jp,Nr(T,Fl,"")))){if(T)return!1}}}}}else if(!(ac(h)&&(fe.tagNameCheck instanceof RegExp&&we(fe.tagNameCheck,h)||fe.tagNameCheck instanceof Function&&fe.tagNameCheck(h))&&(fe.attributeNameCheck instanceof RegExp&&we(fe.attributeNameCheck,y)||fe.attributeNameCheck instanceof Function&&fe.attributeNameCheck(y,h))||y==="is"&&fe.allowCustomizedBuiltInElements&&(fe.tagNameCheck instanceof RegExp&&we(fe.tagNameCheck,T)||fe.tagNameCheck instanceof Function&&fe.tagNameCheck(T))))return!1}}return!0},fh=ee({},["annotation-xml","color-profile","font-face","font-face-format","font-face-name","font-face-src","font-face-uri","missing-glyph"]),ac=function(h){return!fh[Mr(h)]&&we(eh,h)},mh=function(h,y,T,H){if(E&&typeof m=="object"&&typeof m.getAttributeType=="function"&&!T)switch(m.getAttributeType(h,y)){case"TrustedHTML":return xn(H);case"TrustedScriptURL":return Bp(H)}return H},gh=function(h,y,T,H){try{T?h.setAttributeNS(T,y,H):h.setAttribute(y,H),to(h)?It(h):zd(e.removed)}catch{Gt(y,h)}},lc=function(h){ct(ce.beforeSanitizeAttributes,h,null);let y=h.attributes;if(!y||to(h))return;de=oc(ce.uponSanitizeAttribute,de,hs,Wr);let T={attrName:"",attrValue:"",keepAttr:!0,allowedAttributes:de,forceKeepAttr:void 0},H=y.length,F=pe(h.nodeName);for(;H--;){let j=y[H],re=j.name,he=j.namespaceURI,Pe=j.value,De=pe(re),ks=Pe,Le=re==="value"?ks:Kv(ks);if(T.attrName=De,T.attrValue=Le,T.keepAttr=!0,T.forceKeepAttr=void 0,ct(ce.uponSanitizeAttribute,h,T),Le=T.attrValue,ql&&(De==="id"||De==="name")&&Bd(Le,Wl)!==0&&(Gt(re,h),Le=Wl+Le),kt&&we(/((--!?|])>)|<\/(style|script|title|xmp|textarea|noscript|iframe|noembed|noframes)/i,Le)){Gt(re,h);continue}if(De==="attributename"&&$d(Le,"href")){Gt(re,h);continue}if(!T.forceKeepAttr){if(!T.keepAttr){Gt(re,h);continue}if(!Vl&&we(my,Le)){Gt(re,h);continue}if(At&&(Le=eo(Le)),!sc(F,De,Le)){Gt(re,h);continue}Le=mh(F,De,he,Le),Le!==ks&&gh(h,re,he,Le)}}ct(ce.afterSanitizeAttributes,h,null)},no=function(h){let y=null,T=rc(h);for(ct(ce.beforeSanitizeShadowDOM,h,null);y=T.nextNode();)if(ct(ce.uponSanitizeShadowNode,y,null),ic(y,h),lc(y),Sn(y.content)&&no(y.content),(P?P(y):y.nodeType)===je.element){let F=S(y);Sn(F)&&(As(F),no(F))}ct(ce.afterSanitizeShadowDOM,h,null)},As=function(h){let y=[{node:h,shadow:null}];for(;y.length>0;){let T=y.pop();if(T.shadow){no(T.shadow);continue}let H=T.node,j=(P?P(H):H.nodeType)===je.element,re=w(H);if(re)for(let he=re.length-1;he>=0;--he)y.push({node:re[he],shadow:null});if(j){let he=v?v(H):null;if(typeof he=="string"&&pe(he)==="template"){let Pe=H.content;Sn(Pe)&&y.push({node:Pe,shadow:null})}}if(j){let he=S(H);Sn(he)&&y.push({node:null,shadow:he},{node:he,shadow:null})}}};return e.sanitize=function(C){let h=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},y=null,T=null,H=null,F=null;if(xs=!C,xs&&(C="<!-->"),typeof C!="string"&&!sr(C)&&(C=ty(C),typeof C!="string"))throw gn("dirty is not a string, aborting");if(!e.isSupported)return C;ms?(ue=qr,de=Wr):_s(h),(ce.uponSanitizeElement.length>0||ce.uponSanitizeAttribute.length>0)&&(ue=Oe(ue)),ce.uponSanitizeAttribute.length>0&&(de=Oe(de)),e.removed=[];let j=Kr&&typeof C!="string"&&sr(C);if(j){dh(C);let Pe=v?v(C):C.nodeName;if(typeof Pe=="string"){let De=pe(Pe);if(!ue[De]||rr[De])throw Jr(C),gn("root node is forbidden and cannot be sanitized in-place")}if(to(C))throw Jr(C),gn("root node is clobbered and cannot be sanitized in-place");try{As(C)}catch(De){throw Jr(C),De}}else if(sr(C))y=nc("<!---->"),T=y.ownerDocument.importNode(C,!0),T.nodeType===je.element&&T.nodeName==="BODY"||T.nodeName==="HTML"?y=T:y.appendChild(T),As(T);else{if(!En&&!At&&!Ft&&C.indexOf("<")===-1)return E&&Yr?xn(C):C;if(y=nc(C),!y)return En?null:Yr?I:""}y&&gs&&It(y.firstChild);let re=j?C:y;try{let Pe=rc(re);for(;H=Pe.nextNode();)ic(H,re),lc(H),Sn(H.content)&&no(H.content)}catch(Pe){throw j&&(Jr(C),Kn(e.removed,De=>{De.element&&ir(De.element)})),Pe}if(j)return Kn(e.removed,Pe=>{Pe.element&&ir(Pe.element)}),At&&Ss(C),C;if(En){if(At&&Ss(y),Xr)for(F=jp.call(y.ownerDocument);y.firstChild;)F.appendChild(y.firstChild);else F=y;return(de.shadowroot||de.shadowrootmode)&&(F=Wp.call(r,F,!0)),F}let he=Ft?y.outerHTML:y.innerHTML;return Ft&&ue["!doctype"]&&y.ownerDocument&&y.ownerDocument.doctype&&y.ownerDocument.doctype.name&&we(py,y.ownerDocument.doctype.name)&&(he="<!DOCTYPE "+y.ownerDocument.doctype.name+`>
`+he),At&&(he=eo(he)),E&&Yr?xn(he):he},e.setConfig=function(){let C=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};_s(C),ms=!0,qr=ue,Wr=de},e.clearConfig=function(){_n=null,ms=!1,qr=null,Wr=null,E=Z,I=""},e.isValidAttribute=function(C,h,y){_n||_s({});let T=pe(C),H=pe(h);return sc(T,H,y)},e.addHook=function(C,h){typeof h=="function"&&Te(ce,C)&&Zn(ce[C],h)},e.removeHook=function(C,h){if(Te(ce,C)){if(h!==void 0){let y=Xv(ce[C],h);return y===-1?void 0:Yv(ce[C],y,1)[0]}return zd(ce[C])}},e.removeHooks=function(C){Te(ce,C)&&(ce[C]=[])},e.removeAllHooks=function(){ce=Jd()},e}var rp=np();function bl(){return{async:!1,breaks:!1,extensions:null,gfm:!0,hooks:null,pedantic:!1,renderer:null,silent:!1,tokenizer:null,walkTokens:null}}var yn=bl();function dp(t){yn=t}var bn={exec:()=>null};function Jn(t){let e=[];return n=>{let r=Math.max(0,Math.min(3,n-1)),o=e[r];return o||(o=t(r),e[r]=o),o}}function K(t,e=""){let n=typeof t=="string"?t:t.source,r={replace:(o,i)=>{let s=typeof i=="string"?i:i.source;return s=s.replace(Me.caret,"$1"),n=n.replace(o,s),r},getRegex:()=>new RegExp(n,e)};return r}var vy=((t="")=>{try{return!!new RegExp("(?<=1)(?<!1)"+t)}catch{return!1}})(),Me={codeRemoveIndent:/^(?: {1,4}| {0,3}\t)/gm,outputLinkReplace:/\\([\[\]])/g,indentCodeCompensation:/^(\s+)(?:```)/,beginningSpace:/^\s+/,endingHash:/#$/,startingSpaceChar:/^ /,endingSpaceChar:/ $/,nonSpaceChar:/[^ ]/,newLineCharGlobal:/\n/g,tabCharGlobal:/\t/g,multipleSpaceGlobal:/\s+/g,blankLine:/^[ \t]*$/,doubleBlankLine:/\n[ \t]*\n[ \t]*$/,blockquoteStart:/^ {0,3}>/,blockquoteSetextReplace:/\n {0,3}((?:=+|-+) *)(?=\n|$)/g,blockquoteSetextReplace2:/^ {0,3}>[ \t]?/gm,listReplaceNesting:/^ {1,4}(?=( {4})*[^ ])/g,listIsTask:/^\[[ xX]\] +\S/,listReplaceTask:/^\[[ xX]\] +/,listTaskCheckbox:/\[[ xX]\]/,anyLine:/\n.*\n/,hrefBrackets:/^<(.*)>$/,tableDelimiter:/[:|]/,tableAlignChars:/^\||\| *$/g,tableRowBlankLine:/\n[ \t]*$/,tableAlignRight:/^ *-+: *$/,tableAlignCenter:/^ *:-+: *$/,tableAlignLeft:/^ *:-+ *$/,startATag:/^<a /i,endATag:/^<\/a>/i,startPreScriptTag:/^<(pre|code|kbd|script)(\s|>)/i,endPreScriptTag:/^<\/(pre|code|kbd|script)(\s|>)/i,startAngleBracket:/^</,endAngleBracket:/>$/,pedanticHrefTitle:/^([^'"]*[^\s])\s+(['"])(.*)\2/,unicodeAlphaNumeric:/[\p{L}\p{N}]/u,escapeTest:/[&<>"']/,escapeReplace:/[&<>"']/g,escapeTestNoEncode:/[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/,escapeReplaceNoEncode:/[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/g,caret:/(^|[^\[])\^/g,percentDecode:/%25/g,findPipe:/\|/g,splitPipe:/ \|/,slashPipe:/\\\|/g,carriageReturn:/\r\n|\r/g,spaceLine:/^ +$/gm,notSpaceStart:/^\S*/,endingNewline:/\n$/,listItemRegex:t=>new RegExp(`^( {0,3}${t})((?:[	 ][^\\n]*)?(?:\\n|$))`),nextBulletRegex:Jn(t=>new RegExp(`^ {0,${t}}(?:[*+-]|\\d{1,9}[.)])((?:[ 	][^\\n]*)?(?:\\n|$))`)),hrRegex:Jn(t=>new RegExp(`^ {0,${t}}((?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$)`)),fencesBeginRegex:Jn(t=>new RegExp(`^ {0,${t}}(?:\`\`\`|~~~)`)),headingBeginRegex:Jn(t=>new RegExp(`^ {0,${t}}#`)),htmlBeginRegex:Jn(t=>new RegExp(`^ {0,${t}}<(?:[a-z].*>|!--)`,"i")),blockquoteBeginRegex:Jn(t=>new RegExp(`^ {0,${t}}>`))},yy=/^(?:[ \t]*(?:\n|$))+/,xy=/^((?: {4}| {0,3}\t)[^\n]+(?:\n(?:[ \t]*(?:\n|$))*)?)+/,Ey=/^ {0,3}(`{3,}(?=[^`\n]*(?:\n|$))|~{3,})([^\n]*)(?:\n|$)(?:|([\s\S]*?)(?:\n|$))(?: {0,3}\1[~`]* *(?=\n|$)|$)/,Dr=/^ {0,3}((?:-[\t ]*){3,}|(?:_[ \t]*){3,}|(?:\*[ \t]*){3,})(?:\n+|$)/,wy=/^ {0,3}(#{1,6})(?=\s|$)(.*)(?:\n+|$)/,vl=/ {0,3}(?:[*+-]|\d{1,9}[.)])/,pp=/^(?!bull |blockCode|fences|blockquote|heading|html|table)((?:.|\n(?!\s*?\n|bull |blockCode|fences|blockquote|heading|html|table))+?)\n {0,3}(=+|-+) *(?:\n+|$)/,hp=K(pp).replace(/bull/g,vl).replace(/blockCode/g,/(?: {4}| {0,3}\t)/).replace(/fences/g,/ {0,3}(?:`{3,}|~{3,})/).replace(/blockquote/g,/ {0,3}>/).replace(/heading/g,/ {0,3}#{1,6}(?:\s|$)/).replace(/html/g,/ {0,3}<[^\n>]+>\n/).replace(/\|table/g,"").getRegex(),Ty=K(pp).replace(/bull/g,vl).replace(/blockCode/g,/(?: {4}| {0,3}\t)/).replace(/fences/g,/ {0,3}(?:`{3,}|~{3,})/).replace(/blockquote/g,/ {0,3}>/).replace(/heading/g,/ {0,3}#{1,6}(?:\s|$)/).replace(/html/g,/ {0,3}<[^\n>]+>\n/).replace(/table/g,/ {0,3}\|?(?:[:\- ]*\|)+[\:\- ]*\n/).getRegex(),yl=/^([^\n]+(?:\n(?!hr|heading|lheading|blockquote|fences|list|html|table|[ \t]+\n)[^\n]+)*)/,_y=/^[^\n]+/,xl=/(?!\s*\])(?:\\[\s\S]|[^\[\]\\])+/,Sy=K(/^ {0,3}\[(label)\]: *(?:\n[ \t]*)?([^<\s][^\s]*|<.*?>)(?:(?: +(?:\n[ \t]*)?| *\n[ \t]*)(title))? *(?:\n+|$)/).replace("label",xl).replace("title",/(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/).getRegex(),Ay=K(/^(bull)([ \t][^\n]*?)?(?:\n|$)/).replace(/bull/g,vl).getRegex(),Qi="address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option|p|param|search|section|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul",El=/<!--(?:-?>|[\s\S]*?(?:-->|$))/,ky=K("^ {0,3}(?:<(script|pre|style|textarea)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n*|$)|comment[^\\n]*(\\n+|$)|<\\?[\\s\\S]*?(?:\\?>[^\\n]*\\n*|$)|<![A-Z][\\s\\S]*?(?:>[^\\n]*\\n*|$)|<!\\[CDATA\\[[\\s\\S]*?(?:\\]\\]>[^\\n]*\\n*|$)|</?(tag)(?: +|\\n|/?>)[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$)|<(?!script|pre|style|textarea)([a-z][\\w-]*)(?:attribute)*? */?>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$)|</(?!script|pre|style|textarea)[a-z][\\w-]*\\s*>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$))","i").replace("comment",El).replace("tag",Qi).replace("attribute",/ +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/).getRegex(),fp=t=>K(yl).replace("hr",Dr).replace("heading"," {0,3}#{1,6}(?:\\s|$)").replace("|lheading","").replace("|table","").replace("blockquote"," {0,3}>").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~~~)[^\\n]*\\n").replace("list",t).replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",Qi).getRegex(),Iy=fp(/ {0,3}(?:[*+-]|1[.)])[ \t]+[^ \t\n]/),Ry=fp(/ {0,3}(?:[*+-]|\d{1,9}[.)])(?:[ \t]|\n|$)/),Cy=K(/^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/).replace("paragraph",Ry).getRegex(),wl={blockquote:Cy,code:xy,def:Sy,fences:Ey,heading:wy,hr:Dr,html:ky,lheading:hp,list:Ay,newline:yy,paragraph:Iy,table:bn,text:_y},op=K("^ *([^\\n ].*)\\n {0,3}((?:\\| *)?:?-+:? *(?:\\| *:?-+:? *)*(?:\\| *)?)(?:\\n((?:(?! *\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)").replace("hr",Dr).replace("heading"," {0,3}#{1,6}(?:\\s|$)").replace("blockquote"," {0,3}>").replace("code","(?: {4}| {0,3}	)[^\\n]").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~~~)[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)])[ \\t]").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",Qi).getRegex(),Ny={...wl,lheading:Ty,table:op,paragraph:K(yl).replace("hr",Dr).replace("heading"," {0,3}#{1,6}(?:\\s|$)").replace("|lheading","").replace("table",op).replace("blockquote"," {0,3}>").replace("fences"," {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~~~)[^\\n]*\\n").replace("list"," {0,3}(?:[*+-]|1[.)])[ \\t]+[^ \\t\\n]").replace("html","</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag",Qi).getRegex()},Oy={...wl,html:K(`^ *(?:comment *(?:\\n|\\s*$)|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)|<tag(?:"[^"]*"|'[^']*'|\\s[^'"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))`).replace("comment",El).replace(/tag/g,"(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:|[^\\w\\s@]*@)\\b").getRegex(),def:/^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/,heading:/^(#{1,6})(.*)(?:\n+|$)/,fences:bn,lheading:/^(.+?)\n {0,3}(=+|-+) *(?:\n+|$)/,paragraph:K(yl).replace("hr",Dr).replace("heading",` *#{1,6} *[^
]`).replace("lheading",hp).replace("|table","").replace("blockquote"," {0,3}>").replace("|fences","").replace("|list","").replace("|html","").replace("|tag","").getRegex()},My=/^\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/,Ly=/^(`+)([^`]|[^`][\s\S]*?[^`])\1(?!`)/,mp=/^( {2,}|\\)\n(?!\s*$)/,Py=/^(`+|[^`])(?:(?= {2,}\n)|[\s\S]*?(?:(?=[\\<!\[`*_]|\b_|$)|[^ ](?= {2,}\n)))/,_t=/[\p{P}\p{S}]/u,er=/[\s\p{P}\p{S}]/u,Ur=/[^\s\p{P}\p{S}]/u,Dy=K(/^((?![*_])punctSpace)/,"u").replace(/punctSpace/g,er).getRegex(),Uy=/[\p{Pi}\p{Ps}"']/u,gp=/(?!~)[\p{P}\p{S}]/u,Hy=/(?!~)[\s\p{P}\p{S}]/u,Fy=/(?:[^\s\p{P}\p{S}]|~)/u,Gy=K(/link|precode-code|html/,"g").replace("link",/\[(?:[^\[\]`]|(?<a>`+)[^`]+\k<a>(?!`))*?\]\((?:\\[\s\S]|[^\\\(\)]|\((?:\\[\s\S]|[^\\\(\)])*\))*\)/).replace("precode-",vy?"(?<!`)()":"(^^|[^`])").replace("code",/(?<b>`+)[^`]+\k<b>(?!`)/).replace("html",/<(?! )[^<>]*?>/).getRegex(),bp=/^(?:\*+(?:((?!\*)punct)|([^\s*]))?)|^_+(?:((?!_)punct)|([^\s_]))?/,zy=K(bp,"u").replace(/punct/g,_t).getRegex(),$y=K(bp,"u").replace(/punct/g,gp).getRegex(),By=/^(?:\*+(?:((?!\*)(?!openQuote)punct)|([^\s*]))?)|^_+(?:((?!_)(?!openQuote)punct)|([^\s_]))?/,Vy=K(By,"u").replace(/openQuote/g,Uy).replace(/punct/g,_t).getRegex(),vp="^[^_*]*?__[^_*]*?\\*[^_*]*?(?=__)|[^*]+(?=[^*])|(?!\\*)punct(\\*+)(?=[\\s]|$)|notPunctSpace(\\*+)(?!\\*)(?=punctSpace|$)|(?!\\*)punctSpace(\\*+)(?=notPunctSpace)|[\\s](\\*+)(?!\\*)(?=punct)|(?!\\*)punct(\\*+)(?!\\*)(?=punct)|notPunctSpace(\\*+)(?=notPunctSpace)",jy=K(vp,"gu").replace(/notPunctSpace/g,Ur).replace(/punctSpace/g,er).replace(/punct/g,_t).getRegex(),qy=K(vp,"gu").replace(/notPunctSpace/g,Fy).replace(/punctSpace/g,Hy).replace(/punct/g,gp).getRegex(),Wy="^[^_*]*?__[^_*]*?\\*[^_*]*?(?=__)|[^*]+(?=[^*])|(?!\\*)punct(\\*+)(?=[\\s]|$)|notPunctSpace(\\*+)(?!\\*)(?=punctSpace|$)|(?!\\*)[\\s](\\*+)(?=notPunctSpace)|[\\s](\\*+)(?!\\*)(?=punct)|(?!\\*)punct(\\*+)(?!\\*)(?=punct)|(?:(?!\\*)punct|notPunctSpace)(\\*+)(?!\\*)(?=notPunctSpace)",Xy=K(Wy,"gu").replace(/notPunctSpace/g,Ur).replace(/punctSpace/g,er).replace(/punct/g,_t).getRegex(),Yy=K("^[^_*]*?\\*\\*[^_*]*?_[^_*]*?(?=\\*\\*)|[^_]+(?=[^_])|(?!_)punct(_+)(?=[\\s]|$)|notPunctSpace(_+)(?!_)(?=punctSpace|$)|(?!_)punctSpace(_+)(?=notPunctSpace)|[\\s](_+)(?!_)(?=punct)|(?!_)punct(_+)(?!_)(?=punct)","gu").replace(/notPunctSpace/g,Ur).replace(/punctSpace/g,er).replace(/punct/g,_t).getRegex(),Ky="^[^_*]*?\\*\\*[^_*]*?_[^_*]*?(?=\\*\\*)|[^_]+(?=[^_])|(?!_)punct(_+)(?=[\\s]|$)|notPunctSpace(_+)(?!_)(?=punctSpace|$)|(?!_)[\\s](_+)(?=notPunctSpace)|[\\s](_+)(?!_)(?=punct)|(?!_)punct(_+)(?!_)(?=punct)|(?:(?!_)punct|notPunctSpace)(_+)(?!_)(?=notPunctSpace)",Zy=K(Ky,"gu").replace(/notPunctSpace/g,Ur).replace(/punctSpace/g,er).replace(/punct/g,_t).getRegex(),Qy=K(/^~~?(?:((?!~)punct)|[^\s~])/,"u").replace(/punct/g,_t).getRegex(),Jy="^[^~]+(?=[^~])|(?!~)punct(~~?)(?=[\\s]|$)|notPunctSpace(~~?)(?!~)(?=punctSpace|$)|(?!~)punctSpace(~~?)(?=notPunctSpace)|[\\s](~~?)(?!~)(?=punct)|(?!~)punct(~~?)(?!~)(?=punct)|notPunctSpace(~~?)(?=notPunctSpace)",ex=K(Jy,"gu").replace(/notPunctSpace/g,Ur).replace(/punctSpace/g,er).replace(/punct/g,_t).getRegex(),tx=K(/\\(punct)/,"gu").replace(/punct/g,_t).getRegex(),nx=K(/^<(scheme:[^\s\x00-\x1f<>]*|email)>/).replace("scheme",/[a-zA-Z][a-zA-Z0-9+.-]{1,31}/).replace("email",/[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/).getRegex(),rx=K(El).replace("(?:-->|$)","-->").getRegex(),ox=K("^comment|^</[a-zA-Z][\\w:-]*\\s*>|^<[a-zA-Z][\\w-]*(?:attribute)*?\\s*/?>|^<\\?[\\s\\S]*?\\?>|^<![a-zA-Z]+\\s[\\s\\S]*?>|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>").replace("comment",rx).replace("attribute",/\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/).getRegex(),Yi=/(?:\[(?:\\[\s\S]|[^\[\]\\])*\]|\\[\s\S]|`+(?!`)[^`]*?`+(?!`)|``+(?=\])|[^\[\]\\`])*?/,ix=K(/^!?\[(label)\]\(\s*(href)(?:(?:[ \t]+(?:\n[ \t]*)?|\n[ \t]*)(title))?\s*\)/).replace("label",Yi).replace("href",/<(?:\\.|[^\n<>\\])+>|[^ \t\n\x00-\x1f]+|(?=\))/).replace("title",/"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/).getRegex(),yp=K(/^!?\[(label)\]\[(ref)\]/).replace("label",Yi).replace("ref",xl).getRegex(),xp=K(/^!?\[(ref)\](?:\[\])?/).replace("ref",xl).getRegex(),sx=K("reflink|nolink(?!\\()","g").replace("reflink",yp).replace("nolink",xp).getRegex(),ip=/[hH][tT][tT][pP][sS]?|[fF][tT][pP]/,Tl={_backpedal:bn,anyPunctuation:tx,autolink:nx,blockSkip:Gy,br:mp,code:Ly,del:bn,delLDelim:bn,delRDelim:bn,emStrongLDelim:zy,emStrongRDelimAst:jy,emStrongRDelimUnd:Yy,escape:My,link:ix,nolink:xp,punctuation:Dy,reflink:yp,reflinkSearch:sx,tag:ox,text:Py,url:bn},ax={...Tl,emStrongLDelim:Vy,emStrongRDelimAst:Xy,emStrongRDelimUnd:Zy,link:K(/^!?\[(label)\]\((.*?)\)/).replace("label",Yi).getRegex(),reflink:K(/^!?\[(label)\]\s*\[([^\]]*)\]/).replace("label",Yi).getRegex()},fl={...Tl,emStrongRDelimAst:qy,emStrongLDelim:$y,delLDelim:Qy,delRDelim:ex,url:K(/^((?:protocol):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/).replace("protocol",ip).replace("email",/[A-Za-z0-9._+-]+(@)[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![-_])/).getRegex(),_backpedal:/(?:[^?!.,:;*_'"~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_'"~)]+(?!$))+/,del:/^(~~?)(?=[^\s~])((?:\\[\s\S]|[^\\])*?(?:\\[\s\S]|[^\s~\\]))\1(?=[^~]|$)/,text:K(/^(`+|~+|[^`~])(?:(?=[`~])|(?= {2,}\n)|(?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)|[\s\S]*?(?:(?=[\\<!\[`*~_]|\b_|protocol:\/\/|www\.|$)|[^ ](?= {2,}\n)|[^a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-](?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)))/).replace("protocol",ip).getRegex()},lx={...fl,br:K(mp).replace("{2,}","*").getRegex(),text:K(fl.text).replace("\\b_","\\b_| {2,}\\n").replace(/\{2,\}/g,"*").getRegex()},Xi={normal:wl,gfm:Ny,pedantic:Oy},Lr={normal:Tl,gfm:fl,breaks:lx,pedantic:ax},cx={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"},sp=t=>cx[t];function bt(t,e){if(e){if(Me.escapeTest.test(t))return t.replace(Me.escapeReplace,sp)}else if(Me.escapeTestNoEncode.test(t))return t.replace(Me.escapeReplaceNoEncode,sp);return t}function ap(t){try{t=encodeURI(t).replace(Me.percentDecode,"%")}catch{return null}return t}function lp(t,e){let n=t.replace(Me.findPipe,(i,s,a)=>{let l=!1,c=s;for(;--c>=0&&a[c]==="\\";)l=!l;return l?"|":" |"}),r=n.split(Me.splitPipe),o=0;if(r[0].trim()||r.shift(),r.length>0&&!r.at(-1)?.trim()&&r.pop(),e)if(r.length>e)r.splice(e);else for(;r.length<e;)r.push("");for(;o<r.length;o++)r[o]=r[o].trim().replace(Me.slashPipe,"|");return r}function Ht(t,e,n){let r=t.length;if(r===0)return"";let o=0;for(;o<r;){let i=t.charAt(r-o-1);if(i===e&&!n)o++;else if(i!==e&&n)o++;else break}return t.slice(0,r-o)}function cp(t){let e=t.split(`
`),n=e.length-1;for(;n>=0&&Me.blankLine.test(e[n]);)n--;return e.length-n<=2?t:e.slice(0,n+1).join(`
`)}function ux(t,e){if(t.indexOf(e[1])===-1)return-1;let n=0;for(let r=0;r<t.length;r++)if(t[r]==="\\")r++;else if(t[r]===e[0])n++;else if(t[r]===e[1]&&(n--,n<0))return r;return n>0?-2:-1}function dx(t,e=0){let n=e,r="";for(let o of t)if(o==="	"){let i=4-n%4;r+=" ".repeat(i),n+=i}else r+=o,n++;return r}function up(t,e,n,r,o){let i=e.href,s=e.title||null,a=t[1].replace(o.other.outputLinkReplace,"$1");r.state.inLink=!0;let l={type:t[0].charAt(0)==="!"?"image":"link",raw:n,href:i,title:s,text:a,tokens:r.inlineTokens(a)};return r.state.inLink=!1,l}function px(t,e,n){let r=t.match(n.other.indentCodeCompensation);if(r===null)return e;let o=r[1];return e.split(`
`).map(i=>{let s=i.match(n.other.beginningSpace);if(s===null)return i;let[a]=s;return a.length>=o.length?i.slice(o.length):i}).join(`
`)}var Ki=class{options;rules;lexer;constructor(t){this.options=t||yn}space(t){let e=this.rules.block.newline.exec(t);if(e&&e[0].length>0)return{type:"space",raw:e[0]}}code(t){let e=this.rules.block.code.exec(t);if(e){let n=this.options.pedantic?e[0]:cp(e[0]),r=n.replace(this.rules.other.codeRemoveIndent,"");return{type:"code",raw:n,codeBlockStyle:"indented",text:r}}}fences(t){let e=this.rules.block.fences.exec(t);if(e){let n=e[0],r=px(n,e[3]||"",this.rules);return{type:"code",raw:n,lang:e[2]?e[2].trim().replace(this.rules.inline.anyPunctuation,"$1"):e[2],text:r}}}heading(t){let e=this.rules.block.heading.exec(t);if(e){let n=e[2].trim();if(this.rules.other.endingHash.test(n)){let r=Ht(n,"#");(this.options.pedantic||!r||this.rules.other.endingSpaceChar.test(r))&&(n=r.trim())}return{type:"heading",raw:Ht(e[0],`
`),depth:e[1].length,text:n,tokens:this.lexer.inline(n)}}}hr(t){let e=this.rules.block.hr.exec(t);if(e)return{type:"hr",raw:Ht(e[0],`
`)}}blockquote(t){let e=this.rules.block.blockquote.exec(t);if(e){let n=Ht(e[0],`
`).split(`
`),r="",o="",i=[];for(;n.length>0;){let s=!1,a=[],l;for(l=0;l<n.length;l++)if(this.rules.other.blockquoteStart.test(n[l]))a.push(n[l]),s=!0;else if(!s)a.push(n[l]);else break;n=n.slice(l);let c=a.join(`
`),d=c.replace(this.rules.other.blockquoteSetextReplace,`
    $1`).replace(this.rules.other.blockquoteSetextReplace2,"");r=r?`${r}
${c}`:c,o=o?`${o}
${d}`:d;let m=this.lexer.state.top;if(this.lexer.state.top=!0,this.lexer.blockTokens(d,i,!0),this.lexer.state.top=m,n.length===0)break;let x=i.at(-1);if(x?.type==="code")break;if(x?.type==="blockquote"){let f=x,p=n.join(`
`),b=f.raw+`
`+p.replace(this.rules.other.blockquoteSetextReplace2,""),w=this.blockquote(b);i[i.length-1]=w,r=`${r}
${p}`,o=o.substring(0,o.length-f.text.length)+w.text;break}else if(x?.type==="list"){let f=x,p=f.raw+`
`+n.join(`
`),b=this.list(p);i[i.length-1]=b,r=r.substring(0,r.length-x.raw.length)+b.raw,o=o.substring(0,o.length-f.raw.length)+b.raw,n=p.substring(i.at(-1).raw.length).split(`
`);continue}}return{type:"blockquote",raw:r,tokens:i,text:o}}}list(t){let e=this.rules.block.list.exec(t);if(e){let n=e[1].trim(),r=n.length>1,o={type:"list",raw:"",ordered:r,start:r?+n.slice(0,-1):"",loose:!1,items:[]};n=r?`\\d{1,9}\\${n.slice(-1)}`:`\\${n}`,this.options.pedantic&&(n=r?n:"[*+-]");let i=this.rules.other.listItemRegex(n),s=!1;for(;t;){let l=!1,c="",d="";if(!(e=i.exec(t))||this.rules.block.hr.test(t))break;c=e[0],t=t.substring(c.length);let m=dx(e[2].split(`
`,1)[0],e[1].length),x=t.split(`
`,1)[0],f=!m.trim(),p=0;if(this.options.pedantic?(p=2,d=m.trimStart()):f?p=e[1].length+1:(p=m.search(this.rules.other.nonSpaceChar),p=p>4?1:p,d=m.slice(p),p+=e[1].length),f&&this.rules.other.blankLine.test(x)&&(c+=x+`
`,t=t.substring(x.length+1),l=!0),!l){let b=this.rules.other.nextBulletRegex(p),w=this.rules.other.hrRegex(p),_=this.rules.other.fencesBeginRegex(p),S=this.rules.other.headingBeginRegex(p),M=this.rules.other.htmlBeginRegex(p),P=this.rules.other.blockquoteBeginRegex(p);for(;t;){let v=t.split(`
`,1)[0],A;if(x=v,this.options.pedantic?(x=x.replace(this.rules.other.listReplaceNesting,"  "),A=x):A=x.replace(this.rules.other.tabCharGlobal,"    "),_.test(x)||S.test(x)||M.test(x)||P.test(x)||b.test(x)||w.test(x))break;if(A.search(this.rules.other.nonSpaceChar)>=p||!x.trim())d+=`
`+A.slice(p);else{if(f||m.replace(this.rules.other.tabCharGlobal,"    ").search(this.rules.other.nonSpaceChar)>=4||_.test(m)||S.test(m)||w.test(m))break;d+=`
`+x}f=!x.trim(),c+=v+`
`,t=t.substring(v.length+1),m=A.slice(p)}}o.loose||(s?o.loose=!0:this.rules.other.doubleBlankLine.test(c)&&(s=!0)),o.items.push({type:"list_item",raw:c,task:!!this.options.gfm&&this.rules.other.listIsTask.test(d),loose:!1,text:d,tokens:[]}),o.raw+=c}let a=o.items.at(-1);if(a)a.raw=a.raw.trimEnd(),a.text=a.text.trimEnd();else return;o.raw=o.raw.trimEnd();for(let l of o.items){this.lexer.state.top=!1,l.tokens=this.lexer.blockTokens(l.text,[]);let c=l.tokens[0];if(l.task&&(c?.type==="text"||c?.type==="paragraph")){l.text=l.text.replace(this.rules.other.listReplaceTask,""),c.raw=c.raw.replace(this.rules.other.listReplaceTask,""),c.text=c.text.replace(this.rules.other.listReplaceTask,"");for(let m=this.lexer.inlineQueue.length-1;m>=0;m--)if(this.rules.other.listIsTask.test(this.lexer.inlineQueue[m].src)){this.lexer.inlineQueue[m].src=this.lexer.inlineQueue[m].src.replace(this.rules.other.listReplaceTask,"");break}let d=this.rules.other.listTaskCheckbox.exec(l.raw);if(d){let m={type:"checkbox",raw:d[0]+" ",checked:d[0]!=="[ ]"};l.checked=m.checked,o.loose?l.tokens[0]&&["paragraph","text"].includes(l.tokens[0].type)&&"tokens"in l.tokens[0]&&l.tokens[0].tokens?(l.tokens[0].raw=m.raw+l.tokens[0].raw,l.tokens[0].text=m.raw+l.tokens[0].text,l.tokens[0].tokens.unshift(m)):l.tokens.unshift({type:"paragraph",raw:m.raw,text:m.raw,tokens:[m]}):l.tokens.unshift(m)}}else l.task&&(l.task=!1);if(!o.loose){let d=l.tokens.filter(x=>x.type==="space"),m=d.length>0&&d.some(x=>this.rules.other.anyLine.test(x.raw));o.loose=m}}if(o.loose)for(let l of o.items){l.loose=!0;for(let c of l.tokens)c.type==="text"&&(c.type="paragraph")}return o}}html(t){let e=this.rules.block.html.exec(t);if(e){let n=cp(e[0]);return{type:"html",block:!0,raw:n,pre:e[1]==="pre"||e[1]==="script"||e[1]==="style",text:n}}}def(t){let e=this.rules.block.def.exec(t);if(e){let n=e[1].toLowerCase().replace(this.rules.other.multipleSpaceGlobal," "),r=e[2]?e[2].replace(this.rules.other.hrefBrackets,"$1").replace(this.rules.inline.anyPunctuation,"$1"):"",o=e[3]?e[3].substring(1,e[3].length-1).replace(this.rules.inline.anyPunctuation,"$1"):e[3];return{type:"def",tag:n,raw:Ht(e[0],`
`),href:r,title:o}}}table(t){let e=this.rules.block.table.exec(t);if(!e||!this.rules.other.tableDelimiter.test(e[2]))return;let n=lp(e[1]),r=e[2].replace(this.rules.other.tableAlignChars,"").split("|"),o=e[3]?.trim()?e[3].replace(this.rules.other.tableRowBlankLine,"").split(`
`):[],i={type:"table",raw:Ht(e[0],`
`),header:[],align:[],rows:[]};if(n.length===r.length){for(let s of r)this.rules.other.tableAlignRight.test(s)?i.align.push("right"):this.rules.other.tableAlignCenter.test(s)?i.align.push("center"):this.rules.other.tableAlignLeft.test(s)?i.align.push("left"):i.align.push(null);for(let s=0;s<n.length;s++)i.header.push({text:n[s],tokens:this.lexer.inline(n[s]),header:!0,align:i.align[s]});for(let s of o)i.rows.push(lp(s,i.header.length).map((a,l)=>({text:a,tokens:this.lexer.inline(a),header:!1,align:i.align[l]})));return i}}lheading(t){let e=this.rules.block.lheading.exec(t);if(e){let n=e[1].trim();return{type:"heading",raw:Ht(e[0],`
`),depth:e[2].charAt(0)==="="?1:2,text:n,tokens:this.lexer.inline(n)}}}paragraph(t){let e=this.rules.block.paragraph.exec(t);if(e){let n=e[1].charAt(e[1].length-1)===`
`?e[1].slice(0,-1):e[1];return{type:"paragraph",raw:e[0],text:n,tokens:this.lexer.inline(n)}}}text(t){let e=this.rules.block.text.exec(t);if(e)return{type:"text",raw:e[0],text:e[0],tokens:this.lexer.inline(e[0])}}escape(t){let e=this.rules.inline.escape.exec(t);if(e)return{type:"escape",raw:e[0],text:e[1]}}tag(t){let e=this.rules.inline.tag.exec(t);if(e)return!this.lexer.state.inLink&&this.rules.other.startATag.test(e[0])?this.lexer.state.inLink=!0:this.lexer.state.inLink&&this.rules.other.endATag.test(e[0])&&(this.lexer.state.inLink=!1),!this.lexer.state.inRawBlock&&this.rules.other.startPreScriptTag.test(e[0])?this.lexer.state.inRawBlock=!0:this.lexer.state.inRawBlock&&this.rules.other.endPreScriptTag.test(e[0])&&(this.lexer.state.inRawBlock=!1),{type:"html",raw:e[0],inLink:this.lexer.state.inLink,inRawBlock:this.lexer.state.inRawBlock,block:!1,text:e[0]}}link(t){let e=this.rules.inline.link.exec(t);if(e){let n=e[2].trim();if(!this.options.pedantic&&this.rules.other.startAngleBracket.test(n)){if(!this.rules.other.endAngleBracket.test(n))return;let i=Ht(n.slice(0,-1),"\\");if((n.length-i.length)%2===0)return}else{let i=ux(e[2],"()");if(i===-2)return;if(i>-1){let s=(e[0].indexOf("!")===0?5:4)+e[1].length+i;e[2]=e[2].substring(0,i),e[0]=e[0].substring(0,s).trim(),e[3]=""}}let r=e[2],o="";if(this.options.pedantic){let i=this.rules.other.pedanticHrefTitle.exec(r);i&&(r=i[1],o=i[3])}else o=e[3]?e[3].slice(1,-1):"";return r=r.trim(),this.rules.other.startAngleBracket.test(r)&&(this.options.pedantic&&!this.rules.other.endAngleBracket.test(n)?r=r.slice(1):r=r.slice(1,-1)),up(e,{href:r&&r.replace(this.rules.inline.anyPunctuation,"$1"),title:o&&o.replace(this.rules.inline.anyPunctuation,"$1")},e[0],this.lexer,this.rules)}}reflink(t,e){let n;if((n=this.rules.inline.reflink.exec(t))||(n=this.rules.inline.nolink.exec(t))){let r=(n[2]||n[1]).replace(this.rules.other.multipleSpaceGlobal," "),o=e[r.toLowerCase()];if(!o){let i=n[0].charAt(0);return{type:"text",raw:i,text:i}}return up(n,o,n[0],this.lexer,this.rules)}}emStrong(t,e,n=""){let r=this.rules.inline.emStrongLDelim.exec(t);if(!(!r||!r[1]&&!r[2]&&!r[3]&&!r[4]||r[4]&&n.match(this.rules.other.unicodeAlphaNumeric))&&(!(r[1]||r[3])||!n||this.rules.inline.punctuation.exec(n))){let o=[...r[0]].length-1,i,s,a=o,l=0,c=r[0][0],d=n===c,m=c==="*"?this.rules.inline.emStrongRDelimAst:this.rules.inline.emStrongRDelimUnd;for(m.lastIndex=0,e=e.slice(-1*t.length+o);(r=m.exec(e))!==null;){if(i=r[1]||r[2]||r[3]||r[4]||r[5]||r[6],!i)continue;if(s=[...i].length,r[3]||r[4]){a+=s;continue}else if(r[5]||r[6]){if(o%3&&!((o+s)%3)){l+=s;continue}if(d)break}if(a-=s,a>0)continue;s=Math.min(s,s+a+l);let x=[...r[0]][0].length,f=t.slice(0,o+r.index+x+s);if(Math.min(o,s)%2){let b=f.slice(1,-1);return{type:"em",raw:f,text:b,tokens:this.lexer.inlineTokens(b)}}let p=f.slice(2,-2);return{type:"strong",raw:f,text:p,tokens:this.lexer.inlineTokens(p)}}}}codespan(t){let e=this.rules.inline.code.exec(t);if(e){let n=e[2].replace(this.rules.other.newLineCharGlobal," "),r=this.rules.other.nonSpaceChar.test(n),o=this.rules.other.startingSpaceChar.test(n)&&this.rules.other.endingSpaceChar.test(n);return r&&o&&(n=n.substring(1,n.length-1)),{type:"codespan",raw:e[0],text:n}}}br(t){let e=this.rules.inline.br.exec(t);if(e)return{type:"br",raw:e[0]}}del(t,e,n=""){let r=this.rules.inline.delLDelim.exec(t);if(r&&(!r[1]||!n||this.rules.inline.punctuation.exec(n))){let o=[...r[0]].length-1,i,s,a=o,l=this.rules.inline.delRDelim;for(l.lastIndex=0,e=e.slice(-1*t.length+o);(r=l.exec(e))!==null;){if(i=r[1]||r[2]||r[3]||r[4]||r[5]||r[6],!i||(s=[...i].length,s!==o))continue;if(r[3]||r[4]){a+=s;continue}if(a-=s,a>0)continue;s=Math.min(s,s+a);let c=[...r[0]][0].length,d=t.slice(0,o+r.index+c+s),m=d.slice(o,-o);return{type:"del",raw:d,text:m,tokens:this.lexer.inlineTokens(m)}}}}autolink(t){let e=this.rules.inline.autolink.exec(t);if(e){let n,r;return e[2]==="@"?(n=e[1],r="mailto:"+n):(n=e[1],r=n),{type:"link",raw:e[0],text:n,href:r,tokens:[{type:"text",raw:n,text:n}]}}}url(t){let e;if(e=this.rules.inline.url.exec(t)){let n,r;if(e[2]==="@")n=e[0],r="mailto:"+n;else{let o;do o=e[0],e[0]=this.rules.inline._backpedal.exec(e[0])?.[0]??"";while(o!==e[0]);n=e[0],e[1]==="www."?r="http://"+e[0]:r=e[0]}return{type:"link",raw:e[0],text:n,href:r,tokens:[{type:"text",raw:n,text:n}]}}}inlineText(t){let e=this.rules.inline.text.exec(t);if(e){let n=this.lexer.state.inRawBlock;return{type:"text",raw:e[0],text:e[0],escaped:n}}}},ot=class ml{tokens;options;state;inlineQueue;tokenizer;constructor(e){this.tokens=[],this.tokens.links=Object.create(null),this.options=e||yn,this.options.tokenizer=this.options.tokenizer||new Ki,this.tokenizer=this.options.tokenizer,this.tokenizer.options=this.options,this.tokenizer.lexer=this,this.inlineQueue=[],this.state={inLink:!1,inRawBlock:!1,top:!0};let n={other:Me,block:Xi.normal,inline:Lr.normal};this.options.pedantic?(n.block=Xi.pedantic,n.inline=Lr.pedantic):this.options.gfm&&(n.block=Xi.gfm,this.options.breaks?n.inline=Lr.breaks:n.inline=Lr.gfm),this.tokenizer.rules=n}static get rules(){return{block:Xi,inline:Lr}}static lex(e,n){return new ml(n).lex(e)}static lexInline(e,n){return new ml(n).inlineTokens(e)}lex(e){e=e.replace(Me.carriageReturn,`
`),this.blockTokens(e,this.tokens);for(let n=0;n<this.inlineQueue.length;n++){let r=this.inlineQueue[n];this.inlineTokens(r.src,r.tokens)}return this.inlineQueue=[],this.tokens}blockTokens(e,n=[],r=!1){this.tokenizer.lexer=this,this.options.pedantic&&(e=e.replace(Me.tabCharGlobal,"    ").replace(Me.spaceLine,""));let o=1/0;for(;e;){if(e.length<o)o=e.length;else{this.infiniteLoopError(e.charCodeAt(0));break}let i;if(this.options.extensions?.block?.some(a=>(i=a.call({lexer:this},e,n))?(e=e.substring(i.raw.length),n.push(i),!0):!1))continue;if(i=this.tokenizer.space(e)){e=e.substring(i.raw.length);let a=n.at(-1);i.raw.length===1&&a!==void 0?a.raw+=`
`:n.push(i);continue}if(i=this.tokenizer.code(e)){e=e.substring(i.raw.length);let a=n.at(-1);a?.type==="paragraph"||a?.type==="text"?(a.raw+=(a.raw.endsWith(`
`)?"":`
`)+i.raw,a.text+=`
`+i.text,this.inlineQueue.at(-1).src=a.text):n.push(i);continue}if(i=this.tokenizer.fences(e)){e=e.substring(i.raw.length),n.push(i);continue}if(i=this.tokenizer.heading(e)){e=e.substring(i.raw.length),n.push(i);continue}if(i=this.tokenizer.hr(e)){e=e.substring(i.raw.length),n.push(i);continue}if(i=this.tokenizer.blockquote(e)){e=e.substring(i.raw.length),n.push(i);continue}if(i=this.tokenizer.list(e)){e=e.substring(i.raw.length),n.push(i);continue}if(i=this.tokenizer.html(e)){e=e.substring(i.raw.length),n.push(i);continue}if(i=this.tokenizer.def(e)){e=e.substring(i.raw.length);let a=n.at(-1);a?.type==="paragraph"||a?.type==="text"?(a.raw+=(a.raw.endsWith(`
`)?"":`
`)+i.raw,a.text+=`
`+i.raw,this.inlineQueue.at(-1).src=a.text):this.tokens.links[i.tag]||(this.tokens.links[i.tag]={href:i.href,title:i.title},n.push(i));continue}if(i=this.tokenizer.table(e)){e=e.substring(i.raw.length),n.push(i);continue}if(i=this.tokenizer.lheading(e)){e=e.substring(i.raw.length),n.push(i);continue}let s=e;if(this.options.extensions?.startBlock){let a=1/0,l=e.slice(1),c;this.options.extensions.startBlock.forEach(d=>{c=d.call({lexer:this},l),typeof c=="number"&&c>=0&&(a=Math.min(a,c))}),a<1/0&&a>=0&&(s=e.substring(0,a+1))}if(this.state.top&&(i=this.tokenizer.paragraph(s))){let a=n.at(-1);r&&a?.type==="paragraph"?(a.raw+=(a.raw.endsWith(`
`)?"":`
`)+i.raw,a.text+=`
`+i.text,this.inlineQueue.pop(),this.inlineQueue.at(-1).src=a.text):n.push(i),r=s.length!==e.length,e=e.substring(i.raw.length);continue}if(i=this.tokenizer.text(e)){e=e.substring(i.raw.length);let a=n.at(-1);a?.type==="text"?(a.raw+=(a.raw.endsWith(`
`)?"":`
`)+i.raw,a.text+=`
`+i.text,this.inlineQueue.pop(),this.inlineQueue.at(-1).src=a.text):n.push(i);continue}if(e){this.infiniteLoopError(e.charCodeAt(0));break}}return this.state.top=!0,n}inline(e,n=[]){return this.inlineQueue.push({src:e,tokens:n}),n}inlineTokens(e,n=[]){this.tokenizer.lexer=this;let r=e;if(this.tokens.links){let a=Object.keys(this.tokens.links);a.length>0&&(r=r.replace(this.tokenizer.rules.inline.reflinkSearch,l=>a.includes(l.slice(l.lastIndexOf("[")+1,-1))?"["+"a".repeat(l.length-2)+"]":l))}r=r.replace(this.tokenizer.rules.inline.anyPunctuation,"++"),r=r.replace(this.tokenizer.rules.inline.blockSkip,(a,l,c)=>{let d=c?c.length:0;return a.slice(0,d)+"["+"a".repeat(a.length-d-2)+"]"}),r=this.options.hooks?.emStrongMask?.call({lexer:this},r)??r;let o=!1,i="",s=1/0;for(;e;){if(e.length<s)s=e.length;else{this.infiniteLoopError(e.charCodeAt(0));break}o||(i=""),o=!1;let a;if(this.options.extensions?.inline?.some(c=>(a=c.call({lexer:this},e,n))?(e=e.substring(a.raw.length),n.push(a),!0):!1))continue;if(a=this.tokenizer.escape(e)){e=e.substring(a.raw.length),n.push(a);continue}if(a=this.tokenizer.tag(e)){e=e.substring(a.raw.length),n.push(a);continue}if(a=this.tokenizer.link(e)){e=e.substring(a.raw.length),n.push(a);continue}if(a=this.tokenizer.reflink(e,this.tokens.links)){e=e.substring(a.raw.length);let c=n.at(-1);a.type==="text"&&c?.type==="text"?(c.raw+=a.raw,c.text+=a.text):n.push(a);continue}if(a=this.tokenizer.emStrong(e,r,i)){e=e.substring(a.raw.length),n.push(a);continue}if(a=this.tokenizer.codespan(e)){e=e.substring(a.raw.length),n.push(a);continue}if(a=this.tokenizer.br(e)){e=e.substring(a.raw.length),n.push(a);continue}if(a=this.tokenizer.del(e,r,i)){e=e.substring(a.raw.length),n.push(a);continue}if(a=this.tokenizer.autolink(e)){e=e.substring(a.raw.length),n.push(a);continue}if(!this.state.inLink&&(a=this.tokenizer.url(e))){e=e.substring(a.raw.length),n.push(a);continue}let l=e;if(this.options.extensions?.startInline){let c=1/0,d=e.slice(1),m;this.options.extensions.startInline.forEach(x=>{m=x.call({lexer:this},d),typeof m=="number"&&m>=0&&(c=Math.min(c,m))}),c<1/0&&c>=0&&(l=e.substring(0,c+1))}if(a=this.tokenizer.inlineText(l)){e=e.substring(a.raw.length),a.raw.slice(-1)!=="_"&&(i=a.raw.slice(-1)),o=!0;let c=n.at(-1);c?.type==="text"?(c.raw+=a.raw,c.text+=a.text):n.push(a);continue}if(e){this.infiniteLoopError(e.charCodeAt(0));break}}return n}infiniteLoopError(e){let n="Infinite loop on byte: "+e;if(this.options.silent)console.error(n);else throw new Error(n)}},Zi=class{options;parser;constructor(t){this.options=t||yn}space(t){return""}code({text:t,lang:e,escaped:n}){let r=(e||"").match(Me.notSpaceStart)?.[0],o=t.replace(Me.endingNewline,"")+`
`;return r?'<pre><code class="language-'+bt(r)+'">'+(n?o:bt(o,!0))+`</code></pre>
`:"<pre><code>"+(n?o:bt(o,!0))+`</code></pre>
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
`}strong({tokens:t}){return`<strong>${this.parser.parseInline(t)}</strong>`}em({tokens:t}){return`<em>${this.parser.parseInline(t)}</em>`}codespan({text:t}){return`<code>${bt(t,!0)}</code>`}br(t){return"<br>"}del({tokens:t}){return`<del>${this.parser.parseInline(t)}</del>`}link({href:t,title:e,tokens:n}){let r=this.parser.parseInline(n),o=ap(t);if(o===null)return r;t=o;let i='<a href="'+t+'"';return e&&(i+=' title="'+bt(e)+'"'),i+=">"+r+"</a>",i}image({href:t,title:e,text:n,tokens:r}){r&&(n=this.parser.parseInline(r,this.parser.textRenderer));let o=ap(t);if(o===null)return bt(n);t=o;let i=`<img src="${t}" alt="${bt(n)}"`;return e&&(i+=` title="${bt(e)}"`),i+=">",i}text(t){return"tokens"in t&&t.tokens?this.parser.parseInline(t.tokens):"escaped"in t&&t.escaped?t.text:bt(t.text)}},_l=class{strong({text:t}){return t}em({text:t}){return t}codespan({text:t}){return t}del({text:t}){return t}html({text:t}){return t}text({text:t}){return t}link({text:t}){return""+t}image({text:t}){return""+t}br(){return""}checkbox({raw:t}){return t}},it=class gl{options;renderer;textRenderer;constructor(e){this.options=e||yn,this.options.renderer=this.options.renderer||new Zi,this.renderer=this.options.renderer,this.renderer.options=this.options,this.renderer.parser=this,this.textRenderer=new _l}static parse(e,n){return new gl(n).parse(e)}static parseInline(e,n){return new gl(n).parseInline(e)}parse(e){this.renderer.parser=this;let n="";for(let r=0;r<e.length;r++){let o=e[r];if(this.options.extensions?.renderers?.[o.type]){let s=o,a=this.options.extensions.renderers[s.type].call({parser:this},s);if(a!==!1||!["space","hr","heading","code","table","blockquote","list","checkbox","html","def","paragraph","text"].includes(s.type)){n+=a||"";continue}}let i=o;switch(i.type){case"space":{n+=this.renderer.space(i);break}case"hr":{n+=this.renderer.hr(i);break}case"heading":{n+=this.renderer.heading(i);break}case"code":{n+=this.renderer.code(i);break}case"table":{n+=this.renderer.table(i);break}case"blockquote":{n+=this.renderer.blockquote(i);break}case"list":{n+=this.renderer.list(i);break}case"checkbox":{n+=this.renderer.checkbox(i);break}case"html":{n+=this.renderer.html(i);break}case"def":{n+=this.renderer.def(i);break}case"paragraph":{n+=this.renderer.paragraph(i);break}case"text":{n+=this.renderer.text(i);break}default:{let s='Token with "'+i.type+'" type was not found.';if(this.options.silent)return console.error(s),"";throw new Error(s)}}}return n}parseInline(e,n=this.renderer){this.renderer.parser=this;let r="";for(let o=0;o<e.length;o++){let i=e[o];if(this.options.extensions?.renderers?.[i.type]){let a=this.options.extensions.renderers[i.type].call({parser:this},i);if(a!==!1||!["escape","html","link","image","checkbox","strong","em","codespan","br","del","text"].includes(i.type)){r+=a||"";continue}}let s=i;switch(s.type){case"escape":{r+=n.text(s);break}case"html":{r+=n.html(s);break}case"link":{r+=n.link(s);break}case"image":{r+=n.image(s);break}case"checkbox":{r+=n.checkbox(s);break}case"strong":{r+=n.strong(s);break}case"em":{r+=n.em(s);break}case"codespan":{r+=n.codespan(s);break}case"br":{r+=n.br(s);break}case"del":{r+=n.del(s);break}case"text":{r+=n.text(s);break}default:{let a='Token with "'+s.type+'" type was not found.';if(this.options.silent)return console.error(a),"";throw new Error(a)}}}return r}},Pr=class{options;block;constructor(t){this.options=t||yn}static passThroughHooks=new Set(["preprocess","postprocess","processAllTokens","emStrongMask"]);static passThroughHooksRespectAsync=new Set(["preprocess","postprocess","processAllTokens"]);preprocess(t){return t}postprocess(t){return t}processAllTokens(t){return t}emStrongMask(t){return t}provideLexer(t=this.block){return t?ot.lex:ot.lexInline}provideParser(t=this.block){return t?it.parse:it.parseInline}},Sl=class{defaults=bl();options=this.setOptions;parse=this.parseMarkdown(!0);parseInline=this.parseMarkdown(!1);Parser=it;Renderer=Zi;TextRenderer=_l;Lexer=ot;Tokenizer=Ki;Hooks=Pr;constructor(...t){this.use(...t)}walkTokens(t,e){let n=[];for(let r of t)switch(n=n.concat(e.call(this,r)),r.type){case"table":{let o=r;for(let i of o.header)n=n.concat(this.walkTokens(i.tokens,e));for(let i of o.rows)for(let s of i)n=n.concat(this.walkTokens(s.tokens,e));break}case"list":{let o=r;n=n.concat(this.walkTokens(o.items,e));break}default:{let o=r;this.defaults.extensions?.childTokens?.[o.type]?this.defaults.extensions.childTokens[o.type].forEach(i=>{let s=o[i].flat(1/0);n=n.concat(this.walkTokens(s,e))}):o.tokens&&(n=n.concat(this.walkTokens(o.tokens,e)))}}return n}use(...t){let e=this.defaults.extensions||{renderers:{},childTokens:{}};return t.forEach(n=>{let r={...n};if(r.async=this.defaults.async||r.async||!1,n.extensions&&(n.extensions.forEach(o=>{if(!o.name)throw new Error("extension name required");if("renderer"in o){let i=e.renderers[o.name];i?e.renderers[o.name]=function(...s){let a=o.renderer.apply(this,s);return a===!1&&(a=i.apply(this,s)),a}:e.renderers[o.name]=o.renderer}if("tokenizer"in o){if(!o.level||o.level!=="block"&&o.level!=="inline")throw new Error("extension level must be 'block' or 'inline'");let i=e[o.level];i?i.unshift(o.tokenizer):e[o.level]=[o.tokenizer],o.start&&(o.level==="block"?e.startBlock?e.startBlock.push(o.start):e.startBlock=[o.start]:o.level==="inline"&&(e.startInline?e.startInline.push(o.start):e.startInline=[o.start]))}"childTokens"in o&&o.childTokens&&(e.childTokens[o.name]=o.childTokens)}),r.extensions=e),n.renderer){let o=this.defaults.renderer||new Zi(this.defaults);for(let i in n.renderer){if(!(i in o))throw new Error(`renderer '${i}' does not exist`);if(["options","parser"].includes(i))continue;let s=i,a=n.renderer[s],l=o[s];o[s]=(...c)=>{let d=a.apply(o,c);return d===!1&&(d=l.apply(o,c)),d||""}}r.renderer=o}if(n.tokenizer){let o=this.defaults.tokenizer||new Ki(this.defaults);for(let i in n.tokenizer){if(!(i in o))throw new Error(`tokenizer '${i}' does not exist`);if(["options","rules","lexer"].includes(i))continue;let s=i,a=n.tokenizer[s],l=o[s];o[s]=(...c)=>{let d=a.apply(o,c);return d===!1&&(d=l.apply(o,c)),d}}r.tokenizer=o}if(n.hooks){let o=this.defaults.hooks||new Pr;for(let i in n.hooks){if(!(i in o))throw new Error(`hook '${i}' does not exist`);if(["options","block"].includes(i))continue;let s=i,a=n.hooks[s],l=o[s];Pr.passThroughHooks.has(i)?o[s]=c=>{if(this.defaults.async&&Pr.passThroughHooksRespectAsync.has(i))return(async()=>{let m=await a.call(o,c);return l.call(o,m)})();let d=a.call(o,c);return l.call(o,d)}:o[s]=(...c)=>{if(this.defaults.async)return(async()=>{let m=await a.apply(o,c);return m===!1&&(m=await l.apply(o,c)),m})();let d=a.apply(o,c);return d===!1&&(d=l.apply(o,c)),d}}r.hooks=o}if(n.walkTokens){let o=this.defaults.walkTokens,i=n.walkTokens;r.walkTokens=function(s){let a=[];return a.push(i.call(this,s)),o&&(a=a.concat(o.call(this,s))),a}}this.defaults={...this.defaults,...r}}),this}setOptions(t){return this.defaults={...this.defaults,...t},this}lexer(t,e){return ot.lex(t,e??this.defaults)}parser(t,e){return it.parse(t,e??this.defaults)}parseMarkdown(t){return(e,n)=>{let r={...n},o={...this.defaults,...r},i=this.onError(!!o.silent,!!o.async);if(this.defaults.async===!0&&r.async===!1)return i(new Error("marked(): The async option was set to true by an extension. Remove async: false from the parse options object to return a Promise."));if(typeof e>"u"||e===null)return i(new Error("marked(): input parameter is undefined or null"));if(typeof e!="string")return i(new Error("marked(): input parameter is of type "+Object.prototype.toString.call(e)+", string expected"));if(o.hooks&&(o.hooks.options=o,o.hooks.block=t),o.async)return(async()=>{let s=o.hooks?await o.hooks.preprocess(e):e,a=await(o.hooks?await o.hooks.provideLexer(t):t?ot.lex:ot.lexInline)(s,o),l=o.hooks?await o.hooks.processAllTokens(a):a;o.walkTokens&&await Promise.all(this.walkTokens(l,o.walkTokens));let c=await(o.hooks?await o.hooks.provideParser(t):t?it.parse:it.parseInline)(l,o);return o.hooks?await o.hooks.postprocess(c):c})().catch(i);try{o.hooks&&(e=o.hooks.preprocess(e));let s=(o.hooks?o.hooks.provideLexer(t):t?ot.lex:ot.lexInline)(e,o);o.hooks&&(s=o.hooks.processAllTokens(s)),o.walkTokens&&this.walkTokens(s,o.walkTokens);let a=(o.hooks?o.hooks.provideParser(t):t?it.parse:it.parseInline)(s,o);return o.hooks&&(a=o.hooks.postprocess(a)),a}catch(s){return i(s)}}}onError(t,e){return n=>{if(n.message+=`
Please report this to https://github.com/markedjs/marked.`,t){let r="<p>An error occurred:</p><pre>"+bt(n.message+"",!0)+"</pre>";return e?Promise.resolve(r):r}if(e)return Promise.reject(n);throw n}}},vn=new Sl;function oe(t,e){return vn.parse(t,e)}oe.options=oe.setOptions=function(t){return vn.setOptions(t),oe.defaults=vn.defaults,dp(oe.defaults),oe};oe.getDefaults=bl;oe.defaults=yn;function hx(...t){return vn.use(...t),oe.defaults=vn.defaults,dp(oe.defaults),oe}oe.use=hx;oe.walkTokens=function(t,e){return vn.walkTokens(t,e)};oe.parseInline=vn.parseInline;oe.Parser=it;oe.parser=it.parse;oe.Renderer=Zi;oe.TextRenderer=_l;oe.Lexer=ot;oe.lexer=ot.lex;oe.Tokenizer=Ki;oe.Hooks=Pr;oe.parse=oe;var PA=oe.options,DA=oe.setOptions,UA=oe.walkTokens,HA=oe.parseInline;var FA=it.parse,GA=ot.lex;var fx=new Sl({gfm:!0,breaks:!0}),Ep=["a","p","br","strong","em","b","i","u","s","del","code","pre","ul","ol","li","blockquote","h1","h2","h3","h4","h5","h6","hr","span","table","thead","tbody","tr","th","td"],wp=["href","title","class","target","rel"],Tp={ALLOWED_TAGS:Ep,ALLOWED_ATTR:wp,ALLOW_DATA_ATTR:!1,ALLOW_ARIA_ATTR:!1},mx={...Tp,ALLOWED_TAGS:[...Ep,"img"],ALLOWED_ATTR:[...wp,"src","alt","width","height"]},gx=/^language-[A-Za-z0-9_+#.-]+$/,bx=new Set(["CODE","PRE"]);function vx(t){t.nodeName==="A"&&t.hasAttribute("href")?(t.setAttribute("target","_blank"),t.setAttribute("rel","noopener noreferrer")):(t.removeAttribute("target"),t.removeAttribute("rel"));let e=t.getAttribute("class");if(e===null)return;let n=bx.has(t.nodeName)?e.split(/\s+/).filter(r=>gx.test(r)):[];if(n.length===0){t.removeAttribute("class");return}t.setAttribute("class",n.join(" "))}var Ji=null;function yx(){return Ji===null&&(Ji=rp(),Ji.addHook("afterSanitizeAttributes",vx)),Ji}function es(t,e){let n=e?.allowImages===!0,r=fx.parse(t,{async:!1});return yx().sanitize(r,n?mx:Tp).trim()}function _p(t){let e=document.createElement("div");e.className="resize-handle",e.setAttribute("part","resize-handle"),e.setAttribute("role","separator"),e.setAttribute("aria-label",t.label),e.tabIndex=0;let n=(i,s,a,l,c)=>{let d=s.x==="right"?a.right-l:l-a.left,m={width:Math.max(280,d)};if(i!=="both")return m;let x=s.y==="bottom"?a.bottom-c:c-a.top;return{...m,height:Math.max(240,x)}};e.addEventListener("pointerdown",i=>{let s=t.axis();if(s==="none")return;let a=t.anchor(),l=t.rect(),c=m=>{t.apply(n(s,a,l,m.clientX,m.clientY))},d=m=>{window.removeEventListener("pointermove",c),window.removeEventListener("pointerup",d),e.removeAttribute("data-dragging"),t.commit(n(s,a,l,m.clientX,m.clientY))};e.setAttribute("data-dragging","true"),window.addEventListener("pointermove",c),window.addEventListener("pointerup",d),i.preventDefault()});let r=null,o=()=>{if(r===null)return;let i=r;r=null,t.commit(i)};return e.addEventListener("keydown",i=>{let s=t.axis();if(s==="none")return;let a=t.anchor(),l=t.rect(),c=i.shiftKey?64:16,d=a.x==="right"?-1:1,m=l.right-l.left,x=l.bottom-l.top,f=null;if(i.key==="ArrowLeft")f={width:Math.max(280,m-c*d)};else if(i.key==="ArrowRight")f={width:Math.max(280,m+c*d)};else if(s==="both"&&(i.key==="ArrowUp"||i.key==="ArrowDown")){let p=i.key===(a.y==="bottom"?"ArrowUp":"ArrowDown");f={height:Math.max(240,x+(p?c:-c))}}f!==null&&(i.preventDefault(),t.apply(f),r=f)}),e.addEventListener("keyup",o),e.addEventListener("blur",o),e}function Sp(t,e){for(let n of Array.from(t.childNodes))n.nodeType===Node.TEXT_NODE?e.push({node:n,parent:t}):Sp(n,e)}function Ap(t){let e=[];Sp(t,e);let n=0;for(let{node:r,parent:o}of e){let i=document.createDocumentFragment();for(let s of r.data.split(/(\s+)/)){if(s==="")continue;if(/\s/.test(s)){i.appendChild(document.createTextNode(s));continue}let a=document.createElement("span");a.className="word",a.style.setProperty("--ag-ui-word-index",String(n)),a.textContent=s,i.appendChild(a),n+=1}o.replaceChild(i,r)}}function Al(t,e,n){let r=document.createElement("div");r.className=`run-notice run-notice--${n}`,r.setAttribute("part",`run-notice run-notice-${n}`),r.setAttribute("role","status");let o=document.createElement("span");o.className="run-notice-icon",o.setAttribute("part","run-notice-icon"),o.textContent=t,o.setAttribute("aria-hidden","true");let i=document.createElement("span");return i.className="run-notice-text",i.setAttribute("part","run-notice-text"),i.textContent=e,r.append(o,i),r}var ts=class{chips;palette;#t;#n=[];#e=!1;#s=!1;#r=[];#i=0;constructor(e){this.#t=e,this.chips=document.createElement("div"),this.chips.className="skill-chips",this.chips.setAttribute("part","skill-chips"),this.chips.hidden=!0,this.palette=document.createElement("div"),this.palette.className="skill-palette",this.palette.setAttribute("part","skill-palette"),this.palette.setAttribute("role","listbox"),this.palette.hidden=!0}setSkills(e){this.#n=e,this.#d()}enableChips(e){this.#e=e,this.#d()}enableSlash(e){this.#s=e}isOpen(){return!this.palette.hidden}onInput(e){this.#s&&e.startsWith("/")?this.#o(e.slice(1)):this.close()}onKeydown(e){return this.isOpen()?e.key==="ArrowDown"?(this.#l(1),!0):e.key==="ArrowUp"?(this.#l(-1),!0):e.key==="Escape"?(this.close(),!0):e.key==="Enter"?(this.#r.slice(this.#i,this.#i+1).forEach(n=>{this.#u(n)}),!0):!1:!1}close(){this.palette.hidden=!0,this.palette.replaceChildren()}#o(e){let n=e.trim().toLowerCase(),r=this.#n.filter(o=>o.name.toLowerCase().includes(n)||o.title.toLowerCase().includes(n));if(r.length===0){this.close();return}this.#r=r,this.#i=0,this.#c(),this.palette.hidden=!1}#l(e){let n=this.#r.length;this.#i=(this.#i+e+n)%n,this.#c()}#u(e){this.close(),this.#t(e)}#d(){this.chips.replaceChildren();let e=this.#e?this.#n.filter(n=>n.chip===!0):[];this.chips.hidden=e.length===0;for(let n of e){let r=document.createElement("button");r.type="button",r.className="skill-chip",r.setAttribute("part","skill-chip"),r.textContent=n.title,r.title=`/${n.name}`,r.addEventListener("click",()=>this.#u(n)),this.chips.appendChild(r)}}#c(){this.palette.replaceChildren(),this.#r.forEach((e,n)=>{let r=document.createElement("button");r.type="button",r.className="skill-item",r.setAttribute("part","skill-item"),r.setAttribute("role","option"),r.setAttribute("aria-selected",n===this.#i?"true":"false");let o=document.createElement("span");o.className="skill-item-title",o.setAttribute("part","skill-item-title");let i=document.createElement("code");if(i.className="skill-item-token",i.setAttribute("part","skill-item-token"),i.textContent=`/${e.name}`,o.append(i,document.createTextNode(` ${e.title}`)),r.appendChild(o),e.description!==void 0){let s=document.createElement("span");s.className="skill-item-desc",s.setAttribute("part","skill-item-desc"),s.textContent=e.description,r.appendChild(s)}r.addEventListener("click",()=>this.#u(e)),this.palette.appendChild(r)})}};function kp({viewport:t,onMissedContent:e}){let n=!0,r=!1,o=()=>t.scrollHeight-t.scrollTop-t.clientHeight<=4,i=d=>{d!==r&&(r=d,e(r))},s=()=>{t.scrollTop=t.scrollHeight},a=()=>{n=o(),n&&i(!1)},l=()=>{if(n){s();return}i(!0)};t.addEventListener("scroll",a,{passive:!0});let c=new ResizeObserver(()=>{n&&s()});return c.observe(t),{follow:l,jump:()=>{n=!0,i(!1),s()},following:()=>n,dispose:()=>{t.removeEventListener("scroll",a),c.disconnect()}}}var Ip=`
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

:host([collapsed]:is([placement="embedded"], [placement="page"])) .messages-wrap,
:host([collapsed]:is([placement="embedded"], [placement="page"])) .messages,
:host([collapsed]:is([placement="embedded"], [placement="page"])) .input-row,
:host([collapsed]:is([placement="embedded"], [placement="page"])) .skill-chips,
:host([collapsed]:is([placement="embedded"], [placement="page"])) .skill-palette,
:host([collapsed]:is([placement="embedded"], [placement="page"])) .skill-hint {
  display: none;
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
  content: "\u25B8";
  flex: none;
  margin-left: auto;
  color: var(--_accent);
}

.subagent-row[aria-expanded="true"]::after {
  content: "\u25BE";
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
  color: #ffffff;
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

.message-action {
  border: none;
  border-radius: 6px;
  padding: 2px 6px;
  font: inherit;
  line-height: 1.2;
  cursor: pointer;
  background: transparent;
  color: var(--_muted);
  opacity: 0.75;
}

.message-action:hover,
.message-action:focus-visible {
  opacity: 1;
  background: var(--_border);
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
`;var ns=class{element;get agent(){return this.#r}#t;#n;#e;#s=new Map;#r=null;constructor(e=se){this.element=document.createElement("div"),this.element.className="subagent",this.element.setAttribute("part","subagent"),this.#t=document.createElement("button"),this.#t.type="button",this.#t.className="subagent-row",this.#t.setAttribute("part","subagent-row"),this.#t.setAttribute("aria-expanded","false"),this.#t.disabled=!0;let n=document.createElement("span");n.className="subagent-icon",n.setAttribute("part","subagent-icon"),n.setAttribute("aria-hidden","true"),this.#n=document.createElement("span"),this.#n.className="subagent-status",this.#n.setAttribute("part","subagent-status"),this.#n.textContent=e.subAgentWorking,this.#t.append(n,this.#n),this.#e=document.createElement("div"),this.#e.className="subagent-steps",this.#e.setAttribute("part","subagent-steps"),this.#e.setAttribute("role","list"),this.#e.setAttribute("aria-label",e.subAgentSteps),this.#e.hidden=!0,this.#t.addEventListener("click",()=>{this.#l(this.#t.getAttribute("aria-expanded")!=="true")}),this.element.append(this.#t,this.#e)}report(e){this.element.setAttribute("data-phase",e.phase),e.agent!==null&&(this.#r=e.agent,this.element.setAttribute("data-agent",e.agent)),e.status!==null&&(this.#n.textContent=e.status),e.tool!==null&&this.#i(e.tool)}#i(e){let n=this.#s.get(e.toolCallId)??this.#o(e);if(e.ok===null){n.removeAttribute("data-ok");return}n.setAttribute("data-ok",String(e.ok))}#o(e){let n=document.createElement("div");n.className="subagent-step",n.setAttribute("part","subagent-step"),n.setAttribute("role","listitem"),n.setAttribute("data-tool-call-id",e.toolCallId);let r=document.createElement("span");r.className="subagent-step-icon",r.setAttribute("part","subagent-step-icon"),r.setAttribute("aria-hidden","true");let o=document.createElement("span");return o.className="subagent-step-name",o.setAttribute("part","subagent-step-name"),o.textContent=e.name,n.append(r,o),this.#e.appendChild(n),this.#s.set(e.toolCallId,n),this.#t.disabled=!1,n}#l(e){this.#e.hidden=!e,this.#t.setAttribute("aria-expanded",String(e))}};var xx=Object.values(An);function Rp(t){return typeof t!="object"||t===null||Array.isArray(t)?null:t}function Hr(t){return typeof t=="string"&&t!==""?t:null}function Ex(t){let e=Rp(t);if(e===null)return null;let n=Hr(e.toolCallId),r=Hr(e.name),o=e.ok;return n===null||r===null||o!==null&&typeof o!="boolean"?null:{toolCallId:n,name:r,ok:o}}function Cp(t){let e=Rp(t);if(e===null)return null;let n=Hr(e.delegationId),r=e.phase;return n===null||typeof r!="string"||!xx.includes(r)?null:{delegationId:n,phase:r,agent:Hr(e.agent),status:Hr(e.status),tool:Ex(e.tool)}}var wx=4,Tx=120;function Np(t){if(typeof t!="object"||t===null)return null;let e=t.prompts;if(!Array.isArray(e))return null;let n=e.filter(r=>typeof r=="string").map(r=>r.trim()).filter(r=>r!==""&&r.length<=120).slice(0,4);return n.length===0?null:n}function kl(t,e,n){let r=Np(t);if(r===null)return null;let o=document.createElement("div");o.className="suggestions",o.setAttribute("part","suggestions"),o.setAttribute("role","group"),o.setAttribute("aria-label",e.suggestions);for(let i of r){let s=document.createElement("button");s.type="button",s.className="suggestion-chip",s.setAttribute("part","suggestion-chip"),s.textContent=i,s.addEventListener("click",()=>n(i)),o.appendChild(s)}return o}var rs=class{element;#t;#n;#e;#s;#r=!1;constructor(e=se){this.#s=e,this.element=document.createElement("div"),this.element.className="thoughts",this.element.setAttribute("part","thoughts"),this.element.setAttribute("data-streaming",""),this.#e=document.createElement("button"),this.#e.type="button",this.#e.className="thoughts-toggle",this.#e.setAttribute("part","thoughts-toggle"),this.#e.setAttribute("aria-expanded","true"),this.#t=document.createElement("span"),this.#t.className="thoughts-label",this.#t.setAttribute("part","thoughts-label"),this.#t.textContent=e.thinking,this.#e.append(this.#t),this.#n=document.createElement("pre"),this.#n.className="thoughts-body",this.#n.setAttribute("part","thoughts-body"),this.#e.addEventListener("click",()=>{this.#i(!this.#r)}),this.element.append(this.#e,this.#n)}stream(e){this.#n.textContent=e}collapse(){this.#r||(this.element.removeAttribute("data-streaming"),this.#t.textContent=this.#s.thoughts,this.#i(!0))}#i(e){this.#r=e,this.#n.hidden=e,this.#e.setAttribute("aria-expanded",String(!e))}};var os=class{element;#t;#n;#e;#s;#r;#i=null;#o;#l=[];#u="";#d=null;constructor(e,n=se){this.#t=e,this.#o=n,this.element=document.createElement("div"),this.element.className="drawer",this.element.setAttribute("part","drawer"),this.element.hidden=!0;let r=document.createElement("div");r.className="drawer-backdrop",r.setAttribute("part","drawer-backdrop"),r.addEventListener("click",()=>this.close()),this.#n=document.createElement("div"),this.#n.className="drawer-panel",this.#n.setAttribute("part","drawer-panel"),this.#n.setAttribute("role","dialog"),this.#n.setAttribute("aria-modal","true"),this.#n.setAttribute("aria-label",n.chatHistory),this.#n.addEventListener("keydown",i=>this.#g(i));let o=document.createElement("div");o.className="drawer-header",o.setAttribute("part","drawer-header"),this.#e=document.createElement("span"),this.#e.className="drawer-title",this.#e.setAttribute("part","drawer-title"),this.#e.textContent=n.chats,this.#s=document.createElement("button"),this.#s.type="button",this.#s.className="drawer-new",this.#s.setAttribute("part","drawer-new"),this.#s.textContent=n.newChat,this.#s.addEventListener("click",()=>{this.close(),this.#t.onNew()}),o.append(this.#e,this.#s),this.#r=document.createElement("div"),this.#r.className="drawer-list",this.#r.setAttribute("part","drawer-list"),this.#n.append(o,this.#r),this.element.append(r,this.#n)}setRelativeTimeFormatter(e){this.#i=e}#c(e){return this.#i!==null?this.#i(e):Ir(e,void 0,this.#o)}setStrings(e){this.#o=e,this.#n.setAttribute("aria-label",e.chatHistory),this.#e.textContent=e.chats,this.#s.textContent=e.newChat,this.#f()}isOpen(){return!this.element.hidden}open(){this.isOpen()||(this.#d=this.#p(),this.element.hidden=!1,this.#s.focus())}close(){this.isOpen()&&(this.element.hidden=!0,this.#d?.focus(),this.#d=null)}toggle(){this.isOpen()?this.close():this.open()}#p(){return this.element.getRootNode().activeElement}#g(e){if(e.key==="Escape"){e.preventDefault(),this.close();return}if(e.key!=="Tab")return;let n=Array.from(this.#n.querySelectorAll("button, input, [tabindex]")).filter(s=>!s.hidden),r=n[0],o=n[n.length-1],i=this.#p();e.shiftKey&&i===r?(e.preventDefault(),o?.focus()):!e.shiftKey&&i===o&&(e.preventDefault(),r?.focus())}setThreads(e,n){this.#l=e,this.#u=n,this.#f()}#f(){if(this.#r.replaceChildren(),this.#l.length===0){let e=document.createElement("div");e.className="drawer-empty",e.setAttribute("part","drawer-empty"),e.textContent=this.#o.noConversations,this.#r.appendChild(e);return}for(let e of this.#l)this.#r.appendChild(this.#y(e))}#y(e){let n=document.createElement("div");n.className="drawer-row",n.setAttribute("part","drawer-row"),e.threadId===this.#u&&n.classList.add("drawer-row--active");let r=document.createElement("button");r.type="button",r.className="drawer-row-select",r.setAttribute("part","drawer-row-select");let o=document.createElement("span");o.className="drawer-row-title",o.setAttribute("part","drawer-row-title"),o.textContent=e.title;let i=document.createElement("span");i.className="drawer-row-time",i.setAttribute("part","drawer-row-time"),i.textContent=this.#c(e.updatedAt);let s=document.createElement("span");s.className="drawer-row-preview",s.setAttribute("part","drawer-row-preview"),s.textContent=e.preview,r.append(o,i,s),r.addEventListener("click",()=>{this.close(),this.#t.onSelect(e.threadId)});let a=document.createElement("button");a.type="button",a.className="drawer-row-rename",a.setAttribute("part","drawer-row-rename"),a.title=this.#o.rename,a.setAttribute("aria-label",this.#o.renameConversation),a.textContent="\u270E",a.addEventListener("click",()=>this.#D(n,e));let l=document.createElement("button");l.type="button",l.className="drawer-row-delete",l.setAttribute("part","drawer-row-delete"),l.title=this.#o.delete,l.setAttribute("aria-label",this.#o.deleteConversation),l.textContent="\u{1F5D1}",l.addEventListener("click",()=>this.#S(n,e));let c=document.createElement("div");return c.className="drawer-row-actions",c.setAttribute("part","drawer-row-actions"),c.append(a,l),n.append(r,c),n}#D(e,n){let r=document.createElement("input");r.type="text",r.className="drawer-rename-input",r.setAttribute("part","drawer-rename-input"),r.value=n.title;let o=!1,i=()=>{if(o)return;o=!0;let a=r.value.trim();a===""||a===n.title?this.#f():this.#t.onRename(n.threadId,a)},s=()=>{o||(o=!0,this.#f())};r.addEventListener("keydown",a=>{a.key==="Enter"?(a.preventDefault(),i()):a.key==="Escape"&&(a.preventDefault(),a.stopPropagation(),s())}),r.addEventListener("blur",()=>i()),e.replaceChildren(r),r.focus(),r.select()}#S(e,n){let r=document.createElement("div");r.className="drawer-confirm",r.setAttribute("part","drawer-confirm");let o=document.createElement("span");o.className="drawer-confirm-label",o.setAttribute("part","drawer-confirm-label"),o.textContent=this.#o.deletePrompt;let i=document.createElement("button");i.type="button",i.className="drawer-confirm-yes",i.setAttribute("part","drawer-confirm-yes"),i.textContent=this.#o.delete,i.addEventListener("click",()=>this.#t.onDelete(n.threadId));let s=document.createElement("button");s.type="button",s.className="drawer-confirm-no",s.setAttribute("part","drawer-confirm-no"),s.textContent=this.#o.cancel,s.addEventListener("click",()=>this.#f()),r.append(o,i,s),e.replaceChildren(r)}};function Il(t){return{[ae.PENDING]:t.toolRunning,[ae.DEFERRED]:t.toolDeferred,[ae.DONE]:t.toolDone,[ae.ERROR]:t.toolError,[ae.DECLINED]:t.toolDeclined}}function _x(t){return{[ae.DONE]:t.resultLabel,[ae.ERROR]:t.errorLabel,[ae.DECLINED]:t.declinedLabel}}function Sx(t){try{return JSON.stringify(JSON.parse(t),null,2)}catch{return t}}var Fr=class{element;approvalSlot;subagentSlot;#t;#n;#e;#s;#r;#i;#o;args;#l;#u;#d=!1;constructor(e,n,r,o=se,i={}){this.#o=o,this.args=n,this.#l=e,this.#u=i.formatPayload??null,this.element=document.createElement("div"),this.element.className="tool-call",this.element.setAttribute("part","tool-card"),this.element.setAttribute("data-tool-name",e),this.element.setAttribute("data-status",ae.PENDING),this.element.setAttribute("data-expanded","false");let s=document.createElement("div");s.className="tool-call-head",s.setAttribute("part","tool-card-head");let a=document.createElement("span");a.className="tool-call-icon",a.setAttribute("part","tool-card-icon"),a.setAttribute("aria-hidden","true");let l=document.createElement("span");l.className="tool-call-name",l.setAttribute("part","tool-card-name"),l.textContent=r??e,this.#t=document.createElement("span"),this.#t.className="tool-call-status",this.#t.setAttribute("part","tool-card-status"),this.#t.textContent=Il(o)[ae.PENDING],this.#n=document.createElement("span"),this.#n.className="tool-call-decision",this.#n.setAttribute("part","tool-card-decision"),this.#n.hidden=!0,s.append(a,l,this.#t,this.#n);let c=this.#p("args",o.argumentsLabel);this.#c(c.body,{kind:"arguments",toolName:e,args:n},JSON.stringify(n,null,2)),c.root.hidden=Object.keys(n).length===0;let d=this.#p("result",o.resultLabel);this.#s=d.root,this.#r=d.label,this.#i=d.body,d.root.hidden=!0,this.#e=document.createElement("button"),this.#e.type="button",this.#e.className="tool-call-toggle",this.#e.setAttribute("part","tool-card-toggle"),this.#e.setAttribute("aria-expanded","false"),this.#e.textContent=o.details,this.#e.addEventListener("click",()=>this.#f(!this.#g()));let m=document.createElement("div");m.className="tool-call-body",m.setAttribute("part","tool-card-body"),m.append(c.root,d.root),this.approvalSlot=document.createElement("div"),this.approvalSlot.className="tool-call-approval",this.approvalSlot.setAttribute("part","tool-card-approval"),this.subagentSlot=document.createElement("div"),this.subagentSlot.className="tool-call-subagent",this.subagentSlot.setAttribute("part","tool-card-subagent"),this.element.append(s,this.subagentSlot,this.#e,m,this.approvalSlot)}mark(e){this.#d||(this.element.setAttribute("data-status",e),this.#t.textContent=Il(this.#o)[e])}recordDecision(e){this.element.setAttribute("data-decision",e),this.#n.textContent=e==="approved"?this.#o.decisionApproved:this.#o.decisionDeclined,this.#n.hidden=!1}get settled(){return this.#d}settle(e,n){this.#d||(this.#d=!0,this.element.setAttribute("data-status",e),this.#t.textContent=Il(this.#o)[e],this.#r.textContent=_x(this.#o)[e],this.#c(this.#i,{kind:"result",toolName:this.#l,status:e,text:n},Sx(n)),this.#s.hidden=!1)}#c(e,n,r){let o=this.#u===null?null:this.#u(n);if(o===null){e.textContent=r;return}if(e.setAttribute("data-formatted","true"),typeof o=="string"){e.textContent=o;return}e.replaceChildren(o)}#p(e,n){let r=document.createElement("div");r.className=`tool-call-section tool-call-section--${e}`,r.setAttribute("part",`tool-card-section tool-card-${e}-section`);let o=document.createElement("span");o.className="tool-call-section-label",o.setAttribute("part",`tool-card-section-label tool-card-${e}-label`),o.textContent=n;let i=document.createElement("pre");return i.className=`tool-call-${e}`,i.setAttribute("part",`tool-card-${e}`),r.append(o,i),{root:r,label:o,body:i}}#g(){return this.element.getAttribute("data-expanded")==="true"}#f(e){this.element.setAttribute("data-expanded",String(e)),this.#e.setAttribute("aria-expanded",String(e))}};var Op=12e4,is=class{element;#t;#n;#e;#s="idle";#r=null;#i=null;#o=[];#l=null;#u=!1;#d=!1;constructor(e){this.#t=e.transcribe,this.#n=e.onText,this.#e=e.strings??se,this.element=document.createElement("button"),this.element.type="button",this.element.className="voice-btn",this.element.setAttribute("part","voice-button");let n=document.createElement("slot");n.name="icon-voice",n.innerHTML=hc,this.element.append(n),this.#S("idle"),this.element.addEventListener("click",()=>{this.toggle()})}async toggle(){if(this.#s==="recording"){this.#p();return}this.#s!=="transcribing"&&await this.#c()}async#c(){let e;try{e=await navigator.mediaDevices.getUserMedia({audio:!0})}catch{this.#D(this.#e.transcriptionFailed);return}this.#i=e,this.#o=[],this.#u=!1;let n=new MediaRecorder(e);n.addEventListener("dataavailable",r=>{this.#o.push(r.data)}),n.addEventListener("stop",()=>{this.#f(n.mimeType)}),this.#r=n,n.start(),this.#l=setTimeout(()=>{this.#u=!0,this.#p()},Op),this.#S("recording")}#p(){this.#g(),this.#r?.stop()}#g(){this.#l!==null&&(clearTimeout(this.#l),this.#l=null)}dispose(){this.#d=!0,this.#g(),this.#r!==null&&this.#r.state!=="inactive"&&this.#r.stop(),this.#r=null,this.#y()}async#f(e){if(this.#d)return;this.#y(),this.#S("transcribing");let n=new Blob(this.#o,{type:e||"audio/webm"});try{let r=await this.#t(n);this.#S("idle"),this.#u&&(this.element.title=this.#e.recordingLimit.replace("{n}",String(Op/6e4))),r!==""&&this.#n(r)}catch(r){this.#D(r instanceof Error?r.message:this.#e.transcriptionFailed)}finally{this.#r=null}}#y(){for(let e of this.#i?.getTracks()??[])e.stop();this.#i=null}#D(e){this.#y(),this.#r=null,this.#S("idle"),this.element.title=e}#S(e){this.#s=e,this.element.dataset.state=e;let n=this.#Y(e);this.element.title=n,this.element.setAttribute("aria-label",n),this.element.setAttribute("aria-pressed",String(e==="recording")),this.element.disabled=e==="transcribing"}#Y(e){return e==="recording"?this.#e.stopRecording:e==="transcribing"?this.#e.transcribing:this.#e.recordVoice}};var ss=class extends Error{constructor(e){super(e),this.name="ConnectionLostError"}},tr=class{#t;#n;#e;#s;#r;#i;#o;#l=new Set;#u;#d;#c=!1;constructor(e){this.#t=e.agent,this.#n=e.handlers,this.#e=e.getTools??(()=>[]),this.#s=e.getContext??(()=>[]),this.#r=e.executeTool??null,this.#i=e.resolveInterrupts??null,this.#o=e.onPersist??(()=>{}),this.#u=e.connectionLostMessage??"Connection lost";let n=e.maxToolRounds??kn;this.#d=n>=1?Math.floor(n):kn;let r=e.onStateChanged;r!==void 0&&this.#t.subscribe({onStateChanged:({state:o})=>{r(o)}})}get state(){return this.#t.state}setState(e){this.#t.setState({...e})}get running(){return this.#t.isRunning}get messages(){return this.#t.messages}async send(e,n=[]){let r={id:Ie(),role:"user",content:e};n.length>0&&(r.attachments=n),this.#t.addMessage(r),this.#o(this.#t.messages),await this.#p()}truncateToLastUser(){let e=[...this.#t.messages],n=-1;for(let[o,i]of e.entries())i.role==="user"&&(n=o);if(n===-1)return null;let r=e.slice(0,n+1);return this.#t.setMessages(r),this.#o(this.#t.messages),r}async resume(){await this.#p()}addToolResult(e,n){this.#t.addMessage({id:Ie(),role:"tool",content:n,toolCallId:e}),this.#o(this.#t.messages)}cancel(){this.#c=!0,this.#t.abortRun()}async#p(){this.#c=!1;try{await this.#f(),this.#c&&this.#g()}catch(e){this.#c||Ax(e)?this.#g():this.#n.onError(e instanceof Error?e.message:String(e))}finally{this.#n.onSettled()}}#g(){this.#o(this.#t.messages),this.#n.onCancelled()}async#f(){let e;for(let n=0;n<this.#d;n+=1){if(this.#c)return;let r=[],o={terminal:!1,errored:!1,interrupts:[]},i={tools:this.#e(),context:this.#s()};if(e!==void 0&&(i.resume=e),await this.#t.runAgent(i,this.#y(r,o)),e=void 0,this.#o(this.#t.messages),this.#c)return;if(!o.terminal)throw new ss(this.#u);if(o.errored)return;if(o.interrupts.length>0){if(this.#i===null)return;let a=await this.#i(o.interrupts);if(this.#c)return;e=Td(o.interrupts,a);continue}if(this.#r===null||r.length===0)return;let s=!1;for(let a of r){let l=await this.#r(a);if(l!==null){if(l.halt===!0)return;this.#t.addMessage({id:Ie(),role:"tool",content:l.content,toolCallId:a.id}),this.#o(this.#t.messages),s=!0}}if(!s)return}}#y(e,n){let r=this.#n,o=this.#l,i=()=>this.#c,s=new Set;return{onRunInitialized(){r.onRunStart()},onTextMessageStartEvent({event:a}){o.has(a.messageId)&&console.warn(`<ag-ui-chat>: the server reused message id "${a.messageId}", which was already closed. Its content will be appended to that earlier message rather than starting a new one, and the merged result is what gets persisted. Issue a fresh id per message.`)},onTextMessageContentEvent({textMessageBuffer:a}){r.onTextDelta(a)},onTextMessageEndEvent({event:a,textMessageBuffer:l}){o.add(a.messageId),r.onTextEnd(l)},onToolCallEndEvent({event:a,toolCallName:l,toolCallArgs:c}){let d={id:a.toolCallId,name:l,args:c};e.push(d),r.onToolCall(d)},onToolCallResultEvent({event:a}){r.onToolResult(a.toolCallId,a.content)},onActivitySnapshotEvent({event:a,messages:l}){if(l.some(d=>d.id===a.messageId&&d.role==="activity")){r.onActivityChanged(a.messageId,a.activityType,a.content);return}r.onActivity(a.activityType,a.content,a.messageId)},onActivityDeltaEvent({event:a}){s.add(a.messageId)},onCustomEvent({event:a}){r.onCustomEvent(a.name,a.value)},onSubagentStartedEvent({event:a}){r.onSubAgentStarted(a.subagentRunId,a.name,a.parentToolCallId??null)},onSubagentFinishedEvent({event:a}){r.onSubAgentFinished(a.subagentRunId)},onSubagentErrorEvent({event:a}){r.onSubAgentError(a.subagentRunId,a.message)},onMessagesSnapshotEvent({event:a}){r.onMessagesSnapshot(a.messages)},onMessagesChanged({messages:a}){if(s.size!==0){for(let l of s){let c=a.find(d=>d.id===l);c!==void 0&&c.role==="activity"&&r.onActivityChanged(l,c.activityType,c.content)}s.clear()}},onReasoningStartEvent(){r.onReasoningStart()},onReasoningMessageContentEvent({reasoningMessageBuffer:a}){r.onReasoningDelta(a)},onReasoningMessageEndEvent({reasoningMessageBuffer:a}){r.onReasoningDelta(a)},onReasoningEndEvent(){r.onReasoningEnd()},onRunFinishedEvent(a){n.terminal=!0,a.outcome==="interrupt"&&(n.interrupts=a.interrupts)},onRunErrorEvent({event:a}){n.terminal=!0,n.errored=!0,!i()&&r.onError(a.message)},onRunFinalized(){n.terminal=!0,r.onRunEnd()}}}};function Ax(t){return t instanceof Error?t.name==="AbortError"||t instanceof TypeError&&/abort/i.test(t.message):!1}function Rl(t){let e=t.attachments;return Array.isArray(e)?e.filter(kx):[]}function kx(t){if(typeof t!="object"||t===null)return!1;let e=t;return typeof e.id=="string"&&typeof e.name=="string"&&typeof e.mime=="string"&&typeof e.size=="number"&&(e.url===void 0||typeof e.url=="string")}var Mp="ag-ui-chat",nr="thread",Cl="threads",Gr="messages:",ls="checkpoint:",zr="minted:",Ix=60,Rx=100,Cx="New conversation",Lp=!1;function st(t,e){try{sessionStorage.setItem(t,e)}catch{if(Lp)return;Lp=!0,console.warn("<ag-ui-chat>: the browser refused a sessionStorage write \u2014 the quota is full, or storage is disabled for this context. The conversation continues, but it will not survive a page reload. Deleting a long conversation from the history drawer frees the quota.")}}function as(t){return t===""?Mp:`${Mp}@${t}`}var Qe=class t{#t;constructor(e=""){this.#t=as(e),e!==""&&t.adopt("",e)}static adopt(e,n){let r=`${as(e)}:`,o=`${as(n)}:`;for(let[i,s]of Pp(r)){let a=sessionStorage.getItem(i),l=o+s;a!==null&&sessionStorage.getItem(l)===null&&st(l,a),sessionStorage.removeItem(i)}}static purge(e){for(let[n]of Pp(`${as(e)}:`))sessionStorage.removeItem(n)}threadId(){return sessionStorage.getItem(this.#r(nr))??this.newThread()}newThread(){let e=Ie();return st(this.#r(nr),e),st(this.#r(zr+e),"1"),e}isUnsent(e){return sessionStorage.getItem(this.#r(zr+e))!==null&&sessionStorage.getItem(this.#r(Gr+e))===null}loadMessages(e){return Promise.resolve(this.#i(this.#r(Gr+e)))}saveMessages(e,n){st(this.#r(Gr+e),JSON.stringify(n)),sessionStorage.removeItem(this.#r(zr+e)),this.#n(e,n)}loadCheckpoint(e){return this.#i(this.#r(ls+e))}saveCheckpoint(e,n){let r=this.#r(ls+e);if(n===null){sessionStorage.removeItem(r);return}st(r,JSON.stringify(n))}clear(e){sessionStorage.removeItem(this.#r(Gr+e)),sessionStorage.removeItem(this.#r(ls+e)),sessionStorage.removeItem(this.#r(zr+e)),this.#s(this.#e().filter(n=>n.threadId!==e)),sessionStorage.getItem(this.#r(nr))===e&&sessionStorage.removeItem(this.#r(nr))}listThreads(){let e=this.#e().sort((n,r)=>r.updatedAt-n.updatedAt).map(({threadId:n,title:r,updatedAt:o,preview:i})=>({threadId:n,title:r,updatedAt:o,preview:i}));return Promise.resolve(e)}setActiveThread(e){st(this.#r(nr),e)}renameThread(e,n){let r=this.#e(),o=r.find(i=>i.threadId===e);o!==void 0&&(o.title=n,o.titleCustom=!0,this.#s(r))}#n(e,n){let r=this.#e(),o=r.find(a=>a.threadId===e),i=Ox(n),s=Date.now();o===void 0?r.push({threadId:e,title:Dp(n),titleCustom:!1,preview:i,updatedAt:s}):(o.preview=i,o.updatedAt=s,o.titleCustom||(o.title=Dp(n))),this.#s(r)}#e(){return this.#i(this.#r(Cl))??[]}#s(e){let n=this.#r(Cl);if(e.length===0){sessionStorage.removeItem(n);return}st(n,JSON.stringify(e))}#r(e){return`${this.#t}:${e}`}#i(e){let n=sessionStorage.getItem(e);if(n===null)return null;try{return JSON.parse(n)}catch{return null}}};function Pp(t){let e=[];for(let n=0;n<sessionStorage.length;n+=1){let r=sessionStorage.key(n);if(r===null||!r.startsWith(t))continue;let o=r.slice(t.length);Nx(o)&&e.push([r,o])}return e}function Nx(t){return t===nr||t===Cl||t.startsWith(Gr)||t.startsWith(ls)||t.startsWith(zr)}function Dp(t){for(let e of t)if(e.role==="user"){let n=Up(e.content);if(n!=="")return Hp(n,Ix)}return Cx}function Ox(t){for(let e of[...t].reverse()){let n=Up(e.content);if(n!=="")return Hp(n,Rx)}return""}function Up(t){return typeof t=="string"?t.replace(/\s+/g," ").trim():""}function Hp(t,e){return t.length<=e?t:`${t.slice(0,e-1).trimEnd()}\u2026`}function Je(t,e){return e===void 0?t:{...t,credentials:e}}function cs(t){if(t.newThread!==void 0)return t.newThread();let e=Ie();return t.setActiveThread(e),e}function us(t,e,n,r){if(e.length===0)return;let o=new URL(String(t),location.href).origin;o===location.origin||n.includes(o)||r.has(o)||(r.add(o),console.warn(`<ag-ui-chat>: sending host credentials (${e.join(", ")}) to ${o}, which is not this page's origin (${location.origin}). Those headers are the page's own authentication, and whichever server answers the browser's preflight receives them \u2014 so a URL attribute built from a query parameter or from tenant-authored configuration is a channel for the token to leave on. If this destination is deliberate, name it in \`trustedOrigins\` to confirm it and silence this notice. Reported once per origin.`))}function Nl(t){let e=t.headers??{},n=new Set;return new _d({url:t.endpoint,headers:e,initialState:{...t.initialState??{}},fetch:(r,o)=>{let i=t.getHeaders?.(),s=[...new Set([...Object.keys(e),...Object.keys(i??{})])].sort();if(us(r,s,t.trustedOrigins??[],n),i===void 0)return fetch(r,Je(o,t.credentials));let a=new Headers(o?.headers);for(let[l,c]of Object.entries(i))a.set(l,c);return fetch(r,Je({...o,headers:a},t.credentials))},...t.threadId!==void 0?{threadId:t.threadId}:{},...t.initialMessages!==void 0?{initialMessages:[...t.initialMessages]}:{}})}var $r=class{#t;#n;#e;#s;#r;#i=new Set;#o=new Map;constructor(e,n=()=>({}),r=new Qe,o=()=>{},i=!0){this.#t=e.endsWith("/")?e:`${e}/`,this.#n=n,this.#e=r,this.#s=o,this.#r=i}threadId(){return this.#e.threadId()}setActiveThread(e){this.#e.setActiveThread(e)}newThread(){return cs(this.#e)}isUnsent(e){return this.#e.isUnsent?.(e)===!0}saveMessages(e,n){this.#e.saveMessages(e,this.#r?n:[])}loadCheckpoint(e){return this.#e.loadCheckpoint(e)}saveCheckpoint(e,n){this.#e.saveCheckpoint(e,n)}renameThread(e,n){this.#e.renameThread(e,n),this.#o.set(e,n),this.#p(e,"PATCH",{title:n})}clear(e){this.#e.clear(e),this.#i.add(e),this.#p(e,"DELETE")}async listThreads(){let e=await this.#l();return e===null?this.#e.listThreads():e.filter(n=>!this.#i.has(n.thread_id)).map(n=>this.#d(n))}async loadMessages(e){if(this.#e.isUnsent?.(e)===!0)return null;let n=await this.#c(`${this.#t}${encodeURIComponent(e)}/`);if(n===null||!n.ok)return this.#e.loadMessages(e);let r=await this.#u(n);return r===null?this.#e.loadMessages(e):r.messages??null}async#l(){let e=await this.#c(this.#t);if(e===null||!e.ok)return null;let n=await this.#u(e);return n===null?null:n.threads??[]}async#u(e){try{return await e.json()}catch{return null}}#d(e){return{threadId:e.thread_id,title:this.#o.get(e.thread_id)??e.title,updatedAt:e.updated_at===null?Number.NaN:Date.parse(e.updated_at),preview:e.preview}}async#c(e){try{return await fetch(e,Je({headers:this.#n()},this.#s()))}catch{return null}}async#p(e,n,r){let o=this.#n();try{await fetch(`${this.#t}${encodeURIComponent(e)}/`,Je({method:n,headers:r===void 0?o:{...o,"content-type":"application/json"},body:r===void 0?null:JSON.stringify(r)},this.#s()))}catch{}}};var Br=class{#t;#n;#e;constructor(e,n=()=>({}),r=()=>{}){this.#t=e.endsWith("/")?e:`${e}/`,this.#n=n,this.#e=r}async list(){try{let e=await fetch(this.#t,Je({method:"GET",headers:{Accept:"application/json",...this.#n()}},this.#e()));return e.ok?(await e.json()).runs??[]:[]}catch{return[]}}async continuable(){return(await this.list()).filter(e=>e.continuable)}resumeUrl(e){return this.#s("resume",e)}forkUrl(e){return this.#s("fork",e)}#s(e,n){return`${this.#t.slice(0,-5)}${e}/${encodeURIComponent(n)}/`}};async function Ol(t,e){let n=new FormData;n.append("audio",t,"recording.webm");let r=await fetch(e.url,Je({method:"POST",headers:{...e.headers??{}},body:n},e.credentials));if(!r.ok)throw new Error(await Mx(r));let o=await r.json();if(typeof o=="object"&&o!==null&&typeof o.text=="string")return o.text;throw new Error("transcription returned an unreadable response")}async function Mx(t){try{let e=await t.json();if(typeof e.error=="string")return e.error}catch{}return`transcription failed (${t.status})`}function Ml(t,e){return new Promise((n,r)=>{let o=new FormData;o.append("file",t);let i=new XMLHttpRequest;i.open("POST",e.url),i.withCredentials=e.credentials==="include";for(let[l,c]of Object.entries(e.headers??{}))i.setRequestHeader(l,c);let s=e.onProgress;s!==void 0&&i.upload.addEventListener("progress",l=>{l.lengthComputable&&s(l.total===0?0:l.loaded/l.total)}),i.addEventListener("load",()=>{if(i.status>=200&&i.status<300)try{n(Lx(JSON.parse(i.responseText)))}catch{r(new Error("upload returned an unreadable response"))}else r(new Error(Px(i)))}),i.addEventListener("error",()=>r(new Error("upload failed"))),i.addEventListener("abort",()=>r(new Error("upload cancelled")));let a=e.signal;a!==void 0&&a.addEventListener("abort",()=>i.abort()),i.send(o)})}function Lx(t){if(typeof t!="object"||t===null)throw new Error("not an object");let e=t,n=e.id,r=e.name,o=e.mime,i=e.size,s=e.url;if(typeof n!="string"||typeof r!="string"||typeof o!="string"||typeof i!="number")throw new Error("missing fields");return typeof s=="string"?{id:n,name:r,mime:o,size:i,url:s}:{id:n,name:r,mime:o,size:i}}function Px(t){try{let e=JSON.parse(t.responseText);if(typeof e.error=="string")return e.error}catch{}return`upload failed (${t.status})`}var Dx=["data-attachments-url","data-attachment-accept","data-attachment-max-bytes","data-transcribe-url","data-threads-url","data-threads-cache","data-tools-url","data-skills-url","data-skills","data-prompt-chips","data-slash-commands","data-theme-toggle","data-strings","data-icon-url"],Ul=["omit","same-origin","include"];function Ll(t){return Ul.includes(t)}var Fp="ag-ui-chat:collapsed",Gp="ag-ui-chat:size",zp="ag-ui-chat:theme",Pl=6,Dl=new Set,Vr=class extends HTMLElement{agentFactory=Nl;headers={};getHeaders=null;trustedOrigins=[];allowImages=!1;formatRelativeTime=null;autoConfirm=!1;askUser=!1;askUserRenderer=null;approvalRenderer=null;approveWithEdits=!1;confirmPredicate=null;getTools=()=>[...this.#tt().map(e=>({name:e.name,description:e.description,parameters:e.parameters})),...this.#r.tools()];getContext=()=>[...Va(this.getPageMap,this.autoInjectPageMap)];routeMap=[];navigate=null;getPageMap=null;autoInjectPageMap=!0;conversationStore=new Qe;uploadHandler=null;transcribeHandler=null;navigationResult=()=>({navigated:!0,url:window.location.href});skillContext=()=>({});toolSummaries={};formatToolPayload=null;strings={};resolvePageTarget=e=>document.querySelector(e);#t={};#n=new Set;#e=se;#s=new Set;#r=new Tr;#i=new Map;#o=new Map;#l=new Map;#u=new Map;#d=new Set;#c=new Map;#p=new Map;#g=new Set;#f=[];#y=new Set;#D=null;#S=new Set;#Y;#F=document.createElement("div");#G=document.createElement("button");#v=document.createElement("button");#Se="";#K=null;#ue=document.createElement("div");#b;#z=null;#de=!1;#x;#m;#a;#E;#Ae;#U;#$;#w;#ke=null;#C;#A;#k;#pe;#M;#I;#L;#he=0;#B;#_=null;#fe;#Ie=null;#Z=!1;#V=null;#Q={};#j=!1;#Re=null;#N=null;#me=null;#Ce=0;#ge="";#q=null;#be=null;#P=null;#W=null;#h="";#J="";#ve=null;#Ne="";#Ze="";#re=null;#Oe=0;#Me=[];#Qe=[];#Je=[];#et=[];constructor(){super(),this.#Y=this.attachShadow({mode:"open"}),this.#x=document.createElement("div"),this.#m=document.createElement("div"),this.#a=document.createElement("textarea"),this.#E=document.createElement("button"),this.#Ae=document.createElement("span"),this.#C=document.createElement("div"),this.#A=document.createElement("button"),this.#k=document.createElement("input"),this.#pe=document.createElement("div"),this.#fe=document.createElement("span"),this.#M=document.createElement("button"),this.#I=document.createElement("button"),this.#L=document.createElement("span"),this.#B=document.createElement("div"),this.registerActivityRenderer({type:$s,render:e=>{let n=Gx(e);return n===null?null:Al("\u{1F5DC}",this.#e.historyCompacted.replace("{count}",String(n)),"compaction")}}),this.registerActivityRenderer({type:Hs,render:e=>kl(e,this.#e,n=>{this.sendMessage(n)})}),this.#U=new ts(e=>this.#Jt(e)),this.#$=new os({onSelect:e=>{this.#in(e)},onNew:()=>{this.newChat(),this.#ae()},onRename:(e,n)=>{this.conversationStore.renameThread(e,n),this.#ae()},onDelete:e=>{this.#sn(e)}}),this.#w=new Rr((e,n)=>{this.#Ct(e,n)})}#Le(){let e=this.getAttribute("data-runs-url");return e===null||e===""?null:(this.#ke===null&&(this.#ke=new Br(e,()=>this.#ie(e),()=>this.#ye())),this.#ke)}async#Ct(e,n){let r=this.#Le();if(r===null)return;let o=this.#a.value.trim();if(o==="")return;this.#a.value="",this.#ee();let i=n==="resume"?r.resumeUrl(e):r.forkUrl(e),s=this.agentFactory({endpoint:i,headers:this.#oe(),getHeaders:()=>this.#oe(),trustedOrigins:this.trustedOrigins,...this.#xe(),threadId:this.#h,initialMessages:[]});await new tr({agent:s,handlers:this.#Tt(),getTools:()=>this.#nt(),getContext:()=>this.#mt(),executeTool:l=>this.#Et(l),resolveInterrupts:l=>this.#wt(l),connectionLostMessage:this.#e.connectionLost}).send(o)}async#Nt(){let e=this.#Le();this.#w.setRelativeTimeFormatter(this.formatRelativeTime),this.#w.setRuns(e===null?[]:await e.continuable())}static get observedAttributes(){return["title-text","placement","credentials","user-key",...Dx]}attributeChangedCallback(e,n,r){if(e==="credentials"){r!==null&&!Ll(r)&&console.error(`<ag-ui-chat>: credentials="${r}" is not a fetch credentials mode (${Ul.join(" / ")}) \u2014 it is being ignored, so requests use the browser default and cross-origin cookies will not be sent.`);return}if(e==="placement"){this.#tn(),requestAnimationFrame(()=>this.#Fe());return}if(e==="title-text"){this.#Ae.textContent=r??this.#e.title;return}if(e==="user-key"){this.#Z&&(n??"")!==(r??"")&&this.#on(n??"",r??"");return}n===r||!this.#Z||console.warn(`<ag-ui-chat>: "${e}" was changed after the element connected, and is read only while connecting \u2014 this assignment has no effect. Set it before the element enters the DOM (in the markup, or on the element before appending it); frameworks that patch attributes after mount should bind it at creation. To apply a new value now, remove and re-insert the element.`)}registerTool(e){this.#r.register(e)}get sharedState(){return this.#V?.state??this.#Q}set sharedState(e){this.#Q={...e},this.#V?.setState(this.#Q)}registerPageState(e){for(let n of Fi(e))this.#r.register(n)}registerStateHook(e){this.registerPageState(e)}#Ot(){return this.routeMap.length===0?[]:qa(()=>this.routeMap,()=>this.navigate)}#Mt(){let e=this.getPageMap;return e===null?[]:[{name:Gs,description:"Read the current page's structure (fields, buttons, route). Call after acting to observe the result within the same turn.",parameters:{type:"object",properties:{},required:[],[Ge]:"Read the page"},handler:()=>e()}]}#Lt(){let e=this.getAttribute("data-page-actions");if(e===null)return[];let n=new Set(e.split(",").map(r=>r.trim()).filter(r=>r!==""));return Ba(n,r=>this.resolvePageTarget(r))}#tt(){return[...this.#Ot(),...this.#Mt(),...this.#Lt(),...this.#Pt()]}#Pt(){return this.askUser?[{name:"ask_user",description:"Ask the user a question and wait for their answer. Provide `options` for a multiple-choice prompt; set `allow_custom` to also accept a free-text answer.",parameters:{type:"object",properties:{question:{type:"string",description:"The question to ask the user."},options:{type:"array",items:{type:"string"},description:"Preset choices offered as radio buttons."},allow_custom:{type:"boolean",description:"Allow a free-text answer in addition to any options."}},required:["question"]},handler:e=>this.#Dt(e)}]:[]}async#Dt(e){let r={question:typeof e.question=="string"?e.question:""},o=e.options;Array.isArray(o)&&(r.options=o.filter(a=>typeof a=="string")),e.allow_custom===!0&&(r.allowCustom=!0),this.#N=new AbortController;let i=this.#N.signal;this.#O();let s=this.askUserRenderer!==null?await this.askUserRenderer(r,{signal:i}):await sl(this.#R(),r,{signal:i,strings:this.#e});return this.#N=null,this.#T(),this.#b.follow(),s}#nt(){let e=this.getTools();return this.#s=new Set(e.map(n=>n.name)),e}#Pe(e){let n=this.#tt().find(r=>r.name===e);return n!==void 0?n:this.#r.has(e)?this.#r.get(e):null}get endpoint(){return this.getAttribute("endpoint")??""}set endpoint(e){this.setAttribute("endpoint",e)}get userKey(){return this.getAttribute("user-key")??""}set userKey(e){this.setAttribute("user-key",e)}get credentials(){let e=this.getAttribute("credentials");return e!==null&&Ll(e)?e:null}set credentials(e){if(e===null){this.removeAttribute("credentials");return}if(!Ll(e))throw new TypeError(`<ag-ui-chat>: credentials must be one of ${Ul.map(n=>`"${n}"`).join(", ")} (got ${JSON.stringify(e)}).`);this.setAttribute("credentials",e)}#oe(){return{...this.headers,...this.getHeaders?.()}}#ie(e){let n=this.#oe();return us(e,Object.keys(n),this.trustedOrigins,this.#n),n}#ye(){return this.credentials??void 0}#xe(){let e=this.#ye();return e===void 0?{}:{credentials:e}}#rt(e){return Je({headers:this.#ie(e)},this.#ye())}get toolDisplay(){let e=this.getAttribute("data-tool-display");return e===In.INLINE||e===In.MINIMAL||e===In.COMPACT?e:In.FULL}set toolDisplay(e){this.setAttribute("data-tool-display",e)}connectedCallback(){if(this.#J=this.#rn(),this.#Ge(this.#dt()),requestAnimationFrame(()=>this.#Fe()),this.#e=Wa({...this.#Ht(),...this.strings}),this.getAttribute("data-theme-toggle")!==null){let e=this.#$e(zp);e!==null&&this.setAttribute("theme",e)}if(this.#dn(),this.#$.setStrings(this.#e),this.#w.setStrings(this.#e),this.#$e(Fp)==="1"&&this.setAttribute("collapsed",""),this.#yt(),this.#Zt(),this.conversationStore instanceof Qe){let e=this.#ze();this.#re=e===""?this.conversationStore:new Qe(e),this.conversationStore=this.#re}this.#st(),this.#Ft(),this.#zt(),this.#h=this.conversationStore.threadId(),queueMicrotask(()=>this.#Ut()),this.#we(),this.#Z=!0}#Ut(){this.#Z&&(this.#at(),this.#lt())}async reload(){this.#H(),this.#se(),this.#X(!1),await Promise.all([this.#at(),this.#lt(),this.#we()])}disconnectedCallback(){this.#Z=!1,this.#ve!==null&&(Dl.delete(this.#ve),this.#ve=null),this.#H(),this.#K?.detach(),this.#K=null,this.#_?.dispose(),this.#Ie?.dispose(),this.#b.dispose(),this.#z!==null&&(clearTimeout(this.#z),this.#z=null)}#ot(e){let n=this.getAttribute(e);return n!==null&&n!=="false"}#Ht(){let e=this.getAttribute("data-strings");if(e===null)return{};try{let n=JSON.parse(e);if(typeof n=="object"&&n!==null)return n}catch{}return{}}#Ft(){let e=this.getAttribute("data-attachments-url"),n=this.uploadHandler??this.#Gt(e);if(n===null)return;let r=this.getAttribute("data-attachment-accept")??"",o=new zi({upload:n,maxBytes:this.#Xt(),accept:r,strings:this.#e,onChange:()=>this.#bn(o)});this.#_=o,this.#pe.appendChild(this.#_.element),this.#k.accept=r,this.#A.hidden=!1,this.#Kt()}#Gt(e){return e===null?null:(n,r,o)=>Ml(n,{url:e,headers:this.#ie(e),...this.#xe(),onProgress:r,signal:o})}#zt(){let e=this.getAttribute("data-transcribe-url"),n=this.transcribeHandler??this.#$t(e);n!==null&&(this.#Ie=new is({transcribe:n,onText:r=>this.#Bt(r),strings:this.#e}),this.#fe.appendChild(this.#Ie.element))}#$t(e){return e===null?null:n=>Ol(n,{url:e,headers:this.#ie(e),...this.#xe()})}#Bt(e){let n=this.#a.value.trim();this.#a.value=n===""?e:`${n} ${e}`,this.#xt(),this.#a.focus()}quote(e){let n=nl(e);if(n==="")return;let r=this.#a.value.replace(/\s+$/,"");this.#a.value=r===""?n:`${r}

${n}`,this.#ee(),this.#a.focus();let o=this.#a.value.length;this.#a.setSelectionRange(o,o)}offerQuoteInPage(e=document.body){this.#K?.detach();let n=ol({within:e,label:this.#e.quoteSelection,exclude:this,onQuote:r=>this.quote(r)});return this.#K=n,()=>{n.detach(),this.#K===n&&(this.#K=null)}}#Vt(){return this.getAttribute("data-quote-selection")!=="false"}#it(e){if(!this.#Vt())return;let n=e===void 0?void 0:{x:e.clientX,y:e.clientY},r=Cr(this.#m,[this.#Y],n);if(r===null){this.#De();return}this.#Se=r.text,this.#jt(r.rect)}#jt(e){this.#v.hidden=!1;let n=this.#ue.getBoundingClientRect(),r=e.top-n.top,o=r<Pl+this.#v.offsetHeight;this.#v.dataset.below=String(o),this.#v.style.top=`${o?e.bottom-n.top+Pl:r-Pl}px`;let i=this.#v.offsetWidth/2,s=e.left+e.width/2-n.left;this.#v.style.left=`${Math.min(Math.max(s,i),n.width-i)}px`}#De(){this.#v.hidden=!0,this.#Se=""}#qt(){let e=this.getAttribute("data-max-tool-rounds");return e===null?kn:Number.parseInt(e,10)}#Wt(){let e=this.getAttribute("data-message-actions");return e===null?new Set([zt.COPY,zt.RETRY]):new Set(e.split(",").map(n=>n.trim()).filter(n=>n!==""))}#Xt(){let e=this.getAttribute("data-attachment-max-bytes");if(e===null)return zs;let n=Number.parseInt(e,10);return Number.isFinite(n)&&n>=0?n:zs}#Yt(){let e=this.#k.files;if(e!==null)for(let n of Array.from(e))this.#_?.add(n);this.#k.value=""}#Kt(){this.#x.addEventListener("dragover",e=>{e.preventDefault(),this.#x.classList.add("chat--dragover")}),this.#x.addEventListener("dragleave",()=>{this.#x.classList.remove("chat--dragover")}),this.#x.addEventListener("drop",e=>{e.preventDefault(),this.#x.classList.remove("chat--dragover");let n=e.dataTransfer?.files;if(n!==void 0)for(let r of Array.from(n))this.#_?.add(r)})}#st(){let e=this.getAttribute("data-threads-url");e!==null&&(this.conversationStore=new $r(e,()=>this.#ie(e),this.conversationStore,()=>this.#ye(),this.getAttribute("data-threads-cache")!=="false"))}async#at(){let e=this.getAttribute("data-tools-url");if(e!==null)try{let n=await fetch(e,this.#rt(e));this.#t=ja(await n.json())}catch{}}setSkills(e){this.#et=e,this.#Ue()}#Zt(){this.#U.enableChips(this.#ot("data-prompt-chips")),this.#U.enableSlash(this.#ot("data-slash-commands")),this.#Je=this.#Qt(),this.#Ue()}#Qt(){let e=this.getAttribute("data-skills");if(e===null)return[];try{return Oa(JSON.parse(e))}catch{return[]}}async#lt(){let e=this.getAttribute("data-skills-url");if(e!==null)try{let n=await fetch(e,this.#rt(e));this.#Qe=Oa(await n.json()),this.#Ue()}catch{}}#Ue(){let e=new Map;for(let n of[...this.#Qe,...this.#Je,...this.#et])e.set(n.name,n);this.#U.setSkills([...e.values()])}#Jt(e){if(e.prompt===void 0){this.#C.hidden=!0,this.sendMessage(`/${e.name}`);return}let{text:n,missing:r}=Sd(e.prompt,this.skillContext());if(r.length>0){this.#C.textContent=this.#e.skillNeeds.replace("{title}",e.title).replace("{fields}",r.join(", ")),this.#C.hidden=!1,this.#a.value=n,this.#ee(),this.#a.focus(),this.#en(n);return}if(this.#C.hidden=!0,this.#a.value=n,this.#ee(),e.sendImmediately===!1){this.#a.focus();return}this.#Ve()}#en(e){let n=e.indexOf("{");this.#a.setSelectionRange(n,e.indexOf("}",n)+1)}get collapsed(){return this.hasAttribute("collapsed")}set collapsed(e){this.setCollapsed(e)}setCollapsed(e){e?this.setAttribute("collapsed",""):this.removeAttribute("collapsed"),st(this.#Ee(Fp),e?"1":"0"),this.#_e(0),this.dispatchEvent(new CustomEvent(Cs,{detail:{collapsed:e},bubbles:!0,composed:!0}))}get unread(){return this.#he}toggleCollapsed(){this.setCollapsed(!this.collapsed)}toggleTheme(){let e=this.getAttribute("theme")==="dark"?"light":"dark";this.setAttribute("theme",e),st(this.#Ee(zp),e),this.#ht()}#He(){switch(this.getAttribute("placement")){case"full":case"page":return"none";case"sidebar":case"side":return"width";default:return"both"}}#ct(){let e=this.getBoundingClientRect(),n=this.style.getPropertyValue("--ag-ui-width"),r=this.style.getPropertyValue("--ag-ui-height");this.#Ge({width:e.width+1,height:e.height+1});let o=this.getBoundingClientRect();return this.#ut("--ag-ui-width",n),this.#ut("--ag-ui-height",r),{x:Math.abs(o.left-e.left)<.5?"left":"right",y:Math.abs(o.top-e.top)<.5?"top":"bottom"}}#Fe(){if(!this.#Z)return;let e=this.#ct();this.setAttribute("data-resize-anchor",`${e.y}-${e.x}`)}#ut(e,n){if(n===""){this.style.removeProperty(e);return}this.style.setProperty(e,n)}#Ge(e){let n=this.#He();n!=="none"&&(e.width!==void 0&&this.style.setProperty("--ag-ui-width",`${e.width}px`),e.height!==void 0&&n==="both"&&this.style.setProperty("--ag-ui-height",`${e.height}px`))}#tn(){let e=this.#He();e!=="both"&&this.style.removeProperty("--ag-ui-height"),e==="none"&&this.style.removeProperty("--ag-ui-width")}#nn(e){let n={...this.#dt(),...e};st(this.#Ee(Gp),JSON.stringify(n))}#dt(){let e=this.#$e(Gp);if(e===null)return{};try{let n=JSON.parse(e);return typeof n=="object"&&n!==null?n:{}}catch{return{}}}#rn(){let e=this.id!==""?this.id:this.endpoint;return e===""?"":this.#Ze===e?this.#Ne:Dl.has(e)?(this.#Ze=e,this.#Ne=`${e}~${Ie()}`,console.warn(`<ag-ui-chat>: another element on this page already stores its conversation under "${e}", so this one has been given a throwaway namespace of its own \u2014 the two would otherwise share a thread pointer, a history drawer and every message. Give each <ag-ui-chat> its own id to keep them apart and let this one restore its conversation across reloads.`),this.#Ne):(Dl.add(e),this.#ve=e,e)}#ze(e=this.userKey){return e===""?this.#J:`${this.#J}#${e}`}#on(e,n){let r=this.#ze(e),o=this.#ze(n);if(e===""){Qe.adopt(r,o),this.#pt(o);return}Qe.purge(r),this.#pt(o),this.#H(),this.#se(),this.#X(!1),this.#_e(0),this.#h=this.conversationStore.threadId(),this.#we(),this.#ae()}#pt(e){this.#re!==null&&(this.#re=new Qe(e),this.conversationStore=this.#re,this.#st())}#Ee(e){return this.#J===""?e:`${e}:${this.#J}`}#$e(e){let n=sessionStorage.getItem(this.#Ee(e));return n!==null||this.#J===""?n:sessionStorage.getItem(e)}#ht(){let e=this.getAttribute("theme")==="dark";this.#M.textContent=e?"\u2600\uFE0F":"\u{1F319}"}openThreads(){this.#w.close(),this.#ae(),this.#$.open()}openCheckpoints(){this.#$.close(),this.#Nt(),this.#w.open()}closeCheckpoints(){this.#w.close()}toggleCheckpoints(){if(this.#w.open_){this.#w.close();return}this.openCheckpoints()}newChat(){this.#H(),this.conversationStore.isUnsent?.(this.#h)===!0&&this.conversationStore.clear(this.#h),this.#se(),this.#h=cs(this.conversationStore),this.#X(!1),this.#_e(0)}#se(){this.#V=null,this.#ft(),this.#Me=[]}#ft(){this.#ne(),this.#P=null,this.#W=null,this.#O(),this.#i.clear(),this.#o.clear(),this.#l.clear(),this.#g.clear(),this.#c.clear(),this.#p.clear(),this.#D=null,this.#_?.clear(),this.#m.replaceChildren(this.#B),this.#T()}async retryLastTurn(){if(this.#j)return!1;let e=this.#je(),n=e.truncateToLastUser();if(n===null)return!1;this.#ft();for(let r of n)this.#gt(r);return await e.resume(),!0}async#in(e){e!==this.#h&&(this.#H(),this.#se(),this.conversationStore.setActiveThread(e),this.#h=e,this.#X(!1),await this.#we())}#sn(e){let n=e===this.#h;n&&this.#H(),this.conversationStore.clear(e),n&&(this.#se(),this.#h=this.conversationStore.threadId(),this.#X(!1)),this.#ae()}async#ae(){this.#$.setRelativeTimeFormatter(this.formatRelativeTime),this.#$.setThreads(await this.conversationStore.listThreads(),this.#h)}async#we(){this.#Oe+=1;let e=this.#Oe,n=await this.conversationStore.loadMessages(this.#h);if(e!==this.#Oe)return;if(n!==null){this.#Me=n;for(let o of n)this.#gt(o)}let r=this.conversationStore.loadCheckpoint(this.#h);if(r!==null){await this.#un(r);return}this.#ln(n)}#mt(){return this.#Re=window.location.href,this.getContext()}#an(){return this.#Re!==null&&this.#Re!==window.location.href}#ln(e){let n=e?.at(-1);n===void 0||n.role!==We.USER||this.#ce("\u26A0",this.#e.runInterrupted,"interrupted")}#gt(e){let n=typeof e.content=="string"?e.content:"";if(e.role===We.USER){let r=Rl(e);if(n!==""||r.length>0){let o=this.appendMessage(We.USER,n);r.length>0&&o.appendChild(Ka(r))}return}if(e.role===We.ASSISTANT){if(n!==""){let r=this.appendMessage(We.ASSISTANT,n);r.classList.add("message--restored"),this.#qe(r)}for(let r of Hx(e.toolCalls)){let o={id:r.id,name:r.function.name,args:this.#cn(r.function.arguments)};if(this.#kt(o))continue;this.#c.set(o.id,this.#Ke(o).element);let i=this.#Pe(o.name)?.render;i!==void 0&&this.#It(i,o)}return}if(e.role==="activity"){let r=e;typeof r.activityType=="string"&&this.#Ye(e.id,r.activityType,r.content);return}if(e.role==="tool"){let r=this.#i.get(e.toolCallId);r!==void 0&&r.settle(ae.DONE,e.content)}}#cn(e){if(typeof e!="string")return{};try{let n=JSON.parse(e);if(typeof n=="object"&&n!==null)return n}catch{}return{}}#bt(e){this.getAttribute("data-text-animation")==="word"&&Ap(e)}async#un(e){this.conversationStore.saveCheckpoint(this.#h,null);let n=this.#je();n.addToolResult(e.toolCallId,JSON.stringify(this.navigationResult(e))),await n.resume()}appendMessage(e,n){let r=document.createElement("div");return r.className=`message message--${e}`,r.setAttribute("part",`message message-${e}`),e===We.ASSISTANT?(r.innerHTML=es(n,{allowImages:this.allowImages}),Ya(r,this.#e),this.#R().appendChild(r)):(this.#P=null,r.textContent=n,this.#m.appendChild(r)),this.#T(),e===We.USER?this.#b.jump():this.#b.follow(),r}#R(){if(this.#P===null){let e=document.createElement("div");e.className="answer",e.setAttribute("part","answer"),this.#P=e,this.#m.appendChild(e),this.#T()}return this.#P}#dn(){this.#x.className="chat",this.#x.setAttribute("part","panel");let e=document.createElement("div");e.className="header",e.setAttribute("part","header");let n=this.#Ae;n.className="header-title",n.setAttribute("part","title"),n.textContent=this.getAttribute("title-text")??this.#e.title,(this.querySelector('[slot="icon"]')!==null||this.getAttribute("data-icon-url")!==null)&&e.append(this.#vt("icon","icon",null));let r=document.createElement("slot");r.name="header-actions";let o=document.createElement("div");o.className="header-controls",o.setAttribute("part","header-controls");let i=this.#Te("history",this.#e.chatHistory,"\u2630");i.addEventListener("click",()=>this.openThreads());let s=this.#Te("checkpoints",this.#e.checkpoints,"\u21BA");s.addEventListener("click",()=>this.toggleCheckpoints());let a=this.#Te("new",this.#e.newChat,"\u271A");a.addEventListener("click",()=>this.newChat());let l=this.#Te("collapse",this.#e.collapse,"\u2014");l.addEventListener("click",()=>this.toggleCollapsed()),this.#Le()!==null?o.append(i,s,a):o.append(i,a),this.getAttribute("data-theme-toggle")!==null&&(this.#M.type="button",this.#M.className="header-btn header-btn--theme",this.#M.setAttribute("part","header-button theme-toggle"),this.#M.title=this.#e.toggleTheme,this.#M.setAttribute("aria-label",this.#e.toggleTheme),this.#M.addEventListener("click",()=>this.toggleTheme()),this.#ht(),o.append(this.#M)),o.append(l),e.append(n,r,o),this.#m.className="messages",this.#m.setAttribute("part","messages"),this.#m.setAttribute("role","log"),this.#m.setAttribute("aria-live","off"),this.#m.setAttribute("aria-label",this.#e.conversation),this.#G.className="jump-latest",this.#G.type="button",this.#G.setAttribute("part","jump-latest"),this.#G.textContent=this.#e.jumpToLatest,this.#G.addEventListener("click",()=>{this.#b.jump()}),this.#v.className="quote-selection",this.#v.type="button",this.#v.setAttribute("part","quote-selection"),this.#v.textContent=this.#e.quoteSelection,this.#v.hidden=!0,this.#v.addEventListener("mousedown",p=>{p.preventDefault()}),this.#v.addEventListener("click",()=>{this.quote(this.#Se),window.getSelection()?.removeAllRanges(),this.#De()}),this.#m.addEventListener("mouseup",p=>this.#it(p)),this.#m.addEventListener("keyup",()=>this.#it()),this.#m.addEventListener("mousedown",()=>this.#De()),this.#b=kp({viewport:this.#m,onMissedContent:p=>{this.#G.dataset.missed=String(p)}}),this.#F.className="sr-only",this.#F.setAttribute("role","status"),this.#F.setAttribute("aria-live","polite"),this.#F.setAttribute("aria-atomic","true"),this.#B.className="empty",this.#B.setAttribute("part","empty");let c=document.createElement("slot");c.name="empty",this.#B.append(c),this.#m.append(this.#B);let d=document.createElement("div");d.className="input-row",d.setAttribute("part","composer");let m=document.createElement("div");m.className="composer",m.setAttribute("part","composer-surface");let x=document.createElement("div");x.className="composer-tools",x.setAttribute("part","composer-tools"),this.#a.className="input",this.#a.setAttribute("part","input"),this.#a.setAttribute("aria-label",this.#e.message),this.#a.rows=1,this.#a.placeholder=this.#e.inputPlaceholder,this.#a.addEventListener("keydown",p=>this.#gn(p)),this.#a.addEventListener("input",()=>this.#xt()),this.#E.className="send",this.#E.type="button",this.#E.setAttribute("part","send"),this.#E.append(this.#Be("icon-send","send-send",uc),this.#Be("icon-stop","send-stop",dc)),this.#E.title=this.#e.send,this.#E.setAttribute("aria-label",this.#e.send),this.#E.dataset.state="idle",this.#E.addEventListener("click",()=>{if(this.#j){this.#H();return}this.#Ve()}),this.#C.className="skill-hint",this.#C.setAttribute("part","skill-hint"),this.#C.hidden=!0,this.#A.className="attach-btn",this.#A.type="button",this.#A.setAttribute("part","attach-button"),this.#A.append(this.#Be("icon-attach","attach-glyph",pc)),this.#A.title=this.#e.attachFiles,this.#A.setAttribute("aria-label",this.#e.attachFiles),this.#A.hidden=!0,this.#A.addEventListener("click",()=>this.#k.click()),this.#k.className="attach-input",this.#k.type="file",this.#k.multiple=!0,this.#k.hidden=!0,this.#k.addEventListener("change",()=>this.#Yt()),this.#pe.className="attachment-slot",this.#fe.className="voice-slot";let f=document.createElement("slot");f.name="footer",x.append(this.#A,this.#fe,this.#E),m.append(this.#a,x),d.append(m,this.#k),this.#ue.className="messages-wrap",this.#ue.append(this.#m,this.#G,this.#v),this.#x.append(e,this.#ue,this.#U.palette,this.#U.chips,this.#C,this.#pe,d,f,this.#$.element,this.#w.element),this.#x.addEventListener("pointerdown",p=>{if(!this.#w.open_)return;let b=p.composedPath();b.includes(this.#w.element)||b.includes(s)||this.#w.close()}),this.#I.className="launcher",this.#I.type="button",this.#I.setAttribute("part","launcher"),this.#I.setAttribute("aria-label",this.#e.expand),this.#L.className="launcher-badge",this.#L.setAttribute("part","launcher-badge"),this.#L.setAttribute("aria-hidden","true"),this.#L.hidden=!0,this.#I.append(this.#vt("launcher","launcher-icon",fc,this.#hn()),this.#L),this.#I.addEventListener("click",()=>this.setCollapsed(!1)),this.#x.append(_p({axis:()=>this.#He(),anchor:()=>this.#ct(),rect:()=>this.getBoundingClientRect(),apply:p=>this.#Ge(p),commit:p=>{this.#nn(p),this.#Fe()},label:this.#e.resizePanel})),this.#pn(),this.#Y.append(this.#F,this.#x,this.#I)}#le(e){this.#z!==null&&clearTimeout(this.#z),this.#F.textContent=e,this.#z=setTimeout(()=>{this.#z=null,this.#F.textContent=""},yc)}#pn(){let e=new CSSStyleSheet;e.replaceSync(Ip),this.#Y.adoptedStyleSheets=[e]}#Te(e,n,r){let o=document.createElement("button");o.type="button",o.className=`header-btn header-btn--${e}`,o.setAttribute("part",`header-button ${e}-button`),o.title=n,o.setAttribute("aria-label",n);let i=document.createElement("slot");return i.name=`icon-${e}`,i.append(document.createTextNode(r)),o.append(i),o}#Be(e,n,r){let o=document.createElement("slot");return o.name=e,o.className=n,o.innerHTML=r,o}#hn(){return this.getAttribute("data-launcher-icon-url")??this.getAttribute("data-icon-url")}#vt(e,n,r,o=this.getAttribute("data-icon-url")){let i=document.createElement("span");i.className="icon-holder",i.setAttribute("part",n);let s=document.createElement("slot");if(s.name=e,o!==null){let a=document.createElement("img");a.className="icon-img",a.src=o,a.alt="",s.append(a)}else r!==null&&(s.innerHTML=r);return i.append(s),i}#yt(){this.#I.setAttribute("aria-expanded",String(!this.collapsed));let e=this.#he;this.#L.textContent=e>9?"9+":String(e),this.#L.hidden=e===0||!this.#fn();let n=this.#L.hidden?this.#e.expand:this.#e.expandUnread.replace("{count}",String(e));this.#I.setAttribute("aria-label",n),this.#I.title=n}#fn(){return this.getAttribute("data-unread-badge")!=="false"}#_e(e){this.#he=e,this.#yt(),this.dispatchEvent(new CustomEvent(Ns,{detail:{unread:e},bubbles:!0,composed:!0}))}#mn(){this.collapsed&&this.#_e(this.#he+1)}#T(){this.#B.hidden=this.#m.childElementCount>1}#xt(){this.#U.onInput(this.#a.value),this.#C.hidden=!0,this.#ee()}#gn(e){if(this.#U.onKeydown(e)){e.preventDefault();return}if(e.key==="Escape"&&this.#j){e.preventDefault(),this.#H();return}e.key==="Enter"&&!e.shiftKey&&(e.preventDefault(),this.#Ve())}#H(){this.#N?.abort(),this.#V?.cancel()}#X(e){this.#j=e;let n=e?this.#e.stop:this.#e.send;this.#E.title=n,this.#E.setAttribute("aria-label",n),this.#E.dataset.state=e?"running":"idle"}#ee(){this.#a.style.height="auto",this.#a.style.height=`${this.#a.scrollHeight}px`}async#Ve(){if(this.#j)return;let e=this.#a.value.trim(),n=this.#_?.readyRefs()??[];e===""&&n.length===0||(this.#a.value="",this.#ee(),this.#_?.hasPending()===!0&&this.#ce("\u{1F4CE}",this.#e.attachmentsStillUploading.replace("{n}",String(this.#_.pendingCount())),"attachment-pending"),this.#_?.clearReady(),await this.sendMessage(e,n))}async sendMessage(e,n=[]){if(this.#j||e===""&&n.length===0)return;let r=this.appendMessage(We.USER,e);n.length>0&&r.appendChild(Ka(n)),this.dispatchEvent(new CustomEvent(Rs,{detail:{content:e,attachments:n},bubbles:!0,composed:!0})),await this.#vn(e,n)}attachFile(e){return this.#_===null?!1:(this.#_.add(e),!0)}#bn(e){this.dispatchEvent(new CustomEvent(Ms,{detail:{attachments:e.readyRefs(),pending:e.pendingCount()},bubbles:!0,composed:!0}))}async#vn(e,n){this.endpoint!==""&&await this.#je().send(e,n)}#je(){if(this.#V===null){let e=this.agentFactory({endpoint:this.endpoint,headers:this.#oe(),getHeaders:()=>this.#oe(),trustedOrigins:this.trustedOrigins,...this.#xe(),threadId:this.#h,initialMessages:this.#Me,initialState:this.#Q});this.#V=new tr({agent:e,handlers:this.#Tt(),getTools:()=>this.#nt(),getContext:()=>this.#mt(),executeTool:n=>this.#Et(n),resolveInterrupts:n=>this.#wt(n),onPersist:n=>this.conversationStore.saveMessages(this.#h,n),onStateChanged:n=>this.#yn(n),connectionLostMessage:this.#e.connectionLost,maxToolRounds:this.#qt()})}return this.#V}#yn(e){this.#Q={...e},this.dispatchEvent(new CustomEvent(Os,{detail:{state:this.#Q},bubbles:!0,composed:!0}))}#qe(e,n={}){let r=this.#Wt(),o=r.has(zt.COPY),i=n.rateable!==!1&&r.has(zt.FEEDBACK);(o||i)&&tl(e,{strings:this.#e,...o?{text:()=>e.textContent}:{},...i?{onFeedback:s=>{this.dispatchEvent(new CustomEvent(Us,{detail:{content:e.textContent,rating:s},bubbles:!0,composed:!0}))}}:{}}),r.has(zt.RETRY)&&this.#xn(ji(e,this.#e))}#xn(e){this.#D?.querySelector(".message-action--retry")?.remove();let n=qi("retry",this.#e.retryMessage,"\u21BB");n.addEventListener("click",()=>{this.retryLastTurn()}),e.prepend(n),this.#D=e}async#En(e,n){return this.autoConfirm?null:this.confirmPredicate!==null?await this.confirmPredicate(e.name,e.args)===!0?"predicate":null:this.#y.has(e.name)?null:Ma(n.parameters)?"destructive":null}async#Et(e){if($p(e)!==null)return null;let n=this.#Ke(e);this.#i.delete(e.id),this.#c.set(e.id,n.element);let r=this.#s.has(e.name)?this.#Pe(e.name):null;if(r===null)return this.#g.has(e.id)||n.settle(ae.DONE,this.#e.noResult),null;if(this.getPageMap!==null&&e.name!==Gs&&!Pi(r.parameters)&&this.#an()){let s=this.#e.pageMoved;return n.settle(ae.ERROR,s),this.#te(),{content:`Error: ${s}`,error:s}}let o=await this.#En(e,r);if(o!==null){let s={toolName:e.name,args:e.args},a=r.parameters[oo];typeof a=="string"&&(s.message=a),this.#N=new AbortController;let l=el(this.#R(),s,{signal:this.#N.signal,strings:this.#e,...o==="destructive"?{onAlwaysAllow:()=>this.#y.add(e.name)}:{}});this.#T(),this.#b.follow();let c=await l;if(this.#N=null,n.recordDecision(c?"approved":"declined"),!c){let d=this.#e.declinedAction;return n.settle(ae.DECLINED,d),this.#te(),{content:d}}}let i=Pi(r.parameters)&&this.navigate===null;i&&this.conversationStore.saveCheckpoint(this.#h,{toolCallId:e.id});try{let s=await r.handler(e.args,e.id);if(r.render!==void 0&&this.#It(r.render,e),i)return n.settle(ae.DONE,this.#e.navigating),{content:"",halt:!0};let a=JSON.stringify(s??null);return n.settle(ae.DONE,a),this.#te(),{content:a}}catch(s){i&&this.conversationStore.saveCheckpoint(this.#h,null);let a=s instanceof Error?s.message:String(s);return n.settle(ae.ERROR,a),this.#te(),{content:`Error: ${a}`,error:a}}}async#wt(e){this.#N=new AbortController,this.#le(this.#e.announceAwaitingDecision.replace("{count}",String(e.length))),this.#O();let n=this.#N.signal,r=await Promise.all(e.map(async i=>{let s=i.toolCallId!==void 0?this.#i.get(i.toolCallId):void 0,a={},l=Ux(i)??i.message;l!==void 0&&(a.message=l);let c=s?.element.getAttribute("data-tool-name");c!=null&&(a.toolName=c);let d,m=this.approveWithEdits&&s!==void 0;m&&(a.args=s.args),s?.mark(ae.DEFERRED);let x=this.approvalRenderer!==null?await this.approvalRenderer(a,{signal:n}):await Xa(s?.approvalSlot??this.#R(),a,{signal:n,strings:this.#e,...m?{onEdit:f=>{d=f}}:{}});return s?.recordDecision(x?"approved":"declined"),x?s?.mark(ae.PENDING):s?.settle(ae.DECLINED,this.#e.declinedAction),{id:i.id,approved:x,editedArgs:d}}));this.#T(),this.#b.follow(),this.#N=null;let o={};for(let{id:i,approved:s,editedArgs:a}of r)o[i]=s?{status:"resolved",payload:a===void 0?{approved:!0}:{approved:!0,editedArgs:a}}:{status:"cancelled"};return o}#Tt(){return{onRunStart:()=>{this.#j||(this.#de=!1,this.#le(this.#e.announceResponding)),this.#X(!0),this.#R(),this.#te()},onReasoningStart:()=>{this.#O(),this.#St()},onReasoningDelta:e=>{this.#St().stream(e)},onReasoningEnd:()=>{},onTextDelta:e=>{this.#O(),this.#W?.collapse(),this.#kn(e),this.#Ce+=1},onTextEnd:e=>{let n=this.#Xe(e);this.#Ce<=1&&this.#bt(n),Ya(n,this.#e),this.#qe(n),this.#ne(),this.#mn()},onToolCall:e=>{this.#O(),!this.#kt(e)&&(this.#f.push({id:e.id,name:e.name}),this.#Ke(e))},onActivity:(e,n,r)=>{this.#Ye(r,e,n)},onCustomEvent:(e,n)=>{if(e===Fs){this.#Tn(n);return}if(e===cc){this.#_n(n);return}this.dispatchEvent(new CustomEvent(Ps,{detail:{name:e,value:n},bubbles:!0,composed:!0}))},onSubAgentStarted:(e,n,r)=>{r!==null&&(this.#l.set(e,r),this.#We({delegationId:r,agent:n===""?null:n,phase:An.STARTED,status:this.#e.subAgentDelegatedTo.replace("{agent}",n),tool:null}))},onSubAgentFinished:e=>{this.#_t(e,An.FINISHED,null)},onSubAgentError:(e,n)=>{this.#_t(e,An.FAILED,n)},onMessagesSnapshot:()=>{this.#ce("\u{1F504}",this.#e.historyReplaced,"history-replaced")},onToolResult:(e,n)=>{let r=this.#i.get(e);r!==void 0&&(r.settle(ae.DONE,n),this.#g.add(e),this.#te())},onActivityChanged:(e,n,r)=>{this.#Ye(e,n,r)},onRunEnd:()=>{this.#O(),this.#ne()},onError:e=>{this.#de=!0,this.#le(this.#e.announceFailed),this.#O();let n=this.appendMessage(We.ASSISTANT,`\u26A0\uFE0F ${e}`);n.classList.add("message--failed"),this.#qe(n,{rateable:!1}),this.#bt(n),this.#ne()},onCancelled:()=>{this.#de=!0,this.#le(this.#e.announceStopped),this.#O(),this.#An(),this.#ne()},onSettled:()=>{this.#de||this.#le(this.#e.announceAnswerReady),this.#O(),this.#X(!1),this.#ne();for(let e of this.#i.values())e.settled||e.settle(ae.DONE,this.#e.noResult);this.#P!==null&&this.#P.childElementCount===0&&(this.#P.remove(),this.#T()),this.#P=null,this.#W=null,this.#wn()}}}#wn(){let e=this.#f.map(({id:r,name:o})=>({name:o,side:this.#g.has(r)?"server":"client"}));this.#f=[];let n=[...this.#S];this.#S=new Set,this.dispatchEvent(new CustomEvent(Ls,{detail:{tools:e,invalidated:n},bubbles:!0,composed:!0}))}#Tn(e){let n=e??{},r=Array.isArray(n.keys)?n.keys.filter(o=>typeof o=="string"):[];if(r.length!==0){for(let o of r)this.#S.add(o);this.dispatchEvent(new CustomEvent(Ds,{detail:{keys:r,reason:typeof n.reason=="string"?n.reason:null},bubbles:!0,composed:!0}))}}#_n(e){let n=Cp(e);n!==null&&this.#We(n)}#_t(e,n,r){let o=this.#l.get(e);if(o===void 0)return;let i=this.#o.get(o)?.agent??null;this.#We({delegationId:o,agent:i,phase:n,status:r===null?this.#Sn(i):r,tool:null})}#Sn(e){return e===null?this.#e.subAgentWorking:this.#e.subAgentFinished.replace("{agent}",e)}#We(e){let n=this.#i.get(e.delegationId);if(n===void 0)return;let r=this.#o.get(e.delegationId);r===void 0&&(r=new ns(this.#e),this.#o.set(e.delegationId,r),n.subagentSlot.appendChild(r.element)),r.report(e),this.#b.follow()}#An(){let e=document.createElement("div");e.className="stopped-note",e.setAttribute("part","stopped"),e.setAttribute("role","status"),e.textContent=this.#e.stopped,this.#R().appendChild(e),this.#T(),this.#b.follow()}#te(){if(this.#be!==null)return;let e=document.createElement("div");e.className="pending",e.setAttribute("part","pending"),e.setAttribute("role","status"),e.setAttribute("aria-label",this.#e.thinking);for(let n=0;n<3;n+=1){let r=document.createElement("span");r.className="pending-dot",e.appendChild(r)}this.#be=e,this.#R().appendChild(e),this.#T(),this.#b.follow()}#O(){this.#be?.remove(),this.#be=null}#St(){if(this.#W===null){this.#W=new rs(this.#e);let e=this.#R();e.insertBefore(this.#W.element,e.firstChild),this.#T(),this.#b.follow()}return this.#W}#At(){return this.#me===null&&(this.#me=this.appendMessage(We.ASSISTANT,""),this.#Ce=0),this.#me}#kn(e){this.#ge=e,this.#At(),this.#q===null&&(this.#q=requestAnimationFrame(()=>{this.#q=null,this.#Xe(this.#ge)}))}#Xe(e){this.#q!==null&&(cancelAnimationFrame(this.#q),this.#q=null),this.#ge=e;let n=this.#At();return n.innerHTML=es(e,{allowImages:this.allowImages}),this.#b.follow(),n}#ne(){this.#q!==null&&this.#Xe(this.#ge),this.#me=null}#kt(e){let n=$p(e);return n===null?!1:(this.#ce("\u2728",this.#e.usingSkill.replace("{name}",n),"skill"),!0)}#ce(e,n,r){this.#R().appendChild(Al(e,n,r)),this.#T(),this.#b.follow()}enableCharts(e=["tool","activity"]){let n=!this.#u.has(io)&&!this.#r.has(Vi);e.includes("activity")&&this.registerActivityRenderer({type:io,render:r=>{let o=Yn(r);return o===null?null:kr(o)},removedNotice:this.#e.chartUndrawable}),e.includes("tool")&&this.registerTool(Od()),n&&this.isConnected&&this.reload()}#It(e,n){let r;try{r=e(n.args)}catch(o){console.warn(`ag-ui-chat: render failed for tool ${n.name}`,o);return}r!==null&&(this.#c.get(n.id)?.after(r),this.#Rt())}registerActivityRenderer(e){this.#u.set(e.type,e),this.#d.delete(e.type)}get unhandledActivityTypes(){return[...this.#d]}#Ye(e,n,r){let o=this.#u.get(n);if(o===void 0){this.#d.add(n);return}let i;try{i=o.render(r)}catch(a){console.warn(`ag-ui-chat: render failed for activity ${n}`,a),i=null}if(i===null){this.#In(e,n,o.removedNotice,r);return}let s=this.#p.get(e);s===void 0?this.#R().appendChild(i):s.replaceWith(i),this.#p.set(e,i),this.#Rt()}#In(e,n,r,o){let i=this.#p.has(e);this.#p.get(e)?.remove(),this.#p.delete(e),console.warn(`ag-ui-chat: activity ${e} (${n}) was not drawable and has been removed. A chart's points must each be a finite JSON number; a numeric column serialised as a string (a Decimal, typically) is rejected rather than coerced.`,o),i&&r!==void 0&&this.#ce("\u{1F4C9}",r,"chart-undrawable")}#Rt(){this.#T(),this.#b.follow()}#Ke(e){let n=this.#i.get(e.id);if(n!==void 0)return n;let r=this.#Pe(e.name)?.parameters[Ge],o=typeof r=="string"?r:this.toolSummaries[e.name]??this.#t[e.name]?.summary??il(e.name),i=new Fr(e.name,e.args,o,this.#e,{formatPayload:s=>this.formatToolPayload?.(s)??null});return this.#i.set(e.id,i),this.#R().appendChild(i.element),this.#T(),this.#b.follow(),i}};function Ux(t){let e=t.metadata?.[oo];return typeof e=="string"&&e.trim()!==""?e:void 0}function Hx(t){return Array.isArray(t)?t.filter(Fx):[]}function Fx(t){if(typeof t!="object"||t===null)return!1;let e=t;return typeof e.id=="string"&&typeof e.function?.name=="string"}function $p(t){if(t.name!==Bs)return null;let e=t.args?.id;return typeof e=="string"&&e!==""?e:null}function Gx(t){let e=t?.removed;return typeof e=="number"?e:null}function zx(){customElements.get(ro)===void 0&&customElements.define(ro,Vr)}async function $x(t,e,n={}){await Tt(t),await Ha(t,{...n,flashMs:n.flashMs??0}),await Da(t,e,n)}async function Bx(t,e={}){await Tt(t),await Ua(t,e)}async function Vx(t,e={}){await Tt(t),await Fa(t,e)}async function jx(t,e,n={}){await Tt(t),await Ga(t,e,n)}async function qx(t,e,n={}){await Tt(t),await za(t,e,n)}function Wx(t,e){t instanceof HTMLInputElement&&t.type==="checkbox"?_r(t,!!e):hn(t,String(e)),t.dispatchEvent(new Event("input",{bubbles:!0})),t.dispatchEvent(new Event("change",{bubbles:!0}))}var Xx="0.32.0";export{Ms as ATTACHMENT_EVENT,Vr as AgUiChat,tr as AgUiClient,io as CHART_ACTIVITY_TYPE,Vi as CHART_TOOL_NAME,$s as COMPACTION_ACTIVITY_TYPE,Ps as CUSTOM_AGENT_EVENT,Rr as CheckpointMenu,Tr as ClientToolRegistry,ss as ConnectionLostError,se as DEFAULT_UI_STRINGS,ro as ELEMENT_TAG,Us as FEEDBACK_EVENT,Fs as INVALIDATE_CUSTOM_NAME,Ds as INVALIDATE_EVENT,Bs as LOAD_CAPABILITY_TOOL,Tv as MAX_QUOTE_CHARS,wx as MAX_SUGGESTIONS,Tx as MAX_SUGGESTION_CHARS,kn as MAX_TOOL_ROUNDS,zt as MESSAGE_ACTIONS,We as MESSAGE_ROLE,$a as PAGE_ACTIONS,Ls as RUN_FINISHED_EVENT,$r as RemoteConversationStore,Br as RunIndex,Os as STATE_EVENT,Rs as SUBMIT_EVENT,Hs as SUGGESTIONS_ACTIVITY_TYPE,Qe as SessionStorageStore,Cs as TOGGLE_EVENT,ae as TOOL_CALL_STATUS,In as TOOL_DISPLAY,Fr as ToolCallCard,Ns as UNREAD_EVENT,Xx as VERSION,oo as X_CONFIRM_KEY,ar as X_DESTRUCTIVE_KEY,lr as X_NAVIGATES_KEY,Ge as X_SUMMARY_KEY,nl as asQuote,tl as attachMessageActions,ol as attachQuoteOffer,Yn as chartSpecFrom,Bx as clickElement,Nl as createHttpAgent,Ba as createPageActionTools,Va as createPageMapContext,Fi as createPageStateTools,qa as createRouteTools,Yb as createStateHookTools,zx as defineAgUiChat,$x as fillField,Vb as flash,Ha as focusWithFlash,Ua as highlightThenClick,Ma as isDestructive,Pi as isNavigates,Wa as mergeUiStrings,ji as messageActionBar,Rl as messageAttachments,ja as parseToolCatalog,Ui as prefersReducedMotion,Vx as pressButton,Fa as pressThenClick,il as prettifyToolName,Cr as quotableSelection,Ir as relativeTime,kr as renderChart,es as renderMarkdown,kl as renderSuggestionChips,Xa as requestApproval,el as requestConfirmation,sl as requestQuestion,Tt as scrollIntoCenterView,jx as selectControl,Ga as selectOption,Wx as setControlValue,_r as setNativeChecked,hn as setNativeValue,Np as suggestionPrompts,qx as toggleCheckbox,za as toggleControl,Ol as transcribeAudio,Da as typeInto,Ml as uploadAttachment};
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
