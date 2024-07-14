import{g as e,w as a,i as l,l as s,m as o,K as t,M as r,h as n,p as i,c as u,N as d,z as c,b as h}from"./page-wraper.b2442bab.js";import{d as p,r as f,v as m,q as b,Q as g,h as x,j as v,o as y,c as _,w,n as $,u as k,y as S,x as C,p as V,a as j,b as L,t as P,i as B,g as I,a2 as T}from"./index-a29608c3.js";import{u as W}from"./useTranslate.deea6125.js";const q=h(p({name:"wd-textarea",options:{virtualHost:!0,addGlobalClass:!0,styleIsolation:"shared"},props:{...e,modelValue:a(""),placeholder:String,placeholderStyle:String,placeholderClass:l(""),disabled:s(!1),maxlength:o(-1),autoFocus:s(!1),focus:s(!1),autoHeight:s(!1),fixed:s(!1),cursorSpacing:o(0),cursor:o(-1),confirmType:l(null),confirmHold:s(!1),showConfirmBar:s(!0),selectionStart:o(-1),selectionEnd:o(-1),adjustPosition:s(!0),disableDefaultPadding:s(!1),holdKeyboard:s(!1),showPassword:s(!1),clearable:s(!1),readonly:s(!1),prefixIcon:String,usePrefixSlot:s(!1),showWordLimit:s(!1),label:String,labelWidth:l("33%"),useLabelSlot:s(!1),size:String,error:s(!1),center:s(!1),noBorder:s(!1),required:s(!1),prop:l(""),rules:t(),customTextareaContainerClass:l(""),customTextareaClass:l(""),customLabelClass:l("")},emits:["update:modelValue","clear","change","blur","focus","input","keyboardheightchange","confirm","linechange","clickprefixicon","click"],setup(e,{emit:a}){const l=e,{translate:s}=W("textarea"),o=f(!1),t=f(!1),h=f(!1),p=f(!1),q=f(""),H=r();m((()=>l.focus),(e=>{p.value=e}),{immediate:!0,deep:!0}),m((()=>l.modelValue),(e=>{const{disabled:a,readonly:s,clearable:t}=l;null==e&&(e="",console.warn("[wot-design] warning(wd-textarea): value can not be null or undefined.")),q.value=e,o.value=Boolean(t&&!a&&!s&&e)}),{immediate:!0,deep:!0});const{parent:z}=n(d),K=b((()=>z&&l.prop&&z.errorMessages&&z.errorMessages[l.prop]?z.errorMessages[l.prop]:"")),M=b((()=>{let e=!1;if(z&&z.props.rules){const a=z.props.rules;for(const s in a)Object.prototype.hasOwnProperty.call(a,s)&&s===l.prop&&Array.isArray(a[s])&&(e=a[s].some((e=>e.required)))}return l.required||l.rules.some((e=>e.required))||e})),F=b((()=>String(l.modelValue||"").length)),A=b((()=>`wd-textarea   ${l.label||l.useLabelSlot?"is-cell":""} ${l.center?"is-center":""} ${H.border.value?"is-border":""} ${l.size?"is-"+l.size:""} ${l.error?"is-error":""} ${l.disabled?"is-disabled":""} ${l.autoHeight?"is-auto-height":""} ${F.value>0?"is-not-empty":""}  ${l.noBorder?"is-no-border":""} ${l.customClass}`)),D=b((()=>`wd-textarea__label ${l.customLabelClass} ${M.value?"is-required":""}`)),E=b((()=>`wd-textarea__placeholder  ${l.placeholderClass}`)),O=b((()=>`${F.value>0?"wd-textarea__count-current":""} ${F.value>l.maxlength?"is-error":""}`)),G=b((()=>l.labelWidth?i({"min-width":l.labelWidth,"max-width":l.labelWidth}):""));function N(e){const{maxlength:a,showWordLimit:s}=l;return s&&-1!==a&&e.length>a?e.toString().substring(0,a):e}function Q(){q.value="",c().then((()=>c())).then((()=>c())).then((()=>{a("change",{value:""}),a("update:modelValue",q.value),a("clear"),c().then((()=>{p.value=!0}))}))}function U({detail:e}){p.value=!1,a("change",{value:q.value}),a("update:modelValue",q.value),a("blur",{value:q.value,cursor:e.cursor?e.cursor:null})}function J({detail:e}){h.value?h.value=!1:(p.value=!0,a("focus",e))}function R(){q.value=N(q.value),a("update:modelValue",q.value),a("input",q.value)}function X({detail:e}){a("keyboardheightchange",e)}function Y({detail:e}){a("confirm",e)}function Z({detail:e}){a("linechange",e)}function ee(){a("clickprefixicon")}return g((()=>{!function(){const{disabled:e,readonly:s,clearable:r,maxlength:n,showWordLimit:i}=l;o.value=Boolean(!e&&!s&&r&&q.value),t.value=Boolean(!e&&!s&&n&&i),q.value=N(q.value),a("update:modelValue",q.value)}()})),(e,a)=>{const l=x(v("wd-icon"),u),r=B,n=I,i=T;return y(),_(r,{class:$(k(A)),style:S(e.customStyle)},{default:w((()=>[e.label||e.useLabelSlot?(y(),_(r,{key:0,class:$(k(D)),style:S(k(G))},{default:w((()=>[e.prefixIcon||e.usePrefixSlot?(y(),_(r,{key:0,class:"wd-textarea__prefix"},{default:w((()=>[e.prefixIcon&&!e.usePrefixSlot?(y(),_(l,{key:0,"custom-class":"wd-textarea__icon",name:e.prefixIcon,onClick:ee},null,8,["name"])):C(e.$slots,"prefix",{key:1},void 0,!0)])),_:3})):V("",!0),j(r,{class:"wd-textarea__label-inner"},{default:w((()=>[e.label?(y(),_(n,{key:0},{default:w((()=>[L(P(e.label),1)])),_:1})):C(e.$slots,"label",{key:1},void 0,!0)])),_:3})])),_:3},8,["class","style"])):V("",!0),j(r,{class:$(`wd-textarea__value ${o.value?"is-suffix":""} ${e.customTextareaContainerClass} ${t.value?"is-show-limit":""}`)},{default:w((()=>[j(i,{class:$(`wd-textarea__inner ${e.customTextareaClass}`),modelValue:q.value,"onUpdate:modelValue":a[0]||(a[0]=e=>q.value=e),"show-count":!1,placeholder:e.placeholder||k(s)("placeholder"),disabled:e.disabled,maxlength:e.maxlength,focus:p.value,"auto-focus":e.autoFocus,"placeholder-style":e.placeholderStyle,"placeholder-class":k(E),"auto-height":e.autoHeight,"cursor-spacing":e.cursorSpacing,fixed:e.fixed,cursor:e.cursor,"show-confirm-bar":e.showConfirmBar,"selection-start":e.selectionStart,"selection-end":e.selectionEnd,"adjust-position":e.adjustPosition,"hold-keyboard":e.holdKeyboard,"confirm-type":e.confirmType,"confirm-hold":e.confirmHold,"disable-default-padding":e.disableDefaultPadding,onInput:R,onFocus:J,onBlur:U,onConfirm:Y,onLinechange:Z,onKeyboardheightchange:X},null,8,["class","modelValue","placeholder","disabled","maxlength","focus","auto-focus","placeholder-style","placeholder-class","auto-height","cursor-spacing","fixed","cursor","show-confirm-bar","selection-start","selection-end","adjust-position","hold-keyboard","confirm-type","confirm-hold","disable-default-padding"]),k(K)?(y(),_(r,{key:0,class:"wd-textarea__error-message"},{default:w((()=>[L(P(k(K)),1)])),_:1})):V("",!0),e.readonly?(y(),_(r,{key:1,class:"wd-textarea__readonly-mask"})):V("",!0),j(r,{class:"wd-textarea__suffix"},{default:w((()=>[o.value?(y(),_(l,{key:0,"custom-class":"wd-textarea__clear",name:"error-fill",onClick:Q})):V("",!0),t.value?(y(),_(r,{key:1,class:"wd-textarea__count"},{default:w((()=>[j(n,{class:$(k(O))},{default:w((()=>[L(P(k(F)),1)])),_:1},8,["class"]),L(" /"+P(e.maxlength),1)])),_:1})):V("",!0)])),_:1})])),_:1},8,["class"])])),_:3},8,["class","style"])}}}),[["__scopeId","data-v-7a8b4f60"]]);export{q as _};
