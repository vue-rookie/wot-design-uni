import{d as t,r as e,q as a,v as l,o as i,c as s,w as o,u as r,e as d,F as n,f as p,n as h,y as u,x as c,i as x,a as w,b as m,h as g,j as y}from"./index-a29608c3.js";import{i as f,K as _,l as v,I as k,v as b,b as j,f as z,a as C}from"./page-wraper.b2442bab.js";import{_ as $}from"./demo-block.bb8975dc.js";import{_ as A,a as L}from"./wd-grid.20a29cd6.js";import"./wd-badge.1dc64e8b.js";import"./useChildren.8329aa88.js";const I=j(t({name:"wd-skeleton",options:{virtualHost:!0,addGlobalClass:!0,styleIsolation:"shared"},props:{theme:f("text"),rowCol:_(),loading:v(!0),animation:{type:String,default:""},customClass:{type:[String,Array,Object],default:""},customStyle:{type:Object,default:()=>({})}},setup(t){const w=t,m={avatar:[{type:"circle",height:"64px",width:"64px"}],image:[{type:"rect",height:"64px",width:"64px"}],text:[1,[{width:"24%",height:"16px",marginRight:"16px"},{width:"76%",height:"16px"}]],paragraph:[1,1,1,{width:"55%"}]},g=e([]),y=a((()=>g.value.map((t=>{if(k(t))return[{class:f({type:"text"}),style:{}}];if(Array.isArray(t))return t.map((t=>({...t,class:f(t),style:_(t)})));const e=t;return[{...e,class:f(e),style:_(e)}]}))));function f(t){return["wd-skeleton__col",`wd-skeleton--type-${t.type||"text"}`,{[`wd-skeleton--animation-${w.animation}`]:w.animation}]}function _(t){const e={},a=["size","width","height","margin","background","marginLeft","marginRight","borderRadius","backgroundColor"];for(const l of a)if(Object.prototype.hasOwnProperty.call(t,l)){const a=b(t[l]);"size"===l?(e.width=a,e.height=a):e[l]=a}return e}l((()=>w.rowCol),(t=>{g.value=[...Array.isArray(t)&&t.length?w.rowCol:m[w.theme]]}),{immediate:!0});const v=a((()=>null==w.loading||!0===w.loading));return(t,e)=>{const a=x;return i(),s(a,{class:h(`wd-skeleton ${t.customClass}`),style:u(t.customStyle)},{default:o((()=>[r(v)?(i(),s(a,{key:0,class:"wd-skeleton__content"},{default:o((()=>[(i(!0),d(n,null,p(r(y),((t,e)=>(i(),s(a,{class:"wd-skeleton__row",key:`row-${e}`},{default:o((()=>[(i(!0),d(n,null,p(t,((t,e)=>(i(),s(a,{key:`col-${e}`,class:h(t.class),style:u(t.style)},null,8,["class","style"])))),128))])),_:2},1024)))),128))])),_:1})):(i(),s(a,{key:1},{default:o((()=>[c(t.$slots,"default",{},void 0,!0)])),_:3}))])),_:3},8,["class","style"])}}}),[["__scopeId","data-v-d9d8a5e4"]]),O=t({__name:"Index",setup(t){const a=[{title:"头像骨架屏",value:"avatar"},{title:"图片骨架屏",value:"image"},{title:"文本骨架屏",value:"text"},{title:"段落骨架屏",value:"paragraph"}],l=[[{width:"48px",height:"48px"},{width:"48px",height:"48px"},{width:"48px",height:"48px"},{width:"48px",height:"48px"},{width:"48px",height:"48px"}],[{width:"48px",height:"16px"},{width:"48px",height:"16px"},{width:"48px",height:"16px"},{width:"48px",height:"16px"},{width:"48px",height:"16px"}]],h=[{height:"171px"},1,{width:"107px"},[{width:"93px"},{width:"32px",marginLeft:"41px"}]],u=e(!0);return(t,e)=>{const c=g(y("wd-skeleton"),I),f=g(y("demo-block"),$),_=x,v=g(y("wd-switch"),z),k=g(y("wd-grid-item"),A),b=g(y("wd-grid"),L),j=g(y("page-wraper"),C);return i(),s(j,null,{default:o((()=>[(i(!0),d(n,null,p(r(a),(t=>(i(),s(f,{key:t.value,title:t.title},{default:o((()=>[w(c,{theme:t.value},null,8,["theme"])])),_:2},1032,["title"])))),128)),w(f,{title:"宫格骨架屏"},{default:o((()=>[w(c,{"row-col":r(l)},null,8,["row-col"])])),_:1}),w(f,{title:"单元格骨架屏"},{default:o((()=>[w(_,{style:{display:"flex"}},{default:o((()=>[w(c,{"row-col":[{size:"48px",type:"circle"}]}),w(c,{"custom-style":{width:"100%",marginLeft:"12px"},"row-col":[{width:"50%"},{width:"100%"}]})])),_:1}),w(_,{style:{display:"flex","margin-top":"20px"}},{default:o((()=>[w(c,{"row-col":[{size:"48px",type:"rect"}]}),w(c,{"custom-style":{width:"100%",marginLeft:"12px"},"row-col":[{width:"50%"},{width:"100%"}]})])),_:1})])),_:1}),w(f,{title:"图片组合骨架屏"},{default:o((()=>[w(c,{"row-col":r(h)},null,8,["row-col"]),w(c,{"custom-style":{marginTop:"20px"},"row-col":r(h)},null,8,["row-col"])])),_:1}),w(f,{title:"渐变加载动画"},{default:o((()=>[w(c,{animation:"gradient",theme:"paragraph"})])),_:1}),w(f,{title:"闪烁加载动画"},{default:o((()=>[w(_,{style:{display:"flex"}},{default:o((()=>[w(c,{"row-col":[{size:"48px",type:"circle"}]}),w(c,{"custom-style":{width:"100%",marginLeft:"12px"},animation:"flashed",theme:"paragraph"})])),_:1})])),_:1}),w(f,{title:"插槽内容"},{default:o((()=>[w(_,{style:{"margin-bottom":"10px"}},{default:o((()=>[m("切换显示")])),_:1}),w(v,{modelValue:u.value,"onUpdate:modelValue":e[0]||(e[0]=t=>u.value=t)},null,8,["modelValue"]),w(_,{style:{height:"20px"}}),w(c,{"row-col":r(l),loading:u.value},{default:o((()=>[w(b,null,{default:o((()=>[w(k,{"icon-size":"32px",icon:"picture",text:"文字"}),w(k,{"icon-size":"32px",icon:"picture",text:"文字"}),w(k,{"icon-size":"32px",icon:"picture",text:"文字"}),w(k,{"icon-size":"32px",icon:"picture",text:"文字"}),w(k,{"icon-size":"32px",icon:"picture",text:"文字"})])),_:1})])),_:1},8,["row-col","loading"])])),_:1})])),_:1})}}});export{O as default};
