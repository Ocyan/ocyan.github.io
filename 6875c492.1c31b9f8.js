(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{163:function(e,a,t){"use strict";t.r(a);t(219);var n=t(0),r=t.n(n),l=t(204),c=t(211),m=t(201);a.default=function(e){var a=e.metadata,t=e.items,n=a.allTagsPath,o=a.name,i=a.count;return r.a.createElement(l.a,{title:'Blog | Tagged "'+o+'"',description:'Blog | Tagged "'+o+'"'},r.a.createElement("div",{className:"container margin-vert--xl"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col col--8 col--offset-2"},r.a.createElement("h1",null,i,' post(s) tagged with "',o,'"'),r.a.createElement(m.a,{href:n},"View All Tags"),r.a.createElement("div",{className:"margin-vert--xl"},t.map((function(e){var a=e.content,t=e.metadata;return r.a.createElement("div",{className:"margin-vert--xl",key:t.permalink},r.a.createElement(c.a,{frontMatter:a.frontMatter,metadata:t,truncated:!0},r.a.createElement(a,null)))})))))))}},204:function(e,a,t){"use strict";var n=t(0),r=t.n(n),l=t(61),c=t(200),m=t(202),o=(t(59),t(201)),i=t(209),s=t(203),u=t.n(s),g=t(207),E=t(205),d=t.n(E);function p(){return(p=Object.assign||function(e){for(var a=1;a<arguments.length;a++){var t=arguments[a];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e}).apply(this,arguments)}function v(e){var a=Object(m.a)(e.to);return r.a.createElement(o.a,p({className:"navbar__item navbar__link"},e,e.href?{target:"_blank",rel:"noopener noreferrer",href:e.href}:{activeClassName:"navbar__link--active",to:a}),e.label)}var h=function(){var e=Object(c.a)(),a=Object(n.useState)(!1),t=a[0],s=a[1],E=Object(n.useState)(!1),h=E[0],b=E[1],f=Object(g.a)(),_=f[0],y=(f[1],e.siteConfig),N=void 0===y?{}:y,k=N.baseUrl,w=N.themeConfig,j=(void 0===w?{}:w).navbar,O=void 0===j?{}:j,x=O.title,C=O.logo,M=void 0===C?{}:C,T=O.links,B=void 0===T?[]:T,F=Object(n.useCallback)((function(){s(!0)}),[s]),I=Object(n.useCallback)((function(){s(!1)}),[s]),L=Object(m.a)(M.src);return r.a.createElement(r.a.Fragment,null,r.a.createElement(l.a,null,r.a.createElement("html",{lang:"en","data-theme":_})),r.a.createElement("nav",{className:u()("navbar","navbar--light","navbar--fixed-top",{"navbar-sidebar--show":t})},r.a.createElement("div",{className:"navbar__inner"},r.a.createElement("div",{className:"navbar__items"},r.a.createElement("div",{"aria-label":"Navigation bar toggle",className:"navbar__toggle",role:"button",tabIndex:0,onClick:F,onKeyDown:F},r.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"30",height:"30",viewBox:"0 0 30 30",role:"img",focusable:"false"},r.a.createElement("title",null,"Menu"),r.a.createElement("path",{stroke:"currentColor",strokeLinecap:"round",strokeMiterlimit:"10",strokeWidth:"2",d:"M4 7h22M4 15h22M4 23h22"}))),r.a.createElement(o.a,{className:"navbar__brand",to:k},null!=M&&r.a.createElement("img",{className:"navbar__logo",src:L,alt:M.alt}),null!=x&&r.a.createElement("strong",{className:h?d.a.hideLogoText:""},x)),B.filter((function(e){return"right"!==e.position})).map((function(e,a){return r.a.createElement(v,p({},e,{key:a}))}))),r.a.createElement("div",{className:"navbar__items navbar__items--right"},B.filter((function(e){return"right"===e.position})).map((function(e,a){return r.a.createElement(v,p({},e,{key:a}))})),r.a.createElement(i.a,{handleSearchBarToggle:b,isSearchBarExpanded:h}))),r.a.createElement("div",{role:"presentation",className:"navbar-sidebar__backdrop",onClick:function(){s(!1)}}),r.a.createElement("div",{className:"navbar-sidebar"},r.a.createElement("div",{className:"navbar-sidebar__brand"},r.a.createElement(o.a,{className:"navbar__brand",onClick:I,to:k},null!=M&&r.a.createElement("img",{className:"navbar__logo",src:L,alt:M.alt}),null!=x&&r.a.createElement("strong",null,x))),r.a.createElement("div",{className:"navbar-sidebar__items"},r.a.createElement("div",{className:"menu"},r.a.createElement("ul",{className:"menu__list"},B.map((function(e,a){return r.a.createElement("li",{className:"menu__list-item",key:a},r.a.createElement(v,p({className:"menu__link"},e,{onClick:I})))}))))))))},b=t(208);t(206);a.a=function(e){var a=Object(c.a)().siteConfig,t=void 0===a?{}:a,n=t.favicon,o=t.tagline,i=t.title,s=t.themeConfig.image,u=t.url,g=t.customFields,E=void 0===g?{}:g,d=e.children,p=e.title,v=e.noFooter,f=e.description,_=e.image,y=e.keywords,N=e.permalink,k=f||E.description,w=y||E.keywords,j=p||i+" \xb7 "+o,O=_||s,x=u+Object(m.a)(O),C=Object(m.a)(n);return r.a.createElement(r.a.Fragment,null,r.a.createElement(l.a,null,r.a.createElement("meta",{charSet:"utf-8"}),r.a.createElement("meta",{httpEquiv:"x-ua-compatible",content:"ie=edge"}),r.a.createElement("meta",{name:"viewport",content:"width=device-width"}),r.a.createElement("meta",{property:"og:type",content:"website"}),r.a.createElement("meta",{property:"og:site_name",content:"Ocyan"}),r.a.createElement("meta",{property:"og:locale",content:"en_GB"}),j&&r.a.createElement("title",null,"OCYAN | ",j),n&&r.a.createElement("link",{rel:"shortcut icon",href:C}),N&&r.a.createElement("meta",{property:"og:url",content:u+N}),j&&r.a.createElement("meta",{property:"og:title",content:j}),j&&r.a.createElement("meta",{property:"twitter:title",content:j}),k&&r.a.createElement("meta",{name:"description",content:k}),k&&r.a.createElement("meta",{property:"og:description",content:k}),k&&r.a.createElement("meta",{property:"twitter:description",content:k}),w&&w.length&&r.a.createElement("meta",{name:"keywords",content:w.join(",")}),O&&r.a.createElement("meta",{property:"og:image",content:x}),O&&r.a.createElement("meta",{property:"twitter:image",content:x}),O&&r.a.createElement("meta",{name:"twitter:image:alt",content:"Image for "+j}),r.a.createElement("meta",{name:"twitter:card",content:"summary"}),r.a.createElement("meta",{name:"google-site-verification",content:"IFUQ8Ontdw4bha8ChJJjUY0KGf6uy6f_79haAr6j6RI"}),r.a.createElement("meta",{name:"google-site-verification",content:"SbPQpGApMX3M8jPF73c2QADdj_XVK1Z7MBOFzX_LTQ0"})),r.a.createElement(h,null),r.a.createElement("main",{className:"main"},d),!v&&r.a.createElement(b.a,null),r.a.createElement("script",{type:"text/javascript",id:"hs-script-loader",async:!0,defer:!0,src:"//js.hs-scripts.com/6280325.js"}),r.a.createElement("script",{type:"text/javascript",async:!0,defer:!0,src:"/js/twitter.js"}))}},205:function(e,a,t){e.exports={displayOnlyInLargeViewport:"displayOnlyInLargeViewport_16CL",toggle:"toggle_1GuM",moon:"moon_1EKo",sun:"sun_2UBI",hideLogoText:"hideLogoText_2KyX"}},206:function(e,a,t){},211:function(e,a,t){"use strict";t(96);var n=t(0),r=t.n(n),l=t(203),c=t.n(l),m=t(199),o=t(201),i=t(217),s=t(239),u=t(240),g=t(241),E=t(242),d=t(243),p=t(244),v=t(245),h=t(246),b=t(247),f=t(248),_=t(212),y=t.n(_);a.a=function(e){var a,t,n,l,_,N=e.children,k=e.frontMatter,w=e.metadata,j=e.truncated,O=w.date,x=w.permalink,C=w.tags,M=k.author,T=k.authorURL,B=k.authorTitle,F=k.authorFBID,I=k.title,L=k.description;return r.a.createElement("div",null,(a=O.substring(0,10).split("-"),t=a[0],n=["January","February","March","April","May","June","July","August","September","October","November","December"][parseInt(a[1],10)-1],l=parseInt(a[2],10),_=F?"https://graph.facebook.com/"+F+"/picture/?height=200&width=200":k.authorImageURL,r.a.createElement("header",null,r.a.createElement("h1",{className:c()("margin-bottom--sm",y.a.blogPostTitle)},r.a.createElement(o.a,{to:x},I)),r.a.createElement("div",{className:"margin-bottom--sm"},r.a.createElement("small",null,n," ",l,", ",t)),r.a.createElement("div",{className:"avatar margin-bottom--md"},_&&r.a.createElement("a",{className:"avatar__photo-link",href:T,target:"_blank",rel:"noreferrer noopener"},r.a.createElement("img",{className:"avatar__photo",src:_,alt:M})),r.a.createElement("div",{className:"avatar__intro"},M&&r.a.createElement(r.a.Fragment,null,r.a.createElement("h4",{className:"avatar__name"},r.a.createElement("a",{href:T,target:"_blank",rel:"noreferrer noopener"},M)),r.a.createElement("small",{className:"avatar__subtitle"},B)))),r.a.createElement("div",{className:"social margin-bottom--sm"},r.a.createElement(s.a,{url:x,subject:"OCYAN | "+I,body:"https://ocyan.com"+x},r.a.createElement(u.a,{size:24,round:!0})),r.a.createElement(g.a,{url:x,title:I+" https://ocyan.com"+x,via:"ocyan_cloud",hashtags:["practicalBlockchain"]},r.a.createElement(E.a,{size:24,round:!0})),r.a.createElement(d.a,{url:x,title:I,summary:L,source:"Ocyan"},r.a.createElement(p.a,{size:24,round:!0})),r.a.createElement(v.a,{url:x,title:I},r.a.createElement(h.a,{size:24,round:!0})),r.a.createElement(b.a,{url:x,quote:I,hashtag:"practicalBlockchain"},r.a.createElement(f.a,{size:24,round:!0}))))),r.a.createElement("article",{className:"markdown"},r.a.createElement(m.a,{components:i.a},N)),r.a.createElement("div",{className:"row margin-vert--lg"},r.a.createElement("div",{className:"col"},C.length>0&&r.a.createElement(r.a.Fragment,null,r.a.createElement("strong",null,"Tags:"),C.map((function(e){var a=e.label,t=e.permalink;return r.a.createElement(o.a,{key:t,className:"margin-horiz--sm",to:t},a)})))),r.a.createElement("div",{className:"col text--right"},j&&r.a.createElement(o.a,{to:w.permalink},r.a.createElement("strong",null,"Read More")))))}},212:function(e,a,t){e.exports={blogPostTitle:"blogPostTitle_kDB-"}},219:function(e,a,t){var n=t(14).f,r=Function.prototype,l=/^\s*function ([^ (]*)/;"name"in r||t(11)&&n(r,"name",{configurable:!0,get:function(){try{return(""+this).match(l)[1]}catch(e){return""}}})}}]);