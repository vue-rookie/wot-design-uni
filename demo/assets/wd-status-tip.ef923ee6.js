import{_ as e}from"./wd-img.d14b368e.js";import{d as s,q as t,h as a,j as i,o as n,c as g,w as o,u as m,p as c,b as d,t as p,n as r,y as u,i as l}from"./index-a29608c3.js";import{g as w,i as h,s as b,t as k,v as S,p as f,b as y}from"./page-wraper.b2442bab.js";const _=y(s({name:"wd-status-tip",options:{addGlobalClass:!0,virtualHost:!0,styleIsolation:"shared"},props:{...w,image:h("network"),imageSize:{type:[String,Number,Object],default:""},tip:h(""),imageMode:h("aspectFill")},setup(s){const w=s,h=t((()=>{let e="";switch(w.image){case"collect":e="https://img.wot-design-uni.cn/wdu/collect.png";break;case"comment":e="https://img.wot-design-uni.cn/wdu/comment.png";break;case"content":e="https://img.wot-design-uni.cn/wdu/content.png";break;case"halo":e="https://img.wot-design-uni.cn/wdu/halo.png";break;case"message":e="https://img.wot-design-uni.cn/wdu/message.png";break;case"network":e="https://img.wot-design-uni.cn/wdu/network.png";break;case"search":e="https://img.wot-design-uni.cn/wdu/search.png";break;default:e=w.image}return e})),y=t((()=>{let e={};return w.imageSize&&(b(w.imageSize)?(k(w.imageSize.height)&&(e.height=S(w.imageSize.height)),k(w.imageSize.width)&&(e.width=S(w.imageSize.width))):e={height:S(w.imageSize),width:S(w.imageSize)}),`${f(e)}`}));return(s,t)=>{const w=a(i("wd-img"),e),b=l;return n(),g(b,{class:r(`wd-status-tip  ${s.customClass}`),style:u(s.customStyle)},{default:o((()=>[m(h)?(n(),g(w,{key:0,mode:s.imageMode,src:m(h),"custom-class":"wd-status-tip__image","custom-style":m(y)},null,8,["mode","src","custom-style"])):c("",!0),s.tip?(n(),g(b,{key:1,class:"wd-status-tip__text"},{default:o((()=>[d(p(s.tip),1)])),_:1})):c("",!0)])),_:1},8,["class","style"])}}}),[["__scopeId","data-v-a3f5ff9c"]]);export{_};
