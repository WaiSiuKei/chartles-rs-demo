(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))o(a);new MutationObserver(a=>{for(const i of a)if(i.type==="childList")for(const r of i.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&o(r)}).observe(document,{childList:!0,subtree:!0});function t(a){const i={};return a.integrity&&(i.integrity=a.integrity),a.referrerPolicy&&(i.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?i.credentials="include":a.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function o(a){if(a.ep)return;a.ep=!0;const i=t(a);fetch(a.href,i)}})();class F{static __wrap(e){e=e>>>0;const t=Object.create(F.prototype);return t.__wbg_ptr=e,K.register(t,t.__wbg_ptr,t),t}__destroy_into_raw(){const e=this.__wbg_ptr;return this.__wbg_ptr=0,K.unregister(this),e}free(){const e=this.__destroy_into_raw();l.__wbg_widgethandle_free(e,0)}destroy(){l.widgethandle_destroy(this.__wbg_ptr)}has_panicked(){return l.widgethandle_has_panicked(this.__wbg_ptr)!==0}off_tool_changed(e){l.widgethandle_off_tool_changed(this.__wbg_ptr,e)}on_tool_changed(e){return l.widgethandle_on_tool_changed(this.__wbg_ptr,e)>>>0}panic_callstack(){const e=l.widgethandle_panic_callstack(this.__wbg_ptr);let t;return e[0]!==0&&(t=v(e[0],e[1]).slice(),l.__wbindgen_free(e[0],e[1]*1,1)),t}panic_message(){const e=l.widgethandle_panic_message(this.__wbg_ptr);let t;return e[0]!==0&&(t=v(e[0],e[1]).slice(),l.__wbindgen_free(e[0],e[1]*1,1)),t}request_animation_frame(){l.widgethandle_request_animation_frame(this.__wbg_ptr)}switch_tool(e){l.widgethandle_switch_tool(this.__wbg_ptr,e)}sync_script(e,t){const o=w(e,l.__wbindgen_malloc,l.__wbindgen_realloc),a=_;l.widgethandle_sync_script(this.__wbg_ptr,o,a,t)}}Symbol.dispose&&(F.prototype[Symbol.dispose]=F.prototype.free);function te(n,e,t){return l.create(n,e,t)}function oe(){return{__proto__:null,"./chartles_web_bg.js":{__proto__:null,__wbg___wbindgen_boolean_get_bbbb1c18aa2f5e25:function(e){const t=e,o=typeof t=="boolean"?t:void 0;return u(o)?16777215:o?1:0},__wbg___wbindgen_debug_string_0bc8482c6e3508ae:function(e,t){const o=N(t),a=w(o,l.__wbindgen_malloc,l.__wbindgen_realloc),i=_;d().setInt32(e+4,i,!0),d().setInt32(e+0,a,!0)},__wbg___wbindgen_in_47fa6863be6f2f25:function(e,t){return e in t},__wbg___wbindgen_is_function_0095a73b8b156f76:function(e){return typeof e=="function"},__wbg___wbindgen_is_null_ac34f5003991759a:function(e){return e===null},__wbg___wbindgen_is_undefined_9e4d92534c42d778:function(e){return e===void 0},__wbg___wbindgen_number_get_8ff4255516ccad3e:function(e,t){const o=t,a=typeof o=="number"?o:void 0;d().setFloat64(e+8,u(a)?0:a,!0),d().setInt32(e+0,!u(a),!0)},__wbg___wbindgen_string_get_72fb696202c56729:function(e,t){const o=t,a=typeof o=="string"?o:void 0;var i=u(a)?0:w(a,l.__wbindgen_malloc,l.__wbindgen_realloc),r=_;d().setInt32(e+4,r,!0),d().setInt32(e+0,i,!0)},__wbg___wbindgen_throw_be289d5034ed271b:function(e,t){throw new Error(v(e,t))},__wbg__wbg_cb_unref_d9b87ff7982e3b21:function(e){e._wbg_cb_unref()},__wbg_activeTexture_6f9a710514686c24:function(e,t){e.activeTexture(t>>>0)},__wbg_activeTexture_7e39cb8fdf4b6d5a:function(e,t){e.activeTexture(t>>>0)},__wbg_addEventListener_c917b5aafbcf493f:function(){return p(function(e,t,o,a,i){e.addEventListener(v(t,o),a,i)},arguments)},__wbg_altKey_73c1173ba53073d5:function(e){return e.altKey},__wbg_altKey_8155c319c215e3aa:function(e){return e.altKey},__wbg_apply_ada2ee1a60ac7b3c:function(){return p(function(e,t,o){return e.apply(t,o)},arguments)},__wbg_at_dfc235641cc0e40c:function(e,t){return e.at(t)},__wbg_attachShader_32114efcf2744eb6:function(e,t,o){e.attachShader(t,o)},__wbg_attachShader_b36058e5c9eeaf54:function(e,t,o){e.attachShader(t,o)},__wbg_bindBuffer_69a7a0b8f3f9b9cf:function(e,t,o){e.bindBuffer(t>>>0,o)},__wbg_bindBuffer_c9068e8712a034f5:function(e,t,o){e.bindBuffer(t>>>0,o)},__wbg_bindTexture_b2b7b1726a83f93e:function(e,t,o){e.bindTexture(t>>>0,o)},__wbg_bindTexture_ec13ddcb9dc8e032:function(e,t,o){e.bindTexture(t>>>0,o)},__wbg_bindVertexArrayOES_c2610602f7485b3f:function(e,t){e.bindVertexArrayOES(t)},__wbg_bindVertexArray_78220d1edb1d2382:function(e,t){e.bindVertexArray(t)},__wbg_blendEquationSeparate_1b12c43928cc7bc1:function(e,t,o){e.blendEquationSeparate(t>>>0,o>>>0)},__wbg_blendEquationSeparate_a8094fbec94cf80e:function(e,t,o){e.blendEquationSeparate(t>>>0,o>>>0)},__wbg_blendFuncSeparate_95465944f788a092:function(e,t,o,a,i){e.blendFuncSeparate(t>>>0,o>>>0,a>>>0,i>>>0)},__wbg_blendFuncSeparate_f366c170c5097fbe:function(e,t,o,a,i){e.blendFuncSeparate(t>>>0,o>>>0,a>>>0,i>>>0)},__wbg_blockSize_ef9a626745d7dfac:function(e){return e.blockSize},__wbg_bottom_c7ec510a18034add:function(e){return e.bottom},__wbg_bufferData_52235e85894af988:function(e,t,o,a){e.bufferData(t>>>0,o,a>>>0)},__wbg_bufferData_98f6c413a8f0f139:function(e,t,o,a){e.bufferData(t>>>0,o,a>>>0)},__wbg_buttons_a158a0cad3175f24:function(e){return e.buttons},__wbg_call_389efe28435a9388:function(){return p(function(e,t){return e.call(t)},arguments)},__wbg_call_4708e0c13bdc8e95:function(){return p(function(e,t,o){return e.call(t,o)},arguments)},__wbg_cancelAnimationFrame_cd35895d78cf4510:function(){return p(function(e,t){e.cancelAnimationFrame(t)},arguments)},__wbg_clearColor_404a3b16d43db93b:function(e,t,o,a,i){e.clearColor(t,o,a,i)},__wbg_clearColor_f16a5dae33fe425d:function(e,t,o,a,i){e.clearColor(t,o,a,i)},__wbg_clearInterval_c75df0651e74fbb8:function(e,t){e.clearInterval(t)},__wbg_clear_4d801d0d054c3579:function(e,t){e.clear(t>>>0)},__wbg_clear_7187030f892c5ca0:function(e,t){e.clear(t>>>0)},__wbg_clientX_a3c5f4ff30e91264:function(e){return e.clientX},__wbg_clientX_ed7d2827ca30c165:function(e){return e.clientX},__wbg_clientY_79ab4711d0597b2c:function(e){return e.clientY},__wbg_clientY_e28509acb9b4a42a:function(e){return e.clientY},__wbg_code_dee0dae4730408e1:function(e,t){const o=t.code,a=w(o,l.__wbindgen_malloc,l.__wbindgen_realloc),i=_;d().setInt32(e+4,i,!0),d().setInt32(e+0,a,!0)},__wbg_colorMask_177d9762658e5e28:function(e,t,o,a,i){e.colorMask(t!==0,o!==0,a!==0,i!==0)},__wbg_colorMask_7a8dbc86e7376a9b:function(e,t,o,a,i){e.colorMask(t!==0,o!==0,a!==0,i!==0)},__wbg_compileShader_63b824e86bb00b8f:function(e,t){e.compileShader(t)},__wbg_compileShader_94718a93495d565d:function(e,t){e.compileShader(t)},__wbg_contentBoxSize_328a5cd3e7d063a9:function(e){return e.contentBoxSize},__wbg_contentRect_79b98e4d4f4728a4:function(e){return e.contentRect},__wbg_createBuffer_26534c05e01b8559:function(e){const t=e.createBuffer();return u(t)?0:m(t)},__wbg_createBuffer_c4ec897aacc1b91c:function(e){const t=e.createBuffer();return u(t)?0:m(t)},__wbg_createProgram_98aaa91f7c81c5e2:function(e){const t=e.createProgram();return u(t)?0:m(t)},__wbg_createProgram_9b7710a1f2701c2c:function(e){const t=e.createProgram();return u(t)?0:m(t)},__wbg_createShader_e3ac08ed8c5b14b2:function(e,t){const o=e.createShader(t>>>0);return u(o)?0:m(o)},__wbg_createShader_f2b928ca9a426b14:function(e,t){const o=e.createShader(t>>>0);return u(o)?0:m(o)},__wbg_createTexture_16d2c8a3d7d4a75a:function(e){const t=e.createTexture();return u(t)?0:m(t)},__wbg_createTexture_f9451a82c7527ce2:function(e){const t=e.createTexture();return u(t)?0:m(t)},__wbg_createVertexArrayOES_bd76ceee6ab9b95e:function(e){const t=e.createVertexArrayOES();return u(t)?0:m(t)},__wbg_createVertexArray_ad5294951ae57497:function(e){const t=e.createVertexArray();return u(t)?0:m(t)},__wbg_ctrlKey_09a1b54d77dea92b:function(e){return e.ctrlKey},__wbg_ctrlKey_96ff94f8b18636a3:function(e){return e.ctrlKey},__wbg_currentTime_4dc7b294d5e76fc5:function(e,t){const o=t.currentTime;d().setFloat64(e+8,u(o)?0:o,!0),d().setInt32(e+0,!u(o),!0)},__wbg_debug_3fcb20b1b15cf00b:function(e,t){console.debug(v(e,t))},__wbg_defaultView_979b3a6d37a30a3a:function(e){const t=e.defaultView;return u(t)?0:m(t)},__wbg_deleteBuffer_22fcc93912cbf659:function(e,t){e.deleteBuffer(t)},__wbg_deleteBuffer_ab099883c168644d:function(e,t){e.deleteBuffer(t)},__wbg_deleteProgram_9298fb3e3c1d3a78:function(e,t){e.deleteProgram(t)},__wbg_deleteProgram_f354e79b8cae8076:function(e,t){e.deleteProgram(t)},__wbg_deleteShader_aaf3b520a64d5d9d:function(e,t){e.deleteShader(t)},__wbg_deleteShader_ff70ca962883e241:function(e,t){e.deleteShader(t)},__wbg_deleteTexture_2be78224e5584a8b:function(e,t){e.deleteTexture(t)},__wbg_deleteTexture_9d411c0e60ffa324:function(e,t){e.deleteTexture(t)},__wbg_deltaMode_a1d1df711e44cefc:function(e){return e.deltaMode},__wbg_deltaX_f0ca9116db5f7bc1:function(e){return e.deltaX},__wbg_deltaY_eb94120160ac821c:function(e){return e.deltaY},__wbg_detachShader_0837532df5c988ca:function(e,t,o){e.detachShader(t,o)},__wbg_detachShader_1ba1e8cb604560a9:function(e,t,o){e.detachShader(t,o)},__wbg_detail_a401af9718d1892c:function(e){return e.detail},__wbg_devicePixelContentBoxSize_8f39437eab7f03ea:function(e){return e.devicePixelContentBoxSize},__wbg_devicePixelRatio_5c458affc89fc209:function(e){return e.devicePixelRatio},__wbg_disableVertexAttribArray_24a020060006b10f:function(e,t){e.disableVertexAttribArray(t>>>0)},__wbg_disableVertexAttribArray_4bac633c27bae599:function(e,t){e.disableVertexAttribArray(t>>>0)},__wbg_disable_7fe6fb3e97717f88:function(e,t){e.disable(t>>>0)},__wbg_disable_bd37bdcca1764aea:function(e,t){e.disable(t>>>0)},__wbg_disconnect_5202f399852258c0:function(e){e.disconnect()},__wbg_document_ee35a3d3ae34ef6c:function(e){const t=e.document;return u(t)?0:m(t)},__wbg_drawElements_94f6577070a45da2:function(e,t,o,a,i){e.drawElements(t>>>0,o,a>>>0,i)},__wbg_drawElements_ea2abffa9d1dc736:function(e,t,o,a,i){e.drawElements(t>>>0,o,a>>>0,i)},__wbg_enableVertexAttribArray_475e06c31777296d:function(e,t){e.enableVertexAttribArray(t>>>0)},__wbg_enableVertexAttribArray_aa6e40408261eeb9:function(e,t){e.enableVertexAttribArray(t>>>0)},__wbg_enable_d1ac04dfdd2fb3ae:function(e,t){e.enable(t>>>0)},__wbg_enable_fee40f19b7053ea3:function(e,t){e.enable(t>>>0)},__wbg_entries_58c7934c745daac7:function(e){return Object.entries(e)},__wbg_error_dba599464ea2d6dd:function(e,t){let o,a;try{o=e,a=t,console.error(v(e,t))}finally{l.__wbindgen_free(o,a,1)}},__wbg_focus_128ff465f65677cc:function(){return p(function(e){e.focus()},arguments)},__wbg_from_bddd64e7d5ff6941:function(e){return Array.from(e)},__wbg_generateMipmap_5f9058c19cf7c6c1:function(e,t){e.generateMipmap(t>>>0)},__wbg_generateMipmap_c3aad515dd61ffd6:function(e,t){e.generateMipmap(t>>>0)},__wbg_getAttribLocation_16c406a68275ed4b:function(e,t,o,a){return e.getAttribLocation(t,v(o,a))},__wbg_getAttribLocation_7321cf2d67e036f6:function(e,t,o,a){return e.getAttribLocation(t,v(o,a))},__wbg_getBoundingClientRect_b5c8c34d07878818:function(e){return e.getBoundingClientRect()},__wbg_getContext_2a5764d48600bc43:function(){return p(function(e,t,o){const a=e.getContext(v(t,o));return u(a)?0:m(a)},arguments)},__wbg_getError_1182114725905664:function(e){return e.getError()},__wbg_getError_bba8594facbfd5e1:function(e){return e.getError()},__wbg_getExtension_388df13305a298af:function(){return p(function(e,t,o){const a=e.getExtension(v(t,o));return u(a)?0:m(a)},arguments)},__wbg_getExtension_3c0cb5ae01bb4b17:function(){return p(function(e,t,o){const a=e.getExtension(v(t,o));return u(a)?0:m(a)},arguments)},__wbg_getParameter_1ecb910cfdd21f88:function(){return p(function(e,t){return e.getParameter(t>>>0)},arguments)},__wbg_getParameter_2e1f97ecaab76274:function(){return p(function(e,t){return e.getParameter(t>>>0)},arguments)},__wbg_getProgramInfoLog_2ffa30e3abb8b5c2:function(e,t,o){const a=t.getProgramInfoLog(o);var i=u(a)?0:w(a,l.__wbindgen_malloc,l.__wbindgen_realloc),r=_;d().setInt32(e+4,r,!0),d().setInt32(e+0,i,!0)},__wbg_getProgramInfoLog_dbfda4b6e7eb1b37:function(e,t,o){const a=t.getProgramInfoLog(o);var i=u(a)?0:w(a,l.__wbindgen_malloc,l.__wbindgen_realloc),r=_;d().setInt32(e+4,r,!0),d().setInt32(e+0,i,!0)},__wbg_getProgramParameter_43fbc6d2613c08b3:function(e,t,o){return e.getProgramParameter(t,o>>>0)},__wbg_getProgramParameter_92e4540ca9da06b2:function(e,t,o){return e.getProgramParameter(t,o>>>0)},__wbg_getShaderInfoLog_9991e9e77b0c6805:function(e,t,o){const a=t.getShaderInfoLog(o);var i=u(a)?0:w(a,l.__wbindgen_malloc,l.__wbindgen_realloc),r=_;d().setInt32(e+4,r,!0),d().setInt32(e+0,i,!0)},__wbg_getShaderInfoLog_9e0b96da4b13ae49:function(e,t,o){const a=t.getShaderInfoLog(o);var i=u(a)?0:w(a,l.__wbindgen_malloc,l.__wbindgen_realloc),r=_;d().setInt32(e+4,r,!0),d().setInt32(e+0,i,!0)},__wbg_getShaderParameter_786fd84f85720ca8:function(e,t,o){return e.getShaderParameter(t,o>>>0)},__wbg_getShaderParameter_afa4a3dd9dd397c1:function(e,t,o){return e.getShaderParameter(t,o>>>0)},__wbg_getSupportedExtensions_57142a6b598d7787:function(e){const t=e.getSupportedExtensions();return u(t)?0:m(t)},__wbg_getSupportedExtensions_c37f749a951eba04:function(e){const t=e.getSupportedExtensions();return u(t)?0:m(t)},__wbg_getTime_1e3cd1391c5c3995:function(e){return e.getTime()},__wbg_getUniformLocation_71c070e6644669ad:function(e,t,o,a){const i=e.getUniformLocation(t,v(o,a));return u(i)?0:m(i)},__wbg_getUniformLocation_d06b3a5b3c60e95c:function(e,t,o,a){const i=e.getUniformLocation(t,v(o,a));return u(i)?0:m(i)},__wbg_get_9b94d73e6221f75c:function(e,t){return e[t>>>0]},__wbg_get_b3ed3ad4be2bc8ac:function(){return p(function(e,t){return Reflect.get(e,t)},arguments)},__wbg_height_38750dc6de41ee75:function(e){return e.height},__wbg_height_45209601b4c4ede6:function(e){return e.height},__wbg_height_c2027cf67d1c9b11:function(e){return e.height},__wbg_info_160ed7a2a654b18c:function(e,t){console.info(v(e,t))},__wbg_inlineSize_3e4e7e8c813884fd:function(e){return e.inlineSize},__wbg_instanceof_KeyboardEvent_ac14ca88fa76d153:function(e){let t;try{t=e instanceof KeyboardEvent}catch{t=!1}return t},__wbg_instanceof_ResizeObserverEntry_16bca25646e32231:function(e){let t;try{t=e instanceof ResizeObserverEntry}catch{t=!1}return t},__wbg_instanceof_ResizeObserverSize_cee71be747d9d29e:function(e){let t;try{t=e instanceof ResizeObserverSize}catch{t=!1}return t},__wbg_instanceof_WebGl2RenderingContext_4a08a94517ed5240:function(e){let t;try{t=e instanceof WebGL2RenderingContext}catch{t=!1}return t},__wbg_instanceof_WebGlRenderingContext_53391327f021e3ab:function(e){let t;try{t=e instanceof WebGLRenderingContext}catch{t=!1}return t},__wbg_instanceof_Window_ed49b2db8df90359:function(e){let t;try{t=e instanceof Window}catch{t=!1}return t},__wbg_item_98b174cdde606b25:function(e,t){const o=e.item(t>>>0);return u(o)?0:m(o)},__wbg_keyCode_155291a11654466e:function(e){return e.keyCode},__wbg_key_d41e8e825e6bb0e9:function(e,t){const o=t.key,a=w(o,l.__wbindgen_malloc,l.__wbindgen_realloc),i=_;d().setInt32(e+4,i,!0),d().setInt32(e+0,a,!0)},__wbg_left_3b7c3c1030d5ca7a:function(e){return e.left},__wbg_length_25b2ccd77d48ecb1:function(e){return e.length},__wbg_length_35a7bace40f36eac:function(e){return e.length},__wbg_linkProgram_6600dd2c0863bbfd:function(e,t){e.linkProgram(t)},__wbg_linkProgram_be6b825cf66d177b:function(e,t){e.linkProgram(t)},__wbg_matchMedia_91d4fc9729dc3c84:function(){return p(function(e,t,o){const a=e.matchMedia(v(t,o));return u(a)?0:m(a)},arguments)},__wbg_matches_4b5c22bd830f7bb3:function(e){return e.matches},__wbg_maxTouchPoints_b2fe253f521aeb99:function(e){return e.maxTouchPoints},__wbg_metaKey_374999c340f70626:function(e){return e.metaKey},__wbg_metaKey_67113fb40365d736:function(e){return e.metaKey},__wbg_navigator_43be698ba96fc088:function(e){return e.navigator},__wbg_new_0_73afc35eb544e539:function(){return new Date},__wbg_new_2e2be9617c4407d5:function(){return p(function(e){return new ResizeObserver(e)},arguments)},__wbg_new_361308b2356cecd0:function(){return new Object},__wbg_new_387e806cfef8bc75:function(){return new Error},__wbg_new_3eb36ae241fe6f44:function(){return new Array},__wbg_new_b5d9e2fb389fef91:function(e,t){try{var o={a:e,b:t},a=(r,s)=>{const c=o.a;o.a=0;try{return re(c,o.b,r,s)}finally{o.a=c}};return new Promise(a)}finally{o.a=o.b=0}},__wbg_new_no_args_1c7c842f08d00ebb:function(e,t){return new Function(v(e,t))},__wbg_now_a3af9a2f4bbaa4d1:function(){return Date.now()},__wbg_observe_1ae37077cf10b11b:function(e,t,o){e.observe(t,o)},__wbg_ownerDocument_9347874c5cad87d7:function(e){const t=e.ownerDocument;return u(t)?0:m(t)},__wbg_parentElement_75863410a8617953:function(e){const t=e.parentElement;return u(t)?0:m(t)},__wbg_parse_708461a1feddfb38:function(){return p(function(e,t){return JSON.parse(v(e,t))},arguments)},__wbg_pixelStorei_2a65936c11b710fe:function(e,t,o){e.pixelStorei(t>>>0,o)},__wbg_pixelStorei_f7cc498f52d523f1:function(e,t,o){e.pixelStorei(t>>>0,o)},__wbg_pointerId_466b1bdcaf2fe835:function(e){return e.pointerId},__wbg_pointerType_ba53c6f18634a26d:function(e,t){const o=t.pointerType,a=w(o,l.__wbindgen_malloc,l.__wbindgen_realloc),i=_;d().setInt32(e+4,i,!0),d().setInt32(e+0,a,!0)},__wbg_preventDefault_cdcfcd7e301b9702:function(e){e.preventDefault()},__wbg_push_8ffdcb2063340ba5:function(e,t){return e.push(t)},__wbg_queueMicrotask_0aa0a927f78f5d98:function(e){return e.queueMicrotask},__wbg_queueMicrotask_5bb536982f78a56f:function(e){queueMicrotask(e)},__wbg_releasePointerCapture_420ef33c7c5fb6f4:function(){return p(function(e,t){e.releasePointerCapture(t)},arguments)},__wbg_removeEventListener_e63328781a5b9af9:function(){return p(function(e,t,o,a){e.removeEventListener(v(t,o),a)},arguments)},__wbg_requestAnimationFrame_43682f8e1c5e5348:function(){return p(function(e,t){return e.requestAnimationFrame(t)},arguments)},__wbg_resolve_002c4b7d9d8f6b64:function(e){return Promise.resolve(e)},__wbg_right_154af6c2b1bf0c89:function(e){return e.right},__wbg_scissor_2ff8f18f05a6d408:function(e,t,o,a,i){e.scissor(t,o,a,i)},__wbg_scissor_b870b1434a9c25b4:function(e,t,o,a,i){e.scissor(t,o,a,i)},__wbg_scrollX_b3151cb810a681ae:function(){return p(function(e){return e.scrollX},arguments)},__wbg_scrollY_8087997adf618f94:function(){return p(function(e){return e.scrollY},arguments)},__wbg_setPointerCapture_420db6f6826eb74b:function(){return p(function(e,t){e.setPointerCapture(t)},arguments)},__wbg_setProperty_cbb25c4e74285b39:function(){return p(function(e,t,o,a,i){e.setProperty(v(t,o),v(a,i))},arguments)},__wbg_set_6cb8631f80447a67:function(){return p(function(e,t,o){return Reflect.set(e,t,o)},arguments)},__wbg_set_box_73d3355c6f95f24d:function(e,t){e.box=se[t]},__wbg_set_capture_d52e7a585f2933c8:function(e,t){e.capture=t!==0},__wbg_set_height_f21f985387070100:function(e,t){e.height=t>>>0},__wbg_set_passive_f411e67e6f28687b:function(e,t){e.passive=t!==0},__wbg_set_tabIndex_eb89b6ffe111cd2c:function(e,t){e.tabIndex=t},__wbg_set_width_d60bc4f2f20c56a4:function(e,t){e.width=t>>>0},__wbg_shaderSource_32425cfe6e5a1e52:function(e,t,o,a){e.shaderSource(t,v(o,a))},__wbg_shaderSource_8f4bda03f70359df:function(e,t,o,a){e.shaderSource(t,v(o,a))},__wbg_shiftKey_5558a3288542c985:function(e){return e.shiftKey},__wbg_shiftKey_564be91ec842bcc4:function(e){return e.shiftKey},__wbg_stack_8c994f3af366f8d7:function(e,t){const o=t.stack,a=w(o,l.__wbindgen_malloc,l.__wbindgen_realloc),i=_;d().setInt32(e+4,i,!0),d().setInt32(e+0,a,!0)},__wbg_static_accessor_GLOBAL_12837167ad935116:function(){const e=typeof global>"u"?null:global;return u(e)?0:m(e)},__wbg_static_accessor_GLOBAL_THIS_e628e89ab3b1c95f:function(){const e=typeof globalThis>"u"?null:globalThis;return u(e)?0:m(e)},__wbg_static_accessor_SELF_a621d3dfbb60d0ce:function(){const e=typeof self>"u"?null:self;return u(e)?0:m(e)},__wbg_static_accessor_WINDOW_f8727f0cf888e0bd:function(){const e=typeof window>"u"?null:window;return u(e)?0:m(e)},__wbg_stringify_8d1cc6ff383e8bae:function(){return p(function(e){return JSON.stringify(e)},arguments)},__wbg_style_0b7c9bd318f8b807:function(e){return e.style},__wbg_texImage2D_087ef94df78081f0:function(){return p(function(e,t,o,a,i,r,s,c,h,g){e.texImage2D(t>>>0,o,a,i,r,s,c>>>0,h>>>0,g)},arguments)},__wbg_texImage2D_13414a4692836804:function(){return p(function(e,t,o,a,i,r,s,c,h,g){e.texImage2D(t>>>0,o,a,i,r,s,c>>>0,h>>>0,g)},arguments)},__wbg_texImage2D_e71049312f3172d9:function(){return p(function(e,t,o,a,i,r,s,c,h,g){e.texImage2D(t>>>0,o,a,i,r,s,c>>>0,h>>>0,g)},arguments)},__wbg_texParameteri_0d45be2c88d6bad8:function(e,t,o,a){e.texParameteri(t>>>0,o>>>0,a)},__wbg_texParameteri_ec937d2161018946:function(e,t,o,a){e.texParameteri(t>>>0,o>>>0,a)},__wbg_texSubImage2D_19ae4cadb809f264:function(){return p(function(e,t,o,a,i,r,s,c,h,g){e.texSubImage2D(t>>>0,o,a,i,r,s,c>>>0,h>>>0,g)},arguments)},__wbg_texSubImage2D_d17a39cdec4a3495:function(){return p(function(e,t,o,a,i,r,s,c,h,g){e.texSubImage2D(t>>>0,o,a,i,r,s,c>>>0,h>>>0,g)},arguments)},__wbg_texSubImage2D_edf5bd70fda3feaf:function(){return p(function(e,t,o,a,i,r,s,c,h,g){e.texSubImage2D(t>>>0,o,a,i,r,s,c>>>0,h>>>0,g)},arguments)},__wbg_then_b9e7b3b5f1a9e1b5:function(e,t){return e.then(t)},__wbg_timeStamp_ddfe1bf5c2346d68:function(e){return e.timeStamp},__wbg_timeline_7217c8d4f2646f92:function(e){return e.timeline},__wbg_top_3d27ff6f468cf3fc:function(e){return e.top},__wbg_touches_55ce167b42bcdf52:function(e){return e.touches},__wbg_uniform1i_9f3f72dbcb98ada9:function(e,t,o){e.uniform1i(t,o)},__wbg_uniform1i_e9aee4b9e7fe8c4b:function(e,t,o){e.uniform1i(t,o)},__wbg_uniform2f_1887b1268f65bfee:function(e,t,o,a){e.uniform2f(t,o,a)},__wbg_uniform2f_2aa77a6395d47f1d:function(e,t,o,a){e.uniform2f(t,o,a)},__wbg_useProgram_e82c1a5f87d81579:function(e,t){e.useProgram(t)},__wbg_useProgram_fe720ade4d3b6edb:function(e,t){e.useProgram(t)},__wbg_userAgent_34463fd660ba4a2a:function(){return p(function(e,t){const o=t.userAgent,a=w(o,l.__wbindgen_malloc,l.__wbindgen_realloc),i=_;d().setInt32(e+4,i,!0),d().setInt32(e+0,a,!0)},arguments)},__wbg_vertexAttribPointer_75f6ff47f6c9f8cb:function(e,t,o,a,i,r,s){e.vertexAttribPointer(t>>>0,o,a>>>0,i!==0,r,s)},__wbg_vertexAttribPointer_adbd1853cce679ad:function(e,t,o,a,i,r,s){e.vertexAttribPointer(t>>>0,o,a>>>0,i!==0,r,s)},__wbg_viewport_174ae1c2209344ae:function(e,t,o,a,i){e.viewport(t,o,a,i)},__wbg_viewport_df236eac68bc7467:function(e,t,o,a,i){e.viewport(t,o,a,i)},__wbg_visibilityState_43b7b74940e07d22:function(e){const t=e.visibilityState;return(ce.indexOf(t)+1||3)-1},__wbg_warn_3a7e8ead1514524d:function(e,t){console.warn(v(e,t))},__wbg_widgethandle_new:function(e){return F.__wrap(e)},__wbg_width_5f66bde2e810fbde:function(e){return e.width},__wbg_width_7444cca5dfea0645:function(e){return e.width},__wbg_width_ae46cb8e98ee102f:function(e){return e.width},__wbindgen_cast_0000000000000001:function(e,t){return M(e,t,l.wasm_bindgen__closure__destroy__h20ae3501afac8650,ie)},__wbindgen_cast_0000000000000002:function(e,t){return M(e,t,l.wasm_bindgen__closure__destroy__h20ae3501afac8650,le)},__wbindgen_cast_0000000000000003:function(e,t){return M(e,t,l.wasm_bindgen__closure__destroy__h20ae3501afac8650,W)},__wbindgen_cast_0000000000000004:function(e,t){return M(e,t,l.wasm_bindgen__closure__destroy__h20ae3501afac8650,W)},__wbindgen_cast_0000000000000005:function(e,t){return M(e,t,l.wasm_bindgen__closure__destroy__h20ae3501afac8650,ae)},__wbindgen_cast_0000000000000006:function(e,t){return M(e,t,l.wasm_bindgen__closure__destroy__h1f3f4732f9edd493,ne)},__wbindgen_cast_0000000000000007:function(e){return e},__wbindgen_cast_0000000000000008:function(e,t){return ue(e,t)},__wbindgen_cast_0000000000000009:function(e,t){return he(e,t)},__wbindgen_cast_000000000000000a:function(e,t){return fe(e,t)},__wbindgen_cast_000000000000000b:function(e,t){return pe(e,t)},__wbindgen_cast_000000000000000c:function(e,t){return me(e,t)},__wbindgen_cast_000000000000000d:function(e,t){return de(e,t)},__wbindgen_cast_000000000000000e:function(e,t){return ge(e,t)},__wbindgen_cast_000000000000000f:function(e,t){return v(e,t)},__wbindgen_init_externref_table:function(){const e=l.__wbindgen_externrefs,t=e.grow(4);e.set(0,void 0),e.set(t+0,void 0),e.set(t+1,null),e.set(t+2,!0),e.set(t+3,!1)}}}}function ae(n,e){l.wasm_bindgen__convert__closures_____invoke__h601e664e2e9cc82f(n,e)}function W(n,e,t){l.wasm_bindgen__convert__closures_____invoke__h8537a3701b0b5f6b(n,e,t)}function ne(n,e,t){l.wasm_bindgen__convert__closures_____invoke__ha624b472ecc71fd2(n,e,t)}function ie(n,e,t,o){l.wasm_bindgen__convert__closures_____invoke__hf0dd7a14be83332f(n,e,t,o)}function re(n,e,t,o){l.wasm_bindgen__convert__closures_____invoke__h7f1611af06081c56(n,e,t,o)}function le(n,e,t){const o=l.wasm_bindgen__convert__closures_____invoke__h34d03d10fb3b2fbd(n,e,t);if(o[1])throw Te(o[0])}const se=["border-box","content-box","device-pixel-content-box"],ce=["hidden","visible"],K=typeof FinalizationRegistry>"u"?{register:()=>{},unregister:()=>{}}:new FinalizationRegistry(n=>l.__wbg_widgethandle_free(n>>>0,1));function m(n){const e=l.__externref_table_alloc();return l.__wbindgen_externrefs.set(e,n),e}const q=typeof FinalizationRegistry>"u"?{register:()=>{},unregister:()=>{}}:new FinalizationRegistry(n=>n.dtor(n.a,n.b));function N(n){const e=typeof n;if(e=="number"||e=="boolean"||n==null)return`${n}`;if(e=="string")return`"${n}"`;if(e=="symbol"){const a=n.description;return a==null?"Symbol":`Symbol(${a})`}if(e=="function"){const a=n.name;return typeof a=="string"&&a.length>0?`Function(${a})`:"Function"}if(Array.isArray(n)){const a=n.length;let i="[";a>0&&(i+=N(n[0]));for(let r=1;r<a;r++)i+=", "+N(n[r]);return i+="]",i}const t=/\[object ([^\]]+)\]/.exec(toString.call(n));let o;if(t&&t.length>1)o=t[1];else return toString.call(n);if(o=="Object")try{return"Object("+JSON.stringify(n)+")"}catch{return"Object"}return n instanceof Error?`${n.name}: ${n.message}
${n.stack}`:o}function ue(n,e){return n=n>>>0,ve().subarray(n/4,n/4+e)}function he(n,e){return n=n>>>0,be().subarray(n/2,n/2+e)}function fe(n,e){return n=n>>>0,_e().subarray(n/4,n/4+e)}function pe(n,e){return n=n>>>0,we().subarray(n/1,n/1+e)}function me(n,e){return n=n>>>0,ye().subarray(n/2,n/2+e)}function de(n,e){return n=n>>>0,Ae().subarray(n/4,n/4+e)}function ge(n,e){return n=n>>>0,R().subarray(n/1,n/1+e)}let T=null;function d(){return(T===null||T.buffer.detached===!0||T.buffer.detached===void 0&&T.buffer!==l.memory.buffer)&&(T=new DataView(l.memory.buffer)),T}let L=null;function ve(){return(L===null||L.byteLength===0)&&(L=new Float32Array(l.memory.buffer)),L}let I=null;function be(){return(I===null||I.byteLength===0)&&(I=new Int16Array(l.memory.buffer)),I}let B=null;function _e(){return(B===null||B.byteLength===0)&&(B=new Int32Array(l.memory.buffer)),B}let x=null;function we(){return(x===null||x.byteLength===0)&&(x=new Int8Array(l.memory.buffer)),x}function v(n,e){return n=n>>>0,Se(n,e)}let P=null;function ye(){return(P===null||P.byteLength===0)&&(P=new Uint16Array(l.memory.buffer)),P}let C=null;function Ae(){return(C===null||C.byteLength===0)&&(C=new Uint32Array(l.memory.buffer)),C}let D=null;function R(){return(D===null||D.byteLength===0)&&(D=new Uint8Array(l.memory.buffer)),D}function p(n,e){try{return n.apply(this,e)}catch(t){const o=m(t);l.__wbindgen_exn_store(o)}}function u(n){return n==null}function M(n,e,t,o){const a={a:n,b:e,cnt:1,dtor:t},i=(...r)=>{a.cnt++;const s=a.a;a.a=0;try{return o(s,a.b,...r)}finally{a.a=s,i._wbg_cb_unref()}};return i._wbg_cb_unref=()=>{--a.cnt===0&&(a.dtor(a.a,a.b),a.a=0,q.unregister(a))},q.register(i,a,a),i}function w(n,e,t){if(t===void 0){const s=k.encode(n),c=e(s.length,1)>>>0;return R().subarray(c,c+s.length).set(s),_=s.length,c}let o=n.length,a=e(o,1)>>>0;const i=R();let r=0;for(;r<o;r++){const s=n.charCodeAt(r);if(s>127)break;i[a+r]=s}if(r!==o){r!==0&&(n=n.slice(r)),a=t(a,o,o=r+n.length*3,1)>>>0;const s=R().subarray(a+r,a+o),c=k.encodeInto(n,s);r+=c.written,a=t(a,o,r,1)>>>0}return _=r,a}function Te(n){const e=l.__wbindgen_externrefs.get(n);return l.__externref_table_dealloc(n),e}let V=new TextDecoder("utf-8",{ignoreBOM:!0,fatal:!0});V.decode();const Me=2146435072;let O=0;function Se(n,e){return O+=e,O>=Me&&(V=new TextDecoder("utf-8",{ignoreBOM:!0,fatal:!0}),V.decode(),O=e),V.decode(R().subarray(n,n+e))}const k=new TextEncoder;"encodeInto"in k||(k.encodeInto=function(n,e){const t=k.encode(n);return e.set(t),{read:n.length,written:t.length}});let _=0,l;function Le(n,e){return l=n.exports,T=null,L=null,I=null,B=null,x=null,P=null,C=null,D=null,l.__wbindgen_start(),l}async function Ie(n,e){if(typeof Response=="function"&&n instanceof Response){if(typeof WebAssembly.instantiateStreaming=="function")try{return await WebAssembly.instantiateStreaming(n,e)}catch(a){if(n.ok&&t(n.type)&&n.headers.get("Content-Type")!=="application/wasm")console.warn("`WebAssembly.instantiateStreaming` failed because your server does not serve Wasm with `application/wasm` MIME type. Falling back to `WebAssembly.instantiate` which is slower. Original error:\n",a);else throw a}const o=await n.arrayBuffer();return await WebAssembly.instantiate(o,e)}else{const o=await WebAssembly.instantiate(n,e);return o instanceof WebAssembly.Instance?{instance:o,module:n}:o}function t(o){switch(o){case"basic":case"cors":case"default":return!0}return!1}}async function Be(n){if(l!==void 0)return l;n!==void 0&&(Object.getPrototypeOf(n)===Object.prototype?{module_or_path:n}=n:console.warn("using deprecated parameters for the initialization function; pass a single object instead")),n===void 0&&(n=new URL(""+new URL("chartles_web_bg-BhajxQ6T.wasm",import.meta.url).href,import.meta.url));const e=oe();(typeof n=="string"||typeof Request=="function"&&n instanceof Request||typeof URL=="function"&&n instanceof URL)&&(n=fetch(n));const{instance:t,module:o}=await Ie(await n,e);return Le(t)}const j={"Accumulation/Distribution":`//@version=6
indicator(title="Accumulation/Distribution", shorttitle="Accum/Dist", format=format.volume, overlay=false, timeframe="", timeframe_gaps=true)
var cumVol = 0.
cumVol += nz(volume)
if barstate.islast and cumVol == 0
    runtime.error("No volume is provided by the data vendor.")
ad = ta.cum(close==high and close==low or high==low ? 0 : ((2*close-low-high)/(high-low))*volume)
plot(ad, title = "Accumulation/Distribution", color=#999915)`,"Arnaud Legoux Moving Average":`//@version=6
indicator(title="Arnaud Legoux Moving Average", shorttitle="ALMA", overlay=true, timeframe="", timeframe_gaps=true)

TT_OFFSET = "Controls tradeoff between smoothness (closer to 1) and responsiveness (closer to 0)."
TT_SIGMA  = "This element is a standard deviation that is applied to the combo line in order for it to appear more sharp."

source = close
lengthInput =  input.int(9,      "Length", minval  = 1)
offsetInput =  input.float(0.85, "Offset", step = 0.01, tooltip = TT_OFFSET)
sigmaInput  =  input.float(6,    "Sigma",               tooltip = TT_SIGMA)

plot(ta.alma(source, lengthInput, offsetInput, sigmaInput), "ALMA")`,Aroon:`//@version=6
indicator(title="Aroon", shorttitle="Aroon", overlay=false, format=format.percent, precision=2, timeframe="", timeframe_gaps=true)
length = input.int(14, minval=1)
upper = 100 * (ta.highestbars(high, length + 1) + length)/length
lower = 100 * (ta.lowestbars(low, length + 1) + length)/length
plot(upper, "Aroon Up", color=#FB8C00)
plot(lower, "Aroon Down", color=#2962FF)`,"Aroon Oscillator":`//@version=6
indicator("Aroon Oscillator", "Aroon Osc", timeframe = "", timeframe_gaps = true)

import TradingView/ta/11 as TVta

int lengthInput = input.int(14, "Length", 1)

// Calculate Aroon Up and Aroon Down values, then compute their difference.
[aroonUp, aroonDn] = TVta.aroon(lengthInput)
float osc = aroonUp - aroonDn

// Plot the oscillator and display threshold lines.
oscPlot  = plot(osc, "Oscillator", osc >= 0 ? #4caf50 : #ff5252)
zeroPlot = plot(0, "", na, display = display.none, editable = false)
fill(oscPlot, zeroPlot, osc >= 0 ? #4caf501a : #ff52521a, "Oscillator fill")
hline(0,   "Center")
hline(90,  "Upper level")
hline(-90, "Lower level")`,"Average Daily Range":`//@version=6
indicator("Average Daily Range", shorttitle="ADR", timeframe="", timeframe_gaps=true)
lengthInput = input.int(14, title="Length")
adr = ta.sma(high - low, lengthInput)
plot(adr, title="ADR")`,"Average Directional Index":`//@version=6
indicator("Average Directional Index", shorttitle="ADX", format=format.price, precision=2, timeframe="", timeframe_gaps=true)

TT_ADX_LEN = "The time period to be used in calculating the ADX which has a smoothing component."
TT_DI_LEN  = "The time period to be used in calculating the DI (Directional Indicator)."

adxlen = input(14, title = "ADX Smoothing",  tooltip = TT_ADX_LEN)
dilen =  input(14, title = "DI Length",      tooltip = TT_DI_LEN)

dirmov(len) =>
	up = ta.change(high)
	down = -ta.change(low)
	plusDM = na(up) ? na : (up > down and up > 0 ? up : 0)
	minusDM = na(down) ? na : (down > up and down > 0 ? down : 0)
	truerange = ta.rma(ta.tr, len)
	plus = fixnan(100 * ta.rma(plusDM, len) / truerange)
	minus = fixnan(100 * ta.rma(minusDM, len) / truerange)
	[plus, minus]
adx(dilen, adxlen) =>
	[plus, minus] = dirmov(dilen)
	sum = plus + minus
	adx = 100 * ta.rma(math.abs(plus - minus) / (sum == 0 ? 1 : sum), adxlen)
sig = adx(dilen, adxlen)
plot(sig, color=color.red, title="ADX")`,"Average True Range":`//@version=6
indicator(title="Average True Range", shorttitle="ATR", overlay=false, timeframe="", timeframe_gaps=true)
length = input.int(title="Length", defval=14, minval=1)
smoothing = input.string(title="Smoothing", defval="RMA", options=["RMA", "SMA", "EMA", "WMA"])
ma_function(source, length) =>
	switch smoothing
		"RMA" => ta.rma(source, length)
		"SMA" => ta.sma(source, length)
		"EMA" => ta.ema(source, length)
		=> ta.wma(source, length)
plot(ma_function(ta.tr(true), length), title = "ATR", color=color.new(#B71C1C, 0))`,"Awesome Oscillator":`//@version=6
indicator(title="Awesome Oscillator", shorttitle="AO", timeframe="", timeframe_gaps=true)
ao = ta.sma(hl2,5) - ta.sma(hl2,34)
diff = ao - ao[1]
plot(ao, "AO", color = diff <= 0 ? #F44336 : #009688, style = plot.style_columns)
changeToGreen = ta.crossover(diff, 0)
changeToRed = ta.crossunder(diff, 0)
alertcondition(changeToGreen, title = "AO color changed to green", message = "Awesome Oscillator's color has changed to green")
alertcondition(changeToRed, title = "AO color changed to red", message = "Awesome Oscillator's color has changed to red")`,"Balance of Power":`//@version=6
indicator(title="Balance of Power", format=format.price, precision=2, timeframe="", timeframe_gaps=true)
plot((close - open) / (high - low), "BOP", color=color.red)`,BBTrend:`//@version=6
indicator("BBTrend", timeframe="", timeframe_gaps=true)

shortLengthInput = input.int(20,    "Short BB Length", minval = 1)
longLengthInput  = input.int(50,    "Long BB Length",  minval = 1)
stdDevMultInput  = input.float(2.0, "StdDev",          minval = 0.001)

[shortMiddle, shortUpper, shortLower] = ta.bb(close, shortLengthInput, stdDevMultInput)
[longMiddle,  longUpper,  longLower]  = ta.bb(close, longLengthInput,  stdDevMultInput)

BBTrend = (math.abs(shortLower - longLower) - math.abs(shortUpper - longUpper)) / shortMiddle * 100

posColorStrong = color.new(#089981, 25)
negColorStrong = color.new(#F23645, 25)
posColorWeak   = color.new(#089981, 50)
negColorWeak   = color.new(#F23645, 50)

histColor = switch
    BBTrend > 0 and BBTrend >= BBTrend[1] => posColorStrong
    BBTrend > 0 and BBTrend <  BBTrend[1] => posColorWeak
    BBTrend < 0 and BBTrend >  BBTrend[1] => negColorWeak
    BBTrend < 0 and BBTrend <= BBTrend[1] => negColorStrong
    => posColorWeak

plot(BBTrend, "BBTrend", style = plot.style_columns, color = histColor)
hline(0, "Zero line")`,"Bollinger Bands":`//@version=6
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
`,"Bollinger Bands %b":`//@version=6
indicator(title = "Bollinger Bands %b", shorttitle = "BB %b", format=format.price, precision=2, timeframe="", timeframe_gaps=true)

string TT_LENGTH = "The time period to be used in calculating the SMA which creates the base for the Upper and Lower Bands"
string TT_SOURCE = "Determines what data from each bar will be used in calculations."
string TT_MULT   = "The number of Standard Deviations away from the SMA that the Upper and Lower Bands should be."

length = input.int(20,       "Length", minval = 1, tooltip = TT_LENGTH)
src    = input(close,        "Source",             tooltip = TT_SOURCE)
mult   = input.float(2.0,    "StdDev", minval = 0.001, maxval = 50, tooltip = TT_MULT)

basis = ta.sma(src, length)
dev = mult * ta.stdev(src, length)
upper = basis + dev
lower = basis - dev
bbr = (src - lower)/(upper - lower)
plot(bbr, "Bollinger Bands %b", color=#2962FF)

bandTop = hline(100, display = display.none, editable = false)
band1 = hline(1, "Overbought", color = color.new(#F23645, 50), linestyle=hline.style_dashed)
hline(0.5, "Middle Band", color=color.new(#2962FF, 50))
band0 = hline(0, "Oversold", color.new(#089981, 50), linestyle=hline.style_dashed)
bandBottom = hline(-100, display = display.none, editable = false)

fill(band1, band0, title="Middle Background", color = color.new(#2962FF, 90))
fill(bandTop, band1, title = "Overbought background", color = color.new(#F23645, 90))
fill(band0, bandBottom, title = "Oversold background", color = color.new(#089981, 90))`,"Bollinger BandWidth":`//@version=6
indicator(title="Bollinger BandWidth", shorttitle="BBW", format=format.price, precision=2, timeframe="", timeframe_gaps=true)


string TT_LENGTH = "The time period to be used in calculating the SMA which creates the base for the Upper and Lower Bands"
string TT_SOURCE = "Determines what data from each bar will be used in calculations."
string TT_MULT   = "The number of Standard Deviations away from the SMA that the Upper and Lower Bands should be."
string TT_HI_EXP = "The Highest Expansion plot displays the highest value that BBW had in the last N bars, where N is the length specified by this input."
string TT_LO_EXP = "The Lowest Contraction plot displays the lowest value that BBW had in the last N bars, where N is the length specified by this input."

length = input.int(20,       "Length", minval = 1, tooltip = TT_LENGTH)
src    = input(close,        "Source",             tooltip = TT_SOURCE)
mult   = input.float(2.0,    "StdDev", minval = 0.001,    maxval = 50, tooltip = TT_MULT)
expansionLengthInput   = input.int(125,      "Highest Expansion Length",  minval = 1, display = display.none, tooltip = TT_HI_EXP)
contractionLengthInput = input.int(125,      "Lowest Contraction Length", minval = 1, display = display.none, tooltip = TT_LO_EXP)

basis = ta.sma(src, length)
dev   = mult * ta.stdev(src, length)
upper = basis + dev
lower = basis - dev
bbw   = ((upper - lower) / basis) * 100

plot(bbw, "Bollinger BandWidth", color = #2962FF)
plot(ta.highest(bbw, expansionLengthInput),  "Highest Expansion",  color = color.new(#F23645, 50))
plot(ta.lowest(bbw, contractionLengthInput), "Lowest Contraction", color = color.new(#089981, 50))`,"Bull Bear Power":`//@version=6
indicator("Bull Bear Power", shorttitle="BBP")
lengthInput = input.int(13, title="Length")
bullPower = high - ta.ema(close, lengthInput)
bearPower = low - ta.ema(close, lengthInput)
bbp = bullPower + bearPower 
plot(bbp, color = bbp >= 0 ? #089981 : #f23645, title="BBPower", style = plot.style_columns)
hline(0, "Zero line")`,"Chaikin Money Flow":`//@version=6
indicator(title="Chaikin Money Flow", shorttitle="CMF", format=format.price, precision=2, timeframe="", timeframe_gaps=true)
var cumVol = 0.
cumVol += nz(volume)
if barstate.islast and cumVol == 0
    runtime.error("No volume is provided by the data vendor.")
length = input.int(20, minval=1)
ad = close==high and close==low or high==low ? 0 : ((2*close-low-high)/(high-low))*volume
mf = math.sum(ad, length) / math.sum(volume, length)
plot(mf, "CMF",  color = #43A047)
hline(0, "Zero", color = #787B86, linestyle = hline.style_dashed)`,"Chaikin Oscillator":`//@version=6
indicator(title="Chaikin Oscillator", shorttitle="Chaikin Osc", format=format.volume, timeframe="", timeframe_gaps=true)
var cumVol = 0.
cumVol += nz(volume)
if barstate.islast and cumVol == 0
    runtime.error("No volume is provided by the data vendor.")
short = input.int(3, minval=1, title="Fast Length")
long = input.int(10, minval=1, title="Slow Length")
osc = ta.ema(ta.accdist, short) - ta.ema(ta.accdist, long)
plot(osc, title="Chaikin Oscillator", color=#EC407A)
hline(0, title="Zero", color=#787B86, linestyle=hline.style_dashed)`,"Chande Kroll Stop":`//@version=6
indicator(title = "Chande Kroll Stop", overlay=true, timeframe="", timeframe_gaps=true)
p = input.int(10, minval=1, title="ATR Length (p)")
x = input.int(1, minval=1, title="ATR Coefficient (x)")
q = input.int(9, minval=1, title="Stop Length (q)")
first_high_stop = ta.highest(high, p) - x * ta.atr(p)
first_low_stop = ta.lowest(low, p) + x * ta.atr(p)
stop_short = ta.highest(first_high_stop, q)
stop_long = ta.lowest(first_low_stop, q)
plot(stop_long, color=#2962FF, title="Stop Long")
plot(stop_short, color=#FF6D00, title="Stop Short")`,"Chande Momentum Oscillator":`//@version=6
indicator(title="Chande Momentum Oscillator", shorttitle="ChandeMO", format=format.price, precision=2, timeframe="", timeframe_gaps=true)
length = input.int(9, minval=1)
src = input(close, "Source")
momm = ta.change(src)
f1(m) => m >= 0.0 ? m : 0.0
f2(m) => m >= 0.0 ? 0.0 : -m
m1 = f1(momm)
m2 = f2(momm)
sm1 = math.sum(m1, length)
sm2 = math.sum(m2, length)
percent(nom, div) => 100 * nom / div
chandeMO = percent(sm1-sm2, sm1+sm2)
plot(chandeMO, "Chande MO", color=#2962FF)
hline(0, color=#787B86, linestyle=hline.style_dashed, title="Zero Line")`,"Chandelier Exit":`//@version=6
indicator("Chandelier Exit", "Chandelier", true, timeframe = "", timeframe_gaps = true)

import TradingView/ta/11 as TVta

// Inputs
int   lengthInput  = input.int(22,    "Length",         1)
int   atrLenInput  = input.int(22,    "ATR length",     1)
float atrMultInput = input.float(3.0, "ATR multiplier", 0.0, step = 0.01)

// Calculate and plot the long and short exit values.
[longCE, shortCE] = TVta.chandelier(lengthInput, atrLenInput, atrMultInput)

plot(longCE,  "Long exit")
plot(shortCE, "Short exit", #ff6d00)`,"Chop Zone":`//@version=6
indicator(title = "Chop Zone", format=format.price, precision=0, timeframe="", timeframe_gaps=true)
colorTurquoise = #26C6DA
colorDarkGreen = #43A047
colorPaleGreen = #A5D6A7
colorLime = #009688
colorDarkRed = #D50000
colorRed = #E91E63
colorOrange = #FF6D00
colorLightOrange = #FFB74D
colorYellow = #FDD835
source = close
avg = hlc3
pi = math.atan(1) * 4
periods = 30
highestHigh = ta.highest(periods)
lowestLow = ta.lowest(periods)
span = 25 / (highestHigh - lowestLow) * lowestLow
ema34 = ta.ema(source, 34)
x1_ema34 = 0
x2_ema34 = 1
y1_ema34 = 0
y2_ema34 = (ema34[1] - ema34) / avg * span
c_ema34 = math.sqrt((x2_ema34 - x1_ema34)*(x2_ema34 - x1_ema34) + (y2_ema34 - y1_ema34)*(y2_ema34 - y1_ema34))
emaAngle_1 = math.round(180 * math.acos((x2_ema34 - x1_ema34)/c_ema34) / pi)
emaAngle = y2_ema34 > 0? - emaAngle_1: emaAngle_1
chopZoneColor = emaAngle >= 5 ? colorTurquoise : emaAngle < 5 and emaAngle >= 3.57 ? colorDarkGreen : emaAngle < 3.57 and emaAngle >= 2.14 ? colorPaleGreen : emaAngle < 2.14 and emaAngle >= .71 ? colorLime : emaAngle <= -1 * 5 ? colorDarkRed : emaAngle > -1 * 5 and emaAngle <= -1 * 3.57 ? colorRed : emaAngle > -1 * 3.57 and emaAngle <= -1 * 2.14 ? colorOrange : emaAngle > -1 * 2.14 and emaAngle <= -1 * .71 ? colorLightOrange : colorYellow
plot(1, "Chop Zone", color = chopZoneColor, style = plot.style_columns)`,"Choppiness Index":`//@version=6
indicator(title="Choppiness Index", shorttitle="CHOP", format=format.price, precision=2, timeframe="", timeframe_gaps=true)
length = input.int(14, minval=1)
ci = 100 * math.log10(math.sum(ta.atr(1), length) / (ta.highest(length) - ta.lowest(length))) / math.log10(length)
offset = input.int(0, "Offset",  minval = -500, maxval = 500)
plot(ci, "CHOP", color=#2962FF, offset = offset)
band1 = hline(61.8, "Upper Band", color=#787B86, linestyle=hline.style_dashed)
hline(50, "Middle Band", color=color.new(#787B86, 50))
band0 = hline(38.2, "Lower Band", color=#787B86, linestyle=hline.style_dashed)
fill(band1, band0, color = color.rgb(33, 150, 243, 90), title = "Background")`,"Commodity Channel Index":`//@version=6
indicator(title="Commodity Channel Index", shorttitle="CCI", format=format.price, precision=2, timeframe="", timeframe_gaps=true)
length = input.int(20, minval=1)
src = input(hlc3, title="Source")
ma = ta.sma(src, length)
cci = (src - ma) / (0.015 * ta.dev(src, length))
plot(cci, "CCI", color=#2962FF)
band1 = hline(100, "Upper Band", color=#787B86, linestyle=hline.style_dashed)
hline(0, "Middle Band", color=color.new(#787B86, 50))
band0 = hline(-100, "Lower Band", color=#787B86, linestyle=hline.style_dashed)
fill(band1, band0, color=color.rgb(33, 150, 243, 90), title="Background")

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
smoothingMA = enableMA ? ma(cci, maLengthInput, maTypeInput) : na
smoothingStDev = isBB ? ta.stdev(cci, maLengthInput) * bbMultInput : na
plot(smoothingMA, "CCI-based MA", color=color.yellow, display = enableMA ? display.all : display.none, editable = enableMA)
bbUpperBand = plot(smoothingMA + smoothingStDev, title = "Upper Bollinger Band", color=color.green, display = isBB ? display.all : display.none, editable = isBB)
bbLowerBand = plot(smoothingMA - smoothingStDev, title = "Lower Bollinger Band", color=color.green, display = isBB ? display.all : display.none, editable = isBB)
fill(bbUpperBand, bbLowerBand, color= isBB ? color.new(color.green, 90) : na, title="Bollinger Bands Background Fill", display = isBB ? display.all : display.none, editable = isBB)
`,"Connors RSI":`//@version=6
indicator(title="Connors RSI", shorttitle="CRSI", format=format.price, precision=2, timeframe="", timeframe_gaps=true)
src = close
lenrsi = input(3, "RSI Length")
lenupdown = input(2, "UpDown Length")
lenroc = input(100, "ROC Length")
updown(s) =>
	isEqual = s == s[1]
	isGrowing = s > s[1]
	ud = 0.0
	ud := isEqual ? 0 : isGrowing ? (nz(ud[1]) <= 0 ? 1 : nz(ud[1])+1) : (nz(ud[1]) >= 0 ? -1 : nz(ud[1])-1)
	ud
rsi = ta.rsi(src, lenrsi)
updownrsi = ta.rsi(updown(src), lenupdown)
percentrank = ta.percentrank(ta.roc(src, 1), lenroc)
crsi = math.avg(rsi, updownrsi, percentrank)
plot(crsi, "CRSI", #2962FF)
band1 = hline(70, "Upper Band", color = #787B86)
hline(50, "Middle Band", color=color.new(#787B86, 50))
band0 = hline(30, "Lower Band",  color = #787B86)
fill(band1, band0, color.rgb(33, 150, 243, 90), title = "Background")`,"Coppock Curve":`//@version=6
indicator(title = "Coppock Curve", timeframe="", timeframe_gaps=true)
wmaLength = input(title="WMA Length", defval=10)
longRoCLength = input(title="Long RoC Length", defval=14)
shortRoCLength = input(title="Short RoC Length", defval=11)
source = close
curve = ta.wma(ta.roc(source, longRoCLength) + ta.roc(source, shortRoCLength), wmaLength)
plot(curve, "Coppock Curve")`,"Detrended Price Oscillator":`//@version=6
indicator(title="Detrended Price Oscillator", shorttitle="DPO", format=format.price, precision=2, timeframe="", timeframe_gaps=true)

TT_CENTERED = "When the DPO is centered, the DPO line stays offset towards the left. When it is not centered, it shifts back to the right to match current price."

period_    = input.int(21,      "Length",   minval = 1)
isCentered = input(false,       "Centered", tooltip = TT_CENTERED)

barsback = period_/2 + 1
ma = ta.sma(close, period_)
dpo = isCentered ? close[barsback] - ma : close - ma[barsback]
plot(dpo, "DPO", offset = isCentered ? -barsback : 0, color = #43A047)
hline(0, title="Zero Line", color = #787B86)`,"Directional Movement Index":`//@version=6
indicator(title="Directional Movement Index", shorttitle="DMI", format=format.price, precision=4, timeframe="", timeframe_gaps=true)

TT_ADX_LEN = "The time period to be used in calculating the ADX which has a smoothing component."
TT_DI_LEN  = "The time period to be used in calculating the DI (Directional Indicator)."

lensig = input.int(14, "ADX Smoothing", minval = 1, tooltip = TT_ADX_LEN)
len =    input.int(14, "DI Length",     minval = 1, tooltip = TT_DI_LEN)

up = ta.change(high)
down = -ta.change(low)
plusDM = na(up) ? na : (up > down and up > 0 ? up : 0)
minusDM = na(down) ? na : (down > up and down > 0 ? down : 0)
trur = ta.rma(ta.tr, len)
plus = fixnan(100 * ta.rma(plusDM, len) / trur)
minus = fixnan(100 * ta.rma(minusDM, len) / trur)
sum = plus + minus
adx = 100 * ta.rma(math.abs(plus - minus) / (sum == 0 ? 1 : sum), lensig)
plot(adx, color=#F50057, title="ADX")
plot(plus, color=#2962FF, title="+DI")
plot(minus, color=#FF6D00, title="-DI")`,"Donchian Channels":`//@version=6
indicator(title="Donchian Channels", shorttitle="DC", overlay=true, timeframe="", timeframe_gaps=true)
length = input.int(20, minval = 1)
offset = input.int(0, "Offset")
lower =  ta.lowest(length)
upper =  ta.highest(length)
basis =  math.avg(upper, lower)
plot(basis,     "Basis", color = #FF6D00, offset = offset)
u = plot(upper, "Upper", color = #2962FF, offset = offset)
l = plot(lower, "Lower", color = #2962FF, offset = offset)
fill(u, l, color = color.rgb(33, 150, 243, 95), title = "Background")`,"Double EMA":`//@version=6
indicator(title="Double EMA", shorttitle="DEMA", overlay=true, timeframe="", timeframe_gaps=true)
length = input.int(9, minval=1)
src = input(close, title="Source")
e1 = ta.ema(src, length)
e2 = ta.ema(e1, length)
dema = 2 * e1 - e2
plot(dema, "DEMA", color=#43A047)`,"Ease of Movement":`//@version=6
indicator(title="Ease of Movement", shorttitle="EOM", format=format.volume, timeframe="", timeframe_gaps=true)
var cumVol = 0.
cumVol += nz(volume)
if barstate.islast and cumVol == 0
    runtime.error("No volume is provided by the data vendor.")
length = input.int(14, minval=1)
div = input.int(10000, title="Divisor", minval=1)
eom = ta.sma(div * ta.change(hl2) * (high - low) / volume, length)
plot(eom, "EOM", color=#43A047)`,"Elder Force Index":`//@version=6
indicator(title="Elder Force Index", shorttitle="EFI", format=format.volume, timeframe="", timeframe_gaps=true)
var cumVol = 0.
cumVol += nz(volume)
if barstate.islast and cumVol == 0
    runtime.error("No volume is provided by the data vendor.")
length = input.int(13, minval=1)
efi = ta.ema(ta.change(close) * volume, length)
plot(efi, color=#F44336, title="Elder Force Index")
hline(0, color=#787B86, title="Zero")`,Envelope:`//@version=6
indicator(title="Envelope", shorttitle="Env", overlay=true, timeframe="", timeframe_gaps=true)
len = input.int(20, title="Length", minval=1)
percent = input(10.0, "Percent")
src = input(close, title="Source")
exponential = input(false, "Exponential")
basis = exponential ? ta.ema(src, len) : ta.sma(src, len)
k = percent/100.0
upper = basis * (1 + k)
lower = basis * (1 - k)
plot(basis, "Basis", color=#FF6D00)
u = plot(upper, "Upper", color=#2962FF)
l = plot(lower, "Lower", color=#2962FF)
fill(u, l, color=color.rgb(33, 150, 243, 95), title="Background")`,"Fisher Transform":`//@version=6
indicator(title="Fisher Transform", shorttitle="Fisher", format=format.price, precision=2, timeframe="", timeframe_gaps=true)
len = input.int(9, minval=1, title="Length")
high_ = ta.highest(hl2, len)
low_ = ta.lowest(hl2, len)
round_(val) => val > .99 ? .999 : val < -.99 ? -.999 : val
value = 0.0
value := round_(.66 * ((hl2 - low_) / (high_ - low_) - .5) + .67 * nz(value[1]))
fish1 = 0.0
fish1 := .5 * math.log((1 + value) / (1 - value)) + .5 * nz(fish1[1])
fish2 = fish1[1]
hline(1.5, "1.5", color=#E91E63)
hline(0.75,"0.75", color=#787B86)
hline(0, "0", color=#E91E63)
hline(-0.75, "-0.75", color=#787B86)
hline(-1.5, "-1.5", color=#E91E63)
plot(fish1, color=#2962FF, title="Fisher")
plot(fish2, color=#FF6D00, title="Trigger")`,"Hull Moving Average":`//@version=6
indicator(title="Hull Moving Average", shorttitle="HMA", overlay=true, timeframe="", timeframe_gaps=true)
length = input.int(9, "Length", minval = 2)
src    = input(close, "Source")
hullma = ta.wma(2*ta.wma(src, length/2)-ta.wma(src, length), math.floor(math.sqrt(length)))
plot(hullma, "HMA")`,"Ichimoku Cloud":`//@version=6
indicator(title="Ichimoku Cloud", shorttitle="Ichimoku", overlay=true)
conversionPeriods = input.int(9, minval=1, title="Conversion Line Length")
basePeriods = input.int(26, minval=1, title="Base Line Length")
laggingSpan2Periods = input.int(52, minval=1, title="Leading Span B Length")
displacement = input.int(26, minval=1, title="Lagging Span")
donchian(len) => math.avg(ta.lowest(len), ta.highest(len))
conversionLine = donchian(conversionPeriods)
baseLine = donchian(basePeriods)
leadLine1 = math.avg(conversionLine, baseLine)
leadLine2 = donchian(laggingSpan2Periods)
plot(conversionLine, color=#2962FF, title="Conversion Line")
plot(baseLine, color=#B71C1C, title="Base Line")
plot(close, offset = -displacement + 1, color=#43A047, title="Lagging Span")
p1 = plot(leadLine1, offset = displacement - 1, color=#A5D6A7,
	 title="Leading Span A")
p2 = plot(leadLine2, offset = displacement - 1, color=#EF9A9A,
	 title="Leading Span B")
plot(leadLine1 > leadLine2 ? leadLine1 : leadLine2, offset = displacement - 1, title = "Kumo Cloud Upper Line", display = display.none) 
plot(leadLine1 < leadLine2 ? leadLine1 : leadLine2, offset = displacement - 1, title = "Kumo Cloud Lower Line", display = display.none) 
fill(p1, p2, title = "Cloud Fill", color = leadLine1 > leadLine2 ? color.rgb(67, 160, 71, 90) : color.rgb(244, 67, 54, 90))`,"Kaufman's Adaptive Moving Average":`//@version=6
indicator("Kaufman's Adaptive Moving Average", "KAMA", true, timeframe = "", timeframe_gaps = true)

import TradingView/ta/11 as TVta

// Inputs
float sourceInput  = input.source(close, "Source")
int   erLenInput   = input.int(10, "ER length",   1)
int   fastLenInput = input.int(2,  "Fast length", 1)
int   slowLenInput = input.int(30, "Slow length", 1)

// Calculate and plot the KAMA value.
plot(TVta.kama(sourceInput, erLenInput, fastLenInput, slowLenInput), "KAMA")`,"Keltner Channels":`//@version=6
indicator(title="Keltner Channels", shorttitle="KC", overlay=true, timeframe="", timeframe_gaps=true)
length = input.int(20, minval=1)
mult = input(2.0, "Multiplier")
src = input(close, title="Source")
exp = input(true, "Use Exponential MA", display = display.none)
BandsStyle = input.string("Average True Range", options = ["Average True Range", "True Range", "Range"], title="Bands Style", display = display.none)
atrlength = input(10, "ATR Length", display = display.none)
esma(source, length)=>
	s = ta.sma(source, length)
	e = ta.ema(source, length)
	exp ? e : s
ma = esma(src, length)
rangema = BandsStyle == "True Range" ? ta.tr(true) : BandsStyle == "Average True Range" ? ta.atr(atrlength) : ta.rma(high - low, length)
upper = ma + rangema * mult
lower = ma - rangema * mult
u = plot(upper, color=#2962FF, title="Upper")
plot(ma, color=#2962FF, title="Basis")
l = plot(lower, color=#2962FF, title="Lower")
fill(u, l, color=color.rgb(33, 150, 243, 95), title="Background")`,"Klinger Oscillator":`//@version=6
indicator(title="Klinger Oscillator", format=format.volume, timeframe="", timeframe_gaps=true)
var cumVol = 0.
cumVol += nz(volume)
if barstate.islast and cumVol == 0
    runtime.error("No volume is provided by the data vendor.")
sv = ta.change(hlc3) >= 0 ? volume : -volume
kvo = ta.ema(sv, 34) - ta.ema(sv, 55)
sig = ta.ema(kvo, 13)
plot(kvo, color = #2962FF, title="Klinger Oscillator")
plot(sig, color = #43A047, title="Signal")`,"Know Sure Thing":`//@version=6
indicator(title="Know Sure Thing", shorttitle="KST", format=format.price, precision=4, timeframe="", timeframe_gaps=true)
roclen1 = input.int(10, minval=1, title = "ROC Length #1")
roclen2 = input.int(15, minval=1, title = "ROC Length #2")
roclen3 = input.int(20, minval=1, title = "ROC Length #3")
roclen4 = input.int(30, minval=1, title = "ROC Length #4")
smalen1 = input.int(10, minval=1, title = "SMA Length #1")
smalen2 = input.int(10, minval=1, title = "SMA Length #2")
smalen3 = input.int(10, minval=1, title = "SMA Length #3")
smalen4 = input.int(15, minval=1, title = "SMA Length #4")
siglen = input.int(9, minval=1, title = "Signal Line Length")
smaroc(roclen, smalen) => ta.sma(ta.roc(close, roclen), smalen)
kst = smaroc(roclen1, smalen1) + 2 * smaroc(roclen2, smalen2) + 3 * smaroc(roclen3, smalen3) + 4 * smaroc(roclen4, smalen4)
sig = ta.sma(kst, siglen)
plot(kst, color=#009688, title="KST")
plot(sig, color=#F44336, title="Signal")
hline(0, title="Zero", color = #787B86)`,"Least Squares Moving Average":`//@version=6
indicator(title = "Least Squares Moving Average", shorttitle="LSMA", overlay=true, timeframe="", timeframe_gaps=true)
length = input(title="Length", defval=25)
offset = input(title="Offset", defval=0)
src = input(close, title="Source")
lsma = ta.linreg(src, length, offset)
plot(lsma, "LSMA")`,"MA Cross":`//@version=6
indicator(title="MA Cross", overlay=true, timeframe="", timeframe_gaps=true)
shortlen = input.int(9, "Short MA Length", minval=1)
longlen = input.int(21, "Long MA Length", minval=1)
short = ta.sma(close, shortlen)
long = ta.sma(close, longlen)
plot(short, color = #FF6D00, title="Short MA")
plot(long, color = #43A047, title="Long MA")
plot(ta.cross(short, long) ? short : na, color=#2962FF, style = plot.style_cross, linewidth = 4, title="Cross")`,"Mass Index":`//@version=6
indicator(title="Mass Index", format=format.price, precision=2, timeframe="", timeframe_gaps=true)
length = input.int(10, minval=1)
span = high - low
mi = math.sum(ta.ema(span, 9) / ta.ema(ta.ema(span, 9), 9), length)
plot(mi, "Mass Index")`,"McGinley Dynamic":`//@version=6
indicator(title="McGinley Dynamic", overlay=true, timeframe="", timeframe_gaps=true)
length = input.int(14, minval=1)
source = close
mg = 0.0
mg := na(mg[1]) ? ta.ema(source, length) : mg[1] + (source - mg[1]) / (length * math.pow(source/mg[1], 4))
log.info(mg[1], mg[1])
plot(mg, "McGinley Dynamic")`,Median:`//@version=6
indicator(title="Median", overlay=true, timeframe="", timeframe_gaps=true)
source = input(hl2, title="Median Source")
length = input(3, title="Median Length")
atr_length = input(14, title="ATR Length")
atr_mult = input(2, title="ATR Multiplier")

median = ta.percentile_nearest_rank(source, length, 50)
median_plot = plot(median, color=color.red, linewidth=3, title="Median")

atr_ = atr_mult * ta.atr(atr_length)

plot(median + atr_, color=color.lime, title="Upper Band")
plot(median - atr_, color=color.fuchsia, title="Lower Band")

median_ema = ta.ema(median, length)
ema_plot = plot(median_ema, color=color.blue, title="Median EMA")

fill(median_plot, ema_plot,  title="Fill color", color = median > median_ema ? color.new(color.lime, 10) : color.new(color.fuchsia, 10))`,Momentum:`//@version=6
indicator(title="Momentum", shorttitle="Mom", timeframe="", timeframe_gaps=true)
len = input.int(10, minval=1, title="Length")
src = input(close, title="Source")
mom = src - src[len]
plot(mom, color=#2962FF, title="MOM")`,"Money Flow Index":`//@version=6
indicator(title="Money Flow Index", shorttitle="MFI", format=format.price, precision=2, timeframe="", timeframe_gaps=true)
length = input.int(title="Length", defval=14, minval=1, maxval=2000)
src = hlc3
mf = ta.mfi(src, length)
plot(mf, "MF", color=#7E57C2)
overbought=hline(80, title="Overbought", color=#787B86)
hline(50, "Middle Band", color=color.new(#787B86, 50))
oversold=hline(20, title="Oversold", color=#787B86)
fill(overbought, oversold, color=color.rgb(126, 87, 194, 90), title="Background")`,"Moving Average Convergence Divergence":`//@version=6
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
`,"Moving Average Ribbon":`//@version=6
indicator("Moving Average Ribbon", shorttitle = "MA Ribbon", overlay = true, timeframe = "", timeframe_gaps = true)

ma(source, length, MAtype) =>
    switch MAtype
        "SMA"        => ta.sma(source,  length) 
        "EMA"        => ta.ema(source,  length) 
        "SMMA (RMA)" => ta.rma(source,  length) 
        "WMA"        => ta.wma(source,  length) 
        "VWMA"       => ta.vwma(source, length) 
        => na

show_ma1   = input(true,         "MA #1", inline = "MA #1", display = display.none)
ma1_type   = input.string("SMA", "",      inline = "MA #1", active = show_ma1, options = ["SMA", "EMA", "SMMA (RMA)", "WMA", "VWMA"])
ma1_source = input(close,        "",      inline = "MA #1", active = show_ma1, display = display.none)
ma1_length = input.int(20,       "",      inline = "MA #1", active = show_ma1, minval  = 1)
ma1_color  = input(#f6c309,    "",      inline = "MA #1", active = show_ma1, display = display.none)

show_ma2   = input(true,         "MA #2", inline = "MA #2", display = display.none)
ma2_type   = input.string("SMA", "",      inline = "MA #2", active = show_ma2, options = ["SMA", "EMA", "SMMA (RMA)", "WMA", "VWMA"])
ma2_source = input(close,        "",      inline = "MA #2", active = show_ma2, display = display.none)
ma2_length = input.int(50,       "",      inline = "MA #2", active = show_ma2, minval  = 1)
ma2_color  = input(#fb9800,    "",      inline = "MA #2", active = show_ma2, display = display.none)

show_ma3   = input(true,         "MA #3", inline = "MA #3", display = display.none)
ma3_type   = input.string("SMA", "",      inline = "MA #3", active = show_ma3, options = ["SMA", "EMA", "SMMA (RMA)", "WMA", "VWMA"])
ma3_source = input(close,        "",      inline = "MA #3", active = show_ma3, display = display.none)
ma3_length = input.int(100,      "",      inline = "MA #3", active = show_ma3, minval  = 1)
ma3_color  = input(#fb6500,    "",      inline = "MA #3", active = show_ma3, display = display.none)

show_ma4   = input(true,         "MA #4", inline = "MA #4", display = display.none)
ma4_type   = input.string("SMA", "",      inline = "MA #4", active = show_ma4, options = ["SMA", "EMA", "SMMA (RMA)", "WMA", "VWMA"])
ma4_source = input(close,        "",      inline = "MA #4", active = show_ma4, display = display.none)
ma4_length = input.int(200,      "",      inline = "MA #4", active = show_ma4, minval  = 1)
ma4_color  = input(#f60c0c,    "",      inline = "MA #4", active = show_ma4, display = display.none)

ma1 = show_ma1 ? ma(ma1_source, ma1_length, ma1_type) : na
ma2 = show_ma2 ? ma(ma2_source, ma2_length, ma2_type) : na
ma3 = show_ma3 ? ma(ma3_source, ma3_length, ma3_type) : na
ma4 = show_ma4 ? ma(ma4_source, ma4_length, ma4_type) : na

plot(ma1, "MA #1", ma1_color, display = show_ma1 ? display.all : display.none)
plot(ma2, "MA #2", ma2_color, display = show_ma2 ? display.all : display.none)
plot(ma3, "MA #3", ma3_color, display = show_ma3 ? display.all : display.none)
plot(ma4, "MA #4", ma4_color, display = show_ma4 ? display.all : display.none)`,"Moving Average Weighted":`//@version=6
indicator(title="Moving Average Weighted", shorttitle="WMA", overlay=true, timeframe="", timeframe_gaps=true)
len = input.int(9, minval=1, title="Length")
src = input(close, title="Source")
offset = input.int(title="Offset", defval=0, minval=-500, maxval=500, display = display.none)
out = ta.wma(src, len)
plot(out, title="WMA", color=color.blue, offset=offset)`,"Negative Volume Index":`//@version=6
indicator("Negative Volume Index", "NVI", timeframe = "", timeframe_gaps = true)

int maLengthInput = input.int(255, "EMA length", 1)

// Calculate and plot the NVI and its EMA.
float nvi = ta.nvi * 1000.0
float ema = ta.ema(nvi, maLengthInput)

plot(nvi, "NVI")
plot(ema, "NVI-based EMA", #ff9800)

// Raise an error if no volume data is available.
if ta.cum(nz(volume)) == 0.0 and barstate.islastconfirmedhistory
    runtime.error("No volume is provided by the data vendor.")`,"On Balance Volume":`//@version=6
indicator(title="On Balance Volume", shorttitle="OBV", format=format.volume, timeframe="", timeframe_gaps=true)
var cumVol = 0.
cumVol += nz(volume)
if barstate.islast and cumVol == 0
    runtime.error("No volume is provided by the data vendor.")
src = close
obv = ta.cum(math.sign(ta.change(src)) * volume)
plot(obv, color=#2962FF, title="OnBalanceVolume")

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
smoothingMA = enableMA ? ma(obv, maLengthInput, maTypeInput) : na
smoothingStDev = isBB ? ta.stdev(obv, maLengthInput) * bbMultInput : na
plot(smoothingMA, "OBV-based MA", color=color.yellow, display = enableMA ? display.all : display.none, editable = enableMA)
bbUpperBand = plot(smoothingMA + smoothingStDev, title = "Upper Bollinger Band", color=color.green, display = isBB ? display.all : display.none, editable = isBB)
bbLowerBand = plot(smoothingMA - smoothingStDev, title = "Lower Bollinger Band", color=color.green, display = isBB ? display.all : display.none, editable = isBB)
fill(bbUpperBand, bbLowerBand, color= isBB ? color.new(color.green, 90) : na, title="Bollinger Bands Background Fill", display = isBB ? display.all : display.none, editable = isBB)
`,"Parabolic SAR":`//@version=6
indicator(title="Parabolic SAR", shorttitle="SAR", overlay=true, timeframe="", timeframe_gaps=true)
start = input(0.02)
increment = input(0.02)
maximum = input(0.2, "Max value")
out = ta.sar(start, increment, maximum)
plot(out, "ParabolicSAR", style=plot.style_cross, color=#2962FF)`,"Percentage Price Oscillator":`//@version=6
indicator("Percentage Price Oscillator", "PPO", false, format.percent, 2, timeframe = "", timeframe_gaps = true)

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

// Calculate and plot the PPO, signal, and histogram values.
float maFast = ma(sourceInput, fastLenInput, oscTypeInput)
float maSlow = ma(sourceInput, slowLenInput, oscTypeInput)
float ppo    = 100.0 * (maFast - maSlow) / maSlow
float signal = ma(ppo, sigLenInput, sigTypeInput)
float hist   = ppo - signal
color hColor = hist >= 0 ? hist > hist[1] ? #26a69a : #b2dfdb : hist > hist[1] ? #ffcdd2 : #ff5252

hline(0, "Zero", #787b8680)
plot(hist, "Histogram", hColor, style = plot.style_columns)
plot(ppo, "PPO")
plot(signal, "Signal line", #ff6d00)`,"Percentage Volume Oscillator":`//@version=6
indicator("Percentage Volume Oscillator", "PVO", false, format.percent, 2, timeframe = "", timeframe_gaps = true)

// Inputs
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

// Calculate and plot the PVO, signal, and histogram values.
float maFast = ma(volume, fastLenInput, oscTypeInput)
float maSlow = ma(volume, slowLenInput, oscTypeInput)
float pvo    = 100.0 * (maFast - maSlow) / maSlow
float signal = ma(pvo, sigLenInput, sigTypeInput)
float hist   = pvo - signal
color hColor = hist >= 0 ? hist > hist[1] ? #26a69a : #b2dfdb : hist > hist[1] ? #ffcdd2 : #ff5252

hline(0, "Zero", #787b8680)
plot(hist, "Histogram", hColor, style = plot.style_columns)
plot(pvo, "PVO")
plot(signal, "Signal line", #ff6d00)

// Raise an error if no volume data is available.
if ta.cum(nz(volume)) == 0.0 and barstate.islastconfirmedhistory
    runtime.error("No volume is provided by the data vendor.")
`,"Positive Volume Index":`//@version=6
indicator("Positive Volume Index", "PVI", timeframe = "", timeframe_gaps = true)

int maLengthInput = input.int(255, "EMA length", 1)

// Calculate and plot the PVI and its EMA.
float pvi = ta.pvi * 1000.0
float ema = ta.ema(pvi, maLengthInput)

plot(pvi, "PVI")
plot(ema, "PVI-based EMA", #ff9800)

// Raise an error if no volume data is available.
if ta.cum(nz(volume)) == 0.0 and barstate.islastconfirmedhistory
    runtime.error("No volume is provided by the data vendor.")`,"Price Momentum Oscillator":`//@version=6
indicator("Price Momentum Oscillator", "PMO", timeframe = "", timeframe_gaps = true)

import TradingView/ta/11 as TVta

// Inputs
float sourceInput  = input.source(close, "Source")
int   length1Input = input.int(35, "Length 1", 1)
int   length2Input = input.int(20, "Length 2", 1)
int   signalInput  = input.int(10, "Signal length", 1)

// Calculate the PMO and signal line.
[pmo, signal] = TVta.pmo(sourceInput, length1Input, length2Input, signalInput)

// Plot the values, and display a zero line.
plot(pmo, "PMO")
plot(signal, "Signal", #ff6d00)
hline(0, "Zero")`,"Price Volume Trend":`//@version=6
indicator(title="Price Volume Trend", shorttitle="PVT", format=format.volume, timeframe="", timeframe_gaps=true)
var cumVol = 0.
cumVol += nz(volume)
if barstate.islast and cumVol == 0
    runtime.error("No volume is provided by the data vendor.")
src = close
vt = ta.cum(ta.change(src)/src[1]*volume)
plot(vt, color=#2962FF, title="PVT")`,"Pring's Special K":`//@version=6
indicator("Pring's Special K", "Special K", timeframe = "", timeframe_gaps = true)

import TradingView/ta/11 as TVta

// Inputs
float sourceInput  = input.source(close, "Source")
int   length1Input = input.int(100, "Signal length 1", 1)
int   length2Input = input.int(100, "Signal length 2", 1)

// Calculate the Special K and twice-smoothed signal line.
[specialK, signal] = TVta.specialK(sourceInput, length1Input, length2Input)

// Plot the values, and display a zero line.
plot(specialK, "Special K")
plot(signal, "Signal", #ff6d00)
hline(0, "Zero")

// Raise an error if the chart's history is insufficient.
if last_bar_index < 724
    runtime.error("Not enough history on the chart. Choose a symbol or timeframe with a larger number of bars.")`,"Rate Of Change":`//@version=6
indicator(title="Rate Of Change", shorttitle="ROC", format=format.price, precision=2, timeframe="", timeframe_gaps=true)
length = input.int(9, minval=1)
source = input(close, "Source")
roc = 100 * (source - source[length])/source[length]
plot(roc, color=#2962FF, title="ROC")
hline(0, color=#787B86, title="Zero Line")`,"RCI Ribbon":`//@version=6
indicator("RCI Ribbon", "RCI Ribbon", precision = 2, timeframe = "", timeframe_gaps = true)

source 		 = input.source(close, title = "Source")
shortLength  = input.int(10, title = "Short RCI Length", minval = 1)
middleLength = input.int(30, title = "Middle RCI Length", minval = 1)
longLength 	 = input.int(50, title = "Long RCI Length", minval = 1)

plot(ta.rci(source, shortLength), title = "Short RCI", color = color.blue)
plot(ta.rci(source, middleLength), title = "Middle RCI", color = color.red)
plot(ta.rci(source, longLength), title = "Long RCI", color = color.green)

hline(0, "Middle band")
upper = hline(80, "Upper band")
lower = hline(-80, "Lower band")
fill(upper, lower, color.new(color.blue, 90))`,"Relative Strength Index":`//@version=6
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
`,"Relative Vigor Index":`//@version=6
indicator(title="Relative Vigor Index", shorttitle="RVGI", format=format.price, precision=4, timeframe="", timeframe_gaps=true)
len = input.int(10, title="Length", minval=1)
rvi = math.sum(ta.swma(close-open), len)/math.sum(ta.swma(high-low),len)
sig = ta.swma(rvi)
offset = input.int(0, "Offset", minval = -500, maxval = 500, display = display.none)
plot(rvi, color=#008000, title="RVGI", offset = offset)
plot(sig, color=#FF0000, title="Signal", offset = offset)`,"Relative Volatility Index":`//@version=6
indicator(title="Relative Volatility Index", shorttitle="RVI", format=format.price, precision=2, timeframe="", timeframe_gaps=true)
length = input.int(10, minval=1)
offset = input.int(0, "Offset", minval = -500, maxval = 500)
src = close
len = 14
stddev = ta.stdev(src, length)
upper = ta.ema(ta.change(src) <= 0 ? 0 : stddev, len)
lower = ta.ema(ta.change(src) > 0 ? 0 : stddev, len)
rvi = upper / (upper + lower) * 100

h0 = hline(80, "Upper Band", color=#787B86)
hline(50, "Middle Band", color=color.new(#787B86, 50))
h1 = hline(20, "Lower Band", color=#787B86)
fill(h0, h1, color=color.rgb(126, 87, 194, 90), title="Background")

plot(rvi, title="RVI", color=#7E57C2, offset = offset)

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
smoothingMA = enableMA ? ma(rvi, maLengthInput, maTypeInput) : na
smoothingStDev = isBB ? ta.stdev(rvi, maLengthInput) * bbMultInput : na
plot(smoothingMA, "RVI-based MA", color=color.yellow, display = enableMA ? display.all : display.none, editable = enableMA)
bbUpperBand = plot(smoothingMA + smoothingStDev, title = "Upper Bollinger Band", color=color.green, display = isBB ? display.all : display.none, editable = isBB)
bbLowerBand = plot(smoothingMA - smoothingStDev, title = "Lower Bollinger Band", color=color.green, display = isBB ? display.all : display.none, editable = isBB)
fill(bbUpperBand, bbLowerBand, color= isBB ? color.new(color.green, 90) : na, title="Bollinger Bands Background Fill", display = isBB ? display.all : display.none, editable = isBB)
`,"Simple Moving Average":`//@version=6
indicator(title="Simple Moving Average", shorttitle="SMA", overlay=true, timeframe="", timeframe_gaps=true)
len = input.int(9, minval=1, title="Length")
src = input(close, title="Source")
offset = input.int(title="Offset", defval=0, minval=-500, maxval=500, display = display.none)
out = ta.sma(src, len)
plot(out, color=color.blue, title="MA", offset=offset)

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
plot(smoothingMA, "SMA-based MA", color=color.yellow, display = enableMA ? display.all : display.none, editable = enableMA)
bbUpperBand = plot(smoothingMA + smoothingStDev, title = "Upper Bollinger Band", color=color.green, display = isBB ? display.all : display.none, editable = isBB)
bbLowerBand = plot(smoothingMA - smoothingStDev, title = "Lower Bollinger Band", color=color.green, display = isBB ? display.all : display.none, editable = isBB)
fill(bbUpperBand, bbLowerBand, color= isBB ? color.new(color.green, 90) : na, title="Bollinger Bands Background Fill", display = isBB ? display.all : display.none, editable = isBB)
`,"SMI Ergodic Indicator":`//@version=6
indicator(title="SMI Ergodic Indicator", shorttitle="SMII", format=format.price, precision=4, timeframe="", timeframe_gaps=true)
longlen = input.int(20, minval=1, title="Long Length")
shortlen = input.int(5, minval=1, title="Short Length")
siglen = input.int(5, minval=1, title="Signal Line Length")
erg = ta.tsi(close, shortlen, longlen)
sig = ta.ema(erg, siglen)
plot(erg, color=#2962FF, title="SMI")
plot(sig, color=#FF6D00, title="Signal")`,"SMI Ergodic Oscillator":`//@version=6
indicator(title="SMI Ergodic Oscillator", shorttitle="SMIO", format=format.price, precision=4, timeframe="", timeframe_gaps=true)
longlen = input.int(20, minval=1, title="Long Length")
shortlen = input.int(5, minval=1, title="Short Length")
siglen = input.int(5, minval=1, title="Signal Line Length")
erg = ta.tsi(close, shortlen, longlen)
sig = ta.ema(erg, siglen)
osc = erg - sig
plot(osc, color=#FF5252, style=plot.style_histogram, title="SMI Ergodic Oscillator")`,"Smoothed Moving Average":`//@version=6
indicator(title="Smoothed Moving Average", shorttitle="SMMA", overlay=true, timeframe="", timeframe_gaps=true)
len = input.int(7, minval=1, title="Length")
src = input(close, title="Source")
smma = 0.0
smma := na(smma[1]) ? ta.sma(src, len) : (smma[1] * (len - 1) + src) / len
plot(smma, "SMMA", color = #673AB7)`,Stochastic:`//@version=6
indicator(title="Stochastic", shorttitle="Stoch", format=format.price, precision=2, timeframe="", timeframe_gaps=true)
periodK = input.int(14, title="%K Length", minval=1)
smoothK = input.int(1, title="%K Smoothing", minval=1)
periodD = input.int(3, title="%D Smoothing", minval=1)
k = ta.sma(ta.stoch(close, high, low, periodK), smoothK)
d = ta.sma(k, periodD)
plot(k, title="%K", color=#2962FF)
plot(d, title="%D", color=#FF6D00)
h0 = hline(80, "Upper Band", color=#787B86)
hline(50, "Middle Band", color=color.new(#787B86, 50))
h1 = hline(20, "Lower Band", color=#787B86)
fill(h0, h1, color=color.rgb(33, 150, 243, 90), title="Background")`,"Stochastic Momentum Index":`//@version=6
indicator("Stochastic Momentum Index", "SMI", timeframe = "", timeframe_gaps = true)

lengthK   = input.int(10, "%K Length",  minval = 1, maxval = 15000)
lengthD   = input.int(3,  "%D Length",  minval = 1, maxval = 4999)
lengthEMA = input.int(3,  "EMA Length", minval = 1, maxval = 4999)

emaEma(source, length) => ta.ema(ta.ema(source, length), length)

highestHigh = ta.highest(lengthK)
lowestLow =   ta.lowest(lengthK)
highestLowestRange = highestHigh - lowestLow
relativeRange = close - (highestHigh + lowestLow) / 2
smi = 200 * (emaEma(relativeRange, lengthD) / emaEma(highestLowestRange, lengthD))

smiPlot = plot(smi, "SMI", color = color.blue)
plot(ta.ema(smi, lengthEMA), "SMI-based EMA", color = color.orange)

overbought = hline(40, "Overbought Line")
oversold   = hline(-40, "Oversold Line")
fill(overbought, oversold, title = "Background", color = color.new(color.blue, 90))
hline(0, "Middle Line", color = color.new(color.gray, 50))


midLinePlot = plot(0, color = na, editable = false, display = display.none)
fill(smiPlot, midLinePlot, 120,  40,   top_color = color.new(#4caf4f, 50),    bottom_color = color.new(color.green, 100), title = "Overbought Gradient Fill")
fill(smiPlot, midLinePlot, -40, -120,  top_color = color.new(color.red, 100), bottom_color = color.new(color.red, 50),    title = "Oversold Gradient Fill")`,"Stochastic RSI":`//@version=6
indicator(title="Stochastic RSI", shorttitle="Stoch RSI", format=format.price, precision=2, timeframe="", timeframe_gaps=true)
smoothK = input.int(3, "K", minval=1)
smoothD = input.int(3, "D", minval=1)
lengthRSI = input.int(14, "RSI Length", minval=1)
lengthStoch = input.int(14, "Stochastic Length", minval=1)
src = input(close, title="RSI Source")
rsi1 = ta.rsi(src, lengthRSI)
k = ta.sma(ta.stoch(rsi1, rsi1, rsi1, lengthStoch), smoothK)
d = ta.sma(k, smoothD)
plot(k, "K", color=#2962FF)
plot(d, "D", color=#FF6D00)
h0 = hline(80, "Upper Band", color=#787B86)
hline(50, "Middle Band", color=color.new(#787B86, 50))
h1 = hline(20, "Lower Band", color=#787B86)
fill(h0, h1, color=color.rgb(33, 150, 243, 90), title="Background")`,Supertrend:`//@version=6
indicator("Supertrend", overlay = true, timeframe = "", timeframe_gaps = true)

atrPeriod = input.int(10,    "ATR Length", minval = 1)
factor =    input.float(3.0, "Factor",     minval = 0.01, step = 0.01)

[supertrend, direction] = ta.supertrend(factor, atrPeriod)

supertrend := barstate.isfirst ? na : supertrend
upTrend =    plot(direction < 0 ? supertrend : na, "Up Trend",   color = color.green, style = plot.style_linebr)
downTrend =  plot(direction < 0 ? na : supertrend, "Down Trend", color = color.red,   style = plot.style_linebr)
bodyMiddle = plot(barstate.isfirst ? na : (open + close) / 2, "Body Middle",display = display.none)

fill(bodyMiddle, upTrend,   title = "Uptrend background",   color = color.new(color.green, 90), fillgaps = false)
fill(bodyMiddle, downTrend, title = "Downtrend background", color = color.new(color.red,   90), fillgaps = false)

alertcondition(direction[1] > direction, title='Downtrend to Uptrend', message='The Supertrend value switched from Downtrend to Uptrend ')
alertcondition(direction[1] < direction, title='Uptrend to Downtrend', message='The Supertrend value switched from Uptrend to Downtrend')
alertcondition(direction[1] != direction, title='Trend Change', message='The Supertrend value switched from Uptrend to Downtrend or vice versa')
`,"Trend Strength Index":`//@version=6
indicator("Trend Strength Index", shorttitle="TSI", format=format.price, precision=2, timeframe="", timeframe_gaps=true)

period = input.int(14, "Length", minval = 2)
tsi    = ta.correlation(close, bar_index, period)

bullishColorInput = input.color(color.new(#089981, 90), "Bullish Color")
bearishColorInput = input.color(color.new(#F23645, 90), "Bearish Color")

tsiPlot = plot(tsi, "Trend Strength Index",  color = #7E57C2)
hline( 0,           "TSI Middle Band",       color = color.new(#787B86, 50))
hline( 1,           "TSI Bullish Band",      color = color.new(bullishColorInput, 0))
hline(-1,           "TSI Bearish Band",      color = color.new(bearishColorInput, 0))

midLinePlot = plot(0, color = na, editable = false, display = display.none)
fill(tsiPlot, midLinePlot, 1,  0, top_color = bullishColorInput,  bottom_color = color.new(bullishColorInput, 100), title = "Bullish Gradient Fill")
fill(tsiPlot, midLinePlot, 0, -1, top_color = color.new(bearishColorInput, 100), bottom_color = bearishColorInput,  title = "Bearish Gradient Fill")`,"Triple EMA":`//@version=6
indicator(title="Triple EMA", shorttitle="TEMA", overlay=true, timeframe="", timeframe_gaps=true)
length = input.int(9, minval=1)
ema1 = ta.ema(close, length)
ema2 = ta.ema(ema1, length)
ema3 = ta.ema(ema2, length)
out = 3 * (ema1 - ema2) + ema3
plot(out, "TEMA", color=#2962FF)`,TRIX:`//@version=6
indicator(title="TRIX", shorttitle="TRIX", format=format.price, precision=2, timeframe="", timeframe_gaps=true)
length = input.int(18, minval=1)
out = 10000 * ta.change(ta.ema(ta.ema(ta.ema(math.log(close), length), length), length))
plot(out, color=#F44336, title="TRIX")
hline(0, color=#787B86, title="Zero")`,"True Strength Index":`//@version=6
indicator("True Strength Index", shorttitle="TSI", format=format.price, precision=4, timeframe="", timeframe_gaps=true)
long = input(title="Long Length", defval=25)
short = input(title="Short Length", defval=13)
signal = input(title="Signal Length", defval=13)
price = close
double_smooth(src, long, short) =>
	fist_smooth = ta.ema(src, long)
	ta.ema(fist_smooth, short)
pc = ta.change(price)
double_smoothed_pc = double_smooth(pc, long, short)
double_smoothed_abs_pc = double_smooth(math.abs(pc), long, short)
tsi_value = 100 * (double_smoothed_pc / double_smoothed_abs_pc)
plot(tsi_value, title="True Strength Index", color=#2962FF)
plot(ta.ema(tsi_value, signal), title="Signal", color=#E91E63)
hline(0, title="Zero", color=#787B86)`,"Ulcer Index":`//@version=6
indicator("Ulcer Index", timeframe = "", timeframe_gaps = true)

import TradingView/ta/11 as TVta

// Inputs
float sourceInput = input.source(close, "Source")
int   lengthInput = input.int(14, "Length", 1)

// Calculate and plot the Ulcer Index.
float ui = TVta.ulcerIndex(sourceInput, lengthInput)

uiPlot   = plot(ui, "Ulcer Index")
zeroPlot = plot(0, "", display = display.none, editable = false)
fill(uiPlot, zeroPlot, #2196f31a)
hline(0, "Zero")
`,"Ultimate Oscillator":`//@version=6
indicator(title="Ultimate Oscillator", shorttitle="UO", format=format.price, precision=2, timeframe="", timeframe_gaps=true)
length1 = input.int(7, minval=1, title = "Fast Length"), length2 = input.int(14, minval=1, title = "Middle Length"), length3 = input.int(28, minval=1, title = "Slow Length")
average(bp, tr_, length) => math.sum(bp, length) / math.sum(tr_, length)
high_ = math.max(high, close[1])
low_ = math.min(low, close[1])
bp = close - low_
tr_ = high_ - low_
avg7 = average(bp, tr_, length1)
avg14 = average(bp, tr_, length2)
avg28 = average(bp, tr_, length3)
out = 100 * (4*avg7 + 2*avg14 + avg28)/7
plot(out, color=#F44336, title="Oscillator")`,"Volatility Stop":`//@version=6
indicator("Volatility Stop", "VStop", overlay=true, timeframe="", timeframe_gaps=true)
length = input.int(20, "Length", minval = 2)
src = input.source(close, "Source")
factor = input.float(2.0, "Multiplier", minval = 0.25, step = 0.25)
volStop(src, atrlen, atrfactor) =>
    if not na(src)
        var max     = src
        var min     = src
        var uptrend = true
        var float stop    = na
        atrM        = nz(ta.atr(atrlen) * atrfactor, ta.tr)
        max         := math.max(max, src)
        min         := math.min(min, src)
        stop        := nz(uptrend ? math.max(stop, max - atrM) : math.min(stop, min + atrM), src)
        uptrend     := src - stop >= 0.0
        if uptrend != uptrend[1] and not barstate.isfirst
            max    := src
            min    := src
            stop   := uptrend ? max - atrM : min + atrM
        [stop, uptrend]

[vStop, uptrend] = volStop(src, length, factor)

plot(vStop, "Volatility Stop", style=plot.style_cross, color= uptrend ? #009688 : #F44336)`,"Vortex Indicator":`//@version=6
indicator(title = "Vortex Indicator", shorttitle="VI", format=format.price, precision=4, timeframe="", timeframe_gaps=true)
period_ = input.int(14, title="Length", minval=2)
VMP = math.sum( math.abs( high - low[1]), period_ )
VMM = math.sum( math.abs( low - high[1]), period_ )
STR = math.sum( ta.atr(1), period_ )
VIP = VMP / STR
VIM = VMM / STR
plot(VIP, title="VI +", color=#2962FF)
plot(VIM, title="VI -", color=#E91E63)`,"Williams Alligator":`//@version=6
indicator(title="Williams Alligator", shorttitle="Alligator", overlay=true, timeframe="", timeframe_gaps=true)
smma(src, length) =>
	smma =  0.0
	smma := na(smma[1]) ? ta.sma(src, length) : (smma[1] * (length - 1) + src) / length
	smma
jawLength = input.int(13, minval=1, title="Jaw Length")
teethLength = input.int(8, minval=1, title="Teeth Length")
lipsLength = input.int(5, minval=1, title="Lips Length")
jawOffset = input(8, title="Jaw Offset")
teethOffset = input(5, title="Teeth Offset")
lipsOffset = input(3, title="Lips Offset")
jaw = smma(hl2, jawLength)
teeth = smma(hl2, teethLength)
lips = smma(hl2, lipsLength)
plot(jaw, "Jaw", offset = jawOffset, color=#2962FF)
plot(teeth, "Teeth", offset = teethOffset, color=#E91E63)
plot(lips, "Lips", offset = lipsOffset, color=#66BB6A)`,"Williams Fractals":`//@version=6
indicator("Williams Fractals", shorttitle="Fractals", format=format.price, precision=0, overlay=true)
// Define "n" as the number of periods and keep a minimum value of 2 for error handling.
n = input.int(title="Periods", defval=2, minval=2)


// UpFractal
bool upflagDownFrontier = true
bool upflagUpFrontier0 = true
bool upflagUpFrontier1 = true
bool upflagUpFrontier2 = true
bool upflagUpFrontier3 = true
bool upflagUpFrontier4 = true

for i = 1 to n
    upflagDownFrontier := upflagDownFrontier and (high[n-i] < high[n])
    upflagUpFrontier0 := upflagUpFrontier0 and (high[n+i] < high[n])
    upflagUpFrontier1 := upflagUpFrontier1 and (high[n+1] <= high[n] and high[n+i + 1] < high[n])
    upflagUpFrontier2 := upflagUpFrontier2 and (high[n+1] <= high[n] and high[n+2] <= high[n] and high[n+i + 2] < high[n])
    upflagUpFrontier3 := upflagUpFrontier3 and (high[n+1] <= high[n] and high[n+2] <= high[n] and high[n+3] <= high[n] and high[n+i + 3] < high[n])
    upflagUpFrontier4 := upflagUpFrontier4 and (high[n+1] <= high[n] and high[n+2] <= high[n] and high[n+3] <= high[n] and high[n+4] <= high[n] and high[n+i + 4] < high[n])
flagUpFrontier = upflagUpFrontier0 or upflagUpFrontier1 or upflagUpFrontier2 or upflagUpFrontier3 or upflagUpFrontier4

upFractal = (upflagDownFrontier and flagUpFrontier)


// downFractal
bool downflagDownFrontier = true
bool downflagUpFrontier0 = true
bool downflagUpFrontier1 = true
bool downflagUpFrontier2 = true
bool downflagUpFrontier3 = true
bool downflagUpFrontier4 = true

for i = 1 to n
    downflagDownFrontier := downflagDownFrontier and (low[n-i] > low[n])
    downflagUpFrontier0 := downflagUpFrontier0 and (low[n+i] > low[n])
    downflagUpFrontier1 := downflagUpFrontier1 and (low[n+1] >= low[n] and low[n+i + 1] > low[n])
    downflagUpFrontier2 := downflagUpFrontier2 and (low[n+1] >= low[n] and low[n+2] >= low[n] and low[n+i + 2] > low[n])
    downflagUpFrontier3 := downflagUpFrontier3 and (low[n+1] >= low[n] and low[n+2] >= low[n] and low[n+3] >= low[n] and low[n+i + 3] > low[n])
    downflagUpFrontier4 := downflagUpFrontier4 and (low[n+1] >= low[n] and low[n+2] >= low[n] and low[n+3] >= low[n] and low[n+4] >= low[n] and low[n+i + 4] > low[n])
flagDownFrontier = downflagUpFrontier0 or downflagUpFrontier1 or downflagUpFrontier2 or downflagUpFrontier3 or downflagUpFrontier4

downFractal = (downflagDownFrontier and flagDownFrontier)

plotshape(downFractal, style=shape.triangledown, location=location.belowbar, offset=-n, color=#F44336, size = size.small)
plotshape(upFractal, style=shape.triangleup,   location=location.abovebar, offset=-n, color=#009688, size = size.small)`,"Williams Percent Range":`//@version=6
indicator("Williams Percent Range", shorttitle="Williams %R", format=format.price, precision=2, timeframe="", timeframe_gaps=true)
length = input(title="Length", defval=14)
src = input(close, "Source")
_pr(length) =>
	max = ta.highest(length)
	min = ta.lowest(length)
	100 * (src - max) / (max - min)
percentR = _pr(length)
obPlot = hline(-20, title="Upper Band", color=#787B86)
hline(-50, title="Middle Level", linestyle=hline.style_dotted, color=#787B86)
osPlot = hline(-80, title="Lower Band", color=#787B86)
fill(obPlot, osPlot, title="Background", color=color.rgb(126, 87, 194, 90))
plot(percentR, title="%R", color=#7E57C2)`,"Woodies CCI":`//@version=6
indicator(title="Woodies CCI", timeframe="", timeframe_gaps=true)
cciTurboLength = input.int(title="CCI Turbo Length", defval=6, minval=3, maxval=14)
cci14Length = input.int(title="CCI 14 Length", defval=14, minval=7, maxval=20)
source = close
cciTurbo = ta.cci(source, cciTurboLength)
cci14 = ta.cci(source, cci14Length)
last5IsDown = cci14[5] < 0 and cci14[4] < 0 and cci14[3] < 0 and cci14[2] < 0 and cci14[1] < 0
last5IsUp = cci14[5] > 0 and cci14[4] > 0 and cci14[3] > 0 and cci14[2] > 0 and cci14[1] > 0
histogramColor = last5IsUp ? #009688 : last5IsDown ? #F44336 : cci14 < 0 ? #009688 : #F44336
plot(cci14, title="CCI Turbo Histogram", color=histogramColor, style=plot.style_histogram)
plot(cciTurbo, title="CCI Turbo", color=#009688 , style=plot.style_line)
plot(cci14, title="CCI 14", color= #F44336, style=plot.style_line)
hline(0, title="Zero Line", color=#787B86, linestyle=hline.style_solid)
hline(100, title="Hundred Line", color=#787B86, linestyle=hline.style_dotted)
hline(-100, title="Minus Line", color=#787B86, linestyle=hline.style_dotted)`},U={"TradingView/ta/11":`// This Pine Script® code is subject to the terms of the Mozilla Public License 2.0 at https://mozilla.org/MPL/2.0/
// © TradingView

//@version=6
library("ta")

// "ta" Library
// v12, 2025.12.06

// This code's style is based on the recommendations from the Pine Script User Manual's Style guide:
//    https://www.tradingview.com/pine-script-docs/writing/style-guide/



import TradingView/RelativeValue/3 as TVrv



// This library exports the following functions:

// • ao():                     Awesome Oscillator
// • aroon():                  Aroon Indicator
// • atr2():                   Average True Range (Alternative version)
// • cagr():                   Compound Annual Growth Rate
// • chandelier():             Chandelier Exit
// • chandelier2():            Chandelier Exit (Alternative version)
// • changePercent():          Calculate percentage change
// • coppock():                Coppock Curve
// • dema():                   Double Exponential Moving Average
// • dema2():                  Double Exponential Moving Average (Alternative version)
// • dm():                     Demarker Indicator
// • donchian():               Donchian Channel
// • ema2():                   Exponential Moving Average (Alternative version)
// • eom():                    Ease of Movement
// • er():                     Kaufman's Efficiency Ratio
// • frama():                  Fractal Adaptive Moving Average
// • ft():                     Fisher Transform
// • highestSince():           Highest value since condition
// • ht():                     Hilbert Transform function
// • ichimoku():               Ichimoku Cloud
// • ift():                    Inverse Fisher Transform
// • kama():                   Kaufman's Adaptive Moving Average
// • kvo():                    Klinger Volume Oscillator
// • lowestSince():            Lowest value since condition
// • macd2():                  Moving Average Convergence Divergence (Alternative version)
// • pmo():                    Price Momentum Oscillator
// • ppo():                    Percentage Price Oscillator
// • ppo2():                   Percentage Price Oscillator (Alternative version)
// • pzo():                    Price Zone Oscillator
// • relativeVolume():         Compare volume to its historical average
// • requestUpAndDownVolume(): Requests up/down volume data for a specified lower timeframe.
// • requestVolumeDelta():     Requests volume delta or cumulative volume delta from a specified lower timeframe.
// • rma2():                   Rolling Moving Average (Alternative version)
// • rms():                    Root Mean Square
// • rwi():                    Random Walk Index
// • specialK():               Pring's Special K
// • stc():                    Schaff Trend Cycle
// • stochFull():              Full Stochastic Oscillator
// • stochRsi():               Stochastic RSI
// • supertrend():             SuperTrend Indicator
// • supertrend2():            SuperTrend Indicator (Alternative version)
// • szo():                    Sentiment Zone Oscillator
// • t3():                     Tilson Moving Average (T3)
// • t3Alt():                  Tilson Moving Average (T3 Alternative version)
// • tema():                   Triple Exponential Moving Average
// • tema2():                  Triple Exponential Moving Average (Alternative version)
// • trima():                  Triangular Moving Average
// • trix():                   TRIX indicator
// • ulcerIndex():             Ulcer Index
// • uo():                     Ultimate Oscillator
// • vhf():                    Vertical Horizontal Filter
// • vi():                     Vortex Indicator
// • vStop():                  Volatility Stop
// • vStop2():                 Volatility Stop (Alternative version)
// • vzo():                    Volume Zone Oscillator
// • williamsFractal():        Williams' Fractal
// • wpo():                    Wave Period Oscillator



// @function                Calculates the dynamic Exponentially Weighted Moving Average used in
//                          multiple functions exported by this library.
// @param source            (series int/float) Series of values to process.
// @param alpha             (series int/float) The smoothing factor for the filter.
// @returns                 The dynamic exponentially weighted moving average value.
ewma(series float source, series float alpha) =>
    if alpha < 0
        runtime.error("Invalid smoothing factor. The value must not be negative.")
    float result = na
    result := alpha * source + (1.0 - alpha) * nz(result[1], source)


// @function                Calculates the value of the Awesome Oscillator.
// @param source            (series int/float) Series of values to process.
// @param shortLength       (simple int) Number of bars for the fast moving average.
// @param longLength        (simple int) Number of bars for the slow moving average.
// @returns                 (float) The oscillator value.
export ao(series float source = hl2, simple int shortLength = 5, simple int longLength = 34) =>
    float result = ta.sma(source, shortLength) - ta.sma(source, longLength)


// @function                Calculates the values of the Aroon indicator.
// @param length            (simple int) Number of bars (lookback length).
// @returns                 ([float, float]) A tuple of the Aroon-Up and Aroon-Down values.
export aroon(simple int length) =>
    float aroonDown = 100 * (ta.lowestbars(low,   length + 1) + length) / length
    float aroonUp   = 100 * (ta.highestbars(high, length + 1) + length) / length
    [aroonUp, aroonDown]


// @function                An alternative function to \`ta.atr()\` that supports a "series float" length value.
// @param length            (series int/float) Length for the smoothing factor calculation.
// @returns                 (float) The ATR value.
export atr2(series float length) =>
    if length < 1
        runtime.error(str.format("Invalid length ({0}). The value must be greater than or equal to 1.", length))
    float alpha  = 1.0 / length
    float result = ewma(ta.tr(true), alpha)


// @function                Calculates the "Compound Annual Growth Rate" between two points in time.
// @param entryTime         (series int) The starting timestamp.
// @param entryPrice        (series int/float) The starting point's price.
// @param exitTime          (series int) The ending timestamp.
// @param exitPrice         (series int/float) The ending point's price.
// @returns                 (float) CAGR in % (50 is 50%). Returns \`na\` if there is not >=1D between \`entryTime\` and
//                          \`exitTime\`, or until the two time points have not been reached by the script.
export cagr(series int entryTime, series float entryPrice, series int exitTime, series float exitPrice) =>
    int   MS_IN_ONE_DAY = 24 * 60 * 60 * 1000
    float daysBetween = (exitTime - entryTime) / MS_IN_ONE_DAY
    float result = if daysBetween >= 1 and not (na(entryPrice) or na(exitPrice))
        float years = daysBetween / 365.
        float rate  = exitPrice / entryPrice
        100 * (math.pow(rate, 1 / years) - 1)
    else
        na


// @function                Calculates the long and short Chandelier Exit values. The long value subtracts
//                          Average True Range (ATR), multiplied by a specified amount, from the highest high over
//                          \`length\` bars. The short value adds the ATR to the lowest low over those bars.
// @param length            (series int) The number of bars for the highest high and lowest low.
// @param atrLength         (simple int) The ATR length.
// @param mult              (series int/float) The ATR multiplier.
// @returns                 ([float, float]) A tuple containing the following values:
//                           - The long Chandelier Exit value.
//                           - The short Chandelier Exit value.
export chandelier(series int length, simple int atrLength, series float mult) =>
    float atr = ta.atr(atrLength) * mult
    [ta.highest(length) - atr, ta.lowest(length) + atr]


// @function                An alternative function to \`chandelier()\` that supports a "series float" ATR length.
// @param length            (series int) The number of bars for the highest high and lowest low.
// @param atrLength         (series int/float) The ATR length.
// @param mult              (series int/float) The ATR multiplier.
// @returns                 ([float, float]) A tuple containing the following values:
//                           - The long Chandelier Exit value.
//                           - The short Chandelier Exit value.
export chandelier2(series int length, series float atrLength, series float mult) =>
    float atr = atr2(atrLength) * mult
    [ta.highest(length) - atr, ta.lowest(length) + atr]


// @function                Calculates the percentage difference between two values.
// @param newValue          (series int/float) The current value.
// @param oldValue          (series int/float) The previous value.
// @returns                 (float) The difference between \`oldValue\` and \`newValue\`, expressed as a percentage of
//                          \`oldValue\`.
export changePercent(series float newValue, series float oldValue) =>
    float result = 100 * (newValue - oldValue) / oldValue


// @function                Calculates the value of the Coppock Curve indicator.
// @param source            (series int/float) Series of values to process.
// @param longLength        (simple int) Number of bars back for the longer rate of change (ROC).
// @param shortLength       (simple int) Number of bars back for the shorter ROC.
// @param smoothLength      (simple int) Number of bars for the weigted moving average smoothing.
// @returns                 (float) The oscillator value.
export coppock(series float source, simple int longLength, simple int shortLength, simple int smoothLength) =>
    float result = ta.wma(ta.roc(source, longLength) + ta.roc(source, shortLength), smoothLength)


// @function                Calculates the value of the Double Exponential Moving Average (DEMA).
// @param source            (series int/float) Series of values to process.
// @param length            (simple int) Length for the smoothing factor calculation.
// @returns                 (float) The double exponentially weighted moving average of the \`source\`.
export dema(series float source, simple int length) =>
    float ema1   = ta.ema(source, length)
    float ema2   = ta.ema(ema1, length)
    float result = 2 * ema1 - ema2


// @function                An alternative function to \`ta.ema()\` that supports a "series float" length value.
// @param source            (series int/float) Series of values to process.
// @param length            (series int/float) Length for the smoothing factor calculation.
// @returns                 (float) The exponentially weighted moving average of the \`source\`.
export ema2(series float source, series float length) =>
    if length < 1
        runtime.error(str.format("Invalid length ({0}). The value must be greater than or equal to 1.", length))
    float alpha  = 2.0 / (math.max(1.0, length) + 1.0)
    float result = ewma(source, alpha)


// @function                An alternative function to \`dema()\` that supports a "series float" length value.
// @param source            (series int/float) Series of values to process.
// @param length            (series int/float) Length for the smoothing factor calculation.
// @returns                 (float) The double exponentially weighted moving average of the \`source\`.
export dema2(series float source, series float length) =>
    float ema1   = ema2(source, length)
    float ema2   = ema2(ema1, length)
    float result = 2 * ema1 - ema2


// @function                Calculates the value of the "Demarker" indicator.
//                          "DeMark®" is a registered trademark of DeMark Analytics, LLC. This code is neither
//                          endorsed, nor sponsored, nor affiliated with them.
// @param length            (simple int) Number of bars (lookback length).
// @returns                 (float) The oscillator value.
export dm(simple int length) =>
	float demax  =  math.max(ta.change(high), 0)
	float demin  = -math.min(ta.change(low),  0)
	float result =  ta.sma(demax, length) / (ta.sma(demax, length) + ta.sma(demin, length))


// @function                Calculates the values of a Donchian Channel using \`high\` and \`low\` over a given \`length\`.
// @param length            (series int) Number of bars (lookback length).
// @returns                 ([float, float, float]) A tuple containing the channel high, low, and median, respectively.
export donchian(series int length) =>
    float highest = ta.highest(length)
    float lowest  = ta.lowest(length)
    [highest, lowest, math.avg(highest, lowest)]


// @function                Calculates the value of the Ease of Movement indicator.
// @param length            (simple int) Number of bars (lookback length).
// @param div               (simple int) Optional. The factor for normalzing values. The default is 10000.
// @returns                 (float) The Ease of Movement value.
export eom(simple int length, simple int div = 10000) =>
    float result = ta.sma(div * ta.change(hl2) * (high - low) / volume, length)


// @function                Calculates Kaufman's Efficiency Ratio (ER), which represents the absolute change in a
//                          \`source\` series over \`length\` bars divided by the sum of absolute single-bar changes over
//                          the same length.
// @param source            (series int/float) Series of values to process.
// @param length            (series int) Number of bars (lookback length).
// @returns                 (float) The Efficiency Ratio of \`source\`.
export er(series float source, series int length) =>
    float absChange  = math.abs(ta.change(source, length))
    float sumChanges = math.sum(math.abs(ta.change(source)), length)
    float result = sumChanges == 0.0 ? 0.0 : absChange / sumChanges


// @function                Calculates the Fractal Adaptive Moving Average (FRAMA) by John Ehlers. FRAMA is an adaptive
//                          EMA-based filter that dynamically adjusts its smoothing factor based on fractal geometry.
// @param source            (series int/float) Series of values to process.
// @param length            (series int) Number of bars for the fractal dimension estimate.
// @returns                 (float) The Fractal Adaptive Moving Average of \`source\`.
export frama(series float source, series int length) =>
    int   len    = math.round(length / 2)
    float hh     = ta.highest(len)
    float ll     = ta.lowest(len)
    float n1     = (hh - ll) / len
    float n2     = (hh[len] - ll[len]) / len
    float n3     = (ta.highest(length) - ta.lowest(length)) / length
    float D      = math.log((n1 + n2) / n3) / math.log(2)
    float alpha  = math.exp(-4.6 * (D - 1))
    float result = ewma(source, alpha)


// @function                Calculates the value of the Fisher Transform indicator.
// @param source            (series int/float) Series of values to process.
// @param length            (simple int) Number of bars (lookback length).
// @returns                 (float) The oscillator value.
export ft(series float source, simple int length) =>
    float value1 = 0.0
    float fish   = 0.0
    float hh = ta.highest(source, length)
    float ll = ta.lowest(source,  length)
    value1 := 0.66 * ((source - ll) / (hh - ll) - 0.5) + 0.67 * nz(value1[1])
    float value2 = value1 > 0.99 ? 0.999 : value1 < -0.99 ? -0.999 : value1
    fish := 0.5 * math.log((1 + value2) / (1 - value2)) + 0.5 * nz(fish[1])
    float result = fish


// @function                Tracks the highest value of a series since the last occurrence of a condition.
// @param cond              (series bool) A condition which, when \`true\`, resets the tracking of the highest \`source\`.
// @param source            (series int/float) Optional. Series of values to process. The default is \`high\`.
// @returns                 (float) The highest \`source\` value since the last time the \`cond\` value was \`true\`.
export highestSince(series bool cond, series float source = high) =>
    var float result = na
    if cond
        result := source
    result := math.max(nz(source, result), nz(result, source))


// @function                Calculates the value of the Hilbert Transform indicator.
// @param source            (series int/float) Series of values to process.
// @returns                 (float) The oscillator value.
export ht(series float source) =>
    float result = 0.0962 * source + 0.5769 * nz(source[2]) - 0.5769 * nz(source[4]) - 0.0962 * nz(source[6])


// @function                Calculates the midpoint between the highest \`high\` and lowest \`low\` over \`length\` bars.
// @param length            (series int) Number of bars (lookback length).
// @returns                 The midpoint of the data.
midpoint(series int length) =>
    float result = math.avg(ta.highest(length), ta.lowest(length))


// @function                Calculates values of the Ichimoku Cloud indicator, including tenkan, kijun, senkouSpan1,
//                          senkouSpan2, and chikou.
//                          NOTE: offsets forward or backward can be done using the \`offset\` argument in \`plot()\`.
// @param conLength         (series int) Length for the Conversion Line (Tenkan). The default is 9 periods, which
//                          returns the midpoint of the 9 period Donchian Channel.
// @param baseLength        (series int) Length for the Base Line (Kijun-sen). The default is 26 periods, which returns
//                          the midpoint of the 26 period Donchian Channel.
// @param senkouLength      (series int) Length for the Senkou Span 2 (Leading Span B). The default is 52 periods,
//                          which returns the midpoint of the 52 period Donchian Channel.
// @returns                 ([float, float, float, float, float]) A tuple of the Tenkan, Kijun, Senkou Span 1,
//                          Senkou Span 2, and Chikou Span values. NOTE: by default, the senkouSpan1 and senkouSpan2
//                          should be plotted 26 periods in the future, and the Chikou Span plotted 26 days in the past.
export ichimoku(series int conLength = 9, series int baseLength = 26, series int senkouLength = 52) =>
    float tenkan      = midpoint(conLength)
    float kijun       = midpoint(baseLength)
    float senkouSpan1 = math.avg(tenkan, kijun)
    float senkouSpan2 = midpoint(senkouLength)
    float chikou      = close
    [tenkan, kijun, senkouSpan1, senkouSpan2, chikou]


// @function                Calculates the value of the Inverse Fisher Transform indicator.
// @param source            (series int/float) Series of values to process.
// @returns                 (float) The oscillator value.
export ift(series float source) =>
    float exp    = math.exp(2.0 * source)
    float result = (exp - 1.0) / (1.0 + exp)


// @function                Calculates Kaufman's Adaptive Moving Average (KAMA). KAMA is an EMA-based filter that
//                          dynamically adjusts its smoothing factor based on the value of Kaufman's Efficiency Ratio
//                          (ER). It moves toward price at a slower rate when ER is low, and at a faster rate when
//                          ER is high.
// @param source            (series int/float) Series of values to process.
// @param erLen             (series int) Length for the ER calculation.
// @param fastLen           (series int/float) Length for the fastest smoothing response.
// @param slowLen           (series int/float) Length for the slowest smoothing response.
// @returns                 (float) The KAMA of \`source\`.
export kama(series float source, series int erLen, series float fastLen, series float slowLen) =>
    float alphaFast = 2.0 / (fastLen + 1.0)
    float alphaSlow = 2.0 / (slowLen + 1.0)
    float alpha     = math.pow(er(source, erLen) * (alphaFast - alphaSlow) + alphaSlow, 2)
    float result    = ewma(source, alpha)


// @function                Calculates the values of the Klinger Volume Oscillator.
// @param fastLen           (simple int) Length for the fast EMA smoothing factor.
// @param slowLen           (simple int) Length for the slow EMA smoothing factor.
// @param trigLen           (simple int) Length for the trigger EMA smoothing factor.
// @returns                 ([float, float]) A tuple containing the KVO value and the trigger value.
export kvo(simple int fastLen, simple int slowLen, simple int trigLen) =>
    float trend   = math.sign(ta.change(hlc3)) * volume * 100
    float fast    = ta.ema(trend, fastLen)
    float slow    = ta.ema(trend, slowLen)
    float kvo     = fast - slow
    float trigger = ta.ema(kvo, trigLen)
    [kvo, trigger]


// @function                Tracks the lowest value of a series since the last occurrence of a condition.
// @param cond              (series bool) A condition which, when \`true\`, resets the tracking of the lowest \`source\`.
// @param source            (series int/float) Optional. Series of values to process. The default is \`low\`.
// @returns                 (float) The lowest \`source\` value since the last time the \`cond\` value was \`true\`.
export lowestSince(series bool cond, series float source = low) =>
    var float result = na
    if cond
        result := source
    result := math.min(nz(source, result), nz(result, source))


// @function                An alternative function to \`ta.macd()\` that supports "series float" EMA length values.
// @param source            (series int/float) Series of values to process.
// @param fastLen           (series int/float) The length for the fast EMA smoothing factor.
// @param slowLen           (series int/float) The length for the slow EMA smoothing factor.
// @param sigLen            (series int/float) The length for the signal EMA smoothing factor.
// @returns                 ([float, float, float]) A tuple containing the following values:
//                           - The Moving Average Convergence Divergence (MACD) value.
//                           - The EMA of the MACD (signal line).
//                           - The histogram value, representing the difference between the MACD and signal values.
export macd2(series float source, series float fastLen, series float slowLen, series float sigLen) =>
    float maFast = ema2(source, fastLen)
    float maSlow = ema2(source, slowLen)
    float macd   = maFast - maSlow
    float signal = ema2(macd, sigLen)
    float hist   = macd - signal
    [macd, signal, hist]


// @function                Calculates the values of the Price Momentum Oscillator (PMO). The PMO is a twice-smoothed
//                          percentage rate of change in a \`source\` series, typically accompanied by a smooth signal
//                          line.
// @param source            (series int/float) Series of values to process.
// @param length1           (series int/float) The first smoothing length.
// @param length2           (series int/float) The second smoothing length.
// @param sigLen            (series int/float) Signal EMA smoothing length.
// @returns                 ([float, float]) A tuple containing the following values:
//                           - The Price Momentum Oscillator.
//                           - The EMA of the PMO (signal line).
export pmo(series float source, series float length1, series float length2, series float sigLen) =>
    float roc    = ta.roc(source, 1)
    float pmo    = ewma(10.0 * ewma(roc, 2.0 / length1), 2.0 / length2)
    float signal = ema2(pmo, sigLen)
    [pmo, signal]


// @function                Calculates the values of the Percentage Price Oscillator (PPO). The PPO is a momentum
//                          oscillator that measures the difference between two EMAs as a percentage of the slower
//                          moving average.
// @param source            (series int/float) Series of values to process.
// @param fastLen           (simple int) The length for the fast EMA smoothing factor.
// @param slowLen           (simple int) The length for the slow EMA smoothing factor.
// @param sigLen            (simple int) The length for the signal EMA smoothing factor.
// @returns                 ([float, float, float]) A tuple containing the following values:
//                           - The Percentage Price Oscillator.
//                           - The EMA of the PPO (signal line).
//                           - The histogram value, representing the difference between the PPO and signal values.
export ppo(series float source, simple int fastLen, simple int slowLen, simple int sigLen) =>
    float maFast = ta.ema(source, fastLen)
    float maSlow = ta.ema(source, slowLen)
    float ppo    = changePercent(maFast, maSlow)
    float signal = ta.ema(ppo, sigLen)
    float hist   = ppo - signal
    [ppo, signal, hist]


// @function                An alternative function to \`ppo()\` that supports "series float" EMA length values.
// @param source            (series int/float) Series of values to process.
// @param fastLen           (series int/float) The length for the fast EMA smoothing factor.
// @param slowLen           (series int/float) The length for the slow EMA smoothing factor.
// @param sigLen            (series int/float) The length for the signal EMA smoothing factor.
// @returns                 ([float, float, float]) A tuple containing the following values:
//                           - The Percentage Price Oscillator.
//                           - The EMA of the PPO (signal line).
//                           - The histogram value, representing the difference between the PPO and signal values.
export ppo2(series float source, series float fastLen, series float slowLen, series float sigLen) =>
    float maFast = ema2(source, fastLen)
    float maSlow = ema2(source, slowLen)
    float ppo    = changePercent(maFast, maSlow)
    float signal = ema2(ppo, sigLen)
    float hist   = ppo - signal
    [ppo, signal, hist]


// @function                The "zone" calculation used in \`pzo()\` and \`vzo()\` functions.
// @param source            (series int/float) Series of values to process.
// @param length            (simple int) Length for the smoothing factor calculation.
// @returns                 (float) The oscillator value.
zone(series float source, simple int length) =>
    float result = 100 * nz(ta.ema(math.sign(ta.change(close)) * source, length) / ta.ema(source, length))


// @function                Calculates the value of the Price Zone Oscillator.
// @param length            (simple int) Length for the smoothing factor calculation.
// @returns                 (float) The oscillator value.
export pzo(simple int length) =>
    float result = zone(close, length)


// @function                Calculates the volume since the last change in the time value from the
//                          \`anchorTimeframe\`, the historical average volume using bars from past periods
//                          that have the same relative time offset as the current bar from the start of its
//                          period, and the ratio of these volumes. The volume values are cumulative by default,
//                          but can be adjusted to non-accumulated with the \`isCumulative\` parameter.
// @param length            (simple int) The number of periods to use for the historical average calculation.
// @param anchorTimeframe   (simple string) Optional. The anchor timeframe used in the calculation. The default is "1D".
// @param isCumulative      (simple bool) Optional. If \`true\`, the function accumulates volume values across each
//                          \`anchorTimeframe\` period. If \`false\`, the function uses non-cumulative volume. The
//                          default is \`true\`.
// @param adjustRealtime    (simple bool) Optional. If \`true\`, estimates the cumulative value on open bars based on the
//                          confirmed data since the last \`anchor\` condition. The default is \`false\`.
// @returns                 ([float, float, float]) A tuple containing the following data:
//                           - The current volume.
//                           - The average of volume values at equivalent time offsets from past anchors over the number
//                             of periods.
//                           - The ratio of the current volume to the historical average volume.
export relativeVolume(
     simple int  length,              simple string anchorTimeframe = "1D",
     simple bool isCumulative = true, simple bool   adjustRealtime  = true
 ) =>
    bool  anchor   = timeframe.change(anchorTimeframe)
    float currVol  = isCumulative ? TVrv.calcCumulativeSeries(volume, anchor, adjustRealtime) : volume
    float pastVol  = TVrv.averageAtTime(volume, length, anchorTimeframe, isCumulative)
    float volRatio = currVol / pastVol
    [currVol, pastVol, volRatio]


// @function                A helper function for use in \`upAndDownVolumeCalc()\`. It classifies the bar's data as
//                          positive or negative based on the values of \`open\` and \`close\`. The \`upAndDownVolumeCalc()\`
//                          function uses this helper to categorize volume data when it cannot directly determine
//                          the category using \`bid\` and \`ask\` values.
// @param currentValue      (series bool) Represents the latest category assigned to the data: \`true\` for positive, and
//                          \`false\` for negative. The function returns this value if the price-based conditions do not
//                          produce a different result.
// @returns                 (bool) \`true\` if the current bar's data is considered positive, and \`false\` otherwise.
priceCalc(series bool currentValue)=>
    bool result = switch
        close > open     => true
        close < open     => false
        close > close[1] => true
        close < close[1] => false
        => currentValue


// @function                A helper function for use in \`requestUpAndDownVolume()\` and \`requestVolumeDelta()\`. It
//                          calculates sums of polarized (positive and negative) \`volume\` values within a bar on
//                          script's main timeframe, and uses the sums to compute the bar's volume delta. The function
//                          also tracks the highest and lowest volume delta values observed within the bar.
//
//                          If the timeframe is "1T", and the values of \`bid\` and \`ask\` are *not* equal, the function
//                          uses the following logic to categorize each \`volume\` value as positive or negative:
//                              - If the \`close\` value is greater than or equal to the \`ask\` value, the volume is
//                                positive.
//                              - If the \`close\` value is less than or equal to the \`bid\` value, the volume is negative.
//                              - If the \`close\` value is *between* the \`bid\` and \`ask\` values, the volume is positive
//                                if the \`close\` value is greater than the median of those values, or negative if the
//                                value is less than the median.
//
//                          If the timeframe is higher than "1T", the \`bid\` and \`ask\` values are equal, or the \`close\`
//                          value equals the median of the \`bid\` and \`ask\` values, the function calls \`priceCalc()\` to
//                          use the following logic instead:
//                              - If the \`close\` value is greater than the \`open\` value, the volume is positive.
//                              - If the \`close\` value is less than the \`open\` value, the volume is negative.
//                              - If the \`close\` and \`open\` values are equal, the volume is positive if the current
//                                \`close\` value is greater than the previous value, or negative if the current value is
//                                less than the previous value.
//                              - If none of the above conditions apply, the current volume has the same positive or
//                                negative status as that of the previous bar's volume.
//
//                          NOTE: This function is intended for use in *lower-timeframe (LTF)* requests, as demonstrated
//                          by this library's \`requestUpAndDownVolume()\` and \`requestVolumeDelta()\` functions.
//                          When used in an LTF request, the function's results represent data calculated from
//                          the available intrabars within the *current bar* on the script's *main timeframe*. The
//                          calculations reset at the open of each bar on that timeframe.
// @returns                 ([float, float, float, float, float]) A tuple containing the following values:
//                              - The total positive (up) volume within the bar on the script's main timeframe.
//                              - The total negative (down) volume within the bar, expressed as a negative quantity.
//                              - The bar's volume delta (i.e., the net difference between up and down volume).
//                              - The highest volume delta observed within the bar.
//                              - The lowest volume delta observed within the bar.
upAndDownVolumeCalc() =>
    var float posVol      = 0.0
    var float negVol      = 0.0
    var float hiVol       = 0.0
    var float loVol       = 0.0
    var bool  isBuyVolume = close >= open
    bool newBar = switch
        timeframe.isticks => ta.change(request.security("", timeframe.main_period, time)) > 0
        => timeframe.change(timeframe.main_period)
    if newBar
        posVol := 0.0
        negVol := 0.0
        hiVol  := 0.0
        loVol  := 0.0
    if timeframe.isticks
        float avg = math.avg(ask, bid)
        isBuyVolume := switch
            close == ask and close == bid => priceCalc(isBuyVolume)
            close >= ask => true
            close <= bid => false
            close >  avg => true
            close <  avg => false
            => priceCalc(isBuyVolume)
    else
        isBuyVolume := priceCalc(isBuyVolume)
    if isBuyVolume
        posVol += volume
    else
        negVol -= volume
    float delta = posVol + negVol
    hiVol := math.max(delta, hiVol)
    loVol := math.min(delta, loVol)
    [posVol, negVol, delta, hiVol, loVol]


// @function                Checks whether a specified timeframe string represents a smaller timeframe than the
//                          script's main timeframe. If the specified string represents a higher timeframe, the
//                          function raises a runtime error.
// @param lowerTimeframe    (series string) The timeframe string to inspect.
// @returns                 (void) The function does not return a usable value.
checkLTF(series string lowerTimeframe) =>
    if timeframe.in_seconds(lowerTimeframe) > timeframe.in_seconds(timeframe.main_period)
        runtime.error(
             str.format(
                 "Invalid lower timeframe: {2}{0}{2}. The timeframe must be lower than or equal to {2}{1}{2}",
                 lowerTimeframe, timeframe.main_period, "'"
             )
         )


// @function                Requests data from a specified lower timeframe and categorizes the volume of each intrabar
//                          within the chart bar as positive (up) or negative (down). The function uses this polarized
//                          volume data to calculate the total positive volume, total negative volume, and volume delta
//                          for a bar on the script's main timeframe.
//
//                          Calls to this function count toward a script's \`request.*()\` call limit.
// @param lowerTimeframe    (series string) The timeframe of the requested intrabar data. Accepts a valid timeframe
//                          string (e.g., "5", "15", "1D"), an empty string, \`timeframe.period\`, or
//                          \`timeframe.main_period\`. Smaller timeframes provide higher precision but cover fewer bars
//                          on the script's main timeframe. Larger timeframes cover more bars on the script's main
//                          timeframe but offer less granularity. If the specified timeframe is higher than the script's
//                          main timeframe, it causes a runtime error.
// @returns                 ([float, float, float]) A tuple containing the following values:
//                              - The total positive (up) intrabar volume within the bar on the script's main timeframe.
//                              - The total negative (down) intrabar volume within the bar on the script's main
//                                timeframe, expressed as a negative quantity.
//                              - The bar's volume delta (i.e., the net difference between up and down intrabar volume).
export requestUpAndDownVolume(series string lowerTimeframe) =>
    checkLTF(lowerTimeframe)
    [posVol, negVol, delta, _, _] = request.security(syminfo.tickerid, lowerTimeframe, upAndDownVolumeCalc())
    [posVol, negVol, delta]


// @function                Requests data from a specified lower timeframe and categorizes the volume of each
//                          intrabar within a bar on the script's main timeframe as positive (up) or negative (down).
//                          The function uses this information to calculate the bar's volume delta, i.e., the difference
//                          between the total up and down intrabar volume.
//
//                          If the call specifies a \`cumulativePeriod\` argument representing a period larger than the
//                          main timeframe, it calculates the cumulative volume delta (CVD), which is a running sum
//                          of volume delta across all bars within the period. In addition, the function tracks the
//                          highest and lowest CVD values calculated within each bar over the period. The sum and
//                          highest/lowest calculations reset when a new period starts.
//
//                          Calls to this function count toward a script's \`request.*()\` call limit.
// @param lowerTimeframe    (series string) The timeframe of the requested intrabar data. Accepts a valid timeframe
//                          string (e.g., "5", "15", "1D"), an empty string, \`timeframe.period\`, or
//                          \`timeframe.main_period\`. Smaller timeframes provide higher precision but cover fewer bars
//                          on the script's main timeframe. Larger timeframes cover more bars on the script's main
//                          timeframe but offer less granularity. If the specified timeframe is higher than the script's
//                          main timeframe, it causes a runtime error.
// @param cumulativePeriod  (series string) Determines the span of the CVD period. Accepts a valid timeframe string
//                          (e.g., "5", "15", "1D"), an empty string, \`timeframe.period\`, or \`timeframe.main_period\`.
//                          The calculations reset after a new period starts. For example, a value of "1D" means that
//                          the function accumulates and tracks the values from each bar within a "1D" period and resets
//                          at the open of a new "1D" bar.
// @returns                 ([float, float, float, float]) A tuple containing the following values:
//                              - The opening volume delta/CVD at the start the bar on the script's main timeframe.
//                                This value is always 0 when a new cumulative period starts.
//                              - The maximum volume delta/CVD within the current cumulative period.
//                              - The minimum volume delta/CVD within the current cumulative period.
//                              - The current volume delta/CVD value.
export requestVolumeDelta(series string lowerTimeframe, series string cumulativePeriod = "") =>
    checkLTF(lowerTimeframe)
    [_, _, delta, maxVolume, minVolume] = request.security(syminfo.tickerid, lowerTimeframe, upAndDownVolumeCalc())
    var float lastVolume = 0.0
    bool anchorChange = str.length(str.trim(cumulativePeriod)) == 0 or
         timeframe.change(cumulativePeriod) or (not na(lastVolume) and na(lastVolume[1]))
    float openVolume = anchorChange ? 0.0 : lastVolume[1]
    float hiVolume  = openVolume + maxVolume
    float loVolume  = openVolume + minVolume
    lastVolume := openVolume + delta
    [openVolume, hiVolume, loVolume, lastVolume]


// @function                An alternative function to \`ta.rma()\` that supports a "series float" length value.
// @param source            (series int/float) Series of values to process.
// @param length            (series int/float) Length for the smoothing factor calculation.
// @returns                 (float) The rolling moving average of the \`source\`.
export rma2(series float source, series float length) =>
    if length < 1
        runtime.error(str.format("Invalid length ({0}). The value must be greater than or equal to 1.", length))
    float alpha  = 1.0 / length
    float result = ewma(source, alpha)


// @function                Calculates the Root Mean Square of the \`source\` over a specified lookback length.
// @param source            (series int/float) Series of values to process.
// @param length            (series int) Number of bars (lookback length).
// @returns                 (float) The RMS value.
export rms(series float source, series int length) =>
    float result = math.sqrt(math.sum(math.pow(source, 2), length) / length)


// @function                Calculates the values of the Random Walk Index.
// @param length            (simple int) Lookback and ATR length.
// @returns                 ([float, float]) A tuple of the \`rwiHigh\` and \`rwiLow\` values.
export rwi(simple int length) =>
    float divisor = ta.atr(length) * math.sqrt(length)
    float rwiHigh = (high - nz(low[length])) / divisor
    float rwiLow  = (nz(high[length]) - low) / divisor
    [rwiHigh, rwiLow]


// @function                Calculates the values of Pring's Special K indicator. The Spcial K is a weighted sum of
//                          smoothed rates of change over multiple lengths, accompanied by a twice-smoothed signal
//                          line. The lengths and weights are derived from Martin Pring's market observations.
// @param source            (series int/float) Series of values to process.
// @param sigLen1           (series int) The first smoothing length for the signal line.
// @param sigLen2           (series int) The second smoothing length for the signal line.
// @returns                 ([float, float]) A tuple containing the following values:
//                           - The Special K value.
//                           - The twice-smoothed signal line of the Special K.
export specialK(series float source, series int sigLen1, series int sigLen2) =>
    float sk =
                  ta.sma(ta.roc(source, 10), 10) + ta.sma(ta.roc(source,  40),  50) + ta.sma(ta.roc(source, 195), 130)
         + 2.0 * (ta.sma(ta.roc(source, 15), 10) + ta.sma(ta.roc(source,  65),  65) + ta.sma(ta.roc(source, 265), 130))
         + 3.0 * (ta.sma(ta.roc(source, 20), 10) + ta.sma(ta.roc(source,  75),  75) + ta.sma(ta.roc(source, 390), 130))
         + 4.0 * (ta.sma(ta.roc(source, 30), 15) + ta.sma(ta.roc(source, 100), 100) + ta.sma(ta.roc(source, 530), 195))
    float signal = ta.sma(ta.sma(sk, sigLen1), sigLen2)
    [sk, signal]


// @function                Calculates the Schaff Trend Cycle indicator.
// @param source            (series int/float) Series of values to process.
// @param fast              (simple int) Length for the MACD fast smoothing factor.
// @param slow              (simple int) Length for the MACD slow smoothing factor.
// @param cycle             (simple int) Number of bars for the Stochastic calculation.
// @param d1                (simple int) Length for the initial %D smoothing factor.
// @param d2                (simple int) Length for the final %D smoothing factor.
// @returns                 (float) The STC for the \`source\` series.
export stc(series float source, simple int fast, simple int slow, simple int cycle, simple int d1, simple int d2) =>
    float macd   = ta.ema(source, fast) - ta.ema(source, slow)
    float k      = nz(fixnan(ta.stoch(macd, macd, macd, cycle)))
    float d      = ta.ema(k, d1)
    float kd     = nz(fixnan(ta.stoch(d, d, d, cycle)))
    float stc    = ta.ema(kd, d2)
    float result = math.max(math.min(stc, 100), 0)


// @function                Calculates the %K and %D values of the Full Stochastic indicator.
// @param periodK           (simple int) Number of bars for the Stochastic calculation.
// @param smoothK           (simple int) Number of bars for smoothing the %K series.
// @param periodD           (simple int) Number of bars for smoothing the %D series.
// @returns                 ([float, float]) A tuple containing the slow %K and the %D moving average.
export stochFull(simple int periodK, simple int smoothK, simple int periodD) =>
    float k = ta.sma(ta.stoch(close, high, low, periodK), smoothK)
    float d = ta.sma(k, periodD)
    [k, d]


// @function                Calculates the %K and %D values of the Stochastic RSI indicator.
// @param lengthRsi         (simple int) Length for the RSI smoothing factor.
// @param periodK           (simple int) Number of bars for the Stochastic calculation.
// @param smoothK           (simple int) Number of bars for smoothing the %K series.
// @param periodD           (simple int) Number of bars for smoothing the %D series.
// @param source            (series int/float) Optional. Series of values to process. The default is \`close\`.
// @returns                 ([float, float]) A tuple containing the slow %K and the %D moving average.
export stochRsi(
     simple int lengthRsi, simple int periodK, simple int smoothK, simple int periodD, series float source = close
 ) =>
    float rsi = ta.rsi(source, lengthRsi)
    float k   = ta.sma(ta.stoch(rsi, rsi, rsi, periodK), smoothK)
    float d   = ta.sma(k, periodD)
    [k, d]


// @function                Calculates the values of the SuperTrend indicator with the ability to take candle wicks
//                          into account, rather than only the closing price.
// @param factor            (series int/float) Multiplier for the ATR value.
// @param atrLength         (simple int) Length for the ATR smoothing factor calculation.
// @param wicks             (simple bool) Optional. Specifies whether the function uses \`high\` and \`low\` values to
//                          identify trend reversals (if \`true\`), or uses only \`close\` values (if \`false\`). The default
//                          is \`false\`.
// @returns                 ([float, int]) A tuple containing the Supertrend and trend direction values.
export supertrend(series float factor, simple int atrLength, simple bool wicks = false) =>
	float source        = hl2
    int   direction     = na
	float superTrend    = na
	float atr           = ta.atr(atrLength) * factor
	float upperBand     = source + atr
	float lowerBand     = source - atr
	float highPrice 	= wicks ? high : close
    float lowPrice  	= wicks ? low  : close
	float prevLowerBand = nz(lowerBand[1])
	float prevUpperBand = nz(upperBand[1])

	lowerBand := lowerBand > prevLowerBand or  lowPrice[1] < prevLowerBand ? lowerBand : prevLowerBand
	upperBand := upperBand < prevUpperBand or highPrice[1] > prevUpperBand ? upperBand : prevUpperBand
	float prevSuperTrend  = superTrend[1]
	if na(atr[1])
		direction := 1
	else if prevSuperTrend == prevUpperBand
		direction := highPrice > upperBand ? -1 : 1
	else
		direction := lowPrice < lowerBand ? 1 : -1
	superTrend := direction == -1 ? lowerBand : upperBand
	[superTrend, direction]


// @function                An alternative function to \`supertrend()\` that supports a "series float" ATR length.
// @param factor            (series int/float) Multiplier for the ATR value.
// @param atrLength         (series int/float) Length for the ATR smoothing factor calculation.
// @param wicks             (simple bool) Optional. Specifies whether the function uses \`high\` and \`low\` values to
//                          identify trend reversals (if \`true\`), or uses only \`close\` values (if \`false\`). The default
//                          is \`false\`.
// @returns                 ([float, int]) A tuple containing the Supertrend and trend direction values.
export supertrend2(series float factor, series float atrLength, simple bool wicks = false) =>
	float source        = hl2
    int   direction     = na
	float superTrend    = na
	float atr           = atr2(atrLength) * factor
	float upperBand     = source + atr
	float lowerBand     = source - atr
	float highPrice 	= wicks ? high : close
    float lowPrice  	= wicks ? low  : close
	float prevLowerBand = nz(lowerBand[1])
	float prevUpperBand = nz(upperBand[1])

	lowerBand := lowerBand > prevLowerBand or  lowPrice[1] < prevLowerBand ? lowerBand : prevLowerBand
	upperBand := upperBand < prevUpperBand or highPrice[1] > prevUpperBand ? upperBand : prevUpperBand
	float prevSuperTrend  = superTrend[1]
	if na(atr[1])
		direction := 1
	else if prevSuperTrend == prevUpperBand
		direction := highPrice > upperBand ? -1 : 1
	else
		direction := lowPrice < lowerBand ? 1 : -1
	superTrend := direction == -1 ? lowerBand : upperBand
	[superTrend, direction]


// @function                Calculates the Generalized DEMA (GD) used in the \`t3()\` function.
// @param source            (series int/float) Series of values to process.
// @param length            (simple int) Length for the smoothing factor calculation.
// @param vf                (simple float) Volume factor. Affects the responsiveness.
// @returns                 (float) The GD value of the \`source\`.
gd(series float source, simple int length, simple float vf) =>
    float result = ta.ema(source, length) * (1 + vf) - ta.ema(ta.ema(source, length), length) * vf


// @function                Calculates the value of the Tilson Moving Average (T3).
// @param source            (series int/float) Series of values to process.
// @param length            (simple int) Length for the smoothing factor calculation.
// @param vf                (simple float) Volume factor. Affects the responsiveness.
// @returns                 (float) The Tilson moving average of the \`source\`.
export t3(series float source, simple int length, simple float vf = 0.7) =>
    float result = gd(gd(gd(source, length, vf), length, vf), length, vf)


// @function                An alternative function to \`gd()\` that supports a "series float" length value.
// @param source            (series int/float) Series of values to process.
// @param length            (series int/float) Length for the smoothing factor calculation.
// @param vf                (simple float) Volume factor. Affects the responsiveness.
// @returns                 (float) The GD value of the \`source\`.
gd2(series float source, series float length, simple float vf) =>
    float result = ema2(source, length) * (1 + vf) - ema2(ema2(source, length), length) * vf


// @function                An alternative function to \`t3()\` that supports a "series float" length value.
// @param source            (series int/float) Series of values to process.
// @param length            (series int/float) Length for the smoothing factor calculation.
// @param vf                (simple float) Volume factor. Affects the responsiveness.
// @returns                 (float) The Tilson moving average of the \`source\`.
export t3Alt(series float source, series float length, simple float vf = 0.7) =>
    float result = gd2(gd2(gd2(source, length, vf), length, vf), length, vf)


// @function                Calculates the value of the Triple Exponential Moving Average (TEMA).
// @param source            (series int/float) Series of values to process.
// @param length            (simple int) Length for the smoothing factor calculation.
// @returns                 (float) The triple exponentially weighted moving average of the \`source\`.
export tema(series float source, simple int length) =>
    float ema1   = ta.ema(source, length)
    float ema2   = ta.ema(ema1, length)
    float ema3   = ta.ema(ema2, length)
    float result = 3 * (ema1 - ema2) + ema3


// @function                An alternative function to \`tema()\` that supports a "series float" length value.
// @param source            (series int/float) Series of values to process.
// @param length            (series int/float) Length for the smoothing factor calculation.
// @returns                 (float) The triple exponentially weighted moving average of the \`source\`.
export tema2(series float source, series float length) =>
    float ema1   = ema2(source, length)
    float ema2   = ema2(ema1, length)
    float ema3   = ema2(ema2, length)
    float result = 3 * (ema1 - ema2) + ema3


// @function                Calculates the value of the Triangular Moving Average (TRIMA).
// @param source            (series int/float) Series of values to process.
// @param length            (series int) Number of bars (lookback length).
// @returns                 (float) The triangular moving average of the \`source\`.
export trima(series float source, series int length) =>
    float result = ta.sma(ta.sma(source, math.ceil(length / 2)), math.floor(length / 2) + 1)


// @function                Calculates the values of the TRIX indicator.
// @param source            (series int/float) Series of values to process.
// @param length            (simple int) Length for the smoothing factor calculation.
// @param signalLength      (simple int) Length for smoothing the signal line.
// @param exponential       (simple bool) Optional. Specifies whether the function calculates the signal line using
//                          an exponential moving average (if \`true\`) or a simple moving average (if \`false\`). The
//                          default is \`true\`.
// @returns                 ([float, float, float]) A tuple containing the TRIX value, signal, and histogram values.
export trix(series float source, simple int length, simple int signalLength, simple bool exponential = true) =>
    float triple = ta.ema(ta.ema(ta.ema(source, length), length), length)
    float trix   = ta.roc(triple, 1)
    float signal = exponential ? ta.ema(trix, signalLength) : ta.sma(trix, signalLength)
    float hist   = trix - signal
    [trix, signal, hist]


// @function                Calculates the Ulcer Index based on a \`source\` value. The index represents the root mean
//                          square of drawdown percentages over a lookback length.
// @param source            (series int/float) Series of values to process.
// @param length            (series int) Number of bars (lookback length).
// @returns                 (float) The Ulcer Index.
export ulcerIndex(series float source, series int length) =>
    float highest  = ta.highest(source, length)
    float drawdown = changePercent(source, highest)
    float result   = rms(drawdown, length)


// @function                Calculates the value of the Sentiment Zone Oscillator.
// @param source            (series int/float) Series of values to process.
// @param length            (simple int) Length for the smoothing factor calculation.
// @returns                 (float) The oscillator value.
export szo(series float source, simple int length) =>
    float trend   = math.sign(ta.change(source))
    float sentPos = tema(trend, length)
    float result  = 100 * sentPos / length


// @function                Calculates the weighted average used in the \`uo()\` function.
// @param bp                (series int/float) A source series representing the "Buying Pressure" value.
// @param trange            (series int/float) A source series representing the True Range value.
// @param length            (simple int) Number of bars (lookback length).
// @returns                 (float) The weighted average value.
uoAverage(series float bp, series float trange, simple int length) =>
    float result = math.sum(bp, length) / math.sum(trange, length)


// @function                Calculates the value of the Ultimate Oscillator.
// @param fastLen           (series int) Number of bars for the fast smoothing average.
// @param midLen            (series int) Number of bars for the middle smoothing average.
// @param slowLen           (series int) Number of bars for the slow smoothing average.
// @returns                 (float) The Ultimate Oscillator.
export uo(simple int fastLen, simple int midLen, simple int slowLen) =>
    float tMax   = math.max(high, close[1])
    float tMin   = math.min(low,  close[1])
    float tr     = tMax  - tMin
    float bp     = close - tMin
    float avg1   = uoAverage(bp, tr, fastLen)
    float avg2   = uoAverage(bp, tr, midLen)
    float avg3   = uoAverage(bp, tr, slowLen)
    float result = 100 * (4 * avg1 + 2 * avg2 + avg3) / 7


// @function                Calculates the value of the Vertical Horizontal Filter.
// @param source            (series int/float) Series of values to process.
// @param length            (simple int) Number of bars (lookback length).
// @returns                 (float) The oscillator value.
export vhf(series float source, simple int length) =>
    float sumChanges = math.sum(math.abs(ta.change(source)), length)
    float result     = math.abs(ta.highest(source, length) - ta.lowest(source, length)) / sumChanges


// @function                Calculates the values of the Vortex Indicator.
// @param length            (simple int) Number of bars (lookback length).
// @returns                 ([float, float]) A tuple containing the VI+ and VI- values.
export vi(simple int length) =>
    divisor = math.sum(ta.atr(1), length)
    viPlus  = math.sum(math.abs(high -  nz(low[1])), length) / divisor
    viMinus = math.sum(math.abs(low  - nz(high[1])), length) / divisor
    [viPlus, viMinus]


// @function                Calculates an ATR-based stop value that trails behind the \`source\`. Can serve as a
//                          possible stop-loss guide and trend identifier.
// @param source            (series int/float) Series of values that the stop trails behind.
// @param atrLength         (simple int) Length for the ATR smoothing factor calculation.
// @param atrFactor         (series int/float) Optional. The multiplier of the ATR value. Affects the maximum distance
//                          between the stop and the \`source\` value. A value of 1 means the maximum distance is 100%
//                          of the ATR value. The default is 1.
// @returns                 ([float, bool]) A tuple containing the volatility stop and trend direction values.
export vStop(series float source, simple int atrLength, series float atrFactor = 1) =>
    float src  = nz(source, close)
    float atrM = nz(ta.atr(atrLength) * atrFactor, ta.tr(true))
    var bool  trendUp = true
    var float max     = src
    var float min     = src
    var float stop    = 0.0
    max     := math.max(max, src)
    min     := math.min(min, src)
    stop    := nz(trendUp ? math.max(stop, max - atrM) : math.min(stop, min + atrM), src)
    trendUp := src - stop >= 0.0
    if trendUp != trendUp[1]
        max  := src
        min  := src
        stop := trendUp ? max - atrM : min + atrM
    [stop, trendUp]


// @function                An alternative function to \`vStop()\` that supports a "series float" length value.
// @param source            (series int/float) Series of values that the stop trails behind.
// @param atrLength         (series int/float) Length for the ATR smoothing factor calculation.
// @param atrFactor         (series int/float) Optional. The multiplier of the ATR value. Affects the maximum distance
//                          between the stop and the \`source\` value. A value of 1 means the maximum distance is 100%
//                          of the ATR value. The default is 1.
// @returns                 ([float, bool]) A tuple of the volatility stop value and the trend direction as a "bool".
export vStop2(series float source, series float atrLength, series float atrFactor = 1) =>
    float src  = nz(source, close)
    float atrM = nz(atr2(atrLength) * atrFactor, ta.tr(true))
    var bool  trendUp = true
    var float max     = src
    var float min     = src
    var float stop    = 0.0
    max     := math.max(max, src)
    min     := math.min(min, src)
    stop    := nz(trendUp ? math.max(stop, max - atrM) : math.min(stop, min + atrM), src)
    trendUp := src - stop >= 0.0
    if trendUp != trendUp[1]
        max  := src
        min  := src
        stop := trendUp ? max - atrM : min + atrM
    [stop, trendUp]


// @function                Calculates the value of the Volume Zone Oscillator.
// @param length            (simple int) Length for the smoothing factor calculation.
// @returns                 (float) The oscillator value.
export vzo(simple int length) =>
    float result = zone(volume, length)


// @function                Detects Williams fractals (used by \`williamsFractal()\`).
// @param source            (series int/float) Series of values to process.
// @param n                 (series int) Lookback in bars.
// @param direction         (simple int) Direction of the fractal to detect (+1 for up, -1 for down).
// @returns                 (series bool) \`true\` when a fractal was detected, \`false\` otherwise.
flag(series float source, series int n, simple int direction) =>
    float src  = source * direction
    bool flag  = true
    bool flag0 = true
    bool flag1 = true
    bool flag2 = true
    bool flag3 = true
    bool flag4 = true
    for i = 1 to n
        flag  := flag  and (src[n - i] <  src[n])
        flag0 := flag0 and (src[n + i] <  src[n])
        flag1 := flag1 and (src[n + 1] <= src[n] and src[n + i + 1] < src[n])
        flag2 := flag2 and (src[n + 1] <= src[n] and src[n + 2] <= src[n] and src[n + i + 2] < src[n])
        flag3 := flag3 and (src[n + 1] <= src[n] and src[n + 2] <= src[n] and src[n + 3] <= src[n] and src[n + i + 3] < src[n])
        flag4 := flag4 and (src[n + 1] <= src[n] and src[n + 2] <= src[n] and src[n + 3] <= src[n] and src[n + 4] <= src[n] and src[n + i + 4] < src[n])
    bool flags = flag0 or flag1 or flag2 or flag3 or flag4
    bool result = (flag and flags)


// @function                Detects Williams Fractals.
// @param period            (series int) Number of bars (lookback length).
// @returns                 ([bool, bool]) A tuple of an up fractal and down fractal. Variables are true when detected.
export williamsFractal(series int period) =>
    bool upFractal   = flag(high, period,  1)
    bool downFractal = flag(low,  period, -1)
    [upFractal, downFractal]


// @function                Calculates the value of the Wave Period Oscillator.
// @param length            (simple int) Length for the smoothing factor calculation.
// @returns                 (float) The oscillator value.
export wpo(simple int length) =>
    float tt     = 2 * math.pi / math.asin(close[1] / high)
    float ti     = math.sign(ta.change(close)) * tt
    float result = ta.ema(ti, length)



plot(cagr(time[1], close[1], time, close))`,"TradingView/RelativeValue/3":`// This Pine Script® code is subject to the terms of the Mozilla Public License 2.0 at https://mozilla.org/MPL/2.0/
// © TradingView

// @version=6
library("RelativeValue")

// RelativeValue Library
// v4, 2026.01.09

// This code's style is based on the recommendations from the Pine Script User Manual's Style guide:
//    https://www.tradingview.com/pine-script-docs/writing/style-guide/



//#region ———————————————————— Library functions


// @type                    A custom type for collecting values and corresponding timestamps within a period.
// @field data              References an array containing the values collected since the starting time of the period.
// @field times             References an array containing the timestamps for each value in the \`data\` array.
// @field startTime         The UNIX timestamp of the starting point of the period for time offset calculations.
type collectedData
	array<float> data
	array<int>   times
	int          startTime


// @function                Adds a new \`collectedData\` ID to the end of an array, then removes the array's first
//                          element if its size exceeds the specified maximum. Callable as a method or a function.
// @param id                (array<collectedData>) The ID of an array containing \`collectedData\` references.
// @param maxSize           (simple int) The maximum size of the \`id\` array.
// @param data              (collectedData) The \`collectedData\` ID to insert at the end of the \`id\` array.
// @returns                 (collectedData) The removed \`collectedData\` ID if the array's size reached the specified
//                          maximum, and \`na\` otherwise.
method maintainArray(array<collectedData> id, simple int maxSize, collectedData data) =>
    id.push(data)
    if id.size() > maxSize
        id.shift()


// @function                Searches the arrays of each \`collectedData\` object referenced by the \`id\` array to find the
//                          earliest saved \`data\` array element corresponding to a specified time offset, and calculates
//                          the average of all the retrieved values. Callable as a method or a function.
// @param id                (array<collectedData>) The ID of an array containing \`collectedData\` references.
// @param timeOffset        (series int) The millisecond time offset from the \`startTime\` field of each \`collectedData\`
//                          instance. The function searches each object's \`times\` array to find the earliest element
//                          corresponding to the offset, and then retrieves the corresponding element from the object's
//                          \`data\` array for the average calculation.
// @returns                 (float) The average \`data\` value corresponding to the time offset across all \`collectedData\`
//                          objects referenced by the \`id\` array.
method calcAverageByTime(array<collectedData> id, series int timeOffset) =>
	float sum = 0.0
	for eachItem in id
		int   startTime = eachItem.startTime
		int   index     = eachItem.times.binary_search_leftmost(startTime + timeOffset)
		float adjData   = eachItem.data.size() - 1 >= index ? eachItem.data.get(index) : eachItem.data.last()
		sum += adjData
	float result = sum / id.size()


// @function                Calculates the cumulative sum of a series since the last bar where the specified \`anchor\`
//                          value was \`true\`.
// @param source            (series float) The series of values to process.
// @param anchor            (series bool) When \`true\`, the cumulative sum resets and includes only the current \`source\`
//                          value. When \`false\`, the function continues to accumulate \`source\` values without resetting.
// @param adjustRealtime    (simple bool) Optional. If \`true\`, the function estimates the expected closing cumulative
//                          value on an open bar based on the data since the opening time of the latest bar where the
//                          \`anchor\` value was \`true\`. If \`false\`, it calculates current sum using the bar's latest
//                          data only, without estimating the closing value. The default is \`false\`.
// @returns                 (float) The current or projected cumulative sum of the \`source\` series since the last
//                          \`anchor\` occurrence.
export calcCumulativeSeries(series float source, series bool anchor, simple bool adjustRealtime = false) =>
    var float sum = 0.0
	var int lastAnchor = na
    if anchor
        sum := 0.0
		lastAnchor := time
    sum += source
	if adjustRealtime and not barstate.isconfirmed
		int    timePassed   = math.min(timenow, time_close) - lastAnchor
		int    timeTotal    = time_close - lastAnchor
		float  currentRatio = sum / timePassed
		sum := currentRatio * timeTotal
    float result = sum


// @function                (Overload 1 of 2) Calculate the average value of a series over a specified number of
//                          periods, where the values in the average are from each bar whose opening time offset from
//                          the start of its respective period is closest to that of the current bar in the most recent
//                          period.
// @param source            (series float) The series of values to process.
// @param length            (simple int) The number of periods to analyze in the historical average calculation.
// @param anchor            (series bool) Specifies when a new period starts. If \`true\`, the current bar represents the
//                          first bar of a new period. If \`false\`, the current bar belongs to the period that started
//                          on the last bar where the value was \`true\`.
// @param isCumulative      (simple bool) Optional. If \`true\`, the function calculates the average \`source\` value
//                          accumulated from the start of each period to the current time offset. If \`false\`, the
//                          function calculates the average non-cumulative value at the offset. The default is \`true\`.
// @returns                 (float) The historical average cumulative or non-cumulative \`source\` value at the current
//                          bar's time offset.
export averageAtTime(
    series float source, simple int length, series bool anchor, simple bool isCumulative = true
) =>
	var array<collectedData> historicalData = array.new<collectedData>()
	var collectedData newData = collectedData.new(array.new<float>(), array.new<int>())
    float src = isCumulative ? calcCumulativeSeries(source, anchor) : source
	if anchor
		historicalData.maintainArray(length, newData)
		newData := collectedData.new(array.new<float>(), array.new<int>(), time)
	newData.times.push(time)
	newData.data.push(src)
	float result = calcAverageByTime(historicalData, time - newData.startTime)


// @function                (Overload 2 of 2) Calculate the average value of a series over a specified number of
//                          periods, where the values in the average are from each bar whose opening time offset from
//                          the start of its respective period is closest to that of the current bar in the most recent
//                          period.
// @param source            (series float) The series of values to process.
// @param length            (simple int) The number of periods to analyze in the historical average calculation.
// @param timeframe         (simple string) Specifies the span of each period in the average calculation. A new period
//						    begins when a new bar opens on the specified timeframe.
// @param isCumulative      (simple bool) Optional. If \`true\`, the function calculates the average \`source\` value
//                          accumulated from the start of each period to the current time offset. If \`false\`, the
//                          function calculates the average non-cumulative value at the offset. The default is \`true\`.
// @returns                 (float) The historical average cumulative or non-cumulative \`source\` value at the current
//                          bar's time offset.
export averageAtTime(
    series float source, simple int length, simple string timeframe, simple bool isCumulative = true
) =>
	var array<collectedData> historicalData = array.new<collectedData>()
	var collectedData newData = collectedData.new(array.new<float>(), array.new<int>(), time(timeframe))
	bool anchor = timeframe.change(timeframe)
    float src = isCumulative ? calcCumulativeSeries(source, anchor) : source
	if anchor
		historicalData.maintainArray(length, newData)
		newData := collectedData.new(array.new<float>(), array.new<int>(), time(timeframe))
	newData.times.push(time)
	newData.data.push(src)
	float result = calcAverageByTime(historicalData, time - newData.startTime)
//#endregion


//#region ———————————————————— Example Code

// Color variables
color  TEAL  = color.new(color.teal, 50)
color  RED   = color.new(color.red,  50)
color  GRAY  = color.new(color.gray, 70)

// String options
string MI01  = "Cumulative"
string MI02  = "Regular"
string EQ01  = "On"
string EQ02  = "Off"

// Tooltips
string TT_RT = "The timeframe for the period reset condition."
string TT_LI = "The number of periods in the average volume calculation."
string TT_MI = (
    "If 'Cumulative', the indicator calculates a running total of volume since the start of each period. "
    + "If 'Regular', it uses non-cumulative volume values."
)
string TT_SR = (
    "If enabled, the indicator displays relative volume values, which represent the ratio of the current volume to "
    + "the historical average volume at the period-based time offset."
)
string TT_AR = (
    "If the calculation mode is 'Cumulative', enable this input to estimate the final cumulative volume on open bars "
    + "using the volume data for the current period."
)

// @variable The timeframe of the periods to use in the average.
string resetTimeInput = input.timeframe("1D", "Anchor timeframe", tooltip = TT_RT)
// @variable The number of periods to include in the average calculation.
int lengthInput = input.int(5, "No. of periods to avg.", tooltip = TT_LI)
// @variable Controls whether the average calculation uses cumulative or non-cumulative values.
string modeInput = input.string("Cumulative", "Calculation mode", tooltip = TT_MI, options = [MI01, MI02])
// @variable \`true\` if the \`modeInput\` value is \`"Cumulative"\`, and \`false\` otherwise.
bool isCumulative = modeInput == MI01
// @variable If \`true\`, the script displays the relative volume ratio.
bool showRvolInput = input.string(EQ02, "Show as relative ratio", tooltip = TT_SR, options = [EQ01, EQ02]) == EQ01
// @variable If \`true\` and \`isCumulative\` is \`true\`, the script estimates the closing cumulative volume on open bars.
bool estimateInput = input.string(EQ02, "Estimate unconfirmed",   tooltip = TT_AR, options = [EQ01, EQ02], active = isCumulative) == EQ01

// @variable \`true\` when a new bar opens on the \`resetTimeInput\` timeframe, and \`false\` otherwise.
bool anchor = timeframe.change(resetTimeInput)

// @variable The average cumulative or non-cumulative volume at the current time offset over the last \`lengthInput\` periods.
float pastVolume = averageAtTime(volume, lengthInput, resetTimeInput, isCumulative)
// @variable The latest or estimated cumulative or non-cumulative volume in the current period.
float currentVolume = isCumulative ? calcCumulativeSeries(volume, anchor, estimateInput) : volume
// @variable The relative volume ratio.
float relativeValue = currentVolume / pastVolume

// Dispaly the values.
display(show) => show ? display.all : display.data_window
plot(relativeValue, "Relative value",  relativeValue >= 1 ? TEAL : RED, 1, plot.style_columns, display = display(    showRvolInput), histbase = 1)
plot(pastVolume,    "Past volume avg", GRAY,                            1, plot.style_columns, display = display(not showRvolInput))
plot(currentVolume, "Current volume",  close >= open      ? TEAL : RED, 1, plot.style_columns, display = display(not showRvolInput))
//#endregion`,"TradingView/ZigZag/7":`// This Pine Script® code is subject to the terms of the Mozilla Public License 2.0 at https://mozilla.org/MPL/2.0/
// © TradingView

//@version=6
library("ZigZag", overlay = true)

// ZigZag Library
// v9, 2026.02.25

// This code's style is based on the recommendations from the Pine Script User Manual's Style guide:
//    https://www.tradingview.com/pine-script-docs/writing/style-guide/



//#region ———————————————————— Library types and functions


// @type                                A structure for objects that store calculation and display properties for \`ZigZag\` instances. 
// @field devThreshold                  The minimum percentage deviation from a previous pivot point required to change the Zig Zag's direction. 
// @field depth                         The number of bars required for pivot point detection. 
// @field lineColor                     The color of each line in the Zig Zag drawing. 
// @field projectionPivots              Specifies whether the Zig Zag calculates a *projected* pivot point when a new confirmed pivot point is not available. 
// @field displayReversalPrice          Specifies whether the Zig Zag drawing shows pivot prices in its labels.
// @field displayCumulativeVolume       Specifies whether the Zig Zag drawing shows the cumulative volume between pivot points in its labels.
// @field displayReversalPriceChange    Specifies whether the Zig Zag drawing shows the reversal amount from the previous pivot point in each label.
// @field differencePriceMode           The reversal amount display mode. Possible values: \`"Absolute"\` for price change or \`"Percent"\` for percentage change.
// @field draw                          Specifies whether the Zig Zag drawing displays its lines and labels. 
// @field allowZigZagOnOneBar           Specifies whether the Zig Zag calculation can register a pivot high *and* pivot low on the same bar. 
export type Settings
    float  devThreshold               = 5.0
    int    depth                      = 10
    color  lineColor                  = #2962FF
    bool   projectionPivots           = true
    bool   displayReversalPrice       = true
    bool   displayCumulativeVolume    = true
    bool   displayReversalPriceChange = true
    string differencePriceMode        = "Absolute"
    bool   draw                       = true
    bool   allowZigZagOnOneBar        = true


// @type                                A structure for objects that store chart point references, drawing references, and volume information for \`ZigZag\` instances. 
// @field ln                            References a \`line\` object that connects the coordinates from the \`start\` and \`end\` chart points. 
// @field lb                            References a \`label\` object that displays pivot data at the \`end\` chart point's coordinates. 
// @field isHigh                        Specifies whether the pivot at the \`end\` chart point's coordinates is a pivot high.
// @field vol                           The cumulative volume across the bars between the \`start\` and \`end\` chart points.
// @field start                         References a \`chart.point\` object containing the coordinates of the previous pivot point.
// @field end                           References a \`chart.point\` object containing the coordinates of the current pivot point.
export type Pivot
    line        ln
    label       lb
    bool        isHigh 
    float       vol
    chart.point start
    chart.point end


// @type                                A structure for objects that maintain Zig Zag drawing settings, pivots, and cumulative volume data. 
// @field settings                      References a \`Settings\` object that specifies the Zig Zag drawing's calculation and display properties.
// @field pivots                        References an array of \`Pivot\` objects that store pivot point, drawing, and volume information. 
// @field sumVol                        The cumulative volume across bars covered by the latest \`Pivot\` object's line segment.
// @field projection                    References a \`Pivot\` object to store pivot, drawing, and volume information for a projected pivot point.
export type ZigZag
    Settings     settings
    array<Pivot> pivots
    float        sumVol     = 0
    Pivot        projection = na


// @function                            Searches the values of a source series to detect a high or low pivot point.
//                                      For a high pivot point, the value from \`depth\` bars back must be strictly above 
//                                      all values from \`depth + 1\` to \`2 * depth\` bars back, and above or equal to all
//                                      values from \`depth - 1\` to 0 bars back. For a low pivot point, the value from 
//                                      \`depth\` bars back must be strictly below all values from \`depth + 1\` to
//                                      \`2 * depth\` bars back, and below or equal to all values from \`depth - 1\` to 0
//                                      bars back.
// @param source                        (series float) The series of values to process.
// @param depth                         (series int) The number of bars that the function checks to the left and right 
//                                      of a bar to confirm a pivot point. 
// @param isHigh                        (simple bool) If \`true\`, the function checks for a high pivot point. If \`false\`,
//                                      it checks for a low pivot point. 
// @returns                             (chart.point) The ID of a \`chart.point\` object that contains the \`time\`, 
//                                      \`bar_index\`, and \`source\` values from \`depth\` bars back if the function 
//                                      confirms that the offset bar is a pivot point, and \`na\` otherwise.
findPivotPoint(series float source, series int depth, simple bool isHigh) =>
    float pivotPrice = nz(source[depth])
    if depth == 0
        chart.point.new(time, bar_index, pivotPrice)
    else if depth * 2 <= bar_index
        bool isFound = true
        for i = 0 to depth - 1
            if (isHigh and source[i] > pivotPrice) or (not isHigh and source[i] < pivotPrice)
                isFound := false
                break
        for i = depth + 1 to 2 * depth
            if (isHigh and source[i] >= pivotPrice) or (not isHigh and source[i] <= pivotPrice)
                isFound := false
                break
        if isFound
            chart.point.new(time[depth], bar_index[depth], pivotPrice)


// @function                            Calculates the percentage difference between a starting price and ending price. 
// @param start                         (series float) The starting price.
// @param end                           (series float) The ending price. 
// @returns                             (float) The difference between the ending and starting prices, as a percentage 
//                                      of the absolute value of the starting price. 
calcDev(series float start, series float end) =>
    float result = 100 * (end - start) / math.abs(start)


// @function                            Calculates the difference between an ending price and a starting price, then 
//                                      creates a formatted string to express the value as either a direct difference 
//                                      or a percentage of the starting price.
//                                      The library uses this helper function in \`priceRotationAggregate()\`.
// @param start                         (series float) The starting price. 
// @param end                           (series float) The ending price. 
// @param settings                      (Settings) The ID of a \`Settings\` object. The object's 
//                                      \`differencePriceMode\` field determines whether the result represents 
//                                      a direct price difference or a percentage. 
// @returns                             (string) A string representation of the price or percentage difference between 
//                                      the starting and ending prices.
priceRotationDiff(series float start, series float end, Settings settings) =>
    float  diff    = end - start
    string sign    = math.sign(diff) > 0 ? "+" : ""
    string diffStr = switch settings.differencePriceMode 
        "Absolute" => str.tostring(diff, format.mintick)  
        =>            str.tostring(diff * 100 / start, format.percent)
    string result  = str.format("({0}{1})", sign, diffStr) 


// @function                            Constructs a string containing formatted representations of the following data,
//                                      depending on the \`display*\` fields of a specified \`Settings\` object:
//                                       - A specified ending price.
//                                       - The difference between the ending price and a given starting price.
//                                       - A cumulative volume value.
// @param start                         (series float) The starting price. 
// @param end                           (series float) The ending price. 
// @param vol                           (series float) The cumulative volume between pivot points.
// @param settings                      (Settings) The ID of a \`Settings\` object. The function uses the object's 
//                                      \`displayReversalPrice\`, \`displayReversalPriceChange\`, and 
//                                      \`displayCumulativeVolume\` fields to determine the information included in the 
//                                      returned string. 
// @returns                             (string) A formatted string containing the information allowed by the \`Settings\` 
//                                      object's fields.
priceRotationAggregate(series float start, series float end, series float vol, Settings settings) =>
    string result = ""
    if settings.displayReversalPrice
        result += str.tostring(end, format.mintick) + " "
    if settings.displayReversalPriceChange
        result += priceRotationDiff(start, end, settings) + " "
    if settings.displayCumulativeVolume
        result += "\\n" + str.tostring(vol, format.volume)
    result


// @function                            Creates a label for a high or low pivot point using coordinates from a 
//                                      \`chart.point\` object if at least one \`display*\` field from a specified 
//                                      \`Settings\` object is \`true\`.
// @param isHigh                        (series bool) Determines whether the label is for a pivot high or pivot low. 
//                                      If \`true\`, the label appears above the bar and contains green text. 
//                                      If \`false\`, it appears below the bar and contains red text. 
// @param point                         (chart.point) The reference of a \`chart.point\` object. The function 
//                                      uses the object's \`time\` and \`price\` fields to set the label's coordinates.
// @param settings                      (Settings) The ID of a \`Settings\` object. The function creates 
//                                      a new label only if the object's \`displayReversalPrice\`, 
//                                      \`displayReversalPriceChange\`, or \`displayCumulativeVolume\` field is \`true\`. 
// @returns                             (label) The ID of a new label if the properties of the \`Settings\` object 
//                                      allow pivot labels, and \`na\` otherwise.
makePivotLabel(series bool isHigh, chart.point point, Settings settings) =>
    if settings.displayReversalPrice or settings.displayReversalPriceChange or settings.displayCumulativeVolume
        [yloc, txtColor] = switch 
            isHigh => [yloc.abovebar, color.green]
            =>        [yloc.belowbar, color.red]
        label.new(point, style = label.style_none, xloc = xloc.bar_time, yloc = yloc, textcolor = txtColor)


// @function                            Updates the properties of a \`Pivot\` object, including its \`end\` chart point, 
//                                      cumulative volume data, label text, and drawing coordinates.
//                                      Callable as a method or a function.
// @param this                          (Pivot) The ID of the \`Pivot\` object to update.
// @param end                           (chart.point) The ID of a \`chart.point\` object for the \`end\` field of 
//                                      the \`Pivot\` instance. 
// @param vol                           (series float) The new cumulative volume value to use for the \`Pivot\` object's 
//                                      \`vol\` field and the text of its associated label. 
// @param settings                      (Settings) The ID of a \`Settings\` object. The function uses 
//                                      the object's \`display*\` fields to determine the text shown by the \`Pivot\` 
//                                      object's label.
// @returns                             (void) The function does not return a usable value.
method updatePivot(Pivot this, chart.point end, series float vol, Settings settings) =>
    this.end := end
    this.vol := vol
    if not na(this.lb)
        this.lb.set_point(this.end)
        this.lb.set_text(priceRotationAggregate(this.start.price, this.end.price, this.vol, settings))
    this.ln.set_second_point(this.end)


// @function                            Creates a new \`Pivot\` object, then assigns line and label IDs to its 
//                                      fields if the \`draw\` field of the specified \`Settings\` object is \`true\`.
// @param start                         (chart.point) The ID of a \`chart.point\` instance for the \`Pivot\` object's 
//                                      \`start\` field. 
// @param end                           (chart.point) The ID of a \`chart.point\` instance for the \`Pivot\` object's 
//                                      \`end\` field. 
// @param vol                           (series float) The cumulative volume value for the \`Pivot\` object's \`vol\` field 
//                                      and label text. 
// @param isHigh                        (series bool) Specifies whether the pivot point represents a pivot high or 
//                                      pivot low. Determines how the calculations use the pivot, as well as the 
//                                      color and relative location of the pivot's label. 
// @param settings                      (Settings) The ID of a \`Settings\` object. The function uses 
//                                      the object's \`lineColor\` and \`display*\` fields to determine the properties of 
//                                      the pivot's line and label.
// @returns                             (Pivot) The ID of the new \`Pivot\` object. 
newPivot(
    chart.point start, chart.point end, series float vol, series bool isHigh, Settings settings
) =>
    Pivot p = Pivot.new(na, na, isHigh, vol, start, end)
    if settings.draw
        p.ln := line.new(start, end, xloc = xloc.bar_time, color = settings.lineColor, width = 2)
        p.lb := makePivotLabel(isHigh, end, settings)
    p.updatePivot(end, vol, settings)
    p


// @function                            Deletes the \`line\` and \`label\` objects referenced by a \`Pivot\` object's \`ln\` 
//                                      and \`lb\` fields. 
//                                      Callable as a method or a function.
// @param this                          (Pivot) The ID of the \`Pivot\` object to process. 
// @returns                             (void) The function does not return a usable value.
method delete(Pivot this) =>
    if not na(this.ln)
        this.ln.delete()
    if not na(this.lb)
        this.lb.delete()


// @function                            Determines whether the \`price\` field of a \`chart.point\` instance is above or 
//                                      below that of the instance referenced by a \`Pivot\` object's \`end\` field, 
//                                      depending on the value of the object's \`isHigh\` field. 
//                                      Callable as a method or a function.
// @param this                          (Pivot) The ID of the \`Pivot\` object. 
// @param point                         (chart.point) The ID of the \`chart.point\` object.
// @returns                             (bool) \`true\` if the \`price\` field of the chart point is beyond that of the 
//                                      \`end\` chart point of the \`Pivot\` field in the same direction, and \`false\` 
//                                      otherwise.
method isMorePrice(Pivot this, chart.point point) => 
    int m = this.isHigh ? 1 : -1
    bool result = point.price * m > this.end.price * m


// @function                            Retrieves the last \`Pivot\` object ID stored by the \`pivots\` array of a \`ZigZag\` 
//                                      object, or returns \`na\` if the array is empty. 
//                                      Callable as a method or a function.
// @param this                          (ZigZag) The ID of the \`ZigZag\` object.
// @returns                             (Pivot) The last \`Pivot\` reference from the \`ZigZag\` object's \`pivots\` array if 
//                                      the array contains at least one element, and \`na\` otherwise.                           
export method lastPivot(ZigZag this) =>
    Pivot result = this.pivots.size() > 0 ? this.pivots.last() : na


// @function                            Updates the last \`Pivot\` object referenced by a \`ZigZag\` instance's \`pivots\` 
//                                      array and sets the \`ZigZag\` object's \`sumVol\` field to 0. 
//                                      Callable as a method or a function.
// @param this                          (ZigZag) The ID of the \`ZigZag\` object.
// @param point                         (chart.point) The \`chart.point\` ID to use for the last \`Pivot\` object's 
//                                      \`start\` field.
// @returns                             (float) A value of 0.
method updateLastPivot(ZigZag this, chart.point point) =>
    Pivot lastPivot = this.lastPivot()
    if this.pivots.size() == 1
        lastPivot.start := point
        if this.settings.draw
            lastPivot.ln.set_first_point(point)
    lastPivot.updatePivot(point, lastPivot.vol + this.sumVol, this.settings)
    this.sumVol := 0


// @function                            Pushes a new \`Pivot\` object's ID into the end of a \`ZigZag\` object's \`pivots\`
//                                      array and sets the \`ZigZag\` object's \`sumVol\` field to 0.
//                                      Callable as a method or a function.
// @param this                          (ZigZag) The ID of the \`ZigZag\` object.
// @param new                           (Pivot) The ID of the new \`Pivot\` object.
// @returns                             (float) A value of 0.
method newPivotFound(ZigZag this, Pivot new) =>
    this.pivots.push(new)
    this.sumVol := 0


// @function                            Compares the \`price\` field of a chart point to that of the \`end\` chart point 
//                                      from the last \`Pivot\` instance referenced by a \`ZigZag\` object's \`pivots\` array,
//                                      then determines whether to create a new \`Pivot\` object for the array or update
//                                      the properties of the latest one. 
//                                      Callable as a method or a function.
// @param this                          (ZigZag) The ID of the \`ZigZag\` object. 
// @param isHigh                        (simple bool) If \`true\`, the function checks for a high pivot point. Otherwise, 
//                                      it checks for a low pivot point.
// @param point                         (chart.point) The ID of the \`chart.point\` object to use for comparison. The 
//                                      function compares the object's \`price\` field to that of the object referenced by
//                                      the last \`Pivot\` instance's \`end\` field.
// @returns                             (bool) \`true\` if the function updates the last \`Pivot\` instance or adds a new 
//                                      \`Pivot\` ID to the \`ZigZag\` instance's \`pivots\` array, and \`false\` otherwise.
method newPivotPointFound(ZigZag this, simple bool isHigh, chart.point point) =>
    bool result = false
    Pivot lastPivot = this.lastPivot()
    if not na(lastPivot)
        if lastPivot.isHigh == isHigh 
            if lastPivot.isMorePrice(point)
                this.updateLastPivot(point)
                result := true
        else
            float dev = calcDev(lastPivot.end.price, point.price)
            if not lastPivot.isHigh and dev >= this.settings.devThreshold or 
                 lastPivot.isHigh and dev <= -1 * this.settings.devThreshold
                newPivotFound(this, newPivot(lastPivot.end, point, this.sumVol, isHigh, this.settings))
                result := true
    else
        this.newPivotFound(newPivot(point, point, this.sumVol, isHigh, this.settings))
        result := true
    result


// @function                            Tries to find a new pivot point for a specified \`ZigZag\` instance. Updates the
//                                      \`ZigZag\` object's data and returns \`true\` if it registers a detected pivot 
//                                      point.
//                                      Callable as a method or a function.
// @param this                          (ZigZag) The ID of the \`ZigZag\` object.
// @param source                        (series float) The series of values to process.  
// @param isHigh                        (simple bool) If \`true\`, the function checks for a high pivot point. If \`false\`, 
//                                      it checks for a low pivot point.  
// @param depth                         (series int) The number of bars that the function checks to the left and right 
//                                      of a bar to confirm a pivot point. 
// @param registerPivot                 (series bool) Optional. If \`true\`, the function compares a detected pivot 
//                                      point's coordinates to those of the latest \`Pivot\` object's \`end\` chart point, 
//                                      then updates the latest \`Pivot\` instance or adds a new instance to the \`ZigZag\` 
//                                      object's \`pivots\` array. If \`false\`, it does not modify the data associated 
//                                      with the \`ZigZag\` object. The default is \`true\`. 
// @returns                             (bool) \`true\` if the function updates the last \`Pivot\` instance or adds a new 
//                                      \`Pivot\` object to the \`ZigZag\` instance's \`pivots\` array, and \`false\` otherwise.
method tryFindPivot(
    ZigZag this, series float source, simple bool isHigh, series int depth, series bool registerPivot = true
) =>
    chart.point point = findPivotPoint(source, depth, isHigh)
    bool result = not na(point) and registerPivot ? this.newPivotPointFound(isHigh, point) : false


// @function                            Removes the latest ID of a \`Pivot\` object from the \`pivots\` array of a \`ZigZag\` 
//                                      instance and deletes that object's associated drawings. 
//                                      Callable as a method or a function.
// @param this                          (ZigZag) The ID of the \`ZigZag\` object.
// @returns                             (void) The function does not return a usable value.
method popLastPivot(ZigZag this) =>
    if this.pivots.size() > 0
        Pivot p = this.pivots.pop()
        p.delete()


// @function                            Searches through the bars since the end of the last pivot point in a Zig Zag 
//                                      to find the coordinates of the next projected pivot point. The projected 
//                                      coordinates meet the Zig Zag's criteria for a valid pivot, but are not yet 
//                                      confirmed by a sufficient number of bars to the right.
// @param isHigh                        (series bool) If \`true\`, the function searches for a projected pivot high. 
//                                      If \`false\`, it searches for a projected pivot low.
// @param depth                         (series int) The maximum number of bars that the function searches to the left 
//                                      and right of each bar to determine whether the bar is a valid projected pivot.
// @param lastPivotEnd                  (chart.point) The ID of a chart point that contains the end coordinates of 
//                                      the Zig Zag's latest pivot. 
// @param devThreshold                  (series float) The percentage difference, relative to the end price of the 
//                                      latest pivot, that the function requires to validate a projected pivot. 
// @param prices                        (array<float>) The ID of an array containing all high or low prices to search.
//                                      The first element is the latest value, and the last element is the earliest.
// @param times                         (array<int>) The ID of an array containing all timestamps to use in the search.
//                                      The first element is the latest time, and the last element is the earliest. 
// @returns                             (chart.point) The ID of a \`chart.point\` object containing the coordinates 
//                                      of the projected pivot's end if the function detects valid coordinates, or \`na\`
//                                      if no valid projection is available from the data. 
findProjectionPivot(
    series bool isHigh, series int depth, chart.point lastPivotEnd, series float devThreshold, array<float> prices,
    array<int> times
) =>
    chart.point result = na
    int n = prices.size()
    if n > 0
        array<float> slice = prices.slice(0, bar_index - lastPivotEnd.index)
        float extreme = isHigh ? slice.max() : slice.min()
        int ind = slice.indexof(extreme)
        int dir = isHigh ? 1 : -1
        bool valid = ind + depth < n and dir * calcDev(lastPivotEnd.price, extreme) >= devThreshold
        if valid
            for i = 1 to depth
                int lIndex = ind + i
                float v = prices.get(lIndex)
                if (isHigh and v >= extreme) or (not isHigh and v <= extreme)
                    valid := false
                    break
        if valid
            result := chart.point.new(times.get(ind), bar_index - ind, extreme)
        else
            for i = bar_index to lastPivotEnd.index + 1
                if i == ind
                    continue
                int pIndex = bar_index - i
                if pIndex < 0 or pIndex >= n or pIndex + depth >= n
                    continue
                float candidate = prices.get(pIndex)
                if dir * calcDev(lastPivotEnd.price, candidate) < devThreshold
                    continue
                bool okRight = true
                if pIndex > 0
                    for j = 1 to math.min(depth, pIndex)
                        int rIndex = pIndex - j
                        float v = prices.get(rIndex)
                        if (isHigh and v > candidate) or (not isHigh and v < candidate)
                            okRight := false
                            break
                if not okRight
                    continue
                bool okLeft = true
                for j = 1 to depth
                    int lIndex = pIndex + j
                    float v = prices.get(lIndex)
                    if (isHigh and v >= candidate) or (not isHigh and v <= candidate)
                        okLeft := false
                        break
                if not okLeft
                    continue
                if na(result) or (isHigh and result.price < candidate) or (not isHigh and result.price > candidate)
                    result := chart.point.new(times.get(pIndex), i, candidate)
                    if candidate == extreme
                        break
    result


// @function                            Creates a new \`Pivot\` instance representing the latest *projected* pivot 
//                                      for a Zig Zag, then assigns the ID to the \`projection\` field of the \`ZigZag\` 
//                                      object and temporarily adds the ID to the end of the object's \`pivots\` array. 
//                                      A projected pivot is one that meets the criteria defined by a Zig Zag's 
//                                      settings, but is not yet confirmed with a sufficient number of bars to the right 
//                                      of the pivot bar.
//                                      Applies only if the \`projectionPivots\` field value of the associated \`Settings\`
//                                      object is \`true\`.  
//                                      Callable as a method or a function.
// @param this                          (ZigZag) The ID of the \`ZigZag\` object.
// @param projectionPoint               (chart.point) The ID of the projected chart point for the new \`Pivot\` object's 
//                                      \`end\` field.
// @param isHigh                        (series bool) If \`true\`, the new \`Pivot\` object represents a pivot high. 
//                                      If \`false\`, it represents a pivot low.
// @param projVol                       (series float) The cumulative volume from the end of the last confirmed pivot 
//                                      to the end of the projected pivot.
// @returns                             (void) The function does not return a usable value.
method updateProjectionPivot(ZigZag this, chart.point projectionPoint, series bool isHigh, series float projVol) =>
    if this.settings.projectionPivots
        Pivot last = this.lastPivot()
        this.projection := newPivot(last.end, projectionPoint, projVol, isHigh, this.settings)
        this.projection.ln.set_style(line.style_dashed)
        this.pivots.push(this.projection)


// @function                            Searches for new pivots on each bar and updates all data associated with a 
//                                      \`ZigZag\` object on each bar where a new pivot point is confirmed, including the 
//                                      pivot information, volume data, line, and labels. If the associated \`Settings\` 
//                                      object's \`projectionPivots\` value is \`true\`, it also checks for *projected* 
//                                      pivot points on the latest available bar and updates the Zig Zag's properties 
//                                      accordingly.
//                                      Callable as a method or a function. 
//
//                                      NOTE: For correct calculations, this function requires one execution on every 
//                                      available bar.
// @param this                          (ZigZag) The ID of the \`ZigZag\` instance to update.
// @returns                             (bool) \`true\` if the function adds, modifies, or removes the pivots associated 
//                                      with the Zig Zag, and \`false\` otherwise.
export method update(ZigZag this) =>
    var array<float> highs = array.new<float>(), highs.unshift(high)
    var array<float> lows  = array.new<float>(), lows.unshift(low)
    var array<int>   times = array.new<int>(),   times.unshift(time)
    var array<float> cVols = array.new<float>(), cVols.unshift(ta.cum(volume))
    var int maxSize = 0
    int depth = math.max(2, math.floor(this.settings.depth / 2))
    if not na(this.projection)
        this.popLastPivot()
        this.projection := na
    this.sumVol += nz(volume[depth])
    int size = this.pivots.size()
    maxSize := math.max(maxSize, size)
    bool newHigh = this.tryFindPivot(high, true, depth)
    bool newLow  = this.tryFindPivot(low, false, depth, this.settings.allowZigZagOnOneBar or not newHigh)
    bool invalidated = false
    float threshold = this.settings.devThreshold
    var Pivot removed = na
    var chart.point prevProjection = na
    if this.settings.projectionPivots and barstate.islast
        if not (newHigh or newLow)
            Pivot last = this.lastPivot()
            if not na(last) and na(prevProjection)
                float extreme = switch
                    last.isHigh => barstate.ishistory[1] ? highs.slice(0, bar_index - last.end.index).max() : high
                    => barstate.ishistory[1] ? lows.slice(0, bar_index - last.end.index).min() : low
                if size == maxSize and isMorePrice(last, chart.point.now(extreme))
                    this.sumVol += last.vol
                    removed := last
                    this.popLastPivot()
                    invalidated := true
                    last := this.lastPivot()
            if not na(last)
                bool nextIsHigh = not last.isHigh
                chart.point projectionPoint = findProjectionPivot(
                    nextIsHigh, depth, last.end, threshold, nextIsHigh ? highs : lows, times
                )
                if not na(projectionPoint)
                    int startOff  = bar_index - last.end.index
                    int endOff    = bar_index - projectionPoint.index
                    float projVol = cVols.get(endOff) - cVols.get(startOff) 
                    this.updateProjectionPivot(projectionPoint, nextIsHigh, projVol)            
                if not na(removed)
                    bool checkHigh = not removed.isHigh
                    chart.point revProjection = findProjectionPivot(
                        checkHigh, depth, removed.end, threshold, checkHigh ? highs : lows, times
                    )
                    if not na(revProjection) and not na(projectionPoint) and projectionPoint.index < revProjection.index
                        revProjection := na
                    if not na(revProjection)
                        if not na(this.projection)
                            this.popLastPivot()
                            this.projection := na
                        Pivot rev = newPivot(removed.start, removed.end, removed.vol, removed.isHigh, this.settings)
                        this.sumVol -= rev.vol
                        switch
                            rev.isHigh => newHigh := true
                            => newLow := true
                        this.pivots.push(rev)
                        removed := na
                        int startOff  = bar_index - rev.end.index
                        int endOff    = bar_index - revProjection.index
                        float projVol = cVols.get(endOff) - cVols.get(startOff) 
                        this.updateProjectionPivot(revProjection, checkHigh, projVol)
                prevProjection := projectionPoint
        else
            prevProjection := na
            removed := na       
    bool result = invalidated or newHigh or newLow


// @function                            Creates a new \`ZigZag\` instance with optional settings.
// @param settings                      (Settings) Optional. The ID of a \`Settings\` object for the \`settings\` field 
//                                      of the new \`ZigZag\` instance. The object's fields specify the Zig Zag's 
//                                      calculation and display behaviors. If \`na\`, the function assigns the ID 
//                                      of a \`Settings\` object with default properties to the \`settings\` field. The 
//                                      default is \`na\`.
// @returns                             (ZigZag) The ID of a new \`ZigZag\` object.
export newInstance(Settings settings = na) =>
    ZigZag result = ZigZag.new(na(settings) ? Settings.new() : settings, array.new<Pivot>())
//#endregion



//#region ———————————————————— Example Code


// @variable The deviation percentage from the last local high or low required to validate a new pivot point.
float deviationInput = input.float(5.0, "Deviation (%)", minval = 0.00001, maxval = 100.0)
// @variable The number of bars required to the left and right of a bar for pivot detection.
int depthInput = input.int(10, "Depth", minval = 1)
// @variable The color of the Zig Zag's lines.
color lineColorInput = input.color(#2962FF, "Line color")
// @variable If \`true\`, the Zig Zag calculates a projected pivot when no new confirmed pivot is available.
bool projectionInput = input.bool(true, "Calculate projected pivots")
// @variable If \`true\`, the pivot labels display price values.
bool showPriceInput = input.bool(true, "Display reversal price")
// @variable If \`true\`, each pivot label displays the volume accumulated since the end of the previous pivot.
bool showVolInput = input.bool(true, "Display cumulative volume")
// @variable If \`true\`, each pivot label displays the change in price from the previous pivot.
bool showChgInput = input.bool(true, "Display reversal price change", inline = "Price Rev")
// @variable Controls whether the labels show raw price changes or percentage changes when \`showChgInput\` is \`true\`.
string priceDiffInput = input.string("Absolute", "", options = ["Absolute", "Percent"], inline = "Price Rev")

// @variable References a \`Settings\` instance that defines the \`ZigZag\` object's calculation and display properties.
var Settings settings = Settings.new(
    deviationInput, depthInput, 
    lineColorInput, projectionInput, 
    showPriceInput, showVolInput, 
    showChgInput,   priceDiffInput
)

// @variable References a \`ZigZag\` object created using the \`settings\`.
var ZigZag zigZag = newInstance(settings)

// Update the object referenced by the \`zigZag\` variable on every bar. 
zigZag.update()
//#endregion`},Z=["tool.cursor.cross","tool.cursor.dot","tool.cursor.arrow","tool.arrow.arrowMarker","tool.arrow.arrowMarkUp","tool.arrow.arrowMarkDown","tool.arrow.arrowMarkLeft","tool.arrow.arrowMarkRight","tool.shape.circle","tool.shape.arc","tool.shape.curve"],y=60*1e3,z="https://api.itick.org";let xe=class{token;resolutionsMap={1:y,2:5*y,3:10*y,4:30*y,5:60*y,6:120*y,7:240*y,8:1440*y,9:10080*y,10:720*60*y};constructor(e){this.token=e}getKline(e){return new Promise((t,o)=>{const{symbolType:a,region:i,symbol:r,resolution:s,et:c,limit:h}=e;fetch(`${z}/${a}/kline?region=${i}&code=${r}&kType=${s}&et=${c}&limit=${h}`,{headers:{token:this.token}}).then(g=>g.json()).then(g=>{const{code:f,data:b}=g,A=[],G={noData:f!==0};for(const{t:$,c:X,o:Y,h:Q,l:J,v:ee}of b)A.push({time:$,close:X,open:Y,high:Q,low:J,volume:ee});t({bars:A,meta:G})}).catch(g=>o(g))})}getSymbolList(e){let t=`${z}/symbol/list?`;for(const o in e)t+=`${o}=${e[o]}&`;return t=t.slice(0,-1),new Promise((o,a)=>{fetch(t,{headers:{token:this.token}}).then(i=>i.json()).then(i=>{const{code:r,data:s}=i;r===200?o(s):a("查询失败")})})}getSymbolInfo(e){const[t,o]=e.split(":");return new Promise((a,i)=>{fetch(`${z}/symbol/info?code=${o}&exchange=${t==="BINANCE"?"Binance":t}`,{headers:{token:this.token}}).then(r=>r.json()).then(r=>{const{code:s,msg:c,data:h}=r;s===200||c==="ok"?a(h):i("查询失败")})})}};const Pe={crypto:"cws",stock:"sws",forex:"fws",indices:"iws"},Ce="wss://api.itick.org";class S{static instance=null;token="";resolution="1";socket=null;type="";symbol="";region="";reconnectMaxTimes=10;reconnectInterval=5e3;heartbeatInterval=3e4;reconnectTimes=0;heartbeatTimer=null;onmessage=null;dataMap=new Map;lastBar=null;constructor(e){this.token=e}static getInstance(e){return S.instance||(S.instance=new S(e)),S.instance}connect(e,t,o,a,i){if(this.resolution=a,this.region=o,this.lastBar=i,this.dataMap.clear(),!["1","5","10","30"].includes(a)){this.socket&&this.socket.readyState===WebSocket.OPEN&&this.close();return}this.symbol===t&&this.socket&&this.socket.readyState===WebSocket.OPEN||(this.socket&&this.socket.readyState===WebSocket.OPEN&&this.close(),this.socket=new WebSocket(`${Ce}/${Pe[e]}`),this.symbol=t,this.type=e,this.reconnectTimes=0,this.socket.onopen=()=>{console.log("WebSocket 连接成功",t),this.send({ac:"auth",params:this.token}),this.startHeartbeat()},this.socket.onmessage=s=>{try{const c=JSON.parse(s.data);this.handleMessage(c)}catch(c){console.log("消息解析错误:",c)}},this.socket.onclose=s=>{s.code!==1e3&&(console.log("WebSocket 连接异常关闭 将尝试重新连接:",s.code),this.reconnect())},this.socket.onerror=s=>{console.error("WebSocket 连接发生错误:",s)})}startHeartbeat(){this.heartbeatTimer=setInterval(()=>{this.socket&&this.socket.readyState===WebSocket.OPEN&&this.send({ac:"ping",params:Date.now()})},this.heartbeatInterval)}stopHeartbeat(){this.heartbeatTimer&&(clearInterval(this.heartbeatTimer),this.heartbeatTimer=null)}reconnect(){if(this.stopHeartbeat(),this.reconnectTimes++,this.reconnectTimes>this.reconnectMaxTimes)return;const e=setTimeout(()=>{console.log("重新连接中..."),this.connect(this.type,this.symbol,this.region,this.resolution,this.lastBar),clearTimeout(e)},this.reconnectInterval)}handleSymbolName(){return this.symbol}getPreviousNearestFiveOrTenMinutesTimestamp(e,t){const o=new Date(e);if(t==="1")return o.setSeconds(0,0),o.getTime();const a=o.getMinutes(),i=parseInt(t),r=Math.floor(a/i)*i,s=new Date(o);return s.setMinutes(r),s.setSeconds(0),s.setMilliseconds(0),s.getTime()}handleMessage(e){const{code:t,data:o,resAc:a}=e;if(t===1&&a==="auth"){this.send({ac:"subscribe",params:this.handleSymbolName(),types:"tick"});return}if(t===1&&o){const{t:i,ld:r,v:s}=o,c=this.getPreviousNearestFiveOrTenMinutesTimestamp(i,this.resolution),h=this.dataMap.get(c)||(this.lastBar?.time===c?this.lastBar:void 0);h?this.dataMap.set(c,{time:c,close:r,open:h.open,high:r>h.high?r:h.high,low:r<h.low?r:h.low,volume:s+h.volume}):(this.dataMap.clear(),this.dataMap.set(c,{time:c,close:r,open:r,high:r,low:r,volume:s})),this.onmessage?.(this.dataMap.get(c))}}send(e){this.socket&&this.socket.readyState===WebSocket.OPEN?this.socket.send(JSON.stringify(e)):console.log("WebSocket 未连接成功， 状态码:",this.socket?.readyState)}onMessage(e){this.onmessage=e}close(){this.socket&&(this.socket.close(),this.stopHeartbeat())}}const H=new Map;let E=null;class De{token="";symbolInfo={};configuration;request;lastBar;constructor(e){this.token=e,this.request=new xe(e),this.configuration=this.defaultConfiguration()}onReady(e){setTimeout(()=>{e(this.configuration)},0)}async searchSymbols(e,t,o,a){const[i,r]=o.split("_"),s={...e?{code:e}:{},...i?{type:i}:{},...r?{region:r}:{}},h=(await this.request.getSymbolList(s)).slice(0,50),g=[];for(const f of h)g.push({symbol:f.c,exchange:f.e,description:f.n,type:f.t,ticker:`${f.e}:${f.c}`});a(g)}async resolveSymbol(e,t,o,a){const[i]=e.split(":");if(this.symbolInfo[e]){const c=setTimeout(()=>{t(this.symbolInfo[e]),clearTimeout(c)},0);return}const r=await this.request.getSymbolInfo(e);if(a?.isCancellationRequested)return;if(!r){o("查找不到产品");return}const s={name:r.n,region:r.r,timezone:r.tz,exchange:r.e,type:r.t,subsessions:r.sb,session:r.sb.find(c=>c.id===r.si).session,minmov:r.m,subsession_id:r.si,description:r.b??r.d,format:"price",visible_plots_set:"ohlcv",variable_tick_size:"",listed_exchange:i,pricescale:100,full_name:e,pro_name:e,base_name:[e],ticker:e,supported_resolutions:this.configuration.supported_resolutions,has_daily:!0,has_intraday:!0,daily_multipliers:["1"],has_weekly_and_monthly:!0,weekly_multipliers:["1"],monthly_multipliers:["1","12"],intraday_multipliers:["1","5","10","30","60"],data_status:"streaming"};this.symbolInfo[e]=s,t(s)}async getBars(e,t,o,a,i){const{name:r,type:s,region:c}=e,{countBack:h,firstDataRequest:g,to:f}=o;try{const b={symbolType:s,region:this.getSymbolRegion(s,c),symbol:r,et:f*1e3,limit:h,resolution:this.getResolution(t)},A=await this.request.getKline(b);if(i?.isCancellationRequested)return;g&&(this.lastBar=A.bars[A.bars.length-1]),a(A.bars,A.meta)}catch(b){if(console.error(b),i?.isCancellationRequested)return;a([],{noData:!0})}}getSymbolRegion(e,t){return e==="crypto"?"BA":e==="stock"?t||"":"gb"}getResolution(e){return{1:1,5:2,10:3,30:4,60:5,120:6,240:7,"1D":8,"1W":9,"1M":10}[e]}unsubscribeBars(e){H.delete(e)}subscribeBars(e,t,o,a){const{region:i,type:r,name:s}=e;E||(E=S.getInstance(this.token),E.connect(r,s,i,t,this.lastBar),E.onMessage(c=>{c&&H.values().forEach(h=>{h(c)})})),H.set(a,o)}defaultConfiguration(){return{supported_resolutions:["1","5","10","30","60","1D","1W","1M"],supports_marks:!1,supports_timescale_marks:!1,supports_time:!1,symbols_types:[{name:"全部",value:""},{name:"加密货币",value:"crypto"},{name:"SH股",value:"stock_sh"},{name:"SZ股",value:"stock_sz"},{name:"港股",value:"stock_hk"},{name:"SG股",value:"stock_sg"},{name:"美股",value:"stock_us"},{name:"日股",value:"stock_jp"},{name:"外汇",value:"forex"},{name:"指数",value:"indices"}]}}}function Re(){return new De("a5ca43babf5e49c4b734bdcb6f51a4a4465d52bd3fbe48e1847ac9259ae290c8")}async function ke(){Ve(),Oe(),await Be();const n=document.querySelector("#canvas"),e=document.querySelector("#run-script-btn"),t=document.querySelector("#script-preset-select"),o=document.querySelector("#tool-select");Object.keys(j).forEach(f=>{let b=document.createElement("option");b.innerText=f,b.value=f,t.appendChild(b)}),Z.forEach(f=>{const b=document.createElement("option");b.innerText=Fe(f),b.value=f,o.appendChild(b)});const a="Moving Average Convergence Divergence";t.value=a,o.value=Z[0];const i=j[a],r=Ee(i),s=f=>{e.hidden=!f};let c=await te(n,Re(),{symbol:"BINANCE:BTCUSDT",interval:"1"});c.on_tool_changed(f=>{console.log("tool changed",f);const b=typeof f=="string"?f:f?.tool??f?.tool_name??f?.id;typeof b=="string"&&Z.includes(b)&&(o.value=b)}),o.onchange=()=>{c.switch_tool(o.value)},c.sync_script(i,U);let h=!1;s(!1),r.addEventListener("input",()=>{h||s(!0)}),e.onclick=f=>{f.preventDefault(),c.sync_script(r.value,U),s(!1)},t.onchange=()=>{let f=Reflect.get(j,t.value);f&&(h=!0,r.value=f,h=!1,c.sync_script(f,U),s(!1))};function g(){c.has_panicked()?console.error("The app has crashed"):setTimeout(g,1e3)}g()}function Fe(n){const t=(n.split(".").pop()??n).replace(/([a-z0-9])([A-Z])/g,"$1 $2").replace(/([A-Z]+)([A-Z][a-z])/g,"$1 $2").replace(/([a-zA-Z])([0-9])/g,"$1 $2").replace(/([0-9])([a-zA-Z])/g,"$1 $2");return t.charAt(0).toUpperCase()+t.slice(1)}function Ee(n){const e=document.querySelector("#editor");return e.value=n,e}function Ve(){const n=document.querySelector("#log-output"),e=()=>{const a=n.childElementCount>0;n.classList.toggle("has-content",a),n.setAttribute("aria-hidden",a?"false":"true")},t=(a,i="log")=>{const r=document.createElement("div");r.className=`log-line${i==="log"?"":` ${i}`}`,r.textContent=a,n.appendChild(r),e(),n.scrollTop=n.scrollHeight},o=a=>{const i=console[a].bind(console);console[a]=(...r)=>{const s=r.map(c=>{if(typeof c=="string")return c;try{return JSON.stringify(c)}catch{return String(c)}}).join(" ");t(s,a),i(...r)}};return o("log"),o("warn"),o("error"),e(),t}function Oe(){const n=document.querySelector("#layout-btn"),e=document.querySelector("#close-script-btn"),t=document.querySelector(".app-shell"),o=a=>{if(t){if(typeof a=="boolean"){t.classList.toggle("show-script",a);return}t.classList.toggle("show-script")}};n.onclick=a=>{a.preventDefault(),o()},e?.addEventListener("click",a=>{a.preventDefault(),o(!1)})}ke().catch(console.error);
