/*! For license information please see c4f5d8e4.ab8d4770.js.LICENSE */
(window.webpackJsonp=window.webpackJsonp||[]).push([[44],{143:function(e,t,a){"use strict";a.r(t);a(59);var n=a(0),r=a.n(n),o=a(203),c=a.n(o),l=a(204),i=a(201),s=a(200),m=a(202),u=a(214),d=a.n(u);function f(){return(f=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}var p=[{title:r.a.createElement(r.a.Fragment,null,"End-to-end Managed Integrations"),imageUrl:"images/illustrations/icons/data-center.svg",description:r.a.createElement(r.a.Fragment,null,"Production-ready infrastructure for blockchain applications and connected integrations. Scale automatically and develop a visual of your applications")},{title:r.a.createElement(r.a.Fragment,null,"Blockchain Consortia"),imageUrl:"images/illustrations/icons/team-2.svg",description:r.a.createElement(r.a.Fragment,null,"Manage your integration to any blockchain consortium, Ocyan templates and integrates all the required operations. Flexibility to switch to a different protocol anytime")},{title:r.a.createElement(r.a.Fragment,null,"Data Pipeline & Analytics"),imageUrl:"images/illustrations/icons/analysing.svg",description:r.a.createElement(r.a.Fragment,null,"Understand your product, analyse the traffic and usage of your application in the network. Gain deep cost, performance and application insights")}];function g(e){var t=e.imageUrl,a=e.title,n=e.description,o=Object(m.a)(t);return r.a.createElement("div",{className:c()("col col--4",d.a.feature)},o&&r.a.createElement("div",{className:"text--center"},r.a.createElement("img",{className:d.a.featureImage,src:o,alt:a})),r.a.createElement("h3",null,a),r.a.createElement("p",null,n))}t.default=function(){var e=Object(s.a)().siteConfig,t=void 0===e?{}:e;return r.a.createElement(l.a,{title:""+t.title,description:""+t.customFields.description,keywords:t.customFields.keywords},r.a.createElement("header",{className:c()("hero hero--announcement",d.a.heroAnnouncement)},r.a.createElement("div",{className:"row container"},r.a.createElement("div",{className:"col col--8 col--offset-2"},r.a.createElement("span",{className:"badge badge--secondary"},"Article"),r.a.createElement("h1",{className:"hero__title"},"Powering the enterprise with multi-cloud Blockchain infrastructure"),r.a.createElement("p",{className:"hero__subtitle"},"Read more about integrating and deploying production scale Blockchain applications."),r.a.createElement("div",{className:d.a.buttons},r.a.createElement(i.a,{className:c()("button button--outline button--primary button--lg",d.a.getStarted),to:Object(m.a)("learn/hello-from-ocyan")},"Learn More"))))),r.a.createElement("header",{className:c()("hero hero--primary",d.a.heroBanner)},r.a.createElement("div",{className:"container"},r.a.createElement("h1",{className:"hero__title"},t.title),r.a.createElement("p",{className:"hero__subtitle"},t.tagline),r.a.createElement("div",{className:d.a.buttons},r.a.createElement(i.a,{className:c()("button button--secondary button--lg",d.a.getStarted),to:Object(m.a)("docs/get-started")},"Get Started")))),r.a.createElement("main",null,r.a.createElement("div",{className:"row sub-hero"},r.a.createElement("div",{className:"col col--4 col--offset-4"},r.a.createElement("h1",null,"Blockchain for your Digital Transformation"),r.a.createElement("h4",null,"Gain rapid scale-up for your blockchain integration."),r.a.createElement("div",{className:d.a.buttons}),r.a.createElement("hr",null))),p&&p.length&&r.a.createElement("section",{className:d.a.features},r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},p.map((function(e,t){return r.a.createElement(g,f({key:t},e))})))))),r.a.createElement("header",{className:c()("hero hero--secondary",d.a.heroBanner)},r.a.createElement("div",{className:"container"},r.a.createElement("h1",{className:"hero__title"},"Your Platform"),r.a.createElement("p",{className:"hero__subtitle"},"Blockchain Automation within your premises"),r.a.createElement("div",{className:d.a.buttons},r.a.createElement(i.a,{className:c()("button button--secondary button--lg",d.a.getStarted),to:Object(m.a)("docs/get-started")},"Get Started")))))}},200:function(e,t,a){"use strict";var n=a(0),r=a(62);t.a=function(){return Object(n.useContext)(r.a)}},201:function(e,t,a){"use strict";a(59);var n=a(0),r=a.n(n),o=a(41);function c(){return(c=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}var l=/^\/(?!\/)/;t.a=function(e){var t,a=e.to,i=e.href,s=a||i,m=l.test(s),u=!1,d="undefined"!=typeof window&&"IntersectionObserver"in window;return Object(n.useEffect)((function(){return!d&&m&&window.docusaurus.prefetch(s),function(){d&&t&&t.disconnect()}}),[s,d,m]),s&&m?r.a.createElement(o.b,c({},e,{onMouseEnter:function(){u||(window.docusaurus.preload(s),u=!0)},innerRef:function(e){var a,n;d&&e&&m&&(a=e,n=function(){window.docusaurus.prefetch(s)},(t=new window.IntersectionObserver((function(e){e.forEach((function(e){a===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(t.unobserve(a),t.disconnect(),n())}))}))).observe(a))},to:s})):r.a.createElement("a",c({},e,{href:s}))}},202:function(e,t,a){"use strict";a.d(t,"a",(function(){return r}));a(210);var n=a(200);function r(e){var t=(Object(n.a)().siteConfig||{}).baseUrl,a=void 0===t?"/":t;if(!e)return e;return/^(https?:|\/\/)/.test(e)?e:e.startsWith("/")?a+e.slice(1):a+e}},203:function(e,t,a){var n;!function(){"use strict";var a={}.hasOwnProperty;function r(){for(var e=[],t=0;t<arguments.length;t++){var n=arguments[t];if(n){var o=typeof n;if("string"===o||"number"===o)e.push(n);else if(Array.isArray(n)&&n.length){var c=r.apply(null,n);c&&e.push(c)}else if("object"===o)for(var l in n)a.call(n,l)&&n[l]&&e.push(l)}}return e.join(" ")}e.exports?(r.default=r,e.exports=r):void 0===(n=function(){return r}.apply(t,[]))||(e.exports=n)}()},204:function(e,t,a){"use strict";var n=a(0),r=a.n(n),o=a(61),c=a(200),l=a(202),i=(a(59),a(201)),s=a(209),m=a(203),u=a.n(m),d=a(207),f=a(205),p=a.n(f);function g(){return(g=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}function h(e){var t=Object(l.a)(e.to);return r.a.createElement(i.a,g({className:"navbar__item navbar__link"},e,e.href?{target:"_blank",rel:"noopener noreferrer",href:e.href}:{activeClassName:"navbar__link--active",to:t}),e.label)}var v=function(){var e=Object(c.a)(),t=Object(n.useState)(!1),a=t[0],m=t[1],f=Object(n.useState)(!1),v=f[0],E=f[1],b=Object(d.a)(),y=b[0],_=(b[1],e.siteConfig),N=void 0===_?{}:_,w=N.baseUrl,k=N.themeConfig,O=(void 0===k?{}:k).navbar,j=void 0===O?{}:O,C=j.title,x=j.logo,S=void 0===x?{}:x,F=j.links,I=void 0===F?[]:F,A=Object(n.useCallback)((function(){m(!0)}),[m]),B=Object(n.useCallback)((function(){m(!1)}),[m]),M=Object(l.a)(S.src);return r.a.createElement(r.a.Fragment,null,r.a.createElement(o.a,null,r.a.createElement("html",{lang:"en","data-theme":y})),r.a.createElement("nav",{className:u()("navbar","navbar--light","navbar--fixed-top",{"navbar-sidebar--show":a})},r.a.createElement("div",{className:"navbar__inner"},r.a.createElement("div",{className:"navbar__items"},r.a.createElement("div",{"aria-label":"Navigation bar toggle",className:"navbar__toggle",role:"button",tabIndex:0,onClick:A,onKeyDown:A},r.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"30",height:"30",viewBox:"0 0 30 30",role:"img",focusable:"false"},r.a.createElement("title",null,"Menu"),r.a.createElement("path",{stroke:"currentColor",strokeLinecap:"round",strokeMiterlimit:"10",strokeWidth:"2",d:"M4 7h22M4 15h22M4 23h22"}))),r.a.createElement(i.a,{className:"navbar__brand",to:w},null!=S&&r.a.createElement("img",{className:"navbar__logo",src:M,alt:S.alt}),null!=C&&r.a.createElement("strong",{className:v?p.a.hideLogoText:""},C)),I.filter((function(e){return"right"!==e.position})).map((function(e,t){return r.a.createElement(h,g({},e,{key:t}))}))),r.a.createElement("div",{className:"navbar__items navbar__items--right"},I.filter((function(e){return"right"===e.position})).map((function(e,t){return r.a.createElement(h,g({},e,{key:t}))})),r.a.createElement(s.a,{handleSearchBarToggle:E,isSearchBarExpanded:v}))),r.a.createElement("div",{role:"presentation",className:"navbar-sidebar__backdrop",onClick:function(){m(!1)}}),r.a.createElement("div",{className:"navbar-sidebar"},r.a.createElement("div",{className:"navbar-sidebar__brand"},r.a.createElement(i.a,{className:"navbar__brand",onClick:B,to:w},null!=S&&r.a.createElement("img",{className:"navbar__logo",src:M,alt:S.alt}),null!=C&&r.a.createElement("strong",null,C))),r.a.createElement("div",{className:"navbar-sidebar__items"},r.a.createElement("div",{className:"menu"},r.a.createElement("ul",{className:"menu__list"},I.map((function(e,t){return r.a.createElement("li",{className:"menu__list-item",key:t},r.a.createElement(h,g({className:"menu__link"},e,{onClick:B})))}))))))))},E=a(208);a(206);t.a=function(e){const{siteConfig:t={}}=Object(c.a)(),{favicon:a,tagline:n,title:i,themeConfig:{image:s},url:m,customFields:u={}}=t,{children:d,title:f,noFooter:p,description:g,image:h,keywords:b,permalink:y}=e,_=g||u.description,N=b||u.keywords,w=f||i+" \xb7 "+n,k=h||s,O=m+Object(l.a)(k),j=Object(l.a)(a);return r.a.createElement(r.a.Fragment,null,r.a.createElement(o.a,null,r.a.createElement("meta",{charSet:"utf-8"}),r.a.createElement("meta",{httpEquiv:"x-ua-compatible",content:"ie=edge"}),r.a.createElement("meta",{name:"viewport",content:"width=device-width"}),r.a.createElement("meta",{property:"og:type",content:"website"}),r.a.createElement("meta",{property:"og:site_name",content:"Ocyan"}),r.a.createElement("meta",{property:"og:locale",content:"en_GB"}),w&&r.a.createElement("title",null,"OCYAN | ",w),a&&r.a.createElement("link",{rel:"shortcut icon",href:j}),y&&r.a.createElement("meta",{property:"og:url",content:m+y}),w&&r.a.createElement("meta",{property:"og:title",content:w}),w&&r.a.createElement("meta",{property:"twitter:title",content:w}),_&&r.a.createElement("meta",{name:"description",content:_}),_&&r.a.createElement("meta",{property:"og:description",content:_}),_&&r.a.createElement("meta",{property:"twitter:description",content:_}),N&&N.length&&r.a.createElement("meta",{name:"keywords",content:N.join(",")}),k&&r.a.createElement("meta",{property:"og:image",content:O}),k&&r.a.createElement("meta",{property:"twitter:image",content:O}),k&&r.a.createElement("meta",{name:"twitter:image:alt",content:"Image for "+w}),r.a.createElement("meta",{name:"twitter:card",content:"summary"}),r.a.createElement("meta",{name:"google-site-verification",content:"IFUQ8Ontdw4bha8ChJJjUY0KGf6uy6f_79haAr6j6RI"}),r.a.createElement("meta",{name:"google-site-verification",content:"SbPQpGApMX3M8jPF73c2QADdj_XVK1Z7MBOFzX_LTQ0"})),r.a.createElement(v,null),r.a.createElement("main",{className:"main"},d),!p&&r.a.createElement(E.a,null),r.a.createElement("script",{type:"text/javascript",id:"hs-script-loader",async:!0,defer:!0,src:"//js.hs-scripts.com/6280325.js"}),r.a.createElement("script",{type:"text/javascript",async:!0,defer:!0,src:"/js/twitter.js"}))}},205:function(e,t,a){e.exports={displayOnlyInLargeViewport:"displayOnlyInLargeViewport_16CL",toggle:"toggle_1GuM",moon:"moon_1EKo",sun:"sun_2UBI",hideLogoText:"hideLogoText_2KyX"}},206:function(e,t,a){},207:function(e,t,a){"use strict";var n=a(0);t.a=function(){var e=n.useState("undefined"!=typeof document?document.querySelector("html").getAttribute("data-theme"):""),t=e[0],a=e[1];return n.useEffect((function(){try{a(localStorage.getItem("theme"))}catch(e){console.error(e)}}),[a]),[t,n.useCallback((function(e){try{localStorage.setItem("theme",e),a(e)}catch(t){console.error(t)}}),[a])]}},208:function(e,t,a){"use strict";a(59);var n=a(0),r=a.n(n),o=a(203),c=a.n(o),l=a(201),i=a(200),s=a(202);function m(){return(m=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}function u(e){var t=e.item,a=Object(s.a)(t.to);return r.a.createElement(l.a,m({className:"footer__link-item"},t,t.href?{target:"_blank",rel:"noopener noreferrer",href:t.href}:{to:a}),t.label)}t.a=function(){var e=Object(i.a)().siteConfig,t=(void 0===e?{}:e).themeConfig,a=(void 0===t?{}:t).footer,n=a||{},o=n.copyright,l=n.links,m=void 0===l?[]:l,d=n.logo,f=void 0===d?{}:d,p=Object(s.a)(f.src);return a?r.a.createElement("footer",{className:c()("footer",{"footer--dark":"dark"===a.style})},r.a.createElement("div",{className:"container"},m&&m.length>0&&r.a.createElement("div",{className:"row footer__links"},m.map((function(e,t){return r.a.createElement("div",{key:t,className:"col footer__col"},null!=e.title?r.a.createElement("h4",{className:"footer__title"},e.title):null,null!=e.items&&Array.isArray(e.items)&&e.items.length>0?r.a.createElement("ul",{className:"footer__items"},e.items.map((function(e,t){return e.html?r.a.createElement("div",{key:t,dangerouslySetInnerHTML:{__html:e.html}}):r.a.createElement("li",{key:e.href||e.to,className:"footer__item"},r.a.createElement(u,{item:e}))}))):null)}))),(f||o)&&r.a.createElement("div",{className:"text--center"},f&&f.src&&r.a.createElement("div",{className:"margin-bottom--sm"},r.a.createElement("img",{className:"footer__logo",alt:f.alt,src:p})),o))):null}},209:function(e,t,a){"use strict";var n=function(){return null};a.d(t,"a",(function(){return n}))},210:function(e,t,a){"use strict";var n=a(9),r=a(25),o=a(94),c="".startsWith;n(n.P+n.F*a(95)("startsWith"),"String",{startsWith:function(e){var t=o(this,e,"startsWith"),a=r(Math.min(arguments.length>1?arguments[1]:void 0,t.length)),n=String(e);return c?c.call(t,n,a):t.slice(a,a+n.length)===n}})},214:function(e,t,a){e.exports={heroBanner:"heroBanner_2Ftp",heroAnnouncement:"heroAnnouncement_3G6U",buttons:"buttons_1Wc3",features:"features_P2SU",featureImage:"featureImage_3Xqx"}}}]);