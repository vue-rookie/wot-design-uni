import{g as e,i as l,l as a,m as t,x as o,h as s,p as d,H as n,c as u,t as i,r,a4 as m,b as c,d as p,e as f,a as _}from"./page-wraper.b2442bab.js";import{d as v,r as g,q as w,v as b,m as y,h as V,j as x,o as h,c as k,w as C,a as $,n as S,u as j,x as E,b as I,t as U,y as A,J as N,g as M,i as F,Q as H,e as Q,F as G,a6 as T,f as q}from"./index-a29608c3.js";import{_ as B}from"./wd-button.4bc5ff5e.js";import{u as D}from"./useChildren.8329aa88.js";import{u as J}from"./useTranslate.deea6125.js";import{_ as O}from"./demo-block.bb8975dc.js";const P=Symbol("wd-collapse"),z={...e,customMoreSlotClass:l(""),modelValue:{type:[String,Array,Boolean]},accordion:a(!1),viewmore:a(!1),useMoreSlot:a(!1),lineNum:t(2)},K=c(v({name:"wd-collapse-item",options:{addGlobalClass:!0,virtualHost:!0,styleIsolation:"shared"},props:{...e,title:l(""),disabled:a(!1),name:o(String),beforeExpend:Function},setup(e,{expose:l}){const a=e,t=".wd-collapse-item__body",{parent:o,index:c}=s(P),p=g(""),f=g(!1),_=g("0.3s"),{proxy:v}=N(),H=w((()=>0===c.value)),Q=w((()=>{let e={height:f.value?p.value+"px":"0px","transition-duration":_.value};return d(e)})),G=w((()=>o?o.props.modelValue:[]));function T(e){n(e,!1,v).then((e=>{if(!e)return;const{height:l}=e;p.value=Number(l)}))}function q(){if(a.disabled)return;let e=a.name;if(!f.value)if(a.beforeExpend){const l=a.beforeExpend(e);if(!l)return;m(l)?l.then((()=>{o&&o.toggle(e,!f.value)})):o&&o.toggle(e,!f.value)}else o&&o.toggle(e,!f.value);else o&&o.toggle(e,!f.value)}return b((()=>G.value),(e=>{const l=a.name;i(e)&&("string"==typeof e&&e===l||r(e)&&e.indexOf(l)>=0)?(T(t),f.value=!0):f.value=!1}),{deep:!0,immediate:!0}),y((()=>{T(t)})),l({getExpanded:function(){return f.value}}),(e,l)=>{const a=M,t=V(x("wd-icon"),u),o=F;return h(),k(o,{class:S(`wd-collapse-item ${e.disabled?"is-disabled":""} is-border ${e.customClass}`),style:A(e.customStyle)},{default:C((()=>[$(o,{class:S("wd-collapse-item__header  "+(j(H)?"wd-collapse-item__header-first":"")),onClick:q},{default:C((()=>[E(e.$slots,"title",{expanded:f.value,disabled:e.disabled,isFirst:j(H)},(()=>[$(a,{class:"wd-collapse-item__title"},{default:C((()=>[I(U(e.title),1)])),_:1}),$(t,{name:"arrow-down","custom-class":"wd-collapse-item__arrow "+(f.value?"is-retract":"")},null,8,["custom-class"])]),!0)])),_:3},8,["class"]),$(o,{class:"wd-collapse-item__wrapper",style:A(j(Q))},{default:C((()=>[$(o,{class:"wd-collapse-item__body"},{default:C((()=>[E(e.$slots,"default",{},void 0,!0)])),_:3})])),_:3},8,["style"])])),_:3},8,["class","style"])}}}),[["__scopeId","data-v-5e571f0e"]]),L=c(v({name:"wd-collapse",options:{addGlobalClass:!0,virtualHost:!0,styleIsolation:"shared"},props:z,emits:["change","update:modelValue"],setup(e,{expose:l,emit:a}){const t=e,{translate:o}=J("collapse"),s=g(0),{linkChildren:d,children:n}=D(P);function m(e){a("update:modelValue",e),a("change",{value:e})}d({props:t,toggle:function(e,l){const{accordion:a,modelValue:o}=t;m(a?e===o?"":e:l?o.concat(e):o.filter((l=>l!==e)))}}),b((()=>t.modelValue),(e=>{const{viewmore:l,accordion:a}=t;a&&"string"!=typeof e?console.error("accordion value must be string"):a||l||r(e)||console.error("value must be Array")}),{deep:!0,immediate:!0}),b((()=>t.lineNum),(e=>{e<=0&&console.error("lineNum must greater than 0")}),{deep:!0,immediate:!0}),H((()=>{const{lineNum:e,viewmore:l,modelValue:a}=t;s.value=l&&!a?e:0}));function c(){a("update:modelValue",!t.modelValue),a("change",{value:!t.modelValue})}return l({toggleAll:(e={})=>{if(t.accordion)return;"boolean"==typeof e&&(e={expanded:e});const{expanded:l,skipDisabled:a}=e,o=[];n.forEach(((e,t)=>{e.disabled&&a?e.$.exposed.getExpanded()&&o.push(e.name||t):(i(l)?l:!e.$.exposed.getExpanded())&&o.push(e.name||t)})),m(o)}}),(e,l)=>{const a=F,t=V(x("wd-icon"),u);return h(),k(a,{class:S(`wd-collapse ${e.viewmore?"is-viewmore":""} ${e.customClass}`),style:A(e.customStyle)},{default:C((()=>[e.viewmore?(h(),k(a,{key:1},{default:C((()=>[$(a,{class:S(`wd-collapse__content ${e.modelValue?"":"is-retract"} `),style:A(`-webkit-line-clamp: ${s.value}; -webkit-box-orient: vertical`)},{default:C((()=>[E(e.$slots,"default",{},void 0,!0)])),_:3},8,["class","style"]),$(a,{class:"wd-collapse__more",onClick:c},{default:C((()=>[e.useMoreSlot?(h(),k(a,{key:0,class:S(e.customMoreSlotClass)},{default:C((()=>[E(e.$slots,"more",{},void 0,!0)])),_:3},8,["class"])):(h(),Q(G,{key:1},[T("span",{class:"wd-collapse__more-txt"},U(e.modelValue?j(o)("retract"):j(o)("expand")),1),$(a,{class:S("wd-collapse__arrow "+(e.modelValue?"is-retract":""))},{default:C((()=>[$(t,{name:"arrow-down"})])),_:1},8,["class"])],64))])),_:3})])),_:3})):E(e.$slots,"default",{key:0},void 0,!0)])),_:3},8,["class","style"])}}}),[["__scopeId","data-v-f6d3aa2b"]]),R=c(v({__name:"Index",setup(e){const l=p(),a=g([{title:"标签1",name:"item1",body:"如订单处于暂停状态，进入“我的订单”页面，找到要取消的订单，点击“取消订单”按钮；选择订单取消原因后，点击“下一步”提交申请即可。"},{title:"标签2",name:"item2",body:"一般情况下，买家只能向商户申请退款，商户确认可以退款后，可以通过接口或者商户平台向微信支付发起退款申请。"},{title:"标签3",name:"item3",body:"将收到的有质量问题的商品照片或者订单截图上传到微信公众账号（微信关注联华华商公众号），我们的工作人员会尽快帮您处理。"},{title:"标签4",name:"item4",body:"七天无理由退换货制度，所有商品在不影响二次销售的情况下7天内（以快递单签收为准）均接受客户退换货。"},{title:"标签5",name:"item5",body:"Q1:优惠券使用详情？详情页面【我的】-【我的优惠】-【优惠券规则说明】。"}]),t=g(),o=g(["item1"]),s=g("item1"),d=g(["item1"]),n=g(!1),u=g(!1),i=g(!1),r=g(["item1"]),m="如订单处于暂停状态，进入“我的订单”页面，找到要取消的订单，点击“取消订单”按钮；选择订单取消原因后，点击“下一步”提交申请即可。",c=g(!0);function v({value:e}){console.log(e)}function w({value:e}){console.log(e)}function b({value:e}){console.log(e)}function y({value:e}){console.log(e)}function S({value:e}){console.log(e)}function j({value:e}){console.log(e)}function E(e){const t=a.value.findIndex((l=>l.name===e));return t>-1&&(a.value[t].body="Q1:七天无理由退换货制度，所有商品在不影响二次销售的情况下7天内（以快递单签收为准）均接受客户退换货。七天无理由退换货制度，所有商品在不影响二次销售的情况下7天内（以快递单签收为准）均接受客户退换货。七天无理由退换货制度，所有商品在不影响二次销售的情况下7天内（以快递单签收为准）均接受客户退换货。七天无理由退换货制度，所有商品在不影响二次销售的情况下7天内（以快递单签收为准）均接受客户退换货。七天无理由退换货制度，所有商品在不影响二次销售的情况下7天内（以快递单签收为准）均接受客户退换货。七天无理由退换货制度，所有商品在不影响二次销售的情况下7天内（以快递单签收为准）均接受客户退换货。"),new Promise(((e,a)=>{l.loading("加载中"),setTimeout((()=>{l.close(),e(!0)}),500)}))}return g("item1"),(e,l)=>{const p=V(x("wd-toast"),f),g=V(x("wd-button"),B),A=V(x("wd-collapse-item"),K),N=V(x("wd-collapse"),L),H=V(x("demo-block"),O),T=M,D=F,J=V(x("page-wraper"),_);return h(),k(J,null,{default:C((()=>[$(p),$(H,{title:"基础用法",transparent:""},{default:C((()=>[$(g,{onClick:l[0]||(l[0]=e=>{var l;return null==(l=t.value)?void 0:l.toggleAll()})},{default:C((()=>[I("toggleAll")])),_:1}),$(N,{ref_key:"collapse",ref:t,modelValue:o.value,"onUpdate:modelValue":l[1]||(l[1]=e=>o.value=e),onChange:v},{default:C((()=>[(h(!0),Q(G,null,q(a.value,((e,l)=>(h(),k(A,{"before-expend":2===l?E:void 0,key:l,title:e.title,name:e.name},{default:C((()=>[I(U(e.body),1)])),_:2},1032,["before-expend","title","name"])))),128))])),_:1},8,["modelValue"])])),_:1}),$(H,{title:"自定义title",transparent:""},{default:C((()=>[$(N,{modelValue:r.value,"onUpdate:modelValue":l[2]||(l[2]=e=>r.value=e)},{default:C((()=>[$(A,{name:"item1"},{title:C((({expanded:e})=>[$(T,{style:{color:"red"}},{default:C((()=>[I("通过 slot 自定义标题")])),_:1}),$(T,null,{default:C((()=>[I(U(e?"我展开了":"我已收起"),1)])),_:2},1024)])),default:C((()=>[I(" "+U(m))])),_:1}),$(A,{name:"item2",disabled:""},{title:C((({expanded:e,disabled:l})=>[l?(h(),k(T,{key:0},{default:C((()=>[I("被禁用")])),_:1})):(h(),k(T,{key:1,style:{color:"red"}},{default:C((()=>[I("通过 slot 自定义 title")])),_:1})),$(T,null,{default:C((()=>[I(U(e?"我展开了":"我已收起"),1)])),_:2},1024)])),default:C((()=>[I(" "+U(m))])),_:1})])),_:1},8,["modelValue"])])),_:1}),$(H,{title:"手风琴",transparent:""},{default:C((()=>[$(N,{modelValue:s.value,"onUpdate:modelValue":l[3]||(l[3]=e=>s.value=e),accordion:c.value,onChange:w},{default:C((()=>[$(A,{title:"标签1",name:"item1"},{default:C((()=>[I("这是一条简单的示例文字。")])),_:1}),$(A,{title:"标签2",name:"item2"},{default:C((()=>[I(" 这是一条简单的示例文字。这是一条简单的示例文字。这是一条简单的示例文字。这是一条简单的示例文字。这是一条简单的示例文字。这是一条简单的示例文字。这是一条简单的示例文字。这是一条简单的示例文字。 ")])),_:1}),$(A,{title:"标签3",name:"item3"},{default:C((()=>[I("这是一条简单的示例文字。")])),_:1})])),_:1},8,["modelValue","accordion"])])),_:1}),$(H,{title:"禁用",transparent:""},{default:C((()=>[$(N,{modelValue:d.value,"onUpdate:modelValue":l[4]||(l[4]=e=>d.value=e),onChange:b},{default:C((()=>[$(A,{title:"标签1",name:"item1"},{default:C((()=>[I(" 这是一条简单的示例文字。这是一条简单的示例文字。这是一条简单的示例文字。这是一条简单的示例文字。这是一条简单的示例文字。这是一条简单的示例文字。这是一条简单的示例文字。这是一条简单的示例文字。 ")])),_:1}),$(A,{title:"标签2",name:"item2",disabled:""},{default:C((()=>[I("这是一条简单的示例文字。")])),_:1}),$(A,{title:"标签3",name:"item3"},{default:C((()=>[I("这是一条简单的示例文字。")])),_:1})])),_:1},8,["modelValue"])])),_:1}),$(H,{title:"查看更多",transparent:""},{default:C((()=>[$(N,{viewmore:"",modelValue:n.value,"onUpdate:modelValue":l[5]||(l[5]=e=>n.value=e),onChange:y},{default:C((()=>[I(" 这是一条简单的示例文字。这是一条简单的示例文字。这是一条简单的示例文字。这是一条简单的示例文字。这是一条简单的示例文字。这是一条简单的示例文字。这是一条简单的示例文字。这是一条简单的示例文字。 ")])),_:1},8,["modelValue"])])),_:1}),$(H,{title:"查看更多-行数显示设置",transparent:""},{default:C((()=>[$(N,{viewmore:"",modelValue:u.value,"onUpdate:modelValue":l[6]||(l[6]=e=>u.value=e),onChange:S,"line-num":3},{default:C((()=>[I(" 行数显示设置：这是一条简单的示例文字。这是一条简单的示例文字。这是一条简单的示例文字。这是一条简单的示例文字。这是一条简单的示例文字。这是一条简单的示例文字。这是一条简单的示例文字。这是一条简单的示例文字。 ")])),_:1},8,["modelValue"])])),_:1}),$(H,{title:"查看更多-具名插槽",transparent:""},{default:C((()=>[$(N,{viewmore:"",modelValue:i.value,"onUpdate:modelValue":l[7]||(l[7]=e=>i.value=e),onChange:j,"use-more-slot":"","custom-more-slot-class":"more-slot"},{more:C((()=>[$(D,null,{default:C((()=>[I("显示全部")])),_:1})])),default:C((()=>[I(" 具名插槽：这是一条简单的示例文字。这是一条简单的示例文字。这是一条简单的示例文字。这是一条简单的示例文字。这是一条简单的示例文字。这是一条简单的示例文字。这是一条简单的示例文字。这是一条简单的示例文字。 ")])),_:1},8,["modelValue"])])),_:1})])),_:1})}}}),[["__scopeId","data-v-0b8fc2f9"]]);export{R as default};
