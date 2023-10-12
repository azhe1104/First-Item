import{m as e,n as t,q as o,s as n,t as l,v as a,x as r,r as s,y as u,w as i,o as d,z as c,A as p,e as m,c as v,b as f,B as g,C as h,D as b,F as y,_ as w,G as x,H as I,I as k,J as E,K as C,T as _,L as M,M as S,N as T,O as B,P as $,Q as O,R as F,S as P,U as R,V as N,W as A,d as L,X as z,Y as D,Z as K,$ as H,a0 as j,a1 as G,a2 as W,a3 as q,g as U,a4 as V,a5 as J,a6 as Y,a7 as Z,a8 as Q,a9 as X,aa as ee,ab as te,ac as oe,ad as ne,ae as le,af as ae,ag as re,ah as se,ai as ue,aj as ie,f as de,ak as ce,u as pe,a as me,al as ve,am as fe,an as ge,j as he,ao as be,ap as ye,aq as we,ar as xe,p as Ie,k as ke}from"../js/index.59ed1cba.js";import{u as Ee,E as Ce,a as _e,T as Me,b as Se,t as Te,i as Be,_ as $e}from"./_plugin-vue_export-helper-e0fdcb00.js";import{c as Oe,u as Fe,a as Pe,E as Re,b as Ne,O as Ae,w as Le,F as ze,t as De,f as Ke,d as He}from"./el-overlay-f42bb822.js";/* empty css                */import{c as je}from"./el-input-ba32eb66.js";import{c as Ge}from"./refs-b73ece53.js";const We=e({size:{type:[Number,String],values:t,default:"",validator:e=>o(e)},shape:{type:String,values:["circle","square"],default:"circle"},icon:{type:n},src:{type:String,default:""},alt:String,srcSet:String,fit:{type:l(String),default:"cover"}}),qe={error:e=>e instanceof Event},Ue=["src","alt","srcset"],Ve=a({name:"ElAvatar"});const Je=k(w(a({...Ve,props:We,emits:qe,setup(e,{emit:t}){const n=e,l=r("avatar"),a=s(!1),w=u((()=>{const{size:e,icon:t,shape:o}=n,a=[l.b()];return x(e)&&a.push(l.m(e)),t&&a.push(l.m("icon")),o&&a.push(l.m(o)),a})),k=u((()=>{const{size:e}=n;return o(e)?l.cssVarBlock({size:I(e)||""}):void 0})),E=u((()=>({objectFit:n.fit})));function C(e){a.value=!0,t("error",e)}return i((()=>n.src),(()=>a.value=!1)),(e,t)=>(d(),c("span",{class:y(m(w)),style:p(m(k))},[!e.src&&!e.srcSet||a.value?e.icon?(d(),v(m(h),{key:1},{default:f((()=>[(d(),v(g(e.icon)))])),_:1})):b(e.$slots,"default",{key:2}):(d(),c("img",{key:0,src:e.src,alt:e.alt,srcset:e.srcSet,style:p(m(E)),onError:C},null,44,Ue))],6))}}),[["__file","/home/runner/work/element-plus/element-plus/packages/components/avatar/src/avatar.vue"]])),Ye=a({name:"ElCollapseTransition"});var Ze=w(a({...Ye,setup(e){const t=r("collapse-transition"),o=e=>{e.style.maxHeight="",e.style.overflow=e.dataset.oldOverflow,e.style.paddingTop=e.dataset.oldPaddingTop,e.style.paddingBottom=e.dataset.oldPaddingBottom},n={beforeEnter(e){e.dataset||(e.dataset={}),e.dataset.oldPaddingTop=e.style.paddingTop,e.dataset.oldPaddingBottom=e.style.paddingBottom,e.style.maxHeight=0,e.style.paddingTop=0,e.style.paddingBottom=0},enter(e){e.dataset.oldOverflow=e.style.overflow,0!==e.scrollHeight?e.style.maxHeight=`${e.scrollHeight}px`:e.style.maxHeight=0,e.style.paddingTop=e.dataset.oldPaddingTop,e.style.paddingBottom=e.dataset.oldPaddingBottom,e.style.overflow="hidden"},afterEnter(e){e.style.maxHeight="",e.style.overflow=e.dataset.oldOverflow},enterCancelled(e){o(e)},beforeLeave(e){e.dataset||(e.dataset={}),e.dataset.oldPaddingTop=e.style.paddingTop,e.dataset.oldPaddingBottom=e.style.paddingBottom,e.dataset.oldOverflow=e.style.overflow,e.style.maxHeight=`${e.scrollHeight}px`,e.style.overflow="hidden"},leave(e){0!==e.scrollHeight&&(e.style.maxHeight=0,e.style.paddingTop=0,e.style.paddingBottom=0)},afterLeave(e){o(e)},leaveCancelled(e){o(e)}};return(e,o)=>(d(),v(_,E({name:m(t).b()},C(n)),{default:f((()=>[b(e.$slots,"default")])),_:3},16,["name"]))}}),[["__file","/home/runner/work/element-plus/element-plus/packages/components/collapse-transition/src/collapse-transition.vue"]]);Ze.install=e=>{e.component(Ze.name,Ze)};const Qe=Ze,Xe=a({name:"ElContainer"});var et=w(a({...Xe,props:{direction:{type:String}},setup(e){const t=e,o=M(),n=r("container"),l=u((()=>{if("vertical"===t.direction)return!0;if("horizontal"===t.direction)return!1;if(o&&o.default){return o.default().some((e=>{const t=e.type.name;return"ElHeader"===t||"ElFooter"===t}))}return!1}));return(e,t)=>(d(),c("section",{class:y([m(n).b(),m(n).is("vertical",m(l))])},[b(e.$slots,"default")],2))}}),[["__file","/home/runner/work/element-plus/element-plus/packages/components/container/src/container.vue"]]);const tt=a({name:"ElAside"});var ot=w(a({...tt,props:{width:{type:String,default:null}},setup(e){const t=e,o=r("aside"),n=u((()=>t.width?o.cssVarBlock({width:t.width}):{}));return(e,t)=>(d(),c("aside",{class:y(m(o).b()),style:p(m(n))},[b(e.$slots,"default")],6))}}),[["__file","/home/runner/work/element-plus/element-plus/packages/components/container/src/aside.vue"]]);const nt=a({name:"ElFooter"});var lt=w(a({...nt,props:{height:{type:String,default:null}},setup(e){const t=e,o=r("footer"),n=u((()=>t.height?o.cssVarBlock({height:t.height}):{}));return(e,t)=>(d(),c("footer",{class:y(m(o).b()),style:p(m(n))},[b(e.$slots,"default")],6))}}),[["__file","/home/runner/work/element-plus/element-plus/packages/components/container/src/footer.vue"]]);const at=a({name:"ElHeader"});var rt=w(a({...at,props:{height:{type:String,default:null}},setup(e){const t=e,o=r("header"),n=u((()=>t.height?o.cssVarBlock({height:t.height}):{}));return(e,t)=>(d(),c("header",{class:y(m(o).b()),style:p(m(n))},[b(e.$slots,"default")],6))}}),[["__file","/home/runner/work/element-plus/element-plus/packages/components/container/src/header.vue"]]);const st=a({name:"ElMain"});var ut=w(a({...st,setup(e){const t=r("main");return(e,o)=>(d(),c("main",{class:y(m(t).b())},[b(e.$slots,"default")],2))}}),[["__file","/home/runner/work/element-plus/element-plus/packages/components/container/src/main.vue"]]);const it=k(et,{Aside:ot,Footer:lt,Header:rt,Main:ut}),dt=S(ot),ct=S(lt),pt=S(rt),mt=S(ut);var vt=w(a({inheritAttrs:!1}),[["render",function(e,t,o,n,l,a){return b(e.$slots,"default")}],["__file","/home/runner/work/element-plus/element-plus/packages/components/collection/src/collection.vue"]]);var ft=w(a({name:"ElCollectionItem",inheritAttrs:!1}),[["render",function(e,t,o,n,l,a){return b(e.$slots,"default")}],["__file","/home/runner/work/element-plus/element-plus/packages/components/collection/src/collection-item.vue"]]);const gt="data-el-collection-item",ht=e=>{const t=`El${e}Collection`,o=`${t}Item`,n=Symbol(t),l=Symbol(o),a={...vt,name:t,setup(){const e=s(null),t=new Map;T(n,{itemMap:t,getItems:()=>{const o=m(e);if(!o)return[];const n=Array.from(o.querySelectorAll(`[${gt}]`));return[...t.values()].sort(((e,t)=>n.indexOf(e.ref)-n.indexOf(t.ref)))},collectionRef:e})}},r={...ft,name:o,setup(e,{attrs:t}){const o=s(null),a=B(n,void 0);T(l,{collectionItemRef:o}),$((()=>{const e=m(o);e&&a.itemMap.set(e,{ref:e,...t})})),O((()=>{const e=m(o);a.itemMap.delete(e)}))}};return{COLLECTION_INJECTION_KEY:n,COLLECTION_ITEM_INJECTION_KEY:l,ElCollection:a,ElCollectionItem:r}},bt=e({style:{type:l([String,Array,Object])},currentTabId:{type:l(String)},defaultCurrentTabId:String,loop:Boolean,dir:{type:String,values:["ltr","rtl"],default:"ltr"},orientation:{type:l(String)},onBlur:Function,onFocus:Function,onMousedown:Function}),{ElCollection:yt,ElCollectionItem:wt,COLLECTION_INJECTION_KEY:xt,COLLECTION_ITEM_INJECTION_KEY:It}=ht("RovingFocusGroup"),kt=Symbol("elRovingFocusGroup"),Et=Symbol("elRovingFocusGroupItem"),Ct={ArrowLeft:"prev",ArrowUp:"prev",ArrowRight:"next",ArrowDown:"next",PageUp:"first",Home:"first",PageDown:"last",End:"last"},_t=(e,t,o)=>{const n=((e,t)=>{if("rtl"!==t)return e;switch(e){case F.right:return F.left;case F.left:return F.right;default:return e}})(e.key,o);if(!("vertical"===t&&[F.left,F.right].includes(n)||"horizontal"===t&&[F.up,F.down].includes(n)))return Ct[n]},Mt=e=>{const{activeElement:t}=document;for(const o of e){if(o===t)return;if(o.focus(),t!==document.activeElement)return}},St="currentTabIdChange",Tt="rovingFocusGroup.entryFocus",Bt={bubbles:!1,cancelable:!0},$t=a({name:"ElRovingFocusGroupImpl",inheritAttrs:!1,props:bt,emits:[St,"entryFocus"],setup(e,{emit:t}){var o;const n=s(null!=(o=e.currentTabId||e.defaultCurrentTabId)?o:null),l=s(!1),a=s(!1),r=s(null),{getItems:d}=B(xt,void 0),c=u((()=>[{outline:"none"},e.style])),p=Oe((t=>{var o;null==(o=e.onMousedown)||o.call(e,t)}),(()=>{a.value=!0})),v=Oe((t=>{var o;null==(o=e.onFocus)||o.call(e,t)}),(e=>{const t=!m(a),{target:o,currentTarget:r}=e;if(o===r&&t&&!m(l)){const e=new Event(Tt,Bt);if(null==r||r.dispatchEvent(e),!e.defaultPrevented){const e=d().filter((e=>e.focusable)),t=[e.find((e=>e.active)),e.find((e=>e.id===m(n))),...e].filter(Boolean).map((e=>e.ref));Mt(t)}}a.value=!1})),f=Oe((t=>{var o;null==(o=e.onBlur)||o.call(e,t)}),(()=>{l.value=!1}));T(kt,{currentTabbedId:P(n),loop:R(e,"loop"),tabIndex:u((()=>m(l)?-1:0)),rovingFocusGroupRef:r,rovingFocusGroupRootStyle:c,orientation:R(e,"orientation"),dir:R(e,"dir"),onItemFocus:e=>{t(St,e)},onItemShiftTab:()=>{l.value=!0},onBlur:f,onFocus:v,onMousedown:p}),i((()=>e.currentTabId),(e=>{n.value=null!=e?e:null})),N(r,Tt,((...e)=>{t("entryFocus",...e)}))}});var Ot=w(a({name:"ElRovingFocusGroup",components:{ElFocusGroupCollection:yt,ElRovingFocusGroupImpl:w($t,[["render",function(e,t,o,n,l,a){return b(e.$slots,"default")}],["__file","/home/runner/work/element-plus/element-plus/packages/components/roving-focus-group/src/roving-focus-group-impl.vue"]])}}),[["render",function(e,t,o,n,l,a){const r=A("el-roving-focus-group-impl"),s=A("el-focus-group-collection");return d(),v(s,null,{default:f((()=>[L(r,z(D(e.$attrs)),{default:f((()=>[b(e.$slots,"default")])),_:3},16)])),_:3})}],["__file","/home/runner/work/element-plus/element-plus/packages/components/roving-focus-group/src/roving-focus-group.vue"]]);var Ft=w(a({components:{ElRovingFocusCollectionItem:wt},props:{focusable:{type:Boolean,default:!0},active:{type:Boolean,default:!1}},emits:["mousedown","focus","keydown"],setup(e,{emit:t}){const{currentTabbedId:o,loop:n,onItemFocus:l,onItemShiftTab:a}=B(kt,void 0),{getItems:r}=B(xt,void 0),i=Ee(),d=s(null),c=Oe((e=>{t("mousedown",e)}),(t=>{e.focusable?l(m(i)):t.preventDefault()})),p=Oe((e=>{t("focus",e)}),(()=>{l(m(i))})),v=Oe((e=>{t("keydown",e)}),(e=>{const{key:t,shiftKey:o,target:l,currentTarget:s}=e;if(t===F.tab&&o)return void a();if(l!==s)return;const u=_t(e);if(u){e.preventDefault();let t=r().filter((e=>e.focusable)).map((e=>e.ref));switch(u){case"last":t.reverse();break;case"prev":case"next":{"prev"===u&&t.reverse();const e=t.indexOf(s);t=n.value?(d=e+1,(i=t).map(((e,t)=>i[(t+d)%i.length]))):t.slice(e+1);break}}K((()=>{Mt(t)}))}var i,d})),f=u((()=>o.value===m(i)));return T(Et,{rovingFocusGroupItemRef:d,tabIndex:u((()=>m(f)?0:-1)),handleMousedown:c,handleFocus:p,handleKeydown:v}),{id:i,handleKeydown:v,handleFocus:p,handleMousedown:c}}}),[["render",function(e,t,o,n,l,a){const r=A("el-roving-focus-collection-item");return d(),v(r,{id:e.id,focusable:e.focusable,active:e.active},{default:f((()=>[b(e.$slots,"default")])),_:3},8,["id","focusable","active"])}],["__file","/home/runner/work/element-plus/element-plus/packages/components/roving-focus-group/src/roving-focus-item.vue"]]);const Pt=e({trigger:Fe.trigger,effect:{...Pe.effect,default:"light"},type:{type:l(String)},placement:{type:l(String),default:"bottom"},popperOptions:{type:l(Object),default:()=>({})},id:String,size:{type:String,default:""},splitButton:Boolean,hideOnClick:{type:Boolean,default:!0},loop:{type:Boolean,default:!0},showTimeout:{type:Number,default:150},hideTimeout:{type:Number,default:150},tabindex:{type:l([Number,String]),default:0},maxHeight:{type:l([Number,String]),default:""},popperClass:{type:String,default:""},disabled:{type:Boolean,default:!1},role:{type:String,default:"menu"},buttonProps:{type:l(Object)},teleported:Pe.teleported}),Rt=e({command:{type:[Object,String,Number],default:()=>({})},disabled:Boolean,divided:Boolean,textValue:String,icon:{type:n}}),Nt=e({onKeydown:{type:l(Function)}}),At=[F.down,F.pageDown,F.home],Lt=[F.up,F.pageUp,F.end],zt=[...At,...Lt],{ElCollection:Dt,ElCollectionItem:Kt,COLLECTION_INJECTION_KEY:Ht,COLLECTION_ITEM_INJECTION_KEY:jt}=ht("Dropdown"),Gt=Symbol("elDropdown"),{ButtonGroup:Wt}=Ce;var qt=w(a({name:"ElDropdown",components:{ElButton:Ce,ElButtonGroup:Wt,ElScrollbar:Re,ElDropdownCollection:Dt,ElTooltip:Ne,ElRovingFocusGroup:Ot,ElOnlyChild:Ae,ElIcon:h,ArrowDown:H},props:Pt,emits:["visible-change","click","command"],setup(e,{emit:t}){const o=q(),n=r("dropdown"),{t:l}=j(),a=s(),d=s(),c=s(null),p=s(null),v=s(null),f=s(null),g=s(!1),h=[F.enter,F.space,F.down],b=u((()=>({maxHeight:I(e.maxHeight)}))),y=u((()=>[n.m(C.value)])),w=u((()=>je(e.trigger))),x=Ee().value,k=u((()=>e.id||x));function E(){var e;null==(e=c.value)||e.onClose()}i([a,w],(([e,t],[o])=>{var n,l,a;(null==(n=null==o?void 0:o.$el)?void 0:n.removeEventListener)&&o.$el.removeEventListener("pointerenter",_),(null==(l=null==e?void 0:e.$el)?void 0:l.removeEventListener)&&e.$el.removeEventListener("pointerenter",_),(null==(a=null==e?void 0:e.$el)?void 0:a.addEventListener)&&t.includes("hover")&&e.$el.addEventListener("pointerenter",_)}),{immediate:!0}),O((()=>{var e,t;(null==(t=null==(e=a.value)?void 0:e.$el)?void 0:t.removeEventListener)&&a.value.$el.removeEventListener("pointerenter",_)}));const C=_e();function _(){var e,t;null==(t=null==(e=a.value)?void 0:e.$el)||t.focus()}T(Gt,{contentRef:p,role:u((()=>e.role)),triggerId:k,isUsingKeyboard:g,onItemEnter:function(){},onItemLeave:function(){const e=m(p);w.value.includes("hover")&&(null==e||e.focus()),f.value=null}}),T("elDropdown",{instance:o,dropdownSize:C,handleClick:function(){E()},commandHandler:function(...e){t("command",...e)},trigger:R(e,"trigger"),hideOnClick:R(e,"hideOnClick")});return{t:l,ns:n,scrollbar:v,wrapStyle:b,dropdownTriggerKls:y,dropdownSize:C,triggerId:k,triggerKeys:h,currentTabId:f,handleCurrentTabIdChange:function(e){f.value=e},handlerMainButtonClick:e=>{t("click",e)},handleEntryFocus:function(e){g.value||(e.preventDefault(),e.stopImmediatePropagation())},handleClose:E,handleOpen:function(){var e;null==(e=c.value)||e.onOpen()},handleBeforeShowTooltip:function(){t("visible-change",!0)},handleShowTooltip:function(e){"keydown"===(null==e?void 0:e.type)&&p.value.focus()},handleBeforeHideTooltip:function(){t("visible-change",!1)},onFocusAfterTrapped:e=>{var t,o;e.preventDefault(),null==(o=null==(t=p.value)?void 0:t.focus)||o.call(t,{preventScroll:!0})},popperRef:c,contentRef:p,triggeringElementRef:a,referenceElementRef:d}}}),[["render",function(e,t,o,n,l,a){var r;const s=A("el-dropdown-collection"),u=A("el-roving-focus-group"),i=A("el-scrollbar"),p=A("el-only-child"),m=A("el-tooltip"),g=A("el-button"),h=A("arrow-down"),w=A("el-icon"),x=A("el-button-group");return d(),c("div",{class:y([e.ns.b(),e.ns.is("disabled",e.disabled)])},[L(m,{ref:"popperRef",role:e.role,effect:e.effect,"fallback-placements":["bottom","top"],"popper-options":e.popperOptions,"gpu-acceleration":!1,"hide-after":"hover"===e.trigger?e.hideTimeout:0,"manual-mode":!0,placement:e.placement,"popper-class":[e.ns.e("popper"),e.popperClass],"reference-element":null==(r=e.referenceElementRef)?void 0:r.$el,trigger:e.trigger,"trigger-keys":e.triggerKeys,"trigger-target-el":e.contentRef,"show-after":"hover"===e.trigger?e.showTimeout:0,"stop-popper-mouse-event":!1,"virtual-ref":e.triggeringElementRef,"virtual-triggering":e.splitButton,disabled:e.disabled,transition:`${e.ns.namespace.value}-zoom-in-top`,teleported:e.teleported,pure:"",persistent:"",onBeforeShow:e.handleBeforeShowTooltip,onShow:e.handleShowTooltip,onBeforeHide:e.handleBeforeHideTooltip},G({content:f((()=>[L(i,{ref:"scrollbar","wrap-style":e.wrapStyle,tag:"div","view-class":e.ns.e("list")},{default:f((()=>[L(u,{loop:e.loop,"current-tab-id":e.currentTabId,orientation:"horizontal",onCurrentTabIdChange:e.handleCurrentTabIdChange,onEntryFocus:e.handleEntryFocus},{default:f((()=>[L(s,null,{default:f((()=>[b(e.$slots,"dropdown")])),_:3})])),_:3},8,["loop","current-tab-id","onCurrentTabIdChange","onEntryFocus"])])),_:3},8,["wrap-style","view-class"])])),_:2},[e.splitButton?void 0:{name:"default",fn:f((()=>[L(p,{id:e.triggerId,ref:"triggeringElementRef",role:"button",tabindex:e.tabindex},{default:f((()=>[b(e.$slots,"default")])),_:3},8,["id","tabindex"])]))}]),1032,["role","effect","popper-options","hide-after","placement","popper-class","reference-element","trigger","trigger-keys","trigger-target-el","show-after","virtual-ref","virtual-triggering","disabled","transition","teleported","onBeforeShow","onShow","onBeforeHide"]),e.splitButton?(d(),v(x,{key:0},{default:f((()=>[L(g,E({ref:"referenceElementRef"},e.buttonProps,{size:e.dropdownSize,type:e.type,disabled:e.disabled,tabindex:e.tabindex,onClick:e.handlerMainButtonClick}),{default:f((()=>[b(e.$slots,"default")])),_:3},16,["size","type","disabled","tabindex","onClick"]),L(g,E({id:e.triggerId,ref:"triggeringElementRef"},e.buttonProps,{role:"button",size:e.dropdownSize,type:e.type,class:e.ns.e("caret-button"),disabled:e.disabled,tabindex:e.tabindex,"aria-label":e.t("el.dropdown.toggleDropdown")}),{default:f((()=>[L(w,{class:y(e.ns.e("icon"))},{default:f((()=>[L(h)])),_:1},8,["class"])])),_:1},16,["id","size","type","class","disabled","tabindex","aria-label"])])),_:3})):W("v-if",!0)],2)}],["__file","/home/runner/work/element-plus/element-plus/packages/components/dropdown/src/dropdown.vue"]]);const Ut=a({name:"DropdownItemImpl",components:{ElIcon:h},props:Rt,emits:["pointermove","pointerleave","click","clickimpl"],setup(e,{emit:t}){const o=r("dropdown"),{role:n}=B(Gt,void 0),{collectionItemRef:l}=B(jt,void 0),{collectionItemRef:a}=B(It,void 0),{rovingFocusGroupItemRef:s,tabIndex:i,handleFocus:d,handleKeydown:c,handleMousedown:p}=B(Et,void 0),m=Ge(l,a,s),v=u((()=>"menu"===n.value?"menuitem":"navigation"===n.value?"link":"button")),f=Oe((e=>{const{code:o}=e;if(o===F.enter||o===F.space)return e.preventDefault(),e.stopImmediatePropagation(),t("clickimpl",e),!0}),c);return{ns:o,itemRef:m,dataset:{[gt]:""},role:v,tabIndex:i,handleFocus:d,handleKeydown:f,handleMousedown:p}}}),Vt=["aria-disabled","tabindex","role"];const Jt=()=>{const e=B("elDropdown",{}),t=u((()=>null==e?void 0:e.dropdownSize));return{elDropdown:e,_elDropdownSize:t}};var Yt=w(a({name:"ElDropdownItem",components:{ElDropdownCollectionItem:Kt,ElRovingFocusItem:Ft,ElDropdownItemImpl:w(Ut,[["render",function(e,t,o,n,l,a){const r=A("el-icon");return d(),c(J,null,[e.divided?(d(),c("li",E({key:0,role:"separator",class:e.ns.bem("menu","item","divided")},e.$attrs),null,16)):W("v-if",!0),U("li",E({ref:e.itemRef},{...e.dataset,...e.$attrs},{"aria-disabled":e.disabled,class:[e.ns.be("menu","item"),e.ns.is("disabled",e.disabled)],tabindex:e.tabIndex,role:e.role,onClick:t[0]||(t[0]=t=>e.$emit("clickimpl",t)),onFocus:t[1]||(t[1]=(...t)=>e.handleFocus&&e.handleFocus(...t)),onKeydown:t[2]||(t[2]=V(((...t)=>e.handleKeydown&&e.handleKeydown(...t)),["self"])),onMousedown:t[3]||(t[3]=(...t)=>e.handleMousedown&&e.handleMousedown(...t)),onPointermove:t[4]||(t[4]=t=>e.$emit("pointermove",t)),onPointerleave:t[5]||(t[5]=t=>e.$emit("pointerleave",t))}),[e.icon?(d(),v(r,{key:0},{default:f((()=>[(d(),v(g(e.icon)))])),_:1})):W("v-if",!0),b(e.$slots,"default")],16,Vt)],64)}],["__file","/home/runner/work/element-plus/element-plus/packages/components/dropdown/src/dropdown-item-impl.vue"]])},inheritAttrs:!1,props:Rt,emits:["pointermove","pointerleave","click"],setup(e,{emit:t,attrs:o}){const{elDropdown:n}=Jt(),l=q(),a=s(null),r=u((()=>{var e,t;return null!=(t=null==(e=m(a))?void 0:e.textContent)?t:""})),{onItemEnter:i,onItemLeave:d}=B(Gt,void 0),c=Oe((e=>(t("pointermove",e),e.defaultPrevented)),Le((t=>{if(e.disabled)return void d(t);const o=t.currentTarget;o===document.activeElement||o.contains(document.activeElement)||(i(t),t.defaultPrevented||null==o||o.focus())}))),p=Oe((e=>(t("pointerleave",e),e.defaultPrevented)),Le((e=>{d(e)})));return{handleClick:Oe((o=>{if(!e.disabled)return t("click",o),"keydown"!==o.type&&o.defaultPrevented}),(t=>{var o,a,r;e.disabled?t.stopImmediatePropagation():((null==(o=null==n?void 0:n.hideOnClick)?void 0:o.value)&&(null==(a=n.handleClick)||a.call(n)),null==(r=n.commandHandler)||r.call(n,e.command,l,t))})),handlePointerMove:c,handlePointerLeave:p,textContent:r,propsAndAttrs:u((()=>({...e,...o})))}}}),[["render",function(e,t,o,n,l,a){var r;const s=A("el-dropdown-item-impl"),u=A("el-roving-focus-item"),i=A("el-dropdown-collection-item");return d(),v(i,{disabled:e.disabled,"text-value":null!=(r=e.textValue)?r:e.textContent},{default:f((()=>[L(u,{focusable:!e.disabled},{default:f((()=>[L(s,E(e.propsAndAttrs,{onPointerleave:e.handlePointerLeave,onPointermove:e.handlePointerMove,onClickimpl:e.handleClick}),{default:f((()=>[b(e.$slots,"default")])),_:3},16,["onPointerleave","onPointermove","onClickimpl"])])),_:3},8,["focusable"])])),_:3},8,["disabled","text-value"])}],["__file","/home/runner/work/element-plus/element-plus/packages/components/dropdown/src/dropdown-item.vue"]]);const Zt=a({name:"ElDropdownMenu",props:Nt,setup(e){const t=r("dropdown"),{_elDropdownSize:o}=Jt(),n=o.value,{focusTrapRef:l,onKeydown:a}=B(ze,void 0),{contentRef:s,role:i,triggerId:d}=B(Gt,void 0),{collectionRef:c,getItems:p}=B(Ht,void 0),{rovingFocusGroupRef:v,rovingFocusGroupRootStyle:f,tabIndex:g,onBlur:h,onFocus:b,onMousedown:y}=B(kt,void 0),{collectionRef:w}=B(xt,void 0),x=u((()=>[t.b("menu"),t.bm("menu",null==n?void 0:n.value)])),I=Ge(s,c,l,v,w),k=Oe((t=>{var o;null==(o=e.onKeydown)||o.call(e,t)}),(e=>{const{currentTarget:t,code:o,target:n}=e;if(t.contains(n),F.tab===o&&e.stopImmediatePropagation(),e.preventDefault(),n!==m(s))return;if(!zt.includes(o))return;const l=p().filter((e=>!e.disabled)).map((e=>e.ref));Lt.includes(o)&&l.reverse(),Mt(l)}));return{size:n,rovingFocusGroupRootStyle:f,tabIndex:g,dropdownKls:x,role:i,triggerId:d,dropdownListWrapperRef:I,handleKeydown:e=>{k(e),a(e)},onBlur:h,onFocus:b,onMousedown:y}}}),Qt=["role","aria-labelledby"];var Xt=w(Zt,[["render",function(e,t,o,n,l,a){return d(),c("ul",{ref:e.dropdownListWrapperRef,class:y(e.dropdownKls),style:p(e.rovingFocusGroupRootStyle),tabindex:-1,role:e.role,"aria-labelledby":e.triggerId,onBlur:t[0]||(t[0]=(...t)=>e.onBlur&&e.onBlur(...t)),onFocus:t[1]||(t[1]=(...t)=>e.onFocus&&e.onFocus(...t)),onKeydown:t[2]||(t[2]=V(((...t)=>e.handleKeydown&&e.handleKeydown(...t)),["self"])),onMousedown:t[3]||(t[3]=V(((...t)=>e.onMousedown&&e.onMousedown(...t)),["self"]))},[b(e.$slots,"default")],46,Qt)}],["__file","/home/runner/work/element-plus/element-plus/packages/components/dropdown/src/dropdown-menu.vue"]]);const eo=k(qt,{DropdownItem:Yt,DropdownMenu:Xt}),to=S(Yt),oo=S(Xt);let no=class{constructor(e,t){this.parent=e,this.domNode=t,this.subIndex=0,this.subIndex=0,this.init()}init(){this.subMenuItems=this.domNode.querySelectorAll("li"),this.addListeners()}gotoSubIndex(e){e===this.subMenuItems.length?e=0:e<0&&(e=this.subMenuItems.length-1),this.subMenuItems[e].focus(),this.subIndex=e}addListeners(){const e=this.parent.domNode;Array.prototype.forEach.call(this.subMenuItems,(t=>{t.addEventListener("keydown",(t=>{let o=!1;switch(t.code){case F.down:this.gotoSubIndex(this.subIndex+1),o=!0;break;case F.up:this.gotoSubIndex(this.subIndex-1),o=!0;break;case F.tab:De(e,"mouseleave");break;case F.enter:case F.space:o=!0,t.currentTarget.click()}return o&&(t.preventDefault(),t.stopPropagation()),!1}))}))}},lo=class{constructor(e,t){this.domNode=e,this.submenu=null,this.submenu=null,this.init(t)}init(e){this.domNode.setAttribute("tabindex","0");const t=this.domNode.querySelector(`.${e}-menu`);t&&(this.submenu=new no(this,t)),this.addListeners()}addListeners(){this.domNode.addEventListener("keydown",(e=>{let t=!1;switch(e.code){case F.down:De(e.currentTarget,"mouseenter"),this.submenu&&this.submenu.gotoSubIndex(0),t=!0;break;case F.up:De(e.currentTarget,"mouseenter"),this.submenu&&this.submenu.gotoSubIndex(this.submenu.subMenuItems.length-1),t=!0;break;case F.tab:De(e.currentTarget,"mouseleave");break;case F.enter:case F.space:t=!0,e.currentTarget.click()}t&&e.preventDefault()}))}},ao=class{constructor(e,t){this.domNode=e,this.init(t)}init(e){const t=this.domNode.childNodes;Array.from(t).forEach((t=>{1===t.nodeType&&new lo(t,e)}))}};var ro=w(a({name:"ElMenuCollapseTransition",setup(){const e=r("menu");return{listeners:{onBeforeEnter:e=>e.style.opacity="0.2",onEnter(t,o){Y(t,`${e.namespace.value}-opacity-transition`),t.style.opacity="1",o()},onAfterEnter(t){Z(t,`${e.namespace.value}-opacity-transition`),t.style.opacity=""},onBeforeLeave(t){t.dataset||(t.dataset={}),Q(t,e.m("collapse"))?(Z(t,e.m("collapse")),t.dataset.oldOverflow=t.style.overflow,t.dataset.scrollWidth=t.clientWidth.toString(),Y(t,e.m("collapse"))):(Y(t,e.m("collapse")),t.dataset.oldOverflow=t.style.overflow,t.dataset.scrollWidth=t.clientWidth.toString(),Z(t,e.m("collapse"))),t.style.width=`${t.scrollWidth}px`,t.style.overflow="hidden"},onLeave(e){Y(e,"horizontal-collapse-transition"),e.style.width=`${e.dataset.scrollWidth}px`}}}}}),[["render",function(e,t,o,n,l,a){return d(),v(_,E({mode:"out-in"},e.listeners),{default:f((()=>[b(e.$slots,"default")])),_:3},16)}],["__file","/home/runner/work/element-plus/element-plus/packages/components/menu/src/menu-collapse-transition.vue"]]);function so(e,t){const o=u((()=>{let o=e.parent;const n=[t.value];for(;"ElMenu"!==o.type.name;)o.props.index&&n.unshift(o.props.index),o=o.parent;return n}));return{parentMenu:u((()=>{let t=e.parent;for(;t&&!["ElMenu","ElSubMenu"].includes(t.type.name);)t=t.parent;return t})),indexPath:o}}function uo(e){return u((()=>{const t=e.backgroundColor;return t?new Me(t).shade(20).toString():""}))}const io=(e,t)=>{const o=r("menu");return u((()=>o.cssVarBlock({"text-color":e.textColor||"","hover-text-color":e.textColor||"","bg-color":e.backgroundColor||"","hover-bg-color":uo(e).value||"","active-color":e.activeTextColor||"",level:`${t}`})))},co=e({index:{type:String,required:!0},showTimeout:{type:Number,default:300},hideTimeout:{type:Number,default:300},popperClass:String,disabled:Boolean,popperAppendToBody:{type:Boolean,default:void 0},teleported:{type:Boolean,default:void 0},popperOffset:{type:Number,default:6},expandCloseIcon:{type:n},expandOpenIcon:{type:n},collapseCloseIcon:{type:n},collapseOpenIcon:{type:n}}),po="ElSubMenu";var mo=a({name:po,props:co,setup(e,{slots:t,expose:o}){Se({from:"popper-append-to-body",replacement:"teleported",scope:po,version:"2.3.0",ref:"https://element-plus.org/en-US/component/menu.html#submenu-attributes"},u((()=>void 0!==e.popperAppendToBody)));const n=q(),{indexPath:l,parentMenu:a}=so(n,u((()=>e.index))),d=r("menu"),c=r("sub-menu"),p=B("rootMenu");p||Te(po,"can not inject root menu");const m=B(`subMenu:${a.value.uid}`);m||Te(po,"can not inject sub menu");const v=s({}),f=s({});let g;const b=s(!1),y=s(),w=s(null),I=u((()=>"horizontal"===A.value&&E.value?"bottom-start":"right-start")),k=u((()=>"horizontal"===A.value&&E.value||"vertical"===A.value&&!p.props.collapse?e.expandCloseIcon&&e.expandOpenIcon?S.value?e.expandOpenIcon:e.expandCloseIcon:H:e.collapseCloseIcon&&e.collapseOpenIcon?S.value?e.collapseOpenIcon:e.collapseCloseIcon:le)),E=u((()=>0===m.level)),C=u((()=>{var t;const o=null!=(t=e.teleported)?t:e.popperAppendToBody;return void 0===o?E.value:o})),_=u((()=>p.props.collapse?`${d.namespace.value}-zoom-in-left`:`${d.namespace.value}-zoom-in-top`)),M=u((()=>"horizontal"===A.value&&E.value?["bottom-start","bottom-end","top-start","top-end","right-start","left-start"]:["right-start","right","right-end","left-start","bottom-start","bottom-end","top-start","top-end"])),S=u((()=>p.openedMenus.includes(e.index))),F=u((()=>{let e=!1;return Object.values(v.value).forEach((t=>{t.active&&(e=!0)})),Object.values(f.value).forEach((t=>{t.active&&(e=!0)})),e})),P=u((()=>p.props.backgroundColor||"")),R=u((()=>p.props.activeTextColor||"")),N=u((()=>p.props.textColor||"")),A=u((()=>p.props.mode)),L=X({index:e.index,indexPath:l,active:F}),z=io(p.props,m.level+1),D=u((()=>"horizontal"!==A.value?{color:N.value}:{borderBottomColor:F.value?p.props.activeTextColor?R.value:"":"transparent",color:F.value?R.value:N.value})),K=e=>{var t,o,n;e||null==(n=null==(o=null==(t=w.value)?void 0:t.popperRef)?void 0:o.popperInstanceRef)||n.destroy()},j=()=>{"hover"===p.props.menuTrigger&&"horizontal"===p.props.mode||p.props.collapse&&"vertical"===p.props.mode||e.disabled||p.handleSubMenuClick({index:e.index,indexPath:l.value,active:F.value})},G=(t,o=e.showTimeout)=>{var n;"focus"!==t.type&&("click"===p.props.menuTrigger&&"horizontal"===p.props.mode||!p.props.collapse&&"vertical"===p.props.mode||e.disabled||(m.mouseInChild.value=!0,null==g||g(),({stop:g}=ne((()=>{p.openMenu(e.index,l.value)}),o)),C.value&&(null==(n=a.value.vnode.el)||n.dispatchEvent(new MouseEvent("mouseenter")))))},W=(t=!1)=>{var o,a;"click"===p.props.menuTrigger&&"horizontal"===p.props.mode||!p.props.collapse&&"vertical"===p.props.mode||(null==g||g(),m.mouseInChild.value=!1,({stop:g}=ne((()=>!b.value&&p.closeMenu(e.index,l.value)),e.hideTimeout)),C.value&&t&&"ElSubMenu"===(null==(o=n.parent)?void 0:o.type.name)&&(null==(a=m.handleMouseleave)||a.call(m,!0)))};i((()=>p.props.collapse),(e=>K(Boolean(e))));{const e=e=>{f.value[e.index]=e},t=e=>{delete f.value[e.index]};T(`subMenu:${n.uid}`,{addSubMenu:e,removeSubMenu:t,handleMouseleave:W,mouseInChild:b,level:m.level+1})}return o({opened:S}),$((()=>{p.addSubMenu(L),m.addSubMenu(L)})),O((()=>{m.removeSubMenu(L),p.removeSubMenu(L)})),()=>{var o;const l=[null==(o=t.title)?void 0:o.call(t),ee(h,{class:c.e("icon-arrow"),style:{transform:S.value?e.expandCloseIcon&&e.expandOpenIcon||e.collapseCloseIcon&&e.collapseOpenIcon&&p.props.collapse?"none":"rotateZ(180deg)":"none"}},{default:()=>x(k.value)?ee(n.appContext.components[k.value]):ee(k.value)})],a=p.isMenuPopup?ee(Ne,{ref:w,visible:S.value,effect:"light",pure:!0,offset:e.popperOffset,showArrow:!1,persistent:!0,popperClass:e.popperClass,placement:I.value,teleported:C.value,fallbackPlacements:M.value,transition:_.value,gpuAcceleration:!1},{content:()=>{var o;return ee("div",{class:[d.m(A.value),d.m("popup-container"),e.popperClass],onMouseenter:e=>G(e,100),onMouseleave:()=>W(!0),onFocus:e=>G(e,100)},[ee("ul",{class:[d.b(),d.m("popup"),d.m(`popup-${I.value}`)],style:z.value},[null==(o=t.default)?void 0:o.call(t)])])},default:()=>ee("div",{class:c.e("title"),style:[D.value,{backgroundColor:P.value}],onClick:j},l)}):ee(J,{},[ee("div",{class:c.e("title"),style:[D.value,{backgroundColor:P.value}],ref:y,onClick:j},l),ee(Qe,{},{default:()=>{var e;return te(ee("ul",{role:"menu",class:[d.b(),d.m("inline")],style:z.value},[null==(e=t.default)?void 0:e.call(t)]),[[oe,S.value]])}})]);return ee("li",{class:[c.b(),c.is("active",F.value),c.is("opened",S.value),c.is("disabled",e.disabled)],role:"menuitem",ariaHaspopup:!0,ariaExpanded:S.value,onMouseenter:G,onMouseleave:()=>W(!0),onFocus:G},[a])}}});const vo=e({mode:{type:String,values:["horizontal","vertical"],default:"vertical"},defaultActive:{type:String,default:""},defaultOpeneds:{type:l(Array),default:()=>re([])},uniqueOpened:Boolean,router:Boolean,menuTrigger:{type:String,values:["hover","click"],default:"hover"},collapse:Boolean,backgroundColor:String,textColor:String,activeTextColor:String,collapseTransition:{type:Boolean,default:!0},ellipsis:{type:Boolean,default:!0},popperEffect:{type:String,values:["dark","light"],default:"dark"}}),fo=e=>Array.isArray(e)&&e.every((e=>x(e)));var go=a({name:"ElMenu",props:vo,emits:{close:(e,t)=>x(e)&&fo(t),open:(e,t)=>x(e)&&fo(t),select:(e,t,o,n)=>x(e)&&fo(t)&&se(o)&&(void 0===n||n instanceof Promise)},setup(e,{emit:t,slots:o,expose:n}){const l=q(),a=l.appContext.config.globalProperties.$router,d=s(),c=r("menu"),p=r("sub-menu"),m=s(-1),v=s(e.defaultOpeneds&&!e.collapse?e.defaultOpeneds.slice(0):[]),f=s(e.defaultActive),g=s({}),b=s({}),y=u((()=>"horizontal"===e.mode||"vertical"===e.mode&&e.collapse)),w=(o,n)=>{v.value.includes(o)||(e.uniqueOpened&&(v.value=v.value.filter((e=>n.includes(e)))),v.value.push(o),t("open",o,n))},x=e=>{const t=v.value.indexOf(e);-1!==t&&v.value.splice(t,1)},I=(e,o)=>{x(e),t("close",e,o)},k=({index:e,indexPath:t})=>{v.value.includes(e)?I(e,t):w(e,t)},E=o=>{("horizontal"===e.mode||e.collapse)&&(v.value=[]);const{index:n,indexPath:l}=o;if(!Be(n)&&!Be(l))if(e.router&&a){const e=o.route||n,r=a.push(e).then((e=>(e||(f.value=n),e)));t("select",n,l,{index:n,indexPath:l,route:e},r)}else f.value=n,t("select",n,l,{index:n,indexPath:l})};let C=!0;const _=()=>{const e=()=>{m.value=-1,K((()=>{m.value=(()=>{var e,t;if(!d.value)return-1;const o=Array.from(null!=(t=null==(e=d.value)?void 0:e.childNodes)?t:[]).filter((e=>"#comment"!==e.nodeName&&("#text"!==e.nodeName||e.nodeValue))),n=Number.parseInt(getComputedStyle(d.value).paddingLeft,10),l=Number.parseInt(getComputedStyle(d.value).paddingRight,10),a=d.value.clientWidth-n-l;let r=0,s=0;return o.forEach(((e,t)=>{r+=e.offsetWidth||0,r<=a-64&&(s=t+1)})),s===o.length?-1:s})()}))};C?e():((e,t=33.34)=>{let o;return()=>{o&&clearTimeout(o),o=setTimeout((()=>{e()}),t)}})(e)(),C=!1};let M;i((()=>e.defaultActive),(t=>{g.value[t]||(f.value=""),(t=>{const o=g.value,n=o[t]||f.value&&o[f.value]||o[e.defaultActive];f.value=n?n.index:t})(t)})),i((()=>e.collapse),(e=>{e&&(v.value=[])})),i(g.value,(()=>{const t=f.value&&g.value[f.value];if(!t||"horizontal"===e.mode||e.collapse)return;t.indexPath.forEach((e=>{const t=b.value[e];t&&w(e,t.indexPath)}))})),ae((()=>{"horizontal"===e.mode&&e.ellipsis?M=ue(d,_).stop:null==M||M()}));{const t=e=>{b.value[e.index]=e},o=e=>{delete b.value[e.index]},n=e=>{g.value[e.index]=e},a=e=>{delete g.value[e.index]};T("rootMenu",X({props:e,openedMenus:v,items:g,subMenus:b,activeIndex:f,isMenuPopup:y,addMenuItem:n,removeMenuItem:a,addSubMenu:t,removeSubMenu:o,openMenu:w,closeMenu:I,handleMenuItemClick:E,handleSubMenuClick:k})),T(`subMenu:${l.uid}`,{addSubMenu:t,removeSubMenu:o,mouseInChild:s(!1),level:0})}$((()=>{"horizontal"===e.mode&&new ao(l.vnode.el,c.namespace.value)}));n({open:e=>{const{indexPath:t}=b.value[e];t.forEach((e=>w(e,t)))},close:x,handleResize:_});return()=>{var t,n;let l=null!=(n=null==(t=o.default)?void 0:t.call(o))?n:[];const a=[];if("horizontal"===e.mode&&d.value){const t=Ke(l),o=-1===m.value?t:t.slice(0,m.value),n=-1===m.value?[]:t.slice(m.value);(null==n?void 0:n.length)&&e.ellipsis&&(l=o,a.push(ee(mo,{index:"sub-menu-more",class:p.e("hide-arrow")},{title:()=>ee(h,{class:p.e("icon-more")},{default:()=>ee(ie)}),default:()=>n})))}const r=io(e,0),s=ee("ul",{key:String(e.collapse),role:"menubar",ref:d,style:r.value,class:{[c.b()]:!0,[c.m(e.mode)]:!0,[c.m("collapse")]:e.collapse}},[...l,...a]);return e.collapseTransition&&"vertical"===e.mode?ee(ro,(()=>s)):s}}});const ho=e({index:{type:l([String,null]),default:null},route:{type:l([String,Object])},disabled:Boolean}),bo="ElMenuItem";var yo=w(a({name:bo,components:{ElTooltip:Ne},props:ho,emits:{click:e=>x(e.index)&&Array.isArray(e.indexPath)},setup(e,{emit:t}){const o=q(),n=B("rootMenu"),l=r("menu"),a=r("menu-item");n||Te(bo,"can not inject root menu");const{parentMenu:s,indexPath:i}=so(o,R(e,"index")),d=B(`subMenu:${s.value.uid}`);d||Te(bo,"can not inject sub menu");const c=u((()=>e.index===n.activeIndex)),p=X({index:e.index,indexPath:i,active:c});return $((()=>{d.addSubMenu(p),n.addMenuItem(p)})),O((()=>{d.removeSubMenu(p),n.removeMenuItem(p)})),{parentMenu:s,rootMenu:n,active:c,nsMenu:l,nsMenuItem:a,handleClick:()=>{e.disabled||(n.handleMenuItemClick({index:e.index,indexPath:i.value,route:e.route}),t("click",p))}}}}),[["render",function(e,t,o,n,l,a){const r=A("el-tooltip");return d(),c("li",{class:y([e.nsMenuItem.b(),e.nsMenuItem.is("active",e.active),e.nsMenuItem.is("disabled",e.disabled)]),role:"menuitem",tabindex:"-1",onClick:t[0]||(t[0]=(...t)=>e.handleClick&&e.handleClick(...t))},["ElMenu"===e.parentMenu.type.name&&e.rootMenu.props.collapse&&e.$slots.title?(d(),v(r,{key:0,effect:e.rootMenu.props.popperEffect,placement:"right","fallback-placements":["left"],persistent:""},{content:f((()=>[b(e.$slots,"title")])),default:f((()=>[U("div",{class:y(e.nsMenu.be("tooltip","trigger"))},[b(e.$slots,"default")],2)])),_:3},8,["effect"])):(d(),c(J,{key:1},[b(e.$slots,"default"),b(e.$slots,"title")],64))],2)}],["__file","/home/runner/work/element-plus/element-plus/packages/components/menu/src/menu-item.vue"]]);var wo=w(a({name:"ElMenuItemGroup",props:{title:String},setup:()=>({ns:r("menu-item-group")})}),[["render",function(e,t,o,n,l,a){return d(),c("li",{class:y(e.ns.b())},[U("div",{class:y(e.ns.e("title"))},[e.$slots.title?b(e.$slots,"title",{key:1}):(d(),c(J,{key:0},[de(ce(e.title),1)],64))],2),U("ul",null,[b(e.$slots,"default")])],2)}],["__file","/home/runner/work/element-plus/element-plus/packages/components/menu/src/menu-item-group.vue"]]);const xo=k(go,{MenuItem:yo,MenuItemGroup:wo,SubMenu:mo}),Io=S(yo);S(wo);const ko=S(mo),Eo=""+new URL("../css/default.png",import.meta.url).href,Co=e=>(Ie("data-v-f5b58739"),e=e(),ke(),e),_o=Co((()=>U("div",{class:"el-aside__logo"},null,-1))),Mo=Co((()=>U("span",null,"文章分类",-1))),So=Co((()=>U("span",null,"文章管理",-1))),To=Co((()=>U("span",null,"个人中心",-1))),Bo=Co((()=>U("span",null,"基本资料",-1))),$o=Co((()=>U("span",null,"更换头像",-1))),Oo=Co((()=>U("span",null,"重置密码",-1))),Fo={class:"el-dropdown__box"},Po=$e({__name:"LayoutContainer",setup(e){const t=pe(),o=me();$((()=>{t.getUser()}));const n=async e=>{"logout"===e?(await He.confirm("你确定要退出么","温馨提示",{type:"warning",confirmButtonText:"确认",cancelButtonText:"取消"}),t.removeToken(),t.setUser({}),o.push("/login")):o.push(`/user/${e}`)};return(e,o)=>{const l=h,a=Io,r=ko,s=xo,u=dt,i=Je,c=to,p=oo,g=eo,b=pt,y=A("router-view"),w=mt,x=ct,I=it;return d(),v(I,{class:"layout-container"},{default:f((()=>[L(u,{width:"200px"},{default:f((()=>[_o,L(s,{"active-text-color":"#ffd04b","background-color":"#232323","default-active":e.$route.path,"text-color":"#fff",router:""},{default:f((()=>[L(a,{index:"/article/channel"},{default:f((()=>[L(l,null,{default:f((()=>[L(m(ve))])),_:1}),Mo])),_:1}),L(a,{index:"/article/manage"},{default:f((()=>[L(l,null,{default:f((()=>[L(m(fe))])),_:1}),So])),_:1}),L(r,{index:"/user"},{title:f((()=>[L(l,null,{default:f((()=>[L(m(ge))])),_:1}),To])),default:f((()=>[L(a,{index:"/user/profile"},{default:f((()=>[L(l,null,{default:f((()=>[L(m(he))])),_:1}),Bo])),_:1}),L(a,{index:"/user/avatar"},{default:f((()=>[L(l,null,{default:f((()=>[L(m(be))])),_:1}),$o])),_:1}),L(a,{index:"/user/password"},{default:f((()=>[L(l,null,{default:f((()=>[L(m(ye))])),_:1}),Oo])),_:1})])),_:1})])),_:1},8,["default-active"])])),_:1}),L(I,null,{default:f((()=>[L(b,null,{default:f((()=>[U("div",null,[de(" 黑马程序员："),U("strong",null,ce(m(t).user.nickname||m(t).user.username),1)]),L(g,{onCommand:n,placement:"bottom-end"},{dropdown:f((()=>[L(p,null,{default:f((()=>[L(c,{command:"profile",icon:m(he)},{default:f((()=>[de("基本资料")])),_:1},8,["icon"]),L(c,{command:"avatar",icon:m(be)},{default:f((()=>[de("更换头像")])),_:1},8,["icon"]),L(c,{command:"password",icon:m(ye)},{default:f((()=>[de("重置密码")])),_:1},8,["icon"]),L(c,{command:"logout",icon:m(we)},{default:f((()=>[de("退出登录")])),_:1},8,["icon"])])),_:1})])),default:f((()=>[U("span",Fo,[L(i,{src:m(t).user.user_pic||m(Eo)},null,8,["src"]),L(l,null,{default:f((()=>[L(m(xe))])),_:1})])])),_:1})])),_:1}),L(w,null,{default:f((()=>[L(y)])),_:1}),L(x,null,{default:f((()=>[de("大事件 ©2023 Created by 黑马程序员")])),_:1})])),_:1})])),_:1})}}},[["__scopeId","data-v-f5b58739"]]);export{Po as default};