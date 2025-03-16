var aa={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gc=function(n){const t=[];let e=0;for(let r=0;r<n.length;r++){let s=n.charCodeAt(r);s<128?t[e++]=s:s<2048?(t[e++]=s>>6|192,t[e++]=s&63|128):(s&64512)===55296&&r+1<n.length&&(n.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(n.charCodeAt(++r)&1023),t[e++]=s>>18|240,t[e++]=s>>12&63|128,t[e++]=s>>6&63|128,t[e++]=s&63|128):(t[e++]=s>>12|224,t[e++]=s>>6&63|128,t[e++]=s&63|128)}return t},Ah=function(n){const t=[];let e=0,r=0;for(;e<n.length;){const s=n[e++];if(s<128)t[r++]=String.fromCharCode(s);else if(s>191&&s<224){const o=n[e++];t[r++]=String.fromCharCode((s&31)<<6|o&63)}else if(s>239&&s<365){const o=n[e++],a=n[e++],u=n[e++],h=((s&7)<<18|(o&63)<<12|(a&63)<<6|u&63)-65536;t[r++]=String.fromCharCode(55296+(h>>10)),t[r++]=String.fromCharCode(56320+(h&1023))}else{const o=n[e++],a=n[e++];t[r++]=String.fromCharCode((s&15)<<12|(o&63)<<6|a&63)}}return t.join("")},_c={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,t){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const e=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<n.length;s+=3){const o=n[s],a=s+1<n.length,u=a?n[s+1]:0,h=s+2<n.length,d=h?n[s+2]:0,p=o>>2,v=(o&3)<<4|u>>4;let I=(u&15)<<2|d>>6,b=d&63;h||(b=64,a||(I=64)),r.push(e[p],e[v],e[I],e[b])}return r.join("")},encodeString(n,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(n):this.encodeByteArray(gc(n),t)},decodeString(n,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(n):Ah(this.decodeStringToByteArray(n,t))},decodeStringToByteArray(n,t){this.init_();const e=t?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<n.length;){const o=e[n.charAt(s++)],u=s<n.length?e[n.charAt(s)]:0;++s;const d=s<n.length?e[n.charAt(s)]:64;++s;const v=s<n.length?e[n.charAt(s)]:64;if(++s,o==null||u==null||d==null||v==null)throw new Rh;const I=o<<2|u>>4;if(r.push(I),d!==64){const b=u<<4&240|d>>2;if(r.push(b),v!==64){const D=d<<6&192|v;r.push(D)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class Rh extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const bh=function(n){const t=gc(n);return _c.encodeByteArray(t,!0)},Ir=function(n){return bh(n).replace(/\./g,"")},Sh=function(n){try{return _c.decodeString(n,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ph(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ch=()=>Ph().__FIREBASE_DEFAULTS__,Dh=()=>{if(typeof process>"u"||typeof aa>"u")return;const n=aa.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},Vh=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const t=n&&Sh(n[1]);return t&&JSON.parse(t)},Mr=()=>{try{return Ch()||Dh()||Vh()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},kh=n=>{var t,e;return(e=(t=Mr())===null||t===void 0?void 0:t.emulatorHosts)===null||e===void 0?void 0:e[n]},yc=n=>{const t=kh(n);if(!t)return;const e=t.lastIndexOf(":");if(e<=0||e+1===t.length)throw new Error(`Invalid host ${t} with no separate hostname and port!`);const r=parseInt(t.substring(e+1),10);return t[0]==="["?[t.substring(1,e-1),r]:[t.substring(0,e),r]},Ec=()=>{var n;return(n=Mr())===null||n===void 0?void 0:n.config},Fy=n=>{var t;return(t=Mr())===null||t===void 0?void 0:t[`_${n}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nh{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((t,e)=>{this.resolve=t,this.reject=e})}wrapCallback(t){return(e,r)=>{e?this.reject(e):this.resolve(r),typeof t=="function"&&(this.promise.catch(()=>{}),t.length===1?t(e):t(e,r))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Tc(n,t){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const e={alg:"none",type:"JWT"},r=t||"demo-project",s=n.iat||0,o=n.sub||n.user_id;if(!o)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const a=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:s,exp:s+3600,auth_time:s,sub:o,user_id:o,firebase:{sign_in_provider:"custom",identities:{}}},n);return[Ir(JSON.stringify(e)),Ir(JSON.stringify(a)),""].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function di(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Uy(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(di())}function Oh(){var n;const t=(n=Mr())===null||n===void 0?void 0:n.forceEnvironment;if(t==="node")return!0;if(t==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function xh(){const n=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof n=="object"&&n.id!==void 0}function By(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function qy(){const n=di();return n.indexOf("MSIE ")>=0||n.indexOf("Trident/")>=0}function Mh(){return!Oh()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function vc(){try{return typeof indexedDB=="object"}catch{return!1}}function wc(){return new Promise((n,t)=>{try{let e=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),e||self.indexedDB.deleteDatabase(r),n(!0)},s.onupgradeneeded=()=>{e=!1},s.onerror=()=>{var o;t(((o=s.error)===null||o===void 0?void 0:o.message)||"")}}catch(e){t(e)}})}function Lh(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fh="FirebaseError";class Jt extends Error{constructor(t,e,r){super(e),this.code=t,this.customData=r,this.name=Fh,Object.setPrototypeOf(this,Jt.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Lr.prototype.create)}}class Lr{constructor(t,e,r){this.service=t,this.serviceName=e,this.errors=r}create(t,...e){const r=e[0]||{},s=`${this.service}/${t}`,o=this.errors[t],a=o?Uh(o,r):"Error",u=`${this.serviceName}: ${a} (${s}).`;return new Jt(s,u,r)}}function Uh(n,t){return n.replace(Bh,(e,r)=>{const s=t[r];return s!=null?String(s):`<${r}?>`})}const Bh=/\{\$([^}]+)}/g;function jy(n){for(const t in n)if(Object.prototype.hasOwnProperty.call(n,t))return!1;return!0}function Nn(n,t){if(n===t)return!0;const e=Object.keys(n),r=Object.keys(t);for(const s of e){if(!r.includes(s))return!1;const o=n[s],a=t[s];if(ca(o)&&ca(a)){if(!Nn(o,a))return!1}else if(o!==a)return!1}for(const s of r)if(!e.includes(s))return!1;return!0}function ca(n){return n!==null&&typeof n=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $y(n){const t=[];for(const[e,r]of Object.entries(n))Array.isArray(r)?r.forEach(s=>{t.push(encodeURIComponent(e)+"="+encodeURIComponent(s))}):t.push(encodeURIComponent(e)+"="+encodeURIComponent(r));return t.length?"&"+t.join("&"):""}function zy(n){const t={};return n.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[s,o]=r.split("=");t[decodeURIComponent(s)]=decodeURIComponent(o)}}),t}function Hy(n){const t=n.indexOf("?");if(!t)return"";const e=n.indexOf("#",t);return n.substring(t,e>0?e:void 0)}function Gy(n,t){const e=new qh(n,t);return e.subscribe.bind(e)}class qh{constructor(t,e){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=e,this.task.then(()=>{t(this)}).catch(r=>{this.error(r)})}next(t){this.forEachObserver(e=>{e.next(t)})}error(t){this.forEachObserver(e=>{e.error(t)}),this.close(t)}complete(){this.forEachObserver(t=>{t.complete()}),this.close()}subscribe(t,e,r){let s;if(t===void 0&&e===void 0&&r===void 0)throw new Error("Missing Observer.");jh(t,["next","error","complete"])?s=t:s={next:t,error:e,complete:r},s.next===void 0&&(s.next=Cs),s.error===void 0&&(s.error=Cs),s.complete===void 0&&(s.complete=Cs);const o=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),o}unsubscribeOne(t){this.observers===void 0||this.observers[t]===void 0||(delete this.observers[t],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(t){if(!this.finalized)for(let e=0;e<this.observers.length;e++)this.sendOne(e,t)}sendOne(t,e){this.task.then(()=>{if(this.observers!==void 0&&this.observers[t]!==void 0)try{e(this.observers[t])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(t){this.finalized||(this.finalized=!0,t!==void 0&&(this.finalError=t),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function jh(n,t){if(typeof n!="object"||n===null)return!1;for(const e of t)if(e in n&&typeof n[e]=="function")return!0;return!1}function Cs(){}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $h=1e3,zh=2,Hh=4*60*60*1e3,Gh=.5;function ua(n,t=$h,e=zh){const r=t*Math.pow(e,n),s=Math.round(Gh*r*(Math.random()-.5)*2);return Math.min(Hh,r+s)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dt(n){return n&&n._delegate?n._delegate:n}class qt{constructor(t,e,r){this.name=t,this.instanceFactory=e,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ge="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kh{constructor(t,e){this.name=t,this.container=e,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){const e=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(e)){const r=new Nh;if(this.instancesDeferred.set(e,r),this.isInitialized(e)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:e});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(e).promise}getImmediate(t){var e;const r=this.normalizeInstanceIdentifier(t==null?void 0:t.identifier),s=(e=t==null?void 0:t.optional)!==null&&e!==void 0?e:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(o){if(s)return null;throw o}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,!!this.shouldAutoInitialize()){if(Qh(t))try{this.getOrInitializeService({instanceIdentifier:ge})}catch{}for(const[e,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(e);try{const o=this.getOrInitializeService({instanceIdentifier:s});r.resolve(o)}catch{}}}}clearInstance(t=ge){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter(e=>"INTERNAL"in e).map(e=>e.INTERNAL.delete()),...t.filter(e=>"_delete"in e).map(e=>e._delete())])}isComponentSet(){return this.component!=null}isInitialized(t=ge){return this.instances.has(t)}getOptions(t=ge){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:e={}}=t,r=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:e});for(const[o,a]of this.instancesDeferred.entries()){const u=this.normalizeInstanceIdentifier(o);r===u&&a.resolve(s)}return s}onInit(t,e){var r;const s=this.normalizeInstanceIdentifier(e),o=(r=this.onInitCallbacks.get(s))!==null&&r!==void 0?r:new Set;o.add(t),this.onInitCallbacks.set(s,o);const a=this.instances.get(s);return a&&t(a,s),()=>{o.delete(t)}}invokeOnInitCallbacks(t,e){const r=this.onInitCallbacks.get(e);if(r)for(const s of r)try{s(t,e)}catch{}}getOrInitializeService({instanceIdentifier:t,options:e={}}){let r=this.instances.get(t);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:Wh(t),options:e}),this.instances.set(t,r),this.instancesOptions.set(t,e),this.invokeOnInitCallbacks(r,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,r)}catch{}return r||null}normalizeInstanceIdentifier(t=ge){return this.component?this.component.multipleInstances?t:ge:t}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Wh(n){return n===ge?void 0:n}function Qh(n){return n.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xh{constructor(t){this.name=t,this.providers=new Map}addComponent(t){const e=this.getProvider(t.name);if(e.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);e.setComponent(t)}addOrOverwriteComponent(t){this.getProvider(t.name).isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const e=new Kh(t,this);return this.providers.set(t,e),e}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var H;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(H||(H={}));const Yh={debug:H.DEBUG,verbose:H.VERBOSE,info:H.INFO,warn:H.WARN,error:H.ERROR,silent:H.SILENT},Jh=H.INFO,Zh={[H.DEBUG]:"log",[H.VERBOSE]:"log",[H.INFO]:"info",[H.WARN]:"warn",[H.ERROR]:"error"},td=(n,t,...e)=>{if(t<n.logLevel)return;const r=new Date().toISOString(),s=Zh[t];if(s)console[s](`[${r}]  ${n.name}:`,...e);else throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`)};class fi{constructor(t){this.name=t,this._logLevel=Jh,this._logHandler=td,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in H))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel=typeof t=="string"?Yh[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if(typeof t!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,H.DEBUG,...t),this._logHandler(this,H.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,H.VERBOSE,...t),this._logHandler(this,H.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,H.INFO,...t),this._logHandler(this,H.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,H.WARN,...t),this._logHandler(this,H.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,H.ERROR,...t),this._logHandler(this,H.ERROR,...t)}}const ed=(n,t)=>t.some(e=>n instanceof e);let la,ha;function nd(){return la||(la=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function rd(){return ha||(ha=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Ic=new WeakMap,zs=new WeakMap,Ac=new WeakMap,Ds=new WeakMap,pi=new WeakMap;function sd(n){const t=new Promise((e,r)=>{const s=()=>{n.removeEventListener("success",o),n.removeEventListener("error",a)},o=()=>{e(ie(n.result)),s()},a=()=>{r(n.error),s()};n.addEventListener("success",o),n.addEventListener("error",a)});return t.then(e=>{e instanceof IDBCursor&&Ic.set(e,n)}).catch(()=>{}),pi.set(t,n),t}function id(n){if(zs.has(n))return;const t=new Promise((e,r)=>{const s=()=>{n.removeEventListener("complete",o),n.removeEventListener("error",a),n.removeEventListener("abort",a)},o=()=>{e(),s()},a=()=>{r(n.error||new DOMException("AbortError","AbortError")),s()};n.addEventListener("complete",o),n.addEventListener("error",a),n.addEventListener("abort",a)});zs.set(n,t)}let Hs={get(n,t,e){if(n instanceof IDBTransaction){if(t==="done")return zs.get(n);if(t==="objectStoreNames")return n.objectStoreNames||Ac.get(n);if(t==="store")return e.objectStoreNames[1]?void 0:e.objectStore(e.objectStoreNames[0])}return ie(n[t])},set(n,t,e){return n[t]=e,!0},has(n,t){return n instanceof IDBTransaction&&(t==="done"||t==="store")?!0:t in n}};function od(n){Hs=n(Hs)}function ad(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(t,...e){const r=n.call(Vs(this),t,...e);return Ac.set(r,t.sort?t.sort():[t]),ie(r)}:rd().includes(n)?function(...t){return n.apply(Vs(this),t),ie(Ic.get(this))}:function(...t){return ie(n.apply(Vs(this),t))}}function cd(n){return typeof n=="function"?ad(n):(n instanceof IDBTransaction&&id(n),ed(n,nd())?new Proxy(n,Hs):n)}function ie(n){if(n instanceof IDBRequest)return sd(n);if(Ds.has(n))return Ds.get(n);const t=cd(n);return t!==n&&(Ds.set(n,t),pi.set(t,n)),t}const Vs=n=>pi.get(n);function Rc(n,t,{blocked:e,upgrade:r,blocking:s,terminated:o}={}){const a=indexedDB.open(n,t),u=ie(a);return r&&a.addEventListener("upgradeneeded",h=>{r(ie(a.result),h.oldVersion,h.newVersion,ie(a.transaction),h)}),e&&a.addEventListener("blocked",h=>e(h.oldVersion,h.newVersion,h)),u.then(h=>{o&&h.addEventListener("close",()=>o()),s&&h.addEventListener("versionchange",d=>s(d.oldVersion,d.newVersion,d))}).catch(()=>{}),u}const ud=["get","getKey","getAll","getAllKeys","count"],ld=["put","add","delete","clear"],ks=new Map;function da(n,t){if(!(n instanceof IDBDatabase&&!(t in n)&&typeof t=="string"))return;if(ks.get(t))return ks.get(t);const e=t.replace(/FromIndex$/,""),r=t!==e,s=ld.includes(e);if(!(e in(r?IDBIndex:IDBObjectStore).prototype)||!(s||ud.includes(e)))return;const o=async function(a,...u){const h=this.transaction(a,s?"readwrite":"readonly");let d=h.store;return r&&(d=d.index(u.shift())),(await Promise.all([d[e](...u),s&&h.done]))[0]};return ks.set(t,o),o}od(n=>({...n,get:(t,e,r)=>da(t,e)||n.get(t,e,r),has:(t,e)=>!!da(t,e)||n.has(t,e)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hd{constructor(t){this.container=t}getPlatformInfoString(){return this.container.getProviders().map(e=>{if(dd(e)){const r=e.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(e=>e).join(" ")}}function dd(n){const t=n.getComponent();return(t==null?void 0:t.type)==="VERSION"}const Gs="@firebase/app",fa="0.10.5";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ve=new fi("@firebase/app"),fd="@firebase/app-compat",pd="@firebase/analytics-compat",md="@firebase/analytics",gd="@firebase/app-check-compat",_d="@firebase/app-check",yd="@firebase/auth",Ed="@firebase/auth-compat",Td="@firebase/database",vd="@firebase/database-compat",wd="@firebase/functions",Id="@firebase/functions-compat",Ad="@firebase/installations",Rd="@firebase/installations-compat",bd="@firebase/messaging",Sd="@firebase/messaging-compat",Pd="@firebase/performance",Cd="@firebase/performance-compat",Dd="@firebase/remote-config",Vd="@firebase/remote-config-compat",kd="@firebase/storage",Nd="@firebase/storage-compat",Od="@firebase/firestore",xd="@firebase/vertexai-preview",Md="@firebase/firestore-compat",Ld="firebase",Fd="10.12.2";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ks="[DEFAULT]",Ud={[Gs]:"fire-core",[fd]:"fire-core-compat",[md]:"fire-analytics",[pd]:"fire-analytics-compat",[_d]:"fire-app-check",[gd]:"fire-app-check-compat",[yd]:"fire-auth",[Ed]:"fire-auth-compat",[Td]:"fire-rtdb",[vd]:"fire-rtdb-compat",[wd]:"fire-fn",[Id]:"fire-fn-compat",[Ad]:"fire-iid",[Rd]:"fire-iid-compat",[bd]:"fire-fcm",[Sd]:"fire-fcm-compat",[Pd]:"fire-perf",[Cd]:"fire-perf-compat",[Dd]:"fire-rc",[Vd]:"fire-rc-compat",[kd]:"fire-gcs",[Nd]:"fire-gcs-compat",[Od]:"fire-fst",[Md]:"fire-fst-compat",[xd]:"fire-vertex","fire-js":"fire-js",[Ld]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ar=new Map,Bd=new Map,Ws=new Map;function pa(n,t){try{n.container.addComponent(t)}catch(e){ve.debug(`Component ${t.name} failed to register with FirebaseApp ${n.name}`,e)}}function Qt(n){const t=n.name;if(Ws.has(t))return ve.debug(`There were multiple attempts to register component ${t}.`),!1;Ws.set(t,n);for(const e of Ar.values())pa(e,n);for(const e of Bd.values())pa(e,n);return!0}function Qe(n,t){const e=n.container.getProvider("heartbeat").getImmediate({optional:!0});return e&&e.triggerHeartbeat(),n.container.getProvider(t)}function Ky(n){return n.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qd={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},oe=new Lr("app","Firebase",qd);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jd{constructor(t,e,r){this._isDeleted=!1,this._options=Object.assign({},t),this._config=Object.assign({},e),this._name=e.name,this._automaticDataCollectionEnabled=e.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new qt("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw oe.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bc=Fd;function Sc(n,t={}){let e=n;typeof t!="object"&&(t={name:t});const r=Object.assign({name:Ks,automaticDataCollectionEnabled:!1},t),s=r.name;if(typeof s!="string"||!s)throw oe.create("bad-app-name",{appName:String(s)});if(e||(e=Ec()),!e)throw oe.create("no-options");const o=Ar.get(s);if(o){if(Nn(e,o.options)&&Nn(r,o.config))return o;throw oe.create("duplicate-app",{appName:s})}const a=new Xh(s);for(const h of Ws.values())a.addComponent(h);const u=new jd(e,r,a);return Ar.set(s,u),u}function mi(n=Ks){const t=Ar.get(n);if(!t&&n===Ks&&Ec())return Sc();if(!t)throw oe.create("no-app",{appName:n});return t}function Nt(n,t,e){var r;let s=(r=Ud[n])!==null&&r!==void 0?r:n;e&&(s+=`-${e}`);const o=s.match(/\s|\//),a=t.match(/\s|\//);if(o||a){const u=[`Unable to register library "${s}" with version "${t}":`];o&&u.push(`library name "${s}" contains illegal characters (whitespace or "/")`),o&&a&&u.push("and"),a&&u.push(`version name "${t}" contains illegal characters (whitespace or "/")`),ve.warn(u.join(" "));return}Qt(new qt(`${s}-version`,()=>({library:s,version:t}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $d="firebase-heartbeat-database",zd=1,On="firebase-heartbeat-store";let Ns=null;function Pc(){return Ns||(Ns=Rc($d,zd,{upgrade:(n,t)=>{switch(t){case 0:try{n.createObjectStore(On)}catch(e){console.warn(e)}}}}).catch(n=>{throw oe.create("idb-open",{originalErrorMessage:n.message})})),Ns}async function Hd(n){try{const e=(await Pc()).transaction(On),r=await e.objectStore(On).get(Cc(n));return await e.done,r}catch(t){if(t instanceof Jt)ve.warn(t.message);else{const e=oe.create("idb-get",{originalErrorMessage:t==null?void 0:t.message});ve.warn(e.message)}}}async function ma(n,t){try{const r=(await Pc()).transaction(On,"readwrite");await r.objectStore(On).put(t,Cc(n)),await r.done}catch(e){if(e instanceof Jt)ve.warn(e.message);else{const r=oe.create("idb-set",{originalErrorMessage:e==null?void 0:e.message});ve.warn(r.message)}}}function Cc(n){return`${n.name}!${n.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gd=1024,Kd=30*24*60*60*1e3;class Wd{constructor(t){this.container=t,this._heartbeatsCache=null;const e=this.container.getProvider("app").getImmediate();this._storage=new Xd(e),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var t,e;const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),o=ga();if(!(((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null))&&!(this._heartbeatsCache.lastSentHeartbeatDate===o||this._heartbeatsCache.heartbeats.some(a=>a.date===o)))return this._heartbeatsCache.heartbeats.push({date:o,agent:s}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(a=>{const u=new Date(a.date).valueOf();return Date.now()-u<=Kd}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){var t;if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const e=ga(),{heartbeatsToSend:r,unsentEntries:s}=Qd(this._heartbeatsCache.heartbeats),o=Ir(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=e,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),o}}function ga(){return new Date().toISOString().substring(0,10)}function Qd(n,t=Gd){const e=[];let r=n.slice();for(const s of n){const o=e.find(a=>a.agent===s.agent);if(o){if(o.dates.push(s.date),_a(e)>t){o.dates.pop();break}}else if(e.push({agent:s.agent,dates:[s.date]}),_a(e)>t){e.pop();break}r=r.slice(1)}return{heartbeatsToSend:e,unsentEntries:r}}class Xd{constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return vc()?wc().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const e=await Hd(this.app);return e!=null&&e.heartbeats?e:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(t){var e;if(await this._canUseIndexedDBPromise){const s=await this.read();return ma(this.app,{lastSentHeartbeatDate:(e=t.lastSentHeartbeatDate)!==null&&e!==void 0?e:s.lastSentHeartbeatDate,heartbeats:t.heartbeats})}else return}async add(t){var e;if(await this._canUseIndexedDBPromise){const s=await this.read();return ma(this.app,{lastSentHeartbeatDate:(e=t.lastSentHeartbeatDate)!==null&&e!==void 0?e:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...t.heartbeats]})}else return}}function _a(n){return Ir(JSON.stringify({version:2,heartbeats:n})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Yd(n){Qt(new qt("platform-logger",t=>new hd(t),"PRIVATE")),Qt(new qt("heartbeat",t=>new Wd(t),"PRIVATE")),Nt(Gs,fa,n),Nt(Gs,fa,"esm2017"),Nt("fire-js","")}Yd("");var Jd="firebase",Zd="10.12.2";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Nt(Jd,Zd,"app");const Dc="@firebase/installations",gi="0.6.7";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vc=1e4,kc=`w:${gi}`,Nc="FIS_v2",tf="https://firebaseinstallations.googleapis.com/v1",ef=60*60*1e3,nf="installations",rf="Installations";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sf={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."},we=new Lr(nf,rf,sf);function Oc(n){return n instanceof Jt&&n.code.includes("request-failed")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xc({projectId:n}){return`${tf}/projects/${n}/installations`}function Mc(n){return{token:n.token,requestStatus:2,expiresIn:af(n.expiresIn),creationTime:Date.now()}}async function Lc(n,t){const r=(await t.json()).error;return we.create("request-failed",{requestName:n,serverCode:r.code,serverMessage:r.message,serverStatus:r.status})}function Fc({apiKey:n}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":n})}function of(n,{refreshToken:t}){const e=Fc(n);return e.append("Authorization",cf(t)),e}async function Uc(n){const t=await n();return t.status>=500&&t.status<600?n():t}function af(n){return Number(n.replace("s","000"))}function cf(n){return`${Nc} ${n}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function uf({appConfig:n,heartbeatServiceProvider:t},{fid:e}){const r=xc(n),s=Fc(n),o=t.getImmediate({optional:!0});if(o){const d=await o.getHeartbeatsHeader();d&&s.append("x-firebase-client",d)}const a={fid:e,authVersion:Nc,appId:n.appId,sdkVersion:kc},u={method:"POST",headers:s,body:JSON.stringify(a)},h=await Uc(()=>fetch(r,u));if(h.ok){const d=await h.json();return{fid:d.fid||e,registrationStatus:2,refreshToken:d.refreshToken,authToken:Mc(d.authToken)}}else throw await Lc("Create Installation",h)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Bc(n){return new Promise(t=>{setTimeout(t,n)})}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lf(n){return btoa(String.fromCharCode(...n)).replace(/\+/g,"-").replace(/\//g,"_")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hf=/^[cdef][\w-]{21}$/,Qs="";function df(){try{const n=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(n),n[0]=112+n[0]%16;const e=ff(n);return hf.test(e)?e:Qs}catch{return Qs}}function ff(n){return lf(n).substr(0,22)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fr(n){return`${n.appName}!${n.appId}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qc=new Map;function jc(n,t){const e=Fr(n);$c(e,t),pf(e,t)}function $c(n,t){const e=qc.get(n);if(e)for(const r of e)r(t)}function pf(n,t){const e=mf();e&&e.postMessage({key:n,fid:t}),gf()}let _e=null;function mf(){return!_e&&"BroadcastChannel"in self&&(_e=new BroadcastChannel("[Firebase] FID Change"),_e.onmessage=n=>{$c(n.data.key,n.data.fid)}),_e}function gf(){qc.size===0&&_e&&(_e.close(),_e=null)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _f="firebase-installations-database",yf=1,Ie="firebase-installations-store";let Os=null;function _i(){return Os||(Os=Rc(_f,yf,{upgrade:(n,t)=>{switch(t){case 0:n.createObjectStore(Ie)}}})),Os}async function Rr(n,t){const e=Fr(n),s=(await _i()).transaction(Ie,"readwrite"),o=s.objectStore(Ie),a=await o.get(e);return await o.put(t,e),await s.done,(!a||a.fid!==t.fid)&&jc(n,t.fid),t}async function zc(n){const t=Fr(n),r=(await _i()).transaction(Ie,"readwrite");await r.objectStore(Ie).delete(t),await r.done}async function Ur(n,t){const e=Fr(n),s=(await _i()).transaction(Ie,"readwrite"),o=s.objectStore(Ie),a=await o.get(e),u=t(a);return u===void 0?await o.delete(e):await o.put(u,e),await s.done,u&&(!a||a.fid!==u.fid)&&jc(n,u.fid),u}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function yi(n){let t;const e=await Ur(n.appConfig,r=>{const s=Ef(r),o=Tf(n,s);return t=o.registrationPromise,o.installationEntry});return e.fid===Qs?{installationEntry:await t}:{installationEntry:e,registrationPromise:t}}function Ef(n){const t=n||{fid:df(),registrationStatus:0};return Hc(t)}function Tf(n,t){if(t.registrationStatus===0){if(!navigator.onLine){const s=Promise.reject(we.create("app-offline"));return{installationEntry:t,registrationPromise:s}}const e={fid:t.fid,registrationStatus:1,registrationTime:Date.now()},r=vf(n,e);return{installationEntry:e,registrationPromise:r}}else return t.registrationStatus===1?{installationEntry:t,registrationPromise:wf(n)}:{installationEntry:t}}async function vf(n,t){try{const e=await uf(n,t);return Rr(n.appConfig,e)}catch(e){throw Oc(e)&&e.customData.serverCode===409?await zc(n.appConfig):await Rr(n.appConfig,{fid:t.fid,registrationStatus:0}),e}}async function wf(n){let t=await ya(n.appConfig);for(;t.registrationStatus===1;)await Bc(100),t=await ya(n.appConfig);if(t.registrationStatus===0){const{installationEntry:e,registrationPromise:r}=await yi(n);return r||e}return t}function ya(n){return Ur(n,t=>{if(!t)throw we.create("installation-not-found");return Hc(t)})}function Hc(n){return If(n)?{fid:n.fid,registrationStatus:0}:n}function If(n){return n.registrationStatus===1&&n.registrationTime+Vc<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Af({appConfig:n,heartbeatServiceProvider:t},e){const r=Rf(n,e),s=of(n,e),o=t.getImmediate({optional:!0});if(o){const d=await o.getHeartbeatsHeader();d&&s.append("x-firebase-client",d)}const a={installation:{sdkVersion:kc,appId:n.appId}},u={method:"POST",headers:s,body:JSON.stringify(a)},h=await Uc(()=>fetch(r,u));if(h.ok){const d=await h.json();return Mc(d)}else throw await Lc("Generate Auth Token",h)}function Rf(n,{fid:t}){return`${xc(n)}/${t}/authTokens:generate`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ei(n,t=!1){let e;const r=await Ur(n.appConfig,o=>{if(!Gc(o))throw we.create("not-registered");const a=o.authToken;if(!t&&Pf(a))return o;if(a.requestStatus===1)return e=bf(n,t),o;{if(!navigator.onLine)throw we.create("app-offline");const u=Df(o);return e=Sf(n,u),u}});return e?await e:r.authToken}async function bf(n,t){let e=await Ea(n.appConfig);for(;e.authToken.requestStatus===1;)await Bc(100),e=await Ea(n.appConfig);const r=e.authToken;return r.requestStatus===0?Ei(n,t):r}function Ea(n){return Ur(n,t=>{if(!Gc(t))throw we.create("not-registered");const e=t.authToken;return Vf(e)?Object.assign(Object.assign({},t),{authToken:{requestStatus:0}}):t})}async function Sf(n,t){try{const e=await Af(n,t),r=Object.assign(Object.assign({},t),{authToken:e});return await Rr(n.appConfig,r),e}catch(e){if(Oc(e)&&(e.customData.serverCode===401||e.customData.serverCode===404))await zc(n.appConfig);else{const r=Object.assign(Object.assign({},t),{authToken:{requestStatus:0}});await Rr(n.appConfig,r)}throw e}}function Gc(n){return n!==void 0&&n.registrationStatus===2}function Pf(n){return n.requestStatus===2&&!Cf(n)}function Cf(n){const t=Date.now();return t<n.creationTime||n.creationTime+n.expiresIn<t+ef}function Df(n){const t={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},n),{authToken:t})}function Vf(n){return n.requestStatus===1&&n.requestTime+Vc<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function kf(n){const t=n,{installationEntry:e,registrationPromise:r}=await yi(t);return r?r.catch(console.error):Ei(t).catch(console.error),e.fid}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Nf(n,t=!1){const e=n;return await Of(e),(await Ei(e,t)).token}async function Of(n){const{registrationPromise:t}=await yi(n);t&&await t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xf(n){if(!n||!n.options)throw xs("App Configuration");if(!n.name)throw xs("App Name");const t=["projectId","apiKey","appId"];for(const e of t)if(!n.options[e])throw xs(e);return{appName:n.name,projectId:n.options.projectId,apiKey:n.options.apiKey,appId:n.options.appId}}function xs(n){return we.create("missing-app-config-values",{valueName:n})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Kc="installations",Mf="installations-internal",Lf=n=>{const t=n.getProvider("app").getImmediate(),e=xf(t),r=Qe(t,"heartbeat");return{app:t,appConfig:e,heartbeatServiceProvider:r,_delete:()=>Promise.resolve()}},Ff=n=>{const t=n.getProvider("app").getImmediate(),e=Qe(t,Kc).getImmediate();return{getId:()=>kf(e),getToken:s=>Nf(e,s)}};function Uf(){Qt(new qt(Kc,Lf,"PUBLIC")),Qt(new qt(Mf,Ff,"PRIVATE"))}Uf();Nt(Dc,gi);Nt(Dc,gi,"esm2017");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const br="analytics",Bf="firebase_id",qf="origin",jf=60*1e3,$f="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",Ti="https://www.googletagmanager.com/gtag/js";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pt=new fi("@firebase/analytics");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zf={"already-exists":"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.","already-initialized":"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-intialized instance.","already-initialized-settings":"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.","interop-component-reg-failed":"Firebase Analytics Interop Component failed to instantiate: {$reason}","invalid-analytics-context":"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","indexeddb-unavailable":"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","fetch-throttle":"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.","config-fetch-failed":"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}","no-api-key":'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',"no-app-id":'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.',"no-client-id":'The "client_id" field is empty.',"invalid-gtag-resource":"Trusted Types detected an invalid gtag resource: {$gtagURL}."},kt=new Lr("analytics","Analytics",zf);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Hf(n){if(!n.startsWith(Ti)){const t=kt.create("invalid-gtag-resource",{gtagURL:n});return Pt.warn(t.message),""}return n}function Wc(n){return Promise.all(n.map(t=>t.catch(e=>e)))}function Gf(n,t){let e;return window.trustedTypes&&(e=window.trustedTypes.createPolicy(n,t)),e}function Kf(n,t){const e=Gf("firebase-js-sdk-policy",{createScriptURL:Hf}),r=document.createElement("script"),s=`${Ti}?l=${n}&id=${t}`;r.src=e?e==null?void 0:e.createScriptURL(s):s,r.async=!0,document.head.appendChild(r)}function Wf(n){let t=[];return Array.isArray(window[n])?t=window[n]:window[n]=t,t}async function Qf(n,t,e,r,s,o){const a=r[s];try{if(a)await t[a];else{const h=(await Wc(e)).find(d=>d.measurementId===s);h&&await t[h.appId]}}catch(u){Pt.error(u)}n("config",s,o)}async function Xf(n,t,e,r,s){try{let o=[];if(s&&s.send_to){let a=s.send_to;Array.isArray(a)||(a=[a]);const u=await Wc(e);for(const h of a){const d=u.find(v=>v.measurementId===h),p=d&&t[d.appId];if(p)o.push(p);else{o=[];break}}}o.length===0&&(o=Object.values(t)),await Promise.all(o),n("event",r,s||{})}catch(o){Pt.error(o)}}function Yf(n,t,e,r){async function s(o,...a){try{if(o==="event"){const[u,h]=a;await Xf(n,t,e,u,h)}else if(o==="config"){const[u,h]=a;await Qf(n,t,e,r,u,h)}else if(o==="consent"){const[u,h]=a;n("consent",u,h)}else if(o==="get"){const[u,h,d]=a;n("get",u,h,d)}else if(o==="set"){const[u]=a;n("set",u)}else n(o,...a)}catch(u){Pt.error(u)}}return s}function Jf(n,t,e,r,s){let o=function(...a){window[r].push(arguments)};return window[s]&&typeof window[s]=="function"&&(o=window[s]),window[s]=Yf(o,n,t,e),{gtagCore:o,wrappedGtag:window[s]}}function Zf(n){const t=window.document.getElementsByTagName("script");for(const e of Object.values(t))if(e.src&&e.src.includes(Ti)&&e.src.includes(n))return e;return null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tp=30,ep=1e3;class np{constructor(t={},e=ep){this.throttleMetadata=t,this.intervalMillis=e}getThrottleMetadata(t){return this.throttleMetadata[t]}setThrottleMetadata(t,e){this.throttleMetadata[t]=e}deleteThrottleMetadata(t){delete this.throttleMetadata[t]}}const Qc=new np;function rp(n){return new Headers({Accept:"application/json","x-goog-api-key":n})}async function sp(n){var t;const{appId:e,apiKey:r}=n,s={method:"GET",headers:rp(r)},o=$f.replace("{app-id}",e),a=await fetch(o,s);if(a.status!==200&&a.status!==304){let u="";try{const h=await a.json();!((t=h.error)===null||t===void 0)&&t.message&&(u=h.error.message)}catch{}throw kt.create("config-fetch-failed",{httpStatus:a.status,responseMessage:u})}return a.json()}async function ip(n,t=Qc,e){const{appId:r,apiKey:s,measurementId:o}=n.options;if(!r)throw kt.create("no-app-id");if(!s){if(o)return{measurementId:o,appId:r};throw kt.create("no-api-key")}const a=t.getThrottleMetadata(r)||{backoffCount:0,throttleEndTimeMillis:Date.now()},u=new cp;return setTimeout(async()=>{u.abort()},jf),Xc({appId:r,apiKey:s,measurementId:o},a,u,t)}async function Xc(n,{throttleEndTimeMillis:t,backoffCount:e},r,s=Qc){var o;const{appId:a,measurementId:u}=n;try{await op(r,t)}catch(h){if(u)return Pt.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${u} provided in the "measurementId" field in the local Firebase config. [${h==null?void 0:h.message}]`),{appId:a,measurementId:u};throw h}try{const h=await sp(n);return s.deleteThrottleMetadata(a),h}catch(h){const d=h;if(!ap(d)){if(s.deleteThrottleMetadata(a),u)return Pt.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${u} provided in the "measurementId" field in the local Firebase config. [${d==null?void 0:d.message}]`),{appId:a,measurementId:u};throw h}const p=Number((o=d==null?void 0:d.customData)===null||o===void 0?void 0:o.httpStatus)===503?ua(e,s.intervalMillis,tp):ua(e,s.intervalMillis),v={throttleEndTimeMillis:Date.now()+p,backoffCount:e+1};return s.setThrottleMetadata(a,v),Pt.debug(`Calling attemptFetch again in ${p} millis`),Xc(n,v,r,s)}}function op(n,t){return new Promise((e,r)=>{const s=Math.max(t-Date.now(),0),o=setTimeout(e,s);n.addEventListener(()=>{clearTimeout(o),r(kt.create("fetch-throttle",{throttleEndTimeMillis:t}))})})}function ap(n){if(!(n instanceof Jt)||!n.customData)return!1;const t=Number(n.customData.httpStatus);return t===429||t===500||t===503||t===504}class cp{constructor(){this.listeners=[]}addEventListener(t){this.listeners.push(t)}abort(){this.listeners.forEach(t=>t())}}async function up(n,t,e,r,s){if(s&&s.global){n("event",e,r);return}else{const o=await t,a=Object.assign(Object.assign({},r),{send_to:o});n("event",e,a)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function lp(){if(vc())try{await wc()}catch(n){return Pt.warn(kt.create("indexeddb-unavailable",{errorInfo:n==null?void 0:n.toString()}).message),!1}else return Pt.warn(kt.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;return!0}async function hp(n,t,e,r,s,o,a){var u;const h=ip(n);h.then(b=>{e[b.measurementId]=b.appId,n.options.measurementId&&b.measurementId!==n.options.measurementId&&Pt.warn(`The measurement ID in the local Firebase config (${n.options.measurementId}) does not match the measurement ID fetched from the server (${b.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(b=>Pt.error(b)),t.push(h);const d=lp().then(b=>{if(b)return r.getId()}),[p,v]=await Promise.all([h,d]);Zf(o)||Kf(o,p.measurementId),s("js",new Date);const I=(u=a==null?void 0:a.config)!==null&&u!==void 0?u:{};return I[qf]="firebase",I.update=!0,v!=null&&(I[Bf]=v),s("config",p.measurementId,I),p.measurementId}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dp{constructor(t){this.app=t}_delete(){return delete Sn[this.app.options.appId],Promise.resolve()}}let Sn={},Ta=[];const va={};let Ms="dataLayer",fp="gtag",wa,Yc,Ia=!1;function pp(){const n=[];if(xh()&&n.push("This is a browser extension environment."),Lh()||n.push("Cookies are not available."),n.length>0){const t=n.map((r,s)=>`(${s+1}) ${r}`).join(" "),e=kt.create("invalid-analytics-context",{errorInfo:t});Pt.warn(e.message)}}function mp(n,t,e){pp();const r=n.options.appId;if(!r)throw kt.create("no-app-id");if(!n.options.apiKey)if(n.options.measurementId)Pt.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${n.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);else throw kt.create("no-api-key");if(Sn[r]!=null)throw kt.create("already-exists",{id:r});if(!Ia){Wf(Ms);const{wrappedGtag:o,gtagCore:a}=Jf(Sn,Ta,va,Ms,fp);Yc=o,wa=a,Ia=!0}return Sn[r]=hp(n,Ta,va,t,wa,Ms,e),new dp(n)}function gp(n=mi()){n=dt(n);const t=Qe(n,br);return t.isInitialized()?t.getImmediate():_p(n)}function _p(n,t={}){const e=Qe(n,br);if(e.isInitialized()){const s=e.getImmediate();if(Nn(t,e.getOptions()))return s;throw kt.create("already-initialized")}return e.initialize({options:t})}function yp(n,t,e,r){n=dt(n),up(Yc,Sn[n.app.options.appId],t,e,r).catch(s=>Pt.error(s))}const Aa="@firebase/analytics",Ra="0.10.4";function Ep(){Qt(new qt(br,(t,{options:e})=>{const r=t.getProvider("app").getImmediate(),s=t.getProvider("installations-internal").getImmediate();return mp(r,s,e)},"PUBLIC")),Qt(new qt("analytics-internal",n,"PRIVATE")),Nt(Aa,Ra),Nt(Aa,Ra,"esm2017");function n(t){try{const e=t.getProvider(br).getImmediate();return{logEvent:(r,s,o)=>yp(e,r,s,o)}}catch(e){throw kt.create("interop-component-reg-failed",{reason:e})}}}Ep();/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jc="firebasestorage.googleapis.com",Zc="storageBucket",Tp=2*60*1e3,vp=10*60*1e3,wp=1e3;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class et extends Jt{constructor(t,e,r=0){super(Ls(t),`Firebase Storage: ${e} (${Ls(t)})`),this.status_=r,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,et.prototype)}get status(){return this.status_}set status(t){this.status_=t}_codeEquals(t){return Ls(t)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(t){this.customData.serverResponse=t,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var J;(function(n){n.UNKNOWN="unknown",n.OBJECT_NOT_FOUND="object-not-found",n.BUCKET_NOT_FOUND="bucket-not-found",n.PROJECT_NOT_FOUND="project-not-found",n.QUOTA_EXCEEDED="quota-exceeded",n.UNAUTHENTICATED="unauthenticated",n.UNAUTHORIZED="unauthorized",n.UNAUTHORIZED_APP="unauthorized-app",n.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",n.INVALID_CHECKSUM="invalid-checksum",n.CANCELED="canceled",n.INVALID_EVENT_NAME="invalid-event-name",n.INVALID_URL="invalid-url",n.INVALID_DEFAULT_BUCKET="invalid-default-bucket",n.NO_DEFAULT_BUCKET="no-default-bucket",n.CANNOT_SLICE_BLOB="cannot-slice-blob",n.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",n.NO_DOWNLOAD_URL="no-download-url",n.INVALID_ARGUMENT="invalid-argument",n.INVALID_ARGUMENT_COUNT="invalid-argument-count",n.APP_DELETED="app-deleted",n.INVALID_ROOT_OPERATION="invalid-root-operation",n.INVALID_FORMAT="invalid-format",n.INTERNAL_ERROR="internal-error",n.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(J||(J={}));function Ls(n){return"storage/"+n}function vi(){const n="An unknown error occurred, please check the error payload for server response.";return new et(J.UNKNOWN,n)}function Ip(n){return new et(J.OBJECT_NOT_FOUND,"Object '"+n+"' does not exist.")}function Ap(n){return new et(J.QUOTA_EXCEEDED,"Quota for bucket '"+n+"' exceeded, please view quota on https://firebase.google.com/pricing/.")}function Rp(){const n="User is not authenticated, please authenticate using Firebase Authentication and try again.";return new et(J.UNAUTHENTICATED,n)}function bp(){return new et(J.UNAUTHORIZED_APP,"This app does not have permission to access Firebase Storage on this project.")}function Sp(n){return new et(J.UNAUTHORIZED,"User does not have permission to access '"+n+"'.")}function tu(){return new et(J.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function eu(){return new et(J.CANCELED,"User canceled the upload/download.")}function Pp(n){return new et(J.INVALID_URL,"Invalid URL '"+n+"'.")}function Cp(n){return new et(J.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+n+"'.")}function Dp(){return new et(J.NO_DEFAULT_BUCKET,"No default bucket found. Did you set the '"+Zc+"' property when initializing the app?")}function nu(){return new et(J.CANNOT_SLICE_BLOB,"Cannot slice blob for upload. Please retry the upload.")}function Vp(){return new et(J.SERVER_FILE_WRONG_SIZE,"Server recorded incorrect upload file size, please retry the upload.")}function kp(){return new et(J.NO_DOWNLOAD_URL,"The given file does not have any download URLs.")}function Np(n){return new et(J.UNSUPPORTED_ENVIRONMENT,`${n} is missing. Make sure to install the required polyfills. See https://firebase.google.com/docs/web/environments-js-sdk#polyfills for more information.`)}function Xs(n){return new et(J.INVALID_ARGUMENT,n)}function ru(){return new et(J.APP_DELETED,"The Firebase app was deleted.")}function Op(n){return new et(J.INVALID_ROOT_OPERATION,"The operation '"+n+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}function Pn(n,t){return new et(J.INVALID_FORMAT,"String does not match format '"+n+"': "+t)}function vn(n){throw new et(J.INTERNAL_ERROR,"Internal error: "+n)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dt{constructor(t,e){this.bucket=t,this.path_=e}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const t=encodeURIComponent;return"/b/"+t(this.bucket)+"/o/"+t(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(t,e){let r;try{r=Dt.makeFromUrl(t,e)}catch{return new Dt(t,"")}if(r.path==="")return r;throw Cp(t)}static makeFromUrl(t,e){let r=null;const s="([A-Za-z0-9.\\-_]+)";function o(j){j.path.charAt(j.path.length-1)==="/"&&(j.path_=j.path_.slice(0,-1))}const a="(/(.*))?$",u=new RegExp("^gs://"+s+a,"i"),h={bucket:1,path:3};function d(j){j.path_=decodeURIComponent(j.path)}const p="v[A-Za-z0-9_]+",v=e.replace(/[.]/g,"\\."),I="(/([^?#]*).*)?$",b=new RegExp(`^https?://${v}/${p}/b/${s}/o${I}`,"i"),D={bucket:1,path:3},N=e===Jc?"(?:storage.googleapis.com|storage.cloud.google.com)":e,C="([^?#]*)",B=new RegExp(`^https?://${N}/${s}/${C}`,"i"),F=[{regex:u,indices:h,postModify:o},{regex:b,indices:D,postModify:d},{regex:B,indices:{bucket:1,path:2},postModify:d}];for(let j=0;j<F.length;j++){const ft=F[j],Z=ft.regex.exec(t);if(Z){const E=Z[ft.indices.bucket];let m=Z[ft.indices.path];m||(m=""),r=new Dt(E,m),ft.postModify(r);break}}if(r==null)throw Pp(t);return r}}class xp{constructor(t){this.promise_=Promise.reject(t)}getPromise(){return this.promise_}cancel(t=!1){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Mp(n,t,e){let r=1,s=null,o=null,a=!1,u=0;function h(){return u===2}let d=!1;function p(...C){d||(d=!0,t.apply(null,C))}function v(C){s=setTimeout(()=>{s=null,n(b,h())},C)}function I(){o&&clearTimeout(o)}function b(C,...B){if(d){I();return}if(C){I(),p.call(null,C,...B);return}if(h()||a){I(),p.call(null,C,...B);return}r<64&&(r*=2);let F;u===1?(u=2,F=0):F=(r+Math.random())*1e3,v(F)}let D=!1;function N(C){D||(D=!0,I(),!d&&(s!==null?(C||(u=2),clearTimeout(s),v(0)):C||(u=1)))}return v(0),o=setTimeout(()=>{a=!0,N(!0)},e),N}function Lp(n){n(!1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fp(n){return n!==void 0}function Up(n){return typeof n=="function"}function Bp(n){return typeof n=="object"&&!Array.isArray(n)}function Br(n){return typeof n=="string"||n instanceof String}function ba(n){return wi()&&n instanceof Blob}function wi(){return typeof Blob<"u"}function Sa(n,t,e,r){if(r<t)throw Xs(`Invalid value for '${n}'. Expected ${t} or greater.`);if(r>e)throw Xs(`Invalid value for '${n}'. Expected ${e} or less.`)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xe(n,t,e){let r=t;return e==null&&(r=`https://${t}`),`${e}://${r}/v0${n}`}function su(n){const t=encodeURIComponent;let e="?";for(const r in n)if(n.hasOwnProperty(r)){const s=t(r)+"="+t(n[r]);e=e+s+"&"}return e=e.slice(0,-1),e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Ee;(function(n){n[n.NO_ERROR=0]="NO_ERROR",n[n.NETWORK_ERROR=1]="NETWORK_ERROR",n[n.ABORT=2]="ABORT"})(Ee||(Ee={}));/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function iu(n,t){const e=n>=500&&n<600,s=[408,429].indexOf(n)!==-1,o=t.indexOf(n)!==-1;return e||s||o}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qp{constructor(t,e,r,s,o,a,u,h,d,p,v,I=!0){this.url_=t,this.method_=e,this.headers_=r,this.body_=s,this.successCodes_=o,this.additionalRetryCodes_=a,this.callback_=u,this.errorCallback_=h,this.timeout_=d,this.progressCallback_=p,this.connectionFactory_=v,this.retry=I,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((b,D)=>{this.resolve_=b,this.reject_=D,this.start_()})}start_(){const t=(r,s)=>{if(s){r(!1,new dr(!1,null,!0));return}const o=this.connectionFactory_();this.pendingConnection_=o;const a=u=>{const h=u.loaded,d=u.lengthComputable?u.total:-1;this.progressCallback_!==null&&this.progressCallback_(h,d)};this.progressCallback_!==null&&o.addUploadProgressListener(a),o.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&o.removeUploadProgressListener(a),this.pendingConnection_=null;const u=o.getErrorCode()===Ee.NO_ERROR,h=o.getStatus();if(!u||iu(h,this.additionalRetryCodes_)&&this.retry){const p=o.getErrorCode()===Ee.ABORT;r(!1,new dr(!1,null,p));return}const d=this.successCodes_.indexOf(h)!==-1;r(!0,new dr(d,o))})},e=(r,s)=>{const o=this.resolve_,a=this.reject_,u=s.connection;if(s.wasSuccessCode)try{const h=this.callback_(u,u.getResponse());Fp(h)?o(h):o()}catch(h){a(h)}else if(u!==null){const h=vi();h.serverResponse=u.getErrorText(),this.errorCallback_?a(this.errorCallback_(u,h)):a(h)}else if(s.canceled){const h=this.appDelete_?ru():eu();a(h)}else{const h=tu();a(h)}};this.canceled_?e(!1,new dr(!1,null,!0)):this.backoffId_=Mp(t,e,this.timeout_)}getPromise(){return this.promise_}cancel(t){this.canceled_=!0,this.appDelete_=t||!1,this.backoffId_!==null&&Lp(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class dr{constructor(t,e,r){this.wasSuccessCode=t,this.connection=e,this.canceled=!!r}}function jp(n,t){t!==null&&t.length>0&&(n.Authorization="Firebase "+t)}function $p(n,t){n["X-Firebase-Storage-Version"]="webjs/"+(t??"AppManager")}function zp(n,t){t&&(n["X-Firebase-GMPID"]=t)}function Hp(n,t){t!==null&&(n["X-Firebase-AppCheck"]=t)}function Gp(n,t,e,r,s,o,a=!0){const u=su(n.urlParams),h=n.url+u,d=Object.assign({},n.headers);return zp(d,t),jp(d,e),$p(d,o),Hp(d,r),new qp(h,n.method,d,n.body,n.successCodes,n.additionalRetryCodes,n.handler,n.errorHandler,n.timeout,n.progressCallback,s,a)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Kp(){return typeof BlobBuilder<"u"?BlobBuilder:typeof WebKitBlobBuilder<"u"?WebKitBlobBuilder:void 0}function Wp(...n){const t=Kp();if(t!==void 0){const e=new t;for(let r=0;r<n.length;r++)e.append(n[r]);return e.getBlob()}else{if(wi())return new Blob(n);throw new et(J.UNSUPPORTED_ENVIRONMENT,"This browser doesn't seem to support creating Blobs")}}function Qp(n,t,e){return n.webkitSlice?n.webkitSlice(t,e):n.mozSlice?n.mozSlice(t,e):n.slice?n.slice(t,e):null}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xp(n){if(typeof atob>"u")throw Np("base-64");return atob(n)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ft={RAW:"raw",BASE64:"base64",BASE64URL:"base64url",DATA_URL:"data_url"};class Fs{constructor(t,e){this.data=t,this.contentType=e||null}}function Yp(n,t){switch(n){case Ft.RAW:return new Fs(ou(t));case Ft.BASE64:case Ft.BASE64URL:return new Fs(au(n,t));case Ft.DATA_URL:return new Fs(Zp(t),tm(t))}throw vi()}function ou(n){const t=[];for(let e=0;e<n.length;e++){let r=n.charCodeAt(e);if(r<=127)t.push(r);else if(r<=2047)t.push(192|r>>6,128|r&63);else if((r&64512)===55296)if(!(e<n.length-1&&(n.charCodeAt(e+1)&64512)===56320))t.push(239,191,189);else{const o=r,a=n.charCodeAt(++e);r=65536|(o&1023)<<10|a&1023,t.push(240|r>>18,128|r>>12&63,128|r>>6&63,128|r&63)}else(r&64512)===56320?t.push(239,191,189):t.push(224|r>>12,128|r>>6&63,128|r&63)}return new Uint8Array(t)}function Jp(n){let t;try{t=decodeURIComponent(n)}catch{throw Pn(Ft.DATA_URL,"Malformed data URL.")}return ou(t)}function au(n,t){switch(n){case Ft.BASE64:{const s=t.indexOf("-")!==-1,o=t.indexOf("_")!==-1;if(s||o)throw Pn(n,"Invalid character '"+(s?"-":"_")+"' found: is it base64url encoded?");break}case Ft.BASE64URL:{const s=t.indexOf("+")!==-1,o=t.indexOf("/")!==-1;if(s||o)throw Pn(n,"Invalid character '"+(s?"+":"/")+"' found: is it base64 encoded?");t=t.replace(/-/g,"+").replace(/_/g,"/");break}}let e;try{e=Xp(t)}catch(s){throw s.message.includes("polyfill")?s:Pn(n,"Invalid character found")}const r=new Uint8Array(e.length);for(let s=0;s<e.length;s++)r[s]=e.charCodeAt(s);return r}class cu{constructor(t){this.base64=!1,this.contentType=null;const e=t.match(/^data:([^,]+)?,/);if(e===null)throw Pn(Ft.DATA_URL,"Must be formatted 'data:[<mediatype>][;base64],<data>");const r=e[1]||null;r!=null&&(this.base64=em(r,";base64"),this.contentType=this.base64?r.substring(0,r.length-7):r),this.rest=t.substring(t.indexOf(",")+1)}}function Zp(n){const t=new cu(n);return t.base64?au(Ft.BASE64,t.rest):Jp(t.rest)}function tm(n){return new cu(n).contentType}function em(n,t){return n.length>=t.length?n.substring(n.length-t.length)===t:!1}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gt{constructor(t,e){let r=0,s="";ba(t)?(this.data_=t,r=t.size,s=t.type):t instanceof ArrayBuffer?(e?this.data_=new Uint8Array(t):(this.data_=new Uint8Array(t.byteLength),this.data_.set(new Uint8Array(t))),r=this.data_.length):t instanceof Uint8Array&&(e?this.data_=t:(this.data_=new Uint8Array(t.length),this.data_.set(t)),r=t.length),this.size_=r,this.type_=s}size(){return this.size_}type(){return this.type_}slice(t,e){if(ba(this.data_)){const r=this.data_,s=Qp(r,t,e);return s===null?null:new Gt(s)}else{const r=new Uint8Array(this.data_.buffer,t,e-t);return new Gt(r,!0)}}static getBlob(...t){if(wi()){const e=t.map(r=>r instanceof Gt?r.data_:r);return new Gt(Wp.apply(null,e))}else{const e=t.map(a=>Br(a)?Yp(Ft.RAW,a).data:a.data_);let r=0;e.forEach(a=>{r+=a.byteLength});const s=new Uint8Array(r);let o=0;return e.forEach(a=>{for(let u=0;u<a.length;u++)s[o++]=a[u]}),new Gt(s,!0)}}uploadData(){return this.data_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function uu(n){let t;try{t=JSON.parse(n)}catch{return null}return Bp(t)?t:null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nm(n){if(n.length===0)return null;const t=n.lastIndexOf("/");return t===-1?"":n.slice(0,t)}function rm(n,t){const e=t.split("/").filter(r=>r.length>0).join("/");return n.length===0?e:n+"/"+e}function lu(n){const t=n.lastIndexOf("/",n.length-2);return t===-1?n:n.slice(t+1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sm(n,t){return t}class At{constructor(t,e,r,s){this.server=t,this.local=e||t,this.writable=!!r,this.xform=s||sm}}let fr=null;function im(n){return!Br(n)||n.length<2?n:lu(n)}function Ii(){if(fr)return fr;const n=[];n.push(new At("bucket")),n.push(new At("generation")),n.push(new At("metageneration")),n.push(new At("name","fullPath",!0));function t(o,a){return im(a)}const e=new At("name");e.xform=t,n.push(e);function r(o,a){return a!==void 0?Number(a):a}const s=new At("size");return s.xform=r,n.push(s),n.push(new At("timeCreated")),n.push(new At("updated")),n.push(new At("md5Hash",null,!0)),n.push(new At("cacheControl",null,!0)),n.push(new At("contentDisposition",null,!0)),n.push(new At("contentEncoding",null,!0)),n.push(new At("contentLanguage",null,!0)),n.push(new At("contentType",null,!0)),n.push(new At("metadata","customMetadata",!0)),fr=n,fr}function om(n,t){function e(){const r=n.bucket,s=n.fullPath,o=new Dt(r,s);return t._makeStorageReference(o)}Object.defineProperty(n,"ref",{get:e})}function am(n,t,e){const r={};r.type="file";const s=e.length;for(let o=0;o<s;o++){const a=e[o];r[a.local]=a.xform(r,t[a.server])}return om(r,n),r}function hu(n,t,e){const r=uu(t);return r===null?null:am(n,r,e)}function cm(n,t,e,r){const s=uu(t);if(s===null||!Br(s.downloadTokens))return null;const o=s.downloadTokens;if(o.length===0)return null;const a=encodeURIComponent;return o.split(",").map(d=>{const p=n.bucket,v=n.fullPath,I="/b/"+a(p)+"/o/"+a(v),b=Xe(I,e,r),D=su({alt:"media",token:d});return b+D})[0]}function du(n,t){const e={},r=t.length;for(let s=0;s<r;s++){const o=t[s];o.writable&&(e[o.server]=n[o.local])}return JSON.stringify(e)}class Pe{constructor(t,e,r,s){this.url=t,this.method=e,this.handler=r,this.timeout=s,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Kt(n){if(!n)throw vi()}function Ai(n,t){function e(r,s){const o=hu(n,s,t);return Kt(o!==null),o}return e}function um(n,t){function e(r,s){const o=hu(n,s,t);return Kt(o!==null),cm(o,s,n.host,n._protocol)}return e}function Bn(n){function t(e,r){let s;return e.getStatus()===401?e.getErrorText().includes("Firebase App Check token is invalid")?s=bp():s=Rp():e.getStatus()===402?s=Ap(n.bucket):e.getStatus()===403?s=Sp(n.path):s=r,s.status=e.getStatus(),s.serverResponse=r.serverResponse,s}return t}function Ri(n){const t=Bn(n);function e(r,s){let o=t(r,s);return r.getStatus()===404&&(o=Ip(n.path)),o.serverResponse=s.serverResponse,o}return e}function lm(n,t,e){const r=t.fullServerUrl(),s=Xe(r,n.host,n._protocol),o="GET",a=n.maxOperationRetryTime,u=new Pe(s,o,Ai(n,e),a);return u.errorHandler=Ri(t),u}function hm(n,t,e){const r=t.fullServerUrl(),s=Xe(r,n.host,n._protocol),o="GET",a=n.maxOperationRetryTime,u=new Pe(s,o,um(n,e),a);return u.errorHandler=Ri(t),u}function dm(n,t){const e=t.fullServerUrl(),r=Xe(e,n.host,n._protocol),s="DELETE",o=n.maxOperationRetryTime;function a(h,d){}const u=new Pe(r,s,a,o);return u.successCodes=[200,204],u.errorHandler=Ri(t),u}function fm(n,t){return n&&n.contentType||t&&t.type()||"application/octet-stream"}function fu(n,t,e){const r=Object.assign({},e);return r.fullPath=n.path,r.size=t.size(),r.contentType||(r.contentType=fm(null,t)),r}function pu(n,t,e,r,s){const o=t.bucketOnlyServerUrl(),a={"X-Goog-Upload-Protocol":"multipart"};function u(){let F="";for(let j=0;j<2;j++)F=F+Math.random().toString().slice(2);return F}const h=u();a["Content-Type"]="multipart/related; boundary="+h;const d=fu(t,r,s),p=du(d,e),v="--"+h+`\r
Content-Type: application/json; charset=utf-8\r
\r
`+p+`\r
--`+h+`\r
Content-Type: `+d.contentType+`\r
\r
`,I=`\r
--`+h+"--",b=Gt.getBlob(v,r,I);if(b===null)throw nu();const D={name:d.fullPath},N=Xe(o,n.host,n._protocol),C="POST",B=n.maxUploadRetryTime,q=new Pe(N,C,Ai(n,e),B);return q.urlParams=D,q.headers=a,q.body=b.uploadData(),q.errorHandler=Bn(t),q}class Sr{constructor(t,e,r,s){this.current=t,this.total=e,this.finalized=!!r,this.metadata=s||null}}function bi(n,t){let e=null;try{e=n.getResponseHeader("X-Goog-Upload-Status")}catch{Kt(!1)}return Kt(!!e&&(t||["active"]).indexOf(e)!==-1),e}function pm(n,t,e,r,s){const o=t.bucketOnlyServerUrl(),a=fu(t,r,s),u={name:a.fullPath},h=Xe(o,n.host,n._protocol),d="POST",p={"X-Goog-Upload-Protocol":"resumable","X-Goog-Upload-Command":"start","X-Goog-Upload-Header-Content-Length":`${r.size()}`,"X-Goog-Upload-Header-Content-Type":a.contentType,"Content-Type":"application/json; charset=utf-8"},v=du(a,e),I=n.maxUploadRetryTime;function b(N){bi(N);let C;try{C=N.getResponseHeader("X-Goog-Upload-URL")}catch{Kt(!1)}return Kt(Br(C)),C}const D=new Pe(h,d,b,I);return D.urlParams=u,D.headers=p,D.body=v,D.errorHandler=Bn(t),D}function mm(n,t,e,r){const s={"X-Goog-Upload-Command":"query"};function o(d){const p=bi(d,["active","final"]);let v=null;try{v=d.getResponseHeader("X-Goog-Upload-Size-Received")}catch{Kt(!1)}v||Kt(!1);const I=Number(v);return Kt(!isNaN(I)),new Sr(I,r.size(),p==="final")}const a="POST",u=n.maxUploadRetryTime,h=new Pe(e,a,o,u);return h.headers=s,h.errorHandler=Bn(t),h}const Pa=256*1024;function gm(n,t,e,r,s,o,a,u){const h=new Sr(0,0);if(a?(h.current=a.current,h.total=a.total):(h.current=0,h.total=r.size()),r.size()!==h.total)throw Vp();const d=h.total-h.current;let p=d;s>0&&(p=Math.min(p,s));const v=h.current,I=v+p;let b="";p===0?b="finalize":d===p?b="upload, finalize":b="upload";const D={"X-Goog-Upload-Command":b,"X-Goog-Upload-Offset":`${h.current}`},N=r.slice(v,I);if(N===null)throw nu();function C(j,ft){const Z=bi(j,["active","final"]),E=h.current+p,m=r.size();let _;return Z==="final"?_=Ai(t,o)(j,ft):_=null,new Sr(E,m,Z==="final",_)}const B="POST",q=t.maxUploadRetryTime,F=new Pe(e,B,C,q);return F.headers=D,F.body=N.uploadData(),F.progressCallback=u||null,F.errorHandler=Bn(n),F}const bt={RUNNING:"running",PAUSED:"paused",SUCCESS:"success",CANCELED:"canceled",ERROR:"error"};function Us(n){switch(n){case"running":case"pausing":case"canceling":return bt.RUNNING;case"paused":return bt.PAUSED;case"success":return bt.SUCCESS;case"canceled":return bt.CANCELED;case"error":return bt.ERROR;default:return bt.ERROR}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _m{constructor(t,e,r){if(Up(t)||e!=null||r!=null)this.next=t,this.error=e??void 0,this.complete=r??void 0;else{const o=t;this.next=o.next,this.error=o.error,this.complete=o.complete}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Me(n){return(...t)=>{Promise.resolve().then(()=>n(...t))}}class ym{constructor(){this.sent_=!1,this.xhr_=new XMLHttpRequest,this.initXhr(),this.errorCode_=Ee.NO_ERROR,this.sendPromise_=new Promise(t=>{this.xhr_.addEventListener("abort",()=>{this.errorCode_=Ee.ABORT,t()}),this.xhr_.addEventListener("error",()=>{this.errorCode_=Ee.NETWORK_ERROR,t()}),this.xhr_.addEventListener("load",()=>{t()})})}send(t,e,r,s){if(this.sent_)throw vn("cannot .send() more than once");if(this.sent_=!0,this.xhr_.open(e,t,!0),s!==void 0)for(const o in s)s.hasOwnProperty(o)&&this.xhr_.setRequestHeader(o,s[o].toString());return r!==void 0?this.xhr_.send(r):this.xhr_.send(),this.sendPromise_}getErrorCode(){if(!this.sent_)throw vn("cannot .getErrorCode() before sending");return this.errorCode_}getStatus(){if(!this.sent_)throw vn("cannot .getStatus() before sending");try{return this.xhr_.status}catch{return-1}}getResponse(){if(!this.sent_)throw vn("cannot .getResponse() before sending");return this.xhr_.response}getErrorText(){if(!this.sent_)throw vn("cannot .getErrorText() before sending");return this.xhr_.statusText}abort(){this.xhr_.abort()}getResponseHeader(t){return this.xhr_.getResponseHeader(t)}addUploadProgressListener(t){this.xhr_.upload!=null&&this.xhr_.upload.addEventListener("progress",t)}removeUploadProgressListener(t){this.xhr_.upload!=null&&this.xhr_.upload.removeEventListener("progress",t)}}class Em extends ym{initXhr(){this.xhr_.responseType="text"}}function re(){return new Em}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tm{constructor(t,e,r=null){this._transferred=0,this._needToFetchStatus=!1,this._needToFetchMetadata=!1,this._observers=[],this._error=void 0,this._uploadUrl=void 0,this._request=void 0,this._chunkMultiplier=1,this._resolve=void 0,this._reject=void 0,this._ref=t,this._blob=e,this._metadata=r,this._mappings=Ii(),this._resumable=this._shouldDoResumable(this._blob),this._state="running",this._errorHandler=s=>{if(this._request=void 0,this._chunkMultiplier=1,s._codeEquals(J.CANCELED))this._needToFetchStatus=!0,this.completeTransitions_();else{const o=this.isExponentialBackoffExpired();if(iu(s.status,[]))if(o)s=tu();else{this.sleepTime=Math.max(this.sleepTime*2,wp),this._needToFetchStatus=!0,this.completeTransitions_();return}this._error=s,this._transition("error")}},this._metadataErrorHandler=s=>{this._request=void 0,s._codeEquals(J.CANCELED)?this.completeTransitions_():(this._error=s,this._transition("error"))},this.sleepTime=0,this.maxSleepTime=this._ref.storage.maxUploadRetryTime,this._promise=new Promise((s,o)=>{this._resolve=s,this._reject=o,this._start()}),this._promise.then(null,()=>{})}isExponentialBackoffExpired(){return this.sleepTime>this.maxSleepTime}_makeProgressCallback(){const t=this._transferred;return e=>this._updateProgress(t+e)}_shouldDoResumable(t){return t.size()>256*1024}_start(){this._state==="running"&&this._request===void 0&&(this._resumable?this._uploadUrl===void 0?this._createResumable():this._needToFetchStatus?this._fetchStatus():this._needToFetchMetadata?this._fetchMetadata():this.pendingTimeout=setTimeout(()=>{this.pendingTimeout=void 0,this._continueUpload()},this.sleepTime):this._oneShotUpload())}_resolveToken(t){Promise.all([this._ref.storage._getAuthToken(),this._ref.storage._getAppCheckToken()]).then(([e,r])=>{switch(this._state){case"running":t(e,r);break;case"canceling":this._transition("canceled");break;case"pausing":this._transition("paused");break}})}_createResumable(){this._resolveToken((t,e)=>{const r=pm(this._ref.storage,this._ref._location,this._mappings,this._blob,this._metadata),s=this._ref.storage._makeRequest(r,re,t,e);this._request=s,s.getPromise().then(o=>{this._request=void 0,this._uploadUrl=o,this._needToFetchStatus=!1,this.completeTransitions_()},this._errorHandler)})}_fetchStatus(){const t=this._uploadUrl;this._resolveToken((e,r)=>{const s=mm(this._ref.storage,this._ref._location,t,this._blob),o=this._ref.storage._makeRequest(s,re,e,r);this._request=o,o.getPromise().then(a=>{a=a,this._request=void 0,this._updateProgress(a.current),this._needToFetchStatus=!1,a.finalized&&(this._needToFetchMetadata=!0),this.completeTransitions_()},this._errorHandler)})}_continueUpload(){const t=Pa*this._chunkMultiplier,e=new Sr(this._transferred,this._blob.size()),r=this._uploadUrl;this._resolveToken((s,o)=>{let a;try{a=gm(this._ref._location,this._ref.storage,r,this._blob,t,this._mappings,e,this._makeProgressCallback())}catch(h){this._error=h,this._transition("error");return}const u=this._ref.storage._makeRequest(a,re,s,o,!1);this._request=u,u.getPromise().then(h=>{this._increaseMultiplier(),this._request=void 0,this._updateProgress(h.current),h.finalized?(this._metadata=h.metadata,this._transition("success")):this.completeTransitions_()},this._errorHandler)})}_increaseMultiplier(){Pa*this._chunkMultiplier*2<32*1024*1024&&(this._chunkMultiplier*=2)}_fetchMetadata(){this._resolveToken((t,e)=>{const r=lm(this._ref.storage,this._ref._location,this._mappings),s=this._ref.storage._makeRequest(r,re,t,e);this._request=s,s.getPromise().then(o=>{this._request=void 0,this._metadata=o,this._transition("success")},this._metadataErrorHandler)})}_oneShotUpload(){this._resolveToken((t,e)=>{const r=pu(this._ref.storage,this._ref._location,this._mappings,this._blob,this._metadata),s=this._ref.storage._makeRequest(r,re,t,e);this._request=s,s.getPromise().then(o=>{this._request=void 0,this._metadata=o,this._updateProgress(this._blob.size()),this._transition("success")},this._errorHandler)})}_updateProgress(t){const e=this._transferred;this._transferred=t,this._transferred!==e&&this._notifyObservers()}_transition(t){if(this._state!==t)switch(t){case"canceling":case"pausing":this._state=t,this._request!==void 0?this._request.cancel():this.pendingTimeout&&(clearTimeout(this.pendingTimeout),this.pendingTimeout=void 0,this.completeTransitions_());break;case"running":const e=this._state==="paused";this._state=t,e&&(this._notifyObservers(),this._start());break;case"paused":this._state=t,this._notifyObservers();break;case"canceled":this._error=eu(),this._state=t,this._notifyObservers();break;case"error":this._state=t,this._notifyObservers();break;case"success":this._state=t,this._notifyObservers();break}}completeTransitions_(){switch(this._state){case"pausing":this._transition("paused");break;case"canceling":this._transition("canceled");break;case"running":this._start();break}}get snapshot(){const t=Us(this._state);return{bytesTransferred:this._transferred,totalBytes:this._blob.size(),state:t,metadata:this._metadata,task:this,ref:this._ref}}on(t,e,r,s){const o=new _m(e||void 0,r||void 0,s||void 0);return this._addObserver(o),()=>{this._removeObserver(o)}}then(t,e){return this._promise.then(t,e)}catch(t){return this.then(null,t)}_addObserver(t){this._observers.push(t),this._notifyObserver(t)}_removeObserver(t){const e=this._observers.indexOf(t);e!==-1&&this._observers.splice(e,1)}_notifyObservers(){this._finishPromise(),this._observers.slice().forEach(e=>{this._notifyObserver(e)})}_finishPromise(){if(this._resolve!==void 0){let t=!0;switch(Us(this._state)){case bt.SUCCESS:Me(this._resolve.bind(null,this.snapshot))();break;case bt.CANCELED:case bt.ERROR:const e=this._reject;Me(e.bind(null,this._error))();break;default:t=!1;break}t&&(this._resolve=void 0,this._reject=void 0)}}_notifyObserver(t){switch(Us(this._state)){case bt.RUNNING:case bt.PAUSED:t.next&&Me(t.next.bind(t,this.snapshot))();break;case bt.SUCCESS:t.complete&&Me(t.complete.bind(t))();break;case bt.CANCELED:case bt.ERROR:t.error&&Me(t.error.bind(t,this._error))();break;default:t.error&&Me(t.error.bind(t,this._error))()}}resume(){const t=this._state==="paused"||this._state==="pausing";return t&&this._transition("running"),t}pause(){const t=this._state==="running";return t&&this._transition("pausing"),t}cancel(){const t=this._state==="running"||this._state==="pausing";return t&&this._transition("canceling"),t}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ae{constructor(t,e){this._service=t,e instanceof Dt?this._location=e:this._location=Dt.makeFromUrl(e,t.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(t,e){return new Ae(t,e)}get root(){const t=new Dt(this._location.bucket,"");return this._newRef(this._service,t)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return lu(this._location.path)}get storage(){return this._service}get parent(){const t=nm(this._location.path);if(t===null)return null;const e=new Dt(this._location.bucket,t);return new Ae(this._service,e)}_throwIfRoot(t){if(this._location.path==="")throw Op(t)}}function vm(n,t,e){n._throwIfRoot("uploadBytes");const r=pu(n.storage,n._location,Ii(),new Gt(t,!0),e);return n.storage.makeRequestWithTokens(r,re).then(s=>({metadata:s,ref:n}))}function wm(n,t,e){return n._throwIfRoot("uploadBytesResumable"),new Tm(n,new Gt(t),e)}function Im(n){n._throwIfRoot("getDownloadURL");const t=hm(n.storage,n._location,Ii());return n.storage.makeRequestWithTokens(t,re).then(e=>{if(e===null)throw kp();return e})}function Am(n){n._throwIfRoot("deleteObject");const t=dm(n.storage,n._location);return n.storage.makeRequestWithTokens(t,re)}function Rm(n,t){const e=rm(n._location.path,t),r=new Dt(n._location.bucket,e);return new Ae(n.storage,r)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bm(n){return/^[A-Za-z]+:\/\//.test(n)}function Sm(n,t){return new Ae(n,t)}function mu(n,t){if(n instanceof Si){const e=n;if(e._bucket==null)throw Dp();const r=new Ae(e,e._bucket);return t!=null?mu(r,t):r}else return t!==void 0?Rm(n,t):n}function Pm(n,t){if(t&&bm(t)){if(n instanceof Si)return Sm(n,t);throw Xs("To use ref(service, url), the first argument must be a Storage instance.")}else return mu(n,t)}function Ca(n,t){const e=t==null?void 0:t[Zc];return e==null?null:Dt.makeFromBucketSpec(e,n)}function Cm(n,t,e,r={}){n.host=`${t}:${e}`,n._protocol="http";const{mockUserToken:s}=r;s&&(n._overrideAuthToken=typeof s=="string"?s:Tc(s,n.app.options.projectId))}class Si{constructor(t,e,r,s,o){this.app=t,this._authProvider=e,this._appCheckProvider=r,this._url=s,this._firebaseVersion=o,this._bucket=null,this._host=Jc,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=Tp,this._maxUploadRetryTime=vp,this._requests=new Set,s!=null?this._bucket=Dt.makeFromBucketSpec(s,this._host):this._bucket=Ca(this._host,this.app.options)}get host(){return this._host}set host(t){this._host=t,this._url!=null?this._bucket=Dt.makeFromBucketSpec(this._url,t):this._bucket=Ca(t,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(t){Sa("time",0,Number.POSITIVE_INFINITY,t),this._maxUploadRetryTime=t}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(t){Sa("time",0,Number.POSITIVE_INFINITY,t),this._maxOperationRetryTime=t}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const t=this._authProvider.getImmediate({optional:!0});if(t){const e=await t.getToken();if(e!==null)return e.accessToken}return null}async _getAppCheckToken(){const t=this._appCheckProvider.getImmediate({optional:!0});return t?(await t.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(t=>t.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(t){return new Ae(this,t)}_makeRequest(t,e,r,s,o=!0){if(this._deleted)return new xp(ru());{const a=Gp(t,this._appId,r,s,e,this._firebaseVersion,o);return this._requests.add(a),a.getPromise().then(()=>this._requests.delete(a),()=>this._requests.delete(a)),a}}async makeRequestWithTokens(t,e){const[r,s]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(t,e,r,s).getPromise()}}const Da="@firebase/storage",Va="0.12.5";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gu="storage";function Wy(n,t,e){return n=dt(n),vm(n,t,e)}function Qy(n,t,e){return n=dt(n),wm(n,t,e)}function Xy(n){return n=dt(n),Im(n)}function Yy(n){return n=dt(n),Am(n)}function Jy(n,t){return n=dt(n),Pm(n,t)}function Dm(n=mi(),t){n=dt(n);const r=Qe(n,gu).getImmediate({identifier:t}),s=yc("storage");return s&&Vm(r,...s),r}function Vm(n,t,e,r={}){Cm(n,t,e,r)}function km(n,{instanceIdentifier:t}){const e=n.getProvider("app").getImmediate(),r=n.getProvider("auth-internal"),s=n.getProvider("app-check-internal");return new Si(e,r,s,t,bc)}function Nm(){Qt(new qt(gu,km,"PUBLIC").setMultipleInstances(!0)),Nt(Da,Va,""),Nt(Da,Va,"esm2017")}Nm();var ka=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Te,_u;(function(){var n;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function t(E,m){function _(){}_.prototype=m.prototype,E.D=m.prototype,E.prototype=new _,E.prototype.constructor=E,E.C=function(y,T,A){for(var g=Array(arguments.length-2),$t=2;$t<arguments.length;$t++)g[$t-2]=arguments[$t];return m.prototype[T].apply(y,g)}}function e(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}t(r,e),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function s(E,m,_){_||(_=0);var y=Array(16);if(typeof m=="string")for(var T=0;16>T;++T)y[T]=m.charCodeAt(_++)|m.charCodeAt(_++)<<8|m.charCodeAt(_++)<<16|m.charCodeAt(_++)<<24;else for(T=0;16>T;++T)y[T]=m[_++]|m[_++]<<8|m[_++]<<16|m[_++]<<24;m=E.g[0],_=E.g[1],T=E.g[2];var A=E.g[3],g=m+(A^_&(T^A))+y[0]+3614090360&4294967295;m=_+(g<<7&4294967295|g>>>25),g=A+(T^m&(_^T))+y[1]+3905402710&4294967295,A=m+(g<<12&4294967295|g>>>20),g=T+(_^A&(m^_))+y[2]+606105819&4294967295,T=A+(g<<17&4294967295|g>>>15),g=_+(m^T&(A^m))+y[3]+3250441966&4294967295,_=T+(g<<22&4294967295|g>>>10),g=m+(A^_&(T^A))+y[4]+4118548399&4294967295,m=_+(g<<7&4294967295|g>>>25),g=A+(T^m&(_^T))+y[5]+1200080426&4294967295,A=m+(g<<12&4294967295|g>>>20),g=T+(_^A&(m^_))+y[6]+2821735955&4294967295,T=A+(g<<17&4294967295|g>>>15),g=_+(m^T&(A^m))+y[7]+4249261313&4294967295,_=T+(g<<22&4294967295|g>>>10),g=m+(A^_&(T^A))+y[8]+1770035416&4294967295,m=_+(g<<7&4294967295|g>>>25),g=A+(T^m&(_^T))+y[9]+2336552879&4294967295,A=m+(g<<12&4294967295|g>>>20),g=T+(_^A&(m^_))+y[10]+4294925233&4294967295,T=A+(g<<17&4294967295|g>>>15),g=_+(m^T&(A^m))+y[11]+2304563134&4294967295,_=T+(g<<22&4294967295|g>>>10),g=m+(A^_&(T^A))+y[12]+1804603682&4294967295,m=_+(g<<7&4294967295|g>>>25),g=A+(T^m&(_^T))+y[13]+4254626195&4294967295,A=m+(g<<12&4294967295|g>>>20),g=T+(_^A&(m^_))+y[14]+2792965006&4294967295,T=A+(g<<17&4294967295|g>>>15),g=_+(m^T&(A^m))+y[15]+1236535329&4294967295,_=T+(g<<22&4294967295|g>>>10),g=m+(T^A&(_^T))+y[1]+4129170786&4294967295,m=_+(g<<5&4294967295|g>>>27),g=A+(_^T&(m^_))+y[6]+3225465664&4294967295,A=m+(g<<9&4294967295|g>>>23),g=T+(m^_&(A^m))+y[11]+643717713&4294967295,T=A+(g<<14&4294967295|g>>>18),g=_+(A^m&(T^A))+y[0]+3921069994&4294967295,_=T+(g<<20&4294967295|g>>>12),g=m+(T^A&(_^T))+y[5]+3593408605&4294967295,m=_+(g<<5&4294967295|g>>>27),g=A+(_^T&(m^_))+y[10]+38016083&4294967295,A=m+(g<<9&4294967295|g>>>23),g=T+(m^_&(A^m))+y[15]+3634488961&4294967295,T=A+(g<<14&4294967295|g>>>18),g=_+(A^m&(T^A))+y[4]+3889429448&4294967295,_=T+(g<<20&4294967295|g>>>12),g=m+(T^A&(_^T))+y[9]+568446438&4294967295,m=_+(g<<5&4294967295|g>>>27),g=A+(_^T&(m^_))+y[14]+3275163606&4294967295,A=m+(g<<9&4294967295|g>>>23),g=T+(m^_&(A^m))+y[3]+4107603335&4294967295,T=A+(g<<14&4294967295|g>>>18),g=_+(A^m&(T^A))+y[8]+1163531501&4294967295,_=T+(g<<20&4294967295|g>>>12),g=m+(T^A&(_^T))+y[13]+2850285829&4294967295,m=_+(g<<5&4294967295|g>>>27),g=A+(_^T&(m^_))+y[2]+4243563512&4294967295,A=m+(g<<9&4294967295|g>>>23),g=T+(m^_&(A^m))+y[7]+1735328473&4294967295,T=A+(g<<14&4294967295|g>>>18),g=_+(A^m&(T^A))+y[12]+2368359562&4294967295,_=T+(g<<20&4294967295|g>>>12),g=m+(_^T^A)+y[5]+4294588738&4294967295,m=_+(g<<4&4294967295|g>>>28),g=A+(m^_^T)+y[8]+2272392833&4294967295,A=m+(g<<11&4294967295|g>>>21),g=T+(A^m^_)+y[11]+1839030562&4294967295,T=A+(g<<16&4294967295|g>>>16),g=_+(T^A^m)+y[14]+4259657740&4294967295,_=T+(g<<23&4294967295|g>>>9),g=m+(_^T^A)+y[1]+2763975236&4294967295,m=_+(g<<4&4294967295|g>>>28),g=A+(m^_^T)+y[4]+1272893353&4294967295,A=m+(g<<11&4294967295|g>>>21),g=T+(A^m^_)+y[7]+4139469664&4294967295,T=A+(g<<16&4294967295|g>>>16),g=_+(T^A^m)+y[10]+3200236656&4294967295,_=T+(g<<23&4294967295|g>>>9),g=m+(_^T^A)+y[13]+681279174&4294967295,m=_+(g<<4&4294967295|g>>>28),g=A+(m^_^T)+y[0]+3936430074&4294967295,A=m+(g<<11&4294967295|g>>>21),g=T+(A^m^_)+y[3]+3572445317&4294967295,T=A+(g<<16&4294967295|g>>>16),g=_+(T^A^m)+y[6]+76029189&4294967295,_=T+(g<<23&4294967295|g>>>9),g=m+(_^T^A)+y[9]+3654602809&4294967295,m=_+(g<<4&4294967295|g>>>28),g=A+(m^_^T)+y[12]+3873151461&4294967295,A=m+(g<<11&4294967295|g>>>21),g=T+(A^m^_)+y[15]+530742520&4294967295,T=A+(g<<16&4294967295|g>>>16),g=_+(T^A^m)+y[2]+3299628645&4294967295,_=T+(g<<23&4294967295|g>>>9),g=m+(T^(_|~A))+y[0]+4096336452&4294967295,m=_+(g<<6&4294967295|g>>>26),g=A+(_^(m|~T))+y[7]+1126891415&4294967295,A=m+(g<<10&4294967295|g>>>22),g=T+(m^(A|~_))+y[14]+2878612391&4294967295,T=A+(g<<15&4294967295|g>>>17),g=_+(A^(T|~m))+y[5]+4237533241&4294967295,_=T+(g<<21&4294967295|g>>>11),g=m+(T^(_|~A))+y[12]+1700485571&4294967295,m=_+(g<<6&4294967295|g>>>26),g=A+(_^(m|~T))+y[3]+2399980690&4294967295,A=m+(g<<10&4294967295|g>>>22),g=T+(m^(A|~_))+y[10]+4293915773&4294967295,T=A+(g<<15&4294967295|g>>>17),g=_+(A^(T|~m))+y[1]+2240044497&4294967295,_=T+(g<<21&4294967295|g>>>11),g=m+(T^(_|~A))+y[8]+1873313359&4294967295,m=_+(g<<6&4294967295|g>>>26),g=A+(_^(m|~T))+y[15]+4264355552&4294967295,A=m+(g<<10&4294967295|g>>>22),g=T+(m^(A|~_))+y[6]+2734768916&4294967295,T=A+(g<<15&4294967295|g>>>17),g=_+(A^(T|~m))+y[13]+1309151649&4294967295,_=T+(g<<21&4294967295|g>>>11),g=m+(T^(_|~A))+y[4]+4149444226&4294967295,m=_+(g<<6&4294967295|g>>>26),g=A+(_^(m|~T))+y[11]+3174756917&4294967295,A=m+(g<<10&4294967295|g>>>22),g=T+(m^(A|~_))+y[2]+718787259&4294967295,T=A+(g<<15&4294967295|g>>>17),g=_+(A^(T|~m))+y[9]+3951481745&4294967295,E.g[0]=E.g[0]+m&4294967295,E.g[1]=E.g[1]+(T+(g<<21&4294967295|g>>>11))&4294967295,E.g[2]=E.g[2]+T&4294967295,E.g[3]=E.g[3]+A&4294967295}r.prototype.u=function(E,m){m===void 0&&(m=E.length);for(var _=m-this.blockSize,y=this.B,T=this.h,A=0;A<m;){if(T==0)for(;A<=_;)s(this,E,A),A+=this.blockSize;if(typeof E=="string"){for(;A<m;)if(y[T++]=E.charCodeAt(A++),T==this.blockSize){s(this,y),T=0;break}}else for(;A<m;)if(y[T++]=E[A++],T==this.blockSize){s(this,y),T=0;break}}this.h=T,this.o+=m},r.prototype.v=function(){var E=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);E[0]=128;for(var m=1;m<E.length-8;++m)E[m]=0;var _=8*this.o;for(m=E.length-8;m<E.length;++m)E[m]=_&255,_/=256;for(this.u(E),E=Array(16),m=_=0;4>m;++m)for(var y=0;32>y;y+=8)E[_++]=this.g[m]>>>y&255;return E};function o(E,m){var _=u;return Object.prototype.hasOwnProperty.call(_,E)?_[E]:_[E]=m(E)}function a(E,m){this.h=m;for(var _=[],y=!0,T=E.length-1;0<=T;T--){var A=E[T]|0;y&&A==m||(_[T]=A,y=!1)}this.g=_}var u={};function h(E){return-128<=E&&128>E?o(E,function(m){return new a([m|0],0>m?-1:0)}):new a([E|0],0>E?-1:0)}function d(E){if(isNaN(E)||!isFinite(E))return v;if(0>E)return C(d(-E));for(var m=[],_=1,y=0;E>=_;y++)m[y]=E/_|0,_*=4294967296;return new a(m,0)}function p(E,m){if(E.length==0)throw Error("number format error: empty string");if(m=m||10,2>m||36<m)throw Error("radix out of range: "+m);if(E.charAt(0)=="-")return C(p(E.substring(1),m));if(0<=E.indexOf("-"))throw Error('number format error: interior "-" character');for(var _=d(Math.pow(m,8)),y=v,T=0;T<E.length;T+=8){var A=Math.min(8,E.length-T),g=parseInt(E.substring(T,T+A),m);8>A?(A=d(Math.pow(m,A)),y=y.j(A).add(d(g))):(y=y.j(_),y=y.add(d(g)))}return y}var v=h(0),I=h(1),b=h(16777216);n=a.prototype,n.m=function(){if(N(this))return-C(this).m();for(var E=0,m=1,_=0;_<this.g.length;_++){var y=this.i(_);E+=(0<=y?y:4294967296+y)*m,m*=4294967296}return E},n.toString=function(E){if(E=E||10,2>E||36<E)throw Error("radix out of range: "+E);if(D(this))return"0";if(N(this))return"-"+C(this).toString(E);for(var m=d(Math.pow(E,6)),_=this,y="";;){var T=j(_,m).g;_=B(_,T.j(m));var A=((0<_.g.length?_.g[0]:_.h)>>>0).toString(E);if(_=T,D(_))return A+y;for(;6>A.length;)A="0"+A;y=A+y}},n.i=function(E){return 0>E?0:E<this.g.length?this.g[E]:this.h};function D(E){if(E.h!=0)return!1;for(var m=0;m<E.g.length;m++)if(E.g[m]!=0)return!1;return!0}function N(E){return E.h==-1}n.l=function(E){return E=B(this,E),N(E)?-1:D(E)?0:1};function C(E){for(var m=E.g.length,_=[],y=0;y<m;y++)_[y]=~E.g[y];return new a(_,~E.h).add(I)}n.abs=function(){return N(this)?C(this):this},n.add=function(E){for(var m=Math.max(this.g.length,E.g.length),_=[],y=0,T=0;T<=m;T++){var A=y+(this.i(T)&65535)+(E.i(T)&65535),g=(A>>>16)+(this.i(T)>>>16)+(E.i(T)>>>16);y=g>>>16,A&=65535,g&=65535,_[T]=g<<16|A}return new a(_,_[_.length-1]&-2147483648?-1:0)};function B(E,m){return E.add(C(m))}n.j=function(E){if(D(this)||D(E))return v;if(N(this))return N(E)?C(this).j(C(E)):C(C(this).j(E));if(N(E))return C(this.j(C(E)));if(0>this.l(b)&&0>E.l(b))return d(this.m()*E.m());for(var m=this.g.length+E.g.length,_=[],y=0;y<2*m;y++)_[y]=0;for(y=0;y<this.g.length;y++)for(var T=0;T<E.g.length;T++){var A=this.i(y)>>>16,g=this.i(y)&65535,$t=E.i(T)>>>16,nn=E.i(T)&65535;_[2*y+2*T]+=g*nn,q(_,2*y+2*T),_[2*y+2*T+1]+=A*nn,q(_,2*y+2*T+1),_[2*y+2*T+1]+=g*$t,q(_,2*y+2*T+1),_[2*y+2*T+2]+=A*$t,q(_,2*y+2*T+2)}for(y=0;y<m;y++)_[y]=_[2*y+1]<<16|_[2*y];for(y=m;y<2*m;y++)_[y]=0;return new a(_,0)};function q(E,m){for(;(E[m]&65535)!=E[m];)E[m+1]+=E[m]>>>16,E[m]&=65535,m++}function F(E,m){this.g=E,this.h=m}function j(E,m){if(D(m))throw Error("division by zero");if(D(E))return new F(v,v);if(N(E))return m=j(C(E),m),new F(C(m.g),C(m.h));if(N(m))return m=j(E,C(m)),new F(C(m.g),m.h);if(30<E.g.length){if(N(E)||N(m))throw Error("slowDivide_ only works with positive integers.");for(var _=I,y=m;0>=y.l(E);)_=ft(_),y=ft(y);var T=Z(_,1),A=Z(y,1);for(y=Z(y,2),_=Z(_,2);!D(y);){var g=A.add(y);0>=g.l(E)&&(T=T.add(_),A=g),y=Z(y,1),_=Z(_,1)}return m=B(E,T.j(m)),new F(T,m)}for(T=v;0<=E.l(m);){for(_=Math.max(1,Math.floor(E.m()/m.m())),y=Math.ceil(Math.log(_)/Math.LN2),y=48>=y?1:Math.pow(2,y-48),A=d(_),g=A.j(m);N(g)||0<g.l(E);)_-=y,A=d(_),g=A.j(m);D(A)&&(A=I),T=T.add(A),E=B(E,g)}return new F(T,E)}n.A=function(E){return j(this,E).h},n.and=function(E){for(var m=Math.max(this.g.length,E.g.length),_=[],y=0;y<m;y++)_[y]=this.i(y)&E.i(y);return new a(_,this.h&E.h)},n.or=function(E){for(var m=Math.max(this.g.length,E.g.length),_=[],y=0;y<m;y++)_[y]=this.i(y)|E.i(y);return new a(_,this.h|E.h)},n.xor=function(E){for(var m=Math.max(this.g.length,E.g.length),_=[],y=0;y<m;y++)_[y]=this.i(y)^E.i(y);return new a(_,this.h^E.h)};function ft(E){for(var m=E.g.length+1,_=[],y=0;y<m;y++)_[y]=E.i(y)<<1|E.i(y-1)>>>31;return new a(_,E.h)}function Z(E,m){var _=m>>5;m%=32;for(var y=E.g.length-_,T=[],A=0;A<y;A++)T[A]=0<m?E.i(A+_)>>>m|E.i(A+_+1)<<32-m:E.i(A+_);return new a(T,E.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,_u=r,a.prototype.add=a.prototype.add,a.prototype.multiply=a.prototype.j,a.prototype.modulo=a.prototype.A,a.prototype.compare=a.prototype.l,a.prototype.toNumber=a.prototype.m,a.prototype.toString=a.prototype.toString,a.prototype.getBits=a.prototype.i,a.fromNumber=d,a.fromString=p,Te=a}).apply(typeof ka<"u"?ka:typeof self<"u"?self:typeof window<"u"?window:{});var pr=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var yu,Eu,In,Tu,yr,Ys,vu,wu,Iu;(function(){var n,t=typeof Object.defineProperties=="function"?Object.defineProperty:function(i,c,l){return i==Array.prototype||i==Object.prototype||(i[c]=l.value),i};function e(i){i=[typeof globalThis=="object"&&globalThis,i,typeof window=="object"&&window,typeof self=="object"&&self,typeof pr=="object"&&pr];for(var c=0;c<i.length;++c){var l=i[c];if(l&&l.Math==Math)return l}throw Error("Cannot find global object")}var r=e(this);function s(i,c){if(c)t:{var l=r;i=i.split(".");for(var f=0;f<i.length-1;f++){var w=i[f];if(!(w in l))break t;l=l[w]}i=i[i.length-1],f=l[i],c=c(f),c!=f&&c!=null&&t(l,i,{configurable:!0,writable:!0,value:c})}}function o(i,c){i instanceof String&&(i+="");var l=0,f=!1,w={next:function(){if(!f&&l<i.length){var R=l++;return{value:c(R,i[R]),done:!1}}return f=!0,{done:!0,value:void 0}}};return w[Symbol.iterator]=function(){return w},w}s("Array.prototype.values",function(i){return i||function(){return o(this,function(c,l){return l})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var a=a||{},u=this||self;function h(i){var c=typeof i;return c=c!="object"?c:i?Array.isArray(i)?"array":c:"null",c=="array"||c=="object"&&typeof i.length=="number"}function d(i){var c=typeof i;return c=="object"&&i!=null||c=="function"}function p(i,c,l){return i.call.apply(i.bind,arguments)}function v(i,c,l){if(!i)throw Error();if(2<arguments.length){var f=Array.prototype.slice.call(arguments,2);return function(){var w=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(w,f),i.apply(c,w)}}return function(){return i.apply(c,arguments)}}function I(i,c,l){return I=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?p:v,I.apply(null,arguments)}function b(i,c){var l=Array.prototype.slice.call(arguments,1);return function(){var f=l.slice();return f.push.apply(f,arguments),i.apply(this,f)}}function D(i,c){function l(){}l.prototype=c.prototype,i.aa=c.prototype,i.prototype=new l,i.prototype.constructor=i,i.Qb=function(f,w,R){for(var V=Array(arguments.length-2),W=2;W<arguments.length;W++)V[W-2]=arguments[W];return c.prototype[w].apply(f,V)}}function N(i){const c=i.length;if(0<c){const l=Array(c);for(let f=0;f<c;f++)l[f]=i[f];return l}return[]}function C(i,c){for(let l=1;l<arguments.length;l++){const f=arguments[l];if(h(f)){const w=i.length||0,R=f.length||0;i.length=w+R;for(let V=0;V<R;V++)i[w+V]=f[V]}else i.push(f)}}class B{constructor(c,l){this.i=c,this.j=l,this.h=0,this.g=null}get(){let c;return 0<this.h?(this.h--,c=this.g,this.g=c.next,c.next=null):c=this.i(),c}}function q(i){return/^[\s\xa0]*$/.test(i)}function F(){var i=u.navigator;return i&&(i=i.userAgent)?i:""}function j(i){return j[" "](i),i}j[" "]=function(){};var ft=F().indexOf("Gecko")!=-1&&!(F().toLowerCase().indexOf("webkit")!=-1&&F().indexOf("Edge")==-1)&&!(F().indexOf("Trident")!=-1||F().indexOf("MSIE")!=-1)&&F().indexOf("Edge")==-1;function Z(i,c,l){for(const f in i)c.call(l,i[f],f,i)}function E(i,c){for(const l in i)c.call(void 0,i[l],l,i)}function m(i){const c={};for(const l in i)c[l]=i[l];return c}const _="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function y(i,c){let l,f;for(let w=1;w<arguments.length;w++){f=arguments[w];for(l in f)i[l]=f[l];for(let R=0;R<_.length;R++)l=_[R],Object.prototype.hasOwnProperty.call(f,l)&&(i[l]=f[l])}}function T(i){var c=1;i=i.split(":");const l=[];for(;0<c&&i.length;)l.push(i.shift()),c--;return i.length&&l.push(i.join(":")),l}function A(i){u.setTimeout(()=>{throw i},0)}function g(){var i=is;let c=null;return i.g&&(c=i.g,i.g=i.g.next,i.g||(i.h=null),c.next=null),c}class $t{constructor(){this.h=this.g=null}add(c,l){const f=nn.get();f.set(c,l),this.h?this.h.next=f:this.g=f,this.h=f}}var nn=new B(()=>new $l,i=>i.reset());class $l{constructor(){this.next=this.g=this.h=null}set(c,l){this.h=c,this.g=l,this.next=null}reset(){this.next=this.g=this.h=null}}let rn,sn=!1,is=new $t,oo=()=>{const i=u.Promise.resolve(void 0);rn=()=>{i.then(zl)}};var zl=()=>{for(var i;i=g();){try{i.h.call(i.g)}catch(l){A(l)}var c=nn;c.j(i),100>c.h&&(c.h++,i.next=c.g,c.g=i)}sn=!1};function Zt(){this.s=this.s,this.C=this.C}Zt.prototype.s=!1,Zt.prototype.ma=function(){this.s||(this.s=!0,this.N())},Zt.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function pt(i,c){this.type=i,this.g=this.target=c,this.defaultPrevented=!1}pt.prototype.h=function(){this.defaultPrevented=!0};var Hl=function(){if(!u.addEventListener||!Object.defineProperty)return!1;var i=!1,c=Object.defineProperty({},"passive",{get:function(){i=!0}});try{const l=()=>{};u.addEventListener("test",l,c),u.removeEventListener("test",l,c)}catch{}return i}();function on(i,c){if(pt.call(this,i?i.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,i){var l=this.type=i.type,f=i.changedTouches&&i.changedTouches.length?i.changedTouches[0]:null;if(this.target=i.target||i.srcElement,this.g=c,c=i.relatedTarget){if(ft){t:{try{j(c.nodeName);var w=!0;break t}catch{}w=!1}w||(c=null)}}else l=="mouseover"?c=i.fromElement:l=="mouseout"&&(c=i.toElement);this.relatedTarget=c,f?(this.clientX=f.clientX!==void 0?f.clientX:f.pageX,this.clientY=f.clientY!==void 0?f.clientY:f.pageY,this.screenX=f.screenX||0,this.screenY=f.screenY||0):(this.clientX=i.clientX!==void 0?i.clientX:i.pageX,this.clientY=i.clientY!==void 0?i.clientY:i.pageY,this.screenX=i.screenX||0,this.screenY=i.screenY||0),this.button=i.button,this.key=i.key||"",this.ctrlKey=i.ctrlKey,this.altKey=i.altKey,this.shiftKey=i.shiftKey,this.metaKey=i.metaKey,this.pointerId=i.pointerId||0,this.pointerType=typeof i.pointerType=="string"?i.pointerType:Gl[i.pointerType]||"",this.state=i.state,this.i=i,i.defaultPrevented&&on.aa.h.call(this)}}D(on,pt);var Gl={2:"touch",3:"pen",4:"mouse"};on.prototype.h=function(){on.aa.h.call(this);var i=this.i;i.preventDefault?i.preventDefault():i.returnValue=!1};var Wn="closure_listenable_"+(1e6*Math.random()|0),Kl=0;function Wl(i,c,l,f,w){this.listener=i,this.proxy=null,this.src=c,this.type=l,this.capture=!!f,this.ha=w,this.key=++Kl,this.da=this.fa=!1}function Qn(i){i.da=!0,i.listener=null,i.proxy=null,i.src=null,i.ha=null}function Xn(i){this.src=i,this.g={},this.h=0}Xn.prototype.add=function(i,c,l,f,w){var R=i.toString();i=this.g[R],i||(i=this.g[R]=[],this.h++);var V=as(i,c,f,w);return-1<V?(c=i[V],l||(c.fa=!1)):(c=new Wl(c,this.src,R,!!f,w),c.fa=l,i.push(c)),c};function os(i,c){var l=c.type;if(l in i.g){var f=i.g[l],w=Array.prototype.indexOf.call(f,c,void 0),R;(R=0<=w)&&Array.prototype.splice.call(f,w,1),R&&(Qn(c),i.g[l].length==0&&(delete i.g[l],i.h--))}}function as(i,c,l,f){for(var w=0;w<i.length;++w){var R=i[w];if(!R.da&&R.listener==c&&R.capture==!!l&&R.ha==f)return w}return-1}var cs="closure_lm_"+(1e6*Math.random()|0),us={};function ao(i,c,l,f,w){if(Array.isArray(c)){for(var R=0;R<c.length;R++)ao(i,c[R],l,f,w);return null}return l=lo(l),i&&i[Wn]?i.K(c,l,d(f)?!!f.capture:!!f,w):Ql(i,c,l,!1,f,w)}function Ql(i,c,l,f,w,R){if(!c)throw Error("Invalid event type");var V=d(w)?!!w.capture:!!w,W=hs(i);if(W||(i[cs]=W=new Xn(i)),l=W.add(c,l,f,V,R),l.proxy)return l;if(f=Xl(),l.proxy=f,f.src=i,f.listener=l,i.addEventListener)Hl||(w=V),w===void 0&&(w=!1),i.addEventListener(c.toString(),f,w);else if(i.attachEvent)i.attachEvent(uo(c.toString()),f);else if(i.addListener&&i.removeListener)i.addListener(f);else throw Error("addEventListener and attachEvent are unavailable.");return l}function Xl(){function i(l){return c.call(i.src,i.listener,l)}const c=Yl;return i}function co(i,c,l,f,w){if(Array.isArray(c))for(var R=0;R<c.length;R++)co(i,c[R],l,f,w);else f=d(f)?!!f.capture:!!f,l=lo(l),i&&i[Wn]?(i=i.i,c=String(c).toString(),c in i.g&&(R=i.g[c],l=as(R,l,f,w),-1<l&&(Qn(R[l]),Array.prototype.splice.call(R,l,1),R.length==0&&(delete i.g[c],i.h--)))):i&&(i=hs(i))&&(c=i.g[c.toString()],i=-1,c&&(i=as(c,l,f,w)),(l=-1<i?c[i]:null)&&ls(l))}function ls(i){if(typeof i!="number"&&i&&!i.da){var c=i.src;if(c&&c[Wn])os(c.i,i);else{var l=i.type,f=i.proxy;c.removeEventListener?c.removeEventListener(l,f,i.capture):c.detachEvent?c.detachEvent(uo(l),f):c.addListener&&c.removeListener&&c.removeListener(f),(l=hs(c))?(os(l,i),l.h==0&&(l.src=null,c[cs]=null)):Qn(i)}}}function uo(i){return i in us?us[i]:us[i]="on"+i}function Yl(i,c){if(i.da)i=!0;else{c=new on(c,this);var l=i.listener,f=i.ha||i.src;i.fa&&ls(i),i=l.call(f,c)}return i}function hs(i){return i=i[cs],i instanceof Xn?i:null}var ds="__closure_events_fn_"+(1e9*Math.random()>>>0);function lo(i){return typeof i=="function"?i:(i[ds]||(i[ds]=function(c){return i.handleEvent(c)}),i[ds])}function mt(){Zt.call(this),this.i=new Xn(this),this.M=this,this.F=null}D(mt,Zt),mt.prototype[Wn]=!0,mt.prototype.removeEventListener=function(i,c,l,f){co(this,i,c,l,f)};function wt(i,c){var l,f=i.F;if(f)for(l=[];f;f=f.F)l.push(f);if(i=i.M,f=c.type||c,typeof c=="string")c=new pt(c,i);else if(c instanceof pt)c.target=c.target||i;else{var w=c;c=new pt(f,i),y(c,w)}if(w=!0,l)for(var R=l.length-1;0<=R;R--){var V=c.g=l[R];w=Yn(V,f,!0,c)&&w}if(V=c.g=i,w=Yn(V,f,!0,c)&&w,w=Yn(V,f,!1,c)&&w,l)for(R=0;R<l.length;R++)V=c.g=l[R],w=Yn(V,f,!1,c)&&w}mt.prototype.N=function(){if(mt.aa.N.call(this),this.i){var i=this.i,c;for(c in i.g){for(var l=i.g[c],f=0;f<l.length;f++)Qn(l[f]);delete i.g[c],i.h--}}this.F=null},mt.prototype.K=function(i,c,l,f){return this.i.add(String(i),c,!1,l,f)},mt.prototype.L=function(i,c,l,f){return this.i.add(String(i),c,!0,l,f)};function Yn(i,c,l,f){if(c=i.i.g[String(c)],!c)return!0;c=c.concat();for(var w=!0,R=0;R<c.length;++R){var V=c[R];if(V&&!V.da&&V.capture==l){var W=V.listener,ct=V.ha||V.src;V.fa&&os(i.i,V),w=W.call(ct,f)!==!1&&w}}return w&&!f.defaultPrevented}function ho(i,c,l){if(typeof i=="function")l&&(i=I(i,l));else if(i&&typeof i.handleEvent=="function")i=I(i.handleEvent,i);else throw Error("Invalid listener argument");return 2147483647<Number(c)?-1:u.setTimeout(i,c||0)}function fo(i){i.g=ho(()=>{i.g=null,i.i&&(i.i=!1,fo(i))},i.l);const c=i.h;i.h=null,i.m.apply(null,c)}class Jl extends Zt{constructor(c,l){super(),this.m=c,this.l=l,this.h=null,this.i=!1,this.g=null}j(c){this.h=arguments,this.g?this.i=!0:fo(this)}N(){super.N(),this.g&&(u.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function an(i){Zt.call(this),this.h=i,this.g={}}D(an,Zt);var po=[];function mo(i){Z(i.g,function(c,l){this.g.hasOwnProperty(l)&&ls(c)},i),i.g={}}an.prototype.N=function(){an.aa.N.call(this),mo(this)},an.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var fs=u.JSON.stringify,Zl=u.JSON.parse,th=class{stringify(i){return u.JSON.stringify(i,void 0)}parse(i){return u.JSON.parse(i,void 0)}};function ps(){}ps.prototype.h=null;function go(i){return i.h||(i.h=i.i())}function _o(){}var cn={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function ms(){pt.call(this,"d")}D(ms,pt);function gs(){pt.call(this,"c")}D(gs,pt);var de={},yo=null;function Jn(){return yo=yo||new mt}de.La="serverreachability";function Eo(i){pt.call(this,de.La,i)}D(Eo,pt);function un(i){const c=Jn();wt(c,new Eo(c))}de.STAT_EVENT="statevent";function To(i,c){pt.call(this,de.STAT_EVENT,i),this.stat=c}D(To,pt);function It(i){const c=Jn();wt(c,new To(c,i))}de.Ma="timingevent";function vo(i,c){pt.call(this,de.Ma,i),this.size=c}D(vo,pt);function ln(i,c){if(typeof i!="function")throw Error("Fn must not be null and must be a function");return u.setTimeout(function(){i()},c)}function hn(){this.g=!0}hn.prototype.xa=function(){this.g=!1};function eh(i,c,l,f,w,R){i.info(function(){if(i.g)if(R)for(var V="",W=R.split("&"),ct=0;ct<W.length;ct++){var G=W[ct].split("=");if(1<G.length){var gt=G[0];G=G[1];var _t=gt.split("_");V=2<=_t.length&&_t[1]=="type"?V+(gt+"="+G+"&"):V+(gt+"=redacted&")}}else V=null;else V=R;return"XMLHTTP REQ ("+f+") [attempt "+w+"]: "+c+`
`+l+`
`+V})}function nh(i,c,l,f,w,R,V){i.info(function(){return"XMLHTTP RESP ("+f+") [ attempt "+w+"]: "+c+`
`+l+`
`+R+" "+V})}function ke(i,c,l,f){i.info(function(){return"XMLHTTP TEXT ("+c+"): "+sh(i,l)+(f?" "+f:"")})}function rh(i,c){i.info(function(){return"TIMEOUT: "+c})}hn.prototype.info=function(){};function sh(i,c){if(!i.g)return c;if(!c)return null;try{var l=JSON.parse(c);if(l){for(i=0;i<l.length;i++)if(Array.isArray(l[i])){var f=l[i];if(!(2>f.length)){var w=f[1];if(Array.isArray(w)&&!(1>w.length)){var R=w[0];if(R!="noop"&&R!="stop"&&R!="close")for(var V=1;V<w.length;V++)w[V]=""}}}}return fs(l)}catch{return c}}var Zn={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},wo={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},_s;function tr(){}D(tr,ps),tr.prototype.g=function(){return new XMLHttpRequest},tr.prototype.i=function(){return{}},_s=new tr;function te(i,c,l,f){this.j=i,this.i=c,this.l=l,this.R=f||1,this.U=new an(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new Io}function Io(){this.i=null,this.g="",this.h=!1}var Ao={},ys={};function Es(i,c,l){i.L=1,i.v=sr(zt(c)),i.m=l,i.P=!0,Ro(i,null)}function Ro(i,c){i.F=Date.now(),er(i),i.A=zt(i.v);var l=i.A,f=i.R;Array.isArray(f)||(f=[String(f)]),Uo(l.i,"t",f),i.C=0,l=i.j.J,i.h=new Io,i.g=ra(i.j,l?c:null,!i.m),0<i.O&&(i.M=new Jl(I(i.Y,i,i.g),i.O)),c=i.U,l=i.g,f=i.ca;var w="readystatechange";Array.isArray(w)||(w&&(po[0]=w.toString()),w=po);for(var R=0;R<w.length;R++){var V=ao(l,w[R],f||c.handleEvent,!1,c.h||c);if(!V)break;c.g[V.key]=V}c=i.H?m(i.H):{},i.m?(i.u||(i.u="POST"),c["Content-Type"]="application/x-www-form-urlencoded",i.g.ea(i.A,i.u,i.m,c)):(i.u="GET",i.g.ea(i.A,i.u,null,c)),un(),eh(i.i,i.u,i.A,i.l,i.R,i.m)}te.prototype.ca=function(i){i=i.target;const c=this.M;c&&Ht(i)==3?c.j():this.Y(i)},te.prototype.Y=function(i){try{if(i==this.g)t:{const _t=Ht(this.g);var c=this.g.Ba();const xe=this.g.Z();if(!(3>_t)&&(_t!=3||this.g&&(this.h.h||this.g.oa()||Go(this.g)))){this.J||_t!=4||c==7||(c==8||0>=xe?un(3):un(2)),Ts(this);var l=this.g.Z();this.X=l;e:if(bo(this)){var f=Go(this.g);i="";var w=f.length,R=Ht(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){fe(this),dn(this);var V="";break e}this.h.i=new u.TextDecoder}for(c=0;c<w;c++)this.h.h=!0,i+=this.h.i.decode(f[c],{stream:!(R&&c==w-1)});f.length=0,this.h.g+=i,this.C=0,V=this.h.g}else V=this.g.oa();if(this.o=l==200,nh(this.i,this.u,this.A,this.l,this.R,_t,l),this.o){if(this.T&&!this.K){e:{if(this.g){var W,ct=this.g;if((W=ct.g?ct.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!q(W)){var G=W;break e}}G=null}if(l=G)ke(this.i,this.l,l,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,vs(this,l);else{this.o=!1,this.s=3,It(12),fe(this),dn(this);break t}}if(this.P){l=!0;let xt;for(;!this.J&&this.C<V.length;)if(xt=ih(this,V),xt==ys){_t==4&&(this.s=4,It(14),l=!1),ke(this.i,this.l,null,"[Incomplete Response]");break}else if(xt==Ao){this.s=4,It(15),ke(this.i,this.l,V,"[Invalid Chunk]"),l=!1;break}else ke(this.i,this.l,xt,null),vs(this,xt);if(bo(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),_t!=4||V.length!=0||this.h.h||(this.s=1,It(16),l=!1),this.o=this.o&&l,!l)ke(this.i,this.l,V,"[Invalid Chunked Response]"),fe(this),dn(this);else if(0<V.length&&!this.W){this.W=!0;var gt=this.j;gt.g==this&&gt.ba&&!gt.M&&(gt.j.info("Great, no buffering proxy detected. Bytes received: "+V.length),Ss(gt),gt.M=!0,It(11))}}else ke(this.i,this.l,V,null),vs(this,V);_t==4&&fe(this),this.o&&!this.J&&(_t==4?Zo(this.j,this):(this.o=!1,er(this)))}else wh(this.g),l==400&&0<V.indexOf("Unknown SID")?(this.s=3,It(12)):(this.s=0,It(13)),fe(this),dn(this)}}}catch{}finally{}};function bo(i){return i.g?i.u=="GET"&&i.L!=2&&i.j.Ca:!1}function ih(i,c){var l=i.C,f=c.indexOf(`
`,l);return f==-1?ys:(l=Number(c.substring(l,f)),isNaN(l)?Ao:(f+=1,f+l>c.length?ys:(c=c.slice(f,f+l),i.C=f+l,c)))}te.prototype.cancel=function(){this.J=!0,fe(this)};function er(i){i.S=Date.now()+i.I,So(i,i.I)}function So(i,c){if(i.B!=null)throw Error("WatchDog timer not null");i.B=ln(I(i.ba,i),c)}function Ts(i){i.B&&(u.clearTimeout(i.B),i.B=null)}te.prototype.ba=function(){this.B=null;const i=Date.now();0<=i-this.S?(rh(this.i,this.A),this.L!=2&&(un(),It(17)),fe(this),this.s=2,dn(this)):So(this,this.S-i)};function dn(i){i.j.G==0||i.J||Zo(i.j,i)}function fe(i){Ts(i);var c=i.M;c&&typeof c.ma=="function"&&c.ma(),i.M=null,mo(i.U),i.g&&(c=i.g,i.g=null,c.abort(),c.ma())}function vs(i,c){try{var l=i.j;if(l.G!=0&&(l.g==i||ws(l.h,i))){if(!i.K&&ws(l.h,i)&&l.G==3){try{var f=l.Da.g.parse(c)}catch{f=null}if(Array.isArray(f)&&f.length==3){var w=f;if(w[0]==0){t:if(!l.u){if(l.g)if(l.g.F+3e3<i.F)ur(l),ar(l);else break t;bs(l),It(18)}}else l.za=w[1],0<l.za-l.T&&37500>w[2]&&l.F&&l.v==0&&!l.C&&(l.C=ln(I(l.Za,l),6e3));if(1>=Do(l.h)&&l.ca){try{l.ca()}catch{}l.ca=void 0}}else me(l,11)}else if((i.K||l.g==i)&&ur(l),!q(c))for(w=l.Da.g.parse(c),c=0;c<w.length;c++){let G=w[c];if(l.T=G[0],G=G[1],l.G==2)if(G[0]=="c"){l.K=G[1],l.ia=G[2];const gt=G[3];gt!=null&&(l.la=gt,l.j.info("VER="+l.la));const _t=G[4];_t!=null&&(l.Aa=_t,l.j.info("SVER="+l.Aa));const xe=G[5];xe!=null&&typeof xe=="number"&&0<xe&&(f=1.5*xe,l.L=f,l.j.info("backChannelRequestTimeoutMs_="+f)),f=l;const xt=i.g;if(xt){const hr=xt.g?xt.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(hr){var R=f.h;R.g||hr.indexOf("spdy")==-1&&hr.indexOf("quic")==-1&&hr.indexOf("h2")==-1||(R.j=R.l,R.g=new Set,R.h&&(Is(R,R.h),R.h=null))}if(f.D){const Ps=xt.g?xt.g.getResponseHeader("X-HTTP-Session-Id"):null;Ps&&(f.ya=Ps,X(f.I,f.D,Ps))}}l.G=3,l.l&&l.l.ua(),l.ba&&(l.R=Date.now()-i.F,l.j.info("Handshake RTT: "+l.R+"ms")),f=l;var V=i;if(f.qa=na(f,f.J?f.ia:null,f.W),V.K){Vo(f.h,V);var W=V,ct=f.L;ct&&(W.I=ct),W.B&&(Ts(W),er(W)),f.g=V}else Yo(f);0<l.i.length&&cr(l)}else G[0]!="stop"&&G[0]!="close"||me(l,7);else l.G==3&&(G[0]=="stop"||G[0]=="close"?G[0]=="stop"?me(l,7):Rs(l):G[0]!="noop"&&l.l&&l.l.ta(G),l.v=0)}}un(4)}catch{}}var oh=class{constructor(i,c){this.g=i,this.map=c}};function Po(i){this.l=i||10,u.PerformanceNavigationTiming?(i=u.performance.getEntriesByType("navigation"),i=0<i.length&&(i[0].nextHopProtocol=="hq"||i[0].nextHopProtocol=="h2")):i=!!(u.chrome&&u.chrome.loadTimes&&u.chrome.loadTimes()&&u.chrome.loadTimes().wasFetchedViaSpdy),this.j=i?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function Co(i){return i.h?!0:i.g?i.g.size>=i.j:!1}function Do(i){return i.h?1:i.g?i.g.size:0}function ws(i,c){return i.h?i.h==c:i.g?i.g.has(c):!1}function Is(i,c){i.g?i.g.add(c):i.h=c}function Vo(i,c){i.h&&i.h==c?i.h=null:i.g&&i.g.has(c)&&i.g.delete(c)}Po.prototype.cancel=function(){if(this.i=ko(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const i of this.g.values())i.cancel();this.g.clear()}};function ko(i){if(i.h!=null)return i.i.concat(i.h.D);if(i.g!=null&&i.g.size!==0){let c=i.i;for(const l of i.g.values())c=c.concat(l.D);return c}return N(i.i)}function ah(i){if(i.V&&typeof i.V=="function")return i.V();if(typeof Map<"u"&&i instanceof Map||typeof Set<"u"&&i instanceof Set)return Array.from(i.values());if(typeof i=="string")return i.split("");if(h(i)){for(var c=[],l=i.length,f=0;f<l;f++)c.push(i[f]);return c}c=[],l=0;for(f in i)c[l++]=i[f];return c}function ch(i){if(i.na&&typeof i.na=="function")return i.na();if(!i.V||typeof i.V!="function"){if(typeof Map<"u"&&i instanceof Map)return Array.from(i.keys());if(!(typeof Set<"u"&&i instanceof Set)){if(h(i)||typeof i=="string"){var c=[];i=i.length;for(var l=0;l<i;l++)c.push(l);return c}c=[],l=0;for(const f in i)c[l++]=f;return c}}}function No(i,c){if(i.forEach&&typeof i.forEach=="function")i.forEach(c,void 0);else if(h(i)||typeof i=="string")Array.prototype.forEach.call(i,c,void 0);else for(var l=ch(i),f=ah(i),w=f.length,R=0;R<w;R++)c.call(void 0,f[R],l&&l[R],i)}var Oo=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function uh(i,c){if(i){i=i.split("&");for(var l=0;l<i.length;l++){var f=i[l].indexOf("="),w=null;if(0<=f){var R=i[l].substring(0,f);w=i[l].substring(f+1)}else R=i[l];c(R,w?decodeURIComponent(w.replace(/\+/g," ")):"")}}}function pe(i){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,i instanceof pe){this.h=i.h,nr(this,i.j),this.o=i.o,this.g=i.g,rr(this,i.s),this.l=i.l;var c=i.i,l=new mn;l.i=c.i,c.g&&(l.g=new Map(c.g),l.h=c.h),xo(this,l),this.m=i.m}else i&&(c=String(i).match(Oo))?(this.h=!1,nr(this,c[1]||"",!0),this.o=fn(c[2]||""),this.g=fn(c[3]||"",!0),rr(this,c[4]),this.l=fn(c[5]||"",!0),xo(this,c[6]||"",!0),this.m=fn(c[7]||"")):(this.h=!1,this.i=new mn(null,this.h))}pe.prototype.toString=function(){var i=[],c=this.j;c&&i.push(pn(c,Mo,!0),":");var l=this.g;return(l||c=="file")&&(i.push("//"),(c=this.o)&&i.push(pn(c,Mo,!0),"@"),i.push(encodeURIComponent(String(l)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),l=this.s,l!=null&&i.push(":",String(l))),(l=this.l)&&(this.g&&l.charAt(0)!="/"&&i.push("/"),i.push(pn(l,l.charAt(0)=="/"?dh:hh,!0))),(l=this.i.toString())&&i.push("?",l),(l=this.m)&&i.push("#",pn(l,ph)),i.join("")};function zt(i){return new pe(i)}function nr(i,c,l){i.j=l?fn(c,!0):c,i.j&&(i.j=i.j.replace(/:$/,""))}function rr(i,c){if(c){if(c=Number(c),isNaN(c)||0>c)throw Error("Bad port number "+c);i.s=c}else i.s=null}function xo(i,c,l){c instanceof mn?(i.i=c,mh(i.i,i.h)):(l||(c=pn(c,fh)),i.i=new mn(c,i.h))}function X(i,c,l){i.i.set(c,l)}function sr(i){return X(i,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),i}function fn(i,c){return i?c?decodeURI(i.replace(/%25/g,"%2525")):decodeURIComponent(i):""}function pn(i,c,l){return typeof i=="string"?(i=encodeURI(i).replace(c,lh),l&&(i=i.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),i):null}function lh(i){return i=i.charCodeAt(0),"%"+(i>>4&15).toString(16)+(i&15).toString(16)}var Mo=/[#\/\?@]/g,hh=/[#\?:]/g,dh=/[#\?]/g,fh=/[#\?@]/g,ph=/#/g;function mn(i,c){this.h=this.g=null,this.i=i||null,this.j=!!c}function ee(i){i.g||(i.g=new Map,i.h=0,i.i&&uh(i.i,function(c,l){i.add(decodeURIComponent(c.replace(/\+/g," ")),l)}))}n=mn.prototype,n.add=function(i,c){ee(this),this.i=null,i=Ne(this,i);var l=this.g.get(i);return l||this.g.set(i,l=[]),l.push(c),this.h+=1,this};function Lo(i,c){ee(i),c=Ne(i,c),i.g.has(c)&&(i.i=null,i.h-=i.g.get(c).length,i.g.delete(c))}function Fo(i,c){return ee(i),c=Ne(i,c),i.g.has(c)}n.forEach=function(i,c){ee(this),this.g.forEach(function(l,f){l.forEach(function(w){i.call(c,w,f,this)},this)},this)},n.na=function(){ee(this);const i=Array.from(this.g.values()),c=Array.from(this.g.keys()),l=[];for(let f=0;f<c.length;f++){const w=i[f];for(let R=0;R<w.length;R++)l.push(c[f])}return l},n.V=function(i){ee(this);let c=[];if(typeof i=="string")Fo(this,i)&&(c=c.concat(this.g.get(Ne(this,i))));else{i=Array.from(this.g.values());for(let l=0;l<i.length;l++)c=c.concat(i[l])}return c},n.set=function(i,c){return ee(this),this.i=null,i=Ne(this,i),Fo(this,i)&&(this.h-=this.g.get(i).length),this.g.set(i,[c]),this.h+=1,this},n.get=function(i,c){return i?(i=this.V(i),0<i.length?String(i[0]):c):c};function Uo(i,c,l){Lo(i,c),0<l.length&&(i.i=null,i.g.set(Ne(i,c),N(l)),i.h+=l.length)}n.toString=function(){if(this.i)return this.i;if(!this.g)return"";const i=[],c=Array.from(this.g.keys());for(var l=0;l<c.length;l++){var f=c[l];const R=encodeURIComponent(String(f)),V=this.V(f);for(f=0;f<V.length;f++){var w=R;V[f]!==""&&(w+="="+encodeURIComponent(String(V[f]))),i.push(w)}}return this.i=i.join("&")};function Ne(i,c){return c=String(c),i.j&&(c=c.toLowerCase()),c}function mh(i,c){c&&!i.j&&(ee(i),i.i=null,i.g.forEach(function(l,f){var w=f.toLowerCase();f!=w&&(Lo(this,f),Uo(this,w,l))},i)),i.j=c}function gh(i,c){const l=new hn;if(u.Image){const f=new Image;f.onload=b(ne,l,"TestLoadImage: loaded",!0,c,f),f.onerror=b(ne,l,"TestLoadImage: error",!1,c,f),f.onabort=b(ne,l,"TestLoadImage: abort",!1,c,f),f.ontimeout=b(ne,l,"TestLoadImage: timeout",!1,c,f),u.setTimeout(function(){f.ontimeout&&f.ontimeout()},1e4),f.src=i}else c(!1)}function _h(i,c){const l=new hn,f=new AbortController,w=setTimeout(()=>{f.abort(),ne(l,"TestPingServer: timeout",!1,c)},1e4);fetch(i,{signal:f.signal}).then(R=>{clearTimeout(w),R.ok?ne(l,"TestPingServer: ok",!0,c):ne(l,"TestPingServer: server error",!1,c)}).catch(()=>{clearTimeout(w),ne(l,"TestPingServer: error",!1,c)})}function ne(i,c,l,f,w){try{w&&(w.onload=null,w.onerror=null,w.onabort=null,w.ontimeout=null),f(l)}catch{}}function yh(){this.g=new th}function Eh(i,c,l){const f=l||"";try{No(i,function(w,R){let V=w;d(w)&&(V=fs(w)),c.push(f+R+"="+encodeURIComponent(V))})}catch(w){throw c.push(f+"type="+encodeURIComponent("_badmap")),w}}function gn(i){this.l=i.Ub||null,this.j=i.eb||!1}D(gn,ps),gn.prototype.g=function(){return new ir(this.l,this.j)},gn.prototype.i=function(i){return function(){return i}}({});function ir(i,c){mt.call(this),this.D=i,this.o=c,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}D(ir,mt),n=ir.prototype,n.open=function(i,c){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=i,this.A=c,this.readyState=1,yn(this)},n.send=function(i){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const c={headers:this.u,method:this.B,credentials:this.m,cache:void 0};i&&(c.body=i),(this.D||u).fetch(new Request(this.A,c)).then(this.Sa.bind(this),this.ga.bind(this))},n.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,_n(this)),this.readyState=0},n.Sa=function(i){if(this.g&&(this.l=i,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=i.headers,this.readyState=2,yn(this)),this.g&&(this.readyState=3,yn(this),this.g)))if(this.responseType==="arraybuffer")i.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof u.ReadableStream<"u"&&"body"in i){if(this.j=i.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;Bo(this)}else i.text().then(this.Ra.bind(this),this.ga.bind(this))};function Bo(i){i.j.read().then(i.Pa.bind(i)).catch(i.ga.bind(i))}n.Pa=function(i){if(this.g){if(this.o&&i.value)this.response.push(i.value);else if(!this.o){var c=i.value?i.value:new Uint8Array(0);(c=this.v.decode(c,{stream:!i.done}))&&(this.response=this.responseText+=c)}i.done?_n(this):yn(this),this.readyState==3&&Bo(this)}},n.Ra=function(i){this.g&&(this.response=this.responseText=i,_n(this))},n.Qa=function(i){this.g&&(this.response=i,_n(this))},n.ga=function(){this.g&&_n(this)};function _n(i){i.readyState=4,i.l=null,i.j=null,i.v=null,yn(i)}n.setRequestHeader=function(i,c){this.u.append(i,c)},n.getResponseHeader=function(i){return this.h&&this.h.get(i.toLowerCase())||""},n.getAllResponseHeaders=function(){if(!this.h)return"";const i=[],c=this.h.entries();for(var l=c.next();!l.done;)l=l.value,i.push(l[0]+": "+l[1]),l=c.next();return i.join(`\r
`)};function yn(i){i.onreadystatechange&&i.onreadystatechange.call(i)}Object.defineProperty(ir.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(i){this.m=i?"include":"same-origin"}});function qo(i){let c="";return Z(i,function(l,f){c+=f,c+=":",c+=l,c+=`\r
`}),c}function As(i,c,l){t:{for(f in l){var f=!1;break t}f=!0}f||(l=qo(l),typeof i=="string"?l!=null&&encodeURIComponent(String(l)):X(i,c,l))}function nt(i){mt.call(this),this.headers=new Map,this.o=i||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}D(nt,mt);var Th=/^https?$/i,vh=["POST","PUT"];n=nt.prototype,n.Ha=function(i){this.J=i},n.ea=function(i,c,l,f){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+i);c=c?c.toUpperCase():"GET",this.D=i,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():_s.g(),this.v=this.o?go(this.o):go(_s),this.g.onreadystatechange=I(this.Ea,this);try{this.B=!0,this.g.open(c,String(i),!0),this.B=!1}catch(R){jo(this,R);return}if(i=l||"",l=new Map(this.headers),f)if(Object.getPrototypeOf(f)===Object.prototype)for(var w in f)l.set(w,f[w]);else if(typeof f.keys=="function"&&typeof f.get=="function")for(const R of f.keys())l.set(R,f.get(R));else throw Error("Unknown input type for opt_headers: "+String(f));f=Array.from(l.keys()).find(R=>R.toLowerCase()=="content-type"),w=u.FormData&&i instanceof u.FormData,!(0<=Array.prototype.indexOf.call(vh,c,void 0))||f||w||l.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[R,V]of l)this.g.setRequestHeader(R,V);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{Ho(this),this.u=!0,this.g.send(i),this.u=!1}catch(R){jo(this,R)}};function jo(i,c){i.h=!1,i.g&&(i.j=!0,i.g.abort(),i.j=!1),i.l=c,i.m=5,$o(i),or(i)}function $o(i){i.A||(i.A=!0,wt(i,"complete"),wt(i,"error"))}n.abort=function(i){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=i||7,wt(this,"complete"),wt(this,"abort"),or(this))},n.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),or(this,!0)),nt.aa.N.call(this)},n.Ea=function(){this.s||(this.B||this.u||this.j?zo(this):this.bb())},n.bb=function(){zo(this)};function zo(i){if(i.h&&typeof a<"u"&&(!i.v[1]||Ht(i)!=4||i.Z()!=2)){if(i.u&&Ht(i)==4)ho(i.Ea,0,i);else if(wt(i,"readystatechange"),Ht(i)==4){i.h=!1;try{const V=i.Z();t:switch(V){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var c=!0;break t;default:c=!1}var l;if(!(l=c)){var f;if(f=V===0){var w=String(i.D).match(Oo)[1]||null;!w&&u.self&&u.self.location&&(w=u.self.location.protocol.slice(0,-1)),f=!Th.test(w?w.toLowerCase():"")}l=f}if(l)wt(i,"complete"),wt(i,"success");else{i.m=6;try{var R=2<Ht(i)?i.g.statusText:""}catch{R=""}i.l=R+" ["+i.Z()+"]",$o(i)}}finally{or(i)}}}}function or(i,c){if(i.g){Ho(i);const l=i.g,f=i.v[0]?()=>{}:null;i.g=null,i.v=null,c||wt(i,"ready");try{l.onreadystatechange=f}catch{}}}function Ho(i){i.I&&(u.clearTimeout(i.I),i.I=null)}n.isActive=function(){return!!this.g};function Ht(i){return i.g?i.g.readyState:0}n.Z=function(){try{return 2<Ht(this)?this.g.status:-1}catch{return-1}},n.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},n.Oa=function(i){if(this.g){var c=this.g.responseText;return i&&c.indexOf(i)==0&&(c=c.substring(i.length)),Zl(c)}};function Go(i){try{if(!i.g)return null;if("response"in i.g)return i.g.response;switch(i.H){case"":case"text":return i.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in i.g)return i.g.mozResponseArrayBuffer}return null}catch{return null}}function wh(i){const c={};i=(i.g&&2<=Ht(i)&&i.g.getAllResponseHeaders()||"").split(`\r
`);for(let f=0;f<i.length;f++){if(q(i[f]))continue;var l=T(i[f]);const w=l[0];if(l=l[1],typeof l!="string")continue;l=l.trim();const R=c[w]||[];c[w]=R,R.push(l)}E(c,function(f){return f.join(", ")})}n.Ba=function(){return this.m},n.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function En(i,c,l){return l&&l.internalChannelParams&&l.internalChannelParams[i]||c}function Ko(i){this.Aa=0,this.i=[],this.j=new hn,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=En("failFast",!1,i),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=En("baseRetryDelayMs",5e3,i),this.cb=En("retryDelaySeedMs",1e4,i),this.Wa=En("forwardChannelMaxRetries",2,i),this.wa=En("forwardChannelRequestTimeoutMs",2e4,i),this.pa=i&&i.xmlHttpFactory||void 0,this.Xa=i&&i.Tb||void 0,this.Ca=i&&i.useFetchStreams||!1,this.L=void 0,this.J=i&&i.supportsCrossDomainXhr||!1,this.K="",this.h=new Po(i&&i.concurrentRequestLimit),this.Da=new yh,this.P=i&&i.fastHandshake||!1,this.O=i&&i.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=i&&i.Rb||!1,i&&i.xa&&this.j.xa(),i&&i.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&i&&i.detectBufferingProxy||!1,this.ja=void 0,i&&i.longPollingTimeout&&0<i.longPollingTimeout&&(this.ja=i.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}n=Ko.prototype,n.la=8,n.G=1,n.connect=function(i,c,l,f){It(0),this.W=i,this.H=c||{},l&&f!==void 0&&(this.H.OSID=l,this.H.OAID=f),this.F=this.X,this.I=na(this,null,this.W),cr(this)};function Rs(i){if(Wo(i),i.G==3){var c=i.U++,l=zt(i.I);if(X(l,"SID",i.K),X(l,"RID",c),X(l,"TYPE","terminate"),Tn(i,l),c=new te(i,i.j,c),c.L=2,c.v=sr(zt(l)),l=!1,u.navigator&&u.navigator.sendBeacon)try{l=u.navigator.sendBeacon(c.v.toString(),"")}catch{}!l&&u.Image&&(new Image().src=c.v,l=!0),l||(c.g=ra(c.j,null),c.g.ea(c.v)),c.F=Date.now(),er(c)}ea(i)}function ar(i){i.g&&(Ss(i),i.g.cancel(),i.g=null)}function Wo(i){ar(i),i.u&&(u.clearTimeout(i.u),i.u=null),ur(i),i.h.cancel(),i.s&&(typeof i.s=="number"&&u.clearTimeout(i.s),i.s=null)}function cr(i){if(!Co(i.h)&&!i.s){i.s=!0;var c=i.Ga;rn||oo(),sn||(rn(),sn=!0),is.add(c,i),i.B=0}}function Ih(i,c){return Do(i.h)>=i.h.j-(i.s?1:0)?!1:i.s?(i.i=c.D.concat(i.i),!0):i.G==1||i.G==2||i.B>=(i.Va?0:i.Wa)?!1:(i.s=ln(I(i.Ga,i,c),ta(i,i.B)),i.B++,!0)}n.Ga=function(i){if(this.s)if(this.s=null,this.G==1){if(!i){this.U=Math.floor(1e5*Math.random()),i=this.U++;const w=new te(this,this.j,i);let R=this.o;if(this.S&&(R?(R=m(R),y(R,this.S)):R=this.S),this.m!==null||this.O||(w.H=R,R=null),this.P)t:{for(var c=0,l=0;l<this.i.length;l++){e:{var f=this.i[l];if("__data__"in f.map&&(f=f.map.__data__,typeof f=="string")){f=f.length;break e}f=void 0}if(f===void 0)break;if(c+=f,4096<c){c=l;break t}if(c===4096||l===this.i.length-1){c=l+1;break t}}c=1e3}else c=1e3;c=Xo(this,w,c),l=zt(this.I),X(l,"RID",i),X(l,"CVER",22),this.D&&X(l,"X-HTTP-Session-Id",this.D),Tn(this,l),R&&(this.O?c="headers="+encodeURIComponent(String(qo(R)))+"&"+c:this.m&&As(l,this.m,R)),Is(this.h,w),this.Ua&&X(l,"TYPE","init"),this.P?(X(l,"$req",c),X(l,"SID","null"),w.T=!0,Es(w,l,null)):Es(w,l,c),this.G=2}}else this.G==3&&(i?Qo(this,i):this.i.length==0||Co(this.h)||Qo(this))};function Qo(i,c){var l;c?l=c.l:l=i.U++;const f=zt(i.I);X(f,"SID",i.K),X(f,"RID",l),X(f,"AID",i.T),Tn(i,f),i.m&&i.o&&As(f,i.m,i.o),l=new te(i,i.j,l,i.B+1),i.m===null&&(l.H=i.o),c&&(i.i=c.D.concat(i.i)),c=Xo(i,l,1e3),l.I=Math.round(.5*i.wa)+Math.round(.5*i.wa*Math.random()),Is(i.h,l),Es(l,f,c)}function Tn(i,c){i.H&&Z(i.H,function(l,f){X(c,f,l)}),i.l&&No({},function(l,f){X(c,f,l)})}function Xo(i,c,l){l=Math.min(i.i.length,l);var f=i.l?I(i.l.Na,i.l,i):null;t:{var w=i.i;let R=-1;for(;;){const V=["count="+l];R==-1?0<l?(R=w[0].g,V.push("ofs="+R)):R=0:V.push("ofs="+R);let W=!0;for(let ct=0;ct<l;ct++){let G=w[ct].g;const gt=w[ct].map;if(G-=R,0>G)R=Math.max(0,w[ct].g-100),W=!1;else try{Eh(gt,V,"req"+G+"_")}catch{f&&f(gt)}}if(W){f=V.join("&");break t}}}return i=i.i.splice(0,l),c.D=i,f}function Yo(i){if(!i.g&&!i.u){i.Y=1;var c=i.Fa;rn||oo(),sn||(rn(),sn=!0),is.add(c,i),i.v=0}}function bs(i){return i.g||i.u||3<=i.v?!1:(i.Y++,i.u=ln(I(i.Fa,i),ta(i,i.v)),i.v++,!0)}n.Fa=function(){if(this.u=null,Jo(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var i=2*this.R;this.j.info("BP detection timer enabled: "+i),this.A=ln(I(this.ab,this),i)}},n.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,It(10),ar(this),Jo(this))};function Ss(i){i.A!=null&&(u.clearTimeout(i.A),i.A=null)}function Jo(i){i.g=new te(i,i.j,"rpc",i.Y),i.m===null&&(i.g.H=i.o),i.g.O=0;var c=zt(i.qa);X(c,"RID","rpc"),X(c,"SID",i.K),X(c,"AID",i.T),X(c,"CI",i.F?"0":"1"),!i.F&&i.ja&&X(c,"TO",i.ja),X(c,"TYPE","xmlhttp"),Tn(i,c),i.m&&i.o&&As(c,i.m,i.o),i.L&&(i.g.I=i.L);var l=i.g;i=i.ia,l.L=1,l.v=sr(zt(c)),l.m=null,l.P=!0,Ro(l,i)}n.Za=function(){this.C!=null&&(this.C=null,ar(this),bs(this),It(19))};function ur(i){i.C!=null&&(u.clearTimeout(i.C),i.C=null)}function Zo(i,c){var l=null;if(i.g==c){ur(i),Ss(i),i.g=null;var f=2}else if(ws(i.h,c))l=c.D,Vo(i.h,c),f=1;else return;if(i.G!=0){if(c.o)if(f==1){l=c.m?c.m.length:0,c=Date.now()-c.F;var w=i.B;f=Jn(),wt(f,new vo(f,l)),cr(i)}else Yo(i);else if(w=c.s,w==3||w==0&&0<c.X||!(f==1&&Ih(i,c)||f==2&&bs(i)))switch(l&&0<l.length&&(c=i.h,c.i=c.i.concat(l)),w){case 1:me(i,5);break;case 4:me(i,10);break;case 3:me(i,6);break;default:me(i,2)}}}function ta(i,c){let l=i.Ta+Math.floor(Math.random()*i.cb);return i.isActive()||(l*=2),l*c}function me(i,c){if(i.j.info("Error code "+c),c==2){var l=I(i.fb,i),f=i.Xa;const w=!f;f=new pe(f||"//www.google.com/images/cleardot.gif"),u.location&&u.location.protocol=="http"||nr(f,"https"),sr(f),w?gh(f.toString(),l):_h(f.toString(),l)}else It(2);i.G=0,i.l&&i.l.sa(c),ea(i),Wo(i)}n.fb=function(i){i?(this.j.info("Successfully pinged google.com"),It(2)):(this.j.info("Failed to ping google.com"),It(1))};function ea(i){if(i.G=0,i.ka=[],i.l){const c=ko(i.h);(c.length!=0||i.i.length!=0)&&(C(i.ka,c),C(i.ka,i.i),i.h.i.length=0,N(i.i),i.i.length=0),i.l.ra()}}function na(i,c,l){var f=l instanceof pe?zt(l):new pe(l);if(f.g!="")c&&(f.g=c+"."+f.g),rr(f,f.s);else{var w=u.location;f=w.protocol,c=c?c+"."+w.hostname:w.hostname,w=+w.port;var R=new pe(null);f&&nr(R,f),c&&(R.g=c),w&&rr(R,w),l&&(R.l=l),f=R}return l=i.D,c=i.ya,l&&c&&X(f,l,c),X(f,"VER",i.la),Tn(i,f),f}function ra(i,c,l){if(c&&!i.J)throw Error("Can't create secondary domain capable XhrIo object.");return c=i.Ca&&!i.pa?new nt(new gn({eb:l})):new nt(i.pa),c.Ha(i.J),c}n.isActive=function(){return!!this.l&&this.l.isActive(this)};function sa(){}n=sa.prototype,n.ua=function(){},n.ta=function(){},n.sa=function(){},n.ra=function(){},n.isActive=function(){return!0},n.Na=function(){};function lr(){}lr.prototype.g=function(i,c){return new Ct(i,c)};function Ct(i,c){mt.call(this),this.g=new Ko(c),this.l=i,this.h=c&&c.messageUrlParams||null,i=c&&c.messageHeaders||null,c&&c.clientProtocolHeaderRequired&&(i?i["X-Client-Protocol"]="webchannel":i={"X-Client-Protocol":"webchannel"}),this.g.o=i,i=c&&c.initMessageHeaders||null,c&&c.messageContentType&&(i?i["X-WebChannel-Content-Type"]=c.messageContentType:i={"X-WebChannel-Content-Type":c.messageContentType}),c&&c.va&&(i?i["X-WebChannel-Client-Profile"]=c.va:i={"X-WebChannel-Client-Profile":c.va}),this.g.S=i,(i=c&&c.Sb)&&!q(i)&&(this.g.m=i),this.v=c&&c.supportsCrossDomainXhr||!1,this.u=c&&c.sendRawJson||!1,(c=c&&c.httpSessionIdParam)&&!q(c)&&(this.g.D=c,i=this.h,i!==null&&c in i&&(i=this.h,c in i&&delete i[c])),this.j=new Oe(this)}D(Ct,mt),Ct.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},Ct.prototype.close=function(){Rs(this.g)},Ct.prototype.o=function(i){var c=this.g;if(typeof i=="string"){var l={};l.__data__=i,i=l}else this.u&&(l={},l.__data__=fs(i),i=l);c.i.push(new oh(c.Ya++,i)),c.G==3&&cr(c)},Ct.prototype.N=function(){this.g.l=null,delete this.j,Rs(this.g),delete this.g,Ct.aa.N.call(this)};function ia(i){ms.call(this),i.__headers__&&(this.headers=i.__headers__,this.statusCode=i.__status__,delete i.__headers__,delete i.__status__);var c=i.__sm__;if(c){t:{for(const l in c){i=l;break t}i=void 0}(this.i=i)&&(i=this.i,c=c!==null&&i in c?c[i]:void 0),this.data=c}else this.data=i}D(ia,ms);function oa(){gs.call(this),this.status=1}D(oa,gs);function Oe(i){this.g=i}D(Oe,sa),Oe.prototype.ua=function(){wt(this.g,"a")},Oe.prototype.ta=function(i){wt(this.g,new ia(i))},Oe.prototype.sa=function(i){wt(this.g,new oa)},Oe.prototype.ra=function(){wt(this.g,"b")},lr.prototype.createWebChannel=lr.prototype.g,Ct.prototype.send=Ct.prototype.o,Ct.prototype.open=Ct.prototype.m,Ct.prototype.close=Ct.prototype.close,Iu=function(){return new lr},wu=function(){return Jn()},vu=de,Ys={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},Zn.NO_ERROR=0,Zn.TIMEOUT=8,Zn.HTTP_ERROR=6,yr=Zn,wo.COMPLETE="complete",Tu=wo,_o.EventType=cn,cn.OPEN="a",cn.CLOSE="b",cn.ERROR="c",cn.MESSAGE="d",mt.prototype.listen=mt.prototype.K,In=_o,Eu=gn,nt.prototype.listenOnce=nt.prototype.L,nt.prototype.getLastError=nt.prototype.Ka,nt.prototype.getLastErrorCode=nt.prototype.Ba,nt.prototype.getStatus=nt.prototype.Z,nt.prototype.getResponseJson=nt.prototype.Oa,nt.prototype.getResponseText=nt.prototype.oa,nt.prototype.send=nt.prototype.ea,nt.prototype.setWithCredentials=nt.prototype.Ha,yu=nt}).apply(typeof pr<"u"?pr:typeof self<"u"?self:typeof window<"u"?window:{});const Na="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Et{constructor(t){this.uid=t}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(t){return t.uid===this.uid}}Et.UNAUTHENTICATED=new Et(null),Et.GOOGLE_CREDENTIALS=new Et("google-credentials-uid"),Et.FIRST_PARTY=new Et("first-party-uid"),Et.MOCK_USER=new Et("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ye="10.12.1";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Re=new fi("@firebase/firestore");function wn(){return Re.logLevel}function O(n,...t){if(Re.logLevel<=H.DEBUG){const e=t.map(Pi);Re.debug(`Firestore (${Ye}): ${n}`,...e)}}function Xt(n,...t){if(Re.logLevel<=H.ERROR){const e=t.map(Pi);Re.error(`Firestore (${Ye}): ${n}`,...e)}}function qe(n,...t){if(Re.logLevel<=H.WARN){const e=t.map(Pi);Re.warn(`Firestore (${Ye}): ${n}`,...e)}}function Pi(n){if(typeof n=="string")return n;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return function(e){return JSON.stringify(e)}(n)}catch{return n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function M(n="Unexpected state"){const t=`FIRESTORE (${Ye}) INTERNAL ASSERTION FAILED: `+n;throw Xt(t),new Error(t)}function Q(n,t){n||M()}function U(n,t){return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const S={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class k extends Jt{constructor(t,e){super(t,e),this.code=t,this.message=e,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wt{constructor(){this.promise=new Promise((t,e)=>{this.resolve=t,this.reject=e})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Au{constructor(t,e){this.user=e,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${t}`)}}class Om{getToken(){return Promise.resolve(null)}invalidateToken(){}start(t,e){t.enqueueRetryable(()=>e(Et.UNAUTHENTICATED))}shutdown(){}}class xm{constructor(t){this.token=t,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(t,e){this.changeListener=e,t.enqueueRetryable(()=>e(this.token.user))}shutdown(){this.changeListener=null}}class Mm{constructor(t){this.t=t,this.currentUser=Et.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(t,e){let r=this.i;const s=h=>this.i!==r?(r=this.i,e(h)):Promise.resolve();let o=new Wt;this.o=()=>{this.i++,this.currentUser=this.u(),o.resolve(),o=new Wt,t.enqueueRetryable(()=>s(this.currentUser))};const a=()=>{const h=o;t.enqueueRetryable(async()=>{await h.promise,await s(this.currentUser)})},u=h=>{O("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=h,this.auth.addAuthTokenListener(this.o),a()};this.t.onInit(h=>u(h)),setTimeout(()=>{if(!this.auth){const h=this.t.getImmediate({optional:!0});h?u(h):(O("FirebaseAuthCredentialsProvider","Auth not yet detected"),o.resolve(),o=new Wt)}},0),a()}getToken(){const t=this.i,e=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(e).then(r=>this.i!==t?(O("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(Q(typeof r.accessToken=="string"),new Au(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const t=this.auth&&this.auth.getUid();return Q(t===null||typeof t=="string"),new Et(t)}}class Lm{constructor(t,e,r){this.l=t,this.h=e,this.P=r,this.type="FirstParty",this.user=Et.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const t=this.T();return t&&this.I.set("Authorization",t),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class Fm{constructor(t,e,r){this.l=t,this.h=e,this.P=r}getToken(){return Promise.resolve(new Lm(this.l,this.h,this.P))}start(t,e){t.enqueueRetryable(()=>e(Et.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class Um{constructor(t){this.value=t,this.type="AppCheck",this.headers=new Map,t&&t.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class Bm{constructor(t){this.A=t,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(t,e){const r=o=>{o.error!=null&&O("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${o.error.message}`);const a=o.token!==this.R;return this.R=o.token,O("FirebaseAppCheckTokenProvider",`Received ${a?"new":"existing"} token.`),a?e(o.token):Promise.resolve()};this.o=o=>{t.enqueueRetryable(()=>r(o))};const s=o=>{O("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=o,this.appCheck.addTokenListener(this.o)};this.A.onInit(o=>s(o)),setTimeout(()=>{if(!this.appCheck){const o=this.A.getImmediate({optional:!0});o?s(o):O("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const t=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(t).then(e=>e?(Q(typeof e.token=="string"),this.R=e.token,new Um(e.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qm(n){const t=typeof self<"u"&&(self.crypto||self.msCrypto),e=new Uint8Array(n);if(t&&typeof t.getRandomValues=="function")t.getRandomValues(e);else for(let r=0;r<n;r++)e[r]=Math.floor(256*Math.random());return e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ru{static newId(){const t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",e=Math.floor(256/t.length)*t.length;let r="";for(;r.length<20;){const s=qm(40);for(let o=0;o<s.length;++o)r.length<20&&s[o]<e&&(r+=t.charAt(s[o]%t.length))}return r}}function K(n,t){return n<t?-1:n>t?1:0}function je(n,t,e){return n.length===t.length&&n.every((r,s)=>e(r,t[s]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ot{constructor(t,e){if(this.seconds=t,this.nanoseconds=e,e<0)throw new k(S.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(e>=1e9)throw new k(S.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(t<-62135596800)throw new k(S.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t);if(t>=253402300800)throw new k(S.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t)}static now(){return ot.fromMillis(Date.now())}static fromDate(t){return ot.fromMillis(t.getTime())}static fromMillis(t){const e=Math.floor(t/1e3),r=Math.floor(1e6*(t-1e3*e));return new ot(e,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(t){return this.seconds===t.seconds?K(this.nanoseconds,t.nanoseconds):K(this.seconds,t.seconds)}isEqual(t){return t.seconds===this.seconds&&t.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const t=this.seconds- -62135596800;return String(t).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class L{constructor(t){this.timestamp=t}static fromTimestamp(t){return new L(t)}static min(){return new L(new ot(0,0))}static max(){return new L(new ot(253402300799,999999999))}compareTo(t){return this.timestamp._compareTo(t.timestamp)}isEqual(t){return this.timestamp.isEqual(t.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xn{constructor(t,e,r){e===void 0?e=0:e>t.length&&M(),r===void 0?r=t.length-e:r>t.length-e&&M(),this.segments=t,this.offset=e,this.len=r}get length(){return this.len}isEqual(t){return xn.comparator(this,t)===0}child(t){const e=this.segments.slice(this.offset,this.limit());return t instanceof xn?t.forEach(r=>{e.push(r)}):e.push(t),this.construct(e)}limit(){return this.offset+this.length}popFirst(t){return t=t===void 0?1:t,this.construct(this.segments,this.offset+t,this.length-t)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(t){return this.segments[this.offset+t]}isEmpty(){return this.length===0}isPrefixOf(t){if(t.length<this.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}isImmediateParentOf(t){if(this.length+1!==t.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}forEach(t){for(let e=this.offset,r=this.limit();e<r;e++)t(this.segments[e])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(t,e){const r=Math.min(t.length,e.length);for(let s=0;s<r;s++){const o=t.get(s),a=e.get(s);if(o<a)return-1;if(o>a)return 1}return t.length<e.length?-1:t.length>e.length?1:0}}class Y extends xn{construct(t,e,r){return new Y(t,e,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...t){const e=[];for(const r of t){if(r.indexOf("//")>=0)throw new k(S.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);e.push(...r.split("/").filter(s=>s.length>0))}return new Y(e)}static emptyPath(){return new Y([])}}const jm=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class lt extends xn{construct(t,e,r){return new lt(t,e,r)}static isValidIdentifier(t){return jm.test(t)}canonicalString(){return this.toArray().map(t=>(t=t.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),lt.isValidIdentifier(t)||(t="`"+t+"`"),t)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new lt(["__name__"])}static fromServerFormat(t){const e=[];let r="",s=0;const o=()=>{if(r.length===0)throw new k(S.INVALID_ARGUMENT,`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);e.push(r),r=""};let a=!1;for(;s<t.length;){const u=t[s];if(u==="\\"){if(s+1===t.length)throw new k(S.INVALID_ARGUMENT,"Path has trailing escape character: "+t);const h=t[s+1];if(h!=="\\"&&h!=="."&&h!=="`")throw new k(S.INVALID_ARGUMENT,"Path has invalid escape sequence: "+t);r+=h,s+=2}else u==="`"?(a=!a,s++):u!=="."||a?(r+=u,s++):(o(),s++)}if(o(),a)throw new k(S.INVALID_ARGUMENT,"Unterminated ` in path: "+t);return new lt(e)}static emptyPath(){return new lt([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class x{constructor(t){this.path=t}static fromPath(t){return new x(Y.fromString(t))}static fromName(t){return new x(Y.fromString(t).popFirst(5))}static empty(){return new x(Y.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(t){return this.path.length>=2&&this.path.get(this.path.length-2)===t}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(t){return t!==null&&Y.comparator(this.path,t.path)===0}toString(){return this.path.toString()}static comparator(t,e){return Y.comparator(t.path,e.path)}static isDocumentKey(t){return t.length%2==0}static fromSegments(t){return new x(new Y(t.slice()))}}function $m(n,t){const e=n.toTimestamp().seconds,r=n.toTimestamp().nanoseconds+1,s=L.fromTimestamp(r===1e9?new ot(e+1,0):new ot(e,r));return new ce(s,x.empty(),t)}function zm(n){return new ce(n.readTime,n.key,-1)}class ce{constructor(t,e,r){this.readTime=t,this.documentKey=e,this.largestBatchId=r}static min(){return new ce(L.min(),x.empty(),-1)}static max(){return new ce(L.max(),x.empty(),-1)}}function Hm(n,t){let e=n.readTime.compareTo(t.readTime);return e!==0?e:(e=x.comparator(n.documentKey,t.documentKey),e!==0?e:K(n.largestBatchId,t.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gm="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class Km{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(t){this.onCommittedListeners.push(t)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(t=>t())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function qn(n){if(n.code!==S.FAILED_PRECONDITION||n.message!==Gm)throw n;O("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class P{constructor(t){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,t(e=>{this.isDone=!0,this.result=e,this.nextCallback&&this.nextCallback(e)},e=>{this.isDone=!0,this.error=e,this.catchCallback&&this.catchCallback(e)})}catch(t){return this.next(void 0,t)}next(t,e){return this.callbackAttached&&M(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(e,this.error):this.wrapSuccess(t,this.result):new P((r,s)=>{this.nextCallback=o=>{this.wrapSuccess(t,o).next(r,s)},this.catchCallback=o=>{this.wrapFailure(e,o).next(r,s)}})}toPromise(){return new Promise((t,e)=>{this.next(t,e)})}wrapUserFunction(t){try{const e=t();return e instanceof P?e:P.resolve(e)}catch(e){return P.reject(e)}}wrapSuccess(t,e){return t?this.wrapUserFunction(()=>t(e)):P.resolve(e)}wrapFailure(t,e){return t?this.wrapUserFunction(()=>t(e)):P.reject(e)}static resolve(t){return new P((e,r)=>{e(t)})}static reject(t){return new P((e,r)=>{r(t)})}static waitFor(t){return new P((e,r)=>{let s=0,o=0,a=!1;t.forEach(u=>{++s,u.next(()=>{++o,a&&o===s&&e()},h=>r(h))}),a=!0,o===s&&e()})}static or(t){let e=P.resolve(!1);for(const r of t)e=e.next(s=>s?P.resolve(s):r());return e}static forEach(t,e){const r=[];return t.forEach((s,o)=>{r.push(e.call(this,s,o))}),this.waitFor(r)}static mapArray(t,e){return new P((r,s)=>{const o=t.length,a=new Array(o);let u=0;for(let h=0;h<o;h++){const d=h;e(t[d]).next(p=>{a[d]=p,++u,u===o&&r(a)},p=>s(p))}})}static doWhile(t,e){return new P((r,s)=>{const o=()=>{t()===!0?e().next(()=>{o()},s):r()};o()})}}function Wm(n){const t=n.match(/Android ([\d.]+)/i),e=t?t[1].split(".").slice(0,2).join("."):"-1";return Number(e)}function jn(n){return n.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ci{constructor(t,e){this.previousValue=t,e&&(e.sequenceNumberHandler=r=>this.ie(r),this.se=r=>e.writeSequenceNumber(r))}ie(t){return this.previousValue=Math.max(t,this.previousValue),this.previousValue}next(){const t=++this.previousValue;return this.se&&this.se(t),t}}Ci.oe=-1;function qr(n){return n==null}function Pr(n){return n===0&&1/n==-1/0}function Qm(n){return typeof n=="number"&&Number.isInteger(n)&&!Pr(n)&&n<=Number.MAX_SAFE_INTEGER&&n>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Oa(n){let t=0;for(const e in n)Object.prototype.hasOwnProperty.call(n,e)&&t++;return t}function Ce(n,t){for(const e in n)Object.prototype.hasOwnProperty.call(n,e)&&t(e,n[e])}function bu(n){for(const t in n)if(Object.prototype.hasOwnProperty.call(n,t))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tt{constructor(t,e){this.comparator=t,this.root=e||ut.EMPTY}insert(t,e){return new tt(this.comparator,this.root.insert(t,e,this.comparator).copy(null,null,ut.BLACK,null,null))}remove(t){return new tt(this.comparator,this.root.remove(t,this.comparator).copy(null,null,ut.BLACK,null,null))}get(t){let e=this.root;for(;!e.isEmpty();){const r=this.comparator(t,e.key);if(r===0)return e.value;r<0?e=e.left:r>0&&(e=e.right)}return null}indexOf(t){let e=0,r=this.root;for(;!r.isEmpty();){const s=this.comparator(t,r.key);if(s===0)return e+r.left.size;s<0?r=r.left:(e+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(t){return this.root.inorderTraversal(t)}forEach(t){this.inorderTraversal((e,r)=>(t(e,r),!1))}toString(){const t=[];return this.inorderTraversal((e,r)=>(t.push(`${e}:${r}`),!1)),`{${t.join(", ")}}`}reverseTraversal(t){return this.root.reverseTraversal(t)}getIterator(){return new mr(this.root,null,this.comparator,!1)}getIteratorFrom(t){return new mr(this.root,t,this.comparator,!1)}getReverseIterator(){return new mr(this.root,null,this.comparator,!0)}getReverseIteratorFrom(t){return new mr(this.root,t,this.comparator,!0)}}class mr{constructor(t,e,r,s){this.isReverse=s,this.nodeStack=[];let o=1;for(;!t.isEmpty();)if(o=e?r(t.key,e):1,e&&s&&(o*=-1),o<0)t=this.isReverse?t.left:t.right;else{if(o===0){this.nodeStack.push(t);break}this.nodeStack.push(t),t=this.isReverse?t.right:t.left}}getNext(){let t=this.nodeStack.pop();const e={key:t.key,value:t.value};if(this.isReverse)for(t=t.left;!t.isEmpty();)this.nodeStack.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.nodeStack.push(t),t=t.left;return e}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const t=this.nodeStack[this.nodeStack.length-1];return{key:t.key,value:t.value}}}class ut{constructor(t,e,r,s,o){this.key=t,this.value=e,this.color=r??ut.RED,this.left=s??ut.EMPTY,this.right=o??ut.EMPTY,this.size=this.left.size+1+this.right.size}copy(t,e,r,s,o){return new ut(t??this.key,e??this.value,r??this.color,s??this.left,o??this.right)}isEmpty(){return!1}inorderTraversal(t){return this.left.inorderTraversal(t)||t(this.key,this.value)||this.right.inorderTraversal(t)}reverseTraversal(t){return this.right.reverseTraversal(t)||t(this.key,this.value)||this.left.reverseTraversal(t)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(t,e,r){let s=this;const o=r(t,s.key);return s=o<0?s.copy(null,null,null,s.left.insert(t,e,r),null):o===0?s.copy(null,e,null,null,null):s.copy(null,null,null,null,s.right.insert(t,e,r)),s.fixUp()}removeMin(){if(this.left.isEmpty())return ut.EMPTY;let t=this;return t.left.isRed()||t.left.left.isRed()||(t=t.moveRedLeft()),t=t.copy(null,null,null,t.left.removeMin(),null),t.fixUp()}remove(t,e){let r,s=this;if(e(t,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(t,e),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),e(t,s.key)===0){if(s.right.isEmpty())return ut.EMPTY;r=s.right.min(),s=s.copy(r.key,r.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(t,e))}return s.fixUp()}isRed(){return this.color}fixUp(){let t=this;return t.right.isRed()&&!t.left.isRed()&&(t=t.rotateLeft()),t.left.isRed()&&t.left.left.isRed()&&(t=t.rotateRight()),t.left.isRed()&&t.right.isRed()&&(t=t.colorFlip()),t}moveRedLeft(){let t=this.colorFlip();return t.right.left.isRed()&&(t=t.copy(null,null,null,null,t.right.rotateRight()),t=t.rotateLeft(),t=t.colorFlip()),t}moveRedRight(){let t=this.colorFlip();return t.left.left.isRed()&&(t=t.rotateRight(),t=t.colorFlip()),t}rotateLeft(){const t=this.copy(null,null,ut.RED,null,this.right.left);return this.right.copy(null,null,this.color,t,null)}rotateRight(){const t=this.copy(null,null,ut.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,t)}colorFlip(){const t=this.left.copy(null,null,!this.left.color,null,null),e=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,t,e)}checkMaxDepth(){const t=this.check();return Math.pow(2,t)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw M();const t=this.left.check();if(t!==this.right.check())throw M();return t+(this.isRed()?0:1)}}ut.EMPTY=null,ut.RED=!0,ut.BLACK=!1;ut.EMPTY=new class{constructor(){this.size=0}get key(){throw M()}get value(){throw M()}get color(){throw M()}get left(){throw M()}get right(){throw M()}copy(t,e,r,s,o){return this}insert(t,e,r){return new ut(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ht{constructor(t){this.comparator=t,this.data=new tt(this.comparator)}has(t){return this.data.get(t)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(t){return this.data.indexOf(t)}forEach(t){this.data.inorderTraversal((e,r)=>(t(e),!1))}forEachInRange(t,e){const r=this.data.getIteratorFrom(t[0]);for(;r.hasNext();){const s=r.getNext();if(this.comparator(s.key,t[1])>=0)return;e(s.key)}}forEachWhile(t,e){let r;for(r=e!==void 0?this.data.getIteratorFrom(e):this.data.getIterator();r.hasNext();)if(!t(r.getNext().key))return}firstAfterOrEqual(t){const e=this.data.getIteratorFrom(t);return e.hasNext()?e.getNext().key:null}getIterator(){return new xa(this.data.getIterator())}getIteratorFrom(t){return new xa(this.data.getIteratorFrom(t))}add(t){return this.copy(this.data.remove(t).insert(t,!0))}delete(t){return this.has(t)?this.copy(this.data.remove(t)):this}isEmpty(){return this.data.isEmpty()}unionWith(t){let e=this;return e.size<t.size&&(e=t,t=this),t.forEach(r=>{e=e.add(r)}),e}isEqual(t){if(!(t instanceof ht)||this.size!==t.size)return!1;const e=this.data.getIterator(),r=t.data.getIterator();for(;e.hasNext();){const s=e.getNext().key,o=r.getNext().key;if(this.comparator(s,o)!==0)return!1}return!0}toArray(){const t=[];return this.forEach(e=>{t.push(e)}),t}toString(){const t=[];return this.forEach(e=>t.push(e)),"SortedSet("+t.toString()+")"}copy(t){const e=new ht(this.comparator);return e.data=t,e}}class xa{constructor(t){this.iter=t}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vt{constructor(t){this.fields=t,t.sort(lt.comparator)}static empty(){return new Vt([])}unionWith(t){let e=new ht(lt.comparator);for(const r of this.fields)e=e.add(r);for(const r of t)e=e.add(r);return new Vt(e.toArray())}covers(t){for(const e of this.fields)if(e.isPrefixOf(t))return!0;return!1}isEqual(t){return je(this.fields,t.fields,(e,r)=>e.isEqual(r))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Su extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vt{constructor(t){this.binaryString=t}static fromBase64String(t){const e=function(s){try{return atob(s)}catch(o){throw typeof DOMException<"u"&&o instanceof DOMException?new Su("Invalid base64 string: "+o):o}}(t);return new vt(e)}static fromUint8Array(t){const e=function(s){let o="";for(let a=0;a<s.length;++a)o+=String.fromCharCode(s[a]);return o}(t);return new vt(e)}[Symbol.iterator](){let t=0;return{next:()=>t<this.binaryString.length?{value:this.binaryString.charCodeAt(t++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(e){return btoa(e)}(this.binaryString)}toUint8Array(){return function(e){const r=new Uint8Array(e.length);for(let s=0;s<e.length;s++)r[s]=e.charCodeAt(s);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(t){return K(this.binaryString,t.binaryString)}isEqual(t){return this.binaryString===t.binaryString}}vt.EMPTY_BYTE_STRING=new vt("");const Xm=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function ue(n){if(Q(!!n),typeof n=="string"){let t=0;const e=Xm.exec(n);if(Q(!!e),e[1]){let s=e[1];s=(s+"000000000").substr(0,9),t=Number(s)}const r=new Date(n);return{seconds:Math.floor(r.getTime()/1e3),nanos:t}}return{seconds:st(n.seconds),nanos:st(n.nanos)}}function st(n){return typeof n=="number"?n:typeof n=="string"?Number(n):0}function be(n){return typeof n=="string"?vt.fromBase64String(n):vt.fromUint8Array(n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Di(n){var t,e;return((e=(((t=n==null?void 0:n.mapValue)===null||t===void 0?void 0:t.fields)||{}).__type__)===null||e===void 0?void 0:e.stringValue)==="server_timestamp"}function Vi(n){const t=n.mapValue.fields.__previous_value__;return Di(t)?Vi(t):t}function Mn(n){const t=ue(n.mapValue.fields.__local_write_time__.timestampValue);return new ot(t.seconds,t.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ym{constructor(t,e,r,s,o,a,u,h,d){this.databaseId=t,this.appId=e,this.persistenceKey=r,this.host=s,this.ssl=o,this.forceLongPolling=a,this.autoDetectLongPolling=u,this.longPollingOptions=h,this.useFetchStreams=d}}class Ln{constructor(t,e){this.projectId=t,this.database=e||"(default)"}static empty(){return new Ln("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(t){return t instanceof Ln&&t.projectId===this.projectId&&t.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gr={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function Se(n){return"nullValue"in n?0:"booleanValue"in n?1:"integerValue"in n||"doubleValue"in n?2:"timestampValue"in n?3:"stringValue"in n?5:"bytesValue"in n?6:"referenceValue"in n?7:"geoPointValue"in n?8:"arrayValue"in n?9:"mapValue"in n?Di(n)?4:Jm(n)?9007199254740991:10:M()}function jt(n,t){if(n===t)return!0;const e=Se(n);if(e!==Se(t))return!1;switch(e){case 0:case 9007199254740991:return!0;case 1:return n.booleanValue===t.booleanValue;case 4:return Mn(n).isEqual(Mn(t));case 3:return function(s,o){if(typeof s.timestampValue=="string"&&typeof o.timestampValue=="string"&&s.timestampValue.length===o.timestampValue.length)return s.timestampValue===o.timestampValue;const a=ue(s.timestampValue),u=ue(o.timestampValue);return a.seconds===u.seconds&&a.nanos===u.nanos}(n,t);case 5:return n.stringValue===t.stringValue;case 6:return function(s,o){return be(s.bytesValue).isEqual(be(o.bytesValue))}(n,t);case 7:return n.referenceValue===t.referenceValue;case 8:return function(s,o){return st(s.geoPointValue.latitude)===st(o.geoPointValue.latitude)&&st(s.geoPointValue.longitude)===st(o.geoPointValue.longitude)}(n,t);case 2:return function(s,o){if("integerValue"in s&&"integerValue"in o)return st(s.integerValue)===st(o.integerValue);if("doubleValue"in s&&"doubleValue"in o){const a=st(s.doubleValue),u=st(o.doubleValue);return a===u?Pr(a)===Pr(u):isNaN(a)&&isNaN(u)}return!1}(n,t);case 9:return je(n.arrayValue.values||[],t.arrayValue.values||[],jt);case 10:return function(s,o){const a=s.mapValue.fields||{},u=o.mapValue.fields||{};if(Oa(a)!==Oa(u))return!1;for(const h in a)if(a.hasOwnProperty(h)&&(u[h]===void 0||!jt(a[h],u[h])))return!1;return!0}(n,t);default:return M()}}function Fn(n,t){return(n.values||[]).find(e=>jt(e,t))!==void 0}function $e(n,t){if(n===t)return 0;const e=Se(n),r=Se(t);if(e!==r)return K(e,r);switch(e){case 0:case 9007199254740991:return 0;case 1:return K(n.booleanValue,t.booleanValue);case 2:return function(o,a){const u=st(o.integerValue||o.doubleValue),h=st(a.integerValue||a.doubleValue);return u<h?-1:u>h?1:u===h?0:isNaN(u)?isNaN(h)?0:-1:1}(n,t);case 3:return Ma(n.timestampValue,t.timestampValue);case 4:return Ma(Mn(n),Mn(t));case 5:return K(n.stringValue,t.stringValue);case 6:return function(o,a){const u=be(o),h=be(a);return u.compareTo(h)}(n.bytesValue,t.bytesValue);case 7:return function(o,a){const u=o.split("/"),h=a.split("/");for(let d=0;d<u.length&&d<h.length;d++){const p=K(u[d],h[d]);if(p!==0)return p}return K(u.length,h.length)}(n.referenceValue,t.referenceValue);case 8:return function(o,a){const u=K(st(o.latitude),st(a.latitude));return u!==0?u:K(st(o.longitude),st(a.longitude))}(n.geoPointValue,t.geoPointValue);case 9:return function(o,a){const u=o.values||[],h=a.values||[];for(let d=0;d<u.length&&d<h.length;++d){const p=$e(u[d],h[d]);if(p)return p}return K(u.length,h.length)}(n.arrayValue,t.arrayValue);case 10:return function(o,a){if(o===gr.mapValue&&a===gr.mapValue)return 0;if(o===gr.mapValue)return 1;if(a===gr.mapValue)return-1;const u=o.fields||{},h=Object.keys(u),d=a.fields||{},p=Object.keys(d);h.sort(),p.sort();for(let v=0;v<h.length&&v<p.length;++v){const I=K(h[v],p[v]);if(I!==0)return I;const b=$e(u[h[v]],d[p[v]]);if(b!==0)return b}return K(h.length,p.length)}(n.mapValue,t.mapValue);default:throw M()}}function Ma(n,t){if(typeof n=="string"&&typeof t=="string"&&n.length===t.length)return K(n,t);const e=ue(n),r=ue(t),s=K(e.seconds,r.seconds);return s!==0?s:K(e.nanos,r.nanos)}function ze(n){return Js(n)}function Js(n){return"nullValue"in n?"null":"booleanValue"in n?""+n.booleanValue:"integerValue"in n?""+n.integerValue:"doubleValue"in n?""+n.doubleValue:"timestampValue"in n?function(e){const r=ue(e);return`time(${r.seconds},${r.nanos})`}(n.timestampValue):"stringValue"in n?n.stringValue:"bytesValue"in n?function(e){return be(e).toBase64()}(n.bytesValue):"referenceValue"in n?function(e){return x.fromName(e).toString()}(n.referenceValue):"geoPointValue"in n?function(e){return`geo(${e.latitude},${e.longitude})`}(n.geoPointValue):"arrayValue"in n?function(e){let r="[",s=!0;for(const o of e.values||[])s?s=!1:r+=",",r+=Js(o);return r+"]"}(n.arrayValue):"mapValue"in n?function(e){const r=Object.keys(e.fields||{}).sort();let s="{",o=!0;for(const a of r)o?o=!1:s+=",",s+=`${a}:${Js(e.fields[a])}`;return s+"}"}(n.mapValue):M()}function La(n,t){return{referenceValue:`projects/${n.projectId}/databases/${n.database}/documents/${t.path.canonicalString()}`}}function Zs(n){return!!n&&"integerValue"in n}function ki(n){return!!n&&"arrayValue"in n}function Fa(n){return!!n&&"nullValue"in n}function Ua(n){return!!n&&"doubleValue"in n&&isNaN(Number(n.doubleValue))}function Er(n){return!!n&&"mapValue"in n}function Cn(n){if(n.geoPointValue)return{geoPointValue:Object.assign({},n.geoPointValue)};if(n.timestampValue&&typeof n.timestampValue=="object")return{timestampValue:Object.assign({},n.timestampValue)};if(n.mapValue){const t={mapValue:{fields:{}}};return Ce(n.mapValue.fields,(e,r)=>t.mapValue.fields[e]=Cn(r)),t}if(n.arrayValue){const t={arrayValue:{values:[]}};for(let e=0;e<(n.arrayValue.values||[]).length;++e)t.arrayValue.values[e]=Cn(n.arrayValue.values[e]);return t}return Object.assign({},n)}function Jm(n){return(((n.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class St{constructor(t){this.value=t}static empty(){return new St({mapValue:{}})}field(t){if(t.isEmpty())return this.value;{let e=this.value;for(let r=0;r<t.length-1;++r)if(e=(e.mapValue.fields||{})[t.get(r)],!Er(e))return null;return e=(e.mapValue.fields||{})[t.lastSegment()],e||null}}set(t,e){this.getFieldsMap(t.popLast())[t.lastSegment()]=Cn(e)}setAll(t){let e=lt.emptyPath(),r={},s=[];t.forEach((a,u)=>{if(!e.isImmediateParentOf(u)){const h=this.getFieldsMap(e);this.applyChanges(h,r,s),r={},s=[],e=u.popLast()}a?r[u.lastSegment()]=Cn(a):s.push(u.lastSegment())});const o=this.getFieldsMap(e);this.applyChanges(o,r,s)}delete(t){const e=this.field(t.popLast());Er(e)&&e.mapValue.fields&&delete e.mapValue.fields[t.lastSegment()]}isEqual(t){return jt(this.value,t.value)}getFieldsMap(t){let e=this.value;e.mapValue.fields||(e.mapValue={fields:{}});for(let r=0;r<t.length;++r){let s=e.mapValue.fields[t.get(r)];Er(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},e.mapValue.fields[t.get(r)]=s),e=s}return e.mapValue.fields}applyChanges(t,e,r){Ce(e,(s,o)=>t[s]=o);for(const s of r)delete t[s]}clone(){return new St(Cn(this.value))}}function Pu(n){const t=[];return Ce(n.fields,(e,r)=>{const s=new lt([e]);if(Er(r)){const o=Pu(r.mapValue).fields;if(o.length===0)t.push(s);else for(const a of o)t.push(s.child(a))}else t.push(s)}),new Vt(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tt{constructor(t,e,r,s,o,a,u){this.key=t,this.documentType=e,this.version=r,this.readTime=s,this.createTime=o,this.data=a,this.documentState=u}static newInvalidDocument(t){return new Tt(t,0,L.min(),L.min(),L.min(),St.empty(),0)}static newFoundDocument(t,e,r,s){return new Tt(t,1,e,L.min(),r,s,0)}static newNoDocument(t,e){return new Tt(t,2,e,L.min(),L.min(),St.empty(),0)}static newUnknownDocument(t,e){return new Tt(t,3,e,L.min(),L.min(),St.empty(),2)}convertToFoundDocument(t,e){return!this.createTime.isEqual(L.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=t),this.version=t,this.documentType=1,this.data=e,this.documentState=0,this}convertToNoDocument(t){return this.version=t,this.documentType=2,this.data=St.empty(),this.documentState=0,this}convertToUnknownDocument(t){return this.version=t,this.documentType=3,this.data=St.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=L.min(),this}setReadTime(t){return this.readTime=t,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(t){return t instanceof Tt&&this.key.isEqual(t.key)&&this.version.isEqual(t.version)&&this.documentType===t.documentType&&this.documentState===t.documentState&&this.data.isEqual(t.data)}mutableCopy(){return new Tt(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cr{constructor(t,e){this.position=t,this.inclusive=e}}function Ba(n,t,e){let r=0;for(let s=0;s<n.position.length;s++){const o=t[s],a=n.position[s];if(o.field.isKeyField()?r=x.comparator(x.fromName(a.referenceValue),e.key):r=$e(a,e.data.field(o.field)),o.dir==="desc"&&(r*=-1),r!==0)break}return r}function qa(n,t){if(n===null)return t===null;if(t===null||n.inclusive!==t.inclusive||n.position.length!==t.position.length)return!1;for(let e=0;e<n.position.length;e++)if(!jt(n.position[e],t.position[e]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dr{constructor(t,e="asc"){this.field=t,this.dir=e}}function Zm(n,t){return n.dir===t.dir&&n.field.isEqual(t.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cu{}class it extends Cu{constructor(t,e,r){super(),this.field=t,this.op=e,this.value=r}static create(t,e,r){return t.isKeyField()?e==="in"||e==="not-in"?this.createKeyFieldInFilter(t,e,r):new eg(t,e,r):e==="array-contains"?new sg(t,r):e==="in"?new ig(t,r):e==="not-in"?new og(t,r):e==="array-contains-any"?new ag(t,r):new it(t,e,r)}static createKeyFieldInFilter(t,e,r){return e==="in"?new ng(t,r):new rg(t,r)}matches(t){const e=t.data.field(this.field);return this.op==="!="?e!==null&&this.matchesComparison($e(e,this.value)):e!==null&&Se(this.value)===Se(e)&&this.matchesComparison($e(e,this.value))}matchesComparison(t){switch(this.op){case"<":return t<0;case"<=":return t<=0;case"==":return t===0;case"!=":return t!==0;case">":return t>0;case">=":return t>=0;default:return M()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class Mt extends Cu{constructor(t,e){super(),this.filters=t,this.op=e,this.ae=null}static create(t,e){return new Mt(t,e)}matches(t){return Du(this)?this.filters.find(e=>!e.matches(t))===void 0:this.filters.find(e=>e.matches(t))!==void 0}getFlattenedFilters(){return this.ae!==null||(this.ae=this.filters.reduce((t,e)=>t.concat(e.getFlattenedFilters()),[])),this.ae}getFilters(){return Object.assign([],this.filters)}}function Du(n){return n.op==="and"}function Vu(n){return tg(n)&&Du(n)}function tg(n){for(const t of n.filters)if(t instanceof Mt)return!1;return!0}function ti(n){if(n instanceof it)return n.field.canonicalString()+n.op.toString()+ze(n.value);if(Vu(n))return n.filters.map(t=>ti(t)).join(",");{const t=n.filters.map(e=>ti(e)).join(",");return`${n.op}(${t})`}}function ku(n,t){return n instanceof it?function(r,s){return s instanceof it&&r.op===s.op&&r.field.isEqual(s.field)&&jt(r.value,s.value)}(n,t):n instanceof Mt?function(r,s){return s instanceof Mt&&r.op===s.op&&r.filters.length===s.filters.length?r.filters.reduce((o,a,u)=>o&&ku(a,s.filters[u]),!0):!1}(n,t):void M()}function Nu(n){return n instanceof it?function(e){return`${e.field.canonicalString()} ${e.op} ${ze(e.value)}`}(n):n instanceof Mt?function(e){return e.op.toString()+" {"+e.getFilters().map(Nu).join(" ,")+"}"}(n):"Filter"}class eg extends it{constructor(t,e,r){super(t,e,r),this.key=x.fromName(r.referenceValue)}matches(t){const e=x.comparator(t.key,this.key);return this.matchesComparison(e)}}class ng extends it{constructor(t,e){super(t,"in",e),this.keys=Ou("in",e)}matches(t){return this.keys.some(e=>e.isEqual(t.key))}}class rg extends it{constructor(t,e){super(t,"not-in",e),this.keys=Ou("not-in",e)}matches(t){return!this.keys.some(e=>e.isEqual(t.key))}}function Ou(n,t){var e;return(((e=t.arrayValue)===null||e===void 0?void 0:e.values)||[]).map(r=>x.fromName(r.referenceValue))}class sg extends it{constructor(t,e){super(t,"array-contains",e)}matches(t){const e=t.data.field(this.field);return ki(e)&&Fn(e.arrayValue,this.value)}}class ig extends it{constructor(t,e){super(t,"in",e)}matches(t){const e=t.data.field(this.field);return e!==null&&Fn(this.value.arrayValue,e)}}class og extends it{constructor(t,e){super(t,"not-in",e)}matches(t){if(Fn(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const e=t.data.field(this.field);return e!==null&&!Fn(this.value.arrayValue,e)}}class ag extends it{constructor(t,e){super(t,"array-contains-any",e)}matches(t){const e=t.data.field(this.field);return!(!ki(e)||!e.arrayValue.values)&&e.arrayValue.values.some(r=>Fn(this.value.arrayValue,r))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cg{constructor(t,e=null,r=[],s=[],o=null,a=null,u=null){this.path=t,this.collectionGroup=e,this.orderBy=r,this.filters=s,this.limit=o,this.startAt=a,this.endAt=u,this.ue=null}}function ja(n,t=null,e=[],r=[],s=null,o=null,a=null){return new cg(n,t,e,r,s,o,a)}function Ni(n){const t=U(n);if(t.ue===null){let e=t.path.canonicalString();t.collectionGroup!==null&&(e+="|cg:"+t.collectionGroup),e+="|f:",e+=t.filters.map(r=>ti(r)).join(","),e+="|ob:",e+=t.orderBy.map(r=>function(o){return o.field.canonicalString()+o.dir}(r)).join(","),qr(t.limit)||(e+="|l:",e+=t.limit),t.startAt&&(e+="|lb:",e+=t.startAt.inclusive?"b:":"a:",e+=t.startAt.position.map(r=>ze(r)).join(",")),t.endAt&&(e+="|ub:",e+=t.endAt.inclusive?"a:":"b:",e+=t.endAt.position.map(r=>ze(r)).join(",")),t.ue=e}return t.ue}function Oi(n,t){if(n.limit!==t.limit||n.orderBy.length!==t.orderBy.length)return!1;for(let e=0;e<n.orderBy.length;e++)if(!Zm(n.orderBy[e],t.orderBy[e]))return!1;if(n.filters.length!==t.filters.length)return!1;for(let e=0;e<n.filters.length;e++)if(!ku(n.filters[e],t.filters[e]))return!1;return n.collectionGroup===t.collectionGroup&&!!n.path.isEqual(t.path)&&!!qa(n.startAt,t.startAt)&&qa(n.endAt,t.endAt)}function ei(n){return x.isDocumentKey(n.path)&&n.collectionGroup===null&&n.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $n{constructor(t,e=null,r=[],s=[],o=null,a="F",u=null,h=null){this.path=t,this.collectionGroup=e,this.explicitOrderBy=r,this.filters=s,this.limit=o,this.limitType=a,this.startAt=u,this.endAt=h,this.ce=null,this.le=null,this.he=null,this.startAt,this.endAt}}function ug(n,t,e,r,s,o,a,u){return new $n(n,t,e,r,s,o,a,u)}function xi(n){return new $n(n)}function $a(n){return n.filters.length===0&&n.limit===null&&n.startAt==null&&n.endAt==null&&(n.explicitOrderBy.length===0||n.explicitOrderBy.length===1&&n.explicitOrderBy[0].field.isKeyField())}function xu(n){return n.collectionGroup!==null}function Dn(n){const t=U(n);if(t.ce===null){t.ce=[];const e=new Set;for(const o of t.explicitOrderBy)t.ce.push(o),e.add(o.field.canonicalString());const r=t.explicitOrderBy.length>0?t.explicitOrderBy[t.explicitOrderBy.length-1].dir:"asc";(function(a){let u=new ht(lt.comparator);return a.filters.forEach(h=>{h.getFlattenedFilters().forEach(d=>{d.isInequality()&&(u=u.add(d.field))})}),u})(t).forEach(o=>{e.has(o.canonicalString())||o.isKeyField()||t.ce.push(new Dr(o,r))}),e.has(lt.keyField().canonicalString())||t.ce.push(new Dr(lt.keyField(),r))}return t.ce}function Ut(n){const t=U(n);return t.le||(t.le=lg(t,Dn(n))),t.le}function lg(n,t){if(n.limitType==="F")return ja(n.path,n.collectionGroup,t,n.filters,n.limit,n.startAt,n.endAt);{t=t.map(s=>{const o=s.dir==="desc"?"asc":"desc";return new Dr(s.field,o)});const e=n.endAt?new Cr(n.endAt.position,n.endAt.inclusive):null,r=n.startAt?new Cr(n.startAt.position,n.startAt.inclusive):null;return ja(n.path,n.collectionGroup,t,n.filters,n.limit,e,r)}}function ni(n,t){const e=n.filters.concat([t]);return new $n(n.path,n.collectionGroup,n.explicitOrderBy.slice(),e,n.limit,n.limitType,n.startAt,n.endAt)}function ri(n,t,e){return new $n(n.path,n.collectionGroup,n.explicitOrderBy.slice(),n.filters.slice(),t,e,n.startAt,n.endAt)}function jr(n,t){return Oi(Ut(n),Ut(t))&&n.limitType===t.limitType}function Mu(n){return`${Ni(Ut(n))}|lt:${n.limitType}`}function Le(n){return`Query(target=${function(e){let r=e.path.canonicalString();return e.collectionGroup!==null&&(r+=" collectionGroup="+e.collectionGroup),e.filters.length>0&&(r+=`, filters: [${e.filters.map(s=>Nu(s)).join(", ")}]`),qr(e.limit)||(r+=", limit: "+e.limit),e.orderBy.length>0&&(r+=`, orderBy: [${e.orderBy.map(s=>function(a){return`${a.field.canonicalString()} (${a.dir})`}(s)).join(", ")}]`),e.startAt&&(r+=", startAt: ",r+=e.startAt.inclusive?"b:":"a:",r+=e.startAt.position.map(s=>ze(s)).join(",")),e.endAt&&(r+=", endAt: ",r+=e.endAt.inclusive?"a:":"b:",r+=e.endAt.position.map(s=>ze(s)).join(",")),`Target(${r})`}(Ut(n))}; limitType=${n.limitType})`}function $r(n,t){return t.isFoundDocument()&&function(r,s){const o=s.key.path;return r.collectionGroup!==null?s.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(o):x.isDocumentKey(r.path)?r.path.isEqual(o):r.path.isImmediateParentOf(o)}(n,t)&&function(r,s){for(const o of Dn(r))if(!o.field.isKeyField()&&s.data.field(o.field)===null)return!1;return!0}(n,t)&&function(r,s){for(const o of r.filters)if(!o.matches(s))return!1;return!0}(n,t)&&function(r,s){return!(r.startAt&&!function(a,u,h){const d=Ba(a,u,h);return a.inclusive?d<=0:d<0}(r.startAt,Dn(r),s)||r.endAt&&!function(a,u,h){const d=Ba(a,u,h);return a.inclusive?d>=0:d>0}(r.endAt,Dn(r),s))}(n,t)}function hg(n){return n.collectionGroup||(n.path.length%2==1?n.path.lastSegment():n.path.get(n.path.length-2))}function Lu(n){return(t,e)=>{let r=!1;for(const s of Dn(n)){const o=dg(s,t,e);if(o!==0)return o;r=r||s.field.isKeyField()}return 0}}function dg(n,t,e){const r=n.field.isKeyField()?x.comparator(t.key,e.key):function(o,a,u){const h=a.data.field(o),d=u.data.field(o);return h!==null&&d!==null?$e(h,d):M()}(n.field,t,e);switch(n.dir){case"asc":return r;case"desc":return-1*r;default:return M()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Je{constructor(t,e){this.mapKeyFn=t,this.equalsFn=e,this.inner={},this.innerSize=0}get(t){const e=this.mapKeyFn(t),r=this.inner[e];if(r!==void 0){for(const[s,o]of r)if(this.equalsFn(s,t))return o}}has(t){return this.get(t)!==void 0}set(t,e){const r=this.mapKeyFn(t),s=this.inner[r];if(s===void 0)return this.inner[r]=[[t,e]],void this.innerSize++;for(let o=0;o<s.length;o++)if(this.equalsFn(s[o][0],t))return void(s[o]=[t,e]);s.push([t,e]),this.innerSize++}delete(t){const e=this.mapKeyFn(t),r=this.inner[e];if(r===void 0)return!1;for(let s=0;s<r.length;s++)if(this.equalsFn(r[s][0],t))return r.length===1?delete this.inner[e]:r.splice(s,1),this.innerSize--,!0;return!1}forEach(t){Ce(this.inner,(e,r)=>{for(const[s,o]of r)t(s,o)})}isEmpty(){return bu(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fg=new tt(x.comparator);function Yt(){return fg}const Fu=new tt(x.comparator);function An(...n){let t=Fu;for(const e of n)t=t.insert(e.key,e);return t}function Uu(n){let t=Fu;return n.forEach((e,r)=>t=t.insert(e,r.overlayedDocument)),t}function ye(){return Vn()}function Bu(){return Vn()}function Vn(){return new Je(n=>n.toString(),(n,t)=>n.isEqual(t))}const pg=new tt(x.comparator),mg=new ht(x.comparator);function $(...n){let t=mg;for(const e of n)t=t.add(e);return t}const gg=new ht(K);function _g(){return gg}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qu(n,t){if(n.useProto3Json){if(isNaN(t))return{doubleValue:"NaN"};if(t===1/0)return{doubleValue:"Infinity"};if(t===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Pr(t)?"-0":t}}function ju(n){return{integerValue:""+n}}function yg(n,t){return Qm(t)?ju(t):qu(n,t)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zr{constructor(){this._=void 0}}function Eg(n,t,e){return n instanceof Vr?function(s,o){const a={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return o&&Di(o)&&(o=Vi(o)),o&&(a.fields.__previous_value__=o),{mapValue:a}}(e,t):n instanceof He?zu(n,t):n instanceof Un?Hu(n,t):function(s,o){const a=$u(s,o),u=za(a)+za(s.Pe);return Zs(a)&&Zs(s.Pe)?ju(u):qu(s.serializer,u)}(n,t)}function Tg(n,t,e){return n instanceof He?zu(n,t):n instanceof Un?Hu(n,t):e}function $u(n,t){return n instanceof kr?function(r){return Zs(r)||function(o){return!!o&&"doubleValue"in o}(r)}(t)?t:{integerValue:0}:null}class Vr extends zr{}class He extends zr{constructor(t){super(),this.elements=t}}function zu(n,t){const e=Gu(t);for(const r of n.elements)e.some(s=>jt(s,r))||e.push(r);return{arrayValue:{values:e}}}class Un extends zr{constructor(t){super(),this.elements=t}}function Hu(n,t){let e=Gu(t);for(const r of n.elements)e=e.filter(s=>!jt(s,r));return{arrayValue:{values:e}}}class kr extends zr{constructor(t,e){super(),this.serializer=t,this.Pe=e}}function za(n){return st(n.integerValue||n.doubleValue)}function Gu(n){return ki(n)&&n.arrayValue.values?n.arrayValue.values.slice():[]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vg{constructor(t,e){this.field=t,this.transform=e}}function wg(n,t){return n.field.isEqual(t.field)&&function(r,s){return r instanceof He&&s instanceof He||r instanceof Un&&s instanceof Un?je(r.elements,s.elements,jt):r instanceof kr&&s instanceof kr?jt(r.Pe,s.Pe):r instanceof Vr&&s instanceof Vr}(n.transform,t.transform)}class Ig{constructor(t,e){this.version=t,this.transformResults=e}}class Ot{constructor(t,e){this.updateTime=t,this.exists=e}static none(){return new Ot}static exists(t){return new Ot(void 0,t)}static updateTime(t){return new Ot(t)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(t){return this.exists===t.exists&&(this.updateTime?!!t.updateTime&&this.updateTime.isEqual(t.updateTime):!t.updateTime)}}function Tr(n,t){return n.updateTime!==void 0?t.isFoundDocument()&&t.version.isEqual(n.updateTime):n.exists===void 0||n.exists===t.isFoundDocument()}class Hr{}function Ku(n,t){if(!n.hasLocalMutations||t&&t.fields.length===0)return null;if(t===null)return n.isNoDocument()?new Mi(n.key,Ot.none()):new zn(n.key,n.data,Ot.none());{const e=n.data,r=St.empty();let s=new ht(lt.comparator);for(let o of t.fields)if(!s.has(o)){let a=e.field(o);a===null&&o.length>1&&(o=o.popLast(),a=e.field(o)),a===null?r.delete(o):r.set(o,a),s=s.add(o)}return new he(n.key,r,new Vt(s.toArray()),Ot.none())}}function Ag(n,t,e){n instanceof zn?function(s,o,a){const u=s.value.clone(),h=Ga(s.fieldTransforms,o,a.transformResults);u.setAll(h),o.convertToFoundDocument(a.version,u).setHasCommittedMutations()}(n,t,e):n instanceof he?function(s,o,a){if(!Tr(s.precondition,o))return void o.convertToUnknownDocument(a.version);const u=Ga(s.fieldTransforms,o,a.transformResults),h=o.data;h.setAll(Wu(s)),h.setAll(u),o.convertToFoundDocument(a.version,h).setHasCommittedMutations()}(n,t,e):function(s,o,a){o.convertToNoDocument(a.version).setHasCommittedMutations()}(0,t,e)}function kn(n,t,e,r){return n instanceof zn?function(o,a,u,h){if(!Tr(o.precondition,a))return u;const d=o.value.clone(),p=Ka(o.fieldTransforms,h,a);return d.setAll(p),a.convertToFoundDocument(a.version,d).setHasLocalMutations(),null}(n,t,e,r):n instanceof he?function(o,a,u,h){if(!Tr(o.precondition,a))return u;const d=Ka(o.fieldTransforms,h,a),p=a.data;return p.setAll(Wu(o)),p.setAll(d),a.convertToFoundDocument(a.version,p).setHasLocalMutations(),u===null?null:u.unionWith(o.fieldMask.fields).unionWith(o.fieldTransforms.map(v=>v.field))}(n,t,e,r):function(o,a,u){return Tr(o.precondition,a)?(a.convertToNoDocument(a.version).setHasLocalMutations(),null):u}(n,t,e)}function Rg(n,t){let e=null;for(const r of n.fieldTransforms){const s=t.data.field(r.field),o=$u(r.transform,s||null);o!=null&&(e===null&&(e=St.empty()),e.set(r.field,o))}return e||null}function Ha(n,t){return n.type===t.type&&!!n.key.isEqual(t.key)&&!!n.precondition.isEqual(t.precondition)&&!!function(r,s){return r===void 0&&s===void 0||!(!r||!s)&&je(r,s,(o,a)=>wg(o,a))}(n.fieldTransforms,t.fieldTransforms)&&(n.type===0?n.value.isEqual(t.value):n.type!==1||n.data.isEqual(t.data)&&n.fieldMask.isEqual(t.fieldMask))}class zn extends Hr{constructor(t,e,r,s=[]){super(),this.key=t,this.value=e,this.precondition=r,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class he extends Hr{constructor(t,e,r,s,o=[]){super(),this.key=t,this.data=e,this.fieldMask=r,this.precondition=s,this.fieldTransforms=o,this.type=1}getFieldMask(){return this.fieldMask}}function Wu(n){const t=new Map;return n.fieldMask.fields.forEach(e=>{if(!e.isEmpty()){const r=n.data.field(e);t.set(e,r)}}),t}function Ga(n,t,e){const r=new Map;Q(n.length===e.length);for(let s=0;s<e.length;s++){const o=n[s],a=o.transform,u=t.data.field(o.field);r.set(o.field,Tg(a,u,e[s]))}return r}function Ka(n,t,e){const r=new Map;for(const s of n){const o=s.transform,a=e.data.field(s.field);r.set(s.field,Eg(o,a,t))}return r}class Mi extends Hr{constructor(t,e){super(),this.key=t,this.precondition=e,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class bg extends Hr{constructor(t,e){super(),this.key=t,this.precondition=e,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sg{constructor(t,e,r,s){this.batchId=t,this.localWriteTime=e,this.baseMutations=r,this.mutations=s}applyToRemoteDocument(t,e){const r=e.mutationResults;for(let s=0;s<this.mutations.length;s++){const o=this.mutations[s];o.key.isEqual(t.key)&&Ag(o,t,r[s])}}applyToLocalView(t,e){for(const r of this.baseMutations)r.key.isEqual(t.key)&&(e=kn(r,t,e,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(t.key)&&(e=kn(r,t,e,this.localWriteTime));return e}applyToLocalDocumentSet(t,e){const r=Bu();return this.mutations.forEach(s=>{const o=t.get(s.key),a=o.overlayedDocument;let u=this.applyToLocalView(a,o.mutatedFields);u=e.has(s.key)?null:u;const h=Ku(a,u);h!==null&&r.set(s.key,h),a.isValidDocument()||a.convertToNoDocument(L.min())}),r}keys(){return this.mutations.reduce((t,e)=>t.add(e.key),$())}isEqual(t){return this.batchId===t.batchId&&je(this.mutations,t.mutations,(e,r)=>Ha(e,r))&&je(this.baseMutations,t.baseMutations,(e,r)=>Ha(e,r))}}class Li{constructor(t,e,r,s){this.batch=t,this.commitVersion=e,this.mutationResults=r,this.docVersions=s}static from(t,e,r){Q(t.mutations.length===r.length);let s=function(){return pg}();const o=t.mutations;for(let a=0;a<o.length;a++)s=s.insert(o[a].key,r[a].version);return new Li(t,e,r,s)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pg{constructor(t,e){this.largestBatchId=t,this.mutation=e}getKey(){return this.mutation.key}isEqual(t){return t!==null&&this.mutation===t.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cg{constructor(t,e){this.count=t,this.unchangedNames=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var rt,z;function Dg(n){switch(n){default:return M();case S.CANCELLED:case S.UNKNOWN:case S.DEADLINE_EXCEEDED:case S.RESOURCE_EXHAUSTED:case S.INTERNAL:case S.UNAVAILABLE:case S.UNAUTHENTICATED:return!1;case S.INVALID_ARGUMENT:case S.NOT_FOUND:case S.ALREADY_EXISTS:case S.PERMISSION_DENIED:case S.FAILED_PRECONDITION:case S.ABORTED:case S.OUT_OF_RANGE:case S.UNIMPLEMENTED:case S.DATA_LOSS:return!0}}function Qu(n){if(n===void 0)return Xt("GRPC error has no .code"),S.UNKNOWN;switch(n){case rt.OK:return S.OK;case rt.CANCELLED:return S.CANCELLED;case rt.UNKNOWN:return S.UNKNOWN;case rt.DEADLINE_EXCEEDED:return S.DEADLINE_EXCEEDED;case rt.RESOURCE_EXHAUSTED:return S.RESOURCE_EXHAUSTED;case rt.INTERNAL:return S.INTERNAL;case rt.UNAVAILABLE:return S.UNAVAILABLE;case rt.UNAUTHENTICATED:return S.UNAUTHENTICATED;case rt.INVALID_ARGUMENT:return S.INVALID_ARGUMENT;case rt.NOT_FOUND:return S.NOT_FOUND;case rt.ALREADY_EXISTS:return S.ALREADY_EXISTS;case rt.PERMISSION_DENIED:return S.PERMISSION_DENIED;case rt.FAILED_PRECONDITION:return S.FAILED_PRECONDITION;case rt.ABORTED:return S.ABORTED;case rt.OUT_OF_RANGE:return S.OUT_OF_RANGE;case rt.UNIMPLEMENTED:return S.UNIMPLEMENTED;case rt.DATA_LOSS:return S.DATA_LOSS;default:return M()}}(z=rt||(rt={}))[z.OK=0]="OK",z[z.CANCELLED=1]="CANCELLED",z[z.UNKNOWN=2]="UNKNOWN",z[z.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",z[z.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",z[z.NOT_FOUND=5]="NOT_FOUND",z[z.ALREADY_EXISTS=6]="ALREADY_EXISTS",z[z.PERMISSION_DENIED=7]="PERMISSION_DENIED",z[z.UNAUTHENTICATED=16]="UNAUTHENTICATED",z[z.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",z[z.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",z[z.ABORTED=10]="ABORTED",z[z.OUT_OF_RANGE=11]="OUT_OF_RANGE",z[z.UNIMPLEMENTED=12]="UNIMPLEMENTED",z[z.INTERNAL=13]="INTERNAL",z[z.UNAVAILABLE=14]="UNAVAILABLE",z[z.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vg(){return new TextEncoder}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kg=new Te([4294967295,4294967295],0);function Wa(n){const t=Vg().encode(n),e=new _u;return e.update(t),new Uint8Array(e.digest())}function Qa(n){const t=new DataView(n.buffer),e=t.getUint32(0,!0),r=t.getUint32(4,!0),s=t.getUint32(8,!0),o=t.getUint32(12,!0);return[new Te([e,r],0),new Te([s,o],0)]}class Fi{constructor(t,e,r){if(this.bitmap=t,this.padding=e,this.hashCount=r,e<0||e>=8)throw new Rn(`Invalid padding: ${e}`);if(r<0)throw new Rn(`Invalid hash count: ${r}`);if(t.length>0&&this.hashCount===0)throw new Rn(`Invalid hash count: ${r}`);if(t.length===0&&e!==0)throw new Rn(`Invalid padding when bitmap length is 0: ${e}`);this.Ie=8*t.length-e,this.Te=Te.fromNumber(this.Ie)}Ee(t,e,r){let s=t.add(e.multiply(Te.fromNumber(r)));return s.compare(kg)===1&&(s=new Te([s.getBits(0),s.getBits(1)],0)),s.modulo(this.Te).toNumber()}de(t){return(this.bitmap[Math.floor(t/8)]&1<<t%8)!=0}mightContain(t){if(this.Ie===0)return!1;const e=Wa(t),[r,s]=Qa(e);for(let o=0;o<this.hashCount;o++){const a=this.Ee(r,s,o);if(!this.de(a))return!1}return!0}static create(t,e,r){const s=t%8==0?0:8-t%8,o=new Uint8Array(Math.ceil(t/8)),a=new Fi(o,s,e);return r.forEach(u=>a.insert(u)),a}insert(t){if(this.Ie===0)return;const e=Wa(t),[r,s]=Qa(e);for(let o=0;o<this.hashCount;o++){const a=this.Ee(r,s,o);this.Ae(a)}}Ae(t){const e=Math.floor(t/8),r=t%8;this.bitmap[e]|=1<<r}}class Rn extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gr{constructor(t,e,r,s,o){this.snapshotVersion=t,this.targetChanges=e,this.targetMismatches=r,this.documentUpdates=s,this.resolvedLimboDocuments=o}static createSynthesizedRemoteEventForCurrentChange(t,e,r){const s=new Map;return s.set(t,Hn.createSynthesizedTargetChangeForCurrentChange(t,e,r)),new Gr(L.min(),s,new tt(K),Yt(),$())}}class Hn{constructor(t,e,r,s,o){this.resumeToken=t,this.current=e,this.addedDocuments=r,this.modifiedDocuments=s,this.removedDocuments=o}static createSynthesizedTargetChangeForCurrentChange(t,e,r){return new Hn(r,e,$(),$(),$())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vr{constructor(t,e,r,s){this.Re=t,this.removedTargetIds=e,this.key=r,this.Ve=s}}class Xu{constructor(t,e){this.targetId=t,this.me=e}}class Yu{constructor(t,e,r=vt.EMPTY_BYTE_STRING,s=null){this.state=t,this.targetIds=e,this.resumeToken=r,this.cause=s}}class Xa{constructor(){this.fe=0,this.ge=Ja(),this.pe=vt.EMPTY_BYTE_STRING,this.ye=!1,this.we=!0}get current(){return this.ye}get resumeToken(){return this.pe}get Se(){return this.fe!==0}get be(){return this.we}De(t){t.approximateByteSize()>0&&(this.we=!0,this.pe=t)}Ce(){let t=$(),e=$(),r=$();return this.ge.forEach((s,o)=>{switch(o){case 0:t=t.add(s);break;case 2:e=e.add(s);break;case 1:r=r.add(s);break;default:M()}}),new Hn(this.pe,this.ye,t,e,r)}ve(){this.we=!1,this.ge=Ja()}Fe(t,e){this.we=!0,this.ge=this.ge.insert(t,e)}Me(t){this.we=!0,this.ge=this.ge.remove(t)}xe(){this.fe+=1}Oe(){this.fe-=1,Q(this.fe>=0)}Ne(){this.we=!0,this.ye=!0}}class Ng{constructor(t){this.Le=t,this.Be=new Map,this.ke=Yt(),this.qe=Ya(),this.Qe=new tt(K)}Ke(t){for(const e of t.Re)t.Ve&&t.Ve.isFoundDocument()?this.$e(e,t.Ve):this.Ue(e,t.key,t.Ve);for(const e of t.removedTargetIds)this.Ue(e,t.key,t.Ve)}We(t){this.forEachTarget(t,e=>{const r=this.Ge(e);switch(t.state){case 0:this.ze(e)&&r.De(t.resumeToken);break;case 1:r.Oe(),r.Se||r.ve(),r.De(t.resumeToken);break;case 2:r.Oe(),r.Se||this.removeTarget(e);break;case 3:this.ze(e)&&(r.Ne(),r.De(t.resumeToken));break;case 4:this.ze(e)&&(this.je(e),r.De(t.resumeToken));break;default:M()}})}forEachTarget(t,e){t.targetIds.length>0?t.targetIds.forEach(e):this.Be.forEach((r,s)=>{this.ze(s)&&e(s)})}He(t){const e=t.targetId,r=t.me.count,s=this.Je(e);if(s){const o=s.target;if(ei(o))if(r===0){const a=new x(o.path);this.Ue(e,a,Tt.newNoDocument(a,L.min()))}else Q(r===1);else{const a=this.Ye(e);if(a!==r){const u=this.Ze(t),h=u?this.Xe(u,t,a):1;if(h!==0){this.je(e);const d=h===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Qe=this.Qe.insert(e,d)}}}}}Ze(t){const e=t.me.unchangedNames;if(!e||!e.bits)return null;const{bits:{bitmap:r="",padding:s=0},hashCount:o=0}=e;let a,u;try{a=be(r).toUint8Array()}catch(h){if(h instanceof Su)return qe("Decoding the base64 bloom filter in existence filter failed ("+h.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw h}try{u=new Fi(a,s,o)}catch(h){return qe(h instanceof Rn?"BloomFilter error: ":"Applying bloom filter failed: ",h),null}return u.Ie===0?null:u}Xe(t,e,r){return e.me.count===r-this.nt(t,e.targetId)?0:2}nt(t,e){const r=this.Le.getRemoteKeysForTarget(e);let s=0;return r.forEach(o=>{const a=this.Le.tt(),u=`projects/${a.projectId}/databases/${a.database}/documents/${o.path.canonicalString()}`;t.mightContain(u)||(this.Ue(e,o,null),s++)}),s}rt(t){const e=new Map;this.Be.forEach((o,a)=>{const u=this.Je(a);if(u){if(o.current&&ei(u.target)){const h=new x(u.target.path);this.ke.get(h)!==null||this.it(a,h)||this.Ue(a,h,Tt.newNoDocument(h,t))}o.be&&(e.set(a,o.Ce()),o.ve())}});let r=$();this.qe.forEach((o,a)=>{let u=!0;a.forEachWhile(h=>{const d=this.Je(h);return!d||d.purpose==="TargetPurposeLimboResolution"||(u=!1,!1)}),u&&(r=r.add(o))}),this.ke.forEach((o,a)=>a.setReadTime(t));const s=new Gr(t,e,this.Qe,this.ke,r);return this.ke=Yt(),this.qe=Ya(),this.Qe=new tt(K),s}$e(t,e){if(!this.ze(t))return;const r=this.it(t,e.key)?2:0;this.Ge(t).Fe(e.key,r),this.ke=this.ke.insert(e.key,e),this.qe=this.qe.insert(e.key,this.st(e.key).add(t))}Ue(t,e,r){if(!this.ze(t))return;const s=this.Ge(t);this.it(t,e)?s.Fe(e,1):s.Me(e),this.qe=this.qe.insert(e,this.st(e).delete(t)),r&&(this.ke=this.ke.insert(e,r))}removeTarget(t){this.Be.delete(t)}Ye(t){const e=this.Ge(t).Ce();return this.Le.getRemoteKeysForTarget(t).size+e.addedDocuments.size-e.removedDocuments.size}xe(t){this.Ge(t).xe()}Ge(t){let e=this.Be.get(t);return e||(e=new Xa,this.Be.set(t,e)),e}st(t){let e=this.qe.get(t);return e||(e=new ht(K),this.qe=this.qe.insert(t,e)),e}ze(t){const e=this.Je(t)!==null;return e||O("WatchChangeAggregator","Detected inactive target",t),e}Je(t){const e=this.Be.get(t);return e&&e.Se?null:this.Le.ot(t)}je(t){this.Be.set(t,new Xa),this.Le.getRemoteKeysForTarget(t).forEach(e=>{this.Ue(t,e,null)})}it(t,e){return this.Le.getRemoteKeysForTarget(t).has(e)}}function Ya(){return new tt(x.comparator)}function Ja(){return new tt(x.comparator)}const Og={asc:"ASCENDING",desc:"DESCENDING"},xg={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},Mg={and:"AND",or:"OR"};class Lg{constructor(t,e){this.databaseId=t,this.useProto3Json=e}}function si(n,t){return n.useProto3Json||qr(t)?t:{value:t}}function Nr(n,t){return n.useProto3Json?`${new Date(1e3*t.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+t.nanoseconds).slice(-9)}Z`:{seconds:""+t.seconds,nanos:t.nanoseconds}}function Ju(n,t){return n.useProto3Json?t.toBase64():t.toUint8Array()}function Fg(n,t){return Nr(n,t.toTimestamp())}function Bt(n){return Q(!!n),L.fromTimestamp(function(e){const r=ue(e);return new ot(r.seconds,r.nanos)}(n))}function Ui(n,t){return ii(n,t).canonicalString()}function ii(n,t){const e=function(s){return new Y(["projects",s.projectId,"databases",s.database])}(n).child("documents");return t===void 0?e:e.child(t)}function Zu(n){const t=Y.fromString(n);return Q(sl(t)),t}function oi(n,t){return Ui(n.databaseId,t.path)}function Bs(n,t){const e=Zu(t);if(e.get(1)!==n.databaseId.projectId)throw new k(S.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+e.get(1)+" vs "+n.databaseId.projectId);if(e.get(3)!==n.databaseId.database)throw new k(S.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+e.get(3)+" vs "+n.databaseId.database);return new x(el(e))}function tl(n,t){return Ui(n.databaseId,t)}function Ug(n){const t=Zu(n);return t.length===4?Y.emptyPath():el(t)}function ai(n){return new Y(["projects",n.databaseId.projectId,"databases",n.databaseId.database]).canonicalString()}function el(n){return Q(n.length>4&&n.get(4)==="documents"),n.popFirst(5)}function Za(n,t,e){return{name:oi(n,t),fields:e.value.mapValue.fields}}function Bg(n,t){let e;if("targetChange"in t){t.targetChange;const r=function(d){return d==="NO_CHANGE"?0:d==="ADD"?1:d==="REMOVE"?2:d==="CURRENT"?3:d==="RESET"?4:M()}(t.targetChange.targetChangeType||"NO_CHANGE"),s=t.targetChange.targetIds||[],o=function(d,p){return d.useProto3Json?(Q(p===void 0||typeof p=="string"),vt.fromBase64String(p||"")):(Q(p===void 0||p instanceof Buffer||p instanceof Uint8Array),vt.fromUint8Array(p||new Uint8Array))}(n,t.targetChange.resumeToken),a=t.targetChange.cause,u=a&&function(d){const p=d.code===void 0?S.UNKNOWN:Qu(d.code);return new k(p,d.message||"")}(a);e=new Yu(r,s,o,u||null)}else if("documentChange"in t){t.documentChange;const r=t.documentChange;r.document,r.document.name,r.document.updateTime;const s=Bs(n,r.document.name),o=Bt(r.document.updateTime),a=r.document.createTime?Bt(r.document.createTime):L.min(),u=new St({mapValue:{fields:r.document.fields}}),h=Tt.newFoundDocument(s,o,a,u),d=r.targetIds||[],p=r.removedTargetIds||[];e=new vr(d,p,h.key,h)}else if("documentDelete"in t){t.documentDelete;const r=t.documentDelete;r.document;const s=Bs(n,r.document),o=r.readTime?Bt(r.readTime):L.min(),a=Tt.newNoDocument(s,o),u=r.removedTargetIds||[];e=new vr([],u,a.key,a)}else if("documentRemove"in t){t.documentRemove;const r=t.documentRemove;r.document;const s=Bs(n,r.document),o=r.removedTargetIds||[];e=new vr([],o,s,null)}else{if(!("filter"in t))return M();{t.filter;const r=t.filter;r.targetId;const{count:s=0,unchangedNames:o}=r,a=new Cg(s,o),u=r.targetId;e=new Xu(u,a)}}return e}function qg(n,t){let e;if(t instanceof zn)e={update:Za(n,t.key,t.value)};else if(t instanceof Mi)e={delete:oi(n,t.key)};else if(t instanceof he)e={update:Za(n,t.key,t.data),updateMask:Xg(t.fieldMask)};else{if(!(t instanceof bg))return M();e={verify:oi(n,t.key)}}return t.fieldTransforms.length>0&&(e.updateTransforms=t.fieldTransforms.map(r=>function(o,a){const u=a.transform;if(u instanceof Vr)return{fieldPath:a.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(u instanceof He)return{fieldPath:a.field.canonicalString(),appendMissingElements:{values:u.elements}};if(u instanceof Un)return{fieldPath:a.field.canonicalString(),removeAllFromArray:{values:u.elements}};if(u instanceof kr)return{fieldPath:a.field.canonicalString(),increment:u.Pe};throw M()}(0,r))),t.precondition.isNone||(e.currentDocument=function(s,o){return o.updateTime!==void 0?{updateTime:Fg(s,o.updateTime)}:o.exists!==void 0?{exists:o.exists}:M()}(n,t.precondition)),e}function jg(n,t){return n&&n.length>0?(Q(t!==void 0),n.map(e=>function(s,o){let a=s.updateTime?Bt(s.updateTime):Bt(o);return a.isEqual(L.min())&&(a=Bt(o)),new Ig(a,s.transformResults||[])}(e,t))):[]}function $g(n,t){return{documents:[tl(n,t.path)]}}function zg(n,t){const e={structuredQuery:{}},r=t.path;let s;t.collectionGroup!==null?(s=r,e.structuredQuery.from=[{collectionId:t.collectionGroup,allDescendants:!0}]):(s=r.popLast(),e.structuredQuery.from=[{collectionId:r.lastSegment()}]),e.parent=tl(n,s);const o=function(d){if(d.length!==0)return rl(Mt.create(d,"and"))}(t.filters);o&&(e.structuredQuery.where=o);const a=function(d){if(d.length!==0)return d.map(p=>function(I){return{field:Fe(I.field),direction:Kg(I.dir)}}(p))}(t.orderBy);a&&(e.structuredQuery.orderBy=a);const u=si(n,t.limit);return u!==null&&(e.structuredQuery.limit=u),t.startAt&&(e.structuredQuery.startAt=function(d){return{before:d.inclusive,values:d.position}}(t.startAt)),t.endAt&&(e.structuredQuery.endAt=function(d){return{before:!d.inclusive,values:d.position}}(t.endAt)),{_t:e,parent:s}}function Hg(n){let t=Ug(n.parent);const e=n.structuredQuery,r=e.from?e.from.length:0;let s=null;if(r>0){Q(r===1);const p=e.from[0];p.allDescendants?s=p.collectionId:t=t.child(p.collectionId)}let o=[];e.where&&(o=function(v){const I=nl(v);return I instanceof Mt&&Vu(I)?I.getFilters():[I]}(e.where));let a=[];e.orderBy&&(a=function(v){return v.map(I=>function(D){return new Dr(Ue(D.field),function(C){switch(C){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(D.direction))}(I))}(e.orderBy));let u=null;e.limit&&(u=function(v){let I;return I=typeof v=="object"?v.value:v,qr(I)?null:I}(e.limit));let h=null;e.startAt&&(h=function(v){const I=!!v.before,b=v.values||[];return new Cr(b,I)}(e.startAt));let d=null;return e.endAt&&(d=function(v){const I=!v.before,b=v.values||[];return new Cr(b,I)}(e.endAt)),ug(t,s,a,o,u,"F",h,d)}function Gg(n,t){const e=function(s){switch(s){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return M()}}(t.purpose);return e==null?null:{"goog-listen-tags":e}}function nl(n){return n.unaryFilter!==void 0?function(e){switch(e.unaryFilter.op){case"IS_NAN":const r=Ue(e.unaryFilter.field);return it.create(r,"==",{doubleValue:NaN});case"IS_NULL":const s=Ue(e.unaryFilter.field);return it.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const o=Ue(e.unaryFilter.field);return it.create(o,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const a=Ue(e.unaryFilter.field);return it.create(a,"!=",{nullValue:"NULL_VALUE"});default:return M()}}(n):n.fieldFilter!==void 0?function(e){return it.create(Ue(e.fieldFilter.field),function(s){switch(s){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return M()}}(e.fieldFilter.op),e.fieldFilter.value)}(n):n.compositeFilter!==void 0?function(e){return Mt.create(e.compositeFilter.filters.map(r=>nl(r)),function(s){switch(s){case"AND":return"and";case"OR":return"or";default:return M()}}(e.compositeFilter.op))}(n):M()}function Kg(n){return Og[n]}function Wg(n){return xg[n]}function Qg(n){return Mg[n]}function Fe(n){return{fieldPath:n.canonicalString()}}function Ue(n){return lt.fromServerFormat(n.fieldPath)}function rl(n){return n instanceof it?function(e){if(e.op==="=="){if(Ua(e.value))return{unaryFilter:{field:Fe(e.field),op:"IS_NAN"}};if(Fa(e.value))return{unaryFilter:{field:Fe(e.field),op:"IS_NULL"}}}else if(e.op==="!="){if(Ua(e.value))return{unaryFilter:{field:Fe(e.field),op:"IS_NOT_NAN"}};if(Fa(e.value))return{unaryFilter:{field:Fe(e.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Fe(e.field),op:Wg(e.op),value:e.value}}}(n):n instanceof Mt?function(e){const r=e.getFilters().map(s=>rl(s));return r.length===1?r[0]:{compositeFilter:{op:Qg(e.op),filters:r}}}(n):M()}function Xg(n){const t=[];return n.fields.forEach(e=>t.push(e.canonicalString())),{fieldPaths:t}}function sl(n){return n.length>=4&&n.get(0)==="projects"&&n.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class se{constructor(t,e,r,s,o=L.min(),a=L.min(),u=vt.EMPTY_BYTE_STRING,h=null){this.target=t,this.targetId=e,this.purpose=r,this.sequenceNumber=s,this.snapshotVersion=o,this.lastLimboFreeSnapshotVersion=a,this.resumeToken=u,this.expectedCount=h}withSequenceNumber(t){return new se(this.target,this.targetId,this.purpose,t,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(t,e){return new se(this.target,this.targetId,this.purpose,this.sequenceNumber,e,this.lastLimboFreeSnapshotVersion,t,null)}withExpectedCount(t){return new se(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,t)}withLastLimboFreeSnapshotVersion(t){return new se(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,t,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yg{constructor(t){this.ct=t}}function Jg(n){const t=Hg({parent:n.parent,structuredQuery:n.structuredQuery});return n.limitType==="LAST"?ri(t,t.limit,"L"):t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zg{constructor(){this._n=new t_}addToCollectionParentIndex(t,e){return this._n.add(e),P.resolve()}getCollectionParents(t,e){return P.resolve(this._n.getEntries(e))}addFieldIndex(t,e){return P.resolve()}deleteFieldIndex(t,e){return P.resolve()}deleteAllFieldIndexes(t){return P.resolve()}createTargetIndexes(t,e){return P.resolve()}getDocumentsMatchingTarget(t,e){return P.resolve(null)}getIndexType(t,e){return P.resolve(0)}getFieldIndexes(t,e){return P.resolve([])}getNextCollectionGroupToUpdate(t){return P.resolve(null)}getMinOffset(t,e){return P.resolve(ce.min())}getMinOffsetFromCollectionGroup(t,e){return P.resolve(ce.min())}updateCollectionGroup(t,e,r){return P.resolve()}updateIndexEntries(t,e){return P.resolve()}}class t_{constructor(){this.index={}}add(t){const e=t.lastSegment(),r=t.popLast(),s=this.index[e]||new ht(Y.comparator),o=!s.has(r);return this.index[e]=s.add(r),o}has(t){const e=t.lastSegment(),r=t.popLast(),s=this.index[e];return s&&s.has(r)}getEntries(t){return(this.index[t]||new ht(Y.comparator)).toArray()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ge{constructor(t){this.On=t}next(){return this.On+=2,this.On}static Nn(){return new Ge(0)}static Ln(){return new Ge(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class e_{constructor(){this.changes=new Je(t=>t.toString(),(t,e)=>t.isEqual(e)),this.changesApplied=!1}addEntry(t){this.assertNotApplied(),this.changes.set(t.key,t)}removeEntry(t,e){this.assertNotApplied(),this.changes.set(t,Tt.newInvalidDocument(t).setReadTime(e))}getEntry(t,e){this.assertNotApplied();const r=this.changes.get(e);return r!==void 0?P.resolve(r):this.getFromCache(t,e)}getEntries(t,e){return this.getAllFromCache(t,e)}apply(t){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(t)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class n_{constructor(t,e){this.overlayedDocument=t,this.mutatedFields=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class r_{constructor(t,e,r,s){this.remoteDocumentCache=t,this.mutationQueue=e,this.documentOverlayCache=r,this.indexManager=s}getDocument(t,e){let r=null;return this.documentOverlayCache.getOverlay(t,e).next(s=>(r=s,this.remoteDocumentCache.getEntry(t,e))).next(s=>(r!==null&&kn(r.mutation,s,Vt.empty(),ot.now()),s))}getDocuments(t,e){return this.remoteDocumentCache.getEntries(t,e).next(r=>this.getLocalViewOfDocuments(t,r,$()).next(()=>r))}getLocalViewOfDocuments(t,e,r=$()){const s=ye();return this.populateOverlays(t,s,e).next(()=>this.computeViews(t,e,s,r).next(o=>{let a=An();return o.forEach((u,h)=>{a=a.insert(u,h.overlayedDocument)}),a}))}getOverlayedDocuments(t,e){const r=ye();return this.populateOverlays(t,r,e).next(()=>this.computeViews(t,e,r,$()))}populateOverlays(t,e,r){const s=[];return r.forEach(o=>{e.has(o)||s.push(o)}),this.documentOverlayCache.getOverlays(t,s).next(o=>{o.forEach((a,u)=>{e.set(a,u)})})}computeViews(t,e,r,s){let o=Yt();const a=Vn(),u=function(){return Vn()}();return e.forEach((h,d)=>{const p=r.get(d.key);s.has(d.key)&&(p===void 0||p.mutation instanceof he)?o=o.insert(d.key,d):p!==void 0?(a.set(d.key,p.mutation.getFieldMask()),kn(p.mutation,d,p.mutation.getFieldMask(),ot.now())):a.set(d.key,Vt.empty())}),this.recalculateAndSaveOverlays(t,o).next(h=>(h.forEach((d,p)=>a.set(d,p)),e.forEach((d,p)=>{var v;return u.set(d,new n_(p,(v=a.get(d))!==null&&v!==void 0?v:null))}),u))}recalculateAndSaveOverlays(t,e){const r=Vn();let s=new tt((a,u)=>a-u),o=$();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(t,e).next(a=>{for(const u of a)u.keys().forEach(h=>{const d=e.get(h);if(d===null)return;let p=r.get(h)||Vt.empty();p=u.applyToLocalView(d,p),r.set(h,p);const v=(s.get(u.batchId)||$()).add(h);s=s.insert(u.batchId,v)})}).next(()=>{const a=[],u=s.getReverseIterator();for(;u.hasNext();){const h=u.getNext(),d=h.key,p=h.value,v=Bu();p.forEach(I=>{if(!o.has(I)){const b=Ku(e.get(I),r.get(I));b!==null&&v.set(I,b),o=o.add(I)}}),a.push(this.documentOverlayCache.saveOverlays(t,d,v))}return P.waitFor(a)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(t,e){return this.remoteDocumentCache.getEntries(t,e).next(r=>this.recalculateAndSaveOverlays(t,r))}getDocumentsMatchingQuery(t,e,r,s){return function(a){return x.isDocumentKey(a.path)&&a.collectionGroup===null&&a.filters.length===0}(e)?this.getDocumentsMatchingDocumentQuery(t,e.path):xu(e)?this.getDocumentsMatchingCollectionGroupQuery(t,e,r,s):this.getDocumentsMatchingCollectionQuery(t,e,r,s)}getNextDocuments(t,e,r,s){return this.remoteDocumentCache.getAllFromCollectionGroup(t,e,r,s).next(o=>{const a=s-o.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(t,e,r.largestBatchId,s-o.size):P.resolve(ye());let u=-1,h=o;return a.next(d=>P.forEach(d,(p,v)=>(u<v.largestBatchId&&(u=v.largestBatchId),o.get(p)?P.resolve():this.remoteDocumentCache.getEntry(t,p).next(I=>{h=h.insert(p,I)}))).next(()=>this.populateOverlays(t,d,o)).next(()=>this.computeViews(t,h,d,$())).next(p=>({batchId:u,changes:Uu(p)})))})}getDocumentsMatchingDocumentQuery(t,e){return this.getDocument(t,new x(e)).next(r=>{let s=An();return r.isFoundDocument()&&(s=s.insert(r.key,r)),s})}getDocumentsMatchingCollectionGroupQuery(t,e,r,s){const o=e.collectionGroup;let a=An();return this.indexManager.getCollectionParents(t,o).next(u=>P.forEach(u,h=>{const d=function(v,I){return new $n(I,null,v.explicitOrderBy.slice(),v.filters.slice(),v.limit,v.limitType,v.startAt,v.endAt)}(e,h.child(o));return this.getDocumentsMatchingCollectionQuery(t,d,r,s).next(p=>{p.forEach((v,I)=>{a=a.insert(v,I)})})}).next(()=>a))}getDocumentsMatchingCollectionQuery(t,e,r,s){let o;return this.documentOverlayCache.getOverlaysForCollection(t,e.path,r.largestBatchId).next(a=>(o=a,this.remoteDocumentCache.getDocumentsMatchingQuery(t,e,r,o,s))).next(a=>{o.forEach((h,d)=>{const p=d.getKey();a.get(p)===null&&(a=a.insert(p,Tt.newInvalidDocument(p)))});let u=An();return a.forEach((h,d)=>{const p=o.get(h);p!==void 0&&kn(p.mutation,d,Vt.empty(),ot.now()),$r(e,d)&&(u=u.insert(h,d))}),u})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class s_{constructor(t){this.serializer=t,this.cr=new Map,this.lr=new Map}getBundleMetadata(t,e){return P.resolve(this.cr.get(e))}saveBundleMetadata(t,e){return this.cr.set(e.id,function(s){return{id:s.id,version:s.version,createTime:Bt(s.createTime)}}(e)),P.resolve()}getNamedQuery(t,e){return P.resolve(this.lr.get(e))}saveNamedQuery(t,e){return this.lr.set(e.name,function(s){return{name:s.name,query:Jg(s.bundledQuery),readTime:Bt(s.readTime)}}(e)),P.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class i_{constructor(){this.overlays=new tt(x.comparator),this.hr=new Map}getOverlay(t,e){return P.resolve(this.overlays.get(e))}getOverlays(t,e){const r=ye();return P.forEach(e,s=>this.getOverlay(t,s).next(o=>{o!==null&&r.set(s,o)})).next(()=>r)}saveOverlays(t,e,r){return r.forEach((s,o)=>{this.ht(t,e,o)}),P.resolve()}removeOverlaysForBatchId(t,e,r){const s=this.hr.get(r);return s!==void 0&&(s.forEach(o=>this.overlays=this.overlays.remove(o)),this.hr.delete(r)),P.resolve()}getOverlaysForCollection(t,e,r){const s=ye(),o=e.length+1,a=new x(e.child("")),u=this.overlays.getIteratorFrom(a);for(;u.hasNext();){const h=u.getNext().value,d=h.getKey();if(!e.isPrefixOf(d.path))break;d.path.length===o&&h.largestBatchId>r&&s.set(h.getKey(),h)}return P.resolve(s)}getOverlaysForCollectionGroup(t,e,r,s){let o=new tt((d,p)=>d-p);const a=this.overlays.getIterator();for(;a.hasNext();){const d=a.getNext().value;if(d.getKey().getCollectionGroup()===e&&d.largestBatchId>r){let p=o.get(d.largestBatchId);p===null&&(p=ye(),o=o.insert(d.largestBatchId,p)),p.set(d.getKey(),d)}}const u=ye(),h=o.getIterator();for(;h.hasNext()&&(h.getNext().value.forEach((d,p)=>u.set(d,p)),!(u.size()>=s)););return P.resolve(u)}ht(t,e,r){const s=this.overlays.get(r.key);if(s!==null){const a=this.hr.get(s.largestBatchId).delete(r.key);this.hr.set(s.largestBatchId,a)}this.overlays=this.overlays.insert(r.key,new Pg(e,r));let o=this.hr.get(e);o===void 0&&(o=$(),this.hr.set(e,o)),this.hr.set(e,o.add(r.key))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bi{constructor(){this.Pr=new ht(at.Ir),this.Tr=new ht(at.Er)}isEmpty(){return this.Pr.isEmpty()}addReference(t,e){const r=new at(t,e);this.Pr=this.Pr.add(r),this.Tr=this.Tr.add(r)}dr(t,e){t.forEach(r=>this.addReference(r,e))}removeReference(t,e){this.Ar(new at(t,e))}Rr(t,e){t.forEach(r=>this.removeReference(r,e))}Vr(t){const e=new x(new Y([])),r=new at(e,t),s=new at(e,t+1),o=[];return this.Tr.forEachInRange([r,s],a=>{this.Ar(a),o.push(a.key)}),o}mr(){this.Pr.forEach(t=>this.Ar(t))}Ar(t){this.Pr=this.Pr.delete(t),this.Tr=this.Tr.delete(t)}gr(t){const e=new x(new Y([])),r=new at(e,t),s=new at(e,t+1);let o=$();return this.Tr.forEachInRange([r,s],a=>{o=o.add(a.key)}),o}containsKey(t){const e=new at(t,0),r=this.Pr.firstAfterOrEqual(e);return r!==null&&t.isEqual(r.key)}}class at{constructor(t,e){this.key=t,this.pr=e}static Ir(t,e){return x.comparator(t.key,e.key)||K(t.pr,e.pr)}static Er(t,e){return K(t.pr,e.pr)||x.comparator(t.key,e.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class o_{constructor(t,e){this.indexManager=t,this.referenceDelegate=e,this.mutationQueue=[],this.yr=1,this.wr=new ht(at.Ir)}checkEmpty(t){return P.resolve(this.mutationQueue.length===0)}addMutationBatch(t,e,r,s){const o=this.yr;this.yr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const a=new Sg(o,e,r,s);this.mutationQueue.push(a);for(const u of s)this.wr=this.wr.add(new at(u.key,o)),this.indexManager.addToCollectionParentIndex(t,u.key.path.popLast());return P.resolve(a)}lookupMutationBatch(t,e){return P.resolve(this.Sr(e))}getNextMutationBatchAfterBatchId(t,e){const r=e+1,s=this.br(r),o=s<0?0:s;return P.resolve(this.mutationQueue.length>o?this.mutationQueue[o]:null)}getHighestUnacknowledgedBatchId(){return P.resolve(this.mutationQueue.length===0?-1:this.yr-1)}getAllMutationBatches(t){return P.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(t,e){const r=new at(e,0),s=new at(e,Number.POSITIVE_INFINITY),o=[];return this.wr.forEachInRange([r,s],a=>{const u=this.Sr(a.pr);o.push(u)}),P.resolve(o)}getAllMutationBatchesAffectingDocumentKeys(t,e){let r=new ht(K);return e.forEach(s=>{const o=new at(s,0),a=new at(s,Number.POSITIVE_INFINITY);this.wr.forEachInRange([o,a],u=>{r=r.add(u.pr)})}),P.resolve(this.Dr(r))}getAllMutationBatchesAffectingQuery(t,e){const r=e.path,s=r.length+1;let o=r;x.isDocumentKey(o)||(o=o.child(""));const a=new at(new x(o),0);let u=new ht(K);return this.wr.forEachWhile(h=>{const d=h.key.path;return!!r.isPrefixOf(d)&&(d.length===s&&(u=u.add(h.pr)),!0)},a),P.resolve(this.Dr(u))}Dr(t){const e=[];return t.forEach(r=>{const s=this.Sr(r);s!==null&&e.push(s)}),e}removeMutationBatch(t,e){Q(this.Cr(e.batchId,"removed")===0),this.mutationQueue.shift();let r=this.wr;return P.forEach(e.mutations,s=>{const o=new at(s.key,e.batchId);return r=r.delete(o),this.referenceDelegate.markPotentiallyOrphaned(t,s.key)}).next(()=>{this.wr=r})}Mn(t){}containsKey(t,e){const r=new at(e,0),s=this.wr.firstAfterOrEqual(r);return P.resolve(e.isEqual(s&&s.key))}performConsistencyCheck(t){return this.mutationQueue.length,P.resolve()}Cr(t,e){return this.br(t)}br(t){return this.mutationQueue.length===0?0:t-this.mutationQueue[0].batchId}Sr(t){const e=this.br(t);return e<0||e>=this.mutationQueue.length?null:this.mutationQueue[e]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class a_{constructor(t){this.vr=t,this.docs=function(){return new tt(x.comparator)}(),this.size=0}setIndexManager(t){this.indexManager=t}addEntry(t,e){const r=e.key,s=this.docs.get(r),o=s?s.size:0,a=this.vr(e);return this.docs=this.docs.insert(r,{document:e.mutableCopy(),size:a}),this.size+=a-o,this.indexManager.addToCollectionParentIndex(t,r.path.popLast())}removeEntry(t){const e=this.docs.get(t);e&&(this.docs=this.docs.remove(t),this.size-=e.size)}getEntry(t,e){const r=this.docs.get(e);return P.resolve(r?r.document.mutableCopy():Tt.newInvalidDocument(e))}getEntries(t,e){let r=Yt();return e.forEach(s=>{const o=this.docs.get(s);r=r.insert(s,o?o.document.mutableCopy():Tt.newInvalidDocument(s))}),P.resolve(r)}getDocumentsMatchingQuery(t,e,r,s){let o=Yt();const a=e.path,u=new x(a.child("")),h=this.docs.getIteratorFrom(u);for(;h.hasNext();){const{key:d,value:{document:p}}=h.getNext();if(!a.isPrefixOf(d.path))break;d.path.length>a.length+1||Hm(zm(p),r)<=0||(s.has(p.key)||$r(e,p))&&(o=o.insert(p.key,p.mutableCopy()))}return P.resolve(o)}getAllFromCollectionGroup(t,e,r,s){M()}Fr(t,e){return P.forEach(this.docs,r=>e(r))}newChangeBuffer(t){return new c_(this)}getSize(t){return P.resolve(this.size)}}class c_ extends e_{constructor(t){super(),this.ar=t}applyChanges(t){const e=[];return this.changes.forEach((r,s)=>{s.isValidDocument()?e.push(this.ar.addEntry(t,s)):this.ar.removeEntry(r)}),P.waitFor(e)}getFromCache(t,e){return this.ar.getEntry(t,e)}getAllFromCache(t,e){return this.ar.getEntries(t,e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class u_{constructor(t){this.persistence=t,this.Mr=new Je(e=>Ni(e),Oi),this.lastRemoteSnapshotVersion=L.min(),this.highestTargetId=0,this.Or=0,this.Nr=new Bi,this.targetCount=0,this.Lr=Ge.Nn()}forEachTarget(t,e){return this.Mr.forEach((r,s)=>e(s)),P.resolve()}getLastRemoteSnapshotVersion(t){return P.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(t){return P.resolve(this.Or)}allocateTargetId(t){return this.highestTargetId=this.Lr.next(),P.resolve(this.highestTargetId)}setTargetsMetadata(t,e,r){return r&&(this.lastRemoteSnapshotVersion=r),e>this.Or&&(this.Or=e),P.resolve()}qn(t){this.Mr.set(t.target,t);const e=t.targetId;e>this.highestTargetId&&(this.Lr=new Ge(e),this.highestTargetId=e),t.sequenceNumber>this.Or&&(this.Or=t.sequenceNumber)}addTargetData(t,e){return this.qn(e),this.targetCount+=1,P.resolve()}updateTargetData(t,e){return this.qn(e),P.resolve()}removeTargetData(t,e){return this.Mr.delete(e.target),this.Nr.Vr(e.targetId),this.targetCount-=1,P.resolve()}removeTargets(t,e,r){let s=0;const o=[];return this.Mr.forEach((a,u)=>{u.sequenceNumber<=e&&r.get(u.targetId)===null&&(this.Mr.delete(a),o.push(this.removeMatchingKeysForTargetId(t,u.targetId)),s++)}),P.waitFor(o).next(()=>s)}getTargetCount(t){return P.resolve(this.targetCount)}getTargetData(t,e){const r=this.Mr.get(e)||null;return P.resolve(r)}addMatchingKeys(t,e,r){return this.Nr.dr(e,r),P.resolve()}removeMatchingKeys(t,e,r){this.Nr.Rr(e,r);const s=this.persistence.referenceDelegate,o=[];return s&&e.forEach(a=>{o.push(s.markPotentiallyOrphaned(t,a))}),P.waitFor(o)}removeMatchingKeysForTargetId(t,e){return this.Nr.Vr(e),P.resolve()}getMatchingKeysForTargetId(t,e){const r=this.Nr.gr(e);return P.resolve(r)}containsKey(t,e){return P.resolve(this.Nr.containsKey(e))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class l_{constructor(t,e){this.Br={},this.overlays={},this.kr=new Ci(0),this.qr=!1,this.qr=!0,this.referenceDelegate=t(this),this.Qr=new u_(this),this.indexManager=new Zg,this.remoteDocumentCache=function(s){return new a_(s)}(r=>this.referenceDelegate.Kr(r)),this.serializer=new Yg(e),this.$r=new s_(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.qr=!1,Promise.resolve()}get started(){return this.qr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(t){return this.indexManager}getDocumentOverlayCache(t){let e=this.overlays[t.toKey()];return e||(e=new i_,this.overlays[t.toKey()]=e),e}getMutationQueue(t,e){let r=this.Br[t.toKey()];return r||(r=new o_(e,this.referenceDelegate),this.Br[t.toKey()]=r),r}getTargetCache(){return this.Qr}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.$r}runTransaction(t,e,r){O("MemoryPersistence","Starting transaction:",t);const s=new h_(this.kr.next());return this.referenceDelegate.Ur(),r(s).next(o=>this.referenceDelegate.Wr(s).next(()=>o)).toPromise().then(o=>(s.raiseOnCommittedEvent(),o))}Gr(t,e){return P.or(Object.values(this.Br).map(r=>()=>r.containsKey(t,e)))}}class h_ extends Km{constructor(t){super(),this.currentSequenceNumber=t}}class qi{constructor(t){this.persistence=t,this.zr=new Bi,this.jr=null}static Hr(t){return new qi(t)}get Jr(){if(this.jr)return this.jr;throw M()}addReference(t,e,r){return this.zr.addReference(r,e),this.Jr.delete(r.toString()),P.resolve()}removeReference(t,e,r){return this.zr.removeReference(r,e),this.Jr.add(r.toString()),P.resolve()}markPotentiallyOrphaned(t,e){return this.Jr.add(e.toString()),P.resolve()}removeTarget(t,e){this.zr.Vr(e.targetId).forEach(s=>this.Jr.add(s.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(t,e.targetId).next(s=>{s.forEach(o=>this.Jr.add(o.toString()))}).next(()=>r.removeTargetData(t,e))}Ur(){this.jr=new Set}Wr(t){const e=this.persistence.getRemoteDocumentCache().newChangeBuffer();return P.forEach(this.Jr,r=>{const s=x.fromPath(r);return this.Yr(t,s).next(o=>{o||e.removeEntry(s,L.min())})}).next(()=>(this.jr=null,e.apply(t)))}updateLimboDocument(t,e){return this.Yr(t,e).next(r=>{r?this.Jr.delete(e.toString()):this.Jr.add(e.toString())})}Kr(t){return 0}Yr(t,e){return P.or([()=>P.resolve(this.zr.containsKey(e)),()=>this.persistence.getTargetCache().containsKey(t,e),()=>this.persistence.Gr(t,e)])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ji{constructor(t,e,r,s){this.targetId=t,this.fromCache=e,this.qi=r,this.Qi=s}static Ki(t,e){let r=$(),s=$();for(const o of e.docChanges)switch(o.type){case 0:r=r.add(o.doc.key);break;case 1:s=s.add(o.doc.key)}return new ji(t,e.fromCache,r,s)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class d_{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(t){this._documentReadCount+=t}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class f_{constructor(){this.$i=!1,this.Ui=!1,this.Wi=100,this.Gi=function(){return Mh()?8:Wm(di())>0?6:4}()}initialize(t,e){this.zi=t,this.indexManager=e,this.$i=!0}getDocumentsMatchingQuery(t,e,r,s){const o={result:null};return this.ji(t,e).next(a=>{o.result=a}).next(()=>{if(!o.result)return this.Hi(t,e,s,r).next(a=>{o.result=a})}).next(()=>{if(o.result)return;const a=new d_;return this.Ji(t,e,a).next(u=>{if(o.result=u,this.Ui)return this.Yi(t,e,a,u.size)})}).next(()=>o.result)}Yi(t,e,r,s){return r.documentReadCount<this.Wi?(wn()<=H.DEBUG&&O("QueryEngine","SDK will not create cache indexes for query:",Le(e),"since it only creates cache indexes for collection contains","more than or equal to",this.Wi,"documents"),P.resolve()):(wn()<=H.DEBUG&&O("QueryEngine","Query:",Le(e),"scans",r.documentReadCount,"local documents and returns",s,"documents as results."),r.documentReadCount>this.Gi*s?(wn()<=H.DEBUG&&O("QueryEngine","The SDK decides to create cache indexes for query:",Le(e),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(t,Ut(e))):P.resolve())}ji(t,e){if($a(e))return P.resolve(null);let r=Ut(e);return this.indexManager.getIndexType(t,r).next(s=>s===0?null:(e.limit!==null&&s===1&&(e=ri(e,null,"F"),r=Ut(e)),this.indexManager.getDocumentsMatchingTarget(t,r).next(o=>{const a=$(...o);return this.zi.getDocuments(t,a).next(u=>this.indexManager.getMinOffset(t,r).next(h=>{const d=this.Zi(e,u);return this.Xi(e,d,a,h.readTime)?this.ji(t,ri(e,null,"F")):this.es(t,d,e,h)}))})))}Hi(t,e,r,s){return $a(e)||s.isEqual(L.min())?P.resolve(null):this.zi.getDocuments(t,r).next(o=>{const a=this.Zi(e,o);return this.Xi(e,a,r,s)?P.resolve(null):(wn()<=H.DEBUG&&O("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),Le(e)),this.es(t,a,e,$m(s,-1)).next(u=>u))})}Zi(t,e){let r=new ht(Lu(t));return e.forEach((s,o)=>{$r(t,o)&&(r=r.add(o))}),r}Xi(t,e,r,s){if(t.limit===null)return!1;if(r.size!==e.size)return!0;const o=t.limitType==="F"?e.last():e.first();return!!o&&(o.hasPendingWrites||o.version.compareTo(s)>0)}Ji(t,e,r){return wn()<=H.DEBUG&&O("QueryEngine","Using full collection scan to execute query:",Le(e)),this.zi.getDocumentsMatchingQuery(t,e,ce.min(),r)}es(t,e,r,s){return this.zi.getDocumentsMatchingQuery(t,r,s).next(o=>(e.forEach(a=>{o=o.insert(a.key,a)}),o))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class p_{constructor(t,e,r,s){this.persistence=t,this.ts=e,this.serializer=s,this.ns=new tt(K),this.rs=new Je(o=>Ni(o),Oi),this.ss=new Map,this.os=t.getRemoteDocumentCache(),this.Qr=t.getTargetCache(),this.$r=t.getBundleCache(),this._s(r)}_s(t){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(t),this.indexManager=this.persistence.getIndexManager(t),this.mutationQueue=this.persistence.getMutationQueue(t,this.indexManager),this.localDocuments=new r_(this.os,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.os.setIndexManager(this.indexManager),this.ts.initialize(this.localDocuments,this.indexManager)}collectGarbage(t){return this.persistence.runTransaction("Collect garbage","readwrite-primary",e=>t.collect(e,this.ns))}}function m_(n,t,e,r){return new p_(n,t,e,r)}async function il(n,t){const e=U(n);return await e.persistence.runTransaction("Handle user change","readonly",r=>{let s;return e.mutationQueue.getAllMutationBatches(r).next(o=>(s=o,e._s(t),e.mutationQueue.getAllMutationBatches(r))).next(o=>{const a=[],u=[];let h=$();for(const d of s){a.push(d.batchId);for(const p of d.mutations)h=h.add(p.key)}for(const d of o){u.push(d.batchId);for(const p of d.mutations)h=h.add(p.key)}return e.localDocuments.getDocuments(r,h).next(d=>({us:d,removedBatchIds:a,addedBatchIds:u}))})})}function g_(n,t){const e=U(n);return e.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const s=t.batch.keys(),o=e.os.newChangeBuffer({trackRemovals:!0});return function(u,h,d,p){const v=d.batch,I=v.keys();let b=P.resolve();return I.forEach(D=>{b=b.next(()=>p.getEntry(h,D)).next(N=>{const C=d.docVersions.get(D);Q(C!==null),N.version.compareTo(C)<0&&(v.applyToRemoteDocument(N,d),N.isValidDocument()&&(N.setReadTime(d.commitVersion),p.addEntry(N)))})}),b.next(()=>u.mutationQueue.removeMutationBatch(h,v))}(e,r,t,o).next(()=>o.apply(r)).next(()=>e.mutationQueue.performConsistencyCheck(r)).next(()=>e.documentOverlayCache.removeOverlaysForBatchId(r,s,t.batch.batchId)).next(()=>e.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(u){let h=$();for(let d=0;d<u.mutationResults.length;++d)u.mutationResults[d].transformResults.length>0&&(h=h.add(u.batch.mutations[d].key));return h}(t))).next(()=>e.localDocuments.getDocuments(r,s))})}function ol(n){const t=U(n);return t.persistence.runTransaction("Get last remote snapshot version","readonly",e=>t.Qr.getLastRemoteSnapshotVersion(e))}function __(n,t){const e=U(n),r=t.snapshotVersion;let s=e.ns;return e.persistence.runTransaction("Apply remote event","readwrite-primary",o=>{const a=e.os.newChangeBuffer({trackRemovals:!0});s=e.ns;const u=[];t.targetChanges.forEach((p,v)=>{const I=s.get(v);if(!I)return;u.push(e.Qr.removeMatchingKeys(o,p.removedDocuments,v).next(()=>e.Qr.addMatchingKeys(o,p.addedDocuments,v)));let b=I.withSequenceNumber(o.currentSequenceNumber);t.targetMismatches.get(v)!==null?b=b.withResumeToken(vt.EMPTY_BYTE_STRING,L.min()).withLastLimboFreeSnapshotVersion(L.min()):p.resumeToken.approximateByteSize()>0&&(b=b.withResumeToken(p.resumeToken,r)),s=s.insert(v,b),function(N,C,B){return N.resumeToken.approximateByteSize()===0||C.snapshotVersion.toMicroseconds()-N.snapshotVersion.toMicroseconds()>=3e8?!0:B.addedDocuments.size+B.modifiedDocuments.size+B.removedDocuments.size>0}(I,b,p)&&u.push(e.Qr.updateTargetData(o,b))});let h=Yt(),d=$();if(t.documentUpdates.forEach(p=>{t.resolvedLimboDocuments.has(p)&&u.push(e.persistence.referenceDelegate.updateLimboDocument(o,p))}),u.push(y_(o,a,t.documentUpdates).next(p=>{h=p.cs,d=p.ls})),!r.isEqual(L.min())){const p=e.Qr.getLastRemoteSnapshotVersion(o).next(v=>e.Qr.setTargetsMetadata(o,o.currentSequenceNumber,r));u.push(p)}return P.waitFor(u).next(()=>a.apply(o)).next(()=>e.localDocuments.getLocalViewOfDocuments(o,h,d)).next(()=>h)}).then(o=>(e.ns=s,o))}function y_(n,t,e){let r=$(),s=$();return e.forEach(o=>r=r.add(o)),t.getEntries(n,r).next(o=>{let a=Yt();return e.forEach((u,h)=>{const d=o.get(u);h.isFoundDocument()!==d.isFoundDocument()&&(s=s.add(u)),h.isNoDocument()&&h.version.isEqual(L.min())?(t.removeEntry(u,h.readTime),a=a.insert(u,h)):!d.isValidDocument()||h.version.compareTo(d.version)>0||h.version.compareTo(d.version)===0&&d.hasPendingWrites?(t.addEntry(h),a=a.insert(u,h)):O("LocalStore","Ignoring outdated watch update for ",u,". Current version:",d.version," Watch version:",h.version)}),{cs:a,ls:s}})}function E_(n,t){const e=U(n);return e.persistence.runTransaction("Get next mutation batch","readonly",r=>(t===void 0&&(t=-1),e.mutationQueue.getNextMutationBatchAfterBatchId(r,t)))}function T_(n,t){const e=U(n);return e.persistence.runTransaction("Allocate target","readwrite",r=>{let s;return e.Qr.getTargetData(r,t).next(o=>o?(s=o,P.resolve(s)):e.Qr.allocateTargetId(r).next(a=>(s=new se(t,a,"TargetPurposeListen",r.currentSequenceNumber),e.Qr.addTargetData(r,s).next(()=>s))))}).then(r=>{const s=e.ns.get(r.targetId);return(s===null||r.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(e.ns=e.ns.insert(r.targetId,r),e.rs.set(t,r.targetId)),r})}async function ci(n,t,e){const r=U(n),s=r.ns.get(t),o=e?"readwrite":"readwrite-primary";try{e||await r.persistence.runTransaction("Release target",o,a=>r.persistence.referenceDelegate.removeTarget(a,s))}catch(a){if(!jn(a))throw a;O("LocalStore",`Failed to update sequence numbers for target ${t}: ${a}`)}r.ns=r.ns.remove(t),r.rs.delete(s.target)}function tc(n,t,e){const r=U(n);let s=L.min(),o=$();return r.persistence.runTransaction("Execute query","readwrite",a=>function(h,d,p){const v=U(h),I=v.rs.get(p);return I!==void 0?P.resolve(v.ns.get(I)):v.Qr.getTargetData(d,p)}(r,a,Ut(t)).next(u=>{if(u)return s=u.lastLimboFreeSnapshotVersion,r.Qr.getMatchingKeysForTargetId(a,u.targetId).next(h=>{o=h})}).next(()=>r.ts.getDocumentsMatchingQuery(a,t,e?s:L.min(),e?o:$())).next(u=>(v_(r,hg(t),u),{documents:u,hs:o})))}function v_(n,t,e){let r=n.ss.get(t)||L.min();e.forEach((s,o)=>{o.readTime.compareTo(r)>0&&(r=o.readTime)}),n.ss.set(t,r)}class ec{constructor(){this.activeTargetIds=_g()}As(t){this.activeTargetIds=this.activeTargetIds.add(t)}Rs(t){this.activeTargetIds=this.activeTargetIds.delete(t)}ds(){const t={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(t)}}class w_{constructor(){this.no=new ec,this.ro={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(t){}updateMutationState(t,e,r){}addLocalQueryTarget(t){return this.no.As(t),this.ro[t]||"not-current"}updateQueryState(t,e,r){this.ro[t]=e}removeLocalQueryTarget(t){this.no.Rs(t)}isLocalQueryTarget(t){return this.no.activeTargetIds.has(t)}clearQueryState(t){delete this.ro[t]}getAllActiveQueryTargets(){return this.no.activeTargetIds}isActiveQueryTarget(t){return this.no.activeTargetIds.has(t)}start(){return this.no=new ec,Promise.resolve()}handleUserChange(t,e,r){}setOnlineState(t){}shutdown(){}writeSequenceNumber(t){}notifyBundleLoaded(t){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class I_{io(t){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nc{constructor(){this.so=()=>this.oo(),this._o=()=>this.ao(),this.uo=[],this.co()}io(t){this.uo.push(t)}shutdown(){window.removeEventListener("online",this.so),window.removeEventListener("offline",this._o)}co(){window.addEventListener("online",this.so),window.addEventListener("offline",this._o)}oo(){O("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const t of this.uo)t(0)}ao(){O("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const t of this.uo)t(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let _r=null;function qs(){return _r===null?_r=function(){return 268435456+Math.round(2147483648*Math.random())}():_r++,"0x"+_r.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const A_={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class R_{constructor(t){this.lo=t.lo,this.ho=t.ho}Po(t){this.Io=t}To(t){this.Eo=t}Ao(t){this.Ro=t}onMessage(t){this.Vo=t}close(){this.ho()}send(t){this.lo(t)}mo(){this.Io()}fo(){this.Eo()}po(t){this.Ro(t)}yo(t){this.Vo(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yt="WebChannelConnection";class b_ extends class{constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const r=e.ssl?"https":"http",s=encodeURIComponent(this.databaseId.projectId),o=encodeURIComponent(this.databaseId.database);this.wo=r+"://"+e.host,this.So=`projects/${s}/databases/${o}`,this.bo=this.databaseId.database==="(default)"?`project_id=${s}`:`project_id=${s}&database_id=${o}`}get Do(){return!1}Co(e,r,s,o,a){const u=qs(),h=this.vo(e,r.toUriEncodedString());O("RestConnection",`Sending RPC '${e}' ${u}:`,h,s);const d={"google-cloud-resource-prefix":this.So,"x-goog-request-params":this.bo};return this.Fo(d,o,a),this.Mo(e,h,d,s).then(p=>(O("RestConnection",`Received RPC '${e}' ${u}: `,p),p),p=>{throw qe("RestConnection",`RPC '${e}' ${u} failed with error: `,p,"url: ",h,"request:",s),p})}xo(e,r,s,o,a,u){return this.Co(e,r,s,o,a)}Fo(e,r,s){e["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+Ye}(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),r&&r.headers.forEach((o,a)=>e[a]=o),s&&s.headers.forEach((o,a)=>e[a]=o)}vo(e,r){const s=A_[e];return`${this.wo}/v1/${r}:${s}`}terminate(){}}{constructor(t){super(t),this.forceLongPolling=t.forceLongPolling,this.autoDetectLongPolling=t.autoDetectLongPolling,this.useFetchStreams=t.useFetchStreams,this.longPollingOptions=t.longPollingOptions}Mo(t,e,r,s){const o=qs();return new Promise((a,u)=>{const h=new yu;h.setWithCredentials(!0),h.listenOnce(Tu.COMPLETE,()=>{try{switch(h.getLastErrorCode()){case yr.NO_ERROR:const p=h.getResponseJson();O(yt,`XHR for RPC '${t}' ${o} received:`,JSON.stringify(p)),a(p);break;case yr.TIMEOUT:O(yt,`RPC '${t}' ${o} timed out`),u(new k(S.DEADLINE_EXCEEDED,"Request time out"));break;case yr.HTTP_ERROR:const v=h.getStatus();if(O(yt,`RPC '${t}' ${o} failed with status:`,v,"response text:",h.getResponseText()),v>0){let I=h.getResponseJson();Array.isArray(I)&&(I=I[0]);const b=I==null?void 0:I.error;if(b&&b.status&&b.message){const D=function(C){const B=C.toLowerCase().replace(/_/g,"-");return Object.values(S).indexOf(B)>=0?B:S.UNKNOWN}(b.status);u(new k(D,b.message))}else u(new k(S.UNKNOWN,"Server responded with status "+h.getStatus()))}else u(new k(S.UNAVAILABLE,"Connection failed."));break;default:M()}}finally{O(yt,`RPC '${t}' ${o} completed.`)}});const d=JSON.stringify(s);O(yt,`RPC '${t}' ${o} sending request:`,s),h.send(e,"POST",d,r,15)})}Oo(t,e,r){const s=qs(),o=[this.wo,"/","google.firestore.v1.Firestore","/",t,"/channel"],a=Iu(),u=wu(),h={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},d=this.longPollingOptions.timeoutSeconds;d!==void 0&&(h.longPollingTimeout=Math.round(1e3*d)),this.useFetchStreams&&(h.xmlHttpFactory=new Eu({})),this.Fo(h.initMessageHeaders,e,r),h.encodeInitMessageHeaders=!0;const p=o.join("");O(yt,`Creating RPC '${t}' stream ${s}: ${p}`,h);const v=a.createWebChannel(p,h);let I=!1,b=!1;const D=new R_({lo:C=>{b?O(yt,`Not sending because RPC '${t}' stream ${s} is closed:`,C):(I||(O(yt,`Opening RPC '${t}' stream ${s} transport.`),v.open(),I=!0),O(yt,`RPC '${t}' stream ${s} sending:`,C),v.send(C))},ho:()=>v.close()}),N=(C,B,q)=>{C.listen(B,F=>{try{q(F)}catch(j){setTimeout(()=>{throw j},0)}})};return N(v,In.EventType.OPEN,()=>{b||(O(yt,`RPC '${t}' stream ${s} transport opened.`),D.mo())}),N(v,In.EventType.CLOSE,()=>{b||(b=!0,O(yt,`RPC '${t}' stream ${s} transport closed`),D.po())}),N(v,In.EventType.ERROR,C=>{b||(b=!0,qe(yt,`RPC '${t}' stream ${s} transport errored:`,C),D.po(new k(S.UNAVAILABLE,"The operation could not be completed")))}),N(v,In.EventType.MESSAGE,C=>{var B;if(!b){const q=C.data[0];Q(!!q);const F=q,j=F.error||((B=F[0])===null||B===void 0?void 0:B.error);if(j){O(yt,`RPC '${t}' stream ${s} received error:`,j);const ft=j.status;let Z=function(_){const y=rt[_];if(y!==void 0)return Qu(y)}(ft),E=j.message;Z===void 0&&(Z=S.INTERNAL,E="Unknown error status: "+ft+" with message "+j.message),b=!0,D.po(new k(Z,E)),v.close()}else O(yt,`RPC '${t}' stream ${s} received:`,q),D.yo(q)}}),N(u,vu.STAT_EVENT,C=>{C.stat===Ys.PROXY?O(yt,`RPC '${t}' stream ${s} detected buffering proxy`):C.stat===Ys.NOPROXY&&O(yt,`RPC '${t}' stream ${s} detected no buffering proxy`)}),setTimeout(()=>{D.fo()},0),D}}function js(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Kr(n){return new Lg(n,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class al{constructor(t,e,r=1e3,s=1.5,o=6e4){this.oi=t,this.timerId=e,this.No=r,this.Lo=s,this.Bo=o,this.ko=0,this.qo=null,this.Qo=Date.now(),this.reset()}reset(){this.ko=0}Ko(){this.ko=this.Bo}$o(t){this.cancel();const e=Math.floor(this.ko+this.Uo()),r=Math.max(0,Date.now()-this.Qo),s=Math.max(0,e-r);s>0&&O("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.ko} ms, delay with jitter: ${e} ms, last attempt: ${r} ms ago)`),this.qo=this.oi.enqueueAfterDelay(this.timerId,s,()=>(this.Qo=Date.now(),t())),this.ko*=this.Lo,this.ko<this.No&&(this.ko=this.No),this.ko>this.Bo&&(this.ko=this.Bo)}Wo(){this.qo!==null&&(this.qo.skipDelay(),this.qo=null)}cancel(){this.qo!==null&&(this.qo.cancel(),this.qo=null)}Uo(){return(Math.random()-.5)*this.ko}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cl{constructor(t,e,r,s,o,a,u,h){this.oi=t,this.Go=r,this.zo=s,this.connection=o,this.authCredentialsProvider=a,this.appCheckCredentialsProvider=u,this.listener=h,this.state=0,this.jo=0,this.Ho=null,this.Jo=null,this.stream=null,this.Yo=new al(t,e)}Zo(){return this.state===1||this.state===5||this.Xo()}Xo(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.e_()}async stop(){this.Zo()&&await this.close(0)}t_(){this.state=0,this.Yo.reset()}n_(){this.Xo()&&this.Ho===null&&(this.Ho=this.oi.enqueueAfterDelay(this.Go,6e4,()=>this.r_()))}i_(t){this.s_(),this.stream.send(t)}async r_(){if(this.Xo())return this.close(0)}s_(){this.Ho&&(this.Ho.cancel(),this.Ho=null)}o_(){this.Jo&&(this.Jo.cancel(),this.Jo=null)}async close(t,e){this.s_(),this.o_(),this.Yo.cancel(),this.jo++,t!==4?this.Yo.reset():e&&e.code===S.RESOURCE_EXHAUSTED?(Xt(e.toString()),Xt("Using maximum backoff delay to prevent overloading the backend."),this.Yo.Ko()):e&&e.code===S.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.__(),this.stream.close(),this.stream=null),this.state=t,await this.listener.Ao(e)}__(){}auth(){this.state=1;const t=this.a_(this.jo),e=this.jo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,s])=>{this.jo===e&&this.u_(r,s)},r=>{t(()=>{const s=new k(S.UNKNOWN,"Fetching auth token failed: "+r.message);return this.c_(s)})})}u_(t,e){const r=this.a_(this.jo);this.stream=this.l_(t,e),this.stream.Po(()=>{r(()=>this.listener.Po())}),this.stream.To(()=>{r(()=>(this.state=2,this.Jo=this.oi.enqueueAfterDelay(this.zo,1e4,()=>(this.Xo()&&(this.state=3),Promise.resolve())),this.listener.To()))}),this.stream.Ao(s=>{r(()=>this.c_(s))}),this.stream.onMessage(s=>{r(()=>this.onMessage(s))})}e_(){this.state=5,this.Yo.$o(async()=>{this.state=0,this.start()})}c_(t){return O("PersistentStream",`close with error: ${t}`),this.stream=null,this.close(4,t)}a_(t){return e=>{this.oi.enqueueAndForget(()=>this.jo===t?e():(O("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class S_ extends cl{constructor(t,e,r,s,o,a){super(t,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",e,r,s,a),this.serializer=o}l_(t,e){return this.connection.Oo("Listen",t,e)}onMessage(t){this.Yo.reset();const e=Bg(this.serializer,t),r=function(o){if(!("targetChange"in o))return L.min();const a=o.targetChange;return a.targetIds&&a.targetIds.length?L.min():a.readTime?Bt(a.readTime):L.min()}(t);return this.listener.h_(e,r)}P_(t){const e={};e.database=ai(this.serializer),e.addTarget=function(o,a){let u;const h=a.target;if(u=ei(h)?{documents:$g(o,h)}:{query:zg(o,h)._t},u.targetId=a.targetId,a.resumeToken.approximateByteSize()>0){u.resumeToken=Ju(o,a.resumeToken);const d=si(o,a.expectedCount);d!==null&&(u.expectedCount=d)}else if(a.snapshotVersion.compareTo(L.min())>0){u.readTime=Nr(o,a.snapshotVersion.toTimestamp());const d=si(o,a.expectedCount);d!==null&&(u.expectedCount=d)}return u}(this.serializer,t);const r=Gg(this.serializer,t);r&&(e.labels=r),this.i_(e)}I_(t){const e={};e.database=ai(this.serializer),e.removeTarget=t,this.i_(e)}}class P_ extends cl{constructor(t,e,r,s,o,a){super(t,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",e,r,s,a),this.serializer=o,this.T_=!1}get E_(){return this.T_}start(){this.T_=!1,this.lastStreamToken=void 0,super.start()}__(){this.T_&&this.d_([])}l_(t,e){return this.connection.Oo("Write",t,e)}onMessage(t){if(Q(!!t.streamToken),this.lastStreamToken=t.streamToken,this.T_){this.Yo.reset();const e=jg(t.writeResults,t.commitTime),r=Bt(t.commitTime);return this.listener.A_(r,e)}return Q(!t.writeResults||t.writeResults.length===0),this.T_=!0,this.listener.R_()}V_(){const t={};t.database=ai(this.serializer),this.i_(t)}d_(t){const e={streamToken:this.lastStreamToken,writes:t.map(r=>qg(this.serializer,r))};this.i_(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class C_ extends class{}{constructor(t,e,r,s){super(),this.authCredentials=t,this.appCheckCredentials=e,this.connection=r,this.serializer=s,this.m_=!1}f_(){if(this.m_)throw new k(S.FAILED_PRECONDITION,"The client has already been terminated.")}Co(t,e,r,s){return this.f_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,a])=>this.connection.Co(t,ii(e,r),s,o,a)).catch(o=>{throw o.name==="FirebaseError"?(o.code===S.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new k(S.UNKNOWN,o.toString())})}xo(t,e,r,s,o){return this.f_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([a,u])=>this.connection.xo(t,ii(e,r),s,a,u,o)).catch(a=>{throw a.name==="FirebaseError"?(a.code===S.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),a):new k(S.UNKNOWN,a.toString())})}terminate(){this.m_=!0,this.connection.terminate()}}class D_{constructor(t,e){this.asyncQueue=t,this.onlineStateHandler=e,this.state="Unknown",this.g_=0,this.p_=null,this.y_=!0}w_(){this.g_===0&&(this.S_("Unknown"),this.p_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.p_=null,this.b_("Backend didn't respond within 10 seconds."),this.S_("Offline"),Promise.resolve())))}D_(t){this.state==="Online"?this.S_("Unknown"):(this.g_++,this.g_>=1&&(this.C_(),this.b_(`Connection failed 1 times. Most recent error: ${t.toString()}`),this.S_("Offline")))}set(t){this.C_(),this.g_=0,t==="Online"&&(this.y_=!1),this.S_(t)}S_(t){t!==this.state&&(this.state=t,this.onlineStateHandler(t))}b_(t){const e=`Could not reach Cloud Firestore backend. ${t}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.y_?(Xt(e),this.y_=!1):O("OnlineStateTracker",e)}C_(){this.p_!==null&&(this.p_.cancel(),this.p_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class V_{constructor(t,e,r,s,o){this.localStore=t,this.datastore=e,this.asyncQueue=r,this.remoteSyncer={},this.v_=[],this.F_=new Map,this.M_=new Set,this.x_=[],this.O_=o,this.O_.io(a=>{r.enqueueAndForget(async()=>{De(this)&&(O("RemoteStore","Restarting streams for network reachability change."),await async function(h){const d=U(h);d.M_.add(4),await Gn(d),d.N_.set("Unknown"),d.M_.delete(4),await Wr(d)}(this))})}),this.N_=new D_(r,s)}}async function Wr(n){if(De(n))for(const t of n.x_)await t(!0)}async function Gn(n){for(const t of n.x_)await t(!1)}function ul(n,t){const e=U(n);e.F_.has(t.targetId)||(e.F_.set(t.targetId,t),Gi(e)?Hi(e):Ze(e).Xo()&&zi(e,t))}function $i(n,t){const e=U(n),r=Ze(e);e.F_.delete(t),r.Xo()&&ll(e,t),e.F_.size===0&&(r.Xo()?r.n_():De(e)&&e.N_.set("Unknown"))}function zi(n,t){if(n.L_.xe(t.targetId),t.resumeToken.approximateByteSize()>0||t.snapshotVersion.compareTo(L.min())>0){const e=n.remoteSyncer.getRemoteKeysForTarget(t.targetId).size;t=t.withExpectedCount(e)}Ze(n).P_(t)}function ll(n,t){n.L_.xe(t),Ze(n).I_(t)}function Hi(n){n.L_=new Ng({getRemoteKeysForTarget:t=>n.remoteSyncer.getRemoteKeysForTarget(t),ot:t=>n.F_.get(t)||null,tt:()=>n.datastore.serializer.databaseId}),Ze(n).start(),n.N_.w_()}function Gi(n){return De(n)&&!Ze(n).Zo()&&n.F_.size>0}function De(n){return U(n).M_.size===0}function hl(n){n.L_=void 0}async function k_(n){n.N_.set("Online")}async function N_(n){n.F_.forEach((t,e)=>{zi(n,t)})}async function O_(n,t){hl(n),Gi(n)?(n.N_.D_(t),Hi(n)):n.N_.set("Unknown")}async function x_(n,t,e){if(n.N_.set("Online"),t instanceof Yu&&t.state===2&&t.cause)try{await async function(s,o){const a=o.cause;for(const u of o.targetIds)s.F_.has(u)&&(await s.remoteSyncer.rejectListen(u,a),s.F_.delete(u),s.L_.removeTarget(u))}(n,t)}catch(r){O("RemoteStore","Failed to remove targets %s: %s ",t.targetIds.join(","),r),await Or(n,r)}else if(t instanceof vr?n.L_.Ke(t):t instanceof Xu?n.L_.He(t):n.L_.We(t),!e.isEqual(L.min()))try{const r=await ol(n.localStore);e.compareTo(r)>=0&&await function(o,a){const u=o.L_.rt(a);return u.targetChanges.forEach((h,d)=>{if(h.resumeToken.approximateByteSize()>0){const p=o.F_.get(d);p&&o.F_.set(d,p.withResumeToken(h.resumeToken,a))}}),u.targetMismatches.forEach((h,d)=>{const p=o.F_.get(h);if(!p)return;o.F_.set(h,p.withResumeToken(vt.EMPTY_BYTE_STRING,p.snapshotVersion)),ll(o,h);const v=new se(p.target,h,d,p.sequenceNumber);zi(o,v)}),o.remoteSyncer.applyRemoteEvent(u)}(n,e)}catch(r){O("RemoteStore","Failed to raise snapshot:",r),await Or(n,r)}}async function Or(n,t,e){if(!jn(t))throw t;n.M_.add(1),await Gn(n),n.N_.set("Offline"),e||(e=()=>ol(n.localStore)),n.asyncQueue.enqueueRetryable(async()=>{O("RemoteStore","Retrying IndexedDB access"),await e(),n.M_.delete(1),await Wr(n)})}function dl(n,t){return t().catch(e=>Or(n,e,t))}async function Qr(n){const t=U(n),e=le(t);let r=t.v_.length>0?t.v_[t.v_.length-1].batchId:-1;for(;M_(t);)try{const s=await E_(t.localStore,r);if(s===null){t.v_.length===0&&e.n_();break}r=s.batchId,L_(t,s)}catch(s){await Or(t,s)}fl(t)&&pl(t)}function M_(n){return De(n)&&n.v_.length<10}function L_(n,t){n.v_.push(t);const e=le(n);e.Xo()&&e.E_&&e.d_(t.mutations)}function fl(n){return De(n)&&!le(n).Zo()&&n.v_.length>0}function pl(n){le(n).start()}async function F_(n){le(n).V_()}async function U_(n){const t=le(n);for(const e of n.v_)t.d_(e.mutations)}async function B_(n,t,e){const r=n.v_.shift(),s=Li.from(r,t,e);await dl(n,()=>n.remoteSyncer.applySuccessfulWrite(s)),await Qr(n)}async function q_(n,t){t&&le(n).E_&&await async function(r,s){if(function(a){return Dg(a)&&a!==S.ABORTED}(s.code)){const o=r.v_.shift();le(r).t_(),await dl(r,()=>r.remoteSyncer.rejectFailedWrite(o.batchId,s)),await Qr(r)}}(n,t),fl(n)&&pl(n)}async function rc(n,t){const e=U(n);e.asyncQueue.verifyOperationInProgress(),O("RemoteStore","RemoteStore received new credentials");const r=De(e);e.M_.add(3),await Gn(e),r&&e.N_.set("Unknown"),await e.remoteSyncer.handleCredentialChange(t),e.M_.delete(3),await Wr(e)}async function j_(n,t){const e=U(n);t?(e.M_.delete(2),await Wr(e)):t||(e.M_.add(2),await Gn(e),e.N_.set("Unknown"))}function Ze(n){return n.B_||(n.B_=function(e,r,s){const o=U(e);return o.f_(),new S_(r,o.connection,o.authCredentials,o.appCheckCredentials,o.serializer,s)}(n.datastore,n.asyncQueue,{Po:k_.bind(null,n),To:N_.bind(null,n),Ao:O_.bind(null,n),h_:x_.bind(null,n)}),n.x_.push(async t=>{t?(n.B_.t_(),Gi(n)?Hi(n):n.N_.set("Unknown")):(await n.B_.stop(),hl(n))})),n.B_}function le(n){return n.k_||(n.k_=function(e,r,s){const o=U(e);return o.f_(),new P_(r,o.connection,o.authCredentials,o.appCheckCredentials,o.serializer,s)}(n.datastore,n.asyncQueue,{Po:()=>Promise.resolve(),To:F_.bind(null,n),Ao:q_.bind(null,n),R_:U_.bind(null,n),A_:B_.bind(null,n)}),n.x_.push(async t=>{t?(n.k_.t_(),await Qr(n)):(await n.k_.stop(),n.v_.length>0&&(O("RemoteStore",`Stopping write stream with ${n.v_.length} pending writes`),n.v_=[]))})),n.k_}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ki{constructor(t,e,r,s,o){this.asyncQueue=t,this.timerId=e,this.targetTimeMs=r,this.op=s,this.removalCallback=o,this.deferred=new Wt,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(a=>{})}get promise(){return this.deferred.promise}static createAndSchedule(t,e,r,s,o){const a=Date.now()+r,u=new Ki(t,e,a,s,o);return u.start(r),u}start(t){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),t)}skipDelay(){return this.handleDelayElapsed()}cancel(t){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new k(S.CANCELLED,"Operation cancelled"+(t?": "+t:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(t=>this.deferred.resolve(t))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Wi(n,t){if(Xt("AsyncQueue",`${t}: ${n}`),jn(n))return new k(S.UNAVAILABLE,`${t}: ${n}`);throw n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Be{constructor(t){this.comparator=t?(e,r)=>t(e,r)||x.comparator(e.key,r.key):(e,r)=>x.comparator(e.key,r.key),this.keyedMap=An(),this.sortedSet=new tt(this.comparator)}static emptySet(t){return new Be(t.comparator)}has(t){return this.keyedMap.get(t)!=null}get(t){return this.keyedMap.get(t)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(t){const e=this.keyedMap.get(t);return e?this.sortedSet.indexOf(e):-1}get size(){return this.sortedSet.size}forEach(t){this.sortedSet.inorderTraversal((e,r)=>(t(e),!1))}add(t){const e=this.delete(t.key);return e.copy(e.keyedMap.insert(t.key,t),e.sortedSet.insert(t,null))}delete(t){const e=this.get(t);return e?this.copy(this.keyedMap.remove(t),this.sortedSet.remove(e)):this}isEqual(t){if(!(t instanceof Be)||this.size!==t.size)return!1;const e=this.sortedSet.getIterator(),r=t.sortedSet.getIterator();for(;e.hasNext();){const s=e.getNext().key,o=r.getNext().key;if(!s.isEqual(o))return!1}return!0}toString(){const t=[];return this.forEach(e=>{t.push(e.toString())}),t.length===0?"DocumentSet ()":`DocumentSet (
  `+t.join(`  
`)+`
)`}copy(t,e){const r=new Be;return r.comparator=this.comparator,r.keyedMap=t,r.sortedSet=e,r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sc{constructor(){this.q_=new tt(x.comparator)}track(t){const e=t.doc.key,r=this.q_.get(e);r?t.type!==0&&r.type===3?this.q_=this.q_.insert(e,t):t.type===3&&r.type!==1?this.q_=this.q_.insert(e,{type:r.type,doc:t.doc}):t.type===2&&r.type===2?this.q_=this.q_.insert(e,{type:2,doc:t.doc}):t.type===2&&r.type===0?this.q_=this.q_.insert(e,{type:0,doc:t.doc}):t.type===1&&r.type===0?this.q_=this.q_.remove(e):t.type===1&&r.type===2?this.q_=this.q_.insert(e,{type:1,doc:r.doc}):t.type===0&&r.type===1?this.q_=this.q_.insert(e,{type:2,doc:t.doc}):M():this.q_=this.q_.insert(e,t)}Q_(){const t=[];return this.q_.inorderTraversal((e,r)=>{t.push(r)}),t}}class Ke{constructor(t,e,r,s,o,a,u,h,d){this.query=t,this.docs=e,this.oldDocs=r,this.docChanges=s,this.mutatedKeys=o,this.fromCache=a,this.syncStateChanged=u,this.excludesMetadataChanges=h,this.hasCachedResults=d}static fromInitialDocuments(t,e,r,s,o){const a=[];return e.forEach(u=>{a.push({type:0,doc:u})}),new Ke(t,e,Be.emptySet(e),a,r,s,!0,!1,o)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(t){if(!(this.fromCache===t.fromCache&&this.hasCachedResults===t.hasCachedResults&&this.syncStateChanged===t.syncStateChanged&&this.mutatedKeys.isEqual(t.mutatedKeys)&&jr(this.query,t.query)&&this.docs.isEqual(t.docs)&&this.oldDocs.isEqual(t.oldDocs)))return!1;const e=this.docChanges,r=t.docChanges;if(e.length!==r.length)return!1;for(let s=0;s<e.length;s++)if(e[s].type!==r[s].type||!e[s].doc.isEqual(r[s].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $_{constructor(){this.K_=void 0,this.U_=[]}W_(){return this.U_.some(t=>t.G_())}}class z_{constructor(){this.queries=new Je(t=>Mu(t),jr),this.onlineState="Unknown",this.z_=new Set}}async function ml(n,t){const e=U(n);let r=3;const s=t.query;let o=e.queries.get(s);o?!o.W_()&&t.G_()&&(r=2):(o=new $_,r=t.G_()?0:1);try{switch(r){case 0:o.K_=await e.onListen(s,!0);break;case 1:o.K_=await e.onListen(s,!1);break;case 2:await e.onFirstRemoteStoreListen(s)}}catch(a){const u=Wi(a,`Initialization of query '${Le(t.query)}' failed`);return void t.onError(u)}e.queries.set(s,o),o.U_.push(t),t.j_(e.onlineState),o.K_&&t.H_(o.K_)&&Qi(e)}async function gl(n,t){const e=U(n),r=t.query;let s=3;const o=e.queries.get(r);if(o){const a=o.U_.indexOf(t);a>=0&&(o.U_.splice(a,1),o.U_.length===0?s=t.G_()?0:1:!o.W_()&&t.G_()&&(s=2))}switch(s){case 0:return e.queries.delete(r),e.onUnlisten(r,!0);case 1:return e.queries.delete(r),e.onUnlisten(r,!1);case 2:return e.onLastRemoteStoreUnlisten(r);default:return}}function H_(n,t){const e=U(n);let r=!1;for(const s of t){const o=s.query,a=e.queries.get(o);if(a){for(const u of a.U_)u.H_(s)&&(r=!0);a.K_=s}}r&&Qi(e)}function G_(n,t,e){const r=U(n),s=r.queries.get(t);if(s)for(const o of s.U_)o.onError(e);r.queries.delete(t)}function Qi(n){n.z_.forEach(t=>{t.next()})}var ui,ic;(ic=ui||(ui={})).J_="default",ic.Cache="cache";class _l{constructor(t,e,r){this.query=t,this.Y_=e,this.Z_=!1,this.X_=null,this.onlineState="Unknown",this.options=r||{}}H_(t){if(!this.options.includeMetadataChanges){const r=[];for(const s of t.docChanges)s.type!==3&&r.push(s);t=new Ke(t.query,t.docs,t.oldDocs,r,t.mutatedKeys,t.fromCache,t.syncStateChanged,!0,t.hasCachedResults)}let e=!1;return this.Z_?this.ea(t)&&(this.Y_.next(t),e=!0):this.ta(t,this.onlineState)&&(this.na(t),e=!0),this.X_=t,e}onError(t){this.Y_.error(t)}j_(t){this.onlineState=t;let e=!1;return this.X_&&!this.Z_&&this.ta(this.X_,t)&&(this.na(this.X_),e=!0),e}ta(t,e){if(!t.fromCache||!this.G_())return!0;const r=e!=="Offline";return(!this.options.ra||!r)&&(!t.docs.isEmpty()||t.hasCachedResults||e==="Offline")}ea(t){if(t.docChanges.length>0)return!0;const e=this.X_&&this.X_.hasPendingWrites!==t.hasPendingWrites;return!(!t.syncStateChanged&&!e)&&this.options.includeMetadataChanges===!0}na(t){t=Ke.fromInitialDocuments(t.query,t.docs,t.mutatedKeys,t.fromCache,t.hasCachedResults),this.Z_=!0,this.Y_.next(t)}G_(){return this.options.source!==ui.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yl{constructor(t){this.key=t}}class El{constructor(t){this.key=t}}class K_{constructor(t,e){this.query=t,this.la=e,this.ha=null,this.hasCachedResults=!1,this.current=!1,this.Pa=$(),this.mutatedKeys=$(),this.Ia=Lu(t),this.Ta=new Be(this.Ia)}get Ea(){return this.la}da(t,e){const r=e?e.Aa:new sc,s=e?e.Ta:this.Ta;let o=e?e.mutatedKeys:this.mutatedKeys,a=s,u=!1;const h=this.query.limitType==="F"&&s.size===this.query.limit?s.last():null,d=this.query.limitType==="L"&&s.size===this.query.limit?s.first():null;if(t.inorderTraversal((p,v)=>{const I=s.get(p),b=$r(this.query,v)?v:null,D=!!I&&this.mutatedKeys.has(I.key),N=!!b&&(b.hasLocalMutations||this.mutatedKeys.has(b.key)&&b.hasCommittedMutations);let C=!1;I&&b?I.data.isEqual(b.data)?D!==N&&(r.track({type:3,doc:b}),C=!0):this.Ra(I,b)||(r.track({type:2,doc:b}),C=!0,(h&&this.Ia(b,h)>0||d&&this.Ia(b,d)<0)&&(u=!0)):!I&&b?(r.track({type:0,doc:b}),C=!0):I&&!b&&(r.track({type:1,doc:I}),C=!0,(h||d)&&(u=!0)),C&&(b?(a=a.add(b),o=N?o.add(p):o.delete(p)):(a=a.delete(p),o=o.delete(p)))}),this.query.limit!==null)for(;a.size>this.query.limit;){const p=this.query.limitType==="F"?a.last():a.first();a=a.delete(p.key),o=o.delete(p.key),r.track({type:1,doc:p})}return{Ta:a,Aa:r,Xi:u,mutatedKeys:o}}Ra(t,e){return t.hasLocalMutations&&e.hasCommittedMutations&&!e.hasLocalMutations}applyChanges(t,e,r,s){const o=this.Ta;this.Ta=t.Ta,this.mutatedKeys=t.mutatedKeys;const a=t.Aa.Q_();a.sort((p,v)=>function(b,D){const N=C=>{switch(C){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return M()}};return N(b)-N(D)}(p.type,v.type)||this.Ia(p.doc,v.doc)),this.Va(r),s=s!=null&&s;const u=e&&!s?this.ma():[],h=this.Pa.size===0&&this.current&&!s?1:0,d=h!==this.ha;return this.ha=h,a.length!==0||d?{snapshot:new Ke(this.query,t.Ta,o,a,t.mutatedKeys,h===0,d,!1,!!r&&r.resumeToken.approximateByteSize()>0),fa:u}:{fa:u}}j_(t){return this.current&&t==="Offline"?(this.current=!1,this.applyChanges({Ta:this.Ta,Aa:new sc,mutatedKeys:this.mutatedKeys,Xi:!1},!1)):{fa:[]}}ga(t){return!this.la.has(t)&&!!this.Ta.has(t)&&!this.Ta.get(t).hasLocalMutations}Va(t){t&&(t.addedDocuments.forEach(e=>this.la=this.la.add(e)),t.modifiedDocuments.forEach(e=>{}),t.removedDocuments.forEach(e=>this.la=this.la.delete(e)),this.current=t.current)}ma(){if(!this.current)return[];const t=this.Pa;this.Pa=$(),this.Ta.forEach(r=>{this.ga(r.key)&&(this.Pa=this.Pa.add(r.key))});const e=[];return t.forEach(r=>{this.Pa.has(r)||e.push(new El(r))}),this.Pa.forEach(r=>{t.has(r)||e.push(new yl(r))}),e}pa(t){this.la=t.hs,this.Pa=$();const e=this.da(t.documents);return this.applyChanges(e,!0)}ya(){return Ke.fromInitialDocuments(this.query,this.Ta,this.mutatedKeys,this.ha===0,this.hasCachedResults)}}class W_{constructor(t,e,r){this.query=t,this.targetId=e,this.view=r}}class Q_{constructor(t){this.key=t,this.wa=!1}}class X_{constructor(t,e,r,s,o,a){this.localStore=t,this.remoteStore=e,this.eventManager=r,this.sharedClientState=s,this.currentUser=o,this.maxConcurrentLimboResolutions=a,this.Sa={},this.ba=new Je(u=>Mu(u),jr),this.Da=new Map,this.Ca=new Set,this.va=new tt(x.comparator),this.Fa=new Map,this.Ma=new Bi,this.xa={},this.Oa=new Map,this.Na=Ge.Ln(),this.onlineState="Unknown",this.La=void 0}get isPrimaryClient(){return this.La===!0}}async function Y_(n,t,e=!0){const r=Rl(n);let s;const o=r.ba.get(t);return o?(r.sharedClientState.addLocalQueryTarget(o.targetId),s=o.view.ya()):s=await Tl(r,t,e,!0),s}async function J_(n,t){const e=Rl(n);await Tl(e,t,!0,!1)}async function Tl(n,t,e,r){const s=await T_(n.localStore,Ut(t)),o=s.targetId,a=e?n.sharedClientState.addLocalQueryTarget(o):"not-current";let u;return r&&(u=await Z_(n,t,o,a==="current",s.resumeToken)),n.isPrimaryClient&&e&&ul(n.remoteStore,s),u}async function Z_(n,t,e,r,s){n.Ba=(v,I,b)=>async function(N,C,B,q){let F=C.view.da(B);F.Xi&&(F=await tc(N.localStore,C.query,!1).then(({documents:E})=>C.view.da(E,F)));const j=q&&q.targetChanges.get(C.targetId),ft=q&&q.targetMismatches.get(C.targetId)!=null,Z=C.view.applyChanges(F,N.isPrimaryClient,j,ft);return ac(N,C.targetId,Z.fa),Z.snapshot}(n,v,I,b);const o=await tc(n.localStore,t,!0),a=new K_(t,o.hs),u=a.da(o.documents),h=Hn.createSynthesizedTargetChangeForCurrentChange(e,r&&n.onlineState!=="Offline",s),d=a.applyChanges(u,n.isPrimaryClient,h);ac(n,e,d.fa);const p=new W_(t,e,a);return n.ba.set(t,p),n.Da.has(e)?n.Da.get(e).push(t):n.Da.set(e,[t]),d.snapshot}async function ty(n,t,e){const r=U(n),s=r.ba.get(t),o=r.Da.get(s.targetId);if(o.length>1)return r.Da.set(s.targetId,o.filter(a=>!jr(a,t))),void r.ba.delete(t);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(s.targetId),r.sharedClientState.isActiveQueryTarget(s.targetId)||await ci(r.localStore,s.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(s.targetId),e&&$i(r.remoteStore,s.targetId),li(r,s.targetId)}).catch(qn)):(li(r,s.targetId),await ci(r.localStore,s.targetId,!0))}async function ey(n,t){const e=U(n),r=e.ba.get(t),s=e.Da.get(r.targetId);e.isPrimaryClient&&s.length===1&&(e.sharedClientState.removeLocalQueryTarget(r.targetId),$i(e.remoteStore,r.targetId))}async function ny(n,t,e){const r=uy(n);try{const s=await function(a,u){const h=U(a),d=ot.now(),p=u.reduce((b,D)=>b.add(D.key),$());let v,I;return h.persistence.runTransaction("Locally write mutations","readwrite",b=>{let D=Yt(),N=$();return h.os.getEntries(b,p).next(C=>{D=C,D.forEach((B,q)=>{q.isValidDocument()||(N=N.add(B))})}).next(()=>h.localDocuments.getOverlayedDocuments(b,D)).next(C=>{v=C;const B=[];for(const q of u){const F=Rg(q,v.get(q.key).overlayedDocument);F!=null&&B.push(new he(q.key,F,Pu(F.value.mapValue),Ot.exists(!0)))}return h.mutationQueue.addMutationBatch(b,d,B,u)}).next(C=>{I=C;const B=C.applyToLocalDocumentSet(v,N);return h.documentOverlayCache.saveOverlays(b,C.batchId,B)})}).then(()=>({batchId:I.batchId,changes:Uu(v)}))}(r.localStore,t);r.sharedClientState.addPendingMutation(s.batchId),function(a,u,h){let d=a.xa[a.currentUser.toKey()];d||(d=new tt(K)),d=d.insert(u,h),a.xa[a.currentUser.toKey()]=d}(r,s.batchId,e),await Kn(r,s.changes),await Qr(r.remoteStore)}catch(s){const o=Wi(s,"Failed to persist write");e.reject(o)}}async function vl(n,t){const e=U(n);try{const r=await __(e.localStore,t);t.targetChanges.forEach((s,o)=>{const a=e.Fa.get(o);a&&(Q(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1),s.addedDocuments.size>0?a.wa=!0:s.modifiedDocuments.size>0?Q(a.wa):s.removedDocuments.size>0&&(Q(a.wa),a.wa=!1))}),await Kn(e,r,t)}catch(r){await qn(r)}}function oc(n,t,e){const r=U(n);if(r.isPrimaryClient&&e===0||!r.isPrimaryClient&&e===1){const s=[];r.ba.forEach((o,a)=>{const u=a.view.j_(t);u.snapshot&&s.push(u.snapshot)}),function(a,u){const h=U(a);h.onlineState=u;let d=!1;h.queries.forEach((p,v)=>{for(const I of v.U_)I.j_(u)&&(d=!0)}),d&&Qi(h)}(r.eventManager,t),s.length&&r.Sa.h_(s),r.onlineState=t,r.isPrimaryClient&&r.sharedClientState.setOnlineState(t)}}async function ry(n,t,e){const r=U(n);r.sharedClientState.updateQueryState(t,"rejected",e);const s=r.Fa.get(t),o=s&&s.key;if(o){let a=new tt(x.comparator);a=a.insert(o,Tt.newNoDocument(o,L.min()));const u=$().add(o),h=new Gr(L.min(),new Map,new tt(K),a,u);await vl(r,h),r.va=r.va.remove(o),r.Fa.delete(t),Xi(r)}else await ci(r.localStore,t,!1).then(()=>li(r,t,e)).catch(qn)}async function sy(n,t){const e=U(n),r=t.batch.batchId;try{const s=await g_(e.localStore,t);Il(e,r,null),wl(e,r),e.sharedClientState.updateMutationState(r,"acknowledged"),await Kn(e,s)}catch(s){await qn(s)}}async function iy(n,t,e){const r=U(n);try{const s=await function(a,u){const h=U(a);return h.persistence.runTransaction("Reject batch","readwrite-primary",d=>{let p;return h.mutationQueue.lookupMutationBatch(d,u).next(v=>(Q(v!==null),p=v.keys(),h.mutationQueue.removeMutationBatch(d,v))).next(()=>h.mutationQueue.performConsistencyCheck(d)).next(()=>h.documentOverlayCache.removeOverlaysForBatchId(d,p,u)).next(()=>h.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(d,p)).next(()=>h.localDocuments.getDocuments(d,p))})}(r.localStore,t);Il(r,t,e),wl(r,t),r.sharedClientState.updateMutationState(t,"rejected",e),await Kn(r,s)}catch(s){await qn(s)}}function wl(n,t){(n.Oa.get(t)||[]).forEach(e=>{e.resolve()}),n.Oa.delete(t)}function Il(n,t,e){const r=U(n);let s=r.xa[r.currentUser.toKey()];if(s){const o=s.get(t);o&&(e?o.reject(e):o.resolve(),s=s.remove(t)),r.xa[r.currentUser.toKey()]=s}}function li(n,t,e=null){n.sharedClientState.removeLocalQueryTarget(t);for(const r of n.Da.get(t))n.ba.delete(r),e&&n.Sa.ka(r,e);n.Da.delete(t),n.isPrimaryClient&&n.Ma.Vr(t).forEach(r=>{n.Ma.containsKey(r)||Al(n,r)})}function Al(n,t){n.Ca.delete(t.path.canonicalString());const e=n.va.get(t);e!==null&&($i(n.remoteStore,e),n.va=n.va.remove(t),n.Fa.delete(e),Xi(n))}function ac(n,t,e){for(const r of e)r instanceof yl?(n.Ma.addReference(r.key,t),oy(n,r)):r instanceof El?(O("SyncEngine","Document no longer in limbo: "+r.key),n.Ma.removeReference(r.key,t),n.Ma.containsKey(r.key)||Al(n,r.key)):M()}function oy(n,t){const e=t.key,r=e.path.canonicalString();n.va.get(e)||n.Ca.has(r)||(O("SyncEngine","New document in limbo: "+e),n.Ca.add(r),Xi(n))}function Xi(n){for(;n.Ca.size>0&&n.va.size<n.maxConcurrentLimboResolutions;){const t=n.Ca.values().next().value;n.Ca.delete(t);const e=new x(Y.fromString(t)),r=n.Na.next();n.Fa.set(r,new Q_(e)),n.va=n.va.insert(e,r),ul(n.remoteStore,new se(Ut(xi(e.path)),r,"TargetPurposeLimboResolution",Ci.oe))}}async function Kn(n,t,e){const r=U(n),s=[],o=[],a=[];r.ba.isEmpty()||(r.ba.forEach((u,h)=>{a.push(r.Ba(h,t,e).then(d=>{if((d||e)&&r.isPrimaryClient){const p=d&&!d.fromCache;r.sharedClientState.updateQueryState(h.targetId,p?"current":"not-current")}if(d){s.push(d);const p=ji.Ki(h.targetId,d);o.push(p)}}))}),await Promise.all(a),r.Sa.h_(s),await async function(h,d){const p=U(h);try{await p.persistence.runTransaction("notifyLocalViewChanges","readwrite",v=>P.forEach(d,I=>P.forEach(I.qi,b=>p.persistence.referenceDelegate.addReference(v,I.targetId,b)).next(()=>P.forEach(I.Qi,b=>p.persistence.referenceDelegate.removeReference(v,I.targetId,b)))))}catch(v){if(!jn(v))throw v;O("LocalStore","Failed to update sequence numbers: "+v)}for(const v of d){const I=v.targetId;if(!v.fromCache){const b=p.ns.get(I),D=b.snapshotVersion,N=b.withLastLimboFreeSnapshotVersion(D);p.ns=p.ns.insert(I,N)}}}(r.localStore,o))}async function ay(n,t){const e=U(n);if(!e.currentUser.isEqual(t)){O("SyncEngine","User change. New user:",t.toKey());const r=await il(e.localStore,t);e.currentUser=t,function(o,a){o.Oa.forEach(u=>{u.forEach(h=>{h.reject(new k(S.CANCELLED,a))})}),o.Oa.clear()}(e,"'waitForPendingWrites' promise is rejected due to a user change."),e.sharedClientState.handleUserChange(t,r.removedBatchIds,r.addedBatchIds),await Kn(e,r.us)}}function cy(n,t){const e=U(n),r=e.Fa.get(t);if(r&&r.wa)return $().add(r.key);{let s=$();const o=e.Da.get(t);if(!o)return s;for(const a of o){const u=e.ba.get(a);s=s.unionWith(u.view.Ea)}return s}}function Rl(n){const t=U(n);return t.remoteStore.remoteSyncer.applyRemoteEvent=vl.bind(null,t),t.remoteStore.remoteSyncer.getRemoteKeysForTarget=cy.bind(null,t),t.remoteStore.remoteSyncer.rejectListen=ry.bind(null,t),t.Sa.h_=H_.bind(null,t.eventManager),t.Sa.ka=G_.bind(null,t.eventManager),t}function uy(n){const t=U(n);return t.remoteStore.remoteSyncer.applySuccessfulWrite=sy.bind(null,t),t.remoteStore.remoteSyncer.rejectFailedWrite=iy.bind(null,t),t}class cc{constructor(){this.synchronizeTabs=!1}async initialize(t){this.serializer=Kr(t.databaseInfo.databaseId),this.sharedClientState=this.createSharedClientState(t),this.persistence=this.createPersistence(t),await this.persistence.start(),this.localStore=this.createLocalStore(t),this.gcScheduler=this.createGarbageCollectionScheduler(t,this.localStore),this.indexBackfillerScheduler=this.createIndexBackfillerScheduler(t,this.localStore)}createGarbageCollectionScheduler(t,e){return null}createIndexBackfillerScheduler(t,e){return null}createLocalStore(t){return m_(this.persistence,new f_,t.initialUser,this.serializer)}createPersistence(t){return new l_(qi.Hr,this.serializer)}createSharedClientState(t){return new w_}async terminate(){var t,e;(t=this.gcScheduler)===null||t===void 0||t.stop(),(e=this.indexBackfillerScheduler)===null||e===void 0||e.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class ly{async initialize(t,e){this.localStore||(this.localStore=t.localStore,this.sharedClientState=t.sharedClientState,this.datastore=this.createDatastore(e),this.remoteStore=this.createRemoteStore(e),this.eventManager=this.createEventManager(e),this.syncEngine=this.createSyncEngine(e,!t.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>oc(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=ay.bind(null,this.syncEngine),await j_(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(t){return function(){return new z_}()}createDatastore(t){const e=Kr(t.databaseInfo.databaseId),r=function(o){return new b_(o)}(t.databaseInfo);return function(o,a,u,h){return new C_(o,a,u,h)}(t.authCredentials,t.appCheckCredentials,r,e)}createRemoteStore(t){return function(r,s,o,a,u){return new V_(r,s,o,a,u)}(this.localStore,this.datastore,t.asyncQueue,e=>oc(this.syncEngine,e,0),function(){return nc.D()?new nc:new I_}())}createSyncEngine(t,e){return function(s,o,a,u,h,d,p){const v=new X_(s,o,a,u,h,d);return p&&(v.La=!0),v}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,t.initialUser,t.maxConcurrentLimboResolutions,e)}async terminate(){var t;await async function(r){const s=U(r);O("RemoteStore","RemoteStore shutting down."),s.M_.add(5),await Gn(s),s.O_.shutdown(),s.N_.set("Unknown")}(this.remoteStore),(t=this.datastore)===null||t===void 0||t.terminate()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bl{constructor(t){this.observer=t,this.muted=!1}next(t){this.observer.next&&this.Ka(this.observer.next,t)}error(t){this.observer.error?this.Ka(this.observer.error,t):Xt("Uncaught Error in snapshot listener:",t.toString())}$a(){this.muted=!0}Ka(t,e){this.muted||setTimeout(()=>{this.muted||t(e)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hy{constructor(t,e,r,s){this.authCredentials=t,this.appCheckCredentials=e,this.asyncQueue=r,this.databaseInfo=s,this.user=Et.UNAUTHENTICATED,this.clientId=Ru.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(r,async o=>{O("FirestoreClient","Received user=",o.uid),await this.authCredentialListener(o),this.user=o}),this.appCheckCredentials.start(r,o=>(O("FirestoreClient","Received new app check token=",o),this.appCheckCredentialListener(o,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(t){this.authCredentialListener=t}setAppCheckTokenChangeListener(t){this.appCheckCredentialListener=t}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new k(S.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const t=new Wt;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),t.resolve()}catch(e){const r=Wi(e,"Failed to shutdown persistence");t.reject(r)}}),t.promise}}async function $s(n,t){n.asyncQueue.verifyOperationInProgress(),O("FirestoreClient","Initializing OfflineComponentProvider");const e=n.configuration;await t.initialize(e);let r=e.initialUser;n.setCredentialChangeListener(async s=>{r.isEqual(s)||(await il(t.localStore,s),r=s)}),t.persistence.setDatabaseDeletedListener(()=>n.terminate()),n._offlineComponents=t}async function uc(n,t){n.asyncQueue.verifyOperationInProgress();const e=await fy(n);O("FirestoreClient","Initializing OnlineComponentProvider"),await t.initialize(e,n.configuration),n.setCredentialChangeListener(r=>rc(t.remoteStore,r)),n.setAppCheckTokenChangeListener((r,s)=>rc(t.remoteStore,s)),n._onlineComponents=t}function dy(n){return n.name==="FirebaseError"?n.code===S.FAILED_PRECONDITION||n.code===S.UNIMPLEMENTED:!(typeof DOMException<"u"&&n instanceof DOMException)||n.code===22||n.code===20||n.code===11}async function fy(n){if(!n._offlineComponents)if(n._uninitializedComponentsProvider){O("FirestoreClient","Using user provided OfflineComponentProvider");try{await $s(n,n._uninitializedComponentsProvider._offline)}catch(t){const e=t;if(!dy(e))throw e;qe("Error using user provided cache. Falling back to memory cache: "+e),await $s(n,new cc)}}else O("FirestoreClient","Using default OfflineComponentProvider"),await $s(n,new cc);return n._offlineComponents}async function Sl(n){return n._onlineComponents||(n._uninitializedComponentsProvider?(O("FirestoreClient","Using user provided OnlineComponentProvider"),await uc(n,n._uninitializedComponentsProvider._online)):(O("FirestoreClient","Using default OnlineComponentProvider"),await uc(n,new ly))),n._onlineComponents}function py(n){return Sl(n).then(t=>t.syncEngine)}async function Pl(n){const t=await Sl(n),e=t.eventManager;return e.onListen=Y_.bind(null,t.syncEngine),e.onUnlisten=ty.bind(null,t.syncEngine),e.onFirstRemoteStoreListen=J_.bind(null,t.syncEngine),e.onLastRemoteStoreUnlisten=ey.bind(null,t.syncEngine),e}function my(n,t,e={}){const r=new Wt;return n.asyncQueue.enqueueAndForget(async()=>function(o,a,u,h,d){const p=new bl({next:I=>{a.enqueueAndForget(()=>gl(o,v));const b=I.docs.has(u);!b&&I.fromCache?d.reject(new k(S.UNAVAILABLE,"Failed to get document because the client is offline.")):b&&I.fromCache&&h&&h.source==="server"?d.reject(new k(S.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):d.resolve(I)},error:I=>d.reject(I)}),v=new _l(xi(u.path),p,{includeMetadataChanges:!0,ra:!0});return ml(o,v)}(await Pl(n),n.asyncQueue,t,e,r)),r.promise}function gy(n,t,e={}){const r=new Wt;return n.asyncQueue.enqueueAndForget(async()=>function(o,a,u,h,d){const p=new bl({next:I=>{a.enqueueAndForget(()=>gl(o,v)),I.fromCache&&h.source==="server"?d.reject(new k(S.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):d.resolve(I)},error:I=>d.reject(I)}),v=new _l(u,p,{includeMetadataChanges:!0,ra:!0});return ml(o,v)}(await Pl(n),n.asyncQueue,t,e,r)),r.promise}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Cl(n){const t={};return n.timeoutSeconds!==void 0&&(t.timeoutSeconds=n.timeoutSeconds),t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lc=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Dl(n,t,e){if(!e)throw new k(S.INVALID_ARGUMENT,`Function ${n}() cannot be called with an empty ${t}.`)}function _y(n,t,e,r){if(t===!0&&r===!0)throw new k(S.INVALID_ARGUMENT,`${n} and ${e} cannot be used together.`)}function hc(n){if(!x.isDocumentKey(n))throw new k(S.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${n} has ${n.length}.`)}function dc(n){if(x.isDocumentKey(n))throw new k(S.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${n} has ${n.length}.`)}function Xr(n){if(n===void 0)return"undefined";if(n===null)return"null";if(typeof n=="string")return n.length>20&&(n=`${n.substring(0,20)}...`),JSON.stringify(n);if(typeof n=="number"||typeof n=="boolean")return""+n;if(typeof n=="object"){if(n instanceof Array)return"an array";{const t=function(r){return r.constructor?r.constructor.name:null}(n);return t?`a custom ${t} object`:"an object"}}return typeof n=="function"?"a function":M()}function Lt(n,t){if("_delegate"in n&&(n=n._delegate),!(n instanceof t)){if(t.name===n.constructor.name)throw new k(S.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const e=Xr(n);throw new k(S.INVALID_ARGUMENT,`Expected type '${t.name}', but it was: ${e}`)}}return n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fc{constructor(t){var e,r;if(t.host===void 0){if(t.ssl!==void 0)throw new k(S.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=t.host,this.ssl=(e=t.ssl)===null||e===void 0||e;if(this.credentials=t.credentials,this.ignoreUndefinedProperties=!!t.ignoreUndefinedProperties,this.localCache=t.localCache,t.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(t.cacheSizeBytes!==-1&&t.cacheSizeBytes<1048576)throw new k(S.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=t.cacheSizeBytes}_y("experimentalForceLongPolling",t.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",t.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!t.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:t.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!t.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=Cl((r=t.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(o){if(o.timeoutSeconds!==void 0){if(isNaN(o.timeoutSeconds))throw new k(S.INVALID_ARGUMENT,`invalid long polling timeout: ${o.timeoutSeconds} (must not be NaN)`);if(o.timeoutSeconds<5)throw new k(S.INVALID_ARGUMENT,`invalid long polling timeout: ${o.timeoutSeconds} (minimum allowed value is 5)`);if(o.timeoutSeconds>30)throw new k(S.INVALID_ARGUMENT,`invalid long polling timeout: ${o.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!t.useFetchStreams}isEqual(t){return this.host===t.host&&this.ssl===t.ssl&&this.credentials===t.credentials&&this.cacheSizeBytes===t.cacheSizeBytes&&this.experimentalForceLongPolling===t.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===t.experimentalAutoDetectLongPolling&&function(r,s){return r.timeoutSeconds===s.timeoutSeconds}(this.experimentalLongPollingOptions,t.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===t.ignoreUndefinedProperties&&this.useFetchStreams===t.useFetchStreams}}class Yr{constructor(t,e,r,s){this._authCredentials=t,this._appCheckCredentials=e,this._databaseId=r,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new fc({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new k(S.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(t){if(this._settingsFrozen)throw new k(S.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new fc(t),t.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new Om;switch(r.type){case"firstParty":return new Fm(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new k(S.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(t.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const r=lc.get(e);r&&(O("ComponentProvider","Removing Datastore"),lc.delete(e),r.terminate())}(this),Promise.resolve()}}function yy(n,t,e,r={}){var s;const o=(n=Lt(n,Yr))._getSettings(),a=`${t}:${e}`;if(o.host!=="firestore.googleapis.com"&&o.host!==a&&qe("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),n._setSettings(Object.assign(Object.assign({},o),{host:a,ssl:!1})),r.mockUserToken){let u,h;if(typeof r.mockUserToken=="string")u=r.mockUserToken,h=Et.MOCK_USER;else{u=Tc(r.mockUserToken,(s=n._app)===null||s===void 0?void 0:s.options.projectId);const d=r.mockUserToken.sub||r.mockUserToken.user_id;if(!d)throw new k(S.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");h=new Et(d)}n._authCredentials=new xm(new Au(u,h))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tn{constructor(t,e,r){this.converter=e,this._query=r,this.type="query",this.firestore=t}withConverter(t){return new tn(this.firestore,t,this._query)}}class Rt{constructor(t,e,r){this.converter=e,this._key=r,this.type="document",this.firestore=t}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new ae(this.firestore,this.converter,this._key.path.popLast())}withConverter(t){return new Rt(this.firestore,t,this._key)}}class ae extends tn{constructor(t,e,r){super(t,e,xi(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const t=this._path.popLast();return t.isEmpty()?null:new Rt(this.firestore,null,new x(t))}withConverter(t){return new ae(this.firestore,t,this._path)}}function nE(n,t,...e){if(n=dt(n),Dl("collection","path",t),n instanceof Yr){const r=Y.fromString(t,...e);return dc(r),new ae(n,null,r)}{if(!(n instanceof Rt||n instanceof ae))throw new k(S.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(Y.fromString(t,...e));return dc(r),new ae(n.firestore,null,r)}}function Ey(n,t,...e){if(n=dt(n),arguments.length===1&&(t=Ru.newId()),Dl("doc","path",t),n instanceof Yr){const r=Y.fromString(t,...e);return hc(r),new Rt(n,null,new x(r))}{if(!(n instanceof Rt||n instanceof ae))throw new k(S.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(Y.fromString(t,...e));return hc(r),new Rt(n.firestore,n instanceof ae?n.converter:null,new x(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ty{constructor(){this.iu=Promise.resolve(),this.su=[],this.ou=!1,this._u=[],this.au=null,this.uu=!1,this.cu=!1,this.lu=[],this.Yo=new al(this,"async_queue_retry"),this.hu=()=>{const e=js();e&&O("AsyncQueue","Visibility state changed to "+e.visibilityState),this.Yo.Wo()};const t=js();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this.hu)}get isShuttingDown(){return this.ou}enqueueAndForget(t){this.enqueue(t)}enqueueAndForgetEvenWhileRestricted(t){this.Pu(),this.Iu(t)}enterRestrictedMode(t){if(!this.ou){this.ou=!0,this.cu=t||!1;const e=js();e&&typeof e.removeEventListener=="function"&&e.removeEventListener("visibilitychange",this.hu)}}enqueue(t){if(this.Pu(),this.ou)return new Promise(()=>{});const e=new Wt;return this.Iu(()=>this.ou&&this.cu?Promise.resolve():(t().then(e.resolve,e.reject),e.promise)).then(()=>e.promise)}enqueueRetryable(t){this.enqueueAndForget(()=>(this.su.push(t),this.Tu()))}async Tu(){if(this.su.length!==0){try{await this.su[0](),this.su.shift(),this.Yo.reset()}catch(t){if(!jn(t))throw t;O("AsyncQueue","Operation failed with retryable error: "+t)}this.su.length>0&&this.Yo.$o(()=>this.Tu())}}Iu(t){const e=this.iu.then(()=>(this.uu=!0,t().catch(r=>{this.au=r,this.uu=!1;const s=function(a){let u=a.message||"";return a.stack&&(u=a.stack.includes(a.message)?a.stack:a.message+`
`+a.stack),u}(r);throw Xt("INTERNAL UNHANDLED ERROR: ",s),r}).then(r=>(this.uu=!1,r))));return this.iu=e,e}enqueueAfterDelay(t,e,r){this.Pu(),this.lu.indexOf(t)>-1&&(e=0);const s=Ki.createAndSchedule(this,t,e,r,o=>this.Eu(o));return this._u.push(s),s}Pu(){this.au&&M()}verifyOperationInProgress(){}async du(){let t;do t=this.iu,await t;while(t!==this.iu)}Au(t){for(const e of this._u)if(e.timerId===t)return!0;return!1}Ru(t){return this.du().then(()=>{this._u.sort((e,r)=>e.targetTimeMs-r.targetTimeMs);for(const e of this._u)if(e.skipDelay(),t!=="all"&&e.timerId===t)break;return this.du()})}Vu(t){this.lu.push(t)}Eu(t){const e=this._u.indexOf(t);this._u.splice(e,1)}}class Ve extends Yr{constructor(t,e,r,s){super(t,e,r,s),this.type="firestore",this._queue=function(){return new Ty}(),this._persistenceKey=(s==null?void 0:s.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||Vl(this),this._firestoreClient.terminate()}}function vy(n,t){const e=typeof n=="object"?n:mi(),r=typeof n=="string"?n:"(default)",s=Qe(e,"firestore").getImmediate({identifier:r});if(!s._initialized){const o=yc("firestore");o&&yy(s,...o)}return s}function Yi(n){return n._firestoreClient||Vl(n),n._firestoreClient.verifyNotTerminated(),n._firestoreClient}function Vl(n){var t,e,r;const s=n._freezeSettings(),o=function(u,h,d,p){return new Ym(u,h,d,p.host,p.ssl,p.experimentalForceLongPolling,p.experimentalAutoDetectLongPolling,Cl(p.experimentalLongPollingOptions),p.useFetchStreams)}(n._databaseId,((t=n._app)===null||t===void 0?void 0:t.options.appId)||"",n._persistenceKey,s);n._firestoreClient=new hy(n._authCredentials,n._appCheckCredentials,n._queue,o),!((e=s.localCache)===null||e===void 0)&&e._offlineComponentProvider&&(!((r=s.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(n._firestoreClient._uninitializedComponentsProvider={_offlineKind:s.localCache.kind,_offline:s.localCache._offlineComponentProvider,_online:s.localCache._onlineComponentProvider})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class We{constructor(t){this._byteString=t}static fromBase64String(t){try{return new We(vt.fromBase64String(t))}catch(e){throw new k(S.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+e)}}static fromUint8Array(t){return new We(vt.fromUint8Array(t))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(t){return this._byteString.isEqual(t._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jr{constructor(...t){for(let e=0;e<t.length;++e)if(t[e].length===0)throw new k(S.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new lt(t)}isEqual(t){return this._internalPath.isEqual(t._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zr{constructor(t){this._methodName=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ji{constructor(t,e){if(!isFinite(t)||t<-90||t>90)throw new k(S.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+t);if(!isFinite(e)||e<-180||e>180)throw new k(S.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+e);this._lat=t,this._long=e}get latitude(){return this._lat}get longitude(){return this._long}isEqual(t){return this._lat===t._lat&&this._long===t._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(t){return K(this._lat,t._lat)||K(this._long,t._long)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wy=/^__.*__$/;class Iy{constructor(t,e,r){this.data=t,this.fieldMask=e,this.fieldTransforms=r}toMutation(t,e){return this.fieldMask!==null?new he(t,this.data,this.fieldMask,e,this.fieldTransforms):new zn(t,this.data,e,this.fieldTransforms)}}class kl{constructor(t,e,r){this.data=t,this.fieldMask=e,this.fieldTransforms=r}toMutation(t,e){return new he(t,this.data,this.fieldMask,e,this.fieldTransforms)}}function Nl(n){switch(n){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw M()}}class ts{constructor(t,e,r,s,o,a){this.settings=t,this.databaseId=e,this.serializer=r,this.ignoreUndefinedProperties=s,o===void 0&&this.mu(),this.fieldTransforms=o||[],this.fieldMask=a||[]}get path(){return this.settings.path}get fu(){return this.settings.fu}gu(t){return new ts(Object.assign(Object.assign({},this.settings),t),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}pu(t){var e;const r=(e=this.path)===null||e===void 0?void 0:e.child(t),s=this.gu({path:r,yu:!1});return s.wu(t),s}Su(t){var e;const r=(e=this.path)===null||e===void 0?void 0:e.child(t),s=this.gu({path:r,yu:!1});return s.mu(),s}bu(t){return this.gu({path:void 0,yu:!0})}Du(t){return xr(t,this.settings.methodName,this.settings.Cu||!1,this.path,this.settings.vu)}contains(t){return this.fieldMask.find(e=>t.isPrefixOf(e))!==void 0||this.fieldTransforms.find(e=>t.isPrefixOf(e.field))!==void 0}mu(){if(this.path)for(let t=0;t<this.path.length;t++)this.wu(this.path.get(t))}wu(t){if(t.length===0)throw this.Du("Document fields must not be empty");if(Nl(this.fu)&&wy.test(t))throw this.Du('Document fields cannot begin and end with "__"')}}class Ay{constructor(t,e,r){this.databaseId=t,this.ignoreUndefinedProperties=e,this.serializer=r||Kr(t)}Fu(t,e,r,s=!1){return new ts({fu:t,methodName:e,vu:r,path:lt.emptyPath(),yu:!1,Cu:s},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function es(n){const t=n._freezeSettings(),e=Kr(n._databaseId);return new Ay(n._databaseId,!!t.ignoreUndefinedProperties,e)}function Ol(n,t,e,r,s,o={}){const a=n.Fu(o.merge||o.mergeFields?2:0,t,e,s);to("Data must be an object, but it was:",a,r);const u=xl(r,a);let h,d;if(o.merge)h=new Vt(a.fieldMask),d=a.fieldTransforms;else if(o.mergeFields){const p=[];for(const v of o.mergeFields){const I=hi(t,v,e);if(!a.contains(I))throw new k(S.INVALID_ARGUMENT,`Field '${I}' is specified in your field mask but missing from your input data.`);Ll(p,I)||p.push(I)}h=new Vt(p),d=a.fieldTransforms.filter(v=>h.covers(v.field))}else h=null,d=a.fieldTransforms;return new Iy(new St(u),h,d)}class ns extends Zr{_toFieldTransform(t){if(t.fu!==2)throw t.fu===1?t.Du(`${this._methodName}() can only appear at the top level of your update data`):t.Du(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return t.fieldMask.push(t.path),null}isEqual(t){return t instanceof ns}}function Ry(n,t,e){return new ts({fu:3,vu:t.settings.vu,methodName:n._methodName,yu:e},t.databaseId,t.serializer,t.ignoreUndefinedProperties)}class Zi extends Zr{constructor(t,e){super(t),this.Mu=e}_toFieldTransform(t){const e=Ry(this,t,!0),r=this.Mu.map(o=>en(o,e)),s=new He(r);return new vg(t.path,s)}isEqual(t){return t instanceof Zi&&Nn(this.Mu,t.Mu)}}function by(n,t,e,r){const s=n.Fu(1,t,e);to("Data must be an object, but it was:",s,r);const o=[],a=St.empty();Ce(r,(h,d)=>{const p=eo(t,h,e);d=dt(d);const v=s.Su(p);if(d instanceof ns)o.push(p);else{const I=en(d,v);I!=null&&(o.push(p),a.set(p,I))}});const u=new Vt(o);return new kl(a,u,s.fieldTransforms)}function Sy(n,t,e,r,s,o){const a=n.Fu(1,t,e),u=[hi(t,r,e)],h=[s];if(o.length%2!=0)throw new k(S.INVALID_ARGUMENT,`Function ${t}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let I=0;I<o.length;I+=2)u.push(hi(t,o[I])),h.push(o[I+1]);const d=[],p=St.empty();for(let I=u.length-1;I>=0;--I)if(!Ll(d,u[I])){const b=u[I];let D=h[I];D=dt(D);const N=a.Su(b);if(D instanceof ns)d.push(b);else{const C=en(D,N);C!=null&&(d.push(b),p.set(b,C))}}const v=new Vt(d);return new kl(p,v,a.fieldTransforms)}function Py(n,t,e,r=!1){return en(e,n.Fu(r?4:3,t))}function en(n,t){if(Ml(n=dt(n)))return to("Unsupported field value:",t,n),xl(n,t);if(n instanceof Zr)return function(r,s){if(!Nl(s.fu))throw s.Du(`${r._methodName}() can only be used with update() and set()`);if(!s.path)throw s.Du(`${r._methodName}() is not currently supported inside arrays`);const o=r._toFieldTransform(s);o&&s.fieldTransforms.push(o)}(n,t),null;if(n===void 0&&t.ignoreUndefinedProperties)return null;if(t.path&&t.fieldMask.push(t.path),n instanceof Array){if(t.settings.yu&&t.fu!==4)throw t.Du("Nested arrays are not supported");return function(r,s){const o=[];let a=0;for(const u of r){let h=en(u,s.bu(a));h==null&&(h={nullValue:"NULL_VALUE"}),o.push(h),a++}return{arrayValue:{values:o}}}(n,t)}return function(r,s){if((r=dt(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return yg(s.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const o=ot.fromDate(r);return{timestampValue:Nr(s.serializer,o)}}if(r instanceof ot){const o=new ot(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:Nr(s.serializer,o)}}if(r instanceof Ji)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof We)return{bytesValue:Ju(s.serializer,r._byteString)};if(r instanceof Rt){const o=s.databaseId,a=r.firestore._databaseId;if(!a.isEqual(o))throw s.Du(`Document reference is for database ${a.projectId}/${a.database} but should be for database ${o.projectId}/${o.database}`);return{referenceValue:Ui(r.firestore._databaseId||s.databaseId,r._key.path)}}throw s.Du(`Unsupported field value: ${Xr(r)}`)}(n,t)}function xl(n,t){const e={};return bu(n)?t.path&&t.path.length>0&&t.fieldMask.push(t.path):Ce(n,(r,s)=>{const o=en(s,t.pu(r));o!=null&&(e[r]=o)}),{mapValue:{fields:e}}}function Ml(n){return!(typeof n!="object"||n===null||n instanceof Array||n instanceof Date||n instanceof ot||n instanceof Ji||n instanceof We||n instanceof Rt||n instanceof Zr)}function to(n,t,e){if(!Ml(e)||!function(s){return typeof s=="object"&&s!==null&&(Object.getPrototypeOf(s)===Object.prototype||Object.getPrototypeOf(s)===null)}(e)){const r=Xr(e);throw r==="an object"?t.Du(n+" a custom object"):t.Du(n+" "+r)}}function hi(n,t,e){if((t=dt(t))instanceof Jr)return t._internalPath;if(typeof t=="string")return eo(n,t);throw xr("Field path arguments must be of type string or ",n,!1,void 0,e)}const Cy=new RegExp("[~\\*/\\[\\]]");function eo(n,t,e){if(t.search(Cy)>=0)throw xr(`Invalid field path (${t}). Paths must not contain '~', '*', '/', '[', or ']'`,n,!1,void 0,e);try{return new Jr(...t.split("."))._internalPath}catch{throw xr(`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,n,!1,void 0,e)}}function xr(n,t,e,r,s){const o=r&&!r.isEmpty(),a=s!==void 0;let u=`Function ${t}() called with invalid data`;e&&(u+=" (via `toFirestore()`)"),u+=". ";let h="";return(o||a)&&(h+=" (found",o&&(h+=` in field ${r}`),a&&(h+=` in document ${s}`),h+=")"),new k(S.INVALID_ARGUMENT,u+n+h)}function Ll(n,t){return n.some(e=>e.isEqual(t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fl{constructor(t,e,r,s,o){this._firestore=t,this._userDataWriter=e,this._key=r,this._document=s,this._converter=o}get id(){return this._key.path.lastSegment()}get ref(){return new Rt(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const t=new Dy(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(t)}return this._userDataWriter.convertValue(this._document.data.value)}}get(t){if(this._document){const e=this._document.data.field(no("DocumentSnapshot.get",t));if(e!==null)return this._userDataWriter.convertValue(e)}}}class Dy extends Fl{data(){return super.data()}}function no(n,t){return typeof t=="string"?eo(n,t):t instanceof Jr?t._internalPath:t._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vy(n){if(n.limitType==="L"&&n.explicitOrderBy.length===0)throw new k(S.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class ro{}class ky extends ro{}function rE(n,t,...e){let r=[];t instanceof ro&&r.push(t),r=r.concat(e),function(o){const a=o.filter(h=>h instanceof so).length,u=o.filter(h=>h instanceof rs).length;if(a>1||a>0&&u>0)throw new k(S.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(r);for(const s of r)n=s._apply(n);return n}class rs extends ky{constructor(t,e,r){super(),this._field=t,this._op=e,this._value=r,this.type="where"}static _create(t,e,r){return new rs(t,e,r)}_apply(t){const e=this._parse(t);return Ul(t._query,e),new tn(t.firestore,t.converter,ni(t._query,e))}_parse(t){const e=es(t.firestore);return function(o,a,u,h,d,p,v){let I;if(d.isKeyField()){if(p==="array-contains"||p==="array-contains-any")throw new k(S.INVALID_ARGUMENT,`Invalid Query. You can't perform '${p}' queries on documentId().`);if(p==="in"||p==="not-in"){mc(v,p);const b=[];for(const D of v)b.push(pc(h,o,D));I={arrayValue:{values:b}}}else I=pc(h,o,v)}else p!=="in"&&p!=="not-in"&&p!=="array-contains-any"||mc(v,p),I=Py(u,a,v,p==="in"||p==="not-in");return it.create(d,p,I)}(t._query,"where",e,t.firestore._databaseId,this._field,this._op,this._value)}}function sE(n,t,e){const r=t,s=no("where",n);return rs._create(s,r,e)}class so extends ro{constructor(t,e){super(),this.type=t,this._queryConstraints=e}static _create(t,e){return new so(t,e)}_parse(t){const e=this._queryConstraints.map(r=>r._parse(t)).filter(r=>r.getFilters().length>0);return e.length===1?e[0]:Mt.create(e,this._getOperator())}_apply(t){const e=this._parse(t);return e.getFilters().length===0?t:(function(s,o){let a=s;const u=o.getFlattenedFilters();for(const h of u)Ul(a,h),a=ni(a,h)}(t._query,e),new tn(t.firestore,t.converter,ni(t._query,e)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}function pc(n,t,e){if(typeof(e=dt(e))=="string"){if(e==="")throw new k(S.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!xu(t)&&e.indexOf("/")!==-1)throw new k(S.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${e}' contains a '/' character.`);const r=t.path.child(Y.fromString(e));if(!x.isDocumentKey(r))throw new k(S.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return La(n,new x(r))}if(e instanceof Rt)return La(n,e._key);throw new k(S.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${Xr(e)}.`)}function mc(n,t){if(!Array.isArray(n)||n.length===0)throw new k(S.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${t.toString()}' filters.`)}function Ul(n,t){const e=function(s,o){for(const a of s)for(const u of a.getFlattenedFilters())if(o.indexOf(u.op)>=0)return u.op;return null}(n.filters,function(s){switch(s){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(t.op));if(e!==null)throw e===t.op?new k(S.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${t.op.toString()}' filter.`):new k(S.INVALID_ARGUMENT,`Invalid query. You cannot use '${t.op.toString()}' filters with '${e.toString()}' filters.`)}class Ny{convertValue(t,e="none"){switch(Se(t)){case 0:return null;case 1:return t.booleanValue;case 2:return st(t.integerValue||t.doubleValue);case 3:return this.convertTimestamp(t.timestampValue);case 4:return this.convertServerTimestamp(t,e);case 5:return t.stringValue;case 6:return this.convertBytes(be(t.bytesValue));case 7:return this.convertReference(t.referenceValue);case 8:return this.convertGeoPoint(t.geoPointValue);case 9:return this.convertArray(t.arrayValue,e);case 10:return this.convertObject(t.mapValue,e);default:throw M()}}convertObject(t,e){return this.convertObjectMap(t.fields,e)}convertObjectMap(t,e="none"){const r={};return Ce(t,(s,o)=>{r[s]=this.convertValue(o,e)}),r}convertGeoPoint(t){return new Ji(st(t.latitude),st(t.longitude))}convertArray(t,e){return(t.values||[]).map(r=>this.convertValue(r,e))}convertServerTimestamp(t,e){switch(e){case"previous":const r=Vi(t);return r==null?null:this.convertValue(r,e);case"estimate":return this.convertTimestamp(Mn(t));default:return null}}convertTimestamp(t){const e=ue(t);return new ot(e.seconds,e.nanos)}convertDocumentKey(t,e){const r=Y.fromString(t);Q(sl(r));const s=new Ln(r.get(1),r.get(3)),o=new x(r.popFirst(5));return s.isEqual(e)||Xt(`Document ${o} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${e.projectId}/${e.database}) instead.`),o}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Bl(n,t,e){let r;return r=n?e&&(e.merge||e.mergeFields)?n.toFirestore(t,e):n.toFirestore(t):t,r}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bn{constructor(t,e){this.hasPendingWrites=t,this.fromCache=e}isEqual(t){return this.hasPendingWrites===t.hasPendingWrites&&this.fromCache===t.fromCache}}class ql extends Fl{constructor(t,e,r,s,o,a){super(t,e,r,s,a),this._firestore=t,this._firestoreImpl=t,this.metadata=o}exists(){return super.exists()}data(t={}){if(this._document){if(this._converter){const e=new wr(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(e,t)}return this._userDataWriter.convertValue(this._document.data.value,t.serverTimestamps)}}get(t,e={}){if(this._document){const r=this._document.data.field(no("DocumentSnapshot.get",t));if(r!==null)return this._userDataWriter.convertValue(r,e.serverTimestamps)}}}class wr extends ql{data(t={}){return super.data(t)}}class Oy{constructor(t,e,r,s){this._firestore=t,this._userDataWriter=e,this._snapshot=s,this.metadata=new bn(s.hasPendingWrites,s.fromCache),this.query=r}get docs(){const t=[];return this.forEach(e=>t.push(e)),t}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(t,e){this._snapshot.docs.forEach(r=>{t.call(e,new wr(this._firestore,this._userDataWriter,r.key,r,new bn(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(t={}){const e=!!t.includeMetadataChanges;if(e&&this._snapshot.excludesMetadataChanges)throw new k(S.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===e||(this._cachedChanges=function(s,o){if(s._snapshot.oldDocs.isEmpty()){let a=0;return s._snapshot.docChanges.map(u=>{const h=new wr(s._firestore,s._userDataWriter,u.doc.key,u.doc,new bn(s._snapshot.mutatedKeys.has(u.doc.key),s._snapshot.fromCache),s.query.converter);return u.doc,{type:"added",doc:h,oldIndex:-1,newIndex:a++}})}{let a=s._snapshot.oldDocs;return s._snapshot.docChanges.filter(u=>o||u.type!==3).map(u=>{const h=new wr(s._firestore,s._userDataWriter,u.doc.key,u.doc,new bn(s._snapshot.mutatedKeys.has(u.doc.key),s._snapshot.fromCache),s.query.converter);let d=-1,p=-1;return u.type!==0&&(d=a.indexOf(u.doc.key),a=a.delete(u.doc.key)),u.type!==1&&(a=a.add(u.doc),p=a.indexOf(u.doc.key)),{type:xy(u.type),doc:h,oldIndex:d,newIndex:p}})}}(this,e),this._cachedChangesIncludeMetadataChanges=e),this._cachedChanges}}function xy(n){switch(n){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return M()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function iE(n){n=Lt(n,Rt);const t=Lt(n.firestore,Ve);return my(Yi(t),n._key).then(e=>My(t,n,e))}class jl extends Ny{constructor(t){super(),this.firestore=t}convertBytes(t){return new We(t)}convertReference(t){const e=this.convertDocumentKey(t,this.firestore._databaseId);return new Rt(this.firestore,null,e)}}function oE(n){n=Lt(n,tn);const t=Lt(n.firestore,Ve),e=Yi(t),r=new jl(t);return Vy(n._query),gy(e,n._query).then(s=>new Oy(t,r,n,s))}function aE(n,t,e){n=Lt(n,Rt);const r=Lt(n.firestore,Ve),s=Bl(n.converter,t,e);return ss(r,[Ol(es(r),"setDoc",n._key,s,n.converter!==null,e).toMutation(n._key,Ot.none())])}function cE(n,t,e,...r){n=Lt(n,Rt);const s=Lt(n.firestore,Ve),o=es(s);let a;return a=typeof(t=dt(t))=="string"||t instanceof Jr?Sy(o,"updateDoc",n._key,t,e,r):by(o,"updateDoc",n._key,t),ss(s,[a.toMutation(n._key,Ot.exists(!0))])}function uE(n){return ss(Lt(n.firestore,Ve),[new Mi(n._key,Ot.none())])}function lE(n,t){const e=Lt(n.firestore,Ve),r=Ey(n),s=Bl(n.converter,t);return ss(e,[Ol(es(n.firestore),"addDoc",r._key,s,n.converter!==null,{}).toMutation(r._key,Ot.exists(!1))]).then(()=>r)}function ss(n,t){return function(r,s){const o=new Wt;return r.asyncQueue.enqueueAndForget(async()=>ny(await py(r),s,o)),o.promise}(Yi(n),t)}function My(n,t,e){const r=e.docs.get(t._key),s=new jl(n);return new ql(n,s,t._key,r,new bn(e.hasPendingWrites,e.fromCache),t.converter)}function hE(...n){return new Zi("arrayUnion",n)}(function(t,e=!0){(function(s){Ye=s})(bc),Qt(new qt("firestore",(r,{instanceIdentifier:s,options:o})=>{const a=r.getProvider("app").getImmediate(),u=new Ve(new Mm(r.getProvider("auth-internal")),new Bm(r.getProvider("app-check-internal")),function(d,p){if(!Object.prototype.hasOwnProperty.apply(d.options,["projectId"]))throw new k(S.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Ln(d.options.projectId,p)}(a,s),a);return o=Object.assign({useFetchStreams:e},o),u._setSettings(o),u},"PUBLIC").setMultipleInstances(!0)),Nt(Na,"4.6.3",t),Nt(Na,"4.6.3","esm2017")})();const Ly={apiKey:"AIzaSyBIsQrvW4gE2wK4Viliqg5f8BFy83lUPpA",authDomain:"abendet-ba808.firebaseapp.com",projectId:"abendet-ba808",storageBucket:"abendet-ba808.appspot.com",messagingSenderId:"1000401398399",appId:"1:1000401398399:web:baeefacde396287723ed4a",measurementId:"G-BWSK6R1JPE"},io=Sc(Ly);gp(io);const dE=Dm(io),fE=vy(io);export{kh as A,mi as B,qt as C,xh as D,Ky as E,Lr as F,Gy as G,Nn as H,H as I,Jt as J,di as K,fi as L,zy as M,Hy as N,Sh as O,qy as P,$y as Q,jy as R,bc as S,ot as T,Qt as _,io as a,oE as b,nE as c,Ey as d,fE as e,hE as f,iE as g,lE as h,Xy as i,dE as j,Yy as k,Wy as l,uE as m,Qy as n,vy as o,Fy as p,rE as q,Jy as r,aE as s,Uy as t,cE as u,By as v,sE as w,dt as x,Nt as y,Qe as z};
