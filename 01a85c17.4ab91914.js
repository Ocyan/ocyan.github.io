/*! For license information please see 01a85c17.4ab91914.js.LICENSE */
(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{131:function(e,t,a){"use strict";a.r(t);a(13);var n=a(0),r=a.n(n),c=a(183),o=a(180);t.default=function(e){const{tags:t}=e,a={};Object.keys(t).forEach(e=>{const t=function(e){return e[0].toUpperCase()}(e);a[t]=a[t]||[],a[t].push(e)});const n=Object.entries(a).sort(([e],[t])=>e===t?0:e>t?1:-1).map(([e,a])=>r.a.createElement("div",{key:e},r.a.createElement("h3",null,e),a.map(e=>r.a.createElement(o.a,{className:"padding-right--md",href:t[e].permalink,key:e},t[e].name," (",t[e].count,")")),r.a.createElement("hr",null))).filter(e=>null!=e);return r.a.createElement(c.a,{title:"Blog Tags",description:"Blog Tags"},r.a.createElement("div",{className:"container margin-vert--xl"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col col--8 col--offset-2"},r.a.createElement("h1",null,"Tags"),r.a.createElement("div",{className:"margin-vert--lg"},n)))))}},179:function(e,t,a){"use strict";var n=a(0),r=a(35);t.a=function(){return Object(n.useContext)(r.a)}},180:function(e,t,a){"use strict";var n=a(0),r=a.n(n),c=a(18);function o(){return(o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}const l=/^\/(?!\/)/;t.a=function(e){const{to:t,href:a}=e,i=t||a,s=l.test(i);let m=!1;const u="undefined"!=typeof window&&"IntersectionObserver"in window;let p;return Object(n.useEffect)(()=>(!u&&s&&window.docusaurus.prefetch(i),()=>{u&&p&&p.disconnect()}),[i,u,s]),i&&s?r.a.createElement(c.b,o({},e,{onMouseEnter:()=>{m||(window.docusaurus.preload(i),m=!0)},innerRef:e=>{u&&e&&s&&((e,t)=>{(p=new window.IntersectionObserver(a=>{a.forEach(a=>{e===a.target&&(a.isIntersecting||a.intersectionRatio>0)&&(p.unobserve(e),p.disconnect(),t())})})).observe(e)})(e,()=>{window.docusaurus.prefetch(i)})},to:i})):r.a.createElement("a",o({},e,{href:i}))}},181:function(e,t,a){"use strict";a.d(t,"a",(function(){return r}));var n=a(179);function r(e){const{siteConfig:t}=Object(n.a)(),{baseUrl:a="/"}=t||{};if(!e)return e;return/^(https?:|\/\/)/.test(e)?e:e.startsWith("/")?a+e.slice(1):a+e}},182:function(e,t,a){var n;!function(){"use strict";var a={}.hasOwnProperty;function r(){for(var e=[],t=0;t<arguments.length;t++){var n=arguments[t];if(n){var c=typeof n;if("string"===c||"number"===c)e.push(n);else if(Array.isArray(n)&&n.length){var o=r.apply(null,n);o&&e.push(o)}else if("object"===c)for(var l in n)a.call(n,l)&&n[l]&&e.push(l)}}return e.join(" ")}e.exports?(r.default=r,e.exports=r):void 0===(n=function(){return r}.apply(t,[]))||(e.exports=n)}()},183:function(e,t,a){"use strict";var n=a(0),r=a.n(n),c=a(34),o=a(179),l=a(181),i=a(180),s=a(188),m=a(182),u=a.n(m),p=a(186),d=a(184),g=a.n(d);function f(){return(f=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}function h(e){const t=Object(l.a)(e.to);return r.a.createElement(i.a,f({className:"navbar__item navbar__link"},e,e.href?{target:"_blank",rel:"noopener noreferrer",href:e.href}:{activeClassName:"navbar__link--active",to:t}),e.label)}var E=function(){const e=Object(o.a)(),[t,a]=Object(n.useState)(!1),[m,d]=Object(n.useState)(!1),[E,v]=Object(p.a)(),{siteConfig:b={}}=e,{baseUrl:y,themeConfig:_={}}=b,{navbar:w={}}=_,{title:j,logo:k={},links:N=[]}=w,O=Object(n.useCallback)(()=>{a(!0)},[a]),C=Object(n.useCallback)(()=>{a(!1)},[a]),x=Object(l.a)(k.src);return r.a.createElement(r.a.Fragment,null,r.a.createElement(c.a,null,r.a.createElement("html",{lang:"en","data-theme":E})),r.a.createElement("nav",{className:u()("navbar","navbar--light","navbar--fixed-top",{"navbar-sidebar--show":t})},r.a.createElement("div",{className:"navbar__inner"},r.a.createElement("div",{className:"navbar__items"},r.a.createElement("div",{"aria-label":"Navigation bar toggle",className:"navbar__toggle",role:"button",tabIndex:0,onClick:O,onKeyDown:O},r.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"30",height:"30",viewBox:"0 0 30 30",role:"img",focusable:"false"},r.a.createElement("title",null,"Menu"),r.a.createElement("path",{stroke:"currentColor",strokeLinecap:"round",strokeMiterlimit:"10",strokeWidth:"2",d:"M4 7h22M4 15h22M4 23h22"}))),r.a.createElement(i.a,{className:"navbar__brand",to:y},null!=k&&r.a.createElement("img",{className:"navbar__logo",src:x,alt:k.alt}),null!=j&&r.a.createElement("strong",{className:m?g.a.hideLogoText:""},j)),N.filter(e=>"right"!==e.position).map((e,t)=>r.a.createElement(h,f({},e,{key:t})))),r.a.createElement("div",{className:"navbar__items navbar__items--right"},N.filter(e=>"right"===e.position).map((e,t)=>r.a.createElement(h,f({},e,{key:t}))),r.a.createElement(s.a,{handleSearchBarToggle:d,isSearchBarExpanded:m}))),r.a.createElement("div",{role:"presentation",className:"navbar-sidebar__backdrop",onClick:()=>{a(!1)}}),r.a.createElement("div",{className:"navbar-sidebar"},r.a.createElement("div",{className:"navbar-sidebar__brand"},r.a.createElement(i.a,{className:"navbar__brand",onClick:C,to:y},null!=k&&r.a.createElement("img",{className:"navbar__logo",src:x,alt:k.alt}),null!=j&&r.a.createElement("strong",null,j))),r.a.createElement("div",{className:"navbar-sidebar__items"},r.a.createElement("div",{className:"menu"},r.a.createElement("ul",{className:"menu__list"},N.map((e,t)=>r.a.createElement("li",{className:"menu__list-item",key:t},r.a.createElement(h,f({className:"menu__link"},e,{onClick:C}))))))))))},v=a(187);a(185);t.a=function(e){var t=Object(o.a)().siteConfig,a=void 0===t?{}:t,n=a.favicon,i=a.tagline,s=a.title,m=a.themeConfig.image,u=a.url,p=a.customFields,d=void 0===p?{}:p,g=e.children,f=e.title,h=e.noFooter,b=e.description,y=e.image,_=e.keywords,w=e.permalink,j=e.tags,k=e.author,N=e.authorTwitter,O=e.date,C=b||d.description,x=_||d.keywords,M=f||s+" \xb7 "+i,A=y||m,I=u+Object(l.a)(A),S=Object(l.a)(n),T=k?"article":"website";return r.a.createElement(r.a.Fragment,null,r.a.createElement(c.a,null,r.a.createElement("meta",{charSet:"utf-8"}),r.a.createElement("meta",{httpEquiv:"x-ua-compatible",content:"ie=edge"}),r.a.createElement("meta",{name:"viewport",content:"width=device-width"}),r.a.createElement("meta",{property:"og:type",content:T}),r.a.createElement("meta",{property:"og:site_name",content:"Ocyan"}),r.a.createElement("meta",{property:"og:locale",content:"en_GB"}),M&&r.a.createElement("title",null,"OCYAN | ",M),n&&r.a.createElement("link",{rel:"shortcut icon",href:S}),w&&r.a.createElement("meta",{property:"og:url",content:u+w})||r.a.createElement("meta",{property:"og:url",content:u}),w&&r.a.createElement("link",{rel:"canonical",href:u+w})||r.a.createElement("link",{rel:"canonical",href:u}),M&&r.a.createElement("meta",{property:"og:title",content:M}),M&&r.a.createElement("meta",{property:"twitter:title",content:M}),M&&r.a.createElement("meta",{itemprop:"name",content:"OCYAN | "+M}),"article"==T&&r.a.createElement("meta",{property:"article:section",content:"technology"}),j&&j.length&&r.a.createElement("meta",{name:"article:tag",content:x.join(",")}),k&&r.a.createElement("meta",{name:"article:author",content:k}),N&&r.a.createElement("meta",{name:"twitter:creator",content:"@"+N}),O&&r.a.createElement("meta",{name:"article:published_time",content:O}),C&&r.a.createElement("meta",{name:"description",content:C}),C&&r.a.createElement("meta",{itemprop:"description",content:C}),C&&r.a.createElement("meta",{property:"og:description",content:C}),C&&r.a.createElement("meta",{property:"twitter:description",content:C}),x&&x.length&&r.a.createElement("meta",{name:"keywords",content:x.join(",")}),I&&r.a.createElement("meta",{itemprop:"image",content:I}),I&&r.a.createElement("meta",{property:"og:image",content:I}),I&&r.a.createElement("meta",{property:"twitter:image",content:I}),I&&r.a.createElement("meta",{name:"twitter:image:alt",content:"Image for "+M}),r.a.createElement("meta",{name:"twitter:site",content:"@ocyan_cloud"}),r.a.createElement("meta",{name:"twitter:card",content:"summary"}),r.a.createElement("meta",{name:"google-site-verification",content:"IFUQ8Ontdw4bha8ChJJjUY0KGf6uy6f_79haAr6j6RI"}),r.a.createElement("meta",{name:"google-site-verification",content:"SbPQpGApMX3M8jPF73c2QADdj_XVK1Z7MBOFzX_LTQ0"}),r.a.createElement("script",{type:"application/ld+json"},'{\n            "@context" : "http://schema.org",\n            "@type" : "Organization",\n            "name" : "Ocyan",\n            "legalName" : "Ocyan Cloud Technology LTD",\n            "url" : "https://ocyan.com",\n            "email" : "contact@ocyan.com",\n            "logo" : "https://ocyan.com/logo.png",\n            "slogan" : "Cross-border financial inclusion for everyone.",\n            "brand" : {\n              "@type" : "Brand",\n              "logo" : "https://ocyan.com/logo.png",\n              "slogan" : "Cross-border financial inclusion for everyone."\n            },\n            "sameAs" : [\n              "https://twitter.com/ocyan_cloud",\n              "https://www.linkedin.com/company/ocyan-tech"\n            ],\n            "address": {\n              "@type": "PostalAddress",\n              "streetAddress": "Summit House, 4 - 5 Mitchell Street, Edinburgh, United Kingdom, EH6 7BD",\n              "addressRegion": "Edinburgh",\n              "postalCode": "EH6 7BD",\n              "addressCountry": "UK"\n            }\n          }')),r.a.createElement(E,null),r.a.createElement("main",{className:"main"},g),!h&&r.a.createElement(v.a,null),r.a.createElement("script",{type:"text/javascript",id:"hs-script-loader",async:!0,defer:!0,src:"//js.hs-scripts.com/6280325.js"}),r.a.createElement("script",{type:"text/javascript",async:!0,defer:!0,src:"/js/twitter.js"}),r.a.createElement("script",{type:"text/javascript",async:!0,defer:!0,src:"/js/gtm.js"}),r.a.createElement("iframe",{src:"https://www.googletagmanager.com/ns.html?id=GTM-WQZQFMN",height:"0",width:"0",style:{display:"none",visibility:"hidden"}}))}},184:function(e,t,a){e.exports={displayOnlyInLargeViewport:"displayOnlyInLargeViewport_16CL",toggle:"toggle_1GuM",moon:"moon_1EKo",sun:"sun_2UBI",hideLogoText:"hideLogoText_2KyX"}},185:function(e,t,a){},186:function(e,t,a){"use strict";var n=a(0);t.a=()=>{const[e,t]=n.useState("undefined"!=typeof document?document.querySelector("html").getAttribute("data-theme"):"");return n.useEffect(()=>{try{t(localStorage.getItem("theme"))}catch(e){console.error(e)}},[t]),[e,n.useCallback(e=>{try{localStorage.setItem("theme",e),t(e)}catch(a){console.error(a)}},[t])]}},187:function(e,t,a){"use strict";var n=a(0),r=a.n(n),c=a(182),o=a.n(c),l=a(180),i=a(179),s=a(181);function m(){return(m=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}function u({item:e}){const t=Object(s.a)(e.to);return r.a.createElement(l.a,m({className:"footer__link-item"},e,e.href?{target:"_blank",rel:"noopener noreferrer",href:e.href}:{to:t}),e.label)}t.a=function(){const e=Object(i.a)(),{siteConfig:t={}}=e,{themeConfig:a={}}=t,{footer:n}=a,{copyright:c,links:l=[],logo:m={}}=n||{},p=Object(s.a)(m.src);return n?r.a.createElement("footer",{className:o()("footer",{"footer--dark":"dark"===n.style})},r.a.createElement("div",{className:"container"},l&&l.length>0&&r.a.createElement("div",{className:"row footer__links"},l.map((e,t)=>r.a.createElement("div",{key:t,className:"col footer__col"},null!=e.title?r.a.createElement("h4",{className:"footer__title"},e.title):null,null!=e.items&&Array.isArray(e.items)&&e.items.length>0?r.a.createElement("ul",{className:"footer__items"},e.items.map((e,t)=>e.html?r.a.createElement("div",{key:t,dangerouslySetInnerHTML:{__html:e.html}}):r.a.createElement("li",{key:e.href||e.to,className:"footer__item"},r.a.createElement(u,{item:e})))):null))),(m||c)&&r.a.createElement("div",{className:"text--center"},m&&m.src&&r.a.createElement("div",{className:"margin-bottom--sm"},r.a.createElement("img",{className:"footer__logo",alt:m.alt,src:p})),c))):null}},188:function(e,t,a){"use strict";var n=()=>null;a.d(t,"a",(function(){return n}))}}]);