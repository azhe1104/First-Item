import{m as e,t as s,v as a,x as t,o as r,z as d,F as l,e as o,D as n,f as i,ak as p,a2 as c,g as u,A as y,_ as v,I as h,c as f,b as m}from"../js/index.59ed1cba.js";import{_}from"./_plugin-vue_export-helper-e0fdcb00.js";const g=e({header:{type:String,default:""},bodyStyle:{type:s([String,Object,Array]),default:""},bodyClass:String,shadow:{type:String,values:["always","hover","never"],default:"always"}}),b=a({name:"ElCard"});const S=h(v(a({...b,props:g,setup(e){const s=t("card");return(e,a)=>(r(),d("div",{class:l([o(s).b(),o(s).is(`${e.shadow}-shadow`)])},[e.$slots.header||e.header?(r(),d("div",{key:0,class:l(o(s).e("header"))},[n(e.$slots,"header",{},(()=>[i(p(e.header),1)]))],2)):c("v-if",!0),u("div",{class:l([o(s).e("body"),e.bodyClass]),style:y(e.bodyStyle)},[n(e.$slots,"default")],6)],2))}}),[["__file","/home/runner/work/element-plus/element-plus/packages/components/card/src/card.vue"]])),w={class:"header"},x={class:"extra"},$=_({__name:"PageContainer",props:{title:{required:!0,type:String}},setup:e=>(s,a)=>{const t=S;return r(),f(t,{class:"page-container"},{header:m((()=>[u("div",w,[u("span",null,p(e.title),1),u("div",x,[n(s.$slots,"extra",{},void 0,!0)])])])),default:m((()=>[n(s.$slots,"default",{},void 0,!0)])),_:3})}},[["__scopeId","data-v-fc6260b7"]]);export{$ as P};
