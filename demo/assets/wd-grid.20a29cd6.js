import{d as e,r as s,q as t,v as a,m as o,h as r,j as l,o as i,c as n,w as u,a as d,n as p,y as c,x as m,e as g,F as b,a9 as v,u as $,b as h,t as x,aa as f,P as y,ab as k,k as w,i as C}from"./index-a29608c3.js";import{g as _,l as S,i as I,h as T,t as q,W as j,X as z,c as P,Y as N,b as B,O as D}from"./page-wraper.b2442bab.js";import{_ as G}from"./wd-badge.1dc64e8b.js";import{u as H}from"./useChildren.8329aa88.js";const O=Symbol("wd-grid"),E={..._,clickable:S(!1),square:S(!1),column:Number,border:S(!1),bgColor:I(""),gutter:Number},F=B(e({name:"wd-grid-item",options:{virtualHost:!0,addGlobalClass:!0,styleIsolation:"shared"},props:{..._,customText:I(""),customIcon:I(""),icon:I(""),iconSize:I("26px"),text:String,url:String,linkType:I("navigateTo"),useSlot:S(!1),useIconSlot:S(!1),useTextSlot:S(!1),isDot:{type:Boolean,default:void 0},type:String,value:Number,max:Number,badgeProps:Object},emits:["itemclick"],setup(e,{expose:_,emit:S}){const I=e,B=s(""),D=s(""),H=s(""),E=s(0),F=s(!1),L=s(!0),{parent:V}=T(O),W=t((()=>q(V)&&q(V.children)?V.children.length:0)),X=t((()=>j(q(I.badgeProps)?z(I.badgeProps,N):{},z({max:I.max,isDot:I.isDot,modelValue:I.value,type:I.type},N))));function Y(){if(!V)return;const e=V.children,s=V.props.column?100/V.props.column+"%":100/e.length+"%",t=V.props.gutter?`padding:${V.props.gutter}px ${V.props.gutter}px 0 0; background-color: transparent;`:"",a=V.props.square?`background-color:transparent; padding-bottom: 0; padding-top:${s}`:"";D.value=V.props.gutter&&V.props.square?`right: ${V.props.gutter}px; bottom:${V.props.gutter}px;height: auto; background-color: ${V.props.bgColor}`:`background-color: ${V.props.bgColor}`,L.value=Boolean(V.props.border),F.value=Boolean(V.props.square),E.value=Number(V.props.gutter),B.value=`width: ${s}; ${a||t}`}function A(){if(V&&!V.props.clickable)return;const{url:e,linkType:s}=I;if(S("itemclick"),e)switch(s){case"navigateTo":w({url:e});break;case"reLaunch":k({url:e});break;case"redirectTo":y({url:e});break;case"switchTab":f({url:e});break;default:console.error(`[wot-design] warning(wd-grid-item): linkType can not be ${s}`)}}return a((()=>W.value),(()=>{if(!V)return;const e=V.props.column?100/V.props.column+"%":100/(W.value||1)+"%",s=V.props.gutter?`padding:${V.props.gutter}px ${V.props.gutter}px 0 0; background-color: transparent;`:"",t=V.props.square?`background-color:transparent; padding-bottom: 0; padding-top:${e}`:"";B.value=`width: ${e}; ${t||s}`}),{deep:!0,immediate:!0}),o((()=>{Y()})),_({setiIemClass:function(e){H.value=e},itemClass:H,init:Y}),(e,s)=>{const t=r(l("wd-icon"),P),a=r(l("wd-badge"),G),o=C;return i(),n(o,{class:p(`wd-grid-item ${L.value&&!E.value?H.value:""} ${e.customClass}`),onClick:A,style:c(`${B.value};${e.customStyle}`)},{default:u((()=>[d(o,{class:p(`wd-grid-item__content ${F.value?"is-square":""} ${L.value&&E.value>0?"is-round":""}`),style:c(D.value)},{default:u((()=>[e.useSlot?m(e.$slots,"default",{key:0},void 0,!0):(i(),g(b,{key:1},[d(o,{style:c("width:"+e.iconSize+"; height: "+e.iconSize),class:"wd-grid-item__wrapper"},{default:u((()=>[d(a,v({"custom-class":"badge"},$(X)),{default:u((()=>[e.useIconSlot?m(e.$slots,"icon",{key:0},void 0,!0):(i(),n(t,{key:1,name:e.icon,size:e.iconSize,"custom-class":e.customIcon},null,8,["name","size","custom-class"]))])),_:3},16)])),_:3},8,["style"]),e.useTextSlot?m(e.$slots,"text",{key:0},void 0,!0):(i(),n(o,{key:1,class:"wd-grid-item__text custom-text"},{default:u((()=>[h(x(e.text),1)])),_:1}))],64))])),_:3},8,["class","style"])])),_:3},8,["class","style"])}}}),[["__scopeId","data-v-0a34a0b9"]]),L=B(e({name:"wd-grid",options:{virtualHost:!0,addGlobalClass:!0,styleIsolation:"shared"},props:E,setup(e){const s=e,o=()=>new Promise((e=>setTimeout(e,20))),{linkChildren:r,children:l}=H(O);r({props:s}),a((()=>s.column),((e,s)=>{e!==s&&((!e||e<=0)&&console.error("The number of columns attribute value is invalid. The attribute must be greater than 0 and it is not recommended to use a larger value attribute."),s&&b())}),{deep:!0,immediate:!0}),a((()=>s.border),(e=>{e&&Promise.resolve().then(o).then((()=>{b()}))}),{deep:!0,immediate:!0}),a((()=>l),(()=>{g()}),{deep:!0});const d=t((()=>`${s.gutter?"padding-left:"+s.gutter+"px;padding-bottom:"+s.gutter+"px;":""}${s.customStyle}`)),g=D((()=>{b()}),50);function b(){l&&l.forEach(((e,t)=>{if(s.border){const{column:a}=s;if(a){const s=l.length-1===t||(t+1)%a==0,o=t+1<=a;o&&e.$.exposed.setiIemClass("is-first"),s&&e.$.exposed.setiIemClass("is-right"),!o&&e.$.exposed.setiIemClass("is-border")}else e.$.exposed.setiIemClass("is-first");l.length-1===t&&e.$.exposed.setiIemClass(e.$.exposed.itemClass.value+" is-last")}e.$.exposed.init()}))}return(e,s)=>{const t=C;return i(),n(t,{class:p(`wd-grid ${e.customClass}`),style:c($(d))},{default:u((()=>[m(e.$slots,"default",{},void 0,!0)])),_:3},8,["class","style"])}}}),[["__scopeId","data-v-eed24fe4"]]);export{F as _,L as a};
