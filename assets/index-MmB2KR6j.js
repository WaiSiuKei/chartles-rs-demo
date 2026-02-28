(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))n(r);new MutationObserver(r=>{for(const a of r)if(a.type==="childList")for(const i of a.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&n(i)}).observe(document,{childList:!0,subtree:!0});function t(r){const a={};return r.integrity&&(a.integrity=r.integrity),r.referrerPolicy&&(a.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?a.credentials="include":r.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function n(r){if(r.ep)return;r.ep=!0;const a=t(r);fetch(r.href,a)}})();const K="modulepreload",G=function(o,e){return new URL(o,e).href},z={},H=function(e,t,n){let r=Promise.resolve();if(t&&t.length>0){let p=function(u){return Promise.all(u.map(y=>Promise.resolve(y).then(S=>({status:"fulfilled",value:S}),S=>({status:"rejected",reason:S}))))};const i=document.getElementsByTagName("link"),_=document.querySelector("meta[property=csp-nonce]"),l=_?.nonce||_?.getAttribute("nonce");r=p(t.map(u=>{if(u=G(u,n),u in z)return;z[u]=!0;const y=u.endsWith(".css"),S=y?'[rel="stylesheet"]':"";if(n)for(let h=i.length-1;h>=0;h--){const v=i[h];if(v.href===u&&(!y||v.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${u}"]${S}`))return;const d=document.createElement("link");if(d.rel=y?"stylesheet":K,y||(d.as="script"),d.crossOrigin="",d.href=u,l&&d.setAttribute("nonce",l),document.head.appendChild(d),y)return new Promise((h,v)=>{d.addEventListener("load",h),d.addEventListener("error",()=>v(new Error(`Unable to preload CSS for ${u}`)))})}))}function a(i){const _=new Event("vite:preloadError",{cancelable:!0});if(_.payload=i,window.dispatchEvent(_),!_.defaultPrevented)throw i}return r.then(i=>{for(const _ of i||[])_.status==="rejected"&&a(_.reason);return e().catch(a)})};class C{static __wrap(e){e=e>>>0;const t=Object.create(C.prototype);return t.__wbg_ptr=e,q.register(t,t.__wbg_ptr,t),t}__destroy_into_raw(){const e=this.__wbg_ptr;return this.__wbg_ptr=0,q.unregister(this),e}free(){const e=this.__destroy_into_raw();c.__wbg_webhandle_free(e,0)}destroy(){c.webhandle_destroy(this.__wbg_ptr)}has_panicked(){return c.webhandle_has_panicked(this.__wbg_ptr)!==0}panic_callstack(){const e=c.webhandle_panic_callstack(this.__wbg_ptr);let t;return e[0]!==0&&(t=g(e[0],e[1]).slice(),c.__wbindgen_free(e[0],e[1]*1,1)),t}panic_message(){const e=c.webhandle_panic_message(this.__wbg_ptr);let t;return e[0]!==0&&(t=g(e[0],e[1]).slice(),c.__wbindgen_free(e[0],e[1]*1,1)),t}request_animation_frame(){c.webhandle_request_animation_frame(this.__wbg_ptr)}sync_script(e){const t=A(e,c.__wbindgen_malloc,c.__wbindgen_realloc),n=m;c.webhandle_sync_script(this.__wbg_ptr,t,n)}}Symbol.dispose&&(C.prototype[Symbol.dispose]=C.prototype.free);function $(o){return c.create_app(o)}function Y(){return{__proto__:null,"./chartles_web_bg.js":{__proto__:null,__wbg___wbindgen_boolean_get_bbbb1c18aa2f5e25:function(e){const t=e,n=typeof t=="boolean"?t:void 0;return s(n)?16777215:n?1:0},__wbg___wbindgen_debug_string_0bc8482c6e3508ae:function(e,t){const n=W(t),r=A(n,c.__wbindgen_malloc,c.__wbindgen_realloc),a=m;w().setInt32(e+4,a,!0),w().setInt32(e+0,r,!0)},__wbg___wbindgen_in_47fa6863be6f2f25:function(e,t){return e in t},__wbg___wbindgen_is_function_0095a73b8b156f76:function(e){return typeof e=="function"},__wbg___wbindgen_is_undefined_9e4d92534c42d778:function(e){return e===void 0},__wbg___wbindgen_number_get_8ff4255516ccad3e:function(e,t){const n=t,r=typeof n=="number"?n:void 0;w().setFloat64(e+8,s(r)?0:r,!0),w().setInt32(e+0,!s(r),!0)},__wbg___wbindgen_string_get_72fb696202c56729:function(e,t){const n=t,r=typeof n=="string"?n:void 0;var a=s(r)?0:A(r,c.__wbindgen_malloc,c.__wbindgen_realloc),i=m;w().setInt32(e+4,i,!0),w().setInt32(e+0,a,!0)},__wbg___wbindgen_throw_be289d5034ed271b:function(e,t){throw new Error(g(e,t))},__wbg__wbg_cb_unref_d9b87ff7982e3b21:function(e){e._wbg_cb_unref()},__wbg_activeTexture_6f9a710514686c24:function(e,t){e.activeTexture(t>>>0)},__wbg_activeTexture_7e39cb8fdf4b6d5a:function(e,t){e.activeTexture(t>>>0)},__wbg_addEventListener_c917b5aafbcf493f:function(){return b(function(e,t,n,r,a){e.addEventListener(g(t,n),r,a)},arguments)},__wbg_altKey_73c1173ba53073d5:function(e){return e.altKey},__wbg_altKey_8155c319c215e3aa:function(e){return e.altKey},__wbg_at_dfc235641cc0e40c:function(e,t){return e.at(t)},__wbg_attachShader_32114efcf2744eb6:function(e,t,n){e.attachShader(t,n)},__wbg_attachShader_b36058e5c9eeaf54:function(e,t,n){e.attachShader(t,n)},__wbg_bindBuffer_69a7a0b8f3f9b9cf:function(e,t,n){e.bindBuffer(t>>>0,n)},__wbg_bindBuffer_c9068e8712a034f5:function(e,t,n){e.bindBuffer(t>>>0,n)},__wbg_bindTexture_b2b7b1726a83f93e:function(e,t,n){e.bindTexture(t>>>0,n)},__wbg_bindTexture_ec13ddcb9dc8e032:function(e,t,n){e.bindTexture(t>>>0,n)},__wbg_bindVertexArrayOES_c2610602f7485b3f:function(e,t){e.bindVertexArrayOES(t)},__wbg_bindVertexArray_78220d1edb1d2382:function(e,t){e.bindVertexArray(t)},__wbg_blendEquationSeparate_1b12c43928cc7bc1:function(e,t,n){e.blendEquationSeparate(t>>>0,n>>>0)},__wbg_blendEquationSeparate_a8094fbec94cf80e:function(e,t,n){e.blendEquationSeparate(t>>>0,n>>>0)},__wbg_blendFuncSeparate_95465944f788a092:function(e,t,n,r,a){e.blendFuncSeparate(t>>>0,n>>>0,r>>>0,a>>>0)},__wbg_blendFuncSeparate_f366c170c5097fbe:function(e,t,n,r,a){e.blendFuncSeparate(t>>>0,n>>>0,r>>>0,a>>>0)},__wbg_blockSize_ef9a626745d7dfac:function(e){return e.blockSize},__wbg_bufferData_52235e85894af988:function(e,t,n,r){e.bufferData(t>>>0,n,r>>>0)},__wbg_bufferData_98f6c413a8f0f139:function(e,t,n,r){e.bufferData(t>>>0,n,r>>>0)},__wbg_buttons_a158a0cad3175f24:function(e){return e.buttons},__wbg_call_389efe28435a9388:function(){return b(function(e,t){return e.call(t)},arguments)},__wbg_call_4708e0c13bdc8e95:function(){return b(function(e,t,n){return e.call(t,n)},arguments)},__wbg_cancelAnimationFrame_cd35895d78cf4510:function(){return b(function(e,t){e.cancelAnimationFrame(t)},arguments)},__wbg_clearColor_404a3b16d43db93b:function(e,t,n,r,a){e.clearColor(t,n,r,a)},__wbg_clearColor_f16a5dae33fe425d:function(e,t,n,r,a){e.clearColor(t,n,r,a)},__wbg_clearInterval_c75df0651e74fbb8:function(e,t){e.clearInterval(t)},__wbg_clear_4d801d0d054c3579:function(e,t){e.clear(t>>>0)},__wbg_clear_7187030f892c5ca0:function(e,t){e.clear(t>>>0)},__wbg_clientX_a3c5f4ff30e91264:function(e){return e.clientX},__wbg_clientY_e28509acb9b4a42a:function(e){return e.clientY},__wbg_code_dee0dae4730408e1:function(e,t){const n=t.code,r=A(n,c.__wbindgen_malloc,c.__wbindgen_realloc),a=m;w().setInt32(e+4,a,!0),w().setInt32(e+0,r,!0)},__wbg_colorMask_177d9762658e5e28:function(e,t,n,r,a){e.colorMask(t!==0,n!==0,r!==0,a!==0)},__wbg_colorMask_7a8dbc86e7376a9b:function(e,t,n,r,a){e.colorMask(t!==0,n!==0,r!==0,a!==0)},__wbg_compileShader_63b824e86bb00b8f:function(e,t){e.compileShader(t)},__wbg_compileShader_94718a93495d565d:function(e,t){e.compileShader(t)},__wbg_contentBoxSize_328a5cd3e7d063a9:function(e){return e.contentBoxSize},__wbg_contentRect_79b98e4d4f4728a4:function(e){return e.contentRect},__wbg_createBuffer_26534c05e01b8559:function(e){const t=e.createBuffer();return s(t)?0:f(t)},__wbg_createBuffer_c4ec897aacc1b91c:function(e){const t=e.createBuffer();return s(t)?0:f(t)},__wbg_createProgram_98aaa91f7c81c5e2:function(e){const t=e.createProgram();return s(t)?0:f(t)},__wbg_createProgram_9b7710a1f2701c2c:function(e){const t=e.createProgram();return s(t)?0:f(t)},__wbg_createShader_e3ac08ed8c5b14b2:function(e,t){const n=e.createShader(t>>>0);return s(n)?0:f(n)},__wbg_createShader_f2b928ca9a426b14:function(e,t){const n=e.createShader(t>>>0);return s(n)?0:f(n)},__wbg_createTexture_16d2c8a3d7d4a75a:function(e){const t=e.createTexture();return s(t)?0:f(t)},__wbg_createTexture_f9451a82c7527ce2:function(e){const t=e.createTexture();return s(t)?0:f(t)},__wbg_createVertexArrayOES_bd76ceee6ab9b95e:function(e){const t=e.createVertexArrayOES();return s(t)?0:f(t)},__wbg_createVertexArray_ad5294951ae57497:function(e){const t=e.createVertexArray();return s(t)?0:f(t)},__wbg_ctrlKey_09a1b54d77dea92b:function(e){return e.ctrlKey},__wbg_ctrlKey_96ff94f8b18636a3:function(e){return e.ctrlKey},__wbg_debug_3fcb20b1b15cf00b:function(e,t){console.debug(g(e,t))},__wbg_defaultView_979b3a6d37a30a3a:function(e){const t=e.defaultView;return s(t)?0:f(t)},__wbg_deleteBuffer_22fcc93912cbf659:function(e,t){e.deleteBuffer(t)},__wbg_deleteBuffer_ab099883c168644d:function(e,t){e.deleteBuffer(t)},__wbg_deleteProgram_9298fb3e3c1d3a78:function(e,t){e.deleteProgram(t)},__wbg_deleteProgram_f354e79b8cae8076:function(e,t){e.deleteProgram(t)},__wbg_deleteShader_aaf3b520a64d5d9d:function(e,t){e.deleteShader(t)},__wbg_deleteShader_ff70ca962883e241:function(e,t){e.deleteShader(t)},__wbg_deleteTexture_2be78224e5584a8b:function(e,t){e.deleteTexture(t)},__wbg_deleteTexture_9d411c0e60ffa324:function(e,t){e.deleteTexture(t)},__wbg_detachShader_0837532df5c988ca:function(e,t,n){e.detachShader(t,n)},__wbg_detachShader_1ba1e8cb604560a9:function(e,t,n){e.detachShader(t,n)},__wbg_detail_a401af9718d1892c:function(e){return e.detail},__wbg_devicePixelContentBoxSize_8f39437eab7f03ea:function(e){return e.devicePixelContentBoxSize},__wbg_devicePixelRatio_5c458affc89fc209:function(e){return e.devicePixelRatio},__wbg_disableVertexAttribArray_24a020060006b10f:function(e,t){e.disableVertexAttribArray(t>>>0)},__wbg_disableVertexAttribArray_4bac633c27bae599:function(e,t){e.disableVertexAttribArray(t>>>0)},__wbg_disable_7fe6fb3e97717f88:function(e,t){e.disable(t>>>0)},__wbg_disable_bd37bdcca1764aea:function(e,t){e.disable(t>>>0)},__wbg_disconnect_5202f399852258c0:function(e){e.disconnect()},__wbg_document_ee35a3d3ae34ef6c:function(e){const t=e.document;return s(t)?0:f(t)},__wbg_drawElements_94f6577070a45da2:function(e,t,n,r,a){e.drawElements(t>>>0,n,r>>>0,a)},__wbg_drawElements_ea2abffa9d1dc736:function(e,t,n,r,a){e.drawElements(t>>>0,n,r>>>0,a)},__wbg_enableVertexAttribArray_475e06c31777296d:function(e,t){e.enableVertexAttribArray(t>>>0)},__wbg_enableVertexAttribArray_aa6e40408261eeb9:function(e,t){e.enableVertexAttribArray(t>>>0)},__wbg_enable_d1ac04dfdd2fb3ae:function(e,t){e.enable(t>>>0)},__wbg_enable_fee40f19b7053ea3:function(e,t){e.enable(t>>>0)},__wbg_error_dba599464ea2d6dd:function(e,t){let n,r;try{n=e,r=t,console.error(g(e,t))}finally{c.__wbindgen_free(n,r,1)}},__wbg_focus_128ff465f65677cc:function(){return b(function(e){e.focus()},arguments)},__wbg_generateMipmap_5f9058c19cf7c6c1:function(e,t){e.generateMipmap(t>>>0)},__wbg_generateMipmap_c3aad515dd61ffd6:function(e,t){e.generateMipmap(t>>>0)},__wbg_getAttribLocation_16c406a68275ed4b:function(e,t,n,r){return e.getAttribLocation(t,g(n,r))},__wbg_getAttribLocation_7321cf2d67e036f6:function(e,t,n,r){return e.getAttribLocation(t,g(n,r))},__wbg_getBoundingClientRect_b5c8c34d07878818:function(e){return e.getBoundingClientRect()},__wbg_getContext_2a5764d48600bc43:function(){return b(function(e,t,n){const r=e.getContext(g(t,n));return s(r)?0:f(r)},arguments)},__wbg_getError_1182114725905664:function(e){return e.getError()},__wbg_getError_bba8594facbfd5e1:function(e){return e.getError()},__wbg_getExtension_388df13305a298af:function(){return b(function(e,t,n){const r=e.getExtension(g(t,n));return s(r)?0:f(r)},arguments)},__wbg_getExtension_3c0cb5ae01bb4b17:function(){return b(function(e,t,n){const r=e.getExtension(g(t,n));return s(r)?0:f(r)},arguments)},__wbg_getParameter_1ecb910cfdd21f88:function(){return b(function(e,t){return e.getParameter(t>>>0)},arguments)},__wbg_getParameter_2e1f97ecaab76274:function(){return b(function(e,t){return e.getParameter(t>>>0)},arguments)},__wbg_getProgramInfoLog_2ffa30e3abb8b5c2:function(e,t,n){const r=t.getProgramInfoLog(n);var a=s(r)?0:A(r,c.__wbindgen_malloc,c.__wbindgen_realloc),i=m;w().setInt32(e+4,i,!0),w().setInt32(e+0,a,!0)},__wbg_getProgramInfoLog_dbfda4b6e7eb1b37:function(e,t,n){const r=t.getProgramInfoLog(n);var a=s(r)?0:A(r,c.__wbindgen_malloc,c.__wbindgen_realloc),i=m;w().setInt32(e+4,i,!0),w().setInt32(e+0,a,!0)},__wbg_getProgramParameter_43fbc6d2613c08b3:function(e,t,n){return e.getProgramParameter(t,n>>>0)},__wbg_getProgramParameter_92e4540ca9da06b2:function(e,t,n){return e.getProgramParameter(t,n>>>0)},__wbg_getShaderInfoLog_9991e9e77b0c6805:function(e,t,n){const r=t.getShaderInfoLog(n);var a=s(r)?0:A(r,c.__wbindgen_malloc,c.__wbindgen_realloc),i=m;w().setInt32(e+4,i,!0),w().setInt32(e+0,a,!0)},__wbg_getShaderInfoLog_9e0b96da4b13ae49:function(e,t,n){const r=t.getShaderInfoLog(n);var a=s(r)?0:A(r,c.__wbindgen_malloc,c.__wbindgen_realloc),i=m;w().setInt32(e+4,i,!0),w().setInt32(e+0,a,!0)},__wbg_getShaderParameter_786fd84f85720ca8:function(e,t,n){return e.getShaderParameter(t,n>>>0)},__wbg_getShaderParameter_afa4a3dd9dd397c1:function(e,t,n){return e.getShaderParameter(t,n>>>0)},__wbg_getSupportedExtensions_57142a6b598d7787:function(e){const t=e.getSupportedExtensions();return s(t)?0:f(t)},__wbg_getSupportedExtensions_c37f749a951eba04:function(e){const t=e.getSupportedExtensions();return s(t)?0:f(t)},__wbg_getTime_1e3cd1391c5c3995:function(e){return e.getTime()},__wbg_getUniformLocation_71c070e6644669ad:function(e,t,n,r){const a=e.getUniformLocation(t,g(n,r));return s(a)?0:f(a)},__wbg_getUniformLocation_d06b3a5b3c60e95c:function(e,t,n,r){const a=e.getUniformLocation(t,g(n,r));return s(a)?0:f(a)},__wbg_get_9b94d73e6221f75c:function(e,t){return e[t>>>0]},__wbg_height_38750dc6de41ee75:function(e){return e.height},__wbg_height_45209601b4c4ede6:function(e){return e.height},__wbg_height_c2027cf67d1c9b11:function(e){return e.height},__wbg_info_160ed7a2a654b18c:function(e,t){console.info(g(e,t))},__wbg_inlineSize_3e4e7e8c813884fd:function(e){return e.inlineSize},__wbg_instanceof_KeyboardEvent_ac14ca88fa76d153:function(e){let t;try{t=e instanceof KeyboardEvent}catch{t=!1}return t},__wbg_instanceof_ResizeObserverEntry_16bca25646e32231:function(e){let t;try{t=e instanceof ResizeObserverEntry}catch{t=!1}return t},__wbg_instanceof_ResizeObserverSize_cee71be747d9d29e:function(e){let t;try{t=e instanceof ResizeObserverSize}catch{t=!1}return t},__wbg_instanceof_WebGl2RenderingContext_4a08a94517ed5240:function(e){let t;try{t=e instanceof WebGL2RenderingContext}catch{t=!1}return t},__wbg_instanceof_WebGlRenderingContext_53391327f021e3ab:function(e){let t;try{t=e instanceof WebGLRenderingContext}catch{t=!1}return t},__wbg_instanceof_Window_ed49b2db8df90359:function(e){let t;try{t=e instanceof Window}catch{t=!1}return t},__wbg_is_f29129f676e5410c:function(e,t){return Object.is(e,t)},__wbg_keyCode_155291a11654466e:function(e){return e.keyCode},__wbg_key_d41e8e825e6bb0e9:function(e,t){const n=t.key,r=A(n,c.__wbindgen_malloc,c.__wbindgen_realloc),a=m;w().setInt32(e+4,a,!0),w().setInt32(e+0,r,!0)},__wbg_left_3b7c3c1030d5ca7a:function(e){return e.left},__wbg_length_35a7bace40f36eac:function(e){return e.length},__wbg_linkProgram_6600dd2c0863bbfd:function(e,t){e.linkProgram(t)},__wbg_linkProgram_be6b825cf66d177b:function(e,t){e.linkProgram(t)},__wbg_matchMedia_91d4fc9729dc3c84:function(){return b(function(e,t,n){const r=e.matchMedia(g(t,n));return s(r)?0:f(r)},arguments)},__wbg_matches_4b5c22bd830f7bb3:function(e){return e.matches},__wbg_maxTouchPoints_b2fe253f521aeb99:function(e){return e.maxTouchPoints},__wbg_metaKey_374999c340f70626:function(e){return e.metaKey},__wbg_metaKey_67113fb40365d736:function(e){return e.metaKey},__wbg_navigator_43be698ba96fc088:function(e){return e.navigator},__wbg_new_0_73afc35eb544e539:function(){return new Date},__wbg_new_2e2be9617c4407d5:function(){return b(function(e){return new ResizeObserver(e)},arguments)},__wbg_new_361308b2356cecd0:function(){return new Object},__wbg_new_387e806cfef8bc75:function(){return new Error},__wbg_new_b5d9e2fb389fef91:function(e,t){try{var n={a:e,b:t},r=(i,_)=>{const l=n.a;n.a=0;try{return J(l,n.b,i,_)}finally{n.a=l}};return new Promise(r)}finally{n.a=n.b=0}},__wbg_new_no_args_1c7c842f08d00ebb:function(e,t){return new Function(g(e,t))},__wbg_now_2c95c9de01293173:function(e){return e.now()},__wbg_now_a3af9a2f4bbaa4d1:function(){return Date.now()},__wbg_observe_1ae37077cf10b11b:function(e,t,n){e.observe(t,n)},__wbg_ownerDocument_9347874c5cad87d7:function(e){const t=e.ownerDocument;return s(t)?0:f(t)},__wbg_performance_7a3ffd0b17f663ad:function(e){return e.performance},__wbg_pixelStorei_2a65936c11b710fe:function(e,t,n){e.pixelStorei(t>>>0,n)},__wbg_pixelStorei_f7cc498f52d523f1:function(e,t,n){e.pixelStorei(t>>>0,n)},__wbg_pointerId_466b1bdcaf2fe835:function(e){return e.pointerId},__wbg_preventDefault_cdcfcd7e301b9702:function(e){e.preventDefault()},__wbg_queueMicrotask_0aa0a927f78f5d98:function(e){return e.queueMicrotask},__wbg_queueMicrotask_5bb536982f78a56f:function(e){queueMicrotask(e)},__wbg_releasePointerCapture_420ef33c7c5fb6f4:function(){return b(function(e,t){e.releasePointerCapture(t)},arguments)},__wbg_removeEventListener_e63328781a5b9af9:function(){return b(function(e,t,n,r){e.removeEventListener(g(t,n),r)},arguments)},__wbg_requestAnimationFrame_43682f8e1c5e5348:function(){return b(function(e,t){return e.requestAnimationFrame(t)},arguments)},__wbg_resolve_002c4b7d9d8f6b64:function(e){return Promise.resolve(e)},__wbg_scissor_2ff8f18f05a6d408:function(e,t,n,r,a){e.scissor(t,n,r,a)},__wbg_scissor_b870b1434a9c25b4:function(e,t,n,r,a){e.scissor(t,n,r,a)},__wbg_scrollX_b3151cb810a681ae:function(){return b(function(e){return e.scrollX},arguments)},__wbg_scrollY_8087997adf618f94:function(){return b(function(e){return e.scrollY},arguments)},__wbg_setProperty_cbb25c4e74285b39:function(){return b(function(e,t,n,r,a){e.setProperty(g(t,n),g(r,a))},arguments)},__wbg_set_box_73d3355c6f95f24d:function(e,t){e.box=Q[t]},__wbg_set_capture_d52e7a585f2933c8:function(e,t){e.capture=t!==0},__wbg_set_height_f21f985387070100:function(e,t){e.height=t>>>0},__wbg_set_tabIndex_eb89b6ffe111cd2c:function(e,t){e.tabIndex=t},__wbg_set_width_d60bc4f2f20c56a4:function(e,t){e.width=t>>>0},__wbg_shaderSource_32425cfe6e5a1e52:function(e,t,n,r){e.shaderSource(t,g(n,r))},__wbg_shaderSource_8f4bda03f70359df:function(e,t,n,r){e.shaderSource(t,g(n,r))},__wbg_shiftKey_5558a3288542c985:function(e){return e.shiftKey},__wbg_shiftKey_564be91ec842bcc4:function(e){return e.shiftKey},__wbg_stack_8c994f3af366f8d7:function(e,t){const n=t.stack,r=A(n,c.__wbindgen_malloc,c.__wbindgen_realloc),a=m;w().setInt32(e+4,a,!0),w().setInt32(e+0,r,!0)},__wbg_static_accessor_GLOBAL_12837167ad935116:function(){const e=typeof global>"u"?null:global;return s(e)?0:f(e)},__wbg_static_accessor_GLOBAL_THIS_e628e89ab3b1c95f:function(){const e=typeof globalThis>"u"?null:globalThis;return s(e)?0:f(e)},__wbg_static_accessor_SELF_a621d3dfbb60d0ce:function(){const e=typeof self>"u"?null:self;return s(e)?0:f(e)},__wbg_static_accessor_WINDOW_f8727f0cf888e0bd:function(){const e=typeof window>"u"?null:window;return s(e)?0:f(e)},__wbg_style_0b7c9bd318f8b807:function(e){return e.style},__wbg_target_521be630ab05b11e:function(e){const t=e.target;return s(t)?0:f(t)},__wbg_texImage2D_087ef94df78081f0:function(){return b(function(e,t,n,r,a,i,_,l,p,u){e.texImage2D(t>>>0,n,r,a,i,_,l>>>0,p>>>0,u)},arguments)},__wbg_texImage2D_13414a4692836804:function(){return b(function(e,t,n,r,a,i,_,l,p,u){e.texImage2D(t>>>0,n,r,a,i,_,l>>>0,p>>>0,u)},arguments)},__wbg_texImage2D_e71049312f3172d9:function(){return b(function(e,t,n,r,a,i,_,l,p,u){e.texImage2D(t>>>0,n,r,a,i,_,l>>>0,p>>>0,u)},arguments)},__wbg_texParameteri_0d45be2c88d6bad8:function(e,t,n,r){e.texParameteri(t>>>0,n>>>0,r)},__wbg_texParameteri_ec937d2161018946:function(e,t,n,r){e.texParameteri(t>>>0,n>>>0,r)},__wbg_texSubImage2D_19ae4cadb809f264:function(){return b(function(e,t,n,r,a,i,_,l,p,u){e.texSubImage2D(t>>>0,n,r,a,i,_,l>>>0,p>>>0,u)},arguments)},__wbg_texSubImage2D_d17a39cdec4a3495:function(){return b(function(e,t,n,r,a,i,_,l,p,u){e.texSubImage2D(t>>>0,n,r,a,i,_,l>>>0,p>>>0,u)},arguments)},__wbg_texSubImage2D_edf5bd70fda3feaf:function(){return b(function(e,t,n,r,a,i,_,l,p,u){e.texSubImage2D(t>>>0,n,r,a,i,_,l>>>0,p>>>0,u)},arguments)},__wbg_then_b9e7b3b5f1a9e1b5:function(e,t){return e.then(t)},__wbg_timeStamp_ddfe1bf5c2346d68:function(e){return e.timeStamp},__wbg_top_3d27ff6f468cf3fc:function(e){return e.top},__wbg_uniform1i_9f3f72dbcb98ada9:function(e,t,n){e.uniform1i(t,n)},__wbg_uniform1i_e9aee4b9e7fe8c4b:function(e,t,n){e.uniform1i(t,n)},__wbg_uniform2f_1887b1268f65bfee:function(e,t,n,r){e.uniform2f(t,n,r)},__wbg_uniform2f_2aa77a6395d47f1d:function(e,t,n,r){e.uniform2f(t,n,r)},__wbg_useProgram_e82c1a5f87d81579:function(e,t){e.useProgram(t)},__wbg_useProgram_fe720ade4d3b6edb:function(e,t){e.useProgram(t)},__wbg_userAgent_34463fd660ba4a2a:function(){return b(function(e,t){const n=t.userAgent,r=A(n,c.__wbindgen_malloc,c.__wbindgen_realloc),a=m;w().setInt32(e+4,a,!0),w().setInt32(e+0,r,!0)},arguments)},__wbg_vertexAttribPointer_75f6ff47f6c9f8cb:function(e,t,n,r,a,i,_){e.vertexAttribPointer(t>>>0,n,r>>>0,a!==0,i,_)},__wbg_vertexAttribPointer_adbd1853cce679ad:function(e,t,n,r,a,i,_){e.vertexAttribPointer(t>>>0,n,r>>>0,a!==0,i,_)},__wbg_viewport_174ae1c2209344ae:function(e,t,n,r,a){e.viewport(t,n,r,a)},__wbg_viewport_df236eac68bc7467:function(e,t,n,r,a){e.viewport(t,n,r,a)},__wbg_visibilityState_43b7b74940e07d22:function(e){const t=e.visibilityState;return(ee.indexOf(t)+1||3)-1},__wbg_warn_3a7e8ead1514524d:function(e,t){console.warn(g(e,t))},__wbg_webhandle_new:function(e){return C.__wrap(e)},__wbg_width_5f66bde2e810fbde:function(e){return e.width},__wbg_width_7444cca5dfea0645:function(e){return e.width},__wbg_width_ae46cb8e98ee102f:function(e){return e.width},__wbindgen_cast_0000000000000001:function(e,t){return F(e,t,c.wasm_bindgen__closure__destroy__h1f3f4732f9edd493,X)},__wbindgen_cast_0000000000000002:function(e,t){return F(e,t,c.wasm_bindgen__closure__destroy__h40d223bbbaa14cfc,Z)},__wbindgen_cast_0000000000000003:function(e,t){return F(e,t,c.wasm_bindgen__closure__destroy__h40d223bbbaa14cfc,N)},__wbindgen_cast_0000000000000004:function(e,t){return F(e,t,c.wasm_bindgen__closure__destroy__h40d223bbbaa14cfc,N)},__wbindgen_cast_0000000000000005:function(e,t){return te(e,t)},__wbindgen_cast_0000000000000006:function(e,t){return ne(e,t)},__wbindgen_cast_0000000000000007:function(e,t){return re(e,t)},__wbindgen_cast_0000000000000008:function(e,t){return oe(e,t)},__wbindgen_cast_0000000000000009:function(e,t){return ae(e,t)},__wbindgen_cast_000000000000000a:function(e,t){return ie(e,t)},__wbindgen_cast_000000000000000b:function(e,t){return ce(e,t)},__wbindgen_cast_000000000000000c:function(e,t){return g(e,t)},__wbindgen_init_externref_table:function(){const e=c.__wbindgen_externrefs,t=e.grow(4);e.set(0,void 0),e.set(t+0,void 0),e.set(t+1,null),e.set(t+2,!0),e.set(t+3,!1)}}}}function X(o,e,t){c.wasm_bindgen__convert__closures_____invoke__ha624b472ecc71fd2(o,e,t)}function N(o,e,t){c.wasm_bindgen__convert__closures_____invoke__h005bdcdbba86a989(o,e,t)}function J(o,e,t,n){c.wasm_bindgen__convert__closures_____invoke__h7f1611af06081c56(o,e,t,n)}function Z(o,e,t){const n=c.wasm_bindgen__convert__closures_____invoke__h5917d6002a364a6d(o,e,t);if(n[1])throw de(n[0])}const Q=["border-box","content-box","device-pixel-content-box"],ee=["hidden","visible"],q=typeof FinalizationRegistry>"u"?{register:()=>{},unregister:()=>{}}:new FinalizationRegistry(o=>c.__wbg_webhandle_free(o>>>0,1));function f(o){const e=c.__externref_table_alloc();return c.__wbindgen_externrefs.set(e,o),e}const j=typeof FinalizationRegistry>"u"?{register:()=>{},unregister:()=>{}}:new FinalizationRegistry(o=>o.dtor(o.a,o.b));function W(o){const e=typeof o;if(e=="number"||e=="boolean"||o==null)return`${o}`;if(e=="string")return`"${o}"`;if(e=="symbol"){const r=o.description;return r==null?"Symbol":`Symbol(${r})`}if(e=="function"){const r=o.name;return typeof r=="string"&&r.length>0?`Function(${r})`:"Function"}if(Array.isArray(o)){const r=o.length;let a="[";r>0&&(a+=W(o[0]));for(let i=1;i<r;i++)a+=", "+W(o[i]);return a+="]",a}const t=/\[object ([^\]]+)\]/.exec(toString.call(o));let n;if(t&&t.length>1)n=t[1];else return toString.call(o);if(n=="Object")try{return"Object("+JSON.stringify(o)+")"}catch{return"Object"}return o instanceof Error?`${o.name}: ${o.message}
${o.stack}`:n}function te(o,e){return o=o>>>0,_e().subarray(o/4,o/4+e)}function ne(o,e){return o=o>>>0,se().subarray(o/2,o/2+e)}function re(o,e){return o=o>>>0,le().subarray(o/4,o/4+e)}function oe(o,e){return o=o>>>0,ue().subarray(o/1,o/1+e)}function ae(o,e){return o=o>>>0,fe().subarray(o/2,o/2+e)}function ie(o,e){return o=o>>>0,be().subarray(o/4,o/4+e)}function ce(o,e){return o=o>>>0,E().subarray(o/1,o/1+e)}let B=null;function w(){return(B===null||B.buffer.detached===!0||B.buffer.detached===void 0&&B.buffer!==c.memory.buffer)&&(B=new DataView(c.memory.buffer)),B}let M=null;function _e(){return(M===null||M.byteLength===0)&&(M=new Float32Array(c.memory.buffer)),M}let x=null;function se(){return(x===null||x.byteLength===0)&&(x=new Int16Array(c.memory.buffer)),x}let L=null;function le(){return(L===null||L.byteLength===0)&&(L=new Int32Array(c.memory.buffer)),L}let I=null;function ue(){return(I===null||I.byteLength===0)&&(I=new Int8Array(c.memory.buffer)),I}function g(o,e){return o=o>>>0,we(o,e)}let R=null;function fe(){return(R===null||R.byteLength===0)&&(R=new Uint16Array(c.memory.buffer)),R}let T=null;function be(){return(T===null||T.byteLength===0)&&(T=new Uint32Array(c.memory.buffer)),T}let P=null;function E(){return(P===null||P.byteLength===0)&&(P=new Uint8Array(c.memory.buffer)),P}function b(o,e){try{return o.apply(this,e)}catch(t){const n=f(t);c.__wbindgen_exn_store(n)}}function s(o){return o==null}function F(o,e,t,n){const r={a:o,b:e,cnt:1,dtor:t},a=(...i)=>{r.cnt++;const _=r.a;r.a=0;try{return n(_,r.b,...i)}finally{r.a=_,a._wbg_cb_unref()}};return a._wbg_cb_unref=()=>{--r.cnt===0&&(r.dtor(r.a,r.b),r.a=0,j.unregister(r))},j.register(a,r,r),a}function A(o,e,t){if(t===void 0){const _=k.encode(o),l=e(_.length,1)>>>0;return E().subarray(l,l+_.length).set(_),m=_.length,l}let n=o.length,r=e(n,1)>>>0;const a=E();let i=0;for(;i<n;i++){const _=o.charCodeAt(i);if(_>127)break;a[r+i]=_}if(i!==n){i!==0&&(o=o.slice(i)),r=t(r,n,n=i+o.length*3,1)>>>0;const _=E().subarray(r+i,r+n),l=k.encodeInto(o,_);i+=l.written,r=t(r,n,i,1)>>>0}return m=i,r}function de(o){const e=c.__wbindgen_externrefs.get(o);return c.__externref_table_dealloc(o),e}let D=new TextDecoder("utf-8",{ignoreBOM:!0,fatal:!0});D.decode();const ge=2146435072;let O=0;function we(o,e){return O+=e,O>=ge&&(D=new TextDecoder("utf-8",{ignoreBOM:!0,fatal:!0}),D.decode(),O=e),D.decode(E().subarray(o,o+e))}const k=new TextEncoder;"encodeInto"in k||(k.encodeInto=function(o,e){const t=k.encode(o);return e.set(t),{read:o.length,written:t.length}});let m=0,c;function pe(o,e){return c=o.exports,B=null,M=null,x=null,L=null,I=null,R=null,T=null,P=null,c.__wbindgen_start(),c}async function me(o,e){if(typeof Response=="function"&&o instanceof Response){if(typeof WebAssembly.instantiateStreaming=="function")try{return await WebAssembly.instantiateStreaming(o,e)}catch(r){if(o.ok&&t(o.type)&&o.headers.get("Content-Type")!=="application/wasm")console.warn("`WebAssembly.instantiateStreaming` failed because your server does not serve Wasm with `application/wasm` MIME type. Falling back to `WebAssembly.instantiate` which is slower. Original error:\n",r);else throw r}const n=await o.arrayBuffer();return await WebAssembly.instantiate(n,e)}else{const n=await WebAssembly.instantiate(o,e);return n instanceof WebAssembly.Instance?{instance:n,module:o}:n}function t(n){switch(n){case"basic":case"cors":case"default":return!0}return!1}}async function he(o){if(c!==void 0)return c;o!==void 0&&(Object.getPrototypeOf(o)===Object.prototype?{module_or_path:o}=o:console.warn("using deprecated parameters for the initialization function; pass a single object instead")),o===void 0&&(o=new URL(""+new URL("chartles_web_bg-BAUASN__.wasm",import.meta.url).href,import.meta.url));const e=Y();(typeof o=="string"||typeof Request=="function"&&o instanceof Request||typeof URL=="function"&&o instanceof URL)&&(o=fetch(o));const{instance:t,module:n}=await me(await o,e);return pe(t)}const U={"Bollinger Bands":`//@version=6
indicator(shorttitle="BB", title="Bollinger Bands", overlay=true, timeframe="", timeframe_gaps=true)

TT_LENGTH  = "The time period to be used in calculating the MA which creates the base for the Upper and Lower Bands."
TT_MA_TYPE = "Determines the type of Moving Average that is applied to the basis plot line."
TT_SOURCE  = "Determines what data from each bar will be used in calculations."
TT_MULT    = "The number of Standard Deviations away from the MA that the Upper and Lower Bands should be."
TT_OFFSET  = "Changing this number will move the Bollinger Bands either Forwards or Backwards relative to the current market."

length = input.int(20,       "Length", minval = 1, tooltip =  TT_LENGTH)
maType = input.string("SMA", "Basis MA Type",      options = ["SMA", "EMA", "SMMA (RMA)", "WMA", "VWMA"], tooltip = TT_MA_TYPE)
src =    input(close,        "Source", tooltip = TT_SOURCE)
mult =   input.float(2.0,    "StdDev", minval = 0.001, maxval = 50,  tooltip = TT_MULT)
offset = input.int(0,        "Offset", minval = -500,  maxval = 500, tooltip =  TT_OFFSET, display = display.none)

ma(source, length, _type) =>
    switch _type
        "SMA" => ta.sma(source, length)
        "EMA" => ta.ema(source, length)
        "SMMA (RMA)" => ta.rma(source, length)
        "WMA" => ta.wma(source, length)
        "VWMA" => ta.vwma(source, length)

basis = ma(src, length, maType)
dev = mult * ta.stdev(src, length)
upper = basis + dev
lower = basis - dev

plot(basis, "Basis", color=#2962FF, offset = offset)
p1 = plot(upper, "Upper", color=#F23645, offset = offset)
p2 = plot(lower, "Lower", color=#089981, offset = offset)
fill(p1, p2, title = "Background", color=color.rgb(33, 150, 243, 95))
`,"Moving Average Convergence Divergence":`//@version=6
indicator("Moving Average Convergence Divergence", "MACD", timeframe = "", timeframe_gaps = true)

// Inputs
float  sourceInput  = input.source(close, "Source")
int    fastLenInput = input.int(12, "Fast length",   1)
int    slowLenInput = input.int(26, "Slow length",   1)
int    sigLenInput  = input.int(9,  "Signal length", 1)
string oscTypeInput = input.string("EMA", "Oscillator MA type", ["EMA", "SMA"], display = display.none)
string sigTypeInput = input.string("EMA", "Signal MA type",     ["EMA", "SMA"], display = display.none)

// @function    Calculates an EMA or SMA of a \`source\` series.
ma(float source, int length, simple string maType) =>
    switch maType
        "EMA" => ta.ema(source, length)
        "SMA" => ta.sma(source, length)

// Calculate and plot the MACD, signal, and histogram values.
float maFast = ma(sourceInput, fastLenInput, oscTypeInput)
float maSlow = ma(sourceInput, slowLenInput, oscTypeInput)
float macd   = maFast - maSlow
float signal = ma(macd, sigLenInput, sigTypeInput)
float hist   = macd - signal
color hColor = hist >= 0 ? hist > hist[1] ? #26a69a : #b2dfdb : hist > hist[1] ? #ffcdd2 : #ff5252

hline(0, "Zero", #787b8680)
plot(hist, "Histogram", hColor, style = plot.style_columns)
plot(macd, "MACD")
plot(signal, "Signal line", #ff6d00)`,"Moving Average Exponential":`//@version=6
indicator(title="Moving Average Exponential", shorttitle="EMA", overlay=true, timeframe="", timeframe_gaps=true)
len = input.int(9, minval=1, title="Length")
src = input(close, title="Source")
offset = input.int(title="Offset", defval=0, minval=-500, maxval=500, display = display.none)
out = ta.ema(src, len)
plot(out, title="EMA", color=color.blue, offset=offset)

// Smoothing MA inputs
GRP = "Smoothing"
TT_BB = "Only applies when 'SMA + Bollinger Bands' is selected. Determines the distance between the SMA and the bands."
maTypeInput = input.string("None", "Type", options = ["None", "SMA", "SMA + Bollinger Bands", "EMA", "SMMA (RMA)", "WMA", "VWMA"], group = GRP, display = display.none)
var isBB = maTypeInput == "SMA + Bollinger Bands"
maLengthInput = input.int(14, "Length", group = GRP, display = display.none, active = maTypeInput != "None")
bbMultInput = input.float(2.0, "BB StdDev", minval = 0.001, maxval = 50, step = 0.5, tooltip = TT_BB, group = GRP, display = display.none, active = isBB)
var enableMA = maTypeInput != "None"

// Smoothing MA Calculation
ma(source, length, MAtype) =>
	switch MAtype
		"SMA"                   => ta.sma(source, length)
		"SMA + Bollinger Bands" => ta.sma(source, length)
		"EMA"                   => ta.ema(source, length)
		"SMMA (RMA)"            => ta.rma(source, length)
		"WMA"                   => ta.wma(source, length)
		"VWMA"                  => ta.vwma(source, length)

// Smoothing MA plots
smoothingMA = enableMA ? ma(out, maLengthInput, maTypeInput) : na
smoothingStDev = isBB ? ta.stdev(out, maLengthInput) * bbMultInput : na
plot(smoothingMA, "EMA-based MA", color=color.yellow, display = enableMA ? display.all : display.none, editable = enableMA)
bbUpperBand = plot(smoothingMA + smoothingStDev, title = "Upper Bollinger Band", color=color.green, display = isBB ? display.all : display.none, editable = isBB)
bbLowerBand = plot(smoothingMA - smoothingStDev, title = "Lower Bollinger Band", color=color.green, display = isBB ? display.all : display.none, editable = isBB)
fill(bbUpperBand, bbLowerBand, color= isBB ? color.new(color.green, 90) : na, title="Bollinger Bands Background Fill", display = isBB ? display.all : display.none, editable = isBB)
`,"Relative Strength Index":`//@version=6
indicator(title="Relative Strength Index", shorttitle="RSI", format=format.price, precision=2, timeframe="", timeframe_gaps=true)

rsiLengthInput = input.int(14, minval=1, title="RSI Length", group="RSI Settings")
rsiSourceInput = input.source(close, "Source", group="RSI Settings")
calculateDivergence = input.bool(false, title="Calculate Divergence", group="RSI Settings", display = display.none, tooltip = "Calculating divergences is needed in order for divergence alerts to fire.")

change = ta.change(rsiSourceInput)
up = ta.rma(math.max(change, 0), rsiLengthInput)
down = ta.rma(-math.min(change, 0), rsiLengthInput)
rsi = down == 0 ? 100 : up == 0 ? 0 : 100 - (100 / (1 + up / down))

rsiPlot = plot(rsi, "RSI", color=#7E57C2)
rsiUpperBand = hline(70, "RSI Upper Band", color=#787B86)
midline = hline(50, "RSI Middle Band", color=color.new(#787B86, 50))
rsiLowerBand = hline(30, "RSI Lower Band", color=#787B86)
fill(rsiUpperBand, rsiLowerBand, color=color.rgb(126, 87, 194, 90), title="RSI Background Fill")
midLinePlot = plot(50, color = na, editable = false, display = display.none)
fill(rsiPlot, midLinePlot, 100, 70, top_color = color.new(color.green, 0), bottom_color = color.new(color.green, 100),  title = "Overbought Gradient Fill")
fill(rsiPlot, midLinePlot, 30,  0,  top_color = color.new(color.red, 100), bottom_color = color.new(color.red, 0),      title = "Oversold Gradient Fill")

// Smoothing MA inputs
GRP = "Smoothing"
TT_BB = "Only applies when 'SMA + Bollinger Bands' is selected. Determines the distance between the SMA and the bands."
maTypeInput = input.string("SMA", "Type", options = ["None", "SMA", "SMA + Bollinger Bands", "EMA", "SMMA (RMA)", "WMA", "VWMA"], group = GRP, display = display.none)
var isBB = maTypeInput == "SMA + Bollinger Bands"
maLengthInput = input.int(14, "Length", group = GRP, display = display.none, active = maTypeInput != "None")
bbMultInput = input.float(2.0, "BB StdDev", minval = 0.001, maxval = 50, step = 0.5, tooltip = TT_BB, group = GRP, display = display.none, active = isBB)
var enableMA = maTypeInput != "None"

// Smoothing MA Calculation
ma(source, length, MAtype) =>
	switch MAtype
		"SMA"                   => ta.sma(source, length)
		"SMA + Bollinger Bands" => ta.sma(source, length)
		"EMA"                   => ta.ema(source, length)
		"SMMA (RMA)"            => ta.rma(source, length)
		"WMA"                   => ta.wma(source, length)
		"VWMA"                  => ta.vwma(source, length)

// Smoothing MA plots
smoothingMA = enableMA ? ma(rsi, maLengthInput, maTypeInput) : na
smoothingStDev = isBB ? ta.stdev(rsi, maLengthInput) * bbMultInput : na
plot(smoothingMA, "RSI-based MA", color=color.yellow, display = enableMA ? display.all : display.none, editable = enableMA)
bbUpperBand = plot(smoothingMA + smoothingStDev, title = "Upper Bollinger Band", color=color.green, display = isBB ? display.all : display.none, editable = isBB)
bbLowerBand = plot(smoothingMA - smoothingStDev, title = "Lower Bollinger Band", color=color.green, display = isBB ? display.all : display.none, editable = isBB)
fill(bbUpperBand, bbLowerBand, color= isBB ? color.new(color.green, 90) : na, title="Bollinger Bands Background Fill", display = isBB ? display.all : display.none, editable = isBB)

// Divergence
lookbackRight = 5
lookbackLeft = 5
rangeUpper = 60
rangeLower = 5
bearColor = color.red
bullColor = color.green
textColor = color.white
noneColor = color.new(color.white, 100)

_inRange(bool cond) =>
    bars = ta.barssince(cond)
    rangeLower <= bars and bars <= rangeUpper

plFound = false
phFound = false

bullCond = false
bearCond = false

rsiLBR = rsi[lookbackRight]

if calculateDivergence
    //------------------------------------------------------------------------------
    // Regular Bullish
    // rsi: Higher Low
    plFound := not na(ta.pivotlow(rsi, lookbackLeft, lookbackRight))    
    rsiHL = rsiLBR > ta.valuewhen(plFound, rsiLBR, 1) and _inRange(plFound[1])
    // Price: Lower Low
    lowLBR = low[lookbackRight]
    priceLL = lowLBR < ta.valuewhen(plFound, lowLBR, 1)
    bullCond := priceLL and rsiHL and plFound

    //------------------------------------------------------------------------------
    // Regular Bearish
    // rsi: Lower High
    phFound := not na(ta.pivothigh(rsi, lookbackLeft, lookbackRight))
    rsiLH = rsiLBR < ta.valuewhen(phFound, rsiLBR, 1) and _inRange(phFound[1])
    // Price: Higher High
    highLBR = high[lookbackRight]
    priceHH = highLBR > ta.valuewhen(phFound, highLBR, 1)
    bearCond := priceHH and rsiLH and phFound


plot(
     plFound   ? rsiLBR : na,
     offset    = -lookbackRight,
     title     = "Regular Bullish",
     linewidth = 2,
     color     = (bullCond ? bullColor : noneColor),
     display   = display.pane,
     editable  = calculateDivergence)

plotshape(
     bullCond  ? rsiLBR : na,
     offset    = -lookbackRight,
     title     = "Regular Bullish Label",
     text      = " Bull ",
     style     = shape.labelup,
     location  = location.absolute,
     color     = bullColor,
     textcolor = textColor,
     display   = display.pane,
     editable  = calculateDivergence)

plot(
     phFound   ? rsiLBR : na,
     offset    = -lookbackRight,
     title     = "Regular Bearish",
     linewidth = 2,
     color     = (bearCond ? bearColor : noneColor),
     display   = display.pane,
     editable  = calculateDivergence)

plotshape(
     bearCond  ? rsiLBR : na,
     offset    = -lookbackRight,
     title     = "Regular Bearish Label",
     text      = " Bear ",
     style     = shape.labeldown,
     location  = location.absolute,
     color     = bearColor,
     textcolor = textColor,
     display   = display.pane,
     editable  = calculateDivergence)

alertcondition(bullCond, title='Regular Bullish Divergence', message="Found a new Regular Bullish Divergence, \`Pivot Lookback Right\` number of bars to the left of the current bar.")
alertcondition(bearCond, title='Regular Bearish Divergence', message='Found a new Regular Bearish Divergence, \`Pivot Lookback Right\` number of bars to the left of the current bar.')
`};async function ye(){ve();const o=await Ae();await he();const e=document.querySelector("#canvas"),t=document.querySelector(".chart-pane"),n=document.querySelector("#run-script-btn"),r=document.querySelector("#script-preset-select");Object.keys(U).forEach(d=>{let h=document.createElement("option");h.innerText=d,h.value=d,r.appendChild(h)});const a="Moving Average Convergence Divergence";r.value=a;const i=U[a],_=Se(o,i),l=d=>{n.hidden=!d};(()=>{const d=t.getBoundingClientRect(),h=Math.max(1,Math.floor(d.width)),v=Math.max(1,Math.floor(d.height)),V=window.devicePixelRatio||1;e.width=Math.floor(h*V),e.height=Math.floor(v*V),e.style.width=`${h}px`,e.style.height=`${v}px`})();let u=await $(e);u.sync_script(i);let y=!1;l(!1),_.onDidChangeModelContent(()=>{y||l(!0)}),n.onclick=d=>{d.preventDefault(),u.sync_script(_.getValue()),l(!1)},r.onchange=()=>{let d=Reflect.get(U,r.value);d&&(y=!0,_.setValue(d),y=!1,u.sync_script(d),l(!1))};function S(){u.has_panicked()?console.error("The app has crashed"):setTimeout(S,1e3)}S()}async function Ae(){return await H(()=>import("https://cdn.jsdelivr.net/npm/monaco-editor@0.52.2/+esm"),[],import.meta.url)}function Se(o,e){const t=document.querySelector("#editor");return o.editor.create(t,{value:e,language:"javascript",theme:"vs",automaticLayout:!0,minimap:{enabled:!1},fontSize:13,lineNumbersMinChars:3,scrollBeyondLastLine:!1})}function ve(){const o=document.querySelector("#log-output"),e=(n,r="log")=>{const a=document.createElement("div");a.className=`log-line${r==="log"?"":` ${r}`}`,a.textContent=n,o.appendChild(a),o.scrollTop=o.scrollHeight},t=n=>{const r=console[n].bind(console);console[n]=(...a)=>{const i=a.map(_=>{if(typeof _=="string")return _;try{return JSON.stringify(_)}catch{return String(_)}}).join(" ");e(i,n),r(...a)}};return t("log"),t("warn"),t("error"),e}ye().catch(console.error);
