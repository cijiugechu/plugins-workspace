if("__TAURI__"in window){var __TAURI_PLUGIN_SQL__=function(){"use strict";async function t(t,e={},s){return window.__TAURI_INTERNALS__.invoke(t,e,s)}"function"==typeof SuppressedError&&SuppressedError;const e=new Map;class s{constructor(t){this.path=t,(t=>{e.set(t,(e.get(t)??0)+1)})(t)}static async load(e){const n=await t("plugin:sql|load",{db:e});return new s(n)}static get(t){return new s(t)}async execute(e,s){const[n,r]=await t("plugin:sql|execute",{db:this.path,query:e,values:s??[]});return{lastInsertId:r,rowsAffected:n}}async select(e,s){return await t("plugin:sql|select",{db:this.path,query:e,values:s??[]})}async close(s){if((t=>{const s=e.get(t)??0;s>0&&e.set(t,s-1)})(this.path),n=this.path,0!==e.get(n))return!0;var n;return await t("plugin:sql|close",{db:s})}}return s}();Object.defineProperty(window.__TAURI__,"sql",{value:__TAURI_PLUGIN_SQL__})}
