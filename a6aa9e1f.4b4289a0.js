(window.webpackJsonp=window.webpackJsonp||[]).push([[35],{197:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),l=t(204),c=t(211),o=t(201);var m=function(e){var a=e.metadata,t=a.previousPage,n=a.nextPage;return r.a.createElement("nav",{className:"pagination-nav"},r.a.createElement("div",{className:"pagination-nav__item"},t&&r.a.createElement(o.a,{className:"pagination-nav__link",to:t},r.a.createElement("h4",{className:"pagination-nav__link--label"},"\xab Newer Entries"))),r.a.createElement("div",{className:"pagination-nav__item pagination-nav__item--next"},n&&r.a.createElement(o.a,{className:"pagination-nav__link",to:n},r.a.createElement("h4",{className:"pagination-nav__link--label"},"Older Entries \xbb"))))};a.default=function(e){var a=e.metadata,t=e.items;return r.a.createElement(l.a,{title:"Blog",description:"Blog"},r.a.createElement("div",{className:"container margin-vert--xl"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col col--8 col--offset-2"},r.a.createElement("h1",null,"Stay up-to-date"),r.a.createElement("p",null,"If you would like to stay tunned for the updates that we share, please \xa0",r.a.createElement("a",{title:"subscribe to our newsletter",href:"https://ocyan.substack.com/subscribe?utm_source=ocyan.com"},"subscribe to our newsletter."),"\xa0 You may also follow us on \xa0",r.a.createElement("a",{title:"follow us on twitter",href:"https://twitter.com/ocyan_cloud"},"twitter"),"\xa0 and ",r.a.createElement("a",{title:"follow us on linkedin",href:"https://www.linkedin.com/company/ocyan-tech"},"linkedin"),"."))),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col col--8 col--offset-2"},t.map((function(e){var a=e.content,t=e.metadata;return r.a.createElement("div",{className:"margin-bottom--xl",key:t.permalink},r.a.createElement(c.a,{frontMatter:a.frontMatter,metadata:t,truncated:!0},r.a.createElement(a,null)))})),r.a.createElement(m,{metadata:a})))))}},204:function(e,a,t){"use strict";var n=t(0),r=t.n(n),l=t(61),c=t(200),o=t(202),m=(t(59),t(201)),i=t(209),s=t(203),u=t.n(s),E=t(207),p=t(205),d=t.n(p);function g(){return(g=Object.assign||function(e){for(var a=1;a<arguments.length;a++){var t=arguments[a];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e}).apply(this,arguments)}function v(e){var a=Object(o.a)(e.to);return r.a.createElement(m.a,g({className:"navbar__item navbar__link"},e,e.href?{target:"_blank",rel:"noopener noreferrer",href:e.href}:{activeClassName:"navbar__link--active",to:a}),e.label)}var b=function(){var e=Object(c.a)(),a=Object(n.useState)(!1),t=a[0],s=a[1],p=Object(n.useState)(!1),b=p[0],h=p[1],_=Object(E.a)(),f=_[0],N=(_[1],e.siteConfig),w=void 0===N?{}:N,y=w.baseUrl,k=w.themeConfig,j=(void 0===k?{}:k).navbar,O=void 0===j?{}:j,x=O.title,C=O.logo,M=void 0===C?{}:C,I=O.links,F=void 0===I?[]:I,L=Object(n.useCallback)((function(){s(!0)}),[s]),T=Object(n.useCallback)((function(){s(!1)}),[s]),B=Object(o.a)(M.src);return r.a.createElement(r.a.Fragment,null,r.a.createElement(l.a,null,r.a.createElement("html",{lang:"en","data-theme":f})),r.a.createElement("nav",{className:u()("navbar","navbar--light","navbar--fixed-top",{"navbar-sidebar--show":t})},r.a.createElement("div",{className:"navbar__inner"},r.a.createElement("div",{className:"navbar__items"},r.a.createElement("div",{"aria-label":"Navigation bar toggle",className:"navbar__toggle",role:"button",tabIndex:0,onClick:L,onKeyDown:L},r.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"30",height:"30",viewBox:"0 0 30 30",role:"img",focusable:"false"},r.a.createElement("title",null,"Menu"),r.a.createElement("path",{stroke:"currentColor",strokeLinecap:"round",strokeMiterlimit:"10",strokeWidth:"2",d:"M4 7h22M4 15h22M4 23h22"}))),r.a.createElement(m.a,{className:"navbar__brand",to:y},null!=M&&r.a.createElement("img",{className:"navbar__logo",src:B,alt:M.alt}),null!=x&&r.a.createElement("strong",{className:b?d.a.hideLogoText:""},x)),F.filter((function(e){return"right"!==e.position})).map((function(e,a){return r.a.createElement(v,g({},e,{key:a}))}))),r.a.createElement("div",{className:"navbar__items navbar__items--right"},F.filter((function(e){return"right"===e.position})).map((function(e,a){return r.a.createElement(v,g({},e,{key:a}))})),r.a.createElement(i.a,{handleSearchBarToggle:h,isSearchBarExpanded:b}))),r.a.createElement("div",{role:"presentation",className:"navbar-sidebar__backdrop",onClick:function(){s(!1)}}),r.a.createElement("div",{className:"navbar-sidebar"},r.a.createElement("div",{className:"navbar-sidebar__brand"},r.a.createElement(m.a,{className:"navbar__brand",onClick:T,to:y},null!=M&&r.a.createElement("img",{className:"navbar__logo",src:B,alt:M.alt}),null!=x&&r.a.createElement("strong",null,x))),r.a.createElement("div",{className:"navbar-sidebar__items"},r.a.createElement("div",{className:"menu"},r.a.createElement("ul",{className:"menu__list"},F.map((function(e,a){return r.a.createElement("li",{className:"menu__list-item",key:a},r.a.createElement(v,g({className:"menu__link"},e,{onClick:T})))}))))))))},h=t(208);t(206);a.a=function(e){const{siteConfig:a={}}=Object(c.a)(),{favicon:t,tagline:n,title:m,themeConfig:{image:i},url:s,customFields:u={}}=a,{children:E,title:p,noFooter:d,description:g,image:v,keywords:_,permalink:f}=e,N=g||u.description,w=_||u.keywords,y=p||m+" \xb7 "+n,k=v||i,j=s+Object(o.a)(k),O=Object(o.a)(t);return r.a.createElement(r.a.Fragment,null,r.a.createElement(l.a,null,r.a.createElement("meta",{charSet:"utf-8"}),r.a.createElement("meta",{httpEquiv:"x-ua-compatible",content:"ie=edge"}),r.a.createElement("meta",{name:"viewport",content:"width=device-width"}),r.a.createElement("meta",{property:"og:type",content:"website"}),r.a.createElement("meta",{property:"og:site_name",content:"Ocyan"}),r.a.createElement("meta",{property:"og:locale",content:"en_GB"}),y&&r.a.createElement("title",null,"OCYAN | ",y),t&&r.a.createElement("link",{rel:"shortcut icon",href:O}),f&&r.a.createElement("meta",{property:"og:url",content:s+f}),y&&r.a.createElement("meta",{property:"og:title",content:y}),y&&r.a.createElement("meta",{property:"twitter:title",content:y}),N&&r.a.createElement("meta",{name:"description",content:N}),N&&r.a.createElement("meta",{property:"og:description",content:N}),N&&r.a.createElement("meta",{property:"twitter:description",content:N}),w&&w.length&&r.a.createElement("meta",{name:"keywords",content:w.join(",")}),k&&r.a.createElement("meta",{property:"og:image",content:j}),k&&r.a.createElement("meta",{property:"twitter:image",content:j}),k&&r.a.createElement("meta",{name:"twitter:image:alt",content:"Image for "+y}),r.a.createElement("meta",{name:"twitter:card",content:"summary"}),r.a.createElement("meta",{name:"google-site-verification",content:"IFUQ8Ontdw4bha8ChJJjUY0KGf6uy6f_79haAr6j6RI"}),r.a.createElement("meta",{name:"google-site-verification",content:"SbPQpGApMX3M8jPF73c2QADdj_XVK1Z7MBOFzX_LTQ0"})),r.a.createElement(b,null),r.a.createElement("main",{className:"main"},E),!d&&r.a.createElement(h.a,null),r.a.createElement("script",{type:"text/javascript",id:"hs-script-loader",async:!0,defer:!0,src:"//js.hs-scripts.com/6280325.js"}),r.a.createElement("script",{type:"text/javascript",async:!0,defer:!0,src:"/js/twitter.js"}))}},205:function(e,a,t){e.exports={displayOnlyInLargeViewport:"displayOnlyInLargeViewport_16CL",toggle:"toggle_1GuM",moon:"moon_1EKo",sun:"sun_2UBI",hideLogoText:"hideLogoText_2KyX"}},206:function(e,a,t){},211:function(e,a,t){"use strict";t(96);var n=t(0),r=t.n(n),l=t(203),c=t.n(l),o=t(199),m=t(201),i=t(213),s=t(212),u=t.n(s);a.a=function(e){var a,t,n,l,s,E=e.children,p=e.frontMatter,d=e.metadata,g=e.truncated,v=d.date,b=d.permalink,h=d.tags,_=p.author,f=p.authorURL,N=p.authorTitle,w=p.authorFBID,y=p.title;return r.a.createElement("div",null,(a=v.substring(0,10).split("-"),t=a[0],n=["January","February","March","April","May","June","July","August","September","October","November","December"][parseInt(a[1],10)-1],l=parseInt(a[2],10),s=w?"https://graph.facebook.com/"+w+"/picture/?height=200&width=200":p.authorImageURL,r.a.createElement("header",null,r.a.createElement("h1",{className:c()("margin-bottom--sm",u.a.blogPostTitle)},r.a.createElement(m.a,{to:b},y)),r.a.createElement("div",{className:"margin-bottom--sm"},r.a.createElement("small",null,n," ",l,", ",t)),r.a.createElement("div",{className:"avatar margin-bottom--md"},s&&r.a.createElement("a",{className:"avatar__photo-link",href:f,target:"_blank",rel:"noreferrer noopener"},r.a.createElement("img",{className:"avatar__photo",src:s,alt:_})),r.a.createElement("div",{className:"avatar__intro"},_&&r.a.createElement(r.a.Fragment,null,r.a.createElement("h4",{className:"avatar__name"},r.a.createElement("a",{href:f,target:"_blank",rel:"noreferrer noopener"},_)),r.a.createElement("small",{className:"avatar__subtitle"},N)))))),r.a.createElement("article",{className:"markdown"},r.a.createElement(o.a,{components:i.a},E)),r.a.createElement("div",{className:"row margin-vert--lg"},r.a.createElement("div",{className:"col"},h.length>0&&r.a.createElement(r.a.Fragment,null,r.a.createElement("strong",null,"Tags:"),h.map((function(e){var a=e.label,t=e.permalink;return r.a.createElement(m.a,{key:t,className:"margin-horiz--sm",to:t},a)})))),r.a.createElement("div",{className:"col text--right"},g&&r.a.createElement(m.a,{to:d.permalink},r.a.createElement("strong",null,"Read More")))))}},212:function(e,a,t){e.exports={blogPostTitle:"blogPostTitle_2RZH"}}}]);