/*! For license information please see 81.c4734fc5.js.LICENSE */
(window.webpackJsonp=window.webpackJsonp||[]).push([[81],{221:function(e,t,a){"use strict";var n=a(0),r=a(62);t.a=function(){return Object(n.useContext)(r.a)}},222:function(e,t,a){"use strict";a(59);var n=a(0),r=a.n(n),o=a(41);function c(){return(c=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}var i=/^\/(?!\/)/;t.a=function(e){var t,a=e.to,l=e.href,s=a||l,m=i.test(s),u=!1,f="undefined"!=typeof window&&"IntersectionObserver"in window;return Object(n.useEffect)((function(){return!f&&m&&window.docusaurus.prefetch(s),function(){f&&t&&t.disconnect()}}),[s,f,m]),s&&m?r.a.createElement(o.b,c({},e,{onMouseEnter:function(){u||(window.docusaurus.preload(s),u=!0)},innerRef:function(e){var a,n;f&&e&&m&&(a=e,n=function(){window.docusaurus.prefetch(s)},(t=new window.IntersectionObserver((function(e){e.forEach((function(e){a===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(t.unobserve(a),t.disconnect(),n())}))}))).observe(a))},to:s})):r.a.createElement("a",c({},e,{href:s}))}},223:function(e,t,a){"use strict";a.d(t,"a",(function(){return r}));a(231);var n=a(221);function r(e){var t=(Object(n.a)().siteConfig||{}).baseUrl,a=void 0===t?"/":t;if(!e)return e;return/^(https?:|\/\/)/.test(e)?e:e.startsWith("/")?a+e.slice(1):a+e}},224:function(e,t,a){var n;!function(){"use strict";var a={}.hasOwnProperty;function r(){for(var e=[],t=0;t<arguments.length;t++){var n=arguments[t];if(n){var o=typeof n;if("string"===o||"number"===o)e.push(n);else if(Array.isArray(n)&&n.length){var c=r.apply(null,n);c&&e.push(c)}else if("object"===o)for(var i in n)a.call(n,i)&&n[i]&&e.push(i)}}return e.join(" ")}e.exports?(r.default=r,e.exports=r):void 0===(n=function(){return r}.apply(t,[]))||(e.exports=n)}()},225:function(e,t,a){"use strict";var n=a(0),r=a.n(n),o=a(61),c=a(221),i=a(223),l=(a(59),a(222)),s=a(230),m=a(224),u=a.n(m),f=a(228),d=a(226),p=a.n(d);function h(){return(h=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}function v(e){var t=Object(i.a)(e.to);return r.a.createElement(l.a,h({className:"navbar__item navbar__link"},e,e.href?{target:"_blank",rel:"noopener noreferrer",href:e.href}:{activeClassName:"navbar__link--active",to:t}),e.label)}var g=function(){var e=Object(c.a)(),t=Object(n.useState)(!1),a=t[0],m=t[1],d=Object(n.useState)(!1),g=d[0],E=d[1],b=Object(f.a)(),y=b[0],_=(b[1],e.siteConfig),w=void 0===_?{}:_,k=w.baseUrl,N=w.themeConfig,j=(void 0===N?{}:N).navbar,O=void 0===j?{}:j,C=O.title,x=O.logo,M=void 0===x?{}:x,I=O.links,S=void 0===I?[]:I,F=Object(n.useCallback)((function(){m(!0)}),[m]),A=Object(n.useCallback)((function(){m(!1)}),[m]),L=Object(i.a)(M.src);return r.a.createElement(r.a.Fragment,null,r.a.createElement(o.a,null,r.a.createElement("html",{lang:"en","data-theme":y})),r.a.createElement("nav",{className:u()("navbar","navbar--light","navbar--fixed-top",{"navbar-sidebar--show":a})},r.a.createElement("div",{className:"navbar__inner"},r.a.createElement("div",{className:"navbar__items"},r.a.createElement("div",{"aria-label":"Navigation bar toggle",className:"navbar__toggle",role:"button",tabIndex:0,onClick:F,onKeyDown:F},r.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"30",height:"30",viewBox:"0 0 30 30",role:"img",focusable:"false"},r.a.createElement("title",null,"Menu"),r.a.createElement("path",{stroke:"currentColor",strokeLinecap:"round",strokeMiterlimit:"10",strokeWidth:"2",d:"M4 7h22M4 15h22M4 23h22"}))),r.a.createElement(l.a,{className:"navbar__brand",to:k},null!=M&&r.a.createElement("img",{className:"navbar__logo",src:L,alt:M.alt}),null!=C&&r.a.createElement("strong",{className:g?p.a.hideLogoText:""},C)),S.filter((function(e){return"right"!==e.position})).map((function(e,t){return r.a.createElement(v,h({},e,{key:t}))}))),r.a.createElement("div",{className:"navbar__items navbar__items--right"},S.filter((function(e){return"right"===e.position})).map((function(e,t){return r.a.createElement(v,h({},e,{key:t}))})),r.a.createElement(s.a,{handleSearchBarToggle:E,isSearchBarExpanded:g}))),r.a.createElement("div",{role:"presentation",className:"navbar-sidebar__backdrop",onClick:function(){m(!1)}}),r.a.createElement("div",{className:"navbar-sidebar"},r.a.createElement("div",{className:"navbar-sidebar__brand"},r.a.createElement(l.a,{className:"navbar__brand",onClick:A,to:k},null!=M&&r.a.createElement("img",{className:"navbar__logo",src:L,alt:M.alt}),null!=C&&r.a.createElement("strong",null,C))),r.a.createElement("div",{className:"navbar-sidebar__items"},r.a.createElement("div",{className:"menu"},r.a.createElement("ul",{className:"menu__list"},S.map((function(e,t){return r.a.createElement("li",{className:"menu__list-item",key:t},r.a.createElement(v,h({className:"menu__link"},e,{onClick:A})))}))))))))},E=a(229);a(227);t.a=function(e){var t=Object(c.a)().siteConfig,a=void 0===t?{}:t,n=a.favicon,l=a.tagline,s=a.title,m=a.themeConfig.image,u=a.url,f=a.customFields,d=void 0===f?{}:f,p=e.children,h=e.title,v=e.noFooter,b=e.description,y=e.image,_=e.keywords,w=e.permalink,k=e.tags,N=e.author,j=e.authorTwitter,O=e.date,C=b||d.description,x=_||d.keywords,M=h||s+" \xb7 "+l,I=y||m,S=u+Object(i.a)(I),F=Object(i.a)(n),A=N?"article":"website";return r.a.createElement(r.a.Fragment,null,r.a.createElement(o.a,null,r.a.createElement("meta",{charSet:"utf-8"}),r.a.createElement("meta",{httpEquiv:"x-ua-compatible",content:"ie=edge"}),r.a.createElement("meta",{name:"viewport",content:"width=device-width"}),r.a.createElement("meta",{property:"og:type",content:A}),r.a.createElement("meta",{property:"og:site_name",content:"Ocyan"}),r.a.createElement("meta",{property:"og:locale",content:"en_GB"}),M&&r.a.createElement("title",null,"OCYAN | ",M),n&&r.a.createElement("link",{rel:"shortcut icon",href:F}),w&&r.a.createElement("meta",{property:"og:url",content:u+w}),w&&r.a.createElement("link",{rel:"canonical",href:u+w}),M&&r.a.createElement("meta",{property:"og:title",content:M}),M&&r.a.createElement("meta",{property:"twitter:title",content:M}),M&&r.a.createElement("meta",{itemprop:"name",content:"OCYAN | "+M}),"article"==A&&r.a.createElement("meta",{property:"article:section",content:"technology"}),k&&k.length&&r.a.createElement("meta",{name:"article:tag",content:x.join(",")}),N&&r.a.createElement("meta",{name:"article:author",content:N}),j&&r.a.createElement("meta",{name:"twitter:creator",content:"@"+j}),O&&r.a.createElement("meta",{name:"article:published_time",content:O}),C&&r.a.createElement("meta",{name:"description",content:C}),C&&r.a.createElement("meta",{itemprop:"description",content:C}),C&&r.a.createElement("meta",{property:"og:description",content:C}),C&&r.a.createElement("meta",{property:"twitter:description",content:C}),x&&x.length&&r.a.createElement("meta",{name:"keywords",content:x.join(",")}),I&&r.a.createElement("meta",{itemprop:"image",content:S}),I&&r.a.createElement("meta",{property:"og:image",content:S}),I&&r.a.createElement("meta",{property:"twitter:image",content:S}),I&&r.a.createElement("meta",{name:"twitter:image:alt",content:"Image for "+M}),r.a.createElement("meta",{name:"twitter:site",content:"@ocyan_cloud"}),r.a.createElement("meta",{name:"twitter:card",content:"summary"}),r.a.createElement("meta",{name:"google-site-verification",content:"IFUQ8Ontdw4bha8ChJJjUY0KGf6uy6f_79haAr6j6RI"}),r.a.createElement("meta",{name:"google-site-verification",content:"SbPQpGApMX3M8jPF73c2QADdj_XVK1Z7MBOFzX_LTQ0"})),r.a.createElement(g,null),r.a.createElement("main",{className:"main"},p),!v&&r.a.createElement(E.a,null),r.a.createElement("script",{type:"text/javascript",id:"hs-script-loader",async:!0,defer:!0,src:"//js.hs-scripts.com/6280325.js"}),r.a.createElement("script",{type:"text/javascript",async:!0,defer:!0,src:"/js/twitter.js"}),r.a.createElement("script",{type:"text/javascript",async:!0,defer:!0,src:"/js/gtm.js"}),r.a.createElement("iframe",{src:"https://www.googletagmanager.com/ns.html?id=GTM-WQZQFMN",height:"0",width:"0",style:{display:"none",visibility:"hidden"}}))}},226:function(e,t,a){e.exports={displayOnlyInLargeViewport:"displayOnlyInLargeViewport_16CL",toggle:"toggle_1GuM",moon:"moon_1EKo",sun:"sun_2UBI",hideLogoText:"hideLogoText_2KyX"}},227:function(e,t,a){},228:function(e,t,a){"use strict";var n=a(0);t.a=function(){var e=n.useState("undefined"!=typeof document?document.querySelector("html").getAttribute("data-theme"):""),t=e[0],a=e[1];return n.useEffect((function(){try{a(localStorage.getItem("theme"))}catch(e){console.error(e)}}),[a]),[t,n.useCallback((function(e){try{localStorage.setItem("theme",e),a(e)}catch(t){console.error(t)}}),[a])]}},229:function(e,t,a){"use strict";a(59);var n=a(0),r=a.n(n),o=a(224),c=a.n(o),i=a(222),l=a(221),s=a(223);function m(){return(m=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}function u(e){var t=e.item,a=Object(s.a)(t.to);return r.a.createElement(i.a,m({className:"footer__link-item"},t,t.href?{target:"_blank",rel:"noopener noreferrer",href:t.href}:{to:a}),t.label)}t.a=function(){var e=Object(l.a)().siteConfig,t=(void 0===e?{}:e).themeConfig,a=(void 0===t?{}:t).footer,n=a||{},o=n.copyright,i=n.links,m=void 0===i?[]:i,f=n.logo,d=void 0===f?{}:f,p=Object(s.a)(d.src);return a?r.a.createElement("footer",{className:c()("footer",{"footer--dark":"dark"===a.style})},r.a.createElement("div",{className:"container"},m&&m.length>0&&r.a.createElement("div",{className:"row footer__links"},m.map((function(e,t){return r.a.createElement("div",{key:t,className:"col footer__col"},null!=e.title?r.a.createElement("h4",{className:"footer__title"},e.title):null,null!=e.items&&Array.isArray(e.items)&&e.items.length>0?r.a.createElement("ul",{className:"footer__items"},e.items.map((function(e,t){return e.html?r.a.createElement("div",{key:t,dangerouslySetInnerHTML:{__html:e.html}}):r.a.createElement("li",{key:e.href||e.to,className:"footer__item"},r.a.createElement(u,{item:e}))}))):null)}))),(d||o)&&r.a.createElement("div",{className:"text--center"},d&&d.src&&r.a.createElement("div",{className:"margin-bottom--sm"},r.a.createElement("img",{className:"footer__logo",alt:d.alt,src:p})),o))):null}},230:function(e,t,a){"use strict";var n=function(){return null};a.d(t,"a",(function(){return n}))},231:function(e,t,a){"use strict";var n=a(9),r=a(25),o=a(94),c="".startsWith;n(n.P+n.F*a(95)("startsWith"),"String",{startsWith:function(e){var t=o(this,e,"startsWith"),a=r(Math.min(arguments.length>1?arguments[1]:void 0,t.length)),n=String(e);return c?c.call(t,n,a):t.slice(a,a+n.length)===n}})},242:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(225);t.default=function(){return r.a.createElement(o.a,{title:"Page Not Found"},r.a.createElement("div",{className:"container margin-vert--xl"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col col--6 col--offset-3"},r.a.createElement("h1",{className:"hero__title"},"Page Not Found"),r.a.createElement("p",null,"We could not find what you were looking for."),r.a.createElement("p",null,"Please contact the owner of the site that linked you to the original URL and let them know their link is broken.")))))}}}]);