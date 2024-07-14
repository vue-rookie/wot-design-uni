import{d as e,r as a,v as l,h as t,j as s,o,c as u,w as n,a as d,b as i,t as r,u as p,p as c,n as m,y as _,g,i as v}from"./index-a29608c3.js";import{g as f,x as w,m as V,l as h,c as b,b as y,a as x}from"./page-wraper.b2442bab.js";import{_ as k}from"./wd-button.4bc5ff5e.js";import{u as z}from"./useTranslate.deea6125.js";import{_ as I}from"./demo-block.bb8975dc.js";const j=y(e({name:"wd-pagination",options:{virtualHost:!0,addGlobalClass:!0,styleIsolation:"shared"},props:{...f,modelValue:w(Number),totalPage:V(1),showIcon:h(!1),showMessage:h(!1),total:V(0),pageSize:V(10),prevText:String,nextText:String,hideIfOnePage:h(!0)},emits:["change","update:modelValue"],setup(e,{emit:f}){const w=e,{translate:V}=z("pagination"),h=a(0);function y(){const{modelValue:e}=w;e>h.value-1||(f("change",{value:e+1}),f("update:modelValue",e+1))}function x(){const{modelValue:e}=w;e<2||(f("change",{value:e-1}),f("update:modelValue",e-1))}return l((()=>w.totalPage),(e=>{!h.value&&e&&(h.value=e)}),{immediate:!0,deep:!0}),l((()=>w.total),(()=>{!function(){const{total:e,pageSize:a}=w;e&&(h.value=Math.ceil(e/a))}()}),{immediate:!0,deep:!0}),(e,a)=>{const l=g,f=t(s("wd-icon"),b),w=t(s("wd-button"),k),z=v;return e.hideIfOnePage&&1===h.value?c("",!0):(o(),u(z,{key:0,class:m(`wd-pager ${e.customClass}`),style:_(e.customStyle)},{default:n((()=>[d(z,{class:"wd-pager__content"},{default:n((()=>[d(w,{plain:e.modelValue>1,type:"info",size:"small",disabled:e.modelValue<=1,"custom-class":"wd-pager__nav",onClick:x},{default:n((()=>[e.showIcon?(o(),u(f,{key:1,size:"14px","custom-class":"wd-pager__left "+(e.modelValue<=1?"wd-pager__nav--disabled":"wd-pager__nav--active"),name:"arrow-right"},null,8,["custom-class"])):(o(),u(l,{key:0},{default:n((()=>[i(r(e.prevText||p(V)("prev")),1)])),_:1}))])),_:1},8,["plain","disabled"]),d(z,{class:"wd-pager__size"},{default:n((()=>[d(l,{class:"wd-pager__current"},{default:n((()=>[i(r(e.modelValue),1)])),_:1}),d(l,{class:"wd-pager__separator"},{default:n((()=>[i("/")])),_:1}),d(l,null,{default:n((()=>[i(r(h.value),1)])),_:1})])),_:1}),d(w,{plain:e.modelValue<h.value,type:"info",size:"small",disabled:e.modelValue>=h.value,"custom-class":"wd-pager__nav",onClick:y},{default:n((()=>[e.showIcon?(o(),u(f,{key:1,size:"14px","custom-class":e.modelValue>=h.value?"wd-pager__nav--disabled":"wd-pager__nav--active",name:"arrow-right"},null,8,["custom-class"])):(o(),u(l,{key:0},{default:n((()=>[i(r(e.nextText||p(V)("next")),1)])),_:1}))])),_:1},8,["plain","disabled"])])),_:1}),e.showMessage?(o(),u(z,{key:0,class:"wd-pager__message"},{default:n((()=>[d(l,null,{default:n((()=>[i(r(p(V)("page",e.modelValue))+"，",1)])),_:1}),e.total?(o(),u(l,{key:0},{default:n((()=>[i(r(p(V)("total",e.total))+"，",1)])),_:1})):c("",!0),d(l,null,{default:n((()=>[i(r(p(V)("size",e.pageSize)),1)])),_:1})])),_:1})):c("",!0)])),_:1},8,["class","style"]))}}}),[["__scopeId","data-v-0d4e8f73"]]),C=y(e({__name:"Index",setup(e){const l=a(1),i=a(190),r=a(1),p=a(19),c=a(1),m=a(160),_=a(20);function g({value:e}){console.log(e)}function v({value:e}){console.log(e)}function f({value:e}){console.log(e)}return(e,a)=>{const w=t(s("wd-pagination"),j),V=t(s("demo-block"),I),h=t(s("page-wraper"),x);return o(),u(h,null,{default:n((()=>[d(V,{title:"基本用法",transparent:""},{default:n((()=>[d(w,{modelValue:l.value,"onUpdate:modelValue":a[0]||(a[0]=e=>l.value=e),total:i.value,onChange:g},null,8,["modelValue","total"])])),_:1}),d(V,{title:"Icon图标",transparent:""},{default:n((()=>[d(w,{modelValue:r.value,"onUpdate:modelValue":a[1]||(a[1]=e=>r.value=e),total:p.value,"show-icon":"",onChange:v},null,8,["modelValue","total"])])),_:1}),d(V,{title:"文字提示",transparent:""},{default:n((()=>[d(w,{modelValue:c.value,"onUpdate:modelValue":a[2]||(a[2]=e=>c.value=e),total:m.value,"page-size":_.value,onChange:f,"show-icon":"","show-message":""},null,8,["modelValue","total","page-size"])])),_:1})])),_:1})}}}),[["__scopeId","data-v-927c3694"]]);export{C as default};
