import{d as e,r as a,q as t,v as l,h as r,j as s,o as n,c as o,w as d,a as i,x as u,n as m,u as c,y as f,e as w,F as h,b as p,t as g,p as v,f as _,i as y}from"./index-a29608c3.js";import{g as k,x as b,i as Y,m as D,l as C,K as x,M,R as $,r as F,h as S,c as T,a2 as V,P as O,N as j,z as W,b as I}from"./page-wraper.b2442bab.js";import{_ as z,a as q}from"./wd-tabs.ed3c9e01.js";import{_ as A}from"./wd-tag.82f0bff5.js";import{i as L,_ as R,d as P,g as H}from"./wd-calendar-view.5653e1ff.js";import{_ as N}from"./wd-button.4bc5ff5e.js";import{_ as U}from"./wd-action-sheet.70fe3cfa.js";import{u as B}from"./useTranslate.deea6125.js";const G=I(e({name:"wd-calendar",options:{addGlobalClass:!0,virtualHost:!0,styleIsolation:"shared"},props:{...k,modelValue:b([Number,Array,null]),type:Y("date"),minDate:D(new Date((new Date).getFullYear(),(new Date).getMonth()-6,(new Date).getDate()).getTime()),maxDate:D(new Date((new Date).getFullYear(),(new Date).getMonth()+6,(new Date).getDate(),23,59,59).getTime()),firstDayOfWeek:D(0),formatter:Function,maxRange:Number,rangePrompt:String,allowSameDay:C(!1),defaultTime:{type:[String,Array]},timeFilter:Function,hideSecond:C(!1),label:String,labelWidth:String,useLabelSlot:C(!1),useDefaultSlot:C(!1),disabled:C(!1),readonly:C(!1),placeholder:String,title:String,alignRight:C(!1),error:C(!1),required:C(!1),size:String,center:C(!1),closeOnClickModal:C(!0),zIndex:D(15),showConfirm:C(!0),confirmText:String,displayFormat:Function,innerDisplayFormat:Function,ellipsis:C(!1),showTypeSwitch:C(!1),shortcuts:x(),onShortcutsClick:Function,safeAreaInsetBottom:C(!0),beforeConfirm:Function,prop:String,rules:x(),customViewClass:Y(""),customLabelClass:Y(""),customValueClass:Y(""),immediateChange:C(!1)},emits:["cancel","change","update:modelValue","confirm"],setup(e,{expose:k,emit:b}){const Y=e,{translate:D}=B("calendar"),C=(e,a)=>{switch(a){case"date":return P(e).format("YYYY-MM-DD");case"dates":return e.map((e=>P(e).format("YYYY-MM-DD"))).join(", ");case"daterange":return`${e[0]?P(e[0]).format("YYYY-MM-DD"):D("startTime")} ${D("to")} ${e[1]?P(e[1]).format("YYYY-MM-DD"):D("endTime")}`;case"datetime":return P(e).format("YYYY-MM-DD HH:mm:ss");case"datetimerange":return`${e[0]?P(e[0]).format(D("timeFormat")):D("startTime")} ${D("to")}\n${e[1]?P(e[1]).format(D("timeFormat")):D("endTime")}`;case"week":{const a=new Date(e).getFullYear(),t=H(e);return D("weekFormat",a,V(t))}case"weekrange":{const a=new Date(e[0]).getFullYear(),t=H(e[0]),l=new Date(e[1]).getFullYear(),r=H(e[1]);return`${e[0]?D("weekFormat",a,V(t)):D("startWeek")} - ${e[1]?D("weekFormat",l,V(r)):D("endWeek")}`}case"month":return P(e).format("YYYY / MM");case"monthrange":return`${e[0]?P(e[0]).format("YYYY / MM"):D("startMonth")} ${D("to")} ${e[1]?P(e[1]).format("YYYY / MM"):D("endMonth")}`}},x=(e,a,t)=>{switch(t){case"daterange":return e?P(e).format(D("dateFormat")):D("end"===a?"endTime":"startTime");case"datetimerange":return e?P(e).format(D("timeFormat")):D("end"===a?"endTime":"startTime");case"weekrange":{if(!e)return D("end"===a?"endWeek":"startWeek");const t=new Date(e).getFullYear(),l=H(e);return D("weekFormat",t,V(l))}case"monthrange":return e?P(e).format(D("monthFormat")):D("end"===a?"endMonth":"startMonth")}},I=a(!1),G=a(null),K=a(null),E=a(338),J=a(!0),Q=a(0),X=a(0),Z=a("date"),ee=a(),ae=a(!1),te=M(),le=a(),re=a(),se=t((()=>{const[e,a]=$(F(G.value)?G.value:[]);return[e,a].map(((e,a)=>(Y.innerDisplayFormat||x)(e,0===a?"start":"end",Z.value)))})),ne=t((()=>!F(Y.modelValue)&&Y.modelValue||F(Y.modelValue)&&Y.modelValue.length?(Y.displayFormat||C)(Y.modelValue,ee.value||Z.value):""));l((()=>Y.modelValue),((e,a)=>{O(e,a)||(G.value=$(e),J.value=we(e))}),{immediate:!0}),l((()=>Y.type),((e,a)=>{if(Y.showTypeSwitch){const a=["date","week","month"],t=["daterange","weekrange","monthrange"],l=e.indexOf("range")>-1?t.indexOf(e)||0:a.indexOf(e);Q.value=l}E.value=Y.showConfirm?338:400,Z.value=$(e)}),{deep:!0,immediate:!0}),l((()=>Y.showConfirm),(e=>{E.value=e?338:400}),{deep:!0,immediate:!0});const{parent:oe}=S(j),de=t((()=>oe&&Y.prop&&oe.errorMessages&&oe.errorMessages[Y.prop]?oe.errorMessages[Y.prop]:"")),ie=t((()=>{let e=!1;if(oe&&oe.props.rules){const a=oe.props.rules;for(const t in a)Object.prototype.hasOwnProperty.call(a,t)&&t===Y.prop&&Array.isArray(a[t])&&(e=a[t].some((e=>e.required)))}return Y.required||Y.rules.some((e=>e.required))||e})),ue=t((()=>e=>L(e)));function me(){const{disabled:e,readonly:a}=Y;e||a||(ae.value=!0,I.value=!0,K.value=$(G.value),X.value=Q.value,ee.value=Z.value,W((()=>{le.value&&le.value&&le.value.$.exposed.scrollIntoView()})),setTimeout((()=>{Y.showTypeSwitch&&(re.value.scrollIntoView(),re.value.updateLineStyle(!1))}),250))}function ce(){I.value=!1,setTimeout((()=>{G.value=$(K.value),Q.value=X.value,Z.value=ee.value||"date",J.value=we(K.value)}),250),b("cancel")}function fe({index:e}){const a=Y.type.indexOf("range")>-1?["daterange","weekrange","monthrange"][e]:["date","week","month"][e];Q.value=e,Z.value=a}function we(e){let a=!1;return(!(Y.type.indexOf("range")>-1)||F(e)&&e[0]&&e[1]&&e)&&("dates"!==Y.type||F(e)&&0!==e.length&&e)&&e||(a=!0),a}function he({value:e}){G.value=$(e),J.value=we(e),b("change",{value:e}),Y.showConfirm||J.value||pe()}function pe(){Y.beforeConfirm?Y.beforeConfirm({value:G.value,resolve:e=>{e&&ge()}}):ge()}function ge(){I.value=!1,ee.value=Z.value,b("update:modelValue",G.value),b("confirm",{value:G.value})}return k({close:ce,open:me}),(e,a)=>{const t=y,l=r(s("wd-icon"),T),k=r(s("wd-tab"),z),b=r(s("wd-tabs"),q),C=r(s("wd-tag"),A),x=r(s("wd-calendar-view"),R),M=r(s("wd-button"),N),S=r(s("wd-action-sheet"),U);return n(),o(t,{class:m(`wd-calendar ${c(te).border.value?"is-border":""} ${e.customClass}`)},{default:d((()=>[i(t,{class:"wd-calendar__field",onClick:me},{default:d((()=>[e.useDefaultSlot?u(e.$slots,"default",{key:0},void 0,!0):(n(),o(t,{key:1,class:m(`wd-calendar__cell ${e.disabled?"is-disabled":""} ${e.readonly?"is-readonly":""} ${e.alignRight?"is-align-right":""} ${e.error?"is-error":""} ${e.size?"is-"+e.size:""} ${e.center?"is-center":""}`)},{default:d((()=>[e.label||e.useLabelSlot?(n(),o(t,{key:0,class:m(`wd-calendar__label ${c(ie)?"is-required":""} ${e.customLabelClass}`),style:f(e.labelWidth?"min-width:"+e.labelWidth+";max-width:"+e.labelWidth+";":"")},{default:d((()=>[e.label?(n(),w(h,{key:0},[p(g(e.label),1)],64)):u(e.$slots,"label",{key:1},void 0,!0)])),_:3},8,["class","style"])):v("",!0),i(t,{class:"wd-calendar__body"},{default:d((()=>[i(t,{class:"wd-calendar__value-wraper"},{default:d((()=>[i(t,{class:m(`wd-calendar__value ${e.ellipsis?"is-ellipsis":""} ${e.customValueClass} ${c(ne)?"":"wd-calendar__value--placeholder"}`)},{default:d((()=>[p(g(c(ne)||e.placeholder||c(D)("placeholder")),1)])),_:1},8,["class"]),e.disabled||e.readonly?v("",!0):(n(),o(l,{key:0,"custom-class":"wd-calendar__arrow",name:"arrow-right"}))])),_:1}),c(de)?(n(),o(t,{key:0,class:"wd-calendar__error-message"},{default:d((()=>[p(g(c(de)),1)])),_:1})):v("",!0)])),_:1})])),_:3},8,["class"]))])),_:3}),i(S,{modelValue:I.value,"onUpdate:modelValue":a[2]||(a[2]=e=>I.value=e),duration:250,"close-on-click-modal":e.closeOnClickModal,"safe-area-inset-bottom":e.safeAreaInsetBottom,"z-index":e.zIndex,onClose:ce},{default:d((()=>[i(t,{class:"wd-calendar__header"},{default:d((()=>[e.showTypeSwitch||0!==e.shortcuts.length?v("",!0):(n(),o(t,{key:0,class:"wd-calendar__title"},{default:d((()=>[p(g(e.title||c(D)("title")),1)])),_:1})),e.showTypeSwitch?(n(),o(t,{key:1,class:"wd-calendar__tabs"},{default:d((()=>[i(b,{ref_key:"calendarTabs",ref:re,modelValue:Q.value,"onUpdate:modelValue":a[0]||(a[0]=e=>Q.value=e),onChange:fe},{default:d((()=>[i(k,{title:c(D)("day"),name:c(D)("day")},null,8,["title","name"]),i(k,{title:c(D)("week"),name:c(D)("week")},null,8,["title","name"]),i(k,{title:c(D)("month"),name:c(D)("month")},null,8,["title","name"])])),_:1},8,["modelValue"])])),_:1})):v("",!0),e.shortcuts.length>0?(n(),o(t,{key:2,class:"wd-calendar__shortcuts"},{default:d((()=>[(n(!0),w(h,null,_(e.shortcuts,((e,a)=>(n(),o(C,{key:a,"custom-class":"wd-calendar__tag",type:"primary",plain:"",round:"",onClick:e=>function(e){Y.onShortcutsClick&&"function"==typeof Y.onShortcutsClick&&(G.value=$(Y.onShortcutsClick({item:Y.shortcuts[e],index:e})),J.value=we(G.value)),Y.showConfirm||pe()}(a)},{default:d((()=>[p(g(e.text),1)])),_:2},1032,["onClick"])))),128))])),_:1})):v("",!0),i(l,{"custom-class":"wd-calendar__close",name:"add",onClick:ce})])),_:1}),ae.value?(n(),o(t,{key:0,class:m(`wd-calendar__view  ${Z.value.indexOf("range")>-1?"is-range":""} ${e.showConfirm?"is-show-confirm":""}`)},{default:d((()=>[c(ue)(e.type)?(n(),o(t,{key:0,class:m("wd-calendar__range-label "+("monthrange"===e.type?"is-monthrange":""))},{default:d((()=>[i(t,{class:m("wd-calendar__range-label-item "+(G.value&&c(F)(G.value)&&G.value[0]?"":"is-placeholder")),style:{"text-align":"right"}},{default:d((()=>[p(g(c(se)[0]),1)])),_:1},8,["class"]),i(t,{class:"wd-calendar__range-sperator"},{default:d((()=>[p("/")])),_:1}),i(t,{class:m("wd-calendar__range-label-item "+(G.value&&c(F)(G.value)&&G.value[1]?"":"is-placeholder"))},{default:d((()=>[p(g(c(se)[1]),1)])),_:1},8,["class"])])),_:1},8,["class"])):v("",!0),i(x,{ref_key:"calendarView",ref:le,modelValue:G.value,"onUpdate:modelValue":a[1]||(a[1]=e=>G.value=e),type:Z.value,"min-date":e.minDate,"max-date":e.maxDate,"first-day-of-week":e.firstDayOfWeek,formatter:e.formatter,"panel-height":E.value,"max-range":e.maxRange,"range-prompt":e.rangePrompt,"allow-same-day":e.allowSameDay,"default-time":e.defaultTime,"time-filter":e.timeFilter,"hide-second":e.hideSecond,"show-panel-title":!c(ue)(e.type),"immediate-change":e.immediateChange,onChange:he},null,8,["modelValue","type","min-date","max-date","first-day-of-week","formatter","panel-height","max-range","range-prompt","allow-same-day","default-time","time-filter","hide-second","show-panel-title","immediate-change"])])),_:1},8,["class"])):v("",!0),e.showConfirm?(n(),o(t,{key:1,class:"wd-calendar__confirm"},{default:d((()=>[i(M,{block:"",disabled:J.value,onClick:pe},{default:d((()=>[p(g(e.confirmText||c(D)("confirm")),1)])),_:1},8,["disabled"])])),_:1})):v("",!0)])),_:1},8,["modelValue","close-on-click-modal","safe-area-inset-bottom","z-index"])])),_:3},8,["class"])}}}),[["__scopeId","data-v-efdbc370"]]);export{G as _};
