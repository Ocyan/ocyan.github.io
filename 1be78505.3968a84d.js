(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{134:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),r=t(138),c=t(137),i=t(46),o=t(142),s=t(141),m=t.n(s),u=t(139),d=t(168),b=t.n(d);const p=24;function E({item:e,onItemClick:a,collapsible:t}){const{items:r,href:c,label:i,type:o}=e,[s,d]=Object(n.useState)(e.collapsed),[b,p]=Object(n.useState)(null);switch(e.collapsed!==b&&(p(e.collapsed),d(e.collapsed)),o){case"category":return r.length>0&&l.a.createElement("li",{className:m()("menu__list-item",{"menu__list-item--collapsed":s}),key:i},l.a.createElement("a",{className:m()("menu__link",{"menu__link--sublist":t,"menu__link--active":t&&!e.collapsed}),href:"#!",onClick:t?()=>d(!s):void 0},i),l.a.createElement("ul",{className:"menu__list"},r.map(e=>l.a.createElement(E,{key:e.label,item:e,onItemClick:a,collapsible:t}))));case"link":default:return l.a.createElement("li",{className:"menu__list-item",key:i},l.a.createElement(u.a,{activeClassName:"menu__link--active",className:"menu__link",to:c,onClick:a},i))}}var g=function(e){const[a,t]=Object(n.useState)(!1),{docsSidebars:r,location:c,sidebar:i,sidebarCollapsible:o}=e;if(!i)return null;const s=r[i];if(!s)throw new Error('Cannot find the sidebar "'+i+'" in the sidebar config!');return o&&s.forEach(e=>(function e(a,t){const{items:n,href:l,type:r}=a;switch(r){case"category":{const l=n.map(a=>e(a,t)).filter(e=>e).length>0;return a.collapsed=!l,l}case"link":default:return l===t.pathname.replace(/\/$/,"")}})(e,c)),l.a.createElement("div",{className:b.a.sidebar},l.a.createElement("div",{className:m()("menu","menu--responsive",{"menu--show":a})},l.a.createElement("button",{"aria-label":a?"Close Menu":"Open Menu",className:"button button--secondary button--sm menu__button",type:"button",onClick:()=>{t(!a)}},a?l.a.createElement("span",{className:m()(b.a.sidebarMenuIcon,b.a.sidebarMenuCloseIcon)},"\xd7"):l.a.createElement("svg",{className:b.a.sidebarMenuIcon,xmlns:"http://www.w3.org/2000/svg",height:p,width:p,viewBox:"0 0 32 32",role:"img",focusable:"false"},l.a.createElement("title",null,"Menu"),l.a.createElement("path",{stroke:"currentColor",strokeLinecap:"round",strokeMiterlimit:"10",strokeWidth:"2",d:"M4 7h22M4 15h22M4 23h22"}))),l.a.createElement("ul",{className:"menu__list"},s.map(e=>e.items.length>0&&l.a.createElement(E,{key:e.label,item:e,onItemClick:()=>{t(!1)},collapsible:o})))))},h=t(158),_=t(160),v=t(18),f=t(169),k=t.n(f);a.default=function(e){const{route:a,docsMetadata:t,location:n}=e,{permalinkToSidebar:s,docsSidebars:m}=t,u=s[n.pathname.replace(/\/$/,"")],{siteConfig:{themeConfig:d={}}={}}=Object(c.a)(),{sidebarCollapsible:b=!0}=d;return p=a.routes,E=n.pathname,p.some(e=>Object(v.c)(E,e))?l.a.createElement(o.a,null,l.a.createElement("div",{className:k.a.docPage},u&&l.a.createElement("div",{className:k.a.docSidebarContainer},l.a.createElement(g,{docsSidebars:m,location:n,sidebar:u,sidebarCollapsible:b})),l.a.createElement("main",{className:k.a.docMainContainer},l.a.createElement(r.a,{components:h.a},Object(i.a)(a.routes))))):l.a.createElement(_.default,e);var p,E}},142:function(e,a,t){"use strict";var n=t(0),l=t.n(n),r=t(34),c=t(137),i=t(140),o=t(139),s=t(147),m=t(141),u=t.n(m),d=t(145),b=t(143),p=t.n(b);function E(){return(E=Object.assign||function(e){for(var a=1;a<arguments.length;a++){var t=arguments[a];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e}).apply(this,arguments)}function g(e){const a=Object(i.a)(e.to);return l.a.createElement(o.a,E({className:"navbar__item navbar__link"},e,e.href?{target:"_blank",rel:"noopener noreferrer",href:e.href}:{activeClassName:"navbar__link--active",to:a}),e.label)}var h=function(){const e=Object(c.a)(),[a,t]=Object(n.useState)(!1),[m,b]=Object(n.useState)(!1),[h,_]=Object(d.a)(),{siteConfig:v={}}=e,{baseUrl:f,themeConfig:k={}}=v,{navbar:N={}}=k,{title:w,logo:C={},links:y=[]}=N,j=Object(n.useCallback)(()=>{t(!0)},[t]),M=Object(n.useCallback)(()=>{t(!1)},[t]),O=Object(i.a)(C.src);return l.a.createElement(l.a.Fragment,null,l.a.createElement(r.a,null,l.a.createElement("html",{lang:"en","data-theme":h})),l.a.createElement("nav",{className:u()("navbar","navbar--light","navbar--fixed-top",{"navbar-sidebar--show":a})},l.a.createElement("div",{className:"navbar__inner"},l.a.createElement("div",{className:"navbar__items"},l.a.createElement("div",{"aria-label":"Navigation bar toggle",className:"navbar__toggle",role:"button",tabIndex:0,onClick:j,onKeyDown:j},l.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"30",height:"30",viewBox:"0 0 30 30",role:"img",focusable:"false"},l.a.createElement("title",null,"Menu"),l.a.createElement("path",{stroke:"currentColor",strokeLinecap:"round",strokeMiterlimit:"10",strokeWidth:"2",d:"M4 7h22M4 15h22M4 23h22"}))),l.a.createElement(o.a,{className:"navbar__brand",to:f},null!=C&&l.a.createElement("img",{className:"navbar__logo",src:O,alt:C.alt}),null!=w&&l.a.createElement("strong",{className:m?p.a.hideLogoText:""},w)),y.filter(e=>"right"!==e.position).map((e,a)=>l.a.createElement(g,E({},e,{key:a})))),l.a.createElement("div",{className:"navbar__items navbar__items--right"},y.filter(e=>"right"===e.position).map((e,a)=>l.a.createElement(g,E({},e,{key:a}))),l.a.createElement(s.a,{handleSearchBarToggle:b,isSearchBarExpanded:m}))),l.a.createElement("div",{role:"presentation",className:"navbar-sidebar__backdrop",onClick:()=>{t(!1)}}),l.a.createElement("div",{className:"navbar-sidebar"},l.a.createElement("div",{className:"navbar-sidebar__brand"},l.a.createElement(o.a,{className:"navbar__brand",onClick:M,to:f},null!=C&&l.a.createElement("img",{className:"navbar__logo",src:O,alt:C.alt}),null!=w&&l.a.createElement("strong",null,w))),l.a.createElement("div",{className:"navbar-sidebar__items"},l.a.createElement("div",{className:"menu"},l.a.createElement("ul",{className:"menu__list"},y.map((e,a)=>l.a.createElement("li",{className:"menu__list-item",key:a},l.a.createElement(g,E({className:"menu__link"},e,{onClick:M}))))))))))},_=t(146);t(144);a.a=function(e){const{siteConfig:a={}}=Object(c.a)(),{favicon:t,tagline:n,title:o,themeConfig:{image:s},url:m}=a,{children:u,title:d,noFooter:b,description:p,image:E,keywords:g,permalink:v}=e,f=d||o+" \xb7 "+n,k=E||s,N=m+Object(i.a)(k),w=Object(i.a)(t);return l.a.createElement(l.a.Fragment,null,l.a.createElement(r.a,null,l.a.createElement("meta",{charSet:"utf-8"}),l.a.createElement("meta",{httpEquiv:"x-ua-compatible",content:"ie=edge"}),l.a.createElement("meta",{name:"viewport",content:"width=device-width"}),f&&l.a.createElement("title",null,"OCYAN | ",f),f&&l.a.createElement("meta",{property:"og:title",content:f}),t&&l.a.createElement("link",{rel:"shortcut icon",href:w}),p&&l.a.createElement("meta",{name:"description",content:p}),p&&l.a.createElement("meta",{property:"og:description",content:p}),g&&g.length&&l.a.createElement("meta",{name:"keywords",content:g.join(",")}),k&&l.a.createElement("meta",{property:"og:image",content:N}),k&&l.a.createElement("meta",{property:"twitter:image",content:N}),k&&l.a.createElement("meta",{name:"twitter:image:alt",content:"Image for "+f}),v&&l.a.createElement("meta",{property:"og:url",content:m+v}),l.a.createElement("meta",{name:"twitter:card",content:"summary"}),l.a.createElement("meta",{name:"google-site-verification",content:"IFUQ8Ontdw4bha8ChJJjUY0KGf6uy6f_79haAr6j6RI"}),l.a.createElement("meta",{name:"google-site-verification",content:"SbPQpGApMX3M8jPF73c2QADdj_XVK1Z7MBOFzX_LTQ0"})),l.a.createElement(h,null),l.a.createElement("main",{className:"main"},u),!b&&l.a.createElement(_.a,null),l.a.createElement("script",{type:"text/javascript",id:"hs-script-loader",async:!0,defer:!0,src:"//js.hs-scripts.com/6280325.js"}))}},143:function(e,a,t){e.exports={displayOnlyInLargeViewport:"displayOnlyInLargeViewport_16CL",toggle:"toggle_1GuM",moon:"moon_1EKo",sun:"sun_2UBI",hideLogoText:"hideLogoText_2KyX"}},144:function(e,a,t){},160:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),r=t(142);a.default=function(){return l.a.createElement(r.a,{title:"Page Not Found"},l.a.createElement("div",{className:"container margin-vert--xl"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col col--6 col--offset-3"},l.a.createElement("h1",{className:"hero__title"},"Page Not Found"),l.a.createElement("p",null,"We could not find what you were looking for."),l.a.createElement("p",null,"Please contact the owner of the site that linked you to the original URL and let them know their link is broken.")))))}},168:function(e,a,t){e.exports={sidebar:"sidebar_1kLs",sidebarMenuIcon:"sidebarMenuIcon_2vk4",sidebarMenuCloseIcon:"sidebarMenuCloseIcon_1JRa"}},169:function(e,a,t){e.exports={docPage:"docPage_1jis",docSidebarContainer:"docSidebarContainer_1kjN",docMainContainer:"docMainContainer_3j_A"}}}]);