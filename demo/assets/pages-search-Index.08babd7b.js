import{d as e,r as a,o as l,c as t,w as o,a as n,b as u,t as s,u as d,z as r,h as c,j as i,i as m,g as p}from"./index-a29608c3.js";import{d as f,e as _,c as v,a as V,b as w}from"./page-wraper.b2442bab.js";import{_ as h}from"./wd-search.90c6001e.js";import{_ as x}from"./demo-block.bb8975dc.js";import{_ as g}from"./wd-popover.bf4dc935.js";import{u as j}from"./clickoutside.632d171d.js";import"./useTranslate.deea6125.js";import"./usePopover.1a4fa3fa.js";const k=w(e({__name:"Index",setup(e){const{closeOutside:w}=j();f();const k=a(!1),U=a(""),b=a("初始文案"),C=a(""),y=a(""),z=a(""),I=a("全部"),M=a([{content:"全部"},{content:"订单号"},{content:"退款单号"}]);function O(e){r({title:"搜索"+e.value})}function P(){r({title:"清空"})}function S(){r({title:"取消"})}function T(e){console.log(e.value)}function q({item:e,index:a}){}return(e,a)=>{const r=c(i("wd-toast"),_),f=c(i("wd-search"),h),j=c(i("demo-block"),x),A=m,B=p,D=c(i("wd-icon"),v),E=c(i("wd-popover"),g),F=c(i("page-wraper"),V);return l(),t(A,{onClick:d(w)},{default:o((()=>[n(r),n(F,null,{default:o((()=>[n(j,{title:"基本用法",transparent:""},{default:o((()=>[n(f,{modelValue:U.value,"onUpdate:modelValue":a[0]||(a[0]=e=>U.value=e),onSearch:O,onChange:T,onCancel:S,onClear:P},null,8,["modelValue"])])),_:1}),n(j,{title:"白色输入框",transparent:""},{default:o((()=>[n(f,{light:""})])),_:1}),n(j,{title:"搜索占位符居左",transparent:""},{default:o((()=>[n(f,{"placeholder-left":""})])),_:1}),n(j,{title:"禁用且隐藏取消按钮",transparent:""},{default:o((()=>[n(f,{disabled:"","hide-cancel":""})])),_:1}),n(A,{style:{margin:"15px 0",color:"#666"}},{default:o((()=>[n(A,{style:{padding:"0 15px",margin:"10px 0","font-size":"13px"}},{default:o((()=>[u("自定义左侧插槽")])),_:1}),n(f,{modelValue:C.value,"onUpdate:modelValue":a[2]||(a[2]=e=>C.value=e)},{prefix:o((()=>[n(E,{modelValue:k.value,"onUpdate:modelValue":a[1]||(a[1]=e=>k.value=e),mode:"menu",content:M.value,onMenuclick:q},{default:o((()=>[n(A,{class:"search-type"},{default:o((()=>[n(B,null,{default:o((()=>[u(s(I.value),1)])),_:1}),n(D,{class:"icon-arrow",name:"fill-arrow-down"})])),_:1})])),_:1},8,["modelValue","content"])])),_:1},8,["modelValue"])])),_:1}),n(j,{title:"自定义右侧文案",transparent:""},{default:o((()=>[n(f,{placeholder:"请输入订单号/订单名称","cancel-txt":"搜索"})])),_:1}),n(j,{title:"设置最大长度",transparent:""},{default:o((()=>[n(f,{modelValue:b.value,"onUpdate:modelValue":a[3]||(a[3]=e=>b.value=e),maxlength:4},null,8,["modelValue"])])),_:1}),n(j,{title:"清空后自动聚焦",transparent:""},{default:o((()=>[n(f,{modelValue:y.value,"onUpdate:modelValue":a[4]||(a[4]=e=>y.value=e),"focus-when-clear":""},null,8,["modelValue"])])),_:1}),n(j,{title:"自动聚焦",transparent:""},{default:o((()=>[n(f,{modelValue:z.value,"onUpdate:modelValue":a[5]||(a[5]=e=>z.value=e),focus:""},null,8,["modelValue"])])),_:1})])),_:1})])),_:1},8,["onClick"])}}}),[["__scopeId","data-v-cef44379"]]);export{k as default};
