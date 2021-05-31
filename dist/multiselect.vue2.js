import{toRefs as e,ref as t,computed as n,watch as a,nextTick as l}from"@vue/composition-api";function u(e){return-1!==[null,void 0,!1].indexOf(e)}function r(e){return String(e).toLowerCase().trim()}function o(e){return(o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(l,c,s){var d=e(l),v=d.options,p=d.mode,f=d.trackBy,h=d.limit,y=d.hideSelected,m=d.createTag,g=d.label,b=d.appendNewTag,k=d.multipleLabel,_=d.object,w=d.loading,S=d.delay,O=d.resolveOnLoad,C=d.minChars,x=d.filterResults,P=d.clearOnSearch,q=d.clearOnSelect,D=d.valueProp,T=d.canDeselect,B=d.max,E=s.iv,A=s.ev,I=s.search,j=s.blurSearch,R=s.clearSearch,V=s.update,N=s.blurInput,F=s.pointer,H=t([]),U=t([]),$=t(!1),L=n((function(){var e,t=U.value||[];return e=t,"[object Object]"===Object.prototype.toString.call(e)&&(t=Object.keys(t).map((function(e){var n,a=t[e];return i(n={},D.value,e),i(n,f.value,a),i(n,g.value,a),n}))),t=t.map((function(e,t){var n;return"object"===o(e)?e:(i(n={},D.value,e),i(n,f.value,e),i(n,g.value,e),n)})),H.value.length&&(t=t.concat(H.value)),t})),M=n((function(){var e=L.value;return J.value.length&&(e=J.value.concat(e)),I.value&&x.value&&(e=e.filter((function(e){return-1!==r(e[f.value]).indexOf(r(I.value))}))),y.value&&(e=e.filter((function(e){return!ie(e)}))),h.value>0&&(e=e.slice(0,h.value)),e})),W=n((function(){switch(p.value){case"single":return!u(E.value[D.value]);case"multiple":case"tags":return!u(E.value)&&E.value.length>0}})),X=n((function(){return void 0!==k&&void 0!==k.value?k.value(E.value):E.value&&E.value.length>1?"".concat(E.value.length," options selected"):"1 option selected"})),z=n((function(){return!L.value.length&&!$.value})),G=n((function(){return L.value.length>0&&0==M.value.length})),J=n((function(){var e;return!1!==m.value&&I.value?-1!==oe(I.value)?[]:[(e={},i(e,D.value,I.value),i(e,g.value,I.value),i(e,f.value,I.value),e)]:[]})),K=n((function(){switch(p.value){case"single":return null;case"multiple":case"tags":return[]}})),Q=n((function(){return w.value||$.value})),Y=function(e){switch("object"!==o(e)&&(e=re(e)),p.value){case"single":V(e);break;case"multiple":case"tags":V(E.value.concat(e))}c.emit("select",ee(e),e)},Z=function(e){switch("object"!==o(e)&&(e=re(e)),p.value){case"single":ne();break;case"tags":case"multiple":V(E.value.filter((function(t){return t[D.value]!=e[D.value]})))}c.emit("deselect",ee(e),e)},ee=function(e){return _.value?e:e[D.value]},te=function(e){Z(e)},ne=function(){c.emit("clear"),V(K.value)},ae=function(e){switch(p.value){case"single":return!u(E.value)&&E.value[D.value]==e[D.value];case"tags":case"multiple":return!u(E.value)&&-1!==E.value.map((function(e){return e[D.value]})).indexOf(e[D.value])}},le=function(e){return!0===e.disabled},ue=function(){return!(void 0===B||-1===B.value||!W.value&&B.value>0)&&E.value.length>=B.value},re=function(e){return L.value[L.value.map((function(e){return String(e[D.value])})).indexOf(String(e))]},oe=function(e){return L.value.map((function(e){return r(e[f.value])})).indexOf(r(e))},ie=function(e){return"tags"===p.value&&y.value&&ae(e)},ce=function(e){H.value.push(e)},se=function(){u(A.value)||(E.value=ve(A.value))},de=function(e){$.value=!0,v.value(I.value).then((function(t){U.value=t,"function"==typeof e&&e(t),$.value=!1}))},ve=function(e){return u(e)?"single"===p.value?{}:[]:_.value?e:"single"===p.value?re(e)||{}:e.filter((function(e){return!!re(e)})).map((function(e){return re(e)}))};if("single"!==p.value&&!u(A.value)&&!Array.isArray(A.value))throw new Error('v-model must be an array when using "'.concat(p.value,'" mode'));return v&&"function"==typeof v.value?O.value?de(se):1==_.value&&se():(U.value=v.value,se()),S.value>-1&&a(I,(function(e){e.length<C.value||($.value=!0,P.value&&(U.value=[]),setTimeout((function(){e==I.value&&v.value(I.value).then((function(t){e==I.value&&(U.value=t,F.value=M.value.filter((function(e){return!0!==e.disabled}))[0]||null,$.value=!1)}))}),S.value))}),{flush:"sync"}),a(A,(function(e){var t,n,a;if(u(e))E.value=ve(e);else switch(p.value){case"single":(_.value?e[D.value]!=E.value[D.value]:e!=E.value[D.value])&&(E.value=ve(e));break;case"multiple":case"tags":t=_.value?e.map((function(e){return e[D.value]})):e,n=E.value.map((function(e){return e[D.value]})),a=n.slice().sort(),t.length===n.length&&t.slice().sort().every((function(e,t){return e===a[t]}))||(E.value=ve(e))}}),{deep:!0}),"function"!=typeof l.options&&a(v,(function(e,t){U.value=l.options,Object.keys(E.value).length||se(),function(){if(W.value)if("single"===p.value){var e=re(E.value[D.value])[g.value];E.value[g.value]=e,_.value&&(A.value[g.value]=e)}else E.value.forEach((function(e,t){var n=re(E.value[t][D.value])[g.value];E.value[t][g.value]=n,_.value&&(A.value[t][g.value]=n)}))}()})),{fo:M,filteredOptions:M,hasSelected:W,multipleLabelText:X,eo:L,extendedOptions:L,noOptions:z,noResults:G,resolving:$,busy:Q,select:Y,deselect:Z,remove:te,clear:ne,isSelected:ae,isDisabled:le,isMax:ue,getOption:re,handleOptionClick:function(e){if(!le(e))switch(p.value){case"single":if(ae(e))return void(T.value&&Z(e));Y(e),j(),N();break;case"multiple":if(ae(e))return void Z(e);if(ue())return;Y(e),q.value&&R();break;case"tags":if(ae(e))return void Z(e);if(ue())return;void 0===re(e[D.value])&&m.value&&(c.emit("tag",e[D.value]),b.value&&ce(e),R()),q.value&&R(),Y(e)}},handleTagRemove:function(e,t){0===t.button?te(e):t.preventDefault()},refreshOptions:function(e){de(e)},resolveOptions:de}}function s(e){return function(e){if(Array.isArray(e))return d(e)}(e)||function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||function(e,t){if(!e)return;if("string"==typeof e)return d(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return d(e,t)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function d(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,a=new Array(t);n<t;n++)a[n]=e[n];return a}function v(e,t,n,a,l,u,r,o,i,c){"boolean"!=typeof r&&(i=o,o=r,r=!1);var s,d="function"==typeof n?n.options:n;if(e&&e.render&&(d.render=e.render,d.staticRenderFns=e.staticRenderFns,d._compiled=!0,l&&(d.functional=!0)),a&&(d._scopeId=a),u?(s=function(e){(e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),t&&t.call(this,i(e)),e&&e._registeredComponents&&e._registeredComponents.add(u)},d._ssrRegister=s):t&&(s=r?function(e){t.call(this,c(e,this.$root.$options.shadowRoot))}:function(e){t.call(this,o(e))}),s)if(d.functional){var v=d.render;d.render=function(e,t){return s.call(t),v(e,t)}}else{var p=d.beforeCreate;d.beforeCreate=p?[].concat(p,s):[s]}return n}const p={name:"Multiselect",emits:["open","close","select","deselect","input","search-change","tag","update:modelValue","change","clear"],props:{value:{required:!1},modelValue:{required:!1},options:{type:[Array,Object,Function],required:!1,default:()=>[]},id:{type:[String,Number],required:!1,default:"multiselect"},name:{type:[String,Number],required:!1,default:"multiselect"},disabled:{type:Boolean,required:!1,default:!1},label:{type:String,required:!1,default:"label"},trackBy:{type:String,required:!1,default:"label"},valueProp:{type:String,required:!1,default:"value"},placeholder:{type:String,required:!1,default:null},mode:{type:String,required:!1,default:"single"},searchable:{type:Boolean,required:!1,default:!1},limit:{type:Number,required:!1,default:-1},maxHeight:{type:Number,required:!1,default:160},hideSelected:{type:Boolean,required:!1,default:!0},createTag:{type:Boolean,required:!1,default:!1},appendNewTag:{type:Boolean,required:!1,default:!0},caret:{type:Boolean,required:!1,default:!0},replaceCaretWithClear:{type:Boolean,required:!1,default:!1},loading:{type:Boolean,required:!1,default:!1},noOptionsText:{type:String,required:!1,default:"The list is empty"},noResultsText:{type:String,required:!1,default:"No results found"},multipleLabel:{type:Function,required:!1},object:{type:Boolean,required:!1,default:!1},delay:{type:Number,required:!1,default:-1},minChars:{type:Number,required:!1,default:0},resolveOnLoad:{type:Boolean,required:!1,default:!0},filterResults:{type:Boolean,required:!1,default:!0},clearOnSearch:{type:Boolean,required:!1,default:!1},clearOnSelect:{type:Boolean,required:!1,default:!0},canDeselect:{type:Boolean,required:!1,default:!0},max:{type:Number,required:!1,default:-1},showOptions:{type:Boolean,required:!1,default:!0},addTagOn:{type:Array,required:!1,default:()=>["enter"]},required:{type:Boolean,required:!1,default:!1},openDirection:{type:String,required:!1,default:"bottom"},nativeSupport:{type:Boolean,required:!1,default:!1}},setup(r,o){const i=function(a,l){var u=e(a),r=u.value,o=u.modelValue,i=u.mode,c=u.valueProp,s=t("single"!==i.value?[]:{}),d=void 0!==l.expose?o:r,v=n((function(){return"single"===i.value?s.value[c.value]:s.value.map((function(e){return e[c.value]}))})),p=n((function(){return"single"!==i.value?s.value.map((function(e){return e[c.value]})).join(","):s.value[c.value]}));return{iv:s,internalValue:s,ev:d,externalValue:d,textValue:p,plainValue:v}}(r,o),d=function(a,l,u){var r=e(a),o=r.searchable,i=(r.id,t(null)),c=n((function(){return o.value?-1:0}));return{multiselect:i,tabindex:c,focusInput:function(){i.value.querySelector(".multiselect-input").focus()},blurInput:function(){i.value.querySelector(".multiselect-input").blur()}}}(r),v={pointer:t(null)},p=function(t,n,a){var l=e(t),r=l.object,o=l.valueProp,i=l.mode,c=a.iv,s=function(e){return r.value||u(e)?e:Array.isArray(e)?e.map((function(e){return e[o.value]})):e[o.value]},d=function(e){return u(e)?"single"===i.value?{}:[]:e};return{update:function(e){c.value=d(e);var t=s(e);n.emit("change",t),n.emit("input",t),n.emit("update:modelValue",t)}}}(r,o,{iv:i.iv}),f=function(l,u,r){var o=e(l),i=o.searchable,c=o.mode,s=r.iv,d=t(null),v=t(null),p=n((function(){return d.value?"".concat(d.value.length,"ch"):"tags"===c.value&&-1===[null,void 0].indexOf(s.value)&&s.value.length?"1ch":"100%"}));return a(d,(function(e){u.emit("search-change",e)})),{search:d,input:v,tagsSearchWidth:p,clearSearch:function(){d.value=""},focusSearch:function(){v.value.focus()},blurSearch:function(){i.value&&v.value.blur()}}}(r,o,{iv:i.iv}),h=function(a,l,u){var r=e(a),o=r.maxHeight,i=r.disabled,c=r.searchable,s=u.multiselect,d=u.blurInput,v=u.blurSearch,p=u.focusInput,f=u.focusSearch,h=t(!1),y=n((function(){return"".concat(o.value,"px")}));return{isOpen:h,contentMaxHeight:y,openDropdown:function(){i.value||(h.value=!0,l.emit("open"))},closeDropdown:function(){h.value=!1,l.emit("close")},open:function(){c&&c.value?f():p()},close:function(){c&&c.value?v():d()},handleInputMousedown:function(e){h.value&&!c.value&&(s.value.querySelector(".multiselect-input").dispatchEvent(new Event("blur")),s.value.querySelector(".multiselect-input").blur(),e.preventDefault())}}}(r,o,{multiselect:d.multiselect,blurInput:d.blurInput,blurSearch:f.blurSearch,focusInput:d.focusInput,focusSearch:f.focusSearch}),y=c(r,o,{ev:i.ev,iv:i.iv,search:f.search,blurSearch:f.blurSearch,clearSearch:f.clearSearch,update:p.update,blurInput:d.blurInput,pointer:v.pointer}),m=function(t,u,r){var o=e(t),i=o.id,c=o.valueProp,s=r.fo,d=r.handleOptionClick,v=r.search,p=r.pointer,f=n((function(){return s.value.filter((function(e){return!0!==e.disabled}))})),h=function(e){p.value=e},y=function(){p.value=f.value[0]||null},m=function(){p.value=null},g=function(){var e=document.getElementById(i.value).querySelector(".is-pointed");if(e){var t=e.parentElement;e.offsetTop+e.offsetHeight>t.clientHeight+t.scrollTop&&(t.scrollTop=e.offsetTop+e.offsetHeight-t.clientHeight),e.offsetTop<t.scrollTop&&(t.scrollTop=e.offsetTop)}};return a(v,(function(e){y()})),{pointer:p,isPointed:function(e){return!!p.value&&p.value[c.value]==e[c.value]},setPointer:h,setPointerFirst:y,clearPointer:m,selectPointer:function(){p.value&&!0!==p.value.disabled?(d(p.value),m()):m()},forwardPointer:function(){if(null===p.value)h(f.value[0]||null);else{var e=f.value.map((function(e){return e[c.value]})).indexOf(p.value[c.value])+1;f.value.length<=e&&(e=0),h(f.value[e]||null)}l((function(){g()}))},backwardPointer:function(){if(null===p.value)h(f.value[f.value.length-1]||null);else{var e=f.value.map((function(e){return e[c.value]})).indexOf(p.value[c.value])-1;e<0&&(e=f.value.length-1),h(f.value[e]||null)}l((function(){g()}))}}}(r,0,{fo:y.fo,handleOptionClick:y.handleOptionClick,search:f.search,pointer:v.pointer}),g=function(t,n,a){var u=e(t),r=u.mode,o=u.addTagOn,i=u.createTag,c=a.iv,d=a.update,v=a.closeDropdown,p=a.clearPointer,f=a.search,h=a.selectPointer;return{handleBackspace:function(e){"single"!==r.value&&d(s(c.value).slice(0,-1))},handleEsc:function(e){v(),p(),e.target.blur()},handleSearchBackspace:function(e){""!==f.value&&e.stopPropagation()},handleSearchInput:function(e){f.value=e.target.value},handleAddTag:function(e){13!==e.keyCode||-1===o.value.indexOf("enter")&&i.value?32===e.keyCode&&-1!==o.value.indexOf("space")&&i.value&&(f.value=f.value.trim(),l((function(){h()}))):h()}}}(r,0,{iv:i.iv,update:p.update,closeDropdown:h.closeDropdown,clearPointer:m.clearPointer,search:f.search,selectPointer:m.selectPointer});return{...i,...h,...d,...v,...p,...f,...y,...m,...g,onFocus:e=>{void 0!==e.relatedTarget&&h.openDropdown()}}}};var f=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{ref:"multiselect",staticClass:"multiselect",class:["is-"+e.mode,{"is-open":e.isOpen,"is-searchable":e.searchable,"is-disabled":e.disabled,"no-caret":!e.caret,"open-top":"top"===e.openDirection}],attrs:{id:e.id},on:{keydown:function(t){if(!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter"))return null;t.preventDefault()}}},[n("div",{staticClass:"multiselect-input",attrs:{tabindex:e.tabindex},on:{mousedown:e.handleInputMousedown,focus:e.onFocus,blur:e.closeDropdown,keyup:[function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"esc",27,t.key,["Esc","Escape"])?null:e.handleEsc(t)},function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.selectPointer(t)}],keydown:[function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"delete",[8,46],t.key,["Backspace","Delete","Del"])?null:(t.preventDefault(),e.handleBackspace(t))},function(t){if(!t.type.indexOf("key")&&e._k(t.keyCode,"up",38,t.key,["Up","ArrowUp"]))return null;t.preventDefault(),"top"===e.openDirection?e.forwardPointer():e.backwardPointer()},function(t){if(!t.type.indexOf("key")&&e._k(t.keyCode,"down",40,t.key,["Down","ArrowDown"]))return null;t.preventDefault(),"top"===e.openDirection?e.backwardPointer():e.forwardPointer()}]}},["single"==e.mode&&e.hasSelected&&!e.search&&e.iv?[e._t("singlelabel",[n("div",{staticClass:"multiselect-single-label"},[e._v("\n          "+e._s(e.iv[e.label])+"\n        ")])],{value:e.iv})]:e._e(),e._v(" "),"multiple"==e.mode&&e.hasSelected&&!e.search?[e._t("multiplelabel",[n("div",{staticClass:"multiselect-multiple-label"},[e._v("\n          "+e._s(e.multipleLabelText)+"\n        ")])],{values:e.iv})]:e._e(),e._v(" "),"tags"!==e.mode&&e.searchable&&!e.disabled?[n("div",{staticClass:"multiselect-search"},[n("input",{ref:"input",attrs:{modelValue:e.search},domProps:{value:e.search},on:{focus:function(t){return t.stopPropagation(),e.onFocus(t)},blur:function(t){return t.stopPropagation(),e.closeDropdown(t)},keyup:[function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"esc",27,t.key,["Esc","Escape"])?null:(t.stopPropagation(),e.handleEsc(t))},function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:(t.stopPropagation(),e.selectPointer(t))}],keydown:[function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"delete",[8,46],t.key,["Backspace","Delete","Del"])?null:e.handleSearchBackspace(t)},function(t){if(!t.type.indexOf("key")&&e._k(t.keyCode,"up",38,t.key,["Up","ArrowUp"]))return null;t.stopPropagation(),"top"===e.openDirection?e.forwardPointer():e.backwardPointer()},function(t){if(!t.type.indexOf("key")&&e._k(t.keyCode,"down",40,t.key,["Down","ArrowDown"]))return null;t.stopPropagation(),"top"===e.openDirection?e.backwardPointer():e.forwardPointer()}],input:e.handleSearchInput}})])]:e._e(),e._v(" "),"tags"==e.mode?[n("div",{staticClass:"multiselect-tags"},[e._l(e.iv,(function(t,a,l){return n("span",{key:l},[e._t("tag",[n("div",{staticClass:"multiselect-tag"},[e._v("\n              "+e._s(t[e.label])+"\n              "),e.disabled?e._e():n("i",{on:{click:function(e){e.preventDefault()},mousedown:function(n){return n.preventDefault(),n.stopPropagation(),e.handleTagRemove(t,n)}}})])],{option:t,handleTagRemove:e.handleTagRemove,disabled:e.disabled})],2)})),e._v(" "),e.searchable&&!e.disabled?n("div",{staticClass:"multiselect-search",style:{width:e.tagsSearchWidth}},[n("input",{ref:"input",style:{width:e.tagsSearchWidth},attrs:{modelValue:e.search},domProps:{value:e.search},on:{focus:function(t){return t.stopPropagation(),e.onFocus(t)},blur:function(t){return t.stopPropagation(),e.closeDropdown(t)},keyup:[function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"esc",27,t.key,["Esc","Escape"])?null:(t.stopPropagation(),e.handleEsc(t))},function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:(t.stopPropagation(),e.handleAddTag(t))},function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"space",32,t.key,[" ","Spacebar"])?null:(t.stopPropagation(),e.handleAddTag(t))}],keydown:[function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"delete",[8,46],t.key,["Backspace","Delete","Del"])?null:e.handleSearchBackspace(t)},function(t){if(!t.type.indexOf("key")&&e._k(t.keyCode,"up",38,t.key,["Up","ArrowUp"]))return null;t.stopPropagation(),"top"===e.openDirection?e.forwardPointer():e.backwardPointer()},function(t){if(!t.type.indexOf("key")&&e._k(t.keyCode,"down",40,t.key,["Down","ArrowDown"]))return null;t.stopPropagation(),"top"===e.openDirection?e.backwardPointer():e.forwardPointer()}],input:e.handleSearchInput}})]):e._e()],2)]:e._e(),e._v(" "),!e.placeholder||e.hasSelected||e.search?e._e():[e._t("placeholder",[n("div",{staticClass:"multiselect-placeholder"},[e._v("\n          "+e._s(e.placeholder)+"\n        ")])])],e._v(" "),e.replaceCaretWithClear&&(!e.replaceCaretWithClear||e.hasSelected)||!e.caret||e.busy?e._e():e._t("caret",[n("span",{staticClass:"multiselect-caret"})]),e._v(" "),e.replaceCaretWithClear&&e.hasSelected&&!e.disabled&&!e.busy&&e.canDeselect?e._t("clear",[n("a",{staticClass:"multiselect-clear",on:{click:function(t){return t.preventDefault(),e.clear(t)}}})],{clear:e.clear}):e._e(),e._v(" "),n("transition",{attrs:{name:"multiselect-loading"}},[e.busy?n("span",[e._t("spinner",[n("span",{staticClass:"multiselect-spinner"})])],2):e._e()])],2),e._v(" "),e.resolving&&e.clearOnSearch?e._e():n("transition",{attrs:{name:"multiselect"},on:{"after-leave":e.clearSearch}},[n("div",{directives:[{name:"show",rawName:"v-show",value:e.isOpen&&e.showOptions,expression:"isOpen && showOptions"}],staticClass:"multiselect-options",style:{maxHeight:e.contentMaxHeight}},[e._t("beforelist"),e._v(" "),e._l(e.fo,(function(t,a,l){return n("span",{key:l,staticClass:"multiselect-option",class:{"is-pointed":e.isPointed(t),"is-selected":e.isSelected(t),"is-disabled":e.isDisabled(t)},attrs:{tabindex:-1},on:{mousedown:function(e){e.preventDefault()},mouseenter:function(n){return e.setPointer(t)},click:function(n){return n.stopPropagation(),n.preventDefault(),e.handleOptionClick(t)}}},[e._t("option",[n("span",[e._v(e._s(t[e.label]))])],{option:t,search:e.search})],2)})),e._v(" "),n("span",{directives:[{name:"show",rawName:"v-show",value:e.noOptions,expression:"noOptions"}]},[e._t("nooptions",[n("div",{staticClass:"multiselect-no-options"},[e._v(e._s(e.noOptionsText))])])],2),e._v(" "),n("span",{directives:[{name:"show",rawName:"v-show",value:e.noResults,expression:"noResults"}]},[e._t("noresults",[n("div",{staticClass:"multiselect-no-results"},[e._v(e._s(e.noResultsText))])])],2),e._v(" "),e._t("afterlist")],2)]),e._v(" "),e.required?n("input",{staticClass:"multiselect-fake-input",attrs:{tabindex:"-1",required:""},domProps:{value:e.textValue}}):e._e(),e._v(" "),e.nativeSupport?["single"==e.mode?n("input",{attrs:{type:"hidden",name:e.name},domProps:{value:void 0!==e.plainValue?e.plainValue:""}}):e._l(e.plainValue,(function(t,a){return n("input",{key:a,attrs:{type:"hidden",name:e.name+"[]"},domProps:{value:t}})}))]:e._e()],2)};f._withStripped=!0;const h=v({render:f,staticRenderFns:[]},undefined,p,undefined,false,undefined,!1,void 0,void 0,void 0);export default h;
